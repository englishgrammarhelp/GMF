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


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(109,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgXAuQgMgFAAgHQAAgEACgCQADgDAEAAQACAAAEAEQACACAHABIAKABQAGAAAFgCQAHgCABgFQgBgMgQgDIgHgCQgLgCgFgEQgGgEAAgJQAAgSAQgGIAPgGQALgDAFgCQADgCAEAAQADAAADADQACACAAADIABAHIABAIQAAADgCADQgCACgEAAQgFAAgCgDIgBgJIgTAGQgNAFAAAIIAFACQASACAJAHQAOAHAAARQAAANgMAIQgJAFgOAAQgLAAgLgEg");
	this.shape_1.setTransform(102.5,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_2.setTransform(94.1,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgWAuQgNgFAAgHQAAgEADgCQACgDADAAQADAAAEAEQACACAHABIAJABQAHAAAEgCQAJgCgBgFQABgMgRgDIgHgCQgLgCgEgEQgIgEABgJQgBgSARgGIAPgGQALgDAEgCQAEgCAEAAQADAAADADQACACAAADIABAHIABAIQAAADgCADQgDACgDAAQgEAAgCgDIgDgJIgTAGQgMAFAAAIIAFACQASACAJAHQANAHAAARQAAANgLAIQgJAFgPAAQgLAAgJgEg");
	this.shape_3.setTransform(84.9,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AAbArIgGgGIgOAGQgGACgDAAQgUAAgJgLQgIgLAAgVQAAgSAOgPQAOgOASAAQAHAAAJADQAMAFgBAHIgBAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAADgCADQgDACgDAAQgBAAgEgDgAgNgUQgKALABAMQgBAOAGAHQAEAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIAAgIIACgJIgFgCIgEgCQgMAAgJALg");
	this.shape_4.setTransform(76.6,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHAAADAGQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAGQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_5.setTransform(68.4,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AAXA/IgEgTIgBgVIAAgGIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgCQgDgDAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgDQACgCAEAAQAHAAABAHIABAPIgBASIAAASIAAAHQAHgIAIgFQAGgFAJAAQAOABAFAIQAEAHAAAOIABAQIACAQIACASIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_6.setTransform(59.3,13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgfBEQgDgDAAgDIABgiIAAggIgCghIgBgRQAAgGACgEQADgFAFAAQADAAACADQACACAAADIAAADIgBAEQAHgEAHgDQAGgCAGAAQARAAAIAPQAGAMAAATQAAARgKAMQgKANgRAAQgHAAgKgEIAAApQAAADgDADQgCACgDAAQgEAAgCgCgAgHgrQgEACgHAGIABAnQAJADAIABQAKgBAGgHQAFgGAAgLQAAgOgEgIQgEgHgHAAQgHgBgGAEg");
	this.shape_7.setTransform(49.8,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_8.setTransform(35.2,13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_9.setTransform(24.2,13.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AgkBAQgHgHgBgbIABgLIAAgPIgBgDIACgEIACgkIgBgJIgBgJQAAgKAIAAQAEAAADACIASgDIAQgBQAUgBAMAFQAFACAAAGQAAAEgBACQgDADgEAAIgCAAQgOgEgNAAIgOABIgSADIABAJIgBAgIAjgEIAUgCQADABADACQACACAAAEQABAHgIABIgUABIglAEIgBALIAAAKQAAASADADQACADALAAIAPgBIAPAAIAFgBIAEAAQAJAAAAAJQAAAHgGABQgIABgZAAQgaABgIgHg");
	this.shape_10.setTransform(13.7,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AgOA8QgKgYgNgvIgGgXQgFgRAAgGQAAgDACgCQADgDADAAQAHAAACAHIACAPIAIAcQAJAeAHAWIABgBIAVg7IAHgVQAEgNAGgFQADgEADAAQAEAAADADQACACAAADIgBAGQgFAHgEAJIgHASIgVA7IgJAVQgDAFgEAAQgGAAgDgHg");
	this.shape_11.setTransform(3.2,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AgfBEQgDgDAAgDIABgiIAAggIgCghIgBgRQAAgGACgEQADgFAFAAQADAAACADQACACAAADIAAADIgBAEQAHgEAHgDQAGgCAGAAQARAAAIAPQAGAMAAATQAAARgKAMQgKANgRAAQgHAAgKgEIAAApQAAADgDADQgCACgDAAQgEAAgCgCgAgHgrQgEACgHAGIABAnQAJADAIABQAKgBAGgHQAFgGAAgLQAAgOgEgIQgEgHgHAAQgHgBgGAEg");
	this.shape_12.setTransform(-12.5,17.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AATAoQgLAFgNAAQgKAAgIgEQgHgGgCgKQgDgWAAgQQAAgMADgOQAAgIAIAAQADABACACQADACAAADIgBANIgCANIACAWQAAAKACAGIAFACIAFACQALgBAMgEIAAgQIAAgPQAAgSACgOQAAgHAIAAQADAAACACQADADAAADIgCAgIAAARIAAASIABAFIAAAGQAAADgDACQgCADgDAAQgHAAgBgIg");
	this.shape_13.setTransform(-21.5,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_14.setTransform(-35.5,15.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("AAWA/QgEgIgJgLIgOgVIgPALIgBAZQAAAEgCACQgCADgEAAQgIAAAAgMIABgUIABgVIABgcIAAgcIAAgJIgBgJQAAgEADgCQACgCADAAQADAAADACQACACAAAEIAAAJIABAJIgBAbIAAAcIAVgSIASgTQADgDADAAQADAAADADQACACAAAEQAAACgCADQgKAMgPANIASAYQANASAAAFQAAADgDADQgCACgEAAQgEAAgDgFg");
	this.shape_15.setTransform(-44.4,13.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("AAbArIgGgGIgOAGQgGACgDAAQgUAAgJgLQgIgLAAgVQAAgSAOgPQAOgOASAAQAHAAAJADQAMAFgBAHIgBAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAADgCADQgDACgDAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIAAgIIACgJIgFgCIgEgCQgMAAgJALg");
	this.shape_16.setTransform(-53.9,15.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_17.setTransform(-64.7,15.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9900").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_18.setTransform(-80.6,14.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9900").s().p("AAbArIgGgGIgOAGQgGACgDAAQgUAAgJgLQgIgLAAgVQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAADgCADQgCACgEAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIAAgIIACgJIgGgCIgDgCQgMAAgJALg");
	this.shape_19.setTransform(-88.9,15.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF9900").s().p("AAXA/IgEgTIgBgVIAAgGIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgCQgDgDAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgDQACgCAEAAQAHAAABAHIABAPIgBASIAAASIAAAHQAHgIAIgFQAGgFAJAAQAOABAFAIQAEAHAAAOIABAQIACAQIACASIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_20.setTransform(-98,13.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF9900").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_21.setTransform(-107.1,14.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF9900").s().p("AgWAvQgNgGAAgIQAAgDADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAHAAAEgBQAIgDAAgFQAAgLgPgFIgIgCQgLgCgEgDQgIgDAAgKQAAgRARgIIAPgFQALgDAEgDQAEgBAEAAQADAAADACQACADAAAEIABAHIABAGQAAAEgCADQgDACgDAAQgEAAgCgDIgCgJIgUAGQgMAFAAAIIAFABQASADAJAGQANAIAAARQAAAOgLAGQgJAGgPAAQgKAAgKgDg");
	this.shape_22.setTransform(140.3,-10.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF9900").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgCAAgEIABgGIAAgGIgBgbIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAAEIgBADIAAASIAAAVQAHgFAHgCQAGgCAFgBQASAAALAOQAKAMAAASQAAAUgMANQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAPIAAAMIAAAOIALAEQAFACAHAAQALAAAHgIQAIgJAAgNQAAgMgGgIQgHgIgLAAQgGAAgHAEg");
	this.shape_23.setTransform(131.5,-12.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF9900").s().p("AgfAmIAAg5IAAgIIAAgIQAAgJAIAAQAIAAAAAOQAPgPATAAQAHAAADAEQADAGAAAKIAAAGQAAAKgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFAKIAAAtQAAAIgIAAQgHAAAAgIg");
	this.shape_24.setTransform(122.5,-10);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9900").s().p("AgcAkQgMgLAAgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAIgCQAKgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_25.setTransform(113.7,-10.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF9900").s().p("AgIAmIgNgiIgPglIgBgDQAAgEADgCQADgCADAAQAFAAACAEIAVA6IAPgmIAHgTQACgFAFAAQAEAAACACQADADAAADQAAADgOAhIgRAmQAAAHgHABQgGAAgCgIg");
	this.shape_26.setTransform(104.8,-10.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF9900").s().p("AgcBAQgLgCAAgHQAAgGAIAAIAKABIAPABQAPAAAGgQQAEgKAAgUQgEAIgHAEQgGAEgGAAQgQAAgJgKQgKgLAAgPQABgWANgOQANgOAWAAQAIAAAFACQAEACAEAEQAJAAAAAKIgCAQIgDAPIgCAbQAAAQgDAMQgDANgJAGQgKAIgSAAQgLAAgHgCgAgOgpQgJAKABAPQAAAMAEAFQAFAGAJAAQAHAAAIgIQAIgJABgJIADgcIgHgDIgIgCQgOAAgIALg");
	this.shape_27.setTransform(90.9,-7.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF9900").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCgBgEIAAgIIgBgHIABgXIACgXIAAgIIgBgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_28.setTransform(82.3,-10.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF9900").s().p("AgHA8QgCgCgBgEIAAgOIAAgQIAAgTIABgSQABgEACgDQACgCADAAQADAAADACQACADAAAEIgBASIgBATIABAQIAAAOQAAAEgCACQgDACgCAAQgEAAgCgCgAgEgtQgEgCAAgEQAAgFAEgCQACgDADAAQAFAAACADQADACAAAFQAAAEgDACQgCADgFAAQgDAAgCgDg");
	this.shape_29.setTransform(75.4,-12.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF9900").s().p("AgfBDQgDgCAAgEIABghIAAggIgCghIgBgRQAAgGACgEQADgFAFABQADAAACABQACADAAADIAAADIgBAEQAHgEAHgCQAGgDAGAAQARAAAIAPQAGAMAAAUQAAAQgKAMQgKAMgRAAQgHAAgKgCIAAAnQAAAEgDACQgCACgDAAQgEAAgCgCgAgHgrQgEACgHAHIABAmQAJAEAIgBQAKABAGgIQAFgGAAgKQAAgQgEgHQgEgIgHAAQgHABgGADg");
	this.shape_30.setTransform(68.4,-8.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9900").s().p("AgJA8IABgeIABgeIAAgdIABgfQAAgHAHAAQAJAAgBAHIAAAfIgBAdIgBApIgBAUQAAAHgHABQgHAAgBgJg");
	this.shape_31.setTransform(61.5,-12.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF9900").s().p("AgcAkQgMgLAAgSQgBgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAJgCQAJgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_32.setTransform(54.6,-10.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF9900").s().p("AAXA/IgEgUIgBgTIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAFQgCAGgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgEAJAAQAOgBAFAKQAEAFAAAOIABAQIACASIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_33.setTransform(45,-12.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF9900").s().p("AgcAkQgMgLAAgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAJgCQAJgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_34.setTransform(30.4,-10.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF9900").s().p("AgfAmIAAg5IAAgIIAAgIQAAgJAIAAQAIAAAAAOQAPgPATAAQAHAAADAEQADAGAAAKIAAAGQAAAKgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFAKIAAAtQAAAIgIAAQgHAAAAgIg");
	this.shape_35.setTransform(21.8,-10);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF9900").s().p("AAaAqIgFgGIgOAHQgGACgDAAQgUAAgIgLQgJgLAAgUQAAgUAOgOQAOgOASAAQAHAAAJAEQAMAEAAAHIgCAEIgBAKIgBASQAAAKACAGIAEAOIACAFIABACQAAADgCACQgCACgDAAQgCAAgFgEgAgNgUQgKAKAAANQABAOAEAGQAFAIAKAAQAHAAAFgEIAJgGQgDgVAAgLIABgIIABgJIgGgCIgDAAQgLAAgKAKg");
	this.shape_36.setTransform(13.1,-10);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF9900").s().p("AgWAvQgNgGAAgIQAAgDACgDQADgCADAAQADAAAEAEQACACAHABIAKABQAFAAAFgBQAJgDgBgFQABgLgRgFIgHgCQgLgCgEgDQgIgDABgKQAAgRAQgIIAPgFQALgDAEgDQAEgBAEAAQAEAAACACQACADAAAEIABAHIABAGQAAAEgCADQgDACgDAAQgFAAgBgDIgDgJIgTAGQgMAFAAAIIAFABQASADAJAGQAOAIAAARQAAAOgMAGQgKAGgNAAQgMAAgJgDg");
	this.shape_37.setTransform(-0.7,-10.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF9900").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgCAAgEIABgGIAAgGIgBgbIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAAEIgBADIAAASIAAAVQAHgFAHgCQAGgCAFgBQASAAALAOQAKAMAAASQAAAUgMANQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAPIAAAMIAAAOIALAEQAFACAHAAQALAAAHgIQAIgJAAgNQAAgMgGgIQgHgIgLAAQgGAAgHAEg");
	this.shape_38.setTransform(-9.5,-12.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF9900").s().p("AgfAmIAAg5IAAgIIAAgIQAAgJAIAAQAIAAAAAOQAPgPATAAQAHAAADAEQADAGAAAKIAAAGQAAAKgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFAKIAAAtQAAAIgIAAQgHAAAAgIg");
	this.shape_39.setTransform(-18.6,-10);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF9900").s().p("AgbAkQgOgLAAgSQAAgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQADACAAADQAAAJgQAGQgMAGgMAAQgSAAgLgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgJAAgIAIg");
	this.shape_40.setTransform(-27.4,-10.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF9900").s().p("AgIAmIgNgiIgPglIgBgDQAAgEADgCQADgCADAAQAFAAACAEIAVA6IAPgmIAHgTQACgFAFAAQAEAAACACQADADAAADQAAADgOAhIgRAmQAAAHgHABQgGAAgCgIg");
	this.shape_41.setTransform(-36.2,-10.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF9900").s().p("AgRBAQgDgDAAgDQAAgDAIgPIAKgTQgPgTgEgKQgEgJgIgNIgPgWIgBgFQABgDACgDQACgCAEAAQAEAAADAEIAHAKIALASQAHAKADAJQADAHAHALIATguIAJgRQACgGAGAAQADAAADACQADADgBADQAAAEgDAIIgGAKIgPAjIgPAiIgKASIgEAJQgDAFgEAAQgDAAgDgCg");
	this.shape_42.setTransform(-51.2,-12);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF9900").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_43.setTransform(-61.5,-12.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF9900").s().p("AAdArIgGgaIgVAEIgWAFIgOAfQgCAFgFAAQgDAAgDgDQgDgCABgDQAAgFAMgaQgBgCgBgDQAAgGAIgCQAKgRAPgXQASggAFABQAGgBADAKIAFAcIAMA4IAGANIABAJQABADgDADQgDADgDAAQgHgBgGgTgAgKAGIAegGIgHggg");
	this.shape_44.setTransform(-73.3,-11.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF9900").s().p("AgkA9QgCgDAAgDQAAgDACgDQADgDAEAAIARgCIABgPIAAgNIgBgPQAAgRACgeIgKABIgMAAQgDAAgCgCQgDgDAAgEQAAgHAIgBIAZgBQAPABAaADQAHABAAAIQAAAEgDACQgCACgDAAIgOgBIgNgCIgCAtIAAAPIABAOIgBAOIAaAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAIgOABIgOAAIgPABIgQABQgEABgDgDg");
	this.shape_45.setTransform(-84.1,-12);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF9900").s().p("AgjBBQgFgDAAgJIACgcQACglAAguQgBgEADgCQADgDADAAQADAAADADQACACAAAEQAAAvgCAlIgBANIgBAMQAWAAAggKIADgBQADAAADADQACADAAADQAAAFgFADQgKAEgUAEQgRADgMAAQgIAAgEgDg");
	this.shape_46.setTransform(-93.2,-12);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF9900").s().p("AgjA9QgDgDAAgDQAAgDADgDQACgDADAAIASgCIABgPIgBgNIAAgPQAAgRACgeIgLABIgLAAQgDAAgCgCQgDgDAAgEQAAgHAIgBIAZgBQAQABAZADQAHABAAAIQAAAEgDACQgDACgDAAIgNgBIgOgCIgBAtIAAAPIAAAOIAAAOIAaAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAIgOABIgOAAIgPABIgRABQgDABgCgDg");
	this.shape_47.setTransform(-102.7,-12);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF9900").s().p("AAoBAQgGgGgHgKIgLgRIgNgSIgbAhIgQARQgDACgDAAQgDAAgDgCQgCgDAAgDQAAgDACgDIAOgQIAggkIgTgYIgKgNIgLgMQgDgDgBgEQABgDACgDQACgDAEAAQAHAAALAQIAKAOIARAXIATgbQATgaAFAAQAEAAACADQACADABADQAAADgCADIgRAWIgLAPIgMAOIATAaIATAaQACADABADQgBAEgCACQgCADgEAAQgDAAgDgDg");
	this.shape_48.setTransform(-113.6,-11.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF9900").s().p("AgkAxQgKgMgDgXQgBgLAAgeIAAgTIACgLQACgGAFAAQAIAAAAAOIAAAxQAAAxAiAAQAhAAAAhTIAAgIIAAgHQAAgFACgEQACgFAFAAQAIAAAAALIAAALIAAAKQAABfgyAAQgYAAgNgPg");
	this.shape_49.setTransform(-125.9,-12);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF9900").s().p("AAdArIgFgaIgXAEIgUAFIgPAfQgDAFgEAAQgEAAgCgDQgDgCAAgDQAAgFANgaQgBgCAAgDQAAgGAIgCQAJgRAOgXQATggAFABQAHgBACAKIAFAcIANA4IAEANIADAJQAAADgDADQgCADgDAAQgJgBgFgTgAgKAGIAdgGIgGggg");
	this.shape_50.setTransform(-138.5,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.7,-26.7,293.5,53.4);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhCBzQgfgPgBgYQAAgHAFgFQAFgEAHAAQAIAAAHAJQAIANAHAFQAOAJAbAAQAYgBAWgKQAdgPAAgZQAAgVgYgMQgUgLgdgBQgaAAgSgKQgYgNAAgZQAAgeAigYQAggYAhAAQAQABAUAFQAbAHAAALQAAAPgPAAQgGAAgRgEQgRgDgJAAQgZAAgSAMQgSANAAATQAAAOAYAFQAJACAaACQAmADAVAVQAUASAAAcQAAAnglAYQggAUgpAAQgeAAgZgLg");
	this.shape.setTransform(147.5,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhNCAQgHgHABgHIAAgwQAAgYACgrIAEhFQAAgPACgeQABgJAEgCQAXgIAdABQAcAAAbATQAfAXAAAiQAAArghAYQAZAKAMANQAMANAAAQQAAATgVATQgQANgQAHQglAPg5AAQgIAAgGgHgAgzBCIAAAjQAsgCAagLQAMgEALgKQAKgIAAgEQAAgJgWgJQgQgIgOgEIgRgDIgHABIgGAAIgUgBIgBAlgAgshiIAAAdIgDBAIAZACQAYgCAQgOQARgOAAgYQAAgPgRgOQgSgNgSAAIgaABg");
	this.shape_1.setTransform(125.6,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhUB+QgFgFAAgIIgBgnIgBgnQAAgPADgdQADgeAAgQIgBgZIgCgZQAAgJAFgHQAHgJALABIAoADQAXADAOAIQBEAkAAAzQAAAZgXATQgTAPgbAJQAzAbAaAfQAEAFAAAGQAAAHgFAFQgFAGgHAAQgGAAgGgGQg3g2hCgTIACAhIAAAgQAAAIgEAFQgFAFgHAAQgHAAgFgFgAg0hKIABAUQAAAOgCATIgEAgIAHABIAIAAQAqAAAUgMQAJgEAIgIQAJgJAAgHQAAgXgagUQgXgSgbgDIgYgCg");
	this.shape_2.setTransform(103.8,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhICAQgQgPAAg1IAAgYIACgbQgCgEAAgEQAAgEADgFQADgwAAgXIgBgSIgCgSQAAgTARgBQAHAAAFAFIAlgIQASgCAPAAQAoAAAYAJQALAFAAALQAAAHgEAFQgFAGgHgBIgFgBQgcgHgagBQgOAAgPADQgQACgTAGIACARQAAAXgDApIBIgHIAngEQAHAAAFAFQAFAFAAAHQAAAOgPACIgoAEIhLAHIgBAWIgBAUQAAAkAGAHQADAFAXgBIAeAAIAfgBIAJgBIAKgBQASAAAAASQAAAOgOADQgQACgzAAQgzAAgPgNg");
	this.shape_3.setTransform(82.6,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgdB5QgVgygYheIgNguQgKgiAAgLQAAgHAFgFQAFgFAHAAQANAAADAOIAHAdIAQA4QAQA9AOAtIABgDIAsh4IAOgoQAKgZAKgMQAFgHAIAAQAGAAAGAFQAFAFAAAHQAAAFgDAFQgKAQgHARIgMAkIgtB4QgIAVgKAUQgFAKgKAAQgMAAgFgNg");
	this.shape_4.setTransform(61.6,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgjCAQgFgGAAgHQAAgFAPgeIAVgmQgeglgJgWQgHgSgSgbIgcgrQgCgFAAgEQAAgHAFgFQAFgFAHAAQAIAAAFAIIAOAVIAXAjQAMAUAHASQAGANARAXIAmhbIASgkQAEgLALAAQAHAAAFAFQAFAFAAAHQAAAIgJAPIgKATIgdBHQgQAngPAeIgUAkIgJASQgFAKgJAAQgHAAgFgEg");
	this.shape_5.setTransform(28,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhUB+QgFgFAAgIIgBgnIgBgnQAAgPADgdQADgeAAgQIgBgZIgCgZQAAgJAFgHQAHgJALABIAoADQAXADAOAIQBEAkAAAzQAAAZgXATQgTAPgbAJQAzAbAaAfQAEAFAAAGQAAAHgFAFQgFAGgHAAQgGAAgGgGQg3g2hCgTIACAhIAAAgQAAAIgEAFQgFAFgHAAQgHAAgFgFgAg0hKIABAUQAAAOgCATIgEAgIAHABIAIAAQAqAAAUgMQAJgEAIgIQAJgJAAgHQAAgXgagUQgXgSgbgDIgYgCg");
	this.shape_6.setTransform(7.4,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AA6BWQgEgPgHglQgRACgbAGIgrAJQgJAWgTAqQgGAJgJAAQgHAAgFgFQgFgFgBgHQABgIAZg0QgDgFAAgFQAAgOAQgEQATgiAdguQAmg/AKAAQANAAAFASIAKA4IAZByIAJAbQAFANABAEQgBAIgFAEQgFAFgGAAQgQAAgLgngAgVAMQAUgFApgHIgOhAg");
	this.shape_7.setTransform(-16.3,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhIB6QgFgFAAgHQAAgHAFgFQAEgFAHAAQALAAAZgDQACgOAAgSIgBgbIgCgcQAAgmAFg5IgVABIgWABQgHgBgFgFQgFgEAAgIQAAgPAQgBQANgCAlAAQAgAAAyAHQAPACAAAQQAAAIgGAFQgFADgGAAQgLAAgQgCIgbgDQgEAwAAArIABAcIABAdIgBAcIA0AAQAHAAAFAFQAEAFAAAHQAAAHgEAFQgFAFgHAAIgcAAIgcABQgKAAgWADQgWADgLAAQgHAAgEgFg");
	this.shape_8.setTransform(-37.8,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhHCDQgKgHAAgTIADg3QAFhLgBhdQAAgHAFgFQAFgFAHAAQAHAAAFAFQAEAFAAAHQAABegEBMIgCAZQgBAOAAALQArAABBgVIAFgBQAIAAAEAGQAFAFAAAHQAAAKgLAFQgSAJgpAHQgkAHgXAAQgRAAgHgFg");
	this.shape_9.setTransform(-56,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhIB6QgFgFAAgHQAAgHAFgFQAEgFAHAAQALAAAZgDQACgOAAgSIgBgbIgCgcQAAgmAFg5IgVABIgWABQgHgBgFgFQgFgEAAgIQAAgPAQgBQANgCAlAAQAgAAAyAHQAPACAAAQQAAAIgGAFQgFADgGAAQgLAAgQgCIgbgDQgEAwAAArIABAcIABAdIgBAcIA0AAQAHAAAFAFQAEAFAAAHQAAAHgEAFQgFAFgHAAIgcAAIgcABQgKAAgWADQgWADgLAAQgHAAgEgFg");
	this.shape_10.setTransform(-75.1,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("ABQCAQgNgMgNgTIgXgjIgaglIg4BCIgeAiQgGAGgGAAQgHAAgFgFQgFgGAAgHQAAgGAEgFIAeghIA+hHQgSgZgUgYIgUgaQgMgQgKgIQgGgGAAgIQAAgHAEgFQAFgFAHAAQAOAAAWAeIAVAdQATAWAQAXIAmg1QAlgzALAAQAGAAAGAFQAFAFAAAHQAAAGgEAFQgXAbgMASIgUAeQgMARgMAMIAlA1QAWAfARAUQAEAGABAGQAAAHgGAFQgEAFgIAAQgGAAgFgFg");
	this.shape_11.setTransform(-96.9,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AhJBiQgVgYgFgvQgCgUgBg/IABglQACgPACgGQAEgMAKAAQAQAAAAAcIAABhQAABkBGAAQBCAAgBipIAAgPIAAgOQABgLADgHQAEgKAKAAQAQAAAAAXIAAAVIAAAUQABC/hkAAQgyAAgageg");
	this.shape_12.setTransform(-121.4,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AA6BWQgEgPgHglQgRACgbAGIgsAJQgHAWgVAqQgFAJgJAAQgHAAgFgFQgGgFABgHQAAgIAZg0QgDgFAAgFQAAgOAQgEQATgiAdguQAng/AJAAQANAAAFASIALA4IAYByIAKAbQAEANAAAEQAAAIgEAEQgGAFgHAAQgPAAgLgngAgUAMQATgFAogHIgNhAg");
	this.shape_13.setTransform(-146.7,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.1,-25.7,322.2,51.4);


(lib.static_buffy_activebuble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AGBAAQAACfhxBxQhwBxigAAQifAAhxhxQhwhxAAifQAAifBwhxQBxhwCfAAQCgAABwBwQBxBxAACfg");
	this.shape.setTransform(38.5,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,204,102,0.502)").s().p("AkQEQQhwhxAAifQAAieBwhxQBxhxCfAAQCgAABwBxQBxBxAACeQAACfhxBxQhwBxigAAQifAAhxhxg");
	this.shape_1.setTransform(38.5,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,81,81);


(lib.BuffyStill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAVASQgGgGADgKQABgDADgDQAGgIAJgEQAJgFAJADQAKACAFAJQADAFAAAFQAAAEgBADQgDAHgHAGQACACAAADAAVASQgDACgDABAA1ARQgIgCgIAAQgFgBgEACQgEABgDABABJADQgFgGgKAFQgLAGAGAJQAAAAABABQAGABACAEAgZgHQAAgBAAAAQAAgKgJgFQgIgFgKACQgKACgDAKQgDAJADAJQAFgCAGABQAGABAFABQAEABAEACQABAAABABQAAgBABAAQAGgIABgHgAgrAFQgCgMALgCQAGgCADADQAAAAAAABAhBAEQgEABgDAD");
	this.shape.setTransform(-6,-11.7,2.365,2.365);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAoALIgBAAQgGgJALgGQAJgFAGAHIgBAGQgDAHgHAGQgDgEgFgCgAgxACIgJgCQgBgNALgDQAFgBADADIABAAQgBAJgHAHIAAABIgCgBg");
	this.shape_1.setTransform(-2.6,-10.3,2.365,2.365);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAHQABgEACgDQAGgIAJgEQAJgEAJACQAKADAFAIQADAFAAAGQgFgHgJAFQgLAHAFAJQgIgCgIgBQgEAAgEABIgIADQgGgGAEgKgAg4AIQgGgBgGACQgDgJADgJQAEgKAKgDQAJgCAIAFQAKAFgBAKIAAABQgDgDgGABQgLADACAMIgKgCg");
	this.shape_2.setTransform(-5.3,-12.9,2.365,2.365);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AitiaQgCgMAIgMQALgQATgDQAEAAADABQAEgMALgJQAPgLATgDQATgCAHASQACADABADQgCgSAQgLQAPgJASAEQANADANAGQAQAIAEARQAIgKANgGQARgHAPAIQAQAIADARQADAQgEAQQAKgDAJABQAMAAAKAIQAHAGgCAJQgEAUATAHQAUAHgDATQgCALgKAEQAKADALABQARABALALQAJAJgEANQgFASgNAIQAKgBAKAEQAKADABAJQACAUgOAOQAHAAADADQAJAFgDANQACAKgHALQgMAUgXAFQgFABgEgHQgIAPgUACQgaAQgagSQgGgDAAgDQABAEgCADQgGAJgNAAQgNgBgJgIQABADABADQADAGADAGQAGACAGACQAHACAIACQAEABAEABQAEABADABQAJACAJABIgyBkIijAAIhHhaQAGAAAGgCQACAAABgBQAIgDAIgDQAIgEAGgEQAGgEAGgGQAAgCAAgBQgBgDgBgEQgGAAgFACQgOAFgOAFQgUAIAAgTQgUAUgdgEQgfgEAIgUQgYAHgEgZQgEgaAUgIQgJgCgBgJQgCgRAHgPQALgZAXgJQgMgEAEgNQAFgVAVgFQAJgCADgHQADgGgDgMABNAJQgBgFABgEQABgBABAAQABgCABgCQABgCAAgDQABgKgEgIQgBgBAAgBQAGABgBgGQAAgBAAgBQAAgHAAgIQAAgCAAgCQgBgEAAgEQgBgCABgCQAAAAAAgBQACgDgBgEQAAgFgEgDQgEgDgEgFQgBgBAAgBQAAAAgBgBQgCgBgBgCQgEgHgFgFQgEgEgFgCQgBgBgBgBQgCgCgCgCIgBAAQgCgCgCgCQgBgBgCAAQgDABgDAAQgBABgBAAQgDACgDgBQAAAAAAAAQgBgBgBgBQgBgBgBAAQgCgBgCgCQgCgBgDABQgEABgDACQgBABgCABQgDABgEAAQgDAAgCACQgBABgCABQgFAGgGABQgCAAgBgBQgBgBgCgDQAAgBgBAAQgBgBgBAAQgBAAgCgBQgEgDgIABQgBAAAAAAQgBAAgBABQgBAAgBAAQgGACgIgBQAAAAgBAAQgCgBgBACQgBABgBABQgBABgBAAQgDACgEADQAAABgBABQgDACAAADQgBACABACQAAABAAABIAAABQAAADgEAAQAAAAgBAAQgCACgBACQgBABAAABIAAABQgLADgHAJQgDADgCAFQgDAHgCAHQgDALAAALIAAAAQgLgCgIALQgDAEgCAGQgFANgBAOQgBAUAKARQAJAQANAMQAOAMAQALQADACAEACQANAHAPADQAUADASgGQATgHAOgLQADgCADAAAAVhXQAFgDAFgBQAEgBAEgBQAJAAAIAFQACACACACQACADADADAhMhdQABgEACgDQABgBABgBQAIgFAJABQAGAAAFACQABABACABQADACADACAithGQgRgDgJgQQgLgSAIgUQAIgUASABQAFABACACQgBgDgBgCQgBgDgBgDQACACAAADQAAABAAAAAipiPQACACAAACAiDggQAAABAAABQAAAGACAFAhDgLQAEgKAKAAQALgBAFAJAhqAGQAJgBAKgCQAJgBAFAFQACACABACQABADADACQgHgCgHgCQgJgCgJgCQgEgBgEgBQgEgBgEgCIAAABQgEAIABAJQABAJAEAJQAFAIAHAHQACACACABQAJAAAJgDQAJgCAKgBQAKgBAJAAQAKAAAIgFQADgBACgCQACgBACgBQAFgGACgHQgLgCgJgDQgKgDgIgFQgLgHgFAMQgBgBgBAAQgCgBgCgBAhgA5QAGAEAGACQAIAEAJAAQAKAAAJgDQAKgEAIgFQAIgEAGgHQACgCABgCAhdBqQADAGABAGAhXCAQABAGAAAGQgBAHAAAGQgBADAAADABNAJQgEADgBAFABDBIQAEAAAEgBQAJgDAIgHQAHgGAEgJQADgIAAgJQAAgHgCgFQgBgDgCgDQgHgKgLAEQgEACgCACABDBIQgFAAgFgCABIBwQgBgEgBgEQgBgJgBgKQAAgGgBgHAgGAbQgJABgKgBQgJgBgJgDQgIgCgJgC");
	this.shape_3.setTransform(0,0,2.365,2.365);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B5783E").s().p("AgbAcIgMgGQAJAAAKgDQAJgCAJgBIASgBQAKAAAIgFIAGgDIABACQgHAHgIAEQgIAFgKAEQgIADgKAAQgIAAgJgEgAAggHQgJgBgJgDIgQgFQAEgLALAHQAIAFAJADIAUAFIgGAAIgMAAgAgWgWIgTgEIgIgCIATgDQAJgBAGAFIACAEIAEAFIgNgEg");
	this.shape_4.setTransform(-13.6,8.3,2.365,2.365);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmAYQgHgHgEgIQgEgJgBgIQgBgKAEgIIAAAAIAHADIAIACIATAEIANAEIAEACIACAAIARAFQAJADAJABIASAAQgBAGgFAGIgEACIgFADQgJAFgJAAIgUABQgIABgJACQgJADgJAAIgFgDg");
	this.shape_5.setTransform(-14.9,7.2,2.365,2.365);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9A67").s().p("Ag+C8IhHhaQAGAAAGgCIADgBIAQgGIAOgIQAGgEAGgGIABAMIgBANIgBAGIABgGIABgNIgBgMIAAgDIgCgHQgBgGgDgGQANAIAPACIANABIAAAAIAAAAQANAAAMgEQASgHAPgLQADgCADAAQgDAAgDACQgPALgSAHQgMAEgNAAIAAAAIAAAAIgNgBQgPgCgNgIIgHgEQgQgLgOgMQgNgMgJgPQgKgRABgUQABgOAFgOIAFgKQAIgLALACIAAAAQAAgLADgLIAFgOIAFgIQAHgJALgDIAAgBIABgCIADgEIABAAQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgBIAAgCIAAgEQAAgDADgCIABgCIAHgFIACgBIACgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIABAAQAIABAGgCIACAAIACgBIABAAQAIgBAEADIADABIACABIABABIADAEQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAGgBAFgGIADgCQACgCACAAQAEAAADgBIADgCIAIgDQADgBACABQAAABABAAQAAABABAAQAAAAABABQAAAAABAAIACABIACACIAAAAQADABADgCIACgBIAGgBIADABIAEAEIABAAIAEAEIACACQAFACAEAEQAFAFAEAHIADADIABABIABACIAIAIQAEADAAAFQAAAEgBADIAAABIAAAEIABAIIAAAEIAAAPIAAACQABAGgGgBIABACQAEAIgBAKIgBAFIgCAEIgCABQgBAFABAFQgEADgBAFQABgFAEgDIAGgEQALgEAHAKIADAGQACAFAAAHQAAAJgDAIQgEAJgHAFQgIAHgJADIgIABIAAAAIgBAAIgEAAIgBAAIgDgBIgBgBIABABIADABIABAAIAEAAIABAAIAAAAIABANIACATIACAIIACAGIAGAMIAMAEIAPAEIAIACIAHACIASADIgyBkgAhng0QgEAIABAJQABAJAEAJQAFAIAHAHIAEACIAMAGQAIAEAJAAQAKAAAJgDQAKgEAIgEQAIgEAGgHIADgEQAEgGACgHIgTgFQgKgDgIgFQgLgGgFALIgCgBIgEgCIgEgFIgDgEQgFgFgJABIgTADIgIgDgAgqhOQgKAAgEAKQAEgKAKAAIAAAAIABAAIAAAAIAAAAQAJAAAFAHIAAABIABAAIgBAAIAAgBQgFgHgJAAIAAAAIAAAAIgBAAIAAAAgAh4hXQAAAGACAFQgCgFAAgGIAAgCIAAACIAAAAgABDiRIAEAEIAFAGIgFgGIgEgEQgIgFgJAAIgIACIgKAEIAKgEIAIgCQAJAAAIAFgAg8ifIgCACIgDAHIADgHIACgCIABgBQAHgDAHAAIAAAAIAAAAIABAAIABAAQAGAAAFACIADACIAGAEIgGgEIgDgCQgFgCgGAAIgBAAIgBAAIAAAAIAAAAQgHAAgHADIgBABg");
	this.shape_6.setTransform(-2.6,13.5,2.365,2.365);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#271B0E").s().p("AjFC+QgfgEAIgUQgYAHgEgZQgEgaAUgIQgJgCgBgJQgCgRAHgPQALgaAXgJQgMgEAEgNQAFgUAVgFQAJgCADgHQgRgDgJgQQgLgSAIgUQAIgUASABQAFAAACADIgCgFIAAgBIgCgFQgCgNAIgLQALgQATgDQAEAAADABQAEgNALgIQAPgLATgDQATgCAHASIADAGQgCgTAQgKQAPgJASAEQANADANAGQAQAHAEARQAIgKANgFQARgHAPAIQAQAIADARQADAQgEAQQAKgDAJABQAMAAAKAIQAHAGgCAJQgEAUATAHQAUAHgDATQgCALgKAEQAKADALABQARABALALQAJAIgEANQgFARgNAIQAKAAAKAEQAKADABAKQACAUgOANQAHABADACQAJAGgDANQACAKgHALQgMAUgXAFQgFABgEgHQgIAPgUACQgaAQgagSQgGgDAAgDQABAEgCADQgGAJgNAAQgNgBgJgIIgCgIIgCgTIgBgNIAIgBQAJgDAIgHQAHgGAEgJQADgIAAgJQAAgHgCgGIgDgFQgHgKgLAEIgGAEQgBgFABgFIACgBIACgEIABgFQABgKgEgIIgBgCQAGABgBgGIAAgCIAAgPIAAgDIgBgIIAAgEIAAgBQACgDgBgEQAAgFgEgDIgIgIIgBgCIgBgBIgDgDQgEgIgFgFQgEgDgFgCIgCgCIgEgEIgBAAIgEgEIgDgBIgGABIgCABQgDACgDgBIAAAAIgCgCIgCgBQAAgBgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQgCgBgDABIgHADIgDACQgDABgEAAQgDAAgCACIgDACQgFAGgGABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgDgEIgBgBIgCgBIgDgBQgEgDgIABIgBAAIgCABIgCAAQgGACgIgBIgBAAQAAgBgBAAQAAABgBAAQAAAAAAAAQgBABAAAAIgCACIgCABIgHAFIgBACQgDACAAADIAAAEIAAACIAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAIgBAAIgDAEIgBACIAAABQgLACgHAJIgFAJIgFANQgDALAAALIAAAAQgLgCgIALIgFAKQgFAOgBAOQgBAUAKARQAJAQANAMQAOAMAQALIAHAEQADAGABAGQgGAAgFACIgcAKQgUAIAAgTQgRARgXAAIgJgBgAitgPQACgDAAgFIgCgKIACAKQAAAFgCADgAinhUQAAgDgCgBQACABAAADg");
	this.shape_7.setTransform(0,-12.9,2.365,2.365);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BuffyStill, new cjs.Rectangle(-60,-59,120.1,118.1), null);


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


(lib.Bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAnFgX3MhOJAAAMAAAAvvMBOJAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#3399FF"],[0,1],0.4,-207.7,-1,217.9).s().p("EgnEAX4MAAAgvvMBOJAAAMAAAAvvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.6,-154.3,503.3,308.7);


(lib.anim_buffy_talk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAVASQgGgGADgKQABgDADgDQAGgIAJgEQAJgFAJADQAKACAFAJQADAFAAAFQAAAEgBADQgDAHgHAGQACACAAADAA1ARQgIgCgIAAQgFgBgEACQgEABgDABQgDACgDABABJADQgFgGgKAFQgLAGAGAJQAAAAABABQAGABACAEAgZgHQAAgBAAAAQAAgKgJgFQgIgFgKACQgKACgDAKQgDAJADAJQAFgCAGABQAGABAFABQAEABAEACQABAAABABQAAgBABAAQAGgIABgHgAgrAFQgCgMALgCQAGgCADADQAAAAAAABAhBAEQgEABgDAD");
	this.shape.setTransform(22.5,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAoALIgBAAQgGgJALgGQAJgFAGAHIgBAGQgDAHgHAGQgDgEgFgCgAgxACIgJgCQgBgNALgDQAFgBADADIABAAQgBAJgHAHIAAABIgCgBg");
	this.shape_1.setTransform(23.9,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAHQABgEACgDQAGgIAJgEQAJgEAJACQAKADAFAIQADAFAAAGQgFgHgJAFQgLAHAFAJQgIgCgIgBQgEAAgEABIgIADQgGgGAEgKgAg4AIQgGgBgGACQgDgJADgJQAEgKAKgDQAJgCAIAFQAKAFgBAKIAAABQgDgDgGABQgLADACAMIgKgCg");
	this.shape_2.setTransform(22.7,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AATAGQADgCADgBQAEgCAEgBQAEAAAEAAQAIAAAIACQABAAAAAAQAGACADAEQABACABADAhEgGQAEgDAEgBQAFgCAGABQAFAAAFACQAEABAEAC");
	this.shape_3.setTransform(22,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AAYgHQAGgGAHgDQAJgFAJADQAKACAFAJQADAFAAAFQAAAEgBADQgDAHgHAGQACACAAADAARAIQAAgDABgDQABgDADgDQABgCABgBIABAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgCgBQgBgBgBgBQgBgBAAAAQAAAGAEAEQADgBAEgBQAEgCAFABQAIAAAIACQAAAAABABQAGABACAEAAVASQgDACgDABAhCACQgCgIADgIQAAgBAAAAQAEgJAJgCQAKgCAIAFQAJAFAAAKQAAAAAAABQgBAHgGAIQgBAAAAABQgBgBgBAAQgEgCgEgBQgFgBgGgBQgGgBgFACAhBgPQACgBACAAQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAQgDAAgCgBQABABAAABQgEABgDADAgZgHQAAgBAAAA");
	this.shape_4.setTransform(22.5,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzAUIgBAAQgIgDgIAAQgFgBgEACIgIADQgEgFABgGIABABIACACIAFABQAEAAADgDQADgDAAgEQAAgEgDgCQgDgDgEAAIgBAAQAFgGAIgDQAJgFAJADQAKACAFAJQADAFAAAFIgBAHQgDAIgHAGQgDgEgFgCgAgmAKIgJgCIgKgDQgGAAgFACIgBgDIAFABQAEAAADgDQADgCAAgEQAAgEgDgDQgDgDgEAAIgEABQAEgJAJgCQAKgCAIAFQAJAFAAAKIgBAAIABABQgBAHgHAIIAAABIgCgBg");
	this.shape_5.setTransform(22.8,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAlANIgDgCIgBgBIACgFQABgEACgDIADgDIAAAAQAEAAADADQADACAAAEQAAAEgDADQgDADgEAAIgEgBgAgxAFQgCgIACgIIABgBIADgBQAEAAADADQADADAAAEQAAADgDADQgDADgEAAIgEgBg");
	this.shape_6.setTransform(20.8,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AAVASQgGgGADgKQABgDADgDQAGgIAJgEQAJgFAJADQAKACAFAJQADAFAAAFQAAAEgBADQgDAHgHAGQACACAAADAAVASQgDACgDABAA1ARQgIgCgIAAQgFgBgEACQgEABgDABABJADQgFgGgKAFQgLAGAGAJAA+AXQgCgEgGgBQgBgBAAAAAgZgHQAAgBAAAAQAAgKgJgFQgIgFgKACQgKACgDAKQgDAJADAJQAFgCAGABQAGABAFABQAEABAEACQABAAABABQAAgBABAAQAGgIABgHQAAgBAAAAQgDgDgGACQgLACACAMAhBAEQgEABgDAD");
	this.shape_7.setTransform(22.5,19.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AAYgHQAGgGAHgDQAJgFAJADQAKACAFAJQADAFAAAFQAAAEgBADQgDAHgHAGQgCgEgGgBQgBgBAAAAQgIgCgIAAQgFgBgEACQgEABgDABQgEgEAAgGQAAAAABABQABABABABQACABADAAQAEAAADgDQADgDAAgEQAAgDgDgDQgDgDgEAAIgBAAQgBABgBACQgDADgBADQgBADAAADAAVASQgDACgDABAA+AXQACACAAADAhBgPQACgBACAAQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAQgDAAgCgBQgCgIADgIQAAgBAAAAgAgZgHQAAgBAAAAQAAgKgJgFQgIgFgKACQgJACgEAJAhBAEQAFgCAGABQAGABAFABQAEABAEACQABAAABABQAAgBABAAQAGgIABgHQAAgBAAAAAhCACQABABAAABQgEABgDAD");
	this.shape_8.setTransform(22.5,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape_7}]},3).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_8}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_7}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(4));

	// Layer 8
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("AitiaQgCgMAIgMQALgQATgDQAEAAADABQAEgMALgJQAPgLATgDQATgCAHASQACADABADQgCgSAQgLQAPgJASAEQANADANAGQAQAIAEARQAIgKANgGQARgHAPAIQAQAIADARQADAQgEAQQAKgDAJABQAMAAAKAIQAHAGgCAJQgEAUATAHQAUAHgDATQgCALgKAEQAKADALABQARABALALQAJAJgEANQgFASgNAIQAKgBAKAEQAKADABAJQACAUgOAOQAHAAADADQAJAFgDANQACAKgHALQgMAUgXAFQgFABgEgHQgIAPgUACQgaAQgagSQgGgDAAgDQABAEgCADQgGAJgNAAQgNgBgJgIQABADABADQADAGADAGQAGACAGACQAHACAIACQAEABAEABQAEABADABQAJACAJABIgyBkIijAAIhHhaQAGAAAGgCQACAAABgBQAIgDAIgDQAIgEAGgEQAGgEAGgGQAAgCAAgBQgBgDgBgEQgGAAgFACQgOAFgOAFQgUAIAAgTQgUAUgdgEQgfgEAIgUQgYAHgEgZQgEgaAUgIQgJgCgBgJQgCgRAHgPQALgZAXgJQgMgEAEgNQAFgVAVgFQAJgCADgHQADgGgDgMABNAJQgBgFABgEQABgBABAAQABgCABgCQABgCAAgDQABgKgEgIQgBgBAAgBQAGABgBgGQAAgBAAgBQAAgHAAgIQAAgCAAgCQgBgEAAgEQgBgCABgCQAAAAAAgBQACgDgBgEQAAgFgEgDQgEgDgEgFQgBgBAAgBQAAAAgBgBQgCgBgBgCQgEgHgFgFQgEgEgFgCQgBgBgBgBQgCgCgCgCIgBAAQgCgCgCgCQgBgBgCAAQgDABgDAAQgBABgBAAQgDACgDgBQAAAAAAAAQgBgBgBgBQgBgBgBAAQgCgBgCgCQgCgBgDABQgEABgDACQgBABgCABQgDABgEAAQgDAAgCACQgBABgCABQgFAGgGABQgCAAgBgBQgBgBgCgDQAAgBgBAAQgBgBgBAAQgBAAgCgBQgEgDgIABQgBAAAAAAQgBAAgBABQgBAAgBAAQgGACgIgBQAAAAgBAAQgCgBgBACQgBABgBABQgBABgBAAQgDACgEADQAAABgBABQgDACAAADQgBACABACQAAABAAABIAAABQAAADgEAAQAAAAgBAAQgCACgBACQgBABAAABIAAABQgLADgHAJQgDADgCAFQgDAHgCAHQgDALAAALIAAAAQgLgCgIALQgDAEgCAGQgFANgBAOQgBAUAKARQAJAQANAMQAOAMAQALQADACAEACQANAHAPADQAUADASgGQATgHAOgLQADgCADAAAAVhXQAFgDAFgBQAEgBAEgBQAJAAAIAFQACACACACQACADADADAhMhdQABgEACgDQABgBABgBQAIgFAJABQAGAAAFACQABABACABQADACADACAithGQgRgDgJgQQgLgSAIgUQAIgUASABQAFABACACQgBgDgBgCQgBgDgBgDQACACAAADQAAABAAAAAipiPQACACAAACAiDggQAAABAAABQAAAGACAFAhDgLQAEgKAKAAQALgBAFAJAhqAGQAJgBAKgCQAJgBAFAFQACACABACQABADADACQgHgCgHgCQgJgCgJgCQgEgBgEgBQgEgBgEgCIAAABQgEAIABAJQABAJAEAJQAFAIAHAHQACACACABQAJAAAJgDQAJgCAKgBQAKgBAJAAQAKAAAIgFQADgBACgCQACgBACgBQAFgGACgHQgLgCgJgDQgKgDgIgFQgLgHgFAMQgBgBgBAAQgCgBgCgBAhgA5QAGAEAGACQAIAEAJAAQAKAAAJgDQAKgEAIgFQAIgEAGgHQACgCABgCAhdBqQADAGABAGAhXCAQABAGAAAGQgBAHAAAGQgBADAAADABNAJQgEADgBAFABDBIQAEAAAEgBQAJgDAIgHQAHgGAEgJQADgIAAgJQAAgHgCgFQgBgDgCgDQgHgKgLAEQgEACgCACABDBIQgFAAgFgCABIBwQgBgEgBgEQgBgJgBgKQAAgGgBgHAgGAbQgJABgKgBQgJgBgJgDQgIgCgJgC");
	this.shape_9.setTransform(25,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5783E").s().p("AgbAcIgMgGQAJAAAKgDQAJgCAJgBIASgBQAKAAAIgFIAGgDIABACQgHAHgIAEQgIAFgKAEQgIADgKAAQgIAAgJgEgAAggHQgJgBgJgDIgQgFQAEgLALAHQAIAFAJADIAUAFIgGAAIgMAAgAgWgWIgTgEIgIgCIATgDQAJgBAGAFIACAEIAEAFIgNgEg");
	this.shape_10.setTransform(19.3,28);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmAYQgHgHgEgIQgEgJgBgIQgBgKAEgIIAAAAIAHADIAIACIATAEIANAEIAEACIACAAIARAFQAJADAJABIASAAQgBAGgFAGIgEACIgFADQgJAFgJAAIgUABQgIABgJACQgJADgJAAIgFgDg");
	this.shape_11.setTransform(18.7,27.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC9A67").s().p("Ag+C8IhHhaQAGAAAGgCIADgBIAQgGIAOgIQAGgEAGgGIABAMIgBANIgBAGIABgGIABgNIgBgMIAAgDIgCgHQgBgGgDgGQANAIAPACIANABIAAAAIAAAAQANAAAMgEQASgHAPgLQADgCADAAQgDAAgDACQgPALgSAHQgMAEgNAAIAAAAIAAAAIgNgBQgPgCgNgIIgHgEQgQgLgOgMQgNgMgJgPQgKgRABgUQABgOAFgOIAFgKQAIgLALACIAAAAQAAgLADgLIAFgOIAFgIQAHgJALgDIAAgBIABgCIADgEIABAAQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgBIAAgCIAAgEQAAgDADgCIABgCIAHgFIACgBIACgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIABAAQAIABAGgCIACAAIACgBIABAAQAIgBAEADIADABIACABIABABIADAEQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAGgBAFgGIADgCQACgCACAAQAEAAADgBIADgCIAIgDQADgBACABQAAABABAAQAAABABAAQAAAAABABQAAAAABAAIACABIACACIAAAAQADABADgCIACgBIAGgBIADABIAEAEIABAAIAEAEIACACQAFACAEAEQAFAFAEAHIADADIABABIABACIAIAIQAEADAAAFQAAAEgBADIAAABIAAAEIABAIIAAAEIAAAPIAAACQABAGgGgBIABACQAEAIgBAKIgBAFIgCAEIgCABQgBAFABAFQgEADgBAFQABgFAEgDIAGgEQALgEAHAKIADAGQACAFAAAHQAAAJgDAIQgEAJgHAFQgIAHgJADIgIABIAAAAIgBAAIgEAAIgBAAIgDgBIgBgBIABABIADABIABAAIAEAAIABAAIAAAAIABANIACATIACAIIACAGIAGAMIAMAEIAPAEIAIACIAHACIASADIgyBkgAhng0QgEAIABAJQABAJAEAJQAFAIAHAHIAEACIAMAGQAIAEAJAAQAKAAAJgDQAKgEAIgEQAIgEAGgHIADgEQAEgGACgHIgTgFQgKgDgIgFQgLgGgFALIgCgBIgEgCIgEgFIgDgEQgFgFgJABIgTADIgIgDgAgqhOQgKAAgEAKQAEgKAKAAIAAAAIABAAIAAAAIAAAAQAJAAAFAHIAAABIABAAIgBAAIAAgBQgFgHgJAAIAAAAIAAAAIgBAAIAAAAgAh4hXQAAAGACAFQgCgFAAgGIAAgCIAAACIAAAAgABDiRIAEAEIAFAGIgFgGIgEgEQgIgFgJAAIgIACIgKAEIAKgEIAIgCQAJAAAIAFgAg8ifIgCACIgDAHIADgHIACgCIABgBQAHgDAHAAIAAAAIAAAAIABAAIABAAQAGAAAFACIADACIAGAEIgGgEIgDgCQgFgCgGAAIgBAAIgBAAIAAAAIAAAAQgHAAgHADIgBABg");
	this.shape_12.setTransform(23.9,30.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#271B0E").s().p("AjFC+QgfgEAIgUQgYAHgEgZQgEgaAUgIQgJgCgBgJQgCgRAHgPQALgaAXgJQgMgEAEgNQAFgUAVgFQAJgCADgHQgRgDgJgQQgLgSAIgUQAIgUASABQAFAAACADIgCgFIAAgBIgCgFQgCgNAIgLQALgQATgDQAEAAADABQAEgNALgIQAPgLATgDQATgCAHASIADAGQgCgTAQgKQAPgJASAEQANADANAGQAQAHAEARQAIgKANgFQARgHAPAIQAQAIADARQADAQgEAQQAKgDAJABQAMAAAKAIQAHAGgCAJQgEAUATAHQAUAHgDATQgCALgKAEQAKADALABQARABALALQAJAIgEANQgFARgNAIQAKAAAKAEQAKADABAKQACAUgOANQAHABADACQAJAGgDANQACAKgHALQgMAUgXAFQgFABgEgHQgIAPgUACQgaAQgagSQgGgDAAgDQABAEgCADQgGAJgNAAQgNgBgJgIIgCgIIgCgTIgBgNIAIgBQAJgDAIgHQAHgGAEgJQADgIAAgJQAAgHgCgGIgDgFQgHgKgLAEIgGAEQgBgFABgFIACgBIACgEIABgFQABgKgEgIIgBgCQAGABgBgGIAAgCIAAgPIAAgDIgBgIIAAgEIAAgBQACgDgBgEQAAgFgEgDIgIgIIgBgCIgBgBIgDgDQgEgIgFgFQgEgDgFgCIgCgCIgEgEIgBAAIgEgEIgDgBIgGABIgCABQgDACgDgBIAAAAIgCgCIgCgBQAAgBgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQgCgBgDABIgHADIgDACQgDABgEAAQgDAAgCACIgDACQgFAGgGABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgDgEIgBgBIgCgBIgDgBQgEgDgIABIgBAAIgCABIgCAAQgGACgIgBIgBAAQAAgBgBAAQAAABgBAAQAAAAAAAAQgBABAAAAIgCACIgCABIgHAFIgBACQgDACAAADIAAAEIAAACIAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAIgBAAIgDAEIgBACIAAABQgLACgHAJIgFAJIgFANQgDALAAALIAAAAQgLgCgIALIgFAKQgFAOgBAOQgBAUAKARQAJAQANAMQAOAMAQALIAHAEQADAGABAGQgGAAgFACIgcAKQgUAIAAgTQgRARgXAAIgJgBgAitgPQACgDAAgFIgCgKIACAKQAAAFgCADgAinhUQAAgDgCgBQACABAAADg");
	this.shape_13.setTransform(25,19);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC9A67").s().p("AgBAAIADgBIgCADg");
	this.shape_14.setTransform(23.4,28.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("AgaABQAPAQAPgGQAMgEAFgHQAEAAAFAAQgCgEgKgGQgFgCgDABQgHABgHgBQgVgDgMAPQgFAAgFAAAgaABQAJAAAJABQAOAAAPgCAglABQAGAAAFAAAAeAAQAAAAABAAQAIgBAJAA");
	this.shape_15.setTransform(18.1,28.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("AitiaQgCgMAIgMQALgQATgDQAEAAADABQAEgMALgJQAPgLATgDQATgCAHASQACADABADQgCgSAQgLQAPgJASAEQANADANAGQAQAIAEARQAIgKANgGQARgHAPAIQAQAIADARQADAQgEAQQAKgDAJABQAMAAAKAIQAHAGgCAJQgEAUATAHQAUAHgDATQgCALgKAEQAKADALABQARABALALQAJAJgEANQgFASgNAIQAKgBAKAEQAKADABAJQACAUgOAOQAHAAADADQAJAFgDANQACAKgHALQgMAUgXAFQgFABgEgHQgIAPgUACQgaAQgagSQgGgDAAgDQABAEgCADQgGAJgNAAQgNgBgJgIQABADABADQADAGADAGQAGACAGACQAHACAIACQAEABAEABQAEABADABQAJACAJABIgyBkIijAAIhHhaQAGAAAGgCQACAAABgBQAIgDAIgDQAIgEAGgEQAGgEAGgGQAAgCAAgBQgBgDgBgEQgGAAgFACQgOAFgOAFQgUAIAAgTQgUAUgdgEQgfgEAIgUQgYAHgEgZQgEgaAUgIQgJgCgBgJQgCgRAHgPQALgZAXgJQgMgEAEgNQAFgVAVgFQAJgCADgHQgRgDgJgQQgLgSAIgUQAIgUASABQAFABACACQgBgDgBgCQgBgDgBgDgABNAJQgBgFABgEQABgBABAAQABgCABgCQABgCAAgDQABgKgEgIQgBgBAAgBQAGABgBgGQAAgBAAgBQAAgHAAgIQAAgCAAgCQgBgEAAgEQgBgCABgCQAAAAAAgBQACgDgBgEQAAgFgEgDQgEgDgEgFQgBgBAAgBQAAAAgBgBQgCgBgBgCQgEgHgFgFQgEgEgFgCQgBgBgBgBQgCgCgCgCIgBAAQgCgCgCgCQgBgBgCAAQgDABgDAAQgBABgBAAQgDACgDgBQAAAAAAAAQgBgBgBgBQgBgBgBAAQgCgBgCgCQgCgBgDABQgEABgDACQgBABgCABQgDABgEAAQgDAAgCACQgBABgCABQgFAGgGABQgCAAgBgBQgBgBgCgDQAAgBgBAAQgBgBgBAAQgBAAgCgBQgEgDgIABQgBAAAAAAQgBAAgBABQgBAAgBAAQgGACgIgBQAAAAgBAAQgCgBgBACQgBABgBABQgBABgBAAQgDACgEADQAAABgBABQgDACAAADQgBACABACQAAABAAABIAAABQAAADgEAAQAAAAgBAAQgCACgBACQgBABAAABIAAABQgLADgHAJQgDADgCAFQgDAHgCAHQgDALAAALIAAAAQgLgCgIALQgDAEgCAGQgFANgBAOQgBAUAKARQAJAQANAMQAOAMAQALQADACAEACQANAHAPADQAUADASgGQATgHAOgLQADgCADAAAAVhXQAFgDAFgBQAEgBAEgBQAJAAAIAFQACACACACQACADADADAhMhdQABgEACgDQABgBABgBQAIgFAJABQAGAAAFACQABABACABQADACADACAiriUQAAAAAAgBQAAgDgCgCAipiPQACACAAACAithGQADgGgDgMAiDggQAAABAAABQAAAGACAFAhDgLQAEgKAKAAQALgBAFAJAhdBqQADAGABAGAhXCAQABAGAAAGQgBAHAAAGQgBADAAADABDBIQAEAAAEgBQAJgDAIgHQAHgGAEgJQADgIAAgJQAAgHgCgFQgBgDgCgDQgHgKgLAEQgEACgCACQgEADgBAFABIBwQgBgEgBgEQgBgJgBgKQAAgGgBgHQgFAAgFgC");
	this.shape_16.setTransform(25,24.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B5783E").s().p("AgWABIgLAAQAMgPAVADQAHABAHgBQADgBAEACQAKAGADAEIgJAAQgPACgOAAIgSgBIASABQAOAAAPgCQgGAHgLAEQgEACgEAAQgLAAgLgMg");
	this.shape_17.setTransform(17.7,28.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC9A67").s().p("Ag+C8IhHhaQAGAAAGgCIADgBIAQgGIAOgIQAGgEAGgGIABAMIgBANIgBAGIABgGIABgNIgBgMIAAgDIgCgHQgBgGgDgGQANAIAPACIANABIAAAAIAAAAQANAAAMgEQASgHAPgLQADgCADAAQgDAAgDACQgPALgSAHQgMAEgNAAIAAAAIAAAAIgNgBQgPgCgNgIIgHgEQgQgLgOgMQgNgMgJgPQgKgRABgUQABgOAFgOIAFgKQAIgLALACIAAAAQAAgLADgLIAFgOIAFgIQAHgJALgDIAAgBIABgCIADgEIABAAQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgBIAAgCIAAgEQAAgDADgCIABgCIAHgFIACgBIACgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIABAAQAIABAGgCIACAAIACgBIABAAQAIgBAEADIADABIACABIABABIADAEQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAGgBAFgGIADgCQACgCACAAQAEAAADgBIADgCIAIgDQADgBACABQAAABABAAQAAABABAAQAAAAABABQAAAAABAAIACABIACACIAAAAQADABADgCIACgBIAGgBIADABIAEAEIABAAIAEAEIACACQAFACAEAEQAFAFAEAHIADADIABABIABACIAIAIQAEADAAAFQAAAEgBADIAAABIAAAEIABAIIAAAEIAAAPIAAACQABAGgGgBIABACQAEAIgBAKIgBAFIgCAEIgCABQgBAFABAFIAGgEQALgEAHAKIADAGQACAFAAAHQAAAJgDAIQgEAJgHAFQgIAHgJADIgIABIAAAAIgBAAIgEAAIgBAAIgDgBIgBgBIABABIADABIABAAIAEAAIABAAIAAAAIABANIACATIACAIIACAGIAGAMIAMAEIAPAEIAIACIAHACIASADIgyBkgAhfgSIALAAQAPAQAQgGQALgFAGgGIAIgBIABAAIARgBIgRABIgBAAQgCgEgKgGQgEgDgDABQgHACgIgCIgHAAQgQAAgKAOgAhfgSIgKAAIAKAAgABTgnQABgFAEgDQgEADgBAFgAgqhOQgKAAgEAKQAEgKAKAAIAAAAIABAAIAAAAIAAAAQAJAAAFAHIAAABIABAAIgBAAIAAgBQgFgHgJAAIAAAAIAAAAIgBAAIAAAAgAh4hXQAAAGACAFQgCgFAAgGIAAgCIAAACIAAAAgABDiRIAEAEIAFAGIgFgGIgEgEQgIgFgJAAIgIACIgKAEIAKgEIAIgCQAJAAAIAFgAg8ifIgCACIgDAHIADgHIACgCIABgBQAHgDAHAAIAAAAIAAAAIABAAIABAAQAGAAAFACIADACIAGAEIgGgEIgDgCQgFgCgGAAIgBAAIgBAAIAAAAIAAAAQgHAAgHADIgBABg");
	this.shape_18.setTransform(23.9,30.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.1,1,1).p("AitiaQgCgMAIgMQALgQATgDQAEAAADABQAEgMALgJQAPgLATgDQATgCAHASQACADABADQgCgSAQgLQAPgJASAEQANADANAGQAQAIAEARQAIgKANgGQARgHAPAIQAQAIADARQADAQgEAQQAKgDAJABQAMAAAKAIQAHAGgCAJQgEAUATAHQAUAHgDATQgCALgKAEQAKADALABQARABALALQAJAJgEANQgFASgNAIQAKgBAKAEQAKADABAJQACAUgOAOQAHAAADADQAJAFgDANQACAKgHALQgMAUgXAFQgFABgEgHQgIAPgUACQgaAQgagSQgGgDAAgDQABAEgCADQgGAJgNAAQgNgBgJgIQABADABADQADAGADAGQAGACAGACQAHACAIACQAEABAEABQAEABADABQAJACAJABIgyBkIijAAIhHhaQAGAAAGgCQACAAABgBQAIgDAIgDQAIgEAGgEQAGgEAGgGQAAgCAAgBQgBgDgBgEQgGAAgFACQgOAFgOAFQgUAIAAgTQgUAUgdgEQgfgEAIgUQgYAHgEgZQgEgaAUgIQgJgCgBgJQgCgRAHgPQALgZAXgJQgMgEAEgNQAFgVAVgFQAJgCADgHQgRgDgJgQQgLgSAIgUQAIgUASABQAFABACACQgBgDgBgCQgBgDgBgDgABNAJQgBgFABgEQABgBABAAQABgCABgCQABgCAAgDQABgKgEgIQgBgBAAgBQAGABgBgGQAAgBAAgBQAAgHAAgIQAAgCAAgCQgBgEAAgEQgBgCABgCQAAAAAAgBQACgDgBgEQAAgFgEgDQgEgDgEgFQgBgBAAgBQAAAAgBgBQgCgBgBgCQgEgHgFgFQgEgEgFgCQgBgBgBgBQgCgCgCgCIgBAAQgCgCgCgCQgBgBgCAAQgDABgDAAQgBABgBAAQgDACgDgBQAAAAAAAAQgBgBgBgBQgBgBgBAAQgCgBgCgCQgCgBgDABQgEABgDACQgBABgCABQgDABgEAAQgDAAgCACQgBABgCABQgFAGgGABQgCAAgBgBQgBgBgCgDQAAgBgBAAQgBgBgBAAQgBAAgCgBQgEgDgIABQgBAAAAAAQgBAAgBABQgBAAgBAAQgGACgIgBQAAAAgBAAQgCgBgBACQgBABgBABQgBABgBAAQgDACgEADQAAABgBABQgDACAAADQgBACABACQAAABAAABIAAABQAAADgEAAQAAAAgBAAQgCACgBACQgBABAAABIAAABQgLADgHAJQgDADgCAFQgDAHgCAHQgDALAAALIAAAAQgLgCgIALQgDAEgCAGQgFANgBAOQgBAUAKARQAJAQANAMQAOAMAQALQADACAEACQANAHAPADQAUADASgGQATgHAOgLQADgCADAAAAVhXQAFgDAFgBQAEgBAEgBQAJAAAIAFQACACACACQACADADADAhMhdQABgEACgDQABgBABgBQAIgFAJABQAGAAAFACQABABACABQADACADACAiriUQAAAAAAgBQAAgDgCgCAipiPQACACAAACAithGQADgGgDgMAiDggQAAABAAABQAAAGACAFAhDgLQAEgKAKAAQALgBAFAJAhqAGQAJgBAKgCQAJgBAFAFQACACABACQABADADACQACABACABQABAAABABQAFgMALAHQAIAFAKADQAJADALACAgNAoQgBACgCACQgGAHgIAEQgIAFgKAEQgJADgKAAQgJAAgIgEQgGgCgGgEQgCgBgCgCQgHgHgFgIQgEgJgBgJQgBgJAEgIIAAgBQAEACAEABQAEABAEABQAJACAJACQAHACAHACAgNAoQgCABgCABQgCACgDABQgIAFgKAAQgJAAgKABQgKABgJACQgJADgJAAAhdBqQADAGABAGAhXCAQABAGAAAGQgBAHAAAGQgBADAAADABDBIQAEAAAEgBQAJgDAIgHQAHgGAEgJQADgIAAgJQAAgHgCgFQgBgDgCgDQgHgKgLAEQgEACgCACQgEADgBAFABIBwQgBgEgBgEQgBgJgBgKQAAgGgBgHQgFAAgFgCAg8ATQAJACAIACQAJADAJABQAKABAJgBQgCAHgFAG");
	this.shape_19.setTransform(25,24.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC9A67").s().p("Ag+C8IhHhaQAGAAAGgCIADgBIAQgGIAOgIQAGgEAGgGIABAMIgBANIgBAGIABgGIABgNIgBgMIAAgDIgCgHQgBgGgDgGQANAIAPACIANABIAAAAIAAAAQANAAAMgEQASgHAPgLQADgCADAAQgDAAgDACQgPALgSAHQgMAEgNAAIAAAAIAAAAIgNgBQgPgCgNgIIgHgEQgQgLgOgMQgNgMgJgPQgKgRABgUQABgOAFgOIAFgKQAIgLALACIAAAAQAAgLADgLIAFgOIAFgIQAHgJALgDIAAgBIABgCIADgEIABAAQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgBIAAgCIAAgEQAAgDADgCIABgCIAHgFIACgBIACgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIABAAQAIABAGgCIACAAIACgBIABAAQAIgBAEADIADABIACABIABABIADAEQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAGgBAFgGIADgCQACgCACAAQAEAAADgBIADgCIAIgDQADgBACABQAAABABAAQAAABABAAQAAAAABABQAAAAABAAIACABIACACIAAAAQADABADgCIACgBIAGgBIADABIAEAEIABAAIAEAEIACACQAFACAEAEQAFAFAEAHIADADIABABIABACIAIAIQAEADAAAFQAAAEgBADIAAABIAAAEIABAIIAAAEIAAAPIAAACQABAGgGgBIABACQAEAIgBAKIgBAFIgCAEIgCABQgBAFABAFIAGgEQALgEAHAKIADAGQACAFAAAHQAAAJgDAIQgEAJgHAFQgIAHgJADIgIABIAAAAIgBAAIgEAAIgBAAIgDgBIgBgBIABABIADABIABAAIAEAAIABAAIAAAAIABANIACATIACAIIACAGIAGAMIAMAEIAPAEIAIACIAHACIASADIgyBkgAhng0QgEAIABAJQABAJAEAJQAFAIAHAHIAEACIAMAGQAIAEAJAAQAKAAAJgDQAKgEAIgEQAIgEAGgHIADgEIgDAEIgBgCIAEgCQAEgGACgHIgTgFQgKgDgIgFQgLgGgFALIgCgBIgEgCIgEgFIgDgEQgFgFgJABIgTADIgIgDgABTgnQABgFAEgDQgEADgBAFgAgqhOQgKAAgEAKQAEgKAKAAIAAAAIABAAIAAAAIAAAAQAJAAAFAHIAAABIABAAIgBAAIAAgBQgFgHgJAAIAAAAIAAAAIgBAAIAAAAgAh4hXQAAAGACAFQgCgFAAgGIAAgCIAAACIAAAAgABDiRIAEAEIAFAGIgFgGIgEgEQgIgFgJAAIgIACIgKAEIAKgEIAIgCQAJAAAIAFgAg8ifIgCACIgDAHIADgHIACgCIABgBQAHgDAHAAIAAAAIAAAAIABAAIABAAQAGAAAFACIADACIAGAEIgGgEIgDgCQgFgCgGAAIgBAAIgBAAIAAAAIAAAAQgHAAgHADIgBABg");
	this.shape_20.setTransform(23.9,30.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(0.1,1,1).p("AgsgcQAKgBAJgCQAKgBAFAFQABACABACQACADACACQADABABABQABAAABAAQAFgLALAHQAIAFAJADQAKADAKACAAxAFQgBACgCACQgHAHgHAEQgJAFgJAEQgJADgJAAQgJAAgJgEQgGgCgFgEQgCgCgDgBQgHgHgEgIQgEgIgBgJQgBgKAEgIIAAAAQAEACADABQAEABAEABQAKACAJACQAHACAGACAAxAFQgCABgCABQgCACgDABQgJAFgJAAQgKAAgKABQgIABgJACQgJADgJAAAACgQQAIADAJACQAJADAJABQAJABAJgBQgBAHgFAF");
	this.shape_21.setTransform(18.7,28);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("AAVAAQgPACgOAAQgJgBgJAAQAPAQAPgGQAMgEAFgHgAglABQAMgPAVADQAHABAHgBQADgBAFACQAKAGACAEQAAAAABAAQAIgBAJAAAglABQgFAAgFAAAgaABQgFAAgGAAAAeAAQgFAAgEAA");
	this.shape_22.setTransform(18.1,28.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.1,1,1).p("AgZgLQADgBADgBQAOgFANgEQAEgBAEgBQgLgEgHgEQgGAHgIgCQgGgBgEAEQgIAHgCAKQAFgCAGgCQAQAQgBATQAEACADAAQAIAGAKAAQACABADgCQAHgHAEgKQgIAGgJAEQgGACgGABQgCAAgDgBAAlAKIAAgBIAAAAgAAfAOQADgCADgCAAlAJQADgNgJgWQgGAAgGABQgCABgBAAAACAbQgHgWAYgBQAKAAAIAF");
	this.shape_23.setTransform(18.7,28.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B5783E").s().p("AASAgQgKAAgIgGIAFABQAGgBAGgCQAJgEAIgGQgEAKgHAHIgEACIgBgBgAgXgYQAEgEAGABQAIACAFgHIATAIIgIACIgbAJIgGACIgLAEQACgKAIgHg");
	this.shape_24.setTransform(18.4,28.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AABgKQAKgBAHAGIAAAAIgFAFQgIAFgIADQgGADgGAAQgIgVAYAAg");
	this.shape_25.setTransform(20.5,30.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgIAbIgHgDQABgTgRgPIAGgCIAcgKIAIgCIACAAIAMgCQAJAWgDAOQgHgGgKABQgYAAAIAWIgCAAIgEAAg");
	this.shape_26.setTransform(19.2,28.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.1,1,1).p("AAaADQgFgGgHgFQgHgHgGAAQgHgBgEgFQgEgDgFALQAAAAABAAQAEABAGABQARAGARAIgAgWAEQAAAAgBAAQAAABAAABQAAACABACQABACABABQADADAFAAQALABAJgDQgIAGgHACQgKACgGgIQgBgBgBgBQABgCACgCAgWAEQgBAAgBAAQAAABABABAAIAOQACgBABAAQgQgNgRAEAgSgNQAAAJgEAIAALANQAHgDAIgHIAAAA");
	this.shape_27.setTransform(18.6,28.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B5783E").s().p("AgXAQIgCgCIADgEIACADQADADAFAAQALABAJgDQgHAGgIACIgEAAQgHAAgFgGgAgHgLIgKgCIgCAAQAFgLAEADQAFAFAGABQAHAAAGAHQAHAFAFAGQgRgIgQgGg");
	this.shape_28.setTransform(18.6,28.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgFAHQgGgBgDgDIgBgDIgCgDIABgBIAAgBQARgDARALIgEABQgIADgHAAIgEAAgAgRgDIAAgCIABAAIAAABIgBABIAAAAg");
	this.shape_29.setTransform(17.9,29);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAEQAEgHABgJIAKACQARAFAQAJIABAAQgIAHgHACQgQgMgSADg");
	this.shape_30.setTransform(18.7,28);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.1,1,1).p("AgcgKQAGgDAFgCQASgIASAIQACABACABQgBgGgDgCQgIgGgLgEQgGgCgFAEQgEADgFADQgEADgFgCQgFAHgCAJQAEgDAEgBQAQAKgGASQABABAAAAQAEAKAJACQAJAEAJgFQAFgEADgFQgGAEgHAAQgDABgDAAAgRATQAKAHAKAAQgEgQAAgFQABgVAcAGQgCgCgDgBAAWAVQALgGAEgRQgDgEgGgE");
	this.shape_31.setTransform(18.1,28.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B5783E").s().p("AACAfQgIgCgEgKQAKAHAKAAIAGgBQAHAAAGgEQgCAFgGAEQgFADgGAAIgIgCgAgWgWQAFACAEgDIAJgGQAEgEAHACQALAEAIAGQADACABAGIgEgCQgSgIgSAIIgLAFIgIAEQACgKAFgGg");
	this.shape_32.setTransform(17.3,28.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgOATQgFgPAAgEQABgXAdAGQAGAEADAFQgEAQgMAHQgFADgHABIgEAAIgCAAg");
	this.shape_33.setTransform(19.8,29.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgRAQIgBgBQAGgSgQgKIALgFQASgIASAIIAEACIAFADQgcgGgBAWQAAAEAEAQIAAAAQgKAAgKgHg");
	this.shape_34.setTransform(18,29.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.1,1,1).p("AgTACQAGADAFADAgPgZQgHAOgDAKQADABADACAAfgJQAAgBgBAAQgHgFgGgDQgRgJgPACQgBAAgBAAQACgEACgFQAFgLAJAJQAKgEAIAIQAGAFAFAHQABAFAAAGQABANgFANQgFALgHAJQgBAAgBAAQgBgBgBAAQgBAAgBAAQgGgBgEgDQgNgHgNgFAALAkQgJAFgJAAQgHAAgFgFQgHgIgEgJQABABACAAQADgLAFgH");
	this.shape_35.setTransform(18.3,29.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B5783E").s().p("AgTAkQgHgIgEgJIADABQANAFANAHQAEADAGABIACAAQgJAFgJAAQgHAAgFgFgAAegKIgNgIQgRgJgPACIgCAAIAEgJQAFgLAJAJQAKgEAIAIIALAMIABALIgBgBg");
	this.shape_36.setTransform(18.3,29.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AALAgIgCgBIgBAAQgGgBgFgDQgMgHgOgFQADgLAGgGIAKAFIgKgFIgHgEQADgKAHgOQAQgCAQAJIANAIIACABQABAOgGAMQgEALgIAJIgBAAIgBAAg");
	this.shape_37.setTransform(18.5,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_13},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},3).to({state:[{t:this.shape_13},{t:this.shape_20},{t:this.shape_10},{t:this.shape_11},{t:this.shape_19}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_21}]},2).to({state:[{t:this.shape_17},{t:this.shape_22}]},3).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_21}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},2).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},2).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},2).wait(3));

	// eyes
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.1,1,1).p("AitiaQgCgMAIgMQALgQATgDQAEAAADABQAEgMALgJQAPgLATgDQATgCAHASQACADABADQgCgSAQgLQAPgJASAEQANADANAGQAQAIAEARQAIgKANgGQARgHAPAIQAQAIADARQADAQgEAQQAKgDAJABQAMAAAKAIQAHAGgCAJQgEAUATAHQAUAHgDATQgCALgKAEQAKADALABQARABALALQAJAJgEANQgFASgNAIQAKgBAKAEQAKADABAJQACAUgOAOQAHAAADADQAJAFgDANQACAKgHALQgMAUgXAFQgFABgEgHQgIAPgUACQgaAQgagSQgGgDAAgDQABAEgCADQgGAJgNAAQgNgBgJgIQABADABADQADAGADAGQAGACAGACQAHACAIACQAEABAEABQAEABADABQAJACAJABIgyBkIijAAIhHhaQAGAAAGgCQACAAABgBQAIgDAIgDQAIgEAGgEQAGgEAGgGQAAgCAAgBQgBgDgBgEQgGAAgFACQgOAFgOAFQgUAIAAgTQgUAUgdgEQgfgEAIgUQgYAHgEgZQgEgaAUgIQgJgCgBgJQgCgRAHgPQALgZAXgJQgMgEAEgNQAFgVAVgFQAJgCADgHQgRgDgJgQQgLgSAIgUQAIgUASABQAFABACACQgBgDgBgCQgBgDgBgDgABNAJQgBgFABgEQABgBABAAQABgCABgCQABgCAAgDQABgKgEgIQgBgBAAgBQAGABgBgGQAAgBAAgBQAAgHAAgIQAAgCAAgCQgBgEAAgEQgBgCABgCQAAAAAAgBQACgDgBgEQAAgFgEgDQgEgDgEgFQgBgBAAgBQAAAAgBgBQgCgBgBgCQgEgHgFgFQgEgEgFgCQgBgBgBgBQgCgCgCgCIgBAAQgCgCgCgCQgBgBgCAAQgDABgDAAQgBABgBAAQgDACgDgBQAAAAAAAAQgBgBgBgBQgBgBgBAAQgCgBgCgCQgCgBgDABQgEABgDACQgBABgCABQgDABgEAAQgDAAgCACQgBABgCABQgFAGgGABQgCAAgBgBQgBgBgCgDQAAgBgBAAQgBgBgBAAQgBAAgCgBQgEgDgIABQgBAAAAAAQgBAAgBABQgBAAgBAAQgGACgIgBQAAAAgBAAQgCgBgBACQgBABgBABQgBABgBAAQgDACgEADQAAABgBABQgDACAAADQgBACABACQAAABAAABIAAABQAAADgEAAQAAAAgBAAQgCACgBACQgBABAAABIAAABQgLADgHAJQgDADgCAFQgDAHgCAHQgDALAAALIAAAAQgLgCgIALQgDAEgCAGQgFANgBAOQgBAUAKARQAJAQANAMQAOAMAQALQADACAEACQANAHAPADQAUADASgGQATgHAOgLQADgCADAAAAVhXQAFgDAFgBQAEgBAEgBQAJAAAIAFQACACACACQACADADADAhMhdQABgEACgDQABgBABgBQAIgFAJABQAGAAAFACQABABACABQADACADACAiriUQAAAAAAgBQAAgDgCgCAipiPQACACAAACAithGQADgGgDgMAiDggQAAABAAABQAAAGACAFAhDgLQAEgKAKAAQALgBAFAJAhdBqQADAGABAGAhXCAQABAGAAAGQgBAHAAAGQgBADAAADABDBIQAEAAAEgBQAJgDAIgHQAHgGAEgJQADgIAAgJQAAgHgCgFQgBgDgCgDQgHgKgLAEQgEACgCACQgEADgBAFABIBwQgBgEgBgEQgBgJgBgKQAAgGgBgHQgFAAgFgC");
	this.shape_38.setTransform(25,24.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC9A67").s().p("Ag+C8IhHhaQAGAAAGgCIADgBIAQgGIAOgIQAGgEAGgGIABAMIgBANIgBAGIABgGIABgNIgBgMIAAgDIgCgHQgBgGgDgGQANAIAPACIANABIAAAAIAAAAQANAAAMgEQASgHAPgLQADgCADAAQgDAAgDACQgPALgSAHQgMAEgNAAIAAAAIAAAAIgNgBQgPgCgNgIIgHgEQgQgLgOgMQgNgMgJgPQgKgRABgUQABgOAFgOIAFgKQAIgLALACIAAAAQAAgLADgLIAFgOIAFgIQAHgJALgDIAAgBIABgCIADgEIABAAQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgBIAAgCIAAgEQAAgDADgCIABgCIAHgFIACgBIACgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIABAAQAIABAGgCIACAAIACgBIABAAQAIgBAEADIADABIACABIABABIADAEQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAGgBAFgGIADgCQACgCACAAQAEAAADgBIADgCIAIgDQADgBACABQAAABABAAQAAABABAAQAAAAABABQAAAAABAAIACABIACACIAAAAQADABADgCIACgBIAGgBIADABIAEAEIABAAIAEAEIACACQAFACAEAEQAFAFAEAHIADADIABABIABACIAIAIQAEADAAAFQAAAEgBADIAAABIAAAEIABAIIAAAEIAAAPIAAACQABAGgGgBIABACQAEAIgBAKIgBAFIgCAEIgCABQgBAFABAFIAGgEQALgEAHAKIADAGQACAFAAAHQAAAJgDAIQgEAJgHAFQgIAHgJADIgIABIAAAAIgBAAIgEAAIgBAAIgDgBIgBgBIABABIADABIABAAIAEAAIABAAIAAAAIABANIACATIACAIIACAGIAGAMIAMAEIAPAEIAIACIAHACIASADIgyBkgABTgnQABgFAEgDQgEADgBAFgAgqhOQgKAAgEAKQAEgKAKAAIAAAAIABAAIAAAAIAAAAQAJAAAFAHIAAABIABAAIgBAAIAAgBQgFgHgJAAIAAAAIAAAAIgBAAIAAAAgAh4hXQAAAGACAFQgCgFAAgGIAAgCIAAACIAAAAgABDiRIAEAEIAFAGIgFgGIgEgEQgIgFgJAAIgIACIgKAEIAKgEIAIgCQAJAAAIAFgAg8ifIgCACIgDAHIADgHIACgCIABgBQAHgDAHAAIAAAAIAAAAIABAAIABAAQAGAAAFACIADACIAGAEIgGgEIgDgCQgFgCgGAAIgBAAIgBAAIAAAAIAAAAQgHAAgHADIgBABg");
	this.shape_39.setTransform(23.9,30.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#271B0E").s().p("AjFC+QgfgEAIgUQgYAHgEgZQgEgaAUgIQgJgCgBgJQgCgRAHgPQALgaAXgJQgMgEAEgNQAFgUAVgFQAJgCADgHQgRgDgJgQQgLgSAIgUQAIgUASABQAFAAACADIgCgFIAAgBIgCgFQgCgNAIgLQALgQATgDQAEAAADABQAEgNALgIQAPgLATgDQATgCAHASIADAGQgCgTAQgKQAPgJASAEQANADANAGQAQAHAEARQAIgKANgFQARgHAPAIQAQAIADARQADAQgEAQQAKgDAJABQAMAAAKAIQAHAGgCAJQgEAUATAHQAUAHgDATQgCALgKAEQAKADALABQARABALALQAJAIgEANQgFARgNAIQAKAAAKAEQAKADABAKQACAUgOANQAHABADACQAJAGgDANQACAKgHALQgMAUgXAFQgFABgEgHQgIAPgUACQgaAQgagSQgGgDAAgDQABAEgCADQgGAJgNAAQgNgBgJgIIgCgIIgCgTIgBgNIAIgBQAJgDAIgHQAHgGAEgJQADgIAAgJQAAgHgCgGIgDgFQgHgKgLAEIgGAEQgBgFABgFIACgBIACgEIABgFQABgKgEgIIgBgCQAGABgBgGIAAgCIAAgPIAAgDIgBgIIAAgEIAAgBQACgDgBgEQAAgFgEgDIgIgIIgBgCIgBgBIgDgDQgEgIgFgFQgEgDgFgCIgCgCIgEgEIgBAAIgEgEIgDgBIgGABIgCABQgDACgDgBIAAAAIgCgCIgCgBQAAgBgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQgCgBgDABIgHADIgDACQgDABgEAAQgDAAgCACIgDACQgFAGgGABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgDgEIgBgBIgCgBIgDgBQgEgDgIABIgBAAIgCABIgCAAQgGACgIgBIgBAAQAAgBgBAAQAAABgBAAQAAAAAAAAQgBABAAAAIgCACIgCABIgHAFIgBACQgDACAAADIAAAEIAAACIAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAIgBAAIgDAEIgBACIAAABQgLACgHAJIgFAJIgFANQgDALAAALIAAAAQgLgCgIALIgFAKQgFAOgBAOQgBAUAKARQAJAQANAMQAOAMAQALIAHAEQADAGABAGQgGAAgFACIgcAKQgUAIAAgTQgRARgXAAIgJgBgAitgPQACgDAAgFIgCgKIACAKQAAAFgCADgAinhUQAAgDgCgBQACABAAADg");
	this.shape_40.setTransform(25,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},7).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},3).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},2).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,52,51.1);


(lib.object_buffy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{talk:0});

	// timeline functions:
	this.frame_22 = function() {
		this.gotoAndPlay("talk");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// Layer 1
	this.instance = new lib.anim_buffy_talk();
	this.instance.parent = this;
	this.instance.setTransform(24.9,24.5,1,1,0,0,0,24.9,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.1,49.2);


(lib.intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		playSound("flying");
	}
	this.frame_14 = function() {
		playSound("auxillaryverbs_female");
	}
	this.frame_19 = function() {
		playSound("bump");
	}
	this.frame_40 = function() {
		playSound("quick_pad_chord");
	}
	this.frame_47 = function() {
		playSound("auxillaryverbsarehelpingverbsthatmakeup");
	}
	this.frame_104 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(6).call(this.frame_14).wait(5).call(this.frame_19).wait(21).call(this.frame_40).wait(7).call(this.frame_47).wait(57).call(this.frame_104).wait(1));

	// Layer 3
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-272.6,-80.2,1,1,0,0,0,162.2,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:159.7,x:171.1},9).to({regX:161,scaleX:0.52,scaleY:2.04,x:172.3},3).to({regX:160.9,scaleX:1,scaleY:1},3).to({startPosition:0},6).to({y:-112.7},4).wait(71));

	// Layer 8
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.1,-68.9,0.187,0.187);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({scaleX:1,scaleY:1},8).wait(58));

	// buffy face
	this.instance_2 = new lib.object_buffy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16.2,80.2,0.424,0.424,0,0,0,25,24.4);

	this.instance_3 = new lib.BuffyStill();
	this.instance_3.parent = this;
	this.instance_3.setTransform(18.4,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2},{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2},{t:this.instance_3}]},16).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_3}]},51).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:24.9,regY:24.5,scaleX:2.37,scaleY:2.37,x:18,y:55.1},9).wait(37).to({_off:true},51).wait(8));

	// Layer 1
	this.instance_4 = new lib.static_buffy_activebuble("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(15.8,80.5,0.424,0.424,0,0,0,38.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:2.37,scaleY:2.37,y:56.4},9).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,63.1,34.7,34.7);


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
		//this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmAux',{loop:-1});
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.1;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("verb_menu.html","_self");
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
		
		 window.open ("aux_scene1.html","_self");
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.instance}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-283.9,-13,331.7,399), null);


// stage content:
(lib.aux_scene0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene0:0,scene0repeat:110});

	// timeline functions:
	this.frame_126 = function() {
		this.gotoAndPlay("scene0");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(126).call(this.frame_126).wait(1));

	// Layer 2
	this.instance = new lib.intro();
	this.instance.parent = this;
	this.instance.setTransform(261.5,175.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127));

	// main
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAGAMATAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgHgDgVAAQgRgBgOgFQgRgIAAgPQAAgTAUgQQAUgQAYAAQAJAAAOAFQARAFAAAHQAAAGgDADQgEAFgGAAIgOgCIgNgCQgNAAgKAGQgMAGAAAHQAAAEAEACQADADAHABIAYABQAVACANAKQAOALAAAVQAAAZgdANQgWAKgaAAQgZAAgPgLg");
	this.shape.setTransform(208.9,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgvBLQgFgFAAgGIAAhnIgBgNIABgNQABgJAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAEAHAKQAJAKAAAKQAAANgPAMQgJAIgKADQgWAJgjAAQgGAAgEgEgAgaA0QARAAATgGQARgFAAgFQAAgIgLgGQgJgEgHgCIgaAAgAgZgfIgBAVIAOAAQAdgCAAgUQAAgHgJgFQgIgIgKABIgQAAg");
	this.shape_1.setTransform(196,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag0BJQgFgEAAgGIAAgVIABgWIAAhOQAAgHAEgFQAFgGAIAAIAZACQANACAJAFQAqAVAAAfQAAAMgJAJQgJAKgRAHQAaAOANAPQADAEABAFQgBAGgEAEQgEADgGAAQgFAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgFAAgEgEgAgeADIAFAAQAXAAALgFQAFgDAFgEQADgEAAgCQAAgLgOgKQgMgKgOgBIgMgBg");
	this.shape_2.setTransform(183.2,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgtBLQgKgKgBggIACgmIADgnIgBgKIgCgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQgBAFgDAEQgEAEgGABIgEgBQgQgEgPgBIgPACIgRADIgBAmIAlgDIAXgCQAGAAAEAEQAEAEAAAFQAAALgMACIgYACIgpADIAAAUQAAAUADADQABAAALAAIARAAIASAAIAGAAIAFgBQAGAAAEADQAFADAAAHQAAALgLADQgKABgeAAQggAAgKgIg");
	this.shape_3.setTransform(170.6,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgVBFQgLgcgPg1IgIgaQgFgTgBgHQABgFAEgEQAEgDAGAAQAJAAADAJIAEARIAJAfIAPAxIAXg6IAIgXQAGgPAGgHQAFgFAFAAQAHAAADAEQAFAEAAAFQAAAFgDADQgFAIgFAKIgHAUIgaBDQgFAMgGALQgEAIgIAAQgJAAgFgKg");
	this.shape_4.setTransform(157.4,24.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgXBKQgEgEAAgGQAAgEAUgkIgVggIgfgxQgCgDAAgEQAAgFAEgEQAEgEAGAAQAGAAAFAHIAIALIAQAdIARAcIAWguIAJgUQADgJAJAAQAGAAAEAEQAEAEAAAFQAAAEgFALIgUAtQgNAbgJAQIgPAeQgGAJgHAAQgGAAgEgEg");
	this.shape_5.setTransform(135.3,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ag1BJQgDgEAAgGIAAgVIAAgWIAAhOQAAgHAEgFQAFgGAJAAIAYACQAOACAIAFQAqAVAAAfQAAAMgJAJQgIAKgSAHQAaAOANAPQAEAEAAAFQAAAGgFAEQgEADgGAAQgFAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgFAAgFgEgAgdADIADAAQAZAAAKgFQAFgDAEgEQAFgEAAgCQAAgLgPgKQgLgKgPgBIgLgBg");
	this.shape_6.setTransform(123,24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAiA4QgFgMgEgPQgHABgRABIgWADIgPAgQgFAHgHAAQgGAAgFgEQgDgDgBgGQABgFAOgdIgCgFQABgFAJgDIAfgxQAXglAGAAQALAAADANIAHAgIAOA/IAFANQADAIAAAFQAAAFgEAEQgEAEgFAAQgIgBgIgRgAgHAJIANgBIANgCIgGggIgUAjg");
	this.shape_7.setTransform(109,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_8.setTransform(96.1,24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgzA7IACgfQACgqAAgzQAAgGAEgEQAEgEAGAAQAGAAAEAEQADAEAAAGQAAA0gCAqIgCAYQAXAAAjgLIAFgBQAGAAAEAFQADAEAAAFQAAAIgIAEQgMAFgYAEQgVAEgOAAQgYAAAAgVg");
	this.shape_9.setTransform(85.6,24.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_10.setTransform(74.2,24.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAdA4IgNgTIgNgRIgdAiIgSATQgFAEgFAAQgGAAgEgEQgEgEAAgFQAAgFADgEIASgTIAiglIgUgZIgLgOQgHgJgGgEQgFgFAAgGQAAgFAEgEQADgEAGAAQAGAAAIAHQAHAGAEAFIAMAQIARAWIAYghQATgXAHAAQAGAAAEAEQAEAEAAAFQAAAFgDAEIgUAYIgYAfIAVAdIAVAbQAEAEAAAFQAAAFgEAEQgEAEgGAAQgKAAgPgWg");
	this.shape_11.setTransform(61.4,24.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgnBCQgZgTAAgxIAAgNIABgPIAAgLIAAgKQAAgJADgGQAEgJAHAAQAFAAAEADQAFAEAAAGIAAAQIgBAQIAAAPIgBANQAAAOAEANQAEAPAIAGQAEAEAPgBQAZABAJgtQAFgVAAgqQAAgGADgFQAFgGAIAAQAGAAAEAFQACADAAAFQAAAngDAVQgGAggQAWQgHAKgKAGQgNAIgMAAQgYAAgNgKg");
	this.shape_12.setTransform(46.9,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAiA4QgFgMgEgPQgHABgRABIgWADIgQAgQgEAHgHAAQgGAAgEgEQgFgDAAgGQABgFAOgdIgBgFQAAgFAJgDQAOgXARgaQAXglAGAAQAKAAAEANIAHAgIAOA/IAFANQAEAIgBAFQABAFgFAEQgEAEgFAAQgIgBgIgRgAgHAJIANgBIANgCIgGggIgUAjg");
	this.shape_13.setTransform(32.2,24.8);

	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,194.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(127));

	// button
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(297.9,201.6,518.6,398.7);
// library properties:
lib.properties = {
	id: '91A8307EBC8364498F9BD1E86C51EE84',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/auxillaryverbs_female.mp3", id:"auxillaryverbs_female"},
		{src:"sounds/auxillaryverbsarehelpingverbsthatmakeup.mp3", id:"auxillaryverbsarehelpingverbsthatmakeup"},
		{src:"sounds/bump.mp3", id:"bump"},
		{src:"sounds/flying.mp3", id:"flying"},
		{src:"sounds/bgmAux.mp3", id:"bgmAux"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/quick_pad_chord.mp3", id:"quick_pad_chord"},
		{src:"sounds/square_bits.mp3", id:"square_bits"}
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
an.compositions['91A8307EBC8364498F9BD1E86C51EE84'] = {
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