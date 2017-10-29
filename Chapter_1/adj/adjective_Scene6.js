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


(lib.AnAdjAnswersWHICH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAuQgDgCAAgFIAAgFIgBgGQAAgEADgCQADgDADAAQALAAAAAUQAAAFgDACQgCADgFAAQgDAAgDgDgAgHgYQgCgDAAgEIgBgEIAAgDQAAgFADgCQACgDAFAAQAKAAAAARQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape.setTransform(282.6,47.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaA2QgQgFABgKQAAgEACgDQADgDAFAAQADAAAFAFQABACAJACIALABQAHAAAHgCQAJgDAAgGQAAgNgTgFIgJgCQgNgDgFgEQgJgEABgLQgBgVAUgJIARgGQANgDAGgDQAEgCAEAAQAFAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgFAAgDgEQgBgDgBgIIgWAHQgQAGABAKIAGABQAVAEAKAHQAQAKAAATQABAQgOAIQgMAHgQAAQgNAAgLgFg");
	this.shape_1.setTransform(274.6,48.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgEAAQgIAAgBgJg");
	this.shape_2.setTransform(265.1,49);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_3.setTransform(254.2,49.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBHQgDgDAAgEIAAgSIgBgRIABgXIABgWQAAgFACgDQADgCAFAAQACAAAEACQACADAAAFIgBAWIgBAXIABARIAAASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADABQAFgBAEAEQADAEAAAEQAAAFgDADQgEAEgFgBQgDABgEgEg");
	this.shape_4.setTransform(246.6,46.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFBEQgEgCAAgDIABgMIAAgLIgCg4IgVgBQgJgCAAgIQAAgFACgCQADgDAEAAIAUACIAAgOIAAgMQAAgEACgDQAEgCADAAQAJAAABAOIAAAIIAAAHIAAAGIAOgCQAKAAADABQAGACAAAHQAAAEgCADQgEADgDAAIgGAAIgEAAIgOABIADA4IAAAFIAAAFQAAAVgLABQgDAAgCgEg");
	this.shape_5.setTransform(238.9,47.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaA2QgPgFgBgKQAAgEAEgDQADgDADAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAKgDgBgGQAAgNgSgFIgJgCQgNgDgGgEQgIgEAAgLQABgVASgJIASgGQANgDAGgDQAEgCAEAAQAFAAACADQADADAAAEIACAIIABAJQAAAEgDADQgDADgEAAQgFAAgCgEQgCgDgBgIIgWAHQgPAGgBAKIAHABQAVAEALAHQAPAKAAATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_6.setTransform(229,48.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_7.setTransform(219.1,49.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgNADgSQABgIAIAAQAEAAADADQADACAAAEIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEAAADADQACADAAAEIgBAlIAAAUIAAAVIAAAGIAAAHQAAAFgCACQgDADgEAAQgIAAgCgJg");
	this.shape_8.setTransform(208.3,49.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AANBFIABgLIACgKIACgWIgMACQgVAAgNgLQgOgMAAgUQAAgcAQgRQARgSAbAAQAGAAACAEQAEgEAEAAQADAAADAEQADADAAAEQAAAcgDAiIgEAkQgDAVAAARQAAAFgDACQgCADgEAAQgJAAgCgKgAgPgrQgIAMAAARQABALAGAHQAIAIANgBQAJAAAEgKQAFgKABgaIABgaQgCABgFgBIgHAAQgRADgJAPg");
	this.shape_9.setTransform(197.5,51.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghBMQgNgCAAgJQAAgIAJAAIAMABQAIADAKgBQASAAAHgSQAEgMABgYQgGAJgGAFQgIAFgIAAQgSAAgLgMQgLgMAAgSQAAgbAPgQQAQgRAaAAQAIAAAHADQAGACADAFQALAAAAAMQgBAGgCAMIgCATIgCAfQgBAUgEAMQgDAQgKAIQgMAIgWABQgMAAgJgCgAgRgwQgJAMAAARQAAAPAFAFQAGAIALAAQAIgBAKgJQAIgLABgKIAEghIgHgFIgJgBQgSAAgKANg");
	this.shape_10.setTransform(181.3,51.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQAAAEgDADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_11.setTransform(171.2,49);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIBHQgEgDAAgEIAAgSIAAgRIABgXIABgWQAAgFADgDQACgCAFAAQACAAADACQADADAAAFIgBAWIgBAXIAAARIABASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEAEABQAEgBAEAEQADAEAAAEQAAAFgDADQgEAEgEgBQgEABgEgEg");
	this.shape_12.setTransform(163.1,46.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIABAPIAGArQALgdAMgoQADgLAHAAQAIAAACANIAHAjIAGAlIAIgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_13.setTransform(153.3,49.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_14.setTransform(141,49.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJAAAAgKg");
	this.shape_15.setTransform(133.2,46.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJAAAAgKg");
	this.shape_16.setTransform(127.7,46.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_17.setTransform(119.6,49.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_18.setTransform(109.3,46.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_19.setTransform(93.1,49.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_20.setTransform(81.8,46.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGBEQgDgCAAgDIABgMIAAgLIgCg4IgWgBQgIgCAAgIQAAgFADgCQACgDAEAAIAVACIAAgOIgBgMQAAgEACgDQADgCAFAAQAHAAACAOIAAAIIAAAHIAAAGIANgCQALAAADABQAGACAAAHQAAAEgDADQgDADgDAAIgGAAIgFAAIgNABIACA4IAAAFIAAAFQABAVgLABQgCAAgEgEg");
	this.shape_21.setTransform(71.2,47.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_22.setTransform(55.2,46.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_23.setTransform(44.9,49.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_24.setTransform(28.6,49.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_25.setTransform(18,49);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_26.setTransform(7.1,49.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFBEQgDgCgBgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEACgCQAEgDADAAQAJAAABAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgDADgFAAIgFgBIgEAAIgOACIADA5IAAAEIAAAFQAAAVgKAAQgEAAgCgDg");
	this.shape_27.setTransform(303.3,17.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgbA2QgPgFAAgKQAAgEAEgDQADgDADAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAJgDAAgGQAAgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQABgVASgJIASgGQAOgDAFgDQAEgCAEAAQAFAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgFAAgCgEQgCgDgBgIIgXAHQgPAGAAAKIAHABQAVAEALAHQAPAKAAATQAAAQgNAIQgLAHgRAAQgNAAgMgFg");
	this.shape_28.setTransform(293.5,18.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAPgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAGAIALAAQAIAAAHgDIAKgIQgEgZAAgNIABgJIABgKIgFgDIgFgBQgOAAgLAMg");
	this.shape_29.setTransform(283.8,19.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_30.setTransform(273.3,19.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_31.setTransform(264.9,16.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFBEQgEgCAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEACgCQAEgDADAAQAJAAABAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgEADgDAAIgGgBIgEAAIgOACIADA5IAAAEIAAAFQAAAVgLAAQgDAAgCgDg");
	this.shape_32.setTransform(251.5,17.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQAOAGgBAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgDgZgBgNIABgJIACgKIgGgDIgEgBQgPAAgKAMg");
	this.shape_33.setTransform(241.7,19.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgbA2QgOgFAAgKQAAgEACgDQADgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIACAIIAAAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEAKAHQAQAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_34.setTransform(225.4,18.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgIAHQgJAHgGAMIAAA1QABAKgKAAQgJAAAAgKg");
	this.shape_35.setTransform(216.3,19.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_36.setTransform(205.9,19.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgEAFQgDAGgGAAQgIAAgGgdQgEgPgDgZIgDgPIgBgOQAAgFADgCQADgDAEAAQAHAAACAIIACAOIABAPIAGArQALgdALgoQAEgLAHAAQAHAAAEANIAFAjIAIAlIAHgaIAMg1QACgGAHAAQAEAAADADQADADAAAEIgBAEQgIAggMAnQgCAJgHAKQgEAFgFAAQgLgBgGgag");
	this.shape_37.setTransform(193.4,19.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgbA2QgPgFABgKQAAgEACgDQAEgDAEAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQAAgNgTgFIgJgCQgNgDgFgEQgIgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgWAHQgQAGABAKIAFABQAWAEAKAHQAQAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_38.setTransform(181.4,18.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQgBgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAGAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgEAAQgIAAgBgJg");
	this.shape_39.setTransform(171.8,19.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXARgQQAPgRAWAAQAIAAALAEQAOAGAAAHQAAADgDACIgBAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAGAIALAAQAIAAAHgDIAJgIQgDgZAAgNIABgJIABgKIgFgDIgFgBQgOAAgLAMg");
	this.shape_40.setTransform(161.3,19.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#990066").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBADgEIACgpIgBgKIgBgLQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACACAAAFQABAIgKACIgXACIgsADIAAAOIgBALQAAAVAEAFQACACANAAIARAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgJABQgJACgdAAQgeAAgJgIg");
	this.shape_41.setTransform(144.2,16.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#990066").s().p("AgRBHQgMgegOg3IgIgaQgGgVAAgGQAAgEAEgDQACgCAEgBQAIABACAHIAEARIAJAiQAJAjAJAbIABgDIAZhFIAIgYQAGgOAGgIQADgEAFAAQAEAAADADQADADAAAEQAAADgCADQgGAJgEAKIgHAVIgbBGQgEANgHAMQgCAGgFAAQgIAAgDgIg");
	this.shape_42.setTransform(131.7,17);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#990066").s().p("AgqBIQgDgDAAgEQAAgEADgDQACgDAEAAIAWgCIABgSIgBgRIAAgQQAAgWACgiIgMABIgOAAQgDAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAFQAIABAAAJQAAAFgEACQgCADgEAAIgQgCIgQgCQgBAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgPAAIgTACIgUACQgEAAgCgDg");
	this.shape_43.setTransform(119.2,16.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#990066").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgoIgIAAQgWAAgMgCQgIgDAAgHQAAgEADgEQADgCAEAAIAQABIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAHgGgBQgDAAgDgCg");
	this.shape_44.setTransform(107.7,16.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#990066").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgdAXAAIAJAAIAGACQAEgGAFAAQAHAAACAJQABAIAAALQAAAFgCACQgDAEgEABQgHAAgDgIQgDgGgCgBQgCgBgIAAQgOgBgQAWQgYAdAAAZQAAANAIAJQAIAKAMAAQAJgBAKgFQAGgDAMgIQAFgEADgBQAEABADADQADADAAAEQAAAEgEADQgZAXgaAAQgUAAgOgPg");
	this.shape_45.setTransform(94.3,16.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#990066").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBADgEIACgpIgBgKIgBgLQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACACAAAFQABAIgKACIgXACIgsADIAAAOIgBALQAAAVAEAFQACACANAAIARAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgJABQgJACgdAAQgeAAgJgIg");
	this.shape_46.setTransform(82.1,16.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#990066").s().p("AgnBEQgTgOAAgSQAAgMAKAAQAKAAAAAMQAAAIAMAIQALAIAKAAQAHAAADgxQABgXAAgjIAAgKIgGAAIgLAAIgLgBQgFAAgDgCQgCgDAAgFQAAgKANAAIAKAAIAJABIASgBIATgBQAWAAAAAMQAAAEgDADQgDADgEAAIgGgBIgGgBIgMABIABALQAABIgKAhQgGAWgPAAQgRAAgRgMg");
	this.shape_47.setTransform(68.9,17.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#990066").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_48.setTransform(55.3,16.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#990066").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_49.setTransform(40.3,17);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIABgJIAAgJQgBgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_50.setTransform(22.2,19.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_51.setTransform(9.3,17);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBADgEIACgpIgBgKIgBgLQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACACAAAFQABAIgKACIgXACIgsADIAAAOIgBALQAAAVAEAFQACACANAAIARAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgJABQgJACgdAAQgeAAgJgIg");
	this.shape_52.setTransform(144.2,16.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgRBHQgMgegOg3IgIgaQgGgVAAgGQAAgEAEgDQACgCAEgBQAIABACAHIAEARIAJAiQAJAjAJAbIABgDIAZhFIAIgYQAGgOAGgIQADgEAFAAQAEAAADADQADADAAAEQAAADgCADQgGAJgEAKIgHAVIgbBGQgEANgHAMQgCAGgFAAQgIAAgDgIg");
	this.shape_53.setTransform(131.7,17);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgqBIQgDgDAAgEQAAgEADgDQACgDAEAAIAWgCIABgSIgBgRIAAgQQAAgWACgiIgMABIgOAAQgDAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAFQAIABAAAJQAAAFgEACQgCADgEAAIgQgCIgQgCQgBAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgPAAIgTACIgUACQgEAAgCgDg");
	this.shape_54.setTransform(119.2,16.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgoIgIAAQgWAAgMgCQgIgDAAgHQAAgEADgEQADgCAEAAIAQABIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAHgGgBQgDAAgDgCg");
	this.shape_55.setTransform(107.7,16.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgdAXAAIAJAAIAGACQAEgGAFAAQAHAAACAJQABAIAAALQAAAFgCACQgDAEgEABQgHAAgDgIQgDgGgCgBQgCgBgIAAQgOgBgQAWQgYAdAAAZQAAANAIAJQAIAKAMAAQAJgBAKgFQAGgDAMgIQAFgEADgBQAEABADADQADADAAAEQAAAEgEADQgZAXgaAAQgUAAgOgPg");
	this.shape_56.setTransform(94.3,16.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBADgEIACgpIgBgKIgBgLQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACACAAAFQABAIgKACIgXACIgsADIAAAOIgBALQAAAVAEAFQACACANAAIARAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgJABQgJACgdAAQgeAAgJgIg");
	this.shape_57.setTransform(82.1,16.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgnBEQgTgOAAgSQAAgMAKAAQAKAAAAAMQAAAIAMAIQALAIAKAAQAHAAADgxQABgXAAgjIAAgKIgGAAIgLAAIgLgBQgFAAgDgCQgCgDAAgFQAAgKANAAIAKAAIAJABIASgBIATgBQAWAAAAAMQAAAEgDADQgDADgEAAIgGgBIgGgBIgMABIABALQAABIgKAhQgGAWgPAAQgRAAgRgMg");
	this.shape_58.setTransform(68.9,17.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_59.setTransform(55.3,16.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_60.setTransform(9.3,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51,p:{x:9.3}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_60},{t:this.shape_50},{t:this.shape_51,p:{x:40.3}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[]},2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310.2,61.8);


(lib.AnAdjAnswers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAuQgDgCAAgFIAAgFIgBgGQAAgEADgCQADgDADAAQALAAAAAUQAAAFgDACQgCADgFAAQgDAAgDgDgAgHgYQgCgDAAgEIgBgEIAAgDQAAgFADgCQACgDAFAAQAKAAAAARQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape.setTransform(282.6,47.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaA2QgQgFABgKQAAgEACgDQADgDAFAAQADAAAFAFQABACAJACIALABQAHAAAHgCQAJgDAAgGQAAgNgTgFIgJgCQgNgDgFgEQgJgEABgLQgBgVAUgJIARgGQANgDAGgDQAEgCAEAAQAFAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgFAAgDgEQgBgDgBgIIgWAHQgQAGABAKIAGABQAVAEAKAHQAQAKAAATQABAQgOAIQgMAHgQAAQgNAAgLgFg");
	this.shape_1.setTransform(274.6,48.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgEAAQgIAAgBgJg");
	this.shape_2.setTransform(265.1,49);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_3.setTransform(254.2,49.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBHQgDgDAAgEIAAgSIgBgRIABgXIABgWQAAgFACgDQADgCAFAAQACAAAEACQACADAAAFIgBAWIgBAXIABARIAAASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADABQAFgBAEAEQADAEAAAEQAAAFgDADQgEAEgFgBQgDABgEgEg");
	this.shape_4.setTransform(246.6,46.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFBEQgEgCAAgDIABgMIAAgLIgCg4IgVgBQgJgCAAgIQAAgFACgCQADgDAEAAIAUACIAAgOIAAgMQAAgEACgDQAEgCADAAQAJAAABAOIAAAIIAAAHIAAAGIAOgCQAKAAADABQAGACAAAHQAAAEgCADQgEADgDAAIgGAAIgEAAIgOABIADA4IAAAFIAAAFQAAAVgLABQgDAAgCgEg");
	this.shape_5.setTransform(238.9,47.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaA2QgPgFgBgKQAAgEAEgDQADgDADAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAKgDgBgGQAAgNgSgFIgJgCQgNgDgGgEQgIgEAAgLQABgVASgJIASgGQANgDAGgDQAEgCAEAAQAFAAACADQADADAAAEIACAIIABAJQAAAEgDADQgDADgEAAQgFAAgCgEQgCgDgBgIIgWAHQgPAGgBAKIAHABQAVAEALAHQAPAKAAATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_6.setTransform(229,48.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_7.setTransform(219.1,49.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgNADgSQABgIAIAAQAEAAADADQADACAAAEIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEAAADADQACADAAAEIgBAlIAAAUIAAAVIAAAGIAAAHQAAAFgCACQgDADgEAAQgIAAgCgJg");
	this.shape_8.setTransform(208.3,49.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AANBFIABgLIACgKIACgWIgMACQgVAAgNgLQgOgMAAgUQAAgcAQgRQARgSAbAAQAGAAACAEQAEgEAEAAQADAAADAEQADADAAAEQAAAcgDAiIgEAkQgDAVAAARQAAAFgDACQgCADgEAAQgJAAgCgKgAgPgrQgIAMAAARQABALAGAHQAIAIANgBQAJAAAEgKQAFgKABgaIABgaQgCABgFgBIgHAAQgRADgJAPg");
	this.shape_9.setTransform(197.5,51.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghBMQgNgCAAgJQAAgIAJAAIAMABQAIADAKgBQASAAAHgSQAEgMABgYQgGAJgGAFQgIAFgIAAQgSAAgLgMQgLgMAAgSQAAgbAPgQQAQgRAaAAQAIAAAHADQAGACADAFQALAAAAAMQgBAGgCAMIgCATIgCAfQgBAUgEAMQgDAQgKAIQgMAIgWABQgMAAgJgCgAgRgwQgJAMAAARQAAAPAFAFQAGAIALAAQAIgBAKgJQAIgLABgKIAEghIgHgFIgJgBQgSAAgKANg");
	this.shape_10.setTransform(181.3,51.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQAAAEgDADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_11.setTransform(171.2,49);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIBHQgEgDAAgEIAAgSIAAgRIABgXIABgWQAAgFADgDQACgCAFAAQACAAADACQADADAAAFIgBAWIgBAXIAAARIABASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEAEABQAEgBAEAEQADAEAAAEQAAAFgDADQgEAEgEgBQgEABgEgEg");
	this.shape_12.setTransform(163.1,46.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIABAPIAGArQALgdAMgoQADgLAHAAQAIAAACANIAHAjIAGAlIAIgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_13.setTransform(153.3,49.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_14.setTransform(141,49.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJAAAAgKg");
	this.shape_15.setTransform(133.2,46.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJAAAAgKg");
	this.shape_16.setTransform(127.7,46.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_17.setTransform(119.6,49.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_18.setTransform(109.3,46.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_19.setTransform(93.1,49.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_20.setTransform(81.8,46.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGBEQgDgCAAgDIABgMIAAgLIgCg4IgWgBQgIgCAAgIQAAgFADgCQACgDAEAAIAVACIAAgOIgBgMQAAgEACgDQADgCAFAAQAHAAACAOIAAAIIAAAHIAAAGIANgCQALAAADABQAGACAAAHQAAAEgDADQgDADgDAAIgGAAIgFAAIgNABIACA4IAAAFIAAAFQABAVgLABQgCAAgEgEg");
	this.shape_21.setTransform(71.2,47.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_22.setTransform(55.2,46.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_23.setTransform(44.9,49.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_24.setTransform(28.6,49.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_25.setTransform(18,49);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_26.setTransform(7.1,49.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFBEQgDgCgBgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEACgCQAEgDADAAQAJAAABAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgDADgFAAIgFgBIgEAAIgOACIADA5IAAAEIAAAFQAAAVgKAAQgEAAgCgDg");
	this.shape_27.setTransform(303.3,17.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgbA2QgPgFAAgKQAAgEAEgDQADgDADAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAJgDAAgGQAAgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQABgVASgJIASgGQAOgDAFgDQAEgCAEAAQAFAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgFAAgCgEQgCgDgBgIIgXAHQgPAGAAAKIAHABQAVAEALAHQAPAKAAATQAAAQgNAIQgLAHgRAAQgNAAgMgFg");
	this.shape_28.setTransform(293.5,18.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAPgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAGAIALAAQAIAAAHgDIAKgIQgEgZAAgNIABgJIABgKIgFgDIgFgBQgOAAgLAMg");
	this.shape_29.setTransform(283.8,19.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_30.setTransform(273.3,19.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_31.setTransform(264.9,16.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFBEQgEgCAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEACgCQAEgDADAAQAJAAABAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgEADgDAAIgGgBIgEAAIgOACIADA5IAAAEIAAAFQAAAVgLAAQgDAAgCgDg");
	this.shape_32.setTransform(251.5,17.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQAOAGgBAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgDgZgBgNIABgJIACgKIgGgDIgEgBQgPAAgKAMg");
	this.shape_33.setTransform(241.7,19.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgbA2QgOgFAAgKQAAgEACgDQADgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIACAIIAAAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEAKAHQAQAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_34.setTransform(225.4,18.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgIAHQgJAHgGAMIAAA1QABAKgKAAQgJAAAAgKg");
	this.shape_35.setTransform(216.3,19.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_36.setTransform(205.9,19.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgEAFQgDAGgGAAQgIAAgGgdQgEgPgDgZIgDgPIgBgOQAAgFADgCQADgDAEAAQAHAAACAIIACAOIABAPIAGArQALgdALgoQAEgLAHAAQAHAAAEANIAFAjIAIAlIAHgaIAMg1QACgGAHAAQAEAAADADQADADAAAEIgBAEQgIAggMAnQgCAJgHAKQgEAFgFAAQgLgBgGgag");
	this.shape_37.setTransform(193.4,19.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgbA2QgPgFABgKQAAgEACgDQAEgDAEAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQAAgNgTgFIgJgCQgNgDgFgEQgIgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgWAHQgQAGABAKIAFABQAWAEAKAHQAQAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_38.setTransform(181.4,18.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQgBgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAGAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgEAAQgIAAgBgJg");
	this.shape_39.setTransform(171.8,19.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXARgQQAPgRAWAAQAIAAALAEQAOAGAAAHQAAADgDACIgBAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAGAIALAAQAIAAAHgDIAJgIQgDgZAAgNIABgJIABgKIgFgDIgFgBQgOAAgLAMg");
	this.shape_40.setTransform(161.3,19.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#990066").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBADgEIACgpIgBgKIgBgLQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACACAAAFQABAIgKACIgXACIgsADIAAAOIgBALQAAAVAEAFQACACANAAIARAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgJABQgJACgdAAQgeAAgJgIg");
	this.shape_41.setTransform(144.2,16.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#990066").s().p("AgRBHQgMgegOg3IgIgaQgGgVAAgGQAAgEAEgDQACgCAEgBQAIABACAHIAEARIAJAiQAJAjAJAbIABgDIAZhFIAIgYQAGgOAGgIQADgEAFAAQAEAAADADQADADAAAEQAAADgCADQgGAJgEAKIgHAVIgbBGQgEANgHAMQgCAGgFAAQgIAAgDgIg");
	this.shape_42.setTransform(131.7,17);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#990066").s().p("AgqBIQgDgDAAgEQAAgEADgDQACgDAEAAIAWgCIABgSIgBgRIAAgQQAAgWACgiIgMABIgOAAQgDAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAFQAIABAAAJQAAAFgEACQgCADgEAAIgQgCIgQgCQgBAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgPAAIgTACIgUACQgEAAgCgDg");
	this.shape_43.setTransform(119.2,16.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#990066").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgoIgIAAQgWAAgMgCQgIgDAAgHQAAgEADgEQADgCAEAAIAQABIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAHgGgBQgDAAgDgCg");
	this.shape_44.setTransform(107.7,16.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#990066").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgdAXAAIAJAAIAGACQAEgGAFAAQAHAAACAJQABAIAAALQAAAFgCACQgDAEgEABQgHAAgDgIQgDgGgCgBQgCgBgIAAQgOgBgQAWQgYAdAAAZQAAANAIAJQAIAKAMAAQAJgBAKgFQAGgDAMgIQAFgEADgBQAEABADADQADADAAAEQAAAEgEADQgZAXgaAAQgUAAgOgPg");
	this.shape_45.setTransform(94.3,16.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#990066").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBADgEIACgpIgBgKIgBgLQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACACAAAFQABAIgKACIgXACIgsADIAAAOIgBALQAAAVAEAFQACACANAAIARAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgJABQgJACgdAAQgeAAgJgIg");
	this.shape_46.setTransform(82.1,16.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#990066").s().p("AgnBEQgTgOAAgSQAAgMAKAAQAKAAAAAMQAAAIAMAIQALAIAKAAQAHAAADgxQABgXAAgjIAAgKIgGAAIgLAAIgLgBQgFAAgDgCQgCgDAAgFQAAgKANAAIAKAAIAJABIASgBIATgBQAWAAAAAMQAAAEgDADQgDADgEAAIgGgBIgGgBIgMABIABALQAABIgKAhQgGAWgPAAQgRAAgRgMg");
	this.shape_47.setTransform(68.9,17.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#990066").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_48.setTransform(55.3,16.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#990066").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_49.setTransform(40.3,17);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIABgJIAAgJQgBgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_50.setTransform(22.2,19.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_51.setTransform(9.3,17);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBADgEIACgpIgBgKIgBgLQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACACAAAFQABAIgKACIgXACIgsADIAAAOIgBALQAAAVAEAFQACACANAAIARAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgJABQgJACgdAAQgeAAgJgIg");
	this.shape_52.setTransform(144.2,16.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgRBHQgMgegOg3IgIgaQgGgVAAgGQAAgEAEgDQACgCAEgBQAIABACAHIAEARIAJAiQAJAjAJAbIABgDIAZhFIAIgYQAGgOAGgIQADgEAFAAQAEAAADADQADADAAAEQAAADgCADQgGAJgEAKIgHAVIgbBGQgEANgHAMQgCAGgFAAQgIAAgDgIg");
	this.shape_53.setTransform(131.7,17);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgqBIQgDgDAAgEQAAgEADgDQACgDAEAAIAWgCIABgSIgBgRIAAgQQAAgWACgiIgMABIgOAAQgDAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAFQAIABAAAJQAAAFgEACQgCADgEAAIgQgCIgQgCQgBAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgPAAIgTACIgUACQgEAAgCgDg");
	this.shape_54.setTransform(119.2,16.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgoIgIAAQgWAAgMgCQgIgDAAgHQAAgEADgEQADgCAEAAIAQABIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAHgGgBQgDAAgDgCg");
	this.shape_55.setTransform(107.7,16.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgdAXAAIAJAAIAGACQAEgGAFAAQAHAAACAJQABAIAAALQAAAFgCACQgDAEgEABQgHAAgDgIQgDgGgCgBQgCgBgIAAQgOgBgQAWQgYAdAAAZQAAANAIAJQAIAKAMAAQAJgBAKgFQAGgDAMgIQAFgEADgBQAEABADADQADADAAAEQAAAEgEADQgZAXgaAAQgUAAgOgPg");
	this.shape_56.setTransform(94.3,16.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBADgEIACgpIgBgKIgBgLQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACACAAAFQABAIgKACIgXACIgsADIAAAOIgBALQAAAVAEAFQACACANAAIARAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgJABQgJACgdAAQgeAAgJgIg");
	this.shape_57.setTransform(82.1,16.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgnBEQgTgOAAgSQAAgMAKAAQAKAAAAAMQAAAIAMAIQALAIAKAAQAHAAADgxQABgXAAgjIAAgKIgGAAIgLAAIgLgBQgFAAgDgCQgCgDAAgFQAAgKANAAIAKAAIAJABIASgBIATgBQAWAAAAAMQAAAEgDADQgDADgEAAIgGgBIgGgBIgMABIABALQAABIgKAhQgGAWgPAAQgRAAgRgMg");
	this.shape_58.setTransform(68.9,17.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_59.setTransform(55.3,16.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_60.setTransform(9.3,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51,p:{x:9.3}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_60},{t:this.shape_50},{t:this.shape_51,p:{x:40.3}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310.2,61.8);


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


(lib.frb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgqAcIAIgHQAKALASAAQAPAAAMgLQALgMAAgPQAAgQgLgMIAHgIQAOAPAAAVQAAATgOAPQgPAOgTAAQgVAAgPgOg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_rightOut, new cjs.Rectangle(0,0,8.5,8.5), null);


(lib.frb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAXIAHgIQAIAJANAAQAMAAAIgJQAJgJAAgLQAAgMgJgJIAIgHQALANAAAPQAAAQgLAMQgNALgPAAQgRAAgLgLg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_rightIn, new cjs.Rectangle(0,0,6.8,6.8), null);


(lib.frb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_22:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgqAHQAAgTAPgPQAPgPATAAQAVAAAPAPIgHAHQgNgMgQAAQgPAAgMAMQgMAMAAAPQAAASAMALIgHAHQgPgOAAgWg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_leftOut, new cjs.Rectangle(0,0,8.6,8.6), null);


(lib.frb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_23:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAGQAAgQAMgLQALgMAQAAQAPAAANAMIgHAHQgJgJgMAAQgMAAgIAJQgJAIAAAMQAAAMAJAJIgHAHQgMgLAAgRg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_leftIn, new cjs.Rectangle(0,0,6.9,6.9), null);


(lib.frb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAiBICBAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_hitArea, new cjs.Rectangle(0,0,13,13), null);


(lib.frb_dot_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_disabled, new cjs.Rectangle(0,0,4,4), null);


(lib.frb_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot, new cjs.Rectangle(0,0,4,4), null);


(lib.frb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_pressed, new cjs.Rectangle(0,0,6,6), null);


(lib.frb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_disabled, new cjs.Rectangle(0,0,6,6), null);


(lib.frb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background, new cjs.Rectangle(0,0,6,6), null);


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


(lib.twiggshand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgoBFQgLgIgOgFIAAgCIABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAgBQALgngLgoIAAgFIAugSIABgBIApgRIAAAAIAGgDIAFgBQAKACAIAGQAMAIAAACIgBACQgVAFgQAKIAAAAIgHAFIgIAAQAUANANAaIgFgBQgtgRAtAhIAAADQg0gPAlAbIADAAQAFAwgcghQgHAHgMAGIAAABIAAAAIgPAIIAAAAIAAABIgFACIgHgGg");
	this.shape.setTransform(-10.6,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBQIAEgDIgBACIgCACIgBgBgAAABPIgBAAIgDgBQgFgBgDgCIAAACIAAABIgRgBIgCABIAAgBIAAAAIAAAAIAOgJIABAAIAAAAQAMgGAGgHQAdAggGgvIgCAAQgmgbA1APIAAgDQgughAuARIAFABQgOgagTgOIAHAAIAIgEIAAgBQAPgJAVgGIACgBQAAgDgMgHQgIgGgKgDIgFABIgHADIAAAAIgoASIgBAAIgvASIABAFQALApgMAnQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgBAAQgBgEgEgCIgCgCIgFAAQAFgpABgiIABgGIACgDIABgHIAPgHQAIACADgFIAJgDIADgBQAUAAANgLIABgBIAAAAIAMgDIAEgCIABgBIAPgGIAEAAQAnAGAGAnIgKALIgsgHIAAAEQASAHASAGIgEAGIAAABIgBAGIgBAAIgBAFQgEAagFAYIgNARQgHAIgGAAIgHAAIgPgBg");
	this.shape_1.setTransform(-10.3,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.twiggshand, new cjs.Rectangle(-18.5,-1.4,16.5,16.1), null);


(lib.TwigArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AkoAtQgJglgGgMIADAAQALgLAagTIAMgKIAGATQAGAVABAHQgBAnAZAWIAQAAQBFgXBjgdQARgFBlgUQAugKAXgIQAagJAAgHIAAgBQAHgFAIgJIAJgLIgCgEIADgCQAAgGAFgLQAIgPAIAAIACACQAAAFACAFQAFAMAPAAIAEgBQgCAEAAAFIABAEIgGgDQgLgGgFABIgBAEQAEAFAJAHQAJAFADAAIAHAAIABAAIAAACIACAIQAFAIAKAAIALgEQAKgEAAgCQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgCgBQgMAEgHAAIgEgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgCIAFgCQADgBABgCQALgDAWgBQACAIABAFQgBAOgOAOQgWAXgtgMIgDABIAAABQgLAAgGACQgEgHg6ASIgRAFQhgAiglAMQhCAUgpAVIggANIgdALQgIAEgfAFQgeAEgEADIgVABQgSgTgPhBgAEHhNQgGgBgBgCQAIgDABgEQAEgCAagEIAMANQgbAAAAABIgMADIgFgBgAEChmIAAgMIASAAQALAAAHALIAAABQgVABgLAEIgEgFgADrhkQgDgBAAgJIACgDIgBgCQABgFABgCQAIgGAZABIADADQgOgBgGAFQgCADAAAKIAAAHg");
	this.shape.setTransform(32.7,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkqBPQgNgkgIgrIgDABQgBABAAAAQAAAAAAAAQAAgBABgBQABAAABgBIgBgHIABgBQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQACAAADACIANgMQAfgbALgFIgBgDQAAgEAFgCIADAGIABADQAIASAGArQAHAuANAAIAQgFQATgGAIgEQAKgFAXgCQAWgCAEgCQATgJAVgHIAlgLQAugNCNgjIAPgFIANgLQAJgLAGgIIgBgDQAAgOAPgOQAJgKAJADIAAgDQACgGAIgEQAMgGAPAAQANAAAFAGQADAEAAAEIAAACIAGABQAJADAFAJIAJAOIAAABIADADQAGAGACAEIAAAJQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAAACIABANQAAANgIAOQgMAWgaAAIgqgBIAAABIgSAAIgGACIgEABIgEAAIgBAAQgPAGglAKIAAAAQhgAYg+AaQhJAeggALQhiAkgqAAQgYAAgWg8gAkmAuQAQBBARASIAWAAQAEgDAdgFQAfgEAJgFIAcgLIAhgMQApgVBBgVQAlgLBhgjIAQgEQA6gSAEAGQAGgBALgBIAAAAIADgBQAtALAWgWQAPgOAAgOQAAgFgDgIQgWABgKACQgCADgDABIgFACIgBABQAAABABABQAAAAAAABQAAAAABABQAAAAABABIADABQAHAAAMgEIADABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAACgKAEIgLAEQgKAAgEgIIgDgJIAAgBIgBAAIgGAAQgEAAgJgGQgJgGgDgGIAAgDQAGgBAKAFIAGAEIgBgFQAAgEADgEIgFAAQgPAAgEgLQgCgFAAgFIgDgCQgIAAgHAOQgGALAAAHIgDACIACAEIgIALQgIAJgIAFIAAABQAAAHgaAJQgXAIgtAKQhmAUgRAFQhjAchFAXIgQAAQgYgVAAgnQAAgIgHgUIgFgUIgNAKQgZAUgMALIgDgBQAGAMAJAmgAELhWQgBADgIAEQABACAGABIAFABIAMgEQAAgBAbAAIgLgMQgbADgEADgAEEhxIAAAMIAEAFQAMgFAVAAIgBgBQgHgMgKAAgAD7hjIAAgHQAAgLADgCQAFgFAOAAIgDgCQgZgCgHAHQgCACgBAFIACACIgCADQAAAJADABIANAAIAAAAg");
	this.shape_1.setTransform(32.4,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.8,27.8);


(lib.slimlays = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009933").s().p("AgUBYQgVgZgTgbQgUgagbgRIAAgCIAAgFQATgHAKgSIABgBIAIgJQAQgTALgYIAAgCQALACAJAQIACABIAPAaQAIARAHATQACAEgBAGQAHAMAFgVIABAFQAEANAEgGIADgFQAlgGAkgDIgBACQgMASgCAcQAAALAEAIQAPAjgkAAIAAACIgCAAQgXAFgVAAQgbAAgXgHg");
	this.shape.setTransform(10.1,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996633").s().p("AgkBCIAAgDQATAMAWAFIAAAAQgIACgHAAQgSAAgIgQgAAFAVIgDAAIAAgBQgCgDAAgHQALgXAUgPIACgBIABAAQgDAggaAMQgBAFADABIAAAAQAHgBAEgFQALgPAJADQgBADgBACQgPAMgHAUQAGgBACgEQAIgQAIAFQgCAUgUABIAAAAQgLAAAAgYgAgBgOQALgWAQgVIgCABQgSATgQAIIAAgCQAOgZATgWIAAgCIAAgBIAEABQAKAXgJAVIAAADIgCAAQgOAPgQAMQAAgEADgEg");
	this.shape_1.setTransform(63.5,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#666666","#000000"],[0,0.204,0.502],-88.3,-68,0,-88.3,-68,797.5).s().p("ACfA4IAAgDQgIAJgJgCIAAgCQgCgfgPAdIAAAAIgMgBQAEgKAHAJQgDgRgDgBQgDgCgDAPIgCAAIgFAFIAAAAQgDADgDAAIgHgDQgEgDgEgHQgGgFgDALQgEAOgIgUIgDgDQgKAKgIAAQgFgDgBgFIgCgCIgEAAIgDAAQgOgBAHgIQgHgLgNAOQgPAPgBgSQgDgHgDAGIgLAPQgJALgJgRIAAgFQAAgEgBADIgFAIQgMAQgBgaQAFgNACgRIABgCQAYgOAagOIABgCQACgQgDgTIABAAQAlgHAiALIADADIABADQgNAIgFATQAHAGAFgVQACALAAAMQAGgNADgOIAAABQgEARAEAMIAAgBQAagNAKAWIACAAQAHALAPAFQAIADAJAAIABABIASAbIAAACQALACAIAEIACAAIAAADQADAUgKgCIgGACQgLAAgDgNgAiDAoIAAgDQgKgUgBAUQAAABAAABQAAABAAAAQAAABAAAAQgBAAAAgBQgNgIgKgaQgDgEgEgCIgEgCIgBAAIgIgLQABgDADgCIAAgBQATgBAUAFIAPAEIAAACQAMALANABIACAOIgBABQgEAPgKAIQgEACgEAAIAAAAQgEAAgDgDg");
	this.shape_2.setTransform(70.4,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AGzDlQgVgLgKgYQgehIg2gwQgVATgaANIgCABIAAAAQgcANgfAOQhJAehjgEIgCAAQgJgWABgiIAMghIAAgCQAZgNAiAGIACAAIBIgeIAHgDIA7gZIACAAQAMgEAJgGIACgBQAVADATAFIADAAQAVgTAPASIABABQAJAAACgBQABAAAAAAQAAAAAAAAQgBgBAAAAQgBgBgBAAIgCgBQgmgZAQg0QADgMAIgJIABgBIAAgBIACgBQAIgIALgFQAWgHAFALQACAEAAAGIgBADQAPASgGgeIABAAQAOgBACAYIAAACIADgEIAAgEIAAgDIgCgEIgBgEIAAgBQgDgEABgEQAAgFAFgBQAFgBAEADIAAABIAFABIAAgCQAOgBACAKIAAACQAAAKAIAKIABABQACARAGANIACABIAAACIAJAtQgWACgLgJQgNgKgFAGQgCACgBAEIABACQAKAVAUANIAAABIAAAAQACgCgBgDQgCgEgEgGQgFgBAFAAQAggCgSAIIgBACQASACAUgLIAAgCIAHglIABACQAKAWgBAWIgCABQgYAPgaAMIAAACQgPBQgBBdIAAACQgDAJgLABIgCABIAAAAgAFPAgQARAJANANIACADQANAhAVAYIABACQALAPAIATIACABQAGgVAFgXQAEgYgFgUIgBgOQAMABANgJIABAAIABgCIAAgBIABgDIgNAIIgBAAIgCAAQgiAAgKgXIgBABIgIADQgNACgOgLIgDABIgEABQgOALgQgBIAIAFgADrBgQAUAFALgGIgCgBQgfgGgegHQAMAKAUAFgAFeheIAAATQAJARAOALQAJAGAJAEIASAHIAAABQADgBACgCQACgDAAgFIAAgBQgOACgLgCQgQgDgLgMIAAgCQgKgVgEgRIAAACgAGphJIABACIAAABIAEAAIABAAIACAEIACABIABAAIAAAGQgCAGgDAFIAAACIAAABIABABIADAAIAAAAIACgDIABgCIABgBIAAgBIAAgBIABAAIABgBIAAgBIAAgHIAAgGIAAAAQgFgJgIABIgBAAIgBAAIgBACgAGkhxIgBABIAAABIABACQABADADADIACADIABAUIACAAIACgBIABgEIAAgDIAAAAIAAgDIAAgKIgBgBIAAgBIAAgBIgBgBQgCgEgDgDIgBAAIAAAAIgDgCIgBABIAAAAgAmfDKQAOgGANgCQgLgIAdgBQAagBAWgFQATgFARgJQANgGAMAAIAAgBIAFglQAFgygFg4QgGhLAIhHIARgbIACgBQAagEAQAGIACAAIAPALIACABIAGBKIAFBSIAAACIABADQgRgrgTgmIABgDQACgMgMgJIgBgGQgFgFgGAVIAAAQIAAACQAIAJABARIABAAIAAACQADAngIAoIAAAJIAAACIAAADQgLAdgIAiQgDAkANAUIACAAIAEAFQAJAOgPgCQg1gHgmAPQgNAFgLAHIgCAAQgcgCgRgCIAAACIgCABQgIADgFAAQgNAAgCgQgAnlAzIAAgDQgGgbAEgoIgCAAQgCgKgEgIQgEgHgHgFIgBgCQgKgLgBgOQgBgNAIgQIABgCQAJgDACgOQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIACABQADABACAFQAFANgFgaQAGgDABADQAAAQAFABIABAAQABgeARAJIgBACQgNAYAOgNIABAAQACgZAbAAQgBAKgGAFQgPAJAGAGIgHADIgCAAQgIAhgLAdQAGAKAGALIACABIACACIACAAQAlgGAWgUQAXgUAfgNIAAAAQArgsAygmIAHgFIAAgBIAcgXIACABIAFgGIACgBIAAgBIAEgCIAKgJQAHgFAJgEQAHgEAIACIACAFIAGgBIAEADIADADIADADQAGAMACAPQAMBWAJBZQgMAYgQAUIgCACIgBACIgEADIgBgHQgIgngDgsIgCgmQgBgvgSgcIAAAFQgXgMgmAKIAAACQgRASgEAfIAAACQgfAUggASIAAACIgCABIgBAAQgoAZglAcIAAACIgBABQgXAbgUAgIgCABQgKAFgJAAQgHAAgHgDg");
	this.shape_3.setTransform(16.8,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AFBDvIgBgBQgohWg7hDIgCAAQhzBSi6ALIgeAFQgtAGgggNQgIABgDgFQgig1gsgpIgCAAQgHABACgIIASghIAAgCIAAgCQgXg2gVg6QgBASADANIABACIAAACQALA1gOAzIAAADIgBAAQgKAkgHApQAAAXAIAPIABACIACAAQANAFgGANQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgeALgjgIQgHgBgFADQgoAXg3gKQgXANgNgSQgKgPgIgRQAUgMANAQIACAAQBFADAugVIACAAIAAgCIABAAQANgDAGgKIABgCIABAAQAFhVgGhRQAEgHgBgKIgCgGQABgcgKgRIgBgBQgMgHgOALIgXASIgCAAIgfAXIAAAEIAAACIgDABIgCACQgXAEgTAUQgUAUgQAZQgUAggcgRQgFgBABgHQADghgHgaQgEgSgJgPIgCgBIgGgDIgCgDQgDgJgBgKQgCgVAIgXIABAAQAKgHAKgFQAfgPAkgEIACAAQAIAWgZALIgCAAQgFgGAOgJQAHgEABgLQgbAAgDAZIgBAAQgNANANgYIAAgCQgQgJgBAeIgCAAQgEgBgBgQQAAgDgGADQAFAagGgNQgCgFgDgBIgCgBQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgCAOgKADIAAACQgIAQABANQABAOAKALIABACQAGAFAEAHQAFAIACAKIABAAQgDAoAFAbIABADQAPAHARgJIADgBQAUggAXgbIABgBIAAgCQAlgcAngZIABAAIACgBIAAgCQAhgSAegUIABgCQAEgfAQgSIABgCQAmgKAWAMIAAgFQATAcABAvIABAmQADAsAIAnIACAHIADgDIABgCIADgCQAQgUALgYQgJhZgLhWQgCgPgGgMIgDgDIgDgDIgEgDIgGABIgCgFQgIgCgIAEQgIAEgHAFIgLAJIgDACIAAABIgCABIgGAGIgBgBIgcAXIgBABIgGAFQgzAmgrAsIAAAAQgfANgXAUQgWAUgkAGIgCAAIgDgCIgBgBQgGgLgHgKQAMgdAIghIABAAIgIA6IABgCIADgDIACAFQAKARAVgJQAIgEADgFIAHgEIACAAIAAgCIACAAQAbgLAbgWIABgCIAAAAIAGgCQAJgGAHgIQAFAAAJgIIBAg4IAAgCIAegWIAAgCIABgCIADAAQALgLANgJIADgCIAPgGQAQgCAMALIADADQADADAAAEIAAAAQANAhACAqQACAcAFAaIAAACIAIAjIAAADQAAAKACAJIgCAGIAAACQAJAEAEAKQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAIACgDIAAABIAFADIgDAEIAAADIAAACIgCgBQgIgPgMgCIAAACQgLAXgQATIgIAJIgBAAQgJASgUAIIAAAEIAAADQAbASAUAaQATAaAVAZQArANA1gKIACAAIAAgDQAkABgQgjQgEgJABgKQABgdAMgSIABgCQgkADglAGIgBgBQgDgBABgFICJgOIADAAIA4gXIBNgeIACgBIABgCIABgBIABAAIAHgIQAQAAAZADIAAABIACAAQALAGANgGIAGgGIAFgFIABgCIgDgGQAAgNgHgLQgEgaANgaIABgCQAJgIALgHIABgBIApgGIA2gIIABAAQAGgBgCAIQACAEAOgQIABgCIAAgBQgJAKgIgHQANgWAUgFIAHADIAAABIAAACQgTAWgQAZIAAACQASgIASgTIACgBQgQAVgNAWQgCAEAAAEQAQgMAPgPIACAAIAAgDQAIgVgJgXIACABQAOA4ADBFQAAACADADQAQAHAcgCQAbgDANALQAMANgDARIAAACQAbgBAFAUIABACIgCAAQgKgXgaAOIAAABQgEgNAEgQIAAgBQgDAOgGANQAAgMgCgLQgFAVgHgGQAFgUANgGIgBgDIgDgDQghgLgnAHIgBAAQAEASgDAQIgBACQgaAOgYAPIgBACQgCARgFANQACAaALgQIAFgIQABgDAAAEIAAAFQAJARAJgLIALgPQADgGADAHQABASAPgPQAPgOAGALQgHAIAOABIAAAAQgFAEgFgCIgNgDQgFACgEAAQgTgBgCARIgCAAQgTgCgKgMQgBAFgDADIgDAEIgQB5IgBABQgKALgUAAIgCAAgAEvDGQAKAYAVALIACgBQAKgBADgJIAAgCQAChcAPhRIAAgCQAagMAXgPIACgBQABgWgKgWIAAgCIgHAlIAAACQgVALgSgCIABgCQASgIgfACQgGAAAFABQAFAGABAEQABADgCACIAAAAIAAgBQgTgNgLgVIAAgCQABgEACgCQAFgGAMAKQAMAJAVgCIgJgtIAAgCIgBgBQgHgNgBgRIgBgBQgIgKgBgKIAAgCQgCgKgO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");
	this.shape_4.setTransform(27,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slimlays, new cjs.Rectangle(-35.5,-5.9,125.1,47.8), null);


(lib.BubArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai0D7QgRgsAAgvQAAgoAXguQALgXApg/QATggA3hGQALgOAAg2QAAgXASgXIAlgvIABgBQgVAAgLgRQgHgLAAgNQAAgOAJgGIBiAAQAdAQAIAgQAFAlAEARQACAIAUASQAYAUACADQANATACALQACAFAAASQAAAXgaAaQgbAZgCAgIAABrQABBdhKBWQhEBPhAAAQhVAAghhXgAgWi2IADAWIAEAXQgsA4gsBAQhZB8AAA2QAAAnAWAtQAjBKBEAAIADAAIADAAQAxAAAvgvIAUgUQAagdAeg1QAWgnAAgpQAAgZgFg2QAAgzAeglQAfglABgUQAAgZgigeQgigegBgJIgFgwQgHgdgVgNIhcgBQALALAYAPIASAMQATAKAAAWQgDAtgMAGQgIgIAAgJQAAgEAEgLQAEgLgBgEQABgFgIgFQgGgEgEgBIgCAAQgHAAgwBOg");
	this.shape.setTransform(19.8,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhBE/QhFABgihKQgWguAAgnQAAg2BZh8QArg/Atg5IgEgWIgEgXQAwhOAIABIACAAQAEAAAGAEQAHAFAAAFQAAAFgDALQgEALAAAEQAAAIAIAJIABABQAMgHAEgtQAAgWgUgLIgTgLQgYgPgMgMIBdABQAVANAHAeIAEAvQABAKAjAeQAhAdAAAaQAAAUgfAlQgeAlAAAzQAFA2AAAYQAAApgWAoQgfA1gZAdIgUAUQgwAugzAAIgDAAg");
	this.shape_1.setTransform(19.6,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.6,67.6);


(lib.bk2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],1712.1,-121.6,1712.1,136.4).s().p("AKiTKIAAgBQARg7AAgZIAAgNIgFgBQgPAAgdAYQgcAYgHAEIAAAAIgBgCIAAgJQAUg3AAgcQAAgGgDgBQgyBhg0AAQgHAAAAgQQAAgQANgmQANgnAAgIIgBgKIgFAAQgSAAgvApIAAgNQADgWAKgjQAIgbAAgXQAAgHgDgDQghAsgLAMQglAkgTAUQgFgJAAgTQAAgVgDgHQg0BNgQAAQgLAAgFgPQgGgQgCAAQgEAAgFAcQgHAigEAIQgQgKgFgOQgCgKgDgFIACgDQAEgIAAgEQAAgVgXgLQgXgGAAgDQAAgDALgKQAKgLAAgGQAAgRgygVIAAgBQAPgZADgWIABgNQAAgqhLgCIADgLQgNgggRAAQgGAAgMgcQgNgbgMAAQgJAAgJAHIgOAJIgIgOQgIgKgSAAQgjAAgGAYQgQgZgmAAQgjAAAAAXQAAANAGAVQAAABgUAFQgUAFAAAPQAAAJADAJIAAAYQgIgEgIAAQgoAAgDArIAAAHIAAALQgEgBgFgBIgHABIgHgRQgVgqguAAQgiAAgiAkIgBgBQgNg1g5AAQgjAAADAVIgJgGQgKgFgTAAQgRAAgHAEQgMAIgBAdQgIgMgLAAQgKAAgLASIgCADQgIARgEAEQgCgHgFgFQgGgHgOgCIgJAAIgPAAIgCABIABACIgCAAQgMAMgCAAQgTgLgSABQgRgBgNAKQgKAIgDAIQgBACAAAMQgbADgRAFQhHAZAAAjQAAAMACAJIAHAZQgmAJgPAUQgLAVgFAIIgHgGQgCgBgaAAQgZgBgLADQAtgyABgQIgDgDIgDgBQhhA+gsANIgBAAIABgBQAfgOAMgYQAHgMAMgaQAagnAAgoQAAgJgEgEIh7BVIgBgBQAGgOATg6QANgoAFgTIACgNQABgNgGAAIgEACQgFALgJANQgZAng9A5IgfhgQgjhmgLAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAIAAgCIABgNQABgWgGAAIgEACIgKBiIgDAmQgBAgADAYIgBAAQgggigPgWIgEgFQgXgsgNgSQgOgVgRg1IgPgyQgIAAgSA9QgQA3AAAIQAAAOAHA1IAAAFIAAALIgdgQQgUgLgGgHIgZgmIgFACIAAAaIAHAcQAHAgAKAhQAPA0AHAEQgiAcggATIAAAAIAAgBQAJgVABgPQgBgVgahuIgCgHQgNhggLgqQgMAcgPA7QgIAigJAYQgFARgGANIgMgeIgNggQgQgkgUgZQgcghgogqIgfghQgPgPgCAAIgFABQABAFAEAJQAMAeAlBRQAXAzAHAnQADASAAAOIgBARQgRgcgQgVQgQgUgOgNQhbhUgSAAIgEADQAEAJA8BlIADAEQAiA9AEAoQgHgOgKgKQgVgWggABIgIABIgBAHQAAACAWAvQAVAxAAARIABAaQgHgHgOgHQgbgQgDgRQgJg6gpAAIgXADQAAgKgHgLQgIgOgIAAQgHAAgbATIgeAWIgBgBQAJgKAAgLQAAgOgFgNQgLgagfAAQgOAAgHAEQgHACgSABQgCgBAAgJIAAgPQAAgLgNgFQgRgGgnAEQAIgMgYgRQgagSgmgCQACgbgDgPQgHgfgZABQgeAJgFABQAKgXAAgJQgBgKgHgKQgHgJgLgEQgLgGgQAAIgmAIIgEABQgLgLgSgJIgLgGQgOgHgOgDIgIAHIAG+VMBQdAAAIAAblQAJBvgMBbIgBAAIAAABIAAADQgPAQgLAVQgJgHgKgGQgRgLgTAAQg3AAggAdIgFADQgSARgFATIggAZQgbAWAHAZQgpAGgSAPIgFAFIgEAGQgJAagGALQgFgDgGgCQgMgEgbABQgkgBgKARQgDAGAAAPIAAANQABAJADAEQgSADgMAEQggAHgrATIgCABIABgCQA/hlASgiQAHgNAAgCQAAgCgEgCIggATIhdA1QhWAwgaAZIgEhNIAEhHQAAgagFgKQgLAOgPAkIgEAIQgOAfgHALQgtBGgDAfQhXh2gKAAIgFACIAAAJQAXBXAAAjIAAAZQg6hDgCAAQgDAAgCADQAJAbAbA4QAFAOACAdQABASAEAMQgRgGgZAAIgcABQAGgWgZgKQgHgDgVADQgSADgTgPQgFgEABgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgDgBg8gBQAAgIAJgNQAKgNAAgFIgBgGIgHgBQgNABgEADQgDADgKAAIAAgCIAHgXQAAgdg8gBQgGgvgxgBQgaAAgMASQgGAIgCAKQgZgbgSAAQgZAAgIASQgEAJAAAMIgJgOQgIgLgLABQgNgBgNAQIgNAOQgxAAgQALQgJAGAAARIABAPQgkgGgKAJQgFAFACAHQAAAPAEAJIABABIgDgBQgIgBgTAKIgJAGQgXgIgGAAQgOAAgMAKQgHAEgDAFIgaABQgqACgdAIQgDABgCAEIgDAAIgEABIgFACIgDAAIAAgFQAAgCgDgDIgGAKIgOABIgJALQgIAJgIAFQgEgIgDAAQgLAAgfANQgcAMgHAGgAwVC5IACAIQAJgHABgFIgMAEgA37ieIAFAAIgBgCIgEACg");
	this.shape.setTransform(295.6,121.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C25812","#FF9933"],[0,1],-5.8,26.5,-13.5,-2.4).s().p("AhyCDQgHgJgJgIQgHgHgJgGQgfgVgTgTQgQgQgEgYQgBgagDgNQAIAMAbARQAeATARAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIAAgFQgCgQgOgcQgMgaAAgYQABgSAGgFQAIAJADAVQALAeARAAQAOAAAGgoQABAIAGANQAKATALAAQATAAAnhpIAAAAIALBMIgBASIADABIAgggQAGgJAMgXIABAAIAABLIgHAXIADAEQBFgtAWgtIAAABIgRA3QgJAegMAYQAAAEACABQAQgMApgXQAdgSAIgMIggA5QgQAagpAlIADAEQAmgTBHgoIAAAAQgUAaglAgQgfAbgTAJQgLAFgIAAIgGgFQgGgDgGAAQgHAAgMADQgNAEgQAHQglAHgRAFIAAgBIATgWQAVgdAAgPIgBgGIgCgBIgVAhIgNASQgQATgJAAQgGgRgIAAQgcAXgEAAQgQAAgFgIg");
	this.shape_1.setTransform(244.8,238.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FEDD92","#D2A679"],[0,1],1685.8,-183.8,1703.9,-11.9).s().p("AviALIADAAIAAABIgDgBgArPgJIABACIAAAAgAPigKIABgBIAAABIgBAAg");
	this.shape_2.setTransform(142.7,253.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#CCCCCC","#6A6A6A"],[0,1],205.4,-15.1,205.4,4.4).s().p("Ah7BNIgVgGIAAgBQAJAAAMgDQAZgHAogTIAegQIAUgMQASgLAKgJQAVgWA1giQAdgSAKgJQAOALgCAkQAAANgGArIgCAMIgBAKQAAAEgCAFIgCAAIgFABIAAAEIACACQgLAMgaAMQgmAQgTAAQhmAAg4gOg");
	this.shape_3.setTransform(57.9,247.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#919191"],[0,1],198.5,-13.5,198.5,6).s().p("AjwBKQgPgKgDgPIAAgIIgBgGIAIgGQAZgQAigQQAigRAqgQQBqgrA6AAIABADIgoAYQgqAZgVAbQgLAOgXAPIgVAMIgTAJQgkASgcAGQgOADgMAAQgEgJgEAAQgDAAgBAFIAAAHIABAAIgLgGgABWBGIgQgHIAIgWIACgMQAEgXABgfIAXgTQAcgQAtAAQAcABAZAhQAVAaAEAdIABAMIAAAFQAAAIgOALQgUANgiAAQgTABhXgJg");
	this.shape_4.setTransform(64.8,245.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF9933","#660033"],[0.008,1],125.1,-26.6,125.1,38.8).s().p("ABdETIgBgBIAIgJQAcgjAAgOQAAgBgEgDQgaASgegBIAAgOQAFgPAAgEQAAgHgHAAQgLAAgjASIgpAUIgBgCQAOgdAAgIIAAgDIgFgBQgXALhbAnQAGgRAAgNQACgRgIABQgfAlgIAHQgWATglALIgIACIgNADIAAgDIAAgDQABgIAEgDQASgVAAgVQABgJgJgDQgigMgJAGIgCACIgEgHQgCgDABgOIgBgHQARgDAMgJQAMgLABgKIABAAIACglQAAgSgVgxIgVgtIAFgBQAnAJAOAXIAJAVQAEAMAGAGIAEgBIAAgQQAAg2gihBQgYgtgpgzIABAAQBFArArA1QAkAuAPAzIAFgCIAAhQIgCgPQgHgmgYg1QgjhHgOgjQB4B+AfBHQALAZAAASIgFAQQgFAPABAMQgBADAFAFQARgUAAgMQAAgMANgyIAHgbIAXhSIAAAAQADAlAUBIIADAMQAWBLAAArQAAAKgGAPQgGAQAAAHQAAAFAEABQBFgqBdhaQgIAPgDAaIgHAqQgRA7gXAaQAAAEAFABIA7grQAsgfAngPQgNAdgwBFQgrA/AAACIAAAFIAFABIAjgRQAngSATgDIAAABQgXAggiAaQgOAMgfAOIgCABIgRAHQgNABgCABIgBACIAAABQgVAGgQABQgQgBgJgJg");
	this.shape_5.setTransform(129.7,222.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF9933","#980189"],[0.008,1],88.3,-28.6,88.3,36.8).s().p("AiHEIQgQgGgMgDIgOgCIASgIQAbgOAMgKQA8g6AAgJIgBgDIgJgBQgUAAggAMIggAOIABAAQBeiEAAgXIAAgFIgEgBQgNAAgrAbIg9AoIAAgBQAGgSAOg+QAOg+ABgNQAAgEgFgCQgwA1gsAkQgWhEgMgwIgGgZQAKANAPAMIAIAHQAbAUARAAQAHAAAAgTIgBgIQgHgxAAgSQAAgbAIgSQARglAFgSQANA/AqA9IAeArQA4BQAIAAQABAAABAAQAAAAABAAQAAAAAAgBQABAAgBAAIABgFQgGgVgDgUIAAghIAAgIQAAgnAGgYIAGgXQACAWAiBIIAEAIQAFAOAMAqQAJAfALASQAbggBKhOQgbBNghBNQAAAFAGABQAPgWAvgfIBLgxIACADQgBAQgfBBIgLAWQgHANgHAHQgyAdAAAJQAAABAAAAQAAABABAAQAAABAAABQABAAAAABIAEAAQAVAAA1gaQAtgVAWgQIABAAQggAzg6AyIg0AnIAAACQABADAGAAIBEgZIABABQgEAQgsAWQgoASghAHIgGACIgfAJQhCAUgOAAQhUAAgfgLg");
	this.shape_6.setTransform(166.6,224.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#67E473","#015C13"],[0.008,1],76.2,-26.6,76.2,38.9).s().p("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");
	this.shape_7.setTransform(178.7,222.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#67E473","#015C13"],[0.008,1],61.6,-144.6,61.6,30.4).s().p("AY9DmIAAgBIABABgAYJDmIACgDIABADgAWSDmIABgBIAAABgAVPDmIAKgFIAAABIABAEgAUjDmQAGgHAEgMIAFALQADAFAHADgAMPDmQAHgGAigBQA6gCAAgWIgBgHIANAAIgBADQAAAEACAEQAAACABABQAAABAAAAQAAAAAAAAQAAAAABgBIAGAGQALAHARAAIAFgBIAwAAIACABIBAAAIAKABQAhgCAKgGIALAMIAGAGgAHEDmQAIgJAFgKIABgBIAAABQgCAHgKAMgAEuDmQAIgHACgEIAMALgAiLDmQAHgDAEAAQADAAADADgAjfDmIAQgFIAPgFIAGgCIAAACIAAABIACAIIABABgAp/DmQALgCARAAIADACgA49DmIABgBIAAABgAuXDkIACgBIABACIgDgBgApBC4IABgBIABADgArCCzIAAADIAAAAgAJZCuIABgBIAAABIgBAAgAswChIABgBIAAACgAhiCbIABAAIAAABgAKvCHIAAAAIAAABgAJEB4IAAABIgBAAgA0FBtIAGAAIgEADgAIMBeIAAgBIAAABgAR9BSIADAAIAAACIgDgCgAnxA3IAAABIgBABgAY2A3IAAgBIAAABgAggAiIAAAAIAAABgAJeAUIAAgBIABABgAIHAHIAAAAIAAAAgAVGgWIAAAAIAAAAgAHGgXIABAAIAAAAgAvWjlIABAAIAAABIgBgBg");
	this.shape_8.setTransform(198.2,227);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#ADFC36","#BB9500"],[0.008,1],-82.2,-11.2,-82.2,13.7).s().p("AifCWIgKgHQgVgPgKgYQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAIAVAbIAHAIIgyABQgFgDgBAAIgXgBIgDABIgGgGQgKgLgKgMIAAgCQgLgQgGgEQgbgogJgsQAMATAVATQAaAXAOAAIAEgBIABgGIgXhAQgKgfgCggQAOAZAGAJQAZAgAMAAIAEgBIAAgSIgCgZIABAAQAhAiAGAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQgBgRAAgJQAAgQAJgBIgFAFIADABQADAAADgCIAHAUQACAFAJAIQAKAIAFAAQANAAAFhAIAAAAIAGAQQAEAJAOAAQAKAAATgXIAkgtIAAAAIAAABIgCAeQAAARANAAQAEAAAqguQAqgtAHgKQgDAVgJAjQgIAcAAAXQAAAMADAFQAJgOA7giIAAAJQgDAKgOAnQgJAZAAATIAAANQADAMAQAAQAPAAAbgVQAegWARgdIABAAQgQA1gBAJIAAAHQABAIAHAAQAGAAAagXQAbgYATgEIAAAOQgFAPgGAeQgIAVgBAXQABAEADABIABgBQADgOAXgLIAbgJQAYgGADAAQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQgXANACAVQgWADgGAKQgCADAAANIAAAKIADAFIgVgBIgCABIgCAEQgDAFgWAAQgPAAgIgJIAAAAQgFgJgBAAIgNAJQgMAGgKAAQgKAAgBgGIAAgLIgEAAQgIAHgGAEQgJAFgHAAQgWAAgCgCQAAgDgHAAQghALgUAAQgDAAAAgJIAAgCQgBgHgFAAIgPAHQgNAFgKAAQgKAAgCgFIgBgDQAAgLgBgDQgHAMgUAAQgNAAgEgYIgDgBQgDAAgJAQQgFAKgIAEIgHABIgFgBQgEgDgHgHIgJgMIgDABQgBAFAIAQIAFALQAAAJgKAAQgRAAgVgNg");
	this.shape_9.setTransform(337.3,235.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#67E473","#015C13"],[0.008,1],580.5,-51.2,580.5,14.3).s().p("Ag3BYIgLgJIgGgFIgFgEIgCABIgCABQgFACgCADIgJAAQgCgCAAgNIAAgPQADgLAIgCIgGgFIgFgDQgDgDAAgIQAAgSAOgDIAJgDQAIgDABgFQgCgIADgEQADgFAKgGIAOgIIALgLQAFgHAIgEIAMAAIABAAIABABIABAAIADABIAEgCQAEgDAHAAIABgDIACABIACACQAlgNAegBIAACVIABAAQAOAAAAAFQABACgGADQAHgBAAAFQAAADgEACIgJABIgKAAIgPAAIACADIghAAQgEgDgEAAIgBABIgBADIgFAAQgGAAgEgCIgCAAIAAACIgEAAIgGgFIgMAAIgLAFQgIACgTAAIgDAAg");
	this.shape_10.setTransform(376.7,247.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FEDD92","#3CCC49"],[0,1],1639.1,-483.2,1699.1,-256.4).s().p("EgoLAHRIAAlEIgGAAIAAkZIACgBIABAAIAFgEIABAAIAAABQADAHgCANQACAMAZAMIAnASIAEABQAsALBTAAQBVAAAcgWQALgJAIgPQAiASBbAAQAkAAAXgQQATgNAAgOQANAXA8gRQAkAAAPgIQAQANA2AAQATAABcgKQAEAAAKAGQAJAGAMAAQATAAAGgDIAEABQAPAAAPgIQAIgFARgCIAfAAIALAJQANAJAfABQAMAAAegNQAlAAAAABQALAIAFABQALABAGAHQAPAFA7AAQAvAABhgdIAoAAQAFAGAQAAQALAAAJgEIADgCIARAAIADAGQAMAJAwAAQA3AAAJgHQBTAAApAJQApAJANAAQAeAAgHgFQAsAAAPAEQADAAARgMIAQgLIAAAAIACgCIAWAAIAOAMIAGAKQAKAKASAAQAIAAAXgYQAIAAAFATQAVgMAPgPIACAAQgJAKgQAOIAAAHIAEABIA2gNIA8gQQAHAAAHAJQAHAAAPgIQADAIALAAIATgEQAvAAACAFQAdAAgBgKIAEAEIABACQAAABAAABQABAAAAABQAAAAAAABQAAAAgBAAQAIgBAaAAQAwAAAAgJQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAIFQAAIAIAIIAAABIABAAIACABIADAAIA5AFIAegBIACgBIAAgEIACABQATARAZAAQAQAAAAgQIgBgIQAFAFALAAQAIAAAHgIIAZAAQAFACAHAAIAHgCIALAAIAAAEQADAIAPAAQAOAAAYgMIABAAQAAASANAAQAKAAAlgLQAMAAALAFQAWAAANgMIADAAQAAADACACQAFAIAPAAQAKAAARgNIABAAQAJAPAgAAQAKAAAEgEQADgEAbAAQgCAFgBAGIgBAOIAAABIAAADQAAAEABADQACAJAEACIALAAIAEgDQACgCADAAIAIAIQALAIARAAQAJAAAMgDQAMgEAEAAIAEADQADACAHAAIAEAAQAOACAUAAIAkgEIAFABIAZADQAmAAAygcIAQAHQARAGANABQAbgBAKgOQAGACAHAEQAJADAQAAQARAAADgFQABgHADgDIAWAKQAPAFAVAAQAOAAAHgEIAQgIQAHAKAUAAQAPAAAGgFIAIgIIAHAIQAIAEAZAAIASAAIADgEQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQABABANAAQAaAAAKgHQAFgEADgEQADAAAIAFQAIAFAIAAQAHAAAIgFQAHgFADAAQACAAAJAHQAIAGAHABQAIAAAFgGIAHgJQAGAGAOAAQAtAAAxgcQAHAHAbAMQAuAVA7AAQA0AAAsgNQAOATAlgIIBDgRQAfgJABACQABACAFAEQADACAYAAQBNAAAsgbIADAAQABAJAIADQAPAGA4ABQAyAAAPgMQAEAQAKAEQATAHBFABQAigBAggIQAxgOAQgDQACAHALAGIAAgSIAAlDIAEAAIAAOhg");
	this.shape_11.setTransform(295.4,264.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FF9933","#660033"],[0.008,1],324,-52.6,324,12.8).s().p("AinAPIgBgCIANgIIAGADQANAGAJAAQAVAAALgLIADAAQAEAHAFAFQAHAIAIAAQAJAAAQgIIAUgMQASgNAZgVIACACQgKAOAAAJIABAGIAFAAQBxgaAmgYIAAAAQgTAYgaARIghAMIgIADIgUAJQgQAIAAAFIAAADQABAFACAEIgHACQgnAJhMAAQgRgBhOgjg");
	this.shape_12.setTransform(477.6,248.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#67E473","#015C13"],[0.008,1],332.5,-30.9,332.5,34.6).s().p("AtAEgIAAgCIAJgCQAEgBAAgEQAAgFgHACQAGgEgBgCQAAgEgOAAIgBAAIAAiXIAEAAQARAAACAFQACAEADAAQABAAABAAQABAAAAAAQABAAAAgBQAAAAgBAAQACgIAFgGQAJgMASABQAFgBAIAFQAJAEAFAAIAIgDQASgLAHAMQACAEACAAQACAAAHgKQACgEAAgIQgFgTAAgJIAAgIIAhAAIAMAGQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAAAIAAgKQgFgNADgLQAJgVAwAAIAIAFQAHAAAJgOQAKgQAKAAQAGAAAMAPQAMANAHAAQAEAAABgCQgFgOACgKQADgRAdAAQAFAAARAPQARAPAFAAQADAAACgGIAEgNQAJgUAjAAQAKAAAZAnIgBALQAygOAKAhQAAAGgIATIABAHIAJABQAFAAAVgGQgEAKgIAJQgEAGAAAIQAAAFADADQALANAHAAQAEAAAGgHQAOgOATAPQAFAEACAHQACAFAEACQAtgIAVALQAMAHAAAIQAAAFgJALQgBAEAFABQAIgFAgAAQAaAAATAKQAOAIAAAHQAAAMg2AjIgCACIgVAMQgrAXgeAAQgVAAgBgFQgBgHgEABQgDgBgGALQgIAKgHAAQgXgPgHAAQgDAAgDAGQgFAFgNABQgEgBgIgHQgKgIgCAAIgFABQAIAUgzAAIgIgKQgEABAAACIAAADQgBACgiAAQgJAAgIgJIgKgKIgGABIACAMQgDAIgbAAQgJAAgDgHQgDgHgDAAIgJAIQgJAHgiABQgPAAgRgNIgQgNIgGACQABAEAFALQgBAJggAAQgFAAgJgGIgLgIQgEACgDAJQgHAIghAAQgkgQgDABQgrAYgaAFgAJdD0QgCgIgEgDQgDgDgEAAQgEAAgHADIgKADQgQAGgeAAQgnAAgVgHIgEgCIgLgEIgCAAIADgCIAKgGIA2gnIgCgEIgFgBQhCAZgPABQAJgIAagYQAdgcAAgFIgBgCIgFgCQhFAIgnAHIDJh5IgGgEQigAWgXAFQCchWASgXQADgDAAgCIgBgCQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgCABIiAAjIgKAAIAAgFQgEgIABgJIAAgOQAIgNAfAAQAcAAAOAGIAOAFQAEAAAAgCQAAgZAOgTQAGgHAIgHIAOgKIAVADQAQACADgQQACgJAAgJQAAghAdAAIAQABQAGgnAWgUQAYgWAsAAQAeAAAVAOIAVAOQACAAAIgNIAKgQIAEgFIAACCIAABIIAAFCIgGgEIgFgEIgGAEQgNAGglAIQg0ALgaAAQhHAAgQgOgAhVDoIACgBIABACIgDgBgAIhAnIAAAAIAAABg");
	this.shape_13.setTransform(469.1,226.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#ADFC36","#BB9500"],[0.008,1],291.4,32.6,283.1,3.8).s().p("AhXC5QANgDAOgGQALgFANgHIAZgQQAlgcABgRQAAgGgGAAIhBAeQgxAPgkAHIAAAAQAGgNABgKQACgLgJAAQgsAigZAPQgSAKgGAAQgGAAgHgKIAAgBQgGgLgFAAQgEAAgIAHQgFADgHACQgGABgLAAIgDgBIgKgEIAqgYQAAgIgLAAQAIgEAAgJQgDgQgQgIIAAgaQAAgagEgLQgMgWgIgdQANAIAIAQQAJAUADADQAKgSAAgjQAAgPgIgtQgHgogEgLIAsA5QAmAwAKAaIAEgBQgFgpAig8IAfgxIAOgaIAMgXIABAAIAAAdQgEAMAAAeIAEA0IgBAaQAAASAGAJIADgCQALgfBOgsQAsgZBYgwIABABQgVAkhDBuQABAFAEABQBHgjA3gMQBXgSAfgKIhiA6QhLAtAAAIQgBAFAFABQARgGBFgKQA8gKAigDIAAABQjLByAAAHIAEAGQAVgKAkgFIBFgIIAAABQgjAxgzAaIgKAEQAAABAAAAQAAABAAAAQABABAAAAQAAABABABIAEAAIAbgJIBJgaIAAABQgNAEgKAKIgKALIgLAIIgHAEQglAShZAAIgIgFIgHgBQhVAWgkAAQglAAAVgZg");
	this.shape_14.setTransform(493.1,232.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#67E473","#015C13"],[0.008,1],357,-148.2,357,26.7).s().p("AJ6DBIADgBIAAABgAC1C1IACgCIABACgAEtCmIAAABIgBAAgAKiCcIAAgBIAAABgAEpCSIABAAIABACgArhBeIAAgBIABABgALhAAIABAAIgBAAgAJkhHIAJAAIgJACgAI0imIABAAIAAABgAFNjAIAAAAIAAABg");
	this.shape_15.setTransform(450,230.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#67E473","#015C13"],[0.008,1],-117.4,-120.9,-117.4,54).s().p("AAABMIgBAAIAAiCIAAgQIAAgDIAAgCIABAAIACAAIAACXIgCAAg");
	this.shape_16.setTransform(553,203.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFgCIALgDQgBAEgIAHg");
	this.shape_17.setTransform(191.6,140.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FEDD92","#3CCC49"],[0,1],1568.3,-537.4,1628.3,-310.6).s().p("AAAgBIAAgDIABAJQgBgDAAgDg");
	this.shape_18.setTransform(366.1,253.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("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");
	this.shape_19.setTransform(295.2,181.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.6,-1,515.9,312.2);


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


(lib.frb_background_pressed_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_pressed();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_pressed_1, new cjs.Rectangle(2,2,6,6), null);


(lib.frb_background_disabled_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_disabled();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_disabled_1, new cjs.Rectangle(2,2,6,6), null);


(lib.frb_background_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_1, new cjs.Rectangle(2,2,6,6), null);


(lib.frb_frame = function(mode,startPosition,loop) {
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
		//																	  n*/
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
	this.highlight3D_mc = new lib.frb_rightOut();
	this.highlight3D_mc.parent = this;
	this.highlight3D_mc.setTransform(1.5,1.5);

	this.highlight_mc = new lib.frb_rightIn();
	this.highlight_mc.parent = this;
	this.highlight_mc.setTransform(2.2,2.2);

	this.shadow_mc = new lib.frb_leftIn();
	this.shadow_mc.parent = this;
	this.shadow_mc.setTransform(1,1);

	this.darkshadow_mc = new lib.frb_leftOut();
	this.darkshadow_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.darkshadow_mc},{t:this.shadow_mc},{t:this.highlight_mc},{t:this.highlight3D_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_frame, new cjs.Rectangle(0,0,10,10), null);


(lib.frb_dot_disabled_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(disabled_mc, "foregroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.disabled_mc = new lib.frb_dot_disabled();
	this.disabled_mc.parent = this;
	this.disabled_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.disabled_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_disabled_1, new cjs.Rectangle(3,3,4,4), null);


(lib.frb_dot_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(dot_mc, "radioDot");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.dot_mc = new lib.frb_dot();
	this.dot_mc.parent = this;
	this.dot_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.dot_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_1, new cjs.Rectangle(3,3,4,4), null);


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


(lib.twiggshand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twiggshand();
	this.instance.parent = this;
	this.instance.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.twiggshand2, new cjs.Rectangle(-18.5,-0.3,16.5,16.1), null);


(lib.twiggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twiggshand2();
	this.instance.parent = this;
	this.instance.setTransform(40.8,20,0.998,0.998,55.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAbQAGgLANgKQAPgLAPgIIAbgNIANgDQgGARgKANQgJAMgOAHQAAgDgCgDIgCgBQgIgDgKABQgKAEgCAMIAAADIgQgDg");
	this.shape.setTransform(23,-44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#996600"],[0,0.667],-604.2,-133.6,1034.2,-133.6).s().p("AAFDeQgFgJgIgHIgIgFIgIgBIgJABIgJAFIgKAFIgEACIgDgHQgBgDgCgCIgGgFIgEACIgDAEQgIAKgDAJIAAgKQgBgNgJgFIgFgBQgOADgLAIIgDAFIABgIIgCgLIgEgCIgDAAIgEABIgDABIgKAEIgCAAQgPgkADgnIABgQIABghIABghIAAggIgBgkIgFhBIgEgpIgDgVIgDgVIgCgOIgEgOQgBgFACgEIADACIAdAGIAJACIAVAGIAfAHIAfAFIAhAFIAgACIAkADIAoABIAUAAIAVAAIAVgBIAVgBIAWgCIAEAAIAAABIgHBDQgGArgCAsIAAAAIgBAeIABAoIABAmIADAlQACAOgBAPIAAASIgBAIIgBAGIgDAMIgCAFIgGAHIgGAAIgDAHIgEAFIgFADQgCACgDAAIgFAEQgNAAgKgGIAAAKIgJgDQgGgCgFgDIgcgPIgCACIgGAGIgKgJIgKgGQgQAOgJAVIgIgLgAiehhQABAdgDAUQgDATgBARQgBAoALAgIAIASIAAAFQgHA2ARAfIACAAQACghgEgcQgFgbgKgWQALhCgBg7QgBgagDgYQgDgZgGgWIgHgXQAAAvADArgAhlh1QAOB1gTBTIABATIACAIQAIAhAGADQAFADADgaIgJgYIgBgFQAThmgdhyIAAAFgAAUi/IgfgBIgggCIgggEIgfgFIglgIIgLgCIgLgEQgHABgFgEIgDgGIgBgGIAbAEIAUADIAaAGIAbAGIAYAAQAYAAAXAEIAQAEIAPABIAggBIAagBIAYgCQAjAAAkAGQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgUAFgTACIgnADIglABIgTAAIgTAAg");
	this.shape_1.setTransform(-33.5,51.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(31,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgaENIgXAAIgWgCIgcgDQgTgCgSgEIgmgIQgOgDgOgHIgUgLIgWgMIgDgbIgCgcQAOgPAJgVIAHgTIAlgfIANgMIABgCIAZgNQAEABAEACQAJAHAIAJIAJAMIAKAMQAKAMARADIAdAHIAZAIQgMAPgMAOQgOAQgPAOIgQANQAEAAAEgCQAIgBAIgEQAJgEAKAAIALgBIgFAFIAFAIIAFgDQAFgFADgHIAJgWIDHgQIAEADQAFAQgDASQgCAOgEAMQgFANgHALQgJAOgPAFIgmAIQgSAFgUACIgcADIgjADIgRAAIgWAAgAgNCOIAKgKIAFgEIAJgBQAUgCATgEIAjgFQAQgDARACQAPACANAKIgSAGIglAFIg4AGQgZACgXABgADNiDQgRgKAAgWIAAgOQAAgQALgMQAQgSATAJQATAKgDAVQgBASgIARQgIASgSAEQgGgCgEgDgAAAjkIgNgFIAOgLQASgMAWgIIAPgEIgCAEIgDAHQgHAOgPAIQgNAHgOAAIgCAAg");
	this.shape_3.setTransform(-22.8,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("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");
	this.shape_4.setTransform(-4.5,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("Ah4BuQACgTAFgRQAEgOAFgNQADAKAAAKQAAAQgCAPQgCAMAHAKQAGAIAEAJIABACIglAJIAEgmgADzCMQAEgOADgRIACgTQABgLgBgMQgBgLgDgKQgCgLgEgJIgKgUQgIgNgLgMIADgDIAOARIAIAHQAHAJAFAJQAJAPAFARQAEAQAAARQAAAQgFARQgDALgGAOgACdCEIgBgJIAJgYQAFgKADgMQADgMACgMQACgMAAgNIAAgcIABgCQgIgKgKgFIgcAAIgEgDQgIgHgHgDQgEgBgCABQgUgBgOAJIAFAEQAEAEACAFQAHANgEAQIAAABIAGgOQAFgJAHgJQADgDAEgBIALAHIAEAOQAOAxgVAwIgCAAIgQgLQgbgQgZgTQgFgeARgWIgGAHQgHAHgHgEQgFgPAFgRIgOAAQgEAEgBAFQgGAXAAAWQgZAIgdACIAAAMIACACIACAEIgEAEIAAAHIgEgCIgEADQgGAHgGAFQgSAOgNARIgCgJIgFgTIgDgZQgBgLAFgLIAYgrIADgEQgJASAJAVIAbAJIADgTIgNABQgLgLgBgPIAFgIQANgcAbgOQAJgEAJgBQAYgFAZABIAEADIAFABIAGAFQgJAMgOAEIASgBIgIALIAUgDIAEgCQAIgEACgHQAJAAALgFQADgBACACIABAAIABgEQADgEgBgEQgBgJAFgJIgGgGQgBgaAQgSIANgKQALgIARgFQARgGAJAOIgHAGQgTAFgPAKQgZASgKAeQgDAJACAGIAGAGQAhgbAmgKQAFgCAGABQgnAUgdAcQABAGAGADIADABIAGABQAKgDAFgHIAJgBIAAAFIgBACIgCACIgHADQAGAIANAKQAMAJAIASQAJAUAAAXQgBAKgDAKIgMApIgOAIIgCgEIAIgYQAEgLACgMQACgOgCgOQgBgPgEgNQgFgPgKgMIAHAcIADAOQACAUgCAVQgCAXgLAVQgCAEAAAGIgBgBIgHADQgGAAgFgFgAhKBoIAAgBIAAgBIAAgEIAAgfIgIAAQgDASALATgAikB7IAFgWQAGgSAJgPIAUgfIABABQABAHgBAIQgCAMgFANQgHAWAEAZgAi3B7QADgUAGgSQAFgPAJgNQAMgPAOgKIAEgDIACgBIAAADQgJAGgHALIgNAZQgJASgHAWIgBAKgADkBzQgEgHgBgKQgCgUADgQQAEgXgHgWQAKAKAGAPQAJASAAAUQAAAWgIAUIgCABQgFgDgDgFgACKB3QgEgGAAgFQgBgIADgJQAEgMADgNQAIgkgIglIACABIAPARQAFAQACAQQACALgCAKQgDAOgFAOIgIAVIAAACIgHAFgAjHBQIAKgRIALgRQALgPARgMIAVgMIALAJIgBACIgCACIgHABQgLACgKgBIgJALIgBABQgMASgMAUIgBAAIAAAIgAjaAyQAHgSAPgMQAMgJANgIQAIgDALgBIABADIgDACQgMAIgIAIIgPATIgLARgAjfgJQAPgJAPgGQASgHATgGIABADIg7AgIgCADgAkLgLQAIgOANgKQANgNATAAIAhgEIAVAAIABADIgKACIAAAFQgWAFgUAIQgPAHgOALIgOAMgAhbAAIgEgGIgCgBQgKgPgLgJIgTgTQgGgIgIAAIgMAAQgsgGgqAHIALgGQASgKAVgEIAcADQALABAMgCQARgGgDAJIAAABQARANAMAUQAIAOAGAPQAEAJgDAAIgBAAgABag0IAAgCIAKAAIAGAEIgQABIAAgDgAj0hXQAggeAoARQARAIAJAMIgNgHIgFAAQgoABglAJg");
	this.shape_5.setTransform(4.9,-61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("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OIAAgBQAEgQgHgOQgCgFgEgEIgFgEQAOgJAVABQACgBADABQAHADAIAHIAEADIAcAAQAKAFAIAKIgBACIAAAdQAAANgCAMQgCAMgDAMQgDAMgEAKIgKAYIACAJQAEAFAGAAIAHgDIABABQAAgGACgEQALgVADgXQABgVgCgUIgDgOIgHgdQAKANAFAPQAFANABAPQABAOgCAOQgCAMgEALIgIAYIAAAEIACAAIAOgIIAMgpQAEgKAAgKQAAgXgIgUQgJgSgMgKQgNgKgGgIIAHgDIACgCIABgCIBOAFIgNACIgOAMQAPALALARQAGAJAFAKQAGALADAMQAJAggMAeQgGAOgKALIgFAAQAGgOADgLQAFgRAAgQQABgRgFgQQgFgRgJgPQgFgJgGgJIgJgIIgOgRIgEABIABABQALANAIAOIAKAUQAEAJACALQADAKABALQABAMgBALIgCATQgDARgEAOIgCAKIgtArQADAFACAEIAAABQAQANAFASIgEAEQgMAIgMAFIgBABIgBgBQgHgCgGgDIgDgDQgYASgdAJQgVAFgYABQglABgkgJIgTgFIgKD2QgUASgSAOQgSAPgTANIAAAyIAAAAQAAAGADAHIAEANQAFANAKAMQADAGAGACIABAAIAnAMIADgEIAPAGQAJAIAMgCIAAAAIAOAFIAEABIAEACQAHACAGAAIANAEIARAFIAWAGIAWAEIASAEIAbAGIAAAJIgXgFIgEgBIgSgFIgYgFIgWgHIghgIIgCAAIgIgDIgUgEIgFgCIgEgBIgegJQgKgEgJAAIgKgBIgGgCIgGgCIgJgEQgEgEgEgEQgIgMgGgOQgFgLgCgMIAAAAIAAAAIgBgDIAAgFIgBgLIAAgUIACglIADgbQADgaAGgZIAFgbIAJgdIAKgbIADgGIACgHIAGgNIAFgMIAAACIgFALIgEAKIgCAJIAAABQAAAIABAIQACAIAEAHIAGAIIAEAAIAHgDQADgBACgDQADgCABgDQACgGAAgHIgBgPIgBgFIgEgTQgCgKAAgLQABgWADgVQADgVAIgVIAUAAIATACIAVAFIAUAHIAEABIgCgQIgCgRIADgRIAEgSIADgFIAAABIACABIAAACIAAAIQgCADAAAEIACAGIAAABIAAAIQABAHACAGIABAEIACAEIABACIAAACIABADIABAEIABABIAEAFIACABIACABIANgCIANgDIAKgFQAJgFAJgHQAHgHAGgIIAFgJIgCAAIgHgCIgHgCIgEgCIgHgGQgDgDgBgEQgCgHAFgIIAHgIQAKgJAFgOIAEgJIABgCIgCgBIgDgBIgDAAIgGADIgHACIgBgHQgDgIgGgIIgHgKIgJgKQgLgJgMgFQgSgJgTgEQgKgEgKgBIgegDIALgIIADgDIADgDIAFgGIABgEIgXgBIgKAJIgFAGIgEAFIgCAGQAAAGACAFQAEAHAHAEQAGAFAIADIACAHIgCAAIgCACIgFAAIgGgBIgSgHQgEgCgCgDQgCgGgCgGIgFAGIgDAIIgBABIgBgFIgBABIgLAIIgKAKIgJALIgDAEIAAABIACAFIABABIABAAIABAFIAGALIAFAKQAEAEAFADIAJAHIAAAFIgCAJIgCAIIgFALQgFAKgHAJQgEAFgGAEQgGAEgHACQgRAGgSAMIgCAEIgFANIgGALIgEAMQgFARgDASQgEAWgBAXIAAABIAAgBIAHgVIAJgWIAKgUIANgUIABgBIgBAEIgGAVIgGAWIgKAlIgBAGIgIAiIgQBRIgGAqIgGA1QgCAJABALIAAACQgCAGAAAHIACAPIABAIIAAAWIAAAEQAAAHADAGIgDAAIgFAAIAJAGIAEADIAOAHIARAJIASAFIAkAKIALACIAJAAIADABIARAFIAAAAIASADIASAEIADAAIAdAFIABAAIATAFIAQADQAXADAXAFIACAAIAkAHIAJACIgBAGIgLgCQgegEgdgFIgIgCIgJABIgFAAIAEAFIgKgBIgEgDQgWADgWAFIgTAEIgTADIgRgBIgMgFIgHgCQAbgBAcgFIAWgFIAUgHIgSgEIgFgFIgIgBQgMACgKgFIgBAAIgEACIgDgBIgQACIgfADIgcADIgPACIAPAOIAQALIjHAQIgKAXQgCAGgGAGIgEADIgGgIIAGgFIgLABQgLAAgIADQgIAEgIABQgFACgDAAIAQgNQAPgOAOgPQAMgOAMgQIgZgIIgdgHQgSgDgJgMIgKgMIgJgMQgIgJgJgGQgEgDgEAAIgZAMIgBACIgOAMIgkAfIgHATQgJAVgOAQIABAbIAEAcIAWALIATAMQAPAHAOACIAlAJQATAEATACIAcADIAVABIAYABIAWAAIASgBIAjgCIAbgEQAVgCASgEIAmgJQAPgEAJgPQAGgLAFgMQAEgNACgNQADgSgFgRIAJAHIAEANQABAIAAAIQgBALgDALIgFAPIANgCIA5gKIArgHIAagDIAZgDIAagCIAZgDIAFAAQgUAOgSARQgfAcgZAgIgFAGIgGAIQgPAZgKAbQgHAPgIAPQgSAggMAjIgEAKQgQAogdAkQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgBADIgRAVIgcAfIggAdIgQAOQANAZAaAFIAMACQAZgCAUgLQAPgIARgGQANgFAQgBQAogIAnAEQAIgBAKgDQAJgBAKgEQAIgFAJgHIACgCIADgCIgFgUIgIgIQgDgDgBgEIgEgOIgCAAQgQAVgbAJIgPAGIgVAFIgdABQgSABgRgEQgNgCgKgDIADAAIAOACIAXAAIATgFIAXgJIACgBIgRgFIgjgGIgSgGIAAAAIA7hNIAAgJIANgPIAWgfIAXgfIAVggIALgSIABgDQAMgFAIgLIAjgyIArg5IAGgHIAJgMIACgDIABgBQgEAFgGADIgBABQAAgJgHgFIgBgBIAYgeIAFgIIgBgGIgLgEQgXgHgagCQABgIACgIIAVABIAVAHIARAJIAHAGIANgPIACgTIAAgFQgBgLgJgFQgMgFgMABQgCgLgIgHQAIgEAGgGQAGAAAEgBIABATIAvASIAIgKQAIAIAJAFIgDAEIASAGIAIACIADAGQAFAHADAHIgZgIIAAAFIABAoIABAIIgPAFQgBgPgDgPQgDgRgHgPIgOAPIgFAHIAAAFIgDAVIgDATQgCANgBAMIgDAGIgHAAIAAABIgBAAIgCgkIABgSIgHAKIgDAEQgCAPgJAOIgBABIgCABIgBAEIgdAkIADABIgBABQgIAGgCAHIgCAAIgCAEIgNARIgOARIgOARIgPARIgCADIgDACQgIAHAAAJIgpA+QgZAlgcAiIgCADIgLARIgmAyIASgDQARgBANAJIAGAFIAGAFQAGAEAAAGQAVACASgIIAHgEIAFgGQAIgHABgMIAOgEQALgBAHALIAJAMQAJANAEAQQABACgBADIgCAGQgFAJgMADQgIANgQAIQgNAHgOABQgXAFgWAAIgOgBIgNAAIgqgDIgQAKQgaAQgeAGIgOAAIgMgBQgUgFgRgLIgFgPQAIgRAKgNIAOgPIAPgPIAQgNIACgCQAPgJAIgOIAEgKIgNgFIgNgEIgOgIQgNgJgNgKIgDAAQgGgBAAgGQgCgCgBAHQgFASgOANIAEAIQAEAGAHAFQATAPAagGQAGgBADADIABACIAAAIIhGgKIACAQIABAHIABAFIAGAKIACAEIADADIgNACIgCAHIAAAGIAAANIAAABIAAALIAAAKIAAAPIAAAFIAFAHIADAFIADAGIAAAEIAAAFIgBADIgKAFIgJgBIgJABIgGAEIgGAGIgDADIgUABIgFAGIgBACIgCACIgEADIgFAAgAkxLRIAIAFQAIAHAGAJIAIALQAKgVAPgOIAKAGIAKAJIAGgGIACgCIAcAPQAFADAGACIAJADIAAgKQALAGAMAAIAFgEQADAAACgCIAFgDIAEgFIADgHIAGAAIAGgHIACgFIADgMIABgGIABgIIABgSQAAgPgCgOIgDglIgBgmIAAgoIAAgfIAAAAQACgsAGgrIAIhDIAACGIAMgMIASgUIAVgZQAOgTAKgTIALgYIAJgZIAGgaIADgPIgUAHIgZAGIgoAGIgXABIgBAAIABAFIAAACIABABIAAAAIACAEIABADIAAAPIgFAAIgVACIgWABIgVABIgVAAIgUAAIgogBIgkgDIghgCIgggFIgggFIgegHIgVgGIgJgCIgegGIgDgCQgCAEACAFIADAOIADAOIADAVIACAVIAFApIAEBBIABAlIAAAgIgBAhIgBAhIgBAQQgCAnAOAkIADgBIAJgDIADgBIAEgBIAEAAIADACIACALIgBAIIADgFQAMgIANgDIAFABQAKAFAAANIAAAKQADgJAIgKIAEgEIADgCIAGAFQACACABADIADAHIAEgCIAKgFIAJgFIAJgBIAIABgAg9INIAJAHIAGADIAEADIAJADIADACIAEAHIAJADQAEACAFABIAJAEIAEADQADgIAIgKQAPgVAKgWIAAgDIACgDIAGgOIAFgMIAHgSIANgdIAIgOQAIgOAHgRIALgbQAIgTALgQIAHgJQAcglAngcIhHAFQgLAVgPATQgMAOgKAPIgSAZIgJAMIgRAZIgRAZIgOAUIgWAYIgYAZQgHATgMAPQgHAJgIAIIADgBQAFAAAEADgABKECIgmAJIgEAMIgFAQIgNAcQgHATgJARIgOAXIgOAVIgBACQgMAWgSATIgVAYIgWAWIAAArIASgMIABgBIANgOQANgPAJgRIAJgOIAGgHQATgWARgYIAwg+IAjgwIAXgdIAJgNIgWgBIgUACgAm6ExIAKADIAmAIIAeAFIAgAEIAgACIAgABIAmAAIAlgBIAngDQAUgCATgFQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQgkgGgjAAIgYACIgaABIggABIgPgBIgRgEQgXgEgYAAIgXAAIgcgGIgagGIgTgDIgcgEIABAGIADAGQAFAEAHgBIAMADgAhfCbIgkAGQgSADgUACIgJACIgHADIgJAKIAAAFQAXAAAagDIA4gFIAlgGIASgGQgOgKgOgBIgQgCQgJAAgIACgAh+BvIgQAPIgSAQQgDADgEACIgFADIAAABIAWABIAYAAIAmgBIAfgCIAfgEIAbgEIAUgCIgHgCIgBgBIgBAAIglgJQgdgHgdgMIgCgBIgDACIgEgIIgHgGIgBgBQgNAGgNALgAk0BKQAEAFADAHQAFAJADALQACAGAEAGQADAEAFADQAPALAVAEIAaADIAcgCIAZgFIAQgRIAdgdQAQgQAOgSIAAgSIABgaQgBgPACgRIADgoQACgcAFgdIAGgkQABgIgCgGQgEgNgHgDIgFANIgNAeIgOAdIgPAaQgIAQgNANIgXAYIgZAXIgZAWIgQANIgPAJIgcAOIgLAGIgBAEIgBADIgCACIgBAAIgJAKgAFkCEIAAAAIAAAAgAASimQgLAMAAARIAAAOQAAAVARALQAEADAGABQASgEAIgSQAIgRAAgSQAEgVgTgJQgHgEgGAAQgMAAgKAMgAiMjgQgVAHgSANIgPAKIANAFQAQABAOgHQAPgIAGgOIAEgHIACgFIgQAFgAEHmLIgBABQAAALAHAIQACADAAADIAIABQARAEAMgMIAAgCQgGgNgLgLIAAgCIgBAAQgOABgNAIgAD3maIAAgCQACgMALgEQAJgBAKACIABACQADADAAADQAOgIAJgMQAJgNAGgRIgNADIgbAMQgQAJgPAMQgNAKgFALIAPACIAAAAgAE/ohQgDAQACAUQABAKAEAHQADAFAFADIACgBQAIgUAAgWQAAgUgIgSQgHgPgKgKQAHAWgEAXgADuodQgDANgEAMQgCAJAAAIQAAAFAFAGIAFABIAHgFIAAgCIAIgVQAFgOAEgOQABgKgBgLQgDgQgFgQIgPgSIgCgBQAIAmgIAkgAhEqaIAMAAQAIAAAGAIIATATQALAJALAPIABABIADAHQAFACgFgMQgFgPgHgOQgMgUgSgNIAAgBQAEgJgSAGQgMACgLgBIgcgDQgUAEgTAKIgLAGQAYgEAYAAQATAAATADgAC5qUIAAADIAQgBIgGgEIgKAAIAAACgAEHrPIgHACQgNAJgGAMIgGATQAQgNATgJIAXgKIAAAAQADgDgEgDQgJgFgKAAIgGABgAiVq3IAEAKQAkgJAogBIAFAAIANAHQgJgMgRgIQgOgGgOAAQgYAAgUATgAmpKwQgRgfAHg2IAAgFIgHgSQgMggABgpQABgRADgTQAEgUgCgdQgDgrAAgvIAIAXQAFAWAEAZQACAYABAaQABA7gLBDQALAWAEAbQAEAcgBAhgAl6KZQgGgDgIggIgCgIIgBgTQAThTgOh2IAAgFQAdBygSBnIABAFIAJAYQgDAXgFAAIgBgBgAg6B4IAEAAIgDAAgABJiRIABgCIgBAFIAAgDgAAMocIAIAAIAAAfIAAAEIAAABIAAABQgLgTADgSgAIDrdIABAAIAAAAIgBAAg");
	this.shape_6.setTransform(-4.6,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAJQAKgPAMgNIAPgPQgCAHAAAHIAAAFQABAGAGAAQAEAAADgCQgFALgQAXIABgDIgEADQgJAHgMABIABACIgRACQACgNAKgNg");
	this.shape_7.setTransform(17.7,-49);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("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");
	this.shape_8.setTransform(-4.5,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AhdCXQgEgTgBgRQAAgPABgNQAFAIADAKQAFAPADAOQADAMAJAHQAIAGAHAIIABABIggAUIgIglgAiYCQQAAgQAFgPQAGgSAKgOQABgCADgCIABgBIABADQgHAIgDAMIgFAdQgCATAAAXQAAAFACAFIgIADQgEgUAAgTgAiFCaQAAgSAEgRIAKgkIABABIAFAOQABAMAAAOQAAAWAMAXIgfAIIgCgXgAg9COQgGgIgFgJIgLgWQgEgLABgMIAKgwIACgFQgDAUAPASIAcAAIgCgTIgNAFQgOgIgFgNIABgLQAEgdAWgWQAHgGAJgEQAVgNAYgHIAEADIAFgCIAHADQgFAPgLAIIAQgGIgDANIARgKIADgDQAGgGAAgIQAJgDAJgHQADgDACACIABAAIAAgEQABgFgCgEQgEgHACgLIgHgEQgJgYAJgWQAEgHAGgGQAIgMAOgKQAOgKAOAKIgGAIQgQAKgLAPQgTAYABAgQgBAJAEAGIAHADQAYgjAhgWQAEgEAGgBQgfAfgTAlQADAFAHAAIADABIAGgBQAIgGADgIIAIgEIACAFIAAACIgCADIgGAFQAJAFAPAFQAOAGAOAPQAPAQAGAVQADAKAAAKIABArIgLAMIgDgDIABgZIgCgYQgDgOgGgMQgFgNgJgLQgJgNgNgJIAQAZIAHAMQAIARAFAUQAEAYgDAXQgBAEACAGIgBAAIgGAFQgGABgGgDIgEgJIACgZQABgLgBgMIgDgZQgCgLgEgLIgJgcIABgCQgLgIgLgBIgaAIIgFgBQgJgEgIgBQgEAAgCACQgTAFgLANIAGACQAFACADAEQALAMACAPIAAABQAAgGABgHQACgMAEgKQACgEADgCIANACIAJAOQAcApgGA0IgCAAIgSgFQgfgHgdgKQgOgbAKgaIgFAIQgEAJgIgBQgJgNAAgSIgPAEQgCAGABAFQABAXAIAVQgWAQgaALIADALQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAIACAEIgBAEIACAHIgFgBIgDAEQgDAJgEAHQgOASgHAVIgEgIgAhGBjQACASARAOIAAgBIAAgBIgCgEIgJgdgAitCAIAFgUQAGgSANgQIAPgSIAOAFIAAADIgCABIgGAEQgKAFgKADIgFAMIAAACQgHAUgEAXIgCABIADAHIgOAFIAEgTgAjMB8QAAgTALgQQAIgNAKgLQAHgGAKgEIACADIgCADQgJALgFAKQgFALgEAMIgFAUgAkOBRQADgQAJgOQAJgRARgFIAfgOIAUgGIABACIgJAFIACAFQgUALgQAOQgLAMgLAPIgJAQgACTBGQgCgIgBgIQABgNgBgNQgFgkgSgiIACABQAKAFAJAHQAKAOAHAOQAFAJACAKQABAPAAAOIgBAWIAAADIgFAGIgGABQgFgEgDgFgAjkBFQALgOANgKIAfgXIACADIguAwIAAAEgAECAjQgBgJgCgJQgDgLgFgKQgEgKgGgJQgGgJgGgIIgQgQQgMgLgOgIIACgDIATALIAKAFQAJAGAIAIQANAMAKAOQAJAOAEAPQAFAPABASQABALgCAPIgLABQAAgPgDgRgADvAwQgGgGgDgIQgJgTgCgPQgEgXgNgTQANAHAKALQAOAPAGASQAHAVgCAVIgBACQgGgCgEgDgAhjAlIgGgFIgCgBQgPgKgNgGIgYgMQgIgEgIABIgLADQgsAIgmAVIAJgKQAOgPATgJIAbgGQALgCALgGQAOgLAAAKIABAAQAUAHARAOQAMAMALAMQAHAJgEAAIAAAAgAkQACQAVgmArAEQATACAMAJIgPgDIgEACQgmANggATgAA4hEIgBgCIAKgDIAHACIgPAGIgBgDg");
	this.shape_9.setTransform(-3,-60.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah6MnIgFgBIgEgEIgGgFIgGgGQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgHAHIgBgBIgDgHIgCgHIgDgFIgEgEIgDgCIgDgBIgLAEIgGAJIgFAFIgGAFIgFADIgGACIgHABIgHAAIgIAAQgMgIgJgJIgFgFIgGgCIgGgCIgGAAIgGABIgHADIgIACIgDAFIgEADIgHAGIgIADIgJgBIgDgBIgEgLIgDgHQgFgLgLgBIgFABQgMAHgOgDIgKgCIgDAAIgMgEIgLgHIgNgIIgLgLIgLgNIgLgPIAFAHIAFAFIAFAFIAEADIAFADIADABIAEABIAIgGIACgJQACgGABgHIABgRIABgxIAAg0IAAgRQgCgeABgfIAAgUQgBgqgDgnIgBgVIgDgUQgBgKgCgKIgBAAIgBgBIgEgJIgDgKIA3grIgBgBIgBgHQgCgMABgMQAAgJACgIIAAgBIAFgOIAGgOIAGgNIAHgNIACgEIAKgIIAKgJIAJgKIAJgJIACgBIAAgDIAVgJIAUgJIADgCIABAAIAAgiIAaABIAUgMIATgLIASgMIAQgOIARgNIAPgQIAOgOIAOgRIASgaQAKgOAJgRQAPgSAJgVIANgkIgWgQIgEACQgPASgXAHQgSAGgVgGQgRgGgNgLQAegJAbgQQANgIALgJQAJgGACgIIgEgIQgDgFABgJIACgPQACgLAKABIAEADQAGAHAEAIQADAIAJACIAAAKIABANIACAEIAHADIAPgFIAfheIACgCIAHgEIASgLIAQgMIADgDIABgCQADgJgHgJQgIgJgLAAIgTgdIgBgBQgHgIgHgGQgJgHgDgMQgDgPgFgPQgDgJgFgJQgBAOAAAOQABARAEATIAIAmIgBAAQgKgJgEgKQgMgXAAgWQAAgOgBgMIgFgPIgBAAIgKAkQgEAQAAATIACAWQADAPAGALQAEAIAGAIIgEgBIgGgFQgNgPgFgRQgCgFAAgGQAAgWACgUIAFgcQADgNAHgIIgBgDIgBACQgDABgBADQgKANgGATQgFAPAAAQQAAATAEAUIAEASIgTg7IgDgIIACAAQAEgXAHgVIAAgBIAFgNQAKgDAKgFIAGgDIACgCIAAgCIgOgFIgPARQgNARgGASIgFATIgEATIgBAJQABAVACAVIADATIAAAFQgGgSgEgUQgDgOgCgQIABgdIAFgTQAEgMAFgLQAFgKAJgMIACgDIAFgGIgHADQgKAEgHAHQgKALgIANQgLAQAAATIgBARIAAAdQAAAUgCARQgIgPgFgQQgFgPgCgQQgBgPABgPQADgUAHgSIAAgEIAugxIAAgBIgCgCIgfAYQgNAKgLAOIgaAlIABAFQADASgGAQIgCAAIgJgOIANgqIAJgRQALgPALgLQAQgOAUgLIgCgFIAJgGIgBgCIgUAHIgfANQgRAGgJARQgJAOgDAQIgDADIgEAEIgEgDQgGgHgEgIQAMgXAHgcIgKgeQAPgRAVgKQANgEAOgBQAYgDAYAEIABgBQAEAEAFACIgCACQAVAQAYANIAQAIIACABIAAgBQAEABAFgCIAAACIABAHIADgBQAHgFAFgGQAKgLgBgQIAfgZIABgCQAWgFAVgJIATgGIABAAQAGgBAFgFIAFgFIADAEQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAGAAAGgCIAFgBIABAAQAAgEgBgEQgOgkASgkQAEgFAEgIQAHgDAEgGIABgBIAMgBIgCgFIATgJIANALQAFAFAFAHQAEAGAFADIACAHQACAFAFAEQAMAGAOABIAKAAQgaAJgRAUQgIAJgGAJIgGAIIBbgcIgSAMIgbANQgJADgJAEIgEACIgKAEIgIAEQgDAJgIAFIgGABIgDAAQgHgBgDgFQATgkAfgfQgGABgEADQghAWgYAjIgHgDQgEgGABgJQgBggATgYQALgPAQgKQADgBACgCQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgOgKgOALQgOAKgIALQgGAGgEAHQgJAXAJAXIAHAFQgCAKAEAIQACADgBAFIAAAEIgBABQgCgCgDADQgJAHgJADQAAAHgGAGIgDAEIgRAJIADgNIgQAHQALgJAFgOIgHgDIgFABIgEgCQgZAHgVAMQgJAEgHAHQgVAVgEAfIgBAKQAFAOANAHIANgFIACATIgcAAQgOgRADgVIgCAGIgKAwQgBAMAEAKIALAXQAFAIAFAIIAEAIQAHgUAOgTQAEgGADgJIADgEIAFAAIgCgGIABgFIgCgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgDgLQAagLAXgPQgIgVgBgZQgBgFACgFIAPgEQAAARAJAOQAIACAEgKIAFgIQgKAaAOAcQAdAKAfAHIASAFIACgBQAGg0gcgqIgJgNIgNgDQgDACgCAEQgEAKgCAMQgBAHAAAHIAAgBQgCgPgLgMQgDgEgFgCIgGgCQALgOATgFQACgBAEgBQAIABAJAEIAFACIAagJQALACALAHIgBACIAJAcQAEAMACAMIADAZQABAMgBALIgCAZIAEAJQAGADAGgCIAGgFIABAAQgCgFABgEQADgYgEgXQgFgUgIgSIgHgNIgQgZQANAJAJANQAJALAFANQAGANADAPIACAXIgBAaQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIABAAIALgNIgBgqQAAgKgDgLQgGgVgPgQQgOgPgOgGQgPgFgJgGIAGgFIACgDIAAgBIBLgVIgMAHIgJAPQARAGAQANQAJAHAIAIQAJAJAHAKQARAbgCAhQgBAPgGANIgFACQACgPgBgMQgBgRgFgQQgEgPgJgOQgKgPgNgMQgIgHgJgGIgKgFIgTgMIgEADIACAAQAOAIAMALIAQAQQAGAIAGAKQAGAJAEAKQAFAKADALQACAJABAKQADARAAAPIABAKIgeA2IAIAIIAAAAQATAIAMAQIgEAFQgIALgKAIIAAABIgDAAIgNgBIgEgCQgRAYgZASQgTAMgVAIQgkAMglADIgTABIAHAaIABAAIAAACIABADIgBAAIgJDRQgTASgSAOQgSAPgUANIAAAyIAAAAQAAAGACAHIAGANQAFANAJAMQAEAGAGADIABgBIAnAMIADgEIAPAGQAJAIALgCIAAABIAPAEIADABIAFACQAHACAGABIANADIARAFIAWAGIAWAEIASAFIAaAFIAAAJIgWgEIgEgCIgTgFIgXgFIgWgGIgigJIgBAAIgJgDIgUgEIgFgBIgDgBIgegKQgKgDgJgBIgKgBIgGgCIgGgCIgJgEQgFgDgDgFQgJgMgGgOQgFgLgCgLIAAAAIAAgBIgBgDIAAgEIgBgNIAAgUIACgkIADgbQADgaAGgZIAGgbIAJgdIAKgbIACgGIADgHIAFgNIAGgMIAAACIgFALIgEAKIgCAJIAAABQgBAIACAIQACAIAEAHIAGAIIADAAIAIgDQADgBACgDQADgCABgDQACgGAAgHIgBgPIgBgFIgEgTQgCgKAAgLQABgVADgUIgBAAIgBgOIAAgVIATgFIAUgFIAVgBIAVAAIAEAAIgIgPIgGgPQgDgIAAgJIgBgTIABgFIAAABIADAAIAAACIACAIIABAHQABADACABIABABIACAIQADAGAEAFIADAEIACADIACACIAAACIACADIACACIACACIAFADIADABIACgBIAMgGIAKgGIAJgIQAHgIAGgIIAIgUIACgKIgCABIgHABIgHAAQgDAAgDgBIgIgDQgEgCgCgEQgDgGACgJIAEgKQAGgLABgPIABgKIAAgCIgCgBIgDAAIgDACIgFAEIgFAEIgEgGIgNgNQgFgEgFgDQgGgEgGgDQgNgEgNgCQgTgDgUACQgLAAgKACIgdAGIAIgLIADgEIABgEIACgHIAAgEIgVAHIgHALIgDAHIgDAHIAAAFQACAGAEAEQAGAFAIADIAPADIAEAFIgBABIgCADIgFACIgGAAQgKAAgJgBQgEAAgDgDQgFgEgDgGIgDAIIgBAIIABABIgCgEIgCABIgHALIgHANIgFANIgCAFIAAAAIADAFIACAAIACAAIACAEQAEAFAEAEIAJAIQAFADAGABIALAEIABAEIABAJIAAAHIAAABIAAANIgDAJIgCAIIgFgFIgCABQgSAGgSAMIgCAEIgFANIgGALIgEAMQgFARgDASQgDAWgBAXIAAABIAAgBIAHgVIAHgWIALgUIANgUIAAgBIAAAEIgGAVIgGAWIgKAlIgCAGIgGAiIgQBRIgGAqIgHA0QgBAKABALIAAACQgDAGABAHIABAPIABAIIAAAWIAAAEQABAHADAGIgDAAIgFAAIAJAGIAEADIAOAHIAQAJIASAFIAlAKIAKACIAKAAIACABIASAFIAAAAIASADIASAEIADABIAdAEIABAAIATAFIAQADQAXADAXAFIACAAIAjAIIAJABIAAAGIgLgBQgegFgdgFIgIgCIgJABIgFAAIADAFIgJgBIgEgCQgWACgWAFIgTAEIgTADIgRgBIgNgFIgGgCQAbgBAcgFIAWgFIAUgHIgTgEIgEgFIgIgBQgMADgKgFIgBAAIgEABIgDgBIgQACIgfADIgdADIgPACIAPAOIAQAMIjGAPIgKAXQgDAGgFAGIgFADIgFgIIAFgFIgKABQgLAAgJADQgHAEgJABQgEACgEAAIAQgNQAQgOANgPQANgOALgQIgYgIIgegHQgRgDgKgMIgJgMIgJgMQgIgJgKgGQgDgDgFAAIg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");
	this.shape_10.setTransform(-9.3,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]},26).wait(28));

	// Layer 2
	this.instance_1 = new lib.TwigArm("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.1,-16.4,0.865,0.865,49.4,0,0,0.7,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-40.6,x:-19.9,y:5.8},11).wait(10).to({startPosition:0},0).to({regX:0.6,rotation:-55.6,x:-13.6,y:9.6},5).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-77.4,103.2,153.9);


(lib.HOWMANY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slimlays();
	this.instance.parent = this;
	this.instance.setTransform(80.6,75.1,1.291,1.291,0,0,0,26.9,18);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990066").s().p("AgcBLQgEgEgBgFQABgIADgFQAFgHAIAAQAHAAADAFQADAEAAAGQAAAFgDAGQgFAGgGABQgGgBgFgDgAgWAiQgEgEAAgGQAAgIAMgKIAXgPQAMgKAAgHQAAgKgJgHQgJgIgJAAQgFAAgKAGQgJAGgDAAQgHAAgDgFQgFgEAAgFQAAgKASgIQAOgHAKABQAUAAARAPQARAPAAAVQAAAUgTAOIgRALIgOANQgEAGgGgBQgGAAgEgDg");
	this.shape.setTransform(137,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AgXBKQgEgEAAgGQAAgEAUgkIgVggIgfgxQgCgDAAgEQAAgFAEgEQAEgEAGAAQAGAAAFAHIAIALIAQAdIARAcIAWguIAJgUQADgJAJAAQAGAAAEAEQAEAEAAAFQAAAEgFALIgUAtQgNAbgJAQIgPAeQgGAJgHAAQgGAAgEgEg");
	this.shape_1.setTransform(124.8,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990066").s().p("AhEBLQgDgDAAgGIAAgMIABgMIAAgRIAAgRIAAgSIAAgTIgBgRIgBgRQAAgHAEgEQAGgEAGAAQAIAAAIAMQAsA/AqAoIAAgQIAAg/IgBgLIgBgLQAAgOAOAAQAQAAAAAyIAAAPIgBA9IgCAQQgBAMgNAAQgHAAgJgIQglgigvg7IAAAdIAAAYIABAXQAAAdgPAAQgGgBgFgEg");
	this.shape_2.setTransform(110.6,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990066").s().p("AAiA4QgFgMgEgPQgHABgRABIgWADIgPAgQgFAHgHAAQgGAAgFgEQgEgDABgGQAAgFAOgdIgCgFQABgFAJgDIAfgxQAXglAGAAQALAAADANIAHAgIAOA/IAFANQADAIAAAFQAAAFgEAEQgEAEgFAAQgIgBgIgRgAgHAJIANgBIANgCIgGggIgUAjg");
	this.shape_3.setTransform(95,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990066").s().p("AA1BAIgFgYQgGgSgFgfIgOAoIgGASIgIARQgFAKgIgBQgJABgFgMIgFgRQgIgZgHgbIgLAuIgFAXQgDANgLAAQgGABgEgFQgEgEAAgFQAAgQAHgXIAKglIAHgeQAEgUAFgIQAFgHAIAAQAIABAFAIQAEAJAFAaQADAaAJAcQAKgbAKgkIAFgWQAFgOAMAAQAKAAAGARQABAGADASQAFApAKAdIAIAhQAAAFgFAEQgEAEgGAAQgKAAgFgPg");
	this.shape_4.setTransform(79.1,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990066").s().p("AATBMQgFgDAAgGQgFgLgBgIIgKg9QgHASgIAQQgKAXgDAOIAAAEQAAAGgFAEQgFADgGAAQgGAAgFgDQgGgEAAgHIgCgMIgLgtQgGgWgQgrIgBgFQABgGAEgDQAEgDAGAAQAHAAAEAGQADADADAJQAJAcAMA0QAJgTAIgZQAGgVAEgJQAKgWAJAAQAJAAAFALQACAFACANIADAUQACAQAKAsQAKgYASgtIAFgSQADgLAEgGQAEgHAJAAQAGAAAEAEQADADAAAGIgDAKIgEAKIgFARIgSApIgSAqIgIAQQgEAIgJAAQgGAAgFgDg");
	this.shape_5.setTransform(51.1,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990066").s().p("AgzA9QgWgSAAgdQAAggAVgbQAXgfAjAAQAiAAARAQQARAPAAAfQAAAhgTAbQgWAfgjAAQgdAAgUgQgAgfgcQgOAUAAAWQAAARAMAJQANAKASAAQAUABAPgWQANgTAAgYQAAgUgJgIQgJgIgWAAQgVAAgQAWg");
	this.shape_6.setTransform(32.7,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990066").s().p("AAqBKQgFgDAAgGIgBgVIAAgVIAAgKQgPAAgVAFIgmAHIgBAUIgBAVQgBAFgEAEQgDADgGAAQgGAAgDgEQgEgDAAgFIACgdIACgdIAAgkIAAglQAAgFAFgDQADgEAGAAQAGAAAEAEQADADAAAGIgBAWIAAAWIAAAKIgBAKIAmgHQAVgEAPgBIABgjQAAgIAFgKQAGgMAGAAQAGAAADADQAFAEAAAGIAAADQgCAHgBAFIAAAJIgBAIIgBAcIgBAaIABAWIACAVQAAAGgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_7.setTransform(17.3,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#9900FF").ss(2,1,1).p("ALpCgI3RAAIAAk/IXRAAg");
	this.shape_8.setTransform(78.5,17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCCFF").s().p("AroCfIAAk9IXRAAIAAE9g");
	this.shape_9.setTransform(78.5,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161.5,106);


(lib.bubthinks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape.setTransform(8.5,105.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AiLDKIgUgBIgVgDIgUgDQgVgFgUgHQgLgCgKgEIgBgBIgBgCIgCgDIgEgCIgNgTIgBgFIgCgLIgBgZIAAgZIAAgMIAAgNIAAgNQAAgHgBgGQgCgKgEgKIgJgRIAKgIIATgSIAQgUIAOgWIAMgZIAFgNIAFgOIAEgOIAEgPIAGgfIADgSIAiAMIAiAKIAkAJIAkAHIAnAGIAnAEIAVACIAUABIAWABIAVAAIAEAAIAcAAIAhgBICOgBIgIAQIgOAhIgOAiIgNAjIgMAkIgFATIgFATIgEAUIgEAVIgJApIgFAUIgcAIIgOACIgOABIgOABIgPAAIgdgEIgSgCIAAgNIABgcIABgbIABgbIADgbIACgaIACgOIABgNIACgNIADgNIAFggIABgSIgHAhIgHAeIgFAeIgFAdIgEAeIgCAPIgCAPIgBAPIgBAPIgDAeIgBAUIgUAJQgUAIgVAGQgTAHgUADQgUAFgUADIgpADIgVgBg");
	this.shape_1.setTransform(8.9,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("ABlOrIgQgMIgWAGQgaAGgagFQgRgEgSgFIgmgOIgdAEQgfAFgfgFQgRgFgQgHQgPgGgOgIIAAgNIACgKIACgDIAUABQAAgIABgJQABgOADgOIAGgbIAHgZIAHgYQAFgRgCgQIgHgoIgFgbIgHgbIgGgaQgEgTgHgUIgIgZQgEgOgCgNQgDgRABgUIAAghIAGgLQAKgQARgDQAMAAAMACQAQADAPAGQASAHAVAEIAYACIAkgHIBbgfIgIAaIgKAnIgHAaIgGAQIgBAEIgEAKIgBAhIgCAhIAAAtIABAtIAFA4IADAfIAHAgIAHAaIABADIAEADQABAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAXAGAWAJIA/AVIAVAGIABgBQAFgHAHgGQAFgFAHgDQAMgEAMACIALADIACAIIABAOQAAAIgHAEQgIAGgIgDIgQgFIgRgGQgIgCgGAAIgBABIAsAYIgNAHIgLACIgVgDIgVgFIgEgBIgFAAIAJAFIgCAIIgagGIALAEQAIAEAHAFQAEADAEAFIgBAFIgCAFIgDAFQgFgDgGgBIgQgGIAAACIAFADIgMATIgJADIgMgFgAFXNRQgHgDgDgGQgGgKgDgLQgMgDgMABIgEAAIgOAGIhSAAIgCAEQgXAKgdgHQgVgEgVgGQgWgHgVgIQgHgMgCgPIgGgdIgFgaQgFggAAgfQAAhAAChAIABgVIAFgIIgBgMIAahqIBNgRQATgDAUgBQAjgFAjgCIgaCzIgBAOQgFAhgBAhQgBAiAGAiQADAVAGAUQADAMAGAKQACAEAFABQAIAEAKADIAhAJQAoAKAoAFQAgAFAgACIAFAAQgQAMgSAGIgfAFQgOABgJAJQgBAHAHAFIAGAFQgKAFgKADQgEACgEAAIgFgBgAkfDIQAcgjAUgpIAFgNQgLAVgUAPQgHAGgJgEIARgcIgDAAIgIAIQgMAOgRAIQgDgFACgHQAIgXAKgTQgaAlgnAaQgTABgIgPQAAgNAKgLQAVgDAMgOQgCgUAAgUQAIgJgCgNIAMABIgFgJIgEgEIgFgBIAEgPQgmgggegnQgagigUgnQgEgIAAgJQgDg2AAg3IAJgLQAJgNAFgPQAUgzAZgvQAthWBOg+QAlgdAqgXQAmgWAlgZIgIgeQgKgrAHgsIALgEQAJAUAQAIIAIgIQADgFAIgBQAFABAGAAIAUgBQAOgBAMgGIgugBQgHgGgCgIQgEgSAIgRQAhgOAagOIgBgBQgFgTgfgNQAhgTAygZIgCAAQgZgLAxgSQAugQABAYQglAeAaALIAAgJIAAgQQAVgCASAHQAPAGANANIAFgGQAEgFAMADQAzgJgXArIgBAFQgqAPAuApQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAQghAcgDAkIABgCQgBAJABAJIgBgBIACAMQABAGAEgFQAQgQACARIgCABIgQARQgWAZgaASIANAOQAgAhAeAkQA3BBAuBGIAOATIATAcIADADQAKAJgBANIAeAuQAUAfAJAiQAGAVABAYIACApQADAmgJAnIAAAAIgLAXIgBACQgMAfgUAaIgOAVQgDACgEAAQgsAMgwAEQgjAEgkABQgnABgmgBQhSgChQgOQgmgJglgMQgjgLgegSQgGgggHggQgJgmgNgjQgPgngWglIgGgLQAZgNAXgPQAcgRAZgVQAdgaAXgeIAGgJQgTATgVATQgaAWgcAUQgjAZgkAUIgLAGIABABQAtBEAXBPQAOAvAIAxQADATAAAVQAAAIgDAJQgHAWgEAVIgEABQgQAXgLAYQgFAJgGAIIgPAQQgWAXgfALIALgPgACKuEIgDAAQgFAGgCAIQgEAWAOAOQAMgJAAgRQAAgQgMgJg");
	this.shape_2.setTransform(3.9,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996633").s().p("AhuBgIgDgZIgDgJIgkgFIAVgpIAAgDQAlgRgHgfQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAgBAAQAdgSAQgcIAAADQAFAMAKgDQAKgCAOgSQANgQAOgPQAXgYgIAbQgXAkARAAIAAgDQApgRAkgSIAAACQgDADgDABQgJADABABQAdAIAugQQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAAAQg1AQAaAOQA2AGhGARQg1AMAJAUIgBADQgmANggAQQA7Aeg6AgQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABQgPAFgBAPIgCAWQAAAFgHAFQgGABgGgFQgNgMgKgOQgJgBgJAHQgGAGgEAJQgFALAAALQgKgSgCgTg");
	this.shape_3.setTransform(-1.2,-89.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABfPYQg3gIg1AFIgBgBQgZgHgXgOQgbAFgbACQg8AEgtgmIgCgCQgLgQACgUIATgUIAQgVQALgQAGgTQAMgpgGgqQgGg0gOgwIgKglQgHgegNgUIACgTIADg1QAAgagCgbQgNgBgFgOIgBgDIgDgHIgJgXIADgGIAAgVIADgpQABgTgEgSQgEgSgRgFQgBAEgHACIgNADQgHABgGgBIgDgFIAGgJQAJgMALgKIgEgMQgUABgTAAIgagEQgUgEgVgJIAFgOQAEgOAJgJQANgOATgEIgDgaIAAgEIAGgFQAAAUACAVQgMANgVADQgKAMAAANQAIAOATAAQAngaAaglQgKATgIAWQgCAHADAGQARgIAMgPIAIgHIADgBIgRAdQAJADAHgFQAUgPALgVIgFANQgUAogcAjIgLAPQAfgKAWgXIAPgQQAGgIAFgKQALgXAQgXIAEgCQAEgVAHgWQADgIAAgJQAAgUgDgUQgIgwgOgwQgXhPgthEIgBAAIALgHQAkgTAjgZQAcgUAagWQAVgTATgUIgGAKQgXAdgdAaQgZAVgcASQgXAOgZANIAGAMQAWAkAPAoQANAjAJAlQAHAhAGAfQAeARAjANQAlAMAmAIQBQAPBSACQAmABAngCQAkgBAjgDQAwgFAsgMQAEAAADgBIAOgVQAUgcAMgeIABgBIALgYIAAABQAJgngDgmIgCgpQgBgZgGgVQgJgigUgeIgegvQABgNgKgIIgDgEIgTgbIgOgTQguhGg3hCQgegkggghIgNgOQAagSAWgZIAQgQIACgBQgCgSgQARQgEAEgBgFIgBgNIAAABQgBgJABgIIgBABQADgkAhgbQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQgugpAqgQIABgFQAXgqgzAJQgMgDgEAEIgFAGQgMgNgQgGQgRgHgWADIAAAQIAAAIQgagLAlgeQgBgYguARQgxASAZALIACAAQgyAZghATQAfAMAFATIABACQgaAOghANQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQA5ggg6gfQAggQAlgNIABgEQgJgTA1gNQBHgRg3gFQgZgOA0gQQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQgtAPgegIQgBAAAJgDQAEgBACgDIAAgDQgkASgnASIAAACQgTAAAYgjQAJgbgXAYQgPAPgNAQQgPARgKADQgKACgFgMIAAgDQgQAdgcASQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAGAfgkARIAAgFIAAgGQAkgcgUglIAFABQALAEALAGQAMguAVgBIAAAIQARAIAigcQAOgLAKgQQAQgYACAbQgVAkAQgCIAFgBQAnggAkADIgGAGQgFAFgKACQApgBA3gFIgDAGQhKATA/AIIAGAAQACAhAPANQARAOAfgIIABgCQA4AAgRAxIgBAFQgiAUAmAlQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABIggArIAAABQgJANACASIAAACQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAIABABIAAABQAHAAAMAAIgCAFQgBADgCADIgDAEQgSAcgXAXQASAUAQAWIArA5QARAWAOAWIAKAPIAKAPIAKAQIAdAtIABABIACACIACAEIAKAMIAEAHIACAEIADAEIADADIACADIADAFIAFAMIADAGIADAHIABACIAUAeQAKAPAIARQAHARAFASIAJAmIAAABIABAeIAAASIgBAaIgCAiIAAACQgDAIABAIIAAACIgBABIAAADIgFAKIgGAMIgKAWQgKAVgNAUQgYAjgVAoQgOAbgMAcQgWA0gKA3QgIAvgEAxIgEAaIAAABQgIAUgGAUQgGAUgFAVQgLAqgKArIAaiyQgjABgjAFQgUABgTAEIhNAQIgaBqIABANIgFAHIgBAVQgCBBAABAQAAAeAFAhIAFAZIAGAeQACAOAHANQAVAIAWAGQAVAGAVAFQAdAHAXgKIACgEIBSAAIAOgGIAEgBQAMgBAMAEQADAKAGAKQADAGAHADQAGADAHgDQAKgDAKgGIgGgFQgHgFABgHQAJgJAOAAIAfgFQASgGAQgMIgFAAQgggDgggEQgogGgogKIghgJQgKgCgIgEQgFgCgCgDQgGgLgDgLQgGgVgDgUQgGgiABgiQABghAFgiQgBAqADAoQACAkALAjQAHAUAJATQAJARATAAIARAEQAcAHAcgBQAXACAYAEQAcAGAcAKIgKAZQgHASgSAJQgMAHgNAFIgPAFQgcAHgcAGIglAJQgMABgLAEQgOAEgNAGQgvAVguASQgUAHgUAEIgIABIgJgBgABlPRIAMAFIAJgDIAMgUIgFgCIAAgCIAQAFQAGACAFADIADgGIACgFIABgFQgEgEgEgDQgHgGgIgEIgLgEIAaAGIABABIATAFIAIABIAEAAIABAAIgfgPIgJgEIAFAAIAFAAIAUAFIAVAEIALgDIANgHIgsgYIABAAQAGAAAIACIARAFIAQAGQAIADAIgHQAHgEAAgIIgBgNIgCgJIgLgDQgMgCgMAFQgHACgFAGQgHAGgFAHIgBABIgVgHIg/gVQgWgIgXgGQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgEgDIgBgDIgHgaIgHggIgDgeIgFg5IgBgsIAAgtIACghIABghIAEgKIABgFIAGgPIAHgbIAKgnIAIgaIhbAfIgkAHIgYgCQgVgDgSgIQgPgGgQgCQgMgDgMAAQgRAEgKAPIgGALIAAAhQgBAUADASQACANAEANIAIAZQAHAUAEATIAGAbIAHAaIAFAcIAHAnQACAQgFARIgHAYIgHAaIgGAbQgDAOgBAOQgBAIAAAJIgUgCIgCADIgCALIAAANQAOAIAPAGQAQAHARAEQAfAFAfgEIAdgFIAmAOQASAGARAEQAaAEAagFIAWgGIAQAMgAifA4IgGAfIgDAPIgFAOIgEAOIgGAOIgMAYIgOAWIgQAUIgTASIgKAIIAJATQAEAJACALQACAGAAAGIAAANIAAANIAAAMIAAAaIABAYIABALIABAGIANASIAEADIADACIABACIAAABQALAEALADQAUAGAVAFIAUAEIAVACIAUACIAUAAIApgCQAUgDATgGQAVgDAUgHQAUgGAUgHIAUgKIACgTIACgeIABgPIACgPIACgPIABgPIAFgeIAFgeIAFgeIAGgeIAIgiIgCASIgFAgIgCANIgCAOIgCANIgBAOIgDAaIgCAbIgCAcIgBAbIAAAbIAAANIARADIAeADIAOAAIAOAAIAPgBIAOgDIAbgHIAGgVIAIgpIAFgUIAEgUIAFgTIAFgTIALglIANgkIAOgiIAPghIAIgQIiPACIggAAIgcABIgFAAIgVAAIgVgBIgVgBIgVgCIgngEIgmgGIglgHIgkgJIgigKIghgMIgEARgAlMBQQgBgHgFgJQgCgEgEgBIAAgPIgBgCIgUgPIgTgRIgRgSQgJgLgHgLQgHgKgGgMIgMgYIgKgaQgFgOgDgPQgDgVABgZQAAgUADgUQABgJADgIQASgxAZgtQAMgUAOgWQASgbAVgaQAegmAjghQAqgnAygeIAcgRQAVgMAYgMQgBgOgDgOIgShEQgDACAAADQgDALgJAEQgJgKgCgRIgFgmQgCgPgLgHIgKABIgGAJIgEAHQgDAGgHAAIgCgDIgDgNIABgBQAHgQAGgQQAGgSAQgKIgBADIgVApIAkAFIADAKIAEAYQACAUAJASQABgLAEgLQAEgJAHgGQAIgHAJAAQAKAPANAMQAGAFAHgCQAGgFAAgEIACgWQABgQAQgFQgIARAEASQACAJAHAFIAuACQgMAGgOAAIgUACQgGAAgFgCQgIABgDAFIgIAJQgQgJgJgTIgLADQgHAtAKArIAIAeQglAZgmAVQgqAXglAeQhOA9gtBWQgZAwgUAzQgFAOgJANIgJALQAAA3ADA2QAAAJAEAIQAUAoAaAiQAeAlAmAiIgEAPIAFAAIAEAFIAFAIIgMgBgACAtRQACgHAFgGIADgBIAAAAQAMAIAAARQAAARgMAIQgOgNAEgXg");
	this.shape_4.setTransform(3.9,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(101));

	// Layer 2
	this.instance = new lib.BubArm("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(38.7,-32.1,0.843,0.843,0,0,0,11.7,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:11.6,scaleX:0.84,scaleY:0.84,rotation:-10.3,x:38.6},9).to({rotation:-25.3,y:-28},9).to({x:39.1,y:-26},10).to({x:38.6,y:-28},10).to({x:39.1,y:-26},12).to({rotation:-19,y:-26.1},7).to({rotation:-25.3,x:42.7,y:-27.4},11).to({startPosition:0},17).to({regX:11.7,scaleX:0.84,scaleY:0.84,rotation:0,x:38.7,y:-32.1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-104.2,104.6,209.4);


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
		var bgm = createjs.Sound.play('bgmAdj',{loop:-1});
		
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
		
		 window.open ("adjective_Scene7.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adjective_Scene5.html","_self");
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


(lib.frb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{unselectedEnabled:0,press:1,unselectedDisabled:2,selectedDisabled:3,selectedEnabled:4});

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
		/* stop();
		*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// dot_enabled
	this.instance = new lib.frb_dot_1();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// dot_disabled
	this.instance_1 = new lib.frb_dot_disabled_1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// background pressed/disabled
	this.instance_2 = new lib.frb_background_pressed_1();
	this.instance_2.parent = this;

	this.instance_3 = new lib.frb_background_disabled_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// background up/static
	this.instance_4 = new lib.frb_background_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5));

	// radio button frame
	this.frb_frame_mc = new lib.frb_frame();
	this.frb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,"press":1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

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


(lib.WHICHONE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990066").s().p("AgcBLQgFgEABgFQgBgIAEgFQAFgHAIAAQAGAAAEAFQADAEAAAGQAAAFgDAGQgEAGgIABQgFgBgFgDgAgWAiQgEgEAAgGQAAgIANgKIAVgPQANgKAAgHQAAgKgJgHQgJgIgJAAQgFAAgKAGQgJAGgDAAQgGAAgFgFQgEgEAAgFQABgKARgIQAOgHAKABQAUAAARAPQASAPAAAVQgBAUgTAOIgRALIgOANQgFAGgFgBQgGAAgEgDg");
	this.shape.setTransform(135.8,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AgtBKQgKgJgBgfIACgnIADgnIgBgKIgCgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQgBAFgDAEQgEAFgGgBIgEgBQgQgDgPAAIgPABIgRADIgBAnIAlgEIAXgCQAGAAAEAEQAEADAAAGQAAALgMACIgXABIgqAFIAAAUQAAASADADQABABALAAIARAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgLACQgKACgeAAQggAAgKgJg");
	this.shape_1.setTransform(124.2,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990066").s().p("AhEBLQgDgDAAgGIAAgMIABgMIAAgRIABgRIgBgSIAAgTIgBgRIgBgRQAAgHAEgEQAFgEAHAAQAHAAAJAMQAsA/ArAoIAAgQIgBg/IgBgLIgBgLQAAgOAOAAQAQAAAAAyIAAAPIgBA9IgCAQQgCAMgMAAQgHAAgJgIQglgigug7IgBAdIABAYIAAAXQAAAdgPAAQgHgBgEgEg");
	this.shape_2.setTransform(109.6,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990066").s().p("AgzA9QgWgSAAgdQAAggAVgbQAXgfAjAAQAiAAARAQQARAPAAAfQAAAhgTAbQgWAfgjAAQgdAAgUgQgAgfgcQgOAUAAAWQAAARAMAJQANAKASAAQAUABAPgWQANgTAAgYQAAgUgJgIQgJgIgWAAQgVAAgQAWg");
	this.shape_3.setTransform(93.4,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990066").s().p("AAqBKQgFgDAAgGIgBgVIAAgVIAAgKQgPAAgVAFIgmAHIgBAUIgCAVQAAAFgEAEQgDADgGAAQgGAAgDgEQgEgDAAgFIACgdIACgdIAAgkIABglQgBgFAEgDQAEgEAGAAQAFAAAFAEQADADAAAGIAAAWIgBAWIAAAKIgBAKIAmgHQAUgEAQgBIABgjQABgIAEgKQAGgMAGAAQAFAAAEADQAFAEAAAGIAAADQgDAHAAAFIAAAJIgBAIIgBAcIgBAaIABAWIACAVQAAAGgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_4.setTransform(69.4,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990066").s().p("AgrA7QgOgPAAgVQAAggAcgiQAZgcAYAAIAIAAIAGABQAEgFAGAAQAKABACAKQACAJAAALQAAAEgDAFQgDAFgHAAQgJAAgEgKQgCgDgCgBIgIgBQgMAAgPATQgXAaAAAXQAAAKAHAIQAHAIAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAHgFADQgbAXgbAAQgWAAgPgQg");
	this.shape_5.setTransform(55.4,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990066").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_6.setTransform(43.5,16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990066").s().p("AApBKQgDgDAAgGIgBgVIgBgVIAAgKQgPAAgWAFIglAHIgCAUIgBAVQAAAFgDAEQgEADgGAAQgFAAgFgEQgDgDAAgFIABgdIACgdIABgkIABglQAAgFAEgDQADgEAGAAQAGAAADAEQAEADAAAGIgBAWIAAAWIgBAKIAAAKIAlgHQAWgEAPgBIACgjQgBgIAFgKQAFgMAIAAQAEAAAFADQAEAEAAAGIgBADQgBAHAAAFIgBAJIAAAIIgBAcIgBAaIABAWIABAVQAAAGgEADQgEAEgGAAQgFAAgFgEg");
	this.shape_7.setTransform(30.7,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990066").s().p("AATBMQgEgDgBgGQgEgLgBgIIgMg9QgGASgHAQQgLAXgEAOIABAEQAAAGgFAEQgFADgFAAQgHAAgGgDQgEgEAAgHIgEgMIgKgtQgHgWgOgrIgBgFQgBgGAFgDQAEgDAFAAQAIAAAFAGQACADADAJQAJAcANA0QAHgTAIgZQAHgVAEgJQAKgWAJAAQAKAAAEALQACAFACANIACAUQACAQALAsQALgYARgtIAFgSQADgLAEgGQAFgHAHAAQAHAAADAEQAFADAAAGIgEAKIgEAKIgGARIgRApIgSAqIgHAQQgFAIgKAAQgFAAgFgDg");
	this.shape_8.setTransform(12.5,17.1);

	this.instance = new lib.bubthinks();
	this.instance.parent = this;
	this.instance.setTransform(71.6,122.6,0.732,0.732,0,0,0,3.8,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3333CC").ss(2,1,1).p("ALOCgI2bAAIAAk/IWbAAg");
	this.shape_9.setTransform(71.8,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AEFF77").s().p("ArNCfIAAk+IWbAAIAAE+g");
	this.shape_10.setTransform(71.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,145.7,200.3);


(lib.WHATKIND_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twiggs();
	this.instance.parent = this;
	this.instance.setTransform(69.1,102.1,0.689,0.689);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990066").s().p("AgcBLQgFgEAAgFQAAgIAEgFQAFgHAIAAQAHAAADAFQADAEAAAGQAAAFgDAGQgFAGgHABQgFgBgFgDgAgWAiQgEgEAAgGQAAgIAMgKIAWgPQANgKAAgHQAAgKgJgHQgJgIgJAAQgGAAgIAGQgKAGgEAAQgGAAgEgFQgDgEAAgFQAAgKARgIQAOgHAKABQAUAAARAPQARAPAAAVQABAUgVAOIgQALIgOANQgEAGgGgBQgGAAgEgDg");
	this.shape.setTransform(137.3,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AgeBPQgLgDgHgEQgFAAgEgEQgEgEAAgFIABgdIABgeIgBgfIAAghQAAgFAFgFQAFgGAGAAQADAAANAGQAPAIADAAQAcAKAUATQAYAXAAAbQAAARgIAPQgJAQgOAJQgQALgdAAQgHAAgJgCgAghAyQADACAFABQAFACAGAAQAUAAAKgGQAIgGAFgJQAFgKAAgKQAAgXgcgSQgIgGgfgNg");
	this.shape_1.setTransform(124.8,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990066").s().p("AhEBLQgDgDAAgGIAAgMIABgMIAAgRIABgRIgBgSIAAgTIgBgRIgBgRQAAgHAEgEQAFgEAHAAQAHAAAJAMQAsA/ArAoIAAgQIgBg/IgBgLIgBgLQAAgOAOAAQAQAAAAAyIAAAPIgBA9IgCAQQgCAMgMAAQgHAAgJgIQglgigug7IgBAdIABAYIAAAXQAAAdgPAAQgHgBgEgEg");
	this.shape_2.setTransform(109.1,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990066").s().p("AgtBHQgEgEAAgFQAAgGAEgEQAEgEAGAAIATgBIAAgsQAAgaACgYIgWABQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFgBIAdgBQASAAAdAEQALACAAAMQAAAGgEAEQgEADgEAAIgagDIgBAvIgBAsIAbgBQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAIgRAAIgRAAIgTACIgTACQgGAAgEgEg");
	this.shape_3.setTransform(95.4,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990066").s().p("AgyBKQgDgFAAgFIABhBIAChBQAAgFADgEQAEgEAGAAQAGAAAEAEQAEAEAAAFIgBAYIgBAXIAxg2QAFgEAGAAQAFAAAEADQAFAFAAAFQAAAGgYAaQgRASgSARIAUAUIAXATQAFAEAGACQAKADAAAJQAAAFgDADQgDAGgHAAQgOAAgWgSIgegeIAAAqQAAAEgDAEQgDAEgHAAQgHAAgFgGg");
	this.shape_4.setTransform(84.3,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990066").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape_5.setTransform(62.3,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990066").s().p("AAiA4QgFgMgEgPQgHABgRABIgWADIgQAgQgEAHgHAAQgGAAgEgEQgFgDAAgGQABgFAOgdIgBgFQAAgFAJgDQAOgXARgaQAXglAGAAQALAAADANIAHAgIAOA/IAFANQAEAIgBAFQABAFgFAEQgEAEgFAAQgIgBgIgRgAgHAJIANgBIANgCIgGggIgUAjg");
	this.shape_6.setTransform(47.9,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990066").s().p("AApBKQgEgDAAgGIAAgVIgBgVIAAgKQgPAAgVAFIgmAHIgCAUIgBAVQAAAFgDAEQgEADgGAAQgFAAgEgEQgEgDAAgFIABgdIADgdIAAgkIABglQAAgFADgDQAEgEAGAAQAFAAAEAEQAEADAAAGIAAAWIgBAWIAAAKIgBAKIAmgHQAUgEAQgBIABgjQABgIAEgKQAFgMAIAAQAFAAAEADQAEAEAAAGIgBADQgCAHAAAFIAAAJIgBAIIAAAcIgBAaIABAWIABAVQAAAGgEADQgEAEgFAAQgGAAgFgEg");
	this.shape_7.setTransform(33.2,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990066").s().p("AATBMQgEgDgBgGQgEgLgCgIIgKg9QgHASgIAQQgKAXgDAOIAAAEQAAAGgFAEQgFADgFAAQgIAAgEgDQgGgEABgHIgDgMIgLgtQgGgWgQgrIgBgFQABgGAEgDQAEgDAGAAQAHAAAFAGQACADADAJQAKAcAMA0QAHgTAJgZQAGgVAEgJQAKgWAJAAQAJAAAFALQACAFACANIACAUQACAQALAsQALgYARgtIAFgSQACgLAFgGQAEgHAJAAQAFAAAFAEQADADAAAGIgDAKIgEAKIgFARIgSApIgSAqIgHAQQgFAIgKAAQgFAAgFgDg");
	this.shape_8.setTransform(14.9,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#990066").ss(1,1,1).p("AgJgDIAGAHIANgH");
	this.shape_9.setTransform(97.9,91.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF3300").ss(2,1,1).p("ALpCgI3RAAIAAk/IXRAAg");
	this.shape_10.setTransform(74.5,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990066").s().p("AgJgDIATAAIgNAHg");
	this.shape_11.setTransform(97.9,91.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFD81").s().p("AroCfIAAk+IXRAAIAAE+g");
	this.shape_12.setTransform(74.5,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,151.1,155.8);


(lib.Lesson4AnAdjAnswers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		playSound("SE3questions");
	}
	this.frame_12 = function() {
		playSound("AnAdjanswersatleastone");
	}
	this.frame_65 = function() {
		playSound("SE1stThought");
	}
	this.frame_73 = function() {
		playSound("Evanwhichone1");
	}
	this.frame_95 = function() {
		playSound("SE2ndThought");
	}
	this.frame_102 = function() {
		playSound("WHATKIND");
	}
	this.frame_127 = function() {
		playSound("SE3rdThought");
	}
	this.frame_134 = function() {
		playSound("Evanhowmany");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(6).call(this.frame_12).wait(53).call(this.frame_65).wait(8).call(this.frame_73).wait(22).call(this.frame_95).wait(7).call(this.frame_102).wait(25).call(this.frame_127).wait(7).call(this.frame_134).wait(62));

	// Layer 1
	this.instance = new lib.AnAdjAnswersWHICH("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(155.1,30.9,1,1,0,0,0,155.1,30.9);

	this.instance_1 = new lib.AnAdjAnswers("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.1,36.9,1.39,1.39,0,0,0,155.1,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(190));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.39,scaleY:1.39,y:36.9},6).wait(190));

	// Layer 5
	this.instance_2 = new lib.WHICHONE("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.2,216.2,0.652,0.652,0,0,0,71.8,99.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65).to({_off:false},0).to({scaleX:1,scaleY:1,y:192.2,mode:"independent"},8).wait(123));

	// Layer 4
	this.instance_3 = new lib.WHATKIND_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(151.2,228.9,0.725,0.725,0,0,0,74.5,76.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({_off:false},0).to({scaleX:1,scaleY:1,x:149.2,y:207.9,mode:"independent"},7).wait(94));

	// Layer 3
	this.instance_4 = new lib.HOWMANY("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(304.3,245.9,0.679,0.679,0,0,0,80.7,53);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(127).to({_off:false},0).to({scaleX:1,scaleY:1,y:236.9},7).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310.2,61.8);


// stage content:
(lib.adjective_Scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene7:0,scene7_repeat:517});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_528 = function() {
		this.gotoAndPlay("scene7_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(528).call(this.frame_528).wait(1));

	// Main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaA2QgQgFABgKQAAgEACgDQADgDAEAAQADAAAGAFQABACAJACIALABQAHAAAHgCQAJgDAAgGQAAgNgTgFIgJgCQgNgDgFgEQgJgEABgLQgBgVAUgJIARgGQANgDAGgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgFAAgDgEQgBgDgBgIIgWAHQgQAGABAKIAGABQAVAEAKAHQAQAKAAATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape.setTransform(350.2,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_1.setTransform(340.7,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_2.setTransform(329.8,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIBHQgDgDAAgFIAAgRIgBgRIABgXIABgWQAAgEACgDQADgDAFAAQACAAAEADQACADAAAEIgBAWIgBAXIABARIAAARQAAAFgDADQgDADgDAAQgEAAgCgDgAgGg1QgDgDAAgFQAAgFADgDQAEgDADgBQAFABAEADQADADAAAFQAAAFgDADQgEADgFABQgDgBgEgDg");
	this.shape_3.setTransform(322.2,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFBFQgEgDAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgEQADgCAEAAIAUABIAAgNIAAgMQAAgEACgCQAEgEADAAQAJAAABAPIAAAJIAAAGIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgEADgDAAIgGgBIgEAAIgOACIADA5IAAAEIAAAFQAAAWgLgBQgDAAgCgCg");
	this.shape_4.setTransform(314.5,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaA2QgPgFgBgKQAAgEAEgDQADgDADAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAKgDgBgGQAAgNgSgFIgJgCQgNgDgGgEQgIgEAAgLQABgVASgJIASgGQANgDAGgDQAEgCAEAAQAFAAACADQADADAAAEIACAIIABAJQAAAEgDADQgDADgEAAQgFAAgCgEQgCgDgBgIIgXAHQgOAGgBAKIAHABQAVAEALAHQAPAKAAATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_5.setTransform(304.6,20.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_6.setTransform(294.7,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWAuQgMAHgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgQQABgJAIAAQAEAAADACQADADAAAEIgBAPIgCAPIABAbQABAMACAGIAHADIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgJAJABQAEAAADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgKg");
	this.shape_7.setTransform(283.9,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AANBFIABgLIACgKIACgWIgMACQgVAAgNgLQgOgMAAgUQAAgcAQgRQARgSAbAAQAGAAACAEQAEgEAEAAQADAAADAEQADADAAAEQAAAcgDAiIgEAkQgDAVAAARQAAAFgDACQgCADgEAAQgJAAgCgKgAgPgrQgIAMAAARQABALAGAHQAIAIANgBQAJAAAEgKQAFgKABgaIABgaQgCABgFgBIgHAAQgRADgJAPg");
	this.shape_8.setTransform(273.1,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbBHQgNgIgEgMIgBgEQAAgEADgCQADgDAEAAQAEAAADAEIAEAGQAEAFAGADQAGACAIAAQAJAAAIgHQAJgHAAgKQAAgPgLgIQgJgIgPgCQgLgBAAgGQAAgGAIgDIAXgGQAGgCAEgFQADgEAAgGQABgIgHgGQgHgFgMAAQgHAAgGADIgLAHIgFACQgEAAgDgDQgDgDAAgEQAAgHAPgHQANgHAJAAQAUAAAMAKQANAJAAATQAAAXgTAHIgDACQANAEAGAJQAHAJAAAPQAAATgOANQgOAOgSAAQgPAAgMgGg");
	this.shape_9.setTransform(256,18.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaA2QgPgFgBgKQAAgEAEgDQADgDADAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAKgDgBgGQAAgNgSgFIgJgCQgNgDgGgEQgIgEAAgLQABgVASgJIASgGQANgDAGgDQAEgCAEAAQAFAAACADQADADAAAEIACAIIABAJQAAAEgDADQgDADgEAAQgFAAgCgEQgCgDgBgIIgXAHQgOAGgBAKIAHABQAVAEALAHQAPAKAAATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_10.setTransform(238.9,20.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglAtIAAhEIABgJIAAgKQgBgKAJAAQAKAAAAAQQASgSAWAAQAJAAADAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgJAHQgIAHgGAMIABA1QgBAKgJAAQgJAAAAgKg");
	this.shape_11.setTransform(229.8,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_12.setTransform(219.4,21.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIACAPIAFArQALgdAMgoQADgLAHAAQAIAAACANIAHAjIAHAlIAHgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_13.setTransform(207,21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbA2QgPgFAAgKQAAgEAEgDQACgDAEAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAJgDAAgGQAAgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQABgVASgJIASgGQAOgDAFgDQAEgCAEAAQAFAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgFAAgCgEQgCgDgBgIIgXAHQgPAGAAAKIAGABQAWAEALAHQAPAKAAATQAAAQgNAIQgLAHgRAAQgNAAgMgFg");
	this.shape_14.setTransform(194.9,20.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_15.setTransform(185.4,21.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAIAAALAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_16.setTransform(174.8,21.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE0063").s().p("AgqBLQgJgIAAggIAAgOIABgQIgBgEQAAgDABgDIACgpIgBgLIgBgKQAAgMAKAAQAFAAACADIAWgEIATgCQAYAAAOAFQAHADAAAHQAAAEgDACQgDAEgEAAIgDgBQgRgEgPAAIgQABIgVAFIABAKIgCAmIAqgFIAYgCQADAAADADQAEADAAAEQgBAIgIABIgYADIgsADIgBANIAAAMQAAAVADAFQADACAMAAIASAAIASAAIAGgBIAFAAQALAAAAAKQAAAHgIADQgKABgdAAQgeAAgJgIg");
	this.shape_17.setTransform(157.7,18.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CE0063").s().p("AgRBHQgMgdgOg4IgIgaQgGgUAAgHQAAgEAEgDQACgCAEgBQAIAAACAJIAEARIAJAgQAJAkAJAaIABgCIAZhFIAIgYQAGgPAGgHQADgEAFAAQAEAAADADQADADAAAEQAAADgCADQgGAJgEAKIgHAVIgbBHQgEAMgHAMQgCAGgFAAQgIAAgDgIg");
	this.shape_18.setTransform(145.3,19);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CE0063").s().p("AgqBIQgDgDAAgEQAAgEADgDQADgDAEAAIAUgCIABgSIAAgRIgBgQQABgWACgiIgNABIgMAAQgFAAgCgDQgDgDAAgEQAAgJAJgBIAegBQASAAAdAFQAJABAAAJQAAAFgDACQgDADgEAAIgQgCIgPgCQgCAdgBAZIAAAQIABARIgBARIAfAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgQAAIgRAAIgSACIgTACQgEAAgDgDg");
	this.shape_19.setTransform(132.7,19);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CE0063").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgOIgBgOIgCgnIgDgnIgIAAQgWAAgMgCQgIgDAAgHQAAgFADgCQADgDAEAAIAQACIAQABIARAAIARgBIAWABIAXABQAEAAADADQADADAAAEQAAAFgDACQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAGgGAAQgDAAgDgCg");
	this.shape_20.setTransform(121.3,18.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CE0063").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgeAXAAIAJABIAGACQAEgGAFAAQAHABACAIQABAIAAALQAAAEgCAEQgDADgEAAQgHABgDgIQgDgGgCgBQgCgBgIAAQgOAAgQAVQgYAdAAAZQAAANAIAJQAIAKAMAAQAJAAAKgGQAGgDAMgIQAFgFADAAQAEAAADAEQADADAAAEQAAAEgEADQgZAYgaAAQgUAAgOgQg");
	this.shape_21.setTransform(107.8,18.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CE0063").s().p("AgqBLQgJgIAAggIAAgOIAAgQIAAgEQAAgDABgDIACgpIgBgLIgBgKQAAgMAKAAQAFAAADADIAVgEIATgCQAYAAAOAFQAHADAAAHQAAAEgDACQgDAEgEAAIgDgBQgRgEgPAAIgQABIgVAFIABAKIgCAmIAqgFIAYgCQADAAADADQAEADAAAEQgBAIgIABIgYADIgsADIgBANIAAAMQAAAVADAFQADACAMAAIASAAIASAAIAGgBIAFAAQALAAAAAKQAAAHgIADQgKABgdAAQgeAAgJgIg");
	this.shape_22.setTransform(95.6,18.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CE0063").s().p("AgnBEQgTgOAAgSQAAgMAKAAQAKAAAAAMQAAAIAMAIQALAIAKAAQAHAAADgxQABgXAAgjIAAgKIgGAAIgLAAIgLgBQgFAAgDgCQgCgDAAgFQAAgKANAAIAKAAIAJABIASgBIATgBQAWAAAAAMQAAAEgDADQgDADgEAAIgGgBIgGgBIgMABIABALQAABIgKAhQgGAWgPAAQgRAAgRgMg");
	this.shape_23.setTransform(82.5,19.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CE0063").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_24.setTransform(68.9,19);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CE0063").s().p("AAiAzIgGgfIgaAFIgaAFIgQAmQgDAFgGAAQgDAAgDgDQgEgDAAgEQAAgFAPgfQgBgCAAgDQAAgIAJgDQALgTARgcQAWglAGAAQAHAAADALIAHAhIAOBDIAFAPIADALQAAAEgDADQgCADgFAAQgIAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_25.setTransform(53.9,19);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQAAAEgDADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_26.setTransform(35.7,21.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAiAzIgGgfIgbAFIgZAFIgQAmQgDAFgGAAQgDAAgDgDQgEgDAAgEQAAgFAPgfQgBgCAAgDQAAgIAJgDQALgTARgcQAWglAGAAQAHAAADALIAHAhIAOBDIAFAPIADALQAAAEgDADQgCADgFAAQgIAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_27.setTransform(22.8,19);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#9900CC").ss(3,1,1).p("EAojAYTMhRGAAAMAAAgwlMBRGAAAg");
	this.shape_28.setTransform(275,188.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(529));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoiAb+MAAAg38MBRFAAAMAAAA38g");
	mask.setTransform(275,212.3);

	// content
	this.instance = new lib.Lesson4AnAdjAnswers();
	this.instance.parent = this;
	this.instance.setTransform(282.1,71.9,1,1,0,0,0,155.1,30.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(529));

	// Anim
	this.instance_1 = new lib.bk2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(261.5,211.9,1.007,1,0,0,0,282.3,176.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(529));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'FFDA57F6E4DA1E46895A9733372DCDB0',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/SE1stThought.mp3", id:"SE1stThought"},
		{src:"sounds/SE2ndThought.mp3", id:"SE2ndThought"},
		{src:"sounds/SE3rdThought.mp3", id:"SE3rdThought"},
		{src:"sounds/arealways.mp3", id:"arealways"},
		{src:"sounds/arearticles.mp3", id:"arearticles"},
		{src:"sounds/SEAdjetiveAnswers.mp3", id:"SEAdjetiveAnswers"},
		{src:"sounds/AnAdjanswersatleastone.mp3", id:"AnAdjanswersatleastone"},
		{src:"sounds/modifies.mp3", id:"modifies"},
		{src:"sounds/nounmarkers.mp3", id:"nounmarkers"},
		{src:"sounds/SEBlackHair.mp3", id:"SEBlackHair"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SEBrownHair.mp3", id:"SEBrownHair"},
		{src:"sounds/bushrattle.mp3", id:"bushrattle"},
		{src:"sounds/SERitaChopsMick.mp3", id:"SERitaChopsMick"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/Evanhowmany.mp3", id:"Evanhowmany"},
		{src:"sounds/Evanwhichone1.mp3", id:"Evanwhichone1"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/bgmAdj.mp3", id:"bgmAdj"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/signalthecomingofanoun.mp3", id:"signalthecomingofanoun"},
		{src:"sounds/eyepopsout.mp3", id:"eyepopsout"},
		{src:"sounds/eagleleaves.mp3", id:"eagleleaves"},
		{src:"sounds/eaglemove.mp3", id:"eaglemove"},
		{src:"sounds/_1b.mp3", id:"_1b"},
		{src:"sounds/parrotleaves.mp3", id:"parrotleaves"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/percussionloop.mp3", id:"percussionloop"},
		{src:"sounds/pianoe.mp3", id:"pianoe"},
		{src:"sounds/pianof.mp3", id:"pianof"},
		{src:"sounds/pianof_1.mp3", id:"pianof_1"},
		{src:"sounds/SERedHair.mp3", id:"SERedHair"},
		{src:"sounds/scaryloop.mp3", id:"scaryloop"},
		{src:"sounds/ack.mp3", id:"ack"},
		{src:"sounds/articlesareadjectivescallednounmarkers.mp3", id:"articlesareadjectivescallednounmarkers"},
		{src:"sounds/SE3questions.mp3", id:"SE3questions"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/SEWaterHits.mp3", id:"SEWaterHits"},
		{src:"sounds/SEWaterSpill.mp3", id:"SEWaterSpill"},
		{src:"sounds/WHATKIND.mp3", id:"WHATKIND"},
		{src:"sounds/SEWhichOne.mp3", id:"SEWhichOne"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"},
		{src:"sounds/_1d.mp3", id:"_1d"},
		{src:"sounds/yeah.mp3", id:"yeah"}
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
an.compositions['FFDA57F6E4DA1E46895A9733372DCDB0'] = {
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