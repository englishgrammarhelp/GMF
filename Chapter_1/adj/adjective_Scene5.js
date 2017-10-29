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


(lib.suit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJBnQgEgEAAgGIAAgQIABgRIgDhUIghgDQgMgBAAgNQAAgHADgEQAEgEAGgBIAgADIgBgUIgBgSQAAgGAEgEQAFgEAFAAQANAAACAVIABAOIgBAIIAAAJIAVgDQAPABAFABQAJADgBALQABAHgEADQgFAEgFABIgIAAIgHgBIgUADIACBVIABAGIAAAIQABAggQAAQgFAAgFgEg");
	this.shape.setTransform(47.7,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNBqQgFgEAAgGIAAgbIgBgaIACgjIABghQAAgGAFgFQADgDAHAAQAFAAAEADQAEAFAAAGIgBAhIgCAjIABAaIAAAbQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgJhQQgFgFAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_1.setTransform(36.8,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAhBGQgSAKgXAAQgTAAgNgJQgOgJgDgSQgFgnAAgdQAAgVAEgZQACgNAMAAQAGAAAFAEQAEAEAAAGIgCAWIgCAXQAAAYABAQQACASADAKQAFADAFACIAJABQASAAAWgGIAAgeIAAgcQAAgfADgYQABgNANAAQAGAAAEAEQAFAEgBAGIgCA4IAAAeIAAAgIABAKIAAAKQAAAGgEAEQgFAEgGAAQgLAAgDgOg");
	this.shape_2.setTransform(24.5,27.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoBSQgXgJAAgOQAAgGAFgFQAEgEAGAAQAFAAAHAHQAEADAMADIAQABQAMAAAJgCQAOgFAAgJQAAgUgcgHIgOgDQgUgFgIgFQgMgHAAgRQAAgfAdgNQAJgEASgFIAcgJQAGgDAHAAQAGAAAEAEQAEAEAAAHIACAMIACANQAAAGgEAEQgEAEgHAAQgIAAgDgFQgCgEgCgMIghAKQgXAKAAAOIAIACQAhAGARALQAXAOAAAdQAAAYgUAMQgRAKgaAAQgTAAgRgGg");
	this.shape_3.setTransform(9,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,45.8);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AApBuQgLAHgKABIgVACQghAAgWgUQgWgWAAghQAAgoAWgXQAXgYAjAAQAKAAAJACQAJACAGAFQACgyADgTQACgRARAAQAIAAAGAFQAFAHAAAIQAAAVgDArQgDApgBAVQABA1ADARIAAAEQAAAJgGAFQgGAFgHAAQgLAAgFgKgAgdAHQgLAMAAAZQAAAQALAMQANALAPAAQAKgBAGgCIAOgJIAEgFIAAg2QgFgJgHgDQgIgFgLAAQgUAAgLAMg");
	this.shape.setTransform(41.8,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxA/QgZgSAAgiQAAgkAUgZQAVgdAkAAQAaAAAQAIQAXALAAAXQAAAQgSANQgJAFgYAKIgxAWQAHAIAKAEQAKADAMAAQAUAAANgIQAMgHAIAAQAPAAAAAPQAAARgYAKQgVAJgXAAQgiAAgWgRgAgTgiQgKAJgGASIAhgOQATgJAMgIQgKgFgQAAQgNAAgJAJg");
	this.shape_1.setTransform(24.6,27.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag5BMQgFgFAAgIIAAhfIAAgOIAAgNQAAgJAGgFQAFgGAIAAQARAAADARQAZgTAgAAQAdAAAAAnIAAAKQgCAWgSAAQgTAAAAgTIgBgPQggAFgOAdIAABJQAAAIgFAGQgHAFgIAAQgJAAgFgGg");
	this.shape_2.setTransform(9.5,27.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990066").s().p("AApBuQgLAHgKABIgVACQghAAgWgUQgWgWAAghQAAgoAWgXQAXgYAjAAQAKAAAJACQAJACAGAFQACgyADgTQACgRARAAQAIAAAGAFQAFAHAAAIQAAAVgDArQgDApgBAVQABA1ADARIAAAEQAAAJgGAFQgGAFgHAAQgLAAgFgKgAgdAHQgLAMAAAZQAAAQALAMQANALAPAAQAKgBAGgCIAOgJIAEgFIAAg2QgFgJgHgDQgIgFgLAAQgUAAgLAMg");
	this.shape_3.setTransform(41.8,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990066").s().p("AgxA/QgZgSAAgiQAAgkAUgZQAVgdAkAAQAaAAAQAIQAXALAAAXQAAAQgSANQgJAFgYAKIgxAWQAHAIAKAEQAKADAMAAQAUAAANgIQAMgHAIAAQAPAAAAAPQAAARgYAKQgVAJgXAAQgiAAgWgRgAgTgiQgKAJgGASIAhgOQATgJAMgIQgKgFgQAAQgNAAgJAJg");
	this.shape_4.setTransform(24.6,27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990066").s().p("Ag5BMQgFgFAAgIIAAhfIAAgOIAAgNQAAgJAGgFQAFgGAIAAQARAAADARQAZgTAgAAQAdAAAAAnIAAAKQgCAWgSAAQgTAAAAgTIgBgPQggAFgOAdIAABJQAAAIgFAGQgHAFgIAAQgJAAgFgGg");
	this.shape_5.setTransform(9.5,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,45.8);


(lib.I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhABsQgEgFAAgGQAAgGAEgFQAEgEAGAAQAKAAAWgDQABgMAAgPIAAgZIgBgYQAAghAEgzIgTABIgTAAQgHAAgEgEQgEgEAAgHQAAgOAOgBQALgBAhAAQAcAAAsAGQANACAAAOQAAAHgFAEQgEADgGAAQgJAAgPgCIgXgDQgEArAAAmIABAZIABAZIgBAZIAuAAQAGAAAEAEQAEAEAAAHQAAAGgEAFQgEAEgGAAIgZAAIgZABQgIAAgTACQgUADgKAAQgGAAgEgEg");
	this.shape.setTransform(10.3,24.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.6,45.8);


(lib.have = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxA/QgXgSAAghQAAglASgaQAVgcAhAAQAYAAAPAIQATAKAAAVQAAAPgQAMQgIAFgYAKIg3AbQAJAMAMAGQAMAGAQAAQAJAAAOgDQARgFAGgIQAEgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgXAKgUAAQghAAgUgRgAgdgnQgMAOgGAbIAtgUQAZgNALgKQgMgLgWAAQgRAAgMANg");
	this.shape.setTransform(57.9,27.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQBEIgWg8IgahCIgBgHQgBgGAFgEQAFgEAFAAQAJAAAFAIIAlBmQAKgYAQgrIAMghQAFgKAJAAQAFAAAFAFQAFAEgBAGQAAAFgXA5IgfBFQAAANgMAAQgKAAgGgMg");
	this.shape_1.setTransform(42.3,27.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAuBLQgGgGgDgFQgOAIgLAEQgKAEgHAAQgiAAgPgUQgQgSAAglQAAgjAZgZQAYgZAhAAQANAAAQAGQATAJABALQAAAEgDADQgCAGgBANIgBAfQABASACALIAJAaIAEAHIABADQgBAGgDAEQgFADgFAAQgDAAgIgGgAgYgkQgQATAAAXQgBAYAJAMQAJAMAQAAQAOAAAJgFQAFgDAKgIQgEgmgBgTIABgOIACgQIgJgEIgGgBQgVAAgRASg");
	this.shape_2.setTransform(27.2,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAoBvQgDgMgDgWQgDgWAAgNIABgMIAAgLQAAgbgOAAQgSAAgOAQQgIAJgNAYQAAA4gEAKQgFAJgIAAQgGAAgFgEQgEgEAAgGIABgHQABgDABgSIAAgWIAAhqIABgZIgBgOIgBgOQAAgGAEgEQAEgEAGAAQAMAAACANQADAOAAAMIgBAgIgBAgIAAANQAMgQAOgIQANgIAPAAQAYAAAKAPQAGAMABAZIABAcIADAeQACARADAOIABAEQgBAGgEAEQgFAEgGAAQgKAAgDgLg");
	this.shape_3.setTransform(11,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,45.8);


(lib.hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag4BDIAAhmIAAgOIAAgPQABgOANAAQAOAAAAAYQAcgbAhAAQAMAAAGAJQAGAJAAASIAAAKQgBASgOAAQgMAAAAgOIgBgKIAAgNQgXADgNAKQgOAKgIATIAABPQAAAPgOAAQgNAAAAgPg");
	this.shape.setTransform(50.9,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNBqQgFgEAAgGIAAgbIgBgaIACgjIABghQAAgGAFgFQADgDAHAAQAFAAAEADQAEAFAAAGIgBAhIgCAjIABAaIAAAbQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgJhQQgFgFAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_1.setTransform(39.3,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAuBLQgGgGgDgFQgOAIgLAEQgKAEgHAAQgiAAgPgUQgQgSAAglQAAgjAZgZQAYgZAhAAQANAAAQAGQATAJABALQAAAEgDADQgCAGgBANIgBAfQABASACALIAJAaIAEAHIABADQgBAGgDAEQgFADgFAAQgDAAgIgGgAgYgkQgQATAAAXQgBAYAJAMQAJAMAQAAQAOAAAJgFQAFgDAKgIQgEgmgBgTIABgOIACgQIgJgEIgGgBQgVAAgRASg");
	this.shape_2.setTransform(27.2,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAoBvQgDgMgDgWQgDgWAAgNIABgMIAAgLQAAgbgOAAQgSAAgOAQQgIAJgNAYQAAA4gEAKQgFAJgIAAQgGAAgFgEQgEgEAAgGIABgHQABgDABgSIAAgWIAAhqIABgZIgBgOIgBgOQAAgGAEgEQAEgEAGAAQAMAAACANQADAOAAAMIgBAgIgBAgIAAANQAMgQAOgIQANgIAPAAQAYAAAKAPQAGAMABAZIABAcIADAeQACARADAOIABAEQgBAGgEAEQgFAEgGAAQgKAAgDgLg");
	this.shape_3.setTransform(11,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.7,45.8);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeBDIgEgeQgCgQAAgOIAAgMIABgNIAAgFIAAgHQAAgMgFAAQgNAAgLAQQgMAQgHAYIgBANIgBANIgBANIgBAMQAAAJgGAGQgGAFgIAAQgJAAgGgFQgGgGAAgIIAAgNIgBgNIACgoIACgmIgBgOIAAgNQAAgIAGgGQAGgFAIAAQATAAACAXIAAABQAVgVAXAAQAcAAAKAXQAHAQAAAeIAAALIAAAIQAAAMADASQADASAAALQAAAIgFAGQgGAFgJAAQgSAAgCgSg");
	this.shape.setTransform(73.8,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxA/QgZgSAAgiQAAgkAUgZQAVgdAkAAQAaAAAQAIQAXALAAAXQAAAQgSANQgJAFgYAKIgxAWQAHAIAKAEQAKADAMAAQAUAAANgIQAMgHAIAAQAPAAAAAPQAAARgYAKQgVAJgXAAQgiAAgWgRgAgTgiQgKAJgGASIAhgOQATgJAMgIQgKgFgQAAQgNAAgJAJg");
	this.shape_1.setTransform(57.2,27.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxA/QgZgSAAgiQAAgkAUgZQAVgdAkAAQAaAAAQAIQAXALAAAXQAAAQgSANQgJAFgYAKIgxAWQAHAIAKAEQAKADAMAAQAUAAANgIQAMgHAIAAQAPAAAAAPQAAARgYAKQgVAJgXAAQgiAAgWgRgAgTgiQgKAJgGASIAhgOQATgJAMgIQgKgFgQAAQgNAAgJAJg");
	this.shape_2.setTransform(40.4,27.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag5BMQgFgFAAgIIAAhfIAAgOIAAgNQAAgJAGgFQAFgGAIAAQARAAADARQAZgTAgAAQAdAAAAAnIgBAKQgBAWgSAAQgTAAAAgTIgBgPQggAFgOAdIAABJQAAAIgFAGQgHAFgIAAQgJAAgFgGg");
	this.shape_3.setTransform(25.4,27.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhLBeQAAgIAGgFQAFgFAIAAQAHAAAMACQAMADAKAAQAVAAAKgOQAKgNACgcQgIAIgJADQgKAEgKAAQgdAAgSgTQgSgTAAgcQAAgoAYgZQAZgZAqAAQAOAAAKADQAKADAGAHQATADAAATQAAAKgEARQgGAjgBAlQgBAvgPAWQgTAcgwAAQg5AAAAgWgAgWhCQgMAPAAAYQAAARAGAJQAHAIANAAQALAAAMgNQAMgNABgNQADgOAEgeIgKgEIgJgCQgYAAgOAQg");
	this.shape_4.setTransform(9.8,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990066").s().p("AAeBDIgEgeQgCgQAAgOIAAgMIABgNIAAgFIAAgHQAAgMgFAAQgNAAgLAQQgMAQgHAYIgBANIgBANIgBANIgBAMQAAAJgGAGQgGAFgIAAQgJAAgGgFQgGgGAAgIIAAgNIgBgNIACgoIACgmIgBgOIAAgNQAAgIAGgGQAGgFAIAAQATAAACAXIAAABQAVgVAXAAQAcAAAKAXQAHAQAAAeIAAALIAAAIQAAAMADASQADASAAALQAAAIgFAGQgGAFgJAAQgSAAgCgSg");
	this.shape_5.setTransform(73.8,27.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990066").s().p("AgxA/QgZgSAAgiQAAgkAUgZQAVgdAkAAQAaAAAQAIQAXALAAAXQAAAQgSANQgJAFgYAKIgxAWQAHAIAKAEQAKADAMAAQAUAAANgIQAMgHAIAAQAPAAAAAPQAAARgYAKQgVAJgXAAQgiAAgWgRgAgTgiQgKAJgGASIAhgOQATgJAMgIQgKgFgQAAQgNAAgJAJg");
	this.shape_6.setTransform(57.2,27.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990066").s().p("AgxA/QgZgSAAgiQAAgkAUgZQAVgdAkAAQAaAAAQAIQAXALAAAXQAAAQgSANQgJAFgYAKIgxAWQAHAIAKAEQAKADAMAAQAUAAANgIQAMgHAIAAQAPAAAAAPQAAARgYAKQgVAJgXAAQgiAAgWgRgAgTgiQgKAJgGASIAhgOQATgJAMgIQgKgFgQAAQgNAAgJAJg");
	this.shape_7.setTransform(40.4,27.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990066").s().p("Ag5BMQgFgFAAgIIAAhfIAAgOIAAgNQAAgJAGgFQAFgGAIAAQARAAADARQAZgTAgAAQAdAAAAAnIgBAKQgBAWgSAAQgTAAAAgTIgBgPQggAFgOAdIAABJQAAAIgFAGQgHAFgIAAQgJAAgFgGg");
	this.shape_8.setTransform(25.4,27.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990066").s().p("AhLBeQAAgIAGgFQAFgFAIAAQAHAAAMACQAMADAKAAQAVAAAKgOQAKgNACgcQgIAIgJADQgKAEgKAAQgdAAgSgTQgSgTAAgcQAAgoAYgZQAZgZAqAAQAOAAAKADQAKADAGAHQATADAAATQAAAKgEARQgGAjgBAlQgBAvgPAWQgTAcgwAAQg5AAAAgWgAgWhCQgMAPAAAYQAAARAGAJQAHAIANAAQALAAAMgNQAMgNABgNQADgOAEgeIgKgEIgJgCQgYAAgOAQg");
	this.shape_9.setTransform(9.8,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.7,45.8);


(lib.a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAkBEQgOAGgKADQgKADgHAAQgjABgSgUQgRgSgBgmQABgiAagZQAagaAjAAQAOABATAHQAVAKABANQgBAEgDAFIgCAOIgBAVQAAAaAEAMIAHAQIAFANQABAIgHAGQgFAEgIAAQgHAAgOgMgAgUgdQgOAQAAATQAAAUAGAKQAIAKAOgBQAHAAAJgCQAHgEAIgFQgEgiAAgSIAAgKIACgNIgFgDIgEgBQgTAAgPAQg");
	this.shape.setTransform(10.5,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AAkBEQgOAGgKADQgKADgHAAQgjABgSgUQgRgSgBgmQABgiAagZQAagaAjAAQAOABATAHQAVAKABANQgBAEgDAFIgCAOIgBAVQAAAaAEAMIAHAQIAFANQABAIgHAGQgFAEgIAAQgHAAgOgMgAgUgdQgOAQAAATQAAAUAGAKQAIAKAOgBQAHAAAJgCQAHgEAIgFQgEgiAAgSIAAgKIACgNIgFgDIgEgBQgTAAgPAQg");
	this.shape_1.setTransform(10.5,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.9,45.8);


(lib.diag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("Ak0k0IJpJp");
	this.shape.setTransform(248.4,51.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AG3hWIF6F5ATuhWIs3AAAENjhIAACLIssAAIAABxAofkiIAADMAzthWILOAAAENhWICqAA");
	this.shape_1.setTransform(126.2,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,282.4,85.2);


(lib.diag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AG3jPIJrJqATujPIs3AAAENlZIAACKAofmaIAADLIAAByAztjPILOAAIMsAAICqAA");
	this.shape.setTransform(126.2,41.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,255.4,85.2);


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


(lib.TwiggsPonytail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgPBgQgGgDAAgJIAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQgCgZADgYIAAgBIAAAAIACgDIAHgJIACABQABgFAGACIgEAEIgBAAQgEAEgCAEIAAAAIAAABIgBAGIAAABQgCAaAFAYIgBAKgAgEBeQgBgDgEgBIgDglIAAgKIAAgBIAAgIIABgFIAAAAIAGgHIAAgBIABgBIAAABIAFABQABgFAEgCIAEgCIAAAAQADgDABgDIABgCIABgCIABAAQAFgEAHgCQgCACAAADIAAAAIAAABIAAACIgEALIAAAAIgLAJQgDAAgCADIAAAAIgBAAIgDANIgBACQgDAIAAAGIABAJIgBAYQgBgMABgNIAAgBIgBAAQgBAOABAMIABAEIAAAAgAAEAzIACgFIAJgRIgBAAIAJgHIACAAIgFAFIgBACIgCAHIgGAMQgBACgCAJIgBAMQgDgKAAgKgAgjBDIgCgFIAAgBIAAgBQgFgGgCgIIgBAAQAAgLACgIIABAAIgBgEIAAgBQAIgQAFgDIAHgEIAGgDIAFAAIACADIAAABQgHAGAAAEIABADIgDADIgDADIgDAEIgBACIgBgBQgJASACAbgAgzAjQgKgNAEgTIAAAAIAJATIAAABQAAAJgCADgAgvANIAAgBIAAgBIAAgBIAAAAQgDgHgBgHIgCgCQADgCABgGIACgFIABACIAAgBIABAAQAIgIAMgDIACAAIAHgBIABAAIACAAIAAABIgBAEQABgEAEgDIACAAIAiAAIAKABIADABIgIADQgMABgTAPIgFAFIgFgBIgBAAIgCgCIAAAAIgCABIgCgBQgCAAgJAGIgHAEQgCAAgDAEIgFALIAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAgBAAAAgAAfgGIgLAFIALgMQAJgJAFgDIABAAIAEgBIACgCIAKAAIgBAAIgQAUQgIAIgDAIIgGAFIADgTgAADAAIgBAAQAEgDAHgEQAHgDAIgHIAEgDIgFAFIgMAMIgEAEIgEABQgBABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQgBAAABgFgAA+gUIgDAJIgBABQACgHACgDgAhAgVIABAAIABgCIANgXQgFASAEAGQgFAGgBAGIgIgLgAgwgbQAAgIACgFQAGgGAIgCIAHgBIACADIACAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgJAGgKAFIgBAAIgDABIgFACgAAbgmIgdgBIgLABIgFgDIAAgCIABgDIAUAAIAAABIAKAAQAIAAAGADQAGACAIAAIAPAFIACABIgFABQgDgCgXgDgAAEgzIgUAAIABgDIgNgBIgFACIgCAAIAAgBIAFgBQgGgBgEgCQADgDAGgBIADAAIADgBIAfAAQAVAHANAHIAJAGQgBAAAAgBQgBAAAAAAQgBAAAAABQgBAAAAAAQgUgGgVgCgAAyg7QgXgSgdAAIgIABIABgBIgGABQgLABgHAGIgBABIgSAQIAAAAQAEgNAJgIQAKgLANgFIABAAIAIgCIACAAIABgBIAEgDIARAAQAiAEAJASQAEAHABATQgFgGgKgGgAgGhPIAAgBIAAgCIAAADgAAEhGQAUACAGADQAFACAHAFIgmgMg");
	this.shape.setTransform(8.8,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZCFIAAgBIgBgBIgJgKIgDgDIgCgDIgCgDIAAgBQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIAAACIAAABIABACIABABIAAADIAAAAIABABIACABQgCAJgCgCIgBgDIgBgCIgFgLIAAgBIgBgCQgCgFgEgEIgFgFIAAABIAAAAIgBADIAAAAIgBAGIAAAAIAAABIAAABIgBACIAAABIAAABIAAAAQgDAFgDADQgGAGgLACIAAAAQAAAAAAAAQgBAAAAgBQAAAAABAAQAAAAAAgBIAAAAIAGgCIAEgCIACgCIAFgIIABgBIAAAAIAAgBIACgFIAAgBIABgBIAAgBIAAgCIAAgBIAAgGQgBgGAAgHIAAAAIgGgNIAAAAIAAgBIAAgCQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAAAAQgDgEgBAGIAAAFIAAAMQgBAJgCAIIgBADIAAABIgDAHIgDADIAAABIgDABQgFADgHAAIAAgBQgFgIAIAFIABAAQAEABACgBIABgBQAEgFACgHIAAAAIAAgBQAFgLgCgSIAAgBQgDghgJgeIAAAAQgFgGgDgIIAAAAQgCgTAHgNIABAAIAAgBQgCgFgFAAQgGAGgEAHQgFAJgGABIgBAAQAKgNAGgQIABgDIAAgBQABgEAEgHIADgHIAAgBIABgFIAAgFIACgDIAKgQIAAgBIAFgIQAIgLAPgFQAIgEAJgBIABAAQANgCAAABQAaABAQAJQALAHAEAHQADAGAAAKIAAASIAAACIAAAEIAAADIAAAGIgFARQgFALgDADIgBAAIgDABIgCACIgOAPIgEACIgHAHIgMAVQgDAGAAAQIABAFIADABIgCAJIABAFIAAAAIAFAPQAAABABAAQAAABAAAAQAAAAgBABQAAAAgBAAIgBABIAAACQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIAGACIAAgBQABgEAGgCQgBALgJAEIABAAQAFgDADABIAAABQgDAJgKgDIgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgBIAAgBIgBAAIgEgFIgBgBIAAAAIgBgBQgGgJgCgLIAAgCIgBgEIAAAAIAAgBIAAgEQgBgLABgOIAAAAIAAAAQAAAOAAALIABgXIgBgKQAAgFAFgIIAAgDIADgLIABAAIAAgBQACgDADAAIAMgIIAAgBIADgLIAAgBIAAgCIAAAAQAAgDACgCQgGACgGAEIgBABIgBACIgBABQgBAEgDACIAAABIgEACQgDACgCAEIgFAAIAAgBIgBABIgBAAIgFAHIAAAAIgBAGIAAAGIAAABIAAAKIADAlQADABABAEQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAAFIAAACIAAACIABAEIAFAQIAAABIAAABIAAABIABACIAAACIABAEIAEAHIABADIABADIAAAAIAKAPIABABIACADIAFAEIgDABQgDAAgCgDgAgLgHIgDADIAAAAIAAABQgDAWADAaQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIAAABQAAAIAGADIABAAIAAgJQgFgYACgbIAAAAIABgFIAAgBIAAAAQACgEAEgEIABgBIADgEQgEgCgCAFIgBAAIgHAJgAAYgFIgJAPIgBAGQgBAJADALIABgNQACgJACgBIAFgNIACgFIACgCIAEgGIgCAAIgJAIIABAAIAAAAgAgOgkIgHAEQgEAEgJAQIAAABIABADIgBABQgCAHAAAKIABAAQACAJAFAGIAAABIAAAAIACAGIABABQgBgbAIgQIABABIABgCIAEgFIACgDIADgDIgBgCQABgFAGgHIAAAAIgCgDIgFgBIgGAEgAgpAAIAAAAQACgDAAgJIAAgBIgIgTIgBAAQgEATALANgAgngxQgCAGgDACIACACQABAIADAGIAAABIAAABIAAAAIAAABQAAABAAABQAAAAABABQAAAAABAAQAAAAABAAIAGgLQACgDACAAIAHgGQAJgFACAAIADAAIABgBIABABIABABIABAAIAEACIAGgGQATgOANgBIAHgDIgDgCIgKgBIgjAAIgBAAQgDADgBAEIABgDIAAgBIgCAAIgCAAIgHABIgCAAQgLADgJAHIgBAAIAAACIgBgCIgBAFgAAlgWIAGgEQAEgIAHgKIAQgTIABgBIgKABIgCACIgEABIgBAAQgFACgIAKIgLAMIALgGIgEAUgAAlg1QgIAHgHAEQgHADgEAEIABAAQgBAKAFgIIAEgBIAEgFIAMgMIAFgEIgEACgABEgtIAAgCIADgIQgCACgBAIgAg1g6IgBABIgBABIAIALQABgGAGgGQgFgGAFgSIgNAXgAgWhUQgJADgGAFQgBAFAAAJIAAAAIAEgBIAEgCIAAAAQAKgEAJgGQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAgBIgBAAIgDgCIgCAAIgEAAgAAkhJQAXACADADIAFgBIgCgCIgOgEQgJAAgGgDQgGgCgHgBIgLAAIAAgBIgUAAIgBAEIAAABIAFADIAKgBIAeACgAgFhaIgCADIAUAAQAVADAUAGQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIgJgFQgNgIgVgGIgfAAIgDAAIgDAAQgFACgDADQAEACAFAAIgFABIAAABIACAAIAFgBIAOAAgABKhSQgBgUgEgGQgIgSgjgEIgSAAIgDACIgBACIgDAAIgGABIgCAAQgNAGgJAKQgKAJgEANIAAAAIASgRIABAAQAHgGALgCIAGgBIgBABIAHgBQAeAAAYASQAJAHAFAGIAAAAgAAzhdQgHgGgFgCQgGgDgUgBIAmAMgAADh2IAAADIgBABIABgEg");
	this.shape_1.setTransform(7.9,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.7,15.8,27.2);


(lib.TwiggsHair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AhmAiIAAgEQAGgGAJAAIAAABIgCAGIAAAAIgEAEIgFABIgEgCgAAUAdIgOgCIgLABQgGAAgGACIgIACIgGgBIAAAAIgBAAIADgCIACgEIACgCIAAABIACgBIAFgCIAUAAIACABIAPABIADADQAEACAAABIADACIADAEgAhOAYIABAAIABAAQAIgEADAIIgBACIgJgBIgIADIAFgIgAg8AaIAAgBQADgEAJAEQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgEABQgEAAgBgEgAggATIAYgNIAjgDIADACIAPABIAFADQAHAHgIgDIgRgFQgJgEgOADQgOAAgOALQgIACAAACIAAAAIgHAFIACgIgAgyASIAAAAIAAAAIAAgBIAFgEIAJgDQAIgDALgBIAAABIAAABIAAAAIAAAAQgHAFgKABQgBAAAAABQgBAAAAAAQAAAAAAAAQABAAAAAAQAGgBgDADIgBABIgJAFIAAAAIAAgBIgFACQgDAAAAgGgAAlAWIgOgCQgMgBAFAAIgMAAIgBgBIgNAAQALgEAGAAIAOAAIATAIgAhmAOIAAgBIgBgBIAAgJQADgEgCgHIAAAAIADgNQABAAABABQABAAAAABQAAAAAAABQABAAgBABQgCAIAHgBQAAAFgCAEIAAAAQgEAEAEALIAAAAIAAAAIABABQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIAAAAIgEACQgCAAgBgGgABdANIgBAAIgEgBIgBAAIgZgGIgLgBIgBAAIgCgBQARgBATACIALABIAAABIACAAIAAAAIABABIAAABIADABIACACIABACIgDABIgCAAIgGgCgAhUgEIADgEQAEgHAGABQABAGgDAEIgOASQAAgMADgGgAg+AKIgBAAQADgHAHgCIABAAIAEgBQgBAGgGADIAAAAIgEABIgDAAgAhGABIAAgBQAHgIANgDIABgBQACgBAEABQAAADgDABIgBAAIgDACIAAABQgEAEgFABQgEACgDAAIgEgBgAgkAAIAAgBQAGgDAIgCIAIgBIABAAQAQgEATgCIAIgBQARgCAQACIABAAIgBAFIghABIgBAAIgBAAIgFAAQgTABgRADQgMACgKADQgEAAADgBgAgogIIAAgBIAHgHIABAAQAWgIAZAEIAAACIAAAAQgVABgUAHIgBAAIAAAAQgEACgFAAIgEAAgAg3gSIABgBIAGgGIABAAQAMgHAQgDIAAABIAAABIgIAHIAAABQgKAEgLAEIgEABQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAgBgBAAgAg/gSQgBgEADgFIAAgBIAFgEIAAAAIABAAIADAAQAAADgBACIAAAAIgKAJg");
	this.shape.setTransform(10.5,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVAqQgGgDgFAAIgGgBIgEgCIgOACIgQADIgGAAIgEgBIgCgBIgBABIgCAAIAAgCIAAAAIgcgCIABgCQgDgIgIAEIgBAAIgBAAIgFAJIgKADIAEgFIAAAAIACgFIAAgBQgJAAgGAGIgBgSIABABIAAAAQABAKAGgFIAAgBQABABAAgBQABAAAAAAQABAAAAgBQAAAAAAgBIgBgBIAAgBIAAAAQgEgKAEgFIAAgBQACgDAAgEQgHAAACgHQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAgBAAIgDAMIAAABQACAGgDAEQAAgPADgPIAFABIACAAQAAgIAEgDQAEABAAAIQAAAJACAFIAAgBQAFgIAIgFIAAgBIAEgJQADgGAGgEIAAAAQAEgFADABIgHAKIAAAAIAAADIAAABQADgDAHAAIAAADIgBAGIAAAAIAAABQACABAJgDIAAgBIABgBIAAAAIAHgDQAKgCAJgBIAAADQgBAEgCACIgBAAIgDADIAAACIAeAAIAAABIABAAQAJgBgCAIQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIAJgBIAnABIAAABIABAAQAFAAACACQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgBAAQgDADgDgFIgCAAIgCAAIgBgBQgQgCgRACIgIACQgSACgRADIgBAAIgIABQgIACgGADIAAAAQgDACAEAAQAKgEAMgCQASgBASgBIAFgBIABAAIABAAIAhgBIACABIANADIAWAIIAAABIABAAIAGAFIAAAAIABABIgBAIIAAABIABAAIAHAEIABAAIACACQgBAFgCAAQgBABAAAAQgBgBAAAAQgBAAgBAAQAAgBgBAAIgCgCIAAAAQgCgCgDgBIgCgBIgDgDQgKgBgGgEQgPgFgQgCQALAHAAACIgBACIgEAAQgDgDgQAAIAAgBIgHAAIADACQAPAFABAEIgCABIgQgBIgHgBIAEADQAFAFAEAGIgBACQgDgBgGgEgAANAkIAMAGIgDgEIgDgDQAAgBgEgCIgEgCIgNgCIgCgBIgVAAIgFACIgCABIAAAAIgCACIgCADIgDACIABABIAAgBIAGABIAIgBQAGgCAGAAIAMgCIANADgAhDAgIAAABQABAGAIgDQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQgEgCgDAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABgAgPAMIgYANIgCAJIAHgFIAAgBQAAgCAIgCQAOgKAOAAQAOgDAJADIARAGQAIACgHgGIgGgDIgOgCIgDgCgAg5AZQAAAIAIgEIAAAAIAAAAIAJgFIABAAQADgDgGABQAAAAgBAAQAAAAAAgBQAAAAABAAQAAAAABAAQAKgCAHgEIACgCIACgBQgCgBgDAAIgBAAIAAABIABAAIADABIgCABIAAAAIAAgBIAAAAQgLAAgIADIgJADIgFAEIAAABIAAAAgAgRAYIAOAAIABABIALAAQgFABAMABIAOABIADAAIgTgHIgOgBQgGAAgLAEgAApALIACABIABAAIALABIAZAFIABAAIAEABIABABQAEACAEgBIADgBIgBgBIgCgCIgDgCIAAgBIgBAAIAAgBIgCAAIAAAAIgLgBIgYgBIgMAAgAhYgCIgDADQgDAIAAAMIAOgUQADgCgBgHIgBAAQgGAAgDAGgAhGAQIABAAQAEABADgBIAAgBQAGgCABgHIgEABIgBAAQgHADgDAGgAg4gFIgBAAQgNADgHAJIAAAAQAEACAHgDQAFgCAEgEIAAAAIADgBIABAAQADgBAAgEIgCAAIgEABgAgvgCIAAAAQAHABAGgCIAAAAIABgBQAUgGAVgBIAAgBIAAgBQgZgEgWAHIgBAAIgHAIgAg9gMIgBAAQABADAGgCQALgDAKgFIAAAAIAIgHIAAgBIAAgCQgQADgMAHIgBAAIgGAHgAg/gZIgFAEIAAAAQgDAGABAEIAAAAIAKgJIAAgBQABgCAAgDIgDAAIgBAAgAhtApIAEACIgDAAIgBgCg");
	this.shape_1.setTransform(11.2,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.3,9.4);


(lib.TwiggsHair1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AAAAAIAAAAIABAAg");
	this.shape.setTransform(3.2,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AAxAXIgBgBIgCgCIgBgBIgCAAIgMgFIgCgBIgBAAIgBgBIgDAAIAAgBIAAgBIgDgBIgCgBIgGgCIgBgBIAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAIAAABQgHgEgCABIgBAAIgBABIAAAAQAHAAAFADIAAABIgYgFIgBAAIgCAAIgQgGIgLAAIgBAAIgFACIAAAAIAAgBQgHADgCgDIABgBQAEABADgEIAAAAIAFgBQANgBANAEIADAAIAAAAIACAAIACAAIAAAAIAMACIACAAQAHABAJAEIAAAAIgBAAIgBAAIAAAAIADABIAGACIAAABIABAAIAFACIAAAAIAAAAIAPAGIAAAAQACAEAFACIAAABIAAAAIgCAEgAgKAQIAAgBQgFgBACgFIAAAAQAFgEAIAEIAAABIABADIgBADIgKAAgAgdAGIgBAAIAAgBQAAgEAIADIAAABIACACIAAABIgCABQgDAAgEgDgAgqABIgFgCQAEgDAFACIACAAIAAABIACAAQgBADgDAAIgEgBgAAzAAIgBAAQgSgHgRgCIgBAAQgHAAgFgBIgEgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIgIAAIAAAAIgCAAIgBAAIACgCIACgBIABAAQADgBAEAAIAHAAQAaAGAVALIAGAEIAAAAIADABIgCAAIgIgBg");
	this.shape_1.setTransform(7,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABHAhIgBgEIABgCQgCgJgJgDIgDAAIgEgBIgCAAIAAABIgBAAIgCAAQgGgBgEgDIAAgBIgBAAIAAAAIAAgBQgFgCgCgEIAAAAIgPgFIAAAAIAAAAIgFgCIgBAAIAAgBIgHgCIgCgBIAAgBIABAAIABAAIAAAAQgIgEgIgBIgCAAIgMgCIAAAAIgCAAIgCAAIgBAAIgCAAQgNgEgNABIgFABIgBAAIAAAAIABAAQgEAEgDgBIgBAAIAAABQACADAGgDIAAABIABAAIAFgCIAAAAIAMAAIAQAGIACAAIAAAAIAZAGIAAgBQgEgDgIAAIAAAAIABgBIABgBQADgBAGAFIABgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAAIABABIAFACIABAAIAEABIAAABIAAABIADAAIAAABIABAAIADABIAMAFIABAAIABABIADACIABABIAAAAIABAAIABAAIAAABIAAAAIAEACIAEADIAAAAIABABIABAAIAGAFIAFAEIAAABIAAABIABAAQgBAHgFgCIgEgEIgEgEIgDgCIAAgBIgBAAIgBgBIgBAAIAAAAIgGgDIAAAAIgBgBIgDgBIgBgBIgJgEIgFgDIgFgDIgFgCIgCgBIgBAAIgCgBQgEgBgDACQgBADADACIgDgBIgEgDIABgDIgCgDIAAgBQgIgDgFADIAAAAQgCAFAFABIAAABQgJgCgHgDIgCgBIgDgBIgFAAIgBgBIgBgCIgBAAIgCAAIgGgFIgWgCIADgNIAYgNIAkgDIADACQAaACAaAIQAGAEAKABIACADIgHgDIgCAAIgWgEIAAABQAPAGANAHIABABIAAABIACABIADACIADACIAEAEQALAHAIALIAAABIACAJIAAAEIgBAAQgCAFgDgEIgBAAIgBABIACAFIgEACQgDAAAAgHgAgsgDIAAABIABAAQAGAEADgCIABgBIgBAAIgCgCIAAgBIgGgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABgAg9gKIAEADQAHADACgGIgDAAIAAgBIgBAAIgFgBQgCAAgCACgAgRgZQAAAAAAABQgBABABAAQAAABAAAAQAAAAABABIAFACQAFABAGAAIABAAQARACASAHIABABQAHACADgBIgDgCIAAAAIgGgEQgVgLgZgGIgIAAQgEAAgEABIAAAAIgCABIgCACIABAAIACAAIAAAAIAIAAg");
	this.shape_2.setTransform(8.4,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,8);


(lib.bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],1711,-72.2,1711,36).s().p("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");
	this.shape.setTransform(296.7,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#6A6A6A"],[0,1],205.4,-15.1,205.4,4.4).s().p("AiQBHIAAgBQAaAAA8gdIAegQIAUgMQASgMAKgJQAVgVA1giQAdgTAKgIQAOAMgCAjQAAANgGAsIgCALIgBAKQAAAFgCAEIgCAAIgFABIAAAEIACACQgLAMgaAMQgmAQgTAAQh7AAg4gUg");
	this.shape_1.setTransform(233.6,182.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#919191"],[0,1],198.5,-13.5,198.5,6).s().p("AjwBKQgPgLgDgOIAAgIIgBgGIAIgGQAwgfBXgjQBqgqA6AAIABADIgoAYQgqAagVAaQgLAOgXAPIgVAMIgTAJQg4AbgiAAQgEgJgEAAQgDAAgBAFIAAAGIABABIgLgGgABWBGIgQgHIAIgWIACgLQAEgZABgeIAXgTQAcgPAtAAQAcAAAZAhQAVAaAEAeIABALIAAAFQAAAIgOALQgUAOgigBQgTAAhXgIg");
	this.shape_2.setTransform(240.5,180.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FEA245","#6666FF"],[0,1],20.8,-49.2,39.5,20.4).s().p("AKOCaQgogJgLgHQgJAEgTAAIgcACQghAEgDAcQgaACgdgcQgcgagYAGQgGgNgUgcQgSgYgFgTIA1gQQACgFgGgEQgGgEAGgCQAGAAAmAGQAaAEAWgCQALAIAUAXIAJABIAsABQANAEAOAKIAdAWQARAKAQABQAIABAfgCQAagCAQADIAcAYQAQAOAQAFQgHARgYAFQgHgWgIgIQgQADgDAQQgNgNgJgCQgaALACAbQgLgTgigHgAnrCGQgNgTABgPQgNgBgJANQgKANgKABQgJgDgIgUQgJgRgNgCQgMADgNAQQgNAQgLADQgNgHgKgjQgMAAgKANQgLANgJABQgahEgvAaQgigcgFgHQDXiTDLg0IACAJQgHAFABAKQAVgCAggPQAggQAWgBQgCAQAHAWQAPABALgNQANgQAHgDQAKAGAjAeQAaAXAYAHIgBgcQAAgQAJgCQBHAjBCADQABgJgHgNQgIgMADgEQAMAAASAHQATAHAMABQgCgPAJgEQAJAFADAAIAMgFQgBAGAGAJQAFAIABAHQAKAGAfAeQASARALAEIAAABIABABIgKgBQgPAAAAADIABABIgBAAQgmgJgMAJQAJAMASAQIAhAaQAlAggBAjQglgTgZgEQAGAJAHAfIgGACQgFgGgTAAQgTAAgIADQgMgFgMAFQgKACgRANQgYgagkAUQgfARgPAbIgegKQgSgHgSACQgKAIgJALQgZgJgqAHQguAHgdgJQALgHAsgPQAigNAOgPQhAgNhcAlQAvg6BTgqQg1gJg/AfQg5AcgiAqQgMAWgIAJQgKANgQAAIgLgCg");
	this.shape_3.setTransform(230.3,57.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C25812","#FF9933"],[0,1],135,32.6,127.3,3.8).s().p("A2TC5QANgDAMgGQAMgFALgHIAXgQQAjgcABgRQAAgGgGAAIg8AeQguAPghAHIAAAAQAGgNABgKQACgLgJAAQgpAigWAPQgRAKgHAAQgEAAgHgKIAAgBQgGgLgEAAQgEAAgIAHQgEADgGACQgGABgKAAIgDgBIgJgEIAngYQAAgIgKAAQAIgEgBgJQgEgQgOgIIABgaQAAgagFgLQgLgWgHgdQAMAIAHAQQAJAUADADQAKgSgBgjQABgPgIgtQgHgogDgLIAoA5QAjAwAKAaIADgBQgFgpAgg8IAcgxQARgdAHgUIABAAIAAAdQgEAMABAeIADA0IAAAaQAAASAFAJIADgCQAKgfBJgsIB7hJIAAABQgSAkg/BuQABAFAEABQBBgjAzgMQBRgSAcgKIhaA6QhGAtAAAIQAAAFAEABQAPgGBAgKQA4gKAggDIAAABQi9ByAAAHIAEAGQAUgKAhgFIBAgIIAAABQghAxgvAaIgJAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAABIAEAAIAZgJIBDgaIAAABQgMAEgJAKIgKALIgJAIIgHAEQgiAShTAAIgIgFIgFgBQhQAWghAAQgiAAASgZgAUMDBQgGgJgJgIQgHgHgJgGQgfgVgUgTQgQgRgDgYQgBgagDgOQAHAMAcASQAeATARAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgFQgCgPgOgeQgLgZAAgXQAAgTAHgEQAHAJAEAVQAKAcASAAQANAAAGgnQACAJAGALQAJATALAAQAUAAAnhoIAAAAIAKBMIgBASIAEAAIAggfQAGgIANgYIAAAAIAABKIgHAYIADADQBGgsAWgsIAAAAIgRA2QgKAfgMAYQAAAEADABQAQgLApgYQAcgSAIgNIggA7QgQAZgpAlIAEAEQAlgSBHgpIAAABQgTAZgmAhQgeAagTAKQgMAFgHAAIgHgFQgFgEgGAAQgIAAgMAEQgMADgRAIQglAHgSAFIAAgBIATgWQAXgeAAgOIgBgHIgDAAIgVAhIgNASQgQASgJAAQgGgRgJAAQgbAYgEAAQgRAAgFgIg");
	this.shape_4.setTransform(279.8,167.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF9933","#980189"],[0.008,1],88.3,-28.6,88.3,36.8).s().p("AiHEIQgQgGgMgDIgNgCIARgIQAagOANgKQA8g6AAgJIgBgDIgJgBQgVAAgfAMIggAOIABAAQBfiEAAgXIgBgFIgFgBQgNAAgqAbIg9AoIgBgBQAHgSAOg+QAPg+AAgNQAAgEgEgCQgxA1gsAkQgchYgMg1QANAQAVAQQAaAUARAAQAHAAgBgTQgGg3gBgUQAAgbAIgSQARglAGgSQAMA/AqA9QBUB7AKAAQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIAAgFQgGgVgCgUIAAgpQgBgnAGgYIAGgXQACAXAmBPQAGAOALAqQAJAfALASQAbggBKhOQgbBNghBNQAAAFAGABQAPgWAvgfIBKgxIACADQABAQggBBIgLAWQgGANgIAHQgyAdAAAJQAAABAAAAQAAABABAAQAAABAAABQAAAAABABIADAAQAXAAA0gaQAtgVAWgQIABAAQggAzg6AyIg1AnIAAACQACADAGAAIBEgZIABABQgEAQgtAWQgnASghAHIgGACIgfAJQhCAUgOAAQhUAAgfgLg");
	this.shape_5.setTransform(342.3,159.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B16A01").s().p("Ah1DLIgLAAIADgFIABgDIAEgLIAHgJIB2iPIA8g+QBFhGCIh9QAGAvg4AzIgvApQgbAXgKASQh6BshnCjQgDgXgZAAgAkOC8QAUgUAHgoQACgKAGhEQABgLAMg/QAIgsgGgXQAYAFgDAMIgDASIgCAAQgLApgGBRQgHBegDAYQgHAIgfAAg");
	this.shape_6.setTransform(392.1,57.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FEDD92","#D2A679"],[0,1],1775.2,-184.3,1793.2,-12.4).s().p("A9fAQIAEAAIgEgBIAAgCIAIAEgAhlAHIADAAIAAAAIgDAAgACtgOIACACIAAABgAdfgPIABgBIAAABIgBAAg");
	this.shape_7.setTransform(229.1,188.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AR6D6IAIgCQAEALABAHgARuD5IADACQAIAEgFADIgGgJgAMxDJIAFABIgFABIAAgCgAKxC+IgBgBIACgDIADgDIgBADIABAEIgEAAgAK4CpIABAAIAAAAgAoHBPQgCgGgCgDIAFgCIABACIAEAPgAh/AwIAFgCIABABIADACgAL1g7IADAAIgDAeIAAgegAn8hEIAGAAQAHABAGACIgCACQgFgDgMgCgAtViZQgagWgXgGQgHABgMAPQgKANgFgDIAAgeQgWgHgbAKQgdAPgOAFQABgFAIgGQAHgFgBgHQgfAAgvAQQgxARgSABQAQgGA6gkQAwgeAjgEQALgCAbAFQAagCA8gbQAtgVBAAQQARAmAtgEQAeAYBGAmQgFAOABABIgfgLQgSgHgQgBQgCAIAJAOQAIAMgEAEQgiACgngPQgwgTgRgCQgFADABASQACARgGAEQgMgGgfgbgAwXivIALgDQgBAEgIAIgAKqjvIgCAIQgKgGAMgCg");
	this.shape_8.setTransform(295.8,57.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FEDD92","#3CCC49"],[0,1],1637.8,-531.4,1697.8,-304.6).s().p("EgoEAJ5IAAyuIADABQAJABAOAAIAZgDIAZADQAkAAAugbIAPAHQAPAGANAAQAZAAAJgOQAFABAHAEQAIAEAPAAQAPAAAEgGQABgGACgDIAUAJQAOAGAUAAQANAAAGgEIAPgIQAGAKATAAQAOAAAGgFIAHgIIAHAHQAHAEAXAAIAQAAIADgDQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABACAMAAQAYAAAJgIIAIgIQACAAAIAGQAIAEAHABQAGgBAHgEQAHgGADAAQACAAAIAHQAIAHAGAAQAHAAAFgFIAHgKQAFAGANAAQAqAAAtgcQAGAHAZAMQArAWA3AAQAwAAApgNQANASAigIIA+gRQAcgJABACQABACAFAFQACACAWAAQBIAAApgcIACAAQABAKAHADQAOAGA0AAQAuAAAPgMQADARAKAEQARAHBAAAQAfAAAegJQAtgOAPgCQACAJATAIQATAIAbAAQAYAAAfgRIAVgNIABAAIAFgFIABAAIAAABQADAIgCANQACAMAZALIAnASQAtANBWAAQBVAAAcgXQALgJAIgOQAiARBbABQAkgBAXgPQATgNAAgOQANAWA8gRQAkAAAPgIQAQANA2ABQATgBBbgJQAEAAAKAGQAJAFAMAAQATAAAGgDIAEACQAPgBAPgIQAIgFARgCIAfAAIALAJQANAKAfAAQAMAAAegNQAlABAAABQALAIAFABQALABAGAGQAPAGA7AAQAvAABhgeIAoAAQAFAHAQAAQALAAAJgFIADgCIARAAIADAGQAMAJAwABQA3gBAJgGQBTAAApAJQApAIANAAQAeAAgHgEQAsAAAPADQADAAARgMIAQgLIAAAAIACgCIAWAAIAOAMIAGAKQAKAKASAAQAIAAAXgXQAIAAAFASQAVgLAPgQIACAAQgJALgQAOIAAAHIAEAAIA2gMIA8gRQAHAAAHAJQAHAAAPgIQADAIALAAIATgEQAvAAACAFQAdAAgBgKIAEAFIABACQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAABQAIgCAaAAQAwAAAAgIQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBIFRAAIAIAIIAAABIABABIACABIADgBIA5AGIAegBIACgCIAAgEIACACQATAQAZAAQAQAAAAgPIgBgIQAFAEALAAQAIAAAHgIIAZAAQAFACAHAAIAHgCIALAAIAAAFQADAHAPAAQAOAAAYgMIABAAQAAASANAAQAKAAAlgKQAMAAALAEQAWAAANgMIADAAQAAAEACACQAFAHAPAAQAKAAARgNIABAAQAJAQAgAAQAKAAAEgEQADgFAlAAIAWABIAFADIAYgIQAGAAASAHQAFAAAKgGQAKgFAAgDIAATxgEghtgEsIAMgIIgTAAIAHAIg");
	this.shape_9.setTransform(296.7,247.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF9933","#660033"],[0.008,1],96.4,-27.9,96.4,37.5).s().p("EgiMAEGIgBgCIAMgHIAGACQAMAHAIgBQAUAAAKgLIADAAQAEAHAEAFQAGAIAIAAQAIAAAPgIIASgMQASgNAYgWIABACQgJAPAAAJIABAFIAFABQBogbAjgXIAAAAQgRAXgYARIgfANIgIADIgSAJQgPAIAAAFIABAEIACAJIgHABQgjAJhHAAQgQgBhJgjgAZbENIgKgHQgUgPgKgXQAAAAAAABQgBABAAAAQAAABgBAAQAAAAgBAAQAAAJAVAaIAHAIIgzABQgEgDgCABIgWgBIgDAAIgGgGQgPgPgMgQIAAADQgJgNACABQgdgrgKgtQAMASAVATQAZAXAPAAIAEgBIAAgGIgWg/QgKghgCggQANAZAHAJQAZAhAMAAIAEAAIAAgTIgCgaIAAAAQAiAiAGAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAQgBgQAAgKQAAgQAJgBIgGAFIAEACQADgBADgCIAHAUQACAFAJAIQAKAJAFAAQANAAAFhAIAAAAIAFAPQAFAKAOAAQAKAAATgYIAkgtIAAAAIAAABIgCAeQAAARANAAQAEABArgvQAqgrAHgLQgDAVgJAiQgIAcAAAXQAAANADAEQAJgOA7ghIAAAIQgDALgOAmQgJAaAAATIAAANQADAMAQAAQAPAAAbgVQAegWARgdIAAAAQgQA1AAAJIAAAHQABAIAGAAQAHAAAagXQAbgZASgEIAAAPQgEAPgGAeQgJAVAAAXQAAAEADACIACgBQADgOAXgLIAbgJQAXgHAEAAQABAAADAHQACAHAGAAQAIAAATgRIAAABIgbAwIADAFIAIgEIAFgCIAIgCIAggEIAAAXQgRAWgNAAQgPgIgDABIgYAHIgCgBIgYgBIgCgBIgIAAIgbgBIgCABIgDAEQgCAFgWAAQgQAAgHgJIAAAAQgFgJgBAAIgNAJQgMAGgLABQgJgBgBgGIgBgKIgDgBQgIAHgHAEQgJAGgGAAQgXAAgBgDQgBgCgGgBQghALgUAAQgEAAABgJIAAgCQgBgHgGAAIgOAHQgNAGgLAAQgKAAgCgGIgBgDQAAgLgCgDQgGANgUAAQgOAAgDgYIgEgBQgCAAgJAPQgGAKgHAEIgIABIgEgBQgFgDgGgHIgJgMIgDACQgBAEAHAQIAGALQAAAJgKAAQgRAAgWgNgAjCEGIgBgBIAJgJQAbgjAAgOQAAgBgEgDQgaARgeAAIAAgOQAFgPAAgEQAAgHgHAAQgKAAgkASIgqAUIAAgDQAOgcAAgJIgBgCIgFgBQgWALhcAmQAGgRAAgNQACgQgHAAQggAlgIAIQgVATgmALIgIACIgNACIABgCIAAgDQABgIAEgEQASgUAAgVQABgKgKgDQgigLgIAGIgCACIgFgHQgBgEAAgNIAAgHQAQgDAMgKQAMgKABgKIABAAIADglQAAgSgWgyIgVgsIAFgBQAoAJANAYIAJAUQAFAMAGAGIADgBIABgQQAAhdhjh6IAAAAQCCBRAiBxIAEgDIAAhRQgEgrgdg+QgjhHgOgjQCiCrAABFIgEAQQgFAPAAAMQAAAEAFAEQAQgVAAgLQAAgPAVhKIAXhSIABAAQACAnAYBRQAWBNAAAqQAAAJgGAQQgHAQAAAHQAAAEAFACQBFgqBchbQgIAQgDAaIgGAqQgRA6gXAaQgBAFAFABIA8gsQArgeAmgPQgMAdgvBFQgsA+AAADIAAAFIAFABIAkgRQAmgTATgDIAAACQgWAggiAaQgOALgfAPIgCABIgSAHQgMAAgDACIgBABIAAACQgUAGgQAAQgRAAgJgJg");
	this.shape_10.setTransform(334.2,158.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#67E473","#015C13"],[0.008,1],162.8,-28.4,162.8,37).s().p("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");
	this.shape_11.setTransform(267.8,159.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#67E473","#015C13"],[0.008,1],138.8,-83.7,138.8,91.3).s().p("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A+gUQAWAOAFAJQAMgIAdgKIABABIACAAQABAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBQAEgDAVAAQAPAAAKANQAKANAIAAQADADADACIgBgGQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIgCAAQgDgLgFgOQgIgWgCgKQALACAUAKQASAJANABQgBgognghIgegaQgRgOgFgNQAWgCAjAGIACgDQAGACAEAEIABABIAAAAIABABIANALIATAQIABABQALANALAIQABgcgRgbQgXgggDgNQAFgCAHACQACACAOACIADABIAEADIgFAAQAUAFAOAfQAPAhANAIIATgxQALgcAMgPQADAXgMAdQgOAgAAAIQANgDAdgcQAbgbAXgEQgMARgYAUIgpAgQALABApgIQAmgKASAFQgNALgjAKQgjAJgNAJQAIAHAcgGQAagFAHALQgaALgvAJQAAAJATADQARACgCANQABAHgGAEQgJAGgBACQAHAGAIgBIAUgBQAGAGAKAaQAIAWAKAHQgHgRATgCQATAAAKARQADAFAKAcQALgKAQAFIAeAJQgGgaAhgIQATgEArgFQAAAFAHAGIgIAMQgFAGAGAGQAIgCAOgMQANgLAOABQAMACANASQAPATAJAEQgGgPAEgOQADgRAOAAQANABAOAOQAFgTALAAIAHAVQAFAMAHAGQAIgcAhACQAYACAbAQIAeghQAIgDAKAAIANgBIAiAKIABAAQAGAFAFAGQANghArAIQAqAKACAiQADgcAMgKQAEACAEAJQAEAJAHgBIAFgKQADgHAEgCQAIADAGASQAFARAIAFQAEgKAWACQADADADAOQADALAHACQAXgTAuAAQAVAAAkAGIADAAIgBABIgCACIABACIADABQACAAAEgDQACACATAAQATAAAFgEQADgCABgEIACgBIABAAIABAAIAFABQAEADAEAAIABAAIAAAAQACgDAEgLIAJgcQAHgcAQgHQACAQgIARQgJARAAAMQAKgDAOgNQAOgNAMgCQAIAOgQAZQgPAWALAMQAJgCAGgEQAKgDAIAAQAPAAAFANIAEALIgSAfQAMgKAYgbQAXgVAVAIQAHADAJARQAIAPAKgBQgFgCAHgIQAGgKAIACQAPgBAUAQQAUAPAGAAQAEgSAaAJQAYAKAHAOQAKgJAXADIAlAGQgCgPgXgrQgVgpAAgTQAQAHAYAVQAaAVAOAIQgCgXAKgXQALgZAEgNQAJAIAJAcQAIAaAMAGQAqgsAjgQQgIAQgXAbQgXAbgHASIA0gRQAogNAXAHIgpAWQgZANgLAOQAIAEAjAAQAgAAANAIQgiALgQAAQALAPAbAMQAVAKAOACQABADgEALQgDAFAKAAQAHgBAYgKQAZgGARAKQABAMgNAIQgOAJgBAJQAEAAAdgKQAPgFAVANQAAAGAHAEQALAFABACIAGgsQAEgZANgIQAVAVAKAGQgBgwAQgJQAVgGAGASQAIAcADACQAYgjAagEQACAJgFAJQgGAJABAIQAJAAAIgGQAJgHAJACQAHADAHASQAGASALACQgBgaAQgUQAJACALAJIANAKIAFADQACgnAsAEQAEAEAJAYIABADIABAEIAJgFIAVgMQASgKASAAQAOAIAJAWQgBAEgGAMQgFAHAEAIQAIACAIgHQAIgHAHAAIAKAPQAGAJAHADQgCgiARgEQAJACAKALQAKAMAJACQAAgXAJgLIABgBQACgDAEAAQACAAAEADIABABIADAFQAFAGAIAAQAJgjAVgHQAKAFARAOQAKgNAQgFIAUAdQAMgGAKAJIAQAQQAGABAJgDQAGgDAHABIAGAFQAIAEADABQADgBADgIQADgKAPAAQAGAAAPAJQAOAIAFAAIASgHQAUgHARgBQASABAJAIQAJAJAEAAIARgHQAPgHALAAQAPAAAGAJQAGAJACAAIAAAAIACAAIABAAIAcgNIAAN4IgCAAQgVAAgIACIgOAEQAhg1AAgQgAVECuIAIAAIAGgMIAAAAQgJAEgFAIgEgipAAQIACAJIAHgLIgJACgA8xgeQADgFgGgBgA0JiUQgHABAJAGIgBgIIgBABgADCMZIABAAIABACgA5mMYIABAAIAAACgABBMUIAAADIAAABgAVdMPIABgBIAAABIgBAAgAgsMCIABgBIAAACgAKhL8IABAAIAAABgEAnoALzIAAAAIAAABgAWzLpIAAgBIAAABgAVILaIAAAAIgBAAgAoBLOIAGABIgEADgAUQK/IAAgBIAAABgAeBKzIADAAIAAACIgDgCgAESKZIAAABIgBAAgEAk6AKZIAAgBIAAABgAzPKFIABAAIgCABgALjKDIAAAAIAAABgAViJ1IAAAAIABABgAULJoIAAAAIAAAAgEAhKAJLIAAgBIAAABgATKJKIABgBIAAABgA1DI+IAJAAIgJACgA1vHfIAAgBIAAACgA5GHFIABgBIAAABgAjSF8IABAAIAAAAIgBAAgAJAotQAtggBCAAQghgYhLANQhVASghAFQAegrA/gbQBCgdA0ALIABgIIAIAAQg1gkACgVQAdgCAZASQAlAcAEACQAYgkBUgXQgFAMgRAPQgQAPgEAMIBMgWQA4gNAkAQQgzAMgNAFQgiALgRASQBAgEAxATQAwATAQAkQhIgghGAFQAOAQAlAhQAeAeADAcQhHhahHAVQBAAsAJBHQgcgdgQgOQgdgYgaACQAMAOgJABQgQgLgxgBQgJADgWANQgUALgGAAQADgLAPgNQAPgNAFgJQgxgCg3AhIgsAeQgbAQgUAHQAHg9AyghgAT9p3QgQADgKAZQgMAcgIAFQgEgRAIgaQAIgagEgPQgHgcgtgMQg2gLgYgGQBCgXAtAPQgNgJgrgWQgkgSgPgQQAugKBQAoQgRgZgZg4QAXgEAZAUQAFADAfAgIAEgdQADgTANgGQgBAMAEAQQAEAQAAAFQAygaATgDQgEALgPAKQgTAMgEAEQBjAFAUAyQgVAFgZgCQgZgCgOgKIAmAzQAbAiABAiQgTAEgUgTQgdgcgFgDQAEAQATA5QAMA2gcATQgGgLgMgtQgKgkgSgLQgJASgOAoQgPAigTAPIALh3g");
	this.shape_12.setTransform(296.7,101.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("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");
	this.shape_13.setTransform(296.7,104.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.2,0,512.9,311.2);


(lib.Lesson3Twiggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		playSound("Ihaveredhair");
	}
	this.frame_60 = function() {
		playSound("ball_passes");
	}
	this.frame_108 = function() {
		playSound("_1b");
	}
	this.frame_114 = function() {
		playSound("Ihaveagreensuit");
	}
	this.frame_147 = function() {
		playSound("ball_passes");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(39).call(this.frame_60).wait(48).call(this.frame_108).wait(6).call(this.frame_114).wait(33).call(this.frame_147).wait(88));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgFAHAAQAHAAAGAFQAFAGAAAGQAAAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape.setTransform(211.2,36.1);

	this.instance = new lib.hair("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(184.2,24.4,1,1,0,0,0,29.9,22.9);

	this.instance_1 = new lib.red("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.2,24.4,1,1,0,0,0,38.6,22.9);

	this.instance_2 = new lib.have("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(62.1,24.4,1,1,0,0,0,34,22.9);

	this.instance_3 = new lib.I("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(7.3,24.4,1,1,0,0,0,10.3,22.9);

	this.instance_4 = new lib.a("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(94.4,24.4,1,1,0,0,0,10.4,22.9);

	this.instance_5 = new lib.green("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(146.1,23.6,1,1,0,0,0,34,22.9);

	this.instance_6 = new lib.suit("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(234.6,24.4,1,1,0,0,0,29.9,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{x:7.3}},{t:this.instance_2,p:{x:62.1}},{t:this.instance_1},{t:this.instance},{t:this.shape,p:{x:211.2}}]},21).to({state:[]},87).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_2,p:{x:42.3}},{t:this.instance_3,p:{x:-8.5}},{t:this.shape,p:{x:261.5}}]},6).wait(121));

	// Layer 4
	this.instance_7 = new lib.hair("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(184.2,24.4,1,1,0,0,0,29.9,22.9);
	this.instance_7._off = true;

	this.instance_8 = new lib.I("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-8.5,24.4,1,1,0,0,0,10.3,22.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).wait(39).to({startPosition:0},0).to({scaleX:0.85,scaleY:0.85,x:185.1,y:103.6},15).to({_off:true},33).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(114).to({_off:false},0).wait(33).to({startPosition:0},0).to({scaleX:0.86,scaleY:0.86,x:24.6,y:103.2},14).wait(74));

	// Layer 3
	this.instance_9 = new lib.red("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(138.2,24.4,1,1,0,0,0,38.6,22.9);
	this.instance_9._off = true;

	this.instance_10 = new lib.have("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(42.3,24.4,1,1,0,0,0,34,22.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21).to({_off:false},0).wait(39).to({startPosition:0},0).to({scaleX:0.85,scaleY:0.85,rotation:45,x:211.3,y:149.8,startPosition:9},15).to({_off:true},33).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(114).to({_off:false},0).wait(33).to({startPosition:0},0).to({scaleX:0.86,scaleY:0.86,x:98.6,y:103.2},14).wait(74));

	// Layer 2
	this.instance_11 = new lib.have("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(62.1,24.4,1,1,0,0,0,34,22.9);
	this.instance_11._off = true;

	this.instance_12 = new lib.a("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(94.4,24.4,1,1,0,0,0,10.4,22.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21).to({_off:false},0).wait(39).to({startPosition:0},0).to({scaleX:0.85,scaleY:0.85,x:94.2,y:104.8},15).to({_off:true},33).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(114).to({_off:false},0).wait(33).to({startPosition:1},0).to({scaleX:0.86,scaleY:0.86,rotation:45,x:195.2,y:136.7,startPosition:4},10).wait(78));

	// Layer 1
	this.instance_13 = new lib.I("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(7.3,24.4,1,1,0,0,0,10.3,22.9);
	this.instance_13._off = true;

	this.instance_14 = new lib.green("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(146.1,23.6,1,1,0,0,0,34,22.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(21).to({_off:false},0).wait(39).to({startPosition:0},0).to({scaleX:0.85,scaleY:0.85,x:22.6,y:102.5},15).to({_off:true},33).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(114).to({_off:false},0).wait(33).to({startPosition:0},0).to({regX:34.1,scaleX:0.86,scaleY:0.86,rotation:45,x:249.7,y:143.1,startPosition:4},10).wait(78));

	// Layer 5
	this.instance_15 = new lib.diag1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(115.4,110.8,0.515,0.515,0,0,0,126.1,41.1);
	this.instance_15._off = true;

	this.instance_16 = new lib.suit("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(234.6,24.4,1,1,0,0,0,29.9,22.9);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(54).to({_off:false},0).to({regX:126.2,scaleX:1,scaleY:1,x:112.9,y:142},6).to({_off:true},48).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(114).to({_off:false},0).wait(33).to({startPosition:0},0).to({scaleX:0.86,scaleY:0.86,x:175.2,y:103.2},14).wait(74));

	// Layer 8
	this.instance_17 = new lib.diag2("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(112.9,142,0.719,0.719,0,0,0,126.2,41.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(141).to({_off:false},0).to({scaleX:1,scaleY:1},6).wait(88));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AoZAmQACgdAAgbQgvgPh3AdIhTAUQCKhXBdACQAAghAVgiQANgUARgRQAngnAygdQAcgOAcgLQCag7C0AUQBKAIBNgBQDfgFDYAhQAaAEAWAHQCBAmALB9QADAgAHAhQAHAiAFAjAMLAmQAPBGgVBHQggBsjmAOQjeAIjkACQh1ABhxgKQgJAAgJgBQhAgGg/gKQiWgWgvhGQguhDAPhHQACgIABgJ");
	this.shape_1.setTransform(-12.6,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AipEuIgSgBQhAgGg/gKQiWgWgvhGQguhDAPhHIADgRIACAAIACg4QgvgPh3AdIhTAUQCKhXBdACQAAghAVgiQANgUARgRQAngnAygdQAcgOAcgLQCag7C0AUQBKAIBNgBQDfgFDYAhQAaAEAWAHQCBAmALB9QADAgAHAhQAHAiAFAjIACAAQAPBGgVBHQggBsjmAOQjeAIjkACIgWAAQhqAAhmgJg");
	this.shape_2.setTransform(-12.6,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AtBAQQCThcBjADQAAgkAWgkQAOgVASgSQApgqA1geQAegPAegMQCkg+C/AVQBPAIBRgBQDtgFDlAjQAcAEAXAHQCJApAMCFQADAhAHAkQAIAkAFAlQATBLgXBLQgiBzj0APQjsAIjyACQh9ABh4gKQgJgBgJgBQhFgGhDgKQifgYgyhKQgxhHARhMQACgJABgJQAEgfAAgdQgygQh/Afg");
	this.shape_3.setTransform(-7.7,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai0FBIgSgCQhFgGhDgKQifgYgyhKQgxhHARhMIADgSQAEgfAAgdQgygQh/AfIhYAVQCThcBjADQAAgkAWgkQAOgVASgSQApgqA1geQAegPAegMQCkg+C/AVQBPAIBRgBQDtgFDlAjQAcAEAXAHQCJApAMCFQADAhAHAkQAIAkAFAlQATBLgXBLQgiBzj0APQjsAIjyACIgWAAQhyAAhtgJg");
	this.shape_4.setTransform(-7.7,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AtxASQCbhiBpACQAAglAYgmQAOgWATgTQAsgtA4ggQAfgQAggMQCthCDLAWQBTAJBWgBQD6gGD0AmQAcAEAaAHQCQArANCNQADAjAIAmQAIAmAFAoQAUBOgYBQQgkB6kDAPQj5AJkAACQiEABh/gLQgKAAgKgBQhIgHhHgLQiogZg1hOQg0hLARhQQADgKABgJQAEghAAgfQg1gRiGAhg");
	this.shape_5.setTransform(-2.9,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai+FTIgUgBQhIgHhHgLQiogZg1hOQg0hLARhQIAEgTQAEghAAgfQg1gRiGAhIhdAXQCbhiBpACQAAglAYgmQAOgWATgTQAsgtA4ggQAfgQAggMQCthCDLAWQBTAJBWgBQD6gGD0AmQAcAEAaAHQCQArANCNQADAjAIAmQAIAmAFAoQAUBOgYBQQgkB6kDAPQj5AJkAACIgWAAQh4AAh1gKg");
	this.shape_6.setTransform(-2.9,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AuiATQCkhnBuACQABgnAZgoQAPgYAUgUQAugvA7giQAhgQAigNQC3hGDVAYQBYAJBcgCQEHgFEBAnQAeAFAbAHQCYAtANCVQAEAmAIAnQAJApAFApQAVBTgZBUQgmCBkRAQQkHAKkOABQiLACiGgMQgLAAgKgBQhNgIhKgLQiygbg4hSQg2hPAShVQACgKACgKQAEgiAAghQg3gSiOAjg");
	this.shape_7.setTransform(2,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjIFmIgVgBQhNgIhKgLQiygbg4hSQg2hPAShVIAEgUQAEgiAAghQg3gSiOAjIhjAYQCkhnBuACQABgnAZgoQAPgYAUgUQAugvA7giQAhgQAigNQC3hGDVAYQBYAJBcgCQEHgFEBAnQAeAFAbAHQCYAtANCVQAEAmAIAnQAJApAFApQAVBTgZBUQgmCBkRAQQkHAKkOABIggAAQh7AAh2gKg");
	this.shape_8.setTransform(2,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AvSAUQCshsB0ACQAAgqAbgpQAQgZAUgWQAxgxA+gjQAjgSAkgOQDAhJDhAZQBcAKBggCQEWgGEOApQAgAFAcAJQCgAvAOCcQADAoAJAqQAJAqAGAsQAWBXgaBZQgoCHkgARQkVAKkbACQiTABiNgMQgLgBgLgBQhRgHhOgMQi7gcg7hXQg5hTAThZQADgLABgKQAEgkABgjQg7gTiVAkg");
	this.shape_9.setTransform(6.9,12.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjTF5IgWgCQhRgHhOgMQi7gcg7hXQg5hTAThZIAEgVQAEgkABgjQg7gTiVAkIhnAaQCshsB0ACQAAgqAbgpQAQgZAUgWQAxgxA+gjQAjgSAkgOQDAhJDhAZQBcAKBggCQEWgGEOApQAgAFAcAJQCgAvAOCcQADAoAJAqQAJAqAGAsQAWBXgaBZQgoCHkgARQkVAKkbACIghAAQiCAAh9gLg");
	this.shape_10.setTransform(6.9,12.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AwDAUQC1hxB6ACQAAgrAcgsQARgaAVgXQAzgzBCgmQAkgSAmgOQDKhODrAbQBiAKBkgCQEkgGEbArQAhAGAeAIQCoAyAPCkQADApAKAsQAJAtAGAuQAXBcgbBcQgqCOkuASQkjALkpACQibABiUgMQgLgBgMgBQhUgIhSgNQjFgdg9hbQg9hYAVhdQACgLACgLQAEgmABgkQg+gUicAmg");
	this.shape_11.setTransform(11.7,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjeGMIgXgCQhUgIhSgNQjFgdg9hbQg9hYAVhdIAEgWQAEgmABgkQg+gUicAmIhtAaQC1hxB6ACQAAgrAcgsQARgaAVgXQAzgzBCgmQAkgSAmgOQDKhODrAbQBiAKBkgCQEkgGEbArQAhAGAeAIQCoAyAPCkQADApAKAsQAJAtAGAuQAXBcgbBcQgqCOkuASQkjALkpACIghAAQiKAAiEgLg");
	this.shape_12.setTransform(11.7,13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AwzAWQC9h3CAACQAAguAdgtQASgcAXgXQA1g3BEgnQAngTAngPQDThRD3AcQBmALBpgCQExgHEpAuQAjAFAfAJQCwA0AQCsQAEArAJAuQAKAvAHAwQAYBggdBiQgsCUk8ATQkwALk5ACQihABibgNQgMAAgMgCQhYgIhXgNQjNgfhBhfQg/hcAVhhQADgMABgMQAFgnABgnQhBgUijAog");
	this.shape_13.setTransform(16.6,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjoGeIgYgCQhYgIhXgNQjNgfhBhfQg/hcAVhhIAEgYQAFgnABgnQhBgUijAoIhyAcQC9h3CAACQAAguAdgtQASgcAXgXQA1g3BEgnQAngTAngPQDThRD3AcQBmALBpgCQExgHEpAuQAjAFAfAJQCwA0AQCsQAEArAJAuQAKAvAHAwQAYBggdBiQgsCUk8ATQkwALk5ACIgXAAQiVAAiQgMg");
	this.shape_14.setTransform(16.6,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AxkAWQDGh8CFADQAAgwAfgwQASgdAYgZQA4g4BHgpQAogUAqgQQDchUECAdQBrALBugCQE/gHE2AwQAlAFAgAKQC4A2AQC0QAEAtAKAwQALAxAGAyQAaBlgfBlQguCblKAUQk+AMlGACQipABiigNQgNgBgMgBQhcgJhbgOQjXgghDhjQhChgAWhmQADgNACgMQAFgpAAgoQhDgWirAqg");
	this.shape_15.setTransform(21.5,14.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjzGxIgZgCQhcgJhbgOQjXgghDhjQhChgAWhmIAFgZQAFgpAAgoQhDgWirAqIh3AdQDGh8CFADQAAgwAfgwQASgdAYgZQA4g4BHgpQAogUAqgQQDchUECAdQBrALBugCQE/gHE2AwQAlAFAgAKQC4A2AQC0QAEAtAKAwQALAxAGAyQAaBlgfBlQguCblKAUQk+AMlGACIgXAAQidAAiXgMg");
	this.shape_16.setTransform(21.5,14.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("AyVAXQDPiBCLACQAAgxAggzQATgdAZgaQA6g7BLgrQAqgVArgQQDmhYENAeQBvAMBzgDQFNgHFDAyQAmAGAiAKQDAA4ARC8QAEAvALAyQALAzAHA1QAaBpggBqQgwChlYAVQlMAMlUACQiwACipgOQgNgBgNgCQhhgJhegOQjggihHhnQhEhkAXhrQADgNACgMQAFgrAAgqQhGgXiyAsg");
	this.shape_17.setTransform(26.3,15.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Aj9HEIgagDQhhgJhegOQjggihHhnQhEhkAXhrIAFgZQAFgrAAgqQhGgXiyAsIh9AeQDPiBCLACQAAgxAggzQATgdAZgaQA6g7BLgrQAqgVArgQQDmhYENAeQBvAMBzgDQFNgHFDAyQAmAGAiAKQDAA4ARC8QAEAvALAyQALAzAHA1QAaBpggBqQgwChlYAVQlMAMlUACIgiABQieAAiZgNg");
	this.shape_18.setTransform(26.3,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,1,1).p("AzFAZQDXiICRADQAAg0Ahg0QAUgfAagbQA9g9BNgtQAsgVAtgRQDvhcEZAfQBzAMB4gCQFagHFRA0QAoAGAjAKQDIA7ASDDQAEAxALA0QAMA2AHA2QAbBtghBvQgyColmAWQlaAMliADQi3ABiwgPQgOAAgOgCQhkgJhigPQjqgjhJhsQhHhoAYhvQACgOACgNQAGgtAAgrQhJgYi6Aug");
	this.shape_19.setTransform(31.2,15.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AkHHWIgcgCQhkgJhigPQjqgjhJhsQhHhoAYhvIAEgbQAGgtAAgrQhJgYi6AuIiBAgQDXiICRADQAAg0Ahg0QAUgfAagbQA9g9BNgtQAsgVAtgRQDvhcEZAfQBzAMB4gCQFagHFRA0QAoAGAjAKQDIA7ASDDQAEAxALA0QAMA2AHA2QAbBtghBvQgyColmAWQlaAMliADIgiAAQilAAiggOg");
	this.shape_20.setTransform(31.2,15.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2,1,1).p("Az2AaQDgiNCXADQAAg2Aig2QAVggAbgcQA/hABRguQAtgXAvgSQD5hfEjAgQB5ANB8gCQFogIFfA2QApAGAkALQDRA9ASDLQAEAzAMA3QAMA3AHA5QAdBxgjBzQg0Cvl1AXQlnANlwACQi/ACi3gQQgOgBgOgBQhpgKhmgPQjyglhNhwQhKhsAZh0QADgOACgNQAGgvAAgtQhMgZjBAvg");
	this.shape_21.setTransform(36,16.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AkSHpIgcgCQhpgKhmgPQjyglhNhwQhKhsAZh0IAFgbQAGgvAAgtQhMgZjBAvIiHAiQDgiNCXADQAAg2Aig2QAVggAbgcQA/hABRguQAtgXAvgSQD5hfEjAgQB5ANB8gCQFogIFfA2QApAGAkALQDRA9ASDLQAEAzAMA3QAMA3AHA5QAdBxgjBzQg0Cvl1AXQlnANlwACIgiAAQitAAingOg");
	this.shape_22.setTransform(36,16.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,1,1).p("A0mAaQDoiSCcADQAAg4Akg4QAVgiAdgdQBBhCBUgwQAvgXAwgSQEDhkEvAiQB9ANCBgCQF2gIFrA4QArAHAmALQDYA/ATDTQAFA1AMA4QAMA6AIA7QAdB2gjB3Qg2C2mDAXQl1ANl/ADQjGACi+gQQgPgBgOgCQhtgKhpgQQj9gmhPh0QhNhxAah4QADgOACgOQAGgxABgvQhPgZjJAxg");
	this.shape_23.setTransform(40.9,16.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AkdH8IgdgDQhtgKhpgQQj9gmhPh0QhNhxAah4IAFgcQAGgxABgvQhPgZjJAxIiLAiQDoiSCcADQAAg4Akg4QAVgiAdgdQBBhCBUgwQAvgXAwgSQEDhkEvAiQB9ANCBgCQF2gIFrA4QArAHAmALQDYA/ATDTQAFA1AMA4QAMA6AIA7QAdB2gjB3Qg2C2mDAXQl1ANl/ADIgiAAQi0AAiugOg");
	this.shape_24.setTransform(40.9,16.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("A1XAbQDxiXCiADQAAg6Alg6QAWgjAegeQBDhFBYgxQAwgZAygTQENhnE5AjQCCAOCGgDQGEgIF5A6QAsAHAnAMQDhBBATDbQAFA3AMA7QANA7AIA9QAfB7glB7Qg4C9mSAYQmCAOmNADQjNABjFgQQgQgCgPgBQhwgLhugQQkFgnhSh5QhQh1Abh8QADgPACgPQAGgyABgxQhSgajQAyg");
	this.shape_25.setTransform(45.8,17.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AknIPIgfgDQhwgLhugQQkFgnhSh5QhQh1Abh8QADgPACgPQAGgyABgxQhSgajQAyIiRAkQDxiXCiADQAAg6Alg6QAWgjAegeQBDhFBYgxQAwgZAygTQENhnE5AjQCCAOCGgDQGEgIF5A6QAsAHAnAMQDhBBATDbQAFA3AMA7QANA7AIA9QAfB7glB7Qg4C9mSAYQmCAOmNADIgiAAQi8AAi0gPg");
	this.shape_26.setTransform(45.8,17.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2,1,1).p("A2IAcQD5idCoAEQABg9Amg8QAXgkAegfQBGhHBbg0QAygZA0gUQEWhqFFAkQCGAOCLgCQGRgJGGA8QAvAHAoAMQDoBEAUDjQAFA4ANA9QANA+AJA/QAgB/gmCAQg6DDmgAZQmRAOmaAEQjVABjMgRQgQgBgQgCQh0gLhygRQkOgohVh+QhTh5AciAQADgPACgQQAGg0ACgyQhWgbjXA0g");
	this.shape_27.setTransform(50.7,18.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AkyIhIgggDQh0gLhygRQkOgohVh+QhTh5AciAQADgPACgQQAGg0ACgyQhWgbjXA0IiWAlQD5idCoAEQABg9Amg8QAXgkAegfQBGhHBbg0QAygZA0gUQEWhqFFAkQCGAOCLgCQGRgJGGA8QAvAHAoAMQDoBEAUDjQAFA4ANA9QANA+AJA/QAgB/gmCAQg6DDmgAZQmRAOmaAEIgiAAQjDAAi8gQg");
	this.shape_28.setTransform(50.7,18.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2,1,1).p("A24AdQEBiiCuADQABg+Ang+QAYgmAfggQBJhJBdg2QA0gaA2gUQEfhuFQAlQCLAPCQgDQGfgJGUA/QAvAHAqAMQDwBHAVDqQAFA7AOA+QANBAAJBCQAhCDgnCEQg8DKmvAaQmeAPmoADQjcACjTgSQgRgBgQgCQh5gLh1gSQkYgqhYiCQhVh9AdiFQADgPACgQQAGg2ACg0QhYgcjfA2g");
	this.shape_29.setTransform(55.5,18.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ak8I0IghgDQh5gLh1gSQkYgqhYiCQhVh9AdiFIAFgfQAGg2ACg0QhYgcjfA2IibAmQEBiiCuADQABg+Ang+QAYgmAfggQBJhJBdg2QA0gaA2gUQEfhuFQAlQCLAPCQgDQGfgJGUA/QAvAHAqAMQDwBHAVDqQAFA7AOA+QANBAAJBCQAhCDgnCEQg8DKmvAaQmeAPmoADIgsAAQjFAAi+gQg");
	this.shape_30.setTransform(55.5,18.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2,1,1).p("A3pAeQELinCzADQAAhAAphBQAZgmAggiQBLhLBhg3QA1gbA4gVQEphyFbAnQCQAPCUgDQGtgJGhBAQAxAIArAMQD5BJAVDyQAFA9AOBBQAOBCAJBDQAiCIgoCIQg+DRm9AbQmsAPm2ADQjkACjagSQgRgCgRgBQh8gMh5gSQkigshaiFQhZiCAeiJQAEgQACgRQAGg3ACg2QhbgdjmA3g");
	this.shape_31.setTransform(60.4,19.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AlHJHIgigDQh8gMh5gSQkigshaiFQhZiCAeiJIAGghQAGg3ACg2QhbgdjmA3IihAoQELinCzADQAAhAAphBQAZgmAggiQBLhLBhg3QA1gbA4gVQEphyFbAnQCQAPCUgDQGtgJGhBAQAxAIArAMQD5BJAVDyQAFA9AOBBQAOBCAJBDQAiCIgoCIQg+DRm9AbQmsAPm2ADIgtAAQjMAAjFgQg");
	this.shape_32.setTransform(60.4,19.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2,1,1).p("A4ZAgQETitC5ADQAAhCArhDQAZgoAigiQBNhPBjg4QA4gcA5gWQEyh1FnAoQCUAQCZgDQG6gKGvBDQAzAHAtANQEABLAWD6QAGA/AOBDQAOBEAKBGQAjCLgqCOQhADXnLAbQm5AQnGAEQjqABjhgTQgSgBgRgCQiAgMh+gSQkqgtheiKQhbiGAfiNQADgRADgRQAGg5ACg5QhegdjtA5g");
	this.shape_33.setTransform(65.2,20);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AlRJZIgjgDQiAgMh+gSQkqgtheiKQhbiGAfiNIAGgiQAGg5ACg5QhegdjtA5IimAqQETitC5ADQAAhCArhDQAZgoAigiQBNhPBjg4QA4gcA5gWQEyh1FnAoQCUAQCZgDQG6gKGvBDQAzAHAtANQEABLAWD6QAGA/AOBDQAOBEAKBGQAjCLgqCOQhADXnLAbQm5AQnGAEIgiAAQjZAAjQgSg");
	this.shape_34.setTransform(65.2,20);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2,1,1).p("A5KAgQEciyC/ADQAAhEAshFQAagpAjgjQBPhRBng7QA5gcA7gWQE8h6FxAqQCZAQCegDQHIgKG8BFQA1AIAuANQEIBNAXECQAGBAAOBFQAPBHAKBIQAkCQgrCRQhCDenZAdQnHAQnUAEQjxABjogTQgTgBgRgCQiFgNiBgTQk0guhhiPQhdiJAfiSQAEgSADgRQAGg7ACg6Qhhgfj1A8g");
	this.shape_35.setTransform(70.1,20.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlbJsIgkgDQiFgNiBgTQk0guhhiPQhdiJAfiSIAHgjQAGg7ACg6Qhhgfj1A8IirAqQEciyC/ADQAAhEAshFQAagpAjgjQBPhRBng7QA5gcA7gWQE8h6FxAqQCZAQCegDQHIgKG8BFQA1AIAuANQEIBNAXECQAGBAAOBFQAPBHAKBIQAkCQgrCRQhCDenZAdQnHAQnUAEIgiAAQjgAAjXgSg");
	this.shape_36.setTransform(70.1,20.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,1,1).p("A56AhQEji3DFADQABhGAthHQAagqAkglQBShTBqg8QA7geA9gXQFFh9F9ArQCdARCjgEQHWgKHJBHQA2AIAwAOQEQBQAXEJQAGBCAPBIQAPBIALBKQAlCVgtCWQhEDknnAdQnVARnhAEQj5ACjvgUQgTgCgSgCQiJgMiFgUQk9gwhkiTQhgiNAgiXQAEgSADgSQAHg8ABg8Qhkggj7A9g");
	this.shape_37.setTransform(75,21.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AlmJ/IglgEQiJgMiFgUQk9gwhkiTQhgiNAgiXIAHgkQAHg8ABg8Qhkggj7A9IiwAsQEji3DFADQABhGAthHQAagqAkglQBShTBqg8QA7geA9gXQFFh9F9ArQCdARCjgEQHWgKHJBHQA2AIAwAOQEQBQAXEJQAGBCAPBIQAPBIALBKQAlCVgtCWQhEDknnAdQnVARnhAEIgjAAQjnAAjegSg");
	this.shape_38.setTransform(75,21.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(2,1,1).p("A6rAiQEsi9DKAEQABhIAuhJQAcgsAlgmQBUhVBtg+QA8geA/gYQFPiBGIAsQCiARCogDQHjgKHXBIQA4AJAwAOQEYBSAYERQAHBFAPBJQAQBLAKBMQAnCZguCaQhGDrn2AeQniASnwADQkAACj2gUQgTgCgTgCQiNgNiJgUQlGgyhniWQhjiSAiibQADgTADgSQAHg/ACg9QhnghkDA/g");
	this.shape_39.setTransform(79.9,21.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AlxKSIgmgEQiNgNiJgUQlGgyhniWQhjiSAiibIAGglQAHg/ACg9QhnghkDA/Ii1AtQEsi9DKAEQABhIAuhJQAcgsAlgmQBUhVBtg+QA8geA/gYQFPiBGIAsQCiARCogDQHjgKHXBIQA4AJAwAOQEYBSAYERQAHBFAPBJQAQBLAKBMQAnCZguCaQhGDrn2AeQniASnwADIgtAAQjpAAjggSg");
	this.shape_40.setTransform(79.9,21.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2,1,1).p("A7cAjQE1jCDQADQABhKAwhLQAcgtAmgnQBWhYBwg/QA/ggBAgYQFZiEGTAtQCmASCtgEQHxgLHkBLQA5AJAzAPQEgBUAYEZQAHBGAQBMQAQBMALBPQAnCdgvCfQhIDyoEAeQnwASn+AEQkHACj9gVQgUgCgUgCQiQgNiNgVQlQgzhpibQhmiWAiifQAEgTADgTQAHhAAChAQhqghkKBAg");
	this.shape_41.setTransform(84.7,22.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Al7KkIgogEQiQgNiNgVQlQgzhpibQhmiWAiifIAHgmQAHhAAChAQhqghkKBAIi7AvQE1jCDQADQABhKAwhLQAcgtAmgnQBWhYBwg/QA/ggBAgYQFZiEGTAtQCmASCtgEQHxgLHkBLQA5AJAzAPQEgBUAYEZQAHBGAQBMQAQBMALBPQAnCdgvCfQhIDyoEAeQnwASn+AEIgtABQjwAAjngUg");
	this.shape_42.setTransform(84.7,22.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2,1,1).p("AzVBXQAFhCABhBQhsgikSBCIjAAwQE+jIDWAEQAAhMAxhNQAdguAngoQBZhbBzhBQBAggBDgZQFiiIGeAuQCrASCxgDQH/gLHyBNQA7AJAzAPQEoBWAaEhQAGBIARBOQAQBPALBQAb+BXQAlCigxCjQhKD5oSAfQn+AToLAEQkPACkEgWQgVgCgUgCQiUgOiRgVQlZg0hsigQhpiaAjikQAEgTADgU");
	this.shape_43.setTransform(89.6,23.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AmGK3IgpgEQiUgOiRgVQlZg0hsigQhpiaAjikIAHgnIADAAQAFhCABhBQhsgikSBCIjAAwQE+jIDWAEQAAhMAxhNQAdguAngoQBZhbBzhBQBAggBDgZQFiiIGeAuQCrASCxgDQH/gLHyBNQA7AJAzAPQEoBWAaEhQAGBIARBOQAQBPALBQIAEAAQAlCigxCjQhKD5oSAfQn+AToLAEIguAAQj3AAjugUg");
	this.shape_44.setTransform(89.6,23.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2,1,1).p("A8Lg/QD9igC6gdQAxgUAygLQAKg7AWgqQANgaASgaQAhguAqgnQAQgPARgPQAuglAyghQArgbAvgYQBDgfBGgXQC7g/DLgOQCPgKCWAFQA6ADA8AFQC0APC3AAQC5gBC2AMQAwADAvAFQDlAYC1BHQAzASA1AVQAHADAGADQAzATArAXQA5AcApAjQA4AhAnBIQBFBfAKCkQAGBLANBSQANBRAJBVQACAAABAAQACANACANQAEAbACAcQAKCEgqB8QhJDQlqA2QhbAPhqAGQlOAQlUAGQi/AEiugCQgSgBgRAAQhggDhagCQiNgEijgaQgegEgdgFQgVgDgUgFQiQgdiAg2QgygSgrgWQgIgEgHgEQjMhchLiRQhZilAcipQADgOABgOQABgGABgFQACgJABgHQABgtAEgvQABgOABgPQgCgBgBgBQAAAAgBgBQgjgVg3gJQhogCivAqQgUAFgUAFg");
	this.shape_45.setTransform(89.4,33.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ABjMqIgjgBIi6gFQiNgEijgaIg7gJIgpgIQiQgdiAg2QgygSgrgWIgPgIQjMhchLiRQhZilAcipIAEgcIACgLQACgJABgHQABgtAEgvIACgdIgDgCIgBgBQgjgVg3gJQhogCivAqIgoAKIigApQD9igC6gdQAxgUAygLQAKg7AWgqQANgaASgaQAhguAqgnIAhgeQAuglAyghQArgbAvgYQBDgfBGgXQC7g/DLgOQCPgKCWAFQA6ADA8AFQC0APC3AAQC5gBC2AMQAwADAvAFQDlAYC1BHQAzASA1AVIANAGQAzATArAXQA5AcApAjQA4AhAnBIQBFBfAKCkQAGBLANBSQANBRAJBVIADAAIAEAaQAEAbACAcQAKCEgqB8QhJDQlqA2QhbAPhqAGQlOAQlUAGQh6ADhzAAIiAgBg");
	this.shape_46.setTransform(89.4,33.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(2,1,1).p("A8JikQEKipC/gVQAngfAwgWQAQg7AZgqQAQgaATgZQAkguAtgmQASgQASgOQAygkA1gfQAvgbAxgWQBHgeBJgVQDDg7DUgFQCVgFCbAEQA9ACA+AEQC7AMC+ADQDAADC9AQQAyAFAvAGQDzAlCWBzQAqAdAuAgQAGAFAGAEQAqAdAlAgQAxAmAhArQAtAdAfBdQA3BfAHC1QAEBNALBVQAKBUAGBZQACABABABQACAOABAOQADAdABAdQAHCLgvB7QhWDYlyAxQhgAOhsAIQlaATlhAHQjQAEirgGQgSgBgRgBQhogFhagDQiGgFi1goQgegGgegIQgVgGgUgGQiLgshwhXQgrgcgkghQgGgFgGgFQinh+g+ihQhKiyAWirQACgPABgOQAAgGABgGQACgJAAgIQABgwAFgwQABgPABgQQAAgBgBgBQAAAAgBgBQgagegsgUQhngIi8AsQgUAFgVAFIimArg");
	this.shape_47.setTransform(89.3,43.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAXOIIgjgCQhogFhagDQiGgFi1goQgegGgegIIgpgMQiLgshwhXQgrgcgkghIgMgKQinh+g+ihQhKiyAWirIADgdIABgMIACgRQABgwAFgwIACgfIgBgCIgBgBQgagegsgUQhngIi8AsIgpAKIimArIAAAAQEKipC/gVQAngfAwgWQAQg7AZgqQAQgaATgZQAkguAtgmQASgQASgOQAygkA1gfQAvgbAxgWQBHgeBJgVQDDg7DUgFQCVgFCbAEQA9ACA+AEQC7AMC+ADQDAADC9AQQAyAFAvAGQDzAlCWBzIBYA9IAMAJQAqAdAlAgQAxAmAhArQAtAdAfBdQA3BfAHC1QAEBNALBVQAKBUAGBZIADACIADAcQADAdABAdQAHCLgvB7QhWDYlyAxQhgAOhsAIQlaATlhAHQhTAChOAAQh0AAhmgEg");
	this.shape_48.setTransform(89.3,43.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2,1,1).p("A8IkJQEXixDFgPQAegoAtghQAWg9AdgpQARgaAWgZQAngsAwgnQATgPAUgOQA1gjA5gdQAxgaA0gVQBLgcBNgUQDLg2DdADQCbABCfACQBAABBAADQDDAKDEAGQDHAHDEAUQA0AFAwAJQEAAxB3CeQAiAoAmAsQAFAGAFAHQAjAmAeAqQAqAvAYAzQAiAaAXBxQApBfAFDGQACBOAHBaQAIBXAEBdQABACABABQABAPABAPQABAeABAeQAECUg0B6QhjDfl6AtQhlANhtAIQloAYluAHQjgAFingKQgSgCgTgBQhvgIhagEQh/gGjGg3QgggHgdgLQgVgIgUgJQiHg6hgh4QgjglgdgsQgFgHgFgHQiBiggyiwQg7i+APivQACgPAAgPQABgGAAgGQACgKAAgIQgBgyAHgyQACgQABgQQAAgBgBgCQABAAAAAAQgTgnghggQhlgOjIAuQgVAFgWAGIisAsg");
	this.shape_49.setTransform(89.1,53.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ag0PnIglgDQhvgIhagEQh/gGjGg3QgggHgdgLQgVgIgUgJQiHg6hgh4QgjglgdgsIgKgOQiBiggyiwQg7i+APivIACgeIABgMIACgSQgBgyAHgyIADggIgBgDIABAAQgTgnghggQhlgOjIAuIgrALIisAsIgBAAQEXixDFgPQAegoAtghQAWg9AdgpQARgaAWgZQAngsAwgnIAngdQA1gjA5gdQAxgaA0gVQBLgcBNgUQDLg2DdADIE6ADQBAABBAADQDDAKDEAGQDHAHDEAUQA0AFAwAJQEAAxB3CeIBIBUIAKANQAjAmAeAqQAqAvAYAzQAiAaAXBxQApBfAFDGQACBOAHBaQAIBXAEBdIACADIACAeIACA8QAECUg0B6QhjDfl6AtQhlANhtAIQloAYluAHIiGACQiOAAhzgHg");
	this.shape_50.setTransform(89.1,53.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(2,1,1).p("A8GlsQEji4DLgJQAUgxArguQAcg9AggpQAUgZAXgZQArgsAzgmQAUgOAVgOQA5giA8gcQA0gZA3gUQBOgbBRgSQDTgwDmALQChAHClAAQBCAABCACQDLAGDKAKQDNAKDLAZQA3AGAxALQENA+BYDJQAZAzAfA3QAEAIAEAJQAcAwAXAyQAjA5AQA7QAWAYAPCEQAbBfACDXQABBRAEBeQAEBYACBjQABABAAACQABAQAAARQABAeAAAgQABCbg5B6QhwDnmDAnQhpANhvAJQl1Abl7AJQjwAFijgOQgUgCgTgCQh1gLhbgFQh4gGjYhGQghgJgdgOQgVgJgUgMQiChJhQiZQgcgvgVg3QgEgIgEgJQhcjBgljAQgsjKAJizQAAgPABgPQAAgGAAgGQABgMAAgIQgCg0AJg0QACgQACgQQAAgCAAgCQAAAAABAAQgLgwgVgsQhlgTjTAwQgWAFgXAGIizAtg");
	this.shape_51.setTransform(89,63.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ah/RIIgngEQh1gLhbgFQh4gGjYhGQghgJgdgOQgVgJgUgMQiChJhQiZQgcgvgVg3IgIgRQhcjBgljAQgsjKAJizIABgeIAAgMIABgUQgCg0AJg0IAEggIAAgEIABAAQgLgwgVgsQhlgTjTAwIgtALIizAtIAAAAQEji4DLgJQAUgxArguQAcg9AggpQAUgZAXgZQArgsAzgmIApgcQA5giA8gcQA0gZA3gUQBOgbBRgSQDTgwDmALQChAHClAAQBCAABCACQDLAGDKAKQDNAKDLAZQA3AGAxALQENA+BYDJQAZAzAfA3IAIARQAcAwAXAyQAjA5AQA7QAWAYAPCEQAbBfACDXQABBRAEBeQAEBYACBjIABADIABAhIABA+QABCbg5B6QhwDnmDAnQhpANhvAJQl1Abl7AJIh5ABQihAAh5gKg");
	this.shape_52.setTransform(89,63.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(2,1,1).p("A8GnNQExjBDQgCQAKg7Apg5QAig+AjgpQAXgZAYgXQAvgsA2glQAVgPAWgOQA9ghA/gaQA4gYA6gTQBRgZBUgRQDbgrDwAUQClAMCsgCQBEgBBEACQDTADDQANQDVAODRAdQA5AIAyAMQEbBLA5D1QAPA9AXBCQAEALAEAKQAUA6AQA7QAcBCAHBDQALAVAICZQAMBegBDoQgBBTACBiQABBbgBBnQABACABACQAAARAAASQgBAgAAAhQgCCjg+B5Qh+DvmKAiQhuAMhyAKQmBAfmIAJQkAAGihgSQgUgDgUgCQh8gOhbgGQhxgHjqhUQghgLgegRQgVgLgUgOQh+hYg+i6QgWg4gOhCQgCgKgCgKQg4jigZjRQgcjVACi4QAAgQAAgOQAAgHABgGQAAgMAAgJQgDg2AKg2QADgRACgQQAAgCAAgCQABgBABAAQgDg5gKg2QhjgajgAzQgXAFgYAFIi4Awg");
	this.shape_53.setTransform(88.9,72.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AjMSqIgogFQh8gOhbgGQhxgHjqhUQghgLgdgRQgVgLgVgOQh+hYg+i6QgWg4gOhCIgEgUQg3jigZjRQgcjVACi4IAAgeIAAgNIAAgVQgDg2AKg2IAFghIAAgEIADgBQgEg5gKg2QhjgajgAzIgvAKIi3AwIgCAAQExjBDQgCQAKg7Apg5QAig+AkgpQAWgZAYgXQAvgsA2glQAVgPAWgOQA9ghA/gaQA4gYA6gTQBRgZBUgRQDbgrDwAUQCmAMCrgCQBEgBBEACQDTADDQANQDVAODRAdQA5AIAyAMQEaBLA5D1QAQA9AYBCIAHAVQATA6ARA7QAcBCAHBDQALAVAICZQAMBegBDoQgBBTACBiQABBbgBBnIABAEIAAAjIAABBQgCCjg+B5Qh+DvmLAiQhtAMhyAKQmBAfmIAJIhzACQiyAAh8gOg");
	this.shape_54.setTransform(88.9,72.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2,1,1).p("AzVn7QAFhCABhCQhsgikSBCIjAAxQE+jJDWAEQAAhMAxhNQAdguAngoQBZhbBzhBQBAggBDgZQFiiIGeAuQCrASCxgDQH/gLHyBNQA7AJAzAPQEoBWAaEhQAGBIARBOQAQBQALBQAb+n7QARBLgBBMQAAARgCCtQgBChgNJlAb+JgQgBAhgBAiQgPIMpXAqQn+A4oLAMQkPAGiegWQiegWhqgHQhpgIj9hjQj8hjgpmrQgBgLgBgMAznlkQgEg4AMg4QAEgTADgUAy1JgQgnofgKmCQAAgSAAgR");
	this.shape_55.setTransform(89.6,82.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AkgUNQiegWhqgHQhpgIj9hjQj8hjgpmrIgCgXIAAAAQgnofgKmCIAAgjIgBAAQgEg4AMg4IAHgnIADAAQAFhCABhCQhsgikSBCIjAAxQE+jJDWAEQAAhMAxhNQAdguAngoQBZhbBzhBQBAggBDgZQFiiIGeAuQCrASCxgDQH/gLHyBNQA7AJAzAPQEoBWAaEhQAGBIARBOQAQBQALBQIAEAAQARBLgBBMIgCC+QgBChgNJlIAAAAIgCBDQgPIMpXAqQn+A4oLAMIhwABQjBAAh8gRg");
	this.shape_56.setTransform(89.6,82.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(2,1,1).p("A8OnNQEyjBDRgDQALg6Apg4QAhg/AkgpQAVgXAXgWQAugtA2glQAXgRAZgOQA9ghA/gbQA1gWA2gSQBRgaBUgRQDggtD1AUQCmANCsgCQBEgBBEACQDTADDSANQDVAODSAdQA4AHAzANQEbBKA6D1QAQA+AXBCQAFAPAFAOQATA2APA3QAGAFACAFQAVA9AHA9QAMAVAHCYQAPBhgCDvQAABSABBgQABBZAABlQABAVAAARQAAAgAAAhQgCCgg8B3Qh9D0mRAiQhqAMhtAJQmHAgmPAJQj/AGiigSQgUgDgTgCQh9gOhcgGQhxgHjrhUQgjgMgegRQgWgMgUgOQh9hag/i7QgUg2gOg/QgDgJgCgLQg6jmgZjSQgcjQACi1QAAgRAAgRQAAgFAAgFQABgCAAgBQgBgLAAgKQgDg1AKg3QADgOACgOQAAgEAAgFQABAAABAAQgDg5gKg2QhlgajgAzQgXAFgXAFIi5Awg");
	this.shape_57.setTransform(89.7,72.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AjLSqIgngFQh9gOhcgGQhxgHjrhUQgjgMgegRQgWgMgUgOQh9hag/i7QgUg2gOg/IgFgUQg6jmgZjSQgcjQACi1IAAgiIAAgKIABgDIgBgVQgDg1AKg3IAFgcIAAgJIACAAQgDg5gKg2QhlgajgAzIguAKIi5AwIgBAAQEyjBDRgDQALg6Apg4QAhg/AkgpQAVgXAXgWQAugtA2glQAXgRAZgOQA9ghA/gbQA1gWA2gSQBRgaBUgRQDggtD1AUQCmANCsgCQBEgBBEACQDTADDSANQDVAODSAdQA4AHAzANQEbBKA6D1QAQA+AXBCIAKAdQATA2APA3QAGAFACAFQAVA9AHA9QAMAVAHCYQAPBhgCDvIABCyQABBZAABlIABAmIAABBQgCCgg8B3Qh9D0mRAiQhqAMhtAJQmHAgmPAJIhzACQiyAAh8gOg");
	this.shape_58.setTransform(89.7,72.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(2,1,1).p("A8YlrQEmi5DNgJQAUgxAsgtQAbg+AhgpQATgYAWgXQArgsAzgmQAWgRAXgPQA6giA8gcQAygXA0gTQBNgbBSgTQDYgyDsAMQCiAHCmAAQBCAABCACQDMAHDNAKQDOAKDLAYQA3AHAyALQEPA9BZDKQAZAyAfA3QAHAMAGAMQAaAtAWAuQAGAFACAEQAdA0AOA2QAYAXAQCEQAeBgABDfQABBPAFBdQAEBXACBhQACATABAQQAAAfABAgQABCYg3B4QhwDsmMAnQhmAMhrAJQl7AcmDAIQjxAFilgOQgTgCgSgBQh3gMhcgFQh5gGjahGQghgJgfgOQgWgKgUgMQiDhLhQiZQgbgtgVg1QgEgIgDgJQhhjDgmjDQgsjFAIiyQABgQABgQQAAgFAAgGQABgBAAgBQAAgKAAgKQgCgzAJg1QACgOABgOQAAgDgBgEIABAAQgLgwgWgrQhlgUjVAwQgWAFgWAGIi0Aug");
	this.shape_59.setTransform(90.7,63.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Ah/RIIglgDQh3gMhcgFQh5gGjahGQghgJgfgOQgVgKgVgMQiDhLhPiZQgbgtgWg1IgHgRQhhjDgmjDQgsjFAJiyIABggIAAgLIABgCIAAgUQgCgzAJg1IADgcIgBgHIABAAQgLgwgWgrQhlgUjVAwIgrALIi1AuIgBAAQEmi5DNgJQAUgxAsgtQAbg+AhgpQATgZAWgWQArgsAzgmQAWgRAYgPQA5giA8gdQAygWA0gTQBNgbBSgTQDYgyDsAMQCiAHCmAAQBCAABCACQDMAHDNAKQDOAKDLAYQA3AGAyAMQEPA9BZDKQAZAyAfA3IANAYQAaAtAWAuQAGAFACAEQAdA0AOA2QAYAXAQCEQAeBgABDfQABBPAFBcQAEBYADBhIACAjIABA/QABCYg3B4QhwDsmMAnQhlAMhsAJQl7AcmDAIIh5ABQiiAAh7gKg");
	this.shape_60.setTransform(90.7,63.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2,1,1).p("A8hkJQEaiwDIgQQAegnAughQAWg+AdgqQARgYAVgXQAngtAxgnQAVgRAWgPQA2gjA6geQAvgXAxgVQBLgcBOgUQDQg3DkADQCcACChACQBAABBAADQDGAJDGAHQDIAGDGAUQA1AGAxAIQECAxB5CeQAiAoAnAsQAHAJAIAJQAhAkAcAmQAHAEADAEQAjAqAXAvQAkAaAYBwQAtBgAFDOQACBNAIBYQAHBWAFBcQADASABAPQACAeABAeQAECRgzB5QhkDkmFAsQhiAMhqAIQlvAYl3AIQjhAEipgKQgSgBgSgBQhxgJhcgEQiBgFjIg3QghgIgegLQgWgIgUgKQiIg7hhh5QgjgjgcgqQgFgHgFgHQiIihgzizQg8i6AQiuQABgQABgQQAAgFABgFQABgBAAgBQAAgJAAgKQAAgyAGgzQACgNABgOQgBgDgCgDIABAAQgUgmghggQhngOjJAuQgUAFgWAFIiuAsg");
	this.shape_61.setTransform(91.7,53.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgyPnIgkgCQhxgJhcgEQiBgFjIg3QghgIgegLQgWgIgUgKQiIg7hhh5QgjgjgcgqIgKgOQiIihgzizQg8i6AQiuIACggIABgKIABgCIAAgTQAAgyAGgzIADgbIgDgGIABAAQgUgmghggQhngOjJAuIgqAKIiuAsIgBAAQEaiwDIgQQAegnAughQAWg+AdgqQARgYAVgXQAngtAxgnQAVgRAWgPQA2gjA6geQAvgXAxgVQBLgcBOgUQDQg3DkADIE9AEQBAABBAADQDGAJDGAHQDIAGDGAUQA1AGAxAIQECAxB5CeIBJBUIAPASQAhAkAcAmQAHAEADAEQAjAqAXAvQAkAaAYBwQAtBgAFDOQACBNAIBYQAHBWAFBcQADASABAPIADA8QAECRgzB5QhkDkmFAsQhiAMhqAIQlvAYl3AIIiGABQiQAAh0gHg");
	this.shape_62.setTransform(91.7,53.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(2,1,1).p("A8rikQEOipDEgWQAogdAwgWQAQg9AagrQAPgYATgYQAkguAugnQAUgRAVgPQAyglA3geQAtgZAugVQBIgeBLgWQDJg7DbgGQCXgECdAEQA8ACA/AEQC+AMDBADQDCADDAAQQAyAEAwAHQD2AkCZBzQArAdAuAgQAJAHAJAHQApAaAiAeQAIADADADQAqAhAgAnQAvAdAgBcQA9BgAIC8QAEBNAKBUQALBTAHBZQAEAPABAOQAEAdABAdQAHCKgvB6QhXDbl/AxQheANhpAHQljAUlqAHQjSAEitgGQgSgBgRgBQhqgFhdgDQiIgFi3goQgggGgegJQgWgFgUgHQiOgshyhYQgpgbgkgfQgGgFgGgGQivh/hBiiQhMiwAXiqQACgPABgQQABgFABgFQABAAAAgBQABgJAAgJQAAgxAFgxQACgNABgNQgDgCgCgDIAAAAQgcgdgtgVQhogHi9ArQgUAFgUAFIipArg");
	this.shape_63.setTransform(92.7,43.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAaOIIgjgCQhqgFhdgDQiIgFi3goQgggGgegJQgWgFgUgHQiOgshyhYQgpgbgkgfIgMgLQivh/hBiiQhMiwAXiqIADgfIACgKIABgBIABgSQAAgxAFgxIADgaIgFgFIAAAAQgcgdgtgVQhogHi9ArIgoAKIipArIgBAAQEOipDEgWQAogdAwgWQAQg9AagrQAPgYATgYQAkguAugnQAUgRAVgPQAyglA3geQAtgZAugVQBIgeBLgWQDJg7DbgGQCXgECdAEQA8ACA/AEQC+AMDBADQDCADDAAQQAyAEAwAHQD2AkCZBzIBZA9IASAOQApAaAiAeIALAGQAqAhAgAnQAvAdAgBcQA9BgAIC8QAEBNAKBUQALBTAHBZQAEAPABAOQAEAdABAdQAHCKgvB6QhXDbl/AxQheANhpAHQljAUlqAHQhUAChOAAQh1AAhogEg");
	this.shape_64.setTransform(92.7,43.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(2,1,1).p("A81g/QEDigC+gdQAygUAzgLQAKg8AXgrQANgZARgZQAigtAqgoQATgRAUgQQAvgmA0ggQAqgZAsgXQBFgeBHgYQDChADSgOQCSgJCYAFQA7ADA7AFQC4APC8AAQC7gBC5ALQAxAEAvAEQDpAYC5BHQA0ASA2AVQALAEAKAEQAvASAqAVQAHADAEACQAyAYAnAgQA7AgAoBHQBNBgALCrQAFBKAOBRQAOBRAJBVQAFANACANQAEAcADAcQAJCDgqB7QhKDTl6A1QhaANhnAHQlYAQldAGQjDAEixgCQgRgBgRAAQhkgDhcgCQiQgEilgaQgfgEgfgFQgWgEgUgEQiTgdiDg3QgxgRgqgVQgIgEgIgEQjVhchOiTQhcikAeioQACgPACgPQABgFABgFQABAAABgBQAAgIABgIQABgvAEgvQAAgNABgNQgDgBgDgCQgBAAAAAAQgkgUg4gJQhpgCiyApQgTAEgTAFIikAqg");
	this.shape_65.setTransform(93.7,33.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("ABmMqIgigBIjAgFQiQgEilgaIg+gJIgqgIQiTgdiDg3QgxgRgqgVIgQgIQjVhchOiTQhcikAeioIAEgeIACgKIACgBIABgQQABgvAEgvIABgaIgGgDIgBAAQgkgUg4gJQhpgCiyApIgmAJIikAqIgBAAQEDigC+gdQAygUAzgLQAKg8AXgrQANgZARgZQAigtAqgoIAnghQAvgmA0ggQAqgZAsgXQBFgeBHgYQDChADSgOQCSgJCYAFQA7ADA7AFQC4APC8AAQC7gBC5ALIBgAIQDpAYC5BHQA0ASA2AVIAVAIQAvASAqAVIALAFQAyAYAnAgQA7AgAoBHQBNBgALCrQAFBKAOBRQAOBRAJBVQAFANACANQAEAcADAcQAJCDgqB7QhKDTl6A1QhaANhnAHQlYAQldAGQh8ADh1AAIiDgBg");
	this.shape_66.setTransform(93.7,33.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(2,1,1).p("A8ehEQEEikC/gbQAugUAvgKQANhDAXgrQAMgXAQgWQAhguArgoQATgRAUgRQAwgnA0ggQAogZArgWQBEgfBGgXQDIhEDZgNQCUgICaAHQAuADAsAEQC2AOC5AAQDRgBDPAOQAyADAwAFQDqAaC2BLQAmAPAnARQALAEAMAFQAnAQAiATQACABACABQAtAYAmAfQACABABABQCnCCAQDvQAFBMANBRQAMBSAHBTQAAABAAACQACAAACAAQAaCug2CkQhPDqmHA4QhJAKhSAFQlwARl4AHQirADiqgFQg9gBg8gDQgSgBgRgCQiGgIiCgRQhDgJhBgMQgUgEgVgEQiTgfiHgyQhLgZg9giQjChYhIiNQhaikAgiuQACgGABgHQACgOACgOQABAAABgBQACgdACgfQAAgBAAAAQACgmABgmQgNgIgPgGQgZgLgggHQhrgEi7AsQgSAFgSAFg");
	this.shape_67.setTransform(91.4,34.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("ABNMzQg9gBg8gDIgjgDQiGgIiCgRQhDgJhBgMIgpgIQiTgfiHgyQhLgZg9giQjChYhIiNQhaikAgiuIADgNIAEgcIACgBIAEg8IAAgBIADhMQgNgIgPgGQgZgLgggHQhrgEi7AsIgkAKIilAqQEEikC/gbQAugUAvgKQANhDAXgrQAMgXAQgWQAhguArgoIAngiQAwgnA0ggQAogZArgWQBEgfBGgXQDIhEDZgNQCUgICaAHIBaAHQC2AOC5AAQDRgBDPAOQAyADAwAFQDqAaC2BLIBNAgIAXAJQAnAQAiATIAEACQAtAYAmAfIADACQCnCCAQDvQAFBMANBRQAMBSAHBTIAAADIAEAAQAaCug2CkQhPDqmHA4QhJAKhSAFQlwARl4AHIiNABQhkAAhkgDg");
	this.shape_68.setTransform(91.4,34.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(2,1,1).p("A8wivQEVitDGgVQAlgdAtgWQAThEAbgrQAPgXASgWQAlguAugnQAVgSAWgRQAzglA5gfQArgYAtgVQBJgeBLgWQDSg/DlgFQCbgDChAGQAvABAwADQC/AMDCACQDbADDYASQA1AFAyAHQD6AnCYB4QAfAYAhAZQAKAHAKAIQAiAYAdAaQACACABABQAlAhAfAnQACAAABABQCKCeAMD2QADBRAJBTQAIBXAEBXQAAABAAACQABABABABQAQC5g6ClQhgEBmFA5QhNAKhUAFQmDAWmJAIQi0ADixgKQg/gEhAgGQgSgBgSgCQiLgQiIgZQhFgOhBgTQgVgGgVgHQiTgwh8hNQhEgng3gxQimh0g+iiQhLiuAdi2QABgHABgHQACgPACgPQABAAABgBQACggACggQAAAAABgBQACgoABgnQgLgLgMgKQgTgRgagPQhrgJjJAvQgSAEgUAFg");
	this.shape_69.setTransform(93.2,45.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AANObQg/gEhAgGIgkgDQiLgQiIgZQhFgOhBgTIgqgNQiTgwh8hNQhEgng3gxQimh0g+iiQhLiuAdi2IACgOIAEgeIACgBIAEhAIABgBIADhPQgLgLgMgKQgTgRgagPQhrgJjJAvIgmAJIitAsQEVitDGgVQAlgdAtgWQAThEAbgrQAPgXASgWQAlguAugnIArgjQAzglA5gfQArgYAtgVQBJgeBLgWQDSg/DlgFQCbgDChAGIBfAEQC/AMDCACQDbADDYASQA1AFAyAHQD6AnCYB4IBAAxIAUAPQAiAYAdAaIADADQAlAhAfAnIADABQCKCeAMD2QADBRAJBTQAIBXAEBXIAAADIACACQAQC5g6ClQhgEBmFA5QhNAKhUAFQmDAWmJAIIhaABQiGAAiFgIg");
	this.shape_70.setTransform(93.2,45.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(2,1,1).p("A9EkZQEli2DOgPQAcgmArghQAahGAfgrQAQgWAUgWQApguAygoQAXgRAYgRQA3gkA8geQAvgYAwgTQBNgdBPgVQDdg7DxAFQCjACCnADQAyABAyACQDJAIDJAGQDlAGDjAXQA3AGAzAJQELAzB5CmQAZAgAcAjQAIAKAIAKQAdAgAYAiQABABABACQAdAqAYAuQACABACAAQBtC7AGD9QACBUAFBYQAFBaAABbQAAACAAABQABACAAABQAFDFg/CmQhwEXmDA7QhRAKhXAGQmUAambAJQi8AEi4gQQhDgGhDgJQgTgCgTgDQiQgWiMgjQhIgShCgaQgVgIgVgKQiShAhyhpQg+g0gwhAQiLiSgyi1Qg9i4AajAQABgIABgHQACgQABgPQABgBABAAQACgiACgiQABAAAAgBQACgpABgpQgHgOgJgNQgOgYgTgWQhrgPjXAxQgUAFgUAFg");
	this.shape_71.setTransform(95.2,56.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("Ag0QEQhDgGhDgJIgmgFQiQgWiMgjQhIgShCgaQgVgIgVgKQiShAhyhpQg+g0gwhAQiLiSgyi1Qg9i4AajAIACgPIADgfIACgBIAEhEIABgBIADhSQgHgOgJgNQgOgYgTgWQhrgPjXAxIgoAKIi2AtQEli2DOgPQAcgmArghQAahGAfgrQAQgWAUgWQApguAygoQAXgRAYgRQA3gkA8geQAvgYAwgTQBNgdBPgVQDdg7DxAFIFKAFIBkADQDJAIDJAGQDlAGDjAXQA3AGAzAJQELAzB5CmIA1BDIAQAUQAdAgAYAiIACADQAdAqAYAuIAEABQBtC7AGD9QACBUAFBYQAFBaAABbIAAADIABADQAFDFg/CmQhwEXmDA7QhRAKhXAGQmUAambAJIhLABQiWAAiTgNg");
	this.shape_72.setTransform(95.2,56.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(2,1,1).p("A9amAQE1jADWgJQASgwAqgsQAhhHAigrQATgWAVgWQAuguA1gnQAZgSAZgQQA8gkBAgdQAxgWA0gTQBQgcBUgTQDng2D+ANQCpAHCwABQA0AAA0ABQDSAFDSAJQDvAKDsAcQA6AHA0ALQEcBABaDSQASAqAXAsQAGAMAHAMQAXApATApQABACABACQAVAyARA3QACAAACABQBQDXACEEQAABYACBbQAABegEBfQAAACAAACQABABAAACQgFDRhFCmQiAEvmBA8QhWAJhZAHQmlAfmuAJQjEAFjAgWQhGgIhFgLQgUgEgUgDQiVgciRgsQhKgXhDghQgWgLgUgLQiRhShpiFQg3hBgohPQhxivgnjIQgujDAWjJQABgIABgJQACgQABgPQABgBAAgBQADgkACgjQABAAABAAQABgrABgsQgEgQgGgQQgJgfgMgdQhrgWjlA0QgVAFgVAFg");
	this.shape_73.setTransform(97.4,67.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ah5RuQhGgIhFgLIgogHQiVgciRgsQhKgXhDghIgqgWQiRhShpiFQg3hBgohPQhxivgnjIQgujDAWjJIACgRIADgfIABgCIAFhHIACAAIAChXQgEgQgGgQQgJgfgMgdQhrgWjlA0IgqAKIi+AwQE1jADWgJQASgwAqgsQAhhHAigrQATgWAVgWQAuguA1gnIAygiQA8gkBAgdQAxgWA0gTQBQgcBUgTQDng2D+ANQCpAHCwABQA0AAA0ABQDSAFDSAJQDvAKDsAcQA6AHA0ALQEcBABaDSQASAqAXAsIANAYQAXApATApIACAEQAVAyARA3IAEABQBQDXACEEIACCzQAABegEBfIAAAEIABADQgFDRhFCmQiAEvmBA8QhWAJhZAHQmlAfmuAJIhEABQiiAAiegSg");
	this.shape_74.setTransform(97.4,67.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(2,1,1).p("A91noQFFjIDegDQAJg5Ang4QAohJAngqQAVgXAXgVQAxguA6gnQAZgSAcgQQBAgjBEgbQA0gWA3gSQBUgbBYgSQDygxEKAVQCwANC3gBQA2gBA3AAQDbACDaALQD5AOD2AhQA9AIA2ANQEsBNA7EAQAMAyARA1QAFAOAGAPQARAxAOAxQABACABACQAMA8AKA+QACAAACAAQA0D0gDEKQgBBdgDBeQgDBjgIBjQAAACAAABQAAACAAADQgQDdhJCnQiRFFmAA9QhZAKhbAHQm3AknAAKQjNAEjHgbQhJgKhHgOQgVgEgVgEQiagjiXg1QhNgchDgoQgWgNgUgOQiRhiheihQgwhOgiheQhVjMgdjcQggjMAUjUQABgJABgJQABgQACgQQAAgCAAgBQADglACgkQABAAABgBQACgsABguQgCgTgDgTQgDgmgGgkQhrgcjzA3QgWAEgWAGg");
	this.shape_75.setTransform(100.1,78.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AjCTZQhJgKhHgOIgqgIQiagjiXg1QhNgchDgoQgWgNgUgOQiRhiheihQgwhOgiheQhVjMgdjcQggjMAUjUIACgSIADggIAAgDIAFhJIACgBIADhaIgFgmQgDgmgGgkQhrgcjzA3IgsAKIjGAxQFFjIDegDQAJg5Ang4QAohJAngqQAVgXAXgVQAxguA6gnQAZgSAcgQQBAgjBEgbQA0gWA3gSQBUgbBYgSQDygxEKAVQCwANC3gBQA2gBA3AAQDbACDaALQD5AOD2AhQA9AIA2ANQEsBNA7EAQAMAyARA1IALAdQARAxAOAxIACAEQAMA8AKA+IAEAAQA0D0gDEKQgBBdgDBeQgDBjgIBjIAAADIAAAFQgQDdhJCnQiRFFmAA9QhZAKhbAHQm3AknAAKIg6AAQivAAirgXg");
	this.shape_76.setTransform(100.1,78.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(2,1,1).p("A0wnBQAChFABhGQADgsABgsQh1gkkmBGIjOA0QFVjSDmADQAAhQA1hQQAfgwAqgqQBgheB7hFQBFghBHgaQF8iPG9AvQC4ATC+gEQIkgNIWBOQBAAKA3APQE+BZAbEtQAHBMASBQQAMA7AKA7QAEBEADBHAeCnJQAnHVg0HcQhQLXo5BdQojA4oyANQkjAGkXg/QgWgFgWgFQifgpibg+QlziXh0nRQhxnBAmneQAFg5ADg4");
	this.shape_77.setTransform(103,89);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AmjUoIgsgKQifgpibg+QlziXh0nRQhxnBAmneIAIhxIADAAIADiLQADgsABgsQh1gkkmBGIjOA0QFVjSDmADQAAhQA1hQQAfgwAqgqQBgheB7hFQBFghBHgaQF8iPG9AvQC4ATC+gEQIkgNIWBOQBAAKA3APQE+BZAbEtQAHBMASBQQAMA7AKA7QAEBEADBHIAFAAQAnHVg0HcQhQLXo5BdQojA4oyANIg2AAQkHAAj9g5g");
	this.shape_78.setTransform(103,89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44,p:{scaleX:1,x:89.6}},{t:this.shape_43,p:{scaleX:1,x:89.6}}]},1).to({state:[{t:this.shape_44,p:{scaleX:1,x:89.6}},{t:this.shape_43,p:{scaleX:1,x:89.6}}]},33).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},48).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_44,p:{scaleX:1.028,x:94.7}},{t:this.shape_43,p:{scaleX:1.028,x:94.7}}]},1).to({state:[{t:this.shape_44,p:{scaleX:1,x:89.6}},{t:this.shape_43,p:{scaleX:1,x:89.6}}]},23).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-21.9,159.1,64.2);


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


(lib.TwiggsHair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6FFFF").s().p("AACADIgBgBIgBgCIgDgDIAAAAIACAAIAFAEIAAAAIgBADIgBgBg");
	this.shape.setTransform(16.1,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AAAAAIAAAAIABAAg");
	this.shape_1.setTransform(35.8,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AhwBJIAAAAIAAAAIgLgPIgDgMQgDgHAFgDIAAAAQAGAKACAOIAAAAIAFAIIAAABIACADQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgCgBgAhlA6IgBgBIgEgLIgCgCIgBACIAAACIAAABQgEgBgBgJIAAgBIAHgHIABAAIAGAJQACALgDAIgAhcAmQAAgJABgIIADgJIgBgCIgGgFQACgLAGgKIAFgJIAEgFQgDAFAAADIgCAJQgEAMABALIAAAJQgBAIABAIIAAAJIAAAIIgBADQgFgIAAgJgAhSAfIABgIQACgKAAgIQgBgGACgHQADgKAEgHQAFgGAGgFIADgBQACAEgDAEQgJAPAAAPIgCAUIgEAVIgCABIgEAGQgDgIAAgKgAg7ADIAHgEQgFAKgBAMIgBAIIgEAEgAh0AVIABgEQABgGABgDIAEgDIAAAAIAAAAIAIgBIgBABIgCAFIAAAAQgDAGAAAIIAAABIgJgEgAgqAEQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAAACQgCAIgFAFIgEACQgDgLAKgFgABzALIAAAAQgFgCACgEIAAgBQAFgEAHAEIgHACIABAAQADAAABADIAFACIgBABIgLgBgABgABIgBAAIAAgBQAAgCAIACIAAAAIACACIAAABIgDABQgCAAgEgDgAgbgCIAHgEIgCAFIgGACIgEACIAFgFgAglgMIACgBQAAAAABAAQAAAAAAABQAAAAAAABQAAAAgBABQgEAIgGAFQABgJAHgGgAhjgDQABgEADgDIgDAHIgBADIAAgDgAgJgCIgCgCQAIgKAIACIgDAFIgDAFIgFABIgDgBgABSgDIgEgDQAEgDAFADIABAAIAAAAIADAAQgBAEgDAAIgFgBgABtgEIAAAAIgCgBIgQgGIgMAAIAAAAIgFACIgBAAIAAAAQgGACgCgDIABgBQADABAEgDIAAgBIAFgBQANgBANAEIACABIABAAIACAAIACAAIAAAAIAMABIACAAIADABQgHADgIADIgEgBgAAOgNIAAAAIABAAQAJgEADAIIgCACIgJgBIgIADIAGgIgAAfgLIABgBQADgEAIAEQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAIgFABQgEAAgBgEgAg5gQIAFgKQADAAgBAGIgBAGIgFAEIgBABQgCAAACgHgAgvgdIgBgGIAIgJIAEgFIAJAAIAEACQgGAIgFALQgFAKgIAIIAAgTgAgageIAFgLQACgVAGAYIAAALQgHAOgDAAQgEAAABgRgAApgTIAAAAIABAAIAAgBIAEgEIAJgDQAJgDAKgBIAAABIAAABIABAAIAAAAQgHAFgLABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAABAAQAGgBgEADIAAABIgJAFIgBAAIAAgBIgEABQgEAAAAgFgAgHgRIgCgJIABgKIgBgEQgCgPAIgCIAAAIIACACIABgBQABAGgCAHQgDAIAEAFIAAABQgEABgCADIgBAAgAAGggIABgHIABgDIADgEQADgHAHABQAAAGgCAEIgMAQIgBgGgAAdgbIgBAAQADgHAHgCIABAAIAEgBQgBAGgGADIAAAAIgEABIgDAAgAAVgkIABgBQAHgJANgDIAAgBQADgBADABQAAADgDABIAAAAIgDACIAAABQgEAEgGACQgDABgEAAIgEAAgAA3gmIAAgBQAGgDAIgCIAJgBIAAAAIANgDIgFAEIgBABIgGABQgNACgKAEQgEAAADgCgAA0guIAAgBIAHgHIAAAAQANgFAPAAIABACIgEAEIgTAFIAAAAIgBAAQgEACgEAAIgEAAgAAlg4IAAgBIAHgGIABAAQAMgHAQgDIAAABIAAABIgJAHIAAABQgJAEgMAEIgDAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAgAAcg4QAAgEACgFIABgBIAEgEIAAAAIABAAIADAAQABADgBACIgBAAIgJAJg");
	this.shape_2.setTransform(27,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah9BIIgBgBQgFgHgCgJQAAgMAEgKQAEgKAGgIIAAgCIAAgCIAAgBQACgFAKgFQACgBAAgFIABgEIABgDIAAgBIAGgGIACgBIAGgEIABABQADgHAIgEQAIgBAMgGIAFACQAHgJALgCQAEgCAFAAIAGgIIAEgJIAEAGIAEgCIAFABQADgEADgGIABAAQACACAAAGQAAAJACAFIAAgBQAFgIAIgFIAAgBIAEgJQADgGAGgEIAAAAQAEgFADABIgHAKIAAAAIAAADIAAABQADgDAHAAIAAADIgBAGIAAAAIAAABQACABAJgDIAAgBIABgBIAAAAIAHgDIAGgBIABABQABACAEAAIADACIgCADIgDABIgFAHIASAAIABACQgOABgNAEIgBAAIgHAIIAAAAQAHABAGgCIAAAAIABgBIASgFIgCADIAJAAIAAABIACABIgCABIgMACIgBAAIgIACQgIACgGADIAAAAQgDACAEAAQAKgEAMgCIAGgBIgEAHIAQAAIAFACIAAABIAKABIADACIABACIgCADQgEACgDAEIALACIADADIABAAIAFgBIABAGIgDAAIgBAAIgMgCIgBAAIgCAAIgCAAIAAAAIgCAAQgNgEgNABIgGABIgBAAIAAAAIABAAQgDAEgEgBIgBAAIAAABQACADAHgDIAAABIABAAIAEgCIABAAIALAAIAQAGIACAAIABAAIAEABIgCABQAMADADADIgDABQgHgEgFAEIAAAAQgCAFAFABIAAABQgIgCgHgDIgCgBIgDgCIgFAAIgCgBIgBgCIgBAAIgBAAIgHgEIg0gEIABgCQgDgIgIAEIgBAAIgBAAIgFAJIgCAAIgHADIACgFIADgFQgHgDgIAKIABACIAEACQgJABgEAEQgFAFgHADIgOAGQAFgFABgJIABgBQgBAAgBAAQAAgBgBABQAAAAgBAAQAAAAAAAAQgLAFAEAMQgIAGgEAGIgFAGIgHADIAEgUIABgUQAAgQAJgOQADgFgCgEIgDABQgGAFgEAHQgFAGgDALQgBAGAAAGQABAIgCALIgBAHQgBALADAHIgGAEIAAgIIAAgKQgBgIAAgIIAAgIQgBgLAFgNIACgJQAAgDADgEIgFAFIgFAIQgGAKgBALIAGAGIAAABIgCAKQgCAIAAAIQABAKAEAIIgMANIgJAMIgCADIgDAJQgIgIgEgMgAh+AuIAEALIAKAPIAAABIABAAQACADAAgFIgBgDIAAgBIgFgHIgBAAQgBgPgGgKIgBAAQgEAEACAHgAhpAuIAEALIAAABIAAAAQAEgIgCgKIgHgJIAAAAIgHAHIAAAAQAAAJAEABIAAgBIAAgBIACgCIACACgAg7ADIgEAeIAFgFIABgHQABgMAEgKgAhtAFIgDADQgCADgBAGIAAADIAIAEIAAAAQABgIACgGIAAgBIADgFIAAAAIgHAAIgBAAgABgAAIAAABIAAAAQAGAFAEgDIAAgBIAAAAIgDgCIAAAAIgFgBQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAgAgagDIgFAFIADgBIAGgCIACgFIgGADgAglgMQgGAFgCAJQAHgFAEgHQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgCABgAhfgKQgDACAAAEQgBAFACgEIAFgLgABOgGIAFADQAHADABgGIgCAAIAAgBIgBAAIgFgBQgDAAgCACgAAggMIAAABQABAGAIgDQABgBAAAAQABAAAAgBQAAAAAAgBQABgBAAAAQgFgCgDAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAABgAg4gQQgEAIAFgCIAFgEIAAgGQACgHgEAAIgEALgAgngsIgJAIIABAGIABATQAIgIAFgKQAFgKAGgJIgEgBIgJAAIgEAFgAgVgqIgFAMQgCAfAQgdIAAgLQgEgMgCAAQgCAAgBAJgAAqgTQAAAIAIgEIAAAAIAAAAIAJgFIABAAQADgDgGABQAAAAgBgBQAAAAAAAAQAAAAAAAAQABAAABAAQAKgCAHgEIACgCIACgBQgCgBgDAAIgBAAIAAABIABAAIADABIgCABIAAAAIAAgBIAAAAQgLAAgIADIgJADIgFAEIAAABIAAAAgAgIgpIABAEIgBAKIABAJIACAAQACgCADgCIAAAAQgEgGAEgIQABgGAAgGIgCAAIgBgBIgBgJQgHADACAOgAALgvIgDAEIgBADIgBAIIABAGIAMgRQADgDgBgHIgBAAQgGAAgDAGgAAdgcIABAAQAEABADgBIAAgBQAGgCABgHIgEABIgBAAQgHADgDAGgAArgyIgBAAQgNADgHAKIAAAAQAEACAHgDQAFgCAEgEIAAAAIADgCIABAAQADgBAAgEIgDAAIgDABgAAmg5IgBAAQABADAGgCQALgDAKgFIAAAAIAIgHIAAgBIAAgCQgQADgMAHIgBAAIgGAHgAAkhGIgFAEIAAAAQgDAGABAEIAAAAIAKgJIAAgBQABgCAAgDIgDAAIgBAAgACDAOIgFgDIABgBIAEACQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABg");
	this.shape_3.setTransform(26.9,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(55));

	// Layer 3
	this.instance = new lib.TwiggsHair2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(27.2,10.4,1,1,0,0,0,1.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-23},14).to({regY:8.2,scaleX:1,scaleY:1,rotation:-27.1,y:10.5},18).to({regY:8,scaleX:1,scaleY:1,rotation:0,y:10.4},16).wait(7));

	// Layer 2
	this.instance_1 = new lib.TwiggsHair1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.6,11,1,1,0,0,0,2,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:3,rotation:-30,x:33.6,y:10.5},18).to({regY:3.1,scaleX:1,scaleY:1,rotation:-42.4,x:34.1,y:10.8},13).to({regY:2.9,scaleX:1,scaleY:1,rotation:0,x:34.6,y:11},17).wait(7));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C6FFFF").s().p("AAFAHQgFAAgEgEIgBgBIACgIIAEAEIABACIAAABIABABIABABIACAEg");
	this.shape_4.setTransform(16.1,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AAFAqQACgOAHgJIAAABIAAAAIABAAQAJgMANgIIABAAIAIAAQAAAHgDAFIAAABIAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAIAAABQgVAYgPAeIgCAEQgEgNADgPgAgVAoQAAgGADgIIAFgMQAAgDAEgEIADAAQAKgIAJACIgFANQgKAEgTAZgAAKAOIAGgMIAAAAIABAAIAIgCIgIAIIAAAAIgFAGIgCAAgAgTACQgGgCACgKIABAAQADgNAQACIADAAIAAAAQAKAAAMACQgBADgEAAIAAABIgRAFIgDACQgJAEgHAFIAAABIAAAAgAAXgaIgBAAIgGgCIgIgBIgFAAIgCAAIgEAAIgDABIgBAAIgCAAIgBAAIAAAAQgFACgIgBIAAAAIgBAAIgCgIQALgBAMABIADAAIAAAAIAEAAIAAABIAGAAIABAAIAXAGQgCADgEABIgFgCgAAYgmIgBAAQgNgFgNgBQgKgBgLABIgBAAIgDACQgJABgHACIgBAAIAAgBIAKgDIABAAQAJAAAJgEQgCgCgDAAQgEAAgBgDQADADAEgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABAAIACAAIADAAIAEABIAFABQARADAPAJIgDABIgCgBgAAUg0IAAAAIgOgFIgJgDIgGgBQgFAAgCgDIABgDQAEgCAFABIACAAIABAAQAMAFALAHIAAAAIAEADIgDABIgBAAg");
	this.shape_5.setTransform(9.2,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAfIABgFIgOAKQgCABgGAIIgHAJIgCgBIgBgHQAAgPAJgQIADgEIgCAAIgIgFIAAAAQgCgLADgMIABgDIgCgDIAAAAQAIAAAFgCIABAAIABAAIACAAIAAAAIADAAIAGgBIABAAIAFAAIAHABIAGADIABAAIAGABQADAAACgDIgWgGIAAAAIgHgBIAAAAIgEAAIgBAAIgDAAQgLgBgMABIgBgGIAAAAIgQABQAHgCAIAAIAEgCIAAAAQALgBAKABQAPABALAFIABAAQAEAAACgBQgQgIgRgDIgFgBIgEgBIgCgBIgCABIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgEABgDgDQABADAEAAQADAAACADQgJAEgJgBIgBAAIgKAEIAAAAIgFABQAJgJAKgCQABgGAJACIABgBQADgEABgGQACAEAGAAIAFAAIAKADIANAFIABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBIgDgCIAAgBQgLgGgNgFIgBgBIgBAAQgGgBgEADIAAgDIAIgIIAEABIABAAQAQACAMAFIAAABIAAABIABAAQAHADAEAHIABAAIAFACIAAABIACAEIABAAIADADIAAABIAAAAIAAABIAHAHQAEAEACAEIABABIAAABIABABQADAEAGAAIABAAIAAACIgFAHIgBAAIgBABIgBAAIAAABIgBAAIAAABIgBAAIgDAAIgBABIgBACIAAABIgBAAIgBABIAAACIAAABQgGAIgEAKQgDAKgBAMIAAgLIAAAAIAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAAAIAAgEIgEAEIgMANIAAAAQgFAIgEAJIAAAAIAAABIgFALIgEAAIgCACQAOgfAVgXIAAgBQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAAAIAAAAQADgGAAgIIgIABIgBAAQgNAJgJAMIgBAAIAAgBIAAgBQgGAKgCAOQgDAPAEAMIgBACQgHgVAHgXgAgSAKIgDABQgEAEAAACIgFANQgDAIAAAFIAAADQAUgZALgDIADgOIgDAAQgHAAgJAGgAAAARIAAAAIAFgFIAAgBIAIgJIgIADIgBABIAAAAIgEALgAgfAFIABABIAAgBQAGgFAJgFIAEgCIAQgFIAAAAQAEgBABgDQgKgCgLABIgBAAIgDgBQgQgCgDANIgBAAQgCAKAGACg");
	this.shape_6.setTransform(10.3,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(55));

	// Layer 5
	this.instance_2 = new lib.TwiggsPonytail("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.6,11,1,0.836,0,0,0,8.4,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:66.7,x:7,y:10.5},15).to({scaleY:1.11,rotation:71.2,y:10.6},10).to({scaleY:1,rotation:66.7,y:10.5},11).to({scaleX:1,scaleY:0.84,rotation:0,x:7.6,y:11},12).wait(7));

	// Layer 6
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6FFFF").s().p("AgNAGIgKgHIgCAAIABgEQAVAAATAEIACAAIABAAQAFAAACABIgCADIgJgBIAAAAQgLgCgLABIAAAAIgCAAIgBABQAAABAAAAQgBABAAAAQAAABAAAAQABABAAAAIAAAAIgDAAg");
	this.shape_7.setTransform(18.3,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgWAiIAAgBQgCgCgFABQgKABgGgEIAAgBQAIgBAIABIAKAAIAEACIABAAQAIABAFACIAAABIAAAAIgJABIgMgBgAgEAAQgFgBgDABIAAgGIAJACIAOACQAMACALAEQAAABgBABQAAAAgBAAQAAAAgBAAQgBAAAAgBIgBAAIABABIAAAAIAAABIgigHgAgDgeIgBAAIgBgCIABgCQAWAFARAMIABAAIAKAIQgbgGgWgPg");
	this.shape_8.setTransform(19,4.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZA0QgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBIABAAIACAAIAAgBQAMgCAKADIgKgBIgBABQgCACgDAAIgCACIgGAAIgBAAgAALAxIgDAAIADgCQgCgDgFABIgBAAIgDgBQgTgEgVAAIAAAAQACgEAFgBIABAAIAAAAQgDgCgEgBIgRgEIAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgEADAAQAKgDAJABIAJABIAIACIABAAIAHgBQgDgCgEAAIgCAAIAAAAIgGgCIgIgCIgBAAIAAgBIAAAAIgHAAIAAgBQgHgBgDgCQACgEAHABIACAAIADAAIAJACIAEABIABAAQAcAIAbAJIAAABIABABIAAAAIAAABIABAAIACABIgCABIgCABIgIACIgCABIgBACIgHAFIAAACIAAABIgBADQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAgAgfAcIABABQAKACAKgCIAAAAIABgBQgGgCgHgBIgBAAIgEgCIgKAAQgIgBgIABIAAABQAFAEALgBIACAAQADAAABABgAAkAVIgBgBQgKgKgPgGIAAAAIgfgHIgBgBIABgBQADgBAGABIAiAHIAAgBIgBAAIAAgBIAAAAQABABABAAQAAAAABAAQAAAAABgBQAAAAAAAAQgKgEgMgDIgPgCIgIgCIgBAAIgBAAIgMgBIAAgBQgEgBgGAAIAAAAIgBABIgBAAQgHABgDgEIAAAAQAQgFAQACIAKABIAAAAQAFAAACgDIgGgCIAAAAIgMgFIgVgHIgBAAIgBAAIgCgBIAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIABAAQAIACAJgBIAIAAIAAABIAAAAQAEgBgBgEQgFgCgHgCIgEgBIAAgBQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAAAIACgBQAFgCAGABIAAAAQALAEAOAAIAAABQAHADAJADIAAAAIAYAaIAAAAIAAABIABAAQAFAEADAFIACADIgBABIgBABIgBABIAAABIgBAEIgDACIgBABIgBACIgEAGIgBAGIgBABIgCAAIgFgEgAgNglIABACIAAAAQAWAPAbAGIgKgIIAAAAQgSgMgWgFIAAACg");
	this.shape_9.setTransform(19.9,5.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCEEE3").s().p("AgIAGIgKgHIgCAAIABgEQAUAAAUAEIAAADQgLgCgMABIgBAAIgBAAIgBABQAAAAAAABQgBABAAAAQAAABABAAQAAABAAAAIgDAAg");
	this.shape_10.setTransform(17.6,9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgRAiQgCgCgFAAQgLACgFgFIAAAAIAQgBIAPADQAIAAAFACQgGACgGAAIgJgBgAAAAAIgCAAIACAAgAABgdIgBgDIAAgCQAYAGARALIgEAAQgPAAgVgMg");
	this.shape_11.setTransform(18.3,4.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOAZIABgBIABAAQANgCAKADIgPACIgCABIgIABQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAgAAXAaIgDAAIADgDQgCgCgGAAIgBAAIgCAAQgTgEgWAAIAAgBQACgDAFgBIABAAIAAgBQgDgCgEgBIgRgEIgBAAQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgDACgBQALgCAJAAIAJACIAJACIAAAAIAHgBQgCgCgEgBIgCAAIgBAAIgGgCIgIgCIgBAAIAAAAIAAgBIgHAAIAAAAQgIgCgDgCQADgDAHAAIACAAIADABIAJABIAEABIABABQAdAHAcAJIAAABIAAAAIABAAIAAABIAAAAIACABIgCACIgCABIgIABIgCACIgBABIgHAGIAAABIAAABIgBADQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgBAAgAgTAFQALACAJgDQgEgCgIAAIgPgCIgRAAIAAAAQAGAFALgCIABAAQADAAADACgAADgbIgEgBIAAAAIAiAGIAAAAIAAAAIAAABIgegGg");
	this.shape_12.setTransform(18.6,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D3DDC6").s().p("AgIAGIgLgHIgCAAIABgEQAVAAAVAEIAAADQgMgCgMABIAAAAIgBAAIgBABQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAIgEAAg");
	this.shape_13.setTransform(17.5,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AgRAiQgDgCgEAAQgLACgGgFIAAAAQAIgBAJAAIAPADQAIAAAFACQgGACgGAAIgJgBgAABAAIgBAAIgCAAIgBAAIgEAAIAAAAIAAgEIAIAAIABABIAIAAIAGABIABAAIAIACIAJACIADACIADABIgBAAIgDABIgjgGgAABgdIgBgDIAAgCQAYAGASALIgEAAQgQAAgVgMg");
	this.shape_14.setTransform(18.2,4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAwIABgBIABAAQAOgCAKADIgRACIgCACIgHABQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAANAxIgEAAIADgDQgCgCgFABIgBAAIgDgBQgUgEgVAAIAAgBQACgDAEgBIABAAIAAAAQgCgCgEgCIgSgEIgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgEACgBQALgCAKABIAJABIAIACIABAAIAIgBQgDgCgFAAIgCAAIAAAAIgGgCIgJgDIAAAAIgBAAIAAgBIgHAAIAAAAQgHgBgDgCQACgEAHAAIADAAIADABIAIACIAFABIABAAQAdAIAcAJIAAABIABABIAAAAIAAAAIABAAIACABIgCACIgCABIgJACIgCABIgBACIgHAFIAAACIAAABIAAACQgBABAAABQAAAAAAABQAAAAAAAAQgBAAAAAAIAAAAgAgfAcQALACALgDQgGgCgHAAIgQgDQgIAAgJABIAAABQAGAEALgBIACgBQADAAACACgAAqAYIgBgBIgBgCIgBAAIgEgDIgBAAQgJgJgNgFIgCgBIgegGIgBgBIABgBIABAAIABAAIABgBIACAAIACABIABAAIAjAFIADAAIAAAAIgCgBIgEgBIgJgEIgHgBIgCgBIgFAAIgHgBIgBAAIgFgBIgDAAIgCAAIgEgBIAAAAIgBAAIgHgBIAAgBIgFgBIgBAAIgEAAIgCAAIgBAAIgEABIgBAAIgCgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgCgBQAQgEARACIALABIAGgEIgFgBIgBAAIAAgBIgMgDIgCgBIgTgHIgBAAIgDgBIAAAAIABgCIACAAIABAAIAEAAIABAAIAMAAIAGAAIACAAIABABIAAAAIAEgCIAAgBIAAgBIgEgDIgGgBIgFgBIAAgBIgBgBIABAAIABgCIACgBIADAAIABAAIADAAIABgBIABABIAIACIABAAIAPACIABABIAJACIABAAIAHADIAAAAIAHAHIASASIAAAAIABABIAAAAIAGAGIAAABIABABIABAAIAAABIADAEIgBACIAAAAIAAABIAAAAIAAACIgBACIgBABIgBABIAAAAIgBABIgBABIgBABIAAABIgCACIgBACIgBACIgBAAIgBAFIgBACIgCABIgCgBgAgNglIACACQAXAPARgDQgTgLgWgGIgBADg");
	this.shape_15.setTransform(19.5,5.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9CCAA").s().p("AgIAGIgLgHIgCAAIABgEQAVAAAVAEIAAADQgMgCgMABIAAAAIgCAAIgBABQAAAAAAABQgBABAAAAQAAABABAAQAAABAAAAIgDAAg");
	this.shape_16.setTransform(17.3,10);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AgSAiQgCgCgFAAQgLACgGgFIAAAAQAJgBAIAAIAQADQAIAAAFACQgGACgHAAIgJgBgAABAAIgBAAIgBAAIgBAAIgFAAIgBAAIABgEIAKABIAGAAIAIABIACABIAKABIAKAEIACABIgBAAIgDABIgkgGgAABgdIgBgDIAAgCQAYAGATALIgFAAQgQAAgVgMg");
	this.shape_17.setTransform(18,4.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaAwIABAAIACgBQAOgCAKADIgRACIgCABIgIABQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBgAANAxIgDAAIACgCQgCgDgFAAIgBAAIgDAAQgUgEgWAAIAAAAQACgEAFgBIABAAIAAgBQgDgCgEAAIgSgEIgBAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQAKgDAKAAIAKACIAIACIABAAIAIgBQgEgCgEgBIgCAAIAAAAIgGgCIgJgBIgBAAIAAgBIAAAAIgIAAIAAgBQgHgCgDgCQACgDAIAAIACAAIADABIAJABIAEABIABABQAfAHAcAKIAAABIABAAIAAAAIAAACIABAAIACABIgCABIgCABIgJABIgCACIgBABIgHAGIAAABIAAABIgBAEQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAgAgfAdQALACALgDQgGgDgIAAIgQgCQgIgBgIABIAAAAQAFAFALgCIACAAQAEAAACADgAAsAXIgBAAIgBgBIgBAAIgFgEIgBgBQgJgIgNgFIgCAAIAAAAIgegHIgBgBIAAAAIAAAAIABgBIACAAIABAAIABAAIACAAIACAAIAiAGIAEgBIAAAAIgBgBIgKgDIgKgDIgCAAIgHgCIgGAAIgGgBIgDgBIgCAAIgFAAIgBAAIgGgBIgBgBIgFAAIgBAAIgEAAIgCAAIgBAAIgEAAIgBAAIgCAAIgCgCIAAAAIgDgBQAQgGASACIALABIAGgDIgFgBIgBAAIAAAAIgMgFIgCgBIgUgFIgBgBIgCgBIgBgBIAAgBIACAAIABAAIAFAAIABAAIAMAAIAGAAIACAAIABAAIAAAAIAEgBIAAAAIAAAAIABgBIgDgDIgGgCIgFgBIAAgBIgBgBIAAAAIAAgBIABgBIAEAAIABAAIADgBIABAAIAAAAIAJACIABAAIAPACIABAAIAJADIABABIAHACIAAAAIAIAGIASATIABAAIAAABIABAAIAGAFIAAABIAAABIABABIABAAIADAEIAAACIAAABIgBAAIAAABIAAACIAAABIgBABIgBABIgBABIgBACIgBABIAAABIgCACIgBABIgCACIAAAAIgCAGIgBABIAAAAIgBABIgCgBgAgNgmIABADQAYAOARgBQgSgMgYgFIAAABg");
	this.shape_18.setTransform(19.4,5.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DFBB8E").s().p("AgIAGIgMgHIgCAAIABgEQAWAAAWAEIAAADQgNgCgMABIAAAAIgCAAIgBABQAAABgBAAQAAABAAAAQAAABAAAAQABABAAAAIgDAAg");
	this.shape_19.setTransform(17.1,10.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("AgSAiQgDgCgEAAQgMACgGgFIAAAAQAJgBAJAAIAQADQAIAAAFACQgGACgHAAIgJgBgAABAAIgBAAIgCAAIgBAAIgDAAIgBAAIAAgEIALABIADAAIALABIAGACIABAAIAQAFIgDABIglgGgAABgdIgBgDIAAgCQAZAGATALIgFAAQgQAAgWgMg");
	this.shape_20.setTransform(17.9,4.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaAwIABgBIACAAQAOgCAKADIgRACIgCACIgIABQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAANAxIgDAAIADgDQgCgCgGAAIgBAAIgDAAQgUgEgXAAIAAgBQACgDAFgBIABAAIAAAAQgCgCgFgBIgSgFIgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAQAAgEADgBQAKgCALABIAJABIAJACIABAAIAIgBQgEgCgEAAIgCAAIgBAAIgGgCIgJgDIAAAAIgBAAIAAgBIgHAAIAAAAQgIgBgDgCQACgEAIABIACAAIAEAAIAJACIAEABIABAAQAfAIAdAJIAAABIAAAAIABAAIAAABIABAAIACABIgCACIgDABIgIACIgCABIgCACIgHAFIAAACIAAABIAAACQAAABgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAgAggAcQAMACALgDQgGgCgIAAIgQgCQgJgBgIABIAAABQAGAEALgCIABAAQAEAAACACgAAtAYIgBAAIgBgBIgBAAIgEgFIgBAAQgKgJgNgEIgDgBIAAgBIgegGIgBAAIAAAAIAAgCIAAAAIACAAIABAAIABAAIADAAIACAAIAjAFIAEAAIgRgGIgBAAIgGgCIgKgBIgDAAIgGgBIgDAAIgBAAIgFgBIgCAAIgGgBIgBAAIgFgBIgBgBIgEAAIgCAAIgBAAIgEABIgBAAIgCgBIgCgBIAAAAIgEgCQARgEARACIAMABIAGgDIgFgCIgBAAIAAgBIgMgDIgCgBIgUgHIgBAAIgDgBIAAAAIAAAAIgBgBIACgBIABAAIAFAAIABAAIAMAAIAGAAIACAAIABABIABAAIADgCIABAAIAAgBIgCgDIgGgCIgFgBIAAAAIgBgBIAAAAIAAgBIAAgCQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAAgBIADAAIACgBIAAABIAJABIAAAAIAQADIABABIAJABIABABIAIACIAIAGIAAAAIATASIAAABIABABIAAAAIAGAGIAAABIABABIAAAAIABAAIADAEIABADIAAABIAAAAIAAAAIAAACIgBABIgBACIgBABIgBABIAAABIgBABIgBABIgCACIgBACIgBACIAAAAIgDAFIgBABIgBACIgCAAgAgNglIABACQAYAPASgDQgTgLgYgFIAAACg");
	this.shape_21.setTransform(19.2,5.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E6AA71").s().p("AgIAGIgMgHIgCAAIABgEQAWAAAWAEIAAADQgNgCgMABIAAAAIgCAAIgBABQAAAAAAABQgBABAAAAQAAABABAAQAAABAAAAIgDAAg");
	this.shape_22.setTransform(16.9,10.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6600").s().p("AgSAiQgDgCgFAAQgLACgHgFIAAAAIASgBIAQADQAJAAAFACQgGACgHAAIgJgBgAARACIgQgCIgBAAIgBAAIgGAAIgBAAIAAgFIADAAIACAAIACAAIAAABIAGABIAFAAIAIABQANACAKAEIACABIgCAAIgDABIgVgEgAABgdIgBgDIAAgCQAZAGATALIgEAAQgRAAgWgMg");
	this.shape_23.setTransform(17.7,5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbAwIABgBIABAAQAPgCALADIgSACIgCACIgIABQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBgAANAxIgDAAIADgDQgDgCgFAAIgBAAIgDAAQgVgEgXAAIAAAAQACgEAFgBIABAAIAAgBIgHgCIgSgFIgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgEACgBQALgCAKAAIALACIAIACIABAAIAIgBQgDgCgFgBIgCAAIAAAAIgGgBIgKgCIAAAAIgBgBIAAgBIgIAAIAAAAQgHgBgDgDQACgDAIABIACAAIADAAIAKACIAEAAIABABQAgAIAdAJIAAABIABAAIAAAAIAAABIABAAIACABIgCACIgCABIgJACIgCABIgBABIgIAGIAAACIAAAAIgBADQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAgAggAcQALACALgDQgGgCgIAAIgQgCIgSAAIAAABQAGAEAMgCIABAAQAEAAADACgAAuAYIgCgBIgBAAIgEgFIgCAAQgJgJgOgEIgDgBIgegHIgBAAIAAgBIgBAAIAAgBIABgBIAEAAIADABIABAAIAPADIAVACIADAAIABAAIgBAAQgLgFgMgDIgHgBIgGAAIgGgBIAAAAIgDAAIgBAAIgDgBIgCAAIgBAAIgBAAIgGgBIgBAAIgFgBIgBAAIgFgBIgBABIgBAAIgEgBIgBAAIgBABIgBgBIgDgBIgEgCQAQgEATACIALAAIAHgCIgFgCIgBAAIgBgBIgLgDIgDgBIgUgHIgBAAIgCgBIgBAAIAAgBIgBAAIAAAAIABgBIABAAIAFgBIABAAIAMABIAHAAIACAAIABAAIAAAAIAEgBIABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIgGgBIgEgBIgBgBIgCAAIgBgCIABgBIADgBIAAAAIADAAIACgBIABAAIAIABIABABIAQADIABAAIAJABIABABIAHACIABABIAIAFIATASIABAAIAAABIABABIAGAGIAAAAIAAABIABAAIABABIAEAEIAAACIABABIAAABIAAABIAAAAIgBACIAAACIgCABIAAAAIAAABIgBABIgBABIgBABIgCACIgBACIgBABIAAABIgDAEIgBABIAAABIgBACIgBABIgBAAgAgOglIACACQAYAPASgCQgTgMgYgFIgBACg");
	this.shape_24.setTransform(19.1,5.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EC9955").s().p("AgIAGIgMgHIgDAAIACgEQAWAAAWAEIAAADQgNgCgMABIAAAAIgCAAIgBABQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAIgDAAg");
	this.shape_25.setTransform(16.8,10.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6600").s().p("AgSAiQgDgCgFAAQgMACgGgFIAAAAQAJgBAJAAIARADQAIAAAFACQgGACgHAAIgJgBgAAMABIgKgBIgCAAIgCAAIgEAAIgCAAIABgFIACAAIABAAIAAAAIAEABIABAAIAEABIAFAAIAJABIANADIACAAIAIADIABABIgDABIgcgFgAABgdIgBgDIAAgCQAaAGATALIgEAAQgRAAgXgMg");
	this.shape_26.setTransform(17.5,5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgcAwIABgBIACAAQAPgCAKADIgRACIgDABIgIACQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBgAANAxIgDAAIADgCQgDgDgFABIgBAAIgDgBQgWgEgXAAIAAgBQACgDAFgBIABAAIAAAAIgHgEIgTgDIAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgEADAAQALgDAKABIALABIAIACIABAAIAIgBQgDgCgEAAIgDAAIAAAAIgGgDIgKgCIAAAAIgBAAIAAAAIgIAAIAAgBQgHgCgEgBQADgEAIAAIACAAIADABIAKABIAEACIABAAQAgAIAeAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgJABIgCACIgBACIgIAFIAAABIAAACIgBADQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAIgBAAgAghAdQALABAMgCQgGgCgIgBIgRgDQgJAAgJABIAAAAQAGAFAMgBIACgBQADAAADADgAAtAXIgBAAIgEgEIgCAAQgKgJgOgGIgDgBIgegGIgBAAIgBgBIgBgBIABgBIAEAAIADABIACAAIAKACIAbADIADAAIgBAAIgIgEIgBAAIgOgDIgIgCIgFAAIgEgBIgCAAIgDgBIgBAAIgBAAIgEgBIgBAAIgBAAIgHAAIAAAAIgGgBIgBgBIgEAAIgBAAIgBAAIgFAAIAAAAIgBAAIgCAAIgDgBIgFgBQARgGATACIALACIAHgEIgFgBIAAAAIgBgBIgMgDIgCgCIgVgFIgBAAIgCgBIgBgBIgBAAIgBgCIABAAIABAAIAFgBIABAAIANABIAGgBIADAAIAAABIABAAIAEgBIAAAAIABAAQABAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgCIgEgBIgBgBIgCAAIgCgCIAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAAgBIADAAIACAAIABAAIAIAAIABAAIAQADIABAAIAKACIABABIAHADIABAAIAJAEIAAAAIATASIABABIAAABIABABIAGAEIAAABIAAABIABAAIAAACIAFADIABACIAAABIABABIAAACIAAAAIgBACIAAABIgCABIAAAAIAAABIgBACIgBABIgBABIgCACIgBABIgBABIAAABIgDAFIgBABIgBACIgBABIgBABIgCgBgAgOgmIABADQAZAOASgCQgTgLgZgGIAAACg");
	this.shape_27.setTransform(19,5.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F28839").s().p("AgIAGIgNgHIgCAAIABgEQAXAAAXAEIAAADQgNgCgNABIAAAAIgCAAIgBABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABAAIgDAAg");
	this.shape_28.setTransform(16.6,10.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6600").s().p("AgTAiQgDgCgFAAQgMACgGgFIAAAAIASgBIARADQAJAAAFACQgGACgHAAIgKgBgAACAAIAAAAIgCAAIgEAAIgCAAIgCAAIAAgFIAOACIACAAIALABQANACAMAEIAAABIgEABIgmgGgAABgdIgBgDIAAgCQAaAGAUALIgFAAQgRAAgXgMg");
	this.shape_29.setTransform(17.4,5.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgcAwIABAAIABgBQAPgCALADIgRACIgDACIgIAAQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAANAxIgDAAIADgDQgCgCgGAAIgBAAIgDAAQgWgEgYAAIAAAAQACgEAGgBIABAAIAAgBIgIgCIgTgFIAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQABgBAAAAQAAgEADgBQALgCALAAIAKACIAJACIABAAIAIgBQgDgCgEgBIgDAAIAAAAIgHgBIgJgCIgBAAIAAgBIAAAAIgIAAIAAgBQgIgCgEgCQADgDAIABIACAAIAEAAIAKABIAEABIABABQAhAHAeAKIAAABIABAAIABAAIAAABIAAAAIACABIgCACIgCABIgJACIgCABIgCABIgIAGIAAABIAAABIAAADQgBABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAgAgiAcQAMADAMgEQgGgBgJgBIgRgCIgSAAIAAABQAGAEAMgCIABAAQAFAAACACgAAvAYIgBAAIgFgFIgBgBQgKgIgPgFIgDgBIAAAAIgfgHIgBAAIAAAAIgDgBIAAAAIABgBIADAAIAFAAIACAAIAAAAIAlAFIAEAAIgBAAQgLgFgNgDIgKgBIgCAAIgPgCIgBAAIgCAAIgGgBIgBAAIgGgBIAAAAIgFAAIgBAAIgBAAIgFgBIAAAAIgBABIgCAAIgDgBIAAAAIgGgDQASgEASABIAMABIAIgCIgFgCIgBAAIgBAAIgMgFIgDAAIgUgHIgBAAIgCgBIgBAAIgBAAIAAAAIgCgBIABgBIABAAIAFgBIABAAIANABIAGAAIADAAIAAAAIABAAIAEgBIAAABIABAAIABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQgBgBAAgBIgFgCIgFgBIgBAAIgCgBIAAAAIgDgBIAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABABIAAgBIACgBIADgBIABAAIAIABIAAABIASADIABAAIAJABIABAAIAIADIABAAIAJAEIAAABIATASIABAAIABABIABABIAFAFIAAABIAAABIABAAIABAAIAEAEIACADIABABIAAABIAAABIABABIgBABIgBABIgBABIAAABIgBABIAAACIgBABIgBAAIgCABIgBADIgBABIAAABIgEAEIgBABIAAAAIgBADIgBACIgBAAIgBAAgAgPgmIACADQAZAPATgCQgUgMgZgFIgBABg");
	this.shape_30.setTransform(18.9,5.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9771C").s().p("AgIAGIgNgHIgDAAIACgEQAXAAAXAEIAAADQgNgCgNABIAAAAIgCAAIgBABQAAABgBAAQAAABAAAAQAAABAAAAQABABAAAAIgDAAg");
	this.shape_31.setTransform(16.4,10.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("AgTAiQgDgCgGAAQgLACgHgFIAAAAQAJgBAJAAIASADQAIAAAGACQgGACgIAAIgJgBgAACAAIgBAAIgBAAIgEAAIgCAAIgCAAIAAgFIAFABIABAAIACAAIAHABIAMABIADABIAIABIAPAFIgEABIgngGgAABgdIgBgDIAAgCQAaAGAVALIgFAAQgSAAgXgMg");
	this.shape_32.setTransform(17.2,5.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgdAwIABAAIACgBQAPgCALADIgSACIgDACIgIABQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBgAANAxIgDAAIADgCQgDgDgFABIgBAAIgDgBQgXgEgYAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgTgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQALgDALABIALABIAIACIABAAIAJgBQgEgCgEAAIgDAAIAAAAIgGgCIgKgCIgBAAIAAgBIAAAAIgJAAIAAgBQgHgBgEgCQADgEAIABIACAAIAEAAIAKACIAEABIABAAQAhAIAfAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgJACIgCABIgCACIgIAFIAAACIAAABIAAADQgBAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAgAgjAdQAMACAMgDQgGgCgIgBIgSgCQgJgBgJABIAAABQAGAEAMgBIABAAQAFAAACACgAAqAUIgCgBQgKgJgPgFIgDgBIAAAAIgfgGIgBAAIgBgBIgDgBIAAAAIABgBIADAAIAGAAIAAAAIACAAIAmAGIADgBIgPgFIgIgCIgDAAIgLgBIgGgBIgDgBIgBAAIgFgBIgBAAIgBAAIgBAAIgHAAIAAAAIgGgBIgBgBIgFAAIgBAAIgBAAIgEgBIgBAAIgBABIgBAAIgDgBIgHgCQARgFAUACIALABIAIgDIgFgBIgBAAIgBgBIgLgEIgDgBIgVgGIgBAAIgCgBIgBAAIgBAAIAAAAIgDgCIABAAIABAAIAFgCIABAAIANABIAHAAIACAAIABAAIABAAIAEAAIAAAAIABAAIABAAQABAAAAgBQAAAAAAgBQABAAAAgBQgBgBAAAAIgFgCIgFgBIgBAAIgCgBIgBAAIgDgBIgBgCQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAABABIAAgBIACAAIADgBIABAAIAIAAIABAAIASAEIABAAIAJABIABAAIAIADIABAAIAJAEIAAAAIAUASIABABIABABIABAAIAFAFIAAABIAAABIABAAIAAABIAGAEIACACIAAABIABABIAAABIABACIgBABIgBABIgBABIAAABIAAABIgBACIgBABIgBAAIgCABIgBACIgBACIAAAAIgEAFIgBABIgBADIgBACIgBABIgBAAIgBAAIgFgFgAgPglIABACQAaAPATgCQgUgMgagFIAAACg");
	this.shape_33.setTransform(18.8,5.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("AgXAuIgNgIIgCAAIABgEQAZAAAWAEIADAAIABAAQAGAAADADIgDACIgKgBIAAAAQgMgDgOACIAAABIgDAAIgBAAQAAABgBAAQAAABAAABQAAAAAAABQABAAAAAAIgDAAgAgaAXIAAgBQgDgCgFAAQgMACgHgFIAAAAIATAAIAMAAIAEACIACAAQAIABAHABIgBACIAAAAIgKABIgOgBgAgFgLQgGgBgEABIABgGIAKABIARACQAOADANAFQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAgBIgBAAIgBAAIABAAIABAAIAAACIgpgIgAgEgpIgBgBIgBgCIABgBQAaAFAUAMIABAAIAMAIQgggGgagPg");
	this.shape_34.setTransform(17.7,6.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeAwIABAAIADAAIAAgBQAOgCAMADIgMgBIgBABQgDACgDAAIgCACIgJABQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBgAANAxIgDAAIADgCQgDgDgGABIgBAAIgDgBQgWgEgZAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgUgEIAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgEADAAQAMgDALABIALABIAJACIABAAIAIgBQgDgCgFAAIgCAAIgBAAIgGgCIgKgCIgBAAIAAgBIAAAAIgJAAIAAgBQgIgBgDgCQACgEAJABIACAAIAEAAIAKACIAEABIABAAQAiAIAgAJIAAABIAAABIABAAIAAABIABAAIACABIgCABIgDABIgJACIgCABIgCACIgIAFIAAACIAAABIAAADQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAIgBAAgAgkAcIAAABQANACALgCIAAAAIABgBQgHgCgIgBIgCAAIgEgCIgMAAIgTAAIAAABQAHAEAMgBIACgBQAEAAACACgAArAVIgCgBQgLgKgSgGIAAAAIglgHIgBgBIABgBQAEgBAGABIApAHIAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQgNgEgOgDIgRgCIgKgCIgBAAIgBAAIgOgBIAAgBQgFgBgHAAIAAAAIgBABIgCAAQgIABgDgEIAAAAQASgFAUACIALABIABAAQAGAAACgDIgHgCIgBAAIgOgFIgZgHIgBAAIAAAAIgDgBIAAgBIAGgCIABAAQAKACAKgBIAJAAIAAABIABAAQAEgBgBgEQgGgCgIgCIgFgBIAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAAAAIACgBQAFgCAIABIAAAAQANAEAQAAIAAABQAJADAKADIAAAAIAdAaIAAAAIAAABIAAAAQAGAEAEAFIACAEIgBAAIgBABIgBABIAAABIgCAEIgDACIgBABIgBACIgFAGIgCAGIgBABIgCABIgFgFgAgQglIABACIABAAQAaAPAgAGIgMgIIgBAAQgUgMgagFIgBACgAAZABIgBgBIABAAIABABg");
	this.shape_35.setTransform(18.7,5.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6600").s().p("AgRAuIgNgIIgCAAIACgEQAYAAAWAEQALAEgBABIgKgBQgNgDgNACIAAAAIgCABIgBAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAIgEAAgAgUAXIAAgBQgDgCgFAAQgMACgHgFIAAAAIATAAIASACQAIABAGABIAAACIgLABIgNgBgAAQgIIgQgDQgFgBgEABIABgGIAHABIACAAIAMACIAHAAQAOADANAFIgGABIgZgDgAABgpIgBgDIAAgBQAbAFAVAMIgFAAQgSAAgYgNg");
	this.shape_36.setTransform(17,6.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgeAwIABAAIADgBQAPgCALADIgNAAIgIAEIgJABQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBgAANAxIgDAAQABgBgLgEQgWgEgZAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgUgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQAMgDALABIALABIAJACIABAAIAIgBQgDgCgFAAIgCAAIgBAAIgGgCIgKgCIgBAAIAAgBIAAAAIgJAAIAAgBQgIgBgDgCQACgEAJABIACAAIAEAAIAKACIAEABIABAAQAiAIAgAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgKACIgCABIgBACIgJAFIAAACIAAABIAAADQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAIgBAAgAgkAcIAAABQANACALgCIABgBQgHgCgIgBIgSgCIgTAAIAAABQAHAEAMgBIACgBQAEAAACACgAArAVIgBgBQgMgKgSgGIAAAAIglgHIgBgBIABgBQAEgBAGABIAPADIAZADIAFgBQgNgEgOgDIgFgBIgMgBIgDgBIgHgBIgBAAIgBAAIgOgBIAAgBQgFgBgHAAIAAAAIgBABIgCAAQgIABgDgEIAAAAQASgFAUACQASABACgDIgHgCIgPgFIgZgHIgEgBQACgCAEgBQALACAKgBIAJAAIABABQAEgBgBgEQgGgCgIgCIgFgBIAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIACgBQAFgCAIABIAAAAQANAEAQAAIAAABQAJADALADIAAAAIAcAaIAAAAIAAABIABAAQAGAEAEAFIACAEIgCAAIAAABIgCABIAAABIgBAEIgDACIgBABIgCACIgFAGIgBAGIgBABIgDABIgFgFgAgQglIACACQAaAPAUgCQgVgMgagFIgBACg");
	this.shape_37.setTransform(18.6,5.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6600").s().p("AgRAuIgNgIIgDAAIACgEQAZAAAXAEQALAEgBABIgKgBQgOgDgNACIAAAAIgDABIgBAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAIgDAAgAgTAXIgBgBQgCgCgGAAQgNACgGgFIAAAAIATAAIASACQAIABAGABIgBACIgKABIgMgBgAARgIIgQgDQgGgBgDABIAAgGIAHABIACAAIAKABIAJABQAOADANAFIgGABIgYgDgAABgpIgBgDIAAgBQAbAFAVAMIgFAAQgRAAgZgNg");
	this.shape_38.setTransform(17,6.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgeAwIABAAIACgBQAQgCALADIgNAAIgIAEIgJABQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBgAAOAxIgEAAQACgBgMgEQgWgEgZAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgUgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQALgDALABIAMABIAJACIABAAIAIgBQgDgCgFAAIgCAAIgBAAIgGgCIgKgCIgBAAIAAgBIAAAAIgJAAIAAgBQgIgBgEgCQADgEAIABIADAAIADAAIALACIAEABIABAAQAjAIAfAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgKACIgCABIgBACIgIAFIAAACIAAABIgBADQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAgAgkAcIAAABQANACALgCIABgBQgHgCgIgBIgTgCIgSAAIAAABQAGAEAMgBIACgBQAFAAACACgAAsAVIgCgBQgMgKgRgGIAAAAIgmgHIgBgBIABgBQAEgBAGABIAPADIAZADIAFgBQgMgEgOgDIgJgBIgJgBIgEgBIgGgBIgBAAIgBAAIgOgBIAAgBQgFgBgHAAIgBAAIgBABIgBAAQgIABgDgEIAAAAQASgFAUACQASABACgDIgHgCIgPgFIgZgHIgFgBQADgCADgBQALACALgBIAJAAIABABQAEgBgBgEQgGgCgIgCIgFgBIAAgBQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIACgBQAFgCAIABIAAAAQANAEAQAAIABABQAIADALADIAAAAQANANAQANIAAAAIAAABIAAAAQAGAEAEAFIACAEIgBAAIgBABIgBABIAAABIgCAEIgDACIgBABIgBACIgFAGIgCAGIgBABIgCABIgFgFgAgQglIACACQAbAPATgCQgVgMgagFIgBACg");
	this.shape_39.setTransform(18.6,5.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AgSAuIgMgIIgCAAIABgEQAZAAAXAEQALAEgCABIgJgBQgOgDgNACIAAAAIgCABIgBAAQgBABAAAAQgBABAAABQAAAAABABQAAAAABAAIgFAAgAgUAXIAAgBQgDgCgGAAQgMACgGgFIAAAAIASAAIATACQAIABAGABIAAACIgLABIgNgBgAARgIIgRgDQgFgBgEABIABgGIAGABIADAAIAJABIAKABQAOADANAFIgFABIgZgDgAABgpIgBgDIAAgBQAbAFAWAMIgFAAQgSAAgZgNg");
	this.shape_40.setTransform(16.9,6.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgeAwIABAAIACgBQAQgCALADIgNAAIgIAEIgJABQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBgAAOAxIgEAAQACgBgLgEQgXgEgZAAIAAAAQACgEAFgBIABAAIAAAAIgHgDIgVgEIAAAAQgBgBAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAgEADAAQAMgDALABIAMABIAJACIABAAIAIgBQgDgCgFAAIgCAAIgBAAIgGgCIgLgCIAAAAIgBgBIAAAAIgIAAIAAgBQgIgBgEgCQADgEAIABIADAAIADAAIAKACIAFABIABAAQAjAIAgAJIAAABIAAABIABAAIAAABIABAAIACABIgCABIgDABIgJACIgCABIgCACIgIAFIAAACIAAABIgBADQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAgAglAcIABABQANACALgCIABgBQgHgCgIgBIgTgCIgTAAIAAABQAHAEAMgBIACgBQAEAAACACgAAsAVIgCgBQgLgKgSgGIAAAAIgmgHIgBgBIABgBQAEgBAGABIAPADIAaADIAFgBQgNgEgOgDIgJgBIgJgBIgEgBIgGgBIgBAAIgBAAIgOgBIgBgBQgEgBgHAAIgBAAIgBABIgBAAQgJABgDgEIAAAAQATgFAUACQASABACgDIgHgCIgPgFIgZgHIgFgBQADgCADgBQALACALgBIAJAAIABABQAEgBgBgEQgGgCgIgCIgGgBIAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIACgBQAGgCAIABIAAAAQANAEAQAAIABABQAIADALADIAAAAQAOANAPANIAAAAIAAABIABAAQAGAEAEAFIACAEIgCAAIAAABIgCABIAAABIgBAEIgDACIgBABIgCACIgFAGIgCAGIgBABIgCABIgFgFgAgQglIACACQAbAPATgCQgVgMgagFIgBACg");
	this.shape_41.setTransform(18.5,5.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6600").s().p("AgRAuIgNgIIgDAAIACgEQAZAAAXAEQALAEgBABIgKgBQgOgDgNACIAAAAIgDABIgBAAQAAABAAAAQgBABAAABQAAAAABABQAAAAAAAAIgDAAgAgUAXIgBgBQgCgCgGAAQgMACgHgFIAAAAQAKgBAJABIATACQAJABAFABIgBACIgKABIgNgBgAARgIIgQgDQgGgBgDABIAAgGIAGABIADAAIAKABIAJABQAPADAMAFIgFABIgZgDgAABgpIgBgDIAAgBQAcAFAUAMIgEAAQgSAAgZgNg");
	this.shape_42.setTransform(16.9,6.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgeAwIABAAIACgBQAPgCAMADIgOAAIgIAEIgIABQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAAOAxIgEAAQACgBgMgEQgXgEgZAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgUgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQALgDAMABIALABIAJACIABAAIAJgBQgEgCgEAAIgDAAIAAAAIgHgCIgKgCIgBAAIAAgBIAAAAIgJAAIAAgBQgIgBgEgCQADgEAJABIACAAIAEAAIAKACIAFABIABAAQAiAIAhAJIAAABIAAABIABAAIAAABIABAAIACABIgCABIgDABIgKACIgCABIgBACIgIAFIAAACIAAABIgBADQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAgAglAcIAAABQANACAMgCIAAgBQgGgCgJgBIgSgCQgKgBgJABIAAABQAGAEANgBIACgBQAEAAACACgAAsAVIgCgBQgMgKgRgGIAAAAIgmgHIgBgBIABgBQADgBAHABIAPADIAZADIAFgBQgMgEgPgDIgIgBIgKgBIgDgBIgHgBIAAAAIgCAAIgOgBIAAgBQgFgBgHAAIgBAAIgBABIgBAAQgIABgDgEIAAAAQASgFAUACQASABADgDIgIgCIgOgFIgagHIgFgBQADgCADgBQAMACAKgBIAKAAIAAABQAEgBAAgEQgGgCgJgCIgFgBIAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIACgBQAGgCAHABIAAAAQAOAEAQAAIAAABIAUAGIAAAAIAdAaIAAAAIAAABIABAAQAGAEAEAFIACAEIgCAAIAAABIgCABIAAABIgBAEIgDACIgBABIgCACIgFAGIgCAGIgBABIgCABIgFgFgAgQglIABACQAcAPATgCQgVgMgbgFIAAACg");
	this.shape_43.setTransform(18.5,5.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6600").s().p("AgSAuIgMgIIgDAAIACgEQAZAAAXAEQALAEgBABIgKgBQgOgDgNACIgBAAIgCABIgBAAQAAABgBAAQAAABAAABQAAAAAAABQABAAAAAAIgEAAgAgUAXIAAgBQgDgCgGAAQgMACgHgFIAAAAIATAAIATACQAJABAFABIAAACIgLABIgNgBgAARgIIgRgDQgFgBgEABIABgGIAGABIADAAIAKABIAJABQAOADANAFIgEABIgagDgAABgpIgBgDIAAgBQAcAFAVAMIgFAAQgSAAgZgNg");
	this.shape_44.setTransform(16.8,6.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgfAwIABAAIADgBQAPgCAMADIgOAAIgIAEIgJABQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBgAAOAxIgEAAQACgBgMgEQgXgEgZAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgVgEIAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgEADAAQAMgDALABIAMABIAJACIABAAIAJgBQgEgCgEAAIgDAAIAAAAIgHgCIgKgCIgBAAIAAgBIAAAAIgJAAIAAgBQgIgBgEgCQADgEAIABIADAAIADAAIALACIAEABIABAAQAkAIAgAJIAAABIAAABIABAAIAAABIABAAIACABIgCABIgDABIgJACIgCABIgCACIgIAFIAAACIAAABIgBADQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAgAglAcIAAABQANACAMgCIAAgBQgGgCgJgBIgTgCIgTAAIAAABQAHAEAMgBIADgBQAEAAACACgAAsAVIgCgBQgLgKgSgGIAAAAIgmgHIgCgBIACgBQADgBAHABIAPADIAaADIAFgBQgNgEgPgDIgIgBIgKgBIgDgBIgHgBIAAAAIgCAAIgOgBIAAgBQgFgBgHAAIgBAAIgBABIgBAAQgJABgDgEIAAAAQATgFAUACQASABADgDIgIgCIgPgFIgZgHIgFgBQADgCADgBQALACALgBIAKAAIAAABQAEgBAAgEQgGgCgJgCIgFgBIAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIACgBQAFgCAIABIAAAAQAOAEAQAAIABABQAIADALADIAAAAQAOANAPANIAAAAIAAABIABAAQAGAEAEAFIACAEIgBAAIgBABIgBABIAAABIgCAEIgDACIgBABIgCACIgFAGIgBAGIgBABIgDABIgFgFgAgQglIABACQAcAPATgCQgVgMgbgFIAAACg");
	this.shape_45.setTransform(18.5,5.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF6600").s().p("AgRAuIgOgIIgCAAIABgEQAaAAAXAEQALAEgBABIgKgBQgOgDgOACIAAAAIgCABIgBAAQAAABgBAAQAAABAAABQAAAAAAABQABAAAAAAIgDAAgAgUAXIgBgBQgCgCgGAAQgNACgGgFIAAAAQAJgBAKABIASACQAJABAGABIAAACIgLABIgNgBgAARgIIgQgDQgGgBgDABIAAgGIAGABIADAAIAKABIAKABQAOADANAFIgGABIgZgDgAABgpIgBgDIAAgBQAcAFAVAMIgFAAQgSAAgZgNg");
	this.shape_46.setTransform(16.8,6.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgfAwIABAAIADgBQAPgCAMADIgOAAIgIAEIgJABQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBgAAOAxIgEAAQACgBgMgEQgXgEgZAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgVgEIAAAAQgBgBAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAgEADAAQAMgDALABIAMABIAJACIABAAIAJgBQgEgCgEAAIgDAAIAAAAIgHgCIgKgCIgBAAIAAgBIAAAAIgJAAIAAgBQgJgBgDgCQACgEAJABIADAAIADAAIALACIAEABIABAAQAkAIAgAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgKACIgCABIgCACIgIAFIAAACIAAABIgBADQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAgAglAcIAAABQANACAMgCIAAgBQgGgCgJgBIgTgCQgJgBgKABIAAABQAHAEAMgBIADgBQAEAAACACgAAtAVIgCgBQgMgKgSgGIAAAAIgmgHIgCgBIACgBQADgBAHABIAPADIAaADIAFgBQgNgEgOgDIgJgBIgKgBIgEgBIgGgBIAAAAIgCAAIgOgBIAAgBQgFgBgIAAIAAAAIgBABIgCAAQgIABgDgEIAAAAQATgFAUACQASABADgDIgIgCIgPgFIgagHIgEgBQACgCAEgBQALACALgBIAKAAIAAABQAEgBAAgEQgGgCgJgCIgFgBIAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIACgBQAFgCAIABIAAAAQAOAEAQAAIABABIATAGIAAAAIAeAaIAAAAIAAABIAAAAQAHAEAEAFIACAEIgCAAIAAABIgCABIAAABIgBAEIgDACIgBABIgCACIgFAGIgCAGIgBABIgCABIgFgFgAgQglIABACQAcAPATgCQgVgMgbgFIAAACg");
	this.shape_47.setTransform(18.4,5.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF6600").s().p("AgSAuIgMgIIgEAAIACgEQAaAAAXAEQAMAEgCABIgKgBQgOgDgNACIgBAAIgCABIgBAAQAAABgBAAQAAABAAABQAAAAAAABQABAAAAAAIgEAAgAgUAXIgBgBQgCgCgGAAQgNACgGgFIAAAAIATAAIATACQAIABAGABIgBACIgKABIgNgBgAARgIIgRgDQgFgBgDABIAAgGIAGABIADAAIAKABIAJABQAPADANAFIgFABIgagDgAABgpIgBgDIAAgBQAcAFAWAMIgFAAQgTAAgZgNg");
	this.shape_48.setTransform(16.7,6.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgfAwIABAAIACgBQAQgCAMADIgOAAIgIAEIgJABQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBgAAOAxIgEAAQACgBgMgEQgXgEgaAAIAAAAQADgEAFgBIABAAIAAAAIgHgDIgVgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQAMgDALABIAMABIAJACIABAAIAJgBQgEgCgEAAIgDAAIAAAAIgHgCIgLgCIAAAAIgBgBIAAAAIgJAAIAAgBQgIgBgDgCQACgEAJABIACAAIAEAAIALACIAEABIABAAQAkAIAhAJIAAABIAAABIABAAIAAABIABAAIACABIgCABIgDABIgKACIgCABIgBACIgJAFIAAACIAAABIAAADQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAgAgmAcIABABQANACAMgCIAAgBQgGgCgJgBIgTgCIgTAAIAAABQAHAEAMgBIACgBQAEAAACACgAAtAVIgCgBQgMgKgSgGIAAAAIgmgHIgCgBIACgBQADgBAHABIAPADIAaADIAFgBQgNgEgOgDIgJgBIgKgBIgEgBIgGgBIAAAAIgCAAIgOgBIgBgBQgEgBgIAAIAAAAIgBABIgCAAQgIABgDgEIAAAAQASgFAVACQASABADgDIgIgCIgPgFIgagHIgEgBQACgCAEgBQALACALgBIAKAAIAAABQAEgBAAgEQgGgCgJgCIgGgBIAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADgBQAFgCAIABIAAAAQAOAEAQAAIABABQAJADALADIAAAAIAdAaIAAAAIAAABIABAAQAGAEAEAFIACAEIgBAAIgBABIgBABIAAABIgCAEIgDACIgBABIgCACIgFAGIgBAGIgBABIgDABIgFgFgAgQglIABACQAcAPAUgCQgWgMgbgFIAAACg");
	this.shape_49.setTransform(18.4,5.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF6600").s().p("AgSAuIgNgIIgDAAIACgEQAaAAAXAEQAMAEgCABIgKgBQgOgDgOACIAAAAIgCABIgBAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAIgEAAgAgVAXIAAgBQgDgCgFAAQgNACgHgFIAAAAIAUAAIASACQAJABAGABIAAACIgMABIgNgBgAARgIIgRgDQgFgBgEABIABgGIAHABIACAAIAKABIAJABQAPADANAFIgFABIgagDgAABgpIgBgDIAAgBQAcAFAWAMIgFAAQgTAAgZgNg");
	this.shape_50.setTransform(16.7,6.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgfAwIABAAIACgBQAQgCAMADIgNAAIgJAEIgJABQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBgAAOAxIgDAAQABgBgLgEQgYgEgaAAIAAAAQADgEAFgBIABAAIAAAAIgHgDIgVgEIgBAAQgBgBAAgBQAAAAgBgBQAAAAABgBQAAAAABgBQAAgEADAAQAMgDALABIAMABIAJACIABAAIAJgBQgEgCgEAAIgDAAIAAAAIgHgCIgLgCIAAAAIgBgBIAAAAIgJAAIAAgBQgIgBgEgCQADgEAJABIACAAIAEAAIALACIAEABIABAAQAkAIAhAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgKACIgDABIgBACIgIAFIAAACIAAABIgBADQgBAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAgAgmAcIABABQANACAMgCIABgBQgHgCgJgBIgTgCIgTAAIAAABQAHAEAMgBIACgBQAEAAACACgAAtAVIgBgBQgMgKgTgGIAAAAIgmgHIgCgBIACgBQADgBAHABIAPADIAaADIAGgBQgNgEgPgDIgJgBIgJgBIgEgBIgHgBIAAAAIgCAAIgOgBIgBgBQgEgBgIAAIAAAAIgBABIgCAAQgIABgDgEIAAAAQASgFAVACQATABACgDIgIgCIgPgFIgagHIgFgBQADgCAEgBQALACALgBIAKAAIAAABQAEgBAAgEQgGgCgJgCIgGgBIAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADgBQAFgCAIABIAAAAQAOAEARAAIAAABQAJADALADIAAAAIAeAaIAAAAIAAABIAAAAQAHAEAEAFIACAEIgCAAIAAABIgCABIAAABIgBAEIgDACIgBABIgCACIgFAGIgCAGIgBABIgCABIgGgFgAgQglIACACQAbAPAUgCQgVgMgcgFIAAACg");
	this.shape_51.setTransform(18.3,5.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF6600").s().p("AgSAuIgNgIIgDAAIACgEQAaAAAYAEQALAEgBABIgKgBQgOgDgOACIgBAAIgCABIgBAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAIgEAAgAgUAXIgBgBQgCgCgGAAQgNACgHgFIAAAAIAUAAIATACQAIABAGABIAAACIgMABIgMgBgAARgIIgRgDQgFgBgEABIABgGIAIABIABAAIAKABIAJABQAPADANAFIgEABIgbgDgAABgpIgBgDIAAgBQAdAFAVAMIgFAAQgSAAgagNg");
	this.shape_52.setTransform(16.6,6.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgfAwIABAAIACgBQAQgCAMADIgNAAIgJAEIgJABQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAAOAxIgDAAQABgBgLgEQgYgEgaAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgVgEIAAAAQgBgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQAMgDAMABIAMABIAJACIABAAIAJgBQgEgCgEAAIgDAAIgBAAIgGgCIgLgCIAAAAIgBgBIAAAAIgJAAIAAgBQgIgBgEgCQADgEAJABIACAAIAEAAIAKACIAFABIABAAQAkAIAhAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgKACIgCABIgCACIgIAFIAAACIAAABIgBADQgBAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAgAgmAcIABABQANACAMgCIABgBQgHgCgJgBIgTgCIgUAAIAAABQAHAEANgBIACgBQAEAAACACgAAuAVIgCgBQgMgKgTgGIAAAAIgngHIgBgBIABgBQAEgBAHABIAPADIAbADIAFgBQgNgEgPgDIgJgBIgJgBIgDgBIgIgBIgBAAIgBAAIgOgBIgBgBQgFgBgHAAIgBAAIgBABIgBAAQgJABgDgEIAAAAQATgFAVACQATABACgDIgIgCIgPgFIgagHIgFgBQADgCADgBQAMACALgBIAJAAIABABQAEgBAAgEIgPgEIgGgBIAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIACgBQAGgCAIABIAAAAQAOAEARAAIAAABQAJADALADIAAAAQAOANAQANIAAAAIAAABIABAAQAGAEAEAFIACAEIgBAAIgBABIgBABIAAABIgCAEIgDACIgBABIgCACIgFAGIgCAGIgBABIgCABIgFgFgAgQglIACACQAbAPAUgCQgVgMgcgFIAAACg");
	this.shape_53.setTransform(18.3,5.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF6600").s().p("AgSAuIgNgIIgDAAIACgEQAZAAAYAEQAMAEgCABIgKgBQgOgDgOACIAAAAIgCABIgBAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAIgEAAgAgVAXIAAgBQgDgCgGAAQgMACgHgFIAAAAIATAAIATACQAJABAHABIgBACIgMABIgNgBgAARgIIgRgDQgFgBgEABIAAgGIAJABIACAAIAJABIAKABQAOADAOAFIgGABIgagDgAACgpIgCgDIAAgBQAcAFAXAMIgFAAQgTAAgZgNg");
	this.shape_54.setTransform(16.6,6.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgfAwIABAAIACgBQAQgCAMADIgOAAIgJAEIgIABQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAAOAxIgEAAQACgBgMgEQgYgEgaAAIAAAAQADgEAGgBIABAAIAAAAIgIgDIgWgEIAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgEADAAQANgDALABIAMABIAJACIABAAIAKgBQgEgCgFAAIgDAAIAAAAIgHgCIgKgCIgBAAIAAgBIAAAAIgKAAIAAgBQgIgBgEgCQADgEAJABIACAAIAEAAIALACIAFABIABAAQAkAIAhAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgKACIgDABIgBACIgJAFIAAACIAAABIAAADQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAIgBAAgAgmAcIAAABQANACANgCIAAgBQgHgCgJgBIgTgCIgUAAIAAABQAIAEAMgBIADgBQAEAAACACgAAuAVIgCgBQgMgKgTgGIAAAAIgngHIgBgBIABgBQADgBAHABIAQADIAaADIAGgBQgOgEgOgDIgJgBIgKgBIgCgBIgJgBIAAAAIgCAAIgOgBIAAgBQgFgBgIAAIAAAAIgBABIgCAAQgJABgDgEIAAAAQATgFAVACQATABACgDIgHgCIgPgFIgbgHIgFgBQADgCAEgBQALACALgBIAKAAIAAABQAFgBgBgEIgPgEIgFgBIAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIACgBQAGgCAHABIAAAAQAOAEARAAIABABQAJADALADIAAAAQAOANAQANIAAAAIAAABIABAAQAGAEAEAFIACAEIgBAAIgBABIgBABIAAABIgCAEIgDACIgBABIgCACIgFAGIgCAGIgBABIgCABIgFgFgAgRglIACACQAcAPAUgCQgWgMgbgFIgBACg");
	this.shape_55.setTransform(18.3,5.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF6600").s().p("AgSAuIgNgIIgDAAIABgEQAaAAAZAEQALAEgBABIgKgBQgOgDgOACIgBAAIgCABIgBAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAIgEAAgAgVAXIgBgBQgCgCgGAAQgNACgHgFIAAAAQALgBAJABIAUACQAIABAGABIAAACIgMABIgNgBgAASgIIgRgDQgHgBgDABIABgGIAIABIABAAIAKABIAKABQAPADANAFIgFABIgagDgAABgpIgBgDIAAgBQAcAFAWAMIgEAAQgTAAgagNg");
	this.shape_56.setTransform(16.5,6.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgfAwIABAAIACgBQAQgCAMADIgOAAIgJAEIgIABQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAAOAxIgEAAQACgBgMgEQgYgEgaAAIAAAAQADgEAFgBIABAAIAAAAIgHgDIgWgEIAAAAQgBgBAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAgEADAAQAMgDAMABIAMABIAJACIABAAIAKgBQgEgCgFAAIgDAAIAAAAIgHgCIgLgCIAAAAIgBgBIAAAAIgJAAIAAgBQgIgBgEgCQADgEAJABIACAAIAEAAIALACIAFABIABAAQAkAIAiAJIAAABIAAABIABAAIAAABIABAAIACABIgCABIgDABIgKACIgCABIgCACIgIAFIAAACIAAABIgBADQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAgAgnAcIABABQANACANgCIAAgBQgHgCgJgBIgTgCQgKgBgKABIAAABQAHAEANgBIACgBQAEAAACACgAAuAVIgCgBQgMgKgTgGIAAAAIgngHIgBgBIABgBQADgBAHABIAQADIAbADIAFgBQgNgEgPgDIgJgBIgKgBIgCgBIgJgBIAAAAIgCAAIgOgBIgBgBQgEgBgIAAIgBAAIgBABIgBAAQgJABgDgEIAAAAQATgFAVACQATABACgDIgHgCIgPgFIgbgHIgFgBQADgCADgBQAMACALgBIAKAAIAAABQAFgBgBgEIgPgEIgGgBIAAgBQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIADgBQAGgCAHABIAAAAQAOAEARAAIABABIAUAGIAAAAIAfAaIAAAAIAAABIAAAAQAGAEAFAFIACAEIgCAAIAAABIgCABIAAABIgCAEIgDACIgBABIgBACIgGAGIgBAGIgBABIgDABIgFgFgAgRglIACACQAcAPAUgCQgWgMgbgFIgBACg");
	this.shape_57.setTransform(18.2,5.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF6600").s().p("AgSAuIgNgIIgDAAIACgEQAZAAAYAEQANAEgCABIgLgBQgOgDgNACIgBAAIgCABIgBAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAIgEAAgAgVAXIAAgBQgDgCgGAAQgMACgIgFIAAAAIAUAAIAUACQAIABAHABIgBACIgMABIgNgBgAARgIIgRgDQgFgBgEABIAAgGIAIABIABAAIABAAIAGABIAOABQAPADAOAFIgGABIgbgDgAABgpIgBgDIAAgBQAdAFAWAMIgFAAQgTAAgagNg");
	this.shape_58.setTransform(16.5,6.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgfAwIABAAIACgBQAQgCAMADIgOAAIgJAEIgIABQgBgBAAAAQgBgBAAAAQAAgBABgBQAAAAABgBgAAPAxIgEAAQACgBgNgEQgYgEgaAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgVgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQAMgDAMABIAMABIAJACIABAAIAKgBQgEgCgFAAIgDAAIAAAAIgHgCIgLgCIAAAAIgBgBIAAAAIgJAAIAAgBQgJgBgDgCQACgEAKABIACAAIAEAAIALACIAFABIABAAQAkAIAiAJIAAABIAAABIABAAIAAABIABAAIACABIgCABIgDABIgKACIgCABIgCACIgIAFIAAACIAAABIgBADQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAgAgnAcIABABQANACANgCIAAgBQgHgCgJgBIgTgCIgUAAIAAABQAHAEANgBIACgBQAEAAACACgAAuAVIgCgBQgMgKgSgGIAAAAIgogHIgBgBIABgBQADgBAHABIAQADIAbADIAFgBQgNgEgPgDIgOgCIgFAAIgBgBIgCAAIgIgBIAAAAIgCAAIgOgBIgBgBQgFgBgHAAIgBAAIgBABIgBAAQgJABgDgEIAAAAQATgFAVACQATABADgDIgIgCIgPgFIgbgHIgFgBQACgCAEgBQAMACALgBIAKAAIAAABQAFgBgBgEIgPgEIgGgBIAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADgBQAGgCAHABIAAAAQAPAEARAAIAAABQAJADAMADIAAAAQAOANAQANIAAAAIAAABIABAAQAGAEAEAFIACAEIgBAAIgBABIgBABIAAABIgCAEIgDACIgBABIgCACIgFAGIgCAGIgBABIgCABIgGgFgAgRglIACACQAdAPAUgCQgWgMgcgFIgBACg");
	this.shape_59.setTransform(18.2,5.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF6600").s().p("AgSAuIgOgIIgCAAIABgEQAaAAAZAEQAMAEgCABIgKgBQgOgDgPACIAAAAIgDABIgBAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAIgDAAgAgVAXIgBgBQgCgCgGAAQgNACgHgFIAAAAQAKgBAKABIATACQAKABAFABIAAACIgMABIgNgBgAASgIIgRgDQgHgBgDABIABgGIAHABIABAAIACAAIAEABIAPABQAPADANAFIgEABIgbgDgAACgpIgCgDIAAgBQAdAFAWAMIgFAAQgTAAgZgNg");
	this.shape_60.setTransform(16.4,6.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AggAwIABAAIACgBQARgCAMADIgOAAIgJAEIgJABQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBgAAPAxIgEAAQABgBgMgEQgYgEgaAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgVgEIgBAAQgBgBAAgBQAAAAgBgBQAAAAABgBQAAAAABgBQAAgEADAAQAMgDAMABIAMABIAJACIABAAIAKgBQgEgCgFAAIgDAAIAAAAIgHgCIgLgCIAAAAIgBgBIAAAAIgJAAIAAgBQgJgBgDgCQACgEAJABIADAAIAEAAIALACIAEABIABAAQAlAIAiAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgLACIgCABIgBACIgJAFIAAACIAAABIgBADQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAIAAAAgAgnAcIABABQANACANgCIAAgBQgHgCgJgBIgTgCQgKgBgKABIAAABQAHAEANgBIACgBQAEAAACACgAAvAVIgCgBQgNgKgSgGIAAAAIgogHIgCgBIACgBQADgBAHABIAQADIAbADIAFgBQgNgEgPgDIgOgCIgFAAIgBgBIgCAAIgIgBIAAAAIgCAAIgOgBIgBgBQgFgBgIAAIAAAAIgBABIgCAAQgIABgDgEIAAAAQATgFAVACQATABADgDIgIgCIgQgFIgbgHIgEgBQACgCAEgBQAMACALgBIAKAAIAAABQAFgBgBgEIgPgEIgGgBIAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADgBQAFgCAIABIAAAAQAPAEARAAIAAABIAVAGIAAAAIAeAaIAAAAIAAABIABAAQAGAEAFAFIACAEIgCAAIAAABIgCABIAAABIgCAEIgDACIgBABIgCACIgFAGIgBAGIgBABIgDABIgFgFgAgRglIACACQAdAPAUgCQgWgMgcgFIgBACg");
	this.shape_61.setTransform(18.1,5.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF6600").s().p("AgTAuIgMgIIgEAAIACgEQAbAAAYAEQAMAEgCABIgKgBQgPgDgOACIAAAAIgCABIgCAAQAAABAAAAQgBABAAABQAAAAABABQAAAAAAAAIgEAAgAgVAXIAAgBQgDgCgGAAQgNACgIgFIAAAAIAVAAIATACQAJABAHABIgBACIgMABIgNgBgAASgIIgSgDQgFgBgEABIAAgGIAIABIABAAIABAAIAGABIAPABQAPADANAFIgGABIgagDgAABgpIgBgDIAAgBQAdAFAXAMIgGAAQgTAAgagNg");
	this.shape_62.setTransform(16.4,6.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AggAwIABAAIACgBQARgCAMADIgOAAIgJAEIgJABQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAAPAxIgEAAQABgBgLgEQgZgEgaAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgWgEIAAAAQgBgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQANgDAMABIAMABIAJACIABAAIAKgBQgEgCgFAAIgDAAIAAAAIgHgCIgLgCIAAAAIgBgBIAAAAIgJAAIAAgBQgJgBgEgCQADgEAJABIADAAIAEAAIAKACIAFABIABAAQAlAIAjAJIAAABIAAABIABAAIAAABIABAAIACABIgCABIgDABIgKACIgDABIgBACIgJAFIAAACIAAABIgBADQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAIAAAAgAgnAcIABABQANACANgCIAAgBQgHgCgJgBIgTgCIgVAAIAAABQAIAEANgBIACgBQAEAAACACgAAvAVIgCgBQgMgKgTgGIAAAAIgogHIgCgBIACgBQADgBAHABIAQADIAbADIAGgBQgOgEgPgDIgOgCIgFAAIgBgBIgCAAIgIgBIAAAAIgCAAIgOgBIgBgBQgFgBgIAAIAAAAIgBABIgCAAQgJABgDgEIAAAAQAUgFAVACQATABADgDIgIgCIgQgFIgbgHIgFgBQADgCAEgBQAMACALgBIAKAAIAAABQAFgBgBgEQgGgCgJgCIgGgBIAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIACgBQAGgCAIABIAAAAQAPAEARAAIAAABQAKADALADIAAAAIAfAaIAAAAIAAABIAAAAQAHAEAEAFIACAEIgBAAIgBABIgBABIAAABIgCAEIgDACIgBABIgCACIgGAGIgBAGIgBABIgDABIgFgFgAgRglIACACQAdAPAUgCQgWgMgcgFIgBACg");
	this.shape_63.setTransform(18.1,5.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF6600").s().p("AgTAuIgNgIIgDAAIACgEQAaAAAZAEQAMAEgBABIgLgBQgPgDgOACIAAAAIgDABIAAAAQgBABAAAAQgBABAAABQAAAAABABQAAAAABAAIgFAAgAgWAXIAAgBQgDgCgGAAQgNACgGgFIAAAAQAJgBAKABIAUACQAJABAGABIAAACIgMABIgOgBgAASgIIgRgDQgHgBgDABIABgGIAHABIABAAIACAAIAEABIAPABQAQADANAFIgFABIgbgDgAACgpIgCgDIAAgBQAeAFAVAMIgEAAQgTAAgagNg");
	this.shape_64.setTransform(16.3,6.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AggAwIABAAIACgBQARgCAMADIgOAAIgJAEIgJABQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAAPAxIgEAAQACgBgNgEQgYgEgbAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgVgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQAMgDAMABIAMABIAKACIABAAIAJgBQgEgCgEAAIgDAAIgBAAIgHgCIgLgCIAAAAIgBgBIAAAAIgJAAIAAgBQgJgBgDgCQACgEAJABIADAAIAEAAIALACIAFABIABAAQAlAIAiAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgLACIgCABIgBACIgJAFIAAACIAAABIgBADQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAgAgoAcIABABQAOACAMgCIABgBQgHgCgKgBIgTgCQgKgBgKABIAAABQAHAEANgBIACgBQAEAAACACgAAvAVIgCgBQgNgKgSgGIAAAAIgpgHIgBgBIABgBQAEgBAHABIAQADIAbADIAFgBQgNgEgPgDIgOgCIgFAAIgCgBIgBAAIgIgBIgBAAIgCAAIgOgBIgBgBQgFgBgIAAIAAAAIgBABIgCAAQgIABgDgEIAAAAQATgFAVACQAUABACgDIgIgCIgPgFIgcgHIgEgBQACgCAEgBQAMACALgBIAKAAIABABQAEgBAAgEQgHgCgJgCIgGgBIAAgBQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIADgBQAGgCAIABIAAAAQAOAEASAAIAAABIAVAGIAAAAQAOANARANIAAAAIAAABIAAAAQAHAEAEAFIACAEIgBAAIgBABIgBABIAAABIgCAEIgDACIgBABIgCACIgGAGIgBAGIgBABIgDABIgFgFgAgRglIACACQAdAPAUgCQgWgMgdgFIAAACg");
	this.shape_65.setTransform(18.1,5.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF6600").s().p("AgTAuIgNgIIgDAAIACgEQAaAAAZAEQAMAEgBABIgLgBQgPgDgOACIAAAAIgDAAIAAABQgBABAAAAQgBABAAABQAAAAABABQAAAAABABIgFgBgAgWAWQgWAAgHgEIAAgBIAUgBQARACABABQAMAAAFADQgGABgIAAIgMgBgAABgLQgHgBgDABIABgGIAHABIABAAIACABIAEAAIAPABQAQADANAFQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBgBIAAABIgtgHgAACgpIgCgCIAAgDQAdAGAXALIgFABQgTAAgagNg");
	this.shape_66.setTransform(16.3,6.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AggAwIABAAIACgBQARgCAMADIgOAAIgJAEIgJABQgBgBAAAAQgBgBAAAAQAAgBABgBQAAAAABgBgAAPAxIgEAAQACgBgNgEQgYgEgbAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgWgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQANgDAMABIAMABIAKACIABAAIAJgBQgEgCgEAAIgDAAIgBAAIgHgCIgLgCIAAAAIgBgBIAAAAIgJAAIAAgBQgJgBgEgCQADgEAJABIADAAIAEAAIALACIAFABIABAAQAlAIAjAJIAAABIAAABIABAAIAAABIABAAIACABIgCABIgDABIgKACIgDABIgBACIgJAFIAAACIAAABIgBADQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAgAhFAXIAAABQAIAEAWABQAOACANgDQgHgCgLgBQgCgBgQgBIgHgBIgOABgAAvAVIgCgBQgMgKgTgGIAAAAIgpgHIgBgBIABgBQAEgBAHABIAsAHIAAgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQgOgEgPgDIgOgCIgFAAIgCgBIgCAAIgHgBIgBAAIgCAAIgOgBIgBgBQgFgBgIAAIAAAAIgBABIgCAAQgJABgDgEIAAAAQAUgFAVACQAUABACgDIgIgCIgPgFIgcgHIgFgBQADgCAEgBIABAAQALACALgBIAKAAIAAABQAFgBAAgEQgHgCgJgCIgGgBIAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAAAIADgBQAGgCAIABIAAAAQAOAEASAAIAAABQAKADALADIAAAAQAPANAQANIAAAAIAAABIABAAQAHAEAEAFIACAEIgBAAIgBABIgCABIAAABIgBAEIgEACIgBABIgCACIgFAGIgCAGIgBABIgCABIgGgFgAgRglIACACQAdAPAUgCQgWgMgdgFIAAACg");
	this.shape_67.setTransform(18.1,5.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF6600").s().p("AgTAuIgOgIIgDAAIACgEQAcAAAYAEQAMAEgCABIgKgBQgPgDgOACIAAAAIgCAAIgCABQAAABgBAAQAAABAAABQAAAAAAABQABAAAAABIgEgBgAgVAWQgXAAgIgEIAAgBIAVAAIATACQAKAAAHACQgHACgIAAIgLgBgAAAgLQgFgBgEABIAAgGIAIABIABAAIABABIAGAAIAPABQAPADAOAFQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBgBIAAABIgugHgAABgpIgBgCIAAgCQAdAFAYALIgGABQgTAAgbgNg");
	this.shape_68.setTransform(16.4,6.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AghAwIACAAIACgBQARgCAMADIgOAAIgJAEIgKABQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBgAAPAxIgEAAQACgBgNgEQgYgEgcAAIAAAAQADgEAGgBIABAAIAAAAIgIgDIgWgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQAMgDAMABIANABIAKACIABAAIAJgBQgEgCgEAAIgDAAIgBAAIgHgCIgLgCIgBAAIAAgBIAAAAIgKAAIAAgBQgJgBgDgCQACgEAKABIACAAIAEAAIALACIAGABIABAAQAlAIAjAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgLACIgCABIgCACIgJAFIAAACIAAABIgBADQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAgAhFAXIAAABQAHAEAXABQAOACANgDQgHgCgLgBIgTgCIgGgBIgOABgAAwAVIgCgBQgNgKgTgGIAAAAIgpgHIgBgBIABgBQAEgBAHABIAtAHIAAgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQgOgEgPgDIgOgCIgFAAIgCgBIgBAAIgIgBIgBAAIgCAAIgPgBIAAgBQgFgBgIAAIgBAAIgBABIgBAAQgJABgDgEIAAAAQATgFAWACQAUABACgDIgIgCIgQgFIgbgHIgFgBQACgCAEgBIABAAQALACAMgBIAKAAIAAABQAFgBAAgEQgHgCgJgCIgGgBIAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAIACgBQAHgCAIABIAAAAQAOAEASAAIAAABQAKADALADIAAAAIAgAaIAAAAIAAABIAAAAQAHAEAEAFIACAEIgBAAIgBABIgBABIAAABIgCAEIgDACIgBABIgCACIgGAGIgBAGIgBABIgDABIgFgFgAgRglIACACQAdAPAVgCQgXgMgdgFIAAACg");
	this.shape_69.setTransform(18.1,5.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF6600").s().p("AgTAuIgNgIIgDAAIABgEQAbAAAZAEQAMAEgBABIgLgBQgOgDgQACIAAAAIgCABIgBAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAIgEAAgAgWAXQgWgBgHgFIAAAAIAUgBQARACABABQAMABAFACQgHABgIAAIgLAAgAABgLQgHgBgDABIAAgGIAIABIABAAIACAAIAEABIAPACQAQADAOAEQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIAAABIgugIgAACgpIgCgDIAAgCQAeAGAXALIgGABQgTAAgagNg");
	this.shape_70.setTransform(16.4,6.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AghAwIABAAIACgBQASgCAMADIgOAAIgJAEIgKABQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBgAAPAxIgEAAQACgBgNgEQgZgEgbAAIAAAAQADgEAGgBIABAAIAAAAIgIgDIgWgEIgBAAQgBgBAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAgEAEAAQAMgDAMABIANABIAKACIABAAIAJgBQgEgCgFAAIgDAAIAAAAIgHgCIgLgCIgBAAIAAgBIAAAAIgKAAIAAgBQgJgBgDgCQACgEAKABIACAAIAEAAIALACIAFABIABAAQAmAIAjAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgLACIgCABIgCACIgJAFIAAACIAAABIAAADQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAgAhFAXIAAABQAHAEAWABQAOACAOgDQgHgCgMgBQgBgBgRgBIgGgBIgOABgAAwAVIgCgBQgNgKgTgGIAAAAIgpgHIgCgBIACgBQAEgBAHABIAtAHIAAgBQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAQgOgEgPgDIgOgCIgFAAIgCgBIgCAAIgIgBIAAAAIgCAAIgPgBIAAgBQgFgBgIAAIgBAAIgBABIgBAAQgJABgDgEIAAAAQATgFAWACQAUABACgDIgIgCIgQgFIgbgHIgFgBQACgCAEgBIABAAQALACAMgBIAKAAIAAABQAFgBgBgEQgGgCgJgCIgGgBIAAgBQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAAAAIACgBQAGgCAJABIAAAAQAOAEASAAIAAABQAKADAMADIAAAAQAOANARANIAAAAIAAABIAAAAQAHAEAFAFIACAEIgCAAIAAABIgCABIAAABIgCAEIgDACIgBABIgCACIgGAGIgBAGIgBABIgDABIgFgFgAgRglIACACQAdAPAVgCQgXgMgdgFIAAACg");
	this.shape_71.setTransform(18.2,5.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF6600").s().p("AgTAuIgNgIIgDAAIABgEQAbAAAZAEQANAEgCABIgLgBQgOgDgPACIgBAAIgCABIgBAAQAAABgBAAQAAABAAABQAAAAAAABQABAAAAABIgEgBgAgWAXQgWgBgIgFIAAAAIAVgBQARACABABQAMABAGACQgHABgJAAIgLAAgAABgLQgGgBgEABIAAgGIAIABIABAAIACABIAFAAIAPACQAPADAOAEQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIAAABIgugIgAACgpIgCgDIAAgCQAeAGAXALIgFABQgUAAgagNg");
	this.shape_72.setTransform(16.4,6.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AghAwIABAAIADgBQARgCAMADIgOAAIgJAEIgKABQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBgAAPAxIgEAAQACgBgNgEQgZgEgbAAIAAAAQADgEAGgBIABAAIAAAAIgIgDIgXgEIAAAAQgBgBAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAgEADAAQANgDAMABIANABIAKACIABAAIAJgBQgEgCgFAAIgDAAIAAAAIgHgCIgLgCIgBAAIAAgBIAAAAIgKAAIAAgBQgJgBgEgCQADgEAKABIACAAIAEAAIALACIAFABIABAAQAmAIAjAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgLACIgCABIgCACIgJAFIAAACIAAABIAAADQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAgAhGAXIAAABQAIAEAWABQAOACAOgDQgHgCgMgBQgBgBgRgBIgGgBIgPABgAAwAVIgCgBQgNgKgTgGIAAAAIgpgHIgCgBIACgBQAEgBAHABIAtAHIAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQgOgEgPgDIgOgCIgFAAIgCgBIgCAAIgIgBIAAAAIgCAAIgPgBIAAgBQgFgBgIAAIgBAAIgBABIgBAAQgKABgDgEIAAAAQAUgFAWACQAUABACgDIgIgCIgQgFIgbgHIgGgBQADgCAEgBIABAAQALACAMgBIAKAAIAAABQAFgBgBgEQgGgCgJgCIgGgBIAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAAAAIACgBQAGgCAJABIAAAAQAOAEASAAIAAABQAKADAMADIAAAAQAOANARANIAAAAIAAABIABAAQAGAEAFAFIACAEIgCAAIAAABIgCABIAAABIgCAEIgDACIgBABIgCACIgFAGIgCAGIgBABIgDABIgFgFgAgRglIACACQAdAPAVgCQgXgMgdgFIAAACg");
	this.shape_73.setTransform(18.2,6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF6600").s().p("AgTAuIgOgIIgDAAIACgEQAbAAAZAEQANAEgCABIgLgBQgOgDgPACIAAAAIgDABIgBAAQAAABgBAAQAAABAAABQAAAAAAABQABAAAAAAIgEAAgAgWAWQgWAAgIgEIAAgBIAVAAQARABABABQAMABAGABQgHACgJAAIgLgBgAABgLQgGgBgEABIAAgGIAIABIABAAIACAAIAFABIAPABQAPAEAOAEQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAgBIAAABIgugHgAACgpIgCgCIAAgCQAeAFAXAMIgFAAQgUAAgagNg");
	this.shape_74.setTransform(16.5,6.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AghAwIABAAIACgBQASgCAMADIgOAAIgJAEIgKABQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBgAAPAxIgEAAQACgBgNgEQgZgEgbAAIAAAAQACgEAHgBIABAAIAAAAIgJgDIgWgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQANgDAMABIANABIAKACIABAAIAJgBQgEgCgFAAIgDAAIAAAAIgHgCIgLgCIgBAAIgBgBIAAAAIgJAAIAAgBQgJgBgEgCQADgEAJABIADAAIAEAAIALACIAFABIABAAQAmAIAjAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgLACIgCABIgCACIgJAFIAAACIAAABIAAADQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAgAhGAXIAAABQAIAEAWABQAOACAOgDQgHgCgMgBQgBgBgRgBIgHgBIgOABgAAwAVIgCgBQgNgKgTgGIAAAAIgpgHIgCgBIACgBQAEgBAHABIAtAHIAAgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQgOgEgPgDIgOgCIgFAAIgCgBIgCAAIgIgBIAAAAIgCAAIgPgBIgBgBQgFgBgIAAIAAAAIgBABIgCAAQgJABgDgEIAAAAQAUgFAWACQAUABACgDIgIgCIgQgFIgcgHIgFgBQADgCAEgBIABAAQALACAMgBIAKAAIAAABQAFgBgBgEQgGgCgJgCIgGgBIAAgBQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAAAAIACgBQAGgCAJABIAAAAQAOAEASAAIAAABQAKADAMADIAAAAIAfAaIAAAAIAAABIABAAQAHAEAEAFIACAEIgBAAIgBABIgCABIAAABIgBAEIgEACIgBABIgCACIgFAGIgCAGIgBABIgCABIgGgFgAgRglIACACQAdAPAVgCQgXgMgdgFIAAACg");
	this.shape_75.setTransform(18.3,6.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF6600").s().p("AgTAuIgOgIIgDAAIACgEQAbAAAaAEQAMAEgCABIgKgBQgQgDgOACIgBAAIgCABIgBAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAIgEAAgAgWAXQgXgBgHgEIAAgBIAVAAIASACQALABAGABQgHACgIAAIgLAAgAAAgLQgGgBgDABIAAgGIAHABIADAAIALABIAKABQAQADAOAFQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBgBIAAACIgvgIgAABgpIgBgDIAAgBQAeAFAXAMIgFAAQgUAAgbgNg");
	this.shape_76.setTransform(16.5,6.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AghAwIABAAIADgBQAQgCANADIgPAAIgJAEIgJABQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAAPAxIgEAAQACgBgMgEQgagEgbAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgWgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQANgDAMABIAMABIAKACIABAAIAKgBQgEgCgFAAIgDAAIAAAAIgIgCIgLgCIAAAAIgBgBIAAAAIgJAAIAAgBQgJgBgEgCQADgEAJABIADAAIAEAAIALACIAFABIABAAQAmAIAkAJIAAABIAAABIABAAIAAABIABAAIACABIgCABIgDABIgLACIgCABIgCACIgIAFIAAACIAAABIgBADQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAgAhGAXIAAABQAHAEAXABQAOACANgDQgHgCgLgBIgSgCIgHgBIgOABgAAwAVIgCgBQgMgKgUgGIAAAAIgpgHIgCgBIACgBQADgBAHABIAuAHIAAgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQgOgEgQgDIgJgBIgLgBIgEgBIgHgBIAAAAIgCAAIgPgBIgBgBQgFgBgIAAIAAAAIgBABIgCAAQgJABgDgEIAAAAQAUgFAWACQAUABACgDIgIgCIgQgFIgcgHIgFgBQADgCAEgBIABAAQALACAMgBIAKAAIAAABQAFgBgBgEQgGgCgKgCIgGgBIAAgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAAAAIACgBQAGgCAIABIAAAAQAPAEASAAIABABQAJADAMADIAAAAQAPANARANIAAAAIAAABIAAAAQAHAEAEAFIACAEIgBAAIgBABIgBABIAAABIgCAEIgDACIgBABIgCACIgGAGIgBAGIgCABIgCABIgGgFgAgSglIACACQAeAPAVgCQgXgMgdgFIgBACg");
	this.shape_77.setTransform(18.3,6.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF6600").s().p("AgTAuIgOgIIgDAAIACgEQAbAAAaAEQAMAEgCABIgKgBQgQgDgOACIAAAAIgDAAIgBABQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABIgEgBgAgWAWQgXAAgHgEIAAgBIAUgBIATADQALAAAGADQgHABgIAAIgLgBgAAAgLQgGgBgDABIAAgGIAHABIADABIALABIAKABQAQACAOAFQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBgBIAAABIgvgHgAABgpIgBgCIAAgDQAeAGAXALIgFABQgUAAgbgNg");
	this.shape_78.setTransform(16.6,6.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AghAwIABAAIACgBQARgCANADIgPAAIgJAEIgJABQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAAPAxIgEAAQACgBgMgEQgagEgbAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgWgEIgBAAQgBgBAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAgEAEAAQAMgDANABIAMABIAKACIABAAIAKgBQgEgCgFAAIgDAAIAAAAIgIgCIgLgCIAAAAIgBgBIAAAAIgKAAIAAgBQgJgBgDgCQACgEAKABIADAAIAEAAIALACIAFABIABAAQAmAIAkAJIAAABIAAABIABAAIAAABIABAAIADABIgDABIgDABIgLACIgCABIgCACIgIAFIAAACIAAABIgBADQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAgAhGAXIAAABQAHAEAXABQAOACANgDQgHgCgLgBIgTgCIgGgBIgOABgAAwAVIgBgBQgNgKgUgGIAAAAIgpgHIgCgBIACgBQADgBAHABIAuAHIAAgBQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQgOgEgQgDIgJgBIgLgBIgEgBIgHgBIAAAAIgCAAIgPgBIgBgBQgFgBgIAAIgBAAIgBABIgBAAQgJABgDgEIAAAAQATgFAXACQAUABACgDIgIgCIgQgFIgcgHIgFgBQACgCAEgBIABAAQAMACAMgBIAKAAIAAABQAFgBgBgEQgGgCgKgCIgGgBIAAgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAAAAIACgBQAGgCAIABIAAAAQAPAEASAAIABABQAJADAMADIAAAAIAgAaIAAAAIAAABIAAAAQAHAEAFAFIACAEIgCAAIAAABIgCABIAAABIgCAEIgDACIgBABIgCACIgGAGIgBAGIgBABIgDABIgGgFgAgSglIACACQAeAPAVgCQgXgMgdgFIgBACg");
	this.shape_79.setTransform(18.4,6.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF6600").s().p("AgTAuIgOgIIgDAAIACgEQAcAAAZAEQAMAEgCABIgKgBQgQgDgOACIAAAAIgDAAIgBABQAAABgBAAQAAABAAABQAAAAAAABQABAAAAABIgEgBgAgWAWQgXAAgIgEIAAgBIAVAAIATACQAMAAAFACQgGACgIAAIgMgBgAAAgLQgFgBgEABIABgGIAHABIACABIALABIAKAAQAQADAOAFQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBgBIAAABIgvgHgAABgpIgBgCIAAgCQAfAFAXALIgGABQgTAAgcgNg");
	this.shape_80.setTransform(16.6,7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AghAwIABAAIADgBQAQgCANADIgPAAIgJAEIgJABQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAAPAxIgEAAQACgBgMgEQgagEgbAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgXgEIAAAAQgBgBAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAgEADAAQANgDANABIAMABIAKACIABAAIAKgBQgEgCgFAAIgDAAIAAAAIgIgCIgLgCIAAAAIgBgBIAAAAIgKAAIAAgBQgJgBgEgCQADgEAKABIADAAIAEAAIALACIAFABIABAAQAmAIAkAJIAAABIAAABIABAAIAAABIABAAIADABIgDABIgDABIgLACIgCABIgCACIgIAFIAAACIAAABIgBADQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAgAhHAXIAAABQAIAEAXABQAOACANgDQgHgCgLgBIgTgCIgGgBIgPABgAAwAVIgBgBQgNgKgUgGIAAAAIgpgHIgCgBIACgBQADgBAHABIAuAHIAAgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQgOgEgQgDIgJgBIgLgBIgEgBIgHgBIAAAAIgCAAIgPgBIgBgBQgFgBgIAAIgBAAIgBABIgBAAQgKABgDgEIAAAAQAUgFAXACQAUABACgDIgIgCIgQgFIgcgHIgGgBQADgCAEgBIABAAQAMACAMgBIAKAAIAAABQAFgBgBgEQgGgCgKgCIgGgBIAAgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAAAAIACgBQAGgCAIABIAAAAQAPAEASAAIABABQAJADAMADIAAAAIAgAaIAAAAIAAABIABAAQAGAEAFAFIACAEIgCAAIAAABIgCABIAAABIgCAEIgDACIgBABIgCACIgFAGIgCAGIgBABIgDABIgGgFgAgSglIACACQAeAPAVgCQgXgMgdgFIgBACg");
	this.shape_81.setTransform(18.4,6.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF6600").s().p("AgTAuIgOgIIgDAAIACgEQAbAAAaAEQAMAEgBABIgLgBQgQgDgPACIAAAAIgCABIgBAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAIgEAAgAgWAXQgXgBgHgFIAAAAIAVgBQAQACACABQALABAHACQgIABgIAAIgLAAgAABgLQgGgBgFABIABgGIAHABIAEAAIAKACIAKABQAQADAOAEQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIAAABIgvgIgAACgpIgCgDIAAgCQAfAGAWALIgFABQgTAAgbgNg");
	this.shape_82.setTransform(16.7,7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AghAwIABAAIACgBQARgCANADIgPAAIgJAEIgJABQgBgBAAAAQgBgBAAAAQAAgBABgBQAAAAABgBgAAPAxIgEAAQACgBgMgEQgagEgbAAIAAAAQACgEAGgBIABAAIAAAAIgIgDIgXgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQANgDANABIAMABIAKACIABAAIAKgBQgEgCgFAAIgDAAIgBAAIgHgCIgLgCIAAAAIgBgBIAAAAIgKAAIAAgBQgJgBgEgCQADgEAKABIADAAIAEAAIALACIAFABIABAAQAmAIAkAJIAAABIAAABIABAAIAAABIABAAIADABIgDABIgDABIgKACIgDABIgBACIgJAFIAAACIAAABIgBADQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAAgAhHAXIAAABQAIAEAXABQAOACANgDQgHgCgLgBQgCgBgRgBIgHgBIgOABgAAwAVIgBgBQgNgKgUgGIAAAAIgqgHIgBgBIABgBQAEgBAHABIAuAHIAAgBQABAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQgOgEgQgDIgJgBIgLgBIgEgBIgHgBIgBAAIgCAAIgOgBIgBgBQgFgBgIAAIgBAAIgBABIgBAAQgKABgDgEIAAAAQAUgFAWACQAVABACgDIgIgCIgQgFIgcgHIgGgBQADgCAEgBIABAAQAMACALgBIAKAAIAAABQAFgBAAgEQgHgCgJgCIgGgBIAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAAAIADgBQAGgCAIABIAAAAQAPAEASAAIABABQAJADAMADIAAAAQAPANARANIAAAAIAAABIABAAQAHAEAEAFIACAEIgBAAIgBABIgCABIAAABIgBAEIgEACIgBABIgCACIgFAGIgCAGIgBABIgDABIgGgFgAgSglIACACQAeAPAVgCQgWgMgegFIgBACg");
	this.shape_83.setTransform(18.5,6.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF6600").s().p("AgTAuIgPgIIgCAAIABgEQAcAAAaAEQAMAEgCABIgKgBQgPgDgPACIgBAAIgCABIgCAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABIgDgBgAgWAXQgYgBgHgFIAAAAIAVgBIATADQALABAHACQgIABgIAAIgLAAgAAAgLQgFgBgEABIAAgGIAIABIACABIALABIALABQAPADAPAEQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAABIgwgIgAABgpIgBgDIAAgCQAfAGAXALIgFABQgUAAgcgNg");
	this.shape_84.setTransform(16.7,7.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgiAwIACAAIACgBQARgCANADIgPAAIgJAEIgKABQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBgAAPAxIgEAAQACgBgMgEQgagEgcAAIAAAAQACgEAHgBIABAAIAAAAIgJgDIgWgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQANgDAMABIANABIAKACIABAAIAKgBQgEgCgFAAIgDAAIgBAAIgHgCIgLgCIgBAAIgBgBIAAAAIgJAAIAAgBQgJgBgEgCQADgEAJABIADAAIAEAAIALACIAGABIABAAQAmAIAkAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgLACIgCABIgCACIgJAFIAAACIAAABIgBADQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgBAAgAhHAXIAAABQAHAEAYABQAOACANgDQgHgCgLgBIgTgCIgHgBIgOABgAAxAVIgCgBQgNgKgUgGIAAAAIgqgHIgBgBIABgBQAEgBAHABIAvAHIAAgBQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAQgOgEgQgDIgJgBIgLgBIgEgBIgHgBIgBAAIgCAAIgPgBIgBgBQgFgBgIAAIAAAAIgBABIgCAAQgJABgDgEIAAAAQAUgFAWACQAVABACgDIgIgCIgRgFIgcgHIgFgBQADgCAEgBIABAAQALACAMgBIAKAAIAAABQAFgBAAgEQgHgCgJgCIgGgBIAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAIACgBQAHgCAIABIAAAAQAPAEASAAIABABQAJADAMADIAAAAIAhAaIAAAAIAAABIAAAAQAHAEAEAFIACAEIgBAAIgBABIgBABIAAABIgCAEIgDACIgBABIgCACIgGAGIgBAGIgCABIgCABIgGgFgAgSglIACACQAeAPAWgCQgXgMgegFIgBACg");
	this.shape_85.setTransform(18.5,6.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF6600").s().p("AgbAuIgOgIIgDAAIACgEQAcAAAaAEIADAAIABAAQAHAAADACIgEADIgKgBIgBAAQgOgDgQACIAAABIgCAAIgCAAQAAABAAAAQgBABAAABQAAAAABABQAAAAAAAAIgEAAgAgdAWIgBAAQgDgCgGAAQgOACgHgEIAAgBIAVAAIAOAAIAFACIABAAQAKABAHABIAAABIAAABIgMABIgPgCgAgGgLQgHgBgEABIABgGIALABIAUACQAQAEAOAEQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAgBIAAABIgvgHgAAngFIACAAIgCAAIAAAAgAgFgpIgBgBIgBgBIABgCQAeAFAXAMIABAAIANAIQgkgGgegPg");
	this.shape_86.setTransform(17.5,7.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgiAwIACAAIACAAIAAgBQAQgCAOADIgNgBIgCABQgDACgDAAIgDACIgKABQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBgAAPAxIgEAAIAEgCQgDgDgHABIgBAAIgDgBQgagEgcAAIAAAAQACgEAHgBIABAAIAAAAIgJgDIgWgEIgBAAQgBgBAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAgEAEAAQANgDAMABIANABIAKACIABAAIAKgBQgEgCgFAAIgDAAIgBAAIgHgCIgLgCIgBAAIgBgBIAAAAIgJAAIAAgBQgJgBgEgCQADgEAJABIADAAIAEAAIALACIAGABIABAAQAmAIAkAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgLACIgCABIgCACIgJAFIAAACIAAABIgBADQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAAgAgpAcIABABQAOACANgCIAAAAIAAgBQgHgCgKgBIgBAAIgFgCIgOAAIgVAAIAAABQAHAEAOgBIACgBQAFAAACACgAAxAVIgCgBQgNgKgUgGIAAAAIgqgHIgBgBIABgBQAEgBAHABIAvAHIAAgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQgOgEgQgDIgUgCIgLgCIgBAAIgCAAIgPgBIgBgBQgFgBgIAAIAAAAIgBABIgCAAQgJABgDgEIAAAAQAUgFAWACIANABIABAAQAHAAACgDIgIgCIgBAAIgQgFIgcgHIgBAAIgBAAIgDgBIAAgBIAHgCIABAAQALACAMgBIAKAAIAAABIABAAQAEgBAAgEQgHgCgJgCIgGgBIAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAIACgBQAHgCAIABIAAAAQAPAEASAAIABABQAJADAMADIAAAAIAhAaIAAAAIAAABIAAAAQAHAEAFAFIACAEIgCAAIAAABIgCABIAAABIgCAEIgDACIgBABIgCACIgGAGIgBAGIgCABIgCABIgGgFgAgSglIABACIABAAQAeAPAkAGIgNgIIgBAAQgXgMgegFIgBACgAAcABIAAgBIAAAAIACABg");
	this.shape_87.setTransform(18.6,6.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FA7315").s().p("AgPAGIgOgHIgDAAIACgEQAbAAAZAEQANADgCABIgLgBQgPgCgPABIAAAAIgCAAIgBABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABAAIgEAAg");
	this.shape_88.setTransform(16.5,11.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF6600").s().p("AgVAiQgYAAgHgFIAAAAIAVgBQAQACACABQALAAAHACQgIACgIAAIgKgBgAAuAGIgBAAIAAAAIACAAIAAABIgBgBgAAAAAIADAAIAMACIgPgCgAgJAAQADAAAEAAIgFAAgAABgdIgBgDIAAgCQAeAGAXALIgFAAQgUAAgbgMg");
	this.shape_89.setTransform(16.9,5.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AghAwIABAAIADgBQARgCAMADIgOAAIgJAEIgKABQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBgAAPAxIgEAAQACgBgMgEQgagEgbAAIAAAAQACgEAHgBIABAAIAAAAIgJgDIgWgEIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQANgDAMABIANABIAKACIABAAIAJgBQgEgCgFAAIgDAAIAAAAIgHgCIgLgCIgBAAIgBgBIAAAAIgJAAIAAgBQgJgBgEgCQADgEAJABIADAAIAEAAIALACIAFABIABAAQAmAIAjAJIAAABIABABIABAAIAAABIAAAAIADABIgDABIgCABIgLACIgCABIgCACIgJAFIAAACIAAABIAAADQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAAAAAIgBAAgAhGAXIAAABQAIAEAXABQANACAOgDQgHgCgMgBQgBgBgRgBIgHgBIgOABgAA0AYIgBgBIgDgDIgCgBQgNgJgTgGIAAAAIglgGIgBAAIgCgBIgBAAIgBgBIABgBIACAAIAFAAQgEgBgDABIAAAAIAAgGIAAAAIgBAAIgBAAIgIgBIgBAAIgGAAIgBgBIgGgBIgBAAIgBAAIgBAAIgEAAIAAAAIgBABIgCAAQgDAAgDgBIgGgCQATgFAUACIAQABIAGgBIADgCIgDgBIgFgBIgBAAIgJgDIgGgCIgVgFIgBAAIgCgBIgEgBIgBgBIgBAAIgCgBIAAAAIAHgCIABAAIAKABIAKAAIACAAIABAAIAIgBIABAAIAAABIAAAAQAEAAAAgEIgDgBIgEgBIgCAAIgCgBIgDgBIgBAAIgGgBIABgCQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAABIACgBQAHgCAIABIAAAAIAQADIACAAIAOACIABAAIAFACIABAAIAOAFIAAAAIAUAQIABABIACABIABAAIAIAIIAAAAIAAABIABAAIADADIADABIACACIACACIABABIABACIAAABIgBABIgBABIgBABIgBAAIAAABIAAABIgBACIgCABIgCABIgBACIgCACIgFAFIgBADIgBACIAAABIgBABIgDAAIgBgBgAAcABIAAAAIABABIAAgBIgBgBgAgCgDIgMgCIgCAAIAOACgAgRglIACACQAdAPAVgCQgWgMgegFIAAACg");
	this.shape_90.setTransform(18.7,6.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F5802B").s().p("AgPAGIgNgHIgDAAIACgEQAaAAAZAEQAMADgCABIgKgBQgPgCgOABIAAAAIgDAAIgBABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABAAIgEAAg");
	this.shape_91.setTransform(16.7,11);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF6600").s().p("AgVAiQgWAAgIgFIAAAAIAVgBIASADQALAAAGACQgHACgIAAIgLgBgAAuAGIgBAAIAAAAIgBAAIAAAAIgCAAIgMgCIgUgDIgJgBIAAAAIgFAAIgDAAIgBAAIgBAAIABgFIAEAAIAHABIADABIAEAAIACAAIAJABIABAAQAPACANAEIgDACIgBABIAAgBgAACgdIgCgDIAAgCQAeAGAWALIgFAAQgTAAgagMg");
	this.shape_92.setTransform(17,5.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AggAwIABgBIACAAQARgCAMADIgOgBIgJAEIgJABQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBgAAPAxIgEAAQACgBgMgEQgZgEgaAAIAAgBQACgDAGgBIABAAIAAgBIgIgDIgWgEIgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgEADgBQAMgCAMAAIAMACIAKACIABAAIAKgBQgEgCgFgBIgDAAIAAAAIgIgCIgKgCIgBAAIgBAAIAAgBIgJAAIAAAAQgIgCgEgCQADgDAJAAIADAAIADABIALABIAFABIABABQAlAHAjAKIAAABIAAAAIABAAIAAABIABAAIACABIgCACIgDABIgKABIgCACIgCABIgJAGIAAABIAAABIAAADQgBABAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgBAAgAhEAXIAAAAQAHAFAXAAQANACANgDQgHgCgLAAIgSgDIgHAAIgNABgAA0AYIgBgBIgBgBIgEgCIgBgBQgMgKgTgFIAAgBIglgGIgBAAIgCgBIAAAAIgBgBIABAAIACAAIADgBIAFABIABAAIAJABIATADIALABIACAAIABAAIABAAIgBAAIABAAIABABIAAgBIAEgBQgNgEgQgDIAAAAIgJgBIgBAAIgFAAIgDgBIgIgBIgEAAIgBAAIAAAAIgCAAIgIgCIgBAAIgFAAIgBgBQgDgBgEABIgBAAIgBAAIgEAAIAAAAIgBAAIgCAAIgGAAIgFgDQASgFAUACIAQABIAFgBIADgCIgDgBIgFgBIAAAAIgKgDIgGgCIgUgFIgBAAIgCgBIgDgBIgBAAIgBAAIAAgBIgCAAIABgBIAGgBIABAAIAKABIAKgBIABABIABAAIAIgCIABAAIAAABIAAAAQABAAABAAQAAAAABgBQAAAAAAgBQAAgBAAgBIgDgBIgEgBIgCAAIgBgBIgDgBIgBAAIgFgBIAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAIACgBIAPAAIAAAAIAPADIACAAQAGABAIAAIABABIAFACIABAAIAOAFIAAAAIATARIABAAIACABIABAAIAIAIIAAAAIAAABIAAAAIAEADIACACIACABIACACIAAABIABACIAAABIgBAAIgBABIgBABIgBAAIAAABIAAACIgBACIgCABIgCABIgBABIgCACIgEAGIgBACIgBADIAAABIgCAAIgCAAgAgRgmIACADQAdAOAUgCQgWgLgcgGIgBACg");
	this.shape_93.setTransform(18.8,6.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F18C40").s().p("AgPAGIgNgHIgCAAIABgEQAaAAAYAEQAMADgCABIgKgBQgOgCgOABIgBAAIgBAAIgCABQAAAAgBABQAAABAAAAQAAABAAAAQABABAAAAIgEAAg");
	this.shape_94.setTransform(16.8,10.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF6600").s().p("AgVAiQgVAAgIgFIAAAAIAUgBIASADQAKAAAGACQgGACgIAAIgLgBgAAtAHIAAgBIgCAAIABAAIgBAAIgBAAIgBAAIgNgCIgUgDIgHgBIgBAAIgEAAIgDAAIgBAAIgBAAIABgFIAMABIABABIAFAAIALABQAPACAMAEIgCACIgBABgAACgdIgCgDIAAgCQAdAGAVALIgEAAQgTAAgZgMg");
	this.shape_95.setTransform(17.2,5.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgfAwIABgBIACAAQAQgCAMADIgOgBIgIAEIgJABQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBgAAPAxIgEAAQACgBgMgEQgYgEgaAAIAAgBQACgDAGgBIABAAIAAgBQgDgCgFgBIgVgEIgBAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgEAEgBQAMgCAMAAIALACIAKACIABAAIAJgBQgEgCgFgBIgCAAIgBAAIgHgCIgKgCIgBAAIgBAAIAAgBIgIAAIAAAAQgJgCgEgCQADgDAJAAIADAAIAEABIAKABIAFABIABABQAkAHAiAKIAAABIAAAAIABAAIAAABIABAAIACABIgCACIgDABIgKABIgCACIgCABIgIAGIAAABIAAABIgBADQAAABAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgBAAgAhCAXIAAAAQAHAFAWAAQANACAMgDQgGgCgLAAIgSgDIgGAAIgNABgAAyAXIgBgBIgEgDIgBgBQgMgJgSgFIAAgBIglgGIgBAAIgBgBIAAAAIgBgBIABAAIABAAIADgBIAFABIABAAIAIABIASADIANABIACAAIAAAAIABAAIAAAAIABAAIAAABIAAAAIABgBIADgBQgNgEgPgDIgKgBIgFAAIgBAAIgDgBIgFgBIgCAAIgEAAIgBAAIgCAAIgHgCIgBAAIgGAAIgBgBIgGAAIgBAAIgBAAIgEAAIAAAAIgBAAIgCAAIgFgBIgFgCQARgFAUACIAQABIAFgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAIgDgBIgEgBIgBAAIgKgDIgFgCIgUgFIgBAAIgDgBIgCgBIgBgBIAAAAIgCgBIABAAIAGgBIABAAIAKABIAJgBIACABIABAAIAHgCIABAAIAAABQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBIgDgBIgFgBIgBgBIgBAAIgDgCIgBAAIgDgBIAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIACgBIAOAAIABAAQAHACAIABIABAAIAOACIAAAAIAGACIABAAIANAGIAAAAIATAQIABABIABABIABAAIAIAIIAAAAIAAABIABAAIADADIACABIABACIACACIABABIAAABIAAABIgBABIAAABIgBABIgBAAIAAABIgBABIgBACIgCABIgBABIgBACIgCACIgFAGIAAACIgBACIgBABIgBAAIgCAAIgBgBgAgQgmIACADQAcAOAUgCQgWgLgcgGIAAACg");
	this.shape_96.setTransform(18.9,6.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EC9955").s().p("AgOAGIgNgHIgDAAIACgEQAZAAAYAEQALADgBABIgKgBQgOgCgOABIAAAAIgCAAIgCABQAAAAAAABQgBABAAAAQAAABABAAQAAABAAAAIgDAAg");
	this.shape_97.setTransform(17,10.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF6600").s().p("AgUAiQgWAAgGgFIAAAAIATgBIARADQALAAAFACQgGACgIAAIgKgBgAArAHIAAgBIgBAAIgBABIAAAAIgKgCIgegFIgBAAIgEAAIgDAAIgBAAIgBAAIAAgEIAKAAIAEABIAOABIABAAIAKACIASAFIgBABIgDABgAABgdIgBgDIAAgCQAcAGAWALIgFAAQgTAAgZgMg");
	this.shape_98.setTransform(17.4,5.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgfAwIACgBIACAAQAQgCALADIgNgBIgIAEIgKABQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAgAAOAxIgDAAQABgBgLgEQgYgEgZAAIAAgBQACgDAGgBIABAAIAAgBQgDgCgFgBIgVgEIgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgEADgBQAMgCAMAAIALACIAKACIAAAAIAJgBQgDgCgFgBIgDAAIAAAAIgHgCIgKgCIgBAAIgBAAIAAgBIgIAAIAAAAQgJgCgDgCQADgDAIAAIADAAIAEABIAKABIAFABIABABQAjAHAhAKIAAABIAAAAIABAAIAAABIABAAIACABIgCACIgDABIgKABIgCACIgBABIgJAGIAAABIAAABIAAADQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIgBAAgAhBAXIAAAAQAHAFAVAAQANACANgDQgHgCgKAAIgSgDIgGAAIgNABgAAzAYIgCAAIgBgBIgBgBIgDgDIgBAAQgMgKgSgFIAAgBIgjgGIgBAAIgBgBIgBAAIABgBIABAAIADgBIAFABIABAAIAdAFIAJABIABAAIAAgBIABAAIABABIABAAIADgBIAAAAIgRgFIgKgDIgBAAIgOgBIgDgBIgBAAIgFAAIgCAAIgEgBIgBAAIgBAAIgIgBIgBAAIgFgBIgBAAIgGgBIgBAAIgBAAIgEAAIAAAAIgBAAIgCAAQgDABgCgBIAAgBIgFgCQASgEATABIAPABIAGgBIABgCIgDgBIgEgBIgBAAIgKgDIgFgCIgUgFIgBAAIgCgBIgCgBIgBAAIAAgBIgBAAIABgBIAGgBIABAAIAKABIAJAAIABAAIABAAIAHgCIABAAIgBABIABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIgCgBIgFgBIgBgBIgBAAIgCgCIgBAAIgCgBIAAgBIADAAIAAAAIACgBIAOABIAAAAQAHACAIAAIACAAIANADIAAAAIAGACIAAAAIANAGIAAAAIATAQIAAABIACABIAAAAIAJAIIAAAAIAAABIAAABIADACIACACIABABIACACIAAABIABABIAAAAIgCACIAAABIgBABIgBAAIAAAAIgBACIgBACIgBABIgCABIgBACIgCACIgEAGIgBACIgBACIAAAAIgCAAgAgQgmIACADQAbAOAUgCQgVgLgbgGIgBACg");
	this.shape_99.setTransform(19,6.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E7A66A").s().p("AgOAGIgMgHIgDAAIACgEQAYAAAXAEQAMADgCABIgKgBQgNgCgOABIAAAAIgCAAIgBABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABAAIgEAAg");
	this.shape_100.setTransform(17.1,10.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF6600").s().p("AgUAiQgVAAgGgFIAAAAQAJgBAKAAIARADQAKAAAFACQgGACgIAAIgKgBgAAqAGIgBAAIgBABIgJgCIgdgFIgCAAIgDAAIgEAAIAAAAIgBAAIAAgEIAMABIAPABIABAAIACABIAQADIAIACIAAAAIgCACIgCAAIABABIgBgBgAABgdIgBgDIAAgCQAcAGAUALIgEAAQgSAAgZgMg");
	this.shape_101.setTransform(17.5,5.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgeAwIACgBIACAAQAPgCALADIgNgBIgIAEIgJABQAAAAAAgBQgBAAAAgBQAAAAABgBQAAgBAAAAgAAOAxIgEAAQACgBgLgEQgXgEgZAAIAAgBQACgDAGgBIABAAIAAgBIgIgDIgUgEIgBAAQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgEADgBQALgCAMAAIALACIAJACIABAAIAJgBQgEgCgFgBIgCAAIgBAAIgGgCIgKgCIgBAAIgBAAIAAgBIgIAAIAAAAQgIgCgEgCQADgDAJAAIACAAIAEABIAKABIAFABIABABQAiAHAgAKIAAABIABAAIAAAAIAAABIABAAIACABIgCACIgCABIgKABIgCACIgCABIgIAGIAAABIAAABIAAADQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAIgBAAgAg/AXIAAAAQAGAFAVAAQANACAMgDQgGgCgKAAIgRgDIgGAAIgNABgAAyAYIgCAAIgBgBIgBgBIgDgDIgCgBQgLgJgRgFIAAgBIgjgGIgBAAIgBgBIAAgBIABAAIAAAAIAEgBIADABIADAAIAcAFIAJABIABgBIABAAIABABIgBgBIACAAIACAAIAAgBIgIgCIgQgEIgCgBIgBAAIgOgBIgEgBIgFgBIgCAAIgEAAIAAAAIgCAAIgIgBIAAgBIgFAAIgBgBIgGAAIgBAAIgBAAIgEAAIAAAAIgBAAIgCAAQgDABgCgCIgEgCQARgEATABIAPABIAFgBIABgCIgDgBIgEgBIgBAAIgJgDIgFgCIgUgFIgBAAIgCgBIgCgBIAAgBIAAAAIAAAAIgBgBIABAAIAHgBIABAAIAJABIAJAAIABAAIABAAQAEAAACgCIAAAAIAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIgDgBIgEgBIgBgBIgBgBIgBgBIgBAAIgBgBIAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIAAgBIABAAIAPABIAAAAIAOACIABAAQAGACAHABIABAAIAFACIABAAIAMAHIAAAAIASAQIABABIABABIABAAIAIAHIAAABIAAABIABABIADABIABACIABACIABABIAAABIABABIAAABIgBABIgBABIgBABIAAAAIgBABIgBABIgBACIgBABIgCACIgBABIgCACIgDAGIgBACIgBACIgBAAIgBAAgAgPgmIABADQAbAOATgCQgUgLgbgGIAAACg");
	this.shape_102.setTransform(19.1,6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E3B380").s().p("AgNAGIgNgHIgCAAIABgEQAZAAAWAEQALADgCABIgJgBQgNgCgNABIgBAAIgCAAIgBABQAAAAgBABQAAABAAAAQAAABAAAAQABABAAAAIgDAAg");
	this.shape_103.setTransform(17.3,10.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF6600").s().p("AgTAiQgVAAgGgFIAAAAIASgBQAPACACABQAKAAAFACQgGACgHAAIgKgBgAAqAHIgBgBIgBAAIgBABIgDgBIgKgCIgYgEIgCAAIgDAAIgBAAIgDAAIgBAAIAAgEIAMABIAPABIACABIARADIAHACIAAAAIAAABIAAABIgCABgAABgdIgBgDIAAgCQAbAGAUALIgEAAQgSAAgYgMg");
	this.shape_104.setTransform(17.6,5.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgdAwIABgBIADAAQAPgCALADIgNgBIgIAEIgJABQAAAAAAgBQgBAAAAgBQAAAAABgBQAAgBAAAAgAAOAxIgEAAQACgBgLgEQgWgEgZAAIAAgBQACgDAGgBIABAAIAAgBIgIgDIgTgEIgBAAQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgEADgBQAMgCALAAIALACIAJACIABAAIAIgBQgDgCgFgBIgCAAIgBAAIgGgCIgKgCIgBAAIAAAAIAAgBIgJAAIAAAAQgIgCgDgCQADgDAIAAIACAAIAEABIAKABIAEABIABABQAiAHAfAKIAAABIABAAIABAAIAAABIAAAAIADABIgDACIgCABIgKABIgCACIgBABIgIAGIAAABIAAABIgBADQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgBAAgAg+AXIAAAAQAHAFAUAAQANACAMgDQgHgCgKAAQgBgBgPgCIgGAAIgNABgAAwAYIgBgBIgBgBIgBgBIgDgCIgCgBQgLgJgQgFIAAgBIgjgGIgBAAIAAgBIAAgBIABAAIADgBIABAAIADABIADAAIAWAEIAKABIAEABIABgBIAAAAIABABIACAAIACgBIAAAAIgBAAIAAgBIgHgCIgQgEIgDgBIgOgBIgEgBIgFgBIgBAAIgFAAIAAAAIgCAAIgHgBIgBgBIgFAAIgBgBIgFAAIgBAAIgBAAIgBAAIgDAAIAAAAIgBAAIgBAAQgEABgCgCIAAAAIgDgCQARgEASABIAPABIAFgBIAAgCIgDgBIgEgBIAAAAIgKgDIgFgCIgTgFIgBAAIgCgBIgBgCIgBAAIABAAIgBgBIABAAIAHgBIABAAIAJABIAJAAIABAAIAAAAQAEAAACgCQABAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAIgDgBIgEgBIgBgBIgBgBIgBgBIgBgBIABgBIADAAIAAgBIABAAIAOABIABAAIANACIABABIANACIABABIAFABIABABIALAHIAAAAIASAQIABABIABABIAAAAIAJAHIAAABIAAABIAAABIADABIABACIAAABIACACIAAABIAAAAIAAABIgBABIAAABIgBABIgBAAIAAABIgBACIgBABIgCACIgBABIgBABIgCACIgDAHIgBABIgCACIgCAAgAgPgmIACADQAaAOATgCQgUgLgagGIgBACgAgVgoIAAgBIAAABg");
	this.shape_105.setTransform(19.2,5.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#DEBF95").s().p("AgNAGIgMgHIgDAAIACgEQAYAAAWAEQAKADgBABIgJgBQgOgCgMABIgBAAIgCAAIgBABQAAAAAAABQgBABAAAAQAAABABAAQAAABAAAAIgDAAg");
	this.shape_106.setTransform(17.4,10.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF6600").s().p("AgTAiQgUAAgGgFIAAAAIASgBQAOACACABQAKAAAFACQgGACgHAAIgKgBgAAgAFIgMgCIgTgDIgBAAIgCAAIgCAAIgDAAIgBAAIAAgEIALABIALABIAEAAIAAAAIADABIAWAFQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBAAIgBAAIABABIgBAAIgIgCgAAoAGIAAAAIAAAAgAABgdIgBgDIAAgCQAaAGAUALIgEAAQgSAAgXgMg");
	this.shape_107.setTransform(17.8,5.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgcAwIABgBIACAAQAPgCALADIgNgBIgHAEIgJABQAAAAAAgBQgBAAAAgBQAAAAABgBQAAgBAAAAgAAOAxIgDAAQABgBgKgEQgWgEgYAAIAAgBQACgDAFgBIABAAIAAgBIgHgDIgTgEIgBAAQgBAAAAgBQAAgBgBAAQAAgBABAAQAAgBAAAAQAAgEADgBQAMgCAKAAIALACIAJACIABAAIAIgBQgEgCgEgBIgCAAIgBAAIgGgCIgKgCIAAAAIgBAAIAAgBIgIAAIAAAAQgIgCgDgCQACgDAIAAIADAAIADABIAKABIAEABIABABQAhAHAfAKIAAABIAAAAIABAAIAAABIABAAIACABIgCACIgDABIgJABIgCACIgBABIgIAGIAAABIAAABIgBADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIAAAAgAg8AXIAAAAQAHAFAUAAQAMACALgDQgGgCgKAAQgBgBgPgCIgGAAIgMABgAAxAYIgCgBIgBAAIgBgBIgBgBIgDgDIgBAAQgLgJgQgFIAAgBIgigGIgBgBIAAgBIABAAIADgBIACAAIACABIACAAIARADIANACIAIABIAAAAIgBgBIABAAIACAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBIgXgGIgCgBIgBAAIgDAAIgKgBIgFgBIgEgBIgCAAIgEAAIgBAAIgBAAIgHgCIgBAAIgFgBIgBAAQgCgBgDABIgBAAIgBAAIgBAAIgDAAIgBAAIgBAAQgDAAgDgBIAAgBIgCgBQAQgFATACIAOABQADAAACgCIAAgBIgDgBIgEgBIgBAAIgJgDIgFgCIgTgFIgBgBIgCgBIgBgBIABgBIAAAAIABAAIAGgBIABAAIAJABIAJgBIABABIAAAAQAEgBACgCIAAAAIgBAAIgBgDIgEgBIgEgBIgBgBIAAgBIgBgBIAAgBIABgBIADAAIABAAIABAAIANABIABAAIANACIABABIANADIAAAAIAFACIABAAIALAHIAAABIARAPIABABIAAABIABAAIAIAIIAAABIABABIAAAAIACACIABACIAAABIABACIABAAIAAABIgBACIAAABIgBABIgBAAIgBAAIAAACIgBABIgCACIgBABIgBACIgCACIgDAGIgBACIgCABgAgOgmIACADQAZAOATgCQgUgLgagGIAAACgAAZAAIAAAAIAAAAgAgUgpIAAAAIAAAAg");
	this.shape_108.setTransform(19.2,5.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D9CCAA").s().p("AgNAGIgLgHIgDAAIACgEQAXAAAVAEQALADgCABIgJgBQgNgCgMABIgBAAIgBAAIgBABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABAAIgEAAg");
	this.shape_109.setTransform(17.6,10.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF6600").s().p("AgSAiQgUAAgGgFIAAAAQAJgBAJAAQAOACABABQAKAAAFACQgGACgHAAIgJgBgAAZAEIgJgCIgOgCIgCAAIgDAAIgEAAIgBAAIABgEIAWACIACAAIABAAIARADIAHADIAAAAIgBACIgBAAIAAAAIgBAAIAAAAIABAAIAAAAIAAABIgBAAIgOgDgAACgdIgCgDIAAgCQAaAGATALIgEAAQgRAAgWgMg");
	this.shape_110.setTransform(17.9,5.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgbAwIABgBIACAAQAOgCALADIgMgBIgIAFIgIABQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBgAAOAxIgEAAQACgBgKgEQgWgEgXAAIAAgBQACgDAFgBIABAAIAAAAIgHgEIgTgDIAAAAQgBgBAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAgEADAAQALgDAKABIALABIAIACIABAAIAIgBQgDgCgEAAIgDAAIAAAAIgGgDIgKgCIAAAAIgBAAIAAgBIgIAAIAAAAQgHgCgEgBQADgEAIAAIACAAIADABIAKACIAEABIABAAQAgAHAeAKIAAABIABABIAAAAIAAABIABAAIACABIgCABIgCABIgJABIgCACIgCACIgHAFIAAACIAAABIgBACQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAgAg6AXIAAAAQAGAFAUABQALABAMgCQgGgCgKgBQgBgBgOgCIgGAAIgMABgAAwAYIgCgBIgCgBIgBgBIgBgBIgCgBIgCgBQgKgJgPgFIAAgBIgigHIgBAAIAAgBIABAAIAAAAIAEgBIAEABIABAAIAOADIAJACIAOABIABAAIgBAAIAAgBIABAAIABABIABgCIAAAAIgIgCIgQgEIgBAAIgCgBIgLgBIgFgBIgEgBIgCAAIgEAAIAAAAIgCAAIgHgCIgBAAIgEgBIgBAAIgFAAIgBAAIgBAAIgBAAIgDAAIgBAAIgBAAQgDAAgDgCIgCAAQARgGASADIAOAAQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAIAAgCIgDgBIgEgBIgBAAIgJgCIgFgCIgSgFIgBgBIgDgBIAAgBIABAAIABgBIAAgBIABAAIAHAAIABAAIAIABIAIgBIABABIABAAQAEAAABgDIgBgBIAAABIgCgDIgEgBIgFgBIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAAgBIABgBIABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIABAAIAAgBIAOACIABABIAMABIABABIAMADIABABIAFABIAAAAIALAJIAAAAIARAQIAAAAIABABIABAAIAIAIIAAABIABABIAAAAIACACIAAABIAAACIABABIAAABIAAABIgBABIAAABIgBABIgBAAIAAABIgBABIgBACIgCACIgBABIgBABIgCACIgDAGIAAACIgCACgAgOglIACACQAZAOASgCQgTgLgZgGIgBADgAAZAAIAAAAIAAABgAAZAAIAAAAg");
	this.shape_111.setTransform(19.3,5.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D4D9BF").s().p("AgNAGIgLgHIgCAAIABgEQAWAAAVAEQAKADgBABIgJgBQgMgCgMABIAAAAIgCAAIgCABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIgDAAg");
	this.shape_112.setTransform(17.8,10.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF6600").s().p("AgSAiQgTAAgGgFIAAAAQAJgBAIAAIAQADQAJAAAFACQgGACgHAAIgJgBgAAUADIgGgBIgNgCIAAAAIgBAAIgDAAIgEAAIgBAAIABgEIAUACIADAAIABAAIASAEIAGACIAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgCAAIAAAAIAAAAIAAAAIABABIgBAAIgSgEgAABgdIgBgDIAAgCQAZAGATALIgFAAQgQAAgWgMg");
	this.shape_113.setTransform(18.1,5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgaAwIABgBIACAAQAOgCAKADIgMgBIgHAEIgIACQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBgAAOAxIgEAAQACgBgKgEQgVgEgXAAIAAgBQACgDAFgBIABAAIAAAAQgCgDgFgBIgSgDIgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgEADAAQAKgDALABIAJABIAJACIABAAIAIgBQgEgCgEAAIgCAAIgBAAIgGgDIgJgCIAAAAIgBAAIAAAAIgHAAIAAgBQgIgCgDgBQACgEAIAAIACAAIAEABIAJABIAEACIABAAQAfAIAdAJIAAABIABABIAAAAIAAABIABAAIACABIgCABIgCABIgJABIgCACIgBACIgIAFIAAABIAAACIAAADQgBAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAIAAAAgAg4AXIAAAAQAGAFATABQALABALgCQgGgCgJgBIgPgDIgGAAIgLABgAAuAYIgCgBIgBgBIgBgBIgBAAIgDgDIgBAAQgKgJgOgFIAAgBIghgHIgBAAIAAgBIAEgBIAEABIABAAIABAAIAMACIAFACIASADIABgBIAAAAIgBAAIAAgBIABAAIACABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIgFgCIgSgEIgBAAIgDgBIgKgBIgEgBIgFgBIgCAAIgDAAIgBAAIgBAAIgHgCIgBAAIgEgBIgBAAIgGAAIgBAAIgBAAIgDAAIgBAAIgBAAQgDAAgCgBIAAgBIgCAAQAQgGASACIAOABIAEgCIgBgCIgDgBIgDAAIgBAAIgKgDIgEgDIgSgEIgBgBIgDgBIABgCIAAAAIACgBIABAAIAHAAIABAAIAIABIAIgBIABABIAAAAQAEgBABgCIgBAAIgDgDIgEgBIgFgCIAAgBQgBAAABAAIABgCIAAAAIACgBIABAAIADAAIABAAIAAAAIAOACIABAAQAGABAFAAIABABIAMAEIABAAIAFACIAKAIIAAAAIARAQIAAABIAAABIABAAQAFADADAFIAAABIABAAIAAABIACACIAAABIAAACIAAAAIAAAAIAAACIAAAAIgBABIAAABIgBABIAAAAIgBABIgBACIgBABIgBACIgCABIgBABIgCACIgCAHIgBABIgBABgAgNgmIACADQAYAOARgCQgTgLgYgGIAAACg");
	this.shape_114.setTransform(19.4,5.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D0E5D4").s().p("AgNAGIgLgHIgCAAIABgEQAWAAAVAEQAKADgCABIgIgBQgNgCgLABIAAAAIgCAAIgBABQAAAAgBABQAAABAAAAQAAABAAAAQABABAAAAIgEAAg");
	this.shape_115.setTransform(17.9,10.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF6600").s().p("AgSAiQgSAAgGgFIAAAAIARgBIAPADQAJAAAEACQgFACgHAAIgJgBgAAlAHIgIgCIgcgFIgBAAIAAAAIgDAAIgEAAIgBAAIABgDIANAAIAKABIACABIADAAIACABIAJACIACAAIAFACIAAAAQAAABABAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBAAIgBAAIAAABgAABgdIgBgDIAAgCQAYAGATALIgFAAQgQAAgVgMg");
	this.shape_116.setTransform(18.2,4.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgaAwIABgBIACAAQAOgCAKADIgMgBIgHAEIgIABQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBgAANAxIgDAAQABgBgKgEQgUgEgWAAIAAgBQACgDAFgBIABAAIAAgBQgDgCgEgBIgSgEIgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBABAAQAAgEADgBQAKgCAKAAIAKACIAIACIABAAIAHgBQgDgCgEgBIgCAAIgBAAIgFgCIgJgCIgBAAIAAAAIAAgBIgIAAIAAAAQgHgCgDgCQACgDAIAAIACAAIADABIAJABIAEABIABABQAeAHAdAKIAAABIAAAAIABAAIAAABIAAAAIADABIgDACIgCABIgIABIgCACIgBABIgIAGIAAABIAAABIAAADQAAABAAABQgBAAAAAAQAAABAAAAQAAAAgBAAIAAAAgAg3AXIAAAAQAFAFATAAQALACALgDQgGgCgJAAIgPgDIgFAAIgLABgAAsAYIgCgBIgBgBIgBgBIgBgBIgCgCIgBgBQgKgIgOgFIAAgBIgggGIgBgBIAAgBIABAAIABAAIACAAIAEAAIAAAAIABAAIAbAFIAIABIABAAIAAgBIAAAAIACAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIgFgBIgCgBIgJgDIgDAAIgDgBIgCgBIgIgBIgFAAIgEgBIgFgBIgBAAIgEAAIAAAAIgBAAIgIgBIAAgBIgEgBIgBAAIgFAAIgBAAIgBAAIgBAAIgCAAIgBAAIgBAAQgEABgCgDIAAAAIgBgBQAQgEARABIAOABQACAAACgCIgCgBIgDgBIgDgBIgBAAIgJgEIgEgBIgSgGIgBAAIgDgBIABgCIABAAIACAAIABgBIAAAAIAHABIABAAIAIAAIAIAAIABAAIAAAAQAEAAAAgDIAAgBIgBAAIgEgCIgEgBIgFgBIAAgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABgCIAAAAIADgBIABAAIADAAIABAAIABAAIANACIABAAQAGACAFAAIABAAIAMAEIAAABIAFABIAAAAIAKAJIAAABIAQAPIAAABIAAABIABAAQAFADADAFIAAABIABABIAAABIACABIgBABIAAABIAAABIAAAAIAAABIAAABIgBABIAAABIgBABIAAAAIgBABIgBABIgBABIgBACIgCACIgBABIgCACIgCAHIgBABIgBABIgBgBgAgNgmIABADQAYAOARgCQgSgLgYgGIAAACg");
	this.shape_117.setTransform(19.6,5.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#CBF2EA").s().p("AgMAGIgLgHIgCAAIABgEQAWAAATAEQAKADgCABIgIgBQgMgCgLABIAAAAIgCAAIgBABQAAAAgBABQAAABAAAAQAAABAAAAQABABAAAAIgDAAg");
	this.shape_118.setTransform(18.1,10);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF6600").s().p("AgRAiQgSAAgFgFIAAAAQAHgBAJAAIAOADQAJAAAFACQgGACgGAAIgJgBgAAkAHIAAgBIAAABgAAjAHIgEgBIAFABgAAiACIAFACIAAAAIgFgCgAAAAAIgBAAIABAAIAAAAgAABgdIgBgDIAAgCQAYAGARALIgEAAQgPAAgVgMg");
	this.shape_119.setTransform(18.4,4.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgaAwIACgBIABAAQANgCAKADIgLgBIgHAFIgIABQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBgAAMAxIgDAAQABgBgJgEQgUgEgVAAIAAgBQACgDAEgBIABAAIAAAAQgCgCgEgCIgSgEIAAAAQgBAAAAgBQAAAAgBgBQAAAAABgBQAAgBAAAAQAAgEADgBQAKgCAKABIAJABIAIACIABAAIAHgBQgDgCgEAAIgCAAIAAAAIgGgCIgJgDIAAAAIgBAAIAAgBIgHAAIAAAAQgHgBgDgCQACgEAIAAIACAAIADABIAIACIAFABIABAAQAdAIAcAJIAAABIAAABIABAAIAAAAIAAAAIACABIgCACIgCABIgIACIgCABIgBACIgHAFIAAACIAAABIgBACQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAgAg2AXIAAABQAFAEASAAQALACALgDQgGgCgIAAIgPgDIgGAAIgKABgAAqAZIgCgCIgBgBIgBgBIgBgBIgCgCIgBAAQgJgJgOgFIAAgBIgggHIgBAAIABgBIABgEIATABIgKgBIgEgBIgFgBIgCAAIgDAAIAAAAIgCAAIgHgCIAAAAIgEgBIgBAAIgFAAIgBAAIgBAAIgDAAIgBAAIgBAAQgDAAgCgCIAAAAIgBgBQAQgEARACIANAAIAEgCIgCgCIgDgBIgDgBIgBAAIgJgDIgEgBIgSgGIgBAAIgCgBIABgBIABAAIACgBIABAAIABgBIAHABIABAAIAIAAIAIAAIAAABIAAAAQAEgCAAgDIgBAAIgBAAIgFgCIgEgBIgEgBIgBgCQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIABgBIABAAIAEgBIAAAAIAEAAIABgBQAGADAHABIABAAIALABIABABIALADIABABIAEABIAAAAIAKAKIAAAAIAPAQIAAAAIAAABIABAAQAFAEADAEIAAABIABABIAAACIACABIgCABIAAABIAAAAIgBAAIABABIAAABIgBABIAAACIgBABIgBAAIgBAAIgBACIgBABIgBABIgBACIgBACIgCACIgBAHIgBABIgCABIgBgBgAAWABIAAAAIABAAIAAAAIgBAAIgFgBIAFABgAAZgBIAAAAIgFgBIAFABgAgNgFIABAAIgCAAIABAAgAgNglIABACQAXAPARgDQgSgLgXgGIAAADg");
	this.shape_120.setTransform(19.7,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_35,p:{scaleX:1,x:18.7}},{t:this.shape_34,p:{scaleX:1,x:17.7}}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_35,p:{scaleX:1.095,x:18}},{t:this.shape_34,p:{scaleX:1.095,x:17}}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,0,50.2,29.1);


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
		
		 window.open ("adjective_Scene6.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adjective_Scene4.html","_self");
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


(lib.twigs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// actions
	this.instance = new lib.TwiggsHair();
	this.instance.parent = this;
	this.instance.setTransform(16.3,-69.2,1,1,0,0,0,24.7,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwAGQAAgJAHABQAJAAAAAIIgBAEQgCADgEAAQgJABAAgIgAAegBQAAgHAEgCQABgDAFAAQAGAAADAJIAAACQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAIgCACQgCAEgEAAQgJAAAAgHg");
	this.shape.setTransform(26,-68.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwAEQAAgIAHAAQAJAAAAAIIgBAFQgCADgEAAQgJAAAAgIgAAegDQAAgGAEgCQAPAGAAABIgEAFQgCADgEAAQgJAAAAgHg");
	this.shape_1.setTransform(25.8,-68.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvAFQgBgJAHAAQAKAAgBAIIgBAEQgCAEgEAAQgJAAABgHgAAegDQABgHAEgBQANAFAAADQgDADgBAAQgCAEgDAAQgJAAAAgHg");
	this.shape_2.setTransform(25.7,-68);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwAEQAAgIAHAAQAJAAAAAIIgBAEQgCAEgEAAQgJAAAAgIgAAegDQAAgHAFgBQAOAFgBACIgDAFQgCADgEAAQgJAAAAgHg");
	this.shape_3.setTransform(25.6,-67.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvAFQAAgJAGAAQAKAAAAAIIgCAFQgCADgEAAQgIAAAAgHgAAfgCQAAgIAEgBQAOAEgBADIgDAFQgCADgEAAQgIAAAAgGg");
	this.shape_4.setTransform(25.4,-67.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgvAFQAAgJAGAAQAKAAAAAIIgCAFQgCADgEAAQgIAAAAgHgAAfgCQAAgIAFgBQANAEgBAEQgCAEgBAAQgCADgEAAQgIAAAAgGg");
	this.shape_5.setTransform(25.3,-67.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgvAFQAAgJAGAAQAKAAAAAIIgCAFQgCADgEAAQgIAAAAgHgAAfgCQAAgJAFAAQAMADAAAEIgDAFQgCADgEAAQgIAAAAgGg");
	this.shape_6.setTransform(25.2,-67.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgvAFQAAgJAGAAQAKAAAAAIIgCAFQgCADgEAAQgIAAAAgHgAAfgCQAAgJAFAAQAMACAAAFIgDAGQgCACgEAAQgIAAAAgGg");
	this.shape_7.setTransform(25,-67.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgvAFQAAgJAGAAQAKAAAAAIIgCAFQgCADgEAAQgIAAAAgHgAAfgCQAAgJAFAAQAMACAAAGIgDAFQgCACgEAAQgIAAAAgGg");
	this.shape_8.setTransform(24.9,-67.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgvAFQAAgIAGAAQAKgBAAAJIgCAEQgCAEgEAAQgIAAAAgIgAAfgCQAAgJAFAAQAMABAAAHQgDAFgBAAQgCACgDABQgIAAAAgHg");
	this.shape_9.setTransform(24.8,-67.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvAFQAAgIAGAAQAKgBAAAJIgCAEQgCADgEABQgIAAAAgIgAAfgCQAAgJAGgBQALACAAAHIgDAGQgCACgEAAQgIgBAAgGg");
	this.shape_10.setTransform(24.6,-67.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgvAFQAAgJAHABQAJAAAAAIIgBAEQgCADgEAAQgJABAAgIgAAfgCQAAgJAGAAQALAAAAAIIgDAFQgCADgDAAQgJAAAAgHg");
	this.shape_11.setTransform(24.5,-67);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvAFQAAgIAHAAQAJAAAAAIIgBAEQgCAEgEAAQgJAAAAgIgAAfgCQAAgJAHAAIACAAIABAAQAHgBAAAJQAAAFgDAAIAAAAQgCADgDAAQgJAAAAgHg");
	this.shape_12.setTransform(24.3,-66.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgvAFQAAgIAHAAQAJAAAAAIIgBAEQgCAEgEAAQgJAAAAgIgAAfgCQAAgJAHAAQAKAJgBACQgEAEgCABQgKAAAAgHg");
	this.shape_13.setTransform(24.3,-66.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgvAFQAAgIAHAAQAJAAAAAIIgBAEQgCAEgEAAQgJAAAAgIgAAfgCQAAgJAGAAQALAJgBACQgEAEgCABQgKAAAAgHg");
	this.shape_14.setTransform(24.3,-66.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgvAFQAAgIAHAAQAJAAAAAIIgBAEQgCAEgEAAQgJAAAAgIgAAfgBIAAgBQAAgJAGAAQALAJgBABQgEAFgDABQgJgBAAgFg");
	this.shape_15.setTransform(24.3,-66.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgvAFQAAgIAHAAQAJAAAAAIIgBAEQgCAEgEAAQgJAAAAgIgAAfgBIAAgBQAAgJAGAAQALAIgBACQgEAFgDABQgJgBAAgFg");
	this.shape_16.setTransform(24.3,-66.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgvAFQAAgIAHAAQAJAAAAAIIgBAEQgCAEgEAAQgJAAAAgIgAAfgBIAAgBQAAgJAGAAQALAIgBACQgDAGgEAAQgIgBgBgFg");
	this.shape_17.setTransform(24.3,-66.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgvAFQABgIAGAAQAKAAgBAIIgBAEQgCAEgEAAQgJAAAAgIgAAfgBIAAgBQABgJAFAAQALAIAAACQgEAFgDABQgJgBgBgFg");
	this.shape_18.setTransform(24.3,-66.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgvAFQABgIAGAAQAKAAgBAIIgBAEQgCAEgEAAQgJAAAAgIgAAfgBIAAgBQABgJAFAAQALAHAAADQgEAFgDABQgJgBgBgFg");
	this.shape_19.setTransform(24.3,-66.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgvAFQABgIAGAAQAKAAgBAIIgBAEQgCAEgEAAQgJAAAAgIgAAfgBIAAgBQABgIAFgBQALAHAAACQgEAHgEAAQgIgBgBgFg");
	this.shape_20.setTransform(24.3,-66.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgvAFQABgIAGAAQAKAAgBAIIgBAEQgCAEgEAAQgJAAAAgIgAAfgBIAAgBQAAgIAGgBQAKAHABACQgEAHgEAAQgIgBgBgFg");
	this.shape_21.setTransform(24.3,-66.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgvAFQABgIAGAAQAKAAgBAIIgBAEQgCAEgEAAQgJAAAAgIgAAfgCQABgJAGAAQAKgBAAAKIgCADQgCAEgEAAQgIAAgBgHg");
	this.shape_22.setTransform(24.3,-66.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgvAFQAAgJAHAAQAJAAAAAIIgBAFQgCADgEAAQgJAAAAgHgAAnAEQgHAAgBgGQAAgJAGgBIALAJIgDAGQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_23.setTransform(24.4,-66.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgvAFQABgJAGABQAKAAAAAIIgCAEQgCADgEAAQgIABgBgIgAAnAFQgHgBAAgGQgBgIAGgBIALAJIgEAFQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgCAAg");
	this.shape_24.setTransform(24.6,-67);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgvAFQAAgJAHAAQAJAAAAAIIgBAFQgCADgEABQgJgBAAgHgAAnAEQgHAAgBgGQAAgJAGgBIALAJIgDAGIgEABIgCAAg");
	this.shape_25.setTransform(24.7,-67);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgvAFQAAgJAHAAQAJABAAAHIgBAFQgCAEgEgBQgJABAAgIgAAnAEQgIAAAAgGQAAgJAGAAIAKAJIgDAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_26.setTransform(24.8,-67.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgvAFQAAgIAHAAQAJgBAAAJIgBAEQgCADgEABQgJAAAAgIgAAnAFQgIgBAAgGIAAAAQAAgJAGgBIALAJIgDAGIgEACIgCAAg");
	this.shape_27.setTransform(24.9,-67.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgvAFQAAgJAHAAQAJABAAAHIgBAFQgCAEgEgBQgJAAAAgHgAAnAEQgIAAAAgFIAAgBQAAgJAGgBIALAJIgDAFIgEACIgCAAg");
	this.shape_28.setTransform(25.1,-67.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgvAFQAAgIAHAAQAJgBAAAJIgBAEQgCAEgEAAQgJAAAAgIgAAnAFQgIgBAAgGIAAAAQAAgJAGAAQALAHAAACIgDAEQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABIgCAAg");
	this.shape_29.setTransform(25.2,-67.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgvAFQAAgJAHAAQAJABAAAHIgBAFQgCADgEAAQgJAAAAgHgAAnAEQgIAAAAgGIAAAAQAAgJAGgBQALAJAAAAIgDAFQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_30.setTransform(25.3,-67.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgvAFQAAgIAHAAQAJAAAAAIIgBAEQgDAEgDAAQgJAAAAgIgAAnAFQgHgBgBgFIAAgBQAAgJAGAAQALAHAAACIgDAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAABIgDAAg");
	this.shape_31.setTransform(25.5,-67.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgvAFQAAgJAGAAQAKAAAAAIIgCAFQgCADgEAAQgIAAAAgHgAAfgCIAAAAQAAgJAGgBIALAJIgDAFQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAIgCAAQgIABAAgHg");
	this.shape_32.setTransform(25.6,-67.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgvAFQAAgJAGABQAKAAAAAIIgCAEQgCADgDAAQgJABAAgIgAAfgBIAAgBQAAgJAGAAIALAIIgDAFIgDACIgDABQgIgBAAgFg");
	this.shape_33.setTransform(25.7,-67.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgvAFQAAgJAGAAQAKAAAAAIIgCAFQgCADgEABQgIgBAAgHgAAfgCIAAAAQAAgJAGgBQALAIAAABIgDAFQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgDAAQgIABAAgHg");
	this.shape_34.setTransform(25.8,-67.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgvAFQAAgJAGAAQAKABAAAHIgCAFQgCAEgEgBQgIABAAgIgAAfgBIAAgBQAAgJAGAAQALAHAAABIgDAEQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgDAAQgIAAAAgFg");
	this.shape_35.setTransform(26,-67.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgvAFQAAgIAGAAQAKgBAAAJIgCAEQgCADgEABQgIAAAAgIgAAfgBIAAgBQAAgKAGAAQALAIAAABIgDAFIgDACIgDABQgIgBAAgFg");
	this.shape_36.setTransform(26.1,-67.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgvAFQAAgJAGAAQAKABAAAHIgCAFQgCAEgEgBQgIAAAAgHgAAfgBIAAgBQAAgKAGAAQALAIAAABIgDAEQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgDAAQgIABAAgGg");
	this.shape_37.setTransform(26.2,-67.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgvAFQAAgIAGAAQAKgBAAAJIgCAEQgCAEgEAAQgIAAAAgIgAAfgBIAAgBQAAgJAGAAQAMAGgBACIgDAEIgDADIgDABQgIgBAAgFg");
	this.shape_38.setTransform(26.3,-67.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgvAFQAAgJAGAAQAKABAAAHIgCAFQgCADgEAAQgIAAAAgHgAAfgBIAAgBQAAgKAGAAQALAIAAABIgDAEIgDADIgDAAQgIAAAAgFg");
	this.shape_39.setTransform(26.5,-67.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgvAFQgBgIAHAAQAKAAgBAIIgBAEQgCAEgEAAQgJAAABgIgAAegCQAAgJAHAAIAEAAIABAAQAGAAAAAFIgBAFIgCACIAAAAQgCADgEABQgJAAAAgHg");
	this.shape_40.setTransform(26.6,-67.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag6AFQAAgHAdAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAADgTgBQgDAAgDACIgEACgAAWAAIgDAAQAAgEAIgBIAfAAIABACQAAADgGgBIgbAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_41.setTransform(26.2,-67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},7).to({state:[{t:this.shape_40}]},2).wait(1));

	// Layer 4
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#33FF00").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgAiuCHIAAABIACgHIAAAAIgCAGgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIAAAAIADgZIAAgBIACgPIAEgUIgBgBIACgCIACgRIAAAAIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEIACgFQAAgMAEgNIABAAIAEgDQARgOAJgXIAAAAQAGgNgCgYIABAAIAAgEIAAgBIACgTIAAAAQAEAAACgBIABAAQADADAEAAIAAABQADACAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAAAAIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_42.setTransform(9.1,-17.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#30F500").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_43.setTransform(9.1,-17.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2CEB00").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_44.setTransform(9.1,-17.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#29E000").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_45.setTransform(9.1,-17.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#25D600").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_46.setTransform(9.1,-17.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#22CC00").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_47.setTransform(9.1,-17.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1FC200").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_48.setTransform(9.1,-17.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1BB800").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_49.setTransform(9.1,-17.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#18AD00").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_50.setTransform(9.1,-17.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#14A300").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_51.setTransform(9.1,-17.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#119900").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_52.setTransform(9.1,-17.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0E8F00").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_53.setTransform(9.1,-17.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0A8500").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_54.setTransform(9.1,-17.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#077A00").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_55.setTransform(9.1,-17.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#037000").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_56.setTransform(9.1,-17.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#006600").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgAiuCHIAAABIACgHIAAAAIgCAGgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIAAAAIADgZIAAgBIACgPIAEgUIgBgBIACgCIACgRIAAAAIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEIACgFQAAgMAEgNIABAAIAEgDQARgOAJgXIAAAAQAGgNgCgYIABAAIAAgEIAAgBIACgTIAAAAQAEAAACgBIABAAQADADAEAAIAAABQADACAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAAAAIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_57.setTransform(9.1,-17.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#066F06").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_58.setTransform(9.1,-17.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0C780C").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_59.setTransform(9.1,-17.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#128112").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_60.setTransform(9.1,-17.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#188A18").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_61.setTransform(9.1,-17.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1E931E").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_62.setTransform(9.1,-17.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#249C24").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_63.setTransform(9.1,-17.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2AA52A").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_64.setTransform(9.1,-17.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#30AE30").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_65.setTransform(9.1,-17.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#36B736").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_66.setTransform(9.1,-17.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3CC03C").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_67.setTransform(9.1,-17.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#42C942").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_68.setTransform(9.1,-17.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#48D248").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_69.setTransform(9.1,-17.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4EDB4E").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_70.setTransform(9.1,-17.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#54E454").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_71.setTransform(9.1,-17.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5AED5A").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_72.setTransform(9.1,-17.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#60F660").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_73.setTransform(9.1,-17.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#66FF66").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgAiuCHIAAABIACgHIAAAAIgCAGgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIAAAAIADgZIAAgBIACgPIAEgUIgBgBIACgCIACgRIAAAAIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEIACgFQAAgMAEgNIABAAIAEgDQARgOAJgXIAAAAQAGgNgCgYIABAAIAAgEIAAgBIACgTIAAAAQAEAAACgBIABAAQADADAEAAIAAABQADACAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAAAAIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_74.setTransform(9.1,-17.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#63FF60").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_75.setTransform(9.1,-17.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#60FF5A").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_76.setTransform(9.1,-17.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5DFF54").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_77.setTransform(9.1,-17.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#5AFF4E").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_78.setTransform(9.1,-17.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#57FF48").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_79.setTransform(9.1,-17.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#54FF42").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_80.setTransform(9.1,-17.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#51FF3C").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_81.setTransform(9.1,-17.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4EFF36").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_82.setTransform(9.1,-17.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4BFF30").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_83.setTransform(9.1,-17.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#48FF2A").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_84.setTransform(9.1,-17.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#45FF24").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_85.setTransform(9.1,-17.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#42FF1E").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_86.setTransform(9.1,-17.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3FFF18").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_87.setTransform(9.1,-17.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3CFF12").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_88.setTransform(9.1,-17.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#39FF0C").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_89.setTransform(9.1,-17.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#36FF06").s().p("AANEpQgCgEABgFIABgBQgEgCAAgFIgBAAIAAgBIAAgCQgIgLgGgOIgBAAIAAgBQgNgcgSgYIAAAAIAAAAIAAgBIgDgCIAAgBIAAAAIAAgDQgGgEACgEIAAgBQAAgDgEAAIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgEABgBgFIgBAAIAAgBIAAgDQgGgEgBgIIAAAAQABgFgGABIgBAAIgIgIIAAAAIAAgBIAAgBQgFgGgGgEIAAAAIAAgBIAAgBIgTgTIgBAAIgEgNIAAgBQgFAAgBgEIgBAAIAAAAQgDgCgEABIgBAAIgJAFIAAAAIgCACQgBADgEADIAAABIACgBIgHAKQgEAJgCAJIgEAIQgEAIgGAHIgDAAIAAAAIgBAAIgBAAQgGANABgRIAAgBIAAgBQAAgIADgGIAAgBQABgCAAgEIAAAAIABAAIACgBQAIgWAOgUIAGAAQABgFAFgDQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIACgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFAHABgIIAAgBIAAgCIAAAAIABgCQABgEACAEIABABIAAAAQADABACgCIAEgDIABAAQAEABADACIABABIAAAAQAQAWAZALIAAAAQAIAEAHAGIAAAAQAcANAaAPIAAAAQANAJARAEIAAABQAFABADAEIABAAIAHABIAAAAIAFAEIAAABIAYAEIAAAAQAIABABAGIAAAAIAAABQgEAHAGAGIAAADIAAABIgEADIgBABIgGABIgBAAQgBAFgFABIgBAAQgEAGgGAFIAAAAQgFAKgIAHIgBAAIgCAGIAAABIgVAhIAAAAQAAAEgBACIAAAAQgFAFgCAHIgBABQgGACAAAHgABFBkIgBgBIAAAAIAAgBQgCgDgEgBIAAAAIgCgCQgKgCgIgEIgEgCIgFgDIgXgPIAAAAIgBgCQgJgIgMgFIgCAAIAAgBIAAgEIgBAAQgLgJgJgLIAAAAQgEgSAIgNIADgaIACgPIAEgUIADgUIAKAKIAAAAIAAABIABACQAEADADAGIABACIAAABQAWAUAMAeIACAAIALAPIANAPQANAPAMAQIAAABQgBAIABAFIABABIgDAKIAAABQAEAHgGAJQAAAHgEADIgCAAIgGgCgABvgOIgEgDIgCAAIgBgBIAAgBIgBAAIgBAAIgagcIgFgDQgHgFgDgIIgCgEQgDgCgCgEIgJgIQgZgagPghIgJgJIAAgBIAAgIIAAgBIAAgBIABgEQACgRAEgNQAWgRAJgXQAGgNgCgYIADgYIAHgBQADADAEAAQADADAAAGQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAEAEIAAABQAJAQAHAQIAAABIAJAaIAHAUIAAABIABAAIAAABQADAOAFANIAAAAIAAABIAAABQAAAFACACIAAAEIAAABIAAAAQgBAFACAGIAAAAQAJgEAGgHIAAAAIAJgQIAAAAQAJgQAEgWIAAAAIACgFQgGgQAKgMIgCgFQgBgGADgEIAAgCIgFgGIgBgEIADgFIABgCIAIAAIAAAAIACABQAGAJADAKQABAGAAAIIAAABIgCAZIAAAGIgBABIgEAbIADAIIAAABIADAWIAAABIAAABIABAHIABgHIAAAAIADAOIAAADIAAABIAAABQgCAEADAEIAAAAIAAABIABADIADANIAAAEIAAABIgBAQIAAABQgDAEAAAHIAAABIgJAMIAAAAQgDAGgDgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgEAEgDgBIgBAAIAAgBQgDAAgDAEIAAAAQgFAAgFABIgBAAIgDACQgDgDgEgCIgGgBIgHAAIgBAAIgCgBIgCAAQgBAGgEACIAGACIAHACIAHACIAIACIgFABIABAAIABACIAAADIAAACIgBABIgFAHIgGAFIgCAFg");
	this.shape_90.setTransform(9.1,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42}]}).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_42}]},1).wait(1));

	// Layer 1
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgoAdIAAAAIAAgBQgQgCgJgJIAAgBIABAAIgDgEIgDgFIgCgBIAAAAIgCgHIAAgBQgBgIABgIQAHgDAHAAQAegCARAQIABABQAHAFgGAFIAAAEIgCAJIgDAMQgFgDgEAHIgBABQgGgDgIgCgAg6ANIABAAIAAgBIgBABgAA0ARIgBAAQgFgEgJABIgFAAQgIAAgFgCIgEgCQgIgDgEgHIAIACIADABIgBgCQgDgEAAgCQAAgEAEgGIAAAAIABgDQADgKAKgEQASgCAHAJIAOAUIABAAIADAFIAAABIAFAJQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIAAAAQgJADgKAAIgDAAg");
	this.shape_91.setTransform(25.8,-68);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF6600").s().p("AhrAvQgDgJACgIIAAAAQACAEADADIAAACQAAAGgEADgAhfAsIgDgDQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIABgBQABgEAFAGIAAAAQAAAEgEgDQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAIgBAAgAhPAkQgFgGAAgJQAAgKACgHIABAAQADgGADACQgCAHAAAIIAAABIgCAUgAhHAjIAAgBIgBgHIAAgBIAAgBIAAgBQgBgNAEgLIABgGQAAgDACgDIABAAIACgCIABAAIABAAQgEAUAEAVIAAAAQgBAIgHAAIgCAAgAg1AeQgDgOAAgSIABgGIAAAAQACgFADgFIABgBQABAJgCAGIAAAAIADAVIAAABIACAGIABAAIAAABIgBAAQgCAEgGABgAgoAPIgBgJQgCgMACgOIADgHIAAgBIAGgDIABAAIAAgBIABAAIAIgEIABAAIADABQgDAJgCANIAAAAIgCADIAAAAQgEAEgCAGIAAAAQABANgCAJIgBABQgGgBgBgHgAhnAQIABgDIAAABIgBADIAAgBgAhfAKQADgCABgEIACgBIgBAFIAAABIgDADIgCgCgAhBgSIAEgCIgCADIgBAAIgBgBgABrgZIgDgBIgFgBIAAAAIALABIgDABIAAAAgAgVgnIgBgBIAFgBIgCACIAAAAIgCAAgAgHgsIAHgDIAJABQgCACgFAAIgJABg");
	this.shape_92.setTransform(20.2,-69.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFCC99").s().p("AitOiIgBAAIAAAAQgMgEgHgHIgBgBQgCgFABgEIAAAAIADgEIACgFIABAAQAEgBADgCIABgBIABAAIADAAQALgBALAEIAAABIAEADIAAABIAAAAIAAABIABAAQADADAAAFIgBAHIgGAFQgJgKADAOIAAABIgHABIgGgBgAjQOVIAAgBIAAAAIAAAAQgFgFgFABIgBAAQgIgDAAgGIAAAAIABgBIAEgDIABAAIAIgCIADgBIABAAIACAAIABABQAEABACACQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIAAABIgBAAQgBACgBAFIABAEgAjxOJIACgNIAAAAIAAgBIAAgBIAAgEIAAgCIAAgBIgCgEIgBgDIAAgBIgBAAIAAgBIAAAAIgBgBIAAAAIgBgCIAAABIgBAAIgBAEIgBADIgBACIAAABIgBABIAAAAIgBAEIgBAAQgDAGAGAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAABIAAAAIgBABQgEAEgFABIgGABQgEgDAEgGIANgQIAAgBIABgBIABgCIAAgBIACgEIACgDIAAAAIACgDIAEgGIAAgBIAGgKQABgBAAgBQABAAAAgBQABAAAAAAQAAABABAAIAAABQAHgHAHgLIAAgBIAAAAQADgMAGgJIAAgBIADgIQACgEADgCIABAAIAIgFIAAgBIAHgLIAAAAIAEgNQAEgCADgDQAEgMABgQIAJhXIABAAIACgdIAAAAQABgOAAgQIAAAAQgBgNADgJQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgIABgIQADgWABgZIAAAAQADgPAAgMQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgVAIgQIABgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAAAAIAAgRIADgUQADgWAMgMIAAgBIABAAQAQgSAKgWIABgBIABgCQADgHABgIIAAgCQgDgNgHgEIAAAAIAAgBIAAgBQgHgKgEgNIAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAgBIAAgBQgNgegLghIAAgBIAAAAIgEgJIgFgOIgCgCIAAgBIgEgHIAAAAIgBgDIgCgBQgGgIgCgOIgBgKIgDgDIgDgIIgBgBQABgDgBgCIAAAAQAAAAABAAQABAAAAgBQAAAAABAAQAAAAAAgBIgBgDQgBgEgEgCIAAAAQgFgNABgKQgJgcgLgcQgNgggHgjIgBgCIgBgEIgEgLIgFgIIAAgBIgBgNIgBgBIgEgIIAAAAIgHgXIAAAAIAAgBIgEgJQgEghALgYIAAgBIAJgQIABAAIABgCIABAAIABAAIAAgBQADgIAGgHIAAAAIAFgLIABAAIADgDIABgBIAHgFIABgBIAJgBIAAABIAaAcIABABQACAEAEACIAAABQALAUAOASIABABQAHAOALALIAEAHIABABIABAAQAMASAKATIADAHIAAADIABAAQAGABADAGQAMAXAFAZIAAgBIAAgIIAAgBIACgEQAKgcAOgZIAAAAQAQggAZgXIADgBIABgBQAHAAgDAMIAAABQAEABABAEQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABIACAFQAGAPACATIABAAQAJATADAVIAGAuQABA2AFA1QAEAjgCAiIADADIAAABQgBAXABAVIAAAMIAAAAQgDAggHAbIgHAkIgDAZIgIA1IgCABIABACIABAAIgHA+QgBAKABAOQgFAfACAeIAAAAIABABIABAAIACAsIAAAAIAAAFQABAqgDApIgBAJIAAABIAAAJIACAGIAAAAQAGANAIAKQAEAHAHADQAMADAKAFQALAFAKAHQAKAHAMAGQAGADAHACIASAHIACABQAJACAEAFIAHAEIAAABQAMAFAPAEIAAAAIAJAEQgGADgHABIAAABIgBAAQgHACgDAHIABAAQAFAEAIABIABAAQADAEgEgBIgBAAQACAGAFAGIAAAAQAFADADADQgFAFgHgFIAAAAQgEAEgJAAIgBAAQgKgEgLgDIgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBgBIAAAAIgSgBQgHAAgFgDQgFgDgGgCIAAgBIgCgDQgdgEgbgMIgsgUQgOgGgFgOIgCgBIgBAAIAAgBIgHgBIgBAAIgFgFIAAAAQAAgLAEgLIAAAAIAAgBQACgFAFgBQgDgFgBgIIAAgBIgBgFIAAgIIABgCIAAgBIAAgDIgCgTIAAgBIAAgeIgBAAIAAAAIAAgKQAAgGgDgDIgBAAQgEgJAAgPIAAgBIAAgBIABg2QgCgHABgJIAAgBIAAAAIABgTQgCgIAAgKIAAAAIAAgBIAAgMQgEgZgBgbIgBAAIAAgBIgDgtIAAgBIAAAAQADgGAAgJIgEgBIAAAAIABgBQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIAAAEIAAABIABAAIACgOQgDgCAAAHQgBAFgEABQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIABAAIAHgeIAAgBIAAgEIAAgBIAFgRIAAAAQAEgDABgFQABgGAAgHIgBAAIAAgBQACgVAAgXIAAgBIAAgMQgCgHABgJIAAgBIAAAAIgBgNIAAAAIABgFQABgDAAgHIAAgBIAAgIQgCgEAAgHIAAgFIgBAAIAAAAIAAgDIgEgUIAAgBIAAgGIgFgcIAAgBIAAgBIAAgBIgShuIAAAAIgCgJQgCgOgHgKIADAQIAOB0IACALQAIAdACAeIAAAOIAFAYQgCAEABADIABAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAAAIAAABIACAZQgCALABAOQAAANgBAMIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIgBAMIAAABIgBAAIgEAPIAAAAIgBAIIAAACIAAABIAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQgDAWgHATIgEAOIghBpQgCAGAAAIQgBAAAAAAQgBABAAAAQAAABAAABQAAAAAAABIgBAAIgFARIAAABIAAABIgBAEIAAABIAAABIgBABIAAAAIgEAOIAAABIgGAKIgBABQAAAHgCAIQgCAIgEAGQAEgPACgNIgBAAQgBACABAEIAAABQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABIgBAAQAAAMgEAIIAAABIgFAPQgFAPgDASIgBABQgGAPgEASIAAABIgKA0IAAABIAAABIAAAEIgBAAQgBAEAAAFIAAABIgBABIAAAAQgEAGACAJIAAABIAEAAIAAAAQgDASAAAUQAHAPgFAVQgDAMAHAFQACAggCAcQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABIgBAAIgFgCIgBgBIAAAAQgDgEgGgBIgBAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQgJgCgLAAIgBAAIgKAGIgBABIgIgEIAAgBQgFgCgIAAIgBAAIgBAAIgBABIAAAAIgCAAIgDABIgEACIgBABIgBABIgBAAIAAABIgBAAIgBABIgBABIgFAIgAgFKlQgBALACAIIABACQADAMAHgIIgCgHIgBgDIAAAAIgBgFIAAgBQAGAHAAgMIgDgHIAAAAQAAgBAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIgFgBQgEAAgBAHgAjsh/IAAABQgBAEACABIAAABIADADIAAgDIgBgBQgDgCAAgEgADFABIgBAAIAAgBIAAgZIABAAIAAgJIACgeQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgBIAAAAIAAgHIAAgHIAAgCIAAAAIABgbIAAgCIAAgDQgFgDgIAAIAAAAIgEAAIAAAAIgQgHIgBAAIgIgFIgGgEIgBAAIAAgBQgHgFgEgHIAAAAQAEgBgFgFQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgBQgFgCgCgFIgBAAIAAgBIAAgBQgIgHgLgDIgTgIIgBAAIgHgBIgBAAIgBAAIgBAAIgBAAIgBgBIgBAAIAAgBIgTgGIgBgBIABAAIgBAAIAAAAIgBAAIgBgBIAAAAIgEgBIAAAAIgGgCIgegMIgJgCIgBAAQgJgBgHgEIgEgCIgCgBIAAAAIgBgBIAAAAIAAgBQgFgEgHABIAAAAQgGgEgHgBIgBAAIgDgBIAAAAIgHgEIAAgBQgYgKgWgMQgXgMgPgVIgJgGIgBAAIgIgGIgBAAIgDgDIgCgDIgBgBIABAAIAAgCQgKgQADgVQAEgagBgbQgBg6ATg1IAHAAIAAAAIACABIABACIABABIABAEIABgDIABAAIATASIAAAAIAEAEIABABIACAGIAAABIAKAJIAAAGIgBAAIAAADIgFAjIAAABQgBAEAAAFIAAABQgDAGAAAKIAAABQgDAHAAALIAAAAIgBAAQgDATgFARIAAAAQACAFAAAHIAAAAIAJAJQAHADAGAFQAGAEAIADIAAAAQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIAAABIABABQAMAIAPAFIAAAAIAPALIAAABQAEAEAGABIABAAIACACIACABIAAABIACAAIAHACIAAABIAHAGIABAAQADAAACACIAAABIAAAAQAEACABAFIAAAAIABAAQAEACABACQAGgBACADQAGAHAHADQABgFAEADIASAJIAAAAIACABIABABIADADIABAAIADACIABABIAAAAIABAAIAAABIABAAIACABIACABIABAAIAAABQAJAFALADIAAABIADACIABAAIATAKIAVAKIAAAAQAHAEAIgBIAEAAIACABQAHAGALABIAAABIAMAHIARAKIAAAAIAqAVIABABIAVAJIAAAAIAEAJIAHASIAAAAIADAIIADAHIADAHIADAHIANAhQgBAAAAAAQAAABgBAAQAAAAAAgBQgBAAAAAAIAAAAIAAgBQgHgJgGgKIgBgEIAAgBIgEgHIAAgBIgCgEIgEgHIgBgCIgBgDIgBAAIAAgBIAAgBIAAAAQgCgCAAgFIAAgBIgLgQIAAgBIAAgBQgDgIgIACIAAABIABAIIAAADIAAABIAAABIAAAAQAAAOACANIABADIAAAFIAAAAIABABIAAABIAAACIgBABIAAABIAAABIAAAAIAAABIAAABIABACIAAACIACAFIAAAAIAAAHIABADIAAACIAAAAQAAAEgBADIAAgBIgBAAIAAgBIAAgBIgBgDIAAgBIgBgFIAAgBIgCgGIgBgDIgBgCIAAgCIAAAAIAAgBIAAgBIgBAAIAAgBIAAgBIAAgDIAAgBIgBgBIgBgFIgBgDIgEgRIgBAAIAAgLIgBgDIgCgIIgCAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABIAAABIAAAHIAAACIAAAAIAAABIAAAlIAAAEIAAABIAAADIAAABIAAABIAAABIgBAFIAAAFIAAADIAAADIgBACIAAACIAAABIAAABIgCAIIgBAAIgBgDIAAAAIAAgBIAAAAIgBgDIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgCIgBgDIAAgCIAAgCIAAgEIAAgBIAAAAIAAgHIAAAAIgBgBIAAgEQgDgTgBgTIAAgBIAAgCIAAgFQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgEABgCADIAAABIAAAAIgCAPIAAABIgCAZIgBAEIgBAaIgBAJIAAAAIgEAeIAAABIgCACQgCAAAAgHgACBjrIAAgCQgFgDgDAFIAAAAQgNgBgIgJIgFgFQgXgSgWgVIAAgBIAAAAIgMgNIgFgJIAAAAIgCgDIgBAAIAAgBIAAAAQgJgLgHgNIAAAAQgGgCgFgHQgLgRgPgRIAAAAQgGgLgIgIIAAgBIgEgBIAAAAIgCgFIgBAAQgFgCABgFIAAAAQgCgDgEAAIAAAAIAAgBQgEgBgBgFIAAAAQgFgFAAgHIAAgBQgEgHgGgHIgBAAIAAgBQgEgEgCgFIAAgBQgKgKgIgLIgEgFIgDgCIgCgGIAAgBIgDgDIgDgDIgBAAIAAgBIAAgBQgHgHgGgIIgCgDQgDgCgDAAIgBAAQgGAEgKgCQgBgBAAABQAAAAAAAAQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQgYAEgSgLIAAAAIAAgBIgGgDIgBgBIgBgDQAAgBgBAAQgBAAAAAAQAAAAgBABQAAAAAAABQgGAKACAOIAAAAQgLABgHgDIAAAAQgDgGABgJIgBAAQgEgIABgIQAOgCARAAIAdABQAJABAFgGIABgBIAAAAIgCAAIAAgBQgdgHghAGQgKABgIgBIgBAAQgBgJAHgCIAAAAIA0gCQAJAAAFACIAAABIAAAAIAEABIACgEIAAAAIgIgIQgLgDgNABIgNABQgMACgJgCQABgEADgCIAAAAQAXgEAWAEQgIgEgIgCQgHgCgFgEQgaABgZACQgNAAgKAIIgIAAIgBAAQgDgCgBgDIAAAAIAAgBQgBAAAAgBQgBAAAAgBQAAgBABAAQAAgBABAAIAAgBIABAAQAFgIAJgDIAHgCIACAAIACgBIABAAIAegCIABgBIADAAQAFgBADADIATgBIAAAAIAIAAIAMAFQAPAIAOALIAQAHQAIAEAGAFIAAABIABAAIAAABIAkApIAAABIACAFIABAAIAEAEIAWAZIABABIAAABQAUAUASAWIAAAAIAGAIQAQAWARATIAAABIADAEIABABIAJAIIABAAIAAAAIABAAIAAABIABACQAMAKAKAMQAHACAEAHIAJAMQAPANASAMQACACAAADIACADIABABIACAAIACABIgBgLIgBAAIAAgBQgDgFADgBIgBgFIgBgCIgBgJIAAgJIABgDIAAgOQgBgOACgPIABgJIAAgBQAAgMACgMIgBgCIABgBIAGgIIACgBIAAgCQABgfgCgeIgBgFIgDgMIgFgRIAAAAIgJhQQAAgHgCgHQACgDgBgEIAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABAAQAHgDAJACIAAAAQANgEAPACIAAABQAHADADAGIAAABQAGALADAOIAAABIAFA9IAAAAIABAXQACAKAAALQAGAigFAiIAAAEIAAABQABAbgDAcIgDAqIgDAZIgCAQIgGAbQgDANgGAKQgHADgFAAIgGgBgAhImuIABAAIAAAAgAhZoSIAAgBQgHgEgGgGIAAAAIgCgBIAAAAIAAgBQgMgNgLgPIAAgBIgBAAQgEgFAAgJIAEgNIADgPIAHgaQAIgaAMgVIABAAIAFgDIABAAIAGAAIAAABQAKAAAGADQAFACADADQAFAEADAHIAAABQAIACAEAFQAAARgCARIAAABQgFAQgIAOQgHANgMAKQgCAIgEAGIAAABQgDAIACAMQABAKgEAAIgEgBgAAsoUQgDgEADgFIAAgBIgGgMIAAAAIAAgBIAAgDQgJgTgGgXIAAgBIgDgDQgKgfgNgaQgDgFADgEIAAAAQADgEAEgCIAAgBIAKgeIAEgJIAFgOIABAAQATAIAVAGIAIACIAFABIgCAGIgEATIgBABIgEAQIAAAAIADAHIAAABIAAABIACAEQAAAJgDAFIgBADIAAABQAEABABAGIAAAGQgFAqgMAhIgFALIAAABIgGAJgABirOIAAgBQgOAAgNgCIgBAAIAAAAQgVgFgSgKIAAAAIgIgBIgDgCIgBAAQgCgGgIAAQgEgBgBgFQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAgBQgDgCgCgFIAAAAQgIgDgFAEIAAAAIgFgCIgEADQgbAAgLgVQgLgJgJgPIAAAAIABgHIAAgBQgGgHAEgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIACABIABAAIADABIAAAAIAIABQAIACAGAGIABAAIAHABQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIABACQAFgDAEADIABAAIABAAIAAAAIAAgMIgBAAIgOgQIAAAAQALgHAQgDQADAIAEAGIACADQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABgBIgBgBIgBAAIAAgBIgEgOIABAAQAGgDAGACIABAAIAAACQABAGAFADIAAgBIAAgDIAAgBQAAgHAFgCIAAgBIAIAJIAAABQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAIAAAAIACACQALACAKAEQAGADAGAAIAMgCIABAAIACgBIAEgEIAAAAIACgCIABgEIADgMIABAAQAHgCADgHIAAAAQADAAABAGIAAAAQAJgDgCAMIAAABIADACIADABIACgBIAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAQALgDAKABIAAABIAFABIAAABQAAAFgCAFIAAAAIgCADIgCABIgEADIgEADIgCADIgBABIAAABIABAAIADAAQAGAAAFAEIAAAAQAJgBgGgGIACgEIABgEIAAgBIABgCIACgJQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQAAgBABAAQAAAAABABQAPACAJgEIABAAIAFALIABABQAEAMACAPIABAIIAAAFIAAABQgEAdgOARIAAABQgOANgSAIIAAAAIgKAEIAAABIgeAHIgBAAgAA7sPQAMAQAZADIAAAAQAIACAIAAQALABAGgCQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQASgIAJgRIgBAAIAAAAQAHgFADgIIABAAIAAgFQgGABgDAFIgCAEQgKATgUAJQgPACgOgCIgBgBIgVgGIAAAAIgFgGIgBAAIAAgBIAAAAQgGgFADgIIABgFIAAgCIgBAAIgGgDIAAAAQgDADgCAEIAAABIABAAQACgHAGACIAAAAIgBAAQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAABABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCADgDABQACAEgDADQgFAEAAAFIAAAAIALgFgABns6QAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQAFACAAgGIgFgCIgBAAgABzs/IABAEIAAABIACAAQACgCABgEIgDAAIgDABgACntDIAAAAIgBADIACACQAHACABgJIAAAAQgDgEgCAAQgDAAgBAGgABTtIQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIABACIABACIABAAIAAAAIACgBIABgCIAAgCIgBAAIgDgBIgBAAgABftJIAAABIAAAAIAAACIACABQADACACgCQACgBAAgEIAAgBIgBAAQgCgDgCAAQgDAAgBAFgABWtzIgGgFIgBgBIgDgDQgNgNgbgBQgJgBgGAEQAAgMAHgKIAAgBIAAAAQAFABACgCIACgBQgGADgDAGIAAABQgCAGAGgCIAAgBQgBgIALAAIABAAIAAgBIACAAIABAAQAIgBADAFIABAAIACAAIAAgBQAEgBAHABIAAAAIADACIABAAIAFAAIABABIAMAFIAFAAQAHABABgEIgBAAIAAgBIgCAAIgNgEIAAAAQgLgBgLgCQgEgBAAgCQAEgEAIABIABAAIAAAAQARADAPAFIABABIABAAIADABIAAAAQAGACADAEQgDADgFACIAAABIgHABIgBAAIgHAHIAAAAIgDASIAAAAIgDAAQgFAAgDgBg");
	this.shape_93.setTransform(16.4,19.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AjLOTIgBAAIAAgFQAAgEACgDIAAAAIABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBgBAAQgCgDgDgBIgBAAIgDAAIAAAAIgDAAIgJACIAAAAIgFAEIAAAAIgBAAQABAHAHACIABAAQAGAAAEAEIAAABIABAAIAAAAQADAJgOgDIAAAAQgKgGgGgJIAAgBIAEgIIABgBIABgBIABgBIAAAAIABgBIACgBIABAAIADgCIAEgBIACgBIAAAAIABAAIABAAIABAAQAIgBAFADIAAABIAHADIABAAIALgGIABAAQALgBAJADQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIABAAQAHAAACAEIAAABIABAAIAGACIAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQACgdgCgfQgHgFADgNQAFgUgHgPQAAgVADgRIAAgBIgEAAIgBAAQgBgJAEgGIAAgBIABAAIAAgBQgBgFACgEIAAAAIABgFIAAAAIAAgCIAKgzIAAgBQAEgSAGgQIAAAAQAEgSAFgQIAFgOIAAgBQAEgJAAgLIAAAAQABgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAAgBQgBgEABgCIABAAQgCANgEAPQAEgGACgIQACgHAAgIIABAAIAGgKIAAgBIADgOIABAAIAAgCIABAAIAAgBIAAgFIAAAAIABgBIAFgRIABAAQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgHACgGIAhhqIAEgOQAHgSADgWQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAAAIAAgBIAAgBIABgJIAAAAIAEgPIAAAAIAAgBIABgLQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAAgBQACgLgBgOQAAgOACgLIgCgZIgBgBIABAAQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIAAgBQgBgDABgDIgEgZIAAgNQgCgegIgeIgCgKIgOh0IgDgQQAHAKACAOIACAJIAAAAIASBtIAAACIAAABIAAAAIAEAdIAAAFIAAABIAFAUIAAADIAAABIAAAAIAAAEQAAAHACAEIAAAJIAAAAQABAIgCACIgBAFIAAABIABAMIAAABIAAABQAAAIABAHIAAAMIAAABQABAYgCAVIAAAAIAAAAQABAIgCAFQgBAFgDAEIgBAAIgEARIAAABIAAADIAAABIgIAeIAAAAIAAABQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAEgBABgEQAAgHACABIgBAOIgBAAIAAAAIAAgEQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAgBAAIAAAAIAAABIAEABQAAAIgDAHIgBAAIAAABIAEAsIAAABIABAAQABAcADAYIAAANIAAAAIABAAQAAALABAIIgBASIAAABIAAABQAAAIABAHIgBA3IAAAAIAAABQABAQAEAIIABABQADACAAAHIAAAJIAAABIAAAAIABAeIAAABIACASIAAAEIAAABIgBACIAAAIIABAEIAAABQAAAIAEAFQgFACgCAFIgBAAIAAABQgDAKAAALIAAABIAFAFIAAAAIAHABIAAAAIABAAIADACQAFANAOAGIAsAUQAbAMAdAFIABADIAAABQAHACAEADQAGACAHABIASAAIAAABIABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABAAQAMACAKAEIABAAQAJAAADgDIABAAQAHAEAFgEQgDgEgFgCIAAgBQgFgFgCgHIABAAQAEACgEgFIAAAAQgIgBgFgDIgBgBQADgHAHgCIABAAIAAAAQAHgBAGgDIgJgFIgBAAQgOgDgNgGIAAAAIgGgEQgEgFgJgDIgCAAIgSgHQgIgCgFgEQgMgGgKgHQgKgGgLgFQgLgFgMgEQgGgCgEgHQgIgLgGgMIAAgBIgCgGIAAgJIAAAAIAAgJQADgqAAgpIgBgFIAAgBIgCgsIAAAAIgBAAIAAAAQgCgfAEgeQAAgOABgLIAHg9IgBAAIgBgDIACAAIAIg2IADgZIAHgjQAGgcAEgfIAAgBIAAgLQgBgWAAgXIAAgBIgCgDQACgigEgiQgFg2gBg1IgHgvQgCgVgJgSIgBgBQgCgSgGgQIgCgEQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQgBgFgEgBIAAAAQADgMgHAAIgBABIgEABQgYAWgQAhIAAAAQgOAZgKAcIgCAEIAAABIAAAIIAAABQgFgagMgXQgDgFgGgBIgBAAIAAgDIgEgHQgJgTgMgSIgBAAIgBgCIgEgGQgLgLgIgPIAAAAQgOgSgMgVIAAAAQgDgDgCgEIgBAAIgagdIAAgBIgJACIgBAAIgHAGIgBAAIgEADIAAAAIgFALIAAABQgGAGgDAIIAAABIgBABIgBAAIgBABIgBAAIgJARIgBAAQgLAYAFAhIAEAJIAAABIAAABIAHAWIAAAAIAEAJIAAAAIACAOIAAAAIABAEQADAMAFAKIABAAIABAAQAGAiAOAhQALAbAJAcQgBALAEAMIABABQADACACAEIABADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAABQAAABAAAEIABAAIADAJIADADIABAJQACAPAGAHIACAEIABAAIAAABIAEAHIAAAAQAEAIACAJIAAgBIABAAIAEAJIAAABIAAAAQALAhANAfIAAAAIAAABIAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIABAAQADANAIAKIAAAAIAAABIAAAAQAHAFADAMIAAACQgBAJgDAGIgCADIAAAAQgLAXgQARIAAAAIgBABQgLANgDAVIgDAUIgBARIABABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBABIAAABQgIAPAAAVQAAABABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAMgDAPIAAABQgBAZgEAVQgBAIABAIQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQgCAIAAANIAAABQABAQgBANIAAABIgCAcIgBAAIgJBXQgCAQgEANQgCADgEACIgEANIAAAAIgIALIAAABIgIAFIAAAAQgEACgBADIgDAJIAAAAQgGAJgDAMIAAABIgBAAQgGAMgHAGIAAAAQgBgBAAAAQAAAAgBAAQAAAAgBABQAAAAgBABIgHAKIAAABIgDAGIgCADIAAAAIgCADIgCAFIAAABIgBABIgBACIgBAAIgMAQQgEAGAEADIAFAAQAGgCAEgEIAAAAIAAgBQABAAABAAQABAAAAgBQABAAAAAAQAAgBABAAQgGgBADgFIABAAIABgEIAAgBIABgBIAAgBIABgCIABgCIABgEIAAgBIABgBIAAACIABAAIABABIAAABIAAAAIABABIAAAAIABAEIACAEIAAAAIAAACIAAAFIAAABIAAAAIgBAAIgBANIgBAAQgDADgEgBIAAACIAAABIAAABQgGACgEgBIgHgDQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABIACABQABAAAAAAQAAABAAAAQAAAAgBABQAAAAgBABIAAAAIgQgCIAAAAQgBAIgKAAIAAgBQAAgGAEgEIAIgJQAGgIAGgHIABgBQAHgMAHgNIAAAAIAGgHIAAAAIARgeIABgBQADgIAGgHIAAAAQAGgLAIgJIABAAQAEgIgBgOIABAAIACgGIABAAQABgLAHgFIAAAAIgDAOIAAgBQAFgEACgFIgBgGQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABAAQAEAAAAgGQAFgWADgXIAAgBIAAgBIABgmIgBAAIABg4IAAgBQACgsAEgpIAAgBQAFg0AMgsIAAgBIgCgDIAAgEIAAgCIAJgWIABABIACADQAJgWANgSIABgBIABAAIAAgBIAJgPIADgFIABgBIABgGIABgBIAAgBIABgJIgFgLIAAAAQgMghgOgfIAAgBIgGgPIAAAAQgMgZgJgcIAAgBIAAgBIgCgGIAAgBIAAAAIAAgCIgDgIIgJguIgIgeQgSg5gYg2IgCgFIgMgjIgBgEIgPgnIgCgHIgCgDIgBAAIAAgGIAAgBQgEgGgCgJIAAgBIAAgBIAAgKIAAAAIgDgGIAAgBQACgRADgTIABgBIAFgQIAAgBQAHgQAIgNIAAgBQASgOANgSIABAAIACgCQALgPAPgLIACgDQABgEAAgGIAAgDIgBgTQAAgIACgLIABgEIAAgCQABgGgDgEIABAAQABgLADgKIAAAAQACgQAEgNIAAgFIAAgEIAAgHQAEgBgBgFQAAgLAEgHIABgDIAAgBQgBgDADgDIAAgBQAAgFAAgEIAAgBIAAgBQgdACgWgPIgBAAIgBAUIAAAAQgDACgHgBIgBAAQgJAAgHgBIgBAAQgDgLgCgMQAAgEgGAAQgFgNAAgTIAAAAQAEgEACgFIABAAQAIgFAHgIIAAAAIAAgBIAAAAQgNgBgLABIgBABIAAAAIAAABQgFAAgCADIAAAAQgDgCAGgDIAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgNAEgLAGIAAAAQgHAAgFgBQgJgBgGgHIABgDIABgDIAAgBQAEgHAIgDIAAAAIABAAIAngQIAAAAIASADIAAAAIABAAQAUABARACIAAABQAFADAHABIAAAAIAIAHIAAABIABAAIAeAOIABgBQACgCgFgEQAGAAAHADIAAABIABAAIACgBQACgBACgFIAAgBIABgMIACgHIAAgCIAAAAIAMgwIAAAAQAGgPALgIIABgBQAFgEAGgCIAOADQADAEAFAEQgHgDgJgBIAAAAIgGAAIgBAAIgFADIgBAAQgMAVgIAZIgHAbIgDAPIgEAMQAAAKAEAEIAAABIABAAQALAPALANIAAABIABABIABABIABAAQAGAGAHAEIAAAAQAJAFgDgNQgCgMAEgJIAAAAQAEgHACgHQAMgKAGgOQAJgOAFgPIAAgBQABgRAAgSQgDgFgIgCIAAAAQgDgHgFgEIAHACIADACIAJAAIAEAAIAAABIAAAAQAJABAGgCIABAAIADABIADAAIAAAAQAGgCAHAAIAFgMQADgIADgGIABgEIADgJQADgIAAgJIgEgCIAAAAQgHgEgEgFIgCgBIAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIgBgBIgBAAIgFgCIgEgBIgBgBIAAAAIgIgCIAAAAQgLAIgPgEQgFgBgDgDQgBgDAAgEIAAAAIgPgRIAAgBQgPgNgFgaIgBgEIAAgBIABgCIACgEIABgBIgBgBIAEgJQAIgIACgIIALgLIABgBQABABAAAAQAAAAAAAAQAAAAABgBQAAgBAAgBIAAgBIABgBIAEgCIABAAIACABIAEgCIAAgBIABgFQAJgDACgHIAEgCIADgFIACgBIAEgEIAAAAIABABIABAAIACgDIAbgMIAAgBIABgBIADgBIACgDIABgBIAEgBIABABQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIACgBIAKgDIAAABIAKgBQAFAAACgCIA1ADIAGAGIACAAIABAAIAAACQgPgFgRgDIgBAAIgBAAQgHgBgEADQgBADAFABQALACALAAIAAABIANAEIABAAIAAAAIACABQgCAEgGgCIgFAAIgMgFIgBAAIgFAAIgBAAIgDgCIAAgBQgHgBgEACIgBAAIgBAAIgBAAQgDgEgIAAIgBAAIgCABIgBAAIAAAAQgLAAABAJIAAAAQgHACADgGIAAAAQADgGAGgDIgCAAQgDACgEAAIAAAAIAAAAQgHAKgBAMQAHgDAJAAQAbABANAOIADADIABAAIAFAFQAFACAGAAIABAAIADgSIAAgBIAHgGIABAAIAGgCIAAAAQAGgCADgEQgEgEgFgBIAAgBIgDgBIAFAAIADACIACABQAHAEAJABIAAAAIAEABIAEABIAAAAIACgBIAFADIADAAIAEABIAAAAIAQAMQAIAFADAIIAAABIABABIAAAAIABABIAAAJIAAABQgDAHgEAEIAAABIAAAAIAAADIACAFIAEAEIAAABQACAJACAIIAAAIIAAABIAAABIACAMIAAAAQACATgGAMIgOAXQgKAPgSAIIgBAAIgTALIgBABIAAAAIgJAAIgBAAIgEABIgNADIgBACQgGACgHgDIgBAAIgCAFIgDAIIgBAAQABAIgCAFIgBAAIAAABQgEAOAKADIAAABIADACQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIABgCQAFAGAGAFIABAAQACABADAAIAAAAIAEADIAAAAIALABIAAAAQAPAAAOABIAAABQAGAFADAIIAAABIAAABIAAABIABABIABAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAAACIAAAAIABAAQAEANAEANIgBAEIAAABIAAABQAEApADAtQAAALADALIABAGIgBAGIAAAAIAAABIACATIAAASIgBAAIAAABIgBAAIAAAOIAAABIABAAIABASIAAADIAAABIAAAAIABAeIgEA1IgBAAIgBAPIgCAUIAAAAIgEATIgBAAIAAABQgCAZgTAJIgBAAQgIADgLgBIgBAAIgFAAQgHgBgHgDIgCAAQgJgEgGgFIgEgDIgHgHQgRgOgPgRQgJgLgKgJIgDgCIgBgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAACIABABQADAEgBADIgBABIgBABQgDANABARIABAAQAAAEADACIAAACQAEAKANADIAAABIAAAAIAcAQIAEACIADABIABABIAAABIAEABIAAABIABAAIALAHIAGADIAEACQAHAFAIADIADABIALADIABABIAJAFIAAABIACAAIAFACIAAABIAAAAQAFABACADIgEABQgJAAgGgDIAAgBIgVgJIgUgLIAAAAIgDgCIAAAAQgLgEgJgFIAAAAIgBAAIgDgCIgCgBIAAAAIgBAAIAAAAIAAgBIgBAAIgEgCIAAgBIgEgDIAAAAIgCgBIAAgBIgSgIQgEgDgCAFQgGgEgGgHQgCgCgGABQgCgDgDgBIgBAAIAAgBQgCgEgDgCIAAgBIAAgBQgCgBgDAAIgBAAIgHgGIAAgBIgIgCIgBgBIgBAAIgBgBIgCgCIgBAAQgGgCgEgEIAAAAIgPgLIAAgBQgPgFgMgIIgBgBIAAAAQgBAAgBAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIAAgBQgHgCgGgFQgGgEgHgDIgJgJIgBgBQABgHgCgEIAAgBQAFgRADgSIABAAIAAgBQAAgLADgHIAAAAQAAgLADgGIAAAAQAAgGABgEIAAAAIAEgkIABgDIAAAAIABgFIgKgKIgBAAIgCgGIAAgBIgEgEIgBgBIgSgRIgBAAIgCACIAAgDIgBgCIgBgCIgCAAIAAgBIgHABQgTA0ABA7QAAAbgDAaQgEAUAKAQIAAACIAAABIAAAAIADADIADADIABABIAIAFIABABIAJAFQAPAVAXANQAWALAXALIAAABIAIADIAAAAIADABIABAAQAHACAGADIAAAAQAHAAAEAEIAAAAIABABIAAAAIAAABIADABIADABQAIAEAJACIAAAAIAKACIAeALIAAABIACAAIABAAIAAABIAAAAIACAAIAAAAIABAAIAAAAIAAABIADABIABAAIAAAAIABAAIABAAIAAAAIAAABIAAAAIABAAIATAHIAAABIABAAIABAAIAAAAIABABIACAAIABAAIAGAAIABABIAUAHQALAEAIAHIAAAAIAAABIABABQACAFAFACIAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAFAGgEAAIABABQAEAHAHAFIAAAAIABABIAFAEIAJAFIAAAAIARAGIAAAAIADAAIABAAQAIABAFADIAAACIAAACIgBAcIAAAAIAAABIAAAHIAAAHIAAABIAAABQgBAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIgCAeIAAAKIgBAAIAAAZIAAABIABAAQAAAKAEgGIAAAAIAEgeIAAgBIABgIIABgaIABgEIABgaIAAAAIACgPIAAgBIABAAQACgEAEAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAGIAAABIAAACQABATAEASIAAAEIABABIAAABIAAAGIAAABIAAABIAAADIAAADIAAABIABAEIAAACIAAACIAAABIAAABIAAAAIAAACIAAABIABACIAAABIAAAAIAAABIABADIABAAIABgJIAAgBIABgBIAAgBIAAgCIAAgEIABgDIAAgFIABgEIAAgBIAAgCIAAgBIAAgCIAAgCIAAgEIAAgkIAAgBIAAgBIAAgCIAAgHIAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIABABIADAHIAAAEIABAKIABAAIAEASIAAADIACAEIAAACIAAABIABADIAAAAIAAABIAAABIAAAAIAAABIABABIAAABIABACIABAEIACAGIAAABIABAFIAAABIABACIAAACIAAABIAAAAIABAAQABgDgBgDIAAgBIAAgCIAAgDIgBgGIABgBIgCgEIgBgDIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgEIgBgDQgCgNAAgOIAAgBIAAgBIAAgBIAAgCIgBgJIAAAAQAIgCADAHIAAACIAAAAIALARIAAABQAAAEABADIABAAIAAAAIAAABIAAAAIACADIABADIAEAHIABAEIABAAIAEAIIAAAAIABAEQAGALAGAIIAAABIABAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAgBIgMghIgDgHIgDgGIgDgIIgDgHIAAgBIgHgRIgFgJIAAgBIgVgJIAAAAIgqgVIAAgBIgSgJIgMgIIAAAAQgKgCgHgFQASgBANAIIAPAKIAAAAQALAEAHAGIAAAAIABABQAOAFANAHIAAABIABAAQANAEALAFIAAAAIAFAKIAAACIAAABIAAAAIATAsIAAACIAAABIANAeIAAAAIAEAKQgDAEgDACIgBAAIgFgBIgBAAIgBgBIgBAAIgBgBQgGgDgEgIIgGgNIgBgDIgDgGIgEgHIAAgBIgBgBIAAgBIAAAAIgBgCIgBgEIgCgDIgBgCIgCgCIgJgRIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAIAAABIABAAIABAPIAAABIAAADIAAACIABACIAAAGIAAAAIAAACIABACIABAKIAAAJIABADIAAACIAAABIAAAFIAAABIAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAAAQABAQgEAMIgCABIgBAAIgBAAIAAgCIgDgIIgIgZIgBAAIAAgBIAAgBIAAgBIgBgGIgBAAIgBgFIAAgCIAAgBIgBAAIAAAAIAAgBIAAgCIAAgBIAAgEIgBAAIAAgBIAAAAIAAgBIgBAAQgBgBAAAAQAAAAgBAAQAAABAAAAQAAAAgBABIAAABIAAAHIAAACIAAAAIAAAHIAAABIAAABIAAAFIAAABIAAACIAAACIAAABQgDAHAAAKIAAABIAAABIAAAHIAAACIgBAFIAAAAIAAABQgBAFgEACIgBABIgBAAQgDgDgDgFIAAgFIgBgFIAAgGIgBgDIAAAAIAAgDIAAgBIgBgIIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgFIAAgEIAAgBQgCgIgCgEIAAACQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAIAAABIAAAHIAAABIgBAIIAAABIAAAAIgBABIAAABIAAAHIAAABIgBAMIAAAEIgEANIAAABQAAAQgNACIgBAAQgFgGAAgNIABgmIAAgBIAAgFIABgsIAAgPIABgJIAAgBIAAgCIgIgCIgRgFIAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIAAAAIgGgBIgBAAQgTgMgNgTIAAAAQgVgIgTgJIgIgEIgIgEIAAgBIgLgEIAAAAIgHgEIAAAAIgBAAIgBgBIgBAAIgBAAIgBgBIgBAAIgCAAIgBgBIgEAAIgBAAIAAAAIAAACIAAABIAAABIgBABIgDAFIAAABQAAANAHgFQgDAEAAAFIgBAJIABAAIAAAAQABANAEAKIAAAAQAAAKADAFIAAACIAAABIABAAQADALACAMIAAAFIAAABIAAAAIAAAAIAOA9IAAABIAAAIIABAAIADALIgBAAQAAAEACAEIAAABIAEAyQgFAJADANQAEAiACAjIgBArIgDAPIgDAMQgIA6gFA7IAAAEQgDAQAAATIAAABIgCAKIABAAIAAAIIgBAAIABAAIAAAEIgBACQgDAMAAAPIgBALIgCAlIAAABQgDAVABAXIAAABIgBAkIAAAAQAAAcgCAZIAAAAQgBAoAFAiIAAADIAAABQgBAFADACQADABABADIAAAAIAAABIAAABIACACIgBAHIABAAQAGAKAKAFIAAABIAAAAIABAAIABAAQAGADAEADIAAABQAQAKARAIIAAABIAAAAIARAHIAAABQAcAMAgAHIAAABIAAAAIAaAHIAAABIAYAQIAAABIAAAAIAFABIABAAQAGAAABADQABAHgGgDIgBAAIgCABQgDACADAFQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgIAHIgQgMIAAAAIgBAAQgEABAFAEIAAABIABAAIAFACIAAAAIAJAGQgCAIgEAFIgBAAQgIgBgCAGIgBABIgEACIAAABIgCACQgFAEgIABQgTABgLgHIgXgNIgIAAIAAgBIgogOQgDgCgCgEQgSgDgQgIIAAAAQgOgFgLgIIAAgBIgOgIIAAAAIgUgEIgBAAQgMgJgOgGIAAgBIAAghIAAAAQAJgQAAgbIgBgIIAAgBIAAgBQgFgHAAgMIgDgfIAAgBIAAgGQgDgPABgSIAAgBIAAgBIAAgEQgBgEgBgHIAAgCIAAgBIAAAAIAAgSQgBgKAAgOIAAgJIAAgBIgCgiIAAgBIAAgBIAAgXIgCgUIAAgBQgCgLgBgNIAAgBQgOAegKAhIAAAAQgDANgEALIgBABQABAHgEAFIAAABQgCAJABAEIAAABQgIATgFAWIgBADIgDAIQgDAQgFAQIgDALQgDAKAAAKIgRA2IAAAAQgEASgCAVIAAAAIAAABQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIgCAbIAAABIAAADIAAABIAAABIAAACIABABQgBAbAAAbIAAAAIAAAAQAAATADAJIAAAKIgBAAIAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQgCAOgBAQIAAAAQgDAQgEANIAAABQgKAFACgMIAAgBIgDgEIAAAAIABgHQAAgFgDgDIgBgBIAAAAIAAgBIAAgBIgFgDIAAAAQgKgFgLACIgDAAIgBAAIgCABQgCACgEABIgBAAIgDAEIgCAEIAAABQgBAEACAEIAAABQAIAIALADIABABIAAAAQAHACAHgCIAAgBQgDgPAJAKIAAABIAAABIACABQAAAKgIABIAAAAIgCAAQgfAAgKgVgAh6jAIAAACQAEAAABADIAAABQgDAEAGAEIAAADIAAAAIAAABIADACIAAABIAAAAIAAAAQASAYAOAcIAAABIAAAAQAHAOAJALIAAACIAAABIAAAAQAAAFAEACIgBABQgBAFACAEIAAAAQAAgHAHgCIAAgBQACgHAGgFIAAAAQAAgCAAgEIABAAIAUghIAAgBIACgGIABAAQAIgHAFgKIABAAQAFgFADgGIABAAQAFgBABgFIABAAIAHgBIAAgBIAEgDIAAgBIAAgDQgGgGAFgHIAAgBIgBAAQgBgGgHgBIAAAAIgYgEIAAgBIgFgEIAAAAIgHgBIgBAAQgDgEgEgBIAAgBQgRgEgOgJIAAAAQgagPgdgNIAAAAQgHgGgHgEIAAAAQgagLgQgWIAAAAIgBgBQgDgCgEgBIgBAAIgDADQgDACgDgBIAAAAIgBgBQgCgEgBAEIAAACIAAAAIAAACIAAABQgCAIgFgHQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgCAGQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQgFADAAAFIgHAAQgNAUgJAWIgCABIgBAAIAAAAQABAEgCACIAAABQgDAGAAAIIAAABIAAABQAAARAFgNIABAAIABAAIABAAIACAAQAGgHAEgIIAEgIQACgJAEgJIAHgKIgBABIAAgBQADgDABgDIACgCIAAAAIAJgFIABAAQAEgBADACIAAAAIABAAQABAEAFAAIAAABIAFANIAAAAIATATIAAABIAAABIAAAAQAHAEAEAGIAAABIAAABIABAAIAIAIIAAAAQAGgBAAAFIgBAAQABAIAGAEIAAADIAAABIABAAQABAFAEgBQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABgACBjvIAAACQAIACAJgFQAHgJADgOIAGgbIACgQIACgZIAEgpQACgdAAgaIAAgBIAAgFQAEgigFgiQAAgKgCgKIgBgXIAAgBIgFg9IAAAAQgDgPgGgLIAAAAQgDgHgHgDIAAAAQgPgDgNAFIAAAAQgJgDgHAEIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABQABAEgCADQgCgKgGgJIgDgBIAAAAIgIAAIgBACIgCAFIAAAEIAGAGIAAACQgEAEABAGIACAFQgKAMAGAQIgBAFIgBAAQgEAWgIAQIgBAAIgIAQIAAAAQgGAHgJAEIgBAAQgCgGABgFIAAAAIAAgBIAAgEQgCgCABgFIAAgBIgBgBIAAAAQgFgNgDgOIAAgBIgBAAIAAgBIgGgUIgBAAIgJgaIAAgBQgHgQgHgQIAAgBQgEgEgBABQAAABgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgGgCgCIAAgBQgFAAgDgDIAAAAQgDABgEAAIAAAAIgCATIAAABIAAAEIAAAAQABAYgGANIAAAAQgJAXgRAOIgEADIgBAAQgFANAAAMIgCAFIgBAEIAAABIAAABIAAAIIAAABIAKAJQAPAhAaAaIAJAIQABAEADACIACAEQADAIAHAFIAEADIAbAcIAAAAIABAAIAAABIABABIADAAIAEADIAAAAIACgFIAGgFIAGgHIAAgBIAAgCIAAgDIgBgCIgBAAIAFgBIgIgCIgHgCIgHgCIgFgCQADgCABgGIADAAIACABIABAAIAHAAIAFABQAEACADADIADgCIABAAQAFgBAGAAIAAAAQACgEADAAIAAABIABAAQAEABADgEQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQADADADgGIAAAAIAJgMIAAgBQABgHACgEIAAgBIABgQIAAgBIAAgEIgDgNIgBgDIAAgBIAAAAQgDgEACgEIAAgBIAAgBIAAgDIgCgOIgBAAIAAAHIgBgHIAAgBIAAgBIgEgWIAAgBIgDgIIAEgbIABgBIAAgGIADgZIAAgBIAJBQIAAAAIAFARIADAMIABAEQACAegBAfIAAADIgCAAIgGAJIgBAAIABADQgCALAAANIAAABIgBAIQgCAPAAAPIAAAOIgBADIAAAJIABAJIACACIABAEQgDACADAEIAAABIABAAIABALIgCAAIgDgBIAAAAIgCgDQAAgDgCgCQgSgNgQgNIgIgMQgFgGgHgDQgKgLgLgKIgCgDIAAAAIAAAAIgBgBIgBAAIgIgHIgCgBIgCgFIAAgBQgSgTgQgVIgGgIIAAgBQgRgWgUgUIAAAAIgBgBIgWgZIgFgFIAAAAIgCgEIAAgBIgkgqIAAAAIgBgBIAAAAQgGgFgJgEIgQgHQgOgLgPgJIgLgFIgIABIAAgBIgTABQgDgCgFAAIgDABIgBAAIgfACIAAAAIgCACIgCAAIgHABQgJADgFAIIgCABIAAAAQAAABAAAAQgBABAAABQAAAAABABQAAAAAAABIABAAIAAABQABADADABIABABIAIAAQAJgIANgBQAagCAaAAQAFAEAGACQAJACAIAEQgXgFgWAEIAAABQgEABAAAFQAJACAMgCIAMgCQAOgBALADIAIAIIAAABIgCADIgEAAIgBgBIAAAAQgEgDgJABIg0ABIAAABQgHABABAJIAAABQAIABAKgCQAhgFAeAHIAAAAIACAAIAAABIgBABQgFAFgJgBIgegBQgQAAgPACQAAAJAEAHIAAABQAAAIADAGIAAABQAHACALAAIAAgBQgCgNAFgLQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIABAEIABAAIAFAEIAAABIABAAQARAKAZgEQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAKACAGgDIAAgBQAEAAADADIACADQAFAIAIAGIAAABIAAABIABAAIADAEIADADIAAABIACAGIACACIAFAEQAIAMAKAKIAAAAQABAGAFADIAAABIAAAAQAHAHAEAIIAAABQgBAHAGAEIAAABQABAEAEABIAAABIAAAAQADAAACADIAAABQAAAEAFACIABABIABAEIABABIADABIABABQAIAIAGAKIAAABQAPAQALASQAFAHAFABIABAAQAHANAJALIAAABIAAABIAAAAIACADIABAAIAFAIIAMANIAAABIAAABQAWAUAWASIAGAGQAIAJAMAAIABAAQAAAAABgBQAAAAABgBQAAAAABAAQABAAAAAAIAEABgAhVk/QAMAFAKAIIACACIAAAAIAWAPIAGADIADACQAJAEAJACIACACIABAAQAEABABADIAAABIAAAAIABABIAFACIACAAQAFgDAAgHQAFgJgEgHIAAgBIADgKIgBgBQgBgFABgIIAAgBQgLgQgNgPIgNgPIgLgQIgCAAQgMgegVgUIAAgBIgBAAIgCgCQgDgGgEgDIAAgCIAAgBIAAAAIgLgKIAAAAIgCARIgBACIAAABIgEAUIgCAPIAAABIgDAZIAAAAQgHAOADASIABAAQAIALAMAJIAAAAIAAAEIABABIABgBIAAABgABNmbIgBABIgNAMIAAABIgNAQQgCADACAEIAAABQAEABACAEIAAABQALANAPALIAFADQAIAGABgIIABAAQACgJAAgJQgDgFACgHIAAgBIAAgBIAAgCIgCgfIAAgGIAAgDIgCgCQgLACgGAFgAASrPIgEAJIgLAfIAAAAQgDADgDADIgBABQgCAEADAFQANAaAKAfIADADIAAAAQAGAXAJAUIAAADIAAABIAAAAIAGAMIAAABQgDAFADAEIAAAAIAGgJIAAAAIAFgLQALgiAGgqIAAgFQgBgGgEgBIgBgBIABgEQAEgFAAgIIgCgFIgBAAIAAgBIgDgHIABAAIAEgQIABgBIAEgUIABgFIgEgCIgIgCQgVgGgUgHIAAAAIgFANgABirRIABAAIAegHIAAAAIAJgEIABgBQASgIAOgNIAAAAQAOgSAEgdIAAAAIAAgFIgBgJQgCgPgEgLIgBgBIgGgMIAAAAQgKAEgOgCQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABABABIgCAIIgBADIAAABIgCADIgBAEQAFAGgIABIAAAAQgFgDgGAAIgDgBIgBAAIAAAAIAAgBIADgEIAEgDIAEgCIACgCIACgCIAAgBQACgEgBgFIAAgBIgEgCIAAAAQgLgBgLACQAAAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIAAABIgCAAIgEAAIgCgDIAAgBQABgLgIACIgBAAQAAgGgDABIAAAAQgDAGgHADIgBAAIACgJIAAgEQAFgGgGgGIgBAAQgRgRgeACQgIABgGADQgCAHACAIIAAACIABAHIABABIACAAIADAFIADAEIgBAAIAAABQAIAJARADIAAABIAAAAQAIABAGADIAAgBQAFgHAFAEIgBADIgCACIAAABIgFAEIgBAAIgBAAIgMADQgGgBgHgCQgJgEgMgDIgBgBIAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAAAIgIgKIAAABQgFADAAAHIAAAAIAAADIAAACQgFgDgBgGIgBgCIAAgBQgHgBgGADIAAAAIAEAOIAAAAIAAAAIACABQgBABAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgCgDQgEgGgDgIQgPADgLAHIgBAAIAPAPIABAAIAAANIAAAAIgBAAIgBAAQgEgEgFADIgBgBQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgGgBIgCAAQgFgGgIgDIgIgBIAAABIgDgCIgBAAIgCgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAABQgEAEAFAGIAAABIgBAIIABAAQAJAOALAKQALAVAbAAIADgDIAGABIAAAAQAFgDAHADIABAAQACAFADACIAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAQABAGAEAAQAIABACAFIABABIADACIAHABIABAAQARAJAWAFIAAABIABAAQAMACAPgBIAAABgAhGtbQgCAJADAJIAAAAQADgCABgHIAAgBQgDgDgCgFIAAAAIAAAAgAg5tTIAAABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIADAEQAAAAABAAQAAAAAAAAQAAgBAAgBQAAgBAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAEADAAgEIAAgBQgDgDgCAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBABgAgrt1IgBABQgCAHAAAJQAAAKAEAGIAAAAIADgUIAAgBQAAgIABgHIgBgBQgCAAgCAEgAgbuGIgBABQgCACAAAEIgCAGQgDAMABANIAAABIAAABIAAABIABAHIAAABQAJABAAgJIAAAAQgDgVAEgWIgBAAIgBAAIgCACgACRtZIABAAQAMABAJgDIAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIgGgJIAAgBIgCgFIgBgBIgOgTQgHgJgTABQgJAEgDAKIgBADIAAABQgEAFAAAEQAAADADAFIABACIgDgCIgJgCQAFAHAIAEIADABQAGACAIABIAFgBIACAAQAIAAAEADgAgSt7QAAASADAPIAAAAQAGgBACgEIABAAIAAgBIgBAAIgCgGIAAgBIgDgXIgBAAQADgFgCgJIgBABQgDAEgBAGIAAAAIgBAGgAAFuZIAAABIgFADIAAABIgEAGQgBAPABANIABAIQABAIAGAAIABgBQACgIgCgOIABAAQACgGADgEIABAAIABgDIAAgBQACgMAEgJIgDgBIgBAAIgJAEIgBAAgAgEK3IAAgBQgDgIACgLQACgLAHAEQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAIABAAIADAHQgBANgGgHIABABIAAAFIABAAIAAACIADAIQgDADgCAAQgDAAgDgIgAjrh7IAAAAQgCgBAAgEIAAgBIAAgBQABAFADACIABAAIAAADIgDgDgAj3jrIACgGIAAAAIgCAHIAAgBgABwr8QgJAAgHgCIAAgBQgZgDgNgPIAAAAIgLAFIAAgBQAAgEAEgFQAEgDgCgDQADgCABgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABABIABAAIAAgBQgHgBgBAGIgBABIAAgBQABgFADgCIAAgBIAHADIAAABIABABIgBAFQgDAIAGAFIAAABIAAABIAAAAIAGAGIAAAAIAVAGIABAAQANACAQgBQAUgKAKgTIACgDQACgGAHgBIgBAGIgBAAQgCAHgHAFIAAABIABAAQgJAQgSAIQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABABIgMABIgFAAgABos2QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBQABgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAFACQAAAFgDAAIgCAAgAB0s9IAAAAIgBgFQACgBADABQAAAEgCABIgCAAIAAAAgACntBIgCgBIABgDIAAgBQADgKAHAIIAAABQgBAHgFAAIgDgBgABUtEIAAgBIgBgCIgBgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABABQABAAAAAAIABABIAAABIAAACIgCACgABgtHIgBgCIgBgBIAAgBIAAgBQADgIAGAGIAAABIAAABQAAAEgCABIgBAAIgEAAgAAktdIAAAAIgBABIABgBg");
	this.shape_94.setTransform(16.4,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-84.3,63,197.4);


// stage content:
(lib.adjective_Scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6:0,scene5_repeat:239});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_2 = function() {
		playSound("SERedHair");
	}
	this.frame_250 = function() {
		this.gotoAndPlay("scene5_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(248).call(this.frame_250).wait(1));

	// Main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(315.9,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIABgJIAAgJQgBgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_1.setTransform(308.4,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAuQgMAHgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgQQABgJAIAAQAEAAADACQADADAAAEIgBAPIgCAPIABAbQABAMACAGIAHADIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgJAJABQAEAAADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgKg");
	this.shape_2.setTransform(297.7,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_3.setTransform(287.1,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQgBgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAGAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgEAAQgIAAgBgJg");
	this.shape_4.setTransform(277.1,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGABAHQgBADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgDgZgBgNIABgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_5.setTransform(260.6,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbA2QgOgFAAgKQAAgEADgDQACgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEAKAHQAQAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_6.setTransform(244.3,20.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_7.setTransform(234.4,21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIBHQgEgDAAgFIAAgRIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQADAAACADQADADAAAEIgBAWIgBAXIAAARIABARQAAAFgDADQgDADgDAAQgEAAgCgDgAgGg1QgDgDAAgFQAAgFADgDQAEgDAEgBQAEABAEADQADADAAAFQAAAFgDADQgEADgEABQgEgBgEgDg");
	this.shape_8.setTransform(226.1,18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_9.setTransform(217.9,19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIBHQgEgDAAgFIAAgRIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQACAAADADQADADAAAEIgBAWIgBAXIAAARIABARQAAAFgDADQgDADgDAAQgEAAgCgDgAgGg1QgDgDAAgFQAAgFADgDQAEgDAEgBQAEABAEADQADADAAAFQAAAFgDADQgEADgEABQgEgBgEgDg");
	this.shape_10.setTransform(210.4,18.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgPQAOgPAVAAQALgBAGAEIAKAHIADg3QABgJAIAAQAJAAAAAKQAAANgEAuIgBAcQAAAhADAQIAAACQAAAEgDADQgDACgDAAQgGAAgDgJQgHAGgIACQgHADgIAAQgUAAgNgOgAgWACQgIAJAAAUQAAAMAJAJQAIAJAMAAQAIAAAFgDQAEgBAHgHIADgCIAAgRIAAgMIAAgMQgEgHgGgDQgGgEgJAAQgPAAgIAJg");
	this.shape_11.setTransform(201.5,18.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_12.setTransform(190.3,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA6QgDgDAAgFIgCgiQgCgXAAgLQAAgLgDgFQgHADgHAHIgMANIgFAGIgBAQIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADADQADADAAAEIAAAGIAAAGIAAAKQAFgKAKgIQAKgJAGAAQAQAAAFAPQAFgHAHgDQAIgEAJAAQARAAAGASIAEAbIAHA3QAAAEgDADQgDACgEAAQgIAAgCgIIgDgeIgDgeIgEgNQgDgJgEAAQgEAAgJAGQgKAGgDAEIABASIADAZQACAPAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_13.setTransform(177.6,21.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE0063").s().p("AgqBLQgJgIAAggIAAgOIABgQIgBgEQAAgDABgDIACgpIgBgLIgBgKQAAgMAKAAQAFAAACADIAWgEIATgCQAYAAAOAFQAHADAAAHQAAAEgDACQgDAEgEAAIgDgBQgRgEgPAAIgQABIgVAFIABAKIgCAmIAqgFIAYgCQADAAADADQAEADAAAEQgBAIgIABIgYADIgsADIgBANIAAAMQAAAVADAFQADACAMAAIASAAIASAAIAGgBIAFAAQALAAAAAKQAAAHgIADQgKABgdAAQgeAAgJgIg");
	this.shape_14.setTransform(157.7,18.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE0063").s().p("AgRBHQgMgdgOg4IgIgaQgGgUAAgHQAAgEAEgDQACgCAEgBQAIAAACAJIAEARIAJAgQAJAkAJAaIABgCIAZhFIAIgYQAGgPAGgHQADgEAFAAQAEAAADADQADADAAAEQAAADgCADQgGAJgEAKIgHAVIgbBHQgEAMgHAMQgCAGgFAAQgIAAgDgIg");
	this.shape_15.setTransform(145.3,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CE0063").s().p("AgqBIQgDgDAAgEQAAgEADgDQADgDAEAAIAUgCIABgSIAAgRIgBgQQABgWACgiIgNABIgMAAQgFAAgCgDQgDgDAAgEQAAgJAJgBIAegBQASAAAdAFQAJABAAAJQAAAFgDACQgDADgEAAIgQgCIgPgCQgCAdgBAZIAAAQIABARIgBARIAfAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgQAAIgRAAIgSACIgTACQgEAAgDgDg");
	this.shape_16.setTransform(132.7,19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE0063").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgOIgBgOIgCgnIgDgnIgIAAQgWAAgMgCQgIgDAAgHQAAgFADgCQADgDAEAAIAQACIAQABIARAAIARgBIAWABIAXABQAEAAADADQADADAAAEQAAAFgDACQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAGgGAAQgDAAgDgCg");
	this.shape_17.setTransform(121.3,18.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CE0063").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgeAXAAIAJABIAGACQAEgGAFAAQAHABACAIQABAIAAALQAAAEgCAEQgDADgEAAQgHABgDgIQgDgGgCgBQgCgBgIAAQgOAAgQAVQgYAdAAAZQAAANAIAJQAIAKAMAAQAJAAAKgGQAGgDAMgIQAFgFADAAQAEAAADAEQADADAAAEQAAAEgEADQgZAYgaAAQgUAAgOgQg");
	this.shape_18.setTransform(107.8,18.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CE0063").s().p("AgqBLQgJgIAAggIAAgOIAAgQIAAgEQAAgDABgDIACgpIgBgLIgBgKQAAgMAKAAQAFAAADADIAVgEIATgCQAYAAAOAFQAHADAAAHQAAAEgDACQgDAEgEAAIgDgBQgRgEgPAAIgQABIgVAFIABAKIgCAmIAqgFIAYgCQADAAADADQAEADAAAEQgBAIgIABIgYADIgsADIgBANIAAAMQAAAVADAFQADACAMAAIASAAIASAAIAGgBIAFAAQALAAAAAKQAAAHgIADQgKABgdAAQgeAAgJgIg");
	this.shape_19.setTransform(95.6,18.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CE0063").s().p("AgnBEQgTgOAAgSQAAgMAKAAQAKAAAAAMQAAAIAMAIQALAIAKAAQAHAAADgxQABgXAAgjIAAgKIgGAAIgLAAIgLgBQgFAAgDgCQgCgDAAgFQAAgKANAAIAKAAIAJABIASgBIATgBQAWAAAAAMQAAAEgDADQgDADgEAAIgGgBIgGgBIgMABIABALQAABIgKAhQgGAWgPAAQgRAAgRgMg");
	this.shape_20.setTransform(82.5,19.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CE0063").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_21.setTransform(68.9,19);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CE0063").s().p("AAiAzIgGgfIgaAFIgaAFIgQAmQgDAFgGAAQgDAAgDgDQgEgDAAgEQAAgFAPgfQgBgCAAgDQAAgIAJgDQALgTARgcQAWglAGAAQAHAAADALIAHAhIAOBDIAFAPIADALQAAAEgDADQgCADgFAAQgIAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_22.setTransform(53.9,19);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQAAAEgDADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_23.setTransform(35.7,21.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAiAzIgGgfIgbAFIgZAFIgQAmQgDAFgGAAQgDAAgDgDQgEgDAAgEQAAgFAPgfQgBgCAAgDQAAgIAJgDQALgTARgcQAWglAGAAQAHAAADALIAHAhIAOBDIAFAPIADALQAAAEgDADQgCADgFAAQgIAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_24.setTransform(22.8,19);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#9900CC").ss(3,1,1).p("EAojAYTMhRGAAAMAAAgwlMBRGAAAg");
	this.shape_25.setTransform(275,188.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(251));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoiAb+MAAAg38MBRFAAAMAAAA38g");
	mask.setTransform(275,212.3);

	// content
	this.instance = new lib.twigs();
	this.instance.parent = this;
	this.instance.setTransform(70.5,185.1,1.151,1.151);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(251));

	// Anim
	this.instance_1 = new lib.Lesson3Twiggs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(339,135,1,1,0,0,0,125.5,23.7);

	this.instance_2 = new lib.bk("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(261.5,211.9,1.007,1,0,0,0,282.3,176.6);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(251));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'CFE674209F41BD46BE833AADAC6A5CB8',
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
		{src:"sounds/modifies.mp3", id:"modifies"},
		{src:"sounds/nounmarkers.mp3", id:"nounmarkers"},
		{src:"sounds/ball_passes.mp3", id:"ball_passes"},
		{src:"sounds/SEBlackHair.mp3", id:"SEBlackHair"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SEBrownHair.mp3", id:"SEBrownHair"},
		{src:"sounds/bushrattle.mp3", id:"bushrattle"},
		{src:"sounds/SERitaChopsMick.mp3", id:"SERitaChopsMick"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/Ihaveagreensuit.mp3", id:"Ihaveagreensuit"},
		{src:"sounds/Ihaveredhair.mp3", id:"Ihaveredhair"},
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
an.compositions['CFE674209F41BD46BE833AADAC6A5CB8'] = {
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