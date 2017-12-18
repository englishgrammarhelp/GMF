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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE737").s().p("AgEUvIgDgMIgKgdIgDgLIgDAAIhYAAQAHgKALgGIAEgBQANgJAMgJIAHgGQAIgHAMgEQgMgngNgjIgBgEQgEgGAEgEIAyAkIAEACQAJAGAIAIIA2gpQAJgHAKgEIABABIAAACQgEAQgFAMIgMAhQgEAKgBAOIACAAIBFAxIAAACIhaABIgNApIgBAEQgFAWgKATQgIgOgEgUgAtsObIgnAUIgCACQgVANgTAFQAEgQAKgQIAHgMIAPgbIADgKIgBgCIg+g+QAMgCAMAEIADAAQAQAFAOABIAJABQALABAMAFQASgkARgiIABgEQABgGAIAAIAJA8IAAAEQADAMABALIBDAJQALACALAEIgBACIgCABIgZAOIghAOQgJAFgLAJIABABIAOBUIAAACIhBhAgANXOqIAOhUIABgBQgLgJgKgFIgfgOQgNgFgNgJIgBgBIgBgCQALgDALgCIBDgKQAAgLADgLIABgFIAJg9QAHABABAGIABAEQARAjATAiQALgEALgBIAKgBQAOAAAPgFIAEgBQAMgFAMADIg/A+IgBACIAEALIAOAbIAIALQAKAQAEARQgTgHgVgMQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgogUIhAA/gAT4A9IgxhEIAAgCQgOABgKAEIghALQgMAFgPAEIgDAAIgCgBQAFgLAHgIIApg2QgIgHgGgLIgCgEIglgxQAFgEAGADIAEACQAjANAnALQAEgLAHgJIAGgHQAJgLAJgOIABgDQAGgLAKgIIAABZIAAACIALAFIAcAJIAOADQATAFAOAHQgTAKgWAFIgEABIgpAOIgBBZgAz4A9IgChZIgpgOIgDgBQgXgFgTgKQAPgHATgFIAMgDIAdgJIALgFIAAgCIAAhZQAKAIAGALIACADQAHAOAKALIAGAHQAIAJADALQAngLAjgNIAEgCQAGgDAFAEQgTAZgSAYIgCAEQgGALgIAHIApA2QAHAIAFALIgCABIgCAAQgPgEgNgFIgggLQgLgEgOgBIAAACIgxBEgANVsCIgKhDQgLgBgMgDIgDgBIg+gJQAAgGAIgCIACgBQAjgQAkgTQgGgLAAgLIgBgJQgCgPgEgPIgBgEQgDgMABgMIA+A+IACACIALgFIAbgOIAMgGQAQgLAQgFQgGAVgNAUIgBADIgUAmIA/BBIgBAAIhUgNIgCgBQgIAKgFAKQgGARgJAPQgFAMgIANIgBACIgDABQgDgLgBgLgAsvscIgCgCQgHgNgGgMIgPggQgEgJgJgLIgBABIhVAOIgBgCIA/hAIgTgmQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgNgVgGgTQAPAEARAKIALAHIAbAPIALAEIACgCIA+g/QACANgDAMIgCADQgEAQgBAPIgBAJQgBALgFALQAjATAjAQIADABQAHACAAAGIg9AJIgDABQgMADgLABIgKBDQgCALgDALIgCgBgAA+x5Ig2gpQgIAIgJAGIgEADQgaARgYATQgEgFAEgGIABgEQANgjAMgnQgMgDgIgIIgHgGQgMgKgNgHIgEgCQgLgGgHgKIBYAAIADAAIADgLIAKgcIADgOQAEgSAIgPQAKATAFAXIABADIANApIBaABIAAACQgjAYgiAZIgCAAQABAOAEALIAMAgQAFANAEAOIAAADQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQgKgFgJgHg");
	this.shape.setTransform(190.9,193.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBB31").s().p("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");
	this.shape_1.setTransform(190.9,193.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC8F15").s().p("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ARATIASATQAKgDALgGIAGgDQAOgJANgHQANgFAMgBQAKACAKAHIACACQAGAFADAHQAKAWgPAWIgBACQgFAMgHAMQgGAJgEALQAAAGAGAFIAcAYQANAKAEALQAFALABAKQgDAHgEAHIABABIgOAOIgBABIgMAEQgKADgKgCIg2gLQgJALgEAMQgKAWgRAXQgCACgFADQgJAEgKADIgQgGgAM2vlQgGAAgGACQgFAMACALIABADQADAGAAAFIAIA3QgLAHgMAGIgGADIgfAQIgGACQgPAEACAOQABALAMADIAUACIANACQAWACAWAGQAIAlAEAlQACAOAMACQAGADAGgGIADgFQADgHAFgJIABgDQALgSAIgSIADgEIAHgNQATAGATACQASABATAFQAMACAHgMIAAgDQACgFgEgEIg5g7IABgHIAFgKIAJgRIABgDIAFgGIAIgOQANgRgLgRIgMgCIgDAAIgHAEIgWALIgqAXIgwgyQgKgKgIAAIgBAAgAtAr6QgEgBgCgDQgSgXgKgXQgEgKgIgMIg3ALQgKACgKgDIgLgEIgCgBIgNgOIAAgBIgHgOQABgKAFgLQAEgLANgKQANgKAOgNQAHgHAAgFQgEgKgGgKIgMgXIgBgCQgPgXAKgWQAEgHAFgFIACgBQAKgIAKgCQAMABAOAGQAMAGAOAJIAHADQAKAHAJACIAUgTIARgTQAGgIAGgDQANgGALgDIACACIASAGIABABQAJAJAGAJQADAQgDAPIgBAEIgCAHQgBAUgGAUIAaANIALAFQASAHATATIgBABQAHAMAAALIgCACIgEANIgCACIgNANQgTAFgUAEIglAEIgBACQgCAlgKAlIgCACIgOAOIgBAAIgRAHQgKgEgJgFgAtatRIADAEQAIATALASIABACIAIAQQABADACACQAGAHAGgEQAMgCACgOQAEglAIgmQAWgFAWgCIAOgCIASgCQANgCABgMQABgOgNgDIgGgDIgggQIgGgEQgMgFgLgHQAFgbADgcIADgKIABgEQACgLgFgMIgMgDQgIAAgLALQgXAagYAYIgrgXQgMgHgKgEIgHgEIgDAAIgMACQgKARAMARIAIAOIAFAGIABADIAJARIAFAKIACAHQgdAdgdAeQgDAEAAAGIABACQAGAMANgDQATgDATgCQASgCATgGIAHANgABJxIIgDAAQghgSgcgZIgCgBIgcAXQgQAMgSAJIgSAAIgDAAIgMgFIgCgBQgJgHgDgOIgBAAQgBgbAIgRIAFgMIAJgcQgTgJgOgOIgGgDIgEgCQgNgJgJgNQgCgLAAgMIAAgCIAIgRIAAgCQALgHAMgEQAHgDAKABQAMACANAAIAcAAQAEgJADgMIACgHQAEgQAFgNQAFgNAIgKQAIgFAMgCIADAAQAHgBAHADQAXAIAFAbIABACQAFAMADANQACALAFAKQAEAEAJgBQAUAAAPgCQARgCALAFQALAEAIAHIAFAOIABAAIAAATIAAADIgFALQgFAJgJAFIguAfQACAOAEALQAJAXAEAcQABAEgCAEQgDAKgFAJQgHAEgJADIgBABIgUAAgAh30EQgEAEgDAGQAFALAJAHIAEABQAFADAEADIAsAiIgHAZIgCAGIgKAiIgDAGQgIANAMAIQAIAHAKgHIAQgLIALgJQARgOASgMQAgAVAdAXQAMAKAJgIQAHgCAAgIIgBgGQgEgIgCgJIgBgDQgGgUgHgTIgBgFIgEgOQASgJAOgMQAPgMAQgKQAKgIgDgMIgCgDQgDgEgGgBIhSgBIgDgGIgEgKIgGgTIgBgDIgBgHQgDgIgBgIQgDgVgUgEIgJAHIgCACIgCAHIgHAYIgOAuQgjAAgjgBIgCAAQgMAAgGAGg");
	this.shape_2.setTransform(190.9,193.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9933").ss(37.3,1,1).p("ATPAAQAAH+lpFoQloFpn+AAQn9AAlolpQlploAAn+QAAn9FploQD6j6FChNQA5gNA8gJQBYgLBcAAQBcAABWALQBEAJBAAQQE7BPD1D1QFpFoAAH9g");
	this.shape_3.setTransform(190.7,193.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0033FF").ss(49.4,1,1).p("ATPAAQAAH+lpFoQloFpn+AAQn9AAlolpQlploAAn+QAAn9FploQD6j6FChNQA5gNA8gJQBYgLBcAAQBcAABWALQBEAJBAAQQE7BPD1D1QFpFoAAH9g");
	this.shape_4.setTransform(190.7,193.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(43,45.5,295.6,295.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggDTQgOgVAAgcQAAgwAfgTQgEgEgXhGQgYhFAAg+QAAg0AUghQAUgjAcAAQAbAAATAjQATAhAAAzQAAA7gVBAQgUBAgLATQAPAJAJARQAIASAAAXQAAAcgNAVQgPATgTAAQgSAAgOgTg");
	this.shape.setTransform(290.5,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AidDfIAAm+IChAAQA5ABAbAJQAaALASAeQASAeAAArQAAAkgKAVQgJAUgVAVQAZAUAMAWQALAXAAAlQAAA4gcAhQgcAigvgBgAgXB9IAEAAQAXAAAJgKQAKgKAAgZQAAgdgKgLQgJgLgZAAIgCAAgAgXguIAEAAQAUABAKgKQAJgKAAgXQAAgZgJgKQgJgJgVgBIgEAAg");
	this.shape_1.setTransform(265.4,39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsCoQgvg/AAhxQAAg3AUgzQAUgzAkggQAjghAxAAQA8AAAuBDQAtBEAABcQAABogtBBQgsBAhFAAQg8AAgug+gAgVgsQgJANAAAUQAAATAJAOQAJANAMAAQANAAAJgNQAJgNAAgUQAAgUgJgNQgJgOgNAAQgMAAgJAOg");
	this.shape_2.setTransform(229.1,39.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6DGQgggegLgzQAKADAQAAQAWAAAIgEQAJgFACgOQADgPAAglIAAkPICFAAIAAEHQAABWgFAdQgFAdgWAXQgWAXghAAQgpAAgggdg");
	this.shape_3.setTransform(199.1,39.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCDfIAAkJIhEAAIAAi1IENAAIAAC1IhEAAIAAEJg");
	this.shape_4.setTransform(154.4,39.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABDDfIgRhLIhhAAIgSBLIiIAAIBtm+IC/AAIBnG+gAgXArIAwAAIgYhtg");
	this.shape_5.setTransform(123.1,39.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah9DfIAAm+ID7AAIAABxIh1AAIAAA3IBRAAIAABvIhRAAIAAA4IB1AAIAABvg");
	this.shape_6.setTransform(89.1,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbDfIAAgDQAAhQgPgpQgOgpgcAAIgBAAIAAClIiHAAIAAm+ICHAAQBFAAAYAFQAXAFASAQQASARAKAcQALAdAAAgQAABEgiAgQAxBSAJCEgAgfgtIAEAAQATAAAIgKQAJgKAAgYQAAgpgmAAIgCAAg");
	this.shape_7.setTransform(56.6,39.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5DWQgggQgXgkQgYgjgKgqQgLgrAAgrQAAhnAwg/QAug+BMAAQAjAAAnAQQAnAQAgAcIhBCGQgngcgiAAQgWAAgOARQgOARAAAbQAAA4ArAAIADAAIAAhFICHAAIAADwIgCAAIhvAFQhAAAgfgQg");
	this.shape_8.setTransform(20,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.9,78.7);


(lib.star_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("ADJKMIjFiTQkTDIgIAAIhJAQQiHgVgchkQgLgrAAgaQAPhTBXj/QjViThDg9QgZgVgRhcQAHhAAuhBQApghBbgUQCIADBNAAIBTAAQAIAABIjuQAchrA/gpQAMgMBWgPQBEAAA9A5QAfAQBLEJQAYBKAHABIBWAAQBLAACDgDQBmASAqAvQAkAxAFBEQAABIg5BAQj6CugLAPQBbELAPBOQgHBBgvBBQg+AshFAFQhGgGhPg/gACnHxQCaB1AZAAIAOAAQBFgLAAhAQAAgNhbkUQgehSAAgRQEujSAcgfQAAgHAHgjQgShEgyAAIgPgEQjHAEh0AAIgyAAQgNAAhCjoQg1itgbAAIgmgMQhKASAAA6QgMAchjE5Ig4AAQh1AAjHgEQhJAAgKBQQAAAyB5BHIDYCeIAAAEQhxFVgIAnQAABDBQAIIAEAAQAcAAEEjJQARgJAggZQAcAJCOBtgAFaIXIlWj7IgEAAQlUD7gEAAIAAgEQAAgRCFmFIlej1IAAgIIGxAAIB9mWIADAAQAIAABqFWQATA3AAAJIGwAAIAAAIIlZDxIAAAEQAAAPCFGLg");
	this.shape.setTransform(86.6,97.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star_big, new cjs.Rectangle(0,0,167.3,212.4), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("ACDGOImaAAQgoAAgPgKQgagOAAgbQABgQAIgHQAIgIAegQQAigPAJgdQAIgXAAh1QAAg1gEhlIgDiTQAAgvgHgQQgHgSgXgIQgngNgLgIQgSgPgBgTQAAgqBGgWQA+gUBkAAQByAAA4ALQBIARAAAvQAAAUgJAJQgKAJglAQQgWAKgGAYQgGAYAABRIAAELQAABcAPAaQAUAfA+AAQBDAAAngdQAmgdAQg/QAIgmAgAAQAdAAAVAcQATAcABAtQAABIg2BSQgSAbgNAKQgNAKgRAAg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-41.4,75.1,82.9);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AjKF1Qhvgyg/hnQg+hkAAh4QAAiLBQhrQBFhfB3gsQBPgfBhAAQCXAABwBXQBNA7AuBfQAwBdgBBdQAACKhbBtQhNBdh9AoQhNAahMAAQhmAAhdgsgAh/jLQgWAgAAAuQAABCAbBXQAbBWApBDQATAdAZARQAaARAcAAQAtAAAbgiQAbggAAg3QAAhHgWhRQgYhSgkg6QgXgkgcgVQgdgUgdgBQgyAAgdAsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-41.7,87.9,83.4);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AilF0QhygzhChqQhAhmAAhwQAAiBBRhrQBGheBygxQBVgmBbAAQBVAABQAmQAlASAQAAQAKAAAYgFQAHgDAJAAQAfAAAXAdQA4BEAABkQAABIgxAhQgaARghAAQgeAAgTgNQgTgNgRggQgZgvgQgUQgPgUgYgQQg4gog+AAQg8AAgjArQgjArAABKQAABkAyBTQBEBxCBAAQAwAAAugRQAvgPAZgaQAXgVAOAAQAVAAAOAUQAPATAAAbQAAAigVAqQgUAqgdAYQgMAKgnAHQgWAFglARQhXArheAAQhgAAhhgtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-41.7,82.1,83.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("ACDGOImaAAQgoAAgPgKQgagOAAgbQABgQAIgHQAIgIAegQQAigPAJgdQAIgXAAh1QAAg1gEhlIgDiTQAAgvgHgQQgHgSgXgIQgngNgLgIQgSgPgBgTQAAgqBGgWQA+gUBkAAQByAAA4ALQBIARAAAvQAAAUgJAJQgKAJglAQQgWAKgGAYQgGAYAABRIAAELQAABcAPAaQAUAfA+AAQBDAAAngdQAmgdAQg/QAIgmAgAAQAdAAAVAcQATAcABAtQAABIg2BSQgSAbgNAKQgNAKgRAAg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-41.4,75.1,82.9);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AjKF1Qhvgyg/hnQg+hkAAh4QAAiLBQhrQBFhfB3gsQBPgfBhAAQCXAABwBXQBNA7AuBfQAwBdgBBdQAACKhbBtQhNBdh9AoQhNAahMAAQhmAAhdgsgAh/jLQgWAgAAAuQAABCAbBXQAbBWApBDQATAdAZARQAaARAcAAQAtAAAbgiQAbggAAg3QAAhHgWhRQgYhSgkg6QgXgkgcgVQgdgUgdgBQgyAAgdAsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-41.7,87.9,83.4);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AilF0QhygzhChqQhAhmAAhwQAAiBBRhrQBGheBygxQBVgmBbAAQBVAABQAmQAlASAQAAQAKAAAYgFQAHgDAJAAQAfAAAXAdQA4BEAABkQAABIgxAhQgaARghAAQgeAAgTgNQgTgNgRggQgZgvgQgUQgPgUgYgQQg4gog+AAQg8AAgjArQgjArAABKQAABkAyBTQBEBxCBAAQAwAAAugRQAvgPAZgaQAXgVAOAAQAVAAAOAUQAPATAAAbQAAAigVAqQgUAqgdAYQgMAKgnAHQgWAFglARQhXArheAAQhgAAhhgtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-41.7,82.1,83.4);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(0.1,1,1).p("AgdBUIAFg5IgvgZIAygNIAFhIIAcA+IA8gSIgsA1IAaA3Igygag");
	this.shape.setTransform(7.2,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AgYAbIgvgZIAygNIAFhIIAcA+IA8gSIgsA1IAaA3IgygaIghApg");
	this.shape_1.setTransform(7.2,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.5,18.8);


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


(lib.dudeforquizzesridestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("AAdgLIgGABIgpACIgHAOIgDAF");
	this.shape.setTransform(-69.6,-81.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.3,1,1).p("ASMCvQABAAACABQAHAPgDAYQAAAIgBAHAIiJLQgKgcAEgrQAEAAAEAAQAAgFAAgEQB1gXhHh6QgBgCgEAAQgEAAgDABQg6AUg6AUQgEAAAAgCQgbhBgig4QAEgEAFgDQADgBAEAAQAjgXA3gCIAjgCQiVgbgph/QAEAAAEAAQAAgEAAgEQAAgEAAgEQBbhJCbgIQAEAAAEAAQAaASAGAnQABAEAAAEQAEAAAAABQAeBehDATQAAARAAAQIADAHQB9gxAaBDQACAEAAAEQAYBZiDAJIgBAAIgHABQAIBWA6AiIAIAAQAAgDAAgDQACAAACABAMFG6QABgBACgBQACgCAAgEQAAgEAAgFQAHgEAIgDIACAPIABAJQAFAFADAHAMSGyQAJAJAIAKANEHjIAEgCAM/HiQACAAADABIgEABAhaCiQgEBPhGgUQAAAEgBAAQhNAUhFAZQgBAAAAAAAIzJFIgNAEIgEACADzKzQCQgeB5g2QADgBAFAAQAAgEAAgEIAegLAuNvbQAagLARgGIALgFIAAAAIADgBAyLJdQB/h5CVBUQACABAAAEQAfAigaAuQgBACgEAAQAAAEgCACQgTAVgcAOQAZAfApAKQAQADATAAQAUAAAWgDIAFAYQADASgFAQQACADAAAEQgCABgDAAQgRAphFAYQAAAEAAAEQAiA6BCAbAvZPzQAWgNAWgNQADgCAEAAQAAgEAAgFQAQAAAQgDIAAgBQABgBAAgDQgBgDAAgCQgDgBgCgBQgBgBAAgBQgBAAAAgBQAAgBAAgBQAAgBAAgBQAAgBABAAQABgBABAAQABgBAAAAQgHgXgOgEQgOgEgOgGQgDgCgEgCQg1gagrg3QgigzBTgDQA7gBgngIQhygWg9hXQgEAAgBgBQgCgLgBgLArBPUQABAAABAA");
	this.shape_1.setTransform(18.5,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#363636").s().p("AiSAmIACgBIAAABIAAABIgCgBgAgIAQIgEAEIgKAAIAOgEgACTgmIgUAMIgFAAIAZgMg");
	this.shape_2.setTransform(-37.4,113.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgDACIAAgDIAHAAIAAADIgHAAg");
	this.shape_3.setTransform(-107.4,45.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F3F3F").s().p("ABBBJIAGABIgBACIAAABIgEABIgBgFgAA/A8IAAABIgBAAQgHgYgOgEQgOgEgOgGIgIgDQg0gZgqg4QAEAAACgCQACgCAAgEQBYBlgHhlIAAgIIAIAAQAOAgAiANQAAAAABAAQAAABAAAAQAAABAAAAQABABAAABIgJAAQAHAOAagFIAIgBIAAAJIgIAAIgIAAIgIAAIgIAAIAAACQAQAwgBAXIgKgCg");
	this.shape_4.setTransform(-78.2,107.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0E0E0").s().p("AgVgWQgCgCAAgEIAvA5IgBAAIgsgzg");
	this.shape_5.setTransform(-76.7,92.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D2D2D").s().p("AA4BlIAJAAQAEAAACgCQAwgjBAgTQgRAohFAYIgIABIgMACQgQAAgFgLgAghAPQA6gCgmgIQhygVg9hXIAAgIIAIAAQBnB9CXhzQADgCAEAAIAIAAQAAAEgCADQgTAVgcANQAZAgApAJQgaAEghAVIgvg5QAAAEABACIAuAzQgPAKgRANIAAARIAAAIIgIAAQAAgEgCgCQgbgcg0AaIAAAIIAAAIQAAAEgCACQgCACgEAAQgigzBTgCgAC6AkQgRgpgcgMQAUAAAWgEIAFAYQADASgFAQg");
	this.shape_6.setTransform(-79,94.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4C").s().p("AgLApQAAgEABgDQAPgjgQgnIAIAAQAdAigZAtQgBACgDAAIgIAAg");
	this.shape_7.setTransform(-69.6,80.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5F5F5").s().p("AiCAbIAAAAIAAAIIAAgIgACCggIABgCIAAAEg");
	this.shape_8.setTransform(-84,79.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#393939").s().p("AiLA8IgDgWIAFgGQAHgLgEgKQB+h4CVBUQACABAAAEIgIAAIAAgEIgCABQhlBMiegRIAAAAIAAAIIAAAJIgIAAIAAAIIgFgBgAAdgzQgdALgkAEIAAAIQgEAAgEABQghAPghAQQALAlA+gRQAAAAAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQDBgdhxgrIgHgBQgEAAgEACg");
	this.shape_9.setTransform(-84.4,78.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A8A8A8").s().p("AgkAOIAAgHIAAgBIAAgHQAkgEAdgLQAEgCAEAAIAAABIAAAHIAAAJIgUAAQAOAUgeAAQgNAAgYgFg");
	this.shape_10.setTransform(-84.4,74.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#313131").s().p("AimHjQA8gDAyglIABAAQgdAihHAJIgLgDgAkKF/IAIAAIACgBQCjgNg0grQgjAGgWgSIACgCIAAgBIAAgCIgBgCIgBgBIgJgCQgTgYgDg1IAIAAIAIAAQAhA6BCAbQAGAJAIAHQgSA+hRAAQgcAAgjgHgAEJnlIACAFIgDABQABgCAAgEg");
	this.shape_11.setTransform(-47.4,83.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#191919").s().p("AgBAAIADAAIgBABIgCgBg");
	this.shape_12.setTransform(-23.1,28.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DFDFDF").s().p("AjIGmIAAAEIgCABQAAgEACgBgAi5FpIAEgBIgFAFIABgEgAjBEPIAIAAIgIACIAAgCgADAmaQACACAEAAIAFAAIgCADIgEADgAB1moQAFAAAFgCIgCAGIgIgEg");
	this.shape_13.setTransform(-53,79.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EBEBEB").s().p("AkZDWQADgCAEAAIAAACgAjHC9IAAgBIAHABgAESioIAIADQgDABgFAAIAAgEgACxjNQADAAACgCIgCAEIgDgCgAC4jVIABAAIgBACIAAgCg");
	this.shape_14.setTransform(-60.6,54.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AhzDWQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIghgMIgBgBQgFgGgHgCQgHgBgFACIg3gRIgJABQgmABgTgSQgFhuBAArQADABAEAAQB1ArB+AjQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABIgKAJIgFABQg4AOg5ARIgCAAgAC8AZIhCgPQgEAAgDgCQg3geg1ghQAAgEgBgDIgBgBIAMgDQAFgEAGgBIAAgBIABgCQAUgGARgMQApgJAoABIAAgEQgMg2BDg3IAFABQgQBCgUBCQAfgkAWhQIAFAKQAJAMAHAOIAAACIAAABIAIALQARAWAaADQgIAegCAkIADAUIgBAAIAAAEIAAAPIgBACIgBACIAAADQgCAKAAAKQgpAAgvAHIgBAIIgHgBg");
	this.shape_15.setTransform(-34.7,25.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8F8F8").s().p("ABPB7IABgIIAAAIgAhbAJIAGgBIgDACgABWh0QACgCAAgEIAEAAIAAABIgBAGg");
	this.shape_16.setTransform(-23.1,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#535353").s().p("AgdgaQgCgCAAgEIA/BBIg9g7g");
	this.shape_17.setTransform(-33.2,-0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2C2C").s().p("AghAKIADgBIAwgRQAcgKgWAKIgGAAIAGAAIgEABIAAAAIgLAFIgqAQIADgFIgDAFg");
	this.shape_18.setTransform(-69.1,-81.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#171717").s().p("AgDLCIgJAAQAAgEACgEQARgkgTgmQAVAFgBgWIADAAIAAAJIABAIQAGAzgPAfIgGAAgABFobIABABIABADIgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBgAhGqOIAAgIIAAgIQAZgYAPgHQARgJAEAOIAAACIABAIIAFAAQAKAAALADQABAAAAABQAAAAABAAQAAABAAABQAAABAAABQgEAAgDACQgiAWgxAJIAAgJg");
	this.shape_19.setTransform(-74.5,-22.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#181818").s().p("Ag7BUQgGgCgDgEIABgEQA0hZBPhEQACgCADAAIAAAIIAAAIQgDAAgBACQgWAhgnAPIAAAIQgFBBgzAYIAAAIQgEAAgDgCg");
	this.shape_20.setTransform(-88.5,-80);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#121212").s().p("AgeJ/IgEAAQgDgWgKgLIAAgEIgIAAQgOgBgCgLQAcAHgHgWQAAgBgBAAQAAAAAAAAQgBgBgBAAQgBAAgBAAIAAgIQgIg5ghghIAAgIIAAgZIAIAAQAgAuANBEQABAAAAABQAAAAABAAQAAAAABAAQABAAABAAIAIAAQgGAjAMAQQACACAAAEIABAIQAEARgMAAIgBAAgAA1oGQgCgCAAgEIAAgIQAAgpgRhBQAFAAACACQACACAAAEQAAAEACACQACACAEAAQgCAfAQAMQACACAAAEQAEAEAFADQADABAFAAQAAAEABADQAgAxg6gPIAAAJQgEAAgCgDg");
	this.shape_21.setTransform(-102.2,-14.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ECECEC").s().p("AlOE7QgBgCAAgEQCSgpAdgZIAFARQgiBYg8AAQglAAgwghgAFJlbIAHAAIAAACQgEAAgDgCg");
	this.shape_22.setTransform(-41.3,-88.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3E3E3").s().p("AjSCFIAEACIgCAEQAAgEgCgCgAgIgwIAAgIIAFAAIAAAIgADMg0IgEgBIAAgDQANAFgCAAIgHgBgAB7iHIAAgDIAEAAIgBAEIgDAAg");
	this.shape_23.setTransform(-74.5,-86.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF66").s().p("AjFCQQgRgNACgeQAthlBdhGIAQgMQACgBAAgEQAkgOAogNQAogNAugNQAAAAAAAAQAAAAAAgBQAAgBABAAQAAgBAAgBQA4gGgbAWIAAAEIAAABIgBAAQgTACgJAJIAAAHIAAACQgEAAgBACQgDAEAqATQAbANAtATIAAADQgogKgwgBQg1gBg9AJIgCAAIgFABIgBgCQgDgOgRAJQgPAHgYAYIAAAIQgEAAgCACQhQBDgzBag");
	this.shape_24.setTransform(-75.8,-87.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#242424").s().p("AlLERQBlhDhoBfIgBAAQgBAAAFgcgAnED2QgCgCAAgEQAbg/A9hmQACgDAAgEQANgBANgDQAzgNA9gzQACgBAAgEIALAEQAcAGAzgJIAIgBIAAAHQAAABAAABQAAABgBABQAAAAAAAAQAAABAAAAQgtAMgpANQgpAOgkAOQAAAEgCABIgPALQhdBIguBkQgEAAgCgCgAFchwIAAggQBJgugUhuIAFAAIAAAQIAAAJQALAxAXAOQACACAFAAQAEAAACACQACACAAAEQgEAAgDACIhTBAIAAAQIAAAIQgFAAgDACQgFADgEAEIAAgJg");
	this.shape_25.setTransform(-52.4,-101.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6F6F6F").s().p("AgIgnIgBgIIATBfIgShXg");
	this.shape_26.setTransform(8,8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#323232").s().p("AiGAsQgDgHgEgDQCPgfB4g0QAEgCAEAAIANAAQhHArhoAgIgfAJQgjAKglAJQADgEgCgEg");
	this.shape_27.setTransform(57.1,84.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1E1E1E").s().p("AhNBqQgEAAgCgCQgcgVgfgSQDjA4ABjKIAAgIQANABgBgSIAEAAIAAARIAAAIQgBANASgBIAAAEQgKA7AcAUQACACAEAAIAAAIIAAAIQgEAAgCACQgaAUgygFIAAAIIgHABQg1AUg9AMIgFAAQABARgLAAIgCgBg");
	this.shape_28.setTransform(13.1,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F3F3F3").s().p("ArpA4QANABgEgSIgBgIQAOgegGgzIAAgIQA3gGAGAvIAEAAIAAAEQBNgDAzASIiSAvQgPAFgPABIghAFIAAgEgAo+AmIgPAGIgCAAIgEABIAVgHgALpAAIABAAIgBAHIAAgHg");
	this.shape_29.setTransform(-0.3,45.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7F7F7").s().p("AgJH0IAggOQBEgaBGgTQA/gQA+gTQAugOAvgKIBmgYIAsgFIgKAGQgVAKgLAPIgbAQQhCArg1AxQggg7hFAKQhLALgxA0QgEAFgGgBQhCgHhBAIIAUgLgAtPi3IAEAAIAAABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAgAqSmUIAEAAIgEABIAAgBgANMn+IAEAAIgCABg");
	this.shape_30.setTransform(-21.7,59.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DDDDDD").s().p("AgCgCIAFABIABADQgEAAgDABg");
	this.shape_31.setTransform(86.1,71);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D1D1D1").s().p("AABAAIgEgBIAEgBIADAAIgBACIgBADg");
	this.shape_32.setTransform(94.3,66.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0066CC").s().p("AARATIgGgGIADgCIgDACIgCgDIAFABIAFAAIABADQACAGAHgBQAEAJADAKQgIgKgLgJgAgRgSIgSgTIAJAAIACAJQAFAFADAGIgBgBg");
	this.shape_33.setTransform(100.7,66);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#282828").s().p("AgIAIIAAgIIAOgHIADAOIgJABIgIAAg");
	this.shape_34.setTransform(97.2,61.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("ArsF/IgGgCIgFgCIgBgCIgBgCIAAgCIAAgBIABgCIACgBIABAAIACAAIAAgBIAJACQABgXgQgxIAIgCIAIAAQADA0AUAZIAIACIACABIAAACIABABIgBACIgBACQgJACgIAAQgJAAgJgCgAuFDuIAAgIIAAgIQA0gaAcAcQACACAAAEIABAIQADAzgVAAQgUAAgtgzgAr7ETQgigNgOggIAAgIIAAgRQAQgNAPgKIABAAQAhgWAagEQAQAEASAAQAdAMARAqIAAABQACADAAAEIgFABQhBATgvAjQgCACgEAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAgAMTh9QAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQgRgkgHgvIAAgIQBcBjgsAAQgJAAgOgEgAI9kuQA/gOBEgGIAAAEIAAAIQgEAEAAAEQAAAegGAJQgfA2gbAAQgjAAgchdgALhjsQgBAAgBAAQAAAAgBAAQgBgBAAAAQAAAAAAAAQgMgpgRggIABgHQBFAPAIgwIAEgBQDGgfiMBcQglAYgVAWQAAABAAABQAAAAAAABQAAABAAAAQgBAAAAAAQgQAHgOAAQgJAAgJgDgALAmAQBXAGhFATIgBAAQgHAAgKgZg");
	this.shape_35.setTransform(3.7,76.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3C3C3C").s().p("AHNFxIgIAAQAVgWAkgYQCNhcjGAfIAAgEQgWACgDgOIADgBQB9gyAbBEQABADAAAEQAZBaiDAIIgBAAIgIABIgIAAgApLlwIACAIIgBAAIgBgIg");
	this.shape_36.setTransform(37.1,15.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCFCFC").s().p("AAyB9IAIAAIAAACQgFAAgDgCgAgPAEIAHAAIgHABgAg5h+IADAHIgDABIAAgIg");
	this.shape_37.setTransform(85.7,52);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2E2E2E").s().p("APSJbQACgCADAAIAAAIQgNAMgQAKIgPAJQAUgSATgTgAKwIoIAIAAIAAAIQAAAUAFAUQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIAHAQIgNAFIgEABQgKgbAEgsgAI4E4QgCgCAAgEQAigWA4gDIAjgBQiWgcgph+IAIAAQAJgBAGAEQACABgBAEIgIAAIAFAKQA+B+CkhFQADgCAEABQAEAAACABQACACAAAFIAAAgIAAAIQADAOAVgBIAAAEIgDAAQgJAxhEgQIgCAAIAAgFIAAAAQhEAHg+AOQgFAAgBgCgALSEAQBGgShYgGQAMAaAGgCgAtloeQg5gIgoANQAAgEgCgBQgGgDgIgBQAVgOAjADQAlACgBgHQANADANgCQgDALgBANQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAgBgBgAtUpbIAAgBIAAgEIgvgUIAAgBIABgCIgEgHQAcALAfAQQAAAFgCACIgFAGIgCgFg");
	this.shape_38.setTransform(3.7,15.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF9933").s().p("Ar7IQIgGgFIARAFIgLAAgArzHvQgcgIgNgZQgHgNgLgHIgBgMQAcgfAQAlQAAABABAAQAAAAABAAQAAABABAAQABAAABAAQCKAdAYhUIAKAGIAKAGQgIALANATIACABIAWANIACAOQghAjgwASIhIACIgxgNgAvkA1IAAgJIABgIQCeARBmhMIACADQARAmgQAjQgBAEAAAEQgFAAgCACQhJA3g+AAQhDAAg2hBgAMrAmIgDgBQgQgDgQAAIgRgIIgUgLQgGgIgFgHIgBgBQgCgDgBgFIgCgDIgGgQIAAgIIABgJIADABIABgGIAEgBIAGgCIAAAAIAFAAIAIACIACAEIADACQALAAAHAEIAAAAIB9gjIAYgWIACgCQAGgIAFgJIAAgCIALAAIABACIAGAHIAHAFQAFALALAIQAOAMAMAMQABAMgCAOIAAAIQgEAAgCACQgTATgUAQQgUAKgWADQgXAEgVAIQgQAGgRAAQgKAAgKgCgAIUnmIAGgDQACACAEAAQCKAzBthaIAHgBIABAGQAbBCg9ARIAAAIQgEAAgDACQg6AYgtAAQhTAAgohSg");
	this.shape_39.setTransform(2.6,78.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F4F4F4").s().p("AA1DuIABAAIgBAIIAAgIgAiGjUIAIAAQAAAEACACIgGAEIgEgKgACHj1IAAABIgHABQADgCAEAAg");
	this.shape_40.setTransform(68.9,49.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC66").s().p("ArVH4QAqgbg8gRIAAgIQAPAAAQgEIAAAAIAGgFIAAgBIABgBQARAEARgEQAVASAkgGQA0ArijANgAu0BLQAggRAhgOIAIAAIAAAGQAAANAEALQAAAAAAABQABAAAAAAQABAAABAAQABAAABAAQA0ADALgkQACgEAAgEIAAgIIAAgHIAHAAQBxArjCAdQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgTAFgOAAQggAAgHgagAL7AJIAygOIAHgBIAAgEQgkAEgNgIQBSgDBbgdIAFACIABAEQgcAhg0AIIgBgDIgGgBIgBAGQgjAQgbAAQgVAAgQgKgAJPmwIAAgIQAlgSAjgTIACAEQAqAdBHhAIAFABQgBBbhfAAQgoAAg4gQg");
	this.shape_41.setTransform(-0.5,71.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F1F1F1").s().p("Au0DeIACAHIgCABIAAgIgAqxCLIABgEIACgBIABADIgCABIgCABIAAAAgAM8jAIADgCQADgCAEAAQAAAFgCACQgCABgEAAgAOujfQACgBAAgEIAEAAIAAAAIAAAGg");
	this.shape_42.setTransform(-17,42.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5B5B5B").s().p("Ag4AQQAEAAACgCQACgCAAgEIAAgIQAugPAzgIIAIgBQAAAEgCACQgwArgiAAQgQAAgNgJg");
	this.shape_43.setTransform(71.7,22.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#303030").s().p("AiCAwQANABgBgRIAEAAQC+A1ACh/IAAgHIAAAAIgEAAIAAgIQAMAAALgEQAAAAABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAbASAGAnIAAAIQAAADgCACQgCACgEAAQgEAAgDACQhFA5hRAAQguAAgygSg");
	this.shape_44.setTransform(70.1,24.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1F1F1F").s().p("AtDE7IAUgGQgKAEgKAFIAAgDgAlVgpQhThIhzgpQgFAAAAgBQg4hqh4goIAAgIQAEAAACgCQACgCAAgEQB2AyBFBiQACADAAAEQBwAfBOBCIADABIgBABIAAADQAAADACACIAJAAIAAABQACADAAAEQAAAEgCABQgGADgJAAQgEAAgCgCgALHiXQgCgDgEAAIAAgIIARgMQAbANAegUIAIgFQAHgBAIgDIABgBIAYgEIABAAQAEAAACADQACACAAAEQgEAAgDABQg4AVg8ATQAAgEgCgCg");
	this.shape_45.setTransform(-2.1,24.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1A1A1A").s().p("AAAABIAAgBIABABIgBAAg");
	this.shape_46.setTransform(133.8,34.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1B1B1B").s().p("AqlEOIgBgIQgMgsgUgmQApAUAUAsQABABAEAAQAAAEgCACQgCACgFAAIgDAAQAAASgNAAIgIgBgAiYCbQgEAAgEgBQhFgdgvg0QAJAAAHgDQABgBAAgEQA1AhA2AfQADACAFAAQAAAEgCACQgDACgDAAQADAIAAAIgAuThiQAAgEgCgBQhZg3gnhoQADAAACgCQACgCABgEQATAyAkAiQACACAAAEQAmAcAyAgQACACAAAEIgIAAIgEAAQABAQgMAAIgCAAgAQLhyIALAAIgCACIgJgCg");
	this.shape_47.setTransform(-8,13.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#33CC66").s().p("Ax9JmQgzgOglgpQgugzgShHQgEgRgBgRQgFg8AQg6QAEgRADgSQAKg7AcgzQARgeAWgZQADAAACgCQAlgVApgKQAJgCAIgDQBfgnBjgaICUgmQAQgEAPgGIDYhKQAPgGAQgDQBbgUBaggQAIgDAFgDIACADIABAKIApgDQANgBANAGIAAABIgDABIAhgCQACAAACADQAHAKAAAKIALgBIgBgIIABAAQBFgZBNgUQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQBFAVAEhPIgBgCIgDgCIgCgBIgCgCIAAgCIgBgCIAAgCIABgGQgFgGgDgHQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQgNgDAGgSQA+gLA1gUIAHgBIAAgJQAyAFAagTQACgCAEAAQCwg2Cpg7QAEgCAEAAIAAgIQAfgGAbgJIAHgBQA8gTA4gVQADgBAEAAQA4gSBDgHIABAAIiTAkQhRAVhOAhIgNAFQgmANgmAOQhSAghTAbIgIABQgzAIguAVQhPAlhVASQgNAIgKAOQgDAEACAEIABACIADgGIAFgEICngxQAagHAYgMQAjgSAlgIQBJgPBFgbIA0gUQAlgPAmgJIAcgHIAtgOIAjgLIANgFQAggLAggHIAGgCQApgWAtgBQAkgBAcgYQAQgMASgDIAAAAIACgBQAtgMAeAcQAtAVAdArIABABIAeA0QAbAxAXAyIAJATIABACQAYAjALArIAFAWIADAEIABAGIABACIABAEIACACQADA+gbA5QgQAkgjARIg+AeQhEAfhIAUQgXAHAHATIgEABIgFgBIgCgCQgLgRgOgJQgDgFgFgFIgBgJIgCgPIgPAHIAAAIQAAAEgCACIgDADQgQgBgRAEIAAABIgGACIgBABIgEAAIAAAGIgIAAQg6gigIhWIAHAAIABgBQCDgIgYhaQAAgEgCgDQgahDh9AxIgDgHIAAghQBDgTgehfQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBAAgBAAIgBgIQgGgngagSIgIAAQibAJhbBJIAAAIIAAAIIgIAAQApB/CVAbIgjABQg3ADgjAWQgEAAgDACQgFACgEAEQAiA5AbBBQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAIB0gnQADgCAEAAQAEAAABACQBHB6h1AXIAAAIIgIAAQgEAsAKAcIgeAKIAAAIQgFAAgDACQh5A1iQAfQgMgLgVASQgTgCgSAJQgaALgcAGQhSAShTAUIgkAKIhRAXIgzAOIisAxIgHAEIgSALQgYAOgZALQgaAKgaAHQhcAZhbAiQgFACgDAFIgCABQgKgMgOgJQgVgMgVgGIgDADQgFADgCAHIAEAHQhCgbgig6IAAgJQBFgYARgoIAFgBQAAgEgCgDQAFgQgDgSIgFgZQgWAEgUAAQgTAAgQgEQgpgJgZggQAcgNATgVQACgDAAgEQAEAAABgBQAagvgfgiQAAgEgCgBQiVhUh/B5QAEALgHAKIgFAGIADAXIAFAAQA9BXByAWQAnAIg7ACQhTACAiAzQArA4A1AaIAHADQAOAGAOAEQAPAEAGAYIgBAAIgCABIgBACIAAABIAAACIABACIABACIAFACIABAFIgBAEIAAAAQgQAEgQAAIAAAIQgEAAgDACIgsAbQgGgHgKABIgCAAQgpAYgxAFQgPABgNAHQg0Acg1AAQgdAAgegIgAKMCVIAegKQgFACgBAIIgYAAgAv4gSQATgGASgKQAFgDACgHQARgKAQgJQARAAAOgIIACgCIACAAQAJgGAKgEIAOgDQATgEATgDIACAAIAEAAQAKAAAKgCQAngEAmgMIBTgcIAEgBIACAAQAlgGAmgFIgkAOQhQAhhTAWIijAsQgUAFgUAEQgiAFgfARQgbAOgeAJQAmgQAkgSgAUZjwQACgEAAgEQgBgNgGgLIADAAQAHAQgDAYIgBAPIgBgXg");
	this.shape_48.setTransform(4.9,63.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F6F6F6").s().p("AwbKTQAMAAANgCIAYgFIAIgCQgSAMgRAOQgNgGgJgLgA1CFXQA9hggShuIArgeQgSAygPAzIgDAHQgHAiABAkQAAAQACASIAMBEQgjgGgoAHQAEgXANgWgAGaDrIADgFQALgGALgIIABgBQAmgJAigJQgjANggAbQgPgCgQAAgAIcC7QBoggBHgrIgMAAIAAgIIAYAAIAAACQgCATANAKIgBAHQg+AAgwAtQgtgJgqAJgALnjsIAAAAIAAAEgAVMlSIgJgBIgGAAIgCgCQgFgcgQgbQgPgcgNgfQgSgugYgrQAMgHAKgIQApBLAzBEQgGAoAIAoIgIgCgAMop5IABgBIAAABIgBAAgAOkqVIAAADIgIAAIgIABIAQgEgAO9qaIgFAAIATgGIAKgEIABAAIgOAKIgFAAIgGAAg");
	this.shape_49.setTransform(-0.2,68.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#606060").s().p("AoMCOIAEAAIAAABIgEgBgAIMh/IABgBIAAABgAILiNIgBAAIABgBIAAABg");
	this.shape_50.setTransform(14.4,16.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#131313").s().p("AgVAOQgIgCgHgEQASgHAKgPQABgBAEAAIAHAAIAIAAQgBAVASACIAIAAQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgTAEgQAAQgMAAgKgCg");
	this.shape_51.setTransform(48.4,-1.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("ABeF8QgEgUAAgUQAWACAHgRQAAAAAAgBQAAAAABAAQAAAAABAAQABgBABAAQANAJAkgEIAAAEIgIABIgxAPQAkAXA/geQADgBAEAAQA0gJAcgiIACgCIAAgEIAFgBIADAAIAAACQgFAJgGAIIgBACIgYAWIh9AjIgBAAQgHgEgLABIgCgDIgDgDIgHgCIgFgBIgBABIgFABIgEABIgCAGIgDAAIgBAAIAAAIIAAAIQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAk2jkIAAgFQBlAJgPAAIhWgEgAjMl8IAIAAQAHAEAIABIgBADIgWgIg");
	this.shape_52.setTransform(64.3,37.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F0F0F0").s().p("AADAAIAAAAIgFABQACgBADAAg");
	this.shape_53.setTransform(53.4,-9.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#232323").s().p("ACXDwQgCgCgEAAIAAgJQA9gQgbhCIgCgHIAAgBQAFAAACgCQACgCAAgEQABAAABAAQABAAAAABQABAAAAAAQAAAAAAAAQAeBfhDATQAAgEgCgCgAieiSIgIAAQAAgFACgCQAng9hKgXQARAAAPgDQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIBBAUQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAEgCACQgCACgEAAQgEAAgCACQgWAbgNAlIgJAAg");
	this.shape_54.setTransform(64.6,11.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#292929").s().p("AjQC2IAAgIQDXgzCKhXIACgBIgDAAIAAgIQAtAJgEgpIAAgBIAAgHQAXANgJAiIAAAAIgCAJIAEAAQAEAAACACQACACAAAEIgIABQgbAKgeAGIAAAIQgEAAgEABQipA7ivA2IAAgIgAhviIIgGgJIAAgIQAog0BJAXQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgPAEgRAAIgIAAQgyADgPAmQgBgEgBgEg");
	this.shape_55.setTransform(48.4,4.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#717171").s().p("AgDgdIgBgIIAJBLIgIhDg");
	this.shape_56.setTransform(4.2,6.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2B2B2B").s().p("AEBKMIgBgKQAAgKACgLIAAgDIABgCIACgCIAAgPIAAgEIAAAAIABgBIAAgCIABAAIADgBIAEACIABABIAAAUQAAAOgDAOIgCAHIgBADIgEABIgEgBgAggIyIAAgDIAAgBIABgBIABgBIAegMIACgCIAegPIAEABQBbguAnhgQACgEAAgEIARAHQADACAEAAIABAAIADACIACABIAAAEIABACQACADAAAEIAAAIQADAKAHALIABABIAAACIAAACQAMANAEAQQAQAYAbAKIAHADIAAADIgBADIgJAAQgagDgRgWIgIgLIAAgBIAAgCQgGgOgKgMIgFgJQgHgQgBgRQgFgBgHACIAAAIQAAAEgCACQhDA3AMA2IAAAEQgngBgqAJQgRAMgUAGIAAACIgBABQgFABgEAEIgNADIgIAAQgCgCAAgDgABOBDIAAgIQCMgUBygBIAAAEIgIABQhvAciHAEIAAgIgAkupsQAcgWg5AFIAAgIQAdgGARgBIAJAAQAbAAgWARIgUANQgDACgEAAg");
	this.shape_57.setTransform(-31.9,-37.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#252525").s().p("AmqLiQgBAAgBAAQgBgBAAAAQgBAAAAAAQAAAAgBgBQgEgLAAgMQBLAOgVgeIAUAAQAAAEgBADQgLAigtAAIgIAAgAgRGiIACAAIgBAAIgBAAgAqkEWQgEgxAAgxQAIgeARgVQArg2BfgBIAJAAQgVgpgTgpQgBgDAAgEQANABgBgSIAEAAIABACQATBSA3AsQADACAEAAQAAAEgCACQgCADgEAAQgEAAgCgCQgHgKgMAUIgIgBQhpggguBNQgNAXgIAfIAAAZIAAAIIgIAAIAAAYIAAAJIgEgBgAHUmKQgCgCAAgFQCbglAoiXIACgIQAOg8gChQIAEAAIAAAJQAGB0gOBhQAAAEgCACQhQBMhzApQgEAAgCgCg");
	this.shape_58.setTransform(-44.5,4.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A1A1A1").s().p("AgDBKIAAibQANBIgKBaIgDABIAAgIg");
	this.shape_59.setTransform(-0.8,-90.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("ArQQ3QgGgBgGgCIgUgDIgRgFQgTgHgRgLQgTgZgRgbIgCgDQgoAFgpAJIgLADQhMAdhRAEQgKgKgOgCQgSgCgQgJQgYgPgbgIQgQgKgRgGQgVgRgRgXIgMgRQgTgagGgfIgHglIgLhFQgDgRAAgRQAAgjAHgjIADgGQAPg0ASgxIABgEQAIgWAOgVQANgVAQgUIAAgBIAFgFIAAgBIABgGIABgBIAEgDIAAAAIADgBIAKgHQACgCAAgEIAEAAQAAgQgEgQQANAAALgEQAAgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIAIgBQApgKgxgeIAIAAIARAHQADACAFAAQAiAGAGgXIABgIIAAgIIAAgIQAEAAACgCQACgDAAgEIARAHQADACAEAAQAAgFACAAQAygXg0gmQAOABgFgSIAAgIQAKAcAcAJQASAGAZgBIAJgBIAAgIQAMhuhVAOQgMACgOAEIgIAAIAAgBIAAgHQARgEAQgBQBigDA6B7QAFALAIAJQAxgPAxgIIAMgCIAhgEQAPgCAPgFICSgvIAMgEIABgDIAFgEQAFgCAHABQAHACAFAGIABABQADALgMAEIhIAYIgVAHIhSAdQgmAMgoADIgDABIgPABIgIABQgSADgTAEIgPADIgUAGIgBABIgGACIgaALQgRAIgQALQgCAHgGADQgRAKgUAGQgkASgmARQAegJAcgPQAfgRAhgFQAUgEAVgFICigsQBUgWBPghIAlgOIAHgDIAwgPIABgBQA5gRA5gOIAFgBIAKgJQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQh/gjh1grQgEAAgDgBQhAgrAFBuQATASAmgBIAJgBIgBAFQgsAEguAAIgEgBQgGgvg3AHIAAgJQAEAAACgCQACgCAAgEQAqAAARgFQARgFgdgaQhbhThnhEQAAgBAAgBQAAgBAAgBQAAAAgBAAQAAgBAAAAQgagGgGgWQAEAAACgCQACgCAAgEQB8BgCFAUIAFAIQAdAnAtAYQA3AgBUABIAJAAIAIAEQA2AcASgKIAEgDIACgDIgFAAIAAgIQAFAAADgBQAWgNgegCIAAgIQANAAALgEQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgEgCgBQgegRgmgJIAAgBIgDgCIgFgDQgXgMgWgQQAhAAASAOQACACAFAAQB8AyhJgsQgCgCAAgEQAwANAoAXQACABAAAEQAEAAACgCQAggZgjgUIABgCQAAgIgEgIQAEAAACgCQACgCAAgEIBCAPIAHABIABAAIAAgIQAvgHApAAIABAKQAEACAEgCIABgDIACgHQAUAAATADIAAAEIgIAAQgQAAgJAIQANAQAKASQACADAAAEQgEAAgCgCQgkgphBASQAPBLA5AjQACABAAAEQBogChFhSQgCgCAAgEQAsAJALAoIABAIQA0AjgihdIgBgHQANABgBgSIAEAAQgFASAMADQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAABQAEAHAFAGIgCAGIAAACIABACIABACIABACIACABIADACIACABQgEBQhFgVQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAQhOAUhFAZIAAgIIAAgCIAAgGQAggCABgfIAAgIQAAgEgCgDIgvhDQgEAAgCgCQgcgeggAgIAAAQIAAAJQAAAEgCACQgCACgEAAQAAgEgCgCQgGgGgIgFIgIAAIg6AAQgIA2AhALIAHABIANgGQAOgGAHANQgDAHgFAFIgHAGQgGAEgHADQhaAghcAUQgPADgPAGIjZBKQgPAGgPAEIiUAmQhjAbhgAnQgIADgJACQgoAKglAVQgDACgDgBQgWAZgRAfQgcAzgJA7QgDASgFARQgPA6AEA8QACARAEARQASBHAuAzQAkApAzAOQBVAXBPgrQAOgHAOgBQAygFAogYIACAAQALgBAGAHIAEAHIACAFIABAKIAEACQALAIAHANQANAYAcAIIAxAOIBIgDQAwgSAhgjIgCgOIgWgMIgCgCQgNgTAIgLIgKgGIgKgGQgJgGgFgKIgDgGQABgHAFgDIAEgDQAVAGAUAMQAOAJAKAMIACABIAAAAIAAgCQADgFAGgCQBagiBdgZQAagHAZgKQAagLAYgOIASgLIAHgEICrgxIAzgOIBSgXIAkgKQBSgUBTgSQAbgGAagLQATgJATACQAUgSAMALQAFADADAHQACAEgDAEIgCABQgKAIgMAGIgNAFQgLAFgMACIgpAJIgMADIg5AOIhnAXQgvAKguAOQg9ATg/ARQhGAThEAZIghAOIgZANIgJAEQgPAIgSAFQgsALgtAOIgOAFQgxAPgxASQgEACgFABIgEAAIAFANIADAKQAIAPg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IAAgCIAEgGQACgCAAgFQA9ATA3gBIhFAKIgUADQgWBIgOAAQgJAAgGgdgAoaqsQgrgIhYAIQBDgOA7guQACgCAEAAIAAgIIAAgQIAUgwQABgBAAAAQAAAAABgBQAAAAABAAQABAAABAAIAAgIIAAgIQAagfgRgrQgBgEAAgEIgEAAQACg/gXhdQAEAAADgCQACgCAAgEQAlA1gBBXIgEAAIAAAAIABAHQAWBMgnAwQAAAEgCADIgGAJQBiglCkAUIAIABQA/gwBtgBIAIAAQgShSAShTIAAgIQAOgBgEASIgBAIIAAAIQAYCngGAaIgDgBIAAAAQh4gxhUBGIgIgBQihgxh+BjQAfA3gZAAIgHgBgAuDrPIgCgBIAAgBIgCgEIgDgBQgDgHgIgCIgBgCIgCgBIgDgBIgBAAIAAACIAAACQgBADgDACIgDAAIgCADIgBgBIgBgBIgBgBQgGgBgEgFQgSgJgOgOIgBgBQgSgTgFgbIgFgdIABgCIACgDIABAAIgBgEIAAgIIAAg6IAIAAQAAAEACACQACADAEAAIABBJQAEAKACALIABAGQAEAGACAGIABAHIAlAhIADgBQADgJgDgJQgBgDABgDIABgCIACgCIACgBIAHABQAKANgDAOIAAAAQAFADAAAGIABAFQALAFAGAIIAEAHIgBACIAAABIgLgFgAtQs0QAlgmgjBBgArmt8IgBgBIgBgCIAAgBIAAgDIAAgBIABAAIgBgDIAAgBIAIgFIADgDQAKgEAKgCIACAAIAIAAIABABIAAABIAFAAIABABIABACIAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBABQgPABgPAHIgEACIAAABQgCACgDAAIAAABIgCACIgEAAgAtJuaQgHgFACgIQACgMAIgFIABgBQADgGAIgBIACgBIAGgBQAcgDABAbQABALgLAGIgEACQgDABgDgBQgIADgHAAQgKAAgJgGgAtDuyQgFAIACAKQABAEAEABQAEADAFgBIACgBIAAAAQgCgEgBgDQAEgDgBgFIACAAIALAAIACADQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQAGAAACgGIAAgCQABgIgHgFQgHgGgJAAIgCACIgBAAQgGAAgDAEIgDAEIgBAAgApHu7QgHgCgIgBIgBgCIAAgDIABgEIACgBIACAAIAAgBQAUgCAPAMIABABIAAACIgBACIgBABIgIABQgHAAgIgDgAq3vVIgDgFQgDgEACgGIAAAAIgBgDIAAgCIACgGIAIgIQADgDADgBIAJgDIACAAIAEgBIAIACIACABIABAAQAOAHgEASQgBAIgIAGIgJAGQgHAEgGAAQgJAAgHgKgAqlv3IgDABIgCAAQgEACgCADQgDADgBAEIgBADQgBAGACAFQADAHAHADQAFACACgDIgEgBQgFgDACgFIADgGIADgDQACgCACAAQAGgCADAEIAAABIABAAQAEAAABgDQACgFgEgEQgHgHgJAAIgCAAgArkwhIAqgCIgxARg");
	this.shape_60.setTransform(2.6,23.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#626262").s().p("AAABvQAJiDgYhiIAIAAQAQAoAHAyIAAAIIgEAAQACBPgOA8IAAgIg");
	this.shape_61.setTransform(21.7,-66.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1C1C1C").s().p("AKHN5IAAgIIAAgJQB0gXhGh6QgBgCgEAAIAAgIIAAgJQAVAIAbgLQAAAAAAgBQAAAAABAAQAAgBAAgBQAAgBAAgBIAIAAIAIAAIAAABQAIBWA7AiQADACAEAAIACABIAAADQABAGAFABQAPAEAPABIgFABIgDAAIgFABQhbAdhRACQgBAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgGAPgTAAIgDAAgALJLdQAGAuASAkQAAABAAABQAAABAAAAQAAABAAAAQABAAAAAAQBUAXhuh1IABAIgAtfLPIAPgCIADAAQgJADgKAAIABgBgAtMKbIAAgIIAJAAIAIAAIABAIQAEASgNgBIAAAEIgMACQADgKAAgNgAHjHXQgEAAgCgCQgCgCAAgEQAAgEgCgBQgGgEgJAAIAAgIIAAgIQBbhJCbgJIAIAAQAAABAAABQAAABAAABQAAAAAAAAQAAABgBAAQgLADgMAAIAAAIIgIABQg1AIguAQIAAAIQgEAAgDACIgDACQgjAUglARIAAAIIgEAAQABARgMAAIgBAAgAlsivQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAEgsAgBMQABABAEAAIAAAIIAAAJIAXBSIABAIIABAIQAFAdgOALQAAgIgDgGIgKgVIhuBMQBfhMgZiYgAhysnQgBgwgYgZQAEAAACgCQACgCAAgEQA2AagTAYQgCADAAAEIgEAAQACAagOAHIAAgJg");
	this.shape_62.setTransform(8.7,-17.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#272727").s().p("AlHBIQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgLgDgMAAIAAgIIACgBQA+gJA0ABQAwACAoAKIAEABQAQAEgUgIQgtgUgbgNQgqgTADgEQABgBAEAAQAWAEATAGQBhAhARBPIABAIQAAAEgCACQgDACgEAAQgMgYgJAVIgLAYQgGhni3ARgAFQhTQhUgGgfg7QAEgEAFgDQADgCAFAAQAnAvBDASIAIABQAAAEgCACQgCACgEAAIgIAAg");
	this.shape_63.setTransform(-39.7,-97.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373737").s().p("AmaSwIgBgKIAEAAIABANIgEgDgAFTywQACgCAEAAQAHAOAZgJQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAiALQgkAQhHAGQASgPAQgQg");
	this.shape_64.setTransform(-38.2,2.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1D1D1D").s().p("AjXSMQgBAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgQgmgcAgIgFAAIgBgGIgFgHIAtgaQACgCAFgBQA8ARgqAbQgCACAAAEIgIAAgAqSJnQAAgEgBgCQgVgJAGgjQAchGAkg+QABgDAAgEQAOADgBAWIAEAAQAHAdAaAKQAEACAEgBQAAAFgCACQgCACgEAAIAAAIIAAAIQgFAAgBgCQglgxgfArIAHARQABADAAAFIgIAAIgIAAIgJAAQgDAbANALQADACAEAAQAAABAAABQAAABgBABQAAAAAAABQAAAAAAAAQgLAEgNAAQAEAQAAARgAKIxDQgKgZgCgfQAWADAGgSQAAAAABAAQAAAAABAAQAAAAABAAQABgBABAAQAEAAACADQACACAAADQAAAFgCACQgGAGgIAEIAAAIIAAAJIAAAIQAFAVgOADQgBAAgBAAQAAAAgBAAQgBgBAAAAQAAAAAAgBg");
	this.shape_65.setTransform(-52.5,5.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F2F2F2").s().p("AiJNoIgBgBIAFAAIAAACIgEgBgACJtoIACABIgDAHIABgIg");
	this.shape_66.setTransform(0.7,-42.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0F0F0F").s().p("AAAApQAAgEABgEQAWg2g3AVQAAgDgCgCQgCgCgEAAIAAgCIAAgHQAhABAHgZIAAgIQANgBgBARIAEAAQAJAZALAWQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAIAAAIIgIAAIgIAAQAAAJADAGQABACAEAAQAAABAAABQAAAAgBABQAAABAAAAQAAAAgBAAQgKAEgHAAQgKAAgEgIg");
	this.shape_67.setTransform(-3.7,-122.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#353535").s().p("AEOPMQgbhBgig4QAEgEAFgDQADgBAFAAQAAAEACACQABACAFAAQAwCiBIh8QAGgJABgdQAAgEADgEQARAgAMAoQAAABAAAAQABAAAAAAQABAAABAAQABAAABAAIAAAJIAAAIQgEAAgEABIh0AoQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBgAmMvGIAPgDIASgEQgNAKgUAEIAAgHg");
	this.shape_68.setTransform(37.7,-38.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262626").s().p("AD0RyIALgDQgMAFgNAHIgsAFIA6gOgAFNRaIgDAFIgKAAIANgFgALlQZIAHABIgEACIgDgDgAKSQBIABgGIAFAEIAFADIgLgBgAKjPdQABgLgKgCQgFgCgDABIAMgFIABAEQABAEADAEIABAAQAFAJAGAHIgMgJgA0HN/IAGgFIgBAGIAAABIgFAFIAAgHgAutL7IABABIADABIABAAQgPAIgQABIAagLgAyvLEQABgWgOgCIAAgIQAPgjAqgKQAAAAAAgBQAAAAAAAAQABgBAAgBQAAgBAAgBQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAHAWgcgHQACALAOABIABAEQghgEgIAVIAAAYIAAAIgAqPKyIBIgYQALgEgCgLIAhAMQABAAAAAAQAAAAAAABQAAABAAAAQAAABAAABIABABIgwAPIgHADQgmAEgmAGIAPgGgAjNKTIgEgJIAFABIAAAIIgBAAgArpJ/IAAgEQAuAAAsgEIABgFIA3ARIgFAEIgBADIgNAEQgygShNADgAkAKFQgMgGgOABIgoADIgCgKIgCgEIAIgGQA1AYgchOIgBgIQAEAAACgCIAEgBQAQA1AoAcQgGAAgHACIgOAEIgBAAgAmgJIQgbgNgfgKIgIgBQg7gKgogeQAfALAjAFIAIAAIAEACQApAWA1ANIAAAEIAAAIQgEAAgDgBgAT6I1IgDgBIgCgDIgJgOIAAgEIABAAIAGABIAJABIAIACIAEATIgEAAIgKgBgAmgIvQgngRgrgOIgBAAIgIgBQgogIgZgYQAsAOAuAKIAIABQAXAWAqAHIAAAEIAAAIQgEAAgDgCgAvvFsQAMgUAHAKQACACAEAAQAGAWAaAGQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABIgEAAIAAAAQADAPgGAAQgLAAgogogACsFQQgRABABgOQBehOAkiHIABgIIAHAJQABADAAAEIAAAIQgVCDhmBTgAK/D+IABgBIAAABQgJADgGABQAHgDAHgBgANjDkQgGgDgJAAIAAgDIAUgFIAFAAIAJACIgBAAQgGAEgBAGIgJACQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAgBAAgAwYDZQAAgEgCgCQgygggmgcIBYANQAKgWAPA9QADAOgVAAIgFAAgApVCoQCxguhwAsQgbALgQAAQgPAAgHgJgAy4BEQgKgagCgeQA3iNCGg9QAEgCAEAAQAIAAAHADQABABAAAEQgEAAgDACQhsA/hJBjIAABJIAAAIQAAAEgCACQgCACgEAAQgFAAAAgBgAhopBQAEgSgOABIAAgIIAAgQQAehCgUhSIgBgIQAOgGgCgbIAEAAIAAARIAAAIIAACcIAAAIIABAIQAFAjgWAGIABgIgAB7pJQAAgEgBgEQgwhrgZiDQAOgDgFgWIAAgIQApCDAfCMIABAIIgIAAgAggs3QAvgQghBvIgCACQgEAAgIhhgAhlwcQABgSgOABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgThXg6BAIAAgJIAAgQIAAgIQAwgFAlgQIAFgCQAEgCAEAAIAAABIAAAHIAABSIAAAJg");
	this.shape_69.setTransform(7.8,-20.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0E0E0E").s().p("AgBAmQACgygPghIANACQAHAIAHAJQACADAAAEIAAAwIAAAJQgEAAgEABQgFADgDAEIAAgIg");
	this.shape_70.setTransform(3.9,-130.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#212121").s().p("ALfK7QgCgDgDAAIAAAAQA1gKA1gNIAIgBIAIAAQAIAAAHADQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIgHACIgBAAQhCAHg5ASQAAgEgCgCgAtiBPQgBgBgBgEQC9ggAshhQABgBAEAAQAcBYhoBpQgCACgEAAQhYgShCgqgAs6BKQAAAEABABQB8BYA3iOIgGgSQgcAaiSApgAA6oNQg6gPhJgIIAAgIQAogCgHgwIAAgIQAEgEAFgCQADgCAFAAIgGASQACArAPgUQBUhxhfAPQAAgEgCgDQgHgKgIgIIAdAEQATACASAFIAZAGIAHAIIAAAAIAAAIIAAAAIAAAIQADAEADAFQABADABAFIgBAHQgLAigNAgQgFAdAWADIAIABIAAAIIAAAIIgIgBg");
	this.shape_71.setTransform(7.8,-64.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFCC99").s().p("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IAth7gyQgEAAgDgCQgSgPggAAQAWAQAWAMIAGAEIgBABIAEABQAlAJAfASQACABAAAEQAAABAAABQAAAAAAABQgBABAAAAQAAAAgBAAQgLAEgMAAIgBgEQgqgGgXgXIAAAAIgIAAQgugLgsgNQAZAYApAIIAIADIAAgCQAsANAmASQAEABAEAAQAeADgXAMIgIgDQg0gNgpgVIACgEQgCACgEAAIgIgBQgkgFgegLQAoAeA6ALIAIAAQAgAKAbANIAGAHQgFADgIAAQgUAAgngUgApQFoQAZBQBYASIANAAQgkhKhbggIABAIgAhsE9QB8B5h+h/QAAAEACACgAkJE/QANAUA0gVQA3gWgPAAQgPAAhaAXgAkvleQgtBhi8AgQAAAEACABQBCAqBYATQAEAAACgCQBnhpgbhaQgEAAgBACgAo5jlIADAaQAWgpgHAAQgEAAgOAPgAmylHQgKACgJADIgEAEIgHAFIAAABIAAACIAAABIgBABIAAADIAAABIACABIABABIAEAAIABgBIABgBQADAAABgDIABgBIAEgBQAOgHAQgCQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgBIgBgDIgBgBIgFAAIgBgBIAAAAIgJgBIgCABgAoYlzIgGABIgCAAQgIABgEAGIAAACQgJAFgCALQgBAJAHAFQAQAKARgIQADABAEgBIAEgCQAKgGAAgLQgBgYgWAAIgGABgAk6l6IAAAAIgDABIgCABIAAADIAAADIABACQAIABAHADQAMAEALgCIABgCIAAgCIAAgBIgBgCQgMgKgPAAIgHABgApZmJQgGAfACgDQA+g3gKAAQgGAAgqAbgAmkmVQgCAGAEAEIACAFQALAQASgKIAKgHQAHgFACgJQADgSgOgGIAAgBIgCAAIgJgCIgDABIgDgBIgIADQgEACgCADIgJAIIgBAGIAAABIgBAAQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAgAmjnVIgpADIgIAPIgCABIAAAEIArgRIALgFIAAAAIADgBIAKgFIgQAFgAErqgQAIBvAFgQQAehhghAAQgEAAgGACgADyJuIgBgEQgSgCgUgBQACgOABgOQADgGACgQQAaiLANghQgEAAgCACQgaAhgNAuQgbgLgPgYQgFgQgLgNIAAgCIAAgBIgCgCQgGgKgEgLIAAgIQAjhgAthVQACgDAAgEQBCgxBqgIIAIAAQCRAyhOCjQgBAEAAAEQAAAEgCACQgCACgEAAQgJBCAXAiQACACAAAFIAAAIQAACfiNAAQgnAAgxgMgAFEGJQAmC1gmi9IAAAIgAEjGBQATCMgTiVIAAAJgAEbEGIgBAIQgBB6AzgwQgPgCgGg3QgEgmgKAAQgGAAgIANgAIKI7QgcgVAKg7QBlhTAViCIABgIQAPgmAygDIAIAAQBKAXgnA8QgCADAAAEQgEAAgBACQgKAQgSAHIgIAAIAWAIQAsAPA5ABIAIAAIAnAjQACACAAAEQABAQAJAHQADACAEAAIABABQiJBXjZAzQgEAAgCgCgAJKHvQCwAMiwgQIAAAEgAN2GfIgBgEIgBgFIABgCIABgBIAKgFIAEgBIAAgBIABgDIABgCIAAgCIAAgCIAAgBIADgEIADgDIACgBIADgBIAAAAIAHABIABABIAAAAIABABIABAFIgBAHIAAABQgCALgJAJIgCACIgLACQgGAAgGgCgANiGHQgNgMADgbQAFgUAUgEIAIgBQAAAEACADQAaAwgsALQgFAAgCgCgAM3FsQgNgDAFgRIAcg4QABgBAAAAQAAAAABgBQAAAAABAAQABAAABAAQAAAEABAEQAXA1gxAVIAAgEgAL+FXQgSgCACgWQANgkAWgcIAGgCQAAAFACACQA1A7hIAZIgIgBgAGFtEQgVgDAFgdQANggAKgiIADgHQA8ASg8BRQgCACAAAFIgIgBgAD9tVQgLgXgJgZIAAgIIAAhSQAUgEAOgKIABgBQACADADABIAFABQAPAhgCAzIAAAIIAAAIQAHAwgoABQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAEuuEIAFgRIAAgJIAAgxQBhgOhVBxQgFAGgDAAQgIAAgBgegACptuQgWgOgMgyQA6hAAUBYQAAAAAAAAQAAAAABAAQAAAAABABQABAAABAAIgBAIQgHAZghgBIAAAHg");
	this.shape_72.setTransform(-25.4,-35.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FAFAFA").s().p("ACfMJIAIADQgCACgEABQAAgFgCgBgAgjMGIAIABIAAACgAgKL+IAIAAIAAAAIgIAAgAANL2IABgBIADABgApIHPIAIAAIgHACIgBgCgAGXBvIAAgFIAAAFIAAAAgAJDsMIAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAABIACAFIgGACIAAgHg");
	this.shape_73.setTransform(-39.4,-44.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#202020").s().p("AGwPkIABgIQACgOgBgMIAAABQADAIAFAHQAFAHgEAJIgLAKIAAgIgAFGN5IAAgCIAAgGIAEABQgCADAAAFIgCgBgAFyNqIADgDQACgCAAgEIAIAAIARATQgOgJgQgBgAm2tdQgCgCgEAAIAAgJQBEgfgUhMIgCgGQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgJQAIAAAHgDQACgBAAgEQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQAdBthTAmQAAgEgCgCg");
	this.shape_74.setTransform(58.8,-24.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#222222").s().p("AhqFxIACABIgBADQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAgAAyjwIAAgIQAAgFACgCQA7hRg7gSIgCgBQAAgEgCgDQgCgFgEgEIASgBQAHAAAHACQAjAJgCAvIAAAIQAAAEgBABQgHADgIAAIAAAJIAAABIAAAHQgDAqgmAHIAAgIg");
	this.shape_75.setTransform(9.4,-94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dudeforquizzesridestill, new cjs.Rectangle(-136.5,-135.9,273.3,271.8), null);


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


(lib.Backgrond = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFFFF").s().p("Egq9AfRMAAAg+hMBV7AAAMAAAA+hg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EAq/AfRMhV9AAAMAAAg+hMBV9AAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276,-201,552.1,402.1);


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


(lib.incorrect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABCCCQgFgDgEgFIgLgRIgthIIgwBKIgIAMIgFAHQgEADgFACQgEACgGAAQgJAAgHgGQgGgFAAgMQAAgNANgSIA5hUIgwhKQgHgLgDgIQgEgIAAgHQAAgIAGgFQAHgGAKAAQALAAAGAGQAGAGALASIAlA+IApg+IAJgOIAHgJQAEgEAEgBQADgCAGAAQAKAAAHAGQAFAFABAJQAAALgOAVIgzBLIA3BUIALASQADAHAAAHQAAAGgDAFQgDAFgFADQgGADgHAAQgHAAgFgDg");
	this.shape.setTransform(12.8,23.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABECGQgFgEgEgEIgMgSIgvhKIgwBMIgJANIgGAGQgDAEgFACQgEACgHAAQgJAAgHgGQgGgGAAgMQAAgNANgTIA8hWIgzhNQgGgLgEgIQgEgIABgIQgBgHAHgGQAGgGAKAAQAMAAAGAHQAHAFAKATIAnBAIAqhAIAKgOIAGgKQAEgEAFgBQAEgCAGAAQAKAAAGAGQAHAGAAAIQAAAMgPAVIg0BOIA4BWQAIALAEAIQADAHAAAHQAAAGgDAGQgDAFgFADQgHADgHAAQgHAAgFgDg");
	this.shape_1.setTransform(13.9,23.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.incorrect, new cjs.Rectangle(2.6,9.9,21.8,27.5), null);


(lib.general_buttoncolor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgwAAgigjQgjgigBgxQABgwAjgiQAigjAwAAQAxAAAjAjQAjAigBAwQABAxgjAiQgjAjgxAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.general_buttoncolor, new cjs.Rectangle(0,0,23.7,23.6), null);


(lib.check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AiwA/IAAiWIB+B9IDjjjIAACYIjjDjg");
	this.shape.setTransform(40,45.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiwA/IAAiWIB+B9IDjjjIAACYIjjDjg");
	this.shape_1.setTransform(42,47.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.check, new cjs.Rectangle(22.3,26.3,37.5,40), null);


(lib.btn_mick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("correctwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ArPknIWfAAQC0AAAAC0IAADnQAAC0i0AAI2fAAQi0AAAAi0IAAjnQAAi0C0AAg");
	this.shape.setTransform(90,29.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("ArPEoQi0AAAAi0IAAjnQAAi0C0AAIWfAAQC0AAAAC0IAADnQAAC0i0AAg");
	this.shape_1.setTransform(90,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("ArPEoQi0AAAAi0IAAjnQAAi0C0AAIWfAAQC0AAAAC0IAADnQAAC0i0AAg");
	this.shape_2.setTransform(90,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("ArPEoQi0AAAAi0IAAjnQAAi0C0AAIWfAAQC0AAAAC0IAADnQAAC0i0AAg");
	this.shape_3.setTransform(90,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,184,63.1);


(lib.btn_fall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("incorrectwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ArPknIWfAAQC0AAAAC0IAADnQAAC0i0AAI2fAAQi0AAAAi0IAAjnQAAi0C0AAg");
	this.shape.setTransform(90,29.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("ArPEoQi0AAAAi0IAAjnQAAi0C0AAIWfAAQC0AAAAC0IAADnQAAC0i0AAg");
	this.shape_1.setTransform(90,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("ArPEoQi0AAAAi0IAAjnQAAi0C0AAIWfAAQC0AAAAC0IAADnQAAC0i0AAg");
	this.shape_2.setTransform(90,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ArPEoQi0AAAAi0IAAjnQAAi0C0AAIWfAAQC0AAAAC0IAADnQAAC0i0AAg");
	this.shape_3.setTransform(90,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,184,63.1);


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
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmTest',{loop:-1});
		
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.1;
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-114,-13,161.8,30.1), null);


(lib.STAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TEXT
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(163.9,172.7,1,1,0,0,0,150.5,39.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78));

	// Layer 5
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168.2,169,1,1,0,0,0,191.1,191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:190.7,regY:193.2,rotation:9.3,x:167.4,y:171},0).wait(1).to({rotation:18.7,x:167.1,y:170.9},0).wait(1).to({rotation:28,x:166.8,y:170.7},0).wait(1).to({rotation:37.4,x:166.6,y:170.4},0).wait(1).to({rotation:46.7,x:166.3,y:170.1},0).wait(1).to({rotation:56.1,x:166.2,y:169.9},0).wait(1).to({rotation:65.4,x:166.1,y:169.5},0).wait(1).to({rotation:74.7,x:166,y:169.1},0).wait(1).to({rotation:84.1,y:168.9},0).wait(1).to({rotation:93.4,x:166.1,y:168.4},0).wait(1).to({rotation:102.8,x:166.2,y:168.1},0).wait(1).to({rotation:112.1,x:166.4,y:167.8},0).wait(1).to({rotation:121.4,x:166.6,y:167.5},0).wait(1).to({rotation:130.8,x:166.8,y:167.3},0).wait(1).to({rotation:140.1,x:167.1,y:167.1},0).wait(1).to({rotation:149.5,x:167.4,y:166.9},0).wait(1).to({rotation:158.8,x:167.8,y:166.8},0).wait(1).to({rotation:168.2,x:168.1},0).wait(1).to({rotation:177.5,x:168.5},0).wait(1).to({rotation:186.8,x:168.8,y:167},0).wait(1).to({rotation:196.2,x:169.1},0).wait(1).to({rotation:205.5,x:169.4,y:167.2},0).wait(1).to({rotation:214.9,x:169.7,y:167.5},0).wait(1).to({rotation:224.2,x:169.9,y:167.7},0).wait(1).to({rotation:233.6,x:170.1,y:168.1},0).wait(1).to({rotation:242.9,x:170.2,y:168.4},0).wait(1).to({rotation:252.2,x:170.3,y:168.7},0).wait(1).to({rotation:261.6,x:170.2,y:169},0).wait(1).to({rotation:270.9,x:170.3,y:169.4},0).wait(1).to({rotation:280.3,x:170.2,y:169.7},0).wait(1).to({rotation:289.6,x:170.1,y:170},0).wait(1).to({rotation:298.9,x:169.8,y:170.3},0).wait(1).to({rotation:308.3,x:169.6,y:170.5},0).wait(1).to({rotation:317.6,x:169.3,y:170.8},0).wait(1).to({rotation:327,x:169,y:170.9},0).wait(1).to({rotation:336.3,x:168.7,y:171.1},0).wait(1).to({rotation:345.7,x:168.3},0).wait(1).to({rotation:355,x:168},0).wait(1).to({regX:191.1,regY:191.1,rotation:360,x:168.2,y:169},0).wait(1).to({regX:190.7,regY:193.2,rotation:369.3,x:167.4,y:171},0).wait(1).to({rotation:378.7,x:167.1,y:170.9},0).wait(1).to({rotation:388,x:166.8,y:170.7},0).wait(1).to({rotation:397.4,x:166.6,y:170.4},0).wait(1).to({rotation:406.7,x:166.3,y:170.1},0).wait(1).to({rotation:416.1,x:166.2,y:169.9},0).wait(1).to({rotation:425.4,x:166.1,y:169.5},0).wait(1).to({rotation:434.7,x:166,y:169.1},0).wait(1).to({rotation:444.1,y:168.9},0).wait(1).to({rotation:453.4,x:166.1,y:168.4},0).wait(1).to({rotation:462.8,x:166.2,y:168.1},0).wait(1).to({rotation:472.1,x:166.4,y:167.8},0).wait(1).to({rotation:481.4,x:166.6,y:167.5},0).wait(1).to({rotation:490.8,x:166.8,y:167.3},0).wait(1).to({rotation:500.1,x:167.1,y:167.1},0).wait(1).to({rotation:509.5,x:167.4,y:166.9},0).wait(1).to({rotation:518.8,x:167.8,y:166.8},0).wait(1).to({rotation:528.2,x:168.1},0).wait(1).to({rotation:537.5,x:168.5},0).wait(1).to({rotation:546.8,x:168.8,y:167},0).wait(1).to({rotation:556.2,x:169.1},0).wait(1).to({rotation:565.5,x:169.4,y:167.2},0).wait(1).to({rotation:574.9,x:169.7,y:167.5},0).wait(1).to({rotation:584.2,x:169.9,y:167.7},0).wait(1).to({rotation:593.6,x:170.1,y:168.1},0).wait(1).to({rotation:602.9,x:170.2,y:168.4},0).wait(1).to({rotation:612.2,x:170.3,y:168.7},0).wait(1).to({rotation:621.6,x:170.2,y:169},0).wait(1).to({rotation:630.9,x:170.3,y:169.4},0).wait(1).to({rotation:640.3,x:170.2,y:169.7},0).wait(1).to({rotation:649.6,x:170.1,y:170},0).wait(1).to({rotation:658.9,x:169.8,y:170.3},0).wait(1).to({rotation:668.3,x:169.6,y:170.5},0).wait(1).to({rotation:677.6,x:169.3,y:170.8},0).wait(1).to({rotation:687,x:169,y:170.9},0).wait(1).to({rotation:696.3,x:168.7,y:171.1},0).wait(1).to({rotation:705.7,x:168.3},0).wait(1).to({rotation:715,x:168},0).wait(1));

	// Layer 4
	this.instance_2 = new lib.star_big();
	this.instance_2.parent = this;
	this.instance_2.setTransform(164.2,172.6,1,1,0,0,0,83.7,106.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,51,255,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:88,regY:98.9,rotation:-9.3,x:167.3,y:164.7},0).wait(1).to({rotation:-18.7,x:165.9,y:164.3},0).wait(1).to({rotation:-28,x:164.6,y:164.1},0).wait(1).to({rotation:-37.4,x:163.2,y:164.2},0).wait(1).to({rotation:-46.7,x:161.8,y:164.4},0).wait(1).to({rotation:-56.1,x:160.5,y:164.9},0).wait(1).to({rotation:-65.4,x:159.3,y:165.6},0).wait(1).to({rotation:-74.7,x:158.2,y:166.5},0).wait(1).to({rotation:-84.1,x:157.3,y:167.5},0).wait(1).to({rotation:-93.4,x:156.6,y:168.7},0).wait(1).to({rotation:-102.8,x:156.1,y:170},0).wait(1).to({rotation:-112.1,x:155.8,y:171.3},0).wait(1).to({rotation:-121.4,x:155.6,y:172.7},0).wait(1).to({rotation:-130.8,x:155.8,y:174.1},0).wait(1).to({rotation:-140.1,x:156.1,y:175.4},0).wait(1).to({rotation:-149.5,x:156.7,y:176.7},0).wait(1).to({rotation:-158.8,x:157.5,y:177.9},0).wait(1).to({rotation:-168.2,x:158.4,y:178.9},0).wait(1).to({rotation:-177.5,x:159.5,y:179.7},0).wait(1).to({rotation:-186.8,x:160.7,y:180.4},0).wait(1).to({rotation:-196.2,x:162,y:180.8},0).wait(1).to({rotation:-205.5,x:163.4,y:181},0).wait(1).to({rotation:-214.9,x:164.7,y:181.1},0).wait(1).to({rotation:-224.2,x:166.1,y:180.8},0).wait(1).to({rotation:-233.6,x:167.4,y:180.5},0).wait(1).to({rotation:-242.9,x:168.6,y:179.8},0).wait(1).to({rotation:-252.2,x:169.8,y:179},0).wait(1).to({rotation:-261.6,x:170.7,y:178},0).wait(1).to({rotation:-270.9,x:171.5,y:176.9},0).wait(1).to({rotation:-280.3,x:172.1,y:175.6},0).wait(1).to({rotation:-289.6,x:172.5,y:174.3},0).wait(1).to({rotation:-298.9,x:172.6,y:172.8},0).wait(1).to({rotation:-308.3,y:171.5},0).wait(1).to({rotation:-317.6,x:172.3,y:170.1},0).wait(1).to({rotation:-327,x:171.8,y:168.8},0).wait(1).to({rotation:-336.3,x:171.1,y:167.6},0).wait(1).to({rotation:-345.7,x:170.2,y:166.6},0).wait(1).to({rotation:-355,x:169.1,y:165.7},0).wait(1).to({regX:83.7,regY:106.2,rotation:-360,x:164.2,y:172.6},0).wait(1).to({regX:88,regY:98.9,rotation:-369.3,x:167.3,y:164.7},0).wait(1).to({rotation:-378.7,x:165.9,y:164.3},0).wait(1).to({rotation:-388,x:164.6,y:164.1},0).wait(1).to({rotation:-397.4,x:163.2,y:164.2},0).wait(1).to({rotation:-406.7,x:161.8,y:164.4},0).wait(1).to({rotation:-416.1,x:160.5,y:164.9},0).wait(1).to({rotation:-425.4,x:159.3,y:165.6},0).wait(1).to({rotation:-434.7,x:158.2,y:166.5},0).wait(1).to({rotation:-444.1,x:157.3,y:167.5},0).wait(1).to({rotation:-453.4,x:156.6,y:168.7},0).wait(1).to({rotation:-462.8,x:156.1,y:170},0).wait(1).to({rotation:-472.1,x:155.8,y:171.3},0).wait(1).to({rotation:-481.4,x:155.6,y:172.7},0).wait(1).to({rotation:-490.8,x:155.8,y:174.1},0).wait(1).to({rotation:-500.1,x:156.1,y:175.4},0).wait(1).to({rotation:-509.5,x:156.7,y:176.7},0).wait(1).to({rotation:-518.8,x:157.5,y:177.9},0).wait(1).to({rotation:-528.2,x:158.4,y:178.9},0).wait(1).to({rotation:-537.5,x:159.5,y:179.7},0).wait(1).to({rotation:-546.8,x:160.7,y:180.4},0).wait(1).to({rotation:-556.2,x:162,y:180.8},0).wait(1).to({rotation:-565.5,x:163.4,y:181},0).wait(1).to({rotation:-574.9,x:164.7,y:181.1},0).wait(1).to({rotation:-584.2,x:166.1,y:180.8},0).wait(1).to({rotation:-593.6,x:167.4,y:180.5},0).wait(1).to({rotation:-602.9,x:168.6,y:179.8},0).wait(1).to({rotation:-612.2,x:169.8,y:179},0).wait(1).to({rotation:-621.6,x:170.7,y:178},0).wait(1).to({rotation:-630.9,x:171.5,y:176.9},0).wait(1).to({rotation:-640.3,x:172.1,y:175.6},0).wait(1).to({rotation:-649.6,x:172.5,y:174.3},0).wait(1).to({rotation:-658.9,x:172.6,y:172.8},0).wait(1).to({rotation:-668.3,y:171.5},0).wait(1).to({rotation:-677.6,x:172.3,y:170.1},0).wait(1).to({rotation:-687,x:171.8,y:168.8},0).wait(1).to({rotation:-696.3,x:171.1,y:167.6},0).wait(1).to({rotation:-705.7,x:170.2,y:166.6},0).wait(1).to({rotation:-715,x:169.1,y:165.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.4,23.3,319,295.5);


(lib.star_Flicker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star
	this.instance = new lib.star("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(164.8,-3.4,0.395,0.148,0,0,0,7.2,8.4);

	this.instance_1 = new lib.star("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.1,-5.5,0.846,0.649,0,0,0,7.3,8.4);

	this.instance_2 = new lib.star("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(340.6,-11.2,0.77,0.289,0,0,0,7.3,8.4);

	this.instance_3 = new lib.star("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(269.3,-15,0.865,0.451,0,0,0,7.2,8.4);

	this.instance_4 = new lib.star("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(304,-1.5,0.746,0.364,0,0,0,7.2,8.4);

	this.instance_5 = new lib.star("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(237.7,-2.5,0.956,0.749,0,0,0,7.2,8.4);

	this.instance_6 = new lib.star("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(100.1,1.6,0.743,0.279,0,0,0,7.2,8.4);

	this.instance_7 = new lib.star("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(193.8,-18.7,1.042,0.662,0,0,0,7.2,8.4);

	this.instance_8 = new lib.star("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(137.6,-17,0.654,0.343,0,0,0,7.2,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{scaleX:0.654,scaleY:0.343,rotation:0,x:137.6,y:-17,regY:8.4,regX:7.2}},{t:this.instance_7,p:{scaleX:1.042,scaleY:0.662,rotation:0,x:193.8,y:-18.7,regX:7.2}},{t:this.instance_6,p:{regX:7.2,regY:8.4,scaleX:0.743,scaleY:0.279,x:100.1,y:1.6}},{t:this.instance_5,p:{regX:7.2,scaleX:0.956,scaleY:0.749,x:237.7,y:-2.5,regY:8.4,rotation:0}},{t:this.instance_4,p:{scaleX:0.746,scaleY:0.364,x:304,y:-1.5,regX:7.2,regY:8.4}},{t:this.instance_3,p:{scaleX:0.865,scaleY:0.451,x:269.3,y:-15,regY:8.4,regX:7.2,rotation:0}},{t:this.instance_2,p:{regX:7.3,scaleX:0.77,scaleY:0.289,x:340.6,y:-11.2,regY:8.4}},{t:this.instance_1,p:{regX:7.3,regY:8.4,scaleX:0.846,scaleY:0.649,x:62.1,y:-5.5,rotation:0}},{t:this.instance,p:{regY:8.4,scaleX:0.395,scaleY:0.148,x:164.8,y:-3.4,regX:7.2}}]}).to({state:[{t:this.instance_8,p:{scaleX:0.883,scaleY:0.49,rotation:30,x:301.5,y:-6.6,regY:8.4,regX:7.2}},{t:this.instance_7,p:{scaleX:0.872,scaleY:0.582,rotation:-30,x:266.9,y:1.8,regX:7.2}},{t:this.instance_6,p:{regX:7.3,regY:8.3,scaleX:0.587,scaleY:0.236,x:208.5,y:-15.1}},{t:this.instance_5,p:{regX:7.3,scaleX:0.837,scaleY:0.529,x:80.8,y:-4.5,regY:8.4,rotation:0}},{t:this.instance_4,p:{scaleX:0.764,scaleY:0.307,x:135.4,y:5,regX:7.2,regY:8.4}},{t:this.instance_3,p:{scaleX:0.949,scaleY:0.381,x:330.2,y:4.3,regY:8.4,regX:7.2,rotation:0}},{t:this.instance_2,p:{regX:7.2,scaleX:0.608,scaleY:0.245,x:260.3,y:-15.2,regY:8.4}},{t:this.instance_1,p:{regX:7.2,regY:8.3,scaleX:0.71,scaleY:0.514,x:171.3,y:4.8,rotation:0}},{t:this.instance,p:{regY:8.3,scaleX:0.312,scaleY:0.125,x:143.2,y:-12.7,regX:7.2}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.657,scaleY:0.409,rotation:30,x:221.9,y:7.4,regY:8.3,regX:7.2}},{t:this.instance_7,p:{scaleX:0.497,scaleY:0.422,rotation:45,x:87.8,y:4.9,regX:7.3}},{t:this.instance_6,p:{regX:7.2,regY:8.3,scaleX:0.271,scaleY:0.174,x:179.7,y:-9}},{t:this.instance_5,p:{regX:7.2,scaleX:0.744,scaleY:0.496,x:186.3,y:3.1,regY:8.4,rotation:0}},{t:this.instance_4,p:{scaleX:0.424,scaleY:0.226,x:207.3,y:-6.1,regX:7.3,regY:8.4}},{t:this.instance_3,p:{scaleX:0.577,scaleY:0.281,x:119.4,y:-5.1,regY:8.6,regX:7.2,rotation:0}},{t:this.instance_2,p:{regX:7.2,scaleX:0.403,scaleY:0.18,x:268.9,y:3.7,regY:8.3}},{t:this.instance_1,p:{regX:7.2,regY:8.4,scaleX:0.7,scaleY:0.522,x:289.8,y:-6,rotation:30}},{t:this.instance,p:{regY:8.1,scaleX:0.263,scaleY:0.092,x:237.9,y:-10.1,regX:7}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.564,scaleY:0.374,rotation:30,x:107.2,y:-5,regY:8.6,regX:7}},{t:this.instance_7,p:{scaleX:1.429,scaleY:0.734,rotation:-15,x:160.4,y:-5.9,regX:7.2}},{t:this.instance_6,p:{regX:7.3,regY:8.3,scaleX:0.369,scaleY:0.18,x:249.8,y:12.3}},{t:this.instance_5,p:{regX:7.2,scaleX:0.986,scaleY:0.513,x:182.7,y:12.7,regY:8.5,rotation:15}},{t:this.instance_4,p:{scaleX:0.552,scaleY:0.234,x:212,y:2.4,regX:7.2,regY:8.6}},{t:this.instance_3,p:{scaleX:0.643,scaleY:0.291,x:86.4,y:8,regY:8.5,regX:7.1,rotation:-30}},{t:this.instance_2,p:{regX:7.2,scaleX:0.333,scaleY:0.186,x:130.4,y:11.9,regY:8.1}},{t:this.instance_1,p:{regX:7.2,regY:8.4,scaleX:0.918,scaleY:0.54,x:291.4,y:11.9,rotation:0}},{t:this.instance,p:{regY:7.9,scaleX:0.287,scaleY:0.096,x:215.5,y:-10.5,regX:7}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.564,scaleY:0.374,rotation:30,x:117.6,y:-11.4,regY:8.6,regX:7}},{t:this.instance_7,p:{scaleX:1.429,scaleY:0.734,rotation:-15,x:170.8,y:-12.3,regX:7.2}},{t:this.instance_6,p:{regX:7.3,regY:8.3,scaleX:0.369,scaleY:0.18,x:260.2,y:5.9}},{t:this.instance_5,p:{regX:7.2,scaleX:0.986,scaleY:0.513,x:193.1,y:6.3,regY:8.5,rotation:15}},{t:this.instance_4,p:{scaleX:0.552,scaleY:0.234,x:222.4,y:-4,regX:7.2,regY:8.6}},{t:this.instance_3,p:{scaleX:0.643,scaleY:0.291,x:96.8,y:1.6,regY:8.5,regX:7.1,rotation:-30}},{t:this.instance_2,p:{regX:7.2,scaleX:0.333,scaleY:0.186,x:140.8,y:5.5,regY:8.1}},{t:this.instance_1,p:{regX:7.2,regY:8.4,scaleX:0.918,scaleY:0.54,x:301.8,y:5.5,rotation:0}},{t:this.instance,p:{regY:7.9,scaleX:0.287,scaleY:0.096,x:225.9,y:-16.9,regX:7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55,-25.3,292.2,30.3);


(lib.star_Explode = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jump
	this.instance = new lib.star("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-49.2,-7,0.779,0.779,0,0,0,7.3,8.3);
	this.instance.alpha = 0.898;

	this.instance_1 = new lib.star("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.4,-21.9,0.779,0.779,0,0,0,7.2,8.4);
	this.instance_1.alpha = 0.898;

	this.instance_2 = new lib.star("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27.4,-16.3,0.779,0.779,0,0,0,7.3,8.3);
	this.instance_2.alpha = 0.898;

	this.instance_3 = new lib.star("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(61,-14.5,0.779,0.779,0,0,0,7.2,8.3);
	this.instance_3.alpha = 0.898;

	this.instance_4 = new lib.star("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(26.1,-11.9,0.779,0.779,0,0,0,7.2,8.4);
	this.instance_4.alpha = 0.898;

	this.instance_5 = new lib.star("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.1,-10.7,0.779,0.779,0,0,0,7.2,8.3);
	this.instance_5.alpha = 0.898;

	this.instance_6 = new lib.star("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(12.1,-16.6,0.779,0.779,0,0,0,7.2,8.4);
	this.instance_6.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{y:-16.6,alpha:0.898,scaleX:0.779,scaleY:0.779,x:12.1,rotation:0}},{t:this.instance_5,p:{x:-5.1,y:-10.7,alpha:0.898,regY:8.3,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_4,p:{x:26.1,y:-11.9,alpha:0.898,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_3,p:{x:61,y:-14.5,alpha:0.898,regY:8.3,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_2,p:{x:-27.4,y:-16.3,alpha:0.898,regX:7.3,regY:8.3,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_1,p:{x:88.4,y:-21.9,alpha:0.898,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance,p:{regX:7.3,regY:8.3,x:-49.2,y:-7,alpha:0.898,scaleX:0.779,scaleY:0.779,rotation:0}}]}).to({state:[{t:this.instance_6,p:{y:-30.6,alpha:0.852,scaleX:0.779,scaleY:0.779,x:12.1,rotation:0}},{t:this.instance_5,p:{x:-9.1,y:-30.5,alpha:0.852,regY:8.3,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_4,p:{x:35.7,y:-27.1,alpha:0.852,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_3,p:{x:67.2,y:-30.5,alpha:0.852,regY:8.3,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_2,p:{x:-38.2,y:-32.4,alpha:0.852,regX:7.3,regY:8.3,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_1,p:{x:98.8,y:-32.3,alpha:0.852,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-66.5,y:-17.3,alpha:0.852,scaleX:0.779,scaleY:0.779,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{y:-42.4,alpha:0.801,scaleX:1,scaleY:1,x:10.5,rotation:0}},{t:this.instance_5,p:{x:-19.6,y:-32.8,alpha:0.801,regY:8.4,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_4,p:{x:30.8,y:-36,alpha:0.801,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_3,p:{x:76,y:-42.4,alpha:0.801,regY:8.4,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_2,p:{x:-55.6,y:-31.2,alpha:0.801,regX:7.2,regY:8.4,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_1,p:{x:114.8,y:-46,alpha:0.801,scaleX:1,scaleY:1,rotation:0}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-86.8,y:-19.2,alpha:0.801,scaleX:1,scaleY:1,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{y:-88.8,alpha:0.801,scaleX:1,scaleY:1,x:14.4,rotation:0}},{t:this.instance_5,p:{x:-34.4,y:-88.8,alpha:0.801,regY:8.4,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_4,p:{x:59.5,y:-95.2,alpha:0.801,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_3,p:{x:98.4,y:-95.2,alpha:0.801,regY:8.4,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_2,p:{x:-68.8,y:-68.4,alpha:0.801,regX:7.2,regY:8.4,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_1,p:{x:138.4,y:-75.2,alpha:0.801,scaleX:1,scaleY:1,rotation:0}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-99.2,y:-45.2,alpha:0.801,scaleX:1,scaleY:1,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{y:-145.6,alpha:0.648,scaleX:1.814,scaleY:1.762,x:85.5,rotation:15}},{t:this.instance_5,p:{x:-52.4,y:-132,alpha:0.648,regY:8.4,scaleX:2.324,scaleY:2.143,rotation:15}},{t:this.instance_4,p:{x:31.6,y:-113.6,alpha:0.648,scaleX:2.545,scaleY:2.048,rotation:-15}},{t:this.instance_3,p:{x:147.2,y:-130.7,alpha:0.648,regY:8.4,scaleX:2.545,scaleY:2.238,rotation:15}},{t:this.instance_2,p:{x:-94.4,y:-104.4,alpha:0.648,regX:7.2,regY:8.4,scaleX:2.655,scaleY:1.952,rotation:15}},{t:this.instance_1,p:{x:170.8,y:-68.2,alpha:0.648,scaleX:2.833,scaleY:2.667,rotation:30}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-122.8,y:-54,alpha:0.648,scaleX:2.103,scaleY:2.048,rotation:-15}}]},1).to({state:[{t:this.instance_6,p:{y:-178.8,alpha:0.398,scaleX:1.814,scaleY:1.762,x:100.7,rotation:15}},{t:this.instance_5,p:{x:-49.2,y:-163.1,alpha:0.398,regY:8.4,scaleX:2.324,scaleY:2.143,rotation:15}},{t:this.instance_4,p:{x:25.2,y:-158.4,alpha:0.398,scaleX:2.545,scaleY:2.048,rotation:-15}},{t:this.instance_3,p:{x:166.4,y:-173.6,alpha:0.398,regY:8.4,scaleX:2.545,scaleY:2.238,rotation:15}},{t:this.instance_2,p:{x:-113.6,y:-140.3,alpha:0.398,regX:7.2,regY:8.4,scaleX:2.655,scaleY:1.952,rotation:15}},{t:this.instance_1,p:{x:201.2,y:-83.7,alpha:0.398,scaleX:2.833,scaleY:2.667,rotation:30}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-147.9,y:-74.6,alpha:0.398,scaleX:2.103,scaleY:2.048,rotation:-15}}]},1).to({state:[{t:this.instance_6,p:{y:-201.7,alpha:0.25,scaleX:1.814,scaleY:1.762,x:120.8,rotation:60}},{t:this.instance_5,p:{x:-54.8,y:-197.6,alpha:0.25,regY:8.4,scaleX:2.324,scaleY:2.143,rotation:15}},{t:this.instance_4,p:{x:36.8,y:-211.8,alpha:0.25,scaleX:2.545,scaleY:2.048,rotation:-15}},{t:this.instance_3,p:{x:203.4,y:-194.2,alpha:0.25,regY:8.4,scaleX:1.69,scaleY:1.845,rotation:60}},{t:this.instance_2,p:{x:-132.1,y:-169.6,alpha:0.25,regX:7.2,regY:8.4,scaleX:2.655,scaleY:1.952,rotation:15}},{t:this.instance_1,p:{x:238.9,y:-97.9,alpha:0.25,scaleX:2.833,scaleY:2.667,rotation:60}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-174,y:-95.9,alpha:0.25,scaleX:2.103,scaleY:2.048,rotation:-15}}]},1).to({state:[{t:this.instance_6,p:{y:-260.5,alpha:0.148,scaleX:1.814,scaleY:1.762,x:106.9,rotation:60}},{t:this.instance_5,p:{x:-74,y:-255.7,alpha:0.148,regY:8.4,scaleX:2.324,scaleY:2.143,rotation:15}},{t:this.instance_4,p:{x:55.2,y:-253.1,alpha:0.148,scaleX:2.545,scaleY:2.048,rotation:-15}},{t:this.instance_3,p:{x:231.4,y:-259.2,alpha:0.148,regY:8.4,scaleX:1.69,scaleY:1.845,rotation:60}},{t:this.instance_2,p:{x:-164.1,y:-203.2,alpha:0.148,regX:7.2,regY:8.4,scaleX:2.655,scaleY:1.952,rotation:15}},{t:this.instance_1,p:{x:268.5,y:-160.3,alpha:0.148,scaleX:2.833,scaleY:2.667,rotation:60}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-206,y:-117.5,alpha:0.148,scaleX:2.103,scaleY:2.048,rotation:-15}}]},1).to({state:[{t:this.instance_6,p:{y:-284.5,alpha:0.051,scaleX:1.814,scaleY:1.762,x:106.9,rotation:60}},{t:this.instance_5,p:{x:-74,y:-279.7,alpha:0.051,regY:8.4,scaleX:2.324,scaleY:2.143,rotation:15}},{t:this.instance_4,p:{x:55.2,y:-277.1,alpha:0.051,scaleX:2.545,scaleY:2.048,rotation:-15}},{t:this.instance_3,p:{x:231.4,y:-283.2,alpha:0.051,regY:8.4,scaleX:1.69,scaleY:1.845,rotation:60}},{t:this.instance_2,p:{x:-194.5,y:-244.9,alpha:0.051,regX:7.2,regY:8.4,scaleX:2.655,scaleY:1.952,rotation:15}},{t:this.instance_1,p:{x:297.3,y:-185.2,alpha:0.051,scaleX:2.833,scaleY:2.667,rotation:60}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-236.4,y:-141.5,alpha:0.051,scaleX:2.103,scaleY:2.048,rotation:-15}}]},1).to({state:[]},1).wait(6));

	// zoom
	this.instance_7 = new lib.star("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-71.6,20.8,1,1,0,0,0,7.2,8.4);

	this.instance_8 = new lib.star("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(105.2,1.6,1,1,0,0,0,7.2,8.4);

	this.instance_9 = new lib.star("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-43.6,8.8,1,1,0,0,0,7.2,8.4);

	this.instance_10 = new lib.star("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(70,11.2,1,1,0,0,0,7.2,8.4);

	this.instance_11 = new lib.star("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(25.2,14.4,1,1,0,0,0,7.2,8.4);

	this.instance_12 = new lib.star("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-14.8,16,1,1,0,0,0,7.2,8.4);

	this.instance_13 = new lib.star("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(7.2,8.4,1,1,0,0,0,7.2,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13,p:{scaleX:1,scaleY:1,x:7.2,y:8.4,alpha:1,regY:8.4}},{t:this.instance_12,p:{scaleX:1,scaleY:1,x:-14.8,y:16,alpha:1,rotation:0}},{t:this.instance_11,p:{scaleX:1,scaleY:1,x:25.2,y:14.4,alpha:1,regX:7.2}},{t:this.instance_10,p:{scaleX:1,scaleY:1,x:70,y:11.2,alpha:1,regY:8.4,regX:7.2}},{t:this.instance_9,p:{scaleX:1,scaleY:1,x:-43.6,y:8.8,alpha:1,regY:8.4}},{t:this.instance_8,p:{scaleX:1,scaleY:1,x:105.2,y:1.6,alpha:1,rotation:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,x:-71.6,y:20.8,alpha:1,rotation:0}}]}).to({state:[{t:this.instance_13,p:{scaleX:1.29,scaleY:1.29,x:10,y:-18,alpha:0.852,regY:8.4}},{t:this.instance_12,p:{scaleX:1.29,scaleY:1.29,x:-18.7,y:36.6,alpha:0.852,rotation:0}},{t:this.instance_11,p:{scaleX:1.29,scaleY:1.29,x:34,y:32.4,alpha:0.852,regX:7.2}},{t:this.instance_10,p:{scaleX:1.29,scaleY:1.29,x:76.5,y:-11.4,alpha:0.852,regY:8.4,regX:7.2}},{t:this.instance_9,p:{scaleX:1.29,scaleY:1.29,x:-49.9,y:-11.4,alpha:0.852,regY:8.4}},{t:this.instance_8,p:{scaleX:1.29,scaleY:1.29,x:123.1,y:10.7,alpha:0.852,rotation:0}},{t:this.instance_7,p:{scaleX:1.29,scaleY:1.29,x:-90.3,y:13.6,alpha:0.852,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:1.81,scaleY:1.81,x:20,y:-37.4,alpha:0.852,regY:8.3}},{t:this.instance_12,p:{scaleX:1.81,scaleY:1.81,x:-39.3,y:40.7,alpha:0.852,rotation:0}},{t:this.instance_11,p:{scaleX:1.81,scaleY:1.81,x:51.5,y:33.2,alpha:0.852,regX:7.3}},{t:this.instance_10,p:{scaleX:1.81,scaleY:1.81,x:91.9,y:-23.4,alpha:0.852,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:1.81,scaleY:1.81,x:-56.9,y:-37.4,alpha:0.852,regY:8.3}},{t:this.instance_8,p:{scaleX:1.81,scaleY:1.81,x:136.1,y:17.2,alpha:0.852,rotation:0}},{t:this.instance_7,p:{scaleX:1.81,scaleY:1.81,x:-110.6,y:-3.1,alpha:0.852,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:3.565,scaleY:3.565,x:20,y:-52.6,alpha:0.75,regY:8.3}},{t:this.instance_12,p:{scaleX:3.565,scaleY:3.565,x:-51.1,y:48,alpha:0.75,rotation:0}},{t:this.instance_11,p:{scaleX:3.565,scaleY:3.565,x:44,y:48,alpha:0.75,regX:7.3}},{t:this.instance_10,p:{scaleX:3.565,scaleY:3.565,x:102.7,y:-42.6,alpha:0.75,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:3.565,scaleY:3.565,x:-62.4,y:-59.8,alpha:0.75,regY:8.3}},{t:this.instance_8,p:{scaleX:3.565,scaleY:3.565,x:148.4,y:17.6,alpha:0.75,rotation:0}},{t:this.instance_7,p:{scaleX:3.565,scaleY:3.565,x:-118.2,y:-21.9,alpha:0.75,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:4.523,scaleY:4.523,x:19.7,y:-56.7,alpha:0.602,regY:8.4}},{t:this.instance_12,p:{scaleX:4.523,scaleY:4.523,x:-65.6,y:67,alpha:0.602,rotation:0}},{t:this.instance_11,p:{scaleX:4.523,scaleY:4.523,x:64.9,y:67,alpha:0.602,regX:7.3}},{t:this.instance_10,p:{scaleX:4.523,scaleY:4.523,x:105.9,y:-81.3,alpha:0.602,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:4.523,scaleY:4.523,x:-72.6,y:-95,alpha:0.602,regY:8.4}},{t:this.instance_8,p:{scaleX:4.523,scaleY:4.523,x:181.2,y:12.3,alpha:0.602,rotation:0}},{t:this.instance_7,p:{scaleX:4.523,scaleY:4.523,x:-153,y:-23,alpha:0.602,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:5.346,scaleY:5.346,x:15.1,y:-54.5,alpha:0.449,regY:8.4}},{t:this.instance_12,p:{scaleX:5.346,scaleY:5.346,x:-72.2,y:68.8,alpha:0.449,rotation:0}},{t:this.instance_11,p:{scaleX:5.346,scaleY:5.346,x:78.4,y:72.8,alpha:0.449,regX:7.3}},{t:this.instance_10,p:{scaleX:5.346,scaleY:5.346,x:112.9,y:-94.1,alpha:0.449,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:5.346,scaleY:5.346,x:-80.4,y:-105,alpha:0.449,regY:8.4}},{t:this.instance_8,p:{scaleX:5.346,scaleY:5.346,x:200.1,y:12.3,alpha:0.449,rotation:0}},{t:this.instance_7,p:{scaleX:5.346,scaleY:5.346,x:-171.9,y:-21,alpha:0.449,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:5.346,scaleY:5.346,x:10.6,y:-49.5,alpha:0.449,regY:8.4}},{t:this.instance_12,p:{scaleX:5.346,scaleY:5.346,x:-79.4,y:73.8,alpha:0.449,rotation:0}},{t:this.instance_11,p:{scaleX:5.346,scaleY:5.346,x:88.4,y:77.8,alpha:0.449,regX:7.3}},{t:this.instance_10,p:{scaleX:5.346,scaleY:5.346,x:110.3,y:-112.4,alpha:0.449,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:5.346,scaleY:5.346,x:-79.4,y:-116,alpha:0.449,regY:8.4}},{t:this.instance_8,p:{scaleX:5.346,scaleY:5.346,x:214.1,y:2.8,alpha:0.449,rotation:0}},{t:this.instance_7,p:{scaleX:5.346,scaleY:5.346,x:-185.9,y:-22,alpha:0.449,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:5.346,scaleY:5.346,x:8.9,y:-47.5,alpha:0.449,regY:8.4}},{t:this.instance_12,p:{scaleX:5.346,scaleY:5.346,x:-87.4,y:80.8,alpha:0.449,rotation:0}},{t:this.instance_11,p:{scaleX:5.346,scaleY:5.346,x:96.6,y:80.8,alpha:0.449,regX:7.3}},{t:this.instance_10,p:{scaleX:5.346,scaleY:5.346,x:109.3,y:-127.1,alpha:0.449,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:5.346,scaleY:5.346,x:-82.4,y:-122,alpha:0.449,regY:8.4}},{t:this.instance_8,p:{scaleX:5.346,scaleY:5.346,x:222.1,y:2.8,alpha:0.449,rotation:0}},{t:this.instance_7,p:{scaleX:5.346,scaleY:5.346,x:-194.9,y:-15,alpha:0.449,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:5.346,scaleY:5.346,x:8.1,y:-43.5,alpha:0.449,regY:8.4}},{t:this.instance_12,p:{scaleX:5.346,scaleY:5.346,x:-93.7,y:85.8,alpha:0.449,rotation:0}},{t:this.instance_11,p:{scaleX:5.346,scaleY:5.346,x:108.8,y:91.8,alpha:0.449,regX:7.3}},{t:this.instance_10,p:{scaleX:5.346,scaleY:5.346,x:114.3,y:-133.9,alpha:0.449,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:5.346,scaleY:5.346,x:-85.4,y:-138,alpha:0.449,regY:8.4}},{t:this.instance_8,p:{scaleX:5.346,scaleY:5.346,x:232.1,y:-4,alpha:0.449,rotation:0}},{t:this.instance_7,p:{scaleX:5.346,scaleY:5.346,x:-199.9,y:-8,alpha:0.449,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:5.346,scaleY:5.346,x:8.9,y:-36.5,alpha:0.449,regY:8.4}},{t:this.instance_12,p:{scaleX:5.346,scaleY:5.346,x:-103.4,y:85.8,alpha:0.449,rotation:0}},{t:this.instance_11,p:{scaleX:5.346,scaleY:5.346,x:112.8,y:95.8,alpha:0.449,regX:7.3}},{t:this.instance_10,p:{scaleX:5.346,scaleY:5.346,x:112.3,y:-148.6,alpha:0.449,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:5.346,scaleY:5.346,x:-86.4,y:-148,alpha:0.449,regY:8.4}},{t:this.instance_8,p:{scaleX:5.346,scaleY:5.346,x:237.1,y:-4,alpha:0.449,rotation:0}},{t:this.instance_7,p:{scaleX:5.346,scaleY:5.346,x:-206.9,y:-4,alpha:0.449,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:5.346,scaleY:5.346,x:11.1,y:-40.5,alpha:0.449,regY:8.4}},{t:this.instance_12,p:{scaleX:5.346,scaleY:5.346,x:-116.4,y:98.8,alpha:0.449,rotation:0}},{t:this.instance_11,p:{scaleX:5.346,scaleY:5.346,x:123.1,y:98.8,alpha:0.449,regX:7.3}},{t:this.instance_10,p:{scaleX:5.346,scaleY:5.346,x:118.3,y:-167.9,alpha:0.449,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:5.346,scaleY:5.346,x:-92.4,y:-173,alpha:0.449,regY:8.4}},{t:this.instance_8,p:{scaleX:5.346,scaleY:5.346,x:256.1,y:-14.7,alpha:0.449,rotation:0}},{t:this.instance_7,p:{scaleX:5.346,scaleY:5.346,x:-217.9,y:-1,alpha:0.449,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:8.944,scaleY:8.85,x:9.7,y:-37.3,alpha:0.301,regY:8.4}},{t:this.instance_12,p:{scaleX:10.74,scaleY:9.237,x:-120,y:122.9,alpha:0.301,rotation:-15}},{t:this.instance_11,p:{scaleX:9.904,scaleY:9.716,x:139.6,y:118.6,alpha:0.301,regX:7.3}},{t:this.instance_10,p:{scaleX:9.617,scaleY:8.946,x:136.5,y:-194.7,alpha:0.301,regY:8.4,regX:7.2}},{t:this.instance_9,p:{scaleX:9.365,scaleY:10.235,x:-102.2,y:-189.3,alpha:0.301,regY:8.3}},{t:this.instance_8,p:{scaleX:9.729,scaleY:9.729,x:285.5,y:-22.5,alpha:0.301,rotation:15}},{t:this.instance_7,p:{scaleX:8.596,scaleY:8.194,x:-243.9,y:11.4,alpha:0.301,rotation:23.8}}]},1).to({state:[{t:this.instance_13,p:{scaleX:14.424,scaleY:12.853,x:11.3,y:-46.3,alpha:0.148,regY:8.4}},{t:this.instance_12,p:{scaleX:12.891,scaleY:11.873,x:-151.6,y:148.2,alpha:0.148,rotation:0}},{t:this.instance_11,p:{scaleX:15.094,scaleY:14.542,x:168.8,y:160.2,alpha:0.148,regX:7.3}},{t:this.instance_10,p:{scaleX:13.556,scaleY:11.526,x:153.5,y:-227.6,alpha:0.148,regY:8.3,regX:7.3}},{t:this.instance_9,p:{scaleX:15.461,scaleY:14.542,x:-111.9,y:-235.7,alpha:0.148,regY:8.4}},{t:this.instance_8,p:{scaleX:15.853,scaleY:12.265,x:312.9,y:-26.6,alpha:0.148,rotation:0}},{t:this.instance_7,p:{scaleX:14.776,scaleY:14.419,x:-272,y:17.6,alpha:0.148,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:14.424,scaleY:12.853,x:9.4,y:-48.5,alpha:0.148,regY:8.4}},{t:this.instance_12,p:{scaleX:12.891,scaleY:11.873,x:-168.6,y:169.2,alpha:0.148,rotation:0}},{t:this.instance_11,p:{scaleX:15.094,scaleY:14.542,x:189.8,y:164.1,alpha:0.148,regX:7.3}},{t:this.instance_10,p:{scaleX:13.556,scaleY:11.526,x:167.5,y:-262.3,alpha:0.148,regY:8.3,regX:7.3}},{t:this.instance_9,p:{scaleX:15.461,scaleY:14.542,x:-116.9,y:-273.7,alpha:0.148,regY:8.4}},{t:this.instance_8,p:{scaleX:15.853,scaleY:12.265,x:340.6,y:-23.6,alpha:0.148,rotation:0}},{t:this.instance_7,p:{scaleX:14.776,scaleY:14.419,x:-313,y:-11.4,alpha:0.148,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:17.964,scaleY:16.006,x:4.1,y:-50,alpha:0.148,regY:8.4}},{t:this.instance_12,p:{scaleX:16.054,scaleY:14.787,x:-184.4,y:208.6,alpha:0.148,rotation:0}},{t:this.instance_11,p:{scaleX:18.797,scaleY:18.11,x:222.7,y:220.2,alpha:0.148,regX:7.3}},{t:this.instance_10,p:{scaleX:16.882,scaleY:14.354,x:172.9,y:-316.5,alpha:0.148,regY:8.3,regX:7.3}},{t:this.instance_9,p:{scaleX:19.255,scaleY:18.11,x:-124.9,y:-336.6,alpha:0.148,regY:8.4}},{t:this.instance_8,p:{scaleX:19.743,scaleY:15.275,x:406.9,y:-20.9,alpha:0.148,rotation:0}},{t:this.instance_7,p:{scaleX:18.402,scaleY:17.958,x:-373.8,y:20.6,alpha:0.148,rotation:0}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.8,-29.5,193.3,59.7);


(lib.dudeforquizzesride = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dudeforquizzesridestill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dudeforquizzesride, new cjs.Rectangle(-136.5,-135.9,273.2,271.8), null);


(lib.dudeforquizzes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dude
	this.instance = new lib.dudeforquizzesride();
	this.instance.parent = this;
	this.instance.setTransform(5.7,-3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dudeforquizzes, new cjs.Rectangle(-130.8,-139.2,273.2,271.8), null);


(lib.COOLEXPLODES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		/* 
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 1
	this.instance = new lib.Symbol16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(326.6,181.8,0.914,1.121,0,10.1,-4.7);
	this.instance.alpha = 0.949;

	this.instance_1 = new lib.Symbol15("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(244.7,184,1.175,1.153,0,-6.3,-5.9);
	this.instance_1.alpha = 0.949;

	this.instance_2 = new lib.Symbol15("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(148.8,184.5,1.143,1.152,0,15.1,14.5);
	this.instance_2.alpha = 0.949;

	this.instance_3 = new lib.Symbol14("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(58.7,186.2,1.23,1.081,0,-12.5,-16.8);
	this.instance_3.alpha = 0.949;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{scaleX:1.23,scaleY:1.081,skewX:-12.5,skewY:-16.8,x:58.7,y:186.2,alpha:0.949}},{t:this.instance_2,p:{scaleX:1.143,scaleY:1.152,skewX:15.1,skewY:14.5,x:148.8,y:184.5,alpha:0.949,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:1.175,scaleY:1.153,skewX:-6.3,skewY:-5.9,x:244.7,y:184,alpha:0.949,regX:0,regY:0}},{t:this.instance,p:{scaleX:0.914,scaleY:1.121,skewX:10.1,skewY:-4.7,x:326.6,y:181.8,alpha:0.949}}]}).to({state:[{t:this.instance_3,p:{scaleX:1.631,scaleY:0.676,skewX:-59.8,skewY:-43.4,x:41.4,y:177,alpha:0.852}},{t:this.instance_2,p:{scaleX:1.482,scaleY:1.545,skewX:46.1,skewY:44.4,x:126,y:173.2,alpha:0.852,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:1.502,scaleY:1.549,skewX:-16.8,skewY:-15.1,x:274.4,y:169.3,alpha:0.852,regX:0,regY:0}},{t:this.instance,p:{scaleX:0.205,scaleY:1.614,skewX:46.5,skewY:-48.9,x:348.5,y:166.9,alpha:0.852}}]},1).to({state:[{t:this.instance_3,p:{scaleX:1.62,scaleY:1.201,skewX:163.9,skewY:-54.7,x:13.6,y:149.8,alpha:0.75}},{t:this.instance_2,p:{scaleX:1.875,scaleY:2.05,skewX:76.2,skewY:76,x:96.4,y:155.3,alpha:0.75,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:1.669,scaleY:2.084,skewX:-24.8,skewY:-17.9,x:308.5,y:146.7,alpha:0.75,regX:0,regY:0}},{t:this.instance,p:{scaleX:1.211,scaleY:2.006,skewX:67.2,skewY:-178.4,x:373.9,y:151.2,alpha:0.75}}]},1).to({state:[{t:this.instance_3,p:{scaleX:1.632,scaleY:3.373,skewX:98.2,skewY:-18.3,x:-38.3,y:153.6,alpha:0.602}},{t:this.instance_2,p:{scaleX:2.838,scaleY:3.03,skewX:114.2,skewY:125.3,x:40.8,y:148,alpha:0.602,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:1.487,scaleY:3.1,skewX:-32,skewY:7.4,x:361.9,y:152.9,alpha:0.602,regX:0,regY:0}},{t:this.instance,p:{scaleX:3.063,scaleY:1.326,skewX:146.8,skewY:157.8,x:415.5,y:129.3,alpha:0.602}}]},1).to({state:[{t:this.instance_3,p:{scaleX:2.015,scaleY:3.443,skewX:73.6,skewY:-8,x:-49.6,y:158.1,alpha:0.551}},{t:this.instance_2,p:{scaleX:3.366,scaleY:3.389,skewX:124.1,skewY:141.1,x:13.3,y:141,alpha:0.551,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:1.514,scaleY:3.297,skewX:-34.5,skewY:29.2,x:371.4,y:161.5,alpha:0.551,regX:0,regY:0}},{t:this.instance,p:{scaleX:3.12,scaleY:1.916,skewX:153.5,skewY:150.7,x:416.1,y:127.8,alpha:0.551}}]},1).to({state:[{t:this.instance_3,p:{scaleX:3.433,scaleY:3.544,skewX:4.8,skewY:-1.3,x:-87.6,y:153.5,alpha:0.449}},{t:this.instance_2,p:{scaleX:5.023,scaleY:4.163,skewX:137.8,skewY:170,x:-56.5,y:114.8,alpha:0.449,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:2.41,scaleY:3.009,skewX:-45.2,skewY:67.8,x:382.6,y:184.6,alpha:0.449,regX:0,regY:0}},{t:this.instance,p:{scaleX:2.481,scaleY:3.14,skewX:127.7,skewY:126.3,x:426.8,y:160.3,alpha:0.449}}]},1).to({state:[{t:this.instance_3,p:{scaleX:4.731,scaleY:4.03,skewX:-55,skewY:-16.3,x:-127.3,y:182.1,alpha:0.352}},{t:this.instance_2,p:{scaleX:8.534,scaleY:5.802,skewX:137,skewY:-166.3,x:-184.2,y:53.7,alpha:0.352,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:3.956,scaleY:2.168,skewX:-71.9,skewY:80.8,x:395.3,y:201.7,alpha:0.352,regX:0,regY:0}},{t:this.instance,p:{scaleX:3.243,scaleY:5.598,skewX:95.3,skewY:45.2,x:527.7,y:186.7,alpha:0.352}}]},1).to({state:[{t:this.instance_3,p:{scaleX:4.683,scaleY:3.289,skewX:-81.1,skewY:-28.1,x:-117.7,y:198.7,alpha:0.301}},{t:this.instance_2,p:{scaleX:12.988,scaleY:9.113,skewX:129,skewY:-157.5,x:-349.5,y:-29.2,alpha:0.301,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:4.612,scaleY:1.901,skewX:-90.1,skewY:83.1,x:405.3,y:197.9,alpha:0.301,regX:0,regY:0}},{t:this.instance,p:{scaleX:4.886,scaleY:6.658,skewX:77.3,skewY:16.3,x:587.5,y:164.8,alpha:0.301}}]},1).to({state:[{t:this.instance_3,p:{scaleX:4.396,scaleY:2.05,skewX:-126.6,skewY:-38,x:-110.9,y:194,alpha:0.25}},{t:this.instance_2,p:{scaleX:35.465,scaleY:31.538,skewX:119.7,skewY:-152.8,x:-1221.9,y:-470.4,alpha:0.25,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:5.084,scaleY:1.748,skewX:-106.8,skewY:85.2,x:418.6,y:182.3,alpha:0.25,regX:0,regY:0}},{t:this.instance,p:{scaleX:5.363,scaleY:5.893,skewX:51.3,skewY:3.6,x:584.7,y:150.4,alpha:0.25}}]},1).to({state:[{t:this.instance_3,p:{scaleX:4.338,scaleY:2.838,skewX:148.2,skewY:-40.2,x:-149.5,y:168.7,alpha:0.199}},{t:this.instance_2,p:{scaleX:0,scaleY:0,skewX:0,skewY:0,x:53687091,y:53687091,alpha:0.199,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:5.394,scaleY:1.546,skewX:-122.9,skewY:89.2,x:439.7,y:156.1,alpha:0.199,regX:0,regY:0}},{t:this.instance,p:{scaleX:6.193,scaleY:5.232,skewX:1.5,skewY:3.3,x:603.1,y:186.2,alpha:0.199}}]},1).to({state:[{t:this.instance_3,p:{scaleX:5.41,scaleY:7.156,skewX:111.7,skewY:-31.4,x:-285.5,y:145.8,alpha:0.148}},{t:this.instance_2,p:{scaleX:0,scaleY:0,skewX:0,skewY:0,x:53687091,y:53687091,alpha:0.148,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:5.699,scaleY:1.154,skewX:-170.6,skewY:101.7,x:495.5,y:124,alpha:0.148,regX:0,regY:0}},{t:this.instance,p:{scaleX:10.472,scaleY:9.294,skewX:-50.3,skewY:3.4,x:772.9,y:237.4,alpha:0.148}}]},1).to({state:[{t:this.instance_3,p:{scaleX:7.235,scaleY:17.345,skewX:83.6,skewY:-36.3,x:-662.5,y:256.4,alpha:0.051}},{t:this.instance_2,p:{scaleX:0,scaleY:0,skewX:0,skewY:0,x:-2147483.6,y:-2147483.6,alpha:0.051,regX:-115200,regY:115200}},{t:this.instance_1,p:{scaleX:0,scaleY:0,skewX:0,skewY:0,x:-53687091.1,y:-53687091.1,alpha:0.051,regX:0,regY:0}},{t:this.instance,p:{scaleX:8.205,scaleY:9.221,skewX:-80,skewY:-28.8,x:723.3,y:138.2,alpha:0.051}}]},1).to({state:[{t:this.instance_3,p:{scaleX:3.807,scaleY:13.772,skewX:75.3,skewY:-155.2,x:-517.2,y:283.9,alpha:0}},{t:this.instance_2,p:{scaleX:0,scaleY:0,skewX:0,skewY:0,x:-2147483.6,y:-2147483.6,alpha:0,regX:-115200,regY:115200}},{t:this.instance_1,p:{scaleX:0,scaleY:0,skewX:0,skewY:0,x:-2147483.6,y:-2147483.6,alpha:0,regX:115200,regY:115200}},{t:this.instance,p:{scaleX:5.094,scaleY:6.113,skewX:-82.9,skewY:-61.1,x:582.1,y:147.1,alpha:0}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.5,135.8,347.6,96.4);


(lib.COOL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 1
	this.instance = new lib.Symbol19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(248.8,-5.2,1,1,-63);
	this.instance.alpha = 0.051;

	this.instance_1 = new lib.Symbol18("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(294.2,114.3,1,1,-63);
	this.instance_1.alpha = 0.051;

	this.instance_2 = new lib.Symbol18("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(167.2,154.3,1,1,-63);
	this.instance_2.alpha = 0.051;

	this.instance_3 = new lib.Symbol17("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(41.8,191.2,1,1,-63);
	this.instance_3.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{rotation:-63,x:41.8,y:191.2,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:-63,x:167.2,y:154.3,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:-63,x:294.2,y:114.3,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:-63,x:248.8,y:-5.2,alpha:0.051,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_3,p:{rotation:72,x:248.1,y:-5.2,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:72,x:185.5,y:109.5,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:72,x:124,y:227.7,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:72,x:240.7,y:280,alpha:0.051,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:144,x:359.6,y:143.8,alpha:0.102,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:144,x:234.1,y:123.7,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:144,x:105.6,y:105.8,alpha:0.102,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:144,x:89,y:228.9,alpha:0.051,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:171,x:321.4,y:201.4,alpha:0.148,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:171,x:219.4,y:131.5,alpha:0.148,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:171,x:113.9,y:62.2,alpha:0.148,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:171,x:42.4,y:159.3,alpha:0.148,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:-144,x:258.2,y:295.8,alpha:0.148,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:-144,x:235.6,y:174.3,alpha:0.148,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:-144,x:210,y:50.6,alpha:0.148,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:-144,x:90.7,y:68.7,alpha:0.148,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:72,x:224.4,y:2.5,alpha:0.301,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:72,x:185.5,y:109.5,alpha:0.301,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:72,x:147.8,y:220,alpha:0.301,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:72,x:240.7,y:280,alpha:0.301,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:144,x:344.9,y:123.5,alpha:0.352,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:144,x:234.1,y:123.7,alpha:0.301,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:144,x:120.3,y:126,alpha:0.352,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:144,x:89,y:228.9,alpha:0.301,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:-159,x:296.6,y:248.8,alpha:0.398,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:-159,x:234.3,y:160.7,alpha:0.398,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:-159,x:168.6,y:71.2,alpha:0.398,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:-159,x:67.1,y:96.2,alpha:0.398,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:31.9,x:68.5,y:20.5,alpha:0.449,scaleX:0.997,scaleY:0.997}},{t:this.instance_2,p:{rotation:31.9,x:115.6,y:114.3,alpha:0.449,scaleX:0.997,scaleY:0.997}},{t:this.instance_1,p:{rotation:31.9,x:165.6,y:210.2,alpha:0.449,scaleX:0.997,scaleY:0.997}},{t:this.instance,p:{rotation:31.9,x:267.2,y:209,alpha:0.449,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_3,p:{rotation:-48,x:106.3,y:237.1,alpha:0.551,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:-48,x:199.8,y:200.5,alpha:0.551,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:-48,x:295.7,y:161.2,alpha:0.551,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:-48,x:319.9,y:67.5,alpha:0.551,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:73.2,x:181.1,y:12.9,alpha:0.648,scaleX:0.999,scaleY:0.999}},{t:this.instance_2,p:{rotation:73.2,x:173.6,y:108.7,alpha:0.648,scaleX:0.999,scaleY:0.999}},{t:this.instance_1,p:{rotation:73.2,x:167.1,y:208.2,alpha:0.648,scaleX:0.999,scaleY:0.999}},{t:this.instance,p:{rotation:73.2,x:225,y:280.2,alpha:0.648,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{rotation:-179.2,x:311.6,y:176.2,alpha:0.648,scaleX:0.999,scaleY:0.999}},{t:this.instance_2,p:{rotation:-179.2,x:222.5,y:139.9,alpha:0.648,scaleX:0.999,scaleY:0.999}},{t:this.instance_1,p:{rotation:-179.2,x:129.7,y:103.7,alpha:0.648,scaleX:0.999,scaleY:0.999}},{t:this.instance,p:{rotation:-179.2,x:43.4,y:137.1,alpha:0.648,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{rotation:-144,x:287.6,y:255.3,alpha:0.648,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:-144,x:235.6,y:174.3,alpha:0.648,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:-144,x:180.6,y:91.1,alpha:0.648,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:-144,x:90.7,y:68.7,alpha:0.648,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:67.3,y:126.3,alpha:0.75,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:0,x:157,y:151.3,alpha:0.75,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:0,x:250.4,y:176.3,alpha:0.75,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:0,x:336.2,y:151.5,alpha:0.75,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:72,x:176.8,y:18,alpha:0.801,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:72,x:185.5,y:109.5,alpha:0.801,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:72,x:195.4,y:204.5,alpha:0.801,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:72,x:240.7,y:280,alpha:0.801,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:-48.4,x:108.8,y:245.4,alpha:0.852,scaleX:0.998,scaleY:0.998}},{t:this.instance_2,p:{rotation:-48.4,x:179.3,y:188.4,alpha:0.852,scaleX:0.998,scaleY:0.998}},{t:this.instance_1,p:{rotation:-48.4,x:252.4,y:128.6,alpha:0.852,scaleX:0.998,scaleY:0.998}},{t:this.instance,p:{rotation:-48.4,x:298.1,y:54.6,alpha:0.852,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_3,p:{rotation:93.6,x:219.6,y:23.2,alpha:0.852,scaleX:0.998,scaleY:0.998}},{t:this.instance_2,p:{rotation:93.6,x:199.1,y:111.7,alpha:0.852,scaleX:0.998,scaleY:0.998}},{t:this.instance_1,p:{rotation:93.6,x:178.3,y:203.8,alpha:0.852,scaleX:0.998,scaleY:0.998}},{t:this.instance,p:{rotation:93.6,x:187.7,y:290.2,alpha:0.852,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_3,p:{rotation:-30,x:85.1,y:217.7,alpha:1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:-30,x:162.8,y:172.8,alpha:1,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:-30,x:243.7,y:126.1,alpha:1,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:-30,x:318.1,y:83.4,alpha:1,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:67.3,y:151.3,alpha:1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:0,x:157,y:151.3,alpha:1,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:0,x:250.4,y:151.3,alpha:1,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:0,x:336.2,y:151.5,alpha:1,scaleX:1,scaleY:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-30.7,335,262.6);


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


(lib.EndOfQuiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Flickering
	this.instance = new lib.star_Explode();
	this.instance.parent = this;
	this.instance.setTransform(5.4,83.2,1,1,0,0,0,7.2,8.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(31));

	// SKATE
	this.instance_1 = new lib.dudeforquizzes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(361,-145.7,0.216,0.216);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:0.35,scaleY:0.35,rotation:45,x:1.2,y:-152.4},16).to({scaleX:0.66,scaleY:0.66,rotation:60,x:-8.8,y:-35.8},15).wait(15).to({rotation:-15},2).to({scaleX:1.05,scaleY:1.05,x:-453.6,y:270.7},8).wait(5));

	// TEXT
	this.instance_2 = new lib.COOLEXPLODES();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-194.2,-133.4);

	this.instance_3 = new lib.COOL();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-207.5,-104.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},34).to({state:[]},12).to({state:[{t:this.instance_3}]},11).wait(13));

	// Flickering
	this.instance_4 = new lib.star_Flicker();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.9,58.1,1,1,0,0,0,182,0);

	this.instance_5 = new lib.star_Explode();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-7.4,32.4,1,1,0,0,0,16.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[]},39).to({state:[{t:this.instance_5}]},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.1,33.7,290.3,28.3);


(lib.AllDone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.EndOfQuiz();
	this.instance.parent = this;
	this.instance.setTransform(-18,-47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.AllDone, new cjs.Rectangle(-145.1,-14.1,290.3,28.3), null);


// stage content:
(lib.con_Test1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{finish:4});

	// timeline functions:
	this.frame_0 = function() {
		var scoreVar = 0;
		
		this.btn_goNext.mouseEnabled=false;
		
		this.btn_right1.addEventListener("click", clickRight1.bind(this));
		this.btn_right2.addEventListener("click", clickRight2.bind(this));
		this.btn_right3.addEventListener("click", clickRight3.bind(this));
		this.btn_right4.addEventListener("click", clickRight4.bind(this));
		this.btn_right5.addEventListener("click", clickRight5.bind(this));
		this.btn_right6.addEventListener("click", clickRight6.bind(this));
		this.btn_right7.addEventListener("click", clickRight7.bind(this));
		
		this.btn_wrong1.addEventListener("click", clickWrong1.bind(this));
		this.btn_wrong2.addEventListener("click", clickWrong2.bind(this));
		
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		
		
		function openNext(){
		
		 window.open ("con_finish.html","_self");
		}
		
		function clickRight1(){
		
		    scoreVar += 1;
			this.scoreText.text = scoreVar;
			this.correct_1.visible = true;
			this.btn_right1.mouseEnabled=false;
				if(scoreVar >=7){
				
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
				this.GREAT.visible = true;
				var boop = createjs.Sound.play('boopSound',{loop:0});	
				
			}
			
		}
		
		function clickRight2(){
		
		    scoreVar += 1;
			this.scoreText.text = scoreVar;
			this.correct_2.visible = true;
			this.btn_right2.mouseEnabled=false;
				if(scoreVar >=7){
				
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
				this.GREAT.visible = true;
				var boop = createjs.Sound.play('boopSound',{loop:0});	
			}
			
		}
		
		function clickRight3(){
		
		    scoreVar += 1;
			this.scoreText.text = scoreVar;
			this.correct_3.visible = true;
			this.btn_right3.mouseEnabled=false;
				if(scoreVar >=7){
				
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
				this.GREAT.visible = true;
				var boop = createjs.Sound.play('boopSound',{loop:0});	
			}
			
		}
		
		function clickRight4(){
		
		    scoreVar += 1;
			this.scoreText.text = scoreVar;
			this.correct_4.visible = true;
			this.btn_right4.mouseEnabled=false;
				if(scoreVar >=7){
				
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
				this.GREAT.visible = true;
				var boop = createjs.Sound.play('boopSound',{loop:0});	
			}
			
		}
		
		function clickRight5(){
		
		    scoreVar += 1;
			this.scoreText.text = scoreVar;
			this.correct_5.visible = true;
			this.btn_right5.mouseEnabled=false;
				if(scoreVar >=7){
				
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
				this.GREAT.visible = true;
				var boop = createjs.Sound.play('boopSound',{loop:0});	
			}
			
		}
		
		function clickRight6(){
		
		    scoreVar += 1;
			this.scoreText.text = scoreVar;
			this.correct_6.visible = true;
			this.btn_right6.mouseEnabled=false;
				if(scoreVar >=7){
				
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
				this.GREAT.visible = true;
				var boop = createjs.Sound.play('boopSound',{loop:0});	
			}
			
		}
		
		function clickRight7(){
		
		    scoreVar += 1;
			this.scoreText.text = scoreVar;
			this.correct_7.visible = true;
			this.btn_right7.mouseEnabled=false;
				if(scoreVar >=7){
				
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
				this.GREAT.visible = true;
				var boop = createjs.Sound.play('boopSound',{loop:0});		
				
			}
			
		}
		
		
		
		
		function clickWrong1(){
		
			this.wrong_1.visible = true;
			this.btn_wrong1.mouseEnabled=false;
		}
		
		
		
		function clickWrong2(){
		
			this.wrong_2.visible = true;
			this.btn_wrong2.mouseEnabled=false;
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		
		function openMenu(){
		
		 this.btn_goNext.addEventListener("click", openNext.bind(this));
		}
	}
	this.frame_104 = function() {
		this.gotoAndPlay(5);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1).call(this.frame_4).wait(100).call(this.frame_104).wait(1));

	// Layer 1
	this.GREAT = new lib.STAR();
	this.GREAT.parent = this;
	this.GREAT.setTransform(263.5,219.9,0.492,0.492,0,0,0,168.7,167.8);
	this.GREAT.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.GREAT).wait(105));

	// marks
	this.correct_7 = new lib.check();
	this.correct_7.parent = this;
	this.correct_7.setTransform(406,279.5,1,1,0,0,0,13,22.8);
	this.correct_7.visible = false;

	this.correct_6 = new lib.check();
	this.correct_6.parent = this;
	this.correct_6.setTransform(403.5,197.3,1,1,0,0,0,13,22.8);
	this.correct_6.visible = false;

	this.wrong_2 = new lib.incorrect();
	this.wrong_2.parent = this;
	this.wrong_2.setTransform(431,136.2,1,1,0,0,0,13,22.8);
	this.wrong_2.visible = false;

	this.correct_4 = new lib.check();
	this.correct_4.parent = this;
	this.correct_4.setTransform(234.7,113.6,1,1,0,0,0,13,22.8);
	this.correct_4.visible = false;

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(460,341.7);
	this.btn_goNext.visible = false;
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.correct_3 = new lib.check();
	this.correct_3.parent = this;
	this.correct_3.setTransform(247.7,282.7,1,1,0,0,0,26,26);
	this.correct_3.visible = false;

	this.wrong_1 = new lib.incorrect();
	this.wrong_1.parent = this;
	this.wrong_1.setTransform(95.6,303,1,1,0,0,0,13,22.8);
	this.wrong_1.visible = false;

	this.correct_2 = new lib.check();
	this.correct_2.parent = this;
	this.correct_2.setTransform(81.1,207.6,1,1,0,0,0,26,26);
	this.correct_2.visible = false;

	this.correct_5 = new lib.check();
	this.correct_5.parent = this;
	this.correct_5.setTransform(232.1,197.3,1,1,0,0,0,13,22.8);
	this.correct_5.visible = false;

	this.correct_1 = new lib.check();
	this.correct_1.parent = this;
	this.correct_1.setTransform(81.1,116.8,1,1,0,0,0,26,26);
	this.correct_1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correct_1},{t:this.correct_5},{t:this.correct_2},{t:this.wrong_1},{t:this.correct_3},{t:this.btn_goNext},{t:this.correct_4},{t:this.wrong_2},{t:this.correct_6},{t:this.correct_7}]}).to({state:[]},4).wait(101));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoAzQgSgPAAgbQAAgdAPgVQAQgWAbAAQATAAAMAHQAPAHAAARQAAAMgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAEALABQAJAAAKgEQAOgDAEgHQAEgGAFAAQAEAAADAEQADACAAAFQABANgVAJQgSAIgSAAQgZAAgRgNgAgYgeQgJAKgEAVIAkgQQATgKAKgIQgLgJgRAAQgOAAgKAMg");
	this.shape.setTransform(440.9,140.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBcQgEgEgBgFQgFgOgBgJIgJgyQgGgfgBgTQgLAngMAaQgOAfgEARIABAFQABAGgFADQgFADgEAAQgQAAgBgOIgDgPIgNg5QgIgcgSg2IgBgFQAAgLANAAQAHAAAFAIIAIAZQAHAVAGAeIAMAyQAMgdANgoIAMgkQAKgaAJAAQAIAAADAJQAFAKAEAmQACATAGAaIAKAuQAQgmAYg/IAFgWQAEgOAFgIQAEgGAHAAQAMAAAAAMIgEALIgFANIgHAVIgiBUIgRAoQgEAIgIAAQgGAAgEgDg");
	this.shape_1.setTransform(422.2,138.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBTQgDgDAAgFIAAgOIABgNIgDhEIgagBQgKgBAAgLQAAgFADgDQADgEAFAAIAZACIgBgQIAAgPQAAgFADgDQADgCAFAAQAKAAACARIAAAKIAAAHIAAAHIAQgCQANAAADABQAHADAAAJQAAAFgDADQgDADgFAAIgGAAIgGAAIgQABIADBFIAAAFIAAAGQAAAZgMABQgEAAgEgDg");
	this.shape_2.setTransform(443.1,222.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnAzQgTgPABgbQAAgdAOgVQAQgWAbAAQATAAAMAHQAPAHAAARQAAAMgNAKQgGAEgTAIIgrAVQAGAKAKAFQAJAEAMABQAJAAAKgEQAOgDAEgHQAFgGAEAAQAEAAADAEQADACABAFQAAANgWAJQgRAIgSAAQgZAAgQgNgAgYgeQgJAKgEAVIAkgQQATgKAJgIQgKgJgRAAQgOAAgKAMg");
	this.shape_3.setTransform(431.2,224.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBaQgDgDAAgFQAAgFALgUIAOgbQgUgbgHgPQgFgNgMgSIgUgfQgCgDAAgDQAAgGAEgCQAEgEAEAAQAFAAAFAGIAJAOIARAZQAIAOAFAMQAEAKALAQIAchAIAMgZQAEgIAHAAQAEAAAFADQADADAAAGQAAAFgGALIgIAOIgUAxQgLAcgLAVIgOAaIgGAMQgEAHgGAAQgFAAgEgDg");
	this.shape_4.setTransform(416.4,222);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_5.setTransform(442,307);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_6.setTransform(427.7,304.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_7.setTransform(272.1,224.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAuQgOgPgBgaQAAgWANgTQAOgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgGAMAAAOQgBAQAJAJQAHAHAJAAQALAAAIgIQAJgJABgQQABgogYAAQgPAAgJAPg");
	this.shape_8.setTransform(260.6,224.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzBXQgDgDgBgFIACg/IAAg/IAAgOIAAgOQAAgFADgDQADgEAFAAQADAAADACIAYgDIARgBQANAAAPADQAXAFAAAIQAAAFgEADQgDAEgEAAIgFgBQgMgFgXAAIgPABIgWADIAAAuQAVgFAKAAQAQAAASACQAKABAAAKQAAAFgDADQgEACgEAAIgRgBIgQAAQgHAAgYAFIgBBKQAAAFgDADQgDADgEAAQgGAAgCgDg");
	this.shape_9.setTransform(249,221.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQAMAAAAAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQAAAPgLAAQgLAAABgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgMAAQgKAAAAgMg");
	this.shape_10.setTransform(277.8,141);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKACgRQABgsgaAAIgBAAQgQAAgJAQg");
	this.shape_11.setTransform(265.2,141);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhOBbQgEgDABgFIABgPIAAgPIAAgWIABgWIgBgWIAAgXIgBgWIgBgWQgBgGAFgEQAFgFAFAAQAHAAAJAOQAdAsAXAdQAbAhAiAfIAAgPIgBgOQAAgzgEgeIgDgMQgCgIAAgFQAAgOAMAAQAVAAgBBNIAAAlIgBAnIgBATQgCAMgLAAQgGAAgJgJQgwgtg8hUIgBAbIAAAaIAAAdIABAdQAAAggNAAQgHAAgDgFg");
	this.shape_12.setTransform(249.7,138.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAdAAQAWAAANAVQAJASAAAYQgBAZgNASQgPAVgXAAQgUAAgOgOgAgUgXQgIANABAQQgBARAKAKQAHAHALAAQALAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_13.setTransform(112.3,307);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggBCQgSgHAAgMQAAgFADgDQAEgEAFAAQAEAAAFAGQADADAKABIANACQAJAAAHgDQALgDAAgIQAAgPgWgGIgLgDQgQgDgGgEQgJgGgBgOQAAgYAYgKQAGgDAPgEQAQgFAGgDQAFgCAGAAQAFAAADADQADADAAAGIABAJIACAKQAAAFgDAEQgEADgFAAQgGABgDgFQgBgDgBgJIgbAHQgTAIABALIAGACQAaAFAOAIQASALABAXQAAAUgRAJQgOAJgUgBQgPAAgOgEg");
	this.shape_14.setTransform(100,306.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMBVIABgrIABgqIABgqIAAgqQAAgMALAAQALAAAAAMIAAAqIgBAqIgBA6IgBAbQgCAMgJAAQgLAAAAgMg");
	this.shape_15.setTransform(91.2,303.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AApA9QgDgLgFgaQgMABgTAFIgfAGQgFAPgOAeQgEAGgGAAQgGAAgDgDQgEgDAAgFQAAgGASglQgCgDAAgEQAAgKALgCQAOgYAUghQAbgsAHAAQAJAAADAMIAIAoIARBQIAHATQAEAJgBADQABAFgEAEQgEADgEAAQgMAAgHgbgAgOAIIApgIIgJgtg");
	this.shape_16.setTransform(79,304.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHBSQgDgDAAgEIAAgOIABgNIgDhDIgagCQgKgBAAgLQAAgFADgDQADgEAFAAIAZACIgBgQIAAgPQAAgEADgEQADgCAFAAQAKgBACASIAAAKIAAAHIAAAHIAQgCQANAAADABQAHACAAAKQAAAFgDADQgDADgFAAIgGAAIgGAAIgQACIADBEIAAAFIAAAGQAAAZgMABQgEAAgEgEg");
	this.shape_17.setTransform(272.3,304.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_18.setTransform(260.6,306.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag2BaQgEgFgBgFIAAgiIACgvQADghAAgPIACggQAAgGADgCQAQgFAUAAQAUAAATAOQAWAQAAAYQAAAegYARQASAHAJAJQAJAJgBALQAAAOgPAOQgKAJgMAFQgZAKgpAAQgGAAgEgFgAgjAvIAAAYQAfgBARgIQAJgDAHgHQAIgGAAgDQgBgFgPgHQgLgFgKgDIgMgCIgEAAIgFAAIgNgBIgBAbgAgfhFIAAAUIgCAuIASABQAQgBALgKQANgKAAgRQAAgLgNgJQgMgKgNAAIgSABg");
	this.shape_19.setTransform(247.3,303.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQALAAABAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQgBAPgLAAQgKAAAAgMIAAgIIAAgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgMAAQgJAAgBgMg");
	this.shape_20.setTransform(105.2,231.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag7BJQgYgVAAgiQAAgnAYghQAbglAnAAQAnAAASARQAUASAAAnQAAAogWAgQgZAlgnAAQgiAAgXgTgAgpgnQgSAbAAAeQAAAXARAOQAQANAYAAQAbAAATgcQAQgaAAgfQAAgcgNgLQgMgLgcAAQgbAAgVAcg");
	this.shape_21.setTransform(89.6,229);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgpBQQgRgRAAgZQAAggARgSQARgSAZAAQAOAAAHAEIALAIQACgyACgRQABgKAKAAQALAAAAALQAAARgGA3IgBAiQAAAnAEAUIAAACQAAAFgDADQgDADgEAAQgIAAgEgKQgIAGgJADQgJADgJAAQgYAAgQgQgAgbACQgKAMAAAXQAAAPALALQALALAOAAQAJAAAHgEIANgJIADgEIAAgUIAAgOIAAgOQgEgJgHgEQgIgFgKAAQgTAAgKALg");
	this.shape_22.setTransform(109.8,137.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_23.setTransform(96.8,140.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AApA9QgDgLgFgaQgMABgTAFIgfAGQgFAPgOAeQgEAGgGAAQgFAAgEgDQgEgDAAgFQABgGARglQgCgDAAgEQAAgKALgCQAOgYAUghQAbgsAHAAQAJAAADAMIAIAoIARBQIAHATQAEAJgBADQABAFgEAEQgEADgFAAQgLAAgHgbgAgOAIIApgIIgJgtg");
	this.shape_24.setTransform(81.4,138.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(105));

	// answers
	this.btn_right6 = new lib.btn_mick();
	this.btn_right6.parent = this;
	this.btn_right6.setTransform(431.4,220.8,0.747,1,0,0,0,89.9,29.6);
	new cjs.ButtonHelper(this.btn_right6, 0, 1, 2, false, new lib.btn_mick(), 3);

	this.btn_right7 = new lib.btn_mick();
	this.btn_right7.parent = this;
	this.btn_right7.setTransform(433.6,303,0.747,1,0,0,0,89.5,29.6);
	new cjs.ButtonHelper(this.btn_right7, 0, 1, 2, false, new lib.btn_mick(), 3);

	this.btn_wrong1 = new lib.btn_fall();
	this.btn_wrong1.parent = this;
	this.btn_wrong1.setTransform(95.7,303,0.747,1,0,0,0,89.5,29.6);
	new cjs.ButtonHelper(this.btn_wrong1, 0, 1, 2, false, new lib.btn_fall(), 3);

	this.btn_right4 = new lib.btn_mick();
	this.btn_right4.parent = this;
	this.btn_right4.setTransform(262.3,137.1,0.747,1,0,0,0,89.5,29.6);
	new cjs.ButtonHelper(this.btn_right4, 0, 1, 2, false, new lib.btn_mick(), 3);

	this.btn_right5 = new lib.btn_mick();
	this.btn_right5.parent = this;
	this.btn_right5.setTransform(260,220.8,0.747,1,0,0,0,89.9,29.6);
	new cjs.ButtonHelper(this.btn_right5, 0, 1, 2, false, new lib.btn_mick(), 3);

	this.btn_right3 = new lib.btn_mick();
	this.btn_right3.parent = this;
	this.btn_right3.setTransform(262.3,303,0.747,1,0,0,0,89.5,29.6);
	new cjs.ButtonHelper(this.btn_right3, 0, 1, 2, false, new lib.btn_mick(), 3);

	this.btn_right2 = new lib.btn_mick();
	this.btn_right2.parent = this;
	this.btn_right2.setTransform(95.7,227.9,0.747,1,0,0,0,89.5,29.6);
	new cjs.ButtonHelper(this.btn_right2, 0, 1, 2, false, new lib.btn_mick(), 3);

	this.btn_wrong2 = new lib.btn_fall();
	this.btn_wrong2.parent = this;
	this.btn_wrong2.setTransform(431.1,137.1,0.747,1,0,0,0,89.5,29.6);
	new cjs.ButtonHelper(this.btn_wrong2, 0, 1, 2, false, new lib.btn_fall(), 3);

	this.btn_right1 = new lib.btn_mick();
	this.btn_right1.parent = this;
	this.btn_right1.setTransform(95.7,137.1,0.747,1,0,0,0,89.5,29.6);
	new cjs.ButtonHelper(this.btn_right1, 0, 1, 2, false, new lib.btn_mick(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_right1},{t:this.btn_wrong2},{t:this.btn_right2},{t:this.btn_right3},{t:this.btn_right5},{t:this.btn_right4},{t:this.btn_wrong1},{t:this.btn_right7},{t:this.btn_right6}]}).to({state:[]},4).wait(101));

	// main
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgfBKQgDgCAAgFQAAgDAGgQIAWg0QANggAQgRIACgDIgwgBIgWAAQgKgBAAgJQAAgEADgCQADgDAEAAIAlABIAkABIARAAQALAAAAAGQAAAEgGAIIgJALQgNAOgKAWIgSAlIgHAXQgFAOgFAIQgCAEgGAAQgDAAgDgDg");
	this.shape_25.setTransform(130.5,25.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgnBSQgDgDAAgEIABgDQAHgVAVgnQAUgnAIgVQAMgjAHAAQAEABADACQACACAAAEIgBAFIgKAbQgHASgMAYIgVAnIgSAnQgCAGgFAAQgEAAgCgCg");
	this.shape_26.setTransform(119.2,25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgqBLQgKgIAAggIABgOIAAgQIgBgEQAAgDACgDIADgpIgCgLIgBgKQABgMAJAAQAFAAACADIAXgEIASgCQAYAAAOAFQAGADABAHQgBAEgCACQgDAEgEAAIgDgBQgRgEgPAAIgQABIgVAFIABAKIgBAmIApgFIAYgCQADAAAEADQACADAAAEQABAIgKABIgXADIgsADIgBANIAAAMQAAAVAEAFQABACANAAIASAAIASAAIAGgBIAGAAQAKAAAAAKQAAAHgIADQgKABgdAAQgfAAgIgIg");
	this.shape_27.setTransform(81.4,24.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgxBKQgDgDAAgEIgBgXIAAgXIACgaIACgbIgBgPIgBgOQAAgGADgEQAEgFAGAAIAYACQANACAIAFQAoAVAAAeQAAAPgOAKQgLAJgQAFQAfAQAPATQACADAAADQAAAEgDADQgDADgEAAQgDAAgEgDQgggggngLIABATIABAUQAAAEgDADQgDADgEAAQgEAAgDgDgAgegrIAAAMIgBATIgCATIAEAAIAEAAQAZAAAMgHQAFgCAFgFQAFgFAAgEQAAgOgPgLQgNgLgQgCIgOgBg");
	this.shape_28.setTransform(68.8,24.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgxA8QgUgRAAgcQAAggAUgdQAWgeAhAAQAgAAAQAPQAQAPAAAgQAAAhgSAbQgWAfggAAQgbAAgUgRgAgiggQgPAWAAAZQAAATAOAMQANALAUAAQAXAAAPgYQAOgWAAgZQAAgYgKgJQgKgJgYAAQgXAAgRAYg");
	this.shape_29.setTransform(54.4,24.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgeAXAAIAJABIAGACQAEgGAFABQAHAAACAIQABAIAAALQAAAEgCAEQgDADgEAAQgHABgDgIQgDgGgCgBQgCgBgIAAQgOAAgQAVQgYAdAAAZQAAANAIAJQAIAKAMAAQAJAAAKgGQAGgDAMgIQAFgFADAAQAEAAADAEQADADAAAEQAAAEgEADQgZAYgaAAQgUAAgOgQg");
	this.shape_30.setTransform(40.6,24.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgmBDQgTgHAAgPQAAgFADgCQADgDAEABQAFgBAEAGQAFAHADADQAJAFAPAAQAOAAANgGQARgJAAgOQAAgNgOgHQgMgGgQAAQgQgBgKgGQgOgHAAgPQAAgRATgPQAUgNATAAQAJAAAMADQAQAEAAAGQAAAKgJgBIgOgCIgPgCQgOABgLAGQgLAIAAALQAAAIAOAEIAUABQAXACAMANQAMAKAAARQAAAWgWAPQgSAMgYgBQgRABgPgIg");
	this.shape_31.setTransform(27.5,25.1);

	this.scoreText = new cjs.Text("0", "20px 'Comic Sans MS'");
	this.scoreText.name = "scoreText";
	this.scoreText.textAlign = "center";
	this.scoreText.lineHeight = 30;
	this.scoreText.lineWidth = 19;
	this.scoreText.parent = this;
	this.scoreText.setTransform(105.6,16.4);

	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance = new lib.Copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275,389.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
	this.shape_32.setTransform(437.7,75.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFABQAEgBAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_33.setTransform(428.1,69.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AAeA7IgDgaQgCgOAAgNIAAgLIABgLQgBgbgJABQgOgBgLARQgLAOgHAXIgBALIgBAMIABALIABALQAAAFgEAEQgDADgGAAQgFAAgDgDQgDgEAAgFIgBgLIgBgLIACgiIABgiIAAgMIAAgMQAAgFAEgEQADgDAFAAQALAAABAQIABAOQAUgbAVAAQATAAAIARQAFAMAAAWIAAAMIAAALQABAKACAQQADAQAAAKQAAAGgEADQgDADgGAAQgKAAgBgMg");
	this.shape_34.setTransform(416.1,69.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_35.setTransform(402.5,69.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_36.setTransform(392.9,66.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_37.setTransform(383.2,67.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_38.setTransform(371,69.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQAAgbgKABQgNgBgMARQgLAOgGAXIgBALIgBAMIABALIAAALQAAAFgDAEQgDADgGAAQgEAAgEgDQgEgEABgFIgBgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFADgEQAEgDAFAAQALAAABAQIABAOQAUgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQgBAKADAQQADAQAAAKQAAAGgEADQgDADgGAAQgKAAgBgMg");
	this.shape_39.setTransform(358.2,69.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgVQABgLAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_40.setTransform(344.9,69.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgnBXIgBgGQAAgFADgDQAFgEAEAAQAHAAAIAQIAHAMQAFAGAFAAQAGAAADgIQADgGABgGQAAgOgEg7IgFhCQABgGAEgFQADgFAFAAQAEAAAFADQAEADAAADIAEBGIADBLQAAARgKAOQgLAPgQAAQgZAAgSgpgAAIhnQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_41.setTransform(332.1,70.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLABQgNgBgMARQgLAOgGAXIgBALIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFADgEQAEgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_42.setTransform(322,69.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_43.setTransform(308.4,69.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AgyBLQgRgTAAgaQAAgoAigrQAdgkAdAAIALAAIAIACQAFgGAGgBQAJABACAKQACAKAAAPQAAAFgDAEQgDAFgGAAQgIgBgEgIQgEgJgDgBQgCgCgKAAQgRAAgWAbQgdAlAAAfQABAQAJALQALAMAOAAQAMABANgHQAHgDAOgMQAIgEADgBQAFABAEAEQADADABAFQAAAGgGAEQgfAdghgBQgZABgRgUg");
	this.shape_44.setTransform(294.8,66.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_45.setTransform(272.9,69.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAhBcQgDgKgCgSQgCgSAAgLIAAgKIAAgJQABgXgMAAQgPABgMANQgGAHgLAUQAAAvgDAIQgEAIgHAAQgFgBgEgDQgEgDAAgFIABgFQABgEAAgOIABgSIABhZIAAgVIgBgLIgBgLQAAgGAEgDQADgDAFAAQAKgBACALQACAMAAAJIgBAbQgBAOAAANIAAALQALgNALgHQALgHAMAAQAUAAAIANQAFAKABAUIABAYIACAZQACAPADAKIAAAEQAAAFgEAEQgDACgGAAQgIABgDgKg");
	this.shape_46.setTransform(258.8,66.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_47.setTransform(245.4,67.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgNBZIABgtIACgsIAAgrIABgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_48.setTransform(228.7,66.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNBZIABgtIACgsIAAgrIABgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_49.setTransform(221.9,66.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_50.setTransform(212,69.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAeA7IgDgaQgCgOgBgNIABgLIABgLQAAgbgLABQgNgBgLARQgLAOgHAXIgBALIgBAMIABALIABALQgBAFgDAEQgDADgGAAQgEAAgEgDQgDgEAAgFIgBgLIgBgLIACgiIABgiIAAgMIAAgMQAAgFADgEQAEgDAFAAQALAAABAQIABAOQAUgbAUAAQAUAAAIARQAFAMAAAWIAAAMIAAALQABAKACAQQADAQAAAKQAAAGgEADQgDADgGAAQgKAAgBgMg");
	this.shape_51.setTransform(191.9,69.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_52.setTransform(178.3,69.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAhBeQgHgNgNgRIgUgdIgWAQIgCAlQAAAFgDAEQgDADgGAAQgMAAAAgRIACgeIABgeIABgqIAAgqIAAgNIgBgNQAAgGADgDQAEgDAFAAQAFAAAEADQADADAAAGIAAAOIABAMIgBAoIAAApQAQgNAPgOIAbgbQAEgFAEABQAFAAAEADQAEAEAAAFQAAAFgEADQgPASgWATIAbAkQATAaAAAIQAAAEgEAEQgEAEgFgBQgHAAgDgGg");
	this.shape_53.setTransform(158.5,66.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_54.setTransform(144.6,69.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_55.setTransform(134.9,66.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgNBZIABgtIACgsIAAgrIABgsQAAgNALAAQAMAAAAANIAAAsIgBArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_56.setTransform(127.7,66.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgyBLQgRgTAAgaQAAgoAigrQAdgkAdAAIAKAAIAJACQAFgGAGgBQAJABACAKQACAKAAAPQAAAFgDAEQgDAFgGAAQgIgBgEgIQgEgJgDgBQgCgCgKAAQgRAAgWAbQgdAlAAAfQABAQAJALQALAMAOAAQAMABANgHQAHgDAOgMQAIgEADgBQAFABAEAEQADADABAFQAAAGgGAEQgfAdghgBQgZABgRgUg");
	this.shape_57.setTransform(117.1,66.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AgFBNQgFgGAAgDQAAgEADgDQADgCAEAAQADAAADAFQAEAFAAAEQAAADgDADQgCACgEAAQgDAAgDgEgAgGAjIgBgLIAAgMIAAgpIABgrQAAgJAHAAQAJAAAAAJIAABrQAAAKgJgBQgHABAAgKg");
	this.shape_58.setTransform(369.3,30.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIABAPIAGArQALgdAMgoQADgLAHAAQAIAAADANIAGAjIAGAlIAIgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_59.setTransform(360.3,33.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_60.setTransform(348,33.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIABAJQAAAEgDADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_61.setTransform(338,33.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AAaBLQgFgKgKgOIgRgXIgRAMIgBAeQAAAEgDADQgDADgEAAQgJAAgBgOIABgYIABgYIABghIABgiIgBgKIgBgLQABgEADgDQACgCAEAAQAFAAACACQADADAAAEIABALIAAALIgBAfIAAAhIAYgVIAWgWQADgEAEAAQADAAADADQAEADAAAEQAAAEgDADQgMAOgSAPIAVAdQAQAVgBAGQAAAEgCACQgDADgFAAQgFAAgDgFg");
	this.shape_62.setTransform(327.8,30.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AAWAuQgMAHgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgJAJAAQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgKg");
	this.shape_63.setTransform(310.6,33.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_64.setTransform(300,33.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgZBMQgDgCAAgFQAAgJAVgvIgjhCIgFgHQgCgFAAgDQAAgEADgDQADgDAEAAQAEAAADADQAQAYASAqIAPghIAPgfQADgFAFAAQAEAAADADQADADAAAEIgBAEIgiBJQgMAagGASIgGATQgDAHgGAAQgEAAgDgDg");
	this.shape_65.setTransform(289.4,36.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgGBFQgCgDAAgEIAAgLIAAgLIgCg4IgWgCQgIgBAAgJQAAgDACgEQADgCAEAAIAUABIAAgNIAAgMQAAgEADgCQACgDAEgBQAJAAABAPIAAAIIAAAHIAAAFIANgBQALAAADABQAGABAAAIQAAAEgDADQgCADgFAAIgEgBIgGAAIgMACIACA5IAAAEIAAAFQAAAVgKAAQgEAAgDgCg");
	this.shape_66.setTransform(273.8,31.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAJAAAKAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIACAGIABABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIABgKIgGgDIgDgBQgPAAgKAMg");
	this.shape_67.setTransform(264,33.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_68.setTransform(253.2,30.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgEAGgGAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQADgDAEAAQAHAAACAIIACAOIABAPIAGArQALgdALgoQAEgLAHAAQAIAAADANIAGAjIAGAlIAIgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgIAggMAnQgCAJgHAKQgDAFgHAAQgKgBgGgag");
	this.shape_69.setTransform(240.5,33.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIABAPIAGArQALgdAMgoQADgLAHAAQAIAAACANIAHAjIAGAlIAIgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_70.setTransform(220.8,33.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_71.setTransform(208.5,33.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_72.setTransform(197.8,30.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgmBDQgTgHAAgPQAAgEADgDQADgDAEABQAEAAAFAFQAEAIAEACQAJAGAPgBQAPAAANgGQAQgJAAgOQAAgNgOgHQgMgGgQAAQgQgBgKgGQgOgHAAgPQAAgSATgOQAUgNATAAQAJgBAMAEQAQAEAAAGQAAAKgJgBIgOgCIgPgCQgOAAgLAIQgLAHABALQAAAIANAEIAUABQAXACAMANQAMAKAAARQAAAWgWAPQgSAMgYgBQgRABgPgIg");
	this.shape_73.setTransform(185.1,31.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(2,1,1).p("AqNilIUbAAQA4AAAAA8IAADTQAAAwgkAKQgJACgLAAI0bAAQgLAAgJgCQgkgKAAgwIAAjTQAAg8A4AAg");
	this.shape_74.setTransform(79.4,23.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AqNCmQgLAAgJgCQgkgKAAgwIAAjTQAAg8A4AAIUaAAQA5AAAAA8IAADTQAAAwgkAKQgJACgMAAg");
	this.shape_75.setTransform(79.4,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance},{t:this.UI},{t:this.scoreText},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).to({state:[]},4).wait(101));

	// background
	this.instance_1 = new lib.Backgrond("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,200);
	this.instance_1.alpha = 0.191;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},4).wait(101));

	// finish
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(503,368.2);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_2 = new lib.AllDone();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,183.1,1,1,0,0,0,0,-16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.btn_menu}]},4).to({state:[{t:this.instance_2},{t:this.btn_menu}]},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274,199,552.1,402.1);
// library properties:
lib.properties = {
	id: 'C684DE6DDFD92F42902320F6E3E4727B',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/boopSound.mp3", id:"boopSound"},
		{src:"sounds/Bub.mp3", id:"Bub"},
		{src:"sounds/correctwav.mp3", id:"correctwav"},
		{src:"sounds/CrashMountain.mp3", id:"CrashMountain"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/incorrectwav.mp3", id:"incorrectwav"},
		{src:"sounds/JingleNoun.mp3", id:"JingleNoun"},
		{src:"sounds/Mick.mp3", id:"Mick"},
		{src:"sounds/nounanounis.mp3", id:"nounanounis"},
		{src:"sounds/bgmTest.mp3", id:"bgmTest"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/Rita.mp3", id:"Rita"},
		{src:"sounds/SECorrectAnswer.mp3", id:"SECorrectAnswer"},
		{src:"sounds/SENameofIdea.mp3", id:"SENameofIdea"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/SENameOfPlace.mp3", id:"SENameOfPlace"},
		{src:"sounds/SENameofThing1.mp3", id:"SENameofThing1"},
		{src:"sounds/SENameofThing2.mp3", id:"SENameofThing2"},
		{src:"sounds/SESummary.mp3", id:"SESummary"},
		{src:"sounds/SEWrongAnswer.mp3", id:"SEWrongAnswer"},
		{src:"sounds/Skateboard.mp3", id:"Skateboard"},
		{src:"sounds/Slim.mp3", id:"Slim"},
		{src:"sounds/Stace.mp3", id:"Stace"}
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
an.compositions['C684DE6DDFD92F42902320F6E3E4727B'] = {
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