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


(lib.stacehahastill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDA2QgDgEAAgDQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQACAAADADQACADAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgDgAgEAZIAAgIIAAgIIAAgdIAAgeQAAgGAFAAQAGAAAAAGIAABLQAAAGgGAAQgFAAAAgGg");
	this.shape.setTransform(16.6,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACADIAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_1.setTransform(11.6,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqA2QgCgCAAgDIABgVIACgWIgBgKIAAgMIABgQIAAgQQAAgDACgCQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAACACQABACAAADIAAAQIgBAQIAAARIAdgFQARgDAMAAIABgeIACgKQACgIAEAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBADIgBAIIAAAGIABAHIgCAUIgBATIABAQIABAPQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgDAAgCgCQgBgCAAgDIgBgPIgBgQIAAgKQgLAAgRAEIgcAFIgCASIgBARQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_2.setTransform(2.7,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACADIAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_3.setTransform(-10.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgqA2QgCgCAAgDIABgVIACgWIgBgKIAAgMIABgQIAAgQQAAgDACgCQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAACACQABACAAADIAAAQIgBAQIAAARIAdgFQARgDAMAAIABgeIACgKQACgIAEAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBADIgBAIIAAAGIABAHIgCAUIgBATIABAQIABAPQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgDAAgCgCQgBgCAAgDIgBgPIgBgQIAAgKQgLAAgRAEIgcAFIgCASIgBARQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_4.setTransform(-19.4,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AFmgnQAIATAAAUQAAACAAADQgBAIgCAJQgEAYgRAXQgaAlg6AeQgsAXg0AOQgCAAgDABQhAAQhMACQgJAAgIAAQhYAAhJgTQgGgCgGgCQgPgEgNgFQgegKgbgOQgYgNgTgOQg0gngKgxQgCgKAAgLQAAhOBrg5QBsg4CWAAQALAAAKAAQALABALAAQB8AHBbAwQAWALARAMQAEADADAD");
	this.shape_5.setTransform(-4.6,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6FFFF").s().p("AgRADIAjgMQgMAJgJAKQgGgFgIgCg");
	this.shape_6.setTransform(34.7,-15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AisCtIgNgEIgcgJQgdgKgbgOQgYgNgTgOQg1gngJgxQgCgKAAgLQAAhPBrg4QBrg4CXAAIAVAAIAVABQB8AHBcAwQAVALASAMIAHAGIgHgGIAAgCQAogHAmgMQAIADAFAFQgPARgKAVIAAADIAAAEQgHAJgBAKQgBAJACAJIABAEIABAAQAHATAAAUIAAAEIgCARQgFAZgQAXQgbAlg5AeQgtAXg0AOIgEABQhBAQhMACIgQAAQhYAAhJgTg");
	this.shape_7.setTransform(-3.5,-1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiDDAIAFgIIAFgCIgCAMIAAACIgIgEgAAghIIgBAAIgBgEQgCgIABgKQABgKAHgJIAAgDIAAgDQAKgWAPgRQAKgLAMgKIgjANQgmANgnAGQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIAWgJQAygVA1gPIAJAEIAIgEQAKACAKADIgBACQgJAGgMAEIgNAEIgaAWIgCADIgIAGQgDAQgIANIgLATIAAAGQABAJgCAHIgCACIgEgBg");
	this.shape_8.setTransform(28,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stacehahastill, new cjs.Rectangle(-42.2,-22.1,83.4,43.2), null);


(lib.slimotherclappingarmstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AhWE4IgEgCIAAAAQgJgFgHgGIgBgBQgJgIgGgNIgGgOQgLglgOgiIgEAHIgFgQIgCgCIAAgBIAAAAIgCgCQgBgIgEgHQgHgKgCgLIgBgCIgFgIIgBgCIAAgCIAAgBIgBgCIgCgDIAAAAIgCgCIAAgCIAAgCQgHgGgCgJIgCgGIgCgSIgCgBIABgDQAAgLgDgHQAPgRARgJQACAKAHAIIAEgCIABABIAAAAQADAGABAGQAEAIAFAHIAAACQgBADACACIAIALIAAAAIAAACIABACIABABIAAACIAAACIABACIADADIAAADIAAAEIACACIAIAQIAFAJIAEAHQAPAWASATIAFACIAAAAIABACQAXgGAKgVQAEgHACgJQACgGAEgIQArhLAjhSIABgEQALgbAFghQgagoATguIAAgCQAGgFAGgCIADgBQgBgJAFgDIAAgCQAWgRAYgEIAEAEQADAGAAAJIAAACQgdAcgUAnIgBAAQgCARAEALIAAgBQAOgKgGgMIgBgCQAageAWghIAAgCQAFgCAEgEIACgCQAFgFADgHIABgCQgFgNANgSQAPgWANgYQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABgBIADgBQAKAGgEAUIgBAAQgRAPgMAVIAAACQANAAgNAPIgUAXIAAAAIgBACIgDADQgNAPAKAOIAHgRIABgCIAHgIIAug/IACAAQgDAwgbAXIgEAEQgFAGgDAHQgCAEgEABQgIAnABAaIAAACQgGAbgWAVIABAAQggAYgKAbIgBABQgLAkgRAeQgRAfgUAcQgKAZgLAYQgYAugdArIgCABQgGATgSATIgCAAIgEgBgAh0B2IABAAIABAAIAEAHIgCAAIgEgHgAB6jxIgBgCQAQgjAZgbIAFgFQAUAEgOAUIgCAAQgHAlgXAfIgBACQgIgOgKgLgABOjhIAAgBQAKg3AkgeQACgCAFABQALAMgJAWIAAACQgQAQgFAbIgBACQgPAHgLAAIgHgBg");
	this.shape.setTransform(0.5,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhhFHQgIgDgGgFQgKgFgHgMIgRgeQgHgOgEgPIgBgCIgCgCIAAgBIAAgCQgGgJgEgJQgDgHAAgIIgBgBIgCgCIAAgCIAAgBIgBgCQgCgFgDgEQAAgEgCgEQgEgGgCgIQgKgRgHgTQgDgHgGgFIgBgCIgBgDIgBgCIAAgDQAGgNACgPIABABIADASIABAGQACAJAHAGIABACIAAACIABACIAAAAIADADIAAACIAAABIAAACIACACIAEAIIABACQADALAGAKQAFAHAAAIIACACIAAAAIABABIACACIAEAQIAEgHQAPAiALAlIAFAOQAGANAKAIIAAABQAHAGAJAFIABAAIAEACIAEABIABAAQASgTAHgTIABgBQAegrAXguQALgYALgZQAUgcARgfQARgeAKgkIACgBQAJgbAhgYIgCAAQAWgVAGgbIAAgCQgBgaAIgnQAEgBACgEQADgHAGgGIAEgEQAagXADgwIAAgBIgBABIgvA/IgHAIIAAACIgHARQgKgOAMgPIADgDIACgCIAAAAIAUgXQANgPgOAAIABgCQALgVARgPIABAAQAFgUgLgGIgCABQgBABgBAAQgBAAAAAAQgBABAAAAQAAAAAAABQgNAYgQAWQgMASAEANIAAACQgDAHgFAFIgCACQgEADgFADIgBACQgWAhgZAeIAAACQAGAMgNAKIAAABQgFgLACgRIACAAQAUgnAdgcIAAgCQAAgJgDgGIgCgFIgCABQgZAEgVARIgBACQgFADABAJIgCABQgHACgFAFIgBACQgSAuAaAoQgFAhgLAbIgCAEQgiBSgrBLQgFAIgBAGQgCAJgEAHQgLAUgXAHIAAgCIAAAAIgFgCQgTgTgPgWIgEgHIgEgJIgJgQIgBgCIAAgEIgBgDIgCgDIgCgCIAAgCIAAgCIgBgBIgBgCIAAgCIAAAAIgHgLQgCgCAAgDIABgCQgGgHgEgIQgBgGgDgGIAAAAIgBgBIAAgBIAAAAIAAAAIgBgCIgIgLIAAgBIAAgCIgBAAIAGgDIABABIABADIABACIACACIABABQABAEAEADIAAACQABAHAFAFIABACQABAIAGAHIAAADIABACIACACIADAFIADACIABABIABACQADAHAEAHIACABIAAABIACAEIABADIAFAGIAEAHIACAFIACACIACACIAQAbIAAACIAFAIQAEACADgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIABACIACgBQAggnAOguIACgBQAyhHAahYIAAgCQgIgWgLgTIAAgDQAAgaAHgUQAHgVAPgOIAUhPQAJgoAmgLIABACQASAQAbgNIABAAQALATATgCIABAAQAFALACALQABAKgCALIABACQAKAJgEAWIgBABQgYAwgeArQgBAdgFAaQgCAIgDAJIgGAOQgKAVgQAPQgaAagRAlQhECThVCCIAAABQgFACgIAAIgIgBgACekvQgYAbgRAjIABACQALALAIAOIAAgCQAYgfAHglIABAAQAOgUgUgEIgFAFgAB4k1QgjAegLA3IABABQAMAEAVgKIAAgCQAFgbAQgQIABgCQAJgWgMgMIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAg");
	this.shape_1.setTransform(0.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slimotherclappingarmstill, new cjs.Rectangle(-21,-32.8,43.8,65.6), null);


(lib.slimclappingarmstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AiRDiQgSgCgGgNQgDgGACgGIABgDQgRgnACg0QABgogCgiQgGhOAJhGIACAAIgBgEQgEgTAHgSQAFgOAIgMIAJgLIADgBIAEgCIABgBQAcgDAHARQAEAIgBAMQgBANgFAMQgCAFgEAFIgDAEIAAAJIACAAQgEA0AAA4QABBBAEBAQAAALAIAPQAogRAegdQASgRAOgUQAYgmAUgpIAQggQADgFgBgGQgZgWgQgfIgGgMQgHgSgFgUQgDgLAGgLQALAcASAaIAEAFIARAWIACAAIADgMQACgLAAgMIAAgCIAAgMIgDgSIAAgCQAGgZABgaIABAAQALAbgGAnQgBAJABAIQACAKAHAIQAGgCAEgGQAFgJABgTQACgsAZgXQAEAHgHATQgOAjgEAmIAAABIAAABIAAACIAAAAIgBAKIAAAFIAHgLIAAAAIACgDIAAgBIABgBQAfgvAigqIACAAQgLAigXAgIgCAAQgCAOgHAQIgCADIgBACIgCAGQgEAIAEAGQAJADAHgFQACgEADgCIAAgBIABAAIAFgCIACgCQAHgJAJgGIAAAAQAKgOALAKIABABQACACABADIAAACIAAAFQgCAHgIADIgCACIgRAPQgLATgNARIgBACQgXADgLAQIgCAAIgXAkIAAABIgjA4IAAACQgBAOgMAKIgJAJQgPARgRANQgIAQgQARQggAigsAUQgPAHgMAAIgEAAgABUAVQANgfAdgRQgXAVgSAcIgBgBg");
	this.shape.setTransform(0.8,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiJDwQgUgEgQgHIAAgCQgPglgHgoQACgmgEgnIgBgHIgBgRQgBg2ADgiQACgTAEgTQAFggACgsIABgjIABgCQACgDAEgCQADgBAFABQAEAEACAFIABABQgIAMgFAOQgHASADATIAAAEQgJBGAFBOQADAigCAoQgBA0AQAnIAAADQgDAGADAGQAGANASACQAOABASgIQAsgUAggiQAQgRAHgQQARgNAPgRIAKgJQALgKABgOIAAgCIAjg4IABgBIAXgkIABAAQALgQAYgDIAAgCQANgRALgTIARgPIADgCQAHgDACgHIABgEIgBgDQAAgDgDgCIAAgBQgLgKgKAOIAAAAQgKAGgHAJIgCACIgFACIAAAAIAAABQgEACgCAEQgHAFgJgDQgEgGAEgIIADgGIABgCIABgDQAHgQADgOIABAAQAXggALgiIABgBIgBAAIgBABQgjAqgeAvIgBABIgBABIgCADIAAAAIgGALIAAgFIAAgKIAAAAIABgCIAAgBIAAgBQADgmAOgjQAIgTgFgHQgZAXgCAsQAAATgGAJQgEAHgGABQgGgHgCgLQgCgIACgJQAFgngLgbIAAgCIAAACIAAAAQgBAagGAZIAAACIACATIABALIAAACQAAAMgDAMIgDALIgCAAIgRgVIgDgGQgTgagLgcQgGALADALQAFAUAHASIAGAMQARAfAZAWQAAAGgCAFIgQAhQgVAogYAmQgOAUgSARQgdAdgpARQgHgPgBgLQgEhAAAhBQAAg4AEg0IABgNQADgFADgFQAFgMABgNQAAgMgDgIQAEgIAGgDIADgBIACAMQAFAlgFAnQgHAzAEAjQgKAggDAmQgBAXAFAQIAAArQA7gdAhg2QAMgTANgQQALgNAJgRQAIgRAFgVQgYgUgPgdIAAgBIgGgPQgTgvAKglIACABQAVAfATAjIAEAHIAIAPIACAAIAAgSIAAgFIAAgHQAAgagCgVIgBAAIgCgDQAGgIABgKIAAgNQAGgKAKABQAQASgHAhIAAAAQgFAZAIAbQAEgUABgLIADgUQAIgsAigKIAAACQACATgCARIgBABQgNAdgDAcIAAABIABgBQAVgmAYglIACAAQAHgGAMgGQADAFgBAEQgOBCghAxIAAABIABAAIABAAIAzgmIACAAQAPALgBAbIAAACQgKANgSAEIgBADQgDAMgIAHIgBACIgCAJIgFAIQgMAIgLAKQgdARgMAfIAAABIgHANIgBgCIgBABQhIBshbBYIgDAAQgPADgLAHIAAgCQgJABgPADgAgEhnIAEgBIgBACIgBACg");
	this.shape_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slimclappingarmstill, new cjs.Rectangle(-19.5,-24.1,40.1,48.3), null);


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


(lib.interjectionwhoabubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFBMQgEgFAAgEQAAgDADgDQADgCADAAQACAAAEAFQAFAFAAAEQAAADgDADQgDADgDAAQgDgBgEgFgAgGAkIAAgNIAAgLIAAgqIAAgqQAAgJAIABQAJgBAAAJIAABsQAAAIgJABQgIgBAAgIg");
	this.shape.setTransform(32.6,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgZAFIgQAmQgDAFgFAAQgFAAgCgDQgDgDgBgEQAAgFAPgfQgCgCABgDQAAgIAJgDQALgTARgcQAWglAGAAQAHAAADALIAGAhIAPBDIAFAPIAEALQAAAEgEADQgDADgDAAQgJAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_1.setTransform(23,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxA9QgUgSAAgcQAAggAUgcQAWgfAhAAQAgAAAQAOQAQAPAAAhQAAAhgSAbQgWAfggAAQgbAAgUgQgAgiggQgPAWAAAZQAAATAOAMQANALAUAAQAXAAAPgYQAOgVAAgaQAAgYgKgJQgKgJgYAAQgXAAgRAYg");
	this.shape_2.setTransform(7.9,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag8BOQgDgEAAgDIACggIACgeIgBgQIAAgQIABgXIABgXQgBgFADgCQADgDAEAAQAEAAADADQACACAAAFIgBAYIgBAWIABAYIApgHQAYgEASAAIABgqQAAgIADgIQACgKAHAAQADAAADACQADAEAAADIgBAFQgCADAAAJIABAIIAAAJIgCAdIgCAcIACAXIABAVQAAAFgDACQgCADgFAAQgEAAgCgDQgDgCAAgFIgBgVIgBgXIAAgOQgQAAgYAEIgpAIIgBAaIgDAZQAAADgCAEQgDACgEAAQgEAAgCgCg");
	this.shape_3.setTransform(-7.6,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWBNQgEgDAAgFQgEgLgCgIIgHgqIgGgpQgJAggKAVQgLAagDAPIABAEQgBAFgDADQgEACgEAAQgOAAAAgMIgCgMIgLgwQgGgXgQgtIgBgEQAAgJALAAQAGAAADAHIAHAUQAGASAGAYIAJArQALgZALghIAJgeQAJgVAIAAQAGAAADAHQAEAIADAgIAGAlIAJAmQANgfAUg1IAEgSQAEgLADgHQAEgFAGAAQAJAAAAAKIgDAJIgDALIgGARIgcBGIgPAiQgDAGgHAAQgFAAgDgCg");
	this.shape_4.setTransform(-25.4,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AhyjOQA2gIA8AAQCsAAB6A/QB5A/AABYQAABZh5A/Qh6A/isAAQirAAh6g/Qh5g/AAhZQAAhYB5g/QAEgCADgB");
	this.shape_5.setTransform(0,5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkkDIQh6hAAAhYQAAhYB6g/IAGgEIAAABIABAEIAGADIACAAIABgBIABAAIABgCIABgDIAAgIIACgCIABgDIAAgCIAAgBIAAgCIACgDIADgEIABgDIAZgzIABgCIADgFIAAgCIAAgBIADgFQAIgjAWgcIABAFIABAGIACACIADAEIABACQABAHAGAFIAAACIABACIABACIABACIAAACIAAACQAMAWAVANQAOAQARAMIACAAIABAAIABgBIACgBIAAgBQA2gHA8AAQCsgBB5BAQB6A/AABYQAABYh6BAQh5A+isABQirgBh5g+g");
	this.shape_6.setTransform(0,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhUBXIgBgEIAAgIIAAgEIABgCIACgCQgBgHADgFIADgEQgBgEACgDIABgDIACgDIABgBIAAgCIAAgDIACgBIADgDIABgCIAAgCIALgOIAAgCIAAgCIABgCIABgCIAAgCIAAgBIACgCIACgCIADgGIABgCIAAgCIAAgCIACgCIACgCQADgIABgIIAAgEQADgDABgDIABgCIABgCIAAgCIAAgDQADgCABgEIABgEQAIgNAOgJIABAAIADgBIAAAAQAEgBADAEIABACIAAACIAAACQAFAMAHAKIABACIABADIAAACIAAACQAaAqAnAeIgBAEIgBAEIAAAAIgBABIgCABIAAAAIgCABQgRgNgPgQQgUgLgMgXIAAgCIAAgCIgBgCIgCgCIAAgCIgBgCQgFgFgCgHIAAgCIgDgEIgCgCIAAgGIgBgEQgWAbgJAjIgCAFIAAACIAAACIgDADIgCACIgYAzIgBADIgDAFIgCACIAAACIAAACIAAACIgBACIgCACIAAAIIgBAEIgBABIgCABIgBAAIgBAAIgGgDg");
	this.shape_7.setTransform(-20.1,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.interjectionwhoabubble, new cjs.Rectangle(-42.5,-27.1,85,55.3), null);


(lib.hrrumpstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEA9QgDgDAAgEQAAgCACgDQACgCADAAQACAAADAFQADADAAADQAAADgCACQgCACgDAAQgCAAgDgEgAgFAdIAAgKIAAgJIAAghIAAgiQAAgHAGAAQAHAAAAAHIAABWQAAAHgHAAQgGAAAAgHg");
	this.shape.setTransform(30.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_1.setTransform(24.7,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAwA7QgCgEgCgJIgDgNIgKg2IgQAuIgFAPQgCAJgEAFQgDAGgEAAQgEAAgDgFIgEgIIgCgJQgIgbgFgfIgEAOIgKAoQAAAIgDAOQgDAGgFAAQgEAAgDgDQgBgCAAgEQAAgNAFgTIAIgeIAGgZQACgRAFgFQACgFAGAAQAFAAACAGQADAHADAVQAFAaAJAdQAKgdAJghIABgLQACgHADgEQADgGAEAAQAIAAADANIADASQAFAjAGAZIAFANIACANQAAAEgCACQgDACgDAAQgFAAgCgEg");
	this.shape_2.setTransform(13.5,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiAuQgJgLgDgWQgBgKAAgcIAAgSIACgKQACgGAFAAQAHAAAAANIAAAuQAAAvAgAAQAfAAAAhPIAAgIIAAgGQAAgFACgDQACgFAEAAQAIAAAAALIAAAJIAAAKQAABZgvAAQgXAAgMgOg");
	this.shape_3.setTransform(0.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnA7QgCgCAAgEIAAgSIgBgSIABgVIACgVIgBgMIAAgMQgBgEADgDQADgFAFABIATABQAKACAHADQAgARAAAYQAAAMgMAJQgIAHgNAEQAYANAMAOQACADAAACQAAAEgCACQgDADgDAAQgCAAgDgDQgagZgfgJIABAPIABAPQgBAEgCACQgCACgDAAQgEAAgCgCgAgYgiIABAJIgBAQIgCAOIAEAAIACABQAUAAAKgGQAEgBADgEQAFgEAAgEQAAgKgMgKQgLgIgMgCIgMgBg");
	this.shape_4.setTransform(-10.3,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnA7QgCgCAAgEIgBgSIgBgSIACgVIACgVIgBgMIgBgMQABgEACgDQADgFAFABIATABQAKACAHADQAfARAAAYQABAMgLAJQgJAHgNAEQAZANALAOQADADAAACQAAAEgDACQgCADgDAAQgDAAgDgDQgagZgegJIAAAPIABAPQAAAEgCACQgDACgEAAQgCAAgDgCgAgYgiIAAAJIgBAQIgBAOIADAAIAEABQATAAAKgGQAEgBAEgEQAEgEAAgEQAAgKgMgKQgLgIgNgCIgLgBg");
	this.shape_5.setTransform(-20.4,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwA+QgCgDAAgCIABgaIABgYIAAgMIAAgNIABgSIAAgTQAAgDACgCQADgDADAAQADAAACADQACACAAADIAAATIgBASIAAATIAhgGQAUgDANAAIABgiQAAgGACgGQADgJAFABQADAAACACQACACAAADIAAAEQgCADAAAGIAAAHIABAHIgCAXIgBAXIABASIABARQAAADgCACQgDADgDAAQgDAAgCgDQgCgCAAgDIgBgRIgBgSIAAgMQgNAAgTAEIghAHIgBAUIgBAUQAAACgCADQgDACgDAAQgDAAgCgCg");
	this.shape_6.setTransform(-31.6,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AGzAqQgYA7hhAuQiAA9i3AAQi1AAiBg9QiBg9AAhWQAAhVCBg9QCBg9C1AAQCAAABlAeQAFABAEACQALADAKAEQAFABAFACQAWAIAUAKQANAGALAGQABAAAAAAQA6AgAaAmAG1AlQgBACAAAB");
	this.shape_7.setTransform(-5.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CC00").s().p("AAAAAIADABIgFAAIACgBg");
	this.shape_8.setTransform(38,3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABFBxIgJgBIgRgBIgCgBIgBgBIACAAIACAAIAFAAIAdgCIABgBIABAAQALgDAKgEIAPgLQANgSAIgVIAAgBIAAgCIAEgGIACgQIABgDIABgCIABgBIAAgCIAAgCIABgBIABgCIAAgGIAAgCIABgBIABgCQABgPADgPIAAAAIAAgCIAAgBIgBgCIgBgCIgEAAIgNAMIgaAPQgdAMgeAFIgUAAIgIAAIgBgCIAKgBIACAAIAjgEIAFgDQAJgEALgDQAFgFAIAAIANgJIABgBIAEAAIABgCIABgBIAVgPIABAAIADgBIABgBIADAAQACACABADIABABIAAACIAAADIACACIABARIgBAFIgBABIAAAAIgDAAIAAgBIgBALIAAACIgBABIgCACQAAAGgCAHIAAABIgBACIgBABQgCAIAAAHIAAADQgHANgEAOIgEAHQgKAQgOALQgMAIgOACIgBABIgBAAIgLAAgAg0hAIgBgBIgBgEIAHADQgCACgDAAIAAAAgAiBhiIACgDIAKADIAAAAIgDADIgJgDgAifhsIgCgFIADABIAIADIAAAEIgJgDg");
	this.shape_9.setTransform(33.4,-6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AlqCTQiBg9AAhWQAAhVCBg9QCBg9C2AAQB/AABlAeIAJADIAVAHIAKADQAWAIAUAKIAYAMIABABQA6AfAaAmIgKABIABACIAIAAIAUAAQAegFAdgNIAagPIANgMIAEAAIABACIABACIAAABIAAACIABAAQgEAPgBAQIgBACIgBABIAAACIAAAGIgBACIgBABIAAACIAAACIgBABIgBACIgBADIgCAQIgEAGIAAACIAAABQgIAUgNASIgPALQgKAEgLADIgBAAIgBABIgdACIgEgDIgBADIgCAAIgCAAIABABIACABQgYA7hhAuQiAA8i2ABQi2gBiBg8g");
	this.shape_10.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hrrumpstill, new cjs.Rectangle(-50.5,-21.7,100.1,43.5), null);


(lib.heeheehawbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAyQgDgDAAgDQAAAAAAgBQAAAAABgBQAAgBAAAAQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAQABAAAAAAQACgBACAEQADADAAADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgCgDgAgEAXIAAgIIAAgHIAAgbIAAgbQAAgGAFAAQAGAAAAAGIAABFQAAAGgGAAQgFAAAAgGg");
	this.shape.setTransform(46.2,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOAyQgDgCAAgDQgCgIgBgEIgFgbIgEgbQgFAVgGAOQgIARgCAJIABACQAAADgDADIgFABQgJAAAAgHIgBgJIgHgfIgPgsIAAgDQAAgFAGAAQAEgBADAFIAEAOIAIAbIAGAbQAHgQAGgWIAHgTQAFgOAFABQAFgBACAFQACAFACAVQABAKAEAOIAEAZIAWg2IADgNIAFgLQACgDADAAQAHgBAAAHIgCAGIgCAHIgEALIgTAtIgJAXQgCAEgFAAQgDgBgCgBg");
	this.shape_1.setTransform(38.4,-5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAhIgEgUIgRADIgQAEIgLAYQgCADgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgBIASgfQAOgYAEAAQAFAAACAHIAEAWIAJAqIAEALIACAGQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgGAAgEgPgAgHAEIAWgEIgFgYg");
	this.shape_2.setTransform(26.5,-5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnAyQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIACgUIABgTIgBgKIAAgLIABgPIAAgPQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBAQIgBAOIABAPIAagDQAQgEALAAIABgbIACgKQACgHAEAAIAEACQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAIgBADIgBAIIAAAGIAAAFIgBATIgBASIABAOIABAPQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgPIgBgOIAAgJQgKAAgQADIgaAFIgBAQIgBAQQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(16.9,-5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHAOQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIADgJIAFgLQABgEADAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABAAAAABIgJAVQgBADgDABQAAAAgBgBQAAAAgBAAQgBAAAAgBQgBAAAAAAg");
	this.shape_4.setTransform(6.5,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbAxQgGgGAAgUIAAgJIAAgKIAAgEIABgCIACgcIgCgGIAAgHQAAgIAGAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIAOgDIAMgBQAQAAAIAEQAFABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgNADIAAAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAFgFABIgPABIgdADIAAAIIAAAIQAAAOACACQABACAIAAIALAAIANAAIADgBIADAAQAIAAgBAGQABAGgGABQgGABgTAAQgTAAgGgFg");
	this.shape_5.setTransform(0.5,-5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAxQgGgGAAgUIAAgJIAAgKIAAgEIABgCIACgcIgCgGIAAgHQAAgIAGAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIAOgDIAMgBQAQAAAIAEQAFABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgNADIAAAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAFgFABIgQABIgcADIAAAIIAAAIQAAAOACACQABACAIAAIALAAIANAAIADgBIADAAQAIAAgBAGQABAGgGABQgGABgTAAQgTAAgGgFg");
	this.shape_6.setTransform(-7.6,-5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnAyQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIACgUIABgTIgBgKIAAgLIABgPIAAgPQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABIgBAQIgBAOIABAPIAagDQAQgEALAAIABgbIACgKQACgHAEAAIAEACQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAIgBADIgBAIIAAAGIAAAFIgBATIgBASIABAOIABAPQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAgPIgBgOIAAgJQgKAAgQADIgaAFIgBAQIgBAQQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_7.setTransform(-16.8,-5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIABgcIgBgGIAAgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAPgDIALgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAFgHABIgOABIgdADIAAAIIgBAIQAAAOACACQACACAJAAIALAAIALAAIAEgBIADAAQAIAAAAAGQgBAGgFABQgGABgTAAQgUAAgFgFg");
	this.shape_8.setTransform(-29.6,-5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIABgcIgBgGIAAgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAPgDIALgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAFgHABIgOABIgdADIAAAIIgBAIQAAAOACACQACACAJAAIALAAIALAAIAEgBIADAAQAIAAAAAGQgBAGgFABQgGABgTAAQgUAAgFgFg");
	this.shape_9.setTransform(-37.7,-5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnAyQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIACgUIABgTIgBgKIAAgLIABgPIAAgPQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBAQIgBAOIABAPIAagDQAQgEALAAIABgbIACgKQACgHAEAAIAEACQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAIgBADIgBAIIAAAGIAAAFIgBATIgBASIABAOIABAPQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgPIgBgOIAAgJQgKAAgQADIgaAFIgBAQIgBAQQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_10.setTransform(-46.9,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("ABwCHQCvgHCFgfQCugoAAg5QAAg4iugpQitgoj3AAQj2AAiuAoQiuApAAA4QAAA5CuAoQCuApD2AAQAMAAANgB");
	this.shape_11.setTransform(0,-5.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C6FFFF").s().p("AgPAGIANgMQAGAGAMACQgNAFgKAAIgIgBg");
	this.shape_12.setTransform(0.4,17.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhPA7IABgGIABgDQAVgLARgQIAOgOQAEgKABgLIABgGIACgDIACgEQgBgKAEgJIACgDIAAgDIACgCIADgDIABgBIADABIABAAIADADQgFAPgCARIgBADIgBADIgDADQABAKgEAJIgCAGIgSATIgNAMQAPADARgHQAJgDAIgGIACAAQAlgXAYgkIADgfIACgDIAEACIABAAIAAACQADAOgBAOIAAABIAAADIAAABQgFAHgDAIIgCADIgCACIgFADQgNAQgRAMIgGAJQgIAKgOAFIgDgBIgBABQgbALgbAAQgMAAgNgDg");
	this.shape_13.setTransform(3.4,13.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AABCwIARgTIADgGQAEgJgBgKIACgEIACgDIAAgDQADgQAFgQIgCgCIgCgBIgDgBIgBABIgDADIgZABQj2AAitgpQiugogBg4QABg5CugoQCtgoD2AAQD2AACuAoQCuAoAAA5QAAA4iuAoQiFAfivAHIgBgCIAAgDIgBAAIgFgBIgBACIgDAgQgZAkgkAYIgDgBQgJAGgJADQgLgBgHgHg");
	this.shape_14.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.heeheehawbubblestill, new cjs.Rectangle(-60.4,-20.4,120.9,39.9), null);


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


(lib.stacehaha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer 1
	this.instance = new lib.stacehahastill();
	this.instance.parent = this;
	this.instance.setTransform(66.4,16.9,0.076,0.076);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.3,15.3,6.3,3.3);


(lib.slimotherclappingarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.slimotherclappingarmstill();
	this.instance.parent = this;
	this.instance.setTransform(-17.8,6.9,1,1,0,0,0,-17.8,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({rotation:8.8,x:-25.3,y:11.9},5).to({rotation:0,x:-17.8,y:6.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-32.8,43.8,65.6);


(lib.slimclappingarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.slimclappingarmstill();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-18.9,1,1,0,0,0,-13.5,-18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1,scaleY:1,rotation:-14.3,x:0.1,y:-22.6},5).to({scaleX:1,scaleY:1,rotation:0,x:-13.5,y:-18.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-24.1,40.1,48.3);


(lib.interjectionwhoabubbletop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		/* _root.v1.start();*/
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(3).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.interjectionwhoabubble();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.162,0.162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:1,scaleY:1,x:-7},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-4.4,13.6,8.9);


(lib.hrrump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* _root.v3.start();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.hrrumpstill();
	this.instance.parent = this;
	this.instance.setTransform(71.3,22.6,0.039,0.039);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:1.09,scaleY:1.09,x:-2.7,y:-0.1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.4,21.8,3.9,1.6);


(lib.heeheehawbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		/* _root.v2.start();*/
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(5).call(this.frame_12).wait(1));

	// Layer 1
	this.instance = new lib.heeheehawbubblestill();
	this.instance.parent = this;
	this.instance.setTransform(-64.1,33.9,0.041,0.041);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({scaleX:1,scaleY:1,x:0,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,33.1,4.9,1.6);


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
		var bgm = createjs.Sound.play('bgmInt',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
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
		
		 window.open ("interj_Test1.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("interj_Scene3.html","_self");
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


(lib.scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.hrrump();
	this.instance.parent = this;
	this.instance.setTransform(3.9,58.3);

	this.instance_1 = new lib.heeheehawbubble();
	this.instance_1.parent = this;
	this.instance_1.setTransform(113.7,-106.3);

	this.instance_2 = new lib.interjectionwhoabubbletop();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-73.2,79.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_3 = new lib.slimclappingarm();
	this.instance_3.parent = this;
	this.instance_3.setTransform(33.8,-44.3);

	this.instance_4 = new lib.stacehaha();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-118.1,-106.2);

	this.instance_5 = new lib.slimotherclappingarm();
	this.instance_5.parent = this;
	this.instance_5.setTransform(56.3,-67.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("A71VFIAhAAIG3AAIARAAIBTAAIAlAAIALAAMAt9AAAIAAgIIAAgkIAAhTIAAlaQABgNgBgLIAAjTIAAgGIAAjUIAAgDIAA8AMg3pAAAgA71VdIAAgYAb2VMIgCgH");
	this.shape.setTransform(0.6,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("AARBEQgPgIAFgeQACgJgGgIQgVgEgNAOQgFAGgDgLQAKgbACgjQABgNAGgGQALAQAEAMIACABQAVgGAIgVQAEgMAHAKQAJATgSAZQgFAIgKADQABAIgEANIAAACQANAGAIAJIABACQAIAcgWAJg");
	this.shape_1.setTransform(95.1,74.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#336600").s().p("AhSDeIAAACIgYgBIAAgEIADgBQANgEASAAIAAAFQgEAFgDAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBgAgkBtIgFgBQgFgOAAgKIAAgCQAKgKAOgEIADAAQAHgOAMgIIABAAQAbgHAVAGIAAABQAFAJACALIAAgBQALgLAPAKIABABQABAIAKgPQAEgGAGAGQAFAKgCAMQgCAMgJANIgBABIgiABIAAgBQgCgRgGgJIgBAAQgWAegwAAIgSgBgAAHiGIAAgBIgBgDQgTgJAFgZIABgCQAHgjAbgOIABAAQgEAPgLAMIgCABIgGAaIABAAQAOAQAAASIAAACQgCAEgDAAQgDAAgFgFg");
	this.shape_2.setTransform(129.4,83);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("AA4EIQgGgIgNgDIgBgCQAhgUAEAgIgBAAQgCAJgEAAQgEAAgGgIgADhC8QAIgNACgMIAHACIgDAHIgHATgAixCgIgCAAQgGgKgIgIIABgBQAUADASANIgDADQgFAFgFAAQgFAAgFgFgAhHBmIgCAAIgQgUIgbgkIAAgCQALgVgBgWIAAAAQAfgoBAAPIADAAQAFAIAKADIAAABIAcAnIABABQAAAMgCAFIAAACQgOAUgTAPQgQAPgWALIAAABQgZgCgJgFgAgSBNIAAAAIAAgBgACLBdIgCgBIgDgKQgDgLABgPIABAAQAIAQAPAKIACACIABABIAGgDQAUgLAIgYIACAAQgHgBgCgQIgEgRIABgCQAWgDADARIABAAQAAALgCAQIAAACQgHAFgFAOIAAADIgIAGQgHAGgJAFIAAACQgHACgHAAQgJAAgJgEgAjjiuQgGgIgIgIQAXgFAIgGIACgBQAQgOAHgWIgBAAQgIgKgIAHQgKAIgKgCQgIgDAGgGIACgBQADgHAGgDIABgCQAJgCAKgMIACABQgGAOAQAAIAAgBQAFgQAJAJIAAACIAFAPIAAACQgKAMgDAMIgBAAQABAOgDANIgBACQgLAMgTANIgBABQgLgBgGgHg");
	this.shape_3.setTransform(116.5,74.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AgYAiQAqgXAJgtIABAAQACAegIAVIgBAAQgTASgaAAgAgaAMIAcgiIACgBQAJABgMAOQgCAEACADQgIAMgPAHIgDABQgDAAACgHg");
	this.shape_4.setTransform(108.7,61.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgVFWQhTgYgyg6QhEhQgphfIgBgCQgOghgFgkQANgNgMgGIgBgCQAaABgHgcQgEgRAAgXQAIgLALgJIAAgCQARAIAMgHIACgBQARgbAYgHIAAABQgFAJAYgEIAFgBIAFgBQAJgggVARIAAACQgLgIgLADIAAgCQgWAQgTAAIAAABQgaAPANgRIABgBQACgKgQgBIgCAAQgLgVgNgGIgDAAIAHgrIAAgCQASgKAKgQIAGAEQgIAMgGAOIAAADQAFAOgBATIACABQAFAMAKAHQASAGAOgGQAogSATgoIABgCQANgjgQgjIgCAAQgNACgJgHIAAACQgLAGgDgIIgCABQgSAUgTAIIAAACQgKAJgIALIgGgFQAIgiARgKIAEgEQgFABgOgFIAAgBQAKgIAHgKIACgBQAXgIAFALIABABQAMABgBgPQAAgGADgDQAGgJAGgEIAAgCQAGAPAAAVIABAAQAOAUAgAAIAAACQAZANgPAAIAAgBQgSAGAHAPQACAFgGAFQAAASATgBIADAAQAdgHgOgYIACAAQAIgMAQADQAJABAHgCQAFAPAIALIACAAQAaANAegDIADAAQAJARATAIIABABQANADAXgDIACAAIATgJIADAAQAOgXABgZIABAAQAVABAaAGIgBAAQgGAOgTAIIADgBQAVATgOAMIgCABQgFATATgPIABgCQAIgCACARQABAGAIABQAMABAGgLIgBAAQgDgTgGgOIABgCQAbASANAtQAMAqAGApQAHAqgBAyQgBAlgHAlQgIApgPAqIgHgCQACgMgEgLQgGgFgEAFQgKAPgBgIIgBgBQgPgJgLAKIAAACQgCgMgFgJIAAgBQgVgGgbAHIgCAAQgMAJgHANIgDAAQgOAFgKAJIAAADQAAAJAFAOIAFABQA/AGAagjIABAAQAGAJACARIAAABIAigBIABAAIAHADQgdBCgzAsQgRACgLAJIgBABQgeAGgbgKIgBgBQAGgJgPADIAAgBIgBgEIASABIAAgBQAMgGAJgCIABgCIAOgKIACABQALAJASgPIACAGQAHgDAMgPIABgCQAIgSADgLIABgDQADgLgNgIIgCAAQgfAIgNAaIAAACQgCALgFAIIgBAAQgHgggegIIgDAAQgTABgMgBIAAABQgGADgNAAIAAACQgeAIgMAaIAAADQADALARAPIADAAQAIACANAIIAAAEQgagBgVgFIgCgBQACAPAJAIIABACQATALAVAJIAAAHQgdgBgcgIgAhIEXQAXANAJgOQgFgRgVgJIgIgCQgigJgEgXIgBgCQgNgLgRgGIgBgCQgFgJgJgGIgCAAQgLAFgIAHIAAADQADAMAJAHIABABIABgBIAaALIAAgBQAVARADAaIABABIATAPIACAAQAMgDAHgEIACABgAhuC0IAAACQABAQAJASIAAABQAPAJASgIIAAgCQAAgVgOgSIAAgBIgJgBQgKAAgKAFgAgaByQgHAAgFADIgBABIgSASIABAAQgCARgLAKIACACIACAFQAWALgHASIABABQALAPARgCIAAgCQAGgWgIgVIABgBQAHgIAIgGIABgCQAFgSgKgSIgDAAIgJgBIgDAAgAAlCuQgLAQACAVIACgBQAegaATgyIAAgCQgDgXAAgSIgBgBIgJgHQgIgGgKgDIgCAAIgKAJIgKAKIAAADQgDAYgJATIAAACQABAXAXgGQAFAIgGAIgAjIBgQgFAHgIAFIABABQAOAXAJAaIACABQALAMAUADIADABIACgBQAQgDAIgKIABgDQACgMAJAHIABgCQAFgVgKgSIgCAAQgEgFgGgCIAAgCQgBgKgEgHIgCgBIgCgCQgFgFgIADIgDACQgJAFgQABIgIAAQgFAAgGAHgACZACIgBAAQgPAagKAgIAAACQACAJAAAMIAAADIACABQAEAQANAHIADAAIAfAAQAWgJANgSQAGgHAEgKQAQglgUgZIgCAAQgUgMgYAMIAAgBQgHgDgGAAQgGAAgFACgAhfABIAAABIABAAQABAVgMAWIABACIAaAkIAQAUIACAAQAKAFAYACIABgCQAVgKAQgPQATgQAOgUIABgCQACgEAAgNIgCAAIgbgnIAAgCQgLgCgGgJIgCAAQgQgDgPAAQgpAAgXAcgAjQAYQABAWgBAVIAAACQAIALAPADIADAAIACAAQAUgJAHgVIAAgDQAEgMgEgMIAAgCQgHgSgPABIABgDIAfg4IAAgCQAEgQgJgEIgBgCQgQgKgMAHIgCABQgFAIgKADIAAADQgDARgGgbIgCAAQgOgIgSALIAAACQgHAOgFAPIACAAIABAFQACAZgRARIAAACQAEAXASAIIACAAQANgLAQgIIAAADgAB6h1IAAACQgEAZgIAQIAAADQAJAuAzgIIABgCQASgfgdgRQgBgLAHgMQAHgMAJgIQASgRAGgbIAAgBQg0ALggArgAAwh3IgBACQgLAOgYAPIAAACQAFAQATABQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQgGAPAMAMQAIAEAEgIIAWgnIAAgCQgGgTgJgPIgBAAQgDgGgFAAQgDAAgEAEgAhuiSIAAACQgNAHgIANIAAACQAGAgAZAOIACAAQAjADAXgRIAAgCQAJAAAIAEQAJgJACgRQACgUgGgJIAAgCQALgMAOgIIAAgCQgKgNgIgQIAAgBQgKgBgMgIIgCAAQgigFgTANIAAgCQgPAcgJAagABgilIgBADQgDASAXgCQAGgCACgFQAEgUAMgJIgBgBQgGgDgGAAQgPAAgPAVg");
	this.shape_5.setTransform(115.4,74.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#996600"],[0,0.502],162.7,74.6,162.7,74.6).s().p("AhSCNIAAgCIgPgfIgBAAQgTAZgCAeIgBACQgKAIgTALIgCABQAOgjABglIABgeIACgjQAEhsgdhOIBSAEQAjABAggEQAlgFAsgMQAYgGAUgLQAVgKAQgPQAEAUABAQIAAACIgfAPQg6Afg5AnIgBACQAQADAPgLQAKgGACAHQgTAQgLANIgBACQAYgBgRATIgCABQgSAGAJANIACAAQADAIgGAMIgDAJIgDAHQgGAPAAAIQALACgCAKQgCAIADADIACABQAOgEADgLQACgFgCgGIAAgDIAAAAQAZgVARgaIgBAAQgJgBAMgMIAQgPQgFgWAWgPIAAgCQAFgYAVgUIABgBQgIgIACgGQACgIANgHIADAAQAKAGgDAZQgCAOADAQIAAAGQgFABADAJIgCAAQADAhgBAoIAAATIgCAAQAFAdgCAcIAAANIAAACQgVAVgMAdIgBABQgPgXgVgMIgFgBQgGAPgIABIAAgCIAAgMQgCgIgFgBIgFABIgDABIg3A5IgBAAQACghgNgfIgBAAQgUAQgJAdIgOAzQgWgagDgegABhAaIgBABQgMASgZARQAAAFACAAQAegDAOghIABgCQAEgIgFgHIABAAIAIgHQAAgBAAAAQAAAAgBAAQAAAAgBAAQgBABgCAAIgBABIgBgBQgKADAAAQgAg3AwIABACQAAAHACgCIAIgEQAZgNATgTIAAgBQAFgFACgFQACgFgDgDIAAAAQghAUgcAcg");
	this.shape_6.setTransform(162.7,74.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AhJBjQgagCgYADQgShMg2gnIAAgBQATgHANgOIABgBQAmAEAsgBQArgBAfAAQBvAABVhAIAGA3IAAADQgGATACAVQACAUgCARQglAmg6AQIgBACQg6AJg4ABIgIAAQgWAAgZgCg");
	this.shape_7.setTransform(159,49.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("A2+DwIAAgCIAGgBQAjgGAdgKIAAgCIgihEIACAAQAcAXAjADQADgagDgkQgCgdAHgVIABACQAVAmAmAWQAOgDAHgLIAOgWQAlg4Arg2QAAAYgGAVQgOAzgEA+QAHABACgCIBJhFQAngkA2gVQAEAdgFAfQgHAkAXAQQARgfACgiQADgpAQgbIADAAQALAEAFAKIADgBQAFgDAEAGQAbAWAeAVQAfAUAjAHQAHgPABgVQABgYAFgIIAAgCQgFgjAIgTQAUARAJAbQAKAZAQAQIACAAQAWgBAAgXIACAAQAdgfApggIgBAAQAKgVAbgPIABAAQABgKAMgHIAAACQgFAdgQATQADADgCAHQgGAQgFgEIAAACQADALAHAIIACAAQARgGAJgPQALABALgKIAMgKQASgOAGgNIACAAQAYgUAWgJIABAAQAHgUAXgEIABAAQgNA5gVAuIgBADQgCAVAHASIACAAQAVgbAcgWIAAgCQgBgIANgJIACgBIARgGIACABQAWAMAHAQQAMAFAIAJQAMANAQAJQAcASAPATIADAAQAOAIAMALIACgBQADgCAHAGIABABQAOALAOACIABAAQAIhEAFg/IABACIAhBCIACABQAQATAZAJQATgtAQgqQAIgTgEgKIABgBQAMgTAGgVIABAAQALAvAhAXIADAAQAMADAMAEIAAgCQA4gaA6gjIgBADQgmAxgfA6IAAACQABALAEAGQAFAEAJgDQA4gPArgRQgNAugaAwQgKASAGAMIAAACQAwgaBIgXIABAAQAIATAKARIAAACIACARIABABQAIACABALIACABQALAQAVAHIABgBQAVgrAOgxIAAABQAPAOAQAEIgBACIAGAHIACABQAhAZAiAPIADAAQALgDAKAIIADAAQARACATgHIABAAQgBgvgFggIACABQAdANApANIAAABQANADAQAMIAAgBQARAEAVALIAAgBQAkAIAaADQALgYADgfQADgkAWgFIAAgBQAIAEABAOIABACIAJAIIAAACQAFAmAVAiIACABQAJAFANABIA9gjQANgHgCgKIADgBQAbgPAQgSIABAAQgQAZgOAeIAAACQABARACAFIACAAQAOgDAPgOIAAgCQAOgTAWgWIAAgCQAMgWAOgMQAzgEAxAfQAxAfA1AOQAFgNABgLQABgMgBgOIgEhRIACABQAqAWAvAHQAFgKgBgPQgEglACgrQACgrAQgyIAAgBQAdAXAaAQIABAAQANgbAAgeIABAAQAIgVAKgPIACABQAmAoAgAtQACBIgBAwIAAB8IABAWIAABTQgDAHgGADQgEAEABACQAEAOAIAHIAAAHg");
	this.shape_8.setTransform(31.5,113.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#336633").s().p("AkAFFIABgCIAJgGIAAAAIgGAJIgCAAIgCgBgAkYE8IgBgBIgBgDIgBgaIABAAQAKAKALgEIAAgBQAFgMgEgWIACAAQgNgZgIgSIABAAQALAMANgKIAAgCQACgOgDgKIABAAQgcgrghgnIAAgBQAhAFAhACQACABADgCQgSgsgpgWQgOgIgLgMIA3ANIAAABQAXADANgHIADAAQgNgQgQgNIACgDQAWgHATgJQALgFAGAGQAMgFgBgRIABAAQAWgFAVADIACAAQgOgPgBgcIAAgBQATgCAUABIAAgBQgNgTgCgnIAAgOIABAAQAZAEANAEIAAgBQgCgRgIgYQgKgfAQgRQAQgBALASIABAAQAOgnAngNIADgBQALAbgPAVIABAAQAQABAKgRIACAAQAHgEAHAFIAAABQARARACAVIABADQgXAHANAPQADADgBgEIASgLIACgBQASAMADAbIAAACQAKAGAEgIIABgDQgKgWAJgVIABgCQAQAAASALIACABQAGAOAPAFIADAAQACgOgSgQQgGgFgFgGIAAghIAAgDQAJgPASgGIACAAQAKASAJAFIADABQAFgMgCgZQgBgHADgHQAHgYATgMQAaAVgEAZIgBACQAIAKAIgJIABgBQAFgbAVAEIABACQAUAPgIAZIACABIAAACQAKgRAQAEIAAABQgCAHAIAHIACAAQADALAIAHIABABQgZAsgNA0QgMAtgDA0QgCAkAOAzQAEAPAIAMQgeAOgpAPQg2AVg0AZQgyAZg2AWQgXAdgdAXIgCAAQADhRAKhFIgBAAQgbAWgIAeQgDANgIAJQAEAFgDAHIgBACQgNAcgKAgIgBAAQAFhSAJhKIABgCQgQAGgGAQQgrBpgfBsQgEhfAOhmIgBAAQgNAKgFATQgGAegKAdQgJAWgKAWQgKAUgCAQIgMARQgNABgLANQgIgCgGgGg");
	this.shape_9.setTransform(50.3,7.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009933").s().p("AgbB3IAAgCQAOgyASgsIABgCQgeASgbAVIgMAKIgCABQgKgJgNANQgIAJgPAEQAEAFgIADIgBABQgQAKgMANIAAgBQgDgQANgMIACgBQgBgQALgPIgBAAQggAJgXARIgCAAQAAgXgDgZIAAgCQAFgaALATIAPAYQAPAIAYgDIACAAQASgOAVgKIACAAQAGgMAJgJIACgBQAYg3APhOIACAAQAFAFAEAQIAAADQAIAJALAHIACAAQASA5BAAIQAGAAAKAFQhXA1gyBMIgBACQgCAEgCAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBgABcBdQArg6Avg2IABAAQACAigEAqIAAACQgwAVgpAOg");
	this.shape_10.setTransform(-15.1,-21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF99").s().p("ADOHVIAAgDQAFgMADgTIABAAQAEAVgJAYQgDAJABANQgEgNACgUgADdEtIgBgDQAEgTAGgBIABADQAHAigPAMQABgOgDgMgADuEBQgCgWgBgXQAOAIgEAeIgBAAQgHAEALAJQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQgCAOgFAKIAAAAIgEgggAhUD/QgCg1gFg1Qghg9gqhBQgagmgIg3QgFghAFgZQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQgMAcABAiIgBAAQgkg9AAhhIAAgDQAViBBUhCIAAABQgsA3gPBiQgMBKAZA8QAHARAKAPQAeAxAcA1QAbAzAZA1IAOAeQAJASgBAQQgCA+gUAjQgFAJgGAHIAAAAQgKAAAAgYgADhDsQgLghgOgdQgPgggTgcQgLgQACgQQACgWgEgHQAHgKgDgSIgBAAQARgmAJgrIAEgVQAFgiAAgkQAAgQgDgTIgDgaQgMg+gHhFIAJgEQAjA/AABfQABBBgKAtIgFAWIgNBCQgDATgBATQAAAaAGAdQAJAHgCAIIAAACQAMAFgCAHIgBACQAHACACAIIABAAQAAAJACAGIAAACIABABIAAAAQAHAQAJAOIAAACQgNAKAGAdgAEPCwQgagmgdgjIgBgCQACgZgBgSIgBgCQAMgjgCAjIAAACIAgArIACAAQAJAsAEAfgAgMCrQgEgdAEgwIgBAAQgKg/gZguIgBgBIgOgUQgVghgOggIgCgBQgMgQgIgTIAAgDIAAgCIADAAIABAAIAZAkIAcAqIAgAxIAAACQADAZAJADIABACQANAoACAlQADAqgMAlIAAgCgAgcCaQgGghgLgZIAAgCIgSgWQgZgkgOgnIgBgDQhFhYgbiAIAAgCQAKhOAfhFIAIgRIAMgUQALgRAPgPQARgFALADIADAAQgZAegWAiQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgVA1gGBCQgFA9AUA3QAsA9AiBHQAOAcAMAdQAHATAEAaQADAZAAAeQAAAIgDAAIgCgBgADFBVIgBgDQgDgZABgoIAAgCQAFgZAIgYIABAAIAHgwIAAgDIAGgLIACgBQACgjgBg6QgBgUgCgVQgBgEADgIQAMAnAEAhQADAZgGAiIgDARIAAACIgCAKIgKAzIgEATQgIAigKAjQAFAKgDAVIAAACIgBABQgBAAgCgFgAjZA2QgHgbgMgbQgNgagHgjQgMg1gDhDIAKgBQAJAtAIAcQAKASAGAXIAAACQArA0gNBQQgBAIgHALQgGgHgFgYgABignIAAgDQAOgaARgXQAegqANg5QAMA7gOA8IgDAUIgCATQgIATgKAQIgBgCQAAgLgPAEIgCAAIgaAMIAAACIgFgvgAh3i0IAAgBIAAAAQgLgfgEgmIAAgDIABgDQAGgjAMgdIAAgCIgEBFQgDAkAKAiQAPAeANAgIAAADQgWgagNgkgADyjnIASgCQAEAkgFAkQgKgegHgogAkEj8IACgUIADgTQAEgSAFgRIABgBQASg5AogvQAagfAlgJIAAACQAHAFAAgCIAJAKIgBABQgJAGgLAEQgGACgHAEQhAAngdBNQgGAQgEASQgFARgCAUQgEAagKARIAGgrgADyjnQgWh9hIhNQBWA5AXB+IACAQIgRADIAAAAgACekoQgEgGgDgSQgCgQgDgPQgJgGgGgeIgEgRQAgAsAABAgAgXmyIACgBIgQgTIABAAQAUACgTgYIgBgCQAFgUAPgDIAAABQgGASAMgFIAIAQQAIADAMgBQALAAAOgEIACAAQAQALANAOIAAABQgYgIgfAFIgDABQgEAJgIAEIgCABQgMAAgJAGgABNnHIgBgCQAcABAMARIABACQgZgCgPgQg");
	this.shape_11.setTransform(-57.9,-66.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("ABUEhIgDAAQAJgegWgVIgBgCQgmgWgqgSQgOgFgPgDQgMgDgNgBQgVgBgWADQgGgfgKgNIgDgHQgEgJgKgCIgDgBQATAbACAhIABAAQgqAKgiAKIAFgUQABgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQADgUAFgTQAEgIADgJQAEgQAGgQIAGgSIAHgRIACgFQAFAMAMAFIASAJQARAIATAEIAIACQADAFAEACQAGACAHgDIAAABQALAJAMACQAMACAMgEIABgCQATARAugGQAKgBAKABIAFgBQARgKAVgGIAAgBQAOANABASIAAADQAGACACAHIABAAQAIAvgCAjIgBAAQAFAUgMAmIAAACQgcAHgdAAIgDAAgAgOiDQgfgFgWgRIgCgBIACgCQAUggAOgmIAAgBQgEAogOAjIABAAQAIgCAMgHIACAAQAFgXAFgFIACgBIAFgfIAAgDQALgFAAgTQAAgQAFgRQADABANgBIADAAQAiAMAmAQIACABIgDgGIgBgBIgEgKIANAFIAAACIAAAAQAYgKAdgQIACAAQAMAXAQASIABACQADAgALAyIAAACQgvASgqgWIgCgBQAQgUgGgSIAAgDQgRAMgKAOIgCABQgEAIgCALIgBAAQgcAggvAAQgKAAgNgCg");
	this.shape_12.setTransform(-57.4,-23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("ACbJhIAAgDQABg7gLg+QgGgngGgsQgDgagEgTQgIgRgEgTQgFgBgCgFQgDgHAAgIIAAgNIgJgOQgEgGgGAFQgJAIAKATQASAjAFAuIAGAMIABABQAAApANAoIABAAQAAAoAGAbIACAAQgDAgADAhIAAADIm2AAIAAgDQABg2AAgnQgBhSAChGQABghgEgrQAJgwgDhAIgBgJQgBgOABgUQAkAZAqASIAmAQQABAAAAAAQABAAgBAAQAAgBAAAAQgBgBgBgBQARAKAYgDIADAAQALAHAKABIAAABIBIgCQBGgBA6gaQATgIASgLIAigVQAFgEALABQAEASABAOIAAACIAEAJIADAJIAAAAQAKADAFAKIADAGIAIASQALAXgBAbIAAACIACABQADACAAADQADAOAEANQAGASADAUIACAMQADAKAAALIAAAHIAEARQALAzgCA1IAAA1QABAfgGARIgJACIgHADgAiTljIgCgBQgrgjg6gUIgDAAQgYgOgagOIgCgBIgDgvIAAgDIATAUIAAACQA5AaBXgFIADAAQAAAHAGAGIABACQAMALAMACIAAABQAGAoAKAcIABABQgKACgJAAQgTAAgPgIgADGm9IAAg0QgCgDAAgDQABgZgIgYIgBgBIAAgCIAAAAIgCgFQgDgJADgEIgDgIIADgBQAMgCAEgJIADAAQAVgIAFAGIACgBQALgMAOAAQANAOgBAWQgBAhAKgGQABgJABAFQAHAZAKAFIALATIgBAAQg2Afg4AbIAAgDg");
	this.shape_13.setTransform(-144.2,76.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996633").s().p("AgdNFIAAgGQAYgIANgTIAAgCIAbAMIACAAQATgBAPgCIAAABQgxAZgyAAIgBAAgABoMbQBZhTAdiPQAHglAEgqQADgkgQgrQADg9gZg0QgEgIgBgLIgVgdIAAgCQgWgIgEgOIgBgCQAWADALAPIAFAHQAHANAKAMIAAABQAWAbAJApQACANAIAKIADAhIAAADQAMAwAJAvIAAADQgIAfgDAmIAAACQgEApAGAZQgkByhzAtgABmqxQgRgcgYgUIgdAUIAAgBQgLgIgNgBQgMABgPAJIgKAGIgKAFQAGgSALgOIAAgCQgRABgSADIgUAGIgCAAQgIgQgcAGQgjAFg0ACIhUADIAAgDQBNgWBWABQAGAAAEgKQgLgDgGgIIgCgBIgMgdIAAgCQAnAHAmAUIAAgBQAIgUAAgjIABAAQAQAWAKAaIABADQAqgSAygKIAAABQgaAVgVAZIACAAQAQAGAYgGIAEgBQBFgVBRgEQgyARgrAYIgBACIAFABQAjAHAvgCQArgCApAFQg5AOhBAHIgBABQA0AfA2AdIACAAQgNABgUgEIgDAAQAAgFgHAAIAAgCQgIAAgGADIgDAAIhggvIAAABQgHAFAGAPQAIARABALQAIAJAGANIAAACQgUgXgQgbg");
	this.shape_14.setTransform(122.2,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC9966").s().p("AmiL5QgvgEgngMQg/gVgmguIAAgCQgFgsgJgwIABAAQAIgmgOgfQAQgOgLgSIAAgCQAGgCgDgHIACAAQgEg1ABhGQABgVgCgsQgBgjAFgZQgEgKACgZQACgZgFgTQAXAQATAPIgBgCQgIgOAWAOQAqAbAyATQAJADAJABQAMAQAKAAIAAAEQABgFAFgDIAGgBIABAAIAJgBIAAADIAAACQAHAEAEAIQAOAaAQAZQALASAOARIAFAGQAFAFADAGIAQAXIAJAMQANAPAUAGQAJACAHAFQADADAFAAQANgBAMADQAGABADADIAFgCQgBADABAEQABAGADAEQAGALACAMQAEAdAHAcIADAPIALA6IAFAkIACANIACARIABACQAKAGgEASQgBAGgEAFIgHACIABABQgBADgEADQgaANgfAJIgCABQgLAJgJAAIgBACQgLAIgHgFIAAABIgEABQgOAEgGAIQgIgDgQADQgcAFgjAAIgkgBgAkOGLIgcgQQgLgKgKgOIAAAAQgPgQgLgSIgJgNQgNgSgJgUIgMgfIgFgPIgBAAQgIgpgDgoQgBgPAIAAIABgHIgJgBIAAgBIgnhYQgJgVgJgYQgFgRAFgZIAEABIADACIADgBIgBgBIgEgIIgDgCQgIgEgFgEIABAYQACASAEARIADALQAMAaAKAbIAJAZQAHARgGASQgEAOgQgFQgFgBgDgFIgUgBQgNgBgMgCQgKgCgKAAQgFAAgEgCIgOgCQgRgEgQgIQgKAAgHgIIgCAAIgBgDIgBAAIgEgDQgOgPAEgTIgDgCIAAgBQACgbgBgeQAAgtgEgxQATg1AsgSIACgBQgCgCADgHIACAAQAYgTAcgQIAAgBQALABATgLQAHgEACgIIAtgJIABABIACABQABgIALACIAAgBQAyAJA3AGQAZACARANQAIAGgEAHIgEgCIABABQAYARARAZIAIAMIAFAKQAQAfAEAjQAJAGADAPQABAMAEANQAFASAHARIADALIAAAAQAPAaAEAeIAFAZQACAGgBAGQACAIABAIQAAAKgCAJIAAAAIABAAIgBACIgEALIgCAEIgCAFIACAFQAGgHAJAPQAAABABAAQAAABAAAAQABAAAAAAQAAAAABAAQADgCAAgDQADgGgHgCQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAQgLAPgEIADAAQAmgbAxgSIACgCIABgBQAKACAJgKIAAgBQASAAAIgKIABgCIAfgKIACAAQAUgUAfgCIACAAQAbgQAXgLIAAgBQAcABATgTIABgBQAPgFANgPQADgdAFgcIAHgjIAGgQIACgGQADgSAKgOIADgEIgBgKIACAAQAWgMAggIIABgBIAhgFIADAAIALgGIABgBIAhACIADAAQASgEAWACQASABAVAGIACAAQAQALAXADIACAAQAMAQAbAKIACABQANAQABAPIAAACQgYAMgVgLQgEgCgDAEQglgYgwgNIgHgBQgOgEgFgLQgGADgCAFQgFAIAFALIABACQAGAFALACIACAAIAOAKQAMAMAKAOIAAACQgBARgLAGIAAgBIgKgFQgdgNgVgWIAAACQgLAEAGAKIAAACQAYAVAdAQIAAACIgDAfIgCAAQgbgZgfgVIgCADQgJANATAGIACAAQATAUAWARIAAABQgCAFACAPIAAACQgHAFAEAFIABACQgMAZgZAOIgCABQgMgBgFgIIgCgBQAAgRgEgFIgBgCQAKgMgCgSIgDACQgFACgCAFQgHATgMAPIAAACIAAACQgfAwg8AMQgFABgDgGQhQCIiNBNIgPAJQg4AnhGAdQghANgmAIIgiAMQgUAFgUgCIgbACQgOAAgLgGgAGbjFQgcAKgWAaIAAACQADATAOAFQgDABgBAFIgKAqIAAACQAUgPAGgeIAAgCQgBgQgNgDQgFgKALgGQAWgNARgTIgCAAIgIACgAiDGQIABAAIABAAIgDAAgAiJggQgEgBgBgHIgDgBQgFgDgCgFIgUg1IgPgvQgGgVgIgVQgFgKgGgKIgBgDIgKgRIAWgGQABgFADgEIADgCIAEAAQAJABADAIIAEACIAKAJQAGAZARAVQAMACAIAJQAVAWAMAcIAFALIAGAPQAEAHAAAHIAPAaIAAACQgEAEgUAGIgCgBIgWgOIABgCQADgEgGgGIgBAAQgDgIgGgFQgFgFgJgBIABACIAcAwIgDABIgcAHIgDgBgApYi+QAVgbAXgNIACgBQATgXATgaQAUgbAXgMIALgKIABgBQAggdAmgUIABAAQABABAAAAQABABABAAQAAAAABgBQAAAAAAgBQAHgGALgTIABgCQAMABABANIABABQgIARAKAPIAFABQAMgagIgVIgBgBQABgMANgGIAAABQANANAFAVIgBAAQgRATAAAPIAAACQAFAPAQgJIABgBQgLgPASgQQAFgFACgHQAJAUADANIAAADQgLANAAAPIgBAAQAJAKANgTQAGgJADgNQgLgTATgHIAAAAIAAAAIAAgFIABgDQAAgHAJgCIACACIABAAQAOACAIANQAGAIAJAFQAYALADAYQACAPgLAMIgCADQgFALgGAKIgEAHQgIAPgJANIgFAFIAAAAQgIAHgMgBIgCgBQAAABgBABQAAAAAAABQAAAAAAABQAAAAAAABIgCAAQgbgVgZgIIgBAAQgHAEgCgEIAAgBQgMgBgJgIIgUgCQgZgCgYgBIgHABQgZAEgZAGQgdARgjAMQgaAJgSASQgRASgQAHgAhelVQgQgBgOgEQgngLgggiQgQgSgKgVQgEgKgDgKQgEgLgBgMQgCgMACgKQgCgCAAgHQAHgLAIgDQAJgIAPgDQAPgLAJgRIACAAQgIgbgZgMIgBgEQAMgXAWgNIACAAQADgFAFgMIACAAQAKAEATgKQApgWAWgoQACgDAEAEQAMABALgSIABgCQAPgCAEgNQAOAAAKgHIAGACIADAAQgNAOgOALIgBACQAHAPAmAEIACAAQASgKAIAAIADAAQgFgMATgBIAAgBQAcgDAFAIIgCAAQgUACACAKIgBAHIAAABQACADgHgCQAAAKAFgCIADAAIARgOIACgBQAbALAXAAIgCgBQgagKAhAFIACAAIAHAJIAOABQADAAACADQAHAJgDAMQgCAIgHAEQgLAHgNgEIgBgBIgBAAIgGgBQgVgGgTALIgIADIAAAAQgXAOgRATIgBABQgFAPgDAeIAAADQAQAEAXAKIADAAQAPADALAIQAGACAGgCQgEACABAGIgBAAIAEAFIALAPQAVgCALAVIAAACIgBAFIgBAFQgBABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgFAHgJACIgCACQgKAGgJgFQgagOgUAEQAAAIgKAIQgGAEAAAIIAAACQgugfgogmIAAAAIgFgHQgGgIgHgHIgDgEQgIABgDgMIgEgDIgCAGQgSAzAUAyIAHAUIAKAfIACAHIADAHQAFAPgCAKQgDASgZAGIgDACQgHACgJABIgNABIgSgCg");
	this.shape_15.setTransform(-113,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC99").s().p("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gCABQgbAMgdADIgUABQgcAAgdgIgAuwikQgSAEgJAPIABABQAPAGASACIAAgCQABgLgGgQIgCABgArBiQQgEgFACgGIABgCQgVgWgIgiIgBgCQAQgoAHgqQABgHAFAFQADAEgDAWIAAADQAMgHAJgGIABgCIABgXIAAgCQgDgOACgOIADgPIAIgcQAFgWAGgVIABgEIAFgSIADgUIABgHQAEgdADgdQABgMAGgKIAAgCIADgSQABgEACgEIACgJQAEgPABgNIADgaIADgBQACgugCg+IAAgtQAAgKACgKQABgKAEgLQAagXAYgLQgIAEAEADQAEgHAHgFQAQgKANgNIALgJQANgJAPgIIAQgIIAWgNIADgBIADABIAcgNIACAAQgKAMgMALIAAADQgCAIgHAEIgPAJIgDACQAAADgBAEQgCAJgJAEIgGAEQgWAUgbANIgHACQgfAOgLAYIgBACQAOAAAMgIIAJgIQAFgFAGgFQAqgfAvgPQgNAigcAUQgYAQgaAQIgBAAQgDADAEADIAFABQAJACALgLIABgCQAcAMAngJQAggHAggEIgBABQgaAPgfALQgiALgnAGIgCAAQACAvgfAMIAAgBQgNAEAKAPIAAACQgIATgDAeIAAAOIgCAdQAEAFgBAJIgCAKIgBAFQACAEgBAFIgDAkIAAAMQgBAGgDADQABAVgHAVQgDAHgBAHIgJA7IgHAjIgFAQIgEAOIgEAOIgFAcIAAABIgCALQgEAegRAYIgZAmIgDAEQgNAPgQAMIgDACQgEACgDAAQgFAAgDgEgAnPjyQgbgKgTgRQgTgQgQgTQAAgigMgcIAAAFQgDARgEgNIAAgCQABgFgBgOIAAgDQAKAPgCgJIAAgCIgBgTQgBgPAHgNIAHgNQAIgLADgNIACgEIAPgVIADgFQBVhxCMhGIAagMQAogRAugKQAigHAlgEQAWgNACgVIAAgEQAFgLAHADIACABQAQAHAPAKIAAACQAEARgIAOIgBACQADAfAJAbIADAIIAAABIAAABIACAEIAAAAIAAAHIABABIABADIADANIAAAAIAAADIgBAOQgHAQgLANIgBACIgBACQgGAIgHAHIgBACIgCADIgEAEIgBAAIgNAIIgCAAIAAABIgBACIAAAEQgKAGgKAKIgBABQgFAKgEAFIgBACQgfAWgTATIgBABIAA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");
	this.shape_16.setTransform(41.2,-2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC00").s().p("A0dMXQgBgkADgWIgBAAQgBgJgFgDQAKglgHgrQgGgngLgbIAAgDQAAgbgPgXIAAgCQgCgQACgQQgUgmgEgnQgCgUgEgSIgEgPQgLgggTgbIAAAAIAAAAQgHgJgEgMQgKgbgFgeIgIg6IgEgdQgGgWgDgXQgDgPgGgOQgDgHgHgDIAugMIAKgFIANgFIACAAIARgFQAGgGAOgFQArgOAogTQATgJAHADQANgMAVgOIACgBIAGgEQAWgOASgFIgBACQAIADABgPIABAAIBBgtIACAAQAHgTAUgFIACAAQAEgGACgEIAGADIgLAYIABAAQAKgDACgOIAAgDQAIAAgCgHIgBgCIAEgDIAGAFIgCARIgBACQAGATAEARIABgCIABAAQAIgNACAeQACAgAEAdIAQgDQgDgKgCgMQAAgDgDgFQgFgGAIgBQgNgWAHgVIABAAQAKAFAVAPIAAACQgNAJAIARIAAADIARAXIAkgFIgKgTQALgGAJgJIAHgBIAAABIAAACIACADIAGADIAAAAQABAFAEAFQADADADAFIAOABQANgIAOgCIADgEIAZgYIADADIACADQgBAGADAFIACAFIADAEIADACIABABIAFAAIABAAIAIgEQAdgPAVgWIABAEIAAAGIAAADIADAEIABADIAAADIABACIgBABIABAAIAAADIACADIAJABIABgBIACgCIADgDQAlgNAfgYIADADQARAUAaAHIABgHIABgDIgNgFIgHgGQgOgIgLgOIgJgBIAAABIgCACIgDAEIgCAEIgGACQgPAGgMAKIAHgRIABgCIAGgHQAiglATgzQAYhAAWgoQACgWAOgfIABAAQANg8AFhGQACgaAAgiQAAgoAVgRQALABABgCQAIgQAQACQgUgHAggFIgBgBIgEgBIgFgCQgHgCgDAGIgCAAQgJAMgNAJIgBABIAAgCQAIgHgBgGIABAAQAKgKAKgJIACABIAHACQAKACgHgTIACgBIABgCQASAKABATIAAABQgJABgBADQAFACgEAFIgCAEQgKAbALAdIACAAQARgOAIgMIgCAAQAIgNAKgLIABgDQABgHAKgHIABgCQAvg7BAgqIABACQgXAwgGBBIADAAQAMgGACgQIABgBQAPgGAPgJQAJgcAdgSQASgLgKgIIgBgBQAggmAzgVQg0A8ggBPQgHAQAEAGIAIgKQAQgRASgPQAYgSAfgOQA6gaBCgIQgpAlgyAbQgjATgaAaIgNAPIgKAMIAPgIQAWgLAagIQAXgHAagEQA9gJA9AHIggANQgbALgdAKQgtAPgnAXIAAACQAAAAAAABQAAAAAAABQAAAAABAAQABAAAAAAQAtgHAzADIBbAEIAAACQAQADAIAHQghAMgrgCQgsgBgaAPIABABIAAABQBiARBOAzQgngEgigIQgegIgLAKIgBAAQAFAKAQAAIABACQAwAfAnAoIgBABQgogGglgIIgCAAQgLADAGAHIAAABIAaAUIABACQARAfAZAWIABACQAJAOgCAPIgCAAQgbgTgbAFQAAAHAEACQAtAXAEA1IgCABQgPgLgOAAIgBAAQADAXAEATIAGACIAAABQgBARAOAIIAAABIABABIAUAAIAJgFIABgCQABgDADgBIABgCIABgDQAlg5AVhKIgEAwQgGA8AFAzIAOAEQAHgjAJgaQAQgtAJgiQAOg2AbgmQgOBBgCA5IgDAmQgDAhAKAPQAJABAAgKQAEg2AOgrQATg2ARgdIABAAQgSA6AMBFIgCABQgPAWgCAZIABAAQAKAfAdgCIACAAQAQASASAPIADAAIAEgBQAngKALgnIABAAQABAQgBAIIABAAQAMAtAcAuIAAADIACATIACAAQALAVAEAQIABABQAMAVANATQAiBbA7BNQAIAJAIAGIgFAJIgIgFIAAgBIAAAAQhKAKg8AGIAAABIgKADIhbAbIAAgCQgIgBgBgCIgDAAQgOAEgKgCIAAACQgOAGgMAHIgCgBQgHgDgIgBIgCAAIgLADQgFAAgHACIgCABIgJABIgCABQgNALgEAWIAAACQAAAcAdgBIAFACQAIADAHgDIAHgEQAIAKALAFQAHADAJAAQAGAGAGAFQAQAKASgHQAEgBADgEQAHACAHgBIAAABQgJgBgIACIABACQAKAOASAGIACAAQAjAFAtgKIAAACQAOAXAaAJIADAAIApgDIABABQAEALAHAIIACAAIAfAOIADAAQAHgDAVABIACAAQAXAZAfgGIAAACQAMALAVAEIADgBQANgCAIgHIAAABQBKADAlgaIABABQBCBABugCIABABIAJAEIACgBQAPgDAMgGQAIADALgFIA3gVQBsgpA0hgIABAAQApgLAOgoIAAAAQAKAYAHAaIABABQAJAOAQAHQAPgTAIgcIAHgXIAGADQgGAZAQALQgTAtgEA6QgEA2ADAsIgCAAQgvgTgqgMQgIAQADAPIAGAlQAGAigMAeIgCgBQgqgcgtgOIgBgCQgsghgzAEQgSAGgHAQQgJAQgNACQAPgSgGgUIABgBQgsAUgiAiQghAig1AQIgBgCQgEgKgIgHQgFgdgJgaQgKgcgTgGQgNgCgJAOQgUAjgGAxIAAABQgbgEgSgJQg0gNg0gaQgegPgggDIAAACQAIAmACAuQgqADgegUQgdgTgagWQgUgRgTgEIgBAAQgGAzgXArIgGgDQgIgHgDgJQgNgqgagaIgDAAQg7APgpAVIgBgBQAfg0AKg+QgRgDgRAIQgoATgtAJIAAgCQAog6AihAIAAgDQgCgJgFgFIgBABQg9AohQAfQgogbgGgyQgCgQgMgIIgBAAQgdBfggBVIgCgBQgegXgIgiQgOgJgFgTQgFgUgKgEQgLAIAAAQIgDBbQgBAWgEAHIgCgBIhxhKIgBgCQgbghgggbIgDAAIgQACIgCABQgKAKgKABIgBACQgKANgMAMIgHgGQABgDAFgDQACgVAHgMQAKgPgFgIQAJgOABgMQABgUgIgCQgHgGgFAFQgGAGgSAFIgBACQgEAMgRADIAAACQgIAKgLAJIgCABIgMAHIgBABQgOAMgMANIgCAAQgIACgEAEQgEAEgBAEIgCABQgMAHgKAJIAAABQgDgLAIABQgBgNAJgNQAYgigGgkIAAgCIgIAFIgBAAIgCABQgHADgGAAIAAACQACALgQAEIABAFQgUAPgXAYQgYAbgcAWIABACQgBAIgHAGQgTAPgHAUIgCgBIgUgVIAAgCQgLgwgkgYIgKAEQgFAZACAVQACASgJgBQAIAFgBAJQgDAZgEAcIgCgBQgKgKgTgBIgBgCQgTgMgQgPIgCAAQgHgFgDADIgBgCQghghgsgKIgDAAQgGApgJAnIgKAlQgBgUAFgSQAIgkgYgUQgXAEgcAVQgVAQgYAMIgBACQggAfgiAdQAMgoAKgsQAGgcgEgaIgUgDQg3BFg3BLQgUgRgOgXQgRgZgSgKIgCAAQgGBDAFA8IgCAAQgdgMgOgQIgCgBQgRgLgWgFIAAACQAdAqAVAxIgCABIhBAJgAmQGPIg0ARIAYgCIAHgFQARgJAagGQAEgBADAHQAKgIAMgFQgaAFgZAHgAyjAOIAGgCIABgCIABgCIgIAGgAF4EvIAGgCIAAACIACABIgFADIgDgEg");
	this.shape_17.setTransform(14.3,57);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C6FFFF").s().p("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");
	this.shape_18.setTransform(0.8,-53.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("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pQgCAhgSAgQgXgRAHgjQAGgfgEgeQg3AWgnAkIhJBEQgCADgGgCQADg9APgzQAFgWABgYQgrA3gmA3IgOAXQgHALgNACQgngWgVgmIAAgCQgHAWACAdQADAkgDAaQgjgDgcgXIgCAAIAhBDIABACQgeAKgjAGIgGABIgLADIglAAIAlAAIALAAMAt9AAAIAAgIQgIgGgEgPQgBgCAFgDQAFgDADgHIAAAkIACACIAAAMIgCgGIACAGIAAASgAz2NIQATAbAKAgIAFAOQAEATACAUQAEAnAUAmQgCAPACARIAAACQAPAXAAAbIAAADQALAbAGAnQAHArgKAlQAFADABAJIABAAQgDAWABAkIAAACIAAAAIBBgJIACAAIAAgBQgWgxgcgqIAAgDQAWAGARALIACAAQAOARAdAMIACABIAAgBQgFg8AGhDIACAAQASAKARAZQAOAWAUASQA2hMA4hEIAUADQAEAagGAcQgKAsgMAoQAigdAggfIABgDQAYgLAVgRQAcgUAXgEQAYAUgIAkQgFASABATIAKgkQAJgnAGgpIADAAQAsAKAhAhIABACQADgDAHAEIACABQAQAPATAMIABABQATACAKAKIACABQAEgcADgZQABgJgIgGQAJACgCgSQgCgWAFgZIAKgDQAkAYALAwIAAABIAUAVIACACQAHgUATgPQAHgGABgIIgBgCQAcgWAYgbQAXgYAUgPQAHgFgIAAQAQgFgCgKIAAgCQAGAAAHgDIACgBIABgBIAIgEIAAACQAGAkgYAiQgJANABANQgIgCADAMIAAgBQAKgKAMgGIACgBQABgFADgDQAFgEAIgCIACgBQAMgMAOgMIABgCIAMgHIACAAQALgJAIgLIAAgBQARgDAEgMIABgDQASgEAGgGQAFgFAHAGQAIACgBAUQgBAMgJAOQAFAIgKAPQgHAMgCAVQgFADgBADIgBAAQACAKgGAFIABAAIAKgJQANgMAKgNIABgCQAKgCAKgJIACgBIAQgDIADAAQAgAbAbAiIABACIBwBJIACACIAAgBQAEgGABgXIADhbQAAgPALgIQAKAEAFAUQAFASAOAKQAIAhAfAYIACABQAghVAdhfIABAAQAMAHACARQAGAyAoAaQBQgeA9goIABgBQAFAFACAJIAAADQgiBAgoA6IgBACIABAAQAtgJAogTQARgI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gNATADIADAAIABgwIABgOIABAAQAEgJALgBIAFAAIAFAAQAFgGAAgNIgCAAQgBgHgEgEIAAgDIACgdIABAAQARgcAZAOIADABQAVgaAigOIACAAQALABAEAJIgBADQgDAjAXgSIACAAQAUgBAJAWIAAACIAFAZIACAAIAWAQIABAAQAIgdAYAHIABABIAAgBQAAgXALgVQANgWAaABQAFgBAFgPQAKglAZgLIADAAQAYALAJAaIAAABIABgCQAMgLAVgEQAFAGABAFQAGAXAVgCIACABQARAMAKATIAAACIABgDQAng9BCggIAAgDQgCgLgDgJIAAgCQAjhiBcgpIADAAQALgDARgJIADAAQAIAAgGgHIgCAAIgCAAQgbAAgOgRQgsgEgtAGQgrAHgggJIAFgCQAqgRAygIQAmgHA1gHIAAAAIgBgCQgOgVAAgYIAAgCQAtACAiAaQADgOgBgFQgCgiARgPIACABQARAcAPAdIAAACIAAgBQA6gVA4gEIgBAAQgfAXgZAcIAzgJIAzgKQA/gLAxADIAAACQg6ASgyAaQAmADAzgBQA2gBAsAQIhGAIQgjAEgcALIgBAAIACABQAYASAkAIIABABQARARASAEIABABQAMAGAGAMIgCAAIg8gHIgBgBIABABQARAMAMASIAAADQADAZAOANQAhABAtALQB1AbBFBUIABhFIgBg9QgDgxAChGIAChaIAAhPQAAgugEgkIAAgBIgCAAIgMAAIgBAAIAAgBIADgCQAFAAADgDQAJgFgBgQIgDhgIAAhsQAAg4ADghQACgRgLgJIABgDQAFgQgHgMIgBgBIABAAQAHgIgBgNIgBhBIABibIAAgWQgLACgGAAQhggBhzABQgxAAgZgFQgXAFgXAAQgjgCgbABQg2ADg7gCQgogBgyACIggABIgBgBIgJgDQgSAGgggBIgLAAIhJgBIgBAAIg0gBQg8gBguABIgMAAIAAAAIhWAAIgGAAIgBAAIgBAAQglgBg4ACIgsABIgjABQgqABgjgFIgCAAQgTAIgUgIQgSAFgRgCQgugCgigBQg8AAhDACIhNACIiiABIimABIh/gBQgngBgoAFQgdgIgdABQgfACgYAAIhqABIgJAAIiyAEIgwAAIhMAAIg6AAIh/AAIhUgBIivgBQheAAhgAFQgGgIgLACQgZACgngBQgzgCgmAHIgCAAIAAAIQACCFgFCQQAFBfAABVIAADDIABCJIABA7IABBLIAAAbIgBBsIgBAoQAAAcABAPQACAmAAAxIAABWQA1gyAzg1QAfggAmgaQAcgZANgcQgKgJAAgMIgCACQgJANgMgBIgBgCQgOANgLAQIABAAQARAEADADIgCABIgBACQgTgBgOgMIAAgCQgDgOAMgYIAAgCQgWAKgNgFIgBgBQgEgTATAGIAAgCQALgHgDgIIgBgBQgTgHgPAEIgCAAQgRgGgYgEIAAgCQAAgKAKgGQAGgEAKgBQAHgCAIgHQgQgBgJgGQACAEgEAFQAAAHgEADQgEACgIgCIAAAAQgNgEgGgJIgBgCQgFgXANgPIACgBIAAgCIACABIAAABIACAAQAKgOAFgEQgKABgCgBQgQgLAEAMIAEABQgGANgWgIIABgDQAWgdAXgRIgBgBQgPgLgLgOQgEgCgCgGQgFgNAHgZIgBgCQgMgQgHgWQASAFAGAGIACgBQAIgIgFgPQAGgFAHABQAHACAIAIQAGAFAHgDQAJgCgLgNQgJgMgNAKIgFACQgFgBAAgNIAAgCQAMgMAGgQIACgBQgBgOgFgKIgCAAQACgPgDgVIABAAQALAWAQADIAAgBQAKgTgWgIIAAgCQgDgJACgKIABgDQAIgNAOgRIACAAQABAKAUAFIAAgCQgJgSATAEIACABQAKgPgEgVIACAAQAOgKAJgPIABgCQgFgKgTALQgNAGgHgKQAIgCgDgYQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABABQACABAAAEQAFAeAbgSIACAAIAHAHQAGAGAEAHQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAFAAQADgJgMgMIgBAAIAAgBQAGgTAVgHIACgBIAHAFQAJAJgIANIgBADQgKAEABAPIAAACIABABQAEgMAGgJQAHgLAKgIIgNgLIgRgLIgBgCQANAIAIADQARAGgEgOIAAgDQAGgTALgFIAFAAQACAFABAFIAAACQABAKgJALIAAABIABABQAPgHAUgCIgJgDQgJgDgEgKQAUADAPAMIAHAAQAPABAOgFIABgBIAAgDIAAgCQgmACAAgkIAAgCQAGgSAUgDIADAAQgEAGgMALQgFAEABAJQAKAUAaACIADAAIAAAGIAcgNIgXgWIAAgCIAKgKIAcAJQADAIAEAAIADAAIACgEQBJATBZAAIARAAQgGAGgBAIIABAAQAKAGAFAMIAGAFIAPAKIgGgYIABAAQAWgLAcgHIAAAAQASAAAVgEIAAABQgZARgcAPIAAABIABAAQASgCAYgHIADAAIAPgRIAAgBIABAAIAMgSIAIAFIAAAAQgVAQAFARIABABQgBAYgSAKIAAACIAAAAQAfgFAWgKIACAAQAJAGgGAEIAAACIgqAOQARAIANAMQAFgGACgJIAAgCIAFAAIABAAIAAAAQAXgBAigGQAEAAAFACQgRAQgZgBIgCAAQgMgBAFAHIAKgBQAKABgLAPIgBAAQAQAJAZgNQAMgHgDALQgGASAZgCQAEAAgEAAQgLALAEACIACAAQAWgHAOAIIAAABQgSAJAHAMIACAAQATAAANAPIgBAAQABAPARALQAFAEgGAGQAFAKARgHIACgBQgHgpgVgfIgBgCQgDgHADgIIAAgCQgKgagEgjIgCgNQgFhBARhYIAEgUQAWgeABgiQANgbATgXQAOgRANgUQANgCANgPQAQgQAPAGQAIAMAAADQAAADgHgGIgBgCQglAJgaAgQgoAugSA5IAAABQgGARgDASIgDATIgDAUIgFArQAKgRADgaQADgTAEgSQAEgSAHgQQAdhNBAgnQAGgEAHgCQALgEAIgFIABgBIABgBQAFgEAFgGQgKgkAOgkIAAgDQAQgNAPgGQANgFAOABIACAAQAHgHgKASQARgKAWgEIADAAQAJAOgTgDIAAABIAEADIABACIACAAQALADASgDIAEADQAIAPgEAAQgCAAgGgDQgLgFgEAMIAAABQgNAEALAEIgBABQgOANgJARIAAABQgNAFAGgRIAAgCQgOADgFAUIABACQASAYgTgCIgBAAIAPATIgBABQgEgDgHAFQgQALgNAOQgPAQgLASQgFAVgFAWIgBAGIgBAJQgFAegBAeQgBBFAaAsIAKAVIAJAUIAIAaIABAAQAMATANARIAAgCQgIgWABgQIgBgDQgJgHAAgRIAAgCIgBAAQgEgGgMgHIgEgCIAAgCIAAgRIACABIACABQAfAWAWArIADAAQAbAIAcANIACABQAJAAAHgCIAMgCIAFgCQAKgIAIgJIAFgHQAFgFADgHQAOgRAJgaQAQgtAKgoIAAgDQgEgZgPgXIAAgCIgHgxIgCAAIAAgBIgBgCIAAAAQgKgegGghIgDgBQgLgCgBgHIgCAAQgUAFgQAVIgBAAQAMAGAIALIAAADQgHAZgMgZQgEgEgDAEQgLAPgVAGIABgDIABgDQAKgVAUgMIAAgCQAAgJAEgHIABgCQANgLAGgJIACgBQAIgEAMAEIACABIgBgCQgdgWgqgCIgBABQgKAMgSgEIgNAJQgRANgNAFIAAgDQAHgPALgHQAKgHAMAAIACgBQAJgEAEgJIACgBQAfgFAYAIIACAAIgBgBQgNgNgQgMIgDAAQgNAEgMAAQgLABgJgDIACAAIA1gRIACAAQALAEAQgBIAAABQAhAMAWAXIAAABIAhALQA7A4AfBVQARAtgEA/QgCAugFAkIgYCYIgCALIABAEQAFAKAJAHIADADQACAEAEACIAHAIQADAUAHAHIAAACIACArIAEAHQADAegJAcIABAAQACANAGAGIAAADIgCAKQgBALAIAAQgBgCABgJQAEgWAPgOIAAgDQACgQgCgRIACgBQALgggDgWQAVhHAFhMQABgeAAgUQgBhGAFg1IAAgEQAEAAACgDQA+hFBWguIACgBQAdgKAdgVIACAAQAQgEAWAEIgBACIggAjQgWAXgWATIgCABIADAAQAMgDAHgJIACgBQAWgEAKgLIABgBIACAAQASgJAcAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQgNAkgkAYIgCABIACAAQAngRAfAMQgaAZgfAMQghAOgZANIgCABIACAAQAbgJAggBIAIAAIAAgBQAdgNAVAMIgCAAQgxAng/AVIgDAAQgUABgUAHIgCAAQgKAogbAYIAAACQgOCBgRB9IAAABIABgBIAqhHQAUgQARgUQBnhvCag+IADgBQAPgGAOADIACgBIBNgOIAAgCQAQgRAKgWIAAgCQgVgQgPgWIgCAAIgIABQgfADgYgYIAAgCQgMgbAFgdIABAAQAOggAVgXIACAAIARACIAKABIAFAAIAAgCIgBgBIgBgCQgFgHgHgCQgGgCgJACIgBgCQgRgVAEgfIACABQARADgFAZIAAACIANAJIADADIADACIAAABQADAPAMAAIAEAEIAAAAIABACQADAKgIAHQgHABgEgCIgEgCIAAAAIgBACIgBAFQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCgFIgBgGQgIgGgGAGQgeAgAGA4IAAACQASAVAbABIADgIQAEgUAPAEIgBgDIACgCQALACgMARIAAADQAGAZAUALIACAAIADACQAGAGAJAFQAEAHAIAFQAgATAyAFIAQACQAfABARgBIAAgCQAegZALgrIAAgCQAChWgmhCIgDgBQgRgLgagCIAAgDQgDgPgJgJIgBgBQANgOgMgQIgBgBQgCgHACgEQABgFAHgCIABACQAJATAAAbIABAAIAGATIACAAQAKAEAMABIAAABQANAJALAJIAAACQAGARALAKIAAACQAeBNgUBFIAAABQgHAXgNAXIgCAAQgLAIgNAFIgDABQg1ACg7gOIgCAAQgGApAJAiIAAADIAAAAQAAATAHARIABAQIABACIABACIgCAIQgCAFgEADQgGAHgCAHIgHAFQgBADgCADQgUAWgQAaIgCABIgEgBIAAgBQgiAmgkAkQgVAIgQASQgdAdgaAhIgQASIgMALIgCACIAAADIAEgEQgfAjghAhQgRAQgHAWIgBgEIAAgDIgBACQgRAgABA8QAOgDAKgGQAdgPAmAHIAAACQg+A+hOAsIBjgQQA7gKA2AOQgNAMgRAJQgRAJgUAGQgsANgcAQQAiAAA5AEQA3AEAiAXIgCAAQgyAYhJABQAZAFAVAGQAsALAeAYIABAAQAQANAMAQIgCAAQgOAHgWgCIgBgBIg2gOQALAMAOAIQAoAXATAsQgDABgCAAQgigCgggGIgBgBIAAACQAhAnAdArIgBAAQACAKgBAPIgBABQgNAKgKgLIgBAAQAHARANAaIgBAAQAEAVgFANIgBABQgLAEgKgKIgBgCIAAACgAzaCSIgCAAQgFAJgMACIgCABIACAIQgCAEADAJIACAFIAAAAIAAACIABABQAHAYAAAZQAAADABADIAAA0IAAADQA4gbA3gfIAAAAIAUgLIACgCIAIgCIgCADQAhgMAUgMQAGAAAHgEIAAAAIAAgBQAngKAigOIgBgBIgDgCQgBgGADgEIACgDIAAgMIAAgDQAJgQAGgRIACgCIAAgEIAAgDIAAAAQgGg0AEg9QADg2gFgzQAGgUAFgVIABgCIgBgBQAFgLgBgNIgBgPIACgNIAEgaQAGgIACgLIABgGIAAgMIACgGQAIgXAEgXQAIgRAGgSIADgDIgBgDIAAAAQgBgHAFgHIAEgGIgBAAQAFgFgEgEQAHgQAJgPQAIgNABgJIADgFQAFgHADgIIALgOIAFgLQAFgFADgHQAGgMADgNIAJgMQAEgGAEgEQAIgIACgKQAGgYgPgHQABgVgHgUIAAgCQgIgJgEALQAHAJgHAIQgKALAPAKIgIAAIgOAIQgngGggAIIAAACQAKAOAOAKIgBACQgLAMAJADIACgBQAYgagTAZIgBAAIAMABIAAALQgNABgOgCQgGAPgOgDQgSgDAEALIAEAAQgEAJACALIABAEQgCARgJAQIgcA0IgBACQgPANABATQAAAGADAEQAFAGAGgBQAPAFAIAOIAAABIgGATIABgFIAAgDQgLgUgVABIgLgOIgEgFIABAAQgBgGAEgDQgGADgGgCQgLgJgPgCIgDAAQgXgKgQgFIAAgCQADgeAFgQIABAAQARgTAXgOIAAAAIAIgDQATgLAVAFIAGACIABAAIABABQANAEALgHQAHgFACgHQADgMgHgJQgCgDgDgBIgOAAIgHgKIgCAAQghgEAaAKIACABQgXAAgbgLIgCABIgRANIgDABQgFACAAgKQAHABgCgDIAAgBIABgGQgCgLAUgCIACAAQgFgHgcACIAAACQgTABAFAMIgDAAQgIgBgSAKIgCAAQgngDgHgQIABgBQAPgLANgOIgDAAIgGgCQgLAHgOAAQgEANgPABIgBACQgLATgMgCQgEgDgCADQgWAogpAWQgTAKgKgEIgCAAQgFALgDAGIgCAAQgWAMgMAYIABAEQAZAMAIAaIgCABQgJARgPALQgPADgJAIQgIADgHAKQAAAHACADQgCAKACAMQABAMAEALQADAKAEAKQAKAVAQASQAgAiAnALQAOAEAQABQAPACAQgBQAJgBAHgDIADgBQAZgGADgSQACgLgFgOIgDgHIgCgHIgKgfIgHgUQgUgyASgzIACgGIAEADQADAMAIgBIADADQAHAIAGAIIAFAHIAAAAQApAlAuAgIAAgCQAAgJAGgEQAKgIAAgIQAUgEAaAOQAJAGAKgGIACgDQAJgCAFgGQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBIgDAKIgKAHIgDADIAAAAIgTAHQgVgCgHAIIAAABIgDACQgFAFgGAEIgKAFQgIAFgHAHIgEADQAAgEgPAFIgGALQgKAMgDALQgIALgLAIIgFADQgBABAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIgEAHQgGAFgEAFIgDAEQgOALgSAGQgWAGgYAAIgiABQgPgFgHADIAAADIAAABQgHACgFAEQgKAHgFALQgCAEAAAEIgCAEIgBAAQgEgCADAEQgFAKgBAKQgBAKADAHIAAADQAAAGgDAAIgEgCQgDgIgJgBIgEAAIgDACQgDAEgBAEIgWAHIAKARIABADQAGAJAFALQAIAVAGAUIAPAuIAUA2QACAFAFADIADABQABAHAEABIADABIAcgIIADAAIgcgwIgBgDQAJACAFAFQAGAFADAIIABAAQAGAGgDAEIgBACIAWAOIACABQAUgGAEgFIAAgCIgPgZQAAgHgEgHIgGgQIgFgKQgMgdgVgUQgIgJgMgCQgRgVgGgaIABAAIAEADQADAHAEAIQAHALAMAFIAFABIAMANQAUAhAQAgIABACQAMAGAJAIIAAADQAqA5AEBbQgLgFgGgZQgCgFAAAJQgLAGACghQABgWgOgOQgNAAgLAMIgCABQgCgDgFAAQgHAAgNAFgAsEo6IgJANQgQAbgNAfQgRACgIAWIgBAFIAAAHQgMAHgHATQgIASADAJQgjA4gNBAIAAADIgIANIgCABQgRBWgGBUQgEA6ACA2QABAogDAoIAEABQADAEgBAFIAAADQgGAJgDALIgDAMIgBADQgIAKAAAMIAAAEQgEADgCAFQASgHAQgJQAZgNAWgQIABgBQgLAAAKgTQAGgLACgLQAGgbAGgmQgDgLABgIIAAgCIASgUIABgCQAAgFAGgPIABgBQAEhKAGhLIAAgCQANgWAHgdIABAAQAKg3AVgsIABgCQATgjAbgmIACgBQAHACALgQQALgPALgCQgdAYAigCIADAAQALAFgCgLIAAgBQgChigug6QgCgDgFAAQAHARgHAIIAAgBQgCgQgIgKIgCgBQgTANgNARgAqHhLQANABAMACQAPADAOAGQArARAmAWIABACQAWAVgJAeIADAAQAeAAAegIIAAgCQAMglgFgUIABAAQACgjgIgvIgBAAQgCgHgGgCIAAgDQgBgRgOgNIAAABQgVAFgRAKIgFACQgKgCgKACQguAGgUgSIgBACQgMAFgMgCQgMgCgLgJIAAgCQgHAEgGgDQgEgCgDgEIgIgDQgTgEgRgIIgSgJQgMgFgFgLIgCAFIgHARIgGARQgGAQgEAQQgDAJgEAIQgFATgDAVQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAIgFAUQAigJAqgLIgBAAQgCghgTgbIADABQAKACAEAKIADAHQAKANAGAeQAPgCANAAIAPABgA49ihIgBABIgLAKQgXAMgUAbQgTAZgTAYIgCABQgXANgVAbIAAADQAQgHARgSQASgSAagJQAjgMAdgRQAZgGAZgFIAHAAQAYABAZACIAUACQAJAHAMACIAAAAQACAEAHgDIABgBQAZAJAbAUIACAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBIACABQAMABAIgHIAAgBIAFgEQAJgNAIgQIAEgGQAGgKAFgMIACgDQALgLgCgQQgDgYgYgKQgJgFgGgIQgIgNgOgDIgBAAIgCgBQgJACAAAHIgBADIAAAFIAAAAIAAAAQgTAHALATQgDAMgGAKQgNASgJgJIABAAQAAgQALgMIAAgDQgDgOgJgTQgCAHgFAEQgSAQALAQIgBABQgQAJgFgQIAAgBQAAgPARgUIABAAQgFgUgNgNIAAgBQgNAFgBANIABAAQAIAWgMAaIgFgCQgKgPAIgQIgBgBQgBgNgMgBIgBACQgLASgHAGQAAABAAABQgBAAAAAAQgBAAgBAAQAAAAgBgBIgBgBQgmAVggAdgAstjNQgNAZADAeIgDArIABAAIgBAGQgCAHAAAHIACAEIgFAhIgBAHQgCALAGgCQADgCAFABQALACAEgRIACAAIANgEIAAgCIAAgEQALgdAFgeIAAgGIAAAAIACgDIARgyIAAgGQADgDACgFIAAgDIAEgKIACgGIABgDQADgFABgEIACgCIADAAIABACQABgPAEgPIADgDIAAgCIABgFIAXhAIAAgBQAHgXAIgXIABgBQACgEABgEIABgDIAAggIAAgBIgBgBQgJgGgFADIgGAAIADgEIgHABQgQACgNAQQgOAQABAPQgFAHgDAJIgFAWIgRAjIgBACQgMAsgQAhIAAABIADgBIgJAUgAmAlIQgkAhgUAwIgCABIgPAYIABABQAHAPgFARIAAABQALACADAJIABABQAFAFgEAGIACAAQADAGAFADIAAADQAOAnAFAmIAAACIABgCIAogwQgWgvAFg9QACgRAHgXQALgfgRgaIgCABgAiWjfQgUAsgNAyIAAADQAA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");
	this.shape_19.setTransform(0.6,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene4, new cjs.Rectangle(-179.1,-135.9,359.5,277.6), null);


// stage content:
(lib.interj_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		playSound("scene4wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80));

	// main
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZBNQgDgDAAgEQAAgKAVgvIgjhCIgEgHQgDgFAAgDQAAgEADgDQADgDAEAAQAEAAADAEQAQAXASAqIAPghQAIgSAHgNQADgFAFAAQAEAAADADQADADAAAEIgBAEIgiBJQgMAagGASIgGATQgDAHgGAAQgEAAgDgCg");
	this.shape_20.setTransform(433.6,368.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAKAAAAAQQASgSAWAAQAIAAAEAGQAEAGAAAMIAAAHQgBAMgJAAQgIAAAAgKIgBgGIAAgJQgPACgJAHQgIAGgGANIAAA1QAAAKgKAAQgIAAAAgKg");
	this.shape_21.setTransform(424.1,365.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgTANgUQAOgYASAAQAJAAAMAFQAPAGAAAHQAAAEgCADQgDADgDAAQgDAAgCgCIgEgDQgGgFgNAAQgJAAgKASQgJARAAAKQAAAOAJAHQAIAHAMAAQAGAAAHgEIALgGIAEgBQAEAAACADQADADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_22.setTransform(413.9,365.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGBEQgCgCAAgDIAAgMIAAgLIgBg4IgXgCQgIgBAAgJQAAgEADgCQACgEAEAAIAVACIAAgNIgBgMQAAgEADgDQADgCAEAAQAHAAACANIABAJIgBAGIAAAGIAOgCQAKAAADABQAGADAAAHQAAAEgDADQgCADgFAAIgEAAIgFgBIgNACIABA4IAAAFIAAAFQABAVgKABQgDgBgEgDg");
	this.shape_23.setTransform(404,364.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgNADgSQABgIAIAAQAEAAADADQADACAAAFIgBAOIgCAPIABAbQABAMACAHIAHACIAGABQAMAAAPgEIAAgUIgBgSQAAgVACgPQABgJAJAAQAEAAADACQADADgBAEIgBAlIAAAUIAAAVIAAAHIABAGQAAAFgDACQgDADgEAAQgIAAgCgJg");
	this.shape_24.setTransform(394.1,365.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPAAAUQgBAVgLAPQgMASgUAAQgQAAgMgNgAgQgTQgHALAAANQAAAOAIAIQAGAHAJAAQAJAAAIgIQAIgIAAgOQACglgWAAQgNAAgIAOg");
	this.shape_25.setTransform(383.4,365.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAKAAAAAQQASgSAWAAQAIAAAEAGQAEAGAAAMIAAAHQgBAMgJAAQgIAAAAgKIgBgGIAAgJQgPACgJAHQgIAGgGANIAAA1QAAAKgKAAQgIAAAAgKg");
	this.shape_26.setTransform(367.8,365.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPAAAUQgBAVgLAPQgMASgUAAQgQAAgMgNgAgQgTQgHALAAANQAAAOAIAIQAGAHAJAAQAJAAAIgIQAIgIAAgOQACglgWAAQgNAAgIAOg");
	this.shape_27.setTransform(357.2,365.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiBDQgOgOAAgWQAAgaAOgPQAOgPAVAAQALAAAHADIAJAHQABgpACgOQABgJAIAAQAJAAAAAJQAAAOgEAuIgBAcQAAAhADAQIAAADQAAADgDADQgCADgEAAQgGAAgDgJQgHAFgIADQgHACgHAAQgVAAgNgNgAgWACQgIAJAAAUQAAANAJAJQAJAJAMAAQAHAAAFgDIALgIIADgDIAAgRIAAgMIAAgLQgEgIgGgDQgGgEgIAAQgQAAgIAJg");
	this.shape_28.setTransform(340.2,363.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgIIAAgJQAAgWgHAAQgLAAgJANQgJAMgFARIgBAJIgBAKIABAJIAAAJQAAAEgCADQgDACgEAAQgFAAgCgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgKQAAgDADgDQADgDAEAAQAJAAABANIAAAMQAQgXARAAQAPAAAGAOQAFAJAAATIAAAKIAAAIQAAAHACANQACANAAAJQAAADgDADQgCADgFAAQgIAAgBgJg");
	this.shape_29.setTransform(329.4,365.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgNADgSQABgIAIAAQAEAAADADQADACAAAFIgBAOIgCAPIABAbQABAMACAHIAHACIAGABQAMAAAPgEIAAgUIgBgSQAAgVACgPQABgJAJAAQAEAAADACQADADgBAEIgBAlIAAAUIAAAVIAAAHIABAGQAAAFgDACQgDADgEAAQgIAAgCgJg");
	this.shape_30.setTransform(318.7,365.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPAAAUQgBAVgLAPQgMASgUAAQgQAAgMgNgAgQgTQgHALAAANQAAAOAIAIQAGAHAJAAQAJAAAIgIQAIgIAAgOQACglgWAAQgNAAgIAOg");
	this.shape_31.setTransform(308,365.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgbA2QgOgFAAgKQAAgEADgDQACgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEAAgMQgBgUAUgJIASgGIASgGQAEgCAFAAQAEAAADADQADACAAAFIAAAIIABAJQABAEgDADQgDACgEAAQgFAAgDgDQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEALAHQAQAJAAAUQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_32.setTransform(297.8,365.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAJAjIgSgBIgJABIgJAAQgJAAAAgIQAAgIAIgBIATgBIASAAIATABQAJAAAAAIQAAAJgJAAIgTAAgAgPgRIgHAAIgGAAQgEAAgDgCQgCgDAAgDQAAgHAIgCIAOAAIAtAAQAIAAAAAIQAAAJgIAAg");
	this.shape_33.setTransform(281.7,364.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF9900").s().p("AhBBMQgDgDAAgEIABgNIAAgMIABgSIAAgSIAAgSIAAgUIgCgTIgBgSQAAgFAEgDQAEgDAFAAQAFgBAIALQAYAlATAYQAXAcAbAaIAAgMIAAgNQAAgqgDgZIgDgKIgCgLQAAgLALAAQARAAAAA/IgBAgIAAAgIgCAQQgBAKgJAAQgFAAgIgHQgogmgyhGIgBAXIAAAUIAAAZIABAZQAAAagKAAQgGAAgDgEg");
	this.shape_34.setTransform(263.2,363.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF9900").s().p("AgxA9QgUgSAAgcQAAghAUgbQAXgfAgAAQAgAAAPAOQARAPAAAhQAAAggSAcQgWAfggAAQgbAAgUgQgAgighQgPAXAAAZQAAATAOAMQANALAUAAQAXAAAPgYQAOgWAAgZQAAgXgKgKQgKgJgYAAQgXAAgRAXg");
	this.shape_35.setTransform(247.2,363.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF9900").s().p("AgqBIQgDgDAAgEQAAgEADgDQADgDAEAAIAVgCIAAgSIAAgRIAAgQQgBgWADgiIgMABIgOAAQgDAAgDgDQgDgDAAgEQAAgJAJgBIAegBQASAAAdAEQAJACAAAJQAAAEgDADQgDACgEAAIgQgBIgQgCQgCAcAAAZIABARIAAARIgBARIAgAAQAEAAACADQADACAAAFQAAAEgDADQgCADgEAAIgRAAIgQAAIgTACIgTACQgEAAgDgDg");
	this.shape_36.setTransform(233.7,363.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF9900").s().p("AgGBIQgDgDAAgEIAAgFIABgEIgBgOIgBgPIgCgmQgCgcAAgMIgJABQgWAAgMgEQgIgCAAgHQAAgEADgDQADgEAEABIAQABIAQABIARAAIARAAIAXABIAWABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgWgBQgPgBgIAAIgHAAIADAsIACArIABAKIABALQAAAGgDAFQgCAHgGAAQgDAAgDgDg");
	this.shape_37.setTransform(222.2,363.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF9900").s().p("AgoA8QgNgPAAgVQAAggAbgjQAYgdAWAAIAJABIAGABQAEgFAFAAQAHAAACAJQABAIAAAMQAAAEgCADQgCADgFAAQgGAAgEgHQgCgGgDgBQgCgCgIAAQgOAAgQAWQgYAdAAAZQAAANAIAJQAJAKALAAQAJAAALgGIARgLQAGgEACAAQAFAAACADQADADAAAEQAAAEgDAEQgaAXgaAAQgUAAgOgQg");
	this.shape_38.setTransform(208.8,363.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF9900").s().p("AgqBLQgKgIABggIAAgNIABgQIgBgFQAAgDACgCIABgqIAAgLIgBgKQgBgMALAAQADAAAEADIAVgFIATgBQAYAAAOAFQAGADAAAHQABAEgDADQgDADgEAAIgDAAQgRgFgPAAIgRABIgUAFIABAKIgCAlIArgEIAWgCQAFAAACADQADADAAAEQAAAIgJABIgWACIgtAFIAAANIAAALQAAAWACAEQACACAOAAIARAAIATAAIAFgBIAGAAQAKAAAAAKQAAAIgIACQgJABgeAAQgeAAgJgIg");
	this.shape_39.setTransform(196.6,363.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF9900").s().p("AgnBEQgTgOAAgSQAAgMAKAAQAKAAAAAMQAAAIALAIQAMAIAKAAQAHAAADgxQABgXAAgjIAAgKIgGAAIgLgBIgLAAQgFAAgCgDQgDgCAAgFQAAgKANAAIAKAAIAJAAIASAAIASgBQAXAAAAALQAAAEgDADQgCAEgFAAIgGgBIgHgBIgLAAIAAAMQAABIgJAhQgHAWgOAAQgSAAgQgMg");
	this.shape_40.setTransform(183.4,363.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF9900").s().p("AgxBKQgDgDAAgEIgBgXIAAgXIACgaIACgbIgBgOIgBgPQAAgGADgEQAEgFAGAAIAYACQANACAIAFQAoAVAAAeQAAAPgOALQgKAJgRAFQAfAQAPASQACADAAAEQAAAEgDADQgDADgEAAQgDAAgEgDQgggggngLIABATIABATQAAAEgDADQgDADgEAAQgEAAgDgDgAgegrIAAAMIgBATIgCATIAEAAIAFAAQAYAAAMgHQAFgCAFgEQAFgGAAgEQAAgNgPgMQgNgLgQgCIgOgBg");
	this.shape_41.setTransform(170.6,363.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF9900").s().p("AgqBLQgKgIAAggIABgNIABgQIgCgFQAAgDADgCIACgqIgBgLIgBgKQAAgMAKAAQADAAADADIAXgFIASgBQAYAAAOAFQAGADAAAHQAAAEgCADQgCADgFAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAlIAqgEIAWgCQAFAAADADQACADAAAEQABAIgKABIgWACIgtAFIAAANIAAALQAAAWADAEQABACAOAAIARAAIATAAIAFgBIAGAAQAKAAAAAKQAAAIgIACQgKABgdAAQgeAAgJgIg");
	this.shape_42.setTransform(158.1,363.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF9900").s().p("AgGBIQgDgDAAgEIAAgFIABgEIgBgOIgBgPIgCgmQgCgcAAgMIgJABQgWAAgMgEQgIgCAAgHQAAgEADgDQADgEAEABIAQABIAQABIARAAIARAAIAXABIAWABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgWgBQgPgBgIAAIgHAAIADAsIACArIABAKIABALQAAAGgDAFQgCAHgGAAQgDAAgDgDg");
	this.shape_43.setTransform(145.6,363.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF9900").s().p("AhBBMQgDgDAAgEIABgNIAAgMIABgSIAAgSIAAgSIAAgUIgCgTIgBgSQAAgFAEgDQAEgDAFAAQAFgBAIALQAYAlATAYQAXAcAbAaIAAgMIAAgNQAAgqgDgZIgDgKIgCgLQAAgLALAAQARAAAAA/IgBAgIAAAgIgCAQQgBAKgJAAQgFAAgIgHQgogmgyhGIgBAXIAAAUIAAAZIABAZQAAAagKAAQgGAAgDgEg");
	this.shape_44.setTransform(130.1,363.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF9900").s().p("AgqBIQgDgDAAgEQAAgEADgDQACgDAEAAIAWgCIABgSIgBgRIAAgQQgBgWADgiIgMABIgOAAQgDAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAEQAIACAAAJQAAAEgDADQgDACgEAAIgQgBIgQgCQgCAcABAZIAAARIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgQAAIgQAAIgTACIgUACQgEAAgCgDg");
	this.shape_45.setTransform(116.6,363.5);

	this.instance_6 = new lib.scene4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(275,189.8,1.112,1.112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(80));

	// btn
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '4623B0F6EA594B4F8CAF64A3EFCD63AA',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmInt.mp3", id:"bgmInt"},
		{src:"sounds/scene4wav.mp3", id:"scene4wav"}
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
an.compositions['4623B0F6EA594B4F8CAF64A3EFCD63AA'] = {
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