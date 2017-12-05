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


(lib.TwiggsHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAApQgFgIAFgJIABgDQAGAAABAGQACAGAFAAQAegTgWAAIAEgGIAEgBIABABQAKAHAKAJIgTAXQgFACgGAAQgMAAgKgIgAgwgSQgCgDgBgEIADgIIAEgBQAAAPAIgCQAdgMgOgOIAFgBIANANIgFAPQgBAEgEADIgMABQgMAAgLgGgAgkgtIACgBIAIgBQgGAFgCAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAg");
	this.shape.setTransform(13.5,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAiQgBgFgFAAIAGgHIABAAQAJgFAJgCIgEAGQAWAAgeAUIAAAAQgEAAgDgHgAgjgaIgFAAQAEgHAGgGIAFAAIgDABQgBAHALgJIAFAAQANAPgcALIgCAAQgFAAAAgMg");
	this.shape_1.setTransform(12.7,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAgAmQgFgJgHgEQgHgDgHABIAHgIIABAAQAJgEAJgCQgDACgIACQAUAWgBALQgCAAgGgIgAgTgUQgFgBgPgSIAGgGIAEAAIgCABIAAAAQAQAZgDAAIgBgBg");
	this.shape_2.setTransform(13,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAqQgFgIAFgJIABgDQAHAAAHADQAHAEAFAJQAGAIACAAQABgMgUgVQAJgCACgCIAEgBIABABQAKAHAKAJIgRAVIAAAAIgCACQgFACgGAAQgMAAgKgIgAgwgRQgCgDgBgEIADgIIAEgHIAAAAIAAAAQAPASAFABQAFACgRgaIAAAAIACgBIADgBQAIgFAHAEIANANIgFAPQgBAEgEADIgMABQgMAAgLgGg");
	this.shape_3.setTransform(13.5,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAqQgFgIAFgJIABgDQAHAAAHADQAHAEAFAJQAGAIACAAIgCACQgFACgGAAQgMAAgKgIgAAjAuQABgMgUgVQAJgCACgCIAEgBIABABQAKAHAKAJIgRAVgAgwgRQgCgDgBgEIADgIIAEgHIAAAAIAAAAQAPASAFABQAFACgRgaIAAAAIACgBIADgBQAIgFAHAEIANANIgFAPQgBAEgEADIgMABQgMAAgLgGg");
	this.shape_4.setTransform(13.5,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASApIgEgDQgGgFAGgIIAKgIIAMACQAFAGgBAJIgJAGQgEACgDAAIgGgBgAghgOIgFgEQgDgDADgGQAEgFAHgIIAKgBIACAAIAHAGQgCAQgEACQgFAGgGAAQgEAAgEgDg");
	this.shape_5.setTransform(11.5,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAEAzIAAgCIgDgNIAEADQAGADAGgEIAKgGQAAgIgEgGIgNgCIAAAAQAAgMAdAAQAJAAAAAEIgCACIgJgBQADAFAAAEIAAAEIAHAHIgSAXQgGABgGAAQgHAAgGgCgAgugKIgBgFQALAHAIgLQAEgBACgQIgHgGIgBAAIAAAAIgKAAIAAAAQAAgKAYAAQALAAgEAFIACADQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIABAFQAAAEgBACIABABIgFAPQAAAEgFADIgMABQgIAAgIgDgAgTgpIAAAAIAAAAg");
	this.shape_6.setTransform(12.9,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape},{t:this.shape_1}]},2).to({state:[{t:this.shape_4},{t:this.shape_2}]},5).to({state:[{t:this.shape},{t:this.shape_1}]},4).to({state:[{t:this.shape_6},{t:this.shape_5}]},4).to({state:[{t:this.shape},{t:this.shape_1}]},25).wait(11));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AABA9IgBgBQgGgIAAgPQgBgPAGgGIACgCIABgBIACAAQAFAAABAFQADAHAEAAQAegUgWAAIAEgFIABAAIAQgBIACABQAPAFACAMQgPArgmABIgCAAIgJAAgAg6gOIgBAFQgFgFAAgIIADgBQAEgCACgGQACgFADgDIAEgCIAAgBIAFAAQAAAOAHgCQAdgLgOgPIgCgCIgDADQgLAJABgIIADgBIAKgDIABgBQARgEAGAHQAHAJgJASQgJATgRAGQgFADgGAAQgMAAgKgNg");
	this.shape_7.setTransform(13.3,19.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBB97").s().p("AglBiIgNgEIgBAAIAAAAIgFgCIgJgFQgIgCgGgFIgEgDQgJgCgJgJIgHgEIgGgFIgCgCIgGgHQgDgFgCgHQgDgJgBgMIABAAIgBgBIAHgbIABgFIAIgYQAGgNAGgIIAHgIQAJgMAHgFQALgHALADQABALgJAMIAGAAQAAAJAFAFQAAAQAYgFQAhgGACAFQgEAJgNADIgBAAIgBAAQgJACgOgBQgDAMAJAEIARAHQgBAKAEAHIAAACIADAIIAEgDQAFAFAMACQARACAMgFQAJgBAIgGQAEAHALANQAKAPgKAHQABACAKACQAIADAAAFQgJAJgKgBQgJgPgQADQABAIADAHIACAEIgGAHQABgFgBgFQgNAWgoABIgDAAQgQAAgNgDgAgxAOIgBAAIABADQAGAKANAPQAKAOgGAOQAKADADgKQAAgMADgEIgPgVQgJgMgNAAIgCAAgABHBbQgCgDgBgGQAYAAAFgIQAHAEAAAMIgPAFQgKgBgIgDgABMATQgIgIAAgIQAOgSgBgRQgEgJgHgFQgHgFgLgDQgXgFgQAKQAAgGgFgFQAZgXgFgRQARAaAYARIgCAGQADADARACQATAHAPgGIALgBIgCAVQgNAcgiAaQgCgFgFgFg");
	this.shape_8.setTransform(13,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiLCcQgtgTgLgPQgLgPAAgUQgCgkAPgcIAAAAQANglAkgRQAXgKA+gJQAQgcAFgFQgOgCgYAFQgVAGgJgFIAFgDQARgKAiAAQArgBAFAWQgLALgJgOQgNAhAhAeQAfAfAngIQgFAFgGACQgPAHgTgIIgNgHIgBAAIgEgDQgXgQgRgbQAFASgZAVQAEAGAAAGQARgKAXAFQALACAGAGQAHAFADAJQACARgOASQAAAJAIAIQAFAFACAFIABAFQAlgEAcgdIADgDIAMgQQABgUgJAAQAbgngdgmQgcgngxARQgJgYgigKQgjgKgaAMQAFgrAtACQArADASAfQgBgogogIQgkgHgZASQAOgVAVgEQASgCAWAJQAqARACAnIAAAKIAEACQAoAWAPARQAcAfgMArQAmgIAjAZQAdATgIAYQgDAHgGAJIgBAAIAAAAQAFgjgVgSQgTgRgdAGQAMAJAZAQQAUAQADAXIgDACQgRAGgEAAQAJAZgBAKIgIAAIgMAAQASgUgjglIgDgCIAEANIAIAUQAEAUgQADIgEAAIABgFIABgLQgBgSgNgeIg6AhQgeAYAYAjQgaAOgYgLQgKgGgFgKIgCgEQgDgHgBgIQAPgDAIAPQAKAAAKgIQAAgGgIgCQgKgCgCgCQALgIgKgOQgKgOgFgGIgBgCQgGAGgJADQgNAEgRgCQgLgBgGgFQgEgDgDgEQgEgIABgKIgRgHQgJgEADgMQAOABAJgCIABAAQANgDAGgJQgDgFghAGQgZAEABgQIAAgFQAPASASgIQARgGAKgSQAJgSgHgJQgGgIgSAFIgBABIgKADIgDABQAAAIAKgJIADgDIACACQAOAPgdALQgHACAAgOIgEAAIgFADQgDADgCAFQgCAGgDACIgEABIgFAAQAJgMgBgLQgLgDgLAGQgMAHgLASQgGAHgGAOIgIAXIgCAGIgGAcIAAAAQAAAMADAKQADAHADAFIAFAGIADADIAFAFIAHAGIAAgCQAJAJAKACIAEADQAGAEAHADIAKAEIAFADIAAAAIABAAIANAEQAPADARAAQApgCANgVQABAFgBAEQgFASglACIgIAAQghAAgpgRgAAECUQAAAFADAEQAHADALAAIAPgEQAAgMgIgEQgEAIgYAAgAB8AsQAIADARAbQAIANAJACQAEABAEAAIAGgCQgWgtgaAAIgIABgAg4AgIgCAAIgBABIgDACQgGAGABAPQABAPAGAIIABABIALAAQAngBANgrQgBgMgOgGIgCgBIgRABIgBAAIgEAGQAXAAgeAUQgFAAgDgHQgBgFgFAAIAAAAgAi/A5IABgCIAAgCIgBAEgAgchwQAaAIAKgCQgKgTgcgHQgfgIgOAVIAJAAQAPAAAXAHgAhbCHQAHgNgKgOQgNgPgGgKIAAgDQAPgBAIANIAPAUQgCAEAAANQgCAHgHAAIgFgBg");
	this.shape_9.setTransform(19.4,17.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("ABXCVQAPgDgEgUIgHgUIAAgDIgCgIQAjAlgSAUIANAAQgEAEgFAAQgQAAgHgHgABSCKIAAAAIADgFIgBALIgCgGgAgeBwQAhgaANgdIACgVIgLAAQAGgCAFgFQgmAIggggQghgdANghQAJAOALgLQgFgWgqABQgiAAgSAKQgEgDAAgHIAAgBIAAgDIAAAAIAAgDQABgRAIgTQAOglAbAAIAJAAQgWAEgOAVQAZgSAkAHQApAIABAoQgSgfgrgDQgugCgEArQAZgMAjAKQAjAKAJAYQAwgRAdAnQAcAlgbAoQAKAAgCAUIgMAQIgCgBIgBAEQgbAdglAEIgBgFgACOBtQgCgXgVgQQgZgPgMgKQAdgGAUARQAUASgFAjIgHACIADgCgACcBdIAAABQAAALgJAEQAGgJADgHgAB1BpIAAABQgJgCgIgNQgSgbgIgDQAfgIAZA0IgGACIgHgCgAguAeIACgFIAEADIABAAIANAHQgRgBgDgEgAgMhSIAAgKIADAKIAAABIABABIAAAAIgEgCgAhOhfQgdgJgRACQAOgVAeAIQAcAHAMATIgGAAQgLAAgVgGg");
	this.shape_10.setTransform(24.4,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,41.5,34.7);


(lib.TwiggsFeet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBB97").s().p("AArB9IgDgIQAWgVAAgjQAAgigYgLIgFgCIAFgoQAFAAAJACIABABQADABgEgLIgMgQQgBgFABgEQADgMAKgFIACgBQASgFALAMQADALgHAIQgHAJAAAHIABALIAHADQAEABADgCIABgCIACgOQAAgLAKgBIADAAQANANgRAXQAGAEAGgPQAHgPAJARIAAABIAAAFIAAABQgGACAAAIIAEAHQAEAAgBgFQAAgGAKAAQADAMgPAYQgBAcgSASQADALAUACQAYAEAFAEQgFAQgWAPQgeARgiAJIgRADgAhsBTIgCgDQAegnghgdIgHgHIgBgDIgDAAIgQgOIAAgCIgDgBIgOgPIgCgIQAAgKAFgJQAGgJAMgIIAKgGQAvgOAUgLIgEgXQgCgWAKgDQAHABARAIQADAFgBAMQgBAHAHADIACgEQgBANgHAGQgEgEgGgDQAOAWgLAkIAAAAIAAAAIgLArIgBABIAAACIAAABIAAAAIAAABIgCANIADACIAAABIAAACQAEACAUAEIANADIAAAAIAAAAIALgCIAaAAQAOADACAJIAFATIABABIgBAEIgSAAIACgCIgKADIgBABIAAAAIg4AVQgWAJgTAAQgSAAgOgHgAiHhUIgCgEIACAAQADgBACgEQgIAAgBgKIAAgDQACgGADgFQAOAKAKAOQgMAIgLADIgBAAIgBgCgAh7h5QAEgIAJgEQgEAOAMAJQAGADAFABQAFAAADgDQgWgBACgPQAGgQAEgFQAGgDAJAAIACAAQgBAPALAZQgEADgSAFIgPAEQgSgVgCgDg");
	this.shape.setTransform(17.1,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiCXQgLgRABAAIAAgSIAAgBIACgCIABgBQAWgEAAgeIAAgEIAAgJQgJAFgYAAIAAABIgXAAIAAACQAAAEgCACIgEACIgCACIgEAEQhNAYgfgZQAXgmgWggQgEgGgtgnQAJgnAMgNQAHABAIgCIABAAQAMgCALgJQgKgOgOgKIAAAAQgEAEAAAIIAAACQABAKAHAAQgBAEgDABIgCAAIgFgCQgIgFAAgGQAWgwAxgEQAAADgMACIgCACQgEAFgGAQQgDAPAXACQgEADgFgBQgEAAgGgEQgNgIAEgPQgJAEgDAIQABADATAVIAOgEQASgEAEgDQgKgaABgOIABgFQABgFADgDQBEAAgTAoIgCAEQgGgCABgIQABgLgDgGQgSgIgGgBQgLAEADAVIAEAYQgUALgvAOIgLAFQgMAJgGAIQgFAJABALIAAAEIACADIAOAPIADADIAQAOIADADIAIAHQAhAdgeAoIgBABIACABQAeAQAsgRIA3gWIABAAIAAAAIALgEIgCADIARAAIACgEIgCgCIgEgTQgCgJgPgCIgZAAIgLABIgBAAIgNgDQgQgEgHgEIgEgDIACgNIAAAAIAAAAIABgCIAAgDIALgqIABgBQAKgjgNgWQAGACADAFQANAOgHAdIgPBAQAFAQAcgDIAKgBIASgMIAAgLIAGgiIgBgCIACACIAFAAQAAgDgDgFQgHgKAEgHQAhglAmAlIAcAfQAIABAAAIIABABIAHAIQAGACACAGIAAABIAEAFQgCALgKAUQAYAIAJAiIADANIAAAKQABAQgDAMIgCAHQgKgBgKABIgrAPQgCACgfALQgMAEgJAAQgOAAgGgLgAAhgZIgFAoIAFABQAZALAAAiQAAAkgWAVIACAIIAKAcIAQgDQAigJAegQQAXgQAEgQQgFgEgYgDQgUgDgCgLQASgSABgcQAOgYgDgMQgKABABAFQAAAFgEAAIgDgGQAAgIAFgDIAAgBIABgFIgBAAQgJgSgGAPQgHAQgGgFQARgWgMgOIgEAAQgJABgBALIgCAOIAAACQgDACgFgBIgHgDIgBgLQAAgHAHgIQAHgJgCgLQgLgMgSAGIgCAAQgLAFgDAMQAAAEABAFIAMAQQADALgCgBIgCAAQgHgCgFAAIgCAAg");
	this.shape_1.setTransform(17.6,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TwiggsFeet, new cjs.Rectangle(0,0,35.1,32.4), null);


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


(lib.WhiteSheet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggOAQLMAAAggVMBAaAAAIAAP3IADAAIAADcIgDAAIAANCg");
	this.shape.setTransform(206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WhiteSheet, new cjs.Rectangle(0,0,412.6,207), null);


(lib.PresentProgressiveDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAGAAAEADQAFAFgBAFQABAGgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(308.9,99);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgEAFABQADgBAHAGQACADAKACIANABQAJAAAHgCQAMgEAAgHQgBgQgWgGIgLgCQgQgEgGgEQgKgGAAgNQAAgZAYgKQAGgEAPgEIAWgHQAFgCAFgBQAFABAEADQADADAAAFIABAKIACALQAAAFgEADQgCADgGABQgGgBgDgEQgCgDgBgJIgbAIQgRAHAAALIAGACQAaAEANAJQAUALgBAYQAAATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_1.setTransform(299.7,93);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgEAFABQADgBAHAGQACADAKACIANABQAJAAAHgCQAMgEAAgHQgBgQgWgGIgLgCQgQgEgGgEQgKgGAAgNQAAgZAYgKQAGgEAPgEIAWgHQAFgCAGgBQAEABAEADQADADAAAFIABAKIACALQAAAFgEADQgCADgGABQgGgBgDgEQgCgDgBgJIgbAIQgRAHAAALIAGACQAaAEANAJQATALAAAYQAAATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_2.setTransform(288,93);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoAyQgRgOgBgbQABgdAPgUQAQgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAEALAAQAJAAAKgCQAPgEADgGQAEgHAFAAQAEAAAEADQACAEAAADQAAANgUAKQgSAIgSAAQgZAAgRgOgAgXgeQgKALgFAVIAkgQQAUgLAKgHQgLgKgRAAQgOAAgJAMg");
	this.shape_3.setTransform(276.1,93.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQAMAAAAAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQAAAPgLAAQgLAAABgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgMAAQgKAAAAgMg");
	this.shape_4.setTransform(263.9,93.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgoBbQgPgDAAgJQAAgLAKAAIAOACQAKACAMAAQAWAAAIgWQAGgOAAgeQgGAMgJAGQgJAGgKAAQgVAAgNgPQgOgOAAgWQAAggASgTQATgUAgAAQAKAAAIADQAHADAEAFQANAAAAAOQAAAIgDAOIgDAXIgDAmQAAAXgFAPQgFATgLAJQgOALgaAAQgQAAgKgCgAgVg6QgLAOAAAWQAAAQAGAIQAHAJANAAQALAAALgNQAKgMABgNQADgMADgbIgKgGQgFgBgGAAQgVAAgMAPg");
	this.shape_5.setTransform(251.2,96.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAJAHAJAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_6.setTransform(238.5,93.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAEAIABAOIAAAIQgBAPgMAAQgJAAgBgMIAAgIIAAgKQgTACgKAJQgKAHgHAQIAAA/QAAAMgLAAQgKAAAAgMg");
	this.shape_7.setTransform(227,93.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgtBfQgDgDAAgFIAAgvIAAguIgBguIgCgYQAAgJADgGQAEgGAGAAQAFAAADADQADADAAAFIgBADIAAAIQAKgHAJgEQAJgEAIAAQAYABALAVQAJARAAAcQAAAYgNAQQgPASgYgBQgKABgOgEIgBA4QAAAFgDADQgEADgFAAQgEAAgEgDgAgLg9QgFADgKAJQACAbAAAcQANAFALAAQAOAAAJgLQAGgJAAgOQAAgWgFgLQgFgKgLAAQgJAAgKAFg");
	this.shape_8.setTransform(214.6,96.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_9.setTransform(194.9,93.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgVIABgbIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAbIABAVIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_10.setTransform(185.2,90.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgEAFABQADgBAHAGQACADAKACIANABQAJAAAHgCQAMgEAAgHQgBgQgWgGIgLgCQgQgEgGgEQgKgGAAgNQAAgZAYgKQAGgEAPgEIAWgHQAFgCAFgBQAFABAEADQADADAAAFIABAKIACALQAAAFgEADQgCADgGABQgGgBgDgEQgCgDAAgJIgbAIQgSAHAAALIAGACQAaAEANAJQAUALgBAYQAAATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_11.setTransform(168.3,93);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgVIABgbIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAbIABAVIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(159.6,90.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_13.setTransform(406.6,57.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQAAAZgNASQgQAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_14.setTransform(393.6,58.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_15.setTransform(384.3,55.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_16.setTransform(375,56.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghAzQgQgPAAgZQAAgXAPgZQARgcAWAAQALAAAPAGQASAGAAAKQgBAEgDAEQgDADgEABQgDAAgCgCIgGgFQgGgFgQAAQgLAAgMAVQgKAUAAANQAAAQAKAIQAKAJAPAAQAGAAAJgEIANgHIAFgCQAEAAADADQAEAEAAAEQgBAJgRAIQgQAHgKAAQgYAAgQgPg");
	this.shape_17.setTransform(363.3,58.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAOIgBAaQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_18.setTransform(350.9,58.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnAyQgTgOABgaQAAgeAOgUQAQgXAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAJAFAMgBQAJAAAKgCQAOgEAEgGQAFgHAEAAQAEAAADADQADAEABADQAAAOgWAJQgRAIgSAAQgZAAgQgOgAgYgfQgJAMgEAVIAkgQQATgLAJgHQgKgKgRAAQgOAAgKALg");
	this.shape_19.setTransform(331.3,58.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAHgHAAQgEAAgEgEQgEgDAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgDQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDAEgFgBQgJAAgCgJg");
	this.shape_20.setTransform(317.7,54.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_21.setTransform(304.9,56.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgoBbQgPgDAAgJQAAgLAKAAIAOACQAKACAMAAQAWAAAIgWQAGgOAAgeQgGAMgJAGQgJAGgKAAQgVAAgNgPQgOgOAAgWQAAggASgTQATgUAgAAQAKAAAIADQAHACAEAGQANAAAAAOQAAAIgDAOIgDAXIgDAmQAAAYgFAOQgFATgLAJQgOALgaAAQgQAAgKgCgAgVg6QgLAOAAAWQAAARAGAHQAHAJANAAQALAAALgNQAKgNABgMQADgMADgbIgKgGQgFgBgGAAQgVAAgMAPg");
	this.shape_22.setTransform(285.6,61.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_23.setTransform(273.4,57.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_24.setTransform(263.7,55.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_25.setTransform(254.4,56.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAOIgBAaQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_26.setTransform(242.7,58.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghAzQgQgPAAgZQAAgXAPgZQARgcAVAAQAMAAAPAGQARAGABAKQAAAEgDAEQgDADgFABQgEAAgCgCIgEgFQgIgFgQAAQgKAAgMAVQgLAUAAANQAAAQALAIQAKAJAOAAQAHAAAJgEIANgHIAFgCQAEAAAEADQACAEAAAEQAAAJgSAIQgPAHgLAAQgXAAgQgPg");
	this.shape_27.setTransform(230.4,58.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_28.setTransform(221,55.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgpBQQgQgRAAgZQAAggAQgSQAQgSAaAAQAOAAAHAEIALAIQACgyACgRQACgKAIAAQAMAAAAALQgBARgFA3IAAAiQAAAnADAUIAAACQAAAFgDADQgDADgFAAQgHAAgEgKQgIAGgJADQgJADgJAAQgYAAgQgQgAgbACQgKAMABAXQAAAPAKALQALALAOAAQAJAAAHgEQAEgCAJgHIADgEIAAgUIAAgOIAAgOQgEgJgIgEQgHgFgLAAQgSAAgKALg");
	this.shape_29.setTransform(210.3,54.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_30.setTransform(197.3,57.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_31.setTransform(187.6,55.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgjBYQgEAFgFAAQgEAAgDgDQgEgDAAgFIAAgJIAAgJIAAglIgBgkIAAggIAAghQAAgHADgGQAFgHAHAAQAIAAAAAKIAAAFIgBAFIgBAaIAAAeQAKgHAKgEQAJgDAHAAQAZAAAQATQAPARAAAbQAAAagRATQgSATgZAAQgRAAgPgHgAgSgFIgRALIAAAUIAAASIAAAUIAQAGQAHACAJAAQAQAAALgMQALgLAAgSQAAgSgJgLQgJgMgQAAQgJAAgKAFg");
	this.shape_32.setTransform(170,54.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQAMAAAAAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQAAAPgLAAQgLAAABgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgMAAQgKAAAAgMg");
	this.shape_33.setTransform(157.2,58.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgnAyQgTgOABgaQgBgeAPgUQARgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgCQANgEAFgGQAEgHAEAAQAEAAADADQAEAEAAADQAAAOgWAJQgRAIgRAAQgaAAgQgOgAgXgfQgKAMgFAVIAkgQQAVgLAIgHQgJgKgSAAQgOAAgJALg");
	this.shape_34.setTransform(144.7,58.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgNA2IgRgwIgVg1IgBgEQAAgGADgDQAEgDAFAAQAHAAADAHIAeBRQAHgTAOgjIAKgaQAEgIAGAAQAFAAADAEQAEADAAAFQAAAEgTAuIgYA2QAAALgKAAQgIAAgFgKg");
	this.shape_35.setTransform(132.3,58);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnAyQgTgOABgaQgBgeAPgUQARgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgCQANgEAFgGQAEgHAEAAQAEAAADADQAEAEAAADQAAAOgWAJQgRAIgRAAQgaAAgQgOgAgXgfQgKAMgEAVIAjgQQAVgLAIgHQgJgKgSAAQgOAAgJALg");
	this.shape_36.setTransform(112.8,58.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAHgHAAQgEAAgEgEQgEgDAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgDQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDAEgFgBQgJAAgCgJg");
	this.shape_37.setTransform(99.2,54.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_38.setTransform(86.4,56.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgDAFAAQAEAAAFAFQADACAKACIANACQAJAAAHgCQAMgEgBgHQABgQgXgGIgLgCQgPgEgHgFQgJgFAAgNQAAgZAWgKQAIgDAOgFIAWgHQAFgCAGgBQAFABADADQADADAAAFIABALIACAKQAAAFgDADQgDADgFAAQgHAAgCgEQgCgDgBgKIgbAJQgTAHAAALIAHACQAaAFAOAIQASALABAYQAAATgRAKQgOAHgUABQgPAAgOgGg");
	this.shape_39.setTransform(67.5,57.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_40.setTransform(58.8,55.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_41.setTransform(440.1,19.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_42.setTransform(424,20.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AhOBbQgDgDgBgFIABgPIABgPIAAgWIABgWIgBgWIAAgXIgBgWIgCgWQABgGAEgEQAEgFAHAAQAFAAAKAOQAdAsAXAdQAbAhAhAfIAAgPIAAgOQAAgzgEgeIgDgMQgDgIABgFQAAgOAMAAQAUAAABBNIgBAlIgBAnIgCATQgBAMgLAAQgHAAgIgJQgwgtg8hUIgBAbIAAAaIAAAdIABAdQgBAggMAAQgGAAgEgFg");
	this.shape_43.setTransform(406.2,19.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_44.setTransform(389.3,19.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgIBWQgDgDAAgGIAAgFIABgFIgBgRIgBgSQAAgQgCgeIgEgvIgKAAQgaAAgOgDQgKgDAAgJQAAgFADgEQAEgEAFABIATACIATABIAVAAIAVAAIAbABIAaABQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAIgagBIgbgBIgIAAQgBAQADAkQADAhAAATIABAMIABANQgBAIgCAFQgDAIgHAAQgDAAgFgDg");
	this.shape_45.setTransform(374.3,19.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_46.setTransform(350.8,19.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_47.setTransform(335.9,19.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgyBWQgEgDAAgFQAAgGAEgDQACgDAGAAIAYgDQACgKAAgMIgBgTIgBgUQABgaADgpIgQABIgPAAQgFAAgEgDQgDgEAAgFQABgLAKAAIAkgBQAWAAAkAEQAKACAAALQAAAGgFADQgDACgEABIgTgCIgTgDQgDAiAAAfIAAAUIABAUIgBAUIAlAAQAFAAADAEQAEACAAAGQAAAFgEAEQgDADgFAAIgTAAIgUAAIgWACIgXADQgGgBgCgDg");
	this.shape_48.setTransform(320.9,19.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_49.setTransform(306.1,20.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_50.setTransform(289.4,20.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_51.setTransform(273.8,19.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_52.setTransform(258.7,19.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("Ag8BQQgOgQAAghQAAgeAOgfQAPggAWgUQAPgNAQAAQALAAARAHQAVAIAAAKQAAAFgDAEQgEAEgFAAQgCAAgFgDQgSgLgMAAQgIAAgJAJIgOARQgbAkAAAoQAAAWAGAKQAIAJAUAAQAUAAAPgNQAQgOAHgaQghABgWALIgFABQgFAAgEgDQgDgEAAgFQAAgHAGgDQAZgOA+gBQAFAAADAEQAEACAAAFQAAAIgHADQgHAkgXAVQgYAWgeAAQgdAAgPgQg");
	this.shape_53.setTransform(242.9,19.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("Ag7BJQgYgVAAgiQAAgnAYghQAbglAnAAQAmAAAUARQATASAAAnQAAAogWAgQgaAlgnAAQggAAgYgTgAgpgnQgSAbAAAeQAAAXARAOQAQANAXAAQAcAAASgcQARgaAAgfQAAgcgMgLQgNgLgcAAQgcAAgUAcg");
	this.shape_54.setTransform(225.1,19.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_55.setTransform(208.1,19.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgxBaQgDgDAAgFIAAgjQAAgQACgfIADgwIAAgQQAAgMABgFQADgLAJACIAKgCIARAAQAVAAASAOQAVAQAAAXQAAAdgWAQQgUAPgaAAIgPgBIgBA+QAAAFgDADQgDADgEAAQgFAAgDgDgAgThGIgHAAIAAAWIgCAvIANABQASAAAOgJQAPgMAAgSQAAgNgOgKQgNgJgOAAIgKABg");
	this.shape_56.setTransform(194.3,19.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgIBWQgDgDAAgGIAAgFIABgFIgBgRIgBgSQAAgQgCgeIgEgvIgKAAQgaAAgOgDQgKgDAAgJQAAgFADgEQAEgEAFABIATACIATABIAVAAIAVAAIAbABIAaABQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAIgagBIgbgBIgJAAQAAAQADAkQADAhAAATIABAMIABANQgBAIgCAFQgDAIgHAAQgDAAgFgDg");
	this.shape_57.setTransform(173.6,19.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AhOBbQgDgDAAgFIABgPIAAgPIABgWIAAgWIAAgWIgBgXIgBgWIgCgWQAAgGAFgEQAFgFAFAAQAHAAAJAOQAdAsAXAdQAbAhAhAfIAAgPIAAgOQAAgzgEgeIgDgMQgDgIAAgFQAAgOANAAQAVAAgBBNIAAAlIAAAnIgCATQgCAMgLAAQgHAAgIgJQgwgtg9hUIAAAbIgBAaIABAdIAAAdQAAAggMAAQgGAAgEgFg");
	this.shape_58.setTransform(155,19.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_59.setTransform(138.1,19.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_60.setTransform(122.1,20.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_61.setTransform(106.5,19.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_62.setTransform(91.3,19.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AgxBaQgDgDAAgFIAAgjQAAgQACgfIADgwIAAgQQAAgMABgFQADgLAJACIAKgCIARAAQAVAAASAOQAVAQAAAXQAAAdgWAQQgUAPgaAAIgPgBIgBA+QAAAFgDADQgDADgEAAQgFAAgDgDgAgThGIgHAAIAAAWIgCAvIANABQASAAAOgJQAPgMAAgSQAAgNgOgKQgNgJgOAAIgKABg");
	this.shape_63.setTransform(77.5,19.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgoAyQgSgOAAgaQAAgeAPgVQAQgWAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAJAFAMgBQAJAAAKgDQAOgDAEgGQAEgHAFAAQAEAAADAEQADADAAADQABAOgWAJQgSAIgRAAQgZAAgRgOgAgYgfQgJALgEAWIAkgQQATgLAJgHQgKgKgRAAQgOAAgKALg");
	this.shape_64.setTransform(57.6,22.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_65.setTransform(44,19.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHBWQgEgDAAgGIAAgFIABgFIgBgRIgBgSQAAgQgCgeIgDgvIgLAAQgaAAgOgDQgKgDAAgJQAAgFADgEQADgEAGABIATACIATABIAVAAIAUAAIAbABIAbABQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAIgbgBIgbgBIgIAAQAAAQAEAkQACAhAAATIABAMIAAANQAAAIgCAFQgDAIgHAAQgDAAgEgDg");
	this.shape_66.setTransform(29.8,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PresentProgressiveDef, new cjs.Rectangle(18.5,0,430.8,108.4), null);


(lib.FormulaPresentProgressive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(526.8,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AguBTQgLgJAAgjIABgPIAAgSIgBgFQAAgDACgCIACgvIgBgLIgBgMQAAgNALAAQAFABADADQANgEALgCQAMgBAJAAQAaAAAPAGQAIACAAAIQAAAFgDADQgDADgFAAIgDAAQgSgGgRAAQgJABgKACIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAXADAFQADADAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJABQgKACghAAQghABgJgJg");
	this.shape_1.setTransform(517.5,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgtBUQgHgEAAgMIACgkQADgwAAg8QAAgEADgEQADgDAFAAQAEAAADADQADAEAAAEQAAA9gCAxIgCAQIgBAQQAdAAApgNIAEgBQAEAAAEAEQACADAAAEQAAAHgHADQgMAGgaAFQgXAEgPAAQgLAAgEgEg");
	this.shape_2.setTransform(504.5,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_3.setTransform(492.6,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgvBPQgDgDAAgFQAAgEADgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgCAfgBAbIABATIAAATIAAASIAhAAQAFAAAEADQACADAAAFQAAAEgCADQgEAEgFAAIgRAAIgTAAIgTACIgWACQgFAAgDgDg");
	this.shape_4.setTransform(480.8,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgsBCQgPgRAAgWQAAgjAfgnQAZgfAZAAIAKAAIAHABQAEgFAGAAQAHAAACAKQACAJAAAMQAAAFgCADQgDAEgGAAQgHAAgDgIQgDgHgDgCQgCgBgJAAQgPABgSAXQgaAgAAAcQAAAOAJAJQAJALANAAQAKAAALgFIATgOQAGgEADAAQAFAAADADQADAEAAAEQAAAFgEAEQgcAZgcAAQgWAAgQgRg");
	this.shape_5.setTransform(468.4,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AguBPQgDgDAAgFQAAgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_6.setTransform(455.6,18.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_7.setTransform(443,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_8.setTransform(427.9,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAmA4IgIgiIgcAGIgbAFIgTAqQgEAFgFAAQgFAAgDgDQgDgDAAgFQAAgFAQghQgCgDAAgEQAAgIAKgDQAMgWAUgeQAYgpAGAAQAIAAAEAMIAGAkIAQBKIAHARQACAIAAADQAAAFgCADQgEADgEAAQgKAAgHgZgAgNAIQANgEAagEIgJgog");
	this.shape_9.setTransform(412.5,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_10.setTransform(399.1,17.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_11.setTransform(380.1,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AhHBUQgDgEAAgEIAAgOIABgNIAAgUIABgVIgBgTIAAgWIgBgVIgBgUQAAgFAEgEQAEgDAFAAQAGAAAIAMQAbAoAVAaQAZAfAfAcIAAgNIAAgOQgBgtgEgcIgCgMQgCgHAAgFQgBgMAMAAQATAAAABGIAAAjIgBAjIgBARQgCALgKAAQgGAAgIgHQgsgqg3hNIgBAYIAAAYIAAAbIABAbQAAAcgMAAQgGAAgDgDg");
	this.shape_12.setTransform(363.1,18.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AguBTQgLgJAAgjIABgPIAAgSIgBgFQAAgDACgCIACgvIgBgLIgBgMQAAgNALAAQAFABADADQANgEALgCQAMgBAJAAQAaAAAPAGQAIACAAAIQAAAFgDADQgDADgFAAIgDAAQgSgGgRAAQgJABgKACIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAXADAFQADADAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJABQgKACghAAQghABgJgJg");
	this.shape_13.setTransform(347.6,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_14.setTransform(332.9,18.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AguBTQgLgJAAgjIABgPIAAgSIgBgFQAAgDACgCIACgvIgBgLIgBgMQAAgNALAAQAFABADADQANgEALgCQAMgBAJAAQAaAAAPAGQAIACAAAIQAAAFgDADQgDADgFAAIgDAAQgSgGgRAAQgJABgKACIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAXADAFQADADAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJABQgKACghAAQghABgJgJg");
	this.shape_15.setTransform(318.6,18.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_16.setTransform(304.7,18.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_17.setTransform(292,17.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AguBTQgLgJAAgjIABgPIAAgSIgBgFQAAgDACgCIACgvIgBgLIgBgMQAAgNALAAQAFABADADQANgEALgCQAMgBAJAAQAaAAAPAGQAIACAAAIQAAAFgDADQgDADgFAAIgDAAQgSgGgRAAQgJABgKACIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAXADAFQADADAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJABQgKACghAAQghABgJgJg");
	this.shape_18.setTransform(273.1,18.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AhDBVQgCgDAAgEIABgjIACgiIgBgRIAAgSIABgZIABgZQABgFADgDQACgDAFAAQAEAAADADQADADAAAFIgBAaIgCAZIACAaIAtgHQAbgGATAAIABguQAAgIADgIQADgMAHAAQAEAAADADQAEADAAAEIgCAEQgBAFAAAJIAAAKIAAAJIgCAgIgBAfIAAAZIACAYQAAAEgDADQgDAEgFAAQgEAAgDgEQgDgDAAgEIgBgYIgBgZIABgQQgTABgaAFIgtAJIgCAbIgCAcQAAAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_19.setTransform(257.6,18.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_20.setTransform(242.4,18.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIApQgCgCAAgFIAAgMIAAgNIgSABQgRAAgBgKQAAgGAHgBQABgBAKAAIASgBIAAgMIAAgOQACgEACgCQACgCADAAQAEAAADADQACADAAAEIAAAGIAAAGIAAAMIAIAAIAHAAIAGAAQARAAAAAJQAAAEgCADQgDADgEAAIgDgBIgFAAIgKAAIgLAAIAAAZQAAAKgJAAQgEAAgDgDg");
	this.shape_21.setTransform(222,19.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AguBTQgLgJAAgjIABgPIAAgSIgBgFQAAgDACgCIACgvIgBgLIgBgMQAAgNALAAQAFABADADQANgEALgCQAMgBAJAAQAaAAAPAGQAIACAAAIQAAAFgDADQgDADgFAAIgDAAQgSgGgRAAQgJABgKACIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAXADAFQADADAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJABQgKACghAAQghABgJgJg");
	this.shape_22.setTransform(203.8,18.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_23.setTransform(189.9,18.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AAlA4IgHgiIgcAGIgcAFQgFAOgNAcQgEAFgFAAQgEAAgEgDQgEgDABgFQAAgFAQghQgCgDAAgEQAAgIAKgDQAMgWAUgeQAYgpAGAAQAIAAAEAMIAGAkIAQBKIAHARQACAIAAADQAAAFgCADQgEADgEAAQgKAAgIgZgAgNAIQANgEAagEIgJgog");
	this.shape_24.setTransform(174.6,18.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_25.setTransform(155.2,21);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_26.setTransform(143.7,21);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_27.setTransform(124,18.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AguBPQgDgDgBgFQABgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQADADABAFQgBAEgDADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_28.setTransform(110.3,18.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgMAXQgDgDAAgDQAAgDAGgPQAGgNADgGQACgFAFAAQAEAAADADQACADAAAEQAAACgPAhQgBAGgGAAQgDAAgDgDg");
	this.shape_29.setTransform(95.3,27.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("ABCBRQgDgGgDgLIgEgTQgEgRgJg6IgWBAIgGAVIgIAUQgFAHgGABQgHgBgEgGIgEgLIgDgNQgLglgIgrIgEATIgOA4QgBAKgEAUQgDAIgIAAQgFAAgDgEQgDgDAAgEQAAgTAHgaIANgqIAFgiQAFgXAFgIQAFgGAGAAQAHAAAEAIQADAKAGAdQAFAjANApQAOgpAMgtIADgQQACgJADgGQAEgIAIAAQAJAAAFASQABAGADAUQAGAvAKAjIAFASQAEAPAAADQAAAFgEADQgDADgEAAQgGAAgEgGg");
	this.shape_30.setTransform(82.1,18.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AAmA4IgIgiIgcAGIgbAFIgTAqQgDAFgGAAQgFAAgDgDQgEgDAAgFQAAgFARghQgCgDAAgEQAAgIAKgDQAMgWAUgeQAYgpAGAAQAIAAADAMIAHAkIARBKIAGARQADAIAAADQAAAFgDADQgEADgEAAQgKAAgHgZgAgNAIQANgEAZgEIgIgog");
	this.shape_31.setTransform(64,18.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AggBQQgDAFgFAAQgEAAgDgCQgDgDAAgFIAAgIIAAgIIAAgiIgBghIAAgeIAAgeQAAgGADgFQAEgHAGAAQAIAAAAAJIgBAFIAAAEIAAAYIgBAbQAKgGAIgDQAJgEAGAAQAXAAAOASQAOAQAAAYQAAAZgQARQgQARgWAAQgRAAgNgHgAgQgEIgQAJIAAATIAAARIAAARIAPAGQAHACAIAAQAOAAAKgLQAKgLAAgQQAAgQgIgLQgIgKgPAAQgIAAgJAFg");
	this.shape_32.setTransform(43.3,18);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_33.setTransform(31.6,21);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgkAvQgQgOgBgYQAAgbAOgTQAPgVAYAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgRAHIgoATQAGAJAJAFQAJAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_34.setTransform(20.2,20.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgLAxIgQgrIgUgwIgBgGQAAgEAEgDQADgDAEAAQAHAAADAHIAbBJQAHgQAMggIAJgYQAEgIAGAAQAEABAEADQADADAAAEQAAAEgSAqIgWAyQAAAKgJAAQgHAAgEgKg");
	this.shape_35.setTransform(8.7,20.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAADADQAEADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAhgPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_36.setTransform(-9.1,20.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_37.setTransform(-21.6,18);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgEQADgCAEgBQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_38.setTransform(-33.3,19.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9900FF").s().p("AgGAzQgCgDAAgFIgBgGIgBgGQAAgEAEgDQADgDAEAAQAMAAgBAWQAAAFgCADQgEADgEAAQgEAAgEgDgAgHgaQgDgEgBgEIAAgEIgBgEQAAgFAEgDQADgDAFAAQALAAAAATQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_39.setTransform(-48.4,19.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9900FF").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAAEgCACIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNANAAARQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_40.setTransform(-57.1,21);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9900FF").s().p("AgMBOIACgnIABgnIAAgmIABgnQAAgLAKAAQAKAAABALIgBAnIgBAmIgCA1IgBAZQgBALgIAAQgLAAAAgLg");
	this.shape_41.setTransform(-65.8,17.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9900FF").s().p("AAYA0QgNAHgRAAQgNgBgKgGQgKgHgCgNQgFgcABgWQAAgPADgSQACgKAIAAQAFABADADQADADAAAEIgCAQIgBAQIABAeQABANACAIIAHACIAHABQANABAQgFIAAgWIAAgUQAAgXADgRQABgKAJAAQAFAAADADQADADAAAFIgCAoIAAAXIAAAWIAAAIIABAHQAAAFgEADQgDACgEAAQgIABgDgKg");
	this.shape_42.setTransform(-74.5,21);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9900FF").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_43.setTransform(-88.6,21);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9900FF").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_44.setTransform(-102.3,21);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9900FF").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_45.setTransform(-113.8,21);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9900FF").s().p("Ag0BXQgDgDAAgFIABg/IABg/IAAgOIAAgOQAAgFADgDQADgEAEAAQAEAAADACIAYgDIASgBQAMAAAQADQAWAFgBAIQAAAFgDADQgCAEgFAAIgEgBQgOgFgVAAIgQABIgVADIAAAuQAUgFAKAAQAQAAASACQAKABAAAKQAAAFgDADQgDACgFAAIgQgBIgRAAQgHAAgYAFIgBBKQAAAFgDADQgDADgFAAQgEAAgEgDg");
	this.shape_46.setTransform(-125.4,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FormulaPresentProgressive, new cjs.Rectangle(-134.8,0,666.4,34.7), null);


(lib.ProShoulder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEBfQAEgCABgDIAAABIAFgIQAtgUASgJIAGgDQAZgMgBgbIAGAIIAAAUIgkAbQgMAGgYAKIAAAAIAAAAIgrAPIAGgDgAhpBOIAmhGQAPgSAYgFQACgNAFgLQASgnA0gTIAKACIABAAQAAABABAAQAAABgBAAQAAAAAAgBQAAAAgBgBQAAAGgDABQg4ATgGAjQgDAOAFARQgdgCgRANIgiAxQgGAKgIAYIgCAAgAAigSQAIgBAIAAIgGAFQgHAHgKAOQgNAUgMAFQAEgrAcgHg");
	this.shape.setTransform(10.6,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D19152").s().p("AhABoQgRgBgQgMIgMgIQAJgXAGgKIAhgyQASgMAdACQgFgRADgOQAHgjA3gTQADgBAAgGQABABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBIgBAAQAEgCAVACQAiAEABAhQACAhgKASQgKARgDACQABAagYANIgGADQgSAJgsATIgFAIIAAAAQgCADgEACIgGADIAAAAIAAAAQgaANgQAAIgCAAgAAYgZQgbAHgEArQALgFANgUQAJgOAIgHIAGgFIgFAAIgLABg");
	this.shape_1.setTransform(11.6,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProShoulder, new cjs.Rectangle(0,0,22.5,20.9), null);


(lib.ProSawing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D19152").s().p("AA9BNQgMgCgLgHQgJgGgIgKQgVAFgWABQgXAAgWgDQgegEgcgLIgpgUQgKgQgGgNQgKgaACgUIAGgFIAegQIAUAAQAMACAIAEQACAFAFADIADACIAHAGIAEAAQAFAABNAjQBMAhAXgxQAXAHArAIQAeAKAHAXIAAADQgegDgRAAQAEAcgXgEIgCADQgEAIACAIIgPAJQgJAFgIADIgBAAIAAAAQgJADgJABgAgWAwQAZACAFgNQgdAEgBAHgAhCAwQAXACAIgNQgkACgbgGQAIAOAYABgABnAbQgQAFABAIQAOADAPgGQgFgLAIgDQAJgFgBgFQgBgFgPAAQAGAPgPAEgACUAmIABACIgDACIACgEg");
	this.shape.setTransform(19.9,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgVBTQgqgiggAWQANgaAigBQAfgBAVAUQAigIAMgeQAHgSAAgXQABhFhBAFQACgMgOgIQACgFAMABIARABQAPAjBFAcQgBASgaAvIgCAFQgVAoAKAcQgMAHgNAAQgYAAgcgWg");
	this.shape_1.setTransform(34.3,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3F3F3").s().p("Ag2BdQgXgdAYguIAGgNQAYgyAAgYQAAgEgfgEQAAgNAEgQIAAgDIAHAGQAWASAoAbIADgBQAEAAACAAQACAAAAAAQgBAAgCAAQgDABgFAAIArAfIAAABQAGADgCAHQAAALgIAFIgEACIgFABIgEABIAAABQAGAnAOBCQgjgPhUgCgAApgcIAAAAIAAgBg");
	this.shape_2.setTransform(47.4,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#999999"],[0,1],-20.1,0.8,22.3,0.8).s().p("ACRCAQiSguhEgpQgIAGgQgGQgPgHgIAHQgKgMgHgFQgGgBgEAFQgDAGgHgCQgXgTgJg2IgGguIgBgBIAFgCIABADIAIAcQAHAeALALQACAHACABQgMg3gMgWIgDgFQAIgGAAgLQACgHgGgDIAAgBIgrgfQBKAwAcAQIBHApIBaA1QA+AlAjAYQAQALAxAaQAkAageAVQgvgcgRAEgAA3BEQACARAIAEQgEgmgLgKQACADADAYgAAuBNQgJgogHgQQACAmAOASg");
	this.shape_3.setTransform(71.6,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009933").s().p("AEUBvIAEACIAEABgAi5gWIACAAIgBABgAkThBIABgBIAAgCIADACIACABIgEgBIgIACgAkahxIAAAAIAAAAg");
	this.shape_4.setTransform(57.1,26.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AG4DEQAFgNgKgDIgZgCIgBgBIgXgNIgLgDIgDgCIAHAAQgRgQgpgJQgwgMgNgHQgtgPgTgVQgOAFgQgHQgQgKgKgDQgMAHgMgDQg5gRgbgTIgSADIgWADQglgEgmgCIgKgHIABAAIABgBIgDAAIAAAAIgHgGIgcgCIgPgKIgJgGIAAgDIgOgOIgLgBIgBgBIgEgDIgBgBIgHgDIgDACIgIAEQgQAIgRgDQgGgGgCgFQAMgPAAgOQgJgKgRgFQgSgFgagBIgZABQggACgVgBQgJAAgSgIIAAAAIAAgBIgBAAQg0gVAAgUQgVgdACgeIACgBIACgGIAEgEQgCATAKAaQAGAOAKAQIApAUQAcALAeAEQAWAEAXgBQAWgBAWgEQAIAJAJAGQALAHAMACIAJAAQAJgBAJgDIABAAQAIgDAJgFIAPgJQgDgIAFgIIACgDQAXAEgEgcQARAAAeAEIABAAIgBgEQgHgYgegJQgrgJgXgHQgXAyhNgiQhNgjgFAAIgEAAIgHgGIAAgBIADACIAAAAQgRgLAXAGQAWAGAWAIQAVAIAuAXQAuAPARgnIADgHIADgBQALAAARAFQADgCgEgKQgFgKAGgGQAWADAKgDQAGgBACgEIAJAMQAiAoARgDQAHgFABgKIAAgJQAKAJALgHIAPAJIAAAAQAIAKAKAJQAMALAQALIALAHQAPAJARAJIAOAGIABAAQAEAGAIACQAEAFAGACIAkAZIAxAeIB0A/QBCAoBtBKQACAIgGAGQgGAFACAJIABAAIAAAAQgBAHgIAFIgBAAQgEAEgFATQgFARgJAEQgGgHAHgRgAG/CoQAdgWgkgaQgxgZgQgLQgjgYg+gmIhag0IhIgpQgcgRhJgwQAEAAADAAQADAAAAAAQAAAAgBAAQgCAAgEAAIgDAAQgpgagWgTIgGgFIgBADQgEAPAAANQAgAFAAAEQAAAXgYA0IgHANQgXAuAWAcQBUABAjAPQgOhBgGgmIAAgBIAFgBIAAACIAGAtQAJA2AXAUQAHACADgGQAEgFAGABQAHAFAKAMQAIgHAPAHQAQAFAIgFQBEAoCUAvIAEgBQASAAAqAZgAidgPQAtAiAhgTQgKgbAVgpIADgEQAZgwABgTQhFgcgPgjIgSgBQgMgBgBAFQANAJgCAMQBCgGgBBFQAAAZgHARQgMAfgiAHQgWgUgfABQgiABgNAbQANgJAOAAQAVAAAaAUgAh/hvIgEAKIgCAFQgGAMgKAKQgGAHgHAFQAJAAANAJQAMAIANgCQAIgMAGgPQAGgOAEgSQgPgFgMAAIgJAAgAEkBTQgDgXgCgDQAMAKAEAlQgJgDgCgSgAELAlQAIAPAIAoQgOgRgCgmgABMgDQgLgKgHgeIgIgcIgBgEIAEgCIADAGQAMAWAMA1QgCAAgCgHgAkuhbQABgHAegEQgEALgVAAIgGAAgAlahbQgYgBgIgOQAbAGAkgCQgHALgTAAIgFAAgAi/hjQgBgIAQgFQAPgEgGgPQAPABABAEQABAGgJAEQgIADAFALQgLAEgKAAIgIgBgAAkhqIAAAAIABAAg");
	this.shape_5.setTransform(47.9,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProSawing, new cjs.Rectangle(0,0,95.9,43.9), null);


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


(lib.Bk1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#03AB4A").ss(1,1,1).p("AsgAgIAhAAQARgBAQgBQAygBAygCQBIgDBHgDQGEgQFbAJQA6ABA4ACQC+AHCUgNQAtgDApgGIAKgCIAngFIAXgDQABAAABgBIAAAAIAngGQEagoBoALQCjASDsAvQDLApIKA/EglkgB8QGTBxC8AhQCEAYC4AAQATAAATAAQBbgBBagCQAEAAAEAAQBIgBBHgBQATgBASAAQArgBArgBQAHAAAGAA");
	this.shape.setTransform(-0.4,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EglkgFIIAAIqIAAT8MBLJAAAIAAwBIAAqjIAA0XMhLJAAAg");
	this.shape_1.setTransform(-0.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#008424").ss(1,1,1).p("AO4BZIgEAAQkxgBg8gCQg0gCg0gCQglgCgmgCQhlgJhlgJQlRgclSgWQhSgIhSgEQhTgFhUgCQg9gBg+AAQiCAAiCAGQhCAEhCAEQiyASivgMQjRgNoLhVAPMBZQgKAAgKAAEAllAAqQobATkgACQhzAAhzAIQgFAAgEABQhqAHhqAFQg/ADg+ABQgTABgTAAQgGAAgGAA");
	this.shape_2.setTransform(-0.4,-24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#006666","#45FF24"],[0,1],3.5,142.5,3.5,-113.6).s().p("EglkAJ+IAAz7QGTBxC8AiQCEAYC5AAIAlAAIC1gDIAIAAICPgCIAlgBIBWgCIANAAIC/gGIAhAAIAtgBIgMgBIBkgDICQgGQGDgPFbAIIByADQC+AHCUgMQAtgEApgGIAKgCIAogGIAWgDIACAAIAAgBIAngFQEagpBoALQCjASDsAwQDLApIKA/IAAQBgEAiKgAoIAAgFIgCAAg");
	this.shape_3.setTransform(-0.4,86.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#60ECFF","#FFFFFF"],[0,0.506],3.9,-84.6,3.9,155.8).s().p("EAiIASGIACAAIAAAFgAO4C9IAMAAIAIAAIgUAAgAO0C9QkxgBg8gCIhngFIhMgEIjKgRQlRgclSgXQhSgHhSgFQhTgFhUgCQg9gCg+AAQiCAAiCAHQhCADhBAFQizASivgLQjRgPoLhVIAAyTMBLJAAAIAAUWQobAUkgABQhzABhzAIIgJAAQhqAIhqAEIh9AFIgmABIgMAAgAGvCdIAEABIgEgDg");
	this.shape_4.setTransform(-0.4,-34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009933").s().p("AaQErQjsgwijgSQhogLkaAoIgnAGIAAAAIgCAAIgLABIgLADIgoAGIgBAAIgKgBIABADQgpAFgtAEQiUANi+gHIhygDQlbgJmDAQIiQAGIhkADIAMAAIgtACIAhgCIghACIghAAIi/AGIgNAAIhWACIglABIiPACIgIAAIi1ADIglAAQi5AAiEgYQi8gimThxIAAorQILBVDRAPQCvALCzgSQBBgFBCgEQCCgGCCAAQA+AAA9ABQBUADBTAEQBSAFBSAIQFSAWFRAcIDKASIBMAEIBnAEQA8ADExAAIAEAAIAUAAIgIAAIAmgBIB9gEQBqgEBqgIIAJgBQBzgIBzAAQEggCIbgTIAAKiQoKg/jLgpgAP/hPIABAAIgBgBgANWEMIACAAIAAAAIAAAAIgBABIgBgBgANYEMg");
	this.shape_5.setTransform(-0.4,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.4,-151.7,484.1,303.5);


(lib.Twiggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.TwiggsFeet();
	this.instance.parent = this;
	this.instance.setTransform(33,38,1,1,0,0,0,33,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({regY:19.2,scaleX:1,scaleY:1,rotation:12.2,y:38.1},5).wait(5).to({rotation:3.5},0).wait(1).to({regX:32.9,scaleX:1,scaleY:1,rotation:12.7,x:32.9},0).to({regX:33,regY:19.1,scaleX:1,scaleY:1,rotation:0,x:33,y:38},4).wait(51));

	// Layer 1
	this.instance_1 = new lib.TwiggsHead();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.7,28.9,1,1,0,0,0,0.7,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({scaleX:1,scaleY:1,rotation:-12.3},7).wait(16).to({scaleX:1,scaleY:1,rotation:0},10).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.2,51.3);


(lib.PresentProgressiveLesson = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.PresentProgressiveDef();
	this.instance.parent = this;
	this.instance.setTransform(205.1,100.2,0.864,0.864,0,0,0,233.8,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({scaleX:0.88,scaleY:0.88,y:47.6},9).wait(61).to({alpha:0},9).wait(123));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(327.5,266.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNBHQgCgDAAgDIAAgCQACgLAAgMIAAgXIAAgXIgOABQgIAAAAgIQAAgJAPABIAHgBIACgNQACgSAHgJQAIgKASAAQAMAAAAAIQAAAIgLAAQgUAAgCAcIAAAFIASgBQANAAAAAIQAAAGgGABIgHABIgTABIgBASIABAPIAAAQQAAAPgCAJQgBAHgFAAQgEAAgDgCg");
	this.shape_1.setTransform(320.9,260.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA8IABgeIAAgeIAAgdIABgfQAAgHAHgBQAJABAAAHIgBAfIAAAdIgBApIgBAUQgBAHgGABQgJAAABgJg");
	this.shape_2.setTransform(314.4,260.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgTAAgJgLQgJgLAAgUQAAgUAOgOQAOgOASAAQAHAAAJAEQALAEAAAHIgBAEIgBAKIgBARQAAALABAGIAGAPIACAEIAAACQAAACgCADQgDACgDAAQgBAAgFgDgAgNgUQgJAKAAANQAAAOAEAHQAFAGAKABQAHAAAFgEIAJgGQgDgVAAgLIAAgIIACgJIgFgBIgEgBQgLAAgKAKg");
	this.shape_3.setTransform(307.7,262.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOgBAFAKQAEAFAAAOIABARIACARIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_4.setTransform(298.6,260.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgBACQgDACgEAAQgDAAgCgCQgDgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_5.setTransform(284.2,262.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHA8QgCgCgBgEIAAgOIAAgQIAAgTIABgSQABgFACgCQACgCADAAQADAAADACQACACAAAFIgBASIgBATIABAQIAAAOQAAAEgCACQgDACgCAAQgEAAgCgCgAgEgtQgEgCAAgEQAAgFAEgCQADgDACgBQAFABACADQADACAAAFQAAAEgDACQgCADgFAAQgCAAgDgDg");
	this.shape_6.setTransform(277.4,260.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWAuQgNgEAAgIQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAHAAAEgBQAJgDgBgFQABgLgRgFIgHgCQgLgCgEgDQgIgDABgKQAAgRAQgIIAPgFQALgDAEgCQAEgCAEAAQADAAADACQACADAAAEIABAGIABAHQAAAFgCACQgDACgDAAQgEAAgCgDIgDgJIgTAGQgMAFAAAIIAFABQASAEAJAFQANAJAAAQQABAOgMAGQgJAGgPAAQgLAAgJgEg");
	this.shape_7.setTransform(265.3,262.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcBAQgLgCAAgHQABgGAGAAIAKABIAQABQAPAAAGgQQAEgKAAgUQgFAIgFAEQgHAEgHAAQgOAAgKgKQgKgLAAgPQAAgWAOgOQAMgOAXAAQAHAAAFACQAGACACAEQAKAAgBAKIgCAQIgBAPIgCAbQgBARgDAKQgEAOgIAGQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQABAMAEAFQAFAGAJAAQAHAAAIgIQAHgJABgJIAEgbIgHgFIgHgBQgPAAgJALg");
	this.shape_8.setTransform(256.8,264.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcBAQgLgCAAgHQABgGAGAAIAKABIAQABQAPAAAGgQQAEgKAAgUQgFAIgFAEQgHAEgHAAQgOAAgKgKQgKgLAAgPQAAgWAOgOQAMgOAXAAQAHAAAFACQAGACACAEQAKAAgBAKIgBAQIgCAPIgCAbQgBARgDAKQgEAOgIAGQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQABAMAEAFQAFAGAJAAQAHAAAIgIQAHgJABgJIAEgbIgHgFIgHgBQgPAAgJALg");
	this.shape_9.setTransform(247.8,264.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHA8QgDgCAAgEIAAgOIAAgQIAAgTIABgSQAAgFADgCQACgCADAAQADAAACACQADACAAAFIgBASIgBATIAAAQIAAAOQAAAEgBACQgDACgDAAQgDAAgCgCgAgEgtQgDgCAAgEQAAgFADgCQACgDAEgBQADABADADQADACAAAFQAAAEgDACQgDADgDAAQgEAAgCgDg");
	this.shape_10.setTransform(241.2,260.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AATAuQgIAAgGgWIgDgTIgCgSIgHAPIgNAiQAAADgCACQgDAFgFAAQgHAAgGgZQgDgNgCgVIgCgMIgCgNQAAgDADgCQACgDADAAQAHAAABAHIACAMIACANIAEAkQAJgZAKghQADgJAGAAQAGAAADAKIAGAeIAFAfIAGgWIALgsQABgFAGAAQADAAADACQADACgBAEIAAADQgHAcgKAhQgDAHgFAIQgCAFgFAAIgBgBg");
	this.shape_11.setTransform(232.9,262.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAPAAIANAAIATABIATABQAEAAACACQADADAAADQAAAEgDADQgCACgEAAIgTgBIgTgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_12.setTransform(222,260.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgpA5QgLgLAAgYQAAgVALgWQAJgWARgPQAKgJALAAQAHAAAMAFQAQAGAAAHQAAAEgCACQgDADgEAAIgFgCQgNgIgIAAQgGAAgGAHIgKALQgTAaAAAcQAAAQAEAHQAGAGAOAAQAOAAAKgJQANgKAEgTQgXABgQAIIgEABQgDAAgDgDQgCgCAAgEQABgEAEgDQAQgKAsAAQAEAAACADQADABAAADQAAAGgEACQgFAagRAPQgRAPgVAAQgUAAgKgLg");
	this.shape_13.setTransform(204.8,260.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("Ag3BBQgCgDAAgEIAAgKIABgKIAAgQIAAgQIAAgPIAAgQIgBgQIgBgQQAAgDADgEQAEgCAEAAQAEAAAHAJQAUAfAQAVQATAXAYAWIAAgKIAAgLQAAgkgDgVIgCgJIgCgJQAAgKAJAAQAOAAAAA2IAAAbIAAAbIgCAOQgBAIgIAAQgEAAgGgGQgigfgrg8IAAATIgBASIABAUIAAAVQAAAXgJgBQgEAAgDgCg");
	this.shape_14.setTransform(192.2,260.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgjA9QgDgDAAgDQAAgEADgCQACgCADgBIASgCIABgPIgBgNIAAgPQAAgRACgdIgLAAIgLAAQgDAAgDgCQgCgDAAgEQAAgHAIgBIAZgBQAQABAYADQAIABAAAIQAAAEgDACQgCACgEAAIgNgBIgOgCIgBAtIAAAPIAAAOIAAAPIAagBQAEAAACACQACADAAAEQAAADgCACQgCADgEAAIgOABIgOAAIgPABIgRABQgDABgCgDg");
	this.shape_15.setTransform(180.7,260.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AATBBQgEgCAAgEIgEgQIgHgkIgFgjQgHAbgJASQgJAWgDANIABAEQAAADgEADQgDACgDAAQgMAAAAgKIgCgLIgJgoQgGgUgNgmIAAgEQAAgHAJAAQAFAAADAFIAGASQAFAPAFAVIAIAkQAJgVAIgdIAJgZQAHgSAGAAQAGAAACAGQADAHADAbIAGAgIAHAgIAchHIAEgQQADgJADgGQADgEAFAAQAIAAAAAIIgCAIIgEAJIgEAPIgZA7IgMAdQgDAFgGAAQgDAAgDgCg");
	this.shape_16.setTransform(167.6,260.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAdArIgFgaIgXAEIgUAEIgPAgQgDAFgEAAQgDAAgDgDQgDgCAAgDQAAgFANgaQgBgCAAgDQAAgGAHgCQAKgRAOgXQATggAFABQAHAAACAJIAFAcIANA4IAEANIADAJQAAAEgDACQgCADgDAAQgJgBgFgTgAgKAGIAdgGIgGggg");
	this.shape_17.setTransform(152.1,260.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape_18.setTransform(140.1,260.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape_19.setTransform(123.2,260.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgjA9QgDgDAAgDQAAgEADgCQACgCADgBIASgCIABgPIgBgNIAAgPQAAgRACgdIgLAAIgLAAQgDAAgDgCQgCgDAAgEQAAgHAIgBIAZgBQAPABAZADQAIABAAAIQAAAEgDACQgDACgDAAIgNgBIgOgCIgBAtIAAAPIAAAOIAAAPIAagBQAEAAACACQACADAAAEQAAADgCACQgCADgEAAIgOABIgOAAIgPABIgRABQgDABgCgDg");
	this.shape_20.setTransform(112.6,260.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAOgQAAQgOAAgKgKgAgOgQQgGAKAAALQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_21.setTransform(98.2,262.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfAmIAAg5IAAgIIAAgIQAAgJAIAAQAIAAAAAOQAPgPATAAQAHAAADAEQADAGAAAKIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_22.setTransform(90.1,262.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiBAQgDgCAAgEIAAgYIACgiIACgiIAAgLIABgMQACgHAGABIAIgCIAMAAQAOAAANAKQAPAMAAAQQAAAUgQAMQgOALgTAAIgKgCIgBAsQAAAEgBACQgDACgDAAQgEAAgBgCgAgSgxIAAAQIgCAhIAJAAQANAAAKgGQAKgIAAgNQAAgKgJgGQgKgGgJAAIgHAAIgFAAg");
	this.shape_23.setTransform(81.5,260.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgDACgCQACgCADgBQADABADACQACACAAADQAAADgCADQgDADgDgBQgDABgCgDg");
	this.shape_24.setTransform(344,263);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSAeQgLgJAAgPQAAgNAKgPQAKgQAMAAQAHAAAIAEQALADAAAHQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgDQgEgDgJAAQgGAAgHAMQgGAMAAAHQAAAKAGAFQAGAEAIAAQAEAAAEgCIAIgEIADgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAAGgKAEQgJAEgGABQgNAAgJgJg");
	this.shape_25.setTransform(338.6,259.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGAxQgCgCAAgCIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAACgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_26.setTransform(333.2,258.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXA1QgIgCgBgFQAAgGAHAAIAIABIAMABQANAAAFgNQACgIABgRQgEAHgFADQgFADgGAAQgMAAgHgIQgJgIAAgNQAAgSALgMQALgLASAAQAGAAAFABQAEACACADQAHABAAAHIgBANIgBANIgCAWQAAAOgDAJQgDALgHAFQgIAGgOAAIgQgBgAgMghQgGAIAAAMQAAAKAEAEQADAFAIAAQAGAAAHgHQAFgHABgHIADgXIgGgDIgGgBQgMAAgHAJg");
	this.shape_27.setTransform(327.3,261.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_28.setTransform(320.1,259.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgDAoQgCgCAAgDIgCgYIgBgYQAAgHgCgEQgFACgFAFIgIAJIgEAFIAAALIgBAMIABAFIAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgRIAAgNIABgLIgBgLIAAgLQAAgPAHAAQACAAADACQACADAAACIgBAEIAAAEIAAAIQAEgIAHgGQAHgGAEAAQALAAADALQAEgFAFgCQAFgDAHAAQAMAAAEAMIACAUIAFAmQABADgCACQgCABgDAAQgGAAgBgGIgCgVIgDgUQAAgFgCgEQgCgGgDAAQgDAAgHAEQgGAEgCACIAAANIACARIABASQAAADgBACQgCACgDAAQgCAAgCgCg");
	this.shape_29.setTransform(311.1,259.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_30.setTransform(297.8,259.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAFAUIgDgQIgCgOIgFAMIgKAcIgDAEQgDAEgEAAQgFAAgFgUIgFgcIgBgKIgBgLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABgCADAAQAGAAABAFIABAKIABAKIAFAeQAHgUAIgcQADgHAEAAQAFAAACAIIAFAZIAEAaIAGgTIAJgkQAAgEAGAAQADAAABACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAEIgOAxQgCAGgFAHQgCADgEAAQgIAAgDgSg");
	this.shape_31.setTransform(289.8,259.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgTAdQgKgKAAgPQAAgPAIgLQAJgOAQgBQAOABAHAMQAGAKgBAOQAAAOgHAMQgJALgOAAQgLABgIgJgAgLgNQgFAIAAAJQAAAJAGAGQAEAEAGABQAGAAAGgGQAFgFABgKQABgZgQAAQgJgBgFAKg");
	this.shape_32.setTransform(281.2,259.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_33.setTransform(274.1,259.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AASA0QgDgHgHgJIgLgRIgNAJIgBAVQAAADgBACQgCACgDAAQgHAAAAgKIABgRIAAgRIABgWIAAgYIAAgHIgBgHQAAgEACgBQACgCADAAQADAAACACQACABAAAEIAAAHIABAHIgBAWIAAAXQAJgHAIgHIAPgQQACgCADAAQACAAADACQACACAAADQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgJAKgMAKIAPAVQAKAOAAAEQAAADgCACQgCACgDAAQgEAAgCgEg");
	this.shape_34.setTransform(266.9,257.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTAdQgKgKAAgPQAAgPAIgLQAJgOAQgBQAOABAHAMQAGAKgBAOQAAAOgHAMQgJALgOAAQgLABgIgJgAgLgNQgFAIAAAJQAAAJAGAGQAEAEAGABQAGAAAGgGQAFgFABgKQABgZgQAAQgJgBgFAKg");
	this.shape_35.setTransform(254.7,259.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_36.setTransform(248,259.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgcIAAgJIABgKQABgGAFABIAHgBIAJgBQAMAAALAJQAMAKAAANQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBAMIgBAcIAHAAQALAAAIgFQAIgGAAgLQAAgIgIgGQgHgEgIAAIgFAAIgEAAg");
	this.shape_37.setTransform(240.9,257.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_38.setTransform(229.3,258.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgGAxQgCgCAAgCIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAACgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_39.setTransform(224,258.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgiAvQgJgJAAgUQAAgRAJgSQAIgTAOgLQAIgIAJAAQAGAAAKAEQAMAFAAAGQAAADgBACQgDACgDAAIgDgCQgLgGgHAAQgFAAgFAFIgIAKQgQAVAAAXQAAAOAEAEQAEAGAMAAQAMAAAJgIQAJgIAEgPQgTABgNAGIgDABQgDAAgCgCQgCgDAAgCQAAgEAEgCQAOgIAjAAQAEAAACACQABABAAADQAAAEgDACQgEAVgOANQgOAMgRAAQgRAAgIgJg");
	this.shape_40.setTransform(213.1,258);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgtA1QgCgCAAgDIAAgIIABgJIAAgNIAAgNIAAgMIAAgOIgBgNIgBgMQAAgEADgCQADgDADAAQAEAAAFAIQARAaANARQAQATATASIAAgJIAAgIQAAgdgCgSIgCgHIgCgIQAAgIAIAAQAMAAAAAtIgBAVIAAAXIgBALQgBAHgGAAQgEAAgFgFQgcgagjgxIAAAQIgBAOIABARIAAARQAAATgHAAQgEAAgCgDg");
	this.shape_41.setTransform(202.8,258.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgdAyQgCgCAAgDQAAgDACgCQACgCADAAIAOgBIABgNIAAgLIgBgMQAAgPACgXIgJAAIgJAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAVAAQAMAAAVADQAGAAAAAHQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLgBIgLgCIgCAlIAAAMIABAMIgBAMIAWgBQADAAACACQABACAAADQAAADgBACQgCACgDAAIgMABIgLAAIgNABIgNABQgDAAgCgCg");
	this.shape_42.setTransform(193.3,258.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgiA0QgCgCAAgDIgBgQIAAgRIABgRIABgTIAAgKIgBgLQAAgEACgCQADgEAFAAIAQACQAKABAFADQAcAPAAAVQAAAKgJAHQgIAHgLADQAUAMALAMQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAADgCACQgCACgDAAQgCAAgDgCQgXgXgagHIABANIAAAOQAAADgCACQgCACgDAAQgDAAgCgCgAgVgeIABAIIgBAOIgCANIADAAIADAAQARAAAIgFIAIgEQADgEAAgDQAAgJgLgJQgIgHgLgBIgKgBg");
	this.shape_43.setTransform(185.2,258);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_44.setTransform(176.5,258);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgVA3QgHgCgEgDIgBAAQgDAAgCgCQgCgCAAgDIABgVIABgWIgBgXIAAgYQAAgCADgEQADgDADAAIAKAFIANAGQASAGAOAOQAQAQAAATQAAALgGALQgFALgKAGQgKAIgTAAQgFAAgHgCgAgZgSIAAATIgBAlIACABQAGAEAJAAQAOAAAIgFQAGgFAEgHQAEgIAAgIQAAgSgVgOQgGgFgZgLg");
	this.shape_45.setTransform(167.1,258.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgtA1QgCgCAAgDIAAgIIABgJIAAgNIAAgNIAAgMIAAgOIgBgNIgBgMQAAgEADgCQADgDADAAQAEAAAFAIQARAaANARQAQATATASIAAgJIAAgIQAAgdgCgSIgCgHIgCgIQAAgIAIAAQAMAAAAAtIgBAVIAAAXIgBALQgBAHgGAAQgEAAgFgFQgcgagjgxIAAAQIgBAOIABARIAAARQAAATgHAAQgEAAgCgDg");
	this.shape_46.setTransform(156.3,258.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgiAqQgOgMAAgTQAAgXAOgTQAPgWAXAAQAWAAAMAKQALALAAAXQAAAWgNATQgPAWgWAAQgTAAgOgMgAgYgWQgKAPAAASQAAANAKAIQAJAIAOAAQAPAAALgRQAKgPAAgRQAAgRgHgGQgIgHgQAAQgQAAgMARg");
	this.shape_47.setTransform(145.1,258.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AAPA2QgCgCgBgEIgDgMIgGgeIgDgdQgGAXgIAPQgHARgDALIABADQAAADgDACQgDACgDAAQgJAAAAgIIgCgJIgIgiIgPgvIAAgDQAAgGAHAAQAEAAADAEIAFAPIAIAdIAGAeQAIgRAIgYIAGgUQAGgQAFAAQAFAAACAGQACAFADAXQABALAEAPIAFAbIAXg7IADgNQACgIAEgFQACgDAEAAQAHAAAAAHIgCAGIgDAIIgEAMIgUAxIgKAXQgDAEgEAAQgEABgCgCg");
	this.shape_48.setTransform(132.5,258.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgbAvQgMgGgBgKQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQACgCADAAQAEAAACAEIAGAHQAGADALAAQAKAAAJgEQAMgGAAgKQAAgJgKgFQgIgEgMgBQgKAAgIgDQgKgGAAgKQAAgMAOgLQANgJANAAQAHAAAIACQALADAAAFQAAAGgGAAIgJgCIgLgBQgKAAgHAFQgIAFAAAIQAAAGAKACIAOACQAQABAIAIQAJAHAAAMQAAAQgPAKQgOAIgQAAQgMAAgLgFg");
	this.shape_49.setTransform(115.9,258.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgdAyQgCgCAAgDQAAgDACgCQACgCADAAIAOgBIABgNIAAgLIgBgMQAAgPACgXIgJAAIgJAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAVAAQAMAAAVADQAGAAAAAHQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLgBIgLgCIgCAlIAAAMIABAMIgBAMIAWgBQADAAACACQABACAAADQAAADgBACQgCACgDAAIgMABIgLAAIgNABIgNABQgDAAgCgCg");
	this.shape_50.setTransform(107.2,258.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_51.setTransform(95.6,259.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgXA1QgJgCAAgFQAAgGAHAAIAIABIAMABQANAAAEgNQADgIABgRQgEAHgFADQgFADgGAAQgMAAgIgIQgHgIgBgNQAAgSALgMQALgLASAAQAHAAAEABQAEACACADQAIABgBAHIgBANIgCANIgBAWQgBAOgCAJQgDALgHAFQgIAGgOAAIgQgBgAgMghQgGAIAAAMQAAAKADAEQAEAFAIAAQAGAAAHgHQAFgHABgHIADgXIgGgDIgFgBQgNAAgHAJg");
	this.shape_52.setTransform(88.5,261.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgXA1QgJgCAAgFQABgGAFAAIAIABIANABQAMAAAFgNQAEgIAAgRQgEAHgFADQgFADgFAAQgNAAgIgIQgHgIgBgNQAAgSALgMQALgLASAAQAHAAADABQAFACACADQAIABAAAHIgCANIgCANIgCAWQABAOgDAJQgDALgHAFQgIAGgPAAIgPgBgAgMghQgGAIAAAMQAAAKADAEQAFAFAHAAQAGAAAGgHQAGgHABgHIADgXIgFgDIgGgBQgMAAgIAJg");
	this.shape_53.setTransform(81.1,261.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgGAxQgCgCAAgCIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAACgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_54.setTransform(75.6,258.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAFAUIgDgQIgCgOIgFAMIgKAcIgDAEQgCAEgFAAQgFAAgFgUIgFgcIgBgKIgBgLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABgCADAAQAGAAABAFIABAKIABAKIAFAeIAPgwQACgHAFAAQAFAAACAIIAFAZIAEAaIAGgTIAJgkQABgEAEAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAEIgOAxQgCAGgEAHQgDADgEAAQgIAAgDgSg");
	this.shape_55.setTransform(68.8,259.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgEAyQgCgCAAgDIAAgDIAAgDIAAgKIgBgKIgBgaIgCgcIgGAAQgPAAgJgCQgFgBAAgGQAAgDABgCQADgCADAAIALABIALABIAMAAIAMAAIAQABIAPAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgPAAIgQgBIgFAAIACAfIACAdIAAAHIABAIQgBAEgBAEQgCAEgEAAQgCAAgCgCg");
	this.shape_56.setTransform(59.8,258);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},136).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},49).wait(65));

	// Layer 3
	this.instance_1 = new lib.FormulaPresentProgressive();
	this.instance_1.parent = this;
	this.instance_1.setTransform(206.2,147.7,0.616,0.616,0,0,0,198.3,33.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).wait(70).to({scaleX:0.57,scaleY:0.57,x:202.9,y:2.3},8).wait(115));

	// Layer 1
	this.instance_2 = new lib.WhiteSheet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(206.3,103.5,1,1,0,0,0,206.3,103.5);
	this.instance_2.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(127).to({scaleY:0.1,y:-6.7,alpha:0.871},8).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,412.6,207);


(lib.ProSaw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0033").s().p("ABpAjIgDgFIgEAAQgBACgEAAQgHAAgJgGQgFgBgCgEIgFgFIgKABIgMACQgLAAgBgDQACgDAAgDQgkABAAgJQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQACAAAEABIAiADIABAHIAIAAQAGgEAJAAQALAAADAHIAMAIIANgBQAFAAACAJIgBADQAAABAAABQgBAAAAABQAAAAgBAAQgBAAAAAAIgBgBgAgqgRQgRgLgCAAIgNACIgcABIgHgDQAAgHAuAAQAGAAAFAEIAFAGQADgEADAAQAFAAAKASIgBAEQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgIgKgEgBg");
	this.shape.setTransform(71.8,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA3AuQAAgFAEAAQAEAAADAMQAAAFgEAAIgHgMgAAkAsQAAgMAEAAQAGAAgBAIQAAARgFAAIgEgNgADLAvIAAgGIALgMIAAgGIAEgBQAEAAACAJQAAACgRAQIgEgCgAACAnQAAgCAEgCQAFgFALAAQAEAAAAAEQAAAJgSAAgACxAbQAAgGAEAAQABAAABAAQABABAAAAQABAAAAABQAAAAAAABIADAAIgGgWQAAgDAEAAQAIAAACAYQAAAJgLAAQgIAAAAgFgAgxAAQAAgFASAAQAJAAAAAFQAAAEgOAAgAgNAAQgDgDAAgCIABAAIABABQAAAAABAAQABgBAAAAQAAAAABgBQAAgBAAAAIADgCQAOAAgBAIQAAAEgFAAQgJAAgEgDgAjLgkIAHgLQAEAAAAAEQgGAMgBAAgAivgnQAAgEAFAAQAIAAAAAGQAAAFgEAAgAjfg1QAAgEAJAAQAKAAAAAEQAAAEgKAAg");
	this.shape_1.setTransform(83.9,52.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0033").s().p("ABnAvIAAgIQgCgDgQAAIgBAAQgMAAgBgHIAAgBIgNgEQgCAEgPAAQgMAAAAgFQAAgDAMAAQAMAAgBgFQAAgGADAAQAEAAACAFQACAFAEAAQALACAAAHQAbAAAEADQADABgCAEQABAGAGgBIATgCQAFAAAAAEQAAAKgQAAQgTAAgDgGgAgmADIgKgCIgHAFIgDgCIAAgEIABgBIgDgCQgLgHAAgJIgZgBIgCgBIgBgDIAAgFIgLADQgGAAgMgMQAAAOgJAAIgDgCIAAgFQACgCADgKQABgJADAAQADAAASASIAKgDQAJAAAAAEQABACgCAEQAfABgBAFQgCAIAEABIAMADQADgCADAAQAHAAAGANQAAAEgEAAQgDAAgCgDg");
	this.shape_2.setTransform(76,48.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA6BNIAMgSQAFAAAAAGQAAAEAIAIQAAAFgNAAQgMAAAAgFgABiA6QAAgCAGgCQgCgIAFAAQAFAAABAUQAAAKgFAAQgBAAgJgSgAgDArQAAgHAQAAQAGAAAAAEQAAAHgSAAgABKAeQAAgFAEAAQAEAAADAMQAAAFgEAAIgHgMgAA3AcQAAgMAEAAQAGAAgBAIQAAARgFAAIgEgNgADeAfIAAgGIALgMIAAgGIAEgBQAEAAACAJQAAACgRAQIgEgCgAgFAaIAAgFQAFgIANAAIADABIABADQAAABgSAKIgEgCgAAVAXQAAgCAEgCQAFgFALAAQAEAAAAAEQAAAJgSAAgADEALQAAgGAEAAQABAAABAAQABABAAAAQABAAAAABQAAAAAAABIADAAIgGgVQAAgEAEAAQAIAAACAYQAAAJgLAAQgIAAAAgFgAgegPQAAgGASAAQAJAAAAAGQAAAEgOAAgAAFgQQgDgDAAgCIAIgEIABAAQABAHAMAAIAAABQAAAFgFAAQgKAAgEgEgAjmghIAAgGQADgDABgHQADgEAQAAQAIAAAAAEQAAACgGABQgHAAgFAFQgDAKgGAAIgEgCgAi4g0IAHgLQAEAAAAAEQgGAMgBAAgAicg3QAAgEAFAAQAIAAAAAGQAAAFgEAAgAjMhFQAAgEAJAAQAKAAAAAEQAAAEgKAAgAjyhGIAAgDQAAgIATAAQAHAAAAAEIgCAGQAAAEgMAAQgMAAAAgDg");
	this.shape_3.setTransform(82,54);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA3AuQAAgFAEAAQAEAAADAMQAAAFgEAAIgHgMgAAkAsQAAgMAEAAQAGAAgBAIQAAARgFAAIgEgNgADLAvIAAgGIALgMIAAgGIAEgBQAEAAACAJQAAACgRAQIgEgCgAACAnQAAgCAEgCQAFgFALAAQAEAAAAAEQAAAJgSAAgACxAbQAAgGAEAAQABAAABAAQABABAAAAQABAAAAABQAAAAAAABIADAAIgGgWQAAgDAEAAQAIAAACAYQAAAJgLAAQgIAAAAgFgAgxAAQAAgFASAAQAJAAAAAFQAAAEgOAAgAgNAAQgDgDAAgCIAIgEQAOAAgBAIQAAAEgFAAQgJAAgEgDgAjLgkIAHgLQAEAAAAAEQgGAMgBAAgAivgnQAAgEAFAAQAIAAAAAGQAAAFgEAAgAjfg1QAAgEAJAAQAKAAAAAEQAAAEgKAAg");
	this.shape_4.setTransform(83.9,52.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0033").s().p("AB5BjIAKgGIABgCIAFgBIADAJgABnABIAAgHQgCgDgQAAIgBAAQgMAAgBgHIAAgBIgNgEQgCAEgPAAQgMAAAAgFQAAgDAMAAQAMAAgBgFQAAgGADAAQAEAAACAFQACAFAEAAQALACAAAHQAbAAAEADQADABgCAEQABAGAGgBIATgCQAFAAAAAEQAAAJgQAAQgTAAgDgGgAgmgqIgKgCIgHAFIgDgCIAAgFIABgBIgDgCQgLgHAAgJIgZgBIgCgBIgBgDIAAgFIgLADQgGAAgMgMQAAAOgJAAIgDgCIAAgFQACgCADgKQABgJADAAQADAAASASIAKgDQAJAAAAAEQABACgCAEQAfABgBAFQgCAIAEABIAMADQADgCADAAQAHAAAGAOQAAAEgEAAQgDAAgCgDg");
	this.shape_5.setTransform(76,53.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA8BUIATAAIgCgIIgGAAIgBACIgKAGIAAgDIADgFIgBgBIABgDIAAAAIABgCIAFgDIAAgCIAHgBIAAgBIABgCQAEACAAAHIACABIgBADIAAABQAAAMgJAAQgLAAgCgDgAA8BUgABiA0QAAgBAGgDQgCgHAFAAQAFAAABATQAAAKgFAAQgBAAgJgSgAgDAmQAAgHAQAAQAGAAAAADQAAAHgSAAgABKAYQAAgEAEAAQAEAAADALQAAAFgEAAIgHgMgAA3AXQAAgMAEAAQAGAAgBAIQAAAQgFAAIgEgMgADeAaIAAgGIALgMIAAgGIAEgBQAEAAACAJQAAACgRAPIgEgBgAgFAVIAAgFQAFgIANAAIADABIABACQAAABgSAKIgEgBgAAVASQAAgCAEgDQAFgEALAAQAEAAAAADQAAAJgSAAgADEAFQAAgFAEAAQABAAABAAQABAAAAAAQABABAAAAQAAABAAAAIADAAIgGgUQAAgEAEAAQAIAAACAXQAAAJgLAAQgIAAAAgFgAgegUQAAgGASAAQAJAAAAAFQAAAEgOAAgAAFgWQgDgCAAgCIAIgEIABAAQABAHAMAAIAAAAQAAAFgFAAQgKAAgEgEgAjmgmIAAgGQADgEABgGQADgEAQAAQAIAAAAADQAAADgGAAQgHABgFAFQgDAJgGAAIgEgBgAi4g6IAHgKQAEAAAAAEQgGALgBAAgAicg8QAAgEAFAAQAIAAAAAGQAAAEgEAAgAjMhKQAAgEAJAAQAKAAAAADQAAAEgKAAgAjyhMIAAgDQAAgHATAAQAHAAAAADIgCAGQAAAEgMAAQgMAAAAgDg");
	this.shape_6.setTransform(82,54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},8).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[]},6).to({state:[{t:this.shape_4}]},6).to({state:[{t:this.shape_6},{t:this.shape_5}]},3).wait(4));

	// Layer 4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF3399","#FF0033"],[0,1],-59.9,12.1,39.8,12.1).s().p("AASAJQgYgFgcgDIhHgLQBJgBA8ACIAEAAIAVABIATAAIAigBIAAABQgaATgjAAQgNAAgOgCg");
	this.shape_7.setTransform(78.6,56);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABRAJIgUAAIgEgBQg8gBhJABIgDgBQgdgDgZgIICWgDIAxgBIADAAIADAAIAbAAIAHgBIABAAIAEABIALAAIAJAAQAAAIADAGIAAADIgoAAIABAAIAGAAIgNABIgHgBgABaAGIANgBIgPAAIACABg");
	this.shape_8.setTransform(75.8,54.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0033").s().p("AhWAnQg/gfgwgzIgCgCQAdAEAegGQAWAEASgEQAiADAhAKQAhAJAZAOQAeAPAnAGQAVAEATAHIAJABIAcAHIAAAAIAMAGQAHAFAKACIgBABIgIAAIgMAAIgEAAIgBAAIgHAAIgbABIgCgBIgEABIgxABIiWADIgVgJg");
	this.shape_9.setTransform(69,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(30));

	// Layer 2
	this.instance = new lib.ProSawing();
	this.instance.parent = this;
	this.instance.setTransform(4,19.4,1,1,0,0,0,3.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleX:1,scaleY:1,rotation:1,x:11.6,y:22.4},6).to({scaleX:1,scaleY:1,rotation:0,x:4,y:19.4},7).to({scaleX:1,scaleY:1,rotation:1,x:11.6,y:22.4},6).to({scaleX:1,scaleY:1,rotation:0,x:4,y:19.4},5).wait(2));

	// Layer 1
	this.instance_1 = new lib.ProShoulder();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.6,4,1,1,0,0,0,18.6,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({rotation:-30,x:17.5,y:3.3},6).to({rotation:0,x:18.6,y:4},7).to({rotation:-30,x:17.5,y:3.3},6).to({rotation:0,x:18.6,y:4},5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.3,59.3);


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
		var bgm = createjs.Sound.play('bgmP',{loop:-1});
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
		
		 window.open ("pro_Scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pro_Scene2.html","_self");
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


(lib.ProTwiggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBB97").s().p("AgDgBIAAgBIAFACIACADIgHgEg");
	this.shape.setTransform(321.2,178);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3399","#FF0033"],[0,1],-169.1,8.9,10.4,8.9).s().p("AhPCXIBfg/Qg3h8g/hzQBYgDBbgGIAXgBQAGBdgHB6IgBAMIgIBfIgwABQhBAAg4gLg");
	this.shape_1.setTransform(308.6,185.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0033").s().p("AiQhAQgTgcgWgUIAagFIAsgLIAUAOQAsAeBBAzQA/ApBtBXQgVAJgcAHQhBAQhiACQg5hlg9hcg");
	this.shape_2.setTransform(300,155.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AB7DKIAAgLQAIh8gGhcIgYACQhcAFhWADIgLgTQBjgDBAgPQAcgHAWgJQhthXg+gqQhCgzgsgeIgVgOIANgEIAIAGQAbAVAlAVQBcA2AfAhIADgJIADAFQAIAIAKAGIALANQARAQAcAVQAZASAQARQAJAKAFAJIABABIgDACQgIAIgEAWQgFAUAAAhIgCADIgDAJQgDAGAGABIABAAIAAACIAIAFIANAdIgOgFIAAADIAAABIAAABIAAACIgBACIgHBeIAAADIAAAHIgFBdIgaACIAJhfgACvhEIADgBIAAAGIgDgFg");
	this.shape_3.setTransform(306.2,171.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.ProSaw();
	this.instance.parent = this;
	this.instance.setTransform(185.3,125.3,1.801,1.801,0,0,0,48.1,29.6);

	this.instance_1 = new lib.Twiggs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(222.4,157.8,1.842,1.842,0,0,0,87.7,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#006666","#45FF24"],[0,1],88.2,131.9,88.2,-98.6).s().p("AgBAIIACgQIgBARIgBgBg");
	this.shape_4.setTransform(109.4,214.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("Ao3DiQAcg1AFgZQAGAGAtAAQgLCEhhAMQgDgaAbgugAhvBuQARgKAxgDQAUAhAdBLQgUAbgXABQgYgVgwhmgAI+BKQATglAAghIArAAQgJAeAQBUQgbAKhCAMQADgYAVgqgAwqBuQASgiALgRQASgaAhgBIgYA/QgNAWgTAAQgLAAgNgHgAolBuQgLg7ATgpQAZgwA+AHQgTA6gFBTgAPGgCQAngNAWAZQAdAnALAFQgjAaAAAJQg6g3gIgkgAi+gCQAqgFAYgSQAPAVAVAyQgEAVgvABQgqgmgJgggAmbA2QADgMAQgFQAPgEAHAHQgGAOgaAAIgJAAgAm5AuQAlAAgeAIIgHgIgAm1gZQAGgZgKgLQAoAjADAQQgiANgCABQgHgGAEgXgAC3gCQAOgpAJgQQAQgdAhgBQgDAZgMAvQgXAQgXAAIgLgBgAvxgZQgBgKAAgKQABgKACgKQAFgXAQgWQAuAVADAAQgCAVgLAbIgLAYIgEAHIgsgPgACkg7QAJgYASABQAAALgOAQQgMAOADAQQgNgMAJgWgAjnipQAPANAWAoQASAnAWAJQgMAbhBAKQgpg0AphWgAJhg0QgVgGgJAMQgMgMAFgcQAIgpgBgGQAVAKAygKQAGAmgNAxIgCABQgIAAgYgHgAOGh9QAJgIAiAAQADARAUAVQATAVACAVQgDADg3AEQgfhMACgDgAKZg9QAJgPgBgNQAbACABAaQgLAHgJAAQgJAAgHgHgAnmhFQgSgDgXgKQgDgRAdgRIARgJIABAAIgCgCQgFgDgTgDIgEAAIACgEIAIgTQAMgegHgEQAMgDBDASQACAygtA5IgGAAIgCAAIgQgBgAC3h2IAAgcIBAAAQAGAngdAAQgQAAgZgLgAu+iLQAdhIgBgHQAeAAAfAZIAEADQAAAPgEAQQgHAXgSAaQgogMgYgRgAo8iRQgNgZgNgFIA5gPIAQgFIAGgCIgBALQgBANgEAMQgFAWgMAVQgPgEgPgXgAkGi2QAYAEgeAtQgHgEANgtgAmyjFQAjgYB0AYQgDAWgSAkQhWg5gsgBgANbihQgBgiAzgJQAMAiACABQAAAQgbAAIgHAAQgVAAgJgIgAI7i2QgSg0AjghQAkghAxAfIgXBeQgugMghAFgACoi2QARgfgCgbQAJADAegRQAbgPAOAIQABABgYBVQg0AAgUgHgANNjMQgbgVAcgaQAagZAPAkQgHAkggAAIgDAAgAK9kbQBBgcBIAcQgDAWgaAVQhLgaghgRgAHHkNQANgJATADQAXAFAMgHQgNAXgSABQgQAAgUgQg");
	this.shape_5.setTransform(216.2,238.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF3399","#FF0033"],[0,1],-3478.4,-859.8,1426.9,-859.8).s().p("AgBgCIADADIgCACg");
	this.shape_6.setTransform(100.3,189.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF3399","#FF0033"],[0,1],-19.8,0,22.8,0).s().p("ABwE0IgMgGIhgg3IgFgEQgGgDhkgpIAAAAIhUg6IACh1IAAgBIADgCIgEgFIACitQgRg5AQiBQCRBBEPCWQgUBwgMBZQgRB8gCBUIAAADQgBAhABAbIhAgkgAi6gDIACgNIgBAAgAjVCdIAAgBIAAABgAjiCYIAIACIAFADIgNgFg");
	this.shape_7.setTransform(119.2,187.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033CC").s().p("AkdBJQgVhXAZhSQApgxACgcIAEAAQAFANAIAMIAJALIgBgLQANAJAUAJQALAEBzAkQAEABAyAYQArATAZAFQBlARBoALQAXADAAANQAAAOgJATQgEAJgCAIIgBACQgUASAZBJIieAAQgehUgOgKQgNAYAkBGQglAUiBgIQh3gGgQAWQhCgEgYhhg");
	this.shape_8.setTransform(124.1,130.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBB97").s().p("AgDgBIAAgBIAFACIACADIgHgEg");
	this.shape_9.setTransform(321.2,178);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009933").s().p("As8BXIABAHIAAABIgCAEgAL8hbIgBAAIBDAAIg3ABgALvhiIAbABIgWACIgFgDg");
	this.shape_10.setTransform(183,180.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ApXBpQg0gugSgzQgIgZgBgaQANAbAQATQAoAzA8AAQA3ACBug2QBjgxAzgRIAZgHQAvgKAnAJQAsAKAjAgQjbgwjVC3gAHAAjIhpg5QiChEhJBYQAFgtApgaIASgKQA2gcBFAJQAmAFBLAoIAuAZQAqATAoACQAxACAtgYIAQgKIABAAIgBAHIgBAFQgIAcgmAdIgPAKQgjAXgfADIgLAAQglAAg2gbg");
	this.shape_11.setTransform(222.7,189.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FF3399","#FF0033"],[0,1],-89.7,0,89.8,0).s().p("AuADUIAAgDQgBhPARiGQALhRARhlQHwgtFdgFQCCgCBuADIAHABIAlABIAkAAIA3gBIBWgBIADAAQBMAABPgCQCHgECTgJQAGBcgHB8IgBALIgIBeIgFAsIjaAMQhnAFhfgRQrFBBmkAtIgSACIjRAYQgCgRgBgWgAr0giIAAABQAYBUA8AcQB3AMCOhgQCFhaCYAgQAcAEAeAgQgRhCgmgeQgggagxACQgwABhiAnIhDAdQiUBCg7AAQgyAAgcgjQgaghgIg+QANghAJgLIgWAAQguA+AaBagAFKgYQBoBBBCgFQAmgOAfgUQAYgNATgSQAXgUASgZQAog1APhJIgXAAQgQA2g5AhIgRAJQgVALgVAGQggAKggAAQgNAAgNgBQgfgDgqgXQgRgJgSgMQhCgrgcgDQhtgNg/A9QgrAqgVBLQAlgGAlgfQAmgeAfgFIARgBQA6AABXA3g");
	this.shape_12.setTransform(229.2,194.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0033").s().p("AqmCpQhCgOiOhWIieheQgUgLAFgCQAGgFgcAFQAOgdAzgHQB4gWEEAOQCggFBqgGIBoABIAhAAIAhgBIH9g5IDygSQCKgHApAOQAQAGAhAVIAUAOQAsAeBCA0QA/AoBtBXQhKAgiWADIg6AAQhdgBg9ABQgFgFglgBIgxgCIgQAAIgUAAIgHAAIgCAAIgOAAIgvABIgFgBIgGABIhZACQiKABiGAEQknAJkXAVQhhARg0AAQgSAAgNgCgAJkBzIg0ABIAqABIABAAIAYgCIgIAAIgEAAIgDAAg");
	this.shape_13.setTransform(210.5,156);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#60ECFF","#FFFFFF"],[0,0.506],-1.2,-70,-1.2,146.5).s().p("Al+BRIAEgDQASgTAXAAQAOAAADgCQAVAIAmAAIAIAAIgBAVQhAgEhAgBgAF+gyIABgCIAAACIAAABIgBgBgACWhVIAAABIgBABIABgCg");
	this.shape_14.setTransform(199.1,103.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D19152").s().p("AmnOJIAAgDQAAgQgrgYIA8hbQABAIAHAFQAGAEAKACIgDgBQAXAMAkgBIACgCIAcACQAngBAYgPIAFABQANACAAANQAAAFgFAJIgDAAIgBADIABABIgGAGIgKAAQgKABgJAEQAEARASgBIAPAAIAAAKQgEACgGAAQAAgJgIAAIgLAJQgLgGgSAAQgPAAgJAFQAEAMAYAGQALADAHAEIAAAMIgeAAIgFgEIgugFIgMACIgBAHQAAADAJAOIgrACQgVgDgRgEgAiyNMQgMgHgHAAIgCAAQgHgEgDgGQAQgIAAgXQAAgcguAAQgEANhWAAQgxAAgNggIAAgDIAQgaQAWAGAiAXQAOgZA/AAQBIgBAQgLQAOAOATAfQAVAbAaAIQAFAUgGAggAp7MoQgrgGAAgSQAAgNAngjQAagYALg1IABABIACgRQADgTABgWIBbAwIACACQAOAIASAIIAAABQgEAZg8BWQgQAWgGAXQgmgMgpgFgAqmMwIAAgBIABgBIAFACIgGAAgAmKMFIgCgEIABAAIAEAFIgDgBgAmQL4IAAAAIACAEIgCgEgAjkj0QihgQhKgcQhtgogIgCIg8gmIgCgBIgUgMQCMiQAGglIADg0QACgfANgWQAagpAGgNQAFgLAMgQQAMgRAOgFQAQADAQAEQAegIAdgEIAQgBQBNgGBIAeIALgDQAogMANgPQADAWAFAAQAEgbAggGQAcgGAVARQhAArAcAWQACgZAfgQQAcgPASAGQgXABgNAbQgQAegMAGIAjAAQADgfAdgYQAigWANgPQgGgEgZACQgVACgiAFQAGgSAugEQAtgDADgYIgmgIIAUgHQAHAAAXAIQAJAAAIgDIAOADIgEgHQAVgLAQgfIAMAAIgGAFQgVAVAaAPIAZgtQAYgEAhgIQADAAAMANIAFAFIgCADIAIAAQAOAGAVABIAIAAQgDAMAYALQgzATAWARQAOgVAMANQAFAHAKARIABANQAAAVgHAKQgDgUgDgGIgWAOQgPAHABARQAEAKAYAUQAUAQADASQgRALhOgSQgwAkglAHQgfhAgbgXQgOAdAsBCQhLAThMhGQAHAzBLANIB+AVQADAhgLAhQAIAMAdAPQAbAPAIAPQAJAYgUAlQgPAdASAKQAWgkA5ghQBGgqASgSIACgaIABAAIAAgCQAJhAAYgQQA6gGAbAjQgJABADAVQgJACgXgGQgPgFgEAPQAMAOAnAJQgkAQAcAdQARAQAiAYQgSAMhEgSQg6BPhHAuIgmATQh6CLiQiFQgNgMgKgNIgCgdIAAgCIgBgYQAWgFASgQQAKgFAHgGIAFgEIAAABIABAAIAEgCQAIgGAFgFQARgSgFgaQgLgSgZgDQALAXgNAUIAAAAQgKABgIAQIgEAJQgKAbgvAAQgkAAgNgJQgOgIgFAAIgCAAIgDgBQgPgNgZAAQgUAAAAAIQAAAJABgEQALAMAbAJQgWAEgWAbQgQAUgPAeQggBCAAAVIAAAJQgXgIgjgEgAlQo9IAAApQAHAfAhAEIAJAGQAKAHAKAFQAaAMAXgFIgagPIgigVIAAAAIgBAAIgGgFQgQgKgJgMIgIgMIAAgOQAAg6gJAAIAAAAQgJAAAAAugAD/rbIAMgdQAIgQgUgGQgDAEgVALQgQAJAFATQAGgCAGAAQANAAAKAKgAD1tOQgrASgDAhQAQgHAdgWQAZgPAWAVQgCgigWAAQgJAAgNAGgAIQm0IAEACIgIACIAEgEgAI6n2QgRgMAFgRQARAGATAYQgDAFgGAAQgGAAgJgGgAJDoZQBJAGAbgNIAAAhIgBADIgEAAQgwAAgvgdgAJSovQgHgGAOgmQALAIAagGQAdgEAMAKQgCAkhHAAIgMAAgAI7poQgCgUASgnQAZg3ADgJQAMgBAJAJQAGB2g1AAQgIAAgKgDgAINp+IABgCIADACgAFrruIAAABIAAABIAAgCg");
	this.shape_15.setTransform(169.5,149.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B1500").s().p("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");
	this.shape_16.setTransform(181.5,50.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("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");
	this.shape_17.setTransform(201.9,147.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProTwiggs, new cjs.Rectangle(44.9,22.4,338.5,250.5), null);


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
(lib.pro_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3_repeat:240});

	// timeline functions:
	this.frame_1 = function() {
		playSound("presentprogressivetenseis");
	}
	this.frame_56 = function() {
		playSound("multi_bells");
	}
	this.frame_66 = function() {
		playSound("presentprogformula");
	}
	this.frame_123 = function() {
		playSound("pro_sawing");
	}
	this.frame_134 = function() {
		playSound("prosawing");
	}
	this.frame_184 = function() {
		playSound("twiggswonderingifproknowsmagic");
	}
	this.frame_239 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_248 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(55).call(this.frame_56).wait(10).call(this.frame_66).wait(57).call(this.frame_123).wait(11).call(this.frame_134).wait(50).call(this.frame_184).wait(55).call(this.frame_239).wait(9).call(this.frame_248).wait(1));

	// Layer 7
	this.instance = new lib.PresentProgressiveLesson();
	this.instance.parent = this;
	this.instance.setTransform(275.3,185.7,1.149,1.155,0,0,0,206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(249));

	// content
	this.instance_1 = new lib.ProTwiggs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(484.5,342.3,1.043,1.043,0,0,0,395.8,282.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(249));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_2 = new lib.Bk1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,192.8,1,1,0,0,0,-0.1,-0.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape.setTransform(346.8,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_1.setTransform(332.1,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhHBUQgEgDAAgFIABgOIABgNIABgVIAAgUIAAgTIAAgWIgCgVIgCgUQABgEAEgFQAEgDAGAAQAGAAAHAMQAcAoAUAaQAZAfAfAcIAAgNIAAgOQAAgtgFgcIgCgMQgDgHABgFQAAgMALAAQASAAAABGIAAAiIAAAkIgBARQgCALgKAAQgGAAgIgHQgsgqg3hNIgBAYIAAAYIAAAbIABAbQgBAdgLAAQgGAAgDgEg");
	this.shape_2.setTransform(315.7,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_3.setTransform(300.2,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_4.setTransform(286.5,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_5.setTransform(265,21.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSBOQgNgggRg9IgIgdQgHgWABgHQgBgFAEgDQADgDAFAAQAHAAADAJIAEASIALAlQAJAnALAdIAAgCIAchNIAJgaQAGgQAHgIQADgFAGAAQAEAAADAEQADADABAFQAAADgCADQgHAKgFALIgIAXIgdBOQgFANgGANQgDAHgGAAQgIAAgDgJg");
	this.shape_6.setTransform(251.3,21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgvBPQgCgDAAgFQAAgEACgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgDAfABAbIAAATIABATIgBASIAiAAQAEAAAEADQADADAAAFQAAAEgDADQgEAEgEAAIgSAAIgSAAIgVACIgVACQgFAAgDgDg");
	this.shape_7.setTransform(237.5,21.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_8.setTransform(224,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_9.setTransform(208.7,22.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_10.setTransform(194.4,21.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_11.setTransform(180.5,21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag3BJQgNgOABgeQgBgcANgcQAOgeAUgSQAOgMAOAAQALAAAPAGQAUAIAAAKQAAAEgEADQgCAEgFAAQgDAAgEgDQgQgKgMAAQgHAAgJAIIgMAQQgZAhAAAlQAAAUAGAIQAHAJATAAQARAAAOgMQAQgNAGgYQgeACgVAKIgEABQgFAAgDgEQgDgDAAgFQAAgFAGgEQAWgNA5AAQAFAAADADQACACAAAFQABAHgHADQgGAhgWAUQgUATgcAAQgbAAgOgPg");
	this.shape_12.setTransform(166.1,21.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag2BDQgWgUAAgfQAAgkAWgeQAYghAkgBQAkAAARAQQASAQAAAlQAAAjgUAfQgXAiglAAQgdgBgWgRgAgmgkQgQAYAAAcQAAAWAPANQAPALAVAAQAaAAARgaQAPgYAAgbQAAgbgMgJQgLgLgaAAQgZAAgTAag");
	this.shape_13.setTransform(149.8,22);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_14.setTransform(134.2,21.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_15.setTransform(121.5,21.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_16.setTransform(102.5,21.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhHBUQgDgDAAgFIABgOIAAgNIABgVIAAgUIAAgTIAAgWIgCgVIgCgUQAAgEAFgFQAEgDAFAAQAGAAAJAMQAbAoAUAaQAZAfAeAcIAAgNIAAgOQAAgtgDgcIgDgMQgCgHgBgFQAAgMAMAAQASAAAABGIAAAiIAAAkIgCARQgBALgKAAQgGAAgIgHQgsgqg4hNIAAAYIgBAYIABAbIAAAbQAAAdgLAAQgGAAgDgEg");
	this.shape_17.setTransform(85.5,21.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_18.setTransform(70,21.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_19.setTransform(55.3,22.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_20.setTransform(41,21.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_21.setTransform(27.1,21.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_22.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.UI}]}).wait(249));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(281.5,200.6,535,398.7);
// library properties:
lib.properties = {
	id: '153A83E83444C44899C3F6106E8F9FCF',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/flute_lick.mp3", id:"flute_lick"},
		{src:"sounds/FormulaFuturePerfect.mp3", id:"FormulaFuturePerfect"},
		{src:"sounds/FormulaFutureProgressive.mp3", id:"FormulaFutureProgressive"},
		{src:"sounds/FormulaPastParticiple.mp3", id:"FormulaPastParticiple"},
		{src:"sounds/FormulaPresent.mp3", id:"FormulaPresent"},
		{src:"sounds/FormulaProgressive.mp3", id:"FormulaProgressive"},
		{src:"sounds/FutureProgressiveTense.mp3", id:"FutureProgressiveTense"},
		{src:"sounds/guitar_se1.mp3", id:"guitar_se1"},
		{src:"sounds/multi_bells.mp3", id:"multi_bells"},
		{src:"sounds/presentprogformula.mp3", id:"presentprogformula"},
		{src:"sounds/presentprogressivetenseis.mp3", id:"presentprogressivetenseis"},
		{src:"sounds/PresentProgressiveTense.mp3", id:"PresentProgressiveTense"},
		{src:"sounds/prosawing.mp3", id:"prosawing"},
		{src:"sounds/pro_sawing.mp3", id:"pro_sawing"},
		{src:"sounds/Progressive.mp3", id:"Progressive"},
		{src:"sounds/ProgressiveFormoftheVerb.mp3", id:"ProgressiveFormoftheVerb"},
		{src:"sounds/ProIsSawingTwiggs.mp3", id:"ProIsSawingTwiggs"},
		{src:"sounds/bgmP.mp3", id:"bgmP"},
		{src:"sounds/SlimWasRiding.mp3", id:"SlimWasRiding"},
		{src:"sounds/StaceisPracticingHerMagicAct.mp3", id:"StaceisPracticingHerMagicAct"},
		{src:"sounds/TheAudienceWillBeParticipating.mp3", id:"TheAudienceWillBeParticipating"},
		{src:"sounds/TheKidsSHallBePresenting.mp3", id:"TheKidsSHallBePresenting"},
		{src:"sounds/ThePastProgressiveTense.mp3", id:"ThePastProgressiveTense"},
		{src:"sounds/ThePythonWasSleepimg.mp3", id:"ThePythonWasSleepimg"},
		{src:"sounds/TheRabbitsareApplauding.mp3", id:"TheRabbitsareApplauding"},
		{src:"sounds/twiggswonderingifproknowsmagic.mp3", id:"twiggswonderingifproknowsmagic"},
		{src:"sounds/TwiggsisWondering.mp3", id:"TwiggsisWondering"}
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
an.compositions['153A83E83444C44899C3F6106E8F9FCF'] = {
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