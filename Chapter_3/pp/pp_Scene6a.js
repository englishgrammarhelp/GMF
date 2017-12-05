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


(lib.Tween67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(68.9,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcBrQgCgDAAgEQAAgEAGgFIAKgIQAYgZAAg3QAAgUgGgWQgGgZgMgOIgJgKQgIgHABgEQAAgEACgDQAEgCAEAAQACAAAEACQAUAPANAiQAMAeABAbQgBBSgsAZQgEADgEgBQgEABgDgDg");
	this.shape_1.setTransform(62.4,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AANAhQgDgDAAgEIABgqQAAgJABgCQACgHAHAAQAEAAADACQADAEAAADIgBAFIAAAFIgBApQAAAKgKAAQgEAAgCgDgAgeARIABgVIAAgVQAAgEADgDQACgCAEgBQAFABACACQADADAAAEIAAAUIgBAUIABAFIAAAGQAAADgCAEQgDACgEAAQgLAAAAgSg");
	this.shape_2.setTransform(53,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAJAFQAJAEALAAQAIAAAJgDQANgDAEgGQAEgGAEAAQAEAAADADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_3.setTransform(42.9,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAxIgQgrIgUgwIgBgGQAAgDAEgEQADgDAEAAQAHAAADAHIAbBJQAHgRAMgfIAJgYQAEgIAGAAQAEABAEADQADADAAAEQAAAFgSApIgWAyQAAAKgJAAQgHAAgEgKg");
	this.shape_4.setTransform(31.4,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_5.setTransform(20.4,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_6.setTransform(8.5,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgmBJQgPgPABgYQAAgcAPgQQAPgSAXAAQAMAAAHAEIAKAHQACgtACgQQABgJAJAAQAKAAAAAKQAAAPgFAzIgBAeQAAAkADATIAAACQAAAEgDADQgCADgFAAQgGAAgDgKQgIAGgIADQgJADgHAAQgXAAgPgPgAgYACQgKALABAVQgBANAKAKQAKAKAOAAQAHAAAGgDQAFgBAIgHIADgEIAAgSIAAgNIAAgMQgEgJgHgEQgHgEgJAAQgRAAgJAKg");
	this.shape_7.setTransform(-11,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLBOIABgnIABgnIAAgmIABgnQAAgLAJAAQAMAAAAALIgBAnIgBAmIgCA1IgBAZQgBALgIAAQgKAAAAgLg");
	this.shape_8.setTransform(-20.4,16.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAYA0QgNAGgQABQgPAAgJgHQgKgGgCgOQgFgcAAgWQAAgPAEgSQABgKAJAAQAFAAADAEQADADAAAEIgCAQIgBAQIABAeQABANACAIIAHACIAIABQANABAPgFIAAgWIAAgUQAAgXACgRQACgKAJAAQAEAAADADQAEADAAAFIgCAoIAAAXIAAAWIAAAIIABAHQAAAEgEAEQgDACgEABQgJAAgCgKg");
	this.shape_9.setTransform(-29.1,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfAuQgPgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMAQQgNAUgXAAQgRAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_10.setTransform(-40.8,20);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmQAEAaADAQIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_11.setTransform(-53.9,20.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AANAhQgDgDAAgEIABgqQAAgJABgCQACgHAHAAQAEAAADACQADAEAAADIgBAFIAAAFIgBApQAAAKgKAAQgEAAgCgDgAgeARIABgVIAAgVQAAgEADgDQACgCAEgBQAFABACACQADADAAAEIAAAUIgBAUIABAFIAAAGQAAADgCAEQgDACgEAAQgLAAAAgSg");
	this.shape_12.setTransform(-66.5,11.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgLIAAgNIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_13.setTransform(-82.5,18.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgWANgTQAOgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgGAMAAAOQgBAQAJAJQAHAHAJAAQALAAAIgIQAJgJABgQQABgogYAAQgPAAgJAPg");
	this.shape_14.setTransform(-93.6,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAaA1IgDgYIgBgXIAAgKIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgEADgEQADgCAFgBQAJABABAOIABAMQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDADgEAAQgKAAgBgKg");
	this.shape_15.setTransform(-104.6,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAOBrQgsgZAAhSQgBgbAMgeQANgiAVgPQAEgCADAAQADAAAEACQADADAAAEQAAAEgIAHIgJAKQgMAOgGAZQgGAWAAAUQAAA3AYAZIAKAIQAGAFAAAEQAAAEgCADQgDADgEgBQgDABgFgDg");
	this.shape_16.setTransform(-114.4,19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AANAhQgDgDAAgEIABgqQAAgJABgDQACgGAHAAQAEAAADADQADACAAAEIgBAFIAAAFIgBAoQAAALgKgBQgEAAgCgCgAgeAQIABgUIAAgVQAAgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAAVIgBATIABAGIAAAEQAAAEgCAEQgDACgEAAQgLAAAAgTg");
	this.shape_17.setTransform(113.5,-20.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgmBJQgOgPAAgYQAAgdAPgPQAPgSAXAAQAMAAAIAEIAKAHQABgtACgQQABgJAJAAQAKAAAAAKQgBAPgEAzIgBAeQAAAkADATIAAACQAAAEgDADQgCADgFAAQgGAAgDgJQgIAFgIADQgJADgIAAQgWAAgPgPgAgYABQgKAMABAVQgBAOALAJQAJALANAAQAJgBAFgDQAEgBAIgIIAEgDIAAgSIAAgNIAAgNQgFgIgGgDQgHgFgJAAQgSAAgIAJg");
	this.shape_18.setTransform(102.7,-15.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgSAYgBQAJAAAMAFQAOAGAAAIQAAADgCADIgBAOIgBAWQAAAOACAIIAGASIADAGIABABQAAAFgDADQgDADgEAAQgCAAgGgFgAgRgaQgNANAAARQAAASAHAIQAGAJAMAAQAKAAAHgDIALgJQgEgbAAgOIABgKIACgLIgHgDIgFgCQgPAAgMAOg");
	this.shape_19.setTransform(90.7,-12.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_20.setTransform(78.9,-15.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AANAhQgDgDAAgEIABgqQAAgJABgDQACgGAHAAQAEAAADADQADACAAAEIgBAFIAAAFIgBAoQAAALgKgBQgEAAgCgCgAgeAQIABgUIAAgVQAAgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAAVIgBATIABAGIAAAEQAAAEgCAEQgDACgEAAQgLAAAAgTg");
	this.shape_21.setTransform(67.3,-20.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAJAFQAJAEALAAQAIAAAJgDQANgDAEgGQAEgGADAAQAEAAAEADQACADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_22.setTransform(50.7,-12.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAFQACADAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape_23.setTransform(38.8,-13.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAZAzQgOAIgRAAQgOgBgJgGQgKgHgCgNQgEgdgBgVQABgPADgSQABgKAJABQAFAAADADQADADAAAEIgBAQIgCAQIABAeQABANADAHIAHADIAGABQANABARgFIAAgWIAAgUQAAgXACgRQAAgKAKAAQAFAAACADQADADAAAFIgCAoIAAAXIABAWIAAAIIAAAHQAAAFgCADQgDACgFAAQgJABgBgLg");
	this.shape_24.setTransform(28.1,-12.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AANAhQgDgDAAgEIABgqQAAgJABgDQACgGAHAAQAEAAADADQADACAAAEIgBAFIAAAFIgBAoQAAALgKgBQgEAAgCgCgAgeAQIABgUIAAgVQAAgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAAVIgBATIABAGIAAAEQAAAEgCAEQgDACgEAAQgLAAAAgTg");
	this.shape_25.setTransform(10.7,-20.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgNAXQgCgDAAgDQAAgDAHgPQAFgNADgGQACgFAFAAQADAAADADQADADAAAEQAAACgPAhQgCAGgFAAQgEAAgDgDg");
	this.shape_26.setTransform(4,-6.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgRBcQgDgDAAgEIAAgDQACgNAAgRIAAgdIAAgfIgRABQgKAAgBgKQABgLASAAIAKAAIADgRQACgYAJgLQALgNAXAAQAPAAABAKQAAAKgPAAQgaAAgCAkIgBAHIAYgBQARAAAAALQAAAHgJACIgIABIgZABIAAAYIAAATIAAAUQAAAVgCALQgBAJgIAAQgFAAgDgDg");
	this.shape_27.setTransform(-5.5,-15.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQgBAFgDADQgDADgDAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAEgEAEAAQAFAAAEAEQAEAEgBAFQABAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_28.setTransform(-13.7,-15.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AANAhQgDgDAAgEIABgqQAAgJABgDQACgGAHAAQAEAAADADQADACAAAEIgBAFIAAAFIgBAoQAAALgKgBQgEAAgCgCgAgeAQIABgUIAAgVQAAgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAAVIgBATIABAGIAAAEQAAAEgCAEQgDACgEAAQgLAAAAgTg");
	this.shape_29.setTransform(-22.1,-20.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAHQgKAIgGANIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_30.setTransform(-37.9,-12.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAALgDQAMgDAEgGQADgGAFAAQADAAADADQAEADAAAEQgBAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_31.setTransform(-49.3,-12.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_32.setTransform(-60.7,-14.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgQBcQgEgDAAgEIABgDQACgNAAgRIAAgdIAAgfIgRABQgLAAAAgKQgBgLAUAAIAKAAIABgRQADgYAJgLQAKgNAYAAQAPAAAAAKQAAAKgOAAQgZAAgEAkIAAAHIAYgBQARAAAAALQAAAHgIACIgJABIgZABIgBAYIABATIAAAUQAAAVgCALQgBAJgIAAQgEAAgDgDg");
	this.shape_33.setTransform(-71.7,-15.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAmA4IgIgiIgcAGIgbAFIgTAqQgEAFgFABQgEgBgEgDQgEgDAAgFQABgEAQgjQgCgCAAgEQAAgJAKgCQAMgWAUgeQAYgpAGAAQAIAAADAMIAHAkIAQBKIAHARQACAIAAADQAAAFgCADQgEADgEAAQgKAAgHgZgAgNAIQANgEAagEIgJgpg");
	this.shape_34.setTransform(-85.3,-15.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape_35.setTransform(-102.4,-7.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgjBSIgEAAQgHAAgCgHQgBgEgBgJQABgZAOgQQAGgHAbgRQAOgLAGgGQAIgKABgOQgBgHgIgFQgIgFgHAAQgKAAgIAGIgQAMQgFADgCAAQgMAAAAgJQABgFAEgDQAMgMAKgFQANgIANAAQARAAANAKQAPAKAAARQAAALgCAJQgEAJgGAIQgIAJgTAMQgTAMgGAHQgNAMAAASIAXgCIAfgBQAJAAAGACQALAEgBAHQAAAEgCADQgEADgEAAIgHgBIgIgCIgQABIgPAAIgNABIgNACIgDgBg");
	this.shape_36.setTransform(-111.9,-15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.7,-33.6,241.5,67.3);


(lib.Tween66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.753)").s().p("EgjnAJiIAAzDMBHPAAAIAATDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.9,-61,456,122);


(lib.Tween64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.753)").s().p("EgjnAJiIAAzDMBHPAAAIAATDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.9,-61,456,122);


(lib.Tween59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("ADvBSQgHgTgFgYQgKgpgqgIQgNgDgNgCQgxgJgwgBQhFgBg1gNQg6gPgjgmQgbgfgNgtQgCgGgBgFQgHAFgBAJQgKA3gLA+QgPBNBRgGQgHgOgDgSAjOizQACgDADgCAhuBAQgLgMgDgUQgCgNgEgKAg2BWQADAEAEAEQAlAoA6gXQATATAtgIQAFAPAHANQAFALAGAJQAFAGAGAGQACACACABAhuBAQARAVAnABQgMgTgDgcAgpBWQgHAAgGAAAipAXQARAjAqAGAAwBvQgMgOgBgZABwB6QgDgNgDgO");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ACSCuIgLgMQgGgJgFgKQgHgOgFgPQgDgNgDgNQADANADANQgtAIgTgTQgMgNgBgaQABAaAMANQg6AYglgoIgHgJIAGAAIAHAAIgHAAIgGAAQgMgTgDgcQADAcAMATQgngBgRgVQgLgMgDgUQgCgNgEgKQAEAKACANQADAUALAMQgqgGgRgjQgHgOgDgSQADASAHAOQhRAGAPhNIAVh1IALgDQANAtAbAfQAjAmA6APQA1ANBFABQAwABAxAJIAaAFQAqAIAKApQAFAYAHATQgmARgOAmQgLAegaASIgEgDgABwByIAAAAgAg2BOIAAAAg");
	this.shape_1.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-19.5,49.7,39.1);


(lib.Tween56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AgkgvQAZAqAeAkQAJALAJAG");
	this.shape.setTransform(-21.1,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("ADHhSQAPgKAQgKQApgbAUhAQAPgwgpgKQgfAUgKA5QgJAvgeATQgvAgg8AJQg9AKg8ALQg+AKgwAVQg3AYgcA0QgNAbgCAfQgBAUADAWAD9j8QAHAAAFABQAEgDAFgCABOA4QAcgFAXgVQAggdAUgmQAFgGADgHQAHgOADgSQgdASgcATABOA4QgbAEgfgLABOA4QgPAlggAaQgMALgPAIQguAcgwAQQAKgMAKgJAkiArQAqguAygeQAogXAvgMAkmgtQAXgPAZgIAiuEBQAegaAigcQAEgCAEgEAheC7QAAgEAEgB");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F5F5F").s().p("AjUDuQgfglgZgrIgCAAQgEgVACgUQACggANgaQAbg0A4gYQAvgVA/gLIB5gUQA8gKAvgfQAegUAJguQAKg6AfgTQApAJgPAwQgUBBgpAaIgfAUIg5AmIA5gmQgDASgHAOIgIAOQgUAmggAcQgYAVgbAFIgCABIAAAAIAAAAIgCAAIgMABIAAAAIAAAAQgTgBgVgHIAAAAIgBAAIABAAIAAAAQAVAHATABIAAAAIAAAAIAMgBIACAAIAAAAIAAAAIACgBQgPAlggAbQgLAKgPAJQgvAcgwAPQAKgLAKgJQgKAJgKALIAAAAQgEACAAAEIgIAJIgIAHIhAA1QgIgFgJgLgACyhVIAAAAg");
	this.shape_2.setTransform(2.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-26.7,61,53.4);


(lib.Tween53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AjbCAQADgMACgHQABgDACgDQAPgtAWgrQAPgdAagOQA1gcA7gRQA8gRA6gNQBAgPAjgoQAIgIAQABQgHAygsAWQgBATgJALQgZAfgiAZABVACQAHgEAHgFQAJAjgXALQgnASgrAOQgDAZgPAXQgZAlg4AIQgKACgMAAACphdQgFACgFACQgUAIgRAFAADBHQgPAFgRAF");
	this.shape.setTransform(0,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AidCPQgbgQgjgDIAFgTIADgGQAPgtAWgrQAPgdAagOQA1gcA7gRQA8gRA6gNQBAgPAjgoQAIgIAQABQgHAygsAWIgKAEQgUAIgRAGQARgGAUgIIAKgEQgBATgJALQgZAfgiAZIgBAAIgOAKIAOgKQAJAjgXALQgnASgrAOIggAKIAggKQgDAZgPAYQgZAkg4AIIgWACIgGAIQgOgPgTgMgACphhIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-17.9,46,35.2);


(lib.Tween50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AEpiXQgGAAgGAAQgfADgaAJQgaAJgUAPQgSANgSANQgXARgYARAh2CAQgCAAgCAAAijCYQgVABgTgTQgmgmg3gcQA1gJBCgBQApgBArgMQAzgPAtgZQAvgYAogcABcBTQgGAAgFAAAAXB2QgYAAgagH");
	this.shape.setTransform(-3.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AjLCYQgTgBgSgSQglglg3gdQA0gIBDgBQApgBArgNQAzgOAugZQAtgZApgcIAJgHIAvgiIAkgaQAUgPAZgJQAagJAfgDIAIAAQAhgBAUAOQAKAoAPAjQgGAbgqAGQgNADgTAAQgQAggzAEIgdAbIgTAPIgCADIgGAEQghAagvgBIgJAAIgCAAIAAAAIABADQANAQgOAGQgcAKgdAAQgXAAgZgHIgDgBIAAABIAAAAIABAFQgdAJgmACIgYABIADgGQgFADgDADIgCACQgDAEgCAHQgQALgQAAIgBAAg");
	this.shape_1.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-16.2,68.2,32.4);


(lib.Tween47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("ADPhAQgEABgEAAQgQACgJAFAkNBtQAdghAjgjQAHgHAHgHQAjgdAngVQAsgXBBgHQA+gGA7gUQA5gSAxgRQAlgNAOghQADA1gnAgQgKAIgRADQgYAphAAKQgBAAgBABQgfAFgigCAB3gNQgWA0g3AHQgKABgKABQgWAOgVAQQgVARgUAUQgcAegrAOQgDABgDABAAWAwQgUAEgQAE");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AjfB4QgYgLgWAAQAdghAjgjIAOgOQAjgdAngVQAsgXBBgHQA+gGA7gUIBqgjQAlgNAOghQADA1gnAgQgKAIgRADIgIABQgQACgJAFQAJgFAQgCIAIgBQgYAphAAKIgCABQgVADgWAAIgBAAIAAAAIgVAAIAVAAIAAAAIABAAQAWAAAVgDIACgBQgWA0g3AHIgUACQgUAEgQAEQAQgEAUgEQgWAOgVAQQgVARgUAUQgcAegrAOIgGACQgmgVgugUgAAWAwIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-17.1,56.1,34.3);


(lib.Tween44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AApggIhRAnIAAAa");
	this.shape.setTransform(34.1,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("AkdAqQABABABACQAEASAFASQgggVgkgiQgNgNgHgLQgGgJgFgKQgPgkAQgcQACgDACgEQAEgDAEgCQAGgDAGgDQAFAsAhAVQAGAFAHADQAJAFALAEQAkANAsgIQAQgCARgDQAtgIAtgKQA4gNA5gQQAogKAqgDQAKAAALgBQAIAAAJAAQBAACAtAgQAuAfAoAdAi0BLQgHgCgIgCAi2AzQAAAKABAKQAAACABACAgCBHQgEADgFADQgIACgIAAQgYABgfgLQgEAHgFAHQgnAEgygMQAEAggggWQghgXgpgTQgBAAgCgBQgIgEgIgDAgCBHQgJgEgJgGAhGAzQgEAHgIALQgGgCgHgCAkiAZQAAAJAFAIAEsBXQglAVg1gOQgXgGgVgJQgNgFgLgGQgMgGgMgIQgNATgUAGQgrALgsgTAFkAQQAJAGAQAAAB2A2QADgEACgEAAOAuQgGAPgKAK");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ADSBeQgXgGgVgJIgYgLIgYgOIAFgIIgFAIQgNATgUAGQgrALgsgTQAKgKAGgPQgGAPgKAKIgSgKIASAKIgJAGIgQACQgYABgfgLQAIgLAEgHQgEAHgIALIgNgEIANAEIgJAOQgnAEgygMQAEAggggWQghgXgpgTIgDgBIACADQAEASAFASQgggVgkgiQgNgNgHgLQgGgJgFgKQgPgkAQgcIAEgHIAIgFIAMgGQAEAsAiAVIANAIQAJAFALAEQAkANAsgIIAhgFQAtgIAtgKQA4gNA5gQQAogKAqgDIAVgBIARAAQBAACAtAgIBWA8IACAAQAJAGAQAAIhRAnIAAAaQgWANgcAAQgSAAgWgGgAi0BLIgBgEIgBgNIAAgHIAAAHIABANIABAEIgPgEIAPAEIAAAAgAkdAqQgFgIAAgJQAAAJAFAIIgQgHIAQAHIAAAAgAi0BLIAAAAgAhSBFIAAAAgAhSBFIAAAAgAkdAqIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,-10.9,78.3,21.9);


(lib.Tween40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AjAFWQApgTApgdQArgfAsgdQAggYAZgRQgLgRgMgdQgWg2gKg2QgLg7gGg8QgEgkgLgcQgJgWgMgRQgggtgJg1QAAgDAAgCQgwgdgogsQgrgwBGAVQAkALAcAUQATAOARAKQAcgjAUgzQALgeAHgTQAQgtAjACQgEBLgZAsQgJAQABANQAIgLAJgMIAAAAQARgaARgeQATgkAagRQANgKgBAeQgCAvgUAfQgHAKgJAJQgQAPgGAWQAVgZAWgbIAAAAQALgNALgOQArg1AkAhQgdA0glAjQAAABgBAAQAAABgBAAQAAAAAAABQgOANgMAMQAOgMAQgJQABAAAAAAQABAAAAgBQASgJAVgFQBAgPgXAgQgKAMgTAKQgqAVgwAdQgZAPgLAYQAQApAIAtQAAAAABABQAKA+ATA3QAUA5AJA9QACAQAFARQAIAJAEALQAHAWAEAYQACAPAAAQQABA+gqAoQgpAmg1AgQgvAegpAkQgeAagnAZAA0jKQABgQAGgNQgDgJgEgJABmlDQgJAJgHAJ");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhxHhQgBgRgjAHIgcAHQAHgVgCgmQgCgzgqgIIANgIIAEgDIAHgHQApgTApgdIBXg8IA5gpQgLgRgMgdQgWg2gKg2QgLg7gGg8QgEgkgLgcQgJgWgMgRQgggtgJg1IAAgFQgwgdgogsQgrgwBGAVQAkALAcAUQATAOARAKQAcgjAUgzIASgxQAQgtAjACQgEBLgZAsQgJAQABANIARgXIAAAAQARgaARgeQATgkAagRQANgKgBAeQgCAvgUAfQgHAKgJAJQgQAPgGAWIArg0IAAAAIAWgbQArg1AkAhQgdA0glAjIgBABIgBABIAAABIgaAZQAOgMAQgJIABAAIABgBQASgJAVgFQBAgPgXAgQgKAMgTAKQgqAVgwAdQgZAPgLAYQAQApAIAtIABABQAKA+ATA3QAUA5AJA9QACAQAFARQAIAfAPAjQACAPAAAQQABA+gqAoQgpAmg1AgQgvAegpAkQgeAagnAZQAFgQAAgNgAA0jKQABgQAGgNIgHgSIAHASQgGANgBAQgABWkxIAQgSIgQASg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-52,46.1,104);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("Ai+hqQAmAjAuAfQACACABABQAyAhAoAmQAkAlAqApQAHAIAGAIQAjgfAegoQAngzATgyQAVg7AqgiQAOgLAMgHAGogPQgFAGgGAJQgdApgrAiQgsAigVAnQggA4gtAcQg4AjgsAXQg4Aag1gnQgigZgcgiQgogxgkgsQgdgkgWguQgEgHgDgIQgWgxghggQg9APgugXQgvgWAighQhIgOA3g2QAHgHAHgHQAJgIAJgJAkCj1QA4gSAbAuQAaAqgbAlQgMAQgCAQQgDgDgEgEAl4j7QAbg+A0ARQAMAEAHASQAHASANALQAKAIAOADAkFg1QgDgDgEgEAi7hQQgFgNACgNAl4j7QALgBAMACAmAjGQgKgTgdgGQALgcAkAA");
	this.shape.setTransform(-0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgLEVQgigZgcgiIhMhdQgdgkgWguIgHgPQgWgxghggIgHgHIAHAHQg9APgugXQgvgWAighQhIgOA3g2IAOgOQgKgTgdgGQALgcAkAAQAbg+A0ARQAMAEAHASQAHASANALQA4gSAbAuQAaAqgbAlQgMAQgCAQQAmAjAuAfIADADQAxAhApAmIBOBOIANAQQAjgfAegoQAngzATgyQAVg7AqgiQAOgLAMgHQAKAdA9gGQAhgDAgAFQgSAzAPA9IABADIgLAPQgdApgsAiQgrAigWAnQgfA4gtAcQg4AjgsAXQgXAKgWAAQghAAgfgXgAi8hQQgEgJAAgJIABgIIgHgHIAHAHIgBAIQAAAJAEAJgAmBjGIASgRIgSARgAjrjqQgOgDgKgIQAKAIAOADgAlij6IgMgBIgGAAIgBAAIAAAAIgCAAIgCAAIACAAIACAAIAAAAIABAAIAGAAIAMABgAkGg1IAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-31,86.8,62.1);


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


(lib.fencecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EA53gC1MAAAgh1MhztAAAMAAAAh0IAAGgIAABXIAAfqMBztAAAIAA/+IAAiPg");
	this.shape.setTransform(204.4,-150.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("ArCxDQAAAIAAAHQAABfgQBLQgIAmgLAhQgCAHgDAHAp2w0QACAFABAEQACgEABgEAqounQgBACgBABQgCADgBADAqouiQAAgDAAgCAqFr5QAAgCgBgCQgUhQgOhVQA0BIA8AsQAaATAeAOQgBADAAADAqFr5QABABAAABQADAMADALQgCgCgDgCQgBgKgBgLgAqCrMIAAgBQAAgJgBgKIAAAAQAAgCAAgCQgEgDgDgDAqBqrQAAgQgBgRIAAAAArlsnQABATgBASQgvAegXgQQAGgJAFgHQgHAGgHAHQgEAEgEADQgPAOgQAPQgSAQgUAJQAEgdAGgcQAKgDAKgCArlsnQgUgFgVATQgJAJgJAMArlrXQgHABgHAAArnqyQABgSABgTQA3gCAsANAruqzQAEABADAAArlsCQAAAWAAAVAqQnKQACg/AIg8QAGgxgBg1IAAAAQg4ABgugIQAAAZgCAYQgFBSgDBTQAzAMAuAGgArlsnQAOAEANAPQgOALgNAHAuDmIQAIgrANgpQAVhAAfg3QAthOgphPAn9sbQgBAHgCAHQAlASArALQANADAMABQgBgNgBgNQgzgIgxgNgApEqBIAAAAApEqBQgDgBgCgBIgIgEAp+rgQARA0AbAkQABABAAAAQADAFAEAFQAQAZAJAgQAJAfABAmQAAABAAAAQAAAOAAAPQgBAVgCAUQgDAAgDgBArltDQAAAOAAAOAp+rgQA5ApBRAKQBkAMBKgUQBBgSA8gkQAEgBADgCQADgCACgCQABAAABgBQAtALAtADQAEAAADAAApzwrQAjBPBHAiQAbBJgPBWAwHwbQADADADADQABABAAAAQAtAtArA3QAHAIAGAIAuosKQAAgnAAgnQAAgsAAgsAtYuoQAHgHAHgHQgBgKgDgLAtKu2QAEAtgQAvQgLAhgIAjQAHgDAGgCAzDvgQAEgIAFgFA0uuHQA5gqAxgsQABgBAAgCQABgCABgBQADgFAEgFQAVAzAiAjIAAAAIAAAAQACgDACgEAxCurQgIAMgIALAxCurQAEATADAUQAIA8gBA5IAAAAQAAAUgCASAw3sPQgHACgHACQgDACgDADQgbADgcABQgBAAgCAAIAAAAQgWAAgYAAQgBgBgBgBQgFgDgFAAQAAAAAAABQgHAWgDARQAKABAKAEQgLAGgLAGQAAAHABAFAxmrWQAHgDAGgDQAQgGATgHIAAAAIAAABQgBAPgCAQQAfAQAjAJQAqALAlgGQAAALAAALAxZrcQAQALAQAIAyFr/IAAAAQAVAUAXAPAyCsCIgBAAQAAABAAAAQgBABgBAAIAAABQgXAVgZAQAzJrfQgBAJgBAIQgeARgiAKQgqANgogFQAHgUAGgVIAAgBQAGgQAEgSQAFAAAEgBAtpsWQgEARgEASQgcAIgbAIQAAgTAAgUQgHABgIABAuorjQgFACgFABAuoqrQAAgcAAgcAt7q6QgVALgYAEAtpsWQgcAIgjAEAwAwUQggA0giA1AyDuXQgjBFgZBLAuDmIQgDgEgEgFAxmluQADADACAEQACgHACgFAxflPQACgIABgIQgCgEgDgEQgBAKADAOQgEAWgIAVQgXBCggA3QgHAHgFAHQgGAKgFAKIAAAAQAAABAAAAQgEAKgDAMQgBAEgBAEQADADADABQgDAAgEgBQABgBAAgCQgBAAAAAAQAAABAAABIAAAAQAAACAAADQgCAAACAAQAEAAAEAAQALgBAHgDQA7gJA6gHQgCBDgMA7QgJAwAaALQAYAJAWAEAzghwQALADALAEIAAgBQgMgDgKgDQhAgShBgJQgNgBgLgEQAAAIAAAHQAKACAKABAzDhoQAAABAAAAQAAAAAAAAQAAACAAACAzDhqQABgEACgEAzMhzQADAFAGAEAzMhzQABAFABAEQADACAEAAAzDhjQAAAHABAGQADAnADApQAFA/gmAhQgWAUgnAJAwziWQAAgCAAgCQgDgNgCgMQgLg8gIg6QgFghgMgVAwziWIAAAAQABADAAACQABADAAACQgCAFAAAFQABAGADAEAwziWQAAAAAAAAAwziWQAAgCAAgCAwxiMQABgDABgCQBRgYBRgQQAFgBAEAAQACgBACAAQABAAABAAQAJgBAGAAAvBh4QgnAKgzgDQgOgBgGgGQgCABgDAAQABgPAAgQAy5iJQA/gLBHgCAuDmIQAvBCALBWQACAPABAQQAEgBADAAAvBh4QAAgDAAgCAtxijQADAAACgBQAEAAAEAAAthilQAOgBAPABQAAgWgCgWQgkAGgUAQAuEi6QACAIACAIAtxijQgCACgCACQgBABgCABQACgFAFgBgAt4idQgdAagsALAuEi6QgOg4AFhEQACgqAIgoApnlGQAOADAOACQABAAAAAAQANgcAIghQgFgCgFgCAoqm4QgEAfgHAbQBNAbBYgDQBegEBEgjQAFgFAHgGQgIgTgHgUQAAAAAAAAQgCgFgCgFQgIgWgJgVQgBgGAAgFQgCgLgBgMQADgBADgBAqIjXQgHhYgBhYQgBgiABghArxncQAAANAAAMQgDBmAYBWQANArAIAtQACAMACAMQAEAAACgBQABAAACgBQAYgDARgVQABgCAAgBQACgDABgCIAAgBQABAAAAAAQACgEADgEQAAgBAAgBQgBgJAAgKArDiXQABABAAABQAFAfADAgQAGA2AJAhQgDgBgFAAArHivQArgIAUggAp0gMIAAgBQgKhWgIhSQAAgHgBgGApZkYQAFgSAIgRQABgDABgDQBLAOBLAGQAnAEA0gBQBgAAA1gdQgGgXgIgVQgIgSgIgTApZkYQgFAAgEgBApsjxQAGABAGAAQACgVAFgTApgjwQgCAVACAXQACASATAMQAnAXAuAEQgBgFgCgGAmviQQADgBAEgDQgCgBgBgBQgFgCgDgDAmviQQglAIgigDQAeBihMAcQg0ATgbgSQAAAAgBAAIAAAAIAAgBQgHgFgFgHAmoiUIAAAAQAQAIAXAEQBLAMA6gVQAPgGAPgIQAbgPAEgcQABgMABgLQAAgDAAgDIAAAAQABgFAAgGQAAgSgBgRQgeAOgpAKQhSAVhbgXQhOgThagGApgjwQBbAGBKARQBeAVBcgWQAugLAVgCIABAAArCw0QgYALgSARQgxAygtAwA10u3QgKgKgLgLQgCgCgCgCQAAACAAACQAAADAAACQAKAKALAKA0uuHQAAgJAAgJA1Gr3QAKgkAGglQAHgjABgkA04uAQAFgDAFgEA2NvHQAAAkgDAjQgGBHgHBGQgBAMgCALQgFABgGAAA23v6QAAgBgBgBQgCgJgFgHQgEgGgHAAQACACABACA23v6QAAABABABQAGAEAGAGQAOAPAPAPA23v5QAAAAABABQARAZAYAYA24v5QAAAAABAAQAAAAAAgBQgBAAAAgBA3hv9QAGgCAFgBA3KwSQgLALgMAKA4jvaQgDAIgCAKIAAAAQgBACAAABQAAABAAABQAAABgBAAQAAAAAAABIAAAAIAAABQAAgBABAAIAAAAQAAAAAAgBQABAAABAAQABgBAAgBQACgBACgBQAjgsAegLA4ztXQAEgqACgnQABgNACgLQgGAEgHAFA4ztXQAPAMAFAhQAYglATgrA4ztXQgOgLgWAGQAPAjAQAQQAGAGAGADA4ivGQAigbAfgcA2jrAQABAAAAAAQAhASAkADQgCAEgBADA2nrDQAAAAAAAAQgCgEgDgEQgCgDgCgDA2jrAQABgBAAgBQAAgCAAgDQABgKABgLQAqgBAgAHA2nrDQACACACABA4fsWQA2AqA5AkQAFADAEACQACAEACADQAAgCAAgCA4fslQABAAAAgBQAAADAAACA4ksdQgBABAAABQADADADACQABgDAAgDIAAAAQAAgCAAgDQAAADAAACQgDAAgDgBgA4fslQABACAAACA4fslQgDAEgCAEA4oseQgCgBgCgBQACACACABQAAgBAAAAQACABACAAA4lsbQgCgBgBgBQgCADABAFQACgDACgDgA4psVQgIASAEARQADARAQARQgFgkAAgiA5DrQQACgQACgPQAAgCABgBIgBAAQg7gDhCAMQgIACgJACA4+ryQADgcADgbQADgXACgXA5DrQQAEAAADgBA4tryQgLAAgGAAA5DrQQgHBBgEBPQgDA5gEA8QAJgCALAAA1MqQQA+gCAnAaA2drzQAtACAqgGA4fsqQAAACAAADA2jq8QAHANAGAQQAbBIAEBdQAAANAAANQAEgBAEAAA4fsqQgEAGgFAGA6otiQgBAHAAAHQAEAIAFAIA6ptUQgKgQgJgOQgrhGhKgnQAFAWgLAMQgtAugaBJQAAADABADQAHAhABAkQABAUgBAUQAAACAAABQgBAQgBASQgBADAAAEQgIBTgDBfQgDBLgCBJQAAABAAAAQAAAVgBAUQgBBJgDBIQgBASgBASQAFgBAEAAA9+tGQgEgOgEgOA/ItAQgBgDgCgEQgJgRgJgSQglhFgqg2QggAmgSA2QgDAKgCAJQgDAWgGASQgFARgIAOQgNAXgLAaQgdAAgdACQhMADgUAFQADgPADgPQAKgoAEgsQAAgBAAgBQgygrgxhCQgCAFgBAGQgBACgBADQgdA8g7AsQgCAEgBADQgSApgDA5QgBAaACAeQABAMAAAMQAAAAAAABQABAIAAAIIAAABQgUAEgNAMQg5AzhWgPQgBgHAAgHQgBgEAAgDQgFg5gCg+QgBgdAAgeQAAgCAAgDQgjgkgugpA/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gEgCgFAkKoWQgBgYADgXAEpBEQgBgBgCAAQABgBABgBQAAACABABgAEwBFQgEgBgDAAQABADABADAEmBDQgagEgcgFQgmgIgUgXQgBgCgCgCQACABACABQAvATA7gFAEoBBQAKgMAHgPAEmBDQgYAbguAKAEoBBQgEgNgDgNACzAXQgSgIgRgLAgZAnQBFgLA8ggAPTCQQBzgLgeg2QAAgBgBgBIAAAAQgEgGgFgHANXBZQgBAFAAAFAPFBSQAugBArACAJRA7QAGALAOAFAGAAOQAtAWAxAKIABAAQAAAAAAAAQAHACAIABQABAAACABQANADAOACQAhAGAkgCAFarlQAjAAAkAAAGGjOQg6AEgnAaApzwrQgUBDghBBEAiLgLiQAIAAAJgBQAvgCAsgHQBegPBkABQA3ABA3gBQAZAAAZgBQARAAARgBIACAAQA4gCA1gDQApgDAngCEAqsgLyQAUADARAFEAqsgLyQAfAAAfAAQAAAAAAAAQBfgCBfAAQBkgBBgAFQBhAGBhADQBDACEGgXEApZgL7QASABAQACIACAAQAZACAWAEEAongL6QBCAHBDABEAgVgPBQACACACACQAAAAAAABQAvAzAbA8QABACABADQgCAogDAnQgBAMgBALQADAAAEAAQASAAASAAQABAAABAAQgBADgBADQALgFAIABQAXADgGA9QgbgPgZgPQgCADgCACEAhugLEQgCgBgCgCQABgBABgBQgGgMgBgNQgCgLACgMQAFgiAjgkQAKA1gMAoEAhugLEQgBgCgBgDEAhqgK4QACAEACADQADgEAEgEQgEgFgDgGQAFADAGADQAKgOAGgQQgNAGgQANEAgEgJRQgFgFgFgFQgMAFgLAHAf6pbQAHgDAIgCQgCAFgBAGQgBACgBACQABABACABQA0AtA7AOQAPADAKgMQABgCAGgEQAAACABACIAAAAQADAKACAMAf6pbQgEgEgEgEEAgjgJmQgMAKgMAIEAgJgJgQABgEABgEEAgJgJgQANgEANgCQAbgWAZgbQAAgBAAgBQAEgkADglQgTAAgTgBQhNgEhJAAQgDAmgGAlQgLBPgOBPQAvgBAlgUQAggRAQgtEAiWgIjQgMgggYgQQgWgOgXgEQgEAGgEAGEAhXgKXQABAAAAgBQALgMALgNQAjA+AqA2EAhFgJlQAOgXAE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");
	this.shape_1.setTransform(204.4,-92.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DA9836","#784D22"],[0,1],55.5,-60,55.5,31.5).s().p("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");
	this.shape_2.setTransform(149.3,-131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0066FF","#000099"],[0,1],277.3,31,277.3,-30.8).s().p("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");
	this.shape_3.setTransform(204.4,-134.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FEE1A3","#FFCC33"],[0,1],0,-81,0,85.9).s().p("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");
	this.shape_4.setTransform(204.4,-28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#00CCFF","#D5FFFF"],[0,1],0,-100.3,0,100.3).s().p("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");
	this.shape_5.setTransform(204.4,-274.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9933").s().p("AgwAjIAKAEIgKgEIAEgMIgEAMQgwgRgigVQAngQAvgHIABAAQgDgoAIgfQA8ABAPA0QAbgRAjgIIABAAQgPAagLAdQAaANAfAKQgpAcg0gJIgCAAIgUgEIAUAEQggAyhFATQAIggAJgegABHgGIADgIIgNgHIANAHIgDAIgAAagkIALgIIgLAIgAgwAjIAAAAgAAkAcIAAAAg");
	this.shape_6.setTransform(344.6,5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#013FA3").s().p("Ac/CGIAMADQgGABgEABgEgr0AAeIACgBIAAACgAingZIACgCIAEgCIADACIgMAIIADgGgEAiggApIAHhJIAHAAQABANAGANIgCACIAEACIgCgEQAQgOANgFQgGAQgKAOIgLgHIAHAMIgHAIIgEgHIAEAHIgWAYgEAjCgBNQAKgOAGgQQgNAFgQAOQgGgNgBgNIAkAAIAAAHQALgGAIABQAXAEgGA9Ig0gegEAi3gBUIALAHIgEAFIgHgMgEAjCgBNIAAAAgA1ahQIABgBIABACIgCgBgAwQhrIAjgNIABAAIgDAfQgRgIgQgKgAGjh0IBHAAIgCAIIgDAKQgkABgjAHIAFgagAyAhuQAKABAKADIgWANIACgRgA0NhmIAHACIAAAAgEApwgCJIAygCIAiADIACAAQAZADAWADQhDgBhCgGg");
	this.shape_7.setTransform(197.1,-154.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC33").s().p("AREKgIABAAIAAABgAioixQgngIgTgXIAAgCQAwATA7gFIAHAaIgCADIg2gKgAxEjqQAQAEAGAJIgOAMQgEgLgEgOgAnrkXQgbgJAUgNQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQACgCAGgCIgBAdgAHIqfIAAgBIADABg");
	this.shape_8.setTransform(245.3,-68.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CCFF").s().p("AJFEpIgEAAIAGgUIADAhQgDgGgCgHgAEKEeIAAAAIAFABgAd3C+IAAAAIgIACgAdFgEQgBgMABgLQAGgiAigkQALA1gNAnIgCAAIgYABIgMAAgA1VgLIAAAAIAAAAgAwEhJQAOAEANAOQgPALgMAIIAAglgA92h+QAWgGAOAKIgFAvQgRgQgOgjgAoUiiQAYAFANARQgKARgOAPIgFAGIgIg8gA7XkdIAAgBIAAACIAAgBgA7mkxIgDgEQAHABADAGQgDgCgEgBg");
	this.shape_9.setTransform(233.1,-165.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC99").s().p("AgsDSQhKgRhbgGQACgVAFgTQBaAGBOATQBaAXBSgVQApgKAegOQABASAAASIgBAKIgBAAQgVACguALQgvALgwAAQgtAAgtgKgAilAtQAGgbAEgeQBTAOBZgEQBGgDBCgYIAEAKIAAABIAPAlIgMALQhEAjhdAEIgTAAQhNAAhEgYgAiiiYQgJgggQgZIgHgKIAAAAIAIAEIAFACIAAAAQBPAXBgAEQBcAFBAgYQgMAZgEAbQg1AUhEADIgdABQhSAAhAgXg");
	this.shape_10.setTransform(164.5,-135);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC3366").s().p("AgSDwQhOgUhbgGQAFgRAIgRIADgGQBLANBKAHQAmADA0AAQBgAAA1geQAGAZACAaQgfAOgoAKQgnAKgqAAQgtAAgugMgAiMA3IADgpIAAgcQBaAbBegUQA5gMAsgTIACAXIACAKIAQArQhCAXhFADIgsACQhDAAg+gLgAAIh2QhegFhQgWIgFgDIAFADIAAAAIgFgDIgHgEIgBAAQgcgkgRg1QA6AqBRAJQBjANBKgVQBBgRA8gkQgFAXgIAWQgKAZgNAWIgBAAIgBADIgCADIgDAFIgFAKQg2AVhLAAIgcgBg");
	this.shape_11.setTransform(162.9,-141.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AAxGLQgXgEgQgIIgDgCIgHgFIAHAFIgEAGQgkAIgigDIgDgLIADALQgtgEgngXQgUgMgCgSQgBgXABgVQBbAGBLARQBcAVBcgWQAvgMAVgBIAAAGIgLAEIALgEIgCAXQgDAcgcAPQgOAIgQAGQglANgrAAQgaAAgbgEgAD1EyIAAAAgAgBDmQhKgHhLgNQANgcAIghQBMAbBXgDQBegEBEgjIANgLIAPAlQAJAVAFAXQg1AdhgAAIgNAAQgsAAghgDgAh0AVIAAgBQgBglgJggQBLAcBkgFQBEgDA2gUQgEAXABAYQgsASg5ANQgoAIgmAAQg1AAg0gQgAhBiZQhRgKg5gpIgGgXIgBgCIgBgFQgUhPgNhVQA0BIA8AsQAZASAeAPQAlASAqALQANADAMABIACARIgCgRQAgADAZgLQBAgeAxgyIACAKIgCgKIAGgGQAOgPAKgRQASAXgDAtQgBAZgFAYIgCAKQg8AkhBASQguAMg4AAQgiAAgmgEgAhOjzIABgGIgBAGg");
	this.shape_12.setTransform(160.9,-145.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AinCZIgHgGIgCgCIADgbIACgMIAAgCIAAgBIABgCIAAAAQAIgugWAAIAAAAIgBAAQgKAAgQAJQAQgJAKAAIABAAIAAAAQAWAAgIAuIAAAAIgBACIAAABIAAACIgCAMIgDAbQgbgbgJg1IABgBIgCgEQgLhGAcgLQAFgCAGgBIAIADQA1AVAABEQAAANgCAPQgDAegLAPQgJAMgOAAIgEAAgAiFCXIAAgGIgHgEQALgPADgeQACgPAAgNQAAhEg1gVIgIgDIgMgDIgFgBIgCgBIgBgCIAAgCIAAgBIADgCIACgCQAhgbARAFQAxAOAqgBIgCAJIACgJQAugBAkgUQAggSARgtIgLgJIAPgGIgDALIgBAEIADADQAzAtA8ANIABABIAAAAIAFAAIAAAAIABAAQAKAAAHgJIAAAAIAAAAQgHAJgKAAIgBAAIAAAAIgFAAIAAAAIgBgBQg8gNgzgtIgDgDIABgEIADgLQANgEANgBQASgCARADQAXAEAVAOQAZAQALAgIgHAGQgRA8gfA5IgFADQgIAFgKACQAGgKAEgHIAAgBIAAAAQAIgSgQAAIAAAAIgCAAQgMAAgXAJQgxAUAAAbQAAANALAPQgPACgNAFIgJAEQgoAHgMAIQAOgNAHgTIgCAAIgCAAIgLAAIAAAAIAAAAQhUAAgeAzIgBABIgBACIABgCIABgBQAegzBUAAIAAAAIAAAAIALAAIACAAIACAAQgHATgOANQgRAQgaAHQgWAGgdAAIgQgBgABOiFIAYgSIgYASgACAiKIAJgMIgJAMgAA3BFQAAgbAxgUQAXgJAMAAIACAAIAAAAQAQAAgIASIAAAAIAAABQgEAHgGAKQgEAAAAAEQgBAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgQAUgjASIgEACIgMABQgLgPAAgNgACLAxIAAAAg");
	this.shape_13.setTransform(402.4,-138.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6600FF").s().p("Ah2FFQhAgThCgIQgMgCgLgDIAAgHIAAAHQgigKgUgYIAAgBIACgCIALgQIACgBQAegOAiAAIAAAAIAAAAQAgAAAjANIAFACQA8AXAPA6QgPg6g8gXIgFgCQgjgNggAAIAAAAIAAAAQgiAAgeAOIgCABQAegwAHhHQAIhOgChWIAIAAIgIAAIgBgZQgDhdgbhJQgGgPgIgOIACgDQAhARAjAEQAoAEArgMQAhgKAfgRIABAMIgBgMIAVgNQAZgQAXgVIABAAQAUAUAXAQIgNAGIANgGQAPAKARAIQAfAQAiAJQArAMAlgGIAAAWIAAgWQAXgEAWgLQAUgKARgQIAggcQApBPgtBOQgfA2gVBAQgOApgIAqIgGgIIAGAIQgHApgDApQgEBFANA3IgIACQhSAPhQAYIgEgFIgBgDIgFgaQgKg7gJg7QgFgggLgVIgFgJQABgHADgFQgDAFgBAHIgFgGIAFAGQgCAKAEAOQgFAWgGAVQgXBDghA2IgLAPQgHAJgEAKIAAABIgBAAQgEALgDALIgMgBIADAKIgWgGgAichxQgwgyg+g3QA+A3AwAygAh9jCIgCgBIgBgBIgBgBQgigWg0AAIgBAAIAAAAIgFAAIgCABIgDAAIADAAIACgBIAFAAIAAAAIABAAQA0AAAiAWIABABIABABIACABgAj2juIACgHIgCAHgABNFEQgOgBgFgGQgEgEAAgHIAEgPQBQgYBSgPIAIgCIAFAQIAIAOQgeAZgrALIAAgFIAAAFQggAIgmAAIgVAAgAAIBNIAAAAg");
	this.shape_14.setTransform(91.4,-135.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#996633").s().p("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");
	this.shape_15.setTransform(140.4,-135.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Eg2nAFzIABACIgFABIAEgDgAzNFhQAWAAATgBIABACIgBAAIgRABQgMAAgMgCgA2VCoIAAAAIgWgGIAWAGIgCgKQAEAFAFAEQgFgEgEgFIAMABQgCAEgBAEIAAADIAAAAIgHgCgA2XCegAz8CFIACgFIgDAPQAAgEABgGgAz9B8IAAgBIADAFgAdhAWQAIgoAGgrIAAgDQA8g4BVAQQgJAIgIAKQAIgKAJgIIACgCQAygqBNASQAQAEANAFIgFAPIAFgPIAKAFIgKgFQAbhABcAuIADACIADAGQAGAIAJAFQAugQBEAZIgBAEIAEgDIAFACIgFgCQAagTACgnQAoAJAcAVQgJALgJAOQAJgOAJgLQAtg1BAATQASAFAGAbQAMA+AigVQAHgEAIgHIAEgCQAYgLAiAPIAHAEIgHgEQAPhNBRAcQAkAMAGgpQgBAOgBATQABgTABgOIABgCQAJhAAvBHQANATAAAOQgBAdAlgJQAggHARAEIACgGQAuAQAogrQAlAbAUAKIgHAEIAHgEQAcgPDbgJIAACOQj3gRgNgKQACgFAAgIIgBgJIABAJQAAAIgCAFIgJgHIAJAHQgCAHgGADQhMAqhDgsIACgHIgCAHIgIgFIAIAFQgIAUgTAHQhuAtgchPIgBgBIgCgHIACAHIABABQhDAvgdg9IgHgTIAHATIgIADQhFAhhRgUQAEgIAAgJQAAgGgDgHQADAHAAAGQAAAJgEAIIgDgBIgQgEIAQAEIADABIgFAGQguA6hIgyIAJgEIgJAEIgGgEIAGAEQgSAIgaAQQhDgJAVhUIAJgFIgJAFQACgHAAgMIAAAAIAAAAQAAAMgCAHIgTAJQhOAnhIgwIgCgBQhCAlhRgfIALgHIgLAHIgNgFIANAFQgtAbg+AMQgEAwhMgGQAEgHACgJQgCAJgEAHIgGgBIAGABQgPAXgoAAIgIgBgAfwgqIgGABIAGgBIAAgGIgBgIIABAIIAAAGgEAr7gBHQABgTADgQQgDAQgBATgEAqhgBHQAIgQAJgKQgJAKgIAQgEAmTgBlIAIgEIgIAEgEAkRgBqQAMgIANgEQgNAEgMAIgEAy9gB5IgIgEIAIAEgEAwsgB+IgIgDIAIADgEAwRgAaIAAAAgEApugAfIAAAAgEApugAfIAAAAgEAyogAiIAAAAgEAyogAiIAAAAgAZpgkIADgHIAAAHIgDAAgEAsMgAvIAAAAgEAhbgBRIAAAAgEAmZgBWIAAAAgAsdl1IABAAIAAAAIgBAAg");
	this.shape_16.setTransform(224.7,-119.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006600").s().p("AgBgCIADAEIgCABIgBgFg");
	this.shape_17.setTransform(97,-107);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CC00").s().p("Az2D9IgDgCIAEACgAT6gLIgDAEIgBAAQAAgEAEAAgAw0j5IgEgCQADgBAEACIgDABg");
	this.shape_18.setTransform(288.9,-132.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00FF00").s().p("AjOGfIANgCIABACIgBAAIgNACgEgl2ACMIAGgBIgGABgEAl3gGgIAAAAIAAABg");
	this.shape_19.setTransform(126.5,-125.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.4,-386.6,743.6,472.3);


(lib.s5_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape.setTransform(226.9,-49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_1.setTransform(221.5,-54.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_2.setTransform(216,-55.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_3.setTransform(209.9,-53.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTApQgMgEAAgIQAAgCADgDQABgCADAAQADAAADADQACACAHABIAIABQAFAAAEgCQAHgBAAgFQAAgKgOgEIgHgCQgJgCgEgCQgGgDAAgJQAAgPAPgGIAMgFIAPgFIAGgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgDAAQgFAAgBgDIgCgIIgRAGQgKAEAAAHIADABQAQAEAIAEQAMAIAAAOQAAAMgKAGQgIAFgMAAQgKAAgIgDg");
	this.shape_4.setTransform(202.1,-53.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYA5QgKgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgFAEgHAAQgNAAgIgJQgJgKABgNQgBgUALgMQAMgMAUAAQAGAAAFACQAFABACAEQAIAAAAAIIgCAOIgCAOIgBAYQgBAOgCAKQgDAMgIAFQgJAHgPAAQgKAAgGgBgAgNgkQgGAJgBANQABALAEAEQAEAFAHAAQAHAAAHgHQAHgIABgHIACgZIgGgDQgDgCgDAAQgNAAgIAKg");
	this.shape_5.setTransform(190.1,-51.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_6.setTransform(182.5,-53.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_7.setTransform(176.4,-55.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJABgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_8.setTransform(170,-55.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_9.setTransform(162,-54.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_10.setTransform(154.6,-53.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIAAgWIAAgUIAAgVQAAgEABgEQADgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAGgDAEAAQAQAAAJAMQAKALAAAQQgBARgKAMQgLALgPAAQgMAAgJgEgAgKgCIgLAGIgBAMIAAAMIABAMIAJAEIALABQAJAAAIgHQAGgIAAgLQAAgLgFgHQgHgHgJAAQgGAAgFAEg");
	this.shape_11.setTransform(146.6,-55.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAHAAQAGAAAAAMQAOgNARAAQAGAAADAEQADAFgBAJIAAAFQAAAJgHAAQgGAAAAgHIAAgFIAAgHQgMACgGAFQgGAFgFAKIAAAmQABAIgIAAQgGAAAAgIg");
	this.shape_12.setTransform(134.1,-53.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAfQgMgIABgRQgBgSAKgNQAKgOAQAAQALAAAJAEQAJAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAGAEAHAAQAFAAAHgDQAJgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_13.setTransform(126.3,-53.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJABgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_14.setTransform(117.8,-55.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAyQgLgKAAgRQAAgUALgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAAAAHIgCAtIgBAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgDgGQgFAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHgBAPQAAAJAHAHQAHAHAJAAQAFAAAEgCIAIgGIACgDIAAgNIAAgIIAAgJQgCgFgFgDQgEgCgHAAQgLAAgHAGg");
	this.shape_15.setTransform(104.5,-55.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAGAEAHAAQAFAAAHgDQAJgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_16.setTransform(96.2,-53.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHAiIgLgeIgNggIgBgEQAAgDACgCQACgCADAAQAFAAACAEIASAzIANghIAGgRQADgFAEAAQADAAACACQACADAAADQAAACgMAdIgPAhQAAAHgGAAQgFAAgCgGg");
	this.shape_17.setTransform(88.3,-53.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_18.setTransform(80.7,-53.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTApQgMgEAAgIQAAgCADgDQABgCADAAQADAAADADQACACAHABIAIABQAEAAAFgCQAHgBAAgFQAAgKgOgEIgHgCQgJgCgEgCQgGgDAAgJQAAgPAPgGIAMgFIAOgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgDAAQgEAAgCgDIgCgIIgRAGQgKAEAAAHIADABQARAEAHAEQAMAIAAAOQAAAMgKAGQgIAFgMAAQgKAAgIgDg");
	this.shape_19.setTransform(73.1,-53.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAFAAAHgDQAJgCADgDQACgFACAAQADAAADADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_20.setTransform(61.2,-53.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAiIgLgeIgNggIgBgEQAAgDACgCQACgCADAAQAFAAACAEIASAzIANghIAGgRQADgFAEAAQADAAACACQACADAAADQAAACgMAdIgPAhQAAAHgGAAQgFAAgCgGg");
	this.shape_21.setTransform(53.3,-53.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_22.setTransform(45.7,-53.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJABgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_23.setTransform(37.7,-55.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAyQgLgKAAgRQAAgUALgKQALgMAPAAQAIAAAFADIAHAFIACgpQABgHAGAAQAHAAAAAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgGQgFAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHABAPQAAAJAGAHQAHAHAJAAQAFAAAFgCIAHgGIADgDIAAgNIAAgIIAAgJQgDgFgFgDQgEgCgHAAQgLAAgGAGg");
	this.shape_24.setTransform(24.3,-55.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIA1IACgbIABgaIAAgaIAAgaQAAgIAHABQAGgBAAAIIAAAaIAAAaIgCAkIAAARQgBAIgFgBQgIAAAAgHg");
	this.shape_25.setTransform(17.9,-55.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_26.setTransform(12,-53.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_27.setTransform(3.9,-53.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_28.setTransform(-3.7,-53.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgDQAJgCACgDQADgFACAAQADAAADADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_29.setTransform(-16,-53.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAEAVIgDgRIgBgQIgGAOIgLAeIgCAEQgDAEgEABQgGAAgFgXIgGgdIgBgLIgBgLQAAgDACgCQACgCADAAQAFAAACAGIABALIACALIAEAfQAIgWAJgdQACgIAFAAQAGAAACAJIAEAbIAGAbIAFgTIAJgoQACgEAFAAQADAAADACQABACAAADIAAADIgPA1QgCAHgFAHQgCAEgFAAQgIAAgFgUg");
	this.shape_30.setTransform(-25.3,-53.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIAQQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAFgLIAFgNQACgEADAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAACgLAWQAAAEgDAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_31.setTransform(-36.6,-49);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZAyQgLgKAAgRQAAgUALgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAAAAHIgCAtIgBAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgDgGQgFAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHgBAPQAAAJAHAHQAHAHAJAAQAFAAAEgCIAIgGIACgDIAAgNIAAgIIAAgJQgCgFgFgDQgEgCgHAAQgLAAgHAGg");
	this.shape_32.setTransform(-43.6,-55.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAGAEAHAAQAFAAAHgDQAJgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_33.setTransform(-51.9,-53.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_34.setTransform(-59.7,-54.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_35.setTransform(-65.2,-55.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_36.setTransform(-71.3,-53.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAFAVIgDgRIgCgQIgFAOIgMAeIgDAEQgCAEgFABQgFAAgGgXIgEgdIgDgLIgBgLQABgDACgCQACgCADAAQAFAAACAGIABALIABALIAFAfQAIgWAIgdQADgIAFAAQAGAAACAJIAFAbIAFAbIAFgTIAJgoQACgEAFAAQADAAACACQACACABADIgBADIgPA1QgCAHgFAHQgDAEgEAAQgIAAgEgUg");
	this.shape_37.setTransform(-80.2,-53.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgZAyQgKgKAAgRQAAgUAKgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAABAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHAAAPQABAJAGAHQAHAHAJAAQAFAAAFgCIAIgGIACgDIAAgNIAAgIIAAgJQgDgFgFgDQgFgCgGAAQgLAAgGAGg");
	this.shape_38.setTransform(-94.3,-55.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_39.setTransform(-102.5,-53.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJABgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_40.setTransform(-110.6,-55.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAGAEAHAAQAFAAAHgDQAJgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_41.setTransform(-123.4,-53.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJABgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_42.setTransform(-131.9,-55.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUApQgLgEAAgIQAAgCACgDQADgCACAAQADAAAEADQABACAHABIAHABQAFAAAGgCQAGgBAAgFQAAgKgNgEIgIgCQgJgCgEgCQgGgDAAgJQAAgPAOgGIANgFIAPgFIAGgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgEAAgBgDIgCgIIgRAGQgLAEAAAHIAFABQAPAEAJAEQAMAIgBAOQABAMgKAGQgKAFgMAAQgJAAgJgDg");
	this.shape_43.setTransform(-140.2,-53.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_44.setTransform(-152.1,-55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgfA2QgCgCAAgEQAAgCACgCQACgDADAAIAPgCIABgNIAAgNIgBgMQAAgPACgaIgJAAIgKAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDABQgBACgDAAIgMAAIgMgCIgBAoIAAAMIAAANIAAAMIAWAAQAEAAACACQABADAAADQAAADgBACQgCACgEAAIgMABIgMAAIgOABIgOABQgDAAgCgCg");
	this.shape_45.setTransform(-159.8,-55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgZAyQgKgKAAgRQAAgUAKgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAABAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHAAAPQABAJAGAHQAHAHAJAAQAFAAAFgCIAIgGIACgDIAAgNIAAgIIAAgJQgDgFgFgDQgFgCgGAAQgLAAgGAGg");
	this.shape_46.setTransform(-94.3,-55.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_47.setTransform(-102.5,-53.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJABgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_48.setTransform(-110.6,-55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:-110.6}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_40,p:{x:-131.9}},{t:this.shape_41},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,-68.2,396.9,24.9);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


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


(lib.peoplescopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(16));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AgCgeIAAAIQgBACABABIABAzAAEgeQgBAAAAAAQgCACgCAAIAAAEQAAAAgBACIAAABIAAAC");
	this.shape.setTransform(-119.5,-7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("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");
	this.shape_1.setTransform(-56,-83);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA9QgvgaAKhAQAJg+AoAdIAMAMQAKAMAIAVQgpgaAWAzQAKAYAJgxQAFAQADAUQAJA1gcAAQgNAAgSgLg");
	this.shape_2.setTransform(-137,-52.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AANG6QAKgLAFgRQgFARgKALIgJgIIAJAIQgRAUgjgDQhKgDgHg8QgXATgsgEQgVgDgQgIQgZgNgLgaIgCgIQAHgIAHgEQgHAEgHAIIgBgDQgPg9ASgzQgggFgiADQg9AGgJgdIAMgHIgMAHQgEgMAEgRIAdhxQgUAAgUgCQgRgBgRgIQg8geA+gpQAxgiAqgZQgcgtAxgTQBDgahJg8QAbgjAggkQgIgJgCgJQgMg1A5gUIABAMIgBgMQgBgKACgLQADgIAEgGQAJgNAQgDQAXgEAWgMQA1gdA6ApQAigrA2AqQAaAVAJAdIAAABIACALIgCgLQBKgDgWAzIgCAGIAAADIAAAGIABAAQBBgDgEBFIAAAPIAEgCQA5gVA0AcQAVALAMAVQAfA1ghAgIgLAKIALgKQAoAbgKBEIgBAAIgNgBIgBAAIAAAAIgFAAIAFAAIAAAAIABAAIANABIABAAQA6AGADAuQADA1gfAfIgHAGIgEAEIgNAIIgFAAIgGgBIgHAAIAAAAIgBAAIgEAAIgGAAIAGAAIAEAAIABAAIAAAAIAHAAIAGABIAFAAQAqAIACAyQACAngHAUIgFABIgMADIAMgDIAFgBIAcgGQAjgIABASQABANgFAPIgUALIAUgLIAAABQgWBAg2AJQACgIAAgJQAAgKgDgMQADAMAAAKQAAAJgCAIQgGASgSAKIAAgDIgBgPIABAPIAAADIAAAJQgBALgDALQgFASgMAPQgLAPgTgCIAJgQIgJAQQgFgBgGgCQgtgRgmgIQgugKgVgVIABgFIABgRIAAgEIAAAEIgBARIgBAFQgHAsgrAOQgTAHgRAAQgfAAgZgUgAj8DwIgIgCIAIACgAC7jqIgCgJIACAJgAj/kSQgMgIgHgJQAHAJAMAIgABtlEIAJAAIADAAIABAAIABAAIgBAAIgBAAIgDAAIgJAAgAANG6IAAAAgAGHFfIAAAAg");
	this.shape_3.setTransform(46.5,-182.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhgA2QgRgDgFgKIgDgEIAAgDQgHgoAPg3IACgCQAgApAzAOQA4AOBDgJQASgDAGgJIAFADQgBATgJAQQgXAkhAAEIgdABQgwAAgugKg");
	this.shape_4.setTransform(-140.2,-19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996633").s().p("Ah0LyQg2gNgIg8QgGgrAKg6IALgBIgLABIACgIQAGgfAKgYIAAgBQAKgXANgTQApgzg0gJIgKgCQhBgGgggxQgNgVgFgWIgCgHIgBgPQAAgUAHgUQgHAUAAAUIABAPQgPgagCggIAAgBIAAgCIgBgTIACgbQACgWAJgVQgJAVgCAWIgCAbIABATIAAACIAAABQgHAHgPAJQg0gVhBgPQAIgrgNgBQhAAWAHgyIADgMIACgEQAEgGADgHQgDAHgEAGIgCAEQgGAGgIAEQg9AUAXg+QASgvgJg2IgeAVQgsgRAqg1QAigrAtgdQgcAHgVAEQg9ALBChGQAmgoA/gOQAVAzgLBBQgLA9AOA1QAOA+AdAyQAdAyBAgYQAFgLAHgLQAdgvA2gWQAygUBIAEQBEAEAugYQAngVAVgdQAGAKAQADQA8AMBAgEQBAgDAXgkQAKgRABgTQAaARAXARQgOAJgRAEQARgEAOgJIAcAWQAKAKABAUQABANgDAJIAAAAIgBABIABgBIgHAAIgNABIgMgBIAMABIANgBIAAAJIAAABIAAACIACAzIAAAFIgBAGQgNgCgNgFQANAFANACQgGAkgQAbIgLASIgFAIQgXAhgsARQg5AVg/AAQgGgegcgSQgcgSgngFIgCAAIgGAAIgBAAIAAAAQgIAAgGADIgBAAIABAAQAGgDAIAAIAAAAIABAAIAGAAIACAAQAnAFAcASQAcASAGAeQAEAWgGAcQgMAygjAqQggAmggAhQgPARgWADQg1AJgiAZQgvAhASBBQAZACAmgOQA1gTA4gMQAkgIgMAfQgQAngpAhQgtAjgqAYQgeAQglAAQgXAAgagGgAnNJ9QgbgDgKgQQgig6AtgkQArgiAwgWQAsgUAoglQArgnAAg6QAFAWANAVQAgAxBBAGIAJAFQgUA0g8AFQhKAIgUAvQAwgHBAAFIAUAAIASgGIANgEQgKAYgGAfIgCAIQgiAEgbAHQg3APgzAUQgkAOgrAAQgUAAgVgDgAicIFIAAAAgAG2AsIAAgBIAAABIAAACIAAgCgAG2ArIACgCIAAgFQACAAACgBQgCAFgEAEgAG2AiIAHAAIgBABQgCABgCAAIAAAFIgCACgAG8AjIAAAAgADNhHQgzgOgggpIgBgBIgBADQglgRgCgxQAAgMABgNQgBANAAAMQhEAUAShNIAAgEQgEgLgDgKQgGgdAKggQgygIgpAWQgOAHgKgIIABgCIgBgCIABgJIgBAJIABACIgBACQgDA4grAcQgMAJgUAAIAFgSIgFASQgNAngZAIQg2gtAKhFQAHg5AygfQAxgeAxgSQA3gUBBgDQAYgBAbABIANABIgNgBQADhAgKg/QgLhBA0ghIAWgPQARgNAMgQIAMgIQAqgeBHABQAQABANAHQAlAUgsARQgoAPgbAZQgLAKgJALQAJgLALgKQAUAMgEARQgLArguAXQApAYg+AVQgKgJgPgFQAPAFAKAJIgJADIAJgDQAXAUgLAmIAPgNIAHgIQAKgFAPAAIADACQAbAPAYATIA5gqQAsgeAxgOQAagHAeABIABATQAFA2AogeQATgOgCgfQAbAngNBFQgKA7ggAiQgiAlgnAaQgoAbgTApQAigEAXgUIAMANQgNAugrAYQgpAYgQAvIgCAJIAAACIgFAKQgGAJgSADQgbAEgZAAQgmAAgigKgAGTjiIgDAIIADgIIABgCIgBACgADfmhQgKBBAuAaQBAAjgMhNQgEgVgFgQIAAgBQgHgUgKgMIgMgMIAWgQIgWAQQgNgKgKAAQgVAAgGArgAAclNQANACAOAEQgOgEgNgCIADgLIgDALIAAAAgACFm7QAjgLAagWQgaAWgjALgADIpCIgKAEIAKgEIADgBIgDABgAC2oWIAAAAg");
	this.shape_5.setTransform(-163.7,-13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiHBpQgXg0AqAaIAAAAQgGAigHAAQgDAAgDgIgABSg1IgBgTQAAgvAjAIQAKACANAHQAEAPABAMQACAfgTAOQgOALgKAAQgRAAgEgig");
	this.shape_6.setTransform(-121.7,-62.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("AkgPPQgGgHgBgNQgIg9gjgiQgkghg4gUQhEgZAzghQACAIAGAKQgGgKgCgIQgOgnAsgGQgVgpA0gCIAEAUIgEgUQgGgwAtAyQAEBTAkAlQAJAKAMAEIAJADIgJgDQAEg3gSgyQgSgxgNg2QgOg1gVguQgNgbgIgeQgCgkgKgbIgBgEQgTg2gLgzQgNg8gRgxQgOgtgCgsIACgbIAFhVQACgvAQgrQAWg6ASg2IAihuIAMgfQAIgRAJgQQAUgZAogHQA7gKA/AUQA+ATApAgQAZAUATAZIAGAIIAAABIABAAIAGgDQAjAXBBgEQA8gFAygdIASgFQARA2AKA5QALA/gHA/QgGA/ADBBQACA/ABBAIAAAbIAAAEIAAANIAAgNQAnAcAgAwQAdArAUA5QAVA7AHA7QAIA9AMA7QALA2AVA1QAYA6AABDQgBBDhAgRQg8gPgKg9QgDgQgVgSQgUgfgrgJQg9gNgnghQgVgSAFgfQAIg6AgAoQAXglArAiQATgIAXAGIgRglQgWg0gbgrIg6hkQgegzghgyQgfgvgcgoQANARATAHQgTgHgNgRIAAgBQgjgwgJg+QgIg4gMg6QgMg2gChBQgCg5gSgqIACgEQALgVAPgQQAKgKAGgOQgIAEgGABQAGgBAIgEQgGAOgKAKQgPAQgLAVIgCAEQgHAPgGARQgRA3grArQgmAogjAmQgiAlgeAzQgXAogDA/IgIgOIAIAOIABAFQAUAnAbAkQAlAvAOA3QAFASADAUIAAAXQACAygLAyQgMA3gJA+QgJA+AQA9QAMAqAUAiQAcAvgGBDQgEA5g0AcQgWALgSAAQgWAAgPgQgAkgMnIACgKIgCAKgAEhJOQAPAdARAXQAQAYABAmQgBgmgQgYQgRgXgPgdIgCgEIACAEgAASrbIgLgDIgBgIIgCgEIAAgGIAAgjQAAgnACgmQgCAmAAAnIAAAjIgGAPQgggNgogeQgpgegwgfQgvgeg2gbIgKgFIgegQIgRgKQgigYgaghQAPAIAWADQAsAEAXgTQAGA7BLAEQAjACASgUQAnAgA1gSQAqgOAIgsQATAUAuALQAnAIAsAQIAEATQgUAsgcA0QgcAyglAgQgHAHgIAAIgFgBg");
	this.shape_7.setTransform(62.2,-43.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0099").s().p("AAZEhQAXgNAigeQAlgeAAgjQAAgVgNgYQANAYAAAVQAAAjglAeQgiAegXANIgNgGQgRgZgagUQgoggg/gTQg/gTg7AKQgoAHgUAYIgPgJQgBhEAegpQAfgoAogrQAiglAChEQAChBgagxIgJgPQgJgOgNgMIAJgPIAJAEQA2AbAvAeQAwAfApAfQApAeAfAMIABABIAIACIALADQALADAKgJQAkgfAcgzQAcg0AVgsIAHgPQATACALgPIAIACIgUBWQgLA1AFA4QAVALARARQAlAkAdArQAiAygMA+QgJAugRAkQgVAwgeAZQgIAGgIAFQgyAdg8AFIgTABQgzAAgfgUgADMhkIgBgLIABALg");
	this.shape_8.setTransform(59,-107);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC33").s().p("Ay4NoIAJAEIAAABgASypAIAHgPIgGAPIgBAAgAMQtpIAAAAIAAAAIAAgDIAAADIADAJIgDgJg");
	this.shape_9.setTransform(-58.3,-59.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.3,1,1).p("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");
	this.shape_10.setTransform(-56,-83);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#996633").s().p("Ah0LyQg2gNgIg8QgGgrAKg6QgiAEgbAHQg3APgzAUQg0AVhEgKQgbgDgKgQQgig6AtgkQArgiAwgWQAsgUAoglQArgnAAg6IgCgHIgBgPQAAgUAHgUQgHAUAAAUIABAPQgPgagCggIAAgBIAAgCIgBgTIACgbQACgWAJgVQgJAVgCAWIgCAbIABATIAAACIAAABQgHAHgPAJQg0gVhBgPQAIgrgNgBQhAAWAHgyIADgMIACgEQAEgGADgHQgDAHgEAGIgCAEQgGAGgIAEQg9AUAXg+QASgvgJg2IgeAVQgsgRAqg1QAigrAtgdQgcAHgVAEQg9ALBChGQAmgoA/gOQAVAzgLBBQgLA9AOA1QAOA+AdAyQAdAyBAgYQAFgLAHgLQAdgvA2gWQAygUBIAEQBEAEAugYQAngVAVgdQAGAKAQADQA8AMBAgEQBAgDAXgkQAKgRABgTQAaARAXARQgOAJgRAEQARgEAOgJIAcAWQAKAKABAUQABANgDAJIgHAAIgNABIgMgBIAMABIANgBIAAAJIAAABIAAACIACAzIAAAFIgBAGQgNgCgNgFQANAFANACQgGAkgQAbIgLASIgFAIQgXAhgsARQg5AVg/AAQgGgegcgSQgcgSgngFIgCAAIgGAAIgBAAIAAAAQgIAAgGADIgBAAIABAAQAGgDAIAAIAAAAIABAAIAGAAIACAAQAnAFAcASQAcASAGAeQAEAWgGAcQgMAygjAqQggAmggAhQgPARgWADQg1AJgiAZQgvAhASBBQAZACAmgOQA1gTA4gMQAkgIgMAfQgQAngpAhQgtAjgqAYQgeAQglAAQgXAAgagGgAisI8IgCAIIALgBIgLABIACgIQAGgfAKgYIAAgBQAKgXANgTQApgzg0gJIgKgCQhBgGgggxQgNgVgFgWQAFAWANAVQAgAxBBAGIAJAFQgUA0g8AFQhKAIgUAvQAwgHBAAFIAUAAIASgGIANgEQgKAYgGAfgAG2AsIAAgBIAAABIAAACIAAgCgAG2ArIACgCIAAgFQACAAACgBQgCAFgEAEgAG2AiIAHAAIgBABIABgBIAAAAIgBABQgCABgCAAIAAAFIgCACgAG8AjIAAAAgADNhHQgzgOgggpIgBgBIgBADQglgRgCgxQAAgMABgNQgBANAAAMQhEAUAShNIAAgEQgEgLgDgKQgGgdAKggQgygIgpAWQgOAHgKgIIABgCIgBgCIABgJIgBAJIABACIgBACQgDA4grAcQgMAJgUAAIAFgSIgFASQgNAngZAIQg2gtAKhFQAHg5AygfQAxgeAxgSQA3gUBBgDQAYgBAbABIANABIgNgBQADhAgKg/QgLhBA0ghIAWgPQARgNAMgQIAMgIQAqgeBHABQAQABANAHQAlAUgsARQgoAPgbAZQgLAKgJALQAJgLALgKQAUAMgEARQgLArguAXQApAYg+AVQAXAUgLAmIAPgNIAHgIQAKgFAPAAIADACQAbAPAYATIA5gqQAsgeAxgOQAagHAeABIABATQAFA2AogeQATgOgCgfQAbAngNBFQgKA7ggAiQgiAlgnAaQgoAbgTApQAigEAXgUIAMANQgNAugrAYQgpAYgQAvIgCAJIAAACIgFAKQgGAJgSADQgbAEgZAAQgmAAgigKgAGTjiIgDAIIADgIIABgCIgBACgADfmhQgKBBAuAaQBAAjgMhNQgEgVgFgQIAAgBQgHgUgKgMIgMgMIAWgQIgWAQQgNgKgKAAQgVAAgGArgAAclNQANACAOAEQgOgEgNgCIADgLIgDALIAAAAgACFm7QAjgLAagWQgaAWgjALgACtoTIAJgDQgKgJgPgFQAPAFAKAJIgJADgADIpCIgKAEIAKgEIADgBIgDABg");
	this.shape_11.setTransform(-163.7,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_11},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_10},{t:this.shape}]},4).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_11},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_10},{t:this.shape}]},5).wait(16));

	// Layer 5
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.3,1,1).p("AjDhFQANgHALgLQAjgiAigmQAfghAxgRQA6gVBBAUQA6ASAgAvQALARgPASQgmAtgrgmQAIgFAHgIAidAFQAMgBANgDQAigFAhgIQAZgGAZgGQA8gQA4AXQA3AUgRBSQgMA+gnAoQgkAlg6gEQgjgCAOgPQAmgwgzgHQALgNAQgNQAOgNAAgRQAAg/hJAmQgtAXgugLAAkhnQgOASgggCQhIgDARBOAAkhnQAFgIACgKQgIALgDAEABhhwQAFAFAEAEQggAZgmgZ");
	this.shape_12.setTransform(-103.2,-10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996633").s().p("AgGDcQgjgCAOgPQAmgwgzgHQALgNAQgNQAOgNAAgRQAAg/hJAmQgtAXgugLIAAgFIgCg7QAEgDADgGIABgBIgBAAQADgHgBgOQgBgVgKgKIgcgWQANgHALgLQAjgiAigmQAfghAxgRQA6gVBBAUQA6ASAgAvQALARgPASQgmAtgrgmQAIgFAHgIQgHAIgIAFIgJgJIAJAJQggAZgmgZQAFgIACgKIgLAPIAEADQgOASgggCQhIgDARBOIAygMQA8gQA4AXQA3AUgRBSQgMA+gnAoQggAig0AAIgKgBgAiEABIgZAEIAZgEIBDgNIhDANg");
	this.shape_13.setTransform(-103.2,-10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.3,1,1).p("AjGgLQAGgLAFgMQAOggAMgfQAJgYAJgYQAVg7AygiQAxgiA5A8QAsAtAMA3QAKAygkAvQgVAagGgTQgRg7giAnQgEgQgCgVQgCgTgPgKQg0gjgKBSQgGAxgjAhAiSAkQAPACAPgBQAugEAxgGQACAAACAAQAEgBAEAAQAigDAlALQAHACAGADQAVAHASAMQAQALAPAPQAKALAKANQADAEADAGQAhAzgGA4QgCAUgXAFQg6AKgIg5QgCgGAAgGAA0CeQAJgDAJgHQgOAEgFABABrDLQgpgCgOgrQgJACgLgDQgMgEgOgNQghgfgbASQgQAKgNAZAB+DLQgKABgJgB");
	this.shape_14.setTransform(-105.6,-13.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#996633").s().p("ABrDLQAIABALgBQgLABgIgBIgCgMIACAMQgpgCgOgrQAJgDAJgHIgTAFIABAFQgJACgLgDQgMgEgOgNQghgfgbASQgQAKgNAZIg8gfIgWgOIgBAAQAIgFAIgLQANgRgCgOIgHgiQAPACAPgBQAugEAxgGIAEAAIAIgBQAigDAlALIANAFQAVAHASAMQAQALAPAPQAKALAKANIAGAKQAhAzgGA4QgCAUgXAFIgRABQgqAAgHgwgAiQAfIgygfQAAgEgEgFIAAgCIALgXIAag/IASgwQAVg7AygiQAxgiA5A8QAsAtAMA3QAKAygkAvQgVAagGgTQgRg7giAnQgEgQgCgVQgCgTgPgKQg0gjgKBSQgGAxgjAhIgEgEg");
	this.shape_15.setTransform(-105.6,-13.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.3,1,1).p("AjDhFQANgHALgLQAjgiAigmQAfghAxgRQA6gVBBAUQA6ASAgAvQALARgPASQgmAtgrgmQAIgFAHgIAidAFQAMgBANgDQAigFAhgIQAZgGAZgGQA8gQA4AXQA3AUgRBSQgMA+gnAoQgkAlg6gEQgjgCAOgPQAmgwgzgHQALgNAQgNQAOgNAAgRQAAg/hJAmQgtAXgugLAAkhnQgOASgggCQhIgDARBOAAghqQADgEAIgLQgCAKgFAIABhhwQAFAFAEAEQggAZgmgZ");
	this.shape_16.setTransform(-103.2,-10.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.3,1,1).p("AjGgLQAGgLAFgMQAOggAMgfQAJgYAJgYQAVg7AygiQAxgiA5A8QAsAtAMA3QAKAygkAvQgVAagGgTQgRg7giAnQgEgQgCgVQgCgTgPgKQg0gjgKBSQgGAxgjAhAiSAkQAPACAPgBQAugEAxgGQACAAACAAQAEgBAEAAQAigDAlALQAHACAGADQAVAHASAMQAQALAPAPQAKALAKANQADAEADAGQAhAzgGA4QgCAUgXAFQg6AKgIg5QgpgCgOgrQAJgDAJgHQgOAEgFABABpC/QAAAGACAGQAJABAKgBAA0CeQgJACgLgDQgMgEgOgNQghgfgbASQgQAKgNAZ");
	this.shape_17.setTransform(-105.6,-13.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#996633").s().p("ABrDLIAJAAIAKAAIgKAAIgJAAIgCgMIACAMQgpgCgOgrQAJgDAJgHIgTAFIABAFQgJACgLgDQgMgEgOgNQghgfgbASQgQAKgNAZIg8gfIgWgOIgBAAQAIgFAIgLQANgRgCgOIgHgiQAPACAPgBQAugEAxgGIAEAAIAIgBQAigDAlALIANAFQAVAHASAMQAQALAPAPQAKALAKANIAGAKQAhAzgGA4QgCAUgXAFIgRABQgqAAgHgwgAiQAfIgygfQAAgEgEgFIAAgCIALgXIAag/IASgwQAVg7AygiQAxgiA5A8QAsAtAMA3QAKAygkAvQgVAagGgTQgRg7giAnQgEgQgCgVQgCgTgPgKQg0gjgKBSQgGAxgjAhIgEgEg");
	this.shape_18.setTransform(-105.6,-13.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.3,1,1).p("AjGgLQAGgLAFgMQAOggAMgfQAJgYAJgYQAVg7AygiQAxgiA5A8QAsAtAMA3QAKAygkAvQgVAagGgTQgRg7giAnQgEgQgCgVQgCgTgPgKQg0gjgKBSQgGAxgjAhAiSAkQAPACAPgBQAugEAxgGQACAAACAAQAEgBAEAAQAigDAlALQAHACAGADQAVAHASAMQAQALAPAPQAKALAKANQADAEADAGQAhAzgGA4QgCAUgXAFQg6AKgIg5QAJABAKgBABrDLQgpgCgOgrQgJACgLgDQgMgEgOgNQghgfgbASQgQAKgNAZAAzCZQAFgBAOgEQgJAHgJADABpC/QAAAGACAG");
	this.shape_19.setTransform(-105.6,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_13},{t:this.shape_16}]},2).to({state:[{t:this.shape_18},{t:this.shape_17}]},2).to({state:[{t:this.shape_13},{t:this.shape_16}]},2).to({state:[{t:this.shape_15},{t:this.shape_19}]},2).wait(15));

	// Layer 2
	this.instance = new lib.Tween38("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(16.5,-156.7,0.999,0.999,-21.5,0,0,39,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:48.9,y:-156.6},4).to({scaleX:1,scaleY:1,rotation:-21.5,y:-156.7},5).wait(16));

	// Layer 3
	this.instance_1 = new lib.Tween40("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(88,-161.5,0.998,0.998,44.6,0,0,-17,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-18.6},4).to({scaleX:1,scaleY:1,rotation:44.6},5).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.9,-229.3,398.2,292.8);


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


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank, new cjs.Rectangle(0.1,0,65,34), null);


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


(lib.animibirdone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(19));

	// Layer 2
	this.instance = new lib.Tween44("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-9.5,-35.4,1,1,0,0,0,30.7,5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AkdAqQABABABACQAEASAFASQgggVgkgiQgNgNgHgLQgGgJgFgKQgPgkAQgcQACgDACgEQAEgDAEgCQAGgDAGgDQAFAsAhAVQAGAFAHADQAJAFALAEQAkANAsgIQAQgCARgDQAtgIAtgKQA4gNA5gQQAogKAqgDQAKAAALgBQAIAAAJAAQBAACAtAgQAuAfAoAdAi2AzQAAAKABAKQAAACABACQgHgCgIgCAhSBFQgEAHgFAHQgnAEgygMQAEAggggWQghgXgpgTQgBAAgCgBQgIgEgIgDAhfBBQAHACAGACQAIgLAEgHAgCBHQgEADgFADQgIACgIAAQgYABgfgLAgCBHQgJgEgJgGAkiAZQAAAJAFAIAFkAQQAJAGAQAAIhRAnIAAAaQglAVg1gOQgXgGgVgJQgNgFgLgGQgMgGgMgIQADgEACgEAB2A2QgNATgUAGQgrALgsgTAAOAuQgGAPgKAK");
	this.shape.setTransform(-40.3,-40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ADSBeQgXgGgVgJIgYgLIgYgOIAFgIIgFAIQgNATgUAGQgrALgsgTQAKgKAGgPQgGAPgKAKIgSgKIASAKIgJAGIgQACQgYABgfgLQAIgLAEgHQgEAHgIALIgNgEIANAEIgJAOQgnAEgygMQAEAggggWQghgXgpgTIgDgBIACADQAEASAFASQgggVgkgiQgNgNgHgLQgGgJgFgKQgPgkAQgcIAEgHIAIgFIAMgGQAEAsAiAVIANAIQAJAFALAEQAkANAsgIIAhgFQAtgIAtgKQA4gNA5gQQAogKAqgDIAVgBIARAAQBAACAtAgIBWA8IACAAQAJAGAQAAIhRAnIAAAaQgWANgcAAQgSAAgWgGgAi0BLIgBgEIgBgNIAAgHIAAAHIABANIABAEIgPgEIAPAEgAkdAqQgFgIAAgJQAAAJAFAIIgQgHIAQAHIAAAAgAhSBFIAAAAgAkdAqIAAAAg");
	this.shape_1.setTransform(-40.3,-40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.shape_1},{t:this.shape}]},18).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-23.3,y:-35.5},3).to({scaleX:1,scaleY:1,rotation:0,y:-35.4},3).to({_off:true},18).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.3,1,1).p("AhjAfQAYgfAtgJQAwgLBAgDIAAAAIABAAIAAABIABgBQADgDADgDQAIgGAIgEAhqAoQABgCABgB");
	this.shape_2.setTransform(-14,-38.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.3,1,1).p("AEmoCQACABACACIAAAAQADABACABQAvAdBEgJQAZgCAZgIQA4gSAqgbQALgJAIgHQgEAKgFAKQgMAUgUARQAdgQAngLQgQAigqAdQAYACAUgFQghAsg4AaQg4AbhHgEQg6gDgvgRQAHgIAHgHAEmoCQgFACgFABACBouQAOgGAPgCQADAAADAAQAXAAAXALQAuAUAmAVACwkFIgCAAQgEgBgFgBQAGgBAFADQAUABAYgJQAJgDAEgKQgFgCgFgCADIlWQAYAMAGATQAGASgDALQAVAMAXAbQAUAXAagHQA/gSAhAdQgnAAgdAKQALAMgOAIQgOgGgHABQgYAHgCAKQgCAIANAJAEVmNQgNANgOAPQgTAUgfAHQgYAFgfgCAB5j5QAcASAhAQQArAWAjAgQglgJgogIQAZAYAWAXQgigEgagNQAOAoAGAdQgXgmgPgrQgTg4g1gRQALAAAMgEQANgDAFgJQgFgEgFgDACwkFQAtAYAlAZQAaARARAVAJmFvQAOghgBgpQgChCgngiQgggdgqgWQgDgBgCgCQgBABgCAAQgmAKgeARQg6AdgygnQgigagjgGQhFgLgiAiQgmAkhEgWQgsgNgmgYQgEgCgDgCQAIgGAHgGQgNgEgQgDQg7gLgzgaQgqgWgtgcQgwgdgGg2QgFg9gOg9QgMg5gygLQgFADgFACQg0AWhCgIQAugVAfgdQgNgOgXgGQgBAAgCgBQgKACgKACQgrAJgbAaQgrAqg9gYAICCKQAPAFAQAFQA3AOAlAjQAwAsgWA1QgRAsggAdQgCAGgCAFQgGALgHAKQgcApgSAxQATA7A0APQgUAFgmgCQgjgRAWg8AgDBdQAVgQAXgPQApgbA4gDQBDgBAcAtQAFAIATgBQA1gDApgnQAigiBEgCQBIgDgIBNQgEAggHAYQAEACAEABQgEABgDAAAH5CKQgEgBgEgEQAFABAEABQgBACAAABQABABABAAAH4CMQAAgBABgBAmkkwQACgDADgEQACgEACgEQAAgDAAgEQAHg0AjgZQApgdBCASQBCARAsgbQAqgZAbgeQABgBABgBQACgEACgDAmkkwQgWgJgeADQgBAAgCAAAANkAQgSAEgUADQghAGgqgCQg3gDgygdQgVgNgSgCQgxgHgtATQA0ARAGBCQAFA0ASAzQASAtAcApQAdAqAyAVQAvAUA3APQAPAEAMgBQgLAIgKAIQAKADAIADAl0k4QA/ACgmgdQgugVAVAwgAmkkwQAEACAFACAm0khQAFgDADgDQAEgEAEgFAmBkCQARgHASgKQAGgCAGgDQgHgBgGgBABpofIgBAAQAEgDAEgDAB8kRQABADAAADQAAALgEAHAB8kRQgHgDgHgDQgWgLgOgQAANkAQAPgDAPgEAAHkHQADAEADADABQjpQgpADgagaAAUBVQgLAHgMABAClkHQgXgEgSgG");
	this.shape_3.setTransform(-16.3,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPARQgVgwAtAVQAjAbgyAAIgJAAg");
	this.shape_4.setTransform(-52,-19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF66").s().p("AHSG2QgkgQAWg9QATA7A1AQQgOADgXAAIgVgBgAIQClQgChCgngiQgggdgqgWIACgEIAgAKQA2AOAmAjQAvAsgWA2QgRAsgfAdQANgigBgpgADlAdQghgagjgFQhFgLgjAhQglAkhEgVQgsgNgngYIAJgPIgegIQg7gLgygaQgqgWgugcQgvgegGg2QgGg9gNg8QgNg6gxgKIAigSIAMgEQA0AQAHBCQAEA1ATAyQARAtAcApQAdAsAyAVQAvATA4APQAOAEAMgBQAOgBALgGQgLAGgOABIAugfQAogbA4gCQBCgBAcAsQAGAIASgBQA1gDApgnQAjghBDgDQBIgDgHBNQgEAggIAXIgIgCQADAEAEABIAAADQgmAKgfAQQgYANgYAAQgfAAgdgXgAh6gRIASAFIgSgFIAUgRIgUARIAAAAgAo6m1IAAAAQAdgEAWAJIgHAJIgIAHQgNgPgXgGg");
	this.shape_5.setTransform(-6.5,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9966").s().p("AhgAUQgTg3g2gQQAMgBAMgDQANgEAFgJQAcASAhAQQArAWAiAfIhMgQIAvAuQgjgEgZgMQAOAoAFAdQgWgmgPgsgAAJgfQgkgZgtgYQATACAYgJQAKgEADgKQAVANAXAaQAUAXAagHQA+gRAiAcQgnAAgeAKQALAMgOAIQgOgGgGABQgZAIgBAIQgRgTgagSg");
	this.shape_6.setTransform(8.6,-4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgjCPIAegHIgeAHIgGgHIAGAHIgnAHQghAGgqgCQg3gDgygcQgVgOgSgCQgxgHgtATIgNgCIANACIgMAFIgjARIgKAFQg0AWhCgIQAugVAfgdIAIgGIAIgJIAFgHIAEgIIAAgHQAHg0AjgYQApgdBCASQBCAQAsgaQAqgZAbgeIAAAAIABAAIABgCIAEgHQAZgfAtgJQAxgMA/gDIABABIAAAAIAGgHQAJgFAIgEQAOgGAPgCIAGAAQAXAAAXALQAuAUAmAVIgKADIAKgDIAEADIAAAAIAFACQAvAdBEgJQAZgCAZgIQA4gSAqgbIAKAEQgMAUgUARQAdgQAngLQgQAigqAdQAYACAUgFQghAsg4AaQg5AahGgDQg6gEgvgRIAOgOIgOAOIgbAcQgTAUgfAHQAYAMAGATQAGASgDALIgKgEIAKAEQgEAKgJAEQgYAIgUgBQgFgDgGABQgXgDgSgHIABAGQAAALgEAHIgKgHIAKAHQgFAJgNADQgMAEgLABIgIAAQgjAAgXgYgAA9B4IAOAGIgOgGQgWgLgOgQQAOAQAWALgAnMBjIgJgEIAJAEgAmlBXQA/ADgmgeQgOgHgIAAQgSAAAPAigAB0A9QAQAAAOgDIACAAIADgBIgDABIgCAAQgOADgQAAIAAAAIgBAAIgRgBIgCAAIACAAIARABIABAAIAAAAgAmDB3IAAAAgAA5iOIgBgBIgBAAIAIgGIgGAHg");
	this.shape_7.setTransform(-11.4,-26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.3,1,1).p("AEmoCQACABACACIAAAAQADABACABQAvAdBEgJQAZgCAZgIQA4gSAqgbQALgJAIgHQgEAKgFAKQgMAUgUARQAdgQAngLQgQAigqAdQAYACAUgFQghAsg4AaQg4AbhHgEQg6gDgvgRQAHgIAHgHAEmoCQgFACgFABABwolQAJgFAIgEQAOgGAPgCQADAAADAAQAXAAAXALQAuAUAmAVAClkHQAGgBAFADIgCAAQgEgBgFgBgADIlWQAYAMAGATQAGASgDALQAVAMAXAbQAUAXAagHQA/gSAhAdQgnAAgdAKQALAMgOAIQgOgGgHABQgYAHgCAKQgCAIANAJACwkFQAUABAYgJQAJgDAEgKQgFgCgFgCAEVmNQgNANgOAPQgTAUgfAHQgYAFgfgCAB5j5QAcASAhAQQArAWAjAgQglgJgogIQAZAYAWAXQgigEgagNQAOAoAGAdQgXgmgPgrQgTg4g1gRQALAAAMgEQANgDAFgJQgFgEgFgDAEtiuQgRgVgagRQglgZgtgYAJmFvQAOghgBgpQgChCgngiQgggdgqgWQgDgBgCgCQgBABgCAAQgmAKgeARQg6AdgygnQgigagjgGQhFgLgiAiQgmAkhEgWQgsgNgmgYQgEgCgDgCQAIgGAHgGQgNgEgQgDQg7gLgzgaQgqgWgtgcQgwgdgGg2QgFg9gOg9QgMg5gygLQARgHASgKQAGgCAGgDQgHgBgGgBAICCKQAPAFAQAFQA3AOAlAjQAwAsgWA1QgRAsggAdQgCAGgCAFQgGALgHAKQgcApgSAxQATA7A0APQgUAFgmgCQgjgRAWg8AgDBdQAVgQAXgPQApgbA4gDQBDgBAcAtQAFAIATgBQA1gDApgnQAigiBEgCQBIgDgIBNQgEAggHAYQAEACAEABQgEABgDAAAH5CKQgEgBgEgEQAFABAEABQgBACAAABQABABABAAAH4CMQAAgBABgBAmkkwQACgDADgEQACgEACgEQAAgDAAgEQAHg0AjgZQApgdBCASQBCARAsgbQAqgZAbgeQABgBABgBQACgEACgDQAZgfAtgKQAwgLBAgDIAAAAAnbk2QgKACgKACQgrAJgbAaQgrAqg9gYAnbk2QACABABAAQAXAGANAOQAFgDADgDQAEgEAEgFQgWgJgeADQgBAAgCAAgAANkAQgSAEgUADQghAGgqgCQg3gDgygdQgVgNgSgCQgxgHgtATQA0ARAGBCQAFA0ASAzQASAtAcApQAdAqAyAVQAvAUA3APQAPAEAMgBQgLAIgKAIQAKADAIADAmkkwQAEACAFACAl0k4QA/ACgmgdQgugVAVAwgAmBkCQgFADgFACQg0AWhCgIQAugVAfgdABwolQgDADgDAEIAAAAIAAAAIgBgBIgBAAQAEgDAEgDgAhTnfQABgBABgBAB8kRQABADAAADQAAALgEAHAB8kRQgHgDgHgDQgWgLgOgQAANkAQAPgDAPgEAAHkHQADAEADADABQjpQgpADgagaAAUBVQgLAHgMABAB8kRQASAGAXAE");
	this.shape_8.setTransform(-16.3,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgjCPIAegHIgeAHIgGgHIAGAHIgnAHQghAGgqgCQg3gDgygcQgVgOgSgCQgxgHgtATIgNgCIANACIgMAFIgjARIgKAFQg0AWhCgIQAugVAfgdIAIgGIAIgJIAFgHIAEgIIAAgHQAHg0AjgYQApgdBCASQBCAQAsgaQAqgZAbgeIAAAAIABAAIABgCIAEgHQAZgfAtgJQAxgMA/gDIABABIAAAAIAAAAIgBgBIgBAAIAIgGIgGAHIAGgHQAJgFAIgEQAOgGAPgCIAGAAQAXAAAXALQAuAUAmAVIgKADIAKgDIAEADIAAAAIAFACQAvAdBEgJQAZgCAZgIQA4gSAqgbIAKAEQgMAUgUARQAdgQAngLQgQAigqAdQAYACAUgFQghAsg4AaQg5AahGgDQg6gEgvgRIAOgOIgOAOIgbAcQgTAUgfAHQAYAMAGATQAGASgDALIgKgEIAKAEQgEAKgJAEQgYAIgUgBQgFgDgGABQgXgDgSgHIABAGQAAALgEAHIgKgHIAKAHQgFAJgNADQgMAEgLABIgIAAQgjAAgXgYgAA9B4IAOAGIgOgGQgWgLgOgQQAOAQAWALgAnMBjIgJgEIAJAEgAmlBXQA/ADgmgeQgOgHgIAAQgSAAAPAigAB0A9QAQAAAOgDIACAAIADgBIgDABIgCAAQgOADgQAAIAAAAIgBAAIgRgBIgCAAIACAAIARABIABAAIAAAAgAmDB3IAAAAg");
	this.shape_9.setTransform(-11.4,-26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.3,1,1).p("AEmoCQACABACACIAAAAQADABACABQAvAdBEgJQAZgCAZgIQA4gSAqgbQALgJAIgHQgEAKgFAKQgMAUgUARQAdgQAngLQgQAigqAdQAYACAUgFQghAsg4AaQg4AbhHgEQg6gDgvgRQAHgIAHgHAEmoCQgFACgFABABwolQAJgFAIgEQAOgGAPgCQADAAADAAQAXAAAXALQAuAUAmAVACwkFIgCAAQgEgBgFgBQAGgBAFADQAUABAYgJQAJgDAEgKQgFgCgFgCADIlWQAYAMAGATQAGASgDALQAVAMAXAbQAUAXAagHQA/gSAhAdQgnAAgdAKQALAMgOAIQgOgGgHABQgYAHgCAKQgCAIANAJAEVmNQgNANgOAPQgTAUgfAHQgYAFgfgCAB5j5QAcASAhAQQArAWAjAgQglgJgogIQAZAYAWAXQgigEgagNQAOAoAGAdQgXgmgPgrQgTg4g1gRQALAAAMgEQANgDAFgJQgFgEgFgDACwkFQAtAYAlAZQAaARARAVAJmFvQAOghgBgpQgChCgngiQgggdgqgWQgDgBgCgCQgBABgCAAQgmAKgeARQg6AdgygnQgigagjgGQhFgLgiAiQgmAkhEgWQgsgNgmgYQgEgCgDgCQAIgGAHgGQgNgEgQgDQg7gLgzgaQgqgWgtgcQgwgdgGg2QgFg9gOg9QgMg5gygLQARgHASgKQAGgCAGgDQgHgBgGgBAICCKQAPAFAQAFQA3AOAlAjQAwAsgWA1QgRAsggAdQgCAGgCAFQgGALgHAKQgcApgSAxQATA7A0APQgUAFgmgCQgjgRAWg8AgDBdQAVgQAXgPQApgbA4gDQBDgBAcAtQAFAIATgBQA1gDApgnQAigiBEgCQBIgDgIBNQgEAggHAYQAEACAEABQgEABgDAAAH5CKQgEgBgEgEQAFABAEABQgBACAAABQABABABAAAH4CMQAAgBABgBAmkkwQACgDADgEQACgEACgEQAAgDAAgEQAHg0AjgZQApgdBCASQBCARAsgbQAqgZAbgeQABgBABgBQACgEACgDQAZgfAtgKQAwgLBAgDIAAAAAnbk2QgKACgKACQgrAJgbAaQgrAqg9gYAnbk2QACABABAAQAXAGANAOQAFgDADgDQAEgEAEgFQgWgJgeADQgBAAgCAAgAANkAQgSAEgUADQghAGgqgCQg3gDgygdQgVgNgSgCQgxgHgtATQA0ARAGBCQAFA0ASAzQASAtAcApQAdAqAyAVQAvAUA3APQAPAEAMgBQgLAIgKAIQAKADAIADAmkkwQAEACAFACAl0k4QA/ACgmgdQgugVAVAwgAmBkCQgFADgFACQg0AWhCgIQAugVAfgdABwolQgDADgDAEIAAAAIAAAAIgBgBIgBAAQAEgDAEgDgAhTnfQABgBABgBAB8kRQABADAAADQAAALgEAHAB8kRQgHgDgHgDQgWgLgOgQAANkAQAPgDAPgEAAHkHQADAEADADABQjpQgpADgagaAAUBVQgLAHgMABAClkHQgXgEgSgG");
	this.shape_10.setTransform(-16.3,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_9},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_8}]},3).to({state:[{t:this.shape_9},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_10}]},3).to({state:[{t:this.shape_9},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_8}]},18).wait(1));

	// Layer 3
	this.instance_1 = new lib.Tween47("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.1,-41.4,1,1,0,0,0,-21.1,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.3,1,1).p("ADPhAQgEABgEAAQgQACgJAFAkNBtQAdghAjgjQAHgHAHgHQAjgdAngVQAsgXBBgHQA+gGA7gUQA5gSAxgRQAlgNAOghQADA1gnAgQgKAIgRADQgYAphAAKQgBAAgBABQgfAFgigCAAWAwQgUAEgQAEAAWAwQgWAOgVAQQgVARgUAUQgcAegrAOQgDABgDABAB3gNQgWA0g3AHQgKABgKAB");
	this.shape_11.setTransform(27.2,-54);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AjfB4QgYgLgWAAQAdghAjgjIAOgOQAjgdAngVQAsgXBBgHQA+gGA7gUIBqgjQAlgNAOghQADA1gnAgQgKAIgRADIgIABQgQACgJAFQAJgFAQgCIAIgBQgYAphAAKIgCABQgVADgWAAIgBAAIAAAAIgVAAIAVAAIAAAAIABAAQAWAAAVgDIACgBQgWA0g3AHIgUACQgUAEgQAEQAQgEAUgEQgWAOgVAQQgVARgUAUQgcAegrAOIgGACQgmgVgugUgAAWAwIAAAAg");
	this.shape_12.setTransform(27.2,-54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.shape_12},{t:this.shape_11}]},18).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:24.3,y:-41.5},3).to({scaleX:1,scaleY:1,rotation:0,y:-41.4},3).to({_off:true},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.2,-71.1,139.5,142.3);


(lib.animbirdtwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(9));

	// Layer 2
	this.instance = new lib.Tween50("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2,-52.7,1,1,0,0,0,27.9,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:27.8,rotation:30,x:1.9},3).to({regX:27.9,rotation:0,x:2},3).wait(9));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AB0AOQAAAAABAAABrAHQgWgOgSgZQgagjgUgcAg7gtQAJAkARArQAJAVAJASAgeBgIgBgBAgiBbQgOgOgVgWQgZgZgTgkQgBgDgCgD");
	this.shape.setTransform(-10.3,-47.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("AGBlIQAJADAHAFAGBlIQAJgHANgFABPmdQALAKAHAMQAeArA9AHQBBAFBCgBQArAAAXAJQgbAVAMApQgHApgwAVQgBglg0gDAhBnHQAFgBAEgBQgBgGAAgFQgEhCgxgWQgOgGgMAFQgmASgrAEQgIAAgHABQgFAAgEAAQgBgBgBAAIgBAAQgmgWgsAEQAAAGgBACQAVAhAgAWQADgEADgEAg4nJQAAAEABAFAg4nJQAWgDAUACQAhADAbAQQATAMAOAOQADgEAEgDAB0i/QAQgCACgHQABgDgCgFQgEgIgPgMQgKgGgBgPQgEABgDABQgXADgWACQANAaAOAZQAXACAPgCQApAPARAoQAAABAAABQgogPgpgRQgLgFgIgIQAEgBAEgBQgCgFgCgFQgFAAgEgBACxh/QgBgDgCgEQAHADAHACQgGABgFABQAFANAEANQAEAQAFAMQAFgYAAggQAGAGAHAFQANAKAFAFQgGgJgHgJQgHgMgHgNQAGABAMgMQgwgQgogbAB2iBQAYAGAggEQACAAABAAABAiyQACABADABQArASACA7QAAAZAJAVQgGgWAAgYQAAgPABgPQAdAKAUAKABnj5QA8gIA0AYQAuAVAuAYQADABADABQADgKgBgIAgwjvQA1AeArAZQABABACABQAGADAHABAgwjvQALACANAAQAlgBAmgEAgwjvQgngGgZgdIAAAAQgFgDgEgEABKizQgCAAgCABQgDAAgDAAAgzBpQAGAAAHAAAgzBpQAmgkAqghQApghA7gMQA+gNBBgCQAegBAaAHQghAkgQAzQgXBFBBAWQA0ATA+AQQA8AQA1AgQAGAEAHAEQAvAhATAsQAXAzgFA8QgTgbgjgQQgOgGgQgFQgEgBgEgBQg9gPg8AUQg5AUg3ASQgfALgiABQgOABgPgBQgfgQgegRQgvgbg7ADQgGAAgFABAkHglQABAAACAAQA6AMAXAyQAZA3A+ATQAPAFAUABQACAAAEAAAHVAwQAmAQAmATQASAKASAKQAOAHgBASAGlBfQBKAPAPA8ADeidQAfAKAgAIQgfAGgggYgAJ1G3QABABABABQgOAVgqgFQgJgBgKgCQgGgBgFgBQgxgJguANQgyANgwAOQgkAMghgTQgVgMgYgMQgDgCgEgCQgLgFgMgFQABAAABAAQALAFAKAFAm1KJQAVABARgCQBAgJA7gUQA0gTAwgWQAvgWAzgdQAugaA9gLQA9gMAnAYACLIEQgIAQgjARQguAVg5ADQgtADgsAZQg2Agg4AkQgwAfg+gIQhKgJg2giQADAAAEAAQAGgOADgqQAAgDABgDQABgDABgIQAAgEAAgGQAEhDg7gXQg8gYgLg5QgHgeAQgWQAPgUARgSQASgVAUgTQAegdANgmQARgxgGhAQgGg4A9gcQAggOAfgNQAFgCAFgCQACgCABgCQABgBABgBQAAgBABgCQACgBABgDQACgDADgFQADgFADgHQAcg1gMg/QAAgBAAgBQgBgHgEgEACLIEQgIgIgCgGQAGAEAFAEQAAADgBADgAArF9QAfArAjAsQAMAPAIATAjPpRQAAgCAAgCQAAgDABgEQAAgDABgCQgFgRgKgRQgRgdAkgNQAmgNAoAJQg9gFgRA7QgDAMgBAOQADAPgCAQQAAADgBADQgDASgJATAjMpCQgDgHAAgIQgIAfgcAaIgBABAlHohQgCACgCABQgBgEAAgGQADAAADgBAimn8QgvACAlAZQAWgdgMACgAj+ndQgFATgLAQQgkA1ASA3AjPmAQgPgVgGgfQgFgcgVgNAkSnqQAJAHAKAFQAAABABAAQACgHAAgHAlPkrQgDACgDACQgCACgCABQAAgEABgFQADg5AWgyQATguAagkAp2DsQgBhAAYg6QAHgPAIgLAj0jXQACAEACADQAWAngIA1QgHAtgaAdQgFACgFACQgCAAgCABQAGADAEgDAkDjBQgCgCgCgCAkNgmQADAAADABAkDgqQgCACgBACQgBAAAAABAkRglQgDABgCABQgCABgCAAQgBABgBAAQgBABgBAAQgCABgCABAkjA3QgOA3AUBCQARA9AlAnApAEUQAKgSAjgsQAWgbARgaAjuBlQAXA7AzAj");
	this.shape_1.setTransform(12.5,-19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AAoAkIgJgbIALgBIgNgFIAAAGQgfAEgYgFQgCAPAAAOIgDAAQgBg6gsgSIABgCIAFgBQAHAIALAFIBRAgIgBgCQgQgogpgOQAQgDACgGQAnAbAwAQQgMALgGAAIAPAXIgGAEIgNgLQABAggGAYIgJgcg");
	this.shape_2.setTransform(27.1,-32.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKgMQANgCgWAcQgkgYAtgCg");
	this.shape_3.setTransform(-5.2,-68.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AAjC+QgHAAgGgEIgCgBQgqgag3gdIAGABIAOAAIAAAAIAAAAIACAAIACAAQAnAAAkgEQgkAEgnAAIgCAAIgCAAIAAAAIAAAAIgOAAIgGgBQgngGgYgdIAAAAIAAgBIgKgGQgWgPgSgZIgug+QgPgVgGgfQgEgcgWgNIADgPIgDAPIgBgBIgTgMIAHgIIgHAIQgfgWgWghQACgDgBgFQAtgEAmAVIAAAAIADACIAIAAIAQgCQArgDAlgSQANgFANAGQAxAWAEBCIABALIgIACIAIgCQAWgDAUACQAjACAaARQATAMAOAOQAKAKAIAMQAdAqA9AGQBCAGBCgBQArAAAXAJQgbAUALAqQgGApgwAUQgBgkg0gEQA0AEABAkIgIAQIhcgsQg1gYg8AIIgHABIgtAGIAtgGIAHgBQACAOAJAHQAPAMAEAIQACAFgBADQgCAHgQACQgOACgYgCIgbgzIAbAzIgJgBIAJABIAFAJIgIACIgFABIgDAAIgDAAgAhUhPIgBgIIABAIgAjDiKQguACAlAZQAUgbgKAAIgBAAgAEfCkIAAAAg");
	this.shape_4.setTransform(15.4,-56);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#99CCFF").s().p("AliK0QhKgJg3giIAHAAQAHgOACgqIABgGQACgDABgIIAAgKQAEhDg8gXQg7gYgMg5QgGgeAQgWQAPgUAQgSQASgVAVgTQAegdANgmQAQgxgGhAQgFg4A8gcQAggOAggNIAKgEIADgEIABgCIACgDIADgEIAFgIIAGgMQAcg1gMg/IgBgCQgBgHgDgEIgBgBIgEgEIgigkQgZgZgTglIAGgEIgJgCQADg5AWgyQAUguAZgkIAUAMIABABQgFATgLAQQglA1ASA3QAKAkARAsQAIAVAJASIAEAHQAWAngHA1QgIAtgZAdIgKAEIgFABQAHADADgDIADAAQA6AMAXAyQAZA3A/ATQAPAFATABIAGAAIAHAAIAHAAIgHAAIgHAAQAngkArghQAoghA6gMQA/gNBAgCQAfgBAaAHQghAkgRAzQgWBFBBAWQA0ATA9AQQA9AQA0AgIANAIQAvAhATAsQAXAzgEA8QgUgbgjgQQgOgGgQgFIgIgCQgZgHgaAAIAAAAIgBAAQgeAAgfAKIAAAAIgCAAIgCABIgCAAIgCABIhvAmQgfALgjABQAjgBAfgLIBvgmIACgBIACAAIACgBIACAAIAAAAQAfgKAeAAIABAAIAAAAQAaAAAZAHIAIACQAQAFAOAGQAjAQAUAbIACACQgPAVgqgFIgSgDIgMgCQgxgJgtANQgyANgxAOQgjAMgigTQgUgMgYgMIAAgOIgcAAQgfgQgegRQgwgbg7ADIgKABIAKgBQAgArAiAsQANAPAIATQACAGAHAIQgHAQgkARQgtAVg6ADQgsADgsAZQg2Agg5AkQglAYgvAAQgMAAgNgBgAnPKJQANAAAMgBIABAAQBAgJA6gUQA1gTAwgWQAugWA0gdQAtgaA/gLIACgBIAAAAIADAAQAQgDAPAAIAAAAIAAAAQAhAAAZAOIABAAIACABIACABIgCgBIgCgBIgBAAQgZgOghAAIAAAAIAAAAQgPAAgQADIgDAAIAAAAIgCABQg/ALgtAaQg0AdguAWQgwAWg1ATQg6AUhAAJIgBAAQgMABgNAAIgBAAIAAAAIgFAAIgHAAIAHAAIAFAAIAAAAIABAAgAlECwQASA9AkAnQgkgngSg9QgLgnAAgjQAAgYAFgXQgFAXAAAYQAAAjALAngAjLDDQgygjgYg7QAYA7AyAjgAk8gjIgEABIgDABIgBABIgEACIAEgCIABgBIADgBIAEgBIAEgCIgEACgAkXoWIgDgBIAAgBQAcgaAJgfQAAAIACAHIAAAGQgDASgJATIgQABIgIAAgAkCqDQgRgdAkgNQAmgNAoAJQg+gFgQA7IgFAaQgEgRgKgRg");
	this.shape_5.setTransform(16.4,-19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3,1,1).p("AGBlIQAJADAHAFAGBlIQAJgHANgFABPmdQALAKAHAMQAeArA9AHQBBAFBCgBQArAAAXAJQgbAVAMApQgHApgwAVQgBglg0gDAg4nJQAAAEABAFAhBnHQAFgBAEgBQgBgGAAgFQgEhCgxgWQgOgGgMAFQgmASgrAEQgIAAgHABQgFAAgEAAQgBgBgBAAIgBAAQgmgWgsAEQAAAGgBACQAVAhAgAWQADgEADgEAg4nJQAWgDAUACQAhADAbAQQATAMAOAOQADgEAEgDABOi/QAXACAPgCQAQgCACgHQABgDgCgFQgEgIgPgMQgKgGgBgPQgEABgDABQgXADgWACQANAaAOAZQgFAAgEgBABKizQAEgBAEgBQgCgFgCgFAB0i/QApAPARAoQAAABAAABQACAEABADQgBAAgCAAQggAEgYgGQAdAKAUAKACuiGQgogPgpgRQgLgFgIgIQgCAAgCABQgDAAgDAAQACABADABQArASACA7QAAAZAJAVQgGgWAAgYQAAgPABgPACxh/QAFANAEANQAEAQAFAMQAFgYAAggQAGAGAHAFQANAKAFAFQgGgJgHgJQgHgMgHgNQAGABAMgMQgwgQgogbABnj5QA8gIA0AYQAuAVAuAYQADABADABQADgKgBgIACuiGQAHADAHACQgGABgFABAgwjvQA1AeArAZQABABACABQAGADAHABAgwjvQALACANAAQAlgBAmgEAhvkSQgBAAAAAAIAAAAQAZAdAnAGAhwkSQgFgDgEgEQgWgPgSgZQgagjgUgcQgPgVgGgfQgFgcgVgNQACgHAAgHAgzBpQAGAAAHAAAgzBpQAmgkAqghQApghA7gMQA+gNBBgCQAegBAaAHQghAkgQAzQgXBFBBAWQA0ATA+AQQA8AQA1AgQAGAEAHAEQAvAhATAsQAXAzgFA8QgTgbgjgQQgOgGgQgFQgEgBgEgBQg9gPg8AUQg5AUg3ASQgfALgiABQgOABgPgBQALAFAKAFQgLgFgMgFQABAAABAAQgfgQgegRQgvgbg7ADQgGAAgFABAkHglQABAAACAAQA6AMAXAyQAZA3A+ATQAPAFAUABQACAAAEAAAHVAwQAmAQAmATQASAKASAKQAOAHgBASAGlBfQBKAPAPA8ADeidQAgAYAfgGQgggIgfgKgAJ1G3QABABABABQgOAVgqgFQgJgBgKgCQgGgBgFgBQgxgJguANQgyANgwAOQgkAMghgTQgVgMgYgMQgDgCgEgCACBH2QgngYg9AMQg9ALguAaQgzAdgvAWQgwAWg0ATQg7AUhAAJQgRACgVgBQAGgOADgqQAAgDABgDQABgDABgIQAAgEAAgGQAEhDg7gXQg8gYgLg5QgHgeAQgWQAPgUARgSQASgVAUgTQAegdANgmQARgxgGhAQgGg4A9gcQAggOAfgNQAFgCAFgCQACgCABgCQABgBABgBQAAgBABgCQACgBABgDQACgDADgFQADgFADgHQAcg1gMg/QAAgBAAgBQgBgHgEgEIAAgBQgCgCgCgCQgOgOgVgWQgZgZgSglQgCACgCABQAAgEABgFQADg5AWgyQATguAagkQAJAHAKAFQAAABABAAQgFATgLAQQgkA1ASA3QAJAkARAsQAJAVAJASQACAEACADQAWAngIA1QgHAtgaAdQgCACgBACQgBAAAAABQgEADgGgDQACgBACAAQADAAADABACLIEQgIAQgjARQguAVg5ADQgtADgsAZQg2Agg4AkQgwAfg+gIQhKgJg2giQADAAAEAAACBH2QACAGAIAIACBH2QAGAEAFAEQAAADgBADAArF9QAfArAjAsQAMAPAIATAjPpRQAAgCAAgCQAAgDABgEQAAgDABgCQgFgRgKgRQgRgdAkgNQAmgNAoAJQg9gFgRA7QgDAMgBAOQADAPgCAQQAAADgBADQgDASgJATAjMpCQgDgHAAgIQgIAfgcAaIgBABAlHohQgCACgCABQgBgEAAgGQADAAADgBAiwnhQAWgdgMACQgvACAlAZgAp2DsQgBhAAYg6QAHgPAIgLAlPkrQgDACgDACQgCgDgBgDAkNgmQAFgCAFgCAkRglQgDABgCABQgCABgCAAQgBABgBAAQgBABgBAAQgCABgCABAkjA3QgOA3AUBCQARA9AlAnApAEUQAKgSAjgsQAWgbARgaAjuBlQAXA7AzAj");
	this.shape_6.setTransform(12.5,-19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#99CCFF").s().p("AliK0QhKgJg3giIAHAAIAHAAIAFAAIAAAAIABAAQANAAAMgBIABAAQBAgJA6gUQA1gTAwgWQAugWA0gdQAtgaA/gLIACgBIAAAAIADAAQAQgDAPAAIAAAAIAAAAQAhAAAZAOIABAAIACABIACABQACAGAHAIQgHAQgkARQgtAVg6ADQgsADgsAZQg2Agg5AkQglAYgvAAQgMAAgNgBgAnQKJIgFAAIgHAAQAHgOACgqIABgGQACgDABgIIAAgKQAEhDg8gXQg7gYgMg5QgGgeAQgWQAPgUAQgSQASgVAVgTQAegdANgmQAQgxgGhAQgFg4A8gcQAggOAggNIAKgEIADgEIABgCIACgDIADgEIAFgIIAGgMQAcg1gMg/IgBgCQgBgHgDgEIgBgBIgEgEIgigkQgZgZgTglIAGgEIgJgCQADg5AWgyQAUguAZgkIAUAMIABABQgFATgLAQQglA1ASA3QAKAkARAsQAIAVAJASIAEAHQAWAngHA1QgIAtgZAdIgKAEIgFABIgEACIgEABIgDABIgBABIgEACIAEgCIABgBIADgBIAEgBIAEgCQAHADADgDIADAAQA6AMAXAyQAZA3A/ATQAPAFATABIAGAAIAHAAIAHAAIgHAAIgHAAQAngkArghQAoghA6gMQA/gNBAgCQAfgBAaAHQghAkgRAzQgWBFBBAWQA0ATA9AQQA9AQA0AgIANAIQAvAhATAsQAXAzgEA8QgUgbgjgQQgOgGgQgFIgIgCQgZgHgaAAIAAAAIgBAAQgeAAgfAKIAAAAIgCAAIgCABIgCAAIgCABIhvAmQgfALgjABQAjgBAfgLIBvgmIACgBIACAAIACgBIACAAIAAAAQAfgKAeAAIABAAIAAAAQAaAAAZAHIAIACQAQAFAOAGQAjAQAUAbIACACQgPAVgqgFIgSgDIgMgCQgxgJgtANQgyANgxAOQgjAMgigTQgUgMgYgMIAAgOIgcAAQgfgQgegRQgwgbg7ADIgKABIAKgBQAgArAiAsQANAPAIATIgCgBIgCgBIgBAAQgZgOghAAIAAAAIAAAAQgPAAgQADIgDAAIAAAAIgCABQg/ALgtAaQg0AdguAWQgwAWg1ATQg6AUhAAJIgBAAQgMABgNAAIgBAAIAAAAgAlECwQASA9AkAnQgkgngSg9QgLgnAAgjQAAgYAFgXQgFAXAAAYQAAAjALAngAjLDDQgygjgYg7QAYA7AyAjgAkXoWIgDgBIAAgBQAcgaAJgfQAAAIACAHIAAAGQgDASgJATIgQABIgIAAgAkCqDQgRgdAkgNQAmgNAoAJQg+gFgQA7IgFAaQgEgRgKgRg");
	this.shape_7.setTransform(16.4,-19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAjC+QgHAAgGgEIgCgBQgqgag3gdIAGABIAOAAIAAAAIAAAAIACAAIACAAQAnAAAkgEQgkAEgnAAIgCAAIgCAAIAAAAIAAAAIgOAAIgGgBQgngGgYgdIAAAAIAAgBIgKgGQgWgPgSgZIgug+QgPgVgGgfQgEgcgWgNIADgPIgDAPIgBgBIgTgMIAHgIIgHAIQgfgWgWghQACgDgBgFQAtgEAmAVIAAAAIADACIAIAAIAQgCQArgDAlgSQANgFANAGQAxAWAEBCIABALIABAIIgBgIQAWgDAUACQAjACAaARQATAMAOAOQAKAKAIAMQAdAqA9AGQBCAGBCgBQArAAAXAJQgbAUALAqQgGApgwAUQgBgkg0gEQA0AEABAkIgIAQIhcgsQg1gYg8AIIgHABIgtAGIAtgGIAHgBQACAOAJAHQAPAMAEAIQACAFgBADQgCAHgQACQgOACgYgCIAFAJIgIACIgFABIgDAAIgDAAgAAxCyIgbgzIAbAzIgJgBIAJABIAAAAgAhdhVIAIgCIgIACgAjDiKQguACAlAZQAUgbgKAAIgBAAgAEfCkIAAAAg");
	this.shape_8.setTransform(15.4,-56);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.3,1,1).p("AGBlIQAJADAHAFAGBlIQAJgHANgFABPmdQALAKAHAMQAeArA9AHQBBAFBCgBQArAAAXAJQgbAVAMApQgHApgwAVQgBglg0gDAg4nJQAAAEABAFAhBnHQAFgBAEgBQgBgGAAgFQgEhCgxgWQgOgGgMAFQgmASgrAEQgIAAgHABQgFAAgEAAQgBgBgBAAIgBAAQgmgWgsAEQAAAGgBACQAVAhAgAWQADgEADgEAg4nJQAWgDAUACQAhADAbAQQATAMAOAOQADgEAEgDABOi/QAXACAPgCQAQgCACgHQABgDgCgFQgEgIgPgMQgKgGgBgPQgEABgDABQgXADgWACQANAaAOAZQgFAAgEgBABKizQAEgBAEgBQgCgFgCgFAB0i/QApAPARAoQAAABAAABQACAEABADQgBAAgCAAQggAEgYgGQAdAKAUAKACuiGQgogPgpgRQgLgFgIgIQgCAAgCABQgDAAgDAAQACABADABQArASACA7QAAAZAJAVQgGgWAAgYQAAgPABgPACxh/QAFANAEANQAEAQAFAMQAFgYAAggQAGAGAHAFQANAKAFAFQgGgJgHgJQgHgMgHgNQAGABAMgMQgwgQgogbABnj5QA8gIA0AYQAuAVAuAYQADABADABQADgKgBgIACuiGQAHADAHACQgGABgFABAgwjvQA1AeArAZQABABACABQAGADAHABAgwjvQALACANAAQAlgBAmgEAhvkSQgBAAAAAAIAAAAQAZAdAnAGAhwkSQgFgDgEgEQgWgPgSgZQgagjgUgcQgPgVgGgfQgFgcgVgNQACgHAAgHAgzBpQAGAAAHAAAgzBpQAmgkAqghQApghA7gMQA+gNBBgCQAegBAaAHQghAkgQAzQgXBFBBAWQA0ATA+AQQA8AQA1AgQAGAEAHAEQAvAhATAsQAXAzgFA8QgTgbgjgQQgOgGgQgFQgEgBgEgBQg9gPg8AUQg5AUg3ASQgfALgiABQgOABgPgBQALAFAKAFQgLgFgMgFQABAAABAAQgfgQgegRQgvgbg7ADQgGAAgFABAkHglQABAAACAAQA6AMAXAyQAZA3A+ATQAPAFAUABQACAAAEAAAHVAwQAmAQAmATQASAKASAKQAOAHgBASAGlBfQBKAPAPA8ADeidQAgAYAfgGQgggIgfgKgAJ1G3QABABABABQgOAVgqgFQgJgBgKgCQgGgBgFgBQgxgJguANQgyANgwAOQgkAMghgTQgVgMgYgMQgDgCgEgCACBH2QgngYg9AMQg9ALguAaQgzAdgvAWQgwAWg0ATQg7AUhAAJQgRACgVgBQAGgOADgqQAAgDABgDQABgDABgIQAAgEAAgGQAEhDg7gXQg8gYgLg5QgHgeAQgWQAPgUARgSQASgVAUgTQAegdANgmQARgxgGhAQgGg4A9gcQAggOAfgNQAFgCAFgCQACgCABgCQABgBABgBQAAgBABgCQACgBABgDQACgDADgFQADgFADgHQAcg1gMg/QAAgBAAgBQgBgHgEgEIAAgBQgCgCgCgCQgOgOgVgWQgZgZgSglQgCACgCABQAAgEABgFQADg5AWgyQATguAagkQAJAHAKAFQAAABABAAQgFATgLAQQgkA1ASA3QAJAkARAsQAJAVAJASQACAEACADQAWAngIA1QgHAtgaAdQgCACgBACQgBAAAAABQgEADgGgDQACgBACAAQADAAADABACLIEQgIAQgjARQguAVg5ADQgtADgsAZQg2Agg4AkQgwAfg+gIQhKgJg2giQADAAAEAAACBH2QACAGAIAIACBH2QAGAEAFAEQAAADgBADAArF9QAfArAjAsQAMAPAIATAjPpRQAAgCAAgCQAAgDABgEQAAgDABgCQgFgRgKgRQgRgdAkgNQAmgNAoAJQg9gFgRA7QgDAMgBAOQADAPgCAQQAAADgBADQgDASgJATAjMpCQgDgHAAgIQgIAfgcAaIgBABAlHohQgCACgCABQgBgEAAgGQADAAADgBAimn8QgvACAlAZQAWgdgMACgAp2DsQgBhAAYg6QAHgPAIgLAlPkrQgDACgDACQgCgDgBgDAkNgmQAFgCAFgCAkRglQgDABgCABQgCABgCAAQgBABgBAAQgBABgBAAQgCABgCABAkjA3QgOA3AUBCQARA9AlAnApAEUQAKgSAjgsQAWgbARgaAjuBlQAXA7AzAj");
	this.shape_9.setTransform(12.5,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_2},{t:this.shape_7},{t:this.shape_3},{t:this.shape_6}]},3).to({state:[{t:this.shape_8},{t:this.shape_2},{t:this.shape_7},{t:this.shape_3},{t:this.shape_9}]},3).wait(9));

	// Layer 3
	this.instance_1 = new lib.Tween53("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,-63.6,1,1,0,0,0,-16.7,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:13.7,scaleX:1,scaleY:1,rotation:-22.3},3).to({regY:13.6,scaleX:1,scaleY:1,rotation:0},3).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-95.2,137.2,146.5);


(lib.animbirdthree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(7));

	// Layer 3
	this.instance = new lib.Tween56("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.9,-72.5,1,1,0,0,0,-19,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:19,scaleX:1,scaleY:1,rotation:52.4,x:21.8},4).to({regY:18.9,scaleX:1,scaleY:1,rotation:0,x:21.9},4).wait(7));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("ABWATQgLgDgKgBQgagDgWgHQgvgNgugKQgEgBgFAE");
	this.shape.setTransform(25.7,-75.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("ADFncQA1gRAMg3QALgxAqgMQBDgUAnAvQATAYAMAYQAeBBAbhCQAUguA5AFQg/gZBUgOQAPgDAOgEQgPAAgOAAQgqAAglgBQgogBgIgdQgHgWgagLQgvgVg9gFQgDAAgEAAQgLgBgOABQACgCACgDQACgCACgDQAAgEAEgBAgrp0QAagSAMgeQAMgmAmgRQAKgFANgDQArgMAxADACprrQgEgBgDAAQgBAAAAAAQgBAAAAAAIAAAAQABAIABAJAA5nyQAEABAEABQAJADAOgBAh+mwQAFgEAEgDQAQgKAbgDQArgEAfgcQAXgWAiAIADrqMQgJAJgJAIADEnxQAAAKABALQgDABgEACADDlXQAUgtgLg3QgEgRgDgQADDlXQAYAaAZAVQAlAeAzAKQhDACg5gfQADApgLALQADg6gPgvQgCgJgDgIQACADADACQgBgDgBgDQgEgJgHgEQgkgagWghQAAgFAAgFQAAghAMgXABpm/QAFAKAHAJQgDAwgfAaQgBABgBABQAAgBABgBIABAAQAjAtAmAkQgpgYgWgQQARAbgEAXQgNgjgQgmQgWAWgOAZQAQglAYgdIAAAAIABABQAAgBAAAAQAEgSgKgUQgVgpAChAAC8lSQABgHgBgFQADAEAEADADQkdQAdAtgIAUQgLgjgKgegAhbFYQAOANAYAEQBCAJAlgnQAngpBKAOQBEANgbBKQgNAlABAoQAABCBSgHQBGgGAtgbQgIAMgEASQgFAOgHAHQgaAXhBgKQgcgFgbgHQg0gOAAhDQAAghAPgbQAlhChNgFQg6gFg3AbQgzAYg/gKAEjEfQAqAcACAzAD7EsQAIAxgDA0AimnFQgGAAgGABQgiAHgcgLQg2gXAjg2QgVgBgLANQgeAfgsAXIgDACQgFACgEACAgrp0QAFADAFADAimnFQgDgSgHgQQgbg5AignQAegkA7AFQAFABAFABQAPgHAMgJAiMoVQgQgBgDAOQgBADAAAEQAFACAFABQAHACAIAAQgJgCgBgIQAAgDAFgMgAiVoCQgCAAgHgEQAKADAAgEQAAABAAABQACADgDAAgAiHn8QgGgTABgGAmmgdQAEgIAAgIQABgkAHgbQAOg6AngfQAmgfA/gQQA7gPA1gYQAggPAEgcQAHhBglgeQgCACgDADQgTAVgMAeQgEgMAEgJQAIgWABgVQAAgMgBgMQAFgBAHAAAmmgdQABgIgBgIQACAAACAAQAYABATAHQAAAOAAAOAh+mwQgCgEgDgFAh+mwQAEAHAFAGQAoArgYA+QgVAxg+AUQg4ASg+ASQg2ARgKA7QgIAugBAyQAkANARAiQAXAugDBBQgBAogHAlQAWgiAvgOQA6gSAwAhQAoAbgCA3QgBAuAFAnQABAGABAGQACAMACALQABABABACQALAxgiApQggAnAOA7QAPA4gBBAQAAAEAAAEQAAAKACAPQgCgKgEgIAiKmlQAGgGAGgFAilmtQgQgCgUAEQhPASgHhMQgfgEgvAWAilmtQAEAAADABAnHHQQACgHABgIQAJg5AiglQAbgfgKguQgLg3gcgvQgdgyAXhBQAPguAAgsAnHHQQAJgDAUADQAdACAXAVQAlAjAsAfQgkARg5gYQgjgPgageQgQgRAAgJQgBgIAJgDgAp7H5QgCgsAdgeAoRHlQgFg9AXg7QAEgOAIgMAkhJJQAIgIAWAWQAmAkA2ASQAbAJAOAQQAFAFAEAHQAAABABACQABAIgCAKQgLA8g4ghQgEgDgEgCQgCgBgCgCQgBgBgBAAQgogWgcgbQgdgdgBgmQAAgWAHgGQgCgagCgG");
	this.shape_1.setTransform(1,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC33").s().p("AgGgFIANAAIAAAHIgGAEQgCgGgFgFg");
	this.shape_2.setTransform(-11,66.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9966").s().p("AACgrQABgHgCgFIAHAHQAZAaAZAVQAlAdAyAKQhDACg5gfQADApgLALQADg6gOgugAhsgpQgXAWgNAYQAQgkAXgdIABABIAAACIABgCQAjAtAmAjQgogXgXgQQASAagFAXQgMgigQgmg");
	this.shape_3.setTransform(19.7,-31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGADIABgDQAAAAABAAQAAAAAAAAQAAgBAAgBQAAAAAAgBIACgBQACAHAHACQgHAAgGgCg");
	this.shape_4.setTransform(-13.3,-53.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0033").s().p("AiTJ2IgHgFIgFgDIgCgBQgngWgdgbQgdgcAAgnQgBgWAHgGQgBgagDgFQgrgggmgiQgXgVgdgDIgPgBIAAAAIgBAAIgLABIgCAAIAEgPQAJg4AhgmQAbgegKgvQgKg3gcgvQgdgyAWhAQAPgtABgtQADgJABgIQABgkAGgbQAPg6AmgfQAngfA/gQQA7gPA0gYQAhgOADgdQAHhBgkgeIAMgLIAJAOQAnArgYA9QgUAxg/AVIh1AjQg2ASgLA6QgIAuAAAyQAjANARAjQAXAvgCBAQgCAogGAkQAWgiAvgOQA5gRAwAgQApAbgCA3QgCAuAFAnIACAMQAOANAYAEQBDAKAkgoQAngpBKAPQBFANgbBKQgOAkABAoQABBDBSgIQBFgGAugbQgIANgFARQgEAOgIAHQgZAXhCgKQgcgEgbgIQgzgNgBhEQABghAPgaQAlhDhNgFQg6gEg4AaQgzAYg/gJIgBgEIgFgXIAFAXIABAEQAMAwgiApQghAoAPA6QAOA4AABAIgPAAQgOgPgbgJQg2gTglgjIgCgCIgDgDIgBgBIgBAAQgLgLgHAAIgBAAIAAAAQgCAAgCACIgBAAIABAAQACgCACAAIAAAAIABAAQAHAAALALIABAAIABABIADADIACACQAlAjA2ATQAbAJAOAPQAGAGADAGIABADQACAIgCAKQgHAngaAAQgPAAgUgMgAlRh0IAAgPIAAgOQgTgHgYgBQAYABATAHIAAAOIAAAPgAlcG2QgjgPgbgeQgPgQgBgKQgBgIAJgDIACAAIALgBIABAAIAAAAIAPABQAdADAXAVQAmAiArAgQgOAHgTAAQgaAAghgPgAj6pRQgfgEgvAWQAtgXAdgfQAMgNAUABQgiA2A2AXQAcALAigGIALgCQACAMgBAMQgQgCgTAFQgPADgNAAQg1AAgGg+g");
	this.shape_5.setTransform(-2.7,8.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AADACQAAgCAEgLQAAAFAFATQgIgCgBgJgAgMAHIABgGIACABQAJAEAAgFIAAACQAAABAAABQAAABAAAAQAAABAAAAQAAAAAAAAQgDAAgGgFQAGAFADAAIgBAEIgLgEg");
	this.shape_6.setTransform(-13.8,-54.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F5F5F").s().p("AgUDFIgCgHQgEgIgHgFQgkgZgWghIAAgKIAAgBQABghALgWQgLAWgBAhIAAABIAAAKIgMgUIAMAUQgDAwgfAaIgBgBIAAAAQAEgSgKgUQgVgqACg/IAIABQAHADALAAIABAAIAAAAIABAAIACAAIABAAIgBAAIgCAAIgBAAIAAAAIgBAAQgLAAgHgDIgIgBQgigIgYAVQgfAdgrAEQgbACgQALIgJAHIgFgJIAFAJIgMAKIgFAGQgTAUgMAeQgDgMADgIQAIgWABgWIAHACIgHgCQAAgMgBgLIAMgBIgMABQgDgSgHgRQgbg4AignQAegkA7AGIAKABQAPgGAMgJIAKAGIgKgGQAbgTALgeQANglAmgSQALgFAMgDQArgLAxADIABAAIABAAIAHAAIABgDQAtAKAvAOQAXAHAZADIgEAFIAZgBIAHABQA9AFAvAUQAaAMAHAWQAJAcAnABIBPACIAAAHQhUAOA/AZQg5gFgUAsQgbBDgehBQgMgYgTgXQgngwhDAUQgqANgLAxQgMA1g0ARQADARAEARQAKA3gTAtIgHgHgAgSBJIAHgDIgBgUIABAUIgHADgAlxAhIAKAEQAIABAHAAQgGgTABgGIgBAAIAAAAQgOABgEALIAAABIAAABIAAgBIAAgBQAEgLAOgBIAAAAIABAAQgFANAAACIgDABIAAgCQABAEgLgDIgBgBIgBAGgAAIhYIASgQIgSAQgAgwjIIACAQIgCgQIAAAAIAAAAg");
	this.shape_7.setTransform(21.9,-56.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.3,1,1).p("ADFnbQA1gRAMg3QALgxAqgMQBDgUAnAvQATAYAMAYQAeBBAbhCQAUguA5AFQg/gZBUgOQAPgDAOgEQgPAAgOAAQgqAAglgBQgogBgIgdQgHgWgagLQgvgVg9gFQgDAAgEAAQgLgEgKgBQACgCACgDQAAgEAEgBACgrrQgxgDgrAMQgNADgKAFQgmARgMAmQgMAegaASAChrrQgBAAAAAAIAAAAQABAIABAJACprqQgEgBgDAAQgBAAAAAAAE3rMQgZgDgXgGQgwgOgtgKQgFgBgEADAA5nxQAEABAEABQAJADAOgBAh+mvQAFgEAEgDQAQgKAbgDQArgEAfgcQAXgWAiAIADrqLQgJAJgJAIADEnwQAAAKABALQgDABgEACAFMrHQgLgBgOABQACgCACgDAC8lRQAPAvgDA6QALgLgDgpQA5AfBDgCQgzgKglgeQgZgVgYgaQAUgtgLg3QgEgRgDgQAC8ldQgDgCgCgDQADAIACAJABpm+QAFAKAHAJQAAgFAAgFQAAghAMgXAC8ldQgBgDgBgDQgEgJgHgEQgkgagWghQgDAwgfAaIgBAAQgBABAAABQABgBABgBQAjAtAmAkQgpgYgWgQQARAbgEAXQgNgjgQgmQgWAWgOAZQAQglAYgdIAAAAIABABQAAgBAAAAQAEgRgKgVQgVgpAChAAC8ldQABAGgBAGADQkcQAKAeALAjQAIgUgdgtgADDlWQgEgDgDgEAhbFZQAOANAYAEQBCAJAlgnQAngpBKAOQBEANgbBKQgNAlABAoQAABCBSgHQBGgGAtgbQgIAMgEASQgFAOgHAHQgaAXhBgKQgcgFgbgHQg0gOAAhDQAAghAPgbQAlhChNgFQg6gFg3AbQgzAYg/gKQgBgCgBgBQgCgLgCgMgAEjEgQAqAcACAzAD7EtQAIAxgDA0AltnSQAsgXAegfQALgNAVABQgjA2A2AXQAcALAigHQAGgBAGAAQgDgRgHgRQgbg5AignQAegkA7AFQAFABAFABQAPgHAMgJQAFADAFADAiVoBQgCAAgHgEQAKADAAgEQAAABAAABQACADgDAAgAiMoUQgQgBgDAOQgBADAAAEQAFACAFABQAHACAIAAAiMoUQgFAMAAADQABAIAJACAiMoUQgBAGAGATAmigsQAAAIgEAIQABgIgBgIQACAAACAAQABgkAHgbQAOg6AngfQAmgfA/gQQA7gPA1gYQAggPAEgcQAHhBglgeQgCACgDADQgTAVgMAeQgEgMAEgJQAIgWABgVQAEAAADABAh+mvQgCgEgDgFAh+mvQAEAHAFAGQAoAsgYA9QgVAxg+AUQg4ASg+ASQg2ARgKA7QgIAugBAyQAAAOAAAOAh+mvQgGAFgGAGAimnEQABAMAAAMQgQgCgUAEQhPASgHhMQgfgEgvAWIgDACQgFACgEACAimnEQAFgBAHAAAl3gkQAkANARAiQAXAvgDBAQgBAogHAlQAWgiAvgOQA6gSAwAhQAoAbgCA3QgBAuAFAnQABAGABAGAmigsQAYABATAHAnHHRQACgHABgIQAJg5AiglQAbgfgKguQgLg3gcgvQgdgyAXhBQAPguAAgsAhVFzQALAxgiApQggAnAOA7QAPA4gBBAQAAAEAAAEQAAAKACAPQgCgKgEgIAp7H6QgCgrAdgfAoRHmQgFg9AXg7QAEgOAIgMAnHHRQAJgDAUADQAdADAXAUQAlAjAsAfQgkARg5gYQgjgPgageQgQgRAAgJQgBgIAJgDgAkhJKQAIgIAWAWQAmAkA2ASQAbAJAOAQQAFAFAEAHQAAABABACQABAIgCAKQgLA8g4ghQgEgCgEgDQgCgBgCgCQgBgBgBAAQgogWgcgbQgdgdgBgmQAAgWAHgGQgCgagCgG");
	this.shape_8.setTransform(1,-2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F5F5F").s().p("AgUDFIgCgHQgEgIgHgFQgkgZgWghIAAgKIAAgBQABghALgWQgLAWgBAhIAAABIAAAKIgMgUIAMAUQgDAwgfAaIgBgBIAAAAQAEgSgKgUQgVgqACg/IAIABQAHADALAAIABAAIAAAAIABAAIACAAIABAAIgBAAIgCAAIgBAAIAAAAIgBAAQgLAAgHgDIgIgBQgigIgYAVQgfAdgrAEQgbACgQALIgJAHIgFgJIAFAJIgMAKIgFAGQgTAUgMAeQgDgMADgIQAIgWABgWQAAgMgBgLIAMgBIgMABQgDgSgHgRQgbg4AignQAegkA7AGIAKABQAPgGAMgJIAKAGIgKgGQAbgTALgeQANglAmgSQALgFAMgDQArgLAxADIAAAAIACAQIgCgQIAAAAIABAAIABAAIAHAAIABgDQAtAKAvAOQAXAHAZADIgEAFIAZgBIAHABQA9AFAvAUQAaAMAHAWQAJAcAnABIBPACIAAAHQhUAOA/AZQg5gFgUAsQgbBDgehBQgMgYgTgXQgngwhDAUQgqANgLAxQgMA1g0ARIgBgUIABAUIgHADIAHgDQADARAEARQAKA3gTAtIgHgHgAlvB3IgHgCIAHACgAlxAhIAKAEQAIABAHAAQgGgTABgGIgBAAIAAAAQgOABgEALIAAABIAAABIAAgBIAAgBQAEgLAOgBIAAAAIABAAQgFANAAACIgDABIAAgCQABAEgLgDIgBgBIgBAGgAAIhYIASgQIgSAQg");
	this.shape_9.setTransform(21.9,-56.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.3,1,1).p("ADFnbQA1gRAMg3QALgxAqgMQBDgUAnAvQATAYAMAYQAeBBAbhCQAUguA5AFQg/gZBUgOQAPgDAOgEQgPAAgOAAQgqAAglgBQgogBgIgdQgHgWgagLQgvgVg9gFQgDAAgEAAQgLgEgKgBQACgCACgDQAAgEAEgBACgrrQgxgDgrAMQgNADgKAFQgmARgMAmQgMAegaASAChrrQgBAAAAAAIAAAAQABAIABAJACprqQgEgBgDAAQgBAAAAAAAE3rMQgZgDgXgGQgwgOgtgKQgFgBgEADAA5nxQAEABAEABQAJADAOgBAh+mvQAFgEAEgDQAQgKAbgDQArgEAfgcQAXgWAiAIADrqLQgJAJgJAIADEnwQAAAKABALQgDABgEACAFMrHQgLgBgOABQACgCACgDAC8lRQAPAvgDA6QALgLgDgpQA5AfBDgCQgzgKglgeQgZgVgYgaQAUgtgLg3QgEgRgDgQAC8ldQgDgCgCgDQADAIACAJABpm+QAFAKAHAJQAAgFAAgFQAAghAMgXAC8ldQgBgDgBgDQgEgJgHgEQgkgagWghQgDAwgfAaIgBAAQgBABAAABQABgBABgBQAjAtAmAkQgpgYgWgQQARAbgEAXQgNgjgQgmQgWAWgOAZQAQglAYgdIAAAAIABABQAAgBAAAAQAEgRgKgVQgVgpAChAAC8ldQABAGgBAGADQkcQAKAeALAjQAIgUgdgtgADDlWQgEgDgDgEAhbFZQAOANAYAEQBCAJAlgnQAngpBKAOQBEANgbBKQgNAlABAoQAABCBSgHQBGgGAtgbQgIAMgEASQgFAOgHAHQgaAXhBgKQgcgFgbgHQg0gOAAhDQAAghAPgbQAlhChNgFQg6gFg3AbQgzAYg/gKQgBgCgBgBQgCgLgCgMgAEjEgQAqAcACAzAD7EtQAIAxgDA0AltnSQAsgXAegfQALgNAVABQgjA2A2AXQAcALAigHQAGgBAGAAQgDgRgHgRQgbg5AignQAegkA7AFQAFABAFABQAPgHAMgJQAFADAFADAiVoBQgCAAgHgEQAKADAAgEQAAABAAABQACADgDAAgAiMoUQgQgBgDAOQgBADAAAEQAFACAFABQAHACAIAAAiMoUQgFAMAAADQABAIAJACQgGgTABgGgAmigsQAAAIgEAIQABgIgBgIQACAAACAAQABgkAHgbQAOg6AngfQAmgfA/gQQA7gPA1gYQAggPAEgcQAHhBglgeQgCACgDADQgTAVgMAeQgEgMAEgJQAIgWABgVQAEAAADABAh+mvQgCgEgDgFAh+mvQAEAHAFAGQAoAsgYA9QgVAxg+AUQg4ASg+ASQg2ARgKA7QgIAugBAyQAAAOAAAOAh+mvQgGAFgGAGAimnEQABAMAAAMQgQgCgUAEQhPASgHhMQgfgEgvAWIgDACQgFACgEACAimnEQAFgBAHAAAl3gkQAkANARAiQAXAvgDBAQgBAogHAlQAWgiAvgOQA6gSAwAhQAoAbgCA3QgBAuAFAnQABAGABAGAmigsQAYABATAHAnHHRQACgHABgIQAJg5AiglQAbgfgKguQgLg3gcgvQgdgyAXhBQAPguAAgsAhVFzQALAxgiApQggAnAOA7QAPA4gBBAQAAAEAAAEQAAAKACAPQgCgKgEgIAp7H6QgCgrAdgfAoRHmQgFg9AXg7QAEgOAIgMAnHHRQAJgDAUADQAdADAXAUQAlAjAsAfQgkARg5gYQgjgPgageQgQgRAAgJQgBgIAJgDgAkhJKQAIgIAWAWQAmAkA2ASQAbAJAOAQQAFAFAEAHQAAABABACQABAIgCAKQgLA8g4ghQgEgCgEgDQgCgBgCgCQgBgBgBAAQgogWgcgbQgdgdgBgmQAAgWAHgGQgCgagCgG");
	this.shape_10.setTransform(1,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_3},{t:this.shape_5},{t:this.shape_6},{t:this.shape_4},{t:this.shape_2},{t:this.shape_8}]},4).to({state:[{t:this.shape_9},{t:this.shape_3},{t:this.shape_5},{t:this.shape_6},{t:this.shape_4},{t:this.shape_2},{t:this.shape_10}]},4).wait(7));

	// Layer 2
	this.instance_1 = new lib.Tween59("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.9,-71.5,1,1,0,0,0,19.3,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-39.8,x:2},4).to({scaleX:1,scaleY:1,rotation:0,x:1.9},4).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-118.1,134.9,192);


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
		var bgm = createjs.Sound.play('bgmPP',{loop:-1});
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
		
		 window.open ("pp_Scene6b.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pp_Scene6.html","_self");
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


(lib.birdsscene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgjHAY+IAAgjQlHgyiXlTQhuj4AAlgQAAk5AujkQAPhJAnizQAqi9AhjCQAjjHAbhiQA2i/BbiHQD8l0I3ACIG+gCQH4AARUCCIMfBhQGVAxCZALIEhAVQCqAQBwAdQEtBOA8DWQAOAvBECzQAoBqAABcQAABWgEAkQgPBmg1BPQieDtnaAAQhLAAhAgEMgvzAAAIAAY2g");
	this.shape.setTransform(-165.5,-140.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(55));

	// Layer 4
	this.instance = new lib.animbirdthree();
	this.instance.parent = this;
	this.instance.setTransform(100,-62,0.432,0.432,0,0,0,3.8,-22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({guide:{path:[99.9,-64,88,-79.3,69.5,-72.3,56.9,-67.5,41.9,-67.4,21,-67.2,10,-79.1,0.2,-89.6,-16,-91.4,-35.9,-93.8,-48.2,-106.6,-60.1,-119,-58.3,-139.8,-56.8,-157.7,-50.3,-175.7,-49.6,-177.6,-49.2,-179.4]}},50).wait(1));

	// Layer 3
	this.instance_1 = new lib.animbirdtwo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12,-74,0.391,0.391,0,0,0,8,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({regX:8.1,scaleX:0.14,scaleY:0.14,guide:{path:[-12,-73.9,-29.4,-77.5,-45.3,-83.8,-51.1,-86.1,-57.3,-87.3,-77.4,-91.3,-88.1,-100.9,-93.9,-106.1,-98.3,-112.6,-106.2,-124.3,-116.9,-136,-122.2,-142,-130.4,-146.8]}},50).wait(1));

	// Layer 6
	this.instance_2 = new lib.animibirdone();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-111,-60,0.458,0.458,0,0,0,-14.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({regX:-14.4,scaleX:0.19,scaleY:0.19,guide:{path:[-111,-59.9,-119.3,-68.5,-126.3,-80.6,-133.7,-93.4,-151.9,-92.8,-169.6,-92.2,-181.1,-81.1,-193.1,-69.4,-203.2,-57.8,-208.8,-51.4,-214.6,-46.6,-225.8,-37.3,-240.6,-33.8,-243.6,-33.1,-247.9,-33.9,-264.3,-37.1,-280.6,-41.2,-290.1,-43.6,-295.9,-49.9]}},50).wait(1));

	// Layer 1
	this.instance_3 = new lib.peoplescopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-23.6,53.3,0.53,0.53,0,0,0,-20.5,-84.4);

	this.instance_4 = new lib.fencecopy("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-17,13,0.66,0.66,0,0,0,219.3,-156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},4).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-449.1,-300,667.8,472.6);


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


(lib.contenthelpfulrules = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_92 = function() {
		/* _root.v1b.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(92).call(this.frame_92).wait(418));

	// Layer 5
	this.instance = new lib.s5_s2();
	this.instance.parent = this;
	this.instance.setTransform(10.4,160.4,1,1,0,0,0,32.5,-55.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).to({_off:true},71).wait(347));

	// Layer 3
	this.instance_1 = new lib.Tween67("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.8,28.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(98).to({_off:false},0).to({alpha:1,mode:"synched"},5).wait(4).to({startPosition:0},0).to({y:-21.6},15).to({_off:true},41).wait(347));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAFQACADAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape.setTransform(-84.6,-96);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQADgGAFAAQADAAAEADQADADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_1.setTransform(-95.4,-95.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgLBOIABgnIABgnIAAgmIABgnQAAgLAJAAQAMAAAAALIgBAnIgBAmIgCA1IgBAZQgBALgIAAQgKAAAAgLg");
	this.shape_2.setTransform(-104.7,-98.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAYAzQgNAIgQAAQgPgBgJgGQgKgHgCgNQgFgdAAgVQAAgPAEgSQACgKAIABQAFAAADADQADADAAAEIgBAQIgCAQIABAeQABANACAHIAHADIAIABQANABAPgFIAAgWIAAgUQAAgXACgRQABgKAKAAQAEAAADADQAEADAAAFIgDAoIAAAXIABAWIAAAIIABAHQgBAFgDADQgDACgEAAQgJABgCgLg");
	this.shape_3.setTransform(-113.4,-95.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_4.setTransform(-125.8,-98.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgMBOIACgnIABgnIABgmIAAgnQAAgLAKAAQALAAgBALIAAAnIgBAmIgBA1IgBAZQgCALgIAAQgLAAAAgLg");
	this.shape_5.setTransform(-142.5,-98.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAZAzQgOAIgRAAQgNgBgKgGQgKgHgCgNQgFgdABgVQgBgPAEgSQABgKAJABQAFAAADADQADADAAAEIgCAQIgBAQIABAeQABANADAHIAGADIAHABQANABARgFIAAgWIAAgUQAAgXACgRQABgKAJAAQAFAAADADQACADAAAFIgBAoIAAAXIAAAWIAAAIIAAAHQAAAFgCADQgEACgEAAQgIABgCgLg");
	this.shape_6.setTransform(-151.2,-95.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgQBcQgEgDAAgEIAAgDQACgNABgRIAAgdIAAgfIgRABQgMAAAAgKQAAgLAUAAIAKAAIACgRQACgYAJgLQALgNAXAAQAQAAAAAKQgBAKgOAAQgaAAgDAkIAAAHIAYgBQARAAAAALQAAAHgIACIgJABIgZABIAAAYIAAATIAAAUQAAAVgCALQgBAJgIAAQgEAAgDgDg");
	this.shape_7.setTransform(-162.8,-97.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_8.setTransform(-173.9,-93);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgMBOIACgnIABgnIABgmIAAgnQAAgLAKAAQALAAgBALIAAAnIgBAmIgBA1IgBAZQgBALgJAAQgLAAAAgLg");
	this.shape_9.setTransform(-182.9,-98.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgkAvQgQgOgBgYQAAgbAOgTQAPgVAYAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgRAHIgoATQAGAJAJAFQAJAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_10.setTransform(-191.8,-95.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhCBVQgDgDgBgFIADgiIABghIAAgRIgBgSIACgaIAAgZQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFIgBAaIgCAZIABAaIAugHQAbgGATAAIABguQAAgIADgJQAEgLAGAAQAEAAADADQADADAAAEIgBAEQgBAFAAAJIAAAJIAAAKIgBAgIgDAfIACAZIABAYQAAAEgDADQgDAEgEAAQgFAAgDgEQgDgDAAgEIgBgYIgBgZIAAgQQgSABgaAEIgtAJIgCAcIgCAbQAAAFgDADQgDADgEAAQgFAAgCgDg");
	this.shape_11.setTransform(-206.3,-98.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},92).to({state:[]},71).wait(347));

	// Layer 4
	this.instance_2 = new lib.Tween64("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(5,26);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween66("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(5,26);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(92).to({_off:false},0).to({_off:true,alpha:1},6).wait(412));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92).to({_off:false},6).wait(9).to({startPosition:0},0).to({y:-22},15).to({_off:true},41).wait(347));

	// Layer 1
	this.instance_4 = new lib.birdsscene();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-54.6,-29.9,1,1,0,0,0,-83.9,-37.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(92).to({_off:false},0).to({_off:true},71).wait(347));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-419.8,-292.6,667.8,472.6);


// stage content:
(lib.pp_Scene6a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6:0});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		playSound("afterifusehadandnotwouldhave");
		playSound("pad_chord_1");
	}
	this.frame_5 = function() {
		playSound("pad_chord_2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(66));

	// nav
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(71));

	// Layer 1
	this.instance = new lib.contenthelpfulrules("synched",92,false);
	this.instance.parent = this;
	this.instance.setTransform(274,169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(129.2,76.4,687.3,522.9);
// library properties:
lib.properties = {
	id: '05BA4675CFE495488079F2D1B8A7DB46',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/afterifusehadandnotwouldhave.mp3", id:"afterifusehadandnotwouldhave"},
		{src:"sounds/beforeyoufinishthisprogram.mp3", id:"beforeyoufinishthisprogram"},
		{src:"sounds/boo.mp3", id:"boo"},
		{src:"sounds/futureperfecttense.mp3", id:"futureperfecttense"},
		{src:"sounds/indescribingtwopastactions.mp3", id:"indescribingtwopastactions"},
		{src:"sounds/mo_funky.mp3", id:"mo_funky"},
		{src:"sounds/mostcommonverberrorsoccur.mp3", id:"mostcommonverberrorsoccur"},
		{src:"sounds/ohbaby.mp3", id:"ohbaby"},
		{src:"sounds/pad_chord_1.mp3", id:"pad_chord_1"},
		{src:"sounds/pad_chord_2.mp3", id:"pad_chord_2"},
		{src:"sounds/pastperfecttense.mp3", id:"pastperfecttense"},
		{src:"sounds/perc_techno.mp3", id:"perc_techno"},
		{src:"sounds/perfectformoftheverb.mp3", id:"perfectformoftheverb"},
		{src:"sounds/presentperfecttense.mp3", id:"presentperfecttense"},
		{src:"sounds/real_disco.mp3", id:"real_disco"},
		{src:"sounds/relax.mp3", id:"relax"},
		{src:"sounds/theformulausetheappropriate.mp3", id:"theformulausetheappropriate"},
		{src:"sounds/thesatrequiresaknowledge.mp3", id:"thesatrequiresaknowledge"},
		{src:"sounds/theverbformindicatingbefore.mp3", id:"theverbformindicatingbefore"},
		{src:"sounds/theverbformindicatingpreceded.mp3", id:"theverbformindicatingpreceded"},
		{src:"sounds/theverbindicatingthatanaction.mp3", id:"theverbindicatingthatanaction"},
		{src:"sounds/thewordperfectmeanscomplete.mp3", id:"thewordperfectmeanscomplete"},
		{src:"sounds/thissoundsmoredifficultthanitis.mp3", id:"thissoundsmoredifficultthanitis"},
		{src:"sounds/UnderstandingthePerfectFormoftheVerb.mp3", id:"UnderstandingthePerfectFormoftheVerb"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"},
		{src:"sounds/yeah_calm.mp3", id:"yeah_calm"},
		{src:"sounds/youhadlearnedtheperfecttense.mp3", id:"youhadlearnedtheperfecttense"},
		{src:"sounds/youhavelearnedtheperfectform.mp3", id:"youhavelearnedtheperfectform"}
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
an.compositions['05BA4675CFE495488079F2D1B8A7DB46'] = {
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