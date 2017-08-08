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


(lib.Twiggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape.setTransform(21.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaA9QgKgCAAgHQAAgGAHgBIAJACQAHABAHAAQAOAAAGgOQAEgKAAgTQgEAHgGAEQgGAEgGAAQgOAAgJgKQgJgJAAgOQAAgWAMgMQANgOAUAAQAHAAAFACQAFACADADQAIAAAAAKIgBAPIgDAPIgBAYQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgmQgHAJAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgbIgHgDIgHgBQgOgBgIALg");
	this.shape_1.setTransform(13.7,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaA9QgKgCAAgHQAAgGAHgBIAJACQAHABAHAAQAOAAAGgOQAEgKAAgTQgEAHgGAEQgGAEgGAAQgOAAgJgKQgJgJAAgOQAAgWAMgMQANgOAUAAQAHAAAFACQAFACADADQAIAAAAAKIgBAPIgDAPIgBAYQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgmQgHAJAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgbIgHgDIgHgBQgOgBgIALg");
	this.shape_2.setTransform(5.2,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgDAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQADADAAADQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_3.setTransform(-1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFAWIgDgSIgCgQIgGAOIgMAgQgBADgCACQgDAEgEAAQgGAAgGgXQgDgMgDgUIgBgLIgBgMQAAgDACgDQACgCAEAAQAFAAABAGIADAMIABALIAEAjQAJgXAJggQACgIAGAAQAGAAACAJIAGAdIAFAdIAGgVIAKgqQABgFAGABQADAAACABQADADAAADIgBADQgGAagKAfQgCAHgGAIQgCAEgFAAQgIAAgFgWg");
	this.shape_4.setTransform(-8.8,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFA5QgCgCAAgDIAAgEIABgDIgBgMIAAgMIgCgdIgCggIgHAAQgSAAgJgCQgHgCAAgGQAAgEACgCQADgCADgBIANACIANABIAOAAIANgBIASABIASACQADAAACACQADACAAADQAAADgDADQgCACgDAAIgSgBIgSgBIgGAAIADAjIABAjIABAIIAAAJQAAAEgBAFQgCAEgFAAQgCAAgDgCg");
	this.shape_5.setTransform(-19.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-12.6,55.3,26.3);


(lib.to = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape.setTransform(3.4,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_1.setTransform(-3.9,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-12.4,19.1,24.9);


(lib.the = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFgBAHgCQAJgCADgEQADgFADAAQADAAACACQACACAAAEQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJAAgGAIg");
	this.shape.setTransform(8.6,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVA7QgCgHgBgLIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHANQAAAegDAGQgCAEgEABQgEAAgCgCQgCgCAAgEIAAgDIABgMIAAgLIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBASIAAAHQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAACQAAAEgCACQgCACgDAAQgGAAgCgGg");
	this.shape_1.setTransform(-0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEA3QgCgCAAgDIAAgJIAAgJIgBgtIgSgBQgHgBAAgHQAAgDACgCQACgCAEAAIAQABIgBgLIAAgKQABgDACgCQACgCADAAQAGAAABAMIAAAHIAAAEIAAAFIALgBIALAAQAFACAAAFQAAAEgCACQgCACgEAAIgDAAIgFAAIgKABIABAuIAAADIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_2.setTransform(-9,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-13.1,29.7,26.3);


(lib.team = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(11.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_1.setTransform(1.7,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAfQgKgIgBgRQABgSAIgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgHAGIgQAHIgbANQAEAHAGACQAHAEAGAAQAFAAAIgDQAIgCACgDQADgFADAAQADAAABADQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_2.setTransform(-6,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_3.setTransform(-13.8,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-12.4,38.8,24.9);


(lib.pushing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZA5QgJgCAAgGQAAgGAGAAIAJABQAGABAIAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKgBgNQAAgUAMgMQALgMATAAQAIAAAEACQAEABADAEQAIAAAAAIIgBAOIgCAOIgCAYQAAAOgDAKQgEAMgHAFQgIAHgQAAQgKAAgHgBgAgMgkQgIAJABANQAAALADAEQAFAFAIAAQAGAAAHgHQAGgIABgHIADgZIgFgDQgDgCgEAAQgNAAgHAKg");
	this.shape.setTransform(21.8,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_1.setTransform(14.1,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgNIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAANQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_2.setTransform(8.1,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHAAQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_3.setTransform(1.6,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUApQgLgEAAgIQAAgCACgDQACgCAEAAQACAAAEADQABACAGABIAIABQAFAAAGgCQAGgBAAgFQAAgKgNgEIgHgBQgKgDgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgEAAgBgDIgCgIIgRAGQgLAEAAAHIAFABQAPAEAJAEQALAIABAOQAAAMgKAGQgKAFgMAAQgJAAgJgDg");
	this.shape_4.setTransform(-6.6,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_5.setTransform(-14,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcA8QgCgCAAgEIABgdIAAgcIgBgeIgCgOQAAgFACgEQADgFAEAAQADAAACADQABACAAACIAAADIAAAEQAGgFAGgCQAFgBAFAAQAPgBAHANQAGALAAARQAAAQgJAJQgJAMgPAAQgGAAgJgDIAAAjQAAAEgCACQgCABgDAAQgEAAgCgBgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgKQAAgNgDgHQgDgGgHAAQgGAAgFADg");
	this.shape_6.setTransform(-21.8,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-12.4,55.9,24.9);


(lib.pulling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaA8QgKgCAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgPQAEgJAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgJQgJgLAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAaQgBAPgDAKQgDANgIAGQgJAHgRAAQgKAAgHgCgAgOgnQgHAKAAAOQAAAMAEAEQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape.setTransform(19.2,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIABgIQAAgRgHAAQgIABgIAJQgHAKgDANIgBAIIgBAIIABAHIAAAHQAAAEgCACQgCACgDAAQgEAAgCgCQgCgCAAgEIgBgHIAAgHIABgWIABgWIgBgHIAAgIQAAgDACgCQADgCADgBQAHAAABALIABAJQAMgRANgBQAMAAAGAMQADAHAAAOIAAAIIAAAHQAAAGACAKIACARQgBADgCACQgCACgDAAQgHABgBgIg");
	this.shape_1.setTransform(11,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIAAgSIABgSQAAgDACgDQADgCADAAQACAAADACQACADAAADIgBASIgBASIAAAOIABAOQAAADgDACQgCADgCAAQgDAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAADADQADADgBADQABAEgDADQgDACgEAAQgDAAgCgCg");
	this.shape_2.setTransform(4.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIAAgdQABgHAGAAQAIAAAAAHIAAAdIgBAbIgBAmIAAASQgBAJgGgBQgIABAAgJg");
	this.shape_3.setTransform(0,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIAAgdQABgHAGAAQAIAAAAAHIgBAdIAAAbIgBAmIAAASQgBAJgGgBQgIABAAgJg");
	this.shape_4.setTransform(-4.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAlQgKAFgMABQgKAAgHgFQgHgFgCgJQgDgVAAgQQAAgKADgOQABgHAGAAQADAAADACQACACAAAEIgBALIgBAMIABAWQAAAJACAGIAFACIAFABQAKgBALgDIAAgPIAAgPQAAgRABgMQABgHAHgBQADABADACQACACAAAEIgCAdIAAAQIABARIAAAFIAAAFQAAAEgCACQgCACgEAAQgGAAgBgIg");
	this.shape_5.setTransform(-10.8,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_6.setTransform(-19.1,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-13.1,51.2,26.3);


(lib.Pro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape.setTransform(7.3,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAhIAAgyIABgHIAAgHQAAgIAGAAQAIAAgBAMQAOgNARAAQAGAAADAEQACAFABAJIAAAFQgBAJgGAAQgHAAAAgHIAAgFIgBgHQgLACgGAFQgGAFgFAKIAAAmQAAAIgHAAQgHAAAAgIg");
	this.shape_1.setTransform(0.1,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeA5IgCgGIAAgVIABgeIACgeIAAgKIABgKQACgHAFABIAGgBIALgBQAMAAAMAJQANALAAAOQAAASgOAKQgMAJgRAAIgIAAIgBAmIgBAGQgDABgDAAQgCAAgCgBgAgQgrIAAANIgCAdIAIABQAMAAAIgFQAJgIAAgLQABgIgJgGQgIgGgJABIgFAAIgFAAg");
	this.shape_2.setTransform(-7.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-12.4,27.1,24.9);


(lib.needs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUApQgLgEAAgIQAAgCACgDQACgCAEAAQACAAAEADQABACAGABIAIABQAFAAAGgCQAGgBAAgFQAAgKgNgEIgHgBQgKgDgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgEAAgBgDIgCgIIgRAGQgLAEAAAHIAFABQAPAEAJAEQALAIABAOQAAAMgKAGQgKAFgMAAQgJAAgJgDg");
	this.shape.setTransform(16.3,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAyQgKgKAAgRQAAgUAKgKQAKgMAQAAQAJAAAEADIAHAFIACgpQABgHAGAAQAGAAABAHIgDAtIgBAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHAAAPQABAJAGAHQAHAHAJAAQAFAAAFgCIAIgGIABgDIAAgMIAAgJIAAgJQgCgFgFgDQgFgCgGAAQgLAAgGAGg");
	this.shape_1.setTransform(8.4,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgDQAJgCACgDQADgFADAAQACAAACADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_2.setTransform(0.1,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAfQgMgIAAgRQABgSAIgNQAKgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAEAAAHgDQAJgCACgDQADgFADAAQACAAACADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_3.setTransform(-8.1,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_4.setTransform(-16.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-12.4,44.6,24.9);


(lib.move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgDQAJgCACgDQADgFADAAQACAAACADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape.setTransform(13.6,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAiIgLgeIgNggIgBgEQAAgDACgCQACgCADAAQAFAAACAEIASAzIANghIAGgRQADgFAEAAQADAAACACQACADAAADQAAACgMAdIgPAhQAAAHgGAAQgFAAgCgGg");
	this.shape_1.setTransform(5.8,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_2.setTransform(-2.1,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_3.setTransform(-11.6,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-12.4,39.2,24.9);


(lib.it = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape.setTransform(2.1,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgNIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAANQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_1.setTransform(-3.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-12.4,15.4,24.9);


(lib.helping = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYA5QgKgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgFAEgHAAQgNAAgIgJQgJgKABgNQgBgUALgMQAMgMAUAAQAGAAAFACQAFABACAEQAIAAAAAIIgCAOIgCAOIgBAYQgBAOgCAKQgEAMgHAFQgJAHgPAAQgKAAgGgBgAgNgkQgGAJgBANQAAALAFAEQAEAFAHAAQAHAAAHgHQAGgIACgHIADgZIgHgDQgDgCgDAAQgNAAgIAKg");
	this.shape.setTransform(20.4,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_1.setTransform(12.7,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgNIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAANQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_2.setTransform(6.7,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcA8QgCgCAAgEIABgdIAAgcIgBgeIgCgOQAAgFACgEQADgFAEAAQADAAACADQABACAAACIAAADIAAAEQAGgFAGgCQAFgBAFAAQAPgBAHANQAGALAAARQAAAQgJAJQgJAMgPAAQgGAAgJgDIAAAjQAAAEgCACQgCABgDAAQgEAAgCgBgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgKQAAgNgDgHQgDgGgHAAQgGAAgFADg");
	this.shape_3.setTransform(0.5,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIA1IABgbIACgaIAAgaIAAgaQAAgIAGABQAIgBgBAIIAAAaIAAAaIgCAkIAAARQgBAIgFgBQgIAAAAgHg");
	this.shape_4.setTransform(-5.6,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgDQAJgCACgDQADgFADAAQACAAACADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_5.setTransform(-11.6,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHAAQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_6.setTransform(-20.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-12.4,53.1,24.9);


(lib.help = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcA8QgCgCAAgEIABgdIAAgcIgBgeIgCgOQAAgFACgEQADgFAEAAQADAAACADQABACAAACIAAADIAAAEQAGgFAGgCQAFgBAFAAQAPgBAHANQAGALAAARQAAAQgJAJQgJAMgPAAQgGAAgJgDIAAAjQAAAEgCACQgCABgDAAQgEAAgCgBgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgKQAAgNgDgHQgDgGgHAAQgGAAgFADg");
	this.shape.setTransform(10.5,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIA1IACgbIABgaIAAgaIAAgaQAAgIAHABQAGgBAAAIIAAAaIAAAaIgCAkIAAARQgBAIgFgBQgIAAAAgHg");
	this.shape_1.setTransform(4.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgDQAJgCACgDQADgFADAAQACAAADADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_2.setTransform(-1.6,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHAAQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_3.setTransform(-10.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-12.4,33.2,24.9);


(lib.gets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTApQgMgEAAgIQAAgCADgDQABgCADAAQADAAADADQACACAHABIAIABQAFAAAEgCQAHgBAAgFQAAgKgOgEIgHgBQgJgDgEgCQgGgDAAgJQAAgPAPgGIAMgFIAPgFIAGgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgDAAQgFAAgBgDIgCgIIgRAGQgKAEAAAHIADABQAQAEAJAEQALAIAAAOQAAAMgKAGQgIAFgMAAQgKAAgIgDg");
	this.shape.setTransform(11.3,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_1.setTransform(4.3,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAfQgMgIAAgRQABgSAIgNQAKgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAEAAAHgDQAJgCACgDQADgFADAAQACAAACADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_2.setTransform(-3.1,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZA5QgJgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKgBgNQAAgUAMgMQAMgMASAAQAIAAAEACQAEABADAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgDAMgIAFQgJAHgPAAQgKAAgHgBgAgMgkQgIAJAAANQAAALAEAEQAFAFAIAAQAGAAAHgHQAGgIABgHIAEgZIgGgDQgDgCgEAAQgNAAgHAKg");
	this.shape_3.setTransform(-11.4,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-12.4,34.7,24.9);


(lib.get = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape.setTransform(8.1,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAfQgKgIgBgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgIAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgDQAIgCADgDQACgFACAAQAEAAABADQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_1.setTransform(0.6,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZA5QgJgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgFAEgHAAQgNAAgJgJQgIgKAAgNQABgUAKgMQAMgMAUAAQAGAAAFACQAEABADAEQAIAAAAAIIgBAOIgDAOIgBAYQAAAOgDAKQgDAMgIAFQgIAHgQAAQgKAAgHgBgAgNgkQgGAJAAANQAAALADAEQAEAFAIAAQAHAAAHgHQAGgIACgHIACgZIgFgDQgDgCgEAAQgNAAgIAKg");
	this.shape_2.setTransform(-7.7,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-12.4,27.3,24.9);


(lib.found = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAyQgKgKAAgRQAAgUAKgKQALgMAPAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAABAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHAAAPQABAJAGAHQAHAHAJAAQAFAAAFgCIAIgGIACgDIAAgMIAAgJIAAgJQgDgFgFgDQgFgCgGAAQgLAAgGAGg");
	this.shape.setTransform(15.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_1.setTransform(7.4,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_2.setTransform(-0.6,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_3.setTransform(-8.6,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_4.setTransform(-16.3,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-12.4,44.2,24.9);


(lib.directing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYA5QgKgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgIgJQgIgKAAgNQAAgUALgMQAMgMASAAQAIAAAEACQAFABACAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgEAMgHAFQgJAHgPAAQgKAAgGgBgAgMgkQgIAJAAANQAAALAFAEQADAFAJAAQAGAAAHgHQAHgIAAgHIAEgZIgHgDQgDgCgDAAQgNAAgHAKg");
	this.shape.setTransform(27.5,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_1.setTransform(19.8,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgNIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAANQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_2.setTransform(13.8,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_3.setTransform(8,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_4.setTransform(0.7,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAfQgLgIAAgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgDQAIgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_5.setTransform(-7.1,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAHAAQAGAAAAAMQAOgNARAAQAGAAADAEQADAFgBAJIAAAFQAAAJgHAAQgGAAAAgHIAAgFIAAgHQgMACgGAFQgGAFgFAKIAAAmQABAIgIAAQgGAAAAgIg");
	this.shape_6.setTransform(-14.8,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgNIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAANQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_7.setTransform(-20.6,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAyQgKgKAAgRQAAgUAKgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAABAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHAAAPQABAJAGAHQAHAHAJAAQAFAAAFgCIAIgGIACgDIAAgMIAAgJIAAgJQgDgFgFgDQgFgCgGAAQgLAAgGAGg");
	this.shape_8.setTransform(-27.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-12.4,67.3,24.9);


(lib.couch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHAAQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape.setTransform(15.7,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_1.setTransform(7.4,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_2.setTransform(-0.3,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_3.setTransform(-8.4,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_4.setTransform(-16,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-12.4,43.9,24.9);


(lib.cant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgDQADgBACAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAABALIAAAHIAAAFIAAAEIALAAIALAAQAFACAAAGQAAADgCACQgCADgEAAIgDAAIgFgBIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape.setTransform(13.3,-11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFARIgBgIIAAgGIgBgGQAAgIABgCQACgGAEAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIAAAFIAAAFIAAAGIABAHQAAAKgIAAQgDAAgCgDg");
	this.shape_1.setTransform(6.3,-16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIABgHQAAgQgHAAQgIAAgIAKQgHAJgDANIgBAIIgBAIIABAHIAAAHQAAADgCACQgCADgDAAQgEAAgCgDQgCgCgBgDIAAgHIAAgHIABgWIABgWIgBgHIAAgIQAAgDACgCQADgCADAAQAHgBABALIABAJQAMgRANAAQAMgBAGALQADAIAAAOIAAAIIAAAGQAAAHACAKIACARQgBAEgCABQgCADgDAAQgHAAgBgIg");
	this.shape_2.setTransform(-0.7,-9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgSAAgIgKQgIgKAAgUQAAgRAMgOQANgNASAAQAGAAAJADQALAFgBAGIgBAEIgCAJIAAARQAAAJABAGIAGAOIABAEIAAABQAAADgBACQgDACgDAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_3.setTransform(-9.1,-9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAiQgMgKAAgQQAAgQALgQQAMgTANAAQAIAAAKADQALAFAAAHQAAADgBACQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgEgCQgEgEgLgBQgHAAgHAPQgHANAAAJQAAAKAHAFQAGAGAJAAQAFAAAFgCIAJgFIAEgCQADABACACQACACAAADQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_4.setTransform(-17.3,-9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-25.4,42.8,26.3);


(lib.Buffy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape.setTransform(16,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_1.setTransform(8.4,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_2.setTransform(0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_3.setTransform(-6.8,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA4QgDgDAAgDIAAgVIABgdIACgeIAAgUQABgEACgBQAKgDANAAQALAAAMAIQAOALAAAOQAAATgPAKQALAFAGAGQAFAFAAAHQAAAJgJAIQgHAGgHADQgQAGgZAAQgEAAgCgDgAgWAdIAAAPQATAAAMgFQAFgCAEgEQAFgEAAgCQAAgDgKgFQgHgDgGgCIgHgBIgDAAIgDAAIgIAAIgBAQgAgTgrIAAANIgBAcIALABQAKgBAHgGQAHgGAAgLQAAgHgHgFQgIgGgHAAIgMAAg");
	this.shape_4.setTransform(-15.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-12.4,44.5,24.9);


(lib.Bub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIAAgWIAAgUIAAgVQAAgEACgEQACgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAGgDAEAAQAPAAAKAMQAKALAAAQQAAARgMAMQgKALgPAAQgLAAgKgEgAgLgCIgKAGIgBAMIAAAMIABAMIAJAEIALABQAKAAAGgHQAHgIAAgLQAAgLgFgHQgGgHgKAAQgGAAgGAEg");
	this.shape.setTransform(8.8,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_1.setTransform(0.3,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghA4QgDgDAAgDIAAgVIABgdIACgeIAAgUQABgEACgBQAKgDANAAQALAAAMAIQAOALAAAOQAAATgPAKQALAFAGAGQAFAFAAAHQAAAJgJAIQgHAGgHADQgQAGgZAAQgEAAgCgDgAgWAdIAAAPQATAAAMgFQAFgCAEgEQAFgEAAgCQAAgDgKgFQgHgDgGgCIgHgBIgDAAIgDAAIgIAAIgBAQgAgTgrIAAANIgBAcIALABQAKgBAHgGQAHgGAAgLQAAgHgHgFQgIgGgHAAIgMAAg");
	this.shape_2.setTransform(-8,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-12.4,30.3,24.9);


(lib.pos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhFhFICLAAIAACLIiLAAg");
	this.shape.setTransform(7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAoQgEgDAAgGIAAgSIgOAAQgHAAgGgDQgIgDAAgHQAAgHAHgDQAEgBAKAAIAOgBIAAgEIAAgFQAAgWAOAAQAFAAAEAEQAFADAAAGIgBAFIAAAFIAAAIIAEAAIAGAAIAHAAQAWAAAAAMQAAAFgEAEQgEAEgGAAIgEAAIgEgBIgIAAIgJABIAAAJIAAAJQAAAGgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_1.setTransform(7.2,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLgAgNAgQAAAGAEADQAEAEAFgBQAFABAEgEQAFgDAAgGIAAgJIAAgJIAJgBIAIAAIAEABIAEAAQAGAAAEgEQADgEAAgFQAAgMgVAAIgHAAIgHAAIgDAAIAAgIIAAgFIABgFQgBgGgEgDQgEgEgGAAQgNAAAAAWIAAAFIAAAEIgOAAQgLABgDABQgHACAAAIQAAAGAIAEQAFADAIAAIAOAAg");
	this.shape_2.setTransform(7,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhFBGIAAiLICLAAIAACLgAgNAgQAAAGAEADQAEAEAFgBQAFABAEgEQAFgDAAgGIAAgJIAAgJIAJgBIAIAAIAEABIAEAAQAGAAAEgEQADgEAAgFQAAgMgVAAIgHAAIgHAAIgDAAIAAgIIAAgFIABgFQgBgGgEgDQgEgEgGAAQgNAAAAAWIAAAFIAAAEIgOAAQgLABgDABQgHACAAAIQAAAGAIAEQAFADAIAAIAOAAg");
	this.shape_3.setTransform(7,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AhFBGIAAiLICLAAIAACLgAgNAgQAAAGAEADQAEAEAFgBQAFABAEgEQAFgDAAgGIAAgJIAAgJIAJgBIAIAAIAEABIAEAAQAGAAAEgEQADgEAAgFQAAgMgVAAIgHAAIgHAAIgDAAIAAgIIAAgFIABgFQgBgGgEgDQgEgEgGAAQgNAAAAAWIAAAFIAAAEIgOAAQgLABgDABQgHACAAAIQAAAGAIAEQAFADAIAAIAOAAg");
	this.shape_4.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16,16);


(lib.neg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhFhFICLAAIAACLIiLAAg");
	this.shape.setTransform(7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAKQgGgEAAgFQAAgGAGgDQAFgDAGAAIAZgBIAZgBQAHAAAFADQAGADAAAHQAAALgQABQgPABglAAQgGAAgFgDg");
	this.shape_1.setTransform(7,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLgAAAgGIgZABQgHAAgFADQgFACgBAHQABAFAFAEQAFADAHAAQAlAAAPgBQAQgBAAgLQAAgHgGgDQgGgDgGAAIgZABg");
	this.shape_2.setTransform(7,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhFBGIAAiLICLAAIAACLgAAAgGIgZABQgHAAgFADQgFACgBAHQABAFAFAEQAFADAHAAQAlAAAPgBQAQgBAAgLQAAgHgGgDQgGgDgGAAIgZABg");
	this.shape_3.setTransform(7,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AhFBGIAAiLICLAAIAACLgAAAgGIgZABQgHAAgFADQgFACgBAHQABAFAFAEQAFADAHAAQAlAAAPgBQAQgBAAgLQAAgHgGgDQgGgDgGAAIgZABg");
	this.shape_4.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16,16);


(lib.TwiggsPullingCouchText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(342.9,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAADQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_1.setTransform(336.7,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAkIgMggIgOgiIAAgEQgBgDADgCQACgDAEAAQAEAAACAFIAUA2QAFgNAIgXIAHgRQADgFAEAAQAEAAACACQACACABADQgBADgNAfIgPAkQgBAHgGAAQgFAAgDgHg");
	this.shape_2.setTransform(328.4,15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_3.setTransform(320,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAuQgCgDAAgCIgCgdIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBAMIgBAPIABAGIABAGQAAADgDADQgCACgDAAQgJgBAAgTIABgPIAAgNIAAgMIgBgMQAAgSAIAAQADAAADACQACADAAADIAAAFIgBAFIAAAIQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgFAGgDQAGgEAIAAQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAVQAAACgDADQgCACgDAAQgCAAgDgCg");
	this.shape_4.setTransform(309.8,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_5.setTransform(294.4,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgBgsIgSgCQgHgBAAgGQAAgEACgCQADgCACAAIARABIAAgLIAAgJQAAgEABgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIALgBIAKAAQAFACAAAGQAAADgDACQgCACgDAAIgEAAIgDAAIgLACIACAtIAAADIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_6.setTransform(286.5,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEA3QgDgCABgDIAAgJIAAgJIgBgsIgSgCQgHgBAAgGQAAgEACgCQADgCADAAIAQABIAAgLIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAIIAAAEIAAAFIAMgBIAKAAQAFACAAAGQAAADgDACQgCACgDAAIgEAAIgDAAIgLACIACAtIAAADIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_7.setTransform(274.2,14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIACgSIAAgSQAAgDACgDQADgCACAAQADAAACACQACADAAADIgBASIAAASIAAAOIAAAOQABADgDACQgCADgDAAQgDAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQACgDAEAAQADAAADADQACADABADQgBAEgCADQgDACgDAAQgEAAgCgCg");
	this.shape_8.setTransform(268.3,13.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEA3QgCgCAAgDIAAgJIAAgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQADgCADAAIAQABIgBgLIAAgJQAAgEADgCQACgCADAAQAGAAABALIAAAIIAAAEIAAAFIALgBIALAAQAFACAAAGQAAADgCACQgCACgEAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_9.setTransform(257.3,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAADQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_10.setTransform(249.3,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_11.setTransform(240.4,17.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEA3QgCgCAAgDIAAgJIAAgJIgBgsIgSgCQgHgBAAgGQAAgEACgCQACgCAEAAIAQABIgBgLIAAgJQABgEACgCQACgCADAAQAGAAABALIAAAIIAAAEIAAAFIALgBIALAAQAFACAAAGQAAADgCACQgCACgEAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_12.setTransform(227.7,14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHAMIACgLIACgNQACgGADAAQADAAACACQABACAAADQAAAGgEAQQgCAIgDAAQgGAAAAgHg");
	this.shape_13.setTransform(222.3,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQABgRgHAAQgJABgGAJQgIAKgDANIgBAIIgBAIIABAHIAAAHQAAADgCACQgCADgDAAQgEAAgCgDQgDgCABgDIgBgHIAAgHIABgWIABgWIgBgHIAAgIQABgDABgCQADgDADAAQAIAAAAALIABAJQANgRAMAAQAMAAAGALQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCACQgCACgDAAQgHABgBgIg");
	this.shape_14.setTransform(217,15.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgHgKAAgUQAAgRAMgOQAOgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgCAJIAAARQAAAJABAGIAGAOIABAEIABABQAAADgCACQgCACgEAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_15.setTransform(208.6,15.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAiQgMgKAAgRQAAgPALgQQAMgTANAAQAIAAAKADQALAFAAAHQAAADgBACQgCADgDgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgEgCQgEgFgLAAQgHAAgHAPQgHANAAAIQAAALAHAFQAGAGAJAAQAFAAAFgDIAJgEIAEgBQADgBACADQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_16.setTransform(200.4,15.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJARQgCgCAAgDQAAgDAFgJIAGgPQACgDADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");
	this.shape_17.setTransform(189.7,20.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9900FF").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEABgCgCQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_18.setTransform(182.5,13.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9900FF").s().p("AgVAiQgMgKAAgRQAAgPALgQQAMgTANAAQAIAAAKADQALAFAAAHQAAADgBACQgCADgDgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgCQgEgFgLAAQgHAAgHAPQgHANAAAIQAAALAHAFQAGAGAJAAQAFAAAFgDIAJgEIAEgBQADgBACADQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_19.setTransform(173.7,15.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9900FF").s().p("AASAlQgKAGgMAAQgKgBgHgEQgHgFgCgJQgDgWAAgOQAAgMADgNQABgHAGAAQADAAADACQACACAAAEIgBALIgBANIABAUQAAAKACAGIAFACIAFAAQAKAAALgDIAAgPIAAgPQAAgRABgMQABgHAHgBQADABADACQACACAAADIgCAeIAAAQIABAQIAAAGIAAAFQAAAEgCACQgCACgEAAQgGAAgBgIg");
	this.shape_20.setTransform(165.4,15.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9900FF").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_21.setTransform(156.9,15.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9900FF").s().p("AgVAiQgMgKAAgRQAAgPALgQQAMgTANAAQAIAAAKADQALAFAAAHQAAADgBACQgCADgDgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgCQgEgFgLAAQgHAAgHAPQgHANAAAIQAAALAHAFQAGAGAJAAQAFAAAFgDIAJgEIAEgBQADgBACADQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_22.setTransform(148.8,15.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9900FF").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAADQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_23.setTransform(135.6,15.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9900FF").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEABgCgCQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_24.setTransform(126.6,13.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9900FF").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQACgCADAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIAKgBIALAAQAFACAAAGQAAADgCACQgDACgDAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_25.setTransform(118.1,14.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9900FF").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_26.setTransform(105.1,17.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9900FF").s().p("AATAmIgCgRIgBgRIAAgGIABgIQAAgRgHAAQgIABgIAJQgHAKgDANIgBAIIgBAIIABAHIAAAHQAAADgCACQgCADgDAAQgEAAgCgDQgCgCgBgDIAAgHIAAgHIABgWIABgWIgBgHIAAgIQAAgDACgCQADgDADAAQAHAAABALIABAJQAMgRANAAQAMAAAGALQADAHAAAOIAAAIIAAAHQAAAGACAKIACARQgBADgCACQgCACgDAAQgHABgBgIg");
	this.shape_27.setTransform(97,15.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9900FF").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIAAgSIABgSQAAgDACgDQADgCADAAQACAAADACQACADAAADIgBASIgBASIAAAOIABAOQAAADgDACQgCADgCAAQgDAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAADADQADADgBADQABAEgDADQgDACgEAAQgDAAgCgCg");
	this.shape_28.setTransform(90.5,13.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9900FF").s().p("AgIA4IABgcIABgcIAAgbIAAgdQABgHAGAAQAIAAAAAHIAAAdIgBAbIgBAmIAAASQgBAJgGgBQgIABAAgJg");
	this.shape_29.setTransform(85.9,13.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9900FF").s().p("AgIA4IABgcIABgcIAAgbIAAgdQABgHAGAAQAIAAAAAHIgBAdIAAAbIgBAmIAAASQgBAJgGgBQgIABAAgJg");
	this.shape_30.setTransform(81.5,13.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9900FF").s().p("AASAlQgKAGgMAAQgKgBgHgEQgHgFgCgJQgDgWAAgOQAAgMADgNQABgHAGAAQADAAADACQACACAAAEIgBALIgBANIABAUQAAAKACAGIAFACIAFAAQAKAAALgDIAAgPIAAgPQAAgRABgMQABgHAHgBQADABADACQACACAAADIgCAeIAAAQIABAQIAAAGIAAAFQAAAEgCACQgCACgEAAQgGAAgBgIg");
	this.shape_31.setTransform(75.2,15.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9900FF").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_32.setTransform(66.8,17.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgJARQgCgCAAgDQAAgDAFgJIAGgPQACgDADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");
	this.shape_33.setTransform(55.9,20.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_34.setTransform(49.1,15.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_35.setTransform(41,17.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_36.setTransform(32.5,17.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQACADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQACADABADQgBAEgCADQgDACgDAAQgDAAgDgCg");
	this.shape_37.setTransform(26.3,13.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgFABQgFAAgGgYQgDgMgDgTIgCgNIAAgLQAAgEACgBQACgDAEAAQAFAAACAGIACAMIABAMIAEAhQAJgWAJggQADgJAFAAQAGAAACAKIAFAdIAGAdIAFgVIALgqQABgFAFAAQAEAAACADQACACAAADIAAAEQgGAZgKAfQgCAIgGAHQgCAEgEAAQgKgBgEgUg");
	this.shape_38.setTransform(18.5,15.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFA6QgCgCAAgEIAAgDIABgEIgBgLIAAgMIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASAAIASABQADAAACACQADADAAADQAAADgDADQgCACgDABIgSgBIgSgBIgGAAIADAjIABAhIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_39.setTransform(8.2,13.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF00FF").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEABgCgCQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_40.setTransform(182.5,13.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF00FF").s().p("AgVAiQgMgKAAgRQAAgPALgQQAMgTANAAQAIAAAKADQALAFAAAHQAAADgBACQgCADgDgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgCQgEgFgLAAQgHAAgHAPQgHANAAAIQAAALAHAFQAGAGAJAAQAFAAAFgDIAJgEIAEgBQADgBACADQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_41.setTransform(173.7,15.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF00FF").s().p("AASAlQgKAGgMAAQgKgBgHgEQgHgFgCgJQgDgWAAgOQAAgMADgNQABgHAGAAQADAAADACQACACAAAEIgBALIgBANIABAUQAAAKACAGIAFACIAFAAQAKAAALgDIAAgPIAAgPQAAgRABgMQABgHAHgBQADABADACQACACAAADIgCAeIAAAQIABAQIAAAGIAAAFQAAAEgCACQgCACgEAAQgGAAgBgIg");
	this.shape_42.setTransform(165.4,15.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF00FF").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_43.setTransform(156.9,15.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF00FF").s().p("AgVAiQgMgKAAgRQAAgPALgQQAMgTANAAQAIAAAKADQALAFAAAHQAAADgBACQgCADgDgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgCQgEgFgLAAQgHAAgHAPQgHANAAAIQAAALAHAFQAGAGAJAAQAFAAAFgDIAJgEIAEgBQADgBACADQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_44.setTransform(148.8,15.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF00FF").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAADQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_45.setTransform(135.6,15.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF00FF").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEABgCgCQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_46.setTransform(126.6,13.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF00FF").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQACgCADAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIAKgBIALAAQAFACAAAGQAAADgCACQgDACgDAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_47.setTransform(118.1,14.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF00FF").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_48.setTransform(105.1,17.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF00FF").s().p("AATAmIgCgRIgBgRIAAgGIABgIQAAgRgHAAQgIABgIAJQgHAKgDANIgBAIIgBAIIABAHIAAAHQAAADgCACQgCADgDAAQgEAAgCgDQgCgCgBgDIAAgHIAAgHIABgWIABgWIgBgHIAAgIQAAgDACgCQADgDADAAQAHAAABALIABAJQAMgRANAAQAMAAAGALQADAHAAAOIAAAIIAAAHQAAAGACAKIACARQgBADgCACQgCACgDAAQgHABgBgIg");
	this.shape_49.setTransform(97,15.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF00FF").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIAAgSIABgSQAAgDACgDQADgCADAAQACAAADACQACADAAADIgBASIgBASIAAAOIABAOQAAADgDACQgCADgCAAQgDAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAADADQADADgBADQABAEgDADQgDACgEAAQgDAAgCgCg");
	this.shape_50.setTransform(90.5,13.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF00FF").s().p("AgIA4IABgcIABgcIAAgbIAAgdQABgHAGAAQAIAAAAAHIAAAdIgBAbIgBAmIAAASQgBAJgGgBQgIABAAgJg");
	this.shape_51.setTransform(85.9,13.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF00FF").s().p("AgIA4IABgcIABgcIAAgbIAAgdQABgHAGAAQAIAAAAAHIgBAdIAAAbIgBAmIAAASQgBAJgGgBQgIABAAgJg");
	this.shape_52.setTransform(81.5,13.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF00FF").s().p("AASAlQgKAGgMAAQgKgBgHgEQgHgFgCgJQgDgWAAgOQAAgMADgNQABgHAGAAQADAAADACQACACAAAEIgBALIgBANIABAUQAAAKACAGIAFACIAFAAQAKAAALgDIAAgPIAAgPQAAgRABgMQABgHAHgBQADABADACQACACAAADIgCAeIAAAQIABAQIAAAGIAAAFQAAAEgCACQgCACgEAAQgGAAgBgIg");
	this.shape_53.setTransform(75.2,15.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF00FF").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_54.setTransform(66.8,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,347.1,26.3);


(lib.ProHelpingText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(323.9,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbAkQgOgLAAgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQADACAAADQAAAJgPAGQgNAGgMAAQgSAAgLgJgAgRgWQgGAIgDAPIAZgLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_1.setTransform(317.2,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAmIgNghIgPglIgBgFQAAgDADgCQADgDADAAQAFABACAFIAVA4IAPglIAHgTQACgFAFAAQAEAAACACQADADAAADQAAADgOAgIgRAnQAAAHgHAAQgGABgCgIg");
	this.shape_2.setTransform(308.4,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_3.setTransform(299.5,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_4.setTransform(288.7,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_5.setTransform(272.3,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_6.setTransform(263.9,15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_7.setTransform(250.1,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAkQgMgKAAgSQAAgQALgSQANgTAOAAQAJgBAJAEQANAFABAHQAAADgCACQgDADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgEgCQgEgEgMAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAGAAAFgDIAKgEIADgCQAEAAACADQACACAAADQAAAGgNAGQgLAEgIAAQgPABgMgLg");
	this.shape_8.setTransform(240.7,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAoQgKAFgMAAQgLAAgHgFQgIgFgBgKQgEgWAAgQQAAgMACgPQACgHAGAAQAEABACACQADACAAADIgCANIgBANIABAXQABAJACAGIAFADIAGABQAKAAAMgFIAAgQIAAgPQAAgSABgOQACgHAGAAQAEAAADADQACABAAAEIgCAgIAAARIAAASIABAFIAAAGQAAADgCADQgDACgEAAQgFAAgDgIg");
	this.shape_9.setTransform(231.9,16.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_10.setTransform(222.8,16.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAkQgMgKAAgSQAAgQALgSQANgTAOAAQAJgBAJAEQANAFABAHQAAADgCACQgDADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgEgCQgEgEgMAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAGAAAFgDIAKgEIADgCQAEAAACADQACACAAADQAAAGgNAGQgLAEgIAAQgPABgMgLg");
	this.shape_11.setTransform(214.2,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAGADAJAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgIAIg");
	this.shape_12.setTransform(200.2,16.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_13.setTransform(190.6,14.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_14.setTransform(181.5,15.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXAuQgMgFAAgHQAAgEACgDQADgCAEAAQACAAAEAEQACACAHABIAJABQAGAAAGgBQAHgDABgFQAAgMgQgDIgIgCQgLgCgFgEQgGgEgBgJQABgSAQgGIAPgGQALgDAFgCQADgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgCACgEAAQgFAAgCgDIgBgJIgTAGQgNAFAAAIIAFACQASACAJAHQANAIAAAQQABANgMAHQgJAGgPAAQgKAAgLgEg");
	this.shape_15.setTransform(168.1,16.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_16.setTransform(160.1,15.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_17.setTransform(151.7,16.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcBAQgKgCAAgHQAAgGAGgBIALACIAPABQAPAAAGgPQAEgLAAgVQgFAJgGAEQgFAEgIAAQgPAAgJgKQgJgLAAgPQAAgWAMgOQANgOAWAAQAIAAAGACQAEACADAEQAJAAAAAKIgCAPIgBAQIgCAbQgBAQgDALQgDANgJAHQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQAAAMAFAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgIgBQgOAAgJALg");
	this.shape_18.setTransform(142.3,18.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJASQgCgCAAgDIAEgNIAHgPQACgEADAAQADAAACACQACADAAACQAAACgMAaQAAAEgFAAQgCAAgCgCg");
	this.shape_19.setTransform(130.9,21.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9900FF").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgDAAgCIABgHIAAgGIgBgbIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgDAFABQASAAALANQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAPIAAAMIAAAOIALAFQAFABAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape_20.setTransform(123.2,14.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9900FF").s().p("AASAoQgKAFgMAAQgLAAgHgFQgIgFgBgKQgEgWAAgQQAAgMACgPQACgHAGAAQAEABACACQADACAAADIgCANIgBANIABAXQABAJACAGIAFADIAGABQAKAAAMgFIAAgQIAAgPQAAgSABgOQACgHAGAAQAEAAADADQACABAAAEIgCAgIAAARIAAASIABAFIAAAGQAAADgCADQgDACgEAAQgFAAgDgIg");
	this.shape_21.setTransform(113.6,16.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9900FF").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_22.setTransform(104.2,14.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9900FF").s().p("AgcBAQgKgCAAgHQAAgGAGgBIALACIAPABQAPAAAGgPQAEgLAAgVQgFAJgGAEQgFAEgIAAQgPAAgJgKQgJgLAAgPQAAgWAMgOQANgOAWAAQAJAAAFACQAEACADAEQAJAAAAAKIgCAPIgCAQIgBAbQgBAQgDALQgEANgIAHQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQAAAMAFAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgIgBQgOAAgJALg");
	this.shape_23.setTransform(88.7,18.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9900FF").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgJAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgDAAQgEAAgDgCQgCgCAAgEIAAgIIAAgHIAAgXIABgXIAAgIIAAgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_24.setTransform(80.1,16.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9900FF").s().p("AgHA8QgCgCAAgEIgBgOIAAgPIABgUIABgSQgBgFADgBQACgDAEAAQACAAACADQADABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgCACQgCADgCgBQgEABgCgDgAgFgtQgCgDAAgEQAAgDACgDQADgEADAAQAFAAADAEQACADAAADQAAAEgCADQgDADgFAAQgDAAgDgDg");
	this.shape_25.setTransform(73.2,14.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9900FF").s().p("AgfBEQgDgDAAgEIABghIAAggIgCghIgBgRQAAgGACgEQADgFAFAAQADABACACQACACAAADIAAADIgBAEQAHgFAHgCQAGgCAGAAQARAAAIAPQAGAMAAATQAAASgKALQgKANgRAAQgHAAgKgDIAAAnQAAAEgDADQgCACgDAAQgEAAgCgCgAgHgrQgEACgHAGIABAnQAJADAIABQAKgBAGgHQAFgGAAgLQAAgOgEgIQgEgHgHAAQgHAAgGADg");
	this.shape_26.setTransform(66.2,18.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9900FF").s().p("AgIA8IABgeIAAgeIAAgdIABgfQAAgHAHgBQAJABAAAHIgBAfIAAAdIgBApIgBAUQgBAHgGAAQgJABABgJg");
	this.shape_27.setTransform(59.3,14.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9900FF").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_28.setTransform(52.4,16.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9900FF").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_29.setTransform(42.8,14.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKASQgBgCAAgDIAEgNIAHgPQABgEAEAAQADAAACACQADADAAACQAAACgNAaQgBAEgDAAQgDAAgDgCg");
	this.shape_30.setTransform(30.9,21.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_31.setTransform(23.4,16.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_32.setTransform(15.2,16.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgiBAQgCgCAAgEIAAgYIABgiIABgiIAAgLIABgMQACgHAHABIAIgCIALAAQAOAAAOAKQAOAMAAAQQAAAUgPAMQgOALgSAAIgLgCIgBAsQAAAEgCACQgCACgDAAQgDAAgCgCgAgSgxIAAAQIgCAhIAKAAQAMAAAKgGQAKgIAAgNQAAgKgKgGQgJgGgKAAIgGAAIgFAAg");
	this.shape_33.setTransform(6.6,14.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF00FF").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgDAAgCIABgHIAAgGIgBgbIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgDAFABQASAAALANQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAPIAAAMIAAAOIALAFQAFABAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape_34.setTransform(123.2,14.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF00FF").s().p("AASAoQgKAFgMAAQgLAAgHgFQgIgFgBgKQgEgWAAgQQAAgMACgPQACgHAGAAQAEABACACQADACAAADIgCANIgBANIABAXQABAJACAGIAFADIAGABQAKAAAMgFIAAgQIAAgPQAAgSABgOQACgHAGAAQAEAAADADQACABAAAEIgCAgIAAARIAAASIABAFIAAAGQAAADgCADQgDACgEAAQgFAAgDgIg");
	this.shape_35.setTransform(113.6,16.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF00FF").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_36.setTransform(104.2,14.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF00FF").s().p("AgcBAQgKgCAAgHQAAgGAGgBIALACIAPABQAPAAAGgPQAEgLAAgVQgFAJgGAEQgFAEgIAAQgPAAgJgKQgJgLAAgPQAAgWAMgOQANgOAWAAQAJAAAFACQAEACADAEQAJAAAAAKIgCAPIgCAQIgBAbQgBAQgDALQgEANgIAHQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQAAAMAFAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgIgBQgOAAgJALg");
	this.shape_37.setTransform(88.7,18.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF00FF").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgJAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgDAAQgEAAgDgCQgCgCAAgEIAAgIIAAgHIAAgXIABgXIAAgIIAAgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_38.setTransform(80.1,16.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF00FF").s().p("AgHA8QgCgCAAgEIgBgOIAAgPIABgUIABgSQgBgFADgBQACgDAEAAQACAAACADQADABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgCACQgCADgCgBQgEABgCgDgAgFgtQgCgDAAgEQAAgDACgDQADgEADAAQAFAAADAEQACADAAADQAAAEgCADQgDADgFAAQgDAAgDgDg");
	this.shape_39.setTransform(73.2,14.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF00FF").s().p("AgfBEQgDgDAAgEIABghIAAggIgCghIgBgRQAAgGACgEQADgFAFAAQADABACACQACACAAADIAAADIgBAEQAHgFAHgCQAGgCAGAAQARAAAIAPQAGAMAAATQAAASgKALQgKANgRAAQgHAAgKgDIAAAnQAAAEgDADQgCACgDAAQgEAAgCgCgAgHgrQgEACgHAGIABAnQAJADAIABQAKgBAGgHQAFgGAAgLQAAgOgEgIQgEgHgHAAQgHAAgGADg");
	this.shape_40.setTransform(66.2,18.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF00FF").s().p("AgIA8IABgeIAAgeIAAgdIABgfQAAgHAHgBQAJABAAAHIgBAfIAAAdIgBApIgBAUQgBAHgGAAQgJABABgJg");
	this.shape_41.setTransform(59.3,14.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF00FF").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_42.setTransform(52.4,16.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF00FF").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_43.setTransform(42.8,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,333.2,27.7);


(lib.BuffyfoundText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(345.4,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_1.setTransform(338.4,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAkQgMgKAAgSQAAgQAMgSQAMgTAOAAQAJgBAJAEQANAFAAAHQAAADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCQgGgEgLAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAFAAAGgDIAKgEIAEgCQACAAACADQADACAAADQAAAGgNAGQgLAEgIAAQgPABgMgLg");
	this.shape_2.setTransform(329.1,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAoQgLAFgNAAQgKAAgIgFQgHgFgCgKQgDgWAAgQQAAgMACgPQABgHAHAAQAEABADACQACACAAADIgBANIgBANIABAXQAAAJACAGIAGADIAEABQALAAAMgFIAAgQIAAgPQAAgSABgOQABgHAIAAQADAAADADQACABAAAEIgBAgIAAARIAAASIAAAFIAAAGQAAADgDADQgCACgDAAQgHAAgBgIg");
	this.shape_3.setTransform(320.3,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_4.setTransform(311.2,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAkQgMgKAAgSQAAgQAMgSQAMgTAPAAQAIgBAJAEQANAFAAAHQAAADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCQgGgEgKAAQgIAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAFAAAGgDIAKgEIAEgCQACAAACADQADACAAADQAAAGgNAGQgLAEgIAAQgPABgMgLg");
	this.shape_5.setTransform(302.5,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAkQgOgLAAgSQAAgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQADACAAADQAAAJgQAGQgMAGgMAAQgSAAgLgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgJAAgIAIg");
	this.shape_6.setTransform(288.5,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_7.setTransform(278.9,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_8.setTransform(269.9,15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdA5QgMgMABgSQAAgXAMgMQALgNASAAQAJAAAGADIAIAFQAAgjACgMQACgHAGAAQAIAAAAAIQgBAMgDAnIgBAXQAAAcADAOIAAACQgBADgCACQgCADgDAAQgFAAgCgIQgHAFgGACQgGACgGAAQgRAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAHAHALAAQAGAAAEgCIAJgHIADgDIAAgOIAAgKIAAgJQgDgHgFgCQgGgEgHAAQgNAAgHAHg");
	this.shape_9.setTransform(255.8,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgJAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgDAAQgEAAgDgCQgBgCgBgEIAAgIIAAgHIAAgXIABgXIAAgIIAAgIQAAgEACgCQADgCADAAQAIAAABAKIAAAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_10.setTransform(246.6,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASAoQgKAFgMAAQgLAAgHgFQgIgFgBgKQgEgWAAgQQAAgMADgPQAAgHAIAAQADABACACQADACAAADIgCANIgBANIABAXQABAJACAGIAFADIAGABQAKAAAMgFIAAgQIAAgPQAAgSACgOQABgHAGAAQAEAAACADQADABAAAEIgCAgIAAARIAAASIABAFIAAAGQAAADgCADQgDACgEAAQgFAAgDgIg");
	this.shape_11.setTransform(237.5,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_12.setTransform(228.4,16.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMBHQgDgCAAgEIAAgCQACgLAAgMIAAgXIAAgXIgOABQgIAAAAgIQAAgJAPAAIAIAAIABgNQACgSAHgIQAIgLASAAQAMAAAAAIQAAAIgLAAQgUAAgCAcIAAAFIASgBQANAAAAAIQAAAGgGACIgHAAIgTABIgBASIABAPIAAAQQAAAPgCAJQgBAHgFAAQgEAAgCgCg");
	this.shape_13.setTransform(219.6,14.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKASQgBgCAAgDIAEgNIAHgPQABgEAEAAQADAAACACQACADABACQAAACgNAaQgBAEgDAAQgDAAgDgCg");
	this.shape_14.setTransform(208.5,21.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9900FF").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_15.setTransform(199.2,16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9900FF").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgJgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQALAFAAAHIgBAEIgBAKIgBARQAAALABAGIAGAPIACAEIAAABQAAAEgCACQgDACgDAAQgBAAgFgDgAgNgUQgJALAAAMQAAAOAEAHQAFAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIAAgIIACgJIgFgCIgEgBQgMgBgJALg");
	this.shape_16.setTransform(188.1,16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9900FF").s().p("AgcAkQgMgLAAgSQgBgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAJgCQAJgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_17.setTransform(179.3,16.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9900FF").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_18.setTransform(170.4,15.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9900FF").s().p("AgcAkQgMgLAAgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAIgCQAKgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_19.setTransform(156.9,16.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9900FF").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_20.setTransform(147.3,14.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9900FF").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_21.setTransform(138.2,15.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9900FF").s().p("AgcBAQgLgCAAgHQAAgGAIgBIAKACIAPABQAPAAAGgPQAEgLAAgVQgEAJgHAEQgGAEgGAAQgQAAgJgKQgJgLgBgPQAAgWANgOQAOgOAVAAQAJAAAFACQAFACADAEQAIAAABAKIgCAPIgDAQIgCAbQAAAQgDALQgDANgJAHQgKAIgSAAQgLAAgHgCgAgOgpQgJAKABAPQgBAMAFAFQAFAGAJAAQAHAAAIgIQAHgJACgIIADgcIgHgFIgIgBQgOAAgIALg");
	this.shape_22.setTransform(124.6,18.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9900FF").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgBACQgDACgEAAQgDAAgCgCQgDgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_23.setTransform(115.9,16.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9900FF").s().p("AgHA8QgCgCgBgEIAAgOIAAgPIAAgUIABgSQABgFACgBQACgDAEAAQACAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQAAAEgCACQgDADgCgBQgEABgCgDgAgEgtQgEgDAAgEQAAgDAEgDQADgEACAAQAFAAACAEQADADAAADQAAAEgDADQgCADgFAAQgCAAgDgDg");
	this.shape_24.setTransform(109.1,14.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9900FF").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_25.setTransform(102.5,15.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9900FF").s().p("AgXAkQgMgKAAgSQAAgQAMgSQAMgTAOAAQAJgBAJAEQANAFAAAHQAAADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCQgGgEgLAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAFAAAGgDIAKgEIAEgCQACAAACADQADACAAADQAAAGgNAGQgLAEgIAAQgPABgMgLg");
	this.shape_26.setTransform(94.2,16.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9900FF").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_27.setTransform(85.3,16.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9900FF").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_28.setTransform(76.6,16.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9900FF").s().p("AgHA8QgCgCgBgEIAAgOIAAgPIAAgUIABgSQAAgFADgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQgBAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDgBgEQABgDADgDQACgEAEAAQAEAAACAEQADADAAADQAAAEgDADQgCADgEAAQgEAAgCgDg");
	this.shape_29.setTransform(70.1,14.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9900FF").s().p("AgdA5QgMgMAAgSQAAgXANgMQALgNASAAQAJAAAGADIAIAFQABgjABgMQABgHAHAAQAIAAAAAIQAAAMgEAnIgBAXQAAAcACAOIAAACQAAADgCACQgCADgDAAQgFAAgCgIQgHAFgGACQgHACgFAAQgRAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAKAAQAFAAAFgCIAJgHIADgDIAAgOIAAgKIAAgJQgDgHgGgCQgFgEgHAAQgNAAgHAHg");
	this.shape_30.setTransform(62.5,14.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJASQgDgCAAgDIAGgNIAGgPQACgEADAAQADAAADACQABADAAACQABACgMAaQgCAEgEAAQgCAAgCgCg");
	this.shape_31.setTransform(50.6,21.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgVBBQgDgCAAgEQAAgIASgoIgeg4IgDgGQgDgEAAgCQAAgEADgCQADgDADAAQAEAAACADQAOAUAPAkIAMgdIANgZQADgFAEAAQAEAAACACQADADAAADIgBAEIgdA9QgLAXgEAPIgGAQQgCAGgFAAQgEAAgCgCg");
	this.shape_32.setTransform(43.1,18.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgNBHQgCgCAAgEIAAgCQACgLAAgMIgBgXIAAgXIgMABQgJAAAAgIQAAgJAPAAIAHAAIACgNQACgSAHgIQAIgLASAAQAMAAAAAIQAAAIgKAAQgVAAgCAcIgBAFIATgBQANAAAAAIQAAAGgGACIgHAAIgTABIgBASIABAPIAAAQQAAAPgCAJQgBAHgFAAQgEAAgDgCg");
	this.shape_33.setTransform(34.4,14.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgNBHQgCgCAAgEIAAgCQACgLAAgMIgBgXIAAgXIgMABQgJAAAAgIQAAgJAPAAIAHAAIACgNQACgSAHgIQAIgLASAAQAMAAAAAIQAAAIgLAAQgUAAgCAcIAAAFIASgBQANAAAAAIQAAAGgGACIgHAAIgTABIgBASIABAPIAAAQQAAAPgCAJQgBAHgFAAQgEAAgDgCg");
	this.shape_34.setTransform(25.8,14.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AATAoQgLAFgNAAQgKAAgIgFQgHgFgCgKQgDgWAAgQQAAgMADgPQAAgHAIAAQADABACACQADACAAADIgBANIgCANIACAXQAAAJACAGIAFADIAFABQALAAAMgFIAAgQIAAgPQAAgSACgOQAAgHAIAAQADAAACADQADABAAAEIgCAgIAAARIAAASIABAFIAAAGQAAADgDADQgCACgDAAQgHAAgBgIg");
	this.shape_35.setTransform(17.2,16.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_36.setTransform(7.8,14.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF00FF").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_37.setTransform(199.2,16.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF00FF").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgJgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQALAFAAAHIgBAEIgBAKIgBARQAAALABAGIAGAPIACAEIAAABQAAAEgCACQgDACgDAAQgBAAgFgDgAgNgUQgJALAAAMQAAAOAEAHQAFAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIAAgIIACgJIgFgCIgEgBQgMgBgJALg");
	this.shape_38.setTransform(188.1,16.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF00FF").s().p("AgcAkQgMgLAAgSQgBgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAJgCQAJgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_39.setTransform(179.3,16.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF00FF").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_40.setTransform(170.4,15.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF00FF").s().p("AgcAkQgMgLAAgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAIgCQAKgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_41.setTransform(156.9,16.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF00FF").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_42.setTransform(147.3,14.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF00FF").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_43.setTransform(138.2,15.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF00FF").s().p("AgcBAQgLgCAAgHQAAgGAIgBIAKACIAPABQAPAAAGgPQAEgLAAgVQgEAJgHAEQgGAEgGAAQgQAAgJgKQgJgLgBgPQAAgWANgOQAOgOAVAAQAJAAAFACQAFACADAEQAIAAABAKIgCAPIgDAQIgCAbQAAAQgDALQgDANgJAHQgKAIgSAAQgLAAgHgCgAgOgpQgJAKABAPQgBAMAFAFQAFAGAJAAQAHAAAIgIQAHgJACgIIADgcIgHgFIgIgBQgOAAgIALg");
	this.shape_44.setTransform(124.6,18.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF00FF").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgBACQgDACgEAAQgDAAgCgCQgDgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_45.setTransform(115.9,16.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF00FF").s().p("AgHA8QgCgCgBgEIAAgOIAAgPIAAgUIABgSQABgFACgBQACgDAEAAQACAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQAAAEgCACQgDADgCgBQgEABgCgDgAgEgtQgEgDAAgEQAAgDAEgDQADgEACAAQAFAAACAEQADADAAADQAAAEgDADQgCADgFAAQgCAAgDgDg");
	this.shape_46.setTransform(109.1,14.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF00FF").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_47.setTransform(102.5,15.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF00FF").s().p("AgXAkQgMgKAAgSQAAgQAMgSQAMgTAOAAQAJgBAJAEQANAFAAAHQAAADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCQgGgEgLAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAFAAAGgDIAKgEIAEgCQACAAACADQADACAAADQAAAGgNAGQgLAEgIAAQgPABgMgLg");
	this.shape_48.setTransform(94.2,16.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF00FF").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_49.setTransform(85.3,16.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF00FF").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_50.setTransform(76.6,16.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF00FF").s().p("AgHA8QgCgCgBgEIAAgOIAAgPIAAgUIABgSQAAgFADgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQgBAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDgBgEQABgDADgDQACgEAEAAQAEAAACAEQADADAAADQAAAEgDADQgCADgEAAQgEAAgCgDg");
	this.shape_51.setTransform(70.1,14.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF00FF").s().p("AgdA5QgMgMAAgSQAAgXANgMQALgNASAAQAJAAAGADIAIAFQABgjABgMQABgHAHAAQAIAAAAAIQAAAMgEAnIgBAXQAAAcACAOIAAACQAAADgCACQgCADgDAAQgFAAgCgIQgHAFgGACQgHACgFAAQgRAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAKAAQAFAAAFgCIAJgHIADgDIAAgOIAAgKIAAgJQgDgHgGgCQgFgEgHAAQgNAAgHAHg");
	this.shape_52.setTransform(62.5,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,349.6,27.7);


(lib.BubpushingText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape.setTransform(326.7,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglBPQgDgCAAgFIAAgnIAAglQAAgWgBgSIgCgUQABgGACgFQADgGAFAAQAEAAADADQADACgBAEIAAAEIgBAFQAJgFAIgEQAHgCAHgBQAUABAJARQAIAOAAAXQAAAVgMANQgMAPgUAAQgIAAgNgDIAAAuQAAAFgCACQgDADgEAAQgEAAgDgDgAgIgyQgGACgIAIQACAWAAAXQALAFAJgBQAMABAHgKQAFgHABgNQAAgRgFgJQgFgJgIAAQgIAAgHAFg");
	this.shape_1.setTransform(318.9,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_2.setTransform(310.7,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_3.setTransform(302.7,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_4.setTransform(291.4,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbA2QgOgFAAgKQAAgEADgDQACgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQAAgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAACADQADADAAAEIACAIIAAAJQAAAEgCADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEALAHQAQAKAAATQAAAQgOAIQgLAHgRAAQgNAAgMgFg");
	this.shape_5.setTransform(274.3,18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_6.setTransform(263.8,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_7.setTransform(252.7,19.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_8.setTransform(241.8,19.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_9.setTransform(231.2,19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAVQgCgCAAgEQAAgDAFgNIAIgRQACgFAEAAQAEAAADADQACADAAADQAAADgOAeQgCAFgEAAQgDAAgDgDg");
	this.shape_10.setTransform(217.5,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9900FF").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_11.setTransform(208.5,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9900FF").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAJAAAMAFQAPAGAAAHQAAAFgCACQgCADgEAAQgDAAgCgCIgEgDQgGgEgNgBQgJABgKARQgIAQAAALQAAAOAIAHQAJAHALAAQAGAAAGgDIAMgHIAEgBQAEAAADADQACADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_12.setTransform(197.6,19.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9900FF").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_13.setTransform(187.2,19.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9900FF").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_14.setTransform(176.6,19.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9900FF").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAKAAAMAFQAOAGAAAHQAAAFgCACQgDADgDAAQgDAAgCgCIgEgDQgGgEgNgBQgJABgKARQgJAQAAALQAAAOAJAHQAIAHAMAAQAGAAAHgDIALgHIAEgBQAEAAACADQADADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_15.setTransform(166.5,19.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9900FF").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_16.setTransform(150,19.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9900FF").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_17.setTransform(138.7,16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9900FF").s().p("AgFBEQgEgCAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAVABIAAgNIgBgMQAAgEACgCQADgDAFAAQAIAAABAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgEADgDAAIgGgBIgEAAIgOACIACA5IAAAEIAAAFQABAVgLAAQgCAAgDgDg");
	this.shape_18.setTransform(128.1,17.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9900FF").s().p("AghBMQgNgDAAgHQAAgJAJAAIAMABQAIACAKAAQASAAAHgSQAEgMABgZQgGAKgGAFQgIAFgIAAQgSAAgLgMQgLgMAAgSQAAgbAPgQQAQgRAaAAQAIABAHACQAGACADAFQALAAAAALQgBAIgCALIgCATIgCAfQgBAUgEAMQgDAQgKAHQgMAJgWAAQgMAAgJgBgAgRgwQgJAMAAARQAAAOAFAHQAGAGALABQAIAAAKgLQAIgKABgKIAEghIgHgFIgJgBQgSAAgKANg");
	this.shape_19.setTransform(112,21.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9900FF").s().p("AAYAwIgCgWIgCgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQAAAEgDADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_20.setTransform(101.9,19.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9900FF").s().p("AgIBHQgEgDAAgEIAAgSIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQACAAADADQADADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgDACgDABQgEgBgCgCgAgFg1QgEgDAAgFQAAgEAEgEQADgEAEAAQAEAAAEAEQADAEAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_21.setTransform(93.8,16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9900FF").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_22.setTransform(85.2,16.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9900FF").s().p("AgaA2QgPgFgBgKQAAgEADgDQAEgDADAAQADAAAFAFQACACAJACIALABQAHAAAGgCQAKgDgBgGQAAgNgSgFIgJgCQgNgDgFgEQgJgEABgLQAAgVASgJIASgGQANgDAGgDQAEgCAEAAQAFAAACADQADADAAAEIABAIIACAJQAAAEgDADQgDADgEAAQgFAAgCgEQgCgDgBgIIgWAHQgPAGgBAKIAHABQAVAEAKAHQARAKgBATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_23.setTransform(74.1,18.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9900FF").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_24.setTransform(64.3,19.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9900FF").s().p("AglBPQgDgCAAgFIAAgnIAAglQAAgWgBgSIgCgUQABgGACgFQADgGAFAAQAFAAACADQADACgBAEIAAAEIgBAFQAJgFAIgEQAHgCAHgBQAUABAJARQAIAOAAAXQAAAVgMANQgMAPgUAAQgIAAgNgDIAAAuQAAAFgCACQgDADgEAAQgEAAgDgDgAgIgyQgGACgIAIQACAWAAAXQALAFAJgBQAMABAHgKQAFgHABgNQAAgRgFgJQgFgJgIAAQgIAAgHAFg");
	this.shape_25.setTransform(53.9,21.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgLAVQgCgCAAgEQAAgDAFgNIAIgRQACgFAEAAQAEAAADADQACADAAADQAAADgOAeQgCAFgEAAQgDAAgDgDg");
	this.shape_26.setTransform(40.2,25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdBJQgDAFgFAAQgEAAgCgCQgDgDAAgEIABgIIAAgHIgBgfIAAgeIAAgbIAAgcQAAgFACgFQAEgGAFAAQAIAAAAAJIgBADIAAAEIgBAWIAAAZQAJgGAHgCQAIgEAGAAQAVAAANAQQAMAOAAAXQAAAWgOAPQgPAQgUAAQgPAAgMgGgAgPgDIgOAIIAAARIAAAPIAAAQIANAGQAGABAIAAQANABAJgKQAJgLAAgOQAAgPgHgJQgIgKgNAAQgHAAgJAFg");
	this.shape_27.setTransform(31.2,16.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_28.setTransform(19.9,19.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgtBLQgEgEAAgEIAAgdIACgmIACgpIABgbQABgFADgBQANgEARAAQAQAAAQAMQASANAAAUQAAAZgTAOQAOAGAHAHQAIAIAAAJQAAAMgNALQgJAIgKAEQgVAIgiAAQgEAAgEgEgAgdAnIAAAUQAZAAAPgHQAHgDAHgFQAFgFAAgDQAAgEgMgGQgJgEgJgDIgKgBIgDAAIgEAAIgMgBIAAAWgAgZg6IAAASIgCAmIAPABQANgCAKgHQAKgJAAgOQAAgJgLgIQgKgIgKAAIgPAAg");
	this.shape_29.setTransform(8.8,16.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF00FF").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_30.setTransform(208.5,16.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF00FF").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAJAAAMAFQAPAGAAAHQAAAFgCACQgCADgEAAQgDAAgCgCIgEgDQgGgEgNgBQgJABgKARQgIAQAAALQAAAOAIAHQAJAHALAAQAGAAAGgDIAMgHIAEgBQAEAAADADQACADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_31.setTransform(197.6,19.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF00FF").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_32.setTransform(187.2,19.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF00FF").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_33.setTransform(176.6,19.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF00FF").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAKAAAMAFQAOAGAAAHQAAAFgCACQgDADgDAAQgDAAgCgCIgEgDQgGgEgNgBQgJABgKARQgJAQAAALQAAAOAJAHQAIAHAMAAQAGAAAHgDIALgHIAEgBQAEAAACADQADADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_34.setTransform(166.5,19.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF00FF").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_35.setTransform(150,19.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF00FF").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_36.setTransform(138.7,16.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF00FF").s().p("AgFBEQgEgCAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAVABIAAgNIgBgMQAAgEACgCQADgDAFAAQAIAAABAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgEADgDAAIgGgBIgEAAIgOACIACA5IAAAEIAAAFQABAVgLAAQgCAAgDgDg");
	this.shape_37.setTransform(128.1,17.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF00FF").s().p("AghBMQgNgDAAgHQAAgJAJAAIAMABQAIACAKAAQASAAAHgSQAEgMABgZQgGAKgGAFQgIAFgIAAQgSAAgLgMQgLgMAAgSQAAgbAPgQQAQgRAaAAQAIABAHACQAGACADAFQALAAAAALQgBAIgCALIgCATIgCAfQgBAUgEAMQgDAQgKAHQgMAJgWAAQgMAAgJgBgAgRgwQgJAMAAARQAAAOAFAHQAGAGALABQAIAAAKgLQAIgKABgKIAEghIgHgFIgJgBQgSAAgKANg");
	this.shape_38.setTransform(112,21.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF00FF").s().p("AAYAwIgCgWIgCgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQAAAEgDADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_39.setTransform(101.9,19.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF00FF").s().p("AgIBHQgEgDAAgEIAAgSIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQACAAADADQADADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgDACgDABQgEgBgCgCgAgFg1QgEgDAAgFQAAgEAEgEQADgEAEAAQAEAAAEAEQADAEAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_40.setTransform(93.8,16.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF00FF").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_41.setTransform(85.2,16.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF00FF").s().p("AgaA2QgPgFgBgKQAAgEADgDQAEgDADAAQADAAAFAFQACACAJACIALABQAHAAAGgCQAKgDgBgGQAAgNgSgFIgJgCQgNgDgFgEQgJgEABgLQAAgVASgJIASgGQANgDAGgDQAEgCAEAAQAFAAACADQADADAAAEIABAIIACAJQAAAEgDADQgDADgEAAQgFAAgCgEQgCgDgBgIIgWAHQgPAGgBAKIAHABQAVAEAKAHQARAKgBATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_42.setTransform(74.1,18.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF00FF").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_43.setTransform(64.3,19.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF00FF").s().p("AglBPQgDgCAAgFIAAgnIAAglQAAgWgBgSIgCgUQABgGACgFQADgGAFAAQAFAAACADQADACgBAEIAAAEIgBAFQAJgFAIgEQAHgCAHgBQAUABAJARQAIAOAAAXQAAAVgMANQgMAPgUAAQgIAAgNgDIAAAuQAAAFgCACQgDADgEAAQgEAAgDgDgAgIgyQgGACgIAIQACAWAAAXQALAFAJgBQAMABAHgKQAFgHABgNQAAgRgFgJQgFgJgIAAQgIAAgHAFg");
	this.shape_44.setTransform(53.9,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,331.3,31.9);


(lib.PartDiagramDisplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape.setTransform(179.2,-16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("Ag9BIQgDgDgBgEIACgLIAAgMIABgRIAAgSIAAgRIgBgTIgBgRIgBgRQAAgFAEgDQADgEAFAAQAFAAAHALQAXAjASAXQAVAaAbAZIAAgMIgBgMQAAgogCgYIgDgJIgCgKQAAgLAKAAQAQAAAAA8IAAAeIAAAfIgCAOQgBAKgJAAQgFAAgHgHQgmgkgwhCIAAAVIAAAUIAAAXIAAAYQAAAZgJAAQgGAAgCgEg");
	this.shape_1.setTransform(164.5,-16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgoBHQgJgIAAgdIABgOIAAgOIgBgFQAAgDACgCIACgoIgBgKIgBgJQAAgLAJAAQAEAAADACIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQACIgTAEIAAAJIgBAkIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBANIAAALQAAAUADADQACAEAMAAIARgBIARAAIAFgBIAGAAQAKgBAAAKQAAAIgIACQgJABgcAAQgdAAgIgIg");
	this.shape_2.setTransform(151.1,-16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AA5BGQgDgEgCgLIgEgQQgDgOgIgyIgTA2IgGASQgDALgEAGQgEAIgFAAQgFAAgEgHIgDgKIgDgJQgKgigGgkIgEARIgMAwIgEAZQgDAIgGgBQgFAAgDgCQgCgEAAgDQAAgQAGgWIAKglIAGgdQAEgVAFgGQADgGAGABQAFAAAEAGQADAJAFAZQAEAeALAjQAMgjAKgmIADgOQACgIADgFQAEgHAFAAQAJAAAEAPIAEAXQAFApAIAdIAFAQIADAQQAAAEgDADQgDACgEAAQgFAAgDgFg");
	this.shape_3.setTransform(136.7,-15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgoBHQgJgIAAgdIABgOIAAgOIgBgFQAAgDACgCIACgoIgBgKIgBgJQAAgLAJAAQAEAAADACIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQACIgTAEIAAAJIgBAkIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBANIAAALQAAAUADADQACAEAMAAIARgBIARAAIAFgBIAGAAQAKgBAAAKQAAAIgIACQgJABgcAAQgdAAgIgIg");
	this.shape_4.setTransform(122.5,-16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_5.setTransform(111.3,-15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_6.setTransform(101,-16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AA5BGQgDgEgCgLIgEgQQgDgOgJgyIgSA2IgGASQgDALgDAGQgFAIgFAAQgGAAgDgHIgDgKIgDgJQgJgigHgkIgEARIgMAwIgEAZQgDAIgGgBQgFAAgDgCQgCgEAAgDQAAgQAGgWIAKglIAGgdQAEgVAEgGQAEgGAGABQAFAAADAGQAFAJAEAZQAEAeALAjQAMgjAKgmIAEgOQABgIACgFQAFgHAFAAQAJAAAEAPIAEAXQAFApAIAdIAFAQIADAQQAAAEgDADQgDACgEAAQgFAAgDgFg");
	this.shape_7.setTransform(87.7,-15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AguA5QgTgQAAgbQAAgfATgaQAVgdAfAAQAeAAAPANQAPAPAAAfQAAAfgRAaQgUAdgfAAQgaAAgSgQgAgggfQgPAWAAAXQAAATAOALQAMAKATAAQAWAAAOgXQANgUAAgYQAAgXgJgIQgKgJgWAAQgWAAgQAWg");
	this.shape_8.setTransform(71.7,-15.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AgmA5QgNgOAAgUQAAgeAaghQAXgcAVAAIAIABIAHABQADgFAFAAQAHAAABAJQABAHABALQAAAEgCADQgDAEgEAAQgHAAgCgHQgDgGgDgCQgCgBgHAAQgNAAgQAVQgWAcAAAXQAAAMAHAJQAJAJAKAAQAJAAAKgFIAQgLQAGgEACAAQAFAAACADQADADgBAEQABAEgEADQgYAWgZAAQgSAAgOgPg");
	this.shape_9.setTransform(58.6,-16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgqBHQgEgDAAgEIAAgbIACgmIACgmIABgZQAAgFADgBQAMgEAQAAQAQAAAPALQARAMAAAUQAAAYgSAMQANAGAHAIQAHAGAAAJQAAAMgMAKQgIAHgKAEQgTAIghAAQgEAAgDgEgAgcAlIAAATQAZgBAOgGQAGgDAGgFQAGgEAAgDQAAgFgMgFQgJgEgIgCIgJgCIgEAAIgDAAIgLAAIgBAVgAgYg3IAAAQIgCAkIAOABQANgBAJgHQAKgJAAgMQAAgKgKgHQgKgIgKAAIgOABg");
	this.shape_10.setTransform(1.2,-16.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgvBGQgCgCAAgFIgBgVIAAgWIABgZIACgZIgBgOIAAgOQAAgFACgEQAEgFAGAAIAXACQAMACAIAEQAlAUAAAdQABAOgNAKQgKAJgQAEQAdAQAOARQACADAAADQAAAEgCADQgDADgEAAQgEAAgDgDQgegfglgKIABASIABASQAAAFgEACQgCADgEAAQgEAAgDgDgAgdgpIAAALIAAATIgCARIADAAIAFABQAXAAALgHQAFgCAFgEQAEgFAAgEQAAgNgOgLQgNgKgOgCIgOgBg");
	this.shape_11.setTransform(-11,-16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgoBHQgJgIAAgdIABgOIAAgOIgBgFQAAgDACgCIACgoIgBgKIgBgJQAAgLAJAAQAEAAADACIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQACIgTAEIAAAJIgBAkIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBANIAAALQAAAUADADQACAEAMAAIARgBIARAAIAFgBIAGAAQAKgBAAAKQAAAIgIACQgJABgcAAQgdAAgIgIg");
	this.shape_12.setTransform(-22.8,-16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgQBDQgLgcgOg0IgHgZQgGgTAAgGQAAgEADgDQADgCAEAAQAHgBACAIIADAQIAJAgQAJAhAIAZIABgCIAYhBIAIgYQAFgNAGgHQADgEAEAAQAEAAADADQADADAAAEQAAADgCACQgGAJgDAJIgIAUIgYBDQgFAMgGAMQgCAFgFAAQgHAAgDgIg");
	this.shape_13.setTransform(-34.6,-15.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_14.setTransform(-103,-16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AgmA5QgMgOAAgUQAAgeAaghQAVgcAWAAIAIABIAGABQAEgFAFAAQAGAAACAJQACAHgBALQAAAEgBADQgDAEgFAAQgFAAgEgHQgCgGgCgCQgDgBgHAAQgOAAgPAVQgWAcAAAXQAAAMAIAJQAHAJAMAAQAIAAAKgFIARgLQAEgEAEAAQAEAAACADQADADAAAEQAAAEgEADQgYAWgYAAQgUAAgNgPg");
	this.shape_15.setTransform(-115.7,-16.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgoBHQgJgIAAgdIABgOIAAgOIgBgFQAAgDACgCIACgoIgBgKIgBgJQAAgLAJAAQAEAAADACIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQACIgTAEIAAAJIgBAkIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBANIAAALQAAAUADADQACAEAMAAIARgBIARAAIAFgBIAGAAQAKgBAAAKQAAAIgIACQgJABgcAAQgdAAgIgIg");
	this.shape_16.setTransform(-127.3,-16.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AglBAQgSgNAAgRQAAgLAKAAQAJAAAAALQAAAIALAIQALAHAJAAQAHAAADgvIABg2IAAgKIgGAAIgKAAIgLgBQgEAAgDgCQgDgDAAgEQAAgKANAAIAKAAIAIABIARgBIASgBQAVAAAAALQAAAEgDADQgCADgEAAIgGgBIgGgBIgLABIABALQAABEgKAfQgGAVgOAAQgQAAgQgMg");
	this.shape_17.setTransform(-139.8,-15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AgqBHQgEgDAAgEIAAgbIACgmIACgmIABgZQAAgFADgBQAMgEAQAAQAQAAAPALQARAMAAAUQAAAYgSAMQANAGAHAIQAHAGAAAJQAAAMgMAKQgIAHgKAEQgTAIghAAQgEAAgDgEgAgcAlIAAATQAZgBAOgGQAGgDAGgFQAGgEAAgDQAAgFgMgFQgJgEgIgCIgJgCIgEAAIgDAAIgLAAIgBAVgAgYg3IAAAQIgCAkIAOABQANgBAJgHQAKgJAAgMQAAgKgKgHQgKgIgKAAIgOABg");
	this.shape_18.setTransform(-151.7,-16.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AgpA3QgLgNgDgbQgBgLAAgiIAAgWIACgLQACgHAGAAQAJAAAAAPIAAA3QAAA3AmAAQAlAAAAhdIAAgJIAAgIQAAgFACgFQADgGAFAAQAJAAAAAOIAAALIAAALQAABqg3AAQgcAAgPgQg");
	this.shape_19.setTransform(-165,-15.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("AgkBAQgSgIAAgOQAAgEACgCQADgDAEAAQAFAAAEAGQAEAHAEACQAHAFAPAAQAOAAAMgGQAQgIAAgOQAAgMgNgHQgMgFgPgBQgOAAgLgFQgNgIAAgOQAAgQASgOQATgNARAAQAJAAAMADQAPAEAAAGQAAAJgJAAIgMgCIgPgCQgNAAgKAHQgLAHABAKQAAAIANADIATACQAVACAMAMQALAJAAAQQAAAWgUANQgSAMgXAAQgQAAgOgHg");
	this.shape_20.setTransform(-178.6,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},18).wait(170));

	// Layer 3
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3,1,1).p("AAAAqIAAhT");
	this.shape_21.setTransform(-57.2,71.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3,1,1).p("AAAhCIAACF");
	this.shape_22.setTransform(-57.2,68.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3,1,1).p("AAAhbIAAC3");
	this.shape_23.setTransform(-57.2,66.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(3,1,1).p("AAAh0IAADp");
	this.shape_24.setTransform(-57.2,63.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(3,1,1).p("AAACOIAAkb");
	this.shape_25.setTransform(-57.2,61.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},68).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).wait(116));

	// Layer 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(3,1,1).p("AAAgQQAAAQAAAR");
	this.shape_26.setTransform(-153.1,3.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3,1,1).p("AgBg5QABA4ACA7");
	this.shape_27.setTransform(-153,7.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(3,1,1).p("AgChjQACBgADBn");
	this.shape_28.setTransform(-152.9,11.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(3,1,1).p("AgGigQADBqADB0QABAdABAdQABAVAEAU");
	this.shape_29.setTransform(-152.5,17.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(3,1,1).p("AgKjcQAECQAFCiQABAnACAoQABAdAIAb");
	this.shape_30.setTransform(-152.1,23.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(3,1,1).p("AgOkZQAFC3AHDPQACAzACAyQACAlALAj");
	this.shape_31.setTransform(-151.7,29.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3,1,1).p("AgUknQAFC3AGDPQACAzADAyQAEA2AVAu");
	this.shape_32.setTransform(-151.1,31.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3,1,1).p("Agak0QAFC2AGDPQACAzADAyQAFBGAgA5");
	this.shape_33.setTransform(-150.5,32.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3,1,1).p("AgvlKQAFCoAFC+QACAiABAjQAEBEAKAqQAHAaALAZQASAqAgAf");
	this.shape_34.setTransform(-148.4,34.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(3,1,1).p("AhElgQAFC3AHDPQACAyADAzQAFBQAsBBQAcArArAa");
	this.shape_35.setTransform(-146.3,36.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3,1,1).p("AhVlnQAFCvAGDFQABATAAASQABAeACAeQABAXAEAXQAIAzAYAtQAPAaASAWQAZAbAfASQAPAJAQAG");
	this.shape_36.setTransform(-144.5,37.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3,1,1).p("AhnluQAFC2AGDPQADAzACAyQAGBRAsBAQAoA8BCAaQARAHASAF");
	this.shape_37.setTransform(-142.8,38.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(3,1,1).p("AjHl1QAFC2AGDPQACAzADAyQAGBRArBAQApA8BDAaIAaAKQAEABAEABQAxAOAzAAQAuAAAugB");
	this.shape_38.setTransform(-133.2,39);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(3,1,1).p("Ajjl1QAGCuAFDFQABATABAVQABAbACAcQABAaAEAZQAIAwAWAqQAQAeAXAYQAWAYAcAQQAjAVApAKQAgAHAEABQAFABAFABQAwAFAvAAQAxgBAwAA");
	this.shape_39.setTransform(-130.4,39);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(3,1,1).p("Aj+l1QAGC2AGDPQACAzADAyQAFBRAsBAQApA8BCAaQBCAaBEAAQBlgBBlAA");
	this.shape_40.setTransform(-127.7,39);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(3,1,1).p("AhDAAQBDAABEAA");
	this.shape_41.setTransform(-93.6,76.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(3,1,1).p("Amfl1QAFC2AGDPQACAzADAyQAGBRArBAQApA8BDAaQBCAaBFAAQDBgBDBgBQBFAABEgB");
	this.shape_42.setTransform(-111.6,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},49).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40},{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).wait(123));

	// Layer 4
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF00FF").s().p("AgEAZQgMgQAAgVIABgLIgxgBQgEAAgCgCQgDgDAAgDQAAgEADgDQACgCAEAAIAbAAIAmACIAmACIANAAIANABQAIACgBAHIACAIIAAAOQAAAQgMAPQgMAQgSAAQgXAAgNgRgAAAgMQAAAPAIAKQAJAMAPAAQAKAAAIgLQAGgKAAgLIAAgIIAAgFIgRAAIglgCg");
	this.shape_43.setTransform(-166.7,15.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF00FF").s().p("AgvA2QgDgDgBgDQgCgIATgMIAbgNIgLgWIgLgXIgngGQgFgBgCgFQgBgEACgDQACgEAEgBQAEgBAgAGQACgDADAAQAIgCAEAIQAVAFAdAJQAoAMABAGQACAHgJAFIgdAMIg6AfIgMAIIgJAGIgDAAIgFgBgAAJAFIAhgPIgvgOIAOAdg");
	this.shape_44.setTransform(-166.1,28.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF00FF").s().p("AgsBAQgEgCgBgEQgBgDADgEQAVgmAAgmIgRAGIgSAFQgEABgDgCQgDgCgBgDQgBgEACgEQABgDAEgBIAVgHIAWgGIAYgEIAZgFIANgEIANgFQAFgBAFABQAFACABAGIAFAWQABANgCAKQgKAogbAIQgOADgNgJQgLgIgIgOQgIAggMASQgDAEgDABIgCAAIgFgBgAAogoIgKAEIgSAEIgSACIABAEIABAEQAFAWAJAKQAFAEAFADQAHADADAAQANgEAGgQQAHgPgDgPIgCgOg");
	this.shape_45.setTransform(-165.5,42.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF00FF").s().p("AA7A8QgEgCgBgEIgEgUIgEgVIgCgGIgoANQgYAJgOADIgJAEIgKADQgGACgFgBQgGgBgCgGQgBgDACgEQACgDADgBIAFgBIAEAAIANgFIANgEIAjgLIAjgMIgDgHQgFgUAAgMQAAgIAHgCQAEgBADACQAEACABAEIACAPIADAPIAEAQIAFAPIAEAVIAFAVQABAEgCADQgCADgEABIgDAAIgEgBg");
	this.shape_46.setTransform(-164.1,56.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF00FF").s().p("AghBFQgEgBgCgEIgIgNIgIgNIgLgPIgLgQQgCgDACgDQABgDADgCQAEgCADABQAEABACADQADAEAJALQAHgCAIgFIANgHIANgJQASgKAdgOIgHgLIgGgKQgCgEABgDQABgEAEgCQAHgEAGAHIAOAYQAJAQALAZQADAIgIAEQgEACgDgBQgEgCgBgDIgHgMIgFgOQgZALgVAMIgNAIIgNAJQgIAEgHADIAPAZQACADgBAEQgBAEgDACIgGABIgBAAg");
	this.shape_47.setTransform(-158.9,70.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF00FF").s().p("AgvA1QgQgKgEgTQgFgTAKgQQAQgbAngPQAggNATALIAHAEIAFAFQAFgDAFADQAFADgCAIIgJARQgBADgDACQgFACgEgDQgFgDABgHQABgHgBgCIgIgGQgMgGgXAJQghANgNAWQgGAJADALQACAMAKAGQAIAEALABQAFAAAOgCIAJABQADACAAAEQACAEgCAEQgCADgFABQgLACgKAAQgSAAgOgIg");
	this.shape_48.setTransform(-149.7,80.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF00FF").s().p("AgDBNIgOgHIgOgIIgRgIIgQgIQgDgCgCgDQAAgEACgEQACgDADgBQAEgBADACIATAIIAJgOIAHgOIAIgNQAKgSARgbIgKgGIgKgGQgDgCgBgDQgBgEACgDQAEgIAHAEIAZANQAQAJAWASQAGAFgEAHQgCAEgEABQgDAAgDgBIgNgJIgMgJQgPAWgNAVIgGANIgIAPIgJANIAZAOQAEACABAEQAAAEgCADQgCAEgDABIgDAAIgDgBg");
	this.shape_49.setTransform(-138.9,86);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF00FF").s().p("AgvBGQgDgBgCgDQgCgDABgDIAIgaIALgkIAMglIADgMIAFgNQAEgHAGADIAIAAIANADQAQAFAMAPQAMARgFARQgFAVgVAJQgSAIgUgGIgLgEIgNAvQgBAEgDABIgEABIgDAAgAgGgiIgLAiIAJAEQAOAEANgFQANgEAEgPQADgKgJgJQgIgKgMgDIgHgCIgEAAg");
	this.shape_50.setTransform(-126.9,88.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF00FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_51.setTransform(-113.4,89.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF00FF").s().p("AgoBIQgJgJAAgdIABgOIAAgPIgBgEQAAgDACgCIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAAMQAAAUADADQACADAMABIARgBIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_52.setTransform(-101.4,89.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_43}]},75).to({state:[{t:this.shape_43},{t:this.shape_44}]},1).to({state:[{t:this.shape_43},{t:this.shape_44},{t:this.shape_45}]},1).to({state:[{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46}]},1).to({state:[{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46},{t:this.shape_47}]},1).to({state:[{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46},{t:this.shape_47},{t:this.shape_48}]},1).to({state:[{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49}]},1).to({state:[{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50}]},1).to({state:[{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_51}]},1).to({state:[{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_51},{t:this.shape_52}]},1).wait(104));

	// Layer 5
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(3,1,1).p("AAABnIAAjN");
	this.shape_53.setTransform(-80.4,-0.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(3,1,1).p("AAAiAIAAEB");
	this.shape_54.setTransform(-80.4,-0.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(3,1,1).p("AAAibIAAE3");
	this.shape_55.setTransform(-80.4,-0.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(3,1,1).p("AAAi1IAAFr");
	this.shape_56.setTransform(-80.4,0.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(3,1,1).p("AAAjQIAAGh");
	this.shape_57.setTransform(-80.4,0.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(3,1,1).p("AAAjqIAAHV");
	this.shape_58.setTransform(-80.4,0.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(3,1,1).p("AAAkFIAAIL");
	this.shape_59.setTransform(-80.4,0.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(3,1,1).p("AAAEgIAAo/");
	this.shape_60.setTransform(-80.4,1.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(3,1,1).p("AJshuIAABfAprEgIAAo/");
	this.shape_61.setTransform(-18.4,1.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(3,1,1).p("AJsgPIAAiLAprkfIAAI/");
	this.shape_62.setTransform(-18.4,1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(3,1,1).p("AJsgPIAAi4AprkfIAAI/");
	this.shape_63.setTransform(-18.4,1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(3,1,1).p("AJsgPIAAjkAprkfIAAI/");
	this.shape_64.setTransform(-18.4,1.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(3,1,1).p("AJskfIAAEQAprEgIAAo/");
	this.shape_65.setTransform(-18.4,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(3,1,1).p("AhDAAQBDAABEAA");
	this.shape_66.setTransform(-76.8,76.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(3,1,1).p("AidAAQBDAAD4AA");
	this.shape_67.setTransform(-67.8,76.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(3,1,1).p("Aj2AAQBCAAGrAA");
	this.shape_68.setTransform(-58.9,76.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(3,1,1).p("AlQAAQBCAAJfAA");
	this.shape_69.setTransform(-50,76.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(3,1,1).p("AmpAAQBAAAMTAA");
	this.shape_70.setTransform(-41,76.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(3,1,1).p("AoDAAQBAAAPHAA");
	this.shape_71.setTransform(-32.1,76.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(3,1,1).p("ApcAAQA/AAR6AA");
	this.shape_72.setTransform(-23.2,76.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(3,1,1).p("Aq1AAQA9AAUuAA");
	this.shape_73.setTransform(-14.2,76.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_53}]},18).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[]},19).to({state:[{t:this.shape_66}]},16).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).wait(116));

	// Layer 1
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(3,1,1).p("Ae8AAMg93AAA");
	this.shape_74.setTransform(-189.3,0.3,0.051,1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(3,1,1).p("AjSAAIGlAA");
	this.shape_75.setTransform(-178.2,0.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(3,1,1).p("AlBAAIKDAA");
	this.shape_76.setTransform(-167.1,0.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(3,1,1).p("AmvAAINfAA");
	this.shape_77.setTransform(-155.9,0.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(3,1,1).p("AoeAAIQ9AA");
	this.shape_78.setTransform(-144.8,0.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(3,1,1).p("AqMAAIUZAA");
	this.shape_79.setTransform(-133.7,0.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(3,1,1).p("Ar7AAIX3AA");
	this.shape_80.setTransform(-122.5,0.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(3,1,1).p("AtpAAIbTAA");
	this.shape_81.setTransform(-111.4,0.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(3,1,1).p("AvYAAIexAA");
	this.shape_82.setTransform(-100.2,0.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(3,1,1).p("AxHAAMAiPAAA");
	this.shape_83.setTransform(-89.1,0.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(3,1,1).p("Ay1AAMAlrAAA");
	this.shape_84.setTransform(-78,0.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(3,1,1).p("A0kAAMApJAAA");
	this.shape_85.setTransform(-66.8,0.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(3,1,1).p("A2SAAMAslAAA");
	this.shape_86.setTransform(-55.7,0.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(3,1,1).p("A4BAAMAwDAAA");
	this.shape_87.setTransform(-44.6,0.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(3,1,1).p("A5vAAMAzfAAA");
	this.shape_88.setTransform(-33.4,0.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(3,1,1).p("A7eAAMA29AAA");
	this.shape_89.setTransform(-22.3,0.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(3,1,1).p("A9NAAMA6bAAA");
	this.shape_90.setTransform(-11.1,0.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(3,1,1).p("AG0kfIAAEQAsjgHIAAEnA+7gHISYAAIAAkYAe8gHMgrfAAA");
	this.shape_91.setTransform(0,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74,p:{scaleX:0.051,x:-189.3}}]}).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_74,p:{scaleX:1,x:0}}]},1).to({state:[{t:this.shape_91}]},32).wait(139));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.9,-1.2,23.1,3);


(lib.PartDiagram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgDADgEQADgDAEgBQAFABADADQADAEAAADQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape.setTransform(84.5,49.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFBBQgDgCAAgEIABgKIAAgLIgCg1IgVgCQgIgBAAgIQAAgEADgDQACgCAEAAIATABIAAgMIgBgMQAAgEAEgCQACgDAEAAQAHAAABAOIABAIIgBAFIAAAGIAOgBQAJAAADABQAGABAAAHQAAAEgCADQgDADgEAAIgFAAIgEgBIgNACIACA2IAAAEIAAAEQAAAVgJAAQgDAAgDgDg");
	this.shape_1.setTransform(77.5,43.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAZBGIgEgWIgBgWIAAgHIAAgHQAAgRgJAAQgLAAgJAKQgEAFgJAQQAAAjgDAHQgCAFgGAAQgEAAgCgCQgDgDAAgEIABgEIABgNIAAgOIAAhDIABgQIgBgJIgBgIQAAgEADgDQACgCAEAAQAIAAABAIIACAQIgBAUQgBAKABALIAAAIQAHgKAJgFQAIgFAJAAQAQAAAFAKQAFAHAAAPIABASIACATIADATIAAADQAAAEgDACQgCADgEAAQgHAAgCgHg");
	this.shape_2.setTransform(67.7,42.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfBIQgMgCAAgIQAAgIAIAAIALACQAIABAJAAQARAAAHgRQAFgMAAgXQgGAJgGAFQgHAFgIAAQgRAAgLgMQgKgLAAgSQAAgZAPgPQAOgQAZAAQAJAAAFACQAGADADAEQAKAAAAALIgBASIgDARIgDAeQAAATgDAMQgEAPgKAHQgKAJgUAAQgNAAgIgCgAgRguQgIALAAARQAAAOAFAFQAGAHAKAAQAIAAAJgJQAHgKACgKIAEgfIgIgFIgIgBQgRAAgKAMg");
	this.shape_3.setTransform(56.9,47.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBDQgCgCAAgFIgBgQIAAgRIABgWIABgUQgBgFADgCQACgDAFAAQADAAACADQACACABAFIgBAUIgBAWIAAARIABAQQAAAFgDACQgCADgDAAQgEAAgDgDgAgFgyQgDgEAAgEQAAgEADgEQADgDADAAQAFAAADADQADAEAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_4.setTransform(49.5,42.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgjArIAAhBIAAgJIABgJQAAgJAHAAQAJAAAAAQQASgSAVAAQAIAAADAGQAEAFAAAMIAAAGQAAAMgJAAQgIAAAAgJIAAgGIAAgIQgQACgHAGQgJAGgFAMIAAAyQAAAJgJAAQgIAAAAgJg");
	this.shape_5.setTransform(42.3,45.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_6.setTransform(26.7,45.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAZBGIgEgWIgBgWIAAgHIAAgHQAAgRgJAAQgLAAgJAKQgEAFgJAQQAAAjgDAHQgCAFgGAAQgEAAgCgCQgDgDAAgEIABgEIABgNIAAgOIAAhDIABgQIgBgJIgBgIQAAgEADgDQACgCAEAAQAIAAABAIIACAQIgBAUQgBAKABALIAAAIQAHgKAJgFQAIgFAJAAQAQAAAFAKQAFAHAAAPIABASIACATIADATIAAADQAAAEgDACQgCADgEAAQgHAAgCgHg");
	this.shape_7.setTransform(16,42.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFBBQgDgCAAgEIABgKIAAgLIgCg1IgVgCQgIgBAAgIQAAgEACgDQADgCAEAAIATABIAAgMIgBgMQAAgEAEgCQACgDAEAAQAHAAABAOIABAIIgBAFIAAAGIAOgBQAKAAACABQAGABAAAHQAAAEgCADQgDADgEAAIgFAAIgEgBIgNACIACA2IAAAEIAAAEQAAAVgJAAQgDAAgDgDg");
	this.shape_8.setTransform(5.9,43.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAnQgMgNgBgVQgBgUAMgQQANgTAWAAQASAAAKARQAHAOAAATQAAAUgLAOQgLARgTAAQgQAAgLgMgAgQgSQgGAKAAANQAAANAIAIQAGAGAIAAQAJAAAHgHQAHgIABgNQABgjgUAAQgNAAgIANg");
	this.shape_9.setTransform(-9.5,45.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFBBQgDgCAAgEIABgKIAAgLIgCg1IgVgCQgIgBAAgIQAAgEADgDQACgCAEAAIATABIAAgMIgBgMQAAgEAEgCQACgDAEAAQAHAAABAOIABAIIgBAFIAAAGIAOgBQAJAAADABQAGABAAAHQAAAEgCADQgDADgEAAIgFAAIgEgBIgNACIACA2IAAAEIAAAEQAAAVgJAAQgDAAgDgDg");
	this.shape_10.setTransform(-18.8,43.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_11.setTransform(-33.8,44.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_12.setTransform(-43.2,45.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKArIgOgmIgQgpIgBgFQAAgDACgDQAEgDAEAAQAFAAADAGIAXBAQAGgPAKgbIAIgVQADgGAFAAQAEAAADADQADACAAAEQAAADgQAlIgTAqQABAJgIAAQgGAAgEgIg");
	this.shape_13.setTransform(-53.1,45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjArIAAhBIAAgJIAAgJQAAgJAJAAQAJAAAAAQQARgSAVAAQAHAAAFAGQADAFAAAMIAAAGQgBAMgIAAQgIAAAAgJIgBgGIAAgIQgOACgIAGQgIAGgGAMIAAAyQAAAJgJAAQgIAAAAgJg");
	this.shape_14.setTransform(-62.1,45.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAVAsQgMAGgOAAQgMAAgIgFQgJgGgCgLQgDgZAAgSQAAgNADgQQABgIAHAAQAEAAADACQADADAAAEIgBAOIgCAOIABAZQABALACAHIAGADIAGABQAMAAANgEIAAgTIAAgRQAAgUACgPQABgJAIAAQAEAAADADQACADAAAEIgCAjIAAATIABAUIAAAGIAAAGQAAAEgDADQgCACgEAAQgHAAgCgJg");
	this.shape_15.setTransform(-71.9,45.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaApQgNgMAAgUQAAgSANgUQANgWARAAQAJAAALAEQAOAFAAAIQAAAEgCADQgCACgEAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgEgEQgGgEgMAAQgJAAgJARQgIAPAAALQAAAMAIAHQAIAHALAAQAGAAAGgDIALgGIAEgCQADAAADADQACADAAADQAAAHgOAHQgNAFgIAAQgSAAgNgLg");
	this.shape_16.setTransform(-81.7,45.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggA/QgNgNAAgUQAAgZANgOQANgPAUAAQALAAAGADIAIAHIADg1QACgIAHAAQAIAAAAAJQAAANgDAsQgCAMAAAOQAAAfADAQIABACQAAAEgDACQgDACgDAAQgGAAgDgIQgGAFgHADQgIACgGAAQgUAAgMgNgAgVACQgIAJAAASQAAAMAJAJQAIAIAMAAQAGAAAGgCIAKgIIADgDIgBgQIABgLIAAgLQgEgHgGgDQgFgEgJAAQgOAAgIAJg");
	this.shape_17.setTransform(184,14);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAXAtIgDgUIgCgUIABgIIAAgJQAAgUgHAAQgLAAgIAMQgJALgEARIgBAJIAAAJIAAAIIABAIQAAAFgDADQgCACgEAAQgFAAgCgCQgDgDAAgFIAAgIIgBgIIACgaIABgaIAAgJIgBgJQAAgEACgCQADgDAEAAQAJAAABANIAAAKQAPgUAQAAQAOAAAHAMQAEAJAAARIAAAKIAAAHQAAAIACAMIACAUQAAAEgDADQgCACgEAAQgIAAgBgJg");
	this.shape_18.setTransform(173.8,16.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAeAwIgHgHIgPAHQgHADgEgBQgVABgKgMQgKgMAAgYQAAgVAQgQQAPgRAVABQAIgBAKAFQANAFAAAIQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIgCALIAAAUQAAALABAIIAGAQIACAEIABACQAAAEgDACQgCADgEgBQgCAAgEgDgAgPgWQgKALAAAPQAAAPAFAHQAGAIAKAAQAIABAGgEQAEgCAGgFQgDgYAAgMIAAgJIACgJIgGgDIgEgBQgNAAgLAMg");
	this.shape_19.setTransform(163.7,16.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAXAtIgDgUIgCgUIABgIIABgJQAAgUgIAAQgLAAgIAMQgJALgFARIAAAJIAAAJIAAAIIAAAIQAAAFgCADQgDACgEAAQgEAAgDgCQgCgDAAgFIAAgIIgBgIIABgaIABgaIAAgJIAAgJQAAgEACgCQAEgDADAAQAJAAAAANIABAKQAQgUAPAAQAPAAAFAMQAEAJABARIAAAKIAAAHQAAAIACAMIACAUQAAAEgDADQgDACgDAAQgJAAAAgJg");
	this.shape_20.setTransform(148.4,16.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAGAbIgEgWIgCgTIgIAQIgOAmQgBAEgDACQgCAGgGgBQgHAAgHgbIgGgmIgCgOIgCgOQAAgEADgDQACgCAEAAQAIAAABAIIACANIACAOIAFAoQALgbALgmQADgKAGABQAHAAADALIAGAhIAGAkIAHgaIAMgxQABgGAHAAQAEAAADADQADADAAADIgBAEQgIAfgLAlQgCAJgHAIQgDAFgGAAQgJAAgGgZg");
	this.shape_21.setTransform(136.8,16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgbAnQgMgNgBgVQgBgUAMgQQANgTAWAAQASAAAKARQAHAOAAATQAAAUgLAOQgLARgTAAQgQAAgLgMgAgQgSQgGAKAAANQAAANAIAIQAGAGAIAAQAJAAAHgHQAHgIABgNQABgjgUAAQgNAAgIANg");
	this.shape_22.setTransform(125,16.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AggA/QgNgNAAgUQAAgZANgOQANgPAUAAQALAAAGADIAIAHIADg1QACgIAHAAQAIAAAAAJQAAANgDAsQgCAMAAAOQAAAfADAQIABACQAAAEgDACQgDACgDAAQgGAAgDgIQgGAFgHADQgIACgGAAQgUAAgMgNgAgVACQgIAJAAASQAAAMAJAJQAIAIAMAAQAGAAAGgCIAKgIIADgDIgBgQIABgLIAAgLQgEgHgGgDQgFgEgJAAQgOAAgIAJg");
	this.shape_23.setTransform(114.6,14);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_24.setTransform(98.5,16.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjBMQgDgDAAgFIABgkIAAgkIgCglIgBgTQAAgHACgFQADgFAFAAQAEAAACACQADADAAAEIAAADIgBAFQAIgGAHgCQAHgDAGAAQATABAJAQQAHAOAAAVQAAAUgKANQgMANgTAAQgIAAgLgDIgBAsQAAAFgCADQgDACgEAAQgEAAgCgCgAgIgwQgFACgHAHIABAsQAKADAJAAQAMABAGgJQAFgHAAgMQAAgQgEgJQgEgIgJAAQgHAAgHAEg");
	this.shape_25.setTransform(89.2,18.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgbAnQgMgNgBgVQgBgUAMgQQANgTAWAAQASAAAKARQAHAOAAATQAAAUgLAOQgLARgTAAQgQAAgLgMgAgQgSQgGAKAAANQAAANAIAIQAGAGAIAAQAJAAAHgHQAHgIABgNQABgjgUAAQgNAAgIANg");
	this.shape_26.setTransform(78.8,16.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgjArIAAhBIAAgJIABgJQgBgJAJAAQAJAAAAAPQARgRAVAAQAHAAAFAGQADAGAAALIAAAGQgBAMgIAAQgIAAAAgJIgBgHIAAgIQgOACgIAHQgIAGgGAMIAAAyQAAAJgJAAQgIAAAAgJg");
	this.shape_27.setTransform(69.7,16.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AggA/QgNgNAAgUQAAgZANgOQANgPAUAAQALAAAGADIAIAHIADg1QACgIAHAAQAIAAAAAJQAAANgDAsQgCAMAAAOQAAAfADAQIABACQAAAEgDACQgDACgDAAQgGAAgDgIQgGAFgHADQgIACgGAAQgUAAgMgNgAgVACQgIAJAAASQAAAMAJAJQAIAIAMAAQAGAAAGgCIAKgIIADgDIgBgQIABgLIAAgLQgEgHgGgDQgFgEgJAAQgOAAgIAJg");
	this.shape_28.setTransform(59.2,14);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFBBQgDgCAAgEIABgKIAAgLIgCg1IgVgCQgIgBAAgIQAAgEADgDQACgCAEAAIAUABIgBgMIAAgMQAAgEADgCQACgDAEAAQAHAAACAOIAAAIIAAAFIAAAGIANgBQAJAAAEABQAFABAAAHQAAAEgCADQgDADgEAAIgEAAIgFgBIgNACIACA2IAAAEIAAAEQAAAVgJAAQgDAAgDgDg");
	this.shape_29.setTransform(43.5,15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAeAwIgHgHIgPAHQgHADgEgBQgVABgKgMQgKgMAAgYQAAgVAQgQQAPgRAVABQAIgBAKAFQANAFAAAIQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIgCALIAAAUQAAALABAIIAGAQIACAEIABACQAAAEgDACQgCADgEgBQgCAAgEgDgAgPgWQgKALAAAPQAAAPAFAHQAGAIAKAAQAIABAGgEQAEgCAGgFQgDgYAAgMIAAgJIACgJIgGgDIgEgBQgNAAgLAMg");
	this.shape_30.setTransform(34.2,16.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAZBGIgEgWIgBgWIAAgHIAAgHQAAgRgJAAQgLAAgJAKQgEAFgJAQQAAAjgDAHQgCAFgGAAQgEAAgCgCQgDgDAAgEIABgEIABgNIAAgOIAAhDIABgQIgBgJIgBgIQAAgEADgDQACgCAEAAQAIAAABAIIACAQIgBAUQgBAKABALIAAAIQAHgKAJgFQAIgFAJAAQAQAAAFAKQAFAHAAAPIABASIACATIADATIAAADQAAAEgDACQgCADgEAAQgHAAgCgHg");
	this.shape_31.setTransform(24,14.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFBBQgDgCAAgEIAAgKIAAgLIgBg1IgUgCQgJgBAAgIQAAgEACgDQADgCAEAAIATABIAAgMIgBgMQAAgEADgCQADgDAEAAQAHAAABAOIABAIIgBAFIAAAGIAOgBQAKAAACABQAGABAAAHQAAAEgDADQgCADgEAAIgFAAIgEgBIgNACIACA2IAAAEIAAAEQAAAVgKAAQgDAAgCgDg");
	this.shape_32.setTransform(13.9,15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_33.setTransform(-1.3,16.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAXAtIgDgUIgCgUIABgIIAAgJQABgUgIAAQgKAAgJAMQgJALgEARIgBAJIAAAJIAAAIIABAIQgBAFgCADQgDACgDAAQgFAAgDgCQgCgDAAgFIAAgIIgBgIIACgaIAAgaIAAgJIAAgJQAAgEACgCQADgDAEAAQAJAAAAANIABAKQAQgUAPAAQAOAAAHAMQADAJABARIAAAKIAAAHQAAAIACAMIACAUQAAAEgDADQgCACgEAAQgJAAAAgJg");
	this.shape_34.setTransform(-11.4,16.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIBDQgDgCAAgFIAAgQIgBgRIABgWIACgUQAAgFACgCQADgDAEAAQADAAACADQADACAAAFIgCAUIAAAWIAAARIAAAQQAAAFgCACQgDADgDAAQgEAAgCgDgAgFgyQgEgEABgEQgBgEAEgEQADgDAEAAQAEAAAEADQACAEAAAEQAAAEgCAEQgEADgEAAQgEAAgDgDg");
	this.shape_35.setTransform(-19.1,14.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKBDIABghIABgiIABghIAAghQAAgKAIAAQAKAAAAAKIgBAhIAAAhIgCAuIAAAVQgBAKgIAAQgJAAAAgKg");
	this.shape_36.setTransform(-24.6,13.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAeAwIgHgHIgPAHQgHADgEgBQgVABgKgMQgKgMAAgYQAAgVAQgQQAPgRAVABQAIgBAKAFQANAFAAAIQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAIgCALIAAAUQAAALABAIIAGAQIACAEIABACQAAAEgDACQgCADgEgBQgCAAgEgDgAgPgWQgKALAAAPQAAAPAFAHQAGAIAKAAQAIABAGgEQAEgCAGgFQgDgYAAgMIAAgJIACgJIgGgDIgEgBQgNAAgLAMg");
	this.shape_37.setTransform(-37.7,16.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAXAtIgDgUIgCgUIABgIIAAgJQAAgUgHAAQgLAAgIAMQgJALgEARIgBAJIAAAJIAAAIIABAIQAAAFgDADQgCACgEAAQgFAAgCgCQgDgDAAgFIAAgIIgBgIIACgaIABgaIAAgJIgBgJQAAgEACgCQADgDAEAAQAJAAABANIAAAKQAPgUAQAAQAOAAAHAMQAEAJAAARIAAAKIAAAHQAAAIACAMIACAUQAAAEgDADQgCACgEAAQgIAAgBgJg");
	this.shape_38.setTransform(-53,16.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgbAnQgMgNgBgVQgBgUAMgQQANgTAWAAQASAAAKARQAHAOAAATQAAAUgLAOQgLARgTAAQgQAAgLgMgAgQgSQgGAKAAANQAAANAIAIQAGAGAIAAQAJAAAHgHQAHgIABgNQABgjgUAAQgNAAgIANg");
	this.shape_39.setTransform(-63.4,16.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_40.setTransform(-79,16.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAWAtIgCgUIgBgUIAAgIIABgJQAAgUgIAAQgKAAgJAMQgJALgFARIAAAJIgBAJIABAIIAAAIQABAFgDADQgDACgEAAQgEAAgDgCQgCgDAAgFIgBgIIAAgIIABgaIABgaIAAgJIAAgJQAAgEACgCQADgDAEAAQAJAAAAANIABAKQAPgUAQAAQAPAAAFAMQAEAJABARIAAAKIAAAHQAAAIACAMIACAUQAAAEgDADQgDACgEAAQgIAAgBgJg");
	this.shape_41.setTransform(-89.1,16.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgIBDQgCgCAAgFIgBgQIAAgRIABgWIABgUQgBgFADgCQACgDAFAAQADAAACADQACACABAFIgBAUIgBAWIAAARIABAQQAAAFgDACQgCADgDAAQgEAAgDgDgAgFgyQgDgEAAgEQAAgEADgEQADgDADAAQAFAAADADQADAEAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_42.setTransform(-96.8,14.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgKBDIABghIABgiIABghIAAghQAAgKAIAAQAKAAAAAKIgBAhIAAAhIgCAuIAAAVQgBAKgIAAQgJAAAAgKg");
	this.shape_43.setTransform(-102.2,13.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_44.setTransform(-115.6,16.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgaApQgNgMAAgUQAAgSANgUQANgWARAAQAJAAALAEQAOAFAAAIQAAAEgCADQgCACgEAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgEgEQgGgEgMAAQgJAAgJARQgIAPAAALQAAAMAIAHQAIAHALAAQAGAAAGgDIALgGIAEgCQADAAADADQACADAAADQAAAHgOAHQgNAFgIAAQgSAAgNgLg");
	this.shape_45.setTransform(-125.8,16.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAWAtIgCgUIgBgUIAAgIIABgJQAAgUgIAAQgKAAgJAMQgJALgFARIAAAJIgBAJIABAIIAAAIQABAFgDADQgDACgEAAQgEAAgDgCQgCgDAAgFIgBgIIAAgIIABgaIABgaIAAgJIAAgJQAAgEACgCQADgDAEAAQAJAAAAANIABAKQAPgUAQAAQAPAAAFAMQAEAJABARIAAAKIAAAHQAAAIACAMIACAUQAAAEgDADQgDACgEAAQgIAAgBgJg");
	this.shape_46.setTransform(-135.4,16.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_47.setTransform(-145.7,16.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgFBBQgDgCAAgEIAAgKIAAgLIgBg1IgUgCQgJgBAAgIQAAgEACgDQADgCAEAAIATABIAAgMIAAgMQAAgEACgCQADgDAEAAQAHAAABAOIABAIIgBAFIAAAGIAOgBQAKAAADABQAFABAAAHQAAAEgDADQgCADgEAAIgFAAIgEgBIgNACIACA2IAAAEIAAAEQABAVgLAAQgDAAgCgDg");
	this.shape_48.setTransform(-155.5,15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAWAtIgCgUIgCgUIABgIIAAgJQAAgUgHAAQgLAAgIAMQgJALgEARIgBAJIgBAJIABAIIABAIQAAAFgDADQgCACgEAAQgFAAgCgCQgDgDAAgFIgBgIIAAgIIACgaIABgaIAAgJIgBgJQAAgEADgCQADgDADAAQAJAAABANIAAAKQAQgUAPAAQAOAAAHAMQAEAJAAARIAAAKIAAAHQAAAIACAMIACAUQAAAEgDADQgDACgEAAQgHAAgCgJg");
	this.shape_49.setTransform(-164.7,16.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_50.setTransform(-175,16.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_51.setTransform(-185.2,16.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXAuIgDgVIgCgVIABgHIAAgJQABgUgIAAQgLAAgIAMQgJAMgEAQIgBAJIAAAJIAAAIIABAIQgBAFgCACQgCADgEAAQgFAAgDgDQgCgCAAgFIAAgIIgBgIIACgaIABgaIAAgJIgBgIQAAgEACgDQADgDAEAAQAJAAABAMIAAALQAQgVAPABQAOgBAHANQAEAJAAARIAAAJIAAAIQAAAIACAMIACAUQAAAEgDACQgCADgEAAQgJAAAAgIg");
	this.shape_52.setTransform(186.5,-12);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgIBDQgDgCAAgFIAAgQIgBgRIABgWIABgUQAAgFADgCQACgDAEAAQADAAADADQACACAAAFIgBAUIAAAWIAAARIAAAQQAAAFgCACQgDADgDAAQgEAAgCgDgAgFgyQgDgEAAgEQAAgEADgEQADgDAEAAQAEAAAEADQADAEAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_53.setTransform(178.8,-14.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHACgEAAQgVAAgKgMQgKgLAAgYQAAgWAQgPQAPgQAVgBQAIABAKAEQANAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQgBABAAAAIgCAMIAAATQAAALABAHIAGARIACAEIABACQAAAEgDACQgCADgEAAQgCgBgEgEgAgPgWQgKAMAAAOQAAAPAFAIQAGAHAKABQAIAAAGgEQAEgCAGgFQgDgYAAgMIAAgJIACgKIgGgCIgEgBQgNAAgLAMg");
	this.shape_54.setTransform(171.1,-11.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFA3QgCgDAAgEIgCghQgDgVAAgLQAAgKgCgGQgHADgHAHIgLAMIgEAGIgBAPIgBAQIABAIIAAAHQAAAEgCADQgDACgEAAQgLAAAAgXIABgRIACgQIgBgOIgBgPQAAgVAJAAQAEAAADADQADADAAAEIgBAFIAAAGIAAAKQAFgKAJgIQAKgIAGAAQAPAAAEAOQAFgHAHgDQAIgDAJAAQAPAAAGAQIAEAaIAGA1QABADgDADQgDACgEAAQgIAAgBgIQgCgKgBgSIgDgcQgBgHgDgGQgDgIgDAAQgEAAgJAGQgJAFgDADQAAAJABAJIACAYQACAOAAAKQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_55.setTransform(159,-11.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_56.setTransform(140.7,-11.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAZBGIgEgWIgBgWIAAgHIAAgHQAAgRgJAAQgLAAgJAKQgEAFgJAQQAAAjgDAHQgCAFgGAAQgEAAgCgCQgDgDAAgEIABgEIABgNIAAgOIAAhDIABgQIgBgJIgBgIQAAgEADgDQACgCAEAAQAIAAABAIIACAQIgBAUQgBAKABALIAAAIQAHgKAJgFQAIgFAJAAQAQAAAFAKQAFAHAAAPIABASIACATIADATIAAADQAAAEgDACQgCADgEAAQgHAAgCgHg");
	this.shape_57.setTransform(130,-14.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgFBBQgDgCAAgEIAAgKIAAgLIgBg1IgUgCQgJgBAAgIQAAgEACgDQADgCAEAAIATABIAAgMIAAgMQAAgEACgCQADgDAEAAQAHAAABAOIABAIIgBAFIAAAGIAOgBQAKAAADABQAFABAAAHQAAAEgDADQgCADgEAAIgEAAIgFgBIgNACIACA2IAAAEIAAAEQABAVgLAAQgDAAgCgDg");
	this.shape_58.setTransform(119.9,-13.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAGAbIgEgWIgCgUIgHARIgPAmQgBAEgCACQgDAGgGAAQgHAAgHgcIgGgmIgDgOIgBgOQAAgEADgDQACgCAEAAQAIAAABAHIACAOIACAOIAFApQAKgcAMgmQADgJAGgBQAIAAACAMIAGAhIAGAjIAHgZIAMgxQABgGAHAAQAEAAADADQADACAAAEIgBAFQgIAdgLAmQgDAIgGAJQgDAFgGAAQgKAAgFgZg");
	this.shape_59.setTransform(103.3,-11.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgbAnQgMgNgBgVQgBgUAMgQQANgTAWAAQASAAAKARQAHAOAAATQAAAUgLAOQgLARgTAAQgQAAgLgMgAgQgSQgGAKAAANQAAANAIAIQAGAGAIAAQAJAAAHgHQAHgIABgNQABgjgUAAQgNAAgIANg");
	this.shape_60.setTransform(91.5,-11.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgKBDIABghIABgiIABghIAAghQAAgKAIAAQAKAAAAAKIgBAhIAAAhIgCAuIAAAVQgBAKgIAAQgJAAAAgKg");
	this.shape_61.setTransform(84.1,-14.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_62.setTransform(76.5,-11.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgcBFQgDAFgEAAQgDAAgCgDQgDgCAAgEIAAgHIAAgHIAAgdIgBgdIABgZIAAgaQAAgGACgEQADgGAFAAQAHAAAAAIIgBAEIAAAEIAAAUIgBAYQAJgGAHgCQAHgDAGAAQATAAANAPQAMANAAAVQAAAVgOAPQgOAPgTAAQgOAAgMgGgAgOgEIgNAIIgBARIAAAOIABAPIANAGQAFACAHAAQANAAAJgKQAIgJAAgPQAAgNgHgKQgHgJgNAAQgHAAgIAEg");
	this.shape_63.setTransform(65.7,-14.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AggA/QgNgNAAgUQAAgZANgOQANgPAUAAQALAAAGADIAIAHIADg1QACgIAHAAQAIAAAAAJQAAANgDAsQgCAMAAAOQAAAfADAQIABACQAAAEgDACQgDACgDAAQgGAAgDgIQgGAFgHADQgIACgGAAQgUAAgMgNgAgVACQgIAJAAASQAAAMAJAJQAIAIAMAAQAGAAAGgCIAKgIIADgDIgBgQIABgLIAAgLQgEgHgGgDQgFgEgJAAQgOAAgIAJg");
	this.shape_64.setTransform(48.5,-14.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_65.setTransform(38,-11.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFA3QgCgDAAgEIgCghQgDgVAAgLQAAgKgCgGQgHADgHAHIgLAMIgEAGIgBAPIgBAQIABAIIAAAHQAAAEgCADQgDACgEAAQgLAAAAgXIABgRIACgQIgBgOIgBgPQAAgVAJAAQAEAAADADQADADAAAEIgBAFIAAAGIAAAKQAFgKAJgIQAKgIAGAAQAPAAAEAOQAFgHAHgDQAIgDAJAAQAPAAAGAQIAEAaIAGA1QABADgDADQgDACgEAAQgIAAgBgIQgCgKgBgSIgDgcQgBgHgDgGQgDgIgDAAQgEAAgJAGQgJAFgDADQAAAJABAJIACAYQACAOAAAKQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_66.setTransform(25.4,-11.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgFA3QgCgDAAgEIgCghQgDgVAAgLQAAgKgCgGQgHADgHAHIgLAMIgEAGIgBAPIgBAQIABAIIAAAHQAAAEgCADQgDACgEAAQgLAAAAgXIABgRIACgQIgBgOIgBgPQAAgVAJAAQAEAAADADQADADAAAEIgBAFIAAAGIAAAKQAFgKAJgIQAKgIAGAAQAPAAAEAOQAFgHAHgDQAIgDAJAAQAPAAAGAQIAEAaIAGA1QABADgDADQgDACgEAAQgIAAgBgIQgCgKgBgSIgDgcQgBgHgDgGQgDgIgDAAQgEAAgJAGQgJAFgDADQAAAJABAJIACAYQACAOAAAKQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_67.setTransform(10.6,-11.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHACgEAAQgVAAgKgMQgKgLAAgYQAAgWAQgPQAPgQAVgBQAIABAKAEQANAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQgBABAAAAIgCAMIAAATQAAALABAHIAGARIACAEIABACQAAAEgDACQgCADgEAAQgCgBgEgEgAgPgWQgKAMAAAOQAAAPAFAIQAGAHAKABQAIAAAGgEQAEgCAGgFQgDgYAAgMIAAgJIACgKIgGgCIgEgBQgNAAgLAMg");
	this.shape_68.setTransform(-1.7,-11.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgjArIAAhAIAAgJIAAgJQABgKAHAAQAJAAAAAPQASgRAVAAQAIAAADAGQAEAFAAAMIAAAHQAAALgJAAQgIAAAAgJIgBgHIAAgIQgPADgHAGQgIAGgGAMIAAAyQAAAJgJAAQgIAAAAgJg");
	this.shape_69.setTransform(-10.9,-11.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AggBIQgLgCAAgIQAAgIAIAAIALACQAIABAKAAQAQAAAHgRQAEgMAAgXQgEAJgHAFQgHAFgIAAQgRAAgLgMQgKgLAAgSQAAgZAOgPQAQgQAYAAQAIAAAHACQAFADAEAEQAJAAAAALIgCASIgDARIgBAeQgBATgDAMQgEAPgKAHQgLAJgUAAQgMAAgJgCgAgQguQgJALAAARQAAAOAFAFQAFAHAKAAQAJAAAIgJQAJgKABgKIAEgfIgIgFIgIgBQgQAAgKAMg");
	this.shape_70.setTransform(-20.9,-9.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHACgEAAQgVAAgKgMQgKgLAAgYQAAgWAQgPQAPgQAVgBQAIABAKAEQANAFAAAHQAAABAAABQgBAAAAABQAAAAAAABQgBABAAAAIgCAMIAAATQAAALABAHIAGARIACAEIABACQAAAEgDACQgCADgEAAQgCgBgEgEgAgPgWQgKAMAAAOQAAAPAFAIQAGAHAKABQAIAAAGgEQAEgCAGgFQgDgYAAgMIAAgJIACgKIgGgCIgEgBQgNAAgLAMg");
	this.shape_71.setTransform(-30.7,-11.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgIBDQgDgCAAgFIAAgQIgBgRIABgWIACgUQAAgFACgCQADgDAEAAQADAAACADQADACAAAFIgCAUIAAAWIAAARIAAAQQAAAFgCACQgDADgDAAQgEAAgCgDgAgFgyQgEgEABgEQgBgEAEgEQADgDAEAAQAEAAAEADQACAEAAAEQAAAEgCAEQgEADgEAAQgEAAgDgDg");
	this.shape_72.setTransform(-38,-14.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AggA/QgNgNAAgUQAAgZANgOQANgPAUAAQALAAAGADIAIAHIADg1QACgIAHAAQAIAAAAAJQAAANgDAsQgCAMAAAOQAAAfADAQIABACQAAAEgDACQgDACgDAAQgGAAgDgIQgGAFgHADQgIACgGAAQgUAAgMgNgAgVACQgIAJAAASQAAAMAJAJQAIAIAMAAQAGAAAGgCIAKgIIADgDIgBgQIABgLIAAgLQgEgHgGgDQgFgEgJAAQgOAAgIAJg");
	this.shape_73.setTransform(-46.5,-14.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_74.setTransform(-62.6,-12.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgIBDQgCgCgBgFIAAgQIAAgRIAAgWIABgUQABgFACgCQADgDADAAQADAAADADQADACgBAFIgBAUIAAAWIAAARIAAAQQAAAFgCACQgDADgDAAQgDAAgDgDgAgFgyQgDgEgBgEQABgEADgEQADgDADAAQAFAAADADQAEAEAAAEQAAAEgEAEQgDADgFAAQgDAAgDgDg");
	this.shape_75.setTransform(-69.5,-14.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF00FF").s().p("AgoBIQgJgIAAgfIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgKIgBgLQAAgKAJgBQAEABADACIAVgFIASgBQAWAAAOAFQAGADAAAGQAAAEgDADQgCADgEAAIgDgBQgQgEgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAALQAAAVADADQACADAMAAIARAAIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_76.setTransform(-83.7,-14.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF00FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_77.setTransform(-94.9,-14);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF00FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_78.setTransform(-105.2,-14.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF00FF").s().p("AgoBEQgDgCAAgFQAAgDADgEQADgCADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEAAgDgDQgDgDAAgEQAAgJAJAAIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAbAAAXIAAAQIABAQIgBARIAdgBQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAIgPAAIgQABIgRABIgTACQgDAAgDgDg");
	this.shape_79.setTransform(-115.4,-14);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF00FF").s().p("AgmA5QgNgOAAgUQAAgeAaghQAXgcAVAAIAIABIAHABQADgFAFAAQAGAAACAJQACAHAAALQgBAEgCADQgCAEgEAAQgHAAgCgHQgDgGgDgCQgBgBgIAAQgOAAgPAVQgWAcAAAXQAAAMAHAJQAJAJAKAAQAJAAAKgFIAQgLQAFgEADAAQAEAAADADQACADAAAEQAAAEgDADQgZAWgYAAQgSAAgOgPg");
	this.shape_80.setTransform(-126.1,-14.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF00FF").s().p("AgoBEQgDgCAAgFQAAgDADgEQADgCADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEAAgDgDQgDgDAAgEQAAgJAJAAIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAbAAAXIAAAQIABAQIgBARIAdgBQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAIgPAAIgQABIgRABIgTACQgDAAgDgDg");
	this.shape_81.setTransform(-137.3,-14);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF00FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_82.setTransform(-148.1,-14.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF00FF").s().p("AguBGQgEgCAAgFIAAgVIgBgWIACgZIACgZIgBgOIgBgOQABgFADgEQADgFAGAAIAWACQANACAIAEQAmAUAAAdQgBAOgNAKQgJAJgQAEQAcAQAPARQADADAAADQAAAEgEADQgCADgEAAQgDAAgDgDQgfgfglgKIABASIAAASQAAAFgDACQgCADgEAAQgEAAgCgDgAgdgpIABALIgBATIgDARIAFAAIADABQAYAAALgHQAFgCAFgEQAEgFABgEQAAgNgPgLQgMgKgPgCIgOgBg");
	this.shape_83.setTransform(-161.1,-14.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF00FF").s().p("AAgAwQgCgIgEgWIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgDQgDgCAAgEQAAgEAOgeQgBgDAAgDQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA/IAFAPIADAKQAAAEgDACQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgjg");
	this.shape_84.setTransform(-174.4,-14);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF00FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_85.setTransform(-186.1,-14.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF00FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_86.setTransform(193.4,-42.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF00FF").s().p("Ag9BIQgEgDAAgEIABgLIABgMIAAgRIAAgSIAAgRIAAgTIgBgRIgBgRQAAgFAEgDQADgEAFAAQAFAAAHALQAXAjASAXQAVAaAbAZIAAgMIAAgMQAAgogEgYIgCgJIgCgKQAAgLAKAAQAQAAAAA8IAAAeIAAAfIgCAOQgBAKgJAAQgFAAgHgHQgmgkgwhCIAAAVIgBAUIABAXIAAAYQAAAZgKAAQgEAAgDgEg");
	this.shape_87.setTransform(178.7,-42.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF00FF").s().p("AgoBIQgJgJAAgdIABgOIAAgOIgBgFQAAgDACgCIACgoIgBgJIgBgKQAAgLAJAAQAEAAADACIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAJIgBAkIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBAMIAAAMQAAAUADADQACAEAMAAIARgBIARAAIAFgBIAGgBQAKAAAAAKQAAAIgIACQgJABgcAAQgdAAgIgHg");
	this.shape_88.setTransform(165.3,-42.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF00FF").s().p("AglBAQgRgIAAgOQAAgEADgCQACgDAFAAQAEAAADAGQAFAHADACQAJAFAPAAQANAAANgGQAPgIAAgOQAAgMgNgHQgLgFgQgBQgPAAgKgFQgNgIAAgOQAAgQATgOQASgNARAAQAKAAALADQAPAEAAAGQAAAJgJAAIgMgCIgPgCQgNAAgKAHQgLAHAAAKQAAAIAOADIATACQAVACAMAMQALAJAAAQQAAAWgVANQgRAMgWAAQgSAAgOgHg");
	this.shape_89.setTransform(152.7,-42.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF00FF").s().p("AgoBIQgJgJAAgdIABgOIAAgOIgBgFQAAgDACgCIACgoIgBgJIgBgKQAAgLAJAAQAEAAADACIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAJIgBAkIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBAMIAAAMQAAAUADADQACAEAMAAIARgBIARAAIAFgBIAGgBQAKAAAAAKQAAAIgIACQgJABgcAAQgdAAgIgHg");
	this.shape_90.setTransform(140.3,-42.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF00FF").s().p("AgvBGQgDgCAAgFIAAgVIAAgWIABgZIACgZIgBgOIgBgOQAAgFADgEQAEgFAGAAIAXACQAMACAIAEQAmAUAAAdQAAAOgOAKQgKAJgPAEQAcAQAPARQACADAAADQAAAEgDADQgCADgEAAQgDAAgDgDQgggfgkgKIABASIAAASQAAAFgCACQgDADgEAAQgEAAgDgDgAgdgpIAAALIgBATIgCARIAEAAIAFABQAXAAALgHQAGgCAEgEQAFgFgBgEQAAgNgOgLQgNgKgOgCIgOgBg");
	this.shape_91.setTransform(128.4,-42.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF00FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_92.setTransform(117.3,-43);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_93.setTransform(101.5,-40.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAZBGIgEgWIgBgWIAAgHIAAgHQAAgRgJAAQgLAAgJAKQgEAFgJAQQAAAjgDAHQgCAFgGAAQgEAAgCgCQgDgDAAgEIABgEIABgNIAAgOIAAhDIABgQIgBgJIgBgIQAAgEADgDQACgCAEAAQAIAAABAIIACAQIgBAUQgBAKABALIAAAIQAHgKAJgFQAIgFAJAAQAQAAAFAKQAFAHAAAPIABASIACATIADATIAAADQAAAEgDACQgCADgEAAQgHAAgCgHg");
	this.shape_94.setTransform(90.8,-42.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgFBBQgDgCAAgEIABgKIAAgLIgCg1IgVgCQgIgBAAgIQAAgEADgDQACgCAEAAIATABIAAgMIgBgMQAAgEAEgCQACgDAEAAQAHAAABAOIABAIIgBAFIAAAGIAOgBQAKAAACABQAGABAAAHQAAAEgCADQgDADgEAAIgFAAIgEgBIgNACIACA2IAAAEIAAAEQAAAVgJAAQgDAAgDgDg");
	this.shape_95.setTransform(80.7,-42);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#9933FF").s().p("AgLAUQgCgCAAgEQAAgCAGgNIAHgQQACgFADABQAEgBADADQACACAAAEQAAACgNAcQgBAGgFAAQgEgBgCgCg");
	this.shape_96.setTransform(68.5,-34.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9933FF").s().p("AgoBIQgJgJAAgdIABgOIAAgOIgBgFQAAgDACgCIACgoIgBgJIgBgKQAAgLAJAAQAEAAADACIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAJIgBAkIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBAMIAAAMQAAAUADADQACAEAMAAIARgBIARAAIAFgBIAGgBQAKAAAAAKQAAAIgIACQgJABgcAAQgdAAgIgHg");
	this.shape_97.setTransform(59.7,-42.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9933FF").s().p("AgQBDQgLgcgOg0IgHgZQgGgTAAgGQAAgEADgDQADgCAEAAQAHgBACAIIADAQIAJAgQAJAhAIAZIABgCIAYhBIAIgYQAFgNAGgHQADgEAEAAQAEAAADADQADADAAADQAAAEgCACQgGAJgDAJIgIAUIgYBDQgFAMgGALQgCAGgFAAQgHAAgDgIg");
	this.shape_98.setTransform(47.9,-42.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#9933FF").s().p("AgoBEQgDgCAAgEQAAgFADgCQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMAAIgMAAQgEAAgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgCIgPgBQgCAbAAAYIAAAQIABAPIgBAQIAdAAQAEAAADACQADAEAAADQAAAEgDAEQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_99.setTransform(36,-42.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9933FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_100.setTransform(25.1,-42.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#9933FF").s().p("AgmA5QgMgOgBgUQABgeAaghQAWgcAVAAIAIABIAGABQAEgFAFAAQAGAAACAJQABAHAAALQAAAEgCADQgCAEgFAAQgFAAgEgHQgCgGgCgCQgCgBgIAAQgOAAgPAVQgWAcAAAXQAAAMAIAJQAHAJALAAQAJAAAKgFIARgLQAEgEAEAAQADAAADADQACADABAEQgBAEgDADQgZAWgYAAQgSAAgOgPg");
	this.shape_101.setTransform(12.4,-42.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#9933FF").s().p("AgoBIQgJgJAAgdIABgOIAAgOIgBgFQAAgDACgCIACgoIgBgJIgBgKQAAgLAJAAQAEAAADACIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAJIgBAkIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBAMIAAAMQAAAUADADQACAEAMAAIARgBIARAAIAFgBIAGgBQAKAAAAAKQAAAIgIACQgJABgcAAQgdAAgIgHg");
	this.shape_102.setTransform(0.8,-42.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#9933FF").s().p("AglBAQgSgNAAgRQAAgLAKAAQAJAAAAALQAAAIALAIQALAHAJAAQAHAAADgvIABg2IAAgKIgGAAIgKAAIgLgBQgEAAgDgCQgDgDAAgEQAAgKANAAIAKAAIAIABIARgBIASgBQAVAAAAALQAAAEgDADQgCADgEAAIgGgBIgGgBIgLABIABALQAABEgKAfQgGAVgOAAQgQAAgQgMg");
	this.shape_103.setTransform(-11.7,-42.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#9933FF").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_104.setTransform(-24.6,-42.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#9933FF").s().p("AAgAwQgCgJgEgVIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgEAOgeQgBgDAAgCQAAgIAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAfIAOA/IAFAQIADAJQAAAEgDADQgDADgEAAQgIAAgHgWgAgLAGIAhgGIgIgkg");
	this.shape_105.setTransform(-38.9,-42.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAWAtIgCgUIgBgVIAAgHIABgJQAAgUgIAAQgKAAgJANQgIAKgGARIAAAJIgBAJIABAIIAAAJQABAEgDACQgCADgFAAQgEAAgDgDQgCgCAAgEIgBgJIAAgIIABgaIABgaIAAgJIAAgJQAAgDADgDQADgDADAAQAJAAAAAMIABALQAPgVAQAAQAPABAFANQAFAIAAARIAAAKIAAAHQAAAIACAMQACANAAAHQAAAEgDADQgDACgEAAQgHAAgCgJg");
	this.shape_106.setTransform(-56.1,-40.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHACgEABQgVgBgKgMQgKgLAAgYQAAgWAQgQQAPgQAVAAQAIAAAKAFQANAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgCALIAAAUQAAAMABAGIAGAQIACAGIABABQAAAEgDACQgCACgEABQgCAAgEgFgAgPgWQgKAMAAAOQAAAPAFAHQAGAJAKgBQAIAAAGgDQAEgBAGgGQgDgYAAgMIAAgIIACgKIgGgDIgEgBQgNAAgLAMg");
	this.shape_107.setTransform(-66.2,-40.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_108.setTransform(-81.6,-40.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHACgEABQgVgBgKgMQgKgLAAgYQAAgWAQgQQAPgQAVAAQAIAAAKAFQANAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgCALIAAAUQAAAMABAGIAGAQIACAGIABABQAAAEgDACQgCACgEABQgCAAgEgFgAgPgWQgKAMAAAOQAAAPAFAHQAGAJAKgBQAIAAAGgDQAEgBAGgGQgDgYAAgMIAAgIIACgKIgGgDIgEgBQgNAAgLAMg");
	this.shape_109.setTransform(-90.8,-40.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AggA/QgNgNAAgUQAAgZANgOQANgPAUAAQALAAAGADIAIAHIADg1QACgIAHAAQAIAAAAAJQAAANgDAsQgCAMAAAOQAAAfADAQIABACQAAAEgDACQgDACgDAAQgGAAgDgIQgGAFgHADQgIACgGAAQgUAAgMgNgAgVACQgIAJAAASQAAAMAJAJQAIAIAMAAQAGAAAGgCIAKgIIADgDIgBgQIABgLIAAgLQgEgHgGgDQgFgEgJAAQgOAAgIAJg");
	this.shape_110.setTransform(-107,-43);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_111.setTransform(-117.6,-40.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_112.setTransform(-127.8,-40.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAVAsQgMAGgOAAQgMAAgIgFQgJgGgCgLQgDgZAAgSQAAgNADgQQABgIAHAAQAEAAADACQADADAAAEIgBAOIgCAOIABAZQABALACAHIAGADIAGABQAMAAANgEIAAgTIAAgRQAAgUACgPQABgJAIAAQAEAAADADQACADAAAEIgCAjIAAATIABAUIAAAGIAAAGQAAAEgDADQgCACgEAAQgHAAgCgJg");
	this.shape_113.setTransform(-137.1,-40.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAWAtIgCgUIgBgVIAAgHIABgJQAAgUgIAAQgKAAgJANQgJAKgFARIAAAJIgBAJIABAIIAAAJQABAEgDACQgDADgEAAQgEAAgDgDQgCgCAAgEIgBgJIAAgIIABgaIABgaIAAgJIAAgJQAAgDACgDQADgDAEAAQAJAAAAAMIABALQAPgVAQAAQAPABAFANQAEAIABARIAAAKIAAAHQAAAIACAMIACAUQAAAEgDADQgDACgEAAQgIAAgBgJg");
	this.shape_114.setTransform(-152.5,-40.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_115.setTransform(-162.8,-40.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAZBGIgEgWIgBgWIAAgHIAAgHQAAgRgJAAQgLAAgJAKQgEAFgJAQQAAAjgDAHQgCAFgGAAQgEAAgCgCQgDgDAAgEIABgEIABgNIAAgOIAAhDIABgQIgBgJIgBgIQAAgEADgDQACgCAEAAQAIAAABAIIACAQIgBAUQgBAKABALIAAAIQAHgKAJgFQAIgFAJAAQAQAAAFAKQAFAHAAAPIABASIACATIADATIAAADQAAAEgDACQgCADgEAAQgHAAgCgHg");
	this.shape_116.setTransform(-173.5,-42.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAVBJQgEgDAAgEQgEgLgBgHIgIgoIgFgnQgIAegKAUQgLAZgDAOIABAEQAAAEgDADQgEACgEAAQgNAAAAgLIgCgMIgLgtQgGgWgOgrIgBgEQAAgIAKAAQAGAAADAGIAHATQAFARAGAYIAJAoQAKgXAKggIAJgcQAIgVAHAAQAHAAACAHQAEAIADAeQACAPAEAVIAIAkQANgeASgyIAFgRQADgLAEgGQADgFAFAAQAKAAAAAJIgDAJIgEAKIgFARIgcBCQgDALgKAVQgDAGgHAAQgEAAgDgCg");
	this.shape_117.setTransform(-188.6,-42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.9,-58.7,407.8,116);


(lib.CaratforDiagram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AKQCSIwLAAIkUkj");
	this.shape.setTransform(65.6,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AAACmIAAlL");
	this.shape_1.setTransform(76.1,45.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_2.setTransform(76.1,69);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.CaratforDiagram, new cjs.Rectangle(-1.5,-1.5,134.2,78.5), null);


(lib.skiptomenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape.setTransform(16.7,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAVArIgCgTIgBgUIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAHQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgHIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAHAAARIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_1.setTransform(7.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADABQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_2.setTransform(-2.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(-14.1,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("Akah8II1AAIAAD5Io1AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkaB9IAAj5II1AAIAAD5g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAuQgMAHgPAAQgNAAgIgGQgJgGgCgMQgEgaAAgTQAAgNADgRQACgIAHAAQAFAAACACQADADAAAEIgBAOIgCAPIABAbQABALADAHIAGADIAGABQAMAAAOgEIAAgUIAAgSQAAgUACgQQABgJAIAAQAEAAADADQADADAAAEIgCAkIAAAUIAAAVIABAHIAAAGQAAAEgDADQgDACgEAAQgHAAgCgJg");
	this.shape_6.setTransform(18.3,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAvIgCgVIgCgVIABgIIAAgKQAAgVgIAAQgKAAgJANQgJAMgFARIgBAJIgBAKIABAIIAAAJQAAAEgCADQgDADgEAAQgEAAgDgDQgDgDAAgEIAAgJIgBgIIACgbIABgbIAAgKIgBgJQAAgEADgDQADgCAEAAQAJAAABAMIAAAMQAQgWAQAAQAQAAAGAOQAEAJAAARIAAAKIAAAIQAAAIACANQADANAAAIQAAAEgDADQgDACgEAAQgIAAgCgJg");
	this.shape_7.setTransform(8.2,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAqQgOgMAAgWQAAgYAMgRQANgTAWAAQAPAAALAGQAMAGAAAOQAAAKgLAIQgEADgQAHIgkARQAFAIAIAEQAJAEAJAAQAHAAAJgCQALgEADgFQAEgFADAAQAEAAADADQACACAAAEQAAAKgRAIQgPAHgOAAQgVAAgOgLgAgTgZQgIAJgEARIAegNQAQgIAIgHQgJgHgOAAQgLAAgIAJg");
	this.shape_8.setTransform(-2.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA5QgCgDAAgEQAAgMgDgXQgCgVAAgMQAAgKgDgGQgHADgHAHIgLANIgFAGIgBAQIgBARIABAIIABAHQAAAEgDADQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADAEQADADAAAEIAAAGIgBAFIAAALQAFgLAKgIQAKgIAHAAQAPAAAFAPQAFgHAHgEQAIgDAJAAQAQAAAGARIAEAbIAHA2QAAAEgCADQgDADgFAAQgHAAgCgJQgCgKgBgUIgEgdIgDgNQgDgIgEAAQgEAAgJAGQgKAFgDAEIABASIADAZQACAPAAAKQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(-15.6,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3CJIptAAIAAkRIJtAAg");
	this.shape_10.setTransform(0,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("Ak2CJIAAkRIJtAAIAAERg");
	this.shape_11.setTransform(0,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape_12.setTransform(16.7,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVArIgCgUIgBgSIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAJQAAADgDADQgCACgEAAQgEAAgCgCQgDgDAAgDIAAgJIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAIIAAAIIACATQACALAAAHQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_13.setTransform(7.5,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_14.setTransform(-2.2,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_15.setTransform(-14.1,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEbh8IAAD5Io1AAIAAj5g");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkaB9IAAj5II1AAIAAD5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-16.9,58.6,30.5);


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


(lib.TwiggsPulling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFFFF").s().p("AgCABQABgEACABQAAAAABABQAAAAABABQAAAAAAAAQAAABAAAAIgBACIgEgCg");
	this.shape.setTransform(323,176.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AgDAZIAAgPIgFgNQgEABgDgFIgHgPIAAgGQAWAkAXAMIgZAIIgBgDg");
	this.shape_1.setTransform(279.2,161.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRD3IhPgJQgpgDgRAMQAPgPgFgSIgQggIBPAOQAwAGAXgOQgTgig5goQg+grgTgaQgGAEgPAFIgBAAQgGgEgFgKIAbgIQgZgNgWgjIAAgPQAJARAMAOQASAXAgAaIA6AtQBIA3AVA1QgiAOhggOQAWAgBeAEQBeAEAZgiQjEhhhuj4QCOgOBBggQgIgGgFgTIgBgDQgGgTgFgFQgmgBguAIQhIAOhcAmQAJBKAbA4IgJgCIgDgHQgihLgQgOQgKADgLAJQgRANgOAIQAhhABXggQAlgOA7gMQAogIAzgHIAAgBIAQABIAOAaQACAIAEAHIABgFQAAgBAAAAQAAgBAAgBQABAAAAAAQABAAAAAAQAEAAAFAMIAFAMIAJANQAEADAAAHIgBALQAAAFADACIAAAHIgBAHQBYBLA6AoQBbA8BdAgQADAWgMASQgFAKgTAUQgQAQgEALQgFAPANATQgfgCgcgPIgugdQAGgGAMgGIAUgJQAYgLgDgbQgZgOhqgxQhRgkgrgfQgaAshbABQAWA3BUA2QAwAfAQAMQAiAbASAeQgWAdhCAAQgWAAgbgDgAEhC8QgEgiAhgZQARgOAFgIQAKgPgCgVQhagOhihNIhPg+QgvghgsgQQAAgJANgGQANgGgBgLQhQACgRAyQCJBoDkBbQgFAigFAPQgJAXgUAGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgDgBgBAFIAFACQATAGAcASIAAAAgAiBiIQggAFgMAAQAKAQAWA4QASAvAVASQAKgFAvgKQAkgIALgQQgFgNgSgMIgjgTQgogYAOgkIgQgBQgOAAgRACgAAVitIAAAHIACACIAAADIACgGQAAgNgNgFIAJAMgAgdAfIAsgNQgEgHAIgMQAGgJgKgDQAEgMAIAIQAMALACgBQgTAqhHAQQgJgNAdgHgAlViGIAGgGIAHgFQgHALgLAIgAlpjAIABgBIAAABIgBAAg");
	this.shape_2.setTransform(299,160.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3839").s().p("ACpCmIAFgHQAQgMgOAOIgFAFIgDACIABgCgABWB6QgcgOgCgVQAKACAKgFQAGgDAHAGQgWAPAaAOIAYALQANAHAFAFQAAAGgHABQgGgCgBAIQgFgPgegPgAEOCMQgGgBgBgEQgBgFAFgCQAGgBAMAGQgIAHgHAAIAAAAgAkaBkQALACgHALIgFAFQgBgJACgJgAArBkQgBAEgEABIgIACQAAgDANgEgADVAWQAKAAgEAMQgBAGgFAIQgOgBAOgZgABYh+QgHgLABgKQAIgBADAJQADALAGABQgDAHgEAAQgDAAgEgGgAAliNQgPgNgFgNQApAWAEAYIgZgUg");
	this.shape_3.setTransform(309.2,166.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE0CC").s().p("Ag1DtQhegEgWggQBgAOAjgOQgXg1hHg3Ig6gtQgggagTgXQgLgOgJgRIAAgOIgJgBQgbg4gJhKQBcgmBIgOQAugIAmABQAFAFAGATIABADQAGATAIAGQhCAgiPAOQBuD4DEBhQgWAehOAAIgSAAgADJCjIABgCQAVgGAJgXQAFgPAEgiQjjhbiJhoQARgyBRgCQABALgNAGQgOAGAAAJQAtAQAuAhIBOA+QBjBNBaAOQACAVgKAPQgGAIgRAOQggAZAEAiQgcgSgTgGgAESBmQAFgIACgFQADgMgKgBQgOAaAOAAg");
	this.shape_4.setTransform(303.1,160.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAFFFF").s().p("AgCAAQACgEACACQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCABIgDgDg");
	this.shape_5.setTransform(310,182.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("AgNAdIAAgEIAGgNIABgOQgFAAAAgGIgBgSIACgEQAHApARAUIgbgCg");
	this.shape_6.setTransform(275.2,151.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAAAAIAAgBIAAADg");
	this.shape_7.setTransform(301.9,135.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A3839").s().p("ADzC9QgEgCABgFQAAgFAGABQAGABAIAJQgGACgFAAIgGgBgACMCvIAIgFQATgEgSAIIgHACIgCABQAAAAgBAAQAAAAAAgBQAAAAABAAQAAAAAAgBgABRBoQgVgYAGgUQAJAFALgBQAHgBADAJQgZAGASAWIASAUQAKALACAHQgBAFgIgCQgFgDgDAHQABgQgWgZgADsA7QAJAEgIAJQgEAFgHAGQgNgGAXgSgAArBFIgIgBQABgDANACQgBACgEAAIgBAAgAj7g4QAKAGgLAIIgHADQADgJAFgIgACxh8QgDgOAFgJQAIACgBAKQgBALAFADQgEAEgDAAQgEAAgCgHgACHieQgIgSgBgNQAeAjgFAYIgQgcg");
	this.shape_8.setTransform(296.6,171.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ACZERIghgsQAIgDANgBIAXAAQAagDAHgZQgRgWhQhVQg9hCgcgrQgpAehUghQgBA6A6BSQAhAvAKASQAVAlAEAiQgoAahfg2IhHgmQgTgJgPgDQgNgDgJACQAHgDAFgFQAIgIABgLIgCgkIBDArQArAYAagEQgFgnglg7Qgpg/gIgeQgHACgQgCIAAAAQgFgGAAgLIAbACQgRgVgIgqIAGgNQADATAFARQAIAeAUAkIAkA9QAtBPABA5QglAAhUgxQAIAmBVAnQBXAnAigVQiQilgHkPQCIApBJgEQgGgIACgUIAAgEQACgTgCgHQgjgPgtgKQhIgPhjAAQgUBJAEA9IgHgFIgBgHQgDhTgKgTQgKAAgOADQgVAGgQACQA4guBdADQAnABA7ALQAoAIAxANQAEgPAFgBQAFgBgCAJQAGAAAAAVIAAABIAAACIABACIgBgCQABATACAMIADAPIgBAGIACAJIgBABIABAIQACAAAAAJIACAJQAAAJgGABIACAEIACAIIgNgIQA5BvApA9QA9BbBJBAQgFAWgSANQgJAGgZALQgVAJgHAJQgLAMAFAWQgbgNgUgZgACOD1IAEADQAPANAUAcQAIghAogMQAVgGAIgFQAPgKAGgVQhOgug9huIgxhWQgfgwgkggQAEgIAPgBQAOgBAEgKQhLgdgjAoQBXCTCwCsQgRAegLALQgRATgVgDQAAgBABAAQAAgBAAAAQAAgBgBgBQAAAAgBAAIgBgBQgBAAAAAAQAAAAgBABQAAAAgBABQAAAAgBABgAg1gUQAkAGARgKQAAgPgNgSIgZgeQgcgmAbgcQgSgKgagHQgfgHgMgFQAEASgBA9QgBAyAMAZIADAAQANAAArAIgABDiAIABAAIACgBIgDgBgAhQAhQgEgPAeAEIAuAGQAAgJALgJQAJgGgJgFQAJgKAEALQAHANADAAQgZAYgrAAQgSAAgUgEgAkXj5IAHgCIAJgCQgLAHgNAEgAkUk2IACAAIgBABIgBgBg");
	this.shape_9.setTransform(295.5,158);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE0CC").s().p("ABwDqIACgBQAVACARgSQALgMAQgeQivirhXiTQAjgoBKAcQgDALgPABQgNAAgEAJQAjAfAfAwIAxBWQA9BuBOAvQgHAUgOAKQgIAGgVAGQgoALgJAhQgTgbgPgNgADLDOQAHgGAEgFQAIgJgKgEQgWASANAGgAiXDNQhVgngIgmQBTAyAmAAQgBg6guhOIgkg9QgUglgIgdQgFgSgCgTIAFgNIgHgEQgEg+AUhIQBjAABIAPQAuAJAhAQQADAGgCAUIAAADQgCAUAGAIQhJAFiJgpQAIEPCRCkQgNAIgSAAQgjAAg4gag");
	this.shape_10.setTransform(298.9,159.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_11.setTransform(301,143);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgREAIhPgJQgpgCgRAMQAPgQgFgRIgQghIBPAPQAwAFAXgNQgTgjg5gnQg+gsgTgaQgGAFgPAFIgBgBQgGgEgFgJIAbgJQgZgMgWgjIAAgPQAJAQAMAOQASAYAgAaIA6AsQBIA3AVA1QgiAOhggOQAWAhBeADQBeAEAZghQjEhihuj4QCOgOBBggQgIgFgFgTIgBgEQgGgSgFgGQgmgBguAJQhIANhcAmQAJBLAbA3IgJgCIgDgGQgihMgQgNQgKADgLAIQgRAOgOAIQAhhABXghQAlgOA7gLQAogJAzgHIAAgQIABgDIADADIADACIALARIABgBIAAgBIAAABIABAAQACAAAFAFQAEgBABAGQADAMABACIAGAGIADAGQAAAKABADIAAAEIAKARIAAAAIABABIAAAKIAEAFIAAAJQAEABACACIAFAIIgOgDQBeBQA9AqQBbA8BdAgQADAWgMATQgFAKgTATQgQAQgEALQgFAQANASQgfgCgcgPIgugdQAGgGAMgFIAUgJQAYgMgDgbQgZgNhqgxQhRgmgrgdQgaAshbAAQAWA3BUA3QAwAeAQANQAiAbASAdQgWAdhCAAQgWAAgbgDgAEhDGQgEgiAhgaQARgNAFgJQAKgOgCgWQhagNhihOIhPg+QgvghgsgPQAAgJANgGQANgHgBgLQhQADgRAyQCJBmDkBdQgFAigFAOQgJAYgUAGQAAgBAAgBQgBAAAAgBQAAgBgBAAQAAAAgBAAQgDgBgBAFIAFABQATAHAcASIAAAAgAiBh+QggAFgMAAQAKAPAWA5QASAvAVARQAKgFAvgKQAkgHALgQQgFgNgSgMIgjgTQgogYAOglIgQgBQgOAAgRADgAgdAoIAsgMQgEgIAIgMQAGgJgKgDQAEgLAIAIQAMAJACAAQgTArhHAQQgJgNAdgIgAlVh9IAGgFIAHgFQgHALgLAIgAlpi3IABgBIAAACIgBgBg");
	this.shape_12.setTransform(299,159.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FAFFFF").s().p("AgBgBQABgBAAAAQAAAAABAAQAAAAABABQABAAAAABIAAABIgDACQgEgDADgBg");
	this.shape_13.setTransform(350.5,162.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CCFF").s().p("AASACQAJgBAHgBIgDADIgNgBgAgcAAIgBAAIgEgCIARACIgMAAg");
	this.shape_14.setTransform(308.6,182.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgWB0IgGAAIgHgHIgCAAIgSgFIgDgDQgDgBgIgIIgGgCIgIAAQgDAAgKgGQgGgDgCADQgHAAgBABIgBABIgBgBIABABIABACIgMgDQAWg/Aog1IABAIIAFgBIABgQQAjgtAvglQAKAfAfAXQAhAXAUALQADACAAATQAAAbgUASQgOALghAPQgjAPgMAKQgSAPgCAXQgCAAgDACg");
	this.shape_15.setTransform(314.7,143.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A3839").s().p("AjTDUQAJgHADANIAAAIQgHgGgFgIgAASgSQADADgDAEIgEAHQgCgCAGgMgAASgkQAIgGAEgLQACgGAJAAQgEAZAcgIIAZgJQAOgFAHABQAFAEgFAGQgFADAFAGQgOgHggAKQgNAEgKAAQgOAAgKgHgACag8IgCgJQADgUABAUIAAAHIgBADIgBgBgADGiVQgEgDADgFQADgFAMgEQAAAMgFAEQgDACgCAAIgEgBgABTjBQAIgHAFALQADAFADAJQgDACgDAAQgHAAgGgUgAi9i9QAtgNAUANIggAEIgJAAQgOAAgKgEgAhtjSQgNgDgGgIQAEgGAJAEQAKAGAEgEQAFALgJAAIgEAAg");
	this.shape_16.setTransform(341.6,170.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE0CC").s().p("AAnDWQBOg5APgjQg1gVhZALIhIAJQgpAFgfgEQgSgCgSgFIgKgKIgHAFQg7gUg7gvQAmhaAqg9QAbgmAbgbQAIABARAJIADABQASAKAJgCQgYBFhbBuQD9BiDQhGQAHAphGBAQg+A5glAAIgJgBgAh1iRQAJAHgFAOQgFAOAGAHQArgVA4gKIBjgMQB9gOBJg2QAQAOAEARQACAKgDAVQgEAqAbAUQghAIgSAIIAAgCQAKgSgKgXQgHgOgVgcQjiBgiqAYQgXgvA3g7gAEKi7QAIAcAKgJQgCgJgDgGQgEgGgEAAQgCAAgDACg");
	this.shape_17.setTransform(323.3,170);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AA+E+IgigLIBCguQAmgeAHgaQgmgKhEALQhKANgfgEIgBABIgQgCIADgEQgIACgIABQgPACgUgDIgRgDIgKgLQASAFASACQAeAEAqgEIBHgJQBZgMA2AVQgPAjhOA6QAmAHBFg/QBGhBgGgpQjQBHj9hjQBahtAZhGQgKACgRgJIgDgCQgSgJgHAAQgcAagaAmQgqA8gmBcQA7AvA7ATIgIAFIgHgCQg4gVgbgFQgNgZgTgMQAGgcAOgeQAQgjAigyQAVggAdgmIAAAAIAAAAQgEgDAAgJIgEgEIgCgDIAEgBIADAAQAEgmBEhYIAAgIIAAgJIAmgeQA2g9AegCIAFACIghAYQARAjArAbQAmAXAAAbQAAAegDAGQgJAPgxAZQgxATgGALQgEAZgOAMIgEgBIgFAEIAJgBIABAAQB0gJBGgOQBsgVBYgrQARAOAFAVQADALABAbQAAAXAFAKQAHAOAWAFQgXATgeAJIg1AMQAAgIAEgMIAJgUQAIgZgVgRQgbAIhuAoQg5AUgqALIgiAHIgDABIAAAAIgNAHQgMgCgSAEIgmALQguALgPgkQgQANgQAWQgTAZgJAJQASAEA4AZQAtATAbgBIAIACIgBACIgBAAIABABQA1AXBigWQA4gMAUgDQArgFAhAJQAHAwhWBDIg+AyQgfAbgDAVQAAgWgRgJgAh7AsQCqgYDihfQAVAbAGAOQALAXgKASQgBgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAABQgDABADAEIAFgCQARgJAhgGQgbgVAFgpQACgWgBgKQgEgRgQgOQhJA2h+AOIhjAMQg4AKgqAVQgHgHAGgOQAEgNgIgHQg4A7AYAugAidhjQAKAGADAAIAJAAIAGACQAHAIADAAIADADIATAFIAAABIACAAIAGAHIAHAAIAHAHQACgDADABQACgXATgQQAMgKAjgPQAggOANgMQAVgSAAgbQAAgTgEgDQgUgKgggYQgfgWgJgfQgwAlgjAsIgBAQIgFABIgBgHQgoA1gWBAIALADIAAgCIgBgBIABABIAAgBQACgCAHAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAEACgAhxjwIAAADIACgEIgCABgAl6C3IAAgBIABABIgBAAIAAAAgACOlYQAAgEAJAAQACACAAADIgCADIgIAAIgBABIAAgFg");
	this.shape_18.setTransform(320.7,161.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00CCFF").s().p("AARAEQAIABAIgCIgDAEIgNgDgAgbgCIgCAAIgDgEIAQAFIgLgBg");
	this.shape_19.setTransform(313.6,183,0.999,0.999,-12.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FAFFFF").s().p("AAAgCQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABIAAABIgEACQgCgEADgBg");
	this.shape_20.setTransform(353,159.7,0.999,0.999,-12.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE0CC").s().p("AAGDOQBUgvASggQgwgchYgBIhIAAQgogBgdgIQgRgFgRgHIgJgLIgHAEQg2gcg0g1QAyhVAxg3QAfgiAegXQAHACAQALIADACQAQALAJAAQghBBhnBiQDpCCDTgqQABAqhNA2Qg9AsgkAAQgIAAgHgDgAESgxQANgRgHgYQgEgPgRgeQjpBAipACQgQgzA+gyQAIAIgHANQgHANAFAHQAtgPA3gCIBiACQB8ACBOgsQAOAQABASQABAKgGAVQgKAoAYAZQghACgTAHgAEZigQAEAcALgIQgBgJgCgGQgDgHgEAAQgDAAgCACg");
	this.shape_21.setTransform(327.5,170.3,0.999,0.999,-12.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3A3839").s().p("AjnDLQAKgFABANIgBAHQgGgHgEgIgAAXAGQACADgCADIgGAHQgCgDAIgKgABHgCQgfAFgOgPQAJgFAEgJQAEgHAJABQgIAZAcgEIAZgGQAPgDAGACQAFAEgGAGQgFACAEAGQgNgIggAGgAChgRIAAgJQAFgTgCATIgBAHIgBADIgBgBgADYhkQgDgDADgEQAEgFAMgCQgCALgGAEIgDABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgABuifQAIgFAFALQACAGABAJQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABgBAAQgHAAgEgXgAh8i3QgSgBgMgGQAtgIASAQIghgBgAhKjJQgNgFgEgJQAFgFAIAGQAJAGAFgDQADALgIAAIgFgBg");
	this.shape_22.setTransform(344.1,166.5,0.999,0.999,-12.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AghBvIgGgBIgGgHIgBgBIAAAAIgSgIIgCgDQgDgBgGgJIgGgCIgIgCQgDAAgJgIQgEgDgDACQgHgBgBABIgBABIgBgBIABABIAAACIgKgEQAeg8AugvIgBAIIAFAAIAEgQQAognAygfQAGAgAbAbQAcAbASANQAEADgDASQgEAbgXAPQgOAKgiAKQgkAKgNAIQgUANgFAXQgCgBgDACg");
	this.shape_23.setTransform(316.2,143.3,0.999,0.999,-12.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAdE5IgfgQIBFglQApgZAKgYQgjgQhEADQhJADgegJIgBABIgPgEIADgEQgHACgJgBQgPAAgSgGIgRgFIgIgMQARAIARAEQAdAIApABIBHABQBYAAAxAcQgTAhhUAvQAkAMBMg1QBNg3gBgqQjUArjoiEQBnhgAhhCQgJABgQgMIgDgCQgQgLgHgBQgeAWgfAiQgxA3gxBVQAzA2A2AbIgIAEIgGgDQg0gdgZgIQgKgagRgPQAKgbARgcQAVggAngtQAZgdAigiIAAAAIgBAAQgCgDABgJIgEgFIgBgDIAEAAIACAAQAKglBNhOIABgIIACgJIApgYQA8g2AeACIAFADIglAUQANAlAmAgQAiAcgEAbQgEAdgEAGQgLANgyATQgyALgIALQgHAYgPAKIgEgBIgFACIAJABIAAAAQByAHBGgFQBsgGBbgfQAPAQACAVQACAMgDAbQgDAWADAKQAFAPAVAHQgZARgfAFIg1AGQABgJAGgLIALgUQALgXgSgTQgbAEhwAZQg6ANgrAFIgiACIgDABIABAAIgOAFQgMgEgSABIgmAGQguAGgKglQgSAKgSATQgWAXgKAHQARAGAzAgQApAaAbACIAHADIgBACIgBAAIABABQAyAeBggJQA5gFATABQArAAAfANQAAAxhcA3IhEAqQghAWgGAUQACgWgOgKgAEqAiQgDABACAFIAFgCQATgGAhgDQgYgZAKgnQAGgVgBgKQgBgRgOgQQhOArh8gCIhigCQg3ADgtAPQgFgIAHgNQAHgNgIgIQg+AzARAxQCogBDphAQARAeAEAPQAHAXgNARQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAIgCAAgAh/iCQAJAHACABIAJABIAFADQAHAIACABIADAEIARAHIABAAIABABIAFAHIAHABIAFAIQAEgCACABQAEgWAWgNQANgJAigKQAjgKAOgJQAXgPAEgcQACgSgDgDQgSgNgdgcQgbgbgFggQgzAfgoAnIgDAQIgFAAIAAgIQguAwgeA8IAKAEIAAgBIgBgBIABAAIABAAQACgCAGABIADgBQACAAADADgAhCkHIAAACIADgDIgDABgAl9B4IAAgBIABABIgBAAgADElJQAAABAAAAQgBAAAAAAQAAgBAAgBQAAgBABgBQAAgEAJABQACACgBADIgCACg");
	this.shape_24.setTransform(323,162.4,0.999,0.999,-12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},4).to({state:[{t:this.shape_12},{t:this.shape_4},{t:this.shape_3},{t:this.shape_11},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_12},{t:this.shape_4},{t:this.shape_3},{t:this.shape_11},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},27).to({state:[{t:this.shape_12},{t:this.shape_4},{t:this.shape_3},{t:this.shape_11},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},20).to({state:[{t:this.shape_12},{t:this.shape_4},{t:this.shape_3},{t:this.shape_11},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},8).to({state:[{t:this.shape_12},{t:this.shape_4},{t:this.shape_3},{t:this.shape_11},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_18,p:{scaleX:1,rotation:0,x:320.7,y:161.6}},{t:this.shape_17,p:{scaleX:1,rotation:0,x:323.3,y:170}},{t:this.shape_16,p:{scaleX:1,rotation:0,x:341.6,y:170.6}},{t:this.shape_15,p:{scaleX:1,rotation:0,x:314.7,y:143.2}},{t:this.shape_14,p:{scaleX:1,rotation:0,x:308.6,y:182.8}},{t:this.shape_13,p:{scaleX:1,rotation:0,x:350.5,y:162.4}}]},10).to({state:[{t:this.shape_18,p:{scaleX:0.981,rotation:7.8,x:318.9,y:160.1}},{t:this.shape_15,p:{scaleX:0.981,rotation:7.8,x:315.5,y:141}},{t:this.shape_16,p:{scaleX:0.981,rotation:7.8,x:337.9,y:171.8}},{t:this.shape_17,p:{scaleX:0.981,rotation:7.8,x:320.2,y:168.7}},{t:this.shape_13,p:{scaleX:0.981,rotation:7.8,x:347.6,y:164.8}},{t:this.shape_14,p:{scaleX:0.981,rotation:7.8,x:304.2,y:179.4}}]},3).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},3).wait(16));

	// Layer 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC97").s().p("AgMgBIAZgCIgHAHIgSgFg");
	this.shape_25.setTransform(310.6,71.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CCFF").s().p("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");
	this.shape_26.setTransform(194.5,121);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3A3839").s().p("AJlGMIgBgKQAMgCABAPQgFgBgBAGQgCgFgEgDgAJkFvQAGgJACABQADABgBAFQgBAGgDABIgBAAQgCAAgDgFgAJkFhQgCgHAHgEQAIgDAAgFIABAAQgCAJABAJIgFADIgCAAIgGgCgAIeFHQALAAAEAKQADAJgFAGIgNgZgAH8E0QgCgJARACQAJACAAADIAAABQAAADgEAEQACgCgWgEgAS2g9IALgEIgOAFIADgBgAy7khQgCAAgDgJQAGgUAAAUQAAAJgBAAIAAAAgAvWlsQgEgOgBgZQALASACAPQADAMgEADIgBAAQgDAAgDgJg");
	this.shape_27.setTransform(218.3,142.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("Aj9CPIAAgBQAMACAwABIgZACIgHAAQgQAAgMgEgAkfBhIAUAnQgQgNgEgagAkEB5QAIABATAAQBEAAAAgMIgBgEIgIgBQhOACgLAGIgrhfIAwACQA2AAArgGQAmgGAAgFQAAgDgDAAQAMgEAKgFQAOAJAWAnQATAiAWAJQguAPgIAIIgSAMIgcALIgHACIhxAEIgHAAgAjKCDIABABIASgCIgTABgAkbAzIABAGIAAgGIgBAAIAAAAgAELhRQgCgSAXAFQAXAGgFAOQgCgBgVACIgEAAQgMAAAAgIgAB4hYQhLgIgageIAAgUQAQgBASADQgGAFAAADQAAADAGAAIAKgIIAGACQAKADAoAQQBDAcA3gIQgiAOgwAAQgTAAgUgCg");
	this.shape_28.setTransform(328,132.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FAFFFF").s().p("AAyAtQgVgDgMgPQgOgSAEgbQAUgOAWABQAMAAALAEQAbAKAFATQABAGgBAGQgBARgRAJQgMAGgOAAIgKgBgAAhgEQgCALAQACQAWADADACQAAgNgMgDQgHgCgUAAIAAAAgAhnABIAAggQALgQAiACQAhADAHASQgOAIgGAFQgKAJADAQIgMABQgZAAgVgOgAg+gQQAMAFAFAAQAAgOgUgDQgUgDABANIAJgBQAGAAAHADg");
	this.shape_29.setTransform(356.6,89.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC6633").s().p("AAuApIgBgEQgHgcgZgSQAOABAQANQAOAOAIASQAFALABAJQAEAcgeAKQAEgigDgUgABiAXQAIgVAkAJQAkAJgCAWQgcgYgyAFgAg6gdQAVgJAIANQAEAFgFAAQgHAAgVgJgAhKghIABAAIAIgCQAAACgFACIgIACQABgDADgBgAh7heQAqAagQAUQgYgdgCgRgAiKhEQgUgNgRAHQADgNAGgEQAIgFANAGQAUAKAIATIAAAAIgDABQgFAAgNgIg");
	this.shape_30.setTransform(363.2,86.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFE0CC").s().p("AAxELQgngOgMg9QAWgbBYhBQAgAXA5AGQA1AGA2gJQgGAqgsAqIg3AmQhQAWgqAAQgSAAgKgDgABSC5QAOACAgAOQAbANAZgDQgIgJgigLQgYgIgRAAQgIAAgHACgAA4DGIAhALQAXAHAJgLIgkgIQgKgCgHAAQgJAAgDADgABZCmQASAEAvAOQAqAJARgOQgUACgugNQgWgGgQAAQgMAAgIAEgAnnA7IAGAAIADAAIAAAAIADAAQB8gHAzgMIAVgEIADAAQArgGC4gKIAAABIALAAIAHAAIAAgCIADAAIApgCIAAgEQBsgOBcgJQAQgOAWggQAXgVArAPQALADgBAEQgBADgJAHQgWASADALQAzA9ggAxQhDABgkgJQgkgJgSgTQAGgDAHgCQgCgCgKAAIgGACIgHgLIjDAWIAAAAIgVAAIgBAAIAAADQiLALjOALQhqAHgEAOIgFAAIgKACQAGgSAugjgAmtAoQAqgTAJAAQCKgFAngLQAcgGCIgFIgBADIAbgEIACABIgBABIANgCIAmgBQgCgCgKAAQAlgEgkALQgQAEgbAFIAAABIgdAEIAIABIgBABIgLAAIAAABIhqAEQgqACgjADQgDgCgTAAQgwAMgiAFQhIALgzADIAbgMgABzgQQAPgNAlgCQAOgBADACQAEADgOAEQgWAHgaAAIgLAAgAEDhbQgqgUgFgeQgGgjAugkQAkAmBFgTQgCgEgMgFQgKgFAEgMQAXACASAdQASAfATAEQAQADANgIQAPgJAJAAQABAFAHAKQAFAJgBAJIAigFQAQAAAJAMQABAkgrAHQgqAIgUgZQgiAag1ACIgIAAQgsAAglgSgAH0hlQABgHAJgGQAJgGABgHIghAAQACAUALAGgAE8ifIA1AGQALAFgCAOQgCAMANABQAHgog4gLQg2gKgbAWIAVgBQARAAATACgAFfj5QgHgTgUAEQAGgJAqAHIASACQApAHAKgBQgEAEgaADIgOACQgdACABAWQgJgCgJgWg");
	this.shape_31.setTransform(319.7,111.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("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");
	this.shape_32.setTransform(223.7,120.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FAFFFF").s().p("AAlA6QgTgJgIgSQgJgUALgZQAYgIAVAGQALADAKAHQAXAQgBAUQAAAGgCAGQgGAQgTAEIgLABQgMAAgNgFgAAsAWQAUAJADADQADgNgLgHQgGgEgTgFQgFAMAPAFgAhjgYIAIgfQAQgNAfALQAgALACATQgQAEgHAEQgMAGgBAQQgggDgVgYgAhLgmQALABAJAGQAKAIAGACQAEgNgTgJQgIgDgEAAQgIAAgBAIg");
	this.shape_33.setTransform(361.9,93.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFE0CC").s().p("AiFEdQgngNgMg+QAWgaBZhBQAfAXA5AGQA0AGA3gJQgHAqgsApIg2AnQhQAWgqAAQgRAAgLgEgAhkDMQAOACAgAOQAbAMAZgCQgIgKgigLQgYgHgQAAQgJAAgHACgAh+DZIAhALQAXAGAKgKIgkgIQgLgDgHAAQgIAAgEAEgAhdC4QATAFAuANQApAKARgOQgUABgtgMQgWgGgQAAQgMAAgIADgAqeBNIAHABIACAAIAAAAIADAAQB8gIA0gLIAUgFIADABQArgGC4gKIAAABIALAAIAHAAIABgCIACAAIArgCIgBgEQBsgPBbgJQANgKARgXIAiASIgUgTIALgKQAbgOAmAaQALAFgDAEQgBACgLAFQgQAHgGAGIgDAEIgBAEIAIAHQAhAzgbAqQhCABgkgJQgjgJgTgUQAGgCAHgCQgCgCgKAAIgGABIgHgLIjEAXIAAgBIgVABIgBAAIAAACQiLALjOAMQhqAGgEAOIgEABIgKACQAFgSAugkgApkA7QAqgTAJAAQCKgFAngLQAcgHCJgFIgCADIAbgEIACABIgBABIAPgCIAlgBQgCgCgJgBQAkgEgjALQgRAGgcAFIAAABIgdAEIAIABIgBABIgLAAIAAAAIhqAFQgqABgiAEQgDgCgUAAQgwAMgiAFQhIALgzADIAbgMgAhDACQAPgNAlgCQAOAAACACQAEADgNAEQgVAGgaAAIgMAAgAFKAAQgrgCgNgeQgoARgzgMQgwgLghgdQgjgfACgeQAEgkA1gWQAZAuBHgBQAAgEgKgIQgIgHAGgLQAWAIAKAhQAJAiASAJQAOAHAPgEQARgFAIACQAAAFAEAMQADAKgDAJIAhADQAQAEAGAOQgIAfgkAAIgIgBgAFRgPQADgGAKgEQALgEACgGIgggJQgDAVAJAIgAB3iGQAaAEAeAMIAxATQAJAIgFANQgFALANAEQAQglgzgZQgfgPgYAAQgOAAgNAGgALFh7QgLgDgEgKIAAgHIAGAAQAOADAIAMIAAADIAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgJgBgADojFQgDgUgUgBQAIgHAoARIAQAHQAmARAKACQgFADgbgEIgNgCQgdgFgEAVQgIgEgDgYgAKVkgIAAAAIAAABIAAgBg");
	this.shape_34.setTransform(338,109.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC6633").s().p("AAdBDIAAgFQABgcgUgZQAOAEALASQAKARADAUQACALgBAJQgDAdggABQAMggADgTgABUA+QANgSAgATQAhASgIAUQgVgegxgJgAg1gcQAWgEAFAPQACAFgDAAQgFAAgVgQgAhIghQABgDAEAAIABgBIAIABQAAACgGABIgIAAIAAAAgAhjhsQAiAkgVAPQgQgjADgQgAh4hWQgRgSgSABQAGgLAIgCQAJgDAKAJQARAPADAUIAAABIgCAAQgFAAgLgMg");
	this.shape_35.setTransform(369.7,90.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("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");
	this.shape_36.setTransform(228.4,120.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FAFFFF").s().p("AAyAtQgKgCgIgEQAMAAAAgLQgCgQgQAAQgLAAAAAIIABAGQgNgRAEgbQAUgOAWABQAMAAALAEQAbAKAFATQABAGgBAGQgBARgRAJQgMAGgOAAIgKgBgAhdAHIACAAQAQAAAAgLQAAgMgRAAQgLAAAAANIABAFIAAAAIgBgBIAAggQALgQAiACQAhADAHASQgOAIgGAFQgKAJADAQIgMABQgTAAgRgIg");
	this.shape_37.setTransform(356.6,89.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("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");
	this.shape_38.setTransform(225.3,87.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FAFFFF").s().p("AAyAtQgKgCgIgEQAMAAAAgLQgCgQgQAAQgLAAAAAIIABAGQgNgRAEgbQAUgOAWABQAMAAALAEQAbAKAFATQABAGgBAGQgBARgRAJQgMAGgOAAIgKgBgAhYAJQgOgCAAgPIAAgCIgBAHIABAFIAAAAIgBgBIAAggQALgQAiACQAhADAHASQgOAIgGAFIgEAFQgEgEgGAAQgMAAAAAPQAAAGADAEQgOgBgNgFg");
	this.shape_39.setTransform(356.6,89.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("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");
	this.shape_40.setTransform(225.3,87.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFE0CC").s().p("AAxELQgngOgMg9QAWgbBYhBQAgAXA5AGQA1AGA2gJQgGAqgsAqIg3AmQhQAWgqAAQgSAAgKgDgABSC5QAOACAgAOQAbANAZgDQgIgJgigLQgYgIgRAAQgIAAgHACgAA4DGIAhALQAXAHAJgLIgkgIQgKgCgHAAQgJAAgDADgABZCmQASAEAvAOQAqAJARgOQgUACgugNQgWgGgQAAQgMAAgIAEgAnnA7IAGAAIADAAIAAAAIADAAQB8gHAzgMIAVgEIADAAQArgGC4gKIAAABIALAAIAHAAIAAgCIADAAIApgCIAAgEQBsgOBcgJQAQgOAWggQAXgVArAPQALADgBAEQgBADgJAHQgWASADALQAzA9ggAxQhDABgkgJQgkgJgSgTQAGgDAHgCQgCgCgKAAIgGACIgHgLIjDAWIAAAAIgVAAIgBAAIAAADQiLALjOALQhqAHgEAOIgFAAIgKACQAGgSAugjgAmtAoQAqgTAJAAQCKgFAngLQAcgGCIgFIgBADIAbgEIACABIgBABIANgCIAmgBQgCgCgKAAQAlgEgkALQgQAEgbAFIAAABIgdAEIAIABIgBABIgLAAIAAABIhqAEQgqACgjADQgDgCgTAAQgwAMgiAFQhIALgzADIAbgMgABzgQQAPgNAlgCQAOgBADACQAEADgOAEQgWAHgaAAIgLAAgAEDhbQgqgUgFgeQgGgjAugkQAkAmBFgTQgCgEgMgFQgKgFAEgMQAXACASAdQASAfATAEQAQADANgIQAPgJAJAAQABAFAHAKQAFAJgBAJIAigFQAQAAAJAMQABAkgrAHQgqAIgUgZQgiAag1ACIgIAAQgsAAglgSgAH0hlQABgHAJgGQAJgGABgHIghAAQACAUALAGgAFfh6QAPAOAFABQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIAAghQgCgIAAgEIAAgGIgDgDQgBgChjgBQgHAAgLAPQgKANAAACQAAACAAABQAAABAAABQAAAAAAAAQAAAAABgBIAvgDQAxAAAOANgAFfj5QgHgTgUAEQAGgJAqAHIASACQApAHAKgBQgEAEgaADIgOACQgdACABAWQgJgCgJgWg");
	this.shape_41.setTransform(319.7,111.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("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");
	this.shape_42.setTransform(228.1,120.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC97").s().p("AgJgBIgCAAIARgCIAGADIgEAEIgRgFg");
	this.shape_43.setTransform(310.4,71.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00CCFF").s().p("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");
	this.shape_44.setTransform(194.5,121);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3A3839").s().p("AJmGMIAAgGIgBAAIAAgEQAGgBADADQAEADAAAIQgFgBgBAGQgCgFgEgDgAJoFzIgDgFQAFgIADABIABAAQACABgBAFQgBAGgCABIgCAAIgCgBgAJlFhIAAAAIAAAAQgCgIAHgDQAIgEAAgEIAAAAIAAACIAAgCIABAAQgCAJABAJIgFADIgCAAIgGgCgAIfFHQAMAAADAKQADAJgEAGIgOgZgAH9E0QgBgJAQACQAJACAAADIAAABQAAADgEAEQACgCgWgEgAS3g+IAIgDIABAAIgNAFIAEgCgAy6khQgCAAgCgJQAFgUAAAUQAAAJgBAAIAAAAgAvVlsQgEgOgBgZQALASADAPQACAMgEADIgBAAQgDAAgDgJg");
	this.shape_45.setTransform(218.2,142.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AkWDMIAAAAQAKABAjABIAEAAIADAAIAGAAIACAAIgCAAIgGABIgDAAIgEABIgJAAIgIAAQgQAAgMgEgAk3CeIAUAnQgQgNgEgagAkcC2QAIACATgBIAbAAIAGgBIAAAAIAGAAQAcgDAAgIIgBgDIgHgCIgSAAIgMABQgyACgKAFIgrheIAxABQAiAAAdgCIARgCIAQgCQAngGAAgFQAAgDgEgBIAWgIIAIAGQAEAKANANIALATQAUAiAWAJQguAPgJAIIgRANIgcAKIgHACIg8ACIgHAAIgBAAIgGABIgnABIgHABgAjhDBIAHgBIALgBIgLABIgHAAIgBAAIAAAAIAAABIABAAIAAAAgAk0BwIACAGIAAgGIgBAAIgBAAgADzgTQgCgTAXAGQAXAGgEAOQgDgBgVACIgEAAQgLAAgBgIgABggaQhLgIgZgfIAAgTQAPgCATAEQgHAFAAADQAAADAGAAIALgIIAFABQAKADAoAQQBDAcA3gIQgiAPgwAAQgTAAgUgCgAEljKIADABIAggGQABAAABAAQABAAABAAQAAAAgBAAQAAAAgBAAIAAALQAAAKgRALIgUgbg");
	this.shape_46.setTransform(330.4,126);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FAFFFF").s().p("AAMBgQgPgJgIgSQgJgTAFgSQAHgWAYgLQAXAIAMATQAGAJADAMQAIAcgOAOQgEAFgGADQgHAEgHAAQgJAAgJgFgAAQAvQAKAUAAADQALgHgEgNQgCgHgLgQQgMAGAIAOgAg+hRIAbgTQAUABAQAcQARAegLAPQgOgHgHgCQgNgDgNAMQgVgYgBgfgAgjhMQAJAIACAKQADANADAEQAMgHgJgTQgGgMgHAAQgDAAgEADg");
	this.shape_47.setTransform(370.3,102.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFE0CC").s().p("AAcDgIgGgDQgPgHgJgOQgOgTgHggIANgNIABgBQAZgZA8gsIAAABIAMgJQAfAXA6AGQA0AGA3gJQgGAqgsApIg3AnIgBABIgDAAQhOAUgpAAQgRAAgLgDgAAkCcIAAAAIAgALIAIABIAAABQARACAIgIIgZgGIAAAAIgMgDQgKgCgHAAQgIAAgDAEgAA+COIABABIANADIAAABQANAEATAIQAbAMAZgCQgJgKghgLQgZgIgRABIAAgBQgIAAgGACgABEB7IABAAIAHACIAAAAIA6AQQApAKASgOQgUABgugMQgggJgTAEIAAgBIgIADgAHAA2QgegeAJgeQgpgNgggrQgdgngGgsQgHguAWgVQAagZA3ASQgLAzA2AuQADgDgCgNQgCgLALgEQAMAUgOAgQgPAgAIASQAGAOANAHQAQAHAFAHQgDAEgEALQgFAJgIAEIAYAZQAJANgFAPQgLAIgMAAQgSAAgSgTgAHgAwQAKAEAGgEIgSgaQgQAMACANIAGgBQAEAAAGACgAGPhAIAEAFQABgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIgBgBIACAAQARgDAAgZQAIgSghAAQgFAAgHADQgJAEAAADIgHgKQgPgUAAgVQAAgOAMgPQALgPAAgBIgBgDQgbAHAAApQAAAYANATQAIALAYAdIAAAAQAAACAAABQAAABAAAAQAAABAAgBQAAAAABAAgAn7AQIAGABIACAAIABAAIADAAIBJgGIAAAAQBDgGAigGIAWgFIADAAQAqgGC4gKIAAABIAAAAIAAAAIALAAIAHAAIABgBIACgBIAqgCIAAgEIBTgLIAAABIB1gNQAOgMBGhEIAJAAQAeAHAMAsQAEALgEABQgDABgLgDQgVgHgJAdIABgBQApA4gdAuQhDABgkgJQgkgJgTgUQAHgDAHgBQgDgCgJAAIgGABIgIgKIgzAFIAAAAIiQARIAAAAIAAgBIAAAAIgVABIgBAAIAAACQiHAKjFAMIAAAAIgMABQhqAGgFAOIgEABIgKACQAGgSAugkgAEYg3IABgCIgDgBIACADgAEMhBIAGAFIABAAQgCgFgDAAIgCAAgAnBgBIAbgMIABAAIAAAAIgBAAIAAgBQASgHAFAAQBpgDAvgHQAMgFAYgDQAlgGB1gEIgBABQhgADgqAFQAfgCAuAAQA9AABCgIIgYABIgPACIACgBIAMgCIAggBIAzgHQAAgBAIAAQAIAAAEADQgiAFjFAWQhhANgTABQgHgDgLgBQgiAIhtAQIg2AFIAbgLgAmOgUIgEAAIABAAIBJgBQA3gFAIACQAHgCAFgCIAEgDQgvAHhmAEgAg+geIACAAIAGABIAAAAIgIgBgAg6guIAagDIADABIgBAAIgCgBIgaAEgABfg6QAPgOAlgCQAOAAADACQADACgOAFQgVAHgaAAIgLAAgAIYhuIgIgKQgTgXgRANQgDgJANgTQALgSgOgNQAKgBATAoIAHAPQATAmAGAIQgGgBgSgUg");
	this.shape_48.setTransform(321.7,115.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC6633").s().p("AAZBoQAVgFANAjQANAjgTALQAEglgggngAg/BlQAegQAOgNIADgEQASgVACgfQAHAMgDAVQgDATgKARQgGAKgHAGQgKAKgMAAQgLAAgMgKgAgTg2QATAMgGAOQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgEAAgGgegAgYhBIgHgFQADgCADADIABAAIAGAGIgBAAIgFgCgAgahhQALglAMgKQADAvgYAAIgCAAgAgbh5QgFgBAAgTQgBgYgPgLQAMgEAHADQAJADACAOQADAWgLARIAAAAIgBAAg");
	this.shape_49.setTransform(377.7,105.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("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");
	this.shape_50.setTransform(224.7,120.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("ABQBaQgDgSAYAFQAXAGgFAOQgDgBgVACIgDAAQgMAAAAgIgAhCBTQhMgHgZgfIAAgUQAQgBASADQgHAFAAADQAAADAGAAIALgIIAGACQAKADAnAQQBEAcA1gIQgiAOgvAAQgSAAgUgCgACBhbIAEAAIAfgGQACAAABAAQABAAAAAAQAAAAAAAAQAAAAgCAAIABALQAAALgSAKIgUgag");
	this.shape_51.setTransform(346.7,114.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00CCFF").s().p("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");
	this.shape_52.setTransform(194.5,121);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFE0CC").s().p("AgJCFQAcgbBFgzQAfAXA6AGQA0AGA3gJQgGAqgsAqIg3AmQhYAYg3ADQh4heBLgDgAA+CMQANACAhAOQAbANAZgDQgJgJghgLQgZgIgQAAQgJAAgGACgAAkCZIAhALQAXAHAJgLIgkgIQgKgCgHAAQgJAAgDADgABFB5QASAEAvAOQApAJASgOQgUACgugNQgWgGgQAAQgMAAgIAEgAHAA0QgegfAJgeQgpgNgggqQgdgogGgsQgHgtAWgWQAagYA3ARQgLA0A2AtQADgDgCgNQgCgLALgDQAMAUgOAfQgPAgAIASQAGAPANAGQAQAIAFAHQgDADgEAMQgFAIgIAFIAYAYQAJANgFAPQgLAIgMAAQgSAAgSgSgAHgAtQAKAEAGgDIgSgbQgQANACAMIAGgBQAEAAAGACgAGPhDIAEAFQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgBIACAAQARgDAAgZQAIgSghAAQgFAAgHADQgJAEAAADIgHgKQgPgUAAgVQAAgOAMgPQALgPAAgBIgBgDQgbAHAAApQAAAYANATQAIAMAYAcIAAAAQAAACAAABQAAABAAABQAAAAAAAAQAAAAABgBgAn7AOIAGAAIACAAIABAAIADAAQB8gHAzgLIAVgEIADAAQArgGC3gKIAAABIALAAIAHAAIABgCIACAAIArgCIAAgEQBqgPBdgJQAOgMBGhEIAJABQAeAGAMAtQAEAKgEACQgDABgLgEQgVgGgJAcIABAAQApA3gdAuQhDABgkgJQgkgJgTgTQAHgDAHgCQgDgCgJAAIgGACIgIgKIjDAVIAAAAIgVAAIAAAAIAAADQiMALjNALQhqAHgFAOIgEAAIgKACQAGgSAugjgAEYg5IABgCIgDgCIACAEgAEMhEIAGAFIABABQgCgGgDAAIgCAAgAnBgEQApgTAKAAQCKgFAmgLQAcgHCJgFIgBADIAagEIADABIgCABIAPgCIAkgBQgBgCgKAAQAlgEgkALQgQAFgbAFIgBABIgcAEIAIABIgBABIgLAAIAAABIhqAEQgqACgjADQgDgCgTAAQgwAMgiAFQhIAKgzADIAbgLgABfg9QAPgNAlgCQAOgBADACQADADgOAEQgVAHgaAAIgLAAgAIYhxIgIgKQgTgXgRAOQgDgJANgUQALgRgOgOQAKAAATAnIAHAQQATAlAGAJQgGgCgSgUg");
	this.shape_53.setTransform(321.7,115.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("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");
	this.shape_54.setTransform(224.7,120.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},14).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},7).to({state:[{t:this.shape_38},{t:this.shape_30},{t:this.shape_31},{t:this.shape_37},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},23).to({state:[{t:this.shape_40},{t:this.shape_31},{t:this.shape_30},{t:this.shape_39},{t:this.shape_28},{t:this.shape_27},{t:this.shape_25},{t:this.shape_26}]},6).to({state:[{t:this.shape_42},{t:this.shape_30},{t:this.shape_41},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},26).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},4).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},10).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_25},{t:this.shape_27},{t:this.shape_51},{t:this.shape_49},{t:this.shape_47}]},5).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.6,57.6,318.2,128.1);


(lib.PresentParticipleDiagrams1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.PartDiagram("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(204.8,116.9,1.049,1.049);

	this.instance_1 = new lib.CaratforDiagram();
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.5,78.7,0.816,0.816,0,0,0,0,75.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({startPosition:0},0).to({scaleX:0.86,scaleY:0.86,x:204.2,y:34.9},9).wait(126).to({startPosition:0},0).to({scaleX:0.74,scaleY:0.74,x:204.7,y:31.9,alpha:0},8).to({_off:true},1).wait(485));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229).to({_off:false},0).to({alpha:1},7).wait(64).to({alpha:0},12).wait(93).to({alpha:1},18).to({_off:true},77).wait(157));

	// w1
	this.instance_2 = new lib.Twiggs();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55,280.9,0.991,0.991);
	this.instance_2._off = true;

	this.instance_3 = new lib.Bub("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(80.3,283.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.Pro("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(58.4,283);
	this.instance_4._off = true;

	this.instance_5 = new lib.Buffy("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(59.6,282);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(245).to({_off:false},0).to({x:62.5,y:48.3},15).to({y:65.1},17).to({_off:true},23).wait(357));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(334).to({_off:false},0).to({x:58.3,y:50.3},18).to({x:65.3,y:67.2},16).to({_off:true},32).wait(257));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(438).to({_off:false},0).to({x:51.4,y:40},19).to({x:60,y:67.2},15).to({_off:true},28).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(543).to({_off:false},0).to({x:51.3,y:40},17).to({x:66.1,y:64.9},14).to({_off:true},71).wait(12));

	// w2
	this.instance_6 = new lib.pulling();
	this.instance_6.parent = this;
	this.instance_6.setTransform(112.3,281.5,0.98,0.98);
	this.instance_6._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZA5QgJgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKgBgNQABgUAKgMQANgMASAAQAHAAAFACQAEABADAEQAIAAAAAIIgBAOIgCAOIgCAYQAAAOgDAKQgEAMgHAFQgIAHgQAAQgKAAgHgBgAgMgkQgIAJABANQAAALADAEQAFAFAIAAQAGAAAHgHQAGgIACgHIACgZIgFgDQgEgCgDAAQgNAAgHAKg");
	this.shape.setTransform(93.7,148.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgUIAAgIIgBgHQAAgDADgBQACgCADAAQAGgBABAKIAAAJQANgRAMAAQALAAAFALQADAGAAAOIAAAHIAAAGIACAQIABAPQAAADgCADQgCABgDAAQgGAAgBgGg");
	this.shape_1.setTransform(85.4,147.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPA1QgDgBgCgDQgBgCABgDIADgNIADgNIAFgQIAFgQQABgDADgBQABgCADABQADABACACQABADgBADIgFAQIgEAQIgDAMIgDANQgBADgDACIgEABIgBAAgAALgjQgDgBgCgEQgCgDABgDQABgDADgCQADgCAEABQADABABADQACADgBADQAAAEgEACIgEABIgCAAg");
	this.shape_2.setTransform(78.1,145);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrAqQgFgFAFgFIAUgSIATgRIASgTIATgSQAFgGAFAFQAGAGgGAFIgTASIgTASIgZAZIgNALQgCACgDAAQgCAAgDgCg");
	this.shape_3.setTransform(71.9,142.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag0AeQgDgHAGgDIAYgNIAXgMIAWgNIAXgNQAGgDAEAGQAEAGgHAEIgXANIgXAMIgfARIgPAIIgFABQgDAAgCgDg");
	this.shape_4.setTransform(68.2,136.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAlQgDgBAAgDQgCgGAGgDQgHgHgDgMQgCgIACgHQADgJAJgDQARgIAOgEQAKgCANgBQAGgBACAGQAAADgBACQgBADgDAAIgLACIgLACIgTAHQgJACgEAEIgBAFIABADQACAKAGAKIAOgEIANgEQAPgFAMgBQAHgBABAGQABADgBADQgCACgDABIgbAGIgOAEIgPAEIgFACIgEABIgDAAIgDgBg");
	this.shape_5.setTransform(66.4,129);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAYQgKgJgBgPQABgGACgJIgjAAQgDAAgDgCQgBgCAAgDQAAgEABgCQADgCADAAIAdABIAcAAIAdgBIAPgCQAFAAAEACQAFADgBAEQAAADgCACQgCABgCAAIgDAAIgEAAQAFAGACAGQACAFAAAFQgBAPgNAHQgKAGgSAAQgPAAgKgJgAgDgPQgDAIAAAHQAAAJAGAFQAGAEAJAAQANAAAIgDQAGgDAAgHQAAgGgDgFIgIgKIgiABg");
	this.shape_6.setTransform(65.4,120.6);

	this.instance_7 = new lib.pushing("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(129.9,283.4,1.039,1.039);
	this.instance_7._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA9QgDgDACgFIAJgPIALgNIAFgDIAEgFQAKgJgFgFQgHgGgLABQgGAAgMADQgUAUgFACQgEACgDgDQgDgDAAgDQAAgDACgCIADgBIAIgHIAIgHIAlgmIAJgIIAFgFIAEgGQACgCADAAQADAAACACQAEAEgDAGIgJAJIgLAMIgMALIgFAEQALgBAHACQAIACAFAFQAJAIgCAJQgCAGgJAKIgKAKIgJAMIgJAMIgBACQgDACgCAAIgFgDg");
	this.shape_7.setTransform(72.4,142.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAgQgJgFgGgLQgFgIgCgIQgCgMAHgEQACgBADABQADAAACADQABACgCAFQAAACACAFQACAFACADQADAFADADQAFAFAEgCQAJgFgEgOIgCgGQgDgKAAgFQABgHAHgEQAMgIANAJQAEADAHAHIALAKIAFAFQABADgBACQAAACgDACIgFAEIgFAEQgDACgDgBQgCgBgCgDQgCgDABgDIAGgFIgNgMQgKgIgGAEIACAEQAFAPAAAKQgBAOgLAHQgFADgGAAQgFAAgFgDg");
	this.shape_8.setTransform(68.3,137);

	this.instance_8 = new lib.helping("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(104.4,283);
	this.instance_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag2ArQgCgBAAgDQAAgEACgCIAVgUIAVgUIATgVIAJgLQAEgFAEgBQAFgBADADQACACAAADQAAADgCACIgCABIgDADQAHABAGADQAFADAEADQALALgFAOQgEALgMALQgLAMgNABQgOACgKgLQgFgFgEgIIgaAYQgCACgCABQgDAAgDgDgAgHAIQADAIAEAGQAHAGAIgCQAHAAAHgIQAJgIADgHQACgHgEgEQgFgFgGgCIgNgCIgWAZg");
	this.shape_9.setTransform(71.1,142);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbAdQgIgJgCgKQgFgPAGgNQAGgNAQgEQARgFAPAGQAQAGAFAQQADALgCAIQgDALgKADQgHABgIgGIgMgNIgTgXQgFAGgBAGQgBAHACAHIAFALQAEAIAFABQAEACABACQABADgCACQgBADgDAAIgCABQgHAAgIgKgAgGgYIAPATQAKAKAGAEQAEgIgDgKQgDgIgIgEQgGgDgKAAIgFAAg");
	this.shape_10.setTransform(66.2,129.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag6AgQgCgCAAgDQAAgFAFgCIASgDIARgBIAGAAIAFAAQANAAABgHQAAgJgIgHIgRgKQgbAAgGgCQgEgCAAgFQAAgDACgCQACgCADAAIADABIALAAIAKABIA1AAIANAAIAHAAIAGgBQAEAAACACQACACAAADQAAAGgHABIgMABIgRAAIgQAAIgGAAQAIAGAEAHQAEAFAAAIQAAAMgIAFQgFADgNAAIgNABIgQABIgPADIgCAAQgDAAgCgCg");
	this.shape_11.setTransform(69.1,120.9);

	this.instance_9 = new lib.directing("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(123.4,282);
	this.instance_9._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAvQgCgCgBgCQgBgDABgCIAFgIIAEgHIAUgkIgNgKQgFgEADgFQABgDADgBQADgBACACIAMAIIAFgIIAEgIQACgDADgBQACAAADABQAGADgEAKIgEAGIgCAEIgCAEIAJAEIAJAFQADAEgDAEQgBACgEABQgCABgDgCIgDAAIgDgDIgJgEIgUAlIgBADIgCAEQgGALgFAAIgEgBg");
	this.shape_12.setTransform(79.6,145.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAkQgLgEgEgEQgLgLAAgNQgBgOALgLQALgKASgEQATgFAKAKQAFAFAEAJQAEAKgEAFQgCABgDAAQgDAAgCgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgEQgBgGgHgHQgFgFgOAEQgNAFgGAGQgHAHAAAHQABAIAHAHQADADAFACIAJACIACACQACACAAADQAAADgCACQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQgEAAgGgCg");
	this.shape_13.setTransform(72.4,143.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZA5QgJgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKgBgNQAAgUAMgMQAMgMASAAQAIAAAEACQAFABACAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgDAMgIAFQgJAHgPAAQgKAAgHgBgAgMgkQgIAJAAANQABALADAEQAFAFAIAAQAGAAAHgHQAGgIABgHIAEgZIgGgDQgDgCgEAAQgNAAgHAKg");
	this.shape_14.setTransform(100.2,149);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgUIAAgIIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_15.setTransform(91.9,148);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAiQgKgHgFgJQgIgPACgMQACgOAOgIQARgKAPACQARABAIAPQAHALgBAJQABAJgJAFQgGAEgKgEIgPgJIgYgRQgDAHAAAGQAAAGAEAHQADAFAFAEQAHAHAEAAQAEAAABADQABACAAADQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgCACgCAAQgGAAgIgGgAgMgXIATAOQAMAIAIACQACgHgGgKQgFgIgIgBIgHgBQgGAAgJADg");
	this.shape_16.setTransform(67.5,136.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAPAZQgCgHAHgCIAFgBIAGgCQgFgLgGgEQgGgFgLgCIgmAKQgHACgBgGQgCgGAHgCIAwgOIAHgCIAHgBQAHgCACAGQACAHgLADQAQAKAFAQQABAGgEADQgDAFgJACIgEABIgFABQgFAAgBgFg");
	this.shape_17.setTransform(65.6,129);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAoAHQgCgCAAgEQAAgCACgDQADgCADAAQAEAAADACQACADAAACQAAAEgCACQgDADgEAAQgDAAgDgDgAgDAFIgRAAIgOAAIgMAAQgEAAgCgCQgCgCAAgCQAAgDACgCQACgCAEAAIAMAAIAOgBIARABIAQABQADAAACACQACACAAADQAAACgCACQgCACgDAAIgQgBg");
	this.shape_18.setTransform(66.1,123);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAIAhIgUAAQgZAAgMACIgCAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEAGgCQgEgGgCgFQgCgGAAgFQAAgPAKgKQAKgLARAAQAUAAAKALQAMALAAAPQAAAJgDAEIgFAHIApACQAHABAAAGQAAAHgHgBIgtgDgAgmgQQgHAHAAAJQAAAFACAEIAGAIIACACIAOAAIAIAAIAJAAQAFgCADgFQACgFAAgGQAAgLgGgHQgIgFgOAAQgJgBgHAHg");
	this.shape_19.setTransform(66.5,115.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},245).to({state:[{t:this.instance_6}]},15).to({state:[{t:this.instance_6}]},16).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:68.2,y:136.7}},{t:this.shape_3},{t:this.shape_2,p:{x:78.1,y:145}},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},23).to({state:[{t:this.instance_7}]},34).to({state:[{t:this.instance_7}]},18).to({state:[{t:this.instance_7}]},15).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_8},{t:this.shape_7},{t:this.shape_2,p:{x:78.7,y:145.8}},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},32).to({state:[{t:this.instance_8}]},38).to({state:[{t:this.instance_8}]},19).to({state:[{t:this.instance_8}]},14).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_4,p:{x:68.8,y:135.6}},{t:this.shape_9},{t:this.shape_2,p:{x:78.7,y:145.8}},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},28).to({state:[{t:this.instance_9}]},43).to({state:[{t:this.instance_9}]},17).to({state:[{t:this.instance_9}]},13).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_2,p:{x:85.2,y:145.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},71).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(245).to({_off:false},0).to({x:100.8,y:121.4},15).to({rotation:45,x:86.5,y:126.4},16).to({_off:true},1).wait(380));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(334).to({_off:false},0).to({x:97.2,y:120.2},18).to({rotation:45,x:88.1,y:125.9},15).to({_off:true},1).wait(289));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(438).to({_off:false},0).to({x:94.7,y:121.1},19).to({rotation:45,x:83,y:131},14).to({_off:true},1).wait(185));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(543).to({_off:false},0).to({x:105.7,y:121.1},17).to({rotation:30,x:92.5,y:130.5},13).to({_off:true},1).wait(83));

	// w3
	this.instance_10 = new lib.the();
	this.instance_10.parent = this;
	this.instance_10.setTransform(152.6,281.4);
	this.instance_10._off = true;

	this.instance_11 = new lib.Bub("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(149.3,283);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(245).to({_off:false},0).to({x:211.9,y:183.8},15).to({rotation:60,x:192.8,y:176.1},17).to({_off:true},23).wait(34).to({_off:false,rotation:0,x:173.8,y:283.2},0).to({x:230.3,y:184.6},18).to({rotation:60,x:197.3,y:177.6},16).to({_off:true},32).wait(143).to({_off:false,rotation:0,x:173,y:282.7,mode:"synched",startPosition:0},0).to({x:207,y:182.8},17).to({rotation:60,x:189,y:177.1},14).to({_off:true},71).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(438).to({_off:false},0).to({x:195.9,y:137.1},19).to({y:144.1},15).to({_off:true},28).wait(157));

	// w4
	this.instance_12 = new lib.couch();
	this.instance_12.parent = this;
	this.instance_12.setTransform(190.5,281.6,1.04,1.04);
	this.instance_12._off = true;

	this.instance_13 = new lib.gets("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(187.2,283);
	this.instance_13._off = true;

	this.instance_14 = new lib.team("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(208.5,282.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(245).to({_off:false},0).to({x:198.5,y:134.5},15).to({x:192.5,y:142.7},17).to({_off:true},23).wait(34).to({_off:false,x:211.3,y:283.3},0).to({x:199.7,y:120.4},18).to({x:193.3,y:141.8},16).to({_off:true},32).wait(257));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(438).to({_off:false},0).to({x:163.4,y:49.7},19).to({x:190.4,y:69.3},15).to({_off:true},28).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(543).to({_off:false},0).to({x:196.5,y:122.7},17).to({x:189.6,y:142.1},14).to({_off:true},71).wait(12));

	// W5
	this.instance_15 = new lib.cant();
	this.instance_15.parent = this;
	this.instance_15.setTransform(240.7,293.4,0.952,0.952);
	this.instance_15._off = true;

	this.instance_16 = new lib.needs("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(261.3,283.2,1.04,1.04);
	this.instance_16._off = true;

	this.instance_17 = new lib.the("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(220.1,282.3);
	this.instance_17._off = true;

	this.instance_18 = new lib.found("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(258.1,282.7);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(245).to({_off:false},0).to({x:164.7,y:42.2},15).to({x:168.2,y:80},17).to({_off:true},23).wait(357));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(334).to({_off:false},0).to({x:186.7,y:39.5},18).to({x:192.3,y:66.7},16).to({_off:true},32).wait(257));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(438).to({_off:false},0).to({x:233.6,y:37.2},19).to({rotation:60,x:215.1},15).to({_off:true},28).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(543).to({_off:false},0).to({x:191.1,y:33.7},17).to({y:67.2},14).to({_off:true},71).wait(12));

	// W6
	this.instance_19 = new lib.get();
	this.instance_19.parent = this;
	this.instance_19.setTransform(271.7,281.5,1.032,1.032);
	this.instance_19._off = true;

	this.instance_20 = new lib.help("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(302,283.2,1.056,1.056);
	this.instance_20._off = true;

	this.instance_21 = new lib.couch("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(256.9,283);
	this.instance_21._off = true;

	this.instance_22 = new lib.the("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(297.1,283.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(245).to({_off:false},0).to({x:215.8,y:47},15).to({x:217.2,y:66.8},17).to({_off:true},23).wait(357));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(334).to({_off:false},0).to({x:316.5,y:33.3},18).to({x:325.5,y:66.5},16).to({_off:true},32).wait(257));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(438).to({_off:false},0).to({x:225.4,y:-5.9},19).to({x:220.9,y:3.5},15).to({_off:true},28).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(543).to({_off:false},0).to({x:357.1,y:107.1},17).to({rotation:60,x:328.3,y:103.3},14).to({_off:true},71).wait(12));

	// W7
	this.instance_23 = new lib.it();
	this.instance_23.parent = this;
	this.instance_23.setTransform(294.8,281.5,1.04,1.04);
	this.instance_23._off = true;

	this.instance_24 = new lib.to("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(291,283);
	this.instance_24._off = true;

	this.instance_25 = new lib.couch("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(335.5,283.4);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(245).to({_off:false},0).to({x:234.8,y:1.6},15).to({x:239.3,y:4.1},17).to({_off:true},23).wait(357));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(438).to({_off:false},0).to({x:300,y:16.4},19).to({rotation:45,x:289,y:19.5},15).to({_off:true},28).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(543).to({_off:false},0).to({y:42.4},17).to({x:330.5,y:64.9},14).to({_off:true},71).wait(12));

	// W8
	this.instance_26 = new lib.to();
	this.instance_26.parent = this;
	this.instance_26.setTransform(312.9,281.6);
	this.instance_26._off = true;

	this.instance_27 = new lib.move("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(321.1,283);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(245).to({_off:false},0).to({x:306.3,y:16.6},15).to({rotation:45,x:290.3,y:22.6},17).to({_off:true},23).wait(357));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(438).to({_off:false},0).to({x:353.6,y:16.4},19).to({x:333.6,y:29.5},15).to({_off:true},28).wait(157));

	// W9
	this.instance_28 = new lib.move();
	this.instance_28.parent = this;
	this.instance_28.setTransform(344,281.8,1.044,1.044);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(245).to({_off:false},0).to({x:374,y:16},15).to({x:330.4,y:28},17).to({_off:true},23).wait(357));

	// Layer 20
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2.5,1,1).p("AIDrXIgtAAAoCKmIAoAy");
	this.shape_20.setTransform(218.6,88.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2.5,1,1).p("AGTrtIBwAAAoCKQIBFBf");
	this.shape_21.setTransform(218.6,91.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2.5,1,1).p("AFPsEIC0AAAoCJ5IBhCM");
	this.shape_22.setTransform(218.6,93.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2.5,1,1).p("AEMsaID3AAAoCJjIB+C5");
	this.shape_23.setTransform(218.6,95.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2.5,1,1).p("AoCJMICbDmADIsxIE7AA");
	this.shape_24.setTransform(218.6,97.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2.5,1,1).p("AoCI1IC4EUACFtIIF+AA");
	this.shape_25.setTransform(218.6,100.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2.5,1,1).p("AoCIfIDUFAABBteIHCAA");
	this.shape_26.setTransform(218.6,102.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2.5,1,1).p("AoCIIIDxFuAgBt1IIEAA");
	this.shape_27.setTransform(218.6,104.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2.5,1,1).p("AoCHyIEOGaAIDuLIpIAA");
	this.shape_28.setTransform(218.6,106.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2.5,1,1).p("AiGjMIENGZ");
	this.shape_29.setTransform(180.6,177.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2.5,1,1).p("AAXAAIgtAA");
	this.shape_30.setTransform(267.9,16.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2.5,1,1).p("AgtgMIAFAAIBWAAAgogMIA4AZ");
	this.shape_31.setTransform(265.5,17.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2.5,1,1).p("AhFgYIAKAAICBAAAg7gYIBDAy");
	this.shape_32.setTransform(263.1,18.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2.5,1,1).p("AhdglIAQAAICrAAAhNglIBOBL");
	this.shape_33.setTransform(260.7,19.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2.5,1,1).p("Ah1gyIAVAAIDWAAAhggyIBaBl");
	this.shape_34.setTransform(258.4,21.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2.5,1,1).p("Ahyg8IBmB8AiNg/IEbAA");
	this.shape_35.setTransform(256,22.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2.5,1,1).p("AilhMIFLAAAiFhIIBxCV");
	this.shape_36.setTransform(253.6,23.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2.5,1,1).p("Ai9hZIF7AAAiYhVIB9Cv");
	this.shape_37.setTransform(251.2,25.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2.5,1,1).p("AjUhlIGpAAAiqhhICIDH");
	this.shape_38.setTransform(248.8,26.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(2.5,1,1).p("Ai9htICUDgAjshyIHaAA");
	this.shape_39.setTransform(246.4,27.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2.5,1,1).p("AjPh5ICfD5AkFh/IIKAA");
	this.shape_40.setTransform(244,28.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2.5,1,1).p("AjiiGICqETAkciMII5AA");
	this.shape_41.setTransform(241.6,30.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2.5,1,1).p("Aj1iSIC2ErAk0iYIJpAA");
	this.shape_42.setTransform(239.2,31.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2.5,1,1).p("AkHieIDAFEAlMilIKZAA");
	this.shape_43.setTransform(236.9,32.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2.5,1,1).p("AkaiqIDNFdAlkiyILJAA");
	this.shape_44.setTransform(234.5,34);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2.5,1,1).p("Akti2IDYF2Al8i/IL5AA");
	this.shape_45.setTransform(232.1,35.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2.5,1,1).p("Ak/jCIDjGPAmUjLIMpAA");
	this.shape_46.setTransform(229.7,36.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(2.5,1,1).p("AlSjPIDvGoAmrjYINXAA");
	this.shape_47.setTransform(227.3,37.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2.5,1,1).p("AlkjbID6HBAHFjlIuIAA");
	this.shape_48.setTransform(224.9,39.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2.5,1,1).p("AKKmtIBGBQArPFKIBQBk");
	this.shape_49.setTransform(234.1,124.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(2.5,1,1).p("AKBm4IBYBsArYE/IBcB6");
	this.shape_50.setTransform(235,125.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(2.5,1,1).p("AJ4nDIBqCJArhE0IBqCQ");
	this.shape_51.setTransform(235.9,126.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2.5,1,1).p("AJvnOIB8CmArqEpIB2Cm");
	this.shape_52.setTransform(236.8,127.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(2.5,1,1).p("ArzEeICDC8AJmnZICODC");
	this.shape_53.setTransform(237.7,128.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(2.5,1,1).p("Ar8ETICPDSAJdnkICgDf");
	this.shape_54.setTransform(238.6,129.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2.5,1,1).p("AsFEIICcDoAJUnvICyD8");
	this.shape_55.setTransform(239.5,130.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2.5,1,1).p("AsOD9ICpD+AJLn6IDEEY");
	this.shape_56.setTransform(240.4,131.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(2.5,1,1).p("AsXDyIC1EUAJCoFIDWE2");
	this.shape_57.setTransform(241.3,133);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2.5,1,1).p("AsgDnIDCEqAI5oQIDoFS");
	this.shape_58.setTransform(242.2,134.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(2.5,1,1).p("AspDcIDOFAAIwobID6Fu");
	this.shape_59.setTransform(243.1,135.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2.5,1,1).p("AsyDRIDbFWAInomIEMGM");
	this.shape_60.setTransform(244,136.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2.5,1,1).p("As7DGIDoFsAIeoxIEeGo");
	this.shape_61.setTransform(244.9,137.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(2.5,1,1).p("AtEC7ID0GCAIVo8IEwHF");
	this.shape_62.setTransform(245.8,138.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(2.5,1,1).p("AtNCwIEBGYAIMpHIFCHh");
	this.shape_63.setTransform(246.7,139.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(2.5,1,1).p("AtWClIEOGuAIDpSIFUH+");
	this.shape_64.setTransform(247.6,140.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},229).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},65).to({state:[]},98).to({state:[{t:this.shape_30}]},5).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[]},77).to({state:[{t:this.shape_49}]},10).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[]},120).wait(12));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_181 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgGgHQgngDgXgJIgHALQgcApg1AAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_192 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgOAUgaAAQgdAAgNgYQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_193 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgOAUgbABQgdAAgNgZQgIgOAAgMQAAgPAKgPQAEgGAGgFQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_194 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAFAGAKQAHAOAAANQAAARgJAPQgOATgbAAQgdAAgNgYQgIgOAAgNQAAgPAKgPQAFgHAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgFQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_195 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAFAGAKQAHAOAAANQAAARgJAPQgGAIgJAFQARAMACAeQAAAPgKAOQgOAVgaAAQgdAAgNgYQgIgOAAgMQAAgQAKgOQAGgKAJgFQgHgFgFgKQgIgOAAgNQAAgPAKgPQAFgHAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgFQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_196 = new cjs.Graphics().p("A4zFzQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgLgBgLQgXAPghAAQglABgZgUQhEAJhrAAQhQAAgfguQgPgZAAgcQAAhBA7gZQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjPCOBPQAtAaAbA0IAQAgQgUhlAAgYQAAgoAWgfQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA6QAACOh0AAQh0AAgbiDQgKgvAFg2QAFgwANgYQiQgZhrAJQg8AGhNAYQg7ASgcgFQgqgJg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAPQgGAHgHAFQAJAGAGAKQAHANAAAOQAAARgJAOQgGAJgJAFQARAMACAdQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgOAWgbAAQgyAAAAg0g");
	var mask_graphics_197 = new cjs.Graphics().p("A4sG8QgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgLgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABXieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0AAQh0AAgbiDQgKgwAFg1QAFgwANgYQiQgZhrAKQg8AGhNAXQg7ASgcgGQgqgIg6g6IgCgCIACAPQAAAPgKAOQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOQgOAUgbAAQgeAAgNgYg");
	var mask_graphics_198 = new cjs.Graphics().p("A4dHnIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgOQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieAoQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgNgRAAQg/AMm8AHImjgCIj2ACQAWA5AAA5QAACPh0AAQh0AAgbiDQgKgwAFg1QAFgvANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAhQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAARgJAOQgOAUgbAAQgeAAgNgYg");
	var mask_graphics_199 = new cjs.Graphics().p("A30INQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgNAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA0oLAAQmqAAiHgqQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA3AAA6QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAOQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAPgKAPQgOAUgbAAQgdAAgNgYg");
	var mask_graphics_200 = new cjs.Graphics().p("A2yIwQgJgOAAgMQAAgNAHgMQgKAFgMAAQgdgBgNgXQgIgOAAgNQAAgMAHgNQgcgBgMgXIgHgaQAAgQAKgPIAGgHQgPgGgJgQQgHgNAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgHAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgLgBgLQgXAPghAAQglABgZgUQhEAJhrAAQhQAAgfgvQgPgZAAgcQAAhBA7gZQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjPCOBPQAtAaAbA0IAQAgQgUhlAAgYQAAgoAWgfQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg5QAZgTgPgbQgUgbAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AeQBpAOASAWQAGAIgBAOIgEAYQAABZieApQjOA0oLAAQmqAAiHgqQgjgLgXgTQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgZhrAJQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAPQgGAHgHAFQAJAGAGAJQAHANAAAOQAAARgJAOQgGAJgJAFQARAMACAdQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsABADAwQAAANgGAMQAJgFAMAAQAuABAEAyQAAAQgKAOQgOAUgaAAQgdAAgNgYg");
	var mask_graphics_201 = new cjs.Graphics().p("A1dJCQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQAwAAADAzQAAAPgKAPQgOAUgbAAQgdAAgNgYg");
	var mask_graphics_202 = new cjs.Graphics().p("Az+JHQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAvAAAEAzQAAAPgLAPQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_203 = new cjs.Graphics().p("Az+JHQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAvAAAEAzQAAAQgKAOQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_204 = new cjs.Graphics().p("AxFJGQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAPgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQA8AAAaAwQAPAbAAAaQAAAfgVAeQgdAngzAAQg7AAgagvg");
	var mask_graphics_205 = new cjs.Graphics().p("AxFJGQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAPgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQA9AAAaAwQAOAbAAAaQAAAggUAdQgbAng2AAQgpAAgagWQgbAggvAAQg7AAgagvg");
	var mask_graphics_206 = new cjs.Graphics().p("AxFJGQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAPgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQBAAAAbAwQAOAaAAAbQAAAhgTAcQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvg");
	var mask_graphics_207 = new cjs.Graphics().p("AxFJGQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAPgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQACgVAXAAQAKAAAGAFQAaADgCApQAAAigZAAQgPAAgHgOQgNACgTAAQghAAgQgGQgEAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvg");
	var mask_graphics_208 = new cjs.Graphics().p("AnzJLIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgQgGQgEAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAOQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQACgVAXAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQA7AAAaAwQAPAbAAAZQAAAhgUAcQgcAog0AAQg8AAgagvg");
	var mask_graphics_209 = new cjs.Graphics().p("AnzJLIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgQgGQgEAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAOQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQACgVAXAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAaAjIAEgFQAbgoA1AAQA8AAAaAwQAPAbAAAZQAAAhgUAcQgcAog1AAQgzAAgagjIgDAFQgcAog0AAQg8AAgagvg");
	var mask_graphics_210 = new cjs.Graphics().p("AnzJLIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgQgGQgEAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAOQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQACgVAXAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAaAjIAEgFQAbgoA1AAQApAAAZAXQAZgXAoAAQA8AAAaAwQAPAbAAAZQAAAhgUAcQgcAog1AAQgpAAgZgWQgZAWgoAAQgzAAgagjIgDAFQgcAog0AAQg8AAgagvg");
	var mask_graphics_211 = new cjs.Graphics().p("AnzJLIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgQgGQgEAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAOQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQACgVAXAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAaAjIAEgFQAbgoA1AAQApAAAZAXQAZgXAoAAQApAAAZAXQAagXAmAAQA6AAAbAwQAQAcAAAYQAAAggVAdQgcAog0AAQgnAAgZgWQgaAWgoAAQgpAAgZgWQgZAWgoAAQgzAAgagjIgDAFQgcAog0AAQg8AAgagvg");
	var mask_graphics_212 = new cjs.Graphics().p("AnzJLIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgQgGQgEAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAOQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQACgVAXAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAaAjIAEgFQAbgoA1AAQApAAAZAXQAZgXAoAAQApAAAZAXQAagXAmAAQAwAAAbAiQAcgiAwAAQA9AAAaAwQAPAaAAAaQAAAggVAdQgdAog0AAQgxAAgbghQgcAhgvAAQgnAAgZgWQgaAWgoAAQgpAAgZgWQgZAWgoAAQgzAAgagjIgDAFQgcAog0AAQg8AAgagvg");
	var mask_graphics_213 = new cjs.Graphics().p("AqLJaQgFgKgEgJQgYAQglAAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgIQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAHgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQBAAAAbAwIAIASQAYgQAhAAQAoAAAYATIAGgJQAdgoA1AAQAyAAAaAjIAEgFQAbgoA1AAQApAAAZAXQAZgXAoAAQApAAAZAXQAagXAmAAQAwAAAbAiQAcgiAwAAQA9AAAaAwQAPAaAAAaQAAAggVAdQgdAog0AAQgxAAgbghQgcAhgvAAQgnAAgZgWQgaAWgoAAQgpAAgZgWQgZAWgoAAQgzAAgagjIgDAFQgcAog0AAQgoAAgZgVIgHALQgbAog1AAQg8AAgagvg");
	var mask_graphics_214 = new cjs.Graphics().p("AqLJaQgFgKgEgJQgYAQglAAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgIQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAHgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQA5AAAcAmQAbgcAsAAQA1AAAaAnQAcgdAtAAQAyAAAaAjIAEgFQAbgoA1AAQApAAAZAXQAZgXAoAAQApAAAZAXQAagXAmAAQAwAAAbAiQAcgiAwAAQA9AAAaAwQAPAaAAAaQAAAggVAdQgdAog0AAQgxAAgbghQgcAhgvAAQgnAAgZgWQgaAWgoAAQgpAAgZgWQgZAWgoAAQgzAAgagjIgDAFQgcAog0AAQgoAAgZgVIgHALQgbAog1AAQg8AAgagvg");
	var mask_graphics_215 = new cjs.Graphics().p("AqLJaQgFgKgEgJQgYAQglAAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgIQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAHgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQAqAAAaAVIAHgLQAcgoA1AAQA7AAAaAwQAFAJAEAKQAYgRAiAAQAyAAAaAjIAEgFQAbgoA1AAQApAAAZAXQAZgXAoAAQApAAAZAXQAagXAmAAQAwAAAbAiQAcgiAwAAQA9AAAaAwQAPAaAAAaQAAAggVAdQgdAog0AAQgxAAgbghQgcAhgvAAQgnAAgZgWQgaAWgoAAQgpAAgZgWQgZAWgoAAQgzAAgagjIgDAFQgcAog0AAQgoAAgZgVIgHALQgbAog1AAQg8AAgagvg");
	var mask_graphics_216 = new cjs.Graphics().p("AqLJaQgFgKgEgJQgYAQglAAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgIQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAHgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQAhAAAWANQADgbARgaQAdgpA0AAQA6AAAbAxQAPAcAAAYIgBANQAWgNAfAAQAyAAAaAjIAEgFQAbgoA1AAQApAAAZAXQAZgXAoAAQApAAAZAXQAagXAmAAQAwAAAbAiQAcgiAwAAQA9AAAaAwQAPAaAAAaQAAAggVAdQgdAog0AAQgxAAgbghQgcAhgvAAQgnAAgZgWQgaAWgoAAQgpAAgZgWQgZAWgoAAQgzAAgagjIgDAFQgcAog0AAQgoAAgZgVIgHALQgbAog1AAQg8AAgagvg");
	var mask_graphics_217 = new cjs.Graphics().p("AqLJaQgFgKgEgJQgYAQglAAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgIQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAHgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQAhAAAWANQABgJADgJQgEgMAAgNQAAggAUgdQAcgoA1AAQA7AAAaAwQAPAcAAAZQAAANgDANQADANAAALIgBANQAWgNAfAAQAyAAAaAjIAEgFQAbgoA1AAQApAAAZAXQAZgXAoAAQApAAAZAXQAagXAmAAQAwAAAbAiQAcgiAwAAQA9AAAaAwQAPAaAAAaQAAAggVAdQgdAog0AAQgxAAgbghQgcAhgvAAQgnAAgZgWQgaAWgoAAQgpAAgZgWQgZAWgoAAQgzAAgagjIgDAFQgcAog0AAQgoAAgZgVIgHALQgbAog1AAQg8AAgagvg");
	var mask_graphics_218 = new cjs.Graphics().p("AqLJaQgFgKgEgJQgYAQglAAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgIQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAHgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQAhAAAWANQABgJADgJQgEgMAAgNQAAgVAJgTQgJgVAAgUQAAgfAUgdQAcgoA1AAQA6AAAbAwQAPAbAAAZQAAAVgJAUQAJAVAAATQAAANgDANQADANAAALIgBANQAWgNAfAAQAyAAAaAjIAEgFQAbgoA1AAQApAAAZAXQAZgXAoAAQApAAAZAXQAagXAmAAQAwAAAbAiQAcgiAwAAQA9AAAaAwQAPAaAAAaQAAAggVAdQgdAog0AAQgxAAgbghQgcAhgvAAQgnAAgZgWQgaAWgoAAQgpAAgZgWQgZAWgoAAQgzAAgagjIgDAFQgcAog0AAQgoAAgZgVIgHALQgbAog1AAQg8AAgagvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(181).to({graphics:mask_graphics_181,x:210.7,y:79}).wait(11).to({graphics:mask_graphics_192,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_193,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_194,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_195,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_196,x:210.7,y:82.6}).wait(1).to({graphics:mask_graphics_197,x:210.7,y:87.1}).wait(1).to({graphics:mask_graphics_198,x:210.7,y:91.4}).wait(1).to({graphics:mask_graphics_199,x:210.7,y:95.1}).wait(1).to({graphics:mask_graphics_200,x:210.7,y:98.7}).wait(1).to({graphics:mask_graphics_201,x:210.7,y:100.4}).wait(1).to({graphics:mask_graphics_202,x:210.7,y:100.9}).wait(1).to({graphics:mask_graphics_203,x:210.7,y:100.9}).wait(1).to({graphics:mask_graphics_204,x:210.7,y:103.2}).wait(1).to({graphics:mask_graphics_205,x:210.7,y:103.2}).wait(1).to({graphics:mask_graphics_206,x:210.7,y:103.2}).wait(1).to({graphics:mask_graphics_207,x:210.7,y:103.2}).wait(1).to({graphics:mask_graphics_208,x:210.7,y:103.7}).wait(1).to({graphics:mask_graphics_209,x:210.7,y:103.7}).wait(1).to({graphics:mask_graphics_210,x:210.7,y:103.7}).wait(1).to({graphics:mask_graphics_211,x:210.7,y:103.7}).wait(1).to({graphics:mask_graphics_212,x:210.7,y:103.7}).wait(1).to({graphics:mask_graphics_213,x:210.7,y:105.2}).wait(1).to({graphics:mask_graphics_214,x:210.7,y:105.2}).wait(1).to({graphics:mask_graphics_215,x:210.7,y:105.2}).wait(1).to({graphics:mask_graphics_216,x:210.7,y:105.2}).wait(1).to({graphics:mask_graphics_217,x:210.7,y:105.2}).wait(1).to({graphics:mask_graphics_218,x:210.7,y:105.2}).wait(439));

	// DiagramMain
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(2.5,1,1).p("AG0oIIAAEQAsjjwIAAkYA37jiQABAYAAAYQAFChAFC0QACAzADAyQAGBRArBAQApA8BDAaQBCAaBFAAQDAgCDAgBQISgCIRABAo7H/IAAkcAsjjwIAAEnA+7jwISYAAAe8jwMgrfAAA");
	this.shape_65.setTransform(209.3,104.5);
	this.shape_65._off = true;

	var maskedShapeInstanceList = [this.shape_65];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(181).to({_off:false},0).to({_off:true},464).wait(12));

	// Layer 7
	this.instance_29 = new lib.PartDiagramDisplay();
	this.instance_29.parent = this;
	this.instance_29.setTransform(207.3,138.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF00FF").s().p("AgoBHQgJgHAAgfIABgMIAAgQIgBgEQAAgCACgDIACgoIgBgKIgBgKQAAgLAJAAQAEABADACIAVgEIASgCQAWAAAOAFQAGADAAAGQAAAEgDADQgCADgEAAIgDgBQgQgEgOAAIgQACIgTAEIAAAJIgBAkIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBANIAAAKQAAAVADAEQACACAMAAIARAAIARgBIAFAAIAGAAQAKAAAAAJQAAAIgIACQgJABgcAAQgdAAgIgIg");
	this.shape_66.setTransform(107.9,169.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF00FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_67.setTransform(95.9,169.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF00FF").s().p("AgvBGQgDgBgCgDQgCgDABgDIAIgaIALgkIAMglIADgMIAFgNQAEgHAGADIAIAAIANADQAQAFAMAPQAMARgFARQgFAVgVAJQgSAIgUgGIgLgEIgNAvQgBAEgDABIgEABIgDAAgAgGgiIgLAiIAJAEQAOAEANgFQANgEAEgPQADgKgJgJQgIgKgMgDIgHgCIgEAAg");
	this.shape_68.setTransform(82.4,168.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF00FF").s().p("AgDBNIgOgHIgOgIIgRgIIgQgIQgDgCgCgDQAAgEACgEQACgDADgBQAEgBADACIATAIIAJgOIAHgOIAIgNQAKgSARgbIgKgGIgKgGQgDgCgBgDQgBgEACgDQAEgIAHAEIAZANQAQAJAWASQAGAFgEAHQgCAEgEABQgDAAgDgBIgNgJIgMgJQgPAWgNAVIgGANIgIAPIgJANIAZAOQAEACABAEQAAAEgCADQgCAEgDABIgDAAIgDgBg");
	this.shape_69.setTransform(70.4,166.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF00FF").s().p("AgvA1QgQgKgEgTQgFgTAKgQQAQgbAngPQAggNATALIAHAEIAFAFQAFgDAFADQAFADgCAIIgJARQgBADgDACQgFACgEgDQgFgDABgHQABgHgBgCIgIgGQgMgGgXAJQghANgNAWQgGAJADALQACAMAKAGQAIAEALABQAFAAAOgCIAJABQADACAAAEQACAEgCAEQgCADgFABQgLACgKAAQgSAAgOgIg");
	this.shape_70.setTransform(59.6,161);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF00FF").s().p("AghBFQgEgBgCgEIgIgNIgIgNIgLgPIgLgQQgCgDACgDQABgDADgCQAEgCADABQAEABACADQADAEAJALQAHgCAIgFIANgHIANgJQASgKAdgOIgHgLIgGgKQgCgEABgDQABgEAEgCQAHgEAGAHIAOAYQAJAQALAZQADAIgIAEQgEACgDgBQgEgCgBgDIgHgMIgFgOQgZALgVAMIgNAIIgNAJQgIAEgHADIAPAZQACADgBAEQgBAEgDACIgGABIgBAAg");
	this.shape_71.setTransform(50.3,150.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF00FF").s().p("AA7A8QgEgCgBgEIgEgUIgEgVIgCgGIgoANQgYAJgOADIgJAEIgKADQgGACgFgBQgGgBgCgGQgBgDACgEQACgDADgBIAFgBIAEAAIANgFIANgEIAjgLIAjgMIgDgHQgFgUAAgMQAAgIAHgCQAEgBADACQAEACABAEIACAPIADAPIAEAQIAFAPIAEAVIAFAVQABAEgCADQgCADgEABIgDAAIgEgBg");
	this.shape_72.setTransform(45.2,136.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF00FF").s().p("AgsBAQgEgCgBgEQgBgDADgEQAVgmAAgmIgRAGIgSAFQgEABgDgCQgDgCgBgDQgBgEACgEQABgDAEgBIAVgHIAWgGIAYgEIAZgFIANgEIANgFQAFgBAFABQAFACABAGIAFAWQABANgCAKQgKAogbAIQgOADgNgJQgLgIgIgOQgIAggMASQgDAEgDABIgCAAIgFgBgAAogoIgKAEIgSAEIgSACIABAEIABAEQAFAWAJAKQAFAEAFADQAHADADAAQANgEAGgQQAHgPgDgPIgCgOg");
	this.shape_73.setTransform(43.7,122.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF00FF").s().p("AgvA2QgDgDgBgDQgCgIATgMIAbgNIgLgWIgLgXIgngGQgFgBgCgFQgBgEACgDQACgEAEgBQAEgBAgAGQACgDADAAQAIgCAEAIQAVAFAdAJQAoAMABAGQACAHgJAFIgdAMIg6AfIgMAIIgJAGIgDAAIgFgBgAAJAFIAhgPIgvgOIAOAdg");
	this.shape_74.setTransform(43.2,108.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF00FF").s().p("AgEAZQgMgQAAgVIABgLIgxgBQgEAAgCgCQgDgDAAgDQAAgEADgDQACgCAEAAIAbAAIAmACIAmACIANAAIANABQAIACgBAHIACAIIAAAOQAAAQgMAPQgMAQgSAAQgXAAgNgRgAAAgMQAAAPAIAKQAJAMAPAAQAKAAAIgLQAGgKAAgLIAAgIIAAgFIgRAAIglgCg");
	this.shape_75.setTransform(42.6,95.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29}]},37).to({state:[]},135).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},46).to({state:[]},427).wait(12));

	// SENTENCE
	this.instance_30 = new lib.TwiggsPullingCouchText();
	this.instance_30.parent = this;
	this.instance_30.setTransform(198.1,269.6,0.981,0.981,0,0,0,173.5,13.2);

	this.instance_31 = new lib.BubpushingText();
	this.instance_31.parent = this;
	this.instance_31.setTransform(194.1,271.2,0.775,0.775,0,0,0,165.8,16);

	this.instance_32 = new lib.ProHelpingText();
	this.instance_32.parent = this;
	this.instance_32.setTransform(197.8,271.3,0.919,0.919,0,0,0,166.6,13.9);

	this.instance_33 = new lib.BuffyfoundText();
	this.instance_33.parent = this;
	this.instance_33.setTransform(199.4,270.5,0.934,0.934,0,0,0,174.8,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30}]},174).to({state:[]},126).to({state:[{t:this.instance_31}]},5).to({state:[]},95).to({state:[{t:this.instance_32}]},5).to({state:[]},96).to({state:[{t:this.instance_33}]},5).to({state:[]},139).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,55.2,427.9,121.7);


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
(lib.pre_Scene7b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene7b:0,scene7b_repeat:554});

	// timeline functions:
	this.frame_0 = function() {
		//nav buttons --------------------------------------------
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		//volume buttons -----------------------------------------
		this.vol_dwn.addEventListener("click", volDwn.bind(this));
		this.vol_up.addEventListener("click", volUp.bind(this));
		
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmusic',{loop:-1});
		bgm.volume = 1;
		
		
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
		
		 window.open ("pre_Scene8.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pre_Scene7a.html","_self");
		}
	}
	this.frame_1 = function() {
		playSound("presentparticipleadjdiagram");
	}
	this.frame_184 = function() {
		playSound("twiggspulling");
	}
	this.frame_304 = function() {
		playSound("bubpushingneedshelp");
	}
	this.frame_406 = function() {
		playSound("prohelpingbub");
	}
	this.frame_507 = function() {
		playSound("buffydirectingtheteam");
	}
	this.frame_562 = function() {
		this.gotoAndPlay("scene7b_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(183).call(this.frame_184).wait(120).call(this.frame_304).wait(102).call(this.frame_406).wait(101).call(this.frame_507).wait(55).call(this.frame_562).wait(1));

	// content
	this.instance = new lib.PresentParticipleDiagrams1();
	this.instance.parent = this;
	this.instance.setTransform(276.3,162,1,1,0,0,0,206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(563));

	// Twiggs
	this.instance_1 = new lib.TwiggsPulling();
	this.instance_1.parent = this;
	this.instance_1.setTransform(413.9,291.7,0.444,0.507,0,0,0,223.7,121.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(563));

	// main
	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(63.3,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_2 = new lib.Copyright("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,393.5);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape.setTransform(53.3,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAiQgCgCAAgEIgBgTIgBgTIgBgGQgHAEgHAJIgBABIAAASIAAAEIgBAEQABAEgDABQgCACgEAAQgEAAgDgEIgBgKIAAgUIAAgJIAAgJQAAgFACgEQACgFAEAAQADAAADACQADADgBADIAAAFQAJgKAIAAQAJAAADAGQADgDAFgBQAEgCAFAAQAMAAAEAMIACAPIAFAfQAAADgCADQgDACgDAAQgHAAgCgHIgBgRIgCgQQgCgLgDAAIgGADIgGAFIABASIABATQAAAEgBACQgDACgEAAQgCAAgDgCg");
	this.shape_1.setTransform(45.5,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMAdQgIADgHAAQgIAAgGgEQgGgEgBgHQgDgPAAgKQAAgIACgKQABgGAHAAQADAAADACQACACAAADIgBAIIAAAIIAAAOIACAKIADABIACAAQAGAAAIgCIAAgKIgBgJIABgUQABgHAHAAQAEAAACACQADACAAADIgBAVIAAALIAAAMIAAADIAAAEQAAADgCACQgDACgDAAQgFAAgCgEg");
	this.shape_2.setTransform(37.6,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAuQgCgCAAgEIAAhQQAAgDACgCQACgCADAAQAEAAACACQACACAAADIAABNQAAALgIAAQgDAAgCgCg");
	this.shape_3.setTransform(32.8,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_4.setTransform(28,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAqQgHgRgJgfIgEgQQgEgLAAgFQAAgDADgCQACgCADAAQAGAAACAFIACALIAHATIAIAcIANgiIAFgOQADgJAFgEQACgDADAAQAEAAACACQADACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgFALIgFAMIgQAoIgGAOQgDAEgDAAQgGAAgDgFg");
	this.shape_5.setTransform(21,9.1);

	this.vol_up = new lib.pos();
	this.vol_up.parent = this;
	this.vol_up.setTransform(51.8,25.9,1,1,0,0,0,7,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.pos(), 3);

	this.vol_dwn = new lib.neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(21.8,25.9,1,1,0,0,0,7,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.neg(), 3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFA3QgCgDAAgEIgCghQgDgVAAgLQAAgKgCgGQgHADgHAHIgLAMIgEAGIgBAPIgBAQIABAIIAAAHQAAAEgCADQgDACgEAAQgLAAAAgXIABgRIACgQIgBgOIgBgPQAAgVAJAAQAEAAADADQADADAAAEIgBAFIAAAGIAAAKQAFgKAJgIQAKgIAGAAQAPAAAEAOQAFgHAHgDQAIgDAJAAQAPAAAGAQIAEAaIAGA1QABADgDADQgDACgEAAQgIAAgBgIQgCgKgBgSIgDgcQgBgHgDgGQgDgIgDAAQgEAAgJAGQgJAFgDADQAAAJABAJIACAYQACAOAAAKQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_6.setTransform(435.2,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjArIAAhAIAAgJIABgJQgBgKAJAAQAJAAAAAPQARgRAVAAQAHAAAFAGQADAGAAALIAAAHQgBALgIAAQgIAAAAgJIAAgHIAAgIQgPACgIAHQgIAGgGAMIAAAyQAAAJgJAAQgIAAAAgJg");
	this.shape_7.setTransform(423.4,28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbAnQgMgNgBgVQgBgUAMgQQANgTAWAAQASAAAKARQAHAOAAATQAAAUgLAOQgLARgTAAQgQAAgLgMgAgQgSQgGAKAAANQAAANAIAIQAGAGAIAAQAJAAAHgHQAHgIABgNQABgjgUAAQgNAAgIANg");
	this.shape_8.setTransform(413.4,28.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgsBLQgDgDAAgEIABg3IABg2IAAgLIgBgNQAAgEADgDQADgDAEAAQADAAACACIAVgDIAPgBQALAAANADQATAEAAAIQAAADgCADQgDADgEAAIgEAAQgLgFgTAAIgNABIgTADIAAAoQASgFAJAAIAcACQAJABAAAIQAAAFgDACQgCACgEAAIgPgBIgNAAQgGAAgVAEIgBBAQAAAEgDADQgCADgEAAQgEAAgDgDg");
	this.shape_9.setTransform(403.3,26.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFA3QgCgDAAgEIgCghQgDgVAAgLQAAgKgCgGQgHADgHAHIgLAMIgEAGIgBAPIgBAQIABAIIAAAHQAAAEgCADQgDACgEAAQgLAAAAgXIABgRIACgQIgBgOIgBgPQAAgVAJAAQAEAAADADQADADAAAEIgBAFIAAAGIAAAKQAFgKAJgIQAKgIAGAAQAPAAAEAOQAFgHAHgDQAIgDAJAAQAPAAAGAQIAEAaIAGA1QABADgDADQgDACgEAAQgIAAgBgIQgCgKgBgSIgDgcQgBgHgDgGQgDgIgDAAQgEAAgJAGQgJAFgDADQAAAJABAJIACAYQACAOAAAKQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(384.1,28.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHACgEAAQgVAAgKgMQgKgLAAgYQAAgWAQgPQAPgQAVgBQAIABAKAEQANAFAAAIQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIgCAMIAAATQAAALABAIIAGAQIACAEIABACQAAAEgDACQgCACgEAAQgCAAgEgEgAgPgWQgKAMAAAOQAAAPAFAIQAGAHAKABQAIAAAGgEQAEgBAGgGQgDgYAAgMIAAgJIACgKIgGgCIgEgBQgNAAgLAMg");
	this.shape_11.setTransform(371.7,28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgjArIAAhAIAAgJIABgJQgBgKAJAAQAIAAABAPQARgRAVAAQAHAAAEAGQAEAGAAALIAAAHQgBALgIAAQgIAAAAgJIAAgHIAAgIQgQACgHAHQgIAGgGAMIAAAyQAAAJgJAAQgIAAAAgJg");
	this.shape_12.setTransform(362.6,28.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfBIQgMgCAAgIQAAgIAIAAIALACQAIABAJAAQARAAAHgRQAFgMAAgXQgGAJgGAFQgHAFgIAAQgRAAgLgMQgKgLAAgSQAAgZAPgPQAOgQAZAAQAIAAAGACQAGADADAEQAKAAAAALIgBASIgDARIgDAeQAAATgDAMQgEAPgKAHQgKAJgUAAQgNAAgIgCgAgRguQgIALAAARQAAAOAFAFQAGAHAKAAQAIAAAJgJQAHgKACgKIAEgfIgIgFIgIgBQgRAAgKAMg");
	this.shape_13.setTransform(352.5,31);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHACgEAAQgVAAgKgMQgKgLAAgYQAAgWAQgPQAPgQAVgBQAIABAKAEQANAFAAAIQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAIgCAMIAAATQAAALABAIIAGAQIACAEIABACQAAAEgDACQgCACgEAAQgCAAgEgEgAgPgWQgKAMAAAOQAAAPAFAIQAGAHAKABQAIAAAGgEQAEgBAGgGQgDgYAAgMIAAgJIACgKIgGgCIgEgBQgNAAgLAMg");
	this.shape_14.setTransform(342.8,28.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIBDQgDgCABgFIgBgQIAAgRIABgWIABgUQAAgFACgCQADgDAEAAQACAAADADQACACAAAFIAAAUIgBAWIAAARIABAQQgBAFgCACQgDADgCAAQgEAAgDgDgAgFgyQgDgEgBgEQABgEADgEQADgDADAAQAFAAADADQADAEABAEQgBAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_15.setTransform(335.4,26.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_16.setTransform(326,26.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF00FF").s().p("AgoBHQgJgIAAgeIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgLIgBgKQAAgKAJgBQAEABADACIAVgEIASgCQAWAAAOAFQAGADAAAGQAAAEgDADQgCADgEAAIgDgBQgQgEgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBANIAAAKQAAAVADAEQACACAMAAIARAAIARgBIAFAAIAGAAQAKAAAAAJQAAAIgIABQgJACgcAAQgdAAgIgIg");
	this.shape_17.setTransform(307.5,26.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF00FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_18.setTransform(296.3,26.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF00FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_19.setTransform(286,25.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF00FF").s().p("AgoBEQgDgDAAgEQAAgDADgEQADgCADAAIAUgCIABgRIAAgQIgBgQQAAgUADggIgMABIgMAAQgEAAgDgDQgDgDAAgEQAAgIAJgCIAcAAQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAaAAAYIAAAQIABARIgBAQIAdgBQAEAAADADQADACAAAFQAAADgDADQgDADgEAAIgPAAIgQABIgRABIgTACQgDAAgDgDg");
	this.shape_20.setTransform(275.8,26.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF00FF").s().p("AgmA5QgMgOAAgUQAAgeAaghQAVgcAWAAIAIABIAGABQAEgFAFAAQAGAAACAJQACAHgBALQAAAEgBADQgDAEgFAAQgGAAgDgHQgCgGgCgCQgCgBgIAAQgOAAgPAVQgWAcAAAXQAAAMAIAJQAHAJAMAAQAIAAAKgFIARgLQAEgEAEAAQAEAAACADQADADAAAEQAAAEgEADQgYAWgYAAQgUAAgNgPg");
	this.shape_21.setTransform(265.1,26.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF00FF").s().p("AgoBEQgDgDAAgEQAAgDADgEQADgCADAAIAUgCIABgRIAAgQIgBgQQAAgUADggIgMABIgMAAQgEAAgDgDQgDgDAAgEQAAgIAJgCIAcAAQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAaAAAYIAAAQIABARIgBAQIAdgBQAEAAADADQADACAAAFQAAADgDADQgDADgEAAIgPAAIgQABIgRABIgTACQgDAAgDgDg");
	this.shape_22.setTransform(253.9,26.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF00FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_23.setTransform(243.1,26.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF00FF").s().p("AgvBGQgDgCAAgFIAAgVIAAgWIABgZIACgZIgBgOIgBgOQAAgFADgEQAEgFAGAAIAWACQANACAIAEQAmAUAAAdQAAAOgOAKQgKAJgPAEQAcAQAPARQACADAAADQAAAEgDADQgCADgEAAQgDAAgDgDQgggfgkgKIABASIAAASQAAAFgCACQgDADgEAAQgEAAgDgDgAgdgpIAAALIgBATIgBARIADAAIAFABQAXAAALgHQAGgCAEgEQAFgFgBgEQAAgNgOgLQgNgKgOgCIgOgBg");
	this.shape_24.setTransform(230.1,26.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF00FF").s().p("AAgAwQgCgJgEgUIgYAEIgYAGIgQAjQgDAFgFAAQgEAAgDgDQgDgCAAgEQAAgFAOgdQgBgDAAgDQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA/IAFAOIADALQAAAEgDACQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgjg");
	this.shape_25.setTransform(216.8,26.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF00FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_26.setTransform(205.1,25.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF00FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_27.setTransform(188.7,26.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF00FF").s().p("Ag9BIQgDgDAAgEIABgLIAAgMIABgRIAAgSIAAgRIgBgTIgBgRIgBgRQAAgFAEgDQADgEAFAAQAFAAAHALQAXAjASAXQAVAaAbAZIAAgMIgBgMQAAgogCgYIgDgJIgCgKQAAgLAKAAQAQAAAAA8IgBAeIAAAfIgBAOQgCAKgIAAQgFAAgHgHQgmgkgwhCIAAAVIAAAUIAAAXIAAAYQAAAZgJAAQgGAAgCgEg");
	this.shape_28.setTransform(174,26.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF00FF").s().p("AgoBHQgJgIAAgeIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgLIgBgKQAAgKAJgBQAEABADACIAVgEIASgCQAWAAAOAFQAGADAAAGQAAAEgDADQgCADgEAAIgDgBQgQgEgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBANIAAAKQAAAVADAEQACACAMAAIARAAIARgBIAFAAIAGAAQAKAAAAAJQAAAIgIABQgJACgcAAQgdAAgIgIg");
	this.shape_29.setTransform(160.7,26.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF00FF").s().p("AgkBAQgSgIAAgOQAAgEACgCQAEgDAEAAQAEAAAEAGQAEAHAEACQAHAFAPAAQAOAAAMgGQAQgIAAgOQAAgMgNgHQgMgFgPgBQgOAAgLgFQgNgIAAgOQAAgQASgOQATgNARAAQAJAAAMADQAPAEAAAGQAAAJgJAAIgMgCIgPgCQgNAAgKAHQgLAHAAAKQAAAIAOADIATACQAVACAMAMQALAJAAAQQAAAWgUANQgSAMgXAAQgQAAgOgHg");
	this.shape_30.setTransform(148,26.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF00FF").s().p("AgoBHQgJgIAAgeIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgLIgBgKQAAgKAJgBQAEABADACIAVgEIASgCQAWAAAOAFQAGADAAAGQAAAEgDADQgCADgEAAIgDgBQgQgEgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBANIAAAKQAAAVADAEQACACAMAAIARAAIARgBIAFAAIAGAAQAKAAAAAJQAAAIgIABQgJACgcAAQgdAAgIgIg");
	this.shape_31.setTransform(135.7,26.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF00FF").s().p("AguBGQgEgCAAgFIAAgVIgBgWIACgZIACgZIgBgOIgBgOQABgFADgEQADgFAGAAIAWACQANACAIAEQAmAUAAAdQgBAOgNAKQgJAJgQAEQAcAQAPARQADADAAADQAAAEgEADQgCADgEAAQgDAAgDgDQgfgfglgKIABASIAAASQAAAFgDACQgCADgEAAQgEAAgCgDgAgdgpIABALIgBATIgDARIAFAAIADABQAYAAALgHQAFgCAFgEQAEgFABgEQAAgNgPgLQgMgKgPgCIgOgBg");
	this.shape_32.setTransform(123.7,26.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF00FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_33.setTransform(112.7,25.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3,1,1).p("EAhZgX2MhCxAAAMAAAAvtMBCxAAAg");
	this.shape_34.setTransform(275,193.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#00CC99","#DDFFF8"],[0,1],0.1,153.5,0.1,-153.4).s().p("EghYAX3MAAAgvtMBCxAAAMAAAAvtgAGGjAIAEACIgDgDg");
	this.shape_35.setTransform(275,193.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.vol_dwn},{t:this.vol_up},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_goNext},{t:this.instance_2},{t:this.btn_menu},{t:this.btn_goBack}]}).wait(563));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,198.2,532.5,404.8);
// library properties:
lib.properties = {
	id: 'E729B91F5D17AE47A2452A87DD4A1F47',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bubpushingneedshelp.mp3", id:"bubpushingneedshelp"},
		{src:"sounds/buffydirectingtheteam.mp3", id:"buffydirectingtheteam"},
		{src:"sounds/presentparticipleadjdiagram.mp3", id:"presentparticipleadjdiagram"},
		{src:"sounds/prohelpingbub.mp3", id:"prohelpingbub"},
		{src:"sounds/twiggspulling.mp3", id:"twiggspulling"}
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
an.compositions['E729B91F5D17AE47A2452A87DD4A1F47'] = {
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