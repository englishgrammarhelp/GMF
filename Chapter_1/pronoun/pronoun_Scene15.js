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


(lib.yousent2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6CkQgIgHAAgJQAAgNAHgMQAIgMANAAQAVAAAAAaQAAAMgGAKQgHAMgLAAQgJAAgIgHgAgtBQQgGgHAAgJQAAgPAcgWIAzgnQAdgYAAgVQAAgZgYgWQgXgUgZAAQgOAAgVAOQgWAOgFAAQgJAAgGgHQgHgHAAgKQAAgRAigRQAegPAUAAQArgBAkAjQAkAjAAArQAAAhgVAYQgMAPghAYQgiAYgMAPQgIAJgJAAQgJAAgHgHg");
	this.shape.setTransform(-0.7,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.yousent2still, new cjs.Rectangle(-13.9,-33.3,27.8,66.7), null);


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


(lib.Usredheadmouthstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrAyIgFgBQgIgPgUgFQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAXAJA1ABIAEAAQAogsAgg2IAAAAIADgBQgFBMgkAvIgBAEQgogGgngIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Usredheadmouthstill, new cjs.Rectangle(-7.7,-6.4,15.6,12.8), null);


(lib.Usguysmouthstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAvQgdgPgIglIAAgDIAqAAIAFAAQAjgRAfgVIAEABQgJBLhCARIgFAAg");
	this.shape.setTransform(0.6,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUA+QgmgcgSgvIAAgFQBNATArg4IAGgFIAMgBIAHAGQALAQgEAUQgEASgRATQgLANgIAQQgVANgeACIgFAAgAg0AAQAIAlAdAPIAFAAQBCgQAJhMIAAgCIgEABQgfAVgjARIgFAAIgqAAIAAADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Usguysmouthstill, new cjs.Rectangle(-7.6,-6.2,15.4,12.4), null);


(lib.Usgoldennotestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Ai5H1IgGgEQgIgGgIgIQgCgGAAgHIAAgFIACgBIACgCIAAAAIADAAQACACgBADIgBACQgBAGADAEIACADIADACQADAEAFACQAGAFAIACQAEACAFgCQAHgCAHgEQAHgPAGgPIABgEIABgCIACgDQAFgWgDgXIAAgGIAAAAIgCgCQgCgJgFgJIgBgEIAAAAIgBgBIgCgJIAAgEIAAAAIgBgDQgBgGAAgHIAAgHIABgFIAAgKQABgCAAgEIAAgEIAAgFIgEADQgEAIgIAFIgEACIgFAAIgTgBQgTgEgNgPIAAgBIAAgBQgFgGABgJIAAgLIABgKIAGgNIABgBIADgEIACgBQAMgVAXgHIAFgDQALgJAIgLQACgDADAAIAGgMIAAgCIABAAIAAgCIABgEIABgDIAAAAIABAAIgBgJIAAgMIAAgQIABgBIABgFIAAgCIAAgBIACgCIAAgBIAAgCIABgBQACgCgBgDIAAgCIADgEQAHgKAMgDIAXAAQANAJADAOIACAIQABAOgFALIgBABQgCAHgDAGIgCADQgCAFgEADIgIAIIgGAFQAAAEgEADIgCACQgFAEgHACQgFAFgIgBQACAHgBAHIAAAGIgBAFIgBAJIgDAbIgBAUIgBAHIAAACQAEACADgDIAQABIAAAAIABAAQAMACAIAJQAHAGAEAIQAGAMAAAPIgCALQgFANgOADQgIACgHADIgOAAQAFAMAAANIAAAEQABAfgMAbIgJATQgBAEgDADQgLAHgLAAQgIAAgJgEgAiKE1IAAAsQAAAIADAGQAEAHAHAEIAIAAQAPgDAMgHQAIgPgEgQIgCgFIgCgCQAAgDgDgCIgFgFIgCgCIAAAAIgDgDIgFgDIgFgDIgGgBIgBAAIAAgBIgJABIgBAAIgJABgAiYDVIgGAGQgNANgSAFQgKAHgGAKIAAABIgBACQgOAOACAVQABAEACAEQADAGAFAEIADADIABABIABABQAFABADACQAFABAFACIARgBIADgBIACgBQAKgJAGgMQAEgMgBgNQgBgIACgHIAAAAIAAgCIAAgBIgBgBIgBgBQABgEgBgDIAAgCQgEgQAAgSIgEAEgAhsBpQgKADgGAIQgGAOAAAQIAAArIAIgEIAFABIABgBIAGgCIAHAAIAOgOIABgBIAAgBIAAgBIABAAQAEgFACgGIABgCIAAgBIAAgBIAAgBIABAAIABgDIAAgBIABgDIABgSIgBgFIAAAAIgLgOIAAAAIgCgBIgBAAIgQAAIgBAAgADJhXIgOgBIgBAAIgEgBIgBgBQgFgCgEgEIgCgBIgBgBIgFgBQgHgBgDgHIAAgDQAEgEAEADQAFAEAGACQAGACAEAFIADABQAKADALgDIAFgGIACgBQAFgKgDgKIAAgFQgFgLgIgKIAAgCQgGgIgEgJIgCgEQgEgEgBgFIgFAAQgOACgOgBIgBAAQgGgDAFgEQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAAAAIACgCIAIgDIAEgBIAJgFIAAgBIgCgDQgFgIgFgIIgBgDIgRgbQgDgEgEgDQgEgDgDgFIABAUQAAAFgEAEQgCADgDgEQgBgCAAgDQACgOgCgPQgDgWgGgVIgCgJQgHAIgKAGIgKAGQgCACgEACQgEAEgFAEIgFAGIgCALQAAAGgDAEQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgGgCABgGIACgKIgBgCQABgEACgEIAGgNQAHgMANgGIAKgHIANgKIgEgDQgMgMgKgOIAAgCIgIgOIgCgDIgDgJIgBgEIgDgSIgCgLQgEgKABgMIACgVQABgIADgHQAEgNAPgCIABAAIAOgCIACgBIACAAIAAAAIACAAIAUABIACAAQAMAEAGAKIABAAIADAEIAAADIABABIACAFQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAIABABIACADIAAACQAEAIABAJIABAFQADAVgCAUIgCALQgDAIgFAHIgGAKQgFAJgJAFIgCABIgFAEIgEAHIgBABIgBACIAAADQAFAHACAHIABABQAEADADAEQAKADAIAGIAIAEIAVAIQAVAHANASIAFAIQAGAPgEARQgBAEgEAEIgEAGQgEAKgIAGIgBABQgBAEgDADIgDADIAAACQAEAEADAGQADAGACAIQAPAQADAUQAEAUgPAOQgEAEgFAAIgDAAgACRkXQgBAIAFAGQAIAIAEAKIAFAKQADAEABAFIABABIAKAPIACADIAEAFIAJgFIAFgCIABABIACgDIABgDIABgCIADgEIAGgKIgBgEQACgYgVgNIgBgBIgBAAIgEgBIgBgBIgBAAIgBgBIgIgCQgOABgOgDIgFgCIAAAEgABanuQgHACgGAEQgFADgBAGIAAADQgEAPABAPQAAAKADAJIADAPIABAJIAAABIAEALIABADIAAABQAFAHAEAHQADAHAGAGIAOAOQACgFAEgEQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQADgDAFAAIACgCIAEgBIAKgOIAAgBIAIgMIACgDIAAgBIADgRQABgKgBgLIgCgQIgEgNIgHgRQgCgGgFgEIgIgGIgBAAIgBgBIgCAAIAAgBIgEABIgFAAIgGAAIgSABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Usgoldennotestill, new cjs.Rectangle(-22.5,-50.5,45,101), null);


(lib.uswordsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AgbA2QgPgFABgKQAAgEACgDQAEgDAEAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQAAgNgTgFIgJgCQgNgDgFgEQgIgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgWAHQgQAGABAKIAFABQAWAEAKAHQAQAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape.setTransform(5,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AAWAuQgMAHgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgQQABgJAIAAQAEAAADACQADADAAAEIgBAPIgCAPIABAbQABAMACAGIAHADIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgJAJAAQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgKg");
	this.shape_1.setTransform(-4.8,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.uswordsstill, new cjs.Rectangle(-12.1,-15.9,24.3,31.9), null);


(lib.ussentyoustill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhWB0QgZgdgGg3QgDgYABhKIABgsQABgSACgHQAFgOAMAAQATAAgBAhIAABzQAAB1BTAAQBNAAAAjGIAAgTIAAgQQAAgMAFgJQAFgMAKAAQAUAAAAAbIABAYIAAAYQgBDih0AAQg9AAgdgjg");
	this.shape.setTransform(29.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhiB5QgpgjAAg3QAAhDAog4QAtg9BBAAQBBAAAfAdQAhAeAABBQAABCglA3QgqA+hCAAQg3AAgmghgAhFhBQgeAsAAA0QAAAlAcAXQAbAXAnAAQAuAAAfgwQAcgrAAg0QAAgvgVgSQgUgTgwAAQguAAgiAwg");
	this.shape_1.setTransform(-1.7,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpCWQgHgGAAgIQABgHARgjIAZgsQgjgtgKgZQgKgWgUgfIghgzQgDgFAAgFQAAgJAGgFQAHgGAIAAQAJAAAGAJIAQAYIAbAqQAPAYAIAUQAHARAUAbIAthsIAUgqQAGgNAMAAQAIAAAHAFQAGAGAAAIQAAAJgLATQgEAHgIAQIgiBTQgTAtgSAjIgXAsIgKAVQgHALgLAAQgHAAgGgFg");
	this.shape_2.setTransform(-31.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ussentyoustill, new cjs.Rectangle(-45.5,-29.8,91,59.8), null);


(lib.ussentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AhYCYQgpgTAAghQgBgJAHgFQAGgHAKABQALgBAIAMQALARAJAHQASAMAkgBQAhAAAdgOQAmgTAAghQAAgcgggQQgagOgmgBQgjgBgZgOQgfgRAAghQAAgnAtghQAqgfAsAAQAWAAAaAIQAkAJAAAPQAAAUgUgBQgJAAgWgEQgVgFgNAAQghABgYAQQgYARAAAYQAAASAgAIQAMADAiACQAyAEAdAcQAaAYAAAlQAAA0gxAgQgqAbg2AAQgoAAgigQg");
	this.shape.setTransform(16.9,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AhhCCQgbgfgHg/QgDgcgBhSQABgfABgTQABgTADgJQAGgPAOgBQAUABAAAkIAACCQAACEBcgBQBXAAAAjeIAAgWIAAgSQAAgNAGgKQAFgNANgBQAVAAAAAeIAAAbIAAAcQABD+iEAAQhEAAghgog");
	this.shape_1.setTransform(-15.2,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ussentstill, new cjs.Rectangle(-34.2,-33.3,68.5,66.7), null);


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


(lib.forus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaBJQgDgDAAgEQAAgGADgFQAEgFAFAAQAKAAAAALQAAAFgDAFQgCAFgGAAQgEAAgEgDgAgUAkQgCgDAAgEQAAgHAMgKIAXgRQAMgKAAgJQAAgMgKgJQgLgKgKAAQgHAAgJAHQgJAGgCAAQgFAAgCgDQgDgDgBgEQAAgIAPgIQAOgHAJAAQASAAARAQQAPAPAAAUQAAAOgJAKQgGAHgOAKQgPALgFAHQgEAEgDAAQgEAAgEgDg");
	this.shape.setTransform(34.6,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAKAAAAAQQASgSAWAAQAJAAADAGQAEAGAAAMIAAAHQgBAMgIAAQgJAAAAgJIAAgHIAAgIQgQABgJAHQgIAHgGAMIAAA1QAAAKgKAAQgIAAAAgKg");
	this.shape_1.setTransform(-4.8,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_2.setTransform(-15.3,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvBPQgCgDAAgEIAAg6IABg4IAAgOIAAgMQAAgFADgDQACgCAEAAQAEAAACABIAWgDIAQgBQALAAAPADQATAFAAAHQAAAEgCADQgDADgEAAIgEgBQgMgEgUAAIgOABIgTACIgBArQATgFAKAAIAeABQAJACAAAIQAAAFgDADQgDACgEAAIgPgBIgOAAQgHAAgWAEIgBBEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_3.setTransform(-25.9,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forus, new cjs.Rectangle(-34.6,-18.7,76.8,31.9), null);


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


(lib.ussent2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhLBfQghgbgBgyQAAg4AcgnQAegqAzAAQAjAAAYAMQAcAQAAAfQgBAWgYASQgLAIgkAQIhSAnQALATATAJQATAJAXAAQAPAAAVgGQAZgHAHgMQAIgLAIAAQAJAAAGAGQAFAFAAAIQAAAYgnASQghAPggAAQgxAAgfgZgAgtg6QgSAUgJApIBEgfQAngTARgPQgTgRghAAQgbAAgSAVg");
	this.shape.setTransform(47.9,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag9B7QgigNAAgWQAAgIAHgHQAHgHAJAAQAHAAAKALQAGAFASADQAPADAKAAQARAAAPgFQAUgGAAgOQAAgegqgKIgWgGQgdgFgMgJQgSgMAAgZQAAgtArgUQAOgGAcgIQAdgIAMgGQAJgEALAAQAJAAAGAGQAGAGAAALQAAAGADAMQADAMAAAGQAAAKgGAHQgGAGgKAAQgMAAgFgIQgDgGgDgSQgQAEgiAMQgjANAAAVIANAEQAyAIAYARQAkAVAAAsQAAAkgfASQgaAPgmAAQgdAAgagJg");
	this.shape_1.setTransform(23.6,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBBdQgdgegCg0QgBgwAagmQAfgsA2gBQAsAAAWApQASAhAAAtQgBAwgZAjQgcAngtgBQglABgbgcgAgmgsQgPAZAAAeQAAAgASATQAOAOAUAAQAWAAAQgRQATgSABgfQADhUgxgBQgfAAgSAfg");
	this.shape_2.setTransform(1,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA7CmQgEgSgFghQgEggAAgUIABgSIAAgRQABgogVAAQgbAAgWAYQgLANgUAkQAABUgHAPQgGAOgNAAQgJAAgHgGQgHgGAAgJIADgKQABgFABgbIAAggIABihIABgkQAAgMgCgKQgBgKAAgKQAAgKAGgGQAGgGAJAAQATAAADAUQADAVAAARIgBAwQgCAYABAYIAAAUQARgZAVgLQAUgNAXAAQAlAAANAYQAKARABAmIACAqIAEAuQADAaAEATIABAHQAAAJgGAGQgHAGgJAAQgPAAgGgRg");
	this.shape_3.setTransform(-23.1,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag+BgQgggcAAgvQAAgsAegvQAgg1ApAAQAWAAAaAKQAhANABATQgBAIgFAHQgFAGgIAAQgHAAgEgDIgJgIQgNgLgeAAQgVAAgWAoQgVAlABAaQgBAdAVARQASAPAcAAQANAAAPgHIAZgNQAHgEADAAQAIAAAGAHQAGAGAAAIQAAAQgiAPQgeAOgTAAQgsAAgegcg");
	this.shape_4.setTransform(-47.8,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ussent2, new cjs.Rectangle(-61.7,-33.3,123.5,66.7), null);


(lib.Usguysmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Usguysmouthstill();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.366,0.366);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-2.2,5.6,4.5);


(lib.Usgoldennotes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Usgoldennotestill();
	this.instance.parent = this;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-24,-52,49,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-50.5,45,101);


(lib.Usredheadmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Usredheadmouthstill();
	this.instance.parent = this;
	this.instance.setTransform(-3.4,1.8,0.436,0.436);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97,x:0.4,y:0.2},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-1,6.8,5.6);


(lib.uswords = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.uswordsstill();
	this.instance.parent = this;
	this.instance.setTransform(6.4,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,18.8,24.3,31.9);


(lib.usbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.uswords();
	this.instance.parent = this;
	this.instance.setTransform(4,-40.1);

	this.instance_1 = new lib.forus();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.5,-3.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgHCwQi9gBiHgzQiJg0AAhIQAAhICJgzQCJg0DCAAQDCAACKA0QCJAzAABIQAABIiJA0QhNAdhfAN");
	this.shape.setTransform(0,-4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAmA3QgggCgagUIgQgNQgSgSgPgUIgKgMQgEgFAAgEQAAgEAFgDQAHABAGAGIAEAEQANARAMASQAfAfAqALQACgIgBgKQgBgKAEgJIAJgXIAEgGQAEgMAIgLIAGgIIADgCQAKABgBAHIgCAEIgHAMIgGALIgGAPIgDAEIgCAGIgDAEQgDAVgBAWQgBAFgEADQgFAAgDgDg");
	this.shape_1.setTransform(7.7,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnCuQgLgTgOgQIgEgEQgGgGgGgBQgEADgBAEQi9gBiHgzQiJg0AAhHQAAhJCJgzQCJg0DCAAQDCAACKA0QCJAzAABJQAABHiJA0QhNAdhfANQABgIgKAAIgDACIgGAIQgHALgFAMIgDAGIgKAYQgEAJABAKQABAJgCAJQgrgLgfggg");
	this.shape_2.setTransform(0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.usbubblestill, new cjs.Rectangle(-47.9,-23.5,95.9,46), null);


(lib.usbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.usbubblestill();
	this.instance.parent = this;
	this.instance.setTransform(0,-17.7,0.045,0.045);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.57,scaleY:1.57},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-18.7,4.2,2);


(lib.US = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.usbubble();
	this.instance.parent = this;
	this.instance.setTransform(5.3,-93.9);

	this.instance_1 = new lib.Usguysmouth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.8,-96.5);

	this.instance_2 = new lib.Usredheadmouth();
	this.instance_2.parent = this;
	this.instance_2.setTransform(108.2,-47);

	this.instance_3 = new lib.Usgoldennotes();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-61.5,-61.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC33").s().p("AkyEhIjUgNQgTgTgWgNQgJgGgNAAQgwgyg8ggIg7gfQgxgVgwgZIgjgPIgKgJQhDgmhBgtQgbgUgfgMQgYhbgLhcQA2AJAxgRQCdg0CogWIA1AeQAHAEAFAFQBIAhBLgTIACgEIACgBQARAxAPAxQAFASAKAMIACACQgJAlgmALIgPAEIgEABQhpAbh1gXQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgRgjglAHIgCAAIAAABIgDAAQgSAFgBASQAAAMAIAGQASAQAWAKIAKAHQAQAJARAJQAEACACAAIABABIACACQAUASAbADIABABIA7AAQARALAQAMIAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAMAFARABIAFAAIAFAFIAFAEQARANAZAFIAEAAQAmAHAVAjQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAIBoAAIAFAAQAogZAggkIAEgBQBFgFBJAMIAAgCQAGgCABgFQAAgEgEgIIgDgDIgDgGIgZglQhLh5g5iNQAXARAngRIAqAcIAPALQAuAGAsgMIACgDIAEgEQAuAeAvgVIACgEIADgCQBhBuBKCFIABAEQgGARgMAMQgNANgUAGIgBADIgEABQg9AWhWgEQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgqgSglAGIAAABIgBAAIgDABIAAAAQgGAKABAMIABADIAPAPIAAABIABABIADABIAIAGQACAFAEADIAeAXQAKAYAigGIAFAAQAtAjBCgdQAxgXArgfIBoAAIAEAAQAmgKANghIABgEQgCgTgIgNQgGgLgKgIIgHgFIgEAAIgBgDQh6hohGibQANAHAQAGQBfAhBegdQArAaA5AMQAXAEAYADIAHABIAFAAIAAADQAyAHAjASIgEABQgqAbg9AGIgBAAIAAAAIAAAFIgFAAQgZAAgXAEIgBAEQgWAPgTATIAAAFIAAAEIgFAAQAAAPAGAJQAHAJAPADIAFAEQALAMAPgMQALgHAQgEQATAVAXgMIABAFQABACADACQAcgGAhAFIAAgCQAZgVAsgKQAOgDAWAAQAiATAhgbQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAlAMAqAHQABABAAAJIAAASIAAAUIAAAEIgCAAQgBASgDAQQgHAggUATIAAACQgqgUgiAbQgFAdANAKIABAEQBbAaBaAEQALABgWgOIABgDQAgAEANgqIACAAQAFgugKgfIgCgEIgBgEIgBAAIAAgFIgBgEQgJgVAAgfQAHAKAEAOIABAJIACAAQAJAUAOAJIAEACIAAAAIAKAEQALADAOgCIARgFQACAAACgHQAAgDADgCIAFABIAABPQgJAggXAiIgMAQQgyA0gfAoQj7ARj3AVQlBAalIgCIhkABgAllj6IAHAAIACgBIAEgCQAIgBAEgFQAYA8AXA+IgCABQgmgugghEg");
	this.shape.setTransform(84.4,114.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6633").s().p("AEOCcQgWgJgJgXQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBAAgBAAIAAgFIgIghIgFgdIAFgIIARgeIABgEIAAgCIAHgDIAFAAQACgUAAgWIAhBAIgJACQghARAKAmIABAFQADAbAXAJQAVAHANgIIAAALQgMgFgEAGQgDAEAAAHIgKACIgXAFgAkgBQIAEgBQAQgbg1ATIAAgFIAAgFQANgLAKgOIABgEQAggOAngIIAFgBQBEgJAsgiIABgEQAYAFAdAAIADAAQAvALAqAPIABADQgQABgHAIQgwAuhGAZQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgDgLgGAAIAYgCQALgBAHgLQARgZgNgaQgFgLgLgBQgUgDgUgBIAAABQgMAEgIAKIgBACQgNgBgJAHQgaAWAWAcQAEAGAHAAQAWACAVAAQgJABgOAUIAAgJQgBgJgDAEQgYAcgUgOQADgCABgDQAGgQgLAHQgpAbAKgWQgBgZgjAaQgSANgIAAQgHAAACgKgAgcA0QAYggAlgOIAFgBQALgFANgDIAEgBQAnAHANAjIAAAEIAAADQghAJgrgCQgFgFgGAEQgUAMgOAAQgPAAgKgLgABxhLQAZgMATgGIAiANQgaABgSAJIgFAAIgKAAQgMAAgHgFgABahHQgQgHgbADIAAgCQgZgHgUgKIgHgEQgUgKgRgPQAFAAAEgCQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIAAgEQASgNAOgMQAMAHAQAHIBxAsQgXAMgYARIgEgBg");
	this.shape_1.setTransform(163.8,100.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ACtEAIAAAAIgPgJQhOgrheAwIgCAAQgChBgPAkIAAACQgjgLgxgUIgCgBIgIgDIAAgEIAAgFQAKgEAHgGIACgBQAPgNAIgTIAAgFQAzAUBRAGQBWAFApgtQAbgQAWgPIgBAHIAAAPIABAEQAIAigEAvQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQgNAhgSAcQgBAFABADIgGADIgPgMgAjjifIAAgFIAAgJQAbgDApAAIAIAAIAAgCIADAAQAEgtAfAHQAEABADACIACACQAlgDAUgtIATgIQA1AYAuAgIgBAEQgjBEhgAIIAAgDQgdgJgXgMQAAAFACAEQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBAEQgYAPgWACIgHABQgkAAgcgkg");
	this.shape_2.setTransform(122.2,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6400").s().p("ACYCvQANAMAJgkIAPg1IABgDIABAEQAeA/gyAvgACgCBIAGgZQADgCABgDIABgEQAEATgCAQgACtBQQgCgJAAgJIgBgEQgQglgUAbQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgCgHAAgHIAAgFIAAgEQAWgLAKgVIAAgDIALgBIAFAAIAFgBQATAHAZgJQAGgCgLAFQgWALgEAZQgBAMACAEQABAGAEAFIgBABIAAAFQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABQgGASgPgJQAAAFACACQAAABAAAAQAAAAABAAQAAAAAAAAQABAAABAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgDABgAArgIIAAgCQgfgBgTgHIgFAAIg6gYIgEAAQgPgBAiAQIACAFQgogJgZgdIACgCQgBgQgTgjQAzg8ByAEIAFAAIAHAAQgOgNgnADQAlgXApALQABAAgCAGQgIAUAKAFQAKAGAOADIAOABIAFAAIABAEQApAqg+gpQAiAZAGAYIgLADQgHABAQAWQAQAWADgIQgFguAYAzIAAgFIAAgKIgCAAIgDgNQgMgugegZQAKgJASACIAAACQAcALAxgCIAcgCIAAADQgNACgJAGIgFADQgkAegXgSIgFAAQAMAMADAVIAAAFIgEgBQgDgBgDgDQgBAFABADQABADAEABIAAADIAAAEQABANgDAIQgEAHgGAFIgUAGQgBABAAAAQgBAAAAAAQAAAAgBABQAAAAAAABQgLACgPgBQAHAKARgBIAEAAIAAAAIABABQgZALglAAQgQAAgSgCgAkogWIgBgFQgGgIACgQQAUgtAzgQIAFgBQAAAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAIgFADQgYAQgRAVQgGAIgDAHQgNAfgIAAIAAAAgACwhUQAUAcATgWIADgBIAEABQAIADgPAFQAngLgTARQgEABgBADIgCAAQgQAMgLAAQgUAAgFgkgAkghnQAJgcARgSIADgBQASgMAVgBQATgBAWAHQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIgBAEIgEABIgFAAIggAAIgBADQgsAKgRAlgAiahnIgBgDQgvgag0AKQAZgVAuACIAFAAQAagDAKANIABAEIAAAFQgCATgIAAIgDAAgAEmhzQgnABgXgDQAVgSAfgGIAFAAQAWATgNAIIgEABgACRioQgOgCgOAFQgVAJgPgcIAAgEQANgMAQgHIAEgBIAFAAQAngBAXAQQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgcAKgvACIAAADQAXgBATACIAKABIAEABQAXAGgIAMQgQgKgPgDgAkRipIAMgJIAggYIAEgBQAqAAAVAXIADABIABAEQAFAGgQAFQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgngYgqAVIAAAFIgFAAIgGABQgHAAgBgGg");
	this.shape_3.setTransform(114,-66.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009933").s().p("ABjD8Qgkg9hAggIgDgBQgCgEAAgFIAHgJQALgNAIgRIABgEQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQBGhqAyh8IgCABQg4BxhGBiIAAAFIAAAEIgBADIgCAEQgWAdgVAfIgEABQgiAPgcgCQAcgdASgnIABgEQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAIAZgpQA+hmAqhqIAAgDQhCB5hHB2IAAAEIAAAEQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAABQgRAmggAXIgEAGQgZAVgSAFIgFgBQgqgRgigYIAEgBIABgEQBEhbBBheQBChhAphkQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQhyDHiJCwIgBACQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIADABIAAADQgqgBgdANQAmAJgiAWIgEgBQgagCACgcQAYgaAVgdQAWgcASggIABgEQAug7AmhEIABgFQA3hPA5hOIABgDIAAgGQAbAJAhABQATAAAUgCIAFAFIgKALQAGAwAnAQQAWAJAgAAQAQAAATgDQBTgMBHAJIAAAEQgHAYAIA0IgCAAQgEAXgNALIAAAEQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQg+BPg6BVIAAAEIgFAdIgDABQgsAugmA0QgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape_4.setTransform(45.7,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAsQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgBQAFAAAEgDQAFgEAAgHQAAgKgFgEQgFgGgLABIgFADIgBAAQgDACgDAEIgDAFIgBgGQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAcggAbgYQAGgBAFAFIABABQAEAFAAAFQgCAwgtAeg");
	this.shape_5.setTransform(74,-117.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("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");
	this.shape_6.setTransform(98,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996600").s().p("AglCAQgCgDAAgFQAMgIAJgJQAPgOAJgRIAEgFQALgigJgfIgEgBQgogthEgTIgFgBQgEgBgCgDQgDgEgBgGIAAgFIAAgqQAagKAlAVQAnAVAiAZQAtAfAmAlQALAKABAVQgLAxgnAXIgBAAIAAADQgJACgEAFQgFADgCAAQgkAAgrANQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBg");
	this.shape_7.setTransform(92.5,-119);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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IgEABIgDAAIgCABQgOAHgSADIgKACIAAAFIAAADIABAPIAAAAIAAAhQAAASgCARQgDAXgGAUIAAACIgUACIgBAAQg7AHg2AMIgSAEIgMACQgaAEgXAJQgSAIgPAAQgOAAgKgIgAB7oGQAFgIAIgHIABgDIACgCQAOgLAQAEIAHADIADABIAFABQAeARgdAAIgBgCQg3gXASAxQAJAHAUgFIAGgCQgLAIgLACIgFABQgVAAgLgegAiypSIgIgCQgNgFgNgGIAagIQAXgFAZgCIAGAAIAFAAIAAgCQAnABAXgNQAAgHgEgDIgFgEIANAAQADAAACAEQgDAjgsgGIgGAAIgDABQghAIgpABIgMAAIAMADIBtAaIADABQg7gCgtgPgAIzqSIgCAIQgDAJgFAFQgJgIAQgcIADgBQAGABADACQADACAAADQgBAQgGAOQAEgKgJgNgAg9w0IgBgEQgJgMABgWQAKgBACgNIACAAIABgEQANgUASgOIAGgEIAEgBQANgIAIADQAIACAEAMIAAAFQABAogTAUQgRAUglABIgEABIgEgBgAAFyOQgkALgUAbIAAAFQAlAAgeAkIgCABIAAACQA4gLgBhIIgEABgAg4y4IAAACIAAABIAAABIAAgEg");
	this.shape_8.setTransform(84.3,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6FFFF").s().p("AjRSjIACgBIgBACgABqQiQhBgThCASIgBgEIgEgGQgGgDgFgEQgggegvAIQgMAMgYABIgahEQgKhQgPhMQgOhKgpgyQgbgggGg0QAGAAgCgJIAAgFQAag5ApgmIACAEQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAQgFAmAYgOIAEAAQAihBAwgwIAEgBQAFgMAAgRIAAgEQA3hRA8hMQABgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAQARgNAEgeIADAAQgEgyAGgiIACAAQAhgRA6AHQAVADALgIQAuggASAkQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAIAgAkAFIAEAAQAcBDAtAzIADABQAbAwgNBCIAAAEIAAAFIAAAFIgEABIAAAAQgjAagSAsIAAAFIgBADQg+A0hPAiIAAAFIAAAFIgEABQhUBBhABVIAAAFIgBAEQglA4gpA2IAAAEQApBVBAA9IADABQA+A3A2A+IABAAIgEADIgzgQgAEbQUIgCADQgmhJg5g1IgBgDQgtgggigpIAAgEQBGhbBfhDIABgEQAggXAmgVQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBIBRguIADgBIAAB2IAAAFIgEAAQgFBsANBbIABAFIAABeIAAAFQAbAkAmAaQhrgMhrgRgAknQJQgjhXgXhpQAyBlAsBsIgHgBIgHAEIgKAJIgMgdgAujQjIhsgEQgWjbAtjmQBFleBflUIAAgyQBzkgB6lDQBvkNDnhuQB8g8CqAbQAMgQAQgHIAAATQgIAKgLgFQAGAYgBAhIAAAEQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgPAKQgNAJgQAGIgBAEQgMASgVALIgBAEQgFATgNAKIAAAFQgCAHgFAFIgDACQgzgPgBA1QAIABgEANIgIAVQgTAsghAsIAAAdIAAAEIgFAAQAHBEAxAdQAQAKAWAFQATAFAAAZQgWABgsgYIgFgBIgEAAIghAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQiIBThzBnIAAAFIgCABQiDBph1B1QgDAfAOAQIAEABQA0ASBBgOQChglCRg1IACAAIAAAFQgEBAgdAoIAAAJIAAAFIgBAFQgbBVg6A5IAAAKIAAAEIgCABQg2BMg5BKIAAAFIAAAFIgDABQgmBCgsA8IAAAFQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgpBHg3A4QgDAMAIACIAFAAQAgASgKAmIgJAWQgRAiAWAZQCEDBBZDsIAAABIASAzIgCABQgrgJgngRQhWgmhcgKQiDAYh7A4QgKAFgKAAIgCAAgAM1QhQhWg3hsgiIgFAAQgnADgEgfQAbhIALhZIAAgFIABgEQAMgsABg2IAAgQIAAgEIAAgFIAAgnQAFgzAIgwIABgEIAAgFIgBgDIAGgDQABACADABIAAADQAageAPgoQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABAAQABhIgNg8IgDAAIgBgEQiChrgQjcQAMgfAfAMIAEAAQCLAwCIAxIAFABQAqgBgKg3IggjQIgDAAQgGgYgKgTIAAgEQgSg4gZgwIgBgFQgsh5hvg3QgHgHAIAAQAOgDgCgCQgQgRgeACQAPgDAKgGIADgBQAvABABAQIABgHQADgmgXgKQAhgMAXAQIgBgDIgDgBQgUgUguAIIgBADIgEAAIgEgBQgbgSgSgIIgDAEQgaAggHghIAAgFQgIgphIgBIAAAFIgFABQguAQgsgpIgFgBQgrgFgTAUIAAADQAqgUA1AbIADAAIikBHQgcgSASgVIAGgHQgWANgMgGIgEgBQgPgPgXgIIgFAAIgqAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgUAZgWAAIgDgBQgTgbADgwQAIABgCgKIgBgFQAigXAngVQAdgPANggQAPgkAagUIAFgBIAJgGQAigdAFg6QgmgwgxgmQg/gwhQgfIAAgVQAUgIAZAEQASADATAAIBkAAID6CJQA0BPAuBPQAaAsAmAXIA+CVQELE/BEG8QARBygnBtQgrA1gwA4QhkB1h6AwIgMFRIAZAmQACAXAkgBQAMgEANAFQAFACAHAAIAMAAIAZAAQAJARASANQgIARgaARIAAAFIgBAAIgDgBgAnlJOIAAgFIAAgmIAWghIAKgPIABgEQARAGgLASIgBAEIgCAAQgOBTAmA5IgCABQgggigagogABIADQASgdAPggIABgEIA0gTIAEAAQAgABgaAGQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQgXAYgOAnQgJAXgTAAQgMAAgSgLgALzhcIjfhrIgFAAQg7AUhAARIgBgEQgGgNACgUIAFAAQBDg3AnhTQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIAAABQAHAeAQgwIANABQgEAYgRAVIATAiQAbgFAPgkIAGgUQABgGgBAcQgBAfAKgVIAAgFQgEg0gGgmQANADADgHIADgBQAHAAAHgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAgBQAEgEAIgDQAGgDAGADIBGAkQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAxB8gNCjIAAABIgEgBgADwiuQgRgLgWgGIgFABIgLAEIgEAAIAAACQggAJgLgQQAIgMAGgQIABgEQAMgWAGgaIABgEQASAfAXAaIABAEQAtALAeAcIABADQgGAKgMAAQgNAAgTgMgAmelSQAjgjA8gkQA6ghApgcIAAgCIANgMIgBAKIgBAFIgHBZIAAADIiDAZIgdAGIAAAFIgEAAQgMADgPAAIgHAAg");
	this.shape_9.setTransform(76.6,-17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,1,1).p("EAkKANeIAAJLMhITAAAEAkKgWoMAAAAj+");
	this.shape_10.setTransform(-6,6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3,1,1).p("EgkIgWoMAxzAAAIACAAIWeAAEgkIgWoIgCAAEgkIAWpIgCqKIAAiFMAACghC");
	this.shape_11.setTransform(-6.1,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C6FFFF").s().p("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gDgFIgDgCQAfgPADgWIABgEIAmgbIAEgBIACAAQgBgSgLgLIAFgBIAhgNIAIgEIgKAAQgLgBgGgIIgEgGQgIgBAGgGIABAAIABgBIAEgEIAEgDQATgSAFgPQgQAHgQAIIgEABIgGADIgSgbIACgCIALgIQgWACgMALQgIAIADgJQAHgbgdAKQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgSAegVgfIgGgDQgHgDAIgFQAcgTgKgHQgTADgHAQQgRAjgSgMQgTgIASgQIAFgFQgJgJgXAhQgKADgEgEIgDgEQAGgbgXAIIgDAFIgDAIQAlAVgfgFQACAWgHgHQgFgGgCAAQgPgGgCgIQgEgfgOARQAEAbAXAIIABACIgFAAQghAFgTgFIABgDQAag6gpA5QAFAVAdgCIAEAAIAAACQgjACgQAPQgJgNAFgYIAAgFIABgEIgBAEQgIAngpADIAAAHIAAACIAAAFQAEALAJAFIABADIgFABQgkAIgLgJIAAgEQgBgmgDArIAAADQADAMALACIAHACQgUAMgZgJIAAgOQgBgegDAfQgDA4gVgrQgPAAAEAUQACANAHAEIAJAGQgjAcgUgbQgDApAggIIAEgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQALAVgmgDIAAAKIAAAFIAGAEIAEABQADAKgFgEQgFgFgFgDQgUgLgZANQAOAFAMAIIAIAFQAPALgcgJQgOgDAMASQAFAJATgCQgDAKAEADQAHAGgfATQAEAHAFAFQABABAAAAQABABAAAAQABAAAAAAQABABAAAAQATADATAHIAAADIgBADQgMAKgZgDQAWAJANAUIAJAIQASASghgDQgVAZAtgLIAFAAQAOAEAHALQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIgBAEQgGAOgQABQgEANAMgDIAFAAQAWABAVACIAFABIgBAFQgHAJgLAFQABAIAIABIAFAAQAJAFAIAGIABAEQAAAFACADIADABIANAAIAAABIAAAHIACANIAAABQgCARgNAFIAAAAIAAABIgFABIgDABIAAAAIgMAEIgDABQgrADg5gIIAAADQgbAGgPAPIAAAFIgEABIgFAEQgSAOgQAQIgHAGIgBACIgEAEIgEADIgBABIgCADQgSATgPAVIgIgFQAIgKAHgMIAB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");
	this.shape_12.setTransform(-6.1,-22);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CC33").s().p("EgkIAGHIgCqIIAAiGIAEAAQACAIACgBIABAAIAAACQABAdAWgUQAAAAABgBQAAgBAAAAQAAgBAAAAQgBAAAAgBIgNgIQBMgCA4AOIACAOIACAGIANANIAHAHQBUABBVgCQACAAACgEIAcALQgWAxgKA8QgFAdgIAbQgcBbg+A4IAAAEQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABQg0AdgmAsQAAAVACAVIACAAQAxAhBQgLQAXgEAXAGQAQATAXANQAOAIARAFQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAvAAQAAABABAAQAAABAAABQAAAAABABQAAAAABAAQACACACABIAlABQAIAAAGgDQAJgDAHgGIATgQIAMgJIAWgSQAEgDAAgDIAKgFIABgDQBjAjBfglQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAFAAQA9gLAXgyIgJgDIgNAAIgBAAIgEgBQibgFhqg0IAAgEIAAgPIB8jaIAAAAQAAAEABACQAFAIAHAGQBvACBugMQADAAACgDIACABIgFAMIAAAEIAAAFIgDABQg1BohkA3IAAAGIgEAAIgUAXQAIA+BOAAIAXgCQAOgCATABQAUABAMAFIAJALQAXAdAnAPIAAACQAzADAngKQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIATAAIAFAAQAxgOArgWIAQgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAgBQAxAGAegOQAagGAZgLQAFgDADgDQADgDAAgCQATgZgzgEIgEAAIAAgCQiSgBhpgnIAAgFIAAgYQAmgxAmgzQA9AFA7gKQAegFAkAIQAvAMAvALQBbATBTgbQDrhPD+AuIABAAQAMBdAXBbQAfAMAbATQBBAtBCAmIAKAKIAjAOQAwAZAxAVIA7AgQA8AfAwAzQANAAAJAGQAWANATASIDUANIAyAmIBkgBQFJABFBgZQD3gVD7gRQAfgoAyg1IAMgPQAXgjAJggIAAhOQAeAKgDgIIAiAAQAjAOAfgSQASgJgNgOIgDgBQgOgSgZgJQBMAAA4gHIAAgDQAcANAYgLQAHgDAGgFIABgDQgCgagMgQQgMgRgVgHIgEgBQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQhEghhrAIIAAgFIAAgFQAUgVAQgXIAGAFQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABABQAaAMAeAAQACABACgEIABgDQgXgGgXgEIAAgBQBXAQBYgZIAAJJgA+OAuIgegLIgBgDQgOgNAGgeQA4hDAxhLQAng+AihDIABABQAIADAHAGQATABATgBQgiCxhdBwIgZAcIgBABQgCAJAHACQAAAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAADIgugQg");
	this.shape_13.setTransform(-6.1,112.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC6633").s().p("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");
	this.shape_14.setTransform(186.3,78.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAgQgEgCgCgDQgDgEAAgFQAAgQAEgOQAEgOALgHQAFgBADABIAEABIAAAAQAKACAEALIADAHIADAIQgFgEgIABQgEACgCAEQgIALAKAJQAIAGAJgGIAEgEIAAAEIgBADQgBAEgDADQgJAEgGgDIgIADIgIABQgGAAgEgCg");
	this.shape_15.setTransform(-83,-83.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AlUFkIAAgqQAEgdAIAAIABACIAIAMIAXAkQAAAHgNgEQgRgEgOAbIAAgFgAgfFjQgmgnhJgHQgBgDgDAAQgMgCgHgGQgcgYgKgpIAAgFQBiBSCYgWQATgDgEATQAHAVgzABIAAACIgEAAQgYAKgSASIgDgBgAD/guIgvgJIABgDQAVgPAGgdQABAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAHgSgPAAIAAAAIAAAFQgQBFhXgDIgFgBQhAgNg7gUIgDABQglAUgngGQAggeAvgRIAEAAQA/g1AnhLQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABgBQgCgYgGgTQgFgQgIgNIgJgcIgBgEQAAgDgCgCIADgFIAHgBIACAHQAJAgAIAgIAAAAIALA2IgHAAQA3ANAtAYIADABIAHAHQAIAIAJgBIAEAAQAOgCAPgWIABgEQBIABgBBjIAAAEQgCAIgHADQgHACgNgBIAAACIgDABQgQAgghAPIgFgBgAESjjQgDgFgBgHIgBgGQgDghgBgmQAGAVAEAWIABAJIADAdIAAAGIAAAHIABACIgGgHg");
	this.shape_16.setTransform(-124.4,-21.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC00").s().p("AAzCrIACgDIAAgGIgBgDIgCgCIgJgCIgJgBQhoAEhmAWQghgngXgyQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIABgDIASgrIABgEIAKgEIgEgLQgEgBgCgDIAAgDIAEgTQAEACAIgeQAThIAAhVIAAgBIAHAAQAiAlAqAcIANAIIABADQAyARAygEQAVgCAVgFIAEASQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgGAeAEAkQAIAHAIAJIAMASQAkAMASAgQAAAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAqAxAkA3QhOAHhNAUgAgXBCQAaAbAXAeIAQAWIgQghQgLgagJgcIAEgEIgDgDQgLALgPgOQAAALgEAHg");
	this.shape_17.setTransform(-195.6,31.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F3D28D").s().p("Al1PxIAAgDIAGgBIgCAAIgEABQgSAFgegEIgEgBIgTgGQglgOgZgaQgXgEgTACQhMAIg1gZIAAgFIAAgKQAgg7A2giIAFgBQA3g1AdhPQATgxAJg8QAKg6AYgvQAWgpAfgPIAOgFIgOgNIhzh0IhHhKIgBAAIAAgBQBrgGBpgSIAZASIgBAGQgBAFACADQAqBQAeBdQgKBJgdA3IgFAAIgCAFQgBAFgDAEQgCAFgEADIAEACQghA9glA4Qg1BSg9BKIgBACQgBAMABAJQACAPAJAIIADABIATALQAlAVAtALQAiAIAmADIARABIAAgDIAFgBIA0gbIAFABQAgALgXAaQgBAIgNABQgHABgEgCQgWgMgXADQgJABgKAEQgKAEgKAGQAJgBAKAAQANAAANADQADgCADAAQAFACACADIAGACQADABgGACIgBABIABAEIgIAFIgDgDQgJgIgLAAIgDAAIgBABIgBABIAAADIAAADIAAABIATAJIgKAIQgFgNgQgBIAAABIgDAAIgBABIgBABIgBACIAAADIABACIACABIAHACQAFAGAHgBIgOALIgBABQABgJgJgFIgCAAIgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAJACAJQgHACgHABIgIAAQgJAAgJgCgAjZO2IgCgBQAWgcgZgXIAAgCQgtABgtAYIgFABQgsABgagQQgIgGgHgHIAAgFIAAgEIAAgBIAPgQIATgQQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQBOh2AgimIACgBIABAAIAAgDIABgHIgBgBIACgOQADgVALgSQARgbAOgeQAKgJALAGIAGADIhThRQgQgKgIgVQgUg3ghgwIABABQBRgGBRgOIADgDQA1BTAoBgIADABIAAAFQAGBdgsA/IAAAFIgBAEQhMB7hGCAQgGAcAPADIAAgCQBWArBsAFQAcACAdgBQAkgCgIATQgNAKgIACQgHgSgVABIAAAAIgDAAIAAABIgHgBIAGACIgBAAIgBAEIABACIAAABIgEgCIAAAAIgDAAIgBABIgBABIgBAEQACAJAKAEQADAKAIgBIgCACQgFAGgHgEIgDgCQAAgMgMgEIgDABQgBABAAAAQAAABgBAAQAAAAAAABQAAAAAAABIAHAQIADACQAAAAAAABQAAAAAAAAQAAAAA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");
	this.shape_18.setTransform(-154.2,28.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC9966").s().p("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");
	this.shape_19.setTransform(-104.4,13.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("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IAEADIAGADIACADIABABIACABIAEAFQADADABACIABACIACAFQAEAQgIAPQgMAHgOADIgIAAgAq5jkIABAFQAOAeAOgLQAVgCgHgUQgKgdgLAAQgKAAgMAbgArLjyIgFAAQAIgFAFgIIADgDIAAAFIABAFQAAADgCACIAAAKQgBgGgJgDgArxj5QgEgDgEgBIgBgBIgCgBIgCgCQgFgFgEgGQgCgDAAgEQgCgWANgOIABgCIAAAAQAHgLAJgGQASgGAOgMIAGgHIADgEQAAASAEAQIAAADQABADAAADIABABIAAABIAAABIAAACIAAABQgCAGABAJQABAMgDAMQgGAMgLAKIgBAAIgEACIgRAAQgEgCgFAAgArKlaQgiAVgYAfIABACQAZAYAWAQIABgEQAZglgMg2IgEABgAqzlXQABgHgCgHQAIABAGgFQAGgCAFgDIACgDQAEgDABgEIAFgFIAJgIQADgDACgFIACgDQAEgGACgHIAAgBQAFgLgBgNIgBgJQgEgOgMgJIgYAAQgMADgHALIgCADIAAACQAAADgCADIAAAAIgBACIAAABQAAgNgBgPQAAgFANABQAYgGAPAIQAPAJAGAWIABAFQgPA6gwAbQgDACAAAHIgBAEIgDABIAAgGgAqymmQABgPAGgPQAGgIAKgDIABAAIAQAAIABAAIABABIAAAAIAMAOIAAABIAAAEIgBASIgBADIAAABIgBADIAAAAIgBABIAAABIAAABIgBACQgCAGgEAFIAAABIgBAAIAAABIAAABIgOAPIgHAAIgHACIgBAAIgEAAIgJADIAAgrgAqvm0IAAAEQgLA2AjgLQALgNADgRQAFgmgNAAQgKAAgUAVgA2rpOQgDgEAAgFIAAgGIACgDIABgCIACAAIAFgCIAAAAQAcASAeAQIACADIABAGIgCAGQgjAAgfgbgAl4sKIgCgDIgJgPIgBgBQgCgFgDgEIgFgJQgEgLgHgHQgGgHABgIIAAgDIAGABQANAEAOgCIAJACIAAABIACABIAAAAIAEABIACAAIABACQAUAMgCAYIABAEIgFAKIgDAEQAPhGhHANIABAFQARAxAjAJIAAAAIgBACIgCAAIgFABIgJAFIgEgFgAnNuhQgFgGgEgGQgDgIgFgHIgBgBIgBgCIgDgLIgBgCIgBgJIgDgOQgDgKAAgJQAAgQADgPIABgDQAAgFAGgEQAGgEAHgCQAMgBAMAAIAEAAIAEgBIABABIACAAIABABIAAAAIAIAGQAFAEADAGIAGARIAEANIADAQQABALgBAKIgDARIgBABIgBADIgIAMIgBABIgKAOIgEABIgCACQgFAAgCAEQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgEADgCAGIgOgPgAnUwkQgKAHgFANIgBACQgCBMApAfIAAgCQAfgLABgqQAAAAABAAQAAAAAAAAQABAAABABQAAAAABABIgBgGIAHAGQgJgJAAgBQADgegLgQQgNgVgfgBQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_20.setTransform(-5.5,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.US, new cjs.Rectangle(-239.1,-139.9,466.1,293), null);


(lib.textus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// vert2
	this.instance = new lib.VertLine("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(75.8,152.9,1,0.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({alpha:1},5).wait(41));

	// vert1
	this.instance_1 = new lib.VertLine("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57.4,162.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({alpha:1},5).wait(41));

	// horz
	this.instance_2 = new lib.HorizontalLine("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,171);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({alpha:1},5).wait(41));

	// period
	this.instance_3 = new lib.yousent2still();
	this.instance_3.parent = this;
	this.instance_3.setTransform(145.6,158.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({alpha:1},5).wait(5).to({alpha:0},0).wait(56));

	// us
	this.instance_4 = new lib.ussentstill();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,161);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.75,scaleY:1.75,y:159},9).to({scaleX:1,scaleY:1,y:161},5).to({x:94},5).wait(25).to({alpha:0},0).to({alpha:1},5).to({_off:true},1).wait(19).to({_off:false,x:116,y:149},0).wait(15).to({alpha:0},0).to({alpha:1},5).wait(11));

	// chose
	this.instance_5 = new lib.ussent2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-7,160);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({alpha:1},5).wait(15).to({alpha:0},0).to({alpha:1},5).to({_off:true},1).wait(14).to({_off:false,x:8,y:149},0).wait(20).to({alpha:0},0).to({alpha:1},5).wait(11));

	// you
	this.instance_6 = new lib.ussentyoustill();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-117,163);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({alpha:1},5).wait(20).to({alpha:0},0).to({alpha:1},5).to({_off:true},1).wait(9).to({_off:false,x:-106,y:151},0).wait(25).to({alpha:0},0).to({alpha:1},5).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.2,127.7,68.5,66.7);


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
		var vo = createjs.Sound.play('VO15');
		
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
		
		 window.open ("pronoun_Scene16.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pronoun_Scene14.html","_self");
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
(lib.pronoun_Scene15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance_4 = new lib.textus();
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,198);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// main
	this.instance_5 = new lib.pronounheader();
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,43);

	this.instance_6 = new lib.US();
	this.instance_6.parent = this;
	this.instance_6.setTransform(280.2,200,0.881,0.881);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// btn
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'F0910E92CA2D5A489B2EE7690910B7B0',
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
		{src:"sounds/VO15.mp3", id:"VO15"},
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
an.compositions['F0910E92CA2D5A489B2EE7690910B7B0'] = {
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