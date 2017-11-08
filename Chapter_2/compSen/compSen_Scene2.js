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


(lib.Wordwindsurfs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgFAFAAQAEABAGAGQADACAKACIAOACQAJAAAIgDQALgEAAgHQAAgRgXgFIgLgEQgRgDgGgFQgKgFAAgOQAAgZAYgMQAHgDAPgFIAXgHQAFgCAGgBQAFABAEADQADAEAAAFIACALIABAKQAAAFgDAEQgEADgFAAQgHAAgCgEQgCgEgBgKQgKACgTAHQgSAHAAAMIAHACQAbAFAOAJQATALAAAZQAAAUgRAKQgOAJgVgBQgQABgOgGg");
	this.shape.setTransform(50.6,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgTBoQgEgDAAgFIAAgDQADgPAAgTIAAghIAAgjIgTABQgNAAAAgLQAAgMAWgBIALAAIACgTQADgbALgNQAMgPAaAAQASAAAAALQAAAMgQAAQgeAAgDApIgBAIIAbgCQAUAAAAAMQAAAJgJACIgLABQgFgBgXACIgBAbIABAXIAAAWQAAAYgCANQgCAJgIAAQgFAAgEgDg");
	this.shape_1.setTransform(38.3,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgLAIgHAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_2.setTransform(26.6,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgYQAAgRAEgWQABgKAKAAQAGAAADAEQAEADAAAFIgCASIgCATIABAhQACAPACAJIAIADIAIACQAPAAATgGIAAgZIgBgWQAAgbADgTQABgMAKAAQAGABADADQAEADAAAGIgDAuIAAAZIABAbIAAAHIAAAJQAAAFgDADQgEAEgFAAQgJAAgDgMg");
	this.shape_3.setTransform(13.7,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgFAFAAQAEABAGAGQADACAKACIAOACQAJAAAIgDQALgEAAgHQAAgRgXgFIgLgEQgRgDgGgFQgKgFAAgOQAAgZAYgMQAHgDAPgFIAXgHQAFgCAGgBQAFABAEADQADAEAAAFIACALIABAKQAAAFgDAEQgEADgFAAQgHAAgCgEQgCgEgBgKQgKACgTAHQgSAHAAAMIAHACQAbAFAOAJQATALAAAZQAAAUgRAKQgOAJgVgBQgQABgOgGg");
	this.shape_4.setTransform(0.8,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgrBUQgRgSAAgbQAAghASgSQAQgUAbAAQAOAAAIAEIAMAJQABgzACgSQACgLAJAAQAMAAAAAMQAAARgFA5QgCARABASQgBAqAEAUIAAADQABAEgEAEQgDADgFAAQgIAAgDgLQgJAHgJADQgJADgKAAQgZAAgRgQgAgcACQgLAMAAAZQAAAPAMAMQALALAPAAQAKAAAGgDIAOgLIADgEIAAgVIAAgOIAAgOQgEgKgIgEQgHgFgLAAQgUAAgKALg");
	this.shape_5.setTransform(-12.4,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAeA8IgEgbQgBgPAAgMIAAgKIAAgMQABgbgKAAQgOAAgMARQgLAPgGAVIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFABQgGgBgDgDQgEgEAAgFIAAgLIgBgLIACgiIACgjIAAgLIgBgMQAAgFAEgDQADgEAFAAQALAAABAQIAAAPQAVgcAVAAQATAAAIARQAFALABAXIAAANIAAAKQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgLg");
	this.shape_6.setTransform(-25.9,7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_7.setTransform(-36,4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAHAkIgEgeIgEgaIgKAXIgSAzQgCAEgDACQgDAIgJgBQgIABgKglQgEgSgEggIgDgTIgBgSQgBgFAEgDQAEgDAEgBQAKAAACAKIADASIACASIAHA2QANglAPgwQAEgOAJAAQAKAAADAPIAIAsQAFAeAEARIAJghIAPhCQACgHAJAAQAEAAAFADQADAEAAAEIgBAGQgJAogQAxQgDALgIAMQgEAGgIAAQgNAAgIggg");
	this.shape_8.setTransform(-48.2,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Wordwindsurfs, new cjs.Rectangle(-59,-15.9,118.1,38.8), null);


(lib.Wordsoars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgiBAQgSgHAAgOQAAgMAPAAQAFAAALAEQAKADAGAAQAYAAAAgKQAAgGgSgIQgXgLgHgDQgSgNAAgRQAAgYAagJQAPgFAeAAQANAAAFADQAJAEAAAMQAAAWgMAAQgMAAgDgKIgJgBQgdAAAAAIQAAAFARAIQAYALAIAGQASAMAAAQQAAAVgUALQgPAJgWAAQgQAAgOgFg");
	this.shape.setTransform(25.5,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgvBAQgEgFgBgHIAAhPIABgLIAAgLQAAgHAEgFQAEgEAIAAQANAAADAOQAUgQAbAAQAZAAgBAgIAAAIQgBATgQAAQgPAAAAgQIgBgMQgaAEgMAYIAAA8QAAAHgEAFQgGAEgHAAQgHAAgEgEg");
	this.shape_1.setTransform(13.8,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAdA5IgTAIQgJACgFAAQgdAAgPgQQgOgQAAgeQAAgdAVgVQAWgVAdAAQALAAAQAHQATAHAAALQAAAEgDAEIgDAMIAAARQAAAWAEAKIAFANIAFALQgBAHgEAEQgFAEgGAAQgGAAgNgKgAgQgXQgNAMAAAQQAAARAGAIQAGAIAMAAQAGAAAHgDQAHgCAGgEQgEgdAAgOIABgJIABgMIgEgBIgEgBQgPAAgMAOg");
	this.shape_2.setTransform(0.7,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgnAzQgSgRgBgcQgBgaAQgVQASgZAgAAQAZAAAOAUQANARAAAaQAAAcgPAUQgRAWgcAAQgWAAgQgQgAgRgUQgHAMAAAOQAAAPAIAIQAHAGAIAAQAKAAAIgHQAJgJAAgOQACgmgWgBQgOAAgJAOg");
	this.shape_3.setTransform(-13.1,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgiBAQgSgHAAgOQAAgMAOAAQAGAAALAEQAKADAGAAQAYAAAAgKQAAgGgRgIQgYgLgIgDQgRgNAAgRQAAgYAagJQAQgFAdAAQANAAAFADQAJAEgBAMQAAAWgLAAQgMAAgDgKIgKgBQgcAAAAAIQAAAFARAIQAYALAIAGQASAMAAAQQAAAVgUALQgPAJgWAAQgRAAgNgFg");
	this.shape_4.setTransform(-25.7,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Wordsoars, new cjs.Rectangle(-33.7,-15.9,67.5,38.8), null);


(lib.Wordoog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("Ag+BOQAAgGAEgFQAFgEAHAAIAPACQALACAHAAQASAAAIgLQAJgLACgXQgHAGgIADQgIADgIAAQgYAAgPgPQgPgRgBgXQABgiATgUQAWgVAjAAQALAAAIADQAJADAEAFQAQACAAAQQAAAJgCAOQgGAdgBAfQgBAngLASQgRAYgoAAQgvAAAAgTgAgSg3QgKAMAAAVQAAAOAFAHQAGAGALAAQAJAAAKgKQAKgLABgLIAFglIgIgDIgIgBQgUAAgLANg");
	this.shape.setTransform(13,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgnAzQgSgRgBgcQgBgaAQgVQASgZAgAAQAZAAAOAUQANARAAAaQAAAcgPAUQgRAWgcAAQgWAAgQgQgAgRgUQgHAMAAAOQAAAPAIAIQAHAGAIAAQAKAAAIgHQAJgJAAgOQACgmgWgBQgOAAgJAOg");
	this.shape_1.setTransform(-0.2,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgnAzQgSgRgBgcQgBgaAQgVQASgZAgAAQAZAAAOAUQANARAAAaQAAAcgPAUQgRAWgcAAQgWAAgQgQgAgRgUQgHAMAAAOQAAAPAIAIQAHAGAIAAQAKAAAIgHQAJgJAAgOQACgmgWgBQgOAAgJAOg");
	this.shape_2.setTransform(-13.4,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Wordoog, new cjs.Rectangle(-21.8,-15.9,43.7,38.8), null);


(lib.Worde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgpA1QgUgPgBgcQAAgeARgWQASgYAeAAQAVABAOAGQASAKABASQAAAOgPAKQgIAFgUAIIgoATQAGAGAIADQAIADAKAAQARAAAKgHQALgGAGABQAMAAAAAMQABAOgVAIQgRAIgTgBQgcABgTgOgAgQgcQgIAHgFAPIAcgLQAQgIAJgHQgIgEgNAAQgKAAgJAIg");
	this.shape.setTransform(-0.2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Worde, new cjs.Rectangle(-9.1,-15.9,18.2,38.8), null);


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
	this.shape_5.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhGBSQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbICXiYIiXCYgAhqABQAAApAaAeIAFAFIAFAFIgFgFIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsIAAAAgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAg");
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
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAAABtQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAgAhGBSICXiYQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAhGBSIAAAAgAhLBNIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIiXCYIgFgFgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAgABRhGIAAAAg");
	this.shape_9.setTransform(15,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,30.1);


(lib.staticwake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(0.1,1,1).p("AAfgOQAAgCACgCQAFgGgCgIQgBgFgFgBQgJgCABgIQADgJgCgJQgBgFgFgDQgBgBAAgBQgCgCAAgCQAAgDgDgDQAAAEgCADQgEAHgHAEQgIAGAFAJQADAGgEACQgDAFgHAEQgBABgBAAQgBAJAGAAQAHAAgDAIQAAAFgKAAQgCgEgEgGQgDgIAJgEQAAAAABAAQABgBABAAAAEg2QgCACgBADQADAGAFAEQADADgDAAQgFAKAFADQAFADACgKQABAAADgBQACgCgBgEQABgGgHgDQgEgBAAgFQAHgGgIgIQAAAHgGAFgAgTgNQACAEABADQgCABgCAAQgJACgGAGQgDADgBAGQACAFADAGQAGAFgCAHQgBADgBADQgEAJAIAIIAAAAQAHAHgEAJQADAHAEADQAHAFAIgGIALgXQgDgKABgIQgDgIAOgDQAFAAACgBIAAgBQgDgFAEgEQADgDAEgCQAHgDABgIQABgGgFgDQAAAEgDACQAAAFgHAGQgKgLAIgHQAEgEADgEAgWAMQAAgDAAgEQAEAHgCAFQACAEAHACQABgBACAIQABAGgHAFQgCABgCgBQAAABAAgBQgBgGgDgHQgIgJAIgHgAAkgFQgGgEABgFAAEAdQgEgIAHgJQACgEgEgGQAGAFABAIQABAHgJAHgAAIA8QAXgSgHgM");
	this.shape.setTransform(4,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AABAtQgCgIAOgCIAHgCQAGANgXASQgCgKAAgJgAgWAtIgBAAQgBgHgCgGQgIgJAHgHIAAgHQAEAGgBAGQACAEAGABQACAAABAHQABAGgGAFIgDABIgBAAgAADAQQACgEgEgHQAGAGAAAHQABAIgIAHQgDgJAGgIgAAUgDIAGgHQgBAEAHAEQAAAEgDADQgBAFgHAFQgKgKAJgIgAgdgTQgEgIAJgEIABAAIAAAAQgBAIAGABQAHAAgDAHQAAAFgKABIgFgKgAAEgTQgEgEAEgJQABAAAAAAQABgBAAAAQAAAAgBgBQAAgBAAAAQgFgFgDgFIADgGQAFgFAAgHQAIAIgGAHQAAAEAEACQAGADgBAGQABADgCACIgEACQgBAIgEAAIgCgBg");
	this.shape_1.setTransform(4.5,8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AgSBUQgEgDgDgHQAEgJgHgHIAAAAQgIgIAEgJIACgGQACgHgGgFIgFgLQABgGADgDQAGgGAJgCIAEgBIgDgHQAKAAAAgFQADgIgHAAQgGAAABgJIACgBQAHgEADgFQAEgCgDgGQgFgJAIgGQAHgEAEgHQACgDAAgEQADADAAADIACAEIABACQAFADABAFQACAJgDAJQgBAIAJACQAFABABAFQACAIgFAGQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgHAIQgIAHAKALQAHgGAAgFQADgCAAgEQAFADgBAGQgBAIgHADIgHAFQgCACAAADIABAEIAAABIgHABQgOADADAIQgBAIADAKIgLAXQgEAEgEAAQgEAAgDgDgAgOApQAHgFgBgGQgCgIgBABQgHgCgCgEQACgFgEgHIAAAHQgIAHAIAJQADAHABAGIAAAAIAEAAgAAHAMQgHAJAEAIQAJgHgBgHQgBgIgGgFQAEAGgCAEgAAEg2IgDAFQADAGAFAEQABABAAABQABAAgBAAQAAABAAAAQAAAAgBAAQgFAKAFADQAFADACgKIAEgBQACgCgBgEQABgGgHgDQgEgBAAgFQAHgGgIgIQAAAHgGAFgAAYAegAAYAdIgBgEQAAgDACgCIACADQADAEgGADg");
	this.shape_2.setTransform(4,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,10.1,19.3);


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


(lib.letters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWAhIgEgUIgRADIgQAEIgLAYQgCADgDABQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgCIASgeQAOgYAEAAQAFAAACAHIAEAVIAJArIAEAKIACAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgGAAgEgPgAgHAEIAWgEIgFgXg");
	this.shape.setTransform(4.5,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAxQgCgDAAgDIAAgSIABgZIABgaIABgSQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAJgCALAAQAKAAAKAHQAMAJAAANQAAAQgNAIQAKAFAFAFQAEAEAAAGQAAAIgIAHQgGAFgGADQgNAFgXAAQgCAAgDgCgAgTAZIAAANQARAAAKgEIAIgGQAEgDAAgCQAAgDgIgDIgMgFIgGgBIgCAAIgDAAIgHAAIgBAOgAgQglIAAALIgBAZIAJAAQAJAAAGgGQAHgFAAgJQAAgGgHgFQgHgGgGAAIgKABg");
	this.shape_1.setTransform(4.2,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAnQgIgKgBgNQAAgUASgYQAQgSAOAAIAFAAIAFABQADgDADAAQAEAAABAFIABANQABADgCACQgCADgDAAQgEgBgCgFIgEgEIgGgBQgJAAgLAOQgPATABAQQAAAIAEAGQAGAGAIAAQAFAAAHgDIALgIQADgDACABQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgRAPgQAAQgNAAgKgKg");
	this.shape_2.setTransform(3.9,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAzQgHgCgEgCIgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIABgUIABgUIgBgVIAAgWQAAgDADgDQACgDACAAQADAAAIAFIALAFQARAGANANQAPAPAAARQAAALgFAKQgGAKgIAGQgKAHgRAAIgLgCgAgXgRIAAASIgBAiIABABQAGAEAJAAQANAAAGgFQAGgEAEgHQAEgHAAgIQAAgRgUgMQgFgFgYgKg");
	this.shape_3.setTransform(4.7,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIABgcIAAgGIgBgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAPgDIALgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAFgHABIgPABIgcADIAAAIIgBAIQAAAOACACQACACAIAAIAMAAIALAAIAEgBIAEAAQAGAAABAGQAAAGgGABQgGABgTAAQgUAAgFgFg");
	this.shape_4.setTransform(4.1,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA0QAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIABgmIAAgkIAAgIIAAgJQAAgDACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAEACIAOgCIAKgBQAIAAAJACQANADAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAIgCAAQgIgDgNAAIgJABIgMABIAAAcQAMgDAGAAIATABQAGAAAAAGQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgKgBIgJAAQgEAAgPADIAAAsQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_5.setTransform(4.1,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfArQgJgJABgRQgBgRAJgQQAHgRANgLQAHgHAJAAQAFAAAJAEQAMAEAAAFQAAADgBADQgBAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgEgCQgKgGgGAAQgFAAgEAFIgIAJQgPATAAAWQABAMADAEQAEAGAKAAQALAAAIgHQAKgIADgOQgSABgMAFIgCABQgDAAgCgCQgCgBAAgEQAAgDAEgCQAMgHAiAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQgBAEgDACQgEATgMANQgNALgRAAQgPAAgHgJg");
	this.shape_6.setTransform(4.3,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAyQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIACgUIABgUIgBgJIAAgLIABgPIAAgPQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBAPIgBAQIABAOIAagDQAQgDALgBIABgbIACgKQACgHAEABIAEABQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAIgBADIgBAIIAAAFIAAAGIgBATIgBASIABAPIABAOQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgOIgBgPIAAgJQgKAAgQADIgaAFIgBARIgBAPQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_7.setTransform(4.9,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAvQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAOgCIAAgMIAAgKIAAgLIABgkIgIABIgIAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQgBgCAAgDQAAgGAFAAIAUgBQALAAATADQAGABAAAGQAAADgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgKgBIgKgBIgBAiIAAALIAAALIAAALIAUAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLAAIgLAAIgLABIgNACQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_8.setTransform(3.4,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAsQgMgJAAgMQAAgHAGAAQAHAAAAAHQAAAGAHAFQAHAFAHAAQAEAAACggIABglIgBgHIgDAAIgHAAIgHAAQgDAAgCgCQgCgCAAgDQAAgGAJAAIAGAAIAGAAIAMAAIAMgBQAOAAAAAHQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgCACgCAAIgEAAIgEgBIgIAAIABAIQAAAugHAWQgEAOgJAAQgLAAgLgIg");
	this.shape_9.setTransform(4.2,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// circle
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAxg+QAVAaAAAkQAAAlgVAaQgUAagdAAQgcAAgUgaQgVgaABglQgBgkAVgaQAUgaAcAAQAdAAAUAag");
	this.shape_10.setTransform(4,9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.5,15.9,22.5);


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


(lib.frb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgqAcIAIgHQAKALASAAQAPAAAMgLQALgMAAgPQAAgQgLgMIAHgIQAOAPAAAVQAAATgOAPQgPAOgTAAQgVAAgPgOg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_rightOut, new cjs.Rectangle(0,0,8.5,8.5), null);


(lib.frb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAXIAHgIQAIAJANAAQAMAAAIgJQAJgJAAgLQAAgMgJgJIAIgHQALANAAAPQAAAQgLAMQgNALgPAAQgRAAgLgLg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_rightIn, new cjs.Rectangle(0,0,6.8,6.8), null);


(lib.frb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_22:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgqAHQAAgTAPgPQAPgPATAAQAVAAAPAPIgHAHQgNgMgQAAQgPAAgMAMQgMAMAAAPQAAASAMALIgHAHQgPgOAAgWg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_leftOut, new cjs.Rectangle(0,0,8.6,8.6), null);


(lib.frb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_23:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAGQAAgQAMgLQALgMAQAAQAPAAANAMIgHAHQgJgJgMAAQgMAAgIAJQgJAIAAAMQAAAMAJAJIgHAHQgMgLAAgRg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_leftIn, new cjs.Rectangle(0,0,6.9,6.9), null);


(lib.frb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAiBICBAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_hitArea, new cjs.Rectangle(0,0,13,13), null);


(lib.frb_dot_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_disabled, new cjs.Rectangle(0,0,4,4), null);


(lib.frb_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot, new cjs.Rectangle(0,0,4,4), null);


(lib.frb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_pressed, new cjs.Rectangle(0,0,6,6), null);


(lib.frb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_disabled, new cjs.Rectangle(0,0,6,6), null);


(lib.frb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background, new cjs.Rectangle(0,0,6,6), null);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.animsharkfin1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgaALQAFgFAJgBIAGAAQAGABAJgMQADgDADAAQAFABAHgC");
	this.shape.setTransform(0.6,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAPAOQgFgUALgZQgogCgBBB");
	this.shape_1.setTransform(0,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAVgfQgLAZAFAUQgJANgGgBIgGAAQgJABgFAFQABhBAoACg");
	this.shape_2.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAbACQgVAIggAEQAcgWAJgFQgGAQAWgBg");
	this.shape_3.setTransform(0.6,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AALgNQgGAQAWgBQgVAIggAEQAcgWAJgFg");
	this.shape_4.setTransform(0.6,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAaAGQgUAIgfAEAgYAIQAZgVAJgE");
	this.shape_5.setTransform(1.8,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AgYAHQAZgUAJgDQAPAMABAKQgUAIgfADg");
	this.shape_6.setTransform(1.8,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgKgLQA6gHhAAfQATgRgNgHg");
	this.shape_7.setTransform(3,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AgKgLQA6gHhAAfQATgRgNgHg");
	this.shape_8.setTransform(3,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgKgMQA+gThGAxQAMgSgEgMg");
	this.shape_9.setTransform(5.4,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099FF").s().p("AgKgMQA+gThGAxQAMgSgEgMg");
	this.shape_10.setTransform(5.4,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgUASQAQgRgNgLQBPgWhSAyg");
	this.shape_11.setTransform(6.1,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099FF").s().p("AgRgKQBPgWhSAyQAQgRgNgLg");
	this.shape_12.setTransform(6.1,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgWgJQBZgRhXApQAUgYgWAAg");
	this.shape_13.setTransform(7.9,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099FF").s().p("AgWgJQBZgRhXApQAUgYgWAAg");
	this.shape_14.setTransform(7.9,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgMAMQA0ggg0ANQAMABgMASg");
	this.shape_15.setTransform(9.7,-0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099FF").s().p("AgMgHQA0gNg0AgQAMgSgMgBg");
	this.shape_16.setTransform(9.7,-0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgKAJQApgYgnAJQAIADgKAMg");
	this.shape_17.setTransform(11,-1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099FF").s().p("AgIgGQAngJgpAYQAKgMgIgDg");
	this.shape_18.setTransform(11,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAGgEIgNAJIAPAAg");
	this.shape_19.setTransform(-1,2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAFIAMgJIADAJg");
	this.shape_20.setTransform(-1,2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAGgJIgUAOQALAKASgLQgQgEAHgJg");
	this.shape_21.setTransform(0.8,1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAFIAUgOQgHAJAQAEQgKAGgHAAQgHAAgFgFg");
	this.shape_22.setTransform(0.8,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgOAQQA5gsgyARQAHABgOAag");
	this.shape_23.setTransform(4.2,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHgLQAygRg5AsQAOgagHgBg");
	this.shape_24.setTransform(4.2,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgLgNQAJACgPAbQBEgog+ALg");
	this.shape_25.setTransform(6.1,0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLgNQA+gLhEAoQAPgbgJgCg");
	this.shape_26.setTransform(6.1,0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgHgIQAGABgLASQAvgbgqAIg");
	this.shape_27.setTransform(11.3,-1.5,0.4,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHgIQAqgIgvAbQALgSgGgBg");
	this.shape_28.setTransform(11.3,-1.5,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24,p:{x:4.2,y:1.1}},{t:this.shape_23,p:{x:4.2,y:1.1}}]},1).to({state:[{t:this.shape_24,p:{x:4.6,y:1.2}},{t:this.shape_23,p:{x:4.6,y:1.2}}]},1).to({state:[{t:this.shape_26,p:{x:6.1,y:0.6,scaleX:1,scaleY:1}},{t:this.shape_25,p:{x:6.1,y:0.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_26,p:{x:8.1,y:-0.1,scaleX:1,scaleY:1}},{t:this.shape_25,p:{x:8.1,y:-0.1,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_26,p:{x:9.8,y:-1.3,scaleX:0.694,scaleY:0.694}},{t:this.shape_25,p:{x:9.8,y:-1.3,scaleX:0.694,scaleY:0.694}}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-4.5,7.5,8.5);


(lib.animH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AA0BdQgFgFAAgHIgBgaIgBgbIAAgMQgSABgcAFIguAJIgCAaIgBAaQgBAGgFAEQgEAFgHgBQgHABgFgFQgFgEAAgIQAAgLACgZIACgjIABgtIABguQAAgHAEgEQAFgFAHABQAHgBAGAFQAEAFAAAGIgBAcIAAAcIgBAMIAAAMIAugJQAbgEATgBIACgsQAAgKAGgNQAGgOAKAAQAGAAAFADQAFAFAAAHIAAAEQgCAJgBAGIgBALIAAALIgCAiIgBAiIACAaIABAbQAAAHgEAFQgGAEgHAAQgGABgGgFg");
	this.shape.setTransform(0.3,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},4).wait(2).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-15.9,23.4,38.8);


(lib.animD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgmBjQgOgEgIgFQgHAAgFgFQgFgFAAgGIABglIACgkIgBgpIgBgoQAAgHAHgGQAGgHAIAAQAEAAAQAHIAWALQAjAMAZAXQAfAeAAAiQAAAUgLAUQgKATgSAMQgUANgkAAQgJAAgMgCgAgqA+IALAFIAOABQAZAAALgHQALgHAHgMQAGgMAAgNQAAgdgjgWQgLgIgngQg");
	this.shape.setTransform(0.5,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-15.9,22.2,38.8);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLBeQgGgHAAgGQAAgHAFgEQAFgEAGAAQAHAAAGAIQAGAHAAAGQAAAGgFAEQgFAFgHAAQgGAAgGgIgAgIA1QgFgEAAgHIAAgNIgBgOIABgyIAAgzQAAgGAFgEQAEgFAGAAQAHAAAEAFQAFAEAAAGIAACAQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape.setTransform(4.9,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,38.9);


(lib.Diagramstatement2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.animH("single",0);
	this.instance.parent = this;
	this.instance.setTransform(51.5,16);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

	// Layer 3
	this.instance_1 = new lib.Worde();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.1,19.5,1,1,0,0,0,0,3.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).to({alpha:0},5).wait(1));

	// Layer 2
	this.instance_2 = new lib.Wordsoars();
	this.instance_2.parent = this;
	this.instance_2.setTransform(171.1,20.3,1,1,0,0,0,0,3.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},4).to({alpha:0},5).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgXAlQgCgDAAgDIAAgyIgBgHIABgGQAAgFAIAAIAMgBQAJgBAIAGQAKAHAAAKQAAAGgCAEQgCADgEADQAFACAEAFQAEAFAAAFQAAAHgHAFQgFAEgFACQgKAFgSgBQgDAAgCgCgAgMAaQAIAAAJgEQAJgCAAgCQgBgEgFgDQgEgDgEAAIgMAAgAgMgPIAAAKIAHAAQANAAAAgLQAAgDgEgDQgEgDgFgBIgHAAg");
	this.shape.setTransform(175.6,53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgaAlQgCgCAAgDIAAgLIAAgLIABgnQAAgDABgCQADgEAEABIAMABIALADQAVAKAAAQQAAAGgEAEQgFAFgJAEQANAHAHAHQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgDAAgCgCQgPgOgRgFIABAQQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgDAAgCgBgAgOABIACAAQAMAAAFgBIAEgEIACgDQAAgFgHgGQgFgEgIgBIgFAAg");
	this.shape_1.setTransform(169.2,53.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgWAlQgFgEAAgQIABgTIABgTIgBgGIAAgFQAAgHAHAAIAEABIAKgCIAJgBQAMAAAIADQAEACAAAEQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCACgDAAIgCAAQgIgCgHAAIgHAAIgJACIAAATIASgBIAMgBQADAAACABQACACAAADQAAAFgHABIgLABIgUACIAAAKQAAAJABACIAGAAIAIAAIAJAAIADAAIADgBQADAAACACQACACAAADQAAAGgGABQgFABgOAAQgQAAgFgFg");
	this.shape_2.setTransform(162.9,53.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgKAiQgGgOgHgZIgEgOQgDgIAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAFIACAJIAEAQIAIAXIAKgcIAEgMQADgHAEgEQACgCADgBQADAAACACQAAABABABQAAAAAAABQABAAAAABQAAAAAAABIgBAEQgDAEgCAFIgEAKIgNAhIgGAMQgCADgDAAQgFABgCgGg");
	this.shape_3.setTransform(156.3,53.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgEAjQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgCIABgDIgBgGIAAgHIgBgRIgCgSIgCAAQgLAAgGgBQgGgCAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQACgCADAAIAIABIAIAAIAJAAIAIAAIALAAIALABQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIgMgBIACAUIABATIAAAFIAAAFQAAADgBADQgCAEgEAAQgCAAgCgCg");
	this.shape_4.setTransform(78.6,53.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgVAeQgHgIAAgKQAAgQAOgRQANgOALAAIAEAAIADAAQACgCADAAQAFAAABAGIABAKIgBAEQgCADgDAAQgFAAgCgFIgCgDIgEAAQgGAAgHAKQgMAMAAAMQAAAFAEAEQADAEAGAAQADAAAGgDIAHgFIAFgCQADAAADACQABACAAADQAAACgCADQgNALgNAAQgLAAgIgIg");
	this.shape_5.setTransform(72.1,53.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgWAlQgFgEAAgQIABgTIABgTIgBgGIAAgFQAAgHAHAAIAEABIAKgCIAJgBQAMAAAIADQAEACAAAEQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgCACgDAAIgCAAQgIgCgHAAIgHAAIgJACIAAATIASgBIAMgBQADAAACABQACACAAADQAAAFgHABIgLABIgUACIAAAKQAAAJABACIAGAAIAIAAIAJAAIADAAIADgBQADAAACACQACACAAADQAAAGgGABQgFABgOAAQgQAAgFgFg");
	this.shape_6.setTransform(65.9,53.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgUAhQgKgGAAgKQAAgHAHAAQAHAAAAAHQAAADAFADQAFAEAEAAQACAAAAgHIABgPIAAgbIAAgDIgBAAIgFAAIgGAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgCAAgDQAAgHAJAAIAFAAIAEAAIAJAAIAJAAQANAAAAAHQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgCACgDAAIgDAAIgDAAIgEAAIAAADQAAAigFAQQgEAMgIAAQgJAAgJgHg");
	this.shape_7.setTransform(59.4,53.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgXAlQgCgCAAgDIAAgzIgBgHIABgGQAAgEAIgCIAMgBQAJABAIAFQAKAHAAALQAAAFgCAEQgCADgEADQAFACAEAEQAEAGAAAFQAAAGgHAHQgFADgFACQgKAEgSABQgDgBgCgCgAgMAaQAIAAAJgDQAJgCAAgEQgBgEgFgCQgEgCgEgBIgMgBgAgMgPIAAAKIAHABQANgCAAgJQAAgEgEgDQgEgEgFAAIgHAAg");
	this.shape_8.setTransform(53,53.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgTAiQgNgLAAgXIAAgHIABgHIAAgGIAAgGIABgHQADgEADAAQACAAACABQACACABAEIAAAIIAAAIIAAAHIgBAGQAAAHACAHQACAHAEADQACABAHABQANAAAEgWQADgLAAgUIABgGQACgDAEAAQADAAACACQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAASgCALQgCAQgIALQgEAFgEADQgHAEgGAAQgMAAgGgEg");
	this.shape_9.setTransform(46,53.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgZAgQgGgFAAgGQAAgDABgCQACgCAEAAQAEAAACAEQADAGAKAAQAHAAAIgDQAIgEAAgEQAAgHgFgCIgOgBQgIAAgHgDQgJgDAAgIQABgKAKgHQAKgIALAAQAEAAAHACQAJADAAADQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgBACgEAAIgGgBIgHgBQgHAAgEADQgGADAAADQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIAFABIALABQALABAHAFQAGAFAAAKQAAANgOAGQgLAFgNAAQgMAAgHgFg");
	this.shape_10.setTransform(38.9,53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AkHAZIAAkIAkHDwIAAjXAyzAZIOpAAAS0AZI27AA");
	this.shape_11.setTransform(120.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,245.8,65.1);


(lib.Diagramstatement1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.animD("single",0);
	this.instance.parent = this;
	this.instance.setTransform(28.6,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).to({alpha:1},4).wait(1));

	// Layer 3
	this.instance_1 = new lib.Wordoog();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.2,16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},5).to({alpha:1},4).wait(1));

	// Layer 2
	this.instance_2 = new lib.Wordwindsurfs();
	this.instance_2.parent = this;
	this.instance_2.setTransform(168.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},5).to({alpha:1},4).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgXAlQgCgCAAgDIAAgzIgBgHIABgGQAAgEAIgCIAMgBQAJABAIAFQAKAHAAALQAAAFgCAEQgCADgEADQAFACAEAEQAEAGAAAFQAAAGgHAHQgFADgFACQgKAEgSABQgDgBgCgCgAgMAaQAIAAAJgDQAJgCAAgEQgBgEgFgCQgEgCgEgBIgMgBgAgMgPIAAAKIAHABQANgCAAgJQAAgEgEgDQgEgEgFAAIgHAAg");
	this.shape.setTransform(172.2,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgaAlQgCgCAAgDIAAgLIAAgLIABgnQAAgDABgCQADgEAEABIAMABIALADQAVAKAAAQQAAAGgEAEQgFAFgJAEQANAHAHAHQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgDAAgCgCQgPgOgRgFIABAQQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgDAAgCgBgAgOABIACAAQAMAAAFgBIAEgEIACgDQAAgFgHgGQgFgEgIgBIgFAAg");
	this.shape_1.setTransform(165.8,49.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgWAlQgFgEAAgQIABgTIABgTIgBgGIAAgFQAAgHAHAAIAEABIAKgCIAJgBQAMAAAIADQAEACAAAEQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCACgDAAIgCAAQgIgCgHAAIgHAAIgJACIAAATIASgBIAMgBQADAAACABQACACAAADQAAAFgHABIgLABIgUACIAAAKQAAAJABACIAGAAIAIAAIAJAAIADAAIADgBQADAAACACQACACAAADQAAAGgGABQgFABgOAAQgQAAgFgFg");
	this.shape_2.setTransform(159.5,49.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgKAjQgGgPgHgaIgEgMQgDgJAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAFIACAIIAEAQIAIAYIAKgdIAEgLQADgHAEgEQACgCADAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBAEQgDAEgCAGIgEAJIgNAhIgGALQgCAEgDAAQgFAAgCgEg");
	this.shape_3.setTransform(152.9,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgEAjQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIAAgCIABgDIgBgGIAAgHIgBgRIgCgSIgCAAQgLAAgGgBQgGgCAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQACgCADAAIAIABIAIAAIAJAAIAIAAIALAAIALABQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIgMgBIACAUIABATIAAAFIAAAFQAAADgBADQgCAEgEAAQgCAAgCgCg");
	this.shape_4.setTransform(68.5,50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgVAeQgHgIAAgKQAAgQAOgRQANgOALAAIAEAAIADAAQACgCADAAQAFAAABAGIABAKIgBAEQgCADgEAAQgEAAgCgFIgCgDIgEAAQgGAAgHAKQgMAMAAAMQABAFADAEQADAEAFAAQAEAAAGgDIAHgFIAGgCQACAAADACQACACAAADQgBACgCADQgOALgNAAQgKAAgIgIg");
	this.shape_5.setTransform(62,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgWAlQgFgEAAgQIABgTIABgTIgBgGIAAgFQAAgHAHAAIAEABIAKgCIAJgBQAMAAAIADQAEACAAAEQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgCACgDAAIgCAAQgIgCgHAAIgHAAIgJACIAAATIASgBIAMgBQADAAACABQACACAAADQAAAFgHABIgLABIgUACIAAAKQAAAJABACIAGAAIAIAAIAJAAIADAAIADgBQADAAACACQACACAAADQAAAGgGABQgFABgOAAQgQAAgFgFg");
	this.shape_6.setTransform(55.8,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgUAhQgKgHAAgJQAAgIAHAAQAHAAAAAIQAAADAFADQAFADAEAAQACABAAgHIABgPIAAgbIAAgDIgBAAIgFAAIgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgDgCAAgDQAAgGAJgBIAFAAIAEAAIAJAAIAJAAQANAAAAAIQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQgCACgDAAIgDAAIgDgBIgEAAIAAAEQAAAigFAQQgEAMgIAAQgJAAgJgHg");
	this.shape_7.setTransform(49.3,50.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgXAlQgCgDAAgCIAAgzIgBgHIABgGQAAgEAIgBIAMgBQAJgBAIAGQAKAHAAAKQAAAGgCAEQgCADgEADQAFACAEAFQAEAFAAAFQAAAHgHAFQgFAEgFACQgKAFgSgBQgDAAgCgCgAgMAaQAIgBAJgCQAJgDAAgCQgBgEgFgDQgEgCgEgBIgMAAgAgMgPIAAAKIAHAAQANgBAAgKQAAgDgEgDQgEgDgFgBIgHAAg");
	this.shape_8.setTransform(42.9,50);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgTAiQgMgKAAgYIAAgHIAAgHIAAgGIAAgFIABgIQACgEAEAAQADAAABACQACABAAADIAAAIIAAAJIAAAHIAAAHQAAAGACAGQACAIAEADQACACAHAAQAMAAAFgWQACgLAAgUIACgGQACgDAEAAQADAAACADQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAUgBALQgDAPgIALQgDAFgFADQgHAEgGAAQgMAAgGgEg");
	this.shape_9.setTransform(35.9,50.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgZAgQgGgFAAgGQAAgDABgCQACgCAEAAQAEAAACAEQADAGAKAAQAHAAAIgDQAIgEAAgEQAAgHgFgCIgOgBQgIAAgHgDQgJgDAAgIQABgKAKgHQAKgIALAAQAEAAAHACQAJADAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgBACgEAAIgGgBIgHgBQgHAAgEADQgGADAAADQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABIAFABIALABQALABAHAFQAGAFAAAKQAAANgOAGQgLAFgNAAQgMAAgHgFg");
	this.shape_10.setTransform(28.8,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AkHAZIAAkIAkHDwIAAjXAyzAZIOpAAAS0AZI27AA");
	this.shape_11.setTransform(120.4,36.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,245.8,63.1);


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


(lib.frb_background_pressed_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_pressed();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_pressed_1, new cjs.Rectangle(2,2,6,6), null);


(lib.frb_background_disabled_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_disabled();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_disabled_1, new cjs.Rectangle(2,2,6,6), null);


(lib.frb_background_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_1, new cjs.Rectangle(2,2,6,6), null);


(lib.frb_frame = function(mode,startPosition,loop) {
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
		//																	  n*/
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
	this.highlight3D_mc = new lib.frb_rightOut();
	this.highlight3D_mc.parent = this;
	this.highlight3D_mc.setTransform(1.5,1.5);

	this.highlight_mc = new lib.frb_rightIn();
	this.highlight_mc.parent = this;
	this.highlight_mc.setTransform(2.2,2.2);

	this.shadow_mc = new lib.frb_leftIn();
	this.shadow_mc.parent = this;
	this.shadow_mc.setTransform(1,1);

	this.darkshadow_mc = new lib.frb_leftOut();
	this.darkshadow_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.darkshadow_mc},{t:this.shadow_mc},{t:this.highlight_mc},{t:this.highlight3D_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_frame, new cjs.Rectangle(0,0,10,10), null);


(lib.frb_dot_disabled_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(disabled_mc, "foregroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.disabled_mc = new lib.frb_dot_disabled();
	this.disabled_mc.parent = this;
	this.disabled_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.disabled_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_disabled_1, new cjs.Rectangle(3,3,4,4), null);


(lib.frb_dot_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(dot_mc, "radioDot");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.dot_mc = new lib.frb_dot();
	this.dot_mc.parent = this;
	this.dot_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.dot_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_1, new cjs.Rectangle(3,3,4,4), null);


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


(lib.animwindsurfer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgThRQgHAEgEAAQABgFAFgFQgEAAABgHQABgEAFgDQACgCAAgJQgDgBABgFQAKAOAGgOQAIAMAOgIQAGgCAEgCQgIAJAJAJQADAEAGACQAFAGgJgBQgBAEAAACQABABAAAAQAMAFAJABQAFAHAAAJQAFAIABALQAAAJACALQABAKAGAIAgRhFQgCgFAAgHIAAAAAALgTQgEACgHAAQgGgBgFgBQgIgBgGgBQgJABgHgGQgKgJgJAEQgEAFgIAAQgEgGgCgBQgIAHAAgNQgGgGAJgHQgEgGAFgFQAOgIADALQAFAJADAGQAIAFAOABQANAAAOgGQABgCAHgDQABgBACgCQgBAAgBAAQgBAAAAgBQgCAAgCgBQgIgDgEgHIAAAAQgBgCAAgCQgCgGAAgGAAOg/QgKgIABgJQgFAJgJgIQgEAFgEAFAAOg/QABgCAAgCQACgDAGACIADABQAAgCgBgCAAZhHQAAgDgBgEQAFABAIAFQgCgFgCgFAANg6QAAAAAAgBIAAAAIAAABIAAAAIAAgBAAOg/IAAAAQAAABAAABQgBABAAABAANg6QgDAEgEABQAAAAgBAAQgBABgBgBAALgTQAGgDADgFAAAgyQAFADAHAFAAWAQQAKALALgBQAMgDAIgHQAEgLAHgIQADAGAFAJQABAFgFADQABAKgLAHQgGAEgGAGQAQAFAKADQALAEgGAJQACALgOAAQgGABgGgEQAIgBAEgKQgWgCgKgGQACgBACgBQAEgEAFgEAAhA5IgIAHQABgBAWAKQAVALADAFQAFAFABAGQABACABACQABAFgGAFQgGABgPADQgPADAGgNQAOgFgDgLQgLgBgLgCQgMgBgJgKQgPgGAAgOQABgIAJgPIAAAAIAAAAQAKgNAEgGQgFgJgBgHQAEgMgJgHAAIAjQAJAPAOAHQABAAABAAAArA5QgGACgEgC");
	this.shape.setTransform(6,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgLAfIgCgBQgOgHgJgOIAAgBIAOgRQAKAJALAAQALgDAIgHQAEgLAHgJIAIAQQABAFgFADQABAJgLAHIgMAKIgJAIIgDACIgGABIgEAAg");
	this.shape_1.setTransform(10.5,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(6.8,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AAtBaQAOgFgDgLIgWgDQgMgBgJgKQgPgGAAgOQABgIAJgPQAJAPAOAHIACAAIgIAHQABgBAWAKQAVALADAFQAFAFABAGIACAEQABAFgGAFIgVAEIgFABQgJAAAFgLgAA/A6QAIgBAEgKQgWgCgKgGIAEgCIAJgIIAaAIQALAEgGAJQACALgOAAIgCAAQgFAAgFgDgAAWgBQgFgJgBgIQAEgMgJgHQAGgDADgFQgDAFgGADQgEACgHAAIgLgCIgOgCQgJABgHgGQgKgJgJAEQgEAFgIAAQgEgGgCgBQgIAHAAgNQgGgGAJgHQgEgGAFgFQAOgIADALIAIAPQAIAFAOABQANAAAOgGIAIgFIAMAIIgMgIIADgDIgCAAIgBgBIgEgBQgIgDgEgHIAAAAIgBgEIAIgKQAJAIAFgJQgBAJAKAIIABgEIABgCIAAAAIAAAAQADgBAEACIAAAAIgCgBIgBAAIgBAAIAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAAAAIABAAIABAAIACABIAAAAIADABIgBgEIAAAAIgBgHQAFABAIAFIgEgKQAMAFAJABQAFAHAAAJQAFAIABALIACAUQABAKAGAIQgHAJgEALQgIAGgMADIgDAAQgJAAgJgJgAAGhHQAEgBADgEQgDAEgEABIgBAAIgCAAIACAAIABAAIAAAAgAANhMIAAgBIAAAAIABgCIAAgCIAAAAIAAAAIAAACIgBACIAAABIAAAAgAANhMIAAgBIAAABgAANhNIAAAAIAAABgAANhNg");
	this.shape_3.setTransform(6,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AABAKQgFAJgJgHIgIAKQgBgGAAgHIgBABQgHADgEAAQABgFAFgFQgEAAABgGQABgDAFgDQACgDABgIQgEgCABgEQALANAFgNQAJAMANgIIAKgEQgIAJAJAIQAEAFAFABQAFAFgJgBQgBAFABABIAAACIAEAJQgIgEgFgCIACAIIAAAAIAAADIgDgBQgEgBgDAAIAAAAIAAAAIAAAAIAAADIgBADQgKgIAAgJg");
	this.shape_4.setTransform(6.4,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(9));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AB3CQQA1iqAcioIAUgUQAECcg2C1IhDBbQgaAYgKgXIAqg7QjuikhajZQAeA2AmA0QAbAlAgAkQAaAeAdAcQABABABABQAbAaAcAaQAfAbAiAaQARANARAMgABtCcQAXAKgNgW");
	this.shape_5.setTransform(-1.6,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("ACdC9QjtikhbjZQAeA3AmA0QAcAlAfAkQAaAdAdAdIABABQAbAbAdAZQAgAcAiAaIAhAZQAJAPgIAAQgDAAgIgEg");
	this.shape_6.setTransform(-6.4,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC3333").s().p("AhMDSIArg8QAXAKgOgWQA1iqAcioIATgUQAFCcg3C2IhBBaQgOANgJAAQgJAAgFgLg");
	this.shape_7.setTransform(12.7,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(9));

	// Layer 5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("ACrhTIAFgUIAIACIhAEUIgLgNQABgCAAgBIA5jiIAEgQgABzhLQAaAEAaAEAA4hXQAdAHAeAFIhFDDIg9g2IAAgBIguhBQgbgQgggwQgOgZgKgRQgLgSgcgyIBhArAg9AAIA0hoQgngMgmgPIgiBDAi3iuQCkA+C+AdABtCiIg/gqAgPBBIBHiYQghgIgggJ");
	this.shape_8.setTransform(-5.3,-2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("ABtChIABgCIA5jiIg0gIQgegFgdgHQghgIgggJQgngMgmgOIhhgsQCkA+C+AdIAAAAIgEAQIAEgQIAAAAIAFgUIAIACIhAEUg");
	this.shape_9.setTransform(-5.3,-2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000CC").s().p("Ag6AUIA1hoQAfAJAhAIIhHCYg");
	this.shape_10.setTransform(-5.6,-4.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CC00").s().p("Ag3ABIAjhCQAlAPAnALIg1BpQgagSgggvg");
	this.shape_11.setTransform(-11.9,-9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgJANIgmhDIBfArIgiBCIgXgqg");
	this.shape_12.setTransform(-18.8,-14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("Ag7BNIBDjDIA0AIIg4DiIgBADg");
	this.shape_13.setTransform(5.3,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6600CC").s().p("Ag8AyIAAgBIBHiYQAdAHAeAFIhFDDgAg8AxIAAABIgJARgAg8Ayg");
	this.shape_14.setTransform(-0.8,-0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("ACqhTIAGgUIAIACIhMEUIgJgNQAAgCABgBIBCjiIAEgQgAByhLQAZAEAbAEAA3hXQAdAHAeAFIhTDSAhSAYQgYgigXgsQgcg1gahDIBgArIgqBNAgKhoIhICAAhXiDQAmAPAnAMQAgAJAhAIABjCiQgjgIgggTIgBAAIAAAAQghgUgfggQgZgZgYgiAi3iuQCjA+C+AdAghBTIBYiq");
	this.shape_15.setTransform(-4.8,-2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000CC").s().p("AhEAjIBHiAQAhAJAhAIIhYCqQgZgZgYgig");
	this.shape_16.setTransform(-6.2,-3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC00").s().p("Ag7AAIArhNQAlAPAnAMIhHCAQgZgjgXgrg");
	this.shape_17.setTransform(-11.8,-7.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("Agvg7IBfArIgrBMQgbg2gZhBg");
	this.shape_18.setTransform(-18.4,-13.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AhCBdIAAgBIgBAAIBSjSIA1AIIhCDiIgCADQghgIghgSg");
	this.shape_19.setTransform(5,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6600CC").s().p("AhJA8IBYiqQAdAGAeAGIhSDRQgigTgfggg");
	this.shape_20.setTransform(-0.8,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("ABjChIABgCIBCjiIg0gIQgegFgdgHQghgIgggJQgngMgmgOIhggsQCjA+C+AdIAAAAIgEAQIAEgQIAAAAIAGgUIAIACIhMEUg");
	this.shape_21.setTransform(-4.8,-2.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("ACqhTIAGgUIAIACIhMEUIgJgNQAAgCABgBIBCjiIAEgQgAByhLQAZAEAbAEAA3hXQAdAHAeAFIhWDaIgBgBQgkgQgggbIAAAAAhcAqQgZgjgVgtQAAgBgBgBQgag6gShMQCjA+C+AdAiJgnIAyhcIhggrAhXiDQAmAPAnAMQAgAJAhAIAgpBjIAAAAQgcgYgXghIBSiSAAbCPIABAAABjCiQgmgFghgOIAAAAAgpBjIBgi6");
	this.shape_22.setTransform(-4.8,-2.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000CC").s().p("AgWBlQgcgXgXghIBRiSQAhAJAhAIIhfC6IgBgBIABABIgBAAg");
	this.shape_23.setTransform(-6.7,-2.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AgDBDQgag7gShKIBfArIgyBaIgBAAg");
	this.shape_24.setTransform(-18.4,-13.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CC00").s().p("Ag/AFIABAAIAyhbQAlAPAnALIhRCTQgZgkgVgug");
	this.shape_25.setTransform(-12.3,-6.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AhDBkIgBAAIBVjaIA0AIIhCDiIgBADQgkgFghgOgAhEBkIAAAAIABAAIgBAAg");
	this.shape_26.setTransform(4.9,1.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6600CC").s().p("AgIBzQglgQgggcIBgi6QAdAHAeAFIhVDaIgBAAIABAAIgBABIAAgBg");
	this.shape_27.setTransform(-1.2,0.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.1,1,1).p("ACqhTIAGgUIAIACIhMEUIgJgNIAAgBQAAgBABgBIBCjiIAEgQgAByhLQAaAEAaAEAA3hXQAdAHAeAFIheDxQgsgEgjgVQghgUgZgjIBsi+QgogMgmgPIhggrQCjA+C+AdAiggJIBJh6AiggJQgShDgFhcQAAgDAAgCIAAgBAh1BWQgagngRg4Ag7CNIByjkQghgIgfgJABjChQgrAIgkgD");
	this.shape_28.setTransform(-4.8,-2.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000CC").s().p("AhVBEIBqi+QAgAJAhAIIhxDkQgigUgYgjg");
	this.shape_29.setTransform(-7.9,-0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AgvhMIAAgFIAAAAIBfArIhIB4QgThCgEhcg");
	this.shape_30.setTransform(-18.4,-11.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CC00").s().p("AhKANIBJh5QAlAPAnAMIhqC+QgbgngQg5g");
	this.shape_31.setTransform(-13.3,-4.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AhIB5IBdjxIA0AIIhCDiIgBACQgdAFgbAAIgWAAg");
	this.shape_32.setTransform(4.5,2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6600CC").s().p("AhWBmIByjkQAdAHAeAFIhdDxQgtgEgjgVg");
	this.shape_33.setTransform(-2.1,1.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCCCCC").s().p("ABjChIAAAAIABgCIBCjiIg0gIQgegFgdgHQghgIgggJQgngMgmgOIhggsQCjA+C+AdIAAAAIgEAQIAEgQIAAAAIAGgUIAIACIhMEUg");
	this.shape_34.setTransform(-4.8,-2.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.1,1,1).p("ACthcIAGgUIAIACIhMETIgKgNQABgBABgBIBCjjIAEgPgAB0hVQAaAFAbADAA5hgQAeAGAdAFIhjEIQgCAAgCABQg5AKglgOQgkgQgVgdQgegpgLhFQgNhRAMh7IBgArQAmAPAnALQAfAKAhAIgAizAVIBfihAiKCDICDj1Ai0i3QCjA+C+AdABlCYQguAUgmAHAhRCwICKkQ");
	this.shape_35.setTransform(-5.1,-1.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000CC").s().p("AhhBkICCj0QAgAJAhAIIiKEQQgkgQgVgdg");
	this.shape_36.setTransform(-9.2,1.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CC00").s().p("AhVAaIBeihQAmAPAnAMIiCD0QgegogLhGg");
	this.shape_37.setTransform(-14.4,-2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF00").s().p("AgshlIBfArIheCgQgNhSAMh5g");
	this.shape_38.setTransform(-18.6,-9.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AAYiDIA0AIIhCDiIgBACQgtAUgnAHg");
	this.shape_39.setTransform(4.2,3.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6600CC").s().p("AhiCFICKkRQAdAHAeAFIhjEIIgDAAQgYAFgVAAQgdAAgVgIg");
	this.shape_40.setTransform(-3.4,2.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.1,1,1).p("AA3hXQAdAHAeAFQAaAEAaAEIAEgQIAAAAIAGgUIAIACIhMEUIgJgNIAAgBQAAgBABgBIBCjiAi3iuIBgArQAmAPAoAMIhsC+AiggJQgShDgFhcQAAgDAAgCIAAgBAiggJIBJh6AAUCmQgsgEgjgVQghgUgZgjQgagngRg4ACqhTQi+gdijg+AgJhoQAfAJAhAIABjChQgrAIgkgDAg7CNIByjkAByhLIheDx");
	this.shape_41.setTransform(-4.8,-2.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCCCCC").s().p("ABjChIAAAAIABgCIBCjiIAEgQIAAAAIAAAAIgEAQIg0gIQgegFgdgHQghgIgggJQgngMgmgOIhggsQCjA+C+AdIAGgUIAIACIhMEUg");
	this.shape_42.setTransform(-4.8,-2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.1,1,1).p("AA3hXQAdAHAeAFQAZAEAbAEIAEgQIAAAAIAGgUIAIACIhMEUIgJgNQAAgCABgBIBCjiAi3iuIBgArQAmAPAnAMIhSCSQgZgjgVgtQAAgBgBgBQgag6gShMgAiJgnIAyhcAgpBjIAAAAAgpBjIAAAAQgcgYgXghAAbCPIABAAIgBgBQgkgQgggbIBgi6ABjCiQgmgFghgOIAAAAACqhTQi+gdijg+AgKhoQAgAJAhAIAByhLIhWDa");
	this.shape_43.setTransform(-4.8,-2.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CCCCCC").s().p("ABjChIABgCIBCjiIAEgQIAAAAIAAAAIgEAQIg0gIQgegFgdgHQghgIgggJQgngMgmgOIhggsQCjA+C+AdIAGgUIAIACIhMEUg");
	this.shape_44.setTransform(-4.8,-2.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.1,1,1).p("ACrhTIAFgUIAIACIhAEUIgLgNQABgCAAgBIA5jiIAEgQgABzhLQAaAEAaAEAA4hXQAdAHAeAFIhNDaIgBgBQglgQgfgbIgBAAAhUAqQgbgjgWgtQgBgBAAgBQgcg6gVhMQCkA+C+AdAiEgnIAuhcIhhgrAhWiDQAmAPAnAMQAgAJAhAIAgfBjIgBAAQgcgYgYghIBLiSAAmCPIAAAAABtCiQglgFghgOIgBAAAgfBjIBXi6");
	this.shape_45.setTransform(-5.3,-2.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0000CC").s().p("AgRBlQgcgXgZghIBLiSQAhAJAhAIIhXC6IgBgBIABABIgBAAg");
	this.shape_46.setTransform(-6.8,-2.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00CC00").s().p("Ag9AFIABAAIAuhbQAlAPAnALIhKCTQgbgkgWgug");
	this.shape_47.setTransform(-12.5,-6.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AAABDQgbg7gUhKIBfArIguBaIgCAAg");
	this.shape_48.setTransform(-18.8,-13.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("Ag+BkIgBAAIBMjaIA0AIIg5DiIgBADQgkgFghgOgAhABkIABAAIABAAIgCAAg");
	this.shape_49.setTransform(4.9,1.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6600CC").s().p("AgDBzQglgQgggcIBXi6QAdAHAdAFIhLDaIgBAAIABAAIgBABIAAgBg");
	this.shape_50.setTransform(-1.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_21},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_21},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_42},{t:this.shape_32},{t:this.shape_33},{t:this.shape_30},{t:this.shape_31},{t:this.shape_29},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_43}]},1).to({state:[{t:this.shape_9},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).wait(1));

	// Layer 4
	this.instance = new lib.staticwake("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(17.5,-2.6,0.648,1.154,0,0,0,3.1,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.6,scaleX:1.72,scaleY:1.72,y:-2.9},4).to({scaleX:1.34,scaleY:1.21,y:-3},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,-23,46.3,49);


(lib.animwindsurfer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgNg3QgFACgCAAQABgDADgDQgDAAABgFQABgDADgCQABgBABgGQgDgBABgDQAHAJAEgJQAFAIAKgGQAEgBADgBQgGAGAGAGQADADAEABQADAEgGgBQgBADAAABQAAABABABAACgkQgBAAAAAAQgBAAAAAAQgBgBgBAAQgGgCgCgFIAAAAQgBgBAAgCQADgDACgEQAGAFADgGQAAAHAHAFQAAgBABgBQABgDAEACIACAAQAAgBgBgBQACACABABAAJgoQAAgBABgBQAAAAAAgBIAAAAAgLgvQgCgEAAgEAgLgvQgBgEAAgEIgBAAAAIgNQgDACgFAAQgDgBgEAAQgGgBgEgBQgGAAgFgEQgGgGgHADQgCADgGAAQgCgEgCAAQgFAEAAgIQgEgEAGgFQgDgEADgEQAKgGACAIQADAGADAEQAFAEAKABQAJAAAJgFQABgBAEgCQAAgBACgBQABAAABAAQAAAAAAAAQADAAACgDIAAAAQAAgBAAAAIAAAAAAJgnIAAgBAAJgnIAAgBAAIgNQAEgCACgDAAAgiQAEACAEADAARgwQAAgCAAgDQADABAFADQgBgDgBgDQAIACAGABQADAFAAAHQAEAFABAHQAAAGABAIQABAHADAFQADAEADAGQABADgDADQAAAHgHAEQgFADgEAEQgDADgDADQgBABgCAAQgEABgDgBQAAAAgBAAQgJgFgGgKIgBAAQAIgJACgEQgDgGgBgFQADgIgGgFAAygCQgEAFgDAIQgFAFgIACQgIABgHgIAAWAnIgFAFQABgBAPAHQAPAIACADQADADAAAEQABACABABQAAADgEAEQgEABgKACQgKACAEgJQAKgDgCgIQgIgBgHgBQgJgBgGgGQgKgFAAgJQABgGAGgKAAmAgQALAEAHACQAIACgEAGQABAIgKAAQgEABgEgDQAGgBADgHQgQgBgHgE");
	this.shape.setTransform(3.7,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgHAVIgCgBQgJgEgGgKIAAAAIAJgMQAHAGAIAAQAHgCAFgFQADgHAFgGIAFALQABADgDACQAAAGgHAFIgJAHIgGAFIgBACIgFAAIgCAAg");
	this.shape_1.setTransform(6.8,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AAfA+QAKgEgCgIIgPgCQgJAAgGgHQgKgEAAgKQABgFAGgKQAGAKAJAEIABABIgFAEQABgBAPAIQAPAHACAEQADADAAAEIACADQAAADgEAEIgOACIgDABQgGAAADgHgAArAnQAGAAADgHQgQgBgHgEIADgCIAGgFIASAGQAIACgEAGQABAHgKABIgBAAQgDAAgEgDgAAPAAQgDgHgBgFQADgIgGgFQAEgCACgEQgCAEgEACQgDABgFAAIgHgBIgKgBQgGAAgFgEQgGgGgHACQgCAEgGAAQgCgEgCgBQgFAFAAgJQgEgEAGgFQgDgEADgDQAKgGACAIIAGAKQAFADAKABQAJAAAJgEIAFgDIACgCIgBgBIgBAAIgCgBQgGgBgCgFIAAgBIgBgCIAFgHQAGAFADgGQAAAGAHAGIABgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAAAAIADAAIAAAAIACABIgBgCIADACIgDgCIAAgBIAAgFIAIAEIgCgGIAOAEQADAFAAAGQAEAFABAIIABAOQABAGADAGQgEAGgDAHQgFAEgIACIgCABQgHAAgGgGgAAIgpIgIgFIAIAFgAAEgwIAAAAQADgBACgDIAAAAIAAAAIAAAAIAAAAIAAAAIABgCIAAgBIAAAAIAAAAIAAABIgBACIAAAAIAAAAQgCADgDABIAAAAIgCAAIACAAgAAJg0IAAAAIAAAAgAALg7IAAAAIAAgBIAFABIAAAAIgDAAIAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAgBgAAQg7IAAAAg");
	this.shape_2.setTransform(3.7,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("AAAAHQgCAGgHgFIgFAHIgBgJIAAABQgFACgDAAQABgEADgDQgCAAAAgEQABgCADgCQABgCABgGQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAHAJAFgJQAFAIAJgFIAHgDQgGAGAGAGQADADAEABQADADgGAAIAAAEIAAABIADAGIgJgEIABAFIAAABIAAACIgCgBIgFgBIAAAAIAAABIAAAAIAAABIgBADQgHgGAAgGg");
	this.shape_3.setTransform(4,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(9));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("ABKBXQAihmARhmIANgMQADBfgjBsIgpA3QgRAPgGgOIAagkQiUhig5iEQATAiAYAfQARAWATAWQARASASAQQABABAAAAQARAQASAQQATAQAWAQQAKAIAKAHQAJANgPgG");
	this.shape_4.setTransform(-1.1,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("ABjByQiVhjg5iCQATAhAYAfQARAXAUAVQAQARASASIAAABIAkAfQAUARAVAPIAVAPQAFAJgEAAIgHgCg");
	this.shape_5.setTransform(-4.2,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC3333").s().p("AgvB+IAagkQAPAHgJgOQAhhmARhlIANgMQADBegjBtIgoA2QgJAIgGAAQgFAAgDgHg");
	this.shape_6.setTransform(7.9,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(9));

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("ABwgzIADgMIAFABIgqCqIgGgIQAAgBAAAAIAliMIADgKgABLguQARADARACAAlg2QATAFATADIgtB4AhOgnQgJgQgHgLQgHgKgSgfQBrAmB8ASAhOgnIAWgqIg/gaAgFhAIgjBAQgRgKgVgdAgFhAQgagIgZgJAAlg2IgvBeAgFhAQAUAGAWAE");
	this.shape_7.setTransform(-2.9,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AA4AyIgpgaIgoggIAAgBIgego");
	this.shape_8.setTransform(-1.4,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("ABHBkIABgBIAliMIgigFIgmgIIgqgKQgagIgZgJIg/gaQBrAmB8ASIAAAAIgDAKIADgKIAAAAIADgMIAFABIgqCqg");
	this.shape_9.setTransform(-2.9,-0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000CC").s().p("AgmANIAjhBIAqALIgvBeg");
	this.shape_10.setTransform(-3.1,-2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CC00").s().p("AgkAAIAXgoQAYAJAaAHIgjBBQgQgLgWgeg");
	this.shape_11.setTransform(-7.2,-5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgGAIIgZgpIA/AbIgXAoIgPgag");
	this.shape_12.setTransform(-11.8,-8.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgnAwIAsh5IAjAFIglCMIgBACg");
	this.shape_13.setTransform(4.1,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6600CC").s().p("AgnAfIAAAAIAAAAIgGALIAGgLIAuheIAnAHIgtB4g");
	this.shape_14.setTransform(0,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("ABvgzIAEgMIAFABIgxCqIgGgIQAAgBAAAAIAsiMIACgKgABKguQARADASACAAkg2QATAFATADIg2CBAhUghQgTghgQgpIA/AagAg4hRQAYAJAaAIQAUAGAWAEABBBkQgXgFgVgLIAAAAIgBgBQgVgMgUgTQgRgQgPgVQgQgVgPgbAg1APIAvhPAh3hrQBqAmB8ASAgVA0IA5hq");
	this.shape_15.setTransform(-2.6,-0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000CC").s().p("AgsAWIAuhQIArALIg5BpQgQgPgQgVg");
	this.shape_16.setTransform(-3.5,-1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC00").s().p("AgmAAIAcgvQAYAJAZAHIguBPQgQgVgPgbg");
	this.shape_17.setTransform(-7.2,-4.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AgegkIA+AbIgcAuQgSghgQgog");
	this.shape_18.setTransform(-11.4,-8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgrA6IAAgBIAAAAIA1iCIAiAFIgrCMIgBACQgVgFgWgLg");
	this.shape_19.setTransform(3.9,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6600CC").s().p("AgvAlIA5hpIAmAHIg1CCQgWgMgUgUg");
	this.shape_20.setTransform(0,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("ABBBkIAAgBIAriMIgigFIgmgIIgqgKQgagIgYgJIg/gaQBqAmB8ASIAAAAIgDAKIADgKIAAAAIAEgMIAFABIgxCqg");
	this.shape_21.setTransform(-2.6,-0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("AAkg2QATAFATADQARADASACIACgKIAAAAIAEgMIAFABIgxCqIgGgIQAAgBAAAAIAsiMAh3hrIA/AaQAYAJAaAIIg2BaQgQgWgOgbQAAgBAAAAQgRglgMgugAhagYIAig5AgaA9IgBABAgaA9IgBAAQgSgPgPgUAASBZIAAgBIAAAAQgYgKgUgRIA+hzABBBkQgZgDgVgIIgBgBABvgzQh8gShqgmAgGhAQAUAGAWAEABKguIg4CG");
	this.shape_22.setTransform(-2.6,-0.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000CC").s().p("AgOA/QgSgPgPgUIA0hbIArALIg+BzIAAAAIAAAAIAAAAg");
	this.shape_23.setTransform(-3.8,-1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00CC00").s().p("AgpADIAAAAIAig4QAXAJAaAHIg1BbQgQgWgOgdg");
	this.shape_24.setTransform(-7.5,-3.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AgCApQgRgkgLguIA+AbIghA4IgBgBg");
	this.shape_25.setTransform(-11.4,-7.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6600CC").s().p("AgFBHIABAAIgBAAQgYgKgVgRIA+hzIAnAIIg3CGIgBABIAAgBg");
	this.shape_26.setTransform(-0.2,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgsA+IAAAAIA3iHIAiAFIgrCMIgBACQgXgDgWgJgAgsA+IAAAAIAAAAIAAAAg");
	this.shape_27.setTransform(3.7,1.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("ABBBkIAAgBIAriMIADgKIAAAAIAAAAIgDAKIgigFIgmgIIgqgKQgagIgYgJIg/gaQBqAmB8ASIAEgMIAFABIgxCqg");
	this.shape_28.setTransform(-2.6,-0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.1,1,1).p("AAkg2QATAFATADQARADASACIACgKIAAAAIAEgMIAFABIgxCqIgGgIIAAAAQAAgBAAAAIAsiMAg4hRQAZAJAZAIIhGB1QgRgYgLgiIAwhMIg/gaQAAAAAAAAQAAACAAABQADA5AMAqAgmBYQgWgNgQgWAANBnQgcgCgXgNIBKiOQgWgEgUgGABKguIg9CVABBBkQgcAFgYgCAh3hrQBrAmB7AS");
	this.shape_29.setTransform(-2.6,-0.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000CC").s().p("Ag3AqIBFh2IAqALIhJCNQgWgMgQgWg");
	this.shape_30.setTransform(-4.6,0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CC00").s().p("AgwAIIAwhKQAXAJAaAHIhFB1QgRgYgLgjg");
	this.shape_31.setTransform(-8.2,-2.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AgfgvIABgDIAAAAIA+AbIgvBKQgNgpgDg5g");
	this.shape_32.setTransform(-11.5,-6.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6600CC").s().p("Ag4A/IBKiNIAnAHIg9CWQgdgDgXgNg");
	this.shape_33.setTransform(-0.8,1.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgvBLIA9iVIAiAFIgrCMIgBABQgTADgSAAIgOAAg");
	this.shape_34.setTransform(3.5,1.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CCCCCC").s().p("ABBBkIAAAAIAAgBIAriMIADgKIAAAAIAAAAIgDAKIgigFIgmgIIgqgKQgagIgYgJIg/gaQBqAmB8ASIAEgMIAFABIgxCqg");
	this.shape_35.setTransform(-2.6,-0.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.1,1,1).p("ABxg5IAEgMIAFABIgxCqIgHgIQABgBAAAAIAriMIADgKgABMg0QARADARACAAmg8QATAFATADIhBCjQgBAAgBAAQglAHgZgJQgXgKgOgSQgTgZgIgrQgIgyAIhMIA/AaQAYAKAaAHQAUAGAWAEgAh1ANIA/hkAhaBRIBWiXAh1hxQBqAmB8ASABCBeQgeAMgZAFAg1BtIBbip");
	this.shape_36.setTransform(-2.8,-0.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000CC").s().p("Ag/A+IBViXIAqALIhaCoQgXgKgOgSg");
	this.shape_37.setTransform(-5.4,1.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00CC00").s().p("Ag3AQIA9hjQAZAJAZAHIhVCXQgTgZgHgrg");
	this.shape_38.setTransform(-8.9,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF00").s().p("Agdg/IA+AbIg9BkQgIgzAHhMg");
	this.shape_39.setTransform(-11.6,-5.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AAQhRIAiAFIgrCMIgBABQgdANgaAEg");
	this.shape_40.setTransform(3.3,2.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6600CC").s().p("AhABSIBaioIAnAHIhBCjIgBABQgRACgNAAQgTAAgOgFg");
	this.shape_41.setTransform(-1.6,2.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.1,1,1).p("ABvgzIAEgMIAFABIgxCqIgGgIIAAAAQAAgBAAAAIAsiMIACgKgABKguQARADASACAAkg2QATAFATADIg9CVQgcgCgXgNQgWgNgQgWQgRgYgLgiQgMgqgDg5QAAgBAAgCQAAAAAAAAQBrAmB7ASAhogFIAwhMIg/gaAg4hRQAZAJAZAIQAUAGAWAEAhMA1IBGh1ABBBkQgcAFgYgCAgmBYIBKiO");
	this.shape_42.setTransform(-2.6,-0.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CCCCCC").s().p("ABBBkIAAAAIAAgBIAriMIgigFIgmgIIgqgKQgagIgYgJIg/gaQBqAmB8ASIAAAAIgDAKIADgKIAAAAIAEgMIAFABIgxCqg");
	this.shape_43.setTransform(-2.6,-0.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.1,1,1).p("ABIBkIAGAIIAqiqIgFgBIgDAMIAAAAIgDAKIglCMQAAAAAAABgABLguQARADARACAAlg2QATAFATADIgyCGIABABQAVAIAZADAhWgYIAeg5Ig/gaQANAuATAlQAAAAAAABQAPAbARAWQAQAUATAPIAAAAIA5hzAg4hRQAZAJAaAIAgUA+IAAgBAAZBZIAAgBIgBAAQgYgKgUgRAg3AaIAyhaQAUAGAWAEABwgzQh8gShrgm");
	this.shape_44.setTransform(-2.9,-0.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0000CC").s().p("AgLA/IABAAIgBAAQgSgPgQgUIAwhbIArALIg4BzIgBAAg");
	this.shape_45.setTransform(-3.9,-1.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00CC00").s().p("AgoADIABAAIAeg4QAYAJAaAHIgxBbQgRgWgPgdg");
	this.shape_46.setTransform(-7.6,-3.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF00").s().p("AAAApQgRgkgOguIA/AbIgfA4IgBgBg");
	this.shape_47.setTransform(-11.8,-7.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgpA+IAAAAIAAAAIAAAAIAAAAIAxiHIAiAFIglCMIgBACQgXgDgWgJg");
	this.shape_48.setTransform(3.8,1.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6600CC").s().p("AgCBHQgYgKgVgRIA5hzIAmAIIgxCGIgBAAIABAAIAAABIgBgBg");
	this.shape_49.setTransform(-0.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_21},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_42}]},1).to({state:[{t:this.shape_28},{t:this.shape_26},{t:this.shape_27},{t:this.shape_24},{t:this.shape_25},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_9},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).wait(1));

	// Layer 4
	this.instance = new lib.staticwake("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(11.4,-2,0.376,0.67,0,0,0,3.1,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.6,scaleX:1,scaleY:1,y:-2.2},4).to({scaleX:0.78,scaleY:0.7},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-14.2,30.2,30.9);


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
		var bgm = createjs.Sound.play('bgmComS',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
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
				bgm.volume += 0.05;
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
		
		 window.open ("compSen_Scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("compSen_Scene1.html","_self");
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


(lib.scene2sharkchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{startAgain:0});

	// timeline functions:
	this.frame_159 = function() {
		/* gotoAndPlay("startAgain");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(159).call(this.frame_159).wait(1));

	// middle
	this.instance = new lib.animwindsurfer2();
	this.instance.parent = this;
	this.instance.setTransform(-266.5,-216.9,0.799,0.799);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({scaleX:0.84,scaleY:0.84,rotation:9.3,x:-266.3,y:-206.7},14).to({scaleX:0.94,scaleY:0.94,rotation:30.6,x:-265.8,y:-183.7},66).wait(1));

	// shark fin
	this.instance_1 = new lib.animsharkfin1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-224.2,-282.5,1.031,1.031);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.17,scaleY:1.17,x:-327.4,y:-268.2},35).to({scaleX:1.18,scaleY:1.18,skewY:180,x:-325.3,y:-266.8},1).to({scaleX:1.43,scaleY:1.43,x:-247.8,y:-246.5},42).wait(1).to({x:-233.3,y:-225.8},14).wait(1).to({skewY:0},0).to({x:-239.4,y:-204},65).wait(1));

	// far away
	this.instance_2 = new lib.animwindsurfer1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-294.4,-253.6,0.999,1,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,rotation:18.3,guide:{path:[-294.2,-253.6,-294.2,-253.5,-294.2,-253.4,-291.1,-247.9,-286.9,-243.3,-281.4,-237,-275.4,-231,-274.6,-230.3,-273.9,-229.5]}},78).to({_off:true},1).wait(81));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AAqAXIgCgHIAFAAIAEAGIgBAGQgEgCgCgDgAgwgbIAiAAQACAKAFAIQgagEgPgOg");
	this.shape.setTransform(-343,-213);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AkRElQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgEACgIIACgDIADABQAEAIAGAHIgHACIgEABIgDgBgAkpENQgEgBgCgCQgCgEACgHQAGAIAJAFIgIABIgBAAgAk7EFQAFgEgBAFIgEgBgAEpkhIADgEIAOABQADADgBAEIgTgEgAEYkiIgMABQAIgIAEAHg");
	this.shape_1.setTransform(-314.9,-262.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBABg");
	this.shape_2.setTransform(-380.7,-310.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgHAQIgBADIgBAAIgCAAIAEgDgAAJgPIAAgDIACACIABACIgDgBg");
	this.shape_3.setTransform(-174.4,-207.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CC00").s().p("A8eMQIAA3tIAPAAQCZAACXgNIAAgEIAAAAIAAgEIAjgBQApAdA8AKIADAAQAHADAOgBIADAAQAtgCArgDIADAAIApAAIACAAQA/AEArAYIACABQALgFAPAAIADAAIAaAAIADAAIAkAEIACABQAIAEAOgBIACAAQATAHAPALIACABQAOgDAMgGIAAgBQAogBAaAPQAJAFARgCQAJAEAPgCIACAAIAWAAIACAAIACAAQBPAIAuAoIgCAAQgcAGgeADIgCAAQgJAAACAKIgBADQgJAdgiAEIAAADQACANgCANQgEAJgKAGQgXANgXAPQAHAhAYAQQAOAJAQADQA2AMAlAZQgmAshOAOQgIABgGAAQgxgBgNAfQARAgAhARIACABIAAABQBgASBLAnIACAAIgHAIIAJACIAFABIAIAEQABADAEAAQANAIAJANQAAABAAAAQABABAAAAQAAABABAAQAAAAAAABQAGAIAEAKIABAEIAKgKIAAADQAOAUAIAaIgBACQgMATgJAWQgHAEgKADQgeAKAEAWIABAAIgvAgIACABQAcALAeALQAFAFAIAEQAIAFAIACQgSATgcAIQgiAIgSAYIAAACQATARARAUIgDAAIg4AoIgjAbIAAACQgBAJALAIQAEAFgDADQgOAVgUAQQgVASgcANIgPAFIgJADIgKACQghACgbAHIgBAAQgkAJgbATIAAACQADAKgPAJIgBACIgGAJQgSAagdAWIAAAAIgDgCIgBAAIgCABIAAABIABAFQgCADAAADIgBABIgCACIAAACIAAABIAAAAIABAAIgBABIAAABIAAAAIAAACIABAAIABABIACAAIAEAAIATABIACABIADAAIACADQADADAAAEQAAAEgBADIgBAAQgIAGgLgBQgKgCgJAEIgFABQgFABgCADIgJgBIgDgBQgTAOgRARIgQARIgDADIgHADIgBACQAIAAAIACQAGACACAHIABAGIAAAAQgLAMgRAEIgIAFIgBAAIAAAAIgBAAIAAACIAAABQgdAPgXAXQgEACgCAEQgOAHgPAEIgDABQgVACgVADIgLAEIgNAHQgKAGgGAJIABABIgGACIgHAIQgFAFgIABIgFgBQgjAQgpAIIgVAFIgBAAIgEAVIgWANIgWgBQgDABgDAAQhOgJhUABQhDAWhPgDQgCAAgBAEgAcdLYIgDgEQg1gBg2gEIgOAAQhlgDhigRIAAAAIgCABQgUgLgcgFQgdgFgUgOIAAgCIghAAIgDAAQhKAFgigiIgCAAIhGgHIAAgCIgagBIgDAAIgrAAIAAgBQgMgCgMAAIAAADIgCAAIgKAAIgRAAIAAgCIgFgDQgPgLgLgPIAAgCQgEgKACgPIgDgGIgBgBIgJgIQgFgDgGgCQgwgKgigZIABgBQAYgeAEgwQgIgQgMgMQgjgfgYgqIAAgBQAPAHgPgNIgCgBIgBgCQAegjAjgdQADgDAAgHQgJgMgMgKIgGgEIgHgFIgCAAIAEgDIADgCQAZgPAhgGQAegGAUgNIACgCIAJgHQAHgCAFgEIAUgIIAdgKQABgYAXgLQABgFgCgHIgCAAIAAgCIgHgRIAAgDQgBgLgEgKIgBgEIgBgDQgDgegLgRIAAgCQAfghAwgPIAAgCIATgeIACAAQAtgLAbgdIAAgCQgRgngcgbIgCAAQgkgPgKgfQgGgFALAAQAhAAATgQQAFgIgJgHQgvgghCgMQgJgBgHgDQgvgWgzgRQhTgchIgjQBQgiBkANQASACAQgEQAOgDAMgGIAYgBIAAgBIACAAQA0AAAUggIAAgCQgSgmgsgOIgMgDIAOgCQBigNBqADIADAAIATgBIAAgCIAuAAIACAAIAVgBIABgBQAigEAegHIADAAQAJgBAHgDIABgCQAVgSgHgsIAAgDQAlgaA0gNIAAgBQAMgnA3ADIACAAQAMgGAJgHIABgBQAJgTASgLQA3gPA7AEIAAgDIACAAIAAXogAv6H7IABAAIgKABIAJgBgAv8HRIABgCIABAAIgCAIIAAgGg");
	this.shape_4.setTransform(-283.2,-218.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC9900").s().p("A8ePSIAAo+IAWAAQA6AEA5AAIAcgCQA4gEA1ALQAwAJAsgXIAAAAIAIgCQAPgHAEgUIABgGIABAAIAQgFQAzgQAygRIAIgDIACAAIAAAAIAAAAIABABIABAEIAAAAIABAFIABAIIAAABIABALIAAABIAAADIAAAfIAAACQAAAKACAJQAEAYAAAcIAAAKIAAAAIAAADQgCApgLAkQAQAxALA2IACAAQAFgUgJgeQgHgXgIgXQAMgkABgkIAAgTIAAgBIAAgFIAAgCIgBgCIAAgHQgCgSgFgSIgBgCQAFgMgCgRIAAgCIAAgDIgBgJIgCgPIAAgDIgBgBIAAgBIgBgJIAAAAIAAgCIAAAAIgBgGIAAgFIAAAAIAAgBIAAAAIgBgDIAAAAIAAgHIACAAIACAAIABAGIAAABIAAABIABABIAAAAIAAAAIABgBIAAAAIABgDIAAAAIAAAAIABgBIAAgCIABAAIAAgCIABgBIAAgFIAAgJIAFgEIAAAHIABAGIAAADIABADIABAAIAAABIAAAAIAAACIAAAAIAAABIAAAAIABABIAAAAIAAAAIACABIACABIABAAIAAAAIAAgCIAAAAIAAgBIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIgBgDIgBgEIAAgBIAAAAIgBgCIAAgBIAAgBIAAgBIgBAAIgBAAIAGgEIAGAAIAAAAIABAAIAAAAIABAAIgBAAIgBABIAAACIADAAIAAAAIABgBIADAAIABgBIAAAAIAAABIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAJgBIAAACIgBAAIAAAAIgBAAIgBAAIgBAAIgBAAIAAAAIgDABIgBAAIAAABIAAABIgIABIAAABIAAAAIABAAIAAABIAAABIAAAAIAAABIAAAAIAAABIAAAAIAAADIAAABIACAAIAAABIAAAAIAAABIAAAAIAAABIAAACIAAABIAAACIAAAAIAAADIAAAAIAAABIABABIAAAAIAAABIAAABIAAAAIABABIAAAAIAAABIABABIABAAIAAAAIAAgBIABAAIAAAAIABAAIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCIABgBIAAAAIgDAAIABAAIACAAIAAgEIgBgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAgCIAAgBIAAAAIABAAIAFAAIABAAIABABIAAABIABgCIgBAAIABAAIAAAAIABAAIAAACIAAAAIAAABIAAAAIAAACIAGgCIABAAIAAgBIAAAAIAAABIAAgCIAAAAIAFAAIAAAAIABAAIAEAAIAAAAIAAABIAAADIAAAAIAAAEIABABIAAABIAAAAIAAAAIABAAIAAAAIAAAAIAAABIABAAIAAABIAAAAIAAABIAAAAIAAAAIAAAAIAAABIABAAIAAAAIAAABIAAAAIAAAAIAAAAIAAABIAAAAIABABIAAAAIAAAAIAAAAIAAABIAAAAIACABIAAAAIABAAIAAAAIAAgBIAAAAIAAgBIABAAIAAAAIAAgBIAAgBIAAgBIAAgFIAAAAIAAgBIABAAIAAgCIAAAAIAAgCIAAAAIAAgEIAAAAIAAgBIABAAIAAAAIgBAAIABABIABAAIAAAAIABAAIAAAAIACAAIABAAIgBAAIAFAAIAAgBIgDAAIAAAAIgBAAIgDAAIAAAAIgBAAIgBAAIgLAAIACAAIACAAIABgBIABAAIACAAIABAAIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIgGACIAGgDIgBAAIAAAAIAAAAIAAgBIAAAAIAAgBIgBAAIAAAAIAAgBIAAAAIAAgBIAAAAIgBgCIgBgBIALgDQACADACADIAAAAIAAABIAAABIAAAAIABABIAAAAIAAAAIAAABIAAAAIAAABIAFAAIAAgEIAAgBIABABIAAAAIAAABIAAABIAAAAIABABIAAAAIAAAAIAAAAIAAABIAAAAIABAAIAAABIAAAAIAAAAIAAABIAAAAIAAAAIAAABIAAAAIABAAIAAABIAAAAIgCAAIAAAAIACAAIAAAAIAAABIgCAAIAAAAIACAAIAAAAIAAAAIABABIAAAAIAAABIAAABIABABIAAABIAAAAIAAAAIAAABIABABIAAAAIAAABIABABIAAAAIAAABIAAABIAAAAIAAABIABABIAAABIAAAAIAAABIAAAAIAAABIAAAAIABAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIABAAIAAABIAAABIAAABIAAAAIAAACIABAAIAAABIAAAAIAAACIAAAAIAAAAIAAABIAAABIABABIAAABIAAABIAAABIAAAAIAAACIAAABIABABIAAAAIAAACIAAACIAAABIAAACIAAABIABACIAAAEIAAABIAAABIAAAAIAAABIAAACIAAAEIAAAFIAAALIAAABIAAABIgDAeIgBADIgDAaIAAABIAAAEIgBAMIAEAEIAEAFIAEAEIABABIAAAAIAFAHIABABIACAJIAAACIAAAAQAEAiACAkIAAADIAUAVIABAAQAIAqgDA0IAAACQAMARAIAVIACABIgEgbIgBAAIAAgCIAAgiIAAgCQAEAAgBgFIgBgCIACgBQACgOgEgJQACgJAAgDIgBgLIgBgDIgBgEIgBgCIAAAAIgCgBIgBAAIgBAAIAAAAIgCABIgBAAIAAAAIAAADIAAACIgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgCgBIgBgCIgDgEIgBgBIAAAAIgBgBIAAAAIAAgBIgBAAIAAgBIgDgEIgDgFIAAAAIgHgMIgEgHIAAgCIAAgBIAAgXIAAgDIAAgFIAAgCIAAgLQAAgFgCgDIAAgBIAAgBIgCgFIAAgBIAAAAIAAgBIgBgBIAAgBIAAAAIgBgCIgBgBIgBgCIAAAAIgHgKIAAAAIgBgBIgCgFQgFgLgBgPQAEgNACgQIAAgBIABgLIAAgCIABAAIABgPIAAgTIAAgCIAAgCIAAAAIgBgHIAAgBIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgBIAAgEIAAAAIAAgCIgBgBIAAgBIAAgBIAAgDIAAgBIAAgCIAAgBIAAgCIgBAAIAAgBIAAgBIAAgCIAAAAIAAgBIAAAAIAAgBIAAAAIAAgGIAAgBIAAgBIAAABIAAAAIABABIAAAAIgBAAIAAABIABAAIAAAAIAAAAIABABIAAAAIAAABIAAAAIAAABIAAAAIABAAIAAABIAAAAIAAABIAAABIAAACIAAAAIABAAIgBAAIAAAEIACAAIAAAAIAAABIAAABIAAABIAAAAIAAAAIAAACIAAACIABABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIABABIAAAAIAAABIAAABIAAABIABABIAAAAIAAABIAAAAIAAABIAAABIABACIAAAAIABAFIABADIAAABIABAAIAAABIAAADIAAAAIABABQACAHABgIIAAAAIAAgGIgBgJIgBAAIAAgBIAAgBIAAAAIgBgCIAAAAIAAgBIAAgBIgBgBIAAgBIgBgGIAAgBIgBgCIAAgBIAAAAIAAgBIAAgCIgBgBIAAAAIAAgDIAAgBIAAAAIAAAAIAAgCIAAgBIgBgBIAAgCIAAAAIAAgDIAAgBIAAAAIAAgBIAAgBIgBgCIAAgBIAAAAIAAgCIAAgBIAAgEIAAAAIAAgBIgBAAIAAAAIABAAIAAgEIABAAIABAAIABgBIACAAIAAgIIgggDIAmgcIAAADIABgBIAFgCIACACQADgHAFgGIAGgEQAGgEAEgGIAJgDQALgDAHgHIAAAEIgFAQIAAABQAIAEACAMIABAIIACgHQACgJAAgLIAAgCIAAgBIAAgLIAAgKIgBgCIAAgCIAAgBIAAgFIAAgLIABAAIgBgGIgLgCIAFgFIApgiIACgCIAEABQAEAOgCAOIAIgBIAAgWIAAgCQgDgCAAgFIAQgEIAKgBIAMAAIgEAiIACAFQABAGgGACIgDABIgBAEQATgDAAgUIAAgDIAAgDIAAgCIAAgRIAAgCQAHgQAKgNIgPgEIAAgBIgBgBQgMgEgMABIACgIQAFgBAHgIIAngpIASgRQACAGABAIIACANIAAAFIAAATIAAACIAAAAIAAACQAEAGACAIIACAFIABAAIAAAKQgCAeAGAYIACAIQAEAQAIAMIABABQABgNgGgPIgDgIIgBAAIAAgBIAAgXIAAgCIAAgDIAAgMIAAgCIAAgDIAAgCIgBgHQgBgKgDgIQgDgIgEgFIAAgDIAAgOIAAgMIAAgDIAAgJIAAgWIgBgCQgBgFgFgBQAKgEAJgFIAJgHIAAgBIAKgCIA1gLIA4gOQATgGAPgKIAUgPQAPgNAOgQQAKAvAUAlIABAAQABAVgFAMIgBACIgCAAIABATIABABQANAfgCAwIABAAQALAAgBAVIAAADIAGAJIADAFQARAgACA0IAAAKIAAAAIAAAbIAAAAIAAABIAAABIgBAEIAAAHIAAAEIAAABIAAABIAAACIAAABIAAAFIAAAAIAAADIAAABIAAALIAAAAIAAACIABADIAAAFQACAQADAOIACAHIAAAAQADAMAFAKIAAABIgEADIgBABIgBABIgVASIAAAAIgCABIgDADIgBABIgBAAIgCACIgBAAIgEAEIgEADQgFADgCAFIgBABIgCAJIgBAAQgBgIgDgEIAAgCQABgIgBgEIgBgCIgBgDIAAgBIgBgBQgDgMgBgOIAAgBIAAgCIAAgPQAAgOgCgMIgBgCQgDgNgFgLIAAAAIAAgBIgBgCIgBADIAAAAQAAAMACAKIABACIAAACIABAlIAAAHIABACIABAAIAEAbIACAIIAHAWIAAACIAAAAIABACIADgBQAEALgFAHQgSAZgcAPIgDACIgFACIgGACIgBAAIAAABIAAAAIgBAAIgBAAIgDABIgFACIAAAAIgBAAIAAAAIgDABIAAAAIgBABIgKgBIAAgBIAAAAIgBgDIAAAAIAAgCIAAAAIgBgBIAAAAIAAgCIgBgBIAAAAIAAgBIAAgBIgBgCIAAAAIgDgGIgCgFIgDgFIgDgFIAAAAQgGgKgIgIIgEgQIAAgPIABgSIACgPIAAgLQABgVgGgSIgBgDIAAAAIgBAAIAAAAIgBADIgCAMIgDAVIAAAHIAAAOIAAAOIAAACIAAAAIAAAGIAAACIAAADIAAAEIAAABIAAACIAAADIAAAIIAAALIAAACIAAAAIAAABIABAAIAAAAIABABIAAABIABAAIAAABIACABIABABIAAAAIAGAGIACABIABABIACAAIABAEIACAFIABACIAAABIAAAAIABADIABADIAAABIABABIAAABIAAABIgBAAIAAgBIgBgBIAAgBIAAAAIAAgBIgBgBIgCgBIgCgBIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIABACIAAAAIAAABIAAACIABAEIAAABIAAABIABACIAAAAIAAABIAAAAIAAACIABADIAAAAIAAABIACAFIACAAIABAGIAAAAIAAAIIAAAEIABAEIAAAAIAAAGIAAABIAAAKIAAAAIABACIAAACIAAAEIAAAAIAAACIAAAAIAAAHIAAACIAAALIABAUIgCABQgPARgTANIgDAAIgQAAIgBACQgmAQgfAWIgBAAIAAABIgDACIgBAAIAAAAIgBABIgGAFIgCACIgCAAIAAgCIgCgIIAAgBIgCgHIgBgBIAAgBQgGgUgJgPIAAgDQAFgogLgZQgDgIgFgGIAAAAIgCgRIAAgBIAAAAQgFgngOgbQgTgkAKg1QAEgbgGgOIgBABIgGAuIAAABIgHAwQAKAdACAkIAAADIAAANIAAABIAAAKIABAMIAAABIAAAAIAAAEIAAAGIAAABIABAAIADALIAAABIABACIACAIIABABIACAFIABAAIgBAMIABAFIABADIABACIAAACIAAAHIAAABIACAOIABAAIABAGIABABIABAEIABABQAAABAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAAAAIAAgCIAAgEIAAgIIAAgCIAAgDIAAgLQgBgFgCgDIAAgCQgDgNgCgOIAAgCIgBgKIAAAAIgDgHIgBgBQgDgCABgHIAAgCIAAgmIAAgCIAAgBQACgLgEgGIAAgCIAAgCIAHAWQAGARAEATIAAABIADAQIAAACQAEAWACAZIAAADIAAADIABAQIACAAIgBALIAAAAIABAMIAAAAIAAABIAAAAQACAJAEAGIABACIAEAKIAHAVIADAMIAAACIABAEQABABAAABQAAAAABABQAAAAAAAAQAAABABAAIAEAKQgZAigjAXIgEgFIgIgmIgDgLIgBgGIgMgkIgGgQIgGgPIgEgKIgBgBIgCgFIgEgIIAAgBIAAgCIAAgRIgCAAQgDgFgBgGIAAAAIgBgFIAAgDIAAgCQABgHgBgEQgCgEgDgCIAAgCIAAgDIAAgCIAAgEIgBgCIAAAAIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIgBgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAgBIAAAAIgBgBQgBgFgEgDIgBgCIAAAAIgDgDIABADIAAAAIAAABIAAABIAAAAIADALIAAABIAAABIAAABIABABIAAAAIAAABIAAAAIAAACIAAABIAAABIAAACIAAAAIAAAEIABACIAAABIAAAEIAAAAIABAAIAAACIABARIAAABIACAAIABAGIAAAAIACAKIABAAQADAQAEAPIABAFIABACIADAIIAAACQAJANAGAQQAGAQADASIAAACQABAJADAIIABAAIAAACIARA/IgBACQgXAdghAUIgNgBIgNAFQgWAHgIAUIgLAEQg/AWgtAnQAAABAAAAQABABAAAAQABABAAAAQABAAAAAAQAHACAIAAIAAASgAwTKdIAAgDIgBgDIAAgBIAAgBIgCgHIAAgCIAAgCIgBgFIAAAAIgHgeIAAgBIgEgRIAAAAIgDgJIgBgHIgBgCIAAAAIAAgBIgBgBIAAgCIAAgBIAAgBIgBAAIgCgGIAAgCIAAgBIAAAAIAAgBIAAgCIAAAAIAAgBIAAgBIgBgBIgEAAIAAACIAAABIAAABIAAACIAAACIAAAAIAAABIABACIAAAAIAAABIAAAFIAAABIABABIABAAIAAACIAAABIAAAJIAAADIgDAAIAAgDIgDgHIAAgBIgBgBIAAAAIAAgBIAAAAIAAgBIAAAAIgBgBIgCgEIAAgBIAAgBIAAgBIgBAAIAAgBIAAAAIgBgCIAAgBIAAAAIAAgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAAAIAAgBIgBgCIgCgEIAAgBIgDgFIAAgBIgBgBIAAAAIAAgBIAAAAIgBgBIgBgEIgGgNIAAAFIAAACIgBACIgBADIgBgCIgMgUIAAAAIAAAAIgBgBIgHgLIgBgCIAAABIAAABIAAAAIABACIAAABIABADIABACIABACIAAAAIABADIAAAAIAFANIAAABIACAGIABAEIABAAIAAACIABACIABACIAAABIAAABIABAAIAAABIABAEIAAABIABAAIAAACIACAEIAAAAIAAABIAAABIAAAAIAAAAIABABIAAAAIAAACIAAAAIABABIAAAAIAAABIABABIAAADIAAADIAAAAIAAACIAAACIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABACIAAABIAAABIAAACIABAAIAAABQAAABABAAQAAABABAAQAAAAABAAQABgBABAAIAAgBIAAgBIAAgCIAAAAIABgGIAAAAIAAgBIAAgBIAAAAIAAgBIgBgCIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIgBgBIgBgFIAAgBIAAgBIAAgBIgBgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgCIgCgHIAAgCIAAAAIADAAIADAJIABADIAAABIAAAAIABABIAAAAIAAABIAAABIABABIAAABIAAAAIABACIABAEIAAAAIAAAAIAAABIAAAAIABAAIAAABIAAABIAAABIABACIAAAAIAAABIAAAAIABABIAAABIAAAAIAAABIAAABIADAKIALAmIABABQAEgDgGgRIAAgCIAAgCIAAgOIAAgBIACAAIAAACIAAABIABAEQAGAYAIAWIACAGIABACIAGAOIAAAAgAx4HsIAAABIAAAAIABADIAAAAIAAAEIAAABIAAABIAAABIAAABIABAAIAAABIABAFIAAABIAAABIABADIABABIAAABIAAABIAEAJIABAAIABACIACAHIAAAAIAAABIABABIAAABIACAFIACAEIABAEIACAEIAAAAIAAABIABAAIAAABIABACIAAABIAAAAIAAABIABABIACAEIAAABIAAAAIABABIgBgBIAAgCIAAgFIAAgBIgBgCIAAAAIAAgDIAAAAIAAgBIgBgCIAAgBIgBgCIAAAAIAAgBIAAgBIAAgBIgCgFIAAAAIAAgBIgBgDIAAgBIgBAAIgFgMIAAgBIgCgBIgDgGIAAgBIAAgBIgBgEIAAAAIAAgCIAAgBIAAAAIAAgCIgBgBIAAgBIAAAAIAAgDIgBgDIgBgCIAAgBIgCgCIgDgDIAAADgAwSIbIACAAIAAACIAAAAIAAACIABAGIAAAAIABABIAAAAIACgGIAAgBIAAgCIAAAAIAAgCIABgMQgBgGgCgEIAAgCIgBgBIgEgBIABAagA1NIIIAAACQAAAKACAIIAEAIIABABIABgFIABgCQAEgTgJgWIgCAAIgCAAIAAATgAtkH/IAAACIAAACIAAAAIACAYIABAAIACABIAAgBIABgEQACgIgBgGIgCgGIAAAAIAAgBIAAAAIgCgCIAAgBIgDgDIAAADgA1yH+IABAAIAAADQgBAQAIAIIABgDQgBgQADgSIAAgDIAAgBQADgOgDgFQAAgBAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQgCAAgEADIAAAMIAAACIgDAAQAAAKACAJgAtbHtIABAAIAAAIIAAADIAAABIABADIAAABIAAAAIAAABIAAABIAAABIABAAIAAAAIAAABIAAAAQACAFADgDIABgBIAAgCIAAgBIAAgCIAAAAIAAgBIgBAAIAAAAIAAgBIAAAAIAAgBIgBgCIAAgBIAAgDIgBgBIAAgCIAAgGIAAgCIAAgHIAAgBIAAgBIAAgBIAAAAIgBgBIAAgCIAAAAIgCgEIAAgCIgCgBIAAADIAAACIgCAAQgBAKACAJgAtTGqIABAMIACAAQgCAHADABIABACIABATIABAAIAAACIAAADIAAABIAAAAIAAACIAAABIAAAEIAAABIAAADIAAAAIAAABIAAAFIAAABIAAAAIABACIAAAGIAAADIAAAAIAAABIAAABIAAAAIABABIABAAIAAACIAAAAIAAAAIABABIABAAIAAAAIAFgBIAAgBIAAgBIABAAIAAgBIAAAAIAAAAIAAgCIAAAAIAAgBIAAgBIABgCIAAgBIAAgLIAAgCIAAgBIgBgBIAAAAIAAgBIAAgBIAAgBIAAAAIgBgBIAAAAIAAAAIAAgBIAAAAIgBgBIAAAAIgBgCIAAgBIgBgBIAAAAIAAAAIAAgCIAAgBIgDABIADgBIAAgBIAAgBIgBgJQgDgOgFgLIAAgCQAAgIgBgCIAAAAQgCAAgCAFgAyGHaIACAKIAAAAIAAABIAAAAIAAABIAAAAIAAAAIABABIAAABIAAAAIAAABIAAAAIABADIABACIAAAAIACAEIAEAFIABAAIAAAAIAAgCIgCgHIgBgBIAAAAIgBgEIAAAAIAAgBIAAAAIgBgBIAAgBIAAAAIgHgOIAAAAIAAACgAsoHeIAAAAIABABIAAAAIAAABIAAABIAAAAIAAACIABACIAAAAIAAAEIAAABIAAAAIABABIACgBIAAgBIAAAAIABgBIAAAAIAAgCIAAgBIAAgCIAAgCIgBgBQgBgDgEAAIAAABgAs7F/IAAAAIABAOIACAAIAAADIAAAPIAAAQIAAAMIAAAOIABAEIAAABIAAACIAAAAIAAABIABAAIAAAAIAAABIAAABIAAABIAAAAIABABIAAAAIAAABIAAABIAAAAIABAAIAAABIAAAAIAAABIAAAAIAAAAIABAAIAAABIAAAAIABABIAAAAIABAAIAAAAIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIABgCIAAAAIAAgCIAAAAIAAgBIAAgBIAAAAIAAgCIAAgBIAAAAIAAAAIgBABIABgCIAAgDIAAAAIAAgCIAAAAQABgMgCgJIAAgDIgBgCIAAgDIAAgCIAAgDIAAgCIAAgBIAAgFIAAAAQAAgIgDgFIABgDQABgGgEgBIAAgCIAAgFIgBgHIAAAAQgCgFgEgCIACAOgAs2HZIAAAAIAAAAgAzoG/IABAIIAAAAQACADACABQADACAEAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgJIAAgIIAAgFIAAgEIAAgDIAAgKQgBgEgCgDIAAgCQABgOgCgCQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABIgDAGIAAADIAAACIgCAAIABAYIABAAIgBADQAAAFADADIAAABIgCAAIgCAJgAxKFpIAAATIAAAFIABAMIABAAIAAADIAAACQADADAAAHIAAACIABAHIABAAIABADIADAIIACACIAAABIAAgBIAAAAIgCgLIgBgEIAAgCIAAgDQABgHgEgCIAAgDIAAgHIAAgCIAAgFIAAgDQABgQgDgMIgBgCIgCgBIAAADIgCAAIAAAEgAqqGAIAAABIAAACIAAAFIACABQgBAIACAEIABADQABgHAAgJIAAgBIAAgBIAAgBQAAgJgCgKIAAgCIgBgHIgDAAIABAXgAwhECIAAADIgBABIgCABIABAFQACALAAANIAAACIACADIABAHIACAAIAEARIABAHIACAAIAAACQAFAggKAaIAEAGQAFAGAEgWQAGgggKgXIgCgFIAAgCQACgIgEgCIgBgCIgEgTIAAgDIAAgJIAAgDQACgGgCgDQgCgDgEAAIgBAAgAyDFHIAAABIAAABIAAADIAAABIAAABIABAAIAAABIABAAIAAABIAAABIABACIADAFIABABIABgFIgBgGIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIgHgBIAHAAIAAAAIAAgCIAAgBIAAAAIAAgBIAAAAIgBgHIAAgBIAAACQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgEABIAAABIAAACIAAAAIAAABIABACIAAAAgAyvFRIAAABIAAAAIAAABIABAAIABAAIAAAAIgBgBIAAgBIAAAAgAy3EqIABAAIgBAAIACAAIAAAAIABAAIAAAAIAAADIAAAAIAAAFIABAAIAAAEIAAAAIAAACIAAABIAAACIAAAAIAAABIABABIAAABIABAAIAAABIAAAAIAAABIAAAAIAAABIAAABIAAAAIABAAIAAABIAAAAIAAABIAAABIAAAAIABAAIAAABIAAABIAAAAIAAAAIABABIAAAAIAAABIAAAAIABABIABAAIAAgBIAAAAIABAAIAAAAIAAgBIAAAAIAAAAIAAgBIABAAIAAgDIAAAAIAAgBIAAAAIAAgBIAAAAIAAgCIAAAAIAAgFIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAAAIAAgBIAAgBIAAAAIgBgBIAAAAIAAgBIAAAAIAAgBIgBgBIAAAAIAAAAIgBgBIAAAAIAAAAIAAgBIAAgBIAAAAIgBAAIAAgBIgBAAIABAAIgDAAIABAAIAAgBIAAABIABgBIABAAIAAAAIgFAAIAFAAIAAgCIAAAAIgFAAIAAACIgBABIgBAAgAyzFJIACAAIAAAAIAAAAIgCgBIAAAAIABAAIgBAAIgCAAIACAAIAAAAIAAABIgBAAgAy5FJIABAAIAAAAIABAAIABgBIABAAIABABIAAgBIgBAAIgBAAIgBAAgAyxFJIABAAIABAAIgBgBIAAABIgBgBIgBAAIABAAIAAAAgAyyFIIABAAIgBAAIAAAAgAx6EkIABAAIAAACIAAADIAAABIABABIAAADIAAABIABABIAAABIAAABIAAAAIAAACIABAAIAAADIAAABIAAAAIABACIABAHIABACIABAEIAAABIAAAAIABAAIACAAIAAgBIAAAAIABgFIAAgDIAAAAIgBgGQgGgDABgJIAAgPIgBgBIAAAAIAAgCIgDgEIgCANgAyzE8IAAAAIAAAAgAy0E8IAAAAIAAAAgAzSE8IAAAAIAAgCIAAAAIAAgCIgBgBIAAgCIAAAAIAAgIIgHACIAAAAIABAAIAAACIAAABIAAACIAAABIAAAAIABAAIABAAIgCABIAAABIABAAIAAAAIAAABIABAAIAAAAIAAABIAAAAIAAAAIAAAAIABABIAAABIABAAIAAAAIAAAAIAAABIAAAAIABAAIACAAIAAAAgAzyE6IAJAAIgJAAgAy2E1IAAAAIABAAIABAAIAAgBIgBAAgAy3E1IAAAAIAAgBgAzME1IACgBIgBAAgAseERIAAAEIAAAAIAAADIABAEQABAHAEAFQADAEAEADIAAAAIABABIAAgDIgBgEIAAAAIgBgDIgDgIIgFgJIAAAAIgBgCIgDgFIAAADgAzwErIAFAAIAAgBgAy3EqIAAAAIAAAAgAs0EAIAAAAIABAFIAAABIACAIIADAKIAGAOIACAAIgBgMIAAgDIAAgBIgBgFIgBgDIgCgFIAAAAIgCgFQgDgEgEgDIAAADgAqRDjIABACIAAAOIAAABIAAAJIAAAAIABAGIAAAAIAAABIAAABIABAAIADAPIAAAAIAAAEIAAABIAAABIABAAIAAAAIABAAIADADIAAABIAAAAIABgBIABgBQABgDgDgMIAAAAIAAgBIgBAAIAAgCIAAgBIAAgCIAAgCIAAgDIABgGIgBgIIAAAAQAAgHgCgFIgBgDQgBgHgFgFIgBAKgAtTC8IAAAAIACAMQABAMAEAKIAAADIAAAAIAAAIIABAFIAAACIABAGIABAAIAAABIAAABIAAAAIAAADIAAACQABAUAHACIABgFIAAgCIABgKIgBgBIAAgBIAAgBIgCgEIAAgBIAAAAIAAgBIAAgDIAAgCIAAgCIAAgHIAAgCIgCgGIgBgCQgEgcgKgXIAAAOgAtrCRIAAADIAAAFIABAOIACAAIAAACQgBAKACAJIAAABIAAAAIABAAIABALIADAOIACALIAAABIABAEIAFAOIAAACIABgCIAAgBIABgBIAAAAIgBgLIAAgCIgBgHIAAgBIgCgMIgBgHIgCgLIAAgCIAAgBQABgLgDgFIAAgDQgFgggMgZIAHAhgAqwClQABAWAEATIAAABIACAHIADAMIABADIAAAAIAGAPIABAAIgBgIIAAAAIgCgVQgFgcgKgZIAAADgArDB/IAAACIABAaIACAAQACAYAGAUIADAJIACAEIABABIgBgFIAAgBIgKhJIgBgBIAAgCQgBgGgCgEQgDgEgEgDQAAAIAFAFgAuWAaQAEAYAIAVIABACIABAAIAAACIAAAZIAAAMIAAACQAIATAGAUIAEANIAGAXIAAAAIAEAQIABACIAAgGIAAgDIAAgEIAAgFIAAAAQAAgFgCgDIgBgCIgEgNIgDgNIgJgpIgCgPIAAgCQABgLgEgGIAAgCQgJgtgPgmQACAQADARgAXcI/QgHgBgHgEIgCAAIgFACIAAABIgEgBQgTgFgTgIQgTgHgcABQgfgVgsgHIgCAAIgDgCIgGgDQgLgHgNgGIgBAAIAAAAQgSgIgVgFIgIgCIgqgIQgagEgFgXQg4gShAgJIgCAAIgCgBIgBAAIgCAAIgBAAIgDAAIgBgBQgFAAgDgDIAAAAIAAgBIgBgDQgHAEgGgDIgCgBIhHggIgGgEIAAAAIAAAAIAAgBIgBgCQgDgRAAgPQgBgeALgZIACgBIAAgkIAAgCQgZgvATg7IABgCQAvANAnAVIAAACQACAkAVAPIAOAKIABABIADACIAKAFQBigHBZAOIABABIABAAQAHAIAKAFIACABIAAACIgBABIgGAOIAAAVIAAADIgCAAIAAARIAAACIAAARIAAACQgCAVAGgBIAFgEIAAgBQAFgJgCgPIAAgDIAAgCIAAgfIAAgDIAAgMQAEgEgBgKIACAAQAZAKAlgBIACAAQAIAFAOgCIACAAIAYAAIADAAQAoAWA4AIIAAAAIgBAEQAYAJAdAEQCKARCKgFIAAgDIACAAIAADxIgHAAIgCgEIghABQgqADgqAAQhjAAhigOgAQSEFQABAZgGAPQAGASABAWIABASIABAAIAEAHQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQACgDgBgWIgBAAIAAgCIAAgMIACAAQACgNgEgGIABgDQAIgQgGgUQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIgBAEIAAgcQgKAAABAMgANlEkIAAgDQAAgQgDgPQANghACgoQABgTgBgVIgBgMIgFhbQgCgWABgbIAAgDQABgLgEgFIAAgCQAjAhAjAvIAAACIgMAuIgCAAQgNAQgCAPQALALgGATQgFAOgCANQgFAmAVAjIAAACIAAAWIgBAAQgKAUgDAcIAAABQgagRgRgZgAyzFIgAyDFHgAp2EtIABgEIACgIIAAgCIABgIIAAAAQABgMAAgOIgCAAQgHgOgBgTIAAgDQACgPgEgJIAAgCQgBgagGgUIgCAAQgHgIgDgLIAAgCQABgSgEgLIgBgDIgDgCQgFgkgKgaQABgLACgKQADgJgGgNQgVgvgFhBIgCgBQgHgGgGgIQApgiAvgdIABgBQAIAuASAjIAAADQgBAaAEAWIAAACIgDAAIABATIACAAQAEAHgCAMIAAADQAGAKADAMIABACIABAvIABAAQAEAjAQAWIACAAQABgQgJgRIgCAAQABgOgDgKIAAgDIAAgCQABgbgEgUIgBAAQAAgOgIgFIAAgDQgCgSgBgUIACAAQACgMgEgHIAAgDIAAgcIAAgDIAAgGIAAgCIgCgJIAAgCQACgNgEgGIAAgDIAAgCIAAgCQABgTgEgNIAAgCQgDgggIgaIgDgMIABAPIADAaIABADIABAXIABABIAAACQAAANABANIABAAIABAPIACAAIAAACQABAMgEAFIAAgCIgVhgIAAgDIAAgTIAAgCIAAgIQAGACACgEIABAAIABgBQAIgEALgCIACAAIAAABIAAAEIAAACQAAANABANIABAAIADAbIAAACQAIAhgDgjIAAgDIgBgCQAAgOgCgMIAAgDQACgPgEgJIgBgCIgCgDIABgBQAPgIALAAIABAAQAQBPgRBPIAAADQAAAEACADQANACACAMQAGAlgLAhIABAAQADAKAIAEIAAADQACAjgFAoIACABQAHANALAKIgBADQgEAfgHAdQAPASgBAgQgBAgADAXIAAACQgPAPgNARIgDAAQgeAGgZAKIAAAAIgMAGIgBAAIgFADIgGAEIAAgDgAzkEpIAAAAIABAAIAAgBIAAgCIAAAAIAAAAIACgBIABAAIACAAIABAAIABAAIABAAIABAAIAAACIAAABIAAAAIAAABIAAABIgEAAIgBgBIgBAAIgDAAIAAABIgBAAIAAgBgAzTEiIAAAAIAAgCIAJgBIABAAIAAABIAAAFIAAAAIAAAEIgKABgAqAkIIAAgCQAMgBgBAbIgCAJIgBADQgJgNABgXgARWmoIgvgbIAAgCQgGgLgDgOQAGgSABgZIAAgCQAEgGgCgLIAAgCIAAgDIAAgMIABAAQADgQgEgKQAAgegDgXQgCgXgEgGIgBACQgGAKAAAKQAAAKAHAJIAAACQAFBJgKBDIgCgBQgYgIgdgBIgBgCQgKgGABgSIgCgBQgUgMgcgEIgBgDQgBgMgDgMIAAgCQAAgIgHABIgDAAQgcgHgggDIAAgCQgRgQgYgLIgBAAQgEgPABgSQAHgKgCgTIgBgCQAKgZgBghIgBg8QAiAJAiALQAhALAgANIAqASQAeAOAdAQIABACQAlABAVASQACABAAAEIAAAaIAAACQgDAYAHgCQAJgDgDgQIgBgKIACAAQADgQgFgKIAAgDIAAgCQASADgFAaIgBACIAAATIAAADIAAACQgEAjgMAZIAAACQAHAQgDAZIgBABQgHAVgGAWIAFAQQAHAfgOAKIgDABIgBAAgAPUppIACAAIABAAIAIghIAAgDQgDgQgJgKIAAACQADASAAAVIAAACIgDAAIABATgANzsCIABAOIACAAQADAeABAgIAAADQAGADAAAJIACAAQgDAfAFANIAAgBQAGgDACgIQACgIgDgMQgJgvgFg0IgBgCQgCgCgFAAIgCAAgAOtqnIAAACIAAARIAAACIAAALIAAAFIAAABQAAABAAABQAAABAAAAQAAABAAAAQAAAAABAAQAEABACgFQADgFAAgMIAAgPQgCgWgLgGQAAAMADAKgARsmyIgGg8QAIgXAFgcIABAAQgCgNgFgLIAAgCQAJgZAIgNIACgBQANAPAEAaIACgBIADgBQgIgTAMAIIAAABQAEAhAAAlIABAAQAHgKAAgRIAAgCIABgCQABgMgEgFQgBgXAJARQgCAlABArIgCABQgbAIgJAbIgCABQgJAJgNAFgArppoIgTgIIAAgCQgBgPgEgJIAAgDQABgOgEgHIAAgDIAAgFIAAgCIAAgRIAMgCIADAAIABAaIABAAQAKAggDggIAAgCIAAgDIAAgaIATgIIA/gbIACADQACADABAHIABBSIABAAQAAAFACADIABACIAAAaIAAACIgFAKIAAACQgqgEgqgOgArnp1IABADQAIgKgEgEQgCgCgFgBQgBAJADAFgArUq6IAAACQAAAQACAPIABAAIACAAIABAAQADgOgEgHIAAgDQABgOgIgFQgCAIAEACgASAqlIAAgCQAOAPgJAaIAAACQgIgPADgagASRqgQAFgBAAADIAAADIAAAYIAAACIAAABQgJgJAEgXgASuqSIAEABIAAACQAFADgBAJIgBAAIAAABIgCAAQgJAAAEgQgASfqKIAAgRQALASgLACgAr/srQgOgIgMgLIgBAAQAAgSgJgSQAPgEACASIABAHQABANAFAJQAAgXgDgSIgBgKIACgCIADAEIADAGIABACIABATIABAAQAAAHACADIABACQAIgVgPgYIAAgDQANgNAHAHQAFAGACAMIADADQACADABAEQAKACgIgWQgJgagCgaQATgFAQgKIABgCIAQArIAAADQADAIAAALIAAACIgDAAIABATIACAAIAAADIAHAkIAAACQgGANgIALIAAABQgkgBgbgOgAqptDQgBgKgDgHIgCAAIgBgHIAAgDIAAgQIAAgDQgGgjgKgeIgBgCQgDgJABgNIAAgCIAAgCQAhgHATAKIABAGIgCAAIABAWIABAAIAAACIAAADQABAJACAHIACAAQAMATgDAWIAAADIgCAAIAAAVIAAADIgCAAQgRASgTADIgBgCgAQmuTQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQAZgKATATQACACAAADQAAAfAHgkIAAgCQANAJgLATQgGALACAHQAMgJACgUIAAgDIAAgCQAEgHAFAFIABACIgCABIgGANIABADQABAKgEAEIABAFIABAAQAAAEAFAAIAAABIgCAAQgrAKgnACQAPghgEgjg");
	this.shape_5.setTransform(-283.2,-180.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6FFFF").s().p("AAJDPIgEgBIgCAAIgFAAIgPAAIgjgCIgCABIAAABIAAgBIgTgBIgDAAIgYAAIgCAAIgrAAIAAACIgDAAIgFAAIAAgBIgcgBIgDAAIgkAAIgCAAIgDAAIgmAAIgCAAIgUAAIgCAAIgKAAIgHAAIgCAAIgkAAIgDAAIgoAAIgDAAIgYAAIgCAAIh6AAIjdAAIAAgCIgBAAIgpgBIgFAAIgNAAIAAADIgDAAIgCAAIAAgCIgigBIgCAAIgTAAIAAADIgDAAIgJAAIAAgCIgbgBIgCAAIgRAAIgCAAIgWAAIgJAAIgDAAIg3AAIgCAAIgiAAIgCAAIggAAIgCAAIhIAAIgMAAIgCAAIgRAAIgDAAIgVAAIgDAAIgfAAIgCAAIgwAAIgDAAIgQAAIgDAAIgRAAIgCAAIgHAAIgDAAIgaAAIgCAAIgRAAIAAgBIgTgBIgDgBQgTgKgWgIIAAgCIgcgBIgDAAIgDAAIgbAAIgUADIAAAAIgEAAIgzgFQhfAPhkAGQgJABABAJIgPAAIAAmcMA49AAAIAAFqIgCAAIgDgEIg2gDIgxgDIAAAAQgLACgHAJIgCADIgBAEIAAABIgHAEIgCABQgIAQgLANIAAACIgwACIgDABIAAgCIgYgBIAAADIgCAAIhlAAIgCAAIgzAAIgCAAIgiAAIgCAAIgTAAIgDAAIgJAAIgDAAIgtAAIgDAAIhbAAIgCAAIgRAAIgDAAIgVAAIgDAAIghAAIhgAAImwAAIAAgCIgkgBIAAADIgDAAIgmAAIAAgCIgYgBIAAADIgCAAIAAgCIgUgBIAAADIgCAAIgFAAIAAgCIgpgBIAAADIgCAAIgCAAIAAgCIgYgBIgDAAIgTAAIgCAAIgRAAIgDAAIgaAAIgCAAIgbAAIgCAAIg8AAIAAADIgDAAIAAgCIglgBQgIACgJAAQgHAAgHgCIgSAAIAAADQg3AAg3ACQgRAAgLgEQgIAFgLAAIgCAAgA4QCqIABgBIAAAAIAAgBIgBACgA4FBBIABACIAAgCgAvQATIAAABIADgCIgDABg");
	this.shape_6.setTransform(-283.2,-312.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AzJRSQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBQAugoA/gVIAKgFQAIgTAWgHIAOgGIANACQAggUAYgeIAAgCIgQg+IAAgDIgCAAQgDgHAAgJIAAgDQgDgSgGgPQgGgQgJgNIgBgCIgCgJIgBgBIgCgGQgEgOgCgQIgBAAIgCgKIAAgBIgCgGIgBAAIAAAAIgBgSIAAgBIgCAAIAAgBIAAgEIAAgBIAAgBIAAgFIAAAAIAAgCIAAAAIAAgBIgBgCIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIgDgLIAAAAIAAgBIAAAAIAAAAIgCgEIAEADIAAABIABABQADAEACAFIAAABIAAAAIABABIAAAAIAAABIAAAAIAAAAIAAABIAAAAIAAACIABAAIAAABIAAABIAAABIAAAAIAAABIAAACIABAEIAAACIgBACIAAACQAEACABAFQACAEgCAGIAAADIABACIABAGIAAAAQABAGADAEIABABIAAARIAAABIAAABIAFAJIACAFIAAABIAFAKIAGAOIAGAQIAMAlIABAGIADALIAIAlQAAADADACIAAAAQAkgXAZgiIABAAIAAgCIgBgNIAAgCIgBgBIAAgBIgBgHIgCgBIAAADIABAFIAAAAIAAACIAAADQAAABgBABQAAAAAAABQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgBgEIgBgCIgDgMIgHgWIgEgKIAAgCQgEgGgCgJIAAAAIAAAAIAAgBIgBgLIAAgBIAAgLIgBAAIgBgPIAAgEIAAgCQgCgZgEgXIAAgCIgDgQIAAgBQgEgTgGgRIgIgWIAAACIAAADQAEAFgBAMIAAAAIAAACIAAAmIAAADQgCAGAEACIAAABIADAHIAAABIACAJIAAADQABAOADAMIABACQACAEABAFIgBALIAAACIAAACIABAIIAAAFIAAABIAAAAQAAABgBAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIAAgCIgCgDIAAgCIgCgGIgBAAIgBgNIAAgBIAAgHIgBgCIgBgDIAAgDIgBgEIAAgMIgBgBIgBgEIgBgBIgCgIIgBgDIAAAAIgDgMIgBAAIAAgBIAAgGIgBgDIAAAAIAAgCIAAgMIAAgKIAAgBIgBgNIAAgCQgCglgKgcIAIgxIAAgBIAGguIABAAQAGANgFAbQgJA1ATAlQAOAbAFAmIAAABIAAAAIABARIAAAAQAGAHADAIQALAYgFApIgBACQAKAQAGATIAAABIABACIABAGIABABIACAJIAAABIABAAIADgCIAFgEIACgBIAAAAIAAAAIADgDIABAAIAAgBQAfgWAngQIAAgBIARAAIACAAQATgNAPgSIACAAIAAgVIAAgKIAAgDIAAgHIAAAAIAAgBIAAgBIgBgDIAAgCIAAgDIAAAAIAAgKIAAAAIgBgHIAAAAIAAgDIAAgFIgBgHIAAgBIAAgFIgDAAIgBgFIAAgCIAAAAIgBgDIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIAAgBIgBgEIAAgCIgBAAIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAAAIgBgCIADABIACABIAAABIABABIAAABIAAAAIAAACIAAAAIABAAIAAgBIAAgBIAAAAIAAgBIgBgEIgBgDIAAAAIgBAAIAAgCIgCgGIgCgDIgCgBIAAAAIgCgCIgGgFIgBgBIAAAAIgCgCIAAAAIgBgBIgBgBIAAAAIgBgBIAAAAIAAAAIgBgBIAAgCIAAgLIAAgIIAAgDIAAgCIAAgBIAAgEIAAgCIAAgDIAAgGIAAAAIAAgBIAAgOIAAgPIAAgHIAEgUIACgNIAAgCIABAAIAAgBIABAAIABAEQAGARgBAWIgBAKIgBAPIgBATIgBAPIAAALIACACIABAAIABACQAJAIAGALIAAAAIADAEIACAFIADAGIACAFIABABIAAACIAAAAIABABIAAAAIAAACIABACIAAAAIAAAAIAAABIABABIAAABIABACIAAABIAAAAIAKABIABAAIAAAAIADgBIAAAAIABAAIAAAAIAFgCIADgBIABAAIAAgBIABAAIAAAAIABAAIAFgDIAFgCIAEgCQAcgOARgZQAFgIgEgLIgCABIgBgBIAAgBIAAgBIgHgWIgCgJIgFgbIgBAAIAAgCIAAgGIgBgmIgBgCIAAgCQgCgJAAgMIAAgBIAAgCIABABIABABIAAABQAFAKADANIAAACQADAMAAAPIgBAOIAAADIAAABQACAOADALIAAACIAAAAIACAEIABABQABAFgBAHIAAADQADAEAAAIIABAAIADgJIABgCQACgFAEgDIAEgDIAFgDIAAAAIADgCIABgBIABgBIADgCIABgBIABAAIAVgSIABgBIABgBIAEgEIAAAAQgFgLgDgLIAAgBIgCgHQgEgOgBgPIgBgGIAAgDIAAgBIAAgBIAAgLIAAgBIAAgCIAAgBIAAgEIAAgBIAAgDIAAAAIAAgCIAAgDIAAgIIAAgDIAAgBIAAgBIAAgBIABgbIAAAAIAAgJQgCg0gSghIgCgEIgHgKIAAgCQABgVgKgBIgBAAQACgwgNgfIgBAAIgCgTIADAAIAAgCQAGgOgBgUIgCgBQgUglgKguQgNAPgQAOIgTAOQgPALgTAFIg4AOIg2AMIgJABIgBACIgIAGQgJAGgLADQAGACABAFIAAADIAAAWIAAAJIAAACIAAANIAAAOIAAACQAFAGADAHQADAIABAKIAAAHIAAADIAAACIAAADIAAAMIAAACIAAACIAAAXIAAABIACABIADAHQAGAPgBANIgCAAQgHgNgFgPIgCgIQgFgYABgfIABgJIgCgBIgBgFQgCgIgFgGIAAgBIAAgBIAAgBIABgTIAAgFIgCgOQgBgIgDgGIgRARIgoApQgHAIgFABIAAAAIgBACIAAAGQAMAAALAEIABAAIAAABIAPAEQgKANgGAQIgBACIAAARIAAADIAAACIAAADQAAAVgSACIABgDIACgBQAGgCgBgGIgBgFIAEgjIgNAAIgBAAIgIABIgQAFQAAAFACACIAAABIAAAXIgHABQACgPgFgOIgDgBIgDACIgpAiIgEAFIALACIABAGIgBAAIAAALIAAAFIAAABIAAACIABADIgBAJIAAAMIAAAAIAAADQABALgCAIIgCAHIgBgHQgCgMgJgEIAAgBIAFgQIABgFQgIAHgLADIgJAEQgEAFgGAEIgFAEQgFAGgDAHIgDgBIgEABIgCACIABgDIgmAbIAgADIgBAJIgBAAIgCAAIAAAAIgCABIAAADIAAAAIAAAAIAAAAIAAABIABABIAAAEIAAABIAAABIAAABIAAAAIAAADIAAAAIABABIAAAAIAAACIAAACIAAABIAAACIAAAAIAAABIAAACIABAAIAAABIAAABIAAACIAAAAIAAABIABACIAAABIAAABIAAABIAAABIAAABIACAHIAAABIAAABIABAAIAAABIAAABIAAABIABABIAAABIAAABIABAAIAAAIIAAAGIAAAAQAAAIgCgHIgBgBIAAAAIgBgCIAAgBIAAgBIAAgBIgBgCIgBgFIgBgBIAAgBIAAgCIAAAAIAAgBIgBAAIAAgBIAAgBIAAgBIAAAAIgBgCIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIgBgCIAAAAIAAgCIAAgCIAAgBIAAAAIAAgBIAAgBIgBAAIAAgBIAAgBIgBAAIAAgDIAAgBIAAAAIAAAAIAAgCIAAAAIAAgBIgBgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIgBAAIAAAAIABAAIgBgBIAAAAIAAgBIgBAAIAAABIAAABIAAAFIABAAIAAABIAAABIAAAAIAAABIAAACIAAAAIAAABIAAABIAAACIABABIAAACIAAAAIAAADIAAABIAAACIAAABIAAABIABABIAAADIAAABIAAABIAAABIAAACIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIABACIAAAGIAAABIAAABIABADIAAATIgBAOIgBAAIAAADIgBAKIAAABQgCAQgFAOQACAOAEALIADAGIAAAAIAAABIAHAJIABABIABABIABACIABABIAAABIAAAAIAAABIABABIAAABIAAABIABAFIAAAAIAAABQACAEABAEIAAALIgBADIAAAFIAAACIAAAYIAAAAIAAACIAEAIIAIAMIAAAAIADAFIADAEIAAAAIABABIAAAAIAAABIAAAAIABABIABABIADAEIAAACIADAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIABAAIAAgDIAAgCIABgBIAAAAIACgBIABAAIABAAIABAAIABABIABABIABABIABAEIABADIAAALQABADgCAJQAEAJgDAPIgBAAIAAACQABAGgEgBIAAADIAAAhIAAADIACAAIADAaIgBAAQgJgVgLgRIAAgDQACg0gHgpIgCgBIgUgVIAAgCQgBglgEghIAAAAIAAgCIgBgFIAAgBIAAgBIgBgDIAAAAIgBAAIgBAAIgEgHIAAAAIgBgBIgEgFIgEgFIgEgEIABgLIAAgEIAAgBIADgbIAAgCIAEgeIAAgBIAAgBIAAgMIAAgEIAAgFIAAgBIAAgBIAAgBIAAgBIAAgBIgBgDIAAgDIAAAAIAAgCIAAgBIAAgCIAAgCIgBgBIAAAAIAAgCIAAgBIAAAAIAAgCIgBAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIgBAAIAAgCIAAAAIAAAAIAAgBIAAAAIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAAAIAAgBIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIgBgBIAAgBIgBgBIAAgBIAAAAIAAAAIAAgBIgCAAIAAAAIACAAIAAAAIAAAAIgCAAIAAgBIACAAIgBAAIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAAAIAAAAIgBgBIAAAAIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAABIAAAEIgFAAIAAgCIAAAAIAAAAIgBAAIAAgBIAAAAIAAgBIAAgBIAAAAIgBgBQgBgDgCgCIgLADIABABIAAABIAAABIABABIAAAAIAAAAIAAAAIABABIAAAAIAAABIAAAAIAAAAIAAABIAAAAIgFACIAFgCIABABIAAAAIAAABIAAABIAAAAIAAABIgBAAIgCAAIgBAAIgBAAIgCAAIgCAAIAAAAIgBAAIgCAAIgHABIAAAAIAHAAIABAAIABAAIAAgBIABAAIgBABIAAAAIAAAAIABAAIAAgBIALAAIABAAIABABIgBgBIAEAAIAAABIAAAAIAEAAIAAAAIgFAAIAAAAIgBAAIgBAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIgBAAIAAAAIgCAAIAAAAIABAAIAAAAIABAAIgBAAIAAgBIAAABIgCAAIAAAAIABAAIAAAEIgBABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAFIAAAAIAAACIgBAAIAAABIAAAAIAAAAIAAABIAAAAIgBAAIAAABIgBAAIgBgBIAAgBIAAAAIAAAAIgBgBIAAAAIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIgBAAIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIAAAAIAAgBIgBAAIAAAAIgBAAIAAgBIAAAAIAAgFIAAAAIAAgDIAAAAIAAgBIgFAAIgBAAIABAAIgFAAIAAABIAAABIAAAAIgBAAIABAAIgCABIgFABIAAgBIAAgBIAAAAIAAgBIAAgBIgBgBIAAAAIgBABIAAAAIAAABIAAgBIgBAAIgBgBIgGABIAAAAIAAAAIAAAAIAAACIAAABIAAAAIAAABIABAAIAAABIAAAAIAAAAIAAABIABAAIAAABIAAAAIAAACIAAAAIAAACIAAAAIAAAEIgBAAIgCABIADAAIAAAAIAAAAIAAACIAAABIAAACIAAAAIgBABIAAAAIAAAAIAAAAIgBAAIAAABIgBAAIAAAAIgBAAIAAgBIgBgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgCIAAgBIAAAAIAAgCIAAAAIAAgBIgBAAIAAgBIgBgCIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAIgBIAAAAIAAgBIABAAIADgBIAAAAIABAAIABAAIABgBIABAAIAAABIAAAAIAAgDIgJABIAAABIABAAIAAABIgBAAIAAAAIgDABIgBAAIAAAAIgDAAIAAgCIAAAAIABAAIAAgBIAAABIgBAAIAAgBIgHABIgFADIABAAIAAABIAAAAIABABIAAABIAAACIABABIAAAAIABAEIAAADIAAABIABABIAAAAIAAABIAAABIAAAAIAAACIAAABIAAABIgBAAIAAACIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIgBABIAAAAIgBAAIgCAAIgBgBIAAAAIgBgBIAAAAIAAAAIAAgBIAAgBIgBgBIAAgBIAAgBIgBAAIAAgCIAAgEIgBgFIAAgHIgFADIAAAJIgBAFIAAABIAAACIgBABIgBACIAAAAIAAABIAAAAIgBACIgBABIAAAAIAAAAIgBAAIAAAAIgBgCIAAgBIAAgGIgDAAIgCAAIABAHIAAAAIAAADIABABIAAAAIAAABIAAAEIABAGIAAABIAAACIAAAAIABAJIAAAAIAAABIABADIABAQIABAJIAAACIAAACQACASgEALIAAADQAFASACASIABAHIAAACIABACIAAAFIAAAAIAAAUQgBAkgNAkQAJAWAHAYQAJAdgGAVIgBgBQgMg1gQgyQAMgjABgpIABgDIAAAAIAAgLQAAgbgFgYQgBgKAAgJIAAgDIAAgfIAAgCIAAgBIgBgMIAAAAIgBgJIgBgEIgBgBIgBgDIAAgBIAAAAIAAgBIgCABIgIADQgyARg0AQIgPAEIgCAAIAAAGQgEAUgQAIIgHABIgBABQgsAXgvgKQg2gLg4AFIgbABQg6AAg6gDQACgEABAAQBPADBEgXQBTgBBOAJQADABAEgCIAWACQAMgFAJgHIABgCIAAAAIADgVIABAAIAVgEQAqgJAjgPIAFAAQAHAAAFgGIAIgHIAGgCIgBgCQAGgIAKgHIANgHIALgDQAUgEAVgCIAEgBQAPgEANgHQACgEAEgCQAYgWAcgQIABgBIAAgBIABgBIAAAAIAAAAIAJgEQAQgFAMgLIAAgBIgCgGQgCgGgGgCQgHgCgIgBIABgCIAHgDIACgCIAQgSQARgRAUgOIADABIAJABQACgDAEAAIAGgBQAJgFAKACQAKABAJgFIABAAQABgDAAgFQAAgEgDgDIgDgDIgCAAIgDAAIgSgCIgFABIgCgBIgBAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAABIAAgBIAAgBIAAgBIABgDIACgBQAAgDACgDIgBgEIAAgCIABgBIACAAIADACIAAAAQAdgWASgaIAFgJIABgCQAPgIgDgLIAAgCQAbgSAlgKIAAAAQAcgHAhgCIAJgBIAKgDIAPgGQAcgMAVgSQATgQAPgVQADgEgFgFQgLgIABgJIAAgCIAkgZIA4gpIACAAQgRgTgSgSIgBgCQASgXAigJQAdgIASgTIAMACIACAHQACAEAEACIgBAGIACACIgCAAIAAABIAEAoIAAADQAFAJgDAOIgCABIAAACQgFAqgCArIACABQAbAhgRA3IABACQASAjgMA2QABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAHAMAIAJIAAACQABAlgKAaQAGAKACAMIALBEIAAABIAAABIAAAAIACALIAAACQgSASgPAVIgDAAQgeAHgbALIAAABIgOAGIgBAAIgDACIgOAIIAAAAIgBAAIgBABIAAACIAAAAIABABIABAFQAEAMACANIACAMIAAAAIAAADIAAABQAFACACADIADAEIABAGIABABIAAABIAAADQgEAIgGADIAAAAIgBABIgBAAIgFADQgKAGgJAIIgDACIgBACIgBAAIgFAGIgHAIIgDADIgCADIAAADIAAAcIgCABQgQAZggAJIgEABIgMACIgEABIAAAAIAAABIgJAFIgHAGIgDABIgJAJIgBABIgEAGIAAABIAAACIAAAEIAAAFIAAACIAAAFIAAADIAAACIAAACIAAAFIAAAFIAAABIAAACIAAABIAAACIAAABIAAACIACANIAAAPIgBABIAAABIgBAJIgDABQgEABgDACQgIAGgJAEIgKAEIgFACIgCABIgBAAQgxAQglAbIgBAAIgDADIgMAJIABADIABALIAAAAIAAACIABAMIAAADIAAADIgBABIgBAAQgbAkgkAcQAEAXgRAOQgWARgXARIABAAQhIA5hXAjIgIAEQgHAAgHgCgAsFKRIAAABIAAAAIABACIAAAAIABAAIABAAIAAAAIABAAIgEgDgAp9g5QgwAcgoAiQAFAHAHAHIACAAQAFBCAWAvQAGAMgDAKQgDAKgBALQALAbAFAjIADACIABADQAEAMgCARIAAADQADALAHAHIACABQAHATAAAaIAAADQAEAJgBAPIAAACQABATAHAOIABABQABAOgBALIAAABIgBAHIAAACIgCAIIgBAFIgBACIAHgDIAFgDIABgBIALgFIABAAQAZgLAegFIACgBQANgQAPgPIABgCQgEgYABgfQABghgPgSQAHgdAFgfIAAgCQgKgLgIgNIgBAAQAEgpgCgkIAAgCQgHgFgDgJIgCgBQAMgggGglQgCgMgNgDQgDgCAAgFIAAgCQAShPgRhOIgBgBQgKABgQAHIAAACIACADIAAACQAEAJgBAPIAAACQACAMAAAOIAAADIAAACQADAjgIggIAAgDIgCgaIgBAAQgCgNAAgOIAAgCIAAgEIAAgBIgCABQgKACgIAEIgBAAIgCABQgBAEgHgCIAAAHIAAACIAAAUIAAACIAWBfIAAACQAEgEgCgLIAAgDIgBAAIgBgOIgBAAQgCgNAAgOIAAgCIgBAAIgBgYIAAgCIgDgbIgCgOIAEALQAIAbADAgIAAACQAEAMgCATIAAACIAAADIAAACQAEAHgBAMIgBACIADAIIAAADIAAAGIAAACIAAAdIAAACQAEAHgDAMIgBAAQAAAUACATIAAACQAIAFABAOIABAAQAEAVgCAbIAAADIABACQADAKgBAOIABABQAKARgCAQIgBgBQgRgWgDgjIgCAAIgBgwIAAgCQgEgMgFgKIAAgCQABgMgEgHIgBAAIgBgUIACAAIAAgCQgDgWABgaIgBgCQgSgjgIguIAAACgAzqG+IAAgBIAAAAIADAAIACAAIABAAIAEAAIAAgBIAAgBIAAAAIgBgBIAAgCIAAAAIgBAAIgBABIgBAAIgCAAIgBAAIgCAAIAAAAIAAABIgBABIAAABIAAAAIAAABIAAABgAzRGzIgIABIAAABIAAABIAAAHIAKAAIAAgEIgBgBIAAgEIAAgBIgBAAgAyiG6IgEABIgMABIASgCIgCAAIACAAIAGAAIABgBIgBAAIgCAAIgBAAIgDABIgDAAIgHABIAHgBgAytG6IADAAIgBAAgAqGh3IAAACQgCAYAJAMIACgCIABgJQACgbgMAAIAAAAgAsdOXQAUgQAQgWIACAAQgLAigbAFgAsnNgQANgIAKgKIADgCIADgDIABgBQALgMAJgPIAAgCQgBgFAAgEQAAgFADgEIAAAAIAEgFQAEgEAGgDIACgDIAEgDIAAgCIAAgJIAAgBIAAgFIAAgHIACAAQAEADABAEIAAAGIAAABIAAABIAAACIAAACQAAAHgFADIgBABIgSAXQABAegVASIgBABIgCABIgCACIgBAAQgNAJgKAAIgGgBgAtvNcIAAgBQAbgHgKgQIgBgCQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAcgKAYgOIACgCIABAAIAMgIIAAAAIAEgDIAAAAIAUgQIADgDIABgBIAJgHIACgGIAAgBIABgDIAAAAIAAgGQABgKgGgGIgDgDIAAgBIABAAIADABIAGACQAEACACAEIAAAAIABADIgDALIgBADIAAABIgBADIgBAAQgDAKgFAIIgEAFQgFAIgHAGQgGAFgHAFIgBAAIgGAEIgGACQgLAFgNADQgOADgHAJQACAcgYAAIgHgBgAwfMiIgBgBIgCgHQgJgWgFgYIgBgEIAAgBIAAgBIgDAAIAAABIAAANIAAACIABADQAFAQgDADIgCAAIgKgnIgDgKIAAgBIAAAAIgBgBIAAAAIAAgBIAAgBIAAAAIAAgBIgBgBIAAgCIgBgBIAAAAIAAAAIAAgBIAAAAIAAAAIAAgBIgCgEIAAgBIAAgBIgBgBIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIgBgDIgEgKIgCAAIAAABIAAABIABAIIABABIAAACIAAABIAAACIAAABIAAABIAAABIAAAAIAAACIAAABIACAFIAAAAIAAABIABABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAFIAAAAIAAADIAAAAIgBABQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBIAAgBIgBAAIAAgDIgBgBIAAAAIAAgCIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgBIAAgCIgBgBIAAgBIAAgDIAAgCIAAgBIAAgBIAAgBIgBAAIAAgBIgBgBIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAgBIgBgDIgBgDIAAAAIAAAAIgBgEIgBgBIAAgBIAAgBIAAAAIgBgCIgBgCIgBgCIAAgBIgBgDIgCgHIgBAAIgEgNIgBgBIAAgCIAAgBIgBgCIgBgCIgBgCIAAgCIgBgBIAAgBIAAAAIgBgCIACADIAHALIAAAAIABABIAAAAIAMATIAAACIACgCIAAgCIAAgDIAAgFIAHAOIABADIABABIAAABIAAAAIAAABIABAAIAAABIACAGIABABIACAEIAAACIABABIAAAAIAAABIABABIAAAAIAAAAIAAABIABABIAAABIAAABIABABIAAABIAAAAIAAABIABABIAAABIAAAAIACAEIAAACIAAAAIABAAIAAABIAAAAIAAABIAAAAIABABIACAIIABACIACAAIAAgCIAAgJIAAgBIAAgCIgBAAIAAgCIAAgBIAAgEIgBgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAEAAIAAAAIABABIAAABIAAABIAAACIAAAAIAAABIAAABIAAABIACAGIAAABIAAAAIABACIAAACIAAABIABAAIAAABIAAABIACAHIACAJIAAABIAFARIAAAAIAGAeIAAABIABAFIABABIAAACIABAHIABACIAAAAIAAAEIABACIgGgOgArAMAQAEgBAAgGIABAAIAAAAIAAgDIAAgOQAJAFgGAKIgBACIAAACQgCAHgBABIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBgBgBgAZ4LwQhWgKhXgFIgHgHQgegIgYgOIgDAAIgkAAQgNgIgOgFQgagJgYgLIAAAAIgJgFIgOgHIAAAAIgFgDIgDAAIgFABIAAAAIgMABIgCgBQgZgNghgFQgJgBgIgDQgXgIgKgVQgagMgfgEIgBAAIgCgBQgdgDgbgGIgBAAIgCAAIgBgBIgCAAIgCgBIgBAAIgDgBIgDgBIgBAAIAAAAIgagHQgYgHgWgKIgVgKIgOgIIgBAAIAAAAIAAgDIABgGIAAgCIgBgDIAAgBIAAAAIAAgCIAAAAIAAgCIAAgCQAAgKgDgJIgBgEIgBgEIAAgCQgSgLgNgQQgFgCAAAEIAAADIgCgCIgEgJQgHgMgEgNIgBAAQgJALAAAMIAAAAIABAFIAAABIAAABIAAAAIAEACIAHAEIACABIACABIAIAEIABAAIAJADIABACIALALIAAAAIAIAJIAAACIgBAAIAAAFIAAACIAAAEIAAAGIAAACIABAIIAAABIACAIIAAACIAFADIACABIABABIABABQAFAEgBADQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgDAAQgFgDgEgEIgEgFIgBgBQgDgEgCgHIAAgCIAAgIIAAgFIAAgCIAAgMIgBgBIgEgFIgHgIIgBgBIgCgDIgCgDIgBAAIgBAAQgHAAgGgCQgKgCgFgIIgDgGIgCgIIAAAAIgBgDIABgEIAAAAIACgFIABgDQAEgKAJAAIACAAIAAgCQACgKgCgTQAXgmgPgsIAAgCQADgMABgOIAAgDIAAgCIAAgRIAAgCQAEhIgKhHIAAgBIgCgNIgBgBIgBgJIAAgCIgBgFIgBgCQAggmAlggIABgCIgEgDIgCgCQgPgOgRgOIAAgCQAygdBDgNIADgBIgIgCIACgBIANgBIAJgBIgJAHIgCABQgUAOgfAFQggAGgZAPIgDADIgFACIACABIAIAFIAGAEQAMAIAIAMQABAHgDADQgjAegeAjIABACIABAAQAQANgQgHIAAABQAZAqAiAgQANALAIAQQgFAxgYAdIAAABQAhAaAwAKQAHABAFADIAJAJIAAAAIADAHQgBAPADAJIABACQALAPAOALIAFAEIABABIARAAIAJAAIADAAIAAgCQAMAAAMABIAAABIArAAIACAAIAbABIAAACIBFAHIADAAQAhAjBLgGIACAAIAiABIAAABQAUAPAcAEQAdAFATAMIACgBIABgBQBhASBlACIAPABQA1ADA2ABIACAEIAAAEQiKAEiKgRQgcgDgYgKIAAgDIAAAAQg3gIgpgXIgCAAIgYAAIgCAAQgOACgIgEIgCAAQglABgagLIgBAAQAAAKgEAFIAAAMIAAACIAAAfIAAADIAAACQACAPgEAJIgBACIgEADQgGACABgVIAAgDIAAgRIAAgCIAAgRIADAAIAAgCIAAgWIAFgOIACAAIAAgDIgCAAQgKgFgHgJIgBAAIgCAAQhYgOhjAHIgJgGIgDgCIgCgBIgNgJQgWgQgBgkIgBgBQgngWgvgNIAAADQgUA7AZAuIAAADIAAAkIgBAAQgLAaAAAdQABAQADARIABABIAAABIAAAAIAAABIAFAEIBIAgIACAAQAFADAHgDIACADIAAAAIAAABQACACAFABIABAAIADAAIACABIACAAIABAAIACAAIACAAQBAAJA4ATQAFAWAZAFIArAIIAHACQAWAFASAHIAAAAIAAABQAOAFALAHIAFADIADACIADAAQAsAIAeAVQAcgCAUAIQASAHATAFIAEABIABAAIAEgCIADAAQAGADAHABQCNAUCNgIIAggCIADAEIAAADQgzAQg3AAQgYAAgYgDgANhB4QAEAGgCALIAAACQAAAcABAXIAGBaIABANQABAVgBATQgDAngMAiQACAOAAARIAAACQASAaAaAQIAAgBQACgbAKgUIACgBIAAgWIAAgCQgVgiAFgnQACgNAEgNQAHgTgLgMQABgOAOgQIABgBIAMgtIAAgDQgigvgjghgAVbLeIgCAAIgTgQIgDAAQgKgBgHgEIgCgBQgDgCgHAAIgCAAQgIgBgGgDIgBgCIAAAAQgLgBgKgCQgNgDgLgHIgBAAIAAAAIgBAAIgFgDIgEgCQgMgIgIgLIgDAAQgjgHgggMIgCAAQgTgGgMgLIgCAAIgKgMIgDAAIgmgJIgDAAQgLABgFgEIgDAAIgZgGIgDgBIgCAAIgEgBQgogNgigUIAwAQIAAAAIAdAJIAEAAIACABIACAAIABABIACAAQAeAIAfAGQAVAEALANIAEAFIAiAQIACABIASAEIARAFIAAAAIAAAAIAjAKIACAAQAGAJAJAHIAEACIAGAEIAAAAIAEABIACABIAUAGIAPAFIAAAAIADABIAIACIACAAIARAEIAAABIADACIACAAIAVAFIADAAQAHAIAKAGIACABIACAAQAKAIgEAAQgDAAgKgEgASxK5IAAgBQATABARAHIAFABIAFACQAMAGALAIIAAABIhFgZgAxkLMIAAgBIAAAAIgCgEIgBgCIAAAAIAAgBIAAAAIgBgCIgBgBIAAgBIAAAAIAAgBIgCgDIgCgEIgBgFIgCgFIgBgBIAAAAIAAgCIAAAAIgDgGIgBgDIgBAAIgDgJIgBgBIAAAAIAAgBIgBgEIAAAAIAAgCIgCgFIAAAAIAAgBIAAgBIAAAAIAAgCIAAAAIgBgEIAAgBIAAgCIAAgBIAAgBIAAgDIADADIABADIABABIABACIAAADIABACIAAABIAAAAIAAACIABACIAAAAIAAABIAAABIAAABIAAADIABABIAAACIADAGIABAAIABABIAFAMIAAABIAAAAIABADIABABIAAAAIACAGIAAAAIAAACIAAAAIAAABIABACIAAABIAAABIABACIAAAAIAAACIAAABIAAACIAAABIABAEIAAADIAAABIAAgBgAwVK5IAAAAIAAgBIgBgFIAAgCIAAgBIgBgCIgBAAIgBgaIAEABIAAABIAAADQADAEAAAFIAAAMIAAACIAAABIAAABIAAABIgCAGIAAAAIgBAAgA1OK4IgDgIQgCgIgBgKIAAgDIAAgTIADAAIABABQAKAVgEATIgBACIgCAFIgBAAgAtoKuIgBAAIgBgXIAAgBIAAgCIAAgBIAAgEIACADIABACIABACIAAAAIABAAIAAABIABAGQABAGgBAIIgBAEIAAABgA14KUIAAgCIgBAAQgBgKAAgKIACAAIAAgCIAAgMQAFgCACgBQABAAAAABQABAAABAAQAAAAAAABQABAAAAABQADAFgDAPIAAAAIgBADQgCASABARIgCACQgIgIABgQgAqrKZQgGAAgFgHQAhgHAOgVQAIgNABgTIgBAAQgJgDAAgFQAAgDAEgEIAAgCQAFgEAHgCIAHgBIADAAIACgCIAAAAIAKgJIAAgBIABAAIACgCIAGgGIAAgCIAAgCQAFgDACgFIABgCIgBgCQgCgIgFgHQAJABAEAGQADAGgCALIgCAAIAAADQgBAGgGADIgBABIgEAGIgBAAIgCACIAAABIgBAAIgGAGIAAAAQgJAGgMACIAAACQgHAIAMAJQgBARgHALIgDAFQgGAJgJAFIgPAKQgIAGgGAAIgBAAgAteKVIAAgBIgBAAIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAgEIAAgBIAAgDIgBgHIgBAAQgBgKAAgJIACAAIAAgDIAAgCIACAAIABACIACAFIAAAAIAAABIAAABIABABIAAABIAAABIAAAAIgBAHIAAACIABAGIAAADIAAABIABADIAAAAIABADIAAABIAAAAIAAAAIAAABIAAAAIABAAIAAABIAAABIAAACIAAABIgBABIgCACQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBgAtNKPIgCAAIAAAAIAAAAIgBgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgDIgBgGIAAgBIAAgBIAAAAIAAgFIAAgBIAAgBIAAgDIAAgBIAAgEIAAgBIAAgBIAAgBIAAgBIAAgCIAAgDIgBAAIgCgTIAAgBQgEgCACgGIgBgBIgBgLQADgHABACQABABgBAIIAAADQAGALADAOIABAIIAAACIgBAAIgCACIADgCIAAABIAAACIAAABIAAAAIAAAAIAAACIACACIAAAAIAAAAIABABIAAAAIAAAAIAAABIAAAAIABABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAADIAAALIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIgBAAIAAAAIAAABIAAAAIAAABIgFABgAyBKKIgEgEIgCgEIAAgBIgBgBIgBgDIAAgBIAAAAIAAgBIgBgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIgCgJIgBgDIABABIAHANIAAABIAAABIAAAAIABABIAAAAIAAABIABADIAAABIAAAAIACAHIAAACIAAAAgAssJ+IAAgBIAAgBIgBgEIAAAAIAAgCIAAgBIAAgBIAAAAIgBgCIAAAAIAAgBIAAAAIAAgBQAEABABACIAAABIABADIAAABIAAABIgBACIAAABIAAAAIAAABIAAAAIgDABgAs4JvIgBgBIgBgBIAAAAIAAAAIABAAIAAAAIABAAIgCAAIAAgBIAAAAIAAAAIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAIgBgBIAAgBIgBAAIAAAAIAAgBIAAgBIAAgCIAAgEIAAgOIAAgMIgBgQIAAgPIAAgCIgBAAIgBgOIAAgBIgDgOQAFACACAFIAAABIABAGIAAAFIgBADQAEAAgBAHIAAACQADAFAAAIIAAAAIgBAGIAAAAIAAADIAAACIAAADIABACIABACIAAADQACAKgBAMIAAAAIAAABIAAABIAAADIgBABIABAAIAAgBIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIgBACIAAACIAAAAIAAABIAAABIgBAAIAAAAIAAABIAAAAIAAAAIAAABIgBAAgAs8JtIAAAAIgBAAgAzpJfQgDgCgBgCIAAgBIgBgHIABgJIADAAIgBgCQgCgCAAgGIAAgCIgBAAIgBgYIACAAIAAgDIAAgCIAEgHQABAAAAAAQAAAAABgBQAAAAAAABQAAAAABAAQABADAAANIAAADQACADABAEIgBAKIAAACIAAAFIAAAFIAAAHIAAAJIAAACIAAABIAAABIAAABIAAABQgEAAgCgBgApIJTIAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgFIAAgDIAAgCQAGgDAEgGIACgBIAAgCQAIgHAGgJQANgTAFgbIAAAAIABgFIAAAAIAAgDIAAgCQgLgJADgKIABAAIAVgOIABAAIACgBIAigXIACgBIAGgOIABAAIAAgCIAAgGIAAAAIAAgFIAAgBIAAgGIAAAAIAAgKIAAgLIAAgCIAAgCIgFgEIgJgGQAHAAAFADQAFACACAFIAAACQAEAFgBALIAAACIAAABIAAACIAAAFIAAAAIAAAKIAAAAIAAABIAAACIAAAAIAAACIgBADIgCALIgCAAIgHAHQgRAPgUAMIAAABIgQAIIgCABQgEAHAIAFIABABIACAAIAAAGIAAAAIgBABIAAACIAAAAIgEAUIgGARIgBADIgHAMQgHAKgKAJIgBABIgHAIIAAADIAAAEIAAADIAAACQgCAJgCAAQgCAAgBgJgAxEJGIgBgDIgDgHIgBgDIgCAAIgBgHIAAgDQABgGgDgDIAAgDIAAgCIgBAAIgBgNIAAgEIgBgTIAAgFIADAAIAAgCIACAAIAAACQAEANgBAQIAAACIAAAFIAAACIAAAIIAAACQAEACgCAIIAAACIAAACIABAEIADAMIAAAAIgBAAgAquIpQgCgFABgIIgBAAIgBgGIAAgBIAAgBIAAgXIACAAIACAHIAAABQACAKAAAJIAAACIAAABIAAAAQAAAJgCAIgAwdIeIgEgHQAKgZgFggIAAgDIgBAAIgCgGIgEgSIgBAAIgCgGIgCgDIAAgDQAAgMgBgLIgBgGIACAAIAAgCIAAgCQAGgBACADQABADgBAHIgBACIAAAKIAAACIAFATIAAADQAEACgBAHIAAADIACAFQAKAXgGAgQgDARgEAAIgDgBgAM4HgIAAgCQgNgFgGgNIgCgGIgBgDQAJgJAIgKIABgBIABgBIAIgOIAAACQgBAHgCAHIAAABIgBAAIgBADIAAABIgBAAIgDAGQgEAGgGAFIAAACIAEAEIAKAKIACAAIAGAOQAHASALAOIAAACQgUgGgGgggAQTICIgDgIIgBAAIgBgSQgBgWgHgRQAHgQgCgZQgBgLALgBIAAAdIABgFQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAGATgIARIAAACQAEAHgDAMIgBAAIAAAMIAAADIABAAQABAVgCADIgBABIgBgBgApZHzQAKgTgQgPIgBgCIAWgHIABAAQAYgKAVgMIAPgKIALgIIACgBQAHgLACgLIAAAAIABgLIAAgBIAAgCIgFgHIAAAAIAAgBIAAAAIgBgBIADABIABABIADADIABAAIAAABIAGAFIABABIABAFQAAAHgCAGIAAABIAAAAIgDAHIgFAIIAAACIgHAGQgNALgQAIIgBAAQgTAKgXAFIAAAAIgIACQgNACAGAIQARATgWALgAyEHrIgCgFIgBgCIAAgBIgBgBIgBAAIAAAAIAAgBIAAgBIAAAAIAAgDIgBgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAEgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIABgDIAAABIABAHIAAABIAAAAIAAABIAAAAIgBACIAAABIgHAAIAHAAIAAAAIAAADIAAABIAAAAIAAABIABABIAAAHIAAAEIAAAAIgCgBgAy0HnIgBgBIgBAAIABgBIAAAAIAAAAIAAAAIABAAIAAABIABABgAyzHdIgBgBIAAAAIgBAAIAAgBIAAAAIAAAAIAAgBIAAgBIgBAAIAAAAIAAgBIAAgBIAAAAIgBgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAgBIAAAAIgBAAIAAgBIgBAAIAAgCIAAAAIAAgBIAAAAIAAgCIAAgBIAAgDIgBAAIAAgDIAAAAIAAgFIAAgBIAAgCIABAAIAAAAIABAAIACAAIgCAAIgBgBIAAAAIAAABIABAAIgBAAIgBAAIABAAIAAgBIgDAAIABABIAAAAIABAAIAAAAIgBAAIAAAAIAAAAIgCAAIABgBIgBAAIAAABIgBAAIABgBIABAAIABAAIABAAIAAgCIAEgBIABAAIAAACIgFABIAFAAIgBAAIAAAAIgBAAIAAAAIAAAAIgBAAIADAAIgBABIABAAIAAAAIAAAAIAAABIABAAIAAABIAAAAIAAABIAAAAIAAAAIABABIAAABIAAAAIABABIAAAAIAAABIAAAAIABABIAAABIAAAAIAAAAIAAABIAAAAIABAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAEIAAABIAAACIAAAAIAAAAIAAABIAAAAIgBABIAAACIAAABIAAAAIAAAAIAAABIgBAAIAAAAIAAABIAAAAIgBAAgAy5HcIgBAAIAAAAIABAAIAAAAIACAAIAAAAIAAABgAy/HcIAAAAIACAAIABAAIgCAAIAAAAgAy2HcIAAAAIABAAgAy3HcIgBAAIABAAIgBgBIABABIABAAgAy7HcIgBAAIABAAIAAAAIABAAgAy4HcIAAAAIAAAAIAAAAgAy5HcIgCgBIACABIABAAIgBAAgAy8HcgAx3HbIgBAAIAAAAIAAgBIgBgEIgBgBIgBgHIgBgCIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAAAIgBgCIAAgBIAAAAIgBgDIAAgCIAAgBIgBgDIAAgBIAAgBIACgMIACAEIAAABIABAAIABABIAAAQQgBAJAGADIABAFIAAABIgBADIAAAFIAAAAIgBAAgAy5HQIAAAAIAAAAgAy6HQIAAAAIAAAAgAzYHQIgCgBIgBAAIAAAAIAAAAIgBAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIAAAAIAAAAIgBgBIAAAAIAAgBIgBAAIAAgBIABAAIAAAAIgBAAIAAgBIAAAAIAAgDIgBAAIAAgCIAAgBIAAAAIAHgCIAAAJIAAAAIAAACIAAAAIAAACIABABIAAACIAAAAgAz4HNIAJAAIgJABgAy8HIIAAAAIACAAIAAAAIgBAAIgBAAgAy9HIIAAAAIAAAAgAzRHIIAAAAIgBAAgAsXHDIAAAAQgEgDgDgEQgEgGgBgHIgBgDIAAgDIAAAAIgBgFIAAgCIAEAFIABABIAAAAIAFAJIADAIIABADIAAABIABAEIAAACIgBAAgAzxG9IAAABIgGAAgAzUG+IACgBIAAABgAsuG6IgHgPIgCgJIgCgIIAAgBIgBgFIAAgBIAAgCQAEACADAFIACAEIAAABIACAFIAAADIABAFIAAAAIABADIAAANgAzpG3IAAAAIAAAAIAAAAgAqMGxIAAAAIgBAAIgDgDIAAAAIgBAAIAAAAIAAgBIAAgCIgBgDIAAgBIgDgPIAAAAIgBAAIAAgBIAAAAIAAgHIAAAAIgBgJIAAAAIAAgOIAAgDIAAgJQAFAEACAIIAAACQACAFABAHIAAAAIAAAJIAAAGIAAACIAAADIAAACIAAAAIAAACIABABIAAABIAAAAQACALAAAEIgBABIgBAAIAAAAgAMsGpIAAgPQAQgWgPAmIgBABIAAgCgAtPGRIAAgCIgBgDIAAgBIAAgBIAAAAIgBAAIAAgGIgBgCIAAgFIAAgIIAAgBIgBgCQgDgKgCgMIgBgNIAAAAIAAgNQAJAWAFAcIAAACIADAHIAAACIAAAGIAAADIAAACIgBACIAAABIAAAAIAAABIADAFIAAAAIAAACIAAAAIAAAKIAAADIgCAFQgGgDgBgTgAthGHIgEgOIgBgDIAAgCIgDgKIgCgOIgCgMIAAAAIgBAAIAAAAQgBgKAAgJIAAgDIgBAAIgBgOIAAgFIgBgCIgHgiQANAZAEAhIAAACQAEAGgBALIAAAAIAAACIACALIABAHIACANIAAABIABAHIAAABIAAALIAAAAIAAACIAAABIgCACIAAgDgAqlGHIgGgPIAAAAIgBgDIgDgLIgCgHIAAgBQgEgTgBgXIAAgCQAKAYAEAdIADAUIAAAAIABAIgAq6FoIgBgEIgDgJQgGgVgDgYIgBAAIgBgaIgBgCQgEgEAAgIQAEACADAEQACAEAAAGIAAADIACAAIAKBKIAAABIAAAEIgBAAgAtyFgIgEgPIAAAAIgGgYIgEgNQgGgUgIgSIAAgDIAAgMIAAgYIAAgCIgCgBIAAgBQgIgVgFgZQgDgQgBgSQAPAnAIAtIABADQAEAFgCAMIAAACIADAOIAJApIADAOIAEANIAAACQADADAAAEIAAABIAAAFIAAAEIAAACIAAAGIAAABIgBgDgAQLhSQARgDARgOIABAAIABgBIABAAIABgCQAOgOADgSIADABIgBgCIgCgDIAAgGQgBgsgmgLIgBgCIABAAQAQgWgBgeIABgCQAMgHALgIIgBgBQgPgSgYgKIgBgCIgOgdIgCAAQgmgCgWgRQAAgMgGgEQgRgKgXgFQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgLgPgCgXIgDAAQgTABgJgIIgDAAIgVAAIgHgFQgRgRgdgEIgBgDQgHgZADgjIAIgYIACAAIgFh6IAAgDQBCghBcAIIAMABIAFAAIARAAIACAAQAQgBANgDIACAAQAWgfgHglIAAgCQAEgPAJgLIABAAQATgFAWAAIACAAIAAAAIAAgDIAUAAIACAAQA/gJBFgDIACAAQAMAAAMACIAAABIA6gDIACAAIAAgCQALAAALABIAAABQBAgEA1gQIABgBQAFgUgDgfIAAgCQAbgjA5gGIACAAQAGgZAVgKIACgBQgWgEgcACIgDAAIAAABQgMABgMAAIgCAAIgkAAIkKAAIgDAAIgTAAIgCAAIgRAAIgDAAIgcAAIgDAAIgCAAIgDAAIgQAAIgDAAQgeACgZgEIgCAAIgRAAIAAABQgSADgLgEIgCAAIgPAAIAAABQgRADgMgEIgCAAIAAABQgOADgIgEIgCAAIgYAAIAAABQgPADgJgEIgCAAIgkAAIgBABQgZADgUgEIgCAAIgFAAIAAABIgTABIgDAAIgYAAIgCAAIgYAAIgDAAIgEAAIgDAAQgeACgZgEIgCAAIgDAAIAAABQghADgbgEIgCAAIimAAIgCAAIgTAAIgDAAIgCAAIgbAAIgCAAIgWAAIgCAAIgTAAIgDAAIhFAAIgDAAIhDAAIAAACIAAADIgJgDIgBABQgTgFgYACIgCAAIgTAAIgDAAIgVAAIgDAAIhYAAIgFAFIgIgDQABgEgDgDIAGABIACAAIADAAQANAAAJgFQALAFAQgBQA3gCA4AAIAAgDIASAAQAGADAIgBQAJAAAHgCIAmABIAAACIACAAIAAgDIA8AAIADAAIAaAAIADAAIAaAAIACAAIARAAIADAAIATAAIACAAIAYABIAAACIADAAIACAAIAAgDIApABIAAACIAFAAIACAAIAAgDIATABIAAACIADAAIAAgDIAXABIABACIAmAAIACAAIAAgDIAkABIAAACIGwAAIBgAAIAiAAIACAAIAWAAIACAAIARAAIADAAIBbAAIACAAIAuAAIACAAIAKAAIACAAIATAAIADAAIAhAAIADAAIAyAAIADAAIBkAAIADAAIAAgDIAYABIAAACIACgBIAwgCIABgCQAKgNAIgQIACgBIAIgEIAAgBIAAgEIADgDQAHgJAKgCIAAAAIAyADIA2ADIACAEIAAADQg6gFg3APQgSALgJATIgBABQgKAHgLAGIgCAAQg4gDgMAnIAAABQg0ANgkAbIAAACQAHAsgWATIAAABQgIADgJABIgCAAQgfAHgiAFIAAABIgVABIgDAAIgtAAIgBABIgTABIgCAAQhqgChjANIgNABIAMAEQAsANARAnIABACQgUAfg0AAIgCAAIgBABIgXACQgNAFgOAEQgQAEgRgDQhlgMhPAhQBIAjBSAcQAzASAwAVQAHADAIACQBDALAuAhQAJAGgEAIQgTAQgiAAQgKAAAFAGQAKAeAkAPIACABQAdAbAQAmIABACQgbAdgtALIgCABIgTAdIgBACQgvAQgfAgIgBACQALASADAeIACADIABAEQAEAKABAMIAAACIAGARIABACIABABQACAHAAAEQgYALgBAYIgcALIgVAHIAGgGgAQenpQACAYABAdQAEALgDAPIgBABIAAAMIAAACIAAACQABAMgEAFIAAADQAAAYgHATQADAOAGAKIABACIAuAbIAEAAQAPgLgHgeIgFgRQAFgWAIgVIABAAQACgZgGgQIgBgCQANgaAEgiIAAgDIAAgCIAAgTIAAgDQAFgZgRgDIAAACIAAACQAEALgDAPIgBABIABAJQACARgJACQgHACADgXIAAgCIAAgbQAAgDgBgCQgVgSgmgBIAAgBQgdgQgegOIgrgTQgfgNgigLQghgKgjgJIABA7QABAhgJAZIAAACQADAUgIAJQAAATAEAPIABAAQAXAKARARIABACQAfADAdAGIACAAQAIAAgBAIIAAACQADALACANIAAACQAcAFAUAMIADAAQgCASALAHIAAACQAeABAXAIIACAAQAKhCgFhJIAAgCQgGgKAAgJQgBgKAHgKIAAgCQAEAFADAXgARflbIAGA8IABAAQAOgEAJgKIABAAQAKgbAagJIADAAQgBgrACgmQgJgQABAWQAEAGgCALIAAADIAAACQgBAQgGAKIgBAAQAAglgEggIgBgCQgLgIAHATIgDACIgCAAQgEgZgMgPIgCAAQgJANgJAZIABADQAEALADANIgCAAQgEAbgJAXgAR5oRQgDAaAIAPIABgDQAIgagNgPIgBADgASKoMQgDAWAIAKIAAgBIAAgDIAAgYIAAgCQABgBgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAIgDABgASunvIAAgBIACAAQABgIgFgEIgBgBIgEgBQgEAQALgBgASZn3IAAAEQALgDgLgSIAAARgAQhsEQAAABgBABQAAAAAAABQAAAAAAABQAAAAAAABQAEAjgPAgQAngCAqgJIADgBIAAgBQgFAAAAgDIgCgBIAAgEQAEgFgCgKIAAgCIAGgOIABAAIAAgCQgGgGgDAIIAAACIgBACQgBAUgNAJQgBgHAGgLQAKgSgMgJIgBACQgHAkAAgfQAAgEgBgCQgNgMgPAAQgIAAgIADgAqXjKIgCgBIAughIgBAAQgDgVAegKQAJgDAHgFQAKgWALgTIABgCQgIgagNgUIgBgCIgJAJIgCgEQgDgKgGgIQADABAEgBIAHgCQAFAGAGAGIACABQARAYAFAkIAAACQgOATgMAWQgOACgKAJIgMAGIAFABIgBABQgRANAEAYIAAADIgiABQAPANAaAEIADAEIABABIADADQgegKgcgMgAptmUIABAAIAIAAQAHAEAJADIgCACQgCAIABAEQgJgNgNgIgAp7maQABgGgFAEIgJgCIAHgHIgDgBQhKgnhggSIgBgBIgBgBQghgQgSggQAOgfAwAAQAGABAJgCQBNgOAmgrQglgag1gLQgRgEgNgJQgYgQgHggQAWgPAYgOQAJgFAFgKQACgMgCgOIAAgCQAigFAJgdIAAgCQgCgLAJABIADAAQAdgEAcgFIADgBQgvgohOgIIgDAAIgCAAIgWAAIgCAAQgPACgJgEQgRACgIgFQgagOgoAAIgBACQgLAGgPACIgCgBQgPgLgTgHIgCAAQgOABgIgEIgCAAIgkgFIgCAAIgbAAIgCAAQgPABgMAEIgCAAQgqgZhAgEIgCAAIgpAAIgCAAQgsAEgtABIgCAAQgOACgIgEIgCAAQg9gJgogeIgjACIgCAAIACADIAAAAIgBAFQiXAMiZAAQgBgJAKgBQBkgGBfgPIAzAFIAEAAIgBAAIAVgCIAbgBIADAAIACAAIAdABIAAACQAVAIAUAKIACABIATABIAAABIARAAIACAAIAbAAIACAAIAHAAIADAAIARAAIACAAIARAAIACAAIAwAAIADAAIAfAAIACAAIAWAAIACAAIARAAIACAAIAMAAIBIAAIADAAIAfAAIACAAIAiAAIACAAIA4AAIACAAIAKAAIAVAAIADAAIAQAAIADAAIAaABIAAACIAKAAIACAAIAAgDIATAAIADAAIAhABIAAACIADAAIACAAIAAgDIAOAAIAFAAIApABIAAAAIAAACIDdAAIB6AAIADAAIAYAAIACAAIApAAIACAAIAkAAIADAAIAHAAIAKAAIACAAIATAAIADAAIAmAAIACAAIADAAIAkAAIACAAIAdABIAAABIAFAAIACAAIAAgCIArAAIADAAIAYAAIACAAIATABIAAABIABgBIABgBIAkACIgDAEIgRgBQgEgHgIAHIgJABIgPAFQhugEh5ACIgDAAIgCAAIgRAAIgCAAIgWAAIgCAAQgWACgRgEIgCAAIgKAAIAAABQgNADgIgEIgCAAQgKAEgPgCIgCAAQgLACgGgEIgCAAIAAABQgcADgXgEIgCAAIAAABIAAAAQgSABgSAAIgCAAIgRAAIgDAAQgugEg0ACIAAABQgUADgOgEIgCAAIhNAAIgCAAIgRAAIgCAAIgDAAIgCAAIgWAAIgCAAIgDAAIgYAAIgCAAQgXgBgPABIgDAAIgTAAIgCAAIhBAAIgDAAIgaAAIgCAAIgDAAIgCAAQgYACgRgFIgCAAQgbADgdgDIAAACQgXADgRgFIgDAAIjdAAQAWAJAfgBIADAAIATABIAAABQAkgEAmgBIADAAIAAgCIArABIAAABQA2AEAnAVIAAACQBBgIBDAKIADAAQAQALASAIIACAAQAsgPAqATQAMAGATAAIAkABIAAABQBXAHA6AkIACAAQAAAPgCAMIgBACIABACQABAGgEgBIAAAYIAAADQAJAaAHAbQABAGgDADIABADQABAQgEAKIgUAOQgYATgVAZQAPAKASAHIABACQAGARAFAVIABAAQAEAngCAtIAAADIABAEIACAAQAEARgDAWIgBAAIgBABIgEABQgBAcAaAAQACAFAEAFQgCAHACADIgIgDgAr+orIgMACIAAARIAAACIAAAFIAAACQAEAIgCAOIAAACQAFAKAAAOIAAADIAUAHQApAOAqAFIABgCIAEgKIAAgCIAAgbIgBgCQgBgDAAgEIgCAAIgBhSQAAgHgDgEIgCgCIg+AbIgTAIIAAAaIAAACIAAADQACAggJggIgCAAIgBgbIgCABgAsprPQAIATAAARIABAAQAMAMAPAHQAbAPAjABIAAgBQAJgLAFgNIAAgDIgHgkIAAgCIgBAAIgBgTIACAAIAAgDQAAgKgCgJIgBgCIgQgrIgBABQgPAKgUAFQACAbAJAZQAIAWgJgCQgBgEgCgCIgDgEQgCgMgGgFQgHgHgNANIAAACQAPAZgIAVIgBgCQgCgEABgGIgBAAIgCgTIAAgDIgEgGIgDgDIgCABIACALQADASAAAWQgGgJAAgMIgBgIQgCgOgLAAIgEAAgArJs7IAAADIAAACQgBANADAJIAAACQALAeAGAjIAAACIAAARIAAACIABAHIABABQAEAHABAJIAAADQATgEASgRIABgBIAAgCIAAgWIADAAIAAgCQACgWgMgTIgBAAQgDgIgBgJIAAgCIAAgDIgBAAIgBgVIACAAIAAgHQgLgFgRAAQgLAAgNACgAPOnVIgBgTIACAAIAAgDQABgVgDgSIAAgCQAJALADAQIAAACIgJAhIgBABgArunhQgDgFABgKQAFABACADQAFAEgIAJgAN7oUIgBAAQgBgJgFgDIAAgCQgBgggEgeIgBgBIgBgOQAGAAADADIAAACQAFAzAKAvQACAMgBAIQgCAIgGAEIAAABQgGgOADgfgAOnnpQAAAAAAgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIAAgBIAAgGIAAgKIAAgCIAAgRIAAgDQgCgJAAgMQAKAGACAVIABAQQgBAMgCAFQgCAEgDAAIgCAAgArYoFIgBAAQgBgQAAgPIgBgCQgDgDABgHQAJAEgBAPIAAACQAEAIgDANIgBABIgDAAgA4WvsIABABIAAAAIgBABIAAgCgA4LxTIAAAAIABACIgBgCg");
	this.shape_7.setTransform(-282.5,-195.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099CC").s().p("A2IQVIAAgSIAIgDQBWgjBIg5IAAAAQAXgRAVgRQASgOgEgXQAjgcAcgkIAAgBIABAAIAAgDIAAgDIAAgNIAAgBIAAAAIgBgMIgBgCIALgJIAEgDIABgBQAlgbAxgQIAAAAIADgBIAFgBIAKgEQAJgEAIgGQACgCAFgBIACgCIACgJIAAAAIAAgCIAAgPIgBgMIgBgCIAAgBIAAgCIAAgCIAAgCIAAAAIAAgGIAAgFIAAgBIAAgDIAAgDIAAgEIAAgDIAAgFIAAgDIAAgDIAAAAIAFgHIABgBIAJgIIACgCIAIgFIAJgFIAAgBIAAAAIAEgBIAMgDIAEgBQAfgJARgYIACgBIAAgdIAAgCIACgDIACgEIAHgIIAGgFIAAgBIACgBIADgDQAIgHAKgGIAGgDIABgBIABAAIAAgBQAGgDAEgHIgBgEIAAAAIAAgCIgBgFIgDgEQgDgDgEgCIAAgBIgBgDIAAgBIgCgMQgCgMgDgMIgCgFIAAgBIAAgBIAAgCIABAAIABgBIAAAAIANgHIAEgCIABAAIANgHIABAAQAagLAfgHIADgBQAOgVATgSIAAgBIgCgLIAAAAIAAgBIAAgCIgLhDQgCgNgHgKQALgZgBglIAAgCQgJgKgGgLQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAMg2gSgjIgBgCQARg2gcghIgBgBQACgsAFgqIAAgCIABgBQADgOgEgKIAAgCIgEgpIAAAAIACAAIgCgCIABgGIABgGIgFgHIgEAAIgNgCQgIgCgIgFQgHgEgFgFIgDgDIgBgCIgDgDQgFgIgCgKIAAgDQgEgYARgOIAAAAIgEgCIALgGQAKgIAPgDQAMgVAOgUIAAgBQgFglgSgXIgBgCQgHgFgFgGQgFgIgEgIIgDgBQgJgDgHgEQgKgFgGgHQgDgFgDgFQgZAAAAgcIAFgBIABgCIAAAAQADgVgDgRIgCAAIgBgFIAAgCQACgtgFgnIgBAAQgEgVgHgRIAAgCQgSgHgPgLQAUgYAZgTIAUgPQAEgKgBgQIgBgCQADgDgBgGQgIgbgIgaIAAgDIAAgYQAEAAgCgFIAAgCIAAgCQADgMAAgPIgDAAQg6gkhWgHIAAgCIgkAAQgTAAgMgHQgqgSgtAPIgCAAQgRgJgRgKIgCAAQhDgKhBAHIgBgBQgmgVg3gEIAAgCIgrgBIAAADIgCAAQgmABgkADIAAAAIgTgBIgDAAQgfABgWgJIDdAAIACAAQASAFAXgEIAAgBQAcADAcgDIACAAQARAFAYgDIACAAIACAAIADAAIAaAAIADAAIBBAAIACAAIATAAIADAAQAPgBAXABIACAAIAYAAIACAAIADAAIAWAAIACAAIACAAIADAAIAQAAIADAAIBNAAIACAAQAOAFATgEIABgBQA0gBAuAEIACAAIARAAIADAAQASAAARgCIABAAIACgBQAXAFAbgEIADgBQAGAFALgCIACAAQAPABAJgDIADgBQAHAFAOgEIAAgBIAJAAIADAAQAQAFAXgCIACAAIAVAAIADAAIAQAAIADAAIACAAQB6gCBtAEIAPgGIAKAAIAMgBIARABIATAEIAJACIAEgFIBZAAIACAAIAWAAIACAAIATAAIADAAQAYgBASAEIACAAIAJADIAAgDIAAgDIBCAAIACAAIBGAAIACAAIATAAIADAAIAWAAIACAAIAaAAIADAAIADAAIATAAIACAAIClAAIADAAQAbAFAhgEIAAgBIADAAIACAAQAZAFAegCIACAAIAFAAIACAAIAZAAIACAAIAYAAIADAAIASgCIAAgBIAGAAIACAAQATAFAagEIABgBIAkAAIABAAQAKAFAPgEIAAgBIAXAAIADAAQAIAFANgEIAAgBIADAAQALAFASgEIAAgBIAOAAIACAAQAMAFASgEIAAgBIARAAIACAAQAZAFAegCIACAAIARAAIACAAIADAAIADAAIAcAAIACAAIARAAIACAAIAUAAIADAAIEJAAIAkAAIADAAQAMAAAMgCIAAgBIADAAQAbgBAXAEIgDABQgUAJgGAaIgCAAQg5AFgcAjIABADQADAfgGAUIAAABQg1AQhBAEIAAgBQgKgBgLgBIAAADIgDAAIg5ADIAAgCQgMgBgMAAIgDAAQhEADhAAJIgCAAIgTAAIgBADIgBAAQgXAAgSAEIgCABQgIALgEAOIAAADQAHAlgWAeIgCAAQgOAEgPABIgDAAIgRAAIgEAAIgMgBQhcgIhDAhIAAADIAGB6IgCAAIgJAYQgCAjAHAZIAAADQAeAEAQAQIAIAGIAVAAIADAAQAJAIATgBIACAAQADAXAKAPQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQAWAEASALQAGAEAAALQAWASAlABIADAAIAOAeIAAACQAYAKAQASIABAAQgLAJgNAHIAAACQABAdgQAXIgCAAIABACQAnALABAsIAAAGIAAADQgDATgOAOIgEACIgBABQgQAOgRACIgGAHQgFAEgHACIgIACIgNABIgDAAIAJADIgDAAQhDAOgyAdIAAACQARAOAPAOIACACIAEAEIgBACQgmAggfAlIAAACIABAEIAAADIACAIIAAACIADANIAAABQAKBHgEBHIAAADIAAAQIAAADIAAADQgBAOgDAMIAAACQAOAsgWAmQACATgCAJIAAADIgCAAQgJAAgFAKIgBACIgBAGIAAAAIgBADIAAAEIAAAAIACAIIADAGQAGAHAKADQAGACAHgBIABAAIABAAIACAEIACADIABABIAGAIIAFAEIABACIAAAMIAAACIAAAFIAAAIIAAACQACAGADAFIAAABIAFAFQAEAEAFACIACABQABAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBQABgCgFgFIAAAAIgCgBIgBgBIgFgDIgBgCIgBgIIAAgBIgBgIIAAgCIAAgGIAAgEIAAgCIAAgFIAAgBIABgCIgJgIIAAAAIgKgLIgBgCIgKgEIAAAAIgIgDIgCgBIgCgBIgIgEIgDgCIgBgBIAAAAIAAgBIAAgFIAAgBQgBgMAKgKIABAAQAEANAGAMIAFAJIACABIAAgCQgBgEAFABQAOARASALIAAACIABADIABAEQACAJABAKIAAADIAAABIAAABIAAABIAAABIAAABIAAACIAAADIAAAGIgBADIABAAIAAAAIAOAIIAVAKQAWAJAZAIIAZAHIABAAIAAAAIADABIADABIACAAIACABIABAAIACAAIACAAIAAAAQAbAGAdAEIADAAIABAAQAfAFAZAMQALAUAXAIQAIADAJACQAgAEAZAOIADABIALgBIABAAIAFgBIADAAIAEADIABAAIANAHIAJAEIABAAQAYAMAaAJQAOAFANAIIAkAAIADAAQAXAOAfAHIAHAHQBWAGBXAKQBQAJBKgWIAAgDIAGAAIAAGFgAvGMhQgQAWgUAQIAAABQAbgFALgjIgCABgAusKlIAAAGIAAAAIAAAJIAAADIgEADIgCADQgHADgEAEIgDAEIgBABQgCAEgBAFQAAAEACAFIgBACQgIAPgMALIgBACIgCADIgDACQgKAKgNAIQALAEASgNIAAAAIACgBIADgCIABgBQAUgSAAgdIASgXIABgBQAEgDABgHIAAgCIAAgDIAAgBIAAAAIAAgGQgBgFgEgCIgCAAIAAAGgAvrLLIAAABIgMAHIgBABIgDACQgXAOgcAKQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIABACQAJAQgaAHIAAABQAfAEgDgfQAIgJAOgEQANgCALgFIAGgDIAGgDIAAAAQAIgFAGgGQAHgGAFgHIADgFQAFgIAEgKIAAAAIACgEIAAAAIABgDIACgLIAAgDIAAAAQgCgEgEgCIgGgDIgEgBIgBAAIABACIADADQAFAFAAALIgBAFIAAABIgBADIAAAAIgBAGIgJAIIgBABIgEACIgTAQIAAAAIgEADgAuNKwQAAABABABQAAAAABABQAAAAAAAAQABAAAAAAQACgBACgHIAAgCIAAgDQAHgJgJgFIAAAOIAAACIAAABIgBAAQAAAGgEABgARIJwIAAACQAHACAIACIACAAQAGAAAEACIACAAQAGAFALABIADAAIATAQIACAAQAXAKgQgOIgDgBIgCAAQgJgGgIgIIgCAAIgVgFIgDgBIgDgBIAAgBIgQgEIgDgBIgHgCIgDgBIAAAAIgPgEIgUgGIgCgBIgEgCIgBAAIgGgDIgDgCQgJgHgHgKIgCAAIgigJIAAAAIgBgBIgQgEIgTgEIgCgBIgigRIgEgFQgKgNgVgDQgfgGgegIIgCgBIgCAAIgCAAIgCgBIgDgBIgdgIIgBAAIgvgQQAhAUApAMIAEACIACAAIACABIAaAGIACAAQAGAEALgBIACAAIAnAJIADAAIAJALIACABQANALATAFIACABQAgAMAjAHIADAAQAIALAMAIIADACIAGADIAAAAIAAAAIABAAQALAGAOADQAJADALABIABAAIAAAAgAPkJpIBFAZIAAgCQgMgIgMgFIgEgCIgFgCQgRgGgUgBIABABgAtGHvQgGACgFAEIAAACQgEAEAAADQAAAFAJADIABAAQgBASgIANQgOAWgiAGQAFAHAHABQAHAAAIgGIAPgKQAJgGAGgIIADgFQAGgMACgQQgMgKAGgHIABgCQAMgDAJgGIAAAAIAGgFIAAgBIABAAIACgCIAAgBIAEgGIACAAQAFgDACgHIAAgCIABAAQADgLgEgGQgDgGgJgBQAFAGACAJIABACIgBACQgCAEgFADIAAADIAAACIgHAGIgCACIAAAAIAAABIgKAJIgBAAIgCACIgCAAIgIABgAq0EoIAFAEIABACIAAACIAAAKIAAAKIAAABIAAAGIAAAAIAAAFIAAABIAAAGIAAABIgBABIgGAOIgCAAIgjAYIgBABIgBAAIgVANIgCABQgDAKAMAIIAAADIgBADIAAAAIAAAEIAAABQgFAbgOATQgGAIgHAHIAAADIgCABQgEAFgHAEIAAACIAAACIAAAGQAAAAABABQAAAAAAAAQAAABABAAQAAAAABAAIAAACQABAJACAAQABAAADgJIAAgDIAAgCIAAgFIAAgCIAHgIIAAgBQAKgJAHgKIAHgNIABgCIAHgRIAEgUIAAgBIAAgBIAAgBIAAgBIAAgFIgBgBIgCAAQgHgFAEgHIACgBIAPgJIABAAQAUgMARgPIAHgHIACAAIACgLIAAgDIABgCIAAAAIAAgCIAAgBIAAgBIAAgJIAAgBIAAgEIAAgCIAAgCIAAgBQABgLgEgFIAAgDQgDgEgEgCQgFgDgHgBIAIAHgAKFG2IgBgCQgKgOgIgSIgFgOIgCgBIgLgJIgDgEIAAgCQAGgFAEgGIADgGIAAgBIAAAAIACgEIAAAAIAAAAQADgHABgHIAAgCIgJAOIgHgFQAOglgPAWIAAAOQAAAFABgEIAGAGQgIALgJAJIABADIACAGQAFAMANAFIABADQAGAfAUAHIAAAAgAstF/IAAACQARAPgKATIAAABQAWgMgRgSQgGgIANgDIAHgBIABAAQAXgGATgJIABgBQAQgIANgKIAHgGIAAgDIAFgHIADgHIAAgBIAAAAQACgGAAgHIgBgFIgBgBIgGgGIAAAAIgBAAIgEgEIAAAAIgDgCIAAACIAAAAIAAAAIABABIAFAHIAAABIAAACIgCALIAAAAQgCAKgGAMIgCAAIgMAJIgOAJQgVANgZAJIAAAAIgWAIgAJOA8IAAAAIAAgBgAJ8ApIACgBIgDAAgAJrAcIABABIABgBIgCAAgAI1ghIAAgBIAAAAgAI5ucIAAABIACgBIgCAAg");
	this.shape_8.setTransform(-262,-187.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AzJRSQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBQAugoA/gVIAKgFQAIgTAWgHIAOgGIANACQAggUAYgeIAAgCIgQg+IAAgDIgCAAQgDgHAAgJIAAgDQgDgSgGgPQgGgQgJgNIgBgCIgCgJIgBgBIgCgGQgEgOgCgQIgBAAIgCgKIAAgBIgCgGIgBAAIAAAAIgBgSIAAgBIgCAAIAAgBIAAgEIAAgBIAAgBIAAgFIAAAAIAAgCIAAAAIAAgBIgBgCIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIgDgLIAAAAIAAgBIAAAAIAAAAIgCgEIAEADIAAABIABABQADAEACAFIAAABIAAAAIABABIAAAAIAAABIAAAAIAAAAIAAABIAAAAIAAACIABAAIAAABIAAABIAAABIAAAAIAAABIAAACIABAEIAAACIgBACIAAACQAEACABAFQACAEgCAGIAAADIABACIABAGIAAAAQABAGADAEIABABIAAARIAAABIAAABIAFAJIACAFIAAABIAFAKIAGAOIAGAQIAMAlIABAGIADALIAIAlQAAADADACIAAAAQAkgXAZgiIABAAIAAgCIgBgNIAAgCIgBgBIAAgBIgBgHIgCgBIAAADIABAFIAAAAIAAACIAAADQAAABgBABQAAAAAAABQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgBgEIgBgCIgDgMIgHgWIgEgKIAAgCQgEgGgCgJIAAAAIAAAAIAAgBIgBgLIAAgBIAAgLIgBAAIgBgPIAAgEIAAgCQgCgZgEgXIAAgCIgDgQIAAgBQgEgTgGgRIgIgWIAAACIAAADQAEAFgBAMIAAAAIAAACIAAAmIAAADQgCAGAEACIAAABIADAHIAAABIACAJIAAADQABAOADAMIABACQACAEABAFIgBALIAAACIAAACIABAIIAAAFIAAABIAAAAQAAABgBAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIAAgCIgCgDIAAgCIgCgGIgBAAIgBgNIAAgBIAAgHIgBgCIgBgDIAAgDIgBgEIAAgMIgBgBIgBgEIgBgBIgCgIIgBgDIAAAAIgDgMIgBAAIAAgBIAAgGIgBgDIAAAAIAAgCIAAgMIAAgKIAAgBIgBgNIAAgCQgCglgKgcIAIgxIAAgBIAGguIABAAQAGANgFAbQgJA1ATAlQAOAbAFAmIAAABIAAAAIABARIAAAAQAGAHADAIQALAYgFApIgBACQAKAQAGATIAAABIABACIABAGIABABIACAJIAAABIABAAIADgCIAFgEIACgBIAAAAIAAAAIADgDIABAAIAAgBQAfgWAngQIAAgBIARAAIACAAQATgNAPgSIACAAIAAgVIAAgKIAAgDIAAgHIAAAAIAAgBIAAgBIgBgDIAAgCIAAgDIAAAAIAAgKIAAAAIgBgHIAAAAIAAgDIAAgFIgBgHIAAgBIAAgFIgDAAIgBgFIAAgCIAAAAIgBgDIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIAAgBIgBgEIAAgCIgBAAIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAAAIgBgCIADABIACABIAAABIABABIAAABIAAAAIAAACIAAAAIABAAIAAgBIAAgBIAAAAIAAgBIgBgEIgBgDIAAAAIgBAAIAAgCIgCgGIgCgDIgCgBIAAAAIgCgCIgGgFIgBgBIAAAAIgCgCIAAAAIgBgBIgBgBIAAAAIgBgBIAAAAIAAAAIgBgBIAAgCIAAgLIAAgIIAAgDIAAgCIAAgBIAAgEIAAgCIAAgDIAAgGIAAAAIAAgBIAAgOIAAgPIAAgHIAEgUIACgNIAAgCIABAAIAAgBIABAAIABAEQAGARgBAWIgBAKIgBAPIgBATIgBAPIAAALIACACIABAAIABACQAJAIAGALIAAAAIADAEIACAFIADAGIACAFIABABIAAACIAAAAIABABIAAAAIAAACIABACIAAAAIAAAAIAAABIABABIAAABIABACIAAABIAAAAIAKABIABAAIAAAAIADgBIAAAAIABAAIAAAAIAFgCIADgBIABAAIAAgBIABAAIAAAAIABAAIAFgDIAFgCIAEgCQAcgOARgZQAFgIgEgLIgCABIgBgBIAAgBIAAgBIgHgWIgCgJIgFgbIgBAAIAAgCIAAgGIgBgmIgBgCIAAgCQgCgJAAgMIAAgBIAAgCIABABIABABIAAABQAFAKADANIAAACQADAMAAAPIgBAOIAAADIAAABQACAOADALIAAACIAAAAIACAEIABABQABAFgBAHIAAADQADAEAAAIIABAAIADgJIABgCQACgFAEgDIAEgDIAFgDIAAAAIADgCIABgBIABgBIADgCIABgBIABAAIAVgSIABgBIABgBIAEgEIAAAAQgFgLgDgLIAAgBIgCgHQgEgOgBgPIgBgGIAAgDIAAgBIAAgBIAAgLIAAgBIAAgCIAAgBIAAgEIAAgBIAAgDIAAAAIAAgCIAAgDIAAgIIAAgDIAAgBIAAgBIAAgBIABgbIAAAAIAAgJQgCg0gSghIgCgEIgHgKIAAgCQABgVgKgBIgBAAQACgwgNgfIgBAAIgCgTIADAAIAAgCQAGgOgBgUIgCgBQgUglgKguQgNAPgQAOIgTAOQgPALgTAFIg4AOIg2AMIgJABIgBACIgIAGQgJAGgLADQAGACABAFIAAADIAAAWIAAAJIAAACIAAANIAAAOIAAACQAFAGADAHQADAIABAKIAAAHIAAADIAAACIAAADIAAAMIAAACIAAACIAAAXIAAABIACABIADAHQAGAPgBANIgCAAQgHgNgFgPIgCgIQgFgYABgfIABgJIgCgBIgBgFQgCgIgFgGIAAgBIAAgBIAAgBIABgTIAAgFIgCgOQgBgIgDgGIgRARIgoApQgHAIgFABIAAAAIgBACIAAAGQAMAAALAEIABAAIAAABIAPAEQgKANgGAQIgBACIAAARIAAADIAAACIAAADQAAAVgSACIABgDIACgBQAGgCgBgGIgBgFIAEgjIgNAAIgBAAIgIABIgQAFQAAAFACACIAAABIAAAXIgHABQACgPgFgOIgDgBIgDACIgpAiIgEAFIALACIABAGIgBAAIAAALIAAAFIAAABIAAACIABADIgBAJIAAAMIAAAAIAAADQABALgCAIIgCAHIgBgHQgCgMgJgEIAAgBIAFgQIABgFQgIAHgLADIgJAEQgEAFgGAEIgFAEQgFAGgDAHIgDgBIgEABIgCACIABgDIgmAbIAgADIgBAJIgBAAIgCAAIAAAAIgCABIAAADIAAAAIAAAAIAAAAIAAABIABABIAAAEIAAABIAAABIAAABIAAAAIAAADIAAAAIABABIAAAAIAAACIAAACIAAABIAAACIAAAAIAAABIAAACIABAAIAAABIAAABIAAACIAAAAIAAABIABACIAAABIAAABIAAABIAAABIAAABIACAHIAAABIAAABIABAAIAAABIAAABIAAABIABABIAAABIAAABIABAAIAAAIIAAAGIAAAAQAAAIgCgHIgBgBIAAAAIgBgCIAAgBIAAgBIAAgBIgBgCIgBgFIgBgBIAAgBIAAgCIAAAAIAAgBIgBAAIAAgBIAAgBIAAgBIAAAAIgBgCIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIgBgCIAAAAIAAgCIAAgCIAAgBIAAAAIAAgBIAAgBIgBAAIAAgBIAAgBIgBAAIAAgDIAAgBIAAAAIAAAAIAAgCIAAAAIAAgBIgBgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIgBAAIAAAAIABAAIgBgBIAAAAIAAgBIgBAAIAAABIAAABIAAAFIABAAIAAABIAAABIAAAAIAAABIAAACIAAAAIAAABIAAABIAAACIABABIAAACIAAAAIAAADIAAABIAAACIAAABIAAABIABABIAAADIAAABIAAABIAAABIAAACIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIABACIAAAGIAAABIAAABIABADIAAATIgBAOIgBAAIAAADIgBAKIAAABQgCAQgFAOQACAOAEALIADAGIAAAAIAAABIAHAJIABABIABABIABACIABABIAAABIAAAAIAAABIABABIAAABIAAABIABAFIAAAAIAAABQACAEABAEIAAALIgBADIAAAFIAAACIAAAYIAAAAIAAACIAEAIIAIAMIAAAAIADAFIADAEIAAAAIABABIAAAAIAAABIAAAAIABABIABABIADAEIAAACIADAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIABAAIAAgDIAAgCIABgBIAAAAIACgBIABAAIABAAIABAAIABABIABABIABABIABAEIABADIAAALQABADgCAJQAEAJgDAPIgBAAIAAACQABAGgEgBIAAADIAAAhIAAADIACAAIADAaIgBAAQgJgVgLgRIAAgDQACg0gHgpIgCgBIgUgVIAAgCQgBglgEghIAAAAIAAgCIgBgFIAAgBIAAgBIgBgDIAAAAIgBAAIgBAAIgEgHIAAAAIgBgBIgEgFIgEgFIgEgEIABgLIAAgEIAAgBIADgbIAAgCIAEgeIAAgBIAAgBIAAgMIAAgEIAAgFIAAgBIAAgBIAAgBIAAgBIAAgBIgBgDIAAgDIAAAAIAAgCIAAgBIAAgCIAAgCIgBgBIAAAAIAAgCIAAgBIAAAAIAAgCIgBAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIgBAAIAAgCIAAAAIAAAAIAAgBIAAAAIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAAAIAAgBIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIgBgBIAAgBIgBgBIAAgBIAAAAIAAAAIAAgBIgCAAIAAAAIACAAIAAAAIAAAAIgCAAIAAgBIACAAIgBAAIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAAAIAAAAIgBgBIAAAAIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAABIAAAEIgFAAIAAgCIAAAAIAAAAIgBAAIAAgBIAAAAIAAgBIAAgBIAAAAIgBgBQgBgDgCgCIgLADIABABIAAABIAAABIABABIAAAAIAAAAIAAAAIABABIAAAAIAAABIAAAAIAAAAIAAABIAAAAIgFACIAFgCIABABIAAAAIAAABIAAABIAAAAIAAABIgBAAIgCAAIgBAAIgBAAIgCAAIgCAAIAAAAIgBAAIABAAIALAAIABAAIABABIgBgBIAEAAIAAABIAAAAIAEAAIAAAAIgFAAIAAAAIgBAAIgBAAIAAAAIgBAAIgBAAIAAgBIAAABIgCAAIAAAAIABAAIAAAEIgBABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAFIAAAAIAAACIgBAAIAAABIAAAAIAAAAIAAABIAAAAIgBAAIAAABIgBAAIgBgBIAAgBIAAAAIAAAAIgBgBIAAAAIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIgBAAIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIAAAAIAAgBIgBAAIAAAAIgBAAIAAgBIAAAAIAAgFIAAAAIAAgDIAAAAIAAgBIgFAAIgBAAIABAAIgFAAIAAABIAAABIAAAAIgBAAIABAAIgCABIgFABIAAgBIAAgBIAAAAIAAgBIAAgBIgBgBIAAAAIgBABIAAAAIAAABIAAgBIgBAAIgBgBIgGABIAAAAIAAAAIAAAAIAAACIAAABIAAAAIAAABIABAAIAAABIAAAAIAAAAIAAABIABAAIAAABIAAAAIAAACIAAAAIAAACIAAAAIAAAEIgBAAIgCABIADAAIAAAAIAAAAIAAACIAAABIAAACIAAAAIgBABIAAAAIAAAAIAAAAIgBAAIAAABIgBAAIAAAAIgBAAIAAgBIgBgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgCIAAgBIAAAAIAAgCIAAAAIAAgBIgBAAIAAgBIgBgCIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAIgBIAAAAIAAgBIABAAIADgBIAAAAIABAAIABAAIABgBIABAAIAAABIAAAAIAAgDIgJABIAAABIABAAIAAABIgBAAIAAAAIgDABIgBAAIAAAAIgDAAIAAgCIAAAAIABAAIAAgBIAAABIgBAAIAAgBIgHABIgFADIABAAIAAABIAAAAIABABIAAABIAAACIABABIAAAAIABAEIAAADIAAABIABABIAAAAIAAABIAAABIAAAAIAAACIAAABIAAABIgBAAIAAACIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIgBABIAAAAIgBAAIgCAAIgBgBIAAAAIgBgBIAAAAIAAAAIAAgBIAAgBIgBgBIAAgBIAAgBIgBAAIAAgCIAAgEIgBgFIAAgHIgFADIAAAJIgBAFIAAABIAAACIgBABIgBACIAAAAIAAABIAAAAIgBACIgBABIAAAAIAAAAIgBAAIAAAAIgBgCIAAgBIAAgGIgDAAIgCAAIABAHIAAAAIAAADIABABIAAAAIAAABIAAAEIABAGIAAABIAAACIAAAAIABAJIAAAAIAAABIABADIABAQIABAJIAAACIAAACQACASgEALIAAADQAFASACASIABAHIAAACIABACIAAAFIAAAAIAAAUQgBAkgNAkQAJAWAHAYQAJAdgGAVIgBgBQgMg1gQgyQAMgjABgpIABgDIAAAAIAAgLQAAgbgFgYQgBgKAAgJIAAgDIAAgfIAAgCIAAgBIgBgMIAAAAIgBgJIgBgEIgBgBIgBgDIAAgBIAAAAIAAgBIgCABIgIADQgyARg0AQIgPAEIgCAAIAAAGQgEAUgQAIIgHABIgBABQgsAXgvgKQg2gLg4AFIgbABQg6AAg6gDQACgEABAAQBPADBEgXQBTgBBOAJQADABAEgCIAWACQAMgFAJgHIABgCIAAAAIADgVIABAAIAVgEQAqgJAjgPIAFAAQAHAAAFgGIAIgHIAGgCIgBgCQAGgIAKgHIANgHIALgDQAUgEAVgCIAEgBQAPgEANgHQACgEAEgCQAYgWAcgQIABgBIAAgBIABgBIAAAAIAAAAIAJgEQAQgFAMgLIAAgBIgCgGQgCgGgGgCQgHgCgIgBIABgCIAHgDIACgCIAQgSQARgRAUgOIADABIAJABQACgDAEAAIAGgBQAJgFAKACQAKABAJgFIABAAQABgDAAgFQAAgEgDgDIgDgDIgCAAIgDAAIgSgCIgFABIgCgBIgBAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAABIAAgBIAAgBIAAgBIABgDIACgBQAAgDACgDIgBgEIAAgCIABgBIACAAIADACIAAAAQAdgWASgaIAFgJIABgCQAPgIgDgLIAAgCQAbgSAlgKIAAAAQAcgHAhgCIAJgBIAKgDIAPgGQAcgMAVgSQATgQAPgVQADgEgFgFQgLgIABgJIAAgCIAkgZIA4gpIACAAQgRgTgSgSIgBgCQASgXAigJQAdgIASgTIAMACIACAHQACAEAEACIgBAGIACACIgCAAIAAABIAEAoIAAADQAFAJgDAOIgCABIAAACQgFAqgCArIACABQAbAhgRA3IABACQASAjgMA2QABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAHAMAIAJIAAACQABAlgKAaQAGAKACAMIALBEIAAABIAAABIAAAAIACALIAAACQgSASgPAVIgDAAQgeAHgbALIAAABIgOAGIgBAAIgDACIgOAIIAAAAIgBAAIgBABIAAACIAAAAIABABIABAFQAEAMACANIACAMIAAAAIAAADIAAABQAFACACADIADAEIABAGIABABIAAABIAAADQgEAIgGADIAAAAIgBABIgBAAIgFADQgKAGgJAIIgDACIgBACIgBAAIgFAGIgHAIIgDADIgCADIAAADIAAAcIgCABQgQAZggAJIgEABIgMACIgEABIAAAAIAAABIgJAFIgHAGIgDABIgJAJIgBABIgEAGIAAABIAAACIAAAEIAAAFIAAACIAAAFIAAADIAAACIAAACIAAAFIAAAFIAAABIAAACIAAABIAAACIAAABIAAACIACANIAAAPIgBABIAAABIgBAJIgDABQgEABgDACQgIAGgJAEIgKAEIgFACIgCABIgBAAQgxAQglAbIgBAAIgDADIgMAJIABADIABALIAAAAIAAACIABAMIAAADIAAADIgBABIgBAAQgbAkgkAcQAEAXgRAOQgWARgXARIABAAQhIA5hXAjIgIAEQgHAAgHgCgAsFKRIAAABIAAAAIABACIAAAAIABAAIABAAIAAAAIABAAIgEgDgAp9g5QgwAcgoAiQAFAHAHAHIACAAQAFBCAWAvQAGAMgDAKQgDAKgBALQALAbAFAjIADACIABADQAEAMgCARIAAADQADALAHAHIACABQAHATAAAaIAAADQAEAJgBAPIAAACQABATAHAOIABABQABAOgBALIAAABIgBAHIAAACIgCAIIgBAFIgBACIAHgDIAFgDIABgBIALgFIABAAQAZgLAegFIACgBQANgQAPgPIABgCQgEgYABgfQABghgPgSQAHgdAFgfIAAgCQgKgLgIgNIgBAAQAEgpgCgkIAAgCQgHgFgDgJIgCgBQAMgggGglQgCgMgNgDQgDgCAAgFIAAgCQAShPgRhOIgBgBQgKABgQAHIAAACIACADIAAACQAEAJgBAPIAAACQACAMAAAOIAAADIAAACQADAjgIggIAAgDIgCgaIgBAAQgCgNAAgOIAAgCIAAgEIAAgBIgCABQgKACgIAEIgBAAIgCABQgBAEgHgCIAAAHIAAACIAAAUIAAACIAWBfIAAACQAEgEgCgLIAAgDIgBAAIgBgOIgBAAQgCgNAAgOIAAgCIgBAAIgBgYIAAgCIgDgbIgCgOIAEALQAIAbADAgIAAACQAEAMgCATIAAACIAAADIAAACQAEAHgBAMIgBACIADAIIAAADIAAAGIAAACIAAAdIAAACQAEAHgDAMIgBAAQAAAUACATIAAACQAIAFABAOIABAAQAEAVgCAbIAAADIABACQADAKgBAOIABABQAKARgCAQIgBgBQgRgWgDgjIgCAAIgBgwIAAgCQgEgMgFgKIAAgCQABgMgEgHIgBAAIgBgUIACAAIAAgCQgDgWABgaIgBgCQgSgjgIguIAAACgAzQG+IAAAAIAAAAIABAAIAAgBgAzZG+IAAAAIAHAAIABAAIABAAIAAgBIgCAAIAAABIgCAAIACgBgAzqG+IAAgBIAAAAIADAAIACAAIABAAIAEAAIAAgBIAAgBIAAAAIgBgBIAAgCIAAAAIgBAAIgBABIgBAAIgCAAIgBAAIgCAAIAAAAIAAABIgBABIAAABIAAAAIAAABIAAABgAzRGzIgIABIAAABIAAABIAAAHIAKAAIAAgEIgBgBIAAgEIAAgBIgBAAgAyiG6IgEABIgMABIASgCIgCAAIACAAIgDAAIgHABIAHgBgAytG6IADAAIgBAAgAygG6IAGAAIABgBIgBAAIgCAAIgBAAgAqGh3IAAACQgCAYAJAMIACgCIABgJQACgbgMAAIAAAAgAsdOXQAUgQAQgWIACAAQgLAigbAFgAsnNgQANgIAKgKIADgCIADgDIABgBQALgMAJgPIAAgCQgBgFAAgEQAAgFADgEIAAAAIAEgFQAEgEAGgDIACgDIAEgDIAAgCIAAgJIAAgBIAAgFIAAgHIACAAQAEADABAEIAAAGIAAABIAAABIAAACIAAACQAAAHgFADIgBABIgSAXQABAegVASIgBABIgCABIgCACIgBAAQgNAJgKAAIgGgBgAtvNcIAAgBQAbgHgKgQIgBgCQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAcgKAYgOIACgCIABAAIAMgIIAAAAIAEgDIAAAAIAUgQIADgDIABgBIAJgHIACgGIAAgBIABgDIAAAAIAAgGQABgKgGgGIgDgDIAAgBIABAAIADABIAGACQAEACACAEIAAAAIABADIgDALIgBADIAAABIgBADIgBAAQgDAKgFAIIgEAFQgFAIgHAGQgGAFgHAFIgBAAIgGAEIgGACQgLAFgNADQgOADgHAJQACAcgYAAIgHgBgAwfMiIgBgBIgCgHQgJgWgFgYIgBgEIAAgBIAAgBIgDAAIAAABIAAANIAAACIABADQAFAQgDADIgCAAIgKgnIgDgKIAAgBIAAAAIgBgBIAAAAIAAgBIAAgBIAAAAIAAgBIgBgBIAAgCIgBgBIAAAAIAAAAIAAgBIAAAAIAAAAIAAgBIgCgEIAAgBIAAgBIgBgBIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIgBgDIgEgKIgCAAIAAABIAAABIABAIIABABIAAACIAAABIAAACIAAABIAAABIAAABIAAAAIAAACIAAABIACAFIAAAAIAAABIABABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAFIAAAAIAAADIAAAAIgBABQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBIAAgBIgBAAIAAgDIgBgBIAAAAIAAgCIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgBIAAgCIgBgBIAAgBIAAgDIAAgCIAAgBIAAgBIAAgBIgBAAIAAgBIgBgBIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAgBIgBgDIgBgDIAAAAIAAAAIgBgEIgBgBIAAgBIAAgBIAAAAIgBgCIgBgCIgBgCIAAgBIgBgDIgCgHIgBAAIgEgNIgBgBIAAgCIAAgBIgBgCIgBgCIgBgCIAAgCIgBgBIAAgBIAAAAIgBgCIACADIAHALIAAAAIABABIAAAAIAMATIAAACIACgCIAAgCIAAgDIAAgFIAHAOIABADIABABIAAABIAAAAIAAABIABAAIAAABIACAGIABABIACAEIAAACIABABIAAAAIAAABIABABIAAAAIAAAAIAAABIABABIAAABIAAABIABABIAAABIAAAAIAAABIABABIAAABIAAAAIACAEIAAACIAAAAIABAAIAAABIAAAAIAAABIAAAAIABABIACAIIABACIACAAIAAgCIAAgJIAAgBIAAgCIgBAAIAAgCIAAgBIAAgEIgBgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAEAAIAAAAIABABIAAABIAAABIAAACIAAAAIAAABIAAABIAAABIACAGIAAABIAAAAIABACIAAACIAAABIABAAIAAABIAAABIACAHIACAJIAAABIAFARIAAAAIAGAeIAAABIABAFIABABIAAACIABAHIABACIAAAAIAAAEIABACIgGgOgArAMAQAEgBAAgGIABAAIAAAAIAAgDIAAgOQAJAFgGAKIgBACIAAACQgCAHgBABIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBgBgBgAZ4LwQhWgKhXgFIgHgHQgegIgYgOIgDAAIgkAAQgNgIgOgFQgagJgYgLIAAAAIgJgFIgOgHIAAAAIgFgDIgDAAIgFABIAAAAIgMABIgCgBQgZgNghgFQgJgBgIgDQgXgIgKgVQgagMgfgEIgBAAIgCgBQgdgDgbgGIgBAAIgCAAIgBgBIgCAAIgCgBIgBAAIgDgBIgDgBIgBAAIAAAAIgagHQgYgHgWgKIgVgKIgOgIIgBAAIAAAAIAAgDIABgGIAAgCIgBgDIAAgBIAAAAIAAgCIAAAAIAAgCIAAgCQAAgKgDgJIgBgEIgBgEIAAgCQgSgLgNgQQgFgCAAAEIAAADIgCgCIgEgJQgHgMgEgNIgBAAQgJALAAAMIAAAAIABAFIAAABIAAABIAAAAIAEACIAHAEIACABIACABIAIAEIABAAIAJADIABACIALALIAAAAIAIAJIAAACIgBAAIAAAFIAAACIAAAEIAAAGIAAACIABAIIAAABIACAIIAAACIAFADIACABIABABIABABQAFAEgBADQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgDAAQgFgDgEgEIgEgFIgBgBQgDgEgCgHIAAgCIAAgIIAAgFIAAgCIAAgMIgBgBIgEgFIgHgIIgBgBIgCgDIgCgDIgBAAIgBAAQgHAAgGgCQgKgCgFgIIgDgGIgCgIIAAAAIgBgDIABgEIAAAAIACgFIABgDQAEgKAJAAIACAAIAAgCQACgKgCgTQAXgmgPgsIAAgCQADgMABgOIAAgDIAAgCIAAgRIAAgCQAEhIgKhHIAAgBIgCgNIgBgBIgBgJIAAgCIgBgFIgBgCQAggmAlggIABgCIgEgDIgCgCQgPgOgRgOIAAgCQAygdBDgNIADgBIgIgCIACgBIANgBIAJgBIgJAHIgCABQgUAOgfAFQggAGgZAPIgDADIgFACIACABIAIAFIAGAEQAMAIAIAMQABAHgDADQgjAegeAjIABACIABAAQAQANgQgHIAAABQAZAqAiAgQANALAIAQQgFAxgYAdIAAABQAhAaAwAKQAHABAFADIAJAJIAAAAIADAHQgBAPADAJIABACQALAPAOALIAFAEIABABIARAAIAJAAIADAAIAAgCQAMAAAMABIAAABIArAAIACAAIAbABIAAACIBFAHIADAAQAhAjBLgGIACAAIAiABIAAABQAUAPAcAEQAdAFATAMIACgBIABgBQBhASBlACIAPABQA1ADA2ABIACAEIAAAEQiKAEiKgRQgcgDgYgKIAAgDIAAAAQg3gIgpgXIgCAAIgYAAIgCAAQgOACgIgEIgCAAQglABgagLIgBAAQAAAKgEAFIAAAMIAAACIAAAfIAAADIAAACQACAPgEAJIgBACIgEADQgGACABgVIAAgDIAAgRIAAgCIAAgRIADAAIAAgCIAAgWIAFgOIACAAIAAgDIgCAAQgKgFgHgJIgBAAIgCAAQhYgOhjAHIgJgGIgDgCIgCgBIgNgJQgWgQgBgkIgBgBQgngWgvgNIAAADQgUA7AZAuIAAADIAAAkIgBAAQgLAaAAAdQABAQADARIABABIAAABIAAAAIAAABIAFAEIBIAgIACAAQAFADAHgDIACADIAAAAIAAABQACACAFABIABAAIADAAIACABIACAAIABAAIACAAIACAAQBAAJA4ATQAFAWAZAFIArAIIAHACQAWAFASAHIAAAAIAAABQAOAFALAHIAFADIADACIADAAQAsAIAeAVQAcgCAUAIQASAHATAFIAEABIABAAIAEgCIADAAQAGADAHABQCNAUCNgIIAggCIADAEIAAADQgzAQg3AAQgYAAgYgDgANhB4QAEAGgCALIAAACQAAAcABAXIAGBaIABANQABAVgBATQgDAngMAiQACAOAAARIAAACQASAaAaAQIAAgBQACgbAKgUIACgBIAAgWIAAgCQgVgiAFgnQACgNAEgNQAHgTgLgMQABgOAOgQIABgBIAMgtIAAgDQgigvgjghgAVbLeIgCAAIgTgQIgDAAQgKgBgHgEIgCgBQgDgCgHAAIgCAAQgIgBgGgDIgBgCIAAAAQgLgBgKgCQgNgDgLgHIgBAAIAAAAIgBAAIgFgDIgEgCQgMgIgIgLIgDAAQgjgHgggMIgCAAQgTgGgMgLIgCAAIgKgMIgDAAIgmgJIgDAAQgLABgFgEIgDAAIgZgGIgDgBIgCAAIgEgBQgogNgigUIAwAQIAAAAIAdAJIAEAAIACABIACAAIABABIACAAQAeAIAfAGQAVAEALANIAEAFIAiAQIACABIASAEIARAFIAAAAIAAAAIAjAKIACAAQAGAJAJAHIAEACIAGAEIAAAAIAEABIACABIAUAGIAPAFIAAAAIADABIAIACIACAAIARAEIAAABIADACIACAAIAVAFIADAAQAHAIAKAGIACABIACAAQAKAIgEAAQgDAAgKgEgASxK5IAAgBQATABARAHIAFABIAFACQAMAGALAIIAAABIhFgZgAxkLMIAAgBIAAAAIgCgEIgBgCIAAAAIAAgBIAAAAIgBgCIgBgBIAAgBIAAAAIAAgBIgCgDIgCgEIgBgFIgCgFIgBgBIAAAAIAAgCIAAAAIgDgGIgBgDIgBAAIgDgJIgBgBIAAAAIAAgBIgBgEIAAAAIAAgCIgCgFIAAAAIAAgBIAAgBIAAAAIAAgCIAAAAIgBgEIAAgBIAAgCIAAgBIAAgBIAAgDIADADIABADIABABIABACIAAADIABACIAAABIAAAAIAAACIABACIAAAAIAAABIAAABIAAABIAAADIABABIAAACIADAGIABAAIABABIAFAMIAAABIAAAAIABADIABABIAAAAIACAGIAAAAIAAACIAAAAIAAABIABACIAAABIAAABIABACIAAAAIAAACIAAABIAAACIAAABIABAEIAAADIAAABIAAgBgAwVK5IAAAAIAAgBIgBgFIAAgCIAAgBIgBgCIgBAAIgBgaIAEABIAAABIAAADQADAEAAAFIAAAMIAAACIAAABIAAABIAAABIgCAGIAAAAIgBAAgA1OK4IgDgIQgCgIgBgKIAAgDIAAgTIADAAIABABQAKAVgEATIgBACIgCAFIgBAAgAtoKuIgBAAIgBgXIAAgBIAAgCIAAgBIAAgEIACADIABACIABACIAAAAIABAAIAAABIABAGQABAGgBAIIgBAEIAAABgA14KUIAAgCIgBAAQgBgKAAgKIACAAIAAgCIAAgMQAFgCACgBQABAAAAABQABAAABAAQAAAAAAABQABAAAAABQADAFgDAPIAAAAIgBADQgCASABARIgCACQgIgIABgQgAqrKZQgGAAgFgHQAhgHAOgVQAIgNABgTIgBAAQgJgDAAgFQAAgDAEgEIAAgCQAFgEAHgCIAHgBIADAAIACgCIAAAAIAKgJIAAgBIABAAIACgCIAGgGIAAgCIAAgCQAFgDACgFIABgCIgBgCQgCgIgFgHQAJABAEAGQADAGgCALIgCAAIAAADQgBAGgGADIgBABIgEAGIgBAAIgCACIAAABIgBAAIgGAGIAAAAQgJAGgMACIAAACQgHAIAMAJQgBARgHALIgDAFQgGAJgJAFIgPAKQgIAGgGAAIgBAAgAteKVIAAgBIgBAAIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAgEIAAgBIAAgDIgBgHIgBAAQgBgKAAgJIACAAIAAgDIAAgCIACAAIABACIACAFIAAAAIAAABIAAABIABABIAAABIAAABIAAAAIgBAHIAAACIABAGIAAADIAAABIABADIAAAAIABADIAAABIAAAAIAAAAIAAABIAAAAIABAAIAAABIAAABIAAACIAAABIgBABIgCACQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBgAtNKPIgCAAIAAAAIAAAAIgBgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgDIgBgGIAAgBIAAgBIAAAAIAAgFIAAgBIAAgBIAAgDIAAgBIAAgEIAAgBIAAgBIAAgBIAAgBIAAgCIAAgDIgBAAIgCgTIAAgBQgEgCACgGIgBgBIgBgLQADgHABACQABABgBAIIAAADQAGALADAOIABAIIAAACIgBAAIgCACIADgCIAAABIAAACIAAABIAAAAIAAAAIAAACIACACIAAAAIAAAAIABABIAAAAIAAAAIAAABIAAAAIABABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAADIAAALIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIgBAAIAAAAIAAABIAAAAIAAABIgFABgAyBKKIgEgEIgCgEIAAgBIgBgBIgBgDIAAgBIAAAAIAAgBIgBgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIgCgJIgBgDIABABIAHANIAAABIAAABIAAAAIABABIAAAAIAAABIABADIAAABIAAAAIACAHIAAACIAAAAgAssJ+IAAgBIAAgBIgBgEIAAAAIAAgCIAAgBIAAgBIAAAAIgBgCIAAAAIAAgBIAAAAIAAgBQAEABABACIAAABIABADIAAABIAAABIgBACIAAABIAAAAIAAABIAAAAIgDABgAs4JvIgBgBIgBgBIAAAAIAAAAIABAAIAAAAIABAAIgCAAIAAgBIAAAAIAAAAIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAIgBgBIAAgBIgBAAIAAAAIAAgBIAAgBIAAgCIAAgEIAAgOIAAgMIgBgQIAAgPIAAgCIgBAAIgBgOIAAgBIgDgOQAFACACAFIAAABIABAGIAAAFIgBADQAEAAgBAHIAAACQADAFAAAIIAAAAIgBAGIAAAAIAAADIAAACIAAADIABACIABACIAAADQACAKgBAMIAAAAIAAABIAAABIAAADIgBABIABAAIAAgBIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIgBACIAAACIAAAAIAAABIAAABIgBAAIAAAAIAAABIAAAAIAAAAIAAABIgBAAgAs8JtIAAAAIgBAAgAzpJfQgDgCgBgCIAAgBIgBgHIABgJIADAAIgBgCQgCgCAAgGIAAgCIgBAAIgBgYIACAAIAAgDIAAgCIAEgHQABAAAAAAQAAAAABgBQAAAAAAABQAAAAABAAQABADAAANIAAADQACADABAEIgBAKIAAACIAAAFIAAAFIAAAHIAAAJIAAACIAAABIAAABIAAABIAAABQgEAAgCgBgApIJTIAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgFIAAgDIAAgCQAGgDAEgGIACgBIAAgCQAIgHAGgJQANgTAFgbIAAAAIABgFIAAAAIAAgDIAAgCQgLgJADgKIABAAIAVgOIABAAIACgBIAigXIACgBIAGgOIABAAIAAgCIAAgGIAAAAIAAgFIAAgBIAAgGIAAAAIAAgKIAAgLIAAgCIAAgCIgFgEIgJgGQAHAAAFADQAFACACAFIAAACQAEAFgBALIAAACIAAABIAAACIAAAFIAAAAIAAAKIAAAAIAAABIAAACIAAAAIAAACIgBADIgCALIgCAAIgHAHQgRAPgUAMIAAABIgQAIIgCABQgEAHAIAFIABABIACAAIAAAGIAAAAIgBABIAAACIAAAAIgEAUIgGARIgBADIgHAMQgHAKgKAJIgBABIgHAIIAAADIAAAEIAAADIAAACQgCAJgCAAQgCAAgBgJgAxEJGIgBgDIgDgHIgBgDIgCAAIgBgHIAAgDQABgGgDgDIAAgDIAAgCIgBAAIgBgNIAAgEIgBgTIAAgFIADAAIAAgCIACAAIAAACQAEANgBAQIAAACIAAAFIAAACIAAAIIAAACQAEACgCAIIAAACIAAACIABAEIADAMIAAAAIgBAAgAquIpQgCgFABgIIgBAAIgBgGIAAgBIAAgBIAAgXIACAAIACAHIAAABQACAKAAAJIAAACIAAABIAAAAQAAAJgCAIgAwdIeIgEgHQAKgZgFggIAAgDIgBAAIgCgGIgEgSIgBAAIgCgGIgCgDIAAgDQAAgMgBgLIgBgGIACAAIAAgCIAAgCQAGgBACADQABADgBAHIgBACIAAAKIAAACIAFATIAAADQAEACgBAHIAAADIACAFQAKAXgGAgQgDARgEAAIgDgBgAM4HgIAAgCQgNgFgGgNIgCgGIgBgDQAJgJAIgKIABgBIABgBIAIgOIAAACQgBAHgCAHIAAABIgBAAIgBADIAAABIgBAAIgDAGQgEAGgGAFIAAACIAEAEIAKAKIACAAIAGAOQAHASALAOIAAACQgUgGgGgggAQTICIgDgIIgBAAIgBgSQgBgWgHgRQAHgQgCgZQgBgLALgBIAAAdIABgFQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAGATgIARIAAACQAEAHgDAMIgBAAIAAAMIAAADIABAAQABAVgCADIgBABIgBgBgApZHzQAKgTgQgPIgBgCIAWgHIABAAQAYgKAVgMIAPgKIALgIIACgBQAHgLACgLIAAAAIABgLIAAgBIAAgCIgFgHIAAAAIAAgBIAAAAIgBgBIADABIABABIADADIABAAIAAABIAGAFIABABIABAFQAAAHgCAGIAAABIAAAAIgDAHIgFAIIAAACIgHAGQgNALgQAIIgBAAQgTAKgXAFIAAAAIgIACQgNACAGAIQARATgWALgAyEHrIgCgFIgBgCIAAgBIgBgBIgBAAIAAAAIAAgBIAAgBIAAAAIAAgDIgBgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAEgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIABgDIAAABIABAHIAAABIAAAAIAAABIAAAAIgBACIAAABIgHAAIAHAAIAAAAIAAADIAAABIAAAAIAAABIABABIAAAHIAAAEIAAAAIgCgBgAy0HnIgBgBIgBAAIABgBIAAAAIAAAAIAAAAIABAAIAAABIABABgAyzHdIgBgBIAAAAIgBAAIAAgBIAAAAIAAAAIAAgBIAAgBIgBAAIAAAAIAAgBIAAgBIAAAAIgBgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAgBIAAAAIgBAAIAAgBIgBAAIAAgCIAAAAIAAgBIAAAAIAAgCIAAgBIAAgDIgBAAIAAgDIAAAAIAAgFIAAgBIAAgCIgBAAIABAAIAAAAIABAAIAAgBIgDAAIABABIgCAAIABgBIgBAAIAAABIgBAAIABgBIABAAIABAAIABAAIAAgCIAEgBIABAAIAAACIgFABIAFAAIgBAAIAAAAIgBAAIAAAAIAAAAIgBAAIADAAIgBABIABAAIAAAAIAAAAIAAABIABAAIAAABIAAAAIAAABIAAAAIAAAAIABABIAAABIAAAAIABABIAAAAIAAABIAAAAIABABIAAABIAAAAIAAAAIAAABIAAAAIABAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAEIAAABIAAACIAAAAIAAAAIAAABIAAAAIgBABIAAACIAAABIAAAAIAAAAIAAABIgBAAIAAAAIAAABIAAAAIgBAAgAy5G+IAAAAIgBAAgAy5G+IABAAIACAAIgCAAIgBgBIAAAAIAAABIABAAgAy5HcIgBAAIAAAAIABAAIAAAAIACAAIAAAAIAAABgAy/HcIAAAAIACAAIABAAIgCAAIAAAAgAy2HcIAAAAIABAAgAy3HcIgBAAIABAAIgBgBIABABIABAAgAy7HcIgBAAIABAAIAAAAIABAAgAy4HcIAAAAIAAAAIAAAAgAy5HcIgCgBIACABIABAAIgBAAgAy8HcgAx3HbIgBAAIAAAAIAAgBIgBgEIgBgBIgBgHIgBgCIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAAAIgBgCIAAgBIAAAAIgBgDIAAgCIAAgBIgBgDIAAgBIAAgBIACgMIACAEIAAABIABAAIABABIAAAQQgBAJAGADIABAFIAAABIgBADIAAAFIAAAAIgBAAgAy5HQIAAAAIAAAAgAy6HQIAAAAIAAAAgAzYHQIgCgBIgBAAIAAAAIAAAAIgBAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIAAAAIAAAAIgBgBIAAAAIAAgBIgBAAIAAgBIABAAIAAAAIgBAAIAAgBIAAAAIAAgDIgBAAIAAgCIAAgBIAAAAIAHgCIAAAJIAAAAIAAACIAAAAIAAACIABABIAAACIAAAAgAz4HNIAJAAIgJABgAy8HIIAAAAIACAAIAAAAIgBAAIgBAAgAy9HIIAAAAIAAAAgAzRHIIAAAAIgBAAgAsXHDIAAAAQgEgDgDgEQgEgGgBgHIgBgDIAAgDIAAAAIgBgFIAAgCIAEAFIABABIAAAAIAFAJIADAIIABADIAAABIABAEIAAACIgBAAgAzCG+IgBAAIAAAAIgCAAIAAAAIABAAIAAAAIABAAIgBAAIABAAIABAAgAzxG9IAAABIgGAAgAy7G+IAAAAIAAAAgAy4G+gAsuG6IgHgPIgCgJIgCgIIAAgBIgBgFIAAgBIAAgCQAEACADAFIACAEIAAABIACAFIAAADIABAFIAAAAIABADIAAANgAzpG3IAAAAIAAAAIAAAAgAqMGxIAAAAIgBAAIgDgDIAAAAIgBAAIAAAAIAAgBIAAgCIgBgDIAAgBIgDgPIAAAAIgBAAIAAgBIAAAAIAAgHIAAAAIgBgJIAAAAIAAgOIAAgDIAAgJQAFAEACAIIAAACQACAFABAHIAAAAIAAAJIAAAGIAAACIAAADIAAACIAAAAIAAACIABABIAAABIAAAAQACALAAAEIgBABIgBAAIAAAAgAMsGpIAAgPQAQgWgPAmIgBABIAAgCgAtPGRIAAgCIgBgDIAAgBIAAgBIAAAAIgBAAIAAgGIgBgCIAAgFIAAgIIAAgBIgBgCQgDgKgCgMIgBgNIAAAAIAAgNQAJAWAFAcIAAACIADAHIAAACIAAAGIAAADIAAACIgBACIAAABIAAAAIAAABIADAFIAAAAIAAACIAAAAIAAAKIAAADIgCAFQgGgDgBgTgAthGHIgEgOIgBgDIAAgCIgDgKIgCgOIgCgMIAAAAIgBAAIAAAAQgBgKAAgJIAAgDIgBAAIgBgOIAAgFIgBgCIgHgiQANAZAEAhIAAACQAEAGgBALIAAAAIAAACIACALIABAHIACANIAAABIABAHIAAABIAAALIAAAAIAAACIAAABIgCACIAAgDgAqlGHIgGgPIAAAAIgBgDIgDgLIgCgHIAAgBQgEgTgBgXIAAgCQAKAYAEAdIADAUIAAAAIABAIgAq6FoIgBgEIgDgJQgGgVgDgYIgBAAIgBgaIgBgCQgEgEAAgIQAEACADAEQACAEAAAGIAAADIACAAIAKBKIAAABIAAAEIgBAAgAtyFgIgEgPIAAAAIgGgYIgEgNQgGgUgIgSIAAgDIAAgMIAAgYIAAgCIgCgBIAAgBQgIgVgFgZQgDgQgBgSQAPAnAIAtIABADQAEAFgCAMIAAACIADAOIAJApIADAOIAEANIAAACQADADAAAEIAAABIAAAFIAAAEIAAACIAAAGIAAABIgBgDgAQLhSQARgDARgOIABAAIABgBIABAAIABgCQAOgOADgSIADABIgBgCIgCgDIAAgGQgBgsgmgLIgBgCIABAAQAQgWgBgeIABgCQAMgHALgIIgBgBQgPgSgYgKIgBgCIgOgdIgCAAQgmgCgWgRQAAgMgGgEQgRgKgXgFQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgLgPgCgXIgDAAQgTABgJgIIgDAAIgVAAIgHgFQgRgRgdgEIgBgDQgHgZADgjIAIgYIACAAIgFh6IAAgDQBCghBcAIIAMABIAFAAIARAAIACAAQAQgBANgDIACAAQAWgfgHglIAAgCQAEgPAJgLIABAAQATgFAWAAIACAAIAAAAIAAgDIAUAAIACAAQA/gJBFgDIACAAQAMAAAMACIAAABIA6gDIACAAIAAgCQALAAALABIAAABQBAgEA1gQIABgBQAFgUgDgfIAAgCQAbgjA5gGIACAAQAGgZAVgKIACgBQgWgEgcACIgDAAIAAABQgMABgMAAIgCAAIgkAAIkKAAIgDAAIgTAAIgCAAIgRAAIgDAAIgcAAIgDAAIgCAAIgDAAIgQAAIgDAAQgeACgZgEIgCAAIgRAAIAAABQgSADgLgEIgCAAIgPAAIAAABQgRADgMgEIgCAAIAAABQgOADgIgEIgCAAIgYAAIAAABQgPADgJgEIgCAAIgkAAIgBABQgZADgUgEIgCAAIgFAAIAAABIgTABIgDAAIgYAAIgCAAIgYAAIgDAAIgEAAIgDAAQgeACgZgEIgCAAIgDAAIAAABQghADgbgEIgCAAIimAAIgCAAIgTAAIgDAAIgCAAIgbAAIgCAAIgWAAIgCAAIgTAAIgDAAIhFAAIgDAAIhDAAIAAACIAAADIgJgDIgBABQgTgFgYACIgCAAIgTAAIgDAAIgVAAIgDAAIhYAAIgFAFIgIgDQABgEgDgDIAGABIACAAIADAAQANAAAJgFQALAFAQgBQA3gCA4AAIAAgDIASAAQAGADAIgBQAJAAAHgCIAmABIAAACIACAAIAAgDIA8AAIADAAIAaAAIADAAIAaAAIACAAIARAAIADAAIATAAIACAAIAYABIAAACIADAAIACAAIAAgDIApABIAAACIAFAAIACAAIAAgDIATABIAAACIADAAIAAgDIAXABIABACIAmAAIACAAIAAgDIAkABIAAACIGwAAIBgAAIAiAAIACAAIAWAAIACAAIARAAIADAAIBbAAIACAAIAuAAIACAAIAKAAIACAAIATAAIADAAIAhAAIADAAIAyAAIADAAIBkAAIADAAIAAgDIAYABIAAACIACgBIAwgCIABgCQAKgNAIgQIACgBIAIgEIAAgBIAAgEIADgDQAHgJAKgCIAAAAIAyADIA2ADIACAEIAAADQg6gFg3APQgSALgJATIgBABQgKAHgLAGIgCAAQg4gDgMAnIAAABQg0ANgkAbIAAACQAHAsgWATIAAABQgIADgJABIgCAAQgfAHgiAFIAAABIgVABIgDAAIgtAAIgBABIgTABIgCAAQhqgChjANIgNABIAMAEQAsANARAnIABACQgUAfg0AAIgCAAIgBABIgXACQgNAFgOAEQgQAEgRgDQhlgMhPAhQBIAjBSAcQAzASAwAVQAHADAIACQBDALAuAhQAJAGgEAIQgTAQgiAAQgKAAAFAGQAKAeAkAPIACABQAdAbAQAmIABACQgbAdgtALIgCABIgTAdIgBACQgvAQgfAgIgBACQALASADAeIACADIABAEQAEAKABAMIAAACIAGARIABACIABABQACAHAAAEQgYALgBAYIgcALIgVAHIAGgGgAQenpQACAYABAdQAEALgDAPIgBABIAAAMIAAACIAAACQABAMgEAFIAAADQAAAYgHATQADAOAGAKIABACIAuAbIAEAAQAPgLgHgeIgFgRQAFgWAIgVIABAAQACgZgGgQIgBgCQANgaAEgiIAAgDIAAgCIAAgTIAAgDQAFgZgRgDIAAACIAAACQAEALgDAPIgBABIABAJQACARgJACQgHACADgXIAAgCIAAgbQAAgDgBgCQgVgSgmgBIAAgBQgdgQgegOIgrgTQgfgNgigLQghgKgjgJIABA7QABAhgJAZIAAACQADAUgIAJQAAATAEAPIABAAQAXAKARARIABACQAfADAdAGIACAAQAIAAgBAIIAAACQADALACANIAAACQAcAFAUAMIADAAQgCASALAHIAAACQAeABAXAIIACAAQAKhCgFhJIAAgCQgGgKAAgJQgBgKAHgKIAAgCQAEAFADAXgARflbIAGA8IABAAQAOgEAJgKIABAAQAKgbAagJIADAAQgBgrACgmQgJgQABAWQAEAGgCALIAAADIAAACQgBAQgGAKIgBAAQAAglgEggIgBgCQgLgIAHATIgDACIgCAAQgEgZgMgPIgCAAQgJANgJAZIABADQAEALADANIgCAAQgEAbgJAXgAR5oRQgDAaAIAPIABgDQAIgagNgPIgBADgASKoMQgDAWAIAKIAAgBIAAgDIAAgYIAAgCQABgBgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAIgDABgASunvIAAgBIACAAQABgIgFgEIgBgBIgEgBQgEAQALgBgASZn3IAAAEQALgDgLgSIAAARgAQhsEQAAABgBABQAAAAAAABQAAAAAAABQAAAAAAABQAEAjgPAgQAngCAqgJIADgBIAAgBQgFAAAAgDIgCgBIAAgEQAEgFgCgKIAAgCIAGgOIABAAIAAgCQgGgGgDAIIAAACIgBACQgBAUgNAJQgBgHAGgLQAKgSgMgJIgBACQgHAkAAgfQAAgEgBgCQgNgMgPAAQgIAAgIADgAqXjKIgCgBIAughIgBAAQgDgVAegKQAJgDAHgFQAKgWALgTIABgCQgIgagNgUIgBgCIgJAJIgCgEQgDgKgGgIQADABAEgBIAHgCQAFAGAGAGIACABQARAYAFAkIAAACQgOATgMAWQgOACgKAJIgMAGIAFABIgBABQgRANAEAYIAAADIgiABQAPANAaAEIADAEIABABIADADQgegKgcgMgAptmUIABAAIAIAAQAHAEAJADIgCACQgCAIABAEQgJgNgNgIgAp7maQABgGgFAEIgJgCIAHgHIgDgBQhKgnhggSIgBgBIgBgBQghgQgSggQAOgfAwAAQAGABAJgCQBNgOAmgrQglgag1gLQgRgEgNgJQgYgQgHggQAWgPAYgOQAJgFAFgKQACgMgCgOIAAgCQAigFAJgdIAAgCQgCgLAJABIADAAQAdgEAcgFIADgBQgvgohOgIIgDAAIgCAAIgWAAIgCAAQgPACgJgEQgRACgIgFQgagOgoAAIgBACQgLAGgPACIgCgBQgPgLgTgHIgCAAQgOABgIgEIgCAAIgkgFIgCAAIgbAAIgCAAQgPABgMAEIgCAAQgqgZhAgEIgCAAIgpAAIgCAAQgsAEgtABIgCAAQgOACgIgEIgCAAQg9gJgogeIgjACIgCAAIACADIAAAAIgBAFQiXAMiZAAQgBgJAKgBQBkgGBfgPIAzAFIAEAAIgBAAIAVgCIAbgBIADAAIACAAIAdABIAAACQAVAIAUAKIACABIATABIAAABIARAAIACAAIAbAAIACAAIAHAAIADAAIARAAIACAAIARAAIACAAIAwAAIADAAIAfAAIACAAIAWAAIACAAIARAAIACAAIAMAAIBIAAIADAAIAfAAIACAAIAiAAIACAAIA4AAIACAAIAKAAIAVAAIADAAIAQAAIADAAIAaABIAAACIAKAAIACAAIAAgDIATAAIADAAIAhABIAAACIADAAIACAAIAAgDIAOAAIAFAAIApABIAAAAIAAACIDdAAIB6AAIADAAIAYAAIACAAIApAAIACAAIAkAAIADAAIAHAAIAKAAIACAAIATAAIADAAIAmAAIACAAIADAAIAkAAIACAAIAdABIAAABIAFAAIACAAIAAgCIArAAIADAAIAYAAIACAAIATABIAAABIABgBIABgBIAkACIgDAEIgRgBQgEgHgIAHIgJABIgPAFQhugEh5ACIgDAAIgCAAIgRAAIgCAAIgWAAIgCAAQgWACgRgEIgCAAIgKAAIAAABQgNADgIgEIgCAAQgKAEgPgCIgCAAQgLACgGgEIgCAAIAAABQgcADgXgEIgCAAIAAABIAAAAQgSABgSAAIgCAAIgRAAIgDAAQgugEg0ACIAAABQgUADgOgEIgCAAIhNAAIgCAAIgRAAIgCAAIgDAAIgCAAIgWAAIgCAAIgDAAIgYAAIgCAAQgXgBgPABIgDAAIgTAAIgCAAIhBAAIgDAAIgaAAIgCAAIgDAAIgCAAQgYACgRgFIgCAAQgbADgdgDIAAACQgXADgRgFIgDAAIjdAAQAWAJAfgBIADAAIATABIAAABQAkgEAmgBIADAAIAAgCIArABIAAABQA2AEAnAVIAAACQBBgIBDAKIADAAQAQALASAIIACAAQAsgPAqATQAMAGATAAIAkABIAAABQBXAHA6AkIACAAQAAAPgCAMIgBACIABACQABAGgEgBIAAAYIAAADQAJAaAHAbQABAGgDADIABADQABAQgEAKIgUAOQgYATgVAZQAPAKASAHIABACQAGARAFAVIABAAQAEAngCAtIAAADIABAEIACAAQAEARgDAWIgBAAIgBABIgEABQgBAcAaAAQACAFAEAFQgCAHACADIgIgDgAr+orIgMACIAAARIAAACIAAAFIAAACQAEAIgCAOIAAACQAFAKAAAOIAAADIAUAHQApAOAqAFIABgCIAEgKIAAgCIAAgbIgBgCQgBgDAAgEIgCAAIgBhSQAAgHgDgEIgCgCIg+AbIgTAIIAAAaIAAACIAAADQACAggJggIgCAAIgBgbIgCABgAsprPQAIATAAARIABAAQAMAMAPAHQAbAPAjABIAAgBQAJgLAFgNIAAgDIgHgkIAAgCIgBAAIgBgTIACAAIAAgDQAAgKgCgJIgBgCIgQgrIgBABQgPAKgUAFQACAbAJAZQAIAWgJgCQgBgEgCgCIgDgEQgCgMgGgFQgHgHgNANIAAACQAPAZgIAVIgBgCQgCgEABgGIgBAAIgCgTIAAgDIgEgGIgDgDIgCABIACALQADASAAAWQgGgJAAgMIgBgIQgCgOgLAAIgEAAgArJs7IAAADIAAACQgBANADAJIAAACQALAeAGAjIAAACIAAARIAAACIABAHIABABQAEAHABAJIAAADQATgEASgRIABgBIAAgCIAAgWIADAAIAAgCQACgWgMgTIgBAAQgDgIgBgJIAAgCIAAgDIgBAAIgBgVIACAAIAAgHQgLgFgRAAQgLAAgNACgAPOnVIgBgTIACAAIAAgDQABgVgDgSIAAgCQAJALADAQIAAACIgJAhIgBABgArunhQgDgFABgKQAFABACADQAFAEgIAJgAN7oUIgBAAQgBgJgFgDIAAgCQgBgggEgeIgBgBIgBgOQAGAAADADIAAACQAFAzAKAvQACAMgBAIQgCAIgGAEIAAABQgGgOADgfgAOnnpQAAAAAAgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIAAgBIAAgGIAAgKIAAgCIAAgRIAAgDQgCgJAAgMQAKAGACAVIABAQQgBAMgCAFQgCAEgDAAIgCAAgArYoFIgBAAQgBgQAAgPIgBgCQgDgDABgHQAJAEgBAPIAAACQAEAIgDANIgBABIgDAAgA4WvsIABABIAAAAIgBABIAAgCgA4LxTIAAAAIABACIgBgCg");
	this.shape_9.setTransform(-282.5,-195.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_9},{t:this.shape_4},{t:this.shape_8},{t:this.shape_5},{t:this.shape_1},{t:this.shape},{t:this.shape_3}]},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.4,-333.1,364.5,250.5);


(lib.frb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{unselectedEnabled:0,press:1,unselectedDisabled:2,selectedDisabled:3,selectedEnabled:4});

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
		/* stop();
		*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// dot_enabled
	this.instance = new lib.frb_dot_1();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// dot_disabled
	this.instance_1 = new lib.frb_dot_disabled_1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// background pressed/disabled
	this.instance_2 = new lib.frb_background_pressed_1();
	this.instance_2.parent = this;

	this.instance_3 = new lib.frb_background_disabled_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// background up/static
	this.instance_4 = new lib.frb_background_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5));

	// radio button frame
	this.frb_frame_mc = new lib.frb_frame();
	this.frb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,"press":1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

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


(lib.Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("wrong_answer");
	}
	this.frame_7 = function() {
		playSound("asentencecontainsasubjectandaverb");
	}
	this.frame_51 = function() {
		playSound("doogwindsurfs");
		playSound("OrganBlip");
	}
	this.frame_64 = function() {
		playSound("OrganBlip");
	}
	this.frame_69 = function() {
		playSound("wrong_answer");
	}
	this.frame_81 = function() {
		playSound("right_answer");
	}
	this.frame_110 = function() {
		playSound("hesoars");
		playSound("OrganBlip");
	}
	this.frame_115 = function() {
		playSound("OrganBlip");
	}
	this.frame_121 = function() {
		playSound("wrong_answer");
	}
	this.frame_129 = function() {
		playSound("right_answer");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(4).call(this.frame_7).wait(44).call(this.frame_51).wait(13).call(this.frame_64).wait(5).call(this.frame_69).wait(12).call(this.frame_81).wait(29).call(this.frame_110).wait(5).call(this.frame_115).wait(6).call(this.frame_121).wait(8).call(this.frame_129).wait(31));

	// text
	this.instance = new lib.animD();
	this.instance.parent = this;
	this.instance.setTransform(-86.6,99,1,0.999);

	this.instance_1 = new lib.Wordoog();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57.9,99.3,1,0.999);

	this.instance_2 = new lib.Wordwindsurfs();
	this.instance_2.parent = this;
	this.instance_2.setTransform(26,100.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape.setTransform(90,112.9);

	this.instance_3 = new lib.Diagramstatement1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(43.1,113.6,1,1,0,0,0,166.2,30.6);

	this.instance_4 = new lib.animH();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-64.6,102.5,1.001,1,0,0,0,0,3.5);

	this.instance_5 = new lib.Worde();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-43.9,102.5,1.001,1,0,0,0,0,3.5);

	this.instance_6 = new lib.Wordsoars();
	this.instance_6.parent = this;
	this.instance_6.setTransform(19.1,103.3,1,0.999,0,0,0,0,3.5);

	this.instance_7 = new lib.anim();
	this.instance_7.parent = this;
	this.instance_7.setTransform(58,102.4,1,1.001,0,0,0,5.1,19.4);

	this.instance_8 = new lib.Diagramstatement2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(50.3,114.5,1,1,0,0,0,166.2,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleY:0.999}},{t:this.instance,p:{scaleY:0.999}}]},52).to({state:[{t:this.instance_2},{t:this.instance_1,p:{scaleY:1}},{t:this.instance,p:{scaleY:1}}]},12).to({state:[{t:this.instance_2},{t:this.instance_1,p:{scaleY:1}},{t:this.instance,p:{scaleY:1}},{t:this.shape}]},5).to({state:[{t:this.instance_2},{t:this.instance_1,p:{scaleY:1}},{t:this.instance,p:{scaleY:1}},{t:this.shape}]},6).to({state:[{t:this.instance_3}]},6).to({state:[]},26).to({state:[{t:this.instance_5,p:{scaleX:1.001,scaleY:1,y:102.5}},{t:this.instance_4,p:{scaleX:1.001,scaleY:1,y:102.5}}]},4).to({state:[{t:this.instance_6,p:{scaleY:0.999,y:103.3}},{t:this.instance_5,p:{scaleX:1,scaleY:0.999,y:102.5}},{t:this.instance_4,p:{scaleX:1,scaleY:0.999,y:102.5}}]},5).to({state:[{t:this.instance_6,p:{scaleY:1.001,y:103.5}},{t:this.instance_5,p:{scaleX:1,scaleY:1.001,y:102.7}},{t:this.instance_4,p:{scaleX:1,scaleY:1.001,y:102.8}},{t:this.instance_7}]},6).to({state:[]},7).to({state:[{t:this.instance_8}]},1).to({state:[]},27).wait(3));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghKAVFMgAGgqJMBCbAAAMAAGAqJg");
	mask.setTransform(0.3,-12.2);

	// background
	this.instance_9 = new lib.scene2sharkchase();
	this.instance_9.parent = this;
	this.instance_9.setTransform(522.4,347.5,1.764,1.764);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:2.14,scaleY:2.14,x:576.9,y:462.9},73).to({x:496.9,y:336.8},79).to({x:489.8,y:325.7},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.6,-147,425.8,269.7);


// stage content:
(lib.compSen_Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2_repeat:140});

	// timeline functions:
	this.frame_139 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_158 = function() {
		/* gotoAndPlay("scene2_repeat");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(19).call(this.frame_158).wait(1));

	// frame
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EAlFAXeUglFAAAglEAAAMAAAgu7MBKJAAAg");
	this.shape_1.setTransform(268.1,195.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(159));

	// Scene2
	this.instance_10 = new lib.Scene2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(267.2,209.3,1.116,1.116);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(159));

	// navigation
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAHQgDgDAAgEQAAgCADgDQADgDAEAAQAFAAADACQADADAAADQAAAEgDADQgEACgEAAQgEAAgDgCg");
	this.shape_2.setTransform(359.2,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AggA0QgEgDAAgFIAAhHIgBgJIABgJQABgHALgBQAFgCANAAQALAAAMAJQAOAJAAAPQAAAIgDAFQgCAFgGAEQAHADAFAHQAFAHABAHQAAAJgKAIQgHAGgHADQgPAFgYABQgFAAgCgEgAgRAlQALgBANgEQAMgDAAgFQAAgEgHgFQgHgDgEAAIgSgBgAgRgkIAAAPIAAAOIAJABQAUgCAAgOQAAgEgGgFQgGgFgGAAIgLAAg");
	this.shape_3.setTransform(352,29.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AglAzQgCgDAAgEIAAgPIAAgPIAAg3QAAgEADgEQAEgEAFAAIARACQAKABAGADQAdAPAAAWQAAAJgGAFQgHAHgMAFQATAKAJALQACACAAAEQAAAEgDACQgDADgDAAQgEAAgDgDQgVgTgYgIIABAWQAAAEgDADQgCADgEAAQgFAAgDgDgAgUACIACAAQARAAAIgDIAGgFQADgDAAgBQAAgIgKgHQgIgHgKgBIgIAAg");
	this.shape_4.setTransform(343.1,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_5.setTransform(334.2,29.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgOAxQgIgUgKglIgGgSQgEgNAAgFQAAgEADgDQADgCAEAAQAGAAADAHIACALIAHAXIAKAhIAQgoIAGgRQAEgJAEgGQADgDAEAAQAEAAADADQADACAAAEIgCAGQgDAFgEAHIgEAOIgTAuQgDAJgEAIQgDAFgFAAQgHAAgDgGg");
	this.shape_6.setTransform(325,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQAfIgKAFIgIACQgQAAgJgJQgHgJgBgSQAAgPANgMQAMgMAQAAQAGAAAJAEQAKAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgCAHIAAAKQAAAMACAFIADAIIACAGQABAEgDACQgDADgEAAQgCAAgIgHgAgJgNQgHAHAAAJQABAJADAFQADAEAHAAIAHgBIAHgEIgDgYIABgFIAAgGIgCgBIgCAAQgIAAgHAHg");
	this.shape_7.setTransform(310.3,31.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATAzQgFADgFACIgJAAQgPAAgLgJQgKgLAAgPQAAgSAKgLQALgLAQAAIAJABQAEABADADIACghQABgIAIAAQAEAAACACQADADAAAEIgCAeIgBAdQAAAYABAIIAAADQAAADgCACQgDADgEAAQgFAAgCgFgAgNADQgFAGAAAMQAAAHAFAFQAGAFAHABIAHgBIAGgFIACgCIAAgZQgCgFgDgBQgEgCgFAAQgJABgFAEg");
	this.shape_8.setTransform(296.1,29.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIAAgFIAAgGIAAgDIABgDQAAgFgDAAQgGAAgEAHQgGAIgDAKIgBAGIAAAHIAAAFIgBAGQAAAEgDADQgCADgEAAQgFAAgCgDQgDgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIAAgGQAAgEADgCQACgDAEAAQAJAAABALIAAABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIACAOIABAOQAAAEgDACQgCADgEAAQgJAAgBgJg");
	this.shape_9.setTransform(288.5,31);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQAfIgLAFIgHACQgQAAgIgJQgIgJAAgSQAAgPALgMQANgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIADAGQAAAEgDACQgDADgDAAQgEAAgHgHgAgJgNQgGAHAAAJQAAAJACAFQAEAEAGAAIAHgBIAIgEIgCgYIAAgFIABgGIgCgBIgDAAQgIAAgHAHg");
	this.shape_10.setTransform(280.9,31.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_11.setTransform(266.1,29.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_12.setTransform(256.9,29.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_13.setTransform(248.3,29.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgcAvQgPgKAAgNQAAgKAKAAQAKAAAAAKQAAAEAGAFQAHAEAHAAQACAAABgJIAAgVIABgmIAAgEIgBAAIgIAAIgIgBQgEAAgCgCQgDgDAAgEQAAgJAMAAIAHAAIAGAAIANAAIAMgBQATAAAAAKQAAAEgCADQgEADgEAAIgDAAIgFgBIgFAAIAAAFQAAAwgHAWQgFARgMAAQgNAAgMgJg");
	this.shape_14.setTransform(239.2,29.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AghA0QgDgDAAgFIAAhHIAAgJIAAgJQABgHALgBQAFgCAMAAQAMAAAMAJQAOAJAAAPQAAAIgDAFQgCAFgGAEQAHADAFAHQAFAHABAHQAAAJgKAIQgHAGgHADQgPAFgYABQgEAAgEgEgAgRAlQAMgBAMgEQAMgDAAgFQAAgEgIgFQgFgDgFAAIgSgBgAgRgkIAAAPIAAAOIAJABQAUgCAAgOQAAgEgGgFQgGgFgHAAIgKAAg");
	this.shape_15.setTransform(230.3,29.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgbAvQgRgOAAgiIAAgJIAAgKIAAgIIABgIQAAgFABgFQADgGAEAAQAFAAADACQACADAAAEIAAALIAAAMIAAAJIAAAKQAAAJACAJQADALAFAEQADACALABQARAAAGgfQAEgPAAgdQAAgEACgEQADgEAGAAQAFAAACADQABADABADQgBAbgCAPQgEAWgLAPQgFAHgHAFQgJAFgIAAQgRAAgJgGg");
	this.shape_16.setTransform(220.5,29.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_17.setTransform(210.5,29.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAQAfIgLAFIgHACQgQAAgJgJQgHgJAAgSQAAgPAMgMQAMgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgCAAgIgHgAgJgNQgHAHABAJQAAAJACAFQAEAEAGAAIAHgBIAIgEIgCgYIAAgFIABgGIgDgBIgCAAQgIAAgHAHg");
	this.shape_18.setTransform(195.8,31.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKABQAFACAEAAQANABAAgGQAAgEgKgDIgRgJQgKgHAAgJQAAgOAPgFQAIgCARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHABgBgGIgGAAQgPgBAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_19.setTransform(182.3,31);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIAAgFIAAgGIAAgDIABgDQAAgFgDAAQgGAAgEAHQgGAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIgBgGQAAgEAEgCQACgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAFAKQADAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_20.setTransform(175.4,31);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIAyQgDgDAAgEIAAgMIAAgNIAAgPIACgOQAAgEACgDQADgCAEAAQADAAACACQADADAAAEIAAAOIgBAPIAAANIABAMQgBAEgDADQgCACgDAAQgEAAgDgCgAgGgiQgCgDAAgEQAAgEACgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgEAAgDgDg");
	this.shape_21.setTransform(169.9,29.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AARAfIgLAFIgHACQgRAAgJgJQgIgJAAgSQABgPALgMQAMgMARAAQAGAAAIAEQALAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgBAHIAAAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgDAAgGgHgAgJgNQgGAHgBAJQAAAJAEAFQADAEAHAAIAHgBIAGgEIgCgYIABgFIAAgGIgCgBIgBAAQgJAAgHAHg");
	this.shape_22.setTransform(163.9,31.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFAvQgDgCAAgEIAAgHIABgHIgCgjIgNgBQgJgBAAgIQAAgDADgDQADgDAEAAIALABIAAgHIAAgHQAAgEADgDQACgCAEAAQAJAAAAARIAAAGIAHgBQAJAAACABQAFACABAHQgBAEgCACQgCADgFAAIgDAAIgEAAIgGAAIABAjIABADIAAAEQgBAQgJAAQgDAAgDgDg");
	this.shape_23.setTransform(156.6,29.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIAAgFIAAgGIAAgDIABgDQAAgFgDAAQgGAAgEAHQgGAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIgBgGQAAgEAEgCQACgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAFAKQADAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_24.setTransform(149.7,31);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgOAIgMQALgOARABQAOgBAIALQAHALAAAOQAAAPgIALQgKAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAJAFAEQADAEAFgBQAFAAAFgDQAFgFAAgJQABgUgNAAQgHgBgFAJg");
	this.shape_25.setTransform(142.2,31.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVAeQgKgJAAgPQAAgMAJgPQALgRAOAAQAHABAJADQAMAFAAAGQAAAEgCACQgDADgEAAQgDAAgEgEQgEgDgIAAQgEAAgHAKQgGAKAAAHQAAAHAGAEQAFAEAHAAQAEAAAHgEIAIgDQAEAAADADQACACAAAEQAAAGgLAEQgLAGgGAAQgOAAgLgJg");
	this.shape_26.setTransform(134.9,31.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_27.setTransform(121.2,29.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_28.setTransform(112.4,29.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgvA1QgCgDgBgEIABgIIAAgJIAAgMIAAgMIAAgMIAAgNIgBgMIAAgMQAAgEADgEQADgDAFAAQAFAAAGAJQAfAsAdAbIABgKIgBgtIgBgHIgBgIQAAgJAKAAQALAAAAAiIAAALIAAAqIgBALQgCAJgIAAQgFAAgGgFQgagYghgqIAAAVIAAAQIABAQQAAAVgKAAQgFAAgDgDg");
	this.shape_29.setTransform(102.3,29.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_30.setTransform(92.4,29.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_31.setTransform(83,29.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgvA1QgDgDABgEIAAgIIAAgJIABgMIAAgMIAAgMIAAgNIgBgMIgBgMQgBgEAEgEQAEgDAEAAQAGAAAFAJQAfAsAdAbIABgKIgBgtIgBgHIAAgIQgBgJALAAQALAAgBAiIAAALIAAAqIgBALQgCAJgIAAQgFAAgGgFQgagYghgqIAAAVIAAAQIABAQQAAAVgKAAQgFAAgDgDg");
	this.shape_32.setTransform(72.4,29.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_33.setTransform(62.5,29.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_34.setTransform(53.1,29.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAYAnQgDgIgDgLIgRACIgPACIgLAWQgDAFgGAAQgDAAgEgCQgDgDAAgEQAAgDAKgVIAAgDQAAgEAHgCIAVgiQAQgZAEAAQAIAAACAJIAEAVIAKAtIAEAIQACAGAAAEQAAADgCADQgEACgDAAQgFAAgGgMgAgEAGIAJAAIAJgBIgFgXIgNAYg");
	this.shape_35.setTransform(37,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(159));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(208.8,141.2,717.8,493.2);
// library properties:
lib.properties = {
	id: '6D939A531AA6694997442B45FAB62EF7',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/asentencecontainsasubjectandaverb.mp3", id:"asentencecontainsasubjectandaverb"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/bgmComS.mp3", id:"bgmComS"},
		{src:"sounds/doogwindsurfs.mp3", id:"doogwindsurfs"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/hesoars.mp3", id:"hesoars"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/OrganBlip.mp3", id:"OrganBlip"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"}
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
an.compositions['6D939A531AA6694997442B45FAB62EF7'] = {
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