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


(lib.various = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUApQgLgEAAgIQAAgCACgDQADgCACAAQADAAAEADQABACAHABIAHABQAFAAAGgCQAGgBAAgFQAAgKgNgEIgHgBQgKgDgEgCQgGgDAAgJQAAgPAOgGIANgFIAPgFIAGgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgEAAgBgDIgCgIIgRAGQgLAEAAAHIAFABQAPAEAJAEQAMAIAAAOQAAAMgKAGQgKAFgMAAQgJAAgJgDg");
	this.shape.setTransform(20.9,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_1.setTransform(13.6,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_2.setTransform(5.5,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgNIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAANQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_3.setTransform(-0.2,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcAhIAAgyIABgHIAAgHQAAgIAGAAQAIAAAAAMQANgNARAAQAGAAADAEQADAFAAAJIAAAFQgBAJgGAAQgHAAAAgHIAAgFIgBgHQgLACgGAFQgGAFgFAKIABAmQgBAIgHAAQgHAAAAgIg");
	this.shape_4.setTransform(-5.8,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_5.setTransform(-13.5,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHAiIgLgeIgNggIgBgEQAAgDACgCQACgCADAAQAFAAACAEIASAzIANghIAGgRQADgFAEAAQADAAACACQACADAAADQAAACgMAdIgPAhQAAAHgGAAQgFAAgCgGg");
	this.shape_6.setTransform(-20.9,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-12.4,53.6,24.9);


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


(lib.Tired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbA1QgLgKAAgSQAAgVALgLQALgNARAAQAJAAAFADIAHAFQABggABgMQABgHAHAAQAHAAAAAHIgDAxIgBAVQAAAaADAOIAAACQAAADgCABQgDADgDAAQgEAAgDgHQgGAEgFACQgHACgFAAQgQAAgLgLgAgRACQgHAHAAAPQAAALAHAHQAHAHAKABQAFgBAFgCIAJgGIACgDIAAgOIAAgJIAAgJQgDgGgFgCQgFgEgHABQgMgBgGAIg");
	this.shape.setTransform(15.9,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFgBAHgCQAJgCADgEQADgFADAAQADAAACACQACACAAAEQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJAAgGAIg");
	this.shape_1.setTransform(7,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_2.setTransform(-1.2,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQACgCAEAAQACAAACACQACADABADIgCASIAAASIAAAOIAAAOQAAADgCACQgCADgCAAQgDAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQADgDACAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgCAAgDgCg");
	this.shape_3.setTransform(-7.3,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFA6QgCgDAAgDIAAgDIABgEIgBgLIAAgMIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASABIASAAQADAAACACQADADAAAEQAAADgDACQgCACgDABIgSgBIgSgBIgGAAIADAiIABAiIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_4.setTransform(-14.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-13.1,45.5,26.3);


(lib.TheCAPS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAfQgKgIgBgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgIAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgDQAIgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape.setTransform(9.6,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHAAQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_1.setTransform(1.1,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_2.setTransform(-7.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-12.4,31.2,24.9);


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


(lib.pyramids = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTApQgMgEAAgIQAAgCADgDQABgCADAAQADAAADADQACACAHABIAIABQAFAAAFgCQAGgBAAgFQAAgKgOgEIgHgBQgJgDgEgCQgGgDAAgJQAAgPAPgGIAMgFIAPgFIAGgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgDAAQgFAAgBgDIgCgIIgRAGQgKAEAAAHIADABQAQAEAJAEQALAIAAAOQAAAMgKAGQgIAFgMAAQgKAAgIgDg");
	this.shape.setTransform(27.5,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAyQgLgKAAgRQAAgUALgKQALgMAPAAQAJAAAEADIAHAFIACgpQABgHAGAAQAHAAgBAHIgDAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQgBAJAHAHQAHAHAJAAQAFAAAEgCIAIgGIACgDIAAgMIAAgJIAAgJQgCgFgFgDQgFgCgGAAQgLAAgHAGg");
	this.shape_1.setTransform(19.6,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgNIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAANQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_2.setTransform(13.3,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_3.setTransform(5.3,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_4.setTransform(-4.5,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAhIAAgyIABgHIAAgHQAAgIAGAAQAIAAAAAMQANgNARAAQAGAAADAEQADAFAAAJIAAAFQgBAJgGAAQgHAAAAgHIAAgFIgBgHQgLACgGAFQgGAFgFAKIABAmQgBAIgHAAQgHAAAAgIg");
	this.shape_5.setTransform(-11.7,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_6.setTransform(-19.6,4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcA8QgCgCAAgEIABgdIAAgcIgBgeIgCgOQAAgFACgEQADgFAEAAQADAAACADQABACAAACIAAADIAAAEQAGgFAGgCQAFgBAFAAQAPgBAHANQAGALAAARQAAAQgJAJQgJAMgPAAQgGAAgJgDIAAAjQAAAEgCACQgCABgDAAQgEAAgCgBgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgKQAAgNgDgHQgDgGgHAAQgGAAgFADg");
	this.shape_7.setTransform(-27.2,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.4,-12.4,66.8,24.9);


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


(lib.of = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBDQgCgCAAgEIAAgBQACgKAAgMIgBgWIAAgVIgMABQgIAAAAgIQAAgIAOAAIAHAAIABgMQACgSAHgIQAHgKASAAQALAAAAAIQAAAHgKAAQgTAAgDAbIAAAFIARgBQANAAAAAHQAAAGgGABIgGABIgSABIgBAQIAAAPIABAOQAAAPgCAJQgBAGgFAAQgEAAgCgCg");
	this.shape.setTransform(4,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_1.setTransform(-4.2,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-13.1,20.8,26.3);


(lib.napped = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbA1QgLgKAAgSQAAgVALgLQALgNARAAQAJAAAFADIAHAFQABggABgMQABgHAHAAQAHAAAAAHIgDAxIgBAVQAAAaADAOIAAACQAAADgDABQgCADgDAAQgEAAgDgHQgGAEgFACQgHACgFAAQgQAAgLgLgAgSACQgGAHAAAPQAAALAHAHQAHAHAKABQAFgBAFgCIAJgGIACgDIAAgOIAAgJIAAgJQgDgGgFgCQgFgEgHABQgMgBgHAIg");
	this.shape.setTransform(21.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFgBAHgCQAJgCADgEQADgFADAAQADAAACACQACACAAAEQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJAAgGAIg");
	this.shape_1.setTransform(12.3,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_2.setTransform(3.6,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_3.setTransform(-5,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKABgUQgBgRANgOQANgNASAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJABAGIAFAOIACAEIAAABQAAADgCACQgBACgEAAQgBAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAJgGQgDgUAAgKIABgHIABgJIgFgCIgDAAQgMAAgIAJg");
	this.shape_4.setTransform(-13.4,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQABgRgHAAQgJABgGAJQgIAKgDANIgCAIIAAAIIAAAHIABAHQAAAEgCACQgCACgDAAQgEAAgCgCQgDgCABgEIgBgHIAAgHIABgWIABgWIAAgHIAAgIQAAgDABgCQADgCADgBQAIAAAAALIABAJQANgRAMgBQAMAAAGAMQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCACQgCACgDAAQgHABgBgIg");
	this.shape_5.setTransform(-21.6,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-13.1,56.1,26.3);


(lib.Mick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUA4QgFgHgHgKIgMgSIgNAJIgBAWQAAAEgCACQgCACgDAAQgHAAAAgKIABgSIAAgTIAAgYIABgZIgBgIIAAgIQAAgDACgCQACgCAEAAQACAAACACQACACABADIAAAIIAAAIIAAAYIAAAYQAJgHAJgJIAQgQQACgDADAAQADAAACADQACACABADQAAACgCADQgJAKgOALIAQAWQALAPAAAFQABADgDACQgCACgEAAQgDAAgCgEg");
	this.shape.setTransform(13.1,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_1.setTransform(4.7,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgNIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAANQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_2.setTransform(-1.1,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAtA3IgEgLIgCgNQgDgMgHgnIgPArIgEAOQgDAJgDAFQgCAFgFAAQgEAAgDgEQgCgDgBgFIgBgIQgIgagGgdIgDANIgJAmIgDAUQgDAGgFAAQgEAAgCgDQgBgCAAgDQAAgMAFgSIAIgdIAEgXQAEgQADgFQADgEAEAAQAFAAACAFQADAHAEAUQAEAYAHAbQAKgbAIgfIADgKQABgHACgEQADgFAFAAQAGAAAEAMIACARQAEAgAHAYIAEAMIACANQABADgDACQgDACgDAAQgEAAgCgEg");
	this.shape_3.setTransform(-9.9,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-12.4,37.4,24.9);


(lib.learned = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAyQgLgKAAgRQAAgUALgKQALgMAPAAQAIAAAFADIAHAFIACgpQABgHAGAAQAHAAAAAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgGQgFAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHABAPQAAAJAGAHQAHAHAJAAQAFAAAFgCIAHgGIADgDIAAgMIAAgJIAAgJQgDgFgFgDQgEgCgHAAQgLAAgGAGg");
	this.shape.setTransform(21.6,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAfQgKgIgBgRQABgSAIgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgHAGIgQAHIgbANQAEAHAGACQAHAEAGAAQAFAAAIgDQAIgCACgDQADgFADAAQADAAABADQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_1.setTransform(13.3,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_2.setTransform(5.3,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAHAAQAGAAAAAMQAOgNARAAQAGAAADAEQADAFgBAJIAAAFQAAAJgHAAQgGAAAAgHIAAgFIAAgHQgMACgGAFQgGAFgFAKIAAAmQABAIgIAAQgGAAAAgIg");
	this.shape_3.setTransform(-2.2,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_4.setTransform(-9.9,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAfQgMgIAAgRQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAHAEAHAAQAEAAAIgDQAIgCACgDQADgFADAAQACAAACADQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_5.setTransform(-17.6,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIA1IACgbIABgaIAAgaIAAgaQAAgIAHABQAGgBAAAIIAAAaIAAAaIgCAkIAAARQgBAIgFgBQgIAAAAgHg");
	this.shape_6.setTransform(-23.9,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-12.4,56.2,24.9);


(lib.couchboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAyQgLgKAAgRQAAgUALgKQALgMAPAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAAAAHIgCAtIgBAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQgBAJAHAHQAHAHAJAAQAFAAAEgCIAIgGIACgDIAAgMIAAgJIAAgJQgCgFgFgDQgFgCgGAAQgLAAgHAGg");
	this.shape.setTransform(35.7,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAHAAQAGAAAAAMQAOgNARAAQAGAAADAEQADAFgBAJIAAAFQAAAJgHAAQgGAAAAgHIAAgFIAAgHQgMACgGAFQgGAFgFAKIAAAmQABAIgIAAQgGAAAAgIg");
	this.shape_1.setTransform(28,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_2.setTransform(20.3,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_3.setTransform(12.3,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIgBgWIABgUIAAgVQAAgEACgEQACgEAEAAQAGAAAAAGIAAADIgBADIAAAQIAAATQAGgEAGgCQAFgDAEAAQARAAAJAMQAJALAAAQQABARgLAMQgLALgPAAQgMAAgIgEgAgLgCIgKAGIAAAMIAAAMIAAAMIAKAEIAKABQAJAAAHgHQAHgIAAgLQAAgLgGgHQgFgHgLAAQgFAAgGAEg");
	this.shape_4.setTransform(4.3,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHAAQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_5.setTransform(-4.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_6.setTransform(-12.8,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_7.setTransform(-20.5,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_8.setTransform(-28.6,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_9.setTransform(-36.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-12.4,84.4,24.9);


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


(lib.coached = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAyQgKgKAAgRQAAgUAKgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAAAAHIgCAtIgBAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgDgGQgFAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHgBAPQAAAJAHAHQAHAHAJAAQAFAAAEgCIAIgGIACgDIAAgMIAAgJIAAgJQgCgFgFgDQgEgCgHAAQgLAAgHAGg");
	this.shape.setTransform(23.9,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAfQgMgIABgRQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAGAEAIAAQAEAAAHgDQAJgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_1.setTransform(15.6,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHAAQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_2.setTransform(7.1,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_3.setTransform(-1.1,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_4.setTransform(-8.9,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_5.setTransform(-16.8,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_6.setTransform(-24.4,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-12.4,60.8,24.9);


(lib.by = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape.setTransform(4.2,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIgBgWIABgUIAAgVQAAgEACgEQACgEAEAAQAGAAAAAGIgBADIAAADIAAAQIAAATQAGgEAGgCQAFgDAEAAQARAAAJAMQAJALAAAQQAAARgLAMQgKALgPAAQgLAAgJgEgAgLgCIgKAGIAAAMIAAAMIAAAMIAJAEIALABQAJAAAHgHQAHgIAAgLQAAgLgGgHQgFgHgLAAQgEAAgHAEg");
	this.shape_1.setTransform(-3.7,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-12.4,20.8,24.9);


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


(lib.TiredofWorkingTwiggsNapped = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(148.9,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVA7QgCgHgBgLIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHANQAAAegDAGQgCAEgEABQgEAAgCgCQgCgCAAgEIAAgDIABgMIAAgLIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBASIAAAHQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAACQAAAEgCACQgCACgDAAQgGAAgCgGg");
	this.shape_1.setTransform(142.4,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAiQgMgKAAgRQAAgOALgRQAMgTANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCACgDAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgCQgEgFgLAAQgHAAgHAPQgHANAAAIQAAALAHAFQAGAGAJAAQAFAAAFgDIAJgEIAEgBQADAAACACQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_2.setTransform(133.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAlQgKAFgMABQgKAAgHgFQgHgFgCgJQgDgVAAgQQAAgKADgOQABgHAGAAQADAAADACQACACAAAEIgBALIgBAMIABAWQAAAJACAGIAFACIAFABQAKgBALgDIAAgPIAAgPQAAgRABgMQABgHAHgBQADABADACQACACAAAEIgCAdIAAAQIABARIAAAFIAAAFQAAAEgCACQgCACgEAAQgGAAgBgIg");
	this.shape_3.setTransform(125.3,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_4.setTransform(116.8,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAiQgMgKAAgRQAAgOALgRQAMgTANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgEgCQgEgFgLAAQgHAAgHAPQgHANAAAIQAAALAHAFQAGAGAJAAQAFAAAFgDIAJgEIAEgBQADAAACACQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_5.setTransform(108.7,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFgBAHgCQAJgCADgEQADgFADAAQADAAACACQACACAAAEQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJAAgGAIg");
	this.shape_6.setTransform(95.5,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVA7QgCgHgBgLIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHANQAAAegDAGQgCAEgEABQgEAAgCgCQgCgCAAgEIAAgDIABgMIAAgLIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBASIAAAHQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAACQAAAEgCACQgCACgDAAQgGAAgCgGg");
	this.shape_7.setTransform(86.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgEA3QgDgCABgDIAAgJIAAgJIgBgtIgSgBQgHgBAAgHQAAgDACgCQADgCADAAIAQABIAAgLIAAgKQAAgDACgCQACgCADAAQAGAAABAMIAAAHIAAAEIAAAFIAMgBIAKAAQAFACAAAFQAAAEgDACQgCACgDAAIgEAAIgDAAIgLABIACAuIAAADIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_8.setTransform(78,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQABgRgHAAQgJABgGAJQgIAKgDANIgBAIIgBAIIABAHIAAAHQAAAEgCACQgCACgDAAQgEAAgCgCQgDgCABgEIgBgHIAAgHIABgWIABgWIgBgHIAAgIQAAgDACgCQADgCADgBQAIAAAAALIABAJQANgRAMgBQAMAAAGAMQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCACQgCACgDAAQgHABgBgIg");
	this.shape_9.setTransform(65.4,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_10.setTransform(56.7,2.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbA1QgLgKAAgSQAAgVALgLQALgNARAAQAJAAAFADIAHAFQABggACgMQAAgHAHAAQAHAAAAAHIgDAxIgBAVQAAAaACAOIAAACQAAADgBABQgDADgDAAQgFAAgCgHQgGAEgGACQgFACgGAAQgQAAgLgLgAgRACQgHAHAAAPQAAALAHAHQAHAHAKABQAGgBAEgCIAJgGIACgDIgBgOIAAgJIABgJQgDgGgFgCQgFgEgHABQgMgBgGAIg");
	this.shape_11.setTransform(43.1,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFgBAHgCQAJgCADgEQADgFADAAQADAAACACQACACAAAEQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJAAgGAIg");
	this.shape_12.setTransform(34.2,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_13.setTransform(25.5,4.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_14.setTransform(16.9,4.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQABgRANgOQANgNAQAAQAIAAAIADQALAFgBAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQgBADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgKAAgJAJg");
	this.shape_15.setTransform(8.5,2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIABgIQAAgRgHAAQgIABgIAJQgGAKgEANIgBAIIgBAIIABAHIAAAHQAAAEgCACQgDACgDAAQgDAAgCgCQgCgCgBgEIAAgHIgBgHIACgWIABgWIgBgHIAAgIQAAgDACgCQADgCADgBQAHAAABALIAAAJQANgRANgBQANAAAFAMQADAHAAAOIAAAIIAAAHQAAAGACAKIACARQAAADgDACQgCACgDAAQgHABgBgIg");
	this.shape_16.setTransform(0.3,2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_17.setTransform(-13,2.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaA8QgKgCAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgPQAEgJAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgJQgJgLAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAaQgBAPgDAKQgDANgIAGQgJAHgRAAQgKAAgHgCgAgOgnQgHAKAAAOQAAAMAEAEQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_18.setTransform(-21,4.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaA8QgKgCAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgPQAEgJAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgJQgJgLAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAaQgBAPgDAKQgDANgIAGQgJAHgRAAQgKAAgHgCgAgOgnQgHAKAAAOQAAAMAEAEQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_19.setTransform(-29.5,4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADAAADIAAASIgBASIAAAOIABAOQgBADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_20.setTransform(-35.7,0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgEABQgHAAgFgYQgDgMgCgTIgCgNIgBgLQAAgDACgDQACgCADAAQAHAAAAAHIACALIACALIAEAiQAJgWAJggQACgJAGAAQAGAAACAKIAGAcIAFAeIAGgVIAKgqQABgEAGgBQADAAACACQADADAAADIgBADQgGAagKAfQgCAHgFAIQgDAEgFAAQgJgBgEgUg");
	this.shape_21.setTransform(-43.6,2.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFA6QgCgDAAgDIAAgDIABgEIgBgLIAAgMIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASABIASAAQADAAACACQADADAAAEQAAADgDACQgCACgDABIgSgBIgSgBIgGAAIADAiIABAiIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_22.setTransform(-53.9,0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgJARQgCgCAAgDQAAgDAFgKIAGgNQACgEADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");
	this.shape_23.setTransform(-66.6,7.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC33FF").s().p("AAVA8IgMgTIgNgTIgOALIgBAXQAAAEgCACQgCACgEAAQgIAAAAgLIABgTIABgTIABgbIAAgbIAAgIIgBgIQAAgEACgCQADgCADAAQADAAACACQADACAAAEIAAAIIAAAJIAAAZIAAAaQAKgIAJgJIARgRQADgDADAAQADAAACACQADADAAADQAAADgCACIgYAXIARAYQAMAQAAAFQAAADgDACQgCACgDAAQgFAAgCgEg");
	this.shape_24.setTransform(-73.1,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC33FF").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_25.setTransform(-81.5,2.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC33FF").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_26.setTransform(-89.9,2.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC33FF").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgFABQgFAAgGgYQgDgMgDgTIgCgNIgBgLQABgDACgDQACgCAEAAQAFAAACAHIACALIAAALIAFAiQAJgWAJggQADgJAFAAQAGAAACAKIAFAcIAGAeIAFgVIALgqQABgEAFgBQAEAAACACQACADAAADIAAADQgGAagKAfQgCAHgGAIQgCAEgEAAQgKgBgEgUg");
	this.shape_27.setTransform(-99.4,2.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC33FF").s().p("AgMBDQgCgCAAgEIAAgBQACgKAAgMIgBgWIAAgVIgMABQgIAAAAgIQAAgIAOAAIAHAAIABgMQACgSAHgIQAHgKASAAQALAAAAAIQAAAHgKAAQgTAAgDAbIAAAFIARgBQANAAAAAHQAAAGgGABIgGABIgSABIgBAQIAAAPIABAOQAAAPgCAJQgBAGgFAAQgEAAgCgCg");
	this.shape_28.setTransform(-114,0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC33FF").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_29.setTransform(-122.2,2.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC33FF").s().p("AgbA1QgLgKAAgSQAAgVALgLQALgNARAAQAJAAAFADIAHAFQABggACgMQABgHAGAAQAHAAAAAHIgDAxIgBAVQAAAaACAOIAAACQAAADgCABQgCADgDAAQgEAAgDgHQgFAEgHACQgFACgGAAQgRAAgKgLgAgSACQgGAHAAAPQAAALAHAHQAHAHAKABQAFgBAFgCIAIgGIADgDIgBgOIAAgJIABgJQgDgGgFgCQgFgEgHABQgMgBgHAIg");
	this.shape_30.setTransform(-135.8,0.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC33FF").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFgBAHgCQAJgCADgEQADgFADAAQADAAACACQACACAAAEQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJAAgGAIg");
	this.shape_31.setTransform(-144.7,2.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC33FF").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_32.setTransform(-152.9,2.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC33FF").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADAAADIAAASIgBASIAAAOIABAOQgBADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_33.setTransform(-159,0.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC33FF").s().p("AgFA6QgCgDAAgDIAAgDIABgEIgBgLIAAgMIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASABIASAAQADAAACACQADADAAAEQAAADgDACQgCACgDABIgSgBIgSgBIgGAAIADAiIABAiIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_34.setTransform(-166.2,0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9900FF").s().p("AAVA8IgMgTIgNgTIgOALIgBAXQAAAEgCACQgCACgEAAQgIAAAAgLIABgTIABgTIABgbIAAgbIAAgIIgBgIQAAgEACgCQADgCADAAQADAAACACQADACAAAEIAAAIIAAAJIAAAZIAAAaQAKgIAJgJIARgRQADgDADAAQADAAACACQADADAAADQAAADgCACIgYAXIARAYQAMAQAAAFQAAADgDACQgCACgDAAQgFAAgCgEg");
	this.shape_35.setTransform(-73.1,0.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9900FF").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_36.setTransform(-81.5,2.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9900FF").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_37.setTransform(-89.9,2.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9900FF").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgFABQgFAAgGgYQgDgMgDgTIgCgNIgBgLQABgDACgDQACgCAEAAQAFAAACAHIACALIAAALIAFAiQAJgWAJggQADgJAFAAQAGAAACAKIAFAcIAGAeIAFgVIALgqQABgEAFgBQAEAAACACQACADAAADIAAADQgGAagKAfQgCAHgGAIQgCAEgEAAQgKgBgEgUg");
	this.shape_38.setTransform(-99.4,2.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9900FF").s().p("AgMBDQgCgCAAgEIAAgBQACgKAAgMIgBgWIAAgVIgMABQgIAAAAgIQAAgIAOAAIAHAAIABgMQACgSAHgIQAHgKASAAQALAAAAAIQAAAHgKAAQgTAAgDAbIAAAFIARgBQANAAAAAHQAAAGgGABIgGABIgSABIgBAQIAAAPIABAOQAAAPgCAJQgBAGgFAAQgEAAgCgCg");
	this.shape_39.setTransform(-114,0.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9900FF").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_40.setTransform(-122.2,2.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9900FF").s().p("AgbA1QgLgKAAgSQAAgVALgLQALgNARAAQAJAAAFADIAHAFQABggACgMQABgHAGAAQAHAAAAAHIgDAxIgBAVQAAAaACAOIAAACQAAADgCABQgCADgDAAQgEAAgDgHQgFAEgHACQgFACgGAAQgRAAgKgLgAgSACQgGAHAAAPQAAALAHAHQAHAHAKABQAFgBAFgCIAIgGIADgDIgBgOIAAgJIABgJQgDgGgFgCQgFgEgHABQgMgBgHAIg");
	this.shape_41.setTransform(-135.8,0.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9900FF").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFgBAHgCQAJgCADgEQADgFADAAQADAAACACQACACAAAEQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJAAgGAIg");
	this.shape_42.setTransform(-144.7,2.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9900FF").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_43.setTransform(-152.9,2.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9900FF").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADAAADIAAASIgBASIAAAOIABAOQgBADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_44.setTransform(-159,0.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9900FF").s().p("AgFA6QgCgDAAgDIAAgDIABgEIgBgLIAAgMIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASABIASAAQADAAACACQADADAAAEQAAADgDACQgCACgDABIgSgBIgSgBIgGAAIADAiIABAiIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_45.setTransform(-166.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.4,-13.1,327.5,26.3);


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


(lib.TwiggsPulling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak3CwIAPgKIgIAQIgHgGgAlLCdIAJgsIAAgEIABgDIgKgHQgWgNgXgJIgEgLIAAgOIgHgEIAAgBIATgBIAAgBIgRggQABglAMggQAEgKAIgJQAOgRAdgSIgGAAIATgRIACAAQApgCApgFQBFgHBEgNIAAAAIAYAAIAOgNIAIgCQAQgDAdgDIAqgDIAtgDIAHANIgWAAIgfADIgaACIgWABIgEABIgQADQgYAIgIAAQgFAAgDgCIg4AMIgqALIAwAzQAAARACAXIABACIACANQAFAbgDAbIgBABIgIAgQgFANgHAMIgJANIgEAEIARgLQAZgQAagIQgdAbglASIgJAFQg4Aag/ABQAPgEAjgEQANgCANgJQAZgPAbgmIACgCQApg6gnhgIgRgUIgCAAQhvgzheBOIAFADIgMARQgIANgEANQgFARABAQIAFgEQAGAXAMAUQAcAyAyAYIABAAIgBAAQgJACgJgFIgUgDIAAABQAAAEgBAKIgBANIACAhQgJgIgIgJgAEpBWQADgZANgRQgLACgPgBIg3gIQgigEgWAFQiFAkgzAKIABALIADAeQgOgagJgMIgIABIgIgEIgMAHQgRAOgOAIQAOgaAWgVIgFABIAHgDQAQgOASgLIABAEIAAAHIABABIAAAEIADARQB8gpBlgLQAogEAjAAQAZAAAKgCQAGgCACgCQAHgHAAgqIgBgNIAOgBIAAANIAAAMIAFgLIAFgQQAMgDAMgFQgEAbgRAUIgNAQIAAACQgEAZgSALIAAAEQAAAKgLAbQgFANgDALIAAAJIgJANIgJAGQAAgjACgKgAgoBSIAHgCIgBAAIgGACgAhUBZIAGgFIAIgFQgIALgKAIgAkTAIIAAAAQAAgbASgVIAPgDQAPAnglALIgKABIgBAAg");
	this.shape.setTransform(273.2,138.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AjrCzQgdgKgWgQIAJgQIgQAKIgDgDIgBggIAAgNQACgKgBgEIAAgBIAUADQAJAFAKgCIAAAAIAAAAQgzgYgcgyQgMgTgFgXIgFAEQgBgRAFgRQAEgNAIgNIAMgRIgGgDQBehOBwAzIABAAIASAUQAmBhgoA5IgCACQgcAmgYAPQgOAJgMABQgkAFgOAEQA/gBA3gaIAKgFQAlgSAdgbQgbAIgZAQIgQALIAEgFIAJgMQAHgMAEgNIAJggIAAgCQAEgZgFgcIgDgNIAAgDQgDgWAAgRIgwgzIAqgLIA5gMQADACAEAAQAIAAAYgJIAPgCIAGgBIAWgBIAagCIAfgDIAWAAQAUAfAwAfQBSA2BTAAIAFAAIAAANQAAArgGAHQgCACgGACQgLACgYAAQgkAAgnAEQhlAKh+ApIgCgRIgBgEIAAgCIgBgGIAAgEQgSALgPAOIgIADIAGgBQgXAVgNAaQAOgIARgOIALgHIAIAEIAJgBQAIAMANAaIgCgfIgBgKQA0gKCFgkQAWgFAiAEIA3AIQAOABAMgCQgNARgEAZQgBAKAAAiIgCACQgTAMgZABIgLAKIgCAIQgXAMgbABQgLAGgMAAQgwAIgwAEQhIAGhGASQglAJgmAAQg0AAg0gTgAg7A3IgGAFIgFAJQALgIAHgLIgHAFgAjvhFQgSAVAAAcIAAAAIABAAIAKgBQAmgMgQgngAlMBkQgDgQgNgIIgJgcQAXAJAWANIAJAHIAAADIgBAEIgIAsQgLgMgJgQgAgPAzIAAAAIgHACIAHgCg");
	this.shape_1.setTransform(271.4,141.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAmQAAgEAEgEQAUgSAXgmIgOAAIgXgBQgIgBAAgHQAAgEACgCQADgCADAAIALABIAMABIAPgBIAQgBQAHAAAAAGQAAAGgGAHQgHAIgLAQIgSAZIAOAAIAJABIAJABQADAAACADQACACABADQgBAEgCACQgCACgDAAIgJgBIgJgBQgRAAgQADIgCAAQgIAAAAgGg");
	this.shape_2.setTransform(288.8,76.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjAmQAAgEAEgEQAVgSAWgmIgOAAIgXgBQgIgBAAgHQAAgEACgCQADgCADAAIALABIAMABIAPgBIAQgBQAHAAAAAGQAAAGgGAHQgHAIgLAQIgSAZIAOAAIAJABIAJABQAEAAABADQADACAAADQAAAEgDACQgBACgEAAIgJgBIgJgBQgRAAgQADIgCAAQgIAAAAgGg");
	this.shape_3.setTransform(304.2,62.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjAmQAAgEAEgEQAUgSAXgmIgOAAIgXgBQgIgBABgHQAAgEABgCQADgCADAAIALABIAMABIAPgBIAQgBQAHAAAAAGQAAAGgGAHQgHAIgLAQIgRAZIANAAIAJABIAJABQADAAACADQACACAAADQAAAEgCACQgCACgDAAIgJgBIgJgBQgQAAgQADIgEAAQgHAAAAgGg");
	this.shape_4.setTransform(287.7,47.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgjAmQAAgEAEgEQAVgSAXgmIgPAAIgYgBQgGgBgBgHQABgEACgCQACgCADAAIAMABIALABIAPgBIAQgBQAHAAAAAGQAAAGgGAHQgHAIgLAQIgSAZIAOAAIAJABIAJABQAEAAACADQACACAAADQAAAEgCACQgCACgEAAIgJgBIgJgBQgQAAgRADIgDAAQgHAAAAgGg");
	this.shape_5.setTransform(295.8,43.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjAmQAAgEAEgEQAVgSAXgmIgPAAIgXgBQgIgBABgHQAAgEABgCQADgCADAAIAMABIALABIAPgBIAQgBQAHAAAAAGQAAAGgGAHQgHAIgLAQIgRAZIANAAIAJABIAJABQADAAACADQACACAAADQAAAEgCACQgCACgDAAIgJgBIgJgBQgQAAgQADIgEAAQgHAAAAgGg");
	this.shape_6.setTransform(312.3,58.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjAmQAAgEAEgEQAVgSAXgmIgPAAIgYgBQgGgBAAgHQAAgEACgCQACgCADAAIAMABIALABIAPgBIAQgBQAHAAAAAGQAAAGgGAHQgHAIgLAQIgRAZIANAAIAJABIAJABQAEAAACADQABACAAADQAAAEgBACQgCACgEAAIgJgBIgJgBQgRAAgPADIgEAAQgHAAAAgGg");
	this.shape_7.setTransform(296.9,72.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjAmQAAgEAEgEQAVgSAWgmIgOAAIgYgBQgGgBgBgHQAAgEADgCQACgCADAAIALABIAMABIAPgBIAQgBQAHAAAAAGQAAAGgGAHQgHAIgLAQIgSAZIAOAAIAJABIAJABQADAAADADQACACAAADQAAAEgCACQgDACgDAAIgJgBIgJgBQgRAAgQADIgCAAQgIAAAAgGg");
	this.shape_8.setTransform(289.9,59);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjAmQAAgEAEgEQAVgSAXgmIgPAAIgYgBQgGgBAAgHQAAgEACgCQACgCADAAIAMABIALABIAPgBIAQgBQAHAAAAAGQAAAGgGAHQgHAIgLAQIgRAZIANAAIAJABIAJABQAEAAACADQACACgBADQABAEgCACQgCACgEAAIgJgBIgJgBQgQAAgRADIgDAAQgHAAAAgGg");
	this.shape_9.setTransform(281.1,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2,p:{y:76.3}}]},7).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2,p:{y:76.3}},{t:this.shape_3}]},6).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2,p:{y:76.3}},{t:this.shape_3},{t:this.shape_4}]},6).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_7,p:{x:296.9,y:72.4}},{t:this.shape_6},{t:this.shape_5,p:{x:295.8,y:43.2}}]},6).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_8,p:{x:289.9,y:59}},{t:this.shape_5,p:{x:305.3,y:45.2}},{t:this.shape_2,p:{y:29.8}}]},6).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_9},{t:this.shape_7,p:{x:296.5,y:28.2}},{t:this.shape_8,p:{x:280,y:12.9}}]},5).to({state:[{t:this.shape},{t:this.shape_1}]},7).wait(18));

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Am+EHQgmgMgngGQg+AAglgrQADgDADgBQApgOAuAGQgOAgAhAJQBPAWBPAOIgCAIIgNAAQgpAAgmgMgADFguQAJgYgBgZIgCgcIgBgUIA6AJIA4ABQgGgEgIAAQg2gLg3gIIgFADIgFAAIgGgdQAJgCAHgEQAJgDAHgEQAIgEAHgGIAOgLIAGAIIAHAHIAGAHIAHAEIACAFIATAKIAKAEIALAAIgDgFIAjgBIAHBBQAEAhAQAdQgOALgTACIghABQg0AAgygKgAIGjFIgBgIQgBgaAWgMIBVAHIgdAeIABAEQgTAigeAeQgIgggUgbgAmhkBQAQgIAQgFQAkgMAkAVQAAAHAFACQBTAjBhgPIADANIgxABIgJAAQh7AAhvgng");
	this.shape_10.setTransform(199.2,144.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC6633").s().p("AA/BYQASgOAaAaQAbAagNASQgMgjgugVgAgRB8QATgcAHgSIABgFQAIgbgMgdQAMAIAGAUQAGATgDAUQgBAMgDAIQgJAVgUAAIgLgBgAgugjQAXACABAPQAAABAAABQAAABAAABQAAAAgBABQAAAAgBAAQgEAAgSgWgAg3grIgIgCQACgDAEABIABAAIAIADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgEAAgAhGh8QAYArgYAKQgGgmAGgPgAhfhtQgLgVgSgDQAJgJAHgBQAKAAAHALQANATgCAUIgBAAIgBAAQgFAAgIgQg");
	this.shape_11.setTransform(302.2,106.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAFFFF").s().p("AA3BQQgSgBgQgNQgRgNgDgTQgCgWAQgVQAZgCATALQAKAFAIAKQASAVgGAUQgBAFgEAGQgJANgRAAIgDAAgAAlAiQARANABADQAHgLgIgKQgFgFgSgKQgHAKANAKgAhagwIARgcQASgIAcASQAbATgDATQgQAAgIACQgNACgGARQgdgNgPgcgAg/g3QALADAHAJQAIAKAEADQAIgMgQgNQgIgGgGAAQgFAAgDAGg");
	this.shape_12.setTransform(293.8,107.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("As4F9QgdgMgegNQgagMARgOQALgKAPABQBWgJBYACQAcgaAPgjIAFgOQADgMgDgLQBFhuBChvQASgfAPghQBYAJBdAQQBNALBPAHQAWANAagIQgvhngthpQgKgXgPgVQhaA9hGBOQgJAKgCARIgDAZIgGAFIitACQgugbg/gBQgOgDgKgJQAHgyA7AKQAaAHAZANIAIACIADAEQBBAWA7gxQA4gxAyg3QAwg3Asg0QAMgPATgHQA8AYAZBAQASAwAbAtQAdAuAaAxQATAlAhAZQAegLAcAMQBQgDBMgWQADgtAugCQAhgBAhAHIAMADIARgZQAegMAjAFIANgIIgCgEQAOAFALgIIAFgFIAFgEQgLg0AbgtQAdgyA2APQABgJgNgBQgRgBgFgIQACgNAJAEIASAKQAEgHgVgKQgUgIAMgLQBAAmAiADQADgUgfgJQgkgHgKgHQAJgPAaANQAhAQAHgBQgCgQgbgNIgegMQARgFAHgGIAPgSIABgBQANAGASARQARAPARAHQgBAEAEAVQADAQgGAMQA1AiAWAYQAfAjgJAmQA2AJAdApQAeArgpAfQgCgggKgTQgNgbgigQQAIAQAWAdQAOAbgSAbQABgdgDgMQgEgVgTgNQAPAbgJAkIgFANQgBgEgBgWIgBgQQAAgagSgNQgEACgDAEQgHAJABATIAAAqQgUAggrgNQgqgMgIgiQhZgYgtAQIgDgBIgJgBIgEAEIgKABIgBAFQhlBchzBJQgkAXgpANQgYAFgYAAQgvAAgrgRQiXASiMhCQgjgQglgGQg6gLg8gEQAABFg8AsQgtAigfAyQgxBNgQBVQgDAUgJATQgUACgUAAQhXAAhTgjgAtzFLQgEABgDADQAlArA+AAQAnAGAmAMQAtAOAwgCIABgIQhPgOhPgWQghgJAOggQgMgCgNAAQggAAgdAKgAptGHQgDg8AkgxQARgYAMgYQAeg8AwgsQAtgnATg1QADgJABgKQAAgGACgFIAEgDQBfACBcAZQAuANAqATQAaAKAbAJQAFglgCglIgCgUQhigKhhgLQhNgDhLgRQgUgFgTgGQgOA2ghAqIgyBCQhEBYgcBqQgEARgRAIIgCAGQgUAFgYgEIg3gCIgKAJIgBAKQA1ARAzAUQAfALAiABIAAAAgABsBaIgJAFQBjApBZhBQAxglAxgiQA/gsA0gyIAAgBQhPhRhEBcIgLAMIABAGQg2BlhkAwIgGgEIhNgFgAg/AJIABAcQABAZgJAYQBDAOBDgFQATgCAOgLQgQgdgDghIgHhAIgkABIADAFIgLAAIgKgEIgSgKIgBgFIgIgEIgGgHIgGgHIgGgIIgPALQgHAGgIAEQgHAEgIADQgIAEgJACIAHAdIAEAAIAFgDQA3AIA2ALQAHAAAGAEIg3gBIg5gJIABATgABZgmIgHABQgDAyAVAsIAGAJIBYAEQAugXAdgpIgDgOQgNgMgFgRQgDgJgBgKIgFgFQgkANgngDQglAJgmAEgAD5hIIABAIQAUAbAIAgQAegeATgiIgBgEIAegeIhWgHQgWAMABAagALUg1QApAOARgfQgCgPgOgIIgggMQAGgIgBgKQAAgMABgFQgIgEgRAAQgQAAgLgKQgPgNAAgkQgBgigTgNQgJAIAGAJQAIALgBAEQhFgSgMgzQg6AIgMAhQgLAdAaAnQAZAkArAXQAvAZArgGQAFAgAoAPgAi4kzIABACIgBAHIgDAFIgFAGIgGAFQAaAUAIAfQAKAoASAjIgFABQAQAaANAbIATArIA8ggQgcgqgWgsQgwhig6haQgHgLgMgDIgJAEIgJAFIgHAGIgHAGQg6BRhIBGQg+A9hQAjIB0ACQARhFBAgiQA/ghAygyQAIgIAJgGIABACgAqNiJQgQAFgPAIQBzAoB/gBIAxgBIgDgNQhhAPhTgjQgFgCABgHQgXgNgXAAQgOAAgNAEgAHyiZIgeANQATAIAPAOIAUARIAKgFIARgEQALgBACgDQAEgDgJgIQgZgdgZAAIgJABgAM6ieQAtAVANAjQAMgSgagaQgSgRgNAAQgHAAgGAFgAovhzIAVAEIgMgDIgOgEQgCAAAHADgAMFitIgCAFQgHATgUAbQAfAHAKgbQAEgIABgMQACgUgFgTQgHgUgMgIQANAdgIAbgAK1jyQgRAWADAWQADATARAOQAQAMASABQATABAKgOQADgFACgGQAGgTgSgWQgIgJgKgGQgQgKgVAAIgHAAgALQj3IAMAGQAZAKAGgBQgKgFgggaIgOgLQghgbgKAFQATAGgCAUQgEAYAHAGQAGgMAMAAQAIAAAKAFgAJck1IgRAdQAOAbAeANQAGgQANgDQAIgCAQAAQADgSgbgUQgUgMgOAAQgHAAgFACgALkkJQgCgPgWgCQAZAggBgPgAK7kkIAIACQAGABABgCIgIgCIgBAAIgCgBQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAgAK0k+QAYgKgYgrQgHAPAHAmgAKOmFQgIAAgJAJQASADAMAWQAIARAGgBIAAAAQADgVgNgSQgHgLgJAAIgBAAgAMRgaIADgDIACADIgFAAgALhhgIAcAQQgEAGgLABQgLABgEAFQgHgLAJgSgAJEi/QgQgPgIgPQgLgTAGgLIADgBIACABQABADgCANIAGALQAGAKATATQAUAUAIACIACAEQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgCAAQgIAAgZgZgALLjGQgNgJAHgLQASAKAFAGQAIAJgHAMQgBgDgRgOgAJ4kUQgHgIgLgEQAGgMAQANQAQANgIALQgEgCgIgLg");
	this.shape_13.setTransform(226,131);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE0CC").s().p("AqpF1Qg0gUg1gRIABgJIAKgKIA4ACQAXAFAUgGIADgGQAQgIAEgQQAchrBEhYIAyhBQAhgrAOg1QATAFAUAFQBLARBNADQBiAMBhAJIACAUQADAmgGAkQgbgJgagKQgpgTgugNQhcgZhfgBIgFACQgBAFgBAGQgBAKgDAJQgTA2gsAnQgxAsgeA7QgMAYgQAYQglAyADA8QghgCgfgLgABnBaIAJgGIgCgQIBNAGIAGADQBkgwA2hkIgBgGIALgNQBEhcBQBRIgBABIAAABQg0Axg+AsQgyAigxAlQg3Aog6AAQglAAgmgPgABuA8IgGgJQgVgsADgxIAHgBQAmgFAlgJQAnAEAkgOIAFAGQABAJAEAJQAFARANAMIACAOQgdApgtAYgALYg7QgogPgFgfQgrAFgvgYQgrgXgZglQgagmALgdQAMgiA6gIQAMAzBFASQABgEgIgLQgGgJAJgIQATANABAiQAAAkAPANQAMAKAPAAQARAAAIAEQgBAFAAAMQABAKgFAIIAfAMQAOAIACAPQgLAVgXAAQgLAAgNgEgALkhJQAEgFAKgBQALgBAEgGIgcgQQgIASAHALgAIrkBQgGALALATQAIAPAQAQQAdAcAGgEQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAgBIgDgEQgIgCgUgUQgTgTgGgKIgGgLQADgNgCgDIgCgBgAhrhsQgNgagRgaIAGgCQgTgjgKgoQgIgfgagTIAHgGIAEgGIADgFIABgHIAAgCIgCgCQgJAHgIAHQgxAyhAAhQhAAigRBGIh0gCQBQgkA+g8QBJhGA5hSIAHgGIAIgGIAIgFIAJgDQAMACAHALQA6BbAxBhQAVAtAcAqIg7AfIgTgrgAH6h8QgOgOgUgIIAegMQAegHAdAiQAJAIgEADQgCADgLABIgRAEIgKAFIgUgRgALgj3IgMgFQgagNgKATQgHgGAEgYQACgUgTgGQAKgFAiAbIANALQAhAaAJAFIgCAAQgHAAgWgJg");
	this.shape_14.setTransform(225.6,131.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(61));

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC97").s().p("AgMgBIAZgCIgHAHIgSgFg");
	this.shape_15.setTransform(310.6,71.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CCFF").s().p("AC3I1QhrgVgGgBIgJAAIgFgBQg3gUgeAAIgHgCIgBAAQhwgahJgTIgBgBQgKgJgpgJQhIgRgYgLQhKgogogOQhugXgggQIh7gpIABgCIgIgBIgRgFQgFAAgCACIgJgCIgNgDIgCAAIgvgMIhggdIgngLQgfgHgcgEQg1gIgkAHQgVgrgEh7IgBgeQgLAAgKgCIgmgQIgPgHIAEABIgOgIQgMgJgLgQQgMgQgDgqIgDg1IAFgPQAEgHAFgHQAGgGAJgFIAMgEIAGgEIgBgBQATgJAagIQAqgNDOgtQArgJAqgRQAfgMAegPQBQgpAEgkIABgEQAAgHgCgEQALgWAOgUIACABIATgRIBMhGICUg+QB6gfJWAsQCZAMCZAaQDZAPB9APQBvANBMASIAHACIAKADQASAEAQAGIAKAEQAyAUAYAjIAGALIAHAMIAdA2IABAGIgBAuIgEATIAAADIggBdIgCAEIgHANIAEAHQgXA0gvBhIgEAAIgJAXIAAABIgEAIIgVA4IAXAAQgEAVgJAYIgEAAIAAgBQAAgbgGgRQgDgHgEgGQgfg5hEgKIgWgDIgJgBIgvgEIBIgDIAUgBIArgCIg2gCIg+gBIhHAAIg/AEIgqADQgdADgRACIgIACIgOANIgYAAIAAAAQhEANhFAHQgpAFgpACIgCAAIgbACIgeABIgXABIgPAAIgGAAIhBgBIgagBIgLAAIghAAIgEAAIgBABIgWANIgiAWIgiAWIhkA/IgPAKIgHAEIgPAAIgDAAIgFAAIABAFIgHgCQAEAIgEANQgIAXAEALQgLgIAFgUIAAgBIAFgWIABgEIADgBQAFgDABgDIAWgMQAkgUA4giIAMgIIAZgQQAhgVAMgJQAHgGAAgBIgBgBIgvgTIgegMIg8gXQgWgKgdgIIgXgGIglgHIgUgDIgsgFIgFAAIgFgBIgRgBIgCgBIgKAAIgQgBIgKgBIgTgBIgLAAIgPgBIgMAAIgQgBIgIAAIgFAAIgqAAIgGAAIgMAGIiFBCQgNAGgNAHIg+AiIgDABIgMAAQgNAAgDAXQgBALABAMIAAABIAAARIACASQABAKAFAJQAFAIAGAIIASAEIBfAWQAXAGAXAFIAnAHQAiAFAhAAIAGABIgBABIAEABIA+ASQAnAMAbAEQAaAFAygBQA0AAAVADQArAHC2AqIA7ANIAEABIAQADIAzALQAzAKAzgCIAAAAIgHAzQgIBAAEA/IACAaIABAJIABAKIAAADIAAACQgVACgzAYQhagfhrgVgAiLEZQgZgIgmgGIgWgCIBVAQgAx4jJQAPAGAMAKQAfAaASA6QAHAXARBTQANBAAPAaIAtANQBNAXBYAUIBUASIANADIAOADIAAAAIgBABQAAAIAZADIAKABQARACAYAAQAgAAAFgJIAAgPIAAgGIgCgjQgDgZgFgIIABAAQANgMAlgUIAIgEQAngWATgMQAGgFAOgHQAUgJAjgNIAGgCQA0gVAAgMIgCgFIhagVIAAgBIgHgBIgIgCIgEgBIgOgDIAAAAIgBABIgRgEIgRgDIgYgDIgMgCIgUgDIgUgDIgDAAIgwgGIhKgKIAAAAIgsgFQgEgGgCgcQgCgXgMgCIAHAeQADAWgKAHQgHgEgBgVQgCgUgKgBQgBAFAHAXQAGASgMAGQgTALgBgcIAAgRQgBgGgFAHQAIBCgog1QgDAbgFABQgDACgGgLQgHgLgCABQgDAAgCALIgDABQgBgHgFAAQACAfgOABQgCgUgMgGQADAZgJgBQgIgCgFgQIgBARQAAAJgGABQgEAAgDgGQgDgHgDAAQgDAQgQAKIgKAFQgaANgKgSIgJAUQgGAMgLABQAMg2gsg6QgdglgkgUIgFACgAvRhQQADAJABABQACAAAAgKQAAgKgCAAQgBAAgDAKgAy7hgQAFATANADQAqgWgcgeIgbAAQgKALAFATgArniSQADALAEgCQADgCgCgNQgDgPgKgSQAAAZAFAOgAHQIxQgJglgDgiQgDhGAhhCIAJgQIgTAMIAAAAIAAgFIgBggIAAgNQACgKgBgEIAAgBIAUADQAJAFAJgCIABAAIAAAAQgzgYgcgyQgMgUgFgXIgFAEQgBgRAFgRQAEgNAIgNIAMgRIgGgDQBehOBwAzIABAAIASAUQAmBhgpA6IgBACQgcAmgYAPQgOAJgNABQgjAFgOAEQA/gBA3gaIAKgFQAlgSAdgbQgbAIgZAQIgQALIADgFIAKgMQAHgMAEgNIAJggIAAgCQAEgagFgcIgDgNIAAgDQgDgWAAgRIgwgzIAqgLIA5gMQADACAEAAQAIAAAYgJIAQgCIAFgBIAXgBIAagCIAfgDQAvgBAqAFIAkAFQAdAFAcAIQAyAQARAvIADAAQAIATAAAZQAAArgGAHQgCACgGACQgLACgYAAQgkAAgnAEQhlALh+ApIgCgRIgBgEIAAgCIgBgGIAAgEQgTALgPAOIgIADIAGgBQgXAVgOAaQAOgIARgOIAMgHIAIAEIAJgBQAJAMANAaIgDgfIgBgKQA0gKCGgkQAWgFAiAEIA3AIQAOABALgCQgMARgEAZQgBAKAAAiIAAAMQAAAXABAQQgXAOg1AJQg9ALhFAWQhLAZgQAUIgDAFQhQAYhPAbIgUAGIgzASIhQAcIgIADIgCgEgALFEAIgGAFIgFAJQALgIAHgLIgHAFgAIRCDQgSAVAAAcIAAAAIABAAIAKgBQAmgMgQgngAEiFGIgCAAIgxgHIgCgBIgKgBQiDgVhRgZQgJgRADgeIAEgiIACAAIgCACIAEABIAFgDQA2ACApACQBZAGAcANIAAAAQhDgLgqgGIAFABIAeAGIADABQAxALAnAGIAAAAIAKAFQAKADATACIAUgBQAZAAAZAEQAaAFAYAKQAYAJAWANIAJAHIAAADIgBAEIgMBBIAAAAgAikD8QgggGhKgSIgCABIgjgDIgvgGIgDAAQgrgDgNgFIgKgGIgDgBIgHgDIgegKQgTgHgmgEQgegEgIgZQgCgHAAgXIAAgGIgDgGQgCgHAFgHQAEgHALgEQAHgDALgCQASgEAcAAQAcAAA7AaIBCAcIB5ASICXAWIAiAFQgFAHACALIAIgDQgBA1AIAcQhKgChQgRgALxD8IAAAAIgHACIAHgCgAFmDcQgigBgigEIgXABQgqgHgrgKIgRgEIgPgDQgpgHgxgDIgXAAIAFgDIASgLIBOgrQAKgGAUgPIATgPIARgIIAWgLIAFgHIABgBIAGgEQAHgGABgFIAMACIAgACIBpACIgCAIIBMAAQgcASgOARQgJAJgDAKQgMAggCAmIARAgIAAABIgSABIggABIgKAAgAqKCtIgDAAQgSgCgLAAIACgEIgegGIhJgQIg8gOQhFgPgzgSQgigLgagMQgRgkAEg2QA4AUBSAWIBJASICcAjIA/APIAAAEQAAARACAOQABALADAJIADAIIAAAPgAixCVQhHgKhBgOQgngSgjgNQg2gVhNgEIgIAAIASgKIBigzIAHgEQAogTAdgMIAIgDIARgHQAWgHANAAIACAAIAZAAIAQAAIAMAAIAOABIALAAIATABIAKAAIAOABIAEABIAUABIAKABIAFAAIAFABQAcADAaAEIAGABQAfAFAaAHIAMADIAhAKIA2ATIAfAMIA6AWIgLAHIg6AjIgPAKIhoA/IgKAGQhdgIhUgNgAqcBOQgUgEgYgGQhQgYgjgIQgbgGglgKQg6gQhQgaQBqhSDCACIAEAAQArABAzAFQBOAIBgATQAQAIAeAHIATAEIAnAHIAAACQgJAGgRAIQglAThQAgQhJAdgUAZIgIADIgHABIgBAAIgPABQgUAAgcgFgAyvhdIAAgUIAUAAQABAGgEAFQgEAFAAAEg");
	this.shape_16.setTransform(194.5,121);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3A3839").s().p("ANSFgQgBgIAQACQAJABAAAEIAAAAQABAEgFAEQACgCgWgFgAtlj0QgCAAgCgJQAFgUAAAUQAAAJgBAAIAAAAgAqAlAQgEgNgBgZQALASADAPQACAMgDACIgCABQgCAAgEgKg");
	this.shape_17.setTransform(184.1,138.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ACrJJIibgrIiKgeIAQADIg1gNIg/gPQhbgVgNgBQgfgEgOgGQgMgJgOgGIg7gaQgogSgZgFQghgGhygmQhIgZgdgNIAAAAIgKgFQgKgBgJgEIgFgCQgXgCgdgKQhSgcgMgCIgngDQgKgCgJgEQgIgEgGgGIgigDQg/gFhAgIIADgMIAVACQgFgMgMgIIAAgBIACgOIAIACQABgXgDgdIAAgfIAAAAIgEAAIgFgmIgCgQQgGAFgJADIADgJQghgGgkgiQghgggCgLQgEgNgDgrIgCgpQAAgtBVgdQA8gVDDgnQAygKAogTIBDgjQAigPAngzIABgBIgBAAIgFgCQANgTAXgdIgBgEQAAgGAjgfQAbgZAggWQBJgjBMgYIAagIIAOgFIAMgDIgGACQAogFBJgHQCXgCCWALIFDAcQCzAVCvALQCvALDHAkQA0AJAoAMIAUAGIAHgJIAUgBIgPAOQBWAfARAuQAbBIgBAWQgBATgUA1IgGAQIgVA3IACAAQAEADAAALQAAAFgMAWQgOAZgfAxQgFAKgBAPIAAAZQgCAQgOANIgFAOIgJAVIACAOIAAAVQAAAkgWAbIgMAQIAAACQgEAagTAKIABAEQAAAKgLAcQgFAMgDALIgBAJIgBAaIAAACIgCgHIAAAjIAAABIAAADIADgEIABAuQiKAMhHAXQgtAOg9AlIAAADIghAKQgIAHgFAIQgegIgwAYQgyAZgqgIQgNAKgFAQIgBAHIg3ACQgkAIgHAcIgNAEIgUADQgQACgDAJIgNAFQg+gTiWgagAgiINQAfABA3ATIAEABIAJABQAGAABrAVQBrAVBbAgQAygZAVgBIAAgCIAAgDIgBgKIgBgJIgCgaQgEg/AIhAIAHgzIAAAAQgzABgzgJIgygLIgRgEIgEAAIg7gNQi1grgrgGQgWgEg0ABQgyAAgagEQgbgFgmgLIg+gTIgFgBIACgBIgGAAQgigBgigFIgngHQgXgEgXgHIhfgVIgSgEQgGgIgEgIQgFgKgCgJIgBgTIgBgQIAAgBQgBgMABgLQADgXANAAIANAAIACgCIA+ghQANgIANgGICFhCIAMgGIAGAAIAqAAIAFAAIAIABIAQAAIANABIAOAAIALABIATABIAKAAIARABIAJABIADAAIAQACIAGAAIAFABIArAFIAUADIAlAHIAYAGQAdAHAVAKIA8AYIAeAMIAwATIAAAAQAAACgHAFQgMAKghAVIgYAPIgNAIQg4AigkAVIgWAMQAAADgGACIgDABIAAAFIgGAVIAAACQgFAUALAHQgDgLAIgWQAEgOgEgHIAGABIgBgFIAFABIADAAIAQAAIAGgEIAPgKIBkhAIAigWIAigVIAWgOIABgBIAEAAIAhAAIALAAIAaACIBBABIAHAAIAOgBIAXAAIAegCIAcgBIABAAQApgDApgEQBFgIBFgMIAAgBIAXAAIAPgMIAHgCQARgEAdgCIAqgDIA/gEIBHAAIA/ABIA1ADIgqACIgVABIhHACIAvAEIAIABIAWAEQBEAJAgA6QAEAFACAIQAHAQgBAbIAAABIAAALIAEgLQAJgYAEgVIgWABIAVg4IADgJIAAgBIAJgXIAEAAQAvhhAXg0IADgGIgGAAIAGgNIACgEIAgheIABgCIAEgUIABgtIgBgGIgeg2IgGgNIgHgLQgYgigygVIgKgEQgQgFgSgFIgKgCIgHgCQhLgShwgOQh9gOjZgQQiZgaiZgLQpWgsh6AfIiUA9IhLBGIgUARIgBAAQgOATgMAXQACADAAAHIAAAEQgFAkhQApQgeAQgfAMQgqAQgrAKQjOAtgqANQgaAIgSAIIgBAAIAAABIgRAIQgIAGgHAFQgFAHgDAIIgGAPIADA1QAEAqALAQQALAQAMAIIgEgBQAEAHAKABIAPAHIAmAQQALACAKABIABAdQAEB7AVAsQAkgHA1AHQAcAEAgAIIAmAKIBgAdIAvAMIACAAIANAEIAJABQACgCAFAAIASAGIAHAAIgCACIABAAIB7AqQAgAQBuAXQAoAOBKAnQAYALBIARQApAKAKAIIABABQBJATBwAaIAFACIgDgBIAGABgAHdFlQghBCADBHQAEAhAJAlIABAFIAIgDIBRgdIAzgRIATgHQBPgbBQgYIADgFQAQgUBLgYQBFgXA9gKQA1gKAXgNQgBgRAAgWIAAgMQAAgjABgKQAEgZANgQQgMABgOgBIg3gHQgigEgWAEQiFAlg0AKIABAKIACAfQgNgagJgMIgJAAIgIgEIgLAIQgRANgOAIQANgaAXgVIgGABIAIgDQAPgNATgMIAAAFIABAGIAAACIABAEIACAQQB+goBlgLQAngFAkABQAYAAALgDQAGgBACgCQAGgHAAgrQAAgagIgTIgDAAQgRgvgygPQgbgJgegFIgjgFQgrgFgvACIgfACIgaACIgWACIgGABIgQACQgYAJgIAAQgEAAgDgDIg5AMIgqALIAwAzQAAASADAWIAAADIADAMQAFAcgEAbIAAABIgJAhQgEANgHALIgJANIgEAEIAQgLQAZgPAbgIQgdAbglASIgKAEQg3Aag/ABQAOgDAkgFQAMgCAOgIQAYgQAcglIACgDQAog6gmhhIgSgTIgBgBQhwgyheBNIAGADIgMASQgIAMgEANQgFARABASIAFgEQAFAXAMAUQAcAxAzAYIAAABIAAgBQgKACgJgFIgUgDIAAABQABAFgCAJIAAAOIABAgIAAAEIAAABIATgMIgJAPgAAEDjQgDAeAJASQBRAZCDAUIAKACIACAAIAxAIIACAAICiAYIAAgBIAMhBIABgEIAAgDIgJgGQgWgOgXgJQgZgJgagFQgZgEgZAAIgUAAQgTgBgKgDIgJgFIgBAAQgngHgwgKIgEgBIgegGIgFgCQAqAGBEAMIgBAAQgcgNhZgGQgpgDg2gBIgFADIgEgCIADgBIgDAAIgEAhgAgPETQgHgcAAg2IgIAEQgCgLAFgIIgigFIiWgWIh6gSIhCgcQg7gZgcAAQgbAAgTADQgLACgHADQgLAFgEAGQgFAHACAHIADAHIAAAFQAAAXACAHQAIAZAeAEQAmAFATAGIAfALIAGACIADABIAKAGQANAFArADIADAAIAvAGIAjAEIACgCQBKATAgAGQBRAQBJADIAAAAgALlECIAHgDIAAAAIgHADgAFhDfIAqgBIASgBIAAAAIgRghQACglAMghQADgJAJgKQAOgQAcgSIhMAAIACgIIhpgDIgggCIgMgBQgBAEgHAHIgGAEIAAAAIgGAIIgWALIgRAIIgTAOQgUAQgKAGIhOArIgSAKIgFADIAXABQAxACApAHIAPADIARAEQArALArAHIAWgCQAiAEAiABgAk5ghIgSAGIgHADQgeAMgoAUIgHADIhiA0IgSAJIAJAAQBMAEA2AVQAjAOAnASQBBANBHAKQBUANBeAIIAJgGIBog/IAQgJIA5gkIALgGIg6gXIgfgLIg2gTIghgLIgMgDQgagHgfgFIgGgBQgZgEgdgDIgFAAIgEgBIgLAAIgUgCIgEAAIgOgBIgKgBIgTAAIgKgBIgOAAIgNAAIgPgBIgaAAIgCAAQgNABgVAHgAMAIRIALgEIgBAFIAAAAIgKgBgAj/H2IACAHIgJgDIgDgGIAMgHQARAJASAIgAsLE6IAKgEIgJAJIgBgFgAjlENIAWACQAmAFAZAIIhVgPgAK6EJIAGgGIAHgFQgHALgLAIgAqaDAIgJgBQgagEAAgHIABgCIAAAAIgNgCIgNgDIhVgTQhYgUhNgWIgtgOQgPgagNhAQgRhTgGgXQgTg6gegZQgNgLgPgFIAGgCQAkATAcAlQAsA6gMA2QALgBAHgLIAIgVQAKASAbgMIAJgFQARgLACgQQAEABACAGQADAGAFAAQAFgBAAgJIABgQQAFAQAJABQAJACgDgZQALAFACAVQAPgBgCggQAEABABAGIABAMIACgNQACgKADgBQADAAAGALQAGAKADgBQAFgCADgaQApA1gJhCQAGgHABAFIAAARQAAAcAUgKQALgHgFgRQgHgXABgGQAKACABATQACAWAGADQAKgGgDgWIgHgfQANADABAWQACAdAEAFIAsAGIAAAAIBKAJIAxAGIADABIATACIAVADIALACIAYAEIASADIARADIAAAAIAAAAIAPADIADABIAIABIAHACIAAAAIBaAWIACAEQAAANg0AUIgGADQgjAMgTAKQgPAHgGAEQgTANgnAVIgIAFQglATgNANIgBgBQAFAJADAZIACAjIAAAGIAAAOQgFAJggAAQgYAAgRgBgAqSCwIADABIA1AAIAAgPIgDgJQgCgIgCgLQgCgOAAgRIABgFIhAgOIicgkIhJgSQhRgVg5gVQgEA3ASAkQAaAMAhALQAzARBFAQIA8ANIBJAQIAeAHIgBAEIABAAIAbABgAwKgSQBQAZA6AQQAlALAcAGQAiAIBRAXQAXAHAUADQAoAIAXgDIABAAIAHgCIAIgCQAUgaBJgdQBQgfAmgTQARgJAIgGIAAgCIgngHIgTgEQgegHgQgHQhggThOgJQgygFgsgBIgEAAIgLAAQi6AAhnBRgAH6C4IAAgBQAAgcASgVIAPgCQAQAmgmAMIgKACIgBAAgAzLBaIANADIARADIgPABgAy/hcQgGgTALgMIAaAAQAcAegpAXQgOgEgEgSgAy0haIANAAQAAgDAEgGQAEgFgBgFIgUAAg");
	this.shape_18.setTransform(195,120.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.6,57.6,260.8,126.1);


(lib.CouchBoardTeamMickPyramids = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape.setTransform(86.6,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAoQgMgDAAgIQAAgDADgCQACgCACAAQADAAAEADQABACAHABIAIABQAEAAAGgBQAGgCAAgFQAAgKgNgEIgIgCQgJgCgEgCQgGgDAAgJQAAgPAPgGIAMgFIAPgFIAGgBQADAAACACQACACAAAEIABAFIABAHQAAADgCACQgCACgDAAQgEAAgCgDIgCgHIgRAEQgLAFABAHIADACQAQADAJAEQAMAHgBAPQABAMgLAGQgJAFgLAAQgKAAgIgEg");
	this.shape_1.setTransform(80.9,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAyQgLgLAAgQQAAgUALgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAAAAHIgCAtIgBAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgDgGQgFAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAIgBAOQAAAJAHAHQAHAHAJAAQAFAAAEgCIAIgGIACgCIAAgOIAAgIIAAgJQgCgFgFgDQgEgCgHAAQgLAAgHAGg");
	this.shape_2.setTransform(73,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_3.setTransform(66.6,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_4.setTransform(58.7,13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_5.setTransform(48.9,14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcAhIAAgyIABgHIAAgHQAAgIAHAAQAGAAABAMQANgNARAAQAGAAADAEQACAFAAAJIAAAFQAAAJgGAAQgHAAAAgHIAAgGIAAgGQgMACgGAFQgHAFgEAKIABAmQAAAIgIAAQgGAAgBgIg");
	this.shape_6.setTransform(41.7,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_7.setTransform(33.7,15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcA8QgCgDAAgDIABgdIAAgcIgBgdIgCgPQAAgFACgEQADgFAEABQADAAACACQABABAAADIAAADIAAAEQAGgFAGgCQAFgCAFAAQAPABAHANQAGAKAAASQAAAPgJAKQgJAKgPABQgGgBgJgCIAAAjQAAADgCADQgCABgDAAQgEAAgCgBgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgJQAAgNgDgIQgDgGgHAAQgGAAgFADg");
	this.shape_8.setTransform(26.1,15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAoQgLgDAAgIQAAgDACgCQADgCADAAQACAAAEADQABACAHABIAHABQAFAAAGgBQAGgCAAgFQAAgKgNgEIgHgCQgKgCgEgCQgGgDAAgJQAAgPAOgGIANgFIAPgFIAGgBQADAAACACQACACAAAEIABAFIABAHQAAADgCACQgCACgEAAQgEAAgBgDIgCgHIgRAEQgLAFAAAHIAFACQAPADAJAEQAMAHgBAPQABAMgKAGQgKAFgMAAQgJAAgJgEg");
	this.shape_9.setTransform(13.7,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgEgBgJQgDgUAAgOQAAgKACgMQABgHAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADABQACACAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_10.setTransform(6.4,14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_11.setTransform(-1.7,14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_12.setTransform(-7.4,12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgcAhIAAgyIABgHIAAgHQAAgIAGAAQAIAAAAAMQANgNARAAQAGAAADAEQADAFAAAJIAAAFQgBAJgGAAQgHAAAAgHIAAgGIgBgGQgLACgGAFQgGAFgFAKIABAmQgBAIgHAAQgHAAAAgIg");
	this.shape_13.setTransform(-13,14);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_14.setTransform(-20.7,14);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAiIgLgeIgNggIgBgEQAAgDACgCQACgCADAAQAFAAACAEIASAzIANghIAGgRQADgFAEAAQADAAACACQACADAAADQAAACgMAdIgPAhQAAAHgGAAQgFAAgCgGg");
	this.shape_15.setTransform(-28.1,13.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAyQgLgLAAgQQAAgUALgKQALgMAPAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAAAAHIgCAtIgBAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAIAAAOQgBAJAHAHQAHAHAJAAQAFAAAEgCIAIgGIACgCIAAgOIAAgIIAAgJQgCgFgFgDQgFgCgGAAQgLAAgHAGg");
	this.shape_16.setTransform(-40.8,11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbAOQAEAFAGAEQAHADAGAAQAFAAAHgCQAJgCADgEQACgEACAAQADAAADACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_17.setTransform(-49.1,13.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAHIgBAHIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgVIAAgGIgBgHQAAgEADgCQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAIIAAAFIACAQIABAQQAAACgCACQgCACgDABQgGAAgBgHg");
	this.shape_18.setTransform(-57.1,13.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAGAAQAIAAgBAMQAOgNARAAQAGAAADAEQACAFABAJIAAAFQgBAJgHAAQgGAAAAgHIAAgGIgBgGQgLACgGAFQgHAFgEAKIAAAmQAAAIgHAAQgHAAABgIg");
	this.shape_19.setTransform(-64.6,14);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_20.setTransform(-72.3,14);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAfQgLgIAAgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbAOQAEAFAGAEQAHADAGAAQAGAAAHgCQAIgCADgEQACgEACAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_21.setTransform(-80,13.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIA1IABgaIABgbIAAgZIABgbQAAgHAGAAQAIAAgBAHIAAAbIAAAZIgBAlIgBARQAAAGgGAAQgHABgBgIg");
	this.shape_22.setTransform(-86.3,11.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIAQQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAEgLIAGgNQABgEADAAQABAAABAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAACgKAWQgBAEgEAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAg");
	this.shape_23.setTransform(138,-4.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC33FF").s().p("AATA4QgDgHgIgKIgMgSIgNAJIgBAWQAAAEgCACQgCACgDAAQgIAAAAgKIABgSIABgTIABgYIAAgZIAAgIIgBgIQAAgDACgCQACgCADAAQAEAAACACQABACAAADIABAIIAAAIIgBAYIAAAYQALgHAHgJIARgQQACgDADAAQADAAACADQACACAAADQAAACgCADQgIAKgOALIAQAWQAMAPAAAFQgBADgCACQgCACgDAAQgEAAgDgEg");
	this.shape_24.setTransform(131.9,-11.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC33FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_25.setTransform(123.6,-9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC33FF").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_26.setTransform(117.7,-10.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC33FF").s().p("AAtA3IgEgLIgDgNQgDgMgGgnIgPArIgEAOQgDAJgCAFQgDAFgFAAQgEAAgCgEQgCgDgBgFIgDgIQgHgagGgdIgCANIgKAmIgEAUQgCAGgFAAQgDAAgCgDQgCgCgBgDQAAgMAGgSIAIgdIAEgXQADgQAEgFQADgEAEAAQAFAAACAFQADAHADAUQAFAYAIAbQAKgbAHgfIACgKQACgHACgEQACgFAFAAQAHAAADAMIADARQAFAgAGAYIADAMIAEANQAAADgDACQgCACgDAAQgFAAgCgEg");
	this.shape_27.setTransform(109,-10.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC33FF").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_28.setTransform(93.6,-7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC33FF").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIAAgWIAAgUIAAgVQAAgEABgEQADgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAGgDAEAAQAPAAAKAMQAKALAAAQQAAARgMAMQgKALgPAAQgLAAgKgEgAgLgCIgKAGIgBAMIAAAMIABAMIAJAEIALABQAKAAAGgHQAHgIAAgLQAAgLgFgHQgGgHgKAAQgGAAgGAEg");
	this.shape_29.setTransform(85.7,-11);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC33FF").s().p("AgZAyQgLgKAAgRQAAgTALgLQALgMAPAAQAIAAAFACIAHAGIACgqQABgGAGAAQAGAAAAAHIgCAtIgBAVQAAAYACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgEgBgCgGQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQgBAKAHAGQAHAHAJAAQAFAAAEgCIAIgHIACgCIAAgMIAAgJIAAgIQgCgGgFgCQgFgDgGAAQgLgBgHAHg");
	this.shape_30.setTransform(72.2,-11);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC33FF").s().p("AgZAfQgLgJABgQQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHADAGAAQAFAAAHgCQAJgCADgDQACgFACAAQADAAADACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_31.setTransform(63.9,-9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC33FF").s().p("AAUA3IgDgQIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_32.setTransform(55.4,-11);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC33FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_33.setTransform(47.1,-9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC33FF").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_34.setTransform(39.4,-8.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC33FF").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_35.setTransform(31.4,-8.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC33FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_36.setTransform(23.8,-9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgIAQQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAEgLIAGgNQACgEACAAQABAAABAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABABAAQAAABAAABQAAAAAAABQAAACgKAWQgBAEgEAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAg");
	this.shape_37.setTransform(13.8,-4.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_38.setTransform(5.6,-9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_39.setTransform(-4.2,-8.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZAfQgKgJgBgQQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgIAGIgPAHIgbANQAEAHAGACQAHADAGAAQAGAAAHgCQAIgCADgDQACgFACAAQAEAAABACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_40.setTransform(-12,-9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_41.setTransform(-19.8,-10.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAyQgLgKAAgRQAAgTALgLQALgMAPAAQAIAAAFACIAHAGIACgqQABgGAGAAQAGAAAAAHIgCAtIgBAVQAAAYACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgEgBgCgGQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQgBAKAHAGQAHAHAJAAQAFAAAEgCIAIgHIACgCIAAgMIAAgJIAAgIQgCgGgFgCQgFgDgGAAQgLgBgHAHg");
	this.shape_42.setTransform(-32.2,-11);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgbAiIAAgzIAAgHIAAgIQAAgHAHAAQAGAAAAAMQAOgNARAAQAGAAADAEQADAFgBAIIAAAGQAAAJgHAAQgGAAAAgHIAAgFIAAgHQgMACgGAFQgGAFgFAJIAAAoQABAHgIAAQgGAAAAgHg");
	this.shape_43.setTransform(-40,-8.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_44.setTransform(-47.7,-8.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_45.setTransform(-55.6,-8.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIgBgWIABgUIAAgVQAAgEACgEQACgEAEAAQAGAAAAAGIAAADIgBADIAAAQIAAATQAGgEAGgCQAFgDAEAAQARAAAJAMQAJALAAAQQABARgMAMQgKALgPAAQgMAAgIgEgAgLgCIgKAGIAAAMIAAAMIAAAMIAKAEIAKABQAJAAAHgHQAHgIAAgLQAAgLgGgHQgFgHgLAAQgFAAgGAEg");
	this.shape_46.setTransform(-63.6,-11);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAUA3IgDgQIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_47.setTransform(-72.5,-11);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_48.setTransform(-80.7,-9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAQAjQgJAFgLgBQgJAAgHgEQgHgEgBgKQgDgTAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgEIAAgOIAAgOQAAgPABgMQABgHAGAAQADABADACQACACAAACIgCAcIAAAPIAAAQIABAFIAAAFQAAADgCACQgCACgDAAQgGAAgCgHg");
	this.shape_49.setTransform(-88.5,-8.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_50.setTransform(-96.5,-8.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_51.setTransform(-104.1,-9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAJgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGADAIAAQAFAAAGgCQAJgCACgDQADgFADAAQACAAACACQABABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_52.setTransform(-116.4,-9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAUA3IgDgQIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_53.setTransform(-124.9,-11);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_54.setTransform(-133.8,-10.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#9900FF").s().p("AATA4QgDgHgIgKIgMgSIgNAJIgBAWQAAAEgCACQgCACgDAAQgIAAAAgKIABgSIABgTIABgYIAAgZIAAgIIgBgIQAAgDACgCQACgCADAAQAEAAACACQABACAAADIABAIIAAAIIgBAYIAAAYQALgHAHgJIARgQQACgDADAAQADAAACADQACACAAADQAAACgCADQgIAKgOALIAQAWQAMAPAAAFQgBADgCACQgCACgDAAQgEAAgDgEg");
	this.shape_55.setTransform(131.9,-11.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9900FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_56.setTransform(123.6,-9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#9900FF").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_57.setTransform(117.7,-10.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9900FF").s().p("AAtA3IgEgLIgDgNQgDgMgGgnIgPArIgEAOQgDAJgCAFQgDAFgFAAQgEAAgCgEQgCgDgBgFIgDgIQgHgagGgdIgCANIgKAmIgEAUQgCAGgFAAQgDAAgCgDQgCgCgBgDQAAgMAGgSIAIgdIAEgXQADgQAEgFQADgEAEAAQAFAAACAFQADAHADAUQAFAYAIAbQAKgbAHgfIACgKQACgHACgEQACgFAFAAQAHAAADAMIADARQAFAgAGAYIADAMIAEANQAAADgDACQgCACgDAAQgFAAgCgEg");
	this.shape_58.setTransform(109,-10.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9900FF").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_59.setTransform(93.6,-7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9900FF").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIAAgWIAAgUIAAgVQAAgEABgEQADgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAGgDAEAAQAPAAAKAMQAKALAAAQQAAARgMAMQgKALgPAAQgLAAgKgEgAgLgCIgKAGIgBAMIAAAMIABAMIAJAEIALABQAKAAAGgHQAHgIAAgLQAAgLgFgHQgGgHgKAAQgGAAgGAEg");
	this.shape_60.setTransform(85.7,-11);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#9900FF").s().p("AgZAyQgLgKAAgRQAAgTALgLQALgMAPAAQAIAAAFACIAHAGIACgqQABgGAGAAQAGAAAAAHIgCAtIgBAVQAAAYACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgEgBgCgGQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQgBAKAHAGQAHAHAJAAQAFAAAEgCIAIgHIACgCIAAgMIAAgJIAAgIQgCgGgFgCQgFgDgGAAQgLgBgHAHg");
	this.shape_61.setTransform(72.2,-11);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9900FF").s().p("AgZAfQgLgJABgQQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHADAGAAQAFAAAHgCQAJgCADgDQACgFACAAQADAAADACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_62.setTransform(63.9,-9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9900FF").s().p("AAUA3IgDgQIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_63.setTransform(55.4,-11);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9900FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_64.setTransform(47.1,-9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9900FF").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_65.setTransform(39.4,-8.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#9900FF").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_66.setTransform(31.4,-8.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9900FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_67.setTransform(23.8,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.7,-23.9,283.4,47.8);


(lib.anim_couchset4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AUcp1QABgOABgLQABgNgDgLQgBgHAIgCQALgEANACQAMABAIAKQAIAJAAAMQAAAMgEALQgFAKgGAJQAAAAAAABQgDAEgFADQgFADgEACQgBgCgCgCQgIgJgIgIQgEgEgEgCgAU3paQAFAIgGAIQgDAEgEADQgEADgEADQgHAEgJgDQgKgFABgMQAAgGABgDAVnpLQgGAJgIAIQgJAIgNgEQgCAAgBgBQgBgCABgCAVnpLQAMgCABAPQABALgFAIQAAABAAABQgHAJgMACQgOAEgJgIQgHgHABgNIAAgBAVIpnQAGgIAMABQANAAAFAMQAEALgHAKQgBABgBABAN5rlQgFgBgEgCQgHgCgHgDQgLgFgLgFQgLgFgMgDQgHgBgGgCQALgCAMACQAOACANABQAMACAMACQAMACAJAFQACABAEABQgEgMgEgMQgCgJgCgIQgBgBAAgBQANAHAQAKQAHAFAFAGQACgHAAgIQAAgHgCgGQANAIANAMQAHAHAFAIQADAEACAFQABABgBADQAPgNAVgEQANgDAMgDQgIAPgIAQQgBADgCADQAdAAAdACQALAAALACQADAAADABQgPADgOADQgJACgIADQgBAAgDAAQAJAJAIAKQAHAKAGANQADAIgBAJQgIgHgJgHQgKgIgNgDQAHAKAGAMQAGAKABALQABAKAAAKQgKgGgIgLQgEgGgGgDQAEAIgBALQAAAMgEAMQgEANgDALQgCAFgCADQgDgFgCgHQgCgKgEgHQgCgFgEgFQgBgCgBgCQADgCAAAAAPxpfQgJgHABgNQABgMAAgLQABgNgBgLQAAgDAAgDQgFACgDAEQgCgRgFgSQAAgDgEABQgJAFgIAFQgMAIgKAEQABgNgBgNQgSAHgYABQAGgLgHgJQgFgGgHgIQgLAEgLgEQgLgEgIAEQgHAEgJABQgFAAgBAEQgBADgCABQgMAAgLACQgMACgJAGQgKAGgGALQgGAKgHAIQgHAHgFAJQgBACgBADQgEgHgHgFQgHgGgLgGQgKgFgLgFQgLgFgLgCQgLgCgMgCQgLgCgMAAQgMAAgMACQgMABgMABQgMAAgMACQgMABgLACQgNACgMABQgLABgLADQgLADgLADQgLADgLAFQgKAEgHAGQACACABABQAJAIAKACQAKACAMADQALADAHAKQAEAFADADQAIAHAKAGQAKAGAIAGQAJAGAJAHAOwqkQALgGAIAKQAHAHgEAIAN/p8QAHgDAGgEQACgBABgCANCp7QgCAJAIAJQAIAIAKACQANABAKgEQALgDABgNQABgFABgFQgDABgEABQgMADgMAAQgMABgLgDQgEgBgDgBQgIgDgGgDAP0poQABAEgEAFQAKAGACALQACAMgKAJQgIAHgJAFQAMgDAMADQALABALAHQAKAGAHAHQADADACADQABAAAAABQACADAAADQAGgIAFgGQAHgJAIgIQAJgKAGgJQAGgJAGgKQAGgKAEgKQAEgMAFgOQgDAAgDgBQgMgBgIgIQgIgJADgJQAFgMAFgJQAGgKAOgBQgBABAAABQgEAMACALQABALALACQAMABAKgFQAGgEACAAQgFgEgEgGQgGgLAJgJQAGgGAFgFQAAAAABAAQAHgIALgEQAAgDABgDQACgQAIgNQAGgIAHgHQAGgHAHgEQAIgFAHACQgEAIgDAKQgEAMgBAMQgBALgDALQgEALgGALQgBAAgCACQgHAJgFALQgFALAKAHQAJAGAMgDQABAJgEAIQgFAJgNgBQgNgBgJAGQgJAGgHAKQgDAFgDAGQgIAFgIAJQgHAIgGAKQgGAKgFAKQgEAIgCAEQgBAGgDAIQgCAFgDAFQgFAJgEAKQgDAJgEAIQgDAJgFAJQgDAFgFADQgHAEgHAFQgHAFgGAFQgBAAAAABQgEADgDADASxrRQAHADgBAKQAAAKgEAbATLq7QAIgIAMgBQANgBgBAOQgBAMgEALQgFANgKACQgBAAAAABARyq6QAEgLANgBQALgBARACASrqUQgJgCgIgFQgBgBAAAAARzp+QAJAAAHgFASanYQAFgHACgMQADgLAEgLQADgLAGgLQAFgKAGgIQAHgKAJgFQAJgGAHACQAAgFACgEQAFgLALgFQADgCgBgGQgDgOAMgFQAKgGAMAAQAHgBAGACATgo7QgCgBgCAAQAAAHADAHARjoJQgCAAgCgBARjoJQAJAEAHAGQAHAGAIAJQAJAIAHAIQAEAEAEAEQACACACADAUZlqQgFABgFAAQgYACgYAHQABgEAAgEQACgNgDgMQgEACgFAFQgJAJgEAOQgFgLgDgLQgCgMgHgHQAAAKABAKQAAAKgDAJQgHgDgHgGQgNgLgQgIQgJgEgIgCQgDgBgBAAQADAHAGAKQADAGABAEQgGgBgGgCQgOgHgRAAQgGAAgFABQgEAAgDABARblBQACgFACgDQAFgIAEgFQACgFADgCQgGAAgFAAQgTAAgSADQgIACgGACQADgHAHgDQAOgHANgJQgEgDgDgDAPgkDQACAEADADQAKAIAIAGQAJAHALABQADgGAAgGQAAgIABgHQAAgJAFgIQALgTAQgOQAIgHAJgEQgHgIAGgLQADgGAKACQANACACAMQAAADAAADQAFgDAFgDQANgFAPgDQAHgCAHgCQAFgCAGAAQAEAAADAEQADAGADAEQADAGAEAEQABACACABQABACACACQABABACABQgKgBgBAKAUUlhQgDADgDADQgFAFgGAFQgCACgEABQAKAHAKAHQAPAJALAKQACACAEADQgJACgMgGQgIgDgJAAQAHAKAJAQQAGAKADAKQABAGAAAIQgGgFgHgHQgBgBgBgBQgEgFgEgBQgDgGgEgEQgDgDgDgDQgJgGgKgCQgMgCgMgDQgMgEgHgDQAAgGgIgCQgCgBgCAAAQroLQgBABgCADQgGAIgFAIQgHAKgGAKQgFAJgGAIQgDADgCADQAAABgBABQAAAAgBABQgFAIgDAJQgCAGgEAHQgFAKgIAJQgGAIgHAKQgGAKgGAIQgHAIgEAKQgEAKgFAJQgHAKgEAKQgEALgDALQgCAJgCAJQgJAIgLAFQgJAEgMAEQgLADgKAFQgLAEgKAFQgLAFgJAHQgJAHgIAIQgHAIgHAHQgGAGgFAGQgGAAgIgCQgKgDgLgEQgLgDgMgEQgLgEgLgBQgMgBgLgEQgLgEgLgEQgLgDgKgDQgLgEgLgEQgLgEgLgGQgLgGgKgHQgKgIgKgGQgJgGgKgGQgKgGgKgGQgKgHgJgHQgJgHgKgGQgKgHgLgDQgOgEAAgJQAAgCAAgCQgEgKgCgLQgBgJgBgJQAAgDAAgEQgBgMAAgMQgBgLAAgMQAAgNADgKQAEgMAFgKQAFgLAHgKQAGgKAJgIQAIgJAJgJQAHgIAIgHQAGgGAFgFQgLgDgMgCQgMgCgLgDQgOgFgIAJQgIAIgGAKQgGAKgFALQgFALgEALQgEALgEAMQgEALgBALQgBAMAAANQAAAMAAAMQAAALABAMQABALABAOQAFgEAIgFQABgBATgFAPkotQgBAAgBABQgLAFgJgGAQjmuQgEAKAAAMQAAAMgBALQAAAMgCAMQgCAMgFALQgEALgHAJQgGAJgHAIQgIAIgIAJQgIAJgDAIQgBAEgBAEQgCAHABAHAPbknQgDAMADAMQABAHAEAFAOgkTQgBADAAADQgEALgDAMQgEALgEALQgEALgCAMQAAAEgBADAQJh1QABgCACgCQAIgHAIgJARPiwQgMAAgHAHQgHAHgCALAWChmQgJAHgJAIQgIAIgJAIQgHAIgHAHQgJAIgHAJQgHAIgKAGQgJAHgLAEQgLAEgKAGQgJAEgLADQgMAEgLAEQgIACgIAAQgDAAgDAAQgFgEgFgGQgGgFgKgGQgKgGgKgEQgKgFgJgFQgKgGgMgCQgLgDgMgEQgLgEgJgHQgKgIgJgGQgIgGgIgIQgHgJgHgHQgHgJgDgKQgGgCgIAMQgFAJgFAIQgHALgIAKQgHAHgHAFQgJAFgMACQgDABgDAAQgCABgDAAQgBAAAAAAQgIACgJABQgMABgMADQgLACgLAFQgKAEgKAEQgMAFgHAGQgDADgDAEQAOABALgBQALgCAMgCQAMgBAMAAQAFAAAFAAQACAMACALQABAMgCALQgDAMgGAKQgGAJgHAKQgHAJgHAIQgDACgCADQgDADgDADATDkrQAAADgCAEQgBACgDABATKkbQANgDAFAKQAFAIgKACAS3kAQgLABgKgEQgKgFgKgEQgJgEgKgFQgKgGAEgNQgIAMgJAJQgJAIgHAJQgHAHgFAMQgFALALAIQAIAGAMAAQANgBAIgDQAMgEAKgDQAKgDAJgHQAJgGAHgJQADgFAEgBgAT0jyQACgGAAgFAT0jyQgBAFgCAGQgEALgGAJQgGAJgLAFQgLAFgLAEQgLADgLADQgLADgLAEQgLAEgNAAQgMABgKgDQgLgCgMgBQAIAHAEALQAEALAAAMQAAAKgEAGQAMgHALADQAKACAKAEQAMAEAHAHQAGAHAJAIQAHAIAHAHQAIAJABALQABAOALgDQAGgCADgFQAFgIAIgIQAGgGAIgDQALgFALgCQALgCAMgCQALgBAKgEQAMgFAIgHQAIgGAHgKQAHgJAEgMQACgIAAgMQAAgMgEgMQgEgKgEgLQgFgNAOgEQAJgCAIAMQAFAKABAKQAAAHgBAGQgBADACADQADADACAEQAGALANgGQAJgFAIgFQAIgGAJgDQAKgFAKgGQAIgGAKgHQAKgHAKgEQADgCABAEQADAMgEAMQgBADgBACQALgKAGAJQABACAAADQAAAKgHAHQgBABgCACQgKAHgKAHQgFADgFABAUHkRQgBAMgGAKQgEAGgIADASdknQgEgDgCgHQgCgIgKACQgIABgBAHAVdn/QgEABgEABQgPACgGgJQgEgHACgJQACgIAGgGAVworQAIAGgBAMQgCAMgKAHQgGAEgIADQACAMAAAMQAAAKgDALQgDAMgGAKQgDAFgCAFQgFALgHAJQgHAJgGAKQgHAKgIAJQgGAHgHAHQgBABgBACQgCACgBAEAUZlqQADAAAEAAQgGAEgGAFAX4iXQAOgIgGAOQgFAMgKAGQgKAGgLABQgMAAgMADQgMAHgLADQgKADgLADQgLADgLgEQAAAAgBAAQgKgFgBgMAXqi6QgEAHgHAGQgCABAAACAX4iXQgFAGgHAEQgHADgIADAX1ilQAMgIgFAPQgCAEgCADAUYj/QgDgHgHgBAUvpDQAHAJAKADAHyu1QgBgCgDgBQgLgBgDgIQgBgBgCgBQgBgBgCAAQgQgGgRgCQACACAAACQgDgCgEgCQgBgBAAAAQgFgDgDgCQgGgDgFgBQgLgBgCAHQAIAJAHAKQAGAKACALAIFuqQgHgEgGgDQgCgCgEgCQAFALABAMQABAMAAAMAIvuFQACALgFAMQgEAKgGAJQgDADgCADAI3tsQgBgDgBgDQgDgGADgHQABgEgBgBQgEgGgHgGQgDgCgCgDQgFgHgIgDQgHgDgHgFQgCgCgDgBQACALAAANQAAAMgEALQgDAHgBAGAIduZQAAALgBALQgBALgFALQgFALgGAKQgEAFgDADAIjsxQAAgDABgDQAAgOgNgBQgMgCgLAFQgGADgGAEQgCABgCACQgGAEgHAEQAEgNAIgLQAIgLABgPQABgJgEgHQgFgJgJgGQgHgGgIgCQgYgIgYgBQgIAAgIAAQgMAAgKgCQgHgBgIABQgGAAgEAEQgBAAgBABQgBABAAABQgGAHgEALQgEALAAAMQAAANgEAKQgFAKgGAIQgGAIgHAJQgGAKgFAKQgFAJABANQAAAMAFAKQAGAJAKAGQAFADAGAFQALACANAAQAMgBAMAAQAMgBALgCQAIgCAFgEAI8tUQgBgGAAgEQgBgHgDgHQgCAMgIAKQgDADgDACAIjsxQAGgEAIgCQAMgEgBgMQAAgHAAgGQgFAKgKAGAHmsGQAMACALgCQALgEAIgGQAIgHAGgKQAEgHABgJAIAo3QACgDADgCQAJgJAHgHQACgCADgCQAHgFAIgCANYrNQAMgIAIAKQAEAGADAEALgqWQgDAIAEAJQAEALAHAKQAHAJAHAIQAIAIAHAHQAJAKAKAEQAEACAFgBAOAqcQgEgJgMgDQgPgDgCAMQAAAEADAAAGTvQQgCgBgCAAQgCgBgCAAQgEgCgFgBQgGgBgGgCQgNgDgMACQADADACAFQgDgCgEgBQgMAAgKAEQADACAEAEQAJAHAHALQAGAJAFAKQAFAMgFAJAHdvDQAHAKAAANQABAMABALAG0vMQAJAHAGAMQAGAKABAMAFivRQAIADAJAIQAIAIAHAIQAJAJAFAJAFyt2QgCACgCADQgFAIgCAMQgBAEAAADQABAHAFAEQACABADABQALABAJgIQAJgIABgNQACgNgFgIQgGgLgLAIQgFADgEAEQAMgCAEALQAEAMgMAHQgKAHgKgDIAAAAAGvtUQgCADgCAEQgBACgBADQAAABAAABQAAABABABQACAKAMgEQALgDAHgIQAHgIAEgKQAGgNgKgEQgEgCgFABQgIABgEAFQAAgBgBACQgBAAgBABQgBACgCACQgEAHgDAGQAIALAGgMQAEgJgGgJIABAAAGQtCQgNgDgGAKQgGAJANgBQAMgBALgBAG7tmQAAgBAAAAAgqsjQABAAABAAQABAAABgBQABAAABgBQAFgCADADQABABABABQABABABABQABACACABQADAAAEABQADAAACgBQABAAAAAAQACAAABAAQABgBACgBQABgBABAAQAAAAABAAQACgBACgCQAAgBABABQALACAKAEQABAAABAAQACAAADgBQAAAAAAAAQABgBABAAQABgBABgCQAAAAAAAAQACgCABgBQACgCADgDQAAAAABgBQABgBAAAAQAAgBABAAQAAgBAAgBQABgCgBgBQgBgBAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBABAAQABgDACgBQACgBAEgCQACAAABAAQACgBACAAQABgBABAAQAAgBABAAQABAAAAAAQAEgDACgEQAAAAAAgBQABAAAAgBQABgBAAgBQABgBgBgDQAAgBABgBQAAgBAAAAQAAgBgBgBQgBgDgBgCQgBgBAAAAQAAgEABgCQABgBABgBQABgCACgCQABgDABgCQABgBAAAAQABgFAAgEQAAgDgBgCQAAgBAAgBQAAAAgBgBQgCgBAAgDQAAgFABgDQAAgBABgBQADgCABgCQADgFgCgFQgBAAAAAAQAAgBgBAAQgEgBgEgEQgCgEAAgEQAAgBABAAQAEgFABgGQAAAAgBgBQgBgCgCgBQAAgBgCAAQgDgCgFAAQgCAAgBgBQgCgCgEgCQAAAAgBgBQgBAAAAgBQgBgBAAAAQgBgBAAgBQgBgBAAAAQAAgBAAAAQgBgCAAgDIAAgBQABgBACgBQABAAABgBQAAAAABAAQABAAABAAIABAAQABgBABABQAAAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAgBAAgCQAAgCAAgCQAAAAAAgBQgBAAAAAAQgCgBAAgBQAAgBgBAAQgBAAAAgBQAAgBgBAAQgBgBgBABQgGAAgGABQAAAAgBAAQgBAAAAABQAAAAgBABQgCACgBACQAAABAAAAQgBADgDgBQgCAAgDAAQAAAAgBgBQgCgBgCgBQgBAAgBgBQgBgCgBAAQgBAAgBgBQAAAAgBAAQgBgBgCgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgBgBgBQAAgBAAgBQABgEAEABQABAAABAAQACAAACgBQAAAAABAAQAAgBAAAAQABgBAAgCQAAgBAAAAQgBgBgBgBQAAgBgBAAQgBgBgBAAQAAAAAAAAQgCgCgDABQgDAAgDAAQgBAAgBgBQgCgCgCgCQAAAAgBgBQgBAAAAAAQgDgCgCAAQgBAAgCAAQAAgBAAAAQAAgCAAAAQACgCgBgDQAAgBAAAAQAAgBgBgBQgDgDgFABQAAABgBAAQgBABgBAAQgBABgBAAQAAAAgBABQAAgEgBgCQAAgBgBgBQAAgBAAgBQgBgCAAgDQABgEgDgBQgCgBgCACQgEACgCADQgBABAAABQgBADACAEQABACAAADQAAAEABADQABAAAAABQAAADgCAAQAAAAgBAAQgBABAAAAQgBAAgBAAQgCAAgCgBQgBAAAAgBQgBAAAAAAQAAgDAAgBQgBgBAAgBQAAgCABgBQAAAAAAgBQAAAAABAAQACgCAAgDQAAgBAAAAQAAgBAAgBQABgCgBgBQgBgBAAAAQAAgEgCgCQgBgBgBgBQgBgBgBgBQgBgBgBgCQgBAAgBAAQgBgBgDAAQAAAAAAAAQgCAAgBgBQgDAAgBABQAAAAgBABQgDAAgCACQAAABgBAAQAAABgBAAQgCAAAAACQABAAgBAAQgBACAAADQAAACAAACQAAAAgBAAQgFABgGgBQgCAAAAgBQAAgBgBgBQAAgBAAgBQgBgDACgDQAAgCABgBQABAAABgBQAAgBABAAQABgCgCgDQAAgBgBAAQgBgBgCAAQgDAAgDAAQgDgBgBACQgCABgCABQgBAAgBACQAAAAgBABQgBAAgBABQgBAAAAACQgCADAAAFQAAAAgBABQgDABgDAAQgBABgBAAQgBAAgCAAQgCAAgCAAQAAAAgBgBQgEgCgDgEQAAAAgBgBQAAgCgBgCQgBgDADgCQACgCgDgBQgBAAgCAAQgCAAgBAAQgCAAgBACQAAAAgBAAQgBAAAAABQAAACgBABQgBAAAAABQAAAAAAABQgBABAAAAQAAABgBAAQgBABAAABQgBAAAAABQAAAAgBABQgBABAAAAQAAABgBAAQgBAAAAABQgDABgDgBQAAgBgBAAQgBgBAAAAQgBAAgBgBQgBgCABgEQAAgDABgCQAAgBABgBQAAAAAAgBQAAAAgBAAQgDgDgEACQgDABgDADQgCADgCADQAAABAAABQAAAFABADQABADgDABQgEACgEgCQgBAAgBgBQgBgDgBgDQgBgDAAgCQABgEgDABQgDABgCABQgBABgBAAQgCABgBABQgCABAAAEQAAADAAADIAAABQABABAAABQABABAAAAQgBACgCAAQgCgBgBAAQgBAAAAgBQgBAAgBgBQgBgBgBAAQAAAAgBgBQgBAAAAAAQgBgBgBgBQgBAAAAgBQAAgBAAAAQgBAAgBgBQAAAAgBAAQAAAAgBABQgBgBAAABQgBABgBABQgBABgBABQgDACgCADQgBACABAEQAAACAAADQABAEgDABQgBABgBAAQAAAAgBAAQgCAAgBABQgBABgBAAQgFABgDgDQAAgBgBAAQgBgCgBgDQAAgBgBgBQAAgBgBAAQAAgBgBABQgCgBgDAAQgBAAgBABQAAgBAAABQgDABgDABQAAAAgBABQgCACgBADQgBACgBADQAAABAAABQgBADACADQABAAAAABQAAABAAAAQAAACgBABQgCACgDACQAAABgBAAQgDAAgCAAQgDABgBgBQAAgBgBAAQAAAAAAgBQAAgBgBAAQAAgBgBgBQgBgCABgDQAAgDgBgBQgCgBgCABQgBAAgBAAQgBAAgCAAQgBABgBABQgDACgEACQgCABgBABQgCABACACQAAAAAAABQABABAAAAQAAAAABABQACAAACACQABAAAAABQACABACACQABABAAAAQABAAAAABQACABABADQAAAAAAABQAAABAAABQAAAFABAHQAAgBABgBQAAAAAAgBQABgBAAgBQABgBAAgCQAAgBABgCQAAgDgCgCQgBgCAAgBIAAgBQgCgEgDgCQgBAAAAgBQAAgBAAgCQAAgBAAgBAEvqlQgFgBgEAAQgMgBgLgCQgMgCgMgCQgCAAgCgBQgJgGgJgFQgKgGgLgBQgMgCgMABQgMACgLAEQgMAGgGAIQgDgCgFgDQgJgHgMgCQgMgCgMgBQgMAAgKADQgLADgIAHQgDgBgCgCQgHgGgIgFQgFgEgGgBQgMgCgKABQgNAAgMgBQgNgCgLgCQgOgEgBgMQgBgLAFgHQAGgKAHgJQAGgKAEgKQACgHABgHQAAgBAAgBQAAgEAAgDQgCgLgBgLQAAgBAAgBQABgCACgCQAAgBAAAAIAAgBQAAgDgBgBQgBAAgBgBQgBAAgCgCQAAgBAAABQgCgBABgCQAAgBABgBQACgCACgCQABgCABgCQAAgBAAgBQAAgDgCgCQgBAAgBgBQgBgBgBAAQgCgDgDgBQAAgBgBAAQgBgBAAgBQAAAAAAgBQAAgCABAAQADgDAEgDQADgCgBgDQAAgCAAgCQABgDgCgBQgBAAgBgBQAAgBgBgBQgDgDgDgBQgBAAAAgBQgCgBgBgCQgBAAAAgBQABgCAAgBQAAgCAAgCQAAgCgBgBQgBAAAAgBQgBAAAAgBQAAAAgBAAQgBgBgBAAQgBgBgBgBQAAAAgBgBQgBAAgBAAQgHAAgGABQgBAAAAAAQgBABgBAAQgDABgDACQgCABgEgBQAAAAgCAAQgDAAgCgBQgBAAAAgBQgBgCgBgCQgBgBAAgBIAAgBQgBgCgCgCQAAgBgBAAQgEgCgFABQgCAAgBACQAAABgBABQAAABgBAAQAAABAAAAQgEABgCgCQgBgBgBAAQgDgCgBgBQAAAAgBAAQgBgBgBAAQAAAAgBAAQgEgBgDAAQgBAAgBABQgCAAgBABQgDAAgBACQgCACAAADQAAADACACQAAAAAAABQgBABgBAAQgCADgDgBQgCgBgBgBQgCgBgCAAQgBgBgCgBQAAgBgBABQgEgBgCACQgBAAgBABQgCAAgBACQgBAAAAAAQgCACgCACQgBADADABQABABAAAAQACAAgBADQAAABAAAAQAAADgDABQgBAAgBABQgBAAgBAAQgFAAgEAAQgBABAAAAQgCACgDACQgBABgBABQgBABAAAAQAAABgCABQAAAAAAABQgBACADAAQABAAABABQAAAAACABQACACgBADQAAADgDABQgBAAgBAAQAAAAgBABQgBAAAAAAQgCACgCACQAAAAAAABQAAABgBAAQgBADABAEQAAAAABAAQABABABAAIAAAAQABAAABABQAAAAABAAQABAAAAABQABABAAABQAAABAAABQABABgBACQAAABAAABQgBAAAAAAQgBACgDABQgCABAAABQgBAAAAABQgBABAAAAQAAABAAABQgBACACAAQABABABAAQABABABABQABABAAAAQABABAAABQAAAEgBAEIgBAAQAAAAgBAAQgBABAAABQgBABAAAAQAAABAAABQgDgCgCABQgHABgGAFQgBAAAAAAQgBADgDAEQAAABAAABQAAABAAABQgBABAAACQgBABABABIAAABQgBABgDABQAAAAgCABQgCABgCACQgBABAAABQAAAAgBABQAAABAAAAQgCACgBADQAAABAAAAQAAACACABQAFADAAAHQAAADgDABQgBAAgBABQgCACgDACAEvqlQgFADgFADQgKAFgIAIQgJAGgKAEQgKADgKACQgLABgMACQgNABgKACQgMACgMgEQgLgEgLAAQgMgBgKAEQgKACgHAEQAFgDAGgFACLqtQACABABABABlp5QABAAABgBQABAAABAAQgCAAgCABgAARpQQALAAALgBQALgBALAAQAMAAALAAQANAAALABQAMAAALABQALABAMAAQAMAAAMAAQAMAAAMAAQAMAAAMAAQAEAAAEAAQgFAGgDAGQgFAKgFAKQgGALgBAMQgCALgBAMQgBAMgBAMQgCALAEALQADAMAFAKQAEAJADAMQAEAKgDAMQgDALgEAIQAFAKAIAHQAIAIALAEQALAEALAEQALAFALADQALAEAGAEADqpPQAIAAAJAAQABAAADAAADqpPQACgCACgDAGfqdQgFgFgDgIQgFgMAFgJQAFgLAHgGQAHgIAIgFQAKgGAJgGQAKgGAHgHQAJgIAHgIQgBgBAAAAQgMgDgDgMAGFsQQgKAGgNgCQgKgCgIgKQAEANACALQABALAHAGQAIAHAIgHQAJgGAEgMQACgLAGgLQgFAEgFADgAFNrUQgBACgBADQgCAKgFAJQgFAKgIAHQgEADgEADQACAAACAAAELk7QAKgFALgEQAKgDAKgDQABAAABAAQALgDALgEQAMgDALgGQALgFAKgGQAKgGALgGQABgBABAAAB6lVQgHgEgGgDQgLgEgKgEQgLgEgLgEQgLgEgLgEQgLgFgLgGQgKgFgKgHQgJgHgIgEQgGAEgFAFQgIAHgIAIQgJAIgFALQgFAKgCAMQgCAIAAAXQACAAACAAQACAAABgBQAAAAAAgBQABAAABAAQABgBABAAQABgBAAgBQABgBAAgBQAAgGACgGQABgCADgBQADgBACAAQACgCAEAAQABAAABAAQADgCACACQAAABACAAQADgBADABQABAAAAABQAAAAABABQAAAAAAABQAAACABACQABAAAAABQABAAAAAAQAFABADgDQADgDACgDQABgCABgBQABAAAAAAQACAAACgBQABgBACABQAEgBAEACQAAABAAAAQADACABADQAAAEgCADQAAAAAAABQAAADAAADQAAABABABQABABABACQACABABACQACABACACQABABACAAQABAAABAAQAEADAGgBQABAAABAAQABAAAAgBQABAAABAAQAEgBAEgBQACAAABgBQAEgBAFABQADAAACAAQAEAAACAEQAAABABABQABAAAAABQAAACAAADQgBACACAAQAAAAABABQAAABADAAQADgBACAAQACAAABgBQABgBAAAAQAFgFAHACQABABABAAQAAAAAAAAQABABABAAQACAAACADQAAAAAAABQAAAAABABQAAABAAABQAAABAAACQAAABAAAAQAAABAAABQAAACgCACQAAABgBAAQgBACAAACQAAABAAACQAAABABABQABAAAAABQABAAABAAQAGABAHADQABAAABABQAEAAACAEQAAABAAABQABADgCABQgBAAgBABQgBABAAAAQgCACgDAAQgBAAgBABQgBAAgBABQgBAAgBADQAAABgBABQAAADACADQABABACABQABAAAAAAQABABACAAQAAAAABABQAAABADABQAAgBAAABQADADABACQABAAAAABQAAADAAADQgBAEACADQABACACABQABAAAAAAQAAABABAAQACAAACABQABAAABAAQABAAACAAQADAAAEAAQACgBACAAQADABACABQABAAABAAQACAAAAACQAAABAAABQABAAAAABQAAADACADQABAAAAABQAAADAAAEQAAAAAAABQgBAAAAABQgBAAgBABQgBABgBAAQAAABAAAAQgBACgBABQgBAAAAABQAAAGACAFQAAABAAABQAAAAAAABQgCACgEACQgBABgBABQgBAAgBABQgCAFAAAGQAAAEgBADQgBABgBAAQAAABgBABQgBABgBACQgBABgBABQAAABgBABQgCABgDABQAAAAgBAAQAAABgBAAQgBAAAAAAQgBABgBAAQgHAAgHgCQAAAAgBAAQgDAAgCACQAAAAgBAAQgDAAgBABQAAABgBAAQgGAAgDgEQAAgBAAgBQgCgCAAgCQAAgBgBgCQgBgGgGACQgDAAgCABQgDABgDABQgCABgCABQAAAAAAAAQgCABgBABQgBABgBACQAAAAgBABQAAAAAAAAQgBABgCAAIAAABQAAAFAAAFQAAALgCALQgDAMgIAIQAAAAAAABQAfAAAeACQAcACAeAFQAdAFAbAEQAQACAQACQgDgFgDgEQgGgKgHgJQgHgKgEgLQgFgNgIgDQgDgJgFgKQgFgKgCgLQgCgIgCgJQgBgLAAgLQAAgBAAAAQgBgNABgMQAAgMADgKQADgLAGgKADZkKQgIgJgJgIQgIgIgIgHQgJgIgIgGQgJgGgKgGQgKgGgJgHQgDgCgEgCADXl/QgLAEgJAGQgKAHgJAFQgLAGgLAEQgKADgJAEQgCAAgBABQgBAAAAAAQgCABgCAAQgCAAgDABADZkKQAFgJAHgIQAIgJAIgIQAGgGAHgFQABgBABAAQABgBABAAQACgBADgBQAHgCAGABQALABALAFQAKAFALADQAMADALADQAMAEALACQAMADALAFQAKAEAKAFQALAFAKAHQAKAHAIAJQAHAIAIAIQAJAHAGALQAFALAEAJQACAFACAGQgEAIgKAHQgKAIgKAEQgLAEgMACQgHABgHABQgEABgEABADZkKIAAAAQgBACgBABQAAgBABAAQAAgBABgBgAAujqQABgEgBgEQgBgBAAgBQAAgEgCgDQgBgCABgDQAAgBABgCQAAAAABgBQACgCABgBQABgBABgBQABAAAAAAQAMgBAMAAQABAAABAAQACgBABAAQABgBABgBQAAgBABgBQAAgCAAAAQABgCAAgBQAAgDgCgCQAAgBgBAAQgBgBgCgCAA/jiQgBgFADgEQABgBAAgBQAAgBABAAQACgCAAgCQABgBAAgBQACgCACgBQABgBABAAQADgCAEABQABAAACABQAEAAADABIABAAQADABACgBQABAAABAAQAFgCAAgFABJjUQAFAAAFgCQABAAAAAAQABAAAAgBQABAAAAgBQABgBAAgBQAAgDABgCQAAgBAAAAQAAgCABAAQABgBACAAQACgBABAAQAEgCADABQACAAABABQABACADAAQABAAABAAQACACACgCABXjGQADgBACgDQAAgBABAAQACgCACAAQABAAAAAAQADgBABAAQAFgBAFgBQAEgBADACQABABAAABQABAAAAABQAAABACABQAAAAAAAAQABABAAAAQABABAAAAQABAAAAAAQACABACAAQAAAAABAAQABABAAAAQAEAAAEAAACxi3QgBAAAAABQgBAAAAAAABQixQADgDADgCQAAgBABgBQAEgCAEgBQAGgDAIAAQABABACgBQAGgBAHAAQABAAABABQADACABABQACABACADQAAAAAAABQACABADgBQABAAAAAAQABgBAAAAQADgDAEgBIABAAQABgBACABQACgBAAACABUihQACABAAgCQABgBAAAAQAEgEAGAAQACAAACAAQACgBABAAQADAAACgBQAAgBABAAQAEAAABABQABAAAAABQADABAAAFQAAABABACQABAAAAABQACABABAAQAHgBAFgEQAAAAABgBQABAAABgBQACgCACABQADAAACAAQABABAAAAQACABABABQAAABABAAQACADABACABUiQQADAAADgCQABAAACgBQABAAABAAQABgBABAAQAHgBAIABQACgBABABQABAAAAABQABABAAABQABABAAABQAAABAAAAQAAACACABQACACAFgBQABAAABAAQADgBADAAACyi4QAHgFASgFAGniRQAGAGAFALQAFAKAIAKQAIAIADALQAEALADALQADAMADALQADAKACAMQABABAAACQACAJAAAKQABAEABAHQAGgEAGgEQAKgFALgGQAEgCAEgDQAGgDAGgDQAIgFAJgCQgBgBgBgBQgIgJgIgIQgFgGgEgFQAFADAIAAQAMgBAMgDQAKgEAJgGQAKgHALgEQALgEALgFQAKgFAMgCQALgBALgBQAMgCAMgDQAFgBAGgCQgBgFgBgEQgDgLgFgLQgFgKgHgIQgHgIgKgEQgLgFgLgCQgMgDgLgDQgLgEgLgEQgLgDgMgBQgLAAgLAAQAGgCAGgCQAMgFAMgDQAFgCAFgCQAFgCAEgBQACgBACAAAHui0QABAGABAFQACAJgBAJQAIgIAJgGQALgJALgHQAHgFAIgEAMPi3QgEADgDADQgIAHgGAIQgHAIgIAIQgJAJgIAIQgJAJgIAIQgBABgCACQgCABgBACQgCABgBAAQgBAAgBABQAAACAAADALGhtQgBALACALQABAMAEALQADAKAHAJQAGAIAJAIQAIAIAKAHQAIAGALAGQAJAEAJAFQAKAHAIAFQAEADAEADQgBABgBADAMJhEQAJgGAIgHQAJgHAMgEQALgFALgBQALgCAMgBQACAAACAAAJDlDQAKAJABAKAM2AZQAFADAFAFQAIAIAJAIQAKAIAHAHQADADACADQgCABgDAAQgFABgFAAQgZgCgSALQgQAJgLAMQgHAHgEAHQgBABAAABQgCADgBADAM2AZQAAgCABgBQADgLAGgJQADgGAEgEQgEABgDACAKVAkQACgCABAAQAKgGAKgGQAKgHAKgGQAJgGAIgFAKBArQAJAHAKAHQAIAGAKAGQALAHAIAGQAJAHAJAIQAJAIAIAJQAIAIAIAIQAGAFAJAGQgGABgFABQgMACgMAAQgMABgKAGQgKAEgHAHQgJAHgHAJQgIAIgHAHQgJAHgKAHQgKAGgJAGQgKAHgMAEQgLADgMAAQgMABgMgCQgLgCgLgCQgMgEgKgEQgKgFgLABQgMgBgLAFQgMAEgFAJQgGAKgFAKQgFALgFALQgFAKgIAIQgIAJgJAJQgJAIgKAEQgLAFgMAEQgDABgEACQAFAHAFAHQAHAMAMABQAEAAADgCQAEgFAHACQAEABAEABQAGACAHAAQALgBAJgEQAJgEAHgFQAHgFAFgFQAFgFAEgFQAGgHAIgHQAEgFAFgEQAGgGAHgHQAIgGAJgEQAIgDAJgCQALgDALgDQAFgCAGAAQAGgBAGAAQAHAAAIAAQANAAAMgCQAJgBAHgCQANgEAPgEQAPgFAQgFQASgFARgFQAMgEAMgEQAMgDALgIQALgBAKgCQABgBABAAQAJgCAIgDQALAGAHAIQAIAJAEAKQAFAKADALQADALACAMQABAMAAALQAAAMgBAMQgBALgDAMQgCAMgBANQAAAFgCAGQgCAJgCAJQgBABAAAAQAAACgBABQAAABAAABQgBABAAABQgEAJgEAJQgFAJgGAKQgGAJgHAKQgHAJgHAJQgGAJgJAJQgJAIgFAJQgGAJgIAKQgGAKgGAJQgGAKgGAJQgGALgGAJQgHAJgFAJQgGAIgGAKQgGALgJAHQgIAHgEAKQgCAEgCAEQgBACgBACQgCAEgCAEQgFAKgGAKQgHAKgFAJQgHAJgEALQgFAMgFALQgBADgBACQgDAMgDAMQgDALgDAMQgDALgCALQgDALgCAMQgCALgBAMQgCALACAMQgFgLgJgIQgJgJgKgHQgJgHgKgGQgJgFgKgFQgKgGgKgGQgLgGgLgFQgJgEgIgEQgLgFgLgGQgKgFgLgGQgIgEgJgDQgCgBgCAAQgBgBgCAAQABgOAAgMQgBgMAGgLQAGgKAGgKQAHgKAIgGQAKgIALgEQALgEAKgFQALgEAKgEQALgEALgEQAKgFAKgFQAIgFAHgFQACgCACgCQAEgDAFgEQADgEAGgEQAEgEAFgFQAKgJAHgLQAJgNACgQQACgLgBgLQgBgHgCgGQgBgFABgEQgCgFgBgFQgDgLgGgKQgGgKgHgIQgHgKgIgIQAMADAKAFQALAEALAFQAKAEAJAHQAJAGAIAHQAKAIAJAHQAJAHAFALQAEAIgBALAMACAQgEgCgDgEQgFgKgHgHQgIgIgIgIQgIgIgIgIQgIgJgKgGQgKgGgJgGQgLgIgIgCQgFACgHACQgEABgEACQgHACgHACQgLAEgMADQgHADgIAAQABgDgBgCQgEgKAAgMQgCgMgGgKQgGgJgHgJQgGgIgHgIAMACAQACgCABgCIAAAAQgDADAAABgAMgCKQgGgEgFgGQgIgIgGgEAL7CNQAGgBAHAAQAMgBAMgBQACABACABQAIAEAFAHANiBHQAIAJAGAKQACADABADQAEAFADAGQAHAJACALQADANgGAKQgFAIgIAJQgIAIgHAGQgJAIgKAGQgKAFgKAEQgDABgDACAIMg4QgCgDgCgCAJNA0QgEADgFACQgLAFgJAFQgLAHgDAIQAIAFABAJQACAOgNAAQgGgBgFABQgEAAgDACQgHABgGgBQgKgCgIgHQgDgCgCgCQgMgEgJAIQgIAHAGAKQgMgFgGAIQgMgCgKAGQgMAHAHAIQgFAFgGACQgLAEgNAAQgMAAgMgCQgMgCgDAIQgDAKgGAIQgGAJgJAGQgJAHgLACQgLADgLACQgMACgLADQgLADgLAEQgLADgKAGQgKAFgJAGQAJAFAHAHQAIAIAGALQAFAJAFAKQAFAJABANQAAALgFAKQgFALgJAHQgJAHgKAHQgJAHgMAEQgGACgFADQgLAEgKAFQgLAFgKAEQgLAFgLAFQgLAFgLADQgMAEgJAIQgIAGgJAJQgBAAAAABQAAAAgBABQAAAAAAAAIgCACQgBACgCABQgEAFgEAFQALgBALAEQAKAEAMACQAMACAMADQALADAMADQALAEALAEQALAEAMABQAKACALACQALACAKAEQAMADALAEQAKADALACQAMACAMADQAMADAJAGQAKAGAKAGQAJAHAKAGQAKAHAFAJQAFAJAEALQACgLADgMQADgMAFgKQAFgMAEgLQADgMAHgHQAJgJAIgIQAIgIAKgHQAJgGAMgCQALgBALgCQAMgDAMAAQAMAAAMACQALABALAEQALAEALADAIiBSQgMgBgMgBQgLgBgKgEQgFgCgHABQgMACAFALQADAHAFAFAH+CHQgCAAgDAAQgNAAgLgCQgMgCgCgLAIVBuQABAOgHAGQgHAFgKAAQAAAEAAACQAAAIgJAEQgKAEgMABQgOAAgHgHQgGgJgGgJQgDgGAGgEAMPDYQgLAAgKAFQgCABgEAAANUGZQAAACgBABQAAABAAABAHFAcQgGgFgHgBQgNgDgKAIQgIAFgFAKQgEAGgBAHQgGgEgFgEQgIgHgKgDQgIgCgIgBQgDgBgCgBQAAABABABQABACADgCAHhALQgEADgEACQgJAGgHAHQgCgBgCAAAHJAdQgBABgBABQgBgBgBgCAHHAfQABACABACAGNA+QAAABAAABQgBAOALACQAMACAMAAQANAAALgGQALgGAEgLQAFgLgIgLQgEgGgGgCAFdAgQgNABgLABQgNABgOgBQgLAAgLABQgMACgMAAQgDgBgFACQgHgKgIgHQgJgHgLgFQgKgFgLgEQgLgEgMABQgNAAgLACQgMABgNAAQgMgBgHgHQgHgKgKgFQgJgGgKgEQgLgFgKgDQgOgEgIgBQABgFACgFQgBAAgBAAQgMACgLACQgLABgMAAQgMAAgMgCQgMgCgKgDQgLgDgKgEQgJgEgKgFQgJgFgIgIQgCgCgCgDQgDgFgCgFQgEgLgDgLQgCgHAAgIQgBgEABgEQACgBADgBQABgCACgBQAFgBABgDQAAgBAAAAQAAgCAAAAQgCgCgBgBQAAgBAAgBQgCgDgBgDQAAgBAAgBQgBgCgBgCQAAgBABAAQABgDACgBQADgCABgDQAAgBABAAQABgBABgBQAAgBABgCQAAAAABgBQAAgDAAgCQAAgCAAgBQAAgBgBAAQAAgBgBgBQAAgBAAgBQAAAAgBAAQADgCADgCQABgBAAAAQABAAABgBQADgBACgBQADgDgBgEQAAgCAAgCQAAgDgCgDQAEgBADgBQACgBABAAQABgCADAAQABAAABgBQACgBACgBQABAAAAAAQAEgBABACQAAABACAAQABAAAAAAQAAABABAAQABABABAAQAEAAADgBQAAAAABgBQAAAAAAAAQABgDAAgCQAEABAFACQADAAACgBQAAgBAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABgBABAAQABAAAAAAQABgBAAAAQABAAABAAQACAAAAgBQABgBAAAAQADgBABADQAAAAAAAAQAEACADgBQABAAABAAQAEABACgCQABgBACAAQABAAAAAAQABAAABAAQACABAAACQAAABABAAQABABADAAQADABAEgBQACgBAAAAQABgBABAAQABAAABAAQABgBABAAQADAAABgBQABAAABgBQABAAAAAAQADgBADABQAAAAAAAAQABAAABAAQABABAAABQAAAAAAAAQAAACAAACQAAACABABQACABACABQAAABABAAQADAAADABQACAAAAAAQADAAACABQABAAABAAQAGAAAGACQABABAAABQABAAAAABQACAEAAAGQgBACACABQABAAAAAAQACAAABABQABAAABABQABAAAAABQACAAABACQAAAAABABQACABABACQABAAAAAAQAAABAAABQAAABgCABQAAAAgBAAQAAABAAABQABADADABQAAAAAAABQABABACAAQAAAAAAAAQABACACABQAAABAAAAIABABQgBABgCAAQAAAAAAABQAAACgBABQAAABAAAAQAAABAAABQgBADgCABQgCACABAEQAAACAAACQAAABABABQABAAAAABQABAAAAABQAAAAAAABQABAAABABQAAAAABABQAAAAAAAAQABABAAgBQAAALAAAKQAAAGAAAHAEKgyQADAFADAGQAGAIAIAJQAKAIAIAHQAJAIAKAHQAIAGAFAEQAGAHAHAHAE2BtQAJgEAJgDQALgDALAAQAMgBALACQADgKAGgKQAHgKAIgIACfDFQAFgDAHgEQAKgHAKgEQAKgFAMgDQALgEAKgFQALgGAKgGQAKgGAHgIQAIgJAIgGQAJgHAKgEQACgBABAAQgGgBgHABQgNAAgLgCQgMgCgJgGQgFgDgDgFQgGgMgMACQgLABgKAEQgLAEgNgBQgLgBgMAAQgMAAgKgBQgMgCgLgCQgLgCgKgFQgLgFgEgHQACgFACgFQADgJAAgJQAAgNgEgKQgFgLgIgJAE2BtQAGAAAFAAQAEAAAEAAAGPA3QgBADgBAEAGVA5QgEgBgCgBAHKCXQgHACgJgCQgLgCgJgHAD0AmQABACABACABwAbQAGAJAKAJQAJAIAMgGAC2DcQgBgEgDgDQgHgHgMgJIAAAAQgIgDgJgEQgKgFgLgFQgKgFgJgFQgKgGgKgEQgLgFgLgEQgLgEgNABQAAgEgBgCQgEgHACgIQACgLAKgIQAIgHAGgIQAGgJAGgJQADgFADgGAC2DcQgDAAgDgBQgHgDgIAAQgIAAgIgBQgNgBgMAFQgEACgDACQgVAJgRAOQgIAGgFAKQgQALgLADQgMACgMABQgLACgEALQgCAGABAGQAAADABAEQAAAHAAAHQAAADAAAEQgBAGgCAHQgDALAFAIQAEAGAHgBQALgCAIgIQAHgHAJgIQAIgIAJgFQAJgGAJgGQAKgHALgFQALgGAJgFQAFgDAIgBQABAAACABQAHAFAFAFQACACABADQACACABACACfDFQgCABgBABAA+EGQAEACAEACQALAFAKAEQALAEAKAEQAJAEAJAFACREvQgMABgKAEQgMAEgKAFQgKAEgIAJQgHAIgGAKQgHAJgGAKQgHAKgGAKQgGAKgHAIQgIAJgKAGQgKAGgLAFQgLAEgLACQgMADgLAEQgMAEgLACQgBgBgCgBQgLgDgLgBQgMgBgMgEQgLgDgLgEQgLgDgMgCQgMgCgMgCQgLgBgMgCQgLgDgMgBQgBAAgBAAQgIgCgGgFQgHgHgIgJQgIgIgGgKQgGgKgHgJQgGgKgEgKQgEgJgEgMQgDgKgDgMQgDgMgHgJQgHgJgFgIQgFgJgIgIQADAAACAAQABgBABAAQABAAABAAQAIABAHAAQAEAGAFAGQAHAJAJAIQAIAHAJAGQAHAFAJgDQALgFABgMQACgNgHgHQgHgIgGgGQAJgGALgEQAMgFALgDQALgDAMgCQALgBALgBQAMgCAMgBQALgCALgBQAMgCAMAAQALAAALAAQANgBALAFQAKADALAFQAMAEALAGQAKAEAKAFQALAFAJAFQALAEAKAFQALAFAKAEQAGACAHADADFDsQgIgLgHgFAIgIGQACgLgEgIQgBgCgCgBQgHgDgJABQgLABgLADQgLADgLAEQgLAEgKAIQgJAHgHAKQgHAJgGAJQgHAKgGALQgFALAAAMQAAAMAHAJQAIAJALADQAMADAMgBQAMgBALgFQALgFAIgIQAJgIAHgJQAHgKAGgJQAHgKAEgLQADgLAAgLQAAgBAAAAQABgIgDgGQAAAAAAAAgAAAJCQAGABAGACQAMADALADQALAEAMADQAMAEAMADQALADAMAEQAKAEALADQALADALADQAMACAMACQAMABAMADQALACAMABQALACALAAQAMABAMACQAMACALABQAMABAMABQAMACAIAIQAFAEACgCQAFgJAFgLQADgJAFgMQACgDACgCQAHgKgEgLAH8ImQgGANgIAIQgKAKgKgEQgNgFAHgMQADgFAEgFQAGgIAKgCQAQgCABAMgAB2LvQANgDANACQAMACAMACQAMABALADQAMACALACQALABANABQAKABAKADQAMAEALAEQALAEAMACQAMAAALACQAMACAMACQAGACAFABQAMACALADQAGABAFABABqLWQACgHgCgIQgCgMgCgJQAAgFgCAAQgKgFgHgKQgHgJgKgDQgCgBgBAAQgBAAgBAAQgIgCgHAAQgGgIgGgIQgHgKgEgKQgGgLgFgKQgFgLgHgJAB2LvQgCgCgBgCQgGgKgDgLQAAAEgCAEQgDAJgIADQgBAAgBABQgCAAgCAAQAIAEAHALQAGAKAHAKQAGAKAHAKQAHAKAGAJQAGAJAGAKQAGAKAGAJQAGAKAFAIQACADABACQABABABACADaNrQgCgDgBgCQgHgIgIgIQgIgIgHgIQgIgJgJgJQgHgIgHgKQgHgIgGgJQgHgKgHgJQgFgHgEgIACeOJQgDgCgEAAQgLgBgMgBQgMgCgMAAQgMgBgLAAQgNAAgMADQgFAAgFACQgFgMgIgIQgCgBgBgBQgHgGgLABIAAAAQgMABgJAHQgJAHgDAMQgCAMACAMQACAMAHAIQAIAKAJAGQAKAGALAAQAGAAAEgCQgEAJgOgDQgMgDgLAAQgMgBgMgCQgFAAgEgDQgKgGgFgKQgFgLgCgMQgBgIABgIQgLAAgLAAQgMAAgMAAQgMAAgLgBQgMgBgMgBQgLgCgLgCQgKgCgLgBQgLgCgLgCQgLgCgLAAIgSgCIgEAAQACAAABAAIgFgBQgDAAgBgBQgLgDgNAAQgMAAgMABQgMgBgMAAQgLgBgLgCQgIgBgHgBQgDgBgCgBQgCgBgCABQgBAAgBAAIAAAAQgBAKgFAHQgDAEgCAEQgBABgBABQgCgCgBgBACeOJQACAAABABACzNyQgIADgFAFQgHAGgBAJQAAACAAAEQAAALAEALQABADACADQgDgBgDgBQgLgCgMgCQgLgCgMAAQgLgBgMAAQgMAAgMAAQgJABgJgBQgBAFABACQABALgFAKIAAABQgDAFgFADACzNyQADgBAEgBQAMgFANAAQADAAAEAAQAIgBAIAAQALgBANABQAIABAIADQADABACACQAKAGAFALQAFAKAFALQAFAKgDANQgBALgKAGQgCABgBAAQgEADgGABQgHAAgFADQgNgHgFgLQgEgLABgMQABgMADgKQACgJAFgHQAGgGAIgEQACgBADgBAH1IWQADAAACABQAMAEgKALAIiIVQAAgJgCgGAITH1QADAFAEAFQAEADACAEAIlKQQADgHAKgEAHdgTQAdgEAQAKARqhVQAIAIAKAHQAGADAFAEAO0gwQABALgBAMQAAAMgNAAQgHAAgHAAAAGvdQgDgBgDACQAAAAgCABQgBAAgBAAQgCABgCABQAAAAgBABQgDADgCACQgBABgBABQAAABgBAAQAAABAAACQAAAEAAADQAAABAAAAQACACgBADQAAADgDACQgBABgCABQAAABgBAAQAAAAgBAAQgFABgEgEQAAAAAAAAQgBgBgBABQgCAAgBACQgBAAgBABQgGADgCAHQAAABAAABQAAABAAABQAAABAAABQAAADgCABAgsuVQAGABAFgDQABgBABAAQACAAABgDQAAgCACgBQABAAAAgBQAAgCABgBQAAgBAAgBQgBgCACAAQAIgDAIABQABABABAAQADAAADAAQABgBABgBQAAAAABAAQABgCACgDQABgDABgDQAAgBAAAAQABgDgCgCQAAAAAAgCQAAgBACAAQABgBABAAQAAgBABAAQADAAADAAIABAAQAEgBACgCQABgBACgBAA5usQgCAAgCgBQgCgBgCAAQgCAAgBAAQgFgBgDACQgEADgDADQAAABAAAAQAAABAAABQgBABAAAAQAAACgBABQAAABAAAAQgBACgBACQgDAEgEADQgDADgDADQgCABgBAAQgBABgCABQgBAAgCAAQgCAAgCgBQgBAAAAAAQgBgBgBAAQgBgBAAAAQgBgDgCAAQgBAAAAgBQgBgCgDACQgDACgEADQgBAAAAACQgBACgCABQgBAAAAACQgBAAgCABQgBABgBABQgBABAAABQgBAAgBAAQAAABgBAAQgEAAgDgBAA2vQQACgCADgCAhAwFQgCACgCACQgCAAgBACQgCABgBACQgBABAAACQgCAEgBAEQgBABAAACQAAACABABQAAABAAABQABAAAAABQABACACABQAAAAABABQABACABACQACAEgDADQgBABgBACQAAABgCABQgCAEgDADQAAABgBAAQgCADgDACQgCACAAADQgBAAAAACQAAAFACADQABABAAAAQAAABAAABQAAACgBAAAhAu4QABgDABgEQAAgCAAgBQAAgEACgBQAFgDAHgCQABAAAAgBQABgBABgBQACAAAAgCQABgCABgDQABgEgBgEQAAgBAAgBQAAgDgCgBQAAAAgBgBQgBgCACgCQABgBABAAQAEgCAEAAQAFAAACgDQAAgBABgBQAAAAAAAAQAAgCAAgBAh0u7QABAAABgCQABgBABgBQABAAAAgBQABgBACgBQACgCAAgDQAAgBABgBQABgCAAgCQgBgDAAgBQgBgBgBgBQAAgBAAAAQAAgBgBgBQgBgBgBgBQgBgBAAgCQAAgCAAgCQgBgEAEgDQACgCACgCQAAgBABgBQABgBAAgCQAAAAABgBQAAgBAAAAQAAgBAAgBQAAgEgDgDQAAAAgBgBQgCgDABgDQAAAAAAgBQABgDADgCQACgBABAAAgnt1QAAABABABQAAABABABQACABAAABQABAAABABQAAAAACAAQAFAAAGgBQABAAABgBQABgBACgBQABgBABgBQABgBABgBQABAAAAgBQAAgBABAAQAAgBABAAQABAAAAgBQAFgDAGAAQACAAACAAQABAAABAAQABAAACABQABAAACAAQABAAACABQABAAABAAQAFAAACgDQABgBABAAQAEgCADgEQABgBABgBQABgBABgCQAAgCACgBQABgBABAAQABgCACgBQACAAABAAQABgBABABQACgBACABQABAAAAABQAGACACADAiCtAQAAgMAMgFQANgGAHAJQAGAHgFAHAgitOQABgBADAAQABAAABABQAAABABABQABAAAAABQACABABAAQACAAABABQAAAAABAAQAFACAEgDQABgBABAAQAEgBACgCQADgEAGgCQABgBACAAQACAAACgBQABAAACAAQADAAADAAQABABAAAAQABAAABACQABAAAAABQABAAABABQACABACABQABAAABAAQAEAAADgEQACgBACgBQABgCABgCQAAgCABgBQAAgBAAgBQABAAAAAAQAAgBABAAQABgBAAABQAFgBAEAAABMt0QgDAAgBgCQAAAAgBAAQgFgCgHABQgBAAgBAAQgBABgBAAQgCAAgBACQAAABgBABQgEAFgFAHQAAABgBAAQgCADgEgBQgCAAgCAAQgBAAgBgBQgCgBgBgCQAAgBAAAAQgCgBgCgCQAAAAgBgBQgBAAgBAAQgDAAgEABQAAABgBAAQgBAAgBAAQgBABgBABQgCACgCABQgDADgCADQgDACgCADQAAAAgBABQgEACgGgBQgBAAgBAAQgBAAAAgBQgBgBgBABQgBgBAAgBAgis4QACABADACQABABABAAQACABACABQABABABAAQACABABgBQACgCADgDQABAAAAgBQAEgEACgDQACgBABgBQAAgBABAAQADgDAFADQACAAACABQAAABABAAQABABAAAAQAAABACABQABAAAAABQACACAEABQAEAAADgCQABAAACgBQACAAADgCQADgCACgCAhptpQAGgLANACQAIABABAIAipwMQgBABAAACQAAAGAEAFQABAAABABQABABAAABQADACADAAQABABABAAQABABABABQABAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQgBABgBABQgDABgBADQAAABgBABQgCACABADQAAABAAAAQAAABABABQABABAAAAQACAAABABQABAAABABQAEADAEACQABABACABQACAAAAABQABABAAAAQACACAAADQABABAAAAQAAACAAACQAAABgBABQAAABAAABQgBAAgBACQAAABgBAAQgCADABABAiKwJQgEAAAAADQAAACAAABQgBAEACACQABABABAAQABAAAAABQABAAABABQACAAABABQABABABAAQABABAAAAQABABAAAAQABAAAAABQABABABABQAAAAAAABQABABAAAAQABABgBACQAAABgBABQAAABgBABQgBABgCAAQAAABAAAAQgBABgCABQAAAAAAABQgBAFADAEQAAAAABABQAAAAABABQAAAAABAAQABABAAABQAAAAAAAAQAEAFACAFQABADgBAEQAAACgBABQgCAEgDADAjCwDQgBAEACADQAAABABABQAAABAAAAQABABABAAQABABAAAAQABAAABABQABAAABABQACABACABQAAABAAAAQAAACgBADQgBABAAABQgBAAgBABQAAAAAAABQAAAEABAEQAAABABAAQAEAFAFACQABABAAAAQABAAAAAAQABABABAAQABAAAAAAQABABAAAAQABAAABAAQABAAABACQAAAAABAAQABABAAABQABACACACQACABABABQAAABABABQABABABABQAAABABABQABABAAACAiau1QgBgGgDgFQgBgCgBAAQgBgBgBAAIAAAAQgDgBgBAAQgBgBgBABQgCAAgDAAQgBAAgCABQAAAAgBAAQgCAAgBABQAAABgBAAQgEAAgDgBQgBgBgBAAQgDAAgBgBQAAAAgBgBIgBAAQgCgBAAgBQAAgBgBAAQgCgCAAgEQAAgDABgDQAAgGgDgCQAAAAgBgBQgBAAgBAAQgBAAgBgBQgBAAgCgBQgBAAgBAAQgEAAgBAAQgCgBgBABQgDAAgCgBQgBgBgBAAQgCgBAAgCQAAAAAAAAQgCgCAAgDQAAgDABgDQABgBABgBAkAvqQAAAHAFAFQABAAAAABQAAAAABABQABAAAAABQACAAABAAQADABADAAQADAAADgBQABAAACAAQADgBABACQABABAAABQAAAAAAABQABABAAABQABABABABQABACgBAEQAAABgBABQAAABAAAAQAAABgBABQgBADAAADQAAABABABQAAABABABQACADAEAAIABAAQACAAADAAQAFAAAEABQADABADAAQABAAAAABQADACADACQABAAAAABQABACACACAjCujQAAgDgBgCQgBgBgBgCQAAgBgBgBQAAgBgBAAQgBgBgBAAQgBgBgBAAQgDgCgDADQgBAAgBAAQAAAAgBAAQgCAAgCABQgBAAgBAAQgCAAgCAAQAAAAgBAAQgDgBgCgDQAAgBgBAAQgCgCAAgBIgBgBQAAgBAAAAQgBgCAAgBQAAgBAAgBQgBgBgBgBQgBgBAAgBQgCAAgBgBQgDgCgEABQgCAAgDABQgBAAgBAAQgDABgDAAQgCABgDgBQAAAAgBAAQgDgBgBAAQgBgBgBgBQgBgBgBAAQgBgBgBgBQgDgEgCgBQgBgBAAAAQgBgBgBgBQgBAAAAAAQgBgBgCAAQgBAAgCgBAkvvEQgCACgDACQAAAAAAAAQgCABgCAAQgBAAgCAAQgBgBgCABQAAAAgBgBQgBAAAAAAQgCAAgCgBQgCAAgBgBQgCgDgEABQgBAAgBAAQgBAAgCABQgBAAgBABQgFABgEADQgBAAgBABQAAAAAAABQAAABgBACQAAAEADAAQABgBAAABQABABACAAQABgBACABQAEAAAFAAQACAAACABQACAAAAADQAAABgBABQgBABAAACQAAABAAAAQgCABgBACQAAAAgBABQAAABgBABQAAAAgBAAQgEACgFgBQgBAAgBABQgBAAgBABQgBAAgBABQgCACgCACQgBAAAAABQgBABgBAAQgBABgBACQAAABgBABQgBABAAAAQgBADABABQAEADgBAEQAAABAAAAQgBACgBABQgDACgCABQgBAAgBABQAAAAgBAAQAAABgBAAQAAABgBAAQgCABABACQAAACAAABQABADACABQABAAAAABQABABABABQABAAAAABQADADACACQAAABABAAQACACAAADQAAADgCACQgBABgBAAQAAABgBAAQgBABgBAAQgBABgBAAQAAABgBAAQgBAAAAAAQgCAAgBACQAAAAgBABQgBACAAACQAAACABADQABAAAAAAQABABABAAQABABAAAAQABABABAAQAAABABAAQACAAABABQABAAAAABQABAAAAABQABAAABABQACACgBAEQAAABAAAAQgDACAAADQAAACABACQAAAAAAABQAAABAAAAQABABABAAQABABABAAIAAAAQAHAAAHAAQABAAAAABQAAAAABABQABAAAAABQAAABAAAAQABAEgCADQgCACgCADQAAABAAABQAAABgBACQgBABAAACQAAABAAAAQAAABABACQAAABAAABQAAADAEADQADABADgBQAEAAABACQAAAAABABQAAAAAAAAQAAADABABQABAAABABQABABACAAQABABABAAQAEABADABQADABABAAQADABAAACQAAACgBACQAAAAAAABQAAACAAACQAAABAAABQAAACACgBQABAAAAABQABAAABAAQAEABAEAAQADAAADgBQABAAAAAAQACgBABgBQABAAAAAAQAGgBAGAAQABAAAAABQABAAAAABQABAAAAAAQABADAAAEQAAAAAAABQAAABABAAQAAABAAABQAAABABAAQAAABAAABQAAAAABAAQACACABABQAAABADAAQABAAABAAQADAAAEgBQABAAAAAAQABAAAAgBQADAAACAAQAAAAABgBQAAgBACAAQAAAAAAAAQABgBAAAAQABgBAAgBQACgDAAgEQAAgBAAgBQgBgDAAgCQAAgBAAgBQABAAAAgBQAAgDAAgDQAAgCABgBQAAgBAAAAQABgCAAgBQAAgBAAAAQABgBAAgBQACgBABgCQABAAAAgBQABgCABAAQAAAEAAAEQABAMAIAJQAIAIAHAGQAFAGAGAEQADABADACAk7uyQAGABAGgBQABAAABgBQABAAABAAQABAAACAAQAIAAAFAFQACABACAAQABAAAAAAQABADADACQABABAAAAQACACADAAQAEgBAEgBQAFgDAHABQACAAACAAQABAAAAABQADACACACQAAABAAAAQAAABABAAQAAABAAAAQACABADABQABABABAAQACABAEAAQACAAABgCQAAAAABAAQAHgBAGABAjcuHQgHAAgHgCQgBAAgBAAQgCAAgBgCQAAAAAAAAQgBgBAAgBQgBAAAAgBQgBgBgBgBQAAAAAAgBQgCgBgDAAQgBgBgCABQgBAAgBABQgBABgBABQgBABgBABQgBAAgBABQAAAAgBABQgBAAgBAAQgEgBgCgBQgBgBgBgBQAAAAgBgBQgBAAgBgBQgCgBAAgDQAAgBAAgBQgBgBAAAAQAAgBgBAAQgBAAAAAAQgDgBgCACQAAABgBAAQgBABgCACQAAABAAAAQgDADgEAAQgCAAgCAAQgCAAgCABQgCAAgBgBQAAgBgBgBQAAAAgBgBQgBgDgBgDQAAAAgBgBQAAgBgBAAQgEgCgGAAQgLABgLAAQgDAAgCACQAAAAgBABQgCABAAACAlnt6QADAAACAAQACABABgBQACAAABAAQABAAACgBQAAgBACgBQABgCACgBQACgBADABQABABACABQABABACACQABABAAAAQAEADAGABQAFABAEgDQADgEADgCQABgBABAAQADAAADABQABABABABQABAAABABQAAABABABQAAAAABABQACABADAAQAEAAACgDQABgDACgDQABgCABAAQABgBAAAAQAEgBADADQABABACACQABABAAABQABAAAAAAQAAACACAAQABAAAAAAQAGADAFgDQABAAABgBQAGgDAGADQABABACAAAjit0QgFABgEAEQgCABgBABQgDACgDgBQgBAAgBgBQgCgBgDgCQgFgCgGABQgDAAgDABQgFACgEAFQAAAAgBABQgCACgDgBQgBAAgCgBQAAAAgBAAQgDgEgEABQgBABgCAAQgDgBgCADQAAACgBAAQgBACgBACQgBAAAAABQgBADgEAAQgCgBgCAAQgCAAgCgCQAAAAgBgBQgBgBAAgBQgCgFgHABQgDAAgBAAQgBABgCABQgBAAgBACQAAAAgBABQgDAEgDAEQgBABgBABQgEAEgFACQgCABgDAAAlftFQAFABAEAEQAAAAACAAQADAAAEAAQABAAACgCQACgDABgEQAAgCAAAAQABgBABgBQABgCAEAAQAFABACAEQABAAAAABQAAAAABABQAAAAABAAQAAABAAAAQABABABAAQACAAACAAQAEAAABgDQAAgBABgBQABgCABgEQABgCACgDQAAgBACgBQABAAABgBQABAAABAAQABgBABAAQABAAABAAQAFAAAEgBQABAAAAgBQADgDACgDQAAAAAAgBQACgBADAAQABAAABAAQAFgBAFAAQADAAAEAAQADgBACABQAAABABAAQACAAABgBQABAAABAAQAEAAAAgFAjftfQgHgCgHAAQAAAAgBAAQgGACgFADQgBAAgBABQgDABgEACQgBAAgCABQgBAAgBABQgEACgEACQAAAAgBAAQgBABAAACQAAACgCABQgBABAAABQAAADgCACQgBABgBABQgBABgBAAQgCACgBADQgBAAgBACQAAACgBABQAAABAAABQAAABgBABQgBABgBAAQgEAAgDAAQgCAAgBgCQAAAAgBgBQgBAAAAgBQgBgCgBAAQgCAAABgCQgDACgBADQAAABAAAAQAAAGABAEQABACgCACQAAABAAAAQgBABAAAAQgCABgBACQgBAAgBAAQgBABAAAAQgBABgDAAQgGAAgFgBQAAAAgBAAQgCgBgCAAAkssAQACgBABAAQABgBABAAQADgDADgCQABgBABgBQABAAAAgBQABAAAAgBQABAAAAgBQABgDAAgCQAAgEgCgDQgCgCgCgBQgBAAgBAAQAAgBgBAAQgDABABgEQAAgCADgCQABAAAAgBQADgCADAAQABAAABAAQACgBACAAQACAAAAAAQABAAABAAQAFAAADgDQABgBAAgBQAAAAAAgBQABgFgDgCQgDgCACgDQABgBAAgBQACgCADgCQABgBACAAQABgBABAAQADgCADAAQAHAAAHAAQABAAABgBQADgCADgDQABgBAAgBQACgDAAgDAieteQgGgKgNAEQgJADgCALAjcs2QABABABACQAAABAAACQABABAAAAQADABgBAEQAAABAAABQgBABgBABQgBAAAAABQgBABAAAAQgCABgCABQAAAAgBAAQAAABgBAAQgBAAAAABQgBAAgBAAQAAABgBAAQAAACABAAQAAABAAAAQABACABABQABAFAAAEAiwsxQAAANAFAKQAFAKAHAJQAHAJALAEQAKAFAMgBQAMgCAKgGQAFgCAEgEQAHgHAFgKQAFgKABgMQABgHgCgEQgFAIgJAFQgDABgDABQgMAFgNAAQgLAAgIgCQgKgEgKgEQgIgEgIgCQgCAAgDABgAi+rbQAHAHgGAMQgFAKgLADQgLAEgMAAQgNABgLgCQgNgCgLACQgMACgLAFQgLAFgLAFQgGADgDAFQgBABgBACQgBACAAAEQABAGgHAFQgIAGgLABQgLABgJAEQgIADgIAFQgHAEgIAEQgJAFgLABQgJADgIAFQgKAGgJALQACAAACAAQALACALAAQAMAAAMAAQAMAAAMACQAMACAMgCQALgDAMgBQALgCAMgBQAMgBALgCQAEgBACACQACADACADQAIAJAIAIQAFAFAHAFAjisgQAAAEAAADAkkpVQgCgHABgHQACgJAJgIQAJgHALgGQAKgGAMgDQALgCALgCQAMgDAMAAQAMAAAMAFQALAEAKAGQAKAGAKAIQAJAGAKAHQAIgGAIgHQAHgGAKgGQAJgFALgCQAMgDAMABQAMABAMACQAJACAJAFQADACACACQAGAGACAIQADALgFALQgBAEgCADQgDAHgEAGQgDADgDAEQgGAGgKACQgCAAgBABQgMACgLAFQgLAGgNAAQgLAAgqgKQgDACgDADQgKAGgLAFQgLAEgNACQgLAAgMAAQgMgBgKgDQgLgEgLgEQgLgFgLgGQgBAAAAAAQgCgCgCgBQgBACAAADQgKAEgJABQgLACgNAAQgLgBgLABQgMAAgMgBQgLgBgMAAQgMAAgMAAQgVADgKAEQgMAEgJAEQgIAEgKAIQgCABgCACQgBAEgBAEQAAADgBACQgDAHgGAHQgHAJgJAGQgJAGgLAEQgLADgLABQgNAAgKAEQgFACgEAEQgIAIgGAJQgDAGgFAFQgCACgCACQgIAHgNgCQgMgCgJgEQgJgFABgOQAAgDABgDQABgJAFgGQABgCACgCQAFgEAIgCQALgDALgEQAKgDAMAAQAGAAADABQgGgHgEgGQgFgIACgOAgMspQADgDAFAAQAEgBACADQACABACACQADABAEgBQAFAAAEgDQABgBACgBAhupnQAAAGgDAHAhupnQABgDAAgCQgBgFgBgFQgEgMgEgKAAOp7QAJAFALABQALABANABQAMAAAMgBQALgCAIgDArCsWQAAgGgCgHQgCgMgEgKQgCgFgDgCAqsspQgCgIgCgHQgCgDgCgCAnapRQAAgGABgEQgCgFgBgHQgCgLgHgGQgCgHgEgFQgHgJgHgEQgKgGgJgEQgKgEgIgHQgHgGgFgJQgGgLgCgMQgBgMgFgIQgFgJgIgJQgGgJgIgIQgHgHgKgIQgJgHgIgFQgKgGgJgEQgJgFgMABQgJgBgGAEQAAAEABAFQAAAFgBAFQAHgGAMACQAMACALAEQALADAJAHQAJAHAHAJQAHAJADALQADALABALQABANAFALQAEAJAIAIQAIAJAKAFQAKAEALADQAMADAGAIQAKALAGAJApQqDQABgFAAgEQgBgNgBgLQgCgLgDgLQgCgLgGgJQgGgKgGgJQgHgKgJgGQgIgHgJgHQgKgHgpAPIAAAAQAKgFAFgMQADgHAAgHArCsWQAJgJAIgHQACgCADgBArUsQQgBgBAAgBQgFgLgFgJArEr3QACgKAAgMQABgEgBgFQgFAVgNgPQACAJgDAIQgBABgBACAq+r3QABACAAADQgHAJgKAEQgLAEgKAGQgKAGgEALQgEALgBALQgCALABAMQAAAMAEALQACAGACAGQABABAAACQAAAAABABQABADABADQAFALAFALQAFAKAGAKQACADACAFQgBABABAEIABAAQgBAAAAAAQAAgDAAgCArtp2QADgNACgLQABgMAAgLQgBgOACgKQACgLAHgJQAGgHAMgDQALgDACgNQABgEAAgDAq6rDQgJgKgJAMQgCAEAAAFAqkrYQgDgQANgBQADAAABABAqjrJQAMgCAIgHQAEgDACgFQAEALABALQABAHAAAHAq1qcQAHAHALgBQANAAAKgFQAKgFAJgGQAJgGADgLQgBALAAAMQABAKABALQABAJgDAHQgFAIgMACQgNACgHgIQgIgIgHgHQgHgGgFgLQgEgCgDgDIgBgCAqwpTQACALgIALQgGAJgHAHQgGAGgFAFArapzQABACACACQAHAJAJAHQAJAHAJAEQADABACAAQAJADAJACAvMl3QAMgBAKACQALADAMAAQAMAAAMACQAMAAAMACQAMADAMABQAMABANAAQALABANABQALABAMgBQAGAAAGgCQAJgCAEgMQAEgKAFgLQAFgLADgLQAEgLADgLQACgLAEgMQACgLAEgMQAEgLAIgJQAHgJAKgDQAJgDAKABQABAAACABQAEgBADgBQAGgDAEgFQAFgKgBgNQAAgNgFgKQgFgLgKgDQALABAMACQANAAAJgDQAKgDAHgKQAEgFADgGQgCALAHAIQAIAJAJAEQAEACACABQAHgLALgGQAEgCAFgBApSq6QADAKAFALQAFAKAGAJQAHAJAIAGQAJAHAKAGQAJAGAIAHQABACABADApZpmQACgEABgEQABgDACgDQACgIABgHAnapRQgFgBgFAAQgMgCgMgCQgLgCgNAAQgHAAgHABQgCgBgBgCQgEgIgKgGQgKgGgHgEQgIgGgEgLAnRpQQgEgBgFAAAnVoqQAMgBAMABQAMAAAMAAQAMAAAMAAAnVoqQAAAJgBANQAAAEgBAEAo9nmQAAgIAFgIQAGgLAIgKQAGgIAIgFQAKgFAGgFQAHgGAIgCQABgDABADQAHgBAHAAQAMAAAMABAnan/QAJAHAFAKQAFAJAFAMQAEAKAFALQAFALAEALQADAKADALQADAMADALQABAHABAGQAAAFABAGQAAAIgBAHQgDAAgDADQgJAKgOABQgNACgOgBQgOgBgOAAQgOgBgOgCQgKgBgJgDQgIgDgJAAQABgDABgDQAEgMgBgMQAAgLgFgLQgEgLgIgIQgJgJgIgHAmil1QAHAHAIAIQAHAHAMAFQAKAFAMAEQAFACAFACQAGACAHACQALAEAMAAQADAAACAAQgFACgEAFQgDACgCAEQgKAMgJAPQgEAFgCAEAlglNQAIgKAKgGQAKgIAJgFQAKgGAJgHQAEgDAFgEQgCgBgBgBQABgCACgBQAJgHALgEQAKgDAKgHQAKgHAMgGQAAgBAAgBQgBgJgBgKQgBgMAAgMQgBgMgGgJQgGgIgHgIQgGgJgEgKQgFgKAAgNQABgIABgGArRo5QACACACAEQACAFgBAHQgBACgBADQgDAKgFAIQgHAKgGAJQgFAIgCAGIAAAEQgEAGgDAGQgIAMgGANQgGANgCAOQgCAOADANQABALAEAFQgCgCgCgBQgGgIgNgHQgGAEAEAFQgFgEgJgBQgDAHAFAHQgJgEgGgHQgGgHgFgJQgCgLgEgLQgDgLADgMQADgMAGgIQAHgJAJgHQAIgGALgGQAJgGAIgIQAIgHAJgJAqFndQAEgIADgJAqFndQgBACgBACQgFAKAEALAuzlTQAKABAKACQANACAMABQAMAAAMACQAMABAMADQALADAKADQAMACALACQAMACAMABQAMAAAMAAQALAAAHgKQACgEADgEQAFgJAFgKQAFgJAGgKQAGgLAFgJQAFgKAEgKQAEgLAEgIQAFgKAFgKQAFgKAGgJQAFgIALgCQAEgBAEACAo2lXQgHADgJAIQgEADgGAFQgJAGgJAIQgIAHgJAIQgKAHgJAHQgLAHgHAHQgCABgCADQAFgCAOgEQAHgCAGAAQAFAAAFAAQAMABAMABQAMABALADQAMADAJAHQAEADADAEQAFAEADAGQACACABAEQAEgHAEgGQAJgNAMgJQAOgMAUgFQALgEAMgCQAOgCAOABQAWAAAUAHQADABACABQAOAFAIALQACgEACgCQABgCACgCQAEAHALAHQAKAGAKAGQAIAFAKAFQgHAGgGAHQgHAIgHAGQgCABgBACQglgHgTgVQgSgVAWgXAonj4QACgDABgCAonj4QgBACgCACQgHAKgHAJQgIAJgIAHQgJAIgKAHQgLAFgKAHQgLAGgJAIQgJAHgFAKQgCgBgCAAAp8kPQgIAFgGAKQgHAKgIAIQgIAJgHAIQgIAJgGAKQgHAKgHAKQgGAJgEAKQgFALgEALQgDAMAKAEQALAEALACQAMACAMACQALACAMAEQAKAFALAEQALAEALAFQALAEAKAFQAKAEALADQAMADALAEQALADAKAHQAJAGAHAKQADADACAFQgKAFgMAEQgKAEgMAEQgLACgKADQgMAEgIAGQgFACgEAGQgDgBgDABQgCAAgCABQgLABgKAFQAAAAgBAAQgLAFgBAKQAAACAAABAqSiXQAHAEAIAFQALAFAMABQALABALACQAMACALADQALACAHAIQAIAHAIAHQAJAHAIAIQAHAIALAGQAJAFAKAHQAJAGAKAFQAJAFAKAGQACACACACQACgCACgCQAIgHAIgHQAIgIAFgHQAFgEAGgEQAKgHAIgHQAIgIAHgKQAGgKAGgLQAFgKACgLQACgMABgMQABgMAFgIQAGgIAHgGAkaiZQgGAHgGAFQgIAGgIAIQgIAIgIAFQgKAHgKAGQgKAGgJAGQgJAHgGAJQgGAKAGAJQAagIAdgJQAagHAfgDQAdgDAdgEQAdgEAeABQAHAAAKgBQAAANABAMQACAPgMgFQgKgFgIgGQgIgHgNAAQgMAAgLAEQgMAEgLAEQgKAEgIAJQgIAIgJAIQgKAIgLADQgLACgLAAQgMAAgLgDQgMgDgLgFQgKgFgJADAgMo0QAFAKgBAMQAAAMgDAKQgDAKgFAIQgHAKgDAJQgEALgBAMQgBAMAEALQADAKAEAIQgJAGgLAGQgKAEgMAEQgLADgMAAQgMABgMAAQgMAAgMAAQgLAAgMAAQgMgBgLgCQgLgDgKgDQgLgDgHgJQgCgCgBgDAhHk3QgMgQgJgCQgMgDgLgDQgLgDgMgCQgNgBgLADQgMADgIAJQgCADAAADQgBgFgDgEQgBgFgDgHQgFgIgKgGQgTgMgWgIQgMgEgNgBQgJAAgFgCQACgCACgBAi4k7QACAAACgBQACgBAAgCQABgBAAgBQAAgBABgBQAAgBABAAQAAAAABgBQABAAAAgBQAEgBAEAAQABAAABAAQAEgCAFAAQABABABAAQABABABAAQABABAAAAQABABAAAAQABACACABQABABACAAQACABABAAQACAAABgBQAAAAABgBQAAAAABgBQAAgBABAAQABgCACAAQAEAAAFABQABAAABABQACACABABQACABABABQADACADABQACAAACAAQABAAABAAQADABABgBQAAgBABAAQABAAACAAQAEgBAEACQABABABAAQACABADABQADABAEABQABAAABABQABAAACAAQAAAAABAAQAAAEAAAEQgDAEADADQABABABAAQACAAABACQABABACAAQABAAAAAAQAAABABABQABAAAAAAQAAABABABQAAAAAAAAQAAABAAABQAAACgDABQgBABgBAAQAAAAgBABQgBAAgBAAQADAFAFACQABAAABABQAAAAAAAAQABAAABAAQACABAAACIAAABQAAABAAAAQAAABAAABQgBABAAAAQAAABgBAAQgBAAAAABQgBABgBABAgPmWQABgBACgBQACABACABAgMmYQABgBACgBAAIlDQgCADgEABQgBAAgBABQgBABgCABQAAAAAAABQABADABADQAAAAABABQAAAAAAABQABABAAABQABABAAABQAAABAAAAQABADgBACQgBAAAAAAQgCADgDABQgCAAgCABQgBABgBABQAAABAAABQgBAEACADQAAABABAAQABABABABQADACAAADQAAAEgBAEQgBACAAABQgBACgCAAQAAAAgBABQgBAAgCABAgYmjQAFAGAHAFAkAoxQgDABgCABAiCk1QgDADgDADQgBACAAADQAAAEAAADQABABAAABQABABAAAAQABABABAAQAFACAFABQABAAAAABQABAAAAABQABAFgDACQgBABAAACQABABAAABQAAABAAABQAAACAEABQABAAABAAQAAABABAAQABAAAAAAQABAAABAAQADABACACQAAAAABABQABABAAAAQACADABADAh/jsQgGgDgHgDQgBAAgBgBQgBgBgBAAQgBAAAAgBQAAAAgBgCQgBAAAAgBQgCgGACgFQAAgBABgBQACgCgBgEQAAgBAAgCQAAgBgBgBQgBgBgBgBQgBAAAAAAQgBgCgBABQgCAAgDAAQgBAAgBAAIAAgBQgDgBgBgBQAAgBgBAAQgDgCgEgBQgCgBgBAAQgBgBAAAAQgDgEABgEQAAgDABgBQACgCACgCQABAAABgBQACgCgCgCAjmkiQAAAAAAgBQgBgDACgBQABgBAAAAQAEgEAFgDQADgCADgCQAAAAAAAAQACgBABgBQABgBACgBQADgCADgCQABAAAAAAQACAAAAAAQABAAAAAAQABgBACAAQABAAABAAQACgBACAAQABAAABABQABAAABAAIAAABQAAgDAAgCAjVkdQABADAAAEQAAABAAACQABACABACQABABABAAQAAABAAAAQADACAEAAQABAAAAAAQACABACgBQAAAAABAAQAEgBACACQAAABABAAQADAAABACQAAABABAAQABABAAACQAAACgBAAQgBABAAAAQgBACAAABQgBABAAAAQAAABAAAAQgBABAAABQAAACADABQABAAAAAAQACABABAAQAEAAAEgBQABAAABAAQABAAABAAQAEgBACADQABAAAAABQACACAAAEQAAAAAAABQAAAAgBABQAAABgCACQgBAAgBABQAAABAAAAQgBACABABQABAAAAABQABACADAAQADgBADABQAIAAAHAAQABAAAAABQACACABACQAAAAAAABQAAABAAABAiMjOQgBgCgEAAIgBgBQgCgBgDABQgBAAgBAAQgBABgBAAQAAAAgBABQAAAAgBABQAAABgBAAQgBABgBAAQAAABAAAAQgBABgBAAQgBgBgBACQAAABgBAAQgDABgDgCQgBgBgCgCQgBgBgBgBQgBgBgBgBQAAgBAAAAQAAgGAAgFIgBgBQgDgCgCAAQgCgBAAABQAAAAgBAAQgBAAAAABQgDAFgCAFQgBAAAAABQAAABgBABQAAAAAAAAQgCACgBABQgBAAgCAAQgHABgEgGQgCgCAAgEQAAgDABgDQAAgBABgBQACgDAAgDQAAgDgDAAQgDAAgCACQgBAAgBACQAAABgBABQgCADgDAEQAAABgBAAQAAABgBABQAAAAAAABQAAAAgBAAQgBABgBAAQgDACgDABQgBAAgBABQgEAAgCgDQAAAAgBgBQAAAAAAgBQgBgCAAgBQgBAAAAgBQAAgDAAgDQABgCABAAQAAgBAAgBQABAAAAgBQACgDgEgBQgCAAgDAAQgDAAgDgBQAAgBAAAAQgBgBgBAAQAAgBgBgBQAAAAAAgBQgBgBAAgCQgBgDABgBAkMjWQAAAEABADQABACADACQABABACABQABAAAAABQABABAEgBIAAAAQABAAABAAQAAAAABgBQACgCAEAAQADgBACADQABACgBACQAAAAgBABQAAABAAAAQgBACACABQABABABAAQAAABABAAQADAAAEAAQABAAABgBQAAgBAAAAQABgBAAAAQABgBAAgBQABAAABgBQAAgBABAAQABAAAAgBQAGgDAEADQABAAAAABQABACAAADQABABAAABQABACAEABQABAAACAAQADAAACAAQACAAACgCQAAAAAAAAQABgBABgBQABgBAAAAQAAAAABAAQAAgBABAAQADgBAEABQABAAAAABQACAEgBAEQAAAGAFAAQACAAACgBQABAAABgBQACgBACgBQABgBAAAAQACgBACgBIAAgBQADAAAEgBQADAAACACAkaiZQgCgEABgDQAAgBAAgBQABAAAAgBQABAAAAgBQABgCABgBQAEgCABgCQAAgBABAAQACgCAAgDQgBgDAAgEQAAgBgBAAQgCgCgBgBQgBgBgBAAQgBAAgCgBQgBAAgBAAQgCAAgBgBQgCgCgCgCQgFgDgCgEQgBAAAAgBQAAgDACgCQAAgBABgBQAAAAABgBQAAAAABgBQADAAACgCQAEgDAAgGQAAgBgBgBQgBgBAAgCQAAgBAAgBQgBgCABgBQABAAAAgBQABgCABgBQABgBACAAQABgBAAABQAEgBAAgEQAAgBAAgBQABgCAAgDQAAgCgBgCQAAgEABgCQABgBAAAAQAAgBABgBQAAgBABgBQABgBACgBQADgCADAAQABAAAAABQAAAAABABQAAACAAADQABAAAAAAQAAABABAAQABAAAAAAQABAAAAAAQAGABAHAAQAEAAACgDQABgCABgDQABgBAAgBQABgDACgCQABgBAAgBQAAAAABgBQABgBAAgCQgBgCAAgBQAAgBAAgBQAAgBAAAAQgBgBAAgBIAAgBAlAk+QAIAAAKADQALAEALADQAMADAKAEQALAFAJADQAFABADACAkpjwQABgCACgBAiTimQAAgBgDAAQgCABgCABQAAABAAAAQgDABgBACQAAABgBAAQgBAAgBAAQgBABgBAAQgDAAgCgBQAAAAgBgBQgBAAgBgBQgCgBgDgCQAAgBgBgBQgCgBAAgCQAAAAAAAAQgDgDgDAAQgEAAgCABQgBABgBABQAAABgBAAQAAAAgBABQAAAAgBABQAAABgBABQAAABgBABQgBABgBACQAAAAgBAAQgEACgEgDQgBAAgBgBQgBgCAAgDQAAgBABgCQAAgCgBgBQgBgBgCAAQgCABgBAAQgCAAgBACQAAABgBAAQgBADAAADQAAABgBABQAAAAAAAAQAAACgCAAQgBAAAAABQAAAAgCABQAAAAAAAAQgCABgBgBQgCgCgDgCQgCgBgBgBQgBAAAAgCQAAgBgBgBQAAgDgBgCQAAgBAAAAQAAgBgBAAQgBAAgBgBQgBgBgCAAQgBABgBACQgDADgBAEQgBABAAABQgBABAAABQgBAAAAABQAAABgBABQgCACgDAAQgCAAABgCAiUiLQgFAAgFABQgBAAgCABQgCAAgBABQAAAAgBAAQgCAAgBABQgBAAAAABQgCAAgCABQgBAAAAACQAAABABABQAAAAAAABQABAAABABQABABACABQACABgBACQAAABABAAQACADAAADQgBABgBABQgBAAgBABQgBABgBABQgCABgBAAQgBABgCAAQgEABgGAAQgDAAgCAAQgBAAgBAAQgCgBgDAAQAAAAgBgBQgBAAgBAAQgCAAAAgCQAAgBgBgBQgBgBgBAAQAAAAgBgBQAAgBgBAAQgEgBgDABQgBAAgBABQgCABgEABQAAAAgBABQgBAAgBAAQgEABgEAAQgCABgBAAQgBAAgBAAQgBABgBAAQgBAAgBAAQgDAAgDAAQgCgBABgEQAAAAAAgBQACgBAAgDQABgBAAgCQAAgCgBgBQgBAAAAgBQgBgBgBgBQAAgBgBAAQAAgBAAgBQAAAAgBgBQAAgBAAAAQgCgCgCgCQgBgBgBAAQAAgBgBAAQgDgCgCgCQAAgBgBAAQgDgBgBgBQgCgBgBgBQgCgBgBAAQgBAAgBgBQAAAAAAAAQgBgCgCAAQAAAAgBgBIAAAAAiMicQAAACgCABQAAAAgBAAQgCABgDABQgBAAgCAAQgIABgHgCQgCgBgBABQgHAAgHAAQgCgBgDABQgFABgEACQAAAAgBABQAAAAgBAAQgBAAAAADQAAACAAADQAAACgBACQAAABgBABQgBAAgBAAQgJAAgJAAQgBAAAAAAQgBABgBABQgDACgCACQAAABAAAAQAAAIgHgBQAAAAgBAAQgCAAgCAAAA6knQAAACgBABQgBAAgBACQgBACAAABQgBABAAAAQgBABgBABQgCADgDAAQgDAAgCAAQgCAAgBABQgBAAgBABQgBAAAAABQgBABgBABQAAABAAAAQgBABAAACQAAABgBABQgBADACACQAAABABABQABACgBADQAAABgBABQAAABAAAAQAAABgBAAQgBABgBABQAAAAgBAAQgBAAgBABQAAAAAAAAQgCABAAABAADj/QADgBABgDQABAAAAgBQABgBABgBQACgCABgCQAAAAABgBQAAgCgBgCQgBgBgBgBQAAgBAAAAQgBgCgBgBQgBgBAAgBQAAgDAAgCQAAgDACgBQABgBACgBQAAAAABAAQACgBABgBQABAAABAAQABgBAAAAQABgBACAAAABjPQAIgJAKAIQAGAEADAGAggkDQgBgHgCgFQAAgBgBgBQgBgBAAgBQgBgCAAgBQgBgCgBgBQAAgBgBgCQAAAAAAgBQAAgBgBgBQAAgDACAAQABAAACgBQABgBACAAQAEgCABgBQABgBAAAAQABgCAAgCQAAgBAAgBQAAgDgBAAQgBAAAAgBQAAgBgCgBQAAAAgBAAQgCgBgBgCQAAgBAAAAQgBgEACgCAhMj4QgFgBgCgFQAAAAAAgBQgBgBAAgCQAAgBgBAAQgBgDAAgCQABgCABgBQABgCABgBQABAAAAgBQABAAAAgBQABAAAAAAQAAgBAAAAQAAgFgEgCQgBAAgBgBQgBgBgBAAQgBgBgBgBQgCgBgCgBQgCgCgBgBQgCgEADgDQACgBABAAQACgBABgCAhFjKQgJgEgMgDQgLgDgJAJQgDADAAADAgMi5QgCgOgKgEQgKgFgLAFQgFADgCAJQgBAGACAFAhBkuQgDgFgDgEAgiiaQAMAAAMAAQALAAALgEQAHgDAIABQgBANgEAMQgDAJgEAKQgEALgJAIQgIAIgKAFQgLAFgNgDQgLgDgLgEQgKgDgGgJQgGgKgHgKQgHgJgCgLQgCgKgBgKQAKAEALACQAMABAMABQAMAAAMgBgABIigQAAgCAAgBAu2swQABgCADAAQAJgIALgGQAKgHALABQAMABABAMQACAMgIAHQgBABgBABQgHAHgIAFQgJAHgPgDQAAgCABgBQAFgOgPACQgBgGgBgFQAAgBAAgBgAvUscQABgIAEABQAJgGgFgOQgDgMgEgLQgEgLgBgMQgBgMgBgKQgBgEAFgCQAKgGAKAGQALAGAFAIQAGAJgGAMQgFAKgBALQAAANABALQAAAAAAABAvUscQAEgCAEgBQALgDAMgBQAAAAABAAQAAACAAADAt+sCQgHAFgIAEQgKADgMABQgNAAACgNQABgFAEgCAvOsCQALgBALgEQAJgFAEgIAvIrNQgIgHgJgGQgLgHACgLQAAgFgGgCQgKgFAGgNQAFgJAIgGQAFgFAGgDAvIrNQAAgEAAgDAxAmMQAHAEAMABQALAAAKgFQgBgLAEgLQADgMAEgJQAFgLAAgMQgBgNADgLQAEgLAHgKQAGgJAIgIQAGgGAHgFQgBgMgBgMQgBgMgBgLQgBgNACgKQADgMADgKQACgKAGgKQAGgKADgMQADgLABgMQABgLAAgMQAAgBAAgBAz8mjQgDgKgEgKQgDgKgFgLQgEgJgIgJQgJgJgKgFQAOgEALAFQAFACABgKQABgFACgGQAGgVAKgUQAJgSAOgMQACgCADgCQgDANACANQAHgIAKgGQAKgHAKgFQAJgGAKgEQALgDAKgFQADgCACAAQgDACgGAFQgDACAAAEQAOgCAOgBQAJgBAJAAQAEAAADABQgEAEgHAEQgHADgHAEQgFACgEACQAJAAAKADQAKABAJADQAEACAEAAQgBADgEABQgFAAgFABQgCAAgDAAQAJABAIAFQAIAFAGAFQADADACACQACACACACQABACgFgCQgIgDgIgBQgCgBgCAAQgHgBgIAAQgKAAgJAAQgIgBgJACQgCAAgCABQgHADgGAFQgJAGgKAGQgJAGgLABQAGgJACgMQAAgDABgDAuPraQgBABgCADQgBABgBACQgGAHgEAKQgFAMgCALQgBAMABAMQABAMACALQABAMABAMQAAANgEAKQgFALgHAJQgIAKgEAIQgCADACABQABAEACAGQAEAKACAMQACAMgBALQgBAMgDALQgCAMgEALQgFAKgEALQgEALgLAJQAAgBAAgBQAAgMACgKArVr/QgPgDgMgBQgNgBgJAGQgJAGgIAJQgHAKgHAKQgGAKgDAMQgCAMACAMQABAMAHAKQAHAKAIAIQAJAIAHAJQAHAIAEAKQAEAKADAJQACAJgBAMQgBAHgDAHQgDAKgHAIQgJAJgIAFQgJAHgJAGQgJAHgIAIQgHAIgHAJQgHAKAAAMQgBAMACAMQADAKAGAKQAAABABABArnr6QgMACgKAGQgKAGgJAIQgJAIgDALQgEAKAAAMQAAALADAMQADAJAGAJQgBADABACArMryQgNgBgKAHQgKAGgIAHQgJAHgFALQgGAIAAAOQAAAMACAMQADAMADALQADALADAKQADAJAEAJAt+sCQAIAAAGgCQACgBACABQAKAHgHALQgFAKgJAGQgIAFgMACQgCABgCAAQgLAAgHgGQgJgHAJgKAuEskQAMgBAEAMQADAKgJAKQgCABgCACArtp2IAAAAQAIAIALgFQgCgFgBgHArup3IAAAAIABABArupqQACAMAEALQADALAEALQAFALABALQACAMgGAKQgGAJgJAIQgIAHgIAIQgIAJgFAJQgGAKAAAMQgBALADAMAy1nVQgKgFgMACQgOADgDALQgCAIADAEAyQnMQgFgLgNABQgOABgCAOQgCAKAHAHAyfnlQADgOAOAEQAFACAAAHAzFoCQgEAGgHAFQgOAKgRAPQADAMgJAHQAJAHAEAKQAGAMgJAJQgJgHgIAJQgBABAAABQgIAKAHALQAHALANgBQAGAAABgFQACAGACAGQADAKAJAGQAJAFALAEQALADALABQAMABAMgBQgCAJAAANQAAAEACAFQgKgEgIAGQgOALgKAOQgCACgFgCQgKgFgLABQgRAAgOAIQgIAFgJAIQgGAHgGAHQgJALgFAMQgCAEgCACQgCgBAAgEQACgMgBgMQgCgMgHgJQgFgJgIgKQgHgJgDgJQgDgHgCgHQgDgMAGgKQAFgJADgLQACgJgEgHQAAgCgCgBQgBgBgBAAQgJgDgDgKQgBgGAAgHQgBgNgHgGQgJgIgLAIQgIAGgGAJQgFAKAAAMQgNABgMgDQgKgCgKgDQgMgDgJgEQgLgDgNgBQgNAAgFAKQgCAHAFAHQAEAEADAIQgEAAgFABQgLABgHAFQgEADAFACQAJACAKAFQACABADAAQAIADAKAAQAMgBALgBQAIgBACgBAzjmHQgBgFgCgFAypmWQANABAJgGQAKgGAHgIQAIgIAIgIQAFgFAGgGQAFACAEADQAEADAEgBQgCAGgBAHQgDALgHAIQgHAHgIAIQgHAHgLADQgKADgNAAQgJAAgBgHQgCgHgCgHQgBgEgCgDAyRleQAMAAALgFQALgFAGgJQABgEABgDA3kmBQAHgBAIABQAMABALADQALAEAMABQANABAIgIA3jl+QAAgCgBgBA3mltQgIADgKAFQgEACAEADQAHAFAIACQgIAIAKAJQAHAHANgCQAGgCAHgEQAKgHAKgDQAOgEAHAJQADADAFADQALAEALgDQABAAAAAAQACgBACAAA3plZQADAAAEAAQAMAAALABQAOABAJgEQAGgEACAAA1CmHQgCgCgCgCA2CmTQAAAAAAABQABAMAIAIQAEAEAEAFA1+lHQgBgCgBgCA1+lHQAGAHABAKQAAAMgBALQgCAMACAMQABALABAMQAAAMAFALQAEALAGAKQAFAKAGAJQAFAHAEADQAEgBAEAAQALgBAMAAQAMAAAMgBQAMgCALgCQALgDALgEQALgEAKgFQAJgGAKgHQAKgHAHgJQAJgKAJgFQADAOAHAJQAGAKAIAHQACADAFADQAKAFALAEQALAEAKADQALACAMADQAGABAGABQANADAJAGQAIAGABAMQAAAEABAAQgFAFgEACQgHADgGAEQgJAHgJAJQgLAJgLAIQgOAIgKAMQgNAOgLANQACAAACAAQAEAAAEAAQgKAFgCANQgBALgEAMQgDALgBAMQgBAMADAMQADAKAOADQAIABAIAEQAKAFALAFQALAEALAEQALACAKAEQAMADALAEQALADALADQALADALABQAMACAMADQALACAMABQAMABAMABQAMACAKADQALAEALAEQAKADALAGQAIAEAGAFQACABABACQAHAFAGAHQAJAJADAKQAAACABADQgDAKgKAJQgJAHgHAJQgHAJgGAJQgHAKgGAKQgCADAAAFQgEgBgFgBQgGgCgHABQgMAAgMgBQgLAAgMAAQgLAAgMAAQgMAAgMgCQgLgCgLgDQgMgDgLgCQgMgBgLgBQgMAAgMgBQgMAAgMACQgLABgMABQgKADgJAHQAJABAJgCQAMgBALACQAMABALAFQAKAFAJAIQAIAJAIAJQAJAIAGAKQAGAKADANQADALAAANQAAAMgBALQgCAMgEAKQgEALgIAKQgIAKgNABQgMACgMgBQgNAAgLgCQgGgBgGgBQgHAOAPABQALABANACQALACALADQAMACALAEQAKADALAFQAIAEADAFQgJAIgDARQgBAIgCAIQgEAQgFAQQgFAPgGAOQgGAOgCAPQgBAIgDAIQgDAMANAEQABABACACQAIAGAHAHQAIAJAIAJQAIAJAHAIQAHAIAHALQAGAKAHAJQAHAKAHAJQAHAJAHAJQAIAIAJAIQAJAIAJAJQAIAJAGAJQAGAKAJAIQgCACACACQACABACABAykjqQAJgGALgDAz3jyQAKABAMAFQAIADAHgIQAHgJAGgKAsrmcQgFgKAAgMQgBgNAFgKQAEgLAHgIQAHgHAJgJQAIgHADgEQABgDAHgGQAFgGAFgFQAGgGADgHQADgHABgIQAAgKgEgGAvanvQAAAMAAAMQAAAMgKAIQgDACgCABAxVoNQgBAAAAAAQgQADADAKAxVoNQAMgDAGAKQACADgBAFQgDAGgEAGQgCADgDACQAKgEAMACQAMABAGALQAHALAAAMQABAMgGAKQgFALgGAJQgFAKgHAIQgDACgCACQgGAFgEADAxWodQgBALACAFAxnnEQABgCACgBAvUmVQAAALACAKQgCgBgBgCAvrmkQgEAMAFALQACAFADAFAvMl3QACADACADQAGAKAHAJQAEAFAEAGQgCAAgCAAAtkjIQgIgDgEgHQgGgKgHgJQgFgJgEgKQgEgKgHgKQgGgKgFgIQgGgIgEgLQgDgLgDgLQAAgCgCgDQgCgEgDgDAvSmAQADAEADAFAv6jZQAHADAGAJQAGAJALAAAwpjIQgBANAMAHQAMAHAKgEQAEgCADAAAvNjFQgEALALAIQAIAGAGgFAwGisQgBANAJAIQAKAHANAAQAKAAAFgIAwYiGQAJAGALADQAMACALgDQALgCALgDQAMgDALgEQALgEAMgCQAFgBAFgDQAKgFAKgFQALgFAIgIQAIgJAEgKQACgHAGgDQAFAKAGAIQAHAJAGAJQAFAJAHAIQAHAJAHAJQAIAJAIAIQAIAIAKAHQAJAEAJAHQAGAFAIADQACABACABQAKADAJAJQAIAHAHAIQAFAGAGAHQAAABAAAAQABAIAKAFQAIAEANAEQALAEAMABQALACACAKQACAJAHABAuhhQQgCgEgCgFAwRgNQADADACACQAFgJAJgHQAJgGAJgHQAIgIAJgGQAKgHAKgGQAJgGAKgEQAKgFAJgBQADAGAEAFQAHAKAHAKQAIAIAJAHQAKAHAIAHQAKAHAKABQANAAAHgGQADgCADgCQAGgDAIgCQAMgEAKgFQAJgFAIgJQAHgJAHgIQAFgGADgFAxnnEQgGgEgGgDArXAOQgCgBgCgBQgHgCgIAAQgMgBgMgEQgLgDgLgCQgLgEgKgGQgIgFgGgHQgBgCgCgBAweANQAJgDAMgCQAMgCANAAQALgBAMAFQAHAIAMAIQAMAIAVAWQARARgBADQAKACAKAEQAMAEAMgBQAMgBAMgBQALgCAMAAQANgBAJAFQAKAGAEALQADAKAAAMQAAAFABADQAAgIAEABQADAAAGgIQAIgJAJgIQAIgHAJgGQAJgHAIgIQAJgJAKgCQAHgCADgEQACAKAFAHQAHAJAKADQALADAJgIQABgCACgBQgBADAAAEQACAMAJAEQAGADAHgCQADgBACgCAtNBmQAJAGAIAJQABABAAADAsSCEQgBAJABAMQABAMABAMQAAALABAMQAAANgBAMQgCAKgJAJQgIAHgLAGQgKAFgOgIQgIgKAKgJQAGgFAEgEQAIgIgBgNQgBgJgCgJAx6goQADAAADABQAOABAOACQANACANACQALABAKAEQAFABAEADQAIAFAHAFQgJARgDAHQgBABAAABQgBADABACAxfEpQACAAACABQALABALAGQALAFAEAMQAEAIAEAIQAHALgDANQgCALgGAKQgGAKgMACQgMABgLgCQgMgBgLgGQgKgFgHgIQgHgJgEgLQgEgLAEgLQAEgLAKgHQAKgGAKgFQAGgDAGgCQABgBAAAAgAxXEnQgEABgEABAxXFHQgKgGgFAKQgFANAQgBQANgBAEgKQgFgEgEgBQgCAAgCAAQgEgBgFADAstGTQAAgLgBgLQgDgLgBgMQgCgLgEgLQgEgLgFgJQgGgLgEgKQgFgKgHgIQgFgGgHAAQgGgCgGgBAtzIQQgGgKgJgJQgIgIgJgGQgKgGgFgMQgFgKgDgLQgEgMAGgMQAFgKAKgFQALgFALgCQALgCAMgBQAMgBALgCQALgCAMAAQAIAAAJABAoNGpQgEgCgGgBQgMgCgMgEQgLgEgKgDQgLgEgLgBQgMgBgLgEQgMgEgMAAQgLAAgMAAQgKAAgLAAQgLAAgMAAQgLAAgLAAQgMAAgMACQgKABgLADQgMACgMAAQgDAAgDAAAyBEHQgCACgCACQgHAEgHAEQgJAGgIAJQgGAJgFAKQgFAKgCALQgDAMACAMQADAMADALQAEALAHAKQAGAJAIAJQAIAIAJAHQAJAHAMAAQAFABAGAAAt1JWQgFgLgCgLQgBgLACgMQACgNAJgIQAHgHAKgGQAJgGAKgFQALgFAMgBQABAAACAAQAKgBAKAAQAMAAALADQAKACALAEQALAFAKAGQAKAHALAGQAKAFAJAIQAIAHAHAIQAIAIAHAJQAIAKAEALAsyH2QALgFAMgBQAMgCAMAAQAMAAALAFQAEACAFACQAKAGALAEQADABACABQAIgBAMAAQAMAAAMgBQAKgBALgBQAMgCANABQAMAAAMAAQALAAALAAQANAAALABQAMABALAAQAGABAGAAQAAgCAAgBQAAgMAAgMQAAgNABgLQACgMABgKQAAgEgBgCQgDgFgHgEAtBJzQACgOgIgHQgGgFgGgCQgKgFgMACQgGABgGABQABACAAADAupKGQAAgHADgHQADgMAIgKQACgCABgBQAKgGAMgBQAHgBAGgBAtBJzQgDAAgDABQgDgOgOADQgMACgHAJQgHAJAAAOQABAMAHAJQAHALAMABQALACAHgHQAAAJgGADQgKADgNADQgLACgMgBQgMgBgKgEQgKgFgHgKQgHgKgCgMQAAgFAAgFAtHJ0QgMACgIAFQgEADgBAFQgBANAPgCQAGgBAGABQADAAAEABQAAAGAAAFAquJyQgHAAgFgBQgMgCgMACQgMACgMAAQgMABgMAAQgMAAgLAAQgNAAgLgBQgJgBgHABAs/KPQAIABAHABQAMABALgBQALgBAMAAQAMAAAMAAQALgBALgCQAMgCALAAQAJgBAIACQABAGAEAFQAGAIAKAIQAJAGAMgCQALgDAMAAQADAAAEAAQABAAABAAQAHAAAHgCQABAAACAAQABAAABgBQAKgDALgFQAGgDABgGQAGAIAGAJQAIAKAFAJQAHAJAHAKQAHAJAHAIQAJAIAFAKQAHAKAHAIQAJAJAHAHQAIAIAHAIQAFAGAFAEQAEAAAEAAQAMABAKAEQAGAAADAGQgHgEgIABQgEAAgEAEQgJAHgEAMQgEAKABANQACALAHALQAIAKAMABQAJAAAGgGQAFgFAEgHAwcKLQADgBADAAQAJAAAJABQAMABALgBQAMgBALABQAMAAAMgBQAJgCAMgCAwfKIQADAAAGACAqyNBQgEgHgFgGQgIgKgIgIQgIgIgIgJQgHgJgJgIQgHgIgIgIQgIgIgHgJQgGgJgHgJQgHgJgGgIQgIgKgIgGQgKgIgCgKQgBAGgEAFQAAABgBABArpNWQgEAAgEABQgMACgNgCQgLgCgMgBQgLgCgLAAQgKgBgKgCQgLgBgLgCQgLgBgLAAAqyNBQgLgCgNABQgLABgJAIQgGAGgFAHAqAOAQgCAKgIAJQgFAFgHACQgLADgNgBQgMAAgMAAQgMAAgOgEQgIgGgFgLQgFgKAAgMQAAgMAGgKQABgCACgDAASguQAAAFABAGAAVg4QALgCAJgDQAKgDAIgIAiQB9QAGgIAMgFQAKgEAKgDQAMgEAMAAQAMgBALAFQADACAEACQALAFAMACQAHABAHgEAjVBxQgCACgBADQgEAGAGAGQAIAGAIAHQAJAHALAFQAKAFALAEQALAEALADQAKADAMABQAMABAMABQAMAAAMAAQANAAALAAQANAAAKgFQAKgFALgEQAIgDAJgEQAEgCAEgCQAFgCADgCAjXAxQgEgKABgNQACgLABgMAjVBxQgKgBgHgBQgMgCgMABQgMABgLACQgMACgLAFQgFABgEACQgKAEgKAEQgMAEgLAEQgMADgLADQgLADgJAEQADABAEABQACABADABQAJAEALACQALACAMABQANABAHAHQAIAIADAKQABAFACAGQAIAIAFAIQAFAIAHAFAmAAuQAIAGALAFQALAFAMAAQAMABAMAAQAMABALgBQAMgCAMgCQALgDAMgBQAMgCALgCQAFgBAFgBQADAKAIAHQAEAEAAAGQAAACAAACQgCAJgEAJQgEAIgDAHAk6GZQACADADAEAk6GZQADAAADABQALABAKABQALACAMAAQALABALABAl8g2QAFAIAEAMQgOAEgJAEQgLAFgJAFQgLAGgEAGQgDAEgCAEQgDgBgDgBQgLgCgMADQgLADgKADQgMADgKAFQgGACgFABQgLADgNgDQgLgCgKgEQgLgEgKgDQgGgCgGABAmAAuQABgCABgCQACgCAAgDAm9glQgFAEgGAFQgEADAAAFQgCAJALAFQAJAEANgCAnYBaQADAAADgBQALgEAMgCQAMgDAKgCQAKgCAJgHQAGgFADgFQAFgHAEgGAmLCYQgHgCgGgEQgIgGgJgIQgHgHgHgGQgIgHgIgIQgIgJgJgFQgIABgGgHQgHgIgJgFQgKgGgKgEQgLgEgLgCQgMgDgLgEQgLgDgLgFQgDgBgBABQgGAEgHACQgNABgLgEQgCgBgBAAQgBACAAACQAAAEAAAFQgBAEgCAEQgBABAAABQgEAGgEAFApNBnQAGAGAIAGQAJAGAKAHQAKAGAMADQALADAMABQAMAAALADQAKADAKAFQABAAABAAQADAEAGACQADAAAEAAQAHAFAIADQAJAEAKADQABAAACAAQALADALAHQAKAGAJAIQAJAHAJAIQAJAJAHAKQACADADAEAmyAEQAIAAAJAAAqmAjQAGgJABgJQAAgPgMgBQgGgBgGADQgIAEgJAIQgDACgDADQgDgEgCgBQgBAAgBAAQgBgBgBAAAq1AxQgCABgDABQgLAFgKgFQgKgEgEgLQgDgIAJgOAq1AxQAHgFAGgHQABgBABgBAp5AqQgEgDgBgDQgBgCAAgDQgEgIgLAFQgLAEgNADAp+BBQAGgGALgCQAKgCABANQABAIgCAHQAAABgBABQgDABACADQgBABAAABQgCAEgCACQgEANALACQAOACAHgJQAAgBABgBApjBTQADgIAKgBQAPgDgBAOQAAALgFAHAq1A3QAAgDAAgDAllDuQgHACgHACQgMAFgJAFAmgCtQgHAMgIAJQgIAIgLAHQgJAHgLAFQgKAFAAANQAAAKADAMQAEAMAJAHQAJAGAKAHQAKAHALAHQAJAGAKAGQAJAGAIAJQAIAIAJAIQAIAJAJAIQAIAIAIAIQAIAIAHAJQAFAEAEAFQgIgBgHABQgMAAgMAAQgMAAgLgBQgNAAgLgCQgMgCgNAAQgMAAgMACQgMACgLADQgHABgFAFQgFAEACAJQgHgCgIgCQgLgDgMACAitIJQgEgBgEAAQgMgBgLgCQgLgBgMAAQgMgBgMAAQgMAAgMABQgMAAgMACQgLACgMAAQgLgBgMAAQgLAAgKAAQgMAAgMAAQgLAAgMAAQgMAAgMgCQgLgCgKgBQgMgCgKACQAAgIgBgHQAAgNADgLQABgMAFgKQAFgOgMgGQgEgBgEgCAngICQgOAAgMgBQgGAAgGAAArJIDQAJADAHAGQAJAHAKAHQAHAGALAHQAKAFAIAJQAJAIAHAJQAHAIAEALQgEAAgEABQgMAAgMABQgKABgKABQgCAAgCAAQgJACgDAKQgCAEgBAFAqsKMQgCgGgBgGQAAgHABgHApaJZQgKABgIAHQgJAHgDAMQgDALABAMQACANAJAHQAGAFAFAEAozKUQAAgEgBgFQgFgLgEgKQgEgKgFgKQgFgKgMABQgBAAgCAAApnJZQAHAAAGAAApVJzQgKgEgEAKQgFANAOADQAIACAGgHQAMgMgLgFQgDgCgCAEQgDgCgCAAgApRKmQAIAFAIAIQAIAIAHAKQAHAJAHAKQAGAKAIAJQAHAIAIAJQAIAJAGALQAHAKAGAJQAFAHAHAHQABgBABAAQAIgHAMABQAJAAAIAAAqAOAQgDADgEACQgKAFgMgDQgMgCgJgIQgJgHACgOQACgLAFgKQAFgJAKgDQAFgCAFABQABAAABABQAKACAFALQABAAACAAQALAAALAAQAMABAMgCQAMgBAMgCQALgCALgCQAMgCAMABQALAAALACQACABAEAAQgBADAAADQgBANAEALQAEALAJAIQAJAIAMAEQALAEALABQAMACANAAQAKAAAHgIQAFAFAFALQAFAMAIAMQAHAKAIAKQAFAHAEAJQgJgCgNgBQgMgBgLgBQgLAAgMAAQgMAAgLABQgMABgMAAQgMAAgLAAQgLAAgMgBQgMAAgLgBQgMAAgHgLQgBgCgCgCQgIgHgJgIQgJgKgIgIQgIgIgHgJQgGgKgGgJQgGgJgHgHQgCgBgBgBQgBgCAAgBQAOgBAMAAQAMAAAMAAQALAAAMAAQAMAAAMAAQAMAAAMABQAJAAAJAEAqINUQgKAAgJAAQgNACgCANQgCAOAPgBQAFgBAFgCQALgFAJAAIABAAAp/NoQABABABACQADAEgBAGQAAABAAACQgCAFgDADAp/NoQAAgBgBgCAqZNGQgNgDgMgCAn1NOQACgIAFgGQAFgJAJgGAmSM1QADACADACQAFAFAEAEQADAEABAFQABADAAAEQABAMgEAKQgCAEgBADAl+NvQAFAOAGAJQAHAKAGAJQAGAKAGAJQAHALACAJQABAHgFAFQgHAFgGAFAAiHJQgQAAgMgBQgMgBgKAGQgKAGgHAJQgHAIgIAIQgIAIgCAMQgCAMACALQADAMADALQAAABAAABIAAAAQgJACgIABQgBgHABgMQABgMAAgMQAAgMAAgMQAAgNgBgLQgCgNgFgJAg0IwQANgCALAEQALAEAJAHQABABACABQACACADABAieJfQAKgHAMgCQAMgBAMgCQANgBALgBQAMgBAMAAQAMAAALAEQALAEAIAIQAJAHAIAIQAGAIAHAJQAHALAHAHQABACACACQAKgFALgCQAAABABABAg0IwQABACAAADAhFIzQgDABgCAAQgMACgMABQgLABgLAEQgLAEgIAHQgIAIgGAJQgDAEgCADQgEAFgDAFIgBAAQgCAEgBAEQgBAGADAIQAEAJAFAKQACAFABAFQAOgEAMAFQAJAEAGAmQAMgCAMABQANAAAMAAQAMABAMABQALABAMgBQAJAAAHACQAAABABABQABAKAEAKQABAAAAABQgEgBgEgBQgLgDgMAAQgMAAgMgBQgLgBgMAAQgLAAgNACQgIgCgJAAQgCAAgCAAQgBAAgBAAQgDAAgEgBQgMgEAJgMQAIgKAIAIIAAAAABXLrQgMABgLgFQgKgGgHgIQgGgIAAgNQgBgMAAgLQAAgOAHgIQAGgHAIABAh0L7QgCABgCAAQgEADgFABQgMACgMgBQgLAAgMgBQgOAAgHgHQgHgIgFgLQgFgLgEgKQgEgLABgMQABgMAJgIQAFgEAHgEQAJgFANABQAMAAAKACQgEABgEAJQgFAKAAANQAAANAEALQAEAMAGAKQAFALALAEQALAEALgDQACgBABAAQAEgBADgCQAEgEADgFQAGgJgEgJAimJpQADgFAFgFAkCN7QAAAAgBAAAAZKWQgNADgGAJQgFAIgCAKQgCAKABAMAAFLhQAGAJAIAHQAHAGAMgBQAMgCAMgBQALgCAOgGAgUNpQgCgDgCgDQgGgKgGgKQgGgKgIgJQgJgIgIgIQgHgJgHgKQgGgJgGgJQgIgLgFgFAAMNsQgLgDgGAAQgHAAgGAAQgBAAgBAAQgFAAgEAAQgNgBgIAJQgIAIgCAMQAAAEAAAEAAwOiQgCAAgCAAQgEAAgEABQgFACgGAAQgNAAAHgOQAEgJALgDQAFgDAHgBArOAUQgGAEgGACAErQeQgCACgCAAQgCABgCAAQgBAAAAAAQgGACgJABQgLABgMABQgMABgMAAQgLgBgLAAQgNAAgMgCQgLgBgLgCQgNgBgLgDQgMgDgPgDQgIgHgIgIQgHgIgHgLQgHgJgGgKQgGgJgFgLQgFgKgFgFAJROWQAGAMgFAHQgCABgBADQgGALgKAHQgKAGgJADQgMADgNABQgMAAgLAAQgMAAgLgBQgMgDgMABQgLAAgMgBQgLgBgLAAQgMAAgLAAQgLAAgLAAQgLAAgMAAQgMAAgMABQgMAAgKgBQgEgEgGgDAEuPHQAEAEAEAEQAGAJAFAKQAGAKgGAMQgFAKgEAMQgFANgIADQADgDAAgHQABgMgHgKQgGgJgHgJQgIgKgHgJQgIgJgIgJAEaPEQgGACgGABQgJgCgJACQAAAAAAAAQgLACgLADQgNACgLgCQgJgCgHgFQgJgGgIgIQgEgFgEgH");
	this.shape.setTransform(153.8,106.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhWBbIgPgKIgJgEQgJgEgLgBIgagEIgdgEIgGAAIgHAAIgEAAIAXgbQALgMAOgIQALgIALgJIASgPQAGgEAHgDQAEgCAFgFQAIAGAMADQAMACALgDIAWgFIAWgHQALgEAMgCQAFgBAFgDIAUgKQALgFAIgIQAIgJADgKQADgHAGgDQAFAKAGAIIAMASIANARIAOASIAQARQAIAHAKAHIARALQAHAFAIADIgIALIgPARQgHAJgKAFQgKAFgLAEQgIACgGADIgDgDIADADIgGAEQgIAGgMgBQgKAAgKgIIgTgNQgJgHgHgJIgOgTIgHgLIgFgJIAFAJQgJABgKAEQgKAFgIAGIgUANQgJAGgJAIIgRANQgJAHgFAJIgGgFgACABSIAAAAg");
	this.shape_1.setTransform(58.2,95.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFF97").s().p("AhMBJIgIgVQgEgJgJgJQgJgJgJgFQANgEAMAFQAFACABgKIACgLQAHgUAKgUQAJgSAOgMIAEgEQgCANABANQAIgIAKgGIAUgMQAIgGAKgEIAVgIIAFgCIgJAHQgDACAAAEQANgCAPgBIARgBIAIABQgEAEgHADIgOAIIgJAEQAJAAAKADIATAEIAIACQgCADgEAAIgJACIgGAAQAJABAJAFIANAKIAGAFIAEAEQAAAAAAABQAAAAgBAAQgBAAAAAAQgBgBgCAAIgPgEIgEgBIgQgBIgSgBIgRABIgEACQgHADgGAEQgJAHgKAGQgJAGgKABQAGgJACgMIABgGIgBAGQgCAMgGAJQgFAFgGAFQgOAKgRAPQACAMgIAHQAIAHAFAKQAFAMgJAJQgIgHgIAJIgHgUg");
	this.shape_2.setTransform(33.1,55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Ag0CcIgIgLIACgFIgCAFIgIgHQgJgGgLgEQgMgCgMgBIgXgCIgLAAIgMACIgTAFIADgDQAIgHAKgHIATgPIASgPIARgNIALgJQAIgHAHgDQAJAAAJADQAJADAKABIAcADIAaABQAOABAOgCQAOgBAIgKQADgDAEAAIAAgQIgBgKIAPAOQAIAIALAFIAWAJIAKAEIANAEQALAEANgBIAEAAQgEADgFAFIgFAGQgJAMgKAPIgGAJIgCADIgEAHQgIgLgOgGIgGgBQgTgHgWAAQgPgBgNACIgYAGQgSAFgPALQgMAKgJANIgHANIgDgGgAiCgaQgMgCgIgEQgKgFABgOIABgGQACgJAEgGIAEgEQAFgEAHgCIAWgHQALgDALAAIAKABQAAgJAEgHQAGgLAIgLQAHgHAIgFIAPgKQAIgGAHgCQABgBAAAAQAAgBABAAQAAAAAAABQAAAAAAABIAOgBIAXAAIgBAXIAAAIIgCAIIgCAFQgDAHgGAHQgGAJgJAFQgJAHgLADQgKAEgMABQgMAAgLAEQgEACgFAEQgIAIgFAJQgEAGgEAFIgFAEQgGAFgJAAIgGAAg");
	this.shape_3.setTransform(104.7,66.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("AihDLQgGgHgGgJIgFgWQgCgGAAgGIABgLQADgLAGgJQAHgJAJgHIATgMQAJgGAJgIIAQgQIgQAQQgJAIgJAGIgTAMQgJAHgHAJQgGAJgDALIgBALQAAAGACAGIAFAWIgBgCQgFgKgDgKQgDgMABgMQABgMAHgKIAOgRQAHgIAKgHIASgNQAIgFAIgJQAHgIAEgKQACgHABgHQACgMgCgJIgIgSQgEgKgHgIQgHgJgIgIQgJgIgHgKQgGgKgCgMQgCgMADgMQACgMAHgKQAGgKAIgKQAIgJAJgGQAIgGANABQAMABAPADIgBADIABgDQAEgIgDgJQAOAPAFgVIAAAFIAAAEIgCAWIACgWIAAgEIAAgFIARgQIAEgDIABAJIAAAEIAAAGIABgBQAFgDAGAAIABAAIAAAAIAGAAIAVAGQALADAKAHQAJAHAHAJQAHAJADALQADALABALQAAANAFALQAFAKAHAHQAIAJAKAFQAKAEAMADQALADAGAIIARAUIgRgUQgGgIgLgDQgMgDgKgEQgKgFgIgJQgHgHgFgKQgFgLAAgNQgBgLgDgLQgDgLgHgJQgHgJgJgHQgKgHgLgDIgVgGIgGAAIAAAAIgBAAQgGAAgFADIgBABIAAgGIAAgEIgBgJQAGgDAJAAQAMAAAJAEQAJAEAJAGIASAMQAKAIAHAHIAOARIAMASQAFAJACALQABAMAGALQAGAJAHAGQAIAHAJAEIATAKQAIAEAHAJQADAFACAHQAIAGACALIACAMIAAAJIgLgBIgXgEQgMgBgMAAQgIAAgGABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQgDgIgKgGIgRgKQgJgGgDgLIAAgJQAAgNgCgLIgEgWQgDgKgFgKIgNgTQgGgJgJgHIgRgOQgJgHgpAPIAAAAQAKgFAFgMQACgHABgHQgBAHgCAHQgFAMgKAFIAAAAIAAAFQgHAJgKAEQgLAEgKAGQgKAGgEALQgDALgCALIgBARIAAAGQABAMADALIAFAMIABADIgBgDIgFgMQgDgLgBgMIAAgGIABgRQACgLADgLQAEgLAKgGQAKgGALgEQAKgEAHgJIAAAHQgCANgMADQgMADgFAHQgIAJgBALQgCAKAAAOQABALgCAMIgFAYIAAAAIADAGIAKAWQAEAKAHAJQACADABAFIABAFIAAAAIAAAAIgBgFQgBgFgCgDQgHgJgEgKIgKgWIgDgGIAAAAQAJAIALgFIACAEQAHAJAJAHQAJAHAKADIAEABQACAMgHAKIgOAQIgKALIABgFIABgGQAAgDgCgDQgBgDgDgDQADADABADQACADAAADIgBAGIgBAFQgDAKgGAIIgNATQgFAIgBAGIgBAEIgHAMIgNAZQgHANgCAOQgBAOACANQACALAEAFIgEgDQgHgIgMgHQgHAEAFAFQgFgEgJgBQgEAHAFAHQgIgEgGgHgAidCkQABAMAFAKQgFgKgBgMIAAgDQAAgLAEgJQAFgKAHgJIAPgQQAJgHACgEIAIgJIALgLQAFgFAEgIQADgGAAgJIAAgCQAAgIgDgGQADAGAAAIIAAACQAAAJgDAGQgEAIgFAFIgLALIgIAJQgCAEgJAHIgPAQQgHAJgFAKQgEAJAAALIAAADgAh7CkQgDgLAAgKIAAgCQABgMAFgKQAFgJAJgJIAQgPQAIgIAGgJQAFgIAAgIIAAgGQgCgLgEgLIgIgWQgDgKgDgMQADAMADAKIAIAWQAEALACALIAAAGQAAAIgFAIQgGAJgIAIIgQAPQgJAJgFAJQgFAKgBAMIAAACQAAAKADALgAhzhIIAGAXIAGAVIAGASIgGgSIgGgVIgGgXQgCgLAAgLIAAgCQAAgNAFgJQAGgKAIgIQAIgHAKgGIABgBIABAAIABgBIAAAAIABgBQAHgDAIAAIABAAIAAAAIABAAIABAAIABAAIgBAAIgBAAIgBAAIAAAAIgBAAQgIAAgHADIgBABIAAAAIgBABIgBAAIgBABQgKAGgIAHQgIAIgGAKQgFAJAAANIAAACQAAALACALgABIhOQAFAKAGAJQAHAJAIAGIATANQAKAGAHAHIADAFIgDgFQgHgHgKgGIgTgNQgIgGgHgJQgGgJgFgKIgHgVIAHAVgAhaggIAAABIAAgBgAiAg2IgBgCIABgDQgGgJgDgJQgEgLAAgMQAAgMAEgKQAEgLAJgIQAIgIALgGQAKgGAMgCQgMACgKAGQgLAGgIAIQgJAIgEALQgEAKAAAMQAAAMAEALQADAJAGAJIgBADIABACgAgqibIAAAAg");
	this.shape_4.setTransform(87.8,46.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9933").s().p("AFaC8QgMgCgMgBIgYgCQgFgBgEgDQgKgGgFgKQgFgKgCgMQgBgJABgIIABgIQABgMAIgIQAIgJANABIAJAAIACAAIANABQAHAAAMACIgBAAQgNABgJAIQgJAGgCANQgDALACAMQACAMAHAJQAIAJAKAGQAKAGAMAAQAFABAEgDQgDAHgIAAIgHgBgAIWC7QgJgCgHgEQgJgGgIgJQgEgFgEgHIgDgGQgEgLAAgLIAAgGQACgJAGgFQAGgGAIgDIABADIgBgDIAGgBQANgFAMgBIAHAAIAQgBIAYAAQAIABAIADQgIAEgGAGQgFAHgCAJQgDALAAALQgCAMAFALQAEALANAHQAFgCAHAAIgMACQgJgBgIABIgBAAIgWAFIgMABIgMgBgAHpB5IgDgBIADABgAllCMIgZgBQgMAAgOgEQgIgGgFgLQgFgKAAgMQAAgMAGgJIADgGQAFgHAGgGQAJgIALgBQANAAAMABQAMACAMAEQgFgBgEABQgLADgFAJQgFAKgCAMQgCANAJAIQAJAHAMADQAMACAKgFIAHgFQgCALgHAIQgGAGgHABQgKADgLAAIgCAAgAhaCBIgZgBQgLgCgLgEQgMgEgJgHQgJgJgEgLQgEgLABgNIABgGQACgHAFgHQAGgIAIgHIACgBQAIgGANAAIAQAAIAIABQAMAAALAEQAFAAADAGQgHgDgHAAQgFABgEADQgJAIgEALQgEALABAMQACAMAHAKQAIAKAMABQAJABAGgHQAFgFAEgHQgBAKgFAHIgFAIIgCACIgDgDIADADQgGAIgLAAIAAAAgAhJB5IAAAAgACugOIgXgCQgOAAgGgHQgHgIgGgLIgJgVQgEgKABgNQABgMAJgHIAMgIQAJgFANAAQANAAAKADQgFABgEAIQgFALABAMQAAANADAMQAEALAGALQAFAKALAEQALAEAMgDIgFABQgEAEgFABIgRABIgHAAgAFbgfQgIgHgFgIIgBgCQgGgJgBgLIAAgBQgCgNACgJQADgKAGgJQAGgJAMgDQAKgEALgDIACADIgCgDQAHAAAIACQgIAAgFAGQgIAJAAANIABAXQABANAGAIQAGAIALAGQAKAGAMgBQgOAFgLACIgXADIgFAAQgJAAgGgFgAoxhWQgMAAgKgFQgKgFgHgKQgHgKgBgMIgBgKQABgHACgHQADgMAIgJIAEgEQAJgGANgBIANgCIAAADIAAACIAAgCIAAgDIALgCQANgCAJAFQAGADAGAEQAIAHgCAOIgGABQgDgOgOADQgMACgHAKQgHAJABANQAAAMAHAKQAHAKAMABQALACAHgHQAAAJgGADQgKAEgMACQgJACgJAAIgGgBgAlPhpQgJgHgHgJQgDgFgCgGQgCgFAAgGQgBgIABgHIADgJQAEgJAJgCIADgBIAUgBIAZgCIAIAAIANgBQgLACgIAGQgJAHgDAMQgDALABAMQACANAJAHIALAKIgHAAQgMgBgLADIgHABQgIAAgGgFg");
	this.shape_5.setTransform(120.9,184.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AH9CcIgXgFIgXgCIgXgBIgYABIgSAAIgEAAIgIABQgFABgGAAQgNAAAHgOQAEgJALgDIAMgEIAKgCQAMgCANAAIAXAAQAMAAAMACIAXADIAHABIAAAGQAAAMAEAKIADAHIgGgCgAlMBVQACgMANgCIATAAIADAAIAWAAQAMAAAMgBIAYgDIAWgEQAMgCAMAAQALAAALADIAGABIgBAGQgBAMAEALQgJgDgJgBIgYgBIgYAAIgXAAIgYAAIgaACIgBAAIgBgDIABADQgJAAgLAFIgKACIgDAAQgMAAACgNgAkhBbIAAAAgAFaguQgLgDgMABQgMAAgMgBIgXgCQgLAAgNADQgIgCgJAAIgEgBIgCABIgHgBQgMgFAJgLQAIgLAIAJIAAAAQAMgCAMAAIAZABIAYABQALABAMAAQAJAAAHACIABABQABALAFAJIABACIgJgDgAnSh7IgPgDIgHgBQgGgBgGABQgPADABgNQABgGAEgCQAIgFAMgDIAGgBQAHAAAJABQALABANAAIAXgBIAYAAQAMgBAMgCQAMgCAMACIAMABQgBAHAAAIQABAGACAFQgIgBgJAAQgLAAgMADQgLACgLAAIgYAAIgXACIgLAAIgMAAg");
	this.shape_6.setTransform(118.8,184.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33CC66").s().p("AIBEcIgXAAIgYgCIgXgDQgMgCgMgDIgagFIgQgQQgIgIgHgKIgMgTIgMgUQgFgLgFgFIAAAAQAGgLgCgKIABgHIASAAIAXgBIAYABIAXACIAWAFIAGACQAEAGAFAFQAHAJAJAGQAIAEAIACQAMACAMgCIAWgEIABgBQAJgBAJABIALgCIALgEIAKAHIAHAIQAHAIAFAKQAFALgFALIgKAWQgFANgIAEQAEgDAAgHIAAgCQAAgLgHgKIgNgSIgPgSIgQgSIAQASIAPASIANASQAHAKAAALIAAACQAAAHgEADIgEACIgEAAIAAAAQgGACgKABIgWADIgRAAIgHAAgAJHEUIAAAAgAhGDLQgDgJgGgGIgPgVQgHgLgFgMQgFgLgFgGQAFAGAFALQAFAMAHALIAPAVQAGAGADAJIgVgCIgYgCIgWAAQgMgBgMACQgLABgNAAIgWgBIgYAAIgXgBQgMgBgHgLIgDgDIgQgQIgRgRQgJgJgGgJIgMgTQgGgJgIgGIgCgDIgCgCIAagCIAYAAIAXAAIAYAAIAZABQAIABAJADQAFAMAJAIQAJAIALAEQALAEAMABIAYABQALAAAHgIIABgCIAGgIQAEgHABgJIAAgBIADAAIAEABQAEANAHAKIAMASIANAUQAHAKABAKQACAHgGAEIgNAKIAAAAgAG0B9IgXgDQgMgCgNAAIgXAAQgMAAgMACIgLACQgEgLgJgIIgDgDQgHgFgKABQgLgDgIAAIgNAAIgBAAIgFgHIgLgTQgGgLgJgIIgQgRQgIgIgGgKIgNgSIgNgQQAFgDADgFQAFgJgDgJQAMgDAMAAIAXACQAMABAMAAQAMgBAKADIAKADQAFAIAIAHQAHAHANgCIAXgDQAMgCANgFQAJAEAGAKIAOAUIANAUIANATIAMATIALATIAMARIADAGIgDgGIgMgRIgLgTIgMgTIgNgTIgNgUIgOgUQgGgKgJgEIAEgBIADAAQAHgDADgJIADgIQADAKAGAKIACAFIAKAOIANASIANASIAPASIAQARIAPAQIAPARIADAEIgHAAQgMABgNAFIgGACQgIACgGAGQgGAFgBAJIgHgBgAlSBKIgXAAIgDAAQgFgLgKgDIgCAAQgMgEgMgBIgKgOIgQgRIgPgSIgQgPIgQgQIgOgSIgOgRIgNgSQgHgJgIgGQgKgIgDgLQABgFgBgGIAQADQAMABALgBIAWgCIAZAAQALAAAKgCQAMgDAMAAQAIAAAIABQACAGAEAFQAGAJAJAHQAJAHAMgDQAMgDAMABIAGAAIACAAIAOgCIADgBIACAAQALgDAKgFQAHgDABgHIAMASIANASIANATQAHAKAIAHQAIAIAGAKQAGALAIAIIAQAPIAPAQIAJAKIgQgBQgNAAgIAGIgCACIgMgPIgMgTQgGgJgJgJIgPgSQgHgJgHgKIgOgTIgPgRQgIgJgIgFQAIAFAIAJIAPARIAOATQAHAKAHAJIAPASQAJAJAGAJIAMATIAMAPQgIAGgGAIQgFAHgCAIIgFgBQgLgDgMAAQgMAAgLACIgXAEIgYADIgRABIgGAAgAEKhBQgMAAgMgBIgYgBIgYgBQgNAAgLACQgGgmgKgEQgLgFgOAEIgEgKIgIgTQgDgIABgGQABgFACgDIAAAAIAHgLQALgHAMgBIAYgDIAYgDIAXgBIABAAIAAAAQAMAAALAEQAKAEAJAIIAQAQQAIAHAGAKQAHALAHAHIADAEIgDgEQgHgHgHgLQgGgKgIgHIgQgQQgJgIgKgEQgLgEgMAAIAAAAIgBAAIgXABIgYADIgYADQgMABgLAHIAFgGQAGgJAIgIQAIgIAMgEQALgDALgBIAXgDIAGgBIARgDIAAAAQAMgCALAEQAMADAIAIIADACIAFACQAIAJAGALIAKAWQAFAJAGAKIAMAQQgKADgLAFQgMACgGAKQgGAIgCAKQgDAKACAMQgHgCgJAAgADojVIAAAAIAAgEIAAAEIAAAAgAoViWQgIgBgHAAQABgOgIgGQgFgFgGgDQgKgFgNADIgLACQgGgLgBgLQgCgMADgMQACgNAIgHQAIgHAJgGIAUgLQAKgFANgBIACgBIAVgBIAAAAIABAAQAJAAAJACIADABIAAAAQALADAKAEQAMAEAJAHIAVAMQAKAFAJAIIAQAQIAOAQQAIAKAFALQgFgLgIgKIgOgQIgQgQQgJgIgKgFIgVgMQgJgHgMgEQgKgEgLgDIAAAAIgDgBQgJgCgJAAIgBAAIAAAAIgVABQALgEAMgCQAMgBANAAQAMAAALAFIAIAEIAWAJIAFACQAIAEAIAGIASAOQAIAGAKAGQALAGAIAIIAQASQAGAIAFALIgIAAIgYACIgVABIgDABQgJACgEAJIgCAJIgMgBQgMgCgMACQgMACgMABIgZAAIgWABIgFAAIgUgBg");
	this.shape_7.setTransform(125.3,184.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC66").s().p("AFnNmQgMgBgKgGQgJgFgIgKQgIgJgCgMQgBgMACgLQADgNAIgGQAKgIANAAIAAAAQAKgBAIAFIACADQAJAIAEALIgMAEQgKADgEAJQgHAOANAAQAGAAAFgBIAHgBIAFAAIgBAHQACAKgGALIAAAAQgCAGgFADQgEACgFAAIgBAAgAJJNRQgEgLABgLQABgMACgLQADgJAFgGQAFgHAIgDIAGADQAKAGAFALIAKAVQAFAKgDAMQgCALgKAHIgCABIgLAEQgGAAgGACQgMgHgFgLgAlRMkQgLgDgJgHQgJgIACgNQABgMAFgJQAGgKAKgDQAFgBAEABIACAAQAKADAFALIgSAAQgNACgCAMQgDAPAPgCIALgCQALgFAJAAIACACQACAFAAAFIgBAEQgBAEgEADIgGAGQgHADgHAAIgJgBgAhPMdQgMgBgIgKQgIgKgBgMQgCgMAEgLQAFgLAIgIQAFgDAEAAQAIgBAHADIAGAFIAJAJQADAEABAFIABAGQABAMgEALIgDAGIAAABQgEAGgFAGQgGAFgHAAIgCAAgADBKWQgKgDgFgLQgGgLgEgLQgEgMAAgMQAAgNAFgKQADgJAFgBQAOgEALAFQAKAEAGAmIAAAAQgIgJgIALQgJALAMAFIAHABIABgBIAFABQAJAAAIACQAEAJgGAJQgDAFgFADIgGAEIgDAAIgKACQgGAAgHgDgAGNKDQgKgFgHgJQgGgHgBgNIAAgYQAAgNAHgIQAGgHAIABIABAAIAEAAQAKADAGAJQAIAKAKAFQACABAAAEIAEAWQABAHgBAIIgCAIQgEAJgHADIgDAAIgDABIgEAAQgKAAgJgFgAoLJJQgLgCgIgKQgGgJgBgNQAAgNAHgJQAHgJALgDQAPgDADAOQgMADgIAFQgEACgBAGQgBANAPgDQAGgBAGABIAGABQABAGgBAFQAAAGgEAFIgBACQgGAGgIAAIgFAAgAkXJFIgLgJQgJgIgCgMQgBgMADgMQADgMAJgGQAIgHAKgBIADgBQAMAAAFAKIAJAUIAIAVQACAFAAADQgBAHgHADQgKAFgLADIgCAAIgDABIgNACIgCAAgAkJImQAFAAAFgFQAGgGAAgFQAAgEgFgDIAAAAIgBAAIAAAAIgBAAIAAAAIAAAAIgCABIgBABIgFgCIAFACIABgBIACgBIAAAAIAAAAIABAAIAAAAIABAAIAAAAQAFADAAAEQAAAFgGAGQgFAFgFAAIgBAAIAAAAIgCAAIgBAAQgKgDAAgHIABgGIAAgBIAAAAQADgGAGgBIAAAAIABAAIAEABIgEgBIgBAAIAAAAQgGABgDAGIAAAAIAAABIgBAGQAAAHAKADIABAAIACAAIAAAAIABAAgAjQhPQgLgCgKgEIgVgGQgGgCgGAAQAEgFAFgEQAIgGALgDIAWgGIAWgHIAVgJQgBgFgDgEQgHgJgJgGQgKgHgLgEIgYgGQgKgDgKgEIgVgKIgXgJIgVgIQgLgFgLgBIgYgFQgLgBgLgEQgKgFADgMIAIgWQAFgKAGgJIAOgUQAGgKAIgIIAPgRQAIgJAGgJQAHgKAIgFIAKAAIAYABQAMABALADQAMADAJAHIAHAHIgDAFIgPASQgHAKgIAHQgJAIgLAGIgVAMQgKAGgJAIQgJAIgGAKIgDgCIADACIAQAIQALAGAMABIAWADIAXAEQALADAHAHIAQAOQAJAHAIAIQAHAIALAHIATALQAJAHAKAFIATALIAEADIAEgDIAQgPIANgOIALgJQAKgGAIgIQAIgIAGgKIAMgUQAGgKACgMIACgXQABgNAGgIQAGgHAFgHIADgCQAIgHAHgIIAMgNIgSgJIgTgNQgKgHgFgGIAHgJQAJgPAJgNIAFgGQAIAAAKAEIAWAGIAWAIIAUAHIAHAEIABAAIAAACIAAACIABABIAAAEIAAADIgBABIgBABIgDAGIgBABIgCAFQgCADgFAAIgMAAIgBAAIgCgBIAAAAIgBgBIgBgEIgBgCIAAAAQgDAAgDABIgDADIgBABIgCADIAAAAQgBADAAADIABAFIgBAFIgBABQAAAEgDABIgCAAIgCACIgCADIgBABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAABIABAEIABABQABAHgEADIgFACIgBABIgCABIgBABQgBACAAADIABACQACAEAEADIAEADQABABAAAAQABAAAAAAQABABAAAAQABAAAAAAIACAAIADABIACABIADACIABABIAAAIQABADgCACIgBAAIgFAFIgCACIgBACIgBABIgBABQAAAEACADQgGAHgGAFQgIAHgIAIQgIAHgIAGIgTAMIgTAMQgJAHgGAJQgGAKAGAKQAEAHAFAMQgOAEgKAFIgUAKQgKAGgEAFIgJABIAAAAIAAAAQgHAAgFgCIgBgBQgKgEAAgIIAAgBQABgGAEgDIALgJIgLAJQgEADgBAGIAAABQAAAIAKAEIABABQAFACAHAAIAAAAIAAAAIAJgBIgFAJIgGgBQgLgDgMADIgWAHIgWAHIgKADIgMACIgMgCgAAilUIADgDIgDADgAnFmeIgYgCIgXgFIgWgFQgLgDgMgCIgYgCIgZgDIgUgCIgJgMQgGgIgGgKIgEgGQAMgCAKADQALADAMAAIAYABIAYADIAYADIAYACIAYACQAMABAMgBIALgCQAKgDAEgLIAJgWIAIgVIAGgWIAGgXIAHgXQAEgLAHgJQAIgJAKgDQAJgDAJABIAEAAIAHgBQAGgDAEgGQAEgKAAgNQgBgMgFgKQgFgLgKgEIAYADIAFAAIABAAIAAAAQAJAAAGgCIABAAQAJgEAIgJIAHgMQgCALAHAIQAHAJAJAFIAHACQAHgKALgGIAJgDQAGgCAIAAQAMAAAMADIAYADIAKABIAJABIADABQALACAMAAIAYgBQAMAAALACQANADAMgDIAWgEIAXgCIAXgDQAEgBACABIAEAHIAQAQIALAKIgBAFQgJAEgKACQgLACgMgBIgXAAIgWAAIgXgCIgYAAIgYAAIgYAAIgZAAIgYAAIgNAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAABAAAAQgIADgIAGIgPAKQgIAFgGAHQgIALgHALQgEAHAAAJIgKgNQgDgGAAgJIAAgIIAAAIQAAAJADAGIAKANIgJgCQgMAAgKAEIgWAHQgIABgFAFIgDAEQgFAFgCAJQgDgLAFgKIACgDIAHgSIgHASQgEgCgEAAQgMACgFAIIgLAUIgJATIgIAUIgJATIgLAVIgLATIgLASIgFAIQgGAKgLABIgFAAIgTgBgAiNmvIgcgCIgcgCQgKgBgJgDQgIgDgKgBIACgGQAFgLgBgMQAAgMgFgKQgEgLgJgJIgQgPQAFgFADgGQAGgKAIgIQAEgEAEgBQALgEAMgBQAMAAALgEQALgEAJgGQAJgGAHgJQAFgGADgHQAKAGAFAKIAJAVIAKAWQAFALAEALIAGAVIAFAXIACANIACAKIgBAQQgDgBgDAEQgJAJgOACIgUABIgHAAgAk1qvIgFAAIgYgDQgIgBgJgDIgFgCQgJgDgKgIQgIgHgHgJIgDgEQgDgFAAgHQAAAHADAFQgLAGgIgJIAEgYQACgLAAgMQgBgNACgKQACgMAHgJQAGgHAMgDQALgDACgMIABgIIgBgFQApgPAKAIIARANQAJAHAHAJIAMATQAGAKACALIAEAWQACALAAAMIAAAJQgBAIgDAHIgCAHIgDAHIgHAMQgIAJgJAEIgBAAQgGACgJAAIAAAAIgBAAgAlor/QADADADABQAGALAHAHIAPAPQAHAHANgBQAMgCAFgJQADgGgBgJIgCgWQAAgMABgKQgEALgIAGQgJAGgKAFQgLAFgMAAQgLAAgHgGIgCgCgAk3soIAAAOIAAgOQgBgLgEgKQgCAEgEADQgIAHgMADQAMgDAIgHQAEgDACgEQAEAKABALgAmBsbIAAgCQAAgEACgDIAAgBIAAAAQAFgGAEAAIABAAIAAAAQAEAAAEAEQgEgEgEAAIAAAAIgBAAQgEAAgFAGIAAAAIAAABQgCADAAAEIAAACgAlXs8IgBgGQAAgKAKAAIABAAIAAAAIAEAAIgEAAIAAAAIgBAAQgKAAAAAKIABAGg");
	this.shape_8.setTransform(120.5,116.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#33CCFF").s().p("AKmIVQgLAAgLgCQgMgCgMAAQgMAAgLgBIgXgBIgXABIgVAAIgXAAIgYAAIgWgBIgKgGIACgCQAKgGACgLQADgNgFgKIgKgUQgFgLgKgHIgGgDIAGgCIgGACQgHgDgJgBIgYAAIgQABIgDgEIgOgRIgQgQIgQgRIgPgSIgNgSIgNgTIgKgPIACAAIABAAIABAAIAMgCIABAAIAAAAIAJABIABAAIAXAEIAYAEIAXAEIAYACQAKABAJADIAYAIQALAFALABIAYADIAYAEIALACIAXAFIALACIgLgCIgXgFIgLgCIgYgEIgYgDQgLgBgLgFIgYgIQgJgDgKgBIgYgCIgXgEIgYgEIgXgEIgBAAIgJgBIAAAAIgBAAIgMACIgBAAIgBAAIgCAAIgCgEQgGgKgDgLQABgHgBgIIgEgVQAAgEgCgBQgKgFgIgKQgGgJgKgDIgEgBIgBAAQgIgCgIAAIgLgQQgHgKgFgJIgKgWQgGgLgHgJIANADIAXAHIAXAHIAYAGIAWAIIAWAGIAWAGIAYAEIAYAEIAXAEIAWACIAYACIAXAEIAYACQAMABAIAIIABABIABABIADABIAAAAIABgBIAAAAQAGgIAEgMIAJgUIADgGQAFgHAAgHIgBgHIAFgWQADgMAFgLQAFgLADgMQADgLAIgIIARgRQAIgIAJgGQAKgHAMgBIAWgEQAMgCAMgBIABAAIABAAIAKABIACAAIAIABIABAAIABAAQALACALADIAWAHIgWgHQgLgDgLgCIgBAAIgBAAIgIgBIgCAAIgKgBIgBAAIgBAAQgMABgMACIgWAEQgMABgKAHQgJAGgIAIIgRARQgIAIgDALQgDAMgFALQgFALgDAMIgFAWQgEgLgFgJQgFgJgKgGIAAgBIgUgMIgTgNQgJgGgNgDIgXgFQgLgBgLgEIgWgHIgVgGIgVgDQgMgCgLgEIgXgIIgWgGIgZgFQgLgCgKgDIgFgCQgGgCgGAAIgBAAIAAAAIgCAAIgDABIADgBIACAAIAAAAIABAAQAGAAAGACIAFACQAKADALACIAZAFIAWAGIAXAIQALAEAMACIAVADIAVAGIAWAHQALAEALABIAXAFQANADAJAGIATANIAUAMIAAABQAKAGAFAJQAFAJAEALIABAHQAAAHgFAHIgDAGIgJAUQgEAMgGAIIAAAAIgBABIAAAAIgDgBIgBgBIgBgBQgIgIgMgBIgYgCIgXgEIgYgCIgWgCIgXgEIgYgEIgYgEIgWgGIgWgGIgWgIIgYgGIgXgHIgXgHIgNgDIgGgCIgCgCQgJgIgLgEQgMgDgMACIAAgDIgGgXQgCgLACgMQACgLAIgJIAPgQQAHgJAKgGQAKgGANABIAbACIAJgKIADgEIABgBIABgBIABgBIABgBIARgOQAJgHAMgEIAWgJIAWgJIAVgKIAUgJIAMgFQALgEAKgHIASgNQAKgIAFgKQAFgKgBgMQAAgMgFgKIgKgTQgHgLgIgHQgGgIgJgFIATgLQAKgFALgEIAWgGIAXgGIAVgEQAMgDAJgGQAIgHAHgJQAGgIADgKQACgHANABQAMACAMAAQANAAALgEQAFgCAGgFQAIAIAMABQAJACAGgCQAIAHANAAQANAAAKgFQAJgEAAgIIAAgFQAKgBAHgFQAGgGgBgOIALAAQAOABgCgPQgBgJgIgFQADgHAKgHQAKgGALgEQAFgDAEgDQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAIAAAHgDIAXgHIAOgEIASAOQAJAHAKAGIATAMIARAPIASARIAQAQIAOALIgKACIgYADQgMAAgLAGQgJAEgHAHIgRAQIgPAQQgIAHgKAGIgUANQgKAGgLAEQgLAEgMAAQgMAAgMgCIgWgEQgMgDgKgFQgKgEgLAAQgNAAgLAEQgLAFgFAJQgGAJgFALIgKAVQgFAKgIAJIgRARQgJAIgLAFIgWAIIgHADIAKAPQAHALAMABQAEABADgDQADgFAIADIAHACQAHABAHAAQAKgBAKgEQAJgEAHgFQAHgEAFgGIAJgKIANgNIAJgJIAOgOQAHgGAJgEIARgFIAXgGIALgCIAMAAIAOAAQAOgBAMgCIAQgDIAbgIIAfgJIAkgLIAYgIQAMgDALgIQAKAAAKgDIADgBIARgFQALAGAHAIQAIAJAEAKIAIAVQADALACAMQABAMAAAMIgBAXIgEAYQgCALgBANIgCAMIgFARIAAACIgBACIgBACIAAACIgIASIgLATIgOASIgNASQgHAKgIAIQgJAIgGAJIgNAUIgMASIgMATIgNAUIgMASIgLASQgHALgIAHQgJAHgEAKIgDAIIgCAFIgEAHIgMAUIgMATQgGAKgFALIgJAWIgCAGIgGAXIgGAXIgGAXIgEAWIgEAXQgBAMACALQAGAMgGAHIgCAEQgGALgKAHQgKAGgKADQgMAEgMAAIgVABIgDAAgAI3FmIADABIAEABIARAIIAVALIAVAKIASAIIAWAMIAUALIASALIAUANQAKAHAJAIQAIAJAGAKQgGgKgIgJQgJgIgKgHIgUgNIgSgLIgUgLIgWgMIgSgIIgVgKIgVgLIgRgIIgEgBIgDgBIABgZIAAgCQAAgLAFgLIAMgUQAGgJAJgHQAJgHALgFIAWgIIAVgJIAWgIQAKgEAKgGIAPgKIgPAKQgKAGgKAEIgWAIIgVAJIgWAIQgLAFgJAHQgJAHgGAJIgMAUQgFALAAALIAAACIgBAZIAAAAgALQDYIAEgDIAJgIQADgEAFgEIAKgJQAJgJAIgKQAIgNADgQIABgOIAAgJIgDgMIgBgGIABgEIgEgJQgCgLgGgKQgGgKgHgJIgPgSQALADALAFIAWAJQAKAEAIAHIASAOIATAPQAJAHAFAKQADAGAAAHIAAAGIAAgGQAAgHgDgGQgFgKgJgHIgTgPIgSgOQgIgHgKgEIgWgJQgLgFgLgDIAPASQAHAJAGAKQAGAKACALIAEAJIgBAEIABAGIADAMIAAAJIgBAOQgDAQgIANQgIAKgJAJIgKAJQgFAEgDAEQgKAEgDAHIAAAAgAJ0C/IABAAIADAAQAMgBALgFQAKgFAJgHQAJgIAHgKIANgTQAHgKADgLQAEgLAAgLIAAgBQAAgIgCgFIgBgBIABgHQAAgHgDgEIgCgEIgDgBIgJgBIAAAAIAAAAIgCAAIgCAAQgLABgLADIgWAHQgLAEgKAIQgJAHgHAKIgOASIgMAWQgFAKAAAMQAAAMAHAJQAIAJALADIACAAQAIACAJAAIABAAIAAAAgABAHVIgXgBIgYgCIgVgEIgVgDIgXgEQgKgCgLABIgSgDIgBAAIgGgBIgDAAQgLgEgNAAIgZABIgXgBIgWgCIgPgDIgFgCIgEAAIgCAAIADgGQAEgLgBgMIgBgGQgBgGgDgDIgJgJIgGgFQgDgGgGAAQgKgEgNAAIgHgBIgKgJIgPgRIgQgQQgIgHgGgLQgFgKgJgIQgHgHgIgKIgNgTIgNgTIgMgRQAAgEgCgFIgIgUIgJgUQgFgKgMAAIgDAAIgNABQgEgMgHgIIgQgRQgIgJgKgFQgLgGgHgGIgTgOQgIgGgIgEIAFAAIAIgBIABAAIAAAAIACAAIAEAAIAXgBIAWgCIACAAIASgBIAAAAIAAAAIACAAIACAAIADAAIASAAIABAAIADAAIACAAIABAAIAIAAIABAAIAHAAIADAAIAYABIAXACIAMAAIgMAAIgXgCIgYgBIgDAAIgHAAIgBAAIgIAAIgBAAIgCAAIgDAAIgBAAIgSAAIgDAAIgCAAIgCAAIAAAAIAAAAIgSABIgCAAIgWACIgXABIgEAAIgCAAIAAAAIgBAAIgIABIgFAAIgFgCIgVgJIgJgFQgLgFgMAAQgMAAgNACQgLABgMAFIgCAAQgMACgLAFIgTALQgKAGgIAGQgIAIgCANQgCAMABALQABAMAGAKIgNACQgNABgJAGIgDAEQgIAJgEAMQgCAHAAAHIgWAEIgSABIgBAAIAAAAIgCAAIgCAAIgHAAIAAAAIAAAAIgOAAIgCAAIgBAAIgJABIAAAAIAAAAIgMgBIgBAAIgBAAIgMAAIgBAAIAAAAIgEAAIAEAAIAAAAIABAAIAMAAIABAAIABAAIAMABIAAAAIAAAAIAJgBIABAAIACAAIAOAAIAAAAIAAAAIAHAAIACAAIACAAIAAAAIABAAIASgBIAWgEIAAAKQABAMAHAKQAHAKAKAFQAKAFANAAQAMABALgCQANgCAKgEQAGgDAAgJIABgCQAEgFAAgGQADALAKAHQAIAHAHAJIAOARIANASIAPASIAPAPIAQARIAQARIAQASIAJANQgMgBgMAAQgMABgIAIQgGAGgFAHIgJABQgMACgMgCIgYgDIgVgCIgVgCIgWgDQgKgCgLAAQgJgHgGgLQgGgJgJgIIgRgRIgRgRIgOgSIgOgSIgNgUIgOgTIgQgRIgPgRQgHgIgIgGIAGAAQgGgDgEAAQgMgEADgLIAEgRQACgPAGgOIALgdIAJggIADgPQADgSAJgIQgEgFgHgEIgVgIIgXgGIgXgFIgYgCQgPgCAIgNIALABQAMACAMABIADAAIACAAIAAAAIABAAIATgBQANgCAIgJQAHgKAFgKQAEgKACgNQABgLAAgLIAAgBQAAgNgDgLQgDgMgGgKQgHgLgIgIIgQgRQgJgIgKgFQgLgFgMgCIgDAAIgKgBIAAAAIgBAAIgEAAIAAAAIgEAAIgBABIgBAAIgDAAIgEAAIgEABIgBAAIAAAAIgCAAIgBgBIgCAAQAJgHAKgDIAXgCQAMgCAMABIAYABIAWACQAMABAMADQAKAEAMABQAMACAMAAIAXAAIAXAAIAYABQAHAAAGABIAJADQgBgFADgEIANgTIANgTQAHgIAJgIQAKgJACgKIADASQACANgIAIIgKAKQgKAIAIALQAOAHAKgFQALgFAIgIQAJgIACgLQABgMAAgMIgBgYIgCgYQgBgLABgKQAAgIAEACQACAAAHgJIAQgRIASgNQAJgHAIgIQAJgIAKgDQAHgCADgDQABAJAGAIQAGAIAKADQAMADAJgIIADgDIgBAIQACALAJAEQAGADAGgBQADgBADgDQgEANALACQAOADAGgKIACgCIAOAMIATANQAKAGALADQAMADAMABQAMABAKADIAVAHIABAAQAEAFAGABIAHABIAOAHQAJAEAKADQgGANgJAIQgIAJgKAHIgUALQgKAGAAAMQAAALADALQAEAMAJAHIATANIAUAOIATANQAKAGAIAIIAQARIASAQIAQARIAPAQIAJAJIAFAHIgFgHIAFABIAWADIAXACIAWABQgJgBgFgFIgQgRQgHgIgGgKIgNgTQgHgKgDgKIgIgUIgGgXQgEgMgGgIIgMgSQgFgJgIgHIAFgBIACAAIACAAIAPABIAJALQAHAJAJAIIARAOQAHAEAJgDQAKgFACgLQACgOgHgHIgNgOQAIgFAMgFIAXgIQALgDAMgCIAWgCIAWgDIAXgDQAMgCAMAAIAWAAQANAAALAEIAVAIIAWAKIAUAJIAWAKIAUAJIAWAJIANAFQgQALgMADIgXAEQgNABgDALQgCAHABAFIAAAHIABAPIAAAGIgDANQgEALAGAJQAEAFAIgBQALgCAIgIIAPgPQAIgHAJgGIATgMIAVgMIAUgLQAFgCAIgCIACACQAIAEAFAGQgMABgLADQgLAEgKAFQgKAFgIAIQgIAIgGAKIgMAUIgNAUQgGAJgIAJQgHAJgKAFQgKAGgMAFIgWAHIgYAGIgWAGQAFAJABAMQACALAAANIAAAYIgBAYQgCAMACAIIgFAAIgYAEQgLABgLADQgLAEgIAHQgIAJgHAJIgEAGQgFAFgDAGQgCADgBAEQgBAHADAHIAJAUIADAKQgKgDgLAAQgOAAgIAFIgMAIQgJAHgBAMQgBANAEAKIAJAVQAFALAHAIQAHAHANAAIAXACQAMAAAMgBQAEgBAFgEIAEgBIADgBIAGgDIANAQIANATQAGAKAIAIIAQARQAJAIAGAKIAMAUIAEAGIgKAAQgMgBgJAJQgHAIgCAMIgBAIIgVAAIgYAAgAr/AQQADAMAFAKQAFALAKAHQAIAGAJAIQAIAIAHAKQgHgKgIgIQgJgIgIgGQgKgHgFgLQgFgKgDgMQgCgFAAgFQAAgGADgGQAFgLALgFQAKgFAMgCIAXgDIAXgCQALgCALAAIASAAIAAgFIgCgRIgEgWQgCgMgDgLQgEgLgFgJIgKgUQgFgLgHgIQgFgFgHgBIgMgCIAMACQAHABAFAFQAHAIAFALIAKAUQAFAJAEALQADALACAMIAEAWIACARIAAAFIgSAAQgLAAgLACIgXACIgXADQgMACgKAFQgLAFgFALQgDAGAAAGQAAAFACAFgAg4BMIAXACIAWACIAJABIgJgBIgWgCIgXgCIgYgBIgYABQgNAAgLACIgEABIgPABIgBAAIAAAAIgBAAIgCAAIgDAAIgRAAIgBAAIgDAAIgVAAIgXAAIgCAAIgBAAIgJAAIgLgBQgMAAgMgCIgWgDQgLgCgLACIAAgBIAAgOIAAgCQAAgLACgLQACgLAFgLQABgEAAgDQAAgHgJgEIgHgDIgBgGQAAgFAEgDQAFgEAHgCIAXgFIAKgBIANAAIABAAIAAAAIABAAIAAAAIAMAAIALABIAYADIAYAAIAXAAIACAAIABAAIAAAAIABAAIAJAAIADAAIgDAAIgJAAIgBAAIAAAAIgBAAIgCAAIgXAAIgYAAIgYgDIgLgBIgMAAIAAAAIgBAAIAAAAIgBAAIgNAAIgKABIgXAFQgHACgFAEQgEADAAAFIABAGIgPgFIgBAAIgMgBIAAAAIAAAAIgEAAIgBAAIgEAAIgBABIgLgEQgMgCgLgEIgVgHQgLgEgLAAQgMgBgMgFQgLgEgMAAIgXAAIgVAAIgYAAIgVAAQgMAAgMACIgVAEIgBAAQgKACgKAAIgBAAIAAAAIgBAAIgBAAIgGAAIAGAAIABAAIABAAIAAAAIABAAQAKAAAKgCIABAAIAVgEQAMgCAMAAIAVAAIAYAAIAVAAIAXAAQAMAAALAEQAMAFAMABQALAAALAEIAVAHQALAEAMACIALAEQAHADACAFIABAFIAAAAIgCAWIgBAYIAAAMIAAAMIAAADIAAgDIAAgMIAAgMIABgYIACgWIAAAAIgBgFQgCgFgHgDIABgBIAEAAIABAAIAEAAIAAAAIAAAAIAMABIABAAIAPAFIAHADQAJAEAAAHQAAADgBAEQgFALgCALQgCALAAALIAAACIAAAOIAAABQALgCALACIAWADQAMACAMAAIALABIAJAAIABAAIACAAIAXAAIAVAAIADAAIABAAIARAAIADAAIACAAIABAAIAAAAIABAAIAPgBIAEgBQALgCANAAIAYgBIAYABgAk2BKIgCAAIgBAAIgKAAIgNAAIgLgBIALABIANAAIAKAAIABAAIACAAgAhFgXIAXAEIAXAEIAXADIAXAGIAWAGQAMADALABQALABALADIAEADIgEgDQgLgDgLgBQgLgBgMgDIgWgGIgXgGIgXgDIgXgEIgXgEIgCAAIACAAgAJzC/QgJAAgIgCIgCAAQgLgDgIgJQgHgJAAgMQAAgMAFgKIAMgWIAOgSQAHgKAJgHQAKgIALgEIAWgHQALgDALgBIACAAIACAAIAAAAIAAAAIAJABIADABIACAEQADAEAAAHIgBAHIABABIACAOQAAALgEALQgDALgHAKIgNATQgHAKgJAIQgJAHgKAFQgLAFgMABIgDAAIgBAAIAAAAIgBAAgAKLCLQAHgBAHgHQAIgIAFgNQAAgKgLAAIAAAAIAAAAIgFABQgKABgHAJIgHAKQgCADAAAEQAAAGAJADIABABIAEABIAAAAIABAAgAKmBuQAFgFAAgEQAAgEgGgCIgCAAIgCgBIAAAAIgBAAIABAAIAAAAIACABIACAAQAGACAAAEQAAAEgFAFgALFBHQADADACAEQgCgEgDgDQgFgEgCgGQACAGAFAEgAKKCLIgEgBIgBgBQgJgDAAgGQAAgEACgDIAHgKQAHgJAKgBIAFgBIAAAAIAAAAQALAAAAAKQgFANgIAIQgHAHgHABIgBAAIAAAAgACqCKIAAAAgAKmBuIAAAAgALNBdIAAAAgAuUAEIgCAAIgDAAQgMgBgMgCIgLgBIgLAAQgMgBgJgHQgJgGgJgJQgHgIgHgKQgGgKgEgLIgGgWQgCgNACgLQADgLAFgKQAFgLAGgIQAHgJAKgGIANgJIAFgEIACAAIABABIACAAIAAAAIABAAIAEgBIAEAAIADAAIABAAIABgBIAEAAIAAAAIAEAAIABAAIAAAAIAKABIADAAQAMACALAFQAKAFAJAIIAQARQAIAIAHALQAGAKADAMQADALAAANIAAABQAAALgBALQgCANgEAKQgFAKgHAKQgIAJgNACIgTABIgBAAIAAAAgAujgsIAHAAIADAAQAMgCAGgKQAGgKACgLIABgHQAAgJgFgIQgFgHgDgJQgEgLgLgGQgLgFgLgCIgEAAIAEAAQALACALAFQALAGAEALQADAJAFAHQAFAIAAAJIgBAHQgCALgGAKQgGAKgMACIgDAAIgHAAIgBAAIAAAAIgGAAIgGAAQgNgCgKgFQgKgFgHgJQgHgJgEgKQgCgGAAgGQAAgFACgGQAEgLAKgGIAUgMIAMgFIABAAIAIgDIgIADIgBAAIgMAFIgUAMQgKAGgEALQgCAGAAAFQAAAGACAGQAEAKAHAJQAHAJAKAFQAKAFANACIAGAAIAGAAIAAAAIABAAgAu7hsQgFAOAQgCQANgBAEgKQgFgEgFgBIgDAAQgEgCgDAAQgFAAgDAGgAk8gIIAAAAgAE5j5IgVgKIgTgKQgKgGgKgEIgWgJQgMgEgMABQAAgDgCgDQgDgGABgJQADgKAJgJQAIgHAGgIIANgSIAGgLQAEAHALAFQAKAFALACIAWAEQALACALAAIAYAAQAMABALgEQAKgEAMgBQALgCAHAMQADAGAFADQAJAGAMABQALACANAAIANAAIgDABQgKAEgJAHQgIAHgIAIQgHAIgLAHIgVALQgKAFgLAEQgLADgKAFQgKAFgKAGIgMAIIgRgIgAjtklQgIgGgJgIIgPgNQgHgHgIgIQgIgJgJgEIAGgCIAWgGIAXgEQAKgCAJgIQAGgEADgGIAIgNQAJAHALAEQALAFAMAAIAXACQANAAALgBQAMgBALgDIAYgEIAXgEIAJgCQAEAKAIAHQAEAEAAAGIAAAEQgCAKgFAIIgHAPIgQgCQgMgBgMABQgMAAgLADQgMACgLAEIgJADIgVAIIgWAIIgXAHIgUAHQgHgDgGgEgAGPmiQgIgHgLgFIgVgJQgLgEgNAAQgMAAgMACQgMACgMgBQgNgBgGgHQgIgJgJgGIgUgKIgVgIQgNgEgIgBQABgFACgFQALgBAJgEQAKgDAIgIIA9ADQAbABAeAFQAeAGAbADIAfAFIAHAKQAGAJAIAIIASAQQAJAIAJAHIAOALIAMAOIgXABQgNABgOAAQgLgBgLACIgYABQgDgBgGACQgGgKgJgHgAiHnMQgMgBgMgDQgMgDgKgFQgKgEgJACQgFgMgEgHIA3gRQAagIAfgDQAdgCAdgFQAdgEAdABIARgBQAAANABAMQABAPgLgFQgKgFgIgGQgJgHgLAAQgNAAgLAEIgWAIQgKAFgIAIIgSAQQgJAIgLADQgLADgLAAIAAAAg");
	this.shape_9.setTransform(136.7,150.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AIAFEIAGgGQAHgHAMgFIAUgIQALgEALgDIAXgEIASgCIABgBQABALgBAMQAAAMgNAAIgOAAIgKAAIgYACIgXADIgMABIgNgBgAF1DbQgDgLgFgKQgFgKgHgJQgHgHgLgFQgKgEgMgDIgWgGIgWgHQgLgEgMAAIgWAAIAMgFIAYgIIAKgEIAJgDIAEgBIgEABIgJADIgKAEIgYAIIgMAFIgPAIIgXAQQgIAGgIAIQAAgJgBgIIgCgMIgEgLIgJgTQgGgLgJgIIgPgQQgJgJgKgHIgUgMIgUgJQgLgFgMgCIgXgGIgWgHQgMgDgJgFQgLgFgLgBQgHAAgGABQAJgFAMgEIAUgGIACAAIAVgFQALgEAMgFIAVgMIAVgMIABgBIAOgJIAUgFIACARQACALADALIABAEQgBAIAOADQALADALAHIATANIATAOIAUAMIATAMIAUAOIAUANQALAGAMAEIAWAIIAUAHIAXAHQALAEAMACQALABALADIAXAIIAVAGQAIACAFAAIgGAGQgIAHgGAIIgPAQIgRASIgRAQIgDADIgDADIgDABIgCABIgCgJgAmKAXIgDgBIgCgBQgMgQgIgCIgXgFIgXgEQgNgCgLADQgMAEgIAHQgDADABADIgEgJIgEgLQgFgIgKgGQgTgMgWgHQgMgFgNAAQgKgBgEgCIAEgDIgEADIgEgBIAEgEQAJgHALgEQAKgDAKgHQAKgHAMgGQAAADADACQAHAJAKADIAWAGQALADAMAAIAXAAIAYAAIAYAAQAMgBALgDQALgEALgEQALgFAJgHQAFAHAHAEIgDACIgMAJIgPAPQgJAJgFAKQgFALgDALQgBAIAAAXIgBAAIgBAAgAoEjNQgMAAgKgEIgWgIQgMgEgKgHIgBAAIgFgDIgLgKIgQgRIgEgGQgCgGABgIQABgJAKgIQAJgHALgGQAKgGAMgCIAWgFQAMgDAMAAQAMAAALAFQALAEALAHIAUANIATANQAIgFAIgIQAHgGAKgGQAJgFALgCQAMgDAMABIAXADQAKACAKAGIAFADQAGAGACAIQADAMgFALIgDAGIgIANIgFAHQgHAGgLACIgCABQgMACgLAGQgLAFgNAAQgLAAgqgJIgHAEQgJAHgLAEQgMAFgMABIgQAAIgHAAgAm4kNQADgGAAgHQAAAHgDAGg");
	this.shape_10.setTransform(186.5,72.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FF00").s().p("AEJD6QgGgKgHgHIgQgQIgPgQQgIgJgKgFIgUgNQgKgHgIgDIADgCIAUgMIAUgNIARgMIgRAMIgUANIgUAMIgDACIgMAEIgIADIgOAEIgXAHQgIADgHAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQgEgKgBgMQgBgMgHgKIgNgTIgMgQIgDgCIgPgRIgJgKQAEACAIAAQANAAALgEQAKgDAJgHQALgHAKgEQALgDALgGQALgFALgBIAXgDQAMgBALgDIALgEIADgBIADgBIADgDQgBALABALQACAMADALQAEAKAHAJQAGAIAJAIQAIAIAJAHIATAMIASALIATALIAHAGIgBAEIABgEIALAJIARAPIARAPIAFAGIgFACQgFABgGgBQgYgCgTALQgPAKgLALQgHAHgFAHIgBACIgCAGIgDAEQgEgBgDgFgADOAcIgBgFIABAFgAknibIgQgPQgJgIgIgGIgUgMIgSgMIgIgFIAGgBIADAAIACgBIACgBIATgHQAMgEALgGQAJgFAKgHQAJgGAKgEQAFAKAJAHQAIAIALAEIAVAJIAWAHQALAEAHAEIgUAGQgMAEgJAFIgGACIgBABIgCABQgIAFgFAHIgQAQQgHAIgGAJQgHgJgJgIg");
	this.shape_11.setTransform(203.4,93.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC9A67").s().p("AATLbIACgYIAAgYQAAgNgCgLQgBgMgFgKIAWgGIAXgGIAWgHQAMgFALgGQAJgGAIgJQAIgIAFgKIANgTIANgUQAGgKAIgIQAIgIAKgFQAKgFALgEQALgDAMgBIADAEIACAEIgCgEIgDgEQgFgGgIgEIgDgCIgRgJIgVgIIgWgJIgIgEQAGgKAHgGQASgOAUgJIAIgEQALgEAOABIAQAAQAIAAAHADIAFABQAIAGAHAKQAJAFAHAIQAIAHAGALIALATQAFAJAAANQAAALgEALQgFAKgKAIIgTANQgJAHgLAEIgMAFIgUAJIgWAKIgVAJIgXAIQgMAFgJAHIgRAPIgBABIAAABIgBAAIgBACIgDAEIgJAKIgbgCQgNgBgKAGQgKAGgHAJIgQAQQgIAJgCALQgBAMACALIAFAXIABACIAAAAIgRAEQgCgIABgMgAiuJZIgXgBIgWgDIgGgBIgIgJIgQgQIgQgRIgRgQIgQgRQgIgJgKgFIgTgNIgUgOIgTgNQgJgHgEgMQgEgLABgLQAAgMAKgGIAUgMQAKgGAIgJQAIgJAHgMIADAAQAMAEALAGQAKAGAJAIIASAQQAIAIAHAKIAGAIIgPgCIgCAAIgCABIgGABQAIAHAGAJIAMARQAGAJADAMIAHAWIAHAVQAEAKAHAKIAMATQAGAKAIAIIAQARQAFAFAIABIgVgCgAkuG3QAJgFAMgEIANgEIgNAEQgMAEgJAFgAAAFsIgXgBQgMgCgLgDIgVgHIgWgJQgLgFgIgHIgRgNQgGgGAEgGIADgFIAHgPQAEgJACgJIABgEQAAgGgFgEQgHgHgEgKQgCgIAAgIIAAgHIADgXIgDAXIAAAHQAAAIACAIIgJACIgYAEIgXAEQgMADgMABQgKABgNgBIgXgBQgMAAgLgFQgMgEgIgHIADgEIACgFIgCAFIgDAEIgIANQgEAGgFAEQgJAIgKACIgXAEIgWAGIgHABQgHABgGgHQgIgIgJgFQgJgGgKgEQgLgEgMgCIgWgHIgXgHQAAgBgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgFAEgIABQgMACgLgEIgEgCQgDgDgCgDIgBgEIABAEQACADADADIAAAEIAAAJIgEAIIgBACQgDAGgFAFQAFgFADgGQAHgGALgCQAKgBABANQAAAHgBAHIgBADQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAAACIAAACQgCAEgDACQgCADgDAAQgGACgGgDQgKgEgBgMIAAgHIgDADQgIAIgMgDQgKgDgGgJQgGgHgBgKIAAgGIgFACQgLAFgLgFQgJgEgEgLQgDgIAJgOIACABIABABIAFAEIAHgFQAIgIAJgEQAFgDAGABQANABgBAPQAAAKgGAIIgCACQgGAHgHAFQAHgFAGgHIACgCQANgDAKgEQAMgEADAIIAAgEQACgKALgFIABAAQAJgEALgCIAFgBIAFAAQAHAAAGABIAUAHQALAEALACQAMADALgDIALgDIAWgIIAVgGQAMgEALADIAHACIAIAAIAIAAIgIAAIgIAAIAFgJQADgGALgGIAUgKQAKgEAOgEQAJgCAKAEQAKAFAMADQAMADAMABQALAAALgDQAKgDAKgIIASgQQAIgIAKgFIAWgIQALgEANAAQAMAAAJAHQAIAGAKAFQALAFgBgPQgCgMABgNIgGgKIgGgWIgDgPIAAgIIAFgCIAEgDQAEAAABgEIABgBIgBgCIgCgDIgBgCIgCgGIgBgCIgBgEIAAgBIADgEQADgCACgDIAAAAIACgCIABgCIABgCIABgFIgBgDIAAgBIgBgCIgBgCIAAAAIAGgEIABgBIABgBIAFgCQADgDAAgEIgBgEQAAgDgBgDIAHgCIACgBIAEgCIACgBIAEgCIACAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAIACABIABABIAAAAIADABIAGgBIABgBIAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBIAKADQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIABgCIABgBIABAAIABgBIABAAIACgBIABgBIABAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIABgBQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIABABQADABAEAAIABAAQAEAAADgCIACgBIACAAIABAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABIAAAAIAEABQAEABADgBIADgBIACgBIACAAIACgBIAEgBIADAAIABgBQACgBADABIABAAIABABIABABIABABIAAADQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIADADIACAAIAGABIACAAIAEABIACAAQAHAAAFACIABACIABABQACAEAAAGQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIACAAIADABIACABIABABIADACIAAABIADADIABAAIAAACQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgBABIAAABQABADACABIABABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIABAAIACAEIABAAIAAABIgCABIgBABIAAADIgBAAIAAADQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgCACAAAEIABAEIABACIABABIABABIAAABIABABIABABIABAAIABAAIAAAVIAAANIAAABIAAAKQAAALgDALQgCAMgIAIIgBABQgIAIgJADQgKAEgKABIgDABIgXADIgXABQgMAAgMgCQgMgBgLgEIgUgHQgJgEgKgFQgJgFgHgIIgEgFIAEAFQAHAIAJAFQAKAFAJAEIAUAHQALAEAMABQAMACAMAAIAXgBIAXgDIADgBQgDAFAAAFQAIABANAEIAVAIIAUAKQAJAGAIAJQAGAHANABQAMABAMgCQAMgCAMAAQAMAAAMAEIAVAJQALAFAIAHQAJAHAGAKQAGgCACABIAZgCQAKgBAMABQANAAANgBIAYgBIABABQABABAAAAQABAAAAAAQABAAAAAAQABgBABAAIAQADQAKADAHAHQAFAFAGADQACgHADgGQAFgKAJgFQAKgHAMACQAIABAFAFIACADIACgCQAGACAFAGQAHALgEAMQgFAKgLAGQgLAGgMAAQgNABgLgDQgMgCABgOIABgCQgJAIgGAKQgHAKgCAKQgMgCgMABQgLAAgKADIgSAHIgOAAQgMAAgLgCQgNgCgJgGQgEgDgEgFQgGgMgLACQgMABgKAEQgLAEgMgBIgYAAQgLAAgLgCIgWgEQgLgCgKgFQgLgFgEgHIADgKQADgIAAgKQAAgNgEgKQgFgLgHgKQAHAKAFALQAEAKAAANQAAAKgDAIIgDAKIgGALIgNASQgGAIgIAHQgKAJgCAKQgBAIADAHQACADgBADIgHAEIgJAEIgRAHIgWAJQgKAFgMAAIgYABIgCAAIgWgBgAAHEgQgMAAgLAEIgVAHQgLAFgHAIQAHgIALgFIAVgHQALgEAMAAIABAAIABAAIAAAAIABAAQAJAAAIADIABABIABAAIAAABIAHADQAMAFAMACIADAAQAFAAAEgCIABgBIAAAAIAAAAIgBABQgEACgFAAIgDAAQgMgCgMgFIgHgDIAAgBIgBAAIgBgBQgIgDgJAAIgBAAIAAAAIgBAAIgBAAgAHnD5IABgHIgBAHgAHuD0IgGgCIAGACgADlDsQAFAAAFgCQgFACgFAAIAAAAIgBAAQgFAAgFgEIgBAAIAAAAQgJgIgHgKQAHAKAJAIIAAAAIABAAQAFAEAFAAIABAAIAAAAgAFPDlIgCgEIACAEgAIjDeIgDgEIADAEgAqADVQAGgCAFgEQgFAEgGACgABsCXIAAgHIAAgEIAAAEIAAAHgAgLAtQADALAHAKIALATQAGAJAKADIAXAHQAMADALgFQAKgFAKgIQAIgIAEgLIAIgTQAEgMABgNQgJgBgGADQgLAEgNAAIgYABIgXAAQgNAAgLgCQgKgCgLgEIADAUgAAmAGIgBgGIAAgEQABgJAGgDIAAAAQAGgCAFgBIAAAAIAAAAQAFABAFACQAKAFACAMQgCgMgKgFQgFgCgFgBIAAAAIAAAAQgFABgGACIAAAAQgGADgBAJIAAAEIABAGgAgVgQQgCADgBADQABgDACgDIAAAAIABAAQAJgIALADIAUAGIgUgGQgLgDgJAIIgBAAIAAAAIAAAAgABtgVQAFAFAEAFQgEgFgFgFIgBAAIgBgBIAAAAQgEgCgDAAIAAAAIgBAAQgFAAgEAFQAEgFAFAAIABAAIAAAAQADAAAEACIAAAAIABABIABAAgAIjFSIgLgSIgBgEQAAgDADgDQAGgIANAFQgHgJAIgHQAKgIAMADQgFgFgDgHQgFgLALgCQAHgBAFACQAKAEALABIAZACQAHAFACAJQACAPgOgBIgLAAIgGACIgHABIgBAAIAAAAIgGgBQgJgCgJgHIgEgEIAEAEQAJAHAJACIAGABIAAAAIABAAIAHgBIAGgCQABAOgGAGQgHAFgLAAIAAAGQAAAIgIAEQgKAFgNAAIgBAAQgNAAgHgHgAI7FAIAYACIACABIACgBIgCABIgCgBIgYgCQgMgCgCgLQACALAMACgAIUFSQgMgCgJgHQgHgIAMgHQAKgGAMACQgDADAAADIABAEIALASIgIABIgHgBgAoJErQgLgCADgNQADgCACgEIAAgCIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIABgDQACgIALgBQAOgDAAAOQgBALgFAHIgBACQgFAHgKABIgFgBgAh+DsIAAAAgAogDlIAAAAgAEMABIgBgFIAAgCQgDgDAAgDIAAgBIgBgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBgBIgBAAIgGgCIgEABIgHAAIgDAAIgBAAIgEgBIgCAAIAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQgCgDABgEIAAgGIAAgBIgEgFIgBAAIgDgCIgBgBIgCgBIgCAAIgDgCQgBgCAAgEIABgCQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIABgBIADgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBIABgBIACgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgCQgCgEgFAAIgCgBIgNgEIgBAAIgBgBIgCgCIABgDIABgEIABgBIABgEIAAgCIABgBIAAgDIgBgCIAAgBIgBgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAIgBgBIgBAAIgBAAQgHgDgGAFIgBABIgCABIgGABIgDgBIAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgFIAAgBIgCgCQgBgDgEgBIgFAAQgFgBgEACIgDAAIgIACIgCAAIgCABIgBAAQgGABgFgDIgBAAIgDgBIgEgDIgDgDIgDgDIAAgBIAAgHIAAgBIABgHQAAgDgDgCIgBAAQgEgDgEABIgDAAIgDABIgBABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABIgFAFQgEADgEgBIgBAAIgBgBIgCgEIAAgBIAAgBIgCgBIgGAAIgCgBQgBgCgEACIgCABIgGABIgEABQgEABgBACQgCAGAAAHIAAABIgCACIgBABIgCAAIgBABIgCABIgFABQAAgYACgIQACgLAGgLQAFgLAIgIIAQgPIAMgJIARALQAKAHALAFIAWALIAVAIIAXAIIAUAIIANAHIAIAFIASAMIAUAMQAIAGAIAIIARAPQAJAIAHAJIgBACIgBABQgFAKgDALQgEALAAAMIAAAYIAAABQgSAGgHADIABgBgAklgzQgTgVAXgXQAOAGAIAKIAEgGIACgEQAEAHALAHIAUAMIASAKIgMANQgHAIgIAGIgDADQglgHgSgVgAiUhqIgUgHIgWgIIgWgHQgLgDgIAAQAFgFAFgCIgFAAQgNAAgLgEIgNgEQAIgJAKgHIATgNIATgNIAJgHQAFACAKABQANAAAMAEQAVAIAUAMQAKAGAEAIIAFAMIADAJIABAFIgBAAIgBgBIgDAAIgDAAIgDAAIgCABIgBAAIgCAAIgBAAIgGAEIgEACIgCACIgBAAIgGAEIgIAHIgBABQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIAAAAIgHgDgAgYjQIgXAAIgYAAQgLgBgLgCIgWgGQgKgDgIgJQgCgCgBgDIAAgCIgBgTIgCgYQgBgMgGgIIgMgRQgHgJgEgKQgFgKABgNIABgOIAGgCIAAAAQALAGALAFIAXAIQAKAEALAAIAYAAQAMgCAMgEQALgEAJgHIAHgEQAoAJAMAAQAMAAAMgGQALgFAMgCIACgBQAFAKAAAMQgBAMgCAKQgEALgFAHQgGAKgEAJQgDALgBAMQgBAMADALIAHASQgIAHgLAFQgLAEgLAEQgMADgLAAIgVABIgDAAgAl9lZIABgWIAYAAIAZAAIAYAAQgVAEgKADQgMAEgJAEQgIAFgKAHIgEADIAAgIgAkumRQgLgCgMAAIgYAAQgMAAgLgCIgEAAQAKgLAKgGQAHgFAJgDQALgBAJgFIAPgHIARgJQAJgDAKgCQAMgBAHgFQAIgFgCgHIACgGIABgDQAEgEAGgDIAWgLQALgFAMgBQALgCAMABQAMACAMgBQAMAAALgEQALgDAGgKQAGgMgHgHIAFADIgFgDIgMgJIgOgPQgIgJgBgMIgBgHIAAgKIgBgHIACgBIAAAAIACgBIADgCIABgBIACgBIABgCIAAgCQABgEgCgBIgBgBIgBgDIgBgDIAAgCIAAgBIACgCIABAAIABAAIAAgIIAAgCIgBgBIgDgCIgBAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIABgCIAAgBIABgBIACgBQAEgCABgCIAAAAIABgCIAAgDIAAgBIgCgDIgBgBIgBAAIgBgBIgBAAIgCgBIAAAAQgBgDABgEIAAgBIABgBIAEgEIAAAAIACgBIABAAQABgBABAAQAAAAABgBQAAAAAAAAQAAgBABgBQABgDgDgCIgCgBIgBgBQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIABgBIACgCIAAAAIACgDIAGgEIAAAAIAKgBIABAAIADgBQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBABgBIAAgBQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgCAAQgBgBAAAAQgBAAAAgBQAAgBAAAAQAAgBABgBIAEgEIAAAAIADgCIACgBQADgCADABIACAAIADACIADACIADABQAEABACgCIABgCIAAgBQgBgCAAgDQAAgDABgCIAEgCIADgBIADAAIAGAAIABAAIACABIABAAIAEADIACABQADACADgBIABAAIABgCIABgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAFgBADACIACABIACAEIABABIAAACIADAEIAAABIAGACIACAAQADAAADgBIAFgDIABgBIABAAQAHgBAGAAIACAAIACABIACACIACABIABAAIAAABIABACQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAIgBAEIAAADIAAACIAEACIAAABQADABAEAEIABABIABABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAAEQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgIAGIgBACIAAACIACABIABABIAFAEIACABIABABQADACAAADIgBACIgCAEIgEAEIAAACQgBAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABAAIACACIACABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAAABIgBABIgDAEIABACIACAWIABAIIgBACQAAAGgDAHQgEALgGAJIgNATQgFAHABAMQABALAPAEQALADANABQAMABAMAAQAMAAAMABQAGABAFAEIAOALQACACAEABQAHgHALgDQALgDAMAAQAMABALACQAMADAJAGIAJAFQAFgIANgGQALgEAMgCQALgBAMACQALABAKAGIASALIAEACIAYADIAXADIAJABIgJAGQgKAGgJAHQgIAHgLADQgJADgLACIgWADIgYADQgMACgLgEQgLgDgMgBQgLAAgKADIgSAGQAGgDAFgEQgFAEgGADIgDABQgIAEgMABIgYABIgYgCQgKgBgJgFIgGgEQgKgFgJgCIgXgDQgNgBgLADQgLACgKAFQgKAGgGAGQgHAIgIAFIAAgEIAAgBIgCgKQgDgMgEgKQAEAKADAMIACAKIAAABIAAAEIgUgNIgUgNQgKgHgLgEQgLgFgMAAQgNAAgLADIgWAFQgMACgLAGQgLAGgIAHQgKAIgBAJQgCAHADAHQgDgBgDAAIgXADIgYADIgXAEIgMABIgMgBgADonwIgDgCIADACgAhWp2QgBANAGAKQAFAKAGAJQAIAJALAEQAKAFALgBQAMgCALgFQAEgDADgEQAIgHAFgKQAFgKABgMQABgGgCgFQgFAIgKAFIgEACQgMAFgOAAQgKABgJgDIgUgIIgPgGIgBAAIgEABgAgHqFQACgDAAgEQAAgDgDgDQgFgGgGAAIAAAAIgBAAIgGABIgBAAIgBABIAAAAQgMAFAAALIAAABIAAgBQAAgLAMgFIAAAAIABgBIABAAIAGgBIABAAIAAAAQAGAAAFAGQADADAAADQAAAEgCADgAhXqpQgKADgBALQABgLAKgDIAGgBIABAAIAAAAQAHAAAEAGIABABIgBgBQgEgGgHAAIAAAAIgBAAIgGABIAAAAgAACq3QAJABABAIQgBgIgJgBIgCAAIgBAAIAAAAIAAAAQgJAAgFAIIgBAAIAAABIAAgBIABAAQAFgIAJAAIAAAAIAAAAIABAAIACAAg");
	this.shape_12.setTransform(144.8,87.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("ACcKRIgVgJIgVgJIgVgKIgUgJIgXgKIgVgIQgLgEgNAAIgVAAQgMAAgMACIgWADIgYADIgWACQgMACgLADIgXAIQgLAFgJAFQgGgEgGgJQgFgIgIgIIgDgLQgDgJgIgIQgHgIgNgBIgXgDQgLgBgJgFIgFgBIgHgCIAUgHIAXgHIAXgIIAUgIIAJgDQALgEAMgCQALgDAMAAQAMgBAMABIARACIgDAFQgEAHAGAFIAQAOQAJAGALAFIAVAJIAWAHQAKADAMACIAXABIAYABIAYgBQANAAAKgEIAWgJIARgIIAIgEIAIgEQANgBALAEIAWAJQAKAEAKAGIATAKIAVAKIARAIIAAAAIATAPQADADABAEIgGAAQgHgEgIAAIgQAAQgNgBgMAFIgHADQgVAJgRAOQgIAGgFAKIgNgFgAEHJXIADgBIgDABgAhPEkIgFAAIgCAAIgFgBIgBAAIgCgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgCIgCgBIgBgBIgBgBIgHAAIgCABIgGACIgBABIgCAAIgIACIgDAAIgCABIgCAAIgCAAQgDABgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBABgBIAAgBIACgDIABgEIgBgCIgBgCIgCgCIgBgBIAAgBIgBgCIAAgBIgEgEIgCgBIgBgBIgFgEIgBAAIgEgDIgDgCIgDgBIgCAAIAAgBIgDgCIgBgBIAAAAQgCgDABgEIAAgBIABgCIABgBIACgCIAFgFIABgBQACgBAAgDIgBgIIgBgBIgDgDIgCAAIgDgBIgCgBQAAABgBAAQAAgBgBAAQAAAAgBAAQAAAAAAgBIgEgDQgFgDgCgFIgBgBQAAgDACgCIABgBIABgBIABgBIAFgCQAEgDAAgHIgBgBIgBgEIAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIABAAIACgEIADgBIABAAQAEgBAAgEIAAgBIABgGIgBgEQAAgDABgDIABgBIABgCIABgCIADgCQADgCADABIABAAIABACIAAAEIABAAIABABIABABIABAAIANAAQAEAAACgDIACgFIABgBIADgGIABgBIABgCIABgCIgBgEIAAgCIAAgBIgBgCIAAgBIAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIABgBIAJgHIAGgEIAAAAIADgCIADgCIAGgDIABgBIACAAIABAAIADgBIACAAIAEAAIACAAIACABIAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBIACgDIABgCIABgCIABAAIABgBIABgBIAIgCIACAAQAEgBAFAAIACAAIACACIABAAIABABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIADACIADAAIADgBIABAAIABgCIABgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAJAAIACACIADACIADACQADADADAAIADAAIACABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBIABAAIADgBQAEAAAEACIACAAIAFACIAHACIAGAKIgBADQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAABIABAAIABAAIAAAAIADACIADABIABABIABABIABABIABABIAAAAIAAAAIAAACIAAAAIAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgCAAIgBABIgCABQADAEAFACIACABIAAAAIAAAAIAAAAIABABIABAAIAAAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAAIAAACIAAAAIAAACIgBABIgBAAIgBABIgCACIACgCIABgBIABAAIABgBIAAgCIAAAAIAAgCIAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIAAAAIgBAAIgBgBIAAAAIAAAAIAAAAIgCgBQgFgCgDgEIACgBIABgBIACAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAAAIAAAAIAAgCIAAAAIAAAAIgBgBIgBgBIgBgBIgBgBIgDgBIgDgCIAAAAIgBAAIgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIABgDIAAgIIAEgBIADgBIAAAAIACgBIACgBIABgCIABgBQAAgHACgFQABgDADgBIAFgBIAGgBIACgBQADgCACACIACABIAGAAIABABIABABIAAABIABAEIABABIABAAQAFABADgDIAFgFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIABgBIAEgBIADAAQAEAAAEACIAAAAQADACABAEIgCAGIAAABIAAAHIABABIACADIADADIAEADIADABIACABQAEACAGgBIACAAIABAAIACgBIAIgBIADgBQAEgBAFAAIAFAAQAEABACADIABACIABABIAAAFQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIABABIADABIAFgBIADgBIABgBQAFgEAHACIACAAIAAABIACAAQABABAAAAQABAAAAAAQABABAAAAQAAAAABABIAAABIABABIAAACIAAADIAAACIAAABIgCAEIgBACIgBADIAAADIABACIABABIACAAIANAEIACABQAEAAACAEIAAACQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgCABIgBABQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgCABIgCABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAIgBADQAAADACACIADACIABAAIADABIABABIADACIAAAAIAEAFIABABIAAAGQgBAEACADQAAABABAAQAAAAAAABQABAAAAABQABAAAAAAIABABIABAAIAEABIACAAIADABIAHgBIAEAAIAFABIACABQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAABIABABQAAADACADIABACIAAAGIAAABIgBABIgCABIgCACIAAABIgCACIgBABQAAAGACAFIAAACIAAABIgGAEIgCACIgCACQgCAEAAAHQAAADgBADIgCACIgBABIgCAEIgCABIgBACIgFACIgBABIgBAAIgBABIgCAAQgHAAgHgBIgBgBIgFACIgBAAQgBAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABIgBAAQgGABgDgFIAAgBIgCgFIgBgCQgBgGgGABIgFABIgGADIgEABIAAAAIgDACIgCADIgBABIAAABIgDABIAAgOIAAgUIgBAAIAAgBIgBgBIgCgBIAAgBIgBgBIgBgBIgBgCIAAgEQgBgDACgCQABgBAAAAQABAAAAgBQAAAAAAgBQABgBAAAAIAAgDIAAAAIABgEIAAgBIADgBIgBgBIAAAAIgDgDIAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIAAgBQgDgBgBgDIAAgBIABgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAgBIgBgBIgDgDIgBgBIgDgCIgBgBIgCgBIgDgBIgBAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgFgCgFIgBgBIgBgBQgGgDgGAAIgCAAIgFAAIgCgBIgGgBIgBAAIgEgDQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEIAAgBIgBgBIgCgBIAAAAQgDgBgDABIgBABIgCAAIgFABIgCABIgCAAIgCABIgCABQgEABgDgBIgEgBIgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIgCAAIgBAAIgDABQgCACgEAAIgCAAQgDAAgEgBIAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCAAIgBABIgBABIgCAAIgBABIgBAAIgBABIAAACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgJgDQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABIAAAAIgBABIgHABIgCgBIgBAAIgBgBIgCgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIgBABIgEABIgCABIgDACIgDABIgHADQACACAAADIAAAEQABAEgDADIgFADIgCAAIgBABIgGAEIABABIAAABIABACIABABIAAADIAAAFIgBACIgBACIgCACIgBABQgBADgDACIgDAEIgBABIACAEIAAACIADAGIAAACIADADIAAACIAAABQgBAEgFABIgDACIgFACIAAAIIgKABIgDABIgDABIgBAAIgDABIgBABIgEABIgBACQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIAAABIACABIADACQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIABACQACACAAADIgCACIgCACIgCABIgDACIgDAAIgIABIgCAAgAiDEXIABAAIABAAIAAAAIAAAAIAAAAQAGAAAAgFIAAgBIAAAAIAAgCIAFgEIACgBIABgBIASABIACgBIABgBIABgFIAAgFIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAgBIABAAIABgBIAJgDIAAAAIADAAIABAAIABAAIAAAAIAOAAIAAAAIABAAIABAAIABAAIAKACIAAAAIABAAIACAAIACgBIABAAIACAAIAFgCIABAAIACgCIgCACIgBAAIgFACIgCAAIgBAAIgCABIgCAAIgBAAIAAAAIgKgCIgBAAIgBAAIgBAAIAAAAIgOAAIAAAAIgBAAIgBAAIgDAAIAAAAIgJADIgBABIgBAAQAAABgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIAAAFIgBAFIgBABIgCABIgSgBIgBABIgCABIgFAEIAAACIAAAAIAAABQAAAFgGAAIAAAAIAAAAIAAAAIgBAAIgBAAIgEABIAAAAIAAAAIAEgBgADpEGIABgBIABAAIABAAIAGgBIgGABIgBAAIgBAAIgBABIgBAAIgBAAIgEgCIAAAAIgCgCIAAgCIAAAAIgBgBIgBgDIgBgBIgCAAIAAAAIgBAAIgCAAIgBAAIgCAAIAAAAIgBAAIgJAAIgCABIgCABIgDABQgDACgDAAQADAAADgCIADgBIACgBIACgBIAJAAIABAAIAAAAIACAAIABAAIACAAIABAAIAAAAIACAAIABABIABADIABABIAAAAIAAACIACACIAAAAIAEACIABAAIABAAgAD6DqIAFABIABAAIADACIABACIADAEIgDgEIgBgCIgDgCIgBAAIgFgBIgBAAIAAAAIAAAAIgBAAIgBAAIgBABIgCABIgBACQgFAEgHAAIAAAAIgBAAIgCgBIgBgBIgBgDIAAAAQAAgEgDgCIgBgBIgCgBIgBAAIgBABIgBAAIAAAAIgBAAIgFABIgDABIgEAAIAAAAQgGABgEADIgBACIAAAAIgBABIAAAAIgBgBIABABIAAAAIABgBIAAAAIABgCQAEgDAGgBIAAAAIAEAAIADgBIAFgBIABAAIAAAAIABAAIABgBIABAAIACABIABABQADACAAAEIAAAAIABADIABABIACABIABAAIAAAAQAHAAAFgEIABgCIACgBIABgBIABAAIABAAIAAAAIAAAAIABAAgAiLDfIACABIABABIAAABIABAFIABADIABACIADABIAFAEIADAAIAAAAIACgBIABgBIAAAAIAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAgBIAAAAIAAAAIABgCIAAAAQAAgDABgCIABgCQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAAAAIABAAIABAAIABAAIAAAAIABAAIACAAIABADIAAABIgBADIAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIACABIAAABIABAAIAEABIAAAAIABAAIAAAAIAAAAIACAAIAAAAIABgBIAAAAIACgDIABgCIABgCIABgBIABgBIABgBIACgBQADgCADAAQADABADACIAAABIAAAAIACADIABABIAFADIACACIABAAIABABIACAAIAAAAIABAAIAAAAIABAAIACAAIABAAIAAAAIABgBIABAAIAEgEIAAAAIAAAAIAEgCIACAAIAAAAIABABIgBgBIAAAAIgCAAIgEACIAAAAIAAAAIgEAEIgBAAIgBABIAAAAIgBAAIgCAAIgBAAIAAAAIgBAAIAAAAIgCAAIgBgBIgBAAIgCgCIgFgDIgBgBIgCgDIAAAAIAAgBQgDgCgDgBQgDAAgDACIgCABIgBABIgBABIgBABIgBACIgBACIgCADIAAAAIgBABIAAAAIgCAAIAAAAIAAAAIgBAAIAAAAIgEgBIgBAAIAAgBIgCgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgBIABgDIAAgBIgBgDIgCAAIgBAAIAAAAIgBAAIgBAAIgBAAIAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgBACQgBACAAADIAAAAIgBACIAAAAIAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAIAAAAIAAAAIgBABIgCABIAAAAIgDAAIgFgEIgDgBIgBgCIgBgDIgBgFIAAgBIgBgBIgCgBIgCAAIgBAAIAAAAIAAAAIgCACIgEAHIgBACIgBACIgBABIgBACQgCACgDAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQADAAACgCIABgCIABgBIABgCIABgCIAEgHIACgCIAAAAIAAAAIABAAIACAAgACzDwIAAgCIAAgCIAAACIAAACgADKDUIgIAEIgBABIgGAFIAGgFIABgBIAIgEQAGgCAIAAIADAAIANgBIACAAIAEADIAAAAIAEAEIAAABIAAAAIACABIAAAAIABAAIAAAAIACAAIAAAAIABgBIABgBQADgCAEgCIABAAIADAAIAAAAIABAAIAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIAAAAIgBAAIAAAAIgDAAIgBAAQgEACgDACIgBABIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIgCgBIAAAAIAAgBIgEgEIAAAAIgEgDIgCAAIgNABIgDAAQgIAAgGACgAg+DdIACgBIAEgDIABgBIAEgCIAAAAIAHgBIABAAIABAAIADABIgDgBIgBAAIgBAAIgHABIAAAAIgEACIgBABIgEADIgCABIgEAAIAAAAIAAAAIAAAAIgBAAQgEAAAAgEIAAgBIAAgDIgBgGQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQgEgBgDABIgBABIgBAAIgBABIgCACIAAABIAAAAIgCABIgCAAIAAAAIgFAAIAAAAIAAAAIgBAAIgCAAIAAAAQgEAAgBgDIgBgBIgBgGIgBgBIgEgBIAAAAIgBAAIgEABIgBAAIgBABIgBABIgCACIgBABIgBABIAAABIAAAAIgCABIAAAAIAAAAIgHAAIAAAAIAAAAIgBgBIgCAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAgCIABgBIAAAAIAAgCIAAgCIgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIAAAAIgBAAQgEABgCABIAAABIgBAAIAAAAIAAAAIAAAAIgCABIAAAAIgCAAIgBAAIgBAAIgBgBIgBgBIgDgCIgEgEIgBgFIAAgCIAAACIABAFIAEAEIADACIABABIABABIABAAIABAAIACAAIAAAAIACgBIAAAAIAAAAIAAAAIABAAIAAgBQACgBAEgBIABAAIAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIABAAIAAACIAAACIAAAAIgBABIAAACIAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIACAAIABABIAAAAIAAAAIAHAAIAAAAIAAAAIACgBIAAAAIAAgBIABgBIABgBIACgCIABgBIABgBIABAAIAEgBIABAAIAAAAIAEABIABABIABAGIABABQABADAEAAIAAAAIACAAIABAAIAAAAIAAAAIAFAAIAAAAIACAAIACgBIAAAAIAAgBIACgCIABgBIABAAIABgBQADgBAEABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABAGIAAADIAAABQAAAEAEAAIABAAIAAAAIAAAAIAAAAIAEAAgADMDCIgEACIgBABQgCADgDABQADgBACgDIABgBIAEgCIABAAIAEgBIAKgCIABAAIAAAAIABAAIAAAAIADABIACAAIAAABIABABIABABQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIAAABIABAAIABABIAAAAIAAAAIABABIABAAIABAAIABAAIAAAAIABAAIABABIAAAAIABAAIAAAAIAIAAIgIAAIAAAAIgBAAIAAAAIgBgBIgBAAIAAAAIgBAAIgBAAIgBAAIgBgBIAAAAIAAAAIgBgBIgBAAIAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgBgBIgBgBIAAgBIgCAAIgDgBIAAAAIgBAAIAAAAIgBAAIgKACIgEABIgBAAIAAAAgAg6DHIAAAAIABAAIAAAAIAAgBIAAAAIAAAAIABAAIABgBIAAAAIACgBIAAAAIAAAAIACgBIABgCIABgBIABgBIACAAIACgBIABAAIAEABIABAAQAEABABACQgBgCgEgBIgBAAIgEgBIgBAAIgCABIgCAAIgBABIgBABIgBACIgCABIAAAAIAAAAIgCABIAAAAIgBABIgBAAIAAAAIAAAAIAAABIAAAAIgBAAIAAAAIgDABIAAgBIgCAAIgBgBIgDgCIgCgDIgCgCIAAgBIAAAAIAAgBIAAgKIgBgBQgDgCgCAAIgBAAIAAAAIgBAAIAAAAIgBAAIAAAAIAAAAIgBABIgFAKIgBABIgBACIAAABIgDACIgCABIAAAAIgBAAIAAAAIgBAAIAAAAIAAAAIAAAAQgFAAgEgEIAAAAIAAAAIgBgBIAAgBQgCgBAAgEIAAgBIABgGIABgCQACgCAAgDIAAAAQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgBAAIAAAAIgEACIAAAAIgCADIgBABIgFAHIgBABIgBACIAAABIgBAAIgCABIgGADIgCABIgBAAIAAAAIAAAAIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgBgCIAAgBIgBgDIgBgBIAAgFIACgDIAAgBIABgCIABgCQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgFAAIAAAAIgBAAIgEgCIgBAAIAAgBIgCgBIgBgBIAAgBIgBgEIAAAAIAAgBIAAgDIAAADIAAABIAAAAIABAEIAAABIABABIACABIAAABIABAAIAEACIABAAIAAAAIAFAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIgBACIgBACIAAABIgCADIAAAFIABABIABADIAAABIABACQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAIABAAIAAAAIAAAAIABAAIACgBIAGgDIACgBIABAAIAAgBIABgCIABgBIAFgHIABgBIACgDIAAAAIAEgCIAAAAIABAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAABIAAAAQAAADgCACIgBACIgBAGIAAABQAAAEACABIAAABIABABIAAAAIAAAAQAEAEAFAAIAAAAIAAAAIAAAAIABAAIAAAAIABAAIAAAAIACgBIADgCIAAgBIABgCIABgBIAFgKIABgBIAAAAIAAAAIABAAIAAAAIABAAIAAAAIABAAQACAAADACIABABIAAAKIAAABIAAAAIAAABIACACIACADIADACIABABIACAAIAAABIADgBgAC+C6IgKABIAKgBIABgBIAAAAIABgBIABgBIABgCIABgFIAAAAIAAgBIAAgBIABgBIADgBIADgBIAFgBIABAAIAAAAIABAAIADABQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIAAAAIAAAAIACABQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgCgBIAAAAIAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgDgBIgBAAIAAAAIgBAAIgFABIgDABIgDABIgBABIAAABIAAABIAAAAIgBAFIgBACIgBABIgBABIAAAAIgBABgAgbC1IAAADIAAgDIAAAAIAAgBIgDgEIgBAAIgPgBIAAAAIgBAAIgBAAIgDAAIgBAAIgBAAIAAAAIAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgBIgBgBIABgBIAAgBIAAAAIACgCIACgDIABgBIAAAAIAAgBIAAAAIAAgBQAAgDgCgCIgBgBIAAAAIgBgBIgCgBIgBAAIgBAAIgBAAIAAAAIAAAAIgCAAIgBABIgBAAIgEAAIgDAAIAAAAIgBAAIgBAAIAAAAIgCAAIAAAAIgBAAIAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAAAIAAAAIABgCIAAAAIABgCIABgCIABgBIABgCIAAgBIgBgCIgBgCQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIAAAAIAAAAIgBAAIgEgCIAAAAIgCAAIAAAAIgBAAIAAAAIAAAAIgBABIgBAAIgCAAIgBgBIgCABIAAAAIAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAgBAAAAIgBAAIAAgBIgCgBIgCgFIAAgCIAAgBIAAgBIgBgGIABAGIAAABIAAABIAAACIACAFIACABIAAABIABAAQAAAAAAABQABAAABAAQAAAAABAAQAAAAABABIAAAAIAAAAIACgBIABABIACAAIABAAIABgBIAAAAIAAAAIABAAIAAAAIACAAIAAAAIAEACIABAAIAAAAIAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAIABACIABACIAAABIgBACIgBABIgBACIgBACIAAAAIgBACIAAAAIAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAABIABAAIAAAAIACAAIAAAAIABAAIABAAIAAAAIADAAIAEAAIABAAIABgBIACAAIAAAAIAAAAIABAAIABAAIABAAIACABIABABIAAAAIABABQACACAAADIAAABIAAAAIAAABIAAAAIgBABIgCADIgCACIAAAAIAAABIgBABIABABIABABQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIAAAAIABAAIABAAIADAAIABAAIABAAIAAAAIAPABIABAAIADAEIAAABIAAAAgACqCtIAAgCQAAgDACgDIABgCIABgCIACgEIABgBIAEgEIACgBIAEgBIABAAIAAAAIACAAIADABIAHACIABAAIAAAAIACAAIAAAAIAAAAIACAAIABAAIAAgBIACAAQAFgCAAgFQAAAFgFACIgCAAIAAABIgBAAIgCAAIAAAAIAAAAIgCAAIAAAAIgBAAIgHgCIgDgBIgCAAIAAAAIgBAAIgEABIgCABIgEAEIgBABIgCAEIgBACIgBACQgCADAAADIAAACgACZClIAAgDIAAgEIgBgCIgCgIIAAgCIAAgCIAAgBIABgCIABgCIADgDIACgBIAAAAIABgBIAAAAIAAAAIAYgBIAAAAIABAAIABAAIAAAAIADgBIACgBIABgDIAAgCIABgCIAAgBIAAAAQAAgCgCgDIgBgBIgDgCIADACIABABQACADAAACIAAAAIAAABIgBACIAAACIgBADIgCABIgDABIAAAAIgBAAIgBAAIAAAAIgYABIAAAAIAAAAIgBABIAAAAIgCABIgDADIgBACIgBACIAAABIAAACIAAACIACAIIABACIAAAEIAAADgAgjCcIACACIANAFIgNgFIgCgCIgCgBIAAAAIgBAAIgBgCIgBgCIgBgFIABgGIABgCQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgBIAAgDIAAgBIgBgCIgCgBIgBgBIgBgBIgBAAIAAAAIAAAAIgFAAIgCAAIAAAAIgEgDIgBgBIgHgDIgDgBIgBgBQgCgDAAgEIAAgBIABgEIAEgEIACgBIABgBIgBgCIABACIgBABIgCABIgEAEIgBAEIAAABQAAAEACADIABABIADABIAHADIABABIAEADIAAAAIACAAIAFAAIAAAAIAAAAIABAAIABABIABABIACABIABACIAAABIAAADIAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgBACIgBAGIABAFIABACIABACIABAAIAAAAIACABgAAXCRQACAFAFABQgFgBgCgFIAAAAIAAAAIgBgEIgBgBIgBgEIAAgBIACgDIACgDIABAAIABgBIABgBIAAgBIAAAAIAAgBQAAgEgEgCIgCgBIgCgBIgCgBIgEgDIgDgDIgBgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIADgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgDABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIABADIADADIAEADIACABIACABIACABQAEACAAAEIAAABIAAAAIAAABIgBABIgBABIgBAAIgCADIgCADIAAABIABAEIABABIABAEIAAAAIAAAAIAAAAgACFCUIgCACIACgCIAAAAIACgBIABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBIABAAIAAgCIABgCIAAgCIAAgDIgBgCIgBgDIAAgCIABgCIAAAAIABgDIAAgBIACgCIABgBIACgBIADAAIAAAAIAFgBQADAAACgDIACgBIABgCIABgDIACgCIABgCIAAgBIAAABIgBACIgCACIgBADIgBACIgCABQgCADgDAAIgFABIAAAAIgDAAIgCABIgBABIgCACIAAABIgBADIAAAAIgBACIAAACIABADIABACIAAADIAAACIgBACIAAACIgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgBAAIgCABIAAAAIAAAAgAgGCIQADAAACACIABABIAAACIADAFIgDgFIAAgCIgBgBQgCgCgDAAIgCgBIAAAAIgBAAIAAAAIAAAAIgBAAIAAAAIgCgBQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIAAgCIgBgCIAAgBIABgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgDIAAAAIgBgBIAAAAIAAAAIgBAAIAAAAIgKgDIgCgCIgBgBIgBgBIAAgHIAAgBIAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAGgGIgGAGQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAABIAAABIAAAHIABABIABABIACACIAKADIAAAAIABAAIAAAAIAAAAIABABIAAAAIAAADQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgBACIAAABIABACIAAACQAAABAAAAQABABAAAAQABAAAAABQABAAABAAIACABIAAAAIABAAIAAAAIAAAAIABAAIAAAAIACABgAB5CEIgBABIgDAEIgCACIgBACQgBACgDACQADgCABgCIABgCIACgCIADgEIABgBIAAgBIgBgCIgCgDIAAgBIAAAAIgCgDIgBgCIAAgFQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBIADgBIABgBIADgCIACAAIAAAAIABgBIADgBIgDABIgBABIAAAAIgCAAIgDACIgBABIgDABQgBABAAAAQAAABgBAAQAAAAAAABQAAAAAAABIAAAFIABACIACADIAAAAIAAABIACADIABACIAAABgABhCMIgDABIADgBIABgBIAAAAIABAAIACgCIABgDIABgIQAAgDgDgCIgCgBIgBgCIgCgFIABgCIAAgCIACgCIAEgBQADgBADgCIABgBIABgCIgBgCIAAAAIAAgCIgBgBIgBgDIgBgBIgBgBIgCgGIAAAAIAAgBIAEgCIACgBQAEgBACgDQgCADgEABIgCABIgEACIAAABIAAAAIACAGIABABIABABIABADIABABIAAACIAAAAIABACIgBACIgBABQgDACgDABIgEABIgCACIAAACIgBACIACAFIABACIACABQADACAAADIgBAIIgBADIgCACIgBAAIAAAAIgBABgABBB0IABACIACADIABADIABACIABACIADANIgDgNIgBgCIgBgCIgBgDIgCgDIgBgCIAAAAIAAgCIgBgCIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIADgCIADgBQAEgBABgCIABgBIABgDIAAgBIAAgCQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIAAAAIgBAAIAAgBIgCgCIAAAAIAAAAIgBAAIAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAgBgBIAAgBIAAgCIABgEIgBAEIAAACIAAABQABABAAAAQAAABAAAAQABAAAAAAQABABAAAAIAAAAIABAAIAAAAIAAAAIACACIAAABIABAAIAAAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAACIAAABIgBADIgBABQgBACgEABIgDABIgDACQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAABIABACIAAACIAAAAIAAAAgAiZlTIgDgCIgBgBIAAgBIgBgCIAAgCIgBgBIAAgBQAAgDgBgDIgBgBIgBgBIgBgBQgGAAgGABIgBABIgDABIgBAAIgGABIgIAAIgCgBIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgBIAAgFIAAgBIABgEQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIgEgBIgHgDIgCAAIgDgCIgCgBIgBgDIAAgBIgBgBQgBgCgEABIgGgBQgEgCAAgEIAAgBIgBgDIAAgCIABgDIABgDIAAgCIAEgFQACgDgBgDIAAgCIgBgBIgBgBIgBAAIgOgBIAAAAIgCAAIgCgCIAAgBIAAgBIgBgEQAAgDADgCIAAAAQABgFgCgCIgCgBIgBgBIgBgBIgDgBIgBAAIgCgCIgBAAIgCgCIgBAAIgBgFIABgEIABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIABgBIABAAIACgBIACgCIABAAIACgCQACgBAAgDQAAgDgCgCIgBgCIgFgFIgBgBIgCgCIgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBgBIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIABgBIABAAIABgBIACgBIAFgDIACgCIAAgBQABgFgEgDQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIABgCIABgBIACgDIACgCIABgBIAEgEIACgBIACgBIACAAQAFAAAEgCIABAAIABgCIABgBIADgDIAAgBIABgDIABgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgEgBIgJAAIgDAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAgBIABgDIAAgBIACgBQAEgCAFgCIACgBIADAAIACgBQAEAAACACIADABIAEABIABABIABAAIADAAIADABIAEgBIAAgBIAFgEIgBgMIAAgCIAAgBQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgBgBIgBgBIgEgDIgBgBIgEgCIgBgBIgBgBIAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIADgCIAHgEIACgBIADgBIACAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBAEABACIABABIABABIAAABIABABIAEABIAFgBIABgBIAFgEIABgCIAAgCIgBgBQgCgCABgEIAAgBIACgGIADgFIABgBIAGgCIAAAAIACgBIAFABIABAAIABACIABABIACAFIABABQADADAFgBIACAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAIACAAQADgCgBgEIAAgFIAAgGIAFgFIACgCIACgCIABAAIABAAIABAAIACAAIAAABIABABIACACIABABIABABIACAAIACABIABABIADABQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIgBgCIgBgCIAAgBIAAgGQAAgDACgCIADgBIACgCIAFgCQADAAgBADIABAFIACAGIACACQAEABAEgCQABAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIgBgHIAAgDIAEgFIAGgFQAEgBADACIABABIAAABIgBABIgBAFIAAAGIACABIABABIABABQADACADgCIABgBIABgBIABgBIABgBIABgBIABgBIABgCIABgBIAAgBIABgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIABgBIABAAIADgCIADAAIADABQAAAAABAAQAAABAAAAQABAAgBABQAAAAAAAAQgDACABADIABAEIABACIAHAGIABAAIAEAAIADAAIACAAIAGgCIABgBIACgIIABgCIABgBIABgBIACgCIAEgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAGAAIADABIABABQABABAAABQAAAAAAABQAAAAAAABQAAAAAAABIgBABIgCACIgBACQgCADABAEIAAABIABACQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAQAGABAFgCIABAAIAAgEIABgEIAAgBQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAABAAIABAAIABgBQACgCADgBIABgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIADAAIAAAAIAEABIACABIACADIACABIACACQACADAAADIABABQAAABAAAAQAAAAAAABQABAAAAABQAAAAgBABIAAABIAAABQAAAEgCABIgBAAIAAABQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIABACIAAAEIABABIABABIAEAAIACAAIABAAIABgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgBQgBgDAAgEIgBgFQgCgDABgEIABgCQACgDAEgCQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQADABgBAEQAAADABACIAAACIABACQABADAAADIABgBIACgBIACgBIABAAQAFgBADADIABABIAAABQAAABAAABQAAABAAAAQAAABAAAAQAAABgBAAIAAACIAAABIADAAIAGACIABAAIABACIAEADIACABIAGAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAIAAAAIACABIABABIACACIAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIAAABIgBABIgEAAIgCAAQgEAAgBAEIAAABIABADIAAABIAAABIABABIADACIABABIACAAIACACIACABIAEACIABABIAFABQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIAAgBIADgFIABgBIABgBIABAAIAMgBIACAAIABABIABACIABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAABAAIABABIAAAAIAAAEIAAADIgBAAIgBAAIgCgBIAAAAIgCAAIgBAAIgCAAIgBABIgCABIAFgFIgFAFIgDACIAAAAQAAABAAABQAAAAAAABQAAABAAAAQABABAAAAIAAABIABABIABACIABABIABACIABABIAGADIADABQAFAAADACIACABIADADIABACQgBAFgEAFIgBABQAAAFACADQAEAEAEABIABABIABAAQACAGgDAEIgEAFIgBABIgBAIQAAADACACIABAAIAAACIABAFQAAAFgBAEIgBABIgCAFIgDAEIgCACQgBADAAADIABABIACAFIABACIAAABIgBADIAAAEIgBABIgBACIAAAAQgCAFgEACIgBAAIgBABIgCABIgEABIgDABIgGACQgBABAAAAQgBABAAAAQAAAAgBABQAAAAAAABIgBABIAAABIABACIAAABIABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAAACIgBABIgBABIgBABIgFAFIgDADIAAAAQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgCABIAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCAAIgVgGIgBAAIgEADIgCABIgCABIgDABIgDAAIgBABIgFAAIgHgBIgDgDIgCgCIgCgBQgDgDgFABIgCABIgCABIgCABIAAgIIgDgWIAAgCIADgEIAAgBIAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBIgCAAIgDgDIAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIABgCIAEgEIACgEIAAgCQAAgDgCgCIgCgBIgCgBIgFgEIgBgBIgBgBIAAgCIABgCIAHgGQABAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBIAAgEQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAAAgBIgCgBIgBgBQgDgEgDgBIgBAAIgDgDIgBgCIABgDIAAgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgBgCIgBgBIgBAAIgCgBIgCgBIgBgBIgCgBQgHAAgGABIgBABIgCAAIgGADQgCABgEAAIgCAAIgFgCIgBgBIgBgEIgBgCIAAgBIgDgEIgBgBQgEgCgFABQAAABgBAAQAAAAAAAAQgBAAAAABQAAAAgBABIgBABIgBACIAAAAQgEABgCgCIgCgBIgEgDIgBAAIgCgBIgBAAIgHAAIgCAAIgDABIgEACQgCACAAADQAAADACACIAAABIgCACQgCADgDgCIgDgBIgEgCIgDgCIgBAAQgEAAgCABIgCABIgDACIgBAAIgEAEQAAABAAABQAAABAAAAQAAABAAAAQABAAABABIABAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAAACQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgCABIgCAAIgJABIgBAAIgFAEIgCADIgBAAIgCACIAAABQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIACAAIACABQACACgBAEQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgCAAIgBABIgBAAIgEAEIAAABIgBACQgBADABADIABABIACAAIAAAAIACABIABAAIABABIABADIAAABIAAADIAAACIgBAAQgBADgDABIgCABIgBABIgBACIAAABQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIACAAIACACIABACIABABIgBAIIgBAAIgBAAIgBACIgBACIAAABIACADIAAADIABABQADABgBAFIAAABIgCACIgBABIgBABIgEACIgBABIgBAAIgBABIgCABIgBABQAAAAAAABQAAAAAAAAQAAAAAAABQABAAAAAAIAAABIACACIABAKIgCABIgBACIgDACIgBACIAAABIgBADIAAABIgBADIAAAGIgBABIAAACIABAGIAAACQAAAEgCACIgBACIgBABIAAAAIgCACIgBAAIgFABIgBAAIgBABQgEABgDgBIgCAAIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBgAiRlzQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgCABIgFAEIAFgEIACgBQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBIAAAAQAAgGgFgDQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAAAIAAgCIADgFIAAAAIAAgBIABgBIABgCIAEgDIACgBIAEgCIAAgBIgBgBIABgBIABgCIAAgDIAAAAIAAgCIAEgGIABgBQAGgFAHgBIABAAIABAAIAAAAIADABIgDgBIAAAAIgBAAIgBAAQgHABgGAFIgBABIgEAGIAAACIAAAAIAAADIgBACIgBABIABABIAAABIgEACIgCABIgEADIgBACIgBABIAAABIAAAAIgDAFIAAACIAAAAQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAABQAFADAAAGIAAAAgAixl8IgBABIgBABIgBACIgCACIgGAEIgCABIgDABIADgBIACgBIAGgEIACgCIABgCIABgBIABgBIABgEIAAgBQAAgEgCgDIgEgCIgCgBIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIAAAAIgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgDADgCIABAAQADgCADgBIAAAAIACAAIAEAAIAAAAIACgBIABAAIAAAAIABAAIAAAAIAAAAIABAAIAAAAIABAAQAEAAACgDIABgBIAAgCIABgBQAAgEgDgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAAAIABgDIABgCIAFgEIADgBIACgBIAGgBIAOgBIAAAAIACgBQADgCADgDIABgCIACgFIgCAFIgBACQgDADgDACIgCABIAAAAIgOABIgGABIgCABIgDABIgFAEIgBACIgBADQAAAAABAAQAAABAAAAQAAABAAAAQABAAAAABQADABAAAEIgBABIAAACIgBABQgCADgEAAIgBAAIAAAAIgBAAIAAAAIAAAAIgBAAIAAAAIgBAAIgCABIAAAAIgEAAIgCAAIAAAAQgDABgDACIgBAAQgDACAAADQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIABAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIACABIAEACQACADAAAEIAAABIgBAEgAjUmQIACgBIABAAIAAAAIAAAAIABgBIABAAIAAAAIADgCIABgCIAAgBIABgCIAAgCIgBgHIAAgCIAAgCQABgCADgDIAAACIABAAIACACIABACIABAAIAAABIADABIAAAAIAAAAIAGAAIABAAIAAAAIAAAAIABAAIABAAIAAgBIABgCIAAgBIAAAAIABgEIACgCIADgEIACgBIACgCQACgCAAgEIAAAAIABgBIACgEIAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAAAIABAAIAAgBIAIgEIACgBIADgBIAHgDIACgBIALgFIABAAIAOACIgOgCIgBAAIgLAFIgCABIgHADIgDABIgCABIgIAEIAAABIgBAAIAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIAAAAIgCAEIgBABIAAAAQAAAEgCACIgCACIgCABIgDAEIgCACIgBAEIAAAAIAAABIgBACIAAABIgBAAIgBAAIAAAAIAAAAIgBAAIgGAAIAAAAIAAAAIgDgBIAAgBIgBAAIgBgCIgCgCIgBAAIAAgCQgDADgBACIAAACIAAACIABAHIAAACIgBACIAAABIgBACIgDACIAAAAIgBAAIgBABIAAAAIAAAAIgBAAIgCABIAAAAIgBAAIAAAAIgBAAIgBAAIgBAAIgEAAIgFAAIAAAAIgBgBIgEgBIAEABIABABIAAAAIAFAAIAEAAIABAAIABAAIABAAIAAAAIABAAIAAAAgAB1mWIABAAIACAAQAFgBAEgCIADgDIgDADQgEACgFABIgCAAIgBAAIAAAAIAAAAIgEgBIgEgDIAAAAIAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIAAAAIgCAAQgFAAgDADQADgDAFAAIACAAIAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIAAABIAAAAIAEADIAEABIAAAAIAAAAgABXmgIABgBIAFgEIABgCIAGgHIADgCIABgBIAAAAIABAAIAAAAIADgBIABAAIAAAAIADABIAAAAIABAAIAEACIABAAIABACIACABIABABQACADAEAAIABAAIABAAIAFgBIAAAAIADgBIAFgDIAFgEIgFAEIgFADIgDABIAAAAIgFABIgBAAIgBAAQgEAAgCgDIgBgBIgCgBIgBgCIgBAAIgEgCIgBAAIAAAAIgDgBIAAAAIgBAAIgDABIAAAAIgBAAIAAAAIgBABIgDACIgGAHIgBACIgFAEIgBABIgBAAIAAAAIgBAAIgCgCIgEgBIgCgBIgFgEIAFAEIACABIAEABIACACIABAAIAAAAIABAAgAjpmvIAAAAIAHgBIAAAAIABAAIABgBIABAAQADgDAAgFIAAAAIAAgCIACgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAAAAIAAAAIABAAQAFAAACAEIABABIABABIABABIAAABIABAAIAAAAIABAAIAAAAIACAAIABAAIABAAIAAAAIAAAAIABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIAAgBIABgCIACgFIADgGQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABgBIACgBIACAAIACgBIACAAIAAAAIABAAIABAAIADAAIAEAAIABgBIAFgHIAAAAIAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABgBABAAIAAAAIACAAIAKgBIABAAIABAAIAAAAIAFAAIABAAIABAAIADABIAAAAIABAAIAAAAIABAAIABAAIAAAAIABAAIACgBQAEAAAAgEQAAAEgEAAIgCABIgBAAIAAAAIgBAAIgBAAIAAAAIgBAAIAAAAIgDgBIgBAAIgBAAIgFAAIAAAAIgBAAIgBAAIgKABIgCAAIAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABIAAAAIAAAAIgFAHIgBABIgEAAIgDAAIgBAAIgBAAIAAAAIgCAAIgCABIgCAAIgCABQgBABAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIgDAGIgCAFIgBACIAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAIAAAAIAAAAIgBAAIgBAAIgCAAIAAAAIgBAAIAAAAIgBAAIAAgBIgBgBIgBgBIgBgBQgCgEgFAAIgBAAIAAAAIAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABIgCABIAAACIAAAAQAAAFgDADIgBAAIgBABIgBAAIAAAAIgHABIAAAAIgBAAIAAAAIgBgBIAAAAQgEgEgFgBQAFABAEAEIAAAAIABABIAAAAIABAAgABbm4QADAAACgCIACgBQAEAAACgDQAEgEAGgCIADgBIAAAAIAEAAIADgBIAGABIABAAIAAAAIAAAAIACACIABABIACABIAEACIABAAIABAAIAAAAQAEAAADgDIAEgDIACgEIABgDIAAgCIABAAIABgBIAAAAIABAAIAAAAIAAAAIAAAAIAJgBIgJABIAAAAIAAAAIAAAAIgBAAIAAAAIgBABIgBAAIAAACIgBADIgCAEIgEADQgDADgEAAIAAAAIgBAAIgBAAIgEgCIgCgBIgBgBIgCgCIAAAAIAAAAIgBAAIgGgBIgDABIgEAAIAAAAIgDABQgGACgEAEQgCADgEAAIgCABQgCACgDAAIAAAAIAAAAIgDAAIgBgBIAAAAIgBAAIgDgBIgDgBIgBgBIgBgBIgCgBIgEAAIAEAAIACABIABABIABABIADABIADABIABAAIAAAAIABABIADAAIAAAAIAAAAgAj9nCIABAAIACgBIAJgFIACgCIAGgJIABgBIAAAAIACgCIADgBIAEgBIAAAAIABAAIABAAIAAAAIAAAAQAFAAACAEIABACIABACIAAAAIAEABIAAAAIAAAAIAEABIABAAIABAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBIABgBIACgDIABgCIAAAAIABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIABAAIAAAAIABAAIAAAAIABAAIABAAIABAAIAAAAIABAAIABAAIAEACIAAAAIABABIAAAAIADABIABAAIAAAAIABAAIADgCIABgBQAEgFAFgCIAGgBIABAAIACAAIAAAAIABAAIAGABIABABIAFACIACABIAAAAIABAAIABABIAAAAIAEgCIADgCQAEgDAFgBQgFABgEADIgDACIgEACIAAAAIgBgBIgBAAIAAAAIgCgBIgFgCIgBgBIgGgBIgBAAIAAAAIgCAAIgBAAIgGABQgFACgEAFIgBABIgDACIgBAAIAAAAIgBAAIgDgBIAAAAIgBgBIAAAAIgEgCIgBAAIgBAAIAAAAIgBAAIgBAAIgBAAIAAAAIgBAAIAAAAIgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIgBABIAAAAIgBACIgCADIgBABQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgBAAIgBAAIgEgBIAAAAIAAAAIgEgBIAAAAIgBgCIgBgCQgCgEgFAAIAAAAIAAAAIgBAAIgBAAIAAAAIgEABIgDABIgCACIAAAAIgBABIgGAJIgCACIgJAFIgCABIgBAAIAAAAIgCAAIACAAIAAAAgABbnHQAEAAADgCIABgBIAFgFIAGgFIAEgEIACgBIACgBIAAAAIABAAIAAAAIAHgCIABAAIABABIABAAIAEADIAAABIAAAAIADADIACABIAEABIAAAAIAAAAIABAAIAAAAIAAAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBIAAAAIABgCIAJgMIABgBQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAIACgBIACAAIABAAIADAAIAAAAIABAAIADAAIAEABIABABQAAAAABAAQAAABAAAAQABAAAAAAQABABABAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgBIgEgBIgDAAIgBAAIAAAAIgDAAIgBAAIgCAAIgCABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABIgBABIgJAMIgBACIAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIAAAAIAAAAIgBAAIAAAAIAAAAIgEgBIgCgBIgDgDIAAAAIAAgBIgEgDIgBAAIgBgBIgBAAIgHACIAAAAIgBAAIAAAAIgCABIgCABIgEAEIgGAFIgFAFIgBABQgDACgEAAIAAAAIgBAAIAAAAIgCAAIAAAAIAAAAIgCgBIgBgBIgBAAIgBAAIgBgCIABACIABAAIABAAIABABIACABIAAAAIAAAAIACAAIAAAAIABAAIAAAAgABNneIACAAIAHAAIACgCIADgCIACgCIACgCIABgBIABgBIABgBIABgBQAFgCAHgBIAAAAIAAAAIACAAIACAAIAAAAIACAAIADABIADAAIADABIABABIABAAIAAAAQAFgBACgDIACgBQAEgCADgEIACgCIACgCIACgEIACgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBIABAAIACAAIACAAIAAAAIAAAAIAEAAIABABQAGACACADQgCgDgGgCIgBgBIgEAAIAAAAIAAAAIgCAAIgCAAIgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAABIgCABIgCAEIgCACIgCACQgDAEgEACIgCABQgCADgFABIAAAAIgBAAIgBgBIgDgBIgDAAIgDgBIgCAAIAAAAIgCAAIgCAAIAAAAIAAAAQgHABgFACIgBABIgBABIgBABIgBABIgCACIgCACIgDACIgCACIgHAAIgCAAIgBAAIgBAAIgBAAIgBAAIgCgBIgCgCIgBgCIgBgCIABACIABACIACACIACABIABAAIABAAIABAAIABAAgAjQnlQADgBADgCIAGgGIACAAIABAAIAAAAIAFABIACABIACACIABABIABABIAFABIABABIAAAAIAAgBQADAAABgCIABgBIADgGIACgCIABAAIAAAAIABAAIACgBIAAAAIAAAAIACABIAAAAIABABIABAAIADADIABACIABABQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAIABAAIABAAIAAABIAFABIAAAAIADgBIACAAIAAgBIACgBQAGgCAGACIAAABIACAAIABAAIgBAAIgCAAIAAgBQgGgCgGACIgCABIAAABIgCAAIgDABIAAAAIgFgBIAAgBIgBAAIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBgBIgBgCIgDgDIgBAAIgBgBIAAAAIgCgBIAAAAIAAAAIgCABIgBAAIAAAAIgBAAIgCACIgDAGIgBABQgBACgDAAIAAABIAAAAIgBgBIgFgBIgBgBIgBgBIgCgCIgCgBIgFgBIAAAAIgBAAIgCAAIgGAGQgDACgDABIgBAAIAAAAIgCAAQgGgBgEgEIgBgBIgDgDIgDgCIAAAAIgCAAIAAAAIgCAAIgBAAIAAABIgDACIgCACIgCACIgBAAIAAAAIgDAAIgBAAIgCAAIgDgBIgBAAIgBAAIAAAAIAAAAIABAAIABAAIADABIACAAIABAAIADAAIAAAAIABAAIACgCIACgCIADgCIAAgBIABAAIACAAIAAAAIACAAIAAAAIADACIADADIABABQAEAEAGABIACAAIAAAAIABAAgABKnwIABAAIACgBIABgBIACgDIADgBIABgCQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAABgBIABgCIAHgFQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAIABABQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABIABABIACABIABAAIABAAIAEABIABABIAAAAIACgBIADgBIADgCIAGgFIAHgIIACgDIAAgCIABgCIABgCIAAgBIAAgCIAHgFIAGgCIABAAIAAAAIAAAAIABAAIADAAIAAAAIAEABIADABIABAAIgBAAIgDgBIgEgBIAAAAIgDAAIgBAAIAAAAIAAAAIgBAAIgGACIgHAFIAAACIAAABIgBACIgBACIAAACIgCADIgHAIIgGAFIgDACIgDABIgCABIAAAAIgBgBIgEgBIgBAAIgBAAIgCgBIgBgBQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAIgBgBQAAAAgBAAQAAgBgBAAQAAAAgBABQAAAAgBAAIgHAFIgBACQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgBACIgDABIgCADIgBABIgCABIgBAAIgHgBIAHABgAhzn3IAAAAIACAAIgCAAIAAAAIAAAAIgCAAIgEAAIgBAAIgFgBIgBAAIAAgBIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAAAIAAAAIgBgBIgBgBIgCgDIAAAAIAAgBIgFgBIAAAAIgBAAIgCAAIgCABIgCACIgCACIgCABIgBABIgCAAIAAAAIAAAAQgEAAgCgCIgCgBIgBgBIgCgCQgBgBgBgDIAAAAIAAgCIgBgBIgBgBIgBAAIAAAAIgBAAIgBAAIAAAAIgDABIgBACIgDACIAAABQgDADgEAAIAAAAIAAAAIgEAAIgEABIgBAAIAAAAIgBAAIAAAAIAAAAIgBgBIAAAAIgBgBIgBgCIgCgFIgBgCIgBgBIAAAAIgCAAIgDgBIgEAAIgBAAIAAAAIgWAAQgDAAgCACIgBABQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABIAAAAIAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBABAAIABgBQACgCADAAIAWAAIAAAAIABAAIAEAAIADABIACAAIAAAAIABABIABACIACAFIABACIABABIAAAAIABABIAAAAIAAAAIABAAIAAAAIABAAIAEgBIAEAAIAAAAIAAAAQAEAAADgDIAAgBIADgCIABgCIADgBIAAAAIABAAIABAAIAAAAIABAAIABABIABABIAAACIAAAAQABADABABIACACIABABIACABQACACAEAAIAAAAIAAAAIACAAIABgBIACgBIACgCIACgCIACgBIACAAIABAAIAAAAIAFABIAAABIAAAAIACADIABABIABABIAAAAIAAAAQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIAAABIABAAIAFABIABAAIAEAAIACAAIAAAAgABBoEQAEAAADgCIABgBIABgBIABAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBABgBIACgCIABgCIABgCIAAgCIAAgBIAAAAIABgCIAAAAQAFgCAFAAIAAAAIAAAAIAGABIAAAAIAAAAIABAAIABAAIAAAAIAAAAIAHAAIACgCIABAAIADgFIACgGIAAgBIABgBIgCgDIAAgCIACgCIACgBIABAAIAAAAIAGgBIABAAQAEgBACgCIADgCIgDACQgCACgEABIgBAAIgGABIAAAAIgBAAIgCABIgCACIAAACIACADIgBABIAAABIgCAGIgDAFIgBAAIgCACIgHAAIAAAAIAAAAIgBAAIgBAAIAAAAIAAAAIgGgBIAAAAIAAAAQgFAAgFACIAAAAIgBACIAAAAIAAABIAAACIgBACIgBACIgCACQgBABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgBAAIgBABIgBABQgDACgEAAIgBAAIAAAAIgBAAIAAAAIgBAAIABAAIAAAAIABAAIAAAAIABAAgAiJoYIABAAIAFAEIAAACIABAAIAAABIAFADIACAAIAGABIADgBIABgBIAAAAIAAAAIACAAIACAAIABAAIABAAIAAAAIAEAAIABAAIABABIABAAIgBAAIgBgBIgBAAIgEAAIAAAAIgBAAIgBAAIgCAAIgCAAIAAAAIAAAAIgBABIgDABIgGgBIgCAAIgFgDIAAgBIgBAAIAAgCIgFgEIgBAAIgBAAIgCgBIgBAAQgGAAgGACIAAAAIAAAAIgIACIgBAAIgBAAIgDgBIAAAAIgBgCIgEgFIgBAAIAAAAIAAAAIgEgBQgFgFgIAAIAAAAIgDAAIgBABIgBAAIgCAAIgGABIgBAAIgFgBIAFABIABAAIAGgBIACAAIABAAIABgBIADAAIAAAAQAIAAAFAFIAEABIAAAAIAAAAIABAAIAEAFIABACIAAAAIADABIABAAIABAAIAIgCIAAAAIAAAAQAGgCAGAAIABAAIACABIABAAgAhXoSIAAgCIgBgEIgCgDIgBgCIgBgBIgCgBIgCgBIAAAAIgDgBIAAAAIAAAAIgDACIAAAAIgBAAIAAAAIAAAAIgBAAIgBAAIgEABIgCAAIAAAAIAAAAIgEAAIAAAAIAAAAIgBAAQgDgBgCgDIgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgBgBIAAgBIAAAAIgBgDIAAAAIAAgBIgCgDIgBgBIgDgCIgBAAIgBAAIgBgBIgCAAIgBAAIAAAAIgBAAIgFABIgCAAIgGACIgFAAIAAAAIAAAAIgBAAIAAAAIAAgBIgEgBIgCgCIgCgBIgCgCIgFgFIgBgBIgCgBIAAAAIgBgBIgDgBIgDAAIADAAIADABIABABIAAAAIACABIABABIAFAFIACACIACABIACACIAEABIAAABIAAAAIABAAIAAAAIAAAAIAFAAIAGgCIACAAIAFgBIABAAIAAAAIABAAIACAAIABABIABAAIABAAIADACIABABIACADIAAABIAAAAIABADIAAAAIAAABIABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAIABABQACADADABIABAAIAAAAIAAAAIAEAAIAAAAIAAAAIACAAIAEgBIABAAIABAAIAAAAIAAAAIABAAIAAAAIADgCIAAAAIAAAAIADABIAAAAIACABIACABIABABIABACIACADIABAEIAAACgAA4oUQABAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAAAQACgHAGgEIACgBIADgCIACAAIAAABIABAAQADADAEAAIAAAAIAAAAIABAAIAAAAIAAAAIABgBIABgBIADgCQADgCAAgDIAAgBIgBgEIAAAAIAAAAIAAgIIAAAAIAAAAIAAgCIABgCIACgBIAFgGIABgBIAEgBIAAAAIACgBIADgBIAAAAIACgBIACAAIABAAIAAAAIAAAAIABAAIAAAAIAAAAIgBAAIAAAAIAAAAIgBAAIgCAAIgCABIAAAAIgDABIgCABIAAAAIgEABIgBABIgFAGIgCABIgBACIAAACIAAAAIAAAAIAAAIIAAAAIAAAAIABAEIAAABQAAADgDACIgDACIgBABIgBABIAAAAIAAAAIgBAAIAAAAIAAAAQgEAAgDgDIgBAAIAAgBIgCAAIgDACIgCABQgGAEgCAHIAAAAIAAABIAAABIAAABIAAACIAAAAQAAABAAABQgBAAAAABQAAAAAAABQAAAAgBAAgAhfoqIAGABIABABIAGAEIABABIADAEIgDgEIgBgBIgGgEIgBgBIgGgBIgBAAIgBAAIgCAAIgDgBIgBAAIgBAAIgFAAIgBAAIgBAAIAAAAIAAAAQgDAAgCgDIgBgCIgBgBIAAgBIAAgCIABgEIABgBIAAgCIABgCIAAgDIAAgDIgCgCIgBgCIAAgBIgBgBQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIAAAAIgBAAIgDABIgGAAIgGgBIgDAAIgBgBIgBgBIgBgBQgFgEAAgIQAAAIAFAEIABABIABABIABABIADAAIAGABIAGAAIADgBIABAAIAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABABIAAABIABACIACACIAAADIAAADIgBACIAAACIgBABIgBAEIAAACIAAABIABABIABACQACADADAAIAAAAIAAAAIABAAIABAAIAFAAIABAAIABAAIADABIACAAIABAAIABAAIAAAAgAASojQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAAAIAAgCIgBAAQgCgDAAgEIAAgCIAAAAIABgCQAAgDACgCIAFgFIABgBIAFgGIACgDIACgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgDIgCgEIgBgBIgDgDIgBgBIAAgCIgBgDIABgDIADgIIABgDIADgDIADgCIAEgEIgEAEIgDACIgDADIgBADIgDAIIgBADIABADIAAACIABABIADADIABABIACAEIABADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgCADIgCADIgFAGIgBABIgFAFQgCACAAADIgBACIAAAAIAAACQAAAEACADIABAAIAAACIAAAAIAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAgAg7o0IAEABIAAAAIACABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAEAKIgEgKQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgCgBIAAAAIgEgBIgCAAIAAAAIgFAAIgDABIgBAAIAAAAIAAAAIgDACIgBAAIAAAAIgCAAIAAAAIgBAAIgEgBIgCgBIgEgBIgBAAIgBgBIgCgCIgBgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIABgHIAAgBQAAgFgDgCIgBAAIgCgBIgCAAIgDgBIgCgBIAAAAIgCABIgBAAIgBAAIgBgBIgDAAIAAAAIgBAAIAAAAIgBAAIgBAAIgBAAIgBgBIgCgBQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAAAIAAgBIgCgFIAAgBIABgFIACgCIgCACIgBAFIAAABIACAFIAAABIAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAIACABIABABIABAAIABAAIABAAIAAAAIABAAIAAAAIADAAIABABIABAAIABAAIACgBIAAAAIACABIADABIACAAIACABIABAAQADACAAAFIAAABIgBAHIAAABQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIABABIACACIABABIABAAIAEABIACABIAEABIABAAIAAAAIACAAIAAAAIABAAIADgCIAAAAIAAAAIABAAIADgBIAFAAIAAAAIACAAgAAsovIgCAIIACgIIAAgDIAAAAIAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBABAAQAFgDAHgCIABgBIACgBIACgCIACgGIABgFIgBgDIAAgCQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgBgCIAAgBIABgCIACgCQAEgCAEAAIABAAIAAAAIAAAAQAEAAACgDIAAAAIABgBIAAgBIAAgCIAAgBIAAABIAAACIAAABIgBABIAAAAQgCADgEAAIAAAAIAAAAIgBAAQgEAAgEACIgCACIgBACIAAABIABACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAACIABADIgBAFIgCAGIgCACIgCABIgBABQgHACgFADQgBAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIAAABIAAAAIAAADgAABo4IgBABQAAAEgBABIgDACIgBABIgCACIgCADIACgDIACgCIABgBIADgCQABgBAAgEIABgBIABgFIgBgEIgBgCIAAgBIgBgBIgCgCIgBgEIAAgDIAAgBQAAgEADgDIADgEIABgCIABgCIABgCIAAgBIAAgBIAAgBQAAgEgDgDIgBAAIgBgEIAAgDIAAAAIAAgBQABgDADgBIADgCIgDACQgDABgBADIAAABIAAAAIAAADIABAEIABAAQADADAAAEIAAABIAAABIAAABIgBACIgBACIgBACIgDAEQgDADAAAEIAAABIAAADIABAEIACACIABABIAAABIABACIABAEIgBAFgAgOo2IgBACIgFAHIAFgHIABgCIABgEIgBgEQgCgFgEgEIAAgBIgBgBIgBgBIgBgBIgBgBQgCgDAAgEIAAgCIAAAAIAAgBIADgCIAAAAIADgCIABgCIABgBIAAgBIAAgCIgBgCIAAgBIgCgCIgBgBIgBgBIgBAAIgCgBIgDgCIgCgBIgBgBIgCgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAgBIAAgDIAAAAQAAgBABgBQAAAAAAgBQABAAAAAAQABgBABAAQgBAAgBABQAAAAgBAAQAAABAAAAQgBABAAABIAAAAIAAADIAAABQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAIACABIABABIACABIADACIACABIABAAIABABIABABIACACIAAABIABACIAAACIAAABIgBABIgBACIgDACIAAAAIgDACIAAABIAAAAIAAACQAAAEACADIABABIABABIABABIABABIAAABQAEAEACAFIABAEIgBAEgAghoxIAAgCIABgCIABgCIACgCIAAgBIABgDIAAAAIAAAAIAAgDIgBgCIgCgFIgBgBIgCgBIgDgCIgIgFIgCgBIgDgBIAAAAIgBgBIgBgBIAAgBIAAgBIAAgBIABgEIABgBQABgDADgCIACgBIAAgBIAAgBIgBAAIAAgBIAAAAIgBgBIgCgCIgCAAQgDgBgDgCIgBgBIgCgCQgEgEAAgHIABgDIgBADQAAAHAEAEIACACIABABQADACADABIACAAIACACIABABIAAAAIAAABIABAAIAAABIAAABIgCABQgDACgBADIgBABIgBAEIAAABIAAABIAAABIABABIABABIAAAAIADABIACABIAIAFIADACIACABIABABIACAFIABACIAAADIAAAAIAAAAIgBADIAAABIgCACIgBACIgBACIAAACgAg5pEIABABIABABIADAEIADACIABACIACACIABACIABADIgBgDIgBgCIgCgCIgBgCIgDgCIgDgEIgBgBIgBgBIgBgBIgBAAIAAAAIAAAAIgBAAIgBgBIgBgBIAAAAIAAAAIgBAAIAAAAIAAAAIgCAAIgBgBIgBgBQgFgCgEgEIgBgCIgBgIIAAgBIACgBIABgCIABgEIAAAAIAAgBIgEgDIgCgBIgCgBIgBgBIgCgBIAAgBIgBgBIgCgGIABgCIgBACIACAGIABABIAAABIACABIABABIACABIACABIAEADIAAABIAAAAIgBAEIgBACIgCABIAAABIABAIIABACQAEAEAFACIABABIABABIACAAIAAAAIAAAAIABAAIAAAAIAAAAIABABIABABIABAAIAAAAIAAAAIABAAIABABgAjDo1IgBABIABgBIAAgCIAAAAIABgBIABgEIABgDIAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBgBAAIgBgDIAAAAQgCgEgDgCIgBgBIAAgDIAAgDIAAAAIAAAAIAAADIAAADIABABQADACACAEIAAAAIABADQABAAAAABQAAAAAAABQAAABABAAQAAABAAAAIAAABIgBADIgBAEIgBABIAAAAIAAACg");
	this.shape_13.setTransform(143.1,66.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AHNE2QgEgHgHgCQgCgFgEgEIgGgGQgJgGgLgCIgXgGIgTgGQAAgGgIgCIgFgBIgCgDIgEgDIgCgDQgEgEgEgHIgFgJQgDgFgEABIgLACIgOAEQgPADgNAFIgKAGIAEgJIAJgNIAFgHIgLAAQgTABgTADIgNADQADgGAHgDQAOgIANgIIgIgGIAMgBQAQAAAPAHQAGACAFABQgBgFgDgFQgGgKgCgIIAEACQAIABAJAFQAQAIANALQAGAFAIAEQADgJgBgKIAAgUQAHAHACALQADAMAFALQAEgOAJgJQAEgFAFgCQADAMgCANIgBAIQAXgHAZgCIAKgBIgCACQgDADAAAEIgGAGIgLAKIgGADIATANQAPAKAMAKIAFAFQgIABgMgFQgIgEgKAAQAIALAJAPQAFALADAJQACAHAAAIQgHgFgGgHgAmbkeIAHgNIADgEIABgCIABAAQAGAJgEAJQgEAGgDAAQgEAAgDgFgAnkkgIAAAAIAAgHQACgMAGgIIAEgFQALgCAEALQAEAMgLAHQgIAFgHAAIgFgBg");
	this.shape_14.setTransform(238.1,49.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F1D38D").s().p("AsBI9QgGgIAEgLIADgNIAAgHIgBgOIAAgHQgCgGADgGQADgLANgCIAXgDQAMgDAQgLIAHAEIAWAJIAVAIIASAJQgIABgFADIgUALIgVAMIgTAMQgJAGgIAHIgPAPQgJAIgKACIgDAAQgGAAgDgFgAmEI8QgMgBgHgMIgKgOIAHgDIAWgJQALgEAJgIIARgSQAIgIAFgKIAKgWQAFgKAGgKQAFgJALgEQALgEANAAQALgBAKAFQAKAEAMAEIAWAEQAMACAMgBQAMAAALgDQALgEAKgHIAUgMQAKgHAIgHIAPgPIARgQQAHgHAJgEQALgGAMgBIAYgCIAKgCIANgBIAYgCIAEACQAIAEAFAHQgFgHgIgEIgEgCQgGgEgGgGQgHgIgGgEQAEgHAHgHQALgMAPgJQATgLAYACQAGABAFgCQAIAJAGAKIADAGIAHALQAGAKADAKQADANgGAKQgFAIgJAJIgOAOQgJAJgKAFQgKAGgKADIgGADIgRAFIgDABQgKADgKAAQgLAAgJAFIgGABIAGgBQAJgFALAAQgLAIgLADIgYAIIgkAKIgfAKIgbAIIgQADQgMACgOAAIgOAAIgMABIgLACIgXAGIgRAFQgJAEgHAGIgOANIgJAJIgNAOIgJAKQgGAFgGAFQgHAFgJAEQgKAEgKABQgIAAgGgCIgHgCQgIgCgDAFQgDACgDAAIgBAAgABxE3IAGgGIgGAGgApFGtQgBgEgDgDIgTgQIAAAAIAMgHQAKgHAKgEQAKgFALgDQALgEAKgFIAVgMQALgGAHgIQAIgJAIgGQAJgHAKgEIADgBIASgHQAKgDAMAAQALgBAMACQACgKAHgKQAHgKAIgIIAAACQgCAOAMACQAMACAMAAQANAAAKgGQALgGAFgLQAFgLgIgLQgEgGgGgCQAHgHAJgGIAIgFIAMgIIAUgMIAJgFIAMgGQAIgEAJgDIAMAQIAOATQAGAKABAMQABAMAEAKQgEADgFACQgLAFgKAFQgKAHgDAIIgYgCQgLgBgLgEQgFgCgGABQgMACAFALQADAHAFAFQgMgDgJAHQgJAHAHAKQgMgFgGAIQgNgCgJAGQgNAHAIAIQgGAFgFACQgLAEgNAAQgMAAgMgCQgNgBgCAHQgDAKgGAIQgHAJgIAGQgJAHgMACIgVAFIgXAFIgWAHQgLADgKAGIgTALQgIgLgHgFgAmzE+IgEAAIgDAAIgLAAIALAAIADAAIAEAAgAATGpIAAAAgAAyDkIgTgMIgSgKIgSgMQgJgHgIgIQgJgIgGgIQgHgJgEgKQgDgLgCgMQgBgLABgLIADgDIARgRIARgRIAPgQQAEgIAJgHIAGgGIALgMIAPgOQAIgIAIgHQAKgHAKgFIAVgJIAWgIQALgEAKgEQAKgFAKgIIAEgSQADgLAEgLQAEgKAGgKQAGgJAEgKQAEgKAHgIIAMgSIANgSIANgTQAEgHACgGQADgJAFgIIABgBIABgCIAEgGIAMgRIANgUIALgQIADgEIALgOIAPgRQAJgKAGgJIAMgTQAFgKAFgKIAIgaIAAAAIAAAAQAKAAAGgFQgGAFgKAAIAAAAIAAAAIgFgBQgMgBgIgIQgJgJAEgJQAEgLAGgKQAFgKAPgBIgBACQgDAIAAAIIAAAHQACALALACIAAAAIAFAAIAAAAIABAAQAIAAAHgEIABAAIAHgEIACABQAIAFAJACQgJgCgIgFIgCgBQgFgEgDgGQgDgFAAgEQAAgGAGgFIALgLIAAAAIAAAAIgLALQgGAFAAAGQAAAEADAFQADAGAFAEIgHAEIgBAAQgHAEgIAAIgBAAIAAAAIgFAAIAAAAQgLgCgCgLIAAgHQAAgIADgIIABgCQAEgLAMgBQAMgBAQACQAHgIAMgEIABgGQACgQAIgNIAMgPQAHgHAHgEQAIgFAHACIgHASQgEAMgBAMQgBALgDALQgEALgGALQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgHAJgFALQgCAEAAADQAAAGAHAFQAFAEAHAAIABAAIABAAIACAAIAFgBIgFABIgCAAIgBAAIgBAAQgHAAgFgEQgHgFAAgGQAAgDACgEQAFgLAHgJQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAHgIANgBQANgBgBAOQgCAMgEALQgFANgKACIAAABQABAJgFAIQgEAJgOgBQgMgBgJAGQgKAGgGAKIgGALQgJAFgHAJQgHAIgGAKIgLAUIgGAMQgBAHgDAHIgEgBIAEABIgFAKQgFAJgEAKIgHARQgDAJgGAJQgDAFgFADIgNAJIgOAKIAAABIgIAGIAIgGIAAgBQgEAKAAAMIAAAXQAAAMgCAMQgCAMgFALQgFALgGAJQgGAJgHAIIgQARQgIAJgDAIIgDAIIAGAHIASAOQAJAHALABQADgGAAgGIABgPQAAgJAFgIQAKgTARgOQAIgHAJgEQgIgIAHgLQADgGAKACQANACABAMIABAGIAKgGQANgFAPgDIAOgEIALgCQAEAAADAEIAFAKQAEAGAEAEIACADIAEAEIACACIAFABQAIACAAAGIATAHIAXAFQALACAJAGIAGAGQgCAMgGAKQgDAGgIADIACgLIgCALIgDALQgFALgFAJQgGAIgLAFIgWAJIgWAGIgWAHQgMAEgMAAQgMABgLgDQgKgCgMgBQAHAHAEALQAFALAAAMQAAAKgEAGQALgHAMADQAKACAKAEQALAEAIAHIAOAPIAPAPQAHAJABALQACAOALgDQAGgCADgFQAFgIAIgIQAGgGAIgDQAKgFALgCIAYgEQALgBAKgEQALgFAJgHQAIgGAHgKQAHgJADgMQADgIAAgMQAAgMgEgMIgIgVQgGgMAPgEQAJgCAHAMQAGAJABAKQAAAHgCAGQgBADACADIAGAHQAGALANgGQAJgFAIgFQAHgFAKgEQAKgFAJgGIATgNQAKgGAKgEQABgBAAAAQABAAAAAAQABAAAAABQABABAAABQADALgEAMIgCAFQALgKAGAJIABAFQgBAKgGAHQAMgIgGAPIgEAHQAPgIgGAOQgFAMgKAGQgKAGgMABQgMABgLACQgMAHgLADIgVAGQgMAEgKgFIgBAAQgLgFAAgMQAAAMALAFIABAAQgKAHgIAIIgRAQIgPAPQgIAIgIAJQgGAIgKAGQgJAHgLAEQgLAEgLAGQgIAEgMAEIgWAIQgIACgIAAIgGAAIgKgKQgGgGgKgGIgUgKIgUgKQgKgGgLgCIgXgHQgLgEgKgHIgSgOQgJgGgHgIIgOgQQgIgJgCgKIADgEIAPgQIgPAQIgDAEQgHgCgHAMIgKARQgHALgIAKQgHAHgHAFQgJAFgNACIgFABIgFABIgBAAIgSADIgXAEQgLADgLAEIgUAIQgMAFgHAGIgGAHIgHADIAHgDIgHALQgGAKgEAKIgBADIgHgGgAGACKIALAHIgLgHQgLgHgIgIQAIAIALAHgABJBuQgMABgLAFQgLAEgJAHIgRANIARgNQAJgHALgEQALgFAMgBIAXgDIAEAAIgEAAIgXADgALwBDQgHADgJADQAJgDAHgDQAHgEAEgGQgEAGgHAEgAL1AuIgTAOQgFADgFABQAFgBAFgDIATgOIAEgDIgEADgAFAAnQgHAHgDALQADgLAHgHIAAgBQAHgGAKAAIABAAIAAAAIAAAAIAAAAIABAAIgBAAIAAAAIAAAAIAAAAIgBAAQgKAAgHAGIAAABgALjAjQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAHgGAEgHQgEAHgHAGgACig8IgHAXIgHAWQgEALgCALIgCAHIACgHQACgLAEgLIAHgWIAHgXIACgGIgCAGgAFohCQgJAIgHAJQgHAHgFAMQgFALAKAIQAJAGAMAAQAMgBAJgDIAVgHQALgDAIgHQAJgGAHgJQAEgFAEgBQgMABgKgEIgTgJIgTgJQgKgFADgOQgHAMgJAJgADigkIAAgCIABgMIgBAMIAAACgADeg+QACAHADAFQgDgFgCgHIgBgLIACgNIgCANIABALgAHbg5QAGgBAAgEIgBgFIAAAAQgEgHgIgBIgBAAIAAAAIgGABIAGgBIAAAAIABAAQAIABAEAHIAAAAIABAFQAAAEgGABgAHFhTQAAABgBAAQAAABAAAAQgBAAgBAAQAAABgBAAQABAAAAgBQABAAABAAQAAAAAAgBQABAAAAgBQACgDAAgDIAAgBIAAABQAAADgCADgAGbhgQACAHAEADQgEgDgCgHIAAgBQgCgFgHAAIAAAAIAAAAIgDAAQgIABgCAHQACgHAIgBIADAAIAAAAIAAAAQAHAAACAFIAAABgAGwhaQAAgJAIAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAQgIAAAAAJgAG7nzIgEAlIAEglIAAgCQAAgIgGgDQAGADAAAIIAAACgABLDIIAAAAgAKGBqIAAAAgAGcnLIAAAAg");
	this.shape_15.setTransform(230.2,85.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguGXIgXgHQgKgDgFgJIgNgUQgHgJgDgLIgCgUQAKADALACQAMACAMAAIAXAAIAYgBQANAAAKgEQAHgCAIAAQgBAOgEALIgIAUQgEALgHAIQgJAIgLAFQgHADgHAAIgJgBgARHEMQgKgHAEgMQAGgLAGgHQAIgJAJgIQAJgJAHgMQgEANALAGIATAJIATAIQAKAFALgBQgDABgEAFQgHAJgJAGQgIAGgLAEIgVAHQgJADgMAAIgCAAQgLAAgIgGgAysBhIgDgOQAMAAAKgFQAKgGAHgIIAPgQIAMgMIAIAGQAEACAFAAIgDANQgDALgHAIIgPAPQgHAHgLADQgLACgMABQgJAAgCgHgANUh2QgKgBgIgIQgJgJACgKIAIADQALADALgBQANAAALgDIAIgCIgCAKQgBAMgLAEQgIADgJAAIgGgBgAqaiNIgPgPQgGgHgGgLQgDgBgDgDQAHAGALAAQAMAAALgFQAKgFAJgGQAIgGAEgLQgBALAAAMIABAVQACAJgEAGQgEAJgMACIgFAAQgKAAgGgGgAFkkFQgHgHgBgKQgCgLgFgNQAJAJAKACQAMADALgGIAKgHQgGALgDALQgDAMgJAGQgEADgEAAQgEAAgEgDgAiTkQQgLgFgHgJQgHgIgFgKQgGgKABgNQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAIAPAFIAUAIQAJADAKAAQAOgBAMgEIAGgDQAJgEAFgIQACAEgBAHQgBALgFALQgFAKgIAHQgEAEgEACQgLAGgMABIgEABQgJAAgIgEgAGjlbIAAgCIAAgBIACgGIADgGQAJALAGgMQAEgJgGgJIAAAAQAFgFAHgBQAFgCAEADQALAEgGANQgEAKgHAIQgHAIgMADIgFABQgHAAgCgIgAFqlfIgEgCQgGgEAAgHIAAAAQAKACAKgGQALgHgEgMQgEgLgLACIAIgIQAMgHAFAKQAFAJgBANQgBAMgJAJQgIAHgKAAIgDAAg");
	this.shape_16.setTransform(154.4,57.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#986631").s().p("AE2DCQgCgJgEgHIgGgKIgDgEIADgDIAAAAIAAAAIgDADQACAEgEAEQgJgHABgNIABgXQABgMgBgMIAAgFQgGACgDADQgCgRgEgSQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBABIgSAKQgLAHgLAEIABgZQgSAGgYACQAGgLgHgJIgNgOIgIgDIgPgGIgVgJQgLgFgMgDIgOgDQAMgDAMACIAbAEIAXAEQAMACAJAFIAHABIgIgXIgFgQIgBgDQAOAHAPAKQAIAFAFAFQACgGAAgHQAAgHgCgHQAMAJANALQAIAGAFAIIAEAJIABAFQAPgNAUgEIAZgHIgPAgIgDAFIA5ACIAWACIAGACIgdAGIgQAEIgEAAIAQAUQAIAKAFAMQAEAIgBAJIgRgNQgLgJgNgCQAIAJAGAMQAFAKABAMIABATQgJgGgIgLQgEgGgHgCQAEAHAAALQgBAMgDAMIgIAZIgDAIQgEgFgBgIgAiogqQABgOgNgCQgNgBgKAFIgMAHIgFADIgMAHQADgMAIgLQAJgLABgPQABgKgFgHQgEgIgJgHQgHgFgIgDQgYgHgZgBIgQAAQgLAAgLgDQgHgBgHABQgHABgEAEIgBABQAFgJgGgMQgEgLgHgJQgHgKgJgIIgHgFQALgFAMABQAEAAACACQAJADAJAJIAPAPQAJAJAFAJQgFgJgJgJIgPgPQgJgJgJgDIgFgIQAMgCAOAEIAMADIAJACIAEABIAEACQAIAJAGAKQAHAKACAKQgCgKgHgKQgGgKgIgJQABgIAMACQAFAAAGADIAHAFIACABIAGAEIgBgDQARABAQAGIADABIADACQADAJALABIAEACQAEAMABAMIACAUIAAAEIAAgEIgCgUQgBgMgEgMIAFAFIAOAGQACAKAAAKIgBAEQABAMgFAMIgEAMIAEgMQAFgMgBgMIABgEQAAgKgCgKIAFAEQAHAEAHADQAIADAEAHIAGAGQAGAGAEAFQABACgBAEQgCAHACAGIADAFIADAOIACALIAAAMQAAANgLADQgIACgGAFIAAgGgAifg4QALgFAFgKQgFAKgLAFgAiwh3QAAAMgFALQgFALgHAKIgGAIIAGgIQAHgKAFgLQAFgLAAgMIABgVIgBAVgAifhKIgFAGIAFgGQAIgJADgNQgDANgIAJgAifhiQgEALgHAJIgEAFIAEgFQAHgJAEgLQAEgIAAgIIgBgGIABAGQAAAIgEAIgAjnifIABAXIgBgXQgBgOgGgKQAGAKABAOgAkIitQAGALAAAMQAAgMgGgLQgGgMgJgHQAJAHAGAMg");
	this.shape_17.setTransform(225.4,28.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC97").s().p("AjdJWIgRgNQgJgIgIgKIgIgLIgGgIQgHgJgIgJIgSgQQgJgHgKgGQgLgHgMgDIgDgBQgKgCgJgEIgOgIIgIgBQgFgBgEgEIgBgBIgVgHQgKgDgMgBQgMAAgMgDQgLgDgKgGIgUgNIgOgMQAFgHABgLQAAgOgOACQgLACgCAIQABgHAAgIQgBgNgKACQgMACgGAFIABgBIAEgIIAAgJIAAgFIAEACQALAEAMgCQAIgBAFgEQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAIAXAIIAWAGQAMADALAEQAKADAJAHQAJAFAIAIQAGAHAHgBQAKAFAIAIQAHAJAIAGIAPAOQAIAIAIAGQAGAEAIACIAGACIAFACQAJAEAMACIAXADQANABAHAHQAHAIADAKIADALQAIAIAGAIQAFAIAHAFIAMANQAHAIgBANQgCAMgLAEIgHACQgEAAgEgDgAsBI8QgHgKAKgJIAKgJQAHgIgBgNIgDgTIgBgEQgDgKgIgJIgNgNIgDgCIgPgKQgKgFgKgEIgWgHQgLgEgMgBIgXgCQgMgBgMgDQgMgCgMgCQgLgBgKgDIgWgHIgXgHIgVgGQgMgDgKgFIgVgJQgJgEgIgBQgNgDgDgKQgEgMACgMQAAgMAEgMQADgMACgLQACgNAJgFIAGAAIAdAEIAaAEQAKABAKADIAJAFIAPAKIgMAZIAAACQAJgDAMgCQAMgCAMAAQAMgBALAEQAIAJAMAIQAMAIAUAVQARASAAACQAKADAKAEQALAEAMgBIAYgCIAYgDQANAAAJAEQAKAGADALQAEALgBAMQAAAFACADQgBAJABAMIABAYIABAXQABANgCALQgBALgJAIQgJAIgLAGQgEACgEAAQgHAAgJgFgAr2G2IAAAAIgBgDQgHgJgKgGQAKAGAHAJIABADIAAAAgAvYFQIgBgDIABgCIgBACIABADgAO1GXQgFgJgIgJIAFgBIgGgGIgQgPIgSgQIgKgJIABgCQAEgLAFgKIAHgLQAOACALgCIAYgDIAXgCIALAAIADAYQABANgCALQgCAMgHAKIgMASQgHAKgIAIIgEAEIgEgGgAHJFtQgHgHgKgDIgQgEIgGgBIgNgOIgNgKQgKgHgIgJIgSgQQgJgIgFgJIgHgKIgGgJIgMgTQgIgKgEgLQgFgNgHgDIgIgTQgFgKgDgLIgDgRIgCgWIAAgCIAAgYQAAgMAEgLQADgKAFgKIACgDIAAAAQAGgJAGgIIAQgRQAGgGAHgFIADgBIABgBIAGgCQAGgCAHABQALABAKAFQAKAFAMADIAXAGIAXAGQALADAMAEIATAKIAVAMQAKAHAIAJIAQAPQAJAIAFALIAJAUIAEALQgEAIgKAHQgJAIgLADQgLAFgLACIgPACIgIACIAIgCQAGAGAFALQAGAKAIAJQAHAJAEALIAGAWIAHAWIAFAWIABADIACAUIABAMIgHAFQgJAGgIAHIgEgBQgFgFgIgBQgMgDgKAHQgJAGgFAKQgDAGgCAGQgGgDgFgEgApaFPQABgPgNgBQgGgBgFADQgJAEgIAHIgHAGIgFgFIgBAAIgCgBIgFgCQgHgCgHgBQgMAAgMgEIgWgHQgLgDgLgHQgIgEgFgHQAGgDAIgDQALgDAKgFQAJgFAIgJIAPgRIAIgLIAEACQAKADAIAIIAPAQIALANIAAABQACAIAJAEQAJAFAMADQAMAFAMABQALACACALQABAIAIACIgBAAQgLAFgCAKIAAADQgDgIgMAFQgKAEgNACQAGgIAAgJgAu+C/QgMgCgIgGQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBQgBgMgIgGQgJgGgMgDIgMgDIgXgEQgLgDgKgEIgVgKQgFgCgDgEQgHgGgHgKQgHgJgDgOQAJgGAMgDQgMADgJAGQgJAFgIAKQgIAJgKAHIgTAMQgJAGgMAEIgWAGIgWAEIgYACIgYABIgIAAQgDgCgFgHIgMgTIgKgWQgEgKgBgMIgCgXQgBgMABgMIABgXQAAgJgGgHIADgCIgDACIgDgEIADAEIgCAAQgLADgLgFQgFgCgCgDQgHgJgPAEQgKADgKAHQgGAEgGABQgNADgIgHQgKgJAIgIQgIgCgGgFQgFgDAFgCQAJgFAIgDIgEgBIgUgIQgFgBAFgDQAHgFALgCIAIgBQgCgHgEgFQgGgGADgHQAEgKAOAAQANABAKADIAVAHIAUAFQAMADAOgBIAAAAIAAAAQAAANAIAIIAJAJIgJgJQgIgIAAgNIAAAAIAAAAQgBgMAGgKQAFgJAJgGQALgIAIAHQAIAHAAANIACAMQACALAKADIADAEQAEAHgCAIQgCAMgGAJQgGAKADALIAFAPQAEAIAHAJIANASQAGAKACAMQACAMgCAMQgBAEACABIAEgGQAGgMAIgLQAGgIAHgGQAIgIAJgFQAOgIAQAAQAMgBAKAFQAFACACgCQAJgOAPgLQAHgFAKAEIgBgKQgBgMACgJIgXAAQgMgBgLgDQgKgEgKgFQgJgGgDgLIgDgLIgDgKIADAKQgBAFgHAAQgNABgHgLQgHgLAIgLIABgBQAJgJAIAHQAJgJgFgMQgFgKgJgHQAJgHgCgMQAQgPAPgKQAGgFAEgGQALgBAKgGQAKgGAIgHQAHgEAGgDIAFgCIARgBIASABIAQABIADABQgBALACAEIgBAAQgNAEAAAHIAAADIAAgDQAAgHANgEIABAAQANgCAGAJQACAEgCAEQgCAHgEAFIgFAGQAKgEALABQANACAGALQAGALABALQAAANgFAKIgLAUQgGAKgHAHIgFAFQAIAEALABQAMAAAJgFQAAgLADgMIAIgVQAFgKgBgNQgBgMAEgLQAEgLAGgKQAGgJAIgIIANgMIgBgXIgCgXQgCgNADgLIAFgWQADgKAGgKQAGgJADgMIADgXIABgXIAAgCIAAgIIAAAIQgIgHgJgGQgKgHABgLQABgFgHgDQgKgEAHgNQAEgJAJgHQAFgEAFgDQABgIAFABQAIgGgEgOIgIgXQgDgLgBgMIgDgWQAAgEAEgDQAKgFALAGQAKAGAFAIQAGAIgGANQgFAKAAALQgBANABALIAAABQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAQAJgIAKgHQAKgGALABQANABABAMQABAMgIAHIgCACIgOAMQgGAFgJAAIAAAAIAAAAIgDAAIAAAAIgHgCIABgCIABAAQADgMgLAAIAAAAIAAAAIgDAAIgCgLIAAgBIAAgBIAAABIAAABIACALIADAAIAAAAIAAAAQALAAgDAMIgBAAIgBACIAHACIAAAAIADAAIAAAAIAAAAQAJAAAGgFIAOgMQANgBADAMQAEAKgKAJIgEAEQAIAAAHgCQAAAAABAAQAAgBABABQAAAAABAAQAAAAABAAQAJAHgGALQgGAKgJAGQgIAFgLACIgEAAIgBABIgBAAIAAAAIgBAAQgJgBgHgFQgEgEAAgEQAAgEAEgFQgEAFAAAEQAAAEAEAEQAHAFAJABIABAAIAAAAIABAAIABgBIgEAFIgCACQgGAIgEAKQgFAMgBALQgCAMABAMIADAXIACAYQABAMgFAKQgFAMgHAJQgIAKgEAIQAAABAAAAQgBABAAAAQAAABABAAQAAABAAAAIAEAJIAGAXQABAMAAALIgEAXQgDAMgEALIgJAVQgEALgKAJIAAgCIAAgBQAAgMABgJQgBAJAAAMIAAABIAAACIABAVIgDgDIADADIAHAJIAEAGQAFAKAHAIIAJAMIgEgBIAEABIAFAHIACAFIAGAVQADALAGAIIAMASQAGAKAEAKQAEAKAGAJIAMASQAFAIAIADQgGADgDAHQgEAKgHAJQgIAIgLAFIgUAKQgFADgFABQgMACgMAEIgWAHIgWAFIgMACIgLgCgAukCtIACAAQALAAAEgJQgEAJgLAAIgCAAIAAAAIgBAAQgJAAgIgGIgCgBQgJgHAAgMIAAgCIAAACQAAAMAJAHIACABQAIAGAJAAIABAAIAAAAgAt4COQADAAACgCIAAgBIAAABQgCACgDAAIgBAAIAAAAQgDAAgDgCIgBgBIAAAAQgJgGAAgIIABgFIgBAFQAAAIAJAGIAAAAIABABQADACADAAIAAAAIABAAgAvKCNIAHgBIABAAIAHgCIgHACIgBAAIgHABIAAAAIgBAAQgGAAgGgDIgBgBIgBAAQgKgGAAgMIAAgDIAAADQAAAMAKAGIABAAIABABQAGADAGAAIABAAIAAAAgAuYB5IABAAIAAAAIAAAAIgBAAIAAAAIAAAAQgKAAgFgIIAAgBQgGgJgHgEQAHAEAGAJIAAABQAFAIAKAAIAAAAIAAAAgAyWBSQAEAAADgEIABAAIAAgBIABAAIAAgBIAAAAIAOgUIgOAUIAAAAIAAABIgBAAIAAABIgBAAQgDAEgEAAIgBAAIAAAAIgEgBIAAAAQgMgFgKgCQAKACAMAFIAAAAIAEABIAAAAIABAAgA2AgaQAKAAAHgEIAIgDIgIADQgHAEgKAAIAAAAIAAAAIgCAAIgBAAIgBAAIgBAAIgLgBIgJAAIgBAAIgCAAIgBAAIgHAAIAHAAIABAAIACAAIABAAIAJAAIALABIABAAIABAAIABAAIACAAIAAAAIAAAAgAwkg0QgFAKgLAFQgMAFgMAAQAMAAAMgFQALgFAFgKIADgGIgDAGgA2QgsIABAAIABAAIAWgCQAIgBACgBQgCABgIABIgWACIgBAAIgBAAIAAAAIgBAAQgJAAgHgDQAHADAJAAIABAAIAAAAgA1eg6QAKAAAIgHQgIAHgKAAIgBAAIAAAAIgBAAIgBAAQgMgBgLgEQgMgDgLgBIgGAAIgFgBIAAAAIAAAAIgEAAIgBAAIACAEIgCgEIABAAIAEAAIAAAAIAAAAIAFABIAGAAQALABAMADQALAEAMABIABAAIABAAIAAAAIABAAgAxkhYIAEAOQACAHAJAAQAMAAALgDQAKgDAIgHIAPgPQAHgIACgLIADgNQgEABgEgDIgIgGIACgCIgCACIgMgGIAMAGIgMAMIgPAQQgIAIgJAGQgKAGgNgBIgCgHIACAHgAulhPIAGAKIgGgKQgDgHABgGQAAgFABgFQgBAFAAAFQgBAGADAHgAwFhHQAFgCAFgFQgFAFgFACgAxnh5QgGgEAAgIIAAgFQADgNAOgBIAAAAIABAAIAAAAIABAAQAKAAAFAJIABABIgBgBQgFgJgKAAIgBAAIAAAAIgBAAIAAAAQgOABgDANIAAAFQAAAIAGAEgAyViAQgCgDAAgEIABgFQACgLAOgDIAHAAIABAAIAAAAQAIAAAHADQgHgDgIAAIAAAAIgBAAIgHAAQgOADgCALIgBAFQAAAEACADgAufiFIgEADIAEgDQAKgIABgMIgBgMIABgMIgBAMIABAMQgBAMgKAIgAxZioQABgKAKAAIAAAAIAAAAIAGABQAFABAAAHIAAABIAAgBQAAgHgFgBIgGgBIAAAAIAAAAQgKAAgBAKgAtfm3IACAAQALgBAKgDQAIgEAHgFQgHAFgIAEQgKADgLABIgCAAIAAAAIAAAAQgLgBABgLIABgBQAAgFAEgCQgEACAAAFIgBABQgBALALABIAAAAIAAAAgAtznKQgKAFgMAAQAMAAAKgFQAJgEAEgJQgEAJgJAEgAtwnlIgWAEIgJADIAJgDIAWgEIABAAIABAFIgBgFIAAAAIgBAAgANHCDIgVgGIgXgHQgMgEgKgBQgMgBgLgEIgXgIIgUgGIgXgIQgLgEgLgGIgUgOIgVgOIgSgLIgUgNIgTgNIgUgNQgKgGgLgDQgOgEAAgJIAAgEQgEgKgBgLIgCgSIAAgHIgCgYIAAgXQgBgNAEgLIAIgWIAMgVQAHgJAIgJIARgRIAPgPIALgLIgXgFQgLgCgMgEQgNgEgJAIQgIAJgGAKQgGAKgFALIgJAWIgIAWQgDAMgBALIgBAZIAAAYIAAAWIACAaIgBAAIgWANIgVALQgLAGgMADIgWAGIgBABQgHgEgLgEIgWgIIgVgIQgLgEgIgIQgJgHgFgKQAEgIADgLQADgMgDgLQgEgLgEgJQgEgKgEgMQgDgLABgMIADgXIACgXQACgMAFgLIAKgUQADgGAFgGIgHAAIgYAAIgYAAIgZAAIgWgBIgXgCIgYAAIgYAAIgWABQgKABgLAAIADgHQAEgLgCgLQgDgIgFgGQAJAFAKABIAYACIAYgBQAMgCAIgDIACgBIABgBIASgGQAKgDALABQAMAAALAEQALAEAMgCIAYgDIAWgEQALgBAJgEQALgDAIgHQAJgHAKgFIAJgGIAIgGQAIgHAGgKQAFgJACgKIABgFIADABIAOABIABAAIAAAAIAGgBIAZgBQALAAALgCQAIgCAGgEQgGAEgIACQgLACgLAAIgZABIgGABIAAAAIgBAAIgOgBIgDgBIgLgIQgJgGgGgKQgGgJAAgMQAAgNAEgJQAFgKAHgKIAMgRQAGgIAFgKQAEgKAAgNQAAgMAFgLQAEgLAFgIIACgBIABgBQAEgEAGgBQAIAAAHABQALACALAAIAQAAQAZABAXAIQAJACAHAGQAJAGAEAIQAEAIAAAJQgBAPgJALQgIALgDAMIAMgHIAFgDIAMgHQAKgFAMABQAOACgBAOIAAAGQgCAJgDAHQgGAKgJAHQgIAGgLADQgLADgMgDIgBAAQgMgDgCgMQACAMAMADIABAAQgHAJgIAIQgIAHgJAGIgUAMQgIAFgHAHQgHAHgFALQgEAJAEAMQADAIAGAFQAGgGALgFQAKgEALgDIAWgGQALgDAMgBIAYgDIAYgDIAXgDIAYgCIAZgBQALAAAMACIAWADQAMADAKAFIAVAKQALAGAIAGQAGAFAFAGIACgEQAEgJAHgHQAIgIAGgKQAFgLAKgGQAKgGALgCIAYgDQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQABgEAFAAQAKgBAHgEQAIgEALAEQALAEAKgEIANAOQAHAJgGALQAXgBATgHIgBAZQALgDALgIIASgKQAAAAABAAQABAAAAAAQABAAAAAAQAAABABABQAEASACAQQADgDAGgCIAAAFQABAMgBAMIgCAXQgBAOAKAHQAJAGACALQACAMgKAJQgHAHgJAEQALgCAMACQAMACALAGQAJAHAIAHIAFAFIABACIACAFIgDAEIgMARIgMATIgMASIgEAFIgCADIAAABQgFAIgDAJQgCAGgEAHIgNATIgNARIgNATQgGAIgEAKQgEAKgGAJQgGAKgEAJQgFALgCALIgEASQgKAHgKAFQgKAFgLAEIgWAIIgVAJQgLAFgJAHQgIAHgIAIIgPAPIgLALIgBAAQgFAAgHgCgAKUANQgCgKgKgIQAKAIACAKgAQejsIAIgBIABgBIABAAIACgCIgCACIgBAAIgBABIgIABIAAAAIgBAAQgEAAgEgDIgBAAIABAAQAEADAEAAIABAAIAAAAgAJbkOIgRAQIgFAFIAFgFIARgQIAEgEQAHgFAJgDQgJADgHAFIgSgOIgRgLQgLgGgHgHIgHgJQgHgJgLgDIgWgFQgKgCgJgIIgDgDIADADQAJAIAKACIAWAFQALADAHAJIAHAJQAHAHALAGIARALIASAOIgEAEgANpkDIABAAIABAAIgBAAIgBAAIgCAAIAAAAIgFgBIgBAAQgKgEgIgKIgQgQIgOgRQgHgJgEgLQgCgFAAgFIACgIIgCAIQAAAFACAFQAEALAHAJIAOARIAQAQQAIAKAKAEIABAAIAFABIAAAAIACAAgAEvkRIARAAIAEAAIgEAAIgRAAIAFgFIgFAFIAAAAgAONkrQAIAIALABQAMACALgEQALgEABgMIACgKQAGgDAGgEIADgDIgDADQgGAEgGADIgIACQgMADgMAAQgMABgKgDIgIgDIgNgFIANAFQgCAKAIAJgAQLlTQACgDAAgDQAAgFgEgEIgBgBIgBgBQgEgEgGAAIAAAAIAAAAQgEAAgDACIgBAAIABAAQADgCAEAAIAAAAIAAAAQAGAAAEAEIABABIABABQAEAEAAAFQAAADgCADgAOnleIAAABIgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgBIAAgBIAAgBQACgIAIAAIAAAAIAAAAIAGABQANADADAJQgDgJgNgDIgGgBIAAAAIAAAAQgIAAgCAIIAAABIAAABIAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAIABABIAAgBgAF4lnIgEAAIAEAAgAOxmNIAIAKIgIgKIgBgCQgEgDgFgBIAAAAIAAAAQgFABgEACQAEgCAFgBIAAAAIAAAAQAFABAEADIABACgAGnnCQACALAHAGQAHAHAJgHQAJgGADgMQADgLAGgLIgLAHQgKAGgMgDQgLgBgIgKQAFANABALgAHHn1IABAAIAAAAIABAAIABAAIAXgCIgXACIgBAAIgBAAIAAAAIgBAAIAAAAIAAAAQgJAAADgHIABgBIAAgBQAFgHAIAAIAAAAIAAAAIAFABIAAAAIABAAIgBAAIAAAAIgFgBIAAAAIAAAAQgIAAgFAHIAAABIgBABQgDAHAJAAIAAAAIAAAAgAIAopIgBACIgDAEIgIANIgDAGIgCAGIAAABIAAACQADALALgEQALgDAIgIQAHgIAEgKQAFgNgKgEQgEgCgFABQgHABgFAFIAAAAIgBAAgAHApAIgIAIIgEAFQgGAIgCAMIAAAHQAAAHAFAEIAFACQAMABAIgIQAJgIACgNQABgNgFgJQgDgGgFAAQgEAAgFADgAQ8BPIgRgOIgGgHIADgIQADgJAIgIIAPgRQAIgIAGgIQAGgJAFgMQAEgKADgMQABgMABgMIAAgXQAAgMAEgKIAOgLIANgIQAFgDADgFQAFgJAEgJIAHgRQADgKAFgJIAFgKQAKAEAHAGIAPAPIAQAQIAHAIQAFgHADgMIAGgXQAEgKAFgLQAFgKAGgJQAHgJAKgGQAIgFAIACIACgJQAEgLALgFQAEgCgBgHQgEgNAMgGQALgFALgBQAHAAAGACIADgZQAAgNgCgLQgCgHAIgCQALgEANACQAMABAJAJQAIAJAAANQAAAMgFALQgEAKgHAJIAAAAQgDAFgEACIgJAGIgDgEIgRgSQgDgDgFgCQAFACADADIARASIADAEIAJgGQAEgCADgFIAAAAQAHgIALAAQANABAFAMQAFALgIAKIgBACQgHAJgIAHIgBABIAAAAIAAABIAAAAQgGAEgHAAIgBAAIAAAAIgFAAIAAAAIgCgBIgDgBIADABIACABIAAAAIAFAAIAAAAIABAAQAHAAAGgEIAAAAIAAgBIAAAAIABgBQAIgHAHgJQALgCACAOQABAMgFAIIgBABQgGAJgMADIgIABIgBAAIAAAAQgHAAgGgEIgBgBIAAAAIAAAAIABABQAGAEAHAAIAAAAIABAAIAIgBQAMgDAGgJIABgBQAIAGgCAMQgCAMgJAHQgHAEgHADQABAMAAALQAAALgDALQgDALgFAKIgGALQgFALgGAJIgOATIgOATIgNAOIgKABQgZACgYAHIACgIQABgNgDgMQgEACgFAFQgJAJgEAOQgEgLgDgMQgDgLgGgHIAAAUQAAAKgCAJQgIgDgGgGQgOgLgPgIQgJgEgJgCIgDgCQACAIAGAKQADAGABAEQgGgBgFgCQgPgHgQAAIgMABIAIAGQgNAIgPAIQgHADgDAGIAOgDQATgDASgBIALAAIgFAHIgIANIgFAJIAAgGQgCgMgNgCQgJgCgDAGQgHALAIAIQgJADgJAHQgQAOgKASQgFAJAAAJIgBAOQgBAHgCAGQgMgBgJgHgASMg3IAGgBIgGABgATjiVIgEgFIAEAFgAWZi/IABAAIAJgCIgJACIgBAAQgOACgFgJQgDgFAAgGIAAgGQACgHAHgGQgHgGAAgMIAAgCIAAgBIAAgBIABgDIgBADIAAABQgJgDgIgJQAIAJAJADIAAABIAAACQAAAMAHAGQgHAGgCAHIAAAGQAAAGADAFQAFAJAOgCgAUljwQgDgGAAgGIAAgCIAAACQAAAGADAGgAVlj9IAFgBIACgBIAIgGIAHgHQAEgFAAgEQAAgEgCgDQACADAAAEQAAAEgEAFIgHAHIgIAGIgCABIgFABIgBAAIAAAAIgGgBIgBAAQgKgEAAgMIAAgCIABgIIgBAIIAAACQAAAMAKAEIABAAIAGABIAAAAIABAAgAUmj9IgEgBIAEABgA04gJIAAAAgA04gJIAAAAgAydhJIAAAAgAwhiHIAAAAgAWMjkIAAAAgAWFj5IAAAAgAWFj5IAAAAgAJfkSIAAAAgAOHk+IAAAAg");
	this.shape_18.setTransform(146.8,74.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.anim_couchset4, new cjs.Rectangle(-1,-1,309.6,214.6), null);


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


(lib.anim_set4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anim_couchset4();
	this.instance.parent = this;
	this.instance.setTransform(408.1,99.8,1,1,0,0,0,139,204.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:139.1,rotation:-6.1},12).to({regX:139,rotation:6.5},29).to({rotation:0},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(269,-105.2,307.7,212.7);


(lib.PresentParticipleDiagrams1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		playSound("ball_passes");
	}
	this.frame_138 = function() {
		playSound("ball_passes");
	}
	this.frame_168 = function() {
		playSound("diagnal_line");
	}
	this.frame_173 = function() {
		playSound("diagnal_line");
	}
	this.frame_192 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_213 = function() {
		playSound("_2a");
	}
	this.frame_274 = function() {
		playSound("diagnal_line");
	}
	this.frame_286 = function() {
		playSound("diagnal_line");
	}
	this.frame_296 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_318 = function() {
		playSound("_2a");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(110).call(this.frame_138).wait(30).call(this.frame_168).wait(5).call(this.frame_173).wait(19).call(this.frame_192).wait(21).call(this.frame_213).wait(61).call(this.frame_274).wait(12).call(this.frame_286).wait(10).call(this.frame_296).wait(22).call(this.frame_318).wait(53));

	// Title
	this.instance = new lib.PartDiagram("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(204.8,116.9,1.049,1.049);

	this.instance_1 = new lib.TheCAPS("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.6,240.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({startPosition:0},0).to({scaleX:0.86,scaleY:0.86,x:204.2,y:34.9},9).wait(101).to({startPosition:0},0).to({scaleX:0.74,scaleY:0.74,x:204.7,y:31.9,alpha:0},8).to({_off:true},1).wait(224));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(296).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,rotation:24.5,x:58.4,y:154.7},12).to({scaleX:0.9,scaleY:0.9,rotation:65.3,x:35.5,y:99.8},12).wait(51));

	// w1
	this.instance_2 = new lib.Tired("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.9,271.5);
	this.instance_2._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAzQgEgCABgHQgGABgGgBQgGgBgFgDQgNgIgEgOQgEgOAIgNQAKgQAPgGQAPgFANAJQAHAEADAEIAEAIIAWgjQAFgFAFADQAGAEgEAGIgZAlIgMARQgMAWgEALIAAACQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABIgCAAIgDgBgAgUgUQgJADgHANQgFAHACAJQADAJAHAFQAGADAFAAQADAAAHgCIADAAIAFgLIAEgIIAFgHQAAgFgCgGQgDgEgEgEQgHgEgGAAIgHACg");
	this.shape.setTransform(87.9,150.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAEAoQgLgBgJgFQgPgIgFgMQgFgOAJgOQAJgQAOgGQAPgIAPAIQALAHAEAHQAFAJgFAJQgDAGgKABIgSgBIgegCQABAHADAGQAEAFAHAEIAKAFQAJACAEgCQAEgCADABQAAABABAAQAAAAAAABQABAAAAABQAAAAABABQAAADgBACQgDAGgKAAIgFgBgAgBgZQgJADgJAKIAXACQAPABAHgBQgCgIgKgGQgEgDgFAAIgGACg");
	this.shape_1.setTransform(78.9,147.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATAaQgDgFAGgEIAEgCIAGgEQgHgJgIgDQgIgDgJABIgjATQgGAEgDgGQgEgFAGgEIAsgZIAGgDIAHgEQAGgEADAFQAEAHgLAGQATAGAJANQADAFgDAFQgCAFgIAEIgEADIgGACQgEAAgCgEg");
	this.shape_2.setTransform(73.1,141.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrAeQgDgBgCgDQgBgCABgDQABgDADgBIALgHIAMgHIAOgHIAPgIQADgCACABQADABABADQACADgBADQgBACgDABIgOAIIgPAIIgMAHIgLAGIgEABIgBAAgAAngMQgEgBgBgDQgCgDABgDQABgEADgCQADgCAEACQADAAABAEQACADgBADQgBAEgDACIgEAAIgCAAg");
	this.shape_3.setTransform(69.7,134.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAuAwQgCgCgBgDIgEgRIgDgQIgBgFIggAKIgeAKIgHADIgIADQgFABgEgBQgFAAgBgFQgBgDACgCQABgDADgBIADAAIAEgBIAKgDIAKgDQALgDAQgGIAcgKIgBgFQgFgQAAgJQAAgHAGgBQACgBADABQAEABAAAFIACALIACAMIADANIAEALIAEARIAEAQQAAADgCACQgBAEgDAAIgCAAIgEAAg");
	this.shape_4.setTransform(65.6,125.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAyQgLgLAAgQQAAgUALgKQALgMAPAAQAJAAAEADIAHAFIACgpQABgHAGAAQAHAAgBAHIgDAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEABgCgHQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAIAAAOQgBAKAHAGQAHAHAJAAQAFAAAEgCIAIgHIACgBIAAgOIAAgIIAAgJQgCgFgFgDQgFgDgGAAQgLABgHAGg");
	this.shape_5.setTransform(90.7,147.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAnQgQgFgHgKQgJgMAEgPQAFgTAMgKQAOgLAPAFQAMADAGAGQAIAHgDAKQgBAHgKAEIgRADIgeAFQACAHAGAFQAFAFAIACQADABAIAAQAIAAAEgDQADgEADABQACABACACQABADAAACQgCAIgOACIgLABIgLgBgAgHgXQgHAFgHANIAYgEQAOgDAHgDQgEgHgLgDIgGgBQgEAAgGADg");
	this.shape_6.setTransform(80.3,148.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqAcQgFgFAFgFIAkgjIAGgFIAEgFQAFgFAFAEQAFAFgJAJQAUAAAMAMQAEAEgBAFQgBAFgGAGIgEAEQgHAGgEgFQgFgEAFgFIADgEIAFgFQgJgGgJgBQgIgBgJADIgcAcQgDADgCAAQgDAAgCgDg");
	this.shape_7.setTransform(71.5,143.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgrAeQgDgBgCgDQgBgCABgDQAAgDADgBIALgHIAMgHIAPgHIAOgIQADgCADABQADABABADQACACgBADQgBADgDABIgOAIIgPAIIgLAGIgMAHIgEABIgBAAgAAngMQgDgBgCgDQgCgDABgEQABgDADgCQADgCADABQAEABABADQACADgBAEQgBADgDACIgEABIgCAAg");
	this.shape_8.setTransform(68,136.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAuAwQgCgCgBgDIgEgQIgDgRIgBgFIggAKIgeAKIgHADIgIADQgFABgEgBQgFgBgBgDQgBgEACgCQABgDADAAIADgBIAEgBIAKgDIAKgDQALgDAQgGIAcgJIgBgGQgFgQAAgKQAAgGAGgBQACgBADABQAEACAAAEIACALIACAMIADANIAEALIAEAQIAEARQAAADgCADQgBACgDABIgCAAIgEAAg");
	this.shape_9.setTransform(66.1,127.5);

	this.instance_3 = new lib.couchboard("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(78.9,240.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},191).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},29).to({state:[{t:this.instance_3}]},53).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},12).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(191).to({_off:false},0).to({x:96.2,y:107.1},11).to({rotation:45,x:76,y:132.4},8).to({_off:true},2).wait(159));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(296).to({_off:false},0).to({rotation:45,x:135.7,y:198.4},12).to({rotation:67,x:83.1,y:125},12).wait(51));

	// w2
	this.instance_4 = new lib.of("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(88.8,271.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.team("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(141.1,240.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(191).to({_off:false},0).to({x:123.2,y:195.6},11).to({rotation:60,x:147.2,y:169.7},12).to({_off:true},29).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(296).to({_off:false},0).to({x:49.1,y:47.4},12).to({x:67.1,y:68.6},12).wait(51));

	// w3
	this.instance_6 = new lib.work("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(119.6,271.6);
	this.instance_6._off = true;

	this.instance_7 = new lib.coached("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(195.4,240.6);
	this.instance_7._off = true;

	this.text = new cjs.Text("d", "15px 'Comic Sans MS'");
	this.text.lineHeight = 23;
	this.text.parent = this;
	this.text.setTransform(157.7,135.7,1,1,15);

	this.text_1 = new cjs.Text("e", "15px 'Comic Sans MS'");
	this.text_1.lineHeight = 23;
	this.text_1.parent = this;
	this.text_1.setTransform(148.3,133.8,1,1,15);

	this.text_2 = new cjs.Text("h", "15px 'Comic Sans MS'");
	this.text_2.lineHeight = 23;
	this.text_2.parent = this;
	this.text_2.setTransform(143.4,131.5,1,1,30);

	this.text_3 = new cjs.Text("c", "15px 'Comic Sans MS'");
	this.text_3.lineHeight = 23;
	this.text_3.parent = this;
	this.text_3.setTransform(140.8,127.8,1,1,45);

	this.text_4 = new cjs.Text("a", "15px 'Comic Sans MS'");
	this.text_4.lineHeight = 23;
	this.text_4.parent = this;
	this.text_4.setTransform(139.3,124.4,1,1,60);

	this.text_5 = new cjs.Text("o", "15px 'Comic Sans MS'");
	this.text_5.lineHeight = 23;
	this.text_5.parent = this;
	this.text_5.setTransform(138.2,120.8,1,1,75);

	this.text_6 = new cjs.Text("c", "15px 'Comic Sans MS'");
	this.text_6.lineHeight = 23;
	this.text_6.parent = this;
	this.text_6.setTransform(135.7,113.9,1,1,75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAyQgKgKAAgRQAAgTAKgLQAKgMAQAAQAJAAAEACIAHAGIACgqQABgGAGAAQAGAAABAHIgDAtIgBAVQAAAYACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgFgBgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHAAAPQABAKAGAGQAHAHAJAAQAFAAAFgCIAIgHIABgCIAAgMIAAgJIAAgIQgCgGgFgCQgFgDgGAAQgLgBgGAHg");
	this.shape_10.setTransform(158.7,147);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAfQgKgJgBgQQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgIAGIgPAHIgbANQAEAHAGACQAHADAGAAQAGAAAHgCQAIgBADgEQACgFACAAQAEAAABACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_11.setTransform(148.7,149);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AATBCQgFgCAAgGIABgRIADgRIACgGIACgFQADgNgGgBQgJgDgJAGQgEADgJAKQgIAbgDAEQgEAEgEgBQgDgBgBgCQgCgDABgDIABgDIAEgKIADgKIAOgzIAEgMIABgHIABgHQABgDADgBQACgCACABQAGACgBAGIgCANIgEAQIgEAPIgCAGQAHgGAIgCQAHgCAIACQALADADAIQABAGgDAMIgDAPIgCAOIgCAQIAAACQAAADgDABIgDABIgDAAg");
	this.shape_12.setTransform(139.5,145.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAkQgLgEgEgEQgLgLAAgNQgBgOALgLQALgKASgEQATgFAKAKQAFAFAEAJQAEAKgEAFQgCABgDAAQgDAAgCgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgEQgBgGgHgHQgFgFgOAEQgNAFgGAGQgHAHAAAHQABAIAHAHQADADAFACIAJACIACACQACACAAADQAAADgCACQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQgEAAgGgCg");
	this.shape_13.setTransform(132.1,144.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRAqIgEgDIAAgGIACgIIgLgHIgGgHQgIgOAEgMQAFgLAQgJQAPgJAQAFQARAEAIAPQADAFACAJQABAJgFADQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAIgJAEIgPAIIgLAIIgIALIgDADIgBABIgDABIgCAAgAgNgWQgKAGgDAHQgDAGAEAHQADAGAFADIAIADIAYgQIAGgCIAHgDIAAgFIgBgDQgGgKgMgCIgIgBQgHAAgHAEg");
	this.shape_14.setTransform(126.6,138.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAeQgPgGgEgPQgDgLAHgKQAHgNAQgFQAPgEAOAFQASAGAEASQAEANgLALQgJAIgPAEQgHACgFAAQgIAAgIgDgAgIgQQgKADgEAHQgEAGABAGQACAHAHAEQAIAEAJgCQAcgHgEgPQgDgKgMgDIgJgBIgJABg");
	this.shape_15.setTransform(124.7,129.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkAUQgEgJAAgHQAAgOAJgKQAJgLAQAAQAOAAAQAKQARALAAANQAAAHgDAJQgFALgGAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgEIADgDQADgEAAgKQAAgGgNgIQgMgGgIAAQgKAAgFAGQgGAGAAAJQAAAEADAFIAEAJIABADQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCACgDAAQgFAAgFgMg");
	this.shape_16.setTransform(125.7,120.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},191).to({state:[{t:this.instance_6}]},11).to({state:[{t:this.instance_6}]},12).to({state:[]},29).to({state:[{t:this.instance_7}]},53).to({state:[{t:this.instance_7}]},12).to({state:[{t:this.instance_7}]},8).to({state:[{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(191).to({_off:false},0).to({x:206,y:161.9},11).to({x:194.4,y:173.9},12).to({_off:true},29).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(296).to({_off:false},0).to({x:172.8,y:109.3},12).to({rotation:45,x:142.3,y:129.3},8).to({_off:true,rotation:15,x:157.7,y:135.7,text:"d",font:"15px 'Comic Sans MS'",color:"#000000",textAlign:0,lineHeight:22.9,lineWidth:9},2).wait(53));

	// w4
	this.instance_8 = new lib.Twiggs();
	this.instance_8.parent = this;
	this.instance_8.setTransform(171.8,271.2,0.991,0.991);
	this.instance_8._off = true;

	this.instance_9 = new lib.by("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(236.2,240.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(191).to({_off:false},0).to({x:59.4,y:46.4},11).to({x:68.2,y:66.9},12).to({_off:true},29).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(296).to({_off:false},0).to({x:189.2,y:195.5},12).to({rotation:60,x:206.7,y:169.4},12).wait(51));

	// W5
	this.instance_10 = new lib.napped("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(228.7,271.5);
	this.instance_10._off = true;

	this.instance_11 = new lib.Mick("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(265.9,240.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(191).to({_off:false},0).to({x:209.5,y:46.8},11).to({x:245.5,y:68.6},12).to({_off:true},29).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(296).to({_off:false},0).to({x:287.9,y:156},12).to({x:259.4,y:174},12).wait(51));

	// W6
	this.instance_12 = new lib.on("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(267.6,271.8);
	this.instance_12._off = true;

	this.instance_13 = new lib.learned("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(84.2,263.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(191).to({_off:false},0).to({x:204.4,y:100.6},11).to({rotation:60,x:246.8,y:96.6},12).to({_off:true},29).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(296).to({_off:false},0).to({x:189.8,y:33.6},12).to({x:198.3,y:68},12).wait(51));

	// W7
	this.instance_14 = new lib.the("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(294,271.6);
	this.instance_14._off = true;

	this.instance_15 = new lib.various("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(139.7,263.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(191).to({_off:false},0).to({x:345,y:144.4},11).to({rotation:60,x:328.2,y:140.4},12).to({_off:true},29).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(296).to({_off:false},0).to({x:377.7,y:141.2},12).to({rotation:52.5,x:334.5,y:104.7},12).wait(51));

	// W8
	this.instance_16 = new lib.couch("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(332.6,271.8,1.076,1.076);
	this.instance_16._off = true;

	this.instance_17 = new lib.pyramids("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(200.4,263.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(191).to({_off:false},0).to({x:369.4,y:99.6},11).to({x:291,y:109.2},12).to({_off:true},29).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(296).to({_off:false},0).to({x:336.1,y:49.4},12).to({x:337.6,y:68.6},12).wait(51));

	// W9
	this.instance_18 = new lib.TwiggsPulling();
	this.instance_18.parent = this;
	this.instance_18.setTransform(365.4,236.1,0.444,0.507,0,0,0,223.7,121.6);

	this.instance_19 = new lib.anim_set4();
	this.instance_19.parent = this;
	this.instance_19.setTransform(351,232.6,0.418,0.418,0,0,0,422.8,1.1);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(236).to({alpha:0},7).to({_off:true},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(244).to({_off:false},0).to({alpha:1},7).wait(120));

	// Layer 20
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2.5,1,1).p("AgagoIA1BR");
	this.shape_17.setTransform(225.8,84.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2.5,1,1).p("Agng9IBQB7");
	this.shape_18.setTransform(227.2,86.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2.5,1,1).p("Ag1hRIBrCj");
	this.shape_19.setTransform(228.5,88.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2.5,1,1).p("AhDhmICHDN");
	this.shape_20.setTransform(229.9,90.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2.5,1,1).p("AhQh6IChD1");
	this.shape_21.setTransform(231.2,92.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2.5,1,1).p("AheiPIC8Ef");
	this.shape_22.setTransform(232.6,94.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2.5,1,1).p("AhrijIDXFH");
	this.shape_23.setTransform(233.9,96.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2.5,1,1).p("Ah5i4IDzFx");
	this.shape_24.setTransform(235.3,98.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2.5,1,1).p("AiGjMIENGZ");
	this.shape_25.setTransform(236.6,100.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2.5,1,1).p("AF5CsIAuBCAmmjtIEOGZ");
	this.shape_26.setTransform(265.4,104.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2.5,1,1).p("AFuCbIBEBlAmxj/IEOGa");
	this.shape_27.setTransform(266.5,106);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2.5,1,1).p("AFjCKIBbCHAm8kQIEOGa");
	this.shape_28.setTransform(267.7,107.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2.5,1,1).p("AFYB4IBwCqAnIkhIEOGZ");
	this.shape_29.setTransform(268.8,109.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2.5,1,1).p("AFMBnICIDMAnTkyIEOGZ");
	this.shape_30.setTransform(269.9,111.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2.5,1,1).p("AFBBWICeDvAnelEIEOGa");
	this.shape_31.setTransform(271,112.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2.5,1,1).p("AE2BFIC0ERAnplVIEOGa");
	this.shape_32.setTransform(272.1,114.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2.5,1,1).p("AErA0IDKEzAn1lmIEOGa");
	this.shape_33.setTransform(273.3,116.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2.5,1,1).p("AoAl3IEOGaAEgAjIDhFV");
	this.shape_34.setTransform(274.4,118);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2.5,1,1).p("AoLmIIEOGZAEUARID4F4");
	this.shape_35.setTransform(275.5,119.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2.5,1,1).p("AoWmaIEOGaAEJAAIEOGb");
	this.shape_36.setTransform(276.6,121.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2.5,1,1).p("AAAAXIAAgt");
	this.shape_37.setTransform(262.2,77.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2.5,1,1).p("AAAgeIAAA9");
	this.shape_38.setTransform(262.2,76.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(2.5,1,1).p("AAAgmIAABN");
	this.shape_39.setTransform(262.2,75.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2.5,1,1).p("AAAgvIAABf");
	this.shape_40.setTransform(262.2,74.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2.5,1,1).p("AAAg3IAABv");
	this.shape_41.setTransform(262.2,73.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2.5,1,1).p("AAAhAIAACB");
	this.shape_42.setTransform(262.2,73.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2.5,1,1).p("AAAhIIAACR");
	this.shape_43.setTransform(262.2,72.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2.5,1,1).p("AAAhQIAACh");
	this.shape_44.setTransform(262.2,71.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2.5,1,1).p("AAAhZIAACz");
	this.shape_45.setTransform(262.2,70.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2.5,1,1).p("AAAhhIAADD");
	this.shape_46.setTransform(262.2,69.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(2.5,1,1).p("AAAhpIAADU");
	this.shape_47.setTransform(262.2,68.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2.5,1,1).p("AAABzIAAjl");
	this.shape_48.setTransform(262.2,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},163).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},8).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},54).to({state:[{t:this.shape_37}]},38).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).wait(79));

	// Layer 19
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2.5,1,1).p("AAyAAIhjAA");
	this.shape_49.setTransform(255.9,121);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(2.5,1,1).p("AhsAAIDZAA");
	this.shape_50.setTransform(261.8,121);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(2.5,1,1).p("AinAAIFPAA");
	this.shape_51.setTransform(267.7,121);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2.5,1,1).p("AjiAAIHFAA");
	this.shape_52.setTransform(273.6,121);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(2.5,1,1).p("AkdAAII7AA");
	this.shape_53.setTransform(279.5,121);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(2.5,1,1).p("AlYAAIKxAA");
	this.shape_54.setTransform(285.4,121);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2.5,1,1).p("AmTAAIMnAA");
	this.shape_55.setTransform(291.3,121);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2.5,1,1).p("AnOAAIOdAA");
	this.shape_56.setTransform(297.2,121);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(2.5,1,1).p("AIKAAIwTAA");
	this.shape_57.setTransform(303.1,121);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2.5,1,1).p("AWCgYIAkAxA2lgYIARAnAxCgYIASAn");
	this.shape_58.setTransform(161.7,83.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(2.5,1,1).p("AVxhAIBGBfA22hAIAlBWAxThAIA5CB");
	this.shape_59.setTransform(163.4,87.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2.5,1,1).p("AVghsIBoCNA3HhsIA6CEAxkhsIBgDZ");
	this.shape_60.setTransform(165.1,92);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2.5,1,1).p("AVPiZICKC6A3YiZIBOCyAx1iZICHEz");
	this.shape_61.setTransform(166.7,96.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(2.5,1,1).p("AU+jFICsDnA3pjFIBjDgAyGjFICuGL");
	this.shape_62.setTransform(168.4,100.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(2.5,1,1).p("AUujyIDMEWA35jyIB2EPAyWjyIDUHl");
	this.shape_63.setTransform(170.1,105.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(2.5,1,1).p("A4KkeICLE9AynkeID7I9AUdkeIDuFD");
	this.shape_64.setTransform(171.7,109.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(2.5,1,1).p("A4blLICfFsAy4lLIEiKXAUMlLIEQFx");
	this.shape_65.setTransform(173.4,114.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(2.5,1,1).p("A4rl3ICzGaAzIl3IFILvAT8l3IEwGe");
	this.shape_66.setTransform(175.1,118.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(2.5,1,1).p("A48mkIDHHIAzZmkIFvNJATrmkIFSHM");
	this.shape_67.setTransform(176.8,123.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(2.5,1,1).p("A5NnRIDcH3AzqnRIGWOjATanRIF0H7");
	this.shape_68.setTransform(178.4,127.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(2.5,1,1).p("A5dn9IDvIlAz7n9IG9P7ATJn9IGVIo");
	this.shape_69.setTransform(180.1,132.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_49}]},171).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[]},64).to({state:[{t:this.shape_58}]},38).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).wait(79));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_149 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgOAUgaAAQgdAAgNgYQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_150 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgOAUgbABQgdAAgNgZQgIgOAAgMQAAgPAKgPQAEgGAGgFQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_151 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAFAGAKQAHAOAAANQAAARgJAPQgOATgbAAQgdAAgNgYQgIgOAAgNQAAgPAKgPQAFgHAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgFQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_152 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgCgCIACAOQAAAQgKAPQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAFAGAKQAHAOAAANQAAARgJAPQgGAIgJAFQARAMACAeQAAAPgKAOQgOAVgaAAQgdAAgNgYQgIgOAAgMQAAgQAKgOQAGgKAJgFQgHgFgFgKQgIgOAAgNQAAgPAKgPQAFgHAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgFQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_153 = new cjs.Graphics().p("A4zFzQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgLgBgLQgXAPghAAQglABgZgUQhEAJhrAAQhQAAgfguQgPgZAAgcQAAhBA7gZQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjPCOBPQAtAaAbA0IAQAgQgUhlAAgYQAAgoAWgfQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA6QAACOh0AAQh0AAgbiDQgKgvAFg2QAFgwANgYQiQgZhrAJQg8AGhNAYQg7ASgcgFQgqgJg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAPQgGAHgHAFQAJAGAGAKQAHANAAAOQAAARgJAOQgGAJgJAFQARAMACAdQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgOAWgbAAQgyAAAAg0g");
	var mask_graphics_154 = new cjs.Graphics().p("A4sG8QgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgLgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABXieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA5QAACPh0AAQh0AAgbiDQgKgwAFg1QAFgwANgYQiQgZhrAKQg8AGhNAXQg7ASgcgGQgqgIg6g6IgCgCIACAPQAAAPgKAOQgEAGgFAEQAWALACAiQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOQgOAUgbAAQgeAAgNgYg");
	var mask_graphics_155 = new cjs.Graphics().p("A4dHnIgHgbQAAgPAKgPIAGgIQgPgFgJgQQgHgNAAgNQAAgQAKgOQAGgKAJgFQgZgKAAgmQAAgRAJgOQAFgKAIgFQgQgFgIgQQgIgOAAgMQAAgQAKgOQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgIAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgOQAEgGAGgEQgLgGgGgMQgHgMgBgKQgXAPghAAQglAAgZgTQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieAoQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgNgRAAQg/AMm8AHImjgCIj2ACQAWA5AAA5QAACPh0AAQh0AAgbiDQgKgwAFg1QAFgvANgYQiQgahrAKQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAhQAAAQgJAOQgGAIgHAFQAJAGAGAKQAHANAAAOQAAAQgJAPQgGAIgJAFQARAMACAeQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYAKACAkQAAAQgJAOIgHAIQAdAIACAnQAAARgJAOQgOAUgbAAQgeAAgNgYg");
	var mask_graphics_156 = new cjs.Graphics().p("A30INQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgNAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA0oLAAQmqAAiHgqQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA3AAA6QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAOQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAPgKAPQgOAUgbAAQgdAAgNgYg");
	var mask_graphics_157 = new cjs.Graphics().p("A2yIwQgJgOAAgMQAAgNAHgMQgKAFgMAAQgdgBgNgXQgIgOAAgNQAAgMAHgNQgcgBgMgXIgHgaQAAgQAKgPIAGgHQgPgGgJgQQgHgNAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgPAAgMQAAgPAKgPQAFgHAHgFQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgGAGgEQgLgGgGgMQgHgLgBgLQgXAPghAAQglABgZgUQhEAJhrAAQhQAAgfgvQgPgZAAgcQAAhBA7gZQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjPCOBPQAtAaAbA0IAQAgQgUhlAAgYQAAgoAWgfQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg5QAZgTgPgbQgUgbAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AeQBpAOASAWQAGAIgBAOIgEAYQAABZieApQjOA0oLAAQmqAAiHgqQgjgLgXgTQgQgOgRAAQg/AMm8AIImjgCIj2ACQAWA5AAA4QAACPh0AAQh0AAgbiDQgKgvAFg1QAFgwANgYQiQgZhrAJQg8AGhNAYQg7ASgcgGQgqgIg6g7IgCgCIACAPQAAAPgKAPQgEAGgFAEQAWALACAiQAAAQgJAPQgGAHgHAFQAJAGAGAJQAHANAAAOQAAARgJAOQgGAJgJAFQARAMACAdQAAAPgKAPQgFAHgHAFQAgAJAAArQAAAQgJAOQgHALgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsABADAwQAAANgGAMQAJgFAMAAQAuABAEAyQAAAQgKAOQgOAUgaAAQgdAAgNgYg");
	var mask_graphics_158 = new cjs.Graphics().p("A1dJCQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQAwAAADAzQAAAPgKAPQgOAUgbAAQgdAAgNgYg");
	var mask_graphics_159 = new cjs.Graphics().p("Az+JHQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAvAAAEAzQAAAPgLAPQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_160 = new cjs.Graphics().p("Az+JHQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAvAAAEAzQAAAQgKAOQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_161 = new cjs.Graphics().p("Az+JHQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAwAAACAyQAAARgMAPQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_162 = new cjs.Graphics().p("Az+JHQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAwAAACAyQAAARgMAPQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_163 = new cjs.Graphics().p("Az+JHQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAxAAABAyQAAARgMAPQgOASgYAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_164 = new cjs.Graphics().p("Az+JHQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBoAAAAA6QAAAyhGAAQgjAAgVgMQgDAKgHAIQgOASgYAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_165 = new cjs.Graphics().p("Az+JHQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBiAAAAA2QAAAyhKAAQg0AAgQgZIgCgIQgRARgpAAQgjAAgVgMQgDAKgHAIQgOASgYAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_166 = new cjs.Graphics().p("Az+JHQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQBAAAATAZQAKAMgDANQAAAyhaAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgRARgpAAQgjAAgVgMQgDAKgHAIQgOASgYAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_167 = new cjs.Graphics().p("AtMJMIgBgCQgNAMgUAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgOAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA5QAACOh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAAMQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQAoAAAXAKQAZgKA0AAQBKAAAVAZQALAMgEANQAAAWgMAKQgWAShEAAQgyAAgagLQgWALgqAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgMAMgaADQgCALgIAJQgOASgYAAQgcAAgOgWg");
	var mask_graphics_168 = new cjs.Graphics().p("As4JsQgIgOAAgNQAAgLAFgKQgKgGgHgKIgBgCQgNAMgUAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgIQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA6QAACNh0AAQh0AAgbiCQgKgvAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJANQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQAoAAAXAKQAZgKA0AAQBKAAAVAZQALAMgEANQAAAWgMAKQgWAShEAAQgyAAgagLQgWALgqAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgMAMgaADIgCAHQAXALABAiQAAARgMAPQgOASgYAAQgcAAgOgWg");
	var mask_graphics_169 = new cjs.Graphics().p("AsYKSQgIgOAAgNQAAgPAIgNQgVgDgLgSQgIgOAAgNQAAgLAFgKQgKgGgHgKIgBgCQgNAMgUAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgMQAAgPAKgOQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA6QAACNh0AAQh0AAgbiBQgKgwAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAcQAAAQgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQAoAAAXAKQAZgKA0AAQBKAAAVAZQALAMgEANQAAAWgMAKQgWAShEAAQgyAAgagLQgWALgqAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgMAMgaADIgCAHQAXALABAiQAAAOgIAMQAmAFACAtQAAARgMAPQgOASgYAAQgdAAgNgWg");
	var mask_graphics_170 = new cjs.Graphics().p("Ar8KuQgIgOAAgNIABgLQgNgFgIgNQgIgOAAgNQAAgPAIgNQgVgDgLgSQgIgOAAgNQAAgLAFgKQgKgGgHgKIgBgCQgNAMgUAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgQQgIgOAAgLQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA6QAACNh0AAQh0AAgbiBQgKgwAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAdQAAAPgKAOQgFAIgHAEQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQAoAAAXAKQAZgKA0AAQBKAAAVAZQALAMgEANQAAAWgMAKQgWAShEAAQgyAAgagLQgWALgqAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgMAMgaADIgCAHQAXALABAiQAAAOgIAMQAmAFACAtIgBAJQAcAJABAmQAAARgMAPQgOASgYAAQgcAAgOgWg");
	var mask_graphics_171 = new cjs.Graphics().p("ArcLQQgIgNAAgOQAAgLAEgKQgSgEgKgQQgIgOAAgNIABgLQgNgFgIgNQgIgOAAgNQAAgPAIgNQgVgDgLgSQgIgOAAgNQAAgLAFgKQgKgGgHgKIgBgCQgNAMgUAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgGgIgPQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA6QAACNh0AAQh0AAgbiBQgKgwAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHADQAgAJAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQAoAAAXAKQAZgKA0AAQBKAAAVAZQALAMgEANQAAAWgMAKQgWAShEAAQgyAAgagLQgWALgqAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgMAMgaADIgCAHQAXALABAiQAAAOgIAMQAmAFACAtIgBAJQAcAJABAmQAAAKgEAJQAiAHACAqQAAARgMAPQgOASgYAAQgdAAgNgWg");
	var mask_graphics_172 = new cjs.Graphics().p("AqeLeQgJAEgLAAQgdAAgNgWQgIgNAAgOQAAgLAEgKQgSgEgKgQQgIgOAAgNIABgLQgNgFgIgNQgIgOAAgNQAAgPAIgNQgVgDgLgSQgIgOAAgNQAAgLAFgKQgKgGgHgKIgBgCQgNAMgUAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgFgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA6QAACNh0AAQh0AAgbiBQgKgwAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAIAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQAoAAAXAKQAZgKA0AAQBKAAAVAZQALAMgEANQAAAWgMAKQgWAShEAAQgyAAgagLQgWALgqAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgMAMgaADIgCAHQAXALABAiQAAAOgIAMQAmAFACAtIgBAJQAcAJABAmQAAAKgEAJQAOADAIAIQANgEATAAQAsAAAPAZQAIAMgBANQAAAyhCAAQggAAgQgMg");
	var mask_graphics_173 = new cjs.Graphics().p("ApFLjQgQAHgZAAQggAAgQgMQgJAEgLAAQgdAAgNgWQgIgNAAgOQAAgLAEgKQgSgEgKgQQgIgOAAgNIABgLQgNgFgIgNQgIgOAAgNQAAgPAIgNQgVgDgLgSQgIgOAAgNQAAgLAFgKQgKgGgHgKIgBgCQgNAMgUAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgFgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA6QAACNh0AAQh0AAgbiBQgKgwAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAIAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQAoAAAXAKQAZgKA0AAQBKAAAVAZQALAMgEANQAAAWgMAKQgWAShEAAQgyAAgagLQgWALgqAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgMAMgaADIgCAHQAXALABAiQAAAOgIAMQAmAFACAtIgBAJQAcAJABAmQAAAKgEAJQAOADAIAIQANgEATAAQAYAAAQAHQATgHAfAAQA3AAASAZQAJAMgCANQAAAyhQAAQgeAAgTgHg");
	var mask_graphics_174 = new cjs.Graphics().p("AneLhQgTAJgjAAQgeAAgTgHQgQAHgZAAQggAAgQgMQgJAEgLAAQgdAAgNgWQgIgNAAgOQAAgLAEgKQgSgEgKgQQgIgOAAgNIABgLQgNgFgIgNQgIgOAAgNQAAgPAIgNQgVgDgLgSQgIgOAAgNQAAgLAFgKQgKgGgHgKIgBgCQgNAMgUAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgFgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA6QAACNh0AAQh0AAgbiBQgKgwAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAIAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQAoAAAXAKQAZgKA0AAQBKAAAVAZQALAMgEANQAAAWgMAKQgWAShEAAQgyAAgagLQgWALgqAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgMAMgaADIgCAHQAXALABAiQAAAOgIAMQAmAFACAtIgBAJQAcAJABAmQAAAKgEAJQAOADAIAIQANgEATAAQAYAAAQAHQATgHAfAAQAgAAAUAIQAXgIArAAQBDAAAUAZQAKAMgDANQAAAyheAAQgpAAgXgJg");
	var mask_graphics_175 = new cjs.Graphics().p("AlTLbQgXAPg0AAQgpAAgXgJQgTAJgjAAQgeAAgTgHQgQAHgZAAQggAAgQgMQgJAEgLAAQgdAAgNgWQgIgNAAgOQAAgLAEgKQgSgEgKgQQgIgOAAgNIABgLQgNgFgIgNQgIgOAAgNQAAgPAIgNQgVgDgLgSQgIgOAAgNQAAgLAFgKQgKgGgHgKIgBgCQgNAMgUAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgFgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA6QAACNh0AAQh0AAgbiBQgKgwAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAIAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQAoAAAXAKQAZgKA0AAQBKAAAVAZQALAMgEANQAAAWgMAKQgWAShEAAQgyAAgagLQgWALgqAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgMAMgaADIgCAHQAXALABAiQAAAOgIAMQAmAFACAtIgBAJQAcAJABAmQAAAKgEAJQAOADAIAIQANgEATAAQAYAAAQAHQATgHAfAAQAgAAAUAIQAXgIArAAQAyAAAYAOQAYgOA8AAQBIAAAVAZQALAMgEANQAAAWgMAKQgWAShCAAQg6AAgZgPg");
	var mask_graphics_176 = new cjs.Graphics().p("AisLbQgYAPg8AAQg6AAgZgPQgXAPg0AAQgpAAgXgJQgTAJgjAAQgeAAgTgHQgQAHgZAAQggAAgQgMQgJAEgLAAQgdAAgNgWQgIgNAAgOQAAgLAEgKQgSgEgKgQQgIgOAAgNIABgLQgNgFgIgNQgIgOAAgNQAAgPAIgNQgVgDgLgSQgIgOAAgNQAAgLAFgKQgKgGgHgKIgBgCQgNAMgUAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgFgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA6QAACNh0AAQh0AAgbiBQgKgwAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAIAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQAoAAAXAKQAZgKA0AAQBKAAAVAZQALAMgEANQAAAWgMAKQgWAShEAAQgyAAgagLQgWALgqAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgMAMgaADIgCAHQAXALABAiQAAAOgIAMQAmAFACAtIgBAJQAcAJABAmQAAAKgEAJQAOADAIAIQANgEATAAQAYAAAQAHQATgHAfAAQAgAAAUAIQAXgIArAAQAyAAAYAOQAYgOA8AAQA3AAAZAOQAXgOA7AAQBGAAAVAZQAKAMgEANQAAAWgLAKQgVAShBAAQg2AAgYgPg");
	var mask_graphics_177 = new cjs.Graphics().p("AgQLbQgYANg2AAQg2AAgYgPQgYAPg8AAQg6AAgZgPQgXAPg0AAQgpAAgXgJQgTAJgjAAQgeAAgTgHQgQAHgZAAQggAAgQgMQgJAEgLAAQgdAAgNgWQgIgNAAgOQAAgLAEgKQgSgEgKgQQgIgOAAgNIABgLQgNgFgIgNQgIgOAAgNQAAgPAIgNQgVgDgLgSQgIgOAAgNQAAgLAFgKQgKgGgHgKIgBgCQgNAMgUAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgFgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA6QAACNh0AAQh0AAgbiBQgKgwAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAIAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQAoAAAXAKQAZgKA0AAQBKAAAVAZQALAMgEANQAAAWgMAKQgWAShEAAQgyAAgagLQgWALgqAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgMAMgaADIgCAHQAXALABAiQAAAOgIAMQAmAFACAtIgBAJQAcAJABAmQAAAKgEAJQAOADAIAIQANgEATAAQAYAAAQAHQATgHAfAAQAgAAAUAIQAXgIArAAQAyAAAYAOQAYgOA8AAQA3AAAZAOQAXgOA7AAQA6AAAYARQAdgNBOAAQBIAAAagDQAFAAAFANIANAPQAHAPAAAKQAAAYgMAIQgaAShaAAQhSAAgdgRg");
	var mask_graphics_178 = new cjs.Graphics().p("AgQLbQgYANg2AAQg2AAgYgPQgYAPg8AAQg6AAgZgPQgXAPg0AAQgpAAgXgJQgTAJgjAAQgeAAgTgHQgQAHgZAAQggAAgQgMQgJAEgLAAQgdAAgNgWQgIgNAAgOQAAgLAEgKQgSgEgKgQQgIgOAAgNIABgLQgNgFgIgNQgIgOAAgNQAAgPAIgNQgVgDgLgSQgIgOAAgNQAAgLAFgKQgKgGgHgKIgBgCQgNAMgUAAQgcAAgOgWIgCgFIgGAJQgOASgYAAQgdAAgNgWIAAgBIgEAFQgOASgYAAQgdAAgNgWIgCgEIgEAHQgOAUgbAAQgdAAgOgYIgEgJQgDAJgGAJQgOAUgaAAQgeAAgNgYQgFgIgBgJIgGALQgOAUgbAAQgdAAgNgYQgIgNAAgNQgNAOgWAAQgdAAgNgYQgJgOAAgMQAAgNAHgLQgKAEgMAAQgdAAgNgYQgIgOAAgMQAAgNAHgMQgcgCgMgXIgHgaQAAgQAKgOIAGgIQgPgFgJgQQgHgOAAgNQAAgPAKgPQAGgJAJgFQgZgLAAglQAAgRAJgPQAFgJAIgFQgQgFgIgQQgIgOAAgMQAAgPAKgPQAGgJAJgFQgHgGgFgJQgIgOAAgNQAAgPAKgPQAFgIAHgEQgJgGgFgLQgIgOAAgMQAAgPAKgPQAEgHAGgEQgLgGgGgMQgHgLgBgLQgXAQghAAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjOCOBOQAtAaAbA0IAQAgQgUhkAAgZQAAgoAWgfQAcgmAzAAQCNAAAAE2QERADDJAHQHaAABPg5QAZgTgPgbQgUgbAAgHQAAgjAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AfQBpANASAWQAGAIgBAOIgEAZQAABYieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgNgRAAQg/ALm8AJImjgDIj2ADQAWA4AAA6QAACNh0AAQh0AAgbiBQgKgwAFg2QAFgwANgYQiQgZhrAKQg8AFhNAYQg7ATgcgGQgqgJg6g7IgCgBIACAOQAAAPgKAPQgEAGgFAFQAWALACAiQAAAPgJAPQgGAIgHAEQAJAGAGAKQAHAOAAANQAAARgJAOQgGAJgJAFQARAMACAdQAAAQgKAOQgFAIgHAEQAgAIAAArQAAAQgJAPQgHAKgKAFQAYALACAjQAAARgJAOIgHAHQAdAJACAnQAAANgGANQAsACADAwQAAAMgGAMQAJgEAMAAQAuAAAEAxQANgOAWAAQArAAAHApIAGgLQAOgUAaAAQAlAAAKAgQADgIAGgIQAPgVAZAAQAiAAALAaIADgFQANgVAcAAQAfAAAMAVIAAAAQANgVAcAAQAiAAALAZIADgEQANgVAbAAQAMAAAJACQACgHAFgHQAPgUAbAAQBRAAASAjQAMgPAbAAQBEAAAVAaIAAAAQAUgSA7AAQAoAAAXAKQAZgKA0AAQBKAAAVAZQALAMgEANQAAAWgMAKQgWAShEAAQgyAAgagLQgWALgqAAQg9AAgUgXQgRATguAAQg0AAgQgZIgCgIQgMAMgaADIgCAHQAXALABAiQAAAOgIAMQAmAFACAtIgBAJQAcAJABAmQAAAKgEAJQAOADAIAIQANgEATAAQAYAAAQAHQATgHAfAAQAgAAAUAIQAXgIArAAQAyAAAYAOQAYgOA8AAQA3AAAZAOQAXgOA7AAQA6AAAYARQAdgNBOAAQBIAAAagDQAFAAAFANIAFAFIACgBQAfgSB4AAQB8AAAfAZQAQAMgJANIABAQQgBAJgMAHQgfASh3AAQhtAAglgSIgEAEQgaAShaAAQhSAAgdgRg");
	var mask_graphics_253 = new cjs.Graphics().p("AtPD+QgHgNAAgOIADiVIgrABIhBAAQgNAOgWgBQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgPQAFgLANgFIHagEQGjAAArACQACgHAJgEQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAJIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXg");
	var mask_graphics_254 = new cjs.Graphics().p("AtPD+QgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgOAVgagBQgeAAgNgXQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgPQAFgLANgFIHagEQGjAAArACQACgHAJgEQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAJIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXg");
	var mask_graphics_255 = new cjs.Graphics().p("AtPD+QgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgOATgaABQgeAAgNgZQgHgNAAgNQAAgPAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgPQAFgLANgFIHagEQGjAAArACQACgHAJgEQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAJIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXg");
	var mask_graphics_256 = new cjs.Graphics().p("AvWEVQgHgOAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgQAKgOQAFgIAHgEQgJgGgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgMQAAgOAKgQQAFgJANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAApQAAAqgyAIMgqfAAAIAAAoQgICCgtAAQgfAAgOgXQgHgOAAgNIADiVIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAFQATAMADAfQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPQgOAUgaAAQgeAAgNgXg");
	var mask_graphics_257 = new cjs.Graphics().p("AvWE9QgHgOAAgNQAAgPAKgPQAEgGAFgEQgHgFgFgIQgHgOAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgQAKgOQAFgIAHgEQgJgGgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgLQAAgOAKgQQAFgKANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAAqQAAApgyAIMgqfAAAIAAAoQgICCgtAAQgfAAgOgXQgHgOAAgNIADiVIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAFQATAMADAfQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPQgOAUgaAAQgeAAgNgXg");
	var mask_graphics_258 = new cjs.Graphics().p("AvHFnQgHgOAAgMQAAgQAKgPIAHgHQgQgGgJgPQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgJQgHgNAAgNQAAgPAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgMQAAgHACgIIgHAAQgRABgMgJIgBAEIgTAOQgHACnTADInSgDQgIgCgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAIMgqfAAAIAAAnQgICDgtAAQgfgBgOgXQgHgNAAgOIADiUIgrABIgDAAQAGALACARQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAOIgHAIQAdAJADAnQAAAPgKAPQgOATgaAAQgeABgNgYg");
	var mask_graphics_259 = new cjs.Graphics().p("AvHGRQgHgNAAgNQAAgPAKgPQAFgIAHgEQgJgGgGgKQgHgPAAgMQAAgQAKgOIAHgIQgQgFgJgPQgHgOAAgNQAAgPAKgPQAEgGAFgEQgHgFgFgIQgHgOAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgQAKgOQAFgIAHgEQgJgFgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAAqQAAAqgyAIMgqfAAAIAAAnQgICCgtAAQgfAAgOgXQgHgOAAgNIADiUIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAEQATAMADAfQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPIgHAIQAdAIADAnQAAAQgKAOQgFAHgHAFQATAMADAfQAAAPgKAPQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_260 = new cjs.Graphics().p("AvMG5QgHgNAAgNQAAgPAKgPQAFgHAHgFQgGgFgEgHQgHgNAAgNQAAgPAKgPQAFgIAHgEQgJgGgGgKQgHgPAAgMQAAgQAKgOIAHgIQgQgFgJgPQgHgOAAgNQAAgPAKgPQAEgGAFgEQgHgFgFgIQgHgOAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgPAKgOQAFgIAHgEQgJgGgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAAqQAAAqgyAIMgqfAAAIAAAoQgICBgtAAQgfAAgOgXQgHgOAAgNIADiUIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAFQATAMADAeQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPIgHAIQAdAIADAnQAAAQgKAOQgFAHgHAFQATAMADAfQAAAPgKAPQgFAHgGAEQAOANACAaQAAAPgKAPQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_261 = new cjs.Graphics().p("AufHfQgHgNAAgOQAAgMAHgNIgCAAQgeAAgNgXQgHgOAAgMQAAgQAKgOQAFgIAHgEQgGgFgEgHQgHgOAAgMQAAgQAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgMQAAgQAKgPIAHgHQgQgGgJgPQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgNAAgNQAAgPAKgPQAFgHAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICCgtAAQgfgBgOgXQgHgNAAgOIADiUIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAEgFAEQAQAMADAcQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAOIgHAIQAdAJADAnQAAAPgKAPQgFAHgHAEQATAMADAgQAAAPgKAOQgFAHgGAFQAOAMACAbQAAAMgHANIACAAQAuAAAEAxQAAAQgKAPQgOATgaABQgegBgNgXg");
	var mask_graphics_262 = new cjs.Graphics().p("At3ICQgHgOAAgMQAAgLAEgKQgZgCgMgVQgHgNAAgOQAAgMAHgNIgCAAQgeAAgNgXQgHgOAAgMQAAgQAKgOQAFgIAHgEQgGgFgEgHQgHgOAAgMQAAgQAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgMQAAgQAKgPIAHgHQgQgGgJgPQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgOAAgNQAAgOAKgOQAEgGAFgEQgHgGgFgJQgHgNAAgNQAAgPAKgPQAFgHAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICCgtAAQgfgBgOgWQgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAFgFAEQAQAMADAbQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAOIgHAIQAdAJADAnQAAAPgKAPQgFAHgHAEQATAMADAgQAAAPgKAOQgFAHgGAFQAOAMACAbQAAAMgHANIACAAQAuAAAEAxQAAALgFAKQAqADADAvQAAAPgKAOQgOAVgaAAQgeAAgNgYg");
	var mask_graphics_263 = new cjs.Graphics().p("As7IWQgFgJgBgJIgLACQgeAAgNgYQgHgOAAgMQAAgLAEgKQgZgCgMgVQgHgNAAgOQAAgMAHgNIgCAAQgeAAgNgXQgHgOAAgMQAAgQAKgOQAFgIAHgEQgGgFgEgHQgHgOAAgMQAAgQAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgMQAAgQAKgPIAHgHQgQgGgJgPQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgOAAgMQAAgPAKgOQAEgGAFgEQgHgGgFgJQgHgNAAgNQAAgPAKgPQAFgHAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXQgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAPgKAPQgEAFgFAEQAQAMADAcQAAAQgKAOIgHAIQAdAJADAnQAAAPgKAPQgFAHgHAEQATAMADAgQAAAPgKAOQgFAHgGAFQAOAMACAbQAAAMgHANIACAAQAuAAAEAxQAAALgFAKQAmACAGAmIALAAQAvAAADAxQAAARgKAOQgOATgaABQgeAAgNgYg");
	var mask_graphics_264 = new cjs.Graphics().p("Ar6IgIAAgBQgKAEgMABQgeAAgNgYQgFgJgBgJIgLACQgeAAgNgYQgHgOAAgMQAAgLAEgKQgZgCgMgVQgHgNAAgOQAAgMAHgNIgCAAQgeAAgNgXQgHgOAAgMQAAgQAKgOQAFgIAHgEQgGgFgEgHQgHgOAAgMQAAgQAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgMQAAgQAKgPIAHgHQgQgGgJgPQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgNAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgJQgHgNAAgNQAAgPAKgPQAFgHAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXQgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAOQgEAFgFAEQAQAMADAcQAAAQgKAOIgHAIQAdAJADAnQAAAPgKAPQgFAHgHAEQATAMADAgQAAAPgKAOQgFAHgGAFQAOAMACAbQAAAMgHANIACAAQAuAAAEAxQAAALgFAKQAmACAGAmIALAAQAhAAALAYQAJgFAMAAQAuAAAEAzQAAAPgKAPQgOATgaAAQgeAAgNgXg");
	var mask_graphics_265 = new cjs.Graphics().p("AqlIlIgDgGQgOATgZAAQgeAAgNgXIAAgBQgKAEgMABQgeAAgNgYQgFgJgBgJIgLACQgeAAgNgYQgHgOAAgMQAAgLAEgKQgZgCgMgVQgHgNAAgOQAAgMAHgNIgCAAQgeAAgNgXQgHgOAAgMQAAgQAKgOQAFgIAHgEQgGgFgEgHQgHgOAAgMQAAgQAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgMQAAgQAKgPIAHgHQgQgGgJgPQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgNAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgJQgHgNAAgNQAAgPAKgPQAFgHAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXQgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAOQgEAFgFAEQAQAMADAcQAAAQgKAOIgHAIQAdAJADAnQAAAPgKAPQgFAHgHAEQATAMADAgQAAAPgKAOQgFAHgGAFQAOAMACAbQAAAMgHANIACAAQAuAAAEAxQAAALgFAKQAmACAGAmIALAAQAhAAALAYQAJgFAMAAQAjAAAKAdQAPgSAZgBQAvAAADAzQAAAPgKAOQgOAVgagBQgeAAgNgXg");
	var mask_graphics_266 = new cjs.Graphics().p("ApLInIgDgHIgEAGQgOAUgaAAQgeAAgNgYIgDgFQgOATgZAAQgeAAgNgYIAAAAQgKAEgMAAQgeAAgNgXQgFgKgBgIIgLABQgeAAgNgYQgHgNAAgNQAAgKAEgKQgZgCgMgVQgHgOAAgNQAAgNAHgMIgCAAQgeAAgNgYQgHgNAAgNQAAgPAKgPQAFgHAHgFQgGgFgEgHQgHgNAAgNQAAgPAKgPQAFgIAHgEQgJgGgGgKQgHgPAAgMQAAgQAKgOIAHgIQgQgFgJgPQgHgOAAgNQAAgPAKgPQAEgGAFgEQgHgFgFgIQgHgNAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgQAKgOQAFgIAHgEQgJgGgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAAqQAAAqgyAIMgqfAAAIAAAoQgICCgtAAQgfAAgOgXQgHgOAAgNIADiVIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAFQATAMADAfQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAOQgEAFgFAEQAQAMADAdQAAAPgKAPIgHAIQAdAIADAnQAAAQgKAOQgFAHgHAFQATAMADAfQAAAPgKAPQgFAHgGAEQAOANACAaQAAANgHAMIACAAQAuAAAEAyQAAAKgFAKQAmADAGAmIALgBQAhAAALAYQAJgEAMAAQAjAAAKAdQAPgTAZAAQAlAAAKAeIADgFQAOgUAaAAQAvAAADAyQAAAPgKAPQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_267 = new cjs.Graphics().p("AnxInIgCgFIgFAJQgOAUgaAAQgeAAgNgYIgDgHIgEAGQgOAUgaAAQgeAAgNgYIgDgFQgOATgZAAQgeAAgNgYIAAAAQgKAEgMAAQgeAAgNgXQgFgKgBgIIgLABQgeAAgNgYQgHgNAAgNQAAgKAEgKQgZgCgMgVQgHgOAAgNQAAgNAHgMIgCAAQgeAAgNgYQgHgNAAgNQAAgPAKgPQAFgHAHgFQgGgFgEgHQgHgNAAgNQAAgPAKgPQAFgIAHgEQgJgGgGgKQgHgPAAgMQAAgQAKgOIAHgIQgQgFgJgPQgHgOAAgNQAAgPAKgPQAEgGAFgEQgHgFgFgIQgHgNAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgQAKgOQAFgIAHgEQgJgGgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAAqQAAAqgyAIMgqfAAAIAAAoQgICCgtAAQgfAAgOgXQgHgOAAgNIADiVIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAFQATAMADAfQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAOQgEAFgFAEQAQAMADAdQAAAPgKAPIgHAIQAdAIADAnQAAAQgKAOQgFAHgHAFQATAMADAfQAAAPgKAPQgFAHgGAEQAOANACAaQAAANgHAMIACAAQAuAAAEAyQAAAKgFAKQAmADAGAmIALgBQAhAAALAYQAJgEAMAAQAjAAAKAdQAPgTAZAAQAlAAAKAeIADgFQAOgUAaAAQAjAAALAbIAEgHQAOgUAaAAQAvAAADAyQAAAPgKAPQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_268 = new cjs.Graphics().p("AmeIqIAAABQgOAUgaAAQgeAAgNgYIgCgFIgFAJQgOAUgaAAQgeAAgNgYIgDgHIgEAGQgOAUgaAAQgeAAgNgYIgDgFQgOATgZAAQgeAAgNgYIAAAAQgKAEgMAAQgeAAgNgXQgFgKgBgIIgLABQgeAAgNgYQgHgNAAgNQAAgKAEgKQgZgCgMgVQgHgOAAgNQAAgNAHgMIgCAAQgeAAgNgYQgHgNAAgNQAAgPAKgPQAFgHAHgFQgGgFgEgHQgHgNAAgNQAAgPAKgPQAFgIAHgEQgJgGgGgKQgHgPAAgMQAAgQAKgOIAHgIQgQgFgJgPQgHgOAAgNQAAgPAKgPQAEgGAFgEQgHgFgFgIQgHgNAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgQAKgOQAFgIAHgEQgJgGgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAAqQAAAqgyAIMgqfAAAIAAAoQgICCgtAAQgfAAgOgXQgHgOAAgNIADiVIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAFQATAMADAfQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAOQgEAFgFAEQAQAMADAdQAAAPgKAPIgHAIQAdAIADAnQAAAQgKAOQgFAHgHAFQATAMADAfQAAAPgKAPQgFAHgGAEQAOANACAaQAAANgHAMIACAAQAuAAAEAyQAAAKgFAKQAmADAGAmIALgBQAhAAALAYQAJgEAMAAQAjAAAKAdQAPgTAZAAQAlAAAKAeIADgFQAOgUAaAAQAjAAALAbIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQBBAAAUAYQALAMgDAOQAAAyhdAAQg9AAgVgVg");
	var mask_graphics_269 = new cjs.Graphics().p("AmeIqIAAABQgOAUgaAAQgeAAgNgYIgCgFIgFAJQgOAUgaAAQgeAAgNgYIgDgHIgEAGQgOAUgaAAQgeAAgNgYIgDgFQgOATgZAAQgeAAgNgYIAAAAQgKAEgMAAQgeAAgNgXQgFgKgBgIIgLABQgeAAgNgYQgHgNAAgNQAAgKAEgKQgZgCgMgVQgHgOAAgNQAAgNAHgMIgCAAQgeAAgNgYQgHgNAAgNQAAgPAKgPQAFgHAHgFQgGgFgEgHQgHgNAAgNQAAgPAKgPQAFgIAHgEQgJgGgGgKQgHgPAAgMQAAgQAKgOIAHgIQgQgFgJgPQgHgOAAgNQAAgPAKgPQAEgGAFgEQgHgFgFgIQgHgNAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgQAKgOQAFgIAHgEQgJgGgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAAqQAAAqgyAIMgqfAAAIAAAoQgICCgtAAQgfAAgOgXQgHgOAAgNIADiVIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAFQATAMADAfQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAOQgEAFgFAEQAQAMADAdQAAAPgKAPIgHAIQAdAIADAnQAAAQgKAOQgFAHgHAFQATAMADAfQAAAPgKAPQgFAHgGAEQAOANACAaQAAANgHAMIACAAQAuAAAEAyQAAAKgFAKQAmADAGAmIALgBQAhAAALAYQAJgEAMAAQAjAAAKAdQAPgTAZAAQAlAAAKAeIADgFQAOgUAaAAQAjAAALAbIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARAAANABQAKgIANgCIAFgGQAVgUBFAAQAvAAAaALQAnADADAuQAAAQgKAOQgOAUgaAAQgVAAgMgLIggABQgXAAgSgDIgEAIQgOATgZABQgWAKgqAAQg9AAgVgVg");
	var mask_graphics_270 = new cjs.Graphics().p("AmeIqIAAABQgOAUgaAAQgeAAgNgYIgCgFIgFAJQgOAUgaAAQgeAAgNgYIgDgHIgEAGQgOAUgaAAQgeAAgNgYIgDgFQgOATgZAAQgeAAgNgYIAAAAQgKAEgMAAQgeAAgNgXQgFgKgBgIIgLABQgeAAgNgYQgHgNAAgNQAAgKAEgKQgZgCgMgVQgHgOAAgNQAAgNAHgMIgCAAQgeAAgNgYQgHgNAAgNQAAgPAKgPQAFgHAHgFQgGgFgEgHQgHgNAAgNQAAgPAKgPQAFgIAHgEQgJgGgGgKQgHgPAAgMQAAgQAKgOIAHgIQgQgFgJgPQgHgOAAgNQAAgPAKgPQAEgGAFgEQgHgFgFgIQgHgNAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgQAKgOQAFgIAHgEQgJgGgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAAqQAAAqgyAIMgqfAAAIAAAoQgICCgtAAQgfAAgOgXQgHgOAAgNIADiVIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAFQATAMADAfQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAOQgEAFgFAEQAQAMADAdQAAAPgKAPIgHAIQAdAIADAnQAAAQgKAOQgFAHgHAFQATAMADAfQAAAPgKAPQgFAHgGAEQAOANACAaQAAANgHAMIACAAQAuAAAEAyQAAAKgFAKQAmADAGAmIALgBQAhAAALAYQAJgEAMAAQAjAAAKAdQAPgTAZAAQAlAAAKAeIADgFQAOgUAaAAQAjAAALAbIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARAAANABQAKgIANgCIAFgGQAVgUBFAAQAvAAAaALQAaACAKAWQAfgPBRAAQBjAAAaAXQAOANgGAOQAAAWgKAIQgbAUhgAAQhfAAgbgXQgNANgVAAQgVAAgMgLIggABQgXAAgSgDIgEAIQgOATgZABQgWAKgqAAQg9AAgVgVg");
	var mask_graphics_271 = new cjs.Graphics().p("AjtIxQgEgGgBgHQgLAHgPAAQgWAKgqAAQg9AAgVgVIAAABQgOAUgaAAQgeAAgNgYIgCgFIgFAJQgOAUgaAAQgeAAgNgYIgDgHIgEAGQgOAUgaAAQgeAAgNgYIgDgFQgOATgZAAQgeAAgNgYIAAAAQgKAEgMAAQgeAAgNgXQgFgKgBgIIgLABQgeAAgNgYQgHgNAAgNQAAgKAEgKQgZgCgMgVQgHgOAAgNQAAgNAHgMIgCAAQgeAAgNgYQgHgNAAgNQAAgPAKgPQAFgHAHgFQgGgFgEgHQgHgNAAgNQAAgPAKgPQAFgIAHgEQgJgGgGgKQgHgPAAgMQAAgQAKgOIAHgIQgQgFgJgPQgHgOAAgNQAAgPAKgPQAEgGAFgEQgHgFgFgHQgHgOAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgQAKgOQAFgIAHgEQgJgGgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAAqQAAAqgyAIMgqfAAAIAAAoQgICCgtAAQgfAAgOgXQgHgOAAgNIADiVIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAFQATAMADAfQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPQgEAEgFAEQAQAMADAdQAAAPgKAPIgHAIQAdAIADAnQAAAQgKAOQgFAHgHAFQATAMADAfQAAAPgKAPQgFAHgGAEQAOANACAaQAAANgHAMIACAAQAuAAAEAyQAAAKgFAKQAmADAGAmIALgBQAhAAALAYQAJgEAMAAQAjAAAKAdQAPgTAZAAQAlAAAKAeIADgFQAOgUAaAAQAjAAALAbIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARAAANABQAKgIANgCIAFgGQAVgUBFAAQAvAAAaALQAaACAKAWQAfgPBRAAQBUAAAgARIACgCQAVgUBFAAQBHAAAVAYQALAMgDAOQAAAVgKAJQgWAUhEAAQg7AAgZgQIgBABQgbAUhgAAQhfAAgbgXQgNANgVAAQgPAAgKgGIAAABQAAAQgKAOQgOAUgaAAQgeAAgNgYg");
	var mask_graphics_272 = new cjs.Graphics().p("AjeJXQgHgOAAgMQAAgQAKgOIAAgBQgLgGgHgMQgEgHgBgHQgLAHgPABQgWAKgqAAQg9gBgVgUIAAABQgOATgaABQgeAAgNgZIgCgEIgFAJQgOATgaABQgeAAgNgZIgDgHIgEAGQgOAVgagBQgeAAgNgXIgDgGQgOATgZAAQgeAAgNgXIAAgBQgKAEgMABQgeAAgNgYQgFgJgBgJIgLACQgeAAgNgYQgHgOAAgMQAAgLAEgKQgZgCgMgVQgHgNAAgOQAAgMAHgNIgCAAQgeAAgNgXQgHgOAAgMQAAgQAKgOQAFgIAHgEQgGgFgEgHQgHgOAAgMQAAgQAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgMQAAgQAKgPIAHgHQgQgGgJgPQgHgOAAgNQAAgOAKgOQAEgGAFgEQgHgGgFgIQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgJQgHgNAAgNQAAgPAKgPQAFgHAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXQgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAPQgEAFgFAEQAQAMADAbQAAAQgKAOIgHAIQAdAJADAnQAAAPgKAPQgFAHgHAEQATAMADAgQAAAPgKAOQgFAHgGAFQAOAMACAbQAAAMgHANIACAAQAuAAAEAxQAAALgFAKQAmACAGAmIALAAQAhAAALAYQAJgFAMAAQAjAAAKAdQAPgSAZgBQAlABAKAeIADgFQAOgUAaAAQAjgBALAcIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARgBANACQAKgJANgCIAFgGQAVgTBFAAQAvAAAaAKQAaADAKAVQAfgPBRAAQBUABAgAQIACgBQAVgVBFABQBHAAAVAXQALANgDANQAAAWgKAIQgWAVhEAAQg7AAgZgQIgBABQgbAThgAAQhfABgbgXQgNANgVgBQgPAAgKgFIAAABQAAAPgKAPQAWAKADAjQAAAPgKAOQgOAVgagBQgeAAgNgXg");
	var mask_graphics_273 = new cjs.Graphics().p("AjAJ1QgHgNAAgNQAAgHACgGQgQgGgJgPQgHgOAAgMQAAgQAKgOIAAgBQgLgGgHgMQgEgHgBgHQgLAHgPABQgWAKgqAAQg9gBgVgUIAAABQgOATgaABQgeAAgNgZIgCgEIgFAJQgOATgaABQgeAAgNgZIgDgHIgEAGQgOAVgagBQgeAAgNgXIgDgGQgOATgZAAQgeAAgNgXIAAgBQgKAEgMABQgeAAgNgYQgFgJgBgJIgLACQgeAAgNgYQgHgOAAgMQAAgLAEgKQgZgCgMgVQgHgNAAgOQAAgMAHgNIgCAAQgeAAgNgXQgHgOAAgMQAAgQAKgOQAFgIAHgEQgGgFgEgHQgHgOAAgMQAAgQAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgMQAAgQAKgPIAHgHQgQgGgJgPQgHgNAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgJQgHgNAAgNQAAgPAKgPQAFgHAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXQgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKANIgHAIQAdAJADAnQAAAPgKAPQgFAHgHAEQATAMADAgQAAAPgKAOQgFAHgGAFQAOAMACAbQAAAMgHANIACAAQAuAAAEAxQAAALgFAKQAmACAGAmIALAAQAhAAALAYQAJgFAMAAQAjAAAKAdQAPgSAZgBQAlABAKAeIADgFQAOgUAaAAQAjgBALAcIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARgBANACQAKgJANgCIAFgGQAVgTBFAAQAvAAAaAKQAaADAKAVQAfgPBRAAQBUABAgAQIACgBQAVgVBFABQBHAAAVAXQALANgDANQAAAWgKAIQgWAVhEAAQg7AAgZgQIgBABQgbAThgAAQhfABgbgXQgNANgVgBQgPAAgKgFIAAABQAAAPgKAPQAWAKADAjQAAAGgCAGQAdAIADAoQAAAPgKAPQgOATgaAAQgeABgNgYg");
	var mask_graphics_274 = new cjs.Graphics().p("AiTKTQgHgNAAgOIABgKQgbgBgMgWQgHgNAAgNQAAgHACgGQgQgGgJgPQgHgOAAgMQAAgQAKgOIAAgBQgLgGgHgMQgEgHgBgHQgLAHgPABQgWAKgqAAQg9gBgVgUIAAABQgOATgaABQgeAAgNgZIgCgEIgFAJQgOATgaABQgeAAgNgZIgDgHIgEAGQgOAVgagBQgeAAgNgXIgDgGQgOATgZAAQgeAAgNgXIAAgBQgKAEgMABQgeAAgNgYQgFgJgBgJIgLACQgeAAgNgYQgHgOAAgMQAAgLAEgKQgZgCgMgVQgHgNAAgOQAAgMAHgNIgCAAQgeAAgNgXQgHgOAAgMQAAgQAKgOQAFgIAHgEQgGgFgEgHQgHgOAAgMQAAgQAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgMQAAgQAKgPIAHgGQgQgGgJgPQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgJQgHgNAAgNQAAgPAKgPQAFgHAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXQgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAOIgHAIQAdAJADAmQAAAPgKAPQgFAHgHAEQATAMADAgQAAAPgKAOQgFAHgGAFQAOAMACAbQAAAMgHANIACAAQAuAAAEAxQAAALgFAKQAmACAGAmIALAAQAhAAALAYQAJgFAMAAQAjAAAKAdQAPgSAZgBQAlABAKAeIADgFQAOgUAaAAQAjgBALAcIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARgBANACQAKgJANgCIAFgGQAVgTBFAAQAvAAAaAKQAaADAKAVQAfgPBRAAQBUABAgAQIACgBQAVgVBFABQBHAAAVAXQALANgDANQAAAWgKAIQgWAVhEAAQg7AAgZgQIgBABQgbAThgAAQhfABgbgXQgNANgVgBQgPAAgKgFIAAABQAAAPgKAPQAWAKADAjQAAAGgCAGQAdAIADAoIgBAKQAqACAEAvQAAAQgKAPQgOATgaABQgegBgNgXg");
	var mask_graphics_275 = new cjs.Graphics().p("AiEKxQgHgOAAgMQAAgKAEgKQgHgFgFgJQgHgNAAgOIABgKQgbgBgMgWQgHgNAAgNQAAgHACgGQgQgGgJgPQgHgOAAgMQAAgQAKgOIAAgBQgLgGgHgMQgEgHgBgHQgLAHgPABQgWAKgqAAQg9gBgVgUIAAABQgOATgaABQgeAAgNgZIgCgEIgFAJQgOATgaABQgeAAgNgZIgDgHIgEAGQgOAVgagBQgeAAgNgXIgDgGQgOATgZAAQgeAAgNgXIAAgBQgKAEgMABQgeAAgNgYQgFgJgBgJIgLACQgeAAgNgYQgHgOAAgMQAAgLAEgKQgZgCgMgVQgHgNAAgOQAAgMAHgNIgCAAQgeAAgNgXQgHgOAAgMQAAgQAKgOQAFgIAHgEQgGgFgEgHQgHgOAAgMQAAgQAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgMQAAgPAKgPIAHgHQgQgGgJgPQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgJQgHgNAAgNQAAgPAKgPQAFgHAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXQgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAOIgHAIQAdAJADAmQAAAPgKAPQgFAHgHAEQATAMADAgQAAAPgKAOQgFAHgGAFQAOAMACAbQAAAMgHANIACAAQAuAAAEAxQAAALgFAKQAmACAGAmIALAAQAhAAALAYQAJgFAMAAQAjAAAKAdQAPgSAZgBQAlABAKAeIADgFQAOgUAaAAQAjgBALAcIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARgBANACQAKgJANgCIAFgGQAVgTBFAAQAvAAAaAKQAaADAKAVQAfgPBRAAQBUABAgAQIACgBQAVgVBFABQBHAAAVAXQALANgDANQAAAWgKAIQgWAVhEAAQg7AAgZgQIgBABQgbAThgAAQhfABgbgXQgNANgVgBQgPAAgKgFIAAABQAAAPgKAPQAWAKADAjQAAAGgCAGQAdAIADAoIgBAKQAqACAEAvQAAAKgEAJQARAMACAeQAAAPgKAOQgOAVgagBQgeAAgNgXg");
	var mask_graphics_276 = new cjs.Graphics().p("Ag5K7QgNALgTAAQgeAAgNgYQgHgNAAgNQAAgKAEgKQgHgFgFgIQgHgOAAgNIABgKQgbgCgMgWQgHgNAAgNQAAgGACgHQgQgFgJgQQgHgNAAgNQAAgPAKgPIAAgBQgLgFgHgNQgEgGgBgHQgLAHgPAAQgWAKgqAAQg9AAgVgVIAAABQgOAUgaAAQgeAAgNgYIgCgFIgFAJQgOAUgaAAQgeAAgNgYIgDgHIgEAGQgOAUgaAAQgeAAgNgYIgDgFQgOATgZAAQgeAAgNgYIAAAAQgKAEgMAAQgeAAgNgXQgFgKgBgIIgLABQgeAAgNgYQgHgNAAgNQAAgKAEgKQgZgCgMgVQgHgOAAgNQAAgNAHgMIgCAAQgeAAgNgYQgHgNAAgNQAAgPAKgPQAFgHAHgFQgGgFgEgHQgHgNAAgNQAAgPAKgPQAFgIAHgEQgJgGgGgKQgHgPAAgMQAAgPAKgOIAHgIQgQgFgJgPQgHgOAAgNQAAgPAKgPQAEgGAFgEQgHgFgFgIQgHgOAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgQAKgOQAFgIAHgEQgJgGgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAAqQAAAqgyAIMgqfAAAIAAAoQgICCgtAAQgfAAgOgXQgHgOAAgNIADiVIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAFQATAMADAfQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPIgHAIQAdAIADAmQAAAQgKAOQgFAHgHAFQATAMADAfQAAAPgKAPQgFAHgGAEQAOANACAaQAAANgHAMIACAAQAuAAAEAyQAAAKgFAKQAmADAGAmIALgBQAhAAALAYQAJgEAMAAQAjAAAKAdQAPgTAZAAQAlAAAKAeIADgFQAOgUAaAAQAjAAALAbIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARAAANABQAKgIANgCIAFgGQAVgUBFAAQAvAAAaALQAaACAKAWQAfgPBRAAQBUAAAgARIACgCQAVgUBFAAQBHAAAVAYQALAMgDAOQAAAVgKAJQgWAUhEAAQg7AAgZgQIgBABQgbAUhgAAQhfAAgbgXQgNANgVAAQgPAAgKgGIAAABQAAAQgKAOQAWALADAiQAAAGgCAHQAdAIADAnIgBAKQAqACAEAwQAAAKgEAJIAHAHQANgLATAAQAuAAADAyQAAAQgKAOQgOAUgZAAQgZAAgNgQg");
	var mask_graphics_277 = new cjs.Graphics().p("AARK7QgNAQgXAAQgZAAgNgQQgNALgTAAQgeAAgNgYQgHgNAAgNQAAgKAEgKQgHgFgFgIQgHgOAAgNIABgKQgbgCgMgWQgHgNAAgNQAAgGACgHQgQgFgJgQQgHgNAAgNQAAgPAKgPIAAgBQgLgFgHgNQgEgGgBgHQgLAHgPAAQgWAKgqAAQg9AAgVgVIAAABQgOAUgaAAQgeAAgNgYIgCgFIgFAJQgOAUgaAAQgeAAgNgYIgDgHIgEAGQgOAUgaAAQgeAAgNgYIgDgFQgOATgZAAQgeAAgNgYIAAAAQgKAEgMAAQgeAAgNgXQgFgKgBgIIgLABQgeAAgNgYQgHgNAAgNQAAgKAEgKQgZgCgMgVQgHgOAAgNQAAgNAHgMIgCAAQgeAAgNgYQgHgNAAgNQAAgPAKgPQAFgHAHgFQgGgFgEgHQgHgNAAgNQAAgPAKgPQAFgIAHgEQgJgGgGgKQgHgPAAgMQAAgPAKgOIAHgIQgQgFgJgPQgHgOAAgNQAAgPAKgPQAEgGAFgEQgHgFgFgIQgHgOAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgQAKgOQAFgIAHgEQgJgGgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAAqQAAAqgyAIMgqfAAAIAAAoQgICCgtAAQgfAAgOgXQgHgOAAgNIADiVIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAFQATAMADAfQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPIgHAIQAdAIADAmQAAAQgKAOQgFAHgHAFQATAMADAfQAAAPgKAPQgFAHgGAEQAOANACAaQAAANgHAMIACAAQAuAAAEAyQAAAKgFAKQAmADAGAmIALgBQAhAAALAYQAJgEAMAAQAjAAAKAdQAPgTAZAAQAlAAAKAeIADgFQAOgUAaAAQAjAAALAbIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARAAANABQAKgIANgCIAFgGQAVgUBFAAQAvAAAaALQAaACAKAWQAfgPBRAAQBUAAAgARIACgCQAVgUBFAAQBHAAAVAYQALAMgDAOQAAAVgKAJQgWAUhEAAQg7AAgZgQIgBABQgbAUhgAAQhfAAgbgXQgNANgVAAQgPAAgKgGIAAABQAAAQgKAOQAWALADAiQAAAGgCAHQAdAIADAnIgBAKQAqACAEAwQAAAKgEAJIAHAHQANgLATAAQAZAAAMAPQAOgPAXAAQAvAAADAyQAAAQgKAOQgOAUgaAAQgZAAgNgQg");
	var mask_graphics_278 = new cjs.Graphics().p("ABWLAQgMALgTAAQgZAAgNgQQgNAQgXAAQgZAAgNgQQgNALgTAAQgeAAgNgYQgHgNAAgNQAAgKAEgKQgHgFgFgIQgHgOAAgNIABgKQgbgCgMgWQgHgNAAgNQAAgGACgHQgQgFgJgQQgHgNAAgNQAAgPAKgPIAAgBQgLgFgHgNQgEgGgBgHQgLAHgPAAQgWAKgqAAQg9AAgVgVIAAABQgOAUgaAAQgeAAgNgYIgCgFIgFAJQgOAUgaAAQgeAAgNgYIgDgHIgEAGQgOAUgaAAQgeAAgNgYIgDgFQgOATgZAAQgeAAgNgYIAAAAQgKAEgMAAQgeAAgNgXQgFgKgBgIIgLABQgeAAgNgYQgHgNAAgNQAAgKAEgKQgZgCgMgVQgHgOAAgNQAAgNAHgMIgCAAQgeAAgNgYQgHgNAAgNQAAgPAKgPQAFgHAHgFQgGgFgEgHQgHgNAAgNQAAgPAKgPQAFgIAHgEQgJgGgGgKQgHgPAAgMQAAgPAKgOIAHgIQgQgFgJgPQgHgOAAgNQAAgPAKgPQAEgGAFgEQgHgFgFgIQgHgOAAgNQAAgQAKgOQAEgGAFgEQgHgFgFgJQgHgOAAgMQAAgQAKgOQAFgIAHgEQgJgGgGgLQgHgOAAgMQAAgIACgHIgHAAQgRAAgMgIIgBADIgTAPQgHADnTACInSgDQgIgCgHgEQgCgBgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagFQGjABArABQACgHAJgFQAhgUCJAAIAZAAIAAgJQgLhVABg4QAChpA6AAQAqAAAICJQAEA9gDBBQAgAGAOAKIAIAGMApoAAAQAyAIAAAqQAAAqgyAIMgqfAAAIAAAoQgICCgtAAQgfAAgOgXQgHgOAAgNIADiVIgrAAIgDAAQAGAMACARQAAAPgKAPQgFAHgHAFQATAMADAfQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPQgEAFgFAEQAQAMADAdQAAAPgKAPIgHAIQAdAIADAmQAAAQgKAOQgFAHgHAFQATAMADAfQAAAPgKAPQgFAHgGAEQAOANACAaQAAANgHAMIACAAQAuAAAEAyQAAAKgFAKQAmADAGAmIALgBQAhAAALAYQAJgEAMAAQAjAAAKAdQAPgTAZAAQAlAAAKAeIADgFQAOgUAaAAQAjAAALAbIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARAAANABQAKgIANgCIAFgGQAVgUBFAAQAvAAAaALQAaACAKAWQAfgPBRAAQBUAAAgARIACgCQAVgUBFAAQBHAAAVAYQALAMgDAOQAAAVgKAJQgWAUhEAAQg7AAgZgQIgBABQgbAUhgAAQhfAAgbgXQgNANgVAAQgPAAgKgGIAAABQAAAQgKAOQAWALADAiQAAAGgCAHQAdAIADAnIgBAKQAqACAEAwQAAAKgEAJIAHAHQANgLATAAQAZAAAMAPQAOgPAXAAQAUAAANAJQAYgJAtAAQBGAAAUAXQALANgDAOQAAAVgKAJQgVAUhDAAQguAAgZgLg");
	var mask_graphics_279 = new cjs.Graphics().p("ADtK6QgYAOg4ABQguAAgZgLQgMALgTAAQgZgBgNgQQgNAQgXABQgZgBgNgQQgNAMgTgBQgeAAgNgXQgHgOAAgMQAAgKAEgKQgHgFgFgJQgHgNAAgOIABgKQgbgBgMgWQgHgNAAgNQAAgHACgGQgQgGgJgPQgHgOAAgMQAAgQAKgOIAAgBQgLgGgHgMQgEgHgBgHQgLAHgPABQgWAKgqAAQg9gBgVgUIAAABQgOATgaABQgeAAgNgZIgCgEIgFAJQgOATgaABQgeAAgNgZIgDgHIgEAGQgOAVgagBQgeAAgNgXIgDgGQgOATgZAAQgeAAgNgXIAAgBQgKAEgMABQgeAAgNgYQgFgJgBgJIgLACQgeAAgNgYQgHgOAAgMQAAgLAEgKQgZgCgMgVQgHgNAAgOQAAgMAHgNIgCAAQgeAAgNgXQgHgOAAgMQAAgQAKgOQAFgIAHgEQgGgFgEgHQgHgOAAgMQAAgQAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgLQAAgQAKgPIAHgHQgQgGgJgPQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgJQgHgNAAgNQAAgPAKgPQAFgHAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXQgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAOIgHAIQAdAJADAnQAAAOgKAPQgFAHgHAEQATAMADAgQAAAPgKAOQgFAHgGAFQAOAMACAbQAAAMgHANIACAAQAuAAAEAxQAAALgFAKQAmACAGAmIALAAQAhAAALAYQAJgFAMAAQAjAAAKAdQAPgSAZgBQAlABAKAeIADgFQAOgUAaAAQAjgBALAcIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARgBANACQAKgJANgCIAFgGQAVgTBFAAQAvAAAaAKQAaADAKAVQAfgPBRAAQBUABAgAQIACgBQAVgVBFABQBHAAAVAXQALANgDANQAAAWgKAIQgWAVhEAAQg7AAgZgQIgBABQgbAThgAAQhfABgbgXQgNANgVgBQgPAAgKgFIAAABQAAAPgKAPQAWAKADAjQAAAGgCAGQAdAIADAoIgBAKQAqACAEAvQAAAKgEAJIAHAHQANgKATAAQAZAAAMAPQAOgPAXAAQAUAAANAJQAYgJAtAAQA5gBAYAQQAYgQA1ABQBmAAAeAUQANAKAAAZQAAAyhEAAQh2AAglgUg");
	var mask_graphics_280 = new cjs.Graphics().p("AHAK9QgRARgnAAQh2AAglgUQgYAOg4ABQguAAgZgLQgMALgTAAQgZgBgNgQQgNAQgXABQgZgBgNgQQgNAMgTgBQgeAAgNgXQgHgOAAgMQAAgKAEgKQgHgFgFgJQgHgNAAgOIABgKQgbgBgMgWQgHgNAAgNQAAgHACgGQgQgGgJgPQgHgOAAgMQAAgQAKgOIAAgBQgLgGgHgMQgEgHgBgHQgLAHgPABQgWAKgqAAQg9gBgVgUIAAABQgOATgaABQgeAAgNgZIgCgEIgFAJQgOATgaABQgeAAgNgZIgDgHIgEAGQgOAVgagBQgeAAgNgXIgDgGQgOATgZAAQgeAAgNgXIAAgBQgKAEgMABQgeAAgNgYQgFgJgBgJIgLACQgeAAgNgYQgHgOAAgMQAAgLAEgKQgZgCgMgVQgHgNAAgOQAAgMAHgNIgCAAQgeAAgNgXQgHgOAAgMQAAgQAKgOQAFgIAHgEQgGgFgEgHQgHgOAAgMQAAgQAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgLQAAgQAKgPIAHgHQgQgGgJgPQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgJQgHgNAAgNQAAgPAKgPQAFgHAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXQgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAOIgHAIQAdAJADAnQAAAOgKAPQgFAHgHAEQATAMADAgQAAAPgKAOQgFAHgGAFQAOAMACAbQAAAMgHANIACAAQAuAAAEAxQAAALgFAKQAmACAGAmIALAAQAhAAALAYQAJgFAMAAQAjAAAKAdQAPgSAZgBQAlABAKAeIADgFQAOgUAaAAQAjgBALAcIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARgBANACQAKgJANgCIAFgGQAVgTBFAAQAvAAAaAKQAaADAKAVQAfgPBRAAQBUABAgAQIACgBQAVgVBFABQBHAAAVAXQALANgDANQAAAWgKAIQgWAVhEAAQg7AAgZgQIgBABQgbAThgAAQhfABgbgXQgNANgVgBQgPAAgKgFIAAABQAAAPgKAPQAWAKADAjQAAAGgCAGQAdAIADAoIgBAKQAqACAEAvQAAAKgEAJIAHAHQANgKATAAQAZAAAMAPQAOgPAXAAQAUAAANAJQAYgJAtAAQA5gBAYAQQAYgQA1ABQBlgBAfAVQAfgPBXgBQByAAAEACQAFABAAAFQAAAJAEAHQAIANAAAOQAAAWgKAHQgbAVhiAAQhVAAgggRg");
	var mask_graphics_281 = new cjs.Graphics().p("AKwK6QgcAUhfAAQhVAAgggRQgRARgnAAQh2AAglgUQgYAOg4ABQguAAgZgLQgMALgTAAQgZgBgNgQQgNAQgXABQgZgBgNgQQgNAMgTgBQgeAAgNgXQgHgOAAgMQAAgKAEgKQgHgFgFgJQgHgNAAgOIABgKQgbgBgMgWQgHgNAAgNQAAgHACgGQgQgGgJgPQgHgOAAgMQAAgQAKgOIAAgBQgLgGgHgMQgEgHgBgHQgLAHgPABQgWAKgqAAQg9gBgVgUIAAABQgOATgaABQgeAAgNgZIgCgEIgFAJQgOATgaABQgeAAgNgZIgDgHIgEAGQgOAVgagBQgeAAgNgXIgDgGQgOATgZAAQgeAAgNgXIAAgBQgKAEgMABQgeAAgNgYQgFgJgBgJIgLACQgeAAgNgYQgHgOAAgMQAAgLAEgKQgZgCgMgVQgHgNAAgOQAAgMAHgNIgCAAQgeAAgNgXQgHgOAAgMQAAgQAKgOQAFgIAHgEQgGgFgEgHQgHgOAAgMQAAgQAKgOQAFgIAHgFQgJgGgGgKQgHgOAAgLQAAgQAKgPIAHgHQgQgGgJgPQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgIQgHgOAAgNQAAgPAKgOQAEgGAFgEQgHgGgFgJQgHgNAAgNQAAgPAKgPQAFgHAHgFQgJgGgGgKQgHgOAAgMQAAgIACgIIgHAAQgRABgMgJIgBAEIgTAOQgHADnTADInSgDQgIgDgHgDQgCgCgMgOQgHgOAAgMQAAgOAKgQQAFgKANgFIHagEQGjAAArACQACgHAJgFQAhgVCJAAIAZABIAAgKQgLhVABg3QAChqA6AAQAqABAICIQAEA9gDBBQAgAGAOAKIAIAHMApoAAAQAyAIAAApQAAAqgyAJMgqfAAAIAAAnQgICDgtAAQgfgBgOgXQgHgNAAgOIADiVIgrABIgDAAQAGALACASQAAAPgKAOQgFAIgHAEQATAMADAfQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAPQgEAFgFAEQAQAMADAcQAAAQgKAOIgHAIQAdAJADAnQAAAOgKAPQgFAHgHAEQATAMADAgQAAAPgKAOQgFAHgGAFQAOAMACAbQAAAMgHANIACAAQAuAAAEAxQAAALgFAKQAmACAGAmIALAAQAhAAALAYQAJgFAMAAQAjAAAKAdQAPgSAZgBQAlABAKAeIADgFQAOgUAaAAQAjgBALAcIAEgHQAOgUAaAAQAeAAAMAUQAVgUA7AAQARgBANACQAKgJANgCIAFgGQAVgTBFAAQAvAAAaAKQAaADAKAVQAfgPBRAAQBUABAgAQIACgBQAVgVBFABQBHAAAVAXQALANgDANQAAAWgKAIQgWAVhEAAQg7AAgZgQIgBABQgbAThgAAQhfABgbgXQgNANgVgBQgPAAgKgFIAAABQAAAPgKAPQAWAKADAjQAAAGgCAGQAdAIADAoIgBAKQAqACAEAvQAAAKgEAJIAHAHQANgKATAAQAZAAAMAPQAOgPAXAAQAUAAANAJQAYgJAtAAQA5gBAYAQQAYgQA1ABQBlgBAfAVQAfgPBXgBQByAAAEACQAFABAAAFIABAJQAwgRCcAAQCuAAApAYQAVAMgOAPQAAADAEAKQAAAKgOAGQgoAVisAAQibAAgygUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(149).to({graphics:mask_graphics_149,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_150,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_151,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_152,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_153,x:210.7,y:82.6}).wait(1).to({graphics:mask_graphics_154,x:210.7,y:87.1}).wait(1).to({graphics:mask_graphics_155,x:210.7,y:91.4}).wait(1).to({graphics:mask_graphics_156,x:210.7,y:95.1}).wait(1).to({graphics:mask_graphics_157,x:210.7,y:98.7}).wait(1).to({graphics:mask_graphics_158,x:210.7,y:100.4}).wait(1).to({graphics:mask_graphics_159,x:210.7,y:100.9}).wait(1).to({graphics:mask_graphics_160,x:210.7,y:100.9}).wait(1).to({graphics:mask_graphics_161,x:210.7,y:100.9}).wait(1).to({graphics:mask_graphics_162,x:210.7,y:100.9}).wait(1).to({graphics:mask_graphics_163,x:210.7,y:100.9}).wait(1).to({graphics:mask_graphics_164,x:210.7,y:100.9}).wait(1).to({graphics:mask_graphics_165,x:210.7,y:100.9}).wait(1).to({graphics:mask_graphics_166,x:210.7,y:100.9}).wait(1).to({graphics:mask_graphics_167,x:210.7,y:101.2}).wait(1).to({graphics:mask_graphics_168,x:210.7,y:104.4}).wait(1).to({graphics:mask_graphics_169,x:210.7,y:108.2}).wait(1).to({graphics:mask_graphics_170,x:210.7,y:111}).wait(1).to({graphics:mask_graphics_171,x:210.7,y:114.4}).wait(1).to({graphics:mask_graphics_172,x:210.7,y:114.8}).wait(1).to({graphics:mask_graphics_173,x:210.7,y:114.8}).wait(1).to({graphics:mask_graphics_174,x:210.7,y:114.8}).wait(1).to({graphics:mask_graphics_175,x:210.7,y:114.8}).wait(1).to({graphics:mask_graphics_176,x:210.7,y:114.8}).wait(1).to({graphics:mask_graphics_177,x:210.7,y:115}).wait(1).to({graphics:mask_graphics_178,x:210.7,y:115}).wait(75).to({graphics:mask_graphics_253,x:209.5,y:73.8}).wait(1).to({graphics:mask_graphics_254,x:209.5,y:73.8}).wait(1).to({graphics:mask_graphics_255,x:209.5,y:73.8}).wait(1).to({graphics:mask_graphics_256,x:209.5,y:76}).wait(1).to({graphics:mask_graphics_257,x:209.5,y:80}).wait(1).to({graphics:mask_graphics_258,x:209.5,y:84.3}).wait(1).to({graphics:mask_graphics_259,x:209.5,y:88.5}).wait(1).to({graphics:mask_graphics_260,x:209.5,y:92.5}).wait(1).to({graphics:mask_graphics_261,x:209.5,y:96.3}).wait(1).to({graphics:mask_graphics_262,x:209.5,y:99.8}).wait(1).to({graphics:mask_graphics_263,x:209.5,y:101.8}).wait(1).to({graphics:mask_graphics_264,x:209.5,y:102.8}).wait(1).to({graphics:mask_graphics_265,x:209.5,y:103.3}).wait(1).to({graphics:mask_graphics_266,x:209.5,y:103.5}).wait(1).to({graphics:mask_graphics_267,x:209.5,y:103.5}).wait(1).to({graphics:mask_graphics_268,x:209.5,y:103.5}).wait(1).to({graphics:mask_graphics_269,x:209.5,y:103.5}).wait(1).to({graphics:mask_graphics_270,x:209.5,y:103.5}).wait(1).to({graphics:mask_graphics_271,x:209.5,y:104.5}).wait(1).to({graphics:mask_graphics_272,x:209.5,y:108.3}).wait(1).to({graphics:mask_graphics_273,x:209.5,y:111.3}).wait(1).to({graphics:mask_graphics_274,x:209.5,y:114.3}).wait(1).to({graphics:mask_graphics_275,x:209.5,y:117.3}).wait(1).to({graphics:mask_graphics_276,x:209.5,y:117.5}).wait(1).to({graphics:mask_graphics_277,x:209.5,y:117.5}).wait(1).to({graphics:mask_graphics_278,x:209.5,y:117.5}).wait(1).to({graphics:mask_graphics_279,x:209.5,y:117.8}).wait(1).to({graphics:mask_graphics_280,x:209.5,y:117.8}).wait(1).to({graphics:mask_graphics_281,x:209.5,y:117.8}).wait(90));

	// DiagramMain
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(2.5,1,1).p("AAAhcIAAC5");
	this.shape_70.setTransform(128.9,89.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(2.5,1,1).p("Asjl/IAAkYA37lyQABAYAAAYQAFCiAFC0QACAyADAzQAGBQArBBQApA8BDAaQBCAaBFAAQDAgCDAgBQASAAASAAICIEhIgFAAA+7l/ISYAAAHEKYIxfAAAsjF3QCGAAFVAAAe8l/MgrfAAA");
	this.shape_71.setTransform(209.3,118.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(2.5,1,1).p("AsjCMIAAkXA+7CMISYAAAe8CMMgrfAAA");
	this.shape_72.setTransform(209.3,66.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(2.5,1,1).p("AuolyQABAYABAYQAFCiAFC0QACAyADAzQAFBQAsBBQApA8BCAaQBCAaBFAAQDAgCDAgBQATAAARAAICIEhIRgAAAELF3QlVAAiGAAAsjl/IAAkYA+7l/ISYAAAe8l/MgrfAAA");
	this.shape_73.setTransform(209.3,118.8);

	var maskedShapeInstanceList = [this.shape_70,this.shape_71,this.shape_72,this.shape_73];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_71},{t:this.shape_70}]},149).to({state:[{t:this.shape_72},{t:this.shape_70}]},94).to({state:[{t:this.shape_73},{t:this.shape_70}]},10).wait(118));

	// Layer 7
	this.instance_20 = new lib.PartDiagramDisplay();
	this.instance_20.parent = this;
	this.instance_20.setTransform(207.3,138.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CC33FF").s().p("AgoBHQgJgHAAgfIABgMIAAgQIgBgEQAAgCACgDIACgoIgBgKIgBgKQAAgLAJAAQAEABADACIAVgEIASgCQAWAAAOAFQAGADAAAGQAAAEgDADQgCADgEAAIgDgBQgQgEgOAAIgQACIgTAEIAAAJIgBAkIAngEIAWgCQAFAAACADQADADAAAEQAAAHgIABIgXACIgpAEIgBANIAAAKQAAAVADAEQACACAMAAIARAAIARgBIAFAAIAGAAQAKAAAAAJQAAAIgIACQgJABgcAAQgdAAgIgIg");
	this.shape_74.setTransform(107.9,169.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CC33FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_75.setTransform(95.9,169.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CC33FF").s().p("AgvBGQgDgBgCgDQgCgDABgDIAIgaIALgkIAMglIADgMIAFgNQAEgHAGADIAIAAIANADQAQAFAMAPQAMARgFARQgFAVgVAJQgSAIgUgGIgLgEIgNAvQgBAEgDABIgEABIgDAAgAgGgiIgLAiIAJAEQAOAEANgFQANgEAEgPQADgKgJgJQgIgKgMgDIgHgCIgEAAg");
	this.shape_76.setTransform(82.4,168.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC33FF").s().p("AgDBNIgOgHIgOgIIgRgIIgQgIQgDgCgCgDQAAgEACgEQACgDADgBQAEgBADACIATAIIAJgOIAHgOIAIgNQAKgSARgbIgKgGIgKgGQgDgCgBgDQgBgEACgDQAEgIAHAEIAZANQAQAJAWASQAGAFgEAHQgCAEgEABQgDAAgDgBIgNgJIgMgJQgPAWgNAVIgGANIgIAPIgJANIAZAOQAEACABAEQAAAEgCADQgCAEgDABIgDAAIgDgBg");
	this.shape_77.setTransform(70.4,166.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CC33FF").s().p("AgvA1QgQgKgEgTQgFgTAKgQQAQgbAngPQAggNATALIAHAEIAFAFQAFgDAFADQAFADgCAIIgJARQgBADgDACQgFACgEgDQgFgDABgHQABgHgBgCIgIgGQgMgGgXAJQghANgNAWQgGAJADALQACAMAKAGQAIAEALABQAFAAAOgCIAJABQADACAAAEQACAEgCAEQgCADgFABQgLACgKAAQgSAAgOgIg");
	this.shape_78.setTransform(59.6,161);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC33FF").s().p("AghBFQgEgBgCgEIgIgNIgIgNIgLgPIgLgQQgCgDACgDQABgDADgCQAEgCADABQAEABACADQADAEAJALQAHgCAIgFIANgHIANgJQASgKAdgOIgHgLIgGgKQgCgEABgDQABgEAEgCQAHgEAGAHIAOAYQAJAQALAZQADAIgIAEQgEACgDgBQgEgCgBgDIgHgMIgFgOQgZALgVAMIgNAIIgNAJQgIAEgHADIAPAZQACADgBAEQgBAEgDACIgGABIgBAAg");
	this.shape_79.setTransform(50.3,150.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CC33FF").s().p("AA7A8QgEgCgBgEIgEgUIgEgVIgCgGIgoANQgYAJgOADIgJAEIgKADQgGACgFgBQgGgBgCgGQgBgDACgEQACgDADgBIAFgBIAEAAIANgFIANgEIAjgLIAjgMIgDgHQgFgUAAgMQAAgIAHgCQAEgBADACQAEACABAEIACAPIADAPIAEAQIAFAPIAEAVIAFAVQABAEgCADQgCADgEABIgDAAIgEgBg");
	this.shape_80.setTransform(45.2,136.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC33FF").s().p("AgsBAQgEgCgBgEQgBgDADgEQAVgmAAgmIgRAGIgSAFQgEABgDgCQgDgCgBgDQgBgEACgEQABgDAEgBIAVgHIAWgGIAYgEIAZgFIANgEIANgFQAFgBAFABQAFACABAGIAFAWQABANgCAKQgKAogbAIQgOADgNgJQgLgIgIgOQgIAggMASQgDAEgDABIgCAAIgFgBgAAogoIgKAEIgSAEIgSACIABAEIABAEQAFAWAJAKQAFAEAFADQAHADADAAQANgEAGgQQAHgPgDgPIgCgOg");
	this.shape_81.setTransform(43.7,122.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC33FF").s().p("AgvA2QgDgDgBgDQgCgIATgMIAbgNIgLgWIgLgXIgngGQgFgBgCgFQgBgEACgDQACgEAEgBQAEgBAgAGQACgDADAAQAIgCAEAIQAVAFAdAJQAoAMABAGQACAHgJAFIgdAMIg6AfIgMAIIgJAGIgDAAIgFgBgAAJAFIAhgPIgvgOIAOAdg");
	this.shape_82.setTransform(43.2,108.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC33FF").s().p("AgEAZQgMgQAAgVIABgLIgxgBQgEAAgCgCQgDgDAAgDQAAgEADgDQACgCAEAAIAbAAIAmACIAmACIANAAIANABQAIACgBAHIACAIIAAAOQAAAQgMAPQgMAQgSAAQgXAAgNgRgAAAgMQAAAPAIAKQAJAMAPAAQAKAAAIgLQAGgKAAgLIAAgIIAAgFIgRAAIglgCg");
	this.shape_83.setTransform(42.6,95.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC33FF").s().p("AgXApQgFgFAAgRIAAgHIABgJIgBgDIABgCIABgXIAAgGIgBgGQAAgGAGAAIAEABIAMgCIAJgBQAOAAAHADQAEACAAADIgBAEIgEACIgCAAQgJgDgJAAIgIABIgLACIAAAGIgBAUIAXgCIAMgBQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAEgFAAIgNABIgYADIAAAHIAAAGQAAAMACACQABACAHAAIAJgBIAKAAIADAAIAEAAQAFAAAAAFQAAAFgEABQgFABgQAAQgRAAgFgFg");
	this.shape_84.setTransform(167.3,163.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CC33FF").s().p("AgXArQgDgDAAgGIABgRQACgZAAgdQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAegCAYIgBAIIAAAIQAOAAAUgGIACgBQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAADgDACQgGADgNACQgLACgIAAQgFAAgDgBg");
	this.shape_85.setTransform(155.3,163.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CC33FF").s().p("AgaAoIgDgBIgBgEIAEgQIAHgUIAHgVIACgHIADgIQACgEAEACIAEAAIAHACQAKADAGAIQAHAKgCAKQgEAMgLAFQgLAEgLgDIgGgCQgDAHgFAUIgCADIgCABIgCgBgAgCgTIgHATIAGACQAHACAHgDQAIgBACgJQACgFgFgGQgFgGgHgBIgEgBIgCgBg");
	this.shape_86.setTransform(143.5,163.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CC33FF").s().p("AgCAsIgIgEIgIgEIgJgFIgKgEQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABABAAAAQABAAAAAAIALAFQADgDACgFIAFgJIAEgGIAQgbIgHgDIgFgDQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQADgEAEACIAOAIIAWAPQAEADgDAFQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgDgBIgHgEIgHgGIgQAZIgEAIIgEAIIgFAIIANAIQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAIAAAEIgEADIgDgBg");
	this.shape_87.setTransform(133,161.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CC33FF").s().p("AgaAfQgKgGgDgLQgCgLAGgIQAJgQAXgJQASgIALAHIAEACIADADQADgCACACQAEACgCAFQgBAEgEAFQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgDgCAAgEQABgEgBgCIgFgDQgGgEgOAGQgTAIgHAMQgDAFABAGQACAHAFADQAFADAGAAIALAAIAFAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgCACgDAAIgLABQgKAAgIgEg");
	this.shape_88.setTransform(121.7,155.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC33FF").s().p("AgTAoQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgFgHIgEgIIgHgJIgFgJQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABIAHAIIAJgEIAHgEIAIgFQAKgGAQgIIgEgGIgDgGQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAEgDADAEIAJAOQAFAJAGAOQACAFgEADQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgDgHIgEgIIgaANIgHAFIgIAFIgIAEIAJAPIAAAEQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBAAIgCABIgCAAg");
	this.shape_89.setTransform(115.1,147.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CC33FF").s().p("AAiAjQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgDgLIgDgNIgBgDIgWAHIgWAIIgGABIgFACIgHABQgDgBgBgDIAAgEIAEgDIACAAIACAAIAIgDIAHgCIAUgHIAVgGIgCgFQgDgLAAgHQAAgEAEgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIABAIIACAJIACAJIADAJIADAMIACALQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCAAIgDAAg");
	this.shape_90.setTransform(110.1,135);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CC33FF").s().p("AgZAlQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIABgFQAMgVABgWIgLAEIgKACIgEAAIgDgDIABgEQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIALgDIANgEIANgDIAPgDIAHgCIAIgDQADgBADACQADABABADIACANQABAHgBAGQgGAXgQAEQgIADgIgGQgFgFgFgIQgEATgIALIgDABIgBABIgDgBgAAYgWIgHACIgKACIgKACIABACIAAACQADAMAFAGIAGAEQADACACAAQAHgCAFgKQADgIgBgIIgCgJg");
	this.shape_91.setTransform(109.3,120.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CC33FF").s().p("AgaAfQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBgFALgHIAPgHIgGgMIgGgOIgXgDQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQADgBASADIADgCQAEgBADAFQALADARAFQAXAHABADQABAEgFADIgRAHIghASIgHAFIgFADIgCAAIgCgBgAAFADIATgIIgagJIAHARg");
	this.shape_92.setTransform(108.6,106.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CC33FF").s().p("AgCAOQgHgJAAgMIAAgGIgcgBIgDgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAQAAIAWABIAWABIAHAAIAIAAQAFACgBAEIAAAFIABAHQAAAJgHAJQgHAJgKAAQgOAAgHgKgAABgHQgBAIAFAHQAFAGAJAAQAFAAAFgGQADgGAAgGIAAgEIAAgDIgJAAIgWgBg");
	this.shape_93.setTransform(108,95.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},37).to({state:[]},110).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},20).to({state:[]},76).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},30).wait(98));

	// SENTENCE
	this.instance_21 = new lib.TiredofWorkingTwiggsNapped("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(206.7,271.6);

	this.instance_22 = new lib.CouchBoardTeamMickPyramids("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(146.8,251.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},149).to({state:[]},94).to({state:[{t:this.instance_22}]},5).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,55.2,411.5,212.3);


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
(lib.past_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4_repeat:339});

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
		
		 window.open ("past_Summary.html","_self");
		}
		
		
		function openPrev(){
		
		 window.open ("past_Scene3.html","_self");
		}
	}
	this.frame_4 = function() {
		playSound("pastparticiplediagramme");
	}
	this.frame_160 = function() {
		playSound("tiredofworktwiggsnapped");
	}
	this.frame_260 = function() {
		playSound("couchboardteampyramids");
	}
	this.frame_338 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_347 = function() {
		this.gotoAndPlay("scene4_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(156).call(this.frame_160).wait(100).call(this.frame_260).wait(78).call(this.frame_338).wait(9).call(this.frame_347).wait(1));

	// content
	this.instance = new lib.PresentParticipleDiagrams1();
	this.instance.parent = this;
	this.instance.setTransform(276.3,162,1,1,0,0,0,206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(348));

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
	this.shape_6.graphics.f("#9900FF").s().p("AglBAQgRgIAAgOQAAgEACgCQAEgDADAAQAFAAADAGQAFAHADACQAIAFAQAAQANAAANgGQAPgIAAgOQAAgMgNgHQgMgFgPgBQgPAAgKgFQgNgIAAgOQAAgQATgOQARgNATAAQAJAAALADQAPAEAAAGQAAAJgIAAIgNgCIgOgCQgOAAgKAHQgKAHAAAKQAAAIANADIATACQAVACAMAMQALAJAAAQQAAAWgVANQgRAMgWAAQgSAAgOgHg");
	this.shape_6.setTransform(436.8,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9900FF").s().p("AgoBIQgJgIAAgfIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAALQAAAVADADQACADAMAAIARAAIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_7.setTransform(424.4,26.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9900FF").s().p("AgQBDQgLgbgOg1IgHgZQgGgUAAgFQAAgEADgDQADgDAEAAQAHAAACAIIADAQIAJAfQAJAiAIAZIABgBIAYhDIAIgWQAFgOAGgHQADgEAEAAQAEAAADADQADADAAADQAAADgCAEQgGAIgDAKIgIATIgYBDQgFAMgGALQgCAGgFAAQgHAAgDgIg");
	this.shape_8.setTransform(412.7,26.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9900FF").s().p("AgoBEQgDgDAAgEQAAgDADgDQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEgBgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAaAAAZIAAAPIABAQIgBARIAdgBQAEAAADACQADAEAAAEQAAADgDAEQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_9.setTransform(400.7,26.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9900FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_10.setTransform(389.9,26.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9900FF").s().p("AgmA5QgMgOAAgUQAAgeAaghQAVgcAWAAIAIABIAGABQAEgFAFAAQAGAAACAJQACAHgBALQAAAEgCADQgCAEgFAAQgGAAgDgHQgCgGgCgCQgCgBgIAAQgOAAgPAVQgWAcAAAXQAAAMAIAJQAHAJAMAAQAIAAAKgFIARgLQAEgEAEAAQAEAAACADQADADAAAEQAAAEgEADQgYAWgYAAQgUAAgNgPg");
	this.shape_11.setTransform(377.1,26.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9900FF").s().p("AgoBIQgJgIAAgfIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAALQAAAVADADQACADAMAAIARAAIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_12.setTransform(365.5,26.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9900FF").s().p("AglBAQgSgNAAgRQAAgLAKAAQAJAAAAALQAAAIALAIQALAHAJAAQAHAAADgvIABg2IAAgKIgGAAIgKAAIgLgBQgEAAgDgCQgDgDAAgEQAAgKANAAIAKAAIAIABIARgBIASgBQAVAAAAALQAAAEgDADQgCADgEAAIgGgBIgGgBIgLABIABALQAABEgKAfQgGAVgOAAQgQAAgQgMg");
	this.shape_13.setTransform(353,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9900FF").s().p("AgcBLQgLgDgFgEIgBAAQgEAAgDgCQgCgDAAgEIABgdIAAgeIAAgfIAAggQAAgEAEgEQADgFAEAAQADAAAMAHIARAHQAZAJATATQAVAWAAAZQAAAQgHAPQgIAOgMAJQgPAKgaAAQgGAAgJgCgAgigZIAAAaIgBAzIACABQAIAFAMAAQAUAAAKgGQAJgGAFgLQAGgKAAgLQAAgZgdgTQgIgGgjgPg");
	this.shape_14.setTransform(340.1,26.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9900FF").s().p("AAgAwQgCgIgEgWIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgDQgDgCAAgEQAAgEAOgeQgBgCAAgEQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA+IAFAQIADAKQAAAEgDACQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_15.setTransform(325.9,26.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_16.setTransform(308.5,28.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHADgEAAQgVAAgKgNQgKgLAAgYQAAgWAQgQQAPgPAVgBQAIABAKAEQANAFAAAHQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABIgCAMIAAATQAAAMABAGIAGAQIACAGIABABQAAAEgDACQgCADgEAAQgCAAgEgFgAgPgWQgKAMAAAOQAAAPAFAIQAGAHAKABQAIgBAGgDQAEgBAGgGQgDgYAAgMIAAgIIACgLIgGgCIgEgBQgNAAgLAMg");
	this.shape_17.setTransform(299.3,28.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC33FF").s().p("AglBAQgRgIAAgOQAAgEADgCQACgDAFAAQAEAAADAGQAFAHADACQAJAFAPAAQANAAANgGQAPgIAAgOQAAgMgNgHQgLgFgQgBQgPAAgKgFQgNgIAAgOQAAgQATgOQASgNASAAQAJAAALADQAPAEAAAGQAAAJgJAAIgMgCIgOgCQgOAAgKAHQgLAHAAAKQAAAIAOADIATACQAVACAMAMQALAJAAAQQAAAWgVANQgRAMgWAAQgSAAgOgHg");
	this.shape_18.setTransform(282.3,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC33FF").s().p("AgoBIQgJgIAAgfIABgMIAAgQIgBgEQAAgCACgDIACgnIgBgKIgBgKQAAgMAJAAQAEAAADADIAVgFIASgBQAWAAAOAGQAGACAAAHQAAADgDADQgCADgEAAIgDAAQgQgFgOAAIgQABIgTAFIAAAKIgBAjIAngEIAWgCQAFAAACADQADACAAAFQAAAHgIABIgXACIgpAEIgBAMIAAALQAAAVADADQACADAMAAIARAAIARgBIAFAAIAGgBQAKAAAAAKQAAAIgIABQgJACgcAAQgdAAgIgHg");
	this.shape_19.setTransform(269.9,26.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC33FF").s().p("AgnBJQgGgEAAgKIACgfQACgpAAg0QAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAA0gDAqIgBAOIAAAOQAYAAAkgMIADAAQAEAAACADQADADAAAEQAAAGgGACQgLAFgWAEQgUAEgNAAQgJAAgEgDg");
	this.shape_20.setTransform(258.7,26.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC33FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_21.setTransform(248.4,26.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC33FF").s().p("AgoBEQgDgDAAgEQAAgDADgDQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEgBgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAaAAAZIAAAPIABAQIgBARIAdgBQAEAAADACQADAEAAAEQAAADgDAEQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_22.setTransform(238.2,26.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC33FF").s().p("AgmA5QgMgOAAgUQAAgeAaghQAWgcAVAAIAIABIAGABQAEgFAFAAQAGAAACAJQABAHAAALQAAAEgCADQgCAEgFAAQgFAAgEgHQgCgGgCgCQgCgBgIAAQgOAAgPAVQgWAcAAAXQAAAMAIAJQAHAJAMAAQAIAAAKgFIAQgLQAFgEAEAAQADAAADADQACADABAEQgBAEgDADQgZAWgXAAQgTAAgOgPg");
	this.shape_23.setTransform(227.5,26.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC33FF").s().p("AgoBEQgDgDAAgEQAAgDADgDQADgDADAAIAUgCIABgSIAAgPIgBgPQAAgVADggIgMABIgMAAQgEgBgDgCQgDgCAAgFQAAgIAJgBIAcgBQASAAAbAEQAJABAAAJQAAAEgEADQgCACgEAAIgPgBIgPgCQgCAaAAAZIAAAPIABAQIgBARIAdgBQAEAAADACQADAEAAAEQAAADgDAEQgDACgEAAIgPAAIgQAAIgRACIgTACQgDAAgDgDg");
	this.shape_24.setTransform(216.3,26.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC33FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_25.setTransform(205.5,26.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC33FF").s().p("AguBGQgEgCAAgFIAAgVIgBgWIACgZIACgZIgBgOIgBgOQAAgFAEgEQADgFAGAAIAWACQANACAIAEQAmAUAAAdQgBAOgNAKQgJAJgQAEQAdAQAOARQADADAAADQgBAEgDADQgCADgEAAQgDAAgDgDQgggfgkgKIABASIAAASQAAAFgCACQgDADgEAAQgEAAgCgDgAgdgpIABALIgCATIgCARIAFAAIADABQAYAAALgHQAFgCAFgEQAFgFAAgEQAAgNgPgLQgMgKgPgCIgOgBg");
	this.shape_26.setTransform(192.5,26.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC33FF").s().p("AAgAwQgCgIgEgWIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgDQgDgCAAgEQAAgEAOgeQgBgCAAgEQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA+IAFAQIADAKQAAAEgDACQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_27.setTransform(179.2,26.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC33FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_28.setTransform(167.5,26.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC33FF").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_29.setTransform(151.1,26.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC33FF").s().p("AglBAQgRgIAAgOQAAgEACgCQAEgDADAAQAFAAADAGQAFAHAEACQAHAFAPAAQAOAAAMgGQAQgIAAgOQAAgMgNgHQgMgFgPgBQgPAAgKgFQgNgIAAgOQAAgQASgOQATgNASAAQAIAAAMADQAPAEAAAGQAAAJgIAAIgNgCIgOgCQgOAAgKAHQgKAHAAAKQAAAIANADIATACQAVACAMAMQALAJAAAQQAAAWgVANQgRAMgXAAQgRAAgOgHg");
	this.shape_30.setTransform(137.4,26.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC33FF").s().p("AAgAwQgCgIgEgWIgYAGIgYAEIgQAkQgDAFgFAAQgEAAgDgDQgDgCAAgEQAAgEAOgeQgBgCAAgEQAAgHAJgDIAbgsQAVgjAFAAQAHAAADAKIAGAgIAOA+IAFAQIADAKQAAAEgDACQgDADgEAAQgIAAgHgWgAgLAHIAhgHIgIgkg");
	this.shape_31.setTransform(123.6,26.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC33FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_32.setTransform(112,26.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3,1,1).p("EAklgX2MhJJAAAMAAAAvtMBJJAAAg");
	this.shape_33.setTransform(275,193.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#FFC4F3","#FFFFCC"],[0,1],-7.7,-187.3,-7.7,125.5).s().p("EgkkAX3MAAAgvtMBJJAAAMAAAAvtgAGrjAIAFACIgEgDg");
	this.shape_34.setTransform(275,193.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.vol_dwn},{t:this.vol_up},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_goNext},{t:this.instance_1},{t:this.btn_menu},{t:this.btn_goBack}]}).wait(348));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,198.2,532.5,404.8);
// library properties:
lib.properties = {
	id: '012B10E8259E6841A86D6BC45F2F097B',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/ball_passes.mp3", id:"ball_passes"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/couchboardteampyramids.mp3", id:"couchboardteampyramids"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/diagnal_line.mp3", id:"diagnal_line"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/pastparticiplediagramme.mp3", id:"pastparticiplediagramme"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/tiredofworktwiggsnapped.mp3", id:"tiredofworktwiggsnapped"},
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
an.compositions['012B10E8259E6841A86D6BC45F2F097B'] = {
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