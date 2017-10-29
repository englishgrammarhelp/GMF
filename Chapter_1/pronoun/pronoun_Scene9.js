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


(lib.words = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape.setTransform(68.6,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaA2QgQgFABgKQAAgEACgDQADgDAEAAQAEAAAFAFQABACAJACIALABQAHAAAHgCQAJgDAAgGQAAgNgTgFIgJgCQgNgDgFgEQgJgEABgLQgBgVAUgJIASgGQAMgDAGgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgFAAgDgEQgBgDgBgIIgWAHQgQAGABAKIAGABQAVAEAKAHQAQAKAAATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_1.setTransform(60.9,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgPQAOgPAVAAQALgBAGAEIAKAHIADg3QABgJAIAAQAJAAAAAKQAAANgEAuIgBAcQAAAhADAQIAAACQAAAEgDADQgDACgDAAQgGAAgDgJQgHAGgIACQgHADgIAAQgUAAgNgOgAgWACQgIAJAAAUQAAAMAJAJQAIAJAMAAQAIAAAFgDQAEgBAHgHIADgCIAAgSIAAgLIAAgMQgEgHgGgDQgGgEgJAAQgPAAgIAJg");
	this.shape_2.setTransform(50.4,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_3.setTransform(39.6,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_4.setTransform(28.9,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJBHQgDgDABgFIAAgRIgBgRIABgXIABgWQAAgEACgDQAEgDADAAQAEAAACADQADADAAAEIgBAWIgBAXIAAARIABARQAAAFgDADQgDADgDAAQgEAAgDgDgAgFg1QgEgEAAgEQAAgFAEgDQADgDAEgBQAFABADADQADADAAAFQAAAEgDAEQgDADgFABQgEgBgDgDg");
	this.shape_5.setTransform(20.6,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglAtIAAhEIABgJIAAgKQAAgKAIAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgJAHQgIAHgGAMIABA1QAAAKgKAAQgJAAAAgKg");
	this.shape_6.setTransform(13.1,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_7.setTransform(2.8,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZBNQgDgDAAgFQAAgJAVgvIgjhCIgFgHQgCgFAAgDQAAgEADgDQADgDAEAAQAEAAADADQAQAYASAqIAPghIAPgfQADgFAFAAQAEAAADADQADACAAAFIgBAEIgiBIQgMAbgGASIgGATQgDAHgGAAQgEAAgDgCg");
	this.shape_8.setTransform(-13.6,5.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA6QgDgDAAgFIgCgiQgCgXAAgLQAAgLgDgFQgHADgHAHIgMANIgFAGIgBAQIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADADQADADAAAEIAAAGIAAAGIAAAKQAFgKAKgIQAKgJAGAAQAQAAAFAPQAFgHAHgDQAIgEAJAAQARAAAGASIAEAbIAHA3QAAAEgDADQgDACgEAAQgIAAgCgIIgDgeIgDgeIgEgNQgDgJgEAAQgEAAgJAGQgKAGgDAEIABASIADAZQACAPAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_9.setTransform(-26.2,3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_10.setTransform(-45.4,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgIAHQgJAHgGAMIAAA1QABAKgLAAQgIAAAAgKg");
	this.shape_11.setTransform(-55.5,3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAQgRAVAAQAJAAAKAEQANAGAAAHQAAADgCACIgBAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAJgIQgCgZAAgNIAAgJIABgKIgGgDIgEgBQgOAAgLAMg");
	this.shape_12.setTransform(-65.7,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.words, new cjs.Rectangle(-73,-15.9,146.1,31.9), null);


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


(lib.VertLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAKEiIgTAAIAApDIATAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJEiIAApDIATAAIAAJDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-30,4,60);


(lib.Theydogarmstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACoBzIgFAAIgLgCIgRgDQA7AEApgLIAAACIgBABIgBAAIgBABQgLgCgJAJIgCABIgqAAgACBBtIgIgBIgGgBIgBgBIgEgBIAAABIgIgCIgEgBIABgBIABgCIgMgBQg5gHgkgcQgngdgCATIAAADQgrgPgpgUIgEAAQgpAXgmgTQgIgGgDgGQgFgMgGAAQgWAEADgiIAHgGIABgDIAAgDQgHgDADgNQATgbAYgXIAEgBQBngSBkAbIAEABQBFAQBAAWIABADIgFgBQhagahegJIgFgBQhKgNhFAEIgDABIgnAoQAPAJgMASQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAEIAAAAIgIAKIANgGQAKgDAGAEIgBAJIAAADQgFAeAggFIgCADQAAABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQANAZApgUQAOgGAPgDQAdAYAaABIAAgCQAJgfAOAbIABAEQAeAUAiAOIAAgBQAHgbAdAfIABAEIADABQASADAQAFIAEABQAQAIAJAOIgBAAgAALA2QgwgmAmg1QAQgWAagJQAagGATAQIACACQBTAJgdBPQgFAPgQAHIhwAAgADBgcIgDgBQgSgPgYgJQAdAJASgCQAFAEAJACIAPAEQAJADAMAAIAGAAIADAAIACAAQgFAIgXAAQgOAAgVgDg");
	this.shape.setTransform(-0.7,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6633").s().p("ADJBuIACgBIgBABIgBAAgAB+BpIgFgBQgKgPgPgIIgEgBQgQgFgSgDIgDAAIgBgEQgdgggHAbIAAACQgigPgfgUIgBgEQgNgagJAeIAAACQgagBgdgYQgPADgPAHQgoATgOgYQABAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACgEQghAFAFgdIABgEIABgIQgGgFgKADIgNAGIAIgJIAAgBIABgDQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQALgTgOgIIAmgpIADgBQBGgEBKANIAFABQBdAKBbAaIAFABIAJADQAZAIASAQIADABQA3AHAHgMIgCAAIgDAAIALgBIAFAPQAGAUgGAQQgDAGgBAIQgJAQgFAVIgEARIgFARIgEACIAAgBQgfAIgpAAIgcgBgAAihKQgaAJgPAXQgnA0AvAmIBxAAQAPgGAGgQQAdhPhUgIIgCgCQgOgMgSAAIgMABgADfBlIABAAIAAAAIgBAAgABkBkIABAAIAEABIABAAIgGgBg");
	this.shape_1.setTransform(0.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Theydogarmstill, new cjs.Rectangle(-26.2,-11.8,52.5,23.1), null);


(lib.theywordstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AgZBNQgDgDAAgFQAAgJAVgvIgjhCIgFgHQgCgFAAgDQAAgEADgDQADgDAEAAQAEAAADADQAQAYASAqIAPghIAPgfQADgFAFAAQAEAAADADQADACAAAFIgBAEIgiBIQgMAbgGASIgGATQgDAHgGAAQgEAAgDgCg");
	this.shape.setTransform(17.8,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_1.setTransform(7.6,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_2.setTransform(-3.7,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9900FF").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgOIgBgOIgCgnIgDgnIgIAAQgWAAgMgCQgIgDAAgHQAAgFADgCQADgDAEAAIAQACIAQABIARAAIARgBIAWABIAXABQAEAAADADQADADAAAEQAAAFgDACQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAGgGAAQgDAAgDgCg");
	this.shape_3.setTransform(-15.5,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theywordstill, new cjs.Rectangle(-25.3,-15.9,50.7,31.9), null);


(lib.theysentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkCDQgGgFAAgHQAAgGAQgeIAVgnQgegogJgVQgIgUgSgaIgdgtQgCgFAAgEQAAgIAFgFQAFgFAHAAQAJAAAFAIIAOAWQASAaAGAKQANAVAHASQAGAOARAYIAnhfIATgkQAEgMALAAQAHAAAGAFQAFAFAAAIQAAAHgJAQQgEAHgHANIgdBJQgRAogPAeIgVAnIgJASQgFAKgKAAQgHAAgFgFg");
	this.shape.setTransform(35.9,-5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhKCEQgRgQAAg2IABgYIABgcQgCgEAAgFQAAgFADgEQAEgyAAgXIgCgTIgCgSQAAgVASAAQAHAAAFAFQAUgFATgDQASgDAPAAQApAAAZAKQAMAFAAAMQAAAHgFAFQgFAGgHAAIgFgBQgdgIgbAAQgOAAgQACQgQADgUAFIACASQAAAYgDApIBKgHIAogDQAIAAAFAEQAFAFAAAIQAAAPgPACIgpADIhOAHIgBAXIgBAVQAAAlAGAHQAEAFAXAAIAfgBIAgAAIAKgBIAKgCQASAAAAASQAAAPgPACQgQAEg0AAQg1AAgPgOg");
	this.shape_1.setTransform(14.9,-5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIgBgbIgBgdIACgoIACgpQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHIgCApIgCApIABAqIBJgNQArgIAeAAQACgZAAgxQAAgNAEgNQAGgTAKAAQAHAAAFAFQAFAFAAAHIgBAHQgDAHAAAOIAAAPIABAPQAAARgDAiQgDAhAAARIACAnIABAnQAAAHgEAFQgFAFgHAAQgHAAgFgFQgEgFAAgHIgCgnIgCgnIABgZQgdAAgrAJIhHAOQAAAPgDAcQgDAdAAAPQAAAHgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_2.setTransform(-9.8,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMB9QgFgEAAgIIABgIIABgHIgBgZIgBgaQAAgYgFgrQgEgwAAgVIgQAAQglAAgVgFQgOgEAAgNQAAgHAFgGQAEgGAIABIAcADQARACAKAAIAgAAIAdgBIAoACIAnACQAHAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgHAAIgngCQgagCgNAAIgMAAQAAAYAEA1QAEAwAAAbIACATIABASQAAALgFAJQgEALgKAAQgGAAgGgFg");
	this.shape_3.setTransform(-33.9,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theysentstill, new cjs.Rectangle(-49.5,-33.3,99,52.8), null);


(lib.pronountheysmyword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtCGQgFgFAAgHQAAgRAlhSIg+h1IgHgMQgFgIAAgGQAAgHAGgFQAFgFAGAAQAIAAAFAGQAdAoAgBLIAZg7QAOgfANgWQAFgJAJAAQAHAAAFAEQAGAFAAAHQAAAEgCAFIg8B/QgVAugLAgIgLAhQgFAMgLAAQgHAAgFgEg");
	this.shape.setTransform(13.2,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJBlQgFgFAAgIQAAgUgEgpQgEgnAAgVQAAgSgFgKQgMAFgMANIgVAWIgIALIgCAdIgCAeIACAOIABANQAAAHgFAFQgFAFgHAAQgUAAAAgsIACgfIACgdIgBgbIgCgcQAAgmARAAQAHAAAGAFQAFAGAAAHIgBAKIgBALIABARQAJgSARgPQARgOAMAAQAbAAAJAaQAKgMANgGQANgHAQAAQAdAAAKAfQACAGAFAqQAFAcAIBFQAAAHgFAFQgFAEgHAAQgOAAgDgOIgGg1IgGg0QgCgMgEgLQgFgQgHAAQgHAAgRALQgQAKgFAGQgBAQABAQIAGAtQADAbAAARQAAAIgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_1.setTransform(-8.8,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronountheysmyword, new cjs.Rectangle(-24.8,-26.3,49.6,52.8), null);


(lib.pronountheysfriendsword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvBfQgagKAAgRQgBgHAGgFQAGgFAGAAQAGAAAIAIQAEAEAOADQAMACAHAAQAOAAALgDQAQgFAAgLQAAgXghgJIgRgEQgWgEgKgHQgOgJAAgTQABgkAhgPQAKgFAWgGQAXgGAJgFQAHgDAJAAQAGAAAFAFQAFAFAAAHQAAAFACAKIACAOQAAAIgEAFQgFAFgIAAQgJAAgDgHQgDgEgCgOIgoAMQgaALAAAQIAKADQAmAHAUAMQAbARAAAiQAAAcgYAOQgUAMgeAAQgWAAgUgIg");
	this.shape.setTransform(50.8,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8B1QgYgZAAglQAAguAYgaQAYgcAmAAQAUAAAKAGIAQAMQADhIADgZQACgPAOAAQAPAAAAAQQAAAYgHBRQgCAYAAAaQAAA5AGAdIAAADQAAAHgFAFQgFAEgGAAQgKAAgFgPQgNAJgNAEQgNAFgOAAQgjAAgXgXgAgoADQgOARAAAiQAAAWAQAQQAPAQAVAAQAOAAAKgFIATgPIAFgFIgBgeIAAgTIABgVQgHgNgLgGQgKgHgPAAQgcAAgPAQg");
	this.shape_1.setTransform(32.4,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAqBTIgFglQgDgUABgSIABgPIAAgQQAAglgOAAQgTAAgRAXQgPAUgJAfIgCARIgBAQIABAQIACAPQAAAIgFAFQgFAEgHAAQgIAAgFgEQgEgFAAgIIgBgPIgBgQQAAgRADgeIABgxIAAgQIgBgRQAAgHAGgFQAEgEAIAAQAPAAACAWIAAAUQAdgmAdAAQAbAAALAYQAIAQAAAfIAAARIAAAPQAAAPAEAWQAEAWgBAOQAAAIgEAFQgGAEgHAAQgPAAgBgQg");
	this.shape_2.setTransform(13.5,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAVgfQAYggAnAAQAcAAARAJQAXAMAAAYQgBASgTAOQgJAGgbAMIhBAfQAKAOAPAHQAOAHARAAQAMAAARgEQATgGAGgJQAGgJAHAAQAGAAAFAEQAEAFAAAGQAAATgfANQgaAMgZAAQglAAgYgTgAgjgtQgOAQgGAfIA0gYQAegPANgLQgPgOgZAAQgVAAgOARg");
	this.shape_3.setTransform(-5.3,5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQB7QgEgEgBgIIAAgeIgBgfQAAgQACgYIABgnQABgIAFgEQAEgFAHgBQAGABAGAFQAEAEAAAIIgBAnQgCAYAAAQIABAfIAAAeQAAAIgFAEQgFAGgGAAQgIAAgEgGgAgLheQgFgFAAgIQAAgJAFgGQAHgFAHgBQAIABAGAFQAGAGAAAJQAAAIgGAFQgGAGgIAAQgHAAgHgGg");
	this.shape_4.setTransform(-19.8,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhBBOIAAh3IAAgQIAAgRQAAgSAPAAQARAAAAAdQAhggAnAAQANAAAIALQAGAKAAAVIAAAMQgBAVgQAAQgOAAAAgRIgBgMIAAgOQgbADgQAMQgPALgKAXIAABcQAAASgRAAQgOAAAAgSg");
	this.shape_5.setTransform(-32.9,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcCSQgEgFAAgGIAAgEQADgWAAgaIAAgvIAAgxIgbACQgRAAAAgRQAAgRAdAAIARgBIACgZQAFgmAPgTQAQgVAnAAQAYAAAAARQAAAQgXAAQgpAAgEA5IgBAKIAlgBQAbAAAAARQAAAMgNACIgOACQgHgBggADIgBAlIABAhIAAAfQAAAggDATQgDANgNAAQgHABgFgFg");
	this.shape_6.setTransform(-51,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronountheysfriendsword, new cjs.Rectangle(-61.8,-26.3,123.6,52.8), null);


(lib.pronountheysareword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAWgfQAXggAnAAQAbAAATAJQAVAMAAAYQAAASgTAOQgIAGgcAMIhAAfQAJAOAOAHQAOAHASAAQANAAAPgEQAVgGAFgJQAGgJAGAAQAGAAAGAEQAEAFAAAGQAAATgeANQgaAMgaAAQglAAgYgTgAgigtQgOAQgIAfIA1gYQAegPANgLQgOgOgaAAQgVAAgNARg");
	this.shape.setTransform(17.8,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhCBOIAAh3IABgQIAAgRQAAgSAPAAQARAAAAAdQAhggAnAAQAOAAAGALQAIAKAAAVIgBAMQgBAVgQAAQgPAAAAgRIAAgMIgBgOQgbADgPAMQgPALgKAXIAABcQAAASgQAAQgPAAgBgSg");
	this.shape_1.setTransform(0,5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA3BXQgIgGgEgGIgdANQgMAFgHAAQgogBgTgWQgRgVAAgsQAAgoAdgeQAcgdAmAAQAPAAATAIQAXAKAAANQAAAFgDADQgCAGgBAQIgBAlQAAAUADANQABAIAJAWIAEAJIABADQAAAHgEAFQgFAEgHAAQgDAAgIgIgAgcgqQgTAWAAAbQAAAcAKAOQAJAOAUAAQAQAAALgGQAGgDALgKQgFgsAAgXIABgQIADgTIgLgEIgHgCQgaABgTAVg");
	this.shape_2.setTransform(-17.9,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronountheysareword, new cjs.Rectangle(-29,-26.3,58,52.8), null);


(lib.pronounheader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLAAQgNAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape.setTransform(134.8,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_1.setTransform(121.5,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_2.setTransform(108.2,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSBgQgDgEAAgFIABgQIABgQIAAgWIAAgXIAAgXIAAgZIgBgXIgCgWQAAgGAFgEQAEgGAHAAQAGAAAKAPQAeAuAYAdQAcAkAjAgIAAgQIgBgPQAAg1gDgfIgEgNQgCgJgBgEQABgPANAAQAVAAAABQIAAAoIgBAoIgCATQgCANgLAAQgGAAgKgJQgygvg/hXIAAAbIgBAbIABAeIAAAfQAAAhgNgBQgHAAgEgDg");
	this.shape_3.setTransform(92.1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_4.setTransform(68.1,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_5.setTransform(47.8,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_6.setTransform(35.4,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_7.setTransform(22,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_8.setTransform(9.1,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBZIABgtIACgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_9.setTransform(-0.7,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvBjQgDgDAAgGIAAgwIAAgxQAAgagBgWIgCgZQAAgJADgFQAEgIAHABQAEAAAEADQADADAAAFIgBAEIAAAHQAKgIAKgDQAJgEAJABQAZAAALAVQAJATAAAcQAAAagOAQQgPATgZAAQgLAAgPgEIAAA6QAAAGgDADQgEAEgFAAQgFAAgEgEgAgLhAQgGADgKAKQABAbAAAeQAOAFAMAAQAPAAAIgLQAHgJAAgQQAAgWgFgLQgFgLgLAAQgLAAgJAFg");
	this.shape_10.setTransform(-10.7,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_11.setTransform(-24.1,4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_12.setTransform(-36.8,4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9C30CE").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLAAQgNAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFADgEQAEgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_13.setTransform(-56.9,3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9C30CE").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_14.setTransform(-70.2,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9C30CE").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_15.setTransform(-83.5,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C30CE").s().p("AAeA7IgEgaQgBgOAAgNIAAgLIAAgLQABgbgKAAQgOAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgGAAgDgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAVAAQATAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_16.setTransform(-96.1,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9C30CE").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_17.setTransform(-109.8,4.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9C30CE").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHgBAPIAAAJQAAAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIAABCQAAAMgMAAQgLAAAAgMg");
	this.shape_18.setTransform(-121.7,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9C30CE").s().p("AgzBeQgDgDAAgFIAAgkQAAgSACggIADgyIAAgRQAAgMABgFQADgMAJACIALgBIASgCQAVABAUAPQAVARAAAYQAAAegXARQgUAQgcAAIgPgBIgBBAQAAAFgDADQgDADgFAAQgFAAgDgDgAgahIIgBAXIgCAwIANABQAUAAAOgKQAPgLAAgTQAAgOgPgKQgNgJgPAAIgJAAIgHABg");
	this.shape_19.setTransform(-134.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronounheader, new cjs.Rectangle(-143.2,-19.4,286.4,38.8), null);


(lib.period = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape.setTransform(0.2,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.period, new cjs.Rectangle(-7,-29.8,14.1,59.8), null);


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


(lib.HorizontalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AXXAKMgutAAAIAAgTMAutAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A3WAKIAAgTMAutAAAIAAATg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-2,301,4);


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


(lib.Theydogarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer 1
	this.instance = new lib.Theydogarmstill();
	this.instance.parent = this;
	this.instance.setTransform(41.3,34.3,0.999,0.999,-92.2,0,0,18.7,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:18.6,rotation:23.5,x:9.9,y:9.5},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.2,26.5,25.1,53.3);


(lib.theyword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.theywordstill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-15.9,50.7,31.9);


(lib.theybubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.theyword();
	this.instance.parent = this;
	this.instance.setTransform(-68.6,-12.2);

	this.instance_1 = new lib.words();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.9,-12.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ArDDvQgrgKgpgLQlHhaAAiAQAAh+FHhbQFJhaHOAAQHQAAFIBaQFHBbAAB+QAACAlHBaQlIBanQAAQkbAAjpgi");
	this.shape.setTransform(4.5,-10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABCB9QghgIgXgdQgmgjgWgwQgQgigLgkQgEgGgBgHIgDgJQgJgPgCgQQAAgDACgCIACgBIABgBQAIABAFAFQAGAEACAKIAGASQAPAuAUAqQAVAtAjAiQALAKANAHIAMAFIgBgMQgEgxAGgwQADgQAAgSQABgTAFgTQABgGAEgFIACgEIADgDQALACACAHQACAGgDAIQgJAXgBAZIgEBJQgDAhAKAgQgCAFABAGIAAADQgKgBgLAAg");
	this.shape_1.setTransform(-56.8,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoyF9QgMgHgMgKQgjgigVgtQgVgrgPguIgFgSQgCgJgGgFQgFgFgIgBIgBABIgCABQgrgKgpgLQlHhaAAh/QAAh/FHhbQFJhaHOABQHQgBFIBaQFHBbAAB/QAAB/lHBaQlIBanQAAQkbAAjpgiQgDgGgKgCIgEADIgCADQgDAFgCAHQgFATAAASQgBASgCAQQgGAxADAxIACANIgNgGg");
	this.shape_2.setTransform(4.5,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theybubblestill, new cjs.Rectangle(-108.4,-42,225.9,80.7), null);


(lib.theybubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 1
	this.instance = new lib.theybubblestill();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.033,0.033);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:1,scaleY:1,x:-16.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-1.4,7.5,2.7);


(lib.THEY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.theybubble();
	this.instance.parent = this;
	this.instance.setTransform(124.7,-24.2);

	this.instance_1 = new lib.Theydogarm();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.8,63.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EgjOAABIT0ABQAQgBAUAAQAXgBAUAAQAHABAHAAAuLAAQC9gDivAEMAxMAAA");
	this.shape.setTransform(13.5,171.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EgjOAZoIAAtuIAAgEMAAAglxMBGdAAAIAAAEMAAAAmeIAAAKIAAMjIAAAUIAAAU");
	this.shape_1.setTransform(13.5,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6633").s().p("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");
	this.shape_2.setTransform(165.3,75.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgKGYQgGgNgHgKQgGgKgJgGQgTgSgagLQgYgKgXgHQghgKghgCIgZgBIgBACIgOAGQgIABgGAEIgIgFIABgCQAAgIACgHIAFgKIAIgSQAGgOAJgKIAdggQAGgGAIgEQAKAIANAGIACABIAWAJIAlARQAZALAZACQAPAEAOgDIADAUIAIAKQALALAPAEIATAAQASgCAMgOIAJgGQAHgEAHgDQANgEAJAKQAFAFABAGQAEAOAAAOIgBAWQgDASgOALQgFADgFABIgSAGIgNAEQgOAEgPAGQgSAIgOANIgEADIgGgOgACUhhQgfgBgfgEIgrgIIgagIQgPgEgPgDIgIACQgDgRACgRIAHgIQAPgTAHgaIAFgVQAHgmgGgkQgEgYgFgWQgFgZgDgbIAEAAIACAAIACgBIAAgBIABgBIAAgBIgBgDIgDgDIAAgBIgBgCIAWgGIAHAFIASAiIALAXQAEAMAEANQAGATAKASQALAQAOALQAQANAUAEQAGgOADgOQAEgVgHgXQgFgPgDgSIgBgHIAAgCQAAgJACgKQADgMAHgIQAJAFAJAFQAJAFADALIABACIADANQAFAVAJASIAXAyQANAeAKAfQAKAhADAkIgGAOQgHATgKAQIgFAAQgaAAgYADIghgCg");
	this.shape_3.setTransform(-49.9,-35.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009933").s().p("Ah6E0IAAgDQgmgIgogNQgMgEgEgJQgVgngFgyQgUi7gHjIQAbg4AogrQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQBPAuBvANQBUAKBAghQAYgMAagFQACBVAJBRQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAcCuApCiIAAAFQgKATgaAGIAAADIgFAAQg4AJhFgOQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQgahkgOhwQAAgiADgjQADgvgOgEQAABLABBJIACAAQAUBzAABYIAAAFIgFABQhQAphoAAIgKAAg");
	this.shape_4.setTransform(-134.4,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGAyIAAgCIAAgQIgBgFIgBgGIgBgEQAAgMAGgKIAEgFIAAgBIABgCQAEgFAGgCIAVACIADABIAAAAIACADIAEAKIABADIgBgBIABACIACAKIABAMQgCgDgEAAIgQgCQgHADgCAGIgCAMQgBAJAGAGQAFAFAGAAIgMAEIgIACIgMABQgDgHAAgIgAAnAVQgEgBgGABQgDgDgCgFIAAgGIABgLIAAgCIADgdIABgMIABgFQADgIAGgEQAHgBAGADIAFAEQAKALAEANQACADAAADIAAAaIgBgDQgCgEgEgBIgPgBIgFAEQgNAJAJAQIAEAEIgHgBg");
	this.shape_5.setTransform(-130.7,-122.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996600").s().p("AhYCSIAAgEIACAAQAAhagLhQQAMgLAIAPIADABQAKAwAAA+IAAAEQAMgLAJAPIAHAAIAAATQAKAfgZABIgEgfQgCAagHAUIAAACQgRgCgHgPgAhvCEIgDgFQgIgkgFgkQABAngIAiQgTg2gJhDIAAgDQAXgEAIAZIgDgeQAHgIAKgEQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAWALADAiQAEA3gKA0IgIABQgEAAgCgCgAg2AaIgBgCQgHgQgMgfIgBgFQgBgFgDgFQAFgCAEgEIAAgCQARgBAIgIIADgBIAAAFQAGAwgPAZIAAAFIgDgBgAglgzIAAgFIAAgFQAbgRAHAsIgDgWQgDgWANgGQAOADADArIABAFIAAgJQgNg6AogJIABAAQgCAfALAPIAAgHQgEgrAbgNQgFAmAHAaIAAAAIABABIACAAIAAgBIAAAAQgBguAQgeIADAAQAFAiAHAhQAAABAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQgFgtAOgcIABgCIABgDIADgBIAAAFIAAABQACAtgPAcIAAABIgFAIIgOAKIgHACIgEABQgjAJgdANQgeAPgZASIgEAAQgHgXADgjgACAhGQAKgiAFgnIAAgBIAAgFQAAgIAFgDIADgCIALABIAAAAIABABIAAAIIAAAJQgCARAAATQgBAtgQAAQgHAAgJgIg");
	this.shape_6.setTransform(-139.2,-129.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("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gCIABgDIAHgJQAEgFAFgDQAHgEAHgCQAKgEAIgHQAIAEAHAFQAJAIgBALIAYAMIANAGQAPAJAJAOQAOgIAPgGQAOgIAPgEQAZgJAYgFIARgBIgCAHIgHARQgEAKgJADIgQAGIgLgBIgPgGIgDAEIgBADIAAADIAHAEIALAEQATAGAOgNIAOgOQALgMACgRIADgNIABgCIATgHQALgEAMgBIABABIABADIANAFIAEAHIACACIABAHQABANgCAQIgCALIgFAXQgDANgGAKIgJAOIgRAZQgQAVgZANIgQAIIgVAIIgqANQgXAEgaABIgBgCgAHTwPIADADIAMAJIAFAAQAkABAdgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQA2ghAcg5IgDABIgQAVQgiAogxAaIgEAAQggABgYgGIgEgBQgjgbgQguIgBAFQgIARgJAQIgFAIQAFAPALgQIACgEQAXANAfAWgAocw1IgEgBQgsgbgagvIAAgDIgpAMIgBgDQgYgTgHgmIAAgFIAAgpIACgHQAPg1AqAdIABADQAWAeAigXQAIgFAJgIIABgDIgBgBIgCgCQgIgNgHgMIAAgTIgHAAQgJgdAGgfIAAgEQA7g0BUgbIAEgCIABgCIAOgKQAPAMAWAGIAEABQAPAdAIAjIABACIACAJIABAEIAAABIAAACIABAHIAAABIAAAAIADAPIACAYIAAAFIABABIAAABIgBABIAAABIAAABIAAABIACADIADABQAFAGAGADQAUAKAMATIABACIABACIAAAAIAAABQABAFACAFIACAIIADAHIAAADQADAOACAQIAAAFQACAtgOAyQgRA+hDAOIgFABQgZAEgXAAQhBAAgsgggAoRy8QAXAyAyAYIAEAAIAqAAIAAgCQA9gRANhAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgZAygzAXIgFAAIgqAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQgqgagagoIABAEgAnFzmQAAgDABgEQgHgEACgMIABgEIABgBIAGgHQAOgLASgFQALgDAKAAQAJgBAIABIAGACIABAHIAAACIgBAGIAHABIABgFIABgBIABgGIgBgEIABgDIgCgCIgCgCIAAAAIgBgBIAAAAIgEgCIgEgBIgSgBQgPABgPAFIgLAEQgJAEgIAFIgEAFIgEADQgGAFAAAIIABABQABANAIAIIADACIAAAAgAoS1CIAAAEIAAAJIAAAcQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIAEAKIAHgBIANgBIAHgCIAMgEIAIAAQAIgCACgIIADgEIABgJIgBgJIAAgDIgBgMIAAgBIAAgBIgBgEIgEgTIgEgBIgEgDIAAAAQgMgIgKAAQgWAAgIAogAmZ07IAGACIAFACQAIABAIgBQAFgCACgEIACgBIgBgDIABgCIAAgGQACgGgBgIIAAgCIAAgBIAAgCQAAgFgBgGIgBgDIAAgBQgBgFACgEIAAgFQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQgDgdgcgDIgDABQgbAhAFAoQABAMAEAMIACgBIAAgKQABAFAEADIAEgBIAGABgAE8ybIAAgFQAbgWAJgiIATgIIAegNQAVgJAQgRIAUgWIAIgIQADgDAGAAQAEAFgEAIIgCAHQAIgLAMgFIASgFQAHABAHACIAIAEQAGAGAAAIIgCATQgBAQgIAOIgJAMQgPgLgUgGQgSgEgUACIgcAEQgNALgFASIgKAgQgTANgWAEIghgDgAml10IgCAdIgBADIADggg");
	this.shape_7.setTransform(-85.7,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6FFFF").s().p("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");
	this.shape_8.setTransform(13.5,-33.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC33").s().p("EgjOAG9IAAttIAEAAQACAGACAAQAUAEAUgDQALgBALgEQAwgQAzABIDGADIDSAFIAxABQAAAAABAAQAAAAAAgBQABAAAAgBQABAAAAgBIABgDIAEAAQAFCBALCAQAVEGiPBZQAIBFBdgRIAFgBQA/ACA0AMIADABIABABIANAIIAbAMIAYAJIApAOIAKACIACACQAQALAVABQA/ACAlgXQAMgCALgEQAGAFAUgTIAEgBQAaAGATgZQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAugJAgAIIAFABQAMgCAJgGQAJgGAFgKIABgEQAUABALgJQAMgIACgRIgCAAQgbgZg+ACQhcAChKgUIgFAAQgjgJgagTIAAgEQgHhLAEhWQAHimANifQBnAGBmgEQAYAAAbgEQAogFAlAJQBrAcBxgSIABgDQgEAcgCAcIgCAbIgDAaIgGA3IgIBDIgFApIgFAoIgEAqQgCAegGAeQgEAZgOAWQgIANgMALQgKAKgNAJIAAAFIgaAVIgnAdIgaASQgXAPgWANIgZAOIgYAMIgBABIgUAJIgPAHIAFAFQAAAGADAEIAAADQAAAEADADIAAACIAAABQAQAaAbAHIAHAMIASAIQAPAJANALIADABQAbAGAcgRIABgEIAFgGIATgXIAVgYIAVgWIAVgXIAYgVQAVgFAVgGQASgGASgIIARgxIAUAHQASAGATAEQASAFATADQAfADAfgCQAbgBAaAIIAJAEIAIAFIAZARQAXATAeANIApAOQAVAHAWAEQASAFATAEQAPgBAPgDQAHAAAHgEIAMgJIALgJIAKgMQAIgMAHgOQAHgOAFgQIgFgLQgEgHgHgFQgEgFgGgBIgGgCIgFgDIgGgDIgWgBQgDgDgFAAIgKAAIgSgGIgDgBQgEABgEgDIgCAAIgJAAIgHgDIgMAAIAAAAIgBAAQhDgWhHgRIAAgCQg3gQgrgYIAAgBQgWgIAIglQAni0Aji4IABgFIACgIQEDAJEBATQCuAOC1gPIBAgEQDQgGDPgOQARgBATgGQAwgNAygEQCngMChgTQACAXgEATQgHACgFAHQgIAQAAAVQAAAjgfgRIgEAAQgYgHgSgLIgEAAIg9AAIAAADQgQAEgLAJIgLgBQgMAGgIAOQgIAOgBAMIgLAIQAHACAFACQACAIAGAHIgBAEQgMAeAUAMQgGAqAcAKQAMADAJAhIAEABQAbALAdAeIAAgDQAeAMAnAJQALAFgQgBQiugDhVBWQAEAgAVgaIADgBQADAnAjgIIAIgBQAbgFALAQQBVgOA1ABIAAAJQAbAMAmAPIAFABQBOgIBYABIAAgDQAugJAlgUIABgDQBmAABmAQQByASBZgiIAAgDQAjgDgogjIgEgBQhSggh2ABIAAgFQAkgKAOgfIABgFQApgrAngsIADgBQAFgjAWgRIABgEQgIgkAAgYIAAgFQgVgqgygMIgEAAIgEgBQgngFgggLIACgLIACgCQALgMABgQQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIABgEQACgGABgGIABgGQADACAEgBIABgBQACgGgCgFIA6gCQBMgEBMAIQAYACAXAIQAqAPApAHQAgAFAgABIAXAAIAAMiIAAATMgxMAAAQCvgEi9AEIgrAAIgjABgA23CPQgfgJghgJIgBgCIgJg6QAtj3AKkGQAdAgArgTQgDEEgMD6IgEABQgTAcgKAjIgFAAgArEBvIAAgkQAAgTACgSQADgTAEgTIAKgkIAKgkIAKgkIALgkIALgjIAMgjIANgiIACgBQABAlgGAlIgGAoIgGAnIgGAfIgCAHIgIAkIgJAjIgKAkIgLAiIgMAhIgBAFQABAJgIADQgFgKAAgMg");
	this.shape_9.setTransform(13.5,127.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6400").s().p("Ah/DeIgBgEQgKgjgCgmIAAgGIgBgbIAAAAIABgcQAAgFADgFIADgFIACABIABABIAAAEIABAEIACABQAHAIAFAJIADAGIABABQAPAeAFAhIABAFIARAKIAPAKIgyAGIgCgKIgEgPIgRg9IABAQIAAAQQABAlAFAlIACAHIgEgDgAilC7QgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAIgIgJIgHgMQgQgiAJgjQAKgkAagWQAJgIAKgEIAGgBIgEALQgCAPgMAMIgBABIAAADQgGA2AIA2IABAIIgSAFgAjbCfIgCgCIgFgCIgDgCIgFgEQgEgQgCgQQgCgRACgQQACgPAGgOIACgDQAFgLAHgKIAGgIIAMgNQALgKAMgGIAFABIgDAGQgGAGgHAEQgLAHgMAFQgJAQgEARQgDAPAAAQQABASACASIAFAQIABAFIADAIIACAIIgEAAIgCgBgAjPCRIgCAAIgBgDIgDgDIgDgEQAAgSgCgSQgCgPACgOQABgIACgIQAIgUAPgNQAVgSAeACQgIAKgLAMQgOAOgJAQIgOAXQgHAPADATIABASQABAJgGAFIgCgBgAhtBUQAKgQAHgRIATgpIAGAAQARARgMAXIgEAJQgIAQgPAJIgJAFIgEABQgEAAgDgGgAh0A6QAGgKABgKQABgJgDgHQgEgJgHgGIgKgHIgEgCIgBgCIgBgEIABgEIAEgDIADgBIACABIAEACIABgEIAAgLIgCgEIgCgEIAFgEIACgLIABgFIAAgMQAEgIAGgHQAIgMALgKQAKgJAMgIQAMgIAOgGQAUgKAWgDQA9gHA6APQAFABADAGQAEAHABAIQACAIgBAHQAAAFgCAFQgCAGgIABQAAgJgBgJIgBgFIgEgEIgCgCIgEAFQgEAFgCAHIgIAQQgGALgIAJQgTAWgZANQgOAIgPAHQgVAIgWgHQALgFALgHQAPgKAOgNQAOgMALgQQAMgQAIgSIAJgTIgLATQgKAQgNAPQgMAPgOALQgPAMgQAJIgSAJIAAAFIgSAFIgKADIgKAEIABAAIAggDQgQAEgQABIgGAAQgTAAgSgFIALAOQAGAJACALQACAJgDAJQgDAJgHAIIAAAAIgCADIgKAKIAHgQgAgyAoIALgcIAJgCIABAJQACANgFAKQgIANgNAGIgKAFIANgagAkGA8IABgUQAAgLgBgKQAPgMARgIIAVgKIAMgFIgKALQgOAQgMAWIgNAbIgBABgAh7ArIgDgDIgCgGIgCgKIgBAAIASgFIgDALIgCAIIgCAEIgBACIgCgBgAkWgHQAEgMAIgKIATgUIAcgFQAPABAOADQAQADAOAHQgKgOgSgGQgbgHgcAEQAggeAlATIATAKQAMAGAFALQAFALgFAIQgEAAgEgCQgIgFgGgFIAIANIAFAKQgIgEgJgBQgRgFgSgCQgSAAgQAFQgJAEgIAGQgHAEgFAIQgHAKgMAHQAAgMADgKgACWhOIATgNQAKgGAMgEIAFgBQAOgFAPgBQAJgBAHADQARAFARAJIAHAGIgEAEQgSgJgUgCQgXgDgXAFIgYAGIAAAAIgMADIAAAFgACZhpQAQgIAMgJIABgBIAHgEIABgBIAOgHQAKgDAJgCQATgBANANIABAAQAJAJAHALIACADIgCACIgEgDQgIgFgKgDIgDgBQgNAAgNADIAAAAIgSAGIgIACIAAAAIgFACIgEABIgPABQgJAAgJgFgACtiMIAAAAQADgGAGgGIACgCIABgBIACgCQANgKAPgDQAUgEASAAIABABIAHAKIAEADIgLAPIgIgGQgUADgSAFIgIACIgMAEIgCABIgKADIAAAFIgGAFQAAgJADgIgAChimIACgDQAIgLAIgKQAKgLANgIQALgIANgEIADgBQAFgDAGABQAHACAGAEQAGADAFAFIACADIAIAJIgCAHIgGARQgGgDgIgCQgJgDgKgBQgRACgPAJQgMAGgMAIIAAAAIgHAFIgCACIAAAAIgTASQADgSAJgPg");
	this.shape_10.setTransform(-49.1,-112.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("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BAbIAAAGQADAmAKAjIABAEIADADIgBgHQgGglgBglIAAgQIgBgQIARA9IAEAPIADAKQACASgFATIgCADIgCACIgDgBQgEgCgDgEQgPgXgGgcIgCgIQgHg2AFg2IAAgDIABgBQAMgMADgPIADgLIgFABQgLAEgJAIQgZAWgLAkQgJAjAQAiIAHAMIAJAJQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAIABAAIgBABIAAABIgHgBQgQgGgLgIIgUgNIgPgMIAFAEIAEACIAEACIACACIADABIADAAIgBgIIgDgIIgCgFIgEgQQgDgSAAgSQgBgQAEgPQADgRAJgQQANgFALgHQAHgEAFgGIAEgHIgGgBQgMAHgKAKIgMANIgGAIQgIAKgFALIgCADQgFAOgDAPQgCAQACARQACAQAEAQQgFgHgCgHQgIgQABgQQACgVgBgVIABgBIAOgbQALgWAPgRIAKgLIgNAFIgVAKQgRAJgOAMQABAKAAALIgBAUIAAABIgGgVIgBgCIgCAAIgBABIgHAKQgDAGgFADIgEACIgEgRIAHgFIADgFIACgFIgCgFIgCgIIgCgOQgEgQAJgOQAPgWARgQQAOgNAPgMQANAAAMABQAIABAJADQAIACAHAFIANAIIAKAJIAEADQAGACABgFIACgFQABgKgDgJQgDgPgBgQQgCgVAFgSIADATQAFAXABAXIAAAQIAFgCIAAgOQATgYAbgQQAOgIAPgGIAegOIACgCQAegBAfABQAbAAAaAIIAiALIAHgSQALgZAWgSQASgPAWgGIAKgCIAUgEIAQAHQAKAFACAKIABABQACAIgFAIIACgHIgHgJIgDgDQgFgFgGgDQgFgEgHgCQgGgBgGADIgDABQgNAEgLAIQgMAIgKALQgJAKgHALIgCADQgJAPgDASIATgSIAAAAIACgCIAHgFIAAAAQALgIAMgGQAQgJARgCQAKABAJADQAHACAGADQAHAEAGAFIgCADIgDADIgDABIgCgBIgEgBIgDgDIgIgKIgBgBQgSAAgTAEQgQADgMAKIgDACIAAABIgDACQgFAGgDAGIAAAAQgEAIABAJIAGgFIAAgFIAKgDIACgBIALgEIAIgCQASgFAUgDIAJAGIAGAEIABABQASAPgBAWIgFgCIgCgDQgHgLgJgJIgBAAQgNgNgSABQgKACgJA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ABAFIgDgBQgIgOgMAKQALBRAABbIgCAAIAAAEQAHAOARACIAAgCQAHgUACgZIAEAfQAZgBgKgfQAGAMAJAMIACADIABABIgBADQgJAIgIAFQgjAXgWgeIgBgDQgpgdgPA0IgCAIIAAApIAAAFQAGAmAYATIABADIAqgMgAs7yLQgPANgHAUQgCAIgBAIQgCAOACAPQACASAAASIACAEIADADIACADIACAAIABABQAGgFAAgJIgCgSQgDgTAIgPIANgXQAKgQANgOQAMgMAHgKIgEAAQgbAAgUAQgAonyNQgMADgKAEQgPAHgIANQAAATAGARQAFASASAMQAMAHAOACIAQABQgDgGgCgIQAAgDABgDIADgEQAGgEAIgDIALACQADAAAEAEIABAGIgBAIIgBADIAEAAQAHgEAEgIQALgUgDgXQgDgggcgRQgZAAgXAJgArDyWIgTApQgIARgJAQQADAIAIgDIAJgFQAPgJAHgQIAFgJQALgXgRgRgAmdyzQgSACgOAQQgIAJgHALIgFAOQAJAUAOAUQAFAFAFAEQAOAHAMgKIgDgIQgBgGACgGQACgEAEgDQAGgCAGAAIAJABIACADIACABIACAEIAAACIgCAIQAFgBADgIQAFgLACgMQADgKgDgLQgCgLgGgLIgIgMIgVgBIgOAAgAoWzaIgHAHIgUAWQgQARgVAKIgfANIgSAHQgKAjgbAVIAAAFIAiADQAWgEATgMIAKggQAFgSANgLIAcgFQATgBATAEQATAFAQALIAJgLQAIgOABgQIABgTQABgIgHgGIgHgFQgHgCgHAAIgTAFQgMAFgHALIACgIQAEgIgEgEIgBAAQgFAAgEADgAsAywIgDADIgBAEIABAEIABACIADACIAKAIQAHAGAEAJQADAHAAAJQgCAKgFAKIgIAQIAKgKIADgDIAAAAQAGgIAEgJQADgJgCgJQgDgLgFgJIgLgPQASAFATAAIAFAAQAQgBARgEIghADIAAAAIAJgEIAKgDIASgFIAAgFIASgJQARgJAPgMQAPgLAMgPQAMgPAKgQIAMgTIgJATQgIASgMAQQgLAQgOAMQgPANgQAKQgKAHgLAFQAWAHAWgIQAPgHANgIQAZgNAUgWQAHgJAHgLIAHgQQADgHADgFIAEgFIADACIADAEIABAFQABAJAAAJQAIgBACgGQADgFAAgFQAAgHgBgIQgCgIgEgHQgCgGgGgBQg6gPg8AHQgXADgVAKQgNAGgNAIQgLAIgKAJQgLAKgIAMQgGAHgEAIIAAAMIgBAFIgDALIgEAEIACAEIABAEIAAALIgBAEIgDgCIgDgBIgDABgAqhyUIgMAcIgMAaIAKgFQAMgGAIgNQAGgKgCgNIgCgJgAr+yIIABAAIADAKIACAGIACADIACABIABgCIADgEIACgIIACgLIgSAFgAtyzSIgTAUQgIAKgDAMQgDALAAAMQAMgHAHgLQAFgIAGgEQAJgGAJgEQAQgFASAAQASACARAFQAIABAJAEIgFgKIgJgNQAHAFAIAFQAEACADAAQAFgIgFgLQgEgLgMgGIgUgKQglgTgfAeQAbgEAcAHQASAGAJAOQgOgHgPgDQgPgDgPgBIgcAFgA1q3rQgFADAAAJIAAAFIAAAAQgFAogKAiQAgAZABg/QAAgTACgRIAAgJIAAgIIgBAAIAAgBIgLAAgAvRXgIABgBIABABIgCAAgAwRXcIgBgDIABgBIALgFIgDAEIgDAEIAAAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAIgCgBgAz7WgIgBgBIAFABIgBAAIAAAEIgDgEgAjaWBIgCgBIADgBIAEACIABAAIABACIAFAHIgMgJgAZdS4QAPgVAIgbQADgNACgNIAAgFQAug4AehIQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIhDCnIgBAAIgRAsQgHAQgFAAQgFAAgEgTgAaMSTQAegcAYg2QgLApgdAtIgBACQgIANgDAAQgFAAADgTgAb8QsQgcgagBgoQgDhNBEgfQBTAAAKBXQAIA9guAfQgXAPgVAAQgZAAgWgUgAW4MRIABgKQgkgxA3gXQAdgMAggCQASgBALgIQBvgQgWBmQgNBBhFASQgPAEgNAJQgPACgLAAQhJAAAKhPgEgjNAMSQgDgBgCgFIAGgEIAZgGQAogHAjgRIBGADIC7AGIDdAHQAWABAUAHIAAADQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgxAAIjSgFIjGgEQgzAAgvAQQgMADgLACIgRABQgLAAgLgCgAXxKkIACgBIAAABIgCABgAZaE6IAigIIAUgEIAFgBQgCAFgHAFIgBAAQgDACgCACIgCABQgJABgKADIgFACIgDADIgGABIgKACIABgOgAafEvIAAgEIgBgDQAZgLAOgZIACgBQAKgWADgQQAGgpguAJIgEABQAIAQgCALQgCATgcAIQgGACgBACQgJAbgGAEQgGAEgEgTQAHgLACgRIAAgFQATgXAUgWIAAAAIADgBIAAgFQAbgJAPAHQAQAIACAbIAAAFIgCAAIgBAEIgFAUIAAABQgMAlgfAQIAAAFIgDABIgCACIgCABIgEABIgCgDgAX/EoIgBgBQgFgHgDgJQgHgVAEgfQATgjAggTIAEgBIAAgFQAuAHAIAeQACAJgBANQgDAQgJAUQgFALgHAIIgGgDQANgtgLgzQgCgHgPACIgFACQAGAbgTAZIAAADQguAAAIArIAFATIgCAAgAoAu4IgFAAIgMgKIgDgCQgfgWgXgNIgCAEQgLAQgGgPIAGgJQAJgPAIgRIABgFQAQAuAjAbIAEABQAYAGAfgBIAFAAQAxgaAigpIAPgUIAEgBQgcA5g2AhQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAABQgZAEgdAAIgLAAgA2swnIgEAAQgygYgXgzIgBgDQAaAoAqAaQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABIAqAAIAEAAQA0gXAZgyQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQgNA/g9ASIAAACIgqAAgA2wyeQgIgHgCgNIAAgCQgBgIAHgFIADgDIAFgEQAHgGAKgDIALgFQAPgEAOgBIATABIAEAAIAEADIAAAAIABAAIAAABIACACIACACIgBADIABADIgBAHIgBABIgBAEIgHAAIABgHIAAgBIgBgIIgGgCQgJgBgIABQgLABgKADQgSAFgPALIgFAGIgBABIgBAFQgCAMAHAEQgCADABAEIgDgDgA34zNQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAIAAgcIAAgJIAAgFQAMg5AoAaIgCgBIgWgCQgGACgEAFQgDADgBAFQgHAKAAANIABAEIAAAKQAAAKACAJQAAAIADAHIgHABIgEgKgA3NzLQgGAAgFgFQgGgGACgKIACgLQACgGAGgDIAQACQAEAAACADIgBgMIgCgLIAAgCIABABIgBgDIgFgLIgCgCIAEACIAEABIAEAUIABAEIAAABIAAABIABAMIAAADIABAJIgBAJIgDADQgDAJgIABIgGABIgBAAgA12ztIgFgCIgEgEQgJgQANgLIAFgDIAPABQAEABACAEIABADIAAgaQAAgEgCgDQgEgMgJgLIgGgEQgGgDgGABQgHAEgDAHIgBAGIgBAMIgDAfIgBAMIAAAFIAAAKIgBABQgEgMgBgLQgFgoAbghIADgBQAcACADAdQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAAGQgCADABAFIAAACIABADQABAFAAAGIAAACIAAAAIAAACQABAIgCAHIAAAGIgBACIABADIgCABQgCAEgFABIgJABIgHgBg");
	this.shape_11.setTransform(14.3,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.THEY, new cjs.Rectangle(-213.4,-159.4,454,335), null);


(lib.textthey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_117 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(117).call(this.frame_117).wait(5));

	// diag
	this.instance = new lib.VertLine("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(64.5,182.9,1,0.7,-45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({y:194.9,alpha:1},6).wait(70));

	// vert1
	this.instance_1 = new lib.VertLine("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48.6,161.4,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).to({y:173.4,alpha:1},6).wait(70));

	// horz
	this.instance_2 = new lib.HorizontalLine("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,167.4,0.8,1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).to({y:179.4,alpha:1},6).wait(70));

	// period
	this.instance_3 = new lib.period();
	this.instance_3.parent = this;
	this.instance_3.setTransform(171.5,170.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({_off:true},26).wait(77));

	// friends
	this.instance_4 = new lib.pronountheysfriendsword();
	this.instance_4.parent = this;
	this.instance_4.setTransform(106.6,173.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true},26).wait(27).to({_off:false,scaleX:0.8,scaleY:0.8,x:70.6,y:153.4,alpha:0},0).to({y:162.4,alpha:1},7).to({_off:true},12).wait(6).to({_off:false,y:153.4,alpha:0},0).to({y:163.4,alpha:1},5).wait(20));

	// my
	this.instance_5 = new lib.pronountheysmyword();
	this.instance_5.parent = this;
	this.instance_5.setTransform(13.2,173.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({_off:true},26).wait(19).to({_off:false,scaleX:0.7,scaleY:0.7,rotation:45,x:82.2,y:181.4,alpha:0},0).to({x:85,y:192,alpha:1},8).to({_off:true},19).wait(6).to({_off:false,x:82.2,y:181.4,alpha:0},0).to({x:85,y:192,alpha:1},5).wait(20));

	// are
	this.instance_6 = new lib.pronountheysareword();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-46,173.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true},26).wait(14).to({_off:false,scaleX:0.8,scaleY:0.8,x:-18,y:153.4,alpha:0},0).to({y:161.4,alpha:1},5).to({_off:true},27).wait(6).to({_off:false,y:153.4,alpha:0},0).to({y:163.4,alpha:1},5).wait(20));

	// they
	this.instance_7 = new lib.theysentstill();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,181.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.46,scaleY:1.46,y:176.9},9).to({scaleX:1,scaleY:1,y:181.1},5).to({x:-131.1,y:181.4},5).to({_off:true},26).wait(8).to({_off:false,scaleX:0.8,scaleY:0.8,x:-90.1,y:158.4,alpha:0},0).to({y:168.4,alpha:1},6).to({_off:true},32).wait(6).to({_off:false,y:158.4,alpha:0},0).to({y:168.4,alpha:1},5).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,147.8,99,52.8);


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
		var bgm = createjs.Sound.play('bgmusic',{loop:-1});
		var vo = createjs.Sound.play('VO9');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.2;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		//volume functions -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume -0.1;
			if(!mute){
				bgm.volume -= 0.1;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.1;
			if(!mute){
				bgm.volume += 0.1;
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
		
		 window.open ("pronoun_Scene10.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pronoun_Scene8.html","_self");
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


// stage content:
(lib.pronoun_Scene9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance_2 = new lib.textthey();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,180.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.pronounheader();
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,43);

	this.instance_4 = new lib.THEY();
	this.instance_4.parent = this;
	this.instance_4.setTransform(263.7,190,0.804,0.804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// btn
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '64AAE200BA3EE34CA4A98DDBB3996831',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_12a.mp3", id:"_12a"},
		{src:"sounds/_12b.mp3", id:"_12b"},
		{src:"sounds/_13b.mp3", id:"_13b"},
		{src:"sounds/_13c.mp3", id:"_13c"},
		{src:"sounds/_16a.mp3", id:"_16a"},
		{src:"sounds/_18b.mp3", id:"_18b"},
		{src:"sounds/_19b.mp3", id:"_19b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7b.mp3", id:"_7b"},
		{src:"sounds/_9a.mp3", id:"_9a"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmusic_1.mp3", id:"bgmusic_1"},
		{src:"sounds/MenuPronoun.mp3", id:"MenuPronoun"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/VO9.mp3", id:"VO9"},
		{src:"sounds/hesheit.mp3", id:"hesheit"},
		{src:"sounds/himherit.mp3", id:"himherit"},
		{src:"sounds/i.mp3", id:"i"},
		{src:"sounds/me.mp3", id:"me"},
		{src:"sounds/nominative.mp3", id:"nominative"},
		{src:"sounds/objectis.mp3", id:"objectis"},
		{src:"sounds/objectivecase.mp3", id:"objectivecase"},
		{src:"sounds/objectsof.mp3", id:"objectsof"},
		{src:"sounds/replaces.mp3", id:"replaces"},
		{src:"sounds/subjectis.mp3", id:"subjectis"},
		{src:"sounds/subjectof.mp3", id:"subjectof"},
		{src:"sounds/substitutes.mp3", id:"substitutes"},
		{src:"sounds/them.mp3", id:"them"},
		{src:"sounds/they.mp3", id:"they"},
		{src:"sounds/us.mp3", id:"us"},
		{src:"sounds/we.mp3", id:"we"},
		{src:"sounds/you.mp3", id:"you"}
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
an.compositions['64AAE200BA3EE34CA4A98DDBB3996831'] = {
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