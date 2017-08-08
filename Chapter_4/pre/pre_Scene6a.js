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


(lib.work = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAVA8IgMgTIgNgTIgOALIgBAXQAAAEgCACQgCACgEAAQgIAAAAgLIABgTIABgTIABgbIAAgbIAAgIIgBgIQAAgEACgCQADgCADAAQADAAACACQADACAAAEIAAAIIAAAJIAAAZIAAAaQAKgIAJgJIARgRQADgDADAAQADAAACACQADADAAADQAAADgCACIgYAXIARAYQAMAQAAAFQAAADgDACQgCACgDAAQgFAAgCgEg");
	this.shape.setTransform(14,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_1.setTransform(5.6,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_2.setTransform(-2.8,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgCAFgFABQgHAAgFgYQgDgMgCgTIgDgNIgBgLQAAgDADgDQACgCADAAQAHAAAAAHIACALIABALIAFAiQAJgWAJggQADgJAFAAQAGAAADAKIAEAcIAGAeIAGgVIAKgqQABgEAFgBQAEAAACACQACADAAADIAAADQgGAagKAfQgCAHgFAIQgDAEgEAAQgKgBgEgUg");
	this.shape_3.setTransform(-12.3,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-13.1,39.9,26.3);


(lib.were = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFgBAHgCQAJgCADgEQADgFADAAQADAAACACQACACAAAEQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJAAgGAIg");
	this.shape.setTransform(13.9,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_1.setTransform(5.7,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFgBAHgCQAJgCADgEQADgFADAAQADAAACACQACACAAAEQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJAAgGAIg");
	this.shape_2.setTransform(-2.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgEABQgHAAgFgYQgDgMgCgTIgCgNIgBgLQAAgDACgDQACgCADAAQAHAAAAAHIACALIACALIAEAiQAJgWAJggQACgJAGAAQAGAAACAKIAGAcIAFAeIAGgVIAKgqQABgEAGgBQADAAACACQADADAAADIgBADQgGAagKAfQgCAHgFAIQgDAEgFAAQgJgBgEgUg");
	this.shape_3.setTransform(-12.5,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-13.1,40.3,26.3);


(lib.Watching = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaA8QgKgCAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgPQAEgJAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgJQgJgLAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAaQgBAPgDAKQgDANgIAGQgJAHgRAAQgKAAgHgCgAgOgnQgHAKAAAOQAAAMAEAEQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape.setTransform(31.3,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQAAgRgGAAQgJABgHAJQgGAKgFANIgBAIIAAAIIAAAHIABAHQAAAEgCACQgCACgEAAQgDAAgCgCQgDgCAAgEIAAgHIgBgHIACgWIABgWIAAgHIAAgIQAAgDACgCQACgCADgBQAHAAABALIAAAJQANgRANgBQANAAAEAMQAEAHABAOIAAAIIgBAHQAAAGACAKIABARQABADgCACQgDACgDAAQgHABgBgIg");
	this.shape_1.setTransform(23.1,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADAAADIgBASIAAASIAAAOIAAAOQABADgDACQgCADgDAAQgDAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQADADAAADQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_2.setTransform(16.7,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVA7QgCgHgBgLIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHANQAAAegDAGQgCAEgEABQgEAAgCgCQgCgCAAgEIAAgDIABgMIAAgLIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBASIAAAHQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAACQAAAEgCACQgCACgDAAQgGAAgCgGg");
	this.shape_3.setTransform(9.7,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAiQgMgKAAgRQAAgOALgRQAMgTANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgEgCQgEgFgLAAQgHAAgHAPQgHANAAAIQAAALAHAFQAGAGAJAAQAFAAAFgDIAJgEIAEgBQADAAACACQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_4.setTransform(0.9,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEA3QgDgCABgDIAAgJIAAgJIgBgtIgSgBQgHgBAAgHQAAgDACgCQADgCADAAIAQABIAAgLIAAgKQAAgDACgCQACgCADAAQAGAAABAMIAAAHIAAAEIAAAFIAMgBIAKAAQAFACAAAFQAAAEgDACQgCACgDAAIgEAAIgDAAIgLABIACAuIAAADIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_5.setTransform(-7,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQAAADgDACQgCACgCAAQgCAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAFgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgLAAgJAJg");
	this.shape_6.setTransform(-14.8,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASA9QgEgCAAgEIgEgPIgHgiIgEggQgHAZgHARQgKAVgDAMIACADQAAAEgEACQgDACgEAAQgKAAAAgJIgCgKIgJgnIgRg2IgBgDQAAgHAIAAQAFAAAEAFIAFAQIAKAiIAHAiQAIgUAIgaIAIgYQAIgRAFAAQAGAAABAFQAEAHACAZIAGAeIAGAfQALgZAPgqIAFgPQACgJADgFQADgEAEAAQAJAAgBAHIgCAIIgEAJIgEAOIgXA3IgLAbQgDAFgGAAQgDAAgCgCg");
	this.shape_7.setTransform(-26.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-13.1,75.4,26.3);


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


(lib.thumb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgDAAgDIABgGIAAgGIgBgbIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgCAFgBQASAAALAOQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAPIAAAMIAAAOIALAEQAFACAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape.setTransform(20.1,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_1.setTransform(8.4,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATAoQgLAFgMAAQgLAAgHgFQgIgFgBgKQgEgWAAgQQAAgMADgPQAAgGAIgBQADAAACADQADACAAADIgCANIgBANIABAXQABAJACAGIAFADIAGABQAKAAAMgFIAAgQIAAgPQAAgSACgOQAAgHAIAAQADAAACADQADACAAADIgCAgIAAARIAAASIABAFIAAAGQAAADgDADQgCACgEAAQgFgBgCgHg");
	this.shape_2.setTransform(-2.7,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAFAAAPIABAQIACARIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_3.setTransform(-11.9,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_4.setTransform(-21,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-13.8,54.1,27.7);


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


(lib.smashed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdA5QgLgMAAgSQgBgXAMgMQAMgNASAAQAKAAAEADIAIAFQACgjABgMQABgHAHAAQAHAAAAAIQAAAMgDAnIgBAXQAAAcADAOIAAACQAAADgCACQgDADgDAAQgFAAgDgIQgFAFgHACQgGACgHAAQgQAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAJAAQAGAAAGgCIAJgHIACgDIAAgOIAAgKIAAgJQgDgHgGgCQgEgEgIAAQgNAAgHAHg");
	this.shape.setTransform(28.8,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_1.setTransform(19.4,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAFAAAPIABAQIACARIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_2.setTransform(9.8,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAHAAAEgBQAIgDAAgFQAAgMgPgEIgIgBQgLgCgEgEQgIgEAAgJQAAgRARgIIAPgFQALgDAEgCQAEgCAEAAQADAAADADQACACAAAEIABAGIABAHQAAAEgCADQgDACgDAAQgEAAgCgDIgCgJIgUAGQgMAFAAAIIAFACQASADAJAFQANAJAAAQQAAAOgLAGQgJAGgPAAQgKAAgKgEg");
	this.shape_3.setTransform(0.4,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAbArIgGgHIgOAHQgGACgDAAQgUAAgJgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAADgCADQgCACgEAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKABQAHgBAGgDIAIgGQgDgVAAgKIAAgJIACgJIgGgBIgDgBQgMAAgJAKg");
	this.shape_4.setTransform(-7.9,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_5.setTransform(-18.7,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAuQgMgFAAgHQAAgEACgDQADgCAEAAQACAAAEAEQACACAHABIAKABQAGAAAFgBQAHgDABgFQgBgMgQgEIgHgBQgLgCgFgEQgGgEAAgJQAAgRAQgIIAPgFQALgDAFgCQADgCAEAAQADAAADADQACACAAAEIABAGIABAHQAAAEgCADQgCACgEAAQgFAAgCgDIgCgJIgSAGQgNAFAAAIIAFACQASADAJAFQAOAJAAAQQAAAOgMAGQgJAGgOAAQgLAAgLgEg");
	this.shape_6.setTransform(-29.8,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.9,-13.8,71.8,27.7);


(lib.relaxing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaA8QgKgCAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgPQAEgJAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgJQgJgLAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAaQgBAPgDAKQgDANgIAGQgJAHgRAAQgKAAgHgCgAgOgnQgHAKAAAOQAAAMAEAEQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape.setTransform(25.6,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQAAgRgGAAQgJABgGAJQgHAKgFANIgBAIIAAAIIAAAHIABAHQAAAEgCACQgDACgCAAQgEAAgCgCQgCgCAAgEIgBgHIAAgHIABgWIABgWIAAgHIAAgIQAAgDABgCQADgCADgBQAIAAAAALIABAJQANgRAMgBQANAAAEAMQAEAHABAOIAAAIIgBAHQAAAGACAKIABARQAAADgCACQgCACgDAAQgHABgBgIg");
	this.shape_1.setTransform(17.5,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQACADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQACADABADQgBAEgCADQgDACgDAAQgDAAgDgCg");
	this.shape_2.setTransform(11,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYAqIgYggIgQAPIgNAOQgDACgCAAQgDABgCgDQgCgCAAgEIABgEIAHgHIAHgHIARgRIgLgOQgFgJgFgEQgDgDAAgDQAAgDACgDQACgBADAAQAFgBAJAMIAMATIAQgOQAJgJAEgFQACgEADAAQADAAADADQACABAAADQAAAFgHAIIgLAKIgOAOIAZAgQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgCACQgDADgCAAQgDAAgDgDg");
	this.shape_3.setTransform(3.9,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQAAADgDACQgCACgCAAQgCAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAFgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgLAAgJAJg");
	this.shape_4.setTransform(-4.9,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQgBgHAIAAQAHAAAAAHIgBAdIAAAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_5.setTransform(-11.2,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFgBAHgCQAJgCADgEQADgFADAAQADAAACACQACACAAAEQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJAAgGAIg");
	this.shape_6.setTransform(-17.7,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_7.setTransform(-25.8,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-13.1,64.1,26.3);


(lib.her = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgHQAAgJAIAAQAIAAAAAOQAPgPATgBQAHABADAEQADAFAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape.setTransform(9.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAkQgNgLAAgSQAAgVALgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQADACgBADQABAJgPAGQgNAGgMAAQgSAAgMgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_1.setTransform(1,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAFAAAPIABAQIACARIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_2.setTransform(-8.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-13.8,31.4,27.7);


(lib.Hammering = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBAQgLgCABgHQAAgGAGgBIAKACIAQABQAPAAAGgPQAEgLAAgUQgFAIgFAEQgHAEgHAAQgOAAgKgKQgKgLABgPQAAgWAMgOQANgOAXAAQAIAAAEACQAGACACAEQAJAAAAAKIgCAPIgBAQIgCAbQgBARgDAKQgDAOgJAGQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQAAAMAFAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgHgBQgPAAgJALg");
	this.shape.setTransform(39.6,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgGAAQgKAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgDACQgCACgDAAQgEAAgDgCQgBgCAAgEIgBgIIAAgHIABgXIAAgXIAAgIIAAgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSAOAAQANAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_1.setTransform(30.9,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHA8QgCgCAAgEIgBgOIAAgQIABgTIABgSQAAgFACgCQACgCAEAAQACAAACACQADACAAAFIgBASIgBATIAAAQIAAAOQAAAEgCACQgCADgDgBQgDABgCgDgAgFgtQgCgDAAgEQAAgEACgCQAEgEADAAQADAAAEAEQACACAAAEQAAAEgCADQgEADgDAAQgDAAgEgDg");
	this.shape_2.setTransform(24.1,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgHQAAgJAIAAQAIAAAAAOQAPgPATgBQAHABADAEQADAFAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_3.setTransform(17.7,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_4.setTransform(8.9,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_5.setTransform(-2.4,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_6.setTransform(-15.6,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAbArIgGgHIgOAHQgGACgDAAQgTAAgKgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAARQAAALABAGIAFAPIACAEIABABQAAADgCADQgDACgDAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKABQAHgBAGgDIAIgGQgDgVAAgKIABgJIABgJIgGgBIgDgBQgMAAgJAKg");
	this.shape_7.setTransform(-26.7,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgzBCQgDgDAAgDIACgbIACgaIgBgMIAAgPIABgTIABgUQgBgEADgCQACgCAEAAQADAAACACQADACAAAEIgCAUIgBAUIABAUIAjgGQAVgEAPAAIAAgkQAAgGADgGQACgKAGABQACgBADADQACACAAAEIAAADQgBAEgBAGIABAHIAAAIIgCAZIgBAXIABAUIABATQAAADgCACQgCADgEAAQgDAAgCgDQgDgCAAgDIgBgTIgBgUIAAgMQgNAAgVAFIgjAGIgBAWIgCAVQAAADgBADQgDACgEAAQgDAAgCgCg");
	this.shape_8.setTransform(-37.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.2,-13.8,92.4,27.7);


(lib.girls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape.setTransform(12.4,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIAAgdQAAgHAIAAQAHAAAAAHIAAAdIgBAbIgBAmIgBASQAAAJgGgBQgIABAAgJg");
	this.shape_1.setTransform(6.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_2.setTransform(0.7,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgDAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQADADAAADQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_3.setTransform(-5.5,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaA8QgKgCAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgPQAEgJAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgJQgJgLAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAaQgBAPgDAKQgDANgIAGQgJAHgRAAQgKAAgHgCgAgOgnQgHAKAAAOQAAAMAEAEQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_4.setTransform(-12.3,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-13.1,37.1,26.3);


(lib.boys = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape.setTransform(12.9,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUA9QgCgCAAgDQAAgIARglIgcg1IgEgGQgCgDAAgDQAAgDACgDQADgCADAAQAEAAABACQAOATAOAiIAMgbQAGgOAGgKQACgEAEAAQADAAADACQACADAAADIgBADIgbA6QgKAVgEAOIgFAPQgCAGgFAAQgEAAgCgCg");
	this.shape_1.setTransform(4.8,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_2.setTransform(-3.4,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_3.setTransform(-12.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-13.1,38.2,26.3);


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


(lib.CouchKidsNailingTwiggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("AgbAtIABgDIAAAEIgBgBgAgLAMIAEAAIgRAaIANgagAAIgQIACAAIgCAEIAAgEgAAbgtIABABIgCADIABgEg");
	this.shape.setTransform(333.1,-20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE0CC").s().p("AiKDlQgEhSA3hgQAeg1BDhkQACgIgDgIQgEgJAAgDQAQgIAfgYQAdgSAZAGQgCgDgQgHQgMgGABgNQAbgZAjAxIAAABQgFAAAAAKIAAADIgGAHIAFgFQgBAHgFADIgHACIABgBIgBABQgPALgYAHIgJADQhABfgdAxQg1BYgVBPQAbANArgLQAZgGAsgPQAJABAJAIIAUAVQg+AVgiAKQgrAMgjAAQgZAAgVgGgAgIiMQgLgKAGgTQACADAOAJQALAHABAKQgHAFgGAAQgFAAgFgFgAgCisQgOgXAQgRQAXAEAQA1IgMACQgUAAgJgTgAAji1QgOgRADgdQAZgEANAXQAJAPABATQgJAFgHAAQgMAAgJgMgAA/jjQAGgJANACQANADACAOQgSgBgHALQgIgFgBgPg");
	this.shape_1.setTransform(334.3,-23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996633").s().p("AhYAyQAegRA1gmQAxghAtgMQgLASgcAPQghAQgOAIIgsAdQgWAPgSAAIgHgBg");
	this.shape_2.setTransform(354.3,-49.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAFFFF").s().p("AAIAGQAJgMAAAPQAAAFgCAAIgBAAQgCAAgEgIgAgQgKIAGgDQABAFgGAAg");
	this.shape_3.setTransform(362.8,-65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3839").s().p("ACOB7IAKgNQAIAEgIAIIgIAJIgEACQgDgDAFgHgACEBdQAPgNAFgJQADAKgOAPQgNAOgPAFQAFgJAOgNgAgvhmQAPgSAVgEIgaAaQgPAQgHAPQgGgRASgSgAhch1QAQgUAMAIQgdAWgEAaQgLgPAQgVgAiXhsQAHgJAIACQgBAFgGAFQgHAEAAAFQgJgDAIgJg");
	this.shape_4.setTransform(358.6,-55.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AAhAZQgUgfgjgQQAIgXAPgHQAPgGARAJQAmAUgDAxQAGADAAgNQAAgGgBgCQAUAFgMAnQgMAkgUAUQAHgqgXgjgAgYg+QASgNADgKQADABABAHQABAHAEAAQgLAPgHAHQgMALgRAAQACgOAPgLgAgShlIABACQABAFADgFQACASgXARQgXAQgcACQAPgcA0gbg");
	this.shape_5.setTransform(363.1,-55.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgIATIAAglQAOAFACAPQADARgSAAIgBAAg");
	this.shape_6.setTransform(365.9,-51.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ak4G/QAAgNAMgJQAMgMASgBIACAAIAFABIAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQg/ASAaAAQAagBANgCQAOgCgDABIg4ANIgBAFQAAABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAIgCgEIgBAEIgBABIgBgEgAlIGMIAFAAIAAAAIgDADIgCgDgAiHDmQgggDgVgGQgOgPABgkIACgTIAAgDIADAAQANgjAdg1QAig/AKgVIgIAAIADgEIAFgBQAQgOATghQAWglALgMQgCgKgLgJQgOgLgCgEQgDgOAJgSQAHgSgEgRQAHgEATgCQAOgEgBgOQAPALAagJQAYgIAQAQICehlQABgHgEgGIgGgLQg0AFgQgZQATglAkgSQArgXAgAeQgBAPgIAFQAcAKATAaQASAZADAfQAEAfgOAZQgQAbghAMQAAgKAFgOQAFgOAAgKQgMABgJARQgIAQgPAAIAOgkQAHgWgGgPQgcAMg0AgQg5AlgaAQQgBAHAFAHQAGAIgBAGIgBABIAAAJQAAASgcANIgYAIIgRAOQgqAlgMAoIACACIgFAIIgCAAIAAADIgQAaIgDAAIAAAEIgQAYIgDgBIgNAbIgCADIAAABIgCADIACAAIAAAsIAYAKIgGAIIgBAAIgCATQgBgGgEgEQgBgGAAgHIAAgBIABgCIAAgEIgOAAQgCAJABAIIgBAAQgFgQAGgPQgBgTgCgHIgNAZQgXAqgEAlQBPAAAwgfQAKAJAKALIABABQgKgIgIgBQgtAPgYAGQgsAMgagOQAUhPA1hXQAfgxA/hgIAIgCQAYgIAPgKIABgBIgBABIAIgDQAEgDACgGIgGAFIAGgIIAAgDQAAgKAFAAIABAAIAAgBQgkgwgaAZQgCANANAFQAQAHACADQgZgGgdATQgeAXgQAIQgBAEAEAJQAEAHgCAJQhEBjgfA2Qg2BgADBRQAzAPBJgVQAkgKA9gUIAGAGIgKAEIgHgBQgOAAgWAPIgcAHIhTAWIgLgCgAg4iZQAKAJANgKQgBgKgLgHQgPgJgCgDQgFAUALAKgAgzi5QAOAXAcgGQgPg2gXgEQgSARAOAYgAgXjwQgDAcANASQAOATAXgNQgCgTgIgPQgMgTgSAAIgHABgAAOjwQABAPAJAEQAGgLASABQgBgOgOgCIgFgBQgJAAgFAIgACSkfQg2AngeARQAUAEAcgSIAsgdQAPgJAggQQAcgPALgSQgsAMgyAhgADxmLQgQAHgJAXQAkAQAVAfQAWAkgGAqQATgUAMglQANgmgVgGQACADAAAGQAAANgGgDQACgzgmgUQgJgFgJAAQgHAAgGADgAEEkXQATAAgDgRQgCgQgOgFgADXmWQgQAMgCAOQARAAANgLQAHgHALgPQgEAAgBgIQgBgHgEAAQgDAJgRANgADcm8Qg0AagOAcQAbgBAXgRQAXgQgBgSQgEAFgBgFQAGgBgBgEIgGADgAD1msQAEAJADgBQACAAAAgFQAAgIgCAAQgDAAgEAFgAg0BvIAFACIAAALQgEgFgBgIg");
	this.shape_7.setTransform(339.1,-21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgFgJQAMgLAKARIggASQgDgPANgJg");
	this.shape_8.setTransform(314.4,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAFFFF").s().p("AgEARQADgDADAFIgBABIgFgDgAAAgSQAEgCACACQABACgFAHQgOgCAMgHg");
	this.shape_9.setTransform(303.7,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#996633").s().p("AAmAaIgDgCIgkgQIgagNIgOgJIgJgGIgKgHQgPgLgMgNQATABAXANIABAAIAFADIAbATIALAGIAGAEIAvAXQAeAPAGATQgTgLgfgPg");
	this.shape_10.setTransform(321.3,9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC6600").s().p("AgyAOIADgBIgDADIAAgCgAgSAGIAFgCIgDADgAAOgCIAegJIgbALIgDgCgAAzgPIAAACIgDABg");
	this.shape_11.setTransform(354.9,10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE0CC").s().p("AiwCBQgIgWAngoQAUAVgOAYQgKASgRAAIgKgBgAiBBjQAAgNAJgFQAPAGgDAOQgEAOgTAFQABgDABgSgAjLBJQAIgPAQgKQAWAOgJAWQgIAUgaAMQgQgUANgXgAieA7QgfgQgHgZQgCAEACARQACAOgMAFQgjgLAYg2IABAAQADAFAIgFIADgCIAKACIgHgDQAGgCAFADIAGAFIgCAAIACAAQAQAGATASIAFAFIgSgBIAMAQIAPgEQBigYAygOQBggcBEgrIgBgCIADgEIADgEQAJgQADgYIAGgBIABAAQAHAAAEgEIADgBIACAAIADAAIAGADQADAFAHABQgDAagFAWIgEAMQgFAPgGANQgGAMgHAJIgLgEIgCAAIAAAAQgYAIggAIQhRAWgPAFIgRAGIheAYIgMADQgEADgDAEIgFgCIAFAEIgFAFQgGAHgDACQgPgKgkgPgAjrBFQgFgNAMgIQAIAQAMAAQABAKgMAIQgMAAgEgNgAAZBIICJgDQgeAEgjABIgKAAIg+gCg");
	this.shape_12.setTransform(353.7,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A3839").s().p("AjpC+QgLgCgDgIQAEgCAIADQAHAEAFgCQABAHgHAAIgEAAgAkPCPIgIgCIgCAAIAAgBIgFgBQgKgFAAgJQAQAGAOACQAPACAMgFIACAAQgHANgSAAIgJAAgAkZBhQgWgFgPgQIAkAKQAVAFARgCIgFAEIgFADQgGADgHAAQgGAAgIgCgAE2g1IgJgHIgGAHQgEgOAPADQAPACgCALIgDABQgDAAgDgDgAjJidQgSgGgKAAQAGgHAUAEQATAFAMAKQgKAAgTgGgAi0i0IgQgCQAAgKAKAEIANACIADADQgBADgGAAIgDAAg");
	this.shape_13.setTransform(336,8.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgzBOIgEgCIgMgHIgDgCIACgCQABAAAAgBQAAgBAAAAQAAAAAAgBQAAAAgBAAIgDgBQAKgGAOACIADABIAFACIAJADIABAAIAIAEIAKAHQAMAJAJAOIgDAAQgXAAgjgTgAgdA2IgEgCIgGgCQgQgGgIACQgCgDAGgFQAGgEgCgEQARACAJADIACAAIAAAAQAQAFAIAPQgFACgGAAQgHAAgIgDgAglAZQgNgKgBgSQgCgrAtgXQAAgGgLAGQgGADgBADQgFgVAmgIQAmgIAbAHQgoAPgUAlQgOAfACAkIAAACIAAADIgLABQgQAAgKgHg");
	this.shape_14.setTransform(310.8,5.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC9A67").s().p("AADAUIAFAIIgCABgAANAcIgSgcIgFgJIgGgOIgCgFIAlA4IgEABIgCgBg");
	this.shape_15.setTransform(298.8,5.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CCFF").s().p("AglASIAAABIAAABIgCAAIACgCgAAlgGIgHgJQADgDAFgBQACAHAAAHg");
	this.shape_16.setTransform(311.6,20.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgJgJQABgCADgCIAMATIADAIQgKgJgJgOg");
	this.shape_17.setTransform(301.7,10.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("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");
	this.shape_18.setTransform(337.3,11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF33CC").s().p("AhAAMQgEgMgOADQgVAFgEgBQAJgPAngNQAAgLgKgDIAQgHIAMAKQAjAVAogCQAGgMgDgOQAPAGAcgFQAkgIALABQgQAKgcALIgvASIAGAGQAEACAAAFQgHAHgLgDIgNgHIAFgEQgRACgUgEIgkgKQAPAPAWAFQAQADAKgEQABACAFACQAOAGgEAJQgDABgCAOIgWACQgOgBgQgHQAAAKAKAEQgHAEgCAHQgFgDgBgMQgBgPgDgEQhBAfgVAbQACgVA8gzgAAchAQAMgJAGgKQAGAGgHAOQgIAOgBAHQgCgKgGgMg");
	this.shape_19.setTransform(309.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(61));

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF00").s().p("AgkCbQARgXAfgHQARAggTAbQgTAbgkABQgLgfAUgagAgWCnQgGAEACAHQAJAEAFgLQAFgKgJgCQAAAEgGAEgAhiC3QACgmAdgSQAbgSAmAHQgCADghAfQgWAUgBAbQgTgPgTABgAkuCZQgMgNACgUQABgUAQgLQARgNAaAGQgOAPgEAWQgEAaAMATIgJAAQgTAAgMgLgAkKB4QAOgtA1AMQAFAxgrAXQgcgHgBgggAj0BzQgGAIAIAHQAMABAFgOQAFgOgNgCIgLAOgADhh6IgVgMIAdgoQAUgVAhAEQgXAUgMAaQgNAcAHAVQgIgTgMgHgAD8hpQgEgiATgWQASgWAZAGQAKAegTAZQgQAUgTAAQgHAAgHgDgAEPiPQAIADAGgIQAFgIgJgCQgBAHgJAIgABKiPQADgyAygDQALAXgTAWQgMANgPAAQgJAAgJgFgABpixQgIAFABAKQAHAAAHAEQgBgGALgLQAHgHgMgFQgBADgLAHgAAaiUQAEghAXgSQAZgUAiANIghAcQgSATAIAVIgBAAQgQAAgagKg");
	this.shape_20.setTransform(316.8,38.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#33CC66").s().p("Ak8D2QA9AkBTgnQAdgNAmgaIA6gnQgmA3hLAjQgrAUgkAAQgrAAgigdgAlGC8QAIgZAVgqQA3AKAjgbQAlgdgVgpQAcgbA/gwQA/gxAcgcQAJgBAFAIQAGAKADACQAYgKAFgFQAAgKgTgOQAKgSAWgKIApgNQAZgIALgLQAQgQAAgdQAdgdBFgCIABAAQA9AAAOAhQADAFABAHQgKgIgLgEQgLgEgLAAQgPAAgOAHQghAPgPAlQACAQAuAgQAAAEAMgFIARgIQgdAzhVBLQhiBXgdAkQAHgZAmgkIBCg2QAPgWAjgkQAkglAPgUQiKCPhOA/QgmgfgwAUQgwASgFAuQABALAPAEQATAFADAEQgQAXglAaQgoAdgoANQgeAKgWAAQg9AAgShEgAiGA/QAKAPABADQABAGgHAPQAZgFAQgdQAPgiALgOQgegFgMgBQgVgCgJASIAYAdIgGgBQgKAAgIAFgACHiTQAgAegSAbQAYABAQgUIAbgiQgJgbgegDIgGAAQgbAAgJAag");
	this.shape_21.setTransform(316,43.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CCFF").s().p("AJ6HwQhCgMglAAQgNgDgBgHQgjgggHhDQgGhFAhgmQATgRAhgPIA6gaQAPAEAtABQAoACAQAHQBOAoAECZIgCAHQgPAsguAdIgKAGIgYABQglAAgqgIgAJnFlQgNADgEANQgBAJAGALQAdAAAFgFIAAgYQgIgHgJAAIgFAAgAMzGgIAAgEQAGhog4g4Qg0g0hfAAQAVgHAZgWQAcgaANgHQAcgtAUiAQBGgwCNhvQCIhrBMgzQBtBWAUEjQAJAXAHAYIABABIgBAIQAAATAnBZQAmBZAAAmQhnAigQAAQhJAAgTgvQgLgbgFgGQgNgOgeAAQgjAAgXASQgTAUgFACQgTAOgXAJIggAPIhoA4IgjATIAAADIgWAQIAEgMgAJgFsIAYAAQACAHgEAGQgEAFABAGQgYgBAFgXgADPFCQiigQhMgiQgRgpAghFQgBgEAGgBQB3AKGsA5QgJAPgkAkQgeAlADAqQgzgKjOgWgAh4EYIgIgBIAAACIkggpQiLgVAAgaQAAgPAOghIAQgfIAOAEIAAAAIAEAAIAfAFIgMgEQBOABBQAGIh7gBQBIAGCEADIAMABIACAAIAAgBIBrABIAAADQAxADAnALQgPAcAEApQABAMAKAxQgRACgQAAQgYAAgXgEgA0LEVQhkgZgKhkQAJgTACgHQAHgJAJgQIAHgQIAIgKQAUgZAOgJQAmgVAtgCQArgBAlAQQBXAngEBaQgTBAhEAlQgTABgqAHQgkAGgZAAIgDAAgAz2CCQgMANAPAOQAIACAIgDQAJgEAEAAIAAgYQgJgFgHAAQgJAAgHAHgAxCDIQAOgbALADQgQgaAFgnQADgfAPgZQAQAGAvgDIABAAQAtAIAvAGQARAGAEAAQACAAADgDQAmAEAoACQAAACAAABQAAABAAABQAAAAAAAAQAAAAABgBIAEAAQCjAAAyAHQAUADAWAOIAEADQgbArAAAlIAAAQIjogEIgCAAIAAAAIgDAAIgBgBIAAABIhxgMIghgCIABgEQAAgDgEgCQhQAHAAAFIAAABQgxAJgaAfQACgNALgVgAIfDcQgFgKgHAAQiAgKjhgeQitgYhigLIAQAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAgBAAgBQgBgBg0gBIgwgBIhJgBQg7gOjEgBIgRgGIAEgFIgIgCIgDAEQgMgCgOgKQgKgGgUAAIgfgDQgCgBiwgCIAAgEIhAgGIgVgCIgBgCQgEgFgMgDQglgKh4AAQgHAAgCAEQgFADgFANQgIATAAASQg/hlh9AKQBCgcBAg/QBdjEBLhWQBNhaBjgnIAAgCIANgFQAYgHAqAAIMJACQAKAEALAAICTAEIAAAHQCQACEAAIIAAAAQAHgCAMAAQAeACAFgBQgEAIgJAMQgIANACAPQAGASAXgEQgOAUgUAOQgYgJgKgUIAGgkQABgIgFgJIgbgHIgkAPQgLAOATgFQAUgFADAFIgqAJQAAAPAJAIQAGAFASAIQAkAQADAcQh+BphCAxQhkgOgPA5QgCAOAHAMQAIAOABAJQgNARgVAyQADBiBrgDQA1gLAzgjIBUg/QARAAAWgPQAug5B6hyQBwhqAzhFQAFAFAMAAIAWgBQAAAFgEAJQgDAHACAIQAXACABgLQgBANABAeQAJAHAigRQANACgKAIQgPAMADAHQASAFAfgRQAigSAXABQgBAOgRAKQgWAJgIAGQgXAQg1AuQgzAsgbATQiLBshJAzQgIAfgNA+QgNA3gTAdQhhBIgvATIgBAAQgIAAgDgJgAzzCTQgDgJAFgDQAHgFABgCQAMABgCASg");
	this.shape_22.setTransform(252.4,66.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9999FF").s().p("AhigdIAAAAQAPgDAIgDQAJgEABgDQAgACAwgOQBBgRAcgBQACgGAbgFQAPgEgBgCIATgFQABAPAEAoQAEAzgNAVQggAKhdATQhPARgpAQQgMgkgHhYgAg9ASQAAAYALAFQACgHgGgRQgEgOAIgFQAIADAHARQAIAQALACQgHgKACgZQABgXgLgIQAAADABATQABANgGACQgSgXgLgKQABAFACAhgAgGACQAAATgGAHQAKABABgRQABgQAMAEQAIAAAEANQAFANAHACQgKgughgLIABAfgAApgdQABALgBAVQAAAQAJgBQgBgDACgaQABgSgLAAIAAAAgACSgYQgBAOgQAJQgSAKgDAJQApgQAHgfQgGgFgSAAQgUABgJgBQAAgJAMgDQAOgEADgDQgngCAFAaQAEABAXgBIAFgBQANAAADAGgABDgOQAEAMgHAGQAQgBAXgNQgHgBgHAEQgHAEgIgCIAAgWQgBgLgJgBQgCAJAFAQgAhvA6QgNgHgIAKIgRgVQgLgMgPAAIAAh3QA4AuAQALQgBBOALAbQgKgJgIgEgAACgKQAFgMACANQABAGgBAAQgCAAgFgHg");
	this.shape_23.setTransform(428.9,70.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AHmCYQAIAOgJAVQgGAOgfAlQARg+AVgYgAHxC+QARgSABgUIANAAQAGgBAAgEQAJAZgSAYQgRAXgaAFQgBgQAQgSgAGZDIIgcgYQADgEARgIQANgGAAgLQAGALgFAWQgCAJAeABQAAAGgEAJQgCAKACAJQgNgIgRgQgAIfDCQAJgMAMgCIgJAJQgFAFgBAGQAJgCAbgHQARgEAJADQADgKADAAQADgJgJAAQgKAAABgFQAqgFAUgLIAfAMIAEACIAFACIADABIg4AKIAEgGIgSAJIgEABIAAABIgVAJIgBgBIABABQgvAUgjADQACgCALgSgAJ2CIIAcALQgZALgQADQAGgOAHgLgAq9BAQABgFgGABQgCgIALACQALACgGAIgAqsAvQgCgIgGABQAEgJAIAGIANAIQgBACgFACQgEACAAAEIAAAAQgFAAgCgIgArCAaQAFgLATACQAUACAEAMIgPAAQgUAAgNgFgAmnhsQACgFAIgHQAIgHACgFQALAHgIALQgGAIgIAAQgEAAgFgCgAoth7QAJgOgCANQgBAHgCAAQgBAAgDgGgAo3iEQANgJgLALIgGAEIAEgGgApii+QAJAFAKAQQAMAUAIAHIgGABQgSAAgPgxgAmwihQAHgVATAFQASAEAJARQgCAHgLAAQgNAAgbgMgAqEi5QAGgEAUgHQAQgGAHgHQgTAZgVAAIgJgBgAqNjRQAGgBARgEQAOgEAQgBQgFANgWAIQgHADgFAAQgMAAgCgOgAqLjmQAigIAGABIAQAEQAAAKgaACQgDgFgUAFIgHABQgJAAAJgKg");
	this.shape_24.setTransform(374.2,44);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AhTA/QAAgGALABQAQABACgBQAAgGgKABIgOAAQgEgQAOgCQAIgCAUABQgCAKgHAGQgEADgBAFIAAAFQgGgBgLAEIgEABQgEAAgEgEgAAmAqIgFgWIAEABIAFgBQAAAFgBAEQAJgBANAHQAOAJgHAJQgDAAgGgNQgFgKgFAJQAQASgMABQgMgCgFgOgAiXAnQAWgbAbgCQgRAdgcAAIgEAAgABQAMQAJgRATAGQgBALgMAJQgNALgDAHQgGgKAHgRgAgYAiQgHgJABgKQAIAEACAFQAAABAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIACAAQgBAIAGACQgDAFgDAAQgDAAgEgFgAhJAdQAHgIAVgBQgDgIgKADIgPAFQgCgKAGgIIAKgKQgBgEgGgBIgMAAQgGABADAFQADAFgFADIgWAAQgMgBgFgDQACgGAMAAQASACACgBQABgGgKABQgNABgCgBQANgKAtAAQAAAOAIANQAJASACAHQgHgGgKADQgLAEgHAAIgDgBgAhnAXQAJgGgEgHQAKADgFAIIgJAIQgHgCAGgEgABGgXQAHAHgDAQQgEAPAFAFQgIgBgCAFQgHgEAMgrgAgQALIAAgCIATAAQARACABAJIgIABQgNAAgQgKgAAbgMIgBgBQgCgCAAgDIABgBQgZAMgLgUQABgDAPgIIAFgDIgBgDIgBgCQACgDANAAIACAAQAWAAABAMIAAABQAAAJgQANIgDADIgCgBgACCgWQgHgLgFgEQAEgFAKAFIAEACQANAIADAJIgIABQgJAAgFgFgAgygqQABALgLACQgEABgTABQAEgLAdgEgAhPgxQAagIADgEQAIAKgWAGQgaAGgDAHQgHgKAVgHgABJgyQgZgGgHAAQAGgLAUABQALABAVAEQgDALgPAAIgIAAg");
	this.shape_25.setTransform(425.5,55.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AApDfQgugEg3APIA0gqIA8gyIAHgFQA/gxBBgYQgbA8ghBhIgXAbQgSgUgtgFgAh4DFIgGgDIgOgFQgEAAgCADIgFAAQgggCgDgBIBQg7QAxgkAdgaQAHABAKAFIASAIQhBBCgyAuIgEAEIgIgBgAi6gfQAeAAAfgQIACAAQACAAALgJIAEgCIAQgMIgBABIADgDQAJAJAWANIgFAIQgTAZgpANQgOAEgLAAQgfAAgIgfgAgQiEQAQgYAGgZQACAdgHARIgJAbQgTgIALgQgAgCjUIAAgBQgPgWAKgMIARAJQAOAHgDASQABAJgCAJIgFABQgOAAgDgSgAAjjMQAEgCABgJQABgKAbgMIgOAYIAAABQgOAOgBADQgIgHAEgCg");
	this.shape_26.setTransform(385.8,-1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3A3839").s().p("ACRPEIACgBIAAADIABADQgDACABAEQgLgFAKgGgAFEMAQABgJAIAGQAIAGgDAHQgIgIgGgCgAFZLoQAIgIAJAEQAAAEgIACQgHACAAAGQgJgDAHgHgAEFKSQAEgOAAAOQAAAHgBAAQgBAAgCgHgAGaKSQACgMARACQADAJgHABIgPAAgAFYKOQgDgBAAgEQAAgDADgBQADgCAFAFQgEAGgDAAIgBAAgAE6J1QgEAJgPABQABgMASACgADjJwQgBADgXAHQABgLAXABgAHnJnQAFgMACANQABAGgCAAQgBAAgFgHgAGnJlQgHgHAXAEQgEAGgFAAQgDAAgEgDgADjHlQAEgOANgCQAMgDAKAJIAAAYQgFAFgdAAQgGgKABgJgAEAHzQgBgFAEgGQAEgGgCgHIgYAAQgEAXAXABgA5mEMQgPgNAMgOQANgNATALIAAAZQgEAAgJADQgFACgEAAIgHgBgA5kD2QgFAEADAJIAUAAQACgSgMgCQAAACgIAFgATADsQgFgKASAKQgFAGgDAAQgDAAgCgGgAY/CVQAEgKAKAAQgDAKgKAAIgBAAgAZhB3QAIgFAGABQgFAGgKAEQgIgBAJgFgASbByQgHgIAXAFQgEAGgFAAQgDAAgEgDgAZJBiQAJgHAKAAQgCAEgJAFQgIAEAAAHQgKgGAKgHgAQIBlQACgKAMAAQgEAKgKAAIAAAAgAYKAzIgDgCIAJADIgGgBgAYUAtIAFgCIgBAEIgEgCgAYAAjIAAgBQAGAAACAFIgIgEgAD3AJQgCgHAFgDQAGgFAAgEQAJADgEAJQgEAIgGAAIgEgBgAAegmQgHgIAGgIIALgNQANACgFAOQgFANgLAAIgCAAgAIhk5QAIgHABgHQAJACgFAHQgEAGgFAAIgEgBgAF0lMQgBgKAIgFQALgGABgDQAMAEgHAIQgLAKABAHQgHgFgHAAgAMNmUIAEAAIgFAAIABAAgATAmzIABAAIAAAAgAKRp3IADABIgDABgAKUruQgCgHAGgEQAGgEAAgEQAIABgFAKQgEAIgGAAIgDAAgAM/vNIAEgBIgCADIgCgCg");
	this.shape_27.setTransform(289.4,55.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FAFFFF").s().p("AFKGfQgBgKABgIQAHgUgCAnQgCAFgBAAQgBAAgBgGgAGbGNQAIgLAHgEQAIgHgbAkQgFgDAJgLgAHQF/QAOgFALAAQgEAFgMACQgOAEgEADQgGgEAPgFgAHhFiQAFgJAIAEQgCAGgIAIQgJgCAGgHgAEyFhQAEgOAAAOQAAAIgBAAQgBAAgCgIgAF5FXIABgEQAFABgFAEgAEzFQQAGgIgCgEQAJABgJATQgIgCAEgGgAkxAQQABAIgGADIgOADQgCgRAVADgAjtABQAAAMgNACIgaABQAHgQAgABgAl0gMQAEgOAAAOQAAAHgBAAQgBAAgCgHgAnsliQgCgXAMgMQAMgLASABQASABAMALQANAOgBATQgKAWggACIgDAAQgeAAgHgYgAnLlYIAAAEQACAEAHAAQAKAAAAgHQAAgIgLAAQgIAAAAAHgAmCldQgZgcAYgbQAYgbAiAUIAEAIQACAGAEAAQAFAggXANQgNAHgOAAQgLAAgLgEgAl0loIABABIAAABQAAABAAAAQABABAAAAQAAAAAAABQABAAAAAAIAAABQABADAFAAQAIAAAAgIQAAgJgHAAIAAAAIgCAAQgIAAAAAIg");
	this.shape_28.setTransform(386,23.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE0CC").s().p("ACoHNQgMgBgDAKQgKgNgHgeQAGABALAAQAKAAADgCQAgAJAigFIAEAAIADAAQAMgBALgLQAMgLAAgGQgEgOgFgJIABgBIgDgCQgIgRgLAAIgBABIgsgmQg2gvgogUQgJhXgxhFQABgPAEgKIALgNQAIgIAAgCIAAgBIBIhdIA3AEQAdADAIARQgKgIgKAIQgPAUguAzQgnArgUAeIBWB6QApA0AmAbIgBADQAAADAKAKIASAPQAaAYAAAdQABAgglAJIgeAIIgCgDQgNAEgPAHQgVAIgJAAIgBAAQgNAAgFgNgAhWAoIAcgWQgKgDgZAPQgaAPgVgDQAngcAigGQgMgLgbAOQgkAUgHABQgIgUAjgHQApgIAEgMQgNgVgcAQQgQAJgGACQgMADgHgJQAUgWAwADQAqADAeAQQAZgSAjgfIACgDIAMgKIAsgtQAkglAbgbIACgBQAggeATgOQhEhAhVg3QgBgHgFAAIgCACIgCgBIAAADIgXATIgHAGIgPAHQgeANgPAAIgUgVQgLgMACgKQgVADgaAOIgrAYIgDABQgUAKgUAEQgeAFgcgKIgHgDIgTAGIgUgVIAEACQALALAKACQADgFgQgJQgTgMgCgIQAMgJAUAIQANAFAKACQAHAAAGgBQAOgJAAgJIAAgBQgBgDgIAEIgGAFQgHAEgFgBQgEgBgDgIQAKgGAXgBQAhgCAHgBQAvgJgJg6QAUgJAsgeQAngSARAqQgFAigrAKQAEAJAQgFQATgGAJAGQAwg7CBACQABAPgJANQgLAMgFAIQgKACgHgHQgIgJgEgBQAYAkBEAyQBXBBASARQAEA8gqgCQAAADAPACQgSASgxAlIhAAtIgMAJQhMA2gfAwQgWAKgMAEQgVAIgRgIQgHADgSANQgOALgOACQAHgNASgNgAjSlNQghAMACASQALgPAbgIIAugKIADgBIgDgBQgJgDgJAAQgQAAgTAIgAhDmxQgFgGACgLQADgJgFgDIgPAMQgJAKAJAHQACgGAIgEQABAFAJAFgAgjgeQgIgGgKACQADgIAMgKQAMgKACgKQAQgBAMABQAEAFAJAAQABADAGABIgrAnIgBAAQgHAAgIgGgACgjCQgOgKgHgCQgOgDgGgDQAGgggYgMQgggKgMgIQAOgdAUgCQAQgCAUAMQAMAIAaAXQAYAVAMAHIgpAqgAEgkEQgKgUgfgVIg5giQgfgVgLgUQAPgkAFgoQBKARAsA9QAlAyAWBYQgHAegzAEQAPghgOgZgAkSmlQgGgJgJACQAVgLAxgOIADgBQgkAUgIAUIgCAAQgHAAgFgHgAlYmwIADgIIACgDQAFAHARAAQAAAHgIADQgLACAAAFQgGgFgCgIg");
	this.shape_29.setTransform(371,26.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC6600").s().p("AidBKIAAgJIADgEQAOgWAWgKQAAAFgIAKIgPAUIgGAKgAh7AsIABACQgKAOgGAIQAGgQAJgIgAicAyQAAgNgGgCIAAgEIACgEIARgaQAOAAARgJIAKgHIAAADIABAMQgFAKgLAKIgcAWIgLALIAAgDgAhKANQgGAFgGgIIgHgKIABgMIAAgKIAQgLQA0gmAtAFQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQALgGAUAKIAfAQQgBAHgEAHQgCABgRAQQgQARgNgDQgMgDgNAGQgfAQggADQgJgJgHAGgAAyAFQAOgHANgRQAHgKAOgWIAFgEQAGAEAJABQAIABAKgBQAEABAJAJIAEAEQAGAHAEAKQgLACgPAHIgvAUQgKADgIAAQgOAAgIgIgABcgJQgGADACAHQAIACAFgJQAEgLgHgBQAAAEgGAFgAiBgSIABgFIADgEIAWAAQgCAEgLADQgLABgBAGQgEgBADgEgAhjgtQgJgCgBgFIACgEIASAKQABADgDAAIgIgCg");
	this.shape_30.setTransform(346.7,-19.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("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");
	this.shape_31.setTransform(279.5,47.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AHmCYQAIAOgJAVQgGAOgfAlQARg+AVgYgAHxC+QARgSABgUIANAAQAGgBAAgEQAJAZgSAYQgRAXgaAFQgBgQAQgSgAGZDIIgcgYQADgEARgIQANgGAAgLQAGALgFAWQgCAJAeABQAAAGgEAJQgCAKACAJQgNgIgRgQgAIfDCQAJgMAMgCIgJAJQgFAFgBAGQAJgCAbgHQARgEAJADIABABQgvAUgjADQACgCALgSgAJjC+QADgKADAAQADgJgJAAQgKAAABgFQAqgFAUgLIAfAMIAEACIAFACIADABIg4AKIAEgGIgSAJIgEABIAAABIgVAJgAJ2CIIAcALQgZALgQADQAGgOAHgLgAq9BAQABgFgGABQgCgIALACQALACgGAIgAqsAvQgCgIgGABQAEgJAIAGIANAIQgBACgFACQgEACAAAEIAAAAQgFAAgCgIgArCAaQAFgLATACQAUACAEAMIgPAAQgUAAgNgFgAmnhsQACgFAIgHQAIgHACgFQALAHgIALQgGAIgIAAQgEAAgFgCgAoth7QAJgOgCANQgBAHgCAAQgBAAgDgGgAo3iEQANgJgLALIgGAEIAEgGgApii+QAJAFAKAQQAMAUAIAHIgGABQgSAAgPgxgAmwihQAHgVATAFQASAEAJARQgCAHgLAAQgNAAgbgMgAqEi5QAGgEAUgHQAQgGAHgHQgTAZgVAAIgJgBgAqNjRQAGgBARgEQAOgEAQgBQgFANgWAIQgHADgFAAQgMAAgCgOgAqLjmQAigIAGABIAQAEQAAAKgaACQgDgFgUAFIgHABQgJAAAJgKg");
	this.shape_32.setTransform(374.2,44);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FAFFFF").s().p("AFKGfQgBgKABgIQAHgUgCAnQgCAFgBAAQgBAAgBgGgAGbGNQAIgLAHgEQAIgHgbAkQgFgDAJgLgAHQF/QAOgFALAAQgEAFgMACQgOAEgEADQgGgEAPgFgAHhFiQAFgJAIAEQgCAGgIAIQgJgCAGgHgAEyFhQAEgOAAAOQAAAIgBAAQgBAAgCgIgAF5FXIABgEQAFABgFAEgAEzFQQAGgIgCgEQAJABgJATQgIgCAEgGgAkxAQQABAIgGADIgOADQgCgRAVADgAjtABQAAAMgNACIgaABQAHgQAgABgAl0gMQAEgOAAAOQAAAHgBAAQgBAAgCgHgAnsliQgCgXAMgMQAMgLASABQASABAMALQANAOgBATQgKAWggACIgDAAQgeAAgHgYgAnClyIAAAEQACAEAHAAQAKAAAAgHQAAgIgLAAQgIAAAAAHgAmCldQgZgcAYgbQAYgbAiAUIAEAIQACAGAEAAQAFAggXANQgNAHgOAAQgLAAgLgEgAlqlwIAAAAIAAAAgAljmDIABACIAAAAQAAABAAABQAAAAAAAAQAAABABAAQAAAAABABIAAAAQABAEAFAAQAHAAAAgIQAAgKgHAAIAAABIgBgBQgIAAAAAIg");
	this.shape_33.setTransform(386,23.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("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");
	this.shape_34.setTransform(279.5,47.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3A3839").s().p("ACRPEIACgBIAAADIABADQgDACABAEQgLgFAKgGgAFEMAQABgJAIAGQAIAGgDAHQgIgIgGgCgAFZLoQAIgIAJAEQAAAEgIACQgHACAAAGQgJgDAHgHgAEFKSQAEgOAAAOQAAAHgBAAQgBAAgCgHgAGaKSQACgMARACQADAJgHABIgPAAgAFYKOQgDgBAAgEQAAgDADgBQADgCAFAFQgEAGgDAAIgBAAgAE6J1QgEAJgPABQABgMASACgADjJwQgBADgXAHQABgLAXABgAHnJnQAFgMACANQABAGgCAAQgBAAgFgHgAGnJlQgHgHAXAEQgEAGgFAAQgDAAgEgDgADjHlQAEgOANgCQAMgDAKAJIAAAYQgFAFgdAAQgGgKABgJgAEAHzQgBgFAEgGQAEgGgCgHIgYAAQgEAXAXABgA5mEMQgPgNAMgOQANgNATALIAAAZQgEAAgJADQgFACgEAAIgHgBgA5kD2QgFAEADAJIAUAAQACgSgMgCQAAACgIAFgATADsQgFgKASAKQgFAGgDAAQgDAAgCgGgAY/CVQAEgKAKAAQgDAKgKAAIgBAAgAZhB3QAIgFAGABQgFAGgKAEQgIgBAJgFgASbByQgHgIAXAFQgEAGgFAAQgDAAgEgDgAZJBiQAJgHAKAAQgCAEgJAFQgIAEAAAHQgKgGAKgHgAQIBlQACgKAMAAQgEAKgKAAIAAAAgAYKAzIgDgCIAJADIgGgBgAYUAtIAFgCIgBAEIgEgCgAYAAjIAAgBQAGAAACAFIgIgEgAD3AJQgCgHAFgDQAGgFAAgEQAJADgEAJQgEAIgGAAIgEgBgAAegmQgHgIAGgIIALgNQANACgFAOQgFANgLAAIgCAAgAIhk5QAIgHABgHQAJACgFAHQgEAGgFAAIgEgBgAF0lMQgBgKAIgFQALgGABgDQAMAEgHAIQgLAKABAHQgHgFgHAAgAMNmUIAEAAIgFAAIABAAgATAmzIABAAIAAAAgAKRp3IADABIgDABIAAgCgAKUruQgCgHAGgEQAGgEAAgEQAIABgFAKQgEAIgGAAIgDAAgAM/vNIAEgBIgCADIgCgCg");
	this.shape_35.setTransform(289.4,55.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFE0CC").s().p("ACoHNQgMgBgDAKQgKgNgHgeQAGABALAAQAKAAADgCQAgAJAigFIAEAAIADAAQAMgBALgLQAMgLAAgGQgEgOgFgJIABgBIgDgCQgIgRgLAAIgBABIgsgmQg2gvgogUQgJhXgxhFQABgPAEgKIALgNQAIgIAAgCIAAgBIBIhdIA3AEQAdADAIARQgKgIgKAIQgPAUguAzQgnArgUAeIBWB6QApA0AmAbIgBADQAAADAKAKIASAPQAaAYAAAdQABAgglAJIgeAIIgCgDQgNAEgPAHQgVAIgJAAIgBAAQgNAAgFgNgAhWAoIAcgWQgKgDgZAPQgaAPgVgDQAngcAigGQgMgLgbAOQgkAUgHABQgIgUAjgHQApgIAEgMQgNgVgcAQQgQAJgGACQgMADgHgJQAUgWAwADQAqADAeAQQAZgSAjgfIACgDIAMgKIAsgtQAkglAbgbIACgBQAggeATgOQhEhAhVg3QgBgHgFAAIgCACIgCgBIAAADIgXATIgHAGIgPAHQgeANgPAAIgUgVQgLgMACgKQgVADgaAOIgrAYIgDABQgUAKgUAEQgeAFgcgKIgHgDIgTAGIgUgVIAEACQALALAKACQADgFgQgJQgTgMgCgIQAMgJAUAIQANAFAKACQAHAAAGgBQAOgJAAgJIAAgBQgBgDgIAEIgGAFQgHAEgFgBQgEgBgDgIQAKgGAXgBQAhgCAHgBQAvgJgJg6QAUgJAsgeQAngSARAqQgFAigrAKQAEAJAQgFQATgGAJAGQAwg7CBACQABAPgJANQgLAMgFAIQgKACgHgHQgIgJgEgBQAYAkBEAyQBXBBASARQAEA8gqgCQAAADAPACQgSASgxAlIhAAtIgMAJQhMA2gfAwQgWAKgMAEQgVAIgRgIQgHADgSANQgOALgOACQAHgNASgNgAjxkvIADgDQAVAGAdgLQAdgLACgOIADgBIgDgBIAAgDIgDACIgDAEQgLAKgVAGIgoAKIgGABIAAACIAAAAIAAADgAhDmxQgFgGACgLQADgJgFgDIgPAMQgJAKAJAHQACgGAIgEQABAFAJAFgAgjgeQgIgGgKACQADgIAMgKQAMgKACgKQAQgBAMABQAEAFAJAAQABADAGABIgrAnIgBAAQgHAAgIgGgACgjCQgOgKgHgCQgOgDgGgDQAGgggYgMQgggKgMgIQAOgdAUgCQAQgCAUAMQAMAIAaAXQAYAVAMAHIgpAqgAEgkEQgKgUgfgVIg5giQgfgVgLgUQAPgkAFgoQBKARAsA9QAlAyAWBYQgHAegzAEQAPghgOgZgAkSmlQgGgJgJACQAVgLAxgOIADgBQgkAUgIAUIgCAAQgHAAgFgHgAlYmwIADgIIACgDQAFAHARAAQAAAHgIADQgLACAAAFQgGgFgCgIg");
	this.shape_36.setTransform(371,26.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("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");
	this.shape_37.setTransform(279.5,47.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("ACNDfQgvgEg4APIA0gqIA9gyIAIgFQA/gxBBgYQgbA8ghBhIgXAbQgSgUgtgFgAgUDFIgHgDIgOgFQgDAAgCADIgFAAQghgCgDgBIBQg7QAxgkAdgaQAHABAKAFIASAIQhBBCgxAuIgFAEIgHgBgAhXgfQAeAAAfgQIACAAQADAAALgJIADgCIAPgMIAAABIACgDQAJAJAXANIgGAIQgTAZgoANQgOAEgLAAQgeAAgJgfgAkWgkIgIgGQARgEA4gdQgOAtggAAQgKAAgJgGgABSiEQARgYAHgZQABAdgHARIgKAbQgTgIALgQgABhjUIAAgBQgQgWAKgMIASAJQAOAHgDASQABAJgCAJIgEABQgOAAgEgSgACGjMQAFgCABgJQAAgKAcgMIgOAYIgBABQgOAOgBADQgIgHAEgCg");
	this.shape_38.setTransform(375.8,-1.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFE0CC").s().p("ACoHNQgMgBgDAKQgKgNgHgeQAGABALAAQAKAAADgCQAgAJAigFIAEAAIADAAQAMgBALgLQAMgLAAgGQgEgOgFgJIABgBIgDgCQgIgRgLAAIgBABIgsgmQg2gvgogUQgJhXgxhFQABgPAEgKIALgNQAIgIAAgCIAAgBIBIhdIA3AEQAdADAIARQgKgIgKAIQgPAUguAzQgnArgUAeIBWB6QApA0AmAbIgBADQAAADAKAKIASAPQAaAYAAAdQABAgglAJIgeAIIgCgDQgNAEgPAHQgVAIgJAAIgBAAQgNAAgFgNgAhWAoIAcgWQgKgDgZAPQgaAPgVgDQAngcAigGQgMgLgbAOQgkAUgHABQgIgUAjgHQApgIAEgMQgNgVgcAQQgQAJgGACQgMADgHgJQAUgWAwADQAqADAeAQQAZgSAjgfIACgDIAMgKIAsgtQAkglAbgbIACgBQAggeATgOQhEhAhVg3QgBgHgFAAIgCACIgCgBIAAADIgXATIgHAGIgPAHQgeANgPAAIgUgVQgLgMACgKQgVADgaAOIgrAYIgDABQgUAKgUAEQgeAFgcgKIgHgDIgTAGIgUgVIAEACQALALAKACQADgFgQgJQgTgMgCgIQAMgJAUAIQANAFAKACQAHAAAGgBQAOgJAAgJIAAgBQgBgDgIAEIgGAFQgHAEgFgBQgEgBgDgIQAKgGAXgBQAhgCAHgBQAvgJgJg6QAUgJAsgeQAngSARAqQgFAigrAKQAEAJAQgFQATgGAJAGQAwg7CBACQABAPgJANQgLAMgFAIQgKACgHgHQgIgJgEgBQAYAkBEAyQBXBBASARQAEA8gqgCQAAADAPACQgSASgxAlIhAAtIgMAJQhMA2gfAwQgWAKgMAEQgVAIgRgIQgHADgSANQgOALgOACQAHgNASgNgAjKlRIguAUQAAAGAKAHQALAIAQAAQAXAAASgVQAOgRAAgLQgBgJgFAAQggAPgIACgAidlQIADgBIgDgBIAAACgAhDmxQgFgGACgLQADgJgFgDIgPAMQgJAKAJAHQACgGAIgEQABAFAJAFgAgjgeQgIgGgKACQADgIAMgKQAMgKACgKQAQgBAMABQAEAFAJAAQABADAGABIgrAnIgBAAQgHAAgIgGgACgjCQgOgKgHgCQgOgDgGgDQAGgggYgMQgggKgMgIQAOgdAUgCQAQgCAUAMQAMAIAaAXQAYAVAMAHIgpAqgAEgkEQgKgUgfgVIg5giQgfgVgLgUQAPgkAFgoQBKARAsA9QAlAyAWBYQgHAegzAEQAPghgOgZgAkSmlQgGgJgJACQAVgLAxgOIADgBQgkAUgIAUIgCAAQgHAAgFgHgAlYmwIADgIIACgDQAFAHARAAQAAAHgIADQgLACAAAFQgGgFgCgIg");
	this.shape_39.setTransform(371,26.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("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");
	this.shape_40.setTransform(279.5,47.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FAFFFF").s().p("AFKGfQgBgKABgIQAHgUgCAnQgCAFgBAAQgBAAgBgGgAGbGNQAIgLAHgEQAIgHgbAkQgFgDAJgLgAHQF/QAOgFALAAQgEAFgMACQgOAEgEADQgGgEAPgFgAHhFiQAFgJAIAEQgCAGgIAIQgJgCAGgHgAEyFhQAEgOAAAOQAAAIgBAAQgBAAgCgIgAF5FXIABgEQAFABgFAEgAEzFQQAGgIgCgEQAJABgJATQgIgCAEgGgAkxAQQABAIgGADIgOADQgCgRAVADgAjtABQAAAMgNACIgaABQAHgQAgABgAl0gMQAEgOAAAOQAAAHgBAAQgBAAgCgHgAnsliQgCgXAMgMQAMgLASABQASABAMALQANAOgBATQgKAWggACIgDAAQgeAAgHgYgAnVlrIABADIADAAIAJgEQANgHACADQACgDgLAAQgTAAAAAIgAmCldQgZgcAYgbQAYgbAiAUIAEAIQACAGAEAAQAFAggXANQgNAHgOAAQgLAAgLgEgAlqlwIAAAAIAAAAgAl4l+QAAADAGAAIAIgCQAOgBAAgCQAAgDgKAAgAlamKIABgBIgBAAg");
	this.shape_41.setTransform(386,23.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("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");
	this.shape_42.setTransform(279.5,47.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).to({state:[{t:this.shape_34},{t:this.shape_30},{t:this.shape_29},{t:this.shape_33},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_32},{t:this.shape_23},{t:this.shape_22},{t:this.shape_20},{t:this.shape_21}]},11).to({state:[{t:this.shape_37},{t:this.shape_30},{t:this.shape_36},{t:this.shape_33},{t:this.shape_35},{t:this.shape_26},{t:this.shape_25},{t:this.shape_32},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},5).to({state:[{t:this.shape_40},{t:this.shape_30},{t:this.shape_39},{t:this.shape_33},{t:this.shape_35},{t:this.shape_38},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_20},{t:this.shape_21}]},7).to({state:[{t:this.shape_30},{t:this.shape_42},{t:this.shape_39},{t:this.shape_41},{t:this.shape_35},{t:this.shape_38},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_20},{t:this.shape_21}]},5).to({state:[{t:this.shape_37},{t:this.shape_30},{t:this.shape_36},{t:this.shape_33},{t:this.shape_35},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},4).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},10).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(111.7,-68.5,342.5,221.4);


(lib.PresentParticipleDiagrams2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEA9QgDgDAAgEQAAgCACgDQACgCADAAQACAAADAFQADADAAADQAAADgCACQgCACgDAAQgCAAgDgEgAgFAdIAAgKIAAgJIAAghIAAgiQAAgHAGAAQAHAAAAAHIAABWQAAAHgHAAQgGAAAAgHg");
	this.shape.setTransform(378.3,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_1.setTransform(372.5,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAuQgCgCAAgEIgCgcIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBANIgBANIABAHIABAGQAAADgDACQgCACgDABQgJAAAAgVIABgNIAAgOIAAgMIgBgNQAAgRAIAAQADAAADADQACACAAADIAAAFIgBAEIAAAJQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgFAGgEQAGgDAIABQANgBAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAUQAAAEgDACQgCACgDAAQgCAAgDgCg");
	this.shape_2.setTransform(362.7,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQgBADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgKAAgJAJg");
	this.shape_3.setTransform(352.3,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_4.setTransform(344.5,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaA8QgKgBAAgHQAAgGAHAAIAJABQAHABAHAAQAOAAAGgPQAEgJAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgJQgJgLAAgNQAAgWAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIgBAAAKIgBAOIgDAQIgBAZQgBAPgDAKQgDANgIAGQgJAHgRAAQgKAAgHgCgAgOgnQgHAKAAAOQAAAMAEAEQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOAAgIAKg");
	this.shape_5.setTransform(336.1,21.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgIgKAAgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgBACgDAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_6.setTransform(327.9,19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgDAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQACgDAEAAQADAAADADQADADAAADQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_7.setTransform(321.7,17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbA1QgLgKAAgSQAAgVALgMQALgMARAAQAJAAAFADIAHAFQABghACgLQABgHAGAAQAHAAAAAHIgDAwIgBAWQAAAbACANIAAACQAAADgBABQgDADgDAAQgFAAgCgHQgFAEgHACQgFACgGAAQgRAAgKgLgAgRACQgHAHAAAPQAAALAHAHQAHAHAKABQAFgBAFgCIAJgGIACgDIgBgOIAAgJIABgJQgDgGgFgCQgFgEgHABQgMAAgGAHg");
	this.shape_8.setTransform(314.5,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADABACABQACADAAADQAAAIgOAGQgMAGgLAAQgRgBgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_9.setTransform(300.8,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAiQgMgKAAgRQAAgOALgSQAMgSANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCACgDABQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgDQgEgEgLAAQgHAAgHAPQgHANAAAIQAAALAHAGQAGAFAJAAQAFAAAFgDIAJgEIAEgBQADAAACACQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_10.setTransform(292.2,19.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQABgRgHAAQgJAAgGAKQgIAKgDAOIgBAHIgBAIIABAHIAAAHQAAAEgCACQgCACgDAAQgEAAgCgCQgDgCABgEIgBgHIAAgHIABgWIABgWIgBgHIAAgIQAAgDACgCQADgCADgBQAIAAAAALIABAJQANgSAMAAQAMAAAGAMQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCADQgCABgDAAQgHAAgBgHg");
	this.shape_11.setTransform(284.1,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADABACABQACADAAADQAAAIgOAGQgMAGgLAAQgRgBgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_12.setTransform(275.5,19.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgBgtIgSgBQgHgBAAgHQAAgDACgCQADgCADgBIAQACIAAgLIAAgKQAAgDABgCQADgCADAAQAGAAACAMIAAAHIAAAEIAAAFIALgCIAKABQAFACAAAFQAAAEgDACQgCACgDAAIgEAAIgDAAIgLABIACAtIAAAEIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_13.setTransform(267.2,18.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQAAgRgGAAQgJAAgHAKQgGAKgFAOIgBAHIAAAIIAAAHIABAHQAAAEgCACQgCACgEAAQgDAAgCgCQgDgCAAgEIAAgHIgBgHIACgWIABgWIAAgHIAAgIQAAgDACgCQACgCADgBQAHAAABALIAAAJQANgSANAAQANAAAEAMQAEAHABAOIAAAIIgBAHQAAAGACAKIABARQAAADgBADQgDABgDAAQgHAAgBgHg");
	this.shape_14.setTransform(259.4,19.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADABACABQACADAAADQAAAIgOAGQgMAGgLAAQgRgBgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_15.setTransform(250.8,19.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_16.setTransform(242.1,19.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQABgRgHAAQgJAAgGAKQgIAKgDAOIgBAHIgBAIIABAHIAAAHQAAAEgCACQgCACgDAAQgEAAgCgCQgDgCABgEIgBgHIAAgHIABgWIABgWIgBgHIAAgIQAAgDACgCQADgCADgBQAIAAAAALIABAJQANgSAMAAQAMAAAGAMQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCADQgCABgDAAQgHAAgBgHg");
	this.shape_17.setTransform(229.6,19.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQADADAAADIgBASIgBASIAAAOIABAOQAAADgDACQgCADgCAAQgEAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDACAAQAEAAADADQADADgBADQABAEgDADQgDACgEAAQgCAAgDgCg");
	this.shape_18.setTransform(223.2,17.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF00FF").s().p("AgfA2QgOgGAAgNQAAgCACgDQACgCAEAAQADAAADAEQAEAHADABQAHAFANAAQALAAAKgFQAOgHAAgMQAAgKgMgGQgJgEgNgBQgMAAgJgEQgLgGAAgMQAAgOAQgMQAPgLAPABQAHgBAKADQANAEAAAEQAAAIgHAAIgLgCIgMgCQgMAAgIAGQgJAGAAAJQAAAHAMACIAPACQASABAKAKQAJAIAAANQAAATgRALQgPAJgSAAQgPAAgMgFg");
	this.shape_19.setTransform(210.5,18);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF00FF").s().p("AgiA9QgHgIAAgZIAAgKIABgNIgBgFQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAIACghIgBgJIgBgJQAAgJAIAAQADAAADACIASgDIAOgBQATgBAMAFQAFADAAAEQAAAEgDACQgCADgDAAIgDAAQgNgEgMgBIgNACIgQAEIAAAIIgBAdIAigDIASgBQAEAAACACQACACAAAEQAAAGgHAAIgTADIgiACIgBALIAAAJQgBARADADQACADALAAIANAAIAPAAIAEgBIAFgBQAIAAAAAIQAAAHgHABQgHABgYAAQgXAAgIgFg");
	this.shape_20.setTransform(200.1,17.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF00FF").s().p("AghA+QgFgEABgJIABgaQACgiAAgsQAAgDACgDQADgCADAAQADAAACACQADADAAADQAAAsgDAkIgBAMIAAALQAUAAAegKIADAAQAEAAACACQABADAAADQAAAFgEADQgJADgTAEQgQADgMAAQgHAAgEgCg");
	this.shape_21.setTransform(190.7,17.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF00FF").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_22.setTransform(182,17.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF00FF").s().p("AghA5QgDgCAAgDQAAgEADgCQACgCADAAIAQgCIABgPIAAgNIgBgNQAAgRACgbIgKAAIgKABQgDAAgCgDQgDgCAAgDQABgIAGAAIAZgBQAOAAAXADQAIABAAAIQAAADgDADQgDABgDAAIgMgBIgNgBIgCAqIAAAOIABANIgBAOIAZgBQADAAACADQACACABADQgBAEgCACQgCACgDAAIgNABIgNAAIgPABIgPACQgDAAgCgDg");
	this.shape_23.setTransform(173.4,17.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF00FF").s().p("AggAwQgKgMgBgQQAAgaAXgcQASgXASAAIAHAAIAFABQADgDAEAAQAGgBABAIQABAGABAJQgBADgBADQgCADgEAAQgFAAgDgGQgCgFgCgBQgBgBgHAAQgMAAgMASQgTAXAAAUQAAAKAHAHQAHAIAIAAQAHAAAJgFQAEgCAKgHQAEgEADABQADAAACACQACADAAADQAAADgDADQgUASgVAAQgQAAgLgMg");
	this.shape_24.setTransform(164.3,17.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF00FF").s().p("AgiA5QgCgCAAgDQAAgEACgCQACgCAEAAIARgCIABgPIgBgNIAAgNQAAgRABgbIgJAAIgKABQgEAAgDgDQgBgCAAgDQgBgIAIAAIAXgBQAPAAAYADQAGABAAAIQAAADgDADQgBABgDAAIgOgBIgMgBIgBAqIAAAOIAAANIAAAOIAYgBQAEAAACADQABACAAADQAAAEgBACQgCACgEAAIgNABIgNAAIgOABIgQACQgEAAgCgDg");
	this.shape_25.setTransform(155,17.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF00FF").s().p("AgFA5QgCgBAAgEIAAgEIABgDIgBgLIAAgNIgCgeIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgEACgCQADgDADAAIANACIANABIAOAAIANAAIASABIASABQADAAACABQADADAAAEQAAADgDACQgCADgDAAIgSgBIgSgCIgGAAIADAjIABAiIABAJIAAAIQAAAFgBAEQgCAFgFABQgCAAgDgDg");
	this.shape_26.setTransform(145.8,17.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF00FF").s().p("AgnA7QgCgCAAgEIAAgSIgCgSIACgVIACgVIgBgMIAAgMQAAgEACgDQADgFAFABIATABQALACAGADQAgARgBAYQAAAMgLAJQgIAHgNAEQAYANANAOQABADAAACQABAEgDACQgDADgDAAQgDAAgCgDQgagZgfgJIABAPIAAAPQAAAEgCACQgCACgEAAQgCAAgDgCgAgYgiIABAJIgCAQIgBAOIAEAAIACABQAUAAAJgGQAFgBADgEQAFgEAAgEQAAgKgNgKQgKgIgMgCIgMgBg");
	this.shape_27.setTransform(134.8,17.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF00FF").s().p("AAbAoIgFgYIgVADIgTAFIgOAeQgCAFgEgBQgEAAgCgCQgDgCAAgEQAAgDAMgZQgBgCAAgDQAAgGAIgCIAWglQASgeAEAAQAGAAADAIIAFAbIALA1IAFANIACAIQAAADgDACQgCADgDAAQgHAAgGgTgAgJAFIAcgFIgHgeg");
	this.shape_28.setTransform(123.6,17.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF00FF").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_29.setTransform(113.8,17.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF00FF").s().p("AgFA5QgCgBAAgEIAAgEIABgDIgBgLIAAgNIgCgeIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgEACgCQADgDADAAIANACIANABIAOAAIANAAIASABIASABQADAAACABQADADAAAEQAAADgDACQgCADgDAAIgSgBIgSgCIgGAAIADAjIABAiIABAJIAAAIQAAAFgBAEQgCAFgFABQgCAAgDgDg");
	this.shape_30.setTransform(100,17.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF00FF").s().p("Ag0A9QgCgCAAgEIABgKIAAgJIAAgPIABgPIgBgOIAAgQIgBgPIgBgOQAAgEADgDQAEgCADAAQAFAAAGAJQATAcAPAUQASAVAWAWIAAgKIAAgKQAAghgDgVIgCgIIgBgIQAAgKAIABQAOAAAAAyIgBAZIAAAaIgBANQgBAHgHAAQgFABgGgGQgfgegpg4IAAASIAAAQIAAAUIAAATQAAAWgIAAQgEgBgDgCg");
	this.shape_31.setTransform(87.6,17.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF00FF").s().p("AghA9QgIgIAAgZIAAgKIABgNIgBgFQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAIACghIgBgJIgBgJQAAgJAIAAQADAAADACIASgDIAOgBQATgBAMAFQAFADAAAEQAAAEgDACQgCADgDAAIgDAAQgNgEgMgBIgNACIgQAEIAAAIIgBAdIAigDIASgBQAEAAACACQACACAAAEQAAAGgHAAIgSADIgkACIAAALIAAAJQgBARADADQACADALAAIANAAIAPAAIAEgBIAFgBQAIAAAAAIQAAAHgHABQgHABgYAAQgXAAgHgFg");
	this.shape_32.setTransform(76.4,17.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF00FF").s().p("AgfA2QgOgGAAgNQAAgCACgDQACgCAEAAQADAAADAEQAEAHADABQAHAFANAAQALAAAKgFQAOgHAAgMQAAgKgMgGQgJgEgNgBQgMAAgJgEQgLgGAAgMQAAgOAQgMQAPgLAPABQAHgBAKADQANAEAAAEQAAAIgHAAIgLgCIgMgCQgMAAgIAGQgJAGAAAJQAAAHAMACIAPACQASABAKAKQAJAIAAANQAAATgRALQgPAJgSAAQgPAAgMgFg");
	this.shape_33.setTransform(65.6,18);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF00FF").s().p("AghA9QgIgIAAgZIAAgKIABgNIgBgFQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBABAAIABghIgBgJIAAgJQAAgJAHAAQADAAADACIARgDIAPgBQATgBALAFQAGADAAAEQAAAEgCACQgCADgEAAIgCAAQgOgEgMgBIgNACIgQAEIABAIIgBAdIAggDIATgBQADAAADACQACACAAAEQAAAGgHAAIgSADIgjACIgBALIgBAJQAAARADADQACADAKAAIAOAAIAOAAIAFgBIAEgBQAJAAAAAIQAAAHgGABQgIABgYAAQgYAAgGgFg");
	this.shape_34.setTransform(55.3,17.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF00FF").s().p("AgnA7QgCgCAAgEIgBgSIgBgSIACgVIACgVIgBgMIAAgMQAAgEACgDQADgFAFABIATABQALACAGADQAgARgBAYQAAAMgLAJQgIAHgNAEQAZANAMAOQACADAAACQgBAEgCACQgDADgDAAQgDAAgCgDQgagZgfgJIABAPIAAAPQAAAEgCACQgCACgEAAQgDAAgCgCgAgYgiIAAAJIgBAQIgBAOIAEAAIADABQATAAAJgGQAFgBADgEQAFgEAAgEQAAgKgNgKQgKgIgMgCIgMgBg");
	this.shape_35.setTransform(45.2,17.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF00FF").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_36.setTransform(35.9,17.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgMBDQgCgCAAgEIAAgBQACgKAAgMIgBgWIAAgVIgMABQgIAAAAgIQAAgIAOAAIAHAAIABgMQACgSAHgIQAHgKASAAQALAAAAAIQAAAHgKAAQgTAAgDAbIAAAFIARgBQANAAAAAHQAAAGgGABIgGABIgSABIgBAQIAAAPIABAOQAAAPgCAJQgBAGgFAAQgEAAgCgCg");
	this.shape_37.setTransform(326.4,-6.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_38.setTransform(318.1,-4.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_39.setTransform(305.1,-5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADAAACACQACADAAADQAAAIgOAGQgMAGgLgBQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_40.setTransform(297.2,-4.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQAAgIAGABQAIgBAAAIIgBAdIAAAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_41.setTransform(290.5,-6.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_42.setTransform(284.1,-2.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgEAuQgCgCAAgEIgCgcIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBANIgBANIABAHIABAGQAAADgDACQgCACgDABQgJAAAAgVIABgNIAAgOIAAgMIgBgNQAAgRAIAAQADAAADADQACACAAADIAAAFIgBAEIAAAJQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgFAGgEQAGgDAIAAQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAUQAAAEgDACQgCACgDAAQgCAAgDgCg");
	this.shape_43.setTransform(273.6,-4.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKABgUQgBgRANgOQANgNASAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJABAGIAGAOIABAEIAAABQAAADgBACQgCACgEAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAEAGQAFAHAJAAQAHAAAFgDIAIgGQgDgUAAgKIABgHIABgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_44.setTransform(263.2,-4.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAYAqIgYggIgPAPIgOAOQgDACgCAAQgDABgDgDQgBgDAAgDIABgEIAHgHIAHgHIARgRIgLgOQgFgJgFgEQgDgDAAgDQAAgDACgCQACgCADAAQAEAAAKALIANATIAPgOQAKgJADgFQADgEACAAQADAAADADQACABAAADQABAFgIAIIgLAKIgOAOIAaAgQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQgBADgCACQgCADgDAAQgDAAgDgDg");
	this.shape_45.setTransform(254.4,-4.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADAAACACQACADAAADQAAAIgOAGQgMAGgLgBQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_46.setTransform(245.4,-4.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADAAACACQACADAAADQAAAIgOAGQgMAGgLgBQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_47.setTransform(231.9,-4.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_48.setTransform(223.7,-4.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_49.setTransform(215.3,-4.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgEAuQgCgCAAgEIgCgcIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBANIgBANIABAHIABAGQAAADgDACQgCACgDABQgJAAAAgVIABgNIAAgOIAAgMIgBgNQAAgRAIAAQADAAADADQACACAAADIAAAFIgBAEIAAAJQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgFAGgEQAGgDAIAAQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAUQAAAEgDACQgCACgDAAQgCAAgDgCg");
	this.shape_50.setTransform(205.1,-4.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAFAWIgDgSIgCgQIgGAOIgMAgQgBADgCABQgDAFgFABQgFgBgGgXQgDgMgDgTIgCgNIgBgLQABgEACgCQACgCAEAAQAFAAACAHIACALIAAALIAFAiQAJgXAJgfQADgJAFAAQAGAAACAKIAFAcIAGAeIAFgVIALgqQABgEAFgBQAEAAACACQACADAAADIAAADQgGAagKAfQgCAHgGAIQgCAEgEAAQgKgBgEgVg");
	this.shape_51.setTransform(188.6,-4.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADAAACACQACADAAADQAAAIgOAGQgMAGgLgBQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_52.setTransform(178.8,-4.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgMBDQgCgCAAgEIAAgBQACgKAAgMIgBgWIAAgVIgMABQgIAAAAgIQAAgIAOAAIAHAAIABgMQACgSAHgIQAHgKASAAQALAAAAAIQAAAHgKAAQgTAAgDAbIAAAFIARgBQANAAAAAHQAAAGgGABIgGABIgSABIgBAQIAAAPIABAOQAAAPgCAJQgBAGgFAAQgEAAgCgCg");
	this.shape_53.setTransform(170.1,-6.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgHgKAAgUQAAgRANgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgCAJIAAARQAAAJABAGIAGAOIABAEIABABQAAADgCACQgCACgEAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_54.setTransform(157.3,-4.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADAAACACQACADAAADQAAAIgOAGQgMAGgLgBQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_55.setTransform(144.1,-4.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_56.setTransform(136,-4.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQAAADgDACQgCACgCAAQgCAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAFgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgLAAgJAJg");
	this.shape_57.setTransform(127.8,-4.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADAAACACQACADAAADQAAAIgOAGQgMAGgLgBQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_58.setTransform(114.7,-4.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_59.setTransform(106.5,-4.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADAAACACQACADAAADQAAAIgOAGQgMAGgLgBQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_60.setTransform(98.2,-4.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgwA+QgCgDAAgDIABgZIABgYIAAgMIAAgNIABgSIAAgTQAAgDACgCQADgDADAAQADAAACADQACACAAADIAAATIgBASIAAATIAhgGQAUgDANAAIABgiQAAgGACgGQADgJAFABQADAAACACQACACAAADIAAAEQgCADAAAGIAAAHIABAHIgCAXIgBAXIABASIABARQAAADgCACQgDADgDAAQgDAAgCgDQgCgCAAgDIgBgRIgBgSIAAgMQgNAAgTAEIghAHIgBAUIgBATQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_61.setTransform(87.7,-6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(483));

	// w1
	this.instance = new lib.Twiggs();
	this.instance.parent = this;
	this.instance.setTransform(178.6,266.3,0.937,0.937);
	this.instance._off = true;

	this.instance_1 = new lib.Watching("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(58,271.1);
	this.instance_1._off = true;

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AA4BFIgIgBIgOAAIg4gIIgbgDQgFgBgCgGQgBgDACgDQABgDADgBIANgIIAdgOIAdgNQgZAAgSgDQgVgCgLAAIgDABQgDABgDgCQgDgCgBgDQgCgJAIgCIAJgFIAggRQARgJAdgUIACgBQAHgCACAHQABAFgEAEIgNAJIgcAQIgeAPQAUAEAaAAIAXACQASABABAGQACAEgFAEQgFAEgWAJQgMAEgOAIIgaANIBCAIIAPAAQAJAAAFABQAFACABAEQACAHgHACIgCABIgGgBg");
	this.shape_62.setTransform(66.5,109.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZA5QgJgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKgBgNQAAgUAMgMQAMgMASAAQAIAAAEACQAFABACAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgDAMgIAFQgJAHgPAAQgKAAgHgBgAgMgkQgIAJAAANQABALADAEQAFAFAIAAQAGAAAHgHQAGgIABgHIAEgZIgGgDQgDgCgEAAQgNAAgHAKg");
	this.shape_63.setTransform(100.2,150.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAxQgEgDACgHIAGgPQADgIAEgGIAEgGIADgFQAIgNgFgDQgHgEgLAEQgKAEgKALIgEAEIgEAGIgDAGIgDAGQgBADgDABQgDAAgDgBQgDgCAAgCQgBgDACgDIADgGIADgGIALgRIALgRIAEgGIADgGQACgDACgBQACgBADACQAGADgFAJIgEAIQATgJALAHQAKAGgBALQAAAHgHAMIgEAGIgDAGIgGAOIgHAOQgBADgDABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_64.setTransform(91.6,145.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgcAvQgDgBgBgDQAAgDABgDIAGgMIAHgLIAJgOIAJgOQABgDADAAQACgBADABQADACABADQAAACgBADIgKAOIgIAOIgGAMIgHALQgBADgDABIgCAAIgDgBgAAUgfQgDgCgBgDQgBgDACgDQACgDADgCQAEAAADABQADACAAADQACAEgCADQgCADgEABIgCAAIgEgBg");
	this.shape_65.setTransform(86.7,141.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgGA9QgDgDACgFIAJgPIALgNIAFgDIAEgFQAKgJgFgFQgHgGgLABQgGAAgMADQgUAUgFACQgEACgDgDQgDgDAAgDQAAgDACgCIADgBIAIgHIAIgHIAlgmIAJgIIAFgFIAEgGQACgCADAAQADAAACACQAEAEgDAGIgJAJIgLAMIgMALIgFAEQALgBAHACQAIACAFAFQAJAIgCAJQgCAGgJAKIgKAKIgJAMIgJAMIgBACQgDACgCAAIgFgDg");
	this.shape_66.setTransform(80.4,137.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgWAeQgJgGgEgFQgHgNADgMQADgPANgIQANgHASABQAVAAAGAMQAEAHABAJQADALgGADQgCACgDgBQgDgBgCgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgDQABgFgFgJQgDgGgPAAQgNAAgIAFQgIAFgCAJQgBAGAEAJQADAEAEADIAIAFIADACQABACgBADQgBADgCABIgCABQgFAAgHgGg");
	this.shape_67.setTransform(75.7,133.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgtAfQgBgCAAgDQABgDACgCIAIgDIAHgFIAjgVIgHgPQgBgGAEgDQADgCADABQADABABACIAHAOIAIgFIAIgFQADgBADABQACAAACADQADAGgIAGIgGADIgEACIgEADIAGAHIAFAJQAAAFgEACQgDACgDgBQgDAAgBgDIgCgEIgBgDIgGgIIgkAXIgDACIgDACQgHAEgFAAQgEAAgCgDg");
	this.shape_68.setTransform(71.4,126.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AghAjQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgCAEgDIAFgFIgGgNQgCgFAAgDQAAgRAKgIQAJgHATAAQARAAAMAMQANAMAAAQQAAAHgEAIQgEAKgFAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgJgBIgPgBQgKAAgFACIgNAEIgEACgAgUgPQgGAEAAAIQAAAGADAFIAFAIQATgDAJAAIAHABIAIABIACgFIABgDQAAgKgKgIQgJgJgLAAQgMAAgGAFg");
	this.shape_69.setTransform(68.1,120.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAtBFIgIgDIgNgEIg0gVIgZgLQgFgCgBgGQAAgDADgCQABgDAEAAIAOgFIAggFQASgEANAAQgZgHgQgHQgTgJgLgDIgDABQgDAAgCgDQgCgCAAgEQAAgKAJAAIAJgCIAkgIIAygQIAEgBQAGAAABAIQAAAFgGACIgPAGQgNAEgTAEIggAIQATAHAZAIIAWAHQAQAHAAAFQAAAFgFACQgGADgYADIgcAFIgdAGIA/AZIAOADQAIACAFADQAEADAAAEQAAAIgHAAIgHgDg");
	this.shape_70.setTransform(66.1,111.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgYA5QgKgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgFAEgHAAQgNAAgIgJQgJgKABgNQgBgUALgMQAMgMAUAAQAGAAAFACQAFABACAEQAIAAAAAIIgCAOIgCAOIgBAYQgBAOgCAKQgDAMgIAFQgJAHgPAAQgKAAgGgBgAgNgkQgGAJgBANQABALAEAEQAEAFAHAAQAHAAAHgHQAHgIABgHIACgZIgGgDQgDgCgDAAQgNAAgIAKg");
	this.shape_71.setTransform(102.8,148.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_72.setTransform(91.9,148.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgPA1QgDgBgCgDQgBgCABgDIADgNIADgNIAFgQIAFgQQABgDADgBQABgCADABQADABACACQABADgBADIgFAQIgEAQIgDAMIgDANQgBADgDACIgEABIgBAAgAALgjQgDgBgCgEQgCgDABgDQABgDADgCQADgCAEABQADABABADQACADgBADQAAAEgEACIgEABIgCAAg");
	this.shape_73.setTransform(84.1,147);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAXAdQgDgBAAgDIgBgEIgBgDIgEgKIgpANIgDABIgDABQgPAEgCgIQgBgCABgDQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAIAIgCIAIgCIAogMIgDgPQgBgHAGgCQADgBADACQADABABADIACAPIAKgDIAJgCQADgBACABQADACABADQABAGgKADIgGACIgEABIgFABIAEAKQACAHAAADQgBAEgFACIgCAAIgDgBg");
	this.shape_74.setTransform(67.2,132.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AghAjQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgCAEgDIAFgFIgGgNQgCgFAAgDQAAgRAKgIQAJgHATAAQARAAAMAMQANAMAAAQQAAAHgEAIQgEAKgFAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgJgBIgPgBQgKAAgFACIgNAEIgEACgAgUgPQgGAEAAAIQAAAGADAFIAFAIQATgDAJAAIAHABIAIABIACgFIABgDQAAgKgKgIQgJgJgLAAQgMAAgGAFg");
	this.shape_75.setTransform(65.4,124.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},201).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance}]},17).to({state:[]},62).to({state:[{t:this.instance_1}]},83).to({state:[{t:this.instance_1}]},16).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67,p:{x:75.7,y:133.7}},{t:this.shape_66,p:{x:80.4,y:137.3}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},2).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_67,p:{x:71.3,y:141.2}},{t:this.shape_66,p:{x:77.2,y:144.7}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},2).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(201).to({_off:false},0).to({scaleX:0.99,scaleY:0.99,x:38.3,y:30.6},15).to({x:62.5,y:65.1},17).to({_off:true},62).wait(188));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(378).to({_off:false},0).to({x:109.7,y:116.9},16).to({rotation:30,x:97.5,y:123},12).to({_off:true},2).wait(75));

	// w2
	this.instance_2 = new lib.Hammering("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(107.2,267,0.894,0.894);
	this.instance_2._off = true;

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAxAvIgJgBIgGAAIgHABIgVgCIgWgBIgQABIgRABQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIARgBIAQgBIALAAQAAgMgDgSIgHgeIgSgCIgTgBQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIAXABIAXABIAMAAIAMAAIARABIASAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgSAAIgRgBIgSAAIAFAfQADATABAMIAfABQAGAAAGACQAHACABAFQgBADgCACQgCACgDAAIgDgBg");
	this.shape_76.setTransform(69.3,108.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgaAoQgGgBABgHIAGgyIACgHIABgIQABgHAGABQAHABgBAMQAOgMARADQAGAAACAFQADAFgBAJIgBAFQgCAJgGgBQgHgBABgHIABgFIAAgGQgMAAgGAEQgHAEgGAJIgFAmQAAAHgGAAIgCAAg");
	this.shape_77.setTransform(90.3,144.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgYA5QgKgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgIgJQgIgKAAgNQAAgUALgMQAMgMASAAQAIAAAEACQAFABACAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgEAMgHAFQgJAHgPAAQgKAAgGgBgAgMgkQgIAJAAANQAAALAFAEQADAFAJAAQAGAAAHgHQAHgIAAgHIAEgZIgHgDQgDgCgDAAQgNAAgHAKg");
	this.shape_78.setTransform(109.4,149.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgVIAAgGIgBgHQAAgDADgDQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAACgCACQgCACgDAAQgGABgBgHg");
	this.shape_79.setTransform(100.8,146.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_80.setTransform(95.4,144.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAEAoQgLgBgJgFQgPgIgFgMQgFgOAJgOQAJgQAOgGQAPgIAPAIQALAHAEAHQAFAJgFAJQgDAGgKABIgSgBIgegCQABAHADAGQAEAFAHAEIAKAFQAJACAEgCQAEgCADABQAAABABAAQAAAAAAABQABAAAAABQAAAAABABQAAADgBACQgDAGgKAAIgFgBgAgBgZQgJADgJAKIAXACQAPABAHgBQgCgIgKgGQgEgDgFAAIgGACg");
	this.shape_81.setTransform(83.1,142.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgGA+QgEgBgBgCQgDgGAFgDQAGgGAMgIIASgOIAHgHQAFgFgCgDQgBgCgIgFIgKgDIgMAGIgPAMIgQALQgCABgDAAQgDgBgCgDQgCgDABgCQABgDADgCIAWgNQANgLAIgEQAGgEADgEIgMgFIgLgDIgGgBIgMAGIgMAGIgEADIgFAEQgCACgEgBQgCgBgCgDQgEgHAQgKIAMgFIAMgGIAKgHIAIgGQAPgIAEAGQABADgBADQgBADgDACIgDABIgFACIgGAEQAIgBAKAEQAJADACAFQAGAKgIAJQAHABAFADQAFAEAEAFQAGAKgJALIgRANQgJAIgXARIgDACIgCgBg");
	this.shape_82.setTransform(76.3,136.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgYA5QgCgCgBgDQgCgFAHgDIAUgIIAVgJIAJgFQAGgEgBgCQgBgDgGgGQgGgGgDgBIgOAEIgRAHIgSAGQgDABgDgBQgCgCgBgDQgBgDACgCQACgDADgBIAYgHQAQgHAIgCQAIgCADgDQgDgEgHgEIgLgGIgFgCIgNACIgMADIgGACIgFACQgDABgCgCQgDgBgBgDQgCgIASgFIANgDIANgCIAKgEIALgDQAQgFACAHQABADgCADQgCADgCABIgFAAIgEABIgIADQAJABAIAFQAIAGACAFQACALgKAHQAHADAEAEQAEAEABAHQAEAMgMAIIgTAIIgmAQIgDAAIgDgBg");
	this.shape_83.setTransform(71.1,127.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AghAjQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgCAEgDIAFgFIgGgNQgCgFAAgDQAAgRAKgIQAJgHATAAQARAAAMAMQANAMAAAQQAAAHgEAIQgEAKgFAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgJgBIgPgBQgKAAgFACIgNAEIgEACgAgUgPQgGAEAAAIQAAAGADAFIAFAIQATgDAJAAIAHABIAIABIACgFIABgDQAAgKgKgIQgJgJgLAAQgMAAgGAFg");
	this.shape_84.setTransform(69.6,118);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAxAvIgJgBIgHAAIgGABIgVgCIgWgBIgQABIgRABQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIARgBIAQgBIAMAAQgBgMgEgSIgFgeIgTgCIgTgBQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIAXABIAYABIALAAIAMAAIARABIARAAQADAAADACQACACAAADQAAADgCACQgDACgDAAIgRAAIgSgBIgRAAIAFAfQAEATgBAMIAgABQAGAAAGACQAIACAAAFQAAADgCACQgCACgEAAIgDgBg");
	this.shape_85.setTransform(67.8,109.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgbAiIAAgzIAAgHIAAgIQAAgHAHAAQAGAAAAANQAOgOARAAQAGAAADAFQADAEgBAIIAAAGQAAAJgHAAQgGAAAAgHIAAgGIAAgFQgMABgGAFQgGAFgFAJIAAAoQABAHgIAAQgGAAAAgHg");
	this.shape_86.setTransform(87.4,149.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgZA5QgJgCAAgGQAAgGAGAAIAJABQAGABAIAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKgBgNQAAgUAMgMQALgMATAAQAIAAAEACQAEABADAEQAIAAAAAIIgBAOIgCAOIgCAYQAAAOgDAKQgEAMgHAFQgIAHgQAAQgKAAgHgBgAgMgkQgIAJABANQAAALADAEQAFAFAIAAQAGAAAHgHQAGgIABgHIADgZIgFgDQgDgCgEAAQgNAAgHAKg");
	this.shape_87.setTransform(109.1,151.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAHIgBAHIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgVIAAgGIgBgHQAAgEADgCQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAIIAAAFIACAQIABAQQAAACgCACQgCACgDABQgGAAgBgHg");
	this.shape_88.setTransform(100.7,149.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_89.setTransform(93.7,148.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AghAjQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgCAEgDIAFgFIgGgNQgCgFAAgDQAAgRAKgIQAJgHATAAQARAAAMAMQANAMAAAQQAAAHgEAIQgEAKgFAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgJgBIgPgBQgKAAgFACIgNAEIgEACgAgUgPQgGAEAAAIQAAAGADAFIAFAIQATgDAJAAIAHABIAIABIACgFIABgDQAAgKgKgIQgJgJgLAAQgMAAgGAFg");
	this.shape_90.setTransform(65.9,119.7);

	this.instance_3 = new lib.the();
	this.instance_3.parent = this;
	this.instance_3.setTransform(111.7,271.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},201).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.shape_84},{t:this.shape_83,p:{x:71.1,y:127.5}},{t:this.shape_82,p:{x:76.3,y:136.3}},{t:this.shape_81,p:{x:83.1,y:142.9}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},2).to({state:[{t:this.shape_90},{t:this.shape_83,p:{x:66.5,y:130.9}},{t:this.shape_82,p:{x:71.6,y:141.4}},{t:this.shape_81,p:{x:79.2,y:148}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},2).to({state:[]},62).to({state:[{t:this.instance_3}]},83).to({state:[{t:this.instance_3}]},16).to({state:[{t:this.instance_3}]},16).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(201).to({_off:false},0).to({rotation:30,x:105.5,y:117.1},15).to({x:96.3,y:129.3},13).to({_off:true},2).wait(252));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(378).to({_off:false},0).to({x:229.4,y:186},16).to({rotation:60,x:199.7,y:172.5},16).wait(73));

	// w3
	this.instance_4 = new lib.smashed("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(236.9,266.8,0.869,0.869);
	this.instance_4._off = true;

	this.instance_5 = new lib.girls("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(145.1,271.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(201).to({_off:false},0).to({x:197.2,y:26.9},15).to({x:191.4,y:65.8},17).to({_off:true},62).wait(188));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(378).to({_off:false},0).to({x:198.2,y:104.3},16).to({x:190.6,y:142.1},16).wait(73));

	// w4
	this.instance_6 = new lib.her("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(282.8,267.6,0.815,0.815);
	this.instance_6._off = true;

	this.instance_7 = new lib.work("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(184.2,271);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(201).to({_off:false},0).to({rotation:45,x:365.6,y:108.1},15).to({x:330.7,y:98.7},17).to({_off:true},62).wait(188));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(378).to({_off:false},0).to({x:301.5,y:111.5},16).to({x:277.8,y:142.1},16).wait(73));

	// W5
	this.instance_8 = new lib.thumb("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(321.7,266.6,0.913,0.913);
	this.instance_8._off = true;

	this.instance_9 = new lib.the();
	this.instance_9.parent = this;
	this.instance_9.setTransform(224.5,271.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(201).to({_off:false},0).to({x:338.8,y:39.8},15).to({x:340,y:65.2},17).to({_off:true},62).wait(188));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(378).to({_off:false},0).to({x:13.5,y:138.3},16).to({rotation:60,x:24.1,y:99.3},16).wait(73));

	// W6
	this.instance_10 = new lib.boys("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(258.4,271.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(378).to({_off:false},0).to({x:39.3,y:25.6},16).to({x:65.4,y:66.3},16).wait(73));

	// W7
	this.instance_11 = new lib.were("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(298.3,271.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(378).to({_off:false},0).to({x:192.2,y:29.6},16).to({x:189,y:67.1},16).wait(73));

	// W8
	this.instance_12 = new lib.relaxing("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(351.1,271);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(378).to({_off:false},0).to({x:327.2,y:37.8},16).to({x:329.8,y:67.1},16).wait(73));

	// Layer 20
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(2.5,1,1).p("AgSgbIAlA4");
	this.shape_91.setTransform(304.8,82.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(2.5,1,1).p("AgegtIA9Bb");
	this.shape_92.setTransform(306,84.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(2.5,1,1).p("Agqg/IBVB/");
	this.shape_93.setTransform(307.2,86);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(2.5,1,1).p("Ag1hRIBrCj");
	this.shape_94.setTransform(308.3,87.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(2.5,1,1).p("AhBhiICDDF");
	this.shape_95.setTransform(309.5,89.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(2.5,1,1).p("AhMh0ICZDp");
	this.shape_96.setTransform(310.6,91.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(2.5,1,1).p("AhYiGICxEN");
	this.shape_97.setTransform(311.8,93.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(2.5,1,1).p("AhjiXIDHEv");
	this.shape_98.setTransform(312.9,94.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(2.5,1,1).p("AhvipIDfFT");
	this.shape_99.setTransform(314.1,96.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(2.5,1,1).p("Ah7i7ID3F3");
	this.shape_100.setTransform(315.3,98.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(2.5,1,1).p("AiGjMIENGZ");
	this.shape_101.setTransform(316.4,100.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_91}]},183).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[]},102).wait(188));

	// Layer 19
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(2.5,1,1).p("AgSgbIAlA3");
	this.shape_102.setTransform(1.8,84.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(2.5,1,1).p("AgSgbIAlA3");
	this.shape_103.setTransform(177.6,159.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(2.5,1,1).p("ANRFOIA5BUAuJmhIA0BW");
	this.shape_104.setTransform(90.8,123.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(2.5,1,1).p("ANHFBIBLBvAuRmvIBCBz");
	this.shape_105.setTransform(91.8,125);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(2.5,1,1).p("AM+E0IBbCKAuYm9IBPCQ");
	this.shape_106.setTransform(92.8,126.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(2.5,1,1).p("AM0EmIBtCmAugnLIBdCt");
	this.shape_107.setTransform(93.8,127.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(2.5,1,1).p("AMpEZICADBAuonZIBrDK");
	this.shape_108.setTransform(94.8,129.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(2.5,1,1).p("AMfELICSDdAuwnnIB5Dn");
	this.shape_109.setTransform(95.9,130.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(2.5,1,1).p("AMWD+ICjD4Au4n1ICHEE");
	this.shape_110.setTransform(96.9,131.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(2.5,1,1).p("AMLDxIC1ESAu/oDICUEh");
	this.shape_111.setTransform(97.9,133.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(2.5,1,1).p("AMBDkIDHEuAvHoQICiE9");
	this.shape_112.setTransform(98.9,134.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(2.5,1,1).p("AL3DWIDZFJAvPoeICwFa");
	this.shape_113.setTransform(99.9,136.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(2.5,1,1).p("ALtDJIDqFkAvWosIC9F3");
	this.shape_114.setTransform(100.9,137.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(2.5,1,1).p("ALjC8ID8F/Aveo6IDLGV");
	this.shape_115.setTransform(102,138.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(2.5,1,1).p("AvmpIIDZGxALZCuIEOGb");
	this.shape_116.setTransform(103,140.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_103},{t:this.shape_102}]},351).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).wait(119));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_135 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgGgHQgngDgXgJIgHALQgcApg1AAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_146 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgOAUgaAAQgdAAgNgYQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_147 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgOAUgbABQgdAAgNgZQgIgOAAgMQAAgPAKgPQAEgGAGgFQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_148 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAFAGAKQAHAOAAANQAAARgJAPQgOATgbAAQgdAAgNgYQgIgOAAgNQAAgPAKgPQAFgHAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgFQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_149 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAFAGAKQAHAOAAANQAAARgJAPQgGAIgJAFQARAMACAeQAAAPgKAOQgOAVgaAAQgdAAgNgYQgIgOAAgMQAAgQAKgOQAGgKAJgFQgHgFgFgKQgIgOAAgNQAAgPAKgPQAFgHAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgFQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_150 = new cjs.Graphics().p("A4zFzQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgLgBgLQgXAPghAAQglABgZgUQhEAJhrAAQhQAAgfguQgPgZAAgcQAAhBA7gZQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjPCOBPQAtAaAbA0IAQAgQgUhlAAgYQAAgoAWgfQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA6QAACOh0AAQh0AAgbiDQgKgvAFg2QAFgwANgYQiQgZhrAJQg8AGhNAYQg7ASgcgFQgqgJg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAPQgGAHgHAFQAJAGAGAKQAHANAAAOQAAARgJAOQgGAJgJAFQARAMACAdQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgOAWgbAAQgyAAAAg0g");
	var mask_graphics_151 = new cjs.Graphics().p("A4sG8QgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgLgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABXieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0AAQh0AAgbiDQgKgwAFg1QAFgwANgYQiQgZhrAKQg8AGhNAXQg7ASgcgGQgqgIg6g6IgCgCIACAPQAAAPgKAOQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOQgOAUgbAAQgeAAgNgYg");
	var mask_graphics_152 = new cjs.Graphics().p("A4dHnIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgOQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieAoQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgNgRAAQg/AMm8AHImjgCIj2ACQAWA5AAA5QAACPh0AAQh0AAgbiDQgKgwAFg1QAFgvANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAhQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAARgJAOQgOAUgbAAQgeAAgNgYg");
	var mask_graphics_153 = new cjs.Graphics().p("A30INQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgNAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA0oLAAQmqAAiHgqQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA3AAA6QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAOQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAPgKAPQgOAUgbAAQgdAAgNgYg");
	var mask_graphics_154 = new cjs.Graphics().p("A2yIwQgJgOAAgMQAAgNAHgMQgKAFgMAAQgdgBgNgXQgIgOAAgNQAAgMAHgNQgcgBgMgXIgHgaQAAgQAKgPIAGgHQgPgGgJgQQgHgNAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgHAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgLgBgLQgXAPghAAQglABgZgUQhEAJhrAAQhQAAgfgvQgPgZAAgcQAAhBA7gZQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjPCOBPQAtAaAbA0IAQAgQgUhlAAgYQAAgoAWgfQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg5QAZgTgPgbQgUgbAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AeQBpAOASAWQAGAIgBAOIgEAYQAABZieApQjOA0oLAAQmqAAiHgqQgjgLgXgTQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgZhrAJQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAPQgGAHgHAFQAJAGAGAJQAHANAAAOQAAARgJAOQgGAJgJAFQARAMACAdQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsABADAwQAAANgGAMQAJgFAMAAQAuABAEAyQAAAQgKAOQgOAUgaAAQgdAAgNgYg");
	var mask_graphics_155 = new cjs.Graphics().p("A1dJCQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQAwAAADAzQAAAPgKAPQgOAUgbAAQgdAAgNgYg");
	var mask_graphics_156 = new cjs.Graphics().p("Az+JHQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAvAAAEAzQAAAPgLAPQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_157 = new cjs.Graphics().p("Az+JHQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAvAAAEAzQAAAQgKAOQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_158 = new cjs.Graphics().p("AxFJGQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAPgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQA8AAAaAwQAPAbAAAaQAAAfgVAeQgdAngzAAQg7AAgagvg");
	var mask_graphics_159 = new cjs.Graphics().p("AxFJGQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAPgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQA9AAAaAwQAOAbAAAaQAAAggUAdQgbAng2AAQgpAAgagWQgbAggvAAQg7AAgagvg");
	var mask_graphics_160 = new cjs.Graphics().p("AxFJGQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAPgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQBAAAAbAwQAOAaAAAbQAAAhgTAcQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvg");
	var mask_graphics_161 = new cjs.Graphics().p("AxFJGQgFgJgEgJQgNAPgYAAQgdAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgBgIIgGAKQgOAUgbAAQgdAAgNgXQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAPgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQANgPAWAAQArAAAHAqIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAtAAAbAbQAbgbAvAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQACgVAXAAQAKAAAGAFQAaADgCApQAAAigZAAQgPAAgHgOQgNACgTAAQghAAgQgGQgEAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgagWQgbAggvAAQg7AAgagvg");
	var mask_graphics_295 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIAGARQAEAKgWgbQgXgbgfAOQgfAOAAAPQAAAOgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_312 = new cjs.Graphics().p("AtVEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgOAUgaAAQgdAAgNgYQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQgkAAgagKQgbASglAAQg4AAgfghQgKAFgNAAQgyAAgEg1QAAgPALgQQAMgTAYgDQAFgcATgYQAhgqA8AAQAugBAeAZQBLgZCxAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_313 = new cjs.Graphics().p("AuTEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgOAUgbABQgdAAgNgZQgIgOAAgMQAAgPAKgPQAFgGAFgFQgKgGgHgMQgHgLgBgLQgXAQghAAQglAAgYgUQhFAKhrAAQgkAAgagKQgYAQgfACQAEhZgdhPQgMghgMgWQASgFAWAAQAvgBAdAZQBMgZCwAAQAsgBAcASIAEgGQAdgpAzAAQA7gBAbAxIACADQEUjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_314 = new cjs.Graphics().p("AtsEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAFAGAKQAHAOAAANQAAARgJAPQgOATgbAAQgdAAgNgYQgIgOAAgNQAAgPAKgPQAFgHAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgFQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgYgUQhFAKhrAAQgkAAgagKQgbASglAAQhJAAgeg3QgPgdAAgfQAAgnAZggQAhgqA8AAQAugBAeAZQBMgZCwAAQAsgBAcASIAEgGQAdgpAzAAQA7gBAbAxIACADQEUjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_315 = new cjs.Graphics().p("AtsEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAFAGAKQAHAOAAANQAAARgJAPQgGAIgJAFQASAMABAeQAAAPgKAOQgOAVgaAAQgdAAgNgYQgIgOAAgMQAAgQAKgOQAGgKAJgFQgHgFgFgKQgIgOAAgNQAAgPAKgPQAFgHAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgFQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgYgUQhFAKhrAAQgkAAgagKQgbASglAAQhJAAgeg3QgPgdAAgfQAAgnAZggQAhgqA8AAQAugBAeAZQBMgZCwAAQAsgBAcASIAEgGQAdgpAzAAQA7gBAbAxIACADQEUjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_316 = new cjs.Graphics().p("A34FzQAAgRAJgPQAFgJAIgFQgPgGgJgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgLgBgLQgXAPghAAQglABgYgUQhFAJhrAAQgkAAgagJQgbASglAAQhJgBgeg1QgPgeAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcASIAEgGQAdgqAzAAQA7AAAbAxIACACQEUjPCOBPQAtAaAbA0IAQAgQgUhlAAgYQAAgoAWgfQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA6QAACOh0AAQh0AAgbiDQgKgvAFg2QAFgwANgYQiQgZhrAJQg8AGhNAYQg7ASgcgFQgqgJg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAPQgGAHgHAFQAJAGAGAKQAHANAAAOQAAARgJAOQgGAJgJAFQASAMABAdQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgOAWgbAAQgyAAAAg0g");
	var mask_graphics_317 = new cjs.Graphics().p("A3xG8QgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgLgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABXieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACPh0AAQh0AAgbiDQgKgwAFg1QAFgwANgYQiQgZhrAKQg8AGhNAXQg7ASgcgGQgqgIg6g6IgCgCIACAPQAAAPgKAOQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAFQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOQgOAUgbAAQgeAAgNgYg");
	var mask_graphics_318 = new cjs.Graphics().p("A3iHnIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgOQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieAoQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgNgRAAQg/AMm9AHImigCIj2ACQAWA5AAA5QAACPh0AAQh0AAgbiDQgKgwAFg1QAFgvANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAhQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAFQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAARgJAOQgOAUgbAAQgeAAgNgYg");
	var mask_graphics_319 = new cjs.Graphics().p("A25INQgIgOAAgMQAAgNAHgMQgbgCgNgXIgHgaQAAgQAKgOIAHgIQgQgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgPgGgJgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAIgEQgJgGgGgLQgIgNAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgYgUQhFAKhrAAQgkAAgagKQgbASglAAQhJAAgeg3QgPgeAAgfQAAgnAZghQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcASIAEgGQAdgqAzAAQA7AAAbAxIACACQEUjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA0oLAAQmqAAiHgqQgjgLgXgTQgQgNgRAAQg/ALm9AJImigDIj2ADQAWA3AAA6QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAOQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQASAMABAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAZALABAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAPgKAPQgOAUgbAAQgdAAgNgYg");
	var mask_graphics_320 = new cjs.Graphics().p("A13IwQgJgOAAgMQAAgNAHgMQgJAFgNAAQgdgBgNgXQgIgOAAgNQAAgMAHgNQgbgBgNgXIgHgaQAAgQAKgPIAHgHQgQgGgJgQQgHgNAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgPgGgJgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgHAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgLgBgLQgXAPghAAQglABgYgUQhFAJhrAAQgkAAgagJQgbASglAAQhJgBgeg2QgPgeAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcASIAEgGQAdgqAzAAQA7AAAbAxIACACQEUjPCOBPQAtAaAbA0IAQAgQgUhlAAgYQAAgoAWgfQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg5QAZgTgPgbQgUgbAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AeQBpAOASAWQAGAIgBAOIgEAYQAABZieApQjOA0oLAAQmqAAiHgqQgjgLgXgTQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgZhrAJQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAPQgGAHgHAFQAJAGAGAJQAHANAAAOQAAARgJAOQgGAJgJAFQASAMABAdQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZALABAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsABADAwQAAANgGAMQAJgFAMAAQAuABAEAyQAAAQgKAOQgOAUgaAAQgdAAgNgYg");
	var mask_graphics_321 = new cjs.Graphics().p("A0iJCQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgJAEgNAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgbgCgNgXIgHgaQAAgQAKgOIAHgIQgQgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgPgGgJgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAIgEQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgYgUQhFAKhrAAQgkAAgagKQgbASglAAQhJAAgeg3QgPgeAAgfQAAgnAZghQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcASIAEgGQAdgqAzAAQA7AAAbAxIACACQEUjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm9AJImigDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQASAMABAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAZALABAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQAOgOAVAAQAwAAADAzQAAAPgKAPQgOAUgbAAQgdAAgNgYg");
	var mask_graphics_322 = new cjs.Graphics().p("AzDJHQgEgIgCgJIgGALQgOAUgbAAQgdAAgNgYQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgJAEgNAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgbgCgNgXIgHgaQAAgQAKgOIAHgIQgQgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgPgGgJgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAIgEQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgYgUQhFAKhrAAQgkAAgagKQgbASglAAQhJAAgeg3QgPgeAAgfQAAgnAZghQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcASIAEgGQAdgqAzAAQA7AAAbAxIACACQEUjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm9AJImigDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQASAMABAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAZALABAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQAOgOAVAAQAsAAAGApIAGgLQAOgUAaAAQAvAAAEAzQAAAPgLAPQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_323 = new cjs.Graphics().p("AzDJHQgEgIgCgJIgGALQgOAUgbAAQgdAAgNgYQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgJAEgNAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgbgCgNgXIgHgaQAAgQAKgOIAHgIQgQgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgPgGgJgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAIgEQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgYgUQhFAKhrAAQgkAAgagKQgbASglAAQhJAAgeg3QgPgeAAgfQAAgnAZghQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcASIAEgGQAdgqAzAAQA7AAAbAxIACACQEUjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm9AJImigDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQASAMABAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAZALABAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQAOgOAVAAQAsAAAGApIAGgLQAOgUAaAAQAlAAALAgQACgIAGgIQAPgVAZAAQAvAAAEAzQAAAQgKAOQgOAUgbAAQgdAAgOgYIgEgJQgCAJgHAJQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_324 = new cjs.Graphics().p("AwKJGQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAPgJAPQgGAIgJAFQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQA8AAAaAwQAPAbAAAaQAAAfgVAeQgdAngzAAQg7AAgagvg");
	var mask_graphics_325 = new cjs.Graphics().p("AwKJGQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAPgJAPQgGAIgJAFQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQA9AAAaAwQAOAbAAAaQAAAggUAdQgbAng2AAQgpAAgZgWQgcAggvAAQg7AAgagvg");
	var mask_graphics_326 = new cjs.Graphics().p("AwKJGQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAPgJAPQgGAIgJAFQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAOAaAAAbQAAAhgTAcQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvg");
	var mask_graphics_327 = new cjs.Graphics().p("AwKJGQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAPgJAPQgGAIgJAFQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQADgVAWAAQAKAAAGAFQAaADgCApQAAAigZAAQgPAAgHgOQgNACgTAAQghAAgPgGQgFAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvg");
	var mask_graphics_328 = new cjs.Graphics().p("Am4JLIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgPgGQgFAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAOQgGAIgJAFQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQADgVAWAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQA7AAAaAwQAPAbAAAZQAAAhgUAcQgcAog0AAQg8AAgagvg");
	var mask_graphics_329 = new cjs.Graphics().p("Am4JLIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgPgGQgFAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAOQgGAIgJAFQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQADgVAWAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQA8AAAaAwQAPAbAAAZQAAAhgUAcQgcAog1AAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvg");
	var mask_graphics_330 = new cjs.Graphics().p("Am4JLIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgPgGQgFAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAOQgGAIgJAFQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQADgVAWAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQA8AAAZAwQAPAbAAAZQAAAhgUAcQgbAog1AAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvg");
	var mask_graphics_331 = new cjs.Graphics().p("Am4JLIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgPgGQgFAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAOQgGAIgJAFQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQADgVAWAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQApAAAZAXQAZgXAnAAQA6AAAbAwQAQAcAAAYQAAAggVAdQgcAog0AAQgoAAgZgWQgZAWgoAAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvg");
	var mask_graphics_332 = new cjs.Graphics().p("Am4JLIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgPgGQgFAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAOQgGAIgJAFQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQADgVAWAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQApAAAZAXQAZgXAnAAQAxAAAaAiQAcgiAwAAQA9AAAaAwQAPAaAAAaQAAAggVAdQgdAog0AAQgxAAgbghQgcAhgvAAQgoAAgZgWQgZAWgoAAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvg");
	var mask_graphics_333 = new cjs.Graphics().p("AEKJoQgGgLgDgLQgRAGgWAAQgxAAgbghQgcAhgvAAQgoAAgZgWQgZAWgoAAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgPgGQgFAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgEQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAEQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQADgVAWAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQApAAAZAXQAZgXAnAAQAxAAAaAiQAcgiAwAAQA9AAAaAwQALATADAUQALgDAMAAQAzAAAXArQALAWACAYQAAAdgVAaQgZAfgpAAQg2AAgWgqg");
	var mask_graphics_334 = new cjs.Graphics().p("AEKJoQgGgLgDgLQgRAGgWAAQgxAAgbghQgcAhgvAAQgoAAgZgWQgZAWgoAAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgPgGQgFAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgEQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAEQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQADgVAWAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQApAAAZAXQAZgXAnAAQAxAAAaAiQAcgiAwAAQA9AAAaAwQALATADAUQALgDAMAAQAbAAATANQACgbARgXQAYggAsAAQA0AAAXAqQANAXAAAWQAAAdgUAaQgZAggrAAQgbAAgTgLQgCAbgTAXQgZAfgpAAQg2AAgWgqg");
	var mask_graphics_335 = new cjs.Graphics().p("AEKJoQgGgLgDgLQgRAGgWAAQgxAAgbghQgcAhgvAAQgoAAgZgWQgZAWgoAAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgPgGQgFAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgEQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAEQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQADgVAWAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQApAAAZAXQAZgXAnAAQAxAAAaAiQAcgiAwAAQA9AAAaAwQALATADAUQALgDAMAAQAbAAATANQACgbARgXQAYggAsAAQAyAAAXAmQAEgJAHgJQAYggAsAAQA0AAAXAqQALAWABAXQAAAegUAaQgZAggqAAQgyAAgXgnQgEAKgHAIQgZAggrAAQgbAAgTgLQgCAbgTAXQgZAfgpAAQg2AAgWgqg");
	var mask_graphics_336 = new cjs.Graphics().p("AEKJoQgGgLgDgLQgRAGgWAAQgxAAgbghQgcAhgvAAQgoAAgZgWQgZAWgoAAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgPgGQgFAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgEQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAEQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQADgVAWAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQApAAAZAXQAZgXAnAAQAxAAAaAiQAcgiAwAAQA9AAAaAwQALATADAUQALgDAMAAQAbAAATANQACgbARgXQAYggAsAAQAyAAAXAmQAEgJAHgJQAYggAsAAQAxAAAYAmQAEgJAGgIQAYghAsAAQA1AAAWAqQANAYAAAWQAAAdgUAaQgZAggrAAQgyAAgXgmQgEAJgHAJQgZAggqAAQgyAAgXgnQgEAKgHAIQgZAggrAAQgbAAgTgLQgCAbgTAXQgZAfgpAAQg2AAgWgqg");
	var mask_graphics_337 = new cjs.Graphics().p("AEKJoQgGgLgDgLQgRAGgWAAQgxAAgbghQgcAhgvAAQgoAAgZgWQgZAWgoAAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgPgGQgFAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgEQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAEQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQADgVAWAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQApAAAZAXQAZgXAnAAQAxAAAaAiQAcgiAwAAQA9AAAaAwQALATADAUQALgDAMAAQAbAAATANQACgbARgXQAYggAsAAQAyAAAXAmQAEgJAHgJQAYggAsAAQAxAAAYAmQAEgJAGgIQAYghAsAAQAeAAAUANQAXgZAmAAQAWAAARAIQAKgCAKAAQA0AAAWArQAMAWABAYQAAAegUAZQgYAfgrAAQgXAAgRgHQgJABgKAAQgeAAgUgMQgXAYgmAAQgyAAgXgmQgEAJgHAJQgZAggqAAQgyAAgXgnQgEAKgHAIQgZAggrAAQgbAAgTgLQgCAbgTAXQgZAfgpAAQg2AAgWgqg");
	var mask_graphics_338 = new cjs.Graphics().p("AEKJoQgGgLgDgLQgRAGgWAAQgxAAgbghQgcAhgvAAQgoAAgZgWQgZAWgoAAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvIgIgRQgGAEgJAAQgPAAgHgOQgNACgTAAQghAAgPgGQgFAKgGAJQgdAng5AAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgEQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAEQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwQAJAQADARQARACADAQIAWgBIAOABQADgVAWAAQAKAAAGAFQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQApAAAZAXQAZgXAnAAQAxAAAaAiQAcgiAwAAQA9AAAaAwQALATADAUQALgDAMAAQAbAAATANQACgbARgXQAYggAsAAQAyAAAXAmQAEgJAHgJQAYggAsAAQAxAAAYAmQAEgJAGgIQAYghAsAAQAeAAAUANQAXgZAmAAQAWAAARAIQAKgCAKAAQAxAAAXAnQAcgnBTAAQBTAAAdArQAPAWgBAYQAABWh+AAQhSAAgdgmIgFAHQgYAfgrAAQgXAAgRgHQgJABgKAAQgeAAgUgMQgXAYgmAAQgyAAgXgmQgEAJgHAJQgZAggqAAQgyAAgXgnQgEAKgHAIQgZAggrAAQgbAAgTgLQgCAbgTAXQgZAfgpAAQg2AAgWgqg");
	var mask_graphics_339 = new cjs.Graphics().p("AEKJoQgGgLgDgLQgRAGgWAAQgxAAgbghQgcAhgvAAQgoAAgZgWQgZAWgoAAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvIgHgQQgFASgMAQQgYAfgsAAQgyAAgWgkQgYAOgiAAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgEQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAEQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQBAAAAbAwIADAHQAQgHAUAAQAvAAAXAjQAHABAFAEQAFgOAJgOQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQApAAAZAXQAZgXAnAAQAxAAAaAiQAcgiAwAAQA5AAAaAoQAMgCAOAAQAsAAAYAdQAFgKAHgKQAYggAsAAQAyAAAXAmQAEgJAHgJQAYggAsAAQAxAAAYAmQAEgJAGgIQAYghAsAAQAeAAAUANQAXgZAmAAQAWAAARAIQAKgCAKAAQAxAAAXAnQAcgnBTAAQBTAAAdArQAPAWgBAYQAABWh+AAQhSAAgdgmIgFAHQgYAfgrAAQgXAAgRgHQgJABgKAAQgeAAgUgMQgXAYgmAAQgyAAgXgmQgEAJgHAJQgZAggqAAQgyAAgXgnQgEAKgHAIQgZAggrAAQgbAAgTgLQgCAbgTAXQgZAfgpAAQg2AAgWgqg");
	var mask_graphics_340 = new cjs.Graphics().p("AEKJoQgGgLgDgLQgRAGgWAAQgxAAgbghQgcAhgvAAQgoAAgZgWQgZAWgoAAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvIgHgQQgFASgMAQQgYAfgsAAQgyAAgWgkQgYAOgiAAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgEQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAEQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQAoAAAZATIACgDQAZggAsAAQA0AAAWAqQALAVACASIADgFQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQApAAAZAXQAZgXAnAAQAxAAAaAiQAcgiAwAAQAXAAATAHQAXgcApAAQA0AAAXArQAGAMADALQAYgeArAAQAyAAAXAmQAEgJAHgJQAYggAsAAQAxAAAYAmQAEgJAGgIQAYghAsAAQAeAAAUANQAXgZAmAAQAWAAARAIQAKgCAKAAQAxAAAXAnQAcgnBTAAQBTAAAdArQAPAWgBAYQAABWh+AAQhSAAgdgmIgFAHQgYAfgrAAQgXAAgRgHQgJABgKAAQgeAAgUgMQgXAYgmAAQgyAAgXgmQgEAJgHAJQgZAggqAAQgyAAgXgnQgEAKgHAIQgZAggrAAQgbAAgTgLQgCAbgTAXQgZAfgpAAQg2AAgWgqg");
	var mask_graphics_341 = new cjs.Graphics().p("AEKJoQgGgLgDgLQgRAGgWAAQgxAAgbghQgcAhgvAAQgoAAgZgWQgZAWgoAAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvIgHgQQgFASgMAQQgYAfgsAAQgyAAgWgkQgYAOgiAAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgEQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAEQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQAgAAAXAMQABgbARgWQAYgfAtAAQAzAAAXAqQANAYAAAVQAAATgIARIACAKIADgFQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQApAAAZAXQAZgXAnAAQAxAAAaAiQAcgiAwAAIAOABQADgXAPgTQAZgfArAAQA0AAAXAqQAMAXAAAWQAAAJgBAIIAEANQAYgeArAAQAyAAAXAmQAEgJAHgJQAYggAsAAQAxAAAYAmQAEgJAGgIQAYghAsAAQAeAAAUANQAXgZAmAAQAWAAARAIQAKgCAKAAQAxAAAXAnQAcgnBTAAQBTAAAdArQAPAWgBAYQAABWh+AAQhSAAgdgmIgFAHQgYAfgrAAQgXAAgRgHQgJABgKAAQgeAAgUgMQgXAYgmAAQgyAAgXgmQgEAJgHAJQgZAggqAAQgyAAgXgnQgEAKgHAIQgZAggrAAQgbAAgTgLQgCAbgTAXQgZAfgpAAQg2AAgWgqg");
	var mask_graphics_342 = new cjs.Graphics().p("AEKJoQgGgLgDgLQgRAGgWAAQgxAAgbghQgcAhgvAAQgoAAgZgWQgZAWgoAAQgpAAgYgWQgaAWgoAAQgyAAgbgjIgDAFQgcAog0AAQg8AAgagvIgHgQQgFASgMAQQgYAfgsAAQgyAAgWgkQgYAOgiAAQgwAAgbgbQgbAbgsAAQgpAAgZgWQgcAggvAAQg7AAgagvQgFgJgDgJQgOAPgYAAQgdAAgOgXIgEgJQgCAJgHAJQgOATgaAAQgeAAgNgXQgEgJgCgIIgGAKQgOAUgbAAQgdAAgNgXQgHgNgBgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgMQgJAEgNAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgbgBgNgXIgHgbQAAgPAKgPIAHgIQgQgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgPgFgJgQQgIgOAAgMQAAgQAKgOQAGgJAJgEQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAIgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgYgTQhFAJhrAAQgkAAgagJQgbARglAAQhJAAgeg3QgPgdAAggQAAgnAZggQAhgqA8AAQAuAAAeAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA7AAAbAxIACACQEUjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm9AIImigCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAEQASAMABAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAZAKABAkQAAAQgJAOIgHAIQAdAIACAnQAAAOgGAMQAsACADAwQAAANgGAMQAJgFAMAAQAuAAAEAyQAOgPAVAAQAsAAAGAqIAGgLQAOgUAaAAQAlAAALAgQACgIAGgJQAPgVAZAAQAZAAANAPQAFgNAIgMQAcgoA0AAQApAAAZAWQAbggAwAAQAuAAAaAbQAcgbAuAAQAgAAAXAMIAAgFIgBgCQgHgOgCgQIgCgQQAAgeATgYQAYggAsAAQA0AAAXAqQAMAXAAAXIgBANQANAYAAAVQAAATgIARIACAKIADgFQAdgoA1AAQAyAAAbAjIADgFQAbgoA1AAQApAAAZAXQAagXAnAAQApAAAZAXQAZgXAnAAQAxAAAaAiQAcgiAwAAIAOABQADgWAOgSIAAgGQAAgfASgYQAXgfAuAAQA0AAAWAqQANAYAAAWQAAAcgSAZIAAAFQAAAJgBAIIAEANQAYgeArAAQAyAAAXAmQAEgJAHgJQAYggAsAAQAxAAAYAmQAEgJAGgIQAYghAsAAQAeAAAUANQAXgZAmAAQAWAAARAIQAKgCAKAAQAxAAAXAnQAcgnBTAAQBTAAAdArQAPAWgBAYQAABWh+AAQhSAAgdgmIgFAHQgYAfgrAAQgXAAgRgHQgJABgKAAQgeAAgUgMQgXAYgmAAQgyAAgXgmQgEAJgHAJQgZAggqAAQgyAAgXgnQgEAKgHAIQgZAggrAAQgbAAgTgLQgCAbgTAXQgZAfgpAAQg2AAgWgqg");
	var mask_graphics_343 = new cjs.Graphics().p("AEjJoQgGgLgDgLQgRAGgVAAQgyAAgaghQgcAhgvAAQgpAAgYgWQgaAWgoAAQgoAAgZgWQgaAWgoAAQgyAAgagjIgEAFQgbAog1AAQg7AAgbgvIgHgQQgFASgMAQQgYAfgrAAQgyAAgWgkQgYAOgiAAQgwAAgcgbQgaAbgtAAQgpAAgZgWQgcAggvAAQg6AAgagvQgFgJgEgJQgOAPgYAAQgcAAgOgXIgEgJQgDAJgGAJQgOATgaAAQgeAAgNgXQgFgJgCgIIgGAKQgNAUgbAAQgeAAgNgXQgHgNAAgNQgNAOgWAAQgdAAgOgYQgIgOAAgMQAAgNAHgMQgKAEgMAAQgdAAgNgXQgIgOAAgNQAAgNAHgMQgcgBgMgXIgIgbQAAgPAKgPIAHgIQgQgFgIgQQgIgNAAgNQAAgQAKgOQAHgKAJgFQgagKAAgmQAAgRAJgOQAGgKAIgFQgQgFgJgQQgIgOAAgMQAAgQAKgOQAHgJAJgEQgIgGgFgJQgIgPAAgMQAAgPAKgPQAGgIAHgFQgJgGgGgLQgIgOAAgMQAAgPAKgPQAFgGAGgEQgLgGgHgMQgGgMgBgKQgYAPghAAQglAAgYgTQhFAJhqAAQgkAAgagJQgYAPggACIgJAAIgBAAIgCAAIgFAAIgEAAIgJgBQgSAFgaAAQhQAAgTgqQgFgKAAgrQAAgmAHgVQARg2AzAAQAHAAAHAEQARgRAXgHQASgFAWAAQAvAAAdAYQBMgZCwAAQAsAAAcARIAEgGQAdgpAzAAQA8AAAbAxIABACQEUjPCPBPQAtAZAbA1IAPAfQgUhkAAgZQAAgoAXgeQAbgmAzAAQCOAAAAE2QEQACDJAIQHaAABPg6QAagSgPgcQgVgaAAgIQAAgiAQgdQAZgxA7AAQBkAAAtBfQAaA4AAA4QQwAND2AeQBpAOARAWQAHAIgCAOIgDAYQAABYifApQjNA2oMAAQmpAAiHgrQgjgMgXgSQgRgOgQAAQhAAMm9AIImigCIj2ACQAXA5AAA5QAACOh1AAQhzAAgbiCQgKgwAFg1QAEgwANgYQiPgahsAKQg7AGhOAYQg7ASgcgGQgpgIg7g7IgBgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgKAOQgFAIgHAFQAJAGAFAKQAIANAAAOQAAAQgKAPQgGAIgIAEQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgKAOQgGALgKAFQAYAKACAkQAAAQgKAOIgGAIQAdAIACAnQAAAOgHAMQAsACAEAwQAAANgHAMQAKgFAMAAQAtAAAFAyQANgPAWAAQArAAAGAqIAGgLQAOgUAbAAQAlAAAKAgQADgIAGgJQAOgVAZAAQAaAAANAPQAEgNAJgMQAcgoAzAAQApAAAZAWQAcggAvAAQAuAAAaAbQAcgbAvAAQAgAAAWAMIABgFIgBgCQgHgOgDgQIgBgQQAAgSAHgRIgHgMQgMgWAAgYQAAgeATgZQAXgfAtAAQA0AAAXAqQAMAYAAAWQAAATgIARIAHALQANAXAAAXIgBANQANAYAAAVQAAATgIARIACAKIADgFQAcgoA1AAQAzAAAaAjIADgFQAcgoA0AAQAqAAAZAXQAZgXAnAAQApAAAZAXQAZgXAoAAQAwAAAbAiQAbgiAxAAIANABQADgWAPgSIgBgGQAAgTAHgQQgHgHgGgLQgMgWAAgYQAAgeAUgZQAYgfArAAQA0AAAXAqQANAYAAAWQAAASgIARQAHAIAGAKQAMAYAAAWQAAAcgRAZIAAAFQAAAJgCAIIAFANQAYgeArAAQAxAAAYAmQAEgJAGgJQAZggArAAQAyAAAXAmQAEgJAHgIQAYghAsAAQAdAAAUANQAXgZAnAAQAWAAARAIQAJgCAKAAQAyAAAXAnQAbgnBTAAQBTAAAeArQAPAWgCAYQAABWh+AAQhRAAgdgmIgFAHQgYAfgsAAQgXAAgRgHQgJABgJAAQgeAAgUgMQgYAYglAAQgzAAgWgmQgEAJgHAJQgZAggrAAQgyAAgWgnQgFAKgHAIQgZAggqAAQgcAAgTgLQgBAbgTAXQgZAfgqAAQg1AAgXgqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(135).to({graphics:mask_graphics_135,x:210.7,y:79}).wait(11).to({graphics:mask_graphics_146,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_147,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_148,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_149,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_150,x:210.7,y:82.6}).wait(1).to({graphics:mask_graphics_151,x:210.7,y:87.1}).wait(1).to({graphics:mask_graphics_152,x:210.7,y:91.4}).wait(1).to({graphics:mask_graphics_153,x:210.7,y:95.1}).wait(1).to({graphics:mask_graphics_154,x:210.7,y:98.7}).wait(1).to({graphics:mask_graphics_155,x:210.7,y:100.4}).wait(1).to({graphics:mask_graphics_156,x:210.7,y:100.9}).wait(1).to({graphics:mask_graphics_157,x:210.7,y:100.9}).wait(1).to({graphics:mask_graphics_158,x:210.7,y:103.2}).wait(1).to({graphics:mask_graphics_159,x:210.7,y:103.2}).wait(1).to({graphics:mask_graphics_160,x:210.7,y:103.2}).wait(1).to({graphics:mask_graphics_161,x:210.7,y:103.2}).wait(134).to({graphics:mask_graphics_295,x:210.7,y:79}).wait(17).to({graphics:mask_graphics_312,x:202.5,y:79}).wait(1).to({graphics:mask_graphics_313,x:208.7,y:79}).wait(1).to({graphics:mask_graphics_314,x:204.8,y:79}).wait(1).to({graphics:mask_graphics_315,x:204.8,y:79}).wait(1).to({graphics:mask_graphics_316,x:204.8,y:82.6}).wait(1).to({graphics:mask_graphics_317,x:204.8,y:87.1}).wait(1).to({graphics:mask_graphics_318,x:204.8,y:91.4}).wait(1).to({graphics:mask_graphics_319,x:204.8,y:95.1}).wait(1).to({graphics:mask_graphics_320,x:204.8,y:98.7}).wait(1).to({graphics:mask_graphics_321,x:204.8,y:100.4}).wait(1).to({graphics:mask_graphics_322,x:204.8,y:100.9}).wait(1).to({graphics:mask_graphics_323,x:204.8,y:100.9}).wait(1).to({graphics:mask_graphics_324,x:204.8,y:103.2}).wait(1).to({graphics:mask_graphics_325,x:204.8,y:103.2}).wait(1).to({graphics:mask_graphics_326,x:204.8,y:103.2}).wait(1).to({graphics:mask_graphics_327,x:204.8,y:103.2}).wait(1).to({graphics:mask_graphics_328,x:204.8,y:103.7}).wait(1).to({graphics:mask_graphics_329,x:204.8,y:103.7}).wait(1).to({graphics:mask_graphics_330,x:204.8,y:103.7}).wait(1).to({graphics:mask_graphics_331,x:204.8,y:103.7}).wait(1).to({graphics:mask_graphics_332,x:204.8,y:103.7}).wait(1).to({graphics:mask_graphics_333,x:204.8,y:106.1}).wait(1).to({graphics:mask_graphics_334,x:204.8,y:106.1}).wait(1).to({graphics:mask_graphics_335,x:204.8,y:106.1}).wait(1).to({graphics:mask_graphics_336,x:204.8,y:106.1}).wait(1).to({graphics:mask_graphics_337,x:204.8,y:106.1}).wait(1).to({graphics:mask_graphics_338,x:204.8,y:106.1}).wait(1).to({graphics:mask_graphics_339,x:204.8,y:106.1}).wait(1).to({graphics:mask_graphics_340,x:204.8,y:106.1}).wait(1).to({graphics:mask_graphics_341,x:204.8,y:106.1}).wait(1).to({graphics:mask_graphics_342,x:204.8,y:106.1}).wait(1).to({graphics:mask_graphics_343,x:202.2,y:106.1}).wait(140));

	// DiagramMain
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(2.5,1,1).p("AG0oIIAAEQAsjjwIAAkYA37jiQABAYAAAYQAFChAFC0QACAzADAyQAGBRArBAQApA8BDAaQBCAaBFAAQDAgCDAgBQBxAADDAAA+7jwISYAAIAAEnAe8jwMgrfAAA");
	this.shape_117.setTransform(209.3,104.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(2.5,1,1).p("AH9oIIAAEQArajwIAAkYA2yjiQAAAYABAYQAFChAFC0QACAzADAyQAGBRArBAQApA8BCAaQBDAaBFAAQDAgCDAgBQISgCWwABArajwIAAEnEAgFgDwMgrfAAAEggEgDwIUqAA");
	this.shape_118.setTransform(202,104.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(2.5,1,1).p("AH9oIIAAEQAFaH/IAAkcArajwIAAkYA2yjiQAAAYABAYQAFChAFC0QACAzADAyQAGBRArBAQApA8BCAaQBDAaBFAAQDAgCDAgBQISgCWwABAnyH/IAAkcArajwIAAEnEAgFgDwMgrfAAAEggEgDwIUqAA");
	this.shape_119.setTransform(202,104.5);

	var maskedShapeInstanceList = [this.shape_117,this.shape_118,this.shape_119];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_117}]},135).to({state:[{t:this.shape_118}]},177).to({state:[{t:this.shape_119}]},27).wait(144));

	// Layer 7
	this.instance_13 = new lib.PartDiagramDisplay();
	this.instance_13.parent = this;
	this.instance_13.setTransform(207.3,95.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF00FF").s().p("AgoBHQgJgHAAgfIABgMIAAgQIgBgEQAAgCACgDIACgoIgBgKIgBgKQAAgLAJAAQAEABADACIAVgEIASgCQAWAAAOAFQAGADAAAGQAAAEgDADQgCADgEAAIgDgBQgQgEgOAAIgQACIgTAEIAAAJIgBAkIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBANIAAAKQAAAVADAEQACACAMAAIARAAIARgBIAFAAIAGAAQAKAAAAAJQAAAIgIACQgJABgcAAQgdAAgIgIg");
	this.shape_120.setTransform(107.9,169.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF00FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_121.setTransform(95.9,169.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF00FF").s().p("AgvBGQgDgBgCgDQgCgDABgDIAIgaIALgkIAMglIADgMIAFgNQAEgHAGADIAIAAIANADQAQAFAMAPQAMARgFARQgFAVgVAJQgSAIgUgGIgLgEIgNAvQgBAEgDABIgEABIgDAAgAgGgiIgLAiIAJAEQAOAEANgFQANgEAEgPQADgKgJgJQgIgKgMgDIgHgCIgEAAg");
	this.shape_122.setTransform(82.4,168.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF00FF").s().p("AgDBNIgOgHIgOgIIgRgIIgQgIQgDgCgCgDQAAgEACgEQACgDADgBQAEgBADACIATAIIAJgOIAHgOIAIgNQAKgSARgbIgKgGIgKgGQgDgCgBgDQgBgEACgDQAEgIAHAEIAZANQAQAJAWASQAGAFgEAHQgCAEgEABQgDAAgDgBIgNgJIgMgJQgPAWgNAVIgGANIgIAPIgJANIAZAOQAEACABAEQAAAEgCADQgCAEgDABIgDAAIgDgBg");
	this.shape_123.setTransform(70.4,166.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF00FF").s().p("AgvA1QgQgKgEgTQgFgTAKgQQAQgbAngPQAggNATALIAHAEIAFAFQAFgDAFADQAFADgCAIIgJARQgBADgDACQgFACgEgDQgFgDABgHQABgHgBgCIgIgGQgMgGgXAJQghANgNAWQgGAJADALQACAMAKAGQAIAEALABQAFAAAOgCIAJABQADACAAAEQACAEgCAEQgCADgFABQgLACgKAAQgSAAgOgIg");
	this.shape_124.setTransform(59.6,161);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF00FF").s().p("AghBFQgEgBgCgEIgIgNIgIgNIgLgPIgLgQQgCgDACgDQABgDADgCQAEgCADABQAEABACADQADAEAJALQAHgCAIgFIANgHIANgJQASgKAdgOIgHgLIgGgKQgCgEABgDQABgEAEgCQAHgEAGAHIAOAYQAJAQALAZQADAIgIAEQgEACgDgBQgEgCgBgDIgHgMIgFgOQgZALgVAMIgNAIIgNAJQgIAEgHADIAPAZQACADgBAEQgBAEgDACIgGABIgBAAg");
	this.shape_125.setTransform(50.3,150.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF00FF").s().p("AA7A8QgEgCgBgEIgEgUIgEgVIgCgGIgoANQgYAJgOADIgJAEIgKADQgGACgFgBQgGgBgCgGQgBgDACgEQACgDADgBIAFgBIAEAAIANgFIANgEIAjgLIAjgMIgDgHQgFgUAAgMQAAgIAHgCQAEgBADACQAEACABAEIACAPIADAPIAEAQIAFAPIAEAVIAFAVQABAEgCADQgCADgEABIgDAAIgEgBg");
	this.shape_126.setTransform(45.2,136.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF00FF").s().p("AgsBAQgEgCgBgEQgBgDADgEQAVgmAAgmIgRAGIgSAFQgEABgDgCQgDgCgBgDQgBgEACgEQABgDAEgBIAVgHIAWgGIAYgEIAZgFIANgEIANgFQAFgBAFABQAFACABAGIAFAWQABANgCAKQgKAogbAIQgOADgNgJQgLgIgIgOQgIAggMASQgDAEgDABIgCAAIgFgBgAAogoIgKAEIgSAEIgSACIABAEIABAEQAFAWAJAKQAFAEAFADQAHADADAAQANgEAGgQQAHgPgDgPIgCgOg");
	this.shape_127.setTransform(43.7,122.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF00FF").s().p("AgvA2QgDgDgBgDQgCgIATgMIAbgNIgLgWIgLgXIgngGQgFgBgCgFQgBgEACgDQACgEAEgBQAEgBAgAGQACgDADAAQAIgCAEAIQAVAFAdAJQAoAMABAGQACAHgJAFIgdAMIg6AfIgMAIIgJAGIgDAAIgFgBgAAJAFIAhgPIgvgOIAOAdg");
	this.shape_128.setTransform(43.2,108.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF00FF").s().p("AgEAZQgMgQAAgVIABgLIgxgBQgEAAgCgCQgDgDAAgDQAAgEADgDQACgCAEAAIAbAAIAmACIAmACIANAAIANABQAIACgBAHIACAIIAAAOQAAAQgMAPQgMAQgSAAQgXAAgNgRgAAAgMQAAAPAIAKQAJAMAPAAQAKAAAIgLQAGgKAAgLIAAgIIAAgFIgRAAIglgCg");
	this.shape_129.setTransform(42.6,95.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[]},114).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]},47).to({state:[]},134).wait(188));

	// SENTENCE
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_130.setTransform(345.5,272.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIgBgWIABgUIAAgVQAAgEABgEQADgEAEAAQAGAAAAAGIAAADIgBADIAAAQIAAATQAGgEAGgCQAGgDADAAQARAAAJAMQAJALAAAQQABARgLAMQgLALgPAAQgMAAgIgEgAgKgCIgLAGIAAAMIAAAMIAAAMIAKAEIAKABQAJAAAIgHQAGgIAAgLQAAgLgFgHQgHgHgKAAQgEAAgGAEg");
	this.shape_131.setTransform(339.4,267.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_132.setTransform(329,269.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJgBgHgEQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_133.setTransform(319.2,269.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_134.setTransform(311.1,267.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgDACgDQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_135.setTransform(303.1,268);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgcAiIAAgzIABgHIAAgHQAAgIAGAAQAIAAgBAMQAOgNARAAQAGAAADAEQACAEABAKIAAAFQgBAJgGAAQgHAAAAgHIAAgFIgBgHQgLACgGAFQgGAFgFAJIAAAoQAAAHgHAAQgHAAAAgHg");
	this.shape_136.setTransform(291.7,269.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgYAfQgMgJAAgQQABgSAIgNQAKgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGADAIABQAEgBAHgCQAJgCACgDQADgFADAAQACAAACACQABABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_137.setTransform(284,269.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_138.setTransform(275.5,267.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgZAyQgKgKAAgRQAAgTAKgLQAKgMAQAAQAIAAAFACIAHAGIACgqQABgGAGAAQAGAAABAHIgEAtIAAAVQAAAYACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgFgBgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAIAAAOQABAKAGAGQAHAHAJAAQAFAAAFgCIAIgGIACgDIAAgMIAAgJIAAgIQgDgGgFgCQgFgDgGAAQgLgBgGAHg");
	this.shape_139.setTransform(262.1,267.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgYAfQgMgJAAgQQABgSAIgNQAKgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGADAIABQAEgBAHgCQAJgCACgDQADgFADAAQACAAACACQABABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_140.setTransform(253.8,269.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_141.setTransform(245.3,267.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgUApQgLgFAAgHQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAIABQAGAAAEgCQAHgCAAgEQAAgKgNgEIgHgBQgKgCgEgDQgGgDAAgIQAAgQAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAHIABAGQAAADgCACQgCACgEAAQgDAAgCgDIgCgIIgRAGQgLAEAAAHIAFABQAQADAHAFQANAIAAAOQgBAMgJAGQgKAFgMAAQgJAAgJgDg");
	this.shape_142.setTransform(237.1,268.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_143.setTransform(229.7,269.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_144.setTransform(220.2,269.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgUApQgLgFAAgHQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAIABQAFAAAFgCQAHgCAAgEQAAgKgOgEIgGgBQgKgCgEgDQgGgDAAgIQAAgQAPgGIANgFIANgFIAHgBQADAAACACQACACAAADIABAHIABAGQAAADgCACQgCACgEAAQgDAAgCgDIgCgIIgRAGQgLAEABAHIADABQARADAHAFQANAIAAAOQAAAMgLAGQgIAFgNAAQgJAAgJgDg");
	this.shape_145.setTransform(210.4,268.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgTApQgMgFAAgHQAAgCADgDQABgCADAAQADAAADADQACACAHABIAIABQAEAAAFgCQAHgCAAgEQAAgKgOgEIgHgBQgJgCgEgDQgGgDAAgIQAAgQAPgGIAMgFIAOgFIAHgBQADAAACACQACACAAADIABAHIABAGQAAADgCACQgCACgDAAQgEAAgCgDIgCgIIgRAGQgKAEAAAHIADABQARADAHAFQAMAIAAAOQAAAMgKAGQgIAFgMAAQgKAAgIgDg");
	this.shape_146.setTransform(198.6,268.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgYA5QgKgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgFAEgHAAQgNAAgIgJQgJgKAAgNQAAgUALgMQAMgMAUAAQAGAAAFACQAEABADAEQAIAAAAAIIgBAOIgDAOIgBAYQAAAOgDAKQgDAMgIAFQgIAHgQAAQgKAAgGgBgAgNgkQgGAJAAANQAAALADAEQAFAFAHAAQAHAAAHgHQAHgIABgHIACgZIgGgDQgDgCgDAAQgNAAgIAKg");
	this.shape_147.setTransform(191.1,271.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgZA5QgJgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKgBgNQABgUAKgMQANgMATAAQAGAAAFACQAEABADAEQAIAAAAAIIgBAOIgCAOIgCAYQAAAOgDAKQgEAMgHAFQgIAHgQAAQgKAAgHgBgAgMgkQgIAJABANQAAALADAEQAFAFAIAAQAGAAAHgHQAGgIABgHIADgZIgFgDQgEgCgDAAQgNAAgHAKg");
	this.shape_148.setTransform(183.2,271.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgBQACgDADAAQACAAACADQACABAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_149.setTransform(177.4,267.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAEAVIgDgRIgBgPIgGAMIgLAfIgCAEQgDAEgEABQgGAAgFgXIgGgdIgBgLIgBgLQgBgDADgCQACgCADAAQAGAAABAGIACALIABALIAEAfQAIgWAIgdQADgIAFAAQAGAAACAJIAEAbIAGAcIAFgUIAKgoQABgEAFAAQADAAADACQABACAAADIAAAEIgPA1QgCAGgFAHQgCAEgFAAQgIAAgFgUg");
	this.shape_150.setTransform(170.1,269.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_151.setTransform(160.4,267.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgIAQQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAEgLIAGgNQABgEAEAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAACgLAWQAAAEgDAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_152.setTransform(148.6,273.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#9900FF").s().p("AgZA5QgJgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKgBgNQAAgUAMgMQAMgMASAAQAIAAAEACQAEABADAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgDAMgIAFQgJAHgPAAQgKAAgHgBgAgMgkQgIAJAAANQAAALAEAEQAFAFAIAAQAGAAAHgHQAGgIABgHIAEgZIgGgDQgDgCgEAAQgNAAgHAKg");
	this.shape_153.setTransform(142,271.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#9900FF").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCABQgCACgDAAQgGAAgBgGg");
	this.shape_154.setTransform(134.4,269.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#9900FF").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgBQACgDADAAQACAAACADQACABAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_155.setTransform(128.3,267.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#9900FF").s().p("AgbAiIAAgzIAAgHIAAgHQAAgIAGAAQAIAAgBAMQAOgNARAAQAGAAADAEQACAEABAKIAAAFQgBAJgHAAQgGAAAAgHIAAgFIgBgHQgLACgGAFQgHAFgEAJIAAAoQAAAHgHAAQgHAAABgHg");
	this.shape_156.setTransform(122.7,269.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#9900FF").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAJgOARAAQAMAAAIAEQAJAFAAAKQAAAIgIAGIgQAHIgbANQAEAHAGACQAGADAIABQAFgBAGgCQAJgCACgDQADgFADAAQACAAADACQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgGAHgDANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_157.setTransform(115,269.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#9900FF").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_158.setTransform(105,269.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#9900FF").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_159.setTransform(93.3,269.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#9900FF").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_160.setTransform(83.5,269.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#9900FF").s().p("AgtA6QgCgCAAgDIABgXIABgXIAAgLIAAgNIABgRIAAgSQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAASIgBARIAAASIAfgFQATgDAMgBIABgfQAAgGACgGQACgHAFAAQADAAACACQACACAAADIgBADIgBAJIAAAGIABAHIgCAWIgBAVIABAQIABARQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgRIgBgQIAAgLQgMAAgSADIgeAHIgCASIgBATQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_161.setTransform(74.1,267.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_162.setTransform(383.3,277.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgaA9QgKgCAAgGQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgMQANgOAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAPIgDAOIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgmQgHAJAAAOQAAAMAEAEQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgEIgHgCQgOAAgIALg");
	this.shape_163.setTransform(376.9,275.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIABgHQgBgQgGgBQgJAAgHALQgGAJgFANIgBAIIAAAIIAAAHIABAHQAAADgCACQgCADgEAAQgDAAgCgDQgDgCAAgDIAAgHIgBgHIACgWIABgWIAAgHIAAgIQAAgDACgCQACgDADAAQAHAAABALIAAAJQANgRANAAQANAAAEALQAEAHABAOIAAAIIgBAGQAAAHACAKIABARQABADgCACQgDACgDABQgHAAgBgIg");
	this.shape_164.setTransform(368.7,273.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAACACQACADAAADIgBASIAAASIAAAOIAAAOQABADgDACQgCADgDAAQgDAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQADADAAADQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_165.setTransform(362.3,271.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAYAqIgYggIgQAQIgNAMQgCADgDAAQgDAAgCgCQgDgDAAgCIACgGIAHgHIAHgGIARgQIgKgPQgHgJgEgEQgDgCAAgEQAAgDACgDQACgCADABQAEgBAKAMIAMATIAQgOQAKgJADgFQADgEADAAQADAAACACQACACABAEQAAAEgIAHIgLALIgOAOIAZAgQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQABADgDADQgCACgEAAQgDAAgCgDg");
	this.shape_166.setTransform(355.1,273.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgIgKQgJgKAAgUQABgRANgOQANgNAQAAQAHAAAJADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_167.setTransform(346.3,273.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgcIABgcQAAgHAGgBQAIABAAAHIgBAcIAAAcIgBAmIgBASQgBAIgFAAQgIAAAAgIg");
	this.shape_168.setTransform(340,271.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgQARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgFADAAQADAAACADQACACAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_169.setTransform(333.6,273.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_170.setTransform(325.4,273.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgQARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgFADAAQADAAACADQACACAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_171.setTransform(312.3,273.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_172.setTransform(304.2,273.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgQARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgFADAAQADAAACADQACACAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_173.setTransform(295.9,273.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCACQgDAEgEAAQgHABgFgYQgDgMgCgTIgCgMIgBgMQAAgDACgCQACgDAEAAQAFAAABAGIADAMIABAMIAEAiQAJgYAJgfQACgJAGAAQAGAAACAKIAGAdIAFAdIAGgVIAKgqQABgFAGAAQADABACACQADACAAADIgBAEQgGAZgKAfQgCAIgGAHQgCAEgFAAQgIgBgFgUg");
	this.shape_174.setTransform(285.9,273.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_175.setTransform(271.5,273.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgUA9QgCgCAAgEQAAgHARgmIgcg1IgEgFQgCgDAAgDQAAgDACgDQADgCADAAQAEAAABACQAOATAOAiIAMgbQAGgOAGgKQACgEAEAAQADAAADACQACADAAADIgBADIgbA6QgKAVgEAPIgFAOQgCAGgFAAQgEAAgCgCg");
	this.shape_176.setTransform(263.4,275.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_177.setTransform(255.1,273.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_178.setTransform(246.5,271.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgQARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgFADAAQADAAACADQACACAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_179.setTransform(232.5,273.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAFgHANQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg5IAAgMIgBgIIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgEAJAAQANABAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAACgCACQgCADgDAAQgGAAgCgGg");
	this.shape_180.setTransform(223.5,271.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgBgsIgSgCQgHgBAAgGQAAgEACgDQADgBACAAIARABIAAgLIAAgJQAAgEABgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIALgBIAKAAQAFACAAAGQAAADgDACQgCACgDABIgEAAIgDgBIgLACIACAtIAAADIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_181.setTransform(215,272.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgJARQgCgCAAgDQAAgDAFgJIAGgPQACgDADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");
	this.shape_182.setTransform(204.6,278.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#9900FF").s().p("AAVA8IgMgTIgNgTIgOALIgBAXQAAAEgCACQgCACgEAAQgIAAAAgLIABgTIABgTIABgbIAAgbIAAgIIgBgIQAAgEACgCQADgCADAAQADAAACACQADACAAAEIAAAIIAAAJIAAAZIAAAaQAKgIAJgJIARgRQADgDADAAQADAAACACQADADAAADQAAADgCACIgYAXIARAYQAMAQAAAFQAAADgDACQgCACgDAAQgFAAgCgEg");
	this.shape_183.setTransform(198.1,271.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#9900FF").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_184.setTransform(189.7,273.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#9900FF").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_185.setTransform(181.3,273.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#9900FF").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCACQgCAEgFAAQgHABgFgYQgDgMgCgTIgDgMIgBgMQAAgDADgCQACgDADAAQAHAAABAGIABAMIABAMIAFAiQAJgYAJgfQADgJAFAAQAGAAADAKIAEAdIAGAdIAGgVIAKgqQABgFAFAAQAEABACACQACACAAADIAAAEQgGAZgKAfQgCAIgFAHQgDAEgEAAQgKgBgEgUg");
	this.shape_186.setTransform(171.8,273.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#9900FF").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_187.setTransform(157.3,273.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#9900FF").s().p("AgIA4IABgcIABgcIAAgcIABgcQAAgHAGgBQAIABAAAHIgBAcIAAAcIgBAmIgBASQgBAIgFAAQgIAAAAgIg");
	this.shape_188.setTransform(151.5,271.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#9900FF").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_189.setTransform(145.6,273.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#9900FF").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQADADAAADIgBASIgBASIAAAOIABAOQAAADgDACQgCADgCAAQgEAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDACAAQAEAAADADQADADgBADQABAEgDADQgDACgEAAQgCAAgDgCg");
	this.shape_190.setTransform(139.5,271.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#9900FF").s().p("AgaA9QgKgCAAgGQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgMQANgOAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAPIgDAOIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgmQgHAJAAAOQAAAMAEAEQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgEIgHgCQgOAAgIALg");
	this.shape_191.setTransform(132.7,275.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#9900FF").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgQARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgFADAAQADAAACADQACACAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_192.setTransform(119.5,273.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#9900FF").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAFgHANQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg5IAAgMIgBgIIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgEAJAAQANABAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAACgCACQgCADgDAAQgGAAgCgGg");
	this.shape_193.setTransform(110.5,271.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#9900FF").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgDQADgBACAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAABALIAAAIIAAAEIAAAFIALgBIALAAQAFACAAAGQAAADgCACQgCACgEABIgDAAIgFgBIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_194.setTransform(102,272.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#9900FF").s().p("AgaA9QgKgCAAgGQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgMQANgOAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAPIgDAOIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgmQgHAJAAAOQAAAMAEAEQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgEIgHgCQgOAAgIALg");
	this.shape_195.setTransform(89,275.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#9900FF").s().p("AATAmIgCgRIgBgRIAAgHIABgHQAAgQgHgBQgIAAgIALQgGAJgEANIgBAIIgBAIIABAHIAAAHQAAADgCACQgDADgDAAQgDAAgCgDQgCgCgBgDIAAgHIAAgHIABgWIABgWIgBgHIAAgIQAAgDACgCQADgDADAAQAHAAABALIAAAJQANgRANAAQANAAAFALQADAHAAAOIAAAIIAAAGQAAAHACAKIACARQAAADgDACQgCACgDABQgHAAgBgIg");
	this.shape_196.setTransform(80.9,273.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#9900FF").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQADgCACAAQADAAADACQACADAAADIgBASIgBASIAAAOIABAOQgBADgCACQgCADgCAAQgDAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_197.setTransform(74.4,271.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#9900FF").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAFgHANQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg5IAAgMIgBgIIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgEAJAAQANABAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAACgCACQgCADgDAAQgGAAgCgGg");
	this.shape_198.setTransform(67.5,271.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#9900FF").s().p("AgVAiQgMgKAAgRQAAgPALgQQAMgTANAAQAIAAAKADQALAFAAAHQAAADgBACQgCADgDgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgCQgEgFgLAAQgHAAgHAPQgHANAAAIQAAALAHAFQAGAGAJAAQAFAAAFgCIAJgFIAEgBQADgBACADQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_199.setTransform(58.7,273.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#9900FF").s().p("AgEA3QgCgCAAgDIAAgJIAAgJIgCgsIgRgCQgHgBAAgGQAAgEACgDQADgBADAAIAQABIgBgLIAAgJQAAgEADgCQACgCADAAQAGAAABALIAAAIIAAAEIAAAFIALgBIALAAQAFACAAAGQAAADgCACQgCACgEABIgDAAIgFgBIgKACIABAtIAAADIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_200.setTransform(50.8,272.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#9900FF").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKAAgUQAAgRANgOQAOgNARAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgBACgDAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_201.setTransform(42.9,273.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#9900FF").s().p("AARA9QgDgCAAgEIgFgPIgFgiIgFggQgHAZgIARQgJAVgDAMIABADQABAEgEACQgDACgEAAQgKAAAAgJIgCgKIgIgnIgSg2IAAgDQgBgHAJAAQAEAAAEAFIAFAQIAJAiIAIAiQAIgUAJgaIAIgYQAGgRAGAAQAFAAACAFQAEAHADAZIAEAeIAHAfQALgZAPgqIAEgPQADgJADgFQADgEAFAAQAHAAABAHIgDAIIgEAJIgDAOIgYA3IgLAbQgDAFgFAAQgEAAgDgCg");
	this.shape_202.setTransform(30.9,272);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},114).to({state:[]},182).to({state:[{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},5).wait(182));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,-20.4,376.1,117.8);


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
(lib.pre_Scene6a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6a:0,scene6a_repeat:627});

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
		
		 window.open ("pre_Scene6c.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pre_Scene4.html","_self");
		}
	}
	this.frame_150 = function() {
		playSound("hammeringtwiggs");
	}
	this.frame_250 = function() {
		playSound("watchingthegirlswork");
	}
	this.frame_635 = function() {
		this.gotoAndPlay("scene6a_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(150).call(this.frame_150).wait(100).call(this.frame_250).wait(385).call(this.frame_635).wait(1));

	// content
	this.instance = new lib.PresentParticipleDiagrams2();
	this.instance.parent = this;
	this.instance.setTransform(70,61.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(636));

	// Twiggs
	this.instance_1 = new lib.CouchKidsNailingTwiggs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(422.4,278.2,0.477,0.477,0,0,0,282.9,42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(636));

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
	this.shape_6.setTransform(435.2,28.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjArIAAhAIAAgJIABgJQgBgKAJAAQAJAAAAAQQARgSAVAAQAHAAAFAGQADAFAAAMIAAAHQgBALgIAAQgIAAAAgJIAAgHIAAgHQgPACgIAGQgIAGgGAMIAAAyQAAAJgJAAQgIAAAAgJg");
	this.shape_7.setTransform(423.4,28.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbAnQgMgNgBgVQgBgUAMgQQANgTAWAAQASAAAKARQAHAOAAATQAAAUgLAOQgLARgTAAQgQAAgLgMgAgQgSQgGAKAAANQAAANAIAIQAGAGAIAAQAJAAAHgHQAHgIABgNQABgjgUAAQgNAAgIANg");
	this.shape_8.setTransform(413.4,28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgsBLQgDgCAAgEIABg4IABg2IAAgMIgBgMQAAgEADgDQADgCAEAAQADAAACABIAVgDIAPgBQALAAANADQATAEAAAIQAAADgCADQgDADgEAAIgEAAQgLgFgTAAIgNABIgTADIAAAoQASgFAJAAIAcACQAJABAAAIQAAAFgDACQgCACgEAAIgPgBIgNAAQgGAAgVAEIgBBBQAAAEgDACQgCADgEAAQgEAAgDgDg");
	this.shape_9.setTransform(403.3,26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFA3QgCgDAAgEIgCghQgDgVAAgLQAAgKgCgGQgHADgHAHIgLAMIgEAGIgBAPIgBAQIABAIIAAAHQAAAEgCADQgDACgEAAQgLAAAAgXIABgRIACgQIgBgOIgBgPQAAgVAJAAQAEAAADADQADADAAAEIgBAFIAAAGIAAAKQAFgKAJgIQAKgIAGAAQAPAAAEAOQAFgHAHgDQAIgDAJAAQAPAAAGAQIAEAaIAGA1QABADgDADQgDACgEAAQgIAAgBgIQgCgKgBgSIgDgcQgBgHgDgGQgDgIgDAAQgEAAgJAGQgJAFgDADQAAAJABAJIACAYQACAOAAAKQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(384.1,28.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHADgEAAQgVAAgKgNQgKgLAAgYQAAgWAQgQQAPgPAVgBQAIABAKAEQANAFAAAHQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABIgCAMIAAATQAAAMABAGIAGAQIACAGIABABQAAAEgDACQgCADgEAAQgCAAgEgFgAgPgWQgKAMAAAOQAAAPAFAIQAGAHAKABQAIgBAGgDQAEgBAGgGQgDgYAAgMIAAgIIACgLIgGgCIgEgBQgNAAgLAMg");
	this.shape_11.setTransform(371.7,28.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgjArIAAhAIAAgJIABgJQgBgKAJAAQAIAAABAQQARgSAVAAQAHAAAEAGQAEAFAAAMIAAAHQgBALgIAAQgIAAAAgJIAAgHIAAgHQgQACgHAGQgIAGgGAMIAAAyQAAAJgJAAQgIAAAAgJg");
	this.shape_12.setTransform(362.6,28.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfBIQgMgCAAgIQAAgIAIAAIALACQAIABAJAAQARAAAHgRQAFgMAAgXQgGAJgGAFQgHAFgIAAQgRAAgLgMQgKgLAAgSQAAgZAPgPQAOgQAZAAQAIAAAGACQAGADADAEQAKAAAAALIgBASIgDARIgDAeQAAATgDAMQgEAPgKAHQgKAJgUAAQgNAAgIgCgAgRguQgIALAAARQAAAOAFAFQAGAHAKAAQAIAAAJgJQAHgKACgKIAEgfIgIgFIgIgBQgRAAgKAMg");
	this.shape_13.setTransform(352.5,31.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHADgEAAQgVAAgKgNQgKgLAAgYQAAgWAQgQQAPgPAVgBQAIABAKAEQANAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgCAMIAAATQAAAMABAGIAGAQIACAGIABABQAAAEgDACQgCADgEAAQgCAAgEgFgAgPgWQgKAMAAAOQAAAPAFAIQAGAHAKABQAIgBAGgDQAEgBAGgGQgDgYAAgMIAAgIIACgLIgGgCIgEgBQgNAAgLAMg");
	this.shape_14.setTransform(342.8,28.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIBDQgDgCABgFIgBgQIAAgRIABgWIABgUQAAgFACgCQADgDAEAAQACAAADADQACACAAAFIAAAUIgBAWIAAARIABAQQgBAFgCACQgDADgCAAQgEAAgDgDgAgFgyQgDgEgBgEQABgEADgEQADgDADAAQAFAAADADQADAEABAEQgBAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_15.setTransform(335.4,26.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_16.setTransform(326,26.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF00FF").s().p("AgoBIQgJgIAAgfIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAALQAAAVADADQACADAMAAIARAAIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_17.setTransform(307.5,26.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF00FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_18.setTransform(296.3,26.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF00FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_19.setTransform(286,26.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF00FF").s().p("AgoBEQgDgDAAgEQAAgDADgDQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEgBgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAaAAAZIAAAPIABAQIgBARIAdgBQAEAAADACQADAEAAAEQAAADgDAEQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_20.setTransform(275.8,26.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF00FF").s().p("AgmA5QgMgOAAgUQAAgeAaghQAVgcAWAAIAIABIAGABQAEgFAFAAQAGAAACAJQACAHgBALQAAAEgBADQgDAEgFAAQgGAAgDgHQgCgGgCgCQgCgBgIAAQgOAAgPAVQgWAcAAAXQAAAMAIAJQAHAJAMAAQAIAAAKgFIARgLQAEgEAEAAQAEAAACADQADADAAAEQAAAEgEADQgYAWgYAAQgUAAgNgPg");
	this.shape_21.setTransform(265.1,26.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF00FF").s().p("AgoBEQgDgDAAgEQAAgDADgDQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEgBgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAaAAAZIAAAPIABAQIgBARIAdgBQAEAAADACQADAEAAAEQAAADgDAEQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_22.setTransform(253.9,26.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF00FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_23.setTransform(243.1,26.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF00FF").s().p("AgvBGQgDgCAAgFIAAgVIAAgWIABgZIACgZIgBgOIgBgOQAAgFADgEQAEgFAGAAIAWACQANACAIAEQAmAUAAAdQAAAOgOAKQgKAJgPAEQAcAQAPARQACADAAADQAAAEgDADQgCADgEAAQgDAAgDgDQgggfgkgKIABASIAAASQAAAFgCACQgDADgEAAQgEAAgDgDgAgdgpIAAALIgBATIgBARIADAAIAFABQAXAAALgHQAGgCAEgEQAFgFgBgEQAAgNgOgLQgNgKgOgCIgOgBg");
	this.shape_24.setTransform(230.1,26.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF00FF").s().p("AAgAwQgCgIgEgWIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgDQgDgCAAgEQAAgEAOgeQgBgCAAgEQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA+IAFAQIADAKQAAAEgDACQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_25.setTransform(216.8,26.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF00FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_26.setTransform(205.1,26.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF00FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_27.setTransform(188.7,26.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF00FF").s().p("Ag9BIQgDgDAAgEIABgLIAAgMIABgRIAAgSIAAgRIgBgTIgBgRIgBgRQAAgFAEgDQADgEAFAAQAFAAAHALQAXAjASAXQAVAaAbAZIAAgMIgBgMQAAgogCgYIgDgJIgCgKQAAgLAKAAQAQAAAAA8IgBAeIAAAfIgBAOQgCAKgIAAQgFAAgHgHQgmgkgwhCIAAAVIAAAUIAAAXIAAAYQAAAZgJAAQgGAAgCgEg");
	this.shape_28.setTransform(174,26.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF00FF").s().p("AgoBIQgJgIAAgfIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAALQAAAVADADQACADAMAAIARAAIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_29.setTransform(160.7,26.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF00FF").s().p("AgkBAQgSgIAAgOQAAgEACgCQAEgDAEAAQAEAAAEAGQAEAHAEACQAHAFAPAAQAOAAAMgGQAQgIAAgOQAAgMgNgHQgMgFgPgBQgOAAgLgFQgNgIAAgOQAAgQASgOQATgNARAAQAJAAAMADQAPAEAAAGQAAAJgJAAIgMgCIgPgCQgNAAgKAHQgLAHAAAKQAAAIAOADIATACQAVACAMAMQALAJAAAQQAAAWgUANQgSAMgXAAQgQAAgOgHg");
	this.shape_30.setTransform(148,26.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF00FF").s().p("AgoBIQgJgIAAgfIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAALQAAAVADADQACADAMAAIARAAIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_31.setTransform(135.7,26.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF00FF").s().p("AguBGQgEgCAAgFIAAgVIgBgWIACgZIACgZIgBgOIgBgOQABgFADgEQADgFAGAAIAWACQANACAIAEQAmAUAAAdQgBAOgNAKQgJAJgQAEQAcAQAPARQADADAAADQAAAEgEADQgCADgEAAQgDAAgDgDQgfgfglgKIABASIAAASQAAAFgDACQgCADgEAAQgEAAgCgDgAgdgpIABALIgBATIgDARIAFAAIADABQAYAAALgHQAFgCAFgEQAEgFABgEQAAgNgPgLQgMgKgPgCIgOgBg");
	this.shape_32.setTransform(123.7,26.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF00FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_33.setTransform(112.7,26.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3,1,1).p("EAkPgX2MhIdAAAMAAAAvtMBIdAAAg");
	this.shape_34.setTransform(276,193.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#00CC99","#DDFFF8"],[0,1],0.1,153.5,0.1,-153.4).s().p("EgkOAX3MAAAgvtMBIdAAAMAAAAvtgAGnjAIAFACIgEgDg");
	this.shape_35.setTransform(276,193.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.vol_dwn},{t:this.vol_up},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_goNext},{t:this.instance_2},{t:this.btn_menu},{t:this.btn_goBack}]}).wait(636));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,198.2,532.5,404.8);
// library properties:
lib.properties = {
	id: '66B1979F51E4E84092901860974B32DF',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/hammeringtwiggs.mp3", id:"hammeringtwiggs"},
		{src:"sounds/watchingthegirlswork.mp3", id:"watchingthegirlswork"}
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
an.compositions['66B1979F51E4E84092901860974B32DF'] = {
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