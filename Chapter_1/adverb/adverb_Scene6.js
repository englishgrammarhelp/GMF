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


(lib.Whenisthegame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAsQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgEACgDQACgDAEAAQAFAAAAAHQAAADgBACQgCADgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgLAVQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgEAHgGIANgJQAIgHAAgFQAAgHgGgGQgHgFgFAAQgEAAgGADIgHAEQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgFAJgEQAIgEAGAAQAKAAAKAJQAKAJAAAMQAAAIgGAGQgDAEgJAGQgJAHgDAEQgCACgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape.setTransform(44.7,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAuIgBgEQAAgGAMgcIgVgnIgCgFIgCgEIACgFQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAKAOALAaIAIgUIAJgSQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAABIgBACIgUArIgKAbIgFALQgBAFgDgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(38.6,-12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATAeIgEgFIgKAFIgGABQgOAAgGgHQgGgIAAgOQAAgNAKgLQAJgKANABQAFgBAGADQAIADAAAFIgBACIgBAIIAAAMIABAMIADAKIACADIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAIAAAIQAAAKAEAEQADAGAHAAQAFAAADgCIAGgFIgCgWIABgGIABgGIgEgCIgCgBQgJABgGAHg");
	this.shape_2.setTransform(32.5,-13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGArIABgWIABgVIAAgUIAAgWQAAgFAFAAQAGAAAAAFIAAAWIgBAUIgBAdIAAAOQgBAFgEAAQgGAAAAgFg");
	this.shape_3.setTransform(27.8,-15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWAwQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAgXIAAgWIAAgYIgBgMQAAgEABgDQACgDAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIACAEIAAACIgBAEQAGgEAEgBQAEgCAEAAQAMAAAFAKQAFAJAAAOQAAALgHAJQgHAIgMAAQgFAAgHgCIAAAcQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAgAgFgeIgHAGIABAbQAFADAGAAQAIAAADgGQAEgEAAgHQAAgLgDgFQgDgFgFAAQgEAAgFACg");
	this.shape_4.setTransform(23,-12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPAuIgBgEQAAgGAMgcIgVgnIgCgFIgCgEIACgFQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAKAOALAaIAIgUIAJgSQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAABIgBACIgUArIgKAbIgFALQgBAFgDgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_5.setTransform(12.9,-12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_6.setTransform(6.8,-13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQAsIgCgNIgCgOIABgFIAAgEQAAgKgGAAQgHAAgFAFIgIANQAAAXgCAEQgCAEgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIABgIIAAgJIAAgqIABgKIgBgFIAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQAFAAABAGIABAKIAAANIgBAMIAAAGQAFgHAGgDQAEgDAGAAQAKAAAEAGQACAFABAJIAAALIABAMIACANIAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_7.setTransform(0,-15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgHIAAgGIgBghIgOgBQgEgBAAgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAMABIAAgIIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAABAJIAAAFIAAADIAAAEIAIgBIAIAAQADACAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIAAADQAAANgGAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAAAgBg");
	this.shape_8.setTransform(-6.4,-14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgNgFAAQgGAAgFAIQgGAHgDAKIAAAFIAAAHIAAAEIAAAGQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgGIAAgEIABgRIABgQIAAgFIgBgGQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQABAAAAAAQAFAAABAHIAAAIQAKgOAJAAQAKABADAHQADAGAAALIAAAGIAAAEIABANIACAMQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgFAAgBgGg");
	this.shape_9.setTransform(43.9,-32.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATAeIgEgEIgKAEIgGABQgOAAgGgHQgGgIAAgOQAAgNAKgLQAJgKANAAQAFABAGACQAIADAAAFIgBADIgBAHIAAAMIABALIADALIACADIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAIAAAIQAAAKAEAFQADAEAHAAQAFAAADgBIAGgFIgCgWIABgGIABgGIgEgCIgCgBQgJAAgGAIg");
	this.shape_10.setTransform(37.6,-32.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQAaQgJgIAAgMQAAgLAIgMQAJgPAKAAQAGAAAHADQAJAEAAAEIgCAFQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgDgBIgDgCQgDgDgIAAQgFAAgFALQgGAKAAAGQAAAHAGAFQAEAEAHAAIAHgBIAIgFIACgBQABAAAAABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQgBAFgIAEQgJADgFAAQgLAAgIgHg");
	this.shape_11.setTransform(31.5,-32.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AAMAbIgCgMIgBgMIABgEIAAgGIAAgCIAAgCQAAgGgCAAQgFABgEAGQgFAHgDAJIAAAFIgBAFIAAAFIAAAFQAAADgDADQgCACgDAAQgEAAgCgCQgDgDAAgDIAAgFIAAgFIABgQIAAgPIAAgFIAAgGQAAgDACgCQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABALQAAAEgCACQgDACgDAAQgHAAgBgHg");
	this.shape_12.setTransform(20.1,-32.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_13.setTransform(13.4,-32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_14.setTransform(6.8,-33.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AAMAuQgDgDgBgDIgDgLIgGgkIgIATIgJAXIAAADQAAADgDADQgDACgDAAQgEgBgDgCQgDgCAAgEIgCgHIgGgcIgNgmIgBgDQAAgDADgCQACgCAEgBQAEABADAEIADAHQAGAQAHAfIAKgaIAGgSQAGgNAFAAQAGAAACAGQACAEABAIIABALIAIAkIAQgpIADgLIAFgKQADgEAEgBQAEAAACADQADACAAADIgDAHIgCAGIgDAKIgLAYIgKAZIgFAKQgDAEgFAAQgEAAgCgBg");
	this.shape_15.setTransform(-3,-33.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2.5,1,1).p("AADDwIEQAAQBjAABGhGQBHhGAAhkQAAhihHhHQhGhGhjAAIolAAQhjAAhHBGQhGBHAABiQAABkBGBGQBHBGBjAAICsAA");
	this.shape_16.setTransform(22.1,-23.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AArBFIgBAAQgcgEgWgRQgMgJgJgKQgOgQgHgSIgEgLIgFgQIgEgTQAAgFABgEQACgFAFgDQANACABALIAAAIIgBAEQABAGACAFIAPAgIACADIAIALQAOASAVAKIARAHQAAgLgDgKQgIgVgDgVQgDgTAAgUQABgHAGgCQAFAAAEADIAAAAQAGAFgBAMQgDAXAIAUIADAHQAIAbAEAbIACAGIAAABIgVAAg");
	this.shape_17.setTransform(18.6,6.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNEgQgWgKgOgSIgIgLIgCgEIgPggQgCgFgBgGIABgEIAAgIQgBgLgNgCQgFADgCAFIgFAAIisAAQhjAAhHhHQhGhGAAhiQAAhkBGhGQBHhGBjAAIIlAAQBjAABGBGQBHBGAABkQAABihHBGQhGBHhjAAIkRAAIAAABIAAAAQgDgDgFAAQgGACgBAHQAAAUADATQADAWAHAVQADAKAAALIgQgHg");
	this.shape_18.setTransform(22.1,-18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Whenisthegame, new cjs.Rectangle(-30.6,-49.1,105.5,62.3), null);


(lib.Thegameisat300PM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgGAGQgDgDAAgDQAAgCADgDQADgCADAAQAEAAADACQADADAAACQAAADgDADQgDACgEAAQgDAAgDgCg");
	this.shape.setTransform(43.5,-10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AAMAbIgCgMIgBgMIABgEIAAgGIAAgBIAAgEQAAgEgCAAQgFAAgEAGQgFAHgDAIIAAAGIgBAFIAAAFIAAAGQAAADgDACQgCACgDAAQgEAAgCgCQgDgCAAgDIAAgGIAAgFIABgPIAAgQIAAgFIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_1.setTransform(37.9,-13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_2.setTransform(31.5,-13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_3.setTransform(25.2,-13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgQAfQgIgDgBgHQABgGAGAAIAIACIAIABQALAAAAgEQAAgDgIgEIgOgHQgJgGAAgHQAAgNAMgEQAIgCAOAAQAGAAADACQADACABAFQAAALgHAAQgFAAgBgGIgFAAQgNAAAAAEQAAACAHAEQAMAGAEACQAIAGAAAIQAAAKgJAFQgHAEgLAAQgHAAgHgCg");
	this.shape_4.setTransform(19.2,-13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_5.setTransform(7.7,-13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgXAeQgBgCAAgDIAAglIAAgFIAAgGQAAgDACgCQACgCAEgBQAGAAACAHQAJgIAMAAQAMAAAAAQIAAAEQAAAJgIgBQgHABAAgIIAAgGQgNADgFAKIAAAdQgBADgCADQgCACgDAAQgEAAgDgDg");
	this.shape_6.setTransform(1.7,-13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_7.setTransform(-4.8,-13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_8.setTransform(-11.4,-15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_9.setTransform(48.7,-32.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAsQgCADgDAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgEIAAgFIAAgSIAAgSIAAgQIAAgRQAAgDABgCQACgFAEAAQAEABAAAFIAAACIgBACIAAAOIAAAOIAKgFIAHgBQANgBAIAKQAHAIAAANQAAAOgIAJQgJAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAKIAAAJIAIADQAEABAEAAQAIAAAFgFQAGgHAAgJQAAgJgFgFQgEgFgJAAQgDgBgFADg");
	this.shape_10.setTransform(41.9,-33.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAqIABgUIABgWIAAgUIAAgVQAAgHAFABQAGgBAAAHIAAAVIgBAUIgBAdIAAANQgBAGgEABQgGgBAAgGg");
	this.shape_11.setTransform(33,-33.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAqIABgUIABgWIAAgUIAAgVQAAgHAFABQAGgBAAAHIAAAVIgBAUIgBAdIAAANQgBAGgEABQgGgBAAgGg");
	this.shape_12.setTransform(29.7,-33.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFAqQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgKIAAgLIABgOIAAgMQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIgBAMIAAAOIAAALIAAAKQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQACgCACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAADgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_13.setTransform(26.5,-33.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAhQgHAAgDgQIgDgOIgBgMIgFALIgIAYIgDADQgBAEgEAAQgFAAgEgSQgCgJgCgOIgCgJIAAgJQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAEAAABAFIABAJIABAIIAEAaIANgpQACgHAEAAQAFAAABAIIAEAVIAEAWIAEgQIAIgfQABgEAEAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAIAAADIgMAqIgGALQgCADgCAAIgBAAg");
	this.shape_14.setTransform(20.6,-32.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgPAuIgBgEQAAgGAMgcIgVgnIgCgFIgCgEIACgFQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAABABQABAAAAAAQABAAAAABQABAAAAAAQAKAOALAaIAIgUIAJgSQACgDADgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAABIgBACIgUArIgLAbIgEALQgBAFgEAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAg");
	this.shape_15.setTransform(9.7,-30.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_16.setTransform(3.5,-32.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAQAsIgCgNIgCgOIABgFIAAgEQAAgKgGAAQgHAAgFAFIgIANQAAAXgCAEQgCAEgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgIIAAgJIAAgqIABgKIgBgFIAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQAFAAABAGIABAKIAAANIgBAMIAAAGQAFgHAGgDQAEgDAGAAQAKAAAEAGQACAFABAJIAAALIABAMIACANIAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_17.setTransform(-3.3,-33.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDArQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQAAAAABABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQgBAAAAAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_18.setTransform(-10.4,-33.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2.5,1,1).p("AhmDwIisAAQhjAAhHhGQhGhGAAhkQAAhiBGhHQBHhGBjAAIIlAAQBjAABGBGQBHBHAABiQAABkhHBGQhGBGhjAAIkQAA");
	this.shape_19.setTransform(22.1,-23.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhSBBQAdglAcglQAFgWgCgXIAAgBIAAgHIAGgGQALABALgCIAAABIgBAMIgFAVQgBAKgEAIQgPAYgKAaQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgIACAAAIQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAaAFAWgPIAKgHQAPgNAJgSQAJgPAEgSIABgDIAIgXQADgDABgEIANAAIABALIgBANIAAAIIgFAHIgFAIIAAAHIAAAIQgrBKhHAAQgTAAgVgFg");
	this.shape_20.setTransform(14.1,5.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah3EkQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgHAHgCQABgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQALgbAOgZQAFgIACgJIAEgVIABgMIAAgBQgLABgMAAIgGAGIABAGIisAAQhjAAhHhGQhGhGAAhjQAAhjBGhHQBHhGBjAAIIlAAQBjAABGBGQBHBHAABjQAABjhHBGQhGBGhjAAIkRAAIAAgKIgNAAQAAADgDADIgIAYIgCADQgEARgIARQgJARgQANIgJAIQgSALgSAAIgNgBg");
	this.shape_21.setTransform(22.1,-18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Thegameisat300PM, new cjs.Rectangle(-30.6,-49.1,105.5,61.9), null);


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


(lib.fpb_rightOutFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightOutFrame_up, new cjs.Rectangle(0,0,50,50), null);


(lib.fpb_rightInFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightInFrame_up, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftOutFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftOutFrame_up, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftInFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftInFrame_up, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_face_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_face_up, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_rightOutFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmjD6IAAnzINHAAIAAHzg");
	this.shape.setTransform(25,25,0.595,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightOutFrame_press, new cjs.Rectangle(0,0,50,50), null);


(lib.fpb_rightInFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightInFrame_press, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftOutFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftOutFrame_press, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftInFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftInFrame_press, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_face_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_face_press, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_rightOutFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmjD6IAAnzINHAAIAAHzg");
	this.shape.setTransform(25,25,0.595,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightOutFrame_over, new cjs.Rectangle(0,0,50,50), null);


(lib.fpb_rightInFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightInFrame_over, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftOutFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftOutFrame_over, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftInFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftInFrame_over, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_face_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_face_over, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_rightOutFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightOutFrame_disabled, new cjs.Rectangle(0,0,50,50), null);


(lib.fpb_rightInFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightInFrame_disabled, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftOutFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftOutFrame_disabled, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftInFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftInFrame_disabled, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_face_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_face_disabled, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.boundingBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.boundingBox, new cjs.Rectangle(-50,-50,100,100), null);


(lib.Definition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgDADABQADgBADADQACADAAACQAAADgCADQgDADgDAAQgDAAgCgDg");
	this.shape.setTransform(247.2,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgTA0QgDACgEAAQgDAAgDgCQgDgDAAgDIABgFIAAgFIAAhNQAAgFACgEQADgEAFAAQAHAAAAAIIAAACIAAADIAAAaIAJgEIAIgBQAQAAAKALQAKAKAAAQQAAAQgLALQgLALgPAAQgJAAgJgDgAgHgBIgKAFIAAAeQAJAEAHAAQAHAAAGgGQAGgGAAgJQAAgJgEgGQgGgFgIAAQgCAAgFACg");
	this.shape_1.setTransform(241.3,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_2.setTransform(233.9,37.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgHAGIgQAGIgWALQADADAFACQAFACAEAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_3.setTransform(226.3,37.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgJAeIgXg2IgBgEQAAgDADgDQADgCAEAAQAGAAACAFIAPAmIAKgXIAGgPQACgFAGAAQAEAAADADQADACAAAEQAAACgLAZIgPAeQAAADgCACQgDACgDAAQgGAAgDgHg");
	this.shape_4.setTransform(219.2,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AATA0QgFACgFABIgJABQgPAAgLgKQgKgKAAgPQAAgSAKgLQALgLAQAAIAJABQAEABADACIACggQABgIAIAAQAEAAACACQADADAAAEIgCAeIgBAcQAAAZABAIIAAACQAAAEgCADQgDACgEAAQgFAAgCgEgAgNADQgFAGAAALQAAAIAFAGQAGAEAHAAIAHgBIAGgEIACgCIAAgZQgCgEgDgCQgEgBgFAAQgJgBgFAFg");
	this.shape_5.setTransform(211.5,35.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AAQAfIgKAFIgIACQgQAAgJgJQgHgJgBgSQAAgPANgMQAMgMAQAAQAGAAAJAEQAKAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAIgCAHIAAAKQAAAMACAFIADAIIACAGQABAEgDACQgDADgEAAQgCAAgIgHgAgJgNQgHAHAAAJQABAJADAFQADAEAHAAIAHgBIAHgEIgDgYIABgFIAAgGIgCgBIgBAAQgJAAgHAHg");
	this.shape_6.setTransform(203.7,37.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_7.setTransform(192.4,37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_8.setTransform(185.1,37.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_9.setTransform(177.2,35.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEACAAAEQAAADgCADQgCABgDAAIgDAAIgEAAIgJABIABAoIAAADIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_10.setTransform(169.7,36.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgNAQAAQAOAAAHAMQAGAKgBAOQAAAPgHALQgJALgOABQgLAAgIgJgAgLgNQgFAIAAAIQAAALAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgZgQgBQgJAAgFAKg");
	this.shape_11.setTransform(162.6,37.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_12.setTransform(155.6,37.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_13.setTransform(148.2,37.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_14.setTransform(137.2,37.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgNAQAAQAOAAAHAMQAGAKgBAOQAAAPgHALQgJALgOABQgLAAgIgJgAgLgNQgFAIAAAIQAAALAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgZgQgBQgJAAgFAKg");
	this.shape_15.setTransform(129.8,37.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAOQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAEgLIAFgNQABgCADAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgJAWQgBAEgDAAQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_16.setTransform(120.5,41.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_17.setTransform(114.5,37.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHAgIgKgcIgMgfIgBgDQAAgCACgCQACgCADAAQAEAAACAEIARAvIAMgfIAGgQQACgEAEAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAACgLAbIgOAfQAAAGgGAAQgEAAgDgFg");
	this.shape_18.setTransform(107.2,37.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAyQgCgDAAgDIAAgLIAAgNIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBAPIgBAQIABANIAAALQAAADgCADQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgEQAAgDADgCQACgCACAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAQgCAAgCgCg");
	this.shape_19.setTransform(101.9,35.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEACAAAEQAAADgCADQgCABgDAAIgDAAIgEAAIgJABIABAoIAAADIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_20.setTransform(96.5,36.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTAeQgJgJgBgOQAAgNAKgPQAKgRAMABQAGAAAJACQALAFAAAFQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgDgBIgDgCQgEgEgJAAQgGAAgHANQgGALAAAIQAAAJAGAEQAGAGAIgBQAEAAAFgBIAIgFIACgBQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAABQAAAEgLAFQgJAFgGgBQgNABgKgJg");
	this.shape_21.setTransform(89.7,37.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgLAEgJAAQgPAAgJgHgAgNgRQgGAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_22.setTransform(82.4,37.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgWAxIAAgDQAAgDACgCQACgCADAAQAEAAAEAJIAEAHQACADADAAQADAAADgFIACgGIgDgpIgDglQAAgDACgDQADgDACAAIAGACIACADIACAnIACAqQAAAJgGAIQgGAJgJAAQgOAAgKgXgAAEg5QgCgCAAgEQAAgDACgCQACgDAEAAQADAAACADQADACAAADQAAAEgDACQgCACgDAAQgEAAgCgCg");
	this.shape_23.setTransform(74.9,37.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXAuQgKgJAAgPQAAgSAKgLQAKgLAOAAQAIABAEACIAHAFQABgdABgKQABgGAFAAQAGAAAAAHIgDApIgBATQABAXACAMIAAABQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGQgFADgGACQgFACgFAAQgOAAgJgKgAgPABQgGAHAAANQAAAJAGAHQAGAGAJAAQAFAAAEgCIAIgGIACgBIgBgNIAAgHIABgIQgDgGgEgCQgFgDgGAAQgLABgFAFg");
	this.shape_24.setTransform(68.6,35.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_25.setTransform(61,37.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHAOQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAEgLIAFgNQABgCADAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgJAWQgBAEgDAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_26.setTransform(51.6,41.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAzQgCADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCgBgDIAAgFIAAgGIAAgVIAAgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIAAADIAAAPIgBASQAGgEAGgCQAFgDAEAAQAOAAAKAMQAIAJAAAQQAAAPgKALQgKALgOAAQgKAAgJgEgAgKgCIgKAFIAAAMIAAALIAAALIAKAEQAEABAFAAQAJAAAGgHQAGgHAAgKQAAgKgEgHQgGgHgJAAQgFAAgGAEg");
	this.shape_27.setTransform(45.3,35.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_28.setTransform(37.8,37.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgYANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgKAEgLAAQgOAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_29.setTransform(30.6,37.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHAgIgKgcIgMgfIgBgDQAAgCACgCQACgCADAAQAEAAACAEIARAvIAMgfIAGgQQACgEAEAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAACgLAbIgOAfQAAAGgGAAQgEAAgDgFg");
	this.shape_30.setTransform(23.3,37.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_31.setTransform(12,37.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSAmQgLgEAAgGQAAgEACgCQACgCADAAQACABAEADQABACAGABIAIABQAEgBAFgBQAGgCAAgFQAAgJgNgDIgGgCQgJgBgEgDQgFgDAAgHQAAgPANgGIAMgEIANgFIAGgBQADAAACACQACACAAADIABAGIABAFQAAAEgCACQgCABgDAAQgEABgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAGQgIAEgLAAQgJAAgIgDg");
	this.shape_32.setTransform(0.7,37.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgKgHgAgOgRQgFAGgCAMIAVgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_33.setTransform(-6.2,37.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGAyQgCgDAAgDIAAgLIAAgNIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBAPIgBAQIABANIAAALQAAADgCADQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgEQAAgDADgCQACgCACAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAQgCAAgCgCg");
	this.shape_34.setTransform(-12,35.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_35.setTransform(-17.8,36);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGAyQgCgDAAgDIAAgLIAAgNIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBAPIgBAQIABANIAAALQAAADgCADQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgEQAAgDADgCQACgCACAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAQgCAAgCgCg");
	this.shape_36.setTransform(-23,35.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXAuQgKgJAAgPQAAgSAKgLQAKgLAOAAQAIABAEACIAHAFQAAgdACgKQAAgGAGAAQAGAAAAAHIgDApIAAATQgBAXADAMIAAABQAAABAAABQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQgEAAgBgGQgFADgGACQgFACgFAAQgOAAgJgKgAgPABQgGAHAAANQAAAJAHAHQAFAGAJAAQAFAAAEgCIAHgGIADgBIgBgNIAAgHIABgIQgEgGgDgCQgFgDgGAAQgKABgGAFg");
	this.shape_37.setTransform(-29.2,35.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgNAQAAQAOAAAHAMQAGAKgBAOQAAAPgHALQgJALgOABQgLAAgIgJgAgLgNQgFAIAAAIQAAALAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgZgQgBQgJAAgFAKg");
	this.shape_38.setTransform(-37.1,37.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgDAoQgCgCAAgDIgCgYIgBgYQAAgHgCgEQgFACgFAFIgIAJIgEAFIAAALIgBAMIABAFIAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgRIAAgNIABgLIgBgLIAAgLQAAgPAHAAQACAAADACQACADAAACIgBAEIAAAEIAAAIQAEgIAHgGQAHgGAEAAQALAAADALQAEgFAFgCQAFgDAHAAQAMAAAEAMIACAUIAFAmQABADgCACQgCABgDAAQgGAAgBgGIgCgVIgDgUQAAgFgCgEQgCgGgDAAQgDAAgHAEQgGAEgCACIAAANIACARIABASQAAADgBACQgCACgDAAQgCAAgCgCg");
	this.shape_39.setTransform(-46,37.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AgTA0QgDACgEAAQgDAAgCgCQgDgDgBgDIABgFIAAgFIAAhNQAAgFADgEQACgEAFAAQAIAAgBAIIAAACIAAADIAAAaIAJgEIAIgBQARAAAJALQAJAKAAAQQAAAQgKALQgLALgPAAQgKAAgIgDgAgGgBIgLAFIAAAeQAJAEAHAAQAHAAAGgGQAGgGAAgJQAAgJgEgGQgFgFgJAAQgCAAgEACg");
	this.shape_40.setTransform(-59.9,35.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF6600").s().p("AgaAkQgDgDABgEIAAgrIAAgHIAAgGQAAgEACgCQACgDAFAAQAHAAACAIQALgJAPAAQANAAAAASIAAAEQAAALgJAAQgJAAAAgJIAAgHQgOADgHANIAAAhQAAAEgDADQgDACgDAAQgFAAgCgCg");
	this.shape_41.setTransform(-67.3,37.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6600").s().p("AgWAeQgMgJAAgQQAAgQAJgMQAKgNAQAAQAMAAAJAEQAJAFABAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAGAAQAIAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgKAAQgQAAgKgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_42.setTransform(-74.9,37.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6600").s().p("AgJAeIgXg2IgBgEQAAgDADgDQADgCAEAAQAGAAACAFIAPAmIAKgXIAGgPQACgFAGAAQAEAAADADQADACAAAEQAAACgLAZIgPAeQAAADgCACQgDACgDAAQgGAAgDgHg");
	this.shape_43.setTransform(-82,37.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6600").s().p("AATA0QgFACgFABIgJABQgPAAgLgKQgKgKAAgPQAAgSAKgLQALgLAQAAIAJABQAEABADACIACggQABgIAIAAQAEAAACACQADADAAAEIgCAeIgBAcQAAAZABAIIAAACQAAAEgCADQgDACgEAAQgFAAgCgEgAgNADQgFAGAAALQAAAIAFAGQAGAEAHAAIAHgBIAGgEIACgCIAAgZQgCgEgDgCQgEgBgFAAQgJgBgFAFg");
	this.shape_44.setTransform(-89.7,35.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF6600").s().p("AAQAfIgLAFIgHACQgQAAgIgJQgIgJAAgSQAAgPALgMQANgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIADAGQAAAEgDACQgDADgDAAQgEAAgHgHgAgJgNQgGAHAAAJQAAAJACAFQAEAEAGAAIAHgBIAIgEIgCgYIAAgFIABgGIgCgBIgDAAQgIAAgHAHg");
	this.shape_45.setTransform(-97.5,37.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_46.setTransform(-109.2,37.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAYAkIgFgWIgSAEIgRADIgMAaQgCAEgEAAQgCAAgDgCQgCgCAAgDQAAgDALgWQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAHgBQAIgNAMgUQAPgaAEAAQAFAAACAIIAFAXIAKAvIAEAKIACAIQAAACgCACQgDADgCAAQgHAAgEgQgAgIAFIAYgFIgFgag");
	this.shape_47.setTransform(-118.2,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2,1,1).p("A9PheMA6fAAAIAAC9Mg6fAAAg");
	this.shape_48.setTransform(62.8,36.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("A9PBfIAAi9MA6fAAAIAAC9g");
	this.shape_49.setTransform(62.8,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,23.5,376.5,23.6);


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


(lib.LGlobalClass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_36:0});

	// timeline functions:
	this.frame_0 = function() {
		///*--------------VERSION CONTROL INFORMATION----------------------
		//
		//	Learning Interaction Global Toolbox Class
		//	Developed by Dan Carr
		//	Quality Assurance by Andrew Chemey
		//	Last Modified for Flash MX: November 25, 2001
		//	Copyright 2002 Macromedia Inc. All rights reserved.
		//	
		//	
		//  ------------------END VERSION CONTROL--------------------------
		//  
		//  Section 1: Start Contruction of the Global Class
		//  
		//  1-1: _global.LToolBox		// Initializes the Global Class
		//  
		//  Section 2: Graphic Initialization Handling
		//  
		//  2-1: setTextField			// Sets a text field on the stage
		//  2-2: setCompLabel			// Sets the label of a component on the stage
		//  2-3: setCompCallBack		// Sets the callBack of a component on the stage
		//  2-4: setCompState			// Sets the active state of a component on the stage
		//  2-5: getCompLabel			// Returns the label of a component on the stage
		//  2-6: initControlButton	// Initializes the control button component
		//  
		//  Section 3: Feedback Event Handling
		//  
		//  3-1: setFeedback			// Initializes feedback responses
		//   
		//  Section 4: Navigation Event Handling
		//  
		//  4-1: setNavigation		// Handles navigation events at the end of a session
		//  
		//  Section 5: Tracking Toolbox
		//  
		//  5-1: sessionStart			// DateStamp, timeStamp, and start sessionTimer
		//  5-2: sessionStop			// Stop sessionTimer and return Latency
		//  5-3: submitScore			// Format score and submit to the publish template
		//  
		//  Section 6: Common Toolbox
		//  
		//  6-1: getDateStamp			// Format current date
		//  6-2: getTimeStamp			// Format current time
		//  6-3: sessionTimer			// "Start" and "Stop" the sessionTimer for Latency
		//  6-4: getLatency			// Format seconds to hours for Latency
		//  6-5: formatNum			// Format single digit number to a double digit number
		//  6-6: getObjProp			// Returns a report from an Object
		//  6-7: reportToOutput		// Trace this session's instance Properties to Output
		//  
		//*/
		//
		//#initclip 0
		//
		//// SECTION 1: START GLOBAL FUNCTIONS
		//
		//// 1-1: Constructor function for the global class
		//
		//_global.LToolBox = function()
		//{
		//	this.interaction_id = undefined;
		//	this.interaction_type = undefined;
		//	
		//	this.correct_response = undefined;
		//	this.student_response = undefined;
		//	this.result = undefined;
		//		
		//	this.feedback = undefined;
		//	this.numOfTries = 1;
		//	this.feedback_list = undefined;
		//	
		//	this.tracking = undefined;
		//	this.weighting = undefined;
		//	this.objective_id = undefined;
		//	this.latency = undefined;
		//	
		//	this.navigation = undefined;
		//}
		//
		//// Inherit Object properties
		//_global.LToolBox.prototype = new Object();
		//
		//
		//// SECTION 2: GRAPHIC INITIALIZATION HANDLING
		//
		//
		//// 2-1: Locate a named text field and set its value
		//
		//LToolBox.prototype.setTextField = function (fieldName, val) {
		//	
		//	eval(fieldName).text = val;
		//}
		//
		//
		//// 2-2: Locate a named component and set its label
		//
		//LToolBox.prototype.setCompLabel = function (UIComponent, val) {
		//	
		//	eval(UIComponent).setLabel(val);
		//}
		//
		//
		//// 2-2: Locate a named component and set its changeHandler
		//
		//LToolBox.prototype.setCompCallBack = function (UIComponent, val) {
		//	
		//	if(eval(UIComponent).setClickHandler){
		//		eval(UIComponent).setClickHandler(val);
		//		
		//	} else if (eval(UIComponent).setChangeHandler){
		//		eval(UIComponent).setChangeHandler(val);
		//	}
		//}
		//
		//
		//// 2-3: Locate a named component and set its enabled state
		//
		//LToolBox.prototype.setCompState = function (UIComponent, val) {
		//	
		//	eval(UIComponent).setEnabled(val);
		//}
		//
		//
		//// 2-4: Locate a named component and return its label
		//
		//LToolBox.prototype.getCompLabel = function (UIComponent) {
		//
		//	return eval(UIComponent).getLabel();
		//}
		//
		//
		//// 2-5: Locate a named control button component and set its initial state
		//
		//LToolBox.prototype.initControlButton = function (callBack) {
		//
		//	var initial_state;
		//	
		//	if (this.feedback == true){
		//		initial_state = "Check Answer";
		//		if (this.navigation == "Auto GoTo Next Frame"){
		//			trace("WARNING: Feedback must be false and Tracking turned true \rto use Auto GoTo Next Frame. Navigation reset to Next Button.");
		//			this.navigation = "Next Button";
		//		}
		//	} else if (this.tracking == true){
		//		initial_state = "Submit";
		//	} else if (this.navigation != "Off"){
		//		initial_state = "Next Question";
		//		if (this.navigation == "Auto GoTo Next Frame"){
		//			trace("WARNING: Feedback must be false and Tracking turned true \rto use Auto GoTo Next Frame. Navigation reset to Next Button.");
		//			this.navigation = "Next Button";
		//		}
		//	} else {
		//		initial_state = "";
		//	}
		//	
		//	this.label_state = initial_state;
		//	this.setCompLabel(this.Assets.ControlButton, initial_state);
		//	this.setCompState(this.Assets.ControlButton, false);
		//	this.setCompCallBack(this.Assets.ControlButton, callBack);
		//}
		//
		//
		//// SECTION 3: FEEDBACK EVENT HANDLING
		//
		//// 3-1: Set event handler to populate the feedback field
		//
		//LToolBox.prototype.setFeedback = function (val)
		//{ 
		//	if (this.feedback == true){
		//		
		//		if (val.toLowerCase() == "init"){ // Use "init" for initial feedback.
		//			this.setTextField(this.Assets.FeedbackField, this.feedback_list[0]);
		//			
		//		} else if (val.toLowerCase() == "button"){ // Use "button" for transition feedback
		//			var buttonState = this.getCompLabel(this.Assets.ControlButton);
		//			this.setTextField(this.Assets.FeedbackField, "Click the "+buttonState+" button.");
		//			
		//		} else if (val.toLowerCase() == "c"){ // "c" for correct evaluation result
		//			this.setTextField(this.Assets.FeedbackField, this.feedback_list[1]);
		//			
		//		} else if (val.toLowerCase() == "w"){ // "w" for incorrect evaluation result
		//			if(this.numOfTries > 1){
		//				this.setTextField(this.Assets.FeedbackField, this.feedback_list[3]);
		//			} else {
		//				this.setTextField(this.Assets.FeedbackField, this.feedback_list[2]);
		//			}
		//		}
		//	} else {
		//		this.setTextField(this.Assets.FeedbackField, "");
		//	}
		//}
		//
		//
		//
		//// SECTION 4: FEEDBACK EVENT HANDLING
		//
		//
		//// 4-1: Build Event Handler for navigation calls
		//
		//LToolBox.prototype.setNavigation = function ()
		//{ 
		//	if (this.navigation == "Off"){
		//		
		//		this.setCompState(this.Assets.ControlButton,false);
		//		
		//	} else if (this.navigation == "Next Button") {
		//		
		//		if (!this.buttonFlag || this.buttonFlag == false){
		//			this.setCompLabel(this.Assets.ControlButton,"Next Question");
		//			this.buttonFlag = true;
		//			
		//		} else {  
		//			
		//			if(this.navAction == "Stop"){
		//				if(this.navLabel == ""){
		//					eval(this.assets_path.nextFrame());
		//				} else {
		//					eval(this.assets_path.gotoAndStop(this.navLabel));
		//				}
		//				
		//			} else if(this.navAction == "Play"){
		//				if(this.navLabel == ""){
		//					eval(this.assets_path.gotoAndPlay(this._currentframe+1));
		//				} else {
		//					eval(this.assets_path.gotoAndPlay(this.navLabel));
		//				}
		//			}
		//		}
		//		
		//	} else if (this.navigation == "Auto GoTo Next Frame") {
		//		eval(this.assets_path.nextFrame());
		//	}
		//}
		//
		//
		//
		//// SECTION 5: TRACKING TOOLBOX
		//
		//
		//// 5-1: Get date and time stamp and start session timer
		//
		//LToolBox.prototype.sessionStart = function () {
		//	
		//	this.dateStamp = this.getDateStamp();
		//	this.timeStamp = this.getTimeStamp();
		//	this.sessionTimer("start");
		//}
		//
		//
		//// 5-2: Stop session timer and return latency
		//
		//LToolBox.prototype.sessionStop = function () {
		//	
		//	this.latency = this.getLatency(this.sessionTimer("stop"));
		//}
		//
		//
		//// 5-3: Format data and submit tracking
		//
		//LToolBox.prototype.submitScore = function () {
		//	
		//	if (this.weighting <= 0 || this.weighting == undefined) {
		//		this.weighting = 1;
		//	}
		//	
		//	var weight;
		//	
		//	if (this.result == "C") {
		//		weight = this.weighting;
		//	} else if (this.result == "W") {
		//		weight = -1 * this.weighting;
		//	}
		//	
		//	if (this.tracking == true){
		//	
		//		var intData = this.dateStamp+";"+this.timeStamp+";"+this.interaction_ID+";"+
		//		this.objective_ID+";"+this.interaction_type+";"+this.correct_response+";"+
		//		this.student_response+";"+this.result+";"+this.weighting+";"+this.latency;
		//		
		//		//trace("intData: "+intData);
		//		
		//		fscommand ("MM_cmiSendInteractionInfo", intData);
		//	}
		//	_root.QuizTrack.countScore (weight);
		//}
		//
		//
		//// SECTION 6: COMMON TOOLBOX
		//
		//
		//// 6-1: Return formatted date properties
		//
		//LToolBox.prototype.getDateStamp = function () 
		//{
		//	var dateObj = new Date();
		//
		//	var year = dateObj.getFullYear();
		//	var month = this.formatNum(dateObj.getMonth()+1);
		//	var day = this.formatNum(dateObj.getDate());
		//	
		//	var dateString = year+"/"+month+"/"+day;
		//	return dateString;
		//}
		//
		//
		//// 6-2: Return formatted time properties
		//
		//LToolBox.prototype.getTimeStamp = function () 
		//{
		//	var timeObj = new Date();
		//
		//	var hours = this.formatNum(timeObj.getHours());
		//	var minutes = this.formatNum(timeObj.getMinutes());
		//	var seconds = this.formatNum(timeObj.getSeconds());
		//
		//	var timeString = hours+":"+minutes+":"+seconds;
		//	return timeString;
		//}
		//
		//// 6-3: Start or stop the session timer to calculate latency
		//
		//LToolBox.prototype.sessionTimer = function (action) 
		//{
		//	if (action.toLowerCase() == "start"){
		//		this.startTime = int(getTimer()/1000);
		//		
		//	} else if (action.toLowerCase() == "stop"){
		//		this.stopTime = int(getTimer()/1000);
		//		var elapsedSec = this.stopTime - this.startTime;
		//		return elapsedSec; 
		//	}
		//}
		//
		//
		//// 6-4: Return formatted date properties
		//
		//LToolBox.prototype.getLatency = function (timeInSec) 
		//{
		//	var l_seconds, l_minutes, l_hours, timeInHours;
		//	
		//	if (timeInSec <= 9) {
		//		l_seconds = "0"+timeInSec;
		//		l_minutes = "00";
		//		l_hours = "00";
		//	} else {
		//		l_seconds = timeInSec;
		//		l_minutes = "00";
		//		l_hours = "00";
		//	}
		//	if (l_seconds > 59) {
		//		l_minutes = int(l_seconds / 60);
		//		l_minutes = this.formatNum(l_minutes);
		//		l_seconds = l_seconds - (l_minutes * 60);
		//		l_seconds = this.formatNum(l_seconds);
		//		l_hours = "00";
		//	}
		//	if (l_minutes > 59) {
		//		l_hours = int(l_minutes/ 60);
		//		l_hours = this.formatNum(l_hours);
		//		l_minutes = l_minutes - (l_hours * 60);
		//		l_minutes = this.formatNum(l_minutes);
		//	}
		//	timeInHours = l_hours+":"+l_minutes+":"+l_seconds;
		//	return timeInHours;
		//}
		//
		//
		//// 6-5: Return formatted number - convert from single digit to double digit
		//
		//LToolBox.prototype.formatNum = function (num) {
		//	
		//	if (num <= 9) {
		//		num = "0"+num;
		//	}
		//	return num;
		//}
		//
		//
		//// 6-6: Trace the properties of an object and return its values in an Array
		//
		//LToolBox.prototype.getObjProp = function (objName, Trace) {
		//	
		//	var objNameArray = new Array();
		//	var i=0;
		//	
		//	for (x in objName){
		//		objNameArray[i] = objName[x];
		//		if(arguments[1] == true){
		//			trace(x+" : "+objName[x]);
		//		}
		//		i++;
		//	}
		//	return objNameArray.reverse();
		//}
		//
		//
		//// 6-7: Trace Session Object properties to confirm tracking
		//
		//LToolBox.prototype.reportToOutput = function (defined) {
		//	
		//	var x,y;
		//	
		//	for(prop in this){
		//		
		//		x = this[prop];
		//		y = typeof(this[prop]);
		//		
		//		if(defined == true){
		//			if(x != undefined && y != "function" && y != "object" ){
		//				trace("this."+prop+" : "+this[prop]);
		//			}
		//			
		//		} else if (defined == false || eval(defined) == undefined){
		//			trace("this."+prop+" : "+this[prop]);
		//			
		//		} else if (defined.toLowerCase() == "object") {
		//			if(y == "object" ){
		//				trace("this."+prop);
		//			}
		//			
		//		} else if (defined.toLowerCase() == "function") {
		//			if(y == "function" ){
		//				trace("this."+prop);
		//			}
		//		}
		//	}
		//	trace("-------------------");
		//	trace("");
		//}
		//
		//#endinitclip
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.LGlobalClass, null, null);


(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Adverb6_whenwav");
	}
	this.frame_11 = function() {
		playSound("Adverb6_canTheyPlaywav");
	}
	this.frame_34 = function() {
		playSound("Adverb6_hereSoonwav");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(23).call(this.frame_34).wait(32));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AWyxtIpAABIh/gBIjIAAIh1AAIhaAAIoxAAIi3AAIpFAAQgCAAgDAAInyAAAXHRnIAByMIAAhAIABv+AV+RsIhfAAIhpAAIhaAAIgyAAIg8AAIgwAAIkrAAAWaRsIgcAAAWVRsIgXAAA3CRuIAzAAICbgCIAfAAICKAAIHLAAIAhAAIDYAAIA8AAIB+AAIAlAAICNAAAgZRsIADAA");
	this.shape.setTransform(-0.5,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AGER1IAGAAIEvAAIA+AAICbAAIBKAAIBSAAAwtx2IAAARIAAHZIAAFYIAAOuIAAAtIAAFwIAAAzIAAAtAF/R1IACAA");
	this.shape_1.setTransform(-41.6,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#010101").s().p("AgwgPIBiATIgCABQgaALgUAAQggAAgSgfg");
	this.shape_2.setTransform(40,86.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEDE94").s().p("AhYFXIAOgTIACANQAFAPALAKQAiAgADAoIgTAJQgwgngCg9gADxGdIACAAIAAAEIgCgEgAjwlRIgCgDQAWgzAsgvIAJgDQAPgEgBAOIhMBgg");
	this.shape_3.setTransform(13.9,65.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AALClQgBgMABgOIC7AfIADATIgNAHQgpAUgvAFIgLAAQhGAAgIg4gAjuCoIAKhJQAJg7gPg3IgDgLQgFgYgBgXQgDhLAxg5QADAAACABQBXAsBhgHIANABQBqACBag0QAIARAFATQAHAVAKATIADAFQAQAggJAlIgBAAQgcAPgegEQh/gOhoAnQgsAQgpAZIAGAMIgBAXQAAAUANALQAwAtA7AgQACAVgFAUQgCALgKgDQgXACgXAAQhWAAhSghg");
	this.shape_4.setTransform(37.9,84.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#141414").s().p("AgrAAIARgGQA+gWAJAaIhYATg");
	this.shape_5.setTransform(31.5,-23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3D28D").s().p("ACYLVIh0gKIAHgOIgHgZIAAgEQBnAOBhgTIAIAfIgSAbgAhALVIhhgIIAEgfIAUgOIgagLIgCgKIC9AhIAAADQADAfgcAHgAj7IOIgDgEQhRjABGjRQglhAgDhKIAsgFIACgHQgCgagOgXIAUgJIBECUQgSBLAeBBQgiAxgHA7QgDAcAGAaIADALQABAXAFAZQAEA6gUAzIgFgTQgQAzAEA2QgkghAWg6gAheD3QgfgKgegGQgEgrgGgrQgFggABgfIAEgpQghgNgOghIgBgDQgMgxgKgyIBugKIDgDVQASAQAXADQASACAQAAQAEgBAEgCQAbgGAZgHIgGBuQhJAuhYAGIgPABIghACQg6AAg3gTgACsBeQiAgfhPhrQgUgcgegRQhAgnARg6IAhgIIAQgHIAcAOQBfAwBTA/QAcAXADgiQgWgcASgjIAJgPIAKgPQANgZAcgLQAEgBAAgLQhOAcgRBcQAAABgFAAQhOgshIgsQgEgCgFAAQgcgPgcgMQhagmhYAgIgQgSIAeg8QAegYAhgLQA1gOAtgRIAJgVQAYgJAbgBQBfgCAehTQgEAAgCACIg8AxQg4Avg8gkQhRgyAChjIAFgBIA3gUQg3gTgUgzIAYgZIARAaIBCgxIgCAYIA8gfIAOAYIAUABIAQgbIAjAtIANgWIAaAEIgLAeIAagDQAaAagLAlIgYAlIAsCPQB7AvBsBCIAJCAIg8A7QAECLh1BNQgMAIgNAAQgHAAgHgCgAiPngQAYAbA2gEQALgTAdgFQAbgEAHgYQACgKgVARQg2AqhRgcQAAAGACACgAhkoRIATAMIAXgRIgJgGIgQAIIgDg1gAg5p7IgSAIIABARIBXgVQgFgOgTAAQgRAAgdAKgAk9g5IADgnIAJgBIAog9IgDgSIgRgBIgLgMIhAARQACgOgQADIgJAEQBjhBBjA5QABBShVgQIgkA1IAUAeg");
	this.shape_6.setTransform(34.6,39.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6666CC").s().p("AAfCsQgVhqBBhOIgEAAQgOAGgLgDQghgIgJgfQgEADgBAEQgEAOgHAHIgoAoIgHAHIgbAZQhEBAhLA4QgBg3gMg1QgKgogRgmIgFgNIBoAeIgGgUIhegpIABhdIAPgGIAAgKIA4giIAsAOQAaAbAkALIAcAJQCSAACUgRIAFAeIADAGQBACdgvCmgAC6hDQgDAYgSAQIADATQAsglAMhPQgeABgIA4gAjJg3QANAQARANIAVAMIheiFQAKA2AhAmgAi/h4QAVA0AuAcIAAgBIhQh+QAEAZAJAWgACPhfQgQAQgWACIAFAPQA9gLAcg4IADgWQgaAXghAhg");
	this.shape_7.setTransform(87.5,61.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AiaLLIDXAAQgLANgTAAIgpABQhKAAhGgOgAB5LLIghgHIAAgRIChgOIgCAmgAA9LLgAiaLLIgRgsQAQAIARAHQBkApBqgaIgHAOgAEcF3QgMgEgLgJIgNhlIAvg7QAPAigOAiQgQAlACAiIAuAKQgEALgLAJQgJAGgKAAIgKgCgABiEtQhlgChbgoQgSgIgIgNQgcgvgDg8IAAgKQAtAFAWgSQADgCAAgFQAMAJANgFQA3gTAhg4QAbgsgkgnQALgFANACQAmgGAjgKQATgGgBgUQgRgVgagFQhSgKhOAaIhWB3IgDAKQhLgQAWhHIA/AXQgZgxg0gLIg3B2IhzAaIASARQBjgsBgAsIAQgcIAVABIBWiBQBfgoBOAyQgPAPgXgDIgPgGIhUAZIAuAuIgpgNIAdAoQgNAHgSgIQgbgLADAOQAMAGAGALQAcA0g/AKIAKg0IgsA4QhPALhHAmQhuA6hmggQgggLgJgeQgyijCZhkIAKhGQCOh1C3giQANgCAEgKQAhhag+heIgCABQgOAUgXAKQgJAEgIgEQgEgGgCgGQgSg5AvgZIAIAkIAWhWQAMAlAmADQgTguAQgwQBfgfBfAdQAjAggGAxQA4AugOBHQgFAfgTAXQhCBOhqgnQAoAxBNgYQArAlA1AWQAfAMAiABIAaACQBbALAjBQQhdAUgoBbQgbA8BNgGIAFAjIgSgXQgQBKgpA/IgCATIhiC/Qg3AKg3AAIgKAAgACNA+QgoBEhKAhIgTAIIAFAPQBrgrArhhIgCgBgAmRgwIAJASQAQguAsgYIATgRIgMgKgAASn9QAEAFAGADQBVAyBLhDIAKgKIgKgcQg9AXhEgPIgzgKQgIAcASAVgACZplIAJARIg3AQQAdANApgRIAAgiQgDgEgBgEQgOgngUgrQhYgKgjAxIADAwIAZAKIAggFgAE+C+IgGgBIgOgSIAehGQAfgnASg6QABgDAHgEQA1gkgygdIAdgwQALADAHAJQAPASAGAVQAXBLAdBHQhOAvhLA0QgPAKgQAAIgGAAg");
	this.shape_8.setTransform(-45.8,40.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AiGBDIgUgeIAPgKQAygoAZg7QAggRgQAoQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABgBQAegKAVgYQAzACguAXIAFAAIAVgBQA6gEgiAPIAFABIBaAOIgFAHQhegFhZAdIgPAZIgagRIAJA6IgJACIgVgTIgPAjg");
	this.shape_9.setTransform(-45.5,-32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("Ah/BpIAPgbQA2hYBTg4IAPgKIAMgHQAfgRAjgOIAKAIIgfBJQgKAZgGAZIgCAFQgIAoACAqQgdgCgdABQg2AAg3AIIgbAEg");
	this.shape_10.setTransform(77.7,74.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgDHcIAQgNIgEgNIgbgLIgQAuIi8gQIAkgnQgtgGgvAKQhcAXhcgpQgagLgagQQAYgKAYgGQBzgdB1ApIgKgoQAtgRAaAjIAHgTIAPAGIgVA7ID7AAIgEg2QAogcAjAaIgaAiIAXADIAIgFIAigKIgEgUQCrAOCfBCQieA/ilAAQhhAAhigWgACTG4IADAFQAGAvAxgPIAKgCQgMgmgjAAQgJAAgMADgAGmGsIABgCIhigLQAnA5A6gsgAlbGWIACgBIhjgUQAdA0BEgfgAC8nJIgMgkQBNgNBOAhIAFAQQgkAMgkAAQglAAgngMg");
	this.shape_11.setTransform(79.5,46);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("Aj0CoIAAiWQAVgjgBgsQgEhrBLgzQAkAWAnAOQCXA1COgzQgGAzAGAzQALBeASBeQAEARgHAOQglBKhjgOIgKgWIgGiyQgQBaAMBsQhDAWhBAAQhlAAhgg0g");
	this.shape_12.setTransform(-43.5,87.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC9900").s().p("AjZDVQgWg7ADhCQA9gFA8gOQBmgUBMAIIiAAdQAOAuAMAvQADAPgOAEQhNAWhUACQgEgEgCgFgADCCgQgjgmAdgxIgtgjICNANIAJARIAABaIhaAKIgJgIgAj0gUQADgKAGgCQD1grD8gbIg3gOIAYgVIgmAGIgFgPQgoglgtAWIAEAeIAcALIAmgBIADAEQjPAijhAWIgKhuQEKgMEHgmIAUDvIoMAsQgPgnAMgrgAi6gLIAFAQQAvAKAxgZIABgBIgagHgAkfhlQgBgVgEgRIAGgCQARASgJAqQgDAQgCAAQgEAAAAgkg");
	this.shape_13.setTransform(-101.3,-55.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996600").s().p("AB6KiQgdgEgDgdIAXgyQBkgTgeBgIgLAGgADsk/IAAgFIAEAGgAjvmgIAFgCIAAAEgAjGqgIAFgCIgDAGg");
	this.shape_14.setTransform(94,44.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AChNtIlVgKIgKheIGjAfIgBA5IgSAQgAhxL+IgGAAIgJgBQhEgJhEgNIgugGQhBgEg+gWIgJgEQgcgLgfgIIgEgGIgGgLQgDgHgBgHQgBgHAAgIIAAgTQAMAHAMAGIApARQBFAaBJALICkAXIAjAEQAXADAXABQAkACAkgBQBhAIBiAEIAaAAQBHgBBFgOIA3gIQAqgCAkgTQAPgHAJAIQgBAGAAAGQABAPgOAGQhWAmhlAKQhVAFhUAAQiFAAiEgLgAE7kaIgigKQAAgFACgFQABgEADgEQAGgHAHAAQADgGAFgDIAFgDQAEgCAFgBIAIgDIABgCIAEgDIABAAQAOAZgPAjIgBACQgFADgEAAQgGAAgEgHgACpscQAugcgZgoIAZgGIAOAiIgZApIAAAQQgDAggQAagAFeriIBig1IAMAGQgeAYglAVQgNAIgMAAQgKAAgIgGgAB3sSQAsgfgYgxIAHgEIASgGIACAkIAKAPIgZAsIAIAPIgZAigAAXr7IgCgEQgCgwgngVQAsgNAXAsIgIAsgAENsSIAjgtQAUgTAZgLQAHgDAIADIgFAPIhYBAg");
	this.shape_15.setTransform(79.1,24.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AS9RtIgygZIAAgEIgDgOQgDgPACgQQABgLAJgHQA2gJA2gOQBZgagghYQgDgHgDgFIgJgKIgDgCQhSgPhHglIAVioIBOgfIAXAlIAsgpIAEAGIAGAKIAEAHIAEAGIAKAJQAJAIAKACQAHACADgCIAQgsIAPgDIAVAmIAFADIAQAYQAQDVgDDXIiaAOgAisRlQgbgsAlgeIACgBIACgCIgdjvQAtALAeghQAKgLgCgRIgBgDIgdgMIA1gqIAxAzIAiglIAMAHQAJAHADAJQAZBJADBTQAEBQgEBPQgDAxApAGIAIAQIgCACQg1AFg2ABIgGAAIgDAAIgCAAIiNAAgAxERtIhegGIAAgXIgLgFIAFgYIAMgGIBqAvIgDglIgWgTQCDgwCSALQAIgJgSgLQhzhDiMADIEshaQhwgfhyAFQhZAEhaAaIBzhZQAbAdAjABQALABAMgCQAcgjAoAGIAJAOIArgqIBGAvIAqg5IAUA+IAlgsIAuAjQgyCZAsCUIAUAGIADARIAJAHIgCAXgAztRtIg5hBIgjAtIgbAEIgRgwIg7AsIgRgXIAAgzIAIj0IAmACIA8h2QAXBVgDBfQCGhcCcg6Ii0CgQAGAEAGgBQC6gnDAAQQiNAyiVAeIAJATQB1AOBzAcIAnAJQgUANgXgFQiIgThgBMQgpgQgrAMIAAACQALAogZAfgA0sMXQgFhRgShHQhFAygYBQQgdgugEg0IAAgsQABgTAFgTIA6AgIgBiEIA3BZIAfgIQAEAOAXAFIBYhPIgmB3QArglAigyQAGAMAAAPQgDA1AoARIBQgoIhKBhIAEAXQhzAVhVBPQgHgOAAgOgA2oraIgPgNIgEmDIGaAAIAIAGIBKgIIAFAAQBFAIBFABQCuADCrALIAIAQIgEAFQgEAHgIACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBQgjgLglgDQgugDgBAfQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAZAQQAdASAJAgQg/gOhBgNQhEgNgmAPIAQAYQAeAugGAoIgSgOQgagTgfgHQgYgIgVgMQgNgIgMAHQgnAYAYA5IhagoQgSAGgIAOQgFAJgCAKQgHAdgVATIgDgCQgIgJgEgOQgDgMgFgLQgMgYgYgHIAABSQgMAIgMAGQgLAFgLADQgeAAgYgVIAABMQgJABgIgEQgfgPgfAEQgkAFAFAqIhZhJIAOBBIgqAhgASTtQIg1hbIhWC9QgOgHgCgSQgKhdAThcQADgKgGgKIjMDLIgLgGQAYhcA6hPQAWgeALgkQhrAFheAtQgdAOghgKIgHgEQBXhHBrggQAVgFAFgWQhdAMhdgCQgTAAgPgKQBXgfBdALIAUAAQAIAJAPAEQAPAEAWgBQCqgGCqAAQBdgEBeACQATABAOALQAJAygTAoIgeA8IhSgPIAeBxIh4hDQgPAGAEAQQARBJgEBKQg3gmgkg8g");
	this.shape_16.setTransform(-1.2,-1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC33").s().p("AguM2QgDgOABgOQACgjAjgMIgKgUIAFgDIAGgDQADgDAAgDIgCgIQgTADgPAPQgZAZgcgSQA+gdApgsIghADQAOgOAEgUQAEgQgEgJIhOAiIAWhUIA5gIQhDAEAIhDIAIAFQAmAVArgGQAAAPgDAOQgMBCAtAtIgpCuQgJALgMAFIgJAAQgQAAgMgKgAAYHnQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQhCAQgKg6IBdgRQgFgDgEACQhiALANhVIBdANIhSgiQgFgIAAgIQgCgQAOgHQAGAAAEADQAsAXAugWIhogWIgEggQA3AZAygdIABAAIhqgQIAHgvIBMAKIAAgBIgCgEIgEgEQgFgGgJgBQgIgBgHACQgYADgVgNIgBgwIADgCIAEgCQAFgCAGAAIAWABQALABAKAJQAIAFAFgHIhWghIACgmQANgDAOAFQAjAPAWgNIgugGIgMgGQgPgJgJgRQgEgJADgGIACgCIAEAAIAKADQAQAEASABQAhAGAMgWIgCgCQgIgHgKADQgXAGgYgJQglgNgEgoIAaAIQASAEATgDQAcAAANgTQgJgLgRAGQgTAHgSgCQgQgBgJgLQgWgYAGgiIB3AKQASA+gFBEQgGBSAJBSQALBlADBoIAKAAIAOAKIhUCMgAAIicQhfgCALhjIAWgKQAXgFAIAUQAPAmAPAiIAOgdIAAAzQgDADgFAAIgFgBgAgjrAIAJgIIhEgBQgCgEACgEIACgGIAEgFQAIgHALgGIgkgIIgBgYIASgHIgDgcIAzBAIAghTIAUCDg");
	this.shape_17.setTransform(-101.3,-6.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CC33").s().p("AsPFUQhcgHhdgCIivgEIHKAAQgEAGgIACQgaAFgbABIgKAAIgXgBgA0dFLIgDgEIAfAAIgIAEIgUAAgAVviKQAQAIABAPgA1vjwIACgQIAqhUIAJAYIgdAtQgNAWAFAOIggAHg");
	this.shape_18.setTransform(4,79.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C6FFFF").s().p("A2zGYIgGgGIgOgNIAAlKIAOAAIAAFXIAAlXQA1gkAwgkIAPANQADAGADAHQAOAYAUgLQgDgsAigYIATAMIBOAAIgNg4IADgBQBWgIACBNIgCADQhngKhLAoIAEAYIgHABIgDgLQgSAlAKAqQARBLAFBMQADAoANAoIi6BSgAUyDHQgCgVgJgQQgfg3g/gEIgogfQg7gMg4AJIjlhzICfiuQAMByASBzQBEhUAchpQA3BsBjBIQAIhWAChUICCBQIgfh8IA2AOIAlAAIAAHLgArPg8IjmAUIgoiWQBGAUA3ArQgFg2gMg6IAAgCIAMALQBfAWBHBDIguiQQBMgNBSAoQAsAWAwAGQgShGg6guICGgDIgSgpQAmgPAogIQBEgNBKAJIApAEQB+ALB9ABQE1AAE1AHIglAVQBJAsBkgeQiLAug3B0QBSgWBTgmQAwgWA2gBIAUAAIhuDcQiXgviOhDQhRgmhMgwQhQgPhMATQg7AOg5AbQg3Aag0AdIjcBkIAAAKIi0BFIAAAKIjcBaIgbAJgAjGmdIi3AAgA25A7g");
	this.shape_19.setTransform(-2,-73.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ArbF/IAEgsIAvgOIgCAdIgZASIARATgAqhF/IAdg/QAMgMAQAKIAGADIgHAoIgagCIgGAPIAMANgALHEBIACgCIADgEIABAAIABgBIACAAIAKABIABAAIABAAIAAANIgGgBIgFABIgHACIgDABgAh9kLIgWAHIAAAKQgUAnAEgxQADgbgRABQgKAAgIADIgbg3IAwgaQBbgqBfAaIBvBBIABA8IgpAJIATAQIAPAkIiuhCIgEBUQgsgmgUg1g");
	this.shape_20.setTransform(29.8,-60.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC9966").s().p("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");
	this.shape_21.setTransform(0,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AxMEhIAAgUIBrAQIgBABQgaAPgdAAQgZAAgagMgAQ1BTIgFABQgKAAADgLQAHAMAMgIIABgCQAPgigOgaIgBAAIABgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQACgCAEAAIAHACIgEBOIgDADQgDAHgEAAQgFAAgFgLgAQEA7IAFgGQgCAFAAAFIgDAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAgBgADMgVIAOg5IACA2IARgJIAJAHIgYARgAODiXIACgQIAUAOIAjAEIAJgQQADAAACACQANAMgLAKIgMAPgABojrIBHgmIgQgRICqgFIAogFIAzA2IgaAKIgGAUIgdgEIgLAHIgLgZIgmAIIgNgGIgsAMIgDgQIhOAsIAGgfIhoBHgANWi+QgIgIAAgLQAAgLAIgIQAHgIALAAQALAAAIAIQAIAIAAALQAAALgIAIQgIAIgLAAQgLAAgHgIgANfjeIgBABIgBABIAAAAIgBACIgBADIAAALIACgBQAHgGAJgBIAEABIAAgHIgDgCIgGgDIgIAAIgBABgAPBjHQgIgJAAgMQAAgNAIgJQAHgIALAAQAGAAAGADQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIABACIACABQAHAJAAANQAAAMgHAJQgIAJgKAAQgLAAgHgJgAPNjtIgDAEIgCABIAAALIACgBIAIgCIAFgCIAGABIAAgNIgCAAIgBAAIgKAAIgBAAIgBABIgBAAIAAAAgAMjjvIAlglIAcALIgXAHIgVAjgAPLkVIgLAAIgDgMIABgCQA7gHgBAnIgUAFg");
	this.shape_22.setTransform(4.1,-11.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#222222").s().p("Ah8BAIBzgaIA2h2QA0ALAaAxIhAgXQgWBHBMAPIACABQAFAAADACQACADAAAFIgUgBIgRAcQhfgshjAsg");
	this.shape_23.setTransform(-72.5,38.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#101010").s().p("AhKBvIgKAAIAsg3IgKAzQA/gKgcg0QgGgKgMgHQgDgNAbAKQASAIANgHIgdgnIApANIgugvIBUgZIAPAGQAXAEAPgQQhOgyhfApIhWCAQAAgFgDgCQgCgDgFAAIAAgKIBWh2QBOgaBSAJQAaAFARAVQABAVgTAFQgjALgmAGQgNgDgLAFQAkAogbAsQgiA4g2ASQgEACgFAAQgIAAgIgGg");
	this.shape_24.setTransform(-46.5,39.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AhIASQgGgDgEgFQgSgUAHgcIA0AKQBDAPA9gXIAJAcIgKAJQgrAmgtAAQgiAAgkgVgABBAAIAGgDIiGgFQA5A2BHgug");
	this.shape_25.setTransform(-35.6,-11.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#030303").s().p("AhwAvQgCgCAAgFIDbhZIAKAAIjbBjQgFAAgDgDg");
	this.shape_26.setTransform(-56.5,-65.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0A0A0A").s().p("Ak8KeQAAgFgDgCQgCgDgFAAQgtgsAMhDQADgOAAgPIBUiLQAvgjAEg4IABgFQCIiCC8gbQAYgFABgZQACgfgLggQgKgcgDgdQhLAkgNhKQgFgZABgYQABgOgIgLIgLAhQglg7A4g4QADgDABgEIgkgGIAkgbIgLgZIAYgNIAaAdQAagEALgcQADgGAEgGIAKAAQgZA6gyAqIgPAKIAUAeIAYAQIAPgjIAVATIgWBWIgIgkQgvAZASA5QACAHAEAFQAIAFAJgFQAXgKAOgTIACgCQA+BdghBaQgEAKgNADQi2AhiOB1IgKBGQiZBlAyCjQAJAfAgAKQBmAgBug6QBGglBPgMIAKAAQAAAFgDACQgWATgtgGIAAAKQhMAohUAWQg1ANg4AFgACtprIAAgKIC0hGQAFAAACADQADACAAAFIi0BGIgKAAg");
	this.shape_27.setTransform(-63.3,-8.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2E2E2E").s().p("AgtALIgFgQIBLgHIAaAHIgBABQgjARgiAAQgNAAgNgCg");
	this.shape_28.setTransform(-114.9,-55.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0B0B0B").s().p("AL7I3QgIgVgFgaIBQB+IAAACQgugdgVg0gAs5phIgEgeQAsgWApAlIAFAPIgUAAIAAAKIgmABg");
	this.shape_29.setTransform(-8,-7.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#151515").s().p("AgwgPIBhALIgBACQgZASgWAAQgbAAgWgfg");
	this.shape_30.setTransform(116.9,89.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#191919").s().p("AgegNIgDgFQAzgNAQAvIgKACQgMAEgJAAQgcAAgFgjg");
	this.shape_31.setTransform(97.6,91.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#121212").s().p("ALLA7QASgQAEgYQAIg4AegBQgNBOgsAlgAsGAxIAUgIQBJghAphDIAUgRIABABQgrBghrArg");
	this.shape_32.setTransform(32.5,52.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0D0D0D").s().p("AJYHiQAXgCAQgQQAhghAagXIgEAWQgcA4g9ALgAMCHiQBIAAgoggQgpgiAxgYIAKAAIgUAUIAdA0QADALgIAKQgJAKgPgDIgJABIgJABQgMAAAAgMgAn/G9QgDgDgFAAIAAgKQAqg/APhLIASAXIgFgjQAzAeg2AkQgHAEgBADQgSA6gfAnQAAgFgCgCgAsAmlIgGgBQAigPg6AEIgVABIgFAAQAugXgzgCIAAgKQBIgfBCACIg6AnICLAMIhZAcIAoAAQAAAFgCABQgIAEgKAAIhZgOg");
	this.shape_33.setTransform(38,5.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0C0C0C").s().p("AMlHRIgFgeQiUARiTgBIgcgIQgjgMgbgaQAFAAACgDQADgCAAgFIBGAoQAUgBAUACQBRANBPgLQCQgSgbiWIANgPQAFAAADACQACADAAAFQgEAdgGAeQAAADgDACIgHAGIAACCIgKAAgAqPjEIA4gQIgKgRIhNgDIgfAFIgagKIgDgwQAkgxBXAKQAUArAOAnQABAEADAEIAAAiQgXAKgUAAQgOAAgNgGgArekcIgEAsIApAIIgRgTIAZgSIACgdgAqEjsIgMgNIAGgPIAaACIAHgoIgGgDQgQgKgMAMIgdA/IAkAEgAsomIQAQgnggARIgKAAIAAgKIBGgoIgJApIATgBQgWAXgeALIgBAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_34.setTransform(30.5,2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#070707").s().p("Au8EjIBMhPIAMAKIgTARQgsAYgQAugAKjEhQgCgDAAgFQBQgtA6hDQAMgNAKgPQAFAAACADQADACAAAFIhHBPQgkAng1AWQgFAAgDgCgANLjwQgxgEgOgrQgCgGgFgFIgKgKQAfAJATAVQAiAnA6gYQANgFAOgEQAGgBADgGQAMgXAEAZQABAEgFAFQgeAdg6AAIgWgBg");
	this.shape_35.setTransform(9.7,6.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F2F2F2").s().p("AAAgCIABAEIgBAAg");
	this.shape_36.setTransform(106.1,-54.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#090909").s().p("AG4EbIAAgKQArgigPhAIBSgMIAAAKIg8AKQAGAngQAkQgIASgWAHIgKAAgAkYCbQhThAhggwIAAgKIAKAAQAFAAAEACQBJAtBOArQAFAAAAgBQARhcBOgbQAAAKgEABQgcALgNAZIgKAQIgJAPQgSAiAWAcQgCAVgLAAQgHAAgLgJgAojj4QgCgDAAgFQBRAbA2gqQAWgRgCAKQgHAZgcAEQgdAEgLATIgPAAQgqAAgVgWg");
	this.shape_37.setTransform(75,16.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7F7F7").s().p("AhDgOICGAFIgGAEQghAUgcAAQgkAAgfgdg");
	this.shape_38.setTransform(-35.2,-11);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0F0F0F").s().p("AF5LdQgSgOgNgPQghgngKg1IBeCFgAmMp9IAogoQAFAWAJgUQABgCAFAAIBwg/QAIgDAKAAQARgBgDAbQgEAxAUgnQAFAAACACQADADAAAFIgmAuQgSgPAIgfQADgMgHgOQhPA7hYAcIgDABQgEAAgEgCg");
	this.shape_39.setTransform(32.7,-14.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#131313").s().p("AiYA1QgCgDgFAAIAAgKIDbhjQAKATAWgRQADgCAFAAIA8AAIgyBFQgFAAgBACQgJAUgFgWIArg3IkaBpQAAgFgDgCg");
	this.shape_40.setTransform(-12,-83.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FBFBFB").s().p("AhuLBIAAAKQAAAEgCAEgApHKEIADgKIAAAKIgDAAgABFqiIg8AAIAAgLQAygQAsgWIAbA4IhvA+gAHCqAIAAg7ICGA7IgtgEIgBAlg");
	this.shape_41.setTransform(-2.9,-21.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#767676").s().p("AhjAFIAAgDIDHAAIAAADgAhjACIAAgGIDHAGgAhjACg");
	this.shape_42.setTransform(65,-115);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#080808").s().p("Ai9AwQA1gdA3gYQA5gbA6gOQBMgTBQAOQAAAFgCADQgDACgFAAQhggahaArIgwAYQgtAVgyARIAAAKQgFAAgDADQgKAHgIAAQgJAAgFgKg");
	this.shape_43.setTransform(13,-94.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4E4E4E").s().p("AgFADIhbgBQgHgCgGgEIDbAAIAAAGIAAADgAgFADIBzgBg");
	this.shape_44.setTransform(44,-115);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDFDFD").s().p("A29FRIAAgUIAOANQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgBAFIgKAAgAWZkkIAQgGIAGgiIALgEIAEAsg");
	this.shape_45.setTransform(-1,-64.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#171717").s().p("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");
	this.shape_46.setTransform(-1,-1.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#888888").s().p("AiwAEQgOgEgJgHIGPAJQiqAAipAGIgIAAQgRAAgMgEg");
	this.shape_47.setTransform(104,-112.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FCFCFC").s().p("AgDgLIALAGIgPARg");
	this.shape_48.setTransform(79.9,-78.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(3,1,1).p("AWyxtIpAABIh/gBIjIAAIh1AAIhaAAIoxAAIi3AAIpFAAQgCAAgDAAInyAAAXHRnIAByMIAAhAIABv+A3CRuIAzAAICbgCIAfAAICKAAIHLAAIAhAAIDYAAIA8AAIB+AAIAlAAICNAAAgZRsIADAAAV+RsIhfAAIhpAAIhaAAIgyAAIg8AAIgwAAIkrAAAWVRsIgXAAAWaRsIgcAA");
	this.shape_49.setTransform(-0.5,-1.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(3,1,1).p("Awtx2IAAARIAAHZIAAFYIAAOuIAAAtIAAFwIAAAzIAAAtAF/R1IACAAAGER1IAGAAIEvAAIA+AAICbAAIBKAAIBSAA");
	this.shape_50.setTransform(-41.6,-2.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC33").s().p("AguM2QgDgOABgOQACgjAjgMIgKgUIAFgDIAGgDQADgDAAgDIgCgIQgTADgPAPQgZAZgcgSQA+gdApgsIghADQAOgOAEgUQAEgQgEgJIhOAiIAWhUIA5gIQhDAEAIhDIAIAFQAmAVArgGIABgPQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQhCAQgKg6IBdgRQgFgDgEACQhiALANhVIBdANIhSgiQgFgIAAgIQgCgQAOgHQAGAAAEADQAsAXAugWIhogWIgEggQA3AZAygdIABAAIhqgQIAHgvIBMAKIAAgBIgCgEIgEgEQgFgGgJgBQgIgBgHACQgYADgVgNIgBgwIADgCIAEgCQAFgCAGAAIAWABQALABAKAJQAIAFAFgHIhWghIACgmQANgDAOAFQAjAPAWgNIgugGIgMgGQgPgJgJgRQgEgJADgGIACgCIAEAAIAKADQAQAEASABQAhAGAMgWIgCgCQgIgHgKADQgXAGgYgJQglgNgEgoIAaAIQASAEATgDQAcAAANgTQgJgLgRAGQgTAHgSgCQgQgBgJgLQgWgYAGgiIB3AKQASA+gFBEQgGBSAJBSQALBlADBoIAKAAIAOAKIhUCMQAAAPgDAOQgMBCAtAtIgpCuQgJALgMAFIgJAAQgQAAgMgKgAAIicQhfgCALhjIAWgKQAXgFAIAUQAPAmAPAiIAOgdIAAAzQgDADgFAAIgFgBgAgjrAIAJgIIhEgBQgCgEACgEIACgGIAEgFQAIgHALgGIgkgIIgBgYIASgHIgDgcIAzBAIAghTIAUCDg");
	this.shape_51.setTransform(-101.3,-6.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#171717").s().p("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");
	this.shape_52.setTransform(-1,-1.3);

	this.instance = new lib.Whenisthegame();
	this.instance.parent = this;
	this.instance.setTransform(61.4,-48.5,0.763,0.763);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(3,1,1).p("AWyxlIpAACIh/gCIjIAAIh1ABIhagBIoxAAIi3AAIpFAAQgCAAgDAAInyAAAXHRwIAByNIAAhAIABv+A3Ix2IAAARIAAHZIAAFYIAAOuIAAAtIAAFwIAAAzIAAAtA3CR3IAzAAICbgCIAfAAICKAAIHLAAIAhAAIDYAAIA8AAIB+AAIAlAAICYAAIEuAAIA+AAICbAAIBKAAIF9AAIAwAAIA8AAIAyAAIBaAAIBpAAIBfAAAWVR1IgXAAAWaR0IgcAB");
	this.shape_53.setTransform(-0.5,-2.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#009900").s().p("AS9RtIgygZIAAgEIgDgOQgDgPACgQQABgLAJgHQA2gJA2gOQBZgagghYQgDgHgDgFIgJgKIgDgCQhSgPhHglIAVioIBOgfIAXAlIAsgpIAEAGIAGAKIAEAHIAEAGIAKAJQAJAIAKACQAHACADgCIAQgsIAPgDIAVAmIAFADIAQAYQAQDVgDDXIiaAOgAisRlQgbgsAlgeIACgBIACgCIgdjvQAtALAeghQAKgLgCgRIgBgDIgdgMIA1gqIAxAzIAiglIAMAHQAJAHADAJQAZBJADBTQAEBQgEBPQgDAxApAGIAIAQIgCACQg1AFg2ABIiYAAgAxERtIhegGIAAgXIgLgFIAFgYIAMgGIBqAvIgDglIgWgTQCDgwCSALQAIgJgSgLQhzhDiMADIEshaQhwgfhyAFQhZAEhaAaIBzhZQAbAdAjABQALABAMgCQAcgjAoAGIAJAOIArgqIBGAvIAqg5IAUA+IAlgsIAuAjQgyCZAsCUIAUAGIADARIAJAHIgCAXgAztRtIg5hBIgjAtIgbAEIgRgwIg7AsIgRgXIAAgzIAIj0IAmACIA8h2QAXBVgDBfQCGhcCcg6Ii0CgQAGAEAGgBQC6gnDAAQQiNAyiVAeIAJATQB1AOBzAcIAnAJQgUANgXgFQiIgThgBMQgpgQgrAMIAAACQALAogZAfgA0sMXQgFhRgShHQhFAygYBQQgdgugEg0IAAgsQABgTAFgTIA6AgIgBiEIA3BZIAfgIQAEAOAXAFIBYhPIgmB3QArglAigyQAGAMAAAPQgDA1AoARIBQgoIhKBhIAEAXQhzAVhVBPQgHgOAAgOgA2oraIgPgNIgEmDIGaAAIAIAGIBKgIIAFAAQBFAIBFABQCuADCrALIAIAQIgEAFQgEAHgIACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBQgjgLglgDQgugDgBAfQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAZAQQAdASAJAgQg/gOhBgNQhEgNgmAPIAQAYQAeAugGAoIgSgOQgagTgfgHQgYgIgVgMQgNgIgMAHQgnAYAYA5IhagoQgSAGgIAOQgFAJgCAKQgHAdgVATIgDgCQgIgJgEgOQgDgMgFgLQgMgYgYgHIAABSQgMAIgMAGQgLAFgLADQgeAAgYgVIAABMQgJABgIgEQgfgPgfAEQgkAFAFAqIhZhJIAOBBIgqAhgASTtQIg1hbIhWC9QgOgHgCgSQgKhdAThcQADgKgGgKIjMDLIgLgGQAYhcA6hPQAWgeALgkQhrAFheAtQgdAOghgKIgHgEQBXhHBrggQAVgFAFgWQhdAMhdgCQgTAAgPgKQBXgfBdALIAUAAQAIAJAPAEQAPAEAWgBQCqgGCqAAQBdgEBeACQATABAOALQAJAygTAoIgeA8IhSgPIAeBxIh4hDQgPAGAEAQQARBJgEBKQg3gmgkg8g");
	this.shape_54.setTransform(-1.2,-1.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C6FFFF").s().p("A2zGYIgGgGIAAlXIAAFXIgOgNIAAlKIAOAAQA1gkAwgkIAPANQADAGADAHQAOAYAUgLQgDgsAigYIATAMIBOAAIgNg4IADgBQBWgIACBNIgCADQhngKhLAoIAEAYIgHABIgDgLQgSAlAKAqQARBLAFBMQADAoANAoIi6BSgAUyDHQgCgVgJgQQgfg3g/gEIgogfQg7gMg4AJIjlhzICfiuQAMByASBzQBEhUAchpQA3BsBjBIQAIhWAChUICCBQIgfh8IA2AOIAlAAIAAHLgArPg8IjmAUIgoiWQBGAUA3ArQgFg2gMg6IAAgCIAMALQBfAWBHBDIguiQQBMgNBSAoQAsAWAwAGQgShGg6guICGgDIgSgpQAmgPAogIQBEgNBKAJIApAEQB+ALB9ABQE1AAE1AHIglAVQBJAsBkgeQiLAug3B0QBSgWBTgmQAwgWA2gBIAUAAIhuDcQiXgviOhDQhRgmhMgwQhQgPhMATQg7AOg5AbQg3Aag0AdIjcBkIAAAKIi0BFIAAAKIjcBaIgbAJgAjGmdIi3AAg");
	this.shape_55.setTransform(-2,-73.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#171717").s().p("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");
	this.shape_56.setTransform(-1,-1.3);

	this.instance_1 = new lib.Thegameisat300PM();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34.9,-47.6,0.797,0.797);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(3,1,1).p("AWyxlIpAACIh/gCIjIAAIh1ABIhagBIoxAAIi3AAIpFAAQgCAAgDAAInyAAIAAgRAXHRwIAByNIAAhAIABv+A3IxlIAAHZIAAFYIAAOuIAAAtIAAFwIAAAzIAAAtA3CR3IAzAAICbgCIAfAAICKAAIHLAAIAhAAIDYAAIA8AAIB+AAIAlAAICYAAIEuAAIA+AAICbAAIBKAAIF9AAIAwAAIA8AAIAyAAIBaAAIBpAAIBfAAAWVR1IgXAAAWaR0IgcAB");
	this.shape_57.setTransform(-0.5,-2.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00CC00").s().p("AALCLIC7AfIADATQguAag3AGIgLAAQhVAAAHhSgAjuCoIAKhJQAJg7gPg3IgDgLQgFgYgBgXQgDhLAxg5QADAAACABQBXAsBhgHQBxAHBgg4QAIARAFATQAHAVAKATQATAigJAoQgcAPgfgEQi1gTiHBVIAGAMIgBAXQAAAUANALQAwAtA7AgQACAVgFAUQgCALgKgDQgXACgXAAQhWAAhSghg");
	this.shape_58.setTransform(37.9,84.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("Ah/BpQBRibCkhAIAKAIIgfBJQgcBCAEBHQhggFhiAQg");
	this.shape_59.setTransform(77.7,74.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6666CC").s().p("AAfCsQgVhqBBhOIgEAAQgOAGgLgDQghgIgJgfQgEADgBAEQgEAOgHAHQhlBph0BXQgChpgrheIBoAeIgGgUIhegpIABhdIAPgGIAAgKIA4giIAsAOQAaAbAkALIAcAJQCSAACUgRIAFAeIADAGQBACdgvCmgAC6hDQgDAYgSAQIADATQAsglAMhPQgeABgIA4gAirgaIAVAMIheiFQAOBLA7AugAh8goIAAgBIhQh+QAPBXBBAogACPhfQgQAQgWACIAFAPQA9gLAcg4IADgWQgaAXghAhg");
	this.shape_60.setTransform(87.5,61.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00CC33").s().p("ADXAGQhcgGhdgCIitgEIHJAAQgFAGgIABQgaAFgbABIgKAAIgXgBgAk2gCIgDgEIAfAAIgIAEIgUAAg");
	this.shape_61.setTransform(-96,112.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFCC99").s().p("AiaLLIDXAAQgLANgTAAIgpABQhKAAhGgOgAB5LLIghgHIAAgRIChgOIgCAmgAA9LLgAiaLLIgRgsQAQAIARAHQBkApBqgaIgHAOgAEcF3QgMgEgLgJIgNhlIAvg7QAPAigOAiQgQAlACAiIAuAKQgEALgLAJQgJAGgKAAIgKgCgABiEtQhlgChbgoQgSgIgIgNQgcgvgDg8IAAgKQAtAFAWgSQADgCAAgFQAMAJANgFQA3gTAhg4QAbgsgkgnQALgFANACQAmgGAjgKQATgGgBgUQgRgVgagFQhSgKhOAaIhWB3IgDAKQhLgQAWhHIA/AXQgZgxg0gLIg3B2IhzAaIASARQBjgsBgAsIAQgcIAVABIBWiBQBfgoBOAyQgPAPgXgDIgPgGIhUAZIAuAuIgpgNIAdAoQgNAHgSgIQgbgLADAOQAMAGAGALQAcA0g/AKIAKg0IgsA4QhPALhHAmQhuA6hmggQgggLgJgeQgyijCZhkIAKhGQCOh1C3giQANgCAEgKQAhhag+heIgCABQgOAUgXAKQgJAEgIgEQgEgGgCgGQgSg5AvgZIAIAkIAWhWQAMAlAmADQgTguAQgwQBfgfBfAdQAjAggGAxQA4AugOBHQgFAfgTAXQhCBOhqgnQAoAxBNgYQArAlA1AWQAfAMAiABQBxACAnBbQhdAUgoBbQgbA8BNgGIAFAjIgSgXQgQBKgpA/IgCATIhiC/Qg3AKg3AAIgKAAgACNA+QgoBEhKAhIgTAIIAFAPQBrgrArhhIgCgBgAmRgwIAJASQAQguAsgYIATgRIgMgKgAASn9QAEAFAGADQBVAyBLhDIAKgKIgKgcQg9AXhEgPIgzgKQgIAcASAVgACZplIAJARIg3AQQAdANApgRIAAgiQgDgEgBgEQgOgngUgrQhYgKgjAxIADAwIAZAKIAggFgAE4C9IgOgSIAehGQAfgnASg6QABgDAHgEQA1gkgygdIAdgwQALADAHAJQAPASAGAVQAXBLAdBHQhOAvhLA0QgPAKgQAAIgMgBg");
	this.shape_62.setTransform(-45.8,40.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0B0B0B").s().p("ALuIIIBQB+IAAACQhAgpgQhXgAs5phIgEgeQAsgWApAlIAFAPIgUAAIAAAKIgmABg");
	this.shape_63.setTransform(-8,-7.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CCCCCC").s().p("AgDHcIAQgNIgEgNIgbgLIgQAuIi8gQIAkgnQgtgGgvAKQh2Adh2hKQCLg2CNAyIgKgoQAtgRAaAjIAHgTIAPAGIgVA7ID7AAIgEg2QAogcAjAaIgaAiIAXADIAIgFIAigKIgEgUQCrAOCfBCQieA/ilAAQhhAAhigWgACTG4IADAFQAGAvAxgPIAKgCQgMgmgjAAQgJAAgMADgAGmGsIABgCIhigLQAnA5A6gsgAlbGWIACgBIhjgUQAdA0BEgfgAC8nJIgMgkQBNgNBOAhIAFAQQgkAMgkAAQglAAgngMg");
	this.shape_64.setTransform(79.5,46);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#999999").s().p("AChNtIlVgKIgKheIGjAfIgBA5IgSAQgAiAL9QhEgJhEgNIgugGQhGgFhCgZQgcgLgfgIIgEgGIgGgLQgDgHgBgHQgBgHAAgIIAAgTQAMAHAMAGQBYAnBfAPICkAXQBMAMBNgDQBhAIBiAEIAaAAQBHgBBFgOIA3gIQAqgCAkgTQAPgHAJAIQgBAGAAAGQABAPgOAGQhWAmhlAKQhUAFhUAAQiNAAiMgMgAE7kaIgigKQAAgFACgFQABgEADgEQAGgHAHAAQADgGAFgDIAFgDQAEgCAFgBIAIgDIABgCIAEgDIABAAQAOAZgPAjIgBACQgFADgEAAQgGAAgEgHgACpscQAugcgZgoIAZgGIAOAiIgZApIAAAQQgDAggQAagAFeriIBig1IAMAGQgeAYglAVQgNAIgMAAQgKAAgIgGgAB3sSQAsgfgYgxIAHgEIASgGIACAkIAKAPIgZAsIAIAPIgZAigAAXr7IgCgEQgCgwgngVQAsgNAXAsIgIAsgAENsSIAjgtQAUgTAZgLQAHgDAIADIgFAPIhYBAg");
	this.shape_65.setTransform(79.1,24.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F3D28D").s().p("ACYLVIh0gKIAHgOIgHgZIAAgEQBnAOBhgTIAIAfIgSAbgAhALVIhhgIIAEgfIAUgOIgagLIgCgKIC9AhIAAADQADAfgcAHgAj7IOIgDgEQhRjABGjRQglhAgDhKIAsgFIACgHQgCgagOgXIAUgJIBECUQgSBLAeBBQgiAxgHA7QgDAcAGAaIADALQABAXAFAZQAEA6gUAzIgFgTQgQAzAEA2QgkghAWg6gAheD3QgfgKgegGQgEgrgGgrQgFggABgfIAEgpQghgNgOghIgBgDQgMgxgKgyIBugKIDgDVQASAQAXADQASACAQAAQAEgBAEgCQAbgGAZgHIgGBuQhJAuhYAGQgYADgXAAQg6AAg4gTgACsBeQiAgfhPhrQgUgcgegRQhAgnARg6IAhgIIAQgHIAcAOQBfAwBTA/QAcAXADgiQgWgcASgjIAJgPIAKgPQANgZAcgLQAEgBAAgLQhOAcgRBcQAAABgFAAQhOgshIgsQgEgCgFAAQgcgPgcgMQhagmhYAgIgQgSIAeg8QAegYAhgLQA1gOAtgRIAJgVQAYgJAbgBQBfgCAehTQgEAAgCACIg8AxQg4Avg8gkQhRgyAChjIAFgBIA3gUQg3gTgUgzIAYgZIARAaIBCgxIgCAYIA8gfIAOAYIAUABIAQgbIAjAtIANgWIAaAEIgLAeIAagDQAaAagLAlIgYAlIAsCPQB7AvBsBCIAJCAIg8A7QAECLh1BNQgMAIgNAAQgHAAgHgCgAiPngQAYAbA2gEQALgTAdgFQAbgEAHgYQACgKgVARQg2AqhRgcQAAAGACACgAhkoRIATAMIAXgRIgJgGIgQAIIgDg1gAg5p7IgSAIIABARIBXgVQgFgOgTAAQgRAAgdAKgAk9g5IADgnIAJgBIAog9IgDgSIgRgBIgLgMIhAARQACgOgQADIgJAEQBjhBBjA5QABBShVgQIgkA1IAUAeg");
	this.shape_66.setTransform(34.6,39.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0F0F0F").s().p("AF5LdQg8gugOhLIBeCFgAmMp9IAogoQAFAWAJgUQABgCAFAAIBwg/QAIgDAKAAQARgBgDAbQgEAxAUgnQAFAAACACQADADAAAFIgmAuQgSgPAIgfQADgMgHgOQhPA7hYAcIgDABQgEAAgEgCg");
	this.shape_67.setTransform(32.7,-14.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CC9966").s().p("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");
	this.shape_68.setTransform(0,-6.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#009900").s().p("AS9RtIgygZIAAgEIgDgOQgDgPACgQQABgLAJgHQA2gJA2gOQBZgagghYQgDgHgDgFIgJgKIgDgCQhSgPhHglIAVioIBOgfIAXAlIAsgpIAEAGIAGAKIAEAHIAEAGIAKAJQAJAIAKACQAHACADgCIAQgsIAPgDIAVAmIAFADQAPAJABAPQAQDVgDDXIiaAOgAisRlQgbgsAlgeIACgBIACgCIgdjvQAtALAeghQAKgLgCgRIgBgDIgdgMIA1gqIAxAzIAiglIAMAHQAJAHADAJQAZBJADBTQAEBQgEBPQgDAxApAGIAIAQIgCACQg1AFg2ABIiYAAgAxERtIhegGIAAgXIgLgFIAFgYIAMgGIBqAvIgDglIgWgTQCDgwCSALQAIgJgSgLQhzhDiMADIEshaQjHg3jOA7IBzhZQAkAlAxgIQAcgjAoAGIAJAOIArgqIBGAvIAqg5IAUA+IAlgsIAuAjQgyCZAsCUIAUAGIADARIAJAHIgCAXgAztRtIg5hBIgjAtIgbAEIgRgwIg7AsIgRgXIAAgzIAIj0IAmACIA8h2QAXBVgDBfQCGhcCcg6Ii0CgQAGAEAGgBQC6gnDAAQQiNAyiVAeIAJATQCIARCHAiQgUANgXgFQiIgThgBMQgpgQgrAMIAAACQALAogZAfgA0sMXQgFhRgShHQhFAygYBQQgdgugEg0IAAgsQABgTAFgTIA6AgIgBiEIA3BZIAPgMIADgRIAphUIAJAYIgdAuQgaArAtALIBYhPIgmB3QArglAigyQAGAMAAAPQgDA1AoARIBQgoIhKBhIAEAXQhzAVhVBPQgHgOAAgOgA2oraIgPgNIgEmDIGaAAIAIAGIBKgIIAFAAQBFAIBFABQCuADCrALIAIAQIgEAFQgEAHgIACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBQgjgLglgDQgugDgBAfQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAZAQQAdASAJAgQg/gOhBgNQhEgNgmAPIAQAYQAeAugGAoIgSgOQgagTgfgHQgYgIgVgMQgNgIgMAHQgnAYAYA5IhagoQgSAGgIAOQgFAJgCAKQgHAdgVATIgDgCQgIgJgEgOQgDgMgFgLQgMgYgYgHIAABSQgMAIgMAGQgLAFgLADQgeAAgYgVIAABMQgJABgIgEQgfgPgfAEQgkAFAFAqIhZhJIAOBBIgqAhgASTtQIg1hbIhWC9QgOgHgCgSQgKhdAThcQADgKgGgKIjMDLIgLgGQAYhcA6hPQAWgeALgkQhrAFheAtQgdAOghgKIgHgEQBXhHBrggQAVgFAFgWQhdAMhdgCQgTAAgPgKQBXgfBdALIAUAAQAIAJAPAEQAPAEAWgBQCqgGCqAAQBdgEBeACQATABAOALQAJAygTAoIgeA8IhSgPIAeBxIh4hDQgPAGAEAQQARBJgEBKQg3gmgkg8g");
	this.shape_69.setTransform(-1.2,-1.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#171717").s().p("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");
	this.shape_70.setTransform(-1,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_52},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_51},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_50},{t:this.shape_49}]},11).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_47},{t:this.shape_43},{t:this.shape_44},{t:this.shape_42},{t:this.shape_48},{t:this.shape_21},{t:this.shape_41},{t:this.shape_20},{t:this.shape_39},{t:this.shape_6},{t:this.shape_22},{t:this.shape_5},{t:this.shape_37},{t:this.shape_14},{t:this.shape_45},{t:this.shape_15},{t:this.shape_36},{t:this.shape_35},{t:this.shape_11},{t:this.shape_34},{t:this.shape_7},{t:this.shape_33},{t:this.shape_32},{t:this.shape_10},{t:this.shape_31},{t:this.shape_18},{t:this.shape_30},{t:this.shape_29},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_51},{t:this.shape_28},{t:this.shape_13},{t:this.shape_40},{t:this.shape_27},{t:this.shape_26},{t:this.shape_9},{t:this.shape_8},{t:this.shape_25},{t:this.shape_38},{t:this.shape_24},{t:this.shape_23},{t:this.shape_12},{t:this.shape_53},{t:this.instance}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_47},{t:this.shape_55},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_48},{t:this.shape_68},{t:this.shape_41},{t:this.shape_20},{t:this.shape_67},{t:this.shape_22},{t:this.shape_66},{t:this.shape_5},{t:this.shape_37},{t:this.shape_14},{t:this.shape_45},{t:this.shape_65},{t:this.shape_36},{t:this.shape_35},{t:this.shape_64},{t:this.shape_51},{t:this.shape_28},{t:this.shape_13},{t:this.shape_63},{t:this.shape_40},{t:this.shape_27},{t:this.shape_26},{t:this.shape_34},{t:this.shape_33},{t:this.shape_9},{t:this.shape_62},{t:this.shape_25},{t:this.shape_38},{t:this.shape_3},{t:this.shape_32},{t:this.shape_24},{t:this.shape_23},{t:this.shape_12},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_31},{t:this.shape_30},{t:this.shape_58},{t:this.shape_2},{t:this.shape_57},{t:this.instance_1}]},22).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-117.9,300.2,231.8);


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


(lib.FBoundingBoxSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{enabled:0,disabled:1});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent;
		
		component.registerSkinElement(boundingBox, "background");
		
		stop();*/
	}
	this.frame_1 = function() {
		/* 
		
		component.registerSkinElement(boundingBox2,"backgroundDisabled");
		
		stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Skin Elements
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AH0H0IvnAAIAAvnIPnAAg");
	this.shape.setTransform(50,50);

	this.boundingBox = new lib.boundingBox();
	this.boundingBox.parent = this;
	this.boundingBox.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.boundingBox},{t:this.shape}]}).to({state:[{t:this.boundingBox},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,102);


(lib.fpb_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_up();
	this.frame5.parent = this;
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_up();
	this.frame4.parent = this;
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_up();
	this.frame3.parent = this;
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_up();
	this.frame2.parent = this;
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_up();
	this.frame1.parent = this;
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_up, new cjs.Rectangle(0,0,100.1,100), null);


(lib.fpb_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_over();
	this.frame5.parent = this;
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_over();
	this.frame4.parent = this;
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_over();
	this.frame3.parent = this;
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_over();
	this.frame2.parent = this;
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_over();
	this.frame1.parent = this;
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_over, new cjs.Rectangle(0,0,100.1,100), null);


(lib.fpb_down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame4, "shadow");
		component.registerSkinElement(frame2, "darkshadow");
		component.registerSkinElement(frame3, "highlight");
		component.registerSkinElement(frame1, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_press();
	this.frame5.parent = this;
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_press();
	this.frame4.parent = this;
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_press();
	this.frame3.parent = this;
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_press();
	this.frame2.parent = this;
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_press();
	this.frame1.parent = this;
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_down, new cjs.Rectangle(0,0,100.1,100), null);


(lib.fpb_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_disabled();
	this.frame5.parent = this;
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_disabled();
	this.frame4.parent = this;
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_disabled();
	this.frame3.parent = this;
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_disabled();
	this.frame2.parent = this;
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_disabled();
	this.frame1.parent = this;
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_disabled, new cjs.Rectangle(0,0,100.1,100), null);


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
		var bgm = createjs.Sound.play('bgmAdv',{loop:-1});
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
		
		 window.open ("adverb_Scene7.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adverb_Scene5.html","_self");
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


(lib.fpb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,over:1,down:2,"disabled":3});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_2 = function() {
		/* stop();*/
	}
	this.frame_3 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 6
	this.over_mc = new lib.fpb_over();
	this.over_mc.parent = this;

	this.disabled_mc = new lib.fpb_disabled();
	this.disabled_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.over_mc}]},1).to({state:[]},1).to({state:[{t:this.disabled_mc}]},1).wait(1));

	// states
	this.up_mc = new lib.fpb_up();
	this.up_mc.parent = this;

	this.down_mc = new lib.fpb_down();
	this.down_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.up_mc}]}).to({state:[]},1).to({state:[{t:this.down_mc}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


// stage content:
(lib.adverb_Scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

	// Main
	this.instance = new lib.Definition("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(214,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgnBpQgHgFAAgIQAAgKAGgIQAGgJALAAQAKAAAEAHQAFAFAAAIQgBAJgEAHQgGAJgKAAQgIAAgGgFgAgfAvQgGgGAAgHQAAgLARgOIAggWQASgNAAgLQAAgNgNgLQgNgLgNAAQgIAAgMAJQgNAIgGAAQgIAAgFgGQgFgGAAgHQAAgOAYgLQATgKAOAAQAcAAAZAWQAYAWAAAcQAAAcgcAVIgXAQQgNAJgHAIQgGAIgJAAQgHAAgGgGg");
	this.shape.setTransform(312.7,357.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AAcA/IgEgcQgCgPAAgOIABgLIAAgMIABgFIAAgGQgBgMgFAAQgLABgLAPQgLAOgGAXIgBAMIgCANIAAALIgBANQAAAHgFAGQgGAEgIABQgJgBgEgEQgGgFAAgIIgBgNIAAgLIABglIACgkIgBgNIAAgMQAAgIAGgFQAFgFAIAAQASgBABAWIAAABQAUgTAVgBQAaABAKAVQAHAOAAAdIAAAKIAAAIQAAALADARQACAQAAALQABAIgGAFQgFAEgJABQgQgBgCgQg");
	this.shape_1.setTransform(297.6,360.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AguA7QgXgRAAggQAAghASgYQAVgbAgAAQAZAAAPAIQAVAKAAAVQAAAQgRALQgHAFgYAKIgtAUQAGAHAKAEQAJADAMAAQARAAANgHQAMgHAGAAQAPAAAAAOQAAAPgXAKQgTAJgVAAQggAAgVgQgAgSggQgJAIgGARIAfgNQARgIAMgHQgKgGgPAAQgLAAgJAJg");
	this.shape_2.setTransform(282.1,360.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AAgBkQgEgLgCgUQgDgTAAgNIABgKIAAgKIAAgMQgCgHgFAAQgQAAgLANQgGAHgLAUQAAAxgFAKQgFAMgMAAQgHAAgGgGQgGgFAAgHIABgHQABgDABgiIAAhbIAAgEIABgWIgBgMIgBgNQAAgIAFgFQAGgFAIAAQANAAAFAPQACAIAAARIAAAcIgBAaQAKgKALgEQALgFANAAQAXAAAKANQAIAKACATIABAiIADAbIAEAaIABAFQAAAIgGAFQgGAFgHAAQgOAAgEgOg");
	this.shape_3.setTransform(266.7,357.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AAcBrQgIgFAAgIQgHgQgBgKIgQhXQgJAbgKAVQgPAhgFATIABAGQAAAJgIAFQgGAFgIAAQgKAAgHgFQgHgGAAgKIgEgQIgPg/QgJgggVg8IgBgHQAAgIAGgFQAFgEAIAAQALAAAGAJQADAFAFAMQANAnARBJQALgbALgjQAJgeAGgMQAOgeANAAQANAAAHAPQADAHACASIAEAbQADAYAOA9QAPgiAYg/IAHgZQAEgPAGgJQAHgKALAAQAIAAAGAFQAFAGAAAIQAAACgFAMIgFAOIgIAYQgHAUgRAlQgSAngHAUQgGAOgFAJQgGALgNAAQgIAAgGgEg");
	this.shape_4.setTransform(243.8,357.9);

	this.instance_1 = new lib.Main();
	this.instance_1.parent = this;
	this.instance_1.setTransform(277.5,196.8,1.289,1.289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '794BDA59CB20B945A112E80CD26DAA53',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_10a.mp3", id:"_10a"},
		{src:"sounds/_10b.mp3", id:"_10b"},
		{src:"sounds/_10c.mp3", id:"_10c"},
		{src:"sounds/_11a.mp3", id:"_11a"},
		{src:"sounds/_12a.mp3", id:"_12a"},
		{src:"sounds/_13a.mp3", id:"_13a"},
		{src:"sounds/_13b.mp3", id:"_13b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/_5a.mp3", id:"_5a"},
		{src:"sounds/_5c.mp3", id:"_5c"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/Adverb6_canTheyPlaywav.mp3", id:"Adverb6_canTheyPlaywav"},
		{src:"sounds/Adverb6_hereSoonwav.mp3", id:"Adverb6_hereSoonwav"},
		{src:"sounds/Adverb6_whenwav.mp3", id:"Adverb6_whenwav"},
		{src:"sounds/anadverbanswers.mp3", id:"anadverbanswers"},
		{src:"sounds/anadverbmodifies.mp3", id:"anadverbmodifies"},
		{src:"sounds/carefully.mp3", id:"carefully"},
		{src:"sounds/easily.mp3", id:"easily"},
		{src:"sounds/happily.mp3", id:"happily"},
		{src:"sounds/how.mp3", id:"how"},
		{src:"sounds/bgmAdv.mp3", id:"bgmAdv"},
		{src:"sounds/endinly.mp3", id:"endinly"},
		{src:"sounds/quickly.mp3", id:"quickly"},
		{src:"sounds/rapidly.mp3", id:"rapidly"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/towhatextent.mp3", id:"towhatextent"},
		{src:"sounds/when.mp3", id:"when"},
		{src:"sounds/where.mp3", id:"where"},
		{src:"sounds/why.mp3", id:"why"}
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
an.compositions['794BDA59CB20B945A112E80CD26DAA53'] = {
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