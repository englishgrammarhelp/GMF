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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNALQgFgFAAgFQAAgGAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAGQAAAFgGAFQgFAFgIAAQgHAAgGgFg");
	this.shape.setTransform(336.1,99);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3366").s().p("AgKBSQgFgFAAgGIAAgNIAAgMIgCg8IgVgCQgPgBAAgOQAAgHAEgEQAFgFAHAAIAUACIgBgNIAAgLQAAgHAEgEQAGgFAGAAQAQAAABAdIAAAKIALgBQANAAAGACQAJADAAALQAAAHgFAEQgEAEgIABIgFAAIgGAAIgLABIACA8IAAAGIABAGQgBAbgQAAQgGAAgFgDg");
	this.shape_1.setTransform(325.3,91.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC3366").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_2.setTransform(313.5,93.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3366").s().p("AAcA2IgTAIQgIADgFgBQgcABgOgQQgOgPAAgeQAAgbAVgUQAVgVAcABQALAAAOAGQASAIAAAJQAAAFgDACIgBANIgBAQQAAAVADAKIAFAMIAFALQAAAGgFAFQgEADgHAAQgFAAgMgKgAgQgXQgMANAAAPQAAAQAGAHQAGAJALgBQAGAAAHgCQAGgCAGgFQgEgbAAgOIABgIIABgLIgEgBIgDgBQgPAAgMAMg");
	this.shape_3.setTransform(300.5,93.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC3366").s().p("AgKBSQgFgFAAgGIABgNIAAgMIgCg8IgXgCQgOgBAAgOQAAgHAEgEQAFgFAHAAIAUACIgBgNIgBgLQABgHAEgEQAFgFAHAAQAQAAAAAdIAAAKIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgFAEgGABIgGAAIgGAAIgLABIACA8IAAAGIABAGQAAAbgRAAQgGAAgFgDg");
	this.shape_4.setTransform(288.1,91.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC3366").s().p("AguA9QgEgEAAgHIAAhMIABgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQAUgQAZAAQAYAAgBAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgFAEQgEAFgHAAQgHAAgFgFg");
	this.shape_5.setTransform(276.9,93.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC3366").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_6.setTransform(264.5,93.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC3366").s().p("AgwBeQgFgEAAgHIAAgsIAAgtQAAgagBgRIgCgYQAAgJAEgIQAFgHAJAAQAHgBAEAFQAEAEAAAHIAAABQAIgEAIgCQAHgDAIAAQAbAAAMAXQAKASAAAbQAAAYgPASQgQASgaAAQgJAAgLgDIAAAwQAAAHgFAEQgFAFgHgBQgHABgEgFgAgGg3QgIAEgHAGIABAwQAKADAKAAQAMAAAGgIQAGgHAAgNQAAgQgBgGQgEgOgLAAQgHAAgHADg");
	this.shape_7.setTransform(252.1,96.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC3366").s().p("AgJBEQgFgFAAgGQAAgOgDgaQgDgZAAgNQAAgHgBgFQgOAIgNASIgCADIgBAkIAAAJIAAAIQAAAGgFAEQgFADgHAAQgKAAgEgIQgCgGAAgNIAAgrIAAgRIgBgRQAAgKAEgJQAEgKAJAAQAGAAAFAFQAGAFAAAGIgBAKQARgUAQAAQASAAAIANQAHgGAIgDQAJgDAKAAQAXAAAIAWIAFAgQAEASAFAsQAAAHgFAEQgFAFgHAAQgNAAgCgOQgDgMgCgWIgEghQgDgVgFAAQgCAAgKAGQgKAFgEAEQAAANADAYQADAaAAANQAAAGgEAFQgFAEgHAAQgGAAgEgEg");
	this.shape_8.setTransform(236.4,93.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC3366").s().p("AgOBVQgFgFAAgGIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAGgFAFQgEAEgGABQgHgBgFgEgAgKg7QgGgFAAgHQAAgHAGgGQAFgEAHAAQAHAAAGAEQAFAGAAAHQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_9.setTransform(223.7,90.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC3366").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAALAEQAKADAGAAQAWAAAAgJQAAgHgRgHQgWgKgHgEQgRgMAAgQQABgYAYgIQAPgFAdAAQAMAAAFADQAIAEAAALQAAAVgMAAQgLAAgCgJIgKgBQgbAAAAAIQgBAEARAIQAXAKAIAGQARAMAAAPQAAAUgSAKQgQAJgVAAQgPAAgNgFg");
	this.shape_10.setTransform(203.7,93.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC3366").s().p("AgOBVQgFgFAAgGIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAGgFAFQgEAEgGABQgHgBgFgEgAgKg7QgGgFAAgHQAAgHAGgGQAFgEAHAAQAHAAAGAEQAFAGAAAHQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_11.setTransform(194.9,90.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0033FF").s().p("AgnAyQgUgOAAgbQAAgcAPgVQASgXAdAAQATAAAOAGQASAKAAARQAAAOgOAKQgHAEgUAIIgnARQAHAHAHADQAIACAKAAQAPABALgHQAKgGAGAAQAMAAAAAMQAAAOgTAIQgRAHgSAAQgcAAgRgOgAgQgcQgHAIgFAPIAagMQAQgHAJgGQgIgFgMAAQgKABgJAGg");
	this.shape_12.setTransform(174,93.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0033FF").s().p("AgRA0IgnhdIgBgHQAAgHAFgEQAFgEAHAAQAKAAAEAJQAHAOATA0IAQgoIAKgZQAGgKAJAAQAGABAGAEQAFAEAAAHQAAAEgTAqIgYA0QgBAGgFADQgEAEgFAAQgLAAgGgMg");
	this.shape_13.setTransform(161.8,93.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0033FF").s().p("AgOBVQgFgFAAgGIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAGgFAFQgEAEgGABQgHgBgFgEgAgKg7QgGgFAAgHQAAgHAGgGQAFgEAHAAQAHAAAGAEQAFAGAAAHQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_14.setTransform(152.7,90.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0033FF").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQATgQAaAAQAYAAAAAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgGAAgFgFg");
	this.shape_15.setTransform(143.5,93.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0033FF").s().p("AgKBSQgFgFAAgGIABgNIAAgMIgCg8IgXgCQgOgBAAgOQAAgHAFgEQAEgFAHAAIAUACIgBgNIgBgLQABgHAFgEQAEgFAHAAQAQAAAAAdIAAAKIAMgBQAOAAAEACQAKADAAALQAAAHgEAEQgFAEgHABIgGAAIgGAAIgLABIACA8IAAAGIAAAGQAAAbgQAAQgGAAgFgDg");
	this.shape_16.setTransform(131.9,91.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0033FF").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAAKAEQALADAGAAQAWAAAAgJQAAgHgQgHQgYgKgGgEQgQgMgBgQQAAgYAZgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgLAAQgMAAgDgJIgJgBQgcAAABAIQAAAEAQAIQAXAKAIAGQARAMAAAPQAAAUgTAKQgPAJgVAAQgPAAgNgFg");
	this.shape_17.setTransform(120.2,93.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0033FF").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_18.setTransform(97.7,93.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0033FF").s().p("AgKBVQgGgEAAgHIABgFIAAgFIAAgRIgBgQQAAgQgDgaQgDgfAAgLIgGAAQgaAAgQgEQgNgDAAgMQAAgGAFgFQAFgGAIABIASACIATABIAVAAIAVAAIAaABIAbABQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAIgcgCIgdgBIADAwQADAdAAASIABAMIAAALQAAAJgDAHQgFAJgJAAQgFAAgFgEg");
	this.shape_19.setTransform(83.3,90.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNALQgFgEAAgHQAAgFAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAFQAAAHgGAEQgFAFgIAAQgHAAgGgFg");
	this.shape_20.setTransform(357.6,63.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgoAyQgTgOAAgbQAAgcAQgVQARgXAdAAQATAAAOAGQASAKAAARQAAANgOALQgHAEgUAIIgmARQAFAGAIADQAIADAJAAQAQABALgHQAKgGAGAAQAMAAAAAMQAAAOgUAIQgQAHgTAAQgbAAgSgOgAgPgcQgIAIgFAPIAagMQAPgHAKgGQgIgFgMABQgLAAgHAGg");
	this.shape_21.setTransform(345.6,58.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgkAzQgSgPgBgZQABgXAQgZQATgcAYAAQAMAAAQAHQAUAHAAALQAAAGgEAEQgEAFgHAAQgFAAgHgGQgHgFgOAAQgIAAgLASQgKARAAAMQAAAMAJAHQAIAHANAAQAIgBALgFQAMgHADAAQAGABAFAEQAEAFABAGQgBAJgTAJQgTAIgLAAQgZAAgRgPg");
	this.shape_22.setTransform(332.7,58.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_23.setTransform(320.6,57.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgoAyQgTgOAAgbQAAgcAQgVQARgXAcAAQAVAAANAGQASAKAAARQAAANgPALQgGAEgUAIIgnARQAGAGAIADQAIADAKAAQAPABALgHQAKgGAFAAQANAAAAAMQAAAOgUAIQgQAHgSAAQgcAAgSgOgAgQgcQgHAIgEAPIAagMQAOgHAKgGQgIgFgNABQgKAAgIAGg");
	this.shape_24.setTransform(307.3,58.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKBSQgFgEAAgHIAAgNIAAgMIgCg8IgVgCQgPgCAAgNQAAgHAEgFQAFgEAHAAIAUACIgBgNIAAgMQAAgGAEgEQAGgFAGAAQAQAAABAeIAAAJIALgBQAOAAAFACQAJADAAALQAAAHgFAEQgEAEgIABIgFAAIgGAAIgLAAIACA9IAAAGIABAGQgBAbgRAAQgFAAgFgDg");
	this.shape_25.setTransform(295.2,56.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_26.setTransform(283.3,57.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgnAyQgUgOAAgbQAAgcAPgVQASgXAcAAQAVAAANAGQASAKAAARQAAANgPALQgGAEgUAIIgnARQAHAGAHADQAIADAKAAQAPABALgHQAKgGAFAAQANAAAAAMQAAAOgTAIQgRAHgSAAQgbAAgSgOgAgQgcQgHAIgEAPIAagMQAOgHAKgGQgIgFgNABQgKAAgIAGg");
	this.shape_27.setTransform(270.1,58.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAAKAEQALADAFAAQAXAAAAgJQAAgGgQgIQgYgKgGgEQgQgMAAgQQAAgYAYgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgLAAQgMAAgDgJIgJgBQgbgBgBAJQABAEAQAHQAXALAIAGQARAMAAAPQAAAVgTAJQgPAJgVAAQgQAAgMgFg");
	this.shape_28.setTransform(257.5,58);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghA9QgRgGAAgNQAAgMAOAAQAGAAAKAEQAKADAFAAQAXAAAAgJQAAgGgRgIQgXgKgGgEQgRgMAAgQQAAgYAZgIQAPgFAdAAQAMAAAFADQAIAEAAALQAAAVgMAAQgLAAgCgJIgKgBQgcgBAAAJQAAAEAQAHQAYALAIAGQARAMAAAPQAAAVgSAJQgQAJgVAAQgQAAgNgFg");
	this.shape_29.setTransform(235.4,58);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgOBVQgFgEAAgHIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAHgFAEQgEAEgGABQgHgBgFgEgAgKg7QgGgFAAgHQAAgHAGgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_30.setTransform(226.6,55.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAbBWQgDgKgCgRQgCgRAAgLIAAgIIABgJIgBgKQgBgFgFgBQgNABgJALQgGAFgJARQAAArgEAIQgFAKgKAAQgGAAgFgFQgFgEAAgHIABgGQABgCAAgdIAAhOIABgDIAAgTIgBgKIgBgMQAAgGAFgFQAFgDAHAAQALAAAEALQACAIAAAOIAAAYIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAJABAQIABAdIADAXIAEAXIAAAEQAAAHgFAEQgFAFgGgBQgMAAgEgLg");
	this.shape_31.setTransform(216.3,54.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKBSQgFgEAAgHIABgNIAAgMIgCg8IgXgCQgOgCAAgNQAAgHAEgFQAFgEAHAAIAUACIgBgNIgBgMQABgGAFgEQAEgFAHAAQAQAAAAAeIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgFAEgGABIgGAAIgGAAIgLAAIACA9IAAAGIABAGQAAAbgRAAQgGAAgFgDg");
	this.shape_32.setTransform(203.5,56.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgVBjQgGgEAAgHIABgDQADgRAAgOIAAg6IgIABIgHABQgHAAgEgFQgGgEAAgHQAAgLAMgDQAFgCAQAAIABgNQAEgaAKgNQANgQAcAAQAVAAAAAPQABAPgVAAQgNAAgHAKQgFAIgCAQIAAADIAXgCQAVAAAAAPQABAQgYgBIgWABIAAAfIAAAfQAAAWgCAMQgEANgLAAQgHAAgEgEg");
	this.shape_33.setTransform(181.2,55.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_34.setTransform(168.8,58.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKBSQgFgEAAgHIAAgNIAAgMIgCg8IgVgCQgPgCAAgNQAAgHAEgFQAFgEAHAAIAUACIgBgNIAAgMQAAgGAEgEQAGgFAGAAQAQAAABAeIAAAJIALgBQAOAAAFACQAJADAAALQAAAHgFAEQgEAEgIABIgFAAIgGAAIgLAAIACA9IAAAGIABAGQgBAbgRAAQgFAAgFgDg");
	this.shape_35.setTransform(146.7,56.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgkAzQgSgPgBgZQAAgXARgZQATgcAYAAQAMAAAQAHQAUAHAAALQAAAGgEAEQgEAFgHAAQgFAAgHgGQgHgFgOAAQgIAAgKASQgLARAAAMQAAAMAJAHQAJAHAMAAQAIgBALgFQAMgHADAAQAGABAFAEQAFAFAAAGQAAAJgVAJQgRAIgMAAQgZAAgRgPg");
	this.shape_36.setTransform(134.6,58.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnAyQgUgOAAgbQAAgcAPgVQASgXAdAAQATAAAOAGQASAKAAARQAAANgOALQgHAEgUAIIgnARQAHAGAHADQAIADAKAAQAPABALgHQAKgGAGAAQAMAAAAAMQAAAOgTAIQgRAHgSAAQgcAAgRgOgAgQgcQgHAIgFAPIAagMQAQgHAJgGQgIgFgMABQgKAAgJAGg");
	this.shape_37.setTransform(121.8,58.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgpBTQgCgEAAgEQAAgGAFgFQAFgEAHAAQAHAAAGAIIAJAPQAEAIAEAAQAGAAACgQQAAgNgEg0IgEg+QAAgHAEgFQAFgHAHAAQAGAAAFAEQAGAEAAAFIAEBAIADBGQAAARgKAOQgMAQgSAAQgbAAgSgogAAFhcQgFgFAAgHQAAgHAFgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAHgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_38.setTransform(109.2,58.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgiBZQgFAEgFAAQgHAAgEgEQgFgEAAgGIAAgJIABgJIAAiDQAAgJAEgGQAEgJAJAAQAMAAAAAOIAAAFIgBAFIAAAsIARgHQAIgCAHAAQAbAAARAUQAQASAAAaQAAAbgSATQgTAUgbAAQgQAAgPgGgAgNgCQgHADgLAHIAAAyQARAHALAAQAOAAAJgKQAKgKAAgQQAAgPgIgKQgIgJgNAAQgGAAgIADg");
	this.shape_39.setTransform(98.4,54.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAXA6QgOAFgPAAQgRAAgMgHQgNgIgBgPQgGgdAAgWQABgPADgUQACgNAOAAQAHAAAFAEQAEAEAAAHIgBAQIgCARIABAbIADAVIAGACIAGAAQAMAAAPgDIAAgVIAAgTQAAgYACgRQACgOAOAAQAHAAAFAEQAFAFAAAGIgDAqIAAAWIAAAYIABAHIAAAIQAAAGgEAEQgFAFgHAAQgKAAgFgJg");
	this.shape_40.setTransform(85,58.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAALAEQAKADAGAAQAWAAAAgJQAAgGgQgIQgYgKgGgEQgRgMAAgQQAAgYAZgIQAPgFAdAAQAMAAAFADQAIAEAAALQAAAVgLAAQgMAAgCgJIgKgBQgcgBABAJQgBAEARAHQAXALAIAGQARAMAAAPQAAAVgTAJQgPAJgVAAQgPAAgNgFg");
	this.shape_41.setTransform(72.8,58);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_42.setTransform(386.5,22.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAXA6QgPAFgPAAQgQAAgLgHQgOgIgCgPQgEgdAAgWQgBgPAEgUQACgNAOAAQAHAAAEAEQAFAEABAHIgCAQIgCARIABAbIAEAVIAFACIAFAAQANAAAPgDIAAgVIAAgTQAAgYACgRQACgOAOAAQAHAAAFAEQAEAFABAGIgDAqIAAAWIABAYIAAAHIAAAIQAAAGgFAEQgFAFgGAAQgKAAgFgJg");
	this.shape_43.setTransform(373.8,22.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_44.setTransform(361.3,22.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_45.setTransform(349,22.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgoAyQgTgOAAgbQAAgdAQgUQARgXAcAAQAVAAANAGQASAKAAARQAAANgPALQgGAEgUAIIgnARQAGAGAIADQAIADAKABQAPAAALgHQAKgGAFAAQANAAAAAMQAAAOgUAIQgQAHgSAAQgcAAgSgOgAgQgcQgHAIgEAPIAagMQAOgHAKgGQgIgFgNABQgKAAgIAGg");
	this.shape_46.setTransform(325.3,22.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgRA0IgmhdIgCgHQAAgGAFgFQAFgEAHAAQAKAAAFAJQAGAOATA0IARgoIAKgZQAEgKAKAAQAGAAAGAFQAFAEAAAGQAAAFgTAqIgYA0QgBAFgEAEQgEAEgGAAQgMAAgFgMg");
	this.shape_47.setTransform(313.2,22.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgOBVQgFgEAAgHIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAHgFAEQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_48.setTransform(304,19.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgKBRQgFgDAAgHIABgNIAAgNIgCg7IgXgCQgOgCAAgNQAAgHAEgFQAFgEAHAAIAUACIgBgNIgBgMQABgGAFgEQAEgEAHgBQAQABAAAdIAAAJIAMgBQAOAAAEACQAKADAAALQAAAHgFAEQgEAEgHAAIgGAAIgGAAIgLABIACA9IAAAGIAAAGQAAAbgQAAQgGAAgFgEg");
	this.shape_49.setTransform(294.8,20.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgOBVQgFgEAAgHIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAHgFAEQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_50.setTransform(286,19.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_51.setTransform(276.2,22.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgOBVQgFgEAAgHIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAHgFAEQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_52.setTransform(266.7,19.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgVBjQgGgEAAgHIABgDQADgRAAgOIAAg6IgIABIgHABQgHAAgEgFQgGgEAAgHQAAgLAMgDQAFgCAQAAIABgNQAEgaAKgNQANgQAcAAQAVAAAAAPQABAPgVAAQgNAAgHAKQgFAIgCAQIAAADIAXgCQAVAAAAAPQABAQgYgBIgWABIgBAfIABAfQAAAWgCAMQgEANgLAAQgHAAgEgEg");
	this.shape_53.setTransform(256.8,20);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_54.setTransform(244.7,22.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgOBVQgFgEAAgHIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAHgFAEQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_55.setTransform(235.2,19.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAcAAQAVAAANAGQASAKAAARQAAANgPALQgGAEgUAIIgnARQAHAGAHADQAIADAKABQAPAAALgHQAKgGAFAAQANAAAAAMQAAAOgTAIQgRAHgSAAQgbAAgSgOgAgQgcQgHAIgEAPIAagMQAOgHAKgGQgIgFgNABQgJAAgJAGg");
	this.shape_56.setTransform(214.3,22.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAbBVQgDgJgCgRQgCgRAAgLIAAgIIABgJIgBgKQgBgGgFAAQgNAAgJAMQgGAFgJARQAAArgEAIQgFAKgKAAQgGAAgFgFQgFgEAAgHIABgFQABgDAAgeIAAhNIABgDIAAgTIgBgKIgBgMQAAgGAFgFQAFgDAHAAQALgBAEAMQACAHAAAQIAAAXIgBAXQAJgIAJgFQAJgEALAAQAUAAAJALQAHAJABAQIABAdIADAXIAEAXIAAAEQAAAHgFAEQgFAFgGgBQgMAAgEgMg");
	this.shape_57.setTransform(201,19.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgKBRQgFgDAAgHIAAgNIAAgNIgCg7IgVgCQgPgCAAgNQAAgHAFgFQAEgEAHAAIAUACIgBgNIAAgMQgBgGAGgEQAFgEAGgBQARABAAAdIAAAJIALgBQAOAAAEACQAKADAAALQAAAHgEAEQgGAEgHAAIgFAAIgGAAIgLABIACA9IAAAGIAAAGQAAAbgRAAQgFAAgFgEg");
	this.shape_58.setTransform(188.3,20.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAAKAEQALADAFAAQAXAAAAgKQAAgFgQgIQgYgKgGgEQgQgMAAgQQAAgYAYgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgLAAQgMAAgDgKIgJAAQgbgBgBAJQABAEAQAHQAXAMAIAFQARALAAAQQAAAVgTAJQgPAJgVAAQgQAAgMgFg");
	this.shape_59.setTransform(166.2,22.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgOBVQgFgEAAgHIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAHgFAEQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_60.setTransform(157.4,19.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgoAyQgTgOAAgbQAAgdAQgUQARgXAdAAQATAAAOAGQASAKAAARQAAANgPALQgGAEgUAIIgmARQAFAGAIADQAIADAJABQAQAAALgHQAKgGAGAAQAMAAAAAMQAAAOgUAIQgQAHgTAAQgbAAgSgOgAgPgcQgIAIgFAPIAagMQAQgHAJgGQgIgFgMABQgLAAgHAGg");
	this.shape_61.setTransform(136.5,22.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgQA0IgohdIgBgHQAAgGAFgFQAGgEAGAAQAKAAAFAJQAGAOATA0IAQgoIALgZQAEgKAKAAQAHAAAFAFQAFAEAAAGQAAAFgTAqIgZA0QAAAFgEAEQgFAEgFAAQgMAAgEgMg");
	this.shape_62.setTransform(124.3,22.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgOBVQgFgEAAgHIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAHgFAEQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_63.setTransform(115.2,19.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgtA9QgFgEAAgHIAAhMIABgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQAUgQAZAAQAXAAAAAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgFAEQgEAFgHAAQgIAAgDgFg");
	this.shape_64.setTransform(106,22.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgKBRQgFgDAAgHIAAgNIAAgNIgBg7IgXgCQgOgCAAgNQAAgHAEgFQAFgEAHAAIAUACIgBgNIAAgMQAAgGAEgEQAGgEAGgBQAQABAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgEAEgIAAIgFAAIgGAAIgLABIACA9IAAAGIABAGQgBAbgQAAQgGAAgFgEg");
	this.shape_65.setTransform(94.4,20.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AghA9QgRgGAAgNQAAgMAOAAQAGAAAJAEQALADAFAAQAXAAAAgKQAAgFgRgIQgWgKgHgEQgQgMAAgQQgBgYAZgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgLAAQgMAAgDgKIgJAAQgbgBgBAJQABAEAPAHQAYAMAIAFQARALAAAQQAAAVgTAJQgPAJgVAAQgPAAgOgFg");
	this.shape_66.setTransform(82.7,22.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_67.setTransform(60.2,22.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgKBVQgGgEAAgHIABgFIAAgFIAAgRIgBgQQAAgQgDgaQgDgfAAgLIgGAAQgaAAgQgEQgNgDAAgMQAAgGAFgFQAFgGAIABIASACIATABIAVAAIAVAAIAaABIAbABQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAIgcgCIgdgBIADAwQADAdAAASIABAMIAAALQAAAJgDAHQgFAJgJAAQgFAAgFgEg");
	this.shape_68.setTransform(45.8,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.51)").s().p("EghvAJOIAAybMBDfAAAIAASbg");
	this.shape_69.setTransform(216,59);

	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,432,118);


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


(lib.staticbuffyfArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6B4E32").ss(0.5,1,1).p("AgdhjQgEAPAAARAh7BSQgBADgBADQAGAHAGAFAB+A3QAAgBAAAA");
	this.shape.setTransform(14.3,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6B4E32").ss(0.5,1,1).p("AgEAPQAEgPAFgO");
	this.shape_1.setTransform(99.8,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AhjB9QADgDACgCQAXgbAPgnQABgFABgFQADgQAEgOQAKgeARgWQAIgKAJgJQAcgeAogWQAMgHANgGQBKgiAUhJQABgEABgEQACgIADgHAFrggQgKAegLAcQgRArgVAoQgTAjglAdQgjAagoAUQgpAUgsAPAlKAoQAoAKAlANQAUADAUAEQAsAJAhARQADACACABQASAKAOAQQALAKAIANQABABAAABQAPAWAEAWAlqgVQABABAAABQAAAAAAgBAlpgTQANAfASAcQgGgCgGgC");
	this.shape_2.setTransform(63.1,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("AEBj7QABgCARgtQARguBBgZQADgBADgBQAHgCAHgCQAugKAxAPQAwAPAYAtQAWApgCAwQgBAxgPAuQgPAugtAOQgjAKgYAZAnDitQABgDACgEQARguAxACQAsACgGA4QAQgFATACQA1AFgeA4QgSAhAJA3AolhQQAAgDAAgDQgBglAVgcQAVgdAdABQAMAAANAFAolhQQABAIACAIQACAMAKAGACbD/QgcAWgdATQgaARgcAXQgJAHgIAHQgcAZgnAEQguAFghgaQglgdgdghQgdgigqgYQgpgYgegiQgbgfgjgWQgEgEgFgCQgTgKgSgCQgXgBgVgHQgWgIgUgNQgogaAOgoQgEgGgDgIQgVgqAagm");
	this.shape_3.setTransform(56.4,38);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE9670").s().p("Ah3FmQglgdgdghQgdgigqgYQgpgYgegiQgbgfgjgWIgJgGQgTgKgSgCQgXgBgVgHQgWgIgUgNQgogaAOgoIgHgOQgVgqAagmIADAQQACAMAKAGQgKgGgCgMIgDgQIAAgGQgBglAVgcQAVgdAdABQAMAAANAFIADABQgDAOAAAPIAAADIAAgDQAAgPADgOIADgHQARguAxACQAsACgGA4QAQgFATACQA1AFgeA4QgSAhAJA3IAAABIABACQAMAfASAbQApALAlANIAoAGQAsAJAhASIAEACQASALAPAPIAEgFQAXgaAOgoIACgKQADgPAFgPQAJgdARgXIARgSQAegeAogXIAYgMQBKgiAVhKIACgIIAEgPIASgvQARguBBgZIAGgCIAOgEQAugKAxAPQAwAPAYAtQAWApgCAwQgBAxgPAuQgPAugtAOQgjAKgYAZIAJgeIgJAeQgKAegLAcQgRArgVAoQgSAjglAdQgjAagpAUQgpAUgrAPQgcAWgdATQgbARgbAXIgRAOQgcAZgnAEIgQABQgkAAgbgWgAgOCVIACACQANAWAFAWQgFgWgNgWIgCgCQgIgMgKgLQAKALAIAMgAkIApIgMgDIAMADgAojAOQAGAHAHAEQgHgEgGgHIADgGIgDAGIAAAAg");
	this.shape_4.setTransform(56.4,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.staticbuffyfArm, new cjs.Rectangle(-1,-1,114.9,78), null);


(lib.staticbuffybArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AiNhwQgOAbgOAaQglBZA8ApQBDAwBlgHQBogIArhQQAYgsgPg8");
	this.shape.setTransform(19.2,42.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AHmgzQACgBABAAQAUgMAUAMQAjAWARAgQACAEACAEQAJAUgOAHQgFgJgIgJQgIgLgKgGQgcgRghARQAAAAgBABQAAgBAAAAQgdghAcgUgAIaCGQAWgFAQgOQAOgMAAgSQABgXgJgUQgBgCgBgDApOA9QAIgNAHgMQAYgqAigjQAhgjAjggQAkghAogbQAogbAlgfQAkgdA1AFQAeACAdABQASABARABQAxADAwAIQAIABAIACQAjAGAjALQApAMAqAOQARAGAQAFQAdAJAcAIQAQAEAPAEQAgAJAbAKQArAQArATQApARAaAeAhzgxQAdABAcABQAdAAAdAAQARAAARgBQAwAAAvAHQAdAEAcAHQATAFATAGQAaAHAWAOQACABABABQABABABABQAPAKAMAOQAFAGAEAGQAFAHADAIAEVAGQAFASgDASQgDAagSAYQgfAsAtAZQAaAPAUARQANAMAVgSQADgDADgDQAeggAMgjQAAgHADgGQgBAFgCAHQAAAAAAABQgBAIACALQAAAAAAAAQAqAAAVAZQAUAXgDAVQANAHARACQAYADAFgQQALgigNgeAHnADQAAAAAAAAQgBAAgBABQgWAOgGAYQgEAOACASQAsgCAcApQAHAKAEALAHIBSQAAgEgBgEQgEAAgFABQgiAFgJAVQAFgfgcALQgmAPgGAnAFgC7QAAAnAdAQQAtAYAlgiQAQgPACgPAkmCCQALgTANgSQAOgRAQgQQAKgJAKgJQAYgXAZgWQAMgLALgKQARgNAQgMQgQgBgRgC");
	this.shape_1.setTransform(64.1,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE9670").s().p("Ao+DkQg8gqAmhZIAcg1IAOgaQAYgpAigkQAhgiAkggQAjghAogbQAogcAmgeQAjgdA1AEIA8AEIAjACQAxACAvAIIAQADQAjAHAjAKQApAMArAPIAhALIA5AQIAeAJQAgAJAcAKQArAQArASQAoASAaAeIADgCQAUgMAUANQAjAVARAiIAEAIQAJATgOAHIACAFQAJATAAAXQgBASgNAMQgRAPgVAFQgFgLgHgKIgBgCQgaglgoAAIgBAAIAAAAIgDAAIgBAAIABAAIADAAIAAAAIABAAQAoAAAaAlIABACQAHAKAFALQAMAegKAhQgFARgYgDQgSgDgNgHIABgFQAAgTgSgUQgVgYgpgBIgBAAIAAAAIgCgNIABgGIAAgBIADgLQgDAFAAAHIgBAGIACANIAAAAIABAAQApABAVAYQASAUAAATIgBAFQgCAQgPAOQgmAjgsgYQgegRAAgnIAGgFQAeggAMgkQgMAkgeAgIgGAFQgVASgNgLQgTgRgbgPQgtgaAggrQARgYADgaQADgSgFgSQAPALAMAMIAKANQAEAHAEAIQgEgIgEgHIgKgNQgMgMgPgLIgCgBIgDgCQgVgPgbgIIglgKQgdgHgcgFQgvgHgxABIgiAAIg5AAIg5gCIghgCIAhACIghAaIgYAVIgxAtIgTASQgRAPgNARQgOASgLAUQALgUAOgSQAPA9gZAtQgqBQhpAIIgZABQhVAAg7gqgAGSBAQgmAOgGAnQAGgnAmgOIAAgBQAHgCAFAAIAAAAIAAAAQANAAgDAVIAAACQAJgWAigEIAJgBIACAIIgCgIIgJABQgiAEgJAWIAAgCQADgVgNAAIAAAAIAAAAQgFAAgHACIAAABIAAAAgAHcA5IAAgNQAAgKACgJQAGgZAWgMIACgCIgCACQgWAMgGAZQgCAJAAAKIAAANgAI6gOQAKAGAJAKQAHAIAFAKQgFgKgHgIQgJgKgKgGQgcgTggATIgCAAIAAAAIABAAIABAAQAQgJAPAAQAPAAAOAJgAH8gOQgPgSAAgNQAAgOAOgJQgOAJAAAOQAAANAPASgAhdhDIAAAAg");
	this.shape_2.setTransform(61.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.staticbuffybArm, new cjs.Rectangle(-0.2,-1,124.3,55.9), null);


(lib.RIbbon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AjgCjQgwgOgYgCIAFgGQAJgIAAgCQgGgJAAgHQAAgDAFgEQAHgFACgHQASAEAiAVQAiASBHAAQATAAAbgWQANgRAEgIIACgbIACgaQAAgLgIgYQgJgWAAgOQAAgNATg7QAIgbAPgKQAUgMA6gJQAOAAAeApQAdApAaAAQAIAAAOgSQAOgSAGgSQAHgWBOgYIABABIACAfQABAGAMAJIACACQgFAFgLAAQg3ADgHAFQgHAGgQATQglArgnABQgHAAgegWQgfgUgagBQgXAAgHAGQgOAIgOAkQgMAdAAAaQAAANAKAxQAAAYgNAdQgTArgMAGQgHADg2AAQgYAAg9gRg");
	this.shape.setTransform(4.4,-3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjiCuQgRgGgpgIQgegEAAgEIAAgEIAAgBQAAgEAHgCQAIgDAFgGQgFgJAAgHQAAgGADgCQAGgCADgGIAAgJQAAgFAKAAQAIAAAtAWQAtAXA0AAQBCgBAAhaQAAgJgJgZQgIgYgBgNQAAgGAJggIALgmQANgdAKgJQAJgIAZgGIAygMQAOAAASARQAQANAGAMQAFAIAKAMQAQATANAAQAKAAAOgYIASghQAJgOAlgPQAigOANAAQALAAgEAjQAbAbAAAGQAAAEgHAAQgJAAgCgEIAAgCIgJAHQg0gEgNALIgWAYQgIAOgVAPQgZASgYAAQgOAAgegVQgegVgYAAQgaAAgIAKQgHATgKAQQgKASAAAgQAJAxAAAMQgBAVgOAnQgOAogXALQgKAFgcAAQg6AAgzgRgAkdBtQgFAEAAADQAAAHAGAJQAAACgJAIIgFAGQAYACAwAOQA9ARAYAAQA2AAAHgDQAMgGATgrQANgdAAgYQgKgxAAgNQAAgaAMgdQAOgkAOgIQAHgGAXAAQAaABAfAUQAeAWAHAAQAngBAlgrQAQgTAHgGQAHgFA3gDQALAAAFgFIgCgCQgMgJgBgGIgCgfIAAgBIgBAAQhOAYgHAWQgGASgOASQgOASgIAAQgaAAgdgpQgegpgOAAQg6AJgUAMQgPAKgIAbQgTA7AAANQAAAOAJAWQAIAYAAALIgCAaIgCAbQgEAIgNARQgbAWgTAAQhHAAgigSQgigVgSgEQgCAHgHAFg");
	this.shape_1.setTransform(4.6,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-22.9,63,38.2);


(lib.Ribbon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgtBZQgSgMgEgTQgCgJgUgOQgXgPgVgBQhNgDgRgIQgLgFgIgOIgdgbQgXgRgaAGQATgPAGgHIAKgLQAHgFAIgCQApgXAIAxQAVAPAHANQAGANAqgGQAqgGAdAbQAOAQAKAWQALAWAqADIAlgGQARgBACgDQASgCAIADQAGACAWgHQANgDAUgWQAIgIgRgXQATg6ApAbQAqAbANADQANADAKAEQAJAEAtAKIgXAiQgDAFAAAUIABALQgXgMgDgFQgFgGgDgRQgDgNgTgRQgUgQgKAAQguAAgKAWIgBAZIAAAbQAAAVg2AAIgrgCQgeAAg0AOQgJAAgOgIg");
	this.shape.setTransform(-4.6,-7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6BZQgLgQgBgEQgBgIgTgOQgKgIgKgBQgkgFgggCQgngCghghQgIgIgQgMQgUgPgZAAQgVAAAAgCQAAgDAggYQAFgIAFgGQAKgKAPgBQABgCATgMQARgLAZArQAZAqAxgDQAxgCAZAlQAYAkAgAHQAfAIAJgDIATgFQAFgBAKgEQAHgCAQACQAPABAIgEQAWgLgBgHQgCgIgFgLQgFgMAVgYQAUgYAYACQAYADAPASQAPATAuAKQA2ALAAAHIgaApQACAogIAAQgCAAgBgEIgEABQgQAAgNgSQgKgNAAgIQgDgOgSgQQgRgPgIAAQgmAAgGASQgBADAAAqQAAAhhAAAIgqgCQgVAAg9APQgVAAgVgVgAkOgjIAdAaQAIAOALAFQARAJBNACQAVABAXAQQAUAOACAIQAEATASAMQAOAJAJAAQA0gOAeAAIArACQA2AAAAgWIAAgbIABgZQAKgWAuAAQAKAAAUARQATARADAMQADARAFAGQADAGAXAMIgBgLQAAgUADgFIAXgiQgtgLgJgEQgKgEgNgCQgNgDgqgbQgpgbgTA6QARAWgIAIQgUAWgNAEQgWAGgGgCQgIgCgSACQgCACgRACIgmAFQgpgCgLgWQgKgWgOgQQgdgbgqAGQgqAGgGgNQgHgNgVgQQgIgwgpAXQgIABgHAGIgKALQgGAGgTAPQAHgBAGAAQATAAARANg");
	this.shape_1.setTransform(-5.1,-7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-18.9,68.2,22);


(lib.INFINITIVES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB4CYIAAkvIG/AAIAAEvg");
	mask.setTransform(56.7,-1.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AgxA8QgLgIAAgMQAAgGADgDQAEgEAFAAQAJAAAEAIQAGAMASAAQAPAAAPgHQAPgHABgJQAAgMgLgDQgGgDgUAAQgQgBgNgFQgRgHAAgPQAAgSATgPQAUgPAVAAQAKAAANAEQAQAGAAAGQAAAFgDAEQgDAEgGAAIgNgCIgOgCQgMAAgJAGQgLAGAAAHQAAADADACQADADAIABIAWABQAVABALAKQAOALAAATQAAAYgbANQgVAJgaAAQgXAAgOgLg");
	this.shape.setTransform(60.1,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AgqBHQgKgJAAgeIACgkIABglIAAgKIgBgJQgBgPANAAQAEAAAEACIAUgDIASgCQAXAAAOAFQAJADAAAKQgBAEgDAEQgEAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAkgDIAVgCQAGAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEAEQAFADAAAGQAAALgLACQgKABgcAAQgeAAgJgIg");
	this.shape_1.setTransform(47.8,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6699").s().p("AgUBCQgKgbgOgyIgIgZQgFgSgBgHQABgEAEgFQADgDAGAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAUg3IAIgWQAGgNAHgHQADgFAHAAQAEAAAFAEQADADAAAGQABADgDAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgJAAgFgJg");
	this.shape_2.setTransform(35.3,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgEAAIgYgDQgCARAAAbIAAArIAZgBQAFAAAFADQADAFAAAEQAAAGgDADQgFAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_3.setTransform(23.5,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6699").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_4.setTransform(11.9,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYACgXIgUABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgXgDQgCARAAAbIAAArIAZgBQAFAAAEADQAEAFAAAEQAAAGgEADQgEAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_5.setTransform(-0.1,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6699").s().p("AhABHQgEgDAAgGIABgLIAAgLIABgQIAAgRIAAgRIAAgRIgBgRIgCgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIAAgOIgBg9IgBgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgBAPQgCAMgMAAQgHAAgHgHQglgggrg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgEgFg");
	this.shape_6.setTransform(-12.9,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYADgXIgVABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgYgDQgBARAAAbIAAArIAZgBQAGAAADADQAEAFAAAEQAAAGgEADQgDAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_7.setTransform(-25.9,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6699").s().p("AgvBLQgDgEAAgGIAAhpIAAgLIAAgLQAAgGAEgDQADgDAGgBIAGABIAUgCIAPgBQALAAAQAEQAUAGAAAHQAAAGgEADQgDAEgGAAIgFgBQgLgEgSABIgMAAIgQACIAAAfQAOgDAJgBQAQABANABQAMACAAALQAAAFgEADQgDADgGAAIgOgBIgOAAQgHAAgQAEIAAA6QAAAGgEADQgFAEgFAAQgFAAgEgDg");
	this.shape_8.setTransform(-36.6,-0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6699").s().p("AhBBHQgDgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIABgOQAAgtgCgQIgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgGAAgJgHQgkgggrg6IgBAdIAAAWIABAWQAAAcgNAAQgHAAgFgFg");
	this.shape_9.setTransform(-50.3,-0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgEAAIgYgDQgCARAAAbIAAArIAZgBQAFAAAFADQADAFAAAEQAAAGgDADQgFAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_10.setTransform(-63.3,-0.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0066").s().p("AgxA8QgLgIAAgMQAAgGADgDQAEgEAFAAQAJAAAEAIQAGAMASAAQAPAAAPgHQAPgHABgJQAAgMgLgDQgGgDgUAAQgQgBgNgFQgRgHAAgPQAAgSATgPQAUgPAVAAQAKAAANAEQAQAGAAAGQAAAFgDAEQgDAEgGAAIgNgCIgOgCQgMAAgJAGQgLAGAAAHQAAADADACQADADAIABIAWABQAVABALAKQAOALAAATQAAAYgbANQgVAJgaAAQgXAAgOgLg");
	this.shape_11.setTransform(60.1,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0066").s().p("AgqBHQgKgJAAgeIACgkIABglIAAgKIgBgJQgBgPANAAQAEAAAEACIAUgDIASgCQAXAAAOAFQAJADAAAKQgBAEgDAEQgEAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAkgDIAVgCQAGAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEAEQAFADAAAGQAAALgLACQgKABgcAAQgeAAgJgIg");
	this.shape_12.setTransform(47.8,-1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0066").s().p("AgUBCQgKgbgOgyIgIgZQgFgSgBgHQABgEAEgFQADgDAGAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAUg3IAIgWQAGgNAHgHQADgFAHAAQAEAAAFAEQADADAAAGQABADgDAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgJAAgFgJg");
	this.shape_13.setTransform(35.3,-0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgEAAIgYgDQgCARAAAbIAAArIAZgBQAFAAAFADQADAFAAAEQAAAGgDADQgFAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_14.setTransform(23.5,-0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0066").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_15.setTransform(11.9,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYACgXIgUABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgXgDQgCARAAAbIAAArIAZgBQAFAAAEADQAEAFAAAEQAAAGgEADQgEAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_16.setTransform(-0.1,-0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0066").s().p("AhABHQgEgDAAgGIABgLIAAgLIABgQIAAgRIAAgRIAAgRIgBgRIgCgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIAAgOIgBg9IgBgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgBAPQgCAMgMAAQgHAAgHgHQglgggrg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgEgFg");
	this.shape_17.setTransform(-12.9,-0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYADgXIgVABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgYgDQgBARAAAbIAAArIAZgBQAGAAADADQAEAFAAAEQAAAGgEADQgDAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_18.setTransform(-25.9,-0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0066").s().p("AgvBLQgDgEAAgGIAAhpIAAgLIAAgLQAAgGAEgDQADgDAGgBIAGABIAUgCIAPgBQALAAAQAEQAUAGAAAHQAAAGgEADQgDAEgGAAIgFgBQgLgEgSABIgMAAIgQACIAAAfQAOgDAJgBQAQABANABQAMACAAALQAAAFgEADQgDADgGAAIgOgBIgOAAQgHAAgQAEIAAA6QAAAGgEADQgFAEgFAAQgFAAgEgDg");
	this.shape_19.setTransform(-36.6,-0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0066").s().p("AhBBHQgDgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIABgOQAAgtgCgQIgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgGAAgJgHQgkgggrg6IgBAdIAAAWIABAWQAAAcgNAAQgHAAgFgFg");
	this.shape_20.setTransform(-50.3,-0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgEAAIgYgDQgCARAAAbIAAArIAZgBQAFAAAFADQADAFAAAEQAAAGgDADQgFAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_21.setTransform(-63.3,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-16.9,139.2,30.5);


(lib.InfinitiveLines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0066").ss(10,1,1).p("ACUhDICHCHAJDhDICHCHAFshDICHCHAPyhDICHCHATKhDICHCHAWhhDICHCHAMbhDICHCHAZ5hDICHCHAdQhDICHCHA7/hDICHCHA/WhDICHCHA4nhDICHCHA1QhDICHCHAx4hDICHCHArJhDICHCHAkahDICHCHAnyhDICHCHAuhhDICHCHAhDhDICHCH");
	this.shape.setTransform(200.7,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0066").ss(10,1,1).p("ACUhDICHCHAJDhDICHCHAFshDICHCHAPyhDICHCHAWhhDICHCHATKhDICHCHAMbhDICHCHAdQhDICHCHAZ5hDICHCHA/WhDICHCHA7/hDICHCHA1QhDICHCHA4nhDICHCHAx4hDICHCHArJhDICHCHAkahDICHCHAnyhDICHCHAuhhDICHCHAhDhDICHCH");
	this.shape_1.setTransform(200.7,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0A6B").ss(10,1,1).p("AZ5g1ICHBrAdQg1ICHBrAWhg1ICHBrAPyg1ICHBrAJDg1ICHBrAMbg1ICHBrACUg1ICHBrAkag1ICHBrAhDg1ICHBrAFrg1ICHBrArJg1ICHBrAx4g1ICHBrAugg1ICHBrA4ng1ICHBrA1Qg1ICHBrA/Wg1ICHBrA7/g1ICIBrAnxg1ICHBrATJg1ICHBr");
	this.shape_2.setTransform(201.1,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF1470").ss(10,1,1).p("AZ5goICHBRAdQgoICHBRATKgoICHBRAWhgoICHBRAPygoICHBRAJDgoICHBRAMagoICHBRACUgoICHBRAkagoICHBRAhDgoICHBRAFsgoICHBRArJgoICHBRAx4goICHBRAuggoICHBRA4ngoICHBRA1PgoICHBRA/WgoICHBRA7+goICHBRAnxgoICHBR");
	this.shape_3.setTransform(201.5,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF1F75").ss(10,1,1).p("AZ5gaICHA1AdQgaICHA1ATJgaICHA1AWhgaICHA1APygaICHA1AJDgaICHA1AMbgaICHA1ACUgaICHA1AkagaICHA1AhDgaICHA1AFrgaICHA1ArJgaICHA1Ax4gaICHA1AuggaICHA1A4ngaICHA1A1QgaICHA1A/WgaICHA1A7/gaICIA1AnxgaICHA1");
	this.shape_4.setTransform(201.9,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF297A").ss(10,1,1).p("AZ5gMICHAZAdQgMICHAZATKgMICHAZAWhgMICHAZAPygMICHAZAJDgMICHAZAMagMICHAZACUgMICHAZAkagMICHAZAhDgMICHAZAFsgMICHAZArJgMICHAZAx4gMICHAZAuggMICHAZA4ngMICHAZA1PgMICHAZA/WgMICHAZA7+gMICHAZAnxgMICHAZ");
	this.shape_5.setTransform(202.2,6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF3380").ss(10,1,1).p("AZ5AAICHAAAdQAAICHAAATJAAICHAAAWhAAICHAAAPyAAICHAAAJDAAICHAAAMbAAICHAAACUAAICHAAAkaAAICHAAAhDAAICHAAAFrAAICHAAArJAAICHAAAx4AAICHAAAugAAICHAAA4nAAICHAAA1QAAICHAAA/WAAICHAAA7/AAICIAAAnxAAICHAA");
	this.shape_6.setTransform(202.6,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF3D85").ss(10,1,1).p("AZ5ANICHgZAdQANICHgZATKANICHgZAWhANICHgZAPyANICHgZAJDANICHgZAMaANICHgZACUANICHgZAkaANICHgZAhDANICHgZAFsANICHgZArJANICHgZAx4ANICHgZAugANICHgZA4nANICHgZA1PANICHgZA/WANICHgZA7+ANICHgZAnxANICHgZ");
	this.shape_7.setTransform(203,6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF478A").ss(10,1,1).p("AZ4AbICHg1AdQAbICHg1ATKAbICHg1AWhAbICHg1APyAbICHg1AJDAbICHg1AMaAbICHg1ACUAbICHg1AkaAbICHg1AhDAbICHg1AFrAbICHg1ArJAbICHg1Ax4AbICHg1AuhAbICHg1A4nAbICHg1A1QAbICHg1A/WAbICHg1A7/AbICHg1AnyAbICHg1");
	this.shape_8.setTransform(203.3,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF528F").ss(10,1,1).p("AZ5ApICHhRAdQApICHhRATKApICHhRAWhApICHhRAPyApICHhRAJDApICHhRAMaApICHhRACUApICHhRAkaApICHhRAhDApICHhRAFsApICHhRArJApICHhRAx4ApICHhRAugApICHhRA4nApICHhRA/WApICHhRA7+ApICHhRA1PApICHhRAnxApICHhR");
	this.shape_9.setTransform(203.7,6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF5C94").ss(10,1,1).p("AZ4A2ICHhrAdQA2ICHhrATKA2ICHhrAWhA2ICHhrAMaA2ICHhrAPyA2ICHhrAJDA2ICHhrACUA2ICHhrAkaA2ICHhrAhDA2ICHhrAFrA2ICHhrArJA2ICHhrAx4A2ICHhrAuhA2ICHhrA4nA2ICHhrA/WA2ICHhrA7/A2ICHhrA1QA2ICHhrAnyA2ICHhr");
	this.shape_10.setTransform(204.1,6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF6699").ss(10,1,1).p("AcAhDIiHCHAYohDIiHCHAVRhDIiHCHAfXhDIiHCHAR5hDIiHCHAOhhDIiHCHALKhDIiHCHAEbhDIiHCHAiThDIiHCHABEhDIiHCHAHzhDIiHCHApChDIiHCHAvxhDIiHCHAsZhDIiHCHA2ghDIiHCHA53hDIiHCHA9PhDIiHCHAzIhDIiHCHAlqhDIiHCH");
	this.shape_11.setTransform(204.5,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF6699").ss(10,1,1).p("AZ5BEICHiHATKBEICHiHAWhBEICHiHAdQBEICHiHAMaBEICHiHAPyBEICHiHAJDBEICHiHACUBEICHiHAkaBEICHiHAhDBEICHiHAFsBEICHiHArJBEICHiHAx4BEICHiHAugBEICHiHA4nBEICHiHA/WBEICHiHA7+BEICHiHA1PBEICHiHAnxBEICHiH");
	this.shape_12.setTransform(204.5,6.8);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF6699").ss(10,1,1).p("AcAhDIiHCHAVRhDIiHCHAYohDIiHCHAfXhDIiHCHAOhhDIiHCHAHzhDIiHCHALKhDIiHCHABEhDIiHCHAEbhDIiHCHAlqhDIiHCHAiThDIiHCHApChDIiHCHAvxhDIiHCHAsZhDIiHCHA2ghDIiHCHA9PhDIiHCHA53hDIiHCHAzIhDIiHCHAR5hDIiHCH");
	this.shape_13.setTransform(204.5,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(17).to({_off:false},0).wait(4).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,411.4,23.5);


(lib.BuffythroughtheFinishLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(9));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABMgxQgUgCgLgDQgFgCgCgCQgBgBgBAAAgUg7QAGACAFADQgDAFgEAFQgBABgDAAABNgwQACAFAFAAQABABACAAIgBAFQgUAAgUAAQAAAAgBAAQgCAAgCAAQgCAAgBAAQgYAAgXAAQgCAAgEAAQgCAAgBgCQgCgBAAgDAhWA8QAGgHADgMQAAgEACgCQALg2AsgY");
	this.shape.setTransform(-14,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("Agmg7IBCAAIALAFIgIAKQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgqAYgMA2IgBAGQgEAMgGAHg");
	this.shape_1.setTransform(-18.8,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#232120").s().p("AgqAHIACgPIABAEQAeACAeAAIAGAAIADAAIAEAAIAJAAIAAAFIgJACIgEAAQgWAEgVAAIgdgCg");
	this.shape_2.setTransform(-14.8,27.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2C2A").s().p("AgHgBIACAAIABAAIAMAAIgJACIgGABg");
	this.shape_3.setTransform(3.3,72.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#201C16").s().p("AAEALIAFABIAAAEIgFgFgAgBAFIgEABQgCgFgBgFIAAgGIABgEIAFgBIABAFIACAEIACAGIgBABQgBAFABADIgDgEg");
	this.shape_4.setTransform(2.2,68.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9F9B95").s().p("AAAAAIgBgDIADgBIAAAHIAAACIgCgFg");
	this.shape_5.setTransform(2.1,67.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#96978E").s().p("AACgBIAFAAIAAACIgNABIAIgDg");
	this.shape_6.setTransform(24.3,51.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C1C1C").s().p("AgPADIAAgDIAEAAIALAAIAFAAIAHgEIAAACIAEABIgEAGQgOAAgNgCg");
	this.shape_7.setTransform(24.3,45.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E6E6").s().p("AACAFIgDAAIgGAAIgGAAIABgEQABgDAEgCIAGAAIAPAAIAAAFIAAAEIgMAAg");
	this.shape_8.setTransform(23,44.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C2BFBB").s().p("AgEAAQACgCAIAAIgBACIgDABIgEACQgBgBAAAAQgBgBAAAAQgBgBAAAAQABAAAAAAg");
	this.shape_9.setTransform(20.3,48.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#000000","#FFFFFF"],[0,1],108.8,-283,0,108.8,-283,819.2).s().p("AhrB5IgBgBIAAgEIgEgBIgDgCQgBgDABgFIABgCIgCgGIAAgBIAAgIIgEAAIAAgGIAAgFIAAgGIgFgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAABgBIAAgEQAagQAWgTIACgBQAOgNANgMQANgOAMgPQAVgaAQgeQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAAAQASgLAOgNIAEgDIAEgBQAYgHAiACIABAFIADABIAAABIAEACIACAIIAAAFQABAGgDAFIgDACIgBAOIAAABQgCAXgKARQgFALgIAIQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQgOALgJAPQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQgTARgSATQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIgXARIgKAHIgDgDIgGACIgCAEIgBACIgSAEIgQAQIgaAFIgEAEIgDADIgVAAgAhIA3IgBACIAAAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABQAKAAAFAKIADADIABAAIACAAIABgBIABgBQgCgKgIgGQgEgDgEABIgFAAIgBABgAg6AfIgBACIAAAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABQAPAAANAGIAGACIAQAEQAHABAEAIIAAAAIADAAIABgBIABgBQAAgOgOgBQgLgBgJgFQgHgEgIgBIgIAAIgJAAIgBABgAAGgQIABACQAaAHAagCIABgBIABgBIABgBIgBgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQgUABgUgEQgEAAgEgCIgDAAQgCACAAADgAAYg4IgBACIAAAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABQAiACAiAEQAFABAEAAIABgBIABgBIABgBIgBgCQgJgGgLAAQgYgBgWgCIgNAAIgBABgABphKIgIAEIANgBIAAgDIgFAAgAA7hlQgBAAAAABQAAAAAAABQAAAAABABQABABABAAIAFgBIACgBIABgEQgJAAgBACg");
	this.shape_10.setTransform(14,58.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DAD7D4").s().p("AggATQAagdAogLQgEACgBAEIgBAEQgMAEgHAHQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgCABIgBAAQgQAJgPALQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAgBAAIABgDg");
	this.shape_11.setTransform(18.7,46.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6A6663").s().p("AgEgGIAEAGIADABIACAGQgGgDgDgKg");
	this.shape_12.setTransform(13.8,47.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#211F1D").s().p("Ag6CsIAAgFIAEgRIAAAAIAFgTIAIADIgBAEQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgEACgBAFQgCAGACALIABAFIgGAAgABagXIAJgEIgBADQgGACgBABgAgYg/IgGAAIAAgFIAAgGQgrgWgSgtIgEgNIgCgEIgBgGIAAgGIAAgBIANANIAIARQATAkAiAWIAFADIAAAMIAAAFg");
	this.shape_13.setTransform(5.6,51.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#262423").s().p("AgCAaIAAgRIAAgFQgEgVAGgNIADgEIAAAEQACAagBAQQgCASgEAFg");
	this.shape_14.setTransform(16.8,37.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A4A3A3").s().p("AAAgGIAAgBIAAgCIAAADIABAFQABAFgBAGQgBgHAAgJg");
	this.shape_15.setTransform(13.1,37.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC9966").s().p("ABSDjIAAAAQgCgGAEgTIAAgGIAAgFIAAgGIAAg4IAAgGIAAgFIAAgnIgGAAIAAgGIAAgMIgFgCQgigWgTglIgIgQIgBgGIAAgGIAAAAIAAgrIAAgMIAAgBIABgDIAAgBIAMgTIADgFQgSgBgWAFIgBABQgCADgEAAIgTAEIgQAEIgEABIgMAAIgEAAIgJAAIAAABQgeAAgfgDIgBgDQgLgPgFgeIAAgFIABgGQAMgxAlgYIAGAAIAvAAIADAAIABACIAAABIAEAAQAUACAVAAIAFABIAZAFIACABIAmAHIASADIAEABIAAABIADACQANALAKANIAJAMQAOAXAJAbIAAAFIABAGIAFAXIAEAMIAHAbIgBAGIgBAKQAAAQAHAIIAAAEIAAAAIAAAzIAAAFIAAAFIABALQAAAVgGAOIAAAFQgKANAEAaIAAAGQgDAMgGAJIgFAHIgHAHQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgLgSgLAZIgBAFQgIAMgGAFQgFAFgCAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_16.setTransform(-4.2,36.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcENIAAgGIAGAAIgBgEQgCgLACgGQACgFAEgCQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAABAAABQAAABAAAAQAAABAAAAQAAABABAAIAEABIAAAHIAAAFIAAAGIgEABIgBADIAAAGQAAAHACAFIAEgCIAFAFIABACIAEAEIABABIAVAAIADgCIAEgFIAagFIAQgPIASgFIABgCIACgEIAGgCIADAEIALgHIAXgSQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQATgTASgQQABAAABAAQABAAAAAAQABgBAAAAQABAAAAAAQAJgQAOgLQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAIgIAGgLQAJgQACgYIAAgBIABgOIADgCQADgFAAgGIgBgFIgCgIIgDgCIAAgBIgEgBIgBgFQgigCgYAHIgEABIgEADQgOAOgRAKQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAgBABQgRAdgVAaQgMAPgNAOQgNAOgOAMIgBABQgXATgYARIgIgDQAHgYALgUQgVgDAOgPIABgEIAAgGIgBgQIAAgBQAAgRAHgLIAAgGIAAhIIAFAAIAFAAIAGAAIAAAnIAAAFIAAAHIAAA3IAAAHIAAAEIAAAGQgEATACAGIAAABQACAFAIgIQAGgFAIgMIABgFQALgZALASQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIAGgIIAFgHQAGgJADgMIAAgGQgEgaALgNIAAgFQAFgOAAgVIgBgLIAAgFIAAgFIAAgxIAAgCIAAgEQgHgIAAgQIABgKIACgGIgIgaIgDgNIgGgXIgBgGIAAgFQgJgbgOgWIgJgNQgKgNgNgLIgDgCIAAAAIgEgCIgRgDIgmgHIgBgBIgbgFIgFgBQgVAAgUgCIgEAAIAAgBIgBgCIgCAAIgwAAIgGAAIAAAAIAAAAIgCgBIgBgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBgBAAIAAgBQABAAABAAQABAAAAAAQABAAAAAAQABAAAAgBIAHgKIgLgFIA5AAIACABIAHAEQAKADAVADIABAAQABAFAGAAIADABIADABQANAFAPABIADAAIAGAAQAPABAPADIAIACIAJADIAGADIAAADIAFABIABAAIAGAFIADADIABAAIAIAHIAPAPQAHAHAFAIIAFAKIABAFIABADIADAGIAEAIQAJAXAHAZIADAQIAGAaIAAAQIAAADQgGADABAJIADALIABABIAAACIAAABQAAAJACAHIgDAJIgBAEIgCAJQgDAFgBAGIAAAJQABAMADAMQACAIAEAHQADAKAIADIAAgFIAAAAQAIAAABgKIABgIQAPgSAegEIAAgCQAcgFASAHIACABIAJAFIAAAGIgHAFIgFAAIAAgFIAAgGIgQAAIgGAAQgpAMgaAdIgJAEIABADQACgCAFgBQABAAABAAQAAAAABgBQABAAAAAAQAAAAABgBQAPgKARgJIAAgBIADgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQAHgHAMgDIAGAAIAGAAIAAADQANADAPAAIAEgHQAHACAFAFIAAARIAAAFIAGAAIgGA5IAAAFIgMALQgLAMgHAPQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABgBgBQgKAPgNAMQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgKAZgYANIgEAAIgNANQgVASgYANIAAAAQgVAOgYAGIgDACIgDAEIgVAAIgOAAIAAAAIgCAAIAAAEQgXgHgFgbgAh3kYIABAAIAoAAIABgFIgBAFIgoAAIgBAAIgFAAIAFAAgAA9DuIgBAAIgDgDQgEgKgLAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIAAgBIABgCIABgBIAFAAQAEAAAEACQAJAGABAKIAAABIgBABIgDAAgAB2DeIAAAAQgDgHgJgCIgQgEIgGgCQgNgGgPAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBAAIABgCIABgBIAJAAIAIABQAIAAAHAEQAJAGALAAQAPABABAOIgCABIgBABIgDAAgAB5CWIgBgDQAAgDACgCIADAAQAEACAFAAQATAFAUgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIABACIgBABIgBABIgBABIgNABQgUAAgTgFgADQB3QgjgEgigCQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAAAIABgCIABgBIANAAQAXADAXAAQALABAJAFIABACIgBABIgBABIAAABIgEAAIgFgBgACbgkQACgKALgPQADAXgHAMIgCAEQgIgEABgKgAB/hHIAAgBIgBgHIgBgSQgBgmAWAcIAAASIAAAGIgDAEQgHANAEAVIAAAGQgJgJgEgXgAhEhPIAAAAIAAAGIgCAAIgBgGQgEgYAEgSIADgNIAAgBIAAgCIAAgCIAAgGQgVAIgigCIgBAAIgCAAIgEAAIAAgGIgJAAIgDAAIgEAAIgGAAIAAgBIAKABIADAAIANgBIADgBIAQgEIATgDQAEgBADgDIAAgBQAXgFASABIgDAFIgLATIgBACIgBACIAAABIAAANIAAAqIAAAAIAAAGIACAGgAjxiKIgGgBIgEAAIAAgrQAGgHADgMIABgGQAMg3ArgYIAAABQABAAAAABQAAAAAAABQAAAAABAAQAAABABAAIABABIACABIAAAAIAAAAQglAYgMAxIgBAGIAAAFQAFAeALAPIgBAQIgagDg");
	this.shape_17.setTransform(2.6,42);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AAaglQADACABABQAGgBAHgBQgCgFgCgGABdAiQgCAEACAFQABABABACIgFACQgMgPgNgPQAAgBAAAAQgCgCgBgCQgBgBgBgBQgPgRgQgTQgBgBgCgDQgCgCABgCQAAgDABgBABMgDQAAABAAAAQAAADACAFQAEAKALARAhegWQAJABAMgGQADgCACgBQAygaAsAT");
	this.shape_18.setTransform(-23.5,19.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF00FF").s().p("AhEAmIBbhLIAqAxIAEAMIgNABQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBQgugSgxAaIgFADQgMAFgJAAIAAAAg");
	this.shape_19.setTransform(-26.1,13.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#000000","#FFFFFF"],[0,1],286.8,-96.8,0,286.8,-96.8,817.9).s().p("ABDA9QgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgSgEgRADQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAgBgBAAQgXgEgbgCQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABIgcgHIgMgEIABgEIgGgEIgEABIgCABIgPgLIgWgDIgVgQIgFgBIgEgBIgOgPIAAgBIADgCIgCgEIAAgDQACgDAFgDIACAAIADgFIABgCIAGgEIgDgDIAFgEIAEgDIAFgEIgCgEQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAIADgCQAdAJAdAFIABABQATADATABQATABASAAQAhAAAigGQACACACABQATAGATADIAFAAIAEADQAUAOAUAaIgDAEIABAEIAAAAIAAAEIgEAHIgEAEQgEADgGABIgEgBIgLAJIgBAAQgTANgTAEQgIACgIAAIgHgBgAA3gVIAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAVAbASAdIAFAHIACAAIABAAIABAAIABgBQgBgLgHgJQgPgTgMgRIgIgKIgBAAIgBAAIgCAAgAhAgdIAAABQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAJAMAEANIACAGIAHAOQAFAIgEAHIAAABIACACIACAAIABAAQAKgJgJgMQgGgJgCgJQgBgIgEgHIgFgGIgGgHIgBAAIgBAAIgBAAgAAPgJIgBACQALAXATATIABAAIACAAIABAAIABgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgOgQgJgQQgDgEgBgEIgCgDIAAAAQgBAAAAAAQgBABgBAAQAAAAgBABQAAAAgBABgAB7AiIADgCIgEgDIgIgEIAJAJgAhcgYIAAAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAHAIgEAKIgBADIAAABIACACIABAAIACAAQAGgHAAgKQgBgFgDgDIgDgEIgBABIgCgBIgBABgABwgTIAEADIADABIADgBQgGgHgCAAIgBAAQAAAAgBAAQAAAAAAABQAAAAAAABQAAABAAABg");
	this.shape_20.setTransform(-36.2,67.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#232120").s().p("AATAeIgCgCQgagZgVgdIANgJIgCADQASAZASAWIAEAFIACACIACADIAGAHIgEAEIgIgGg");
	this.shape_21.setTransform(-31.2,25.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2F2C2A").s().p("AgBAAIgFgDIADgCIACABIAAABIAIAJIgIgGg");
	this.shape_22.setTransform(-53.7,67.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#201C16").s().p("AgFAKIACAEIgDACIABgGgAgEABIgFgCQADgEAFgFIAEgEIADgBIADADIgCAEIgCAEIgDAFIgCAAQgEADgBADIABgGg");
	this.shape_23.setTransform(-51.8,65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9F9B95").s().p("AgBAAIACgDIADACIgGAEIgBABIACgEg");
	this.shape_24.setTransform(-51,64.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#96978E").s().p("AgFgEIAHAEIAEACIgDADIgIgJg");
	this.shape_25.setTransform(-24.2,70.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1C1C1C").s().p("AgLgJIACgDIAEAEIAGAIIADADIAIADIgCABIACAEIgIACQgJgMgGgKg");
	this.shape_26.setTransform(-19.8,67);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6E6E6").s().p("AgBADIgEgDIgDgEIgEgEIAFgDQADgBAEABIADAFIAKALIgEAEIgEADIgGgJg");
	this.shape_27.setTransform(-20.2,65.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C2BFBB").s().p("AAAADIgEgDQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABAAQACAAAFAGIgDABIgCgBg");
	this.shape_28.setTransform(-24.5,65.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DAD7D4").s().p("AAHAGIgDgCIgCgBIgBAAQgRgHgSgEQgBgBgDgCIAEgCQAmABAjAYQgEgCgEACIgEACQgKgHgKgBg");
	this.shape_29.setTransform(-24.2,63.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6A6663").s().p("AACgHIgCAHIABADIgBAFQgDgHAFgIg");
	this.shape_30.setTransform(-28.1,60.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#211F1D").s().p("Ah+B6IAEgDIAPgIIAAAAIASgHIADAIIgDABQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAABgBAAQAAAAgBAAQgEgBgEABQgGACgIAJIgCAEIgEgFgAB1BzIACgDIAIAEIgDACQgFgDgCAAgABLAAIgDgFIAEgEIAFgDQgLgvAXgrIAIgLIACgEIAEgFIAEgEIAAAAIAAASIgJARQgQAmAFAoIABAFIgJAIIgFACg");
	this.shape_31.setTransform(-40.4,50.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262423").s().p("AgcAUIAHgGIANgKIAEgEQAOgQAOgDIAFAAIgDADQgTAQgNAKQgOAKgIAAIAAAAg");
	this.shape_32.setTransform(-18.2,55.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A4A3A3").s().p("AAFgEIAAAAIACgCIgCADIgDADQgDAEgFADQAEgGAHgFg");
	this.shape_33.setTransform(-21,53.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC9966").s().p("AiDDbIgEACQgOABgIgBQgMgBADgFIABAAQADgGARgJIAFgEIADgDIAFgEIArgjIAFgEIAEgEIAegYIgEgFIAFgDIAJgIIgBgFQgFgoAQgmIAIgRIAEgFIAEgCIABgBIAfgbIAKgHIABgBIACgCIACAAIAWgDIAFgBQgKgPgTgOIgBAAQgDAAgDgCIgQgNIgMgKIgDgCIgIgJIgCgDIgGgHIAAAAQgUgXgRgZIACgDQAEgTATgWIAFgEIAFgCQAsgXAqAOIAEAEIAeAlIACACIgBACIAAABIACADQALAQANAQIACAFIANAYIABABIATAiIAIAQIACAEIAAAAIAAAEQAAAQgDAQIgEAPQgIAYgQAZIgEADIgEAFIgOATIgHAKIgQAXIgFACIgJAGQgMAKgCAKIgDADIgBABIgnAgIgEADIgDAEIgJAHQgOAOgPAEIgEADQgQAAgSAVIgFAEQgKAEgLACIgJAAIgKAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAGgUgaAIgAA9AWIgPAWIACADIgFAEIgIAGQgiAeApgVIAEgCQgEgJANgIIAFgCIAEgEIAEgLQAEgQgDAAQgCAAgGAIg");
	this.shape_34.setTransform(-27.1,38.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAUEsQgRABgSgCQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQgbAIgZgKIgDgEIgRgCQgbgEgagKIAAAAQgYgHgUgPIgEAAIgFgBIgNgQIgJgKIAAgBIgCgBIgDACQgJgXASgUIAEgEIAEAFIADgEQAHgJAGgCQAFgCAEACQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQABgBAAAAQABABAAAAQABAAAAAAQABABAAAAQgBABAAAAQgBABAAAAQgBABAAAAQAAAAAAABIACAEIgFAEIgEAEIgFADIgDgDIgEACIgEAEQgFAEgDAFIAEACIAAAGIgBADIAAAGIAAACIANAQIAEAAIAFABIAVAQIAWADIAPAMIACgCIAFgBIAFAEIgBAEIANAEIAbAHQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAaACAYAEQABABABAAQAAABAAAAQABABAAAAQABAAAAAAQARgCASADQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAMABALgDQATgDAUgNIABgBIALgIIADABQAGgBAEgEIAEgEIAFgHIgBgDIABgBIgCgDIADgEQgUgcgUgNIgEgDIgEgBQgTgCgUgHQgBAAgDgDQghAGghAAQgTABgTgCQgTgBgTgDIgBAAQgdgFgdgJIgDgIQAXgKAXgEQgLgTAUACIAEgCIAFgDIALgMIABAAQANgLANgBIAEgEIA4guIAEAEIADAEIADAEIgdAZIgFAEIgEAEIgrAjIgFAEIgEADIgEAEQgRAJgEAFIAAABQgDAFAMABQAHABAPgBIAEgDQAagHgHAUQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAJAAIAKgBQAKgBALgEIAFgEQARgVAQAAIAEgDQAPgFAPgNIAJgIIADgDIAEgDIAnggIAAgBIAEgDQACgLAMgJIAIgGIAGgDIAPgXIAHgKIAPgSIAEgEIADgDQAQgZAIgZIAEgPQAEgQAAgQIAAgEIAAAAIgCgEIgJgQIgSgiIgBgCIgNgXIgCgFQgNgQgLgRIgDgDIAAAAIACgCIgCgCIgeglIgEgEIgBgDIAAgBIAAgCIACgCQAAAAABABQAAAAABABQAAAAABAAQAAAAABAAIAMgBIgDgLIAkAsIAAABIACAIQAEALALARIAAABQgCAEADAFIABACIgEADIgageIAAgBIgDgEIADAEIAAABIAaAeIAEgDIACADQAEAOAIAMIACACIAEAFQAJAMAIANIAEAIIADAKIABAGIgCABIADAGIAAABIABAHIAAAEIAAABIgBALIgCAVQgBAJgCAJIgFAKIgDAEIgCADIgCAGIgFAIQgLAWgQAUIgJANIgRAVIgMAKIgCACQgGgCgHAHIgGAJIgBAAIgBACIAAAAQgIAGgEAGIgIAEIgEABIgIAFQgGABgGAEIgIAFQgIAIgHAKQgFAHgCAHQgHAJADAIIAEgDIAAAAQAFAGAIgFIAHgFQAYAAAWAVIACgBQAVASAGATIABABIABAKIgEAEIgIgCIgDgEIADgDIAFgEIgLgMIgEgFQgigYgngBIgJgEIgBACQACAAAEADQADADABAAQASAFASAIIAAAAIADABIADACQAKABAKAHIADAEIAEAFIgCACQAGALAJAMIAJgCQADAIgBAHIgOALIgDADIAEAEIgwAgIgEADIgRgCQgPgBgRAEIAAAAIgDgCgAA5EVIgCgBIgFgHQgSgdgUgcQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAAgBIADAAIABAAIAIAKQANATAOASQAHAJACALIgCABIgBABIgBAAgAhREMIgBAAIgCgCIgBAAQAEgIgEgHIgHgPIgCgGQgFgOgJgLQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIAAgBIACAAIABAAIAGAHIAFAGQAFAHABAIQACAKAGAJQAJANgLAJIgBgBgAADEJIgBAAQgSgTgLgYIACgCQACgDACABIACACQABAEADAEQAJASANAPQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAIgBACIgBAAIgCAAgAiCDqIgCAAIgBgCIgBgBIABgEQAEgKgGgIQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAAgBIADAAIABAAIADADQAEAEAAAEQABAKgHAIIgBAAgACJCBQAJgFASgBQgPASgOACIgEAAQgCgJAIgFgACSBWIAAgBIAGgFIANgNQAdgZgJAjIgNALIgFAEIgFAAQgOADgOARIgEAEQABgNAPgRgABVAAIAIgGIAEgEIgBgDIAPgXQAOgTgIAcIgDALIgEADIgFADQgNAIAEAHIgEACQgRAKgEAAQgGAAAUgRgAAchFIAAAAIgFAEIgBgCIAEgFQAQgSAQgJIAMgFIABgBIACgBIABgBIAFgEQgUgMgUgbIAAAAIgCgDIgCgCIAEgEIgGgHIgCgDIgCgCIgEgFIABgBIAFAIIADADIAIAJIADACIANAKIAPAMQADADAEAAIABAAQATAOAKAPIgGABIgVADIgCAAIgDABIgBABIgJAIIghAbIAAAAIgEAEIgEAFgAgkjwIgDgFIgCgEIAggbQAJAAALgFIAGgDQAxgaAuATIgCACIAAACIAAABIABADQgqgOgtAWIgFADIgFAEQgSAWgFATIgNAIIgOgVg");
	this.shape_35.setTransform(-32,44.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AgUg7QAGACAFADQgDAFgEAFQgBABgDAAQAAADACABQABACACAAQAEAAACAAQAXAAAYAAQABAAACAAQACAAACAAQABAAAAAAQAUAAAUAAIABgFQgCAAgBgBQgFAAgCgFABMgxQgUgCgLgDQgFgCgCgCQgBgBgBAAAgUgrQgsAYgLA2QgCACAAAEQgDAMgGAH");
	this.shape_36.setTransform(-14,17.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC9966").s().p("ABSDjIAAAAQgCgGAEgTIAAgGIAAgFIAAgGIAAg4IAAgGIAAgFIAAgnIgGAAIAAgGIAAgMIgFgCQgigWgTglIgIgQIgBgGIAAgGIAAAAIAAgrIAAgMIAAgBIABgDIAAgBIAMgTIADgFQgSgBgWAFIgBABQgCADgEAAIgTAEIgQAEIgEABIgMAAIgEAAIgJAAIAAABQgeAAgfgDIgBgDQgLgPgFgeIAAgFIABgGQAMgxAlgYIAGAAIAvAAIADAAIABACIAAABIAEAAQAUACAVAAIAFABIAZAFIACABIAmAHIASADIAEABIAAABIADACQANALAKANIAJAMQAOAXAJAbIAAAFIABAGIAFAXIAEAMIAHAbIgBAGIgBAKQAAAQAHAIIAAAEIAAAAIAAAzIAAAFIAAAFIABALQAAAVgGAOIAAAFQgKANAEAaIAAAGQgDAMgGAJIgFAHIgHAHQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgLgSgLAZIgBAFQgIAMgGAFQgFAFgCAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBgABOhHIAIAaIADABIAAAGIAAAKQABAtAKgtIABgEQgJgDACgPIABgGIAAgEIgGgLQgIgLgDAAQgCAAACALg");
	this.shape_37.setTransform(-4.2,36.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgcENIAAgGIAGAAIgBgEQgCgLACgGQACgFAEgCQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAABAAABQAAABAAAAQAAABAAAAQAAABABAAIAEABIAAAHIAAAFIAAAGIgEABIgBADIAAAGQAAAHACAFIAEgCIAFAFIABACIAEAEIABABIAVAAIADgCIAEgFIAagFIAQgPIASgFIABgCIACgEIAGgCIADAEIALgHIAXgSQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQATgTASgQQABAAABAAQABAAAAAAQABgBAAAAQABAAAAAAQAJgQAOgLQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAIgIAGgLQAJgQACgYIAAgBIABgOIADgCQADgFAAgGIgBgFIgCgIIgDgCIAAgBIgEgBIgBgFQgigCgYAHIgEABIgEADQgOAOgRAKQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAgBABQgRAdgVAaQgMAPgNAOQgNAOgOAMIgBABQgXATgYARIgIgDQAHgYALgUQgVgDAOgPIABgEIAAgGIgBgQIAAgBQAAgRAHgLIAAgGIAAhIIAFAAIAFAAIAGAAIAAAnIAAAFIAAAHIAAA3IAAAHIAAAEIAAAGQgEATACAGIAAABQACAFAIgIQAGgFAIgMIABgFQALgZALASQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIAGgIIAFgHQAGgJADgMIAAgGQgEgaALgNIAAgFQAFgOAAgVIgBgLIAAgFIAAgFIAAgxIAAgCIAAgEQgHgIAAgQIABgKIACgGIgIgaIgDgNIgGgXIgBgGIAAgFQgJgbgOgWIgJgNQgKgNgNgLIgDgCIAAAAIgEgCIgRgDIgmgHIgBgBIgbgFIgFgBQgVAAgUgCIgEAAIAAgBIgBgCIAFAAIABAAIAoAAIABgFIADABQANAFAPABIADAAIAGAAQAPABAPADIAIACIAJADIAGADIAAADIAFABIABAAIAGAFIADADIABAAIAIAHIAPAPQAHAHAFAIIAFAKIABAFIABADIADAGIAEAIQAJAXAHAZIADAQIAGAaIAAAQIAAADQgGADABAJIADALIABABIAAACIAAABQAAAJACAHIgDAJIgBAEIgCAJQgDAFgBAGIAAAJQABAMADAMQACAIAEAHQADAKAIADIAAgFIAAAAQAIAAABgKIABgIQAPgSAegEIAAgCQAcgFASAHIACABIAJAFIAAAGIgHAFIgFAAIAAgFIAAgGIgQAAIgGAAQgpAMgaAdIgJAEIABADQACgCAFgBQABAAABAAQAAAAABgBQABAAAAAAQAAAAABgBQAPgKARgJIAAgBIADgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQAHgHAMgDIAGAAIAGAAIAAADQANADAPAAIAEgHQAHACAFAFIAAARIAAAFIAGAAIgGA5IAAAFIgMALQgLAMgHAPQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABgBgBQgKAPgNAMQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgKAZgYANIgEAAIgNANQgVASgYANIAAAAQgVAOgYAGIgDACIgDAEIgVAAIgOAAIAAAAIgCAAIAAAEQgXgHgFgbgAA9DuIgBAAIgDgDQgEgKgLAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIAAgBIABgCIABgBIAFAAQAEAAAEACQAJAGABAKIAAABIgBABIgDAAgAB2DeIAAAAQgDgHgJgCIgQgEIgGgCQgNgGgPAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBAAIABgCIABgBIAJAAIAIABQAIAAAHAEQAJAGALAAQAPABABAOIgCABIgBABIgDAAgAB5CWIgBgDQAAgDACgCIADAAQAEACAFAAQATAFAUgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIABACIgBABIgBABIgBABIgNABQgUAAgTgFgADQB3QgjgEgigCQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAAAIABgCIABgBIANAAQAXADAXAAQALABAJAFIABACIgBABIgBABIAAABIgEAAIgFgBgACbgkQACgKALgPQADAXgHAMIgCAEQgIgEABgKgAB/hHIAAgBIgBgHIgBgSQgBgmAWAcIAAASIAAAGIgDAEQgHANAEAVIAAAGQgJgJgEgXgAAVhPIAAgKIAAgGIgDgBIgIgZQgFgYAQAYIAHAKIAAAEIgCAGQgCAPAJADIgBAEQgFAXgCAAQgDAAgBgXgAhEhPIAAAAIAAAGIgCAAIgBgGQgEgYAEgSIADgNIAAgBIAAgCIAAgCIAAgGQgVAIgigCIgBAAIgCAAIgEAAIAAgGIgJAAIgDAAIgEAAIgGAAIAAgBIAKABIADAAIANgBIADgBIAQgEIATgDQAEgBADgDIAAgBQAXgFASABIgDAFIgLATIgBACIgBACIAAABIAAANIAAAqIAAAAIAAAGIACAGgAjxiKIgGgBIgEAAIAAgrQAGgHADgMIABgGQAMg3ArgYIAAABQABAAAAABQAAAAAAABQAAAAABAAQAAABABAAIAAABIABAAIACABIAAAAIAAAAIAAAAIAAAAIgCgBIgBAAIAAgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBgBAAIAAgBQABAAABAAQABAAAAAAQABAAAAAAQABAAAAgBIAHgKIgLgFIA5AAIACABIAHAEQAKADAVADIABAAQABAFAGAAIADABIgBAFIgoAAIgBAAIgFAAIgCAAIgwAAIgGAAQglAYgMAxIgBAGIAAAFQAFAeALAPIgBAQIgagDg");
	this.shape_38.setTransform(2.6,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},3).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_36}]},3).wait(9));

	// Layer 1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("ABQBSQgBACgBAAQgHgBgGgBQgHgBgGgCQgxgNgYguQgdgygdg1");
	this.shape_39.setTransform(-11.6,-0.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AiNgcQgVgWgCgoQAAgCABgCQAZgHAXgKQAAAAABAAQABgBAAAAQAbgLAXgOQAKgGAKgGQAJgGAIgGQABgBABgBQACAAABgCQAEgEADgEQALgLAMgHQAAADAAACQAFASATAFQACAAACAAQAAADABAAQAHACAIAAQAAAEABAAQAtAKAhgOQADAAACgBQALgFAHgKIAFgDQABASADANQAHAaARAOQAAACABAAIAAAAQAEACAEACQAaAKAZgCQAQgBAQgHIAEAKQgVAjgRAuQAAAAAAABQgGAKgSADQgUgBgTAAQgDABgDAAQgVABgJgLQgBgBgDAAQAAgCAAgEQgOALgHAMQgBACAAACQgDAAgCAAQAAAAgBAAQgHAAgHAAQgHAAgHAAQgCAAgEAAQgCADgCADQgCADAAADAhJC1QgMAOgVgFQgPgDgTgNQgOgJgWgDQAAgEAAgCQgPABgEgMQAAgBgDAAQAAgCAAgDQgSgFgMgLQgBgBgDAAQAAgCgBgCQgggagSgrQAAgDAAgDQgChnBMgYQAIAAAEADQAXAgAbAbQAIAIAIAIQAAADACABQAcAYAmAMQAGACAFACQAAgDABgBQABgBAEAAQACAAACABQAgAVAdgGQAEAAAAgBQADgLAWgKQALgFAPgFQAEgBADgBABzAPQAAABgBABQgIAIgTgBIAAADQgCAAgEAAQgCAAgEAAQAAADgBABQglATAMALAg0AmQACAAADABQASAMAWAK");
	this.shape_40.setTransform(-15.2,5.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF00FF").s().p("AhqC+QgPgDgTgNQgOgJgWgDIAAgGQgPABgEgMQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgFQgSgFgMgLQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAIgBgEQgggagSgrIAAgGQgChnBMgYQAIAAAEADQAXAgAbAbIAQAQIACAEQAcAYAmAMIALAEIAFABQASAMAWAKIhCAAIAAB4QgJALgNAAIgLgCgAB0APIgBAAIgOAAIgNgDQgxgMgZgtIg5hoIARgMIACgCQAAAAABAAQABAAAAAAQAAAAABgBQAAAAAAgBIAHgIQALgLAMgHIAAAFQAFASATAFIAEAAQAAABAAABQAAAAAAAAQAAABABAAQAAAAAAAAQAHACAIAAQAAABAAABQAAAAABABQAAAAAAAAQAAABAAAAQAtAKAhgOIAFgBQALgFAHgKIAFgDQABASADANQAHAaARAOQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAIAAAAIAIAEQAaAKAZgCQAQgBAQgHIAEAKQgVAjgRAuIAAABQgGAKgSADIgngBIgGABQgVABgJgLQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAgBAAIAAgGQgOALgHAMIgBAEIgFAAgAAahgIADAHQAKAVAUAMQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAQALAFAKACQAAABABABQAAABAAAAQAAABAAAAQAAAAABAAQAdAFAXgEIABgBIANgEIAFAAQAbgKACgiQgYAOgXATQAAAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQggAMgegRIgFgBIAAgGQgZgcgOAAIAAAAg");
	this.shape_41.setTransform(-15.2,5.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0000FF").s().p("AgGACIABgDIAMADIgNAAg");
	this.shape_42.setTransform(-5.8,7.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3E3C39").s().p("AAAABIAAAAIAAgCIABACg");
	this.shape_43.setTransform(10.4,9.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F4F0ED").s().p("AgHgEQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAIACAAQABAIAMgDQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBADgEAAIgHAAQgUAAANgKg");
	this.shape_44.setTransform(17.4,-8.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#595552").s().p("AAAACIAAgDQAAABAAAAQAAAAAAABQAAAAAAABQAAAAABAAg");
	this.shape_45.setTransform(7.6,-20.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2A2625").s().p("AACACIgDgDIADABIAAACg");
	this.shape_46.setTransform(0.1,-20.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C9C5C2").s().p("AgHAGIAAgBIAPgJIgBADIgOAHIAAAAg");
	this.shape_47.setTransform(5.6,-23.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#282523").s().p("AgBABIAAgCIADAAIAAADQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_48.setTransform(1.5,-24.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6A6667").s().p("AgHAGQgPgVAjANQgCAHgLAAIgEAAIAAADIgDgCg");
	this.shape_49.setTransform(1.8,-24.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1A1615").s().p("AAoALIgBAAIgEABQgvgBgVgFIgGAAQgMADgCgJIgCAAIAAgFQgGAAgFgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAGACQAYAEAYACIACAAQAiADAkgDIgBABIABACIABABIAIAAQgKAGgOAEIgEABg");
	this.shape_50.setTransform(22.7,-8.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#ECEDEA").s().p("AAEAFQg2gGBGgDQgDAJgJAAIgEAAg");
	this.shape_51.setTransform(22.3,-15.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2D2D29").s().p("AgBAAIADAAIgDABIAAgBg");
	this.shape_52.setTransform(25.2,-12.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#110D0C").s().p("AgbAAIgGAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAFgCIAGAAIAAADQAeACAZgFIAAAEIAAABQgQAFgQABIgBAAQgOAAgOgGg");
	this.shape_53.setTransform(21.6,-12.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#75716E").s().p("AgCAAIAFgCQgDACgBADg");
	this.shape_54.setTransform(25.2,-14.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#151414").s().p("AAKA/QAAAAgBAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAVgzgmgOIgFgBQAUgLANgXQgdgFgXgHIACAAQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAOgKAYABIAAAAIACACIADAAIABgCIABAAIADAAIAAAAQgBADABAFQAAADACACIADABIAFAFIAAAFIAAABQgNAMgDARQgCAKAGAKIADAIQgBADAAAGIAAAHQgDAPgHAPIgDgCg");
	this.shape_55.setTransform(31.9,-18.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#171311").s().p("AgFADIgGgBIAEAAIABgBQABgBAAAAQAAAAgBgBQAAAAAAgBQgBAAgBAAIgNAAIAAgBIAGAAIAlAAQgFAHgPAAIgHgBg");
	this.shape_56.setTransform(24.4,-29.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1A1715").s().p("AgbAIIABgEQAEgEAFgCQAKgFANAAIAGAAIAQAAIAAAGIgxAJIgGAAg");
	this.shape_57.setTransform(24.4,-24.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#84807D").s().p("AADARQgDgBgCgKQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIAAgFQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgBgEIAGAAQAHAAgDgLIAFAAIAAAGQgDAQAJAFQgEAGgDAAIgBAAg");
	this.shape_58.setTransform(26.1,-32.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5A5653").s().p("AADAJIgDgEIAAgBIAAgFQgHAAgIgCIABgCIABgCIACAAQALAAAFgGIAAAGQACAIAJADQgBAKgEAAQgDAAgFgFg");
	this.shape_59.setTransform(35.6,-25.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#383432").s().p("AgFAOIgGAAIAAgFQAEAAACgCQALgHAGgNIAAAMIAAAEQgCALgMAAIgDAAg");
	this.shape_60.setTransform(38.4,-28.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CDCAC7").s().p("AACgDIAGgFIAAAAIAAAEIgEAFIAAABIgCAFIgDABIgFABQgFAAANgMg");
	this.shape_61.setTransform(35.3,-34.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#44403D").s().p("AAHARQgMAAgIgEQgIgEgCgIIACAAIAGAAQAUAIANgZQAAABAAABQAAAAAAABQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAQABAAABAAIgKAVIgCAGIgFAAg");
	this.shape_62.setTransform(31.6,-30.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D9D6D3").s().p("AgMgBIgBgDIAGAAIAJAAIAGAAIAGAAIAAAEIgDADQgFACgEAAQgHAAgHgGg");
	this.shape_63.setTransform(34.2,-36.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D4D1CE").s().p("AgGAWIgBgFQgEgQAOgWIAGAAIAAAEIAAARIAAAGIgFABIgBADQgIABABALg");
	this.shape_64.setTransform(31.9,-39.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#615D5A").s().p("AgFAOIgFAAIAAgGIAAgGIgGAAIABgCIAFgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAGgIAMgBIABAFIAFAHIAAABQACAMgOAAIAAACIgKAAg");
	this.shape_65.setTransform(33.9,-38.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#8B8987").s().p("AgDgCIgDgPIgBgEIACAAQACARALgNQABARgBAQIAAAGQgHgLgEgNg");
	this.shape_66.setTransform(39.2,-36.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#7B7774").s().p("AgEAZIAAgGIAAgGIgGAAIAAgFIAAggIADAAQAEAPAOABIAAAGQgGANgGANIgDABIAAAAg");
	this.shape_67.setTransform(36.7,-41.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D7D4D1").s().p("AgEgIIgBgGIACAAIADgBQADgBADgCIAAAfIAAAGIgKgbg");
	this.shape_68.setTransform(35,-42.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4A4643").s().p("AABARIgFAAIgEgEQgEgIACgPIAAgGIAGAAQALABAFALQgQAHAJAJIABAFIgFAAg");
	this.shape_69.setTransform(22.6,-41.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#45413F").s().p("AgHAMQAAgBAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAEgWgHgHIgHgFQAWgCAVAkIAAAGQgGAJgGAAQgJAAgIgNg");
	this.shape_70.setTransform(30,-44.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6F6B68").s().p("AgPAEQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAIAGAAQAJgBgDgQIACAAQgCAVAVgEIAAAFQgGAAgEACQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAABQgEAGgDAAQgGAAgHgNg");
	this.shape_71.setTransform(23.3,-45.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#181412").s().p("AAGAOIAAAEQgFgLgLgBIgFAAIAAgGIgGAAIAAgEQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAAAABgBQAAAAAAAAQAIgBgDgNIAGAAIAAAGQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQAMAWAIgPIABAEQAJAOAMAOIAAAFQgNgGgJgIg");
	this.shape_72.setTransform(23.2,-43.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6D6966").s().p("AgFAIQgagcAuATIAAAFQgIAAgHACIAAADIgBAAIgEgBg");
	this.shape_73.setTransform(22.8,-48.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D9D6D7").s().p("AgCAMIgGAAIAAgGQgIAAADgLIABgGIAEABIAIAEIAPAGQgCAMgNAAIgCAAg");
	this.shape_74.setTransform(1.6,-28.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#94908D").s().p("AADAFQgUgFADgDIAAAAQADgEAbgBQgGAGgDAKIgDABQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAg");
	this.shape_75.setTransform(9.9,-25.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#9D9996").s().p("AgLgBQABgBAWACIAAADQgYgEABAAg");
	this.shape_76.setTransform(7.4,-29.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D3CFCC").s().p("AhcAxIgFgGIgEgBIgDAAQACgNAGAAQAHAAAKANIABACIABACQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAAAGIAAAGQgLgDgIgHgABkgOIAAgEQgMgOgJgQIgCgEQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAEgCAGAAIAAAGQABARAPAFQAAAIgCAIg");
	this.shape_77.setTransform(16.1,-39.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A7A3A3").s().p("AgJADIATgFIAAACIgSADIgBAAg");
	this.shape_78.setTransform(3.2,-30.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CDC9C6").s().p("AgJgDIABgBIASAGIAAADIgTgIg");
	this.shape_79.setTransform(10.5,-30.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BEBAB7").s().p("AgEAFIgEAAIACgFQABgFADgGIAFAAIABAGQABADAEACIAAAFIAAAGIgGABQgGAAgBgHg");
	this.shape_80.setTransform(19,-34);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C0BCB9").s().p("AgHABQAAAAAAAAQAAgBAAAAQgBAAgBAAQAAAAgBAAIABgDQAIgBgDgLIADAAQADAJAJABIAAARIAAAEQgLgEgHgLg");
	this.shape_81.setTransform(16.5,-34.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C5BFBA").s().p("AgBARIAAgEQAIgCgDgLQgFgEgLgEQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAIAFgBIAGAAIABAEQAGACAIAAIAAAGQAAAHgNANIgCABIAAAAg");
	this.shape_82.setTransform(13.9,-29.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#292522").s().p("AgFAAIgFgBIgFgBIgBgFIAGgBQAGgCAFgDIAAAEQAIACAIAAIAAAGIAAAJIAAAGIgWgOg");
	this.shape_83.setTransform(11.4,-36);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#100D0B").s().p("AABAEIgDAAIAAgFQgCgEgDgBIgGgBQAAgDACgCIAEgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAGALAMAFIAAAEIAAAGQgJgBgEgJg");
	this.shape_84.setTransform(16.2,-36.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#312D2A").s().p("AAIARIgFAAIAAgFIAAgGIgGgFIgEgBIAAgFIgFgGIgBgEQABAAAAAAQABAAABAAQAAAAAAAAQAAAAAAABQAPATAJgaIAAAGIAAAFIAAAQIAAAGQAAAFgCAEQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBAAIAAgFg");
	this.shape_85.setTransform(19.6,-37.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BDBAB7").s().p("AgHADQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgEIAAgDQAOgEAHAHIAAACQgDAKgFAAQgEAAgGgGg");
	this.shape_86.setTransform(17.6,-43.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#423E3B").s().p("AgHAEQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgCQALAAgBgIIAGAAIAAAEQADAMgIACQAAAAgBAAQAAAAAAAAQAAABAAABQAAAAAAABIgJgHg");
	this.shape_87.setTransform(20.2,-45.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CCC8C5").s().p("AADAOQgDgBAAgFIgBgFIgCAAIAAgEQgJgDABgJIACAAIAGAAQAAABAAABQAAAAAAABQAAABABAAQAAAAAAABIAIAHQAAAAABABQAAAAAAAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIAAAFQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgBABQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAABIgBAAIgCAAg");
	this.shape_88.setTransform(19.7,-44.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1A1614").s().p("AAJAPIAAgGIgGAAIAAgEIAAgFQgPgBgHgKQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIAAgCQAYAGAZAIIAAAFQABAIgLAAIAAACIgGAAg");
	this.shape_89.setTransform(17.9,-47.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EBE8E5").s().p("AAKAOIgLAAIgGAAQgJAAADgLIAAgFIAAgGIAAgFIAGAAIAGAAIAAAFIAAAGQAAAAAAABQAAABAAAAQABAAAAAAQAAAAAAAAQAKACAFAGIgCAEQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAIAAAAg");
	this.shape_90.setTransform(13.3,-42.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#4B4744").s().p("AgHAIQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQADgDAAgFQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgBgEIAEgBQADgBAEgEIgCAGQgCAKAIAAIAAAFQgGAEgDABIgGABIAAgGg");
	this.shape_91.setTransform(14,-44.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DEDAD7").s().p("AgPgDIgBgGQABAAABAAQAAAAABAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAgBAAAAQAAgBAAgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAGAKAQABIAAAFIAAAEQgKAKgHAAQgKAAgFgTg");
	this.shape_92.setTransform(16.5,-47.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#ECE9E6").s().p("AgBAJQgGgCgEgFQgCgBAAgDQABAAAAAAQABAAABAAQAAAAAAAAQAAgBAAAAQAFgIAOAFIAFAAIAAAEIAAAFIgFAAQgDAEgEABIgDABIAAAAg");
	this.shape_93.setTransform(13.4,-46.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#9B9794").s().p("AgIAMIAAgFIAAgGIgEgBIgBgEIAEgBQACgEAHgBQAFgBAJACIAAAFQgdADAcAFQAAAAAAAAQABAAAAAAQAAABAAABQAAAAAAABQgOgFgFAJQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAIAAAAg");
	this.shape_94.setTransform(12.9,-47.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D7D7D6").s().p("AgIAEQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAIABgFIAFgGIADABQAEAHAOgCQAAAFgCAEQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgJgBgHgEg");
	this.shape_95.setTransform(2.7,-36.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#656565").s().p("AAAAGIgDgBIgCgEQgggNA3ABIAAAFQgEASgHAAQgDAAgEgGg");
	this.shape_96.setTransform(0.7,-40.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CBC7C4").s().p("AgMgGIgBgDIAGgBQAGgDAPANIAAAGIAAAGQgPgGgLgMg");
	this.shape_97.setTransform(5.5,-40.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#66625F").s().p("AADAGIgCAAIAAgFQgFgFgFgHQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAGAAIAFAAIAAAGQgBAJALgDIAAAFIAAAFIAAAFIAAAGIgCAAQgHAAABgLg");
	this.shape_98.setTransform(10.8,-44.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AA0A+QgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBIAAgEIAAgSIAAgGIAAgEIAAgGIAAgMQgJgSgGgPIgBgFIgFACIgBADQgGAAgDgCQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIABgDQgEgGgLgDQAAAAgBAAQAAAAAAAAQAAgBAAgBQAAAAAAgBIAGgBQAEgBAGgEIAGAAIAAAGIgCAAQgBANAPgBIAAAFIACAAQACAJAMgEIAAAGIAAAGIAAAGIABAEIAFAFIAAAGQgOAIANALIABADQgEAGgBAGIgBAGQADAOgGAAIgBAAgAgcAeIgFAAIgFAAIAAgEQgPgIgCgTIAAgGIAAgGIAGAAIALAAIAAAGQAAAPALAGIABAFIAFABIAAAGIAAAEIgHAAgAAMAUIgGAAIAAgGQgHAAgIgCIAAgEIAAgGQgLgCABgTIgCAAQgYgJgOgUQgCgBAAgEQABAAABAAQAAAAABAAQABAAAAgBQAAAAABAAIABgEIAAgDQALACALAGQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAQAUAKAHAUQABAAABAAQAAAAABAAQABAAAAABQAAAAABAAQANAPAJARIAAAGIgKAAg");
	this.shape_99.setTransform(12.5,-38.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#565350").s().p("AADANIAAgBIgBgDQgxgeBCANQgJAEABALQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIgBAEQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgFAAg");
	this.shape_100.setTransform(5.6,-44.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0A0604").s().p("AgGAOIgBgDQgHgJAIgPIAGAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAFAHAGAFIAAAFQgMgDgBAIg");
	this.shape_101.setTransform(9.8,-45.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3E3A38").s().p("AgIALIAAAEQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQgBgLAJgEIACAAIgCgBIAAAAQgXgMAcgDQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQAFADAEAAIAAAEQgIAQAHAIIABADQgKgFgLgDg");
	this.shape_102.setTransform(7.8,-45.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B8B4B1").s().p("AAIAIIgGAAIgEAAIAAgEQgFAAgFgDQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAIAFgBIAGgFQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAGADAJAAIAAAFIAAAEIgGAAg");
	this.shape_103.setTransform(9.5,-47.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#25211F").s().p("AARARIgGAAIgGAAIAAgFIAAgGQgLADACgJIAAgFIAAgFIAAgGQgKABgHgDQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAGAAIARAAIABAEIADABIAAAGIAAAFQAAAEADABQADADAGADIABAEQAAABABAAQAAAAABAAQABABAAAAQABAAABAAQAAAGgDADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAgFg");
	this.shape_104.setTransform(11.4,-45.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333231").s().p("AgBACIAAgDIADAAIAAADIgDAAg");
	this.shape_105.setTransform(67.9,-24.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#322E2B").s().p("AASAbIgBgBIADgCIgBAEIgBgBgAgTgbIABAAIAAAFQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBg");
	this.shape_106.setTransform(64.5,-17.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6E6A67").s().p("AABABIgBAAIAAgBIABAAIAAABg");
	this.shape_107.setTransform(62.6,-20.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3B3B3B").s().p("AADAIQgSgGgDgDQgFgHArAAQgRAIAFAEQAAABAAAAQABAAAAABQAAAAAAABQAAABAAABIAAAAIgGgBg");
	this.shape_108.setTransform(46.5,-28.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#5B5B5B").s().p("AAAAFIgEAAIgGAAIABgEQABgFAEgGIACAAQgBALAIgBQAAAAAAABQAAABABAAQAAABAAAAQAAABAAAAIAFABQgCAEgEABIgFABIAAgGg");
	this.shape_109.setTransform(42.9,-40.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#363636").s().p("AAIARIgCAAQAAgLACgLQgOgNgEASIgDAAIABgEQAGgWAUAQQAAAOgCAMQAAABAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIgBAAg");
	this.shape_110.setTransform(11.7,-54.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#21221D").s().p("AgFACIABgEIAFAAIAFAAIAAAEIgGABIgFgBg");
	this.shape_111.setTransform(1.3,-63.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2A2A2A").s().p("AAqAGQgxgBgogJIAGAAQAygEAnAIIAAAGIgGAAg");
	this.shape_112.setTransform(-70.3,78.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#7D7D7C").s().p("AgbAAIAAgCIAFAAIAyAAIAAAFQgcAAgbgDg");
	this.shape_113.setTransform(-47.4,78.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#989897").s().p("AgQADIgFAAIAAgDQAOgBAOgBIAPAAIAAAFIgmAAg");
	this.shape_114.setTransform(-50.8,79.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#101010").s().p("AgDAGIAAAAIgHgBIgGAAIAAgDIAAgBIAAgFIAGAAQAOgCAHAHIAGAAIgHAEIgFAAIgGABIgCAAg");
	this.shape_115.setTransform(-40.7,78.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D1CDC5").s().p("AgPADIgGAAIAAgFIAGAAIAlAAIAAAFIglAAg");
	this.shape_116.setTransform(1.3,79.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#34302B").s().p("AgcAEIgFgCIAAgEIAAgGIAGAAIAGAAIAAADQASADATAAQAAAAAAABQAAABABAAQAAAAAAAAQAAAAAAAAQAIACAJAAIgHAFIgFABIgRABQgTAAgOgFg");
	this.shape_117.setTransform(-3.1,80.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#747067").s().p("AAQADQgTAAgSgDIAAgCIAEAAIAnAAIAAAFIgGAAg");
	this.shape_118.setTransform(-3.1,79.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#111111").s().p("AgVAAIgGAAIABgCQAFgDAGAAIAFAAQAOABAOgBQAAABAAABQAAAAAAABQAAAAAAAAQAAABABAAQAEABAFAAIAAAGQgXgEgagCg");
	this.shape_119.setTransform(-21.7,79.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#292727").s().p("AgDAAIAGgCIgDAFg");
	this.shape_120.setTransform(-7.4,7.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#4F4B4B").s().p("AgNAGIgGAAIABgGIAFgFIAGAAIANAAIAMACIgMgCIAOAAIgCACQgHAGgSgBIAAAEIgGAAgAAGgFIAAAAg");
	this.shape_121.setTransform(-5.7,8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#282828").s().p("AmVE7QAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAAAQAEAMAPgBIAAAGQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAABQgIgKgOgEgAGHksIgFgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAABgBQAHgEAAgLQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAGAAIAKAAQAAAUgMAHIgEABIAAAAg");
	this.shape_122.setTransform(4.9,-10.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#232120").s().p("AmGBOIgBgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAWADAOAJQATANAPADIgDAQQglgPgigUgAFihSQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAQgMAOgOIAHAHIgbAcIgBABIgDADg");
	this.shape_123.setTransform(5.8,15.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#303030").s().p("AgPgGIgDgBIABgEQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQALALARAFIAAAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAABQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAABABQgSgGgLgOg");
	this.shape_124.setTransform(-37.1,19.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#191614").s().p("AATAGIgVAAIgGAAIAAgGQgIAAgIgBIAAgEIAFAAQAOABANgBQAAABAAABQAAAAAAABQAAAAAAAAQABABAAAAQAHABAJAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAIgEABIgBAAg");
	this.shape_125.setTransform(-14.1,79.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2D2C2D").s().p("AgJBeIgFgBQgKgFABgSIgCAAQgFgGgDgKQgehxBXgxIABADQAHADAKAAQhLAYACBnIAAAGQASAqAeAbIABAEQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABIgBADIgXgPg");
	this.shape_126.setTransform(-40.4,7.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#313131").s().p("AhTAnQgJAAgHgDIgBgDIAGgBIATgFIAEAPQgDgDgJAAgAAMALIgBAAIgBABgABggpQADACACAAIgCACg");
	this.shape_127.setTransform(-27.9,-6.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#353535").s().p("AgBAHQgDAAgCgCIgBgEQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAGgCAEgDIAEAEIgHAHQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAIAAAAg");
	this.shape_128.setTransform(-17.5,-11.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#85817E").s().p("AAAgBIABAAIgBADQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_129.setTransform(-9.8,-9.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#211D1B").s().p("AgYAIIgGAAIAAgFIAGgBQAcAAAVgJIAGAAQgHAJgLAFIgGABIgfAAg");
	this.shape_130.setTransform(-2.8,-10.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#1D1A18").s().p("AAXAfIgGAAIgEgBIADgHIAIAAIABgBIABgBIAAgBIAAgCIABABQAEAMgIAAIAAAAgAASANIAEACIADACIgHgEgAgDgHIgCgDIAFACQAAADACACIANAPQgLgHgHgMgAgZgUQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIABgCIAFAHIAAAAIgDgBgAgTgeIABAAIAAACIgBgCg");
	this.shape_131.setTransform(-13.2,-13.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#4B4748").s().p("AgGAEQgCgGAFgJIABgEIAFAAIAAAEIgBAGQgCALAIAAIAAAGIgEABIgBADQgHgFgCgHg");
	this.shape_132.setTransform(0,-28.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2C2724").s().p("AgSgOQgFgQgFgSIAIARIABABQAGAQAFAPIACADQAEAPAHAMQAJAPAHAPIACAFIAAACQgZgkgQgugAAaA3IgBgEIAEAFIAAADIgDgEgAgYg7IAEAEIAAAEIgEgIgAgbhDIABAAIAAACIgBgCg");
	this.shape_133.setTransform(-18.4,-22.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#5B534D").s().p("AgEAAIAAABIABAKQgCgGABgFgAADgCIAAgGIADgCIAAADIAAAGQgCABgBAEIAAgGg");
	this.shape_134.setTransform(-22.3,-32.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#756E68").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_135.setTransform(-21.2,-35.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#ADAEAC").s().p("AgDgIIADAAIgBAFQgCAMAHgCIAAACIgBgBIgHABIABgRg");
	this.shape_136.setTransform(-25,-52.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#2F2B28").s().p("AgBAAIADAAIAAABIAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAgBAAg");
	this.shape_137.setTransform(-21.9,-72.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#827C77").s().p("AgPAAIABgBIAFABIAJAAIAAAAIADACQgKAAgIgCgAALABQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAIABAAIAAABIgGABIABgBg");
	this.shape_138.setTransform(-4.1,-69.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#251F1C").s().p("AgaAAIgBgCIAGAAIAxAAQgTAFgOAAQgLAAgKgDg");
	this.shape_139.setTransform(-10.5,-67.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#494440").s().p("AAAAAIABgBIgBADIAAgCg");
	this.shape_140.setTransform(-14.4,-73.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#302F2F").s().p("AAFAxIABgBIAAACIgBgBgAADARIgDgLIAAACQACAFABAFIAAgBgAgEgNIgBgFQgBgPADgNIAAgCIACAAIABAAIAAABQgDAEAAAGIgBAbIAAgDg");
	this.shape_141.setTransform(-18.8,-65);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#C2BEBB").s().p("AADAHIAAAAIAAABIAAgBgAgBgCIgBgFIABAGIAAgBg");
	this.shape_142.setTransform(-19.6,-75.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#36322F").s().p("AgCAKQgBgKACgJIAAgCIABgBIAAAAIABAAIACADIgBAAQgDALgBALIAAgDg");
	this.shape_143.setTransform(-17.7,-79.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CC9966").s().p("Ai1JIIgBgNQgIgMgHgWQgNgWAAgNQAAgHACgFIgCgNQAAgZAaAAQAYAAAGAWQADAMAAASQAPAbANAyQAAAagZAAQgaAAgHgXgAmiElIgEgCIAAgFIgRgFIgDgBIgDgBQgfgLgVgVIgEgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgJgFgGgIQgVgWgDgoIACgDQAZgIAXgJIABgBIABAAQAbgMAXgNIAUgNIA6BoQAZAuAxANIgBADIgGAAIgHACQgPAFgLAEQgWALgDALQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgNABQgYAAgZgQgABSEYIgoAAIgGAAQhLgJg3geQgBgBAEgFIACAAQABgmAIgeIgFAAIgGAAIgEgKIAEgBQAKgMARAEQAhAFA8gCIAHAAQAAABAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAmANAdASIAGABIACAAIAFgCIANgQIAPgPIAEgHIAEAAIAVgRIAFgDQADgGAIgDIAVgQQAVgSAWgOIABAAQAEgGAHACIAAAAQANgKANgMIACgDQAHgOALgLIAHgHQAHgFAKgCQASgZAlgJIAAgCIAGAAQAjgBAVgDQAAABAAABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAAAGIAAAGQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAIAWAEQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQARAOAXAJIABAAIACABIAEACIAAACIAGAHIABAFIAEACQgDAhgPgSIgBAAIgDgGIgCgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIAAgGQgQgOgPgOQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBIgGAAIgMAAIgGAAIAAgGQgcAAgbAEIgBAAIAAACQAAABAAABQAAAAAAABQAAABABAAQAAABAAAAQAPAbAWAVIABACIABAAQAHAFAAAJQABAFgCADIAAABIAAAFQgWAJgcgjIgCgDQgPgTgRACIAAACQACAGAAAGQABAJgFAIQgSAZgYAUQgEALgHAJIgeAlQgZApgiAiQgOANgPANQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgpAGg7AKIgGACIAAgGgAiaCLIgFAAIAAgFIgEgCQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQgKgGgGgMQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAgFQAAgZALgOIAEgBQAEgPAIgMQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAAAQAGgPAIgMIABgFIAAAAQAJgSAGgWIAEgGQACgKAGgGIADAAQgDgWAXAGIADgBQANgNAAgJIAFAAQAQACABgNIgKgFIgHgBIAAgGIgEgGIgBgEIAAgGQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAHAKAMAFQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAQAIABgDgPIADAAQABAJANgEIAAgFIAAgGQgDgDgBgDIgBgGQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAFAAIAAAFIAAAGQABAQALAGIABgFQABgDAEgCQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQABAAABAAIACAAQAGAgAUgKQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAQACAKAEABQADABAFgHIAEgBIADgJQAGgKAJAUIAAAFIAAABIAAAFIgCAAQACAJAIAEQAHAEANAAIABAFQAHAGAIAEIgBADIAAAAQgHAKACALQgZAAgOAKQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgCAAQAXAHAfAFQgNAWgVALIAFABQAmAPgVAyQgGALgKAJIgCAAIgBABIgBACIgFABQgHAFgIgBIgBABIgBACQgjADgigDIgCAAQgZgCgXgFIgHgBIg0AbIgVALIgFABIgMAAgAgjBJQAOAFAQAAQAOAAARgGIAEgCQAKgEAIgGIAAgJIAAgOQgEgCgFgEQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgNgNgOgEQgJgCgKABIgDABIgEABIgCABIABABQAFACAGAAIAGAAIAJAAQgoAOAFAfQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIAFAAQASAFAagJIACAEIgBAGQgZAGgegEIAAgCIgGAAIgFABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIAAAAIAGABgAghACQABAEgCADIAAACQgCAGgEAEIgFAEQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgCABIgSABQgBAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABQAAABABAAQAAABAAAAQAAAAABAAQAAAAABAAIAUAAIACgBQAMgFAFgMIABgEIABgCIABgJIgBgEIgBgBIgBAAQgFACABAFgAACgzQgEACgEAFIgBAEIAGAAIAxgKIAAgGIgQAAIgGAAQgPAAgJAFgABdgxIAGABIABgBQACgGgHAAIgBAAIgEgBIgVABQgDAAgBAEQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAIACAAIACgBIAKgBIAMABgABKhTQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAIAEABQAGADAFAFIABABIAEADQAFAAgCgFIgBgCIgEgDQgHgHgLgEIAAAAQgGAAADAFgAgNhaIgFAIIAAABIAAACIACABIADAAIAAgBIAIgIIABgCIABAAIALgBIAGABQAVACAHgJIgmAAIgFAAIAAABIgFAAIgBABIgBAAIgFAEIAAAAgAkaBfIAAgGQgbAEgNgJIgGgBIgBgBIAAgBIgBAAIgEgCIgDgCIgDgBIgNgQQgDgDAAgCIgFgCIgCgEIgLgOIAAgCIgBAAIgDgDIAAgDIgEgFQgBgEgDgEQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgDgDgCgEIAAgCIgDgDIgHgKIgBgBQgFgRgGgQIgIgUIgHgQIAAgEIgEgEIgCgGIAAgCIgBAAIgCgFQgGgKAAgLQABgEACgDIAAgFIAAgEIAGgFIAAgLIAAgDQgKhOAQhQIABgEQALgJAAgUIAAgFQgBgMAFgGIAEAAIAAgIIgCgDIAAgCQAEgGACgHIAAgDIAAgCIgBgNIgBgLIgBgGIAAAAQgBgFgDgFIAAgCQgEgGAAgIIAAgDIAAgbQAAgGAEgEIAAgBIgBAAIAAgGQgMgFgDgNIgBgEIgGAAIgGAAIAAgGQgMgiAeAWIAAAEIADADIAIAKIAFAHIAFAHQADAFAFAAIABgBIAGgGIABgFIABgCIAAAAIAAgEQgGgIgFgIIABgDIABgEQgCgJgEgJQgEgHAAgIQABgLAEgMIACAAIAAAAIABABIABABIAAADQADANAGAJIABACIABAEQAHATAIARIACAEIABADQAWASAFgbIAAgGQAAgdAGgVIAEAAIADAAQABAGAAAGQgBAGACAFQgFATAAAaIAAAFIAGACQAfASAPgwIAAgDQAKgCAGAFQgDAZgSAKIgBAEIgKAHQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAABIACAEQAFAHAHAEQAGAEAGABQAKADALgBQAIgDAJABIALAGIADABQAGAAADAFIADAGIAAAAIAAAGQAEAMgIACQgBAAAAAAQAAABAAAAQAAAAAAABQgBABABABIgGAAQgLgEgHgHIAAAAIgDgBIgCAAIAAgBIAAAAIgEgCIAAAAIAAAAQgIgDgJACIAAACQgCADgDABIgBAAIgGAKIAAAEIgEAHIgBAFIgiALIgGABQgCACAAACIACAAIAAAYIAAAEQgBAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAABIgDASQgIANAAAQIgBAeIgBAeIAAA7IgBA7QAAAJAEAHIAEAGQAAAGAEAEIABABIACAFIAEAEQAHAPALANIAAABQAIAPAKANIABABIAGAOIABAAIAAADIABABQABANALAHIABABIADADIAEADQAGAFAHACIAJADIABADQALALAFAOQABARgDAMQgEALgKAHIgBADQgVALgdAAIgGABIAAAAgAlinaQAXAJAfgMIgyAAIgGAAIACADgAH5A5QgEACgFgCQgFgFgBgHQgCgJAEgDQgGgIgEgKIgBgEQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAHAKAMAFIAAADIABABIAAAAIAAAAIACACIAFAHIABADIABAAIAAAGQgCAKgDAAIgDgCgABzgsQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBgBIAAgBIABgBIABABIAAAGIgBAAgAlDkeIABAEIABAFIgCAEIAAgNg");
	this.shape_144.setTransform(22.4,-19.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("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QAAgBAAAAQgLgDgKgEQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgUgLgLgVIgCgHQAOAAAYAcIAAAGIAFABQAeAQAggMQABAAABAAQAAAAABAAQABAAAAgBQAAAAABAAQAWgSAZgOQgDAhgbALIgEAAIgOAEIgBAAQgKACgMAAQgOAAgQgDgAENgNIgFgBQgegSglgNQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgIAAQg9ACghgGQgQgDgLAMIgDABQgQAHgRABQgZACgYgKIgIgEIgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgQgOgHgZQgEgOgBgRIgEACIgGAAIABgDQAJgHAEgMQAEgLgCgRQgFgOgKgLIgBgDIgKgDQgHgDgGgFIgDgDIgEgDIgBgBQgLgIgBgMIAAgBIgBgDIAAAAIgHgOIgBgBQgKgNgHgPIgBgBQgKgNgIgPIgDgEIgCgFIgBgBQgEgEgBgGIgDgGQgFgHABgJIAAg7IAAg7IABgeIABgeQAAgRAJgMIACgTQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAAgEIAAgYIgDAAQAAgCADgDIAFgBIAigKIACgFIADgHIABgFIAFgJIABAAQADgBACgDIABgCQAIgCAIADIAAAAIABAAIADACIABAAIAAABIABAAIADABIABAAQAHAHAKADIgBAFQgPgBgHgIQgBgBAAAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQgNAGgJALIgHAJQgBABAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgOAKQgJACgHAIIgCAEIgJAcIgDAGIgEANQgCAKAGAGIgBAJIAAABIgBAYIAAAIIAAANIgBAGIAAAOIAAASIgCAuIgCAcQgBAMAEAKQACAEADACIAIAHIAAAAIAAAEIABABIABABIAAABIAAABQAFALAIALIAAAAIAAABIABACQARAXAPAaIAAAAIACAEIAAADQAHAJAIAHIADACIACACIALAFIAGAEIAEADIABAAIADACQAFAEgCAHIAAAAQATAeAjgKIABgFQAHgNADgMIABABQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIABgEIAGgDQADgEABgFIABAAIgIADQgUAJgOgCIgGgBQgPgGgGgUIAAgDQAMAAACgIIAAgGIgYgLIgEgBIABgEIADgBIAGAAQAPABADgMIgQgHIgIgEIgEgBIAAgFIgGAAQgHgHgOgEQAvgCgxgNQgMgDALACQApAFALgMQg3gRAmgLIAFAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAHAEAKABQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQACgFAAgGQgPAEgEgIIgDgBQgygCAggRIACgEIADABQANARAGgdIAEAAIAMgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQg0geBFAKIACABIAEAAQAAADACABQAOAUAXAJIACAAQgBATALAEIAAAGQgGADgGABIgGABQgKgGAAgQIAAgGIgMAAIgGAAIAAgGQgPgOgGADIgGABIABADQALANAPAGIAAAGQACAUAQAIIAAAFIAEAAIAFAAIAHAAIAAgFIAAgGIAFABIAXAQIAAgGIAAgLIAGAAIALAAIAAgGIAFACQAEABACADIAAAGQAEAMgIABIgCADIAAAGIACAFIAEAGIAAAGIAGABIALAFQgCAMgPgBIgGAAIAAgGQgIAAgHgCIgBgDIgGAAIgFABQAAAAAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQABAAAAAAQAAABAAAAQALADAGAFQADALgJADIAAADQgWgGACAXIgCAAQgcABgDADIAAABQgDADAVAGQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBAEQgGAXgIASIAAAAIgBAGQgJALgFAQQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABgBAAQgHALgFAQIgDABQgMAOAAAYIAAAGQAAABAAABQAAAAAAABQABABAAAAQAAAAAAABQAGALALAGQAAABAAABQAAABAAAAQAAABAAAAQAAABABAAIADABIAAAGIAFAAIAMAAIAFgBIAVgLIA0gcQAAABAAABQAAAAAAABQABAAAAABQAAAAAAAAQAFACAGAAIAAAGQgBAAgBAAQAAAAgBAAQgBAAAAABQAAAAgBAAQgPANAegCQAEAAABgDQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAGAAQAVAFAwABQgEAAgCADQgYAGghgBIAAACIAFABQAVAGAbAAIAEAAIABACQAFABADAAQAHAFAJACIABACQAPAFAPAEIABAAIAJAGIAGgBIAIgDIACAAIAJgCQANgGAHgMIAFgGQAFgFAHgDIAJgGIAggcIAegWIAGgEQAFgBABgEIAMgJQAXgGAKgQQAAgEADgBQAHgKAKgIIAJgFQgBgEADgBQAZgbAigTIAGAAQAigBAiABIAAAFQgUACgjABIgHABIAAACQgkAJgTAaQgJACgHAFIgIAHQgKALgHAOIgDADQgMALgNALIgBAAQgHgCgEAGIAAAAQgXAOgVASIgUAQQgIADgDAGIgFADIgVAQIgFABIgEAHIgOAPIgOAQIgEACIgDAAgAgPjpIAAAAIAOgHIABgEIgPALgAgBkpQgBABAZAEIAAgDIgXgCIgBAAgAAgkyIATAJIAAgDIgTgHgAgpkxIATgEIAAgCIgTAGgAgBleIAFAGQAHAHAMADIAAgGIAAgFQgBAAgBgBQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBgCIAAgCQgLgMgGAAQgGAAgCAMIAEAAIAAAAIADABgADfhWIgBgCIgBgCIABgBIABgBIAAgBQAJABAGgFIAFgBIACgCIAAgBIADAAQAJgJAHgLQAAABAAABQAAAAAAABQAAABAAAAQAAAAABABIADABIgEAGIgBADQgFAGgHAEIgCADQgIAGgKABIgEAAIgEAAgAihhfIAAgEIgBAAQgIAAgHgCQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAGAAQAIAAgDgMIAGABQANAIAbgDIAAAGIAAAEIAFAAIAhAAQgTAIgWAAQgRAAgTgEgAjPh/IAAgEQgNAHgKALIgEgFQAOgJACgWIAAgGIgBAAIgFgGIgDgFQgGgPgKgPQgIgMgDgPIgCgDQgFgQgHgQIAAgBIgIgRIgLgYQgEgFAAgHIABgDIgBgKIAAgCQgBgNAKgHIAAgDIAAgFQgUhDAPg9IAGgVIACgEIAEgMIAAgEQgDgTAJgFIAAgEIAAgGIACgGQAEgbAKgWIgCgIIgGgOIgBgFIgDgKQgCgHAAgIQAAgPABgPQABgDABgCQgIgIgGgJQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIgEAAQggg0AzAIIACAFIAAABIAAAAIABAFIABAAIADAHIABACIABABQABAIAIAAIACgBIACgFIgBgBIgBgFIgFgOIgCgHIgBgLIAAgCIAAAAIAAgGIgBgLQAAgEACgDIAAgCQAFgJAKABIABAAQABgCAEABIABABIAAAAQAEADACAFQAHAMABAPIAAAEQAFARAKANQAIgfAOgXQAAgDACgDQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAOgBIAHABIAAAAIABACQACAGAAAHIgBARIAAAEQgCAKAAAMIAAADIAAAIQgEACABAFIADADQAAAIAIgCQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQAGAAAPgbQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAQATgXASAVQgKAggTAXIgBABIgEABIgBAAIgCABQgCAEADADIAAACQAIACAKAAIAIAAIAFgBIAFAAIAVAKIAKAFIAPAHIAAAGIAAAFIAGAAQABATgIAIIgFABIAAgFIgGAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAIgDgDgLIAAgGIgBgBIgCgFQgDgFgGAAIgDgBIgMgGQgJgBgHADQgMABgJgDQgHgCgFgDQgHgEgGgHIgBgFQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIALgHIABgEQARgKAEgZQgGgGgLADIAAADQgPAwgegTIgGgBIAAgGQAAgZAEgTQgBgFAAgGQABgGgCgGIgCAAIgFAAQgGAVAAAdIAAAGQgEAagXgRIgBgDIABgFIgCABQgJgRgGgTIgBgEIgBgCQgGgJgEgNIAAgEIgBAAIAAgBIAAAAIgDgCIgBAAIgBAAIgBAAIAAACQgCAKABALIAAACQAAAIADAHQAFAJABAJIAAAEIgBADQAEAIAHAHIAAAFIAAAAIgBACIgCAFIgFAGIgCABQgFAAgDgFIgEgHIgFgHIgJgKIgCgDIgBgEQgdgWAMAiIAAAFIAFAAIAGAAIACAFQADANAMAFIAAAFIgDAAIAAADQgDANABAPIABAFIAAADIAAADQAAAHAEAHIAEALIAAABIAAAAIABAGIACALIAAANIAAABIAAAAIAAAEQgCAHgDAGIAAACIACADIgBAIIgDAAQgFAGAAAMIAAAEQAAAUgKAKIgCAEQgPBQAJBOIAAAAIAAADIABALIgGAFIgDACIAAAGIAAAHQAAAMAGAKIACAFIAAABIADAHIADAIIAHAQIAJAUQAGAQAFARIAAABIAHAKIADAEIABACQABAEADADQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAQACAEACAEIAAAEIAEAEIACADIACABIAKAPIADAEIABADQAIAMAMAIIACABIAHAEIABAAIABABIAAACIAAABIgBABIgBABIgJAAIgDAHQgSgFgGgSgAC5iAIAAgDIABgGQACgEADgCIgGACQgcAJgRgFIgFAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgEgfApgOIgLAAIgGAAQgGAAgEgCIgBgBIABgCIAFgBIADAAQAKgCAJADQAOADAOAOQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAFAFAFACIgBAOIAAAJQgIAGgJAEgACjiVQANACADgMQhHADA3AHgAFsiaQgbgfAnAUQAAAMgCADIgDABQgCAAgFgFgABYinQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIASgBIACgBQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAFgEQAEgEABgGIABgCQACgDgBgEQgBgGAEgCIACAAIABABIABAFIgBAJIgBACIgBAEQgFAMgNAFIgCABIgUAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBgAlhjpIAAgCQATAFAPAqIAAADQgUgGgOgqgAkijHQgEgSAPgRIAEgFQgBAOgDAOIgFAQIgBAHQgEgGgBgFgAEOjxIgCgCIAAgBQgCgLAGgKIAAAAIACgDQgJgEgGgHIgBgEIAGAAIABgGIAKgWQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAgBAAAAQgMAZgVgIIgGAAIAAgGIAAAAIAAgFQgKgVgGALIgDAIIgDACQgKgFAEgSIAAgGIgGAAQADAMgIAAIgGAAIABAEQABAAAAAAQAAAAABAAQABABAAAAQABAAABAAIAAAGQgUAKgGghIgCAAQgBAAgBAAQAAAAgBABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAABQAAAAAAABQgDADgBADIgCAFQgKgGgBgQIAAgGQAAAAABAAQABAAAAgBQABAAAAAAQAAAAAAAAQACgEABgGIAAgGIAAgQIAAgGIAAgGQgKAbgPgUQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIAAgGIAAgGIAAgFQgLADgDgIIgCAAIAAgGQgPABABgNIACAAIAAgFIgFAAIAAgFQgJAAADgMIABgGIAFAAIAAgGIAAgEIgFAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgegGAfgCIAFAAIABAGQAIAiAYgYIAGAAIAAAGIgCAAQgBAKAJACIAAAGIACAAIABAFQABAEADABIAEAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBIABAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAIAFAAIAAAFIAAAGQgCAQAEAIIAEAEIAGAAIAFAAIgBgEQgKgKARgIIAAgDQAJAIANAGIADAAQADgJAAgIQgQgEgBgSIAAgGIAAgGQgWAFACgVIgCAAIAAgEQAIgCAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAQAeAWAWIADADIAAgDIAAgDQABAAAAAAQABAAABABQAAAAABAAQAAAAABABQAQAXANgTIAAAGIAAAGQgPAXADAQIABAFIADAAQgCgLAKAAIAGAAIAAAGIAAAFIABAEQALALAMgHIAEgCIAAgGIgGAAIgGAAIAAgCQAOAAgCgMIAAgCIgFgHIgBgFQgNABgGAJQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIAAgGIAAgRIACAAIAAgGQgCgnAJAEQADACAEAGIAAAFIABAFIALAcIAGAAIAAAGIAAAGIADgBQAHgNAGgOQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQACACADAAIAAAWIAAAGIABAFIAEAOQAEAOAHALQAEAWgLALIgDABIABAEIABAAIAAAAQAEACAEAAIAAAJIgCAMQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIAAgFIAAgMQgGAOgLAHQgDACgDAAIAAAFIgFAAIgFAAQgGAGgMAAIgCAAIgBACIgBACIgCAHIAAABIAAABQAAABAAAAQAAABABAAQAAABAAAAQgBABAAAAIgBADIgDAAgAEplkIgFAGQgTARAOgFIAFgCIABgEIAAgBIAFgGIAAgFgABpmxQAOANAEgSIAAgCQgHgHgPADIAAAEIAAAFIAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABgAD8j4QgKgCgLACIgCABIgCAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgEAEAAIAUgBIAEABIACAAQAHAAgCAGIgCABIgGgBgAD9kNIgCgBQgFgFgFgDIgEgBQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQgDgFAGAAIABAAQAKAEAIAHIAEADIABACQACAFgGAAIgDgDgAGbkTQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAAAQgFgFAQgIIAGABIAGAFQADAQgMAAQgFAAgHgCgACOkVIgBgBIgBgCIABgBIAFgIIAAAAIAEgEIABgBIABAAIAFAAIAOgBQABAAAAABQABAAAAABQAAAAAAABQAAABAAABIgBABIgEAAIgNABIAAAAIgBABIgIAJIgBABIgDAAgAB7lfIgBgEQgNgKAOgIIAFABIAHAEIAAAGIAAAGQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgGAAgABdl0QAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgDABQgDACABACQgKgRgOgPQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAgBAAQgHgUgTgKQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIAEAAQABgJANAEIACAAQgBALAJgBIAAAGQgDAMAJAAIAGAAIAMAAQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAQADADAGAAIACgEIAEgBIABAFQAGAPAKATIAAALIAAAGQgMgGgHgKgAFYmGQgEgBAJgJQAAgBABAAQAAAAABAAQAAgBABAAQABAAABAAIAGAAIAEAAIAAAGQgOAGgFAAIgBAAgAFqmiIgCAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAAAABgBQAEgHALAAQAAABAAABQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAQAAALgHAEQgBABAAAAQAAAAgBAAQgBAAAAAAQgBABgBAAIgCAAQgHAAABgLgAlknKQgPgxANATIAFAIQABAcgCAAQgBAAgBgGgAEEnwIAEAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAKgCAFAGQAAAPgHAKQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgIACQgOAAANgegAk6oNIABgFIAAgGQgBgVALgHIgEAsIgBAGIgCAAQgHAAADgLgAiRoEIABABIAAAAIgBABIAAgCgAAooYIgBgGIAEAAQADgTAPANQgCAMAAAMIACAAIgEACIgDAAQgHAAgHgOg");
	this.shape_145.setTransform(6.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]}).wait(15));

	// Layer 3
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CE00FF").s().p("AgXBjIgGAAQgIgOACgZIAAgLIAAgGIAAgFIACgLQAOhQAchCIAAgCQARAAAGAOQABASgGALQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAABQgDACgBAEIgCAEQAFAXgVgDIAAADQgNAeADAtIACAOIADAAQAAAAAAABQAAABAAAAQABABAAABQAAAAAAAAIAGAHQAOALARgLIAAAcIAAAGQgKAFAEASIABAFQgPgYgoABg");
	this.shape_146.setTransform(-84.5,49.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#ACA8A3").s().p("AgHAAIgBgFQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIABAEQAEAEAGACQgDALgEAAQgDAAgGgLg");
	this.shape_147.setTransform(-88.4,65.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#ADA59F").s().p("AACAWIgEAAIgGAAIgBgEQgUgYAVgPIAAAGQgCAkAdgJQgDACgBAEIgBAEIgMAAg");
	this.shape_148.setTransform(-86.7,63.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#474441").s().p("AgOgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAEAAIALAAIAGAAIAKAAQgLANgHAAQgHAAgFgIg");
	this.shape_149.setTransform(-85.3,66.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CEC8C2").s().p("AgHAWIgGAAIABgEQABgEAEgCQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQALgHgDgVIAGABQAEABACAEIAAAEQgBASgIALQgDACAAACIgJAAg");
	this.shape_150.setTransform(-83.9,63.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#BEB6AF").s().p("AgOAAIgEgBIAAgEQATgCASAAIAAAGIgFAAIgFAAQgLgEAAAIIAAAFIgMgIg");
	this.shape_151.setTransform(-85.6,61.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#261F1A").s().p("AgfAYIgCgEIAAgFQgJgHAEgUIAAgGIAAgGIAFAAIAGgBIAGgFIAGAAQAogBAPAYIAAAFIAAAFIgHgEIgFgBIAAgFQgCgDgEgBIgFgBIAAgGQgSAAgUACIAAAEQgVAOAUAYIABAFQgGgCgEgFg");
	this.shape_152.setTransform(-85.3,62.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#1F1C19").s().p("AgCAcIAAgGIAAglIAAgMIAFAAIAAAMIAAAlIAAAGIgFAAg");
	this.shape_153.setTransform(-89,57.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#ABA9A6").s().p("AgEAFIABgFIAAgEIAAgGIAAgXIAAgFIAEAAIAFAAIAAAGIAAAEQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAAMIAAAmIAAAFIAAAGQgJgJAEgZg");
	this.shape_154.setTransform(-89.3,57);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#444342").s().p("AgDAIIAAgFIAAgEIABgGIAGABIgCAJIAAAFIgFAAg");
	this.shape_155.setTransform(-88.3,53.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#A19D97").s().p("AgEAnIgGgBIAAgFQgCgoAMgbIAAgFIAFAAIAAAnIAAAFIAAAFQgDAPAJACQACANgLAAIgGgBg");
	this.shape_156.setTransform(-83.6,50.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#221F19").s().p("AgFAtIgBgNQgEgtANgfIACAGQABADACADQgMAbADAnIAAAFIAAAGg");
	this.shape_157.setTransform(-84.5,50.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3E3935").s().p("AACAYQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAIAAgGIAAgmIgGAAIAAgDQANAAAEAOIgBAPQgCAUgDAAIgBgBg");
	this.shape_158.setTransform(-82.8,48.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#2A2929").s().p("AgvCXIAAgEIAAgGIAAg4IAAgXIAMAAIAAAXIAAAGIAAAEQgLAXABAhgAAhiUIAPgCIAAAFIgHAFIgFABg");
	this.shape_159.setTransform(-86.1,47.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#BAB6B5").s().p("AgBAZIAAgFIgBgLQgBgKACgJQABgIAEgGIgCAhIgBAQg");
	this.shape_160.setTransform(-80.1,55);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#64615A").s().p("AgUABIAAgBIAGAAIAEAAIAHAAIgQABgAAMAAIAJAAIgIAAIgBAAg");
	this.shape_161.setTransform(-60.2,48.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#181512").s().p("AAQBPIAAgGIAAgcIAAgGIAAgGIggAAIgFAAIAAgGIAFACQASAEgCgQIAWAJQgBAIAAALIABAMIAAAFIAAALIAAAGIgGAAgAAFgWIABgQQgEgOgNAAIAAACIAAAGQgCgCgBgEIgCgGIAAgCQAUACgEgWIACAAQgCAUAQgDIAAALIAAAGQgEAOAAAIg");
	this.shape_162.setTransform(-82.5,51.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#44413D").s().p("AgIAXIAAgGIAAgGIABgGQAGgPAKgMQgDAXgHAQIgBAGIgGAAg");
	this.shape_163.setTransform(-80,42.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#423938").s().p("AgGASIgBgDQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAGgKgBgSIADABQAEABACAEQgCAPgGAMIgBAEQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_164.setTransform(-81.1,40.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#5F595F").s().p("AgEAAIAFAAIAEAAIgJABIAAgBg");
	this.shape_165.setTransform(-74.1,39.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#847B7A").s().p("AgXAJIgBgDIADgBIABgBQATAEATgCQgOADgSgBIAAAEIAAAAQgEAAgFgDgAAbADIACgCIAIgBIgKAEIAAgBgAgdABQgFgBgBgFIgBgGIACAFQACAFADABIABABg");
	this.shape_166.setTransform(-73.8,38.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#191614").s().p("AgrAMIgGAAIgGAAIAAgEQASABAOgDIAHgBIACgBIAKgEIAEAAQAhABASgMQAAABAAABQABABAAAAQAAABAAAAQAAABABAAIADABQgHAJgMAEIgPAAQgYgBgYADIgNACIgEAAg");
	this.shape_167.setTransform(-69.6,38.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#302C2A").s().p("AgIACIgFAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQAAgBgBAAIgBgCIAAgGIAFgBIAHgFIAEABIAXAOIAAAGIAAAGQgPgSgNAGg");
	this.shape_168.setTransform(-80.5,34.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#201C1A").s().p("AgKAWQAAgKAEgMIgGAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAgBIAFgBQAHgFAAgKIAEABQADABACADIgBAHIABAEIABAFQABAFAFACIABAAIAFACIADABIgBABIgDABIgFAAQgKAAgFAHQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAg");
	this.shape_169.setTransform(-77.8,37.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("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");
	this.shape_170.setTransform(-57.1,41.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#CC9966").s().p("AhqCVIgFAAIgGAAIAAgEIhWAAIgTgBIgFAAIgDgBIgDAAQgMAAgMADIAAADIgKgMIgBgFIABgGQAIgQACgXIAEgCQACgBAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAFgHAMAAIAEAAIABAEQAFACAFAAIAGAAIAAABIAKgBIANgBQAYgDAZAAIAPAAQAMgEAHgJQABgBABAAQAAAAABAAQABAAAAAAQAAAAABgBQAVghAhgKIAOgEIADAAIAAAAQAMgDAOABQgBAKADgJQAJgUAMgUQAOgXAQgWQAPgVARgSQAPgRARgPIAFABIAXAPIAEABQAKAPATAGQAAABAAABQAAAAAAABQAAAAAAAAQAAABABAAQAOAEAIAKIABADQAiAUAlAPQgEAqglALIgDABIAAABIgBAAIgTAMQgGAGgHAGIgCAEQgFAJgKAEQgXALgZAIQgIAJgKAEQgPAIgNAKIgDACIgBABIgCACIgIAHQgGAEgIAAQgQAIgTAGQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQgSAEgOAJIgBAEQgRAAgNADIAAAAIgBABIgDAAIgFACIgzAAgAgXBIIgDADIgeAFQgBAEgCACQgFAFABAHIACAEIABACIABACIAFgCIADgDQAfgLAYgaQABgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgCgBQgOAAgKANg");
	this.shape_171.setTransform(-53.3,32);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#CC00FF").s().p("AAqA1IgLgEIgFgBIgFgBIgKgFQhJgkg3gsIgDgBQAFgRAPgBQATAEAIAIQAAAAABABQAAAAAAAAQABABABAAQAAAAABABQACAEADACIAEACQAWACgIATIADABQAZAVAsAJIAOACIAAgDQABAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIAJgFQAOgKgGgSIAbAIIAGABQACAKARABIAHAAQgcAIgKAoIgCAFIgKABQgNAAgQgFg");
	this.shape_172.setTransform(-13.3,68);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#ACA8A3").s().p("AgHAHQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAEgBQAGgCACgFQAUALgXAEIgCAAIgEgBg");
	this.shape_173.setTransform(0.5,76.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#ADA59F").s().p("AgXABIAGABQAiANgBgfQABAEADACIAEADIgDAKIgBAEIgCAGIgEAAQgKAEgHAAQgOAAgGgQg");
	this.shape_174.setTransform(-1,74.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#474441").s().p("AgIAQIACgFIADgLIACgFIABgKQATAZgWAGIgCAAIgDAAg");
	this.shape_175.setTransform(1.8,73.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#CEC8C2").s().p("AANAQQgDgCgCgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgEgMgUgEIACgFQACgDAFgCIAEACQARAGAHAKQABAAAAABQABABAAAAQABAAAAABQABAAAAAAIgDAKIgBAGIgEgDg");
	this.shape_176.setTransform(-0.3,71.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#BEB6AF").s().p("AgIASQADgSAFgSIAFABIgBAFIgCAFQgGAKAIACIAFACIgLAIIgDAEg");
	this.shape_177.setTransform(-2.9,72.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#261F1A").s().p("AgRAjIgFgCIgGgBIACgGIAAgGIgDgHIACgFQAKgnAbgIIAEACIAGABIgHAFIgCAFIgFgCQgEACgCADIgBAFIgGgBQgFARgDATIADABQAJAYAcgMIAFAAQgEAFgGADIgEABIgFgCQgEADgGAAQgHAAgLgFg");
	this.shape_178.setTransform(-2.2,72.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#1F1C19").s().p("AAUAJIgjgKIgMgDIACgFIALADIAkAJIAGACIgCAFIgGgBg");
	this.shape_179.setTransform(-7.7,74.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#ABA9A6").s().p("AAEAJIgEgDIgEgBIgGgCIgWgFIgFgCIABgEIACgGIAFACIAFABQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAIALADIAkAKIAGABIAFACQgEADgHAAQgJAAgOgGg");
	this.shape_180.setTransform(-8.3,74.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#444342").s().p("AACAEIgEgBIgGgDIADgFIAJAFIAEAAIgBAGIgFgCg");
	this.shape_181.setTransform(-11.5,72.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#A19D97").s().p("AAcARQgmgJgXgSIgFgCIABgFIAlAKIAGACIAEABQAOAHAFgIQAQADgJAPIgDAGIgFgCg");
	this.shape_182.setTransform(-13.1,67.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#3E3935").s().p("AARAJIgmgKIgBAEIgDAAQAEgNAPABIAOAFQAVAHgEADQgBAAAAABQAAAAgBAAQAAABAAABQgBAAAAABIgFgBg");
	this.shape_183.setTransform(-14.7,66.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#221F19").s().p("AAcAPQgsgJgZgVIAGABQADgBADgBQAWASAnAJIAFACIAFABIgBADIgNgCg");
	this.shape_184.setTransform(-13.5,68.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#2A2929").s().p("ACABWIgFgCIg2gPIgWgGIADgLIAWAGIAGABIAEACQATAQAgAIIAAACIgFgBgAiDhWIAGABIACAIIAAAFIgJABIABgPg");
	this.shape_185.setTransform(-16.7,69.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#BAB6B5").s().p("AASAIIgLgCQgKgCgHgEQgIgDgFgGIAfAKIAQAFIgBAEIgFgCg");
	this.shape_186.setTransform(-7.6,65.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#64615A").s().p("AgFATIACgFIABgEIACgHIgCARIAAAAgAAGgTIgCAHIgBABIADgIg");
	this.shape_187.setTransform(-9,44.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#44413D").s().p("AANANIgGgBIgFgDQgNgJgIgOQAVAJANALIAFADIgBAGIgGgCg");
	this.shape_188.setTransform(-19.1,62);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#181512").s().p("AARAeIADgFQAKgRgRgCIAPgTQAHAEALADIALACIAFABIALADIAGABIgCAGIgGgCIgagGIgGgCIgGgCIgJAfIgBAFIgGgBgAg9ABIgCAAQAIgTgXgBIABgDQASAIACgQIALADIAFABQAMAIAIADIgCAGIgPgFQgPgBgDAOIACAAIAGABQgDACgEAAIgCAAIgEgBg");
	this.shape_189.setTransform(-11.5,66.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#423938").s().p("AAMAMQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgIgJgSgDIADgDQACgEAEgBQAOAHAJAJIAFACQgBABAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgCABIgCAAg");
	this.shape_190.setTransform(-21.5,62.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#5F595F").s().p("AAAAFIAAgFIABgEIgBAJIAAAAIAAAAg");
	this.shape_191.setTransform(-20.8,55.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#191614").s().p("AgLA3QAFgRABgOIABgHIAAgDIgBgLIABgDQAJgfgGgVQAAAAABAAQAAAAAAAAQABAAABAAQAAAAAAAAIADgDQAHAJAAANIgEAOQgHAXgDAYIgCAMIgBAFIgBAGIgCAFg");
	this.shape_192.setTransform(-20.2,50.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#847B7A").s().p("AgPAiIAFgBQAFAAAEgDIAAAAIAAAAQgDAFgFgBIgDAAIgDAAgAAEAbIAAgEIgBgBQAJgRAEgSQgBANgGASIADABQgBAEgEAEIgBAAIgCAAgAAQgXIgCgCIABgIIABALIAAgBg");
	this.shape_193.setTransform(-22.3,54.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#302C2A").s().p("AgIASIgGgBIAAgFIgCgIIACgEIAUgRIAGABIAFABQgVAKADAPIgBAEQAAABgBAAQAAABAAABQgBAAAAAAQAAABAAAAIgCAAIgCAAg");
	this.shape_194.setTransform(-27.5,60.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#201C1A").s().p("AgIAQIAAgFQgCgIgKgDIACgDQACgDADgBIAHACIAEABIAFAAQAFABADgFIAAAAIAEgFIACgCIAAABIAAADIgBAFQgDAKAFAGQABABAAAAQAAAAABABQAAAAAAAAQABAAAAABIgBADQgKgDgKgHIgBAGQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgCAAIgDAAg");
	this.shape_195.setTransform(-23.7,58.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("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");
	this.shape_196.setTransform(-16.3,39.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#CC9966").s().p("AArEbIgFgCQgNgNgWgIQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgGgHADgLIACgEIADAAQADgEABgFIACgFIABAAIACgLIACgMQADgZAIgXIAEgOQgBgNgHgJQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgZgegBgiIAAgPIAAgCIAAAAQACgNAEgMQAIADgGgEQgSgQgQgRQgTgTgQgVQgQgVgNgVQgMgTgKgUIACgFIAVgSQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQASgGAKgQQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAIgNALgFQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAdgbAXggQAnAQABAmIABADIABABIgBABIAGAVQAFAIAEAIIAEADQAGAHABALQAEAZACAaQAGAKACALQADAQAFAQIABADIABABIACADIAFAJQACAIgCAHQADARAAATQAAAAAAAAQABABAAAAQAAAAABABQABAAAAAAQgBATAFAQIADACQgFAQAAAOIAAAAIAAABIAAADIAAAFIgOAxIgBAFIgCAFIgDgBIgXBTIgHASIgCAFIgBADIgBADQgDALAAAMIACABIgOAHIgBAAIgEgBgAAwACQgGAQAKANIACAFIgDAdQADACACADQADAGAHABIAEgBIADAAIACAAIgBgGIgCgEQgCghgSgfIgCgBIgCABg");
	this.shape_197.setTransform(-21.4,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]}).to({state:[{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172}]},3).to({state:[{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]},3).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.4,-82,169.8,164);


(lib.BeachScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("EAi9AX3MhF5AAAMAAAglhIAAqMIAAAAMBF5AAAIAAAAIAAADIAAPbIAAACIAAAMIAAHeIAAACIAAAMIAAYRgEAi9AX3IAAAA");
	this.shape.setTransform(213.7,152.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D9AF9A","#993300"],[0,1],31.5,78.6,-49.3,-60.6).s().p("AgWBuQgPgLAOgiIAbg8IgBgFQgDgSALgtQAEgRAAgNQAAgIgCgGIAFgDIAJgCQAAADAEAAIgCAQQgGAogOA1IgCAGIgCAIQgRA/gDAdIAAAHQgEgBgDgCg");
	this.shape_1.setTransform(59.4,59.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-263.2,-132.4,-282.9,320.4).s().p("AA+A8IgHgKQgSgYgeABQADAKAKARQgKABgIgGIgJgGIAAAAIAAgCIABgBQgBgFgMAAQgMAAgGADIgDgEQgDABgKAHIgEADQgMAIgFgMQAEgGARgGIABgBQAQgFADgJQgIgBgMADQgMACgRAHQgcAKgLgIQAHgFAdgNQAXgKAJgMQg8ARgPgQQANgKAkgIQARgDAJgFQAKgEADgEIgNAAQgzAAgRgOQAdgKAmADIABAAQAnAEAOARQgBgHgRgTQgOgRAGgFQATABAaAgQASAVASgJIAGgEQADAMgFAKIgEAOIgBAFIABAAQAbAIAYASQAbAWgEASQgLgRgTgNQgXgOgPAKQATABAHAdIACAKQADAVgLAOQgLgWgIgNg");
	this.shape_2.setTransform(64,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D9AF9A","#993300"],[0,1],-55.3,29.9,25.1,-109.4).s().p("AgBgBIABAAIACADIgDgDg");
	this.shape_3.setTransform(147.5,89.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#009900","#14A110","#FFFFCC","#FCE794"],[0.149,0.38,0.565,1],251.7,-159.1,282.1,212.1).s().p("AgCgBQgDgHABgDIADALQABAHAFAFQgFgCgCgLg");
	this.shape_4.setTransform(123,85.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D9AF9A","#993300"],[0,1],37.3,76.9,-4.7,-78.5).s().p("ABADyIADgKQANgsALgKQgEALAAAaQAAAFgMAMIgBABIAAgBQADgEgEgBIgBAAIgCAFIgGAKIAAAAIAAAAgABAC4IAFgEIAAAAIgFAMgABjCtIABgCIAAACIgBABIAAgBgABVCVIgFgNQgIgTgEgUQgFgagKgdIgNghQgHgPACgQIADgFIADgCQgLgHgNgMQgQgSgSgdQgNgUgIgSQgLgXgEgRQgQgBgQgWQgRgXAEgXQA1AyAnA7QAXAmATApIAKAWIANAgIANAuQALAoAHArIAAAFIABACIADAeQgEgHgFgKgAASgxQALAEAEgIIgHgBQgFAAgDAFg");
	this.shape_5.setTransform(104,62.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-172.1,-186.3,-308.3,246).s().p("AhiBDQAEgeANgbQgQAGgVAdQgWAegPAGQgFgjAfgsQAUgdAYgTQgPAAgdAGQgbAFgRAAQAPgaAlgHQALgCA7gCQgHgNgQgPIgagbQAgAAAeAUQAZAQAPAbQAHgbAWgKQAPgGAfAAQgEAQgPASQgQARgEAQQAagSApAEQAYACATAJQALAFAJAIIAGAFIgOAAIgbgBIgNAAQgnADgRARQAfAGAVAKIAEACQAuAXgFAoIhEglQgugVgXAVQAAAHAVAFQAUAFgHANQgNAAgLgJQgKgJgKgBQAAAFgYAYQgbAZACAYQgJgUABg0QgKAHgLAdQgLAdgJAIQgTgUAFgpg");
	this.shape_6.setTransform(91.8,31.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#D9AF9A","#993300"],[0,1],36.1,69.8,-44.8,-69.4).s().p("AhLC9IARgdIgFALIAFATQAAgIACgJIAEgKIACgEQAIgTALANQgFACgEAIIgEAMIAAACQgEAPgJABIgEAJQgHgEgHgJgAggC1IABAAIgBACIAAgCgAglCFIAAAAQATgXALggIALgmIAFgPQAJAJgFAYIgCAIIgCAEIAAACIgGAQQgSAtgTAAIgDAAgAARgKIAEgNIAcg7IgBgGQgCgTAKgsIACgHQAFgXgEgPIAFgCIAIgCQABACADABIgFAoQgGAfgKAmIgCAGIgDAJIgJAiQgLArAAAVQgVgGAIgdg");
	this.shape_7.setTransform(131.8,65.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-263.2,-132.4,-282.9,320.4).s().p("ABMBUQgMgUgHgLIgCgDQgSgYgeABQADAKAKARQgKABgIgGIgJgGIAAAAIAAgCIABgBQgBgFgMAAQgMAAgGADIgDgEQgDABgKAHIgEADQgMAIgFgMQAEgGARgGIABgBQAQgFADgJQgIgBgMADQgMACgRAHQgcAKgLgIQAHgFAdgOIARgIQAKgGAFgGQgQAEgNACQgjAGgLgMQAFgEAKgEQANgFAVgFQARgDAJgFQAKgEADgEIgNAAQgzAAgRgOQAdgKAmAEIABAAQAnADAOARQgBgHgRgUQgOgPAGgGQATABAaAgQASAVASgJIAGgEQADAMgFAKIgEAOIgBAFIABAAQAXAHAUANIAIAGQAOALAFALQAGAJgCAJQgEgHgGgGQgIgJgMgIIgLgGQgQgGgLAIQAKAAAHAIQAGAIADAOQADAKAAAJQgBAPgIALIgFgLg");
	this.shape_8.setTransform(140.9,40.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#D9AF9A","#993300"],[0,1],-52,20.8,55.9,-16.7).s().p("AhFBtIAIgFIAEgGIgFANIgHgCgAhIBlIABgBQAIgKgCgEQAMgDgHAMIgFAIIgGAGIgCAAIgDAAQAAgDAEgFgAhQBjIAAAAIAAABIAAgBgAg3BGQAAgHAGgLIAEgHQARgdAOgDIgVAeQgMATgFAQQgEgBABgHgAgXAHQAPgMAcgnIADgFQAcglAXgYQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBIADAEIAAADQgLAGgMAPQgWAcgLAGIgUAkQgMAUgLAAIgFgBg");
	this.shape_9.setTransform(185.6,88);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#D9AF9A","#993300"],[0,1],9.6,61.4,9.3,-38.6).s().p("AAQBEIgBgDIgFgIIgBgEIgHgQIgBgFQgKggACgUQgJgDgGgPIgDgLQgCgKAEgJIAMAVQAOAcAKAdIAFAQIADALIADANIADAPIAAAAIAAACIgDAAIgBAAIACgBQgEgDgDABIgDABIACABQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAIgEACIgBgBg");
	this.shape_10.setTransform(163.3,86.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-73.4,-138.3,-224.6,99.1).s().p("ABTBRIgLgKIgBgBIgEgEIgSgSQgZgTgRAJQgBADAMAHQALAGgGAHQgIgCgFgHQgFgHgFgCQAAACgTALQgHAEgFAEQgJAIgCAJQgBgHACgOIAGgXQgHACgLAPIgBABQgLAQgGADQgHgNAGgTIACgHQAHgRANgOQgLABgSAOIgMAJQgJAGgHAAQACgNAKgNQAGgIAKgIQASgPARgHQgJgCgTgCIgRgBIgKgDQAGgFAHgDQAKgEAOABQAHAAAjAJQgCgJgHgMIgLgUQATAFAPARQAMAOAFASQAIgPAPgCQAKgCATAFQgFAKgMAIQgNAIgFAIQATgGAYAJIAPAGIAHAFIAEADIABACIAHAHIADAEIgDgBIgHgCIgCAAIgDgBIgLgDIgHgCQgYgFgMAIQAXANAMANIAFAFQAFAHACAIIAAADQABAIgDAIIgBgBg");
	this.shape_11.setTransform(160.7,74.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#D9AF9A","#993300"],[0,1],25.9,50.3,-32.1,-49.5).s().p("Ag1CMIgBAAIANgWIgEAIIAEAOIAAgFIACgHIAEgLQADgIAEAAIACAHQgDAEgCAIIAAACIgBADQgCAHgFABQgGgBgIAAgAgMBNIAIgSQAGgaAFgMQAKAKgPAjQgFAPgGAIIgDgMgAAVgXIAJgTIAEACIgHAbIgGgKgAAjhAQgBgOAHgbQAFgUgEgMIAEgCIAGgBQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQgDAggMAuIgFgEg");
	this.shape_12.setTransform(166.8,80.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-188.7,-94.9,-202.8,229.7).s().p("AAnAkQgMgRgWAAQACAIAHAMQgGAAgHgEIgGgEIAAAAIAAgCIABAAQAAgEgKAAQgIAAgEACIgDgDQgCABgKAIQgIAFgEgJQADgEANgEQAMgEABgHQgKgBgYAJIgIACQgOAEgHgFIARgJIAJgEQARgGAGgJQgXAHgOAAQgMgBgFgGQAFgDAHgCQAJgEAPgDQAXgFAEgHQgsABgOgKQAVgIAbADQAdACAKAMQAAgFgNgOQgKgLAEgEQAOABATAXQAOARAQgMQACAJgEAHQgDAJAAAEQAUAGARANQATAQgDANQgHgNgOgJQgQgKgLAIQAOAAAEAVQAFAUgJAMQgLgWgIgKg");
	this.shape_13.setTransform(173.3,63.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],181.5,24.6,-49.9,238.6).s().p("AAWAiQgHgQgIgEQgEAFAEAIQAFAIgCAEQgIAEgBgHQAAgJgBgCIgDABQgBgEgFgDQgFgEgDACIAAABIgBAAIAAABIgIgBQgGAAgEgEIAUgIQgMgJgUAEQgMADgXAJQADgMASgJQASgLAIAGQAAgKgSgBQgOgBgOAFQAIgKAXgBQAUgBAQAFQADgCAFgIQAEgGAGgEQAAAOAWgEQAcgGAJAGQAAAEgOADQgSADgFADQAQgEASAMQASALAHANQgQABgZgUQgDAGAKANQAMAPAAAJQgPADgRgbQgCAIAEAMQAFAQABAEQgJAAgHgOg");
	this.shape_14.setTransform(194.9,74.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],-167.2,-47.7,-167.2,-196.2).s().p("AgwBhIAAgkIAYAAQAJAAAggZQAhgYAEAAQAuAAArAZQAjAVAAAJQAAAfgbACQiYACgOAHIgNANQgEgDgQgWgAAfBSIgVAEIAAADQABACARAAIA1gEIAogFIAAgDQgCgCgiAAIg2AFgAA4A4QgYANAAADQAAACAAABQAAABAAAAQABAAAAAAQAAAAAAgBIAEABQAGgGAegKQAdgKAEgHQgCgCgIAAQgPAAgZAPgAAXA6QgUAKAAACQAAABAAABQAAABAAABQAAAAABAAQAAAAAAgBIAFAAQBBgmAAgEIgCgEQgWARgbAOgAiqghQgHgHAAgPQAEgTAAgJIAHgBQAGAAAKACIAAACIgFAGQAAACAAABQAAABAAAAQAAABABgBQAAAAAAAAQADADAEAAIAmgbQAsgbAmAAIATAAQgFAJAgATQAlAVAAAYQgJAeg5AAQgnAAgZgJQgagJgFAAQgcAAgJAcQgWgTgGgGgAhEg6QAAACAAABQAAABAAAAQAAAAAAAAQABAAAAgBIA2AAQAMAAABgFQgBgCgKAAQg5AAAAAEgAiBg9QABACAGAAQAVAAAhgNQAlgNALgQQhGAcgnAMg");
	this.shape_15.setTransform(396.2,196.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A3839").s().p("AYBRYQgFgEgDAAQABgGAGABQAGAAAAAFQgBAEgCAAIgCAAgA6GL2QAGgUAAAUQAAAKgBAAQgCAAgDgKgA3/LhIAEgIQACgEAAAFIABAHQAAAKgCAAQgCAAgDgKgAc2jcQgNgHAWAAIAgAAIA2gNQAdgKAEgYQAFABACAGIAAANQgOAGgGAOIg1ALQgVAEgTAAIgWgBgEAgXgDzQAmgRAHgOQAIAUghAOIg4AUQABgHAjgQgAZGkOQA0gSANgGQgQATgjALIhAARQAGgJAsgOgAVhkJQAYgOAvgWQgfAdgjAMgAmIrGIgCAAIADgCQADgBAEADIgCACIgCAAIAAAAIgEgCgA4kuoQgUgEgRgXQgPgCgRAEQgVAFgIAAQAHgPAkAAQAqAAAKgFQgMgTgsAEQgxAIgRAAQAOgUAogPQAzgUAKgGQgqgHgvASQgwASgSAgQgRgQAWglQAdgnAGgQQghACgdAgQghAiABAvIgggqQgUgagWgGQgBAUANAWQAHALjEAGIg4ABIgRAAQDzgmgGgdQA0AFAWAxQAegvASgTQAfghAqgJQgDAZgRAaIgbArQASgBA6gbQA6gWAqARQgTAOggANIg6AUQAKAHArAAQAoAAAJANQADAOgQAAQgTABgCAFQATAWApgCQALAAAIABQgDACgBAFIgBANQgOgGglgIgEghDgPeIAJAAIgLABIACgBgAvYwtQAFgIALAFQgDAEgFAAIgIgBg");
	this.shape_16.setTransform(204.3,164.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#009900","#14A110","#FFFFCC","#FADB63"],[0.149,0.38,0.565,1],161,-253.8,191.5,117.4).s().p("EAi9ATkIAAgEIAAAEgEgi8ATkMAAAglhIAZAAIAAAAIBLgBIABAAIgBAAIhAAAIgJAAIARAAIA4gBQDEgGgHgLQgNgWABgUQAWAGAUAaIAgAqQgBgvAhgiQAdggAigCQgHAQgdAnQgWAlARAQQASggAwgSQAwgSApAHQgKAGgzAUQgoAPgNAUQAQAAAxgIQAsgEAMATQgJAFgrAAQgkAAgGAPQAIAAAUgFQARgEAQACQARAXATAEQAmAIANAGIABgNQABgFADgCIACAAIAFAGIgMAOIAXgGQAMAHATAFIAAAAIAAABIABgBQAHgJAEgCQAGgEAJAJQAAgHAFgMQAFgKgDgMQANAMAKgPQALgTANACQADAOgSANQgPAKAKAKQAGABAZgJQASgHAFAJQABAIgKADQgLADAAAGQATgGAFAQQAHAWACACQALgWAMARQAUAYAFABIAAgRQABgJAFgBQAMAMAPABQAIAAATgEQAjgIATAaQABgFgBgeQgCgWAJgEQAJAHAGASQAJAXADAGQAjggANATQgdAEgFAQQAhABApATQgPAFgFAAQgGAAgOgFQAHAMAOAQQAGANgVANQATgDAngNQAggFAFAjQAXgIAhALIAAABIABgBQAeAKAbgNIAFATQADALAGADIgBg0QgBgfAQgFQAHAJALAjQAMAcAQgKQADADAFACIgBAIQAKgDAUgJQARgFAHARQABgCgBgTQgBgOAIABQACAbAkAJQApAKAJAWQAtgWAJgGQAHAKAIAIQAJAIAJAFQAGADAGACQASAFAcgGIApgHIgGALQgGAPAAAJIAAAJIABAAQAEAHAVAAQAdAAAOgGQARgHATgCQgIAJAAAFIAAAGQACAFAKAAQANAAA0gQQgLAKAAAPQAAAVAMAAQAmABAbACIgCAEIACAAQAJgEAHgGIANAAIAFgFIACgBIAAgBIAAgBQAngaASgOQACAFgDAPQgBALAOADIAFAAIADAAIgBgBQAGgDAPgJIABADQABAIgJAFIgBACIABABIBAgBIAAADIAAAmIAVABQAAAYACAKIAVABQAIAAArgXIABADQgIAvAAARIAKABQADgBAogkQABAbACAOIAZABQAMAAACgJIALAJIAHAEIAVAAIALgJIACACIgFATIgCgBIgBgBIAAAHIACABQgBAOACAMIAFAAQAIgGAEgNIACABIACgEIABAAIgDgBQAKgLAggEIgBAUIADABIABAZQAGAGAKAFQANgBANgRIAEAAIgDAZQABAUAaAAQAHAAAKgMIAOgUQAFADAHAXQAFAPAbgBQgEAHAAAIIACACIAEALIAHAEIAOAAIAJADIAPADIAIgHIgBgBQALgGAPgOQAVgUArAIIAAACIgRAQQgKAJAAAHIAAABIACACIAAACQABAGADADQAIgCAIgDIAEAAIAxgOIAHACIAAACIgJARQAAALACgEIAxABQAKAAAigIIgCADQgLAQgFADQgBAIADAEIAjABQAKAAATgGIABACQgIAHgWAMQgLAGABAGIAAAFIgPACIAIAKIBlAAIgfAHQgFAJgMAEIgGADIgDACIAIAAQgSAPAAAOQAAAIAFACQASAGBIAAQAAAMACADIBJAEQgkAIgJAHQgIAEABAMQAAAFACABIArAPQgHAKAEAHIA5ACIAAAHIAkABIAFAAQABABAAgHQAAgIgIgFQgFgDgHgCIgTgDIhcgRIAAgBQAigKAKgHQALgHgBgOQAAgFgDgEIhFgCIAXgCIAAgKQgEgEh2gDQAGgRANgMIAeAAIAZAAIAAABIAggBQAkgCAUAAQAWAAAEADQASAKC8AQQAbAFDOAWQDoAXBPAAIBHgBIAAAAIAGADQC0AQCVAEQBUAEBkADQAHABgCAAIBJAAIAAAMIAAYSIAAAEgAWjO4QAEACACgGQAAgFgHAAQgGgBgBAGIABAAQACAAAFAEgA7jJWQAGAUAAgUQAAgKgCAAQgBAAgDAKgA5ZI5IgDAIQAGAUAAgUIAAgHIgCgDIgBACgAbmDaQgCADAAAYIACAcQAIAbAXAAQAKAAACgEIAHgKQAXgWBAAKQBEAKAUgNQAVgOADgGIAAgRQAAgTgugZQgugZgeAAQghAAgkAhIgNALQgKAKgOgGQgFgCgEAAQgHAAgFAHgAZkBtIAKAfQAPAdAWAAQAGAAAKgOQAJgOALAAQAIAAAUAJQAWAIAtAAQAoAAAWgQQASgMgBgMQAAghgbgQQg2glgDAAQg6AAggAVIgSAOQgJAHgGAAQgWgGgHAAQgVAAAAApgABXpqIABABIABgCIgCAAgAwUtvIABgBIgBgCIAAADg");
	this.shape_17.setTransform(213.7,180.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#0033FF","#66CCFF","#BCFEFD","#0099FF"],[0.008,0.165,0.235,0.553],-101,20.9,-100.9,-34.8).s().p("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");
	this.shape_18.setTransform(318.7,123.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FAFFFF").s().p("AWnGoQARgMgOAOIgIAHQgBAAAGgJgAM6GhIAAgNIAVAAIAAANgA2ngFIABAAIAAAAgA2vhqIAAgEIACAIgADGkcQgvAFgogmQgZAPgngCQgmgCgTgSQAzgcA7gKQBIgLAhAdQAIgFAMgQQALgPAKgFQAVAEAhAQQATgqAzAFQANACAjAHIAPADQgDABAAADQAAAFALABQAOAAAFADIAQANIgBANQBGgpAZApQAOgFAXgUQAKgJAKgGQALAAAKgDQANAOAXAAQALAAAngHQAggGAPAFQAXAHAIAeQARACAfgHIA1gLQBEgMAcAjQAQgKAWgEQAbgEAPALQgSAGgSAWQgVAagKAGQgegDg6geQgFAEgFANQgFANgFADQhWAHgqgoQgFAEgFANQgFANgFADQghAHgWgNIghgbIgvAKQgcAHgbgEQgFgEgFgNQgFgMgFgEQgGAig1AKQg1ALgXgcQgEAEgKAVQgJARgLAFIgDACQgGgCgLgIIgFgEQgHgPgIAAQgiAbgjAPQgYAKgRAAQggAAgHgngARxmIQAWgeA0gIQAygHAfATQgyAPgRADQgnAIgtAAIgEAAg");
	this.shape_19.setTransform(255.7,80.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("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");
	this.shape_20.setTransform(243.2,114);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],84.3,36.7,84.3,-111.8).s().p("ALPCLIhAABIgBgBIABgCIARABIAxgCIgBADIgBADgAIzCOIACgCIAAABIAAABIgCAAgAH0CGIABAAIAEAAIACAAIABAAIAHABIACABIgRgCgAJ/CGIACAAIABAAIgDAAgAHWCDQABgJAegPIAIgEIgLAUIAAAAIAAABIAAAAIgBABIgEAJIgXgDgAF0BQIAFgCIABAAIACAAIgMAFIAEgDgADfBCIABAAIgBABIAAgBgAFfgkIgDgHQAMgHAAgFQAAgFgFgNQAYASAKAJIAFAFIAAABIgWA2QgJgbgMgXgAimAAIACgEIABAAQAEABgDADIgEAAgAF9hcQAKgGATAHIgEAQQgKgKgPgHgArQiNIAIAAIgDAGIgFgGg");
	this.shape_21.setTransform(127.7,85.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","#66CCFF"],[0,1],-1.6,71.6,-1.6,-76.9).s().p("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");
	this.shape_22.setTransform(213.7,50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BeachScene, new cjs.Rectangle(-11.5,-1.5,450.4,308.4), null);


(lib.animbuffyhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AD1hZQAAAEAAADQADAMAHAKQABABAAABQAaADA0ALQAAABAAABQAPAsgNA0QgWBUhZAeAEAg6QARAYAjAKAkEijQAJgEAKAAQAKABAHAGQAGAHAEAIQAEAJAEAIQABABABABQAAABAAAEQgCgBgBgCQgIgFgHgFQgIgFgJgDQgJgDgKABQgJACgIAEQgJAEgIAFQgIAGgHAGQADgGADgHQADgIAIgGQAGgGAIgFQAIgEAIgEgAk9gOQAHgFAFgGQAAAAAAgBQAJgIAKgFQABAAACgBQACgBADgBQAJgDAKgBQACgBABAAQAGgBAGgBQASgBALAKQgBgVgLgTAk9gOQAAgBAAgBQgFgNABgDQABgDgBgJQAAgJAGgRQAGgRAOgKQAQgMAQAHQAGADACAEAk9gOQACAIADAGQABAEAFALQABACABACQACAFADAGQABgBABgBQALgIANgFQAEgCAEgCQAMgFAMgFQACgBABAAQAKgDAKgEQAEgRgBgQAlJgIQAHgCAFgEAj7CKQgGAEgHACQgGACgFACQgCAAgBAAQgOAGgSABQgYADgFgSQgCgFAAgGQAAgLAFgMQAGgPgBgPQAAgCAAgB");
	this.shape.setTransform(56.1,63.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AkrCNQgQAYgdgPQgtAxgPhHQgKAMgTgaQgegrAIg5QACgMgNgQQg2hEBAguQAQACABAFQgIhdBSgYQAogMAVAZQAOg8AngSQAYgLAiAFQALACAIAEQAGAEAEAGQACgFADgFQAmhJBMgUQAZgGAUAQQALAJAJAAQAOAAAMgKQBPhGA2BQQBjgjA7BQQAHAKgEAHQA7gJAMAmQAMAigRAiQgHANAhABQBGAAgNAyQgIAhgYAXQA6AWg4AyQgGAGgIAAQA5AWg7AqQgSANgPAHQAXA8hLAIQgZADgOgKQgCgBgBgCQgBAAAAgBQAAACAAABAkpBwIAAAAQATADACguQA1AZAEhOQBEArAthJQAFgIALAJQA6ArAvgQQAOgFANgJQgCAlAqgLQgPAZATALQAIghAvAKQAZAFgBAeQAAAXgMAOQABAFAEADQAvAnAKgeQgBgKADgMAkFEeQACgDgBgEQAAgBAAgCQgDgrgTghQgQgcgBgfQAAgCAAgDQAAgLACgNQgIgBgMgKAEmF9QgDgbgRgNQgBgBgCgCQgBAAAAAAQgCgBgBgBQgWAfggAbQgqAkhAgNQgtgKgbgSQAOgLAHgLQAWgigkgUQgrgXgnAeQgcAXgIAeQgOA6gzgeQghgTgVgYAE7CDQgFAagwgCQgrgCgEgZACZBvQgOAQgdAEABWA+QgDAKACAO");
	this.shape_1.setTransform(49.2,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AgbAfQADAAADAAQASAAAOgHQAPgIACgQQACgTgLgL");
	this.shape_2.setTransform(28.3,61.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE9670").s().p("AA0DYQgugJgagTQAOgKAHgMQAWgigjgTQgtgYgnAfQgcAWgHAeQgOA7gzgeQghgUgVgYIANgFIgNAFIgLAEIgDAAQgOAGgSACQgYACgFgRQgCgGAAgGQAAgLAFgMQAGgPgBgPIAAgDQACgEAAgDIgBgDQgDgsgTggQgQgcgBgfIAAgEQAAgMACgMIAAAAQATACADguQA1AZADhNQBFAqAthKQAEgHAMAIQA6AsAvgQQAOgFAOgKQgDAmAqgKQgQAYATALQAIggAwAKQAYAFAAAdQgBAXgMAOQABAFAFAEQAuAmAKgeQAEAZAsACQAvACAFgaQAEAMAGAKIABACQAaADA0ALIAAACQAPAsgNA0QgWBUhZAeQgEgcgQgNIgEgCIgBgBIgDgCQgWAfggAcQgfAagqAAQgPAAgRgEgAjmgjIgMABIgDABIgTAFIgFABIgDACQgKAEgJAJIAAAAQgFAGgHAFIAFAOIAGAPIACAEIAFALIACgCQALgIANgFIAIgEIAYgKIADgBIAUgIQAEgQgBgQQgBgVgLgTQALATABAVQgJgJgOAAIgGABgAk7AFQAHgDAFgDIAAgBQgEgMAAgEIAAgBIAAgFIAAgHIAAgBQAAgJAGgQQAGgQAOgKIABgCQAJgGAJAAIABAAIABAAIAIABIACABIABAAQAGADACAEQgCgEgGgDIgBAAIgCgBIgIgBIgBAAIgBAAQgJAAgJAGIgBACQgOAKgGAQQgGAQAAAJIAAABIAAAHIAAAFIAAABQAAAEAEAMIAAABQgFADgHADgAFCgLQgjgKgRgYQARAYAjAKgAA2hFQAdgEAOgQQgOAQgdAEgAj2iVIgQAIQgIAEgGAGQgIAGgDAJQgDAGgDAGIAPgLQAIgGAJgEQAIgEAJgBQAKgCAJADQAJAEAIAFIAPAKIADACIAAgEIgCgDIgIgQQgEgJgGgGQgHgHgKAAQgKAAgJAEgAAdhxIAAgLQAAgHABgHQgBAHAAAHIAAALg");
	this.shape_3.setTransform(54.7,62.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AjzE2IgEgPQAHgFAEgGIABgBQAJgIAJgFIAEgBIAEgCIAUgEQALAKgCAVQgCAQgPAHQgPAIgSgBIgGABIgHgPgAmUDgQgKAMgTgaQgegrAIg5QACgMgNgRQg2hEBAgtQAQACABAFQgIhdBSgYQAogMAVAZQAOg8AngSQAYgLAiAFQALACAIAEQAGAEAEAGIAFgKQAmhJBMgUQAZgGAUAQQALAJAJAAQAOAAAMgKQBPhGA2BQQBjgjA7BQQAHAKgEAHQA7gJAMAmQAMAigRAiQgHANAhABQBGAAgNAyQgIAhgYAXQA6AVg4AyQgGAGgIAAQA5AXg7AqQgSANgPAHQAXA8hLAIQgZADgOgKIgDgDIgBgBIAAADIAAAHQgFAagwgCQgrgCgEgZIAAgFQAAgIACgJQgCAJAAAIIAAAFQgKAdgvgmQgEgDgBgFQAMgOAAgXQABgegZgFQgvgKgIAhQgTgMAPgYQgqALACgmQgNAKgOAFQgvAQg6gsQgLgJgFAIQgtBKhEgrQgEBOg1gZQgCAugTgDIAAAAQgIgBgMgKQAMAKAIABQgCAMAAAMIAAAFQgQAYgdgPQgSAUgNAAQgUAAgJgqgAkpDQIAAAAgAjnCzQADgIAHgGQAHgGAIgFIAQgIQAJgEAJAAQAKABAHAGQAGAHAEAIIAJARIABACIABAFIgEgDIgPgKQgHgFgKgDQgIgDgKABQgJACgJAEQgIAEgIAFIgQAMQAEgGADgHg");
	this.shape_4.setTransform(49.2,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animbuffyhead, new cjs.Rectangle(-1,-1,100.3,86.1), null);


(lib.animbuffyfLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AADABQgDAAgCgB");
	this.shape.setTransform(52.8,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("Ag8AFQAfgSAZgdQAdgiAkgfQAlggAfghQAhgiAngaQAngcAugSQAsgSAngQQAsgSApgXIAAAAAHJhyQgSARgSARQghAgggAfQggAeghAfQgiAfghAgQghAgggAhQgfAigjAeQgkAfgpAcQgnAcgtAOQgqAOgvACQgZACgXgFQgYgFgVgNQgogYgiggQgkgigbgpQgXgkgKgrQgLgsgLgtQgIgegGgdQABgBABgBQgBABgBAAQAAgBAAgBQACgCADgCQAlggAugPQAtgQAsgTQAkgQAmgNQAEgBADgCQAtgQArgNQAbgIAegHAgui9QABADAAADQABACABADQAJAfABAjQABAygSAqQgGANgEAMQgKAegCAgQgEAmALAj");
	this.shape_1.setTransform(57.8,51);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AAFgEQgCADgDACQAAACgCACQgBAAgBAA");
	this.shape_2.setTransform(53.6,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6B4E32").ss(0.1,1,1).p("ADNhSQACAAADgBADNhSQABACAAABQAAADAAADADLhRQAAABABABADGhQQACgBADAAADNhSQgBAAgBABAjMBTQAAAAAAgBQgCABgCABQABgCACgC");
	this.shape_3.setTransform(32.7,39.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CE00FF").s().p("AhKEhQAJgsgYgLIAAgPIgBhFQAqAbAhgcQAJgHAHgLQADgDABgJIAIAAIADggQAIhxgkhMIAAgGQg0AGALg3QAAgFgDgGQgDgJgJgGQAAgIgDgDQgPgaACgvQAPgiArgBIAAAGQBICiAlDIIAFAaIAAAMIABAOQABAQAAANQAEA9gTAkIgOAAQhlgCglA9QAAgJADgFg");
	this.shape_4.setTransform(123,42.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjWByQgEgYgDghIgCgSIADgRIAGglIAEgUQAGgSAIgSQAIgSAKgQIATgdQAJgOAMgPQALgNAOgNQANgNATgHQARgHASgDQATgCASAAQATAAASABQATACATAGQASAHARAJQARAIAOAOQANANALAPQALAPAKAQIAUAeQALARAFATIAIAhQAEATgCAQQgBAQABAOIgEAGIgEABIgDAAIgFABQgeAHgbAIQgrANgtAQIgHADQgmANgjAQQgsATgtAQQguAPglAgIgFAEIgEADQgCgYgNhUg");
	this.shape_5.setTransform(31.7,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#474441").s().p("AgngPIAaAAIANgBIAdAAIALAAQAAAJgCADQgNAVgRAAQgUAAgbggg");
	this.shape_6.setTransform(125.2,84.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CEC8C2").s().p("AgKAsQgUgagEgtIAAgMQAGgJAJgDQAFgDAJAAQgGA0AcATQADADABAJQAIAFAEAJQACAGAAAFIgOABIgZAAQAAgGgGgFg");
	this.shape_7.setTransform(121.7,77.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ADA59F").s().p("AgjAsQgDgJgJgGQBLAXgHhcIAAgOQA0AlgwA8QgDAGAAAFIgPAAIgKABIgdAAQAAgGgDgFg");
	this.shape_8.setTransform(128.5,77.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BEB6AF").s().p("AAIAJQgBgWgbAJIgPAAIgMAAIAAgPQAuAAAxAFIAAAJQgGAAgGACIgcAXIAAgLg");
	this.shape_9.setTransform(125.8,72.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BAB6B5").s().p("AgEAWQgEgpAAgrQAIAQAFAUQAEAVAAAbIgDAdIABALIgIAAIgDgog");
	this.shape_10.setTransform(111.9,55.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3E3935").s().p("AgSAOIgDgnQAJgjAhgBIAAAHIgOAAIABBRIAAAQIAAABIABANQgJAAgCAEIgDABQgJAAgEgwg");
	this.shape_11.setTransform(118.5,39.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A19D97").s().p("AgbBEQAYgGgJglIgBgMIAAgNIAAAAIAAgQIgBhSIAOgBIAAAOQAgBDgEBkIAAAMQgGAAgJADQgKADgHAAQgbAAAEggg");
	this.shape_12.setTransform(120.7,44);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221F19").s().p("AAIBvIAAgOIgBgMQAFhkgghCQAGgGADgJQACgFABgJQAjBLgHByIgEAgg");
	this.shape_13.setTransform(122.7,43.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#181512").s().p("Ag1C1IAAgdIAAgLIADgdQAAgcgFgVIA3gWQgEApAtgMQAJgDAFAAIABAOIgPAAIhQACIAAAOIAAAPIABBFIAAAPIgOAAIgBgPgAgphuIAAgPIgBgZIAAgBIACAAQAnAEgHgwIAGAAQgLA3AzgGIAAAGQAAAJgDAFQgCAJgGAGIAAgOIAAgGQgiAAgIAjIACAoIgQABQAAgVgMgig");
	this.shape_14.setTransform(117.9,46.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#44413D").s().p("AAIA4QAAgIgDgGQgUgogHg5IAMANQARAZAMAeQADAJAAAGIABAHIAAAHIAAAOIgIAAIgHAAg");
	this.shape_15.setTransform(111.4,25.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#847B7A").s().p("AgIAQIAAgBQAJgHAEgKIAEgNQAAAJgDAGQgBANgNADg");
	this.shape_16.setTransform(104.1,13.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#201C1A").s().p("AAIA3QAAgGgDgCQgLgSgdAAIAAgHIAAgFQANgDABgOQADgFAAgJIACgJQAAgKgBgIQAFgHAIgDQAFgDAGAAQAAAaARALQAGADAGAAQAAAJgDADQgDACgJAAIgNAAQAGAWACATIABAOg");
	this.shape_17.setTransform(106.9,13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#423938").s().p("AAEAkQgRgcgHgoQAGgJAJgDQAFgDAFAAQgCAuAPAZQADADAAAJQAAAGgDADQgDADgJAAQAAgGgCgGg");
	this.shape_18.setTransform(114.1,20.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#302C2A").s().p("AgwAUIAAgOQAdgTAcgSQAFgDAFAAIASALQAGADAGAAIAAAOQAAAGgDACQgDADgIAAIgMAAQgigQglAuIAAgPg");
	this.shape_19.setTransform(112.4,4.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ACA8A3").s().p("AgVAAQAPgFAKgMQADgDAAgGQAGAAADADQAGADgBAGQABAIgDAGQgNAbgJAAQgKAAgIgbg");
	this.shape_20.setTransform(132.9,82.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#261F1A").s().p("AA6BBQAwg9g0gkIAAgJQgygFgtAAIAAAPQgIAAgGADQgJADgFAJIAAALQgGAAgGADIgRALIAAgNIgBgMQAlg9BlACIAOAAQAJAIAGADQAGADAIgBIAPAAIAAAPIAAAOQAJAzgWASIAAAOQAAAGgDADQgMALgOAGQAAgFADgGg");
	this.shape_21.setTransform(125.2,74.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1F1C19").s().p("AgFA4IgChfIAAgdIANgBIABAdIABBgIAAANIgNABIAAgOg");
	this.shape_22.setTransform(134.1,61.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A2929").s().p("AB2F2QABhVgag2IgBgMIAAgOIgBg4IAeAAIAAA3IACCMIAAAOIABAMgAhplbIgRgLIAAgPQATACARAEIgHAXQgGAAgGgDg");
	this.shape_23.setTransform(126.7,36.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ABA9A6").s().p("AAABSIAAgNIAAhgIgBgdQAAgFgGgDQgDgGgFAAIAAgLIgBgPIAPAAIAKAAIABAOIAAA3IAAAPIABALQAAAIADAGQAJA9gXAXIAAgPg");
	this.shape_24.setTransform(134.9,60.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhAE7IARgMQAGgDAGAAQADAvAVAaQAGAFAAAGQAxA8AcgxQADgDgBgJIAPgBQAPA3Aag3QACgGAAgIQAAgGgGgDQgCgDgGAAIgBgOQAXgRgJg0IAAgPQAXgXgJg9QgDgGgBgJQAbA3gCBUIAGAAQAAAJgDAFQgLAjgOAjQAAAJgDADQg1AxgrAAQhEAAgpiAgAhJEeQgPgcgEgmIAPAAQAXAMgIArQgDAGAAAIQgFAAgDgDgACsEQIgCiLIgBg3QAIAaADAdQAJBDgMBTQABADgGAAIAAgOgABmDxQgGgDgJgIQATgkgEg8QAAgOgCgPIAAgPIAOAAQAGAAADAGQAGADAAAFIgPAAIABAeIABBgIAAAOIAAAAQgJAAgFgDgAhOCIIAAgOIAAgPIBQgBIAOAAQAAAIgDADQgIALgIAHQgRAOgTAAQgSAAgVgNgAhsA0QAAgGgDgIQgOg/g5gVIAAgBIgBg0QAbABAbAGIAEABIAAAGQAOgOAMgOIABgCQADgGgBgGIAPAAIAAABIAAAaIABAOQALAjAAAUIARgBQAFA3ALgJQADgDAJAAIAAAMQAJAlgXAGIg4AWQgEgVgKgPgACMBNIAAgNQgBhZgGhDQgajsiXhbIAHgXQCKAfAhCYQAQBMAIBZQAJBRACBbgAgOk1IAAgHQgrABgPAjQgFAAgGADQgJADgGAJQAHAoASAdQADAGgBAGQAJAAADgEQADgCAAgGQAJAGACAIQAEAGAAAFIgGAAQAHAxgogEIgBgBIAAgOIAAgHIAAgHQAAgGgEgJQgLgfgTgYIgLgOQgGAAgDgDQgGgCAAgJIAJAAIgBgOQgCgTgGgWIAOAAQAJAAADgDQADgDgBgJQgFAAgGgDQgSgLAAgaQAlgvAjARIAMAAQAIAAADgDQADgDAAgGQAaAdAPAoIABAMQBXCeAaDXIgQADQgljHhIiig");
	this.shape_25.setTransform(121.8,44.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444342").s().p("AgEAJIgFgaIAPgCQADAFAAAJIAAAOIABALIgOAAIAAgLg");
	this.shape_26.setTransform(132.3,51.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BE9670").s().p("Aj4FeQgYgFgVgNQgogYgiggQgkgigbgpQgXgkgKgrIgWhZQgIgegGgdIACgCIgCABIAAgCIAFgEQAlggAugPQAtgQAsgTQAkgQAmgNIAHgDQAtgQArgNQAbgIAegHIABABIAEABIABAAIAAAAIAAAAIgBAAIgEgBIgBgBIAFgBIABADIACAGIACAFQAJAfABAjQABAygSAqIgKAZQAfgSAZgdQAegiAjgfQAlggAfghQAhgiAngaQAngcAugSIBTgiQAsgSApgXIAAAAIAAAHQAdAAAMASQADACAAAGQAAAJAGACQADADAGAAQAGA6AVAoQADAGAAAIQABAGgDAGIgBACQgMAOgOAOIAAgGIgEgBQgbgGgbgBIABA0IgkAiIhBA/QggAeghAfIhDA/IhBBBQgfAigjAeQgkAfgoAcQgoAcgtAOQgqAOgvACIgNABQgSAAgRgEgAhsCMQgIgbAAgcIABgSQACggAKgeQgKAegCAgIgBASQAAAcAIAbg");
	this.shape_27.setTransform(62.1,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animbuffyfLeg, new cjs.Rectangle(9.4,-0.6,130.8,89.3), null);


(lib.animbuffybLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AjABQQgKgPgJgPQgZgpgPguQgEgLgIgGQgJgFgBgHQgGgvABgwQAAgbAFgaQADgQAEgQQACgGACgHQAQgvAgglQAegjArgVQAqgUAvgHQAEAAAFgBQArgFAtAJQAtAIAuAGQAhAEAgABQAMAcARAgQAgA9ANBBQAAACABACQAGAjgFAjQgEAWgGAVQgBAFgCAFQgMgBgMgCQgQgDgOgGQgpgSgsgVQgtgVgagmQAHArARAmQATApASAqQAUAsAPAtQAQAwgHAwQgIAwARAtQARAtAYAnQAZAoAYAoQAHAMAGANAi1BgQAMARANAQQAUAZARAa");
	this.shape.setTransform(29.7,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AjdjgQAbAtAkAnQADAEAEAEQA9A/BCA7QAxArApA7QAGAIAFAJAjojwQAGAIAFAIADhDqQAAgJAAgJQABgzAGg4QAAgFABgEADhDqQAAAEAAAD");
	this.shape_1.setTransform(33.7,75.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6B4E32").ss(0.1,1,1).p("ADtAgQkqhFg0AGQg0AGgcgDQgbgDgQAE");
	this.shape_2.setTransform(73.5,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC00FF").s().p("ADdDDQijgqirhbIgWgMIgJgHIgLgJQgMgHgLgJQgvgggPgjIAIgKQA+hLgYhAQAHAFACAGQAcAgAWgKIALAIIA0AoQgtAPABAqQAAALADAMQABAEAGAFIgFAHIAXAVQBQBJBNASIAEADQAagrAjApQAEADAGABQAJAEAJgDQAHAFAEgBQAcAFAhAdQARAfgZAhg");
	this.shape_3.setTransform(27.2,93.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AhBC5IgJgBIgJAAQg0ACgygGQgfgDgagwQAMACAMAAIADgKQAGgUAEgWQAFgjgGgjIgBgFQgNhAggg9QgRgfgMgcQAQgFAbADQAcAEA0gGQA0gGEqBGQBDAYAFAnQAEAnALAhQALAigcAmQgdAngqAOQgsAQgmALQgoANgxAEQgXACgZAAIglgBg");
	this.shape_4.setTransform(78,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ACA8A3").s().p("AABAWQgGgEgDgGQgagzAxAWQgEAOACAOQAAAEAFAEQgEAEgEAAIgEABQgDAAgCgCg");
	this.shape_5.setTransform(-9.9,81.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADA59F").s().p("AghgDQgDgGgEgDIAIgLIAHgIIARgWQAEADAFABQAIADAKgDQg8ArBIAxIAKAIQgLADgKAAQgoAAgNg5g");
	this.shape_6.setTransform(-4.3,80.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474441").s().p("AgYAVQgUgxBJgCIgPAUIgIAKIgQAWIgHAIQgHgFAAgEg");
	this.shape_7.setTransform(-5.8,75.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#423938").s().p("AgZgEQgEAAgGgFQgFgEAAgDQgBgEAGgHQAEAEAGABQAfAEAiASQADAJgDAJQgBAGgDAEQgigcgbgEg");
	this.shape_8.setTransform(47,104);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#302C2A").s().p("AgVAtQgEgEgBgEQAAgDAFgHIAGgJQAhgQgNg2IALAJIALAIQgCAigEAfQgBAFgEAFIgRAGQgGADgDAEIgLgIg");
	this.shape_9.setTransform(60.4,111.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#44413D").s().p("AgUAMQgIgDgFgEIgKgHIgLgIIAIgLQAHAFAGABQApAIAvAdIgOAAQgeAAgfgKg");
	this.shape_10.setTransform(45.2,98.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#201C1A").s().p("AACAgQgEADgEAEQgGgFgBgEQAAgEAFgHIAIgKQgbgKgTgPIAFgHQAEAEAEgBIADAAQANAAALgJIAAAGIAAgGQAGgFAEgGIAJAHQgGAMAJAJQADAGAHAFIAGAGQAHAGAHADIABAFQABAGgCAGQgCAGgDAEQgUgPgTAGg");
	this.shape_11.setTransform(56.8,102.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#847B7A").s().p("AgBAFQgJgIAGgMIAAAAIAAABQAAAKAFAKIAGAKQgGgFgCgGg");
	this.shape_12.setTransform(58.7,100.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC9966").s().p("ABQAWIAKAIQgFAGgFAEIAAgSgAhZgnIAEADIgEABIAAgEg");
	this.shape_13.setTransform(48.2,95.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3E3935").s().p("AAfAsIAIgLIhJg4IgKgJQAFgGgBgEQAAgOArAeIAgAWQAVAZgVAag");
	this.shape_14.setTransform(30.6,96.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444342").s().p("AAAAKIgKgJIgJgFIAIgLIAJAHIAWALIgHANQgHgBgGgFg");
	this.shape_15.setTransform(13.8,99.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A19D97").s().p("ABBA5QhDgPhJg+IgIgHQADgEACgJQATgpAbAcQgJAVAhAPIAIAHIAKAIIBLA5IgJALIgLgJg");
	this.shape_16.setTransform(26,94);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#221F19").s().p("AhDgeIgWgWIAFgHIAKAIIAJAIQBIA+BEAPQABAHAFAIQADAFAGAGQhNgShQhIg");
	this.shape_17.setTransform(25,96.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A2929").s().p("AE4B9QAEgEAFgDIATgHIALAJQgNANgNALgAjigqIhphRIgKgJIgJgHIADgEQA+AzA4ANIAJAGIALAJIAqAhIgSAVIgpggg");
	this.shape_18.setTransform(28.1,104.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ABA9A6").s().p("AAzA1IgpghIgLgIIgIgHQgHgFgGAAQgygdgEgfIALAIIAKAIIBIA3IAVARQAFAEAFgDQAGACADgFIAJAHIALAJIgIAKIgHAJIgLgIg");
	this.shape_19.setTransform(6.1,96);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1F1C19").s().p("AAaAdIhHg3IgKgIIAIgLIALAIIBHA4IAVARIgIAKIgWgRg");
	this.shape_20.setTransform(5.1,94.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BEB6AF").s().p("AggAhQADgEABgGIgBgiIAJAHQASAMAJgaIAIgKIAHgJIALAIQgbAiggAhg");
	this.shape_21.setTransform(3.2,82.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CEC8C2").s().p("AgSAHQgEABgGgFQgKADgIgDQgGgBgEgDIAIgKIAQgUQAEADAHgBQAfAAAkAZIAJAGQADAKgDAIQgBAGgFAGQgkgigfAJg");
	this.shape_22.setTransform(0.5,75.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#181512").s().p("ABECFQgGgGgDgFQgFgIgBgHIALAIIAFAEQAUgagVgbIgggWIAKgNQAPAMAhAMIALAIIATAQQgcAbApAYIgEAEQgigpgbArgAhrANIAJgLIAvg8IgLgIIgLgJIg0goIgLgJIAJgLIALAJIAWAQIAIAHIAUAUQAUAQATAJIgRA2QgbgcgTApQgDAIgDAEIgLgIg");
	this.shape_23.setTransform(27.3,89.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BAB6B5").s().p("AAQAYQgRgJgUgQIgUgTIgJgHIAFgHIAgAXQAgAVAgAZQgRgCgSgJg");
	this.shape_24.setTransform(22.8,80.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AB8DxQhCghhHgvQhBgphGg1IARgVIAKAIQBEA0A1AjQC/B5Ceg7IANATQg8AwhEAAQg1AAg5gdgAEGC4IgJgGQiqgcivhuIAHgNQCqBbCkAqIAFAEQAZghgRgfQADgEABgGQADgIgDgKQgigTgggEQgGgBgEgEQgFAHAAAEQAAAEAFADQgKADgIgDQgGgBgEgDIADgFQgogYAcgbIALAIIAKAJQAFADAIADQAnANAlgDQAEgEADgBQAGgDAGAFIgFAHQAUAPAaALIgIAKQgFAHABAEQAAAEAHAFQADgEAFgDQATgGAUAPQANA3giAQIgGAJQgFAHAAADQABAEAEAEIgMAAQggAAgggLgAjDAqQg3ghg4g5QgCgBADgFIALAJIBoBQIAqAgQgYgKgXgPgAiQAVIAIgKIgVgQIhIg5IgLgIQAFgGAFgDQAGgDAMgBQAPAjAvAhQALAIAMAHIAKAIIgIALQgDAEgGgBIgEABQgDAAgDgCgACFgNIgLgIQghgMgPgMIgJANQgsgdAAANQAAAEgFAHIgJgHQgggPAJgVIAQg2QASAJARABQAEAEAIACQANAHAMADQAqALAngXIAFAEIAiAbQgQATgUAQIgEADIgEgDIAAAEQADASADAPQADAGAEADIgIAKIgUgPgACqhjIgMgRIAMARgAk2hBIgEAEQgGgFgDgFQgTgdgRgfQgHgFgBgEQgMi1DBBKIgBATQgBAGgEAFQgkgZggAAQgHABgFgDQhKABAUAyQABAEAGAGIgIAKQgygVAaA0QADAFAGAFQAFAEAFgDQAEAAADgFIALAJQAAAbAsAYIALAJQAEAfAyAcQAGACAHAFQg5gNg9gzgAhVhIQgDgMAAgLQgBgpAtgPIAKAIIAMAJIgwA9IgIALQgHgGAAgEgAidjeQgDgFgGgFQADgFAEAAQAeAGAeAUIgIALQgGADgGAAQgRAAgVgZg");
	this.shape_25.setTransform(24.4,96.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#261F1A").s().p("AgNBWIgMgJQgsgYABgbIgLgIQgEgEgBgEQgCgOAEgOQAFADACAFQARBIA6gRIAGAFQAhgiAcghIgMgJQAGgGABgGQADgJgDgJIgJgHQAEgEABgGIABgUIALAIIAJAHQAXBAg9BJIgJALQgLACgGADQgFACgFAGIgIALIgKgIg");
	this.shape_26.setTransform(-0.2,81.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BE9670").s().p("ADlHuQgGgFgGADQgEABgDAEQgvgdgqgJQgGgBgHgFQgEgDgDgGQgEgQgCgRIAEgBIAEgDQAUgQAQgTIgigbQgog6gzgtQhBg6g8g/IgIgIQgRgagUgZIgZghIgLgQIgTgeQgZgpgPgvQgEgKgIgGQgJgGgBgHQgGgvABgwQAAgbAFgZQADgQAEgQIAEgNQAQgvAggmQAegiArgVQAqgUAvgHIAJgBQArgFAtAIQAtAJAuAGQAhAEAgAAQAMAcARAgQAgA9ANBBIABAFQAGAjgFAjQgEAWgGAUIgDAKQgMAAgMgCQgQgDgOgGIhVgoQgtgVgagmQAHAsARAmIAlBTQAUAsAPAuQAQAugHAwQgIAxARAsQARAuAYAnQAZAnAYApIANAYQgFA4gBAzIgBATQgLAJgNAAIgDAAIgBAAQgDAAgEgDg");
	this.shape_27.setTransform(29.7,50.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("ADPA8IAAAAIASAGIgSgGgAjghBIAAAAIAFACIgFgCg");
	this.shape_28.setTransform(94.3,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animbuffybLeg, new cjs.Rectangle(-12.4,-0.2,129.2,123.9), null);


(lib.buffyrunanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frontArm
	this.instance = new lib.staticbuffyfArm();
	this.instance.parent = this;
	this.instance.setTransform(157.3,83.1,1,1,0,0,0,98.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:97.4,regY:16.5,scaleX:1,scaleY:1,rotation:13,x:155.8,y:84.1},4).to({regY:16.4,scaleX:1,scaleY:1,rotation:-85,x:155.7,y:84},8).to({regX:98.9,regY:15.6,scaleX:1,scaleY:1,rotation:-12,x:157.3,y:83.2},4).wait(1));

	// head
	this.instance_1 = new lib.animbuffyhead();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140.8,66,1,1,0,0,0,82.7,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:82.6,scaleX:1,scaleY:1,rotation:-18,x:140.7},5).to({regX:82.7,scaleX:1,scaleY:1,rotation:23.8,x:140.8,y:66.1},6).to({scaleX:1,scaleY:1,rotation:3.8,y:66},5).wait(1));

	// frontLeg
	this.instance_2 = new lib.animbuffyfLeg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(193.5,145.3,0.995,0.995,113.5,0,0,29.7,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:29.8,rotation:26.8,y:145.4},4).to({regX:29.7,rotation:119.1,y:145.3},8).to({regX:29.8,scaleX:0.99,scaleY:0.99,rotation:111.3,y:145.4},4).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApNAiQDAgRDEggQCwgeCxATQB+AOB9AMQA2AFA2AFQAtAEAiAU");
	this.shape.setTransform(184.6,262.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Aneg4QAIAAAHgBQgMAAgEAAQABABAAAAgAlng5QgeAAgeAAQgBABAAgBQgBABgBgBQAAABgBgBQAAABgBgBQgBABAAgBQgBABgBgBQAAABgBgBQAAABgBgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBIgTAAAxBgbQC3gZC7gCQB4gCB5AAQCpATC+gDQCBgDCCgBQBQAABGARQgpAPg4ALQhRAPhwAHQizAKi0ABQiCABiCAAQHJAeIogGQF9gEE/AA");
	this.shape_1.setTransform(205.6,262.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(17));

	// body
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAfoCQAGAqgEAlQgKBSgxBDQgxBBgiBZAiooeQgKBEg8AzQg2AuhFAxQhEAwhFA0Ahwh6QgBABgBABAIPCbQgCgEgCgDQg9gFgxgCQgogBgpgCQgIAAgIAAQgxgCgwgMQgwgLgtgFQgwgFgtgIQgtgJgrgJQgCgPgEgQAIPCbQgFAZgDAaQgDAVgCAVQgGAugXAnQgXAoghAfQgHAHgIAGQgbAXgfARQgkAVgfARQgiATgpAQQgsASgvgHQgwgGgpgTQgggQgQguQgPgqgJguQgHgngGgmQgBgJgCgJQgHguAAgxQABgvAGguQAAgCgBgCQAAgBAAgBAIQCeQAAgBgBgCAgzEhQgBgYgBgYQgBgxADgxQABgfgEgdAmRn6QgDgUADgCAoPlWQgEgGA0gI");
	this.shape_2.setTransform(187.4,110.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("Ak5lVQARgBASgBQAugDAugDQAFAAAGAAQArgDAqAHQAvAIAtAKQAEABADABQAIABAHADQAhAKAZARQACACADACQAEADADACQAjAVAmAWQAoAYApAVQAqAWAmAeQAmAeAeAnQAcAlAZAnQAJAOAHATQAAACABADQAEAGAEAHQATAdAPAgQAWAsAEAxQAEAxgHAyQgDAYgFAXAh0A8QgCAFgBAFAiOBlQgDAEgDAEQgfAkgrAVQgrAVgwAFQgvAEgvgPQgXgIgSgNQgRgMgOgRQgUgZADgrQADgwgLgsQgBgDAAgDQgIgggLgpQgNgsAEAFQADAFgEgHAhFDvQgBgNgDgNQgMgrgaglQgNgTgSgNAh5BIQgKAPgLAOAmYlQQASABATgCQAdgCAdgCQgCACgBAD");
	this.shape_3.setTransform(188.1,91.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("ABtIeQgwgGgpgUQgfgQgRguQgPgqgJguIgNhNIgCgwQgBgwADgxQABgggEgdIgBgEIAAgCQArAKAtAIQAtAIAwAFQAtAFAwAMQAwAMAxABIAQABIBRADQAxACA9AEIAEAHQgFAZgDAaIgFArQgGAtgXAoQgXAoghAeIgPANQgbAXgfARIhDAnQgiATgpAQQggAMgiAAQgNAAgMgBgAmegLQgWgIgTgMQgRgMgOgRQgUgaADgrQADgvgLguIgBgGQBFgzBEgwQBFgyA2gtQA8g0AKhEQArgCAqAHQAvAHAuALIAGABIAPAEQAGAqgEAmQgKBRgxBDQgxBBgiBZIgDAKIgCADIgVAcIgGAIQgfAlgrAVQgrAVgwAEIgVAAQglAAgkgLg");
	this.shape_4.setTransform(188.8,110.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BE9670").s().p("AIKFfIgCgEIgEgHQg9gEgxgCIhRgDIgQgBQgxgBgwgMQgwgMgtgFQgwgFgtgIQgtgIgrgKIgGgeIgBAAQgBgNgDgNQgMgsgaglQgNgTgSgNIAVgcIACgCIAEgKQAhhZAxhBQAxhDAKhRQAEgmgGgqQAhAKAZASIAFAEIAIAFIBIArQAoAXApAVQAqAXAmAeQAmAeAeAnQAcAkAZAoQAJAOAHASIACAGIAIAMQASAeAPAfQAWAtAEAxQAEAxgHAxQgDAZgFAXIgBAAgAoMhsQgNgsAEAFQABABAAAAQAAABAAAAQAAgBAAAAQgBgBgBgCQgEgHA0gIQA0gIAPg9QAPg9gDgUQgEgUADgCQASABATgCIA6gFIAjgCIBcgFIALgBQgKBFg8AzQg2AthFAyQhEAwhFAzQgIgggLgogAk8lQIADgGIgDAGg");
	this.shape_5.setTransform(188.1,91.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(17));

	// backLeg
	this.instance_3 = new lib.animbuffybLeg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(199,141.8,0.998,0.998,-33.1,0,0,89.4,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({rotation:-106.1,y:141.7},8).to({regX:89.5,regY:26.3,scaleX:1,scaleY:1,rotation:-63.2,x:198.9},4).wait(1));

	// backArm
	this.instance_4 = new lib.staticbuffybArm();
	this.instance_4.parent = this;
	this.instance_4.setTransform(156.1,66.1,0.999,0.999,24,0,0,9.1,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:39.9,scaleX:1,scaleY:1,rotation:-0.8,y:66},4).to({regX:9,regY:40,scaleX:1,scaleY:1,rotation:159.4,x:156},8).to({regX:9.1,regY:39.9,scaleX:1,scaleY:1,rotation:36.3,x:156.1,y:66.1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58,0,257.6,278.8);


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
		
		 window.open ("inf_Scene5.html","_self");
		}
		
		
		function openPrev(){
		
		 window.open ("inf_Scene4.html","_self");
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


(lib.InfinitivesLesson2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 16
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEMBlQhsgXhdgZQiUgniOhVQgTgMgTgMQgDgDgDgC");
	this.shape.setTransform(6.8,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Aj/lUIgBiVIhsAAIAAMaIBvAAIgCnXQgngjgkgtIAAATAkilzIgDAHIgbA8IAAAaIgKAAIAAAgQgEgGgFgGAlQkWIAGAAIAAgJAj/imQBeBTB2AeQCRAkCFAFIAAibIAAjzIBggdIAiOIIhvAZIgTjTIAAkj");
	this.shape_1.setTransform(10,47.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAECGQh1gdhehTQgogigjgtIAAghIAJAAIAAgZIAcg8IAmAYQCOBWCUAnQBcAZBsAWIAACbQiFgFiSglg");
	this.shape_2.setTransform(5.3,28.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B88347").s().p("ADsEXIAAkjIAAibIAAjyIBegeIAiOIIhuAZgAlsEwIAAsZIBsAAIABCVIgmgYIADgHIgDAHIgGgEIAGAEIgbA9IAAAZIgJAAIAAgIIAAAIIgHAAIAHAAIAAAgIgKgMIAKAMIAAATIAAgTQAjAtAnAjIACHWgAkllsIAAAAg");
	this.shape_3.setTransform(10,47.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},191).to({state:[]},44).wait(77));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgisAXpMAAAgvRMBFZAAAMAAAAvRg");
	mask.setTransform(1.4,8.8);

	// Layer 15
	this.instance = new lib.RIbbon2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.5,42);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(235).to({_off:false},0).to({rotation:360,x:82.5,y:166},19).wait(58));

	// Layer 14
	this.instance_1 = new lib.Ribbon1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-99.5,-10.9);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(235).to({_off:false},0).to({rotation:-360,x:-263.1,y:-51.2},19).wait(58));

	// Layer 13
	this.instance_2 = new lib.BuffythroughtheFinishLine();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-33.7,22.2,0.906,0.906);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(235).to({_off:false},0).to({x:343.3,y:28.2},50).to({_off:true},1).wait(26));

	// Layer 12
	this.instance_3 = new lib.buffyrunanim();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-306.4,31.3,0.398,0.417,0,0,180,167.1,132.2);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).to({x:326.5,y:32.1},43).wait(17).to({regX:167.2,scaleX:0.42,skewY:0,x:302.9,y:36.1},0).to({x:-306.4,y:31.3},38).wait(9).to({skewY:180,x:-294.2,y:35.8},0).to({x:-49.6,y:40.3},43).to({_off:true},1).wait(77));

	// Layer 18
	this.instance_4 = new lib.InfinitiveLines();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.5,-173.7,0.357,0.357,0,0,0,200.7,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(312));

	// Layer 17
	this.instance_5 = new lib.INFINITIVES();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4.3,-158.8,1.195,1.195);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(312));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-179,219.7,37.1);


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
(lib.inf_Scene5d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4_repeat:317});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_329 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(329).call(this.frame_329).wait(1));

	// content
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(285.9,278.7,1,1,0,0,0,225,54.1);

	this.instance_1 = new lib.InfinitivesLesson2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(281.7,185.2,1,1,0,0,0,8.9,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.UI}]}).wait(330));

	// main
	this.instance_2 = new lib.BeachScene();
	this.instance_2.parent = this;
	this.instance_2.setTransform(274.7,196,1,1,0,0,0,214.3,152.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(330));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '70566B215FDA654BA2AB45AC71CDC68E',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmusic2.mp3", id:"bgmusic2"},
		{src:"sounds/bgmInf.mp3", id:"bgmInf"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SENameofIdea.mp3", id:"SENameofIdea"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
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
an.compositions['70566B215FDA654BA2AB45AC71CDC68E'] = {
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