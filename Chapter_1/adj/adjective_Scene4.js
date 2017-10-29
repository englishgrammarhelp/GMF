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


(lib.yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFAvQgEgOgEgkIgEAIIgWA4QgDAGgEAEQgGAKgMAAQgHABgIgNQgIgNgFgUQgEgSgKg8IgCgUQAAgJAGgFQAGgFAJAAQAPAAAEAPIADAVIADAUIAFAkQALgcAOgtQAGgTAQAAQAQAAAFAWIAIAmIAHApIAXhYQAEgNAPAAQAIAAAGAFQAHAGAAAIIgBAEQgPA6gQAtQgEAOgKAOQgHAJgMAAQgSAAgLgjg");
	this.shape.setTransform(78,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwA+QgVgVgBgiQgBgfATgZQAWgeAnAAQAdAAARAXQAQAVAAAgQAAAhgSAYQgVAaghAAQgbAAgUgSgAgVgYQgIAOAAARQAAASAKAJQAHAIALAAQAMAAAJgJQALgKABgRQABgugaAAIgBAAQgRAAgKAQg");
	this.shape_1.setTransform(59.5,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNBzQgGgGAAgIIAAjKQAAgIAGgGQAGgFAIAAQAIAAAGAFQAFAGAAAIIAADCQAAAcgUAAQgIAAgFgGg");
	this.shape_2.setTransform(47.5,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNBzQgGgGAAgIIAAjKQAAgIAGgGQAGgFAIAAQAIAAAGAFQAFAGAAAIIAADCQAAAcgUAAQgIAAgFgGg");
	this.shape_3.setTransform(39.3,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgxA/QgZgSAAgiQAAgkAUgZQAVgdAkAAQAaAAAQAIQAXALAAAXQAAAQgSANQgJAFgYAKIgxAWQAHAIAKAEQAKADAMAAQAUAAANgIQAMgHAIAAQAPAAAAAPQAAARgYAKQgVAJgXAAQgiAAgWgRgAgTgiQgKAJgGASIAhgOQATgJAMgIQgKgFgQAAQgNAAgJAJg");
	this.shape_4.setTransform(26.8,27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgrBxQgGgFAAgIQAAgOAfhDQgQgfgjg+IgHgLQgEgHAAgFQAAgIAGgGQAHgGAHAAQALAAAFAHQAVAcAaA3IATgqQALgVAKgRQAGgLALAAQAIAAAGAGQAHAGAAAIQAAAEgCAFIgzBnQgSAngKAZIgJAbQgFAOgOAAQgJAAgGgGg");
	this.shape_5.setTransform(10.2,31.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990066").s().p("AAFAvQgEgOgEgkIgEAIIgWA4QgDAGgEAEQgGAKgMAAQgHABgIgNQgIgNgFgUQgEgSgKg8IgCgUQAAgJAGgFQAGgFAJAAQAPAAAEAPIADAVIADAUIAFAkQALgcAOgtQAGgTAQAAQAQAAAFAWIAIAmIAHApIAXhYQAEgNAPAAQAIAAAGAFQAHAGAAAIIgBAEQgPA6gQAtQgEAOgKAOQgHAJgMAAQgSAAgLgjg");
	this.shape_6.setTransform(78,28);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990066").s().p("AgwA+QgVgVgBgiQgBgfATgZQAWgeAnAAQAdAAARAXQAQAVAAAgQAAAhgSAYQgVAaghAAQgbAAgUgSgAgVgYQgIAOAAARQAAASAKAJQAHAIALAAQAMAAAJgJQALgKABgRQABgugaAAIgBAAQgRAAgKAQg");
	this.shape_7.setTransform(59.5,27.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990066").s().p("AgNBzQgGgGAAgIIAAjKQAAgIAGgGQAGgFAIAAQAIAAAGAFQAFAGAAAIIAADCQAAAcgUAAQgIAAgFgGg");
	this.shape_8.setTransform(47.5,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990066").s().p("AgNBzQgGgGAAgIIAAjKQAAgIAGgGQAGgFAIAAQAIAAAGAFQAFAGAAAIIAADCQAAAcgUAAQgIAAgFgGg");
	this.shape_9.setTransform(39.3,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990066").s().p("AgxA/QgZgSAAgiQAAgkAUgZQAVgdAkAAQAaAAAQAIQAXALAAAXQAAAQgSANQgJAFgYAKIgxAWQAHAIAKAEQAKADAMAAQAUAAANgIQAMgHAIAAQAPAAAAAPQAAARgYAKQgVAJgXAAQgiAAgWgRgAgTgiQgKAJgGASIAhgOQATgJAMgIQgKgFgQAAQgNAAgJAJg");
	this.shape_10.setTransform(26.8,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990066").s().p("AgrBxQgGgFAAgIQAAgOAfhDQgQgfgjg+IgHgLQgEgHAAgFQAAgIAGgGQAHgGAHAAQALAAAFAHQAVAcAaA3IATgqQALgVAKgRQAGgLALAAQAIAAAGAGQAHAGAAAIQAAAEgCAFIgzBnQgSAngKAZIgJAbQgFAOgOAAQgJAAgGgGg");
	this.shape_11.setTransform(10.2,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.3,45.8);


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


(lib.brown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeBDIgEgeQgCgQAAgOIAAgMIABgNIAAgFIAAgHQAAgMgFAAQgNAAgLAQQgMAQgHAYIgBANIgBANIgBANIgBAMQAAAJgGAGQgGAFgIAAQgJAAgGgFQgGgGAAgIIAAgNIgBgNIACgoIACgmIgBgOIAAgNQAAgIAGgGQAGgFAIAAQATAAACAXIAAABQAVgVAXAAQAcAAAKAXQAHAQAAAeIAAALIAAAIQAAAMADASQADASAAALQAAAIgFAGQgGAFgJAAQgSAAgCgSg");
	this.shape.setTransform(78.5,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAFAvQgEgOgEgkIgEAIIgWA4QgDAGgEAEQgGAKgMAAQgHABgIgNQgIgNgFgUQgEgSgKg8IgCgUQAAgJAGgFQAGgFAJAAQAPAAAEAPIADAVIADAUIAFAkQALgcAOgtQAGgTAQAAQAQAAAFAWIAIAmIAHApIAXhYQAEgNAPAAQAIAAAGAFQAHAGAAAIIgBAEQgPA6gQAtQgEAOgKAOQgHAJgMAAQgSAAgLgjg");
	this.shape_1.setTransform(60.4,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwA+QgVgVgBgiQgBgfATgZQAWgeAnAAQAdAAARAXQAQAVAAAgQAAAhgSAYQgVAaghAAQgbAAgUgSgAgVgYQgIAOAAARQAAASAKAJQAHAIALAAQAMAAAJgJQALgKABgRQABgugaAAIgBAAQgRAAgKAQg");
	this.shape_2.setTransform(41.9,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag5BMQgFgFAAgIIAAhfIAAgOIAAgNQABgJAFgFQAFgGAIAAQARAAADARQAZgTAgAAQAdAAAAAnIgBAKQgBAWgSAAQgTAAAAgTIgBgPQggAFgOAdIAABJQAAAIgGAGQgFAFgJAAQgJAAgFgGg");
	this.shape_3.setTransform(27.3,27.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBvQgFAGgIAAQgIAAgFgGQgGgFAAgIIAAgLIABgKIAAilQAAgLAFgIQAFgKALAAQAQAAAAARIgBAGIAAAGIAAA4QALgGAKgDQAKgDAIAAQAiAAAWAZQATAWAAAiQAAAigXAXQgXAYgiAAQgUAAgTgHgAgQgCQgKADgMAJIAAA+QAUAJAOAAQASAAAMgNQAMgMAAgTQAAgTgKgNQgKgMgRAAQgHAAgKAFg");
	this.shape_4.setTransform(10.9,23.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990066").s().p("AAeBDIgEgeQgCgQAAgOIAAgMIABgNIAAgFIAAgHQAAgMgFAAQgNAAgLAQQgMAQgHAYIgBANIgBANIgBANIgBAMQAAAJgGAGQgGAFgIAAQgJAAgGgFQgGgGAAgIIAAgNIgBgNIACgoIACgmIgBgOIAAgNQAAgIAGgGQAGgFAIAAQATAAACAXIAAABQAVgVAXAAQAcAAAKAXQAHAQAAAeIAAALIAAAIQAAAMADASQADASAAALQAAAIgFAGQgGAFgJAAQgSAAgCgSg");
	this.shape_5.setTransform(78.5,27.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990066").s().p("AAFAvQgEgOgEgkIgEAIIgWA4QgDAGgEAEQgGAKgMAAQgHABgIgNQgIgNgFgUQgEgSgKg8IgCgUQAAgJAGgFQAGgFAJAAQAPAAAEAPIADAVIADAUIAFAkQALgcAOgtQAGgTAQAAQAQAAAFAWIAIAmIAHApIAXhYQAEgNAPAAQAIAAAGAFQAHAGAAAIIgBAEQgPA6gQAtQgEAOgKAOQgHAJgMAAQgSAAgLgjg");
	this.shape_6.setTransform(60.4,28);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990066").s().p("AgwA+QgVgVgBgiQgBgfATgZQAWgeAnAAQAdAAARAXQAQAVAAAgQAAAhgSAYQgVAaghAAQgbAAgUgSgAgVgYQgIAOAAARQAAASAKAJQAHAIALAAQAMAAAJgJQALgKABgRQABgugaAAIgBAAQgRAAgKAQg");
	this.shape_7.setTransform(41.9,27.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990066").s().p("Ag5BMQgFgFAAgIIAAhfIAAgOIAAgNQABgJAFgFQAFgGAIAAQARAAADARQAZgTAgAAQAdAAAAAnIgBAKQgBAWgSAAQgTAAAAgTIgBgPQggAFgOAdIAABJQAAAIgGAGQgFAFgJAAQgJAAgFgGg");
	this.shape_8.setTransform(27.3,27.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990066").s().p("AgrBvQgFAGgIAAQgIAAgFgGQgGgFAAgIIAAgLIABgKIAAilQAAgLAFgIQAFgKALAAQAQAAAAARIgBAGIAAAGIAAA4QALgGAKgDQAKgDAIAAQAiAAAWAZQATAWAAAiQAAAigXAXQgXAYgiAAQgUAAgTgHgAgQgCQgKADgMAJIAAA+QAUAJAOAAQASAAAMgNQAMgMAAgTQAAgTgKgNQgKgMgRAAQgHAAgKAFg");
	this.shape_9.setTransform(10.9,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.4,45.8);


(lib.bag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyByQgTgEAAgMQAAgNANAAQAFAAANADQAMADAPgBQAbAAALgbQAHgSAAglQgIAPgLAHQgLAHgNAAQgaAAgRgSQgQgSAAgcQAAgnAWgYQAYgZAnAAQAOAAAJADQAJAEAFAHQAQAAAAARQAAALgDARIgEAcIgEAwQgBAdgFATQgGAXgPAMQgRANghAAQgTAAgNgCgAgahJQgOASAAAaQAAAWAIAJQAIALAQAAQAOAAAOgQQAMgPACgPQADgQAEgiQgGgEgGgDQgHgCgGAAQgbAAgPATg");
	this.shape.setTransform(42.9,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvBLQgHgGgDgFQgOAIgLAEQgKAEgHAAQgiAAgQgUQgPgSABglQgBgjAZgZQAZgZAgAAQANAAAPAGQAVAJgBALQAAAEgDADQgBAGAAANIgBAfQAAASACALIAJAaIADAHIABADQAAAGgDAEQgFADgFAAQgDAAgHgGgAgYgkQgRATAAAXQABAYAIAMQAJAMARAAQAMAAAKgFQAFgDAKgIQgFgmABgTIAAgOIADgQIgJgEIgHgBQgVAAgRASg");
	this.shape_1.setTransform(27.6,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsBuQgFAHgHAAQgFAAgEgEQgEgEAAgGIAAgLIABgMIgBguIgBguIAAgoIAAgpQAAgIAEgIQAFgIAIAAQALAAAAAMIAAAGIgBAGIAAAgIgBAmQANgJAMgEQALgFAJAAQAgAAATAZQATAVAAAhQAAAigWAXQgVAXgfAAQgXAAgSgIgAgXgGIgVANIAAAaIAAAXIAAAYIAUAIQAJADAMAAQAUAAANgPQAOgPAAgXQAAgVgLgPQgMgPgUAAQgLAAgNAHg");
	this.shape_2.setTransform(11.3,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.2,45.8);


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


(lib.RitaShin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhVEVQAzgxAUhDIAFgEQARhJAEg6QAFg6gHhJIgFgJQABgJgCgOQgBgNACgdQACgcAJgQIgCAAIgBgFIADAAIABgLIAEhKIAAgFQAMgDAOgBIgDAOQgLAWgFAXQgOA5gCA7QgBAPACAPIAJBSIAAAJIAAAkQAAAcgFAjIgHAaIgNA4IgXA+IAAABQgSAagPAdIgBAAIgFABQgSAHgJAQIgBADIgPAKIAQAAIADgEQAKALANgQIABAIIAfgiIgFAYIgNANIAUgCIATgdIAGACIgNAaIAcgGIAgh0IgBgCIAEgNIADgEIAYhpIgDgHIAIgLIgBgDIACgKQAUhEAMhEIAOhUQADgTABgUQABgZADgYQAEAngBARQgBAQgEAgIgEAeIAAAEIgyDuIgDAEIgCAFIgEARIgBAAIgBADIgHARIgCAGQgCAEAAAGIAAAHIgBAXQAAAQADAQIAAAAIAAADQgEAEgCAGQgEARgCAQIgXAnIgvAIIhoAGIAvgug");
	this.shape.setTransform(13.3,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#030303").s().p("AgIADQADACAIgDIACgFIAAAAIADABIABADIgPAEg");
	this.shape_1.setTransform(24.6,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgyExIAFgXIgfAiIgBgIQgMAQgLgLIgDAEIgPAAIAPgLIAAgCQAJgRASgGIAFgCIACAAQAOgcASgaIABgCIAWg+IAOg3IAGgaQAFgkABgcIAAgjIAAgJIgKhSQgBgPAAgPQADg7ANg5QAGgXAKgWIADgPIARgCIAOAKIATAAIAWALIAAAAIgCAHQgJACgDgCIACACIAQgDIgBgFIACACQAFAKABAOQgCAYgBAaQgBAUgEATIgOBTQgLBFgVBEIgCAKIABACIgHAMIADAHIgZBpIgCAEIgFANIABACIgeB0IgeAGIAOgaIgGgCIgTAdIgVACg");
	this.shape_2.setTransform(14.3,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,64.9);


(lib.RitaPurse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFAFA").s().p("AADgBIAEAAIAAABIgNACg");
	this.shape.setTransform(15.6,45.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("AAAABIAAgCIAAACIAAABIAAgBg");
	this.shape_1.setTransform(12.1,44.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AAAAAIABAAIAAABg");
	this.shape_2.setTransform(11.5,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Ag6BrIgEAAIgCgCIgCgCQgNgHgGgPIgBACQgdg7ASg3QABgJACgJQAEgNAKgHIACgBIABgDIABAAIADgCIASACIABgEIAJAFIAHABQAKABAGAHQARASACAZQADA3gKA2IgBADIAAACQgCAEgEADQgLAJgNAAQgIAAgJgDgAABBOQgDgKACgMQAEgZgCgaIgCgrIAAgIIgBgIIgKgXIAogRQADgDAFgCIAMgEQAMgDAJADIAGgGQAIAKAFALIABABIACAFQAPAhgEAkQAKA7gxAiIgFACIgBAAQgEAHgGAGQgKAFgIAAIgEgBQgFAAgFgDIgJAJIgRAFg");
	this.shape_3.setTransform(13.3,35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag/DoQgNgGgIgLQgVgZgJgcQACgEAAgEIgGgaQACgXABgEQAEgKAPgbQAJgQAAgSIAAgBIAJgJIAGABIACgHIAQgFIgBgJQAChcADhdIACgPQADgOALgLQAPgYAkANQAXAIARATQASATAAARQAAAIgDADIgICGIAEAJIgBAKIAPAEIAAAGIAYAjIADgFQAEAxADAxIAAAIIABgBIACAAIgBAEIgCAAQAAAIgCAIQgDANgJAKQgoAug6AOQgLACgMAAQgWAAgWgJgAhDDcIADACIACACIADAAQAXAJASgPQAEgDACgEIABgCIAAgDQALg2gEg4QgCgZgQgSQgHgHgJgBIgIgBIgJgFIAAAEIgTgCIgCACIgBAAIgCADIgCABQgKAHgDANQgDAJgBAJQgSA4AeA7IAAgCQAGAPANAHgAAwANIgLAEQgFACgEADIgnARIAJAXIACAIIAAAIIACAsQABAagEAZQgCAMADAKIgKAgIAQgFIAJgJQAFADAGAAIgKAEIANgDIAAAAQAJAAAKgFQAGgGAEgHIABAAIAEgCQAygigLg8QAFgkgPghIgDgFIAAgBQgGgLgIgKIgFAGIgKgCIgMACgAgiABQABAEAEABIADABIACAEIAAgCIgBgCQAYAFAXgIIAEABIAEgIIAJgOQAHgKAAgMIABgXQAEgIACgLQAHgaAAgWQAAgKgEgJIADgEIgFgJQgHgOgUgDQgGgGgMAAQgFgCgEACQgWACAAAaIACALIgCADIgQCVIAEgHIAAABgAgSi8IACABIAAgCg");
	this.shape_4.setTransform(13.3,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,-0.8,23.8,48.3);


(lib.RitaHair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFDFD").s().p("AAJANIABAAIAAAAIAAACgAgJAAIANgOIAAAFIgEAEIgBAFIgDACg");
	this.shape.setTransform(31.4,38.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AgCAGIACgGIACgIIAAgBIABABIAAABIgDARIgCgEg");
	this.shape_1.setTransform(10.8,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AhAErIgXgPQgJAAgIgFQgPgIgPgUQgUgcAAgLQAAgJAEgMQADgMAAgIQAAgLgOgVQgOgUAAgeQAAgYAOgaIAOgXIgPgrQgPgwAAgdIADhAQADgugBgLQgCgLACgSIACgeQAAgLABgEQADgHALgIIADgBIABgBQAJgFAcAGIAEABIAVgEQAYgFAOAFIAAAAIACABQAQAGABASIAGALIABADIgFAGIgBABIAAgBIAAgBIAAABIgDAJIgCAGIABAEIgJAXIgQAUQADAEABAHIABgBQAEgFAGgDQAdgRAbALIAHADIgCAHQAdADgGAgIgCAIQgGATgRAMIABACQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAQAHgEAHgFQAQgDAQgBQAOAGALAKQAIAIAFAJQAFAKAGAPIACAGQgHAUgTATQARgNATgEIACAAIAPADQAVAFAEAUIAJAbIADAMQAAADgFAKIgBACIgBABQgTAeggARIAggJIANAIQAAAIAFAOQAFAUAAAJIgBALQgGAegqAIIgMABIgrADQgTABAAAHIABAEQADADAGAAQA8AAAfgPIgEALIgOAnQgOAigcASIgkABIgHgHIgDgCIgDgCIgCAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAIAAADQgBAJADADQADAEALACIAXABIACAAQgIAHgPAHQgOAHgQAEIgCAAQgRAEgRAAQgSAAgjgXgACaCyIAIgEIgGAHIgCgDgABViJIgEgEIAGACIABACIAEAFIAAAAIgHgFg");
	this.shape_2.setTransform(14.3,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhVE5QgbgPgMgLIABgJQAIAEAJABIAXAOQAjAXASAAQASAAAQgDIACgBQAQgEAOgHQAPgHAIgHIgCAAIgXgBQgLgCgDgDQgDgEABgJIAAgCQAAgBABAAQAAAAABAAQAAgBABAAQABAAABAAIACABIADABIADADIAHAHIAkgBQAcgSAOgjIAOgmIAEgLQgfAOg8AAQgGAAgDgCIgBgEQAAgHATgCIArgCIAMgCQAqgHAGgeIABgLQAAgKgFgTQgFgPAAgHIgNgJIggAJQAggRATgdIABgBIABgCQAFgLAAgDIgDgKIgJgcQgEgUgVgGIgPgCIgCgBQgTAFgRAMQATgSAHgVIgCgFQgGgPgFgKQgFgKgIgHQgLgKgOgHQgQABgQADQgHAGgGADQgBAAAAABQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBgDQAQgLAGgTIACgJQAGgfgcgEIACgGIgHgEQgcgKgdAQQgGAEgEAEIgBACQgBgIgDgDIAQgUIAJgYIAEgSIABAAIAFgHIgBgCIgGgLQgBgTgQgGIgCAAIAAgBQgOgEgYAEIgVAFIgEgBQgcgHgJAFQAHgLAzgDQAjgCAOAHQAIgFAJAMQALAQAAAPIAAAQIgBABIgBAEIAAAFQgCAQgIANIAkACQAEAFAFACIAgAgIABALIAEALIAAABIABAHIgBADIACgBIABADQAIAEAQAMIAEADIAHAGQAhAdAAAdIAAAJQAjgGARAfQANAWAAAdQAAAGgGALIgGAKIgCAHIAAAAIgPANIAFAEIADgCQAFAGAEAIIADgBIABABIgBAJQAGASAAAYQAAAbgSAPIgHAGIgIAEIACAEQADAFAAAIQAAAUgTAhQgUAkgcAHIAAACQAAALgpAQQgmAPgWAAQgVAAgkgUg");
	this.shape_3.setTransform(16.2,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-0.5,36.8,66.6);


(lib.RitaHair1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("AAAAAIABgDIgBAHIAAgEg");
	this.shape.setTransform(6,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFBFB").s().p("AgIAEIAJgGIAIgBIgIADIgIAEg");
	this.shape_1.setTransform(36.6,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AAQFLQgKgFgFgHQgJgFgygDIgJgIIAFgKIAHgHIAAgCIgCAEIgMACIgFAGIgLgKQgDAAgBABIgCADIACAEIgNgBIgDgQIAWgNIgYAGIgHgKQgdAKgYgKQAEAAACgCIABgEQgagSgGgIQgIgKAAgRQAAgfAbgbIATgVQAFAEAFAAQAEAAABgBIABgBIABgDIAIAEQgKgVgIgYIgCgGQABgaATgdIAUggIgBgEIBIgeIABACQALgFALAAQAKABAGACIAAgEIgdgaQgHgnAegZQAKgcAiACIAMgCIAPgGIAGAJIAGADIgCgLIAIAEIAHgEIgBAAIgGgBQgjgCgFggQgEgHgBgHQgBgKAFgOQARguAzACIABgFQAFgNARgJQANgHAMAAIAJgCIAEgDQAUA7AJA8QgNAUgDAWQgMBkAABmIgHAFIgYAqQAJBiAPBjIgCgBQgKAAgJAJQgLANgJAHQghAahHAAIgFAAg");
	this.shape_2.setTransform(21.3,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWFQIgJgHQgKgDgOABQgMAAgSgHQgNgEgIgKIgDgDIgrgWIgCgDQghgJgfgMIgDgBIgCgLQgFgGgDgJQgFgOABgRQAAgMACgKIgCgFQAGgUAOgRIAFgGQAIgDAIgJQAGgHADgIIAAgBIABgBQgBgMABgMQAAghAGgQIACgDIAAgBIACgHIAGgGQAGgKAJgIIABgCIACgPIABgFIBXgmIgJgKIALgoIgJAQQADgNAHgHQAjgkAogfQgJgRAAgSQgBgOAGgOQAJgXARgPQASgRAbgHQAMgDALgGIAQgIIAJgFIAIgDIAFgDIAEALIgDADIgKACQgMAAgNAHQgRAJgFANIgBAFQgygCgSAuQgFAOACAKQAAAHAEAHQAFAgAkACIAFABIABAAIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgNACQghgCgMAcQgdAZAIAnIAcAaIAAAEQgHgCgKgBQgKAAgKAFIgBgCIhJAeIABAEIgUAgQgSAdgBAaIABAGQAIAYALAVIgJgEIAAADIgCABQgBABgEAAQgFAAgEgEIgUAVQgaAbAAAfQAAARAHAKQAHAIAZASIgBAEQgBACgEAAQAXAKAdgKIAHAKIAYgGIgWANIADAQIANABIgBgEIABgDQABgBAEAAIAKAKIAFgGIAMgCIACgEIAAACIgHAHIgEAKIAJAIQAwADAKAFQAFAHAKAFQBLABAigbQAJgHALgNQAJgJAKAAIACABIABACIgFALQgPAHgYAYQghAXg/AAQgQAAgJgHgAizCCIACABIgEADIACgEg");
	this.shape_3.setTransform(19.2,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.3,68.6);


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


(lib.Lesson2Rita = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		playSound("Ihavebrownhair");
	}
	this.frame_60 = function() {
		playSound("ball_passes");
	}
	this.frame_108 = function() {
		playSound("_1b");
	}
	this.frame_114 = function() {
		playSound("Ihaveayellowbag");
	}
	this.frame_147 = function() {
		playSound("ball_passes");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(39).call(this.frame_60).wait(48).call(this.frame_108).wait(6).call(this.frame_114).wait(33).call(this.frame_147).wait(88));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgFAHAAQAHAAAGAFQAFAGAAAGQAAAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape.setTransform(253.9,36.1);

	this.instance = new lib.hair("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(227.2,24.4,1,1,0,0,0,29.9,22.9);

	this.instance_1 = new lib.brown("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.1,24.4,1,1,0,0,0,38.6,22.9);

	this.instance_2 = new lib.have("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(62.1,24.4,1,1,0,0,0,34,22.9);

	this.instance_3 = new lib.I("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(7.3,24.4,1,1,0,0,0,10.3,22.9);

	this.instance_4 = new lib.a("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(94.4,24.4,1,1,0,0,0,10.4,22.9);

	this.instance_5 = new lib.yellow("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(146.1,23.6,1,1,0,0,0,34,22.9);

	this.instance_6 = new lib.bag("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(234.6,24.4,1,1,0,0,0,29.9,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{x:7.3}},{t:this.instance_2,p:{x:62.1}},{t:this.instance_1},{t:this.instance},{t:this.shape,p:{x:253.9}}]},21).to({state:[]},87).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_2,p:{x:42.3}},{t:this.instance_3,p:{x:-8.5}},{t:this.shape,p:{x:258.6}}]},6).wait(121));

	// Layer 4
	this.instance_7 = new lib.hair("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(227.2,24.4,1,1,0,0,0,29.9,22.9);
	this.instance_7._off = true;

	this.instance_8 = new lib.I("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-8.5,24.4,1,1,0,0,0,10.3,22.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).wait(39).to({startPosition:0},0).to({scaleX:0.85,scaleY:0.85,x:185.1,y:103.6},15).to({_off:true},33).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(114).to({_off:false},0).wait(33).to({startPosition:0},0).to({scaleX:0.86,scaleY:0.86,x:24.6,y:103.2},14).wait(74));

	// Layer 3
	this.instance_9 = new lib.brown("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(144.1,24.4,1,1,0,0,0,38.6,22.9);
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

	this.instance_14 = new lib.yellow("synched",0);
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

	this.instance_16 = new lib.bag("synched",0);
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


(lib.RitaHair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.RitaHair1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.9,2.8,1,1,0,0,0,39.9,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,rotation:4.3},13).to({regY:1.7,scaleX:1,rotation:1.5},13).to({regY:1.8,scaleX:1.05,rotation:4.3},16).to({scaleX:1,rotation:0},12).wait(1));

	// Layer 1
	this.instance_1 = new lib.RitaHair2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.9,2.6,1,1,0,0,0,1.3,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:1.4,scaleX:0.92,rotation:2.5},11).to({regX:1.3,scaleX:0.97,scaleY:1.02,rotation:2.8},14).to({regX:1.4,scaleX:0.92,scaleY:1,rotation:2.5},15).to({regX:1.3,scaleX:1,rotation:0},14).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414141").s().p("AgEAAIgHgDQALABALAEIABABIAAAAIgBABQgJgDgGgBg");
	this.shape.setTransform(44.5,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgJE6IgBgBIgIgEQgGgHgEgBIAAABIgLgJQgTgPgPAAQgEAAgbAJQgaAIgZgBQgZgDgNgmQgKgbAAgdQAAgMAOgTQANgSAAgUQAAgTgDgmQgDgnAAgTQAAgXAgguQAog7AOgmQANghAPgzQAKgbADgOQABgFAVgOIALgIIAGgGQAIgFAKAAQAOgBAJADIAIADQAHABAJADIAAABIAAgBIABgBIAAAAQAJAGAPANIAcAqIAHALQAgA1AAATQAABKAdAsIAUAgQAJARAAAZQAAANgIAIQgIAJAAAQQAAAMALAfQAKAfAAAmQAAAngEAMQgQAqg4AAIgFAAIgFAAIgEAAIAAACIgDABIgQAOQgeAVg3AAQgLAAgIgDg");
	this.shape_1.setTransform(40.7,32.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUFCIgBgBQgJAAgTgQIgVgQQgLAAgYAJQgZAIgKAAQgvAAgSg0QgJgaAAghQgBgSAOgRQAOgQAAgRQAAgSgDgoQgDgogBgTQAAgZAohCIAxhQQANgeAJg7QANgsAtgYIAAAAIACgBIAIgEQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQAngMAmARIAAAAQAJAFAMAKQAaAXAAALIAAAEQAMAPAKARQAbAygKAnQADA8AeAlQAcAjAAApQAAALgIAOQgHAOgBAFIALAuQAJAxABAPQAAAugIASQgTAsg/AAIgBADIgCgCQgVAQgNAHQgZAOg2AAQgTAAgLgHgAgSE0IAJAEIAAABQAIADALAAQA4AAAdgVIAQgOIADgBIAAgCIAEAAIAGAAIAEAAQA5AAAPgqQAEgMAAgnQAAgmgKgfQgLgfAAgMQAAgQAIgJQAJgIAAgNQAAgZgJgRIgUggQgdgsgBhKQABgTghg1IgHgLIgcgqQgPgNgIgGIgBAAIgBAAQgMgFgLgBQgKgDgOABQgKAAgIAFIgFAGIgMAIQgUAOgBAFQgEAOgKAbQgPAzgNAhQgOAmgoA7QggAuAAAXQAAATAEAnQACAmAAATQAAAUgNASQgOATAAAMQAAAdAKAbQANAmAZADQAZABAagIQAbgJAEAAQAPAAATAPIAMAJIAAgBQADABAGAHg");
	this.shape_2.setTransform(40.7,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,82.8,69.5);


(lib.barb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.RitaShin("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-13,51.7,1,1,0,0,0,22.4,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({startPosition:0},0).to({regX:22.6,scaleX:1,scaleY:1,rotation:10.5,x:-12.9},18).to({regX:22.4,scaleX:1,scaleY:1,rotation:0,x:-13},19).wait(20));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AABADQgBgBAAgCIAAAAQAAgBAAgB");
	this.shape.setTransform(-13.9,-54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0033").s().p("AgfANQgJgIgBgJIAAgBIgBgCQgDAAgCgCIAIgDIAAABIgBACIAAABIAEAEIAMAKQANAMAPAAIAIAAIAFgDIABgBIALgNIAEgFIACgEQABgEAAgEIgCgEIgDgBIgjAEIgBABQgPADgOAAQANgEAPgBIA2gHIgKAWQgHANgMALIgYAEQgOgCgMgKg");
	this.shape_1.setTransform(-2.8,-55.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD0A0").s().p("AA4CGIgBgLIgBgaIgCgNQgEgPgHgPIAAgDQAAgMANgBQAOADAEAOIACAHIABABQAHAPgCAPQgBAFABAFQACAJAAAJQAAAIgCAJQgCAIgKABQgNgBABgMgAguhKIgCgKQgBgHgFgFIgHgHQgJgIgHgKQgKgPAPgIIAEgCQAFACAFADQAFAEAEAGIADADQAMAKAHANIACADQAIARgIAQIgDADIgHABQgIAAgDgJg");
	this.shape_2.setTransform(-15.4,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkE4IgHgCIAAgBQgJgDAAgJQgDgaAXgFQAYAFgHAaQgEAPgMAAIgFAAgAg5DoQgDgEABgGQABgXAYgCQAfAHgEAeQgCAJgJACQgHACgGAAQgRAAgJgPgAhuDZQgNgCgKgHQgFgEAAgHQgCgYAYgEQAkgDgHAjQgEAQgQAAIgDAAgAgSCtQgegHANgbQAHgOAOgCQAaACAAAZQAAAZgTAAIgLgCgAhgCFQgIgKAEgNQAEgQAQgBQAbABACAYQACAOgOAHQgHAEgGAAQgLAAgJgKgAAVBsQgVgGgJgSQgDgDABgFQABgSARgBQAbgCAJAYQAFALgGAKQgFAJgKAAIgGgBgAh7BFQgIgGACgLIAAgDIACgEQAFgLAOgDQAjAEgNAeQgDAIgJACIgGAAQgLAAgIgGgAARAXQACgUAUAAQAXAGgFAYQgCAMgMABIgGAAQgWAAACgXgABNAhQgEgGAAgIQABgTARgCQAhACgGAfIAAABQgCAKgJACIgCABIgGAAQgOAAgIgMgAhbAZQgOgKAGgQQAFgPAQgCQAJgBAGAGIAAABQAVALgKAXQgDAIgJABIgFAAQgMAAgKgGgAghgCQgHgJAFgLQAFgNAOgBQAXgEAFAUQACAHgEAFQgHAKgLADIgIACQgLAAgGgJgABjghQACgRAQgCQAdADgIAdQgDAMgMAAIgDAAQgaAAAFgZgAAXkYIAGgBQADAAADgDIgFAEIgEAAIgDAAgAAPkjQgGgCgGgEIgCgBIgBgCIgBgBIgCgCIgCgCIAFAAQAIgCAIgBIABAAIAJgBIAPgCIAAAAIADAAIgBACIAAABIgBABIAAAAIgBACIgBABIAAAAIgDAFQgGAKgIAAIgIgCg");
	this.shape_3.setTransform(-4.7,-25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CCFF").s().p("AgdC7QAQADAEgRQAHgagYgFQgXAFADAaQABAJAIADIABAAIABAGIgJgHQgGgKgJgJQgOgMgNgNQgRgYgXgTIgLgKIgIgKIgKgUIgBgCIAAgDIgBgBIgFgBIgCAAIgBAAIgBgCIANgfIgDgDIAAgFQgBgIADgGIADgEIABgCIAChLIAaAMIgBADQgCALAJAGQAKAIAOgCQAJgCAEgIQAMgegjgEQgNACgFAMIgRgKIACgLIgHgJQBBhJBfAIIAKAJIgCgGQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQALAPgLAYQgLAZgYANIAHAGIArg4IAAgXIAnAXIACgDIAAgEIgEgJIAOgKIASgYIAEAAIAJgBIAAABIADgBQAIgCAHABQAQADAGATQAKAkgbAdQgHAHgIAGIAEAAIgIADIgEADQAFgfghgDQgRADAAATQgBAIAEAGQAKAOASgCIADgBQgEAGgBAIIgHAHIgEAFQgRAZgPAbIgGALIgIALIAAABIAAAAIgDAPIAAAHQgDAEAAAEIAAAFIgBACIgBABIgBAIQgBADgCACIgEAKIgFATIACgNIgEAEQgRA4gjAwIgCACgAg1BiQAAAGACAEQANAVAbgIQAJgCABgJQADgegegHQgYACgBAXgAhuAtQgXAEABAYQABAHAFAEQAJAHANACQAUACAEgSQAGgggeAAIgGAAgAgdAPQgNAbAfAHQAdAIAAgfQAAgZgagBQgOABgHAOgAhegNQgEANAJAJQAOAQATgKQANgHgBgNQgDgYgbgBQgPABgFAQgAANhCQgRABgBASQAAAFACADQAJASAVAGQAPAEAHgMQAFgKgEgLQgJgWgYAAIgEAAgAAYhkQgCAaAbgDQAMgBADgMQAFgYgYgGQgUAAgBAUgAhIiOQgPACgGAPQgGARAPAKQALAHAPgBQAJgBAEgIQAJgYgUgLIgBgBQgFgFgGAAIgEAAgAgKigQgOABgFANQgEALAGAJQAKANAQgFQAKgDAIgLQADgFgBgHQgFgRgQAAIgIABgABpidQgEAbAcgCQAMAAADgMQAJgdgegDQgPACgDARg");
	this.shape_4.setTransform(-5.3,-12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AjBOXIgBgCQgLgEgIgMQgHgOgDgOIgFgLQgDgFgCgHIgBgDIAAAAIgCACIgIgYQgMgjAAgdQAAgFALgVQAKgVAAgFIgBgIIAAAAIAKghQAMgiAAgRQABgTAEggIAFg1QACgVAIgfQAJgjAEgRQAGggAPgoIANgdIADABIAIhGQgGgYAIgYIAAgEIAHgiQABhJgGhIIgCgDQgBgFAAgFIABgOIgBgFIgBgPIgBgBQgCgHABgGIgGgsIANgRIAyhtIgTAtIAag3IAAAAQAAgDACgDIACgBIACgGIACADIAEAAQAOACADAPIADAHQANAbAIAcQACAHAAAIIAAAGQACAQgCARIAAABQAOAngNAoQgKAfgDAhQgCAUgJASIgEAHIgCAOIgDAGIACAGQgIA0gMA1IgBAGIgBAGQgBAPgEAPIgJAcQgJAcgQAZIgHAJIABAAIAFABIADgFIAAAGIABABIABgDIAAADQAHAEACAKQADALgDAKIAAACIAAAEQAAAPgIANIgCAFIgUA4IgHARIAAABIgBAEIgBADIgBAIIgIAdIgFASQgEAOgBAPQgDAegIAcQgCAIgEAHQgDAHgBAIQgBAWgFAVQgBAJgEAIQAHASAAAUQgBAOADAOIADANIAAACIALAYQASAGAQAOQAHAGAEAIQAEAKgCAHQAAAEgDAEIgDADQgEgYgVgOIAAAAIgDABIgBAAIAAABIgBACIAAABQAAADACACQAMAPAJASIABAAIgGADIgIACIAAAAIgBgCIgBgBIAAgCIAAgBIgBgCIgJgOIgBgCQgDgIgIgEIgCABIgCABIAAADIACAJIABACIAHAJIAAADIABACIADADIADAHIgOAFIgFABQACgUgLgQIgEgBIgCAAIgCABIAAADQgBAFABAFIABABIADADIABADQABADAAAEIABABIABACIgBADIABAEIABABQgDACgDAAQgEAAgCgEgAinE9IgCgJIgBAIIgWgLIgTAAIgOgKIgRACQADgUAAgUIgTgtIAAADQgJgNgJgRQgYgugQgxQgNgbgMgcQgZg7AFhDQABgOAGgNIAHgUIgCgDIAGgRQADgUAEgUQAFgTAMgJQAHgPALgNIAJgJIAMASQgEgDgGgBIgEABQgPAIAKAPQAHAKAJAIIAHAHQAFAFABAHIACAKQAEANAOgFIADgDQAIgQgIgRIgBgDQARARAQATIAYAZQARAYAMAcIAGADIAKA0IgDgGQgEgPgOgDQgNABAAANIAAACQAHAPAEAPIACAOIABAYIABALQgBAMANABQAKAAACgJQACgJAAgIIAAACIgWEiIABAAIgFAJgAnAA9IAAgCIAIgFIAWg+IADgBQgDgKgBgKIgCgcIABgIQgBgagGgaQgEgXgCgXIgCgHIAAgLIgFg3QgBgPABgPIgCAEIACgGQACgSAHgQQAEgIAFgEIAihYIAFgEQAchFAig8IAOgZIAAgBIACgCQAOgRALgRQADAAADgCIAAgBIBegKIAGgFQACgIAFgGQAEgFgBgHQgBgHABgEIACgHIACgEIAIAEIAKAEQAgAMAjgLIgEALIAAABQAFAFAAAJQABAMAGALIAKgFQAbgLAcgCQAKgCAJADIACAAIABABIAEACQAJAEAFAIQAIANAEAPQADAOgBAPQADARAAASQAAADACADIgBAJQgBgPgNgJIgDgBIgCAAIAAgBIgCABIgNgBIgDgCQgSAEgRAGIgFADIgSARIgIAGIgCABIgFAFIgZgJQgJgYgYgHIgBACIANAHIAKAVQhAgKg9AdQgnATgVAlIAIgqIgEAHIAAAAIgEAKQgbA9gXA+QgPAogWAlIgBABIAAADQgCAJABAJQAFAEAAAJIAAARQABAcgEAbIgBAaQAAAGgDAGQACAbgDAaIAAAAIAAABQABAdgDAdQgCAYgJAYIgUgyIgJAFIAJAiIgBgmIASA6IgGAWgAA7j4QgmgngKg0IgFggIANAKIgQgYIAYgVIAEgKIACgHQACgEAEgCIAGgEIABAAQAbgBAHAbQAIAbAMAYIAEAHICTifIABgPIALgOIABgGQgGgGADgMIAGgbQACgMAFgLIAEgNQABgEAEgCIACgCIAJAAIACABQAGACABAGIgBAKIAAABQgJAagGAcIAFgCIAAAAIAAgBIgBgCIABAAIAAABIAAAAQAKAAAJgFIADgBIABAAIAAAAIACgBIADAAIABAAIABAAIAAgBIAHAAIABgBIABAAIAAAAQAGgBAFgCIAGgBQANgBAKgIQALgJAGgNIAHgOIAAgBQAGgKAIgKIABgBIACAAIgBABQgCAGAAAGIgBABIAAABIAAABIgBACIAAAAIgBABIAAABIgBACIAAABIAAACIgBABIAAAAIgBABIgDAFIAAABIAAACIgBABQgBADgCADIAAABIAAABIgBAAIgCAEIAAACIgBAAIgBABQgCAFgFAEQgGAFgHADIABABIAAABQAGAAAFgDIABgBIABAAIAAgBIABgBQAOgOAFgSIABgBQACgDAAgDIACgCQADgJABgJIAAgBIACgDIAAAAIAAgBIAAAAIgBgBIAKgBIAAABIgBAFIAAABIgBAAIAAABQABAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIAAAAIgBADIgBABIAAACIAAABIgBABIAAABIAAABIgBABIgBABIAAABIgBADIAAABIgBACIAAAAIgBABIAAABIAAACIAAABIgBABIAAABIgCAEQAAAEgDADIAAABIAAAAQgKAQgOAMIgGACIAAABIAAACIADAAIAEgBQALgGAGgLIADgFQAJgJADgMIAAgBIAHgUIAAAAIABgBIAAgCIAAAAIABgBQADgHgBgHIADAAQAIABAIAEIAAAAIABABIABAAIAAABIAAABIgCAEIgBABQACAEAAAEIAAABIgDAGQgBAFgCADIgBABIAAABIgBADIgBABQAAADgCADIAAABIgEAFIAAABIAAABIgDAEIAAABIgBACIgBAAIgBADIAAAAIgCADIAAABIgOAPIAAABQgDAEgEADIgGADQgSARgbAKIgEABIgUAJIgPAGIgFADQgWAPgUARIgFAHQgmA1gnA0IgHADQgsA5g6AvQgEADgGABIgHgBgAGCowIAAABIAAACQADABACgBQAEgCAFAAIAAAAIABgBIABAAIAGgHIAAAAIAEgFIACgEIABgCIADgHIAAgCIABgIIABAAIABgDIABgCIADgIIABAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIABgBIAAgCIABgBIABgBIAAgBIAAgCIABgCIACgFIAGgHIABAAIAAAAIAAgBIADgDIAAgBIAAgBIgBAAIgBgBIgBAAIgKALIgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBABIAAABIgBABIAAADIgBAAIAAABIAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAIAAABIAAABIAAAAIgBABIAAACIAAAAIgBABIgBABIAAAAIgBADIAAABIAAAAIgBABIgBABIAAABIgBACIAAABIAAADIgBAAIgBABIAAACIAAADIAAAAIgBACIAAACIgEAJIgBAAIAAABQgEAGgFAFIgBAAIgBAAIgIABIAAABIAAAAIgDABgAGjo/IgBAAIAAABIAAAAIAAABIgBAAIAAAAIgBABIAEgEIgBABgAEpo2IABgBIgBABgAGDpmIAAABIAAAAIAAgBgAGRp+IABgBIgBADIgBABIgBAAgAibqmQgNgEgLgKQgTgSgHgZIgBgDIAAgBIgBgCIgBgHIgHgmQgDgPACgRIABgEIAfhBQBJABBCgfIADABIADgDQAEgDAFAAQAPACAEAPQAFARAAASQABAVADAVIABACIABACIAAACQACALgBANIgBAPQgBAKgJAFIgTAjQgPAcgVAYQgQAUgZABIgEAAQgaAAgTgSgAhWsCIgiADIgaAJIgDACIAHAKIABABIALAOQAEAFACAFIABACIACAAQAFACAGABIACABQAOAAAOgBQADAAACgDQALgJAIgLIACgGIACgEIAFgHIAFgFIAAgEIgBgCIAAgDIgBgCIgCgCQgSAEgTAAIgDAAgAhfseIAAAAQARAAAHgJQAFgHgJgCIgMAJIgSAFIgCAAIgBgBIAAgBIgEgBQgDgBgDAAIAAAAIgBABIAAAAIACACIAHACIgBABQAAAAABAAQAAABABAAQAAAAABAAQABABAAAAIAHAAIABAAIAEAAgAiVtLQgFAFAAAGQAAAGAFAEQAEAFAGAAQAGAAAFgFQAEgEAAgGQAAgGgEgFQgFgEgGAAQgGAAgEAEgAhItZQgHACgBAJQAAAKAHADQADACADAAQADAAACgCQAFgCABgFQAEgMgJgEQgDgCgDAAIgFABgAiotpIgRAaIAfgZIAcAHIgPgPgAhbtlIAagRIAbAKIgWgTg");
	this.shape_5.setTransform(6.8,19.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#030303").s().p("AAAADIAAgGIABAHg");
	this.shape_6.setTransform(-10.1,50.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#040404").s().p("AgQAJQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIABgBIALADIgBAAIgHAAgAgEAJQgDgDgHgBIARgFIAMgIQAJACgFAGQgGAJgPAAIgCAAg");
	this.shape_7.setTransform(-2.3,-61.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#070707").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_8.setTransform(-7.1,-64.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#020202").s().p("AgMgIIAagHIAPAOIgbgGIgfAXg");
	this.shape_9.setTransform(-8.8,-67.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#414141").s().p("AACABIgEgBIACAAIADABIAAAAIgBAAg");
	this.shape_10.setTransform(-3.6,-80.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCFCFC").s().p("AgCADQACgDAAgEIADAJg");
	this.shape_11.setTransform(-5,108.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDFDFD").s().p("AAGAMIAAgBIACACgAgHABIAEgIIADgFIAAAEIAFAAIABAAIAAAAIgCAHIABAFQgBADABADIABAAIgBABg");
	this.shape_12.setTransform(31.9,-43);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0B0B0B").s().p("AAMASQgGAAgFgDIgBAAIgBgCQgCgFgEgFIgLgNIgCgHQABACAEAAIABACIAAABQABAKAIAHQAMAKAOADIgHAAIgCAAg");
	this.shape_13.setTransform(-5.5,-54.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AjGPEIgFgDQgJgGgDgJIgRgGIgIgZIgGALIAEgZQgIgJgJgqIgKg3QAAgJANgZIAGgLIAAgDQAAgQANgjQAMgjAAgUQAEgSACgiQACgkAEgRIAWhpQALgtAQghIAEgJIAAAAIAWkiIgBgCQAAgJgBgJQgBgFAAgFQACgPgGgNIgBgCIgJg0IgGgDQgNgcgRgYIgYgZQgQgTgRgRQgHgNgMgJIgDgEQgEgGgGgEIgLgSIgJAJQgMANgHAPQgMAJgEATQgFAUgDAUIgFARIABADIgHAUQgGANgBAOQgEBCAZA8QALAcANAbQAQAxAYAuQAJARAJANIAAgDIATAtQAAAUgDAUIgZAEQABgrgRgnQgnhbgXhgIgEATIgIAFIgBAMIgBgCIgCAAIgKAHIAAAVQgEAIgFAHQgDgFgGgCIAAgBIg1gOIgCADIgDgDIgBgaIA7AdIAHgWIgSg6IABAmIgJgiIAJgFIATAyQAJgYADgYQACgegBgcIAAgBIAAAAQADgagBgbQACgFAAgHIACgaQADgbgBgcIABgRQgBgIgFgFQgBgJACgJIABgDIAAgBQAWglAPgoQAXg+Acg9IADgKIABAAIADgHIgHAqQAUglAogTQA9gdBAAKIgLgVIgNgHIABgCQAZAHAIAYIAaAJIAFgFIACgBIAHgGIATgRIAFgDQARgGASgEIACACIANABIACgBIABABIACAAIADABQAMAKABAOIABgJQgCgDAAgDQABgSgEgRQABgPgDgOQgDgPgJgNQgFgIgIgEIgFgCIgBgBIgCAAQgJgDgKACQgcACgaALIgLAFQgGgLAAgMQgBgJgFgFIAAgBIAEgLQgjALgggMIgKgEIgHgEIgGgEIADAIIgBAHQgCAEABAHQACAHgFAFQgFAHgBAHIgGAFIheAKIgBABQgCACgDAAQgMARgOARIgBACIgBABIgOAZQghA8gcBFIgGAEIgiBYQgFAFgDAHQgIAQgCASIgCAGIACgEQgBAPACAPIAEA3IABALIABAHQACAXAFAXQAFAaABAaIgBAIIACAbQABAKADAKIgCABIgWA/IgJAFQgCgVgDgUIAGADIAcgkIgYigQgCgUABgVIADhNIAAgIIAXg1IgEgCQAGgKAEgIIAHgHIgBgCIAZg6IgCAAIAAAAIAAgBIABgDQAbgsAZguQAMgWAQgTIAIgLQAKgOAOgJQAGgDAGgBIACABIABABIAAAAQAYgKAfAFIAggtIgRgUIgBAEIgBAAIgBAAIgJgJIADgHIgNgVIACgRIgCgHIABABIAAAAIABADQAHAZAUASQAKAKANAEQAVATAcgBQAagBAPgUQAVgYAPgcIATgjQAKgEAAgLIACgPQAAgMgCgMIAAgCIgBgCIAAgCQgEgVAAgVQAAgSgFgRQgEgPgPgCQgGAAgEADIgDADIgDgBQhCAfhIgBIgfBBIgBAEQgDARADAPIAHAmIABAHIABACIgKgKIADgUIgGgHIgGghIAFgMIgWAKIAbgjIAOguIgFgLIAAgCQAJABAKgEIAGgCIABAIIANAEIA7gMIALgBIAHgBQAhACAMgUIAQgMQAHgBAFACQAEACADAFQADADABAGQAFASABATIAAABQAAAOgCAOIANAHIgJAAIABACIABACIgBACIgDABIAAACQACAGAGAFIAAAlIgFAHIADAPIgGAAIhBBuIACAJQgEAHACAKQACAIAEAFIAAACIABgBQAJAJATgHIADgDQAQADAPgKQAKAFAKACIABABQAEAFAGACIACAAIAVAmQgEAhAKAgIgBAEQgKATAAAYQAAASANAKQAIAQAPAEIAJA2IAwgsIgggFIAigBIAsgzIgGgEQAjgOATggIABgMIgGAFQgsAhg1gOIAAAAQBFAKAsg4IAAgaQAFgQABgSIACACIABAAQADACAFgCQAEgEABgGIADgLIABAAIAIgEIABAAQAEgCAFAAIgBABIAAABIgIAAIgCACQgEACgBAEIgFANQgFAMgCALIgGAbQgCAMAFAGIAAAGIgMAOIgBAPIiTCfIgDgHQgNgYgHgbQgIgbgaABIABgDIgDADIgGAEQgEACgCAEIgCAHIgEAKIgXAVIAPAYIgNgKIAFAgQAKA0AmAnIAHABQAGgBAFgDQA5gvAtg5IAGgDQAog0Amg1IAFgHQAUgRAWgPIAEgDIAQgGIATgJIAEgBQAbgKASgRIAGgDQAFgDADgEIAAgBIANgPIABgBIABgDIABAAIABgDIAAAAIABgCIABgBIACgEIAAgBIAAgBIAEgFIABgBQACgDAAgDIAAgBIABgDIABgBIAAgBQACgDABgFIADgGIAAgBQABgEgCgEIAAgBIADgEIAAgBIgBgBIAAAAIgBgBIgBAAQgIgEgIgBIgCAAQAAAHgDAHIAAABIAAAAIAAACIgBABIgBAAIgGAUIgBABQgDAMgIAJIgDAFQgGALgMAGIgDABIgDAAIgBgCIAAgBIAHgCQANgMAKgQIAAAAIABgBQACgDABgEIABgEIAAgBIABgBIABgBIAAgCIAAgBIAAgBIABAAIAAgCIAAgBIACgDIAAgBIABgBIAAgBIAAgBIAAgBIABgBIABgBIAAgCIAAgBIABgDIAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIAAAAIABgBIAAgFIAAgBIgJABIAAABIABAAIAAABIgBAAIgBADIgBABQAAAJgEAJIgBACQAAADgCADIgBABQgGASgOAOIAAABIAAABIgCAAIAAABQgGADgFAAIgBgBIAAgBQAGgDAGgFQAFgEADgFIAAgBIABAAIAAgCIADgEIAAAAIAAgBIAAgBQADgDABgDIABgBIAAgCIAAgBIADgFIAAgBIABAAIAAgBIAAgCIABgBIABgCIAAgBIAAgBIABAAIAAgCIAAgBIABgBIAAgBQAAgGADgGIAAgBIgBAAIgBABQgIAKgHAKIAAABIgHAOQgGANgLAJQgJAIgOABIgGABQgFACgGABIAAAAIAAAAIgBABIgIAAIAAABIAAAAIgBAAIgEAAIgCABIAAAAIAAAAIgDABQgJAFgLAAIAAAAIAAgBIAAAAIAAACIAAABIAAAAIgFACQAGgcAJgaIgFAuIABAAIAAgBIACAAIABAAIAAgBIABAAQAJgDAJgCIAAAAIAAgBIABAAIAIAAIAAgBIAAAAIAUgEIAQgFIAAAAIAEgDIADgCIAAgBIABgBIAAgBIABAAIAAgBIANgVIAAAAIABgCIABgCIAAgBIAAAAIAGgJIADgGIABAAIABgBIABAAIAAgBIACgDIgCABIADgEIAFgCQAIgDAIAAIABgBQAIABAIACIABAAIAEABIACABIAAABIABAAIABAAIAAAAIABABIAAAAIACABIAAABIAAAAIAAADIAAAEIAAABIAAABQAAAUgKAUQgcA4g8AUQgzASgeAoIgCACIgZAbQgPAQgLARIgUAeIgFAFIgCAFIgDAFQgWAOgPAVQgkAzg4AYQgJgCgFgIQgMgUgOgTIgBgDIgBgCIgCgDIgBgBIgGgUQgCgLgFgGIAAgBQgBgJgEgHIAAgDQAAgEgBgDIgBgBIgFgCIgFADIAAABIgBAAIAAAAIgDABIgBABIgBADQgIAHgEAJQgIAEgDAIQgHAOgBAOQgGAVAMAVIACAJIAAAFIADAJIAAABIAAAAQACAGAEAEIABAQIAGAIQAKAXACAXQAFBCgFBCQgCAigGAiQgJAugMAvQgKASgBAXIgCAiIgRBIQgHAbgEAbQgGAPgBARIAAABQgBAMgEALQgIAUgDAWQgIARgFASIgWBeQgVBBgEBEIgGAEIgDAUQgJBEAtAzIAAgBIACADIAZAWQAKAQgCAQIgEADIgFgBIgIABQgBABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQAAABABAAQgXAKgaAFIgBgBIgDACIgJADIgEACIgDAAIgIgBgAjpN1QACAHAEAFIAEALQADAPAIANQAHAMALAEIABACQADAEAEAAQADAAACgCIgBgBIAAgEIAAgDIgBgCIgBgBQABgEgCgDIgBgDIgDgDIgBgBQgBgFABgFIABgDIABgBIADAAIADABQALAQgBAUIAFgBIANgFIgDgHIgDgDIAAgCIgBgDIgHgJIgBgCIgCgJIABgDIABgBIADgBQAHAEAEAIIAAACIAKAOIABACIAAABIAAACIABABIABACIAAAAIAHgCIAGgDIgBAAQgIgSgNgPQgCgCAAgDIAAgBIABgCIABgBIABAAIACgBIAAAAQAVAOAFAYIACgDIAGACIgCgKQABgHgEgKQgDgIgIgGQgQgOgSgGIgLgYIAAgCIgCgNQgDgOAAgOQABgUgIgSQAEgIACgJQAEgVACgWQAAgIAEgHQAEgHACgIQAIgcACgeQACgPAEgOIAFgSIAHgdIACgIIAAgDIABgEIABgBIAHgRIATg4IADgFQAHgNAAgPIAAgEIABgCQADgKgDgLQgDgJgHgFIAAgDIAAADIgCgBIAAgGIgDAFIgEgBIgBAAIAGgJQARgZAJgcIAIgcQAFgPABgPIAAgGIACgGQALg1AJg0IgCgGIADgGIABgOIAFgHQAIgSACgUQADghALggQAMgngNgnIgBgBQACgRgBgQIAAgGQAAgIgDgHQgIgcgMgbIgDgHQgEgPgOgCIgEAAIgBgDIgDAGIgBABQgDADAAADIAAAAIgZA3IATgtIgyBtIgNARIAFAsQgBAGADAHIAAABIABAOIABAFIAAAOQgBAGACAFIABADQAGBJgBBIIgGAiIgBAEQgIAYAGAYIgIBGIgDgBIgMAdQgPAogHAgQgDARgKAjQgIAfgBAVIgGA1QgEAgAAATQgBARgLAiIgLAhIABAAIABAIQAAAFgLAVQgLAVAAAFQAAAdAMAjIAIAYIACgCIAAAAIABADgAiWhgIAEAMIACgCQAkgwARg4IAEgEIgCANIAFgTIAEgKQACgCABgDIABgIIABgBIABgCIAAgFQAAgEADgEIAAgHIADgPIAAAAIAAgBIAIgLIAGgMQAPgbARgZIAEgFIAHgHQABgIAEgGQAHgCADgKIAAgBIAEgDIAIgDIgEAAQAIgGAHgHQAbgdgKgkQgGgTgQgDQgHgBgIACIgDABIAAgBIgIABIgEAAIgSAYIgOAKIAEAJIAAAEIgCADIgngXIAAAXIgrA4IgIgGQAZgNALgZQALgYgLgPQAAABgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIACAGIgKgJQhggIhBBJIAHAJIgCALIARAKIgCAEIgagMIgCBLIgBACIgDAEQgDAHABAIIAAAFIADADIgNAfIABACIABAAIACAAIAFABIABABIAAADIABACIAKAUIAIAKIALAKQAXATARAYQANANAOAMQAJAJAGAKIAJAHIgBgGIAHACgAlii1IA2hBQAPgSgGgYIAFAOIgBg6gAGDpCIAAAAIAAgBIAAABgAGDoKIgBgCIAAgBIADgBIABAAIAAgBIAIgBIAAAAIABAAQAGgFADgGIABgBIABAAIADgJIAAgCIABgCIABAAIAAgDIAAgCIABgBIAAAAIAAgDIABgBIABgCIAAgBIABgBIAAgBIAAAAIABgBIABgDIAAAAIABgBIAAgBIAAAAIAAgCIABgBIABAAIAAgBIAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIABgBIAAgBIABAAIAAgDIAAgBIABgBIAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAIAAgBIALgLIABAAIABABIAAAAIABABIgBABIgCADIAAABIgBAAIgBAAIgGAHIgCAFIAAACIgBACIAAABIgBABIAAABIgBACIAAABQAAABAAAAQgBABAAAAQAAABAAAAQAAAAgBABIAAAAIgDAIIgCACIgBADIAAAAIgBAIIgBACIgDAHIgBACIgCAEIgDAFIgBAAIgGAHIgBAAIAAABIAAAAQgFAAgEACIgDAAIgCAAgAGhoaIABAAIAAAAIAAgBIABgBIABgBIgDAEIAAgBgAD6o+QgGgDgBgIIANAKIgFABIgBAAgAEopUIAAgCIAAgBIAGADIACAEIgBAEQgBgGgGgCgAhsqoIgCgBIAJAAIAZgFQAMgLAHgOIAKgVIg3AGQgPABgNAEQAOAAAPgDIABAAIAkgFIADABIACAEQAAAEgBAEIgCAEIgFAGIgKANIgBABQgDACgEABIgGABQgQAAgNgMIgMgMIgEgEIAAgBIABgCIAAgBIgIADIACAHIgBgBIgHgKIAEgCIAZgJIAjgDIACAAQATAAASgEIACACIABACIABADIAAACIAAAEIgFAFIgFAHIgCAEIgBAGQgJALgKAJQgDADgDAAQgNABgOAAIgBAAgAhXrNIgJABIgBAAQgJABgIACIgGAAIACACIADACIABABIACACIABABQAGAEAHACQAOAGAIgOIADgFIAAAAIAAgBIABgCIAAAAIABgBIABgBIABgCIgDAAIgBAAIgOACgAh7qsIgBgCIADACIAAAAIgCAAgAhjr7IgLgDIgGgCIgDgCIABAAIAAgBIAAAAQAEAAACABIAEABIABABIAAABIADAAQAGABADADIABAAIgFAAgAhJseQgHgDABgKQAAgJAHgCIAFgBQAEAAACACQAKAEgEAMQgCAGgFABQgCACgDAAQgDAAgDgCgAkCsnIAAgBIAKgCIALAEgAg8tcIAWATIgbgKIgaARgAAHtUIACgDIAAABIADAJIgCABQgDAAAAgIgAhnvEIAGAAIgCACIgEgCg");
	this.shape_14.setTransform(6.8,15.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#494949").s().p("AgeANIAHABIADAAIgHABIgLABgAAbgLIANgEIgQAMIADgIg");
	this.shape_15.setTransform(-0.2,-73.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AgHABQAAgBAAAAQABAAAAAAQAAAAABAAQAAgBABAAIAHgBIAFAAIgMAFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_16.setTransform(-4.9,109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(81));

	// Layer 3
	this.instance_1 = new lib.RitaHair("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.2,-48,1,1,0,0,0,42.3,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81));

	// Layer 4
	this.instance_2 = new lib.RitaPurse("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35.2,24.1,1,1,15,0,0,14.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-15},40).to({rotation:-7.3,y:24},10).to({rotation:15,y:24.1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,-82.7,109,196.3);


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
		
		 window.open ("adjective_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adjective_Scene3.html","_self");
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


// stage content:
(lib.adjective_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4_repeat:268});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_279 = function() {
		this.gotoAndPlay("scene4_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(279).call(this.frame_279).wait(1));

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

	this.instance = new lib.barb();
	this.instance.parent = this;
	this.instance.setTransform(108.3,192.6,1.078,1.078);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#9900CC").ss(3,1,1).p("EAojAYTMhRGAAAMAAAgwlMBRGAAAg");
	this.shape_25.setTransform(275,188.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.instance},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(280));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoiAb+MAAAg38MBRFAAAMAAAA38g");
	mask.setTransform(275,212.3);

	// content
	this.instance_1 = new lib.Lesson2Rita();
	this.instance_1.parent = this;
	this.instance_1.setTransform(356.6,138.3,1,1,0,0,0,125.5,23.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(280));

	// Anim
	this.instance_2 = new lib.bk("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(261.5,211.9,1.007,1,0,0,0,282.3,176.6);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(280));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'E7ACD2C3CF761F4B9F4435F94B04B609',
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
		{src:"sounds/Ihaveayellowbag.mp3", id:"Ihaveayellowbag"},
		{src:"sounds/Ihavebrownhair.mp3", id:"Ihavebrownhair"},
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
an.compositions['E7ACD2C3CF761F4B9F4435F94B04B609'] = {
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