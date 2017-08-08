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


(lib.success = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUApQgLgEAAgIQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAIABQAGAAAEgCQAHgBAAgFQAAgKgNgEIgHgBQgKgDgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgDAAgCgDIgCgIIgRAGQgLAEAAAHIAFABQAQAEAHAEQANAIAAAOQgBAMgJAGQgKAFgMAAQgJAAgJgDg");
	this.shape.setTransform(22.9,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUApQgLgEAAgIQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAJABQAEAAAFgCQAHgBAAgFQAAgKgOgEIgGgBQgKgDgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgDAAgCgDIgCgIIgRAGQgLAEAAAHIAEABQARAEAHAEQANAIAAAOQAAAMgLAGQgIAFgMAAQgKAAgJgDg");
	this.shape_1.setTransform(15.6,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAfQgLgIAAgRQAAgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgDQAIgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgIAAgHAHg");
	this.shape_2.setTransform(8.2,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_3.setTransform(0.1,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_4.setTransform(-7.6,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_5.setTransform(-15.4,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUApQgLgEAAgIQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAIABQAFAAAFgCQAHgBAAgFQAAgKgOgEIgGgBQgKgDgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgDAAgCgDIgCgIIgRAGQgLAEAAAHIAEABQARAEAHAEQANAIAAAOQAAAMgLAGQgIAFgNAAQgJAAgJgDg");
	this.shape_6.setTransform(-23.1,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-12.4,57.5,24.9);


(lib.on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape.setTransform(4.1,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_1.setTransform(-4.1,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-12.4,19.9,24.9);


(lib.led = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAyQgKgKAAgRQAAgUAKgKQAKgMAQAAQAJAAAEADIAHAFIACgpQABgHAGAAQAGAAABAHIgDAtIgBAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHAAAPQABAJAGAHQAHAHAJAAQAFAAAFgCIAIgGIABgDIAAgMIAAgJIAAgJQgCgFgFgDQgFgCgGAAQgLAAgGAGg");
	this.shape.setTransform(6.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgDQAJgCACgDQADgFADAAQACAAACADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_1.setTransform(-2.1,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHA1IABgbIABgaIAAgaIAAgaQAAgIAHABQAGgBABAIIgBAaIAAAaIgCAkIAAARQgBAIgFgBQgIAAABgHg");
	this.shape_2.setTransform(-8.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-12.4,25.3,24.9);


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


(lib.Focused = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAyQgLgKAAgRQAAgUALgKQALgMAPAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAAAAHIgCAtIgBAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQgBAJAHAHQAHAHAJAAQAFAAAEgCIAIgGIACgDIAAgMIAAgJIAAgJQgCgFgFgDQgEgCgHAAQgLAAgHAGg");
	this.shape.setTransform(24,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAFAAAHgDQAJgCADgDQACgFACAAQADAAADADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_1.setTransform(15.7,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTApQgMgEAAgIQAAgCADgDQACgCACAAQADAAAEADQABACAHABIAIABQAFAAAFgCQAGgBAAgFQAAgKgOgEIgHgBQgJgDgEgCQgGgDAAgJQAAgPAPgGIAMgFIAPgFIAGgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgDAAQgFAAgBgDIgCgIIgRAGQgKAEAAAHIADABQAQAEAJAEQAMAIgBAOQABAMgLAGQgJAFgLAAQgKAAgIgDg");
	this.shape_2.setTransform(7.6,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_3.setTransform(0.3,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_4.setTransform(-7.5,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_5.setTransform(-15.5,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiA7QgDgCAAgDIABgsIABgqIgBgKIAAgKQAAgCACgDQACgCAEAAIAEABIAQgCIAMgBQAIAAALACQAPAEAAAFQAAADgCADQgCACgDAAIgDgBQgJgCgPAAIgKAAIgPACIAAAgQAOgEAHAAIAXABQAGABAAAHQAAADgCADQgCABgDAAIgLgBIgLAAQgFAAgQADIgBAzQAAADgCACQgCADgDAAQgDAAgCgDg");
	this.shape_6.setTransform(-23.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-12.4,61,24.9);


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


(lib.beach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHAAQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape.setTransform(16.4,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_1.setTransform(8.1,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_2.setTransform(0.4,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAfQgKgIgBgRQABgSAIgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgHAGIgQAHIgbANQAEAHAGACQAHAEAGAAQAFAAAIgDQAIgCACgDQADgFADAAQADAAABADQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_3.setTransform(-7.4,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIAAgWIAAgUIAAgVQAAgEABgEQADgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAGgDAEAAQAQAAAJAMQAKALAAAQQgBARgKAMQgLALgPAAQgMAAgJgEgAgKgCIgLAGIgBAMIAAAMIABAMIAJAEIALABQAJAAAIgHQAGgIAAgLQAAgLgFgHQgHgHgJAAQgGAAgFAEg");
	this.shape_4.setTransform(-15.9,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-12.4,45.3,24.9);


(lib.abandoned = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAyQgLgKAAgRQAAgUALgKQALgMAPAAQAIAAAFADIAHAFIACgpQABgHAGAAQAHAAAAAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgGQgFAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHABAPQAAAJAGAHQAHAHAJAAQAFAAAFgCIAHgGIADgDIAAgMIAAgJIAAgJQgDgFgFgDQgEgCgHAAQgLAAgGAGg");
	this.shape.setTransform(32.4,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAfQgKgIgBgRQABgSAIgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgHAGIgQAHIgbANQAEAHAGACQAHAEAGAAQAFAAAIgDQAIgCACgDQADgFADAAQADAAABADQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_1.setTransform(24.1,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_2.setTransform(16.1,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_3.setTransform(7.9,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAyQgLgKABgRQgBgUALgKQALgMAPAAQAIAAAFADIAHAFIACgpQABgHAGAAQAHAAAAAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHAAAPQABAJAGAHQAHAHAJAAQAFAAAFgCIAIgGIACgDIAAgMIAAgJIAAgJQgDgFgFgDQgEgCgHAAQgLAAgGAGg");
	this.shape_4.setTransform(-0.3,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_5.setTransform(-8.5,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_6.setTransform(-16.4,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIgBgWIABgUIAAgVQAAgEACgEQACgEAEAAQAGAAAAAGIAAADIgBADIAAAQIAAATQAGgEAGgCQAFgDAEAAQARAAAJAMQAJALAAAQQABARgMAMQgKALgPAAQgMAAgIgEgAgLgCIgKAGIAAAMIAAAMIAAAMIAKAEIAKABQAJAAAHgHQAHgIAAgLQAAgLgGgHQgFgHgLAAQgFAAgGAEg");
	this.shape_7.setTransform(-24.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_8.setTransform(-33,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-12.4,77.8,24.9);


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

	// timeline functions:
	this.frame_2 = function() {
		playSound("diagnal_line");
	}
	this.frame_18 = function() {
		playSound("diagnal_line");
	}
	this.frame_26 = function() {
		playSound("diagnal_line");
	}
	this.frame_49 = function() {
		playSound("diagnal_line");
	}
	this.frame_63 = function() {
		playSound("diagnal_line");
	}
	this.frame_75 = function() {
		playSound("wrong_answer");
	}
	this.frame_78 = function() {
		playSound("wrong_answer");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(16).call(this.frame_18).wait(8).call(this.frame_26).wait(23).call(this.frame_49).wait(14).call(this.frame_63).wait(12).call(this.frame_75).wait(3).call(this.frame_78).wait(110));

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
	this.shape_43.graphics.f("#CC33FF").s().p("AgEAZQgMgQAAgVIABgLIgxgBQgEAAgCgCQgDgDAAgDQAAgEADgDQACgCAEAAIAbAAIAmACIAmACIANAAIANABQAIACgBAHIACAIIAAAOQAAAQgMAPQgMAQgSAAQgXAAgNgRgAAAgMQAAAPAIAKQAJAMAPAAQAKAAAIgLQAGgKAAgLIAAgIIAAgFIgRAAIglgCg");
	this.shape_43.setTransform(-166.7,15.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC33FF").s().p("AgvA2QgDgDgBgDQgCgIATgMIAbgNIgLgWIgLgXIgngGQgFgBgCgFQgBgEACgDQACgEAEgBQAEgBAgAGQACgDADAAQAIgCAEAIQAVAFAdAJQAoAMABAGQACAHgJAFIgdAMIg6AfIgMAIIgJAGIgDAAIgFgBgAAJAFIAhgPIgvgOIAOAdg");
	this.shape_44.setTransform(-166.1,28.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC33FF").s().p("AgsBAQgEgCgBgEQgBgDADgEQAVgmAAgmIgRAGIgSAFQgEABgDgCQgDgCgBgDQgBgEACgEQABgDAEgBIAVgHIAWgGIAYgEIAZgFIANgEIANgFQAFgBAFABQAFACABAGIAFAWQABANgCAKQgKAogbAIQgOADgNgJQgLgIgIgOQgIAggMASQgDAEgDABIgCAAIgFgBgAAogoIgKAEIgSAEIgSACIABAEIABAEQAFAWAJAKQAFAEAFADQAHADADAAQANgEAGgQQAHgPgDgPIgCgOg");
	this.shape_45.setTransform(-165.5,42.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC33FF").s().p("AA7A8QgEgCgBgEIgEgUIgEgVIgCgGIgoANQgYAJgOADIgJAEIgKADQgGACgFgBQgGgBgCgGQgBgDACgEQACgDADgBIAFgBIAEAAIANgFIANgEIAjgLIAjgMIgDgHQgFgUAAgMQAAgIAHgCQAEgBADACQAEACABAEIACAPIADAPIAEAQIAFAPIAEAVIAFAVQABAEgCADQgCADgEABIgDAAIgEgBg");
	this.shape_46.setTransform(-164.1,56.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC33FF").s().p("AghBFQgEgBgCgEIgIgNIgIgNIgLgPIgLgQQgCgDACgDQABgDADgCQAEgCADABQAEABACADQADAEAJALQAHgCAIgFIANgHIANgJQASgKAdgOIgHgLIgGgKQgCgEABgDQABgEAEgCQAHgEAGAHIAOAYQAJAQALAZQADAIgIAEQgEACgDgBQgEgCgBgDIgHgMIgFgOQgZALgVAMIgNAIIgNAJQgIAEgHADIAPAZQACADgBAEQgBAEgDACIgGABIgBAAg");
	this.shape_47.setTransform(-158.9,70.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC33FF").s().p("AgvA1QgQgKgEgTQgFgTAKgQQAQgbAngPQAggNATALIAHAEIAFAFQAFgDAFADQAFADgCAIIgJARQgBADgDACQgFACgEgDQgFgDABgHQABgHgBgCIgIgGQgMgGgXAJQghANgNAWQgGAJADALQACAMAKAGQAIAEALABQAFAAAOgCIAJABQADACAAAEQACAEgCAEQgCADgFABQgLACgKAAQgSAAgOgIg");
	this.shape_48.setTransform(-149.7,80.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC33FF").s().p("AgDBNIgOgHIgOgIIgRgIIgQgIQgDgCgCgDQAAgEACgEQACgDADgBQAEgBADACIATAIIAJgOIAHgOIAIgNQAKgSARgbIgKgGIgKgGQgDgCgBgDQgBgEACgDQAEgIAHAEIAZANQAQAJAWASQAGAFgEAHQgCAEgEABQgDAAgDgBIgNgJIgMgJQgPAWgNAVIgGANIgIAPIgJANIAZAOQAEACABAEQAAAEgCADQgCAEgDABIgDAAIgDgBg");
	this.shape_49.setTransform(-138.9,86);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC33FF").s().p("AgvBGQgDgBgCgDQgCgDABgDIAIgaIALgkIAMglIADgMIAFgNQAEgHAGADIAIAAIANADQAQAFAMAPQAMARgFARQgFAVgVAJQgSAIgUgGIgLgEIgNAvQgBAEgDABIgEABIgDAAgAgGgiIgLAiIAJAEQAOAEANgFQANgEAEgPQADgKgJgJQgIgKgMgDIgHgCIgEAAg");
	this.shape_50.setTransform(-126.9,88.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC33FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_51.setTransform(-113.4,89.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC33FF").s().p("AgoBIQgJgJAAgdIABgOIAAgPIgBgEQAAgDACgCIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAAMQAAAUADADQACADAMABIARgBIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
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
	this.shape_76.graphics.f("#CC33FF").s().p("AgoBIQgJgIAAgfIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgKIgBgLQAAgKAJgBQAEABADACIAVgFIASgBQAWAAAOAFQAGADAAAGQAAAEgDADQgCADgEAAIgDgBQgQgEgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAALQAAAVADADQACADAMAAIARAAIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_76.setTransform(-83.7,-14.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC33FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_77.setTransform(-94.9,-14);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CC33FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_78.setTransform(-105.2,-14.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC33FF").s().p("AgoBEQgDgCAAgFQAAgDADgEQADgCADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEAAgDgDQgDgDAAgEQAAgJAJAAIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAbAAAXIAAAQIABAQIgBARIAdgBQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAIgPAAIgQABIgRABIgTACQgDAAgDgDg");
	this.shape_79.setTransform(-115.4,-14);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CC33FF").s().p("AgmA5QgNgOAAgUQAAgeAaghQAXgcAVAAIAIABIAHABQADgFAFAAQAGAAACAJQACAHAAALQgBAEgCADQgCAEgEAAQgHAAgCgHQgDgGgDgCQgBgBgIAAQgOAAgPAVQgWAcAAAXQAAAMAHAJQAJAJAKAAQAJAAAKgFIAQgLQAFgEADAAQAEAAADADQACADAAAEQAAAEgDADQgZAWgYAAQgSAAgOgPg");
	this.shape_80.setTransform(-126.1,-14.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC33FF").s().p("AgoBEQgDgCAAgFQAAgDADgEQADgCADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEAAgDgDQgDgDAAgEQAAgJAJAAIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAbAAAXIAAAQIABAQIgBARIAdgBQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAIgPAAIgQABIgRABIgTACQgDAAgDgDg");
	this.shape_81.setTransform(-137.3,-14);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC33FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_82.setTransform(-148.1,-14.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC33FF").s().p("AguBGQgEgCAAgFIAAgVIgBgWIACgZIACgZIgBgOIgBgOQABgFADgEQADgFAGAAIAWACQANACAIAEQAmAUAAAdQgBAOgNAKQgJAJgQAEQAcAQAPARQADADAAADQAAAEgEADQgCADgEAAQgDAAgDgDQgfgfglgKIABASIAAASQAAAFgDACQgCADgEAAQgEAAgCgDgAgdgpIABALIgBATIgDARIAFAAIADABQAYAAALgHQAFgCAFgEQAEgFABgEQAAgNgPgLQgMgKgPgCIgOgBg");
	this.shape_83.setTransform(-161.1,-14.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC33FF").s().p("AAgAwQgCgIgEgWIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgDQgDgCAAgEQAAgEAOgeQgBgDAAgDQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA/IAFAPIADAKQAAAEgDACQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgjg");
	this.shape_84.setTransform(-174.4,-14);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CC33FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_85.setTransform(-186.1,-14.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CC33FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_86.setTransform(174.9,-42.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CC33FF").s().p("AglBAQgRgIAAgOQAAgEADgCQACgDAFAAQAEAAADAGQAFAHADACQAJAFAPAAQANAAANgGQAPgIAAgOQAAgMgNgHQgLgFgQgBQgPAAgKgFQgNgIAAgOQAAgQATgOQASgNARAAQAKAAALADQAPAEAAAGQAAAJgJAAIgMgCIgPgCQgNAAgKAHQgLAHAAAKQAAAIAOADIATACQAVACAMAMQALAJAAAQQAAAWgVANQgRAMgWAAQgSAAgOgHg");
	this.shape_87.setTransform(161.2,-42.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CC33FF").s().p("AAgAwQgCgJgEgVIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgEAOgeQgBgDAAgCQAAgIAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAfIAOA/IAFAQIADAJQAAAEgDADQgDADgEAAQgIAAgHgWgAgLAGIAhgGIgIgkg");
	this.shape_88.setTransform(147.4,-42.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC33FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_89.setTransform(135.8,-43);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_90.setTransform(120,-40.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAZBGIgEgWIgBgWIAAgHIAAgHQAAgRgJAAQgLAAgJAKQgEAFgJAQQAAAjgDAHQgCAFgGAAQgEAAgCgCQgDgDAAgEIABgEIABgNIAAgOIAAhDIABgQIgBgJIgBgIQAAgEADgDQACgCAEAAQAIAAABAIIACAQIgBAUQgBAKABALIAAAIQAHgKAJgFQAIgFAJAAQAQAAAFAKQAFAHAAAPIABASIACATIADATIAAADQAAAEgDACQgCADgEAAQgHAAgCgHg");
	this.shape_91.setTransform(109.2,-42.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgFBBQgDgCAAgEIABgKIAAgLIgCg1IgVgCQgIgBAAgIQAAgEADgDQACgCAEAAIATABIAAgMIgBgMQAAgEAEgCQACgDAEAAQAHAAABAOIABAIIgBAFIAAAGIAOgBQAJAAADABQAGABAAAHQAAAEgCADQgDADgEAAIgFAAIgEgBIgNACIACA2IAAAEIAAAEQAAAVgJAAQgDAAgDgDg");
	this.shape_92.setTransform(99.1,-42);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9933FF").s().p("AgLAUQgCgCAAgEQAAgCAGgNIAHgQQACgFADABQAEgBADADQACACAAAEQAAACgNAcQgBAGgFAAQgEgBgCgCg");
	this.shape_93.setTransform(87,-34.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#9933FF").s().p("AgoBIQgJgJAAgdIABgOIAAgOIgBgFQAAgDACgCIACgoIgBgJIgBgKQAAgLAJAAQAEAAADACIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAJIgBAkIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBAMIAAAMQAAAUADADQACAEAMAAIARgBIARAAIAFgBIAGgBQAKAAAAAKQAAAIgIACQgJABgcAAQgdAAgIgHg");
	this.shape_94.setTransform(78.1,-42.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#9933FF").s().p("AgQBDQgLgcgOg0IgHgZQgGgTAAgGQAAgEADgDQADgCAEAAQAHgBACAIIADAQIAJAgQAJAhAIAZIABgCIAYhBIAIgYQAFgNAGgHQADgEAEAAQAEAAADADQADADAAADQAAAEgCACQgGAJgDAJIgIAUIgYBDQgFAMgGALQgCAGgFAAQgHAAgDgIg");
	this.shape_95.setTransform(66.4,-42.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#9933FF").s().p("AgoBEQgDgCAAgEQAAgFADgCQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMAAIgMAAQgEAAgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgCIgPgBQgCAbAAAYIAAAQIABAPIgBAQIAdAAQAEAAADACQADAEAAADQAAAEgDAEQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_96.setTransform(54.4,-42.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9933FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_97.setTransform(43.6,-42.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9933FF").s().p("AgmA5QgMgOgBgUQAAgeAbghQAWgcAVAAIAIABIAGABQAEgFAFAAQAGAAACAJQABAHAAALQAAAEgCADQgCAEgFAAQgFAAgEgHQgCgGgCgCQgCgBgIAAQgOAAgPAVQgWAcAAAXQAAAMAIAJQAHAJALAAQAJAAAKgFIAQgLQAFgEAEAAQADAAADADQACADABAEQgBAEgDADQgZAWgYAAQgSAAgOgPg");
	this.shape_98.setTransform(30.8,-42.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#9933FF").s().p("AgoBIQgJgJAAgdIABgOIAAgOIgBgFQAAgDACgCIACgoIgBgJIgBgKQAAgLAJAAQAEAAADACIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAJIgBAkIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBAMIAAAMQAAAUADADQACAEAMAAIARgBIARAAIAFgBIAGgBQAKAAAAAKQAAAIgIACQgJABgcAAQgdAAgIgHg");
	this.shape_99.setTransform(19.2,-42.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9933FF").s().p("AglBAQgSgNAAgRQAAgLAKAAQAJAAAAALQAAAIALAIQALAHAJAAQAHAAADgvIABg2IAAgKIgGAAIgKAAIgLgBQgEAAgDgCQgDgDAAgEQAAgKANAAIAKAAIAIABIARgBIASgBQAVAAAAALQAAAEgDADQgCADgEAAIgGgBIgGgBIgLABIABALQAABEgKAfQgGAVgOAAQgQAAgQgMg");
	this.shape_100.setTransform(6.7,-42.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#9933FF").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_101.setTransform(-6.2,-42.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#9933FF").s().p("AAgAwQgCgJgEgVIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgEAOgeQgBgDAAgCQAAgIAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAfIAOA/IAFAQIADAJQAAAEgDADQgDADgEAAQgIAAgHgWgAgLAGIAhgGIgIgkg");
	this.shape_102.setTransform(-20.4,-42.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAWAtIgCgUIgBgVIAAgHIABgJQAAgUgIAAQgKAAgJANQgIAKgGARIAAAJIgBAJIABAIIAAAJQABAEgDACQgCADgFAAQgEAAgDgDQgCgCAAgEIgBgJIAAgIIABgaIABgaIAAgJIAAgJQAAgDADgDQADgDADAAQAJAAAAAMIABALQAPgVAQAAQAPABAFANQAFAIAAARIAAAKIAAAHQAAAIACAMQACANAAAHQAAAEgDADQgDACgEAAQgHAAgCgJg");
	this.shape_103.setTransform(-37.7,-40.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHACgEABQgVgBgKgMQgKgLAAgYQAAgWAQgQQAPgQAVAAQAIAAAKAFQANAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgCALIAAAUQAAAMABAGIAGAQIACAGIABABQAAAEgDACQgCACgEABQgCAAgEgFgAgPgWQgKAMAAAOQAAAPAFAHQAGAJAKgBQAIAAAGgDQAEgBAGgGQgDgYAAgMIAAgIIACgKIgGgDIgEgBQgNAAgLAMg");
	this.shape_104.setTransform(-47.7,-40.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_105.setTransform(-63.2,-40.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHACgEABQgVgBgKgMQgKgLAAgYQAAgWAQgQQAPgQAVAAQAIAAAKAFQANAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgCALIAAAUQAAAMABAGIAGAQIACAGIABABQAAAEgDACQgCACgEABQgCAAgEgFgAgPgWQgKAMAAAOQAAAPAFAHQAGAJAKgBQAIAAAGgDQAEgBAGgGQgDgYAAgMIAAgIIACgKIgGgDIgEgBQgNAAgLAMg");
	this.shape_106.setTransform(-72.4,-40.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AggA/QgNgNAAgUQAAgZANgOQANgPAUAAQALAAAGADIAIAHIADg1QACgIAHAAQAIAAAAAJQAAANgDAsQgCAMAAAOQAAAfADAQIABACQAAAEgDACQgDACgDAAQgGAAgDgIQgGAFgHADQgIACgGAAQgUAAgMgNgAgVACQgIAJAAASQAAAMAJAJQAIAIAMAAQAGAAAGgCIAKgIIADgDIgBgQIABgLIAAgLQgEgHgGgDQgFgEgJAAQgOAAgIAJg");
	this.shape_107.setTransform(-88.6,-43);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_108.setTransform(-99.1,-40.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_109.setTransform(-109.4,-40.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAVAsQgMAGgOAAQgMAAgIgFQgJgGgCgLQgDgZAAgSQAAgNADgQQABgIAHAAQAEAAADACQADADAAAEIgBAOIgCAOIABAZQABALACAHIAGADIAGABQAMAAANgEIAAgTIAAgRQAAgUACgPQABgJAIAAQAEAAADADQACADAAAEIgCAjIAAATIABAUIAAAGIAAAGQAAAEgDADQgCACgEAAQgHAAgCgJg");
	this.shape_110.setTransform(-118.7,-40.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAWAtIgCgUIgBgVIAAgHIABgJQAAgUgIAAQgKAAgJANQgJAKgFARIAAAJIgBAJIABAIIAAAJQABAEgDACQgDADgEAAQgEAAgDgDQgCgCAAgEIgBgJIAAgIIABgaIABgaIAAgJIAAgJQAAgDACgDQADgDAEAAQAJAAAAAMIABALQAPgVAQAAQAPABAFANQAEAIABARIAAAKIAAAHQAAAIACAMIACAUQAAAEgDADQgDACgEAAQgIAAgBgJg");
	this.shape_111.setTransform(-134.1,-40.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_112.setTransform(-144.3,-40.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAZBGIgEgWIgBgWIAAgHIAAgHQAAgRgJAAQgLAAgJAKQgEAFgJAQQAAAjgDAHQgCAFgGAAQgEAAgCgCQgDgDAAgEIABgEIABgNIAAgOIAAhDIABgQIgBgJIgBgIQAAgEADgDQACgCAEAAQAIAAABAIIACAQIgBAUQgBAKABALIAAAIQAHgKAJgFQAIgFAJAAQAQAAAFAKQAFAHAAAPIABASIACATIADATIAAADQAAAEgDACQgCADgEAAQgHAAgCgHg");
	this.shape_113.setTransform(-155.1,-42.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAVBJQgEgDAAgEQgEgLgBgHIgIgoIgFgnQgIAegKAUQgLAZgDAOIABAEQAAAEgDADQgEACgEAAQgNAAAAgLIgCgMIgLgtQgGgWgOgrIgBgEQAAgIAKAAQAGAAADAGIAHATQAFARAGAYIAJAoQAKgXAKggIAJgcQAIgVAHAAQAHAAACAHQAEAIADAeQACAPAEAVIAIAkQANgeASgyIAFgRQADgLAEgGQADgFAFAAQAKAAAAAJIgDAJIgEAKIgFARIgcBCQgDALgKAVQgDAGgHAAQgEAAgDgCg");
	this.shape_114.setTransform(-170.1,-42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.1,-58.7,392.2,116);


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


(lib.WhiteSheet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggOAQLMAAAggVMBAaAAAIAAP3IADAAIAADcIgDAAIAANCg");
	this.shape.setTransform(206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WhiteSheet, new cjs.Rectangle(0,0,412.6,207), null);


(lib.PresentParticipleDiagrams = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		playSound("ball_passes");
	}
	this.frame_153 = function() {
		playSound("lowclick");
	}
	this.frame_185 = function() {
		playSound("diagnal_line");
	}
	this.frame_191 = function() {
		playSound("diagnal_line");
	}
	this.frame_203 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_220 = function() {
		playSound("_2a");
	}
	this.frame_249 = function() {
		playSound("_6b");
	}
	this.frame_287 = function() {
		playSound("diagnal_line");
	}
	this.frame_295 = function() {
		playSound("diagnal_line");
	}
	this.frame_308 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_330 = function() {
		playSound("_2a");
	}
	this.frame_346 = function() {
		playSound("right_answer");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(125).call(this.frame_153).wait(32).call(this.frame_185).wait(6).call(this.frame_191).wait(12).call(this.frame_203).wait(17).call(this.frame_220).wait(29).call(this.frame_249).wait(38).call(this.frame_287).wait(8).call(this.frame_295).wait(13).call(this.frame_308).wait(22).call(this.frame_330).wait(16).call(this.frame_346).wait(110));

	// Layer 2
	this.instance = new lib.PartDiagram("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(204.8,97.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({startPosition:0},0).to({scaleX:0.76,scaleY:0.76,x:201.7,y:46.1},9).wait(102).to({startPosition:0},0).to({alpha:0},8).to({_off:true},1).wait(308));

	// w1
	this.instance_1 = new lib.Focused("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.3,213.9);
	this.instance_1._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAyQgLgLAAgQQAAgTALgLQALgMAPAAQAIAAAFACIAHAGIACgqQABgGAGAAQAGAAAAAHIgCAtIgBAVQAAAYACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgEAAgCgHQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQgBAKAHAGQAHAHAJAAQAFAAAEgCIAIgHIACgCIAAgMIAAgJIAAgIQgCgGgFgCQgFgDgGgBQgLAAgHAHg");
	this.shape.setTransform(130.7,146.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAgQgLgJABgRQgBgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbAOQAEAGAGADQAHACAGAAQAGAAAHgBQAIgCADgFQACgDACAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_1.setTransform(121.6,148.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMAmQgKgCgHgGQgKgGACgHIADgFQADgBADAAQACABADAEQABACAGADIAHADQAGACAEgBQAHAAACgEQACgKgMgHIgHgDQgIgEgDgEQgFgFACgIQAEgPAQgDIANgBIAPAAQADgBAEABQADABABACQABADgBADIAAAGIgBAHQgBADgCABQgDABgDAAQgEgBAAgDIAAgIIgSAAQgLACgCAGIADACQAPAIAHAGQAJAKgDAOQgEAMgLADIgJACQgFAAgHgDg");
	this.shape_2.setTransform(113.8,145.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAwQgDAAgCgCQgEgEAEgGQgKgDgIgIQgHgHgCgIQgCgIAGgGQAMgQAKgLQAHgHAKgHQAFgEAEAEQADADAAACQAAADgCADIgJAGIgHAIIgPAPIgIAKIACAFIADAEQAHAHAKAGIAJgLIAKgKIAUgSQAGgEAFAFQACACAAADQAAADgCACIgVASIgLALIgLALIgCAEIgEADQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_3.setTransform(107.7,141.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAkQgLgEgEgEQgLgLAAgNQgBgOALgLQALgKASgEQATgFAKAKQAFAFAEAJQAEAKgEAFQgCABgDAAQgDAAgCgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgEQgBgGgHgHQgFgFgOAEQgNAFgGAGQgHAHAAAHQABAIAHAHQADADAFACIAJACIACACQACACAAADQAAADgCACQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQgEAAgGgCg");
	this.shape_4.setTransform(102.7,136.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAeQgPgGgEgPQgDgLAHgKQAHgNAQgFQAPgEAOAFQASAGAEASQAEANgLALQgJAIgPAEQgHACgFAAQgIAAgIgDgAgIgQQgKADgEAHQgEAGABAGQACAHAHAEQAIAEAJgCQAcgHgEgPQgDgKgMgDIgJgBIgJABg");
	this.shape_5.setTransform(98,128.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAlQgDgBgBgDIgCgLIgCgMIgJgSIgxALQgDABgDgBQgCgCgBgCQgBgDACgCQABgDADgBIAqgKIApgLIAJgDIAKgDQADAAADABQACABABADIAAAFQAEAIACAHIAFAMQACAHAAAMQABAOgFACQgDABgDgBQgDgCgBgDIAAgDQABgJgEgPQgBgEgDgFIgFgOIgfAIQAHAMACAGIAFAYQABAGgHACIgBAAIgEgBg");
	this.shape_6.setTransform(96.8,119.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAyQgKgKAAgRQAAgTAKgLQAKgMAQAAQAJAAAEACIAHAGIACgqQABgGAGAAQAGAAAAAHIgCAtIgBAVQAAAYACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgEgBgDgGQgFAEgFACQgGACgFAAQgPAAgKgKgAgQABQgGAIgBAOQAAAKAHAGQAHAHAJAAQAFAAAFgCIAIgGIABgDIAAgMIAAgJIAAgIQgCgGgFgDQgFgCgGAAQgLgBgGAHg");
	this.shape_7.setTransform(127.3,147.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAgQgLgJAAgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbAOQAEAGAGADQAHACAGAAQAGAAAHgBQAIgCADgFQACgDACAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgIAAgHAHg");
	this.shape_8.setTransform(118,149.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAeQgJgGgEgFQgHgNADgMQADgPANgIQANgHASABQAVAAAGAMQAEAHABAJQADALgGADQgCACgDgBQgDgBgCgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgDQABgFgFgJQgDgGgPAAQgNAAgIAFQgIAFgCAJQgBAGAEAJQADAEAEADIAIAFIADACQABACgBADQgBADgCABIgCABQgFAAgHgGg");
	this.shape_9.setTransform(98.5,138.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AALAlQgDgBgBgDIgCgLIgCgMIgJgSIgxALQgDABgDgBQgCgCgBgCQgBgDACgCQABgDADgBIAqgKIApgLIAJgDIAKgDQADAAADABQACABABADQABADgBACQAEAIACAHIAFAMQACAHAAAMQABAOgFACQgDABgDgBQgDgCgBgDIAAgDQABgJgEgPQgBgEgDgFIgFgOIgfAIQAHAMACAGIAFAYQABAGgHACIgBAAIgEgBg");
	this.shape_10.setTransform(97.8,121.7);

	this.instance_2 = new lib.Buffy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(57.3,241.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},200).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.shape_6},{t:this.shape_5,p:{x:98,y:128.9}},{t:this.shape_4},{t:this.shape_3,p:{x:107.7,y:141.6}},{t:this.shape_2,p:{x:113.8,y:145.8}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_10},{t:this.shape_5,p:{x:97,y:130.2}},{t:this.shape_9},{t:this.shape_3,p:{x:103.4,y:144.2}},{t:this.shape_2,p:{x:110.2,y:147.7}},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},22).to({state:[{t:this.instance_2}]},62).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_2}]},12).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200).to({_off:false},0).to({rotation:45,x:129.7,y:119.8},11).to({rotation:40.5,x:116.7,y:132},9).to({_off:true},1).wait(235));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(306).to({_off:false},0).to({x:33.5,y:33.1},14).to({x:50.5,y:64.9},12).wait(124));

	// w2
	this.instance_3 = new lib.on("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(140.7,214.3);
	this.instance_3._off = true;

	this.instance_4 = new lib.found("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(101.6,241.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(200).to({_off:false},0).to({x:146.7,y:190.7},11).to({rotation:60,x:168.3,y:168.5},11).to({_off:true},22).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(306).to({_off:false},0).to({x:143.9,y:40},14).to({x:148.9,y:64.9},12).wait(124));

	// w3
	this.instance_5 = new lib.success("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(179.4,214.3);
	this.instance_5._off = true;

	this.instance_6 = new lib.the("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(138.2,241.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(200).to({_off:false},0).to({x:263,y:161.9},11).to({x:218.2,y:173.4},11).to({_off:true},22).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(306).to({_off:false},0).to({x:344.8,y:106.9},14).to({rotation:45,x:320.8,y:95.4},12).wait(124));

	// w4
	this.instance_7 = new lib.Buffy("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(235.4,214);
	this.instance_7._off = true;

	this.instance_8 = new lib.couch("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(174.6,241.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(200).to({_off:false},0).to({x:59.3,y:40},11).to({x:70.8,y:67.2},11).to({_off:true},22).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(306).to({_off:false},0).to({x:313.7,y:45.3},14).to({x:291.4,y:64.9},12).wait(124));

	// W5
	this.instance_9 = new lib.led("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(270.3,213.2);
	this.instance_9._off = true;

	this.instance_10 = new lib.abandoned("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(235.7,241.8);
	this.instance_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAJA5QgFgBAAgHQgFADgGAAQgGABgGgCQgPgEgHgMQgHgNAEgPQAFgSANgJQAOgJAPAEQAIADADAEIAGAGIANgnQACgHAGACQAGACgBAHIgPAqIgHAUQgGAYgBAMIAAACQgBADgCABIgDABIgCgBgAgUgJQgHAGgEANQgDAJAFAIQAFAJAIACQAGABAFgBIAJgDIACgCIADgMIADgJIACgIQgCgGgDgDQgEgEgFgCIgIgBQgHAAgFADg");
	this.shape_11.setTransform(275.6,147.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAoQgLgBgJgFQgPgIgFgMQgFgOAJgOQAJgQAOgGQAPgIAPAIQALAHAEAHQAFAJgFAJQgDAGgKABIgSgBIgegCQABAHADAGQAEAFAHAEIAKAFQAJACAEgCQAEgCADABQAAABABAAQAAAAAAABQABAAAAABQAAAAABABQAAADgBACQgDAGgKAAIgFgBgAgBgZQgJADgJAKIAXACQAPABAHgBQgCgIgKgGQgEgDgFAAIgGACg");
	this.shape_12.setTransform(266.6,145.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAEAxQgEgDACgHIAGgPQADgIAEgGIAEgGIADgFQAIgNgFgDQgHgEgLAEQgKAEgKALIgEAEIgEAGIgDAGIgDAGQgBADgDABQgDAAgDgBQgDgCAAgCQgBgDACgDIADgGIADgGIALgRIALgRIAEgGIADgGQACgDACgBQACgBADACQAGADgFAJIgEAIQATgJALAHQAKAGgBALQAAAHgHAMIgEAGIgDAGIgGAOIgHAOQgBADgDABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_13.setTransform(259,141.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRAqIgEgDIAAgGIACgIIgLgHIgGgHQgIgOAEgMQAFgLAQgJQAPgJAQAFQARAEAIAPQADAFACAJQABAJgFADQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAIgJAEIgPAIIgLAIIgIALIgDADIgBABIgDABIgCAAgAgNgWQgKAGgDAHQgDAGAEAHQADAGAFADIAIADIAYgQIAGgCIAHgDIAAgFIgBgDQgGgKgMgCIgIgBQgHAAgHAEg");
	this.shape_14.setTransform(232.9,120.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAiQgLgHgDgMQgEgNAJgOQAHgPAOgHQAQgHAPAJQANAHAAAQQAAALgIANQgIAOgNAGQgHADgGAAQgHAAgHgEgAgDgTQgIAFgGAJQgFAIACAIQABAHAGADQAGAEAHgCQAJgCAFgKQAPgXgOgIQgEgCgFAAQgFAAgEADg");
	this.shape_15.setTransform(251.3,138.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAEAxQgEgDACgHIAGgPQADgIAEgGIAEgGIADgFQAIgNgFgDQgHgEgLAEQgKAEgKALIgEAEIgEAGIgDAGIgDAGQgBADgDABQgDAAgDgBQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgDACgDIADgGIADgGIALgRIALgRIAEgGIADgGQACgDACgBQACgBADACQAGADgFAJIgEAIQATgJALAHQAKAGgBALQAAAHgHAMIgEAGIgDAGIgGAOIgHAOQgBADgDABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_16.setTransform(237.9,127.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAzQgEgCABgHQgGABgGgBQgGgBgFgDQgNgIgEgOQgEgOAIgNQAKgQAPgGQAPgFANAJQAHAEADAEIAEAIIAWgjQAFgFAFADQAGAEgEAGIgZAlIgMARQgMAWgEALIAAACQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABIgCAAIgDgBgAgUgUQgJADgHANQgFAHACAJQADAJAHAFQAGADAFAAQADAAAHgCIADAAIAFgLIAEgIIAFgHQAAgFgCgGQgDgEgEgEQgHgEgGAAIgHACg");
	this.shape_17.setTransform(245.9,132.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgPAyQgPgDgIgOQgGgKgBgKQgEAAgCgDIAAgFQABgDACgCIAFgBIAFgDIAUgMIATgMIARgKIASgKIAIgCQAFAAACADQADAFgGADIgCABIgDACIgOAHIgRAKQAIADAEAEQAFAEACAEQAIANgFAOQgFAOgPAIQgJAGgKAAIgKgBgAgLgFIgKAFIgLAGIACAKIAEAKQAFAJAKACQAKACAJgFQAJgGAEgIQADgJgFgJQgDgEgGgEIgKgFg");
	this.shape_18.setTransform(229.8,110.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAmQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBACgFIAEgGIgJgKIgEgIQgEgQAHgKQAHgKASgEQAQgFAPAJQAQAIAEAQQACAGgBAIQgCALgFABIgEAAIgJABIgQAEIgNAFIgLAHIgDADIgBABIgDAAIgDgBgAgIgWQgMADgEAFQgFAGACAIQACAGAEAEIAHAGIAbgKIAGgBIAIgBIABgEIAAgDQgDgLgLgGQgHgDgHAAIgIABg");
	this.shape_19.setTransform(226.9,104.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAyQgKgLAAgQQAAgTAKgLQAKgMAQAAQAJAAAEACIAHAGIACgqQABgGAGAAQAGAAAAAHIgCAtIgBAVQAAAYACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgEAAgDgHQgFAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHgBAPQAAAKAHAGQAHAHAJAAQAFAAAFgCIAIgHIABgCIAAgMIAAgJIAAgIQgCgGgFgCQgFgDgGgBQgLAAgHAHg");
	this.shape_20.setTransform(265.9,146.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAgQgLgKAAgQQAAgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbAOQAEAFAGAEQAHADAGAAQAGgBAHgBQAIgDADgEQACgDACAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_21.setTransform(256.6,148.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAQAvQgGgBABgHIACgQIADgQIACgHIADgFQAEgQgGgBQgIgCgKAHQgIAHgHALIgCAHIgDAHIgBAGIgBAHQgBADgDACQgCABgDgBQgDgBgCgCQgBgDABgDIABgGIACgHIAGgTIAGgUIACgGIACgHQAAgDADgCQACgBADABQAHACgCAJIgCAIQAPgMANADQALADACALQABAHgDAOIgCAGIgCAGIgDAQIgCAPQgBADgDACIgDABIgCgBg");
	this.shape_22.setTransform(247.5,147.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcAnQgDgCgBgDQgBgGAGgDIAPgFQAIgEAGgBIAHgCIAHgCQAPgEgBgGQgCgHgMgEQgKgEgNAAIgHAAIgHACIgHACIgGACQgDABgCgBQgDgCgBgDQgBgDACgCQABgDADgBIAHgBIAGgDIAUgEIAUgEIAHgDIAHgCQADAAACABQACACABADQACAGgJADIgIACQATAIADAMQADALgJAHQgGAFgMADIgHACIgHACIgOAGIgPAFIgCABIgDgBg");
	this.shape_23.setTransform(228.1,130.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgWAsQgDAAgCgCQgDgDADgGIgMgEQgFgDgEgEQgLgLAAgNQAAgOAMgMQAOgOAPgBQAQgBAKAMQAGAGACAFIABAJQAXgWAIgGQAFgEAFAEQAEAFgFAFIgiAeIgPANQgQARgIALIgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAgAgSgeQgKABgKAKQgHAHAAAKQAAAIAHAGQAEAEAEACIALABIADAAIAJgJIAGgGIAFgFQACgGgBgGQgBgFgEgEQgIgIgIAAIgCAAg");
	this.shape_24.setTransform(233.5,140.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AggAoQgOgIgEgPQgDgLACgKQgEgBgBgDIAAgFQACgDADAAIAFgBIAGgCIAWgGIAWgGIATgGIAUgFQAEgBAEABQAFABABAEQABAFgGACIgDAAIgDABIgPAEIgSAFQAFAEAEAFQAEAFABAFQAEAPgJAMQgJAMgPAEQgGACgGAAQgJAAgJgEgAgOgNIgLADIgLADQgCAEAAAGQAAAEABAGQADAKAJAFQAJAFALgDQAJgDAGgIQAGgIgDgJQgBgFgFgFIgJgIg");
	this.shape_25.setTransform(228.2,111.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghAjQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgCAEgDIAFgFIgGgNQgCgFAAgDQAAgRAKgIQAJgHATAAQARAAAMAMQANAMAAAQQAAAHgEAIQgEAKgFAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgJgBIgPgBQgKAAgFACIgNAEIgEACgAgUgPQgGAEAAAIQAAAGADAFIAFAIQATgDAJAAIAHABIAIABIACgFIABgDQAAgKgKgIQgJgJgLAAQgMAAgGAFg");
	this.shape_26.setTransform(226.5,101.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},200).to({state:[{t:this.instance_9}]},11).to({state:[{t:this.instance_9}]},11).to({state:[]},22).to({state:[{t:this.instance_10}]},62).to({state:[{t:this.instance_10}]},14).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.shape_19,p:{x:226.9,y:104.1}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:251.3,y:138.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_15,p:{x:239.3,y:145.1}},{t:this.shape_19,p:{x:227.6,y:121.8}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(200).to({_off:false},0).to({x:195.5,y:40},11).to({y:69},11).to({_off:true},22).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(306).to({_off:false},0).to({rotation:45,x:275,y:115.2},14).to({rotation:37.2,x:253.7,y:125.8},10).to({_off:true},1).wait(125));

	// W6
	this.instance_11 = new lib.the("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(298.2,213.6);
	this.instance_11._off = true;

	this.instance_12 = new lib.on("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(285.1,241.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(200).to({_off:false},0).to({x:363.5,y:130.2},11).to({rotation:60,x:317,y:101.7},11).to({_off:true},22).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(306).to({_off:false},0).to({x:279.4,y:191.2},14).to({rotation:60,x:300.4,y:167.4},12).wait(124));

	// W7
	this.instance_13 = new lib.team("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(331.9,214);
	this.instance_13._off = true;

	this.instance_14 = new lib.the("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(309.4,241.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(200).to({_off:false},0).to({x:358.9,y:48.6},11).to({x:329.2,y:67.2},11).to({_off:true},22).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(306).to({_off:false},0).to({x:390.5,y:217.6},14).to({rotation:45,x:362,y:200.4},12).wait(124));

	// W8
	this.instance_15 = new lib.beach("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(346.4,241.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(306).to({_off:false},0).to({x:382.7,y:157.8},14).to({x:346.7,y:170.9},12).wait(124));

	// W9
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC33FF").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_27.setTransform(139.8,165.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC33FF").s().p("AgdA2QgEgDAAgIIACgWQABgeAAgnQAAgDACgCQACgCADAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQACACAAADQAAAngCAeIgBALIAAAKQASAAAagJIACAAQADAAACADQACACAAACQAAAEgFADQgHAEgRACQgOADgKAAQgHAAgDgCg");
	this.shape_28.setTransform(127.8,165.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC33FF").s().p("AgiA0QgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAABgBIAFgTIAJgbIAIgbIACgJIAEgJQADgFAFACIAFAAIAKADQAMADAIALQAJAMgDANQgEAQgQAGQgNAFgOgEIgJgDIgJAjIgDAEIgDABIgCAAgAAAglIgEAMIgIAZIAHADQAKADAJgEQAKgDADgKQACgIgHgHQgGgHgIgCIgFgBIgDgBIAAAAg");
	this.shape_29.setTransform(115.3,165.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC33FF").s().p("AgCA4IgKgFIgKgGIgMgFIgNgGQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBQgBgDACgCQABgDADAAQADgBACABIAOAGIAHgKIAFgLIAFgJQAIgOANgTIgIgEIgHgFQgCgBgBgDQgBgDACgCQADgGAFADIASAKQALAHARAMQAEAEgDAGQgBACgDABIgFgBIgJgGIgJgHIgVAfIgEALIgGAKIgGAKIASAKQACACABADQABACgCADQgBACgDABIgCABIgCgCg");
	this.shape_30.setTransform(104.1,163);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC33FF").s().p("AgjAnQgMgHgDgOQgCgOAHgMQALgUAdgLQAXgKAPAIIAFAEIADADQAEgCADACQAEADgBAFIgHANIgDAEQgDABgDgCQgEgCABgGQAAgEgBgCIgFgEQgJgFgRAHQgZAJgJAQQgEAHACAIQABAJAHAEQAHAEAIAAQAEAAAJgBQAFgBACABQACACABADIgBAFQgBADgEAAQgHACgIAAQgNAAgLgGg");
	this.shape_31.setTransform(93.1,157.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC33FF").s().p("AgZAzQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAIgGgKIgGgKIgHgLIgIgMIgBgFQABgCADgBIAFgBQADABABACIAIAMIAMgGIAJgFIAKgHIAigRIgEgIIgFgIQgBgCAAgDQABgDADgBQAFgDAEAFIALASQAHALAHATQACAFgFADQgDACgDgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIgFgJIgEgKQgSAIgQAIIgJAGIgKAGIgKAGIAKATQACACgBADQgBADgCABIgDABIgDAAg");
	this.shape_32.setTransform(85.5,148.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC33FF").s().p("AAsAsQgDgBgBgDIgDgPIgDgPIgBgFIgdAKQgTAGgKADIgHACIgHADIgIAAQgFgBgBgDIABgGQABgDADAAIADAAIADAAIAJgEIAKgDIAZgJIAagIIgBgGQgEgNAAgJQAAgHAFgBQADAAACABQADABABADIABALIACAKIAEAMIADAMIADAPIAEAPQABAEgCACQgBACgDABIgCAAIgDgBg");
	this.shape_33.setTransform(80.5,135.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC33FF").s().p("AggAvQgDgCAAgCQgBgDABgDQAQgbAAgcIgMAEIgNAEQgDABgDgCQgCgBgBgDQgBgDACgCQABgDADAAIAPgFIAQgFIARgDIATgDIAJgEIAKgDQAEgBADABQAEABACAFIACAQQACAKgCAHQgHAdgUAGQgKADgKgHQgIgGgGgKQgFAXgKAOIgEADIgBAAIgEgBgAAegdIgIADIgOADIgMACIABADIABACQADAQAHAHIAHAGQAFADACgBQAKgDAEgMQAFgLgCgKIgBgLg");
	this.shape_34.setTransform(79.4,121.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC33FF").s().p("AgiAnQgCgBgBgDQgCgGAPgIIATgKIgIgQIgIgRIgdgEQgEgBgBgEQAAgCABgDQACgDACgBQAEAAAXAEIADgCQAGgCADAHIAlAKQAdAJABAEQABAFgGAEIgVAIIgqAXIgKAHQgFADgCAAIgBABIgEgCgAAHAEIAYgLIgigLIAKAWg");
	this.shape_35.setTransform(78.8,107);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC33FF").s().p("AgDASQgJgLAAgQIABgIIgkAAQgDAAgCgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQACgCADAAIAUAAIAbABIAdACIAJAAIAKABQAGABgBAFIABAHIAAAJQABAMgJALQgKAMgNAAQgRAAgJgNgAAAgJQAAALAGAIQAHAIAKAAQAIAAAFgIQAGgHgBgIIAAgFIAAgEIgMgBIgcgBg");
	this.shape_36.setTransform(78.2,95.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC33FF").s().p("AgdA2QgEgDAAgIIACgXQABgdAAgnQAAgDACgCQACgCADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQACACAAADQAAAngCAeIgBALIAAAKQASAAAagIIACgBQADAAACADQACABAAADQAAAFgFABQgHAEgRADQgOADgKAAQgHAAgDgCg");
	this.shape_37.setTransform(255.3,167.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC33FF").s().p("AgCA4IgKgFIgKgGIgMgFIgNgGQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBQgBgDACgCQABgDADAAQABAAAAAAQABgBABAAQAAAAABABQAAAAABAAIAOAGIAHgKIAFgLIAFgJQAIgOANgTIgIgEIgHgFQgCgBgBgDQgBgDACgCQADgGAFADIASAKQALAHARAMQAEAEgDAGQgBACgDABIgFgBIgJgGIgJgHIgVAfIgEALIgGAKIgGAKIASAKQACACABADQABACgCADQgBACgDABIgCABIgCgCg");
	this.shape_38.setTransform(231.6,165);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC33FF").s().p("AgZAzQgCgBgCgCIgGgKIgGgKIgHgLIgIgMIgBgFQABgCADgBIAFgBQABAAAAABQABAAAAAAQABABAAAAQABABAAAAIAIAMIAMgGIAJgFIAKgHIAigRIgEgIIgFgIQgBgCAAgDQABgDADgBQAFgDAEAFIALASQAHALAHATQACAFgFADQgDACgDgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIgFgJIgEgKQgSAIgQAIIgJAGIgKAGIgKAGIAKATQACACgBADQgBADgCABIgDABIgDAAg");
	this.shape_39.setTransform(213,150.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC33FF").s().p("AAsAsQgDgBgBgDIgDgPIgDgPIgBgFIgdAKQgTAGgKADIgHACIgHADIgIABQgFgCgBgEIABgFQABgCADgBIADAAIADAAIAJgEIAKgDIAZgJIAagIIgBgFQgEgOAAgKQAAgFAFgCQADAAACABQADABABADIABALIACAKIAEANIADALIADAQIAEAOQABAEgCACQgBACgDABIgCAAIgDgBg");
	this.shape_40.setTransform(208,137.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC33FF").s().p("AggAvQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgDABgDQAQgbAAgcIgMAEIgNAEQgDABgDgCQgCgBgBgDQgBgDACgCQABgDADAAIAPgFIAQgFIARgDIATgDIAJgEIAKgDQAEgBADABQAEABACAFIACAQQACAKgCAHQgHAdgUAGQgKADgKgHQgIgGgGgKQgFAXgKAOIgEADIgBAAIgEgBgAAegdIgIADIgOADIgMACIABADIABACQADAQAHAHIAHAGQAFADACgBQAKgDAEgMQAFgLgCgKIgBgLg");
	this.shape_41.setTransform(206.9,123.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC33FF").s().p("AgDASQgJgLAAgQIABgIIgkAAQgDAAgCgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQACgCADAAIAUAAIAbABIAcACIAKAAIAKABQAGABgBAFIABAHIAAAJQAAAMgIALQgKAMgNAAQgRAAgJgNgAAAgJQAAALAGAIQAHAIAKAAQAIAAAFgIQAFgHABgIIAAgFIgBgEIgNgBIgbgBg");
	this.shape_42.setTransform(205.7,97.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35,p:{x:78.8,y:107}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:93.1,y:157.7}},{t:this.shape_30},{t:this.shape_29,p:{x:115.3,y:165.2}},{t:this.shape_28},{t:this.shape_27,p:{x:139.8,y:165.9}}]},179).to({state:[]},65).to({state:[{t:this.shape_42},{t:this.shape_35,p:{x:206.3,y:109}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_31,p:{x:220.6,y:159.7}},{t:this.shape_38},{t:this.shape_29,p:{x:242.8,y:167.2}},{t:this.shape_37},{t:this.shape_27,p:{x:267.3,y:167.9}}]},39).wait(173));

	// Layer 20
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2.5,1,1).p("AgdgZIA7Az");
	this.shape_43.setTransform(294.7,83.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2.5,1,1).p("AgagbIA1A3");
	this.shape_44.setTransform(333.3,186.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2.5,1,1).p("ACSHPIBgBgAjxovIBhBa");
	this.shape_45.setTransform(315.9,137.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2.5,1,1).p("AB+G6ICICIAkFpBICHB+");
	this.shape_46.setTransform(317.9,139.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(2.5,1,1).p("ABpGlICwCwAkZpUICsCk");
	this.shape_47.setTransform(319.9,141.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2.5,1,1).p("ABUGQIDZDYAktpnIDSDJ");
	this.shape_48.setTransform(321.9,143.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2.5,1,1).p("AA/F7IECEAAlBp6ID3Du");
	this.shape_49.setTransform(323.9,145.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(2.5,1,1).p("AArFmIEqEoAlVqNIEdET");
	this.shape_50.setTransform(325.9,147.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(2.5,1,1).p("AAWFSIFTFPAloqgIFCE5");
	this.shape_51.setTransform(327.8,149);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2.5,1,1).p("AABE9IF8F3Al8qzIFnFf");
	this.shape_52.setTransform(329.8,151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44},{t:this.shape_43}]},291).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).wait(157));

	// Layer 19
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(2.5,1,1).p("AgQgbIAhA4");
	this.shape_53.setTransform(293.4,84.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(2.5,1,1).p("AgbgsIA3BZ");
	this.shape_54.setTransform(294.5,86.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2.5,1,1).p("Agmg8IBNB5");
	this.shape_55.setTransform(295.6,87.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2.5,1,1).p("AgwhMIBhCZ");
	this.shape_56.setTransform(296.6,89.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(2.5,1,1).p("Ag7hcIB3C5");
	this.shape_57.setTransform(297.7,91);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2.5,1,1).p("AhGhsICNDZ");
	this.shape_58.setTransform(298.8,92.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(2.5,1,1).p("AhRh8ICiD5");
	this.shape_59.setTransform(299.9,94.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2.5,1,1).p("AhbiMIC3EZ");
	this.shape_60.setTransform(300.9,95.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2.5,1,1).p("AhmicIDNE5");
	this.shape_61.setTransform(302,97.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(2.5,1,1).p("AhwisIDiFZ");
	this.shape_62.setTransform(303.1,99.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(2.5,1,1).p("Ah7i8ID3F5");
	this.shape_63.setTransform(304.1,100.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(2.5,1,1).p("AiGjMIENGZ");
	this.shape_64.setTransform(305.2,102.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgDAuQgCgDAAgDQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgBQACAAACACQACADAAADQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgEACQgCAAgCgDgAgDAVIAAgHIgBgHIABgYIAAgaQAAgFAEAAQAFAAAAAFIAABAQAAAGgFAAQgEAAAAgGg");
	this.shape_65.setTransform(163.6,184.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIAAgHIAAgHIgBghIgMgBQgGgBABgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAMABIAAgIIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAEAAAAAJIABAFIAAAEIgBADIAJgBIAIAAQADACAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIAAIABAiIAAADIAAADQABANgHAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBg");
	this.shape_66.setTransform(159.5,185.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgQAaQgIgIAAgMQgBgLAJgNQAIgOAKAAQAGAAAHADQAJAEAAAFIgCADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgBIgDgCQgDgDgIAAQgEAAgGALQgGAKAAAGQAAAHAGAFQAEAEAHAAIAIgCIAHgEIACAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAABQgBADgIAEQgJAEgFAAQgLAAgIgHg");
	this.shape_67.setTransform(153.7,186.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_68.setTransform(147.4,186.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgSAqIgBgDQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAEAAADAIIAEAGQACADACAAQADAAABgEIACgGIgCgjIgCggIACgFQACgCACAAIAEABQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIACAhIACAkQAAAIgFAHQgFAHgIAAQgMAAgIgTgAAEgxQgCgCAAgDQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgCADAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQADACAAACQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgDAAgCgCg");
	this.shape_69.setTransform(141,186.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgRAsQgCADgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAgFIAAgEIAAgUIAAgRIAAgQIAAgQQAAgEABgDQACgDAEAAQAEgBAAAGIAAACIgBADIAAAMIAAAQIAKgGIAHgCQANAAAIAKQAHAIAAAOQAAANgIAJQgJAJgMAAQgJABgHgEgAgIgCIgJAFIAAAKIAAAJIAAAKIAIADQAEABAEABQAIAAAFgHQAGgGAAgIQAAgKgFgFQgEgGgJAAQgDAAgFADg");
	this.shape_70.setTransform(135.7,184.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAZQgHgIgBgOQAAgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAANgHAJQgHAKgMAAQgJAAgIgHgAgKgLQgDAHAAAHQAAAJAEAEQAEAEAFAAQAFAAAFgEQAFgFAAgIQABgWgNAAQgIAAgFAIg");
	this.shape_71.setTransform(128.8,186.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_72.setTransform(119,186.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAQAsIgCgNIgCgOIABgFIAAgEQAAgKgGAAQgHAAgFAFIgIANQAAAXgCAEQgCAEgDAAQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIABgIIAAgJIAAgqIABgKIgBgFIAAgGQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAABAGIABAKIAAANIgBAMIAAAGQAFgHAGgDQAEgDAGAAQAKAAAEAGQACAFABAJIAAALIABAMIACANIAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_73.setTransform(112.2,184.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIAAgHIAAgHIAAghIgOgBQgEgBAAgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAMABIAAgIIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQAFAAAAAJIABAFIAAAEIgBADIAJgBIAIAAQAEACgBAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIAAIABAiIAAADIAAADQABANgHAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_74.setTransform(105.9,185.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgdAtQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBIAAgOIgBgNIABgPIACgQIgBgJIgBgJQABgDACgDQACgDADAAIAPABQAIABAEADQAYANAAASQAAAJgIAGQgHAFgKADQATAKAJALIACAEQAAAAgBABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgFgCQgTgTgXgHIABAMIAAALQAAABAAAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgSgZIABAHIgBAMIgBAKIACAAIACAAQAPAAAHgEQADAAADgDQADgEAAgCQAAgIgJgHQgHgHgKgBIgIAAg");
	this.shape_75.setTransform(95.8,185);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgdAkQgMgKAAgRQAAgTAMgRQANgSAUAAQATAAAJAJQAKAJAAATQAAATgLARQgNASgTAAQgQAAgMgKgAgUgTQgJANAAAPQAAAMAIAHQAIAGAMAAQANAAAKgOQAIgNAAgPQAAgOgGgGQgGgFgOAAQgOAAgKAOg");
	this.shape_76.setTransform(87.1,185.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgHIAAgHIgBghIgOgBQgEgBAAgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQAFAAABAJIAAAFIAAAEIAAADIAIgBIAIAAQADACAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIAAIABAiIAAADIABADQgBANgGAAQAAAAAAAAQAAAAgBAAQgBgBAAAAQgBAAAAgBg");
	this.shape_77.setTransform(75.9,185.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgQAaQgJgIAAgMQABgLAHgNQAKgOAKAAQAFAAAHADQAJAEAAAFIgBADQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgDgBIgCgCQgEgDgHAAQgFAAgHALQgFAKAAAGQAAAHAFAFQAGAEAGAAIAHgCIAHgEIADAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQABADgKAEQgHAEgGAAQgLAAgIgHg");
	this.shape_78.setTransform(70,186.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQAAgBABgBQAAAAABgBQAAAAABAAQAAAAABAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_79.setTransform(63.7,186.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgSAqIgBgDQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAQAEAAADAIIAEAGQACADACAAQADAAABgEIACgGIgCgjIgCggIACgFQACgCACAAIAEABQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIACAhIACAkQAAAIgFAHQgFAHgIAAQgMAAgIgTgAAEgxQgCgCAAgDQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQACgCADAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQADACAAACQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgDAAgCgCg");
	this.shape_80.setTransform(57.3,186.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgRAsQgCADgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAgFIAAgEIAAgUIAAgRIAAgQIAAgQQAAgEABgDQACgDAEAAQAEgBAAAGIAAACIgBADIAAAMIAAAQIAKgGIAHgCQANAAAIAKQAHAIAAAOQAAANgIAJQgJAJgMAAQgJABgHgEgAgIgCIgJAFIAAAKIAAAJIAAAKIAIADQAEABAEABQAIAAAFgHQAGgGAAgIQAAgKgFgFQgEgGgJAAQgDAAgFADg");
	this.shape_81.setTransform(52.1,184.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AANAcQgHAEgJAAQgHAAgFgDQgGgEgBgHQgCgQAAgLIABgSQABgGAFAAQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAIIgBAJIABAPIACAMIAEACIADAAQAHAAAJgCIAAgNIAAgKIABgVQAAgGAFAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBAWIAAAMIAAAMIABAEIAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgFABgBgGg");
	this.shape_82.setTransform(45.3,186.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgQAhQgJgEAAgFQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQACAAACADIAHACIAGAAIAIgBQAFgBAAgEQAAgIgLgDIgFgBQgIgCgDgCQgFgDAAgGQAAgMAMgGIAKgDIALgEIAFgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIABAFIABAFQAAAAgBABQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQgDAAgBgDIgCgGIgNAEQgIAEAAAFIADABQANADAGAEQAKAFAAAMQgBAJgHAFQgIAEgJAAQgHAAgIgCg");
	this.shape_83.setTransform(39.1,186.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_84.setTransform(164.2,167.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAQAsIgCgNIgCgOIABgFIAAgEQAAgKgGAAQgHAAgFAFIgIANQAAAXgCAEQgCAEgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIABgIIAAgJIAAgqIABgKIgBgFIAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQAFAAABAGIABAKIAAANIgBAMIAAAGQAFgHAGgDQAEgDAGAAQAKAAAEAGQACAFABAJIAAALIABAMIACANIAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_85.setTransform(157.4,166.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgIIAAgGIgBghIgOgBQgEgBAAgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAABAJIAAAFIAAADIAAAEIAIgBIAIAAQADACAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIAAADQAAANgGAAQAAAAAAAAQAAAAgBgBQgBAAAAAAQgBAAAAgBg");
	this.shape_86.setTransform(151,166.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgWAbIAAgoIABgGIAAgGQAAgFAEgBQAHAAAAAKQAKgLAOAAQAEAAACAEQADADAAAIIAAADQAAAIgGAAQgFAAAAgGIgBgEIAAgFQgJACgEADQgFAEgEAIIAAAfQAAAGgGAAQgFAAAAgGg");
	this.shape_87.setTransform(141.9,167.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_88.setTransform(135.7,167.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgUAoQgIgIAAgNQAAgPAIgJQAIgJANAAQAGAAAEABIAGAFQAAgZACgIQAAgGAFAAQAFAAAAAGIgCAkIgBAQQAAATACAKIAAACQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgEAAgCgFQgEADgEACQgFABgEAAQgMAAgIgIgAgNABQgFAGAAAMQAAAHAGAFQAFAGAHAAQAEAAADgBIAHgGIACgBIgBgKIAAgHIABgHQgDgFgDgCQgEgCgFAAQgJABgFAEg");
	this.shape_89.setTransform(128.7,166.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAOAdIgBgNIgBgNIAAgEIAAgGQAAgNgFAAQgGAAgFAIQgGAHgDAKIAAAGIAAAGIAAAEIAAAGQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgGIAAgEIABgRIABgQIAAgGIgBgFQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABgBQABAAAAAAQABAAAAAAQAFAAABAIIAAAHQAKgNAJgBQAKABADAHQADAGAAALIAAAGIAAAEIABANIACANQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgFAAgBgFg");
	this.shape_90.setTransform(122.3,167.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AANAcQgHAEgJAAQgHAAgFgEQgGgDgBgHQgCgQAAgLIABgSQABgGAFAAQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADABQAHAAAJgCIAAgMIAAgLIABgVQAAgGAFAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBAWIAAAMIAAAMIABAEIAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQgFAAgBgGg");
	this.shape_91.setTransform(115.9,167.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgUAoQgIgIAAgNQAAgPAIgJQAIgJANAAQAGAAAEABIAGAFQAAgZACgIQAAgGAFAAQAFAAAAAGIgCAkIgBAQQAAATACAKIAAACQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgEAAgCgFQgEADgEACQgFABgEAAQgMAAgIgIgAgNABQgFAGAAAMQAAAHAGAFQAFAGAHAAQAEAAADgBIAHgGIACgBIgBgKIAAgHIABgHQgDgFgDgCQgEgCgFAAQgJABgFAEg");
	this.shape_92.setTransform(105.6,166.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_93.setTransform(99,167.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgQAaQgIgIAAgMQgBgLAJgNQAJgOAJAAQAGAAAHADQAJAEAAAEIgCAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgBIgDgCQgDgDgIAAQgEAAgGALQgGAJAAAHQAAAIAGAEQAEAEAHAAIAHgBIAIgFIACgBQABAAAAABQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAABQgBADgIAFQgJADgFAAQgLAAgIgHg");
	this.shape_94.setTransform(92.6,167.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AATAeIgEgFIgKAFIgGACQgOgBgGgHQgGgIAAgOQAAgNAKgLQAJgKANABQAFgBAGADQAIADAAAFIgBACIgBAIIAAAMIABAMIADAKIACADIAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAIAAAIQAAAKAEAEQADAGAHAAQAFAAADgCIAGgFIgCgWIABgGIABgGIgEgCIgCgBQgJABgGAHg");
	this.shape_95.setTransform(86.4,167.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgGArIABgWIABgVIAAgUIAAgWQAAgFAFAAQAGAAAAAFIAAAWIgBAUIgBAdIAAAOQgBAFgEAAQgGAAAAgFg");
	this.shape_96.setTransform(81.6,166.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgWAwQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgXIAAgWIgBgYIgBgMQAAgEACgDQACgDACAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAEIAAACIAAAEQAEgEAFgBQAEgCAEAAQAMAAAGAKQAEAJAAAOQAAALgGAJQgIAIgMAAQgFAAgHgCIAAAcQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAgAgEgeIgIAGIAAAbQAGADAGAAQAHAAAEgGQADgEAAgHQAAgLgCgFQgCgFgGAAQgEAAgEACg");
	this.shape_97.setTransform(76.9,169.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_98.setTransform(66.8,167.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgRAsQgCADgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAgFIAAgEIAAgTIAAgSIAAgQIAAgRQAAgDABgDQACgDAEAAQAEAAAAAFIAAACIgBACIAAANIAAAPIAKgFIAHgCQANAAAIAKQAHAIAAAOQAAANgIAJQgJAKgMgBQgJAAgHgDgAgIgCIgJAFIAAAKIAAAKIAAAJIAIADQAEACAEgBQAIAAAFgFQAGgGAAgJQAAgKgFgFQgEgGgJABQgDAAgFACg");
	this.shape_99.setTransform(60,166.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAOAdIgBgNIgBgNIAAgEIAAgGQAAgNgFAAQgGAAgFAIQgGAHgDAKIAAAGIAAAGIAAAEIAAAGQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgGIAAgEIABgRIABgQIAAgGIgBgFQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQABAAAAAAQAFAAABAIIAAAHQAKgNAJgBQAKABADAHQADAGAAALIAAAGIAAAEIABANIACANQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgFAAgBgFg");
	this.shape_100.setTransform(49.8,167.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AATAeIgEgFIgKAFIgGACQgOgBgGgHQgGgIAAgOQAAgNAKgLQAJgKANABQAFgBAGADQAIADAAAFIgBACIgBAIIAAAMIABAMIADAKIACADIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAIAAAIQAAAKAEAEQADAGAHAAQAFAAADgCIAGgFIgCgWIABgGIABgGIgEgCIgCgBQgJABgGAHg");
	this.shape_101.setTransform(43.4,167.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgQAaQgJgIAAgMQAAgLAIgNQAJgOAKAAQAGAAAHADQAJAEAAAEIgCAEQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgDgBIgDgCQgDgDgIAAQgFAAgFALQgGAJAAAHQAAAIAGAEQAEAEAHAAIAHgBIAIgFIACgBQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAABQgBADgIAFQgJADgFAAQgLAAgIgHg");
	this.shape_102.setTransform(37.3,167.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CC33FF").s().p("AgYAtQgHgFABgTIAAgIIAAgKIAAgCIABgEIABgZIgBgFIAAgHQAAgHAGAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAAAIANgCIALgBQAOAAAIADQAFACAAAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAQgKgDgJAAIgJABIgNADIAAAFIgBAXIAZgCIAPgCQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQABAFgGABIgOABIgaACIgBAIIAAAHQAAANACACQACACAHAAIALAAIALAAIADgBIAEAAQAFgBAAAHQAAAEgEACQgGABgSAAQgRAAgFgFg");
	this.shape_103.setTransform(174.1,147.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CC33FF").s().p("AgZAuQgDgCAAgHIABgUQACgZgBghQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAhgCAaIAAAJIgBAJQAQAAAWgIIACAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAEgEACQgGADgOACQgNADgIAAQgGAAgDgCg");
	this.shape_104.setTransform(167,147.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CC33FF").s().p("AgYAtIgCgEIAAgRIACgYIABgYIAAgIIABgIQABgFAEAAIAGgBIAIAAQAJAAAKAIQAKAIAAALQAAAPgLAHQgKAIgNAAIgGgBIgBAfIgCAEQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgMgiIAAALIgBAXIAFAAQAKAAAGgEQAIgGgBgJQABgHgIgEQgGgFgGAAIgFAAIgDABg");
	this.shape_105.setTransform(160.6,147.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#CC33FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBgBg");
	this.shape_106.setTransform(154.1,147.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CC33FF").s().p("AgYAkQgHgJAAgMQAAgTAQgVQAOgSANAAIAFABIAEABQACgDADAAQAEAAACAFIABAMIgCAEQgCACgDAAQgDAAgCgEQgBgEgCgBQgBgBgFAAQgJAAgJANQgOASAAAPQAAAHAFAGQAFAFAHAAQAFAAAGgDIAKgHIAGgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAACgCACQgPAOgPAAQgNAAgIgJg");
	this.shape_107.setTransform(147.3,147.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CC33FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_108.setTransform(140.3,147.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#CC33FF").s().p("AgDArQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_109.setTransform(133.4,147.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CC33FF").s().p("AgdAtQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgOIgBgNIABgPIABgQIAAgJIgBgJQAAgDACgDQACgDAEAAIAPABQAIABAEADQAYANAAASQAAAJgIAGQgGAFgKADQASAKAJALIABAEQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgFgCQgTgTgXgHIAAAMIABALQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgSgZIABAHIgCAMIgBAKIADAAIADAAQAOAAAHgEQADAAADgDQADgEAAgCQAAgIgJgHQgHgHgKgBIgJAAg");
	this.shape_110.setTransform(125.2,147.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CC33FF").s().p("AAVAeIgEgSIgQADIgOADIgKAWQgCAEgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgDAJgTIgBgDQAAgFAGgBIARgcQANgWADAAQAFAAACAGIADAUIAJAoIADAJIACAGQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgFAAgEgOgAgGAEIAUgEIgFgWg");
	this.shape_111.setTransform(116.8,147.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#CC33FF").s().p("AgYAtIgCgEIAAgRIABgYIABgYIAAgIIACgIQABgFAEAAIAGgBIAIAAQAKAAAJAIQAKAIAAALQABAPgLAHQgLAIgNAAIgHgBIAAAfIgCAEQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgMgiIAAALIgBAXIAFAAQAKAAAGgEQAIgGAAgJQAAgHgIgEQgGgFgGAAIgFAAIgDABg");
	this.shape_112.setTransform(109.5,147.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_113.setTransform(99.5,149.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAQAsIgCgNIgCgOIABgFIAAgEQAAgKgGAAQgHAAgFAFIgIANQAAAXgCAEQgCAEgDAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgIIAAgJIAAgqIABgKIgBgFIAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAQAFAAABAGIABAKIAAANIgBAMIAAAGQAFgHAGgDQAEgDAGAAQAKAAAEAGQACAFABAJIAAALIABAMIACANIAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_114.setTransform(92.7,147.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgHIAAgGIgBghIgMgBQgGgBAAgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAEAAAAAJIABAFIAAADIgBAEIAJgBIAIABQAEABAAAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIABADQAAANgHAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_115.setTransform(86.4,148.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgHIAAgGIgCghIgMgBQgFgBgBgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAABAJIAAAFIAAADIAAAEIAIgBIAIABQADABABAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIABADQgBANgGAAQAAAAAAAAQAAAAgBgBQgBAAAAAAQgBgBAAAAg");
	this.shape_116.setTransform(77.1,148.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AATAeIgEgEIgKAEIgGABQgOAAgGgHQgGgIAAgOQAAgNAKgLQAJgKANAAQAFABAGACQAIADAAAFIgBADIgBAHIAAAMIABALIADALIACADIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAIAAAIQAAAKAEAFQADAEAHAAQAFAAADgBIAGgFIgCgWIABgGIABgGIgEgCIgCgBQgJAAgGAIg");
	this.shape_117.setTransform(71.2,149.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAQAsIgCgNIgCgOIABgFIAAgEQAAgKgGAAQgHAAgFAFIgIANQAAAXgCAEQgCAEgDAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgDIABgIIAAgJIAAgqIABgKIgBgFIAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAABAGIABAKIAAANIgBAMIAAAGQAFgHAGgDQAEgDAGAAQAKAAAEAGQACAFABAJIAAALIABAMIACANIAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_118.setTransform(64.7,147.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgHIAAgGIgBghIgMgBQgGgBAAgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAEAAAAAJIABAFIAAADIgBAEIAJgBIAIABQAEABAAAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIABADQAAANgHAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_119.setTransform(58.4,148.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_120.setTransform(48.8,149.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgHIAAgGIgBghIgOgBQgEgBAAgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAABAJIAAAFIAAADIAAAEIAIgBIAIABQADABABAEQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIABADQgBANgGAAQAAAAAAAAQAAAAgBgBQgBAAAAAAQgBgBAAAAg");
	this.shape_121.setTransform(42.6,148.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgRAZQgHgIgBgOQAAgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAANgHAJQgHAKgMAAQgJAAgIgHgAgKgLQgDAHAAAHQAAAJAEAEQAEAEAFAAQAFAAAFgEQAFgFAAgIQABgWgNAAQgIAAgFAIg");
	this.shape_122.setTransform(36.5,149.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_123.setTransform(28.8,147.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(177,2,253,0.161)").s().p("AumFAIAAp/IdNAAIAAJ/g");
	this.shape_124.setTransform(101.6,166.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_53}]},185).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[]},48).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},102).wait(110));

	// Layer 21 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_153 = new cjs.Graphics().p("AvYB2IglAAIjHgCQgIgCgLgHQgHgEgGgIIgigDQgOACgFADQgCAAgDAHQgIATqGAAQhYAAgjg+QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbglQAjgvBEgBQCCAAAWCAQAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgLQABglAbglQAkg0A+AAQBUAAAdBJQAPAmgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAbAAA6IACAnQgDAbgZASQhHA2kSAAQkmgLgWgDQgOgBvhgJIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAsgSAjQggA9hMAAQhhgBgujvg");
	var mask_graphics_155 = new cjs.Graphics().p("AvYB2IglAAIi+gCQgBASgNARQgSAWgfAAQgnAAgQgeQgHgPgBgRQhqAMoJAAQhYAAgjg+QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbglQAjgvBEgBQCCAAAWCAQAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgLQABglAbglQAkg0A+AAQBUAAAdBJQAPAmgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAbAAA6IACAnQgDAbgZASQhHA2kSAAQkmgLgWgDQgOgBvhgJIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAsgSAjQggA9hMAAQhhgBgujvg");
	var mask_graphics_156 = new cjs.Graphics().p("AvYB2IglAAIi+gCQgBAJgEAKQAEALABAPQAAAVgOATQgSAXgfAAQgnAAgQgfQgIgPAAgSQAAgMAFgMQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbglQAjgvBEgBQCCAAAWCAQAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgLQABglAbglQAkg0A+AAQBUAAAdBJQAPAmgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAbAAA6IACAnQgDAbgZASQhHA2kSAAQkmgLgWgDQgOgBvhgJIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAsgSAjQggA9hMAAQhhgBgujvg");
	var mask_graphics_157 = new cjs.Graphics().p("AvYB2IglAAIi+gCQgBAJgEAKQAEALABAPQAAALgDAKQACAJABAMQAAAVgOATQgSAXgfAAQgnAAgQgeQgIgQAAgSQAAgKADgKQgDgKAAgMQAAgMAFgMQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbglQAjgvBEgBQCCAAAWCAQAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgLQABglAbglQAkg0A+AAQBUAAAdBJQAPAmgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAbAAA6IACAnQgDAbgZASQhHA2kSAAQkmgLgWgDQgOgBvhgJIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAsgSAjQggA9hMAAQhhgBgujvg");
	var mask_graphics_158 = new cjs.Graphics().p("AvYB2IglAAIi+gCQgBAJgEAKQAEALABAPQAAALgDAKQACAJABAMIgBALQAIAOACAWQAAAUgPATQgTAYgdAAQgnAAgQgfQgJgQAAgSIABgLIgBgBQgIgQAAgSQAAgKADgKQgDgKAAgMQAAgMAFgMQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbglQAjgvBEgBQCCAAAWCAQAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgLQABglAbglQAkg0A+AAQBUAAAdBJQAPAmgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAbAAA6IACAnQgDAbgZASQhHA2kSAAQkmgLgWgDQgOgBvhgJIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAsgSAjQggA9hMAAQhhgBgujvg");
	var mask_graphics_159 = new cjs.Graphics().p("A0oFKQgJgQAAgSQAAgNAFgLQgFgNAAgNIABgLIgBgCQgIgQAAgRQAAgLADgKQgDgKAAgMQAAgMAFgMQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgTgEgYQgCgMAAgJQAAhGBDgpQATgLAagFQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbgkQAjgwBEAAQCCAAAWB/QAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgKQABgmAbglQAkg0A+AAQBUAAAdBKQAPAlgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAcAAA5IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgHQAHBBAAAiQAAArgSAjQggA9hMAAQhhAAgujwIglABIi+gDQgBAKgEAJQAEALABAPQAAALgDAKQACAJABAMIgBALQAIAOACAWQAAAMgGALQAFAMABAPQAAAVgPATQgTAXgdAAQgnAAgQgeg");
	var mask_graphics_160 = new cjs.Graphics().p("A0oFnQgJgQAAgRQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgOIABgLIgBgBQgIgQAAgSQAAgKADgKQgDgKAAgMQAAgMAFgMQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgTgEgXQgCgMAAgLQAAhFBDgpQATgMAagEQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbglQAjgvBEgBQCCAAAWCAQAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgLQABglAbglQAkg0A+AAQBUAAAdBJQAPAmgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAbAAA6IACAoQgDAagZASQhHA2kSAAQkmgLgWgDQgOgBvhgJIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAsgSAjQggA9hMAAQhhgBgujvIglAAIi+gCQgBAJgEAKQAEALABAPQAAALgDAKQACAJABAMIgBALQAIAOACAWQAAAMgGALQAFAMABAPQAAAOgIANQAGAOACASQAAAVgPASQgTAYgdAAQgnAAgQgfg");
	var mask_graphics_161 = new cjs.Graphics().p("A0oF8IgJghQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgOIABgLIgBgCQgIgPAAgSQAAgKADgKQgDgLAAgLQAAgNAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZASQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAArgSAkQggA8hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAPQAAAKgDAKQACAKABAMIgBAKQAIAPACAVQAAAMgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMQAAAUgPATQgTAYgdAAQgnAAgQgfg");
	var mask_graphics_162 = new cjs.Graphics().p("A0kGPQgIgQAAgRQAAgHABgHIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgOIABgLIgBgBQgIgQAAgSQAAgKADgKQgDgKAAgMQAAgMAFgMQgFgMAAgNQhqAMoJAAQhYAAgjg9QgLgTgEgYQgCgMAAgLQAAhFBDgpQATgMAagEQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbglQAjgvBEgBQCCAAAWCAQAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgLQABglAbglQAkg0A+AAQBUAAAdBJQAPAmgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAbAAA6IACAoQgDAbgZASQhHA1kSAAQkmgLgWgDQgOgBvhgJIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAsgSAjQggA9hMAAQhhgBgujvIglAAIi+gCQgBAJgEAKQAEALABAPQAAALgDAKQACAJABAMIgBALQAIAOACAWQAAAMgGALQAFAMABAPQAAAOgIANQAGAOACASQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAAVgPASQgTAYgfAAQgoAAgRgfg");
	var mask_graphics_163 = new cjs.Graphics().p("A0kGiQgIgRAAgSQAAgJACgKQgCgIAAgJQAAgHABgHIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgOIABgLIgBgBQgIgQAAgSQAAgKADgKQgDgKAAgMQAAgMAFgMQgFgMAAgNQhqAMoJAAQhYAAgjg9QgLgTgEgYQgCgMAAgLQAAhFBDgpQATgMAagEQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbglQAjgvBEgBQCCAAAWCAQAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgLQABglAbglQAkg0A+AAQBUAAAdBJQAPAmgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAbAAA6IACAoQgDAbgZASQhHA1kSAAQkmgLgWgDQgOgBvhgJIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAsgSAjQggA9hMAAQhhgBgujvIglAAIi+gCQgBAJgEAKQAEALABAPQAAALgDAJQACAKABAMIgBALQAIAOACAWQAAAMgGALQAFAMABAPQAAAOgIANQAGAOACASQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAATgMATQgRAbgiABQgngBgQgeg");
	var mask_graphics_164 = new cjs.Graphics().p("A0kG9QgIgQAAgRQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgIAAgJQAAgIABgGIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgOIABgLIgBgCQgIgPAAgSQAAgKADgKQgDgLAAgLQAAgNAFgLQgFgMAAgMQhqALoJAAQhYAAgjg9QgLgUgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZATQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAbhxAAInGgHQAHBBAAAhQAAArgSAkQggA8hMAAQhhAAgujvIglAAIi+gCQgBAJgEAJQAEAMABAPQAAAKgDAKQACAKABAMIgBAKQAIAPACAVQAAAMgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABARQAAAVgPATQgSAXgeAAQgnAAgQgfg");
	var mask_graphics_165 = new cjs.Graphics().p("A0kHbQgIgRAAgQQAAgQAHgNQgHgPAAgPQAAgPAGgMQgGgOAAgQQAAgJACgJQgCgJAAgJQAAgHABgHIgGgYQAAgKAEgKQgEgLAAgLQAAgPAHgNQgHgPAAgQQAAgNAFgLQgFgNAAgNIABgLIgBgCQgIgQAAgRQAAgLADgKQgDgKAAgMQAAgMAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgTgEgYQgCgMAAgKQAAhGBDgpQATgLAagFQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbgkQAjgwBEAAQCCAAAWB/QAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgKQABgmAbglQAkg0A+AAQBUAAAdBKQAPAlgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAcAAA5IACAoQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgHQAHBAAAAiQAAArgSAjQggA9hMAAQhhAAgujvIglABIi+gDQgBAKgEAJQAEALABAOQAAALgDAKQACAJABAMIgBALQAIAOACAWQAAAMgGALQAFAMABAPQAAAOgIAOQAGANACASQAAAKgEAKQADAKABAMIAAAEQAHANABAVQAAANgFAMIABAKQAAAOgGAOQAFANABARQAAAOgHANQAGANABATQAAAVgPASQgSAXgeAAQgnAAgQgeg");
	var mask_graphics_166 = new cjs.Graphics().p("A0TH2QgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgIAAgJQAAgIABgGIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgOIABgLIgBgCQgIgPAAgSQAAgKADgKQgDgKAAgLQAAgNAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgUgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZATQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAchxAAInGgHQAHBAAAAhQAAArgSAkQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAPQAAAKgDAJQACAKABAMIgBAKQAIAPACAVQAAAMgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABARQAAAPgHANQAGANABASIgBAIQAQAQACAfQAAAVgPASQgSAYgeAAQgoAAgPgfg");
	var mask_graphics_167 = new cjs.Graphics().p("A0CIPQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgLAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgKADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAgQAAArgSAjQggA9hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABALIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABANIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAPAQACAfQAAAVgPASQgTAYgeAAQgmAAgQgfg");
	var mask_graphics_168 = new cjs.Graphics().p("AzhIiIgFgLQgSgHgKgTQgJgQAAgSIAAgEQgFgGgDgHQgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgIAAgJQAAgIABgGIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgOIABgLIgBgCQgIgPAAgRQAAgKADgKQgDgLAAgLQAAgNAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgUgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZATQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAqgSAkQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAPQAAAKgDAKQACAKABAMIgBAKQAIAOACAVQAAAMgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABARQAAAPgHANQAGANABASIgBAIQAQAQACAfIAAAEQAJAJAEAQQAiAMADAvQAAAVgPATQgSAXgeAAQgnAAgQgfg");
	var mask_graphics_169 = new cjs.Graphics().p("AzHIvIgBgBQgQgHgJgRIgFgMQgSgHgKgTQgJgQAAgRIAAgFQgFgFgDgIQgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgOQAAgPAGgMQgGgPAAgPQAAgJACgKQgCgIAAgJQAAgHABgHIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgOIABgLIgBgBQgIgPAAgSQAAgKADgKQgDgKAAgMQAAgMAFgMQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgTgEgYQgCgMAAgLQAAhFBDgpQATgMAagEQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbglQAjgvBEgBQCCAAAWCAQAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgLQABglAbglQAkg0A+AAQBUAAAdBJQAPAmgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAbAAA6IACAoQgDAbgZASQhHA2kSAAQkmgLgWgDQgOgBvhgJIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAArgSAjQggA9hMAAQhhgBgujuIglAAIi+gCQgBAJgEAKQAEALABAPQAAALgDAKQACAJABAMIgBALQAIAOACAVQAAAMgGALQAFAMABAPQAAAOgIANQAGAOACASQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABASQAAAOgHANQAGANABASIgBAIQAQAQACAfIAAAEQAJAJAEAQQAUAHAJATQAfANACAtQAAAWgOASQgSAYgfgBQgmAAgQgeg");
	var mask_graphics_170 = new cjs.Graphics().p("AyhJEQgagGgMgXIgBgBQgQgIgJgRIgFgLQgSgHgKgTQgJgQAAgSIAAgEQgFgGgDgHQgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgIAAgJQAAgIABgGIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgOIABgKIgBgCQgIgPAAgSQAAgKADgKQgDgLAAgLQAAgNAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgUgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZATQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAqgSAkQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAPQAAAKgDAKQACAKABAMIgBAKQAIAPACAUQAAAMgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABARQAAAPgHANQAGANABASIgBAIQAQAQACAfIAAAEQAJAJAEAQQAUAHAJATQAMAFAHAJQAoAJAEA0QAAAVgPATQgSAXgeAAQgeAAgQgSg");
	var mask_graphics_171 = new cjs.Graphics().p("AxqJPIgJAAQgeAAgQgSQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgIgKgTQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgSIAAgIQgFgGgEgHQgIgRAAgQQAAgQAHgNQgHgPAAgPQAAgPAGgMQgGgOAAgQQAAgJACgJQgCgJAAgJQAAgHABgHIgGgYQAAgKAEgKQgEgLAAgLQAAgPAHgNQgHgPAAgQQAAgNAFgLQgFgNAAgNIABgKIgBgCQgIgQAAgRQAAgLADgKQgDgKAAgMQAAgMAFgMQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgTgEgYQgCgMAAgKQAAhGBDgpQATgLAagFQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbgkQAjgwBEAAQCCAAAWB/QAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgKQABgmAbglQAkg0A+AAQBUAAAdBKQAPAlgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAcAAA5IACAoQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgHQAHBBAAAiQAAAqgSAjQggA9hMAAQhhAAgujvIglABIi+gDQgBAKgEAJQAEALABAPQAAALgDAKQACAJABAMIgBALQAIAOACAVQAAAMgGALQAFAMABAPQAAAOgIAOQAGANACASQAAAKgEAKQADAKABAMIAAAEQAHANABAVQAAANgFAMIABAKQAAAOgGAOQAFANABARQAAAOgHANQAGANABATIgBAHQAQAQACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAEAHAJQANADAKAIIAIAAQA7AAAEA/QAAAVgOATQgSAXgfAAQgZAAgQgNg");
	var mask_graphics_172 = new cjs.Graphics().p("AxNJTQgRgCgMgKIgJAAQgeAAgQgSQgagFgMgYIgBgBQgQgHgJgRIgFgMQgSgHgKgTQgJgQAAgRIAAgFQgFgFgDgIQgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgOQAAgPAGgMQgGgPAAgPQAAgJACgKQgCgIAAgJQAAgHABgHIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgNIABgLIgBgBQgIgQAAgSQAAgKADgKQgDgKAAgMQAAgMAFgMQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgTgEgYQgCgMAAgLQAAhFBDgpQATgMAagEQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbglQAjgvBEgBQCCAAAWCAQAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgLQABglAbglQAkg0A+AAQBUAAAdBJQAPAmgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAbAAA6IACAoQgDAbgZASQhHA2kSAAQkmgLgWgDQgOgBvhgJIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAArgSAjQggA9hMAAQhhgBgujuIglAAIi+gCQgBAJgEAKQAEALABAPQAAALgDAKQACAJABAMIgBALQAIAOACAWQAAALgGALQAFAMABAPQAAAOgIANQAGAOACASQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABASQAAAOgHANQAGANABASIgBAIQAQAQACAfIAAAEQAJAJAEAQQAUAHAJATQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQAuAHADA4QAAAVgPATQgSAWgeAAQgdAAgRgRg");
	var mask_graphics_173 = new cjs.Graphics().p("Av7JXQgPALgVAAQgdAAgRgRQgRgCgMgLIgJABQgeAAgQgSQgagGgMgXIgBgBQgQgIgJgRIgFgLQgSgHgKgTQgJgQAAgSIAAgEQgFgGgDgHQgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgIAAgJQAAgIABgGIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgNIABgLIgBgCQgIgPAAgSQAAgKADgKQgDgLAAgLQAAgNAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgUgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZATQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAqgSAkQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAPQAAAKgDAKQACAKABAMIgBAKQAIAPACAVQAAALgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABARQAAAPgHANQAGANABASIgBAIQAQAQACAfIAAAEQAJAJAEAQQAUAHAJATQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMALQAPgLAVAAQA7AAAEBAQAAAUgPATQgSAYgeAAQgcAAgQgQg");
	var mask_graphics_174 = new cjs.Graphics().p("AurJbQgPAMgVAAQgcAAgQgQQgPALgVAAQgdAAgRgRQgRgCgMgLIgJABQgeAAgQgSQgagGgMgXIgBgBQgQgIgJgRIgFgLQgSgHgKgTQgJgQAAgSIAAgEQgFgGgDgHQgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgIAAgJQAAgIABgGIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgNIABgLIgBgCQgIgPAAgSQAAgKADgKQgDgLAAgLQAAgNAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgUgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZATQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAqgSAkQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAPQAAAKgDAKQACAKABAMIgBAKQAIAPACAVQAAALgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABARQAAAPgHANQAGANABASIgBAIQAQAQACAfIAAAEQAJAJAEAQQAUAHAJATQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMALQAPgLAVAAQAYAAAPALQAPgLAWAAQA6AAAFBAQAAAVgPASQgSAYgeAAQgZAAgPgMg");
	var mask_graphics_175 = new cjs.Graphics().p("AteJbQgQAMgVAAQgZAAgPgMQgPAMgVAAQgcAAgQgQQgPALgVAAQgdAAgRgRQgRgCgMgLIgJABQgeAAgQgSQgagGgMgXIgBgBQgQgIgJgRIgFgLQgSgHgKgTQgJgQAAgSIAAgEQgFgGgDgHQgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgIAAgJQAAgIABgGIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgNIABgLIgBgCQgIgPAAgSQAAgKADgKQgDgLAAgLQAAgNAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgUgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZATQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAqgSAkQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAPQAAAKgDAKQACAKABAMIgBAKQAIAPACAVQAAALgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABARQAAAPgHANQAGANABASIgBAIQAQAQACAfIAAAEQAJAJAEAQQAUAHAJATQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMALQAPgLAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQA9AAACBAQAAAVgOASQgSAYgfAAQgXAAgPgMg");
	var mask_graphics_176 = new cjs.Graphics().p("AsTJbQgPAMgWAAQgXAAgPgMQgQAMgVAAQgZAAgPgMQgPAMgVAAQgcAAgQgQQgPALgVAAQgdAAgRgRQgRgCgMgLIgJABQgeAAgQgSQgagGgMgXIgBgBQgQgIgJgRIgFgLQgSgHgKgTQgJgQAAgSIAAgEQgFgGgDgHQgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgIAAgJQAAgIABgGIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgNIABgLIgBgCQgIgPAAgSQAAgKADgKQgDgLAAgLQAAgNAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgUgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZATQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAqgSAkQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAPQAAAKgDAKQACAKABAMIgBAKQAIAPACAVQAAALgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABARQAAAPgHANQAGANABASIgBAIQAQAQACAfIAAAEQAJAJAEAQQAUAHAJATQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMALQAPgLAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPALQAPgLAVAAQA7AAAEBAQAAAUgPATQgSAYgeAAQgYAAgPgMg");
	var mask_graphics_177 = new cjs.Graphics().p("ArDJXQgRAQgYAAQgYAAgPgMQgPAMgWAAQgXAAgPgMQgQAMgVAAQgZAAgPgMQgPAMgVAAQgcAAgQgQQgPALgVAAQgdAAgRgRQgRgCgMgLIgJABQgeAAgQgSQgagGgMgXIgBgBQgQgIgJgRIgFgLQgSgHgKgTQgJgQAAgSIAAgEQgFgGgDgHQgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgIAAgJQAAgIABgGIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgNIABgLIgBgCQgIgPAAgSQAAgKADgKQgDgLAAgLQAAgNAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgUgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZATQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAqgSAkQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAPQAAAKgDAKQACAKABAMIgBAKQAIAPACAVQAAALgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABARQAAAPgHANQAGANABASIgBAIQAQAQACAfIAAAEQAJAJAEAQQAUAHAJATQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMALQAPgLAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPALQAPgLAVAAQAcAAAPAOQAQgOAZAAQA7AAAEBAQAAAVgOASQgSAYgfAAQgbAAgQgQg");
	var mask_graphics_178 = new cjs.Graphics().p("Ap1JdQgPAKgUAAQgbAAgQgQQgRAQgYAAQgYAAgPgMQgPAMgWAAQgXAAgPgMQgQAMgVAAQgZAAgPgMQgPAMgVAAQgcAAgQgQQgPALgVAAQgdAAgRgRQgRgCgMgLIgJABQgeAAgQgSQgagGgMgXIgBgBQgQgIgJgRIgFgLQgSgHgKgTQgJgQAAgSIAAgEQgFgGgDgHQgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgIAAgJQAAgIABgGIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgNIABgLIgBgCQgIgPAAgSQAAgKADgKQgDgLAAgLQAAgNAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgUgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZATQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAqgSAkQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAPQAAAKgDAKQACAKABAMIgBAKQAIAPACAVQAAALgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABARQAAAPgHANQAGANABASIgBAIQAQAQACAfIAAAEQAJAJAEAQQAUAHAJATQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMALQAPgLAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPALQAPgLAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQA7AAAEBAQAAAVgPASQgSAYgeAAQgWAAgPgKg");
	var mask_graphics_179 = new cjs.Graphics().p("AosJZQgPAMgVAAQgWAAgPgKQgPAKgUAAQgbAAgQgQQgRAQgYAAQgYAAgPgMQgPAMgWAAQgXAAgPgMQgQAMgVAAQgZAAgPgMQgPAMgVAAQgcAAgQgQQgPALgVAAQgdAAgRgRQgRgCgMgLIgJABQgeAAgQgSQgagGgMgXIgBgBQgQgIgJgRIgFgLQgSgHgKgTQgJgQAAgSIAAgEQgFgGgDgHQgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgIAAgJQAAgIABgGIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgNIABgLIgBgCQgIgPAAgSQAAgKADgKQgDgLAAgLQAAgNAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgUgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZATQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAqgSAkQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAPQAAAKgDAKQACAKABAMIgBAKQAIAPACAVQAAALgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABARQAAAPgHANQAGANABASIgBAIQAQAQACAfIAAAEQAJAJAEAQQAUAHAJATQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMALQAPgLAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPALQAPgLAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQA6AAAFA/QAAAVgPATQgSAXgeAAQgcAAgQgQg");
	var mask_graphics_180 = new cjs.Graphics().p("AneJfQgOAKgUAAQgcAAgQgQQgPAMgVAAQgWAAgPgKQgPAKgUAAQgbAAgQgQQgRAQgYAAQgYAAgPgMQgPAMgWAAQgXAAgPgMQgQAMgVAAQgZAAgPgMQgPAMgVAAQgcAAgQgQQgPALgVAAQgdAAgRgRQgRgCgMgLIgJABQgeAAgQgSQgagGgMgXIgBgBQgQgIgJgRIgFgLQgSgHgKgTQgJgQAAgSIAAgEQgFgGgDgHQgIgPAAgSIAAgJQgFgFgEgIQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgIAAgJQAAgIABgGIgGgYQAAgLAEgKQgEgKAAgLQAAgPAHgOQgHgOAAgQQAAgNAFgMQgFgMAAgNIABgLIgBgCQgIgPAAgSQAAgKADgKQgDgLAAgLQAAgNAFgLQgFgMAAgNQhqAMoJAAQhYAAgjg+QgLgUgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjABIAggbQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAmgBApQAAAJgEARIWBAHQAIAAAoAKQAPAFAoAoQAXAbAAA6IACAnQgDAbgZATQhHA1kSAAQkmgKgWgDQgOgCvhgIIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAqgSAkQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAPQAAAKgDAKQACAKABAMIgBAKQAIAPACAVQAAALgGAMQAFAMABAPQAAAOgIANQAGANACATQAAAKgEAKQADAKABAMIAAADQAHAOABAVQAAANgFALIABALQAAAOgGAOQAFAMABARQAAAPgHANQAGANABASIgBAIQAQAQACAfIAAAEQAJAJAEAQQAUAHAJATQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMALQAPgLAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPALQAPgLAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQA7AAAEA/QAAAVgOATQgSAXgfAAQgWAAgPgKg");
	var mask_graphics_181 = new cjs.Graphics().p("AmRJaQgQAPgYAAQgWgBgPgJQgOAJgUABQgcAAgQgQQgPALgVAAQgWABgPgLQgPALgUgBQgbAAgQgPQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgLAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgMIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAAqgSAjQggA9hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAALgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABANIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAuAAATAkQAJASABAVQAAAYgPAVQgVAegnAAQgdAAgTgPg");
	var mask_graphics_182 = new cjs.Graphics().p("Aq6JYIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgLAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgLQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAiQggA9hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFAKABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABANIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAuAAATAlQAJAUABASQAAAXgPAWQgVAegnAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgcAAgQgQIgGAEQgEALgHALQgUAegoAAQguAAgTglg");
	var mask_graphics_183 = new cjs.Graphics().p("AqmJrIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgLAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgMAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAPQAAAOgIANQAGANACASQAAALgEAJQADAKABANIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAYgPAVQgVAegnAAQguAAgTgmg");
	var mask_graphics_184 = new cjs.Graphics().p("AqSKPIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgLAEgKQgEgLAAgLQAAgOAHgNQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGAMACASQAAALgEAJQADAKABANIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAuAAASAkQAJASABAVQAAAYgOAVQgUAegoAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJQAJATABAUQAAAYgPAVQgVAegnAAQgvAAgSglg");
	var mask_graphics_185 = new cjs.Graphics().p("ApqKjIgBgHQgagIgNgZIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgLAEgKQgEgLAAgLQAAgNAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA8hMAAQhhAAgujuIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACARQAAALgEAJQADAKABANIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASQAAAXgPAWQgVAegnAAQguAAgTglg");
	var mask_graphics_186 = new cjs.Graphics().p("ApqKyIgKgmIAAgCQgUgJgKgVIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgLAEgKQgEgKAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA9hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAAKgEAJQADAKABANIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASQAAAIgCAIIACAOQAAAYgPAVQgVAegnAAQguAAgTglg");
	var mask_graphics_187 = new cjs.Graphics().p("ApgLFIgKglIAAgEIgKgkIAAgCQgUgJgKgVIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgLAEgJQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA9hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABAMIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASQAAAIgCAIIACAOIAAACQAJAUABASQAAAYgPAVQgUAegoAAQguAAgTgmg");
	var mask_graphics_188 = new cjs.Graphics().p("AoqLmQglgFgRghIgKglIAAgEIgKgkIAAgCQgUgJgKgVIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgKAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA9hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABAMIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASIgBAMQAUAIALAVQAJASABAVQAAAYgPAVQgUAegoAAQgZAAgQgKg");
	var mask_graphics_189 = new cjs.Graphics().p("AnpLoQgLADgNAAQgZAAgQgKQglgFgRghIgKglIAAgEIgKgkIAAgCQgUgJgKgVIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgKAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA9hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABAMIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASIgBAMIAMAGQALgDANAAQAuAAATAlQAJAUABASQAAAXgPAWQgVAegnAAQgcAAgSgNg");
	var mask_graphics_190 = new cjs.Graphics().p("AmZLuQgPAHgTAAQgcAAgSgNQgLADgNAAQgZAAgQgKQglgFgRghIgKglIAAgEIgKgkIAAgCQgUgJgKgVIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgKAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA9hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABAMIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASIgBAMIAMAGQALgDANAAQAUAAAPAIQAPgIAUAAQAuAAATAlQAJAUABASQAAAXgPAWQgVAegnAAQgVAAgPgHg");
	var mask_graphics_191 = new cjs.Graphics().p("AlDLjQgUASgeAAQgVAAgPgHQgPAHgTAAQgcAAgSgNQgLADgNAAQgZAAgQgKQglgFgRghIgKglIAAgEIgKgkIAAgCQgUgJgKgVIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgKAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA9hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABAMIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASIgBAMIAMAGQALgDANAAQAUAAAPAIQAPgIAUAAQAgAAATASQATgSAeAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgSgSg");
	var mask_graphics_192 = new cjs.Graphics().p("AjpLrQgRAKgXAAQggAAgSgSQgUASgeAAQgVAAgPgHQgPAHgTAAQgcAAgSgNQgLADgNAAQgZAAgQgKQglgFgRghIgKglIAAgEIgKgkIAAgCQgUgJgKgVIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgKAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA9hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABAMIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASIgBAMIAMAGQALgDANAAQAUAAAPAIQAPgIAUAAQAgAAATASQATgSAeAAQAYAAARAKQAQgKAXAAQAuAAATAlQAJAUABASQAAAXgPAWQgVAegnAAQgYAAgQgKg");
	var mask_graphics_193 = new cjs.Graphics().p("AifLuQgPAHgTAAQgYAAgQgKQgRAKgXAAQggAAgSgSQgUASgeAAQgVAAgPgHQgPAHgTAAQgcAAgSgNQgLADgNAAQgZAAgQgKQglgFgRghIgKglIAAgEIgKgkIAAgCQgUgJgKgVIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgKAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA9hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABAMIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASIgBAMIAMAGQALgDANAAQAUAAAPAIQAPgIAUAAQAgAAATASQATgSAeAAQAYAAARAKQAQgKAXAAQAUAAAPAIQAPgIAUAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQgVAAgPgHg");
	var mask_graphics_194 = new cjs.Graphics().p("AhYLuQgQAHgTAAQgVAAgPgHQgPAHgTAAQgYAAgQgKQgRAKgXAAQggAAgSgSQgUASgeAAQgVAAgPgHQgPAHgTAAQgcAAgSgNQgLADgNAAQgZAAgQgKQglgFgRghIgKglIAAgEIgKgkIAAgCQgUgJgKgVIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgKAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA9hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABAMIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASIgBAMIAMAGQALgDANAAQAUAAAPAIQAPgIAUAAQAgAAATASQATgSAeAAQAYAAARAKQAQgKAXAAQAUAAAPAIQAPgIAUAAQAUAAAPAIQAPgIAUAAQAuAAASAlQAJAUABASQAAAXgPAWQgUAegnAAQgVAAgOgHg");
	var mask_graphics_195 = new cjs.Graphics().p("AAFLYQgUAdgmAAQgVAAgOgHQgQAHgTAAQgVAAgPgHQgPAHgTAAQgYAAgQgKQgRAKgXAAQggAAgSgSQgUASgeAAQgVAAgPgHQgPAHgTAAQgcAAgSgNQgLADgNAAQgZAAgQgKQglgFgRghIgKglIAAgEIgKgkIAAgCQgUgJgKgVIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgKAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA9hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABAMIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASIgBAMIAMAGQALgDANAAQAUAAAPAIQAPgIAUAAQAgAAATASQATgSAeAAQAYAAARAKQAQgKAXAAQAUAAAPAIQAPgIAUAAQAUAAAPAIQAPgIAUAAQApAAASAdQAVgdAnAAQAuAAATAlQAJAUABASQAAAXgPAWQgVAegnAAQgpAAgUgdg");
	var mask_graphics_196 = new cjs.Graphics().p("AB2LgQgUAVggAAQgpAAgUgdQgUAdgmAAQgVAAgOgHQgQAHgTAAQgVAAgPgHQgPAHgTAAQgYAAgQgKQgRAKgXAAQggAAgSgSQgUASgeAAQgVAAgPgHQgPAHgTAAQgcAAgSgNQgLADgNAAQgZAAgQgKQglgFgRghIgKglIAAgEIgKgkIAAgCQgUgJgKgVIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgKAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA9hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABAMIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASIgBAMIAMAGQALgDANAAQAUAAAPAIQAPgIAUAAQAgAAATASQATgSAeAAQAYAAARAKQAQgKAXAAQAUAAAPAIQAPgIAUAAQAUAAAPAIQAPgIAUAAQApAAASAdQAVgdAnAAQAhAAAUAUQAegUA+AAQBTAAAbAlQANAUgDASQAABLh4AAQg+AAgfgVg");
	var mask_graphics_197 = new cjs.Graphics().p("AEdLqQgcALguAAQg+AAgfgVQgUAVggAAQgpAAgUgdQgUAdgmAAQgVAAgOgHQgQAHgTAAQgVAAgPgHQgPAHgTAAQgYAAgQgKQgRAKgXAAQggAAgSgSQgUASgeAAQgVAAgPgHQgPAHgTAAQgcAAgSgNQgLADgNAAQgZAAgQgKQglgFgRghIgKglIAAgEIgKgkIAAgCQgUgJgKgVIgKgmQAAgIABgIQgGgHgFgKIgFgUQgJgIgGgLIgFgTIgEgEQgRAPgYAAQgYAAgPgLQgPALgWAAQgXAAgPgLQgQALgVAAQgZAAgPgLQgPALgVAAQgcABgQgQQgPALgVAAQgdAAgRgRQgRgDgMgKIgJAAQgeABgQgTQgagFgMgYIgBAAQgQgIgJgRIgFgLQgSgHgKgUQgJgQAAgRIAAgEQgFgGgDgHQgIgQAAgRIAAgJQgFgGgEgHQgIgQAAgRQAAgPAHgOQgHgPAAgPQAAgOAGgNQgGgOAAgPQAAgKACgJQgCgJAAgIQAAgIABgHIgGgXQAAgKAEgKQgEgLAAgLQAAgOAHgOQgHgPAAgPQAAgNAFgMQgFgNAAgNIABgLIgBgCQgIgPAAgSQAAgLADgJQgDgLAAgMQAAgMAFgMQgFgLAAgOQhqAMoJABQhYAAgjg/QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gMCvgHQD6gMHogFQgCgnAAgYQAAgsAbgkQAjgwBEAAQCCAAAWCAQAEAcAAAgQGJgDH+AAIBjAAIAggaQAQgNABgLQABglAbgmQAkgzA+AAQBUAAAdBJQAPAlgBApQAAAKgEARIWBAGQAIAAAoALQAPAEAoAoQAXAcAAA6IACAnQgDAbgZASQhHA2kSAAQkmgKgWgDQgOgCvhgJIoRAHIgCABQghAchxAAInGgGQAHBBAAAhQAAArgSAjQggA9hMAAQhhAAgujvIglAAIi+gDQgBAKgEAJQAEAMABAOQAAALgDAKQACAKABAMIgBAKQAIAOACAWQAAAMgGAMQAFALABAQQAAAOgIANQAGANACASQAAALgEAJQADAKABAMIAAADQAHAOABAUQAAANgFAMIABALQAAAOgGANQAFANABARQAAAOgHAOQAGANABASIgBAIQAQAPACAfIAAAEQAJAKAEAPQAUAHAJAUQAMAFAHAJQANADAKAIIAIgBQAgAAAQASQASADAMAKQAPgKAVAAQAYAAAPALQAPgLAWAAQAYAAAPALQAPgLAVAAQAZAAAPAKQAPgKAVAAQAcAAAPAOQAQgOAZAAQAXAAAOAJQAPgJAUAAQAcAAAQAPQAPgKAVAAQAWAAAPAJQAOgJAUAAQARAAAMAEQAVgcAmAAQAlAAATAXQASgNAaAAQAgAAASASQAUgSAeAAQAXAAAQAJQAUgTAfAAQAhAAATATQAPgJAWAAQAuAAATAlQAJAUABASQAAAXgPAWQgUAegoAAQggAAgTgTQgQAJgWAAQgXAAgQgJQgTATggAAQggAAgSgSQgUASgeAAQgkAAgUgYQgSAOgaAAQgdAAgTgPQgQAPgYAAQgWgBgPgJQgOAJgUABQgPAAgMgFIABAKQAAAIgCAHQAHAHAFAJIAEAJQAXAIANAYQAJAUABASIgBAMIAMAGQALgDANAAQAUAAAPAIQAPgIAUAAQAgAAATASQATgSAeAAQAYAAARAKQAQgKAXAAQAUAAAPAIQAPgIAUAAQAUAAAPAIQAPgIAUAAQApAAASAdQAVgdAnAAQAhAAAUAUQAegUA+AAQArAAAdAKQArgKBLAAQCFAAAlAlQASAUgIASQAAAhgPAMQglAeiAAAQhIAAgsgLg");
	var mask_graphics_244 = new cjs.Graphics().p("AvYB2IglAAIjHgCQgIgCgLgHQgHgEgGgIIgigDQgOACgFADQgCAAgDAHQgIATqGAAQhYAAgjg+QgLgTgEgYQgCgMAAgKQAAhFBDgpQATgMAagEQA/gLCvgIQD6gLHogGQgCgmAAgZQAAgrAbglQAjgvBEgBQCCAAAWCAQAEAcAAAgQGJgCH+AAIBjAAIAggaQAQgOABgLQABglAbglQAkg0A+AAQBUAAAdBJQAPAmgBApQAAAKgEAQIWBAHQAIAAAoALQAPAEAoAoQAXAbAAA6IACAnQgDAbgZASQhHA2kSAAQkmgLgWgDQgOgBvhgJIoRAGIgCACQghAchxAAInGgHQAHBBAAAhQAAAsgSAjQggA9hMAAQhhgBgujvg");
	var mask_graphics_251 = new cjs.Graphics().p("AyuCoIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgoAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIAMgBANQAAAWgRARQgNAMgTAAQ7iACgoADQgwAAgRgYIgDgJIgXAAIgnAAQgJAagmAHIxLgBIAABgQgJCWgqAAQgqAAgHiYg");
	var mask_graphics_252 = new cjs.Graphics().p("AyuCoIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgoAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIAMgBANQAAAWgRARQgNAMgTAAQ7iACgoADQghAAgSgLIgBABQgOAUgbAAQgdAAgNgZIgCgGQgMAQgcAFIxLgBIAABgQgJCWgqAAQgqAAgHiYg");
	var mask_graphics_253 = new cjs.Graphics().p("AyuCoIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgoAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIAMgBANQAAAWgRARQgNAMgTAAQ7iACgoADQgaAAgRgHIABAGQAAARgKAOQgOAUgbAAQgdAAgNgYIgHgaQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYg");
	var mask_graphics_254 = new cjs.Graphics().p("AyuCoIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgoAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIAMgBANQAAAWgRARQgNAMgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAQgKAPQgOAUgbAAQgdAAgNgYIgHgaQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYg");
	var mask_graphics_255 = new cjs.Graphics().p("AyuCoIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgoAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIAMgBANQAAAWgRARQgNAMgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAARgKAOQgOAUgbAAQgdAAgNgZIgHgZQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYg");
	var mask_graphics_256 = new cjs.Graphics().p("AyuCoIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgoAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIAMgBANQAAAWgRARQgNAMgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAARgKAOQgOAUgbAAQgdAAgNgYQgHgOAAgMQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYg");
	var mask_graphics_257 = new cjs.Graphics().p("AyuCoIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgoAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIAMgBANQAAAWgRARQgNAMgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAQgKAPQgOAUgbAAQgdAAgNgZIgHgZQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYg");
	var mask_graphics_258 = new cjs.Graphics().p("AyuCoIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgoAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIAMgBANQAAAWgRARQgNAMgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAQgKAPQgOAUgbAAQgdAAgNgYQgHgOAAgMQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYg");
	var mask_graphics_259 = new cjs.Graphics().p("AArEtQgHgOAAgMQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgoAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIAMgBANQAAAWgRARQgNAMgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAQgKAPQgOAUgbAAQgdAAgNgYg");
	var mask_graphics_260 = new cjs.Graphics().p("AArE8QgHgOAAgMQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgoAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAVgRARQgNAMgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAARgKAOQgOAUgbAAQgdAAgNgYg");
	var mask_graphics_261 = new cjs.Graphics().p("AArFPIgHgZQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgLAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAVgRARQgNAMgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAQgKAPQgOAUgbAAQgdAAgNgZg");
	var mask_graphics_262 = new cjs.Graphics().p("AArFkIgHgaQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgIQgMANgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgPQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNAMgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAARgKAOQgOAUgbAAQgdAAgNgYg");
	var mask_graphics_263 = new cjs.Graphics().p("AArFyIgHgZQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgIAEgJQgMAOgaADIxLAAIAABfQgJCWgqAAQgqAAgHiYIAAhdIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoACQgaAAgRgGIABAGQAAAIgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAARgKAOQgOAUgbAAQgdAAgNgZg");
	var mask_graphics_264 = new cjs.Graphics().p("AArGJIgHgZQgBgNAHgLIgGgVQgBgKAEgIIgDgNQgBgLAGgLIgFgRQgBgLAFgKQgFgKABgJQgBgIADgIQgDgIABgHQgBgHADgIQgDgIABgGQgBgLAFgJIgEgPQgBgLAFgKQgFgKABgJQgBgLAFgKIgEgOQgBgKAEgIIgDgNQgBgKAFgJIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgPQgIgNAAgMQAAgpAzgKIMKAAQgChKAEhBQAHiWAqgBQAqAAAJCfQADBBgCBCIDpAAQC8AFFDgOQBhgEBHAAIgDgaIAAhWQgFgwAFgqQAIhPApAAQAqAAAJBTQADAqgDArIAABbIgEAXQBNAEAVALQAEgcAagLQAggNBVAAQBOAAAWAWQALAMgDAOIAAABINBgEQN9AAAGACIAOAGIAPAOQAIANgBANQAAAWgRARQgNANgTAAQ7iACgoACQgaAAgRgGIABAFQAAAKgEAIQADAHABAJQAAAJgDAHIADAPQAAAJgEAIQADAIABAJQAAALgFAKQAEAIABAMQAAAJgEAIQADAIABAKQAAAIgDAHIADAOQAAAJgDAHIADAOQAAALgFAKQAEAIABAMQAAAKgFAKQAEAIABALQAAAJgDAHIADAPQAAALgGALQAEAKACANQAAAQgKAOQgOAVgbgBQgdAAgNgYg");
	var mask_graphics_265 = new cjs.Graphics().p("AAwGdQgIgOAAgMQAAgHADgHIgHgZQgBgNAHgLIgGgVQgBgKAEgIIgDgNQgBgLAGgLIgFgRQgBgLAFgKQgFgKABgJQgBgIADgIQgDgIABgHQgBgHADgIQgDgIABgGQgBgLAFgJIgEgPQgBgLAFgKQgFgKABgJQgBgLAFgKIgEgOQgBgKAEgIIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgPQgIgNAAgMQAAgpAzgKIMKAAQgChKAEhBQAHiWAqgBQAqAAAJCfQADBBgCBCIDpAAQC8AFFDgOQBhgEBHAAIgDgaIAAhWQgFgwAFgqQAIhPApAAQAqAAAJBTQADAqgDArIAABbIgEAXQBNAEAVALQAEgcAagLQAggNBVAAQBOAAAWAWQALAMgDAOIAAABINBgEQN9AAAGACIAOAGIAPAOQAIANgBANQAAAWgRARQgNANgTAAQ7iACgoACQgaAAgRgGIABAFQAAAKgEAIQADAIABAJQAAAIgDAHIADAPQAAAJgEAIQADAIABAJQAAALgFAKQAEAIABAMQAAAJgEAIQADAIABAKQAAAIgDAHIADAOQAAAJgDAHIADAOQAAALgFAKQAEAIABAMQAAAKgFAKQAEAIABALQAAAJgDAHIADAPQAAALgGALQAEAKACANQgBAGgBAGQAGALAAAQQAAARgKAPQgNATgaABQgdAAgOgZg");
	var mask_graphics_266 = new cjs.Graphics().p("AA1GsQgHgNAAgMIAAgIQgGgMAAgLQAAgHADgHIgHgZQgBgNAHgLIgGgVQgBgKAEgIIgDgNQgBgLAGgLIgFgRQgBgLAFgKQgFgKABgJQgBgIADgIQgDgIABgHQgBgHADgIQgDgIABgGQgBgLAFgJIgEgPQgBgLAFgKQgFgKABgJQgBgLAFgKIgEgOQgBgJAEgIIgDgNQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgPQgIgNAAgMQAAgpAzgKIMKAAQgChKAEhBQAHiWAqgBQAqAAAJCfQADBBgCBCIDpAAQC8AFFDgOQBhgEBHAAIgDgaIAAhWQgFgwAFgqQAIhPApAAQAqAAAJBTQADAqgDArIAABbIgEAXQBNAEAVALQAEgcAagLQAggNBVAAQBOAAAWAWQALAMgDAOIAAABINBgEQN9AAAGACIAOAGIAPAOQAIANgBANQAAAWgRARQgNANgTAAQ7iACgoACQgaAAgRgGIABAFQAAAKgEAIQADAIABAJQAAAJgDAHIADAOQAAAJgEAIQADAIABAJQAAALgFAKQAEAIABAMQAAAJgEAIQADAIABAKQAAAIgDAHIADAOQAAAJgDAHIADAOQAAALgFAKQAEAIABAMQAAAKgFAKQAEAIABALQAAAJgDAHIADAPQAAALgGALQAEAKACANQgBAGgBAGQAGALAAAQIAAAHQAFAKABANQAAARgKAPQgOATgbAAQgdAAgNgYg");
	var mask_graphics_267 = new cjs.Graphics().p("AA6HAIgIgZQABgIACgHQgIgNABgMIAAgIQgGgMAAgLQAAgHADgHIgHgZQgBgNAHgLIgGgVQgBgKAEgIIgDgNQgBgLAGgLIgFgRQgBgLAFgKQgFgKABgJQgBgIADgIQgDgIABgHQgBgHADgIQgDgIABgGQgBgLAFgJIgEgPQgBgLAFgKQgFgKABgJQgBgLAFgKIgEgNQgBgKAEgIIgDgNQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgPQgIgNAAgMQAAgpAzgKIMKAAQgChKAEhBQAHiWAqgBQAqAAAJCfQADBBgCBCIDpAAQC8AFFDgOQBhgEBHAAIgDgaIAAhWQgFgwAFgqQAIhPApAAQAqAAAJBTQADAqgDArIAABbIgEAXQBNAEAVALQAEgcAagLQAggNBVAAQBOAAAWAWQALAMgDAOIAAABINBgEQN9AAAGACIAOAGIAPAOQAIANgBANQAAAWgRARQgNANgTAAQ7iACgoACQgaAAgRgGIABAFQAAAKgEAIQADAIABAJQAAAJgDAHIADAPQAAAJgEAHQADAIABAJQAAALgFAKQAEAIABAMQAAAJgEAIQADAIABAKQAAAIgDAHIADAOQAAAJgDAHIADAOQAAALgFAKQAEAIABAMQAAAKgFAKQAEAIABALQAAAJgDAHIADAPQAAALgGALQAEAKACANQgBAGgBAGQAGALAAAQIAAAHQAFAKABANQgBAIgBAGQAFALACAQQAAAQgLAOQgNAVgaAAQgdAAgOgZg");
	var mask_graphics_268 = new cjs.Graphics().p("ABJHUIgIgaIABgDQgFgFgDgGIgIgZQABgIACgHQgIgNABgMIAAgIQgGgMAAgLQAAgHADgHIgHgZQgBgNAHgLIgGgVQgBgKAEgIIgDgNQgBgLAGgLIgFgRQgBgLAFgKQgFgKABgJQgBgIADgIQgDgIABgHQgBgHADgIQgDgIABgGQgBgLAFgJIgEgPQgBgLAFgKQgFgKABgJQgBgKAFgKIgEgOQgBgKAEgIIgDgNQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiXIAAhfIsbgBQgIgDgHgEIgNgPQgIgNAAgMQAAgpAzgKIMKAAQgChKAEhBQAHiWAqgBQAqAAAJCfQADBBgCBCIDpAAQC8AFFDgOQBhgEBHAAIgDgaIAAhWQgFgwAFgqQAIhPApAAQAqAAAJBTQADAqgDArIAABbIgEAXQBNAEAVALQAEgcAagLQAggNBVAAQBOAAAWAWQALAMgDAOIAAABINBgEQN9AAAGACIAOAGIAPAOQAIANgBANQAAAWgRARQgNANgTAAQ7iACgoACQgaAAgRgGIABAFQAAAKgEAIQADAIABAJQAAAJgDAHIADAPQAAAJgEAIQADAIABAIQAAALgFAKQAEAIABAMQAAAJgEAIQADAIABAKQAAAIgDAHIADAOQAAAJgDAHIADAOQAAALgFAKQAEAIABAMQAAAKgFAKQAEAIABALQAAAJgDAHIADAPQAAALgGALQAEAKACANQgBAGgBAGQAGALAAAQIAAAHQAFAKABANQgBAIgBAGQAFALACAQIAAACQAMAMACAZQABARgLAPQgNATgaABQgdAAgOgZg");
	var mask_graphics_269 = new cjs.Graphics().p("ABdHrIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgKABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAIABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQATAMABAeQAAARgKAOQgNAUgaAAQgdAAgOgYg");
	var mask_graphics_270 = new cjs.Graphics().p("AB7H3IgBgCQgTgFgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgDQgFgFgDgGIgIgZQABgIACgHQgIgNABgMIAAgIQgGgMAAgLQAAgHADgHIgHgZQgBgNAHgLIgGgVQgBgKAEgIIgDgNQgBgLAGgLIgFgRQgBgLAFgKQgFgKABgJQgBgIADgIQgDgIABgHQgBgHADgIQgDgIABgGQgBgLAFgJIgEgPQgBgKAFgKQgFgKABgJQgBgLAFgKIgEgOQgBgKAEgIIgDgNQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiXIAAhfIsbgBQgIgDgHgEIgNgPQgIgNAAgMQAAgpAzgKIMKAAQgChKAEhBQAHiWAqgBQAqAAAJCfQADBBgCBCIDpAAQC8AFFDgOQBhgEBHAAIgDgaIAAhWQgFgwAFgqQAIhPApAAQAqAAAJBTQADAqgDArIAABbIgEAXQBNAEAVALQAEgcAagLQAggNBVAAQBOAAAWAWQALAMgDAOIAAABINBgEQN9AAAGACIAOAGIAPAOQAIANgBANQAAAWgRARQgNANgTAAQ7iACgoACQgaAAgRgGIABAFQAAAKgEAIQADAIABAJQAAAJgDAHIADAPQAAAJgEAIQADAIABAJQAAALgFAKQAEAIABALQAAAJgEAIQADAIABAKQAAAIgDAHIADAOQAAAJgDAHIADAOQAAALgFAKQAEAIABAMQAAAKgFAKQAEAIABALQAAAJgDAHIADAPQAAALgGALQAEAKACANQgBAGgBAGQAGALAAAQIAAAHQAFAKABANQgBAIgBAGQAFALACAQIAAACQAMAMACAZIAAAEQALAGAFANQAgAHADAoQgBARgJAPQgOATgbABQgdAAgNgZg");
	var mask_graphics_271 = new cjs.Graphics().p("ACZIGIgEgIQgRgFgJgRIgBgCQgTgFgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgDQgFgFgDgGIgIgZQABgIACgHQgIgNABgMIAAgIQgGgMAAgLQAAgHADgHIgHgZQgBgNAHgLIgGgVQgBgKAEgIIgDgNQgBgLAGgLIgFgRQgBgLAFgKQgFgKABgJQgBgIADgIQgDgIABgHQgBgHADgIQgDgIABgGQgBgLAFgJIgEgPQgBgKAFgKQgFgKABgJQgBgLAFgKIgEgOQgBgKAEgIIgDgNQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiXIAAhfIsbgBQgIgDgHgEIgNgPQgIgNAAgMQAAgpAzgKIMKAAQgChKAEhBQAHiWAqgBQAqAAAJCfQADBBgCBCIDpAAQC8AFFDgOQBhgEBHAAIgDgaIAAhWQgFgwAFgqQAIhPApAAQAqAAAJBTQADAqgDArIAABbIgEAXQBNAEAVALQAEgcAagLQAggNBVAAQBOAAAWAWQALAMgDAOIAAABINBgEQN9AAAGACIAOAGIAPAOQAIANgBANQAAAWgRARQgNANgTAAQ7iACgoACQgaAAgRgGIABAFQAAAKgEAIQADAIABAJQAAAJgDAHIADAPQAAAJgEAIQADAIABAJQAAALgFAKQAEAIABAMQAAAIgEAIQADAIABAKQAAAIgDAHIADAOQAAAJgDAHIADAOQAAALgFAKQAEAIABAMQAAAKgFAKQAEAIABALQAAAJgDAHIADAPQAAALgGALQAEAKACANQgBAGgBAGQAGALAAAQIAAAHQAFAKABANQgBAIgBAGQAFALACAQIAAACQAMAMACAZIAAAEQALAGAFANQAZAGAHAYQAfAIABAnQABARgKAPQgOATgaAAQgeAAgNgYg");
	var mask_graphics_272 = new cjs.Graphics().p("AC3ITIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgJIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAGABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQAgAIACAoQAAAQgKAPQgNAUgaAAQgdAAgOgYg");
	var mask_graphics_273 = new cjs.Graphics().p("ADlImIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgJIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAJQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAuAAADAxQAAARgKAOQgNAUgaAAQgTAAgNgKg");
	var mask_graphics_274 = new cjs.Graphics().p("AESIsQgGABgHABQgTAAgNgKIgDAAQgdgBgOgYIgBgCQgTgEgKgTIgEgIQgRgFgJgRIgBgCQgTgFgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgDQgFgFgDgGIgIgZQABgIACgHQgIgNABgMIAAgIQgGgMAAgLQAAgHADgHIgHgZQgBgNAHgLIgGgVQgBgKAEgIIgDgNQgBgLAGgLIgFgRQgBgLAFgKQgFgKABgJQgBgIADgIQgDgIABgHQgBgHADgIQgDgIABgGQgBgKAFgJIgEgQQgBgKAFgKQgFgKABgJQgBgLAFgKIgEgOQgBgKAEgIIgDgNQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiXIAAhfIsbgBQgIgDgHgEIgNgPQgIgNAAgMQAAgpAzgKIMKAAQgChKAEhBQAHiWAqgBQAqAAAJCfQADBBgCBCIDpAAQC8AFFDgOQBhgEBHAAIgDgaIAAhWQgFgwAFgqQAIhPApAAQAqAAAJBTQADAqgDArIAABbIgEAXQBNAEAVALQAEgcAagLQAggNBVAAQBOAAAWAWQALAMgDAOIAAABINBgEQN9AAAGACIAOAGIAPAOQAIANgBANQAAAWgRARQgNANgTAAQ7iACgoACQgaAAgRgGIABAFQAAAKgEAIQADAIABAJQAAAJgDAHIADAPQAAAJgEAIQADAIABAJQAAALgFAKQAEAIABAMQAAAJgEAIQADAIABAJQAAAIgDAHIADAOQAAAJgDAHIADAOQAAALgFAKQAEAIABAMQAAAKgFAKQAEAIABALQAAAJgDAHIADAPQAAALgGALQAEAKACANQgBAGgBAGQAGALAAAQIAAAHQAFAKABANQgBAIgBAGQAFALACAQIAAACQAMAMACAZIAAAEQALAGAFANQAZAGAHAYQAUAGAIATQALACAHAHIACAAQAQgBALAHIAMgCQAwAAADAyQgBAQgJAOQgOAVgbAAQgPAAgLgHg");
	var mask_graphics_275 = new cjs.Graphics().p("AFBIqQgJAEgMAAQgPAAgLgHQgGABgHABQgTAAgNgKIgDAAQgdgBgOgYIgBgCQgTgEgKgTIgEgIQgRgFgJgRIgBgCQgTgFgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgDQgFgFgDgGIgIgZQABgIACgHQgIgNABgMIAAgIQgGgMAAgLQAAgHADgHIgHgZQgBgNAHgLIgGgVQgBgKAEgIIgDgNQgBgLAGgLIgFgRQgBgLAFgKQgFgKABgJQgBgIADgIQgDgIABgHQgBgHADgIQgDgIABgGQgBgKAFgJIgEgQQgBgKAFgKQgFgKABgJQgBgLAFgKIgEgOQgBgKAEgIIgDgNQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiXIAAhfIsbgBQgIgDgHgEIgNgPQgIgNAAgMQAAgpAzgKIMKAAQgChKAEhBQAHiWAqgBQAqAAAJCfQADBBgCBCIDpAAQC8AFFDgOQBhgEBHAAIgDgaIAAhWQgFgwAFgqQAIhPApAAQAqAAAJBTQADAqgDArIAABbIgEAXQBNAEAVALQAEgcAagLQAggNBVAAQBOAAAWAWQALAMgDAOIAAABINBgEQN9AAAGACIAOAGIAPAOQAIANgBANQAAAWgRARQgNANgTAAQ7iACgoACQgaAAgRgGIABAFQAAAKgEAIQADAIABAJQAAAJgDAHIADAPQAAAJgEAIQADAIABAJQAAALgFAKQAEAIABAMQAAAJgEAIQADAIABAJQAAAIgDAHIADAOQAAAJgDAHIADAOQAAALgFAKQAEAIABAMQAAAKgFAKQAEAIABALQAAAJgDAHIADAPQAAALgGALQAEAKACANQgBAGgBAGQAGALAAAQIAAAHQAFAKABANQgBAIgBAGQAFALACAQIAAACQAMAMACAZIAAAEQALAGAFANQAZAGAHAYQAUAGAIATQALACAHAHIACAAQAQgBALAHIAMgCQAZAAAMAOQAJgDAJAAQAvgBAEAxQAAARgKAOQgOAVgbAAQgVgBgNgNg");
	var mask_graphics_276 = new cjs.Graphics().p("AF4IxQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgJAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAHgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQAvAAACAxQAAARgKAOQgNAUgaAAQgSAAgMgJg");
	var mask_graphics_277 = new cjs.Graphics().p("AG0IxQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgJAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAHgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAvAAACAxQABARgKAOQgOAUgaAAQgSAAgMgJg");
	var mask_graphics_278 = new cjs.Graphics().p("AHyIvQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgJAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAHgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAuAAADAxQAAARgKAOQgNAUgaAAQgVAAgMgLg");
	var mask_graphics_279 = new cjs.Graphics().p("AIzIuQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgJAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAHgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQAtAAAFAxQAAARgLAOQgNAUgaAAQgUAAgNgMg");
	var mask_graphics_280 = new cjs.Graphics().p("AJqI1QgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgJAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAHgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAQAtAAAFAxQAAARgLAOQgNAUgaAAQgNAAgKgFg");
	var mask_graphics_281 = new cjs.Graphics().p("AJqI1QgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgJAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAHgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQA5AAAAAxQABAzg5AAQgKAFgNAAIgHAAIgEAFQgNAUgaAAQgNAAgKgFg");
	var mask_graphics_282 = new cjs.Graphics().p("AJqI1QgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgJAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAHgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQAvAAACAxQABAQgKAPQgOAUgaAAQgaAAgOgTQgLAEgQAAQgKAFgNAAIgHAAIgEAFQgNAUgaAAQgNAAgKgFg");
	var mask_graphics_283 = new cjs.Graphics().p("AJqI1QgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgJAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAHgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQBVAAABA2QAAAzhEAAQghAAgRgNQgLAIgQAAQgaAAgOgTQgLAEgQAAQgKAFgNAAIgHAAIgEAFQgNAUgaAAQgNAAgKgFg");
	var mask_graphics_284 = new cjs.Graphics().p("AJqI1QgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgJAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAHgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQA5AAASAXQAIAJgBARQAAAzhSAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgaAAgOgTQgLAEgQAAQgKAFgNAAIgHAAIgEAFQgNAUgaAAQgNAAgKgFg");
	var mask_graphics_285 = new cjs.Graphics().p("AJqI1QgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgJAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAHgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQBLAAAWAXQAHAIAAASQABAWgKAJQgWAUhJAAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgaAAgOgTQgLAEgQAAQgKAFgNAAIgHAAIgEAFQgNAUgaAAQgNAAgKgFg");
	var mask_graphics_286 = new cjs.Graphics().p("ASLIqQgZALg1AAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgaAAgOgTQgLAEgQAAQgKAFgNAAIgHAAIgEAFQgNAUgaAAQgNAAgKgFQgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgJAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAHgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQAyAAAaAKQAMgKAWAAQBlAAAeAUQAOAKAAAYQgBAVgJAKQgWAUhCAAQg2AAgZgQg");
	var mask_graphics_287 = new cjs.Graphics().p("AKdIqQgMAJgQgBQgNAAgKgEQgKAEgMAAQgUAAgNgLQgMALgUAAQgVABgMgMQgNAMgTgBQgSABgMgKQgMAKgSgBQgSAAgMgIQgJAEgMAAQgVgBgNgNQgJAEgMAAQgPAAgLgHQgGABgHABQgTAAgNgKIgDAAQgdgBgOgYIgBgCQgTgEgKgTIgEgIQgRgFgJgRIgBgCQgTgFgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgDQgFgFgDgGIgIgZQABgIACgHQgIgNABgMIAAgIQgGgMAAgLQAAgHADgHIgHgZQgBgNAHgLIgGgVQgBgKAEgIIgDgNQgBgLAGgLIgFgRQgBgLAFgKQgFgKABgJQgBgIADgIQgDgIABgHQgBgHADgIQgDgHABgGQgBgLAFgJIgEgQQgBgKAFgKQgFgKABgJQgBgLAFgKIgEgOQgBgKAEgIIgDgNQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiXIAAhfIsbgBQgIgDgHgEIgNgPQgIgNAAgMQAAgpAzgKIMKAAQgChKAEhBQAHiWAqgBQAqAAAJCfQADBBgCBCIDpAAQC8AFFDgOQBhgEBHAAIgDgaIAAhWQgFgwAFgqQAIhPApAAQAqAAAJBTQADAqgDArIAABbIgEAXQBNAEAVALQAEgcAagLQAggNBVAAQBOAAAWAWQALAMgDAOIAAABINBgEQN9AAAGACIAOAGIAPAOQAIANgBANQAAAWgRARQgNANgTAAQ7iACgoACQgaAAgRgGIABAFQAAAKgEAIQADAIABAJQAAAJgDAHIADAPQAAAJgEAIQADAIABAJQAAALgFAKQAEAIABAMQAAAJgEAIQADAIABAKQAAAHgDAHIADAOQAAAJgDAHIADAOQAAALgFAKQAEAIABAMQAAAKgFAKQAEAIABALQAAAJgDAHIADAPQAAALgGALQAEAKACANQgBAGgBAGQAGALAAAQIAAAHQAFAKABANQgBAIgBAGQAFALACAQIAAACQAMAMACAZIAAAEQALAGAFANQAZAGAHAYQAUAGAIATQALACAHAHIACAAQAQgBALAHIAMgCQAZAAAMAOQAJgDAJAAQATAAAMAIQAJgEALAAQATABAMAIQAMgIARgBQAVABAMAKQANgKATgBQAVAAAMALQANgLATAAQANABAKAEQAJgEANgBIAGABIADgFQAMgQASgEQANgFAUAAQAjAAAOASQAIgEALAAQASAAALAIQAMgIASAAQArAAAVAOQAUgIAiAAQAogBAVAMQAZgHApABQAyAAAaAKQAMgKAWAAQBRgBAkAOQAWgIAmgBQBBAAAUAYQAIAIAAASQAAAUgLALQgUATg+AAQgnAAgXgIQgYAIgsAAQg2AAgZgPQgZALg1AAQgzgBgbgLQgTAGgeAAQgjABgUgKQgQAKgdgBQghAAgRgMQgLAIgQAAQgNAAgKgFQgDAHgFAIQgNATgaABQgdAAgNgYg");
	var mask_graphics_288 = new cjs.Graphics().p("AK/JKQgHgOgBgMQAAgIADgIQgTgEgKgSQgMAIgQAAQgNAAgKgFQgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgHABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCVgqAAQgqAAgHiXIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAGIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQAyAAAaAKQAMgKAWAAQBRAAAkANQAWgIAmAAQBBAAAUAXQAIAJAAARQAAAVgLAKQgUAUg+AAQgnAAgXgJQgYAJgsAAQg2AAgZgQQgZALg1AAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgIAAgGgBQAaAJACAkQABARgLAOQgNAUgaAAQgdAAgOgYgAL2H/IADABIgDgCIAAABg");
	var mask_graphics_289 = new cjs.Graphics().p("ALOJbIgHgYQgFgEgDgHQgHgOgBgLQAAgJADgIQgTgEgKgSQgMAJgQgBQgNAAgKgEQgKAEgMAAQgUAAgNgLQgMALgUAAQgVABgMgMQgNAMgTgBQgSABgMgKQgMAKgSgBQgSAAgMgIQgJAEgMAAQgVgBgNgNQgJAEgMAAQgPAAgLgHQgGABgHABQgTAAgNgKIgDAAQgdgBgOgYIgBgCQgTgEgKgTIgEgIQgRgFgJgRIgBgCQgTgFgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgDQgFgFgDgGIgIgZQABgIACgHQgIgNABgMIAAgIQgGgMAAgLQAAgHADgHIgHgZQgBgNAHgLIgGgVQgBgKAEgIIgDgNQgBgLAGgLIgFgRQgBgLAFgKQgFgKABgJQgBgHADgIQgDgIABgHQgBgHADgIQgDgIABgGQgBgLAFgJIgEgQQgBgKAFgKQgFgKABgJQgBgLAFgKIgEgOQgBgKAEgIIgDgNQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiXIAAhfIsbgBQgIgDgHgEIgNgPQgIgNAAgMQAAgpAzgKIMKAAQgChKAEhBQAHiWAqgBQAqAAAJCfQADBBgCBCIDpAAQC8AFFDgOQBhgEBHAAIgDgaIAAhWQgFgwAFgqQAIhPApAAQAqAAAJBTQADAqgDArIAABbIgEAXQBNAEAVALQAEgcAagLQAggNBVAAQBOAAAWAWQALAMgDAOIAAABINBgEQN9AAAGACIAOAGIAPAOQAIANgBANQAAAWgRARQgNANgTAAQ7iACgoACQgaAAgRgGIABAFQAAAKgEAIQADAIABAJQAAAJgDAHIADAPQAAAJgEAIQADAIABAJQAAALgFAKQAEAIABAMQAAAJgEAIQADAIABAKQAAAIgDAHIADAOQAAAJgDAHIADANQAAALgFAKQAEAIABAMQAAAKgFAKQAEAIABALQAAAJgDAHIADAPQAAALgGALQAEAKACANQgBAGgBAGQAGALAAAQIAAAHQAFAKABANQgBAIgBAGQAFALACAQIAAACQAMAMACAZIAAAEQALAGAFANQAZAGAHAYQAUAGAIATQALACAHAHIACAAQAQgBALAHIAMgCQAZAAAMAOQAJgDAJAAQATAAAMAIQAJgEALAAQATABAMAIQAMgIARgBQAVABAMAKQANgKATgBQAVAAAMALQANgLATAAQANABAKAEQAJgEANgBIAGABIADgFQAMgQASgEQANgFAUAAQAjAAAOASQAIgEALAAQASAAALAIQAMgIASAAQArAAAVAOQAUgIAiAAQAogBAVAMQAZgHApABQAyAAAaAKQAMgKAWAAQBRgBAkAOQAWgIAmgBQBBAAAUAYQAIAIAAASQAAAUgLALQgUATg+AAQgnAAgXgIQgYAIgsAAQg2AAgZgPQgZALg1AAQgzgBgbgLQgTAGgeAAQgjABgUgKQgQAKgdgBQghAAgRgMQgLAIgQAAQgIAAgGgCQAZAJADAiQANAMADAZQgBARgJAPQgOATgbABQgdAAgNgZgAL2HtIADABIgDgBIAAAAg");
	var mask_graphics_290 = new cjs.Graphics().p("ALnJ3QgIgOABgMIABgKQgMgHgHgMIgHgYQgFgFgDgGQgHgOgBgMQAAgIADgIQgTgEgKgSQgMAIgQAAQgNAAgKgFQgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgLAGgLIgFgSQgBgKAFgJQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAIABALQAAAKgFAKQAEAJABALQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQAyAAAaAKQAMgKAWAAQBRAAAkANQAWgIAmAAQBBAAAUAXQAIAJAAARQAAAVgLAKQgUAUg+AAQgnAAgXgJQgYAJgsAAQg2AAgZgQQgZALg1AAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgIAAgGgBQAZAJADAiQANAMADAZIgBAKQAXALADAiQgBARgJAOQgOAUgbAAQgdAAgNgYgAL2HSIADABIgDgCIAAABg");
	var mask_graphics_291 = new cjs.Graphics().p("AMFKNQgHgMAAgMQgPgGgIgPQgIgNABgMIABgLQgMgGgHgNIgHgYQgFgEgDgHQgHgOgBgLQAAgJADgIQgTgEgKgSQgMAJgQgBQgNAAgKgEQgKAEgMAAQgUAAgNgLQgMALgUAAQgVABgMgMQgNAMgTgBQgSABgMgKQgMAKgSgBQgSAAgMgIQgJAEgMAAQgVgBgNgNQgJAEgMAAQgPAAgLgHQgGABgHABQgTAAgNgKIgDAAQgdgBgOgYIgBgCQgTgEgKgTIgEgIQgRgFgJgRIgBgCQgTgFgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgDQgFgFgDgGIgIgZQABgIACgHQgIgNABgMIAAgIQgGgMAAgLQAAgHADgHIgHgZQgBgNAHgLIgGgVQgBgKAEgIIgDgNQgBgLAGgLIgFgRQgBgKAFgKQgFgKABgJQgBgIADgIQgDgIABgHQgBgHADgIQgDgIABgGQgBgLAFgJIgEgQQgBgKAFgKQgFgKABgJQgBgLAFgKIgEgOQgBgKAEgIIgDgNQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCXgqAAQgqAAgHiYIAAhfIsbgBQgIgDgHgEIgNgPQgIgNAAgMQAAgpAzgKIMKAAQgChKAEhBQAHiWAqgBQAqAAAJCfQADBBgCBCIDpAAQC8AFFDgOQBhgEBHAAIgDgaIAAhWQgFgwAFgqQAIhPApAAQAqAAAJBTQADAqgDArIAABbIgEAXQBNAEAVALQAEgcAagLQAggNBVAAQBOAAAWAWQALAMgDAOIAAABINBgEQN9AAAGACIAOAGIAPAOQAIANgBANQAAAWgRARQgNANgTAAQ7iACgoACQgaAAgRgGIABAFQAAAKgEAIQADAIABAJQAAAJgDAHIADAPQAAAJgEAIQADAIABAJQAAALgFAKQAEAIABAMQAAAJgEAIQADAIABAKQAAAIgDAHIADAOQAAAJgDAHIADAOQAAALgFAKQAEAIABAMQAAAJgFAKQAEAIABALQAAAJgDAHIADAPQAAALgGALQAEAKACANQgBAGgBAGQAGALAAAQIAAAHQAFAKABANQgBAIgBAGQAFALACAQIAAACQAMAMACAZIAAAEQALAGAFANQAZAGAHAYQAUAGAIATQALACAHAHIACAAQAQgBALAHIAMgCQAZAAAMAOQAJgDAJAAQATAAAMAIQAJgEALAAQATABAMAIQAMgIARgBQAVABAMAKQANgKATgBQAVAAAMALQANgLATAAQANABAKAEQAJgEANgBIAGABIADgFQAMgQASgEQANgFAUAAQAjAAAOASQAIgEALAAQASAAALAIQAMgIASAAQArAAAVAOQAUgIAiAAQAogBAVAMQAZgHApABQAyAAAaAKQAMgKAWAAQBRgBAkAOQAWgIAmgBQBBAAAUAYQAIAIAAASQAAAUgLALQgUATg+AAQgnAAgXgIQgYAIgsAAQg2AAgZgPQgZALg1AAQgzgBgbgLQgTAGgeAAQgjABgUgKQgQAKgdgBQghAAgRgMQgLAIgQAAQgIAAgGgCQAZAJADAiQANAMADAZIgBALQAXAKADAhQAbAJADAlQAAARgKAPQgOATgbAAQgdAAgNgYgAL2G7IADABIgDgBIAAAAg");
	var mask_graphics_292 = new cjs.Graphics().p("AMoKkQgHgMAAgLQgTgFgJgRQgHgNAAgMQgPgFgIgPQgIgOABgMIABgKQgMgHgHgMIgHgYQgFgFgDgGQgHgOgBgMQAAgIADgIQgTgEgKgSQgMAIgQAAQgNAAgKgFQgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgKAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABAKQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQAyAAAaAKQAMgKAWAAQBRAAAkANQAWgIAmAAQBBAAAUAXQAIAJAAARQAAAVgLAKQgUAUg+AAQgnAAgXgJQgYAJgsAAQg2AAgZgQQgZALg1AAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgIAAgGgBQAZAJADAiQANAMADAZIgBAKQAXAKADAiQAaAIADAkQAgAHAEAoQgBARgJAOQgOAUgbAAQgdAAgNgYgAL2GlIADABIgDgCIAAABg");
	var mask_graphics_293 = new cjs.Graphics().p("AN0KqQgNANgVAAQgdAAgNgYQgHgMAAgLQgTgFgJgRQgHgNAAgMQgPgFgIgPQgIgOABgMIABgKQgMgHgHgMIgHgYQgFgFgDgGQgHgOgBgMQAAgIADgIQgTgEgKgSQgMAIgQAAQgNAAgKgFQgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgKAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABAKQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQAyAAAaAKQAMgKAWAAQBRAAAkANQAWgIAmAAQBBAAAUAXQAIAJAAARQAAAVgLAKQgUAUg+AAQgnAAgXgJQgYAJgsAAQg2AAgZgQQgZALg1AAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgIAAgGgBQAZAJADAiQANAMADAZIgBAKQAXAKADAiQAaAIADAkQATAEAJAQQANgMAUAAQAtAAAEAxQABARgLAOQgNAUgaAAQgcAAgOgXgAL2GgIADABIgDgCIAAABg");
	var mask_graphics_294 = new cjs.Graphics().p("APBKzQgOAOgVAAQgcAAgOgXQgNANgVAAQgdAAgNgYQgHgMAAgLQgTgFgJgRQgHgNAAgMQgPgFgIgPQgIgOABgMIABgKQgMgHgHgMIgHgYQgFgFgDgGQgHgOgBgMQAAgIADgIQgTgEgKgSQgMAIgQAAQgNAAgKgFQgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgKAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABAKQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQAyAAAaAKQAMgKAWAAQBRAAAkANQAWgIAmAAQBBAAAUAXQAIAJAAARQAAAVgLAKQgUAUg+AAQgnAAgXgJQgYAJgsAAQg2AAgZgQQgZALg1AAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgIAAgGgBQAZAJADAiQANAMADAZIgBAKQAXAKADAiQAaAIADAkQATAEAJAQQANgMAUAAQAXAAANANQANgNAUAAQAvAAAEAxQAAARgKAOQgOAUgbAAQgWAAgMgOgAL2GgIADABIgDgCIAAABg");
	var mask_graphics_295 = new cjs.Graphics().p("AQJKwQgNARgZAAQgWAAgMgOQgOAOgVAAQgcAAgOgXQgNANgVAAQgdAAgNgYQgHgMAAgLQgTgFgJgRQgHgNAAgMQgPgFgIgPQgIgOABgMIABgKQgMgHgHgMIgHgYQgFgFgDgGQgHgOgBgMQAAgIADgIQgTgEgKgSQgMAIgQAAQgNAAgKgFQgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgKAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABAKQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQAyAAAaAKQAMgKAWAAQBRAAAkANQAWgIAmAAQBBAAAUAXQAIAJAAARQAAAVgLAKQgUAUg+AAQgnAAgXgJQgYAJgsAAQg2AAgZgQQgZALg1AAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgIAAgGgBQAZAJADAiQANAMADAZIgBAKQAXAKADAiQAaAIADAkQATAEAJAQQANgMAUAAQAXAAANANQANgNAUAAQAbAAAMAPQAOgPAXAAQAuAAADAxQAAARgKAOQgNAUgaAAQgZAAgNgRgAL2GgIADABIgDgCIAAABg");
	var mask_graphics_296 = new cjs.Graphics().p("ARPK1QgMAMgUAAQgZAAgNgRQgNARgZAAQgWAAgMgOQgOAOgVAAQgcAAgOgXQgNANgVAAQgdAAgNgYQgHgMAAgLQgTgFgJgRQgHgNAAgMQgPgFgIgPQgIgOABgMIABgKQgMgHgHgMIgHgYQgFgFgDgGQgHgOgBgMQAAgIADgIQgTgEgKgSQgMAIgQAAQgNAAgKgFQgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgKAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABAKQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQAyAAAaAKQAMgKAWAAQBRAAAkANQAWgIAmAAQBBAAAUAXQAIAJAAARQAAAVgLAKQgUAUg+AAQgnAAgXgJQgYAJgsAAQg2AAgZgQQgZALg1AAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgIAAgGgBQAZAJADAiQANAMADAZIgBAKQAXAKADAiQAaAIADAkQATAEAJAQQANgMAUAAQAXAAANANQANgNAUAAQAbAAAMAPQAOgPAXAAQAVAAAMALQANgLATAAQAtAAADAxQABAzgxAAQgUAAgNgMgAL2GgIADABIgDgCIAAABg");
	var mask_graphics_297 = new cjs.Graphics().p("ASZKvQgMASgdAAQgUAAgNgMQgMAMgUAAQgZAAgNgRQgNARgZAAQgWAAgMgOQgOAOgVAAQgcAAgOgXQgNANgVAAQgdAAgNgYQgHgMAAgLQgTgFgJgRQgHgNAAgMQgPgFgIgPQgIgOABgMIABgKQgMgHgHgMIgHgYQgFgFgDgGQgHgOgBgMQAAgIADgIQgTgEgKgSQgMAIgQAAQgNAAgKgFQgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgKAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABAKQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQAyAAAaAKQAMgKAWAAQBRAAAkANQAWgIAmAAQBBAAAUAXQAIAJAAARQAAAVgLAKQgUAUg+AAQgnAAgXgJQgYAJgsAAQg2AAgZgQQgZALg1AAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgIAAgGgBQAZAJADAiQANAMADAZIgBAKQAXAKADAiQAaAIADAkQATAEAJAQQANgMAUAAQAXAAANANQANgNAUAAQAbAAAMAPQAOgPAXAAQAVAAAMALQANgLATAAQAcAAAMATQAOgTAZAAQAYAAANAOIACgEQAOgUAbAAQAuAAADAxQABARgLAOQgNAUgaAAQgYAAgNgQIgEAGQgNAUgaAAQgZAAgNgSgAL2GgIADABIgDgCIAAABg");
	var mask_graphics_298 = new cjs.Graphics().p("AWNKuQgPATglAAQgfAAgQgRQgLAHgQAAQgYAAgNgQIgEAGQgNAUgaAAQgZAAgNgSQgMASgdAAQgUAAgNgMQgMAMgUAAQgZAAgNgRQgNARgZAAQgWAAgMgOQgOAOgVAAQgcAAgOgXQgNANgVAAQgdAAgNgYQgHgMAAgLQgTgFgJgRQgHgNAAgMQgPgFgIgPQgIgOABgMIABgKQgMgHgHgMIgHgYQgFgFgDgGQgHgOgBgMQAAgIADgIQgTgEgKgSQgMAIgQAAQgNAAgKgFQgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgKAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABAKQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQAyAAAaAKQAMgKAWAAQBRAAAkANQAWgIAmAAQBBAAAUAXQAIAJAAARQAAAVgLAKQgUAUg+AAQgnAAgXgJQgYAJgsAAQg2AAgZgQQgZALg1AAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgIAAgGgBQAZAJADAiQANAMADAZIgBAKQAXAKADAiQAaAIADAkQATAEAJAQQANgMAUAAQAXAAANANQANgNAUAAQAbAAAMAPQAOgPAXAAQAVAAAMALQANgLATAAQAcAAAMATQAOgTAZAAQAYAAANAOIACgEQAOgUAbAAQAaAAANAQQAOgGAVAAQAlAAAPATQANgTAZAAQAvAAAEAxQAAARgLAOQgNAUgbAAQgZAAgNgTgAL2GgIADABIgDgCIAAABg");
	var mask_graphics_299 = new cjs.Graphics().p("AZqKpIgCAEQgNAUgbAAQgQAAgLgHQgOAHgWAAQgbAAgPgOQgNAOgXAAQgZAAgNgTQgPATglAAQgfAAgQgRQgLAHgQAAQgYAAgNgQIgEAGQgNAUgaAAQgZAAgNgSQgMASgdAAQgUAAgNgMQgMAMgUAAQgZAAgNgRQgNARgZAAQgWAAgMgOQgOAOgVAAQgcAAgOgXQgNANgVAAQgdAAgNgYQgHgMAAgLQgTgFgJgRQgHgNAAgMQgPgFgIgPQgIgOABgMIABgKQgMgHgHgMIgHgYQgFgFgDgGQgHgOgBgMQAAgIADgIQgTgEgKgSQgMAIgQAAQgNAAgKgFQgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgKAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABAKQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQAyAAAaAKQAMgKAWAAQBRAAAkANQAWgIAmAAQBBAAAUAXQAIAJAAARQAAAVgLAKQgUAUg+AAQgnAAgXgJQgYAJgsAAQg2AAgZgQQgZALg1AAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgIAAgGgBQAZAJADAiQANAMADAZIgBAKQAXAKADAiQAaAIADAkQATAEAJAQQANgMAUAAQAXAAANANQANgNAUAAQAbAAAMAPQAOgPAXAAQAVAAAMALQANgLATAAQAcAAAMATQAOgTAZAAQAYAAANAOIACgEQAOgUAbAAQAaAAANAQQAOgGAVAAQAlAAAPATQANgTAZAAQAXAAANAMQAOgMAcAAQAWAAAOAHQALgHAQAAQAfAAAMAWIACgCQAOgUAZAAQAvAAAEAxQAAARgLAOQgNAUgbAAQgcAAgOgYgAL2GgIADABIgDgCIAAABg");
	var mask_graphics_300 = new cjs.Graphics().p("AZqKpIgCAEQgNAUgbAAQgQAAgLgHQgOAHgWAAQgbAAgPgOQgNAOgXAAQgZAAgNgTQgPATglAAQgfAAgQgRQgLAHgQAAQgYAAgNgQIgEAGQgNAUgaAAQgZAAgNgSQgMASgdAAQgUAAgNgMQgMAMgUAAQgZAAgNgRQgNARgZAAQgWAAgMgOQgOAOgVAAQgcAAgOgXQgNANgVAAQgdAAgNgYQgHgMAAgLQgTgFgJgRQgHgNAAgMQgPgFgIgPQgIgOABgMIABgKQgMgHgHgMIgHgYQgFgFgDgGQgHgOgBgMQAAgIADgIQgTgEgKgSQgMAIgQAAQgNAAgKgFQgKAFgMAAQgUAAgNgMQgMAMgUAAQgVAAgMgLQgNALgTAAQgSAAgMgJQgMAJgSAAQgSAAgMgJQgJAEgMAAQgVAAgNgOQgJAEgMAAQgPAAgLgHQgGACgHAAQgTAAgNgKIgDAAQgdAAgOgYIgBgDQgTgEgKgSIgEgIQgRgFgJgRIgBgDQgTgEgKgSIgIgaIABgEQgIgGgFgJIgIgaIABgEQgFgEgDgHIgIgZQABgHACgHQgIgOABgMIAAgIQgGgMAAgKQAAgIADgHIgHgZQgBgMAHgMIgGgVQgBgJAEgJIgDgMQgBgKAGgLIgFgSQgBgKAFgKQgFgLABgJQgBgIADgHQgDgIABgHQgBgIADgHQgDgIABgHQgBgKAFgKIgEgPQgBgKAFgKQgFgLABgJQgBgKAFgKIgEgPQgBgJAEgJIgDgMQgBgKAFgKIgEgPQgBgJAEgJQgMAOgaAEIxLgBIAABgQgJCWgqAAQgqAAgHiYIAAheIsbgBQgIgDgHgEIgNgQQgIgMAAgNQAAgpAzgJIMKAAQgChLAEhBQAHiWAqAAQAqAAAJCeQADBCgCBCIDpAAQC8AEFDgNQBhgEBHgBIgDgaIAAhVQgFgxAFgpQAIhQApAAQAqAAAJBTQADAqgDAsIAABbIgEAXQBNADAVAMQAEgcAagLQAggOBVAAQBOAAAWAXQALAMgDAOIAAABINBgFQN9AAAGADIAOAFIAPAPQAIANgBANQAAAWgRAQQgNANgTAAQ7iACgoADQgaAAgRgHIABAGQAAAJgEAJQADAIABAJQAAAIgDAHIADAPQAAAJgEAJQADAIABAJQAAAKgFAKQAEAJABALQAAAJgEAJQADAHABAKQAAAIgDAHIADAPQAAAIgDAHIADAPQAAAKgFAKQAEAJABALQAAAKgFAKQAEAJABAKQAAAIgDAIIADAOQAAAMgGALQAEAJACANQgBAHgBAGQAGALAAAQIAAAGQAFAKABAOQgBAHgBAHQAFAKACAQIAAADQAMAMACAZIAAADQALAHAFAMQAZAGAHAZQAUAFAIATQALADAHAGIACAAQAQAAALAGIAMgBQAZAAAMANQAJgDAJAAQATAAAMAIQAJgDALAAQATAAAMAIQAMgIARAAQAVAAAMAKQANgKATAAQAVAAAMALQANgLATAAQANAAAKAEQAJgEANAAIAGAAIADgFQAMgQASgDQANgGAUAAQAjAAAOASQAIgDALAAQASAAALAHQAMgHASAAQArAAAVANQAUgIAiAAQAoAAAVAMQAZgHApAAQAyAAAaAKQAMgKAWAAQBRAAAkANQAWgIAmAAQBBAAAUAXQAIAJAAARQAAAVgLAKQgUAUg+AAQgnAAgXgJQgYAJgsAAQg2AAgZgQQgZALg1AAQgzAAgbgMQgTAHgeAAQgjAAgUgJQgQAJgdAAQghAAgRgNQgLAIgQAAQgIAAgGgBQAZAJADAiQANAMADAZIgBAKQAXAKADAiQAaAIADAkQATAEAJAQQANgMAUAAQAXAAANANQANgNAUAAQAbAAAMAPQAOgPAXAAQAVAAAMALQANgLATAAQAcAAAMATQAOgTAZAAQAYAAANAOIACgEQAOgUAbAAQAaAAANAQQAOgGAVAAQAlAAAPATQANgTAZAAQAXAAANAMQAOgMAcAAQAWAAAOAHQALgHAQAAQAfAAAMAWIACgCQAOgUAZAAQAPAAAKAFQAMgKASAAQAPAAALAFQASgFAbAAQA6AAAUAXQAGAJAAARQAAAzhUAAQgcAAgSgFQgLAFgOAAQgNAAgKgFQgMAKgUAAQgcAAgOgYgAL2GgIADABIgDgCIAAABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_graphics_153,x:215.4,y:71.9}).wait(2).to({graphics:mask_graphics_155,x:215.4,y:71.9}).wait(1).to({graphics:mask_graphics_156,x:215.4,y:71.9}).wait(1).to({graphics:mask_graphics_157,x:215.4,y:71.9}).wait(1).to({graphics:mask_graphics_158,x:215.4,y:71.9}).wait(1).to({graphics:mask_graphics_159,x:215.4,y:72.1}).wait(1).to({graphics:mask_graphics_160,x:215.4,y:75.1}).wait(1).to({graphics:mask_graphics_161,x:215.4,y:77.2}).wait(1).to({graphics:mask_graphics_162,x:215.4,y:79.1}).wait(1).to({graphics:mask_graphics_163,x:215.4,y:81}).wait(1).to({graphics:mask_graphics_164,x:215.4,y:83.7}).wait(1).to({graphics:mask_graphics_165,x:215.4,y:86.6}).wait(1).to({graphics:mask_graphics_166,x:215.4,y:89.4}).wait(1).to({graphics:mask_graphics_167,x:215.4,y:91.9}).wait(1).to({graphics:mask_graphics_168,x:215.4,y:93.8}).wait(1).to({graphics:mask_graphics_169,x:215.4,y:95.1}).wait(1).to({graphics:mask_graphics_170,x:215.4,y:95.9}).wait(1).to({graphics:mask_graphics_171,x:215.4,y:96.5}).wait(1).to({graphics:mask_graphics_172,x:215.4,y:97.4}).wait(1).to({graphics:mask_graphics_173,x:215.4,y:97.6}).wait(1).to({graphics:mask_graphics_174,x:215.4,y:97.6}).wait(1).to({graphics:mask_graphics_175,x:215.4,y:97.6}).wait(1).to({graphics:mask_graphics_176,x:215.4,y:97.6}).wait(1).to({graphics:mask_graphics_177,x:215.4,y:97.6}).wait(1).to({graphics:mask_graphics_178,x:215.4,y:97.6}).wait(1).to({graphics:mask_graphics_179,x:215.4,y:97.8}).wait(1).to({graphics:mask_graphics_180,x:215.4,y:97.8}).wait(1).to({graphics:mask_graphics_181,x:215.4,y:97.8}).wait(1).to({graphics:mask_graphics_182,x:215.4,y:99.8}).wait(1).to({graphics:mask_graphics_183,x:215.4,y:101.8}).wait(1).to({graphics:mask_graphics_184,x:215.4,y:105.3}).wait(1).to({graphics:mask_graphics_185,x:215.4,y:107.3}).wait(1).to({graphics:mask_graphics_186,x:215.4,y:108.8}).wait(1).to({graphics:mask_graphics_187,x:215.4,y:110.8}).wait(1).to({graphics:mask_graphics_188,x:215.4,y:111.3}).wait(1).to({graphics:mask_graphics_189,x:215.4,y:111.8}).wait(1).to({graphics:mask_graphics_190,x:215.4,y:111.8}).wait(1).to({graphics:mask_graphics_191,x:215.4,y:111.8}).wait(1).to({graphics:mask_graphics_192,x:215.4,y:111.8}).wait(1).to({graphics:mask_graphics_193,x:215.4,y:111.8}).wait(1).to({graphics:mask_graphics_194,x:215.4,y:111.8}).wait(1).to({graphics:mask_graphics_195,x:215.4,y:111.8}).wait(1).to({graphics:mask_graphics_196,x:215.4,y:111.8}).wait(1).to({graphics:mask_graphics_197,x:215.4,y:111.8}).wait(47).to({graphics:mask_graphics_244,x:215.4,y:71.9}).wait(7).to({graphics:mask_graphics_251,x:210.5,y:77.5}).wait(1).to({graphics:mask_graphics_252,x:210.5,y:77.5}).wait(1).to({graphics:mask_graphics_253,x:210.5,y:77.5}).wait(1).to({graphics:mask_graphics_254,x:210.5,y:77.5}).wait(1).to({graphics:mask_graphics_255,x:210.5,y:77.5}).wait(1).to({graphics:mask_graphics_256,x:210.5,y:77.5}).wait(1).to({graphics:mask_graphics_257,x:210.5,y:77.5}).wait(1).to({graphics:mask_graphics_258,x:210.5,y:77.5}).wait(1).to({graphics:mask_graphics_259,x:210.5,y:78}).wait(1).to({graphics:mask_graphics_260,x:210.5,y:79.5}).wait(1).to({graphics:mask_graphics_261,x:210.5,y:81.5}).wait(1).to({graphics:mask_graphics_262,x:210.5,y:83.5}).wait(1).to({graphics:mask_graphics_263,x:210.5,y:85}).wait(1).to({graphics:mask_graphics_264,x:210.5,y:87.3}).wait(1).to({graphics:mask_graphics_265,x:210.5,y:89.3}).wait(1).to({graphics:mask_graphics_266,x:210.5,y:90.8}).wait(1).to({graphics:mask_graphics_267,x:210.5,y:92.8}).wait(1).to({graphics:mask_graphics_268,x:210.5,y:94.8}).wait(1).to({graphics:mask_graphics_269,x:210.5,y:97}).wait(1).to({graphics:mask_graphics_270,x:210.5,y:98.3}).wait(1).to({graphics:mask_graphics_271,x:210.5,y:99.8}).wait(1).to({graphics:mask_graphics_272,x:210.5,y:101}).wait(1).to({graphics:mask_graphics_273,x:210.5,y:101.5}).wait(1).to({graphics:mask_graphics_274,x:210.5,y:101.8}).wait(1).to({graphics:mask_graphics_275,x:210.5,y:102.3}).wait(1).to({graphics:mask_graphics_276,x:210.5,y:102.5}).wait(1).to({graphics:mask_graphics_277,x:210.5,y:102.5}).wait(1).to({graphics:mask_graphics_278,x:210.5,y:102.5}).wait(1).to({graphics:mask_graphics_279,x:210.5,y:102.5}).wait(1).to({graphics:mask_graphics_280,x:210.5,y:102.5}).wait(1).to({graphics:mask_graphics_281,x:210.5,y:102.5}).wait(1).to({graphics:mask_graphics_282,x:210.5,y:102.5}).wait(1).to({graphics:mask_graphics_283,x:210.5,y:102.5}).wait(1).to({graphics:mask_graphics_284,x:210.5,y:102.5}).wait(1).to({graphics:mask_graphics_285,x:210.5,y:102.5}).wait(1).to({graphics:mask_graphics_286,x:210.5,y:102.5}).wait(1).to({graphics:mask_graphics_287,x:210.5,y:103.3}).wait(1).to({graphics:mask_graphics_288,x:210.5,y:106.5}).wait(1).to({graphics:mask_graphics_289,x:210.5,y:108.3}).wait(1).to({graphics:mask_graphics_290,x:210.5,y:111}).wait(1).to({graphics:mask_graphics_291,x:210.5,y:113.3}).wait(1).to({graphics:mask_graphics_292,x:210.5,y:115.5}).wait(1).to({graphics:mask_graphics_293,x:210.5,y:116}).wait(1).to({graphics:mask_graphics_294,x:210.5,y:116}).wait(1).to({graphics:mask_graphics_295,x:210.5,y:116}).wait(1).to({graphics:mask_graphics_296,x:210.5,y:116}).wait(1).to({graphics:mask_graphics_297,x:210.5,y:116}).wait(1).to({graphics:mask_graphics_298,x:210.5,y:116}).wait(1).to({graphics:mask_graphics_299,x:210.5,y:116}).wait(1).to({graphics:mask_graphics_300,x:210.5,y:116}).wait(156));

	// Layer 8
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(2.5,1,1).p("AG0qPIAAEQApRGAQAlAAAkgBQAwAAA1AAQBTAAG7AAAIZKQIvUAAIiWkQAy8lpQABAYABAYQACBVADBbQACBRADBUQACAzADAyQAFBRAsBAQApA8BCAaQBCAaBFAAQCcgBCbgBAsjl3IAAkYAsjl3IAADuA+7l3ISYAAAe8l3MgrfAAA");
	this.shape_125.setTransform(209.3,118);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(2.5,1,1).p("AiKqJIAAEQABhlxQABAaAAAYQADBVACBbQADBRACBVQACAyADAyQAGBRAsBAQAoA8BDAaQBCAaBFAAQCbgBCcgBQAkAAAlAAQAwAAA0gBQBTAAG8AAAc2KKIvUAAIiWkQAx8qJIAAEYIs/AAAx8iEIAAjtITdAAAe8lxI9bAA");
	this.shape_126.setTransform(209.3,117.4);

	var maskedShapeInstanceList = [this.shape_125,this.shape_126];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_125}]},153).to({state:[{t:this.shape_126}]},98).wait(205));

	// Layer 7
	this.instance_16 = new lib.PartDiagramDisplay();
	this.instance_16.parent = this;
	this.instance_16.setTransform(207.3,127.3);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(37).to({_off:false},0).to({_off:true},111).wait(308));

	// SENTENCE
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_127.setTransform(350.3,219.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_128.setTransform(342.6,216.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_129.setTransform(332.8,216.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgZAfQgKgIgBgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAALQAAAHgIAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgCQAIgDADgDQACgEACgBQAEABACACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_130.setTransform(325.1,216.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADgBQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_131.setTransform(317.3,215.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAALQAAAHgIAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgCQAJgDACgDQADgEADgBQACABADACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgGAHgDANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_132.setTransform(305.3,216.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_133.setTransform(296.8,214.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADgBQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_134.setTransform(288.9,215.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgZAyQgLgKABgRQgBgUALgKQALgMAPAAQAIAAAFADIAHAFIACgpQABgHAGAAQAHAAAAAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAIAAAOQABAJAGAHQAHAHAJAAQAFAAAFgCIAIgGIACgCIAAgOIAAgIIAAgJQgDgFgFgDQgEgCgHAAQgLAAgGAGg");
	this.shape_135.setTransform(276.4,214.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgYAfQgMgIAAgRQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbANQAEAHAGACQAHAEAHAAQAEAAAIgCQAIgDACgDQADgEADgBQACABACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_136.setTransform(268.1,216.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgIA1IACgbIABgaIAAgZIAAgbQAAgHAHAAQAGAAAAAHIAAAbIAAAZIgCAlIAAAQQgBAIgFgBQgIAAAAgHg");
	this.shape_137.setTransform(261.8,214.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_138.setTransform(251.1,218.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_139.setTransform(243.5,214.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_140.setTransform(235.9,214.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgFgBgIQgDgTAAgPQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADABQACACAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_141.setTransform(228.4,216.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AghA4QgDgDAAgDIAAgVIABgdIACgeIAAgUQABgEACgBQAKgDANAAQALAAAMAIQAOALAAAOQAAATgPAKQALAFAGAGQAFAFAAAHQAAAJgJAIQgHAGgHADQgQAGgZAAQgEAAgCgDgAgWAdIAAAPQATAAAMgFQAFgCAEgEQAFgEAAgCQAAgDgKgFQgHgDgGgCIgHgBIgDAAIgDAAIgIAAIgBAQgAgTgrIAAANIgBAcIALABQAKgBAHgGQAHgGAAgLQAAgHgHgFQgIgGgHAAIgMAAg");
	this.shape_142.setTransform(220.1,214.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgIAQQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAEgLIAGgNQABgEAEAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAACgLAWQAAAEgDAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_143.setTransform(208.9,220.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CC33FF").s().p("AgUApQgLgEAAgIQAAgCACgDQADgCADAAQACAAADADQACACAGABIAIABQAGAAAEgBQAHgDAAgEQAAgKgNgEIgHgCQgKgCgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgEAAgBgDIgCgIIgRAFQgLAFAAAHIAFABQAQAEAHAEQAMAIABAOQgBAMgJAGQgKAFgMAAQgJAAgJgDg");
	this.shape_144.setTransform(202.5,216);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CC33FF").s().p("AgUApQgLgEAAgIQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAIABQAGAAAEgBQAHgDAAgEQAAgKgNgEIgHgCQgKgCgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgDAAgCgDIgCgIIgRAFQgLAFAAAHIAFABQAQAEAHAEQANAIAAAOQgBAMgJAGQgKAFgMAAQgJAAgJgDg");
	this.shape_145.setTransform(195.2,216);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CC33FF").s().p("AgZAfQgKgIgBgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAALQAAAHgIAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgCQAIgDADgDQACgEACgBQAEABABACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_146.setTransform(187.8,216.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CC33FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_147.setTransform(179.7,216.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CC33FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_148.setTransform(172,216.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CC33FF").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgFgBgIQgDgTAAgPQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADABQACACAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_149.setTransform(164.3,216.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CC33FF").s().p("AgUApQgLgEAAgIQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAIABQAGAAAEgBQAHgDAAgEQAAgKgNgEIgHgCQgKgCgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgDAAgCgDIgCgIIgRAFQgLAFAAAHIAFABQAQAEAHAEQANAIAAAOQgBAMgJAGQgKAFgMAAQgJAAgJgDg");
	this.shape_150.setTransform(156.5,216);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CC33FF").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgGIgBgHQAAgDADgDQACgBADgBQAGABABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAACgCACQgCACgDAAQgGABgBgHg");
	this.shape_151.setTransform(144.8,216.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#CC33FF").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_152.setTransform(136.6,216.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CC33FF").s().p("AgZAyQgLgKABgRQgBgUALgKQALgMAPAAQAIAAAFADIAHAFIACgpQABgHAGAAQAHAAAAAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgGQgFAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAIABAOQAAAJAGAHQAHAHAJAAQAFAAAFgCIAIgGIACgCIAAgOIAAgIIAAgJQgDgFgFgDQgEgCgHAAQgLAAgGAGg");
	this.shape_153.setTransform(123.9,214.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CC33FF").s().p("AgYAfQgMgIAAgRQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbANQAEAHAGACQAHAEAHAAQAEAAAIgCQAIgDACgDQADgEADgBQACABACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_154.setTransform(115.6,216.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CC33FF").s().p("AgUApQgLgEAAgIQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAIABQAGAAAEgBQAHgDAAgEQAAgKgNgEIgHgCQgKgCgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgDAAgCgDIgCgIIgRAFQgLAFAAAHIAFABQAQAEAHAEQANAIAAAOQgBAMgJAGQgKAFgMAAQgJAAgJgDg");
	this.shape_155.setTransform(107.5,216);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#CC33FF").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgFgBgIQgDgTAAgPQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADABQACACAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_156.setTransform(100.1,216.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CC33FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_157.setTransform(92.4,216.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CC33FF").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_158.setTransform(84.4,216.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CC33FF").s().p("AgiA7QgDgCAAgDIABgsIABgqIgBgKIAAgKQAAgCACgCQACgDAEAAIAEABIAQgCIAMgBQAIAAALACQAPAEAAAFQAAAEgCACQgCACgDAAIgDgBQgJgCgPAAIgKAAIgPACIAAAgQAOgEAHAAIAXABQAGABAAAHQAAADgCADQgCABgDgBIgLAAIgLAAQgFAAgQADIgBAzQAAADgCACQgCACgDABQgDgBgCgCg");
	this.shape_159.setTransform(76.5,214.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#9900FF").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_160.setTransform(368.9,247.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#9900FF").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABANIAAAQIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_161.setTransform(362.8,242.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#9900FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_162.setTransform(354.5,244.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#9900FF").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_163.setTransform(346.8,244.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#9900FF").s().p("AgZAfQgKgIgBgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAALQAAAHgIAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgCQAIgDADgDQACgEACgBQAEABABACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_164.setTransform(339,244.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#9900FF").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIAAgWIAAgUIAAgVQAAgEABgEQADgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAGgDAEAAQAPAAAKAMQAKALAAAQQAAARgMAMQgKALgPAAQgLAAgKgEgAgLgCIgKAGIgBAMIAAAMIABAMIAJAEIALABQAKAAAGgHQAHgIAAgLQAAgLgFgHQgGgHgKAAQgGAAgGAEg");
	this.shape_165.setTransform(330.5,242.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#9900FF").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAALQAAAHgJAGIgPAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgCQAJgDACgDQADgEACgBQADABADACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_166.setTransform(317.5,244.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#9900FF").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABANIAAAQIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_167.setTransform(309,242.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#9900FF").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_168.setTransform(301,243);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#9900FF").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgVIAAgGIgBgHQAAgDADgDQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_169.setTransform(289.2,244.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#9900FF").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_170.setTransform(281,244.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#9900FF").s().p("AgZAyQgLgLABgQQgBgUALgKQALgMAPAAQAIAAAFADIAHAFIACgpQABgHAGAAQAHAAAAAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAIAAAOQABAJAGAHQAHAHAJAAQAFAAAFgCIAIgGIACgCIAAgOIAAgIIAAgJQgDgFgFgDQgEgCgHAAQgLAAgGAGg");
	this.shape_171.setTransform(268.3,242.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#9900FF").s().p("AgYAfQgMgIAAgRQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbANQAEAHAGACQAHAEAHAAQAEAAAIgCQAIgDACgDQADgEADgBQACABACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_172.setTransform(260,244.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#9900FF").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgVIAAgGIgBgHQAAgDADgDQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_173.setTransform(252,244.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#9900FF").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_174.setTransform(243.8,244.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#9900FF").s().p("AgZAyQgKgLAAgQQAAgUAKgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAABAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAIAAAOQABAJAGAHQAHAHAJAAQAFAAAFgCIAIgGIACgCIAAgOIAAgIIAAgJQgDgFgFgDQgFgCgGAAQgLAAgGAGg");
	this.shape_175.setTransform(235.6,242.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#9900FF").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgVIAAgGIgBgHQAAgDADgDQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_176.setTransform(227.4,244.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#9900FF").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_177.setTransform(219.5,244.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#9900FF").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIgBgWIABgUIAAgVQAAgEACgEQACgEAEAAQAGAAAAAGIAAADIgBADIAAAQIAAATQAGgEAGgCQAFgDAEAAQARAAAJAMQAJALAAAQQAAARgLAMQgKALgPAAQgLAAgJgEgAgLgCIgKAGIAAAMIAAAMIAAAMIAJAEIALABQAJAAAHgHQAHgIAAgLQAAgLgGgHQgFgHgLAAQgEAAgHAEg");
	this.shape_178.setTransform(211.4,242.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#9900FF").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_179.setTransform(202.9,244.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABANIAAAQIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_180.setTransform(190.4,242.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_181.setTransform(182.1,244.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgFgBgIQgDgTAAgPQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADACQACABAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_182.setTransform(174.4,244.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_183.setTransform(166.3,244.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_184.setTransform(158.7,244.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgZAfQgKgIgBgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAALQAAAHgIAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgCQAIgDADgDQACgEACgBQAEABABACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_185.setTransform(146.4,244.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABANIAAAQIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_186.setTransform(137.9,242.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_187.setTransform(130,243);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgZAyQgLgLAAgQQAAgUALgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAAAAHIgCAtIgBAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgDgGQgFAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAIgBAOQAAAJAHAHQAHAHAJAAQAFAAAEgCIAJgGIABgCIAAgOIAAgIIAAgJQgCgFgFgDQgEgCgHAAQgLAAgHAGg");
	this.shape_188.setTransform(117.5,242.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAHIABAHIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgHIABgUIABgVIAAgGIgBgHQAAgDADgDQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_189.setTransform(109.4,244.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgFgBgIQgDgTAAgPQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADACQACABAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_190.setTransform(101.4,244.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_191.setTransform(93.4,244.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_192.setTransform(58.2,242.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgFgBgIQgDgTAAgPQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADACQACABAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_193.setTransform(50.6,244.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142,p:{x:220.1,y:214.4}},{t:this.shape_141},{t:this.shape_140,p:{x:235.9,y:214.7}},{t:this.shape_139,p:{x:243.5,y:214.7}},{t:this.shape_138,p:{x:251.1,y:218.3}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},153).to({state:[]},91).to({state:[{t:this.shape_142,p:{x:42.3,y:242.3}},{t:this.shape_193},{t:this.shape_192},{t:this.shape_140,p:{x:65.8,y:242.6}},{t:this.shape_138,p:{x:73.4,y:246.2}},{t:this.shape_139,p:{x:85.7,y:242.6}},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160}]},5).wait(207));

	// WHITE
	this.instance_17 = new lib.WhiteSheet();
	this.instance_17.parent = this;
	this.instance_17.setTransform(206.3,96.7,1,0.545,0,0,0,206.3,103.5);
	this.instance_17.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(28).to({regY:103.6,scaleY:1.14,y:119.2},9).wait(107).to({scaleY:1.07,y:134.6},9).wait(91).to({scaleY:1.2,y:134.7},5).wait(207));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,39,412.6,116);


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
(lib.past_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3_repeat:431});

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
		var bgm = createjs.Sound.play('bgmusic2',{loop:-1});
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
		
		 window.open ("past_Scene4.html","_self");
		}
		
		
		function openPrev(){
		
		 window.open ("past_Scene2.html","_self");
		}
	}
	this.frame_3 = function() {
		playSound("pastparticiplediagramme");
	}
	this.frame_149 = function() {
		playSound("focusedonsuccessbuffy");
	}
	this.frame_250 = function() {
		playSound("buffyfoundcouchabandoned");
	}
	this.frame_350 = function() {
		playSound("NoteParticipleundersubjorobjGreg");
	}
	this.frame_439 = function() {
		this.gotoAndPlay("scene3_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(146).call(this.frame_149).wait(101).call(this.frame_250).wait(100).call(this.frame_350).wait(89).call(this.frame_439).wait(1));

	// content
	this.instance = new lib.PresentParticipleDiagrams();
	this.instance.parent = this;
	this.instance.setTransform(276.3,150,1,1,0,0,0,206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(440));

	// main
	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(63.3,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_1 = new lib.Copyright("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,393.5);

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
	this.shape_6.setTransform(416.8,28.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjArIAAhAIAAgJIAAgJQAAgKAJAAQAJAAAAAQQARgSAVAAQAHAAAFAGQADAFAAAMIAAAHQgBALgIAAQgIAAAAgJIgBgHIAAgHQgOACgIAGQgIAGgGAMIAAAyQAAAJgJAAQgIAAAAgJg");
	this.shape_7.setTransform(405,28.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbAnQgMgNgBgVQgBgUAMgQQANgTAWAAQASAAAKARQAHAOAAATQAAAUgLAOQgLARgTAAQgQAAgLgMgAgQgSQgGAKAAANQAAANAIAIQAGAGAIAAQAJAAAHgHQAHgIABgNQABgjgUAAQgNAAgIANg");
	this.shape_8.setTransform(394.9,28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgsBLQgDgCAAgEIABg4IABg2IAAgMIgBgMQAAgEADgDQADgCAEAAQADAAACABIAVgDIAPgBQALAAANADQATAEAAAIQAAADgCADQgDADgEAAIgEAAQgLgFgTAAIgNABIgTADIAAAoQASgFAJAAIAcACQAJABAAAIQAAAFgDACQgCACgEAAIgPgBIgNAAQgGAAgVAEIgBBBQAAAEgDACQgCADgEAAQgEAAgDgDg");
	this.shape_9.setTransform(384.9,26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFA3QgCgDAAgEIgCghQgDgVAAgLQAAgKgCgGQgHADgHAHIgLAMIgEAGIgBAPIgBAQIABAIIAAAHQAAAEgCADQgDACgEAAQgLAAAAgXIABgRIACgQIgBgOIgBgPQAAgVAJAAQAEAAADADQADADAAAEIgBAFIAAAGIAAAKQAFgKAJgIQAKgIAGAAQAPAAAEAOQAFgHAHgDQAIgDAJAAQAPAAAGAQIAEAaIAGA1QABADgDADQgDACgEAAQgIAAgBgIQgCgKgBgSIgDgcQgBgHgDgGQgDgIgDAAQgEAAgJAGQgJAFgDADQAAAJABAJIACAYQACAOAAAKQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(365.6,28.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHADgEAAQgVAAgKgNQgKgLAAgYQAAgWAQgQQAPgPAVgBQAIABAKAEQANAFAAAHQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABIgCAMIAAATQAAAMABAGIAGAQIACAGIABABQAAAEgDACQgCADgEAAQgCAAgEgFgAgPgWQgKAMAAAOQAAAPAFAIQAGAHAKABQAIgBAGgDQAEgBAGgGQgDgYAAgMIAAgIIACgLIgGgCIgEgBQgNAAgLAMg");
	this.shape_11.setTransform(353.3,28.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgjArIAAhAIAAgJIABgJQgBgKAJAAQAIAAABAQQARgSAVAAQAHAAAEAGQAEAFAAAMIAAAHQgBALgIAAQgIAAAAgJIAAgHIAAgHQgQACgHAGQgIAGgGAMIAAAyQAAAJgJAAQgIAAAAgJg");
	this.shape_12.setTransform(344.1,28.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfBIQgMgCAAgIQAAgIAIAAIALACQAIABAJAAQARAAAHgRQAFgMAAgXQgGAJgGAFQgHAFgIAAQgRAAgLgMQgKgLAAgSQAAgZAPgPQAOgQAZAAQAJAAAGACQAFADAEAEQAJAAAAALIgBASIgDARIgDAeQAAATgDAMQgEAPgKAHQgKAJgUAAQgNAAgIgCgAgRguQgIALAAARQAAAOAFAFQAGAHAKAAQAIAAAJgJQAHgKACgKIAEgfIgIgFIgIgBQgRAAgKAMg");
	this.shape_13.setTransform(334.1,31.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHADgEAAQgVAAgKgNQgKgLAAgYQAAgWAQgQQAPgPAVgBQAIABAKAEQANAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgCAMIAAATQAAAMABAGIAGAQIACAGIABABQAAAEgDACQgCADgEAAQgCAAgEgFgAgPgWQgKAMAAAOQAAAPAFAIQAGAHAKABQAIgBAGgDQAEgBAGgGQgDgYAAgMIAAgIIACgLIgGgCIgEgBQgNAAgLAMg");
	this.shape_14.setTransform(324.3,28.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIBDQgDgCABgFIgBgQIAAgRIABgWIAAgUQABgFACgCQADgDADAAQADAAADADQACACAAAFIAAAUIgBAWIAAARIABAQQgBAFgCACQgDADgCAAQgEAAgDgDgAgFgyQgDgEgBgEQABgEADgEQADgDADAAQAFAAADADQADAEABAEQgBAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_15.setTransform(317,26.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_16.setTransform(307.6,26.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC33FF").s().p("AgoBIQgJgIAAgfIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAALQAAAVADADQACADAMAAIARAAIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_17.setTransform(289.1,26.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC33FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_18.setTransform(277.9,26.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC33FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_19.setTransform(267.6,26.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC33FF").s().p("AgoBEQgDgDAAgEQAAgDADgDQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEgBgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAaAAAZIAAAPIABAQIgBARIAdgBQAEAAADACQADAEAAAEQAAADgDAEQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_20.setTransform(257.3,26.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC33FF").s().p("AgmA5QgMgOAAgUQAAgeAaghQAVgcAWAAIAIABIAGABQAEgFAFAAQAGAAACAJQACAHgBALQAAAEgBADQgDAEgFAAQgGAAgDgHQgCgGgCgCQgCgBgIAAQgOAAgPAVQgWAcAAAXQAAAMAIAJQAHAJAMAAQAIAAAKgFIARgLQAEgEAEAAQAEAAACADQADADAAAEQAAAEgEADQgYAWgYAAQgUAAgNgPg");
	this.shape_21.setTransform(246.6,26.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC33FF").s().p("AgoBEQgDgDAAgEQAAgDADgDQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEgBgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAaAAAZIAAAPIABAQIgBARIAdgBQAEAAADACQADAEAAAEQAAADgDAEQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_22.setTransform(235.5,26.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC33FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_23.setTransform(224.6,26.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC33FF").s().p("AgvBGQgCgCAAgFIgBgVIAAgWIABgZIACgZIgBgOIgBgOQAAgFADgEQAEgFAGAAIAWACQANACAIAEQAmAUAAAdQAAAOgOAKQgKAJgPAEQAcAQAPARQACADAAADQAAAEgDADQgCADgEAAQgDAAgDgDQgggfgkgKIABASIAAASQAAAFgCACQgDADgEAAQgEAAgDgDgAgdgpIAAALIgBATIgCARIAEAAIAFABQAXAAALgHQAGgCAEgEQAFgFgBgEQAAgNgOgLQgNgKgOgCIgOgBg");
	this.shape_24.setTransform(211.6,26.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC33FF").s().p("AAgAwQgCgIgEgWIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgDQgDgCAAgEQAAgEAOgeQgBgCAAgEQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA+IAFAQIADAKQAAAEgDACQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_25.setTransform(198.3,26.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC33FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_26.setTransform(186.7,26.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC33FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_27.setTransform(170.3,26.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC33FF").s().p("AgkBAQgSgIAAgOQAAgEACgCQAEgDAEAAQAEAAAEAGQAEAHAEACQAHAFAPAAQAOAAAMgGQAQgIAAgOQAAgMgNgHQgMgFgPgBQgOAAgLgFQgNgIAAgOQAAgQASgOQATgNARAAQAJAAAMADQAPAEAAAGQAAAJgJAAIgMgCIgPgCQgNAAgKAHQgLAHAAAKQAAAIAOADIATACQAVACAMAMQALAJAAAQQAAAWgUANQgSAMgXAAQgQAAgOgHg");
	this.shape_28.setTransform(156.6,26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC33FF").s().p("AAgAwQgCgIgEgWIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgDQgDgCAAgEQAAgEAOgeQgBgCAAgEQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA+IAFAQIADAKQAAAEgDACQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_29.setTransform(142.8,26.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC33FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_30.setTransform(131.1,26.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(3,1,1).p("EAklgX2MhJJAAAMAAAAvtMBJJAAAg");
	this.shape_31.setTransform(275,193.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#FFC4F3","#FFFFCC"],[0,1],-7.7,-187.3,-7.7,125.5).s().p("EgkkAX3MAAAgvtMBJJAAAMAAAAvtgAGrjAIAFACIgEgDg");
	this.shape_32.setTransform(275,193.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.vol_dwn},{t:this.vol_up},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_goNext},{t:this.instance_1},{t:this.btn_menu},{t:this.btn_goBack}]}).wait(440));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,198.2,532.5,404.8);
// library properties:
lib.properties = {
	id: '4F7FA81C16CD2B4D983925ECB51160AE',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmusic2.mp3", id:"bgmusic2"},
		{src:"sounds/ball_passes.mp3", id:"ball_passes"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/buffyfoundcouchabandoned.mp3", id:"buffyfoundcouchabandoned"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/diagnal_line.mp3", id:"diagnal_line"},
		{src:"sounds/focusedonsuccessbuffy.mp3", id:"focusedonsuccessbuffy"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/NoteParticipleundersubjorobjGreg.mp3", id:"NoteParticipleundersubjorobjGreg"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/pastparticiplediagramme.mp3", id:"pastparticiplediagramme"},
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
an.compositions['4F7FA81C16CD2B4D983925ECB51160AE'] = {
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