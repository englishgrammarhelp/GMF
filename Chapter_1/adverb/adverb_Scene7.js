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


(lib.Wherewillweplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAsQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgEACgDQACgDAEAAQAFAAAAAHQAAADgBACQgCADgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgLAVQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAHgGIANgJQAIgHAAgFQAAgHgGgGQgHgFgFAAQgEAAgGADIgHAEQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgFAJgEQAIgEAGAAQAKAAAKAJQAKAJAAAMQAAAIgGAGQgDAEgJAGQgJAHgDAEQgCACgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape.setTransform(28.4,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAuIgCgEQAAgGANgcIgVgnIgCgFIgCgEIACgFQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAKAOAKAaIAJgUIAJgSQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBACIgUArIgKAbIgFALQgBAFgDgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(22.2,-12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATAeIgEgFIgKAFIgGABQgOAAgGgHQgGgIAAgOQAAgNAKgLQAJgKANABQAFgBAGADQAIADAAAFIgBACIgBAIIAAAMIABAMIADAKIACADIAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAIAAAIQAAAKAEAEQADAGAHAAQAFAAADgCIAGgFIgCgWIABgGIABgGIgEgCIgCgBQgJABgGAHg");
	this.shape_2.setTransform(16.2,-13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGArIABgWIABgVIAAgUIAAgWQAAgFAFAAQAGAAAAAFIAAAWIgBAUIgBAdIAAAOQgBAFgEAAQgGAAAAgFg");
	this.shape_3.setTransform(11.4,-15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWAwQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgXIAAgWIgBgYIgBgMQAAgEACgDQACgDACAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAEIAAACIAAAEQAEgEAFgBQAEgCAEAAQAMAAAGAKQAEAJAAAOQAAALgGAJQgIAIgMAAQgFAAgHgCIAAAcQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAgAgEgeIgIAGIABAbQAFADAGAAQAHAAAEgGQADgEAAgHQAAgLgCgFQgCgFgGAAQgEAAgEACg");
	this.shape_4.setTransform(6.7,-12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_5.setTransform(-3.4,-13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAOAhQgHAAgDgQIgDgOIgBgMIgFALIgIAYIgDADQgBAEgEAAQgFAAgEgSQgCgJgCgOIgCgJIAAgJQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAEAAABAFIABAJIABAIIAEAaIANgpQACgHAEAAQAFAAABAIIAEAVIAEAWIAEgQIAIgfQABgEAEAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAIAAADIgMAqIgGALQgCADgCAAIgBAAg");
	this.shape_6.setTransform(-10.8,-13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAqIABgUIABgWIAAgUIAAgVQAAgHAFABQAGgBAAAHIAAAVIgBAUIgBAdIAAANQgBAGgEABQgGgBAAgGg");
	this.shape_7.setTransform(43.7,-33.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAqIABgUIABgWIAAgUIAAgVQAAgHAFABQAGgBAAAHIAAAVIgBAUIgBAdIAAANQgBAGgEABQgGgBAAgGg");
	this.shape_8.setTransform(40.4,-33.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFAqQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgKIAAgLIABgOIAAgMQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIgBAMIAAAOIAAALIAAAKQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQACgCACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAADgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_9.setTransform(37.2,-33.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAOAhQgHAAgDgQIgDgOIgBgMIgFALIgIAYIgDADQgBAEgEAAQgFAAgEgSQgCgJgCgOIgCgJIAAgJQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAEAAABAFIABAJIABAIIAEAaIANgpQACgHAEAAQAFAAABAIIAEAVIAEAWIAEgQIAIgfQABgEAEAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAIAAADIgMAqIgGALQgBADgDAAIgBAAg");
	this.shape_10.setTransform(31.3,-32.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_11.setTransform(20.1,-32.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AgWAfQgCgDAAgDIAAglIAAgGIAAgFQAAgDACgCQACgCADAAQAHgBABAHQAKgIANAAQALAAAAAQIAAAEQgBAJgHAAQgIAAAAgIIAAgGQgMADgGALIAAAcQABAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_12.setTransform(14.1,-32.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_13.setTransform(7.7,-32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_14.setTransform(1,-33.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AAMAuQgDgDgBgDIgDgLIgGgkIgIATIgJAXIAAADQAAADgDADQgDACgDAAQgEgBgDgCQgDgCAAgEIgCgHIgGgcIgNgmIgBgDQAAgDADgCQACgCAEgBQAEABADAEIADAHQAGAQAHAfIAKgaIAGgSQAGgNAFAAQAGAAACAGQACAEABAIIABALIAIAkIAQgpIADgLIAFgKQADgEAEgBQAEAAACADQADACAAADIgDAHIgCAGIgDAKIgLAYIgKAZIgFAKQgDAEgFAAQgEAAgCgBg");
	this.shape_15.setTransform(-8.7,-33.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2.5,1,1).p("ABfDwIBXAAQBkAABGhGQBGhGAAhkQAAhihGhHQhGhGhkAAIlrAAQhkAAhGBGQhGBHAABiQAABkBGBGQBGBGBkAAICrAA");
	this.shape_16.setTransform(12.9,-23.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AArBFIgBAAQgcgEgWgRQgMgJgJgKQgOgQgHgSIgEgLIgFgQIgEgTQAAgFABgEQACgFAFgDQANACABALIAAAIIgBAEQABAGACAFIAPAgIACADIAIALQAOASAVAKIARAHQAAgLgDgKQgIgVgDgVQgDgTAAgUQABgHAGgCQAFAAAEADIAAAAQAGAFgBAMQgDAXAIAUIADAHQAIAbAEAbIACAGIAAABIgVAAg");
	this.shape_17.setTransform(18.6,6.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABOEgQgVgKgPgSIgIgLIgBgEIgQggQgCgFAAgGIAAgEIABgIQgCgLgMgCQgFADgCAFIgFAAIirAAQhkAAhGhHQhGhGAAhiQAAhkBGhGQBGhGBkAAIFrAAQBkAABGBGQBGBGAABkQAABjhGBFQhGBHhkAAIhXAAIAAABIAAAAQgEgDgGAAQgGACAAAHQgBAUADATQAEAWAHAVQAEAKgBALIgRgHg");
	this.shape_18.setTransform(12.9,-18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Wherewillweplay, new cjs.Rectangle(-30.6,-49.1,87,62.3), null);


(lib.SpeechBubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(105,-61.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_1.setTransform(100,-63.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgXAeQgBgCAAgDIAAglIAAgFIAAgGQAAgEACgCQACgCADAAQAHABACAGQAJgIAMAAQAMAAAAAQIAAAEQAAAIgIAAQgHAAgBgHIAAgGQgMACgFALIAAAdQgBADgCADQgCACgEAAQgEAAgCgDg");
	this.shape_2.setTransform(94,-63.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_3.setTransform(87.6,-63.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_4.setTransform(80.9,-65.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgFApQgCgDAAgDIAAgGIAAgGIAAgdIgLgBQgIgCAAgGQAAgEACgCQADgCADAAIAKABIAAgHIAAgFQgBgDADgDQACgCAEAAQAHAAAAAOIAAAGIAGgBQAHAAACABQAFACAAAFQAAADgCACQgDADgDAAIgDAAIgDAAIgFAAIABAeIAAADIAAAEQAAANgJAAQgCAAgDgCg");
	this.shape_5.setTransform(74.6,-64.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPAuIgBgEQAAgGAMgcIgVgoIgDgEIgBgFIABgDQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQAKAOALAZIAIgUIAJgSQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBADIgUArIgLAbIgDALQgCAEgEAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAg");
	this.shape_6.setTransform(64.9,-62.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATAeIgEgFIgKAFIgGACQgOAAgGgIQgGgIAAgPQAAgNAKgJQAJgKANAAQAFAAAGACQAIADAAAFIgBACIgBAIIAAAMIABAMIADAKIACADIAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgEgDgAgJgOQgHAIAAAIQAAAKAEAEQADAFAHABQAFgBADgCIAGgEIgCgXIABgFIABgGIgEgCIgCAAQgJgBgGAIg");
	this.shape_7.setTransform(58.9,-63.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAqIABgVIABgVIAAgUIAAgWQAAgFAFgBQAGABAAAFIAAAWIgBAUIgBAdIAAANQgBAHgEgBQgGABAAgHg");
	this.shape_8.setTransform(54.1,-65.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAwQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAgXIAAgWIAAgYIgBgMQAAgEABgDQACgDAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIACAEIAAACIgBAEQAFgEAFgBQAEgCAEAAQAMAAAFAKQAFAJAAAOQAAALgHAJQgHAIgMAAQgFAAgHgCIAAAcQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgFgeIgIAGIABAbQAHADAFAAQAHAAAEgGQADgEAAgHQAAgLgCgFQgDgFgFAAQgEAAgFACg");
	this.shape_9.setTransform(49.4,-62.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AgQAtQgDgCAAgDQAAgFANgbIgVglIgDgFIgBgEQAAgEACgCQADgDADABQAEAAACACQAIAMAKAWIAIgRIAIgPQADgFAEABQADgBADADQACACAAADIgBAEIgUApIgLAZIgDALQgCAGgGgBQgDAAgCgCg");
	this.shape_10.setTransform(124.8,-80.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgFAuQgCgCAAgEIAAhQQAAgDADgCQACgCACAAQADAAADACQACACAAADIAABNQAAALgIAAQgCAAgDgCg");
	this.shape_11.setTransform(119.8,-84.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AgFApQgCgCAAgDIAAgHIABgGIgBgdIgLgBQgIgBAAgHQAAgEACgCQADgCADAAIAKABIAAgHIAAgFQAAgEACgCQACgCAEAAQAHAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgDADQgBACgEAAIgDAAIgDAAIgFAAIABAeIAAADIAAADQAAAOgJAAQgCAAgDgCg");
	this.shape_12.setTransform(115.4,-83.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AAMAbIgCgMIgBgMIABgFIAAgEIAAgCIAAgEQAAgEgCAAQgFAAgEAGQgFAHgDAIIAAAGIgBAFIAAAFIAAAGQAAADgDACQgCACgDAAQgEAAgCgCQgDgCAAgDIAAgGIAAgFIABgPIAAgQIAAgFIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_13.setTransform(109.5,-82.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_14.setTransform(102.9,-82.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AAMAdQgIADgHAAQgIAAgGgEQgGgEgBgHQgDgPAAgKQAAgIACgKQABgGAHAAQADAAADACQACACAAADIgBAIIAAAIIAAAOIACAKIADABIACAAQAGAAAIgCIAAgKIgBgJIABgUQABgHAHAAQAEAAACACQADACAAADIgBAVIAAALIAAAMIAAADIAAAEQAAADgCACQgDACgDAAQgFAAgCgEg");
	this.shape_15.setTransform(96.5,-82.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("AAGAmIAAgDIACgRIgFAAQgMAAgJgGQgJgIAAgMQAAgRAKgLQALgKARgBQADAAACACIAEgBQAEAAACACQACADAAADQAAAQgCAUIgCAUIgCAWQAAADgCACQgCADgEAAQgIAAAAgKgAAHggQgJACgFAHQgEAHAAAIQAAAGAEACQAEAFAGAAQAEgBACgEQADgFAAgPIABgMIgCAAIgDAAIgBAAg");
	this.shape_16.setTransform(90.1,-81.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_17.setTransform(83.8,-82.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("AgWAeQgCgCAAgDIAAglIAAgFIAAgGQAAgEACgBQACgDADAAQAHAAABAHQAKgIANAAQALAAAAAQIAAAEQgBAJgHgBQgIABAAgIIAAgGQgMADgGAKIAAAdQAAADgCADQgCACgEAAQgDAAgCgDg");
	this.shape_18.setTransform(77.8,-82.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AgKAyQgDgDAAgDIAAgCIACgQIAAgcIgEABIgDAAQgEAAgCgCQgDgCAAgEQAAgFAGgBQADgCAHAAIABgGQACgNAFgGQAGgIAOAAQALgBAAAIQAAAIgKgBQgHABgEAFQgCADgBAIIAAACIALgBQALAAAAAHQAAAIgLAAIgMAAIAAAQIABAPQAAALgCAGQgBAGgGAAQgDAAgCgBg");
	this.shape_19.setTransform(71.6,-83.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQAAgBABgBQAAAAABgBQAAAAABAAQAAAAABAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_20.setTransform(61.9,-82.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AANAuQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgDgHAAgFIgFgZIgDgZQgFAUgGANQgIAPgBAIIABAEQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQgCACgDAAQgHABgBgIIgBgHIgHgdQgEgOgJgbIAAgCQgBgFAHgBQAEAAACAFIAEAMIAHAaIAGAZQAGgPAGgUIAGgRQAFgOAEAAQAEAAACAFQACAEACATIAEAWIAFAYIAUgyIADgLQABgIADgDQACgDAEgBQAFAAAAAHIgCAFIgCAGIgDALIgRApIgJAUQgCAFgEAAQgDAAgCgCg");
	this.shape_21.setTransform(52.6,-83.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3,1,1).p("AINCYQA0hBAAhXQAAhlhIhJQhJhIhnAAIqSAAQhmAAhJBIQhIBJAABlQAABmBIBJQBJBIBmAAIKSAAQA1AAAtgTAGrDkQACgBABAA");
	this.shape_22.setTransform(86.9,-74.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AI1ENQgGABgIgCQgPgFgOgHIgzgRQgCgDgDgBQgZgJgTgRIgQgLIgCgCIgDgCIgCABIgBAAIAAAAQgsAUg1AAIqSAAQhnAAhJhJQhIhIAAhmQAAhmBIhJQBJhIBnAAIKSAAQBmAABJBIQBIBJAABmQAABWg0BCIABAMIAAAAIAAAIQABAIgBAIIgBAEIACACIAAABQAEAFACAFQARAbAZATIAFADQATAHAGAVIABAEQAQAKANAQIgpgLg");
	this.shape_23.setTransform(89.7,-71.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ah3ANQgEgDAAgHIAEgFIADgEIABgBIAAgBIAAAAIAFABIACACIAQAKQAUARAYAJQADABADADIAxARQAOAHAPAFQAIACAGgBIApALQgNgPgQgLIAAgEQgGgVgTgHIgFgDQgZgSgQgbQgDgFgEgFIAAAAIgBgHQABgIAAgIIgBgIIAAAAQACgKAHgFIALADQAIAQgDAUIgBAIQA/A1A2A8IgYAGIACAGIgZABQhqAAhahKg");
	this.shape_24.setTransform(141.2,-50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpeechBubble, new cjs.Rectangle(27.7,-100.6,125.9,58.6), null);


(lib.Eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AAAABIAAgBIABABIgBAAg");
	this.shape.setTransform(-6.8,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAVIADgDQgOgaAqAKIAOgFIAAgBIAFACQAHACAAAEQABAAABABQAAAAAAABQAAAAAAABQAAABAAABIgCACIgBAEQgCAFgGACIgkAIQgHgDgFgGgAgfgFIAAgCIACAFIgCgDgAgegcIgBgBIABAAIAEADIgEgCg");
	this.shape_1.setTransform(3.1,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AglAGIApgqQArAZgMAqQgOAGgNAAQgaAAgTgfg");
	this.shape_2.setTransform(1.9,-4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPBNIAlgIQAFgCACgFIACgEIABgCQABgBAAgBQAAAAAAgBQAAgBAAAAQgBgBgBAAQgBgFgGgCIgGgCIABABIgPAGQgqgLANAbIgCAEIgLglQgDgGAEgFQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAEgCIABABQACABABABQABABAAgBQAAAAgBAAQgBgBgCgCIghgYQgDgCgEgBQgOgFgKgJIgBgDIgCAAIgBgBIgEgHIgCgBQgGgMgCgPIAgAHIABgBIAMAFQAGAGAHgBIAAADIADgEQAAAAABAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAGgJIAHgEIALgMIALgJIABABQBlA1g2BrIgKAFQgLAHgJAAQgLAAgIgKgAAAApQAAACABABQAAAAAAAAQAAAAgBgBQAAgCgBgCIABACgAgSgkQAaAtAugUQAMgrgrgYg");
	this.shape_3.setTransform(0,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(4.9,4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AgJA6QgEgBgCgCQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQgCgCgBgDIABgEQgGgKABgMIABgLIAAAAIgBgBIgBgKIAAgLIADgQIACgIIABgGIAAgCIAOgOQAaAQAFAYQAIAFABAKIABAKQACAOgBAPQAFAKgJAIIgDADQgDAFgGAAIgCAAIAAAAIgHABQgLAAgKgDgAgmgUIACgGIAAAAIAAADIgBAEIgBgBg");
	this.shape_5.setTransform(2.9,-1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAOBWQgIAAgHgCIgWgIIgEgCQgEgDgFgBIgWgIIgDgDQgFgBAAgEQgEgBABgFQABgFAFAAQAXADAUgGIACgBIgDgGQADgDgBgFIgBgDQAAgTABgSIABgMQAAgGgCgEIAAgEIABgDIAAAAIAAgCIABgIQAAgHACgHQAEgIAHgFIAGgEIABgBIACABQBmA2g3BrIgKAFQgLAGgJAAIgHgBgAAkArIAAgBIAAAAIABAAQAGAAADgFIADgDQAJgIgEgKQAAgPgCgNIgBgLQAAgLgIgFQgFgXgcgQIgMAOIAAACIgCAGIgCAIIgDAQIAAALIABALIACAAIAAABIgBAKQgCAMAHAKIgBAEQAAADACACQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQADACADABQAPADAPgBIAAABg");
	this.shape_6.setTransform(1.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},16).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-8.5,16.6,17.4);


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
		playSound("Adverb7_werewav");
	}
	this.frame_10 = function() {
		playSound("Adverb7_wereWillwav");
	}
	this.frame_35 = function() {
		this.stop();
		playSound("Adverb7_playTherewav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(25).call(this.frame_35).wait(30));

	// Layer 1
	this.instance = new lib.Eye();
	this.instance.parent = this;
	this.instance.setTransform(91.1,-24.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.5,1,1).p("EAhDgXyIAAg7IAAgiMhB6AAAIgDAAQABAogBAmIgBFqIAACOIgBG5MgAGAiWIAAAKEAhDARkIAADSIAAAxIAADBIAAAo");
	this.shape.setTransform(-3.9,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3.5,1,1).p("EAhDgYhIAAEEIAAAJIAAC9IAAAdIAAChIAAAFIAADTIAAAUIAAGJIAAAZIAABiIAAAbIAAARIAAB9IAADTIAADQIAAAjIAAFYIAAA3IAABiIAAAGIAAB5EAhDAYiIoJAAIuWAAIk4AAIkegBIn4ABIiAAAInLAAIgLAAIhQAAIrJgBIkpAB");
	this.shape_1.setTransform(-3.9,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("ABAEqQApg0A+ASIAIAHIAABiIgOAOgAisguIgWh4IAgg8QBagcBZAbICeiWIAADTIAAjTIABgFIATAAIgUDYIkcCSIgIAEIgZANgACvl5g");
	this.shape_2.setTransform(190.1,-50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgEheIABAAIAIAJIgJC0g");
	this.shape_3.setTransform(208.1,-116.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E1E1E1").s().p("ABSAjIAIAAIABAIgAhagqIAFADIgCAEQgDgDAAgEg");
	this.shape_4.setTransform(199.5,-129.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0E0E0").s().p("AgBgGIADAAQgCAGAAAHIgBgNg");
	this.shape_5.setTransform(136,-134.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494949").s().p("AEXA7IADgCIgDACgAkBAUIABACIgCACIABgEgAkVgFIABgEIAEABIgDAEIgGAOIAEgPgAEDg6IAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAg");
	this.shape_6.setTransform(166.1,-131.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#303030").s().p("AAAAAIABAAIgBABg");
	this.shape_7.setTransform(156.4,-104.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhbA/IgXgUIALgwIAWACIAZAzIgFALIgGAFgABCAEQgMgHgPAAQATgfgdgJQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAABgBAAIAPgUIAqATIAfA9IgmAFQAAgLgLgHgAAVgKQABAEAFAEIAJAAIgOAVg");
	this.shape_8.setTransform(159,-125.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("ACHEgIgBgFIgDgFIgFgIIAVjVQA2AvgJBRIgCAiIgGAxIgaArQgTgDgEgUgADyElIgdghIAGgfIAogCIAFgeIANAAIgCg6IAJgUIAGAeIAGAJIAAAPIAhAyQgFAsgrAVIgOAHgAlGCHICLjBIAUAAIAIAUIBLhxIAJgBIAIgOIAKAEQAQAHACASIAHBDIgDACQhlAagxB7QgmBEgFBHQgegxAWg1IAJgHIgDg0Ig6DUgAjBAMIASgMIAFgPgAisEBIgJgGIgLADIgfgYQAUhVA6hCIAagEIAdgcIgGgnIAOgcIAXgBQgGASAAARIABAJQgDB3g7BpQgDAFgFAFgABfD1IgBgDQgHh7A1g/IgMA6IgOCGgAhNC/IABgEQAagoAEhAIABgDIAGgJIgDg/IAGgJIAHgoIACAKIANAFIAOAUIABA7QgIAEgBAJQgJBDAPA6IACABIAJhUIAKAAIAKhHQBDAKgGBXQgDAigTAYIgPgHIAAgVIgJAAIhdBLgAgqChIABABIABgIIgCAHgAmrDrIgFAAIALhKQgEg4AxgbIAHgDIgJgsQBVguAxhXQiHBVg1CSIgZgNQAGgrAUgnQARgiAggTIATgiQg8AZgTA7IgjATIgWg0ICThwIAEgNQASg1AugiIABgDIAEAAIAmAPQgCAGgFAEQhSArgdBbQBHhxB+gzIgngQIAagnIAIANIBGgWIhKBnQgSACgQAJQgVAMgFAXIgEAWQAFgJAHgHQA1g6BKglQg9BkhbBFQgSAOgRAPIA1gQIg1BDIgzBmIAAgBQgRAAgLALQgMALAAAPIgDAVIgBAEQgLAkgNAOIgZgBgAErBJIgZgFIhMhXQA8AIAjAvQA1BGgTBXgADQBsIgBghIhbhmIgTgEIALAmIgLAEIgOgKIAGgRIgxheIAMAMQglgrgLg4QAAgMADgLQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAABAAQA+BRAoBnQByAGAPBtQACAPgBAPgAHSBkIhFiAIAjBgIgagfIgIg5IiWjCQAhgVAdAWIAIAZIACAKQAkAnA3ATIABACQAMAVAKgLQAGAIAEALIgNAOIBFCwgAFiBKIgQgqQAIAIANAAQADgEgBgFIgBgDQAIAJAHADIgBApgAF5A/IAJgTIgBAJIAAARgAEdgnIgwgMIADgJQglhghOhDIgYADIhCgGIA6gWIBrA0QBHBhA2BsIAEAHIgQAEgAA7ATIgHgGIgGgHIgIgKQgRgFgBgQQgDgpgTghQgFgHAGgGQABgHgIgLQgZgiAKgiIACgDIgMgQIAPgCIAVBkIAXAeQASAXgFAiQAMAGAIAIQAFAGADAHQAHAKAAAKQgDADgEABIgEAAIgEAAgAEIiNQghhWhZgZQAfAHAbARQAhAVAXAjIAOAVQA7AwAoBTIAIATQhRg3gghVgACkiMIAAgKIA1BVgAA9iuIA2gYIAKApIgPgVIALAmIASAFQA6ARgQAvQhagOgehZgAhDkNIgBAIIgYAdQAbhMgCAngAC7j2IgHgCQgRgIgMgNIiogYIAKgLQCNgaBeBVIAAACIgGAAQgRAAgSgDg");
	this.shape_9.setTransform(-75,79.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ag7BbIjLgJIA9hFIBnhMQAjgTAogGQD4gYAmDLIgmABg");
	this.shape_10.setTransform(9.9,151.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF99").s().p("ADmHIQgxgmgQg+IgEgKIAFhmQARlNhtk5IgEgDIgJgFQhGgehCAHQhOAIhGA6IgXgNQA2gyA9gVQBeghBwAlIAIACIA5A7IBMIOIgMl7IAVApIgEgxIAaBnIgPgHQgeE2AtE0IgRgLgABWCnQgGBSgaBOIgDAAQgFgGgEgHQhQiEAjimQAEgygGguQgDgwgJguQgHghgNggQAdAkAWAmQAmBAASBGIADhqQA1D8AaEBgACHCUQAMkQhzj4QiFhBhsBnIgJABIgJgIIAMgVQBQhABiAAQAeAAAeAGIAEAGQCoD5g8E5gAA2jGQhVhFhtgtIgQgLIA3gBIAKgJQAoAGAjAQQhOgqhiALQAlgaAtgGQCigPAHDFIgFgGg");
	this.shape_11.setTransform(120.1,-7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("Ax8QHIiVhjIgKgJIhShRQg6AxhMAAQgoAAghgDIiJBKIgFgGQAtgPAmgcQAmgdAagnIg5AKIBVgnIjwA9IDyhfQgjgJgmADQhKAChFAdQBSgmBZgPQCXgXCUArIAKADICJBBIAzB+QhQjlAHjyIBBgLIArgyIATAcIBbgwIAnBEIAZANIAIANIAJAFQAHAQAOALQAXASAYgLIAegxIAYAgIAtADIBCg9IACgCIAGAMIATgEIABgmIAGgKIAAgOIAMgIIAegwIAbAIIAvBJIATgSIAZABICfC7IANABQATALAPAPQAZAYARAfIACAEQAPAcAGAgQAGAigOAcIgwAEIhwikIhOhiIC/EqIgDAQIhnBNIhOBIIhiAFIgUgOIgoAOQgegZAJgrIAHgmQgHgFgKADQgSAGgHASIgGALIgEANIgggoIgcA5QghgUANg3QAEgTAIgRIhGBEIgGg0IgJgEIgFAAIgHACQgNADAGARIgSAEQg9gugHhYQCtjOELg7IgSggIAJAWQkIAjjBC0Ig9iKICLGeIAAAigANBNWQgRgqgvgIIgNgBQgXAjgmgGQgVgFgNgPIghAmIg1gvIgFAhQhpAXg2hfQAJg0AXgrQgVAZgUAbIgTgJQAAhaA/g6QDLi5DeilIAFAHIgbhaIgYhaIgCgBIgNgtQAKg8gkgzIgHgHIgUhDIg1i2QAshBB4AJIAAgFIAIAAQAhAUgNg9IgCgLQhZhJh1gMIgBAAIBOhfIhRBEIhHhRIgIgJIhAhJQAUAEAPgNQBShIAMhwIAJgwIAggdIAWAMIgeAmIAagMIAKAIIAaARIAkgHIAPALQBzBfAUCJQAHAugEAzQhRD7DTCZIARACQBUAQgBBXIgJAGQhUAthVgKIgNAGIhaidQArBeAnBdQA6CGAMCSIACAhQg5AshCAlIiNBNQhMAphHAtQBegkBfgyQB6hCCHggICsB5IARB0Qi+B3jdArIHygcIBBhgIADgRQAsgjAxAZIANAIQArCTCHBCIACASIgXAlIgMgZIhBAKIAEgjIgfAZIgRgKQgwAFgpg3QgCAbAAAVIgfABIgLgOQhTAehcgCIgKgBQhLgYhJAOQgvAMgtAOQgrgmgyAdIgQAJIgHgHIgOgLIg4AegAbDMaQiLhTgaiiIBChEQBRAUgSBbIAsBWQA1AZAJA4IADAPIgKAqgARsKnIgWgGQCGgqCVARQhOAqhZAAQgtAAgxgLgAQyEjQgDiggwiWICOgrIB9DFQBAAQAKA2IgOAKQhqBNiEAAIgmgBg");
	this.shape_12.setTransform(24.4,57.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AhZBUQC6AeCEhpQAZgTAXgZIBRAyIAuAvIAGAGIARCRQhaCOiyAEQAFjgj9gzgABajTQgXgggUgiIAjgaIALAeQA1CFB1BOIgJAYQhdhIhHhlgAmmj6IgCgBIgChOIAhgdIAoAUIAHAHQAlAzgLA7IgNARIgGAAQgxAAgigugAiJkmIAOgFIB4AWIh5Aag");
	this.shape_13.setTransform(137.5,79);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC9900").s().p("AqaGVIgNg8QgGgiAAgjQCTgVCSARIABgCQiPgoiXAgIAbjBIAfieQCTAWCQgXIgMDjIhngMIhSgKIgogHQgygLggAcIEyAUIgNEHIgdACQg8AJg8AAQhOAAhNgOgAm5E6QABAEAFADIA6ATIATgaIgigmIgggCQgYAPAHAZgAqBARIAAADID/AAQg7gNhDAAQg9AAhEAKgAvoGHIgCiVICDAAIAAgCQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQgxgPgzACIgdAEIgDjeICmgFIgNCHIAAgBIgJgEQhBgLhBAIIgBACICLAMIgOCgIgCAVIgCAXIgDAqgAmtEwIALgMIATABIAMAVgAGsBVQgygGgsgYIgdjxQAsgBArgEQAzgBAtgSQAIgDAPAEIAQADQApALAngQIAKAEIAIAEIAHABQALACAHgJQAJghAtAWIACAAQATAJgBgSIhIgJIgigPIgSAcIhrgDIgPAGQhSAYhYgDIgDAAIABhCIGFguQjAAGjFAeIAAhBQEygYE0gBIACgBQjTgTjcAYQheALhcgBIAEhBIKgAAIAOBdIj8AIQB2APCHgMIANEPIjCAPQAAARAWgFQBYgLBUgHIgCA/IjLAiIAAh4IADgCQABgBABgFIAEAAIgEgDIAAgBIgCABIgGgEIAAgCQiOhHilA2IgEABIAAAEIAMA/QhYgKhTAPIgDADICwACIAdBeQghAGggAAQgUAAgUgCgAGCiNIhHAKQgBAdA1gMQCugqC0AJQCWAICDgWQiJgGiKgDIgeAAQidAAiaAdgALfA3IAAgYIAHgBIAFgBIAAAagAJnA1IgFgUIADgBIACAAIARABIACAWgAKSAhIAKAAIANAAQgJAKgNAGIgBgQgAKYAZIgGAAIgBgCQAPABAQAAIgBACIgXgBgALfARIAMAAIAAAEIgFACIgHABgAEBluIAAgaQAZAXACAgIAPEcQADAlgBAlgAvvhfICyAGIgJBWQhJgGhHAIQgNgDgLAEgAIzgUIACAAIAEAUgAKIgXQAbgCAYgFIADAXgALRgkIAfgLIgPAlgAI0g8IgCACIgQgEIgQgLQCOgSBVAiIixADQgEgOgMAIgAoHhjIhqgFIAThrIDAAHIAwAKIAiAJIgEBWIhDAGIgOAAQgyAAg0gGgAvvhqIgChyIDDgHIgFASIgKBpgAJqjkIAFgHIANAOg");
	this.shape_14.setTransform(-80.8,-69.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C6FFFF").s().p("AVqH+QgigugyggIgagQQhygchbArQgrAVglAlIrujkQASjXg0jPIkbAAIAAhnIAJgHIAZiuQA6AaAxApQAeAaAWAbIgNiiIELBZQgPg4gngrQgZgbgggQQByAEBpAwIgnh4IGIgKIAeABINVgDIGDADIAJAAIAAFHIgIAAIgBgIIAAkEIAAg7IAAA7IAAEEIgdgtIgZABIgJhfIixhEIgMgSIg5ASIgHguIhHAYIhrgEIg1AxIgUgFQheAkgfBfIgBAEIgEAQQgKA4gDA5QgCAcAEAdIBHC5IBKB/QAXgFAIAYIANAsIgXhoIAUgfIAGBCIAeARIgNhSIA0AeIgfg6QAkgXAmARIANAiIgwgeQAACMgbCEQgKAlgHAnQgJAhgKAgImjl6IgiAJIgTAGQh4Afh5AdQgHACAKAJIAAAAQByBSB0hbIhMB5QBRgPBOg2IFAGGIgKgJIgLAAQgvAAgKAuIAAAAQgThJgog1gAVolrQABgHADgGIgFAAIABANgAd6JYIgTgdIhxgLIAbhqIAIgEICTCSIgyAfgEgg+gCYIADgVIgBm/IA6gPIECAYQhVgGgoA7QBIgfA0AXIAOADIAuA7QjRATgYCxQAEgCADgDQBEhZBnAlQiaBLAMCgQAug8BKgcQgXAmgTAnQgjBDAbAwIARADQBehlCgg5IAEgBIgRBTIArgTQANAPgHAUQgHAVgIATQgMAbgFAaQguAeg7AAQg7AGg8gJIAAFpIgIAAIkaBfgAx8BQIgxgLIi7goIBRktQCkBjAxCyIACgDQAcgmgMgvIANgJIAAiKIgrg8IEJAwICEAmIgGgQQgLgegPgaQglg/g/gmIizgzICzgpIBYgGIhYhCIh2geIB2guIACAAIBiAAICpAAIh4BlIAKAEQBHATA5grIAIgEICBgVQhKBGggBhQgNAngJAnIAcgSIAJgGIDCiDIgMC+IB0igIgaEhQjcg2hPBZIAGgBIAAAaIAAB4IgMAAQgzg3hKgSIgSgEIidAyQiIA4iOAWQgJACgJAAIgPgBg");
	this.shape_15.setTransform(-2.6,-97.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AfrPiIgbAAIgtAfQg7glg/AiQgDABgEgDIgphPQCahhCEiXIAHAAQAIA8AIA/IAADPIgwAOgEAguAMwQAKBlAHBqIgRAAgAXLO1IAQgKIghg6IAAoXIgbhnIgDgNIABAAIAxgGQAjAWAbgbIAEgFQA5BABZAEIA/hgIBlAGIALAPIAAAwIBpggIA4BEQklDsisFIIAAAgIAFBbIg9ABIgRAjgAG8LsIghALQjFgxjZA6IgFgBIgIgKQgUABgVgBQgbgBgCgaIgCgiQgBgdgFgcIgFgZIgGgdQgCgSADgSQgWh8AQiuQBhAdA7hOIADgCIAfAPIAvg6ICLgrQAPAKAEAWQACAUgJARIAvBNQAphKBOAdIANAHIBThSQAcAZAjgMQAdgKAMgdIBMAQIApgYIAoAVIBXAZIALAFIAAgCIACgBIAKAKIAHADIg0CqIhaAjIAHARQAaA1A5AMIAIAJIAoBfIAiAMIACAAQB5AkA/BcIgNAKQhrgThABQIgCADQgfAHghgKQgigKgigQIgbAQIgegiIiwgIIhbA8gA3JHcIAIgNQBmAgBogTQAagEAQgRQBBhDBMgRIAOgGQBHgcBGAjIBSgIIBmArIAehGIAHgBIA1AXIATg4QArAPAsgQQAegKAVgXIAsAMIAHAOQBKAJAvg3IAMgOIAwHmIiaAeQgOgCgPAIIixgXIgCAAIk+AjQgKgBgJgEQh4gthyAMIgPgGQAAAFgBACIgCACQglAFglAMIgMAGIgWAMIiOAIgEggwAL4IgOj6QCugfCWhZIBkAxIgGDrIAEBWIgKADQh6gpiGAMQgJARgVAGQgeAJgeAAQgZAAgbgGgA9NmvQAPhrAzhgQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQhRAJgxBEQAeiiCRgsQhIgzhXAnQgXAKgTATIgCgBQBFiGCigKIADgEIgphVIgNADIg9gQIBHgKIAHgKQD5gSD5ABQCnAVC/gJIhdA0ICdAvIA1AeIg1AFIjRAvIDRBRQBDApAcBIQACAFAAAIIhhgbIkrg7IA7BbIASCFIgNAJIgDAAQgCAGAAAGQheiEiFhXIhbCjIgmiAIiRCCIALhHQisAbhpCSgAmMvQQhPgLhLAqIgIAEIhmAIIAggmIBOgxIO7gDIAnBeIjtgyIB9CIIkXhDQA6A5gVBQIiihnIg9BnIgriSIhyCdIAGiEQh6AjhrBxIgIAGQAUiFBphng");
	this.shape_16.setTransform(-1.7,-56.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC33").s().p("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");
	this.shape_17.setTransform(-1.2,86.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC33").s().p("Ap0SPIgbgiIhggiIgEgdQBBAXBBgYIAGgUIiMgHIgFgpIARAEQAoAPASgbIhLgRIgHhCIBtgNIhugPIABgvQCQAZgBhZIgdAaIh+AJIACg/QBWAoBDgxIifgMIgGhMQBQAxBNgZIAAggIgSADQg9AdhPg2IgBgaQBrAgAhhKIiNAYIAIg3QAWAJAXAAQA3ABAXgvIgXgIQguAnhAgTIgBhOQBcAtA2hFIgNgGIgTAHQg3APg7gOIAAguQBOAFA8gpQgugVgqAmIgygHIAGiBQBQAbA3glQg0gPhWgBIAGgbQByAOAKhbQgyA8hOgGIA3hmIBCgUIAJgYIgNgSIgPASIhAAQIgghCIADgpQA0AaAwgeIAOgKIgLgUIhPAPIgWgFIACgVIAIgiQAjAjAzgZQAFgCADgFIhUgPIgEg5QA+A0BIgvIgLgPIhzgFIAGg/QBUAkA9gzIiAgGIgNgPIAGg6QBaAgA8g9IgVgKQg7AfhCgPIAajEQBQArBBgsQhAgRhMgOIAKgQIAAgeQBHAaBJgdIiQgdIAogyICEAEIgBgEQgFgCgEgDIAAgCQg1gKhKgWQAXhJBDgrIAsByIAVAAQgpDkgXDnIgbDBQgKACAIALIACABQAAAkAGAhIgEBRIgGCaIgBAaQgHEHAHEIIBFI3gAsXEaIBtAAIAAgeIhtAAgArTowQBFAxBBgwQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQgvAAgwgQQgLgEgIAAQgUAAgBAXgAL6JzIgIgBIhUgKIAKgdQA9ATAcgoIhVAFIAEgjIBCgnIhBAOIgsggIgDgVIBZgFIhbgFIgMhYIBJAAIAAgSIhMAAIgRh8QAtAgA7gYQATgJABgSQgqATgxgGQgRAAgQABIgDg4QArAcAygTIABgCIhegHIgCgpQAdAOAdgKIACgBIg9gTIgBgYQBEAeA0gpIgBgDQgbgCgdAGQgeAGghgFIgBg3QAvAvApgnIAAgDIgfAGIg4gSIADgvQAqAtBMgeIh2gQIACglIAbAWIgQgmIBWgGIhfgWIgHiEQAuAiApgZIhUgXIAahaQgKAoAPAiIACADIArgCIAZAdIAWgJQAXHHAtG5gAKHGXQgIACABADQgBAEAIADQAHACAKAAQALAAAHgCQAIgDgBgEQABgDgIgCQgHgEgLAAQgKAAgHAEgALYEVIhtgBQA2AwA3gvgAKqipQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIhQgUQAUAoA4gSgAKSuoIBjAWIhHgcIghhGIApAJQAXAbAhAEIAIABIAFgBIAFgDIAFgTIggAKIgpgdIgEgjIAKgFQAUAdAlgDIARgFIgOCAIhxAEgAKtxAIgOgOIAZh9IAoCbIBAh9IgSCaQg4gCgpgrg");
	this.shape_18.setTransform(-89.4,-22.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC9966").s().p("AxYTdIADACIACAKgAeFRdIARgsQhBi2iYh1IgXgTIg7hAQhDhagIh8IgBggQBaiHBlh7QBeh0BshiICEBgIAAB+IAAh+IAJAKIgJB0IgIA9QiUCTizBvIAmBeIAiAXIAEAKQA5AMAlAuQARAWAYARIB8E2IAABiQgsgKgRgQQgDgDgEAAQgyAogZAAQgZAAABgogAsZOeIAIgNIABAGQgBAMgDAAQgCAAgDgFgAn5LAIAAgCIABACIgBAAgEghAgEwIBxggQAEgBACgDQACgCAAgFICkhFIAIAAIAAEUICKAJQABAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAFATAAAWIACARQAEApgXAcIgggYIgEAAQgDAAgDACIgJAEQgVAMgSgNQgLgHgEgKIAAgCIgkgDIgYABQghAEgbAUIgMAsIgXgsQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgEALgCALQAAADgCACQgZAggqgBIhOgIIAAArgEAgsABFgA3JApIAFiaIC+AQIACgIICKAAIArpTIDJg8IhZBKICQgrIAUgEQAdA2BfhPIAMgIIAMgFIAJACQALAFAEAVQggBfA8hBIAKgLIBUAGIAYDQIA0A4ICsANIAADsIgPAEIgaAKQgfAMgNAfIgBADIh0gUIhLAxIgRAGIgxgSIgbAsIg2ALIgIACIiEAaIhSAJQifhniUCYQgqArg/AEIgSABQg+AAg6gUgAdLk5QgZgYgQgfIEKh6IAAGJQhrhsh2hsgEAgsgHqIABgBQAoDAgpDKgAYZjTQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgYgLIlfmNIiOBKIBOh0QhaAphggQQgbgCgbgHIAAAAQAZAAAXgFQBjgVBbgtIATgGQBLA1A9BBQCUCcCxB5QADguAIgtQAHgnAKglQAlh+BThsIgTgmIBJAWQgEglAPghQAWgyApgnIAjAyIAdgQQAxA+BphNIADgDQAWApgGA4IABBDIgTAAIgBAAIAAihIAAChIiVB5Ighg0IgCArIgEACIgLAGQhHAmgwg2QhzBpBSB+IADABIAeArQgNBvhIBRIgOAPQg6gjg4gkgAhoiuIAAi5IAQgBQBQgCAPhPIADgSQBKAHBIgVQAwgOAbgkIKhCwIADACIA+AWIgoAtIgMAlIgHgDIgLgLIgBACIgBACIgLgFQiDhnibBPIgCACQhWgOgrBJIgBABIgagBIhrAcQg1gmgEhKIAAAAQiVAdiBBKIg0AigAhwnCIAAgDIAcgCIgBAXIgJADQgRgEgBgRgAY5ssIg/hBIAEgkQALgLAwgKQgRgRgdAPIg5gbIBLhAIgghTIglgFQgxA2AjBEIAfgUIABgRIAXABIgbAgIgdAQIgmgwQgGhLAyg6IAJgKIA/gtIgGATIB1g6IA5AlQgLAIgNAAIg0gNIgcApIBQgUQARABASAGIACACIggAgIBTABQgZBAA7ATIABABIAAgCIAmCKQgtCZh4AAQgvAAg7gYgAYGt3IAXAOIAcAgQBAAtBBgqQAmhTgxhHQhCBhhnAIgAZRwjIAnALIAagXIAngFIAEACQgBhchagBQglAyAUA6gAYNwWQAAAFgBAEQgCADgDAAg");
	this.shape_19.setTransform(-1.6,-15.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#414141").s().p("AgDAKIAAgUIAGAVQgDAAgDgBg");
	this.shape_20.setTransform(-152,116.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#404040").s().p("AgEADIAAgIIAJADIAAAIIgJgDg");
	this.shape_21.setTransform(-105.8,134.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#585858").s().p("AAAADQADgNgDAOg");
	this.shape_22.setTransform(-79.1,94.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4B4B4B").s().p("AAiBMIABABIgCACIABgDgAgchPIAEASIgBACIgJAUg");
	this.shape_23.setTransform(-44,97);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C6C6C6").s().p("AgNACIAAgDIAbADg");
	this.shape_24.setTransform(-84.9,-161);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#424242").s().p("AAqAgQgEgVgLgFQAoADgNAbIAaAPIgKALQgYAbgKAAQgNAAATg5gAiBAqIgUAFIAAgbQASgFATgCQARgEAPAIIgYAjIBugrIgLAIQg4AvgiAAQgWAAgMgWgAiAgfIgVANIAAgTICcgzIASAEQBKASAzA4QiFhriRBWg");
	this.shape_25.setTransform(-71.4,-93.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AhBAwIAAgOIBgAaQABgHgDgFQgchHhCgpIAAgWQA/AmAkA+IAAA4IAaAAIAGAQg");
	this.shape_26.setTransform(-79.8,-126.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C4C4C").s().p("AgrBFIA0gGIg0gdIAAgXIBXBCIhXAGgAgrhAIAAgSIAcAAIgaASIgCAAg");
	this.shape_27.setTransform(-81.9,-152.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#535353").s().p("AgNDeIgDAEIAAgdIAKi1IgBgIIAAlHIAHBDQAKB6AGB8QAHCsgVCaQAGg5gVgpg");
	this.shape_28.setTransform(209.3,-127.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E1E1E").s().p("AhyAYIgBgFIAEACIAAADIgBAAIgCAAgAhSASIgOgbICwgDIgFALIgfAJQgKgWgKATQgCAEAAAFQgXAFgbACIgFgPQgFgBgEACQgGACgCAHQgFAIgIAAQgIAAgLgGgAh9gHQgCgFgDgEIAQAEQgCANgDAAQgDAAgDgIgAB3gUIALgDIABAAIAAABIAAADQAAAEgBABIgDACQgDgFgFgDg");
	this.shape_29.setTransform(-13.1,-74.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#848484").s().p("ACdANIAAgDIAEADgACVAGIAHADIgLADgAihgLIAEgBIgEAFIAAgEg");
	this.shape_30.setTransform(-15.7,-77.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("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gBAlIB2ARQhNAegpguIgDAwIA4ATIAfgGIAAACQgpAngvgvIABA3QAhAFAegGQAdgGAbADIAAACQgzAphEgeIABAYIA9ATIgCABQgdAKgegNIADApIBeAGIgBACQgyATgrgbIADA3QAQgBAQAAQAyAGApgTQAAATgUAHQg6AYgtgfIARB7IBMAAIAAASIhJAAIALBYIBcAFIhaAFIAEAVIAsAgIBBgOIhCAnIgEAkIBVgGQgcAog9gTIgKAeIBTAJIgnAVIgGAAQhdAAg5hHgAikooQAMABAZAAQAlgCATgCQAegEAWgKQAMgGAGgFQAQgOAGgbQACgKABgOIAGgFQADgCABgDQAAgEgDAAIgHADIAAgNIgBgVIAEgGQAAgGgDAAIgBgBIAAgjIgBgDIABgDQACgCgBgEQgBgEgEACQAAAAgBAAQAAAAAAABQAAABgBAAQAAABAAABQgGAWgMALQgGAFgQAGQgRAGgQADIgPADQgOACgegCQgRgBgIgCQgHgCgOgHQg5gdgYgSIgEgBQgDABABADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAAABQAAACADAGIAGAMIAFAPQACAGAAALIABAQIAEAKIABALIAFAQIABAFIAAAAQAAABgBAAQAAABABAAQAAAAAAABQAAAAAAAAIAGAjIAIAdIAAABIABACIAAAAIACAEQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBQAOAGATACgAkXuHQguARgyABQgsAFgrAAIAdDzQAsAYAxAFQA1AHA1gLIgdheIixgCIADgDQBUgQBXALIgLg/IADgGQCmg1CNBGIgBACIgEAHQAFADADAFIAAB6IDLgiIAChAQhVAHhXALQgXAEABgRIDCgOIgNkQQiHAMh1gPID6gHIgNhdIqfAAIgEBAQBcACBdgLQDdgYDRASIgBABQk0ACkxAXIAABBQDEgeDBgGImFAuIgBBDIADgBQBYAEBSgZIAPgGIBqADIATgcIAiAPIBHAKQACASgUgKIgBABQgtgWgJAhQgHAIgLgCIgIgBIgIgEIgJgEQgnARgpgLIgQgDQgJgDgGAAIgIACgAhBq9IgDgXQAAgFACgEQAKgUAKAXIAQAbIAOglIAGgKQhVgjiOASIAPAMQAEAEACAFQAHAVADgaIACgDQAMgHAEANIAPAc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");
	this.shape_31.setTransform(-4,-0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4A4A4A").s().p("A2cYOIAAgSIAAgDIAKAAIAAADIgKAAIAKAAIAAASIgKAAgA2cWeIAAgQIAKAJIAAAPIgKgIgAWc0fIABgBIAAACIgBgBgATf4JIAEgEIAFAFIgJgBg");
	this.shape_32.setTransform(37.3,7.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#626262").s().p("AmpgCIHQgCIGDAHItTADIAAgIg");
	this.shape_33.setTransform(126.2,-159.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4D4D4D").s().p("AMzAIIAAgQIAeAAIAAAIIAAAJgAtQAJIAagRIBIAAIAAARIhiAAg");
	this.shape_34.setTransform(-1.3,-159.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B9B9B9").s().p("AjogDIHRAFInRACIAAgHg");
	this.shape_35.setTransform(106.9,-160.4);

	this.instance_1 = new lib.Wherewillweplay();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.2,-33.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3.5,1,1).p("EAhDgYtIAAE/IAAAIIAAC+IAAAcIAAChIAAAFIAADTIAAAUIAAGJIAAAZIAABiIAAAbIAAARIAAB9IAADUIAADPIAAAjIAAFYIAAA3IAABiIAAAGIAAFLIAAAxIAADBIAAAoIoJAAIuWAAIk4AAIkegBIn4ABIiAAAInLAAIgLAAIhQAAIrJgBIkpABIAAgKMAAGgiWIABm5IAAiOIABlqQABgmgBgoIADAAMBB6AAAg");
	this.shape_36.setTransform(-3.9,-0.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CC33").s().p("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");
	this.shape_37.setTransform(-1.2,86.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1E1E1E").s().p("AhyAYQgDgNAFAIIABAFIgBAAIgCAAgAhSASIgOgbICwgDIgFALIgfAJQgKgWgKATQgCAEAAAFQgXAFgbACIgFgPQgFgBgEACQgGACgCAHQgFAIgIAAQgIAAgLgGgAh9gHQgCgFgDgEIAQAEQgCANgDAAQgDAAgDgIgAB3gUIALgDIABAAIAAABIAAADQAAAEgBABIgDACQgDgFgFgDg");
	this.shape_38.setTransform(-13.1,-74.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC9900").s().p("AqaGVIgNg8QgGgiAAgjQCTgVCSARIABgCQiPgoiXAgIAbjBIAfieQCTAWCQgXIgMDjIhngMIhSgKIgogHQgygLggAcIEyAUIgNEHIgdACQg8AJg8AAQhOAAhNgOgAm5E6QABAEAFADIA6ATIATgaIgigmIgggCQgYAPAHAZgAqBARIAAADID/AAQg7gNhDAAQg9AAhEAKgAvoGHIgCiVICDAAIAAgCQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQgxgPgzACIgdAEIgDjeICmgFIgNCHIAAgBIgJgEQhBgLhBAIIgBACICLAMIgOCgIgCAVIgCAXIgDAqgAmtEwIALgMIATABIAMAVgAGsBVQgygGgsgYIgdjxQAsgBArgEQAzgBAtgSQAIgDAPAEIAQADQApALAngQIAKAEIAIAEIAHABQALACAHgJQAJghAtAWIACAAQATAJgBgSIhIgJIgigPIgSAcIhrgDIgPAGQhSAYhYgDIgDAAIABhCIGFguQjAAGjFAeIAAhBQEygYE0gBIACgBQjTgTjcAYQheALhcgBIAEhBIKgAAIAOBdIj8AIQB2APCHgMIANEPIjCAPQAAARAWgFQBYgLBUgHIgCA/IjLAiIAAh4IADgCQABgBABgFIAEAAIgEgDIAAgBIgCABIgGgEIAAgCQiOhHilA2IgEABIAAAEIAMA/QhYgKhTAPIgDADICwACIAdBeQghAGggAAQgUAAgUgCgAGCiNIhHAKQgBAdA1gMQCugqC0AJQCWAICDgWQiJgGiKgDIgeAAQidAAiaAdgALfA3IAAgmIAMAAIAAAmgAJnA1IgFgUIAVgIIADAegAKRAXQAPABAQAAQgLARgSAIIgCgagAEBluIAAgaQAZAXACAgIAPEcQADAlgBAlgAvvhfICyAGIgJBWQhJgGhHAIQgNgDgLAEgAIzgUIACAAIAEAUgAKIgXQAbgCAYgFIADAXgALRgkIAfgLIgPAlgAI0g8IgCACIgQgEIgQgLQCOgSBVAiIixADQgEgOgMAIgAoHhjIhqgFIAThrIDAAHIAwAKIAiAJIgEBWIhDAGIgOAAQgyAAg0gGgAvvhqIgChyIDDgHIgFASIgKBpgAJqjkIAFgHIANAOg");
	this.shape_39.setTransform(-80.8,-69.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C6FFFF").s().p("AVqH+QgigugyggIgagQQhygchbArQgrAVglAlIrujkQASjXg0jPIkbAAIAAhnIAJgHIAZiuQA6AaAxApQAeAaAWAbIgNiiIELBZQgPg4gngrQgZgbgggQQByAEBpAwIgnh4IGIgKIAeABINVgDIGDADIAJAAIAAFHIgIAAIgBgIIAAk/IAAE/IgdgtIgZABIgJhfIixhEIgMgSIg5ASIgHguIhHAYIhrgEIg1AxIgUgFQheAkgfBfIgBAEIgEAQQgKA4gDA5QgCAcAEAdIBHC5IBKB/QAXgFAIAYIANAsIgXhoIAUgfIAGBCIAeARIgNhSIA0AeIgfg6QAkgXAmARIANAiIgwgeQAACMgbCEQgKAlgHAnQgJAhgKAgImjl6IgiAJIgTAGQh4Afh5AdQgHACAKAJIAAAAQByBSB0hbIhMB5QBRgPBOg2IFAGGIgKgJIgLAAQgvAAgKAuIAAAAQgThJgog1gAVolrQABgHADgGIgFAAIABANgAd6JYIgTgdIhxgLIAbhqIAIgEICTCSIgyAfgEgg+gCYIADgVIgBm/IA6gPIECAYQhVgGgoA7QBIgfA0AXIAOADIAuA7QjRATgYCxQAEgCADgDQBEhZBnAlQiaBLAMCgQAug8BKgcQgXAmgTAnQgjBDAbAwIARADQBehlCgg5IAEgBIgRBTIArgTQANAPgHAUQgHAVgIATQgMAbgFAaQguAeg7AAQg7AGg8gJIAAFpIgIAAIkaBfgAx8BQIgxgLIi7goIBRktQCkBjAxCyIACgDQAcgmgMgvIANgJIAAiKIgrg8IEJAwICEAmIgGgQQgLgegPgaQglg/g/gmIizgzICzgpIBYgGIhYhCIh2geIB2guIACAAIBiAAICpAAIh4BlIAKAEQBHATA5grIAIgEICBgVQhKBGggBhQgNAngJAnIAcgSIAJgGIDCiDIgMC+IB0igIgaEhQjcg2hPBZIAGgBIAAAaIAAB4IgMAAQgzg3hKgSIgSgEIidAyQiIA4iOAWQgJACgJAAIgPgBg");
	this.shape_40.setTransform(-2.6,-97.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("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");
	this.shape_41.setTransform(-4,-0.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC9966").s().p("AxYTdIADACIACAKgAeFRdIARgsQhBi2iYh1IgXgTIg7hAQhDhagIh8IgBggQBaiHBlh7QBeh0BshiICEBgIAAB+IAAh+IAJAKIgJB0IgIA9QiUCTizBvIAmBeIAiAXIAEAKQA5AMAlAuQARAWAYARIB8E2IAABiQgsgKgRgQQgDgDgEAAQgyAogZAAQgZAAABgogAsZOeIAIgNIABAGQgBAMgDAAQgCAAgDgFgAn5LAIAAgCIABACIgBAAgEghAgEwIBxggQAEgBACgDQACgCAAgFICkhFIAIAAIAAEUICKAJQABAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAFATAAAWIACARQAEApgXAcIgggYIgEAAQgDAAgDACIgJAEQgVAMgSgNQgLgHgEgKIAAgCIgkgDIgYABQghAEgbAUIgMAsIgXgsQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgEALgCALQAAADgCACQgZAggqgBIhOgIIAAArgEAgsABFgA3JApIAFiaIC+AQIACgIICKAAIArpTIDJg8IhZBKICQgrIAUgEQAdA2BfhPIAMgIIAMgFIAJACQALAFAEAVQggBfA8hBIAKgLIBUAGIAYDQIA0A4ICsANIAADsIgPAEIgaAKQgfAMgNAfIgBADIh0gUIhLAxIgRAGIgxgSIgbAsIg2ALIgIACIiEAaIhSAJQifhniUCYQgqArg/AEIgSABQg+AAg6gUgAdLk5QgZgYgQgfIEKh6IAAGJQhrhsh2hsgEAgsgHqIABgBQAoDAgpDKgAYZjTQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgYgLIlfmNIiOBKIBOh0QhaAphggQQgbgCgbgHIAAAAQAZAAAXgFQBjgVBbgtIATgGQBLA1A9BBQCUCcCxB5QADguAIgtQAHgnAKglQAlh+BThsIgTgmIBJAWQgEglAPghQAWgyApgnIAjAyIAdgQQAxA+BphNIAAChIAAihIADgDQAWApgGA4IABBDIgTAAIgBAAIiVB5Ighg0IgCArIgEACIgLAGQhHAmgwg2QhzBpBSB+IADABIAeArQgNBvhIBRIgOAPQg6gjg4gkgAhoiuIAAi5IAQgBQBQgCAPhPIADgSQBKAHBIgVQAwgOAbgkIKhCwIADACIA+AWIgoAtIgMAlIgHgDIgLgLIgBACIgBACIgLgFQiDhnibBPIgCACQhWgOgrBJIgBABIgagBIhrAcQg1gmgEhKIAAAAQiVAdiBBKIg0AigAhwnCIAAgDIAcgCIgBAXIgJADQgRgEgBgRgAY5ssIg/hBIAEgkQALgLAwgKQgRgRgdAPIg5gbIBLhAIgghTIglgFQgxA2AjBEIAfgUIABgRIAXABIgbAgIgdAQIgmgwQgGhLAyg6IAJgKIA/gtIgGATIB1g6IA5AlQgLAIgNAAIg0gNIgcApIBQgUQARABASAGIACACIggAgIBTABQgZBAA7ATIABABIAAgCIAmCKQgtCZh4AAQgvAAg7gYgAYGt3IAXAOIAcAgQBAAtBBgqQAmhTgxhHQhCBhhnAIgAZRwjIAnALIAagXIAngFIAEACQgBhchagBQglAyAUA6gAYNwWQAAAFgBAEQgCADgDAAg");
	this.shape_42.setTransform(-1.6,-15.7);

	this.instance_2 = new lib.SpeechBubble();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-12.6,-46);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(3.5,1,1).p("EAhDAODIAABiIAAAGIAAFLIAAAxIAADBIAAAoIoJAAIuWAAIk4AAIkegBIn4ABIiAAAInLAAIgLAAIhQAAIrJgBIkpABIAAgKMAAGgiWIABm5IAAiOIABlqQABgmgBgoIADAAMBB6AAAIAAAiIAAE/IAAAIIAAC+IAAAcIAAChIAAAFIAADTIAAAUIAAGJIAAAZIAABiIAAAbIAAARIAAB9IAADUIAADPIAAAjIAAFYg");
	this.shape_43.setTransform(-3.9,-0.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF00").s().p("AhZBUQDeAjCQiaIBRAyIAuAvIAGAGIARCRQhaCOiyAEQAFjgj9gzgAAvkVIAjgaQAzCbCCBWIgJAYQh6hehViRgAmmj6IgCgBIgChOIAhgdIAoAUIAHAHQAlAzgLA7IgNARIgGAAQgxAAgigugAiJkmIAOgFIB4AWIh5Aag");
	this.shape_44.setTransform(137.5,79);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00CC33").s().p("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");
	this.shape_45.setTransform(-1.2,86.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#535353").s().p("AgNDeIgDAEIAAgdIAKi1IgBgIIAAlHQAQCcAHCdQAHCsgVCaQAGg5gVgpg");
	this.shape_46.setTransform(209.3,-127.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E1E1E1").s().p("AgDgDIAHAAIABAHg");
	this.shape_47.setTransform(208.2,-125.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFCC99").s().p("Ax8QHIiVhjIgKgJIhShRQg6AxhMAAQgoAAghgDIiJBKIgFgGQAtgPAmgcQAmgdAagnIg5AKIBVgnIjwA9IDyhfQgjgJgmADQhKAChFAdQBSgmBZgPQCXgXCUArIAKADICJBBIAzB+QhQjlAHjyIBBgLIArgyIATAcIBbgwIAnBEIAZANIAIANIAJAFQAHAQAOALQAXASAYgLIAegxIAYAgIAtADIBCg9IACgCIAGAMIATgEIABgmIAGgKIAAgOIAMgIIAegwIAbAIIAvBJIATgSIAZABICfC7IANABQATALAPAPQAZAYARAfIACAEQAPAcAGAgQAGAigOAcIgwAEIhwikIhOhiIC/EqIgDAQIhnBNIhOBIIhiAFIgUgOIgoAOQgegZAJgrIAHgmQgHgFgKADQgSAGgHASIgGALIgEANIgggoIgcA5QghgUANg3QAEgTAIgRIhGBEIgGg0IgJgEIgFAAIgHACQgNADAGARIgSAEQg9gugHhYQCtjOELg7IgSggIAJAWQkIAjjBC0Ig9iKICLGeIAAAigANBNWQgRgqgvgIIgNgBQgXAjgmgGQgVgFgNgPIghAmIg1gvIgFAhQhpAXg2hfQAJg0AXgrQgVAZgUAbIgTgJQAAhaA/g6QDLi5DeilIAFAHIgbhaIgYhaIgCgBIgNgtQAKg8gkgzIgHgHIgUhDIg1i2QAshBB4AJIAAgFIAIAAQAhAUgNg9IgCgLQhZhJh1gMIgBAAIBOhfIhRBEIhHhRIgIgJIhAhJQAUAEAPgNQBShIAMhwIAJgwIAggdIAWAMIgeAmIAagMIAKAIIAaARIAkgHIAPALQBzBfAUCJQAHAugEAzQhRD7DTCZIARACQBUAQgBBXIgJAGQhUAthVgKIgNAGIhaidQArBeAnBdQA6CGAMCSIACAhQg5AshCAlIiNBNQhMAphHAtQBegkBfgyQB6hCCHggICsB5IARB0Qi+B3jdArIHygcIBBhgIADgRQAsgjAxAZIANAIQArCTCHBCIACASIgXAlIgMgZIhBAKIAEgjIgfAZIgRgKQgwAFgpg3QgCAbAAAVIgfABIgLgOQhTAehcgCIgKgBQhLgYhJAOQgvAMgtAOQgrgmgyAdIgQAJIgHgHIgOgLIg4AegAbDMaQiLhTgaiiIBChEQBRAUgSBbIAsBWQA1AZAJA4IADAPIgKAqgARsKnIgWgGQCGgqCVARQhOAqhZAAQgtAAgxgLgAQyEjQgDiggwiWICOgrIB9DFQBAAQAKA2QhvBXiNAAIgmgBg");
	this.shape_48.setTransform(24.4,57.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF99").s().p("ADmHIQgxgmgQg+IgEgKIAFhmQARlNhtk5IgNgIQiZhBiDBsIgXgNQCIiAC5A9IAIACIA5A7IBMIOIgMl7IAVApIgEgxIAaBnIgPgHQgeE2AtE0IgRgLgABWCnQgGBSgaBOIgDAAQgFgGgEgHQhQiEAjimQAEgygGguQgDgwgJguQgHghgNggQAdAkAWAmQAmBAASBGIADhqQA1D8AaEBgACHCUQAMkQhzj4QiFhBhsBnIgJABIgJgIIAMgVQBohTCGAZQCtD7g9E9gAA2jGQhVhFhtgtIgQgLIA3gBIAKgJQAoAGAjAQQhOgqhiALQAlgaAtgGQCigPAHDFIgFgGg");
	this.shape_49.setTransform(120.1,-7.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#009900").s().p("AfrPiIgbAAIgtAfQg7glg/AiQgDABgEgDIgphPQCahhCEiXIAHAAQAIA8AIA/IAADPIgwAOgEAguAMwQAKBlAHBqIgRAAgAXLO1IAQgKIghg6IAAoXIgbhnIgDgNIABAAIAxgGQAnAYAbgiQA5BABZAEIA/hgIBlAGIALAPIAAAwIBpggIA4BEQklDsisFIIAAAgIAFBbIg9ABIgRAjgAG8LsIghALQjFgxjZA6IgFgBIgIgKQgUABgVgBQgbgBgCgaIgCgiQgBgdgFgcIgFgZIgGgdQgCgSADgSQgWh8AQiuQBhAdA7hOIADgCIAfAPIAvg6ICLgrQAPAKAEAWQACAUgJARIAvBNQAphKBOAdIANAHIBThSQAcAZAjgMQAdgKAMgdIBMAQIApgYIAoAVIBXAZIALAFIAAgCIACgBIAKAKIAHADIg0CqIhaAjIAHARQAaA1A5AMIAIAJIAoBfIAiAMIACAAQB5AkA/BcIgNAKQhrgThABQIgCADQgfAHghgKQgigKgigQIgbAQIgegiIiwgIIhbA8gA3JHcIAIgNQBmAgBogTQAagEAQgRQBBhDBMgRIAOgGQBHgcBGAjIBSgIIBmArIAehGIAHgBIA1AXIATg4QArAPAsgQQAegKAVgXIAsAMIAHAOQBKAJAvg3IAMgOIAwHmIiaAeQgOgCgPAIIixgXIgCAAIk+AjQgKgBgJgEQh4gthyAMIgPgGQAAAFgBACIgCACQglAFglAMIgMAGIgWAMIiOAIgEggwAL4IgOj6QCugfCWhZIBkAxIgGDrIAEBWIgKADQh6gpiGAMQgJARgVAGQgeAJgeAAQgZAAgbgGgA9NmvQAPhrAzhgQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQhRAJgxBEQAeiiCRgsQhIgzhXAnQgXAKgTATIgCgBQBFiGCigKIADgEIgphVIgNADIg9gQIBHgKIAHgKQD5gSD5ABQCnAVC/gJIhdA0ICdAvIA1AeIg1AFIjRAvIDRBRQBDApAcBIQACAFAAAIIhhgbIkrg7IA7BbIASCFIgNAJIgDAAQgCAGAAAGQheiEiFhXIhbCjIgmiAIiRCCIALhHQisAbhpCSgAmMvQQhPgLhLAqIgIAEIhmAIIAggmIBOgxIO7gDIAnBeIjtgyIB9CIIkXhDQA6A5gVBQIiihnIg9BnIgriSIhyCdIAGiEQh6AjhrBxIgIAGQAUiFBphng");
	this.shape_50.setTransform(-1.7,-56.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C6FFFF").s().p("AUWGwIgagQQipgph0ByIrujkQASjXg0jPIkbAAIAAhnIAJgHIAZiuQA6AaAxApQAeAaAWAbIgNiiIELBZQgPg4gngrQgZgbgggQQByAEBpAwIgnh4IGIgKIAeABINVgDIGDADIAJAAIAAFHIgIAAIgBgIIAAk/IAAE/IgdgtIgZABIgJhfIixhEIgMgSIg5ASIgHguIhHAYIhrgEIg1AxIgUgFQhgAlgeBiIgEAQQgKA4gDA5QgCAcAEAdIBHC5IBKB/QAXgFAIAYIANAsIgXhoIAUgfIAGBCIAeARIgNhSIA0AeIgfg6QAkgXAmARIANAiIgwgeQAACMgbCEQgKAlgHAnQgJAhgKAgImjl6IgiAJIgTAGQh4Afh5AdQgHACAKAJIAAAAQByBSB0hbIhMB5QBRgPBOg2IFAGGIgKgJIgLAAQgvAAgKAuIAAAAQgjiIhshEgAVolrQABgHADgGIgFAAIABANgAd6JYIgTgdIhxgLIAbhqIAIgEICTCSIgyAfgEgg+gCYIADgVIgBm/IA6gPIECAYQhVgGgoA7QBIgfA0AXIAOADIAuA7QjRATgYCxQAEgCADgDQBEhZBnAlQiaBLAMCgQAug8BKgcQgXAmgTAnQgjBDAbAwIARADQBehlCgg5IAEgBIgRBTIArgTQANAPgHAUQgHAVgIATQgMAbgFAaQguAeg7AAQg7AGg8gJIAAFpIgIAAIkaBfgAx8BQIgxgLIi7goIBRktQCkBjAxCyIACgDQAcgmgMgvIANgJIAAiKIgrg8IEJAwICEAmIgGgQQgLgegPgaQglg/g/gmIizgzICzgpIBYgGIhYhCIh2geIB2guIACAAIBiAAICpAAIh4BlIAKAEQBHATA5grIAIgEICBgVQhKBGggBhQgNAngJAnIAcgSIAJgGIDCiDIgMC+IB0igIgaEhQjcg2hPBZIAGgBIAAAaIAAB4IgMAAQgzg3hKgSIgSgEIidAyQiIA4iOAWQgJACgJAAIgPgBg");
	this.shape_51.setTransform(-2.6,-97.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("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");
	this.shape_52.setTransform(-4,-0.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC9966").s().p("AxYTdIADACIACAKgAeFRdIARgsQhBi2iYh1IgXgTIg7hAQhDhagIh8IgBggQBaiHBlh7QBeh0BshiICEBgIAJAKIgJB0IAAh+IAAB+IgIA9QiUCTizBvIAmBeIAiAXIAEAKQA5AMAlAuQARAWAYARIB8E2IAABiQgsgKgRgQQgDgDgEAAQgyAogZAAQgZAAABgogAsZOeIAIgNIABAGQgBAMgDAAQgCAAgDgFgAn5LAIAAgCIABACIgBAAgEghAgEwIBxggQAEgBACgDQACgCAAgFICkhFIAIAAIAAEUICKAJQABAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAFATAAAWIACARQAEApgXAcIgggYIgEAAQgDAAgDACIgJAEQgVAMgSgNQgLgHgEgKIAAgCIgkgDIgYABQghAEgbAUIgMAsIgXgsQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgEALgCALQAAADgCACQgZAggqgBIhOgIIAAArgA3JApIAFiaIC+AQIACgIICKAAIArpTIDJg8IhZBKICQgrIAUgEQAdA2BfhPIAMgIIAMgFIAJACQALAFAEAVQggBfA8hBIAKgLIBUAGIAYDQIA0A4ICsANIAADsIgPAEIgaAKQgfAMgNAfIgBADIh0gUIhLAxIgRAGIgxgSIgbAsIg2ALIgIACIiEAaIhSAJQifhniUCYQgqArg/AEIgSABQg+AAg6gUgAdLk5QgZgYgQgfIEKh6IABgBQAoDAgpDKIAAmJIAAGJQhrhsh2hsgAYZjTQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgYgLIlfmNIiOBKIBOh0QhaAphggQQgbgCgbgHIAAAAQAZAAAXgFQBjgVBbgtIATgGQBLA1A9BBQCUCcCxB5QADguAIgtQAHgnAKglQAlh+BThsIgTgmIBJAWQgEglAPghQAWgyApgnIAjAyIAdgQQAxA+BphNIAAChIiVB5Ighg0IgCArIgEACIgLAGQhHAmgwg2QhzBpBSB+IADABIAeArQgNBvhIBRIgOAPQg6gjg4gkgAhoiuIAAi5IAQgBQBQgCAPhPIADgSQBKAHBIgVQAwgOAbgkIKhCwIADACIA+AWIgoAtIgMAlIgHgDIgLgLIgBACIgBACIgLgFQiDhnibBPIgCACQhWgOgrBJIgBABIgagBIhrAcQg1gmgEhKIAAAAQiVAdiBBKIg0AigAhwnCIAAgDIAcgCIgBAXIgJADQgRgEgBgRgEAgtgLWIgBAAIAAihIADgDQAWApgGA4IABBDgAY5ssIg/hBIAEgkQALgLAwgKQgRgRgdAPIg5gbIBLhAIgghTIglgFQgxA2AjBEIAfgUIABgRIAXABIgbAgIgdAQIgmgwQgGhLAyg6IAJgKIA/gtIgGATIB1g6IA5AlQgLAIgNAAIg0gNIgcApIBQgUQARABASAGIACACIggAgIBTABQgZBAA7ATIABABIAAgCIAmCKQgtCZh4AAQgvAAg7gYgAYGt3IAXAOIAcAgQBAAtBBgqQAmhTgxhHQhCBhhnAIgAZRwjIAnALIAagXIAngFIAEACQgBhchagBQglAyAUA6gAYNwWQAAAFgBAEQgCADgDAAg");
	this.shape_53.setTransform(-1.6,-15.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#494949").s().p("Aj2AmIABABIgDADIACgEgAkKAMIACABIgHAPIAFgQgAEOgoIAAAAQAAgBAAAAQABAAAAAAQAAABAAAAQAAAAABAAg");
	this.shape_54.setTransform(165.1,-133.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_35},{t:this.shape_42},{t:this.shape_41},{t:this.shape_8},{t:this.shape_40},{t:this.shape_6},{t:this.shape_5},{t:this.shape_7},{t:this.shape_16},{t:this.shape_39},{t:this.shape_38},{t:this.shape_30},{t:this.shape_11},{t:this.shape_12},{t:this.shape_28},{t:this.shape_4},{t:this.shape_32},{t:this.shape_3},{t:this.shape_2},{t:this.shape_37},{t:this.shape_13},{t:this.shape_10},{t:this.shape_18},{t:this.shape_26},{t:this.shape_25},{t:this.shape_27},{t:this.shape_24},{t:this.shape_9},{t:this.shape_22},{t:this.shape_23},{t:this.shape_21},{t:this.shape_20},{t:this.shape_36},{t:this.instance},{t:this.instance_1}]},10).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_5},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_7},{t:this.shape_8},{t:this.shape_51},{t:this.shape_32},{t:this.shape_3},{t:this.shape_50},{t:this.shape_39},{t:this.shape_38},{t:this.shape_30},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_2},{t:this.shape_45},{t:this.shape_44},{t:this.shape_10},{t:this.shape_18},{t:this.shape_26},{t:this.shape_25},{t:this.shape_27},{t:this.shape_24},{t:this.shape_9},{t:this.shape_22},{t:this.shape_23},{t:this.shape_21},{t:this.shape_20},{t:this.shape_43},{t:this.instance},{t:this.instance_2}]},25).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.1,-164.1,428.3,326.7);


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
		
		 window.open ("adverb_Scene8.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adverb_Scene6.html","_self");
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
(lib.adverb_Scene7 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(212,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgnBpQgHgFAAgIQAAgKAGgIQAGgJALAAQAKAAAEAHQAFAFAAAIQgBAJgEAHQgGAJgKAAQgHAAgHgFgAgfAvQgGgGAAgHQAAgLARgOIAggWQASgNAAgLQAAgNgNgLQgNgLgNAAQgIAAgMAJQgNAIgGAAQgHAAgGgGQgFgGgBgHQAAgOAZgLQATgKAOAAQAcAAAZAWQAYAWgBAcQAAAcgbAVIgXAQQgOAJgGAIQgHAIgIAAQgHAAgGgGg");
	this.shape.setTransform(320,356.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AguA7QgXgRAAggQAAghASgYQAVgbAgAAQAZAAAPAIQAVAKAAAVQAAAQgRALQgHAFgYAKIgtAUQAGAHAKAEQAJADAMAAQARAAANgHQALgHAIAAQAOAAAAAOQAAAPgXAKQgTAJgVAAQggAAgVgQgAgSggQgJAIgGARIAfgNQARgIAMgHQgKgGgPAAQgLAAgJAJg");
	this.shape_1.setTransform(304.1,359.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("Ag2BHQgDgEAAgJIAAhYIAAgNIAAgMQAAgIAEgFQAFgFAJAAQAOAAAEAPQAXgSAeAAQAbAAAAAlIAAAJQgBAVgSAAQgSAAABgSIgBgOQgeAFgNAbIAABDQgBAIgFAGQgFAEgIAAQgJABgFgGg");
	this.shape_2.setTransform(290,359.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AguA7QgXgRAAggQAAghASgYQAUgbAiAAQAYAAAPAIQAVAKAAAVQAAAQgRALQgIAFgXAKIgtAUQAHAHAJAEQAJADALAAQATAAANgHQAKgHAIAAQAOAAAAAOQAAAPgXAKQgTAJgWAAQggAAgUgQgAgSggQgJAIgFARIAegNQASgIAKgHQgIgGgPAAQgMAAgJAJg");
	this.shape_3.setTransform(275,359.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AAgBkQgEgLgCgUQgDgTAAgNIABgKIAAgKIAAgMQgCgHgFAAQgQAAgLANQgGAHgLAUQAAAxgFAKQgFAMgMAAQgHAAgGgGQgGgFAAgHIABgHQABgDABgiIAAhbIAAgEIABgWIgBgMIgBgNQAAgIAFgFQAGgFAIAAQANAAAFAPQACAIAAARIAAAcIgBAaQAKgKALgEQALgFANAAQAXAAAKANQAIAKACATIABAiIADAbIAEAaIABAFQAAAIgGAFQgGAFgHAAQgOAAgEgOg");
	this.shape_4.setTransform(259.5,355.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AAcBrQgIgFAAgIQgHgQgBgKIgQhXQgJAbgKAVQgPAhgFATIABAGQAAAJgIAFQgGAFgIAAQgKAAgHgFQgHgGAAgKIgEgQIgPg/QgJgggVg8IgBgHQAAgIAGgFQAFgEAIAAQALAAAGAJQADAFAFAMQANAnARBJQALgbALgjQAJgeAGgMQAOgeANAAQANAAAHAPQADAHACASIAEAbQADAYAOA9QAPgiAYg/IAHgZQAEgPAGgJQAHgKALAAQAIAAAGAFQAFAGAAAIQAAACgFAMIgFAOIgIAYQgHAUgRAlQgSAngHAUQgGAOgFAJQgGALgNAAQgIAAgGgEg");
	this.shape_5.setTransform(236.7,356.4);

	this.instance_1 = new lib.Main();
	this.instance_1.parent = this;
	this.instance_1.setTransform(278,192.7,0.883,0.883);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '69BA1FED2ED5564CAD1B202E7498C69D',
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
		{src:"sounds/Adverb7_playTherewav.mp3", id:"Adverb7_playTherewav"},
		{src:"sounds/Adverb7_werewav.mp3", id:"Adverb7_werewav"},
		{src:"sounds/Adverb7_wereWillwav.mp3", id:"Adverb7_wereWillwav"},
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
an.compositions['69BA1FED2ED5564CAD1B202E7498C69D'] = {
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