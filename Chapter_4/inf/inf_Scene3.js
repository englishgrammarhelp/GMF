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


(lib.win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQgBgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgDADgFAAQgIAAgBgJg");
	this.shape.setTransform(26.8,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBHQgDgDgBgEIAAgSIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQACAAADADQADADAAAEIgBAWIgBAXIABARIAAASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADAAQAFAAAEAEQADAEAAAEQAAAFgDADQgEADgFAAQgDAAgEgDg");
	this.shape_1.setTransform(18.8,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIACAPIAFArQALgdAMgoQADgLAHAAQAIAAACANIAHAjIAHAlIAHgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_2.setTransform(9,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.9,31.9);


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


(lib.Thecaps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape.setTransform(16,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiBcQgDgJgDgTQgCgSAAgLIABgKIAAgJQAAgXgMAAQgPABgLANQgHAHgKAUQAAAvgFAIQgDAIgHAAQgFgBgEgDQgEgDAAgFIACgFQAAgEAAgOIABgSIAAhZIABgVIgBgLIgBgLQAAgGADgDQAEgDAFAAQAKgBACALQACAMAAAJIgBAbQgBAOABANIAAALQAJgNAMgIQAKgGANAAQAVAAAHANQAGAKAAAUIABAYIADAZQABAPACAKIABAEQAAAFgEAEQgDACgGAAQgIABgCgKg");
	this.shape_1.setTransform(1.9,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_2.setTransform(-13,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-19.4,49.3,38.8);


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


(lib.kids = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape.setTransform(17.3,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBUQgRgSAAgbQAAggARgTQARgUAbAAQAPAAAHAEIAMAJQABg0ACgRQACgLAKAAQALAAAAAMQAAAQgFA7QgBAQgBATQABApADAUIABADQAAAFgEADQgEADgEAAQgIAAgDgLQgJAGgJAEQgKADgJAAQgZAAgRgQgAgcACQgKAMAAAZQAAAQALALQALALAPAAQAJAAAIgEIANgKIAEgDIgBgWIAAgOIABgPQgFgJgIgEQgIgFgLAAQgTAAgKALg");
	this.shape_1.setTransform(4.1,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(-6.4,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAhBeQgHgNgNgRIgUgdIgWAQIgCAlQAAAFgDAEQgDADgGAAQgMAAAAgRIACgeIABgeIABgqIAAgqIAAgNIgBgNQAAgGADgDQAEgDAFgBQAFABAEADQADADAAAGIAAAOIABAMIgBAoIAAApQAQgNAPgOIAbgbQAEgFAEABQAFAAAEADQAEAEAAAFQAAAFgEADQgPASgWATIAbAkQATAaAAAHQAAAFgEAEQgEAEgFgBQgHAAgDgGg");
	this.shape_3.setTransform(-16.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-19.4,51.6,38.8);


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


(lib.InfinSibjVerticalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOAlQgDgDAAgEIABgwQABgJABgEQACgIAIAAQAFAAADAEQADADAAAEIAAAGIgBAFIgBAuQAAALgLAAQgEAAgEgDgAgiATIABgXIAAgYQAAgFADgDQADgDAFAAQAFAAACADQADADAAAFIAAAXIAAAXIAAAGIABAFQAAAFgDADQgEADgEAAQgMAAAAgVg");
	this.shape.setTransform(213.1,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(205.2,28.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag9BMQgZgWgBgjQAAgpAZgjQAdgmApAAQAnAAAUASQAUATABAoQAAApgYAiQgaAngoAAQgjAAgYgUgAgrgoQgSAbgBAgQAAAXASAPQARAOAZAAQAcAAATgeQARgaABghQgBgdgNgMQgMgLgdAAQgdAAgWAeg");
	this.shape_2.setTransform(192.1,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_3.setTransform(174.6,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAlQgEgDAAgEIABgwQAAgJACgEQADgIAHAAQAFAAADAEQADADAAAEIAAAGIgBAFIgBAuQAAALgLAAQgEAAgDgDgAgiATIAAgXIABgYQAAgFADgDQADgDAFAAQAEAAADADQADADABAFIAAAXIgBAXIABAGIAAAFQAAAFgDADQgDADgFAAQgMAAAAgVg");
	this.shape_4.setTransform(159.3,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgrBTQgRgRAAgbQAAghARgSQARgUAbAAQAPAAAHAFIAMAIQABgzACgSQACgLAKAAQALAAAAAMQAAARgFA5QgBASgBARQABApADAVIABADQAAAFgEADQgEADgEAAQgIAAgDgLQgJAGgJAEQgKADgJAAQgZAAgRgRgAgcACQgKAMAAAYQAAAQALALQALAMAPAAQAJAAAIgDIANgLIAEgEIgBgVIAAgOIABgOQgFgKgIgEQgIgFgLAAQgTAAgKALg");
	this.shape_5.setTransform(139.6,19.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHgBAPIAAAJQAAAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIAABCQABAMgNAAQgLAAAAgMg");
	this.shape_6.setTransform(126.7,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_7.setTransform(113.5,22.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAHAkIgEgeIgEgaIgKAXIgSAzQgCAEgDACQgDAIgJgBQgIABgKglQgEgTgEgfIgDgTIgBgSQAAgFADgDQADgDAFgBQAKAAACAKIADASIABASIAIA2QANglAPgwQAEgOAJAAQAJAAAEAPIAIAsQAFAeAEARIAJghIAPhCQACgHAJAAQAEAAAFAEQADADAAAEIgBAGQgJAogQAxQgDALgIAMQgFAHgHgBQgNAAgIggg");
	this.shape_8.setTransform(98.7,22.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgXAcAAQAUAAANAGQAPAIAAASQAAANgOAKQgGAEgTAIIguAWQAHALAKAEQAKAGANAAQAIAAAMgDQAOgFAEgGQAEgHAFABQAEAAAEACQADADAAAFQAAAOgWAJQgTAIgRAAQgbAAgRgNgAgYggQgKALgFAWIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_9.setTransform(75.9,22.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAiBdQgDgLgDgSQgCgSAAgLIAAgKIAAgKQAAgWgLAAQgPAAgLANQgHAIgKAUQAAAugFAJQgDAHgHAAQgFAAgEgCQgEgEAAgFIACgGQAAgCAAgPIABgTIAAhYIABgUIgBgMIgBgMQAAgFADgDQAEgDAFAAQAKgBACALQACAMAAAKIgBAbQgBANABANIAAALQAKgNALgIQALgGAMAAQAVAAAHANQAGAJAAAWIABAXIACAZQACAPACALIABADQAAAFgEADQgDADgGABQgIgBgCgIg");
	this.shape_10.setTransform(61.8,19.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_11.setTransform(48.5,20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgrBTQgRgRAAgbQAAghARgSQARgUAbAAQAPAAAHAFIAMAIQABgzACgSQACgLAJAAQAMAAAAAMQAAARgFA5QgCASABARQAAApADAVIAAADQABAFgEADQgEADgEAAQgHAAgEgLQgJAGgJAEQgJADgKAAQgZAAgRgRgAgcACQgLAMAAAYQAAAQAMALQALAMAPAAQAJAAAIgDIANgLIADgEIAAgVIAAgOIAAgOQgEgKgIgEQgHgFgMAAQgTAAgKALg");
	this.shape_12.setTransform(27.8,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAeA8IgEgbQgCgPAAgMIABgKIAAgMQABgbgLAAQgNABgMAQQgLAPgGAVIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFABQgFgBgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgjIAAgLIgBgMQAAgFADgDQAEgEAFAAQALAAABAQIAAAPQAVgcAUAAQAUAAAIARQAFALABAXIAAANIAAAKQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgLg");
	this.shape_13.setTransform(14.2,22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_14.setTransform(1,22.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag1BeQgLgLAAgnIAAgRIABgUIgBgGQAAgDACgDQADgkgBgRIgBgNIgBgNQAAgPAMAAQAFAAAEAEQAOgEANgCQANgCALAAQAeAAARAHQAJADgBAJQAAAFgCADQgEAEgFAAIgEAAQgVgGgTAAQgKAAgLACIgZAGIABAMQAAARgCAeIA0gFIAdgDQAGAAADAEQAEADAAAGQAAAKgMABIgcADIg4AFIgBARIAAAOQAAAbAEAFQADADAQAAIAWAAIAWgBIAIgBIAHgBQANAAAAANQAAAKgKADQgMACglAAQgmAAgLgKg");
	this.shape_15.setTransform(-20.3,19.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVBZQgPglgShFIgKghQgHgaAAgIQAAgFAEgEQADgDAFAAQAKAAACAKIAFAVIAMAqQALAsALAhIABgCIAghXIAKgeQAHgSAIgKQAEgFAGAAQAEAAAEAEQAEAEAAAFQAAAEgCADQgIAMgFAMIgJAbIghBYQgGAPgHAPQgDAIgHAAQgKAAgDgKg");
	this.shape_16.setTransform(-35.8,19.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag1BaQgDgEAAgFQAAgFADgEQAEgEAFAAQAIAAASgCQABgKAAgNIgBgVIAAgUQAAgbADgqIgQAAIgQAAQgFABgEgEQgDgDAAgGQAAgLALgBIAlgCQAYAAAkAGQALACAAALQAAAFgEAEQgEADgEAAIgUgBIgUgDQgDAkAAAfIABAUIAAAWIAAAVIAmgBQAFAAAEAEQADAEAAAEQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQADgIgBQgFABgEgEg");
	this.shape_17.setTransform(-51.5,19.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_18.setTransform(-65.8,19.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag1BaQgDgEAAgFQAAgFADgEQAEgEAFAAQAIAAASgCQABgKAAgNIgBgVIAAgUQAAgbADgqIgQAAIgQAAQgFABgEgEQgDgDAAgGQAAgLALgBIAlgCQAYAAAkAGQALACAAALQAAAFgEAEQgEADgEAAIgUgBIgUgDQgDAkAAAfIABAUIAAAWIAAAVIAmgBQAFAAAEAEQADAEAAAEQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQADgIgBQgFABgEgEg");
	this.shape_19.setTransform(-82.2,19.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhRBfQgEgDAAgGIABgPIAAgPIABgYIAAgWIAAgXIAAgZIgCgWIgBgYQAAgFAFgFQAEgEAHAAQAGAAAKAOQAeAtAYAfQAdAiAiAhIAAgPIAAgQQAAg0gFghIgDgMQgCgJAAgEQAAgOAMAAQAWgBAABQIgBAnIAAApIgCAUQgCAMgLAAQgGAAgKgJQgygvg/hYIgBAcIAAAbIAAAfIABAeQAAAggMABQgIAAgDgFg");
	this.shape_20.setTransform(-98.8,19.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag1BaQgDgEAAgFQAAgFADgEQAEgEAFAAQAIAAASgCQABgKAAgNIgBgVIAAgUQAAgbADgqIgQAAIgQAAQgFABgEgEQgDgDAAgGQAAgLALgBIAlgCQAYAAAkAGQALACAAALQAAAFgEAEQgEADgEAAIgUgBIgUgDQgDAkAAAfIABAUIAAAWIAAAVIAmgBQAFAAAEAEQADAEAAAEQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQADgIgBQgFABgEgEg");
	this.shape_21.setTransform(-115.7,19.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag7BjQgDgEAAgFIABhIIABhIIAAgQIAAgQQAAgFADgEQAEgDAEgBQAFAAADACIAbgDIAUgBQAOAAASADQAZAGAAAJQAAAFgDAEQgEAEgFAAIgEgBQgQgGgZABIgSABIgYADIAAA1QAYgGAMAAQARAAAVACQALABAAALQAAAGgDAEQgFACgEAAIgTgBIgSAAQgJAAgbAGIgCBUQAAAFgDAEQgEAEgFAAQgFAAgEgEg");
	this.shape_22.setTransform(-129.4,19.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhSBfQgDgDAAgGIABgPIAAgPIABgYIAAgWIAAgXIAAgZIgCgWIgBgYQAAgFAFgFQAEgEAHAAQAGAAAKAOQAeAtAYAfQAdAiAiAhIAAgPIAAgQQgBg0gEghIgDgMQgDgJAAgEQAAgOAOAAQAVgBAABQIgBAnIAAApIgCAUQgCAMgLAAQgGAAgKgJQgxgvhAhYIgBAcIAAAbIAAAfIABAeQAAAggMABQgHAAgFgFg");
	this.shape_23.setTransform(-147.5,19.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag1BaQgDgEAAgFQAAgFADgEQAEgEAFAAQAIAAASgCQABgKAAgNIgBgVIAAgUQAAgbADgqIgQAAIgQAAQgFABgEgEQgDgDAAgGQAAgLALgBIAlgCQAYAAAkAGQALACAAALQAAAFgEAEQgEADgEAAIgUgBIgUgDQgDAkAAAfIABAUIAAAWIAAAVIAmgBQAFAAAEAEQADAEAAAEQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQADgIgBQgFABgEgEg");
	this.shape_24.setTransform(-164.4,19.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgXAcAAQAUAAANAGQAPAIAAASQAAANgOAKQgGAEgTAIIguAWQAHALAKAEQAKAGANAAQAIAAAMgDQAOgFAEgGQAEgHAFABQAEAAAEACQADADAAAFQAAAOgWAJQgTAIgRAAQgbAAgRgNgAgYggQgKALgFAWIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_25.setTransform(-185.4,22.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAiBdQgDgLgDgSQgCgSAAgLIABgKIAAgKQAAgWgMAAQgPAAgMANQgGAIgKAUQgBAugEAJQgDAHgHAAQgFAAgEgCQgEgEAAgFIACgGQABgCAAgPIAAgTIABhYIAAgUIgBgMIgBgMQAAgFADgDQAEgDAFAAQAKgBACALQACAMAAAKIgBAbQgBANAAANIAAALQAKgNAMgIQAKgGANAAQAVAAAHANQAGAJAAAWIABAXIADAZQABAPACALIABADQAAAFgDADQgEADgFABQgJgBgCgIg");
	this.shape_26.setTransform(-199.5,19.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_27.setTransform(-212.8,20.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTBoQgDgDAAgFIAAgDQACgPAAgTIAAghIAAgjIgUABQgMAAAAgLQAAgMAWgBIALAAIACgTQADgbAKgNQAMgPAbAAQASAAAAALQAAAMgQAAQgdAAgEApIAAAIIAbgCQATAAAAAMQAAAJgKACIgJABQgGgBgWACIgBAbIAAAXIABAWQgBAYgCANQgBAJgKAAQgEAAgEgDg");
	this.shape_28.setTransform(221.4,-17.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_29.setTransform(208.5,-14.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_30.setTransform(187.2,-17.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgyBLQgRgTAAgaQAAgoAjgrQAcgkAdAAIAKAAIAJACQAEgGAIgBQAHABADAKQACAKAAAPQAAAFgDAEQgDAFgGAAQgIgBgEgIQgDgJgDgBQgDgCgKAAQgSAAgUAbQgdAlAAAfQAAAQAKALQAKAMAOAAQAMABANgHQAHgDAPgMQAGgEAEgBQAGABADAEQAEADgBAFQAAAGgEAEQghAdgggBQgYABgSgUg");
	this.shape_31.setTransform(170.5,-17.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag1BeQgLgLAAgnIAAgRIABgUIgBgGQAAgDACgEQADgjgBgQIgBgOIgBgNQAAgPAMAAQAFABAEADQAOgEANgCQANgCALAAQAeAAARAHQAJADgBAJQAAAFgCAEQgEADgFAAIgEAAQgVgGgTAAQgKAAgLACIgZAFIABAOQAAARgCAdIA0gFIAdgCQAGAAADADQAEADAAAGQAAAKgLACIgdACIg4AFIgBAQIAAAPQAAAbAEAFQADADAQAAIAWAAIAWAAIAIgBIAHgBQANAAAAAMQAAALgKACQgMACglAAQgmAAgLgKg");
	this.shape_32.setTransform(155.2,-17.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgxBVQgXgSAAgWQAAgPAMAAQAMAAAAAPQAAAKAPAKQAOAKAMAAQAJAAAEg+QACgcAAgsIgBgNIgHAAIgOAAIgOAAQgGAAgDgEQgEgDAAgGQAAgNARAAIAMABIAMAAIAXgBIAXgBQAbAAAAAOQAAAFgDAEQgDAEgGAAIgHgBIgIgBIgOABIAAAOQAABagMAqQgIAbgTAAQgVAAgVgPg");
	this.shape_33.setTransform(138.8,-16.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag4BeQgFgFAAgGIAAgjIACgwQACgkABgPIABgiQABgFADgCQARgGAVAAQAUAAAUAPQAXAQAAAZQAAAggZARQATAIAJAKQAJAJAAALQAAAPgQANQgLALgMAEQgbALgrAAQgFAAgEgFgAglAwIAAAaQAggCATgHQAIgEAJgHQAHgGAAgDQAAgFgPgIQgMgFgLgDIgMgCIgFAAIgFAAIgPgBIAAAbgAgghIIAAAVIgDAvIATACQARgBAMgLQAMgKAAgSQAAgLgMgKQgNgKgNAAIgTABg");
	this.shape_34.setTransform(123.1,-17.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag1BIQgQgRgDgjQgCgPAAguIAAgbQABgLACgFQADgJAIAAQALAAAAAVIAABIQAABJAzAAQAwAAAAh8IAAgMIAAgKQAAgHADgGQADgHAHAAQAMAAAAARIAAAPIAAAPQAACMhJAAQglAAgSgWg");
	this.shape_35.setTransform(105.6,-17.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgwBUQgXgKAAgSQgBgFAEgEQAEgDAFAAQAGAAAEAHQAHAJAFAEQAKAGAUABQASAAAQgJQAVgLAAgSQAAgQgSgIQgPgIgUAAQgUgBgNgHQgSgKAAgSQAAgWAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgDQgMgCgHAAQgSAAgNAJQgOAKAAANQAAALASADIAZADQAcADAQAPQAPANAAAUQAAAegbARQgYAPgdAAQgXAAgSgJg");
	this.shape_36.setTransform(87.7,-16.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_37.setTransform(64.8,-14.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAhBcQgCgKgDgSQgCgSAAgLIAAgKIAAgJQAAgXgLAAQgPABgLANQgHAHgKAUQgBAvgDAIQgEAIgHAAQgFgBgEgDQgEgDAAgFIABgFQABgEAAgOIABgSIAAhZIABgVIgBgLIgBgLQAAgGAEgDQADgDAFAAQAKgBACALQACAMAAAJIgBAbQgBAOABANIAAALQAKgNALgIQALgGAMAAQAVAAAHANQAFAKABAUIABAYIACAZQACAPADAKIAAAEQAAAFgEAEQgDACgGAAQgIABgDgKg");
	this.shape_38.setTransform(50.7,-17.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_39.setTransform(37.3,-16.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_40.setTransform(17.6,-14.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_41.setTransform(5.2,-14.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgrBUQgRgSAAgbQAAggASgTQAQgUAbAAQAOAAAIAEIAMAJQABg0ACgRQACgLAJAAQAMAAAAAMQAAAQgFA7QgCAQABATQgBApAEAUIAAADQABAFgEADQgDADgFAAQgIAAgDgLQgJAGgJAEQgJADgKAAQgZAAgRgQgAgcACQgLAMAAAZQAAAQAMALQALALAPAAQAKAAAGgEIAOgKIADgDIAAgWIAAgOIAAgPQgEgJgIgEQgHgFgLAAQgUAAgKALg");
	this.shape_42.setTransform(-9.2,-17.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_43.setTransform(-19.8,-17.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgNA5IgSgyIgWg3IgCgGQAAgFAFgEQADgDAFAAQAHAAAEAIIAeBUQAJgUAOgkIAKgbQAEgIAHAAQAFAAADADQAEAEAAAFQABAEgVAwIgZA5QAAALgKAAQgJAAgEgKg");
	this.shape_44.setTransform(-29.4,-14.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_45.setTransform(-38.9,-17.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgrBUQgRgSAAgbQAAggARgTQARgUAbAAQAPAAAHAEIAMAJQABg0ACgRQACgLAJAAQAMAAAAAMQAAAQgFA7QgCAQABATQAAApADAUIAAADQABAFgEADQgEADgEAAQgHAAgEgLQgJAGgJAEQgJADgKAAQgZAAgRgQgAgcACQgLAMAAAZQAAAQAMALQALALAPAAQAJAAAIgEIANgKIADgDIAAgWIAAgOIAAgPQgEgJgIgEQgHgFgMAAQgTAAgKALg");
	this.shape_46.setTransform(-50.1,-17.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_47.setTransform(-71.5,-14.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLAAQgNAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFADgEQAEgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAFgDAEQgEADgFAAQgLAAgBgMg");
	this.shape_48.setTransform(-84.8,-14.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_49.setTransform(-94.9,-17.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNBZIABgtIACgsIAAgrIABgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_50.setTransform(-102,-17.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgNBZIABgtIACgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_51.setTransform(-116.3,-17.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_52.setTransform(-126.2,-14.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_53.setTransform(-138.9,-14.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_54.setTransform(-148.7,-17.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_55.setTransform(-158.4,-16.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAFAHABAPIAAAJQgCAPgLAAQgLAAAAgMIAAgIIAAgLQgTADgLAIQgKAIgIAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_56.setTransform(-169.8,-14.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_57.setTransform(-182.9,-14.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNA5IgSgyIgWg3IgCgGQAAgFAFgEQADgDAFAAQAIAAADAIIAeBUQAJgUAOgkIAKgbQAEgIAHAAQAFAAADADQAEAEABAFQAAAEgVAwIgZA5QAAALgKAAQgJAAgEgKg");
	this.shape_58.setTransform(-195.8,-14.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AArA/IgIgmQgNACgUAEIggAGQgGAQgPAfQgDAIgHgBQgFAAgEgDQgDgEAAgFQAAgGASgmQgCgEAAgEQAAgKAMgCQAOgaAVghQAcgvAHAAQAJAAAEANIAIAqIASBTIAHATQADALAAADQAAAFgDAEQgEADgFAAQgLAAgIgdgAgPAJQAPgEAdgFIgKgug");
	this.shape_59.setTransform(-218.8,-17.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0066").s().p("Ag9BMQgZgWgBgjQAAgpAZgjQAdgmApAAQAnAAAUASQAUATABAoQAAApgYAiQgaAngoAAQgjAAgYgUgAgrgoQgSAbgBAgQAAAXASAPQARAOAZAAQAcAAATgeQARgaABghQgBgdgNgMQgMgLgdAAQgdAAgWAeg");
	this.shape_60.setTransform(192.1,19.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0066").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_61.setTransform(174.6,19.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0066").s().p("Ag1BeQgLgLAAgnIAAgRIABgUIgBgGQAAgDACgDQADgkgBgRIgBgNIgBgNQAAgPAMAAQAFAAAEAEQAOgEANgCQANgCALAAQAeAAARAHQAJADgBAJQAAAFgCADQgEAEgFAAIgEAAQgVgGgTAAQgKAAgLACIgZAGIABAMQAAARgCAeIA0gFIAdgDQAGAAADAEQAEADAAAGQAAAKgMABIgcADIg4AFIgBARIAAAOQAAAbAEAFQADADAQAAIAWAAIAWgBIAIgBIAHgBQANAAAAANQAAAKgKADQgMACglAAQgmAAgLgKg");
	this.shape_62.setTransform(-20.3,19.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0066").s().p("AgVBZQgPglgShFIgKghQgHgaAAgIQAAgFAEgEQADgDAFAAQAKAAACAKIAFAVIAMAqQALAsALAhIABgCIAghXIAKgeQAHgSAIgKQAEgFAGAAQAEAAAEAEQAEAEAAAFQAAAEgCADQgIAMgFAMIgJAbIghBYQgGAPgHAPQgDAIgHAAQgKAAgDgKg");
	this.shape_63.setTransform(-35.8,19.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0066").s().p("Ag1BaQgDgEAAgFQAAgFADgEQAEgEAFAAQAIAAASgCQABgKAAgNIgBgVIAAgUQAAgbADgqIgQAAIgQAAQgFABgEgEQgDgDAAgGQAAgLALgBIAlgCQAYAAAkAGQALACAAALQAAAFgEAEQgEADgEAAIgUgBIgUgDQgDAkAAAfIABAUIAAAWIAAAVIAmgBQAFAAAEAEQADAEAAAEQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQADgIgBQgFABgEgEg");
	this.shape_64.setTransform(-51.5,19.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0066").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_65.setTransform(-65.8,19.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0066").s().p("Ag1BaQgDgEAAgFQAAgFADgEQAEgEAFAAQAIAAASgCQABgKAAgNIgBgVIAAgUQAAgbADgqIgQAAIgQAAQgFABgEgEQgDgDAAgGQAAgLALgBIAlgCQAYAAAkAGQALACAAALQAAAFgEAEQgEADgEAAIgUgBIgUgDQgDAkAAAfIABAUIAAAWIAAAVIAmgBQAFAAAEAEQADAEAAAEQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQADgIgBQgFABgEgEg");
	this.shape_66.setTransform(-82.2,19.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0066").s().p("AhRBfQgEgDAAgGIABgPIAAgPIABgYIAAgWIAAgXIAAgZIgCgWIgBgYQAAgFAFgFQAEgEAHAAQAGAAAKAOQAeAtAYAfQAdAiAiAhIAAgPIAAgQQAAg0gFghIgDgMQgCgJAAgEQAAgOAMAAQAWgBAABQIgBAnIAAApIgCAUQgCAMgLAAQgGAAgKgJQgygvg/hYIgBAcIAAAbIAAAfIABAeQAAAggMABQgIAAgDgFg");
	this.shape_67.setTransform(-98.8,19.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0066").s().p("Ag1BaQgDgEAAgFQAAgFADgEQAEgEAFAAQAIAAASgCQABgKAAgNIgBgVIAAgUQAAgbADgqIgQAAIgQAAQgFABgEgEQgDgDAAgGQAAgLALgBIAlgCQAYAAAkAGQALACAAALQAAAFgEAEQgEADgEAAIgUgBIgUgDQgDAkAAAfIABAUIAAAWIAAAVIAmgBQAFAAAEAEQADAEAAAEQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQADgIgBQgFABgEgEg");
	this.shape_68.setTransform(-115.7,19.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0066").s().p("Ag7BjQgDgEAAgFIABhIIABhIIAAgQIAAgQQAAgFADgEQAEgDAEgBQAFAAADACIAbgDIAUgBQAOAAASADQAZAGAAAJQAAAFgDAEQgEAEgFAAIgEgBQgQgGgZABIgSABIgYADIAAA1QAYgGAMAAQARAAAVACQALABAAALQAAAGgDAEQgFACgEAAIgTgBIgSAAQgJAAgbAGIgCBUQAAAFgDAEQgEAEgFAAQgFAAgEgEg");
	this.shape_69.setTransform(-129.4,19.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0066").s().p("AhSBfQgDgDAAgGIABgPIAAgPIABgYIAAgWIAAgXIAAgZIgCgWIgBgYQAAgFAFgFQAEgEAHAAQAGAAAKAOQAeAtAYAfQAdAiAiAhIAAgPIAAgQQgBg0gEghIgDgMQgDgJAAgEQAAgOAOAAQAVgBAABQIgBAnIAAApIgCAUQgCAMgLAAQgGAAgKgJQgxgvhAhYIgBAcIAAAbIAAAfIABAeQAAAggMABQgHAAgFgFg");
	this.shape_70.setTransform(-147.5,19.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0066").s().p("Ag1BaQgDgEAAgFQAAgFADgEQAEgEAFAAQAIAAASgCQABgKAAgNIgBgVIAAgUQAAgbADgqIgQAAIgQAAQgFABgEgEQgDgDAAgGQAAgLALgBIAlgCQAYAAAkAGQALACAAALQAAAFgEAEQgEADgEAAIgUgBIgUgDQgDAkAAAfIABAUIAAAWIAAAVIAmgBQAFAAAEAEQADAEAAAEQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQADgIgBQgFABgEgEg");
	this.shape_71.setTransform(-164.4,19.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0000FF").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_72.setTransform(187.2,-17.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0000FF").s().p("AgyBLQgRgTAAgaQAAgoAjgrQAcgkAdAAIAKAAIAJACQAEgGAIgBQAHABADAKQACAKAAAPQAAAFgDAEQgDAFgGAAQgIgBgEgIQgDgJgDgBQgDgCgKAAQgSAAgUAbQgdAlAAAfQAAAQAKALQAKAMAOAAQAMABANgHQAHgDAPgMQAGgEAEgBQAGABADAEQAEADgBAFQAAAGgEAEQghAdgggBQgYABgSgUg");
	this.shape_73.setTransform(170.5,-17.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0000FF").s().p("Ag1BeQgLgLAAgnIAAgRIABgUIgBgGQAAgDACgEQADgjgBgQIgBgOIgBgNQAAgPAMAAQAFABAEADQAOgEANgCQANgCALAAQAeAAARAHQAJADgBAJQAAAFgCAEQgEADgFAAIgEAAQgVgGgTAAQgKAAgLACIgZAFIABAOQAAARgCAdIA0gFIAdgCQAGAAADADQAEADAAAGQAAAKgLACIgdACIg4AFIgBAQIAAAPQAAAbAEAFQADADAQAAIAWAAIAWAAIAIgBIAHgBQANAAAAAMQAAALgKACQgMACglAAQgmAAgLgKg");
	this.shape_74.setTransform(155.2,-17.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0000FF").s().p("AgxBVQgXgSAAgWQAAgPAMAAQAMAAAAAPQAAAKAPAKQAOAKAMAAQAJAAAEg+QACgcAAgsIgBgNIgHAAIgOAAIgOAAQgGAAgDgEQgEgDAAgGQAAgNARAAIAMABIAMAAIAXgBIAXgBQAbAAAAAOQAAAFgDAEQgDAEgGAAIgHgBIgIgBIgOABIAAAOQAABagMAqQgIAbgTAAQgVAAgVgPg");
	this.shape_75.setTransform(138.8,-16.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0000FF").s().p("Ag4BeQgFgFAAgGIAAgjIACgwQACgkABgPIABgiQABgFADgCQARgGAVAAQAUAAAUAPQAXAQAAAZQAAAggZARQATAIAJAKQAJAJAAALQAAAPgQANQgLALgMAEQgbALgrAAQgFAAgEgFgAglAwIAAAaQAggCATgHQAIgEAJgHQAHgGAAgDQAAgFgPgIQgMgFgLgDIgMgCIgFAAIgFAAIgPgBIAAAbgAgghIIAAAVIgDAvIATACQARgBAMgLQAMgKAAgSQAAgLgMgKQgNgKgNAAIgTABg");
	this.shape_76.setTransform(123.1,-17.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0000FF").s().p("Ag1BIQgQgRgDgjQgCgPAAguIAAgbQABgLACgFQADgJAIAAQALAAAAAVIAABIQAABJAzAAQAwAAAAh8IAAgMIAAgKQAAgHADgGQADgHAHAAQAMAAAAARIAAAPIAAAPQAACMhJAAQglAAgSgWg");
	this.shape_77.setTransform(105.6,-17.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0000FF").s().p("AgwBUQgXgKAAgSQgBgFAEgEQAEgDAFAAQAGAAAEAHQAHAJAFAEQAKAGAUABQASAAAQgJQAVgLAAgSQAAgQgSgIQgPgIgUAAQgUgBgNgHQgSgKAAgSQAAgWAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgDQgMgCgHAAQgSAAgNAJQgOAKAAANQAAALASADIAZADQAcADAQAPQAPANAAAUQAAAegbARQgYAPgdAAQgXAAgSgJg");
	this.shape_78.setTransform(87.7,-16.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0000CC").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_79.setTransform(-71.5,-14.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0000CC").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLAAQgNAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFADgEQAEgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAFgDAEQgEADgFAAQgLAAgBgMg");
	this.shape_80.setTransform(-84.8,-14.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0000CC").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_81.setTransform(-94.9,-17.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0000CC").s().p("AgNBZIABgtIACgsIAAgrIABgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_82.setTransform(-102,-17.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0000CC").s().p("AgNBZIABgtIACgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_83.setTransform(-116.3,-17.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0000CC").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_84.setTransform(-126.2,-14.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0000CC").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_85.setTransform(-138.9,-14.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0000CC").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_86.setTransform(-148.7,-17.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0000CC").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_87.setTransform(-158.4,-16.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0000CC").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAFAHABAPIAAAJQgCAPgLAAQgLAAAAgMIAAgIIAAgLQgTADgLAIQgKAIgIAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_88.setTransform(-169.8,-14.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0000CC").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_89.setTransform(-182.9,-14.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0000CC").s().p("AgNA5IgSgyIgWg3IgCgGQAAgFAFgEQADgDAFAAQAIAAADAIIAeBUQAJgUAOgkIAKgbQAEgIAHAAQAFAAADADQAEAEABAFQAAAEgVAwIgZA5QAAALgKAAQgJAAgEgKg");
	this.shape_90.setTransform(-195.8,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_59},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_61},{t:this.shape_60},{t:this.shape_1},{t:this.shape}]},7).wait(9));

	// Layer 2
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#0000FF").ss(4,1,1).p("AhlBFIBjBUIgFADAgCCZIACADIAAgFgABlBaIhlA9IAAky");
	this.shape_91.setTransform(-62.7,56.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#0000FF").ss(2.5,1,1).p("AhlBFIBjBUIgFADAgCCZIACgCIAAAFgABlBaIhlA9IAAky");
	this.shape_92.setTransform(-62.7,56.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91}]}).to({state:[]},5).to({state:[{t:this.shape_92}]},2).to({state:[]},7).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.7,-37.8,467.4,112);


(lib.InfinitSubjDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(252,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguBTQgLgJAAgjIABgPIAAgSIgBgFQAAgDACgCIACguIgBgMIgBgMQAAgMALAAQAFAAADADQANgEALgCQAMgCAJAAQAaABAPAGQAIADAAAHQAAAFgDADQgDAEgFgBIgDAAQgSgGgRABQgJAAgKACIgWAEIABAMIgCAoIAugEIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAFIgBAOIAAANQAAAXADAFQADACAOABIATAAIAUgBIAHAAIAGgBQALgBAAALQAAAKgJABQgKACghAAQghABgJgJg");
	this.shape_1.setTransform(242.7,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSBOQgNgggQg9IgJgdQgGgWAAgHQAAgFADgDQADgDAEAAQAJAAACAJIAEASIALAlQAJAnAKAdIABgCIAchNIAJgaQAGgQAHgIQAEgFAFAAQAEAAADAEQADADAAAFQAAADgBADQgIAKgDALIgIAXIgeBOQgEANgIANQgCAHgGAAQgJAAgCgJg");
	this.shape_2.setTransform(229,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvBPQgDgDAAgFQAAgEADgEQAEgDAEAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgCAfgBAbIABATIAAATIAAASIAiAAQAEAAAEADQACADAAAFQAAAEgCADQgEAEgEAAIgSAAIgSAAIgUACIgWACQgEAAgEgDg");
	this.shape_3.setTransform(215.2,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_4.setTransform(202.6,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AguBPQgDgDAAgFQAAgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_5.setTransform(188.3,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhHBUQgEgDAAgFIACgOIAAgNIABgUIAAgVIAAgUIAAgVIgCgVIgCgUQAAgEAFgFQAEgDAGAAQAFAAAIAMQAcAoAUAbQAZAeAeAcIAAgNIAAgOQAAgtgDgcIgDgMQgCgHgBgFQAAgMAMAAQASAAAABGIAAAjIAAAjIgCASQgBAKgKAAQgGAAgIgHQgsgqg4hNIAAAYIAAAYIAAAaIAAAcQAAAcgLAAQgGAAgDgDg");
	this.shape_6.setTransform(173.6,18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AguBPQgEgDAAgFQAAgEAEgEQADgDAEAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgDAfAAAbIABATIAAATIAAASIAhAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIgSAAIgSAAIgTACIgWACQgEAAgDgDg");
	this.shape_7.setTransform(158.7,18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag0BXQgCgDAAgFIABg/IAAg/IAAgOIAAgOQAAgFADgDQADgEAEAAQAEAAADACIAYgDIASgBQAMAAAQADQAVAFAAAIQAAAFgCADQgDAEgFAAIgFgBQgNgFgVAAIgQABIgWADIAAAuQAVgFALAAQAPAAASACQAKABAAAKQAAAFgDADQgEACgEAAIgQgBIgQAAQgIAAgYAFIgBBKQAAAFgDADQgDADgFAAQgEAAgEgDg");
	this.shape_8.setTransform(146.7,18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhHBUQgEgDABgFIABgOIAAgNIAAgUIABgVIgBgUIAAgVIgBgVIgBgUQgBgEAFgFQAEgDAFAAQAHAAAIAMQAaAoAVAbQAZAeAeAcIAAgNIAAgOQAAgtgDgcIgDgMQgDgHAAgFQAAgMAMAAQASAAABBGIAAAjIgBAjIgCASQgCAKgJAAQgGAAgIgHQgsgqg4hNIAAAYIgBAYIABAaIAAAcQABAcgMAAQgGAAgDgDg");
	this.shape_9.setTransform(130.7,18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguBPQgDgDAAgFQAAgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_10.setTransform(115.8,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAALgDQAMgDAEgGQADgGAFAAQAEAAACADQAEADAAAEQgBAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_11.setTransform(97.4,20.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_12.setTransform(85,17.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_13.setTransform(73.3,18.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggAtQgOgPAAgYQgBgXAMgTQAPgWAbAAQAVAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgOgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_14.setTransform(55.7,20.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_15.setTransform(44.9,18.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape_16.setTransform(27.5,20.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_17.setTransform(17.3,18.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgZATgBQALAAANAGQAQAGAAAIQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgFgPgBQgKABgKATQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgCQAEAAACADQADAEAAADQAAAJgQAHQgPAHgJAAQgVAAgPgOg");
	this.shape_18.setTransform(6.5,20.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQADgGAFAAQADAAAEADQADADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_19.setTransform(-5,20.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAaA0IgDgXIgBgXIAAgJIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgEAFAAQAJABABAOIABAMQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDACgEAAQgKABgBgLg");
	this.shape_20.setTransform(-16.7,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAaA0IgDgXIgBgXIAAgJIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgEAFAAQAJABABAOIABAMQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDACgEAAQgKABgBgLg");
	this.shape_21.setTransform(-28.1,20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggAtQgOgPgBgYQAAgXANgTQAOgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgOgAgTgVQgGAMAAAPQgBAPAJAJQAHAHAJAAQALAAAIgIQAJgJABgQQABgogYAAQgPAAgJAPg");
	this.shape_22.setTransform(-40,20.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgZATgBQALAAANAGQAQAGAAAIQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgFgPgBQgKABgKATQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgCQAEAAACADQADAEAAADQAAAJgQAHQgPAHgJAAQgVAAgPgOg");
	this.shape_23.setTransform(-51.2,20.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_24.setTransform(-68.7,18.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgSAYgBQAJAAAMAFQAOAGAAAIQAAADgCADIgBAOIgBAWQAAAOACAIIAGASIADAGIABABQAAAFgDADQgDADgEAAQgCAAgGgFgAgRgaQgNANAAARQAAASAHAIQAGAJAMAAQAKAAAHgDIALgJQgEgbAAgOIABgKIACgLIgHgDIgFgCQgPAAgMAOg");
	this.shape_25.setTransform(-79.4,20.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_26.setTransform(-91.3,17.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_27.setTransform(-103,18.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAKAFQAIAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADABAEQgBAMgTAIQgRAIgPAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_28.setTransform(-120.5,20.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAaA0IgDgXIgBgXIAAgJIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgEAFAAQAJABABAOIABAMQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDACgEAAQgKABgBgLg");
	this.shape_29.setTransform(-132.2,20.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_30.setTransform(-141,17.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgLBOIABgnIABgnIAAgmIABgnQAAgLAJAAQAMAAAAALIgBAnIgBAmIgCA1IgBAZQgBALgIAAQgKAAAAgLg");
	this.shape_31.setTransform(-147.3,17.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_32.setTransform(-162.1,18.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_33.setTransform(-173.5,17.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgkBTQgOgCAAgJQAAgJAJAAIANACQAJABALAAQAUAAAIgUQAFgNAAgbQgGALgIAFQgIAFgJAAQgTAAgNgNQgMgNAAgUQAAgdARgSQARgSAdAAQAKAAAGACQAHADAEAFQALAAAAANQAAAHgCANIgDAUIgCAkQgBAVgEAOQgFARgKAIQgNAKgYAAQgOAAgJgCgAgTg1QgKANAAATQAAAQAGAHQAGAHAMAAQAKAAAKgLQAJgLABgLQADgMACgZIgJgEQgEgCgFAAQgUAAgLAOg");
	this.shape_34.setTransform(-186,23.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgEADQgDADgDAAQgEAAgDgDgAgGg6QgEgEABgFQgBgFAEgEQAEgEAEAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_35.setTransform(-194.5,17.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgSAYgBQAJAAAMAFQAOAGAAAIQAAADgCADIgBAOIgBAWQAAAOACAIIAGASIADAGIABABQAAAFgDADQgDADgEAAQgCAAgGgFgAgRgaQgNANAAARQAAASAHAIQAGAJAMAAQAKAAAHgDIALgJQgEgbAAgOIABgKIACgLIgHgDIgFgCQgPAAgMAOg");
	this.shape_36.setTransform(-203.4,20.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAHQgKAIgGANIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_37.setTransform(-214,20.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_38.setTransform(-224.8,18.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape_39.setTransform(-235.6,20.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgSAYgBQAJAAAMAFQAOAGAAAIQAAADgCADIgBAOIgBAWQAAAOACAIIAGASIADAGIABABQAAAFgDADQgDADgEAAQgCAAgGgFgAgRgaQgNANAAARQAAASAHAIQAGAJAMAAQAKAAAHgDIALgJQgEgbAAgOIABgKIACgLIgHgDIgFgCQgPAAgMAOg");
	this.shape_40.setTransform(-252.8,20.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAaA0IgDgXIgBgYIAAgIIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgDAFgBQAJAAABAOIABANQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDACQgDADgEAAQgKAAgBgKg");
	this.shape_41.setTransform(260.2,-12.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AggAtQgOgOAAgZQgBgYAMgSQAPgWAbAAQAVAAALAUQAJAPgBAXQAAAXgMARQgOATgWAAQgSAAgNgOgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgPQACgpgYAAQgPAAgJAPg");
	this.shape_42.setTransform(248.3,-12);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgmBJQgOgPAAgYQAAgdAPgQQAPgRAXAAQAMAAAIAEIAJAHQACgtACgPQABgKAJAAQAKAAAAAKQgBAPgEAzIgBAeQAAAlADASIAAACQAAAFgDADQgCACgFAAQgGAAgDgJQgIAFgIADQgJADgIAAQgWAAgPgPgAgYABQgKALABAWQgBAOALAKQAJAJANABQAJAAAFgEQAEgBAIgIIAEgDIAAgTIAAgMIAAgNQgFgIgGgDQgHgFgJAAQgSAAgIAJg");
	this.shape_43.setTransform(229.6,-15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_44.setTransform(217.4,-12.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_45.setTransform(202.8,-12);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_46.setTransform(185.7,-12);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIAEgEAAQgZAAgMgPQgLgNAAgbQAAgaASgSQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBAOIgBAWQAAANACAJIAGASIADAGIABACQAAAEgDADQgDACgEABQgCgBgGgEgAgRgaQgNANAAASQAAARAHAJQAGAIAMABQAKgBAHgEIALgIQgEgbAAgOIABgKIACgMIgHgCIgFgBQgPAAgMANg");
	this.shape_47.setTransform(171.4,-12);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgpAxIAAhKIABgKIAAgMQAAgKAJAAQALAAAAARQAUgTAZAAQAIAAAFAHQAEAGAAANIAAAIQgBANgKAAQgJAAAAgLIgBgHIAAgJQgRACgJAHQgKAIgGAOIAAA5QAAALgKAAQgKAAAAgLg");
	this.shape_48.setTransform(160.8,-12);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkBTQgOgCAAgJQAAgJAJAAIANACQAJABALAAQAUAAAIgUQAFgNAAgbQgGALgIAFQgIAFgJAAQgTAAgNgNQgMgNAAgUQAAgdARgSQARgSAdAAQAKAAAGACQAHADAEAFQALAAAAANQAAAHgCANIgDAUIgCAkQgBAVgEAOQgFARgKAIQgNAKgYAAQgOAAgJgCgAgTg1QgKANAAATQAAAQAGAHQAGAHAMAAQAKAAAKgLQAJgLABgLQADgMACgZIgJgEQgEgCgFAAQgUAAgLAOg");
	this.shape_49.setTransform(149.1,-9.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIAEgEAAQgZAAgMgPQgLgNAAgbQAAgaASgSQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBAOIgBAWQAAANACAJIAGASIADAGIABACQAAAEgDADQgDACgEABQgCgBgGgEgAgRgaQgNANAAASQAAARAHAJQAGAIAMABQAKgBAHgEIALgIQgEgbAAgOIABgKIACgMIgHgCIgFgBQgPAAgMANg");
	this.shape_50.setTransform(137.9,-12);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQgBAFgDADQgDADgDAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAEgEAEAAQAFAAAEAEQAEAEgBAFQABAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_51.setTransform(129.4,-14.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AglBJQgQgPABgYQAAgdAPgQQAPgRAXAAQANAAAGAEIAKAHQACgtACgPQACgKAIAAQAKAAAAAKQAAAPgFAzIgBAeQAAAlAEASIAAACQgBAFgDADQgCACgFAAQgGAAgDgJQgIAFgIADQgJADgHAAQgXAAgOgPgAgZABQgJALAAAWQAAAOAKAKQAKAJAOABQAHAAAGgEQAFgBAIgIIADgDIAAgTIAAgMIAAgNQgEgIgHgDQgHgFgKAAQgQAAgKAJg");
	this.shape_52.setTransform(119.6,-15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANABQAIAAAGgCQAKgEAAgHQAAgOgUgFIgKgDQgOgCgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgHQAEgBAGAAQAEAAADACQADADAAAFIABAJIACAJQAAAFgDADQgDADgFAAQgGAAgCgDQgCgEgBgIIgZAHQgQAHAAAKIAGACQAYAEAMAIQARALAAAUQAAASgPAJQgMAHgSAAQgPAAgMgEg");
	this.shape_53.setTransform(101,-12.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_54.setTransform(93.1,-14.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AguBTQgLgJAAgjIABgQIAAgRIgBgFQAAgDACgCIACguIgBgMIgBgMQAAgMALAAQAFAAADACQANgDALgBQAMgDAJAAQAaAAAPAHQAIACAAAIQAAAEgDAEQgDADgFAAIgDAAQgSgGgRABQgJAAgKABIgWAGIABALIgCAoIAugEIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAFIgBAOIAAANQAAAYADAEQADACAOAAIATAAIAUAAIAHgBIAGgBQALAAAAALQAAAKgJABQgKADghAAQghAAgJgJg");
	this.shape_55.setTransform(76.7,-14.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgTBOQgNgggQg9IgIgdQgHgWAAgHQAAgFAEgDQADgDAFAAQAHAAADAJIAEASIAKAlQAKAnALAdIAAgCIAchNIAJgaQAGgQAHgIQADgFAFAAQAEAAAEAEQAEADAAAFQgBADgCADQgHAKgEALIgIAXIgdBOQgEANgHANQgDAHgGAAQgIAAgEgJg");
	this.shape_56.setTransform(63,-14.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AguBPQgDgDAAgFQAAgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_57.setTransform(49.2,-14.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_58.setTransform(36.6,-14.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgvBPQgDgDAAgFQAAgEADgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgCAfgBAbIABATIAAATIAAASIAiAAQAEAAAEADQACADAAAFQAAAEgCADQgEAEgEAAIgTAAIgRAAIgUACIgWACQgFAAgDgDg");
	this.shape_59.setTransform(22.3,-14.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhHBTQgDgCgBgFIABgOIABgOIAAgTIABgUIgBgVIAAgVIgBgUIgBgVQAAgEAEgFQAEgEAFAAQAGAAAJANQAaAoAVAbQAZAeAfAcIAAgNIAAgOQgBgtgEgdIgCgLQgCgHAAgEQgBgNAMAAQATAAAABGIAAAjIgBAjIgBASQgCAKgKAAQgGAAgIgIQgsgpg3hNIgBAZIAAAXIAAAaIABAbQAAAdgMAAQgGAAgDgEg");
	this.shape_60.setTransform(7.6,-14.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgvBPQgCgDAAgFQAAgEACgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgDAfABAbIAAATIAAATIAAASIAiAAQAEAAAEADQADADAAAFQAAAEgDADQgEAEgEAAIgSAAIgSAAIgVACIgVACQgFAAgDgDg");
	this.shape_61.setTransform(-7.3,-14.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgzBXQgEgDAAgFIABg/IABg/IAAgOIAAgOQAAgFADgDQADgEAFAAQADAAADACIAYgDIARgBQANAAAPADQAXAFAAAIQAAAFgEADQgDAEgEAAIgFgBQgMgFgXAAIgPABIgVADIAAAuQAUgFAKAAQAQAAASACQAKABAAAKQAAAFgDADQgEACgEAAIgRgBIgQAAQgHAAgYAFIgBBKQAAAFgDADQgDADgEAAQgGAAgCgDg");
	this.shape_62.setTransform(-19.3,-14.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhHBTQgEgCAAgFIABgOIABgOIABgTIAAgUIAAgVIAAgVIgCgUIgCgVQABgEAEgFQAEgEAGAAQAGAAAHANQAcAoAUAbQAZAeAfAcIAAgNIAAgOQAAgtgFgdIgCgLQgDgHABgEQAAgNALAAQASAAAABGIAAAjIAAAjIgCASQgBAKgKAAQgGAAgIgIQgsgpg4hNIAAAZIAAAXIAAAaIAAAbQAAAdgLAAQgGAAgDgEg");
	this.shape_63.setTransform(-35.3,-14.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgvBPQgDgDAAgFQAAgEADgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgCAfgBAbIABATIAAATIAAASIAhAAQAFAAAEADQACADAAAFQAAAEgCADQgEAEgFAAIgSAAIgSAAIgTACIgWACQgFAAgDgDg");
	this.shape_64.setTransform(-50.2,-14.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAaA0IgDgXIgBgYIAAgIIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgDAFgBQAJAAABAOIABANQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDACQgDADgEAAQgKAAgBgKg");
	this.shape_65.setTransform(-68.2,-12.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIAEgEAAQgZAAgMgPQgLgNAAgbQAAgaASgSQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBAOIgBAWQAAANACAJIAGASIADAGIABACQAAAEgDADQgDACgEABQgCgBgGgEgAgRgaQgNANAAASQAAARAHAJQAGAIAMABQAKgBAHgEIALgIQgEgbAAgOIABgKIACgMIgHgCIgFgBQgPAAgMANg");
	this.shape_66.setTransform(-79.8,-12);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgRBcQgDgDAAgEIAAgCQACgOAAgRIAAgdIAAgfIgRACQgKAAgBgLQABgKASgBIAKAAIADgRQACgXAKgMQAJgOAYABQAPAAAAAKQAAAKgNAAQgbABgCAjIgBAHIAYgBQARAAAAAKQAAAIgJACIgIAAIgZACIgBAXIABAUIAAAUQAAAVgCALQgBAJgIAAQgEgBgEgCg");
	this.shape_67.setTransform(-97.8,-14.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AggAtQgOgOgBgZQAAgYAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgOATgVAAQgTAAgNgOgAgSgVQgIAMAAAPQABAPAIAJQAHAHAKAAQAKAAAIgIQAJgJAAgPQACgpgYAAQgPAAgIAPg");
	this.shape_68.setTransform(-109.1,-12);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_69.setTransform(-127.8,-14.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgsBCQgPgRAAgWQAAgkAfgmQAZgfAZgBIAKABIAHABQAEgFAGAAQAHAAACAKQACAJAAAMQAAAEgCAEQgDAEgGAAQgHAAgDgIQgDgHgDgBQgCgBgJAAQgPAAgSAXQgaAgAAAcQAAAOAJAKQAJAKANAAQAKAAALgGIATgMQAGgFADAAQAFAAADAEQADADAAAFQAAAFgEADQgcAZgcAAQgWAAgQgRg");
	this.shape_70.setTransform(-142.6,-14.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AguBTQgLgJAAgjIABgQIAAgRIgBgFQAAgDACgCIACguIgBgMIgBgMQAAgMALAAQAFAAADACQANgDALgBQAMgDAJAAQAaAAAPAHQAIACAAAIQAAAEgDAEQgDADgFAAIgDAAQgSgGgRABQgJAAgKABIgWAGIABALIgCAoIAugEIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAFIgBAOIAAANQAAAYADAEQADACAOAAIATAAIAUAAIAHgBIAGgBQALAAAAALQAAAKgJABQgKADghAAQghAAgJgJg");
	this.shape_71.setTransform(-156,-14.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgrBKQgVgPABgTQgBgOALAAQALAAAAANQAAAJANAJQAMAJALAAQAIAAADg3QACgYAAgnIAAgLIgHAAIgMAAIgNgBQgEAAgEgDQgDgDAAgFQAAgLAPAAIALAAIAKABIAUgBIAUgBQAZAAgBAMQABAFgDADQgEAEgEAAIgHgBIgHgBIgMAAIAAANQAABPgKAlQgIAYgQAAQgTAAgSgOg");
	this.shape_72.setTransform(-170.5,-14.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgyBTQgEgFAAgEIAAggIACgrIADgsQgBgJACgUQAAgGADgBQAPgFASAAQASAAASANQAUAPAAAWQAAAcgWAOQARAHAIAJQAIAIAAAKQAAANgPAMQgJAJgLADQgXAKgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgCAHgHQAGgFAAgDQAAgFgNgGQgLgGgJgCIgLgBIgEAAIgEAAIgNgCIAAAZgAgcg/IAAASIgCAqIAQABQAPgBALgJQALgJAAgPQAAgLgMgIQgLgJgMAAIgQABg");
	this.shape_73.setTransform(-184.3,-14.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgvA/QgNgPgDgeQgCgOAAgoIABgYIABgOQADgIAHAAQAKABAAARIAABAQAABAAtAAQAqAAAAhtIAAgKIAAgJQAAgHADgEQADgHAGAAQAKAAAAAPIAAANIAAAOQAAB7hAAAQggAAgRgUg");
	this.shape_74.setTransform(-199.7,-14.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_75.setTransform(-215.4,-14.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgRAHIgoATQAGAJAJAFQAJAEALAAQAIAAAJgDQANgDAEgGQAEgGADAAQAEAAAEADQACADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_76.setTransform(-235.5,-12.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_77.setTransform(-248,-15);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_78.setTransform(-261,-14.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0066").s().p("AguBTQgLgJAAgjIABgPIAAgSIgBgFQAAgDACgCIACguIgBgMIgBgMQAAgMALAAQAFAAADADQANgEALgCQAMgCAJAAQAaABAPAGQAIADAAAHQAAAFgDADQgDAEgFgBIgDAAQgSgGgRABQgJAAgKACIgWAEIABAMIgCAoIAugEIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAFIgBAOIAAANQAAAXADAFQADACAOABIATAAIAUgBIAHAAIAGgBQALgBAAALQAAAKgJABQgKACghAAQghABgJgJg");
	this.shape_79.setTransform(242.7,17.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0066").s().p("AgSBOQgNgggQg9IgJgdQgGgWAAgHQAAgFADgDQADgDAEAAQAJAAACAJIAEASIALAlQAJAnAKAdIABgCIAchNIAJgaQAGgQAHgIQAEgFAFAAQAEAAADAEQADADAAAFQAAADgBADQgIAKgDALIgIAXIgeBOQgEANgIANQgCAHgGAAQgJAAgCgJg");
	this.shape_80.setTransform(229,18.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0066").s().p("AgvBPQgDgDAAgFQAAgEADgEQAEgDAEAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgCAfgBAbIABATIAAATIAAASIAiAAQAEAAAEADQACADAAAFQAAAEgCADQgEAEgEAAIgSAAIgSAAIgUACIgWACQgEAAgEgDg");
	this.shape_81.setTransform(215.2,18.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0066").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_82.setTransform(202.6,17.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0066").s().p("AguBPQgDgDAAgFQAAgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_83.setTransform(188.3,18.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0066").s().p("AhHBUQgEgDAAgFIACgOIAAgNIABgUIAAgVIAAgUIAAgVIgCgVIgCgUQAAgEAFgFQAEgDAGAAQAFAAAIAMQAcAoAUAbQAZAeAeAcIAAgNIAAgOQAAgtgDgcIgDgMQgCgHgBgFQAAgMAMAAQASAAAABGIAAAjIAAAjIgCASQgBAKgKAAQgGAAgIgHQgsgqg4hNIAAAYIAAAYIAAAaIAAAcQAAAcgLAAQgGAAgDgDg");
	this.shape_84.setTransform(173.6,18);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0066").s().p("AguBPQgEgDAAgFQAAgEAEgEQADgDAEAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgDAfAAAbIABATIAAATIAAASIAhAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIgSAAIgSAAIgTACIgWACQgEAAgDgDg");
	this.shape_85.setTransform(158.7,18.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0066").s().p("Ag0BXQgCgDAAgFIABg/IAAg/IAAgOIAAgOQAAgFADgDQADgEAEAAQAEAAADACIAYgDIASgBQAMAAAQADQAVAFAAAIQAAAFgCADQgDAEgFAAIgFgBQgNgFgVAAIgQABIgWADIAAAuQAVgFALAAQAPAAASACQAKABAAAKQAAAFgDADQgEACgEAAIgQgBIgQAAQgIAAgYAFIgBBKQAAAFgDADQgDADgFAAQgEAAgEgDg");
	this.shape_86.setTransform(146.7,18);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0066").s().p("AhHBUQgEgDABgFIABgOIAAgNIAAgUIABgVIgBgUIAAgVIgBgVIgBgUQgBgEAFgFQAEgDAFAAQAHAAAIAMQAaAoAVAbQAZAeAeAcIAAgNIAAgOQAAgtgDgcIgDgMQgDgHAAgFQAAgMAMAAQASAAABBGIAAAjIgBAjIgCASQgCAKgJAAQgGAAgIgHQgsgqg4hNIAAAYIgBAYIABAaIAAAcQABAcgMAAQgGAAgDgDg");
	this.shape_87.setTransform(130.7,18);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0066").s().p("AguBPQgDgDAAgFQAAgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_88.setTransform(115.8,18.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0000CC").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAKAFQAIAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADABAEQgBAMgTAIQgRAIgPAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_89.setTransform(-120.5,20.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0000CC").s().p("AAaA0IgDgXIgBgXIAAgJIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgEAFAAQAJABABAOIABAMQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDACgEAAQgKABgBgLg");
	this.shape_90.setTransform(-132.2,20.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0000CC").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_91.setTransform(-141,17.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0000CC").s().p("AgLBOIABgnIABgnIAAgmIABgnQAAgLAJAAQAMAAAAALIgBAnIgBAmIgCA1IgBAZQgBALgIAAQgKAAAAgLg");
	this.shape_92.setTransform(-147.3,17.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0000CC").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_93.setTransform(-162.1,18.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0000CC").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_94.setTransform(-173.5,17.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0000CC").s().p("AgkBTQgOgCAAgJQAAgJAJAAIANACQAJABALAAQAUAAAIgUQAFgNAAgbQgGALgIAFQgIAFgJAAQgTAAgNgNQgMgNAAgUQAAgdARgSQARgSAdAAQAKAAAGACQAHADAEAFQALAAAAANQAAAHgCANIgDAUIgCAkQgBAVgEAOQgFARgKAIQgNAKgYAAQgOAAgJgCgAgTg1QgKANAAATQAAAQAGAHQAGAHAMAAQAKAAAKgLQAJgLABgLQADgMACgZIgJgEQgEgCgFAAQgUAAgLAOg");
	this.shape_95.setTransform(-186,23.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0000CC").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgEADQgDADgDAAQgEAAgDgDgAgGg6QgEgEABgFQgBgFAEgEQAEgEAEAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_96.setTransform(-194.5,17.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0000CC").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgSAYgBQAJAAAMAFQAOAGAAAIQAAADgCADIgBAOIgBAWQAAAOACAIIAGASIADAGIABABQAAAFgDADQgDADgEAAQgCAAgGgFgAgRgaQgNANAAARQAAASAHAIQAGAJAMAAQAKAAAHgDIALgJQgEgbAAgOIABgKIACgLIgHgDIgFgCQgPAAgMAOg");
	this.shape_97.setTransform(-203.4,20.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0000CC").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAHQgKAIgGANIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_98.setTransform(-214,20.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0000CC").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_99.setTransform(-224.8,18.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0000CC").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape_100.setTransform(-235.6,20.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0066").s().p("AguBTQgLgJAAgjIABgQIAAgRIgBgFQAAgDACgCIACguIgBgMIgBgMQAAgMALAAQAFAAADACQANgDALgBQAMgDAJAAQAaAAAPAHQAIACAAAIQAAAEgDAEQgDADgFAAIgDAAQgSgGgRABQgJAAgKABIgWAGIABALIgCAoIAugEIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAFIgBAOIAAANQAAAYADAEQADACAOAAIATAAIAUAAIAHgBIAGgBQALAAAAALQAAAKgJABQgKADghAAQghAAgJgJg");
	this.shape_101.setTransform(76.7,-14.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0066").s().p("AgTBOQgNgggQg9IgIgdQgHgWAAgHQAAgFAEgDQADgDAFAAQAHAAADAJIAEASIAKAlQAKAnALAdIAAgCIAchNIAJgaQAGgQAHgIQADgFAFAAQAEAAAEAEQAEADAAAFQgBADgCADQgHAKgEALIgIAXIgdBOQgEANgHANQgDAHgGAAQgIAAgEgJg");
	this.shape_102.setTransform(63,-14.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0066").s().p("AguBPQgDgDAAgFQAAgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_103.setTransform(49.2,-14.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0066").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_104.setTransform(36.6,-14.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0066").s().p("AgvBPQgDgDAAgFQAAgEADgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgCAfgBAbIABATIAAATIAAASIAiAAQAEAAAEADQACADAAAFQAAAEgCADQgEAEgEAAIgTAAIgRAAIgUACIgWACQgFAAgDgDg");
	this.shape_105.setTransform(22.3,-14.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0066").s().p("AhHBTQgDgCgBgFIABgOIABgOIAAgTIABgUIgBgVIAAgVIgBgUIgBgVQAAgEAEgFQAEgEAFAAQAGAAAJANQAaAoAVAbQAZAeAfAcIAAgNIAAgOQgBgtgEgdIgCgLQgCgHAAgEQgBgNAMAAQATAAAABGIAAAjIgBAjIgBASQgCAKgKAAQgGAAgIgIQgsgpg3hNIgBAZIAAAXIAAAaIABAbQAAAdgMAAQgGAAgDgEg");
	this.shape_106.setTransform(7.6,-14.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0066").s().p("AgvBPQgCgDAAgFQAAgEACgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgDAfABAbIAAATIAAATIAAASIAiAAQAEAAAEADQADADAAAFQAAAEgDADQgEAEgEAAIgSAAIgSAAIgVACIgVACQgFAAgDgDg");
	this.shape_107.setTransform(-7.3,-14.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0066").s().p("AgzBXQgEgDAAgFIABg/IABg/IAAgOIAAgOQAAgFADgDQADgEAFAAQADAAADACIAYgDIARgBQANAAAPADQAXAFAAAIQAAAFgEADQgDAEgEAAIgFgBQgMgFgXAAIgPABIgVADIAAAuQAUgFAKAAQAQAAASACQAKABAAAKQAAAFgDADQgEACgEAAIgRgBIgQAAQgHAAgYAFIgBBKQAAAFgDADQgDADgEAAQgGAAgCgDg");
	this.shape_108.setTransform(-19.3,-14.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0066").s().p("AhHBTQgEgCAAgFIABgOIABgOIABgTIAAgUIAAgVIAAgVIgCgUIgCgVQABgEAEgFQAEgEAGAAQAGAAAHANQAcAoAUAbQAZAeAfAcIAAgNIAAgOQAAgtgFgdIgCgLQgDgHABgEQAAgNALAAQASAAAABGIAAAjIAAAjIgCASQgBAKgKAAQgGAAgIgIQgsgpg4hNIAAAZIAAAXIAAAaIAAAbQAAAdgLAAQgGAAgDgEg");
	this.shape_109.setTransform(-35.3,-14.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0066").s().p("AgvBPQgDgDAAgFQAAgEADgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgCAfgBAbIABATIAAATIAAASIAhAAQAFAAAEADQACADAAAFQAAAEgCADQgEAEgFAAIgSAAIgSAAIgTACIgWACQgFAAgDgDg");
	this.shape_110.setTransform(-50.2,-14.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0000FF").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_111.setTransform(-127.8,-14.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0000FF").s().p("AgsBCQgPgRAAgWQAAgkAfgmQAZgfAZgBIAKABIAHABQAEgFAGAAQAHAAACAKQACAJAAAMQAAAEgCAEQgDAEgGAAQgHAAgDgIQgDgHgDgBQgCgBgJAAQgPAAgSAXQgaAgAAAcQAAAOAJAKQAJAKANAAQAKAAALgGIATgMQAGgFADAAQAFAAADAEQADADAAAFQAAAFgEADQgcAZgcAAQgWAAgQgRg");
	this.shape_112.setTransform(-142.6,-14.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0000FF").s().p("AguBTQgLgJAAgjIABgQIAAgRIgBgFQAAgDACgCIACguIgBgMIgBgMQAAgMALAAQAFAAADACQANgDALgBQAMgDAJAAQAaAAAPAHQAIACAAAIQAAAEgDAEQgDADgFAAIgDAAQgSgGgRABQgJAAgKABIgWAGIABALIgCAoIAugEIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAFIgBAOIAAANQAAAYADAEQADACAOAAIATAAIAUAAIAHgBIAGgBQALAAAAALQAAAKgJABQgKADghAAQghAAgJgJg");
	this.shape_113.setTransform(-156,-14.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0000FF").s().p("AgrBKQgVgPABgTQgBgOALAAQALAAAAANQAAAJANAJQAMAJALAAQAIAAADg3QACgYAAgnIAAgLIgHAAIgMAAIgNgBQgEAAgEgDQgDgDAAgFQAAgLAPAAIALAAIAKABIAUgBIAUgBQAZAAgBAMQABAFgDADQgEAEgEAAIgHgBIgHgBIgMAAIAAANQAABPgKAlQgIAYgQAAQgTAAgSgOg");
	this.shape_114.setTransform(-170.5,-14.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0000FF").s().p("AgyBTQgEgFAAgEIAAggIACgrIADgsQgBgJACgUQAAgGADgBQAPgFASAAQASAAASANQAUAPAAAWQAAAcgWAOQARAHAIAJQAIAIAAAKQAAANgPAMQgJAJgLADQgXAKgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgCAHgHQAGgFAAgDQAAgFgNgGQgLgGgJgCIgLgBIgEAAIgEAAIgNgCIAAAZgAgcg/IAAASIgCAqIAQABQAPgBALgJQALgJAAgPQAAgLgMgIQgLgJgMAAIgQABg");
	this.shape_115.setTransform(-184.3,-14.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0000FF").s().p("AgvA/QgNgPgDgeQgCgOAAgoIABgYIABgOQADgIAHAAQAKABAAARIAABAQAABAAtAAQAqAAAAhtIAAgKIAAgJQAAgHADgEQADgHAGAAQAKAAAAAPIAAANIAAAOQAAB7hAAAQggAAgRgUg");
	this.shape_116.setTransform(-199.7,-14.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0000FF").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_117.setTransform(-215.4,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:-203.4}},{t:this.shape_35},{t:this.shape_34,p:{x:-186,y:23.4}},{t:this.shape_33,p:{x:-173.5,y:17.6}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-141,y:17.9}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:202.6,y:17.8}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4,p:{x:-261,y:-14.8}},{t:this.shape_33,p:{x:-248,y:-15}},{t:this.shape_76},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_30,p:{x:93.1,y:-14.8}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_34,p:{x:149.1,y:-9.2}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_36,p:{x:-252.8}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape}]},10).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.8,-33,545.8,67.3);


(lib.verbArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgtBLQgEgEAAgEIAAgdIACgmIACgpIABgbQABgFADgBQANgEARAAQAQAAAQAMQASANAAAUQAAAZgTAOQAOAGAHAHQAIAIAAAJQAAAMgNALQgJAIgKAEQgVAIgiAAQgEAAgEgEgAgdAnIAAAUQAZAAAPgHQAHgDAHgFQAFgFAAgDQAAgEgMgGQgJgEgJgDIgKgBIgDAAIgEAAIgMgBIAAAWgAgZg6IAAASIgCAmIAPABQANgCAKgHQAKgJAAgOQAAgJgLgIQgKgIgKAAIgPAAg");
	this.shape.setTransform(61.9,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgxBKQgDgDAAgEIgBgXIAAgXIACgaIACgbIgBgPIgBgOQAAgGADgEQAEgFAGAAIAYACQANACAIAFQAoAVAAAeQAAAPgOAKQgLAJgQAFQAfAQAPATQACADAAADQAAAEgDADQgDADgEAAQgDAAgEgDQgggggngLIABATIABAUQAAAEgDADQgDADgEAAQgEAAgDgDgAgegrIAAAMIgBATIgCATIAEAAIAEAAQAZAAAMgHQAFgCAFgFQAFgFAAgEQAAgOgPgLQgNgLgQgCIgOgBg");
	this.shape_1.setTransform(49.1,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBADgEIACgpIgBgKIgBgLQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACACAAAFQABAIgKACIgXACIgsADIAAAOIgBALQAAAVAEAFQACACANAAIARAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgJABQgJACgdAAQgeAAgJgIg");
	this.shape_2.setTransform(36.6,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgRBHQgMgegOg3IgIgaQgGgVAAgGQAAgEAEgDQACgCAEgBQAIABACAHIAEARIAJAiQAJAjAJAbIABgDIAZhFIAIgYQAGgOAGgIQADgEAFAAQAEAAADADQADADAAAEQAAADgCADQgGAJgEAKIgHAVIgbBGQgEANgHAMQgCAGgFAAQgIAAgDgIg");
	this.shape_3.setTransform(24.2,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(2,1,1).p("AgZgjIgDBHIA5AA");
	this.shape_4.setTransform(2.9,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(2,1,1).p("AhNAqQBWh8BFA8");
	this.shape_5.setTransform(7.8,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.verbArrow, new cjs.Rectangle(-1,0,70.9,31.9), null);


(lib.TheKidsWantSlimtoWin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKALQgEgFAAgGQAAgFAEgFQAEgEAGAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape.setTransform(148.8,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLAAQgNAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_1.setTransform(139.3,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(129.2,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAHAjIgEgdIgEgaIgKAXIgSAyQgBAFgEACQgDAIgJAAQgIAAgKgkQgEgUgEgfIgDgTIgBgSQAAgFADgDQAEgEAEABQAKAAACAKIADASIABASIAIA1QANgkAPgyQAEgNAJAAQAKAAADAPIAIAsQAEAeAFARIAJghIAPhCQACgHAJAAQAEAAAFADQADAEAAAEIgBAGQgJAogQAxQgDAMgIALQgEAGgIABQgNgBgIghg");
	this.shape_3.setTransform(117,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_4.setTransform(94.1,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_5.setTransform(81.8,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_6.setTransform(59,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_7.setTransform(45.9,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNBZIABgtIACgsIAAgrIABgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_8.setTransform(38.7,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgwBUQgXgKAAgSQgBgFAEgEQAEgDAFAAQAGAAAEAHQAHAJAFAEQAKAGAUABQASAAAQgJQAVgLAAgSQAAgQgSgIQgPgIgUAAQgUgBgNgHQgSgKAAgSQAAgWAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgDQgMgCgHAAQgSAAgNAJQgOAKAAANQAAALASADIAZADQAcADAQAPQAPANAAAUQAAAegbARQgYAPgdAAQgXAAgSgJg");
	this.shape_9.setTransform(26.7,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_10.setTransform(4.5,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAeA7IgEgaQgBgOAAgNIAAgLIABgLQAAgbgKAAQgOAAgLARQgLAOgHAWIgBAMIgBAMIABALIABALQAAAFgDAEQgEADgFAAQgGAAgDgDQgDgEgBgFIAAgLIgBgLIACgiIABgiIAAgMIAAgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAVAAQATAAAIARQAFAMAAAWIAAAMIAAALQAAAKADAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_11.setTransform(-7.6,3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_12.setTransform(-20.8,4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAIAjIgGgdIgCgaIgKAXIgTAyQgBAFgEACQgEAIgHAAQgKAAgIgkQgFgUgEgfIgDgTIgCgSQABgFADgDQADgEAGABQAJAAACAKIACASIACASIAHA1QAOgkAPgyQAEgNAJAAQAKAAADAPIAIAsQAFAeADARIAJghIAQhCQACgHAIAAQAFAAAEADQAEAEAAAEIgBAGQgKAogPAxQgDAMgIALQgFAGgHABQgNgBgHghg");
	this.shape_13.setTransform(-35.7,4.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_14.setTransform(-58.2,3.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgrBUQgRgSAAgbQAAggASgTQAQgUAbAAQAOAAAIAEIAMAJQABg0ACgRQACgLAJAAQAMAAAAAMQAAAQgFA7QgCAQABATQgBApAEAUIAAADQABAFgEADQgDADgFAAQgIAAgDgLQgJAGgJAEQgJADgKAAQgZAAgRgQgAgcACQgLAMAAAZQAAAQAMALQALALAPAAQAKAAAGgEIAOgKIADgDIAAgWIAAgOIAAgPQgEgJgIgEQgHgFgLAAQgUAAgKALg");
	this.shape_15.setTransform(-71.3,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_16.setTransform(-81.9,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAhBeQgHgNgNgRIgUgdIgWAQIgCAlQAAAFgDAEQgDADgGAAQgMAAAAgRIACgeIABgeIABgqIAAgqIAAgNIgBgNQAAgGADgDQAEgDAFgBQAFABAEADQADADAAAGIAAAOIABAMIgBAoIAAApQAQgNAPgOIAbgbQAEgFAEABQAFAAAEADQAEAEAAAFQAAAFgEADQgPASgWATIAbAkQATAaAAAHQAAAFgEAEQgEAEgFgBQgHAAgDgGg");
	this.shape_17.setTransform(-91.6,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_18.setTransform(-113.2,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAhBcQgDgJgCgTQgCgSAAgLIAAgKIAAgJQABgXgMAAQgPABgMANQgGAHgLAUQAAAvgDAIQgEAIgHAAQgFgBgEgDQgEgDAAgFIABgFQABgEAAgOIABgSIABhZIAAgVIgBgLIgBgLQAAgGAEgDQADgDAFAAQAKgBACALQACAMAAAJIgBAbQgBAOAAANIAAALQALgNALgIQALgGAMAAQAUAAAIANQAFAKABAUIABAYIACAZQACAPADAKIAAAEQAAAFgEAEQgDACgGAAQgIABgDgKg");
	this.shape_19.setTransform(-127.3,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_20.setTransform(-142.2,0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0066").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLAAQgNAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_21.setTransform(139.3,3.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0066").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_22.setTransform(129.2,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0066").s().p("AAHAjIgEgdIgEgaIgKAXIgSAyQgBAFgEACQgDAIgJAAQgIAAgKgkQgEgUgEgfIgDgTIgBgSQAAgFADgDQAEgEAEABQAKAAACAKIADASIABASIAIA1QANgkAPgyQAEgNAJAAQAKAAADAPIAIAsQAEAeAFARIAJghIAPhCQACgHAJAAQAEAAAFADQADAEAAAEIgBAGQgJAogQAxQgDAMgIALQgEAGgIABQgNgBgIghg");
	this.shape_23.setTransform(117,4.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0066").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_24.setTransform(94.1,4.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0066").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_25.setTransform(81.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:45.9}},{t:this.shape_6},{t:this.shape_5,p:{x:81.8}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:129.2}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_7,p:{x:-81.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_5,p:{x:4.5}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_2,p:{x:45.9}},{t:this.shape_6},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape}]},7).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.8,-19.4,307.7,38.8);


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


(lib.CaratforInfinitiveSubj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgFA9QgDgCAAgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgIABQgSAAgKgDQgHgCAAgGQAAgEACgCQADgDADAAIAOABIANABIAQAAIANAAIAUABIATABQADAAACACQADADAAADQAAAEgDADQgCACgDAAIgTgBIgUgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape.setTransform(-10.9,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_1.setTransform(-22.3,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgkBAQgHgIgBgaIABgMIAAgNIgBgFIACgDIACgkIgBgJIgBgJQAAgKAIAAQAEAAACADIATgEIAQgCQAUAAAMAFQAFADAAAFQAAAEgBACQgDADgEAAIgCAAQgOgFgNAAIgOABIgSAFIABAIIgBAgIAjgEIAUgBQADgBADADQACADAAADQABAHgIABIgUACIglADIgBALIAAAKQAAASADADQACADALAAIAPgBIAPAAIAFgBIAEAAQAJAAAAAJQAAAGgGACQgIACgZgBQgaAAgIgGg");
	this.shape_2.setTransform(-32.7,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AghA6QgQgMAAgPQAAgLAIABQAJAAAAAKQAAAHAKAGQAJAHAIAAQAGAAADgqQABgTAAgdIAAgJIgFAAIgJAAIgKgBQgEAAgCgCQgDgCAAgEQAAgJAMAAIAIAAIAIABIAPgBIAQgBQATAAAAAKQAAADgCADQgDACgDABIgFgBIgGAAIgKAAIABAKQAAA8gIAdQgGASgNAAQgOAAgOgKg");
	this.shape_3.setTransform(-43.8,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_4.setTransform(-54.5,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgkAxQgKgMgDgXIgBgpIAAgTIACgLQACgGAFAAQAIAAAAAOIAAAxQAAAxAiAAQAhAAAAhTIAAgIIAAgHQAAgFACgEQACgFAFAAQAIAAAAALIAAALIAAAKQAABfgyAAQgYAAgNgPg");
	this.shape_5.setTransform(-66.4,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape_6.setTransform(-78.6,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0000FF").ss(2,1,1).p("AAqhTIAAA/AgWBUQg8hKB8hdAgdhPIBHgE");
	this.shape_7.setTransform(-83.7,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

	// Layer 6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_8.setTransform(-37.2,-16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000017").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_9.setTransform(-37.2,-16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00002E").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_10.setTransform(-37.2,-16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000046").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_11.setTransform(-37.2,-16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00005D").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_12.setTransform(-37.2,-16.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000074").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_13.setTransform(-37.2,-16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#00008B").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_14.setTransform(-37.2,-16.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0000A2").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_15.setTransform(-37.2,-16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0000B9").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_16.setTransform(-37.2,-16.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0000D1").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_17.setTransform(-37.2,-16.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0000E8").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_18.setTransform(-37.2,-16.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0000FF").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_19.setTransform(-37.2,-16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_8}]},8).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3,1,1).p("AKQCSIwLAAIkUkj");
	this.shape_20.setTransform(65.6,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(20));

	// Layer 3
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3,1,1).p("AAACmIAAlL");
	this.shape_21.setTransform(76.1,45.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(20));

	// Layer 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_22.setTransform(76.1,69);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.9,-34.7,221.6,111.7);


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
	this.shape.graphics.f("#FFFFFF").s().p("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");
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
	this.shape.graphics.f("#FFFFFF").s().p("EgkBAEuQgPgbgBgUQgBgUAOgQQAPgQAigLQgogegBgRQgBgRAwgZIAJAAQAEAKgDgOIAgAAQgEgEgXAAQAEgKAHgJQAUgbAhAAQAaAAAOAFIAAABQAFAGANAAQADAAAZgTQAZgUAGAAQALAAAWAYIAHAIIAHAGIAIAIIADABIAIgHIAAgGIAQAAQgEgEgWAAQAEgKAHgJQAUgbAgAAQAaAAAOAFIAAABQAGAGANAAQACAAAZgSQAZgUAGAAQALAAAXAXQARASAFAEIACABIAIgHIADgCIAIgHQAKgIAJgDIAAgBQAKgEANAAQAaAAAOAFIAAABQAGAFANAAQACAAAZgSQAZgUAGAAQALAAAXAYQAWAWACAAIATgPQAKgIAJgEQAIgEAHAAQAiAAApATIAQggQAQghAPAAQAVAAAOAGQAPAFAJAAQALAAAAgFQgWgYAAgNQAAgeArAAQAeAAAAAKQAAAFgKAGQgLAHAAAGQAAAKANADQATAEAJAGQgaAEAAANQAAAHAMAIQAOAKAYAAQAJAAAHgXQAHgYAPAAQATAAAGANQAGANADAAIAcgIQARAAANAYIAOAYQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAhWAgAAQAWAABIArQABAAACgkQACgkAQAAQAJAAAQAOIALAFIAIAGQgBAJAAAHIABADIACABQAJAAgBgZQADgaAVAAQA9AAAAAWIgDAPQAAAIAPACQASACAIAMQACAEgBALQgBAKAEAFQAFgPAEgJQAJgSAXAAQAcAABHAlQAIAAAFgnQAZgmAiAAQAGAAAJASIAEAKQADAJAbAAQAPAIAJAQQAHAPACAAQADAAAWgWQAVgXAUAAQAZAAAYAcQAXAbAEAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQgDgTAJgSQALgYAaAAQAHAAAiATQABAEAFAAQAIAAgCgDIgDgDIgDgDIAFgTQACgDANgHQAOgHAJAAQASAAAVANQAGAAADgFQADgFAEAAQAHAAANAHQAEAAAEgFQAFgFANAAQApAAAPAMQAIAGAEAGQAJAAgCgHQAHgIA5AAQARAAADAdQADAfAYAAQAGAAACgIIAEgSQAHgaAlAAQAbAAAVAaQAVAZANAAQAKAAAAgbIgDgcQAAgOAMgLQARgRAqAAQAUAAA4AiQALAAAAgIQgJgTAAgNQAAgSALgNQANgRAZAAQAYAAAKARIAHALIAAACQAAAIANAAQAFAAAJgRQAJgSAVAAQALAAAWAQQAWAPAUAAQALAAAAgKQgGgTAAgQIAAgLQAAgFAGAAQBYAAgNgGQAAgKgNgMQgNgNAAgCIACgJQAFgIAQAAQAOAAAOAJQALAHAAAFQAAAJgTAOQgDAJgFAGQgDADAAAHQAAAKAJACQASAEAMgDQAJgCAPAEIANAFIAWAOQASANAKAAQAKAAACgMQACgMAKAAQANAAAHAQQAIAQAhAAQASAAAEgCQALgGAFgXQAHgiAWAAQAmAAARAXIARAXQAIAAACgPQADgPAZAAQBIAAAdAsIAUAeQAMANAWAAQAKAAAKgFQAKgFAAgDQAAgDgbgYQgbgYAAgLIACgIQAEgHANAAQAfAAAdASQATALAQAEQAIACAIAAQAcAAAAgMQgEgQAAgJQAAgXAKgGQAmgaAZAAQAQAAACAZQABAYARAAQATAAAFgLQAFgLAUAAQAYAAAEADIAFgBIAAABIAHgBQAKAAgJgMQADgHgEgEQgDgEALgDQAMgEBFAFQBFAEAhAYQAWAPAFAOIAAgPIAFABIALABQAcAAAAgMQgEgQAAgJQAAgXAKgGQAmgaAZAAQAQAAACAZQABAYARAAQATAAAFgLQAFgLAUAAQAYAAAEADIAFgBIAAABIAHgBQAKAAgJgMQADgHgEgEQgDgEALgDQAMgEBFAFQBFAEAhAYQAcATAAASQAAAOgVAdQgIAMgnATQARAPAoAfQAfAcAAAUQAAAOgJAHIgOASIgJAAQhSARgygIQgygIgHgNQgLgWgCAAQgCADAAAGIgBgBQAAgGgGAAQgDAAAAAEQAAAEADADQgMA4gsAAQgaAAgVgcQgQgdgBAAIgDABIAAAJQAFAGAAAHQAAAKgQAMQgVAPggAAQgOAAgLgHIgGgFIgFgFQgJgSgCAAIAAANIAKAQIAAAAIgMAQIgJAAQhSAQgygIQgygHgHgNQgLgWgCAAQgCADAAAGIgBgBQAAgGgGAAQgDAAAAAEQAAAEADADQgMA3gsAAQgaAAgVgcQgQgcgBAAIgDABIAAAJQAFAGAAAHQAAAJgQAMQgVAPggAAQgWAAgOgRQgJgSgCAAIgCABQgKAYgOAAQgcAAgMgRQgHgRgDAAQgYAggnAAQgkAAgPgbQgHgcgEAAIgCABIAAAKQACAEAAAFQAAALgTAeQgEAMgLAIQgUARgtAAQhGAAgshCQgOgUgJgZQgHgSAAgEIgDAAIgEAAIAAAIQAEAJgRAeIgMATQgPALglAAQghAAgJgKIgEgGIgBgCIgDgCIgDABIAAAGIACACIAEAMQAAAHACAMQAAANgOALQgXASgwAAQhJAAAAgiQAGgJAAgLQgCgOgHAAIgEAAIAAAYQAAAIglAJQg2AWgjAAQgSAAgJgSIgLgTIgCABIAAAIQAEAFAAAFQAAAIgjATQgkAUgSAAQgRAAgNgLQgJgLgCAAIgDABIAFARQAAAYhFAAQgtAAgDgGQAEgIgIgDQgNAQgLAEQgJADgXAAQgSAAgHgWQgHgWgDAAQgEAAgCAIQgEANgEAGQgRAbg5AAQgNAAgXgJQgVgJgFgHQgRgigDAAQgIANgKANQgWAbgiAAQgrAAgdggIgbgnQgOAtguAAQgJAAgLgJIABgDQgIgVgHAAQgEAAAAAEQAAACAGAIIgCAAIAAAGQACAFADADQgRAbgmAAQgWAAgLgTQgHgTgDAAIgCABIAAAHQAHARgbASQgcATgoAAQgWAAgNgMQgNgMgDAAQgIAAgCADIgIAAQAAgIgEAAIgSAQQgYAQgCAAQgIAAgIgbQgHgcgFAAQgGAAgEAJIgJASQgQAbgnAAQgoAAgSgQQgLgRgGAAIgDACQAAADACAHQAAAMgCAYQgDAKgSAMQgVANgVAAQgLAAgLgIQgEgCAAgFQAAgCgVgFQgLgDgEgLQgCgMgDgDQgIAlg+AAQgbAAgHgJIgDgNQADgVgIgEQgGAJgOAbQgPAWgZAAQgXAAgOgjQgKgkgBAAIgDABQAAAUgQAPQgqAfgTAAQgFAAgJgKQgHgLgBAAIgDACQAFAPgWAUQgXATgYAAQgdAAgTgbQgFgWgKgIIgvA5QgYAWguAAIgWgBQgagEgIgNQgEgSgGAAIgDABQgPAhgMAGQgHADgpAAQgaAAgVgRQgIgCgGgPIgBgCIgDABIAAAIQACACAAAIQAAAHgPAHQgEAGgfAFIgBAAIAAgDQgUgDgKgJIgEgFQgEgSgGAAIgDABQgPAhgMAGIgCABIgQACIgeAAQgaAAgVgRQgIgCgGgPIgBgCIgDABIAAAIQACACAAAIQAAAHgPAHQgGAJg8AGIAAAHIAAAEIgEgEIgBgBIgBgGQgEgMgEAAIgDABIgGAMIgDAGQgKARgIAEIgCABIgQACIgeAAQgaAAgVgRQgJgCgFgPIgCgCIgCABIAAAIQACACAAAIQAAAHgQAHQgGAJg9AGIgUABQgrAAgNgXgAb+iMIACADIgBgEIgBABgA/qE3QAGgDAEgFIAJgPIADgEIABAEQAEAHAIAFIAAADIgFAAQgQAAgKAJIgEgBgA7+EMQAGgDAFgFIALgTQAEAKAJAGIAJAFIgJgCIgFAAQgPAAgLAJIgEgBgA7PEHIAIACIgDABIgFgDgA/WA4IAMAAIgFAGIgHgGg");
	this.shape.setTransform(7.3,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(7.6,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Wave1, new cjs.Rectangle(-225.3,-34.9,465.9,66), null);


(lib.Slim_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s().p("Ag1AmIAAgYQgHgRAAgIIABgHIAFgBIAigCIAVgNIAYAGQALAAAGgJQAHgKAFAAIAGAAIABACQgMATACARQgIgHgNgBQgZABgUAQQgTAQAAALQAAAKAIAJQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgDAAQgHgLgQABg");
	this.shape_4.setTransform(15.6,-26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAUIAAgBQgFgRAEgPQAAgFAIgCQAIgDAGAKQAFAIgDAPQgDgEgEAAQgIAAAAAJQAAAHAHAAIADAAIAAAAQgFADgEAAQgFAAgEgFgAAKASIAAgBQgEgHABgGQgBgOAJgMQAEgFAFAGQgBAPgEAMIgCAAQgHAAAAAFQAAAHAEABIgBAAIgDgBg");
	this.shape_5.setTransform(18.4,-24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AgQElQAJgNAAgGIgBgEIgDgBQgfASgGADIAAgBIAQgPIgDgEIgQAHIgBgBIALgLIADgDQARgSADgHIAAAAIABgCQABgIAAgIQAAibABgQQANhxAAg7IgDgDQgGAUgBAuIAAATIgKAOIgPAcQgNAOgkgDQgjgCgXgNQAAgRASgVIADgDQAggfAOgQQAkgoAMgHQA+gkAWAAQAOAAAIAIIAJAHIAAAAIACAAQAOAAgCgcQAAgKgCgGQAJAAAAgDQAAgCgHgBIgFgBQgEgBgBgDQgEgGAAgEQAAgMAXAAQAIAAAOALQAKAAAAgKQgKgKAAgKQAAgGAQgOQAUgRAXAAQAIAAACAEIABABIgKANIgDgEQgEgGgJAAIgJADIgGAFQgDAHABAKQAAAIABAIQAGAZAbgLIACgDQAIgFAEAFIAEAFIgFAGQgFAJgSgDQAAADALAAQALAAAFgFQAAALgFAFQgFAFgDAFQgHADgIAAQgSAAgJgPQgFgQgCAAIgCABIgBAGQAAAIAFAIQAJAOAXAAIAPgBQgDATgBAMQgBADgVAAIgNgIQgPgEgDgDQgOgWgDAAIgDABIAAAGQAEAJAKAIQgDAEgCAJIgBARQAAALAFAKIAMAZIAJAYIAAALIAAABQgRABgNADQgGg1gaAAQgSAAgXANIgPAKIABgTQAKgVAAgCIgEgDQgOAQgBAcIAAAvQgBAMgJAhQgHAdABARQgDAPgBBNIAABFQAAAEgEAGIgBANQgBAIAOAGIA1ASIgTAAQgZgMgIAAIgGABQAFATgeAKgAArEEIgBAAQgDgHgLgLQgNgMgEgBIACgYQACgCAKgMQASgWAKgYIARglIASgxQAGgTAMgRIAKgNIADgDQACgBAJABQAKABAFgGIAAgCIgMAAQgHAAgaAIIgWAJIABgrIAAAAIAYgHIAQgEIAGgCIAFgCIAUgEIANAAIABAAQAVABAAATQAAANgcAkIgVAdIAAAAIAAABQgQAXgHARIgbA8QgDAIgVAYQgTAWAAAGQAAALANALQAKAKAEABQAXAHAFgJQADgGAVAMQAGADAAACIgCAFIgRgBQgpAAAAAIIAAABQgJgEgQgFgAh4DnQg2ghgOAAQgNAAAAAEIADAIQAAACgJADQgKAEAAAFQAAAFAFAGQAFAGAAAGQAEAKgPAAQgMAAgPgLQgNgLAAgFQAAgJARgLQASgMACgLQgGguAOAAQAQAAATAmQARAMAvACQAHADAMAQQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAIABgcIgDglIACgBQAXAAAFgCIAIgFIAMgEIgBAeIAAAlIAHAnQAAAXgbAAIg2gggAC2DnIgRgQQgUAQgQAFIAAgBQAgghAAgCIgBgCIABgGQgJg5AAgJQABgYgMglQABgCAAgEIAAgDIAPgVIAFgHQAPBAAAANQgCAgADAIIADAVIACAIIgBADQAAAOAYASQAaAUAbACIgTAAQgXgMgGAAIgCABIgBACQAAAGAoARIgNAAQgIAAgQgLQgQgMgEAAIgDAAIgBADQAAABAkAbIgBACQgUgHgUgRg");
	this.shape_6.setTransform(-0.3,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AhLBWIgSgMQgPgLgBgEIAAhQIADgcIAIAGQAaALAeAAQAfAEAUgYIAEAAIAFAAIgDAJIAAA4IgDgCIgPABIgBgRIgDAAIgDAAIAAAKIACAIQAAAAAAAAQgBABAAAAQABABAAAAQAAABABABQABANAAAWIAAAVIgRAGQgEACgCAEQgEACgXAAIgTgBgABEhFIABAAIApgRIAAAtQgDANABAZIgYAEIgeACIAOhIg");
	this.shape_7.setTransform(-3.9,7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbE/IAAgIQAEgGAAgDIAAgBQgWAPgMAAIgFAAIAAgIIAFgGIgQABQgPABAAgFQAAgDAIgCQAOgCAHgDIACgCIgEAAQgQABhphBIgPAAIABAFQAAAIgSAIQAKAOAAAIQAAARgRAAQgTgBgQgQQgMgMAAgGQAAgMAQgLQASgMAEgMQgDgTAAgKQABgTAOgBQARABAKAPQAFAIAEALQAIAIAfAHQAiAGAHAFIAAgSQAAgQgCgFIAAgKIABgBQgYgDgbgWIAAiAQACgQAPgRQAKgNAJgJIArgtQAQgRAfgXQAughAhAAQAUAAAIAHQAEADACAFQAFgGAAgPIgCgMIAAgFQgHgDgDgHIgCgMQAAgDARgOQADgCAAgQQAAgPgEgHQgEgGAAgHQAAgOAPAAQAeACAJgIQAJgHAEgBQAMABAJAFQALAAAIgJQAIgKALAAQALAAgBAIQAAAFgKASQACAOgDAEIgDAEQABARgBAKQgCAJgEAKQAFgBACAIIAAADQABAIgCAJQgCAKgJAOQgEAWgBAPQgCAGgOAAQgXABgSgOIgHAZQAAAJANAcQANAbAAAOIAAADIAEAAQAbAAAAAbQAAAHgOAXIgMARQAFADAGAZQAIAdAAASIAAAnIAGAmIAAABIATAcQAFAGAfAKQAcAIAAAHQAAAEgXgBQAKAHAAADQAAAGgbgDIgCgBQADAFAAABQAAAGgHAAQggAAgdglQgYASgQAAQgIAAAAgEIAkgnIABgKQgJg0AAgKQgKgtAAgRIAAgCIAAAAIAAgBIgBACIgOAeQgHAMgVAxQgGANglAtQAAAOASAKQAXAOAGgJQAGgKAYANQAIADAAAHIAAADQgFAEgCAAIgDABIgtAEIgHAEQAHAEAAAEQAAADgQAAQgXAAgKgFQgIgGgHgBQAAAMgKAJQgKAKgPAAgAgLEgIAAAEQAAAGgIANIgBABIABAAQAegKgFgTIAGAAQAIgBAZAMIAUAAIg1gSQgOgGACgIIAAgNQADgGAAgEIAAhFQAChNACgPQAAgRAHgdQAIghABgMIAAgvQABgbAPgRIADADQAAACgKAWIgBASIAPgJQAYgOARAAQAbAAAFA1QAOgDARgBIAAAAIAAgMIgKgXIgMgaQgFgKAAgLIACgQQABgKAEgEQgKgIgEgJIAAgFIADgCQACAAAPAWQADADAOAEIANAIQAVAAACgDQAAgMADgTIgPABQgWAAgJgOQgFgIAAgIIAAgGIADgBQABAAAFAQQAJAPASAAQAJAAAHgDQACgFAGgFQAFgFAAgLQgGAFgKABQgMgBAAgDQATADAFgIIAEgHIgDgFQgEgFgIAFIgDAEQgbAKgFgZQgCgIAAgHQAAgKADgIIAFgFIAJgCQAJAAAEAFIADAFIALgOIgBgBQgCgEgIAAQgYAAgUASQgQANAAAGQAAAKAKAKQAAAKgKAAQgOgLgIAAQgXAAAAAMQAAAEAEAHQABACAEABIAGABQAHABAAACQAAAEgJAAQABAFAAAKQADAcgPAAIgBAAIgBAAIgIgHQgIgHgPgBQgVAAg/AkQgMAHgjAoQgPAQgfAfIgDAEQgSAUgBAQQAXAOAkADQAjACANgOIAPgcIAKgNIABgUQAAguAGgUIADAEQAAA6gMBxQgBARAACaQAAAIgCAIIAAACIAAABQgDAGgRASIgDADIgMALIgCACIADgBIAQgGIADADIgQAPIgBABIABAAQAGgDAfgSgABzAZIgDADIgKANQgMARgGATIgSAxIgQAlQgKAYgSAXQgKALgDACIgCAZQAEAAANAMQAMALADAHIAAAAQAQAFAJAEIABABIAAgCQAAgHApgBIARABIACgFQAAgCgGgDQgWgMgDAHQgEAIgYgHQgDAAgLgLQgMgLAAgLQAAgGASgWQAVgYADgHIAcg8QAGgRAQgYIAAgBIAAAAIAVgdQAcglAAgLQAAgUgUgBIgBAAIgOAAIgUAFIgEABIgHACIgPAEIgYAHIAAAAIgBArIAWgJQAZgIAIgBIALAAIAAADQgFAGgJgBIgIgBIgEABgAh7D5IA2AgQAaAAAAgXIgGgmIAAgmIAAgeIgMAEIgHAFQgGADgXAAIgCAAIAAAAIADAlIAAAcQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQgMgQgGgDQgvgCgRgMQgUgmgQAAQgOAAAHAuQgDAMgSAMQgRALAAAIQAAAGAOAKQAOALAMAAQAPABgDgLQAAgFgFgHQgFgGAAgFQAAgEAJgFQAJgDAAgCIgCgIQAAgEANAAQAOAAA2AhgAAFEGQAFAGAQAGIgTgUIgCAIgACzD5QAUARAUAHIADAAIgCgBQgkgcAAgBIAAgDIADAAQAEAAAQAMQARAMAHAAIANgBQgngQAAgHIAAgBIADgBQAFAAAXALIAUAAQgbgCgagUQgYgSAAgOIAAgCIgBgJIgDgUQgDgJABggQABgNgQg/IgEAGIgQAVIABADQAAAEgCACQAMAlAAAZQgBAIAJA5IAAAGIAAACQAAACgfAiIgBAAIABAAQAQgEATgRIASAQgAgnB7QAAAWgBADIgFACQAEASgCAhQAAAKAGAvIAAAIIALgRQADgRgBgaIAAgvQgBgnABgjQgCACgKAAIgGgBIADAlgAAMBTQgCATAABdIgBAXQAZghAHgOIAUgxIAVg6QAIgWAHgJQgTAIgDAAIAAAXQAAAPgvgBIgOgCIgCAHgAiUAwIAABRQAAAEAPAKIASANIATABQAXAAAEgCQACgEAEgDIARgGIAAgVQAAgVgBgOQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAIgBgIIAAgLIACAAIADAAIABARIARgBIACADIABg6IACgJIgFABIgEgBQgUAZgggEQgegBgagLIgIgFgAAOBJIAegDIAYgEQgBgZADgNIAAgsIgoAQIgCAAIgOBJgAgaACIgFAHIALABIADgTIgJALgAA0g+QgPAIgGAEQAAAigBAIIAAABQAFgDAMgFQAUgIAFgBIAEABIAAAIQAKgCAWgIIAFgCQgJgwgRAAQgMAAgXANgACqkEQgJACAAAFQgDARAFAQIgBABQAIAJAKgHIABAAIgDAAQgHABAAgIQAAgJAHAAQAGAAACAEQAEgQgGgIQgFgIgGAAIgDABgAB9jYIADAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgIgJAAgKQAAgLATgQQAVgRAZgBQANABAIAHQgCgRAMgTIgBgCIgGAAQgFAAgHAKQgGAJgLAAIgYgGIgWANIgiACIgFABIgBAHQAAAIAHASIAAAYIAEAAQANAAAGAKgADGkGQgIAMABAPQgBAGADAIIABAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQgDgBAAgHQAAgFAGAAIADAAQADgNABgPQgCgDgDAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AgIBUQgIgPgPAAIgEAAIgFgEQgZgTgVgYIgLgPIgCgEQAWgIAKAAQAPAAAIAGIAIAHIABAAIABAAIAEAAIgBgDIAEgGQACgFACgJQACgKAAgGQAJADABgDQABgDgHgCIgFgDQgDgCgBgDQgCgHABgEQADgLAWAGQAHACALAOQAJADADgKQgHgMACgKQACgGATgJQAYgLAWAGQAIACABAEIABABIgOALIgCgFQgCgHgJgCIgJAAIgHAEQgFAGgCAKQgCAHAAAIQgBAaAcgEIAEgCQAJgDACAGIACAGIgFAFQgHAGgSgHQgBADAMADQAKADAGgEQgDAKgGAEQgGADgEAEQgHABgJgCQgRgEgFgRQgBgQgBAAIgDgBIgCAGQgCAIADAJQAFAPAWAGIAOADQgHARgEALQgCADgUgFIgLgMQgNgHgCgEQgIgYgCgBIgDABIgBAFQABAJAGALQgBACgDAEIgDAFQgCAEAHAFQgGACALgCQABAKAEAJIAMAaIAGAOQgSgFgRgHg");
	this.shape_9.setTransform(11.9,-15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEAVIgBgBQgBgHADgGQACgOAMgKQAFgDADAHQgFANgGAMIgDgBQgGgCgBAGQgCAGADACIAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAgaAPIAAgBQAAgQAIgPQABgFAJAAQAIgBADALQADAJgGAOQgCgEgFgCQgHgCgDAJQgBAHAGACIADAAIAAABIgGABQgHAAgEgIg");
	this.shape_10.setTransform(19.9,-21.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#996600").s().p("AgrAkIgDAAQgEgNgPgDIAGgXQgDgSACgJIADgFIAFgBIAiAHIAXgHIAWANQAKACAJgHQAJgIAFABIAFACIABACQgRAQgCAQQgFgJgOgDQgXgGgYALQgXAKgDAKQgCAKAFALIgBACIAAgBg");
	this.shape_11.setTransform(18.2,-24);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AALByIgGgPIgLgZQgFgJAAgLQgMACAGgCQgHgEACgFIADgFQACgEADgCQgHgLgCgJIACgGIADAAQACAAAJAZQACAEAMAIIAKALQAVAFACgCQADgMAIgRIgPgDQgVgGgFgQQgDgIACgIIACgFIADAAQABAAABAQQAFAQARAFQAIACAIgBQADgEAHgEQAGgDADgKQgGADgLgDQgLgBABgEQARAHAHgGIAGgFIgCgGQgDgGgIADIgEADQgdADACgaQAAgHACgIQACgKAFgGIAHgEIAJAAQAJADACAGIACAFIAOgKIgBgCQgBgEgIgCQgXgGgXAMQgTAJgCAFQgDAKAHANQgCAJgJgDQgKgOgIgCQgWgGgDAMQgBAEACAHQAAACAEACIAFADQAGADAAACQgBADgJgCQAAAGgCAIQgCAJgCAFIgFAHIACADIgEABIgBgBIgBABIgIgHQgIgIgPAAQgLAAgVAJIgEgHQATgIARAAQAUAAAIAHQADADADAEIAAAAIgBgGIAAgBIAEgMIABgLIACgFQgGgEgBgIIABgMQAAgCAVgKQADgCAEgPQAEgOgCgHQgCgIACgGQAEgOAOAEQAbAKALgFQALgGAEABQALAEAHAIQAKACALgHQAKgHALADQALACgEAIQgBAFgOAPQgBANgFAEIgDADQgEARgEAIQgEAJgHAIQAGABgBAIIAAADQgBAHgEAJQgFAJgNAKQgJAVgFANQgEAHgNgEQgWgGgNgRIgCADIAHAEIgBAEQAAAKAMAbQAHAPADALIgHgCgABSg9QgMAKgCAPQgDAGACAHIAAABQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQgDgCACgGQABgGAGACIADABQAGgMAFgOQgCgFgDAAIgDABgAAkgcQAFAKAMgDIAAgBIgDAAQgGgCACgHQACgIAHABQAGACABAEQAHgPgDgJQgEgKgIAAQgJAAgBAFQgIAPABARIgBAAIAAABgAgKhrIgDAGQgDAIADATIgGAXQAQADADANIACABQABAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBQgFgLACgJQACgLAXgKQAZgMAYAGQANAEAGAJQABgQASgQIgBgDIgFgBQgFgBgKAHQgIAIgKgDIgXgMIgYAHIghgHgAgZBlQgNgFgNgKIAEAAQAOAAAJAPg");
	this.shape_12.setTransform(13.5,-16.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("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");
	this.shape_13.setTransform(0,8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC99").s().p("AgQDmQAJgOAAgGIgBgEIgDAAQgfARgGADIAAgBIAQgPIgDgDIgQAGIgBgBIALgLIADgDQARgRADgHIAAgBIABgCQABgIAAgIQAAiaABgQQANhyAAg6IgDgEQgGAUgBAuIAAAUIgKAOIgPAcQgNAOgkgCQgjgDgXgOQAAgRASgUIADgEQAggfAOgQQAkgoAMgGQAegSAWgJIACAEIAKAPQAWAYAYATIAGAEQgQABgVAMIgPAJIABgSQAKgWAAgCIgEgDQgOARgBAbIAAAvQgBAMgJAjQgHAdABAQQgDAOgBBNIAABFQAAAEgEAGIgBANQgBAIAOAGIA1ASIgTABQgZgMgIAAIgGAAQAFATgeAKgAArDFIgBAAQgDgIgLgLQgNgMgEAAIACgZQACgBAKgMQASgXAKgYIARglIASgwQAGgTAMgQIAKgOIADgDQACgBAJABQAKABAFgGIAAgCIgMAAQgHAAgaAJIgWAIIABgsIAAAAIAYgHIAQgEIAGgCIAFgBIAUgEIANAAIABAAQAVAAAAAUQAAANgcAlIgVAdIAAAAIAAAAQgQAXgHARIgbA8QgDAHgVAZQgTAVAAAGQAAALANALQAKALAEABQAXAHAFgJQADgHAVAMQAGADAAADIgCAEIgRAAQgpAAAAAIIAAABQgJgFgQgEgAh4CnQg2ghgOAAQgNAAAAAEIADAIQAAACgJAEQgKAEAAAEQAAAFAFAGQAFAHAAAGQAEAKgPAAQgMAAgPgMQgNgKAAgGQAAgIARgLQASgMACgMQgGguAOAAQAQAAATAnQARAMAvABQAHADAMAQQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIABgcIgDglIACAAQAXAAAFgDIAIgFIAMgEIgBAeIAAAmIAHAnQAAAWgbAAIg2gggAC2CnIgRgPQgUAQgQAEIAAAAQAgghAAgDIgBgCIABgGQgJg5AAgIQABgYgMgmQABgBAAgDIAAgEIAPgUIAFgHQAPA/AAANQgCAfADAJIADAVIACAIIgBADQAAANAYASQAaAUAbACIgTAAQgXgLgGAAIgCABIgBACQAAAGAoAQIgNABQgIAAgQgMQgQgMgEAAIgDABIgBACQAAACAkAbIgBABQgUgHgUgRgABxiUQASAHATAFIADAJIAAAMIAAAAQgRABgNADQgDgYgHgNg");
	this.shape_14.setTransform(-0.3,8.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AgQEXQAJgNAAgGIgBgEIgDgBQgfASgGADIAAgBIAQgPIgDgEIgQAHIgBgBIALgLIADgDQARgSADgHIAAAAIABgCQABgIAAgIQAAibABgQQANhxAAg7IgDgDQgGAUgBAuIAAATIgKAOIgPAdQgNANgkgCQgjgCgXgOQAAgRASgVIADgDQAggfAOgQQAkgoAMgHQAegSAWgJQAVgJALAAQAOAAAIAIIAJAHIAAAAIACAAIADgBIgBgDIAEgGQADgGABgJQADgJAAgGQAIACABgDQABgCgHgCIgFgDQgDgDgBgCQgCgHABgEQADgMAXAGQAHACALAOQAKADACgJQgHgNADgJQABgGATgJQAYgMAXAGQAIACAAAFIABABIgBAAIACABIACAIIAAABIgEASIgHAMQgCgCgEAAIgDADIAGADIABAAIAAACQgDgBgEAAQgMAAAAAHIAAABIABAAIgCABIAGAAIADgDIAFgBIABAAQAEABACADIABAGIgFAFQgHAHgRgIQgBAEALADQAKACAHgDQgDAKgGAEQgHADgDAEQgIABgIgCQgSgFgEgQQgBgRgCAAIgCAAIgCAGQgCAHACAJQAFARAWAFIAPADQgIARgEAMQgCACgUgFIgKgLQgNgIgCgDQgJgagCAAIgEABIgBAFQACAJAHALQgDACgCAEIgDAGQgCAEAGAEQgFADAMgCQAAAKAFAJIAMAZIAJAYIAAALIAAABQgRABgNADQgDgZgHgMQgIgQgOAAIgEABQgQABgVALIgPAKIABgTQAKgVAAgCIgEgDQgOAQgBAcIAAAvQgBAMgJAhQgHAdABARQgDAPgBBNIAABFQAAAEgEAGIgBANQgBAIAOAGIA1ASIgTAAQgZgMgIAAIgGABQAFASgeALgAC5jmIgDgBQAGAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAgCgQAAIgEgCIgBAAIgDgDIgCACQAAAFAGACIAFABIAJABIAAAAgAArD2IgBAAQgDgHgLgLQgNgMgEgBIACgYQACgCAKgMQASgWAKgYIARglIASgxQAGgTAMgRIAKgMIADgDQACgCAJACQAKABAFgGIAAgDIgMAAQgHAAgaAJIgWAIIABgrIAAAAIAYgHIAQgEIAGgCIAFgCIAUgEIANAAIABAAQAVABAAATQAAANgcAkIgVAdIAAAAIAAABQgQAXgHARIgbA8QgDAIgVAYQgTAWAAAGQAAALANALQAKAKAEABQAXAHAFgJQADgGAVAMQAGADAAACIgCAFIgRgBQgpAAAAAIIAAABQgJgEgQgFgAh4DZQg2ghgOAAQgNAAAAAEIADAIQAAACgJADQgKAEAAAFQAAAFAFAGQAFAGAAAGQAEAKgPAAQgMAAgPgLQgNgLAAgFQAAgJARgLQASgMACgLQgGguAOAAQAQAAATAmQARAMAvACQAHADAMAQQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAAAIABgcIgDglIACgBQAXAAAFgCIAIgFIAMgEIgBAeIAAAlIAHAnQAAAXgbAAIg2gggAC2DZIgRgQQgUAQgQAFIAAgBQAgghAAgCIgBgCIABgGQgJg5AAgJQABgYgMglQABgCAAgEIAAgDIAPgVIAFgHQAPBAAAANQgCAgADAIIADAVIACAIIgBADQAAAOAYASQAaAUAbACIgTAAQgXgMgGAAIgCABIgBACQAAAGAoARIgNAAQgIAAgQgLQgQgMgEAAIgDAAIgBADQAAABAkAbIgBACQgUgHgUgRg");
	this.shape_15.setTransform(-0.3,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("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");
	this.shape_16.setTransform(0,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00FF00").s().p("AhOBSIgSgFIgOgRQgMgPABgDIAVhNIAEgMIACABIABgDIAIAFQAaALAdABQAfAEAUgYIAFAAIAEAAIgCAIIgBA5IgCgDIgSABIgCAAIgFgBIgCAAIgCAAIgCABIgCAAIAEgBIAAgBIABgDIgBAAIgDgBIgCAAIgCAKIgBAIQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAABQgCANgFAVIgGAUIgSACQgFABgCADIgBAAQgGAAgUgFgABRhFIABAAIAogRIAAAtQgDANACAZIgZADIgdADIAOhIg");
	this.shape_17.setTransform(-5.2,7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC99").s().p("AAJEXQAJgNAAgGIgBgEIgDgBQgeASgGADIAAgBIAQgPIgDgEIgQAHIgBgBIALgLIADgDQAQgSADgHIABAAIAAgCQABgIAAgIQAAibABgQQANhxAAg7IgDgDQgGAUgBAuIAAATIgKAOIgOAdQgNANgkgCQgjgCgXgOQAAgRASgVIADgDQAggfAOgQQAkgoAMgHQAfgSAVgJQAVgJALAAQAOAAAIAIIAJAHIAAAAIACAAIABAAIACgBIgBgDIAEgGQADgGABgJQADgJAAgGQAJACAAgDQABgCgHgCIgFgDQgDgDAAgCQgDgHABgEQAEgMAWAGQAHACALAOQAKADACgJQgHgNADgJQACgGASgJQAYgMAXAGQAIACABAFIAAABIgNAKIgCgEQgCgHgJgDIgKAAIgGAEQgFAGgCAKQgCAIgBAHQgBAaAdgDIADgDQAJgCADAFIACAGIgGAFQgHAHgRgIQgBAEALADQAKACAHgDQgDAKgGAEQgHADgDAEQgIABgIgCQgRgFgFgQQgBgRgCAAIgCAAIgCAGQgCAHACAJQAFARAWAFIAPADQgIARgDAMQgDACgUgFIgKgLQgNgIgCgDQgJgagCAAIgDABIgCAFQACAJAHALQgDACgCAEIgDAGQgCAEAGAEQgFADAMgCIABAJIAEAJIAAABIAMAZIAGAPIAAAAIADAJIAAALIAAABQgRABgNADQgDgYgHgNQgIgQgOAAIgEABQgQABgVALIgPAKIABgTQAKgVAAgCIgEgDQgOAQgBAcIAAAvQgBAMgJAhQgHAdABARQgDAPgBBNIAABFQAAAEgEAGIgBANQgBAIAPAGIA0ASIgTAAQgZgMgIAAIgGABQAFASgfALgABFD2IAAAAQgDgHgMgLQgNgMgEgBIACgYQADgCAJgMQASgWALgYIAQglIASgxQAGgTAMgRIAKgMIADgDQACgCAJACQAKABAFgGIAAgDIgMAAQgHAAgaAJIgVAIIAAgrIAAAAIAYgHIAQgEIAHgCIAEgCIAUgEIANAAIABAAQAVABAAATQAAANgcAkIgVAdIAAAAIAAABQgQAXgHARIgbA8QgDAIgVAYQgTAWAAAGQAAALANALQAKAKAEABQAXAHAFgJQADgGAVAMQAGADAAACIgCAFIgRgBQgpAAAAAIIAAABQgJgEgQgFgAhrD3IgFgFIgngoQgrgugOgEQgMgDgCAEIABAIQgBACgJABQgKABgCAFQgBAFADAHQAEAHgCAGQABALgPgEQgLgDgLgPQgLgOACgFQACgIATgGQAVgHAFgLQAGguANAEQAQAEAIAqQAOAQAtAOQAFAEAIATQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBIAIgaIAHglIACAAQAWAGAGgBIAJgDIAMAAIgIAcIgJAiIgBACIgEAoQgEAQgQAAIgLgBgADQDZIgRgQQgTAQgRAFIAAgBQAgghAAgCIgBgCIABgGQgJg5AAgJQABgYgMglQABgCAAgEIAAgDIAPgVIAFgHQAPBAAAANQgCAgADAIIADAVIACAIIgBADQAAAOAYASQAaAUAbACIgTAAQgXgMgGAAIgCABIgBACQAAAGAoARIgNAAQgIAAgQgLQgQgMgEAAIgDAAIgBADQAAABAkAbIgBACQgUgHgUgRg");
	this.shape_18.setTransform(-2.9,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("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");
	this.shape_19.setTransform(-2.6,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FF00").s().p("AhOBSIgSgFIgOgRQgMgPABgDIAVhNIAEgMIACABIABgDIAIAFQALAFANADQAPAEAQAAQAIABAHgBQAUgBAPgSIABgBIAFAAIAEAAIgCAIIgBA2IAAADIgCgDIgDAAIgNABIgCAAIAAAAIgCAAIgFgBIgCAAIgCAAIgCABIgCAAIAEgBIAAgBIABgDIgBAAIgDgBIgCAAIgCAKIgBAIQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAABQgCANgFAVIgGAUIgSACQgFABgCADIgBAAQgGAAgUgFgABRhFIABAAIAogRIAAAtQgDANACAZIgZADIgdADIAOhIg");
	this.shape_20.setTransform(-5.2,7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC99").s().p("AAJElQAJgNAAgGIgBgEIgDgBIghATIgDACIAAgBIAQgPIgDgEIgQAHIgBgBIALgLIADgDIALgMQAHgIABgFIABAAIAAgCQABgIAAgIIAAgNIAAgGIAAgFIAAgEIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIABhsIAAgQQANhxAAg7IgDgDQgGAUgBAuIAAATIgKAOIgHAQIAAAAIgDAFIgBABIgDAGQgKALgWABIgRgBQgWgBgSgGIAAgBIgHgCIgLgFIAAgFQADgOAOgRIABgCIADgDQAggfAOgQIAHgIQAeghALgGQAhgTAWgJQATgIAKAAQAOAAAIAIIAJAHIAAAAIACAAQAOAAgCgcQAAgKgCgGQAJAAAAgDQAAgCgHgBIgFgBQgEgBgBgDQgEgGAAgEQAAgMAXAAQAIAAAOALQAKAAAAgKQgKgKAAgKQAAgGAQgOQAUgRAXAAQAIAAACAEIABABIgKANIgDgEQgEgGgJAAIgJADIgFAFQgEAHABAKQAAAIABAIQAGAZAbgLIACgDQAIgFAEAFIAEAFIgEAGQgFAJgTgDQAAADALAAQALAAAFgFQAAALgFAFQgFAFgCAFQgHADgJAAQgSAAgJgPQgFgQgCAAIgCABIgBAGQAAAIAFAIQAJAOAXAAIAPgBQgDATgBAMQgBADgVAAIgNgIQgPgEgDgDQgOgWgDAAIgDABIAAAGQAFAJAJAIQgDAEgCAJIgBARQAAALAFAKIAIARIAEAIIAJAYIAAALIAAABQgRABgNADQgGg1gaAAQgSAAgXANIgPAKIABgTQAKgVAAgCIgEgDQgOAQgBAcIAAAvQgBAMgJAhQgHAdABARIgCATIgCBJIAABFQAAAEgEAGIgBANQgBAIAPAGIA0ASIgTAAQgZgMgIAAIgGABQAFATgfAKgABFEEIAAAAQgDgHgMgLQgNgMgEgBIACgYQADgCAJgMQASgWALgYIAIgTIAIgSIASgxQAGgTAMgRIAKgNIADgDQACgBAJABQAKABAFgGIAAgCIgMAAQgHAAgaAIIgVAJIAAgrIAAAAIAYgHIAQgEIAHgCIAEgCIAUgEIANAAIABAAQAVABAAATQAAANgcAkIgVAdIAAAAIAAABQgQAXgHARIgbA8IgBACQgEAIgTAWQgTAWAAAGQAAALANALQAKAKAEABQAXAHAFgJQADgGAVAMQAGADAAACIgCAFIgRgBQgpAAAAAIIAAABQgJgEgQgFgAhrEFIgFgFIgngoQgrgugOgEQgMgDgCAEIABAIQgBACgJABQgKACgCAEQgBAFADAHQAEAHgCAGQABALgPgEQgLgDgLgPQgLgOACgFQACgIATgGQAVgHAFgLQAGguANAEQAQAEAIAqQAOAQAtAOQAFAEAIATQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBIAIgaIAHglIACAAQAWAGAGgBIAJgDIAMAAIgIAcIgJAiIgBACIgEAoQgEAQgQAAIgLgBgADQDnIgRgQQgTAQgRAFIAAgBQAgghAAgCIgBgCIABgGQgJg5AAgJQABgYgMglQABgCAAgEIAAgDIAPgVIAFgHQAPBAAAANQgCAgADAIIADAVIACAIIgBADQAAAOAYASQAaAUAbACIgTAAQgXgMgGAAIgCABIgBACQAAAGAoARIgNAAQgIAAgQgLQgQgMgEAAIgDAAIgBADQAAABAkAbIgBACQgUgHgUgRg");
	this.shape_21.setTransform(-2.9,1.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("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");
	this.shape_22.setTransform(-2.6,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC99").s().p("AAJElQAJgNAAgGIgBgEIgDgBIghATIgDACIAAgBIAQgPIgDgEIgQAHIgBgBIALgLIADgDIALgMQAHgIABgFIABAAIAAgCQABgIAAgIIAAgNIAAgGIAAgFIAAgEIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIABhsIAAgQQANhxAAg7IgDgDQgGAUgBAuIAAATIgKAOIgHAQIAAAAIgDAGIgBAAIgCAFIgBABQgKALgWABIgRgBIgfgFIgJgCIAAgBIgEgBIgDgBIgLgFIAAgFQADgOAOgRIABgCIADgDQAggfAOgQIAHgIQAeghALgGIAogVIAPgHIABAAIAIgDIACgBQAKgDAHgBIABAAQAOAAAIAIIAJAHIAAAAIACAAIABAAIACgBIABAAIABAAIAEgDIADgUIAAgBIAAgBIAAgBIAAgBQAAgKgCgGQAJAAAAgDQAAgCgHgBIgFgBQgEgBgBgDQgEgGAAgEQAAgMAXAAQAIAAAOALQAKAAAAgKQgKgKAAgKQAAgGAQgOQAUgRAXAAQAIAAACAEIABABIgKANIgDgEQgEgGgJAAIgJADIgFAFQgEAHABAKQAAAIABAIQAGAZAbgLIACgDQAIgFAEAFIAEAFIgEAGQgFAJgTgDQAAADALAAQALAAAFgFQAAALgFAFQgFAFgCAFQgHADgJAAQgSAAgJgPQgFgQgCAAIgCABIgBAGQAAAIAFAIQAJAOAXAAIAPgBQgDATgBAMQgBADgVAAIgNgIQgPgEgDgDQgOgWgDAAIgDABIAAAGQAFAJAJAIQgDAEgCAJIgBARIAAAHQABAHADAGIABABIAIARIAEAIIAJAYIAAALIAAABQgRABgNADQgDgYgHgNQgIgQgOAAIgBAAIgLACIgOAEIAAAAIgBABIgBAAIgBAAIgBABIgCABIgEACIgBAAIgEACIgPAKIABgTQAKgVAAgCIgEgDQgOAQgBAcIAAAvQgBAMgJAhQgHAdABARIgCATIgCBJIAABFQAAAEgEAGIgBANQgBAIAPAGIA0ASIgTAAQgZgMgIAAIgGABQAFATgfAKgABFEEIAAAAQgDgHgMgLQgNgMgEgBIACgYQADgCAJgMQASgWALgYIAIgTIAIgSIASgxQAGgTAMgRIAKgNIADgDQACgBAJABQAKABAFgGIAAgCIgMAAQgHAAgaAIIgVAJIAAgrIAAAAIAYgHIAQgEIAHgCIAEgCIAUgEIANAAIABAAQAVABAAATQAAANgcAkIgVAdIAAAAIAAABQgQAXgHARIgbA8IgBACQgEAIgTAWQgTAWAAAGQAAALANALQAKAKAEABQAXAHAFgJQADgGAVAMQAGADAAACIgCAFIgRgBQgpAAAAAIIAAABQgJgEgQgFgAhrEFIgFgFIgngoQgrgugOgEQgMgDgCAEIABAIQgBACgJABQgKACgCAEQgBAFADAHQAEAHgCAGQABALgPgEQgLgDgLgPQgLgOACgFQACgIATgGQAVgHAFgLQAGguANAEQAQAEAIAqQAOAQAtAOQAFAEAIATQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBIAIgaIAHglIACAAQAWAGAGgBIAJgDIAMAAIgIAcIgJAiIgBACIgEAoQgEAQgQAAIgLgBgADQDnIgRgQQgTAQgRAFIAAgBQAgghAAgCIgBgCIABgGQgJg5AAgJQABgYgMglQABgCAAgEIAAgDIAPgVIAFgHQAPBAAAANQgCAgADAIIADAVIACAIIgBADQAAAOAYASQAaAUAbACIgTAAQgXgMgGAAIgCABIgBACQAAAGAoARIgNAAQgIAAgQgLQgQgMgEAAIgDAAIgBADQAAABAkAbIgBACQgUgHgUgRg");
	this.shape_23.setTransform(-2.9,1.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAUIAAgBQgFgRAEgPQAAgFAIgCQAIgDAGAKIACAEIgDgBQgHAAAAAJIAAAEQABAEAGAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIAAAAIAAABIAAAFQAAALgGABQgEACgEAAQgFAAgEgFgAAKASIAAgBIgBAAIAAgBQgDgGABgGIAAgEIAAgBQABgLAHgKQAEgFAFAGIgBAGIgCgBIgEAIIAAAFQABADACABIgBAFQAAAMgGAAIgBAAIACABIgBAAIgDgBg");
	this.shape_24.setTransform(18.4,-24);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBE/IAAgIQADgGAAgDIAAgBQgVAPgMAAIgFAAIAAgIIAFgGIgQABQgPABAAgFQAAgDAIgCQAOgCAHgDIACgCIgCAAIAEgBQAFgEADgFIABAAIALgMIAAgBIAEgHIAFgIQACgRgBgaIAAgvQgBgnABgjQgBABgEABIgGAAIgUAAIgDAMIgDAKIgFAZQgFAVgCACIgFACQgBASgLAfIgEAaIgCAOIgCARIgCAIIACgCIAAABIgOAJIgBAAQgEAEgGACIgEABIgCgBQgQgEhUhZIgPgEIAAAEQgCAJgTACQAFARgCAHQgEAQgRgEQgSgFgLgTQgIgQABgFQAEgNASgGQAUgHAHgLQACgSADgKQAFgSAOADQAQAEAGASQADAJABAMQAFAKAdAOQAfAPAFAHIAFgRQAFgQgBgGIACgKIABAAQgWgJgUgdIAahjIABABIAAgKIABgHQAEgNANgNIAAgBQAKgMAIgJIApgqIACgDQAQgRAfgXQAXgRAUgIIACgBQATgHAPAAQAUAAAIAHQAEADACAFIAAgBIgBgDIACACQAEgGAAgNIgCgMIAAgFQgGgDgEgHIgCgMQAAgDARgOQADgCAAgQQAAgPgEgHQgEgGAAgHQAAgOAPAAQAeACAJgIQAJgHAEgBQAMABAJAFQALAAAIgJQAIgKALAAQALAAgBAIQAAAFgKASQADAOgEAEIgDAEQACARgCAKQgCAJgEAKQAFgBACAIIAAADQACAIgDAJQgCAKgJAOQgEAWgBAPQgCAGgOAAQgWABgTgOIgHAZQAAAEADAJIACAEIAIAUIACACQAGANADAKQACAJAAAHIAAADIAEAAQAbAAAAAbQAAAHgOAXIgLARQAEADAGAZQAIAdAAASIAAAnIAGAmIAAABIATAcQAFAGAfAKQAcAIAAAHQAAAEgXgBQAKAHAAADQAAAGgbgDIgCgBQADAFAAABQAAAGgHAAQggAAgdglQgWARgQABIgCAAQgIAAAAgEIABgBIAGgGIAdggIABgKQgJg0AAgKQgKgtAAgRIABgCIgBAAIAAgBIgBACIgOAeQgHAMgVAxIgDAGQgKAPgeAlQAAAOASAKQAXAOAGgJQAGgKAYANIAAAAIABAAQAEACABACIACAEIAAAAIAAACIAAADIgBAAIgBABIgCACIgDABIAAAAIgDABIgtAEIgHAEQAHAEAAAEQAAADgQAAQgXAAgKgFQgIgGgHgBQAAAMgKAJQgLAKgPAAgAAOEgIAAAEQAAAGgIANIgBABIABAAQAfgKgFgTIAGAAQAIgBAZAMIAUAAIg1gSQgOgGABgIIABgNQADgGAAgEIAAhFIADhJIABgTQAAgRAHgdQAIghABgMIAAgvQABgbAPgRIADADQAAACgKAWIgBASIAPgJIAFgDIABAAIADgCIADgBIABgBIABAAIAAAAIABgBIABAAIAOgEIAKgCIABAAQAPAAAIAQQAHANACAYQAOgDARgBIAAAAIAAgMIgKgXIgDgJIgJgRIAAgBQgDgGgBgHIgBgHIACgQQACgKADgEQgKgIgEgJIAAgFIADgCQACAAAPAWQADADAOAEIANAIQAVAAACgDQAAgMADgTIgPABQgWAAgJgOQgFgIAAgIIAAgGIADgBQABAAAFAQQAJAPASAAQAJAAAHgDQADgFAFgFQAFgFAAgLQgFAFgLABQgMgBAAgDQATADAFgIIAEgHIgDgFQgEgFgIAFIgDAEQgbAKgFgZQgCgIAAgHQAAgKADgIIAFgFIAJgCQAJAAAEAFIADAFIALgOIgBgBQgCgEgIAAQgYAAgUASQgQANAAAGQAAAKAKAKQAAAKgKAAQgOgLgIAAQgXAAAAAMQAAAEAEAHQACACADABIAGABQAHABAAACQAAAEgJAAQABAFAAAKIAAABIAAABIAAACIAAAAIgDAUIgDADIgCABIAAAAIgDAAIgBAAIgBAAIgBAAIgIgHQgIgHgPgBIgBAAQgGABgKADIgDABIgHADIgBAAIgPAHIgpAVQgKAGgeAhIgHAIQgPAQgfAfIgDAEIgCABQgOARgCANIgBAFIALAGIAEABIAEACIAAAAIAJACIAfAGIAQAAQAXgBAJgLIABgCIADgEIAAgBIADgGIAAAAIAIgPIAJgNIABgUQAAguAGgUIADAEQAAA6gMBxIgBARIAABrIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAAEIAAAFIAAAGIAAANQAAAIgCAIIAAACIAAABQgCAEgGAIIgLAMIgDADIgMALIgCACIADgBIAQgGIADADIgQAPIgBABIABAAIADgCIAhgTgACNAZIgDADIgKANQgMARgGATIgSAxIgIASIgIATQgKAYgSAXQgKALgDACIgBAZQAEAAAMAMQAMALADAHIAAAAQAQAFAJAEIABABIAAgCQAAgHApgBIARABIACgFQAAgCgGgDQgWgMgDAHQgEAIgYgHQgDAAgLgLQgMgLAAgLQAAgGASgWQAUgWAEgIIAAgBIAcg8QAHgRAPgYIAAgBIABAAIAUgdQAcglAAgLQAAgUgUgBIgBAAIgOAAIgTAFIgFABIgGACIgQAEIgYAHIAAAAIgBArIAWgJQAZgIAIgBIALAAIAAADQgEAGgKgBIgIgBIgEABgAjTC4QANAEAsAuIAnAoIAFAFQAZAHAGgWIAEgoIAAgCIAJgiIAJgcIgNAAIgIADQgGABgXgGIgCAAIAAAAIgGAlIgIAaQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgHgTgGgEQgtgOgNgQQgJgqgPgEQgOgEgGAuQgFALgUAHQgUAGgCAIQgBAFAKAOQALAPAMADQAOAEgBgLQACgFgDgIQgDgHABgFQABgEAKgCQAKgBAAgCIAAgIQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIAKABgAAfEGQAGAGAPAGIgTgUIgCAIgADND5QAUARAUAHIADAAIgCgBQgkgcAAgBIAAgDIADAAQAEAAAQAMQARAMAHAAIANgBQgngQAAgHIAAgBIADgBQAFAAAXALIAUAAQgbgCgagUQgYgSAAgOIAAgCIgBgJIgDgUQgDgJABggQABgNgQg/IgEAGIgQAVIABADQAAAEgCACQAMAlAAAZQgBAIAJA5IAAAGIAAACQAAACgfAiIgBAAIABAAQAQgEATgRIASAQgAAmBTIgBASIgBBeIgBAXQAZghAHgOIANggIAHgRIAVg6QAIgWAHgJQgTAIgDAAIAAAXQAAAPgvgBIgOgCIgCAHgAh+AhIgVBPQgBADAMAPIAOAQIASAGQAXAGAEgBQACgDAFgCIASgBIAGgUQAFgVACgNQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIAAgIIADgKIACAAIADABIAAAAIAAACIAAACIgEAAIACAAIACAAIACAAIADAAIAFAAIABAAIAAAAIABAAIACAAIAMAAIAEAAIABADIAAgDIABg3IACgJIgEABIgEgBIgBACQgPARgWACQgGABgIgBQgQgBgPgDQgNgDgMgFIgIgFIAAADIgCgBgAAoBJIAegDIAYgEQgBgZADgNIAAgsIgoAQIgCAAIgOBJgAAAACIgFAHIAKABIADgTIgIALgABOg+QgPAIgGAEQAAAigBAIIAAABQAFgDAMgFQAUgIAFgBIAEABIAAAIQALgCAVgIIAFgCQgJgwgRAAQgMAAgXANgADEkEQgJACAAAFQgDARAFAQIgBABQAHAJALgGQAHgBAAgLIAAgFIAAgBIAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgGAAgBgEIAAgEQAAgJAIAAIAEAAIgDgEQgFgIgGAAIgDABgACXjYIADAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgIgJAAgKQAAgLATgQQAVgRAZgBQANABAIAHQgCgRAMgTIgBgCIgGAAQgFAAgHAKQgGAJgLAAIgYgGIgWANIgiACIgFABIgBAHQAAAIAHASIAAAYIAEAAQANAAAGAKgADgkGQgGAKgBAMIAAABIAAAEQgBAGADAGIAAABIAAABIABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAIgBgBIAAAAQAHAAAAgMIABgFQgDgBgBgEIAAgFIAFgIIACABIAAgGQgCgDgDAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_25.setTransform(-2.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_7},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},6).to({state:[{t:this.shape_11},{t:this.shape_16},{t:this.shape_15},{t:this.shape_7}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_7},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_19},{t:this.shape_11},{t:this.shape_10},{t:this.shape_18},{t:this.shape_17}]},4).to({state:[{t:this.shape_4},{t:this.shape_22},{t:this.shape_5},{t:this.shape_21},{t:this.shape_20}]},7).to({state:[{t:this.shape_25},{t:this.shape_4},{t:this.shape_24},{t:this.shape_23},{t:this.shape_20}]},8).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-32,53.8,64);


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


(lib.BuffyRace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABmAHIAAABIgCAHIgBABIADgJgAhlgJIAAAAIABgCIADABIgBABIgCABIgBgBgAADgKIAAAAIAAgCIAGgDIABABQgCADgFABg");
	this.shape.setTransform(0,-26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D5AB6F").s().p("ABJBWIgXAAQgGgBgGgEQgIgDgIAAIAAgCQgDgFABgGIAAgJIAAgIQAAgEACgDQACgDgBgDQgBgHACgCIALgCIACgEQAIAGAJAAQAFAAAAgEIgBgDQgHAAgGgEIADgEIACAAIACAAIACAAIABgBIABgBIACAAIALgLIABgDQAEgCAAgIIAAgEQAEAAAFgEIAHgDIADgCIAAAAIgGAMQgEAEAAAIIAAACIgBADIAAABIgCAKIgCAGIgDADQgDAEgFACIgJAGIgCAAIgEAAIgCAAQgIgCgOAHIAAACIAFABQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABACIgBADQAAAQAMAEQAEACAWABQAWABAKANIgOABIgOgBgAg8A9IgVgPIAAgHIgJgRIgFgFIgHgIIAIADQAGAEAEAFQAHAEgCACQACACAdACQALAAAMAHIAFgBIABABQAKAAABgPQACgEAAgIIgCgLIgDgHIAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgCgLQAKgEAAgMIgCgHIABgBIABAAIADACQAFgGAMgJIAEgDIAAAAQAHAAAAgLQAAgCAEgDIAGgDIADAAIAFgBIADAAIADgCIAAgBIAAAAIAIABQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIACAAIAJAFIADAAIABAAIAEgBQADAKAFAEIgjACQgEgDgHAAQgHAAgEAEIgIABIgEAKIgCARIgPAPIgBALIgFACIAAACIAAADIAKAHQABAGADADQADAFgBAMIgGAIIgHAJIgFACQAAAAgBAAQAAAAgBABQAAAAAAABQAAABAAABIgLAHgABeglQAFgHAAgCQACgLgIgEIAAgBIACABIAEgBIAEAHQgBALgEAHg");
	this.shape_1.setTransform(-0.5,-21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E4B01").s().p("AAvBtIgGgBQgKgCgFgGQgDgEAAgFIABgDIABAAIADAAIAAABQACgDAEgBIAHgDIgBADQAEAEAAAFQgCAKALAAQAMAAAAgHQgBgBAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAQgEADgEAAQAAAAgBAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIACgDQAAgDgFgEIAJgIIgBgBIADgBIAAAAQAAAGAHADQABABAKAAIANAEQAGAAAAgEQABgFgDAAQAAABgBAAQAAAAgBAAQAAAAgBABQgBAAgBAAQgGAAABgFQAAgEgEAAIgEAGIgGAAQgFgCABgCIAAgCQAHgDABgKIACgPQAAgJgCgBIAEgMIACADIADgBQgBAFABADQABAFALABQAAAOAOgBQAAAFADAAQADAAABgKQAAgEgEAAQgBACgFAAQgEAAAAgDQAAgEAEgEQAAgEgDAAQgBACgIAAQgFAAgBgHIAAgEIAIABQAGAAAFgFQAEgFABgCQAAgEgDAAQgEAAgBAEQgDAFgFAAIgLgDIABgBIAAAAIAFgIIADgHIAAgIIAAgFIAGABQAOAAgBgLQAAgDgEAAQgGAAAAAHIgIAAIgHgFIgBAAQADgCABgEQAYgDAAgKQgDgIgEAAQgGAAAAAFIADAEIACgCIABABQgEAEgEAAIgFgBIgDADIgEgBIgEAGIgGAEIgBAAQgDgBgBgEIAAgCQAAgFgDgCQAEgEAAgIQAAgHgDAAQgEAAAAADQACAMgGAAIAAgBQAAgCgGgIQACgFgEAAQgHAAABAEIAIAKIgCACIgHgBIgFgDQgHgEAAgFQAAgCAHgHQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgKAAAAALQgBAFADAFIAEACIgDABIgGABIgCABIgDAAQgFgBgDAAQgBgEgHgFQAAgLgIAAQgDAAAAADIAEAFIgBADQAAACAJAIIgDADQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQgCAEgBAGIgIAHIgIAGIgBAAIAAABIgDACIgHAAQgIAAgGgEQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAgDgEAAQAIACgcAAQAGgEAAgCIgFgGIgGAFQgDAGAAACQgBADAEACQAFADAFgEQAEgDAGAFQAGAGAMACQgCADAAAGIgEAHQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgFAAgBgHQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABgBAAQgBACABAFQgCAEgGAAIgHADQgFAAgEgKQgEAAAAAFQAGAMAJAAQACgDAIgBQAGAAACgGIAFABQgCAEAAADIAGAIQgCADgBAHIgEgCQgFAAAAAFIgIAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgCAAQgGAAAAAFQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIATABIACACQAGAAAEgLIABAFIABAGIgDAKIABABIgBABIgEAIQgtgHgPgIQgBgDgCgDQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgDgCIgDgEQgHgBAAgCIgBgIQgEgFgJADQgDgBgBgDQAAgGAGgEQAAgCgKgDQgJgCAAgEQAAgDACgEQADgGAIgJQABgEgIgEQAAgIAVgIQAAgEgFgKQAAgOAPAAIAKAAIAAgFIADgIQAMgQAFAAQAFAAAIAPQAJAQABAAQAGgfAGAAQAGAAAUAKQABAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAIgEgIIAJgBQAXAAgCAGQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQgDgJAHAAQAMAAAEAHQAEAHADAAQACAAAIgJQALAAAAALIgCAKQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBIABABIAWgFQAIAAAAAHQgBAIAEAAIAQgGIACAMQAKAIgBAEQgKAIABAGQAVAUgBAEQgbAUAAAEQAAAFAMAHQAKAGAAAEQAAAGgIAFQgIAGAAACQAFAEAEAHIgQAKQgFACAAAFIALANQgPANgCAHQgKgMgEAAQAAAAgBAAQgBAAAAABQgBAAAAABQAAAAAAABIAAAIQgHACgCACQgJgCgVgBgAhugWIAAABIABABIABAAIABgBIABgCIgDgBIgBgBg");
	this.shape_2.setTransform(0.9,-25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABWB7QgKgNgVgBQgWgBgEgCQgMgEAAgQIAAgEIgBgBQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIgFgBIgBgDQAPgHAHADIADAAIADAAIADgBIAIgFQAGgDADgDIACgEIADgFIACgKIAAgBIABgFIgBgCQABgHAEgEIAGgMIgBgBIABgEIAAgFIAAgGIgBgHIAAgEIAAgFIAAAAQAIAEgBAKQgBADgEAHIAEAAQAEgIABgKIgEgHIgFAAIgCAAIgCgFIgDAAQgFgDgDgLIgFACIAAgBIgDABIgJgFIgCgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgIAAIgBAAIAAABIgCACIgDgBIgGACIgCAAIgHADQgEADABACQAAALgHAAIgBAAIgDADQgLAIgGAHIgDgDIgBAAIgCABIACAHQAAALgJAFIABALQABAAAAAAQABABAAAAQAAABAAAAQABABAAABIAAAAIADAJIABALQAAAIgBADQgCAPgJAAIgCAAIgFAAQgLgGgLgBQgdgCgDgBQACgDgGgDQgEgGgHgDIgIgEIgKgJQAKABAHACIgEgDQgCgDgBgFIgEAAQgGgBgDgDQgFgCAAgFQABgDACgFQgQgGAAgIIABgHQADgHAHgGIgEgJQAAgJATgJIgEgMQAAgVAZAAQAAgGALgMQALgMAEAAQAJAAAGAJQAEALACACQAEgVAJgBQAJAAALAFQADgGAMAAQAQAAACACQAAgIALAAQARAAAGAMIAJgIQARAAACATIgBACQAHgCAPAAQAKAAAAABIACALQADAAALgDQAHAAAAAPQAAACAHAGQADADAAAFQAAAKgJAEQAEACAIAJQAIAJAAADQAAADgZAWQAUANAAAIQAAAJgOAKQAGAGABAFQAAAGgLAFQgLAFAAACIAIAGIADAIIgMAOQgEADAAADQABAGgHAAQgFAAgGgGIgIAHIAHAKIgFAAIAAAAIgBAAgAAXBWQAAAGADAEQAFAGAKACIAGAAQAVACAJACQACgCAHgCIAAgIQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQAEAAAKALQACgGAPgNIgLgNQAAgFAFgDIAQgKQgEgHgFgDQAAgCAIgGQAIgFAAgGQAAgEgKgHQgMgGAAgFQAAgDAbgVQABgFgVgTQgBgGAKgIQABgEgKgIIgCgNIgQAGQgEAAABgHQAAgIgIAAIgWAGIgBgBQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIACgKQAAgMgLAAQgIAKgCAAQgDAAgEgHQgEgIgMAAQgHAAADAJQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAQACgGgXAAIgJAAIAEAIQAAABAAABQAAABAAAAQgBABAAAAQgBAAgBAAQgUgLgGABQgGAAgGAeQgBAAgJgPQgIgPgFAAQgFgBgMAQIgDAIIAAAFIgKABQgPAAAAAOQAFAKAAADQgVAIAAAJQAIAEgBAEQgIAJgDAFQgCAFAAACQAAAFAJACQAKADAAABQgGAFAAAFQABAEADABQAJgDAEAFIABAIQAAACAHABIADADIADACQABABAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQACADABADQAPAHAtAIIAEgJIABAAIgBgBIADgKIgBgGIgBgFQgEAKgGAAIgCgBIgTgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgFAGAAQACAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAIAAQAAgFAFAAIAEADQABgHACgDIgGgIQAAgEACgDIgFgCQgCAGgGABQgIABgCADQgJAAgGgNQAAgEAEAAQAEAJAFAAIAHgCQAGgBACgEQgBgEABgBQABgBAAAAQAAAAABgBQAAAAABAAQABAAABAAQABAFAFABQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABgBIAEgHQAAgFACgDQgMgCgGgGQgGgGgEADQgFAEgFgDQgEgBABgEQAAgCADgFIAGgFIAFAGQAAACgGAEQAcAAgIgCQAEAAAAADQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAGAEAIAAIAHgBIADgCIAAgBIABABIAIgGIAIgHQABgGACgFQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIADgDQgJgIAAgCIABgDIgEgFQAAgEADAAQAIAAAAAMQAHAFABAEQADAAAFABIADAAIACgBIAGgBIADgBIgEgDQgDgEABgFQAAgLAKgBQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQgHAGAAACQAAAFAHAFIAFACIAHACIACgCIgIgKQgBgEAHAAQAEAAgCAFQAGAHAAACIAAACQAGAAgCgMQAAgDAEAAQADAAAAAHQAAAIgEAEQADACAAAEIAAADQABAEADABIABAAIAGgFIAEgGIAEABIADgCIAFABQAEAAAEgEIgBgBIgCABIgDgEQAAgEAGAAQAEAAADAHQAAAKgYADQgBAFgDABIABABIAHAEIAIAAQAAgHAGAAQAEAAAAAEQABAKgOAAIgGAAIAAAFIAAAIIgBAAIgCAIIAAgBIgFAHIAAABIgBABIALACQAFAAADgEQABgFAEAAQADAAAAAFQgBACgEAEQgFAFgGABIgIgBIAAADQABAIAFAAQAIAAABgCQADAAAAADQgEAFAAAEQAAADAEAAQAFAAABgDQAEAAAAAEQgBALgDAAQgDAAAAgFQgOAAAAgNQgLgBgBgFQgBgDABgFIgDAAIgCgDIgEANQACABAAAIIgCAPQgBALgHADIAAABQgBADAFABIAGAAIAEgGQAEAAAAAFQgBAEAGAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQADAAgBAFQAAADgGAAIgNgDQgKAAgBgBQgHgEAAgFIAAgBIAAAAIgDACIABAAIgJAJQAFADAAADIgCAEQAAAAAAABQAAAAAAAAQAAAAABAAQABAAAAAAQAEAAAEgCQABAAABAAQAAAAABAAQAAABAAAAQAAABABAAQAAAHgMAAQgLAAACgJQAAgGgEgDIABgDIgHADQgEABgCADIAAgBIgDAAIgBAAgAgFgdIABACIgBAAIABAAIAAABQAEgCACgDIgBgBgAAWA4IABgCIAHgCIABgBQAGAEAGABIABADQABAEgFAAQgJAAgJgHgAA7AQIAJgDQgEAEgEAAIgBAEQAAAHgDADgAhtgZIACgBIgBABIgBAAgAAbgeQAHAAAEACIgXACQAEgEAIAAgAhugdIABABIgBACg");
	this.shape_3.setTransform(0.9,-24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AhaBMQgYgpAAgTIABgOQABgDAIgDIAGgEQAIAJAWANQAjAVAigBQATAAAEgCIABgFIADgBIAAABIAEABQAEAAAAgDIAPAGQAWAKAJAJQAOAOAOASIgGgBIgCgCIgEAAIAAABQgQgBgVAKQgSAJgGAFQgSgXgEgUQALABAAgGIgDgDIgQAFQABAVAbAgIgLABIgCgBIgEABIAAABQg2AFgTAOIgjg3gAAag2QgNgIgNgNQgjgkgNgHIABgBIgBgCIgBAAQADgJACAAQAsAAAjANIAQAJQAJAEADgCQAEgCAJADQADACADADQAOAMANAJQAGAGAAANQAAAZgiAAQgbAAgcgTg");
	this.shape_4.setTransform(-6,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAPQADgCAAgGQADgHgKAAQgHAAgBAEIgBgGIAEgMQAQAAACADIAAAFQgEAOAAAHgAAMAGIAAgGQAEgJACABQANgBAAAJQAAAIgKAEQgBgFgIgBg");
	this.shape_5.setTransform(5.6,-25.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiLEnQghgRAAgNQAAgLAkgTQAbgPAFgWIABgFIgWAIQgHAGgDAJQAEAagtAAQgNAAgPgGQgMgGAAgCQAfgWAKgQQAEgHAJgXQAEgMALAAQAUAAADAKIAegCQAHgRARgNQgdgagGgLIAAgCIgMAFIgmg+IgVghQgFgKAAgTQAAgNAGgHIgQAFQAAAHADAIQAAALgLAAQgWAAgOgIQgUgEgDgCQgKgFAAgPQAAgUAYgbQAWgYgFggQgEgXAagdIARgXQAVgWAeAAIATABIAKAJQgLgDgSAAQgZAAgPAOQgQAVgKALQgTAWABAbQADAmgWAWQgWAXAAAOQAAALAMAHQAFADAPABIAJAEQAVAAgEADQAJAAAAgCIAAgEIgCgMQAAgIALgDQALgEAAgGQAAgIgPgLQgPgKAAgKQAAgNAQgWQANgRAFgDQAJgGAHgZIAEgLIAAgDQAAgGANAAQAGAAAIAIIAMAJQAjANAIABIAAAAIAtAJIAWAIQgDgKgDgFQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAEAAAEANIAAAGIAVAGIAgAZQAFAGAAAPQAAAJgDAHQADAHgCAYQAKAiAbAAQAbAAASgUQAKgLARgbIAVgfQALgQARADQAOABAJgKQgRgEAAgPIAAgBIgCgBQgBgEgCgCIAAgEQgDgBgCgCIgCgFIAAgFQAAAKgQADIgDgEQAMgEAAgFIAAgDIgCgBIABgBIgBgNIgBgBIgJAAQgSATAAACIAFAZQAAASgjATQgjATAAAMQAAAEAEAIQAAAFgFAAQgGAAABgaIAAgsQgBgQgHgKIABAAIAEAAIAGANQAEAKAAAOIgBAaIABABQAIgHAegSQAZgRAAgLQgFgNAAgMQAAgFAKgLQAMgNANAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAZgSQATAAADANIgBAAQADAEADAKIAAAEQAHAFAFATQAAADgBACIABABIAAAMQAAAPgQAAIgFgBQgBAMgeACQgSAAgDAFQAAAHgDADQgIAIgNAXQgWAlgRAMQgOAIgXAAQgWAAgIgKIgOgfIAAgXQgKAJgVAAQgKAAgKgCIgBAAIABAAQAAAMgYAPQgEAGACAIIABAJQAXABAeAcQAeAbAAAKQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgIgBIAXAjQAPAOAAAgQAAAYgCADQgEAHgZAEQg4AegPAAQgIAAgCgDIgOAMQgxAkAAACQAAAMAiAWQAhAVAAAOQAAALgPAAQgKgDgOAAQgIAAgBAEQgCAEgJAAIg7gbgAhVBPIgOAGIAqAtQgFACgIAHQgPAQgMAuQgGAXggATQgfASAAAFQAAAJAoAVIAoAUQAKAAADgEQAEgFAIAAQAGAAAJADIATAAIAAgIQgFgFgkgaQgbgTAAgOQAAgJAYgPQAdgUADgEIAZgaQARgUAAgIIgshDQgaACgSAIgAihC0QgPAdgbARIgDAAQAHACADAEQACADATAAQAZAAALgYQAMgZAZAAIAAAAIAFgXQgGACgPAAQgMAAgDgFQgEgFgKAAQgBAAgNAZgAgIAyQgGAHgFADIAEAFIAAAAIAWAdIAaAjQAAAIgYAAQgBATgeAdQAWgFAXgOQAYgPAggDIABgbQAAgagHgHQgRgRgQgeIgMAAQgYAAgMAJgAgfBFQAHAJANAVIASAgQAEgDAOgBQgogqgHgRIgJABgAilg0QgIAEgBAEIgBANQAAAUAZAnIAiA3QAUgOA3gFIAAgBIADgBIACABIALgBQgbggAAgVIAPgFIAEAEQAAAFgMgBQAEAUASAXQAGgFARgIQAWgKAQAAIAAgBIADAAIACACIAGACQgNgTgOgOQgKgIgVgKIgOgGQgBAEgEAAIgEgBIAAgCIgCABIgCAFQgEADgTAAQgiAAgkgVQgWgNgIgKIgGAEgAhyiiQgHAIgFAQQgDAMgCARQgLAogMAKIAZASQAlAWAgAAQATAAAFgHIAEgGQABgSADgHQAEgHAUgQQgegKggggIgwgogAiPjHQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIAAAAIAAABQgBAEgFAJQgGASgIAHQgIAHgMAQQgNATAAAJQAAAFAPALQAPALAAANIgBAGIAEgBIABAAIABgBIAAgBIACgBQARgWAHgeQACgUACgKQAEgOAKgHIgBgBIALgQIAAAAIABgCQgHgDgGgFQgNgLgDAAQgFAAgBAFgAhuipIABAAIABACIgBABQANAHAlAkQANANAMAIQAdATAaAAQAhAAAAgZQAAgNgGgGQgNgJgNgMQgEgDgDgBQgIgDgFACQgCACgJgFIgQgIQgkgOgsAAQgCAAgDAJgADnibQADAJAIACIAVAAQABgJgCgHQgFADgKAAIgRgBIABADgAD2ikQAUAAgDgGQAAgCgIgMQgGAQgUAAIgEAAQACAEATAAgADYi6IAAAFQAAAGAMAAQAUAAADgNIgEgFQAAgBAAAAQAAgBABAAQAAAAABgBQABAAABAAIAAAAIAAgCIgFgJQgVAPgJAGgADXjRIgIAIIACAJIAOgHIAVgNQgEgGgJAAQgIAAgIAJgAg6gnIgBgIIAAgFIABAAIAJANIAAACIgBAAIgIgCgAAcjsQgIgIgBgFQgFAEgFAAQgHAAAAgEQADgCAGAAQAEABADgFQABgGAGAAQAAAAABAAQABAAAAABQAAAAABAAQAAAAABABIAAABIgFAFIAKAKIAGAEIgCABIgGACIgBACIgDgCgAA1kEQACgGAEAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQgLgIAAgFIAAgCIADgBIAIABIAAgGQAAgbAPAAQAGAAAEACIAAAAIAAAFIAAAEIABAGIAAAHIAAAGIgBAEIAAgBIAAgFIgCADIgIAJIgJADIgEAPIgEABQgEAAgDgCgABEkuIAAAHQAIABABAGQAKgFAAgIQAAgJgNAAQgCAAgEAIgAAUkwQAAgJAEgEIAXgCQAFAEAAAIQAAAbgMAAQgTAAgBgYgAApkmQAAAHgDABIAFAAQAAgHAEgOIAAgGQgCgDgQAAIgEAMIABAIQABgFAHAAQAKAAgDAHgABWk9IgCgDIgDgBIAEAAIACAEg");
	this.shape_6.setTransform(0,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D5AB6F").s().p("Ah+ErQgogVAAgJQAAgFAfgSQAggTAGgXQAMguAPgQQAIgHAFgCIgqgtIAOgGQARgIAbgBIAsBCQAAAIgRAUIgZAaQgDAEgdAUQgYAPAAAJQAAAOAbATQAkAaAFAFIAAAIIgTAAQgJgDgGAAQgIAAgEAFQgDAEgKAAIgogUgAjEDrQgDgEgHgCIADAAQAbgRAPgdQANgZABAAQAKAAAEAFQADAFAMAAQAOAAAHgCIgFAXIAAAAQgZAAgMAZQgLAYgZAAQgTAAgCgDgAAJCMQAYAAAAgIIgagjIgWgdIAAAAIgEgFQAFgDAGgHQAMgJAYAAIAMAAQAQAeARARQAHAHAAAaIgBAbQggADgYAPQgYAPgVAEQAegdABgTgAiBgmIgZgSQAMgKALgoQACgRADgMQAFgQAHgIIAAAAIAwAoQAgAgAeAKQgUAQgEAHQgEAHAAATIgEAFQgFAHgTAAQggAAglgWgAg7gsIABAIIAIACIABAAIAAgCIgJgNIgBAAgAjdgbIgJgEQgPgBgFgDQgMgHAAgLQAAgOAWgXQAWgWgDgmQgBgbATgWQAKgLAQgVQAPgOAZAAQASAAALADIAHAIIAGAGIAIARIAAAGIAVAPIApAAIALgGQgBgBAAgBQAAgBABgBQAAAAAAgBQABAAABAAIAEgCIAIgIIAGgJQABgLgEgFQgCgEgBgFIgKgJIgBgCIABgCIAEgCIACgLIAOgPIACgRIAFgLIAHAAQgEAEAAAJQABAYATAAQAMAAAAgbQAAgIgFgEIAigCIADACIACACIABABIAAABQgEgCgGAAQgPAAAAAbIAAAHIgIgCIgDABIAAACQAAAFALAIQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAQgEAAgCAGQADACAEAAIAEgBIAAACIgLANIgCAAIgCAAIgBABIgBABIgDAAIgCAAIgDADIgFgEIgKgKIAFgFIAAgBQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgGAAgBAGQgDAFgEgBQgGAAgDACQAAAEAHAAQAEAAAGgEQABAFAIAIIADACIgCAFIgKACQgDACACAGQAAAEgBACQgCAEAAADIAAAJIgBAIQgBAHADAEIABACQAHAAAIADQAHAEAFACIAYAAIAbAAQAHAKABAQIAAAsQgBAaAGAAQAFAAAAgFQgEgIAAgEQAAgMAjgTQAjgTAAgSIgFgZQAAgCASgTIAJAAIABACIABAMIgBABIABABIABADQAAAFgMAEIADAEQAPgDABgKIAAAFIACAFQACACADABIAAAEQACACABAEIACABIAAABQAAAQARAEQgJAKgOgCQgRgDgLAQIgVAfQgRAbgKALQgSAUgbAAQgbAAgKgiQACgYgDgHQADgHAAgJQAAgPgFgGIgggZIgVgGIAAgGQgEgNgEAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQADAFADAKIgWgIIgtgJIAAAAQgIgBgjgNIgMgJQgIgIgGAAQgNAAAAAGIAAADIgEALQgHAZgJAGQgFADgNARQgQAWAAANQAAAKAPAKQAPALAAAIQAAAGgLAEQgLADAAAIIACAMIAAAEQAAACgJAAQAEgDgVAAgADyiNQgIgCgDgJIgBgDIARABQAKAAAFgDQABAIAAAIgADhilIAEAAQAUAAAFgPQAJAMAAABQADAGgUAAQgTAAgCgEgADYiyIAAgFQAJgGAVgPIAFAJIAAACIAAAAQgBAAgBABQgBAAAAAAQgBAAAAABQAAAAAAABIAEAFQgDANgUAAQgMAAAAgGgADPjGIAIgIQAIgJAIAAQAJAAAEAGIgVANIgOAHIgCgJgABVkbIACgDIAAAFIAAABIgCADIgIADIAIgJg");
	this.shape_7.setTransform(0,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D5AB6F").s().p("AA5BVIgYgDQgFgCgGgFQgHgEgHgBIgBgCQgCgFACgGIACgJIABgIQAAgEADgDQACgCAAgEQgBgGADgCIALgBIACgEQAIAIAJABQAEABAAgEIAAgDQgGgCgGgFIADgDIACABIADAAIABAAIABgBIACAAIACAAIANgKIAAgCQAFgCABgHIABgEQAEAAAFgDIAIgCIADgCIAAABIgIAKQgFAEgBAHIAAACIgBAEIAAAAIgEAKIgDAFIgDADQgEADgFACIgKAEIgCABIgDgBIgDAAQgHgEgPAFIAAACIAEACQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAIAAACIgBAEQgCAQALAFQAEADAVAEQAWAEAIAOIgbgEgAhHApIgTgSIABgHIgGgRIgFgGIgGgJIAIAFQAFAEAEAGQAGAEgDACQACACAdAGQALACAKAIIAFAAIACABQAJABADgOQADgEABgHIAAgLIgCgJIAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIAAgLQALgDABgMIgBgIIACAAIABAAIABACQAHgFANgGIAEgDIABAAQAHABABgLQAAgCAFgCIAHgCIACAAIAFgBIAEACIACgCIAAgBIABAAIAHABQABABAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIADABIAIAGIADAAIAAABIAFgBQABAKAFAEIgjgCQgEgEgHgBQgHgBgFAEIgHgBIgGAKIgEARIgRAMIgDALIgFABIgBACIABADIAIAKQAAAEACAEQADAFgDAMIgGAHIgJAHIgFACQgDgBAAAFIgMAFgABfghQAGgHAAgCQADgLgHgEIAAgBIADABIAEAAIADAHQgDAKgFAHg");
	this.shape_8.setTransform(3.1,-18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("ABkAUIAAABIgEAHIAAAAIAEgIgAAFgLIAAAAIgBgCIAHgCIABABQgCADgGABgAhjgZIAAAAIACgCIACACIgBABIgCAAIgBgBg");
	this.shape_9.setTransform(4.1,-24.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABCCCIAAgBQgIgOgWgEQgVgEgEgDQgLgFACgQIABgEIAAgCQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIgEgBIAAgDQAPgFAHAEIACAAIAEABIACgBIAKgEQAFgCAEgDIADgDIADgFIAEgKIAAAAIABgFIAAgCQABgHAFgEIAIgKIAAgBIABgEIABgGIAAgGIABgGIAAgEIABgFIAAAAQAHAEgDALQAAACgGAGIAEAAQAFgGADgKIgDgHIgFAAIgCgBIgBgFIgEgBQgEgEgBgKIgFABIAAgBIgDAAIgJgGIgCgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAgBIgHgBIgBAAIAAABIgDACIgDgCIgFABIgDAAIgHACQgEACAAACQgBALgHgBIgBAAIgEADQgMAGgHAFIgCgCIgBAAIgCAAIABAIQgCALgKADIAAALQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAAIACAKIAAALQgBAHgDAEQgDAOgJgBIgCgBIgFAAQgKgIgLgCQgdgGgCgCQADgCgGgFQgEgGgFgEIgIgFIgJgKQAKACAGADIgDgEQgCgDABgEIgFgCQgFgCgDgCQgEgDAAgEIAEgHQgPgJABgJIADgHQADgGAIgFIgCgKQABgJATgGIgBgMQADgVAZAEQABgGAMgKQAMgLAFABQAJABADAKQADALACADQAHgVAJABQAJABAKAHQAFgGAKACQARACABACQACgIALACQAQACAEANIAKgGQARACgBATIgBACQAHgBAQACQAJABAAACIAAALQAEABAKgCQAIABgDAPQAAABAGAHQADAEgBAFQgBAKgKACQAEADAGAKQAHAKAAAEQgBACgcASQASAQgBAIQgBAIgQAJQAGAGgBAGQgBAFgLAEQgLADAAACIAHAIIABAIIgNAMQgGACAAADQAAAGgGAAQgGgBgFgHIgIAFIAFALIgFAAgABJBkQAEABAIANQACgHARgKIgIgPQAAgFAFgBIASgIQgDgIgFgEQABgCAIgEQAJgEABgGQABgEgKgIQgKgIABgFQAAgEAegQQABgEgSgXQABgGALgGQAAgEgJgJIAAgNIgQAEQgEgBACgHQABgIgIgBIgWADIgBgCIgCACQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIADgJQACgMgLgBQgJAIgCAAQgCAAgEgIQgDgIgLgCQgIgBACAKQAAAAAAABQgBABAAAAQAAABgBAAQgBAAAAAAQADgGgYgDIgJgBIADAIQAAAEgDgBQgSgNgGgBQgGgBgKAeQgCAAgGgRQgGgQgEgBQgFgBgOAPIgFAHIAAAFIgLgBQgPgCgBAOQADAKgBAEQgVAFgBAIQAGAFAAAEQgJAIgFAFQgDAEAAACQgBAGAJADQAJAEAAACQgGADgBAGQAAAEADABQAKgCADAFIAAAIQgBACAHACIADAEIACACQABABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQACADAAAEQAPAKAqAOIAGgIIABAAIgBgCIAEgJIABgGIgBgFQgFAJgGAAIgDgCIgSgEQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgFAHABQABAAABAAQAAAAAAAAQABABAAAAQAAAAgBABIAIABQABgFAEABIAEADQACgHACgDIgEgJQABgDACgDIgFgBQgDAEgGAAQgIAAgDACQgIgBgEgMQAAgFAEABQADAKAFABIAIgCQAFAAADgDQgBgFACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAHAFABQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAFgHQABgGACgDQgLgDgFgHQgFgGgEACQgGADgFgDQgDgCAAgEQABgCAEgFIAHgEIAEAHQAAACgIADQAcAEgHgDQABAAABAAQAAAAABABQAAAAAAABQABABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQAFAFAIABIAHABIAEgCIAAgBIABAAIAIgEIAJgGQACgGACgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAEgDQgJgJAAgBIACgDIgEgGQAAgDAEAAQAJABgBAMQAFAFAAAFQAEAAAEACIAEABIACgBIAGAAIADgBIgEgDQgCgFABgFQACgLAKABQABAAAAABQABAAAAAAQAAABAAABQABAAAAABQgIAGgBACQAAAFAGAFIAEADIAHADIACgCIgGgLQAAgEAGABQAEAAgDAFQAGAIgBADIAAABQAHAAgBgLQAAgDAEAAQAEABgCAGQgBAJgEADQACADAAAEIgBADQABADACACIABAAIAHgEIAFgFIADACIAEgCIAFABQAEABAEgEIAAgBIgDACIgDgFQABgEAGABQAFAAACAIQgCAKgYgBQgCAEgDACIABAAIAGAGIAIABQABgHAGABQAEAAAAAEQgCAKgOgCIgFgBIAAAFIgCAHIAAAAIgEAHIAAAAIgGAHIAAAAIgBACIALAEQAEAAADgEQADgEADAAQAEABgCAEQAAACgFAEQgGAEgFAAIgIgCIAAADQgBAIAFABQAHABACgCQAEAAgBAEQgFAEgBAEQAAACAEABQAEABACgCQAEAAAAAEQgDAKgDAAQgDgBAAgFQgNgBACgNQgKgDgBgFQgBgDACgFIgDAAIgCgDIgGALQADACgCAIIgEAPQgDAKgHACIAAABQgBACAEADIAGABIAFgFQAFAAgBAFQgCAEAGABQABAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAEAAgCAFQgBAEgGgBIgNgFQgKgCgBgBQgGgFABgFIAAAAIAAAAIgDAAIAAABIgKAHQAGAFgBADIgDADQAAAAAAAAQAAAAAAABQABAAAAAAQABAAABABQADAAAFgCQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQgBAHgKgCQgMgBAEgJQAAgGgDgEIABgDIgGACQgFABgCACIgBgBIgCAAIgBAAIgCACQAAAGACAEQAEAGAKAEIAFABQAVAFAIADQADgCAHAAIABgIQAAgBABgBQAAAAAAAAQABgBAAAAQABAAAAAAIABAAgAgDgiIABACIgBAAIABAAIgBAAQAFgBACgCIgBgBgAAcA/QgIgBgIgIIABgBIAHgBIABgCQAGAFAGACIAAADQAAADgDAAIgCAAgAA2AUIAKgCQgGADgDAAIgBAEQgBAHgFACgAARgcQAFgEAHACQAHAAAEAEgAhqgtIACAAIgBABIgBgBgAhrgxIACABIgCACg");
	this.shape_10.setTransform(4.9,-22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E4B01").s().p("ABJBpQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAABIgBAIQgHABgDACQgIgEgVgEIgFgCQgKgDgEgGQgCgFAAgFIACgDIABABIACAAIABABQACgDAFgBIAGgBIgBACQADAFAAAFQgEAJAMACQAKACABgHQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQgFADgDgBQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIADgDQABgDgGgFIAKgGIAAgBIADgBIAAABQgBAFAGAEQABACAKABIANAFQAGABABgEQACgEgEgBQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAgBgBQgGAAACgFQABgEgFgBIgFAFIgGAAQgEgDABgCIAAgBQAHgCADgLIAEgOQABgJgCgBIAGgMIACAEIADgBQgCAFABADQABAGAKACQgCANANACQAAAFADAAQADABADgKQAAgEgEgBQgCACgEAAQgEgBAAgDQABgEAFgEQABgDgEgBQgCACgHgBQgFgBABgHIAAgEIAIACQAFABAGgEQAFgEAAgCQACgFgEAAQgDgBgDAFQgDAEgEgBIgLgEIABgBIAAAAIAGgIIAEgHIACgGIAAgFIAFABQAOACACgKQAAgEgEgBQgGAAgBAGIgIgBIgGgFIgBgBQADgBACgEQAYAAACgJQgCgIgFgBQgGgBgBAFIADAEIADgBIAAABQgEADgEAAIgFgCIgEACIgDgBIgFAFIgHAEIgBgBQgCgBgBgEIABgDQAAgEgCgCQAEgEABgIQACgHgEAAQgEgBAAADQABAMgHgBIAAgBQABgCgGgIQADgFgEgBQgGAAAAAEIAGALIgCACIgHgDIgEgDQgGgGAAgFQABgCAIgFQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQgKgCgCAMQgBAEACAGIAEADIgDAAIgGAAIgCABIgEAAQgEgCgEAAQAAgFgFgGQABgLgJgBQgEgBAAAEIAEAFIgCADQAAACAJAJIgEADQAAAAAAABQAAABAAAAQAAAAABABQAAAAAAABQgCADgCAHIgJAFIgIAFIgBgBIAAABIgEACIgHgBQgIgBgFgEQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBgBQAHADgcgEQAIgDAAgCIgEgGIgHAEQgEAFgBACQAAADADACQAFAEAGgDQAEgDAFAGQAFAIALADQgCACgBAGIgFAHQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQgFgBgBgGQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgCACABAEQgDADgFAAIgIABQgFgBgDgJQgEAAAAAEQAEANAIABQADgDAIAAQAGABADgGIAFACQgCADgBADIAEAKQgCADgCAGIgEgDQgEgBgBAFIgIgBQABAAAAAAQAAgBgBAAQAAAAAAAAQgBAAgBgBQgHgBAAAFQAAABAAABQAAAAAAABQAAAAAAAAQABABAAAAIASADIADACQAGABAFgKIABAFIgBAGIgEAKIABABIgBAAIgGAIQgqgOgPgJQAAgEgCgDQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgCgDIgDgDQgHgCABgCIAAgIQgDgGgKACQgDgCAAgCQABgGAGgDQAAgCgJgEQgJgEABgFQAAgDADgEQAFgFAJgHQAAgEgGgFQABgJAVgFQABgDgDgLQABgOAPADIALABIAAgFIAFgIQAOgOAFABQAEAAAGARQAGAQACABQAKgeAGABQAGABASANQADAAAAgDIgDgJIAJABQAYAEgDAFQAAAAABAAQABAAAAAAQAAgBABAAQAAgBAAgBQgCgJAIABQALACADAIQAEAHACAAQACABAJgIQALABgCALIgDAKQAAABAAAAQAAABAAAAQABABAAAAQABABABAAIACgCIABABIAWgCQAIABgBAHQgCAIAEAAIAQgEIAAANQAJAJAAAEQgLAGgBAHQASAWgBAFQgeAPAAAEQgBAFAKAIQAKAIgBAEQgBAGgJAEQgIAEgBADQAFAEADAHIgSAIQgFACAAAEIAIAPQgRALgCAGQgIgNgEAAgAhrgqIAAABIABABIABAAIABgBIABgBIgCgCIgCgBg");
	this.shape_11.setTransform(4.9,-22.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D5AB6F").s().p("Ah5EqQgogWAAgJQAAgEAegSQAggUAGgXQAMguAQgPQAHgIAFgBIgpguIANgFQASgIAbgCIArBDQAAAIgRAUIgYAaQgEAEgdATQgXAQAAAIQAAAOAbATQAkAaAEAFIAAAJIgTAAQgJgDgFAAQgJAAgDAEQgEAEgJAAIgogTgAjADqQgDgFgHgBIADgBQAbgQAQgdQANgZABAAQAJAAAEAFQAEAEAMAAQAOAAAHgBIgFAWIgBAAQgZAAgLAZQgLAZgaAAQgSAAgDgDgAAOCLQAYAAAAgIIgbgjIgVgdIAAgBIgFgEQAFgDAHgHQAMgJAYAAIAMAAQAQAeAQAQQAIAHAAAbIgBAaQggAEgYAOQgZAPgVAEQAfgdABgSgABfABQgbgEgEgjQAGgYgCgHQAEgGABgJQADgPgEgGIgcgeIgTgKIABgFQgDgOgEgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQADAGABAKIgUgLIgqgQIAAAAQgIgCghgTIgKgLQgGgJgGgBQgNgCgBAGIAAADIgGAKQgLAYgKAEQgGACgPAPQgTATgCANQgCAKANAMQAOANgCAIQgBAGgLACQgMACgBAHIAAAMIgBAFQAAABgJgBQAEgDgVgDIgHgFQgPgEgEgDQgMgJACgLQADgOAZgTQAZgTAEglQADgbAWgSIAfgcQARgLAYAEQAbAEAJAIQAGAFADAGQAGAEgCADQABABAdAHQALACAKAJIAEAAIACABQAGAAADgFQADgFACgJIgCgYIABgDIAAgOQALgDACgMIgBgIIACgBIACADQAHgFAOgGQAJgGACgGIABgEQADgIAYAEQAUADADAIQACAAAFgCIABABQAAAGAFAOIAEABIAEABIADAHQgDAKgFAHIgEgBQAGgGAAgCQAFgQgSgDQgPgDgFAbIgBAHIgHgDIgDAAIgBADQAAAEAJAKQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgDAGQADACADAAQAJACABgLIABgEQAHAAALgKIADgDIgBAFIABACIgIALQgFADgBAIIgBAEIgFANQgEAIgLAEQgHACgDACIgCAAIgEAAIgCgBQgHgDgQAEIABADIAEABQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABIABACIgBADQgBAIACAGQACAFAFADQAEACAVAFQAmAHgFAnIgHAsQgFAZAGABQAFABABgFQgDgJABgDQACgMAlgNQAmgOADgSIgBgZQAAgCAUgQIAKACIAAABIgBAMIgBABIABACIABADQgBAFgNACIACAEQAQAAACgKIgBAFIACAFQACACACACIAAAEQACACAAAEIACABIAAABQgDAQAQAHQgLAIgNgEQgQgFgOAOIgZAbQgVAYgMAJQgRAMgUAAIgLAAgAA+jXQAIAKAKACQAFABABgEIgBgDQgJgDgHgJIgIgLIAFgEIAAgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgFgBgDAGQgDAEgEgBQgFgCgEACQgBAEAHACQAFAAAGgDQAAAFAHAJgABBkbQgDAXATAEQAMABAEgaQACgOgQgDIgEAAQgMAAgCAPgAh9goIgZgRIAFgGIACgCIABgCIABgBIAAAAIACgFIABAAIADgFIACgFQALgTAGgNQAFgQAFgMQAHgPAIgHIAAAAIAqAvQAaAlAbAPQgVAMgFAHQgEAFgDAOIgBABIgBAEIgBABIgDABQgGADgOAAQggAAgmgWgAg3gqIAAAIIAHADIACAAIAAgCIgHgOIgBAAg");
	this.shape_12.setTransform(-0.4,4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF66FF").s().p("AheBNQgYgoAAgUIAAgNQABgEAIgDIAGgDQAJAJAWAMQAjAVAjAAQASAAADgDIACgFIACgBIABACIADABQAFAAAAgEIAOAGQAXAKAJAJQAOAOAOATIgGgCIgDgCIgDAAIAAACQgQgBgWAKQgSAIgGAFQgRgWgEgVQALABAAgFIgDgEIgQAFQAAAVAcAgIgMABIgCgBIgDABIAAABQg2AFgTAOIgjg3gABSgRQgbgFgZgXQgLgKgLgPQgdgpgMgJIABgBIgBgDIAAAAQAEgIACABQArAHAhATIAOALQAIAGAEgCQAEgBAIAEQADACADADQAMAOALAMQAFAHgCANQgEAUgWAAIgLgBg");
	this.shape_13.setTransform(-5.6,-0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF00CC").s().p("AAAAAIAAAAIAAAAg");
	this.shape_14.setTransform(-9,-12.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALAKIABgIQAFgGACAAQANACgCAIQgBAJgLACQAAgGgHgBgAgTAOQADgBABgHQAEgGgKgBQgHgBgBADIAAgGIAGgLQAPACACADIgBAGQgGAMgBAHg");
	this.shape_15.setTransform(9.5,-23.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CA9460").s().p("AAAAjQgGgDgCgJIgBgDIAQADQAKACAFgCQAAAIgCAIgAAHAQQgRgCgCgFIAEABQASADAJgNQAGAMAAACQABAEgIAAIgLgCgAgIADQgMgCACgFIAAgFQAKgEAWgMIADAKIAAACIAAAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAABIADAFQgEAJgNAAIgHAAgAgYgZIAJgHQAJgHAHABQAJACADAGIgWAKIgPAEIAAgJg");
	this.shape_16.setTransform(25.4,-8.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("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ALIgfAcQgWASgDAbQgEAlgYATQgaATgDAOQgBALALAJQAEADAPAEIAIAFQAUADgEADQAJABABgBIAAgFIAAgMQABgHAMgCQALgCABgGQACgIgNgNQgOgMACgKQACgNATgTQAPgPAGgCQAKgEALgYIAGgKIAAgDQABgGANACQAGABAHAJIAKALQAhATAHABIAAABIArAQIAUALQgCgKgCgGIADgBIAAAAgAibglIAAABIgBABIgBACIgBACIgFAGIAYARQAmAVAgAAQAPAAAGgDIACgBIACgBIABgEIAAgBQADgNAEgFQAFgHAWgMQgcgPgaglIgpgvIgBAAQgIAHgHAPQgFAMgFAPQgGAOgLATIgCAFIgDAFIgBAAIgCAEgAhjiLIABAAIAAACIgBABIABAAQALAJAeApQALAPALALQAZAXAaAEQAhAGAEgZQACgNgFgHQgLgLgMgOQgDgEgDgBQgHgEgFABQgEABgHgGIgOgLQghgTgsgHIAAAAQgCAAgEAIgADrhGQACAJAHADIAUADQADgIgBgHQgFACgKgCIgRgEIABAEgAD7hNQAUADgCgGQAAgBgGgNQgJAOgTgEIgEgBQACAFASADgADhhoIAAAFQgBAGALACQAUADAFgMIgDgFQAAgBAAgBQAAAAABAAQAAAAABAAQABAAABAAIAAAAIAAgCIgDgLQgXAMgKAEgADkh/IgJAHIAAAKIAPgFIAXgKQgDgGgJgBIgDAAQgGAAgIAFgABbiZIAAABIAAACIAAACIAEgBIgDgGIgBACgAA6iWIAAgBIAAAAgABgikIgCACIAAAAIAGAIIgBgHIABgGQgCADgCAAgABpijIABAIIABgDQgBgFAEgBIAAgBIgEgDgAB1imIABgBIgGgRQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQgDAAgBgCIgCAHIABAAQADAAAKAMgAB8itIABgBIACgDIgGgFIADAJgAByjBQAHAAAMAKIABgBIAAAAIgRgcQgGAIgBADQAAADABAGQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBAAAAIABABgACCjIQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAQAEAAACADIACgBQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgBIgDgBIgCgBQgEAAgBAEgAgGjTQAAABAAABQAAAAAAABQABAAAAABQABAAABAAIADgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAgBAAIgBgBQgBABAAAAQgBABAAAAQAAABgBAAQAAABAAAAgACajPIADgGQgLgIgJgBIgFABIAVAOIAAAAIABAAgAB6jbIgCADQABAEAHABIAKACIgPgLIgBABgAB/jiQAEgBAEgEIAAAAIgEgDIgEAIgABijyIgBAIQAHABAAAGQALgCABgJQACgJgNgCIAAAAQgCAAgFAHgAgnjuIgCABIACAAQAGgBAKgGIgCAAIAAAAIgOAGgAACjxIAAAEQAFgEADAAIABgCIgCAAgAgJj3QAKABAFgDIgCgCQgDADgHAAgAgkkEQgJAGgCAAIgCACIAIACIAXgNIAAAAIgBAAIgEAAQgHAAgGADgAgUj8IAAABIAAAAIANgIIgBAAIgBAAQgDAAgIAHgAgBkAQABABAHgFIABgBIgDgBIgBAAQgDAAgCAGgAgskUQgRAHgEAIIAAABQARgCAPgIIAUgLIABgBIgBAAIgGAAQgMAAgNAGgACKkMIAAAEQAMACAMgIIgLgCIgCAAQgFAAgGAEgAAkkOIABACIgBAAIAAAAIAAABQAGgBACgCIgBgCgAgUkOIgBABIABAAQAIgCAOgIIABgBIgFgBgAADkQIAAAAIAHACIANgEIgEgGIgCAAQgGAAgIAIgAB5kTQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAJABAEgDIgBgBIgFAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAgAB3kSIABABIAAgCgABokXIABAAIgBAAgAhEkbIAAABIAAAAIAegKQAOgFANABIAAAAIAAgBQgLgGgLgBIgCAAQgNAAgUAVgAgikeIgBAAIABAAQAOAAAWgCIAEgBIgGgBIgMgBQgMAAgKAFgABIkiIAGAAQAFABAAACIABgBIAAgBQgCgNgKgCIgBABQgBAFAJAGIgEgBIgLgNIgBABQAGAJgBACIgBABIgGgFIgBAAQgBADADADIgDAAIAAACIAGABIACgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBIACABgAgPk1QAEABAbALIAeAFQgRgEgpgOgAB2kmIAAAAQAPgFADgEIAAAAQgEAAgOAJgABFk3IABAAQAAgDgGgEIgFgEIgCgCIgCgBIgFAAQgIAEgIgDIgQgEIABACIgEABIABABIAAABIAAAAQAFAEAXAEIAAAAIAEABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABABAAQAKgDAAgDIAAgBIADABIADADIABAAgAAGk7IgEACQAFABASgDIgCgBIgEAAIgNABgABqk9IAAABIADgKQACgLgMgDIAHAXgAAalVQAHADAEAGIAMACIgDgEQgIgGgJgBgAAAlUIADAFIAGgEIABgBgAhFgCIAAgIIABgFIABAAIAHAOIAAABIgCAAIgHgCgAjDgQIABAAIABgBIABAAIABgBIACAAIACAAIgIADIAAgBgABDirQgLgCgIgKQgHgJAAgFQgGADgEAAQgIgCABgEQAEgCAGACQADABAEgEQACgGAFABQABAAABABQAAAAABAAQAAAAAAABQABAAAAAAIAAACIgFAEIAIALQAHAJAJADIABADQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgBAAgAgYi9IgDgCIAAgDIAJgJIADABQgBAFACADQgIAFgCAAIAAAAgAgrjMQABgFAGgFQAFABAFgDIADABIgBAGIgQAJIgDgEgABDjhQgTgDADgYQADgQAPACQAQADgCAOQgEAZgLAAIgBgBgABAj2QAKABgEAHQgBAHgDABIAFABQABgIAGgNIABgGQgCgDgPgCIgGALIAAAHQABgDAFAAIACAAgABGklIABgBIABABIgBAAg");
	this.shape_17.setTransform(1,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAsBeIABgBIAAgBIAAgCIADAFIgEACIAAgDgAAvBTIAAgBIACgBQACgBACgCIgBAFIABAIIgGgIgAA7BSIABgFIAEADIgBABQgDAAAAAGIAAADIgBgIgAA6BCIgCAAIACgHQACADADAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIAHARIgCAAQgKgLgCgBgABLA/IAGAFIgDADIgBABIgCgJgABEAzQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBgGABgDQAAgEAGgHIASAcIAAAAIgCABQgMgKgGgBgAgyA4QgIgBgCgEQgCgDABgGIgDAAQgGgCAAgDIAAgBIABgGIgDgBQgGACgFAAIgCAAIgCgBIABgFIABgBQACgEADgBIAAACIAAABQASgLAMgDIAAACIgXAOIgEACIAJABQACAAgBAGIAAABIAMgJIgBAFIgGAJIADgBIAAAFQgBAEACACIAFgCIABAAIAAAAIABAHIACAAQACgDAEgBIABACQgCADgDABIgCABIgBgBgABVAvQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgFAGABIADABIAAACQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABABAAQAAABAAAAQABABABAAIgDACQgBgDgEgBgAg0AiQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBIACAAQABAAAAABQABAAAAAAQAAABAAABQABAAgBABIgEAEQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBgABqAlIgUgOIAFgBQAIACAMAHIgEAGIgBAAgABSAiQgHgBgCgEIADgDIAAgBIAQALgABUALIAFADIgBAAQgEAEgDABIADgIgAgrAEIAHgCIABAAIAAACQgDAAgFAEgAhWAHQANgGACAAIABAAQgKAGgGABgAg4gBIADgBQAIAAADgDIACACQgDACgIAAIgFAAgAhggHIACgBQACAAAKgGQAHgFAKACIAAAAIgWAMgAhCgGQAIgIADAAIABABIgMAIgAgwgKQAEgGADAAIADABIAAABIgKAEIAAAAgAhvgQQAEgIAQgHQARgHAOACIAAABIgUALQgOAIgSACgABbgSIABgEQAHgFAGABIAKACQgKAGgLAAIgDAAgAgJgWIAAgBIAAgBIAHgCIAAABQgCADgFAAgAhCgYIASgLIAGABIgCABQgPAIgIABgAgrgaIAAAAQAJgJAIABIAEAGIgNADgABLgaQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIAFgDQABABAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAFAAIABABQgDACgFAAIgEAAgAhyglQAVgYAOACQAKACALAGIAAAAQgNAAgOAFIgdAKgAhRgoIABgBQANgHAUAEIAHAAIgDACQgWACgOAAIgCAAgAAfgsIgGAAIgBgBQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBABIgGgBIAAgCIADAAQgEgDACgDIABgBIAGAGIABgBQAAgCgGgKIABAAIAMANIADAAQgIgFABgGIABAAQAKACACANIgBABIgBAAQABgBgGgBgAAYgvIAAAAIABAAIgBgCgAgeg0QgbgKgFgBIAEgBQApAOARAEgABHgxQAPgJAEAAQgEAFgPAFgAhYg+IADgBQABgIAEgEQABgGAFABQADgBAkAFQgjAIgSAGgAAqg+QgKgCgFgKIgEgKIgCgEIABgDIACABIAEABQAGAGAKAUIgCABIAAAAgAAThFIgBABIgEgDIgCgBIAAABQgBADgKADQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgDAAIAAAAQgXgEgEgFIAAAAIgBgBIADgBIAAgCIAQAEQAHACAIgDIAEgBIADACIACACIAFAEQAFAEABACIgCABgAgrhDIAEgCQALgCAFABIADAAIgUADIgDAAgAA7hHIgHgYQANADgCAMIgDAJgAgJhWQgEgGgHgDIADgBQAJACAIAGIADADgAguheIALgBIgCABIgFAFIgEgFg");
	this.shape_18.setTransform(5.6,-23.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF66FF").s().p("AAOAJQgLgFgJgGIgLgIQAFADADgBQAEgBAHAEQADACADADIAKALIgEgCg");
	this.shape_19.setTransform(2.9,-8.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAMARIAAgBIgCgMQAAgGAFgHIAEgBIAFABQAFACABADIgBAAQgKAAAAAIQAAAGAHAAIACAAQgDAHgKAAgAgbAHQgCgDAAgDIAAgFIAEgMQAPAAADADIAAAEIgCgDIgBABIgBgBQgHAAAAAJIABADQABADAGAAIACAAQgBAHgDADIgBAAIgDABQgHAAgEgHg");
	this.shape_20.setTransform(7.9,-23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D5AB6F").s().p("AAEBjIgUgWIgTgKIABgFQgDgOgDgBQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQACAGACAKIgVgLIgKgEIgMgOQgagOgZgYQgRgRgKgUIABAAIAIABIAGAIIAIAFQAFAEAEAGQAGAEgDADQACABAdAHQALABAKAIIAFAAIACABQADAAADgCIADgEIABgCIACgFQADgDABgIIAAAAIAAgLIgDgJIAAAAQABgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgBAAIAAgLIAEgBQAEgDACgFIACgFIAAgBIgBgHIABgBIACAAIACADQAHgFANgHIAEgDIABAAQAHABABgKQAAgCAEgCIAGgCIADAAIAEgBIABAAIABAAIACABIADgCIAAgBIABABIAHABQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAIACABIADACIADADIACABIABABIADgBIAAABIAEgBIAAAAIABAFIAFAJIAAABIAAAAIABACIAEABIAAAAIAAACIACABIADAAIABAAIAEAIQgDAKgFAHIgEgBIACgCQAEgEAAgCQADgKgFgEIgCgCIAAAAQgEgEgJgBQgFAAgEADQgIABAAASIABABQgBAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQABAFABADQgDgCgFAAIgDAAIgBADQAAAEALAJQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgEAAgCAGIABAAIAGACIABAAIAAgCQAFgBABgIIABgEIABAAQADAAAFgDIgBABQAEgDAGgHIACgDIAAAFIAAABIAAABIgBACIAAAAIAAAAIgCADIgFAIQgFADgBAIIAAACIgBAEIgBABIgDAKIgDAEIgDADQgEADgGACIgJAEIgDAAIgDAAIgCgBQgGgDgPAEIAAADIAEABQgBABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIABACIgBADQgCAQALAGQAEACAUAEQAVAEAIAPIABAAIAFABIgFgLIAAgBQATAMgDAcIAAABIgQABQgUAAgUgGgAgMgFIADAEIAAABQAEADAFADIAGACQAFABAAgEIAAgDIAAgBIgEgBQgEgBgDgDIAAgBIAAAAIgFgGIgFgFIAFgEIAAgCQgBAAAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgGAAgBAFQgDAFgEgBQgGAAgDABQgBAFAIAAQAEAAAGgDQAAACADAEgAgEhUIAFABQgMAAgBAQQAAAYASABQAMAAABgaQABgMgMgDIAJABQgDgDgHgBIgEAAQgEAAgDACgACdA5IAEABIgYAQIAUgRg");
	this.shape_21.setTransform(5.7,-17);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("ABiAXIACgCIAAAAIgBABIgDAGIAAAAIACgFgAAFgLIAAAAIgBgCIAHgBIABAAQgCADgGAAgAhjgZIAAAAIACgCIACACIgBABIgCABIgBgCg");
	this.shape_22.setTransform(2.6,-24.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AA8CQQADgcgSgMIgBABIAFALIgEgBIgBAAQgIgPgWgEQgUgEgEgCQgLgGADgQIAAgDIAAgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAgBIgEgBIAAgDQAPgFAGAEIADABIADAAIACAAIAKgEQAFgCAEgDIADgDIADgFIAEgKIAAgBIABgEIAAgCQABgIAGgDIAEgIIADgDIAAAAIgBAAIABgBIABgBIgBgBIABgFIgDADQgFAFgFAEIABgBQgEADgEAAIgBAAIgBAEQgBAHgEACIgBACIgBAAIgGgCIAAAAQABgHAEABQABgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAQgLgJAAgDIABgDIADAAQAEAAADACQgBgDAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgBQAAgSAHgBQAEgDAFAAQAJABAEAEIAAAAIACACQAFAEgDAKQAAABgDAFIgCACIADABQAFgHADgKIgDgIIgBAAIgDAAIgDgBIAAgCIAAAAIgEgBIgBgCIABAAIgBgBIgEgJIgBgFIgBAAIgEABIAAgBIgDABIgBgBIgBgBIgEgDIgCgCIgCgBQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgIgBIgBgBIAAABIgCACIgDgBIgBAAIgBAAIgEABIgCAAIgGACQgFACABACQgCAKgHgBIgBAAIgEADQgNAHgHAFIgCgDIgBAAIgBABIAAAHIAAABIgBAFQgCAFgEADIgEABIAAAKIAAAAQAAABABAAQAAAAAAABQAAABAAAAQAAABAAABIAAAAIACAJIAAALIAAAAQgBAIgCADIgCAGIgBACIgEAEQgDACgDAAIgCgBIgFAAQgKgIgLgCQgdgHgBgBQACgDgGgEQgEgGgFgEIgIgFIgGgIIgIgBIAAAAIgDgGIAEAAIAQADIAAgEIgFgBQgFgCgDgDQgEgDABgFQAAgDADgEQgPgJACgIIACgHQADgHAIgEIgCgKQABgKAUgFIgCgNQADgUAZADQABgFAMgLQAMgKAFABQAJABAEAKQACAKACADQAHgVAJACQAJABAKAGQAFgGALACQAQACACADQABgIALACQAQACAEANIAKgHQARADgBASIgBADQAIgCAPADQAJABAAABIABAMQADAAAKgCQAIABgCAQQgBABAHAHQACADgBAFQgBALgKACQAEACAHAKQAGAKAAAEQgBADgZAQIADAEIADADIgCABQALALgBAHQgBAIgQAIQAGAHgBAFQAAAGgLADQgMAEAAABIAHAIIABAIIgNAMQgFACgBAEQAAAGgGgBQgGgBgFgHIgCACIAFADQAFAFAFAXQABAFAAAHIgGABgAAzBWIACABQAEACAGAKQACgGARgLIgIgPQAAgEAGgCIARgIQgDgHgEgEQAAgDAJgEQAIgEABgGQABgEgKgIIgCgBQgGgGgBgDIAAgDIAEgDIADgCIAXgOQABgDgHgKIgEgGIgHgIQABgHALgGQAAgEgIgJIAAgNIgRAEQgEgBACgHIAAgCQAAgFgGgBIgXACIgBgBIgCACIgCgBIgBgDIACgGIABgEQACgLgKgBIgHAFIgFACIgBAAIgDgEIgCgDQgCgIgKgCIgCAAQgHgBABAJIAAABQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQACgFgPgDIgHgBIgJgBIADAJIAAACQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgFgEQgOgJgFgBQgEgBgGAOIgGAQIgDgFIAAgBIgEgJIgBgCQgGgRgEAAQgFgBgOAOIgFAIIAAAFIgKgBQgQgDgBAOQADALgBADQgVAFgBAJQAGAFAAAEQgJAHgEAFQgEAEAAADQgBAFAJAEQAJADAAADQgGADAAAGQgBADAEACQAJgCAEAGIgBAIQAAACAGABIABAAIACADIADADQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAIAAACIgDABQACADAAAEIAJAFQALAFATAHIAFACIAHACIAGACIABAAIABgCIAEgGIAAAAIABAAIAAgBIAEgKIAAgEIAAgCIAAgFIgCADIgFAFQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgBAAIgBgCIgFgBIgDAAIgCgBIgJgBQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQABgFAGABIADABIgBABIAIABQABgFAEABIAEADQACgHADgCIgEgJQAAgDADgDIgEgBIgCgBIAAABQgDAFgGgBQgIAAgCADIgBAAIgCgBQgFgCgEgHIgBgFQABgEAEAAIABAFQADAGADAAIAIgBQAFAAADgEQgBgEACgCQAAgBABAAQAAAAABAAQAAgBABAAQABAAABABIAAADIABABQABADADAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAFgHQABgGADgCIgJgEIgEgCIgEgEIAAgBIgBgBQgEgFgEADQgGADgFgEIgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBABAAIAAAAQAAgCAEgEIABgBIAAgBIAGgDIAEAGIgCADIgFACIAIACQASACgGgDQABAAABABQAAAAABAAQAAABAAAAQABABAAABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABIACABQAEADAFABIADAAIAHABIADgCIAAgBIABABIAJgFIAKgFQABgHADgDQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAEgDIAAAAIAAAAQgJgJAAgCIACgDIgEgFQABgEAEABIACABQAGACgBAJQAFAGABAFIABAAIACAAIABABIACABIAEAAIACgBIAFABIABgBIADAAIgEgDQgBgGAAgEIABgEIACgDQADgEAGABIABAAIACADIAAABQgIAFAAACQgBAFAHAGIADADIAHADIACgCIgGgLQAAgFAGABQAEABgCAFQAFAIAAACIgBABQAEABABgEIABgBIAAgHQABgDAEABQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAAEIAAABQgCAIgEAEIABAAIABADIAAADIgBADQABAEACABIACABIAGgEIAFgFIADABIAFgCIAEACIADAAIAGgDIAAAAIgBgBIgDABIgCgEIAAAAQAAgFAHABQAEABACAIIAAACQgIAFgGABIgMABQgCAEgDABIABABIAGAFIAIABQABgHAGABQAFABgBAEQgBAEgDADQgEACgHgBIgEgBIgCAAIAAAAIAAABIAAAEIgBAEIgBADIAAAAIgBADIgDAFIABgBIgDAEIgEADIAAAAIAAABIACABQACACADAAIADABIAFgBIACgBIABgBQABgCACgBIACAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAAADQgBACgFAEIgCABQgDAAgCACIgEAAIgGgBIgCgBIAAAEQgBAHAGABIAGAAIACgBQAEABgBADIgBACIgDACIgBAEQgBADAFABQADAAACgCQABAAABAAQAAABABAAQAAAAABABQAAABAAAAIAAACQgDAKgDgBQgDAAABgFIgDgBIgEgBIgCgBQgEgEABgIQgIgCgCgDIgBgDQAAgDABgFIgCABIAAAAIgCgEIgGAMQACABgCAJIgEAOQgDALgHACIAAABQgBACAFADIAFAAIABAAIAAAAIAEgEIAAgBIACABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQgBAEAFABIACABQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAEABgCAEQAAADgEABIgDgBIgMgFQgLgCAAgBQgGgEAAgFIAAgBIgCABIAAABIgKAGQAFAFAAADIgEADIABACIACAAIAEAAIAEgCQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIABACIgBABQgCAFgJgBIgGgCQgEgDACgGIAAgEIgCgGIAAgCIgFABQgFABgCADIAAgBIgDAAIAAgBIgBAAIgBADQgBAFACAFIACACIAFAEIADACIADABIAGACQAUAEAJAEIADgCIAGgBIABgIQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAIABABgAAmgdQgFAGAAAHIACANIAAABIADAAQAKAAADgHIgCAAQgHAAAAgHQAAgIAKAAIABAAQgBgEgFgBIgFgBIgEABgAgYgxIAAACIAAAAIAAABQAFgBACgCIgBgBgAgICHIgKgLQgDgEgDgBQgIgEgFABQgCABgFgDQgPgLgMgNIAKAEIAVALQgCgKgCgGQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQADABAEAOIgBAFIATAKIATAWIgMgFgACDBzQAAgFAMgJQAOgLAMACIACABIgJAGIgFgBIgUARIgCABIgFADIABgEgAAHAxIgHgCQgFgDgEgEIABgBIgEgEQgCgEgBgCQgFADgFAAQgHAAAAgFQADgCAHABQADABADgFQACgFAFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABACIgFAEIAFAFIAEAGIAAAAIAAABQADADAFACIADABIAAABIABADQgBADgDAAIgBAAgAAHgBQgSgBAAgYQAAgQANAAIgGgBQAEgDAHABQAHABAEADIgKgBQAMADgBAMQgBAagLAAIAAAAgAgGgZIAAAGQAAAEACADQAEAGAGAAIADAAIABAAQADgEABgGIgCAAQgGAAgBgEIgBgDQAAgJAHAAIABAAIABAAIACACIAAgDQgDgDgOgBIgEAMgAiAg7IACgBIAAABIgCAAgAiAhAIABABIgCACg");
	this.shape_23.setTransform(5.6,-21.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7E4B01").s().p("ABLBqIgCgBQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAABIgBAIIgGABIgEACQgIgEgVgEIgFgCIgFgBIgCgCIgFgEIgCgCQgCgFAAgFIACgDIAAAAIABABIACAAIABABQACgDAFgBIAGgBIgBACIADAGIAAAEQgDAGAFADIAGACQAJABACgFIAAgBIAAgCQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIgEACIgEAAIgCAAIgBgCIADgDQABgDgGgFIAKgGIAAgBIADgBIAAABQgBAFAGAEQABACAKABIANAFIADABQADgBABgDQACgEgEgBQAAABgBAAQAAAAAAAAQAAAAgBABQAAAAgBAAIgCgBQgGAAACgFQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAIgCgBIAAABIgEAEIgBAAIgBAAIgFAAQgEgDABgCIAAgBQAHgCADgLIAEgOQABgJgCgBIAGgMIACAEIABAAIACgBQgCAFABADIABADQACADAIACQgBAIAEAEIABABIAFABIACABQAAAFADAAQADABADgKIAAgCQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAQgCACgEAAQgEgBAAgDIACgEIACgCIACgCQABgDgEgBIgCABIgHAAQgFgBABgHIAAgEIACABIAGABIAEAAQABgCAEAAIACgBQAFgEAAgCIABgDQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIgCAAQgCABgCADIgBABIgCABIgEABIgDgBQgEAAgCgCIgCgBIABgBIAAAAIADgEIADgEIADgFIABgCIABgDIABgDIAAgEIAAgBIAAAAIACAAIADABQAIABAEgCQADgCABgFQAAgEgEgBQgGAAgBAGIgIgBIgGgFIgBgBQADgBACgEIAMgBQAGgBAHgFIABgCQgCgIgFgBQgGgBgBAFIABAAIACAEIADgBIAAABIAAAAIgFADIgDAAIgFgCIgEACIgDgBIgFAFIgHAEIgBgBQgCgBgBgEIABgDIgBgDIAAgDIgBAAQAEgEABgIIAAgBIABgEQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQgEgBAAADIgBAHIAAABQgBAEgEgBIAAgBQABgCgGgIQADgFgEgBQgGAAAAAEIAGALIgCACIgHgDIgEgDQgGgGAAgFQABgCAIgFIAAgBIgCgDIgBAAQgGgBgDAEIgCADIgBAEQgBAEACAGIAEADIgDAAIgCABIgEgBIgCABIgEAAIgDgBIgBgBIgCAAIgCAAQAAgFgFgGQABgJgGgCIgDgBQgEgBAAAEIAEAFIgCADQAAACAIAJIABAAIgBAAIgDADQAAAAAAABQAAABAAAAQAAAAABABQAAAAAAABQgCADgCAHIgJAFIgIAFIgBgBIAAABIgEACIgHgBIgCAAQgFgBgEgDIgCgBQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBgBQAGADgSgCIgJgCIAFgCIADgDIgEgGIgGADIgBABIAAABQgEAEgBACIAAAAQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIABABQAFAEAGgDQADgCAEAEIACABIAAABIAEAEIAEACIAIAEQgCACgBAGIgFAHQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQgDAAgCgDIAAgBIgBgDQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgCACABAEQgDADgFAAIgIABQgDAAgDgFIgCgFQgEAAAAAEIABAEQAEAHAFACIABABIABAAQADgDAIAAQAGABADgFIAAgBIACABIADABQgCADgBADIAEAKQgCADgCAGIgEgDQgEgBgBAFIgIgBIAAgBIgCgBQgHgBAAAFQAAABAAABQAAAAAAABQAAAAAAAAQABABAAAAIAIABIADABIADAAIAEABIACACIABAAQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIAEgFIACgDIABAFIAAACIgBAEIgEAKIABABIgBAAIAAAAIgEAGIgCACIAAAAIgGgCIgIgCIgEgCQgTgHgLgFIgJgFQAAgEgCgDIACgBIABgCQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgCgDIgCgDIgBAAQgHgCABgCIAAgIQgDgGgKACQgDgCAAgCQABgGAGgDQAAgCgJgEQgJgEABgFQAAgDADgEQAFgFAJgHQAAgEgGgFQABgJAVgFQABgDgDgLQABgOAPADIALABIAAgFIAFgIQAOgOAFABQAEAAAGARIABACIADAJIABABIADAFIAGgQQAGgOAEABQAFABAOAJIAFAEQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgCIgDgJIAJABIAHABQAQAEgCAEQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIAAgBQgCgJAIABIABAAQAKACADAIIACADIADAEIABAAIAEgCIAHgFQALABgCALIgCAEIgBAGIAAADIADABIACgCIABABIAWgCQAHABAAAFIAAACQgCAIAEAAIAQgEIAAANQAJAJAAAEQgLAGgBAHIAHAIIAEAGQAHAKgBADIgXANIgEACIgDAEIAAADQABAEAGAFIACABQAKAIgBAEQgBAGgJAEQgIAEgBADQAFAEADAHIgSAIQgFACAAAEIAIAPQgRALgCAGQgGgJgEgDgAhrgqIAAABIABABIABAAIABgBIABgBIgCgCIgCgBg");
	this.shape_24.setTransform(3.4,-23);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D5AB6F").s().p("AiHELQgogWAAgJQAAgEAegSQAggUAGgXQAMguAQgPQAHgIAFgBIgpguIANgFQASgIAbgCIAsBDQAAAIgSAUIgYAaQgEAEgdATQgXAQAAAIQAAAOAbATQAkAaAEAFIAAAJIgTAAQgJgDgFAAQgJAAgDAEQgEAEgJAAIgogTgAjODLQgDgFgHgBIADgBQAbgQAQgdQANgZABAAQAJAAAEAFQAEAEAMAAQAOAAAHgBIgFAWIgBAAQgZAAgLAZQgLAZgaAAQgSAAgDgDgAAABsQAYAAAAgIIgagjIgWgeIAAAAIgFgFQAFgCAHgHQANgJAXAAIAMAAQAQAeAQAQQAIAHAAAbIgBAaQggAEgYAOQgYAPgWAEQAggdAAgSgABRgeQgbgEgEgjQAGgYgCgHQAEgGABgJQADgPgEgHIgHgHQAcAIAbgEIgHArQgFAaAGABQAFABABgFQgDgJABgEQACgLAlgOQAmgNADgSIgBgZIABgBIAYgQIAFABIAAABIgBAMIgBABIABACIABADQgBAFgNACIACAEQAQAAACgKIgBAEIACAGQABACADACIAAADQACADAAAEIACABIAAABQgDAQAQAGQgLAJgNgEQgQgFgOAOIgZAbQgVAYgMAJQgRANgUAAIgLgBgAiLhHIgZgRIAFgGIACgCIABgCIABgBIAAgBIACgEIABAAIADgFIACgFQALgTAGgOQAFgPAFgMQAHgPAIgHIAAAAIAqAvQAaAlAcAOQgWANgFAHQgEAFgDANIgBACIgBAEIgBABIgDAAQgGAEgOAAQggAAgmgWgAhFhJIAAAIIAHADIACAAIAAgCIgHgOIgBAAgAjXhOQAEgCgVgDIgHgGQgPgDgEgDQgMgJACgLQACgOAagTQAZgTAEgmQADgaAWgTIAfgbQARgLAYAEQAJAUASARQAZAZAaAOIALAOIgggMIAAgBQgIgBghgTIgKgLQgGgJgGgBQgNgCgBAGIAAACIgGALQgMAYgJAEQgGACgPAPQgTATgCANQgCAKANAMQANANgBAIQgBAGgLACQgMACgBAHIAAAMIgBAEIgCABIgHgBgAD0h5QgHgDgDgJIAAgEIARAEQAJACAGgCQAAAHgCAIgAD7iMQgSgDgCgFIAEABQATAEAIgPQAHAOAAABQABAEgIAAIgLgBgADriaQgMgCABgGIABgFQAKgEAXgMIADALIAAACIAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAIADAGQgEAKgNAAIgHgBgADbi3IAIgHQAKgGAHABQAKABADAGIgXAKIgPAFIAAgKg");
	this.shape_25.setTransform(1,7.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF66FF").s().p("AheBNQgYgoAAgUIAAgNQABgEAIgDIAGgDQAJAJAWAMQAjAVAjAAQASAAADgDIACgFIACgBIABACIADABQAFAAAAgEIAOAGQAXAKAJAJQAOAOAOATIgGgCIgDgCIgDAAIAAACQgQgBgWAKQgSAIgGAFQgRgWgEgVQALABAAgFIgDgEIgQAFQAAAVAcAgIgMABIgCgBIgDABIAAABQg2AFgTAOIgjg3gABSgRQgbgFgZgXQgLgKgLgPQgdgpgMgJIABgBIgBgDIAAAAQAEgIACABQArAHAhATIAOALIAEADIALAHQAKAHALAFIAEACIANAOQAFAHgCANQgEAUgWAAIgLgBg");
	this.shape_26.setTransform(-5.6,-0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("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");
	this.shape_27.setTransform(1,7.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7E4B01").s().p("ABLBqIgCgBQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAABIgBAIIgGABIgEACQgIgEgVgEIgFgCIgFgBIgCgCIAAAAIgFgEIAAAAIgCgCQgCgFAAgFIACgDIAAAAIABABIACAAIABABQACgDAFgBIAGgBIgBACIADAGIAAAEQgDAGAFADIAGACQAJABACgFIAAAAIAAgBIAAgCIAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIgEACIgEAAIgCAAIAAgBIgBgBIADgDQABgDgGgFIAKgGIAAgBIADgBIAAABQgBAFAGAEQABACAKABIANAFIADABQADgBABgDQACgEgEgBQAAABgBAAQAAAAAAAAQAAAAgBABQAAAAgBAAIgCgBQgGAAACgFQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAIgCgBIAAABIgEAEIgBAAIgBAAIgFAAQgEgDABgCIAAgBQAHgCADgLIAEgOQABgJgCgBIAGgMIACAEIABAAIACgBQgCAFABADIABADQACADAIACQgBAIAEAEIAAAAIABABIAFABIACABQAAAFADAAQADABADgKIAAgCQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAQgCACgEAAQgEgBAAgDIACgEIACgCIACgCQABgDgEgBIgCABIgHAAQgFgBABgHIAAgEIACABIAGABIAEAAQAAAAABgBQAAAAAAAAQABAAABgBQAAAAABAAIABAAIACgBQAFgEAAgCIABgDQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIgCAAQgCABgCADIgBABIgCABIgEABIgDgBIAAAAQgEAAgCgCIgCgBIABgBIAAAAIADgEIADgEIADgFIAAAAIABgCIABgDIABgDIAAgEIAAgBIAAAAIACAAIADABQAIABAEgCQADgCABgFQAAgEgEgBQgGAAgBAGIgIgBIgGgFIgBgBQADgBACgEIAMgBQAGgBAHgFIABgCQgCgIgFgBQgGgBgBAFIABAAIACAEIADgBIAAABIAAAAIgFADIAAAAIgDAAIgFgCIgEACIgDgBIgFAFIgHAEIgBgBQgCgBgBgEIABgDIgBgDIAAgDIgBAAQAEgEABgIIAAgBIABgEQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQgEgBAAADIgBAHIAAABQgBAEgEgBIAAgBQABgCgGgIQADgFgEgBQgGAAAAAEIAGALIgCACIgHgDIgEgDQgGgGAAgFQABgCAIgFIAAgBIgCgDIgBAAQgGgBgDAEIgCADIgBAEQgBAEACAGIAEADIgDAAIgCABIgEgBIgCABIgEAAIgDgBIgBgBIgCAAIgCAAQAAgFgFgGQABgJgGgCIgDgBQgEgBAAAEIAEAFIgCADQAAACAIAJIABAAIgBAAIgDADQAAAAAAABQAAABAAAAQAAAAABABQAAAAAAABQgCADgCAHIgJAFIgIAFIgBgBIAAABIgEACIgHgBIgCAAQgFgBgEgDIgCgBQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBgBQAGADgSgCIgBAAIgIgCIAFgCIADgDIgEgGIgGADIgBABIAAABIAAAAQgEAEgBACIAAAAQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIABABQAFAEAGgDQADgCAEAEIACABIAAABIAEAEIAEACIAAAAIAIAEQgCACgBAGIgFAHQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQgDAAgCgDIAAgBIgBgDQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgCACABAEQgDADgFAAIgIABQgDAAgDgFIgCgFQgEAAAAAEIABAEQAEAHAFACIABABIABAAQADgDAIAAQAGABADgFIAAgBIABABIABAAIADABQgCADgBADIAEAKQgCADgCAGIgEgDQgEgBgBAFIgIgBIAAgBIgCgBQgHgBAAAFQAAABAAABQAAAAAAABQAAAAAAAAQABABAAAAIAIABIADABIADAAIAEABIACACIABAAQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIAEgFIACgDIABAFIAAACIgBAEIgEAKIABABIgBAAIAAAAIgEAGIgCACIAAAAIgBAAIgFgCIAAAAIgIgCIgEgCIAAAAIgQgGIgOgGIgJgFQAAgEgCgDIACgBIABgCQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgCgDIgCgDIgBAAQgHgCABgCIAAgFIAAgDQgDgGgKACQgDgCAAgCIABgCQABgFAFgCQAAgCgJgEQgJgEABgFQAAgDADgEQAFgFAJgHQAAgEgGgFQABgJAVgFQABgDgDgLQABgOAPADIALABIAAgFIAFgIQAOgOAFABQAEAAAGARIABACIADAJIABABIADAFIAGgQQAGgOAEABQAFABAOAJIAFAEQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgCIgDgJIAJABIAHABQAQAEgCAEQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIAAgBQgCgJAIABIABAAQAKACADAIIACADIADAEIABAAIAEgCIAHgFQALABgCALIgCAEIAAAAIgBAGIAAADIADABIACgCIABABIAWgCQAHABAAAFIAAACQgCAIAEAAIAQgEIAAANQAJAJAAAEQgLAGgBAHIAHAIIAEAGQAHAKgBADIgXANIgEACIgDAEIAAADQABAEAGAFIACABQAKAIgBAEQgBAGgJAEQgIAEgBADQAFAEADAHIgSAIQgFACAAAEIAIAPQgRALgCAGQgGgJgEgDgAhrgqIAAABIABABIABAAIABgBIABgBIgCgCIgCgBg");
	this.shape_28.setTransform(3.4,-23);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D5AB6F").s().p("Ah3EqQgogWAAgJQAAgEAegSQAggUAGgWQAMguAQgQQAHgHAFgCIgpgtIANgGQASgIAbgCIArBDQAAAIgRAUIgYAaQgEAEgdATQgXAQAAAJQAAANAbAUQAkAZAEAFIAAAJIgTAAQgJgDgFAAQgJAAgDAEQgEAEgJABIgogUgAi+DqQgDgFgHgBIADAAQAbgRAQgdQANgZABAAQAJAAAEAFQAEAEAMABQAOgBAHgBIgFAWIgBAAQgZAAgLAaQgLAYgaAAQgSAAgDgDgAAQCLQAYAAAAgIIgbgjIgVgdIAAAAIgFgFQAFgDAHgHQAMgJAYAAIAMAAQAQAeAQAQQAIAIAAAaIgBAbQggADgYAPQgZAOgVAEQAfgcABgTgABhABQgbgEgEgjQAGgXgCgIQAEgGABgJQADgPgEgGIgHgIIgVgWIgTgKIABgFQgDgOgEAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQADAGABAKIgVgLIgpgQIAAAAIgcgLIgLgOIgEgPQgCgKgFgEQgKgHgEAFIgBACIgKAGQgUARgLAAQgGAAgUAGQgZAJgIALQgGAIAHARQAGARgFAHQgDAFgLgDQgMgEgEAGIgFALIgCAEQgBABgIgFQAFAAgRgMIgFgJQgLgJgDgFQgGgNAGgJQAIgMAggGQAegFATghQAPgXAbgHQAQgDAYgIQAHgBAHABIACADQADADAGACIAEABIAAAFIgQgEIgEAAIADAHIAAAAIAIABIAGAIIAIAFQAGAEADAGQAGAEgCADQABABAUAFIAFABIAEABQALACALAIIAEAAIACABQAEAAACgCIADgEIABgBIACgHQACgDABgIIAAAAIAAgLIgCgJIAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIAAAAIAAgKIAEgCQAEgDACgEIACgGIAAgBIgBgHIABgBIABAAIADADQAGgFANgHIAFgDIAAAAQAHABACgKQAAgCAEgCIAHgCIACAAIAFgBIABAAIAAAAIADABIADgCIAAgBIAAABIAIABQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIACABIADACIADADIAAAAIACABIAAABIADgBIAAABIAEgBIABAAIABAFIABACIADAHIABABIAAAAIAAACIABAAIADABIAAAAIABACIACABIADAAIABAAIADAIQgCAKgFAHIgEgBIACgCQADgEABgCQACgJgFgFIAAAAIgBgCIAAAAQgEgEgJAAQgGgBgDADQgIACAAARIAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAABQAAAEABADQgDgCgEAAIgDAAIgBADQAAAEALAJQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgEAAgCAGIABAAIAFACIABAAIABgCQAEgBABgIIABgDIACAAQADgBAEgDIgBABIAFgEIAFgGIADgDIgBAFIAAAAIABACIAAABIgCABIABAAIAAAAIgCADIgFAIQgFADgBAIIAAACIgCAEIAAABIgEAKIgDAFIgDADQgDADgGACIgJAEIgDAAIgDAAIgDgBQgHgDgPAEIAAADIAFACQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIABACIgBAEQgCAPAKAGQAFADAVAEQAVAEAIAOIABAAIAEABIgFgLIABAAIAAAAQAEACADAEIAIAfIAAAAIAAABIAAABIAAAAIAAABIgHArQgFAZAGABQAFABABgFQgDgJABgDQACgMAlgNQAmgNADgSIgBgaIABgBIATgRIAKACIAAABIgBANIgBABIABABIABADQgBAFgNACIACAFQAQgBACgKIgBAFIACAFQACACACACIAAAEQACACAAAEIACABIAAABQgDAQAQAHQgLAIgNgEQgQgFgOAOIgZAbQgVAYgMAJQgRANgUAAIgLgBgAg7i4IAAAAIABAAIAAAAIgBAAgAAyjaIAAAAIAAABIABABIABABIABABIgBABQAFAEAEADIABAAIAHACQAEABABgEIgBgDIAAAAIgDgCIgBAAQgEgCgDgDIAAgBIgBAAIgEgGIgFgEIAFgFIgBgCQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgFAAgCAFQgCAFgEgBQgGAAgEABQAAAFAIAAQAEAAAGgDQAAADADADgAA6kpIAGABQgNAAgBAQQAAAYATABQAMAAABgaQAAgMgLgDIAJABQgDgDgHgBIgEAAQgFAAgDACgAh7gnIgZgSIAFgGIACgCIABgBIABgCIAAAAIACgFIABAAIADgFIACgFQALgSAGgOQAFgQAFgMQAHgPAIgGIAAAAIAqAuQAaAlAbAPQgVAMgFAHQgEAFgDAOIgBABIgBAEIgBACIgDAAQgGADgOAAQggAAgmgVgAg1gqIAAAIIAHADIACAAIAAgBIgHgPIgBAAgAEEhaQgHgDgDgJIAAgDIARADQAKACAFgCQAAAIgCAIgAELhtQgSgDgCgEIAEAAQATAEAIgOQAHANAAACQABADgIAAIgLgBgAD7h6QgMgCABgGIABgGQAKgEAXgMIADALIAAACIAAAAQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBABIADAFQgDAKgOAAIgHAAgADriXIAIgHQAKgHAHABQAKABADAHIgXAKIgPAEIAAgJg");
	this.shape_29.setTransform(-0.6,4.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF66FF").s().p("AheBNQgYgoAAgUIAAgNQABgEAIgDIAGgDQAJAJAWAMQAjAVAjAAQASAAADgDIACgFIACgBIABACIADABQAFAAAAgEIAOAGQAXAKAJAJQAOAOAOATIgGgCIgDgCIgDAAIAAACQgQgBgWAKQgSAIgGAFQgRgWgEgVQALABAAgFIgDgEIgQAFQAAAVAcAgIgMABIgCgBIgDABIAAABQg2AFgTAOIgjg3gABSgRQgbgFgZgXQgLgKgLgPQgdgpgMgJIABgBIgBgDIAAAAQAEgIACABQArAHAhATIAOALIAFADIgBAAIAFACIACgBIABAAQAEgBAIAEQADACADADIAKAMIANAOQAFAHgCANQgEAUgWAAIgLgBg");
	this.shape_30.setTransform(-5.6,-0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CA9460").s().p("AAAAAIgBAAIACABg");
	this.shape_31.setTransform(-7.2,-13.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("ABiAXIACgCIAAAAIgBABIAAAAIgDAGIAAAAIACgFgAAFgLIAAAAIgBgCIAHgBIABAAQgCADgGAAgAhjgZIAAAAIACgCIACACIgBABIgCABIgBgCg");
	this.shape_32.setTransform(2.6,-24.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AiDFOQgigRAAgNQAAgLAlgTQAagPAGgWIAAgFIgWAIQgGAGgDAJQAEAagtAAQgOAAgOgGQgNgGAAgCQAfgWALgQQAEgHAIgXQAEgMALAAQAVAAACAKIAegCQAHgRASgNQgdgagGgLIAAgCIgMAFIgmg+IgVgiQgFgKAAgTQAAgMAEgHIABAAIAEgEQAAgFADgDIAAAAIAAAFIAEgBIABAAIABgBIgBgBIACgBIAFgHIADgEQAUgeAIgUQAFgTAEgJQAGgNALgGIAAgBIAGgHIAEgMIAAAAIgBAAIADgBQgEgGgCgJQgFgPgDgDQgEgCgCADQgBABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIAAABIAAAAQgDADgKAFQgPAKgLACQgKABgTAGQgWAIgFAHQgDAEAGASQAGASgHAKIgBABIAAAAQgEABgDAEIgFABIgBAAIABAAIgDgBIgBgBIgBgBIgCAAIAAAAIgCAAIgBgBIAAABIgGgBQgEAFgCAIQgHAJgIgGQgSgMgHgPQgOgPgCgDQgFgKAJgNQALgQAjgIQAggHAOgeQAKgVAmgIIAbgKQALgCALABIADgFQgOgIABgJIACgHQAEgHAIgEIgDgKQABgJAUgGIgCgMQADgVAZADQABgFAMgKQAMgLAFABQAJABAEAKQACALADADQAFgWAKACQAIABALAHQAEgGALABQARADACACQABgIALACQARACADANIAKgGQARACAAATIgBACQAHgBAPACQAJABABABIAAAMQADAAALgCQAHACgCAPQAAABAGAHQACAEAAAFQgCAKgKACQAEADAHAKQAGAKAAADQAAADgZARIABACIACACIADADIgDABQALALgBAHQgBAIgQAJQAGAGAAAGQgBAFgLAEQgLADgBABIAHAIIACAIIgOAMQgFADgBADQAAAGgFgBQgGgBgFgGIgDABIAFADQAFAGAFAWQACAFgBAHIgBAMIgFAaIABABQAJgFAggNQAcgNACgLQgDgLABgKIABgEQABgFALgKQAOgKANACIABABIABACIAbgOQATADAAANIAAAAQACAEABALIgBAEQAGAGADATQgBADgCADIABAAIgBAMQgDAPgPgDIgFgBQgEAMgdgEQgSgCgEAEQgBAHgEADQgIAGgRAUQgbAhgUAIQgOAHgXgEQgWgEgGgLIgJggIAEgWQgMAHgVgEQgJgBgKgEIAAgBIAAABQgCAMgZALQgEADgBAGIADgBIAAAFQAWABAgAdQAeAbAAAKQAAABgBAAQAAABAAABQAAAAgBAAQAAABAAAAIgIgBIAWAjQAPAOAAAgQAAAYgCADQgEAHgZAEQg4AegPAAQgIAAgBgDIgOAMQgyAkAAACQAAAMAiAWQAiAVAAAOQAAALgQAAQgKgDgOAAQgHAAgCAEQgBAEgJAAIg7gbgAhOB2IgNAGIApAtQgFACgHAHQgQAQgMAuQgGAXggATQgeASAAAFQAAAJAoAVIAoAUQAJAAAEgEQADgFAJAAQAFAAAJADIATAAIAAgIQgEgFgkgaQgbgTAAgOQAAgJAXgPQAdgUAEgEIAYgaQARgUAAgIIgrhDQgbACgSAIgAiZDbQgQAdgbARIgDAAQAHACADAEQADADASAAQAaAAALgYQALgZAZAAIABAAIAFgXQgHACgOAAQgMAAgEgFQgEgFgJAAQgBAAgNAZgAAABZQgHAHgFADIAFAFIAAAAIAVAdIAbAjQAAAIgYAAQgBATgfAdQAVgFAZgOQAYgPAggDIABgbQAAgagIgHQgRgRgPgeIgMAAQgYAAgMAJgAgYBsQAHAJANAVIASAgQAEgDAPgBQgpgqgHgRIgJABgAiegNQgIAEgBAEIAAAMQAAAUAYAoIAjA3QATgOA3gFIAAgBIADgBIACABIAMgBQgcggAAgVIAQgFIADAEQAAAFgLgBQAEAUARAXQAGgFARgIQAWgLAQABIAAgBIADAAIADACIAGACQgOgTgOgOQgJgJgWgKIgOgGQAAAEgFAAIgDgBIgBgCIgCABIgCAFQgDADgTAAQgjAAgjgVQgWgMgJgKIgGAEgAAWh/QADAAAEAOIgBAFIATAKIAVAWIAHAIQAEAGgDAPQgBAJgEAGQACAIgGAXQAEAiAbAFQAbAEAVgRQALgJAWgXIAZgbQAOgOAQAFQANAEALgIQgQgHADgPIAAgBIgCgCQgBgEgBgCIAAgEQgDgBgBgDIgCgFIABgFQgCAKgQABIgCgFQANgCABgFIgBgDIgBgBIABgBIABgMIAAgCIgKgBIgTAQIgBABIABAaQgDASgmANQgmANgBAMQgBADADAJQgBAFgFgBQgGgBAFgZIAHgrIAAAAIAAgBIAAgBIAAgBIAAAAIgIgfQgDgEgEgCIAAAAIgBAAIAFALIgEgBIgBAAQgIgOgVgEQgWgEgEgDQgLgFADgQIABgEIgBgCQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIgFgCIAAgCQAPgFAHADIADABIADAAIADAAIAJgEQAGgCADgDIADgDIADgFIAEgKIAAgBIACgEIAAgCQABgIAFgDIAFgHIACgEIAAAAIgBABIACgCIAAgBIgBgCIAAAAIABgFIgDADIgFAGIgFAEIABAAQgEACgDABIgCAAIgBADQgBAIgEABIgBACIgBAAIgFgBIgBgBQACgGAEAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBQgLgIAAgFIABgCIADgBQAEAAADACQgBgCAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAgBQAAgRAIgBQADgEAGABQAJAAAEAEIAAABIABABIAAAAQAFAFgCAJQgBACgDAEIgCACIAEABQAEgHADgKIgDgHIgBAAIgDgBIgCgBIgBgBIAAAAIgDgCIgBAAIAAgCIAAAAIgBgBIgDgHIgBgCIgBgFIgBABIgEAAIAAgBIgDABIAAgBIgCgBIAAAAIgDgDIgDgCIgCAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAIgIgBIAAAAIAAABIgDABIgDgBIAAAAIgBAAIgFABIgCAAIgHACQgFACABACQgCALgHgBIAAAAIgFACQgNAHgGAFIgDgCIgBAAIgBAAIABAIIAAAAIgCAGQgCAEgEADIgEACIAAAKIAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABIAAAAIACAJIAAALIAAAAQgBAIgCADIgCAHIgBABIgDAEQgCACgEAAIgCgBIgEAAQgLgIgLgCIgEgBIgFgBQgUgFgBgBQACgCgGgFQgEgGgFgEIgIgFIgGgHIgIgCIAAAAIgDgHIAEAAIAQAEIAAgFIgEgBQgGgCgDgDIgCgDQgHgBgHABQgZAIgPADQgcAHgOAXQgTAhgeAGQggAGgIALQgGAJAGANQACAFAMAJIAFAJQARAMgFAAQAIAFABgBIACgEIAFgLQAEgGAMAEQALADADgFQAFgHgGgRQgHgRAGgIQAHgLAagJQAUgGAGAAQAKAAAVgQIAKgHIABgCQADgFALAHQAFAEACALIAEAOIALAOIAcALIAAAAIApAQIAVALQgBgJgDgGIADgBIABAAgAiKgfIAAAAIgBACIgBACIgCACIgFAFIAZASQAmAVAgAAQAOAAAGgEIADAAIABgCIABgEIABgBQADgNAEgFQAEgHAWgMQgbgPgaglIgqguIAAAAQgIAGgHAPQgGAMgEAQQgHAOgKASIgCAFIgDAFIgBAAIgCAFgAhSiGIAAAAIABADIgBAAIAAAAQAMAKAeApQALAPALAKQAYAXAbAFQAhAFAEgZQACgMgFgHIgNgOIgKgMQgDgDgDgCQgIgEgEABIgBAAIgCAAIgFgCIABABIgFgDIgOgLQghgTgrgIIAAAAQgCAAgEAIgAD7hBQACAJAIADIAUAEQACgIAAgIQgGACgJgCIgRgDIAAADgAEMhIQAUAEgCgGQAAgCgHgNQgIAOgTgDIgEgBQACAEASADgADyhiIgBAFQgBAGAMACQATADAFgNIgDgFQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAIAAAAIAAgCIgDgKQgXAMgKAEgAD0h5IgIAHIAAAJIAPgEIAXgKQgDgGgKgCIgCAAQgGAAgJAGgABziCIACABQADADAGAJQADgGAQgLIgIgPQABgEAFgCIARgHQgDgIgEgEQAAgCAJgFQAIgDABgGQABgEgJgIIgCgCQgGgFgBgEIgBgCIAEgEIAEgDIAXgOQAAgDgHgKIgEgFIgHgJQABgGALgGQABgEgJgKIAAgMIgQADQgEAAABgIIAAgCQABgFgHgBIgXACIAAgBIgDACIgCgBIgBgDIACgFIAAgBIACgDQABgMgKgBIgHAGIgFACIgBgBIgDgEIgBgDQgDgIgKgCIgCAAQgHgBACAJIgBABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQACgFgQgDIgHgCIgJAAIAEAIIgBACQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgGgEQgNgJgGgBQgEgBgGAOIgFAQIgCgEIgBgCIgEgJIAAgCQgHgQgEgBQgFgBgOAOIgEAIIgBAFIgKgBQgQgCgBAOQADAKAAAEQgVAFgCAIQAHAFgBAEQgJAIgEAFQgDAEgBACQgBAGAKADQAJAEgBACQgFADgBAFIAAABQgBADAEACQAJgCAEAGIAAADIgBAFQAAACAHACIAAAAIADAEIACACQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAIgBACIgDABQACADAAAEIAJAFIAPAGIAPAGIABAAIAEACIAHACIABAAIAFACIAAAAIABABIABgCIADgHIAAAAIABAAIAAgBIAEgJIAAgFIAAgBIAAgFIgCADIgEAEQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAIgCAAIgBgCIgFAAIgDgBIgCAAIgIgCQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQABgFAGABIADAAIAAABIAHACQABgFAFAAIAEADQABgGACgDIgDgJQAAgDACgDIgDgCIAAAAIgBgBIgBABQgDAFgFAAQgJgBgCADIgBAAIgCgBQgFgCgDgHIgCgEQABgFAEABIACAEQACAGADAAIAIgBQAGAAACgDQAAgFABgCQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIABADIAAABQABADACABQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAGgIQAAgFADgDIgIgDIAAAAIgEgDIgDgEIgBAAIgBgCQgEgEgEACQgFADgFgEIgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAAAQAAgCAEgEIAAAAIABgBIABAAIAFgEIAFAHIgDACIgFADIAIABIAAAAQARACgGgCQABAAABAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAIADACQADACAFABIADABIAHAAIADgBIAAgBIACAAIAIgEIAKgGQABgGADgEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAEgDIAAAAIAAAAQgJgJABgCIABgCIgEgGQABgEAEABIADABQAFACgBAKQAGAFAAAFIACAAIACABIABAAIACABIAEAAIACAAIAFAAIACAAIACgBIgDgDQgCgFABgFIABgEIABgDQADgEAHABIAAAAIACAEIAAAAQgIAGAAACQgBAEAHAGIAEADIAGADIADgCIgHgLQABgEAGABQADAAgCAFQAFAIAAACIgBACQAEAAABgDIABgCIAAgHQABgDAEABQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAIAAAFIAAAAQgBAJgEADIAAABIABACIAAAEIgBACQABAEACABIACABIAHgEIAEgFIAEABIAEgCIAEACIADAAIAAAAIAGgDIAAAAIgBgBIgCABIgDgEIAAAAQAAgFAHABQAEABACAIIAAACQgIAFgFACIgNAAQgCAEgCACIAAAAIAHAGIAHABQABgHAGABQAFAAgBAEQAAAFgEACQgEACgHgBIgEgBIgBAAIAAAAIAAABIgBAEIAAAEIgBADIgBAAIgBADIgDAFIABAAIgDAEIgDADIgBAAIAAABIACABQACACAEAAIAAABIACAAIAFAAIACgCIABgBQACgDACgBIACAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAACQAAACgFAEIgDABIgBAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBAAIgEAAIgGgBIgCgBIAAAEQgBAIAGAAIAGABIACgBQAEAAAAAEIgCABIgDADIgBADQgBADAFABQAEABACgDQAAABABAAQABAAAAAAQABABAAAAQAAABAAABIAAABQgDAKgCAAQgEgBABgFIgDAAIgEgCIgBgBIAAAAQgFgDABgJQgIgCgCgDIgBgCQAAgDABgFIgCAAIAAAAIgCgDIgGALQACACgCAIIgDAPQgDAKgHACIgBABQAAACAEADIAFABIABAAIAAgBIAEgEIABgBIACABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQgBAFAFABIADAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAEAAgCAFQAAADgEAAIgDAAIgMgGQgKgBgBgBQgGgFABgFIgBgBIgCABIAAABIgKAHQAFAEAAADIgDAEIAAAAIABABIABAAIAFAAIADgCQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAIAAABIAAABIAAABIgBAAQgBAGgKgCIgGgCQgEgCACgHIAAgEIgCgFIABgDIgHACQgFABgCACIAAgBIgCAAIgBAAIAAgBIgCADQgBAGACAEIACACIAAABIAFAEIAAAAIADABIAFACIAFABQAUAEAJAEIADgBIAHgCIABgIQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAIABAAgAhAiPIACABIgDgCIABABgABlj2QgFAHAAAHIADAMIAAABIACAAQAKAAAEgHIgCAAQgHAAAAgGQAAgJAJAAIACAAQgCgEgFgBIgEgBIgFABgAAmkJIAAABIAAABIAAAAQAFgBACgCIAAgBgAg0ACIAAgHIABgFIABAAIAHAOIAAABIgCAAIgHgDgAiugNIACAAIABAAIgEACIABgCgAjmhHIAAgBIABAAIABAAIABAAIACAAIAAAAIgCABIgDAAgABGinIgHgCIgBAAQgEgDgFgEIABgBIgBgBIgBgBIgBgBIAAAAIAAgBQgDgDAAgDQgGAEgEgBQgIAAAAgEQAEgCAGABQAEAAACgFQACgFAFAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABIABABIgFAFIAFAFIAEAFIABABIAAAAQADADAEACIABAAIADACIAAAAIABADQgBADgDAAIgBAAgABGjaQgTgBAAgYQAAgPAOgBIgGAAQAEgEAIABQAGABAEADIgJAAQALACAAAMQgBAagMAAIAAAAgAA4jyIAAAHQABADACADQAEAHAHAAIACgBIABAAQADgDABgHIgCAAQgFAAgCgDIgBgEQAAgJAIAAIAAAAIABAAIACACIAAgDQgCgDgQgBIgEAMgAhAkUIABgBIAAABIgBAAgAhBkZIABABIgBACg");
	this.shape_33.setTransform(-0.7,0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF66FF").s().p("AhaBMQgYgpAAgTIABgOQABgDAIgDIAGgEQAIAJAWANQAjAVAigBQATAAAEgCIABgFIADgBIAAABIAEABQAEAAAAgDIAPAGQAWAKAJAJQAOAOAOASIgGgBIgCgCIgEAAIAAABQgQgBgVAKQgSAJgGAFQgSgXgEgUQALABAAgGIgDgDIgQAFQABAVAbAgIgLABIgCgBIgEABIAAABQg2AFgTAOIgjg3gAAag2QgNgIgNgNQgjgkgNgHIABgBIgBgCIgBAAQADgJACAAQAsAAAjANIAQAJQAJAEADgCQAEgCAJADQADACADADQAOAMANAJQAGAGAAANQAAAZgiAAQgbAAgcgTg");
	this.shape_34.setTransform(-6,-0.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRAPQADgCAAgGQADgHgKAAQgHAAgBAEIgBgGIAEgMQAQAAACADIAAAFQgEAOAAAHgAAMAGIAAgGQAEgJACABQANgBAAAJQAAAIgKAEQgBgFgIgBg");
	this.shape_35.setTransform(5.6,-25.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CA9460").s().p("Ah+E1QgogWAAgJQAAgEAfgSQAggUAGgWQAMguAPgQQAIgHAFgCIgqgtIAOgGQARgIAbgCIAsBDQAAAIgRAUIgZAaQgDAEgdATQgYAQAAAJQAAANAbAUQAkAZAFAFIAAAJIgTAAQgJgDgGAAQgIAAgEAEQgDAEgKABIgogUgAjED1QgDgFgHgBIADAAQAbgRAPgdQANgZABAAQAKAAAEAFQADAEAMABQAOgBAHgBIgFAWIAAAAQgZAAgMAaQgLAYgZAAQgTAAgCgDgAAJCWQAYAAAAgIIgagjIgWgdIAAAAIgEgFQAFgDAGgHQAMgJAYAAIAMAAQAQAeARAQQAHAIAAAaIgBAbQggADgYAPQgYAOgVAEQAegcABgTgAiBgcIgZgSQAMgKALgpQACgQADgNQAFgPAHgIIAAAAIAwAoQAgAgAeAJQgUAQgEAIQgEAHAAASIgEAGQgFAGgTAAQggAAglgVgAg7giIABAIIAIACIABgBIAAgBIgJgNIgBAAgAjdgRIgJgEQgPgCgFgCQgMgHAAgLQAAgOAWgYQAWgWgDgmQgBgbATgVQAKgLAQgVQAPgOAZAAQAbAAAKAHQAGADAFAGQAGADgCACQACACAeACQALAAALAHIAFgBIACABQALAAAAgVIgGgYIABgDIgCgNQAJgFAAgMIgCgHIACgCIADADQAGgGALgJQAJgHAAgGIABgEQABgJAZABQAUAAAEAGQACAAAFgDIABABQABAGAIANIADABIAEgBIAFAHQgCALgDAHIgEAAQAEgGAAgDQADgRgTAAQgPAAAAAbIAAAHIgIgBIgDABIAAACQAAAFALAHQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgEAAgCAGQADACAEAAQAIAAAAgMIAAgEQAHAAAKgMIACgDIAAAFIAAABIgFAMQgFAEAAAIIABAEIgEAOQgCAJgLAFIgJAGIgCABIgDAAIgDAAQgIgDgOAHIABADIAEAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIABACIAAAEQAAAQALAEQAFABAVABQAmACACAnIAAAsQgBAaAGAAQAFAAAAgFQgEgJAAgDQAAgMAjgTQAjgTAAgTIgFgZQAAgBASgTIAJAAIABABIABAMIgBACIABABIABADQAAAFgMAEIADAEQAPgDABgKIAAAFIACAEQACADADABIAAAEQACABABAFIACABIAAABQAAAPARAEQgJAKgOgBQgRgDgLAQIgVAfQgRAbgKALQgSAUgbAAQgbAAgKgiQACgYgDgHQADgHAAgJQAAgPgFgGIgggZIgVgHIAAgFQgEgNgEAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQADAFADAJIgWgHIgtgJIAAgBQgIAAgjgNIgMgJQgIgIgGAAQgNAAAAAGIAAADIgEAKQgHAagJAGQgFADgNARQgQAWAAANQAAAKAPAKQAPAKAAAIQAAAHgLADQgLAEAAAHIACANIAAAEQAAABgJAAQAEgCgVAAgAAcjgQAKAKALgBQAEAAAAgDIgBgEQgJAAgJgJIgKgJIAFgFIAAgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgGAAgBAFQgDAFgEAAQgGAAgDACQAAAEAHAAQAEAAAGgEQABAFAIAHgAAUkjQABAXATAAQAMABAAgbQAAgOgQAAQgQgBAAASgADyiEQgIgCgDgIIgBgDIARABQAKgBAFgCQABAHAAAIgADhicIAEABQAUAAAFgQQAJAMAAACQADAFgUAAQgTABgCgFgADYipIAAgFQAJgFAVgQIAFAKIAAACIAAAAQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAABIAEAEQgDANgUABQgMAAAAgHgADPi8IAIgJQAIgIAIAAQAJAAAEAGIgVANIgOAHIgCgJg");
	this.shape_36.setTransform(0,3.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AiLFTQghgQAAgNQAAgLAkgTQAbgQAFgVIABgFIgWAIQgHAGgDAJQAEAagtAAQgNAAgPgGQgMgGAAgCQAfgXAKgPQAEgHAJgXQAEgMALAAQAUAAADAKIAegCQAHgSARgMQgdgagGgMIAAgBIgMAFIgmg+IgVgiQgFgKAAgTQAAgNAGgHIgQAGQAAAGADAIQAAALgLAAQgWAAgOgJQgUgDgDgCQgKgFAAgPQAAgTAYgbQAWgYgFggQgEgXAagdIARgYQAVgVAeAAQAwAAADARQAQAIAsAIQAFgHABgFQACgCACgDIgBgBQgFAAgBAEIgCAAIgCgGIAAAAIAAgBIgBABIgEADQgCgCAAgEIgBgEIgDAAIAFgJIAAgGIgLALIAAgBQAAgGgCABIgJAAIAEgDIAUgRIAAgCQgMAFgQANIAAgBIAAgBQgDABgCAEIAAACIgPAOIgDgDIAOgUQgFABgLAJQgDgDAAgEQAAgJAJgHQgEADgDAAQgCgBgFgIQgKgBAAgHIAOgVIgTAMIgEgBIAAgIQARgaAMgGIABgBQASgJAhgNQglABgDABQgFAAAAAFQgCAFAAAJIgDABQgDgBAAgEQAAgJAEgGQAJgNAZAEQgHgHAAgDQAAgMAmAAIANABQABgFADAAQACAAASANIACACIAGAJQAHAKAKAAIACgBQgNgTgHgEQgIgMAAgEIAAgDIADgBQAMAAAXApQgOgdAAgIIAAgEIADgBQAFAAAJAIQAIAHABAGIgBAVQACgCAAgLQAAgIAGAAQAHAAgCAIQAAAHgDAEIAAABIAAAAIAYgGQAMAAABADQgRAHgEAEQgMAIgDAGIAAABIABgBQAWgPASAAIAEABIABACIgKAGIgDABQAYAGAAAEQgSARgJAAIgCABIAJAAQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAIADAEQAWACAAAEQAAADgEACQgMACgFADIgBgCIgVACQADADAQADIAAABQAAABAIAMIALANIgFABQgCADgGABQgJADAAAEIACAOIgCgBIADAGQgHABgEACIAAAAIgDAFIAAAHQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIAAAEIgGgBIAAgBIgFABQAAAKgCACQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIAAAEQAAADADAHIgFAFIgLgN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");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AA+BdIAAgBIAAgBIAAgCIAEAEIgEADIAAgDgAA/BSIAAgBIACgBQACgCABgDIAAAGIACAIIgHgHgABKBPIAAgGIAFADIgBABQgDABABAFIAAADIgCgHgABHA/IgCABIABgIQACACADABQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBAAAAIAJAPIgBABQgMgKgCAAgAgwBEQgDgDAAgGIgDAAQgGgBgBgDIAAgBIAAgGIgDAAQgFADgFABIgCAAIgCgBIAAgFIAAgCQACgDADgCIAAACIAAABQAQgOAMgEIAAACIgUARIgEADIAJgBQACAAAAAGIAAABIALgLIAAAFIgFAKIADgBIABAFQAAAEACACIAEgEIABAAIAAAAIACAHIACAAQABgEAFgBIABABQgCAEgCACIgEAAQgHAAgDgDgABXA5IAGAFIgBACIgBACIgEgJgABOAvQAAAAgBAAQgBAAAAABQAAAAgBAAQAAABAAAAQgCgFAAgEQAAgDAEgJIAWAZIAAABIgBABQgNgIgHAAgAgrAyQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIABAAQABAAABAAQAAAAABABQAAAAAAABQAAABAAAAIgDAFQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAgABeApQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgFAGABIADAAIAAACQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIgCACQgCgCgEAAgAhRAcQAMgIACAAIABAAQgJAHgGACgABQAYIACgDIAAgBIARAHIgKABQgHAAgCgEgABbARIAFgCQAJAAAMAFIgCAHIgBAAIgXgKgAgnASIAGgDIACAAIAAACQgDAAgFAFgAhdAQIACgCQACAAAIgIQAHgGAKAAIAAAAIgUAQgAgyAMQAIAAADgEIACACQgEAEgLABgABYAFIAFACIgBAAQgDAEgEACIADgIgAhAALQAHgJADAAIACAAQgJAJgCABgAhuAJQADgJAPgIQAQgKAOAAIAAAAIgSAPQgNAIgRAFgAgogBIADAAIAAABQgIAEgBABQACgHAEABgAhDgGIAQgNIAHAAIgCABQgNAKgIADgAh0gKQARgbAOAAQALgBAMAFIAAAAQgNABgNAIIgcAPgAgsgLIAAAAQAIgKAHAAIAFAEIgMAGgAgKgNIAAAAIAAgCIAGgDIABABQgCADgFACgAhTgTQAMgKAUAAIAHAAIgDACQgWAGgOACgABagdQAGgGAGAAIALAAQgLAJgMABIAAgEgABHgiIAFgCQAAAAABAAQABAAAAAAQAAAAAAABQAAAAAAAAIAFgBIABABQgDAEgJAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBgAAIgmIAAgDIADAAQgEgCABgDIABgBIAHAEIAAgBQAAgCgHgIIABAAIANAKIAEAAQgJgEAAgGIABAAQAKAAAEANIAAABIgBABQAAgCgFAAIgGABIgCgBQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgCABgAATgrIAAAAIABgBIgBgBgAgjgmQgdgHgEAAIADgBQArAGARACgAhegnIADgCQAAgIACgFQAAgGAFAAQADgBAlgBQghAOgSAJgABBg0QAOgMADAAQgDAFgOAHgAgvg2QALgEAFAAIADAAQgSAGgFAAgAgGg9IgEABIAAgBQgXAAgGgDIAAAAIgBgCIADgBIAAgCIAQABQAIACAIgFIAEgBIACABIACABIAGADQAGADABACIgCABIgEgCIgBAAIgEgCIgCAAIAAAAQAAADgJAFQAAgBAAAAQgBAAAAgBQAAAAAAgBQABAAAAgBgAARhHIgGgJIgBgCIAAgEIACAAIAEACQAHAEANASIgCABQgKABgHgLgAAyhIIgLgXQANACAAAMIgCAJgAg6hOIAKgCIgBABIgEAGIgFgFgAgghTIADgBQAJAAAJAEIAEADIgNABQgFgFgHgCg");
	this.shape_38.setTransform(1.4,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:-9,y:-12.6}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},9).to({state:[{t:this.shape_27},{t:this.shape_14,p:{x:-9,y:-12.6}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},6).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_20},{t:this.shape_14,p:{x:-9,y:-12.6}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},5).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_14,p:{x:-10.9,y:-12.3}},{t:this.shape_34},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-36.9,53.9,73.7);


(lib.BubRace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoARQgDgHAAgHQAAgDACgGQADgKAHAAQAHAAAEADQgIABAAAJIABAFIAFAAQADAAACgBIACAAQAAAMgNAEgAAbAMQgDgBgEAAQgBgDgDgDIAAgKQAAgJALgBIgBADIAIALQAHgCACgEIABAHQAAAEgEAEQgFAFgFAAIgDgBg");
	this.shape.setTransform(19.6,-14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FECB81").s().p("AhmDVIgBAAQgJgBAAgNIAAgCIAAgFQAAgCADgCIAJgBIAEABIABACIgIAHQAAAFADADIARgOQgFgDgDgEIAAgBIACAAIACgCIgFgBIgBgGQAAgJAKgLIAKgKQgegNgIgYQgEgQAAgXQAAgUAHgNIAFgHQAAgBABAAQAAAAABAAQAAgBAAAAQAAAAAAgBIgBgBQACgFAAgEIgLgSQgMgTAAgSIABgpQAAgOAHgPIAFgNIAAgCIgDAAQgQADAABRQAAAgAYAZIgBAEQghghgGgSQgDgugKgLIAQgdQALgYAYgPQAagRAYgMQAYgMAIgCQA2gTAPAFQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBgBgBAAIAAAAIAAAAQAIADAOADQg8AAABATQgBAEAlABIgNAaIAAAEQABADAHAAQAPAAAHgCIACAIQAIARAQAAQARAAAAgHIgBgCQgCACgVAAQgGAAgFgMIgDgJIABgCIgCgBIAAgBQAAgTASAAIAIABIAAADIAEAPQAFAQAFAAQADAAAEgOIADABQADgHAEgZQACAAAGAFQAHAGAJAAIAHgCQgCAGAAAJIABALQADAKALAAQAaAAgBgXQAAgVgQgEIAEAAQgJgBgGACQADgHgBgLIAfAJQAGABAPAKQgEADgBADQgCAEACAHIAAAHIgFAAQgFAAgBACIABACQAMAFAAAIIgKAKQACAFAEAAQALAAAAgOIAAgBIAGAAQAYAAAAgVQABgKgFgFIAEABIAEAOQAAAKgBACIgKAOQAAAFANAAIAAATIgBAAIgDAAIAAACQgwAihIAAQgIAAgHgHQgGgIgEAAQgEAAAAAEQAEABAHAIQAKAIAbAAQAuAAASgJQALgEAJgJQAPgGAGgFQAaAYAFAQQACAHAAAgQAAAggJAdQABAIAFATIAAA3QgBAMAMAFQANAFAAAFIgBAAQgNgJgRAAQgHAAgCACQgBABAYAHQAbAJABAMIgPAGQgDgEgJgIQgQgNgIAAIgEABIAAADIAAADQAVADAOASIAAABQgPAJgBgBQgHgDgIAAIAAgDQgEgXgRAAQgFAAAAAFQAVAGAAAMIAAACIgCAAIAAADQgDABgHAAQgeAAgLgOQgGgOgDAAQAAAAgBABQAAAAAAAAQAAABAAABQAAABAAABQgBAEgeAAQgGgEABgBQgBgMAWgNQAKgHAKgFQgHgQAAgMQAAgKACgDQARgMABgCIgSgcIgJgcIAQgYQAKgOAQgQIgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgLAAgPAZQgQAbgGAGQgTAYgJAGIgYAOQgHADgJACIhkACIgBgCQgGgMgDgMQgBgGgXgNQApg6ABgWIgBgPIgEAAIgBABQABAagOAWQgfAtAAABQgBAFAcAQQADAFAEASQAMAQAAAfQAAAJgIATQgIATgBAKQgCASgFALIgNANIgHAHIgJADIgCABQgCABg7AAgAhoDFIAAAAIAAgBgACSiFQAAAEAIAIQAJAMAMAAQAKAAAAgFIAAgDIgDgBQgUAAgGgJQgGgKgBAAIgBAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAgAiVC0IgKABIgEgCIgMgFIgYgMQgbgbgEAAIgCABIgCASQAAAGAHAEQAHAEAAAFQgDAGgLAAQgNAAgIgLQgEgMgCAAQgEAAgIAHQgHAGgIAAQgdAAAAgaQAAgNANgTQAdgcAAgDQgFgQAEgKQAFgTAjAAQAEAAAaAaQADAJAEAAIACAAIAGAGQAMAJAbAMQAZALAJABQAJAXAcAMQgOAJgDAGQgBACAAAMIAAAFIgCAAIgIABQgLgBgGADIgXgBgAAOCmQgEgIgFgBQAEgSAGgJIAEgHQAEADAIAAIA+gBIAZAAIAJAPQAAAkhCAAQgjAAgMgKg");
	this.shape_1.setTransform(0,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AA/BkIgKAAIABgLQAAgWgIgTIAoABQAyAAAOgEIAIgCQANAOAAAiQAAADgLABQgMACAAADIAAACIhVgCgAiZA3IgLgMQgGgPAAglQABgmACgIQACgNALgQQAMgQAJgBIAAABIABADIADAAIAAAAQAHAjAGATQAEAOAMASQANASAKADIgKAPQgBACAAAYQAAAZACAMQgtgNgWgUg");
	this.shape_2.setTransform(-3.3,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("AgxAhQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIgDgHQgFgDgOAAQgUAAAAAYIAAABIgBAAIgUADIAAgCQARgaABgCQAAgEgpABQAJgLAdAFQAdAFAHgNQgTgGgUgJQA/ACAAgFQAAgIgIgFIAAgBIAhAJQANAAAfgjIABABQgBADgEAGIAAAFIAGAAIAUgDQAIgEATAAQAOAAAQAGQAPAGACAGQgfAEgJAFQAEALAHgCQALgEAFABQAFACAKAHQgmAAAAAEQAAADAYARIgHAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgZgTgNAAQgIAAAAADIACAFQgWgNgYAAQgEAAgDAPQgCAPgNAAQgMgLgJAAQgGAAgCALIgBAMIgBAAIAAAAIgBgBQgDAJABACIgFAJQgDgOgDgIgAgmAkIABgCIgCAAIABACg");
	this.shape_3.setTransform(14.3,-18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("AgDAEQAAgCgFgIIADAAQAEACAKAKIAAABIgFgBIgIABg");
	this.shape_4.setTransform(22.2,-17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("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");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC66").s().p("AABAHIAAgBIADABIgCAAIgBAAgAgDAEQAAgCgEgIIADAAIAMALIgHgEIgEAFg");
	this.shape_6.setTransform(22.1,-17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_7.setTransform(17.8,-13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FECB81").s().p("AhCAoQgGgGgIgEQgDgCgBgGQgwgbgEg3QA0gRAOAFQAAgBAAAAQAAAAgBAAQAAgBgBAAQgBAAgBAAIAAgBIAAAAQAIAEAOADQg8gBAAAUQAAAEAkABIgMAZIAAAEQABAEAHAAQAOAAAIgDIACAJQAIAPAPAAQASAAAAgHIgBgBQgCACgVAAQgGAAgFgLIgDgJIABgCIgCgCIAAgBQAAgSASAAIAIAAIAAADIAEAQQAEAPAGAAQADAAAEgNIACABQAEgHADgZQACgBAGAFQAGAGAKAAIACAAIAKgGIAGgHQACgHAAgKIAeAIQAHACAPAKIAEgDIAFgEIAHADIAHAEQAIADACACIABAAIAEAOQAAAKgBADIgKANQAAAEAMABIgWAJIgCAGIgKAGIgDASQglAPgxAAQgJAAgFgHQgGgHgEAAQgEAAAAADQAEACAGAIQAJAIAcAAQAuAAASgJIACgBIgCAMIgaACQgCAEgGACQgTAEgRAAQg1AAgogkgAAfAHQAAADAHAJQAKALAMAAQAKAAAAgFIAAgDIgEAAQgTAAgGgKQgGgJgBAAIgCAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABgABfgIIgBAAIAAACQAAAGgIAAIgBABQACAEAEAAQAKAAAAgNIAAAAIgFgKIgJgIQgFABAAACIABACQAMAEAAAJgAA/gUIABgBIgBAAIAAABgABdgeQAEAFAOAAQAWAAAAgGQAAgEgFAAQAAAFgVAAIgMgBgAAkggQAAAHAcAAQAQAAAAgDQAAgDgVABQgLAAgDgCQgFgDgCAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAABAAABgACCgoIABAAIAAAAgABrgzIADAAIgDAAIAAAAgAA3g1IAAABIAEAAIgEgBIAAAAg");
	this.shape_8.setTransform(11.5,-11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTBZQgGgIgEgCQAAgDAEAAQAEAAAGAHQAGAHAJAAQAwAAAlgPIgBAMIgCABQgSAJguAAQgbAAgKgIgAAXA2QgHgJAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIACAAQABAAAGAJQAGAKATAAIAEAAIAAADQAAAFgKAAQgMAAgKgLgAhHAdIgCgJQgIADgOAAQgHAAgBgEIAAgEIAMgYQgkgBAAgEQAAgUA8ABQgOgDgIgEIAAAAQgJgEAAgEQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAxABIATgBQgIgKAAgDQAAgFAGAAIAcAKQAMAAASgSQASgSAEAAQAGAAAAAFQAAAEgEAGQAagGAUAAQAcAAAPAKQAKAHAAAFQAAAIgOADIgDABIAEABQAPADAAALQAAAGghAAQADADAJAGQAGAEAAAEQAAAIgIAAIgBAAQAAAFgBAHQAAATgGAEIgBABIAAAAIAIABIAAACIgGAEQgMgBAAgFIAKgNQABgDAAgKIgEgNIgBAAQgCgCgIgDIgHgEIgNgLIgDAAQAEAJAAACIAAABIgEADQgPgKgHgCIgegIQAAAKgCAHIgGAHIgLAGIgBAAQgKAAgFgGQgGgFgCABQgEAYgEAHIgCgBQgEANgDAAQgGAAgEgPIgEgPIAAgDIgIAAQgSAAAAARIAAABIACACIgCACIAEAJQAFAMAGAAQAVAAABgCIACABQAAAHgSAAQgPAAgIgQgAgeAUIAEgJQgBgCADgJIABABIAAAAIABAAIABgLQACgLAGAAQAJAAAMALQANAAADgPQACgQAEAAQAYAAAWAOIgCgFQAAgEAIAAQANAAAZAUQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIAHAAQgYgRAAgEQAAgEAmAAQgKgHgFgCQgFgBgLAEQgHACgEgLQAJgFAfgEQgCgGgPgGQgPgGgOAAQgUAAgIAEIgUADIgFAAIgBgFQAFgGAAgDIAAgBIgBAAQgfAjgOAAIgfgJIgBAAIAAABQAIAFAAAIQAAAFg/gCQAUAJAUAHQgIANgcgFQgegFgIALQAogBAAAEQAAACgSAZIAAACIAUgDIACAAIgBAAIAAgBQAAgXAUAAQAOAAAFADIAEAHQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAEAHADAOgABGAkIABgBQAIAAAAgHIAAgCIABAAQAAgJgMgEIgBgCQAAgCAFgBIAJAIIAFAKIAAAAQAAAOgKAAQgEAAgCgEgABOAEIACgBIAMABQAVAAAAgEQAFAAAAADQAAAGgWAAQgOAAgEgFgAAVACQAAgBAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQACAAAFACQADACALAAQAVgBAAADQAAADgQAAQgcAAAAgHgAgaAAIABAAIgBABIAAgBgABzgFIABAAIAAAAgAAogRIgBgBIAFABgAiXgfQAbgJAWAAIANABQABAAABAAQABAAAAABQABAAAAAAQAAAAAAABQgOgFg0ARIAAgGg");
	this.shape_9.setTransform(13,-15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FECB81").s().p("AhmDOIgBAAQgJgCAAgNIAAgBIAAgFQAAgDADgBIAJgBIAEABIABACIgIAHQAAAFADADIARgOQgFgDgDgFIAAgBIACAAIACgBIgFgCIgBgGQAAgIAKgLIAKgLQgegNgIgYQgEgQAAgWQAAgVAHgMIAFgIQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIgBgBQACgFAAgEIgLgTQgMgSAAgTIABgoQAAgPAHgOIAFgNIAAgCIgDgBQgQADAABSQAAAfAYAaIgBADQghghgGgRQgDgvgKgLIAQgdQALgYAYgOQAagSAYgLIANgHIATgHIAEgCQAFA3AuAcQABAGADACQAIAEAGAGQA2AwBMgQQAGgCACgEIAagCIACgMQAJgEAJgIQAPgHAGgEQAaAYAFAQQACAEAAARIAAASQAAAhgJAcQABAIAFATIAAA3QgBALAMAFQANAFAAAFIgBAAQgNgJgRAAQgHAAgCACQgBABAYAIQAbAIABANIgPAGQgDgFgJgIQgQgMgIAAIgEAAIAAADIAAAEQAVADAOASIAAABQgPAJgBgBQgHgDgIgBIAAgDQgEgXgRAAQgFAAAAAFQAVAHAAAMIAAACIgCAAIAAADQgDABgHAAQgeAAgLgOQgGgOgDAAQAAAAgBAAQAAAAAAABQAAAAAAABQAAABAAABQgBAEgeAAQgGgEABgBQgBgLAWgOQAKgHAKgEQgHgRAAgLQAAgLACgCQARgNABgBIgSgdIgJgaIAQgZIAHgKQAIgKALgKIgBgBQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQgLAAgPAZQgQAcgGAGQgTAXgJAHIgYANQgHAEgJABIhkADIgBgCQgGgMgDgNQgBgFgXgOQAng2ACgWIABgDIgBgPIgEgBIgBABIAAANQgCATgLAQQgfAtAAACQgBAFAcAPQADAFAEATQAMAQAAAfQAAAJgIATQgIATgBAKQgCARgFAMIgNANIgHAHIgJACIgCABQgCABg7ABgAhoC9IAAAAIAAAAgAiVCtIgKAAIgEgBIgMgGIgYgMQgbgagEAAIgCAAIgCASQAAAGAHAFQAHAEAAAEQgDAHgLAAQgNAAgIgMQgEgLgCAAQgEAAgIAGQgHAHgIAAQgdAAAAgbQAAgNANgTQAdgbAAgEQgFgPAEgKQAFgTAjAAQAEAAAaAaQADAJAEAAIACAAIAGAGQAMAJAbAMQAZAKAJABQAJAYAcALQgOAJgDAGQgBADAAAMIAAAFIgCAAIgIABQgLgBgGACIgXAAgAAOCfQgEgIgFgCQAEgSAGgJIAEgHQAEADAIABIA+gBIAZgBIAJAQQAAAjhCAAQgjAAgMgJgADah9IAKgGIACgGIAWgJIABAAIAAASIgBAAIgDABIAAACQgPALgTAHg");
	this.shape_10.setTransform(0,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("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");
	this.shape_11.setTransform(0,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("ABGBoIgKAAIABgLQAAgWgIgTIAoABQAyAAAOgEIAIgCQANAOAAAiQAAADgLABQgMACAAADIAAACIhVgCgAhoBWIgKgCQgjgRgRgUIgJgOQgEgPAFglQAGglADgIQAEgMANgPQAOgOAJAAIAAABIAAADIADABIAAAAQADAjADAUQACAOAKAUQADAGAWANIAEADIAAABIADABIgEgBIAAgBIgBABIAAAAIAFABIABABIAAAAIABAAIABAAIgBAAIAAAAIAAABIgKAOQgBACAAAYQAAAZACAMIgZgGgAhxBYIADAAIAAgBIAAgBIAGACIAAAAg");
	this.shape_12.setTransform(-4,3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FECB81").s().p("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");
	this.shape_13.setTransform(0.6,2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhwD2IgBgCIgDgEIgBgDIgCgDIgEgIIgBgGIAAgGIADgBIACgBIAAgBIgCABQgDACgRgCIgUgBIABgBIgJgCQgjgFgRgKQgNgIgdghIgCAIIAGAHQAGAHgBAFQgCAPgTgDQgcgEABgVQgJAKgPgCQgkgFAFghQAEgjAtgVIABgSQAFghAoAFQAPACAPAUIABAAIAAAAIAAgIIAFggQAFgmAEgLQACgJAPgPQARgTANACIAFgIIAAABQAGgJAJgNQAUgaAKgGQAVgPAdgOQA0gaAngBIANABQABAAABAAQAAABABAAQABAAAAAAQAAABAAAAQgPgFg3ATQgHACgYAMQgYAMgaARQgYAOgLAYIgMAXIgBgDIgCADIABACIACAGQAEAQgCAiQABAHAFAJQACAGADAEIABACIACADIABAAQADAEAJAIIgBgBIARAPQAFAAAAgGIgQgRQgJgTAAgTQAAhSAQgDIADABIAAACIgGANQgGAPAAAOIgBApQAAARAMATIALATQAAAEgCAFIABABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAIgFAIQgIANAAAUQAAAXAFAPQAHAYAfANIgKALQgKALAAAJIAAABIAAAEIABABQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABIAAABQADAEAFADIgRAOQgDgDAAgFIAIgHIgCgCIgDgBIgJABQgEACAAACIABAFIAAABQAAANAJACIAAAAIACADQA7AAACgCIACAAIAJgDIAHgHIANgNQAFgMACgRQABgKAIgTQAIgTAAgJQAAgfgMgQQgFgTgCgFQgcgPAAgFQAAgCAhgsQANgXgCgaIACgBIAEABIAAAPQAAAVgpA7QAXANACAGQACAMAGAMIAAACIBlgCQAJgCAHgDIAYgOQAJgHATgXQAFgHAQgbQAQgZALABQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAIABABQgQAPgKAOIgRAZIAAABIgEAHIAAgBIAAgBQgZAfgbAMQAJAJACArQAAAKgPACIABADIgDABQADAGACALQAAAMgLALQgTAUgqAAQghAAgQgLIgGgHIgBAAIAAABQgEAZgEAFQgSAXgJADQgDABgmAAIgigCgAh6DYIABgDIAAAAIgBADgAh9DOIAIACIACgCIACgCIAAAAIAGgBIACAAI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");
	this.shape_14.setTransform(0.6,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#996600").s().p("AgxAhQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIgDgHQgFgDgOAAQgUAAAAAYIAAABIgBAAIgUADIAAgCQARgaABgCQAAgEgpABQAJgLAdAFQAdAFAHgNQgTgGgUgJQA/ACAAgFQAAgIgIgFIAAgBIAhAJQANAAAfgjIABABQgBADgEAGIAAAFIAGAAIAUgDQAIgEATAAQAOAAAQAGQAPAGACAGQgfAEgJAFQAEALAHgCQALgEAFABQAFACAKAHQgmAAAAAEQAAADAYARIgHAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgZgTgNAAQgIAAAAADIACAFQgWgNgYAAQgEAAgDAPQgCAPgNAAQgMgLgJAAQgGAAgCALIgBAMIgBAAIAAAAIgBgBQgDAJABACIgFAJQgDgOgDgIgAgmAkIABgCIgCAAIABACg");
	this.shape_15.setTransform(14.3,-18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_2},{t:this.shape_9},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},8).to({state:[{t:this.shape_5},{t:this.shape_3},{t:this.shape_1},{t:this.shape},{t:this.shape_4},{t:this.shape_2}]},3).to({state:[{t:this.shape_14},{t:this.shape_3},{t:this.shape_13},{t:this.shape},{t:this.shape_4},{t:this.shape_12}]},12).to({state:[{t:this.shape_14},{t:this.shape_15},{t:this.shape_13},{t:this.shape},{t:this.shape_4},{t:this.shape_12},{t:this.shape_9},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},11).to({state:[{t:this.shape_14},{t:this.shape_3},{t:this.shape_13},{t:this.shape},{t:this.shape_4},{t:this.shape_12}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape},{t:this.shape_4},{t:this.shape_12},{t:this.shape_9},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},17).to({state:[{t:this.shape_14},{t:this.shape_3},{t:this.shape_13},{t:this.shape},{t:this.shape_4},{t:this.shape_12}]},3).to({state:[{t:this.shape_3},{t:this.shape_5},{t:this.shape_1},{t:this.shape},{t:this.shape_4},{t:this.shape_2}]},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-24.7,64.8,49.5);


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


(lib.InfinitivecanhaveaSubject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.INFINITIVE();
	this.instance.parent = this;
	this.instance.setTransform(-96.6,0.2,1.162,1.162,0,0,0,-2.2,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(195.6,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_1.setTransform(186.3,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsBCQgPgQAAgXQAAgjAfgnQAZggAZABIAKAAIAHACQAEgGAGAAQAHAAACAJQACAJAAANQAAAFgCADQgDAEgGAAQgHAAgDgIQgDgHgDgCQgCgBgJAAQgPAAgSAYQgaAgAAAcQAAAOAJAJQAJALANAAQAKAAALgFIATgOQAGgEADAAQAFAAADADQADAEAAAEQAAAFgEAEQgcAZgcAAQgWAAgQgRg");
	this.shape_2.setTransform(171.5,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_3.setTransform(158.1,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBKQgVgPABgTQgBgOALAAQALAAAAANQAAAJANAJQAMAJALAAQAIAAADg3QACgYAAgnIAAgLIgHAAIgMAAIgNgBQgEAAgEgDQgDgDAAgFQAAgLAPAAIALAAIAKABIAUgBIAUgBQAZAAgBAMQABAFgDADQgEAEgEAAIgHgBIgHgBIgMAAIAAANQAABPgKAlQgIAYgQAAQgTAAgSgOg");
	this.shape_4.setTransform(143.6,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgyBTQgEgFAAgEIAAgfIACgrIADgsQgBgLACgTQAAgFADgCQAPgFASAAQASAAASANQAUAPAAAWQAAAbgWAQQARAGAIAIQAIAJAAAKQAAANgPAMQgJAIgLAEQgXAKgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgDAHgGQAGgGAAgCQAAgGgNgGQgLgEgJgDIgLgBIgEAAIgEAAIgNgBIAAAYgAgcg/IAAATIgCApIAQACQAPgCALgJQALgJAAgPQAAgLgMgIQgLgJgMAAIgQABg");
	this.shape_5.setTransform(129.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgvBAQgNgQgDgeQgCgOAAgnIABgZIABgOQADgHAHAAQAKgBAAATIAAA/QAABAAtAAQAqAAAAhsIAAgLIAAgJQAAgGADgGQADgGAGAAQAKAAAAAPIAAANIAAANQAAB8hAAAQggAAgRgTg");
	this.shape_6.setTransform(114.4,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_7.setTransform(98.7,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKgBAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_8.setTransform(78.8,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAPgVAYAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAJAFQAJAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADAAAEQAAAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_9.setTransform(60.8,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAyIgQgsIgUgwIgBgGQAAgDAEgEQADgDAEAAQAHAAADAHIAbBKQAHgSAMgfIAJgYQAEgIAGABQAEAAAEADQADADAAAEQAAAFgSApIgWAyQAAAKgJAAQgHAAgEgJg");
	this.shape_10.setTransform(49.3,3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKgBAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_11.setTransform(38.2,3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_12.setTransform(26.4,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape_13.setTransform(7.9,3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKgBAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_14.setTransform(-3.7,3.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgaATABQALAAANAEQAQAGAAAJQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgGgPAAQgKAAgKAUQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgBQAEAAACADQADACAAAFQAAAHgQAIQgPAGgJAAQgVAAgPgNg");
	this.shape_15.setTransform(-15,3.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape_16.setTransform(-176.8,3.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAlA4IgGgiIgdAFIgcAHIgSApQgDAFgHAAQgEAAgDgCQgDgEgBgFQAAgEARgiQgCgEAAgDQAAgJALgCQAMgWASgeQAZgpAGAAQAJAAACAMIAIAkIAQBKIAFARQADAJABACQgBAFgDADQgDADgEAAQgKAAgIgZgAgNAIQANgEAZgEIgIgog");
	this.shape_17.setTransform(-191,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_18.setTransform(186.3,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AgsBCQgPgQAAgXQAAgjAfgnQAZggAZABIAKAAIAHACQAEgGAGAAQAHAAACAJQACAJAAANQAAAFgCADQgDAEgGAAQgHAAgDgIQgDgHgDgCQgCgBgJAAQgPAAgSAYQgaAgAAAcQAAAOAJAJQAJALANAAQAKAAALgFIATgOQAGgEADAAQAFAAADADQADAEAAAEQAAAFgEAEQgcAZgcAAQgWAAgQgRg");
	this.shape_19.setTransform(171.5,0.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_20.setTransform(158.1,0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("AgrBKQgVgPABgTQgBgOALAAQALAAAAANQAAAJANAJQAMAJALAAQAIAAADg3QACgYAAgnIAAgLIgHAAIgMAAIgNgBQgEAAgEgDQgDgDAAgFQAAgLAPAAIALAAIAKABIAUgBIAUgBQAZAAgBAMQABAFgDADQgEAEgEAAIgHgBIgHgBIgMAAIAAANQAABPgKAlQgIAYgQAAQgTAAgSgOg");
	this.shape_21.setTransform(143.6,1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AgyBTQgEgFAAgEIAAgfIACgrIADgsQgBgLACgTQAAgFADgCQAPgFASAAQASAAASANQAUAPAAAWQAAAbgWAQQARAGAIAIQAIAJAAAKQAAANgPAMQgJAIgLAEQgXAKgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgDAHgGQAGgGAAgCQAAgGgNgGQgLgEgJgDIgLgBIgEAAIgEAAIgNgBIAAAYgAgcg/IAAATIgCApIAQACQAPgCALgJQALgJAAgPQAAgLgMgIQgLgJgMAAIgQABg");
	this.shape_22.setTransform(129.8,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AgvBAQgNgQgDgeQgCgOAAgnIABgZIABgOQADgHAHAAQAKgBAAATIAAA/QAABAAtAAQAqAAAAhsIAAgLIAAgJQAAgGADgGQADgGAGAAQAKAAAAAPIAAANIAAANQAAB8hAAAQggAAgRgTg");
	this.shape_23.setTransform(114.4,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_24.setTransform(98.7,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.9,-17.9,401.4,36);


(lib.CaratforInfinitiveSubjDRAWN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgFA9QgDgCAAgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgIABQgSAAgKgDQgHgCAAgGQAAgEACgCQADgDADAAIAOABIANABIAQAAIANAAIAUABIATABQADAAACACQADADAAADQAAAEgDADQgCACgDAAIgTgBIgUgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape.setTransform(-10.9,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_1.setTransform(-22.3,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgkBAQgHgIgBgaIABgMIAAgNIgBgFIACgDIACgkIgBgJIgBgJQAAgKAIAAQAEAAACADIATgEIAQgCQAUAAAMAFQAFADAAAFQAAAEgBACQgDADgEAAIgCAAQgOgFgNAAIgOABIgSAFIABAIIgBAgIAjgEIAUgBQADgBADADQACADAAADQABAHgIABIgUACIglADIgBALIAAAKQAAASADADQACADALAAIAPgBIAPAAIAFgBIAEAAQAJAAAAAJQAAAGgGACQgIACgZgBQgaAAgIgGg");
	this.shape_2.setTransform(-32.7,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AghA6QgQgMAAgPQAAgLAIABQAJAAAAAKQAAAHAKAGQAJAHAIAAQAGAAADgqQABgTAAgdIAAgJIgFAAIgJAAIgKgBQgEAAgCgCQgDgCAAgEQAAgJAMAAIAIAAIAIABIAPgBIAQgBQATAAAAAKQAAADgCADQgDACgDABIgFgBIgGAAIgKAAIABAKQAAA8gIAdQgGASgNAAQgOAAgOgKg");
	this.shape_3.setTransform(-43.8,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_4.setTransform(-54.5,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgkAxQgKgMgDgXIgBgpIAAgTIACgLQACgGAFAAQAIAAAAAOIAAAxQAAAxAiAAQAhAAAAhTIAAgIIAAgHQAAgFACgEQACgFAFAAQAIAAAAALIAAALIAAAKQAABfgyAAQgYAAgNgPg");
	this.shape_5.setTransform(-66.4,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape_6.setTransform(-78.6,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0000FF").ss(2,1,1).p("AAqhTIAAA/AgWBUQg8hKB8hdAgdhPIBHgE");
	this.shape_7.setTransform(-83.7,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).wait(20));

	// Layer 4
	this.instance = new lib.verbArrow();
	this.instance.parent = this;
	this.instance.setTransform(103.7,-21.4,0.85,0.85,0,0,0,30.2,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// Layer 6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,1,1).p("AgmAmIBNAAIAAhL");
	this.shape_8.setTransform(-3.8,-3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3,1,1).p("Ag6AuIB1AAIAAhb");
	this.shape_9.setTransform(-5.9,-4.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,1,1).p("AhPA2ICfAAIAAhr");
	this.shape_10.setTransform(-8,-5.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3,1,1).p("AhkA+IDJAAIAAh7");
	this.shape_11.setTransform(-10.1,-6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,1,1).p("Ah5BGIDzAAIAAiL");
	this.shape_12.setTransform(-12.2,-6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(3,1,1).p("AiOBOIEdAAIAAib");
	this.shape_13.setTransform(-14.3,-7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,1,1).p("AijBWIFHAAIAAir");
	this.shape_14.setTransform(-16.4,-8.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(3,1,1).p("Ai4BeIFxAAIAAi7");
	this.shape_15.setTransform(-18.4,-9.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3,1,1).p("AjMBmIGZAAIAAjL");
	this.shape_16.setTransform(-20.5,-10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(3,1,1).p("AjhBuIHDAAIAAjb");
	this.shape_17.setTransform(-22.6,-11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3,1,1).p("Aj2B2IHtAAIAAjr");
	this.shape_18.setTransform(-24.7,-11.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(3,1,1).p("AkLB+IIXAAIAAj7");
	this.shape_19.setTransform(-26.8,-12.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3,1,1).p("AkgCGIJBAAIAAkL");
	this.shape_20.setTransform(-28.9,-13.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3,1,1).p("Ak1COIJrAAIAAkb");
	this.shape_21.setTransform(-31,-14.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3,1,1).p("AlKCWIKVAAIAAkr");
	this.shape_22.setTransform(-33,-15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3,1,1).p("AlfCeIK/AAIAAk7");
	this.shape_23.setTransform(-35.1,-15.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(3,1,1).p("AlzCmILnAAIAAlL");
	this.shape_24.setTransform(-37.2,-16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(20));

	// Layer 2
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF00FF").s().p("AgGBFQgCgDAAgEIAAgLIAAgLIgCg4IgWgBQgIgCAAgIQAAgEADgEQACgCAEAAIAVABIAAgNIgBgMQAAgEADgDQACgDAFAAQAHAAACAPIAAAJIAAAFIAAAGIANgBQALAAADABQAGACAAAHQAAAEgDADQgCADgFAAIgEAAIgGAAIgMABIABA5IAAAEIAAAFQABAWgKAAQgDAAgEgDg");
	this.shape_25.setTransform(151.1,54.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF00FF").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAQgRAVAAQAJAAAKAEQANAGAAAHQAAADgCACIgBAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAJgIQgCgZAAgNIAAgJIABgKIgGgDIgEgBQgOAAgLAMg");
	this.shape_26.setTransform(141.3,55.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF00FF").s().p("AglAtIAAhEIABgJIAAgKQgBgKAJAAQAKAAAAAQQASgSAWAAQAJAAADAGQAEAGAAAMIAAAHQAAAMgJAAQgJAAAAgJIAAgHIAAgIQgQABgJAHQgIAHgGAMIABA1QAAAKgLAAQgIAAAAgKg");
	this.shape_27.setTransform(131.6,55.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF00FF").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAKgIQgEgZAAgNIABgJIACgKIgGgDIgFgBQgOAAgKAMg");
	this.shape_28.setTransform(121.4,55.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF00FF").s().p("AgbArQgOgNAAgUQAAgUANgVQAPgXARAAQAKAAAMAEQAPAHAAAIQAAADgDAEQgDACgDAAQgDAAgCgBIgEgEQgGgFgNABQgJgBgKATQgJAPAAAMQAAAMAJAIQAIAHAMAAQAGAAAGgDIAMgGIAEgCQAEAAACADQADADAAAEQAAAGgPAHQgNAGgJAAQgTAAgNgMg");
	this.shape_29.setTransform(111.2,55.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF00FF").ss(2,1,1).p("AhNAqIA6AAAhKgdIgDBHABOgWQhFg8hWB8");
	this.shape_30.setTransform(96.1,51.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(3,1,1).p("AKQCSIwLAAIkUkj");
	this.shape_31.setTransform(65.6,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(36));

	// Layer 3
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3,1,1).p("AAACmIAAlL");
	this.shape_32.setTransform(76.1,45.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(36));

	// Layer 1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_33.setTransform(76.1,69);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-35,167.1,112.1);


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


(lib.Race = function(mode,startPosition,loop) {
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
	this.instance_2 = new lib.BuffyRace();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-57.8,-54.2);

	this.instance_3 = new lib.Slim_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-112.5,-49.5);

	this.instance_4 = new lib.BubRace();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-8.5,-46.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-91.1,398.1,178.9);


(lib.InfinSubjLessonIntro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_48 = function() {
		playSound("ball_passes");
	}
	this.frame_56 = function() {
		playSound("SENameofIdea");
	}
	this.frame_237 = function() {
		playSound("ball_passes");
	}
	this.frame_268 = function() {
		playSound("SENameofIdea");
	}
	this.frame_280 = function() {
		playSound("diagnal_line");
	}
	this.frame_290 = function() {
		playSound("ball_passes");
	}
	this.frame_306 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_314 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_324 = function() {
		playSound("highclick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(8).call(this.frame_56).wait(181).call(this.frame_237).wait(31).call(this.frame_268).wait(12).call(this.frame_280).wait(10).call(this.frame_290).wait(16).call(this.frame_306).wait(8).call(this.frame_314).wait(10).call(this.frame_324).wait(39));

	// slash1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.5,1,1).p("AgyhIIBlCR");
	this.shape.setTransform(75.8,219.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2.5,1,1).p("AhPh5ICfDz");
	this.shape_1.setTransform(78.7,224.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2.5,1,1).p("AhsirIDZFX");
	this.shape_2.setTransform(81.6,229.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2.5,1,1).p("AiJjcIETG5");
	this.shape_3.setTransform(84.5,234.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2.5,1,1).p("AimkOIFNId");
	this.shape_4.setTransform(87.4,239.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2.5,1,1).p("AjDk/IGHJ/");
	this.shape_5.setTransform(90.3,244.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2.5,1,1).p("AjglxIHBLj");
	this.shape_6.setTransform(93.2,249.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},280).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(77));

	// 1
	this.instance = new lib.Thecaps("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(89.9,324.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(306).to({_off:false},0).to({x:145.1,y:266.7},8).to({rotation:60,x:108.9,y:243.3},10).wait(39));

	// 2
	this.instance_1 = new lib.kids("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.8,324.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(306).to({_off:false},0).to({x:52.6,y:131.8},8).to({x:96.5,y:192.8},10).wait(39));

	// 3
	this.instance_2 = new lib.want("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(201.6,324);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(306).to({_off:false},0).to({x:195.3,y:117.3},8).to({x:218.4,y:192.8},10).wait(39));

	// 4
	this.instance_3 = new lib.Slim("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(262.3,324.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(306).to({_off:false},0).to({x:259.7,y:78.5},8).to({scaleX:1.07,scaleY:1.07,x:257.7,y:130.4},10).wait(39));

	// 5
	this.instance_4 = new lib.to();
	this.instance_4.parent = this;
	this.instance_4.setTransform(307.2,325.2,1,1,0,0,0,14.6,19.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(306).to({_off:false},0).to({x:339.1,y:93},8).to({scaleX:1.16,scaleY:1.16,rotation:45,x:315.9,y:146.5},10).wait(39));

	// 6
	this.instance_5 = new lib.win("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(346.4,325.2,1.284,1.284,0,0,0,17,16);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(306).to({_off:false},0).to({regX:16.9,scaleX:1,scaleY:1,x:379.1,y:135.4},8).to({scaleX:1.37,scaleY:1.37,x:361.6,y:155},10).wait(39));

	// Carat
	this.instance_6 = new lib.CaratforInfinitiveSubjDRAWN();
	this.instance_6.parent = this;
	this.instance_6.setTransform(238.9,274.9,1.129,1.129,0,0,0,65.5,37.8);

	this.instance_7 = new lib.CaratforInfinitiveSubj();
	this.instance_7.parent = this;
	this.instance_7.setTransform(238.9,274.9,1.129,1.129,0,0,0,65.5,37.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},92).to({state:[{t:this.instance_7}]},139).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_7}]},52).to({state:[{t:this.instance_7}]},12).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(231).to({_off:false},0).to({regX:65.4,regY:37.9,scaleX:1.01,scaleY:1.01,x:251.3,y:114.4},6).wait(52).to({scaleX:0.81,scaleY:0.81,x:347.3,y:179.1},12).wait(62));

	// SENTENCE
	this.instance_8 = new lib.TheKidsWantSlimtoWin("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(219.1,324.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(245).to({_off:false},0).wait(118));

	// Diag.
	this.instance_9 = new lib.SentenceLine();
	this.instance_9.parent = this;
	this.instance_9.setTransform(232.4,206.9,0.888,0.888,0,0,0,205.5,29.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(267).to({_off:false},0).to({alpha:1},10).wait(86));

	// Def
	this.instance_10 = new lib.InfinitSubjDef();
	this.instance_10.parent = this;
	this.instance_10.setTransform(222.8,104.9,1.069,1.069);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(56).to({_off:false},0).wait(93).to({scaleX:0.9,scaleY:0.9,x:222.3,y:11.9},10).wait(204));

	// Title
	this.instance_11 = new lib.InfinitivecanhaveaSubject();
	this.instance_11.parent = this;
	this.instance_11.setTransform(211.6,70.6,1.39,1.39,0,0,0,-8.2,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(48).to({regY:1.5,scaleX:1,scaleY:1,x:211.5,y:4.1},8).wait(93).to({regY:1.6,scaleX:0.76,scaleY:0.76,x:216.6,y:3},0).to({scaleX:0.92,scaleY:0.92,x:109.2,y:-34.1},10).wait(204));

	// White
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.812)").s().p("EgtAADzIAAnlMBaBAAAIAAHlg");
	this.shape_7.setTransform(221.5,67.3,0.987,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.8)").s().p("EgsRADrIAAnVMBYjAAAIAAHVg");
	this.shape_8.setTransform(221.6,59.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.784)").s().p("EgsHADiIAAnDMBYPAAAIAAHDg");
	this.shape_9.setTransform(221.6,51.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.773)").s().p("Egr9ADZIAAmyMBX6AAAIAAGyg");
	this.shape_10.setTransform(221.6,42.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.757)").s().p("EgryADRIAAmhMBXlAAAIAAGhg");
	this.shape_11.setTransform(221.6,34.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.745)").s().p("EgroADJIAAmRMBXRAAAIAAGRg");
	this.shape_12.setTransform(221.6,26.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.729)").s().p("EgreADAIAAl/MBW8AAAIAAF/g");
	this.shape_13.setTransform(221.7,18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.718)").s().p("EgrTAC4IAAlvMBWnAAAIAAFvg");
	this.shape_14.setTransform(221.7,10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.702)").s().p("EgrJACvIAAldMBWTAAAIAAFdg");
	this.shape_15.setTransform(221.7,2.2);

	this.instance_12 = new lib.InfinSibjVerticalLine("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(227.6,108.3);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_7}]},48).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},93).to({state:[{t:this.instance_12}]},11).to({state:[{t:this.instance_12}]},9).to({state:[{t:this.instance_12}]},59).to({state:[{t:this.instance_12}]},7).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(160).to({_off:false},0).to({alpha:1,startPosition:7},9).wait(59).to({startPosition:6},0).to({alpha:0,startPosition:13},7).wait(128));

	// Layer 20
	this.instance_13 = new lib.Slim_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-11.6,293.5,1.599,1.599);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(48).to({_off:false},0).to({alpha:1},8).wait(307));

	// Bk
	this.instance_14 = new lib.Bk();
	this.instance_14.parent = this;
	this.instance_14.setTransform(219.3,43.7,1.025,1.233,0,0,0,251.7,49.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(37).to({_off:false},0).to({alpha:1},11).wait(315));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,43,568.9,50.5);


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
(lib.inf_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3_repeat:361});

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
		
		 window.open ("inf_Scene3a.html","_self");
		}
		
		
		function openPrev(){
		
		 window.open ("inf_Scene2.html","_self");
		}
	}
	this.frame_4 = function() {
		playSound("aninfinitivecanhaveasubject");
	}
	this.frame_59 = function() {
		playSound("subjofaninfinitiveGreg");
	}
	this.frame_175 = function() {
		playSound("verticallineGreg");
	}
	this.frame_260 = function() {
		playSound("thekidswantslim");
	}
	this.frame_369 = function() {
		this.gotoAndPlay("scene3_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(55).call(this.frame_59).wait(116).call(this.frame_175).wait(85).call(this.frame_260).wait(109).call(this.frame_369).wait(1));

	// content
	this.instance = new lib.InfinSubjLessonIntro();
	this.instance.parent = this;
	this.instance.setTransform(269.8,204,0.814,0.814,0,0,0,216.7,183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(370));

	// char
	this.instance_1 = new lib.Race();
	this.instance_1.parent = this;
	this.instance_1.setTransform(279.6,238.8,1.171,1.171);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(370));

	// main
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

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_2 = new lib.Copyright("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance_3 = new lib.Bkr();
	this.instance_3.parent = this;
	this.instance_3.setTransform(277.3,192,1.171,1.171);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_2},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(370));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(281.2,198.2,552,404.8);
// library properties:
lib.properties = {
	id: 'C575519F0DF7F844A9BC496C268A4F62',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/aninfinitivecanhaveasubject.mp3", id:"aninfinitivecanhaveasubject"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmusic2.mp3", id:"bgmusic2"},
		{src:"sounds/ball_passes.mp3", id:"ball_passes"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SENameofIdea.mp3", id:"SENameofIdea"},
		{src:"sounds/diagnal_line.mp3", id:"diagnal_line"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/subjofaninfinitiveGreg.mp3", id:"subjofaninfinitiveGreg"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/thekidswantslim.mp3", id:"thekidswantslim"},
		{src:"sounds/verticallineGreg.mp3", id:"verticallineGreg"},
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
an.compositions['C575519F0DF7F844A9BC496C268A4F62'] = {
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