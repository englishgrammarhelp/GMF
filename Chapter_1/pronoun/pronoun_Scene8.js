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


(lib.youplwordstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AAVAsQgMAGgOAAQgMAAgIgFQgJgGgCgLQgDgZAAgSQAAgNADgQQABgIAHAAQAEAAADACQADADAAAEIgBAOIgCAOIABAZQABALACAHIAGADIAGABQAMAAANgEIAAgTIAAgRQAAgUACgPQABgJAIAAQAEAAADADQACADAAAEIgCAjIAAATIABAUIAAAGIAAAGQAAAEgDADQgCACgEAAQgHAAgCgJg");
	this.shape.setTransform(8.7,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AgbAnQgMgNgBgVQgBgUAMgQQANgTAWAAQASAAAKARQAHAOAAATQAAAUgLAOQgLARgTAAQgQAAgLgMgAgQgSQgGAKAAANQAAANAIAIQAGAGAIAAQAJAAAHgHQAHgIABgNQABgjgUAAQgNAAgIANg");
	this.shape_1.setTransform(-1.5,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AgTBHQgDgDAAgEQAAgDAJgQIALgVQgRgWgEgLQgFgLgJgOIgQgYIgCgFQAAgEAEgDQADgDADAAQAFAAADAFIAHALIAOAUQAGALAEAKQADAIAJAMIAWgzIAKgTQACgHAGAAQAEAAADADQADACAAAFQgBAEgFAJIgFAKIgQAoIgRAmIgMAUIgEAKQgDAGgGAAQgDAAgDgDg");
	this.shape_2.setTransform(-12.6,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.youplwordstill, new cjs.Rectangle(-20.4,-15.2,36.1,30.5), null);


(lib.youplsentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhMBlQgUgYgGgwQgCgXgBg/IABgnQABgPACgHQAFgMALAAQAQAAAAAdIAABkQAABnBHAAQBFAAAAitIAAgRIgBgOQAAgKAEgJQAFgKAJAAQARAAAAAYIAAAVIAAAVQAADFhmAAQg0AAgbgfg");
	this.shape.setTransform(25.4,-5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhWBqQgjgfAAgxQAAg6AjgwQAng2A5AAQA4AAAcAaQAcAaAAA5QAAA6ggAvQglA3g5AAQgwAAgigdgAg8g5QgbAmAAAtQAAAhAZAVQAXAUAjAAQAoAAAbgqQAYgmAAgtQAAgpgSgRQgRgQgqAAQgpAAgdAqg");
	this.shape_1.setTransform(-1.5,-5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkCDQgGgFAAgHQAAgGAQgeIAVgnQgegogJgVQgIgUgSgaIgdgtQgCgFAAgEQAAgIAFgFQAFgFAHAAQAJAAAFAIIAOAWQASAaAGAKQANAVAHASQAGAOARAYIAnhfIATgkQAEgMALAAQAHAAAGAFQAFAFAAAIQAAAHgJAQQgEAHgHANIgdBJQgRAogPAeIgVAnIgJASQgFAKgKAAQgHAAgFgFg");
	this.shape_2.setTransform(-27.3,-5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.youplsentstill, new cjs.Rectangle(-40.1,-33.3,80.2,52.8), null);


(lib.Youpredpointstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AiOBIQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAFgGQAGgGAHgEIgBAAIgBgBIAAAAIAAAAIgBgCIgBAAIgBgBIgBAAIAAgBIABgCIADgBIAFgBIACAAQADgCAEAAIACAAIACgBIACAAIAAAAIACAAQAOgDANgBIAJgCQAjgEAigHQAjgJAigMIADAAQgDgMgBgSIgBgQIAAgJIACgBIAAgBQAQgHAOgJIABgBQAVgDAZAHIAAABQgKAIgVgDIgDAAQgJALgQAGIABAAQATgCAMAFIABABIAAAAIAAAEIgCADIgBABIgHAAQgLABACABQABACANAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQACAHgPADQANACANAEIAAACQAFAVgUgFQAEABgBgGIAAgCQgKAJgKAPIgCAAQgtAQgvALIgDgKIACAKIgBAAQgmAKgoAGIgaADIgpAFIAAgCgAA4g3IABgBIgBABg");
	this.shape.setTransform(-0.2,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiSBLIgBgBIAAgFIABgBQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIABACIAogFIAagDQApgGAmgKIABAAIAAAAQAvgLAugQIACAAQAJgPAKgJIABACQABAGgEgBQAUAFgGgVIAAgCQgMgEgOgBQAPgDgCgIQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBAAgBAAQgNAAgBgBQgCgCAMgBIAGABIACgCIABgDIABgEIgBAAIAAgBQgNgFgSACIgBAAQAPgGAKgLIACAAQAWADAKgIIgBgBQgYgHgVADIgCABQgNAJgQAHIgBABIgCABIAAAKIABAPQACASACAMIgCAAQgjANgjAIQgiAIgjADIgJACQgNABgNADIgCAAIgBAAIgBAAIgDABIgBAAQgEAAgEACIgCAAIgFABQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAIABAAIAHgCQAGABAHgCQAJgEAKgCQAKgCALgBQAFAAAFgCIACAAQA9gKA1gTIgCgBQgOgOADgWIAFgMIACgEIABAAIAAgBIAEgEIAJgGIAGgEIAMgGIAAACIAAAAQAMgDAaAAIACAAIABAAIAGABIAEACIADACIAEACIAEAFQACAHgEAAQgVgBgRAGQASAHgGAHQAAAEgDADIABABQAOAFACARIAAACIAEADIABAIIAAAAIgCABQgKAMgWABIAAADIACAEIgJADQgvAOgvAMIAAAAIglAJIgsALIgFABIgVAEIgNABQgQAAgOgEg");
	this.shape_1.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Youpredpointstill, new cjs.Rectangle(-14.8,-7.6,29.7,15.8), null);


(lib.Youppointstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AiRCCIAAgBIAAgJIAAgCIABgBIAAgDIgBgIIAAgBIABgCIAAgCIAAgDIAAgEIAAgCIAAgBIAAgBIAAgBIABgCIAAAAIADgFIALgUQAGgQAFgRQAVhHAgg8IAAgBIABAAIAAgBQAMgVAMgTIAOgDQAAAAAAAAQAAABABAAQAAAAABgBQAAAAABAAIAQgDIACAAIACAAIAWgCIANgBIAIgBIABgBQAVAAATACIABAAIAAAAIABAAQANACAMAEIAFABQASAFAPAKIAAABQgPAJgXgGIgCAAIgCgBIAAAAIgBAAIgLgBQgGgCgEgEIgDAAQgsgFgbANIgBAAIgBAAIgBABIgJAGIABACQAJASASALQAFgBAEABIABAAQASgBAKAFQAFADADAFQgDAEgEAAIgBAAQgpgDgWAJIgCgBQgRgIgPgLQgGArgQApQgRAogOAoIgBACQgEAMgGALQgQAhgcAVQAAgNgCgNgAAmhjIABgCQAGgVgLADIABAEQABAEAAAFQgRAOgQgTIAAgCQgEgGAGgFIAAgBIACAAQAbgGAbABIAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAABAAAAIABAIIgBABIABACIAAABIAAACQgEAPgLAAIgHgCg");
	this.shape.setTransform(-0.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiSCZQAcgUAQgiQAFgKAFgNIAAgBQAPgpARgoQAQgpAGgrQAPALARAIIACABQAWgJAoADIACAAQAEAAADgEQgDgFgFgDQgKgFgSABIgBAAQgEgBgFABQgSgLgJgSIgBgCIAJgGIAAAAIACgBIABAAQAbgNAsAFIADAAQAEAEAGACIALABIABABIAAAAIACAAIACAAQAXAGAPgJIABAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAAAQgPgJgTgGIgDgBIgBAAQgMgEgNgBIgBgBIgBAAIgBAAQgSgCgVAAIgBABIgIABIgNABIgXACIgBAAIgCAAIgQADQgBAAAAABQgBAAAAAAQgBAAAAAAQAAgBgBAAIgNADQgNATgLAVIAAABIgBAAIAAABQghA8gUBHQgFARgHAQIgLAUIgCAFIAAgBIAAgCIgBgCIAAgCIAAAAIAAgCIAAgBQAghgArhWIAPgcIAEgHIABgCQAJgHAOgCIABgBIAFgBIADAAIAJgDIADAAIAKAAIAAAAIASgBIADgBIAGAAIAIAAQA7AAArAOQAKADgBAOQgSANgdgKIgBAAIAAgBIgCAAIgBAAQgSgEgSgBIgBAAIgBAAQADACAAAEIAAACQABAFgCAEIgBAMIgEADIgCADIAFABQANACAAARQgIAKgQABQgwADgfgOIgBABQgbBQggBKIgLAXIgWAvIgCABQgIAJgNAFIABgJgAAkhoIgCACIABABQAQAGAGgUIAAgCIAAgBIgBgCIABAAIgBgJQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAAAAIAAAAQgbgBgbAGIgCAAIgBABQgFAFAEAGIAAACQAQATARgOQAAgFgBgEIgBgEIACgBQAIAAgFATg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Youppointstill, new cjs.Rectangle(-14.8,-16.2,29.8,32.5), null);


(lib.Youppointfatguystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("Ah7BsQgBgNABgMIAAgDQgEgRgCgSIAAgBIgQgbQgGgKgLgHIABAAIAIgCQAAAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAFAAAEAAQAHgCAGgFIABAAQAEgBADgCIAIgEIACAAIAEgCIACAAIAGgCIACAAIACgBQAGgBAGgDIAGgDIACgBQAGgBAGgEQADAAABgDIABAAIAKgEIADgBQAKgEALgCIAFAAIAYgCIAFAAIAegCIADAAIAOgCIABgCIAAgDIAAgGIAAgDIABgHQABgEACgBIABAAQAGgHAJgGIAEgCIACgBQAJgFAMgEQAMgEAKAAIAEAAIAAAAIAFAAIAAAAIAJACQAKADAIAHQgBAJgOAEIgBAAIgDABIgKABIgDABQgVABgNAMIAagFIADAAIAAACQATAUgeAEIAIAAIABAAIABgBIADgCQAEgBACABIAEABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAEAFgCAFIAAAAQACALgagCQgDAAABACIABABIAAgBIANABIADAAIAAAAIAFAAIACABIACABQAEABABADIADAGQABAGgCAFIgEAEQgDADgHABQgHABgHgCQgMAQgdgCIgBACQgvA6hOAYIgCAAQgcADgfAAIgRAAgAh4gTIAAAAIgJAFIAJgFgAhygVIARgHIABAAIgGADIgEABIgBABIgHACIAAAAg");
	this.shape.setTransform(1.1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhABuIABAAIAAgCIgGABQgbAEgigBIAAAAIgBgHQAoAAAjgDIADAAQBOgYAvg6IABgCQAdACAMgQQAHABAHAAQAGgBAEgDIADgEQADgFgCgGIgCgGQgCgDgDgBIgCgBIgCgBIgFAAIAAAAIgDAAIgNgBIAAABIgBgBQgCgCAEAAQAaACgCgLIAAAAQABgFgEgFQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgEgBQgDgBgDABIgDACIgCABIAAAAIgJAAQAfgEgTgUIgBgCIgCAAIgbAFQAOgMAUgBIAEgBIAKgBIADgBIABAAQAOgEABgJQgIgHgKgDIgJgCIAAAAIgFAAIgBAAIgDAAQgKAAgMAEQgMAEgJAFIgCABIgEACQgJAGgGAHIgBAAQgCABgBAEIgBAHIAAADIAAAGIAAADIgBACIgPACIgCAAIgeACIgFAAIgZACIgEAAQgLACgKAEIgDABIgKAEIgBAAQgBADgEAAQgFAEgHABIgBABIgGADQgGADgGABIgCABIgCAAIgGACIgCAAIgFACIgBAAIgIAEQgEACgEABIAAAAQgGAFgHACQgFABgEgBQAAgBAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgBQADgEAFAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIADgBIABgBIAAAAIABgBIACgBIABAAIACgBIABAAIAJgFIAAAAIABAAIADgCIACAAIAAAAIAHgCIABgBIAEgBIAGgDIAAAAQAIgBAHgEIAHgDIAHgEIAAAAIADAAIADgBIAAAAQAHgEAIgCIABAAQAJgEAKAAIACAAIAIgBQAkgBAdgIIACgCQACgFABgGIAAgCIAMgNIAAgBQAbgQAhgCIADAAIAGAAIAJAAIALABQAKACAFAHQACAOgKADIgCAAIgNACIgBAAQgOACgHADIABAAIACABIAUAhIABACIADALIAAACIABAGQABALgCALIgDADIgEAEQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAIAAABIgHABQgFACgFgBQgEgBgEACIgJAGIgGACIgLABQAAAAgBAAQAAAAgBAAQgBABAAAAQgBAAAAABIgDADIgBAAQgiAxg+ASQgMADgKAGIgFABQgGAGgIADIAAgCg");
	this.shape_1.setTransform(1.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Youppointfatguystill, new cjs.Rectangle(-15.2,-11.2,33.3,22.5), null);


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
	this.shape_5.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAAABtQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAgAhGBSICXiYQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAhGBSIAAAAgAhLBNIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIiXCYIgFgFgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAgABRhGIAAAAg");
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
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhGBSQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbICXiYIiXCYgAhqABQAAApAaAeIAFAFIAFAFIgFgFIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsIAAAAgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAg");
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


(lib.pronountheyouarethegreatest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAWgfQAXggAnAAQAcAAASAJQAWAMgBAYQAAASgTAOQgIAGgcAMIhAAfQAJAOAPAHQAOAHARAAQAMAAAQgEQAUgGAGgJQAGgJAHAAQAFAAAGAEQAEAFAAAGQAAATgeANQgbAMgZAAQglAAgYgTgAgigtQgPAQgGAfIA0gYQAegPANgLQgOgOgaAAQgVAAgNARg");
	this.shape.setTransform(18.8,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAuCBQgDgOgEgZQgDgZAAgQIABgOIAAgNQAAgfgQAAQgVAAgRASQgIAKgQAdQAABBgFAMQgFALgKAAQgHAAgFgFQgGgFAAgHIACgHIABgZIABgaIABh8IABgdQAAgJgBgHQgDgIAAgIQABgIAFgEQAEgFAIAAQAOAAACAPQADARAAANIgCAlQAAATAAATIAAAPQAOgTAQgJQAPgKASAAQAcAAALATQAHANACAeIABAgIADAkQADAUADAPIABAFQAAAHgGAFQgFAEgGAAQgNAAgEgNg");
	this.shape_1.setTransform(-0.9,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKB4QgFgEAAgHIAAgTIAAgUIgChjIgngDQgPgCAAgOQAAgIAEgFQAGgFAHAAIAkADIgCgXIAAgVQAAgIAFgEQAFgFAHAAQAPAAACAZIAAAPIAAAKIAAALIAYgDQASAAAGACQAKADAAANQAAAHgFAFQgFAFgHAAIgIAAIgJgBIgXADIADBkIABAIIAAAIQAAAmgSAAQgHAAgEgFg");
	this.shape_2.setTransform(-19.6,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronountheyouarethegreatest, new cjs.Rectangle(-30,-26.3,60,52.8), null);


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


(lib.pronoungreatestyouarethegreatest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKB4QgFgEgBgHIABgTIAAgUIgChjIgmgDQgQgCAAgOQAAgIAFgFQAEgFAIAAIAkADIgBgXIgBgVQAAgIAFgEQAFgFAHAAQAOAAADAZIABAPIgBAKIAAALIAYgDQASAAAGACQAKADAAANQAAAHgFAFQgEAFgIAAIgJAAIgIgBIgXADIADBkIAAAIIAAAIQABAmgTAAQgFAAgFgFg");
	this.shape.setTransform(62.6,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvBfQgagKAAgRQgBgHAGgFQAGgFAGAAQAGAAAIAIQAEAEAOADQAMACAHAAQAOAAALgDQAQgFAAgLQAAgXghgJIgRgEQgWgEgKgHQgOgJAAgTQABgkAhgPQAKgFAWgGQAXgGAJgFQAHgDAJAAQAGAAAFAFQAFAFAAAHQAAAFACAKIACAOQAAAIgEAFQgFAFgIAAQgJAAgDgHQgDgEgCgOIgnAMQgbALAAAQIAKADQAmAHAUAMQAbARAAAiQAAAcgYAOQgUAMgeAAQgWAAgUgIg");
	this.shape_1.setTransform(45.4,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAWgfQAXggAnAAQAbAAATAJQAVAMAAAYQAAASgTAOQgIAGgcAMIhAAfQAJAOAOAHQAOAHASAAQANAAAPgEQAVgGAFgJQAGgJAGAAQAGAAAGAEQAEAFAAAGQAAATgeANQgaAMgaAAQglAAgYgTgAgigtQgOAQgIAfIA1gYQAegPANgLQgOgOgaAAQgVAAgNARg");
	this.shape_2.setTransform(28.1,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKB4QgGgEABgHIAAgTIABgUIgEhjIgmgDQgPgCAAgOQAAgIAEgFQAFgFAHAAIAkADIgBgXIAAgVQAAgIAFgEQAFgFAHAAQAOAAADAZIAAAPIAAAKIAAALIAYgDQASAAAFACQALADAAANQAAAHgFAFQgEAFgIAAIgIAAIgJgBIgXADIADBkIABAIIAAAIQAAAmgSAAQgHAAgEgFg");
	this.shape_3.setTransform(9.9,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA3BXQgIgGgEgGIgdANQgMAFgHAAQgogBgTgWQgRgVAAgsQAAgoAdgeQAcgdAmAAQAPAAATAIQAXAKAAANQAAAFgDADQgCAGgBAQIgBAlQAAAUADANQABAIAJAWIAEAJIABADQAAAHgEAFQgFAEgHAAQgDAAgIgIgAgcgqQgTAWAAAbQAAAcAKAOQAJAOAUAAQAQAAALgGQAGgDALgKQgFgsAAgXIABgQIADgTIgLgEIgHgCQgaABgTAVg");
	this.shape_4.setTransform(-7.2,5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag6BKQgagWAAgmQAAgrAWgfQAXggAnAAQAbAAATAJQAVAMAAAYQAAASgTAOQgIAGgcAMIhAAfQAJAOAOAHQAOAHASAAQANAAAPgEQAVgGAFgJQAGgJAGAAQAGAAAGAEQAEAFAAAGQAAATgeANQgaAMgaAAQglAAgYgTgAgigtQgOAQgIAfIA1gYQAegPANgLQgOgOgaAAQgVAAgNARg");
	this.shape_5.setTransform(-25.4,5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhCBOIAAh3IABgQIAAgRQAAgSAPAAQARAAAAAdQAhggAnAAQAOAAAGALQAIAKAAAVIgBAMQgBAVgQAAQgPAAAAgRIAAgMIgBgOQgbADgPAMQgPALgKAXIAABcQAAASgQAAQgPAAgBgSg");
	this.shape_6.setTransform(-43.2,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag7CFQgVgFAAgNQAAgPAPAAQAGAAAOADQAOADASgBQAgAAAMggQAIgUABgsQgJARgNAJQgNAJgPAAQgfAAgUgVQgTgWAAggQAAguAagdQAcgdAuAAQAQAAALAEQAKAEAGAJQASAAAAAUQAAAMgDAUIgFAhIgEA4QgBAigGAWQgHAcgRANQgVAQgmAAQgWAAgQgDgAgfhVQgQAUAAAfQAAAZAKAMQAJAMATAAQAQAAAQgSQAPgSACgSQAEgTAEgnQgHgFgHgDQgIgCgIAAQgfAAgSAWg");
	this.shape_7.setTransform(-61.7,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronoungreatestyouarethegreatest, new cjs.Rectangle(-72.9,-26.3,145.8,52.8), null);


(lib.pronounareyouarethegreatest = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.pronounareyouarethegreatest, new cjs.Rectangle(-29,-26.3,58,52.8), null);


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


(lib.Youppredpoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 1
	this.instance = new lib.Youpredpointstill();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,8,0.999,0.999,68.7,0,0,-11.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({rotation:-6.3,x:-11.9,y:4.7},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,0.3,25.5,33.4);


(lib.youplword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.youplwordstill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-15.2,36.1,30.5);


(lib.youplbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFBJQgEgFAAgEQAAgDADgDQADgCADAAQACABAFAEQADAFAAAEQAAADgDACQgCADgEAAQgDAAgDgFgAgGAiIAAgLIgBgMIABgnIAAgoQAAgJAHAAQAJAAAAAJIAABmQAAAJgJAAQgHAAAAgJg");
	this.shape.setTransform(39,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_1.setTransform(32.1,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYBJQgDgDAAgDQAAgKAUgsIghg/IgEgHQgDgFAAgCQAAgEADgDQADgDAEAAQAEAAACAEQAQAVARApIAOggQAHgRAHgMQADgFAFAAQAEAAADACQADADAAAEIgBAFIghBEIgRAqIgGASQgCAHgGAAQgEAAgDgCg");
	this.shape_2.setTransform(22.5,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVAsQgMAGgOAAQgMAAgIgFQgJgGgCgLQgDgZAAgSQAAgNADgQQABgIAHAAQAEAAADACQADADAAAEIgBAOIgCAOIABAZQABALACAHIAGADIAGABQAMAAANgEIAAgTIAAgRQAAgUACgPQABgJAIAAQAEAAADADQACADAAAEIgCAjIAAATIABAUIAAAGIAAAGQAAAEgDADQgCACgEAAQgHAAgCgJg");
	this.shape_3.setTransform(12.9,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfBIQgMgCAAgIQAAgIAIAAIALACQAIABAKAAQAQAAAHgRQAEgMABgXQgFAJgHAFQgHAFgIAAQgRAAgKgMQgLgLAAgSQAAgZAOgPQAPgQAZAAQAJAAAFACQAGADADAEQAKAAAAALIgCASIgCARIgCAeQgBATgDAMQgFAPgIAHQgLAJgVAAQgMAAgIgCgAgQguQgJALAAARQAAAOAFAFQAFAHALAAQAIAAAJgJQAHgKACgKIAEgfIgIgFIgIgBQgRAAgJAMg");
	this.shape_4.setTransform(2.7,2.7);

	this.instance = new lib.youplword();
	this.instance.parent = this;
	this.instance.setTransform(-19,-2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("AFECHQAMgEALgEQCQg0AAhLQAAhKiQg1QiPg0jMAAQjLAAiQA0QiPA1AABKQAABLCPA0QCQA1DLAAQByAABggQADXCjQABgBACAA");
	this.shape_5.setTransform(0,-3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AACA3QgEgFABgLQABgIgDgIQgIgRgOgLIAAAAIgdAAIgBgBQgIgIAJgGIAAAAIABAAIAAgBIAEAAIAEAAIAAAAIgBgBQgLgHALgJQATAEAQAMQAHAGgBAFQALANAHAQIAAACIABgBIABgDIALgnQAAgCABgEIAEgIIAEgFIAGgIQABgGAFgEIAGACQAJACgDAIIAAABIAAAFIgCAJQgDALgGAKQgMAfgOAfQgDAHgGAEQgKgBgBgFg");
	this.shape_6.setTransform(26.5,15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AEVC/QgGgQgMgOQABgFgHgGQgQgMgTgEQgLAJALAHIgEABIgDAAIAAABIgBAAIAAAAQhgARhyAAQjKAAiQg1QiQg1AAhJQAAhLCQg1QCQg0DKAAQDLAACQA0QCQA1AABLQAABJiQA1IgXAIQACgIgIgCIgGgCQgFAEgBAGIgGAIIgEAFIgEAIQgBADAAADIgLAoIgBACg");
	this.shape_7.setTransform(0,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.youplbubblestill, new cjs.Rectangle(-50.6,-22.7,101.2,44), null);


(lib.youplbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 1
	this.instance = new lib.youplbubblestill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-22.7,101.2,44);


(lib.Youppointfatguy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 1
	this.instance = new lib.Youppointfatguystill();
	this.instance.parent = this;
	this.instance.setTransform(-5.5,3.2,0.999,0.999,58.9,0,0,-11.8,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({scaleX:1,scaleY:1,rotation:0,x:-11.8},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-7.1,36.4,40.1);


(lib.Youppoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Youppointstill();
	this.instance.parent = this;
	this.instance.setTransform(-15.6,12.7,0.999,0.999,-11.2,0,0,-14.3,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:16.7,x:-13.7},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-20.9,35.5,37.6);


(lib.textyouplnom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_114 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(114).call(this.frame_114).wait(1));

	// vert3
	this.instance = new lib.VertLine("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(77.8,178.9,0.75,0.85,-33);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({alpha:1},5).wait(61));

	// vert1
	this.instance_1 = new lib.VertLine("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54.1,149.9,0.75,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({alpha:1},5).wait(61));

	// horz
	this.instance_2 = new lib.HorizontalLine("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,157.9,0.9,0.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({alpha:1},5).wait(61));

	// period
	this.instance_3 = new lib.period();
	this.instance_3.parent = this;
	this.instance_3.setTransform(170.8,159.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({alpha:1},5).to({_off:true},10).wait(66));

	// greatest
	this.instance_4 = new lib.pronoungreatestyouarethegreatest();
	this.instance_4.parent = this;
	this.instance_4.setTransform(97.1,162.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).to({alpha:1},5).to({_off:true},10).wait(25).to({_off:false,scaleX:0.8,scaleY:0.8,x:76.1,y:140.8,alpha:0},0).to({alpha:1},5).wait(10).to({alpha:0},5).wait(5).to({alpha:1},0).wait(16));

	// the
	this.instance_5 = new lib.pronountheyouarethegreatest();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-10.9,162.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({alpha:1},5).to({_off:true},15).wait(20).to({_off:false,scaleX:0.7,scaleY:0.7,rotation:60,x:92.5,y:175.9,alpha:0},0).to({alpha:1},5).wait(15).to({alpha:0},5).wait(5).to({alpha:1},0).wait(16));

	// are
	this.instance_6 = new lib.pronounareyouarethegreatest();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-70.9,162.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({alpha:1},5).to({_off:true},20).wait(15).to({_off:false,scaleX:0.8,scaleY:0.8,x:-23.9,y:140.8,alpha:0},0).to({alpha:1},5).wait(20).to({alpha:0},5).wait(5).to({alpha:1},0).wait(16));

	// you
	this.instance_7 = new lib.youplsentstill();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,171);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.58,scaleY:1.58,y:174},9).to({scaleX:1,scaleY:1,y:171},5).to({x:-140},5).to({_off:true},30).wait(10).to({_off:false,scaleX:0.8,scaleY:0.8,x:-92,y:148,alpha:0},0).wait(5).to({alpha:1},0).wait(25).to({alpha:0},5).wait(5).to({alpha:1},0).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,137.7,80.2,52.8);


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


(lib.Youplural = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.youplbubble();
	this.instance.parent = this;
	this.instance.setTransform(-40.7,-66.5);

	this.instance_1 = new lib.Youppointfatguy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.2,-9.6);

	this.instance_2 = new lib.Youppredpoint();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.3,5.9);

	this.instance_3 = new lib.Youppoint();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-29.6,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AghAAQAAgIAKgGQAKgGANAAQAOAAAKAGQAKAGAAAIQAAAJgKAGQgKAGgOAAQgNAAgKgGQgKgGAAgJg");
	this.shape.setTransform(47.9,71.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AXjJDIAAgBIAA4VMgvFAAAIAAXSIAAAEIAAHRMAvFAAAg");
	this.shape_1.setTransform(8.9,-5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC33").s().p("AApDbIAAgBQgLgBgNgFIgBgCIgEgGQgGgIgEgJQgDgJgDgKIgBgDIgBgGIAEgBQgEgKgDgKIgBgHQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgBgJIgBgFQgFgCABgGIABgHQgCgHABgIIABgFIAAgKIAAgKIAAgbIABgMIADibIABgaIgBAAQgEgSgVgBQgIgBgDAEQgFAHgDADQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBIAAgDIAAgBQgBgDgDgDIgHgLIgBgEIgBgBIgBgCIgBgMIAAgCQANgHAQgCQAOgDARACIACAAIACAAQAkAOgBAxIgCABIAAABIgCAAQgMAGgFAKIgCADQABAXAWADIAAAFIgBAEQgBALgFAHQgCANAFAGIACAAIAAACIADAIQADAMgLAMIgBgBIgBgCQgIAJgGANQADAlAZgUIAAAAIAAABQAAAQgIAIIgBAAIgCAJIgDAPIAAADQAEAJANACIACABIAFAMQAEAIAGAFIACABQALACAJgCQASgCAMgNIAAgCIABABQAHAIACANIAAACIAAADIAAACQADAXAJARQAJAPAMAKIgbAQIgTALIAAAAIgFAFQgPAJgRACIgRAAgAAlDCQAKAGAOAAQAOAAAJgGQAKgGAAgJQAAgJgKgGQgJgGgOAAQgOAAgKAGQgKAGAAAJQAAAJAKAGgAAlDCQgKgGAAgJQAAgJAKgGQAKgGAOAAQAOAAAJAGQAKAGAAAJQAAAJgKAGQgJAGgOAAQgOAAgKgGgAAbCzIAAAAgACXCyIgBgBIgGgFIgCgCIgBgBQgKgJgJgLIAAgCQgFgVgHgUIAAgCQgCgWAAgRIABgHQAEgPAKgIIABgBQAFgEAGgCIACgBIACAAQAVAKANARIABACIAAAAQALAOAFASIADAQIABANIAAAEIAAACIAAAdIgBAAIAAABIgBACQgDALgHAHIAAACQgLADgOAAIgGAAgAB9AlIgBAaQAAA+AbAiQADADAHgBQARABACgNQABgEAAgFIgBAAIAAACQgBAMgLADQgEAAgCgCQgagSgGgmIgCgPIAAgWIABgSIADAAIACARQABALAEAKIABAEIAAAAIgBgEQgBgUADgFIAAABIADAbIABALIABABIABgMIAAgTIgCgWIABAAIAGAWIACASIAAAAIACAWIAAADQAEgKgBgPIgDgQIAAgDQgCgIACgEIAFAMIAEASIAAABQADARAAAWIAAACIAAgCIABAAIABgIQABgMgCgUIAAgBIABAAIAAAAQAEARACARIAAgBIACADIAAAAIAAAAQAAgigNgWQgJgPgPgKIgCgBIgGgBQgEAAgEACgACxB6IAAAIIAAgIIAAgBIAAgCIAAADgAATAuIAAgCQASgcgBAlQAAAHgDAIIAAAAQgSAAAEgWgAAHAHQgEgBACgHQADgPAJgJIAHgGIACgBQAEABABACIADAIIAAAGIgBACQgIAVgMAAIgGgBgAjAhZQgCgCAAgDQALgRAGgKIAAgCQgHgSAQgRQAOgOASgJQAEAHACAKQACAKgBAMIAAACIgTAMIgIAGIAAABQgTAPgPATgAALh/IgCgBQABAIgFgEQgDgDAAgGQAIgJAIgBIAFAAQAEABAEAEIACAAQgDATgHAAQgFAAgHgIg");
	this.shape_2.setTransform(41.8,53.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#FFCC66"],[0,0.333],41.2,68.7,41.2,68.7).s().p("AAAAKIgDgPIAAgDIAAgCQADAKADAJIgDACg");
	this.shape_3.setTransform(41.2,68.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AAeBqQgQgBgRgDIgBAAIgBgCQgJADgCgJQgGgXgJAJIgDABQg3AIgxgOIgGgCIgBgBQgngYgpgMIgGgBQgEgBAAgCQgBg5gOgyIgCgCQAFgFgGgGIgCgBQAFgFgBgFQgCgEgGgDQAIAAAGACIACABQBiAsCCAKQAzAEAlgKIAxgDIAGAAIADAAQAlgPAqgJIACAAQATgQAYgEIABgBQAFAAgBAHQgEAfgKAaQgEALgBAJQgCAZABAYQABAUADASIgiAEQgwAGgnAPIgBAAQgjAOgpAAIgQgBg");
	this.shape_4.setTransform(71.9,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996633").s().p("ABtAoIgBgCQgEgKgGgDQgGgDgGAEIAAAFIAAACIgDgEQgHgJgRgIIgBAAQABAMAAAQIgBgDQgBgHgEgFQgIgKgIgCIAAAAQgIgBgJAHIAAABIgBgBQgKgFgLAFIgDACIADgCQgJgFgQAAIgTACIgBAAQAAgHASgCIAAgCQgGgFgNAAQgKgBgOABIgCADIgZACIgmACQARgJASgGIACAAQAFgBAGgDIADgBIABgBIgBAAIAGgGIABgDQABgBAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgBIABgBIAeACIABAAQAXABAXgCIACAAIAGgGQAJgHAIAAIAAAAIAAABIgBABIgEAFIgDAEIgCAEQAHgDAKgCIAAAAIAEgBIAJgBIAEgBQAQgBAUACIAAABQgUACgOAHIgJAHIAPgCIAAAAIADAAIABAAIADAAQAOAAANADQAKACAJAEQAXAJgPACIgCAAIABABIAAAAIACABIAKAKIAGAJQAEAHABAIIgCAAQgXgIACAFIAEAFQgEACgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_5.setTransform(76.7,-43.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAnDBIAAgCIALgVIABgBQALgEANAEIACAAQAGAEAFAFIABABIACAAQgKgTggACQAbgqARg2IABAAQARALAEAVQAHAegGAVQgGAWgSANIgBACIgCAAIAAADQgLgCgGADIgIADQgJACgGAAQgGAAgEgCgAgYCMIgDgCQgSgJgLgPQALgQAQgMIACgBQAQAGAUADIAZACIAAABQgMAbgNAYIgJAQIgBABQgIgQgPgJgAhZg1IgCAAQgFgDgEgEIALAHgAhcg/IgKgKIgBgBIgBgBIAAgCIgBgBIAAgCIgCgDIgKgWIAAgKIABgEIACgGQAHgUAEgWQANAAAAALIAAAFIgBAIIgCAJIABADQAEAEAHACIAPAAQAHgBAEgFQAGgHAEgIIACAAIAAgBIgBgBIABgCIAAgBQAJgWALgTIABgCQAFALABAbQABAiAXAOIAAABIABAAQATADAEASQAAADgCACIgGAGIgCAAQgPAHgRAAIgVACIgBAAIgEgBIgCACQgDgCgEACIgDAAQgJABgIAEQgGADgGAAQgIAAgHgGg");
	this.shape_6.setTransform(30.2,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("ABoBEIgCgCQgDgNgGgKQgGgKgJgHIAAgBQgFgCAAgHQATAFAAgHIAAgBQAAgIADgIIAAgBIAAAAIAAAAIACgBIAAAAQAcgJAQAPIACABIgEAKIgFAGIgIAMIAAAAIAAABIgBAAIgBACQgGgMgLgGIgDgBQALAHAGAWIAAACQgKgHgHgLIgCgBIABACQAQASgCASIAAACQgIgGgMgTIgFgIIABACIAEAHQAHANAAAOIAAgBgAA8AxQgHgCgLABQAGgHABgNIAAgEQgFAXgHgQIABgHQABAAAAgBQAAgBAAAAQAAgBAAAAQgBAAAAgBQgJgDALgPQAGgHgHADIgCAAQgFgMgCAFIgDADQg/ANgfgjIgBgCQgDgGgBgJIAAgBIAAgEIACgCIAAAAQAHgLAPgCIAAgCQAZgBASADQgkgCgaASIAAACQAfgSAxAKIADAAQAdANAMAeIACABQgBAXACALQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAQAHABAFADIAAADQAHARgKAMIAAABQgDgJgKgDgABZgHIABAAIABgBIAEgCIAAAAIACADIgBABIgCAAQgLAGgHAEQAGgGAHgFgAh1gVIAAgCQAXgLARAYQADAEAHgBIgBgBIgTgPIgBgBQgCgIALgGIgBAAQgLgRgWgEIAAgDQAiAEAJAcIAAACIASAVIgCACQgGADgHgFIADAEIACABIgOACQgaAAgPgVgAiNgRIABgBIACgFQAJgXAhABIAAACQgiACgJAZgAiOg0IAGgFQAOgQAHAGIgDABQgEAAgBAEIgBABQgEAEgGAAIAAACIgHAFg");
	this.shape_7.setTransform(25.1,-24.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009933").s().p("AgaB3IAAgDQgBgMAKgCQAQAFgXAMgAgdBmQgFgBgFgIIAAAAIgGgLQgehJgwg3IAAgDIAAgDIACgEQAJgNAFgSIABAAQAAgQABgPIABAAIACABQARAKAdgBIAWgBQALgJAJACIgBAAQACAJALAMIABABQAYAHAQARQARAQARAPIACACIACABIAAABIAAABIABAAIANAMIAMANIAKAJIAIAHIADADIgEADIgJACIgCABQgYANgTAIIgCgBQgRgQgUgMQAVARAMAXIAAABIAAAAIgCACIgHADIgCAAQgkAOgcAWIAAACQgFACgDAEQgDAEgCAAIgBAAg");
	this.shape_8.setTransform(-75.9,28.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#996600").s().p("Ag8BCIAAgBIAAgCQADgIADgRIABgGQAEgaAMgQQAHANgMAUIgFALIgCAFQgDAKABAKIgBACIgFANQAAgEgDgEgAgIBGIAAgCQgIgLABgMQgHAQgKgOIADgEIABgCIADgJIAAgCIAXg2QABgCAEgBQAHADgJATIAAACQgIAQgEATQACgGAFgGIABAAQABAYgDASQAAAAAAABQAAAAAAAAQAAAAAAgBQABAAAAgCIABgBQAFgZgCAbIAAABQgBAEgCACIgBADgAhCAaQgCAKgFACIAAgBQgFgMgCgOIAAgDQANgLAHAEIACgBQADgGAJABQgHAggKAeIAAAAIgDgfgAgtA2IgBgKIACgEIACgEQAKgYAJgaIAEgCQALAIgMARQgFAIgCALIAAACIgEAKIgBACQgFAIgHAEIgBAAgAAUgFQAFgKACgOQABgOALgDQADATgIAQIgCABQgFACgFAEIgCACIgEACIAEgFgAArgPIgDgCIgBAAQAHgSAGgUIABAAQAMgEAOgOIABAAQAEAhgZAOIgBAAIAAgBQABgMgFALQgEAOgGAAIgBgBg");
	this.shape_9.setTransform(-52.6,-35.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#996600"],[0,0.333],-96.2,10.6,-96.2,10.6).s().p("AAiGjIAAgCIgIgCQgPgHgLgLIgBAAIgRgFIgFgCIAAgCQglgjgDhFIAAgCQAHgmATgbQABgKgCgHQgBgGgDgFIgBgCIgBgBIABADIAAABIAAABIABACQABAKgBAMIAAACIgIAMQgPAZgDAmIAAACIAAACQAJBDApAiIACABIAEABIAHABIAEgBQABAEACACIAAAAIADACQASAHgDAFQgFAAgEgCQgRgGgOgKIgBAAIAAAAQgugfgNhAIAAgDIAAgMQADgqAVgZIAAgCIAAgWQgEABgBgFIAAgCIAAAAIgBgBIAAAAIgBgBIgBAAQgegUgJgpIAAgBQgDgMgBgOIAAgCQAMgLADAIQADAHgDAUIAAACQARAdAYAWIAAAAIABAAIADADQgVgagRgeIAAgCIAAgaIAAgDIACAAIADAAIADABQAQAIAWgBIAAgBQgNgCAJgHIAEgDIABgBIABgBIABgJIABgGIAAgHIAAAAIAAgDIAAgDIgCgHIgCgJIAAgCIAGAKIACAHIABADIABACIAAABIAAABIAAAAIAAABIABADIAAABIABADIAAAAIAAADIAAAAIAAADIABAEIAAABIAAABIAAACIABAAIAAgCIAAAAIAAgCIAAAAIAAgDIAAgEIAAgBIAAgDIAAAAIgBgCIAAgBIAAgDIAAgBIAAgCIAAAAIAAgBIAAgBIgBgEIAAAAIgCgHIgBgCIABACIABACIABAFIAAAAIABABIAAABIABACIAAABIAAABIABACIAAAAIAAAAIABABIAAACIAAABIABAAIAAABIABAEIAAAAIAAABIABADIABADIAAAAIAAAAIABACIAAABIAAABIABACIAAACIABACIAAAAIABADIAAACIABAGIABACIADARIACAOIAAACIAAAAIABAAIgCgPIgCgNIgBgFIAAAAIAAgBIAAgBIAAgCIAAAAIgBgCIAAgBIAAgBIAAgBIAAgBIAAAAIgBgBIAAAAIAAgBIAAAAIAAgDIAAAAIgBgBIAAgEIAAAAIgBgCIgBgIIgBgEIAAAAIAAgBIAAgBIgBAAIAAAAIAAgBIAAAAIAAgBIgBgCIAAgBIAAgBIAAAAIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIAAAAIgBAAIAAgDIAAAAIAAgBIgBgBIAAgCIAAgBIgCgFIgHgYIgDgLIAAgCQgCgHgDgFQgDgHgEgEIgCgBQgEgDAGASQACAEgCACIgCACQgFgPgCAJIgJgYIAAgBIgGgTIgDgKIgJggQAJADABAOQABAKAFgGIgBgBQgLgXALgJIABABIABAAQAHADgCgIIgBgDIgBgCIAAgDIAAgEIABgDIABAAIADgDQAHgDAFAUIAJAmIADAKIAFAUIAAAAIAAACIACAIIABADIABADIAAAAIABAGIAAAAIAIAbIAAABIAAABIAFAWIABACIAAACIABACIABADIAAAAIAAACIAAABIAAAAIABACIAAABIAAAAIAAABIAAAAIABABIAAABIAAAAIAAABIABABIAAABIAAABIAAACIABABIAAACIAAABIABABIAAABIADAOIABAEIAAAAIAAABIABAFIABABIACAIIAAAAIAAABIABAAIAJAiIABADIAAABIABAFIAAAAIADALIAEAVIAAADIABACQABAHgEAAIgBAAIgBgFIgGgbIgDgKIAAAAIAAgBIgBgEIgBgCIgBgDIgJghIgBgBIAAAAIAAgBIAAAAIgBgEIAAADIAAAAIAAABIAAADIACAIIACAMIAEAMIAAABIABACIAAABIAAAAIAAABIAAABIAAAAIABAEIAAABIAAAAIADAKIADAKIAAAAIAAABIAEAQIAAAAIAAAAIABAEIAAABQALAuAJAwIgBABQgRgtgOgwIgBgEIAAAAIAAAAIAAgBIgBgDIgDgMIAAgBIgEgUIgCgFIAAAAIAAgBIAAgBIAAgBIAAAAIgBgCIAAACIAAABIAAACIAGAZIAAABIABAIIABAEIABAEIABAFIAWBhIgCAAQgKAIgCAQIAAACQAJAUATAKIgBACIgbAMIABAJIACAAQAvgFAugSIADgBIgBgBIgEgBIACgBQAJAAABgEQAAgIgHAFQgMAGgRgDIAAgBQgQAGgIgHQAOAAAIgFIACAAQAHgIAFgTIAAgCQgIgSgLgFIgDgBIgCAAIgCAAIgMguIgXhQIgBgFIgBgFIAAAAIgBgBIgBgDIAAgBIAAgCIAAAAIAAgBIgUhGIAAAAIgDgMIAAAAIAAgBIAAgBIAAAAIAAgBIgBgBIAAAAIAAAAIAAgBIAAAAIAAgBIgBgCIAAAAIAAgBIAAgBIgBgBIAAgCIAAgBIgBgCIgBgEIgFgVIgHgbIAAAAIgDgNIgBAAIAAgBIAAgBIAAAAIgCgHIgFgUIAAAAIgCgGIAAgBIgLgqIAOApIABABIACAGIAAAAIAGAUIABACIAAACIAAACIAAABIADAPQAEAPAEAMIAIATIADAFIABACIACACIAAABIAAABIABAAIAAABIAAAAIABACIABAAIAAAAIAAABIAAABIADAAIAAgCIAAgDIAAgCIAAgBIAAgBIABABIABABQAMAHAJgSQAGgKAKgCQADAAAEADIACABIACAAQAlAsgaA5IgBADIgCAEIgBACIAAABQAAAGAEAEQAyA2AdBLQAOAmgFAlIgBACIAAABIAAABQgDAQgGAPIgCAAIgIAGIgCADIgBABQgJAGgKADQgCADgEADIgMAHIgJADIgBAAQgOAEgOACIglAAgAg7hqIAAADIABACIACAKIADAJIAEAQIABADIAAAAIADAKIAFAUIAAAAIABACIACAJIAAABIADAJIAAAAIABADIADANIAAAAIAEANIAAAAIAGAYIACAFIAAACIAAAAIAAABIABACIAAAAIAAABIAAABIABAAIAAABIAAABIAAAAIAAAAIAAABIABABIAAAAIAAACIAAABIABAAIAAABIAAABIAAABIAAABIAAABIAAAAIABACIAAAAIAAABIAAAAIABABIABAEIACAJIAAAAIAAABIABACIAAAAIAAACIAAABIABABIAAABIAAABIABABIAAACIAAAAIAAABIACAAIABAAIgBgBIAAgBIAAgBIAAAAIgBgEIAAAAIAAgBIAAgBIgBgBIAAAAIAAgCIAAgBIgEgOIAAAAIAAgBIAAAAIAAgBIgBgDIAAAAIAAgBIAAAAIgBgCIAAAAIAAgBIAAAAIAAgBIAAAAIgBgCIAAgBIAAgBIAAAAIgBgCIAAAAIAAgBIAAAAIAAAAIAAgBIgBgCIAAgBIAAAAIAAgCIgBgCIgBgCIAAgBIgFgYIgBAAIAAgBIgHgaIAAgBIAAAAIAAgBIgBgBIAAgBIgCgHIAAgBIgCgJIgBgCIAAAAIgFgUIgDgKIgBgCIgOgxIAAAJgAA7FKIgDgDQgWABACgbQAIgNAMADIACAAIAAgCQASANAAgIQAAgNAJAOIAEAGQgBARgQACIgCAAQAIAHgOAGIgBAAQgCAAgCgDgAA5ESQgTg7gPg9IgDgLIAAAAIgBgEIAAgBIgBgDIgKguIAAgBIgCgBIgCgKIgEgTIgBgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAAAIgBgCIAAgBIAAAAIgBgDIAAgBIgBgCIgBgDIgGgWIAAgBIgHgaIAAgBIgCgHIgBgBIAAAAIAAgCIgBgCIgCgJIAAgBIgGgUIgDgJIgShBQgDgGAGAEIADABQAEAEACAKQAAADAFABQABABAAAFIgBgBQgBgDgFABIAMAtIADAIIAFAUIAAAAIACAJIABABIAAACIAAAAIABADIACAHIAAABIAIAaIAAAAIAGAWIABAEIABACIAAAAIAAADIAAABIABABIAAABIAAABIAAABIAAAAIABABIAAAAIAAABIAAABIAAAAIAAABIABABIAAABIAAABIAEAOIAFARIAAADIAOAuIABACIAAABIABAEIAAAAIADAKIAYBPQAIAbgFARgAh5jUIgJgPQgIgKgLgGIgKgEIgBgDQgFgKgEgLIAAgDIAAgVIAUhJIAAgCIACAAIgCAJQgHAggDAkIAAACIAAADQACAQAIALQALARAWAGIAAACIAAACQAEAJgBAJQgBAEgFABIgCgBgAhzjqIgBgGIgBgCQgUgFgGgUIgBAAQAEgOgJgJIgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBABAAIABgBIADgHQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgBgCIgBAAIgBgBQgCgHABgFIACgIQAKgxAZgpIACABQAPAHAKALQgYAQgIAcQgHAbAEAVQACAJAEAHIACABQATAGAKgOIACABQASAKgGALIAAABIgGAGIgBABQgHAKADAOIAEAQIACAGIgNAEIgTAEg");
	this.shape_10.setTransform(-96.3,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AElBQIAAgCIgEgFQgEgBgCgFIgBgEQgBgMAKgHIAEgHIAAgCIALgGIAZgBQAFADAFAEIACAAQAHAIgCAQIAAADQgNAUgZAAQgIAAgJgCgAEkAtQgDABgCAEIgBAGQgCAGAEAEQAAABABAAQAAABABAAQAAAAABAAQAAABABAAIALAAIACgBQAFgFAAgHQgBgFgCgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgIgBIgEABgADxBCQgDgCgCgEQgDgFAAgHQAAAHAHADIABABIAHgBQAHgDABgIIgBgDQgDgKgKABIgEADIgDADIABgEQADgDAEgBIAAAAQAPgNAZAHIAAABQAJAFgGAKIAAACQgHAQgNAKIgCAAQgVAAgCgFgAlVgfIgBAAIgFgCIgBgCIABgWIAAgLIABgIIABgCIADgCIACgBIAJABIABABIACAAIABAAQAFABAEAEQAEABACAEIABACIAAABQgEgCgFABIgBAAIgFAAQgDABgDAEQgJAMAMAKQADADAEAAIgFACIgGAEIgCAAIgGAAgAkzgvIAAADIAAABIgFADQAEgDABgEg");
	this.shape_11.setTransform(-11.5,-25.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("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AgBIAhAEQAjADAjgCIACAAIAVgKIACgBIAAgBQAmgQAvgHIABAAIACAJIAAACQgFAWAAAaIAHAKQAKAPgEAZQgKBGgbA6IAAACIAAACQgKAaADAlIABAAQANAZgFASIABABQAIADAGALIACAEIAAADQgFAWgVAGQgWADgOgEIgSgEQgpgHglAKIAAACIgBABQgXAKgcAHQgLADAIgNQgJAIgKACIgGABQgIAAgIgEgAKOHbQgSgBgPgHIgCAAIgCgPIgBgEIAAgCQgFgRgIgMQgNgUgXgKIgEgBIAAgBQgCgTgEgSIgNg3QgQhHgOhKIAAgNIABgEQABgLgIgdIBJAfIABAAIAAAAIAHADQAWAKAbABQAdABAZADIADABIAAACIAAADIAAACIgBADIgCAMIgEAOIAAADQAEAYAKASQADAGABAHQABAHgBAJQgIBBAABGIAAAYQACASADARIAEARQgBAJgLgBIgCAAIgDAAQgRAFgPAAIgEAAgAGMHSIgCgDIhHhUIgBgBIgIgJIgKgMIgIgLIgKgPQgFgHgDgIIgJgRIgEgTIABgDIAHgRIAKgSIACAAIAJABQAOAAAKgJIABgBIALgIQAHgEAFABIABAAQgIAXgPAbIgBACIgDAGIADABQAJADAFAHQAhAtAaAzIAFALIABACIADAZIAAAKIAAAGIgBgBIABAEQgBAJABAKIgBACIAAAFIgEgEgAEwDQIgCgLQgDgOgFgLIgCABIgGAEQgOAIgPAIIgBgCIAAgIIAAgGQAFgKAOgCIACAAQAaABAGgTIAFgQIAFgMQAJgXALgVQASgiAMgnIAAgCQgHgygKg6IAAgCQgCgugUgcQgFACACAEQASAcgYgKIgCgBIAAAAQgbgWACg0QAKgOAPgJQAKgFANgDIADAAQAhAxAFBMIAAACIAAACQAMBOACBVIgBAAIgnBVIgDAGQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgFABAAACQACAIgEAJIgFAKIAAAPIAAACIAEAGIABACQABAAAAABQABAAAAAAQAAAAABAAQAAAAAAgBIAAABIABABIAAAAIAAACIAAAAIAAABIABABIABACIABABIAAAAIAAABIACAEIABABIAAAAIABABIAAAAIAAABIADADIAAABIABAAIgBABIAAADQgBALgEAEQgEADgHgDIAAAAIABgBIADgKQADgPgHgMIgCgDIgEgFIAAgBIgCgBIADAHQAEAMAAARIAAAAQgGgRgNgJIABABQAPAUgLAYIgBACIgCAAQACgXgIgNQgCgEgEgDQgDAFADAIQAHASgDAMQgEAOgTADQANgJgDgWgAE/AmQgVgCgQgFIgCgBIgHgJIgBgCQgNg6gVgzIgCABIAAAAIgEgKQAHAAAIgEIAGgCQAHgBAHgDIAEAAIAfgDIAAAAIAMgCIAFAAIAXgDIADAAIATBzIAAACIgBAAQgFAVgJARIgCAAIgQAAIgMAAgAHmg5IAAgCQglgaAIhHIAAgCQAHgGAJgEIgFABQgGAGgIADIAAgCIABAAIAAgCIgGABQgXAEgcgBQgFgMgIgKIAAgCIgDgEQgJgsgTgiIAAgBQgOgIgKAHIgBAAIgBgCIgBABIAAABIgFAAIgCAAIAAgBIACAAIAGgCQgEgOABgTQAJgNAIgOIAAgCIACAAQABgFgDgCQATgTgLAZIABgBQAHgJADACQAXgCAHgSIgBAAQgBgKgEgJIABAAQADgKAJgIIACgDIACAAQASgQAOADIACABQAfggAvgQIA6gSQAVgGASACQAgBBBmgGIAAgBQhdAAglg6IgCAAIAAgCIAAgVIAAgGIAGgHQASgVAggFIACAAIAFgPQAHgXAMgSQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAIAAgBIACgEQADAEAJgBIADAAQAhgCgbAOQgWAMALACIACgCQACACgCAEIgBAAQgLABABALIgBABIABACQAFAQgCAGQgFALAJAIIAEACQAUAGALgIIAEgFIgBAAQgIAEgGABQgFAAgEAAQgLgDgGgOIABAAQALgOAUAIIABABQAGgEADgKIAAgFQABgIgBgLIAAgCQgLgHAKABIARADQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAABQAEACAGgBQAFgBAIgFIACgBQADAAgCAIIARgLIAFABQALAIAHALIABADIABAAIADAHIACADIABgDIAAAAQgDgaAFAAIADAAQAMAPAJAQIAAgCIAAgFQABgeAMAZIABADIABACQgIANAagOQAHgEAIAFQANAJgHARIgBADIgBAAQgEAIgHAGQgLAJgUABQALAEAIAIQADADgBAGQgBAUAJgDQA6AKAoAoIAlAoIAjAqQAEASAHAPIABABQAMBNgvApIgEAEIgBAAIgBAAIAAABIAAAAIgDADIgCABQgIAEgIAGIgHAHIgPAKIgNALIgLAHIgYAPQgGgCgBAGIAAABQAYANAHAgIgBABIgBACQgVgRgUgTIAAAAIgCgDIAAACIACABIAAAAQAUAUAGAXIgBACIgjgiIgBgBIgPgPQALAQANAPQARATgKAMIgHgBQgSgGgHgVQgGgTgIgKIgCgDIABAEQAGAWAJATIAGAMIAEAGIABAAQgFAJgWAAIAAAAIgIgKQgNgWgHgaQgEgSgEgDIgGABIggAIQgaAFgGgOIABgCQAUgZAqgEIAAgDIABgBQAWhAAsgrIgCAAQgigagegeIgBgBIAAACIABAAQAZAfAfAYIgBABQgiAogVA0IgGAPIgCABQgmAGgZAUIAAACIAAADIgCAAQANAWAsgKIAQgEIADgBQAHAoAVAaIAJAKIACABQgUAHgWAEQgSAEgTABIgDAAIgCAAQgqAEgnAAQiHAAhqgxgAHik3IAAABIAAACQgDAJgCAKIgBABIAAAAIAAADIgFAOIgBADQgDAEgBAFIABABIAAAAIACAAIAAAAIABgCIADgGIAJgcIAEgRQACgIAEgGIAAgBIACAAIgCAAIACgDIAOgVIAAgBQgGADgFAFIAAAAIgCACIAAAAQgHAHgEAKIADgBIgFAOgAKln4IAAABIAGAIIABACIABABIACABIAAABIAEADIAAABIABACIABAAQAHAJALAAQAbAAAbgBIAHgBIABgBQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIABgCIABgEIAAAAIAAgBIgCAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIgDACIgBABIgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIg3gBIgCAAQgGgBgEgEIgBgCIAAgBIgCgBIgEgFQgGgGgGgFIgBAAgAMHn4QgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAGAEAFIABABIAAAAIABABIABACQAGAFAHgCIAAgBIAAgBIAAAAIgBgBQgNgCgCgNIAAgBIAAAAIgCgBIgBABgAMZo8QgKAEgIAJIgGAKIABACQAAAGACAEQAFAMAQgFIADgBQASgKgBgSIAAgCQAAgGgDgGIgCAAIgCAAQgHAAgGABgAtUgOIgCAAIgCgBQgJgWgSgNIAAgBIgBgBQgJgIgOgEIgCAAQgPAIgCAUQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgPgjgPghIgCgFIgBgCIgDgLIABAAIAHgKQABgFACgFQAqhNBKgvQBCgqBGgnIADgEIAHAHIgBgCQgug5hCglIgBAAQgpAngnApIgJAJIgeAeIgSASIgXAXIgBABQgFAHgDAIQgDAGACAHIAHAJQAKAMgGAQIgBAHIgBAAQgGAOgMAHQgCgJgDgHIgGgMQgIACgFAHIAAACIgBADIgBABIAAABIgBABIAAABIAAABIAAAAQgFALgLgEIAAAMIAAACIgBACIgBAAQgHAFgDAKIgDAAQgPgBADgSIAAgCIgBAAIAAAAQgJgFgDgJIgBgBIAAgEIgBgEQAAgEgCgDQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAQgHgEABgGIABgMQAAgMgFgMIAAgBQAGgJAKgHIAGgEIAIgBIAPgEQAPgBANgHIAEgDIADgCIADgHIAQgOQAJgGAJgIQAJgIAIgKIAbghQAogwApguIAdgfQARADAOAGIAGACQATAIAPANQBAAzA5A7QAKAKAMAHQAMAHARACQAJgGAHgJIACgDQAJgMAFgQIgBAAQgCgHgEgFIgCgHQAKgKADgJIABgEIAAABIgDACQgZASgJgfIAAgDQABgUAMgJIABgCQAUADAOAKIADACIABgDQAIgDAEgTIAAgCQgFgMgCgOIAAgDIAAgBQAGAAAFgFIAAgBIACgBIADgCQAGgCAFgFIADgCIAGgEIAEgEIABAAQAPgJAQAAQAEAAADADQAWAgALAsIABAAQAYgBATAFIAAABQgBAdgeAAIgCAAQgGgEAJAPIABABQACAWgFAQIgBAAQgWgDgOgKIAAABQAIAPAHAUQADAIADgCIAFAKQgGAGgQAJQgMAHgSgFQgngKgbARQAJAGARAGIABACQARAzAIBAQAGAtASAkIAFALIAAABQACABACADIABABIAFAFIAGAFIABACIABABIAAAAIAAAAIACACIABAAIABACIAFAEIACACIABABIAAABIgBAEIgBAHIAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABABAAIgBABIAAACIAAABIgBAAIAAABIgBADIgBgBIgEgEIgBADIACACIADAEIgBACIAAAAIgBAFIgBADIAAAAIgDgBIgBgBIAAABIABABIABACIAAAAIABABIgBAEIAAAAIgCAFIgCACQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAIgCgCIgBAAIgCACIgBgBQgRgWgPgXIgBgCIgEgFIgBgCQgphBgghLIgDAAQhAANgpAjIAAADIgDAAQhMAvgbBhIgCAAQgXAIgYAAQgUAAgUgGgAnDoEQgEADgDADIAAACQgCAHAAAIIAAANIABAQIAFABIAFACIABAAIAHABIABgBIAHgDIAFgDIACAAIAHgDIAFgDIAAgBIAAgCIAAgBIACgDIABgEQAAgFgCgDQgCgDgDgBIAAAAIgBgDQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgCgDIAAgBIgCgDIgFgDIgBAAIgDgCIgBAAQgGgCgHAAIgGAAgAAHgtIgCAAIgBgBIgBgBIAAAAIAAgDIABAAIABgCIAAAAIgFAEIAAAAIgCAAIgBgBIAAgBIAAgBIgBAAIAAgBIgCAAIgBAAIgBgBIgBABIgGAGIABgEIAAAAIAogvIACgCIAagbIAfgfIAegcIAMgJIAPgLIAQgNQAIgFAIgDIAJgCIADAAQAKACADAFQAAAHgCAGIAAACIgGAVIgBABIgCAFQgCACAAADIgBAEIgBAAIgCACQgqAhguAdIgCACIgFADIgBABIgCAAIgBAAIAAABIgBABIgBABIgBABIgBABIgBAAIgEADIgDABIgjAZIgPAIIgFAEIgHAHIgCACgAPYhGQgIgdgYgNIAEgBIABgCQAQgJAOgCIALAEIABABIABABIAAADIAAAVIgBABQgFAPgJALIgBgBgADni0IgBgBIgCAAIgBAAIAAgBQgEgCgEgEIAAgDIgBgBIAAgBIACgIIAAgFQADgVgBgZIgBAAQgJgPAKgGQgLACgiAAIgZgLQgMgGgDgMIgGgcIABgDQARAIAUgHIAAgBQgEgBgYgBQgHAAgBgHQAMgQAVAFIAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAMgDANARIABABQAiABANgUIABgBQAXgHAIADIgBADQgFAHgKACQgEAIALgGIACAAQAOgOAPAAIADAAQgDALAUgGIAFgBQAEgBACAEQAFAVgLAKQgGAGgLACIgBACQgDADgHgEQgSgJAEAKIABABIACABQgIARgOAOIAAACQAEAZANAQIAAADQgFASgHARIAAAAIgBABIgEAGIgDAEIAAABIgBABQgEAHgJACIgKAAgACYkzQAAAAgBABQAAABAAAAQABABAAAAQABAAABABIAAAAIACABIAEACIABABIAAABIAAAAIAEADIAAAAIACABQAEADAFAAIAQABIADgCIAEgCIACAAIAAAAIAEgDIAEgEQAEgEACgFIABgBQACgDABgEIABgCIAAgCQAAgBAAAAQAAgBAAgBQAAAAgBAAQgBAAAAAAIgCABIgBADIgCAFIAAABIgEAHIgBABIgFAGIgBABIgBAAIgBAAIgBABIgCABIgBAAIgGADIgMAAQgFgBgFgDIgEgDIgDgCIgFgEIgDAAIgBABgAD2lvQACgPgEgJIgBgCQgIgHgKgFIgDAAIgKADIgDAAIgLABIAAAAIAAAAQgQAAgKgHIAAgCQAbACANgMIABgCQAWAMAjAAIAAAAQgbADgQgDIACACQASAHATAAIAEAAIAEgBIAKgEIADABQAAALgLALIgBACQgCAIgMgBIgEAAQAEAHgOACgAEKmQIgDAAQgCAAgBAAQgBABAAAAQAAAAACgBQACAAADAAgAnFn4IABgBIgBAHIAAgGgAmyn8IgCgBIABAAIABABg");
	this.shape_12.setTransform(-0.9,17.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C6FFFF").s().p("AXeMLQhJgChKgDQgtgBguAAQgvAAgvAAIgbgCIgcgEIgFAAIhFgGIhogHQgzgDgygBIAAABIgBABIAIgSQARgiABgyIgBAAQgIgSgKgPIAAgDQAEgegEgPIgCgJIABAAQATgCAUgBIADAAQgJgUgCgXQgDgXAEgbIAAgDQALgYANgWIAAgCQADgYgHgOIgBgDIAMgOIAAgCQADgTgCgWQgCgHADgJIAGgNQACgGAGgEIALgHIAMgJIADgCIADgDIAAAAQAygmgEhcQgxhnhkgyQgIgFgGgBQgUgCgDgQIgBgHIAAgCIAAgCIAAgMQAFgEAEgEQADgEACgFIABgDQAMgagWgYIgCgDIgHgKQgCgGALACIAEAAQgQgSgjgJQgLgCgNgCIgBAAIABgCQAMgFAQgDIgFgEQgMgGgVAFIgIABIgEAAIgMABIgCAAIgBAAIgEgBIgDAAIACgDIAAgBIAAgCIAAAAIABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIACgDQgQADgNAJIgHAHIgCAAQgpgJguAGIANACIgBABIAAABIAAAEIgFAGIgIACIgBABIgDABQgcAHgPAVIADgBIArgGIAEAAIABAAIgBACIgNAmIgDAKIgCAAQgOAHgSACIAAADQgIAGgJAGIAAACIgCAFQgCAKAAAOIAAAFIgDAAQhlAUhKAuIgCgBQgLgKABAQIgCAAQgSACgXgOIgCABIgSAGIgCgDIACgBQASgIgDgDIgCAAQgTADgKAJIAAABIAAAAQgKALgCARIgCAAQgDgGACgYIgBgBIgFgLQgKgTgRgMIgCAAIgCAAIgDgBIAAABIAAAAIAJAFQACAIgOgLIgGgDQgqgbgwAVIgBgBQgIgIgMgFIgDAAQgogCgPAXQABAKAIgHIAAAAIABABQgIAGAFAFQADAFgCACIAAABQgBADgJgCQgDAUAKgFIABADQABADADgIIACAAIAAADQgBAJgEAFQAAAQAFgLIAAgCQAHAGADAAQADgBgBgIIAFAAQALABAIAEIgCABQgLACgIAIQgHAHgDALQAJAVgFARIgCAAIAAAgIAAACIABACQARAqA7gBIACABQAJAIADANIAAACQgCAMgLAEIgCgBIgBAAIgBABIgBAAIAAABIgDAAQgDgFgGgCQgDgCgFADIgCABIgBAAIgRAKIgPAKQgGAKgMAGIgMAHIgdAbIgeAbIgaAZQgXAXgWAZIgDADQgBALAEAHIAAABIAAgGIACgBIAFgGIABgCIABABIABABIACAAIAAABIABAAIAAABIAAABIABAAIACAAIABAAIAGgEIgBABIgBABIgBABIAAACIAAAAIABABIABABIACAAIAAAAIACgCIAHgHIABABIACgBIgCACIAAACIAAABIABAAIABABIADAAIABgBIAAAAQAJgIAKgHQAMgGALgJIAMgHIABgBIAAAAIABAAIADgDQAFgCAAgDQAugdArgfIACgBIAAAAIAAACIAEgLIACgEIAAADIAAAIIAAACIABAAIABAHQAGAQAJAQIAHAHQAEAEAGADIABABIABAAIACAAIACABIAGAPIgCAAQAYAxAOA7IABAAIgBAGQgMAagLAcIgCAAQhDAxg3A8QgUAXgSAYQgCAPAEAJIAAADIABACIADAFIAVAwIgEACIjMgFIhMgCQgSgNgYAAQilgBilgJQgggCghgFIALgKIAugqQALgKAEgQQgOgigdgUIAAgBIgBgCQgRgKAEgJIgBAAIgCgCIgGgEIgLgHIgFgEIgOgKIgFgEIgCgCIgJgKIAFAFIgHgIIgIgIIgIgGIgCgBIAAAAIgBgBIgCgBQgRgQgQgSQgQgSgbgIIAAgCQgDgJgHgDQARgPgMABQgFABAFgJQAdhVBFgtIABgCQAsggA9gQIADAAQAdBMApBAIAEAHQARAbAUAYIABABIAEgCIABgEQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAIACgBIACgGIAAAAIABgDIgBgBIAAgBIgBgCIgBAAIAAgCIABACIADABIAAAAIABgEIABgEIAAgBIABgCIgDgEIgCgBIABgDIAEADIABABIABgCIAAgBIABgBIAAAAIAAgDIABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAAAIABgIIABgDIABgCIABgCIABgCIgDgDIgHgFIAAgBIgLgKIgBAAIgDgCIgBgBIAAgBIAAgBIgBAAIAAAAIAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgfg6gEhTQgDg3gdgbQAXgFAhAGQAPACANgFQAMgFAFgMIAAgCIgFgJIAAgCQgHgIgCgMIAAgCQAHgHATAGIAAgCQAPgVgNgaIAAgBIADAAQAcgFABgeQgFgDgFgBQgYAAgKgFIgBgBQgJgrgagaIABgHIgCgDQAEgVAFglIgCABQhAA2haAZIgBABQgGAGgIACIAAATIAAADQAHATAJARIAAAAQAAAEADAFIAAABIACAGQAAABAAABQABAAAAABQAAAAABABQAAAAABAAIgCAHIAAACQAPAbATAYIABAAIABABIgBACQgGANgJAJQgJAKgLAGQgHAAgEgDQgogegjgiIgbgZQgngmgwgWIgGgCQgPgHgRgFIgCAAQg3BAg5A9Ig8A9IgIAIIgIAKIgFAHIgHAEQgFACgFABIgCAAIgCgGIAAgIIAAgJIAAgMIABgCQACgFAEgEIAGgFIAEgDIgBgCQgHgQgQgGIgCAAQgJANgPgGQgHgFgCgJQgCgIACgMQAGg0AkgZIgCgBQgUgLgOgFIgCAAQgUATgNAZQgSAhgHAvQgBAPADALIABACQAGAWAQANQAHAGAIAEQAIAFgCAIIgDAQIgCAIIAAABIgFANIAHAHIAAAHQgCALACALIAJADIAFAFIABAEIABABQABAFAAAGQAAACAFABIACACQgCAYAVABIABACIAIAcIAAAAIAEAJIAFAUIAAAAIASBDIABADQgLAUAHAOIAFAHIABACQgSAKgLgMIgCgBIAAgBQgRAEgMAKIAAACIAAACIgCAAQACBCAtAYIABABIAAABQADALgBAPIAAACQgYAhACAxIAAACIABACQAJAtAZAeQgcgFgdgDIgPgBQhUAGhUgGIgZgCQgPgNgSgIIgGgEIhYgBIgOAAIAA3RMAvFAAAIAAYUgAnUjHIAAAAIAAgBIAAABgAl4kBIAAAAIABAAIAAAAIgBgEIAAAEgAGFlhIAAAAIACACIABAAIAAgBIAAgBIgDAAgAKCL8IgjgDIAGhLIAAAAQAAgIgBgJIgCgHQgIgXgHgZIACgCIAAgCIADgLQACgJACgCIADADQAAADAOgCIAAAAIAAADQAPBTAHBWIgCAAgAFjLqQAagNgNgZQgBgEgFgBQgHACAAgEQAAgGADgEQAOgSgIgOQgEgFgHgFIgBgBIACAAIABgFQAHgxgvgOIgFgCIgBAAIAAAAIABgCQAQgQAHgYQAHgWAAgdIgBAAQgKgagWgMIAAgDIgRieIAAgCIAAgHIgDgGIAAgCQgDgGgCgGIAAgDIgBAAIAAgBIAAgBIAAgBIAAgBIABgBIACAAIADADIAAACQAIAKAGAMQAbABAXgEIAGgBIAAACIgBAAIAAADQgBAFgDACQgCA4ARAhIgDACQgDAKAPATIAAACIADACIAAAHIAAADQAFAiABAhIAAAkIADABQAFACAKgBIABAFIAJAfIAAAFIAAACIAAASIABALQAAAYAHAWQANAqAJAtIAGAbIgBABIgTgCQgDACgGAAIg/ACIgCgMgAEuLzIgBgBIgkgEIAAABQgBAAAAABQAAAAAAAAQAAAAAAABQABAAAAAAIgCACQgMgRgNgOIgPgOIAAgCQATgcARgeIAGgLIAEgGQAGgGAIgCIAJgBQATALgBAcIAAABQgCAugEAtgABWLuIgGAAIAAABQgJgegOgZIAAgBQgFgCAAgHQAXgXAZgRQAZgRAcgLIAAADQgDANAIACIABAAIgCACQgRARADARIAAACQgGAQgKALIABAFQAGAXAMgKIACgBQAJgXARgOIABgBQAAAHgDAHQgCAHgEAIIgBACIgBABIgBABIAAAQIAAADIAEAGIAIANIABACIhagDgAtvLUQgDgCACgGQAGgbAAgaIAAgCIABAAIAAACIAYgJIAAACQAYAIAKAWIACAAQgRAOgTAMQgRAMgMABgAwqEwIAAAAIgCgFIgOgvIACgBQALgJAGgPIADgMQADgJgCgJQgCgJgIgFIgGgDIAPgSQAignAjglQArgtAugqIACABQA2AlAwAuIgDAEQg0AUguAZQhQAsgyBKQgOATgLAWIgJAPIgCADIgBgFgACzC6QgNgNgBgbQAOgHAJgMIABgCQANgBALgCIAAgCIAIgIIAKgNIACgCQAFgJADgJIAHgRQABgDAAADQAGAMgDAIIgBACIgNAPIgBACIAAACQgVAbAIAmIgCAAIAAAAIACAAIABAFIgCAAIgCABQgSAJgYAFIAAgCg");
	this.shape_13.setTransform(8.9,-26);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CC33").s().p("A3iDoIAAnPIANAAQAAAAgBABQAAABABAAQAAAAAAABQAAAAABAAIAxAIQAvgEAoAXIACABIALABQARABANAFIAYABIAKgBQASAAASACIAOABIADAAIBJAAIAAgCIAqgBIAMgBIgBgDIAFAGIADABIACADIAAABIAAAAIADAAIADABIABABIAFAGIAAABIABABIADADIABAAIABABQAHACAGADIAEADIADADQAIAAAGABQAHADAIAAIAAAAIAFACIACgCIAKAAIAaABIACgBIAOgDQALgBAKgEQAFgCAEgDIABAAIACgCIACgCIADgDQAUgJAOgKQgaAfgbAdIgDAEQgBADgDADQgDADgDABIgRASQgdAdgfAbQgLAKgOAHQg2AbgoAoQAEASAVAEQgJAEgKACIgDABIAAACIAEAAQARgCAPgFIACAAQAAgEgCgBIAEgCQAAAEAFgCIADAAQANABgCAGIAFgBQAXgHAXADQgKAFAUgDQASgDARAAQAgAAAdALQAQAGAUABQAJgGAMgDIADAAQAQAKAOgNIABgCIAEAAQAeAAAKgVIABgBIAkAFIADAAQAYgJAcgHQAJgCABgLQAAgNgKgCIgCgBQgUgGgSAEIgDAAQgQAQgegIQgTgEgRgCQgmgEgYgQQgCgCACgGIBmhzQAkgpAoglQAXAMAaADIAAABIANAAIAAAAQCsAGCrADQATAAARAJQAHAEAJAAIBBAEQBmADBjgLIABgCIAEgCIABABQApBVArBPIAEAIIAFAJIAAAAIgBAAIgDABIgEABQgWAGgegCQgggBgfgFIgZgDIgRgBIgJAAIgKABQABAOADAAIAAACQADAEAGABIAAABIAAAFIADADQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIAGABIAAAEQABADACABIADABQAAAIAEAFQAFAIAMABIAAABQAKABAIgCIAIgDIACgBQAMADAMABQAeACAcgLQALgDALgCIAFgBIASAAIACAAIAAAAQANACACAIIAAAAIgBACQgFAGADAFQAUANAWAJQAQAHARAFIACAAIABAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIAEAAIAAAAIABAAIABAAIAAACQAVASAqgKIACgBQAMgIARgFIAAgBQAeADAZgCIARAAIAAgBIAQgBIAAgBQAFAAADgEQAEgBACgCIABgBIAEgDIAAgBIADgBIAAgCQgBgQAMgIQAEgDAGgCQAHgBAGgEIAEABQAaACARgIIAFgDIABgBIALgXQAEgHAGgDQANAAAAAOIAAABIAAAEIgBAHQANAEAGAKIABACQAPACAOAAQArgBAegXIABgCIAAgCQAlgCApAEIAaAEQAJABAMAAIAHAAQAFgGAJgBIADAAIAMgSIACAAIgFgJIgCgFQgXgxAIg+IAAgCQAJgeALgbQAJACAIAAQBXADBWAFQAVABAVAFQATAEASAAIAKgBIAEAAQAcAGAdAAIBbACQB1ADB1ABIACAAIABgBIAAgCIAAgBIAEAAIAAGQgADlArIgIgBIgNgBIgCAAIgagDIgDAAIAAgBQgKgCAPgJQAEgEgCgFIgQgTIACAEQgJgFgEgIIgJgPIgHgMIgIgPIgFgIIgBgCIgHgNIAAgBIgBgBIAAAAQgWgsgMg3IgFgSIAGAAQgBAEADgCIABgBIgBgBIAAAAIBYACIAAgBIAIAOIAHAKIAIAKIAGAHIAGAIIAKANIAAABIABABQApA1AtAyIABABIABAJQABAJACAHIABABQgBALAGAGQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAIgCACQggAUguABIgKAAgAvnAAIgBgJQAjg0AwgoIATgOIABgCQgBAMgNALIAAABIgBACQgoAugsApIgCACIAAACgAF4g0QABgGgEgDQgDgDABgCIACgeIgCgXIgCgBQgIgGgCgNQgBgGABgIQAIgFgEgMIgBgBIgEgQQAuAFArgIIABgBIABgBQAGAgAFAiIAAABQgJAFgIAGIAAACQgFAJgDALIgEASIAAACQgQANgUAJIgCABQgKAAgHgDgAJvgzQgHgIgEgKQgDgKAAgLIgBgBIgGgLIAAgYIACgTIADgnIAhABIABAAIACgBQADA3ABA3IAAADQgIALgNAHIAAABIgCABIgBAAgAEHjBIACgBQASACASAAIABAAIACAAIgHBCQgNglgVgeg");
	this.shape_14.setTransform(8.9,68.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADfKzIAAgCIgBAAIgCAAIAAAAIgDAAQAAAAABABQAAAAAAAAQAAAAAAABQgBAAAAAAIgBAAIgDAAQgRgFgPgHQgXgJgTgNQgEgFAFgGIABgCIAAAAQgBgIgOgCIAAAAIgBAAIgSABIgFAAQgLACgLADQgcALgegCQgMgBgMgDIgCABIgJADQgHACgKgBIgBgBQgLgBgGgIQgDgFgBgIIgCgBQgDgBgBgDIAAgEIgGgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgCgDIgBgFIABgBQgGgBgEgEIAAgCQgCgBgBgOIAJAAIAKAAIAQAAIAZADQAfAFAhABQAdACAXgGIAEgBIADgBIAAAAIABAAIgFgJIgEgIQgrhOgqhWIAAgBIgWgwIgDgGIAAgCIgBgCQgEgJACgPQATgYAUgXQA2g8BDgxIACAAQALgdANgZIAAgGIgBAAQgNg8gYgwIABAAIgFgOIgDgBIgCgBIgLgHIgIgHQgIgQgGgRIgCgGIAAAAIAAgCIgBgIIABgDIgCADIgEAMIAAgCIAAgBIgBABIgBABQgrAfguAdQgBADgEACIgEACIAAABIgBAAIAAAAIgNAHQgLAIgMAHQgKAHgIAHIAAABIgBABIgEAAIgBgBIAAgBIAAgBIAAgBIABgCIgBABIgBgBIAFgEIAOgIIAkgYIADgBIADgDIABAAIABgBIACgBIAAgBIABgBIABgBIAAAAIADAAIAAgBIAFgDIADgCQAtgcAqgiIACgCIABAAIAAgEQABgDABgCIACgFIABgBIAGgVIABgCQACgGAAgGQgDgGgKgCIgDABIgJABQgJADgIAFIgPANIgPALIgNAKIgdAcIgfAeIgaAcIgBABIgqAuIAAAAIAAAFIgBABIAAAFIgBAAQgEgHABgLIADgEQAWgYAXgWIAagZIAfgbIAcgbIANgHQALgGAHgLIAPgJIAQgKIACgBIABAAQAGgDADACQAGACACAFIAEAAIAAgBIAAAAIABgBIACAAIABABQAMgEACgMIAAgCQgEgNgJgIIgBgBQg8ABgRgqIAAgCIAAgDIAAgfIABAAQAGgRgKgVQAEgLAHgIQAHgHALgDIADAAQgIgEgMgBIgEAAQAAAIgDABQgDAAgGgGIgBACQgEALAAgQQAEgGAAgIIABgDQAJgZAigBIABAAIgBgCQgigBgIAWIgCAGIgBABQgEAIgBgDIgBgDQgJAFACgVQAKACABgEIAAAAQABgCgCgGQgFgEAIgGIAGgEIAAgCQAHgBAEgEIABAAQAAgEAFgBIADAAQgIgGgOAPIgFAGIAAAAQgJAHAAgKQAPgXAoABIACAAQAMAFAIAJIACABQAwgVApAaIAHAEQANAKgBgHIgJgFIgBAAIAAgBIAEABIABAAIACAAQASAMAKATIAFAMIABAAQgCAZADAGIABAAQADgRAJgLIABAAIAAgBQAKgLASgDIADAAQACAEgSAJIgBABIAAAAIgFACIAAAAIgBABQgHAFgGAHQAHgGALgFIACgBIAAAAIASgHIACAAQAYAOARgCIADAAQgCgRAMALIACABQBKgvBlgUIACAAIAAgFQAAgOADgKIACgFIAAgCQAJgGAHgHIABgCQASgCANgHIACAAIADgKIAOgmIAAgDIgBAAIgDABIgsAGIgCABQAPgVAbgHIADgBIABgBIAIgCIAGgGIAAgEIAAgBIAAgBIgMgCQAugGAoAIIADAAIAHgGQANgJAQgEIgCAEQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIAAAAIAAAAIAAgBIAAAAQgJABgIAGIgHAGIgDAAQgWADgXgBIgBAAIgegCIgBABQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABIgBACIgGAHIABAAIgBAAIgDACQgGADgGAAIgBAAQgSAHgRAJIAmgBIAYgCIAAABQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQgMASgIAXIgEAPIgDAAQggAFgRAVIgGAHIAAAGIAAAVIAAACIACAAQAkA6BeAAIAAABQhmAGgghBQgSgCgVAGIg6ASQgvAQggAgIgCgBQgOgDgRAQIgCAAIgDADQgIAIgEAKIAAABQADAIACAKIABAAQgHASgXACQgEgCgGAJIgCABQALgZgSATQACACgBAFIgBAAIgBACQgHAOgJANQgBATAEAPIgGABQgJglAVgbIABgCIAAgCIAOgPIAAgCQAEgJgGgLQAAgEgCAEIgGAQQgEAKgFAJIgBACIgKANIgIAIIgBABQgLADgMABIgBACQgKALgNAIQAAAaANANIABACQAXgEATgJIABgBIADAAIgBgFIAFAAIAAgBIABgBIAAACIACAAQAJgHAOAIIABABQATAiAJAsIgCAAIgCABIAAABIAAACIAAABIABABIAAAAIAAADQACAGADAFIABADIACAGIAAAGIAAADIARCdIAAACQAXANAJAZIACABQAAAdgHAWQgIAYgQAQIAAACIAAAAIAAAAIAFACQAwAOgIAxIgBAFIgBAAIABABQAHAFADAFQAIAOgOASQgDAEABAGQAAAEAGgCQAFABACADQAMAZgaAOIADAMIA/gCQAFAAADgDIATADIAAABQgrAIgvgFIACAIQgBgCgEgBIgCABIgHAHQgJAJgDAPQgCAHAEACQARAFAJgaIABgDIAAgGIAAABQAFAMgIAFQgBAIABAGQABANAJAGIACABIABAXIgCAeQAAACADADQADADAAAGQAHADAKAAIACgBQATgJAQgNIABgCIAEgSQADgLAFgJIAAgCQAHgGAJgFIABgBQgFgigGggIgGgbQgKgtgNgqQgGgXgBgXIAAgMIAAgRIAAgCIAAgFIgJgfIgCgFQgJABgGgCIgDgBIAAgkQgBghgFgiIAAgDIAAgHQAOAyABA6QAAABAEABIAGACQApAMAnAXIABACIAHACQAwAOA3gJIADAAQAJgKAGAYQACAJAJgEIABACIABABQASADAQABQAyADAqgQIABAAQAngPAwgHIAigDQgDgSgBgUQgBgYACgaQABgKAEgKQAKgaAEggQABgGgFgBIgBABQgYAEgTARIgCAAQgqAJglAPIgDAAIgGAAIgxACQglALg0gEQiCgLhigsIgCAAQgGgCgIAAQAHADABAEQABAEgFAGIACABQAGAFgFAGIgBgCQgOgTADgLIADAAIAAgBQgRghACg4QADgBAAgFQAIgEAGgGIAGgBQgJAEgHAGIAAACQgIBGAkAaIABACQCIBAC5gTIADAAIACAAQAUgBARgEQAXgEATgHIgBgBIgJgKQgVgagHgnIgEABIgQAEQgrAKgOgWIADAAIAAgDIAAgCQAYgUAmgGIACgBIAGgPQAWgzAhgpIACgBQgfgYgagfIAAAAIgBgCIABABQAeAeAiAaIACAAQgsArgWBAIAAABIgBADQgqAEgUAZIAAACQAGAOAZgFIAggHIAGgCQAEADAFASQAHAZANAWIAHAKIABAAQAWABAFgKIgBAAIgEgFIgGgNQgJgTgHgVIgBgEIADADQAIAKAGASQAGAVATAGIAGABQAKgMgRgTQgNgOgLgQIAQAQIAAAAIAkAhIABgCQgGgXgUgSIgBgBIgBgBIgBgCIADADIAAAAQAUASAUARIABgCIACgBQgHgfgYgNIAAgBQAAgGAHACIAYgOIALgIIANgLIAOgKIAHgHQAIgGAJgEIABgBIADgCIAAgBIABgBIABAAIAAAAIAEgEQAvgpgLhNIgCgBQgGgPgEgSIgjgqIglgoQgogog7gKQgJADACgUQAAgGgDgDQgIgIgKgEQAUgBALgJQAHgGADgIIACAAIAAgDQAHgRgMgJQgJgFgGAEQgbAOAIgNIAAgCIgCgDQgLgZgBAeIAAAFIAAACQgKgQgMgPIgCAAQgFAAADAaIAAAAIgCADIgBgDIgDgHIgCgDQgHgLgMgIQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAIgRALQACgIgDABIgCAAQgIAFgGABQgGACgEgDQABgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIgSgDQgJAAALAGIAAACQABALgBAIIgBAFQgCALgHADIAAgBQgVgIgKAOIgBAAQAFAPAMACQAEABAFgBQAGgBAHgEIACAAIgEAFQgLAJgUgHIgEgCQgJgHAEgMQACgFgFgRIAAgCIABgBQgBgLALgBIABAAQACgEgCgCIgDACQgLgCAXgMQAbgOgiACIgCAAQgJABgDgEQAOgBAKABQANABAFAFIABABQgSADAAAHIABAAIATgCQAQAAAIAEIgCADIADgCQAMgFAKAFIABABIAAgCQAJgHAIACIAAAAQAIACAIAKQAEAEABAHIABAEQAAgQgBgNIABAAQARAJAHAJIACAEIAAgDIAAgEQAHgEAGADQAGADAEAKIABABQACAFAIgEIgEgFQgCgFAXAHIACABQgBgIgEgHIACACQAXAYgNAbIAAACQgCAGgDAEQgEAEgFADIAAAMIAAADIAAACIAAAHQAEAQATACQAHABAHAEQBlA0AxBnQADBbgxAnIAAAAIgDADIgDACIgNAIIgLAHQgFAEgDAHIgGANQgDAIACAIQADAWgDARIgBACIgLAPIAAACQAHAOgCAZIgBACQgMAWgLAYIgBACQgDAcACAXQADAXAIAUIgCAAQgUABgTACIgBAAIgBAAQgvAHgmARIAAAAIgDABIgUAKIgCAAQgjACgjgDIgigEIABABQAUBiAGBzIADBBQAAAGgDADQgJAMgNAHIgCAAIgBACIgPAGIgIACIAAABQgZAFgYAAIgXgBIgCAKQAAAKAJACIAFAAIACgBIACABQALAKASAEIAAABQgXgGAAALQAAADACAFIAEABQAMgHAUgDIABAAQgTAFABAOIACAAQAMAFALgCQAKgCAIgIQgHANAKgDQAdgHAWgKIABgBIAAACQgeAYgsAAQgOAAgPgCIAAgCQgHgKgMgEIAAgHIABgEIAAgBQAAgPgNAAQgHADgDAIIgMAXIAAABIgGADQgQAIgagCIgEgBQgHAEgGABQgGACgEADQgNAIACAQIgBACIgDABIAAABIgDADIgBABQgDACgEABQgDAEgEAAIgBABIgPABIgBABIgQAAQgZADgegEIgBABQgQAFgMAIIgDABQgPAEgMAAQgWAAgNgMgADrKkQgGAEABALIAAABQAVAFAlgEIAAgBQANgFALgGIAFAAIABAAIANAAIAfAAIADAAIAOAAIAOgBIgBABQAHgBAGgCIAEgBIACgCIABgBIABgBIABAAIACgBIgCAAIAAgBQAEgEACgFIAAgBIAAAAIgEABIgFACIgBgBIAAABIgCAAIAAABIgFACIgJACIgBgBIgRAFIgLAEIAAAAIgDgBIgWgLIgJgFIgBgCIgIgTIgDgIIgCABIAAAAQgkAQgugCIgBAAIgKAAIgHgBIgMgBIgEgBIgCAAQgMgDgLgBIgGAAQgHAAgHACQgGABgGADIAAABIAAACQAHATAPgDQAGgCAIgGIAHgBQAHADgVAFQgFABAAACQAAABAFACQAEAHAFAAQAFAAAGgGQACgDAGABQACABAAAAQABAAAAAAQgBAAgBAAQgBAAgCAAQgTAOAagFIACgDIADgDIAGgBIAGAAQADABgDAEIgGAGIgEACQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAIABIAAAAIACAAQAAgGADgCIAEgDIAFAAIABAAIgBAAgAEbEPQAVABAEASIABAAIgBAaIgDCdIgBAMIAAAaIAAALIAAAKIgBAEQgBAIACAHIgBAHQgBAHAFABIABAGIABAJQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIABAGIAAACIAAADIADAQIAAABIABAGIABADQADAKAEAJQAEAJAGAIIAEAFIABACQANAGALABIAAAAIARAAQARgBAPgJIAFgFIAAAAIATgMIAbgQQgMgKgJgPQgJgQgDgYIAAgCIAAgCIAAgCQgCgNgHgIIgBgBIAAACQgMANgSACQgJABgLgCIgCAAQgGgFgEgIIgFgNIgCAAQgNgCgEgKIAAgCIADgPIACgJIABgBQAIgIAAgPIAAgCIAAABQgZAUgEgnQAHgMAIgJIABACIABAAQALgLgDgMIgDgIIAAgCIgCgBQgFgGACgNQAFgHABgKIABgEIAAgFQgXgEgBgWIACgDQAGgLAMgFIACgBIAAgBIACgBQABgwglgOIgCAAIgCAAQgRgCgOACQgQADgNAGIAAADIABAMIABACIABABIABAEIAHALQADACABADIAAACIAAADQAAAAAAABQABAAAAAAQABAAABAAQAAgBABAAQADgDAFgIQACgDAGAAIADAAgAgrJ0QgDAIALAJIACAAQALADAIgCQAFgBAEgEIAEgFIABAAQAJAIANABQANABAQgGQAMgFAQgBIAQAAIAGgBIABAAIAEAAIABAAIARAAIAAAAIAdAAIACAAQAOgBAEgIIgCgGIgEgLIgDgDIgHgDIgGgMIgFgIIgLgQIgFgLIgIgOIgKgQIgBgBIgDgGQgZgvgMg+QgGghgOgaIgBgBIgCAAQgHgBAAgJQAZgWAagWQA0gqA6gkIACAAIAAgCIAAgIIgCAAQgJgQgMgJQgMgKgQgDIgHAGIhVBBQgXATgTAVQgTAUgOAWIAAADIAAACIAAADIAAAcQAsBZAwBWIAGALIANAaIAEAIIAEALIgBAAIgCACIgBAAIgBAAIgCABIgFACIAAAAQgWAIgdABIgXAAQgYgBgVgEIgWgGIgQgGIgFABQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgBADIgDAHIABAAIAAAAIAAABIAAABIgCAAIACADIAAABIAIACIAAAGIAAABIABAAIABABIAAABIAAAAQAFACAFgBIABABQgBAEACADIABABIAAAAIABABIAAgIIAEgCQALgEAIACQAHACAEAIIgCgBQgHgDgIAAQgHAEgBAFgADJKBIADAAIANABIAHABIALAAQAtAAAggVIACgCQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQgFgGAAgLIAAgCQgDgHgBgJIAAgJIgBgBQgugxgpg2IAAgBIgBgBIgJgNIgHgIIgFgHIgJgKIgGgKIgIgOIgBABIhXgCIAAAAIAAABIgBABQgCACAAgEIgFAAIAFASQAMA3AVAsIABAAIAAABIABABIAGANIACADIAFAHIAIAPIAGAMIAJAPQAEAIAJAGIgCgFIARAUQABAFgEAEQgOAJAJACIABABIADAAIAZADgAHNHeIgCABQgGACgFAEIgBAAQgKAJgEAPIgBAHQAAARACAVIAAADQAHAUAFAVIAAACQAJALAKAJIABABIACACIAGAEIABACQASABANgFIAAgBQAHgHADgLIABgCIAAgBIABgBIAAgcIAAgCIAAgEIgBgOIABAAQAQAHASABQARABATgGIACAAIADAAQAKABACgJIgEgRQgDgRgCgSIgBgYQABhGAHhBQABgIgBgIQgBgHgDgGQgJgRgEgYIgBgEIAEgOIADgMIAAgDIABgCIAAgDIAAgCIgDgBQgZgDgegBQgbgBgWgKIgGgDIAAAAIgBAAIhKgfQAIAdAAALIgBgCIAAAAIAAAHIAAAMQAOBKAQBHIAMA3QAFATACASIAAABIAEABQAXAKANAUQAIANAEAQIAAACIABAEQgGgSgKgOIAAgBIgBgBQgNgSgVgKIgCABgAC1FJIgKASIgHARIgBADIAEATIAJARQADAIAFAHIAJAPIAJALIAKAMIAIAJIAAABIBHBUIADADIADAEIABgFIABgCQgBgKAAgJIAAgEIABABIAAgGIAAgKIgEgZIAAgCIgFgKQgag0gigtQgFgGgIgDIgEgCIAEgGIABgCQAPgaAIgYIgBAAQgFgBgHAEIgLAIIgBABQgKAKgOgBIgKgBIgBAAgAJXHGIgBATIgBAYIAGALIACABQAAALADAKQAEAKAHAIIACgBIABgBQANgHAIgLIAAgDQgBg3gEg3QgGhVgPhTIAAgDIAAAAQgOACgBgEIgCgCQgCACgDAIIgCAMIgBACIgCACQAHAZAIAWIACAIQACAIgBAJIAAAAIgFBLIAiACIAAABIgBAAIgigBIgDAngAFXHuIAAADQgEAWASgBQADgIAAgGQABgVgGAAQgEAAgIALgAEWEVQgHACgGAGIgEAGIgGALQgRAegUAcIABACIAOAOQAOAOAMAQQAUAeAOAlIAHhCQAEgtABguIAAgCQABgcgSgKIgKABgACsGVIgCgCIgIgNIgEgGIAAgDIAAgQIACgBIABgCIAAgCQAFgHACgHQACgIAAgHIAAACQgSAOgIAWIgCABQgMALgHgXIgBgFQAKgMAHgPIAAgCQgDgRAQgRIADgCIgCAAQgHgCACgNIABgDQgcALgZARQgaARgWAXQgBAHAFACIABABQAOAZAJAeIAAgBIAFAAIBbADIAAAAgACbEkQgQARAHARIAAACQgGALgLAQQAAAEACACIACACQAOgTAUgPIAAgBIAIgGIATgNIAAgCQABgMgCgJQgCgKgEgHQgSAJgOAOgAFPFCQAQAVAGgfIgCgBQgEgDgEgBIgFAAQgIAAgIAKQAAAGADACQAFAEgBgIIACABgADHEcIACALQAEAWgNAJQATgDAEgOQADgLgIgTQgDgIAEgFQADADADAEQAIANgCAXIACAAIAAgCQALgYgPgUIAAgBQANAKAFAQIABABIAAgBQAAgRgEgLIgDgIIACABIAAABIAEAFIACADQAHANgDAOIgEAKIgBABIABAAIAAABQAGADAEgEQAEgEACgKIAAgEIAAgBIAAAAIgBgBIgCgDIgBgBIAAAAIAAgBIgBAAIAAgBIgCgEIgBgBIAAAAIgBgBIgBgCIAAgBIgBgBIAAAAIAAgCIAAAAIAAgBIAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBIgCgCIgEgGIAAgCIAAgPIAGgKQAEgIgCgJQAAgCAEgBQABAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAIACgGIAohVIABAAQgDhWgLhNIAAgCIAAgCQgGhMghgxIgCAAQgNADgKAGQgPAIgKAOQgCA0AaAWIABAAIABABQAYAKgRgcQgDgEAGgCQATAcACAuIAAACQALA5AGAyIAAADQgMAngRAiQgLAVgJAXIgFANIgFAPQgHATgZgBIgCAAQgOACgGAKIAAAGIAAAIIAAADIACgBQAPgHAOgJIAGgEIACgBQAFALACAOgAEDDOIgBABIgLAVIAAACQAJAFAQgFIAIgDQAGgDALACIAAgDIACAAIABgCQASgNAGgWQAGgVgHgeQgEgVgRgLIgBAAQgRA2gbAqQAggCAKATIgCAAIgBgBQgFgFgGgEIgCAAQgGgCgGAAQgGAAgGACgACyB7QgQAMgLAQQALAPASAJIAEACQAOAJAIAQIACgBIAJgQQAOgYALgbIAAgBIgZgCQgUgDgRgGIgCABgACqBqIAAACIAIAJIACABQAQAGAVABQANABAPgBIACAAQAJgRAEgVIABgBIAAgCIgThyIgCAAIgXADIgGABIgLABIgBAAIgeADIgEABQgHACgIABIgGACQgHAEgHAAIAEAKIAAAAIACAAQAUAyAOA6gANWgcIAAACIgFABQAYANAJAcIABABQAJgLAEgOIABgBIAAgVIAAgDIAAgBIgBgBIgLgDQgOABgRAJgABoiCQgEAWgHAUIgCAGIgBAEIAAAKIAKAWIACADIAAACIABABIAAACIABABIABABIAKAKQANAKAOgHQAIgEAJgBIADAAQAFgCADACIACgCIADACIABgBIAVgCQASAAAPgHIACAAIAGgGQACgCAAgDQgDgSgUgDIgBAAIAAgBQgYgOgBgiQgBgbgFgLIgBACQgLATgJAWIAAABIgBADIABAAIABABIgDABQgEAIgGAGQgEAFgHABIgPAAQgGgCgFgEIgBgDIACgIIAAAAIAAABIABADQADAEAFACIAAABIAAAAIADAAIABABIAKAAQAIgCAFgHIAAgBIAAgBIADgEIAEgGIABgBIABAAQAHgRAEgSIABgDQgNgQgEgZIAAgCQAOgOAHgRIgCgBIAAgBQgEgKARAJQAHAEAEgDIAAgCQAMgCAGgGQALgKgFgVQgCgDgEAAIgFABQgVAGADgLIgCAAQgQAAgNAOIgCAAQgLAGADgIQALgCAFgHIACgDIgBAAQgIgCgXAGIgCABQgNAUghgBIgCgBQgNgRgLADQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIAAABQgVgFgLAQQABAHAGAAQAZABAEABIAAABQgUAHgSgHIAAgBIAAADIAGAcQACAMANAGIAYALQAjAAAKgCQgJAHAIAOIACAAQABAZgDAVQgBgLgMAAIgBAAgAEFkCQAAgOgHgOIgEgGIgBgCIAFAIQAMASAHAGIAAgBQADgSgQgTIgBgBIACAAQAHALAKAIIAAgDQgGgWgLgGIACAAQAMAHAGAMIABgCIAAAAIAAgCIABAAIAIgLIAFgGIAEgKIgCgBQgRgQgbAJIgBAAIgBAAIAAAAIAAAAIAAABQgDAKAAAHIAAACQAAAHgTgFQAAAGAFACIAAACQAJAGAGAKQAGAKADAOIACABIAAACIAAAAgABhk4IgLAGIAAACIgEAHQgKAHABAMIABAEQACAFAEABIAEAFIAAABQAmAIARgaIAAgCQACgRgHgHIgCgBQgFgEgFgCIgZABgADZkWQAKADADAIIAAgBQAKgMgHgRIAAgCQgFgEgHAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAgBQgCgLABgYIgCAAQgMgegdgNIgDAAQgygKgfARIAAgBQAagSAkACQgSgDgZABIAAABQgPADgHAKIAAAAIgCADIAAADIAAABQABAJADAGIABACQAfAkBAgOIADgCQACgGAFANIACgBQAHgCgGAIQgLAOAJAEQAAAAABABQAAAAAAAAQAAABAAABQAAAAgBABIgBAGQAHAQAFgXIAAAFQgBAMgGAHIAFAAQAIAAAFACgAAbkZQACAEADACQACAEAVABIACgBQANgJAHgRIAAgCQAGgKgJgEIAAgCQgZgGgPAMIAAAAQgEABgDAEIgBADIADgDIAEgCQAKgBADAKIABACQgBAJgHACIgHABIgBAAQgHgDAAgIQAAAHADAGgACNkyIAAACQAEAJgBAPIAAADIABAAQAOgCgEgIIADAAQAMABADgIIAAgCQAMgKAAgMIAAgDIgDACIgKAEIgFABIgDAAQgUAAgRgHIgDgCQARAEAbgEIACAAIgCAAQgjAAgXgMIAAACQgNAMgcgCIAAACQALAHAPAAIAAAAIABAAIALgBIACAAIALgDIACAAQAKAFAJAHgAAmlgIAAADQATAZAkgGIgBgBIgDgEQAHAEAFgDIADgBIgSgWIAAgCQgJgcgigDIAAAAIAAACQAWAEAKARIACABQgLAGACAIIABAAIATAPIABACQgHAAgDgDQgLgRgPAAQgHAAgIADgAJnnmQAHACgBAIIAAAEQAAACgDACIgFACIgIABQAHAJANgIQABAAABAAQABgBAAAAQABAAAAAAQAAAAAAAAQAGAKAKgOIABgDIAAAAQAGgUgVgEQgKADgGAHgAurKbQgdgLggAAQgRAAgTADQgUADAKgFQgWgDgYAHIgEABQABgGgNgBIgCAAQgFACAAgEQA2gEA6AFIAAAAIADABIACAAQAdADAdAGQAiAHAagLQAXAOADgYIAAgCQgjgEAWgEIABAAIAIgCIACAAIAGACIABAAQAMAFAAAKIAFgBIACgBQABgPgOgFQARAFALAAIABAAIAAgBQgMgPASAOIACgBQAVgKgQgNQgLgJgNAJQgQAKALAEIACAAQgEAEgLgDIgCAAIgBAAIgFgCIgBgBIAAAAIAHgCQANgGAKgLIgUgDIgCAAQgKgBgJgCQgdgGgOgUQAEAAgBgHIABAAIAAgCQBThlBehYIgFgDQgBAAAAgBQAAAAAAAAQAAgBABAAQAAgBABgBIAJACIAOgMIAAgBIAPgOIAagWQAMgLAGgRQgPgegYgUIgCgBQgLAAgGgIQgMgRgdgBIgCAAQgRAHgMAMQgEADAFAEIADADQgGgEgNADIAAAAIgCABIACAAQAQADgKABIgDABIABABQAkAaAeAeIAAACQgHAIADARIAAABIAAABQg3Awg7ArQgUAOgMAVQgaAsggAlIgYAaIgCAAQgVASgXAPQABANAKAFIgBgBIgCABQgFADgDAAQgKABAAgYIAAgDIAAgEQBGhdBchGQA+gvA5gzIAAgBQgBgOgCgPIgCAAQgfgYgdgaIgCAAQgrAIgZAbIgCABQANAMARAJQATAJACAPIAAAFQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgcAQgUAWQhUBchdBTQgHAHgIAEQg0AfgtAjQAHAVAbABIAAAAQACABAAAEIgCAAQgOAFgSACIgDAAIgBgCIAEAAQAKgDAIgEQgUgEgEgSQAngpA3gbQANgHAMgKQAegbAdgdIASgSQADgBADgDQADgDABgDIADgEQAbgdAZgfQgNAKgUAJIgEADIgCACIgBACIgBAAQgFADgFACQgKAEgKABIgPADIgBABIgagBIAAAAIgRAAIgBAAQgHAAgIgDQgGgBgIAAIgDgDIgDgDQgHgDgHgCIgBgBIAAAAIgDgDIgBgBIgBgBIgFgGIAAgBIgDgBIgDAAIAAgBIgDgDIgCgBIgFgGIABADIgMABIgqABIhMABIgPAAQgSgCgSAAIgKABIgXgBQgOgFgQgBIgMgBIgCgBQgogXgvAEIgxgIQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIACgEIBYABIAGADQASAJAOANIAZACQBUAGBUgGIAQABQAcADAcAFQgYgegKgtIAAgCIAAgCQgDgxAYghIABgCQABgPgDgLIgBgBIAAgBQgugYgChCIACAAIAAgCIAAgDQAMgKARgDIAAABIACABQAMALARgJIAAgCIgFgHQgHgPAKgUIAAgCIgShCIAAgBIgGgTIgDgJIAAgBIgJgcIAAgBQgVgBACgYIgDgCQgEgBAAgCQAAgGgCgFQAEAJAJAFIAAAAIAAAAIABACQgDASAPABIACAAQAEgJAHgGIAAAAIABgCIAAgCIAAgMQAMAEAEgLIABAAIAAgBIAAgBIAAgBIABgBIABgBIAAgDIAAgCQAFgHAJgCIAGAMQADAHABAJQAMgHAGgOIABAAIACgGQAGgRgKgMIgHgJQgCgHACgGQAEgIAFgHIAAgBIAYgXIASgSIAdgeIAJgJQAogpApgmIAAgBQBCAlAuA5IABACIgGgGQgwgug2gnIgCAAQguAqgrAuQgkAlgiAnIgOASIAGADQAHAFACAJQADAJgDAJIgEAMQgFAPgLAJIgCABIAOAvIABAFIAAAAIACAFIACgDIAIgPQAMgWANgTQAzhKBQgsQAugZAzgVQhFAnhDAqQhJAvgqBOQgDAEgBAFIgHAKIAAABIADAKIAAACIADAGQAPAfAOAjQABABAAAAQAAAAABAAQAAAAABAAQABAAAAAAQADgUAOgIIACAAQAOAEAKAIIAAABIAAABQASANAKAWIABABIACAAQAuANApgPIACAAQAchgBMgvIACAAIAAgDQAqgjBAgNIACAAQAgBLAqBBIABABIAEAFIABACQAPAXAQAWIACABIACgCIAAAAIACACIAAAFIgEACIgCgBQgTgYgSgbIgEgHQgpg/gdhMIgCAAQg+APgsAhIgBABQhEAugdBUQgFAJAFgBQAMgBgRAOQAHAEACAIIAAADQAbAIARASQAQASARAQIACABIABABIAAAAIABABIAIAGIAIAIIAIAHIgGgEIAJAKIADACIAFADIANALIAGAEIAKAHIAGAEIADABIAAAAQgEAKASAKIAAACIABABQAdAUAOAiQgFAQgKAKIgvAqIgLAKQAhAFAgACQClAJCmABQAXAAATANIBMACIDLAFIAAACQhjALhngDIhAgEQgJAAgIgEQgQgJgUAAQirgDirgGIgBAAIgNgBQgZgDgXgLQgoAkgkApIhmBzQgDAGACACQAZAQAmAEQARACASAFQAfAIAQgRIACAAQATgEAUAGIACABQAJADABANQgCALgIACQgcAHgZAJIgCAAIgkgFIgCABQgKAVgeAAIgEAAIAAACQgOANgRgKIgCAAQgMADgKAGQgTgBgQgGgAsaJ3QAJAJASgBIAEgBQADgTATAKQAJAAACgGQALgWAAASQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAEALAKgWIgBgCQgPgQgbAGQgEAPgXAAQgPAAgCAQgAuGHkIgTAOQgwAogkA0IABAKIACAAIAAgDIACgCQArgpAoguIABgCIABgBQANgLAAgLIAAABgAxMDNIACACQADAFABAGQACAHgCAKQgTAbgHAmIAAACQADBFAlAjIABACIAFACIARAFIAAAAIACAAQALALAPAHIAHACIAAACIAmAAQAOgCAOgDIABgBIAJgDIALgHQAFgCACgEQAKgDAIgGIACgBIACgCIAHgHIACAAQAHgPADgPIAAgCIAAgBIAAgCQAGgkgPgnQgdhLgyg2QgDgDAAgHIAAgBIAAgCIACgEIAAAEIAAACQAwA5AeBIIAGALIAAAAQAFAJAFAAQACABAEgEQADgFAFgCIAAgCQAdgVAkgOIACgBIAHgCIACgDIAAAAIAAgBQgMgXgVgQQAUAMARAQIACAAQATgHAYgOIACAAIAJgCIAEgDIAAgBIgDgDIgIgGIgKgLIgMgMIgNgMIgBgBIAAAAIAAgBIgCgCIgCgBQgRgPgRgRQgQgQgZgIIgBAAQgLgMgCgJIABAAQgJgCgLAJIgWAAQgdACgRgLIgCgBIgBAAQgBAQAAAQIgBAAQgFASgJANQAag4gmgtIgBAAIgCgBQgEgDgEAAQgKACgFAKQgKATgLgIIgCgBIgBgBIAAABIAAABIAAACIAAADIAAACIgCAAIAAgBIgBAAIAAgBIAAAAIgBgCIAAAAIgBgBIAAAAIAAgBIgBgBIgBgCIgBgCIgDgFIgJgTQgEgNgEgOIgDgPIAAgBIAAgCIgBgBIAAgDIgHgUIAAAAIgBgGIgBgBIgOgpIALAqIAAABIACAGIAAAAIAFAUIACAHIAAAAIAAABIAAABIAAAAIAEAMIAAAAIAHAcIAGAWIABAEIAAABIAAABIABACIAAABIABABIAAABIAAAAIAAACIABABIAAAAIAAABIAAAAIAAAAIAAABIAAABIABAAIAAABIAAABIAAABIADALIAAAAIATBHIAAAAIABABIAAABIAAABIABADIAAABIAAAAIACAFIABAFIAWBQIAMAuIACAAIADAAIACABQALAFAIASIAAACQgFATgHAIIgCAAQgIAFgOAAQAIAHAQgGIAAABQASADALgGQAIgFgBAIQAAAEgJAAIgDABIAFABIAAABIgCABQguASgwAFIgBAAIgBgJIAagMIADAAIgBgCIAAAAQgUgJgIgVIAAgCQABgQALgIIABAAIAAAAIgVhhIgBgFIgBgEIgBgEIgCgIIAAgBIgGgZIAAgCIAAgBIAAgCIAAACIAAABIAAAAIABABIAAABIAAAAIABAFIAGAUIAAABIADAMIABAEIAAAAIAAAAIAAABIABADQAOAwARAtIABAAIAAAAIAAAAQgJgxgLguIAAAAIgBgFIgBAAIAAAAIgDgQIgBgBIAAAAIgCgKIgDgKIAAAAIAAgBIgBgEIAAAAIAAgBIAAgBIgBAAIAAAAIAAgDIgBgBIgDgMIgDgMIgDgIIAAgDIAAgBIAAAAIAAgDIACAEIAAAAIAAABIAAAAIABABIAKAhIABAEIABABIABAEIAAABIAAAAIACAKIAGAbIABAFIABAAQAEAAgBgHIAAgCIAAgDIgFgVIgCgLIAAAAIgBgEIAAgCIgBgDIgKgiIAAAAIAAgBIAAAAIgDgIIAAgBIgBgFIAAgBIgBAAIgBgEIgDgOIAAgBIgBgBIAAgBIAAgCIgBgBIAAgCIAAAAIgBgCIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgCIgBAAIAAgCIgBgDIAAgCIgBgCIgFgWIgBgBIAAgBIgHgcIAAAAIgBgFIAAAAIgBgDIgBgDIgCgIIAAgBIAAgBIgGgUIgCgKIgKgmQgFgUgGADIgEADIAAAAIgCADIAAAEIAAADIACACIAAADQADAIgHgDIgCAAIgBgBQgLAJALAXIABABQgEAGgBgKQgCgOgIgDIAJAgIADAKIAGATIAAABIAIAYQADgKAEAQIACgCQACgCgBgFQgHgRAFADIACAAQAEAFADAGQADAGACAHIAAACIADALIAHAYIABAFIABACIAAABIAAABIABABIAAAAIAAADIAAAAIABAAIAA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JIgBACIgDADQAKAPAHgQQgBAMAIALIAAABQgNgKgVgDIAAACQgMAJgCAUIABACIAAABQAIAgAagTIADgCIAAAAIgBADQgDAKgKAJQgBABAAAAQAAABAAABQAAAAAAABQABAAAAABIACACQAEAFABAHIgBAAgAqhmXIgBAGQgDARgDAIIAAACIAAAAQADAEAAAFIAFgOIABgCQgBgJADgKIACgFIAFgMQAMgTgHgOQgMARgEAagAqrl+IAAABIAAgCQAKgeAHggQgJgBgDAFIgCADQgHgFgNAMIAAACQACAPAFAMIAAABQAFgCACgKIADAfgAqAnIIgDACQgJAbgKAYIgCAEIgCAEIABAJIABABQAIgFAEgHIABgCIAEgLIAAgCQACgLAFgIQAMgRgLgIIgBgBIAAABgApQnWQgCAOgFALIgEAFIAEgCIACgCQAFgEAFgDIACAAQAIgQgDgTQgLACgBAOgApEnJIABAAIADACQAGACAFgPQAFgMgBANIAAAAIAAACIABgBQAZgPgEggIAAgCIgBACQgOAOgMADIgBAAQgGAVgHASgAChk5IADAAIgHABIAEgBgAoyl4IAAgRIAAgNQAAgIABgHIABgCQACgDAEgDQALgBAJADIABAAIADACIABAAIAFADIABADIABABIABADQABABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgCgDgEgCQgEgDgFgBIgBgBIgCAAIgBAAIgJgBIgCABIgDACIgBACIgBABIAAAHIAAAKIgBAWIABADIgGgBgAoUmDQgKgIAIgKQACgDACgCIABAAQAFAAAEABQADACABACQACADAAAFIAAAEIgCAEIAAAAIgCACQgEACgEAAQgDAAgDgCgAJhmEQgMAAgGgJIgCAAIAAgCIgBgBIgDgDIgBgBIgCgBIAAgBIgBgCIgHgIIAAgBIABgBIABAAQAHAFAFAGIAEAFIACABIABABIAAACQAFAEAGABIACAAIA2ABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIABgBIABgBIACgCQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIABAAIAAABIABAAIgBAEIgCACQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABgBAAIAAABIgIABIgjABIgSAAgAKmmRIgBgCIAAgBIAAAAIgCgBQgDgFAAgGQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACgBIABABIAAAAIABABQACANANACIAAABIABAAIAAABIgBABIgDABQgFAAgFgEgAKdnCQgBgEgBgGIAAgCIAGgKQAIgJAKgDQAHgCAHAAIADAAQACAGABAGIAAACQABASgTAKIgCABIgJACQgJAAgEgJgAKinFIABACQAXALAKgbIABAAIABgFQABgMgNAAQgOAEgCAFIAAAAQAMACgCAMQgCAJgJgCIgHABgAMWoDIgCgBIAAgBIgCgBIADABQAPgDgXgJQgJgEgKgCQgNgDgOAAIgEAAIAAAAIgDAAIAAAAIgPABIAJgGQAOgHAUgCIAAgBQgUgCgQABIgEAAIgKACIgDAAIAAAAQgKADgHADIACgEIADgFIAEgFIABgBIAAACIgBAAIgCADIAEABIAEABIAAAAIADAAIAMgBIAEAAIAHgCQAWgEAMAGIAEAEQgPACgNAGIAAACIAAAAQAOACALACQAiAJAQASIgDAAQgLgCACAGIgKgJgAnYokIAAAAIgBABIABgBgAl8pdIgBgEIABAEIAAAAIAAAAgAGCq8IgBgBIgBAAIADgBIAAACIAAAAg");
	this.shape_15.setTransform(9.4,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Youplural, new cjs.Rectangle(-143.3,-105.4,304.5,198.9), null);


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
		var vo = createjs.Sound.play('VO8');
		
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
		
		 window.open ("pronoun_Scene9.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pronoun_Scene7.html","_self");
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
(lib.pronoun_Scene8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.textyouplnom();
	this.instance.parent = this;
	this.instance.setTransform(275,195.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.pronounheader();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,43);

	this.instance_2 = new lib.Youplural();
	this.instance_2.parent = this;
	this.instance_2.setTransform(262.3,199,1.343,1.343);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// btn
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'F8843B5E8329F24EA4FC47D17EFFC9B9',
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
		{src:"sounds/VO8.mp3", id:"VO8"},
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
an.compositions['F8843B5E8329F24EA4FC47D17EFFC9B9'] = {
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