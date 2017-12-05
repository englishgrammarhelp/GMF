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


(lib.PassiveVoiceDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAJQgFgEAAgFQAAgEAFgEQAEgEAGAAQAHAAAEAEQAFAEAAAEQAAAFgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape.setTransform(140.9,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUAtIgDgUIgBgVIAAgHIAAgJIAAgDIABgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIgBAJIAAAIIgBAJQAAAFgDAEQgEAEgGAAQgGAAgEgEQgDgEgBgFIAAgJIgBgIIABgbIACgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQAMAAABAPIAAACQAPgPAPAAQASAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgNAAgBgMg");
	this.shape_1.setTransform(131.6,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_2.setTransform(120.9,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLBHQgEgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAFAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQAAAFgDAEQgEAEgFAAQgGAAgDgEgAgIgxQgFgEABgGQgBgGAFgEQAEgFAFAAQAHAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgHAAQgFAAgEgEg");
	this.shape_3.setTransform(113.2,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBEQgEgDgBgGIABgKIAAgLIgCgxIgSgCQgMgBAAgMQAAgGADgDQAEgEAGAAIARABIgBgKIAAgJQAAgGAEgEQAEgEAFAAQAOAAAAAZIAAAIIAJgBQAMAAAEABQAIADAAAJQAAAGgEADQgDAFgHAAIgEAAIgGgBIgJABIACAzIAAAEIAAAGQAAAWgNAAQgFABgEgEg");
	this.shape_4.setTransform(105.5,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdArQgQgNAAgVQAAgTAOgUQAPgYAUAAQALAAANAGQAQAGABAJQgBAFgDADQgDAFgGAAQgFgBgFgEQgGgFgMABQgHgBgIAPQgIAOAAAKQAAAKAHAGQAHAGALAAQAGgBAJgFQAKgEADgBQAEABAFAEQADADAAAFQAAAIgRAIQgOAGgJAAQgVAAgOgMg");
	this.shape_5.setTransform(95.5,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXAtQgJAEgHACQgGADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgCAKIAAAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAGgCAEgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_6.setTransform(85.1,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgbAzQgPgFAAgLQAAgKAMAAQAEAAAJADQAIADAGAAQASgBAAgHQAAgGgOgGIgZgLQgNgKAAgOQAAgUAUgGQANgEAYAAQAJAAAFACQAHAEAAAJQAAASgKAAQgKgBgCgHIgIgBQgWgBAAAHQAAAEANAHQAUAIAGAFQAOAKABANQAAAQgQAJQgNAHgRAAQgNAAgLgEg");
	this.shape_7.setTransform(65.8,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgKAVQgDgEAAgFIADgYQACgLAKAAQAFAAADAEQAEADAAAFIgEAXQAAAFgDADQgDAEgFAAQgGAAgDgDg");
	this.shape_8.setTransform(58.7,10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgvBKQgFgEAAgGIAAhnIgBgNIABgMQABgKAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAFAHAJQAJAKAAALQAAANgPALQgJAIgKAEQgWAIgjAAQgGAAgEgFgAgaA1QARgBATgGQARgFAAgFQAAgIgLgGQgJgFgHAAIgagBgAgZgfIgBAVIAOABQAdgCAAgVQAAgGgJgGQgIgIgKAAIgQAAg");
	this.shape_9.setTransform(50.6,15.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ag1BJQgDgEAAgGIAAgVIAAgWIAAhOQAAgHAEgFQAFgGAJAAIAYACQAOACAIAFQAqAVAAAfQAAAMgJAJQgJAKgRAHQAaAOANAPQAEAEgBAFQABAGgFAEQgEADgFAAQgGAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgdADIADAAQAZAAAKgFQAFgDAEgEQAEgEAAgCQAAgLgNgKQgNgKgOgBIgLgBg");
	this.shape_10.setTransform(37.8,15.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgsBKQgLgJAAgfIACgnIABgnIgBgKIAAgKQAAgPANAAQAFAAADACIAWgEIASgBQAYAAAPAFQAKAEgBAJQABAFgEAEQgEAFgGgBIgFgBQgPgDgPAAIgPABIgSADIAAAmIAkgDIAZgCQAFAAAEAEQAEAEAAAFQAAALgMACIgYABIgoAEIgBAVQAAASADADQABABAKAAIASAAIASAAIAGgBIAGAAQAFAAAEADQAFAEAAAGQAAALgMADQgKABgdAAQggAAgJgJg");
	this.shape_11.setTransform(25.2,15.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgUBFQgMgcgPg1IgIgaQgGgSAAgHQAAgHAFgDQAEgDAFgBQAKAAADAKIAFARIAJAgIAPAwIAVg6IAJgXQAFgOAHgIQAEgFAHAAQAFAAAFAEQADAEAAAFQABAFgDADQgFAIgEAKIgIAUIgaBCQgFAMgGAMQgEAIgIAAQgJAAgEgKg");
	this.shape_12.setTransform(12,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgWAAgQgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_13.setTransform(-9.3,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_14.setTransform(-20.3,15.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIBEQgEgDgBgGIABgKIAAgLIgCgxIgSgCQgMgBAAgMQAAgGADgDQAEgEAGAAIARABIAAgKIgBgJQAAgGAEgEQAEgEAFAAQAOAAAAAZIAAAIIAJgBQAMAAAEABQAIADAAAJQAAAGgEADQgEAFgGAAIgEAAIgGgBIgJABIACAzIAAAEIAAAGQABAWgOAAQgFABgEgEg");
	this.shape_15.setTransform(-30.9,16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAYAAQAJAAAOAFQARAFAAAHQAAAGgDADQgEAFgGAAIgOgCIgNgCQgNAAgKAGQgMAGAAAHQAAAEADACQAEADAHABIAYABQAVACANAKQAOALAAAVQAAAZgdANQgWAKgaAAQgZAAgPgLg");
	this.shape_16.setTransform(-51.2,16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgsBKQgMgJAAgfIADgnIACgnIgBgKIgBgKQAAgPANAAQAEAAAEACIAVgEIATgBQAZAAAOAFQAKAEgBAJQAAAFgDAEQgEAFgGgBIgFgBQgPgDgPAAIgPABIgRADIgBAmIAkgDIAZgCQAFAAAEAEQAEAEAAAFQAAALgMACIgYABIgoAEIgBAVQAAASADADQAAABALAAIASAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgLADQgLABgdAAQggAAgJgJg");
	this.shape_17.setTransform(-64.1,15.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUBFQgNgcgOg1IgIgaQgFgSgBgHQABgHAEgDQAEgDAGgBQAJAAADAKIAFARIAJAgIAOAwIAXg6IAIgXQAGgOAGgIQAFgFAFAAQAHAAADAEQAFAEAAAFQgBAFgCADQgFAIgEAKIgIAUIgaBCQgEAMgHAMQgEAIgIAAQgKAAgDgKg");
	this.shape_18.setTransform(-77.3,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_19.setTransform(-89.8,15.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgtBKQgLgJABgfIABgnIACgnIgBgKIgBgKQAAgPAOAAQAEAAAEACIAWgEIASgBQAYAAAPAFQAJAEAAAJQAAAFgDAEQgEAFgGgBIgFgBQgPgDgPAAIgPABIgSADIgBAmIAlgDIAYgCQAGAAAEAEQAEAEAAAFQAAALgMACIgXABIgqAEIAAAVQAAASACADQABABAMAAIARAAIASAAIAGgBIAGAAQAFAAAEADQAFAEAAAGQAAALgMADQgKABgdAAQggAAgKgJg");
	this.shape_20.setTransform(-101.1,15.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgrA7QgOgPAAgVQAAgfAcgjQAZgdAYAAIAIAAIAGACQAEgFAGAAQAKABACAKQACAJAAALQAAAEgDAEQgDAGgHAAQgJAAgEgKQgCgDgCgCIgIAAQgMAAgPATQgXAaAAAXQAAALAHAHQAHAIAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAHgFADQgbAYgbAAQgWgBgPgQg");
	this.shape_21.setTransform(-113.7,15.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgtBKQgLgJABgfIABgnIACgnIgBgKIgBgKQAAgPAOAAQAEAAAEACIAWgEIASgBQAYAAAPAFQAJAEAAAJQABAFgEAEQgEAFgGgBIgFgBQgPgDgPAAIgPABIgSADIgBAmIAlgDIAYgCQAGAAAEAEQAEAEAAAFQAAALgMACIgXABIgpAEIgBAVQAAASACADQACABAKAAIASAAIASAAIAGgBIAGAAQAFAAAEADQAFAEAAAGQAAALgMADQgKABgdAAQggAAgKgJg");
	this.shape_22.setTransform(-125.9,15.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag1BJQgDgEAAgGIAAgVIAAgWIAAhOQAAgHAEgFQAFgGAJAAIAYACQAOACAIAFQAqAVAAAfQAAAMgJAJQgJAKgRAHQAaAOANAPQAEAEgBAFQABAGgFAEQgEADgFAAQgGAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgdADIADAAQAZAAAKgFQAFgDAEgEQAEgEAAgCQAAgLgNgKQgNgKgOgBIgLgBg");
	this.shape_23.setTransform(-138.6,15.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066FF").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape_24.setTransform(184.6,-14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066FF").s().p("AgrA8QgOgQAAgVQAAggAcgiQAZgcAYgBIAIAAIAGABQAEgDAGAAQAKgBACALQACAJAAALQAAAEgDAEQgDAGgHAAQgJAAgEgJQgCgFgCgBIgIAAQgMAAgPATQgXAaAAAXQAAAKAHAJQAHAHAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAGgFAEQgbAYgbAAQgWAAgPgQg");
	this.shape_25.setTransform(171.5,-14.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0066FF").s().p("AgsBKQgLgJAAggIACgmIABgnIgBgKIAAgKQAAgPANAAQAFAAADACIAWgEIASgBQAYAAAPAFQAKAEgBAJQABAFgEAEQgEAEgGAAIgFAAQgPgEgPgBIgPACIgSADIgBAmIAlgDIAZgCQAFAAAEAEQAEAEAAAFQAAALgMACIgYACIgoADIgBAUQAAAUACADQACAAAKAAIASAAIASAAIAGAAIAGgBQAFAAAEADQAFADAAAHQAAALgMADQgKABgdAAQggAAgJgJg");
	this.shape_26.setTransform(159.3,-14.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0066FF").s().p("AgqBDQgTgNgBgTQAAgQAOAAQAOAAAAAPQAAAGAKAHQAKAGAIAAQAEAAACgNIABgeQABgVAAghIgBgHIgBAAIgLAAIgMAAQgFAAgFgEQgDgDAAgHQAAgNARAAIAKAAIAJABIASgBIASgBQAbAAAAAPQgBAFgDAEQgEAEgGAAIgFAAIgHAAIgIAAIAAAHQABBFgLAfQgGAYgTAAQgSAAgSgNg");
	this.shape_27.setTransform(146.2,-13.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0066FF").s().p("AgvBLQgFgFAAgGIAAhnIgBgNIABgNQABgJAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAEAHAKQAJAKAAAKQAAANgPAMQgJAIgKADQgWAJgjAAQgGAAgEgEgAgaA0QARAAATgGQARgFAAgFQAAgIgLgGQgJgEgHgCIgaAAgAgZgfIgBAVIAOAAQAdgCAAgUQAAgHgJgFQgIgIgKABIgQAAg");
	this.shape_28.setTransform(133.5,-14.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0066FF").s().p("AgnBCQgZgTAAgxIAAgNIABgPIAAgLIAAgKQAAgJADgGQAEgJAHAAQAFAAAEADQAFAEAAAGIAAAQIgBAQIAAAPIgBANQAAAOAEANQAEAPAIAGQAEAEAPgBQAZABAJgtQAFgVAAgqQAAgGADgFQAFgGAIAAQAGAAAEAFQACADAAAFQAAAmgDAWQgGAggQAWQgHAKgKAGQgNAIgMAAQgYAAgNgKg");
	this.shape_29.setTransform(119.3,-13.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0066FF").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAXAAQAKAAAOAFQASAFAAAHQgBAGgDADQgEAFgGAAIgOgCIgOgCQgNAAgJAGQgNAGAAAHQAAAEAFACQADADAHABIAYABQAWACAMAKQAOALAAAVQAAAZgcANQgXAKgbAAQgYAAgPgLg");
	this.shape_30.setTransform(105.2,-13.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_31.setTransform(83.8,-11.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_32.setTransform(72.8,-14.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIBEQgFgDABgGIAAgKIABgLIgDgxIgSgCQgMgBAAgMQAAgGADgDQAFgEAFAAIARACIgBgLIAAgJQAAgGAEgEQAEgDAGgBQANABAAAYIAAAIIAJgBQAMAAAEACQAIACAAAJQAAAGgEADQgDAFgGAAIgGAAIgFgBIgJABIACAyIABAFIAAAGQAAAXgPgBQgEAAgEgDg");
	this.shape_33.setTransform(62.2,-13.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAUAtIgCgUIgCgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIgBAJIAAAIIgBAJQABAFgEAEQgFAEgFAAQgGAAgEgEQgDgEgBgFIAAgJIgBgIIABgbIACgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQANAAAAAPIAAACQAPgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgMAAgCgMg");
	this.shape_34.setTransform(43.7,-11.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_35.setTransform(32.6,-11.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_36.setTransform(21.6,-14.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AADAfQgDgJgCgYIgDAFIgOAmQgCAEgDACQgEAHgIAAQgEAAgFgIQgGgJgDgNQgEgMgFgoIgCgNQAAgGAEgDQAEgEAGAAQAKAAADALIACANIACAOIADAXIARgwQAEgNAKAAQALAAADAPIAGAaIAFAaIAOg6QACgJALAAQAGAAAEAEQAEAEAAAFIgBADIgUBEQgDAJgHAJQgEAHgJAAQgMgBgHgXg");
	this.shape_37.setTransform(8.9,-11.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAJAjIgSAAIgJAAIgJAAQgFAAgEgDQgEgDAAgFQAAgLAMAAIATgBIASAAIATAAQAGAAADAEQAEADAAAFQAAAFgEADQgDADgGAAIgTAAgAgcgLQgFAAgDgDQgEgEAAgFQAAgLATAAIADAAIADAAIAsAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgsAAIgGABIgHAAg");
	this.shape_38.setTransform(-12.9,-13.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BB0000").s().p("AgsBKQgMgJAAggIADgmIACgnIgBgKIgBgKQAAgPANAAQAEAAAEACIAVgEIATgBQAZAAAOAFQAKAEgBAJQAAAFgDAEQgEAEgGAAIgFAAQgPgEgPgBIgPACIgRADIgBAmIAkgDIAZgCQAFAAAEAEQAEAEAAAFQAAALgMACIgYACIgoADIgBAUQAAAUADADQAAAAALAAIASAAIASAAIAGAAIAFgBQAGAAAEADQAFADAAAHQAAALgLADQgLABgdAAQggAAgJgJg");
	this.shape_39.setTransform(-33.5,-14.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BB0000").s().p("AgrA8QgOgQAAgVQAAggAcgiQAZgcAYgBIAIAAIAGABQAEgDAGAAQAKgBACALQACAJAAALQAAAEgDAEQgDAGgHAAQgJAAgEgJQgCgFgCgBIgIAAQgMAAgPATQgXAaAAAXQAAAKAHAJQAHAHAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAGgFAEQgbAYgbAAQgWAAgPgQg");
	this.shape_40.setTransform(-46.1,-14.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BB0000").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_41.setTransform(-58,-14);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BB0000").s().p("AgzA8QgWgRAAgdQAAggAVgbQAXgfAjAAQAiAAARAQQARAQAAAfQAAAggTAbQgWAfgjAAQgdAAgUgRgAgfgdQgOAVAAAWQAAAQAMAKQANALASgBQAUAAAPgUQANgUAAgXQAAgVgJgIQgJgHgWAAQgVAAgQAUg");
	this.shape_42.setTransform(-71.4,-13.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BB0000").s().p("AgUBFQgMgcgPg1IgIgaQgFgTgBgHQABgFAEgEQAEgDAGAAQAJAAADAJIAFARIAJAfIAOAxIAXg6IAIgXQAGgPAGgHQAFgFAFAAQAHAAADAEQAFAEAAAFQgBAFgCADQgFAIgFAKIgHAUIgaBDQgFAMgGALQgEAIgIAAQgKAAgDgKg");
	this.shape_43.setTransform(-86,-13.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BB0000").s().p("AgsBKQgMgJAAggIADgmIACgnIgBgKIgBgKQAAgPANAAQAEAAAEACIAVgEIATgBQAZAAAPAFQAJAEAAAJQgBAFgDAEQgEAEgGAAIgEAAQgQgEgPgBIgPACIgRADIgBAmIAlgDIAYgCQAFAAAEAEQAEAEAAAFQAAALgMACIgYACIgpADIAAAUQAAAUADADQAAAAALAAIASAAIASAAIAGAAIAFgBQAGAAAEADQAFADAAAHQAAALgLADQgLABgdAAQggAAgJgJg");
	this.shape_44.setTransform(-107.4,-14.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BB0000").s().p("AgUBFQgMgcgPg1IgIgaQgFgTgBgHQABgFAEgEQAEgDAGAAQAJAAADAJIAFARIAJAfIAOAxIAXg6IAIgXQAGgPAGgHQAFgFAFAAQAHAAADAEQAFAEAAAFQgBAFgCADQgFAIgFAKIgHAUIgaBDQgFAMgGALQgEAIgIAAQgKAAgDgKg");
	this.shape_45.setTransform(-120.6,-13.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BB0000").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_46.setTransform(-133.1,-14);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BB0000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAFAMAUAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgIgDgUAAQgRgBgNgFQgTgIABgPQAAgTAUgQQAUgQAXAAQAKAAAOAFQARAFABAHQAAAGgEADQgEAFgGAAIgOgCIgOgCQgNAAgKAGQgMAGAAAHQAAAEAEACQAEADAHABIAYABQAVACANAKQAOALAAAVQAAAZgcANQgXAKgbAAQgZAAgOgLg");
	this.shape_47.setTransform(-145.3,-13.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BB0000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQAEgEAGAAQAJAAAEAJQAFAMAUAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgIgDgUAAQgRgBgNgFQgSgIAAgPQAAgTAUgQQAUgQAXAAQAKAAAOAFQASAFAAAHQAAAGgEADQgEAFgGAAIgOgCIgOgCQgNAAgKAGQgLAGgBAHQAAAEAFACQADADAHABIAYABQAWACAMAKQAOALAAAVQAAAZgcANQgXAKgbAAQgZAAgOgLg");
	this.shape_48.setTransform(-159.2,-13.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BB0000").s().p("AAiA4QgFgMgEgPQgHABgRABIgWADIgQAgQgEAHgHAAQgGAAgEgEQgFgDAAgGQABgFAOgdIgBgFQAAgFAJgDQAOgXARgaQAXglAGAAQALAAADANIAHAgIAOA/IAFANQAEAIgBAFQABAFgFAEQgEAEgFAAQgIgBgIgRgAgHAJIANgBIANgCIgGggIgUAjg");
	this.shape_49.setTransform(-173.5,-13.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BB0000").s().p("AgsBKQgDgDAAgGIAAgbIACgsIACgtQAAgZAOABIAJgBIAPgBQARAAASAMQASAPAAATQAAAagUANQgRANgXAAIgJAAIAAAsQgBAGgDADQgEAEgFAAQgGAAgEgEgAgSgmIgCAiIAIABQAOAAAKgIQAKgHABgNQgBgIgJgHQgKgFgLAAIgFAAIgFAAIAAANg");
	this.shape_50.setTransform(-186,-14.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAYAAQAJAAAOAFQARAFAAAHQAAAGgDADQgEAFgGAAIgOgCIgNgCQgNAAgKAGQgMAGAAAHQAAAEADACQAEADAHABIAYABQAVACANAKQAOALAAAVQAAAZgdANQgWAKgaAAQgZAAgPgLg");
	this.shape_51.setTransform(-51.2,16.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgsBKQgMgJAAgfIADgnIACgnIgBgKIgBgKQAAgPANAAQAEAAAEACIAVgEIATgBQAZAAAOAFQAKAEgBAJQAAAFgDAEQgEAFgGgBIgFgBQgPgDgPAAIgPABIgRADIgBAmIAkgDIAZgCQAFAAAEAEQAEAEAAAFQAAALgMACIgYABIgoAEIgBAVQAAASADADQAAABALAAIASAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgLADQgLABgdAAQggAAgJgJg");
	this.shape_52.setTransform(-64.1,15.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgUBFQgNgcgOg1IgIgaQgFgSgBgHQABgHAEgDQAEgDAGgBQAJAAADAKIAFARIAJAgIAOAwIAXg6IAIgXQAGgOAGgIQAFgFAFAAQAHAAADAEQAFAEAAAFQgBAFgCADQgFAIgEAKIgIAUIgaBCQgEAMgHAMQgEAIgIAAQgKAAgDgKg");
	this.shape_53.setTransform(-77.3,16);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_54.setTransform(-89.8,15.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgtBKQgLgJABgfIABgnIACgnIgBgKIgBgKQAAgPAOAAQAEAAAEACIAWgEIASgBQAYAAAPAFQAJAEAAAJQAAAFgDAEQgEAFgGgBIgFgBQgPgDgPAAIgPABIgSADIgBAmIAlgDIAYgCQAGAAAEAEQAEAEAAAFQAAALgMACIgXABIgqAEIAAAVQAAASACADQABABAMAAIARAAIASAAIAGgBIAGAAQAFAAAEADQAFAEAAAGQAAALgMADQgKABgdAAQggAAgKgJg");
	this.shape_55.setTransform(-101.1,15.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgrA7QgOgPAAgVQAAgfAcgjQAZgdAYAAIAIAAIAGACQAEgFAGAAQAKABACAKQACAJAAALQAAAEgDAEQgDAGgHAAQgJAAgEgKQgCgDgCgCIgIAAQgMAAgPATQgXAaAAAXQAAALAHAHQAHAIAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAHgFADQgbAYgbAAQgWgBgPgQg");
	this.shape_56.setTransform(-113.7,15.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgtBKQgLgJABgfIABgnIACgnIgBgKIgBgKQAAgPAOAAQAEAAAEACIAWgEIASgBQAYAAAPAFQAJAEAAAJQABAFgEAEQgEAFgGgBIgFgBQgPgDgPAAIgPABIgSADIgBAmIAlgDIAYgCQAGAAAEAEQAEAEAAAFQAAALgMACIgXABIgpAEIgBAVQAAASACADQACABAKAAIASAAIASAAIAGgBIAGAAQAFAAAEADQAFAEAAAGQAAALgMADQgKABgdAAQggAAgKgJg");
	this.shape_57.setTransform(-125.9,15.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("Ag1BJQgDgEAAgGIAAgVIAAgWIAAhOQAAgHAEgFQAFgGAJAAIAYACQAOACAIAFQAqAVAAAfQAAAMgJAJQgJAKgRAHQAaAOANAPQAEAEgBAFQABAGgFAEQgEADgFAAQgGAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgdADIADAAQAZAAAKgFQAFgDAEgEQAEgEAAgCQAAgLgNgKQgNgKgOgBIgLgBg");
	this.shape_58.setTransform(-138.6,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.3,-30.9,462.6,61.8);


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


(lib.content15b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sentence
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAJQgFgEAAgFQAAgEAFgEQAEgEAGAAQAHAAAFAEQAEAEAAAEQAAAFgEAEQgGAEgGAAQgGAAgEgEg");
	this.shape.setTransform(362.5,132.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBNQgFgEAAgGIAAiGQAAgGAFgDQADgDAGAAQAFAAAEADQAEADgBAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_1.setTransform(355.4,125.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBNQgFgEAAgGIAAiGQAAgGAFgDQADgDAGAAQAFAAAEADQAEADgBAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_2.setTransform(349.9,125.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXAtQgIAEgHACQgHADgEAAQgXAAgMgNQgMgNAAgZQAAgWARgRQARgRAYAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgCAKIAAAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAFgCQAFgCAGgEQgEgWAAgLIABgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_3.setTransform(341.8,127.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgGIABgHIAAhuQAAgIADgFQAEgHAHAAQAKAAAAAMIAAADIAAAFIAAAlQAHgEAHgCQAGgCAFAAQAXAAAOARQAOAOAAAXQAAAXgQAPQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgJQAIgHAAgNQAAgNgHgIQgGgIgMAAQgEAAgGADg");
	this.shape_4.setTransform(330.3,125.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgHgEgKAAQgIAAgHAGg");
	this.shape_5.setTransform(309.9,127.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_6.setTransform(298.9,125.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIBEQgFgDABgGIAAgKIABgLIgCgxIgTgCQgMgBAAgMQAAgGAEgDQAEgEAFAAIARACIAAgLIgBgJQAAgGAEgEQAEgEAFAAQAOAAAAAZIAAAIIAKgBQALAAAEACQAIACAAAJQAAAGgEADQgEAFgFAAIgGAAIgEgBIgJABIABAzIABAEIAAAGQgBAXgOgBQgEABgEgEg");
	this.shape_7.setTransform(288.3,126.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAbBKQgHAEgHABIgOABQgWAAgOgOQgPgOAAgWQAAgbAPgPQAPgQAXAAQAHAAAGACQAGABAEADQABghACgNQACgLALAAQAFAAAEADQADAEAAAFIgBAsQgDAbAAAOQAAAjADAMIAAACQAAAGgFADQgDAEgGAAQgGAAgEgGgAgTAEQgIAJAAARQAAAKAIAIQAIAHAKAAQAHAAAEgCIAJgGIADgDIAAgkQgDgGgFgCQgGgDgHAAQgNAAgHAHg");
	this.shape_8.setTransform(268.9,125.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_9.setTransform(257.4,127.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_10.setTransform(246.4,125.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgeArQgPgNAAgVQAAgSAOgVQAPgYAUAAQAKAAAOAGQARAGAAAJQAAAFgEADQgDAFgGAAQgFAAgFgFQgGgFgMABQgGAAgJAOQgJAOAAAKQAAAKAIAGQAHAGAKgBQAHAAAJgEQAKgFACgBQAGAAADAFQAEAEAAAEQAAAIgQAHQgPAHgKAAQgUAAgPgMg");
	this.shape_11.setTransform(235.1,127.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgIBEQgFgDABgGIAAgKIABgLIgDgxIgSgCQgMgBAAgMQAAgGADgDQAFgEAFAAIARACIgBgLIAAgJQAAgGAEgEQAEgEAGAAQANAAAAAZIAAAIIAJgBQAMAAAEACQAIACAAAJQAAAGgEADQgDAFgGAAIgGAAIgFgBIgJABIACAzIABAEIAAAGQAAAXgPgBQgEABgEgEg");
	this.shape_12.setTransform(225.5,126.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgLBHQgEgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQADgEAHAAQAEAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQAAAFgDAEQgEAEgFAAQgFAAgEgEgAgIgxQgFgEAAgGQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_13.setTransform(218.2,125.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgoBPQgEgEAAgGIAAgkIAAgmQAAgVgBgPIgCgUQAAgHAEgGQAFgHAHAAQAFAAAEAEQADAEAAAFIAAABQAHgEAHgCQAFgBAHAAQAWgBALAUQAHAOABAXQAAAUgNAOQgNAQgWAAQgIAAgJgDIAAAoQAAAGgDAEQgEADgGAAQgGAAgEgDgAgEgtQgHACgHAGIABAnQAJADAIAAQAKAAAGgGQAEgGABgLQAAgOgCgFQgDgLgJAAQgHAAgEADg");
	this.shape_14.setTransform(210,130.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgGIABgHIAAhuQAAgIADgFQAEgHAHAAQAKAAAAAMIAAADIAAAFIAAAlQAHgEAHgCQAGgCAFAAQAXAAAOARQAOAOAAAXQAAAXgQAPQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgJQAIgHAAgNQAAgNgHgIQgGgIgMAAQgEAAgGADg");
	this.shape_15.setTransform(190,125.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_16.setTransform(178.7,128);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgvBLQgFgFAAgGIAAhnIgBgNIABgNQABgJAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAFAHAJQAJAKAAALQAAANgPALQgJAIgKAEQgWAIgjAAQgGAAgEgEgAgaA1QARgCATgFQARgFAAgFQAAgIgLgGQgJgFgHAAIgagBgAgZgfIgBAVIAOABQAdgDAAgUQAAgGgJgGQgIgIgKABIgQAAg");
	this.shape_17.setTransform(167.7,125.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgNAaQAAgFAEgEQAFgDAEAAQAPAAAAAWQAAAGgEAEQgEADgGAAQgOAAAAgXgAgJgTQgEgEAAgGIgBgDIAAgDQAAgGAEgDQAEgEAGAAQANAAAAATQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_18.setTransform(148.2,126.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgtBKQgLgJABgfIACgnIABgnIgBgKIAAgKQAAgPANAAQAEAAAEACIAWgEIASgBQAYAAAPAFQAJAEAAAJQABAFgEAEQgEAEgGAAIgFAAQgPgEgPAAIgPABIgSADIgBAmIAlgDIAZgCQAFAAAEAEQAEAEAAAFQAAALgMACIgXACIgpADIgBAVQAAATACACQACABAKAAIASAAIASAAIAGgBIAGAAQAFAAAEADQAFADAAAHQAAALgMADQgKABgdAAQggAAgKgJg");
	this.shape_19.setTransform(137.8,125.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgUBFQgMgcgPg1IgIgaQgGgTABgHQgBgGAFgDQAEgDAFAAQAKgBAEAKIAEARIAJAfIAPAxIAVg6IAJgXQAGgPAGgHQAEgFAHAAQAFAAAFAEQADAEAAAFQABAEgDAEQgFAIgEAKIgIAUIgaBDQgFAMgGALQgFAIgGAAQgLAAgDgKg");
	this.shape_20.setTransform(124.6,125.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_21.setTransform(112.1,125.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape_22.setTransform(99.9,125.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgrA7QgOgPAAgVQAAgfAcgjQAZgdAYAAIAIAAIAGABQAEgEAGABQAKgBACALQACAJAAALQAAAEgDAEQgDAGgHAAQgJAAgEgJQgCgEgCgCIgIAAQgMAAgPATQgXAaAAAXQAAAKAHAIQAHAIAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAEAAAFQAAAHgFADQgbAYgbAAQgWgBgPgQg");
	this.shape_23.setTransform(86.8,125.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AAiA4QgFgMgEgPQgHABgQABIgXADIgPAgQgFAHgIAAQgFAAgFgEQgDgDAAgGQAAgFANgdIgBgFQABgFAJgDQAOgXARgaQAXglAGAAQALAAADANIAGAgIAPA/IAFANQADAIABAFQgBAFgEAEQgEAEgGAAQgHgBgIgRgAgHAJIANgBIAOgCIgHggIgUAjg");
	this.shape_24.setTransform(73.1,125.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLAJQgEgEAAgFQAAgEAEgEQAGgEAFAAQAHAAAFAEQAEAEAAAEQAAAFgEAEQgGAEgGAAQgFAAgGgEg");
	this.shape_25.setTransform(408.2,42.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcBLQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgIIABgHIAAhtQAAgIADgFQAEgHAHAAQAKAAAAALIAAAEIAAAFIAAAlQAHgEAHgCQAGgCAFAAQAXAAAOARQAOAPAAAVQAAAYgQAPQgPAQgWAAQgOAAgMgEgAgKgBQgHACgIAFIAAAqQANAGAKAAQALAAAIgIQAIgJAAgNQAAgMgHgIQgGgIgMAAQgEAAgGADg");
	this.shape_26.setTransform(398,35.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_27.setTransform(386.8,38.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgvBKQgFgFAAgFIAAhmIgBgOIABgMQABgKAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAIQgEAGgIAGQAKAEAHAKQAJAKAAALQAAAMgPAMQgJAIgKAEQgWAIgjAAQgGAAgEgFgAgaA1QARgCATgFQARgFAAgGQAAgHgLgGQgJgEgHgBIgagBgAgZgeIgBAUIAOABQAdgCAAgVQAAgHgJgGQgIgHgKAAIgQAAg");
	this.shape_28.setTransform(375.7,35.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgcBLQgEgDAAgGQAAgIAUguQgKgTgXgqIgGgIQgCgEAAgDQAAgGAEgEQAFgEAFAAQAGAAAEAFQAOASARAmIANgcIAOgaQAEgHAHAAQAFAAAFADQAEAFAAAEIgBAHIgiBFQgMAZgHARIgGASQgDAJgJAAQgFAAgFgEg");
	this.shape_29.setTransform(354.8,40.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgcBLQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgIIABgHIAAhtQAAgIADgFQAEgHAHAAQAKAAAAALIAAAEIAAAFIAAAlQAHgEAHgCQAGgCAFAAQAXAAAOARQAOAPAAAVQAAAYgQAPQgPAQgWAAQgOAAgMgEgAgKgBQgHACgIAFIAAAqQANAGAKAAQALAAAIgIQAIgJAAgNQAAgMgHgIQgGgIgMAAQgEAAgGADg");
	this.shape_30.setTransform(343.5,35.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AAbBJQgHAEgHACIgNABQgXAAgOgOQgPgOAAgXQAAgaAPgOQAPgRAXAAQAHAAAGACQAFABAFADQABghACgNQABgLALAAQAHAAADADQAEAFAAAEIgDArQgCAbAAAPQAAAjACALIAAADQAAAGgDADQgEAEgGAAQgGAAgEgHgAgTAEQgIAJABAQQAAALAHAHQAIAIALAAQAGAAAEgCIAJgGIADgDIAAgkQgDgGgGgCQgEgDgHAAQgOAAgHAHg");
	this.shape_31.setTransform(323,35.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgXAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_32.setTransform(311.5,38.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_33.setTransform(300.4,35.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgdArQgQgNAAgVQAAgTAOgUQAQgYATAAQALAAANAGQAQAGAAAJQABAFgEAEQgDADgGABQgEgBgGgEQgGgEgMgBQgGABgJAPQgIAOAAAJQAAAKAHAGQAHAFALABQAGAAAKgGQAJgEADAAQAEAAAEADQAEAEAAAFQAAAIgQAIQgPAGgJAAQgVAAgOgMg");
	this.shape_34.setTransform(289.2,38.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgIBEQgEgEgBgFIABgLIAAgKIgBgyIgTgBQgMgCAAgLQAAgFADgEQAEgEAGAAIARABIAAgKIgBgKQAAgFAEgEQAEgEAFABQAOAAAAAYIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgEADgGAAIgEAAIgGAAIgJABIACAzIAAAEIAAAGQABAWgOABQgFAAgEgEg");
	this.shape_35.setTransform(279.6,36.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAGAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQAAAFgEAEQgEAEgFAAQgGAAgEgEgAgIgxQgEgEgBgGQABgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_36.setTransform(272.3,35.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgoBOQgDgDAAgGIAAglIAAglQgBgVgBgPIgBgTQAAgIADgHQAFgGAGAAQAGAAAEAEQAEAEAAAFIAAABQAGgEAGgCQAGgCAHAAQAWABAKASQAJAPgBAWQAAAVgMAOQgNAPgWAAQgHAAgJgBIAAAnQAAAGgFADQgEAEgFAAQgGAAgEgEgAgFguQgGAEgGAFIABAoQAJACAHAAQAKAAAGgGQAEgHAAgLQABgMgCgGQgCgMgKAAQgGAAgGADg");
	this.shape_37.setTransform(264,40.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgbAzQgPgGAAgLQAAgJAMAAQAEAAAJADQAIACAGABQASgBAAgHQAAgFgOgGIgZgMQgNgKAAgNQAAgUAUgHQANgEAYAAQAJAAAFADQAHADAAAJQAAASgKAAQgKAAgCgJIgIAAQgWAAAAAGQAAAEANAHQAUAIAGAFQAOAKABANQAAAQgQAJQgNAHgRAAQgNAAgLgEg");
	this.shape_38.setTransform(244.9,38.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AAXAtQgIAEgHACQgHADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgCAKIAAAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAFgCQAFgCAGgEQgEgWAAgLIABgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_39.setTransform(234.7,38.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AADAfQgDgJgCgYIgDAFIgOAmQgCAEgDACQgEAHgIAAQgFAAgEgIQgGgJgDgNQgEgMgFgoIgCgNQAAgGAEgDQAEgEAGAAQAKAAADALIACANIABAOIAEAXIARgwQAEgNAKAAQALAAADAPIAFAaIAGAaIAOg6QACgJALAAQAFAAAFAEQAEAEAAAFIgBADIgUBEQgDAJgHAJQgEAHgJAAQgLgBgIgXg");
	this.shape_40.setTransform(222.3,38.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0066FF").s().p("AgIBNQgEgEgBgGIAAiGQABgGAEgDQAEgDAEAAQAGAAAEADQADADAAAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_41.setTransform(203.8,35.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0066FF").s().p("AgIBNQgFgEAAgGIAAiGQAAgGAFgDQADgDAGAAQAFAAAEADQAEADgBAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_42.setTransform(198.3,35.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0066FF").s().p("AAXAtQgIAEgHACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQARgRAYAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgCAKIAAAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgKgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAEgCAGgEQgEgWAAgLIABgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_43.setTransform(190.2,38.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0066FF").s().p("AgcBLQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgIIABgHIAAhtQAAgIADgFQAEgHAHAAQAKAAAAALIAAAEIAAAFIAAAlQAHgEAHgCQAGgCAFAAQAXAAAOARQAOAPAAAVQAAAYgQAPQgPAQgWAAQgOAAgMgEgAgKgBQgHACgIAFIAAAqQANAGAKAAQALAAAIgIQAIgJAAgNQAAgMgHgIQgGgIgMAAQgEAAgGADg");
	this.shape_44.setTransform(178.7,35.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghAqQgQgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgHAGg");
	this.shape_45.setTransform(158.4,38.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_46.setTransform(147.3,35.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape_47.setTransform(134.5,35.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgNAaQAAgFAEgEQAFgDAEAAQAPAAAAAWQAAAGgEAEQgEADgGAAQgOAAAAgXgAgJgTQgEgEAAgGIgBgDIAAgDQAAgGAEgDQAEgEAGAAQANAAAAATQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_48.setTransform(114.6,36.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgtBKQgLgJAAgfIACgmIACgoIgBgKIgBgKQAAgPAOAAQAFAAADADIAVgFIATgBQAYAAAQAGQAIADABAJQAAAFgEAEQgEAFgGgBIgEgBQgQgDgPAAIgPAAIgSAEIgBAnIAmgEIAXgCQAGAAAEAEQAEADAAAHQAAAKgMACIgXABIgqAFIAAAUQAAASACADQABABAMAAIARAAIASAAIAGgBIAFAAQAGAAAEADQAFADAAAHQAAALgMACQgJACgeAAQggAAgKgJg");
	this.shape_49.setTransform(104.2,35.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgVBFQgMgcgOg0IgIgbQgGgTABgGQgBgHAFgDQAEgEAFAAQAKAAAEAKIADARIAJAgIAQAwIAVg6IAJgYQAGgNAGgIQAFgFAGAAQAFAAAFAEQADAEAAAGQAAAEgCADQgFAIgFALIgHATIgaBCQgEAMgHAMQgFAIgGAAQgKAAgFgKg");
	this.shape_50.setTransform(91,36);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_51.setTransform(78.6,35.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQAEgEAGAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAYAAQAJAAAOAFQARAFAAAHQABAGgEADQgEAFgGAAIgOgCIgNgCQgNAAgKAGQgMAGAAAHQAAAEADACQAEADAHABIAYABQAVACANAKQAOALAAAVQAAAZgdANQgVAKgbAAQgZAAgPgLg");
	this.shape_52.setTransform(66.3,36.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQAEgEAGAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgIgDgUAAQgRgBgNgFQgTgIABgPQAAgTAUgQQAUgQAYAAQAJAAAOAFQARAFAAAHQABAGgEADQgEAFgGAAIgOgCIgNgCQgNAAgLAGQgMAGABAHQAAAEADACQAEADAHABIAYABQAWACAMAKQAOALAAAVQAAAZgdANQgVAKgbAAQgaAAgOgLg");
	this.shape_53.setTransform(52.5,36.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AAiA4QgFgMgEgPQgHABgRABIgWADIgPAgQgFAHgIAAQgFAAgFgEQgDgDAAgGQgBgFAOgdIgBgFQABgFAJgDIAfgxQAXglAGAAQAKAAAEANIAGAgIAPA/IAFANQADAIABAFQgBAFgEAEQgEAEgGAAQgHgBgIgRgAgHAJIANgBIANgCIgGggIgUAjg");
	this.shape_54.setTransform(38.1,36);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgsBKQgDgEAAgFIAAgbIACgsIACgtQAAgZAOABIAJgCIAOAAQATAAAQANQATAOAAATQAAAZgUAOQgSANgXAAIgIgBIgBAtQAAAFgDAEQgEAEgFAAQgGAAgEgEgAgRglIgCAhIAGABQAPAAAJgHQALgIAAgNQAAgIgKgGQgJgHgLAAIgGAAIgDAAIAAAPg");
	this.shape_55.setTransform(25.6,35.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgLAJQgEgEAAgFQAAgEAEgEQAGgEAFAAQAHAAAEAEQAFAEAAAEQAAAFgFAEQgEAEgHAAQgFAAgGgEg");
	this.shape_56.setTransform(338.6,132.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgIBEQgEgEAAgFIAAgLIAAgKIgBgyIgTgBQgMgCAAgLQAAgFAEgEQADgEAGAAIARABIAAgKIgBgKQAAgFAEgEQAEgEAFABQAOAAAAAYIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAzIAAAEIAAAGQABAWgOABQgFAAgEgEg");
	this.shape_57.setTransform(286.2,126.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAGAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQAAAFgEAEQgEAEgFAAQgGAAgEgEgAgIgxQgEgEAAgGQAAgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_58.setTransform(278.9,125.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0066FF").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAFgDAEAAQAGAAAEADQADADABAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_59.setTransform(252.8,125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0066FF").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAFgDAEAAQAGAAAEADQADADABAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_60.setTransform(247.3,125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0066FF").s().p("AAYAtQgJAEgIACQgGADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQARgRAXAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_61.setTransform(239.2,127.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_62.setTransform(207.4,127.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AgsBKQgMgJAAgfIADgmIACgoIgBgKIgBgKQAAgPANAAQAEAAAEADIAVgFIATgBQAZAAAOAGQAKADgBAJQAAAFgDAEQgEAFgGgBIgEgBQgQgDgPAAIgPAAIgRAEIgBAnIAkgEIAZgCQAFAAAEAEQAEADAAAHQAAAKgMACIgYABIgoAFIgBAUQAAASADADQAAABALAAIASAAIASAAIAGgBIAFAAQAGAAAEADQAFADAAAHQAAALgLACQgLACgdAAQggAAgJgJg");
	this.shape_63.setTransform(153.2,125.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgUBFQgNgcgOg0IgIgbQgFgTgBgGQABgHAEgDQAEgEAGAAQAJAAADAKIAFARIAJAgIAOAwIAXg6IAIgYQAGgNAGgIQAFgFAFAAQAHAAADAEQAFAEAAAGQgBAEgCADQgFAIgEALIgIATIgaBCQgEAMgHAMQgEAIgIAAQgKAAgDgKg");
	this.shape_64.setTransform(140,125.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgrA7QgOgPAAgVQAAggAcgiQAZgcAYAAIAIAAIAGABQAEgFAGAAQAKAAACAMQACAIAAALQAAAFgDAEQgDAFgHAAQgJAAgEgKQgCgDgCgBIgIgBQgMAAgPATQgXAaAAAXQAAALAHAHQAHAIAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAGgFAFQgbAWgbAAQgWABgPgRg");
	this.shape_65.setTransform(102.3,125.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AAiA4QgFgMgEgPQgHABgQABIgXADIgQAgQgEAHgHAAQgGAAgEgEQgFgDAAgGQAAgFAPgdIgBgFQAAgFAJgDIAfgxQAXglAGAAQAKAAAEANIAHAgIAOA/IAFANQADAIAAAFQABAFgFAEQgEAEgFAAQgIgBgIgRgAgHAJIANgBIAOgCIgHggIgUAjg");
	this.shape_66.setTransform(88.6,125.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgKAJQgFgEAAgFQAAgEAFgEQAFgEAFAAQAHAAAEAEQAFAEAAAEQAAAFgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape_67.setTransform(405.3,42.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAFgDAEAAQAGAAAEADQADADABAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_68.setTransform(398.2,35.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAFgDAEAAQAGAAAEADQADADABAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_69.setTransform(392.7,35.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAYAtQgJAEgIACQgGADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQARgRAXAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAFAGAKAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_70.setTransform(384.6,38.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgHIABgGIAAhvQAAgGADgGQAEgHAHAAQAKAAAAALIAAAFIAAADIAAAmQAHgEAHgCQAGgCAFAAQAXAAAOAQQAOAQAAAWQAAAWgQAQQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgIQAIgJAAgMQAAgNgHgJQgGgHgMAAQgEAAgGADg");
	this.shape_71.setTransform(373.1,35.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_72.setTransform(352.7,38);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_73.setTransform(341.7,35.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgIBEQgFgEAAgFIABgLIAAgKIgCgxIgSgCQgMgBAAgMQAAgFADgEQAEgEAGAAIARACIgBgLIAAgKQAAgFAEgEQAEgDAGAAQANgBAAAZIAAAIIAJgBQAMAAAEACQAIACAAAKQAAAFgEADQgDAEgHAAIgEAAIgGAAIgJABIACAyIAAAFIAAAGQAAAXgNAAQgFgBgEgDg");
	this.shape_74.setTransform(331.1,36.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgcBMQgEgEAAgFQAAgKAUgsQgKgVgXgpIgGgHQgCgFAAgDQAAgGAEgEQAFgEAFAAQAGAAAEAFQAOASARAlIANgbIAOgaQAEgHAHAAQAFAAAFAEQAEADAAAGIgBAGIgiBEQgMAagHARIgGASQgDAJgJAAQgFAAgFgDg");
	this.shape_75.setTransform(312.1,40.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgHIABgGIAAhvQAAgGADgGQAEgHAHAAQAKAAAAALIAAAFIAAADIAAAmQAHgEAHgCQAGgCAFAAQAXAAAOAQQAOAQAAAWQAAAWgQAQQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgIQAIgJAAgMQAAgNgHgJQgGgHgMAAQgEAAgGADg");
	this.shape_76.setTransform(300.8,35.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgIBEQgFgEABgFIAAgLIABgKIgCgxIgTgCQgMgBAAgMQAAgFAEgEQAEgEAFAAIARACIAAgLIgBgKQAAgFAEgEQAEgDAFAAQAOgBAAAZIAAAIIAKgBQALAAAEACQAIACAAAKQAAAFgEADQgEAEgFAAIgGAAIgEAAIgJABIABAyIABAFIAAAGQgBAXgOAAQgEgBgEgDg");
	this.shape_77.setTransform(281.5,36.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgLBHQgEgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAFAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQABAFgEAEQgEAEgFAAQgFAAgEgEgAgIgxQgFgEABgGQgBgGAFgEQAFgFAEAAQAHAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgHAAQgEAAgFgEg");
	this.shape_78.setTransform(274.2,35.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_79.setTransform(265.6,35.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AAUAtIgCgUIgCgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgIAAgIALQgHAKgFAQIgBAJIAAAJIgBAIIAAAJQAAAFgFAEQgEAEgFAAQgGAAgEgEQgEgEABgFIgBgJIgBgIIACgbIABgZIAAgJIgBgJQAAgGAEgDQAEgEAGAAQANAAABAPIAAACQAOgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgGAAQgLAAgCgMg");
	this.shape_80.setTransform(245.9,37.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_81.setTransform(234.8,38);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AghAqQgQgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgHAGg");
	this.shape_82.setTransform(223.6,38);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgHIABgGIAAhvQAAgGADgGQAEgHAHAAQAKAAAAALIAAAFIAAADIAAAmQAHgEAHgCQAGgCAFAAQAXAAAOAQQAOAQAAAWQAAAWgQAQQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgIQAIgJAAgMQAAgNgHgJQgGgHgMAAQgEAAgGADg");
	this.shape_83.setTransform(212.3,35.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgbAzQgOgGAAgKQAAgKALAAQAEAAAJADQAJADAEgBQATABAAgJQAAgFgNgGIgZgLQgOgKAAgOQAAgTAVgHQAMgEAYAAQAKAAAEADQAGADAAAJQAAARgJAAQgKABgBgJIgIgBQgXABAAAGQAAAEANAGQATAJAIAFQANAJAAANQAAARgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape_84.setTransform(192.7,38);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AAYAtQgJAEgIACQgGADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQARgRAXAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_85.setTransform(182.5,38.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgHIABgGIAAhvQAAgGADgGQAEgHAHAAQAKAAAAALIAAAFIAAADIAAAmQAHgEAHgCQAGgCAFAAQAXAAAOAQQAOAQAAAWQAAAWgQAQQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgIQAIgJAAgMQAAgNgHgJQgGgHgMAAQgEAAgGADg");
	this.shape_86.setTransform(150.8,35.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgvBLQgFgGAAgFIAAhnIgBgNIABgNQABgJAQgCQAHgCASAAQARAAARAMQAUAOAAAVQAAALgEAIQgEAGgIAGQAKAFAHAJQAJAKAAAKQAAAOgPALQgJAIgKADQgWAJgjAAQgGAAgEgEgAgaA0QARgBATgFQARgFAAgGQAAgHgLgGQgJgFgHgBIgaAAgAgZgeIgBAUIAOAAQAdgCAAgTQAAgIgJgGQgIgGgKAAIgQAAg");
	this.shape_87.setTransform(128.5,35.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgtBLQgLgKABggIACglIABgoIgBgKIAAgKQgBgPAOAAQAEAAAEADIAWgFIASgBQAYAAAPAGQAJADAAAJQABAFgEAEQgEAEgGABIgFgBQgPgFgPAAIgPABIgSAEIgBAnIAlgEIAZgCQAFAAAEAEQAEAEAAAGQAAAKgMACIgXACIgpADIgBAUQAAATACAEQACABAKAAIASAAIASgBIAGAAIAGgBQAFAAAEADQAFAEAAAGQAAALgMADQgKABgdAAQggAAgKgIg");
	this.shape_88.setTransform(98.6,35.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AgVBFQgLgcgPg0IgIgbQgGgSABgIQgBgFAFgEQAEgEAFABQAKAAAEAJIADARIAJAfIAQAxIAVg6IAJgYQAGgOAGgHQAEgFAHAAQAFAAAFAEQADAEAAAGQABADgDAEQgFAIgEALIgIATIgaBDQgFALgGAMQgFAIgGAAQgLAAgEgKg");
	this.shape_89.setTransform(85.4,35.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAXAAQAKAAAOAFQARAFABAHQgBAGgDADQgEAFgGAAIgOgCIgOgCQgMAAgKAGQgNAGAAAHQABAEAEACQADADAHABIAYABQAWACAMAKQAOALAAAVQAAAZgdANQgVAKgcAAQgYAAgPgLg");
	this.shape_90.setTransform(60.7,36);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAYAAQAJAAAOAFQARAFAAAHQAAAGgDADQgEAFgGAAIgOgCIgNgCQgNAAgKAGQgMAGAAAHQAAAEADACQAEADAHABIAYABQAVACANAKQAOALAAAVQAAAZgdANQgWAKgaAAQgZAAgPgLg");
	this.shape_91.setTransform(46.9,36);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AAiA4QgFgMgEgPQgHABgQABIgXADIgQAgQgEAHgIAAQgFAAgFgEQgDgDAAgGQAAgFANgdIgBgFQABgFAJgDIAfgxQAXglAGAAQALAAADANIAGAgIAPA/IAFANQAEAIAAAFQAAAFgFAEQgEAEgGAAQgHgBgIgRgAgHAJIANgBIAOgCIgHggIgUAjg");
	this.shape_92.setTransform(32.5,35.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AgrBKQgEgEAAgFIAAgbIACgsIACgtQAAgZAOABIAJgBIAPgBQARAAARAMQATAOAAAVQAAAZgUANQgRANgYAAIgIAAIgBAsQABAFgEAEQgDAEgGAAQgGAAgDgEgAgRgmIgDAiIAHABQAOAAAKgHQAMgIgBgMQABgJgLgHQgKgFgKgBIgGAAIgDAAIAAAOg");
	this.shape_93.setTransform(20,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:78.6,y:35.9}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:114.6,y:36.9}},{t:this.shape_47,p:{x:134.5,y:35.7}},{t:this.shape_46,p:{x:147.3,y:35.5}},{t:this.shape_45},{t:this.shape_44,p:{x:178.7,y:35.6}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:375.7,y:35.6}},{t:this.shape_27,p:{x:386.8,y:38.3}},{t:this.shape_26,p:{x:398,y:35.6}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:99.9,y:125.4}},{t:this.shape_21,p:{x:112.1,y:125.6}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:148.2,y:126.6}},{t:this.shape_17},{t:this.shape_16,p:{x:178.7,y:128}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:246.4,y:125.2}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:298.9,y:125.2}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_51,p:{x:73,y:35.8}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_48,p:{x:109,y:36.8}},{t:this.shape_87},{t:this.shape_27,p:{x:139.6,y:38.1}},{t:this.shape_86},{t:this.shape_10,p:{x:171.3,y:35.4}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_22,p:{x:115.4,y:125.2}},{t:this.shape_21,p:{x:127.6,y:125.5}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_18,p:{x:163.6,y:126.5}},{t:this.shape_47,p:{x:183.5,y:125.2}},{t:this.shape_46,p:{x:196.3,y:125.1}},{t:this.shape_62},{t:this.shape_44,p:{x:227.7,y:125.1}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_6,p:{x:270.3,y:125.1}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_28,p:{x:306.2,y:125.2}},{t:this.shape_16,p:{x:317.2,y:127.8}},{t:this.shape_26,p:{x:328.5,y:125.1}},{t:this.shape_56}]},60).wait(60));

	// Layer 5
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(1,1,216,0.8)").s().p("AghAJQgFgDAAgGQAAgEAFgEQAFgCAGAAIAWgBIAXAAQAGAAAFACQAFADAAAGQAAAKgOABIgvABQgGAAgFgDg");
	this.shape_94.setTransform(105.1,92.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(1,1,216,0.8)").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape_95.setTransform(83.6,90.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(1,1,216,0.8)").s().p("AgrA8QgOgQAAgVQAAgfAcgjQAZgdAYAAIAIAAIAGABQAEgDAGAAQAKgBACALQACAJAAALQAAAEgDAEQgDAGgHAAQgJAAgEgJQgCgEgCgCIgIAAQgMAAgPATQgXAaAAAXQAAAKAHAIQAHAIAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAEAAAFQAAAHgFADQgbAYgbAAQgWgBgPgPg");
	this.shape_96.setTransform(70.5,90.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(1,1,216,0.8)").s().p("AgtBKQgLgJABgfIABgnIACgnIgBgKIgBgKQAAgPAOAAQAEAAAEACIAWgEIASgBQAYAAAPAFQAJAEAAAJQAAAFgDAEQgEAEgGAAIgFgBQgPgDgPAAIgPABIgSADIgBAmIAlgDIAYgCQAGAAAEAEQAEAEAAAFQAAALgMACIgXACIgqADIAAAVQAAATACACQABABAMAAIARAAIASAAIAGgBIAGAAQAFAAAEADQAFADAAAHQAAALgMADQgKABgdAAQggAAgKgJg");
	this.shape_97.setTransform(58.2,90.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(1,1,216,0.8)").s().p("Ag1BJQgDgEAAgGIAAgVIAAgWIAAhOQAAgHAEgFQAFgGAJAAIAYACQAOACAIAFQAqAVAAAfQAAAMgJAJQgIAKgSAHQAaAOANAPQADAEAAAFQABAGgFAEQgEADgFAAQgGAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgdADIADAAQAZAAAKgFQAFgDAEgEQAEgEABgCQAAgLgPgKQgLgKgPgBIgLgBg");
	this.shape_98.setTransform(45.5,90.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(1,1,216,0.8)").s().p("Ag0BJQgEgEgBgGIAAgVIABgWIAAhOQAAgHAEgFQAFgGAIAAIAZACQAOACAIAFQAqAVAAAfQAAAMgJAJQgJAKgRAHQAaAOANAPQAEAEgBAFQABAGgFAEQgEADgFAAQgGAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgGAAgDgEgAgeADIAFAAQAXAAALgFQAFgDAFgEQADgEAAgCQAAgLgNgKQgNgKgOgBIgMgBg");
	this.shape_99.setTransform(32.7,90.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(1,1,216,0.8)").s().p("AgzA8QgWgSAAgcQAAggAVgbQAXgfAjAAQAiAAARAQQARAQAAAeQAAAhgTAbQgWAfgjAAQgdAAgUgRgAgfgdQgOAUAAAXQAAAQAMAKQANALASgBQAUAAAPgUQANgUAAgYQAAgUgJgIQgJgHgWgBQgVABgQAUg");
	this.shape_100.setTransform(18.1,91);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(1,1,216,0.8)").s().p("AgrA8QgOgQAAgVQAAgfAcgjQAZgdAYAAIAIAAIAGABQAEgDAGAAQAKgBACALQACAJAAALQAAAEgDAEQgDAGgHAAQgJAAgEgJQgCgEgCgCIgIAAQgMAAgPATQgXAaAAAXQAAAKAHAIQAHAIAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAEAAAFQAAAHgFADQgbAYgbAAQgWgBgPgPg");
	this.shape_101.setTransform(4.1,90.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#929292").s().p("AghAJQgFgDAAgGQAAgEAFgEQAFgCAGAAIAWgBIAXAAQAGAAAFACQAFADAAAGQAAAKgOABIgvABQgGAAgFgDg");
	this.shape_102.setTransform(79.3,-1.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#929292").s().p("Ag1BJQgDgEAAgGIAAgVIAAgWIAAhOQAAgHAEgFQAFgGAJAAIAYACQAOACAIAFQAqAVAAAfQAAAMgJAJQgJAKgRAHQAaAOANAPQAEAEgBAFQABAGgFAEQgEADgFAAQgGAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgdADIADAAQAZAAAKgFQAFgDAEgEQAEgEAAgCQAAgLgNgKQgNgKgOgBIgLgBg");
	this.shape_103.setTransform(58.5,-3.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#929292").s().p("AgzA8QgWgRAAgdQAAggAVgbQAXgfAjAAQAiAAARAQQARAQAAAfQAAAggTAbQgWAfgjAAQgdAAgUgRgAgfgdQgOAVAAAWQAAAQAMAKQANALASgBQAUAAAPgUQANgUAAgXQAAgVgJgIQgJgHgWAAQgVAAgQAUg");
	this.shape_104.setTransform(43.8,-3.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#929292").s().p("Ag0BJQgFgEAAgGIAAgVIABgWIAAhOQAAgHAEgFQAFgGAIAAIAZACQANACAJAFQAqAVAAAfQAAAMgJAJQgJAKgRAHQAaAOANAPQADAEABAFQgBAGgEAEQgEADgGAAQgFAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgFAAgEgEgAgeADIAFAAQAXAAALgFQAFgDAFgEQADgEABgCQgBgLgOgKQgMgKgOgBIgMgBg");
	this.shape_105.setTransform(29.7,-3.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#929292").s().p("Ag1BJQgDgEAAgGIAAgVIAAgWIAAhOQAAgHAEgFQAFgGAJAAIAYACQANACAJAFQAqAVAAAfQAAAMgJAJQgIAKgSAHQAaAOANAPQAEAEAAAFQAAAGgFAEQgEADgGAAQgFAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgdADIADAAQAZAAAKgFQAFgDAEgEQAFgEAAgCQgBgLgOgKQgMgKgOgBIgLgBg");
	this.shape_106.setTransform(16.9,-3.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#929292").s().p("AgtBKQgLgJAAggIACgmIACgnIgBgKIgBgKQAAgPAOAAQAFAAADACIAVgEIATgBQAYAAAQAFQAIAEABAJQAAAFgEAEQgEAEgGAAIgEAAQgQgEgPgBIgPACIgSADIgBAmIAmgDIAXgCQAGAAAEAEQAEAEAAAFQAAALgMACIgXACIgqADIAAAUQAAAUACADQABABAMgBIARAAIASAAIAGAAIAGgBQAFAAAEADQAFADAAAHQAAALgMADQgJABgeAAQggAAgKgJg");
	this.shape_107.setTransform(4.3,-3.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(102,255,255,0.502)").s().p("A5jClIAAlJMAzHAAAIAAFJg");
	this.shape_108.setTransform(210.8,126.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(213,213,213,0.502)").s().p("EggSADWIAAmrMBAlAAAIAAGrg");
	this.shape_109.setTransform(211.6,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},60).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-20.5,422.6,163.7);


(lib.content15a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// arrows
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlRIBIAAi/IhgAAICZjVIAAAAIC2DVIhpAAIAAC/gABAmNIByAAIAAhyICJAAIAAByIB3AAIi3DWg");
	this.shape.setTransform(202.5,68.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// sentence
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_1.setTransform(276.1,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgeAjIABgSQACgYAAggQAAgDACgDQACgCAEAAQADAAADACQACADAAADQAAAggCAYIgBAPQAOAAAVgGIACgBQAEAAACACQACADAAADQAAAFgFADQgHADgOABQgMADgJAAQgOAAAAgNg");
	this.shape_2.setTransform(269,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_3.setTransform(262.4,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_4.setTransform(255.8,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAEABIAEAAQADgCADAAQAHAAABAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgDgDIgEgBQgIAAgIAMQgOAPAAAOQAAAGAFAFQAEAEAGAAQAFAAAGgDIAIgGQAFgDADAAQADAAACADQADACAAAEQAAADgEADQgQANgPAAQgNAAgKgJg");
	this.shape_5.setTransform(249,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_6.setTransform(241.9,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_7.setTransform(234.5,10.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgfAsQgCgCgBgEIAAgNIAAgNIAAguQAAgEADgDQADgEAGAAIAOABQAIABAFADQAZANAAATQAAAHgFAFQgFAGgLAEQAQAJAHAJQADACgBADQABADgDADQgDACgDAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgEAAQgDAAgCgCgAgSACIADAAQAOAAAHgDIAFgEIADgDQAAgHgJgGQgHgGgJgBIgHAAg");
	this.shape_8.setTransform(226.6,10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAVAhIgGgQIgOABIgNACIgJATQgDAFgFAAQgDAAgDgDQgCgCAAgDQAAgDAIgRIgBgEQABgDAGgBQAHgOALgPQANgWAEAAQAHAAACAHIADATIAJAmIADAIIACAHQAAAEgDACQgCACgDAAQgFAAgEgLgAgDAFIAHgBIAIAAIgEgTIgLAUg");
	this.shape_9.setTransform(218.2,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_10.setTransform(210.6,10.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_11.setTransform(198.1,10.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_12.setTransform(189.7,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAUAhIgFgQIgOABIgOACIgJATQgCAFgFAAQgDAAgCgDQgDgCAAgDQAAgDAIgRIgBgEQABgDAFgBQAJgOAKgPQANgWAEAAQAGAAACAHIAEATIAJAmIADAIIACAHQAAAEgCACQgDACgDAAQgFAAgFgLgAgEAFIAHgBIAJAAIgEgTIgMAUg");
	this.shape_13.setTransform(181.1,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_14.setTransform(173.6,10.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgcAsQgDgCAAgEIAAg9IAAgIIAAgHQABgGAKgBIAOgBQALgBAKAIQAMAIAAANQAAAGgDAFQgCADgFAEQAGADAEAFQAFAHAAAFQAAAJgIAGQgGAFgGACQgNAGgUgBQgEAAgDgDgAgPAgQAKgCALgDQALgDgBgDQAAgEgGgEQgFgDgFAAIgPgBgAgPgSIAAAMIAIAAQARgBAAgLQAAgFgFgEQgFgDgGAAIgJAAg");
	this.shape_15.setTransform(222.6,128.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AggAsQgBgCAAgEIAAgNIAAgNIAAguQAAgEACgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAPAJAIAJQADACAAADQAAADgDADQgDACgDAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgDAAQgEAAgDgCgAgRACIACAAQAPAAAFgDIAGgEIACgDQABgHgJgGQgHgGgIgBIgHAAg");
	this.shape_16.setTransform(215,128.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgaAtQgHgGAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGADAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEAAACADQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_17.setTransform(207.4,128.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgMAqQgHgRgJgfIgEgQQgEgLAAgFQAAgDADgCQADgCACAAQAGAAACAFIADALIAFATIAJAcIANgiIAFgOQAEgJADgEQADgDAEAAQADAAACACQADACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIgGALIgFAMIgPAoIgHAOQgDAEgEAAQgFAAgDgFg");
	this.shape_18.setTransform(199.5,128.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgNAsQgDgCAAgDQAAgDAMgVIgNgTIgSgeIgBgEQAAgDACgDQADgCADAAQAEAAADAFIAEAGIAKARIAKARIANgbIAFgMQADgGAFAAQADAAADACQACADAAADIgDAJIgMAbIgNAaIgJASQgDAEgFAAQgDAAgCgCg");
	this.shape_19.setTransform(186.2,129);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AggAsQgBgCAAgEIAAgNIAAgNIAAguQgBgEADgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgGAFQgEAGgLAEQAPAJAIAJQADACAAADQAAADgDADQgDACgDAAQgDAAgDgDQgRgQgVgHIABATQAAAEgDACQgCACgDAAQgEAAgDgCgAgRACIACAAQAPAAAFgDIAGgEIACgDQAAgHgIgGQgHgGgJgBIgGAAg");
	this.shape_20.setTransform(178.9,128.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAUAhIgFgQIgOABIgOACIgJATQgCAFgFAAQgDAAgCgDQgDgCAAgDQAAgDAJgRIgCgEQABgDAFgBQAJgOAKgPQANgWAEAAQAGAAACAHIAEATIAJAmIADAIIACAHQAAAEgCACQgDACgEAAQgEAAgFgLgAgEAFIAHgBIAJAAIgEgTIgMAUg");
	this.shape_21.setTransform(170.4,129);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_22.setTransform(162.7,128.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgeAjIABgSQACgYAAggQAAgDACgDQACgCAEAAQADAAADACQACADAAADQAAAggCAYIgBAPQAOAAAVgHIACAAQAEAAACACQACADAAADQAAAFgFADQgHACgOACQgMADgJAAQgOAAAAgNg");
	this.shape_23.setTransform(156.4,129);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_24.setTransform(149.6,128.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AARAiIgIgMIgHgKIgRAUIgLAMQgDACgDAAQgEAAgCgCQgDgCAAgEQAAgDACgCIALgMIAVgVIgNgQIgGgIIgIgIQgDgDAAgDQAAgDACgCQADgDADAAQADAAAFAEIAHAHIAHAKIAKAMIAPgTQALgOAEAAQAEAAACADQADACAAADQAAACgDADIgMAPIgOASIAMARIANARQADACAAADQAAADgDADQgCACgEAAQgGAAgJgNg");
	this.shape_25.setTransform(141.9,129);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgXAoQgPgMAAgdIABgIIAAgIIAAgHIAAgGQAAgFACgEQACgGAEAAQADAAACADQADABABAEIAAAKIgBAKIAAAIIgBAIQABAJACAHQACAJAFAEQACABAKABQAOAAAFgaQADgNAAgaIACgFQADgFAEAAQAFAAABAEQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAXgCANQgDATgKAOQgEAFgGAEQgIAFgGgBQgPABgIgGg");
	this.shape_26.setTransform(133.2,129.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AAUAhIgFgQIgOABIgNACIgJATQgDAFgFAAQgDAAgDgDQgCgCAAgDQAAgDAJgRIgBgEQAAgDAFgBQAIgOALgPQAOgWADAAQAGAAACAHIAEATIAJAmIADAIIACAHQAAAEgDACQgCACgEAAQgEAAgFgLgAgDAFIAHgBIAIAAIgEgTIgLAUg");
	this.shape_27.setTransform(124.4,129);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgGIABgHIAAhvQAAgGADgGQAEgHAHAAQAKAAAAAMIAAAEIAAADIAAAmQAHgEAHgCQAGgCAFAAQAXAAAOARQAOAOAAAXQAAAWgQAQQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgJQAIgHAAgNQAAgNgHgJQgGgHgMAAQgEAAgGADg");
	this.shape_28.setTransform(340.3,67.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_29.setTransform(329,69.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgvBLQgFgFAAgGIAAhnIgBgNIABgNQABgJAQgCQAHgCASAAQARAAARAMQAUAOAAAVQAAALgEAHQgEAHgIAGQAKAEAHAKQAJAKAAAKQAAANgPAMQgJAIgKADQgWAJgjAAQgGAAgEgEgAgaA0QARAAATgGQARgFAAgFQAAgIgLgGQgJgEgHgCIgaAAgAgZgfIgBAVIAOAAQAdgCAAgTQAAgIgJgFQgIgIgKABIgQAAg");
	this.shape_30.setTransform(318,67.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgcBMQgEgEAAgFQAAgKAVgsQgLgVgXgpIgGgIQgCgEAAgEQAAgFAFgEQAEgEAFAAQAHAAADAFQAOATARAkIANgcIANgZQAFgHAHAAQAFAAAFADQAEAFAAAEIgBAHIgiBEQgNAagGARIgGASQgDAJgJAAQgFAAgFgDg");
	this.shape_31.setTransform(297.1,72.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgGIABgHIAAhvQAAgGADgGQAEgHAHAAQAKAAAAAMIAAAEIAAADIAAAmQAHgEAHgCQAGgCAFAAQAXAAAOARQAOAOAAAXQAAAWgQAQQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgJQAIgHAAgNQAAgNgHgJQgGgHgMAAQgEAAgGADg");
	this.shape_32.setTransform(285.8,67.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAbBKQgHAEgHABIgOABQgVAAgPgOQgPgOAAgWQAAgbAPgPQAPgQAXAAQAHAAAGABQAGACAEADQABghACgMQACgMALAAQAGAAADADQADAFAAAEIgBAsQgDAbAAAOQAAAjADAMIAAACQAAAGgFADQgDAEgGAAQgGAAgEgGgAgTAFQgIAIAAARQABAKAHAIQAIAHAKAAQAHAAAEgCIAJgGIADgDIAAgkQgDgGgFgCQgGgDgHAAQgNAAgHAIg");
	this.shape_33.setTransform(265.2,67.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_34.setTransform(253.7,69.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_35.setTransform(242.7,67.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgeArQgPgNAAgVQAAgSAOgVQAPgYAUAAQAKAAAOAFQAQAIABAIQAAAFgEADQgEAEgFABQgFAAgFgFQgGgFgMABQgHAAgIAOQgJAPAAAJQAAAKAIAGQAHAGAKgBQAHAAAKgEQAJgGACAAQAGAAADAFQAEAEAAAEQAAAIgQAHQgPAHgKAAQgUAAgPgMg");
	this.shape_36.setTransform(231.4,69.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgIBEQgFgDAAgGIABgKIABgLIgDgxIgSgCQgMgBAAgMQAAgGADgDQAEgEAGAAIARACIgBgLIAAgJQAAgGAEgEQAEgDAGgBQANABAAAYIAAAIIAJgBQAMAAAEACQAIACAAAJQAAAGgEADQgDAFgHAAIgEAAIgGgBIgJABIACAyIABAFIAAAGQAAAXgPgBQgEAAgEgDg");
	this.shape_37.setTransform(221.8,68.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgMBHQgDgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQADgEAHAAQAEAAAEAEQAEAEAAAFIgBAVIgBAWIABASIAAASQgBAFgDAEQgEAEgFAAQgFAAgFgEgAgIgxQgFgEAAgGQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_38.setTransform(214.5,67.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgoBPQgDgEgBgGIAAgkIAAgmQABgVgCgPIgBgUQAAgHADgGQAFgHAHAAQAFAAAEAEQADADABAGIAAABQAGgEAGgBQAGgCAHAAQAXgBAKAUQAHAOAAAXQAAAUgMAOQgNAPgWABQgHgBgKgCIAAAoQAAAGgDAEQgFADgFAAQgGAAgEgDgAgEgtQgHADgHAFIABAnQAKADAHAAQAKAAAGgGQAEgGAAgLQAAgOgBgEQgCgMgKAAQgGAAgFADg");
	this.shape_39.setTransform(206.3,72.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgbAzQgOgFAAgLQAAgKALAAQAFAAAIADQAJACAFAAQASAAAAgIQAAgEgNgHIgZgLQgOgKAAgOQAAgUAUgGQANgEAYAAQAJAAAFACQAGAEABAJQAAARgKAAQgJAAgCgHIgIgCQgXAAAAAHQAAAEANAGQAUAKAHAEQAOAKgBAMQAAARgPAJQgMAHgSAAQgNAAgLgEg");
	this.shape_40.setTransform(187.1,69.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAYAtQgKAEgGACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQASgRAXAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAFgCAFgEQgDgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_41.setTransform(176.9,69.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAEAfQgEgJgCgYIgCAFIgQAmQAAAEgDACQgFAHgIAAQgFAAgFgIQgFgJgDgNQgEgMgGgoIgBgNQAAgGAEgDQAEgEAGAAQALAAACALIACANIABAOIAFAXIAQgwQAEgNAKAAQALAAADAPIAFAaIAFAaIAQg6QACgJAKAAQAGAAADAEQAFAEAAAFIAAADIgVBEQgDAJgHAJQgFAHgHAAQgNgBgGgXg");
	this.shape_42.setTransform(164.5,69.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAFgDAEAAQAGAAAEADQADADABAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_43.setTransform(146.1,67);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAEgDAFAAQAGAAAEADQAEADAAAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_44.setTransform(140.6,67);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAYAtQgJAEgIACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQASgRAXAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAFgCAEgEQgCgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_45.setTransform(132.5,69.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgGIABgHIAAhvQAAgGADgGQAEgHAHAAQAKAAAAAMIAAAEIAAADIAAAmQAHgEAHgCQAGgCAFAAQAXAAAOARQAOAOAAAXQAAAWgQAQQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgJQAIgHAAgNQAAgNgHgJQgGgHgMAAQgEAAgGADg");
	this.shape_46.setTransform(121,67.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_47.setTransform(100.6,69.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_48.setTransform(89.6,67.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape_49.setTransform(76.8,67.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// highlight
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AiiCDIAAkFIL3AAIAAEFgApUCDIAAkDIGMAAIAAEDg");
	this.shape_50.setTransform(214.5,68.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(1));

}).prototype = getMCSymbolPrototype(lib.content15a, new cjs.Rectangle(63.3,0,289.2,138.7), null);


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


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EglagVAMBK1AAAMAAAAqBMhK1AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFF66"],[0,1],0,-133.5,0,133.5).s().p("EglaAVBMAAAgqBMBK1AAAMAAAAqBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-240.4,-135.4,480.9,271), null);


(lib.ActiveVoiceDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAJQgFgEAAgFQAAgEAFgEQAEgEAGAAQAHAAAEAEQAFAEAAAEQAAAFgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape.setTransform(144.6,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUAtIgDgUIgBgVIAAgHIAAgJIAAgDIABgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIgBAJIAAAIIgBAJQAAAFgDAEQgFAEgFAAQgGAAgEgEQgDgEgBgFIgBgJIAAgIIABgbIACgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQAMAAABAPIAAACQAPgPAPAAQASAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgGAAQgMAAgBgMg");
	this.shape_1.setTransform(135.3,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_2.setTransform(124.6,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLBHQgEgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAGAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQAAAFgEAEQgEAEgFAAQgGAAgDgEgAgIgxQgEgEAAgGQAAgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_3.setTransform(116.9,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBEQgFgDAAgGIABgKIAAgLIgCgxIgSgCQgMgBAAgMQAAgGADgDQAFgEAFAAIARABIgBgKIAAgJQAAgGAEgEQAEgEAGAAQANAAAAAZIAAAIIAJgBQAMAAAEABQAIADAAAJQAAAGgEADQgDAFgHAAIgEAAIgGgBIgJABIACAzIAAAEIAAAGQAAAWgNAAQgFABgEgEg");
	this.shape_4.setTransform(109.2,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdArQgQgNAAgVQAAgTAOgUQAQgYATAAQALAAANAGQAQAGAAAJQAAAFgDADQgDAFgGAAQgEgBgGgEQgGgFgMABQgGgBgJAPQgIAOAAAKQAAAKAHAGQAHAGALAAQAGgBAKgFQAJgEADgBQAFABAEAEQADADAAAFQAAAIgRAIQgOAGgJAAQgVAAgOgMg");
	this.shape_5.setTransform(99.2,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXAtQgIAEgIACQgGADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgCAKIAAAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAGgCAEgEQgDgWAAgLIABgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_6.setTransform(88.8,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgbAzQgPgFAAgLQAAgKAMAAQAFAAAIADQAIADAGAAQASgBAAgHQAAgGgOgGIgZgLQgNgKAAgOQAAgUAUgGQANgEAYAAQAKAAAEACQAHAEAAAJQAAASgKAAQgKgBgCgHIgIgBQgWgBAAAHQAAAEANAHQATAIAHAFQAOAKABANQAAAQgQAJQgMAHgSAAQgNAAgLgEg");
	this.shape_7.setTransform(69.5,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgKAVQgDgEAAgFIADgYQACgLAKAAQAFAAADAEQAEADAAAFIgEAXQAAAFgDADQgDAEgFAAQgGAAgDgDg");
	this.shape_8.setTransform(62.4,10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgvBKQgFgEAAgGIAAhnIgBgNIABgMQABgKAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAFAHAJQAJAKAAALQAAANgPALQgJAIgKAEQgWAIgjAAQgGAAgEgFgAgaA1QARgBATgGQARgFAAgFQAAgIgLgGQgJgFgHAAIgagBgAgZgfIgBAVIAOABQAdgCAAgVQAAgGgJgGQgIgIgKAAIgQAAg");
	this.shape_9.setTransform(54.3,15.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ag1BJQgDgEAAgGIAAgVIAAgWIAAhOQAAgHAEgFQAFgGAJAAIAYACQAOACAIAFQAqAVAAAfQAAAMgJAJQgIAKgSAHQAaAOANAPQADAEAAAFQABAGgFAEQgEADgFAAQgGAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgdADIADAAQAZAAAKgFQAFgDAEgEQAEgEABgCQAAgLgPgKQgLgKgPgBIgLgBg");
	this.shape_10.setTransform(41.5,15.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgtBKQgLgJABgfIABgnIACgnIgBgKIgBgKQABgPANAAQAEAAAEACIAWgEIASgBQAYAAAPAFQAJAEAAAJQABAFgEAEQgEAFgGgBIgFgBQgPgDgPAAIgPABIgSADIgBAmIAlgDIAYgCQAGAAAEAEQAEAEAAAFQAAALgMACIgXABIgpAEIgBAVQAAASACADQACABAKAAIASAAIASAAIAGgBIAGAAQAFAAAEADQAFAEAAAGQAAALgMADQgKABgdAAQggAAgKgJg");
	this.shape_11.setTransform(28.9,15.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgVBFQgLgcgPg1IgIgaQgGgSABgHQgBgHAFgDQAEgDAFgBQAKAAAEAKIADARIAJAgIAQAwIAVg6IAJgXQAGgOAGgIQAEgFAHAAQAFAAAFAEQADAEAAAFQABAFgDADQgFAIgEAKIgIAUIgaBCQgFAMgGAMQgFAIgGAAQgLAAgEgKg");
	this.shape_12.setTransform(15.7,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_13.setTransform(-5.6,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_14.setTransform(-16.6,15.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIBEQgEgDgBgGIABgKIAAgLIgCgxIgSgCQgMgBAAgMQAAgGADgDQAEgEAGAAIARABIgBgKIAAgJQAAgGAEgEQAEgEAFAAQAOAAAAAZIAAAIIAJgBQAMAAAEABQAIADAAAJQAAAGgEADQgDAFgHAAIgEAAIgGgBIgJABIACAzIAAAEIAAAGQAAAWgNAAQgFABgEgEg");
	this.shape_15.setTransform(-27.2,16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQAEgEAGAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAYAAQAJAAAOAFQARAFAAAHQABAGgEADQgEAFgGAAIgOgCIgNgCQgNAAgLAGQgLAGAAAHQAAAEADACQAEADAHABIAYABQAVACANAKQAOALAAAVQAAAZgdANQgVAKgbAAQgZAAgPgLg");
	this.shape_16.setTransform(-47.5,16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AA1BAIgGgYQgEgRgGggIgPAoIgFASIgHARQgGAKgIgBQgJABgFgLIgGgSQgHgZgGgbIgNAuIgDAXQgFANgKAAQgHABgEgFQgDgEAAgFQAAgQAHgXIALglIAFgeQAFgVAFgGQAFgIAIAAQAIAAAFAJQAEAJAEAaQAEAaAJAcQAKgbAKgkIAFgWQAFgOALAAQALAAAFARQADAGACASQAFApAJAdIAJAhQAAAGgEADQgFAEgGAAQgKAAgFgPg");
	this.shape_17.setTransform(-63.1,16);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag0BJQgFgEAAgGIAAgVIABgWIAAhOQAAgHAEgFQAFgGAIAAIAZACQANACAJAFQAqAVAAAfQAAAMgJAJQgJAKgRAHQAaAOANAPQADAEABAFQgBAGgEAEQgEADgGAAQgFAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgFAAgEgEgAgeADIAFAAQAXAAALgFQAFgDAFgEQADgEAAgCQAAgLgOgKQgMgKgOgBIgMgBg");
	this.shape_18.setTransform(-78.3,15.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgzA8QgWgSAAgcQAAggAVgbQAXgfAjAAQAiAAARAQQARAQAAAeQAAAhgTAbQgWAfgjAAQgdAAgUgRgAgfgdQgOAVAAAWQAAARAMAJQANAKASAAQAUABAPgWQANgTAAgYQAAgUgJgIQgJgHgWgBQgVABgQAUg");
	this.shape_19.setTransform(-92.9,16);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgxBOQgEgEAAgFIAAhwIABgLIAAgLQAAgGAEgEQADgEAGAAQAEAAADABIAVgCIAQgBQALAAARAFQAVAFAAAIQAAAGgEADQgEAEgGABIgFgCQgMgEgSAAIgNABIgRACIAAAhQAPgEAJAAQARAAAOACQANABAAAMQAAAGgEACQgEAFgGAAIgPgBIgPgBQgHAAgRAEIAAA+QAAAFgFAEQgEAEgGAAQgGAAgDgEg");
	this.shape_20.setTransform(-106.8,15.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag1BJQgDgEAAgGIAAgVIAAgWIAAhOQAAgHAEgFQAFgGAJAAIAYACQAOACAIAFQAqAVAAAfQAAAMgJAJQgIAKgSAHQAaAOANAPQADAEAAAFQABAGgFAEQgEADgFAAQgGAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgdADIADAAQAZAAAKgFQAFgDAEgEQAEgEABgCQAAgLgPgKQgLgKgPgBIgLgBg");
	this.shape_21.setTransform(-119.2,15.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgtBKQgLgJABgfIABgnIACgnIgBgKIgBgKQAAgPAOAAQAEAAAEACIAWgEIASgBQAYAAAPAFQAJAEAAAJQABAFgEAEQgEAFgGgBIgFgBQgPgDgPAAIgPABIgSADIgBAmIAlgDIAYgCQAGAAAEAEQAEAEAAAFQAAALgMACIgXABIgpAEIgBAVQAAASACADQACABAKAAIASAAIASAAIAGgBIAGAAQAFAAAEADQAFAEAAAGQAAALgMADQgKABgdAAQggAAgKgJg");
	this.shape_22.setTransform(-131.8,15.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgsBKQgDgDAAgGIAAgbIACgsIACgtQAAgZAOABIAJgCIAOAAQATAAAQAMQATAPAAATQAAAZgUAOQgSANgXAAIgIgBIgBAtQAAAGgDADQgEAEgFAAQgGAAgEgEgAgRgmIgCAiIAGABQAPAAAJgIQALgHAAgNQAAgIgKgGQgJgHgLABIgGAAIgDAAIAAANg");
	this.shape_23.setTransform(-143.6,15.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066FF").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape_24.setTransform(178.6,-14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066FF").s().p("AgrA8QgOgQAAgVQAAggAcgiQAZgcAYgBIAIAAIAGABQAEgDAGAAQAKgBACALQACAJAAALQAAAEgDAEQgDAGgHAAQgJAAgEgJQgCgFgCgBIgIAAQgMAAgPATQgXAaAAAXQAAAKAHAJQAHAHAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAGgFAEQgbAYgbAAQgWAAgPgQg");
	this.shape_25.setTransform(165.5,-14.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0066FF").s().p("AgsBKQgMgJAAggIADgmIACgnIgBgKIgBgKQAAgPANAAQAEAAAEACIAVgEIATgBQAZAAAOAFQAKAEgBAJQAAAFgDAEQgEAEgGAAIgEAAQgQgEgPgBIgPACIgRADIgBAmIAkgDIAZgCQAFAAAEAEQAEAEAAAFQAAALgMACIgYACIgoADIgBAUQAAAUADADQAAAAALAAIASAAIASAAIAGAAIAFgBQAGAAAEADQAFADAAAHQAAALgLADQgLABgdAAQggAAgJgJg");
	this.shape_26.setTransform(153.2,-14.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0066FF").s().p("AgqBDQgTgNAAgTQAAgQANAAQAOAAAAAPQAAAGAKAHQAJAGAJAAQAEAAACgNIABgeQABgVAAghIAAgHIgCAAIgLAAIgMAAQgFAAgEgEQgEgDAAgHQAAgNARAAIAKAAIAJABIASgBIATgBQAaAAAAAPQAAAFgEAEQgEAEgGAAIgFAAIgHAAIgIAAIAAAHQABBFgKAfQgIAYgSAAQgSAAgSgNg");
	this.shape_27.setTransform(140.2,-13.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0066FF").s().p("AgvBLQgFgFAAgGIAAhnIgBgNIABgNQABgJAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAEAHAKQAJAKAAAKQAAANgPAMQgJAIgKADQgWAJgjAAQgGAAgEgEgAgaA0QARAAATgGQARgFAAgFQAAgIgLgGQgJgEgHgCIgaAAgAgZgfIgBAVIAOAAQAdgCAAgUQAAgHgJgFQgIgIgKABIgQAAg");
	this.shape_28.setTransform(127.4,-14.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0066FF").s().p("AgnBCQgZgTAAgxIAAgNIABgPIAAgLIAAgKQAAgJADgGQAEgJAHAAQAFAAAEADQAFAEAAAGIAAAQIgBAQIAAAPIgBANQAAAOAEANQAEAPAIAGQAEAEAPgBQAZABAJgtQAFgVAAgqQAAgGADgFQAFgGAIAAQAGAAAEAFQACADAAAFQAAAmgDAWQgGAggQAWQgHAKgKAGQgNAIgMAAQgYAAgNgKg");
	this.shape_29.setTransform(113.3,-13.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0066FF").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQAEgEAGAAQAJAAAEAJQAFAMAUAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgIgDgUAAQgRgBgNgFQgSgIAAgPQAAgTAUgQQAUgQAXAAQAKAAAOAFQASAFAAAHQAAAGgEADQgEAFgGAAIgOgCIgOgCQgNAAgKAGQgLAGgBAHQAAAEAFACQADADAHABIAYABQAWACAMAKQAOALAAAVQAAAZgcANQgXAKgbAAQgZAAgOgLg");
	this.shape_30.setTransform(99.1,-13.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_31.setTransform(77.8,-11.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_32.setTransform(66.7,-14.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIBEQgFgDAAgGIABgKIAAgLIgCgxIgSgCQgMgBAAgMQAAgGADgDQAFgEAFAAIARACIgBgLIAAgJQAAgGAEgEQAEgDAGgBQANABAAAYIAAAIIAJgBQAMAAAEACQAIACAAAJQAAAGgEADQgDAFgHAAIgEAAIgGgBIgJABIACAyIAAAFIAAAGQAAAXgNgBQgFAAgEgDg");
	this.shape_33.setTransform(56.1,-13.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAUAtIgCgUIgCgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgJAAgHALQgHAKgFAQIgBAJIAAAJIgBAIIAAAJQAAAFgFAEQgEAEgFAAQgGAAgEgEQgEgEABgFIgBgJIgBgIIACgbIABgZIAAgJIgBgJQAAgGAEgDQAEgEAGAAQANAAABAPIAAACQAOgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgMAAgCgMg");
	this.shape_34.setTransform(37.7,-11.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_35.setTransform(26.6,-11.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_36.setTransform(15.5,-14.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AADAfQgCgJgDgYIgDAFIgPAmQgBAEgCACQgFAHgIAAQgEAAgGgIQgFgJgDgNQgDgMgHgoIgBgNQAAgGAEgDQAEgEAGAAQALAAACALIACANIACAOIADAXIARgwQAEgNAKAAQALAAADAPIAGAaIAEAaIAQg6QABgJALAAQAFAAAEAEQAFAEAAAFIAAADIgVBEQgDAJgHAJQgEAHgJAAQgLgBgIgXg");
	this.shape_37.setTransform(2.8,-11.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAJAjIgSAAIgJAAIgJAAQgFAAgEgDQgEgDAAgFQAAgLAMAAIATgBIASAAIATAAQAGAAADAEQAEADAAAFQAAAFgEADQgDADgGAAIgTAAgAgcgLQgFAAgDgDQgEgEAAgFQAAgLATAAIADAAIADAAIAsAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgsAAIgGABIgHAAg");
	this.shape_38.setTransform(-19,-13.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BB0000").s().p("AgtBKQgKgJgBggIACgmIADgnIgBgKIgCgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQgBAFgDAEQgEAEgGAAIgEAAQgQgEgPgBIgPACIgRADIgBAmIAlgDIAXgCQAGAAAEAEQAEAEAAAFQAAALgMACIgYACIgpADIAAAUQAAAUADADQABAAALAAIARAAIASAAIAGAAIAFgBQAGAAAEADQAFADAAAHQAAALgLADQgKABgeAAQggAAgKgJg");
	this.shape_39.setTransform(-39.6,-14.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BB0000").s().p("AgrA8QgOgQAAgVQAAggAcgiQAZgcAYgBIAIAAIAGABQAEgDAGAAQAKgBACALQACAJAAALQAAAEgDAEQgDAGgHAAQgJAAgEgJQgCgFgCgBIgIAAQgMAAgPATQgXAaAAAXQAAAKAHAJQAHAHAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAGgFAEQgbAYgbAAQgWAAgPgQg");
	this.shape_40.setTransform(-52.2,-14.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BB0000").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_41.setTransform(-64.1,-14);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BB0000").s().p("AgzA8QgWgRAAgdQAAggAVgbQAXgfAjAAQAiAAARAQQARAQAAAfQAAAggTAbQgWAfgjAAQgdAAgUgRgAgfgdQgOAVAAAWQAAAQAMAKQANALASgBQAUAAAPgUQANgUAAgXQAAgVgJgIQgJgHgWAAQgVAAgQAUg");
	this.shape_42.setTransform(-77.4,-13.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BB0000").s().p("AgVBFQgMgcgOg1IgIgaQgFgTAAgHQAAgFAEgEQAEgDAFAAQAKAAAEAJIADARIAJAfIAPAxIAXg6IAIgXQAFgPAHgHQAFgFAFAAQAGAAAEAEQAEAEABAFQAAAFgDADQgFAIgFAKIgHAUIgaBDQgFAMgGALQgFAIgGAAQgKAAgFgKg");
	this.shape_43.setTransform(-92,-13.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BB0000").s().p("AgtBKQgKgJgBggIACgmIADgnIgCgKIgBgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQAAAFgEAEQgEAEgGAAIgEAAQgQgEgPgBIgPACIgRADIgCAmIAmgDIAXgCQAGAAAEAEQAEAEAAAFQAAALgMACIgXACIgqADIAAAUQAAAUACADQACAAALAAIARAAIASAAIAGAAIAFgBQAGAAAEADQAFADAAAHQAAALgMADQgJABgeAAQggAAgKgJg");
	this.shape_44.setTransform(-113.5,-14.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BB0000").s().p("AgVBFQgMgcgOg1IgIgaQgFgTAAgHQAAgFAEgEQAEgDAFAAQAKAAAEAJIADARIAJAfIAPAxIAXg6IAIgXQAFgPAHgHQAFgFAFAAQAGAAAEAEQAEAEABAFQAAAFgDADQgFAIgFAKIgHAUIgaBDQgFAMgGALQgFAIgGAAQgKAAgFgKg");
	this.shape_45.setTransform(-126.7,-13.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BB0000").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_46.setTransform(-139.1,-14);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BB0000").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape_47.setTransform(-151.3,-14.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BB0000").s().p("AgrA8QgOgQAAgVQAAggAcgiQAZgcAYgBIAIAAIAGABQAEgDAGAAQAKgBACALQACAJAAALQAAAEgDAEQgDAGgHAAQgJAAgEgJQgCgFgCgBIgIAAQgMAAgPATQgXAaAAAXQAAAKAHAJQAHAHAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAGgFAEQgbAYgbAAQgWAAgPgQg");
	this.shape_48.setTransform(-164.4,-14.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BB0000").s().p("AAiA4QgFgMgEgPQgHABgRABIgWADIgPAgQgFAHgHAAQgGAAgFgEQgEgDAAgGQABgFAOgdIgCgFQABgFAJgDIAfgxQAXglAGAAQALAAADANIAHAgIAOA/IAFANQADAIAAAFQAAAFgEAEQgEAEgFAAQgIgBgIgRgAgHAJIANgBIANgCIgGggIgUAjg");
	this.shape_49.setTransform(-178.1,-13.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQAEgEAGAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAYAAQAJAAAOAFQARAFAAAHQABAGgEADQgEAFgGAAIgOgCIgNgCQgNAAgLAGQgLAGAAAHQAAAEADACQAEADAHABIAYABQAVACANAKQAOALAAAVQAAAZgdANQgVAKgbAAQgZAAgPgLg");
	this.shape_50.setTransform(-47.5,16.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AA1BAIgGgYQgEgRgGggIgPAoIgFASIgHARQgGAKgIgBQgJABgFgLIgGgSQgHgZgGgbIgNAuIgDAXQgFANgKAAQgHABgEgFQgDgEAAgFQAAgQAHgXIALglIAFgeQAFgVAFgGQAFgIAIAAQAIAAAFAJQAEAJAEAaQAEAaAJAcQAKgbAKgkIAFgWQAFgOALAAQALAAAFARQADAGACASQAFApAJAdIAJAhQAAAGgEADQgFAEgGAAQgKAAgFgPg");
	this.shape_51.setTransform(-63.1,16);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("Ag0BJQgFgEAAgGIAAgVIABgWIAAhOQAAgHAEgFQAFgGAIAAIAZACQANACAJAFQAqAVAAAfQAAAMgJAJQgJAKgRAHQAaAOANAPQADAEABAFQgBAGgEAEQgEADgGAAQgFAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgFAAgEgEgAgeADIAFAAQAXAAALgFQAFgDAFgEQADgEAAgCQAAgLgOgKQgMgKgOgBIgMgBg");
	this.shape_52.setTransform(-78.3,15.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgzA8QgWgSAAgcQAAggAVgbQAXgfAjAAQAiAAARAQQARAQAAAeQAAAhgTAbQgWAfgjAAQgdAAgUgRgAgfgdQgOAVAAAWQAAARAMAJQANAKASAAQAUABAPgWQANgTAAgYQAAgUgJgIQgJgHgWgBQgVABgQAUg");
	this.shape_53.setTransform(-92.9,16);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgxBOQgEgEAAgFIAAhwIABgLIAAgLQAAgGAEgEQADgEAGAAQAEAAADABIAVgCIAQgBQALAAARAFQAVAFAAAIQAAAGgEADQgEAEgGABIgFgCQgMgEgSAAIgNABIgRACIAAAhQAPgEAJAAQARAAAOACQANABAAAMQAAAGgEACQgEAFgGAAIgPgBIgPgBQgHAAgRAEIAAA+QAAAFgFAEQgEAEgGAAQgGAAgDgEg");
	this.shape_54.setTransform(-106.8,15.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("Ag1BJQgDgEAAgGIAAgVIAAgWIAAhOQAAgHAEgFQAFgGAJAAIAYACQAOACAIAFQAqAVAAAfQAAAMgJAJQgIAKgSAHQAaAOANAPQADAEAAAFQABAGgFAEQgEADgFAAQgGAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgdADIADAAQAZAAAKgFQAFgDAEgEQAEgEABgCQAAgLgPgKQgLgKgPgBIgLgBg");
	this.shape_55.setTransform(-119.2,15.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgtBKQgLgJABgfIABgnIACgnIgBgKIgBgKQAAgPAOAAQAEAAAEACIAWgEIASgBQAYAAAPAFQAJAEAAAJQABAFgEAEQgEAFgGgBIgFgBQgPgDgPAAIgPABIgSADIgBAmIAlgDIAYgCQAGAAAEAEQAEAEAAAFQAAALgMACIgXABIgpAEIgBAVQAAASACADQACABAKAAIASAAIASAAIAGgBIAGAAQAFAAAEADQAFAEAAAGQAAALgMADQgKABgdAAQggAAgKgJg");
	this.shape_56.setTransform(-131.8,15.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgsBKQgDgDAAgGIAAgbIACgsIACgtQAAgZAOABIAJgCIAOAAQATAAAQAMQATAPAAATQAAAZgUAOQgSANgXAAIgIgBIgBAtQAAAGgDADQgEAEgFAAQgGAAgEgEgAgRgmIgCAiIAGABQAPAAAJgIQALgHAAgNQAAgIgKgGQgJgHgLABIgGAAIgDAAIAAANg");
	this.shape_57.setTransform(-143.6,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.3,-30.9,462.6,61.8);


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


(lib.contentscene15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_141 = function() {
		playSound("cowbell");
	}
	this.frame_201 = function() {
		playSound("cowbell");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(141).call(this.frame_141).wait(60).call(this.frame_201).wait(61));

	// statements
	this.instance = new lib.PassiveVoiceDef();
	this.instance.parent = this;
	this.instance.setTransform(46.9,-83.7);

	this.instance_1 = new lib.ActiveVoiceDef();
	this.instance_1.parent = this;
	this.instance_1.setTransform(46.9,-83.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAGQgCgDAAgDQAAgCACgDQADgCAEAAQAEAAAEACQACADABACQgBADgCADQgEADgEAAQgEAAgDgDg");
	this.shape.setTransform(265.8,-77.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANAdIgCgNIgBgNIAAgFIAAgFIAAgCIABgEQAAgEgDAAQgFAAgEAGQgGAHgCAKIgBAFIAAAHIgBAFIAAAGQAAADgDADQgDACgDAAQgEAAgDgCQgCgDAAgDIAAgGIAAgFIAAgRIABgRIAAgGIAAgFQAAgEACgCQADgDAEAAQAIAAABAKIAAABQAJgJAJAAQAMgBAFALQACAGAAANIAAAFIAAADIACANIABANQAAADgCADQgDACgEAAQgHAAgBgIg");
	this.shape_1.setTransform(259.7,-80.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAbQgJgJgBgPQAAgNAIgLQAKgNAQAAQANAAAHALQAHAJAAANQAAAOgIAKQgJAMgOAAQgLAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgHQABgUgMAAQgHAAgEAHg");
	this.shape_2.setTransform(252.7,-80.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHAuQgCgDAAgDIgBgMIAAgMIABgOIAAgMQAAgEADgDQACgCAEAAQACAAADACQADADAAAEIgBAMIgBAOIAAAMIABAMQAAADgDADQgCADgDAAQgEAAgCgDgAgFgfQgDgDAAgEQAAgEADgDQADgDADABQAEgBADADQADADAAAEQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_3.setTransform(247.7,-81.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAsQgDgCAAgEIABgGIAAgHIgBggIgMgBQgIgBAAgHQAAgEACgCQADgDADAAIALABIAAgHIAAgGQAAgEACgCQADgCAEAAQAIAAAAAPIAAAGIAGgBIAKABQAFACAAAGQAAADgCADQgDACgDAAIgEAAIgDAAIgGAAIABAhIAAADIAAAEQAAAOgJAAQgCAAgDgCg");
	this.shape_4.setTransform(242.6,-81.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAcQgKgJAAgNQAAgMAJgNQAKgQANAAQAGAAAJAEQALAEAAAGQAAADgCACQgDADgDAAQgDAAgEgDQgEgDgHAAQgEAAgGAKQgFAJAAAGQAAAGAEAEQAFAEAGAAQAFAAAGgDQAGgEACAAQADAAADADQACACAAADQAAAFgLAFQgJAFgHAAQgNAAgJgIg");
	this.shape_5.setTransform(236.1,-80.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAdIgKAFIgHABQgPAAgIgIQgHgIAAgRQAAgOALgLQALgLAPAAQAGAAAIADQAKAEAAAGQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgBAHIAAAJQAAAKACAFIADAHIACAGQAAAEgDACQgCACgDAAQgDAAgHgGgAgIgMQgHAHAAAIQAAAIADAFQADAEAHAAQADAAADgBQAEgBADgEIgCgVIAAgFIABgFIgCgBIgCAAQgIgBgGAHg");
	this.shape_6.setTransform(229.3,-80.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgRAhQgJgEAAgHQAAgGAHAAIAJACIAIACQALAAABgFQAAgEgJgEQgNgFgDgCQgJgGAAgJQAAgNAOgEQAHgDAPAAQAHAAADACQAEACABAGQgBALgGAAQgGAAgCgFIgEAAQgPAAAAAEQAAACAIAEIASAJQAJAGAAAIQAAALgKAGQgJAFgLAAQgIAAgHgDg");
	this.shape_7.setTransform(216.8,-80.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgGAOQgCgDAAgEIACgPQACgGAFAAQAEAAACACQACACAAADIgCAPQgBADgBACQgCACgEAAQgDAAgCgBg");
	this.shape_8.setTransform(212.1,-85.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgeAwQgDgDAAgEIAAhCIgBgJIABgIQABgGAKgBIAQgBQALAAALAHQANAJAAAOQAAAHgDAFQgCAEgFAEQAGADAFAGQAFAHAAAGQAAAJgJAHQgGAFgHADQgOAFgXAAQgDAAgDgDgAgQAiQALgBAMgDQALgDAAgEQgBgFgHgEQgFgDgFAAIgQgBgAgQgUIAAAOIAJAAQASgBAAgNQAAgFgGgEQgFgEgGAAIgKAAg");
	this.shape_9.setTransform(206.8,-81.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgiAvQgCgCAAgEIAAgOIAAgOIAAgyQAAgFACgDQAEgEAFAAIAQABQAJACAFADQAbANAAAVQAAAIgFAFQgGAHgLAEQARAJAIAKQACADAAADQAAADgCADQgDADgEAAQgDAAgDgDQgTgSgWgHIAAAUQAAAEgCACQgDADgEAAQgDAAgDgDgAgTACIADAAQAPAAAHgDIAGgEIADgEQAAgIgJgGQgIgGgJgBIgIgBg");
	this.shape_10.setTransform(198.5,-81.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgdAwQgGgGgBgUIACgZIABgZIAAgHIgBgGQAAgKAJAAQADAAABACIAPgDIALgBQAQAAAKAEQAGACAAAGQgBADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMACACQABABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_11.setTransform(190.4,-81.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgNAtQgIgSgJgiIgGgRQgDgMAAgFQAAgEADgCQACgCAEAAQAGAAADAGIACALIAGAVIAJAfIAPgmIAFgPQAEgJAEgFQADgDAEAAQADAAAEACQACADAAAEIgBAFQgEAEgDAHIgEANIgRArIgIAPQgDAFgEAAQgGAAgDgGg");
	this.shape_12.setTransform(181.8,-81.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAbQgLgIABgOQgBgPAJgLQAKgNAOAAQAMAAAGAEQAKAFAAAKQAAAHgHAFIgPAGIgUAKQADADAEACQAFABAEAAQAJAAAFgDQAFgDAEAAQAGAAABAGQAAAHgLAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgDAIIAOgHIAOgHQgFgCgHAAQgEAAgFAEg");
	this.shape_13.setTransform(168,-80.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAPAuIgDgOIgBgPIAAgFIAAgEIAAgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgHAAgFAFQgDADgFAJQAAAXgCAFQgDAFgFAAQgEAAgCgCQgDgCAAgEIABgDIAAgRIABgqIAAgCIAAgKIgBgGIAAgGQAAgDACgDQADgCAEAAQAGAAACAHIABALIAAANIAAANQAEgFAGgCQAEgCAGAAQALAAAEAGQAEAEABAJIAAAPIACANIACAMIAAACQAAAEgCACQgDADgEAAQgGAAgCgHg");
	this.shape_14.setTransform(160.8,-82);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAsQgDgCAAgEIABgGIAAgHIgBggIgMgBQgIgBAAgHQAAgEACgCQADgDADAAIALABIAAgHIAAgGQAAgEACgCQADgCAEAAQAIAAAAAPIAAAGIAGgBIAKABQAFACAAAGQAAADgCADQgDACgDAAIgEAAIgDAAIgGAAIABAhIAAADIAAAEQAAAOgJAAQgCAAgDgCg");
	this.shape_15.setTransform(153.9,-81.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghApQgIgGAAgIQAAgEACgCQADgDAEAAQAGAAACAGQAEAIANAAQAKAAAKgFQAKgFAAgGQAAgHgGgDQgFgCgNAAQgLAAgJgEQgMgFABgJQAAgNANgLQANgKAPAAQAGABAJACQALAEAAAEQAAADgCAEQgDACgEAAIgIgBIgJgBQgJAAgGADQgIAEAAAFQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACABAFABIAPABQAOABAIAHQAJAHAAANQAAAQgTAJQgOAGgRABQgQAAgJgIg");
	this.shape_16.setTransform(140.7,-81.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAwQgGgGgBgUIACgZIABgZIAAgHIgBgGQAAgKAJAAQADAAABACIAPgDIALgBQAQAAAKAEQAGACAAAGQgBADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMACACQABABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_17.setTransform(132.3,-81.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgNAtQgIgSgJgiIgGgRQgDgMAAgFQAAgEADgCQACgCAEAAQAGAAACAGIADALIAGAVIAJAfIAPgmIAFgPQAEgJAEgFQADgDAEAAQADAAAEACQACADAAAEIgBAFQgEAEgDAHIgEANIgRArIgIAPQgDAFgEAAQgGAAgDgGg");
	this.shape_18.setTransform(123.8,-81.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIAAgcQAAgRABgPIgOAAQgDAAgDgCQgDgDAAgEQAAgDADgDQACgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAADACQACADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgNACQgDAAgDgDg");
	this.shape_19.setTransform(115.7,-81.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAwQgGgGgBgUIABgZIACgZIAAgHIgCgGQABgKAIAAQAEAAABACIAPgDIALgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_20.setTransform(108.4,-81.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgcAmQgJgJAAgOQAAgUATgWQAQgTAPAAIAFAAIAEABQADgDAEAAQAGAAACAHIABANQAAADgCACQgCAEgFAAQgFAAgDgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgFgBQgIAAgJAMQgPARAAAPQAAAHAFAFQAEAFAHAAQAFAAAGgEIAKgFQAFgEACAAQAEAAADADQADACgBAEQAAAEgDADQgRAOgRAAQgOAAgLgLg");
	this.shape_21.setTransform(100.2,-81.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcAwQgIgGABgUIABgZIABgZIgBgHIAAgGQgBgKAJAAQADAAADACIANgDIAMgBQAQAAAKAEQAFACAAAGQABADgCACQgDADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAYgCIAPgBQAEAAACACQADADAAADQAAAHgIABIgPABIgaADIgBANQAAAMABACQABABAIAAIAKAAIANgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgSAAQgWAAgFgGg");
	this.shape_22.setTransform(92.2,-81.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiAvQgCgCAAgEIAAgOIAAgOIAAgyQAAgFACgDQAEgEAFAAIAQABQAJACAFADQAbANAAAVQAAAIgFAFQgGAHgLAEQARAJAIAKQACADAAADQAAADgCADQgDADgEAAQgDAAgDgDQgTgSgWgHIAAAUQAAAEgCACQgDADgEAAQgDAAgDgDgAgTACIADAAQAPAAAHgDIAGgEIADgEQAAgIgJgGQgIgGgJgBIgIgBg");
	this.shape_23.setTransform(84,-81.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0033FF").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_24.setTransform(69.5,-81.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0033FF").s().p("AgcAmQgJgJAAgOQAAgUATgWQAQgTAPAAIAFAAIAEABQADgDAEAAQAGAAACAHIABANQAAADgCACQgCAEgFAAQgFAAgDgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgFgBQgIAAgJAMQgPARAAAPQAAAHAFAFQAEAFAHAAQAFAAAGgEIAKgFQAFgEACAAQAEAAADADQADACgBAEQAAAEgDADQgRAOgRAAQgOAAgLgLg");
	this.shape_25.setTransform(61,-81.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0033FF").s().p("AgcAwQgIgGABgUIABgZIABgZIgBgHIAAgGQgBgKAJAAQADAAADACIANgDIAMgBQAQAAAKAEQAFACABAGQAAADgCACQgDADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAYgCIAPgBQAEAAACACQADADAAADQAAAHgIABIgPABIgaADIgBANQAAAMABACQABABAIAAIAKAAIANgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgSAAQgWAAgFgGg");
	this.shape_26.setTransform(53.1,-81.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0033FF").s().p("AgbAsQgNgJAAgNQAAgJAJAAQAJAAAAAJQAAAEAHAEQAGAFAGAAQACAAABgJIAAgUIABgjIAAgEIgBAAIgHAAIgHAAQgEAAgDgCQgDgDAAgEQAAgIAMAAIAGAAIAGAAIAMAAIAMgBQARAAAAAKQAAADgDACQgCADgEAAIgEAAIgEAAIgFAAIAAAEQAAAtgGAVQgFAPgLAAQgMAAgMgIg");
	this.shape_27.setTransform(44.6,-81.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0033FF").s().p("AgeAwQgDgDAAgEIAAhCIgBgJIABgIQABgGAKgBIAQgBQALAAALAHQANAJAAAOQAAAHgDAFQgCAEgFAEQAGADAFAGQAFAHAAAGQAAAJgJAHQgGAFgHADQgOAFgXAAQgDAAgDgDgAgQAiQALgBAMgDQALgDAAgEQgBgFgHgEQgFgDgFAAIgQgBgAgQgUIAAAOIAJAAQASgBAAgNQAAgFgGgEQgFgEgGAAIgKAAg");
	this.shape_28.setTransform(36.3,-81.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0033FF").s().p("AgZAsQgQgNAAgfIAAgJIAAgJIAAgIIABgHQAAgFABgFQADgFAEgBQAEAAADADQACACAAAEIAAAKIAAAMIAAAJIAAAJQAAAIACAJQADAJAFAEQACACAKAAQAQAAAGgdQADgNAAgbQAAgDACgEQADgFAFAAQAFAAACAEQABACAAADQAAAZgCAOQgEAVgKAOQgFAGgGAFQgIAEgIAAQgQAAgIgFg");
	this.shape_29.setTransform(27.1,-81.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0033FF").s().p("AghApQgIgGAAgIQAAgEACgCQADgDAEAAQAGAAACAGQAEAIANAAQAKAAAKgFQAKgFAAgGQAAgHgGgDQgFgCgNAAQgLAAgJgEQgMgFABgJQAAgNANgLQANgKAPAAQAGABAJACQALAEAAAEQAAADgCAEQgDACgEAAIgIgBIgJgBQgJAAgGADQgIAEAAAFQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACABAFABIAPABQAOABAIAHQAJAHAAANQAAAQgTAJQgOAGgRABQgQAAgJgIg");
	this.shape_30.setTransform(17.9,-81.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgVAbQgLgIAAgOQAAgPAJgLQAJgNAPAAQAMAAAGAEQAKAFAAAKQAAAHgIAFIgOAGIgVAKQAEADAEACQAEABAFAAQAIAAAHgDQAEgDAEAAQAHAAAAAGQAAAHgLAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgDAIIAPgHIAMgHQgEgCgHAAQgEAAgFAEg");
	this.shape_31.setTransform(4,-80.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAPAuIgDgOIgBgPIAAgFIAAgEIAAgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgHAAgFAFQgDADgFAJQAAAXgCAFQgDAFgFAAQgEAAgCgCQgDgCAAgEIABgDIAAgRIABgqIAAgCIAAgKIgBgGIAAgGQAAgDACgDQADgCAEAAQAGAAACAHIABALIAAANIAAANQAEgFAGgCQAEgCAGAAQALAAAEAGQAEAEABAJIAAAPIACANIACAMIAAACQAAAEgCACQgDADgEAAQgGAAgCgHg");
	this.shape_32.setTransform(-3.2,-82);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAsQgDgCAAgEIABgGIAAgHIgBggIgMgBQgIgBAAgHQAAgEACgCQADgDADAAIALABIAAgHIAAgGQAAgEACgCQADgCAEAAQAIAAAAAPIAAAGIAGgBIAKABQAFACAAAGQAAADgCADQgDACgDAAIgEAAIgDAAIgGAAIABAhIAAADIAAAEQAAAOgJAAQgCAAgDgCg");
	this.shape_33.setTransform(-10.1,-81.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AANAdIgCgNIgBgNIABgFIAAgFIAAgCIAAgEQAAgEgDAAQgFAAgFAGQgFAHgDAKIAAAFIgBAHIAAAFIgBAGQAAADgCADQgCACgEAAQgEAAgDgCQgCgDAAgDIgBgGIAAgFIABgRIABgRIAAgGIgBgFQAAgEADgCQADgDADAAQAJAAAAAKIAAABQAKgJAJAAQAMgBAEALQADAGAAANIAAAFIAAADIACANIACANQgBADgCADQgDACgDAAQgJAAAAgIg");
	this.shape_34.setTransform(-22.1,-80.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgVAbQgKgIAAgOQAAgPAIgLQAJgNAQAAQAKAAAIAEQAJAFAAAKQAAAHgHAFIgPAGIgUAKQADADAEACQAEABAFAAQAJAAAFgDQAGgDADAAQAGAAAAAGQAAAHgKAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgCAIIANgHIAOgHQgFgCgGAAQgGAAgEAEg");
	this.shape_35.setTransform(-29.3,-80.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAPAuIgDgOIgBgPIAAgFIAAgEIAAgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgHAAgFAFQgDADgFAJQAAAXgCAFQgDAFgFAAQgEAAgCgCQgDgCAAgEIABgDIAAgRIABgqIAAgCIAAgKIgBgGIAAgGQAAgDACgDQADgCAEAAQAGAAACAHIABALIAAANIAAANQAEgFAGgCQAEgCAGAAQALAAAEAGQAEAEABAJIAAAPIACANIACAMIAAACQAAAEgCACQgDADgEAAQgGAAgCgHg");
	this.shape_36.setTransform(-36.5,-82);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AACAUQgCgGgBgOIgCACIgJAZQgBADgCABQgDAEgFABQgDgBgDgFQgEgGgCgIIgGghIgBgJQAAgEADgCQACgCAEgBQAHABABAGIACAJIABAJIACAPIALgfQADgIAGgBQAHAAACAKIAEARIADARIAKgmQABgFAHgBQADABADACQADACAAAEIgBABIgNAtQgCAFgEAGQgDAFgFAAQgIAAgFgQg");
	this.shape_37.setTransform(-44.8,-80.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAGAWIgMAAIgFABIgGAAQgEAAgCgCQgDgCAAgDQAAgHAIAAIAMgBIAMAAIAMAAQAEAAACACQADADAAADQAAACgDADQgCACgEAAIgMgBgAgJgHIgEAAIgFAAQgDAAgCgCQgDgCAAgEQAAgHANAAIACAAIACAAIAcAAQADAAACACQADACAAADQAAADgDADQgCACgDAAg");
	this.shape_38.setTransform(-59,-81.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BB0000").s().p("AgcAwQgIgGAAgUIABgZIACgZIgBgHIgBgGQAAgKAJAAQAEAAACACIANgDIAMgBQAQAAAKAEQAFACAAAGQAAADgBACQgDADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAYgCIAPgBQAEAAACACQADADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQABABAHAAIALAAIANgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgSAAQgWAAgFgGg");
	this.shape_39.setTransform(-72.4,-81.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BB0000").s().p("AgbAmQgKgJAAgOQAAgUATgWQAPgTAQAAIAFAAIAEABQADgDAEAAQAGAAACAHIABANQAAADgCACQgDAEgEAAQgGAAgDgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgFgBQgIAAgKAMQgOARAAAPQAAAHAEAFQAFAFAGAAQAGAAAHgEIAJgFQAFgEADAAQAEAAACADQACACABAEQgBAEgDADQgRAOgSAAQgNAAgKgLg");
	this.shape_40.setTransform(-80.6,-81.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BB0000").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIAAgcQAAgRABgPIgOAAQgDAAgDgCQgDgDAAgEQAAgDADgDQACgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAADACQACADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgNACQgDAAgDgDg");
	this.shape_41.setTransform(-88.3,-81.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BB0000").s().p("AghAnQgOgLAAgTQAAgUAOgSQAOgUAWAAQAXAAALAKQALAKAAAVQAAAUgMARQgPAVgWAAQgTAAgNgLgAgUgSQgJANAAAOQAAAKAIAIQAIAFAMAAQANAAAJgNQAJgNAAgOQAAgOgGgFQgGgFgPAAQgNAAgKAOg");
	this.shape_42.setTransform(-97,-81.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BB0000").s().p("AgNAtQgHgSgKgiIgGgRQgDgMAAgFQAAgEADgCQADgCADAAQAGAAADAGIACALIAGAVIAKAfIANgmIAGgPQAEgJAEgFQADgDAEAAQADAAADACQADADAAAEIgCAFQgDAEgDAHIgFANIgRArIgHAPQgCAFgEAAQgIAAgCgGg");
	this.shape_43.setTransform(-106.5,-81.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BB0000").s().p("AgcAwQgIgGAAgUIABgZIACgZIgBgHIgBgGQABgKAIAAQADAAADACIANgDIAMgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAXgCIAQgBQAEAAACACQADADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIALAAIANgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgSAAQgWAAgFgGg");
	this.shape_44.setTransform(-120.4,-81.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BB0000").s().p("AgNAtQgHgSgKgiIgGgRQgDgMAAgFQAAgEADgCQADgCADAAQAGAAADAGIACALIAGAVIAKAfIANgmIAGgPQAEgJAEgFQADgDAEAAQADAAADACQADADAAAEIgCAFQgDAEgDAHIgFANIgRArIgHAPQgCAFgEAAQgIAAgCgGg");
	this.shape_45.setTransform(-129,-81.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BB0000").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIAAgcQAAgRABgPIgOAAQgDAAgDgCQgDgDAAgEQAAgDADgDQACgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAADACQACADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgNACQgDAAgDgDg");
	this.shape_46.setTransform(-137.1,-81.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BB0000").s().p("AghApQgIgGAAgIQAAgEACgCQADgDAEAAQAGAAACAGQAEAIANAAQAKAAAKgFQAKgFAAgGQAAgHgGgDQgFgCgNAAQgLAAgJgEQgMgFABgJQAAgNANgLQANgKAPAAQAGABAJACQALAEAAAEQAAADgCAEQgDACgEAAIgIgBIgJgBQgJAAgGADQgIAEAAAFQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACABAFABIAPABQAOABAIAHQAJAHAAANQAAAQgTAJQgOAGgRABQgQAAgJgIg");
	this.shape_47.setTransform(-145,-81.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BB0000").s().p("AghApQgIgGAAgIQAAgEACgCQADgDAEAAQAGAAACAGQAEAIANAAQAKAAAKgFQAKgFAAgGQAAgHgGgDQgFgCgNAAQgLAAgJgEQgMgFABgJQAAgNANgLQANgKAPAAQAGABAJACQALAEAAAEQAAADgCAEQgDACgEAAIgIgBIgJgBQgJAAgGADQgIAEAAAFQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACABAFABIAPABQAOABAIAHQAJAHAAANQAAAQgTAJQgOAGgRABQgQAAgJgIg");
	this.shape_48.setTransform(-154,-81.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BB0000").s().p("AAWAkQgDgHgDgKIgPABIgOACIgLAVQgCAEgFAAQgEAAgDgCQgCgCAAgEQAAgDAJgTIgBgEQAAgCAGgCIAUggQAPgYAEAAQAHAAACAIIAEAVIAKApIADAIQACAFAAADQAAAEgDADQgCACgEAAQgFAAgFgMgAgEAGIAIgBIAJgBIgFgUIgMAWg");
	this.shape_49.setTransform(-163.3,-81.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BB0000").s().p("AgcAwQgCgDAAgDIAAgSIABgbIABgeQAAgQAJABIAGgBIAKAAQALgBALAJQAMAIAAANQAAARgNAIQgLAJgPAAIgFgBIgBAdQAAADgCADQgCACgEAAQgEAAgCgCgAgLghIAAAJIgBAWIAEAAQAJAAAGgEQAHgGAAgIQAAgFgGgFQgGgDgHAAIgDAAIgDAAg");
	this.shape_50.setTransform(-171.5,-82);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGAGQgDgDAAgDQAAgCADgDQADgDADABQAFgBADADQADADAAACQAAADgDADQgEADgEAAQgDAAgDgDg");
	this.shape_51.setTransform(264.4,-97.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AANAdIgCgNIgBgNIAAgEIAAgGIAAgCIABgEQAAgEgDAAQgFgBgEAIQgGAGgCAKIgBAFIAAAHIgBAFIAAAFQAAAEgDADQgDACgDAAQgEAAgCgCQgDgDAAgEIAAgFIAAgFIAAgRIABgRIAAgGIAAgFQAAgEADgDQACgCAEAAQAIAAABAKIAAABQAJgJAJAAQAMgBAFAKQACAIABAMIAAAFIAAADIABANIABANQAAAEgCACQgDACgEAAQgHAAgBgIg");
	this.shape_52.setTransform(258.3,-100.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUAbQgJgJgBgPQAAgNAIgLQAKgNAQAAQANAAAHALQAHAJAAANQAAAOgIAKQgJAMgOAAQgLAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgHQABgUgMAAQgHAAgEAHg");
	this.shape_53.setTransform(251.2,-100.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgHAuQgCgDgBgDIAAgMIAAgMIAAgNIABgOQAAgEADgCQACgCAEAAQACAAADACQACACAAAEIAAAOIgBANIAAAMIABAMQAAADgDADQgCADgDAAQgEAAgCgDgAgFgfQgDgEAAgDQAAgEADgDQADgDADABQAEgBADADQADADAAAEQAAADgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_54.setTransform(246.3,-101.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFAsQgDgCAAgEIABgGIAAgHIgBggIgMgBQgIgBAAgHQAAgEACgCQADgDADAAIALABIAAgHIAAgGQAAgEACgCQADgCAEAAQAIAAAAAPIAAAGIAGgBIAKABQAFACAAAGQAAADgCADQgDACgDAAIgEAAIgDAAIgGAAIABAhIAAADIAAAEQAAAOgJAAQgCAAgDgCg");
	this.shape_55.setTransform(241.2,-101.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgTAcQgKgJAAgNQAAgMAJgNQAKgQANAAQAGAAAJAEQALAEAAAGQAAADgCACQgDADgDAAQgDAAgEgDQgEgDgHAAQgEAAgGAKQgFAJAAAGQAAAGAEAEQAFAEAGAAQAFAAAGgDQAGgEACAAQADAAADADQACACAAADQAAAFgLAFQgJAFgHAAQgNAAgJgIg");
	this.shape_56.setTransform(234.6,-100.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAPAdIgKAFIgHABQgPAAgIgIQgHgJAAgQQAAgOALgLQALgLAPAAQAGAAAIADQAKAFAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgBAHIAAAJQAAAKACAGIADAGIACAGQAAAEgDACQgCACgDAAQgDAAgHgGgAgIgMQgHAHAAAIQAAAIADAFQADAEAHAAQADAAADgCQAEAAADgDIgCgWIAAgEIABgGIgCgBIgCAAQgIAAgGAGg");
	this.shape_57.setTransform(227.9,-100.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AgRAhQgJgEAAgHQgBgGAIAAIAIACIAJACQALAAABgFQAAgEgJgEQgMgFgEgCQgJgGAAgJQAAgNANgEQAJgDAOAAQAHAAADACQAFACAAAGQAAALgHAAQgGAAgCgFIgEAAQgPAAAAAEQAAACAJAEIARAJQAIAGABAIQgBALgJAGQgJAFgLAAQgIAAgHgDg");
	this.shape_58.setTransform(215.3,-100.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgGANQgCgCAAgEIACgOQACgIAFABQAEAAACABQACADAAADIgCAPQgBADgBACQgDACgCAAQgEAAgCgCg");
	this.shape_59.setTransform(210.7,-105.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AgeAwQgDgDAAgEIAAhCIgBgJIABgIQABgGAKgBIAQgBQALAAALAHQANAJAAAOQAAAHgDAFQgCAEgFAEQAGADAFAGQAFAHAAAGQAAAJgJAHQgGAFgHADQgOAFgXAAQgDAAgDgDgAgQAiQALgBAMgDQALgDAAgEQgBgFgHgEQgFgDgFAAIgQgBgAgQgUIAAAOIAJAAQASgBAAgNQAAgFgGgEQgFgEgGAAIgKAAg");
	this.shape_60.setTransform(205.4,-102.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AgiAvQgCgCAAgEIAAgOIAAgOIAAgyQAAgFACgDQAEgEAFAAIAQABQAJACAFADQAbANAAAVQAAAIgFAFQgGAHgLAEQARAJAIAKQACADAAADQAAADgCADQgDADgEAAQgDAAgDgDQgTgSgWgHIAAAUQAAAEgCACQgDADgEAAQgDAAgDgDgAgTACIADAAQAPAAAHgDIAGgEIADgEQAAgIgJgGQgIgGgJgBIgIgBg");
	this.shape_61.setTransform(197.1,-102);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AgdAwQgGgGgBgUIABgZIACgZIAAgHIgCgGQABgKAIAAQAEAAABACIAPgDIALgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_62.setTransform(188.9,-102);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AgNAtQgHgSgKgiIgGgRQgDgMAAgFQAAgEADgCQACgCAEAAQAGAAADAGIACALIAGAVIAKAfIAOgmIAFgPQAEgJAEgFQADgDAEAAQAEAAADACQACADAAAEIgBAFQgEAEgDAHIgFANIgQArIgIAPQgDAFgDAAQgHAAgDgGg");
	this.shape_63.setTransform(180.4,-101.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgVAbQgLgIAAgOQAAgPAJgLQAKgNAOAAQAMAAAGAEQAKAFAAAKQAAAHgIAFIgOAGIgVAKQADADAFACQAEABAFAAQAJAAAGgDQAEgDAEAAQAHAAAAAGQAAAHgLAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgDAIIAPgHIAMgHQgEgCgHAAQgEAAgFAEg");
	this.shape_64.setTransform(166.6,-100.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAPAuIgDgOIgBgPIAAgFIAAgEIAAgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgHAAgFAFQgDADgFAJQAAAXgCAFQgDAFgFAAQgEAAgCgCQgDgCAAgEIABgDIAAgRIABgqIAAgCIAAgKIgBgGIAAgGQAAgDACgDQADgCAEAAQAGAAACAHIABALIAAANIAAANQAEgFAGgCQAEgCAGAAQALAAAEAGQAEAEABAJIAAAPIACANIACAMIAAACQAAAEgCACQgDADgEAAQgGAAgCgHg");
	this.shape_65.setTransform(159.4,-102.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFAsQgDgCAAgEIABgGIAAgHIgBggIgMgBQgIgBAAgHQAAgEACgCQADgDADAAIALABIAAgHIAAgGQAAgEACgCQADgCAEAAQAIAAAAAPIAAAGIAGgBIAKABQAFACAAAGQAAADgCADQgDACgDAAIgEAAIgDAAIgGAAIABAhIAAADIAAAEQAAAOgJAAQgCAAgDgCg");
	this.shape_66.setTransform(152.4,-101.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AghApQgIgGAAgHQAAgEACgDQADgDAEAAQAGAAACAGQAEAIANAAQAKAAAKgFQAKgFAAgGQAAgHgGgDQgFgCgNAAQgLAAgJgEQgMgFABgJQAAgNANgLQANgKAPAAQAGABAJACQALAEAAAEQAAAEgCACQgDADgEAAIgIgBIgJgCQgJAAgGAEQgIAFAAAEQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACABAFABIAPABQAOABAIAHQAJAGAAAOQAAAQgTAJQgOAGgRABQgQgBgJgHg");
	this.shape_67.setTransform(139.2,-101.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAiApIgDgPIgHggIgJAaIgEALIgFAMQgEAGgFAAQgFAAgDgHIgEgMIgJghIgIAeIgDAOQgCAJgHAAQgEAAgDgDQgCgDAAgDQAAgKAFgPIAHgXIADgUQADgNAEgFQADgEAFgBQAFAAAEAHQACAFADARQACARAGARQAGgRAHgWIADgQQAEgJAGAAQAIAAADALIADAQQADAaAHATIAFAWQAAAEgDACQgDADgEAAQgHAAgDgLg");
	this.shape_68.setTransform(129.1,-101.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgiAvQgCgCAAgEIAAgOIAAgOIAAgyQAAgFACgDQAEgEAFAAIAQABQAJACAFADQAbANAAAVQAAAIgFAFQgGAHgLAEQARAJAIAKQACADAAADQAAADgCADQgDADgEAAQgDAAgDgDQgTgSgWgHIAAAUQAAAEgCACQgDADgEAAQgDAAgDgDgAgTACIADAAQAPAAAHgDIAGgEIADgEQAAgIgJgGQgIgGgJgBIgIgBg");
	this.shape_69.setTransform(119.2,-102);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AghAnQgOgLAAgTQAAgUAOgSQAPgUAWAAQAWAAAKAKQAMAKAAAVQAAAUgNARQgOAVgWAAQgTAAgNgLgAgUgSQgJANAAAOQAAAKAIAIQAIAFAMAAQANAAAJgNQAJgMAAgPQAAgOgGgFQgGgFgOAAQgNAAgLAOg");
	this.shape_70.setTransform(109.7,-101.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AggAzQgCgCAAgEIAAhIIAAgHIAAgIQAAgEADgCQACgDAEAAIAEABIANgBIALgBQAHAAALADQAOAEAAAFQAAADgDADQgCACgEAAIgDAAQgIgDgMAAIgIABIgMABIAAAVQALgCAFAAIAUABQAJABgBAIQAAADgCACQgDACgEAAIgKAAIgJgBQgEAAgMADIAAAoQAAAEgCACQgDACgEAAQgEAAgCgCg");
	this.shape_71.setTransform(100.7,-101.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgiAvQgCgCAAgEIAAgOIAAgOIAAgyQAAgFACgDQAEgEAFAAIAQABQAJACAFADQAbANAAAVQAAAIgFAFQgGAHgLAEQARAJAIAKQACADAAADQAAADgCADQgDADgEAAQgDAAgDgDQgTgSgWgHIAAAUQAAAEgCACQgDADgEAAQgDAAgDgDgAgTACIADAAQAPAAAHgDIAGgEIADgEQAAgIgJgGQgIgGgJgBIgIgBg");
	this.shape_72.setTransform(92.6,-102);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgcAwQgIgGABgUIABgZIABgZIAAgHIgBgGQgBgKAKAAQACAAACACIAOgDIAMgBQAQAAAKAEQAFACABAGQAAADgCACQgDADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAYgCIAPgBQAEAAACACQADADAAADQAAAHgIABIgPABIgaADIgBANQAAAMACACQAAABAIAAIAKAAIAMgBIAEAAIAEAAQADAAADACQADACAAAEQAAAHgIACQgGABgSAAQgWAAgFgGg");
	this.shape_73.setTransform(84.5,-102);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgcAwQgCgDAAgDIAAgSIABgcIABgdQAAgQAJAAIAGAAIAKAAQALgBALAJQAMAIAAANQAAAQgNAJQgLAIgPAAIgFAAIgBAdQAAADgCADQgCADgEgBQgEABgCgDgAgLghIAAAJIgBAWIAEAAQAJAAAGgEQAHgGAAgIQAAgFgGgFQgGgDgHAAIgDAAIgDAAg");
	this.shape_74.setTransform(76.8,-102.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0033FF").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_75.setTransform(63.1,-102);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0033FF").s().p("AgbAmQgKgJAAgOQAAgUATgXQAQgSAPAAIAFAAIAEAAQADgCAEAAQAGAAACAIIABAMQAAADgCADQgDADgEAAQgGAAgDgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgFgBQgIAAgJAMQgPARAAAPQAAAHAEAFQAFAFAHAAQAFAAAGgEIAKgFQAFgEACAAQAEAAADADQACADAAADQAAAEgDACQgRAPgRAAQgOAAgKgLg");
	this.shape_76.setTransform(54.6,-102);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0033FF").s().p("AgcAwQgIgGABgUIABgZIABgZIAAgHIgBgGQgBgKAKAAQACAAACACIAOgDIAMgBQAQAAAKAEQAFACABAGQAAADgCACQgDADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAYgCIAPgBQAEAAACACQADADAAADQAAAHgIABIgPABIgaADIgBANQAAAMACACQAAABAIAAIAKAAIAMgBIAEAAIAEAAQADAAADACQADACAAAEQAAAHgIACQgGABgSAAQgWAAgFgGg");
	this.shape_77.setTransform(46.7,-102);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0033FF").s().p("AgbAsQgNgJAAgNQAAgJAJAAQAJAAAAAJQAAAEAHAEQAGAFAGAAQACAAABgJIAAgUIABgjIAAgEIgBAAIgHAAIgHAAQgEAAgDgCQgDgDAAgEQAAgIAMAAIAGAAIAGAAIAMAAIAMgBQARAAAAAKQAAADgDACQgCADgEAAIgEAAIgEAAIgFAAIAAAEQAAAtgGAVQgFAPgLAAQgMAAgMgIg");
	this.shape_78.setTransform(38.2,-101.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0033FF").s().p("AgeAwQgDgDAAgEIAAhCIgBgJIABgIQABgGAKgBIAQgBQALAAALAHQANAJAAAOQAAAHgDAFQgCAEgFAEQAGADAFAGQAFAHAAAGQAAAJgJAHQgGAFgHADQgOAFgXAAQgDAAgDgDgAgQAiQALgBAMgDQALgDAAgEQgBgFgHgEQgFgDgFAAIgQgBgAgQgUIAAAOIAJAAQASgBAAgNQAAgFgGgEQgFgEgGAAIgKAAg");
	this.shape_79.setTransform(29.9,-102.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0033FF").s().p("AgZAsQgQgOAAgeIAAgJIAAgJIAAgIIABgHQAAgFABgFQADgFAEgBQAEAAADADQACACAAAEIAAALIAAALIAAAJIAAAJQAAAIACAJQADAJAFAEQACACAKABQAQgBAGgdQADgNAAgbQAAgDACgEQADgFAFAAQAFAAACAEQABACAAADQAAAZgCAOQgEAVgKAOQgFAHgGAEQgIAEgIAAQgQAAgIgFg");
	this.shape_80.setTransform(20.7,-101.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0033FF").s().p("AghApQgIgGAAgHQAAgEACgDQADgDAEAAQAGAAACAGQAEAIANAAQAKAAAKgFQAKgFAAgGQAAgHgGgDQgFgCgNAAQgLAAgJgEQgMgFABgJQAAgNANgLQANgKAPAAQAGABAJACQALAEAAAEQAAAEgCACQgDADgEAAIgIgBIgJgCQgJAAgGAEQgIAFAAAEQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACABAFABIAPABQAOABAIAHQAJAGAAAOQAAAQgTAJQgOAGgRABQgQgBgJgHg");
	this.shape_81.setTransform(11.5,-101.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgVAbQgLgIAAgOQAAgPAJgLQAJgNAPAAQALAAAHAEQAKAFAAAKQAAAHgIAFIgOAGIgVAKQADADAFACQAEABAFAAQAIAAAHgDQAEgDAEAAQAHAAgBAGQABAHgLAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgDAIIAPgHIAMgHQgEgCgHAAQgEAAgFAEg");
	this.shape_82.setTransform(-2.4,-100.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAPAuIgDgOIgBgPIAAgFIAAgEIAAgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgHAAgFAFQgDADgFAJQAAAXgCAFQgDAFgFAAQgEAAgCgCQgDgCAAgEIABgDIAAgRIABgqIAAgCIAAgKIgBgGIAAgGQAAgDACgDQADgCAEAAQAGAAACAHIABALIAAANIAAANQAEgFAGgCQAEgCAGAAQALAAAEAGQAEAEABAJIAAAPIACANIACAMIAAACQAAAEgCACQgDADgEAAQgGAAgCgHg");
	this.shape_83.setTransform(-9.6,-102.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFAsQgDgCAAgEIABgGIAAgHIgBggIgMgBQgIgBAAgHQAAgEACgCQADgDADAAIALABIAAgHIAAgGQAAgEACgCQADgCAEAAQAIAAAAAPIAAAGIAGgBIAKABQAFACAAAGQAAADgCADQgDACgDAAIgEAAIgDAAIgGAAIABAhIAAADIAAAEQAAAOgJAAQgCAAgDgCg");
	this.shape_84.setTransform(-16.5,-101.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AANAdIgCgNIgBgNIAAgEIAAgGIAAgCIABgEQAAgEgDAAQgFgBgFAIQgEAGgEAKIAAAFIgBAHIAAAFIAAAFQgBAEgCADQgCACgEAAQgEAAgDgCQgCgDAAgEIAAgFIAAgFIAAgRIABgRIAAgGIgBgFQAAgEADgDQADgCADAAQAJAAAAAKIAAABQAKgJAJAAQAMgBAEAKQADAIAAAMIAAAFIAAADIACANIACANQAAAEgDACQgDACgDAAQgJAAAAgIg");
	this.shape_85.setTransform(-28.5,-100.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgVAbQgKgIAAgOQgBgPAJgLQAKgNAOAAQAMAAAGAEQAKAFAAAKQAAAHgHAFIgPAGIgUAKQADADAEACQAEABAFAAQAJAAAFgDQAFgDAEAAQAGAAABAGQAAAHgLAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgCAIIANgHIAOgHQgFgCgHAAQgFAAgEAEg");
	this.shape_86.setTransform(-35.7,-100.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAPAuIgDgOIgBgPIAAgFIAAgEIAAgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgHAAgFAFQgDADgFAJQAAAXgCAFQgDAFgFAAQgEAAgCgCQgDgCAAgEIABgDIAAgRIABgqIAAgCIAAgKIgBgGIAAgGQAAgDACgDQADgCAEAAQAGAAACAHIABALIAAANIAAANQAEgFAGgCQAEgCAGAAQALAAAEAGQAEAEABAJIAAAPIACANIACAMIAAACQAAAEgCACQgDADgEAAQgGAAgCgHg");
	this.shape_87.setTransform(-42.9,-102.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AACAUQgCgGgBgOIgCACIgJAYQgBADgCACQgDAEgFAAQgDAAgDgFQgEgGgCgIIgGgiIgBgJQAAgDADgCQACgCAEgBQAHABABAGIACAJIABAJIACAPIALgfQADgJAGAAQAHAAACAKIAEAQIADARIAKglQABgFAHgBQADABADACQADACAAADIgBACIgNAtQgCAFgEAHQgDADgFAAQgIAAgFgPg");
	this.shape_88.setTransform(-51.2,-100.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAGAWIgMAAIgFABIgGAAQgEAAgCgCQgDgCAAgDQAAgHAIAAIAMgBIAMAAIAMAAQAEAAACACQADACAAAEQAAADgDACQgCACgEAAIgMgBgAgJgHIgEAAIgFAAQgDAAgCgCQgDgCAAgEQAAgHANAAIACAAIACAAIAcAAQADAAACACQADACAAADQAAADgDADQgCACgDAAg");
	this.shape_89.setTransform(-65.4,-101.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BB0000").s().p("AgcAwQgIgGABgUIAAgZIACgZIgBgHIgBgGQAAgKAJAAQADAAADACIANgDIAMgBQAQAAAKAEQAFACAAAGQAAADgBACQgDADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAYgCIAPgBQAEAAACACQADADAAADQAAAHgIABIgPABIgaADIgBANQAAAMABACQABABAIAAIAKAAIANgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgSAAQgWAAgFgGg");
	this.shape_90.setTransform(-78.8,-102);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BB0000").s().p("AgbAmQgKgJAAgOQAAgUATgXQAQgSAPAAIAFAAIAEAAQADgCAEAAQAGAAACAIIABAMQAAADgCADQgDADgEAAQgGAAgDgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgFgBQgIAAgKAMQgOARAAAPQAAAHAEAFQAFAFAGAAQAGAAAHgEIAJgFQAFgEADAAQAEAAACADQADADAAADQAAAEgEACQgRAPgSAAQgOAAgJgLg");
	this.shape_91.setTransform(-87,-102);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BB0000").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIAAgcQAAgRABgPIgOAAQgDAAgDgCQgDgDAAgEQAAgDADgDQACgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAADACQACADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgNACQgDAAgDgDg");
	this.shape_92.setTransform(-94.7,-101.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BB0000").s().p("AghAnQgOgLAAgTQAAgUAOgSQAOgUAWAAQAXAAALAKQALAKAAAVQAAAUgMARQgPAVgWAAQgTAAgNgLgAgUgSQgJANAAAOQAAAKAIAIQAIAFAMAAQANAAAJgNQAJgMAAgPQAAgOgGgFQgGgFgPAAQgMAAgLAOg");
	this.shape_93.setTransform(-103.4,-101.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#BB0000").s().p("AgNAtQgIgSgJgiIgGgRQgDgMAAgFQAAgEADgCQADgCADAAQAGAAADAGIACALIAGAVIAKAfIANgmIAGgPQAEgJAEgFQADgDAEAAQADAAADACQADADAAAEIgCAFQgDAEgDAHIgFANIgRArIgHAPQgCAFgEAAQgIAAgCgGg");
	this.shape_94.setTransform(-112.9,-101.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#BB0000").s().p("AgcAwQgIgGAAgUIABgZIACgZIgBgHIgBgGQAAgKAJAAQAEAAACACIANgDIAMgBQAQAAAKAEQAFACAAAGQAAADgBACQgDADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAYgCIAPgBQAEAAACACQADADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQABABAHAAIALAAIANgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgSAAQgWAAgFgGg");
	this.shape_95.setTransform(-126.8,-102);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#BB0000").s().p("AgNAtQgIgSgJgiIgGgRQgDgMAAgFQAAgEADgCQADgCADAAQAGAAADAGIACALIAGAVIAKAfIANgmIAGgPQAEgJAEgFQADgDAEAAQADAAADACQADADAAAEIgCAFQgDAEgDAHIgFANIgRArIgHAPQgCAFgEAAQgIAAgCgGg");
	this.shape_96.setTransform(-135.4,-101.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#BB0000").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIAAgcQAAgRABgPIgOAAQgDAAgDgCQgDgDAAgEQAAgDADgDQACgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAADACQACADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgNACQgDAAgDgDg");
	this.shape_97.setTransform(-143.5,-101.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#BB0000").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_98.setTransform(-151.4,-102);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BB0000").s().p("AgcAmQgJgJAAgOQAAgUATgXQAQgSAPAAIAFAAIAEAAQADgCAEAAQAGAAACAIIABAMQAAADgCADQgDADgEAAQgFAAgDgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgFgBQgIAAgJAMQgPARAAAPQAAAHAFAFQAEAFAHAAQAFAAAGgEIAKgFQAFgEACAAQAEAAADADQADADgBADQAAAEgDACQgRAPgRAAQgOAAgLgLg");
	this.shape_99.setTransform(-159.9,-102);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#BB0000").s().p("AAWAkQgDgHgDgKIgPABIgOACIgLAVQgCAEgFAAQgEABgDgDQgCgDAAgDQAAgDAJgTIgBgEQAAgDAGgBIAUggQAPgYAEAAQAHAAACAIIAEAVIAKApIADAIQACAFAAADQAAAEgDADQgCACgEAAQgFAAgFgMgAgEAGIAIgBIAJgBIgFgUIgMAWg");
	this.shape_100.setTransform(-168.8,-101.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["rgba(204,153,255,0.592)","rgba(153,0,255,0.541)"],[0,1],-237.5,0,237.5,0).s().p("EglGABaIAAizMBKNAAAIAACzg");
	this.shape_101.setTransform(45.4,-101.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["rgba(179,254,146,0.612)","rgba(0,204,0,0.651)"],[0,1],-237.5,0,237.5,0).s().p("EglGABaIAAizMBKNAAAIAACzg");
	this.shape_102.setTransform(45.4,-80.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},59).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},83).wait(120));

	// Layer 15
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgGAGQgDgDAAgDQAAgCADgDQADgCADAAQAEAAADACQADADAAACQAAADgDADQgDACgEAAQgDAAgDgCg");
	this.shape_103.setTransform(131.7,210.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_104.setTransform(125.6,205.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AgeAkIABgTQACgZAAgfQAAgDACgCQACgDAEAAQADAAADADQACACAAADQAAAfgCAaIgBAOQAOAAAVgGIACgBQAEAAACADQACACAAADQAAAFgFACQgHAEgOABQgMADgJAAQgOAAAAgMg");
	this.shape_105.setTransform(118.5,206.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_106.setTransform(111.9,205.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_107.setTransform(105.3,206);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAFABIADAAQADgCAEAAQAFAAACAGIABAMQAAADgCACQgCADgEAAQgFAAgDgFIgCgDIgFgBQgHAAgJAMQgNAPAAAOQAAAGADAFQAFAEAGAAQAEAAAHgDIAJgGQAEgDADAAQADAAACADQACACAAAEQAAADgDADQgQANgPAAQgNAAgKgJg");
	this.shape_108.setTransform(98.5,205.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_109.setTransform(91.4,206);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_110.setTransform(84,205.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AggAsQgCgCAAgEIAAgNIAAgNIAAguQABgEACgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAQAJAHAJQACACABADQgBADgCADQgCACgEAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgEAAQgDAAgDgCgAgRACIACAAQAOAAAHgDIAFgEIADgDQAAgHgJgGQgHgGgIgBIgHAAg");
	this.shape_111.setTransform(76.1,205.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AAUAhIgFgQIgOABIgNACIgJATQgDAFgFAAQgDAAgDgDQgCgCAAgDQAAgDAJgRIgBgEQAAgDAFgBQAIgOALgPQAOgWADAAQAGAAACAHIAEATIAJAmIADAIIACAHQAAAEgDACQgCACgEAAQgEAAgFgLgAgDAFIAHgBIAIAAIgEgTIgLAUg");
	this.shape_112.setTransform(67.7,206.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_113.setTransform(60.1,205.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_114.setTransform(47.6,205.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_115.setTransform(39.2,206.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF0000").s().p("AAVAhIgGgQIgOABIgOACIgIATQgDAFgFAAQgDAAgCgDQgDgCAAgDQAAgDAIgRIgBgEQABgDAGgBQAIgOAKgPQANgWAEAAQAHAAACAHIADATIAJAmIADAIIACAHQAAAEgDACQgCACgDAAQgFAAgEgLgAgEAFIAIgBIAIAAIgEgTIgMAUg");
	this.shape_116.setTransform(30.6,206.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF0000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_117.setTransform(23.1,205.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_118.setTransform(11.2,207.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_119.setTransform(4.6,205.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgEApQgDgCAAgDIAAgHIABgGIgBgeIgMAAQgHgCAAgGQAAgDACgDQACgCAEAAIAKABIgBgGIAAgGQAAgEADgCQACgCADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFABAAAGQAAAEgDACQgCACgDAAIgDAAIgDAAIgGAAIABAeIAAADIAAADQABAOgJAAQgCAAgCgCg");
	this.shape_120.setTransform(-1.8,206.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgFAWQgCgCAAgDIAAgKIgIAAQgFAAgDgCQgDgCAAgDQAAgEADgBIAIAAIAIgBIAAgCIAAgDQgBgMAIAAQACAAACACQADACAAADIgBADIAAADIAAAEIADAAIADAAIADAAQANgBAAAHQAAADgDACQgBACgEAAIgCAAIgCgBIgEABIgGAAIAAAFIAAAFQAAADgCACQgCACgCAAQgDAAgCgCg");
	this.shape_121.setTransform(-13.4,206.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF0000").s().p("AgcAtQgDgEAAgDIAAg9IAAgIIAAgIQABgFAKgBIAOgCQALABAKAGQAMAJAAANQAAAGgDAFQgCAEgFADQAGACAEAGQAFAHAAAFQAAAJgIAGQgGAFgGACQgNAFgUAAQgEAAgDgCgAgPAfQAKgBALgCQALgDgBgEQAAgFgGgDQgFgDgFAAIgPAAgAgPgSIAAAMIAIAAQARgBAAgLQAAgFgFgDQgFgFgGAAIgJAAg");
	this.shape_122.setTransform(-25.9,205.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF0000").s().p("AgfAsQgDgCAAgEIAAgNIAAgNIAAguQAAgEADgDQADgEAGAAIAOABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAQAJAHAJQACACAAADQAAADgCADQgCACgEAAQgDAAgDgDQgRgQgVgHIABATQAAAEgCACQgDACgEAAQgDAAgCgCgAgSACIADAAQAOAAAHgDIAFgEIADgDQAAgHgJgGQgHgGgIgBIgIAAg");
	this.shape_123.setTransform(-33.6,205.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF0000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_124.setTransform(-41.2,205.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF0000").s().p("AgMAqQgHgRgIgfIgGgQQgDgLAAgFQAAgDADgCQADgCADAAQAFAAADAFIACALIAGATIAIAcIANgiIAFgOQADgJAEgEQADgDADAAQAEAAADACQACACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIgHALIgDAMIgRAoIgGAOQgCAEgFAAQgGAAgCgFg");
	this.shape_125.setTransform(-49.1,206);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF0000").s().p("AgNAsQgDgCAAgEQAAgCAMgVIgNgTIgSgeIgBgDQAAgEACgDQADgBADgBQAEAAADAEIAEAHIAKARIAKARIANgbIAFgMQADgGAFAAQADABADABQACADAAADIgDAJIgMAbIgNAaIgJASQgDAEgFAAQgDAAgCgCg");
	this.shape_126.setTransform(186.4,187.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0000").s().p("AggAsQgCgCAAgEIAAgNIAAgNIAAguQABgEACgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAQAJAHAJQACACABADQgBADgCADQgCACgEAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgEAAQgDAAgDgCgAgRACIACAAQAOAAAHgDIAFgEIACgDQABgHgJgGQgHgGgIgBIgHAAg");
	this.shape_127.setTransform(179.1,187.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0000").s().p("AAUAhIgFgQIgOABIgNACIgJATQgDAFgFAAQgDAAgDgDQgCgCAAgDQAAgDAJgRIgBgEQAAgDAFgBQAJgOAKgPQAOgWADAAQAGAAACAHIAEATIAJAmIADAIIACAHQAAAEgDACQgCACgEAAQgEAAgFgLgAgDAFIAGgBIAJAAIgEgTIgLAUg");
	this.shape_128.setTransform(170.6,187.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_129.setTransform(162.9,187.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0000").s().p("AgeAjIABgSQACgYAAggQAAgDACgDQACgCAEAAQADAAADACQACADAAADQAAAggCAYIgBAPQAOAAAVgHIACAAQAEAAACACQACADAAADQAAAFgFADQgHADgOABQgMADgJAAQgOAAAAgNg");
	this.shape_130.setTransform(156.6,187.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_131.setTransform(149.8,187.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0000").s().p("AARAhIgIgLIgHgKIgRAUIgLAMQgDACgDAAQgEAAgCgCQgDgDAAgDQAAgDACgCIALgMIAVgVIgNgPIgGgJIgIgIQgDgDAAgDQAAgDACgCQADgDADAAQADAAAFAEIAHAHIAHAKIAKAMIAPgTQALgOAEAAQAEAAACADQADACAAADQAAACgDADIgMAPIgOASIAMARIANAQQADADAAADQAAADgDADQgCACgEAAQgGAAgJgOg");
	this.shape_132.setTransform(142.1,187.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0000").s().p("AgWAoQgQgMAAgdIABgIIAAgIIAAgHIAAgGQAAgFABgEQADgFAEgBQADAAACACQAEADAAADIAAAKIgBAKIAAAIIAAAIQAAAJACAHQACAJAFAEQACABAJABQAPAAAFgaQAEgNAAgaIABgFQADgFAFAAQADAAACAEQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAXgCANQgDATgKAOQgEAFgGAEQgHAFgIgBQgPABgGgGg");
	this.shape_133.setTransform(133.4,187.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0000").s().p("AAVAhIgGgQIgOABIgNACIgJATQgDAFgFAAQgDAAgDgDQgCgCAAgDQAAgDAIgRIAAgEQAAgDAGgBQAHgOALgPQANgWAEAAQAHAAACAHIADATIAJAmIADAIIACAHQAAAEgDACQgCACgDAAQgFAAgEgLgAgDAFIAHgBIAIAAIgEgTIgLAUg");
	this.shape_134.setTransform(124.6,187.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgEIAAgGIAAgCIAAgCQAAgGgCAAQgFABgEAGQgFAHgDAJIAAAFIgBAFIAAAFIAAAGQAAACgDADQgCACgDAAQgEAAgCgCQgDgDAAgCIAAgGIAAgFIABgQIAAgPIAAgFIAAgGQAAgDACgCQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_135.setTransform(112,188.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAOAbIgKAEIgGABQgNAAgIgHQgGgIgBgPQABgNAJgKQALgKANAAQAGAAAIADQAIAEABAFQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAJQAAAJACAGIACAFIACAGQABADgDACQgDACgDAAQgCAAgGgFgAgHgLQgHAHAAAGQAAAIADAFQADADAGAAQACABADgCQAEgBADgCIgCgVIABgDIAAgGIgCgBIgCAAQgGAAgGAGg");
	this.shape_136.setTransform(105.5,188.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgEIAAgGIAAgCIAAgCQAAgGgCAAQgFABgEAGQgFAHgDAJIAAAFIgBAFIAAAFIAAAGQAAACgDADQgCACgDAAQgEAAgCgCQgDgDAAgCIAAgGIAAgFIABgQIAAgPIAAgFIAAgGQAAgDACgCQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_137.setTransform(93.9,188.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgGAqQgDgCAAgDIAAgLIAAgLIAAgMIABgNQAAgDACgCQADgCADAAQADAAACACQACACAAADIAAANIgBAMIAAALIAAALQAAADgCACQgCADgDAAQgDAAgCgDgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDADgEAAQgDAAgCgDg");
	this.shape_138.setTransform(89.1,187.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAOAbIgJAEIgHABQgOAAgGgHQgIgIABgPQgBgNAKgKQALgKAOAAQAFAAAHADQAJAEAAAFQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAJQAAAJABAGIADAFIADAGQgBADgCACQgCACgDAAQgDAAgGgFgAgIgLQgFAHAAAGQAAAIACAFQADADAGAAQADABADgCQADgBADgCIgCgVIAAgDIABgGIgCgBIgCAAQgHAAgGAGg");
	this.shape_139.setTransform(84.1,188.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgEApQgDgDAAgCIAAgHIABgGIgBgeIgMgBQgHgBAAgGQAAgDACgCQACgDAEAAIAKABIgBgGIAAgGQAAgEADgBQACgDADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFABAAAGQAAAEgDACQgCACgDAAIgDAAIgDgBIgGABIABAeIAAADIAAADQABAOgJAAQgCAAgCgCg");
	this.shape_140.setTransform(77.9,187.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgEIAAgGIAAgCIAAgCQAAgGgCAAQgFABgEAGQgFAHgDAJIAAAFIgBAFIAAAFIAAAGQAAACgDADQgCACgDAAQgEAAgCgCQgDgDAAgCIAAgGIAAgFIABgQIAAgPIAAgFIAAgGQAAgDACgCQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_141.setTransform(72,188.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_142.setTransform(65.6,188.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgRAaQgKgIAAgNQAAgKAJgMQAJgPALAAQAHAAAIADQAKAEAAAGQAAACgCADQgDADgDgBQgCAAgEgCQgDgDgIAAQgDAAgFAJQgFAIAAAFQAAAHAEADQAEAEAGAAQAEAAAGgEIAHgDQADABACACQADACAAADQAAAFgKAEQgJAEgGAAQgMAAgIgHg");
	this.shape_143.setTransform(59.3,188.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgFAuQgCgCAAgEIAAhQQAAgDACgCQACgCADAAQAEAAACACQACACAAADIAABNQAAALgIAAQgDAAgCgCg");
	this.shape_144.setTransform(49.5,187);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgFAuQgCgCAAgEIAAhQQAAgDADgCQACgCACAAQADAAADACQACACAAADIAABNQAAALgIAAQgCAAgDgCg");
	this.shape_145.setTransform(46.2,187);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgGAqQgDgCAAgDIAAgLIAAgLIAAgMIABgNQAAgDACgCQADgCADAAQADAAACACQACACAAADIAAANIgBAMIAAALIAAALQAAADgCACQgCADgDAAQgDAAgCgDgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDADgEAAQgDAAgCgDg");
	this.shape_146.setTransform(43,187.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAOAhQgIAAgEgOIgDgTIgBACIgJAXIgCAEQgDAEgFAAQgDAAgDgFQgDgFgCgIIgGgfIAAgIQgBgDADgDQADgCADAAQAGAAACAHIABAIIABAIIACAOIAKgdQACgIAGAAQAGAAACAJIAEAQIADAPIAJgjQABgFAHAAQADAAACADQADACAAADIAAACQgHAWgGASQgBAGgEAFQgDAEgEAAIgBAAg");
	this.shape_147.setTransform(37.2,188.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#BB0000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_148.setTransform(24.2,187.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#BB0000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAFABIADAAQADgCAEAAQAFAAACAGIABAMQAAADgCACQgCADgEAAQgFAAgDgFIgCgDIgFgBQgIAAgIAMQgNAPgBAOQAAAGAEAFQAFAEAGAAQAFAAAGgDIAJgGQAEgDADAAQADAAACADQACACABAEQgBADgDADQgQANgPAAQgNAAgKgJg");
	this.shape_149.setTransform(16.7,187.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#BB0000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_150.setTransform(9.6,187.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#BB0000").s().p("AgeAkQgNgKAAgRQAAgTAMgRQAOgSAVAAQAUAAAKAJQAKAKAAATQAAASgLARQgNASgVAAQgRAAgMgKgAgSgQQgJALAAAOQAAAJAIAHQAHAFALAAQAMAAAJgMQAIgMAAgNQAAgNgGgFQgFgEgNAAQgNAAgJANg");
	this.shape_151.setTransform(1.5,187.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#BB0000").s().p("AgMAqQgHgRgIgfIgGgQQgDgLAAgFQAAgDADgCQADgCADAAQAFAAADAFIACALIAGATIAIAcIANgiIAFgOQADgJAEgEQADgDADAAQAEAAADACQACACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIgHALIgDAMIgRAoIgGAOQgCAEgFAAQgGAAgCgFg");
	this.shape_152.setTransform(-7.2,187.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#BB0000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_153.setTransform(-20.1,187.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#BB0000").s().p("AgMAqQgHgRgIgfIgGgQQgDgLAAgFQAAgDADgCQACgCAEAAQAFAAADAFIACALIAFATIAJAcIANgiIAFgOQADgJAEgEQADgDADAAQAEAAADACQACACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIgHALIgDAMIgQAoIgHAOQgDAEgEAAQgFAAgDgFg");
	this.shape_154.setTransform(-28,187.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#BB0000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_155.setTransform(-35.5,187.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#BB0000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_156.setTransform(-42.8,187.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#BB0000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_157.setTransform(-51.1,187.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BB0000").s().p("AAVAhIgGgQIgOABIgOACIgJATQgCAFgFAAQgDAAgCgDQgDgCAAgDQAAgDAIgRIgBgEQABgDAGgBQAHgOALgPQAOgWADAAQAHAAACAHIADATIAJAmIADAIIACAHQAAAEgCACQgDACgDAAQgFAAgEgLgAgEAFIAHgBIAJAAIgEgTIgMAUg");
	this.shape_158.setTransform(-59.7,187.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#BB0000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_159.setTransform(-67.3,187.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgHAQQAAgDACgDQADgCACAAQAJAAAAANQAAAEgCACQgDADgDgBQgIABAAgOgAgFgMQgDgBAAgEIAAgCIAAgCQAAgDACgCQADgCADAAQAIgBAAAMQAAAEgCABQgDADgDAAQgDAAgCgDg");
	this.shape_160.setTransform(-78.2,188);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_161.setTransform(-84.3,188.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgFApQgCgDAAgCIAAgHIAAgGIgBgeIgKgBQgIgBAAgGQAAgDACgCQACgDAEAAIAKABIgBgGIAAgGQABgEACgBQACgDAEAAQAHAAAAAPIAAAEIAGAAQAHAAACABQAFABAAAGQAAAEgCACQgCACgEAAIgDAAIgDgBIgFABIAAAeIAAADIAAADQAAAOgIAAQgCAAgDgCg");
	this.shape_162.setTransform(-90.4,187.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_163.setTransform(-96.4,188.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgpAtQgCgCAAgDIABgIIAAgHIAAgKIAAgKIAAgKIAAgMIgBgKIAAgLQAAgDADgDQADgDAEAAQAEAAAFAIQAaAmAaAXIAAgJIgBgmIgBgGIAAgHQAAgIAJAAQAJAAAAAeIAAAJIAAAkIgBAJQgBAIgIAAQgEAAgFgFQgWgUgcgkIgBASIABAOIAAAOQAAARgJAAQgDAAgEgDg");
	this.shape_164.setTransform(-104.3,187.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},5).wait(257));

	// sentence
	this.instance_2 = new lib.content15a();
	this.instance_2.parent = this;
	this.instance_2.setTransform(43.7,67.2,1,1,0,0,0,228.1,84.7);

	this.instance_3 = new lib.content15b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(43.7,67.2,1,1,0,0,0,228.1,84.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},137).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.4,-114.6,462.6,61.8);


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
		var bgm = createjs.Sound.play('bgmAP',{loop:-1});
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
		
		 window.open ("active_Summary.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("active_Scene3.html","_self");
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
(lib.active_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4_repeat:124});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		playSound("passivevoicewhenthesubject");
		playSound("bgmAP",-1);
		playSound("bgmAP",-1);
	}
	this.frame_59 = function() {
		playSound("activevoiceiswhen");
	}
	this.frame_123 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_136 = function() {
		this.gotoAndPlay("scene4_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(64).call(this.frame_123).wait(13).call(this.frame_136).wait(1));

	// content
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsBKQgLgKAAgeIACgnIACgnIgBgJIgBgKQAAgPAOAAQAEAAAEACIAVgEIASgBQAYAAAPAFQAJADAAAKQAAAFgEAEQgDAEgGAAIgEgBQgQgEgPAAIgPABIgRADIgBAnIAlgEIAXgCQAGABAEADQAEAEAAAGQAAAKgMACIgXACIgpAEIgBAUQAAASADADQABABALAAIARAAIASgBIAGAAIAFgBQAGAAAEADQAFAFAAAGQAAALgMABQgJACgeAAQggAAgJgIg");
	this.shape.setTransform(319.8,29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrA7QgOgPAAgVQAAggAcghQAZgdAYAAIAHABIAGAAQAFgEAGAAQAKAAACAMQACAHAAAMQAAAEgDAEQgEAGgHgBQgJAAgEgJQgCgEgCgBIgHAAQgMgBgPAUQgXAZAAAXQAAAKAHAIQAHAHAKABQAJAAAKgGIAOgJQAIgFAEAAQAGAAAEAEQADAFAAAEQAAAGgFAEQgaAXgbAAQgWAAgPgQg");
	this.shape_1.setTransform(307.3,29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtBGQgEgDAAgGQAAgFAEgEQAEgFAGAAIATAAIgBgtQABgZACgXIgWAAQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFAAIAdgBQARAAAeAEQALACAAAMQAAAGgFADQgEADgEAAIgZgCQgCARAAAdIAAArIAaAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEAEgGAAIgQABIgRAAIgTACIgUABQgFAAgEgEg");
	this.shape_2.setTransform(295.6,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyA8QgWgSAAgcQAAggAVgbQAWgeAiAAQAjAAARAPQAQAQAAAfQAAAggTAaQgVAfgjAAQgdAAgTgQgAgfgcQgNATAAAXQAAAQAMAKQAMAKASAAQAUAAAOgVQAOgTAAgXQgBgVgIgIQgJgHgXAAQgUAAgQAVg");
	this.shape_3.setTransform(282.3,29.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVBFQgLgdgPg0IgIgZQgFgTAAgHQAAgFAEgEQAFgEAEAAQAKAAAEAKIADAQIAKAgIAPAwIAVg5IAIgYQAGgNAHgIQAEgFAGAAQAGAAAEAEQAEADAAAGQAAAEgCAEQgGAIgEAKIgIATIgaBCQgEAMgGAMQgFAHgGAAQgLAAgEgJg");
	this.shape_4.setTransform(267.8,29.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB0000").s().p("AgsBKQgLgKAAgeIACgnIACgnIgBgJIgBgKQAAgPAOAAQAEAAAEACIAVgEIASgBQAYAAAPAFQAJADAAAKQAAAFgEAEQgDAEgGAAIgEgBQgQgEgPAAIgPABIgRADIgBAnIAlgEIAXgCQAGABAEADQAEAEAAAGQAAAKgMACIgXACIgpAEIgBAUQAAASADADQABABALAAIARAAIASgBIAGAAIAFgBQAGAAAEADQAFAFAAAGQAAALgMABQgJACgeAAQggAAgJgIg");
	this.shape_5.setTransform(246.5,29.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB0000").s().p("AgVBFQgLgdgOg0IgIgZQgGgTAAgHQAAgFAEgEQAEgEAGAAQAJAAADAKIAEAQIAKAgIAOAwIAWg5IAJgYQAFgNAHgIQAEgFAGAAQAFAAAFAEQAEADAAAGQAAAEgDAEQgFAIgEAKIgIATIgZBCQgFAMgGAMQgEAHgIAAQgJAAgFgJg");
	this.shape_6.setTransform(233.4,29.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BB0000").s().p("AgtBGQgEgDAAgGQAAgFAEgEQAEgFAHAAIASAAIAAgtQAAgZABgXIgUAAQgHAAgDgEQgEgEAAgGQAAgFAEgEQADgDAFAAIAdgBQARAAAdAEQAMACAAAMQAAAGgEADQgFADgEAAIgZgCQgCARAAAdIAAArIAbAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgEAEgGAAIgQABIgRAAIgTACIgTABQgHAAgDgEg");
	this.shape_7.setTransform(221.2,29.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BB0000").s().p("AgzA/QgNgJAAgMQABgGAEgEQADgEAGAAQAJAAAEAJQAGAMATgBQAQABAQgIQAQgHAAgJQAAgMgLgEQgHgDgUgBQgRAAgNgFQgSgIAAgPQAAgSAUgQQAUgQAXAAQAJAAAPAFQARAFAAAHQAAAFgEADQgDAFgHAAIgNgCIgOgCQgMABgLAFQgLAGAAAHQAAAEAEACQADACAHABIAXACQAWACAMAKQAOALABAVQgBAYgcANQgWAKgbAAQgZAAgNgLg");
	this.shape_8.setTransform(208.9,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BB0000").s().p("Ag0A/QgLgJAAgMQAAgGADgEQAEgEAGAAQAJAAAFAJQAFAMATgBQAQABAPgIQAQgHABgJQgBgMgJgEQgHgDgVgBQgRAAgNgFQgSgIAAgPQABgSATgQQAUgQAXAAQAJAAAPAFQARAFAAAHQAAAFgEADQgDAFgHAAIgNgCIgOgCQgNABgJAFQgMAGAAAHQAAAEAEACQADACAHABIAYACQAVACAMAKQAOALAAAVQAAAYgcANQgWAKgbAAQgZAAgOgLg");
	this.shape_9.setTransform(195.2,29.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BB0000").s().p("AAiA3QgFgLgEgPIgYACIgWACIgPAhQgFAGgHAAQgGAAgEgDQgEgEAAgGQAAgEAOgdQgBgDAAgDQAAgEAJgDQAOgXARgaQAXgkAFAAQALAAAEANIAGAfIAOA+IAGAOQADAIAAAEQAAAGgEADQgFAEgFAAQgIgBgHgRgAgHAJIANgCIANgBIgGggIgUAjg");
	this.shape_10.setTransform(181,29.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BB0000").s().p("AgrBJQgDgDAAgFIAAgbIABgsIACgsQABgaANABIAJgBIAPAAQASAAAQAMQASAOABATQgBAZgTAOQgRANgXAAIgIgBIgBAtQAAAFgEADQgEAEgFAAQgGAAgDgEgAgSglIgBAhIAHABQAOAAAKgHQAKgIAAgNQAAgIgKgGQgKgGgKAAIgFAAIgEAAIgBAOg");
	this.shape_11.setTransform(168.6,29.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbAzQgOgGAAgKQAAgKALAAQAFAAAIADQAJADAEAAQATAAAAgIQAAgFgOgGQgTgJgFgDQgOgKAAgNQAAgUAVgHQAMgEAXAAQAKAAAFADQAGADAAAJQAAASgJAAQgKAAgCgIIgIgBQgWAAAAAHQAAADANAHQATAJAHAEQAOAKAAAMQAAARgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape_12.setTransform(149.7,31.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAUAwQgNAFgMgBQgOAAgJgFQgLgHgCgNQgEgXAAgSQAAgNADgRQACgKALAAQAGAAAEAEQAEADAAAGIgBAMIgCAPIABAWQABAKACAGIAFACIAEABQAKAAANgDIgBgRIAAgQQAAgTACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAhIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEADgGAAQgIAAgDgHg");
	this.shape_13.setTransform(139.8,31.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbAzQgOgGAAgKQAAgKALAAQAFAAAIADQAJADAEAAQATAAAAgIQAAgFgOgGQgTgJgFgDQgOgKAAgNQAAgUAVgHQAMgEAXAAQAKAAAFADQAGADAAAJQAAASgJAAQgKAAgCgIIgIgBQgWAAAAAHQAAADANAHQATAJAHAEQAOAKAAAMQAAARgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape_14.setTransform(129.8,31.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglAyQgEgDAAgGIAAg+IAAgJIABgJQAAgFADgEQADgEAHAAQAKAAACALQAQgMAVAAQATAAAAAZIAAAHQgBAPgMAAQgMAAAAgNIAAgKQgWAEgJATIAAAvQAAAGgDAEQgEADgGAAQgGAAgDgEg");
	this.shape_15.setTransform(120.5,31.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggAqQgQgNgBgWQAAgXANgRQAPgTAXAAQARAAALAGQAOAHAAAPQAAAKgMAJQgFADgQAHIggAOQAFAFAGADQAHACAIAAQANAAAIgFQAJgFAFAAQAKAAAAAKQgBALgQAHQgNAGgPAAQgXAAgOgLgAgNgWQgFAGgEAMIAVgKIAUgLQgGgDgLAAQgIAAgHAGg");
	this.shape_16.setTransform(109.8,31.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOArIgfhNIgCgGQAAgFAFgEQADgDAGAAQAIAAAEAIQAFALAQAqIANggIAJgVQAEgHAIAAQAGAAAEADQAEADAAAGQAAADgQAjIgUArQgBAFgDADQgEADgEAAQgJAAgFgKg");
	this.shape_17.setTransform(99.8,31.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BB0000").s().p("AgsBKQgLgKAAgeIACgnIACgnIgBgJIgBgKQAAgPAOAAQAEAAAEACIAVgEIASgBQAYAAAPAFQAJADAAAKQAAAFgEAEQgDAEgGAAIgEgBQgQgEgPAAIgPABIgRADIgBAnIAlgEIAXgCQAGABAEADQAEAEAAAGQAAAKgMACIgXACIgpAEIgBAUQAAASADADQABABALAAIARAAIASgBIAGAAIAFgBQAGAAAEADQAFAFAAAGQAAALgMABQgJACgeAAQggAAgJgIg");
	this.shape_18.setTransform(80.3,29.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BB0000").s().p("AgUBFQgMgdgOg0IgJgZQgFgTAAgHQAAgFAEgEQAFgEAFAAQAJAAADAKIAFAQIAJAgIAOAwIAWg5IAJgYQAFgNAGgIQAFgFAGAAQAFAAAFAEQAEADAAAGQAAAEgCAEQgGAIgEAKIgHATIgaBCQgEAMgHAMQgEAHgIAAQgJAAgEgJg");
	this.shape_19.setTransform(67.2,29.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BB0000").s().p("AgtBGQgEgDAAgGQAAgFAEgEQAEgFAHAAIASAAIAAgtQAAgZACgXIgWAAQgGAAgDgEQgEgEAAgGQAAgFADgEQAEgDAFAAIAdgBQARAAAeAEQALACAAAMQAAAGgEADQgFADgEAAIgZgCQgCARAAAdIAAArIAbAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgEAEgGAAIgQABIgRAAIgTACIgUABQgGAAgDgEg");
	this.shape_20.setTransform(54.9,29.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BB0000").s().p("AgJBGQgEgEAAgFIAAgEIABgFIgBgNIAAgOQAAgNgCgVIgDgjIgFAAQgVAAgOgDQgKgDAAgKQAAgFADgEQAFgEAGAAIAPACIAQABIASAAIARgBIAVABIAXABQAFAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgFAAIgYgBIgYgBIADAnIACAmIAAAKIABAKQAAAHgCAGQgFAIgHAAQgEAAgFgEg");
	this.shape_21.setTransform(42.8,29.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BB0000").s().p("AgrA7QgOgPAAgVQAAggAcghQAZgdAYAAIAHABIAGAAQAFgEAGAAQAKAAACAMQACAHAAAMQAAAEgDAEQgEAGgHgBQgJAAgEgJQgCgEgCgBIgHAAQgMgBgPAUQgXAZAAAXQAAAKAHAIQAHAHAKABQAJAAAKgGIAOgJQAIgFAEAAQAGAAAEAEQADAFAAAEQAAAGgFAEQgaAXgbAAQgWAAgPgQg");
	this.shape_22.setTransform(29.8,29.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BB0000").s().p("AAhA3QgEgLgEgPIgXACIgXACIgQAhQgEAGgHAAQgFAAgFgDQgEgEAAgGQAAgEAOgdQgCgDABgDQAAgEAJgDQAOgXARgaQAXgkAGAAQAKAAAEANIAGAfIAPA+IAEAOQAEAIAAAEQAAAGgFADQgDAEgGAAQgHgBgJgRgAgHAJIAMgCIAPgBIgHggIgUAjg");
	this.shape_23.setTransform(16.2,29.6);

	this.instance = new lib.contentscene15();
	this.instance.parent = this;
	this.instance.setTransform(273.4,186.5,1.035,1.035,0,0,0,45.5,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(137));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,194.7,1.121,1.121);

	this.instance_2 = new lib.Background();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,194.7,1.121,1.121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.UI}]}).wait(137));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280.5,200.6,539.1,398.7);
// library properties:
lib.properties = {
	id: 'C3FF035A8D96FB4DB49DB997746634C8',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/activevoiceiswhen.mp3", id:"activevoiceiswhen"},
		{src:"sounds/activevspassivevoice.mp3", id:"activevspassivevoice"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmusic2.mp3", id:"bgmusic2"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/bubpitchedthe.mp3", id:"bubpitchedthe"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/cowbell.mp3", id:"cowbell"},
		{src:"sounds/SENameofIdea.mp3", id:"SENameofIdea"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/bgmAP.mp3", id:"bgmAP"},
		{src:"sounds/knowthedifference.mp3", id:"knowthedifference"},
		{src:"sounds/learntowriteintheactive.mp3", id:"learntowriteintheactive"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/passivevoicewhenthesubject.mp3", id:"passivevoicewhenthesubject"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/theballwaspitchedatbub.mp3", id:"theballwaspitchedatbub"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/writeyouressayintheactivevoice.mp3", id:"writeyouressayintheactivevoice"}
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
an.compositions['C3FF035A8D96FB4DB49DB997746634C8'] = {
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