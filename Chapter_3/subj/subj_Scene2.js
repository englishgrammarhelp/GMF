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


(lib.were = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAFAAAHgDQAJgCADgDQACgFACAAQADAAADADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape.setTransform(13,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAHAAQAGAAAAAMQAOgNARAAQAGAAADAEQADAFgBAJIAAAFQAAAJgHAAQgGAAAAgHIAAgFIAAgHQgMACgGAFQgGAFgFAKIAAAmQABAIgIAAQgGAAAAgIg");
	this.shape_1.setTransform(5.4,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAGAEAHAAQAFAAAHgDQAJgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_2.setTransform(-2.4,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAEAVIgDgRIgBgPIgGANIgLAeIgCAEQgDAEgEABQgGAAgFgXIgGgdIgBgLIgBgLQgBgDADgCQACgCADAAQAGAAABAGIACALIABALIAEAfQAIgWAIgdQADgIAFAAQAGAAACAJIAEAbIAGAbIAFgTIAKgoQABgEAFAAQADAAADACQABACAAADIAAADIgPA1QgCAHgFAHQgCAEgFAAQgIAAgFgUg");
	this.shape_3.setTransform(-11.7,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAFAAAHgDQAJgCADgDQACgFACAAQADAAADADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_4.setTransform(13,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAHAAQAGAAAAAMQAOgNARAAQAGAAADAEQADAFgBAJIAAAFQAAAJgHAAQgGAAAAgHIAAgFIAAgHQgMACgGAFQgGAFgFAKIAAAmQABAIgIAAQgGAAAAgIg");
	this.shape_5.setTransform(5.4,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAGAEAHAAQAFAAAHgDQAJgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_6.setTransform(-2.4,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AAEAVIgDgRIgBgPIgGANIgLAeIgCAEQgDAEgEABQgGAAgFgXIgGgdIgBgLIgBgLQgBgDADgCQACgCADAAQAGAAABAGIACALIABALIAEAfQAIgWAIgdQADgIAFAAQAGAAACAJIAEAbIAGAbIAFgTIAKgoQABgEAFAAQADAAADACQABACAAADIAAADIgPA1QgCAHgFAHQgCAEgFAAQgIAAgFgUg");
	this.shape_7.setTransform(-11.7,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-12.4,38,24.9);


(lib.TwoVERBSusedareWEREandBE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(195.3,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtBPQgJgJAAghIAAgOIABgRIgBgFQAAgDACgCIACgsIgBgLIgBgMQAAgMAKAAQAEAAADADQAMgDAMgCIATgBQAZAAAPAGQAHACAAAHQAAAFgDADQgDADgEAAIgDAAQgRgFgRAAIgRABQgKACgLADIABALIgCAnIAsgEIAYgCQAEAAADACQADADAAAFQABAIgKACIgYACIgvAEIgBAOIAAAMQAAAXAEAEQACACANAAIATAAIATAAIAGgBIAGgBQALAAAAALQAAAJgJABQgKACgeAAQghAAgJgIg");
	this.shape_1.setTransform(186.5,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvBPQgEgEAAgFIAAgdIACgqIACgqIABgcQABgFACgCQAOgEASAAQARAAARAMQATAOAAAVQAAAbgVAOQAQAGAIAIQAHAJAAAIQAAANgNALQgKAJgKAEQgWAJgkAAQgEAAgEgEgAgfApIAAAVQAbgBAQgHQAHgCAHgHQAGgEAAgEQAAgEgNgGQgKgFgJgCIgKgCIgEAAIgEAAIgMgBIgBAYgAgbg9IAAASIgCAoIAQACQAOgCAKgIQALgKAAgOQAAgKgLgIQgLgIgLAAIgQAAg");
	this.shape_2.setTransform(173.4,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkBGQgOgPAAgWQAAgbAOgQQAPgQAWgBQAMAAAGAEIAKAIQABgsACgPQACgJAIAAQAJAAAAAKQAAAOgEAxIgBAdQAAAjADAQIAAADQAAAEgDADQgDADgDAAQgHAAgDgKQgHAGgIADQgIACgIAAQgVAAgOgOgAgXACQgJAKAAAUQAAAOAJAKQAKAJAMAAQAIAAAGgEQADgBAIgHIADgDIAAgSIAAgLIAAgNQgEgIgGgDQgHgFgJABQgQgBgIAKg");
	this.shape_3.setTransform(153.8,16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZAyIgDgXIgBgWIAAgJIABgKQAAgWgJAAQgLAAgKAOQgJAMgFASIgBAKIgBAKIABAKIAAAJQAAAEgCADQgDADgFAAQgEAAgDgDQgDgDAAgEIAAgJIgBgKIACgcIABgdIAAgKIgBgKQAAgEADgDQADgDAEAAQAKAAABAOIAAAMQARgXARAAQARAAAGAOQAFAKAAATIAAAKIAAAIQAAAJACAOQACANAAAIQAAAFgCADQgDADgFAAQgJAAgBgKg");
	this.shape_4.setTransform(142.4,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAhA0IgHgHIgSAIQgHACgEAAQgYAAgLgNQgKgMAAgbQAAgYARgRQARgSAWAAQAKAAALAEQAOAGgBAJQAAACgBADIgCAMIgBAWQAAANACAHIAHASIACAFIABADQAAAEgDACQgDADgEAAQgCAAgFgFgAgRgZQgLANAAAQQAAARAGAIQAGAJAMgBQAJAAAHgDIAKgIQgEgaAAgNIABgKIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_5.setTransform(131.3,19.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgtBPQgJgJAAghIAAgOIABgRIgBgFQAAgDACgCIACgsIgBgLIgBgMQAAgMAKAAQAFAAADADQALgDALgCIAUgBQAZAAAPAGQAHACAAAHQAAAFgDADQgDADgEAAIgEAAQgQgFgRAAIgRABQgKACgMADIABALIgBAnIAsgEIAYgCQAEAAADACQAEADAAAFQAAAIgKACIgZACIgtAEIgBAOIAAAMQAAAXACAEQADACAOAAIASAAIATAAIAGgBIAGgBQALAAAAALQAAAJgJABQgKACgfAAQgfAAgKgIg");
	this.shape_6.setTransform(113.4,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag0BOQgDgDAAgFIAAgYIgBgYIACgbIACgcIgBgQIgBgPQAAgGAEgEQAEgGAGABIAZACQAOABAIAGQAqAWAAAfQAAAQgOALQgMAKgRAFQAgARAQATQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgDQgighgpgMIABAUIABAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgggtIABAMIgBAVIgDATIAFAAIAEAAQAaAAANgHQAFgCAFgFQAGgGgBgEQAAgOgPgMQgOgLgRgCIgPgBg");
	this.shape_7.setTransform(100.2,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgtBPQgJgJAAghIAAgOIABgRIgBgFQAAgDACgCIACgsIgBgLIgBgMQAAgMAKAAQAEAAADADQAMgDAMgCIATgBQAZAAAPAGQAHACAAAHQAAAFgDADQgDADgEAAIgDAAQgRgFgRAAIgRABQgKACgLADIABALIgCAnIAsgEIAYgCQAEAAADACQADADABAFQAAAIgKACIgYACIguAEIgCAOIAAAMQABAXADAEQACACAOAAIASAAIATAAIAGgBIAGgBQALAAAAALQAAAJgJABQgKACgeAAQghAAgJgIg");
	this.shape_8.setTransform(87.1,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAXBQQgEgDAAgEIgGgUIgIgtQgFgagBgRQgJAigLAWQgMAcgEAPQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAEgEADQgEADgFAAQgOAAAAgMIgDgNIgLgzQgHgYgQgwIAAgEQAAgJAKAAQAHAAAEAHIAHAVQAGATAGAaIAKAsQALgZALgkIAKgeQAJgXAIAAQAHAAADAHQAEAJAEAhQACARAFAXIAIAoQAOghAVg3IAFgUQADgMAEgGQAEgGAGAAQAKAAAAAKIgDAKIgEALIgGATIgeBJIgPAjQgDAHgIAAQgFAAgDgDg");
	this.shape_9.setTransform(69.8,16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjAsQgPgMAAgYQAAgZANgSQAOgUAXAAQAQAAALAGQAOAHAAAPQAAAKgMAIIgWALIgmASQAGAJAIAEQAJAEAKAAQAHAAAKgCQAMgEAEgFQADgGAEAAQAEAAADADQACADAAADQAAAMgSAIQgQAHgPAAQgWAAgPgMgAgUgbQgJAKgEASIAggOQARgJAIgGQgIgIgQAAQgMAAgIAJg");
	this.shape_10.setTransform(46.5,19);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnAvIAAhHIAAgKIABgKQAAgKAJAAQAKAAAAAQQATgTAXAAQAJABAEAFQAEAHAAAMIAAAIQgBAMgJAAQgJAAAAgKIgBgHIAAgJQgQADgJAGQgJAIgGANIAAA3QAAAKgKAAQgJAAAAgKg");
	this.shape_11.setTransform(35.8,19.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAhA0IgHgHIgSAIQgHACgEAAQgYAAgLgNQgKgMAAgbQAAgYARgRQARgSAWAAQAKAAALAEQAOAGgBAJQAAACgBADIgCAMIgBAWQAAANACAHIAHASIACAFIABADQAAAEgDACQgDADgEAAQgCAAgFgFgAgRgZQgLANAAAQQAAARAGAIQAGAJAMgBQAJAAAHgDIAKgIQgEgaAAgNIABgKIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_12.setTransform(25.1,19.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("AgfBTQgMgDgGgFIgBAAQgEAAgDgDQgDgDAAgEIABggIABghIAAgiIgBgkQAAgFAEgEQAFgFADAAQADAAAOAHIASAJQAcAKAVAUQAYAYAAAdQAAARgIAQQgJAQgNAKQgQALgdAAQgIAAgJgCgAgmgcIAAAdIgBA4IACABQAJAGAOAAQAWAAAKgHQALgHAFgLQAHgMAAgMQgBgcgfgUQgJgHgngRg");
	this.shape_13.setTransform(6.2,16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AgzA/QgVgSAAgdQAAgiAVgdQAXghAiAAQAiAAAQAQQARAPAAAiQAAAigTAdQgWAhgiAAQgdAAgUgSgAgjgiQgQAXAAAbQAAAUAOAMQAOAMAVAAQAYAAAQgZQAPgXAAgbQAAgZgLgKQgLgJgZAAQgYAAgRAZg");
	this.shape_14.setTransform(-10,16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AgzA/QgVgSAAgdQAAgiAVgdQAXghAiAAQAiAAAQAQQARAPAAAiQAAAigTAdQgWAhgiAAQgdAAgUgSgAgjgiQgQAXAAAbQAAAUAOAMQAOAMAVAAQAYAAAQgZQAPgXAAgbQAAgZgLgKQgLgJgZAAQgYAAgRAZg");
	this.shape_15.setTransform(-26.8,16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AA/BOQgDgGgCgLIgEgSQgFgQgIg3IgVA9IgGATQgEAMgEAHQgEAIgGAAQgHAAgDgHIgEgKIgDgMQgLgkgHgpIgEATIgNA1QgBAJgFATQgCAIgIAAQgFAAgDgDQgCgEAAgEQAAgRAHgZIALgoIAHghQAEgXAFgGQAEgHAGABQAHgBADAJQAEAJAFAcQAFAiAMAlQAOgmALgrIADgPQABgIAEgGQADgIAIAAQAIAAAFARIAEAYQAGAuAJAgIAFASIAEARQAAAFgEADQgCADgFAAQgGAAgDgFg");
	this.shape_16.setTransform(-44.4,16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("AgsBPQgKgJAAghIAAgOIABgRIgBgFQAAgDACgCIACgsIgBgLIgBgMQAAgMAKAAQAFAAADADQAMgDAKgCIAUgBQAZAAAPAGQAHACAAAHQAAAFgDADQgDADgEAAIgEAAQgRgFgQAAIgRABQgKACgMADIABALIgCAnIAsgEIAZgCQAFAAADACQACADAAAFQAAAIgJACIgZACIguAEIgBAOIAAAMQAAAXADAEQADACANAAIATAAIATAAIAGgBIAGgBQALAAAAALQAAAJgJABQgJACggAAQggAAgIgIg");
	this.shape_17.setTransform(-66.3,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("AgSBLQgNgfgOg6IgIgcQgHgVAAgHQAAgEADgDQADgDAFAAQAHAAADAIIAEASIAKAjQAJAlAJAcIABgCIAbhJIAIgaQAHgPAGgIQAEgEAEAAQAEAAADAEQADADABAEQgBADgCADQgGAKgEAKIgIAXIgcBJQgEANgHANQgCAGgGAAQgIAAgDgIg");
	this.shape_18.setTransform(-79.3,16.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AgsBLQgDgDAAgEQAAgEADgEQADgDAEAAIAWgCIABgTIgBgRIAAgRQAAgXADgjIgOAAIgNAAQgEAAgDgDQgDgDAAgEQAAgKAKgBIAeAAQAUAAAfAEQAIABABAKQgBAFgDADQgDACgEAAIgQgBIgRgCQgCAdAAAbIAAARIABASIgBASIAggBQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAIgRAAIgSABIgTACIgUABQgEAAgDgDg");
	this.shape_19.setTransform(-92.5,16.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("AgGBLQgEgDAAgEIABgFIAAgEIgBgPIAAgQQAAgOgCgaQgDgdAAgMIgJAAQgXAAgNgDQgIgCAAgIQAAgFACgDQAEgDAFAAIAQACIARABIASAAIASgBIAXACIAYABQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAIgYgBIgXgCIgHAAIACAuIACAtIACALIAAALQAAAHgCAFQgDAHgGAAQgDAAgDgDg");
	this.shape_20.setTransform(-104.5,16.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AgqA/QgOgQAAgVQAAgiAdglQAYgeAYAAIAJAAIAHACQAEgFAGAAQAHAAABAJQACAIAAAMQAAAFgCADQgDAEgFAAQgHAAgDgIQgDgHgCgBQgCgBgJAAQgPAAgRAXQgZAeAAAbQAAANAJAJQAJAKAMAAQAKAAAKgFQAGgDAMgJQAGgFADAAQAFAAADAEQADADAAAEQAAAFgEADQgbAYgbAAQgVAAgPgQg");
	this.shape_21.setTransform(-118.6,16.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AgtA8QgNgOgDgdQgBgNAAgmIAAgXQABgKABgDQADgHAGAAQAKgBAAASIAAA8QAAA9AqAAQApAAAAhnIAAgKIAAgJQAAgGACgFQADgGAGAAQAKAAAAAOIAAANIAAAMQAAB2g9AAQgfAAgQgTg");
	this.shape_22.setTransform(-132.7,16.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AgpBHQgUgPAAgSQAAgNALAAQAKAAAAANQAAAJAMAHQAMAIAKAAQAIAAADgzQABgYAAgkIAAgLIgGAAIgLAAIgNAAQgEgBgDgDQgDgCAAgGQAAgKAOAAIAKAAIAKAAIATAAIATgBQAYAAAAAMQAAAEgDADQgDAEgFAAIgGgBIgHgBIgMAAIABANQAABLgKAjQgHAXgQAAQgSAAgRgNg");
	this.shape_23.setTransform(-147.5,17);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009900").s().p("AgvBPQgEgEAAgFIAAgdIACgqIACgqIABgcQABgFACgCQAOgEASAAQARAAARAMQATAOAAAVQAAAbgVAOQAQAGAIAIQAHAJAAAIQAAANgNALQgKAJgKAEQgWAJgkAAQgEAAgEgEgAgfApIAAAVQAbgBAQgHQAHgCAHgHQAGgEAAgEQAAgEgNgGQgKgFgJgCIgKgCIgEAAIgEAAIgMgBIgBAYgAgbg9IAAASIgCAoIAQACQAOgCAKgIQALgKAAgOQAAgKgLgIQgLgIgLAAIgQAAg");
	this.shape_24.setTransform(-160.7,16.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009900").s().p("AgtA8QgNgOgDgdQgBgNAAgmIAAgXQABgKABgDQADgHAGAAQAKgBAAASIAAA8QAAA9AqAAQApAAAAhnIAAgKIAAgJQAAgGACgFQADgGAGAAQAKAAAAAOIAAANIAAAMQAAB2g9AAQgfAAgQgTg");
	this.shape_25.setTransform(-175.4,16.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009900").s().p("AgpBHQgSgJgBgPQAAgFADgCQADgDAEAAQAGAAADAGQAGAIADACQAJAGARAAQAPAAANgHQASgJAAgPQAAgNgOgIQgNgGgSgBQgPAAgMgGQgOgIAAgQQgBgSAVgPQAUgOAUAAQAKAAAMADQARAFABAGQAAAKgKAAIgPgDIgPgCQgPAAgMAIQgLAIAAALQAAAJAQADQAFACAPABQAYABANANQAMALAAASQAAAYgXAOQgTANgZAAQgTAAgQgHg");
	this.shape_26.setTransform(-190.4,16.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgjAsQgPgMAAgYQAAgZANgSQAOgUAXAAQARAAAKAGQAOAHAAAPQAAAKgMAIIgWALIgmASQAGAJAIAEQAJAEAKAAQAHAAAKgCQAMgEADgFQAEgGAEAAQAEAAADADQACADAAADQAAAMgTAIQgPAHgPAAQgWAAgPgMgAgVgbQgIAKgEASIAfgOQASgJAIgGQgIgIgQAAQgMAAgJAJg");
	this.shape_27.setTransform(164.6,-12.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAcBNQgDgIgCgPIgBgZIAAgIIAAgIQAAgSgJAAQgNAAgKAKQgFAHgJAQQAAAngDAIQgDAGgGABQgFAAgDgDQgDgEAAgDIABgFIABgPIAAgPIABhKIABgRIgBgKIgBgLQAAgEADgCQADgEAEAAQAIAAACAKIABARIAAAXIgBAWIAAAJQAJgKAJgGQAJgGALAAQARAAAGALQAEAIABARIABAUIACAWIADAVIABACQAAAFgDACQgDADgFAAQgHAAgCgIg");
	this.shape_28.setTransform(152.7,-15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGBIQgDgDAAgEIABgLIAAgMIgCg7IgXgCQgJgBAAgJQAAgEADgDQACgDAFAAIAVACIAAgOIgBgNQAAgEADgDQADgDAFAAQAIAAABAPIABAJIgBAGIAAAHIAPgCQALAAADABQAGACAAAIQAAAEgDADQgCADgFAAIgFAAIgFgBIgOACIACA8IAAAEIAAAFQABAXgMAAQgDAAgDgDg");
	this.shape_29.setTransform(141.5,-13.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgnAvIAAhHIAAgKIABgLQAAgJAJgBQAKAAAAARQATgSAXgBQAJAAAEAHQAEAGAAANIAAAHQgBANgJgBQgJABAAgLIgBgHIAAgJQgQADgJAGQgJAIgGANIAAA3QAAALgKAAQgJAAAAgLg");
	this.shape_30.setTransform(125.6,-12.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgeAsQgOgPAAgXQgBgXAMgRQAPgVAYAAQAVAAALATQAIAPAAAVQgBAWgLAQQgNASgVAAQgRAAgNgMgAgRgUQgHAMAAAOQAAAOAIAJQAHAHAJAAQAKAAAHgIQAJgJABgOQABgngXAAQgOAAgIAOg");
	this.shape_31.setTransform(114.5,-12.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQBXQgDgCAAgEIAAgCQACgOAAgPIAAgcIAAgdIgQABQgLAAAAgKQABgKARgBIAKAAIACgQQACgWAKgLQAJgNAXAAQAOAAAAAKQAAAKgNAAQgZAAgCAiIgBAGIAWgBQARAAAAAKQAAAIgIABIgIABIgYABIgBAXIAAATIABATQAAATgCALQgBAIgIAAQgEAAgDgDg");
	this.shape_32.setTransform(103.7,-14.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgkBGQgOgPAAgWQAAgcAOgPQAPgRAWAAQAMABAGADIAKAHQABgrACgPQACgJAIAAQAJAAAAAKQAAAPgEAwIgBAdQAAAiADARIAAADQAAAEgDADQgDACgDAAQgHABgDgKQgHAFgIADQgIADgIAAQgVAAgOgOgAgXACQgJAKAAAVQAAANAJAJQAKAKAMAAQAIAAAGgEQADgBAIgHIADgDIAAgSIAAgLIAAgNQgEgIgGgDQgHgFgJAAQgQAAgIAKg");
	this.shape_33.setTransform(86,-15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgjAsQgPgMAAgYQAAgZANgSQAOgUAXAAQAQAAALAGQAOAHAAAPQAAAKgMAIIgWALIgmASQAFAJAJAEQAJAEAKAAQAHAAAKgCQAMgEAEgFQADgGAEAAQADAAADADQADADAAADQAAAMgSAIQgQAHgPAAQgWAAgPgMgAgUgbQgJAKgEASIAggOQARgJAIgGQgIgIgQAAQgMAAgIAJg");
	this.shape_34.setTransform(74.3,-12.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgcA5QgQgGAAgKQAAgEAEgDQADgDAEAAQADAAAFAFQADACAIABIAMACQAHAAAHgCQAKgDAAgHQAAgOgUgFIgKgCQgNgDgGgEQgIgEAAgMQAAgWAUgIQAGgDANgEQANgEAGgDQAEgBAFgBQAFAAACADQADADAAAFIACAIIABAJQAAAFgDACQgDADgEAAQgGABgCgEQgCgDgBgIIgYAHQgPAGAAAKIAGABQAWAFAMAIQARAJAAAUQAAARgPAIQgMAIgRAAQgOgBgMgEg");
	this.shape_35.setTransform(63,-12.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAXAxQgNAHgPAAQgOAAgJgGQgJgHgDgMQgDgbAAgVQgBgOAEgSQABgJAIAAQAFAAADADQADADAAAEIgCAQIgBAPIABAdQABAMACAHIAHADIAHABQANAAAOgEIAAgVIAAgTQAAgWACgRQABgJAJAAQAEAAADADQADADABAEIgDAnIAAAVIAAAWIABAHIAAAHQAAAEgDADQgDADgEAAQgIAAgCgKg");
	this.shape_36.setTransform(52.8,-12.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgpBHQgSgJgBgPQAAgFADgCQADgDAEAAQAGAAADAGQAGAIADACQAKAGAQAAQAPAAAOgHQARgJAAgPQAAgNgOgIQgNgGgSgBQgPAAgMgGQgOgIAAgQQAAgSAUgPQAUgOAUAAQAKAAAMADQARAFAAAGQAAAKgJAAIgPgDIgPgCQgPAAgLAIQgMAIAAALQAAAJAPADQAGACAPABQAYABANANQAMALAAASQAAAYgXAOQgTANgZAAQgTAAgQgHg");
	this.shape_37.setTransform(33.8,-14.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgvBPQgEgEAAgFIAAgeIACgoIACgrIABgcQABgFACgCQAOgEASAAQARAAARAMQATAPAAAUQAAAagVAPQAQAHAIAHQAHAIAAAJQAAANgNAMQgKAIgKAEQgWAJgkAAQgEAAgEgEgAgfAoIAAAWQAbgBAQgHQAHgDAHgGQAGgEAAgEQAAgEgNgGQgKgFgJgCIgKgCIgEAAIgEAAIgMAAIgBAWgAgbg9IAAASIgCAoIAQACQAOgCAKgIQALgJAAgPQAAgJgLgJQgLgIgLAAIgQAAg");
	this.shape_38.setTransform(20.3,-14.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("Ag0BOQgCgDAAgFIgBgYIgBgYIACgbIACgcIgBgQIgBgPQAAgGADgEQAFgGAGABIAZACQAOABAJAGQApAWAAAfQAAAQgOALQgLAKgRAFQAfARAQATQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgDQgighgpgMIABAUIABAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgggtIAAAMIgBAVIgCATIAFAAIAEAAQAaAAAMgHQAGgCAFgFQAGgGgBgEQABgOgRgMQgNgLgRgCIgPgBg");
	this.shape_39.setTransform(6.8,-14.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgtBPQgJgJAAghIAAgOIABgRIgBgFQAAgDACgCIACgsIgBgLIgBgMQAAgMAKAAQAEAAADADQANgDALgCIATgBQAZAAAPAGQAHACAAAHQAAAFgDADQgDADgEAAIgDAAQgSgFgQAAIgRABQgKACgLADIABALIgDAnIAsgEIAZgCQAFAAACACQADADAAAFQAAAIgJACIgYACIgvAEIgBAOIAAAMQAAAXAEAEQACACANAAIATAAIATAAIAGgBIAGgBQALAAAAALQAAAJgJABQgKACgeAAQghAAgJgIg");
	this.shape_40.setTransform(-6.2,-14.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgSBLQgMgfgPg6IgJgcQgFgVgBgHQAAgEAEgDQADgDAEAAQAIAAACAIIADASIAKAjQALAlAIAcIABgCIAbhJIAIgaQAHgPAGgIQADgEAFAAQAEAAADAEQAEADAAAEQAAADgCADQgHAKgEAKIgHAXIgdBJQgEANgHANQgCAGgGAAQgHAAgEgIg");
	this.shape_41.setTransform(-19.3,-14.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgeAsQgOgPAAgXQgBgXAMgRQAPgVAYAAQAVAAALATQAIAPAAAVQgBAWgLAQQgNASgVAAQgRAAgNgMgAgRgUQgHAMAAAOQAAAOAIAJQAHAHAJAAQAKAAAHgIQAJgJABgOQABgngXAAQgOAAgIAOg");
	this.shape_42.setTransform(-38.8,-12.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAHAdIgFgXIgCgXIgJATIgPAqQgBAEgDADQgDAFgHAAQgHABgIgfIgIgqIgCgPIgBgQQAAgEADgDQADgDAEABQAIAAACAIIACAOIABAQIAGAtQAMgfAMgpQADgLAIAAQAIgBADANIAGAlQAEAZAEAPIAIgcIAMg3QACgGAHAAQAEAAAEACQADAEAAAEIgBAEQgIAhgNAqQgDAJgGAKQgEAGgGAAQgMgBgFgcg");
	this.shape_43.setTransform(-51.2,-12);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGBIQgDgDAAgEIABgLIAAgMIgCg7IgXgCQgJgBAAgJQAAgEADgDQACgDAFAAIAVACIAAgOIgBgNQAAgEADgDQADgDAFAAQAIAAABAPIABAJIgBAGIAAAHIAPgCQALAAADABQAGACAAAIQAAAEgDADQgCADgFAAIgFAAIgFgBIgOACIACA8IAAAEIAAAFQABAXgMAAQgDAAgDgDg");
	this.shape_44.setTransform(-63.5,-13.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgiAsQgQgMAAgYQAAgZANgSQAOgUAXAAQARAAAKAGQANAHAAAPQAAAKgLAIIgWALIgmASQAGAJAIAEQAJAEAKAAQAHAAAKgCQAMgEAEgFQADgGAEAAQADAAADADQADADAAADQAAAMgTAIQgPAHgPAAQgWAAgOgMgAgVgbQgIAKgEASIAggOQARgJAIgGQgJgIgPAAQgMAAgJAJg");
	this.shape_45.setTransform(-80.2,-12.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAcBNQgDgIgCgPIgBgZIAAgIIAAgIQAAgSgJAAQgNAAgKAKQgFAHgJAQQAAAngDAIQgDAGgGABQgFAAgDgDQgDgEAAgDIABgFIABgPIAAgPIABhKIABgRIgBgKIgBgLQAAgEADgCQADgEAEAAQAIAAACAKIABARIAAAXIgBAWIAAAJQAJgKAJgGQAJgGALAAQARAAAGALQAEAIABARIABAUIACAWIADAVIABACQAAAFgDACQgDADgFAAQgHAAgCgIg");
	this.shape_46.setTransform(-92.1,-15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgGBIQgDgDAAgEIABgLIAAgMIgCg7IgXgCQgJgBAAgJQAAgEADgDQACgDAFAAIAVACIAAgOIgBgNQAAgEADgDQADgDAFAAQAIAAABAPIABAJIgBAGIAAAHIAPgCQALAAADABQAGACAAAIQAAAEgDADQgCADgFAAIgFAAIgFgBIgOACIACA8IAAAEIAAAFQABAXgMAAQgDAAgDgDg");
	this.shape_47.setTransform(-103.3,-13.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgFAxQgDgDAAgFIgBgGIgBgFQAAgFAEgCQADgDADAAQAMAAAAAVQAAAFgDADQgDADgFAAQgDAAgDgDgAgHgZQgDgDAAgFIAAgDIgBgEQAAgFADgDQADgDAFAAQAKAAAAASQAAAFgDADQgDADgEAAQgEAAgDgDg");
	this.shape_48.setTransform(-117.8,-13.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgjAsQgPgMAAgYQAAgZANgSQAOgUAXAAQAQAAALAGQAOAHAAAPQAAAKgMAIIgWALIgmASQAFAJAJAEQAJAEAKAAQAHAAAKgCQAMgEAEgFQADgGAEAAQADAAADADQADADAAADQAAAMgSAIQgQAHgPAAQgWAAgPgMgAgUgbQgJAKgEASIAggOQARgJAIgGQgIgIgQAAQgMAAgIAJg");
	this.shape_49.setTransform(-126.4,-12.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgGBIQgDgDAAgEIABgLIAAgMIgCg7IgXgCQgJgBAAgJQAAgEADgDQACgDAFAAIAVACIAAgOIgBgNQAAgEADgDQADgDAFAAQAIAAABAPIABAJIgBAGIAAAHIAPgCQALAAADABQAGACAAAIQAAAEgDADQgCADgFAAIgFAAIgFgBIgOACIACA8IAAAEIAAAFQABAXgMAAQgDAAgDgDg");
	this.shape_50.setTransform(-137.3,-13.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgeAsQgOgPAAgXQgBgXAMgRQAPgVAYAAQAVAAALATQAIAPAAAVQgBAWgLAQQgNASgVAAQgRAAgNgMgAgRgUQgHAMAAAOQAAAOAIAJQAHAHAJAAQAKAAAHgIQAJgJABgOQABgngXAAQgOAAgIAOg");
	this.shape_51.setTransform(-148,-12.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhEBQQgDgDAAgEIABgOIABgMIAAgTIAAgTIAAgUIAAgVIgBgTIgCgTQAAgFAEgDQAEgEAGgBQAFAAAIANQAaAlATAaQAYAdAdAbIAAgMIgBgOQABgsgEgbIgCgKIgDgLQAAgMAMAAQARAAAABDIAAAhIAAAiIgCAQQgCALgJAAQgGAAgHgIQgqgog2hJIAAAYIAAAWIAAAZIAAAaQAAAbgKAAQgFAAgEgDg");
	this.shape_52.setTransform(-161.5,-14.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgtBPQgJgJAAghIAAgOIABgRIgBgFQAAgDACgCIACgsIgBgLIgBgMQAAgMAKAAQAEAAADADQAMgDAMgCIATgBQAZAAAPAGQAHACAAAHQAAAFgDADQgDADgEAAIgDAAQgRgFgRAAIgRABQgKACgLADIABALIgCAnIAsgEIAYgCQAEAAADACQADADAAAFQABAIgKACIgYACIgvAEIgBAOIAAAMQAAAXAEAEQACACANAAIATAAIATAAIAGgBIAGgBQALAAAAALQAAAJgJABQgKACgeAAQghAAgJgIg");
	this.shape_53.setTransform(186.5,16.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgvBPQgEgEAAgFIAAgdIACgqIACgqIABgcQABgFACgCQAOgEASAAQARAAARAMQATAOAAAVQAAAbgVAOQAQAGAIAIQAHAJAAAIQAAANgNALQgKAJgKAEQgWAJgkAAQgEAAgEgEgAgfApIAAAVQAbgBAQgHQAHgCAHgHQAGgEAAgEQAAgEgNgGQgKgFgJgCIgKgCIgEAAIgEAAIgMgBIgBAYgAgbg9IAAASIgCAoIAQACQAOgCAKgIQALgKAAgOQAAgKgLgIQgLgIgLAAIgQAAg");
	this.shape_54.setTransform(173.4,16.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgtBPQgJgJAAghIAAgOIABgRIgBgFQAAgDACgCIACgsIgBgLIgBgMQAAgMAKAAQAFAAADADQALgDALgCIAUgBQAZAAAPAGQAHACAAAHQAAAFgDADQgDADgEAAIgEAAQgQgFgRAAIgRABQgKACgMADIABALIgBAnIAsgEIAYgCQAEAAADACQAEADAAAFQAAAIgKACIgZACIgtAEIgBAOIAAAMQAAAXACAEQADACAOAAIASAAIATAAIAGgBIAGgBQALAAAAALQAAAJgJABQgKACgfAAQgfAAgKgIg");
	this.shape_55.setTransform(113.4,16.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("Ag0BOQgDgDAAgFIAAgYIgBgYIACgbIACgcIgBgQIgBgPQAAgGAEgEQAEgGAGABIAZACQAOABAIAGQAqAWAAAfQAAAQgOALQgMAKgRAFQAgARAQATQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgDQgighgpgMIABAUIABAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgggtIABAMIgBAVIgDATIAFAAIAEAAQAaAAANgHQAFgCAFgFQAGgGgBgEQAAgOgPgMQgOgLgRgCIgPgBg");
	this.shape_56.setTransform(100.2,16.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgtBPQgJgJAAghIAAgOIABgRIgBgFQAAgDACgCIACgsIgBgLIgBgMQAAgMAKAAQAEAAADADQAMgDAMgCIATgBQAZAAAPAGQAHACAAAHQAAAFgDADQgDADgEAAIgDAAQgRgFgRAAIgRABQgKACgLADIABALIgCAnIAsgEIAYgCQAEAAADACQADADABAFQAAAIgKACIgYACIguAEIgCAOIAAAMQABAXADAEQACACAOAAIASAAIATAAIAGgBIAGgBQALAAAAALQAAAJgJABQgKACgeAAQghAAgJgIg");
	this.shape_57.setTransform(87.1,16.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AAXBQQgEgDAAgEIgGgUIgIgtQgFgagBgRQgJAigLAWQgMAcgEAPQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAEgEADQgEADgFAAQgOAAAAgMIgDgNIgLgzQgHgYgQgwIAAgEQAAgJAKAAQAHAAAEAHIAHAVQAGATAGAaIAKAsQALgZALgkIAKgeQAJgXAIAAQAHAAADAHQAEAJAEAhQACARAFAXIAIAoQAOghAVg3IAFgUQADgMAEgGQAEgGAGAAQAKAAAAAKIgDAKIgEALIgGATIgeBJIgPAjQgDAHgIAAQgFAAgDgDg");
	this.shape_58.setTransform(69.8,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_54},{t:this.shape_53},{t:this.shape}]},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.9,-32.2,399.9,64.5);


(lib.FourForms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAKQgDgEAAgGQAAgFADgFQAFgEAFAAQAGAAAEAEQAEAFAAAFQAAAGgEAEQgEAFgGgBQgFABgFgFg");
	this.shape.setTransform(130.5,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgkBfQgNgEgHgFIgBAAQgFAAgDgDQgEgEAAgFIABgkIABglIgBgpIAAgpQAAgEAFgGQAFgFAFAAQADAAAQAIQARAJADABQAhALAXAYQAcAcAAAfQAAAVgJASQgKASgQAMQgTAMghAAQgIAAgLgCgAgsgfIAAAgIgBBAIACACQALAGAPABQAagBAMgHQAMgJAGgNQAHgNAAgOQAAgfgkgZQgLgHgrgUg");
	this.shape_1.setTransform(119.2,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("Ag7BJQgYgVAAgiQAAgnAYghQAbglAnAAQAnAAASARQAUASAAAnQAAAogWAgQgaAlgnAAQggAAgYgTgAgpgnQgSAbAAAeQAAAXARAOQAQANAXAAQAcAAATgcQAQgaAAgfQAAgcgNgLQgMgLgcAAQgbAAgVAcg");
	this.shape_2.setTransform(100.7,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("Ag7BJQgYgVAAgiQAAgnAYghQAbglAnAAQAnAAASARQAUASAAAnQAAAogWAgQgZAlgnAAQgiAAgXgTgAgpgnQgSAbAAAeQAAAXARAOQAQANAYAAQAbAAATgcQAQgaAAgfQAAgcgNgLQgMgLgcAAQgbAAgVAcg");
	this.shape_3.setTransform(81.5,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("ABIBYQgEgFgDgNIgDgUQgFgTgLg/IgXBFIgHAXQgEANgFAIQgFAJgHAAQgHAAgEgHIgEgNIgEgNQgMgpgJguIgEAVIgPA9QgCAKgEAWQgDAJgJAAQgFAAgEgEQgDgEAAgFQAAgTAIgdIANguIAHglQAFgaAGgIQAFgHAGAAQAIAAAEAJQAEAKAGAgQAGAnANAsQARgsAMgxIADgRQADgLADgGQAFgJAHAAQAKAAAGAUIAFAcQAGA0ALAlIAFAUQAFAQAAAEQAAAFgEAEQgEADgFAAQgGAAgEgHg");
	this.shape_4.setTransform(61.4,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_5.setTransform(36.3,18.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_6.setTransform(21.4,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AgzBWQgDgDAAgFQAAgGADgDQAEgEAEABIAagDQABgKAAgMIgBgTIAAgUQgBgaADgpIgOABIgQAAQgFABgEgEQgCgEAAgEQAAgMALAAIAjgBQAWAAAjAEQAKACAAALQAAAFgEAEQgDACgFABIgSgCIgTgDQgDAiAAAfIABAUIAAAUIAAAUIAlAAQAEAAAEAEQADACAAAGQAAAFgDAEQgEADgEAAIgUAAIgUAAIgWACIgYACQgEAAgEgDg");
	this.shape_7.setTransform(6.4,18.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AgHBWQgEgDAAgGIABgFIAAgFIgBgRIgBgSQAAgQgDgeIgCgvIgLAAQgaAAgPgDQgJgDAAgJQAAgFADgEQADgEAGABIATACIATABIAVAAIAUAAIAbABIAbABQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAIgbgBIgbgBIgIAAQABAQADAkQACAhAAATIABAMIAAANQABAIgDAFQgDAIgHAAQgEAAgDgDg");
	this.shape_8.setTransform(-7.3,18.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AgwBIQgQgSAAgZQAAgmAhgqQAcgjAbAAIAKABIAIABQAFgGAGAAQAIAAACALQACAJAAAOQAAAFgCAEQgEAEgFAAQgIAAgEgJQgDgHgDgCQgCgBgKAAQgRAAgUAaQgcAjAAAeQAAAPAKALQAKAMAOAAQALAAAMgHQAHgDAOgKQAHgFADAAQAFAAAEADQADAEAAAFQAAAFgEAEQgfAcgfAAQgYAAgRgTg");
	this.shape_9.setTransform(-23.5,18.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009900").s().p("AhOBbQgEgDAAgFIACgPIAAgPIABgWIAAgWIAAgWIgBgXIgBgWIgCgWQAAgGAFgEQAFgFAFAAQAHAAAJAOQAdAsAXAdQAbAhAhAfIAAgPIAAgOQAAgzgEgeIgDgMQgCgIgBgFQAAgOANAAQAVAAAABNIgBAlIAAAnIgCATQgCAMgLAAQgGAAgJgJQgwgtg9hUIAAAbIgBAaIABAdIAAAdQAAAggMAAQgGAAgEgFg");
	this.shape_10.setTransform(-40.4,18.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AgzBFQgPgQgDghQgCgPAAgsIABgaQAAgLACgEQACgJAIAAQALAAAAAUIAABFQAABGAxAAQAuAAAAh3IAAgLIAAgKQAAgHACgFQAEgHAGAAQAMAAAAAQIABAOIAAAPQAACGhHAAQgjAAgSgVg");
	this.shape_11.setTransform(-58.8,18.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("AgwBRQgWgQABgWQAAgOAMAAQALAAAAAOQAAAKAOAKQANAJAMAAQAJAAADg7QACgbAAgqIgBgNIgGAAIgNAAIgOAAQgGAAgDgEQgDgDAAgGQAAgMAQAAIAMABIALAAIAWgBIAVgBQAbAAAAAOQABAEgEAEQgDAEgFAAIgIgBIgIgBIgNABIABAOQAABWgMAoQgIAagSAAQgVAAgUgPg");
	this.shape_12.setTransform(-75.7,19.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("Ag2BaQgEgFgBgFIAAgiIACgvQADghAAgPIACggQAAgGADgCQAQgFAUAAQAUAAATAOQAWAQAAAYQAAAegYARQASAHAJAJQAIAJAAALQAAAOgPAOQgLAJgLAFQgZAKgpAAQgGAAgEgFgAgjAvIAAAYQAfgBARgIQAJgDAIgHQAGgGABgDQAAgFgQgHQgLgFgKgDIgMgCIgEAAIgFAAIgNgBIgBAbgAgfhFIAAAUIgCAuIASABQAQgBALgKQANgKAAgRQAAgLgNgJQgMgKgNAAIgSABg");
	this.shape_13.setTransform(-90.8,18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AgzBFQgPgQgDghQgDgPAAgsIABgaQABgLACgEQADgJAHAAQALAAAAAUIAABFQAABGAxAAQAuAAABh3IAAgLIgBgKQAAgHACgFQAEgHAGAAQAMAAAAAQIAAAOIAAAPQAACGhGAAQgkAAgRgVg");
	this.shape_14.setTransform(-107.6,18.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_15.setTransform(-124.8,19.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnAyQgSgOAAgaQgBgeAQgVQAPgWAbAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQANgDAFgGQAEgHAEAAQAEAAAEAEQADADAAADQgBAOgUAJQgTAIgQAAQgaAAgQgOgAgXgfQgKALgFAWIAkgQQAVgLAIgHQgJgKgSAAQgOAAgJALg");
	this.shape_16.setTransform(136.3,-13.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgGQAAgEADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_17.setTransform(122.7,-17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFgBQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_18.setTransform(109.9,-15.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_19.setTransform(90.9,-16.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAdAAQAWAAANAVQAJASAAAYQgBAZgNASQgPAVgXAAQgUAAgOgOgAgUgXQgIANABAQQgBARAKAKQAHAHALAAQALAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_20.setTransform(78.5,-13.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgDAFgBQAEABAGAFQACACAKACIANACQAJAAAIgDQAKgDABgHQAAgQgXgGIgLgDQgQgDgGgFQgKgFABgOQgBgYAXgKQAIgEAOgEIAWgHQAFgCAFgBQAFABAEADQADADAAAGIACAKIABAKQAAAEgEAEQgDADgEAAQgHAAgCgEQgDgDgBgKIgbAIQgRAIgBALIAHACQAaAFANAIQAUALgBAYQAAATgQAJQgOAJgUAAQgPAAgOgGg");
	this.shape_21.setTransform(59.1,-14.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGBFQgDgDAAgGQAAgOgDgbQgDgbAAgOQAAgNgDgHQgJAEgIAJIgOAPIgGAHIgBAUIgCAUIACAKIABAJQAAAFgEADQgEAEgEAAQgNAAAAgeIABgVIABgUIgBgTIgBgTQAAgaAMAAQAFAAADAEQAEAEAAAEIgBAHIAAAHIAAANQAGgNAMgKQAMgKAJAAQASAAAFASQAHgIAJgFQAJgEALAAQAUAAAHAVQABAEAEAdIAJBCQgBAFgDADQgDADgFAAQgKAAgCgKIgEgkIgEgjQgBgIgDgIQgEgLgFAAQgEAAgMAIQgLAGgDAFIAAAWIAEAeQACASAAAMQAAAGgDADQgEADgFAAQgDAAgEgDg");
	this.shape_22.setTransform(44.4,-13.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQAMAAAAAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQAAAPgMAAQgKAAABgMIAAgIIgBgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgMAAQgJAAgBgMg");
	this.shape_23.setTransform(29.5,-13.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQAAAZgNASQgQAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_24.setTransform(16.9,-13.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_25.setTransform(4.5,-16.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AASBMIAAgGIAAgFIAAgbIgzgBIgWgBQgLgCAAgGQAAgGAGgIIAKgMIA6hTQAHgLAMAAQANAAAAAMIAABgIAGAAQAVAAAAAMQAAAIgJACQgEABgOAAIAAArQAAALgKAAQgMAAAAgRgAgeAOIAwABIAAhKQgfAygRAXg");
	this.shape_26.setTransform(-16,-17);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAQgWAaAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFALgBQAJAAAKgDQAPgDADgGQAEgHAFAAQAEAAAEAEQACADAAADQAAAOgUAJQgSAIgSAAQgZAAgRgOgAgYgfQgJALgFAWIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKALg");
	this.shape_27.setTransform(-36.7,-13.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQAMAAAAAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQAAAPgLAAQgLAAABgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgMAAQgKAAAAgMg");
	this.shape_28.setTransform(-48.9,-13.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAFQAQAHAAAKQAAADgDACIgBAOIgBAZQAAAPACAJQABAFAGAQIADAGIAAACQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGALAOAAQAKAAAIgFQAEgCAIgHQgEgeAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_29.setTransform(-61.2,-13.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgnAyQgTgOABgaQAAgeAOgVQARgWAaAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFAMgBQAJAAALgDQANgDAFgGQAEgHAEAAQAEAAADAEQAEADAAADQAAAOgWAJQgRAIgSAAQgZAAgQgOgAgYgfQgJALgEAWIAkgQQAUgLAIgHQgKgKgRAAQgOAAgKALg");
	this.shape_30.setTransform(-80.8,-13.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAFAIAAAOIAAAIQgBAPgMAAQgJAAgBgMIAAgIIAAgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgLAAQgKAAAAgMg");
	this.shape_31.setTransform(-93,-13.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAQgWAaAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFALgBQAJAAAKgDQAPgDADgGQAEgHAFAAQAEAAAEAEQACADAAADQAAAOgUAJQgSAIgSAAQgZAAgRgOgAgYgfQgJALgFAWIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKALg");
	this.shape_32.setTransform(-105.5,-13.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgGQAAgEADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_33.setTransform(-119.1,-17);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgIBWQgDgDAAgGIAAgFIABgFIgBgRIgBgSQAAgQgCgeIgEgvIgKAAQgaAAgOgDQgKgDAAgJQAAgFADgEQAEgEAFABIATACIATABIAVAAIAVAAIAbABIAaABQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAIgagBIgbgBIgJAAQAAAQADAkQADAhAAATIABAMIABANQgBAIgCAFQgDAIgHAAQgDAAgFgDg");
	this.shape_34.setTransform(-133.3,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FourForms, new cjs.Rectangle(-148.2,-36.4,296.4,72.9), null);


(lib.be = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgDQAJgCACgDQADgFADAAQACAAACADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape.setTransform(4.6,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIgBgWIABgUIAAgVQAAgEABgEQADgEAEAAQAGAAAAAGIAAADIgBADIAAAQIAAATQAGgEAGgCQAGgDADAAQAQAAAKAMQAJALAAAQQABARgLAMQgLALgPAAQgLAAgJgEgAgKgCIgLAGIAAAMIAAAMIAAAMIAKAEIAKABQAJAAAIgHQAGgIAAgLQAAgLgGgHQgFgHgLAAQgFAAgFAEg");
	this.shape_1.setTransform(-3.9,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgDQAJgCACgDQADgFADAAQACAAACADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_2.setTransform(4.6,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIgBgWIABgUIAAgVQAAgEABgEQADgEAEAAQAGAAAAAGIAAADIgBADIAAAQIAAATQAGgEAGgCQAGgDADAAQAQAAAKAMQAJALAAAQQABARgLAMQgLALgPAAQgLAAgJgEgAgKgCIgLAGIAAAMIAAAMIAAAMIAKAEIAKABQAJAAAIgHQAGgIAAgLQAAgLgGgHQgFgHgLAAQgFAAgFAEg");
	this.shape_3.setTransform(-3.9,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-12.4,21.2,24.9);


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


(lib.Twiggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AA1CHIgBAAIgIgBIgHgBIgCAAIAmgBIAHgBIAHgBQAegFANgJQADATABAOIhRgOgAiChYQgIgPASgkQCQAQAtgZQADADAOAvQhVAfg4AAQgvAAgcgVg");
	this.shape.setTransform(1.9,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDBC4").s().p("AhTDoIgGgDQAFgRAJglIgVAAIgBgDIAYgIQAtgQAUgBQAagBAoALIBCASIANA6QgUALgZAGQgQAEgSACIgUACIgTADQg9gNgpgQgAAUDoQAEAAAFgGIgSgGQgIAAAAAFQAAABAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAFAEAMAAgAiaBuQAHgBgCAIQgCAIAHACQAJAAAVgRQASgNAOANQBDgPB3guQgCAPAFATQimBMhRAJQgcgpAOgRgABlCfQhEgRgcACQARgWApgEQAsgEAOAbQAGhbg2hjQgDADAFAKQAGALgCAHQh6AWg/gWQAAgggKgGQAFAOgNAuQgLAmATAOQgoAFgSAFIgChkQgBg+AhgHQAQgDAYALQAcAPALABQALgBgBgXIA2gRQANAJgDAdQAXgSAdgCQAjgFASAZQAcAkAlCIQAGAZAAAuQgOAGgTAAQgWAAgdgIgAiQB5QABgIAJgFQAKgGABgGQgIgBgHADQgIACgIAGQgQAMgEgBQAGgMAcgLIANgEQgIgEgQAHQgUAKgHAAQALgPAlgFQAAgCgOgIQgXARgRADQALghA3AGQAeADA1AOQgoAWgfgFQgHAAgNANQgIAIgGAAIgEAAgABJBuQAJgKAZgOQAGAHAEAcQgZgMgTABgAgWBRQgJgDgHABQASgDAGgDQgBAIgGAAIgBAAgAhiiJQgdgRgIgeIgCgIQASAAAXgJQAFABAGAKQAEAFAEADIAFABQAGAAAGgBIALgEQAMgGgFgGQAagDAgggQAfgdAkADQAEAJAAAgQgagBgFAHQABAKgBAIQgCAagUATQgZAXgmADIgLAAQggAAgagOgAhLiTQAEALAygIQgEgLgPAAQgNAAgWAIgABJjlQAAgVADgCQgKgBgHAJQgJAJAGAGQACgJAPAJIAAAAgAhSjGQAGgMALACQACgLgJABQAFgKAFAMQAGAQALgFQAAAMgPABIgDAAQgMAAgHgGg");
	this.shape_1.setTransform(0.8,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFDeIABAAIABADgAghiiQgBgFANAAQAOAAABgIQACgRghAKQABglAkADQAjADgFAfQgCAPgXAJQgIADgJAAQgMAAgJgHgAAsilQAAgFAMAAQAPAAAAgJQABgMgQACQgQADgDgDIARgeQATgKAPAJQANAJABARQACARgOAKQgKAGgNAAQgLAAgMgEgAhmi3IACAAIgCAAg");
	this.shape_2.setTransform(-9.5,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AiLApQAJgZAigPIgzgDQgMAGgJAOQgHAAgCAFQAFgbAkgCQAXgCAoACIAAgNQADgXATgLQASgCAAgCIgBgDIAPgBQA3gEARAnQgMAMgQAJIgNAFIgUAIQgfAJgXgHQgJgDgIgGQgHAOgTAKIgFADQgJAOgCAPIgEAAQgOAAgDAGQgBgMAEgKgAirA1QgCgNALgPIgBgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQARgUATAGQgUAYgHAPIgBADIgCgBIAAAAQgOAAgDAGgAA9AbQALgEABgFQALALgjAJQABgHALgEgABcASIAEgDIAEgDQAGgDALAAQANAEAFAGIAEAGQgGABgFAEIgCACQgJgWgZAIgACSAaIgBgGIgDgGQgHgMgVAAQgLAAgLAHIgBAAIgFAEIABgFQABgFgBgFIgKAIIgMAJQgNALgRgCIAXgWIAKgIIAPgMQABgFAHAAIABABIgHAHIgBgBIgEAGIAAAAIAAABQAXAFABgCQgLABAAgKQAsgMAOABQAHAGAFARIgBANQAAAEgHAHIgGAGIgDgBgABTAVIgCABIgBgCIACAAIAAgBIADAAIABACIgCABIgBgBgAATALIALgKIAKgHQAJgFAKgEQADAEAAAFIAAAAIgNAIQgRAKgJAAIgEgBgACqgLQAAgGgBgDQgCgEgDAAQgGgLgYAAIgBAAIgBAAIgBAAIgQADQgIABgGADIANgHQAggLAVATIAAABIACAFIAJAMQAAAFgGADIgDABIABgLgAhpgQQgLACAAgMQAdABABAKQgEgDgPACg");
	this.shape_3.setTransform(-2.5,-25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(0,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AA1CHIgCAAIgHgBIAdgCIAHgBIAHgBQAdgFANgJQAEATAAAKIAAAEIhQgOgAiDhYQgHgPARgkQCRAQAtgZQADADAOAvQhVAfg4AAQgvAAgdgVg");
	this.shape_5.setTransform(1.9,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFDeIABAAIABADgAghiiIAAgBQgEgFAAgKIAAgEIAAAAQABglAkADQAjADgFAfQgCAPgXAJQgIADgJAAQgMAAgJgHgAghisQAAADAPAAIAIAAQAXgBAAgGIgCgCIgRABIgHABIgDAAQgSAAABAEgAAsilIAAgCQgFgEAAgNIAAgEIgCgBIARgeQATgKAPAJQANAJABARQACARgOAKQgKAGgNAAQgLAAgMgEgAAvi0QAAAEANAAIALAAQAPgBAAgEQACgDgKAAIgIAAQgXAAAAAEgAhmi3IACAAIgCAAg");
	this.shape_6.setTransform(-9.5,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AiLApQAJgZAigPIgzgDQgMAGgJAOQgHAAgCAFQAFgbAkgCQAXgCAoACIAAgNIACgKQAFgQAPgIQASgCAAgCIgBgDIAPgBQA3gEARAnIgGAGQgKAIgMAHIgNAFIgUAIQgfAJgXgHQgJgDgIgGQgHAOgTAKIgFADQgJAOgCAPIgEAAQgOAAgDAGQgBgMAEgKgAirA1QgCgNALgPIgBgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQARgUATAGQgUAYgHAPIgBADIgCgBIAAAAQgOAAgDAGgAA9AbQALgEABgFQALALgjAJQABgHALgEgABcASIAEgDIAEgDIAAAAIAFgCIAMgBIACAAIAKAFIAGAFIAAAAIAEAGQgGABgFAEIgCACQgJgWgZAIgACSAaIgBgGIgDgGQgHgMgVAAQgLAAgLAHIgGAEIABgFQABgGgBgEIgKAIIgMAJQgNALgRgCIAXgWIAAAAIAFgDIAFgFIAPgMIAAAAQABgFAHAAIABABIgFAFIgCACIgBgBIgEAGIAAAAIAAABQAXAFABgCQgLABAAgKIABgBIACAAQApgLAOABQAGAFAFAPIABACIgBAOQAAAEgHAHIgGAGIgDgBgABTAVIgCABIgBgCIACAAIAAgBIADAAIABACIgCABIgBgBgAATALIALgKIAKgHQAJgFAKgEQADAEAAAFIAAAAIgIAGIgFACIAAAAQgRAKgJAAIgEgBgACqgGIAAgFQAAgGgBgDQgCgEgDAAQgGgLgYAAIgBAAIgBAAIgBAAIgQADQgIABgGADIANgHQAggLAVATIAAABIACAFIAJAMIgBAEQgBACgEACIgDABIABgGgAhpgQQgLACAAgMQAdABABAKQgEgDgPACg");
	this.shape_7.setTransform(-2.5,-25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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");
	this.shape_8.setTransform(0,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AiLApQAJgZAigPIgzgDQgMAGgJAOQgHAAgCAFQAFgbAkgCQAXgCAoACIAAgNIAAgBQACgPAJgJQAEgFAHgEQASgCAAgCIgBgDIAPgBQAzgEASAiIADAFQgMAMgQAJIgNAFIgUAIQgfAJgXgHQgJgDgIgGQgHAOgTAKIgFADQgJAOgCAPIgEAAQgOAAgDAGQgBgMAEgKgAirA1QgCgNALgPIgBgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQARgUATAGQgUAYgHAPIgBADIgCgBIAAAAQgOAAgDAGgAA9AbQALgEABgFQALALgjAJQABgHALgEgABcASIAEgDIAEgDIAAAAIAFgCIAMgBIACAAIAKAFIAGAFIAAAAIAEAGQgGABgFAEIgCACQgJgWgZAIgACSAaIgBgGIgDgGQgHgMgVAAQgLAAgLAHIgGAEIABgFQABgGgBgEIgKAIIgMAJQgNALgRgCIAXgWIAAAAIAFgDIAFgFIAPgMQABgFAHAAIABABIgHAHIgBgBIgEAGIAAAAIAAABQAXAFABgCQgLABAAgKQAsgMAOABQAHAGAFARIgBANQAAAEgHAHIgGAGIgDgBgABTAVIgCABIgBgCIACAAIAAgBIADAAIABACIgCABIgBgBgAATALIALgKIAKgHQAJgFAKgEQADAEAAAFIAAAAIgIAGIgFACIAAAAQgRAKgJAAIgEgBgACqgLQAAgGgBgDQgCgEgDAAIgDgEQgIgHgTAAIgBAAIgBAAIgBAAIgQADIgNADIgBABIABgBIAMgGQAfgLAVASIABABIAAABIACAFIAJAMQAAAFgGADIgDABIABgLgAhpgQQgLACAAgMQAdABABAKQgEgDgPACg");
	this.shape_9.setTransform(-2.5,-25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("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");
	this.shape_10.setTransform(0,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghAcQgBgFANAAQAOAAABgJQACgQghAKQABglAkAEQAjADgFAeQgCAPgXAIQgIAEgJAAQgMAAgJgHgAAsAZQAAgGAMABQAPAAAAgJQABgLgQAAQgQADgDgDIARgdQATgKAPAKQANAJABARQACAQgOAJQgKAGgNAAQgLAAgMgDgAhmAGIACAAIgCAAg");
	this.shape_11.setTransform(-9.5,-20.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AA1COIgCAAIgHgCIAdgCIAHgBIAHgBQAdgEANgJQAEATAAAJIAAAFIhQgOgAiDheQgHgPARgkQCRAQAtgaQADAEAOAvQhVAfg4AAQgvAAgdgVg");
	this.shape_12.setTransform(1.9,16.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFDBC4").s().p("AhRDoIgGgDQAFgRAIgiIACgIIACgNIABgEIgBgCQAsgQAUgBQAagBAnALIA+ARIACAEIgBABIABgBIAEAKIgBABIANA5QgUALgZAGQgQAEgTACIgUACIgSADQg+gNgogQgAAVDoQAFAAAEgGIgSgGQgHAAgBAFQAAABABABQAAAAAAABQAAAAAAAAQAAAAAAAAQAEAEAMAAgAiYBhQAHgBgCAIQgCAIAHACQAJAAAVgRQARgNAPANQBDgPB2guQgCAPAGATQimBMhSAJQgbgpAOgRgACLCZIgFAAQgQgBgFgDIgKgDQhEgRgcACQARgWApgEQArgEAOAbQAHhbg2hjQgEADAFAKQAHALgCAHQh7AXg/gXQABgggKgGQAFAOgNAvQgLAlATAOIgsAHIgPADIAAgGIAAAAIgChZQAAhEAhgIQAQgDAXAMQAXANALAEIAJAAQADgBACgGQACgEAAgHIABABIADAEIAxgPIAEAEIACgEIABAIIgBAOIACgBQAXgRAbgCQAkgFARAZQAYAeAdBgQABABACALQACAKAGARQAGARABAVIABAXIAAADIAAABIgBAAQgCAEgHAGQgFAEgGADQgGACgHABIgCAAIgCAAIgCAAIgBABIgDAAgAgxhbIAAAAIAAgBgAiOBsQABgIAJgFQAKgGAAgGQgHgBgIADQgHACgIAGQgQAMgFgBQAHgMAcgLIANgEQgIgEgQAHQgUAKgHAAQALgPAlgFQgBgCgNgIQgXARgSADQAMghA3AGQAeADA1AOQgoAWgggFQgHAAgMANQgJAIgGAAIgDAAgABLBhQAJgKAZgOQAGAHAEAcQgZgMgTABgAgUBEQgJgDgHABQARgDAHgDQgCAIgFAAIgBAAgAhgiJQgdgRgIgeIgCgIQASAAAXgJQAFABAGAKQADAFAFADIAFABQAGAAAGgBIALgEQAMgGgFgGQAZgDAhggQAfgdAkADQADAJABAgQgagBgFAHQABAKgBAIQgCAagUATQgZAXgmADIgLAAQggAAgagOgAhKiTQAFALAxgIQgDgLgPAAQgOAAgWAIgABLjlQAAgVADgCQgKgBgIAJQgIAJAGAGQABgJAQAJIAAAAgAhQjGQAFgMAMACQACgLgJABQAFgKAFAMQAGAQALgFQgBAMgPABIgCAAQgMAAgHgGg");
	this.shape_13.setTransform(0.7,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AiLApQAJgZAigPIgzgDQgMAGgJAOQgHAAgCAFQAFgbAkgCQAXgCAoACIAAgNQACgOAHgJQAFgHAIgEQASgCAAgCIgBgDIAPgBQAygEASAgIAEAHQgMAMgQAJIgNAFIgUAIQgfAJgXgHQgJgDgIgGQgHAOgTAKIgFADQgJAOgCAPIgEAAQgOAAgDAGQgBgMAEgKgAirA1QgCgNALgPIgBgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQARgUATAGQgUAYgHAPIgBADIgCgBIAAAAQgOAAgDAGgAA9AbQALgEABgFQALALgjAJQABgHALgEgABcASIAEgDIAEgDIAAAAIAFgCIAMgBIACAAIAKAFIAGAFIAAAAIAEAGQgGABgFAEIgCACQgJgWgZAIgACSAaIgBgGIgDgGQgHgMgVAAQgLAAgLAHIgGAEIABgFQABgGgBgEIgKAIIgMAJQgNALgRgCIAXgWIAAAAIAFgDIAFgFIAPgMQABgFAHAAIABABIgHAHIgBgBIgEAGIAAAAIAAABQAXAFABgCQgLABAAgKQAsgMAOABQAHAGAFARIgBANQAAAEgHAHIgGAGIgDgBgABTAVIgCABIgBgCIACAAIAAgBIADAAIABACIgCABIgBgBgAATALIALgKIAKgHQAJgFAKgEQADAEAAAFIAAAAIgIAGIgFACIAAAAQgRAKgJAAIgEgBgACqgLQAAgGgBgDQgCgEgDAAIAAgBIgBAAIgDgEQgIgGgSAAIgBAAIgBAAIgBAAIgQADIgIABIgGADIAEgDIAJgEQAfgLAVASIABABIAAABIACAFIAJAMQAAAFgGADIgDABIABgLgAhpgQQgLACAAgMQAdABABAKQgEgDgPACg");
	this.shape_14.setTransform(-2.5,-25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("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FIADABIAGgGQAHgGAAgFIABgOQgGgRgGgGQgPgBgrAMQAAAKAKAAQgBABgXgFIAAAAIABgBIAEgGIAAABIAIgHIgBgBQgIAAAAAGIgPAMIgFAEIgGAFIAAAAIgWAVQARACANgLIALgJIAKgJQABAGAAAFIgBAFIAFgEQALgHAMAAIAAAAgAA8jhIABgBIAAgCIgDAAIAAABIgCAAIABACIACAAIABAAgAAQj9IgLAHIgKAKQAIAEAWgNIAAAAIAEgDIAJgFIAAgBQAAgEgEgFQgJAEgJAGgACIkUIADADIAAAAIABABQADABABADQACADgBAGIAAAMIADgCQAGgDAAgFIgJgMIgCgFIAAgBIgCgBQgVgSgeAMIgJAEIgFACIAHgCIAHgCIARgCIABAAIABAAIABAAIADAAQAQAAAHAGgAhukHQgBgJgegCQAAAMALgCQAPgCAFADIAAAAgABJE3IAOACIgEAAIgEABQgFAAgBgDgAA/E1IAJAAIABABIAAABgAANEMQAAAAgBABQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgFAIAAIASAGQgEAGgFAAQgMAAgEgEgAhChrQAwgRAGAUQgVAEgNAAQgRAAgDgHgABCi9QgHgGAJgJQAIgJAJABQgCADAAAUQgQgJgBAJg");
	this.shape_15.setTransform(-0.1,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("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FIADABIAGgGQAHgGAAgFIABgOQgGgRgGgGQgPgBgrAMQAAAKAKAAQgBABgXgFIAAAAIABgBIAEgGIAAABIAIgHIgBgBQgIAAAAAGIgPAMIgFAEIgGAFIAAAAIgWAVQARACANgLIALgJIAKgJQABAGAAAFIgBAFIAFgEQALgHAMAAIAAAAgAA8jhIABgBIAAgCIgDAAIAAABIgCAAIABACIACAAIABAAgAAQj9IgLAHIgKAKQAIAEAWgNIAAAAIAEgDIAJgFIAAgBQAAgEgEgFQgJAEgJAGgACIkUIADADIAAAAIABABQADABABADQACADgBAGIAAAMIADgCQAGgDAAgFIgJgMIgCgFIAAgBIgCgBQgVgSgeAMIgJAEIgFACIAHgCIAHgCIARgCIABAAIABAAIABAAIADAAQAQAAAHAGgAhukHQgBgJgegCQAAAMALgCQAPgCAFADIAAAAgABJE3IAOACIgEAAIgEABQgFAAgBgDgAA/E1IAJAAIABABIAAABgAANEMQAAAAgBABQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgFAIAAIASAGQgEAGgFAAQgMAAgEgEgAhChrQAwgRAGAUQgVAEgNAAQgRAAgDgHgABCi9QgHgGAJgJQAIgJAJABQgCADAAAUQgQgJgBAJg");
	this.shape_16.setTransform(-0.1,-0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAnCSIgBAAIgIgBIAegCIAHgBIAGgBQAegFANgJQADATABAKIAAAEIhRgOgAhthZIgGgMQgEgKAAgOIAAgSQAKAEAVADQAgAFAVAAQA7AAAUgdQAMAlAAAHQAAANgFAHQgCAEgBAEIgCABQgNAFhBAAIhJAAQgGAAACgHg");
	this.shape_17.setTransform(3.3,16.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFDBC4").s().p("AAUDoIgGgDQAFgOAGgcIACAAIAAgFIAAgCIAAgBIAAgnIgEgzQgCgegCgMIAFACQAGACBDAAQA5AAAVgIIAAABIABAOIAIAWQAPAsALAnIAgBGIgTAJQgMAEgOAEQgRAEgSACIgUACIgSADQg/gNgpgQgAB8DoQAEAAAFgGIgSgGQgIAAAAAFQAAABAAABQAAAAAAABQAAAAAAAAQAAAAABAAQAEAEAMAAgAD7DYIAfhUQAPgtAAgOQAAgQgQgPQgXgSgNgMQhDg8gCAAQgBgDgDgBQgJAhhIAAQgtAAgJgGQgJgFgNAAIgHAAIgCgGIgDAIQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAACQgBAIAAAKIgEAAQgaAAhoBfQgNg1gjgxQgNgUgGgdQgEgfgDgGQgFgJg3gRIAJAFQgegCgvAHIAAgGQACgCAPgFQAQgGAOACIgBAAIADAAIACAAQBFALASgQQAWgVARgCIAAABQgpAtAAAGQBKCQAKABQASgBAzg/IAYgkQAKgPANgBQATABAVgCQAHgBAAgQIAAgEIAAAAIABgJIABABIAEAEIAxgPIAFAEIACgEIABAIIgBAOIABgBQAXgRAcgCQAJgCAHABQACAFAIALQARAWArAwQBBBHAZAXQgRAZgUA5QgMAagZAxIgEAOIgBABgAA1hbIAAAAIAAgBgAC+h0IAHADIgDACgAAFiJQgbgRgJgeIgCgIQASAAAXgJQAFABAFAKQAEAFAEADIAFABQAGAAAGgBIAMgEQALgGgEgGQAZgDAhggQAfgdAkADQAEAJAAAgQgagBgEAHQABAKgBAIQgDAagUATQgZAXgnADIgKAAQggAAgbgOgAAciTQAEALAygIQgDgLgQAAQgNAAgWAIgACyjlQgBgVADgCQgKgBgHAJQgJAJAHAGQABgJAQAJIAAAAgAAVjGQAGgMALACQACgLgJABQAGgKAFAMQAFAQALgFQAAAMgPABIgDAAQgMAAgHgGg");
	this.shape_18.setTransform(-9.6,3.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("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JgNALgIgAhZjiQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAIAAABQgLAQACANIAAAAIACAAQADgFANgBIABAAIACABIABgDQAGgPAUgYIgIgBQgPAAgNAPgACDjcQgLAEgBAHQAkgJgLgLQgCAGgLADgADFjXIACgBQAFgFAFAAIgDgHIAAAAIgHgFIgJgEIgCgBIgNABIgEACIAAAAIgFADIgEADQAHgCAFAAQAQAAAHAQgAC4j1QAWABAGALIADAHIACAFIACABIAHgGQAGgGABgFIABgOQgGgRgHgGQgOgBgsAMQAAAKALAAQgBABgXgFIAAAAIABgBIADgGIABABIAIgHIgBgBQgIAAAAAGIgQAMIgEAEIgGAFIAAAAIgWAVQARACANgLIALgJIAKgJQABAGAAAFIgBAFIAFgEQALgHALAAIAAAAgACajhIACgBIgBgCIgCAAIAAABIgCAAIABACIACAAIAAAAgABuj9IgKAHIgLAKQAIAEAWgNIABAAIAEgDIAJgFIAAgBQAAgEgEgFQgKAEgJAGgADnkUIADADIAAAAIABABQADABABADQABADAAAGIAAAMIADgCQAFgDAAgFIgIgMIgDgFIAAgBIgBgBQgVgSgeAMIgKAEIgEACIAHgCIAHgCIARgCIAAAAIABAAIACAAIACAAQAQAAAIAGgAgQkHQAAgJgegCQAAAMALgCIALgBQAGAAACACgACoE3IAOACIgEAAIgFABQgEAAgBgDgABsEMQgBAAAAABQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgFAIAAIASAGQgFAGgEAAQgMAAgEgEgAAchrQAwgRAGAUQgVAEgNAAQgSAAgCgHgAChi9QgHgGAJgJQAHgJAKABQgDADABAUQgQgJgBAJg");
	this.shape_19.setTransform(-9.6,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAaA7IATgCIABAAIAJAAIAdABIgBAEIgsABIgNgEgAghAAQgBgEANAAQAOAAABgJQACgRghALQABgmAkAEQAjADgFAfQgCAPgXAHQgIAEgJAAQgMAAgJgHgAAsgCQAAgGAMABQAPAAAAgJQABgMgQACQgQACgDgCIARgfQATgJAPAJQANAJABARQACARgOAJQgKAFgNAAQgLAAgMgCgAhmgVIACAAIgCABg");
	this.shape_20.setTransform(-9.5,-17.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAnDOIgBAAIgIgCIAegCIAHgBIAGgBQAegEANgJQADATABAJIAAAFIhRgOgAhtgeIgGgMQgEgKAAgNIAAgSQAKADAVAEQAgAEAVAAQA7AAAUgcQAMAlAAAGQAAAOgFAHQgCADgBAFIgCAAQgNAFhBAAIhJABQgGAAACgIgAhIjSIgQgDIAsAAIAAADgAhIjaIgJAAIAkgBIAAABIACAAIAAABIAAAAIgdgBg");
	this.shape_21.setTransform(3.3,10.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFDBC4").s().p("AAUDoIgGgDQAFgOAGgcIACAAIAAgFIAAgCIAAgBIAAgnIgEgzQgCgegCgMIAFACQAGACBDAAQA5AAAVgIIAAABIABAOIAIAWQAPAsALAnIAgBGIgTAJQgMAEgOAEQgRAEgSACIgUACIgSADQg/gNgpgQgAB8DoQAEAAAFgGIgSgGQgIAAAAAFQAAABAAABQAAAAAAABQAAAAAAAAQAAAAABAAQAEAEAMAAgAD7DYIAfhUQAPgtAAgOQAAgQgQgPQgXgSgNgMQhDg8gCAAQgBgDgDgBQgJAhhIAAQgtAAgJgGQgJgFgNAAIgHAAIgCgGIgDAIQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAACQgBAIAAAKIgEAAQgaAAhoBfQgNg1gjgxQgNgUgGgdQgEgfgDgGQgFgJg3gRIAJAFQgegCgvAHIAAgGQACgCAPgFQAQgGAOACIgBAAIADAAIACAAQBFALASgQQAWgVARgCIAAABQgpAtAAAGQBKCQAKABQASgBAzg/IAYgkQAKgPANgBQATABAVgCQAHgBAAgQIAAgEIAAAAIABgJIABABIAEAEIAxgPIAFAEIACgEIABAIIgBAOIABgBQAXgRAcgCQAJgCAHABQACAFAIALQARAWArAwQBBBHAZAXQgRAZgUA5QgMAagZAxIgEAOIgBABgAA1hbIAAAAIAAgBgAC+h0IAHADIgDACgAAFiJQgbgRgJgeIgCgIQASAAAXgJQAFABAFAKQAEAFAEADIAFABQAGAAAGgBIAMgEQALgGgEgGQAZgDAhggQAfgdAkADQAEAJAAAgQgagBgEAHQABAKgBAIQgDAagUATQgZAXgnADIgKAAQggAAgbgOgAAuiHIAAACIAAABQAMACANgBIABgCIgBgCIgNgBgAATiYQAAAOAsAAQAXAAAEgEIABgHQADgHgFgDQgBgBAAABIgBgBQgHgDgQAAQgsAAgBALgACyjlQgBgVADgCQgKgBgHAJQgJAJAHAGQABgJAQAJIAAAAgAAVjGQAGgMALACQACgLgJABQAGgKAFAMQAFAQALgFQAAAMgPABIgDAAQgMAAgHgGg");
	this.shape_22.setTransform(-9.6,3.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("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JgNALgIgAhZjiQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAIAAABQgLAQACANIAAAAIACAAQADgFANgBIABAAIACABIABgDQAGgPAUgYIgIgBQgPAAgNAPgACDjcQgLAEgBAHQAkgJgLgLQgCAGgLADgADFjXIACgBQAFgFAFAAIgDgHIAAAAIgHgFIgJgEIgCgBIgNABIgEACIAAAAIgFADIgEADQAHgCAFAAQAQAAAHAQgAC4j1QAWABAGALIADAHIACAFIACABIAHgGQAGgGABgFIABgOQgGgRgHgGQgOgBgsAMQAAAKALAAQgBABgXgFIAAAAIABgBIADgGIABABIAIgHIgBgBQgIAAAAAGIgQAMIgEAEIgGAFIAAAAIgWAVQARACANgLIALgJIAKgJQABAGAAAFIgBAFIAFgEQALgHALAAIAAAAgACajhIACgBIgBgCIgCAAIAAABIgCAAIABACIACAAIAAAAgABuj9IgKAHIgLAKQAIAEAWgNIABAAIAEgDIAJgFIAAgBQAAgEgEgFQgKAEgJAGgADnkUIADADIAAAAIABABQADABABADQABADAAAGIAAAMIADgCQAFgDAAgFIgIgMIgDgFIAAgBIgBgBQgVgSgeAMIgKAEIgEACIAHgCIAHgCIARgCIAAAAIABAAIACAAIACAAQAQAAAIAGgAgQkHQAAgJgegCQAAAMALgCIALgBQAGAAACACgACoE3IAOACIgEAAIgFABQgEAAgBgDgABsEMQgBAAAAABQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgFAIAAIASAGQgFAGgEAAQgMAAgEgEgAAuhcIAAgBIAAgCIAMgBIANABIABACIgBACIgIABIgRgCgAAThwQABgLAsAAQAQAAAHAEIABAAQAAgBABABQAFAEgDAGIgBAHQgEAEgXAAQgsAAAAgOgAAbhwIAMADIAQADIAcAAIABgEIABgEIAAAAIgBAAIgCgBIAAAAIgjAAIgBAAgAChi9QgHgGAJgJQAHgJAKABQgDADABAUQgQgJgBAJg");
	this.shape_23.setTransform(-9.6,-0.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("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JgNALgIgAhZjiQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAIAAABQgLAQACANIAAAAIACAAQADgFANgBIABAAIACABIABgDQAGgPAUgYIgIgBQgPAAgNAPgACDjcQgLAEgBAHQAkgJgLgLQgCAGgLADgADFjXIACgBQAFgFAFAAIgDgHIAAAAIgHgFIgJgEIgCgBIgNABIgEACIAAAAIgFADIgEADQAHgCAFAAQAQAAAHAQgAC4j1QAWABAGALIADAHIACAFIACABIAHgGQAGgGABgFIABgOQgGgRgHgGQgOgBgsAMQAAAKALAAQgBABgXgFIAAAAIABgBIADgGIABABIAIgHIgBgBQgIAAAAAGIgQAMIgEAEIgGAFIAAAAIgWAVQARACANgLIALgJIAKgJQABAGAAAFIgBAFIAFgEQALgHALAAIAAAAgACajhIACgBIgBgCIgCAAIAAABIgCAAIABACIACAAIAAAAgABuj9IgKAHIgLAKQAIAEAWgNIABAAIAEgDIAJgFIAAgBQAAgEgEgFQgKAEgJAGgADnkUIADADIAAAAIABABQADABABADQABADAAAGIAAAMIADgCQAFgDAAgFIgIgMIgDgFIAAgBIgBgBQgVgSgeAMIgKAEIgEACIAHgCIAHgCIARgCIAAAAIABAAIACAAIACAAQAQAAAIAGgAgQkHQAAgJgegCQAAAMALgCQAPgCAEADIAAAAgACoE3IAOACIgEAAIgFABQgEAAgBgDgABsEMQgBAAAAABQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgFAIAAIASAGQgFAGgEAAQgMAAgEgEgAAuhcIAAgBIAAgCIAMgBIANABIABACIgBACIgIABIgRgCgAAThwQABgLAsAAQAQAAAHAEIABAAQAAgBABABQAFAEgDAGIgBAHQgEAEgXAAQgsAAAAgOgAAbhwIAMADIAQADIAcAAIABgEIABgEIAAAAIgBAAIgCgBIAAAAIgjAAIgBAAgAChi9QgHgGAJgJQAHgJAKABQgDADABAUQgQgJgBAJg");
	this.shape_24.setTransform(-9.6,-0.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AD4E/QAAgJgEgUQgNAKgdAEIgHABIgHABIgmABIAIACIAIAAIACABIAAABIgKgCIgggCIgCgGIASgCIAUgDQASgCARgEQAOgDAMgFIATgJIgghGQgLgngPgsIgIgVIgBgPIAAgBIAAAAQgVAIg5AAQhDAAgGgCIgFgCQACAMACAeIAEAzIAAAnIAAABIAAACIAAAFIgCAAQgGAcgFAOIAGADIgQgBIgDgGIAGgNIADgJIAIgfIAAgBIgDgRIgGACIAGgDQgEghAAg3QAAgQACgGQgNgMAAgfQgLAJhCArIgcAcQgXAXgKAAIgFgBQgCglgshJQgUgggDgWQgBgJgHgSQgCgIgGgGQgEgFgGgDQgIgFgKgBQgUgCgZAJQgYAJgKgHQgKgHgBAHIAAgGQAAgOAMgEQAcgLBgAAQAggbAYAAQAKAAACADIAAAEQAAAIgXAaIgXAYQAAAIAiA4IAnBAIA7g4QAIgHAJgRQALgWAFgFQAVgdAnAWIAAgPQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIAAgBIgDgDIAAgBIgBAAQgQgPgZgGQgSgOgOgVIgIgPQgJgTABgTIgGAAQgHAEgEAAIgCgDIABAGQgNgDACgNIgDAAIgMAGIgBgCIgCAAIACAFIgHgDQgLgIAKgVIAAAAIACgEIgBAAIgDgDIAAAFQgIghAqgTQAVgKASAAIAEABIAYAGIAAABQAFgKADgMIABgDIAHgHIADgEIAHAAIASgMQAagEAxAVIAFABIAJAJIAAAAQAEADABAIIgBAGQgCALAHADQAEgHAOgIIAFgEQAJgGACgFQAKgFATAAQAWAAAQAFQgBADAHAHIAEAEIACAEQADAFADAKQAAASgOAAIgCgCIAAAEQgBAIgCACIAAAAIgCACIAAAAQgUAYgEAAIgDgEIADgJIgLAGIABAGQAGApgjADIAAACQABAsg7AdIAAACIADAGQAigTAcAJQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIADAEIANAIIgBABIgHgDIAEAFIBCBPQARAWBGBHQgxCAgdAkIAAADIAKAAIAcgdQAIAAgCAYQAAAugiAAQgKAAgFgCIAAAMIgBAAIgPAAgACwgIQACAABDA8QANAMAXASQAQAPAAAQQAAAOgPAtIgfBUIAHARIAAABQAFAKAGAFIgEAJIAPAAQARAAAGgSIAAgSQgGABgGAIQgFAIgNAAQgLAAgDgGIAEgPQAZgxAMgaQAUg5ARgZQgZgWhBhJQgrgugRgWQgIgMgCgEQgHgBgJABQgcADgXAQIgBABIABgOIgBgIIgCAEIgFgEIgxAQIgEgFIgBgBIgBAJIAAAAIAAAAIAAAEQAAAQgHABQgVACgTgBQgNABgKAPIgYAjQgzBBgSAAQgKAAhKiRQAAgGApgtIABgBIgBAAQgRADgWAUQgSAQhFgKIgCgBIgDAAIABAAQgOgBgQAFQgPAFgCACIAAAGQAvgGAeACIgJgGQA3ASAFAIQADAGAEAfQAGAcANAUQAjAyANA1QBohgAaAAIAEABQAAgLABgIIAAgCQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIADgIIACAGIAHAAQANAAAJAFQAJAGAtAAQBIAAAJggQADACABACgADDAuQAAAGgKAgIAAAAQARBbATAeQAUAeAEADIAfhSQALghAAgLQAAgLgrglIgzgoQACAHAAAPgAAJAlQAAAOAEAKIAGAMQgCAHAFAAIBKAAQBCAAAMgFIACgBQABgEADgEQAFgHAAgNQAAgHgMgkQgVAcg7AAQgVAAgggFQgWgDgJgEIAAASgAgfiQQAJAfAbAQQAfARAmgDQAngDAZgXQAUgSADgaQABgJgBgKQAEgHAaABQAAgggEgJQgkgDgfAeQghAggZACQAEAHgLAFIgMAEQgGACgGgBIgFgBQgEgCgEgGQgFgKgFgBQgXAKgSAAIACAHgAAVieQAIAHAOAAQAPgCAAgMQgLAFgFgQQgFgMgGAKQAJgBgCALIgCAAQgKAAgFAKgAghisQARAMAWgIQAXgJACgPQAFgfgkgDQgjgDgBAlQAhgKgDARQAAAIgOAAQgNAAAAAFgAAtivQAdAIARgKQAOgKgCgRQgBgQgNgKQgPgJgTAKIgRAeQACADARgDQAQgCgBAMQgBAKgOgBIgCAAQgKAAAAAFgAgZj2QgjAQgJAYQgDAKABAMQACgGAPAAIADABQADgPAIgPIAGgDQATgJAHgPQAIAGAIADQAXAIAfgKIAUgHIANgHQAQgIAMgNIgDgGQgSgggzADIgPACIABACQAAADgTABQgIAFgFAGQgGAKgBAOIAAANQgogCgXABQgkACgFAcQABgEAIgBQAJgNALgIgAhZjiQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAIAAABQgLAQACANIAAAAIACAAQADgFANgBIABAAIACABIABgDQAGgPAUgYIgIgBQgPAAgNAPgACDjcQgLAEgBAHQAkgJgLgLQgCAGgLADgADFjXIACgBQAFgFAFAAIgDgHIAAAAIgHgFIgJgEIgCgBIgNABIgEACIAAAAIgFADIgEADQAHgCAFAAQAQAAAHAQgAC4j1QAWABAGALIADAHIACAFIACABIAHgGQAGgGABgFIABgOQgGgRgHgGQgOgBgsAMQAAAKALAAQgBABgXgFIAAAAIABgBIADgGIABABIAIgHIgBgBQgIAAAAAGIgQAMIgEAEIgGAFIAAAAIgWAVQARACANgLIALgJIAKgJQABAGAAAFIgBAFIAFgEQALgHALAAIAAAAgACajhIACgBIgBgCIgCAAIAAABIgCAAIABACIACAAIAAAAgABuj9IgKAHIgLAKQAIAEAWgNIABAAIAEgDIAJgFIAAgBQAAgEgEgFQgKAEgJAGgADnkUIADADIAAAAIABABQADABABADQABADAAAGIAAAMIADgCQAFgDAAgFIgIgMIgDgFIAAgBIgBgBQgVgSgeAMIgKAEIgEACIAHgCIAHgCIARgCIAAAAIABAAIACAAIACAAQAQAAAIAGgAgQkHQAAgJgegCQAAAMALgCQAPgCAEADIAAAAgACoE3IAOACIgEAAIgFABQgEAAgBgDgABsEMQgBAAAAABQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgFAIAAIASAGQgFAGgEAAQgMAAgEgEgAAchrQAwgRAGAUQgVAEgNAAQgSAAgCgHgAChi9QgHgGAJgJQAHgJAKABQgDADABAUQgQgJgBAJg");
	this.shape_25.setTransform(-9.6,-0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAFDeIABAAIABADgAghiiIAAgBQgEgFAAgKIAAgEIAAAAQABglAkADQAjADgFAfQgCAPgXAJQgIADgJAAQgMAAgJgHgAghisQAAADAPAAQAfAAAAgHIgCgCIgYACIgDAAQgSAAABAEgAAsilIAAgCQgFgEAAgNIAAgEIgCgBIARgeQATgKAPAJQANAJABARQACARgOAKQgKAGgNAAQgLAAgMgEgAAvi0QAAAEANAAQAaAAAAgFQACgDgKAAQgfAAAAAEgAhmi3IACAAIgCAAg");
	this.shape_26.setTransform(-9.5,-1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF9900").s().p("AiLApQAJgZAigPIgzgDQgMAGgJAOQgHAAgCAFQAFgbAkgCQAXgCAoACIAAgNQACgNAGgJQAFgHAJgFQASgCAAgCIgBgDIAPgBQA0gEARAiIADAFQgMAMgQAJIgNAFIgUAIQgfAJgXgHQgJgDgIgGQgHAOgTAKIgFADQgJAOgCAPIgEAAQgOAAgDAGQgBgMAEgKgAirA1QgCgNALgPIgBgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQARgUATAGQgUAYgHAPIgBADIgCgBIAAAAQgOAAgDAGgAA9AbQALgEABgFQALALgjAJQABgHALgEgABcASIAEgDIAEgDIAAAAIAFgCIAMgBIACAAIAKAFIAGAFIAAAAIAEAGQgGABgFAEIgCACQgJgWgZAIgACSAaIgBgGIgDgGQgHgMgVAAQgLAAgLAHIgGAEIABgFQABgGgBgEIgKAIIgMAJQgNALgRgCIAXgWIAAAAIAFgDIAFgFIAPgMQABgFAHAAIABABIgHAHIgBgBIgEAGIAAAAIAAABQAXAFABgCQgLABAAgKIAVgGIAAAAQAbgGAKABQAEADADAHIAFANIgBANQAAAEgHAHIgGAGIgDgBgABTAVIgCABIgBgCIACAAIAAgBIADAAIABACIgCABIgBgBgAATALIALgKIAKgHQAJgFAKgEQADAEAAAFIAAAAIgIAGIgFACIAAAAQgRAKgJAAIgEgBgACqgLIAAgEIgBgFQgCgEgDAAQgGgLgYAAIgBAAIgBAAIgBAAIgQADQgIABgGADIANgHQAggLAVATIAAABIACAFIAFAGIAEAGQAAAFgGADIgDABIABgLgAhpgQQgLACAAgMQAdABABAKQgEgDgPACg");
	this.shape_27.setTransform(-2.5,-25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("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");
	this.shape_28.setTransform(0,-0.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF9900").s().p("AiLApQAJgZAigPIgzgDQgMAGgJAOQgHAAgCAFQAFgbAkgCQAXgCAoACIAAgNQACgRALgKIAAgBIAJgGQASgCAAgCIgBgDIAPgBQA3gEARAnIgDACQgLALgOAIIgNAFIgUAIQgfAJgXgHQgJgDgIgGQgHAOgTAKIgFADQgJAOgCAPIgEAAQgOAAgDAGQgBgMAEgKgAirA1QgCgNALgPIgBgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQARgUATAGQgUAYgHAPIgBADIgCgBIAAAAQgOAAgDAGgAA9AbQALgEABgFQALALgjAJQABgHALgEgABcASIAEgDIAEgDIAAAAIAAgBQAHgCAKAAIACAAIAKAFIAGAFIAAAAIAEAGQgGABgFAEIgCACQgJgWgZAIgACSAaIgBgGIgDgGQgHgMgVAAQgLAAgLAHIgGAEIABgFQABgGgBgEIgKAIIgMAJQgNALgRgCIAXgWIAAAAIAFgDIAFgFIAPgMIACgDQACgCAEAAIABABIgCABIgEAEIgBACIgBgBIgEAGIAAAAIAAABQAXAFABgCQgLABAAgKIAQgFIABAAQAegHALABQAEADAEAIIAEAMIgBANQAAAEgHAHIgGAGIgDgBgABTAVIgCABIgBgCIACAAIAAgBIADAAIABACIgCABIgBgBgAATALIALgKIAKgHQAJgFAKgEQADAEAAAFIAAAAIgIAGIgFACIAAAAQgRAKgJAAIgEgBgACqgLIAAgEIgBgFQgCgEgDAAQgGgLgYAAIgBAAIgBAAIgBAAIgQADQgIABgGADIANgHQAggLAVATIAAABIACAFIAEAGIAFAGQAAAFgGADIgDABIABgLgAhpgQQgLACAAgMQAdABABAKQgEgDgPACg");
	this.shape_29.setTransform(-2.5,-25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("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");
	this.shape_30.setTransform(0,-0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAFDeIABAAIABADgAghiiIAAgBQgDgDABgNIAAgDIgCAAQABglAkADQAjADgFAfQgBAHgFAGQAAgIgLAAQgKAAAAANQgBAEABADQgHACgIAAQgMAAgJgHgAgQinIAAAAIgBgCIABACgAAsilQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIgBAAQgFgCABgMIAAgGIgEgBIARgeQATgKAPAJQANAJABARQABAMgGAIQAAgGgKAAQgJAAAAAMQgBAEABABIgMACQgKAAgMgEgAA8iqIAAAAIAAAAgAhmi3IACAAIgCAAg");
	this.shape_31.setTransform(-9.5,-1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF9900").s().p("AiLApQAJgZAigPIgzgDQgMAGgJAOQgHAAgCAFQAFgbAkgCQAXgCAoACIABgNIgBAAQABgHACgGQAGgOANgHQASgCAAgCIgBgDIAPgBQA3gEARAnQgJAJgMAIIgHAEIgNAFIgUAIQgfAJgXgHQgJgDgIgGQgHAOgTAKIgFADQgJAOgCAPIgEAAQgOAAgDAGQgBgMAEgKgAirA1QgCgNALgPIgBgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQARgUATAGQgUAYgHAPIgBADIgCgBIAAAAQgOAAgDAGgAA9AbQALgEABgFQALALgjAJQABgHALgEgABcASIAEgDIAEgDIAAAAIAFgCIAMgBIACAAIAKAFIAGAFIAAAAIAEAGQgGABgFAEIgCACQgJgWgZAIgACSAaIgBgGIgDgGQgHgMgVAAQgLAAgLAHIgGAEIABgFQABgGgBgEIgKAIIgMAJQgNALgRgCIAXgWIAAAAIAFgDIAFgFIAFgEIAKgIQABgFAHAAIABABIgHAHIgBgBIgEAFIAAABIAAABQAXAFABgCQgJABgBgHIgBgDQAsgMAOABQAFAFAFAMIACAGIgBANQAAAEgHAHIgGAGIgDgBgABTAVIgCABIgBgCIACAAIAAgBIADAAIABACIgCABIgBgBgAATALIALgKIAKgHIAFgDIAOgGIADAGIAAADIAAAAIgIAGIgFACIAAAAQgRAKgJAAIgEgBgACqgJIAAgCQAAgGgBgDQgCgEgDAAQgGgLgYAAIgBAAIgBAAIgBAAIgQADQgIABgGADIANgHQAggLAVATIAAABIACAFIAJAMQAAAFgGADIgDABIABgJgAhpgQQgLACAAgMQAdABABAKQgEgDgPACg");
	this.shape_32.setTransform(-2.5,-25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("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");
	this.shape_33.setTransform(0,-0.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAaDeIACAAIABADgAgeiUIAAgCQgDgDgBgMIAAgDIgCAAQgEglAkgBQAjgCAAAfQgBAHgEAGQgBgHgLACQgKABACAMQAAAFABACQgKAFgKAAQgJAAgIgEgAgNicIAAAAIgBgBIABABgAhkihIACAAIgCABgAAuiiQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIgBAAQgFgBgBgMIgBgGIgDgBIAMggQASgMAQAHQAOAIAEAQQACALgFAJQgBgFgKABQgJABABAMQAAADACACQgJADgNAAIgNgBgAA9ipIABAAIAAAAg");
	this.shape_34.setTransform(-11.7,-1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFDBC4").s().p("AhTDvIgGgDQAFgRAJglIgVAAIgBgDIAYgHQAtgRAUAAQAagBAoALIBCARIANA7QgUAKgZAGQgQAEgSADIgUACIgTACQg9gMgpgRgAAUDwQAEAAAFgGIgSgGQgIAAAAAEQAAABAAABQAAABAAAAQAAABAAAAQAAAAAAgBQAFAFAMAAgAiaB1QAHAAgCAIQgCAIAHABQAJAAAVgRQASgNAOANQBDgPB3guQgCAPAFATQimBMhRAJQgcgoAOgSgABlCnQhEgRgcABQARgWApgDQAsgEAOAaQAGhag2hjQgDADAFAKQAGALgCAHQh6AVg/gVQAAgggKgGQAFAOgNAtQgLAnATANQgoAFgSAGIgChlQgBg9AhgIQAQgCAYAKQAcAPALACQAHgBAAgLIAAAAIgBgCIgBgJIA0gYQAHADAIAVIACAAIAAAEIAFALIgFgBIAAAFQAXgRAdgDQAjgEASAYQAcAlAlCHQAGAZAAAuQgOAGgTAAQgWAAgdgHgAiQCAQABgIAJgFQAKgFABgGQgIgBgHACQgIACgIAGQgQAMgEAAQAGgNAcgKIANgFQgIgDgQAHQgUAJgHABQALgPAlgGQAAgCgOgHQgXARgRACQALggA3AGQAeADA1ANQgoAXgfgGQgHABgNANQgIAIgGAAIgEgBgABJB1QAJgKAZgNQAGAGAEAcQgZgLgTAAgAgWBZQgJgDgHABQASgDAGgDQgBAIgGAAIgBAAgAhrh6QgegNgNgdIgCgHQARgDAWgMQAFAAAHAJQAFAFAEACIAFABQAGgBAGgCIALgFQALgHgGgGQAZgGAcgkQAbgiAkgBQAFAIAEAgQgaADgEAHQADAKAAAIQABAbgSAVQgVAZgmAJQgOADgNAAQgWAAgVgIgAhViHQAFAKAxgOQgFgJgLAAQgOAAgYANgAAij5QgHAKAHAFQAAgJARAHQgDgUADgDQgKAAgHAKgAhji5QAEgMAMAAQAAgLgJACQAFgLAGAMQAIAPAKgGQABALgOAEIgJAAQgIAAgGgEg");
	this.shape_35.setTransform(0.8,3.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF9900").s().p("AiFAxQAFgZAggUIgzADQgLAJgGAOQgIACgBAEQABgcAkgHQAWgDAogEIgBgNIAAABQAAgIABgGQADgOAMgJQASgEAAgDIgBgCIAPgEQA1gLAWAlQgIAKgKAJIgHAFIgMAIIgSAKQgeANgXgFQgKgBgJgFQgFAPgRAMIgFADQgHAQgBAPIgDAAQgPACgBAGQgCgLACgLgAikBCQgDgNAJgQIgBgBQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAOgWAUAEQgRAagEAQIgBACIgCAAIAAAAQgNACgDAGgAA/AJQAKgFABgFQANAJgiAOQgBgHALgGgAA5gOIgBAAIAFgFIAFgFIAEgFIAKgJQgBgFAHgBIABABIgGAHIgBAAIgDAFIAAABIAAABQAXACABgCQgIACgDgGIgBgEQAqgSAOAAQAGAEAGALIADAGIABAOQAAAEgFAIIgGAGIgDAAIgCgFIgEgHQgIgKgVADQgLABgKAIIgFAFIABgFQgBgGgBgFIgJAKIgKALQgLALgRABIATgYgABcgDIAEgEIAEgDIAEgCIANgDIACAAIAKADIAHAFIgBAAIAFAFQgFACgFAEIgCABQgMgTgYALgABSAAIACAAIgBgBIADAAIABABIgCABIgBAAIgBABgAATgBIAKgLIAJgIIAFgEIAMgJIAEAHIABACIAAABIgIAGIgEAEIAAAAQgRANgJAAIgDgBgAh4gUQAegCACAIQgFgCgOAEIgFABQgHAAgBgJgACmgpIAAgCQgBgGgCgDQgBgDgDAAQgIgKgYAEIgBAAIgBAAIAAAAIgQAEQgIADgGADIANgIQAdgPAYAPIAAACIADAFIAKAKQABAFgFAEIgDACIgBgKg");
	this.shape_36.setTransform(-5.4,-24);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("ACkE9QAAgJgEgTQgNAJgdAFIgHABIgHAAIgmACIAIABIAIABIACAAIAAABIgKgCIgggBIgDgGIATgDIAUgCQASgCAQgEQAZgGAUgLIgNg6IhDgSQgngLgbABQgTABgtAQIgYAHIgBABQgZAHgRgBQgIgEgJgcQgHgXgUABQgFgdgGgFQAbgjgPgNIAAgFIgCgEIAEACQgUhmAlgoQAbgFBFAUIADAAIgEAAIgCgSQgxgIghgmIgKgOQgLgSgBgTIgGABQgHAFgEAAIgCgCIABAGQgNgCAAgNIgCAAIgMAIIgBgCIgCABIADAEIgIgCQgLgGAHgXIAAAAIABgEIgBAAIgDgDIAAAGQgMggAngYQAUgNASgCIAEAAIAYADIABABIADgLIADgPIAFgIIADgEIAIgBIAQgOQAZgIAzAPIAFAAIAJAHIAAABQAHADAAAMQgBAMAIACQACgIANgJQAMgKACgHQAJgGAUgCQAWgDAQACQgBADAIAGQAGAEABADQADAFAEAJIABABQACARgOACIgCgBIABADQAAAIgCACIAAABIgCACIAAAAQgRAbgDAAIgEgEIACgJIgLAHIACAGQAMAogjAIIAAACQAHAsg2AjQABAIAPAWQBWgsAwCBIAEgLIABgCIAFAPQgEAeAQAtQAZBGABAbQgHARgVADIglAAQAFAMAIAaQAIAXAJAKQgGALACATIgCAAIgOgBgAiGCUQgOASAcApQBRgKCmhLQgFgTACgPQh4AuhCAOQgOgMgSAMQgVASgJAAQgHgCACgIQACgIgGAAIgBAAgAB5DGQA3AOAdgNQAAgugGgYQgliIgcglQgSgYgkAEQgcADgXARIAAgFIAFABIgFgKIAAgFIgCABQgJgVgHgEIgzAYIABAJIAAACIABAAQAAALgHABQgLgBgcgPQgYgLgQADQghAHABA9IACBlQASgFAogFQgTgOALgnQANgtgFgOQAKAGAAAfQA/AXB6gXQACgHgGgLQgFgJADgDQA2BjgGBbQgPgbgrAEQgpAEgRAWIAFAAQAcAAA/APgAhnCHQgBAGgKAGQgJAFgBAHQAHAEALgLQANgNAHAAQAfAFAogWQg1gOgegDQg3gGgLAhQARgDAXgRQAOAIAAACQglAFgLAPQAHgBAUgJQAQgHAIAEIgNAEQgcALgGAMQAEABAQgNQAIgFAIgDQAFgBAFAAIAFAAgACJCfQgEgbgGgHQgZAOgJAJQATAAAZALIAAAAgAgCB4QAFABACgJQgFADgSADIADAAQAGAAAHACgAhkBUQA/AuCag4QgOgvgEgEQgsAaiRgQQgRAkAHAPgAAjg9IABAAIgCgDIABADgAiEiMIACAHQANAeAeAMQAhANAlgIQAmgIAVgaQASgVgBgaQAAgJgDgJQAEgIAagDQgFgfgEgJQgkACgcAhQgbAkgZAGQAGAGgLAHIgLAGQgGACgGAAIgFgBQgEgBgFgFQgHgJgFgBQgWANgRACgAg/imQgMAAgEANQAJAGANgDQAPgDgBgMQgKAGgIgPQgGgLgFAKIADAAQAGAAAAAJgAiLixQAAANAEACIAAACQARAJAVgKQgCgCAAgEQgBgNAKgBQAKgBACAHQAEgGAAgHQABgggkACQgkABAEAmIABgBIABADgAivi+QgCALACAMQACgGAOgCIADAAQABgQAHgPIAFgDQARgNAFgPQAJAFAKACQAXAFAegOIATgKIAMgIIAHgGQAKgIAHgLQgUgkg3ALIgPADIABADQABACgTAEQgMAJgDAOQgBAHAAAHIAAAAIABANQgoADgWAFQgkAGgBAdQABgFAIgBQAGgPALgJIAzgDQggAUgFAZgAjGjOQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABIABABQgJARADAMIABABIABgBQADgFANgCIAAAAIACAAIABgDQAEgQARgaIgFAAQgRAAgMATgAg/i+QAAAMAGABIAAAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAVACANgFQgBgBAAgEQgBgMAJgBQAJgBACAFQAFgIgDgMQgDgQgOgIQgQgHgSAMIgNAhIAEAAIABAGgAAVjlQgKAFAAAHQAigOgNgJQAAAGgLAFgAAmkWIgKAJIgEAFIgFAFIgFAGIABAAIgSAYQAQgBALgMIAKgLIAJgJQACAFAAAFIgBAFIAFgEQAKgIALgCQAVgDAIALIAEAGIACAFIADABIAGgHQAGgHgBgFIgBgOIgDgGQgGgLgGgEQgOABgqARIABAEQADAGAIgBQgBABgXgCIAAAAIAAgBIADgGIABABIAGgIIgBgBQgHABABAFgABWjpIACgCQAFgFAFgBIgFgGIABAAIgHgFIgKgDIgCAAIgNADIgEACIgEAEIgEADQAJgDAHAAQANAAAHANgAApjwIABAAIgCABIABACIABgBIABABIACgBIgBgDgAABkIIgEAEIgJAJIgKALQAJADATgQIAAAAIAEgDIAIgHIAAAAIgBgDIgEgGIgMAIgAiikDQACAMALgEQAOgEAFACQgBgHgSAAIgNABgAB1knQADABABADQACADABAGIAAACIABAJIADgCQAFgEgBgFIgKgKIgDgFIAAgBQgXgQgeAQIgNAIQAGgEAIgCIAQgFIAAAAIABAAIABAAIAMgBQAOAAAGAHgABUE1IAOADIgEAAIgFABQgEAAgBgEgAAXEKQAAABAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgCQAAgEAIAAIASAGQgFAGgEAAQgMAAgFgFgAhPEOIgDgHQADgGAAgOQABgYACgFIAVAAQgJAlgFARIAGACgAhChoQAtgXAJATQgcAIgOAAQgJAAgDgEgAh3ioIgBgBIACABgAgri0IAAgBIABABgAA2jaQAHgJAJgBQgCADADAUQgRgHAAAKQgHgGAHgKg");
	this.shape_37.setTransform(-1.2,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("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");
	this.shape_38.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_1},{t:this.shape_5}]},23).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_1},{t:this.shape_5},{t:this.shape_2}]},6).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},9).to({state:[{t:this.shape_16},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},11).to({state:[{t:this.shape_19},{t:this.shape_14},{t:this.shape_18},{t:this.shape_17},{t:this.shape_11}]},5).to({state:[{t:this.shape_23},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_24},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},6).to({state:[{t:this.shape_25},{t:this.shape_14},{t:this.shape_18},{t:this.shape_17},{t:this.shape_11}]},2).to({state:[{t:this.shape_24},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_25},{t:this.shape_14},{t:this.shape_18},{t:this.shape_17},{t:this.shape_11}]},1).to({state:[{t:this.shape_23},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_25},{t:this.shape_14},{t:this.shape_18},{t:this.shape_17},{t:this.shape_11}]},4).to({state:[{t:this.shape_24},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_24},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},5).to({state:[{t:this.shape_25},{t:this.shape_14},{t:this.shape_18},{t:this.shape_17},{t:this.shape_11}]},2).to({state:[{t:this.shape_24},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_25},{t:this.shape_14},{t:this.shape_18},{t:this.shape_17},{t:this.shape_11}]},1).to({state:[{t:this.shape_23},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_25},{t:this.shape_14},{t:this.shape_18},{t:this.shape_17},{t:this.shape_11}]},4).to({state:[{t:this.shape_24},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_25},{t:this.shape_14},{t:this.shape_18},{t:this.shape_17},{t:this.shape_11}]},3).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_1},{t:this.shape_5},{t:this.shape_26}]},18).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_1},{t:this.shape_5},{t:this.shape_2}]},5).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_1},{t:this.shape_5},{t:this.shape_31}]},7).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_5}]},8).to({state:[{t:this.shape_38},{t:this.shape_32},{t:this.shape_1},{t:this.shape_31},{t:this.shape_5}]},13).wait(7));

	// Layer 2
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00CC33").s().p("AABgCIABAAIgDAFg");
	this.shape_39.setTransform(-4.6,97.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00CC00").s().p("ACJA/IABAAIAAAAgAiIg/IABABIABAAIgDAHg");
	this.shape_40.setTransform(9.1,103.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#99FF33","#E3E260"],[0,1],-134.9,-43.5,-134.9,71.4).s().p("ADfBuIAAAFIgBADIgCAEQgEAEgBADIgBATQgDgbAMgLgAERCQIAAgRIAAAAIAAgBIAAgTIAAgNIgBgHIAAgFQgBgGADgGIABgBQAMAggHAbQgDAJgEAIIAAgBgAGMB8QAEAEgBAIIgBAAIgDAAIgCAAIgCABIAFgNgAGdB8IAGAHIgBABIgDAAIgCAAIgDAAIgCAAIgCAAIgCABQAEgGAFgDgAGxCBIgDAAIgEAAQACgOAMACIACADIgBACIgBAEIgDACIgCABIgCAAgAHGByIAJABIgDABIgCAAIgDABIgCAAIABgDgAGgBXQAGAIgBAIQgBAKgLABQAGgOABgNgAJgBYIAJgMQAJAEAOgEIABAMgAIjBXQAQgEAeAAIABAFgAk4A5IAAABIABABIgBgCgAqAiSQAEACAHAVQgMgFABgSg");
	this.shape_41.setTransform(13.5,91.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#996633").s().p("AAAABIAAgBIAAABg");
	this.shape_42.setTransform(66,52.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#02C127").s().p("AA6CkIAGgBIgGADIAAgCgAEBBRIAFAEIgEAHIgBgLgAkFikIABAAIgBAAg");
	this.shape_43.setTransform(-20.7,62.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#05A514","#006633"],[0,1],-15.9,-14.3,-21.5,6.8).s().p("ADLDjQgBgRANgcQAOgcgCgPQgBgRgZgaQgegcgFgOQgFgLADgVQAEgYgCgIQgOgbgGgUQANgKAjgtQAcglAegKQgDANgOAjQgLAiADAbQADAbASAeQgfBEAQA/IABABQAGgLgBgQIgCgcQAPg1AAgVQgQgmgCgWQgDgfAXg9QAVARAsA6QAGAFAcATQABAIgYAcQgaAcABAMQAdAqgWA5QgFAMgTAWQgDAJgDAmQgCAdgPAMQgCAuAMATQhEgvgEgtgAGJE3IgNgPQgjgQgQgTQARgWgRgYQgXgggBgKIAVg+QAPgzgWgXQADgTARgWQARgZAEgOQgCgFgkgaQAOgcAwgXQADATgNBOQgKA3AUAYQgJgfAFgpQALhBADgkQAhAXA0A7QABAmgWA1QAEAJAKASQAAAHgCgBQgFgEgDABQACATgTAaQgVAdgDASQgCATABAlQgCAegVAMQAGAaABAPQgBABAAABQAAABAAAAQgBABAAAAQgBAAAAAAQgDAAgFgFgAF9B/QADA6gHAaQASgYgHgzQgHg1AJgPIgEgMQgIAVADAygAANDPQASg0gEgXQgFgXgogbQgqgbgEgSQgDgMAIgfQAIgggDgQQgCgLgMgLQgMgNgEgJQgDg7AQgMQAFAAACAKQAUguBHgIQgUAfgBAvQgDAvARAmIgGhVQAAg4AXgTQAWAKgMAOQATgDAVANQANAHAWARQgdBnAdAuQgCAMgVAfQgTAegCAWQgCANAFAeQgBATgGAgQABAGAMAfQAHAWgKANQgTgwg0gDgAAFArQAFAbAbA+QgVhDgDgVQgHguARgtQgbAnAJAzgABxDNQgKgggTgHQAJgSgCgVQgFgcACgLQADgRAUgcQAUgbABgNQABgIgIgOQgJgRgBgHIAFgHQAUANAQAbQACASgJAgQAEAUAXAWQAbAZAHASQgIAXghApQgdAkgIAdQgHgIgMgpgAhgCoQgUgegJgJQALgeACgQQAFgbgMgTQAdg2ATgvQANASgJAdQgLAlABAHIgHABIgDgIQAEAOgBAnQgCAmAFAOIABg2QABgagFgQIAHgCQACAUAVARQAcAXAGAIQgEAVgSAhQgSAhgEAWQgQgKgQgagAiiDCQgDgWgpggQgqghgDgPQgCgLAIgTQAHgTABgKQgBgQgKgMQgMgOgIgLIgXhuQgOhEAYguIBLgfQABAEAGACQgLANgDA/QgFBQAZAWQAEAcgJBJQgIBCAJAaQAKh2ABhIQgkgnAZiOIADAAIAEAAQAIAKASAOQAVAPABARQAQgIAOAEQANAJAMAgIADACQgIAQgBAbQgCAsASAQQgDARgYAjQgWAhgCATQgCANALAWQAAAKgVA4QgQApAYAZQgQgJgOADgAk2CMIgQgfQgUgWAAgDQARgPADgIQgBgSABgKQADgMAOgPQAPgPACgIQAFARgJAfQgJAiADATIAYhlQAeARgHAqQgHA3AHAPQgbAqgDAMQgOgEgLgWgAmuAPQgNhWgPgtQABgCAAgFIgDglIAAgJIAAgGQgCgKgHgSQgJgZAAgOQAAgFAGgHQAJgLAOAAIAFgCIAKgGQALgIABgDIABAAIAXgMIAGgFIACgBIACgBIAAgBIAHgEQAEAAAFgFIADgFIAEACQgOAYAGAHQAPgTgDgKIAEAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAIAJAMQA1BBgBALQgcBKAcA4QgCgCgEABQAYApgdAoQglAvAEAiQgUALgNAdIgVA0QgagtgOhggAluhlQADARgNBCQgKAuAXAJQgKgSAJg+QAJg9gPgbQABANADARgAl7jcQAGANARAYQgPAPABAjQAOgcAHgZQgZgYgJgzQgIATAMAWg");
	this.shape_44.setTransform(-6.4,75.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E1AB2F").s().p("AG2DJIAAgBIAEABgAFNASQgYgcgKgJQALgEAWAMQAWALAKgCQAQAagDAeQgUgKgYgagAAOAMIANg0QgLgRgngUQAngMBrAkQgRAsgmADQgIATgzApQgBgTAGgXgACjgrQAigHBHAYQgRAQglAeQgpgcgKgjgAFUgNQADgGgCgRIgBgDQgBgOAEgHQAeAAgCAeQgBAUgQAAQgGAAgIgDgAFYgtQgCAEABACQAAAAAAABQABAAAAABQABAAAAAAQABABABAAQAJgEgDgJIgDgBQgEAAgCAFgAjAhDQAEgbghgTQgtgagFgGQA1gBB8AfQhHAlgLgDQgIAGgFAKgAm5jIQAlAEBPAWIhKAnQgdgqgNgXg");
	this.shape_45.setTransform(4.1,64.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#07CD1B","#01984B"],[0,1],66.2,-33.6,66.2,18.6).s().p("AgFAAIAAAAIALABg");
	this.shape_46.setTransform(58.3,40);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009900").s().p("AAAgDIAGAGIgHABQgHAAAIgHg");
	this.shape_47.setTransform(94.7,67.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EAC46A").s().p("AipD8IAAgwQAegNBSgEQAIgBgBgQQAGARAZgHIAngNQAIABgBAMIAAAVIgjAKIgMAAIgDAAIgCACIgBACIgEABIgCACIgBABIgcAJQgFACgCgFIgDgHIgHALQgFAGgMgDIgDgiQgJADgEAOIgHAXQgXAOgYAAIgEAAgAgoCFQAbgGA8gEQAMgigWgbQASgEACA6QATACA4gMQAOgBAeACQAaABAJgMQgdgDh2ANQABgdgOgTQBMgRBhAOQACBBgFAQQiwAHhSAfQgFgYACgRgAi3B7QAfgTBVgFQAEgKgLgTQgLgUAEgJQAdgDACA6QAfgrA1AMQABARAGAfQi1AZgoAPIgDgegAg9ApQANgHAqgNQAigMAQgLQAAgMgJgLQgKgNgCgIQAFAAAaANIADAhQApgIAzgEQARAjgHASQh8gFhOAgQgEgQgOgLgAixA6IABgDQgGgFgRADQgRADgIgFQAegDAdgKIAAgYQAVgQAsgLIBJgUIABgDIADAAQAIAGAVgNQAVAOAHAYQggARhEARQhQATgbAKgAgUhNQAGgDBBgKQAGgQgJgTQgLgUgDgKIARAAQALANACAtQA2gUAtgBQgJACAAARQACAYgDAIQiPAPgUAGQgDgYgHgHgAi3iiQAZgCAwgHQAmABgCAqQhLAJgYAPQgFgogFgSgAhKizQA+gOAOgHQAlgTgVggIAFABIADAAIAEAGQAKAQgGATQAWADA7gRQAHAMAHAdQgZAIhEALQg8ALgeALQgMghgIgFg");
	this.shape_48.setTransform(65.6,79.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E4B445").s().p("AAfDaIAAghQA1gPBuAAQAAAIgKAYQgXgCguAIQgmAGgTgGQgIAMgLAAIgIgCgAjHC5QAYgMBRgQQALAAAAASQABAQgFALQgqgDhDAQQgFgRACgNgAAODKIAAgPQAOAOgKAKQgFAAABgJgAjIBPIAEAAQALACBDgPQAXAfgGAQQgTgBhTASQgBgTAEgggACgA+QgEgmgGgQQAFgBAUADQAPADAHgFQAIALgEArQgZgDgQADgAjAgMQApgeBRgKQALAYgBAKQhbASgjAVQgIgLACgWgAAkgOQgIgKADgFQAYgDA6gCQAsgIgSgsQALAAAAAQIAAAcQARACAXgGQAJATACAaQiWAHgKACQAEgLgJgLgAgygPQACgXgPgOQAAgCAHgCQAKABACAPQADAPgGAKgAjHhJQAKgNA0gHQAvgEADgbQAHAAgEARQBsgugDBJQimAegzAcQgFgfACgUgACgg0QgEgdgGgQIAiAAQAGgFAAgMQAKAEgFASQgEATANAEQgkARgIAAIAAAAgAAiiJIBPgRQAAgYgKgRQAAgCAKgCQAOARgLAVQAEALAagFQAggGAGADQADAMgKArQhWgFgoAWQgHghgKgSgAhriXQADgFAHAHQAHAIAAAHQgIgOgJgDgAB0jNQAogPAPABQAbADgKAtIg+AKQACgOgMgeg");
	this.shape_49.setTransform(68,77);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#8972EB").s().p("ABJBHQATAGgCAnQgPgJgCgkgAg1BGQADgNAJgJQAKAEgHAPQgIASABAHQgMgFAEgRgABJA9QACgFAJgBQAJgCAEAFQgBAFgKAAIgNgCgAkXAfQgIgMABgQQABgFAKgDQAKgCACgEIAMABQACAAAAAFIAAAAIgDgBQgLAHgJANIAKAiQgMgLgFgGgAKcAfQAHgHADgYQAKADgEAQQgDAMgJAAIgEAAgAKpgQQAJABAIgEIgCArQgJgcgGgMgAJfgNQAOgNARgGQAWgIgCAYIgcAHIgKABQgKAAgDgFgAn0gPIAAgBQgJgPgDgKQgGgQAPgHQAJAMABAnIAAAAIAAABQgFAAgCgDgAKcgkIAHAAQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIgHAKQgBAAgCgNgAJVgoQAFABAQgEQAMgCAIAFIgZAMIgHABQgJAAAAgNgAqsg3IgBgFQAAgEAEgCIACABIADADIADADIgBADIgFAEIgFgDgAqVg5IgPgOIAAAAQgVgTgBgJIAHgKIAJAAIACAAQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAIADgBQAQgFAKAFQgJABgGAIQgFAHAAAEIABADIgCAJQAAAFAFAGIAEAMg");
	this.shape_50.setTransform(23.6,49.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("ACWG+IgKgGIgGAAIgIgHQgOgTgJgJQAAAPgEAEIgCAAQgBgbgWgQIgPgIIgbgQQANgughggQgHADABAKQAAAKAGAEIgBABIgBADIgBACIAAACIgCADQgUAPACAgIAAABQABAZAPAjQgigNgfggQgSgSgIgSQgIgOgBgOIgBgGQAAgNANgXQANgWgCgRIgpAzQgXAegIAfQAAAPAMACIgBAAIgBABIgBACQgDAAgGgDIAAACIACAIIgGADQgBgGgDgFQgEgHgGgIQgRgUgCgIIgBgEIAAAAIgCgcQgDgTgOgGQADARAKAlIABAEQADAcgVAMQgVg1gogMIgBAAIgBAAIAAAAIgPgDQAKgpABgTQAEghgZgMQgiA1gRA0QgbAAgQgbQgVgkgHgFQgLASALAZQADAJAIAOIAAABIABADIACABIABABIABACIAAAAIABACIAAABIACAEIABABIAAgBIgCgBQgFgCgKAEQgdgNghgmQgngrgSgMQgLAJgMAWQgNAagIAIQgRgOgRgdQgRghgKgQQgTAbgMA+QgRgIgKggQgMgkgMgJQAEgfgYgsQAIgigKgwQgIgngDgUQgCgIgBgTIAAgKIgEAGIAAgGIAFgIQgFgSgOg6QAAgQAVgJIAbgQIAKgGQAFgEASgHIABgBIgBAAIgnACIgPAAIgGAAIAJgGQADABAFgBIAEAAIADAAIAFAAIAFAAIADAAIAEAAIADAAIAFAAIACAAIAFAAIAFgBIACgCIAGABIAFgEIACgFIgCgHIAAgDIgEgDIgPgJQgNgFgGgFIgQgIIAAAAIgBAAIgSgRQgIgIgIAAQgEgBAAgGQAAgGADgSIAEgPIgBgCQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAIACgCQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAFgCAOgCIATgHIAFgEQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQASgJAVAAIACABQA+gSBzgRQgEgYAHgKQAggLAxAQIAIACIABAAIADAAQAUACA6ATIBWAdIApALIKNByIAEACIBfARQA+AMAkgGQAQAQAVABQANABAIgHIADAAIABgCIAAgBIABgBIABgBIACAAIACAAIADAAIABAAQgCAJgJAGQAOgDARAGQAGAHAEAIIADAAIAFABIACAPIgFgBQACALAAANQgJAGgUACQgaAEgGACQgDBqAQAnQgKAKARgDQgPBJAKBWIATCZQgIgCgFgHQgEgHgBgNIgBgSQACg4gEgJQgDgFgBgFQgJgBAAgGQgFheALhIQgLgDgrAQQAUChgUBLIgHATQABAEAGADQABAHgPADQgBAJAPABQADgFABgOIAAgJQAAgKAEgFQACgGAHgCIAAAfQAEgCAHgJQAFgIAHgBIAAAbQAIgDACgSQAFACABADQACAEgBAGQgCANAGADQgDADgJABQgLAAACgHQgIARgegDQgdgDgEgSQgIACAAADIAFAMQgdgTgnAMIABAMIgHAAIgBgMQgOADgKgDIgIALIgOAAIgBgEQgegBgQAFIgjgBIAkgKIABgVQAAgMgHgBIgpANQgYAHgHgRQACARgJAAQhRAEgfANIAAAwQAaABAZgPIAIgXQAEgOAJgDIADAiQALADAFgGIAIgLIADAHQACAFAFgCIAcgJIgBABIgFABIgEACIgFAKIgDAAIgCABIgBABIgCABIgBACIgBABIgKgBIAAAEIgDABIgDAAIgCAAIgCAAIgBABIgCgCQgMgDgCAOIgBAAIgDAAIgCABIgBABIAAABIgHgHQgFACgDAHIAAAAIgEADIgBAAQABgJgFgDIgEAMIAAAAIgBACIAAACIgCABIAAACIgEABIABgKQgRADgNgDQgGAJAQAZQgHgCgvAQQgSAGgMgFIgCgBIgEgGIAAgFQgCgNAAgNQAEgJACgJQAHgagLghIACgIIAGAQQAGgYgDgnQgDgogKgXQgbAQgHA3IgGAkQgHAjgHALQAEACAEAEIgCACIgCADIgBgEQgLAKACAbIgBAJIADACIAAADQAIAlATAEIgCAAIgCAAgADPEDQAIA6gDAXQgBANgMAbQgIAYAOAPQAOgnALgQQACAJgGAPQgEANAEAEQAEgKADAHIAGANQATgHgCgNQAAgCgKgMQAEgrgGhAQgGhFABgcQgNALgfgOQABAMALBJgAhcgaQgiAsgOAKQAGAUAPAbQABAIgDAZQgDAVAFALQAFANAdAdQAZAaACARQABAPgOAcQgNAbABASQAFAtBDAvQgMgTACguQAPgNACgcQADgmACgJQATgWAFgMQAWg5gdgqQAAgMAZgdQAYgcgBgJQgcgSgGgGQgrg5gVgQQgWA7ACAfQACAWAQAoQAAAUgPA2IACAcQABAPgGAMIgBgBQgQg/AfhFQgSgegCgcQgDgaAKghQAOgjADgNQgeAKgcAlgAAjALQAkAZACAFQgEAOgRAaQgQAXgEATQAXAXgQAzIgVA+QABAKAXAgQARAXgRAXQAQATAkAPIAMAQQAJAKACgJQgBgPgGgaQAVgMACgeQgBglACgTQADgSAVgdQATgagCgTQADgBAFAEQACABAAgHQgKgSgEgKQAWg1gBgmQg0g7ghgWQgDAjgLBAQgFArAJAfQgTgYAJg4QANhNgDgTQgvAXgPAbgAFBFlQALgBABgJQABgJgGgIQgBAOgGANgAlzgMQAEAJANAMQALALACALQAEAPgJAhQgIAgADAMQAEARAqAcQApAbAFAXQAEAXgSA0QA0ADAUAwQAJgOgHgVQgMgfAAgGQAFggABgTQgEgeABgOQACgVATgeQAVgfACgNQgdguAdhnQgWgQgNgIQgVgMgTACQAMgNgWgKQgXATAAA4IAGBTQgQgkACgvQABgvAUggQhHAIgVAvQgCgKgFgBQgPANACA7gAirApQABAHAJARQAIAPgBAJQgBANgTAaQgVAdgDARQgBAKAEAdQADAVgJASQASAHAKAgQAMApAHAIQAIgdAdglQAhgoAJgXQgIgSgagaQgYgWgEgTQAJgggCgTQgQgbgUgNIgGgEIABAKgAHoEbIAAAiQARAFAJgQQAUAGAmgGQAugIAXACQAKgYAAgHQhvAAg0AOgAEAEbQgCANAGARQBCgPArACQAEgLAAgPQgBgTgKAAQhSAQgYAMgAHXEsQgBAJAEABQAKgLgNgNIAAAOgAHXC1QAWAcgMAhQg+AEgbAGQgCARAGAYQBTgfCvgHQAFgQgChBQhhgOhMARQAOATAAAdQB1gNAdADQgJAMgZgBQgfgCgOABQg3ANgTgDQgCg2gQAAIgCAAgAmWB7QAMATgEAbQgDAPgLAfQAJAJAUAeQAQAZAQAKQAEgWASggQASgiAEgUQgGgJgcgWQgVgRgCgUQgBgHALgmQAJgdgNgSQgTAvgdA3gAmjEeQgYgZAQgpQAVg5AAgKQgLgWACgMQACgUAXgiQAXgiADgRQgSgPACgsQABgcAIgQQAFgKAIgFQALADBHglQh8gfg1ABQAFAGAtAZQAhATgEAcQgMghgMgIQgPgEgQAHQgBgQgVgPQgSgPgIgKIgDABIgEAAQgZCOAkAnQAABHgLB2QgJgZAIhCQAJhKgEgbQgZgWAFhQQADhAALgNQgFgBgCgEIhLAfQgYAtAOBFIAXBtQAIALANAPQAJAMABAQQAAAKgIATQgIATACAKQAEAPApAiQAqAgACAVIAGAAQALAAANAHgAFgCgQgFAJAMAUQAKATgEAKQhVAFgeATIADAeQAngPC2gZQgGgfgBgRQg2gMgfArQgCg3gaAAIgCAAgApUBcQgOAOgDANQgBAJABATQgDAIgQAPQgBACAUAWIAQAgQALAVAOAFQADgMAbgqQgHgQAHg2QAHgrgegRIgYBmQgDgUAJgiQAJgfgFgRQgCAHgPARgAqTjkQgFAGgEAAIgHAEIAAAAIgCACIgCABIgGAFIgXALIgBABQgBADgLAIIgKAGIgFACQgOAAgIAKQgHAIAAAFQABANAIAZQAHASACAKIAAAGIAAAKIAEAlQgBAEgBACQAPAtANBXQAOBgAaAtIAVg0QANgeAUgKQgEgiAlgwQAegogZgoQAEgBACACQgcg4AchKQABgLg1hBIgJgMQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgFgBQADALgPATQgGgHAOgYIgEgCIgDAEgAEACuIAAADIAAAAQgEAgABATQBSgRAUAAQAGgQgXgfQhEAPgKgCQAagKBQgTQBFgRAggSQgHgYgUgOQgWANgJgGQAGgJgDgPQgCgQgLgBQgHACAAACQAQAOgCAXIgBADIhJAUQgsALgVARIAAAYQgdAKgdADQAIAFAQgDIAMgBQAHAAAEADgAHUBdQAJALAAAMQgPAMgkAMQgqANgMAHQAOALADAQQBQggB7AFQAHgSgQgkQgzAEgpAJIgDgiQgbgNgFAAQACAIAKANgADUggQgQADgEAHQAUAhgOA9QgNA/AKAWQAnAOAWgVQgDiGgRg3QgFADgTAEgAKRCgQAFgrgIgLQgHAFgQgCQgTgEgFABQAGAQAEAmQAIgBAKAAQAKAAAMABgAEHBVQgBAYAHAKQAjgVBcgTQAAgKgKgYQhRALgqAdgArOB3QgHgVgDgCQgBASALAFgAI6A/Qg6ACgYADQgDAFAHAKQAJALgDAMQAKgCCVgIQgCgagIgTQgXAGgRgCIAAgcQAAgPgLgBQARAsgrAIgAFxgZQgEAZguAFQg1AGgKAOQgCATAGAfQAygbCngfQAEhIhtAuQAEgQgGAAIgBAAgAHhgGQAJASgGAQQhCAKgGADQAIAHACAYQAVgGCPgPQADgIgBgYQgBgRAJgCQgtABg1AUQgCgsgMgNIgRAAQAEAKAKAUgAJpAtQAHAAAlgRQgNgEAEgTQAEgRgJgEQgBAMgFAEIgiAAQAGAQAEAdgAB1grQAKAKAYAdQAYAZAUAKQADgegQgaQgKACgWgMQgRgIgKAAIgGAAgAjNhlQAoAVALARIgNA0QgGAXABASQAzgnAIgUQAmgDARgtQhQgbgqAAQgPAAgKADgAKLiAQAJAyAEBfQAmANAJggQgMgSgBgrQABgzgBgYIgBAAQgJAAglAKgAD6grQAEASAGAnQAYgOBKgJQACgqglgBQgxAHgYACgAIvhhQALASgBAXIhOARQAJASAIAgQAngUBXAEQAKgrgDgMQgHgDgfAGQgbAFgDgLQAKgVgOgRQgKACAAACgAgShDQAKAkAoAdQAlgfARgRQg3gSggAAQgJAAgIABgAGzhRQgPAHg+AOQAIAFANAhQAdgLA9gLQBEgLAZgIQgHgdgHgMQg6ARgXgDQAGgTgJgQIgFgGIgCAAIgFgBQAUAgglATgACeg+IABADQACAQgDAHQAdALACgdQACgegeAAQgEAIABAOgAFcg1QAJADAIAOQABgHgHgIQgEgEgDAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABgAF5h/IjKAoQAQAGAGAPQAHAQgJAOQAigJBcgRQBSgOAogOQAJgVgJgUIgIgDIgWgDQgSAGgEAAIgBgBIAAAAIgNAFgACUgyQgKgdAQgWIgvAAIAKAwIAGAAQALAAAOADgABng8QACgmgTgGQACAkAPAIgAI9hrQAMAegCAOIA9gKQAKgtgbgCIgCgBQgQAAgkAOgAgVhQQAnABBEAQIgNgsQgxgJgUgBIgBAAQggAAAIAlgAgthNQgFgiAFgNQhSgLhzglQgNARALASIAWAbQBggMBRAtIAAAAgAgohqQgEARAMAFQgBgGAIgTQAHgOgKgFQgJAKgDAMgAB+h2QA0AUAHABQAwADBWgZQAmgLAegFQACgJAZAAQAPAAAIABIAAAAIAFACQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIAGABIgHgFIgGgCQAagJA7gIQA/gJAZgIQgLgXgDgOQADgDAVAAQgYgKg9gIQgogGgZgHIgDABIgNgCIhYgSIgMgDIAAAAInjhTIgLgBQg5gHgrgPQhvgfglgNIgEgBQgSABgdAJQg1AQgIABIimAdQgCAEgUACQgMACgHAEIgRAIIgZAFQAKAKAaARIAbANIAJAHIAIACQArgLANAXQgDgCgGgBIgBABIAKAEIAAAAQBVAeAzgBQA0AlCVAbQADAAAKgEIACgBIAAgBQAAgDAJAAQAVAAABAMIgBAEQCZA1BKgMQAHANAYAFIAuAGQAKgKAPAAQAMAAAQAGgAHIiNQAZAGgEAiQCDgRAhgXQAIALAWgLQgBgOAIgbQi8AigiAHgABhh4QgJABgCAFQAXAEABgIQgDgDgFAAIgFABgAkGi1QgKADgBAGQgBAQAIALQAFAHAMAKIgKghQAJgNALgIIADABIAAAAQAAgFgCgBIgMAAQgCAEgKACgAKpiRQAMADAEgPQAEgPgKgDQgDAXgHAHgAnbjQQAGAMgDAIIgBACQBAAOCCAYIAAgfQi6gxgMgCQgEAHAGAPgALLjOQAHAsgEAKQAPgBAbgFQAFgxgnAAIgLABgALFiYIACgsQgIAFgJgBQAGAMAJAcgApFieIBKgnQhPgWglgEQANAXAdAqgAKLjQQgRAGgOANQAEAIATgEIAcgHQACgSgNAAQgEAAgFACgAnzjZQADAJAJAQIAAAAQACADAFAAIAAAAIAAAAQgBgngJgMQgPAHAGAQgAKsjHIAHgKQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIgHAAQACAMABABgAqAkVQgIACAAAGIABAGQAAABAAABQAAABAAAAQAAABAAAAQAAABgBAAIAAAIIACADQARAQAqAHQA0AIAhAQIAFgDQgKgDAAglQhYgWgrgOgAJyjNIAZgLQgIgFgMACQgQAEgFgBQAAARAQgGgAqgjtIABAGIAFADIAFgEIABgDIgDgDIgDgDIgCgCQgEACAAAEgAqtkUQABAKAVATIAAAAIAPANIACAAIgEgLQgFgHAAgEIACgJIgBgEQAAgDAFgHQAGgIAJgBQgKgGgQAGIgDABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAABgBAAIgCAAIgJAAIgHAJgAr1lHIgGAYIAVAOIAMAKIAZAOQAWAMAHAGIAAgBIgHgKQgIgMAAgGQAAgOAJAAIAAgBQgJgGgEgBQgOgEgOgLIgWgQQgHgFgDgEIgCALgAnkmdQAYAGAwgUQgegLgPgBIgEAAQgXAAAAAagAEsGnIAEACIADAAIAAAEQgEgBgDgFgAABGOIAGAJIAAABQgDgEgDgGgAAeFqIgBgBIABACgAhZFpIgGgIQgEgEAAgEIAAgEQAFABADAFQAEAFAEAJIgCABIgEgBgAJlFTIgBgBIgBAAIACgEIABAGIgBgBgAh3E9QACgDAEADQAEAEAGgEIAAAEIgKADIgGgHgAAREqIgDADIgCADQACgIADACgABeDVQgDgzAIgUIAEALQgJAQAHA1QAHAygSAYQAHgZgDg6gAqNEhIACAEIgDADIABgHgAlKElIAAAAIAAABIAAgBgACxEdIgCAAIgEgGIAGAGgAkiETIAAAAIAAABIAAgBgArIEOIgCgBIgCgBQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABgAksD5IADADIgEAEQgBgEACgDgAoaD6IAAgBIACABgAkZCAQgKgzAcgnQgRAsAHAwQADAUAVBEQgbg/gFgbgAlzCfQABgngEgOIADAIIAAABQAFAQgBAaIgBA2QgFgOACgmgAqXBDQANhCgDgRQgDgQgBgNQAQAagJA9QgKA/AKASQgWgJAJgvgArqBxIgCgCIAAgJIACAHIADAIIgDgEgAqDhhQgRgYgGgNQgLgWAHgTQAJAyAZAYQgHAagOAcQAAgjAOgPgAChg/QgBgCACgEQADgHAGADQADAJgJAEQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBg");
	this.shape_51.setTransform(22.3,67.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C18F1C").s().p("ADIGHQANgbABgNQADgXgJg6QgKhKgBgMQAeAPAOgLQgCAcAHBEQAGBBgEArQAKAMAAABQABAOgSAHIgGgOQgDgHgFAKQgDgDAEgNQAGgPgDgJQgKAPgOAnQgOgOAHgYgAKJFEQAPgEgCgHQgGgCAAgEIAGgTQAVhLgVihQAsgQALADQgMBIAFBeQAAAGAKAAQAAAGAEAFQAEAJgCA3IAAATQABAMAFAIIgIAFQgHgDACgMQACgGgCgEQgCgEgEgBQgDASgHACIAAgaQgHAAgGAJQgGAJgFABIAAgeQgGACgDAGQgDAFAAAJIAAAKQgBAOgEAFQgPgBACgJgADFCoQgLgWAOhAQANg8gUghQAFgHAQgDQATgEAEgDQASA3ADCFQgOANgTAAQgNAAgPgFgAKaAcQgFhfgJgyQApgLAHABQABAYgBAzQABArAMARQgHAYgWAAQgIAAgKgEgADHg3QgHgQgPgFIDKgoIANgFIABABQAEAAASgGIAVADIAJADQAJATgJAWQgpAOhSAOQhbAQgiAKQAJgPgHgPgAB2gqIgKgwIAwAAQgQAWAJAdQgRgFgOACgAgThFQgIgmAhABQAUABAxAJIANAsQhEgQgngBgAjchkIgWgaQgLgSANgRQByAlBSALQgEANAEAiQhQgthgALgAC6hWQgHgBgzgVQgkgOgRATIgugGQgZgFgGgNQhLALiYg0IAAgEQAAgMgVAAQgJAAAAADIAAAAIgCABQgKAFgDAAQiVgbg0glQgzABhVgeIgBAAIgJgEIABgBQAGAAADADQgNgXgsALIgHgCIgKgHIgbgNQgagRgJgLIAYgFIARgHQAIgEAMgCQATgCADgEIClgdQAJgBA1gRQAcgIASgBIAFABQAlAMBvAgQArAPA4AHIALABIHjBTIAAAAIANACIBXASIAOADIADgBQAYAHAoAGQA+AIAYAJQgVAAgDAEQADAOAKAXQgZAIg+AJQg7AHgbAKIAHACIAHAEIgHAAQABAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAIgGgCIAAgCIAAACQgHgBgPAAQgZAAgCAJQgeAEgmAMQhOAWguAAIgLAAgAHKiCQAigHC7giQgIAbACAOQgWALgJgLQggAXiDARQAEgigZgGgAnXivIABgCQACgIgFgNQgGgOAEgHQALACC6AxIAAAfQiBgYhAgOgALNjDQAygIgGA4QgbAFgOABQAEgKgHgsgApJjVQgqgHgRgQIgCgDIAAgIQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAgBIgBgGQAAgGAIgDIABgBQAsAOBXAWQAAAlALADIgFADQghgQg0gIgAq/j+IgagOIgLgKIgVgOIAGgZIACgKQADAEAGAFIAWAQQAOALAOADQAFABAIAHIABAAQgJABAAAOQAAAGAHAMIAIAKIgBAAQgHgFgVgMgAnimSQAAgdAbADQAPABAeALQgmAPgWAAIgMgBg");
	this.shape_52.setTransform(22.1,66.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]}).wait(153));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-32.1,154.6,143.9);


(lib.SamHeadTalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEALIgDgBQACgBAAgFIgBgFQgCgGgMAAIgCAAIgBAAIABAAQACgCAGAAIABAAIADAAQADABACACIAHADQAFADABAHIAAADIgDABg");
	this.shape.setTransform(-3.9,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE6AA").s().p("AAABlIAAgKIAAgGIAAgDIAAgIIgYgBIgDgBIgIgBIAAgBIAAAAIgGAAIgKgGQgDgDgBgCIABgDIgBAAIgBgKIAPAAQAYgOAFgKQAFgKgJADQgJADgZAEQgZAEgCgJQABgFgEgFQAJgIACgHIABAAIAAgQQgagIgIgIIAmgUQAVgNACgPQAPAAAagHQAAAFgFAEQgFAFACAHQAGAAAWgRQAVgPAQAIQgMAMgdATIARgEIAXgGIAHAAQARgBAHANQgQABgLAHQgNAJAGALQAAgJASgCQARgCACAKQADAIgEAIQgDAFgFAEQgLAKgEAFIgDADQAEADAGgCIAGgEQAIgFADAIQABAHgCAJQgDAJgGAMQABAKANARQAFAHAAAFQABAFgDADIACAAIAEgBIgFADIAAABIgDAAIgJAKIgfAAQgPACgPAAIgZgBgAgag/QgEADgBAHIAAAIIAAAAQAAAQAJAAIATgBQAKAAAFgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAIAAgFQgCgGgGgHIgCgCIAAgBQgEgDgEgCQgIgEgJAAQgEAAgCACg");
	this.shape_1.setTransform(-3.1,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag5B9IASgJIgIgDIgDgBIgNgEQgWAAgDgHIAAgBIgDgEIgCgDIAAgBIgDgFQgFgLADgEQADgFAUgHIgFAAQghADgDgQQgCgQADAAIAGgIIACgDIgBAAIABgBIABgEIAAgCIAAgCQgbgMgKgLQAEgNAZgFQAagHAGgJQgPgKgoAUQADgVAWgMIAogSQgHgEgYAFQgYAFgGgDQAMgLAdgHIAvgMQgHgGgQADQgTAEgFgBQAQgSAlAFQAVADAlAKQAFgBgDgEQgEgGACgDQAZACAdAaQAEgCAAgPQAUgDAYA2QAFgBAHgGQAHgFAEAFQgDAHgJANIgCADQgJAPAHANQgVAMgQASQgRASgNAbIgFAMQABAFAOAYIAIAMIACgBIADAAIgBACIgFACIgGAFIgEABIgCABQADgEgBgEQAAgGgGgHQgMgRgBgKQAGgLADgKQACgJgBgHQgDgJgIAHIgGADQgGACgEgDIACgDQAFgGALgJQAFgFADgFQAEgHgDgIQgCgJgRABQgSACAAAKQgGgMAMgIQAMgHAQgBQgHgNgRAAIgHABIgXAGIgQADQAcgSAMgNQgQgIgUAQQgXARgGgBQgCgHAFgEQAFgEAAgFQgaAGgPABQgCAOgVANIgmAUQAIAIAaAIIAAAQIgBAAQgCAGgJAKQAEAEgBAFQACAKAZgEQAZgEAJgDQAJgDgFAKQgFAJgYAPIgQgBIACALIABAAIgBACQABADADACIAJAGIAHABIAAAAIAAAAIAIACIADAAIAYABIABAIIAAADIAAAHIgBAJQgNgBgNgDgAg+gQIAAgBIAAgHQABgIAEgDQACgBAEAAQAJAAAIADQAFACAEAEIAAAAIACADQAGAGACAGIAAAFQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQgFABgLAAIgTABQgJAAAAgPgAgkgUIABAGQAAAEgCACIADAAIAJAAIADAAIAAgDQgBgHgGgEIgGgEQgCgCgEgBIgEAAIAAAAQgGAAgDACIgBABIACAAIACgBQAMAAADAHg");
	this.shape_2.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-13,28.9,26);


(lib.SamArmRt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape.setTransform(5.4,-15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE6AA").s().p("AhFCCQgNgGgNgJIAAADIgcgRQgEgDgIAAQgIgTgKgLQgEgGgKgEIgEgUIAHgPQA9gNAoAnIAFAFQAPgJAXADQAVAEAIAMIACADQADAGAEALQAFALAKgGQgHgKABgYQABgOADgSQALg2gJgWIAEgJQAFgLABgIQgNghABgSQABgPAMgEIAEAAQAEAJADAOQADAOACAUQABgDANAAQgEAGgNAKQAagUAtAHIALgIIAKgMQAMgNALgEQAAAegXARIgCACQgJAFgsARIAAAPIABAuIACA4QABBIgbAbIgOABQhHAAg3gbgAgbBhIAbAFQgEgHgPgDIgFgBQgagEgEgCQAEAHAXAFgABohmQgRAAARgCQAKgBAOgGIADgCQAOgLAHgLQAMAGgcAWIgIAGIgHAAIgRgBgABEhoQAJgHAhgHIARgDIgHAEIgCABQgWAMgTAAIgJAAgACYibQAFgCAFAGIABABIABABIAAAGIABACIgTAJIgRAKQAMgZALgIg");
	this.shape_1.setTransform(-0.3,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDCcQgtgHgXgNIAAAAIgfgWIABgDQAMAJAOAGQA8AdBQgDQAbgbgChIIgBg3IgBgvIAAgPQAsgRAIgGIACgBQAXgRABgeQgLAEgMANIgLALIgKAJQgtgHgaAUQAMgKAFgGQgNgBgBAEQgCgUgDgOQgEgOgEgJIgDAAQgMAEgBAPQgBASANAhQgBAIgFALIgEAIQAJAWgLA2QgEATAAAOQgCAYAIAJQgKAHgFgLQgEgMgDgFIgCgDQgHgMgWgEQgYgEgOAKIgFgFQgpgng8ANIAEgIQA/gOAgArQAOgEANgBQAggCATAVIASh6IACgRQgPggACgUQAAgJAEgHQAEgLARACQALAAAAAFIAAABIABAAQAGAHABASIAAAQIAigKIAPgDQAagLADgYIAOAAIABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAHAAADAQIgBAFQASAcgcAaIgJAIQgVAQggAIIgBAJQAAARAFAZIABAEQAGAggCAVQABABAAAAQAAAAABAAQAAABABAAQAAgBABAAIgBAJIACAPQgGAMgDAQQgMAzgKAMIhOgKgAB9h1IgDACQgOAGgKABQgRACAQAAQAPACAKgBIAIgGQAbgWgLgGIAMgGIAAgCIAAgGIgBgBIgBgBQgGgGgEABQgLAJgNAZIASgKIAGgDQgIALgNALgABoh6QghAHgKAHQAXAEAcgQIACgBIAHgEIgRADgAghBdQgXgFgEgHQAEACAZAEIAFABQAPACAFAIIgbgFg");
	this.shape_2.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SamArmRt, new cjs.Rectangle(-17.5,-16.6,35,33.2), null);


(lib.SamArmLt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE6AA").s().p("AAFBHQgPgYgOgPQgNgOgMgGQAPgTAagJIAEgCIgCgFQgEgOgQgTQgRgUABgXQgEgEgNADQgMADgEgGQALgOAbgBQAegCADAVQgLAiANAgQAIAWAUAUQANANARANQARANAEAVQgJANgDANIgDAHQgDAIgGAFQgDACgFACIgBABQgTgRgUggg");
	this.shape.setTransform(11.2,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhdgwQA4gdAYgRQAmgbAOgdQAEgFAFgBIABAAIABADQAAAgAMAkIAWA8QgWAUAEAHQADACAYAAQAFANARAXQAPAVAFAPQhZA8gyAVQgIhVhRh4gAhDAkIgtg6IgJgMIgNgSQByg2AggbQgYAihlAzQAmAiAaAxQAcA4gEAxQgFgyglg2g");
	this.shape_1.setTransform(-4.1,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABqCWIgCgFQgNgVgLgOQgRgVgOgFQgUAHgeAWQgfAWgUAHQgJgNACgLQgFgDgGADQgHAEgGgEQgCglgXgzQgYgzgYgQIgCAAIgHgEIgCgEQADgKgKgKQgHgHgOgGQB+hGBAglIAKgIQACAAAHAQIgBADQAGALACAXQAEAlAKAIIACgDQACACAAADIABABIAFAEIgBAFQgCAMAHANQAkgCAMAKQAMAKABAeQAAANACAMQAEAXAMARQARATASAPIAMALQAQAPAEAVQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAIAIgRgKQgEgVgRgNQgRgMgNgOQgUgVgJgWQgMgfAKghQgDgVgdABQgcACgLAOQAFAGAMgDQAMgEAFAFQgCAXARATQARATAEAOIABAFIgDABQgaAKgPATQALAHANANQAOAQAQAYQAVAgASAQQgIADgEADIgBAAQgQgOgRgegAgEi0QgOAegnAaQgZARg3AdQBQB4AIBWQAygWBZg7QgEgPgQgWQgQgVgFgNQgZAAgCgDQgFgIAWgTIgWg9QgLgjgBghIgBgCIgBgBQgDABgEAFgAiyhRIAMARIAKANIAsA5QAlA3AGAyQADgygcg3QgZgxgngjQBlgyAZgjQghAbhxA3g");
	this.shape_2.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SamArmLt, new cjs.Rectangle(-19.3,-19.4,39.3,38.8), null);


(lib.MickSitting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhDAzIgBABIgBAAQgSgQgEgGQAAguAHgbQAEAAAQAJQANAHAIgGQALgCADgBQAxAIBBgaQgXBEAeAfQgjAKg2AAQgfAAgngEg");
	this.shape.setTransform(-7.8,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(-1.2,-38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgVBIIgKgGQgMgVAAgTQgBgNAGgLQAFgGAVgDQATgEAFgHIgQgIQADgCAAgFQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQASgSAMgIQAYgRAWAOQgDACgiALQgWAHgGAOQALgFAXgMQAWgJAQAFIglANQgXAJACAMQAYgUAigEQAKAPAIADIAAABIAAAAIAAAAQgRgIgXADQgTACgQAJQgLAFgKAJQgMAKgGALQgHAMgBANQgBAQAKAOIgGgBgAhKAkQgBgLAFgNQAQgjAoACQADAHgiAQQgEAJABARIABAKQAEAXgFAFQgYgLgCgTgAgTAgQACgJAFgGQAEgHAHgFQABADAAAFQgBAGgDAKQgHATAEAPQgQgLAEgUgAhPA6IgEAAQgGgIgFgIQgJgRAAgRQAJgPAngLQgaAOAAAhIABAJQACAMAFAJIgGgBgAAHAKQACgGAGgCIAEABIAHABIAAAAIAAAAIAAABIAAAAIgDAAIgEAAQgDABgCACIgDAFQgDAIgDABQAAgHACgFgABDgIQgYgCgOAGQAKgTAcADQANABAJAEQAKAFAFAJQgVgFgQgCg");
	this.shape_2.setTransform(-11,-35.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AAAAAIAAAAIABAAIAAAAg");
	this.shape_3.setTransform(4.7,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC56F").s().p("ACPGCQgDgOAPgFQAOgFAIALQACANgNADIgJACQgIAAgGgFgAgKF+IgGgMQgDAAAAAJQgBAHgGgGQgCgSAOgVQAUgXAIgNIACgDQASgfALhKQAMhSASgfQAYgNAKgHQgrgJgPA4QgMgCgLAFQgPAHgDABQgdhLBUguQBQgsA+AkQgMBEg3BZQhIB2gNAeQADAEAAARQAYAOAfgOQAjgPATAFQgbASg6AXQg/AZgTALIgCABQgGAAgCgFgAC4FuQANgKgBALQgBAGgDAAQgDAAgFgHgABwFrIgCgCIgEgDQAWgIAggSQAegLAcAWQgPAIghAEQgdADgIAMIgVgHgADMFoQAHgDAAgEQALAMgHABQgFgGgGAAgADfFhQgCgKAKAKQgDAEgCAAQgCAAgBgEgABBE/QAOg0BAhoQA9hhAOhFQAuAEATAJIAJAHIgGAWQgHAZgNAWQgPAYgRAXQgPAVgSASQgRARgOAUQglA0gHApQgQARggAAIgNAAgACxE/IAAgKIAOADQgBAHgJAAIgEAAgAkLC6QAIgJAZgGQAbgFAIgHQgXAEgBgHQABgSgPgmIgPgiQgWgxAegeIgMgDQgBgFgFgKQgHgYAFgaIAAgGIADgJIADgHQAHgPALgLQgRgaAGgXQAEgQAPgPQAWgWAcgEQAJgCAJABIABAAQAQAAADAEIAAAAQAGAEAGAAQAGAAAAgEIADADIgDgEQgBgEgJgKIgDgFQgCgHgBgGQAAgFAKgCQAJgCgBgIIgBAAQgIgCgIAFIgBABIgJADIgIAAIgCgIIgIgHIgDgFIAIgTQAEgFAHAAQABALAcAAQAGAFAHAFQgIgsAFgWQAGAAAHAHQgDgaAYANQgBgLgJgCIAAgCIAAAAIABAAIAMgDQAMgEAIAFQAAADgGAIQgCAHAFACQAMghAXAVQAGAFACAEQAKAPgTAMQAFgNgEgHQgDgGgIgBQgEAGAFAKIADAGQAGALgKAHQAFABASgFQANgEAHAGQABALgPADQgSAEgBAJQARABAQgMQAbAigXAjQgSAcgkAMQAVADATgOQAIAAAQgQIADABIALABIADAAQAWAKAMAXQAPAfgPAkQANASgBAjQgBAsAGASQgeAOgSAMIgKgMQAWgigTgRQAXgHAGgrQAGgrgYgCQATATgLAhQgJAagUAUQAMAHgDARQgDAOgJAKIAHAFQAEAEgBAHQgOALgRAIQgVAKgcAGQgzAMgwgKIAMAFIgOgCIgTgKQgQgdAQgzQARg0gUgeQAKgOADgKQgXAJAGAZIALApQgBARgMARQgOAUgEAOQACACAGgBQAEgBACAGQAFAZgEAoQgFAqAEAaQAjAOgBAXQgbgHgdAHIgEABIgIACQgXAIgIAQIgEABQgSAAACgSgAhugaQgUAlATAWQgFgiAug/QgVADgTAjgAgQAeQAJACAFgEQAFgEADgLQAFgTgLgHQADAagTARgAgdAeQgNgFACgOQADgOgJgEQAJAQgaARQAPgCATAGIAAAAgAgkg8QADAOgKALQgLALABALQAkgKAPgHIAAANIABAAQALgFAFgPQAGgRgOgGQAPAag3AEQAEgCgBgKQAAgLAEgBQAVAFAAgHQAAgFgcADQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgBABgAjPhvQABAGAHAAQABgMgLgFQABADABAIgAjjh6QAFAAgBAIQAAAIAHgDQABgGgEgHQgCgEgCAAQgCAAgCAEgAjBhtIAHAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBgBAAIAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABgAgYkEQgUAKgCAQQAEgBAUgOQAOgKAPABQgGgHgIAAQgIAAgJAFgAhUlhQgIATASAIQAGgHgCgLQgDgJgIAAIgDAAgAkZCpQANgDAjgHIgwAYgAkMCXIAfgCQgNAJgpAEQADgKAUgBg");
	this.shape_4.setTransform(0.7,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("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");
	this.shape_5.setTransform(0.5,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC56F").s().p("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");
	this.shape_6.setTransform(0.7,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("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");
	this.shape_7.setTransform(0.5,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC56F").s().p("ACPGCQgDgOAPgFQAOgFAIALQACANgNADIgJACQgIAAgGgFgAgKF+IgGgMQgDAAAAAJQgBAHgGgGQgCgSAOgVQAUgXAIgNIACgDQASgfALhKQAMhSASgfQAYgNAKgHQgrgJgPA4QgMgCgLAFQgPAHgDABQgdhLBUguQBQgsA+AkQgMBEg3BZQhIB2gNAeQADAEAAARQAYAOAfgOQAjgPATAFQgbASg6AXQg/AZgTALIgCABQgGAAgCgFgAC4FuQANgKgBALQgBAGgDAAQgDAAgFgHgABwFrIgCgCIgEgDQAWgIAggSQAegLAcAWQgPAIghAEQgdADgIAMIgVgHgADMFoQAHgDAAgEQALAMgHABQgFgGgGAAgADfFhQgCgKAKAKQgDAEgCAAQgCAAgBgEgABBE/QAOg0BAhoQA9hhAOhFQAuAEATAJIAJAHIgGAWQgHAZgNAWQgPAYgRAXQgPAVgSASQgRARgOAUQglA0gHApQgQARggAAIgNAAgACxE/IAAgKIAOADQgBAHgJAAIgEAAgAkLC6QAIgJAZgGQAbgFAIgHQgXAEgBgHQABgSgPgmIgPgiQgWgxAegeIgMgDQgBgFgFgKQgHgYAFgaIAAgGIADgJIADgHQAHgPALgLQgRgaAGgXQAEgQAPgPQAWgWAcgEQAJgCAJABIABAAQAQAAADAEIAAAAQAGAEAGAAQAGAAAAgEIADADIgDgEQgBgEgJgKIgDgFQgCgHgBgGQAAgFAKgCQAJgCgBgIIgBAAQgIgCgIAFIgBABIgJADIgIAAIgCgIIgIgHIgDgFIAIgTQAEgFAHAAQABALAcAAQAGAFAHAFQgIgsAFgWQAGAAAHAHQgDgaAYANQgBgLgJgCIAAgCIAAAAIABAAIAMgDQAMgEAIAFQAAADgGAIQgCAHAFACQAMghAXAVQAGAFACAEQAKAPgTAMQAFgNgEgHQgDgGgIgBQgEAGAFAKIADAGQAGALgKAHQAFABASgFQANgEAHAGQABALgPADQgSAEgBAJQARABAQgMQAbAigXAjQgSAcgkAMQAVADATgOQAIAAAQgQIADABIALABIADAAQAWAKAMAXQAPAfgPAkQANASgBAjQgBAsAGASQgeAOgSAMIgKgMQAWgigTgRQAXgHAGgrQAGgrgYgCQATATgLAhQgJAagUAUQAMAHgDARQgDAOgJAKIAHAFQAEAEgBAHQgOALgRAIQgVAKgcAGQgzAMgwgKIAMAFIgOgCIgTgKQgQgdAQgzQARg0gUgeQAKgOADgKQgXAJAGAZIALApQgBARgMARQgOAUgEAOQACACAGgBQAEgBACAGQAFAZgEAoQgFAqAEAaQAjAOgBAXQgbgHgdAHIgEABIgIACQgXAIgIAQIgEABQgSAAACgSgAhugaQgUAlATAWQgFgiAug/QgVADgTAjgAgQAeQAJACAFgEQAFgEADgLQAFgTgLgHQADAagTARgAgdAeQgNgFACgOQADgOgJgEQAJAQgaARIAIAAQAMAAAOAEgAgkg8QADAOgKALQgLALABALQAkgKAPgHIAAANIABAAQALgFAFgPQAGgRgOgGQAPAag3AEQAEgCgBgKQAAgLAEgBQAVAFAAgHQAAgFgcADQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgBABgAjPhvQABAGAHAAQABgMgLgFQABADABAIgAjjh6QAFAAgBAIQAAAIAHgDQABgGgEgHQgCgEgCAAQgCAAgCAEgAjBhtIAHAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBgBAAIAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABgAgYkEQgUAKgCAQQAEgBAUgOQAOgKAPABQgGgHgIAAQgIAAgJAFgAhUlhQgIATASAIQAGgHgCgLQgDgJgIAAIgDAAgAkZCpQANgDAjgHIgwAYgAkMCXIAfgCQgNAJgpAEQADgKAUgBg");
	this.shape_8.setTransform(0.7,3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglAKQAJADAigPQAKgEAKgJIADABIABADQAAAFgUAJQgTAMgMABQgQAAAAgGgAAmgIIAAABIgBAJIgFAGQAFgIABgIg");
	this.shape_9.setTransform(-1.2,-21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC56F").s().p("Ag3AVIgCgDQgCgGABgFIABgBQALgTAVgMIAhgHIAgADIAFADIAAABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABIABAEIAEABIAAACQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABIABACQgBAJgEAHQgSAVgfAHIgPABQgXAAgWgMgAAAAMQAMAAAUgMQAUgKAAgFIgBgDIgDAAQgKAIgKAEQgiAQgJgDQAAAFAPAAg");
	this.shape_10.setTransform(-3.4,-20.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AglA7IgJgIQgGgXAFgSQADgMAIgKQAHgEAVACQATABAHgFIgOgMQADgCACgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAXgNAOgEQAcgKASATQgEABgjACQgYAAgJANQALgCAagFQAYgDANAJIgnACQgYADgBAMQAcgNAiAFQAFARAIAFIAAABIAAAAIAAAAQgPgMgXgEQgSgCgTAEQgMADgMAGQgNAGgJAJQgLAJgEANQgFAPAHAQIgGgDgAgZAWQAEgIAHgGQAFgFAJgCQAAACgCAFQgCAGgGAJQgLARAAAOQgNgOAJgSgAhPALQABgKAJgKQAZgfAmALQAAAJgkAHQgGAIgEAPIgBALQgDAWgGAEQgUgRADgTgAhaAfIgDAAQgFgKgCgJQgEgSAFgQQAMgNAogBQgcAHgJAfIgBAJQgCAMADAKIgGgCgABEAFQgWgIgPACQAOgPAbAKQANAEAHAGQAIAHACAKQgSgLgQgFgAAGAIQADgGAHAAIADACIAGACIABAAIAAACIgBAAIgCgBIgFgBQgDgBgCACIgEAEQgFAHgDABQACgHADgEg");
	this.shape_11.setTransform(-8.3,-35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFC56F").s().p("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");
	this.shape_12.setTransform(0.7,4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("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");
	this.shape_13.setTransform(0.5,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC56F").s().p("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");
	this.shape_14.setTransform(0.7,4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("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");
	this.shape_15.setTransform(0.5,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnAEQAKgGARgCQABABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAAIgVAAQgHAAgCgDgAAnABIABAAIAAAAgAAPgBQAAgGAPABQAKgBAAAEIAAABQgBADgNAAQgLAAAAgCg");
	this.shape_16.setTransform(-3.1,-29.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFC56F").s().p("AgyARIAAAAQAGgoAqAGIAPgFIAiAEIAAABIABACIADADIAAAEQAAgDgKAAQgPAAAAAFQAAADALAAQANAAABgEIgBADIAAABIAAAAIgFAAIgGACIgDABIgaAAIgOAHIgBACQgNAOgOAAQgIAAgKgGgAgcAAQACADAHAAQAUAAAAgIQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAgBAAQgRACgKAGg");
	this.shape_17.setTransform(-4.2,-29.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFC56F").s().p("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");
	this.shape_18.setTransform(0.7,4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ACDGbIgFgDIgFgGIgBgBIgOgGIgQgHIgTAEQgJACgIAIIgOAJIgOAIIgDAEQgvgFgNgNIgDgGQAYgfARghQAjhKAHg2IAAAAIAAgBQAEgeAAgfQgMAGgJAYQg3AIgdADIgRAAIggAAQgYgCgTgJQBoAKA3gQQgdgfAWhEQhAAZgygIQgDACgLABQgIAHgMgHQgRgKgEAAQgHAbAAAwQAEAFASAQIABABQALAJAFAIIAAABIAAADIACAEQAAAHgNAAQgKAAgCgCIgRAAIAAAAQgIACgKgBIgOADIgNAHQgJARgJAFQgPAAgUgPIAAAAQgCgEgCgCIAAgHIgOAAQgDgRgFgNQAMgMABgIIABAAQARAKAlAAQABgOgLgeIgOgfQgFgLgDgLQgIgaAIgVIAEgJIAAgGQgFgFgGgUQgEgTAAgIQAAgSADgIIAHgMIADgHQAOgIgEgRQgHgYgBgLIAAgGQAEgjAngVQAYgNAWACIAOADIAFAAIAMADIAAgEIgCgEIgBgBIgGgKIADABIABgBIgEAAIgCgEIgGgJIAAgBIgLgaQgJgVAPgKQgDgEgDgDQgIgIgJgHIAAAAQgLgKgEgKQgDgJABgJQACgUAZgLQAtgXAmAWIAJgDQAggqA7AVQAHAHADAVQACAWAHAHIgGACIABAFIgBAEIAFAHQgLAIAEAKIAAABIAIATQgMAHgHgSQgBAJABAPQARAEACAFQgEAOACAdQABANgCAMIAMABIAAAAIAJACIADABIAKAJIAGAFQAPAUACAGQAPAggRAdQAQASgBAjQAAAtAFAQQAPgCAggHQAegEAWAKQAEACAKAMQAXAHAlAEQALACAHAEQAEAGADAGQAEAKgDALQgGAbgPAYQgPAXgPAVIgjAuQgRAVgTARIgGAHQgZAfgEAjQAFAAA0AOQAAAFACAHQABAEgJABQAKAKAlAHIABAGIAAABQAAANgCAPIgKAFQgHgFgJgBQgJAOgVAHIgBAAIgBAAIgMADIgMABQgUAAgGgOgACdGJQgPAFADAPQAJAGAOgDQANgEgCgMQgFgIgJAAIgIABgAgIGYQADAGAHgBQATgLA/gaQA6gWAbgTQgTgFgjAQQgfAOgYgPQAAgQgDgFQANgeBIh1QA3haAMhEQg+gjhQArQhUAuAdBLQADAAAPgHQALgFAMACQAPg4ArAIQgKAIgYANQgSAfgMBRQgLBLgSAeIgCAEQgIAMgUAYQgPAVADASQAGAFABgGQgBgJAEgBgAC6GJQAJANADgMQAAgGgDAAQgDAAgGAFgACiFmQggASgWAJIAEADIACABIAVAHQAIgLAdgEQAhgDAPgJQgTgOgUAAQgJAAgKADgADOGCQAFAAAGAHQAHgBgLgNQAAAEgHADgADhF7QACAJAGgJQgFgEgCAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAABAAABgACRC+QhABngOA0QApAEAUgVQAGgoAmg0QAOgUARgRQASgSAPgVQARgXAPgYQANgWAHgZIAGgXIgJgHQgTgIgugGQgOBGg9BigACzFPIAAAKQANACABgIIgOgEIAAAAgAjoDGQgaAGgHAJQgCATAWgCQAIgRAXgIIAIgCIAEgBQAdgGAbAHQABgXgjgPQgEgZAFgrQAEgngFgZQgCgGgEAAQgGACgCgDQAEgOAOgTQAMgRABgRIgLgqQgGgZAXgIQgDAJgKAPQATAegQAzQgQA0AQAdIATAKIAOACIgMgFQAwAJAzgLQAcgGAVgKQARgJAOgLQABgGgEgFIgHgGQAJgKADgNQADgRgMgGQAUgVAJgZQALghgTgUQAYADgGArQgGAqgXAHQASARgVAhIAKAOQASgOAegNQgGgSABgrQABgkgNgSQAPgkgPgfQgMgXgWgKIgDABIgLgCIgCAAIgGAOIgHAHIgBAAIgCACIgEACIgBACIgCABIACAAIgBAAIgEADIgDAEIgBABIgDACIgHADIgBAAIgDAAQgPAGgOgCQgGgBgGgDQAlgBAYgXIABgBIACgBIAGgHIADgEIADgFQAMgWgMgbQgSAGgQgFQACgIASABQAQABADgMQgGgHgOABQgTAAgEgCQAJgEAAgIIAHgDIgDAEQAKgDADgFIAAAAIAAAAQAFgGgDgJQgBgFgEgHQgOgWgRASQgEADgCAEQgEgEAEgFQAIgGABgDQgHgHgNABIgMAAIgBgBIAAAAIgHgCIgDgCQgGAAgEAGQgDAEgCAHQADgBAFgHIAEgEQADgCADABIAEABIACABIABAAQAIAEgCALQgUgSgEAaQgFgJgGgBQgKATgDAtQgHgHgEgGQgbgHACgLQgGgCgGAEIgMAPIABAGIAGAJIAAAJIAIACIAJgBIABAAQAJgDAIAEIAAAAQAAAIgKAAQgKgBgBAFQgBAGAAAHIACAGIAEAJIACAHIAAABIABABIABADIgCgDIgBgBIAAABIgDACIABAFIgEgCIAAgBQgDgEgQAAIgBAAQgJAAgJABQgcAFgWAVQgPAPgEAQQgHAYASAaQgMAKgGAPIgDAIIgDAJIAAAFQgFAaAHAZQAFAIABAFIAMADQgeAgAWAwIAPAiQAPAngBARQABAIAXgEQgIAGgbAGgAkXDEIAAANIAwgXQgjAGgNAEgAkKCxQgUACgDAKQApgEANgKIgfACgAh3kmQgHgQAGgPQAEgNAKgJQAJgJAPgHQAMgGAMgDQASgEATACQAVAEAPAMIAAABIAAgBIAAAAIAAgBQgHgFgGgRQghgFgcANQABgMAZgDIAmgCQgNgJgYADQgaAFgLACQAJgMAYgBQAjgCADgBQgRgTgcAKQgOAEgWANQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQgBAEgEACIAOAMQgHAFgUgBQgVgCgHAEQgIAKgDANQgEASAGAXIAIAIIAGADIAAAAgAhmlcQgGAGgEAIQgKASANAOQAAgOALgRQAGgJADgGQABgEAAgDQgIACgGAFgAicluQgKALgBAKQgDATAUARQAGgEADgWIACgLQADgQAGgIQAlgHgBgJQgKgDgKAAQgZAAgRAXgAi7l7QgFAQAFATQACAJAEAKIADAAIAGACQgDgKACgMIACgJQAIggAcgHQgnABgNANgAgSlfQAPAFASALQgCgKgJgHQgGgHgNgEQgbgKgOAPIAGAAQAOAAASAHgAhsAAQATgjAVgDQguA+AFAkQgTgWAUgmgAgOA4QATgRgDgbQALAIgFAUQgDAKgFAEQgDADgFAAIgGgBgAg9A1QAagRgJgRQAJAEgDAPQgCAOANAEQgTgFgPACgAgpgIQAKgLgDgPQAAAAABAAQABAAAAAAQABABAAAAQAAABAAABQAcgDAAAFQAAAGgVgFQgEACAAAKQABALgEABQA2gDgOgbQAOAHgGAQQgFAPgMAEIAAABIAAgNQgPAGgkAKQgBgKALgKgAjNhUQgBgJgBgDQALAGgBALIgCAAQgFAAgBgFgAjdhXQAAgJgEAAQAEgHAEAHQAEAHgBAHIgEABQgDAAAAgGgAi/hSQABgDADAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABgAgejUQAXgFAHAPQgOgFgRAGQgWAIgFAAQAHgOAVgFg");
	this.shape_19.setTransform(0.5,0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFC56F").s().p("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");
	this.shape_20.setTransform(0.7,4.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("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");
	this.shape_21.setTransform(0.5,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFC56F").s().p("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");
	this.shape_22.setTransform(0.7,3.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("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");
	this.shape_23.setTransform(0.5,-0.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFC56F").s().p("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");
	this.shape_24.setTransform(0.7,3.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFC56F").s().p("ACPGCQgDgOAPgFQAOgFAIALQACANgNADIgJACQgIAAgGgFgAgKF+IgGgMQgDAAAAAJQgBAHgGgGQgCgSAOgVQAUgXAIgNIACgDQASgfALhKQAMhSASgfQAYgNAKgHQgrgJgPA4QgMgCgLAFQgPAHgDABQgdhLBUguQBQgsA+AkQgMBEg3BZQhIB2gNAeQADAEAAARQAYAOAfgOQAjgPATAFQgbASg6AXQg/AZgTALIgCABQgGAAgCgFgAC4FuQANgKgBALQgBAGgDAAQgDAAgFgHgABwFrIgCgCIgEgDQAWgIAggSQAegLAcAWQgPAIghAEQgdADgIAMIgVgHgADMFoQAHgDAAgEQALAMgHABQgFgGgGAAgADfFhQgCgKAKAKQgDAEgCAAQgCAAgBgEgABBE/QAOg0BAhoQA9hhAOhFQAuAEATAJIAJAHIgGAWQgHAZgNAWQgPAYgRAXQgPAVgSASQgRARgOAUQglA0gHApQgQARggAAIgNAAgACxE/IAAgKIAOADQgBAHgJAAIgEAAgAkLC6QAIgJAZgGQAbgFAIgHQgXAEgBgHQABgSgPgmIgPgiQgWgxAegeIgMgDQgBgFgFgKQgHgYAFgaIAAgGIADgJIADgHQAHgPALgLQgRgaAGgXQAEgQAPgPQAWgWAcgEQAJgCAJABIABAAQAQAAADAEIAAAAQAGAEAGAAQAGAAAAgEIADADIgDgEQgBgEgJgKIgDgFQgCgHgBgGQAAgFAKgCQAJgCgBgIIgBAAQgIgCgIAFIgBABIgJADIgIAAIgCgIIgIgHIgDgFIAIgTQAEgFAHAAQABALAcAAQAGAFAHAFQgIgsAFgWQAGAAAHAHQgDgaAYANQgBgLgJgCIAAgCIAAAAIABAAIAMgDQAMgEAIAFQAAADgGAIQgCAHAFACQAMghAXAVQAGAFACAEQAKAPgTAMQAFgNgEgHQgDgGgIgBQgEAGAFAKIADAGQAGALgKAHQAFABASgFQANgEAHAGQABALgPADQgSAEgBAJQARABAQgMQAbAigXAjQgSAcgkAMQAVADATgOQAIAAAQgQIADABIALABIADAAQAWAKAMAXQAPAfgPAkQANASgBAjQgBAsAGASQgeAOgSAMIgKgMQAWgigTgRQAXgHAGgrQAGgrgYgCQATATgLAhQgJAagUAUQAMAHgDARQgDAOgJAKIAHAFQAEAEgBAHQgOALgRAIQgVAKgcAGQgzAMgwgKIAMAFIgOgCIgTgKQgQgdAQgzQARg0gUgeQAKgOADgKQgXAJAGAZIALApQgBARgMARQgOAUgEAOQACACAGgBQAEgBACAGQAFAZgEAoQgFAqAEAaQAjAOgBAXQgbgHgdAHIgEABIgIACQgXAIgIAQIgEABQgSAAACgSgAhugaQgUAlATAWQgFgiAug/QgVADgTAjgAgQAeQAJACAFgEQAFgEADgLQAFgTgLgHQADAagTARgAgdAeQgNgFACgOQADgOgJgEQAJAQgaARQAPgCATAGIAAAAgAgkg8QADAOgKALQgLALABALQAkgKAPgHIAAANIABAAQALgFAFgPQAGgRgOgGQAPAag3AEQAEgCgBgKQAAgLAEgBQAVAFAAgHQAAgFgcADQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgBABgAjPhvQABAGAHAAQABgMgLgFQABADABAIgAjjh6QAFAAgBAIQAAAIAHgDQABgGgEgHQgCgEgCAAQgCAAgCAEgAi6htQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQgDAAgBADIAHAAIAAAAgAgYkEQgUAKgCAQQAEgBAUgOQAOgKAPABQgGgHgIAAQgIAAgJAFgAhUlhQgIATASAIQAGgHgCgLQgDgJgIAAIgDAAgAkZCpQANgDAjgHIgwAYgAkMCXIAfgCQgNAJgpAEQADgKAUgBg");
	this.shape_25.setTransform(0.7,3.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CC00").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_26.setTransform(4.9,23.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFC56F").s().p("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");
	this.shape_27.setTransform(-0.4,4.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("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");
	this.shape_28.setTransform(-0.3,0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFC56F").s().p("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");
	this.shape_29.setTransform(0.7,3.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("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");
	this.shape_30.setTransform(0.5,-0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AgVBIIgKgGQgMgVAAgTQgBgNAGgLQAFgGAVgDQATgEAFgHIgQgIQADgCAAgFQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQASgSAMgIQAYgRAWAOQgDACgiALQgWAHgGAOQALgFAXgMQAWgJAQAFIglANQgXAJACAMQAYgUAigEQAKAPAIADIAAABIAAAAIAAAAQgRgIgXADQgTACgQAJQgLAFgKAJQgMAKgGALQgHAMgBANQgBAQAKAOIgGgBgAhKAkQgBgLAFgNQAQgjAoACQADAHgiAQQgEAJABARIABAKQAEAXgFAFQgYgLgCgTgAgTAgQACgJAFgGQAEgHAHgFQABADAAAFQgBAGgDAKQgHATAEAPQgQgLAEgUgAhPA6IgEAAQgGgIgFgIQgJgRAAgRQAJgPAngLQgaAOAAAhIABAJQACAMAFAJIgGgBgAAHAKQACgGAGgCIAEABIAEABIgBABIgDAAQgDABgCACIgDAFIAAAAIgGAEIACgHgABDgIQgYgCgOAGQAKgTAcADQANABAJAEQAKAFAFAJQgVgFgQgCg");
	this.shape_31.setTransform(-11,-35.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFC56F").s().p("ACPGCQgDgOAPgFQAOgFAIALQACANgNADIgJACQgIAAgGgFgAgKF+IgGgMQgDAAAAAJQgBAHgGgGQgCgSAOgVQAUgXAIgNIACgDQASgfALhKQAMhSASgfQAYgNAKgHQgrgJgPA4QgMgCgLAFQgPAHgDABQgdhLBUguQBQgsA+AkQgMBEg3BZQhIB2gNAeQADAEAAARQAYAOAfgOQAjgPATAFQgbASg6AXQg/AZgTALIgCABQgGAAgCgFgAC4FuQANgKgBALQgBAGgDAAQgDAAgFgHgABwFrIgCgCIgEgDQAWgIAggSQAegLAcAWQgPAIghAEQgdADgIAMIgVgHgADMFoQAHgDAAgEQALAMgHABQgFgGgGAAgADfFhQgCgKAKAKQgDAEgCAAQgCAAgBgEgABBE/QAOg0BAhoQA9hhAOhFQAuAEATAJIAJAHIgGAWQgHAZgNAWQgPAYgRAXQgPAVgSASQgRARgOAUQglA0gHApQgQARggAAIgNAAgACxE/IAAgKIAOADQgBAHgJAAIgEAAgAkLC6QAIgJAZgGQAbgFAIgHQgXAEgBgHQABgSgPgmIgPgiQgWgxAegeIgMgDQgBgFgFgKQgHgYAFgaIAAgGIADgJIADgHQAHgPALgLQgRgaAGgXQAEgQAPgPQAWgWAcgEQAJgCAJABIABAAQAQAAADAEIAAAAQAGAEAGAAQAGAAAAgEIADADIgDgEQgBgEgJgKIgDgFQgCgHgBgGQAAgFAKgCQAJgCgBgIIgBAAQgIgCgIAFIgBABIgJADIgIAAIgCgIIgIgHIgDgFIAIgTQAEgFAHAAQABALAcAAQAGAFAHAFQgIgsAFgWQAGAAAHAHQgDgaAYANQgBgLgJgCIAAgCIAAAAIABAAIAMgDQAMgEAIAFQAAADgGAIQgCAHAFACQAMghAXAVQAGAFACAEQAKAPgTAMQAFgNgEgHQgDgGgIgBQgEAGAFAKIADAGQAGALgKAHQAFABASgFQANgEAHAGQABALgPADQgSAEgBAJQARABAQgMQAbAigXAjQgSAcgkAMQAVADATgOQAIAAAQgQIADABIALABIADAAQAWAKAMAXQAPAfgPAkQANASgBAjQgBAsAGASQgeAOgSAMIgKgMQAWgigTgRQAXgHAGgrQAGgrgYgCQATATgLAhQgJAagUAUQAMAHgDARQgDAOgJAKIAHAFQAEAEgBAHQgOALgRAIQgVAKgcAGQgzAMgwgKIAMAFIgOgCIgTgKQgQgdAQgzQARg0gUgeQAKgOADgKQgXAJAGAZIALApQgBARgMARQgOAUgEAOQACACAGgBQAEgBACAGQAFAZgEAoQgFAqAEAaQAjAOgBAXQgbgHgdAHIgEABIgIACQgXAIgIAQIgEABQgSAAACgSgAhugaQgUAlATAWQgFgiAug/QgVADgTAjgAgQAeQAJACAFgEQAFgEADgLQAFgTgLgHQADAagTARgAgdAeQgNgFACgOQADgOgJgEQAJAQgaARIAIAAQAMAAAOAEgAgkg8QADAOgKALQgLALABALQAkgKAPgHIAAANIABAAQALgFAFgPQAGgRgOgGQAPAag3AEQAEgCgBgKQAAgLAEgBQAVAFAAgHQAAgFgcADQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgBABgAjPhvQABAGAHAAQABgMgLgFQABADABAIgAjjh6QAFAAgBAIQAAAIAHgDQABgGgEgHQgCgEgCAAQgCAAgCAEgAi6htQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQgDAAgBADIAHAAIAAAAgAgYkEQgUAKgCAQQAEgBAUgOQAOgKAPABQgGgHgIAAQgIAAgJAFgAhUlhQgIATASAIQAGgHgCgLQgDgJgIAAIgDAAgAkZCpQANgDAjgHIgwAYgAkMCXIAfgCQgNAJgpAEQADgKAUgBg");
	this.shape_32.setTransform(0.7,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_7},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_6},{t:this.shape_3},{t:this.shape}]},9).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_8},{t:this.shape_3},{t:this.shape}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{y:-35}},{t:this.shape_1,p:{x:2,y:-35.1}},{t:this.shape},{t:this.shape_3},{t:this.shape_10},{t:this.shape_9}]},3).to({state:[{t:this.shape_11,p:{y:-35}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_1,p:{x:2,y:-35.1}},{t:this.shape_3},{t:this.shape}]},15).to({state:[{t:this.shape_11,p:{y:-35}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_1,p:{x:2,y:-35.1}},{t:this.shape_3},{t:this.shape},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_11,p:{y:-34.4}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_1,p:{x:2,y:-34.5}},{t:this.shape_3},{t:this.shape}]},5).to({state:[{t:this.shape_11,p:{y:-35}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_1,p:{x:2,y:-35.1}},{t:this.shape_3},{t:this.shape}]},14).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_4},{t:this.shape_3},{t:this.shape}]},6).to({state:[{t:this.shape_2},{t:this.shape_23},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_22},{t:this.shape_3},{t:this.shape}]},3).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_8},{t:this.shape_3},{t:this.shape}]},26).to({state:[{t:this.shape_2},{t:this.shape_7},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_24},{t:this.shape_3},{t:this.shape}]},7).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_8},{t:this.shape_3},{t:this.shape}]},2).to({state:[{t:this.shape_2},{t:this.shape_7},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_24},{t:this.shape_3},{t:this.shape}]},2).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_25},{t:this.shape_3},{t:this.shape}]},2).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_25},{t:this.shape_3},{t:this.shape}]},11).to({state:[{t:this.shape_2},{t:this.shape_28},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_27},{t:this.shape_26},{t:this.shape}]},3).to({state:[{t:this.shape_2},{t:this.shape_7},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_24},{t:this.shape_3},{t:this.shape}]},25).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_8},{t:this.shape_3},{t:this.shape}]},5).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_29},{t:this.shape_3},{t:this.shape}]},6).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_1,p:{x:-1.2,y:-38}},{t:this.shape_32},{t:this.shape_3},{t:this.shape}]},28).wait(1));

	// Layer 2
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#99FF33","#E3E260"],[0,1],53.9,-18.7,53.9,96.2).s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_33.setTransform(-29.6,35.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#07CD1B","#01984B"],[0,1],266.3,-34.8,266.3,17.4).s().p("Ag1AhIABANIgDAAgAAYguIAJABIAXAjg");
	this.shape_34.setTransform(4,9.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C18F1C").s().p("AhUDoQgCAAgCANQgIgFgIABQAZgtgRg9QAFgIATAIQASAIAHAAIAAAVQgEgFgEgCQADAEADALQAEAOAAAJIACAUQAAAJAGALQAAAEgDAAIgDgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBQgEgIgDABQgBAPgFACIgEAAQgLAAgJgNgAC/DjQgcgCAAgcIABg1IAFgHIAhABIALAFIAHBIIgFAIIgXAEgAB9DDIgGgFIgRAMIgCgCIgDgTIAAAAIAAgCQgDgFABgNQAAgPADgEIACgDQAFgMAQAAIAJABIAEAAIAFBIIgNADgAilC5IAAgPQgBgKgGAAIgDAIIgBAAIAAACIgFAHIAAgBQADgMAAgJQgEgSAAgLIADgLIAMgFIAWAAQgHAbAAAbIABAQIgDgBQgKAAAAAHgAjJCcIAAgBIAAAHgAhiB3IgBgcQAHgagLgYIA2gCIgDARIAEAJQAEAMABANIAAAaQgSAJgPAAQgMAAgKgGgACdBoIAAg+IAyAAQAGAhgGAkQgEACgFABIgJADIgCAAQgEADgMAAQgRAAADgQgABvBvIgBgBIgBABQgJAAgEgDIgBgBIABABIgBgCQgBgKgCgFIAAgMQAAgdgDgIIArADIAAA8QgEAFgRABgAi2BeIgBAAIgBgVQACgUADgUIAhAEIABAHQACAOgCAPIABAFIABAIQAAANgTAAQgSAAgCgFgAgqAhQgNgFAHgPQAGgNgGgGQB+gICCAGQAWAQgQAVIgKAEgAi6AZIgEgMIAAgSIANgJQARAEARACQBDgFAOAEQANADgEAEQgFAEAEABIgBAIIgBAHIgEANgAA5ghQACgJAEgIIACgEQACgIABgOIACgBQAHAAAAgCIAAgBQAHgEAAgUQABgLgBgFQgFgNgKgBIAAg4IAqAAIAAABIgRCpIgnACQAAgIACgHgAitgWIAAgLQgEhjAEg5IABAAIgBgDIAaABIAVAAIgNAsQAAAVAEApQAAAZABATIACATIgFADIgJAAQgNAAgOgDgAh/hUIgDgiIAlABQBIAABCgEIAPgDIAAAAIAEgBIACAAIADgBIACABIADABIADALIABAOQgBAMgEAEIgBAAIgDAAIgEABIgBAAIgDgBIAAABQg8gCg7AJQg6gCgLADIAAgKgAjajHQgEgDAEgVIADgMIACgHQAMAGgQAmIgBgBgAiqjHIgDAAIgDgBIgIAAIgGgBIgKgBIABgCQAKgagLgJIAUgDIABAAIAUgCIAAABIAOAAIEXABIAAAAIgCAHQAEAZgRAKIgyAAQgBgEgDAAIgBAEIjqABg");
	this.shape_35.setTransform(-11.9,18.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("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");
	this.shape_36.setTransform(-12.1,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).wait(178));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,-43.6,65.4,88.9);


(lib.CarmenJudge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDB477").s().p("AglAMIAAgDIACgDIADgDIAEgDIAJgGIABgFIAXgIIgCgIIAKAGIgEABIAJAEQANAGADANIgMgFIgTALIAYgGIALAHIgCAIIgNABIg2AJIgGgQg");
	this.shape.setTransform(8.5,-48.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A55927").s().p("AChCiIgNgvQgGgWgBgXIABADIACACIAHABIgFgMQANgUAFgYQgFgPACgRIABgDIgDgEIgKgHIgBgDIABgFIADgIIABgEIgCgHIgOgJIAHgZIgSgNIgEgPQgNgKgOAJIgKAGIgMgFIgHAHIgFAAIgRgTQgPAGgQgGIgNgFIgSALIgHAGIgJgBIgFgDQgIAhgcAUIADAZIgVAKIAFAFIAEACIAAgBIAHgFIAKgDIACgLQACgNgFgHQASgJAHgTQACgJAGgEIAJgEQAHgCAGgEIALgIQAUAIAXgFQAIAIAJAIQADACADABIgPAGIgBAIIgRABIgCgHIgcgJIgFACIgBAXIgQAGIgLgGQgJALACAQIAEAUIgaAPIAFANIgtAeIAEANIgZAJIgNAcIgHASIgNAjIgIAHIgMgJQgEgDgDgFIAIgXIgCgFIgLgJQgBgRALgLQAFgGAHgEIgGgYQAOgZAegGIgHgFIgBgLQAOgHASgEQAPgFACgPIgIgOIASgQIgFgYIAagFIgEgYIA/gHIgCgQIAuALIAOgOQANAFAFARIAlgCIAAAVIAEACIAUgCIADADQgBAPANAIIAJAEIgHATIABAFIAQAMQAFALgHAKIgGAHIAFAMIgGARIAFAMIgLAaIAQATIgMANQATAPAEAZIgHAJQAJAMgBAOQgBANgLAIIgFABIgKgEgACMA3QgBg3gLg1IgNgGQgBgQgJgOIgIgMIgGgCIAXgKQADAMAHAHIANAMIgJAXIARAMIgDAOIgCAEIABADIAMAKQAEAfgHAfIgHAJQgCAEgBAEIAAgIgAhdAdQAZgGAQgTIAEgGIgGgLIAOgHIAMgHIgCgSQgBgKgDgJQAOACAPgGQAFAAADgCIAAgLIAAgFIACgHIAbAOIABABIgJAGIAAAGIADAJIAEAIIgHgBQgQABgLAMIgKAGIgDAIIgSAjIgMAJIgDAEIgJAFIgDAEIgfAIg");
	this.shape_1.setTransform(1.4,-40.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AClCmIgDgDIAKADIAFAAQALgIABgOQABgOgJgMIAHgJQgEgYgTgQIAMgNIgQgTIALgaIgFgMIAGgRIgFgLIAGgHQAHgLgFgLIgQgMIgBgEIAHgUIgJgEQgNgIABgPIgDgDIgUACIgEgCIAAgUIglABQgFgQgNgGIgOAOIgugLIACAQIg/AIIAEAXIgaAFIAFAYIgSAQIAIAPQgCAPgPAEQgSAEgOAHIABALIAHAFQgeAHgOAYIAGAYQgHAEgFAGQgLALABARIALAKIACAEIgIAYQADAEAEAEIAMAIIAIgHIgLAUQABgDgDgCQgDgCgEAAIgPgZIAIgUQgegcAmgfQgGgnAmgNQAGgiAmACIAEgIIgJgUIATgTIgHgSIAcgKIgEgTIAEgJIA6gDIgBgPQAbgIAaALQAGgHAKgEQAPAIAGAPQAWgIASALIgBARQAWgJAKAQIgCAMIAPAAIAQAKIgPAAIADALIgGAPQAZAVgQAaIAFALIgGAQQALATgRASQAPAHAAAQIgIAKQASAQABAZIgHAKIADAHQAOAngnAIgACRBLIgCgCIgCgDIAAgBIAAgGQABgEACgEIAHgJQAHgfgEgfIgMgKIgBgCIACgFIADgOIgRgMIAJgXIgNgLQgHgIgDgLIgXAJIAGACIAIAMQAJAOABAQIgIAAIACgIIgLgHIgYAGIATgMIAMAGQgCgOgNgGIgKgEIAFgBIgKgGIABAIIgXAIIgBAFIgJAHIgEADIgEADIgBADIAAADIAGAQIgJAAIgEgHIgDgJIAAgHIAJgGIgBgBIgbgNIgCAGIAAAFIAAALQgEACgEABQgPAFgOgCQADAJABAKIACASIgMAIIgOAGIAGALIgEAGQgQATgZAGIABANIgFAAIgEgOIAtgdIgFgOIAagPIgEgUQgCgQAJgKIALAFIAQgGIABgXIAFgCIAcAKIACAGIARgBIABgIIAPgGQgDgBgDgCQgJgHgIgJQgXAFgUgIIgLAIQgGAEgHADIgJADQgGAFgCAIQgHAUgSAIQAFAIgCAMIgCALIgKADIgHAFIAAABIgEgCIgFgFIAVgKIgDgYQAcgVAIghIAFADIAJABIAHgGIASgLIANAFQAQAHAPgHIARATIAFAAIAHgHIAMAGIAKgHQAOgIANAJIAEAPIASANIgHAZIAOAJIACAIIgBADIgDAIIgBAGIABACIAKAIIADADIgBADQgCARAFAPQgFAYgNAUIAFANIgHgCgAgMgeIAKgHIgNAPg");
	this.shape_2.setTransform(1.3,-40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CE9E31").s().p("AgDgOQAQACgKAbIgBAAQgNAAAIgdg");
	this.shape_3.setTransform(-46.4,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#07CD1B","#01984B"],[0,1],309.9,-38.2,309.9,14).s().p("AgWgPIABAEQgEATAAAdQgJgjAMgRgAAegjIgBgCIABABIAAACg");
	this.shape_4.setTransform(39,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#05A514","#006633"],[0,1],32.1,-13.3,32.1,5.4).s().p("AAMC/IgCgYQgHgvgOgSQAXgcgXgvQAXiiADhLQAegUAMgOQAJgJADgLIABAAQAKAGAGAAIACgBQAKAFgFAUQABgDAMAAQAQAQAjAbQAdAaAJAeQgTAsgkApQgCAGAFAEQAFAFgBAFQgLAhgOA7QgWAxAHA1IADAOQgOAagTAVIgLALIABAGIgVAeQgdgjgFgrgABQAYIgJAgQgGAVALAIQAIgZAAg1QAAgyAGgVQgiA3AYAhgABXhoQASgbgMhgQgMAcAGBfgAkpDPQgGgGgIgMIgCAAIgFgKIgfhSQgRg2gNg1QgOg5gUg5QgVg6A1gkIANgJQAtgZAJgJQBJAYAJAfQBGAIgWBrQgCAKgkA9QgWAlAaAiQg8CDAWBQQgSgRgXgmgAkzihQARA4gUAYQARASgOA0QgMAwATAOQgFgMAHgyQAIgvgNgXQAOgcgBgaQgUgPADglQAFgygBgDQgUAXAQA4gAg+DeQgFgVAFgOQgWgNgMgxQgNg4gLgPQAFhIg7g7QgQhQAug/IArgTQAWgMAHgRQAbAPgIAvQgEAagMA0QgBARAMAiQALAegFAVQANgUgKgfQgNgnAAgJQAAgLAMguQALglgHgcQAWAEAgAlQAKAhgaA+QgDATADAxQgBAbgJArQABAMAJAWQABAjgnAyQAuArg3BFQAAgLgHgZgAjyCcQAFg0Adg1QgWgbAOglQADgIAdgxQALAlgGBLQgIBWAFAgQAKgqABhEIAAhnQAdAHALBaQADAXAMAgQgCAMgPAPQgTAkgaBPQgfgTghhCgACQB6IACgEIgOgqIAGgTIACgJIABAAIAAADIAAABQAAgOADgKQABgKACgMIAEgeIABAAIgBgGIABgEQAAgLgBgFQApgyANgqQgHgGgPgdQgNgXgQgGQAKgEANgSQAMgQANgDIAGAIIABABQAHAIANAKQgYAsAPBFIgBAGQAAAPAEAHIALAPIAAAAQAFAOACANIABABIACANIAAAAIAGAgIABAjQAAAGgBADIACAEQgdBOg6A3QgEgkgRgggADFguIAKAdIgXALQgLAFAAADQAAAIAUAYQAAAJgIAXIAAAIQABAHAIAAQADAAACgFQgEgJAAgDQAIgLAAgSQAAgIgHgEQgIgFgCgPQAjgPAAgEQgOgbAAgDQAFgcgIAAQgHAAAAAcgAhQCwQAFgEADAPQgMgHAEgEgAE1CMQgKgNgCgOQgGgsghgdQAEgigLggIACgBIAAgEIgDgBIgDgMIgFgSIABgBIgCgDIgCgGQgZhOAPg4QARgOAlgKQApgMAOgJQAYAYA5AmQAGA9goBYQAKAVgMAmQgbBAACBDIADgGIgCANIAEABIgMAOQgagKgQgWgAEzi+QgIAbABAOIASAOQgJAKgCAUQgDAXAOAFQgDgbAMgfQgNgFgHgWQAgg1gdgMQAFAOgIAXg");
	this.shape_5.setTransform(-3.7,28.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#05A514","#006633"],[0,1],-23.2,3.6,4.1,3.6).s().p("AAAAAIADgBIgFADg");
	this.shape_6.setTransform(-21.6,-12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D29960").s().p("ACuBuIAAAAIAAAAgAithDQgDg+ApAdQApAegEAlQgHACgEAIQgYgDgogpg");
	this.shape_7.setTransform(-18.3,-14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996633").s().p("AA+BIQgNgTgIgJQgDADgBACIgGgHIAOgHQAtArgBAOQgPgEgMgQgAhCA0IgLgTIgMgSIgGgOQACgHAEgJQAKgWAZgVQAsglAsAEQAXADAUATQAUAUgBAXQgBAagkASIg6AeQAHgVAigQQAmgPAJgPQgJACgjAVQgfAUgQAAQAGgLAhgRQAigUALgMQgNADgeAVQgeAUgSAGQgKgYgpgaQgUAIgFAOQgGAOAJAWQAIAUAMANIgEgDgAAOgPQAlgPAIgRQgfAPgOARg");
	this.shape_8.setTransform(-27.6,-22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E1AB2F").s().p("AgNAKQABgQAJgIQAGgCAAALQACABACgOQgGgBgHAFQgGAEgEgEQgBgMAMgFQAKAAAMANQgEAggNASQgOgDABgTg");
	this.shape_9.setTransform(-43.7,-1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#6D4201","#D27E02"],[0,1],-41.7,-18,20.9,-63.6).s().p("AgDgCQAGgDAAAFIAAAEQgCgEgEgCg");
	this.shape_10.setTransform(-42.3,-4.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C18F1C").s().p("AFzDzQgIgDgCgFIABgFQgEAAgCgCIgDALIgGALIAAgDIAAAAIgDgbIACAAIgCgGIAAAAIgBAAIAAgDQAAgbACgPQAJgjACgQQAEgbAAhMIgBgCQAOABAWAFQgWBKACB4IABAFIgBAFQADAIACAaQgKgBABgNgAFwgHQAMgaAAgkQgBghgLgXQAFgEAAgXIAAgGIAEgBQAdgHgBgSQACATgMA/QgJA5AGAjQgDADgVAAIAAAAgACkisIAGgIQAHgLAAgJQAAgGgFgKQAqAAAcgCQAKAIAAAUQAAATgNAEQglgEgmgBgAAqi2QgFgEgEAAIgEgCIgJgDQACgNgEgOQAfgCBPAEIAKAAQACAFAEAFIAAAQIAAAMIgDAGQgogBgrACIgQgLgAnCixQASgKADgdIAAgJIAAgJIgCgHIABAAQAFgVAaAJQAbAJgHANQAJgFgFgMQASATgIAqIgEAAIgLAAIgBAAQgmADgGAGIgYABIgBAAgAEsiyIAAgBQAAgGgDAAIAAAAQABggACgOQAKACAlgEQAZgDAJAMQgCAHgNAOQgLAMgBAOQgfgDgXACgAhri4QARgcgNgQQAUAGAdgCIAJABQAIAAADgCQAQABAKACQACALgMALQgKAKAGAKIgqABQggAAgLgFgAjGi1QADgFAAgIIAAgBQABgGgBgIQgBgZABgBQASgGAyANQANARgXAfIgbAAQgTAAgPgBgAGfi+QAOgNgOgcQAOACARgGQABAJAEARQACAOgHAIIgfgDgAlZi7QAJgbgCgfQASAJAkgEQArgEAPADQAKAKgBARQgCARgKAKQgugIhGAIgACRjYIAAAAIAAABg");
	this.shape_11.setTransform(1.4,20.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#07CD1B","#01984B"],[0,1],328.6,-2.8,328.6,49.4).s().p("AAAgEIAAAAIAAAJIAAgJg");
	this.shape_12.setTransform(19.5,-11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8972EB").s().p("AFaCFQAcgEAKgGIAAABIgBAKQgOAEgJAAQgJAAgFgFgAgpgkQAMgMgBgIQAIgBADALQgHANgVAOQgFgHALgKgAkIg1QAEAFADATQgBABAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgEAAAAgcgAFhgnIgEAAIgCgCIAHgPQAEgJAJgBQgGAIgEAWIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAgBQgBAAAAgBgADthEQgDgXgKgDQADgEAOAAQANABAEADQgCAwgPADQgDgBgBgYgAB+gtQACgGAAgLIgBgQIgEgJIAAgBIABgCIgBAAIABgFIAGgEIABAAIADAAIAAABIABAAIABAAIAAABIAHAVQAHAVgRALIgHgBgAEJhaQgFgPgoABQAFgKARgCQARgDANAFIgBAgQgBAUADAHIgBADIgBACIgKABQAFgdgBgMgAjwg4QAKgMAAgPIAEACQAFAEgCAFQgCAKgFAIgAgeg/QAAgFAHgHQAGgGgCgJIAJAAQAHANgGAKIAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAABIgFAFQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDAAgIgFgAFhhJQAKgKAAgEQAKAJgXAPQgDgCAGgIgAiKhkQAHADAGAOQAAAKgKAKQACgagFgLgAF8hNQgOgZgJgFQAEgEAJAIIAOANQgCAZgBAAIgBgMgAl8hQQAHg+AEAvQADAcgFAAQgDAAgGgNgAjuhwIAFAAIABABIACADQAFAGgCAIQgDgLgIgHgAl/iJQAQACgDALIAAAAQgMAAgBgNg");
	this.shape_13.setTransform(3.6,7.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AB2BPIAAAAIABAAIgBAAgAjoBGIACABIgBAAIgBgBgADoAOIAAgBIABABIgBAAgABhhPIAAABIAAAAg");
	this.shape_14.setTransform(-18.6,-11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("AiSB+IAnACQgZAPgTARIAFgigAABCZQgEgDgHgGQgLgKgIgDQAFgEAIgCQAPgDAWAGQgDALgLARIgGgDgAgoBCQgRgBgTgDIgFgBIgIgCIgMgBIgJgCIgDgBIgIgBIgDAAIAAgBIgHAAIgBgCIAEgVQAMAKATgDQAHAGAWAKIAHADIAVAJIABABgABbg0QgPgEgLgHQgKgFgEgBIgTgEIg0gBQgHAAgCgBIgVgOIAAgCIAAgBIgBAAQAKgvALgUIABABIAEABIABAAIACABIAAAAIApAIQAkAHAYAXQA5AEAQAGQAAAJgCAJQgIAggjALQgIgCgIgDg");
	this.shape_15.setTransform(-3.7,-9.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DDB477").s().p("ACXDgQgaAAgfgDIgEgCIgJAAIAFABIgEAAIgPgBIgRgCIgPgCIgBABIgDABIgNAEQgEACgJgHIAAAAIAAAAIgBgBIAAAAIgFAAIAAAAQAMgNArALIANAFIAEAAIAIAAIgwgUIgNgGQgngRgdgJQgrgNgTACQAKABAPAFQgKACgCADQgIgBgKAGQgTAKgNgDIgfgrQgQAGgOgDQAVggBUAIIAAAOQAGABABgGQACgGAFABQBAALA/AVQAmAMAmAPIAzAWQADgHgQgFQgSgGAAgJQAUgFAtACQgCAUAHAfIAHAAIABgBIAAAAIABADIgIABIgPABQgHgKgJAAIgHABIgBAAIABAAQgGADgBAGIgHAAgACwDcIgBAAIABAAgAg1DWIgDgBIgDgBIgYgLIgigSQANgFAQgJIAHgCIAKAAIAKAEQAcAKAnASIgGAEQgRAIgaADgABRCdQgNgCgHgDIABgBQBHgxAnAaQAGgGgOgFQgPgDgFgDQgQgYgBgUQgBgUgEgOQgEgNg/gBIg3gcIgigEIgGgCIgCAAIgDgBIAAAAIgHgBIgRgCIgBABQgFgBAFABQgXAogJBVQg0gBgJABQAVhuAdg6QAdg6AyAOIADAEIABACQAHAHAOAAQAKAAADgCIABADIABgCIACACQAFAEAIAAQAJAAACgFIAEAEQAIACAKAHQgCAQACAPQAKAAgCgKQgBgNADgEQAcAFAagTQAxBOgEAuQANAfAGAfIAEAOQAEAXADAcQgJgWgXgKQgZgKgZALIAjAAQAYAAACAOQgngPgSALQACALAfAAQAeAAAFANQhGgCgggGgABfgDIACAAIgBgBQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAgAhbBvIAHgqQADADAIAEQAPAIAMAAIASAAIAAAAIAqABIABABIAMAGIAoARIABAAIgNASIgHANIgCAGQhxgggYgDgAAZh3IABgDIgGgOIgCgIIACgDIABgBQACADAFAAQAJAAAAgKQAAgGgDAAQgDAAAAAFQABAEgFgBIgBgDIABgEQgBgGgEgEIgCgBQgGgFgEgGIAAgLIALgBIAEABIAKAHQAFAAABgFIAIACQAOAAABgOIgFgKIA3gKIANAAQgBAKAEAJIACAHQADAIAJANQAAADgCAEIgFADIgEAAIgGgBIAAAAIgCABIgEgBIAAADIgBABIABABIAAABQABAegHAIQgRgNgRADQAEATAagCQgCAPgSAQQgJACgIAAQgfAAgSgkgABejGIAAAKIAEABQAAAAAJgMQAAgBgBAAQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgHAHg");
	this.shape_16.setTransform(-0.6,-24.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A55927").s().p("ACOBrIAAgBQgHgKgBgEIAAgJQgWg0gagPQAJgSADgKQAGgRgEgPIAEABIgDgDIgBgBIABgBQATAAAAgPQAAgDgEgIIgBgBIgFgOIABgBIgDgKIgCgKIANAFQALA2ABA2IAAAJIAAAGIABAAQABAXAGAXIANAvIgKgEgAiQAbIANgbIAZgJIACADQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAgBIAfgHIADgFIAJgEIADgEIAMgKIASgjQACAMAOAOQAAADgEAFQgFAEAAAFIAHANIAAAIIAAABIgBACIACAKIAKAJIAAABIAAABIAAABQAAAHgHAAIgLgJQgEgDgEAAIgNACQgHAAgGgEIADAAQgJgNgSgBQgdgCgaAbQgMAMgIAOIAHgSgAgYASIABgBIACACIgCACIgBgDgAgEhYIgCAAIgCAAIgEAAQAMgMAPgBIAHABIAFAJQADAHgKAAQgKgDgOgBg");
	this.shape_17.setTransform(2.3,-35.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AkgIJQgEgLgKgRIghgsIggguQgRgpgPg2QgPg2gOgrQgOgqgLg5IgIgjQgUgZAsgpIAGgGIgCACIAPgLIABgBQAOgDARgOIANgKQgUAFgLABQgGADgLgCQgXgCgCAGIgBgBIAAgEIgEAAQgRgSgIgLQAEgfADgPIAAgCQAFgCAEgDIABgBQADACAigFIgBAAIADAAIAIgBIAAABQAKgCAVAEQARAEAKgGIgIgJQgEgGAFgCQAMABATAFQAEAHgBAKQARAIA/gFQAYgCAOAHQABgDAHAAIADAAIAAgBIAHACQAFABABACQAFADAHgBQgEAAAAgEIABgDQAGgZgPggQgOAGgKABQgLgEgBgKQgBgIAEgEIAGgFIgEABIAEgIIAAgBIADABQAAgJgVgRQgGgFgCgEQgDgCgGgLQg9AfgDAAIgHgDQgWgDgRgfQgKgRgFgKIAAAEQgcgkBBgrQA8goAqAGQAYAEAUAVQALAMAFAMQAFALAAAMQgCAQgZARQgYASAAAHQgBAKAsAhIAQhCQAJgiAAgHIAKgTIANgjQAJgOALgMQAagcAdACQASABAJANIgCABQAFAEAHAAIANgCQADAAAFADIAKAJQAHAAAAgHIAAgCIAAAAIAAgBIgJgJIgDgLIABgCIAAgBIAAgIIgHgNQAAgFAFgEQAEgFAAgDQgNgPgCgLIAMgOIAFAAIABAAIACAAQAQABAJADQAKAAgDgHIgFgJIAJgBIAEALQAAAOgOAAIgJgCQAAAFgGAAIgKgIIgEAAIgKABIAAALQAEAGAFAEIACACQAFAEAAAGIgBADIABAEQAFABAAgEQgBgFADAAQADAAAAAGQAAAKgIAAQgFAAgDgDIAAABIgDADIADAHIAFAPIgBADQAWAtAtgLQARgRADgOQgaACgEgTQARgDAQANQAIgIgBgeIgBgBIAAgBIABgBIAAgDIADAAIACAAIABAAIAFABIAFAAIAEgDQACgEAAgDQgIgNgEgIIgCgHQgDgJABgKIAHAAIACAJIADALIgBABIAGAOIAAABQAEAIAAADQAAAPgTAAIAAAAIAAAAIAAACIADADIgEgBQAEAPgGARQgDAKgJATQAbAPAVA0IAAAJQABAEAHAKIAAAAIAKAFIADAEIACAHQgHAAgGgDIADAOIABADIgBACIACAKIATBNIAAAFIAEgFIAAAAIAAAIIAAABIAAAKIAAANIABABQADAeAFArIgBACIgGAAQgHgfABgVQgsgBgUAFQAAAJARAGQARAFgEAHIgzgWQgmgPgmgNQg+gUhBgMQgEAAgCAGQgCAGgFgCIAAgNQhUgIgWAgQAPACAQgFIAeArQAOADASgKQAKgGAJAAQACgCAKgCQgQgFgJgBQATgCAqANQAdAJAoARIANAGIAvAUIgIgBIgDAAIgOgFQgrgKgMAMIAAABIAAAAIAHAAIAAAAIAAAAIAAABQAJAHAEgCIANgFIACgBIABAAIAPACIARABIAPACIAFAAIgFgCIAIABIAFACQAeACAaABIAIAAQAAgHAGgCIABAAIAHgBQAIAAAHAJIAPAAIAIgBIAAgDIAGAAIABgCIAAABQAFAFAOAAQAOgBAFgEQAKgCgKgLQASgLAVACQAXAAAJAPQAGABAwgIQAdgEAMAPQAHgDgFgEQgGgGABgEQAOAPAlgIQASAigHAWIgmgCIAAAHQgEgBgDgDQgCAGADADIgCABQAAAKgFANQgIAVACAaQAAAGAEAFQgIAXAFA6QALAAgDAIQAAAPgJADIgDAaQgYAlAGB0QACASACAPQACAPACAMIABAFIAEAAIACAEIgZAAIgEgFQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgFAAgBgEQgBgFgBgDQgDAGgDACIAAAAIgLgOQgBgHgBgEIAAgIIABgFIgBgFIAAgPIAAgGQAAgaAEgMQAFgSADgiIgBgVQgCAMgIAVQgdAzANA6IAEAMIgYAdQgvgYgQgpQgQgqgPgTQgBAKgFAHIgQATQgWAzg4A+QgNg6gXhIIgFAfIAHgBIgLALIAEA7QgQAkgeAaIABAFIgZAkQgPgFgKgMIgJgJIgHAFIgGhRQgFgtgJgUQgMAHgMAeQAGAQASAYQggBJgPAZIgFgOQABgMgDgQQgIgkABgMQgigXgEg7QgRATgSAyQgRAygOATIgEAAIgjgiQgWgWgFgYQgVAQAMAqQAOAxgJASIgFgEgAAUgRQgMANgdAUQgDBLgYCjQAYAugYAdQAPASAHAuIACAZQAFAqAcAjIAVgdIgBgHIALgLQATgUAOgbIgDgOQgHg0AWgxQAPg8AKghQABgFgFgFQgFgEACgHQAlgpASgsQgJgdgdgbQgjgbgQgOQgMAAgBADQAFgUgKgFIgCAAQgGAAgKgFIgBgBQgDALgJAKgAlOGxQAXAnASAQQgWhQA8iCQgagiAWgmQAkg+ACgJQAWhrhGgJQgJgdhJgYQgJAIgtAaIgNAHQg1AkAVA7QAUA4AOA6QANA2ARA2IAfBSIAFAJIACAAQAIANAGAFgAiKgNIgrATQguA/AQBPQA7A8gFBIQALAPANA4QAMAxAWAOQgFANAFAVQAHAaAAALQA4hFgvgrQAngzgBgiQgJgXgBgLQAJgtABgbQgDgxADgTQAbg9gKgiQghgkgWgEQAHAbgLAlQgMAuAAAMQAAAIANAoQAKAegNAUQAFgUgLgfQgMgiABgRQAMgzAEgbQAIgtgbgPQgHARgWALgAj9DVQgOAmAWAbQgdA0gFA0QAhBCAfATQAahPATgkQAPgPACgMQgMgggDgWQgLhcgdgHIAABpQAABEgLApQgEggAHhVQAGhNgLglQgdAygDAIgABnESIgCAJIgGAUIAOAqIgCADQARAgAEAlQA6g3AdhPIgCgEQABgDAAgFIgBgkIgGghIAAAAIgCgNIgBAAQgCgNgFgOIAAgBIgLgPQgEgHAAgOIABgHQgPhFAYgrQgNgJgHgJIgBgBIgGgIQgNADgMAQQgNASgKADQAQAHANAXQAPAdAHAGQgNAqgpAyQABAFAAALIgBAEIABAGIgBAAIgEAeQgCANgBAKQgDAJAAAOIAAgBIAAgCIgBgBgAh1GSQgEAFAMAHQgCgNgEAAIgCABgAGLGTQgDgagCgHIAAgGIgBgFQgBh3AVhLQgVgFgOgBIAAADQAABMgDAaQgDAQgJAkQgCAOAAAcIABACIAAAAIAAABIACAFIgCAAIADAbIABAAIAAADIAGgLIACgKQADABAEABIgBAFQABAFAIACQAAANAKABIAAAAgAD2gEQglAJgRAOQgPA5AZBNIACAGIACADIgBACIAFARIADANIADAAIAAAEIgCABQALAhgEAjQAhAdAGAsQACAOAKANQAQAVAaALIAMgPIgEgBIACgNIgDAHQgChEAbg/QAMgogKgUQAohZgGg9Qg5gkgYgYQgOAJgpALgAFsDXQAAgeAEgTIgBgEQgMASAJAjgAGkCOQgKAGgcAEQAJAKAcgKIABgKIAAgCIAAAAIAAACgAGHgNIgDABIgBAHQAAAVgEAEQALAXAAAiQAAAkgMAZQAWAAACgDQgGgjAKg5QALg+gBgTQABASgeAHgAjXAhQALgMANgMQgEgDABgOQgBgNACgGIgWgEQAFAwgFAQgAk9gfQA1AaAnAmQgIgtgJgaIgpAAIAAAAQgYAAgKAHgAE5gbIgCABQAvA1ASgNIAAgFIACgNIgBgHQgMgBAHgMQgZgEgSAAIgQABgABbgRQgIACgDAFQALAEAOAQIACACQAOgGARgXIghgBIgDAAIgLABgAi8AGQAUgPAZgPIgogCIgFAggAC7gSQgFACgEACQAIAEAMALIABABQANgDASgJQgVgJgNAAIgJABgAg0gbQgIACgGAEQAJACAKAKQAHAHAGACIAGACQALgQADgKQgPgEgMAAIgLABgAAFgmQABAIgLAMQgLALAFAHQAUgPAHgMQgDgLgHAAIgBAAgAjdgKQgDgUgEgEQAAAkAHgMgAGGglIgHAPIACABIAEAAQABAEADAAQAEgXAGgIQgJABgEAKgAC6hFQAFAKAAAGQAAAIgHAMIgGAHQAnABAkAEQAOgDAAgUQAAgUgLgIQgbADgrAAgAEEhLQALACACAXQABAYADACQAQgEABgvQgEgEgNAAIgBAAQgNAAgDAEgAA5gkIAQAMQAqgDApABIACgGIABgMIgBgPQgEgGgBgFIgLAAQhOgEgfACQAEAOgDANIAJADIAFADIABAAQADAAAFADgACfhFIAEAKIABAPQAAAMgCAGIAHAAQARgLgHgUIgHgVIAAgCIgBAAIgBAAIgDgBIgBAAIgGAFIgBAEIABAAIgBACIAAAAgAmhhfIACAHIABAKIAAAIQgDAdgTAKIAZAAQAGgGAngEIAAAAIALABIAEgBQAJgqgTgTQAFANgIAEQAGgMgbgKQgagJgEAVIgCgBIAAABgAFxgfQAAgOALgMQAOgOACgHQgJgMgaADQglAEgKgCQgCAPgBAgIAAAAQAEAAgBAGIAAAAIARgBQARAAAVACgAEthIQABANgFAcIAKgBIABgCIABgDQgDgGABgUIABggQgNgFgRACQgRACgFALIAIAAQAhAAAEANgAhcgmQARAIBEgEQgHgJALgKQALgMgDgKQgIgDgQAAQgEABgIAAIgIAAQgeACgUgHQAOARgRAbgAi1hZQgBABACAZQABAJgCAFIAAABQAAAIgCAFQAZACAjgBQAYgfgOgRQgigIgTAAQgJAAgGABgAjMglIAKABQAFgIACgJQACgGgFgDIgEgCQAAAPgKAMgAm3hVQgJAIgCARQgBATAPADQAOgSADghQgMgMgLgBQgMAGABALQAFAEAFgEQAIgFAGABQgCAOgBAAQAAgKgGAAIgBAAgAAMg4QgHAHAAAFQAMAHADgEIAFgFQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAAAQAGgLgHgNIgJAAQACAJgGAHgAGugsIAeADQAHgHgCgPQgEgRgBgJQgQAGgOgCQANAcgNANgAjXgpQALgJABgRQACgSgKgKQgQgDgqAEQgkAEgSgJQACAggJAaQAjgEAdAAQAdAAAWAEgAGFg3QgGAIADADQAXgQgKgIQAAADgKAKgAhjgsQAKgLAAgKQgGgOgHgDQAFAMgCAagAGJhZQAJAFAOAaQAAAcAEgqIgOgNQgGgFgEAAIgDABgAnLgwQAKgcgRgCQgJAgAQgCgAlYg9QAQAggFgvQgCgVgCAAQgDAAgEAkgAi/hLQACgJgFgFIgCgEIgBAAIgFAAQAIAHADALgAhdiEQgQAKgOAEIAjATIAYALIACAAIADABIALABQAagDARgJIAGgDQgngSgcgLIgLgEIgJABIgHABgAhChWIABAAIgBgBgAighjIAAAAIADABIALACIAJACIAYAEQAUADARAAIAAAAIAAAAIgWgKIgGgDQgXgKgGgFQgTADgNgKIgDAUIAAADIAEAAIAEAAgAmphqQAEADADAFIgBgEQAAgFgDAAIgDABgAlOhqQADgKgQgDQABANAMAAgACyiHQgFgOgfAAQgeAAgDgKQATgLAnAOQgCgOgZABIgiAAQAYgLAZAKQAXAKAKAVQgDgbgFgXIgDgOQgHgfgNgfQAFgwgyhNQgaASgbgFQgEAFACANQABAKgKAAQgBgPABgQQgJgIgJgBIgDgEQgDAFgIAAQgJAAgFgEIgBgCIgBgCIgBABQgCACgMAAQgOAAgHgHIgBgCIgDgFQgygOgdA7QgdA6gUBvQAIgCA1ACQAIhWAYgoQgFgBAFAAIAAAAIARACIAHAAIAAABIADABIADAAIAGABIAiAFIA3AdQA/ABAEANQAEAOABAUQABAUAPAYQAFADAQADQANAFgFAFQgngahIAyIgBAAQAHADANADQAhAGBGACIAAAAgAA8itIgHAMIgGAIIAAABIABAAQAFgCAUgNIAAAAIAAgBIADgCIAHgBIAHgIIABAAQAKgGAKgDIAPgDIAAgDIgEgLQgFgIgFgHQgdAXgXAYgAhhi+QAZAEBwAgIADgGIAHgNIANgSIgBgBIgpgRIgMgGIgBAAIgqgBIAAAAIgSAAQgMAAgPgIQgHgEgEgDIgHApgAjUjRQAMAPAPAEQAAgOgsgrIgOAHIAFAHQACgCADgCQAIAIANAUgAAOjeQAFAAAKAGQALAHAPAEQAHADAJACQAjgLAIggQACgJAAgJQgQgGg6gEQgXgXgjgHIgqgIIgBAAIgCgBIgBAAIgEgCIAAAAQgMAUgJAvIAAAAIAAAAIAAABIAAABIAWAPQACABAGAAIA2ABIAAAAIARAEgAljkIQAnApAZADQAEgIAHgCQAEglgqgeQgNgJgIAAQgSAAACAqgAlRjiQgMgOgIgUQgJgWAFgOQAGgPAUgHQApAZAKAaQATgGAegVQAegWANgCQgLAMgjATQggATgHAKQARAAAfgUQAjgVAJgCQgJAPgmAQQgiAPgIAVIA7gdQAjgTACgaQABgYgUgUQgUgTgXgCQgtgEgsAlQgZAVgKAVQgEAJgCAJIAFANIAMASIAMATIAEAEIAAAAgAAiEbIAJghQgYgiAig2QgGAUAAA0QAAA0gIAaQgKgJAFgUgACUEsIAAgHQAIgXAAgKQgUgYAAgHQAAgFALgEIAXgLIgKgeQAAgcAHAAQAIAAgFAcQAAADAOAbQAAAFgjAQQACAOAIAFQAHAFAAAHQAAASgIAMQAAADAEAJQgCAEgDAAQgIAAgBgHgAlYDXQAOg1gRgRQAUgYgRg4QgQg4AUgXQABAEgFAwQgCAmATAPQABAZgOAdQANAWgIAwQgHAyAFANQgTgOAMgxgAEOB5QACgVAJgJIgSgOQgBgOAIgbQAIgYgFgMQAdAKggA1QAHAWANAGQgMAfADAaQgOgEADgXgAA4AAQAMBegSAbQgGhfAMgagAjYlJQgHARglAOQAOgQAegPgABZkwQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABABIgCAAgAitlLIgDgMIAAgCIAPAYQgHgCgFgIgAhTmnIAFAAQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgCgDgABYnpIAAgKIAIgHQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgIAMgBAAIgEgBg");
	this.shape_18.setTransform(0,5.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#0230E3","#0099FF"],[0,1],98.3,40.5,98.3,-6.8).s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(18.3,-47.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DDB477").s().p("ACXD4QgagBgfgCIgEgCIgJgBIAFACIgEAAIgPgCIgRgBIgPgCIgBAAIgDABIgNAFQgEACgJgHIAAgBIAAAAIgBAAIAAAAIgFAAIAAgBQAMgMArAKIANAFIAEAAIAIABIgwgUIgNgGQgngRgdgJQgrgNgTACQAKABAPAFQgKACgCACQgIAAgKAGQgTAKgNgDIgfgrQgQAFgOgCQAVggBUAIIAAANQAGACABgGQACgGAFAAQBAAMA/AUQAmANAmAPIAzAWQADgHgQgFQgSgGAAgJQAUgFAtABQgCAVAHAfIAHAAIABgCIAAABIABADIgIABIgPAAQgHgJgJAAIgHABIgBAAIABAAQgGACgBAHIgHAAgACwD0IgBAAIABAAgAg1DtIgDgBIgDAAIgYgLIgigTQANgEAQgKIAHgBIAKgBIAKAEQAcALAnASIgGADQgRAJgaADgABRC1QgNgDgHgDIABAAQBHgyAnAaQAGgFgOgFQgPgDgFgDQgQgYgBgUQgBgUgEgOQgEgNg/gBIg3gdIgigFIgGgBIgCAAIgDgBIAAgBIgHAAIgRgCIgBAAQgFAAAFABQgXAogJBWQg0gCgJACQAVhvAdg5QAdg7AyAOIADAFIABACQAHAHAOAAQAKAAADgCIABADIABgCIACACQAFAEAIAAQAJAAACgFIAEAEQAIABAKAIQgCAQACAPQAKAAgCgKQgBgNADgFQAcAFAagSQAxBMgEAwQANAfAGAfIAEAOQAEAXADAbQgJgVgXgKQgZgKgZALIAjAAQAYgBACAOQgngOgSALQACAKAfAAQAeAAAFAOQhGgCgggGgABfAUIACAAIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAgAhbCGIAHgpQADADAIAEQAPAIAMAAIASAAIAAAAIAqABIABAAIAMAGIAoARIABABIgNASIgHANIgCAGQhxgggYgEgAAZhfIABgDIgGgPIgCgHIACgDIABgBQACADAFAAQAJAAAAgKQAAgGgDAAQgDAAAAAFQABAEgFgBIgBgEIABgDQgBgGgEgEIgCgCQgGgEgEgGIAAgLIALgBIAEAAIAKAIQAFAAABgFIAIACIAAAAQAOAAABgOQgBgDgGgMIgFgLIgDgEIADAAQACgDAQgHQACgCADgJIAAgBIgBgCIAHgBIAHAAQAHgBAAgBIAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIgDgEIAAgDQAFABAFAGIgEABQARADAIAWQgIgKgQACQgQACgBAPIAAAAQABABAAAAQAAAAABAAQABAAAAAAQABAAABgBIAIgFQALgIAKAEQAEAEAHACIgBAEQgDANAFALIACAHIAEAHIAAABIAIANQAAADgCAEIgFADIgEAAIgGgBIAAAAIgCAAIgEAAIAAADIgBABIABABIAAABQABAegHAIQgRgNgRADQAEATAagCQgCAOgSARQgJACgIAAQgfAAgSgkgAB1izIgLABIgJABIgEABIABABQADACAIAAIABAAQAVAAABgEIAAgBIgBgCIgBgBIgJACg");
	this.shape_20.setTransform(-0.6,-26.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("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gaIgpAAIAAAAQgYAAgKAHgAE5AdIgCABQAvA2ASgNIAAgFIACgOIgBgHQgMgBAHgMQgZgEgSAAIgQABgABbAnQgIACgDAFQALAEAOARIACACQAOgGARgYIghgBIgDAAIgLABgAi8A/QAUgQAZgPIgogCIgFAhgAC7AmQgFACgEACQAIAEAMAMIABABQANgEASgJQgVgJgNAAIgJABgAg0AdQgIACgGAEQAJACAKAKQAHAHAGADIAGACQALgRADgKQgPgEgMAAIgLABgAAFASQABAIgLAMQgLALAFAHQAUgPAHgMQgDgLgHAAIgBAAgAjdAuQgDgUgEgEQAAAlAHgNgAGGATIgHAPIACABIAEAAQABAEADAAQAEgXAGgIQgJABgEAKgAC6gMQAFAKAAAFQAAAIgHAMIgGAHQAnABAkAEQAOgDAAgUQAAgTgLgIQgbADgrAAgAEEgSQALACACAWQABAYADACQAQgEABguQgEgEgNAAIgBAAQgNAAgDAEgAA5AUIAQAMQAqgDApABIACgGIABgMIgBgOQgEgGgBgFIgLAAQhOgEgfACQAEAOgDAMIAJADIAFADIABAAQADAAAFADgACfgMIAEAKIABAOQAAAMgCAGIAHAAQARgLgHgTIgHgVIAAgCIgBAAIgBAAIgDgBIgBAAIgGAFIgBAEIABAAIgBACIAAAAgAmhgmIACAHIABAKIAAAIQgDAcgTAKIAZAAQAGgGAngEIAAAAIALABIAEgBQAJgpgTgTQAFANgIAEQAGgMgbgKQgagJgEAVIgCgBIAAABgAFxAZQAAgOALgLQAOgOACgHQgJgMgaADQglAEgKgCQgCAPgBAfIAAAAQAEAAgBAGIAAAAIARgBQARAAAVACgAEtgPQABANgFAbIAKgBIABgCIABgDQgDgGABgTIABggQgNgFgRACQgRACgFALIAIAAQAhAAAEANgAhcASQARAIBEgEQgHgJALgKQALgLgDgKQgIgDgQAAQgEABgIAAIgIAAQgeACgUgHQAOARgRAagAi1ggQgBABACAZQABAIgCAFIAAABQAAAIgCAFQAZACAjgBQAYgegOgRQgigIgTAAQgJAAgGABgAjMATIAKABQAFgIACgJQACgFgFgDIgEgCQAAAOgKAMgAm3gcQgJAIgCARQgBASAPADQAOgSADggQgMgMgLgBQgMAGAB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gCABQAFAEAHAAIANgCQADAAAFADIAKAJQAHAAAAgHIAAgCIAAAAIAAgBIgJgJIgDgLIABgCIAAgBIAAgIIgHgNQAAgFAFgEQAEgFAAgDQgPgQAAgMQAAgMAKAAIAHAAIABAAIACAAQAQABAJADQAKAAgDgHIgEgHIgHgNQgDgGAAgDQAAgIARgCIgGAAQgFAAgFgFIAAgBIgSgKQgCABgBAQQADAGgDADQgGAFgeAAQAHASAAANQAAAHgEACIgXALIAGALQAAALgXAHQgWAHAAAGIACAIQAAAIgEAAQgCAAgEgRQAAgIAXgJQAWgJAAgEQgGgGAAgHQAAgFAOgEQANgEAAgFQgHgZAAgIQAAgEACgBQAJgJAEAFQAGAHAMgGQADgCAAgHIgBgLQAAgIAIAAQAKAAAKAGIAFADIABAAQAEAAAAAGIAQgBIABAAIgBgFQAAgHARgCQgHABgEgEIgBgDIgBAAIgKgMQgGAEgKAAQgKAAgJgEIgGgFQgHAAgHAJQgGAJgHAAIgIgCIgIAXQgGAOgTAIQAFAHAAAHQAAAXgXgEIADAFIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgHgKQAAgFAVgFQACgBAAgIQgFgGAAgJQAAgFAEgCQAFgFAIACIAAgDIAJgOIALgbQADAAAJAEQACAAAIgIQAHgJAKAAQAEAAAFAEQAGAEAKAAQAOAAABgEQAJAAAFAOIABAAIAFAEQADAFADgDIACgBQABgGAEAAQAIAAAEAFIAFgEQAIgGALAAQAMAAADAIIACAMQAEAEAJAEQAGADAAAGQAAAEgKAPIAQAKQACADAAAHQAAADgGAMQAAACAHADQAIAEAAADIgDAMQAAAKAFANQAAADgHARIACAIQAAADgHAGQgGAFAAAFQAAACAHAGIgBADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgHAAgCgFQgCgDAAgEQAAgKAMgJQgCgNAEgFQAEgGAAgHQgFgHAAgNIACgLQgOgGAAgHQAGgGAAgJQAAgHgJgDQgJgDAAgGQAAgCAKgRQgIgCgKgNQgEgQgBAAQgMAAgIAGIgFAEIABABIAAABIAHgBQAJAIADAGQACAEAEAVIAAAAIABAJIABADIAAABIADALIgBABIABAAIACAFIADAJIAAABQAEAIAAADQAAAPgTAAIAAAAIAAAAIAAACIADADIgEgBQAEAPgGARgAAPmHIgDADIADAHIAFAPIgBADQAWAtAtgLQARgRADgOQgaACgEgTQARgDAQANQAIgIgBgeIgBgBIAAgBIABgBIAAgDIADAAIACAAIABAAIAFABIAFAAIAEgDQACgEAAgDIgIgNIAAgBIgEgHIgCgHQgEgLACgNIABgEQgGgCgFgEQgKgEgLAIIgIAFQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBIAAAAQAAgPAQgCQAQgCAIAKQgIgWgRgDIAFgBQgFgGgFgBIgBADIADAEQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIAAABQAAABgHABIgHAAIgGABIAAACIABABQgEAJgCACQgPAHgDADIgCAAIACAEIAGALQAGAMAAADQAAAOgOAAIAAAAIgJgCQAAAFgGAAIgKgIIgEAAIgKABIAAALQAEAGAFAEIACACQAFAEAAAGIgBADIABAEQAFABAAgEQgBgFADAAQADAAAAAGQAAAKgIAAQgFAAgDgDIAAABgAAiFUIAJghQgYgiAig2QgGAUAAA0QAAA0gIAaQgKgJAFgUgACUFlIAAgHQAIgXAAgKQgUgYAAgHQAAgFALgEIAXgLIgKgeQAAgcAHAAQAIAAgFAcQAAADAOAbQAAAFgjAQQACAOAIAFQAHAFAAAHQAAASgIAMQAAADAEAJQgCAEgDAAQgIAAgBgHgAlYEQQAOg1gRgRQAUgYgRg4QgQg4AUgYQABAEgFAxQgCAmATAPQABAZgOAdQANAWgIAwQgHAyAFANQgTgOAMgxgAEOCyQACgVAJgJIgSgOQgBgOAIgbQAIgYgFgNQAdALggA1QAHAWANAGQgMAfADAaQgOgEADgXgAA4A4QAMBfgSAbQgGhfAMgbgAjYkQQgHARglAOQAOgQAegPgABZj3QAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABABIgCAAgABkm5QgJAAgCgCIgCgBIAEgBIAJgBIALgBIAJgCIABABIABACIAAABQgBAEgVAAg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A55927").s().p("ACYCeIAAgBQgHgJgBgFIAAgIQgWg0gagQQAJgTADgKQAGgQgEgPIAEABIgDgEIgBgBIABAAQATAAAAgPQAAgCgEgJIgBAAIgCgJIgCgFIgBgBIABAAIgDgLIgBgBIAAgDIgBgJIgBAAQgDgVgCgEQgDgGgKgIIgGABIAAgBIgBgCIAFgEQAIgFAMAAQABAAAEAQQAKAMAIACQgKARAAADQAAAGAJADQAJADAAAHQAAAJgGAFQAAAHAOAGIgCAMQAAALAFAHQAAAHgEAGQgEAFACAOQgMAJAAAKQAAADACADQACAGAHAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgCQgHgHAAgCQAAgEAGgGQAHgGAAgCIgCgJQAHgRAAgDQgFgMAAgJIADgMQAAgEgIgDQgHgEAAgCQAGgMAAgCQAAgIgCgCIgQgLQAKgOAAgEQAAgHgGgCQgJgEgEgFIgCgMQgDgIgMAAQgLAAgIAHIgFAEQgFgGgHAAQgEAAgBAGIgCABQgDADgDgFIgFgEIgBAAQgGgOgIAAQgBAFgOAAQgKAAgGgEQgFgFgEAAQgJAAgIAJQgIAJgCAAQgJgFgDAAIgLAbIgJAOIAAADQgIgCgFAFQgEADAAAEQAAAKAFAFQAAAJgCABQgVAEAAAGIAHAKQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgDIgDgGQAXAEAAgXQAAgGgFgIQATgIAGgNIAIgYIAIADQAHAAAHgJQAHgJAGAAIAGAEQAJAFAKAAQAKAAAGgFIAKANIABAAIABACQADAEAIAAQgRABAAAHIABAFIgBAAIgQACQAAgHgEAAIgCABIgEgDQgKgHgKAAQgHAAAAAIIABALQAAAHgDACQgNAHgGgIQgEgFgJAJQgCACAAAEQAAAHAHAZQAAAFgNAEQgOAEAAAGQAAAHAGAGQAAACgWAJQgXAJAAAJQAEARACAAQAEAAAAgIIgCgIQAAgGAWgHQAXgHAAgLIgGgLIAXgLQAEgCAAgGQAAgOgHgSQAfABAFgGQADgCgDgGQABgQACgBIASAJIAAACQAFAFAFAAIAGAAQgRABAAAJQAAACADAGIAHAOIAEAHQADAHgKAAQgKgEgPAAIgCgBIgCABIgFgBQgLAAAAANQAAAMAPAPQAAADgDAEQgFAFAAAFIAHAMIAAAJIAAABIgBACIACALIAJAJIAAAAIAAABIAAABQAAAHgHAAIgKgJQgEgDgEAAIgNADQgHAAgGgFIADAAQgJgNgSgCQgdgCgaAdQgVAWgKAdQAAANgKADQgTgGAAgKQAIgTAAgFQAAgFgIgEIgBAAQgGgEAAgIQAAgMADgGQAEgHAKgDQAJgDAAgDIgIgVQAAgSAWgGIAWgHQgJgFAAgIQAAgGAIgCQAKgEAMABIAHgFQANgJAAgIIgJgRQAKgEAFgFQAFgFAAgFIgEgKIgDgHIABgCQABgCAHAAIAJABQAKgCAAgFIgEgLIgBgJQAAgFAZAAIAHAAQAgABAAgFIgDgHIAAgIIAKAAQAPADAVAIQAFAAAJgOQAKAAAIAWIACgBQACACAFAAQAIAAATgDQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAABIgCAKIAAAFQACAFAIAAIANgDIAAAAQAHAAAAAHIAAAFIgBAEQABAGAHACIAEABQAJACAAAEIgDAJIgEALQAAAIAKACIABABIAAAAIAAAAQAIACAAAIQAAAHgKARQAAADAFAIIgGARQAAACAFAKQAAADgLAXQAAADAIAGQAIAGAAAEQAAACgIAIIgEADQAAACAMAKIABABQAKAMAAANQAAADgHAIIgCABQAAADAFAGIABABIAEAHIAAAEQgCAagTAAIgQgIgAgOBGIABgBIACACIgCABIgBgCg");
	this.shape_22.setTransform(1.3,-40.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DDB477").s().p("ACXD4QgagBgfgCIgEgCIgJgBIAFACIgEAAIgPgCIgRgBIgPgCIgBAAIgDABIgNAFQgEACgJgHIAAgBIAAAAIgBAAIAAAAIgFAAIAAgBQAMgMArAKIANAFIAEAAIAIABIgwgUIgNgGQgngRgdgJQgrgNgTACQAKABAPAFQgKACgCACQgIAAgKAGQgTAKgNgDIgfgrQgQAFgOgCQAVggBUAIIAAANQAGACABgGQACgGAFAAQBAAMA/AUQAmANAmAPIAzAWQADgHgQgFQgSgGAAgJQAUgFAtABQgCAVAHAfIAHAAIABgCIAAABIABADIgIABIgPAAQgHgJgJAAIgHABIgBAAIABAAQgGACgBAHIgHAAgACwD0IgBAAIABAAgAg1DtIgDgBIgDAAIgYgLIgigTQANgEAQgKIAHgBIAKgBIAKAEQAcALAnASIgGADQgRAJgaADgABRC1QgNgDgHgDIABAAQBHgyAnAaQAGgFgOgFQgPgDgFgDQgQgYgBgUQgBgUgEgOQgEgNg/gBIg3gdIgigFIgGgBIgCAAIgDgBIAAgBIgHAAIgRgCIgBAAQgFAAAFABQgXAogJBWQg0gCgJACQAVhvAdg5QAdg7AyAOIADAFIABACQAHAHAOAAQAKAAADgCIABADIABgCIACACQAFAEAIAAQAJAAACgFIAEAEQAIABAKAIQgCAQACAPQAKAAgCgKQgBgNADgFQAcAFAagSQAxBMgEAwQANAfAGAfIAEAOQAEAXADAbQgJgVgXgKQgZgKgZALIAjAAQAYgBACAOQgngOgSALQACAKAfAAQAeAAAFAOQhGgCgggGgABfAUIACAAIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAgAhbCGIAHgpQADADAIAEQAPAIAMAAIASAAIAAAAIAqABIABAAIAMAGIAoARIABABIgNASIgHANIgCAGQhxgggYgEgAAZhfIABgDIgGgPIgCgHIACgDIABgBQACADAFAAQAJAAAAgKQAAgGgDAAQgDAAAAAFQABAEgFgBIgBgEIABgDQgBgGgEgEIgCgCQgGgEgEgGIAAgLIALgBIAEAAIAKAIIACAAQADAAAAgDIABgBIAAgBIAFABIADABQAHAAADgDIACgBQACgDABgFIAAgCIAAAAQgBgDgGgMIgFgLIgDgEIADAAQACgDAQgHQACgCADgJIAAgBIgBgCIAHgBIAHAAQAHgBAAgBIAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIgDgEIAAgDQAFABAFAGIgEABQARADAIAWQgIgKgQACQgMABgEAKIgBAGIAAAAQABABAAAAQAAAAABAAQABAAAAAAQABAAABgBIAIgFIAAAAQALgIAKAEQAEAEAHACIgBADIgBAFIAAAJIAAACIABACIACAHIACAHIAEAHIAAABIAIANQAAADgCAEIgFADIgEAAIgGgBIAAAAIgCAAIgEAAIAAABIAAACIgBABIABABIAAABQABAegHAIQgRgNgRADQAEATAagCQgCAOgSARQgJACgIAAQgfAAgSgkgABhixIgDACIAAABIAAAKIAEABIAHgKIACgCIgBgDIgBgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgEAEg");
	this.shape_23.setTransform(-0.6,-26.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("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gaIgpAAIAAAAQgYAAgKAHgAE5AdIgCABQAvA2ASgNIAAgFIACgOIgBgHQgMgBAHgMQgZgEgSAAIgQABgABbAnQgIACgDAFQALAEAOARIACACQAOgGARgYIghgBIgDAAIgLABgAi8A/QAUgQAZgPIgogCIgFAhgAC7AmQgFACgEACQAIAEAMAMIABABQANgEASgJQgVgJgNAAIgJABgAg0AdQgIACgGAEQAJACAKAKQAHAHAGADIAGACQALgRADgKQgPgEgMAAIgLABgAAFASQABAIgLAMQgLALAFAHQAUgPAHgMQgDgLgHAAIgBAAgAjdAuQgDgUgEgEQAAAlAHgNgAGGATIgHAPIACABIAEAAQABAEADAAQAEgXAGgIQgJABgEAKgAC6gMQAFAKAAAFQAAAIgHAMIgGAHQAnABAkAEQAOgDAAgUQAAgTgLgIQgbADgrAAgAEEgSQALACACAWQABAYADACQAQgEABguQgEgEgNAAIgBAAQgNAAgDAEgAA5AUIAQAMQAqgDApABIACgGIABgMIgBgOQgEgGgBgFIgLAAQhOgEgfACQAEAOgDAMIAJADIAFADIABAAQADAAAFADgACfgMIAEAKIABAOQAAAMgCAGIAHAAQARgLgHgTIgHgVIAAgCIgBAAIgBAAIgDgBIgBAAIgGAFIgBAEIABAAIgBACIAAAAgAmhgmIACAHIABAKIAAAIQgDAcgTAKIAZAAQAGgGAngEIAAAAIALABIAEgBQAJgpgTgTQAFANgIAEQAGgMgbgKQgagJgEAVIgCgBIAAABgAFxAZQAAgOALgLQAOgOACgHQgJgMgaADQglAEgKgCQgCAPgBAfIAAAAQAEAAgBAGIAAAAIARgBQARAAAVACgAEtgPQABANgFAbIAKgBIABgCIABgDQgDgGABgTIABggQgNgFgRACQgRACgFALIAIAAQAhAAAEANgAhcASQARAIBEgEQgHgJALgKQALgLgDgKQgIgDgQAAQgEABgIAAIgIAAQgeACgUgHQAOARgRAagAi1ggQgBABACAZQABAIgCAFIAAABQAAAIgCAFQAZACAjgBQAYgegOgRQgigIgTAAQgJAAgGABgAjMATIAKABQAFgIACgJQACgFgFgDIgEgCQAAAOgKAMgAm3gcQgJAIgCARQgBASAPADQAOgSADggQgMgMgLgBQgMAGAB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gCABQAFAEAHAAIANgCQADAAAFADIAKAJQAHAAAAgHIAAgCIAAAAIAAgBIgJgJIgDgLIABgCIAAgBIAAgIIgHgNQAAgFAFgEQAEgFAAgDQgPgQAAgMQAAgMAKAAIAHAAIABAAIACAAIAKABQAJABAGACQAKAAgDgHIgBgDIgGgLIgDgGIgBAAQgDgGAAgDQAAgIARgCIgGAAQgFAAgFgFIAAgBIgSgKQgCABgBAQQADAGgDADQgGAFgeAAQAHASAAANQAAAHgEACIgXALIAGALQAAALgXAHQgWAHAAAGIACAIQAAAIgEAAQgCAAgEgRQAAgIAXgJQAWgJAAgEQgGgGAAgHQAAgFAOgEQANgEAAgFQgHgZAAgIQAAgEACgBQAJgJAEAFQAGAHAMgGQADgCAAgHIgBgLQAAgIAIAAQAKAAAKAGIAFADIABAAQAEAAAAAGIAQgBIABAAIgBgFQAAgHARgCQgHABgEgEIgBgDIgBAAIgKgMQgGAEgKAAQgKAAgJgEIgGgFQgHAAgHAJQgGAJgHAAIgIgCIgIAXQgGAOgTAIQAFAHAAAHQAAAXgXgEIADAFIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgHgKQAAgFAVgFQACgBAAgIQgFgGAAgJQAAgFAEgCQAFgFAIACIAAgDIAJgOIALgbQADAAAJAEQACAAAIgIQAHgJAKAAQAEAAAFAEQAGAEAKAAQAOAAABgEQAJAAAFAOIABAAIAFAEQADAFADgDIACgBQABgGAEAAQAIAAAEAFIAFgEQAIgGALAAQAMAAADAIIACAMQAEAEAJAEQAGADAAAGQAAAEgKAPIAQAKQACADAAAHQAAADgGAMQAAACAHADQAIAEAAADIgDAMQAAAKAFANQAAADgHARIACAIQAAADgHAGQgGAFAAAFQAAACAHAGIgBADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgHAAgCgFQgCgDAAgEQAAgKAMgJQgCgNAEgFQAEgGAAgHQgFgHAAgNIACgLQgJgEgDgFIgCgEIAEgEQACgFAAgGIAAgEIgBAAIAAgBIgCgCIAAAAIgFgDIAAAAIgBAAQgFgCgCgCQgCgCAAgDQAAgCAKgRQgIgCgKgNQgEgQgBAAQgMAAgIAGIgFAEIABABIAAABIAHgBQAJAIADAGQACAEAEAUIAAAAIABAHIABAGIAAABIADALIgBABIABAAIACAFIADAJIAAABQAEAIAAADIAAADQgCAMgRAAIAAAAIAAAAIAAACIADADIgEgBQAEAPgGARgAAPmHIgDADIADAHIAFAPIgBADQAWAtAtgLQARgRADgOQgaACgEgTQARgDAQANQAIgIgBgeIgBgBIAAgBIABgBIAAgCIAAgBIADAAIACAAIABAAIAFABIAFAAIAEgDQACgEAAgDIgIgNIAAgBIgEgHIgCgHIgCgHIAAgCIAAgCIAAgJIAAgFIABgDQgGgCgFgEQgKgEgLAIIAAAAIgIAFQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBIAAAAIABgGQADgKAMgBQAQgCAIAKQgIgWgRgDIAFgBQgFgGgFgBIgBADIADAEQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIAAABQAAABgHABIgHAAIgGABIAAACIABABQgEAJgCACQgPAHgDADIgCAAIACAEIAGALQAGAMAAADIAAAAIAAACQAAAFgDADIgCABQgDADgGAAIgEgBIgFgBIAAABIAAABQgBADgDAAIgCAAIgKgIIgEAAIgKABIAAALQAEAGAFAEIACACQAFAEAAAGIgBADIABAEQAFABAAgEQgBgFADAAQADAAAAAGQAAAKgIAAQgFAAgDgDIAAABgAAiFUIAJghQgYgiAig2QgGAUAAA0QAAA0gIAaQgKgJAFgUgACUFlIAAgHQAIgXAAgKQgUgYAAgHQAAgFALgEIAXgLIgKgeQAAgcAHAAQAIAAgFAcQAAADAOAbQAAAFgjAQQACAOAIAFQAHAFAAAHQAAASgIAMQAAADAEAJQgCAEgDAAQgIAAgBgHgAlYEQQAOg1gRgRQAUgYgRg4QgQg4AUgYQABAEgFAxQgCAmATAPQABAZgOAdQANAWgIAwQgHAyAFANQgTgOAMgxgAEOCyQACgVAJgJIgSgOQgBgOAIgbQAIgYgFgNQAdALggA1QAHAWANAGQgMAfADAaQgOgEADgXgAA4A4QAMBfgSAbQgGhfAMgbgAjYkQQgHARglAOQAOgQAegPgABZj3QAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABABIgCAAgABYmwIAAgKIABgBIACgCIAFgEQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIAAABIABADIgBACIgIAKIgEgBg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A55927").s().p("ACYCeIAAgBQgHgJgBgFIAAgIQgWg0gagQQAJgTADgKQAGgQgEgPIAEABIgDgEIgBgBIABAAQARAAACgLIAAgEQAAgCgEgJIgBAAIgCgJIgCgFIgBgBIABAAIgDgLIgBgBIgBgHIgBgGIABAAQgEgUgCgEQgDgGgKgIIgGABIAAgBIgBgCIAFgEQAIgFAMAAQABAAAEAQQAKAMAIACQgKARAAADQAAACACACQACADAFACIAAAAIABAAIAEACIAAAAIACACIABACIAAAAIABAEQAAAGgDAEIgDAEIACAFQADAEAJAEIgCAMQAAALAFAHQAAAHgEAGQgEAFACAOQgMAJAAAKQAAADACADQACAGAHAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgCQgHgHAAgCQAAgEAGgGQAHgGAAgCIgCgJQAHgRAAgDQgFgMAAgJIADgMQAAgEgIgDQgHgEAAgCQAGgMAAgCQAAgIgCgCIgQgLQAKgOAAgEQAAgHgGgCQgJgEgEgFIgCgMQgDgIgMAAQgLAAgIAHIgFAEQgFgGgHAAQgEAAgBAGIgCABQgDADgDgFIgFgEIgBAAQgGgOgIAAQgBAFgOAAQgKAAgGgEQgFgFgEAAQgJAAgIAJQgIAJgCAAQgJgFgDAAIgLAbIgJAOIAAADQgIgCgFAFQgEADAAAEQAAAKAFAFQAAAJgCABQgVAEAAAGIAHAKQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgDIgDgGQAXAEAAgXQAAgGgFgIQATgIAGgNIAIgYIAIADQAHAAAHgJQAHgJAGAAIAGAEQAJAFAKAAQAKAAAGgFIAKANIABAAIABACQADAEAIAAQgRABAAAHIABAFIgBAAIgQACQAAgHgEAAIgCABIgEgDQgKgHgKAAQgHAAAAAIIABALQAAAHgDACQgNAHgGgIQgEgFgJAJQgCACAAAEQAAAHAHAZQAAAFgNAEQgOAEAAAGQAAAHAGAGQAAACgWAJQgXAJAAAJQAEARACAAQAEAAAAgIIgCgIQAAgGAWgHQAXgHAAgLIgGgLIAXgLQAEgCAAgGQAAgOgHgSQAfABAFgGQADgCgDgGQABgQACgBIASAJIAAACQAFAFAFAAIAGAAQgRABAAAJQAAACADAGIAAABIADAGIAGALIACADQADAHgKAAQgGgDgJgBIgKAAIgCgBIgCABIgFgBQgLAAAAANQAAAMAPAPQAAADgDAEQgFAFAAAFIAHAMIAAAJIAAABIgBACIACALIAJAJIAAAAIAAABIAAABQAAAHgHAAIgKgJQgEgDgEAAIgNADQgHAAgGgFIADAAQgJgNgSgCQgdgCgaAdQgVAWgKAdQAAANgKADQgTgGAAgKQAIgTAAgFQAAgFgIgEIgBAAQgGgEAAgIQAAgMADgGQAEgHAKgDQAJgDAAgDIgIgVQAAgSAWgGIAWgHQgJgFAAgIQAAgGAIgCQAKgEAMABIAHgFQANgJAAgIIgJgRQAKgEAFgFQAFgFAAgFIgEgKIgDgHIABgCQABgCAHAAIAJABQAKgCAAgFIgEgLIgBgJQAAgFAZAAIAHAAQAgABAAgFIgDgHIAAgIIAKAAQAPADAVAIQAFAAAJgOQAKAAAIAWIACgBQACACAFAAQAIAAATgDQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAABIgCAKIAAAFQACAFAIAAIANgDIAAAAQAHAAAAAHIAAAFIgBAEQABAGAHACIAEABQAJACAAAEIgDAJIgEALQAAAIAKACIABABIAAAAIAAAAQAIACAAAIQAAAHgKARQAAADAFAIIgGARQAAACAFAKQAAADgLAXQAAADAIAGQAIAGAAAEQAAACgIAIIgEADQAAACAMAKIABABQAKAMAAANQAAADgHAIIgCABQAAADAFAGIABABIAEAHIAAAEQgCAagTAAIgQgIgAgOBGIABgBIACACIgCABIgBgCg");
	this.shape_25.setTransform(1.3,-40.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DDB477").s().p("ACXD4QgagBgfgCIgEgCIgJgBIAFACIgEAAIgPgCIgRgBIgPgCIgBAAIgDABIgNAFQgEACgJgHIAAgBIAAAAIgBAAIAAAAIgFAAIAAgBQAMgMArAKIANAFIAEAAIAIABIgwgUIgNgGQgngRgdgJQgrgNgTACQAKABAPAFQgKACgCACQgIAAgKAGQgTAKgNgDIgfgrQgQAFgOgCQAVggBUAIIAAANQAGACABgGQACgGAFAAQBAAMA/AUQAmANAmAPIAzAWQADgHgQgFQgSgGAAgJQAUgFAtABQgCAVAHAfIAHAAIABgCIAAABIABADIgIABIgPAAQgHgJgJAAIgHABIgBAAIABAAQgGACgBAHIgHAAgACwD0IgBAAIABAAgAg1DtIgDgBIgDAAIgYgLIgigTQANgEAQgKIAHgBIAKgBIAKAEQAcALAnASIgGADQgRAJgaADgABRC1QgNgDgHgDIABAAQBHgyAnAaQAGgFgOgFQgPgDgFgDQgQgYgBgUQgBgUgEgOQgEgNg/gBIg3gdIgigFIgGgBIgCAAIgDgBIAAgBIgHAAIgRgCIgBAAQgFAAAFABQgXAogJBWQg0gCgJACQAVhvAdg5QAdg7AyAOIADAFIABACQAHAHAOAAQAKAAADgCIABADIABgCIACACQAFAEAIAAQAJAAACgFIAEAEQAIABAKAIQgCAQACAPQAKAAgCgKQgBgNADgFQAcAFAagSQAxBMgEAwQANAfAGAfIAEAOQAEAXADAbQgJgVgXgKQgZgKgZALIAjAAQAYgBACAOQgngOgSALQACAKAfAAQAeAAAFAOQhGgCgggGgABfAUIACAAIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAgAhbCGIAHgpQADADAIAEQAPAIAMAAIASAAIAAAAIAqABIABAAIAMAGIAoARIABABIgNASIgHANIgCAGQhxgggYgEgAAZhfIABgDIgGgPIgCgHIACgDIABgBQACADAFAAQAJAAAAgKQAAgGgDAAQgDAAAAAFQABAEgFgBIgBgEIABgDQgBgGgEgEIgCgCQgGgEgEgGIAAgLIALgBIAEAAIAKAIQAFAAABgFIAIACIAAAAQAOAAABgOQgBgDgGgMIgFgLIgDgEIADAAQACgDAQgHQACgCADgJIAAgBIgBgCIAHgBIAHAAQAHgBAAgBIAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIgDgEIAAgDQAFABAFAGIgEABQARADAIAWQgIgKgQACQgQACgBAPIAAAAQABABAAAAQAAAAABAAQABAAAAAAQABAAABgBIAIgFQALgIAKAEQAEAEAHACIgBAEQgDANAFALIACAHIAEAHIAAABIAIANQAAADgCAEIgFADIgEAAIgGgBIAAAAIgCAAIgEAAIAAADIgBABIABABIAAABQABAegHAIQgRgNgRADQAEATAagCQgCAOgSARQgJACgIAAQgfAAgSgkgAB1izQgYACAAABQAAADANAAQAVAAABgEIAAgBIgBgCIgBgBIgJACg");
	this.shape_26.setTransform(-0.6,-26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A55927").s().p("ACYCeIAAgBQgHgJgBgFIAAgIQgWg0gagQQAJgTADgKQAGgQgEgPIAEABIgDgEIgBgBIABAAQATAAAAgPQAAgCgEgJIgBAAIgCgJIgDgGIABAAIgDgLIgCgNQgEgVgCgEQgDgGgKgIIgGABIAAgBIgBgCIAFgEQAIgFAMAAQABAAAEAQQAKAMAIACQgKARAAADQAAAGAJADQAJADAAAHQAAAJgGAFQAAAHAOAGIgCAMQAAALAFAHQAAAHgEAGQgEAFACAOQgMAJAAAKQAAADACADQACAGAHAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgCQgHgHAAgCQAAgEAGgGQAHgGAAgCIgCgJQAHgRAAgDQgFgMAAgJIADgMQAAgEgIgDQgHgEAAgCQAGgMAAgCQAAgIgCgCIgQgLQAKgOAAgEQAAgHgGgCQgJgEgEgFIgCgMQgDgIgMAAQgLAAgIAHIgFAEQgFgGgHAAQgEAAgBAGIgCABQgDADgDgFIgFgEIgBAAQgGgOgIAAQgBAFgOAAQgKAAgGgEQgFgFgEAAQgJAAgIAJQgIAJgCAAQgJgFgDAAIgLAbIgJAOIAAADQgIgCgFAFQgEADAAAEQAAAKAFAFQAAAJgCABQgVAEAAAGIAHAKQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgDIgDgGQAXAEAAgXQAAgGgFgIQATgIAGgNIAIgYIAIADQAHAAAHgJQAHgJAGAAIAGAEQAJAFAKAAQAKAAAGgFIAKANIABAAIABACQADAEAIAAQgRABAAAHIABAFIgBAAIgQACQAAgHgEAAIgCABIgEgDQgKgHgKAAQgHAAAAAIIABALQAAAHgDACQgNAHgGgIQgEgFgJAJQgCACAAAEQAAAHAHAZQAAAFgNAEQgOAEAAAGQAAAHAGAGQAAACgWAJQgXAJAAAJQAEARACAAQAEAAAAgIIgCgIQAAgGAWgHQAXgHAAgLIgGgLIAXgLQAEgCAAgGQAAgOgHgSQAfABAFgGQADgCgDgGQABgQACgBIASAJIAAACQAFAFAFAAIAGAAQgRABAAAJQAAACADAGIAHAOIAEAHQADAHgKAAQgKgEgPAAIgCgBIgCABIgFgBQgLAAAAANQAAAMAPAPQAAADgDAEQgFAFAAAFIAHAMIAAAJIAAABIgBACIACALIAJAJIAAAAIAAABIAAABQAAAHgHAAIgKgJQgEgDgEAAIgNADQgHAAgGgFIADAAQgJgNgSgCQgdgCgaAdQgVAWgKAdQAAANgKADQgTgGAAgKQAIgTAAgFQAAgFgIgEIgBAAQgGgEAAgIQAAgMADgGQAEgHAKgDQAJgDAAgDIgIgVQAAgSAWgGIAWgHQgJgFAAgIQAAgGAIgCQAKgEAMABIAHgFQANgJAAgIIgJgRQAKgEAFgFQAFgFAAgFIgEgKIgDgHIABgCQABgCAHAAIAJABQAKgCAAgFIgEgLIgBgJQAAgFAZAAIAHAAQAgABAAgFIgDgHIAAgIIAKAAQAPADAVAIQAFAAAJgOQAKAAAIAWIACgBQACACAFAAQAIAAATgDQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAABIgCAKIAAAFQACAFAIAAIANgDIAAAAQAHAAAAAHIAAAFIgBAEQABAGAHACIAEABQAJACAAAEIgDAJIgEALQAAAIAKACIABABIAAAAIAAAAQAIACAAAIQAAAHgKARQAAADAFAIIgGARQAAACAFAKQAAADgLAXQAAADAIAGQAIAGAAAEQAAACgIAIIgEADQAAACAMAKIABABQAKAMAAANQAAADgHAIIgCABQAAADAFAGIABABIAEAHIAAAEQgCAagTAAIgQgIgAgOBGIABgBIACACIgCABIgBgCg");
	this.shape_27.setTransform(1.3,-40.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("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gaIgpAAIAAAAQgYAAgKAHgAE5AdIgCABQAvA2ASgNIAAgFIACgOIgBgHQgMgBAHgMQgZgEgSAAIgQABgABbAnQgIACgDAFQALAEAOARIACACQAOgGARgYIghgBIgDAAIgLABgAi8A/QAUgQAZgPIgogCIgFAhgAC7AmQgFACgEACQAIAEAMAMIABABQANgEASgJQgVgJgNAAIgJABgAg0AdQgIACgGAEQAJACAKAKQAHAHAGADIAGACQALgRADgKQgPgEgMAAIgLABgAAFASQABAIgLAMQgLALAFAHQAUgPAHgMQgDgLgHAAIgBAAgAjdAuQgDgUgEgEQAAAlAHgNgAGGATIgHAPIACABIAEAAQABAEADAAQAEgXAGgIQgJABgEAKgAC6gMQAFAKAAAFQAAAIgHAMIgGAHQAnABAkAEQAOgDAAgUQAAgTgLgIQgbADgrAAgAEEgSQALACACAWQABAYADACQAQgEABguQgEgEgNAAIgBAAQgNAAgDAEgAA5AUIAQAMQAqgDApABIACgGIABgMIgBgOQgEgGgBgFIgLAAQhOgEgfACQAEAOgDAMIAJADIAFADIABAAQADAAAFADgACfgMIAEAKIABAOQAAAMgCAGIAHAAQARgLgHgTIgHgVIAAgCIgBAAIgBAAIgDgBIgBAAIgGAFIgBAEIABAAIgBACIAAAAgAmhgmIACAHIABAKIAAAIQgDAcgTAKIAZAAQAGgGAngEIAAAAIALABIAEgBQAJgpgTgTQAFANgIAEQAGgMgbgKQgagJgEAVIgCgBIAAABgAFxAZQAAgOALgLQAOgOACgHQgJgMgaADQglAEgKgCQgCAPgBAfIAAAAQAEAAgBAGIAAAAIARgBQARAAAVACgAEtgPQABANgFAbIAKgBIABgCIABgDQgDgGABgTIABggQgNgFgRACQgRACgFALIAIAAQAhAAAEANgAhcASQARAIBEgEQgHgJALgKQALgLgDgKQgIgDgQAAQgEABgIAAIgIAAQgeACgUgHQAOARgRAagAi1ggQgBABACAZQABAIgCAFIAAABQAAAIgCAFQAZACAjgBQAYgegOgRQgigIgTAAQgJAAgGABgAjMATIAKABQAFgIACgJQACgFgFgDIgEgCQAAAOgKAMgAm3gcQgJAIgCARQgBASAPADQAOgSADggQgMgMgLgBQgMAGAB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gCABQAFAEAHAAIANgCQADAAAFADIAKAJQAHAAAAgHIAAgCIAAAAIAAgBIgJgJIgDgLIABgCIAAgBIAAgIIgHgNQAAgFAFgEQAEgFAAgDQgPgQAAgMQAAgMAKAAIAHAAIABAAIACAAQAQABAJADQAKAAgDgHIgEgHIgHgNQgDgGAAgDQAAgIARgCIgGAAQgFAAgFgFIAAgBIgSgKQgCABgBAQQADAGgDADQgGAFgeAAQAHASAAANQAAAHgEACIgXALIAGALQAAALgXAHQgWAHAAAGIACAIQAAAIgEAAQgCAAgEgRQAAgIAXgJQAWgJAAgEQgGgGAAgHQAAgFAOgEQANgEAAgFQgHgZAAgIQAAgEACgBQAJgJAEAFQAGAHAMgGQADgCAAgHIgBgLQAAgIAIAAQAKAAAKAGIAFADIABAAQAEAAAAAGIAQgBIABAAIgBgFQAAgHARgCQgHABgEgEIgBgDIgBAAIgKgMQgGAEgKAAQgKAAgJgEIgGgFQgHAAgHAJQgGAJgHAAIgIgCIgIAXQgGAOgTAIQAFAHAAAHQAAAXgXgEIADAFIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgHgKQAAgFAVgFQACgBAAgIQgFgGAAgJQAAgFAEgCQAFgFAIACIAAgDIAJgOIALgbQADAAAJAEQACAAAIgIQAHgJAKAAQAEAAAFAEQAGAEAKAAQAOAAABgEQAJAAAFAOIABAAIAFAEQADAFADgDIACgBQABgGAEAAQAIAAAEAFIAFgEQAIgGALAAQAMAAADAIIACAMQAEAEAJAEQAGADAAAGQAAAEgKAPIAQAKQACADAAAHQAAADgGAMQAAACAHADQAIAEAAADIgDAMQAAAKAFANQAAADgHARIACAIQAAADgHAGQgGAFAAAFQAAACAHAGIgBADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgHAAgCgFQgCgDAAgEQAAgKAMgJQgCgNAEgFQAEgGAAgHQgFgHAAgNIACgLQgOgGAAgHQAGgGAAgJQAAgHgJgDQgJgDAAgGQAAgCAKgRQgIgCgKgNQgEgQgBAAQgMAAgIAGIgFAEIABABIAAABIAHgBQAJAIADAGQACAEAEAVIACANIADALIgBABIADAFIADAJIAAABQAEAIAAADQAAAPgTAAIAAAAIAAAAIAAACIADADIgEgBQAEAPgGARgAAPmHIgDADIADAHIAFAPIgBADQAWAtAtgLQARgRADgOQgaACgEgTQARgDAQANQAIgIgBgeIgBgBIAAgBIABgBIAAgDIADAAIACAAIABAAIAFABIAFAAIAEgDQACgEAAgDIgIgNIAAgBIgEgHIgCgHQgEgLACgNIABgEQgGgCgFgEQgKgEgLAIIgIAFQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBIAAAAQAAgPAQgCQAQgCAIAKQgIgWgRgDIAFgBQgFgGgFgBIgBADIADAEQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIAAABQAAABgHABIgHAAIgGABIAAACIABABQgEAJgCACQgPAHgDADIgCAAIACAEIAGALQAGAMAAADQAAAOgOAAIAAAAIgJgCQAAAFgGAAIgKgIIgEAAIgKABIAAALQAEAGAFAEIACACQAFAEAAAGIgBADIABAEQAFABAAgEQgBgFADAAQADAAAAAGQAAAKgIAAQgFAAgDgDIAAABgAAiFUIAJghQgYgiAig2QgGAUAAA0QAAA0gIAaQgKgJAFgUgACUFlIAAgHQAIgXAAgKQgUgYAAgHQAAgFALgEIAXgLIgKgeQAAgcAHAAQAIAAgFAcQAAADAOAbQAAAFgjAQQACAOAIAFQAHAFAAAHQAAASgIAMQAAADAEAJQgCAEgDAAQgIAAgBgHgAlYEQQAOg1gRgRQAUgYgRg4QgQg4AUgYQABAEgFAxQgCAmATAPQABAZgOAdQANAWgIAwQgHAyAFANQgTgOAMgxgAEOCyQACgVAJgJIgSgOQgBgOAIgbQAIgYgFgNQAdALggA1QAHAWANAGQgMAfADAaQgOgEADgXgAA4A4QAMBfgSAbQgGhfAMgbgAjYkQQgHARglAOQAOgQAegPgABZj3QAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABABIgCAAgABXm8QAAgBAYgCIAJgCIABABIABACIAAABQgBAEgVAAQgNAAAAgDg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DDB477").s().p("ACXD4QgagBgfgCIgEgCIgJgBIAFACIgEAAIgPgCIgRgBIgPgCIgBAAIgDABIgNAFQgEACgJgHIAAgBIAAAAIgBAAIAAAAIgFAAIAAgBQAMgMArAKIANAFIAEAAIAIABIgwgUIgNgGQgngRgdgJQgrgNgTACQAKABAPAFQgKACgCACQgIAAgKAGQgTAKgNgDIgfgrQgQAFgOgCQAVggBUAIIAAANQAGACABgGQACgGAFAAQBAAMA/AUQAmANAmAPIAzAWQADgHgQgFQgSgGAAgJQAUgFAtABQgCAVAHAfIAHAAIABgCIAAABIABADIgIABIgPAAQgHgJgJAAIgHABIgBAAIABAAQgGACgBAHIgHAAgACwD0IgBAAIABAAgAg1DtIgDgBIgDAAIgYgLIgigTQANgEAQgKIAHgBIAKgBIAKAEQAcALAnASIgGADQgRAJgaADgABRC1QgNgDgHgDIABAAQBHgyAnAaQAGgFgOgFQgPgDgFgDQgQgYgBgUQgBgUgEgOQgEgNg/gBIg3gdIgigFIgGgBIgCAAIgDgBIAAgBIgHAAIgRgCIgBAAQgFAAAFABQgXAogJBWQg0gCgJACQAVhvAdg5QAdg7AyAOIADAFIABACQAHAHAOAAQAKAAADgCIABADIABgCIACACQAFAEAIAAQAJAAACgFIAEAEQAIABAKAIQgCAQACAPQAKAAgCgKQgBgNADgFQAcAFAagSQAxBMgEAwQANAfAGAfIAEAOQAEAXADAbQgJgVgXgKQgZgKgZALIAjAAQAYgBACAOQgngOgSALQACAKAfAAQAeAAAFAOQhGgCgggGgABfAUIACAAIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAgAhbCGIAHgpQADADAIAEQAPAIAMAAIASAAIAAAAIAqABIABAAIAMAGIAoARIABABIgNASIgHANIgCAGQhxgggYgEgAAZhfIABgDIgGgPIgCgHIACgDIABgBQACADAFAAQAJAAAAgKQAAgGgDAAQgDAAAAAFQABAEgFgBIgBgEIABgDQgBgGgEgEIgCgCQgGgEgEgGIAAgLIALgBIAEAAIAKAIQAFAAABgFIAIACQAOAAABgOQAAgEgMgWIgDgEIADAAQACgDAQgHQACgCADgJIAAgBIgBgCIAHgBIAHAAQAHgBAAgBIAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIgDgEIAAgDQAFABAFAGIgEABQARADAIAWQgIgKgQACQgQACgBAPQADADAKgIQALgIAKAEQAEAEAHACQgEAPAFANIACAHQADAIAJANQAAADgCAEIgFADIgEAAIgGgBIAAAAIgCAAIgEAAIAAADIgBABIABABIAAABQABAegHAIQgRgNgRADQAEATAagCQgCAOgSARQgJACgIAAQgfAAgSgkgABeiuIAAAKIAEABQAAAAAJgMQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgHAHg");
	this.shape_29.setTransform(-0.6,-26.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A55927").s().p("ACYCeIAAgBQgHgJgBgFIAAgIQgWg0gagQQAJgTADgKQAGgQgEgPIAEABIgDgEIgBgBIABAAQATAAAAgPQAAgCgEgJIgBAAIgFgPIABAAIgDgLQgFghgDgFQgDgGgKgIIgGABIAAgBIgBgCIAFgEQAIgFAMAAQABAAAEAQQAKAMAIACQgKARAAADQAAAGAJADQAJADAAAHQAAAJgGAFQAAAHAOAGIgCAMQAAALAFAHQAAAHgEAGQgEAFACAOQgMAJAAAKQAAADACADQACAGAHAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgCQgHgHAAgCQAAgEAGgGQAHgGAAgCIgCgJQAHgRAAgDQgFgMAAgJIADgMQAAgEgIgDQgHgEAAgCQAGgMAAgCQAAgIgCgCIgQgLQAKgOAAgEQAAgHgGgCQgJgEgEgFIgCgMQgDgIgMAAQgLAAgIAHIgFAEQgFgGgHAAQgEAAgBAGIgCABQgDADgDgFIgFgEIgBAAQgGgOgIAAQgBAFgOAAQgKAAgGgEQgFgFgEAAQgJAAgIAJQgIAJgCAAQgJgFgDAAIgLAbIgJAOIAAADQgIgCgFAFQgEADAAAEQAAAKAFAFQAAAJgCABQgVAEAAAGIAHAKQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgDIgDgGQAXAEAAgXQAAgGgFgIQATgIAGgNIAIgYIAIADQAHAAAHgJQAHgJAGAAIAGAEQAJAFAKAAQAKAAAGgFIAKANIABAAIABACQADAEAIAAQgRABAAAHIABAFIgBAAIgQACQAAgHgEAAIgCABIgEgDQgKgHgKAAQgHAAAAAIIABALQAAAHgDACQgNAHgGgIQgEgFgJAJQgCACAAAEQAAAHAHAZQAAAFgNAEQgOAEAAAGQAAAHAGAGQAAACgWAJQgXAJAAAJQAEARACAAQAEAAAAgIIgCgIQAAgGAWgHQAXgHAAgLIgGgLIAXgLQAEgCAAgGQAAgOgHgSQAfABAFgGQADgCgDgGQABgQACgBIASAJIAAACQAFAFAFAAIAGAAQgRABAAAJQAAACADAGIALAVQADAHgKAAQgKgEgPAAIgCgBIgCABIgFgBQgLAAAAANQAAAMAPAPQAAADgDAEQgFAFAAAFIAHAMIAAAJIAAABIgBACIACALIAJAJIAAAAIAAABIAAABQAAAHgHAAIgKgJQgEgDgEAAIgNADQgHAAgGgFIADAAQgJgNgSgCQgdgCgaAdQgVAWgKAdQAAANgKADQgTgGAAgKQAIgTAAgFQAAgFgIgEIgBAAQgGgEAAgIQAAgMADgGQAEgHAKgDQAJgDAAgDIgIgVQAAgSAWgGIAWgHQgJgFAAgIQAAgGAIgCQAKgEAMABIAHgFQANgJAAgIIgJgRQAKgEAFgFQAFgFAAgFIgEgKIgDgHIABgCQABgCAHAAIAJABQAKgCAAgFIgEgLIgBgJQAAgFAZAAIAHAAQAgABAAgFIgDgHIAAgIIAKAAQAPADAVAIQAFAAAJgOQAKAAAIAWIACgBQACACAFAAQAIAAATgDQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAABIgCAKIAAAFQACAFAIAAIANgDIAAAAQAHAAAAAHIAAAFIgBAEQABAGAHACIAEABQAJACAAAEIgDAJIgEALQAAAIAKACIABABIAAAAIAAAAQAIACAAAIQAAAHgKARQAAADAFAIIgGARQAAACAFAKQAAADgLAXQAAADAIAGQAIAGAAAEQAAACgIAIIgEADQAAACAMAKIABABQAKAMAAANQAAADgHAIIgCABQAAADAFAGIABABIAEAHIAAAEQgCAagTAAIgQgIgAgOBGIABgBIACACIgCABIgBgCg");
	this.shape_30.setTransform(1.3,-40.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("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gaIgpAAIAAAAQgYAAgKAHgAE5AdIgCABQAvA2ASgNIAAgFIACgOIgBgHQgMgBAHgMQgZgEgSAAIgQABgABbAnQgIACgDAFQALAEAOARIACACQAOgGARgYIghgBIgDAAIgLABgAi8A/QAUgQAZgPIgogCIgFAhgAC7AmQgFACgEACQAIAEAMAMIABABQANgEASgJQgVgJgNAAIgJABgAg0AdQgIACgGAEQAJACAKAKQAHAHAGADIAGACQALgRADgKQgPgEgMAAIgLABgAAFASQABAIgLAMQgLALAFAHQAUgPAHgMQgDgLgHAAIgBAAgAjdAuQgDgUgEgEQAAAlAHgNgAGGATIgHAPIACABIAEAAQABAEADAAQAEgXAGgIQgJABgEAKgAC6gMQAFAKAAAFQAAAIgHAMIgGAHQAnABAkAEQAOgDAAgUQAAgTgLgIQgbADgrAAgAEEgSQALACACAWQABAYADACQAQgEABguQgEgEgNAAIgBAAQgNAAgDAEgAA5AUIAQAMQAqgDApABIACgGIABgMIgBgOQgEgGgBgFIgLAAQhOgEgfACQAEAOgDAMIAJADIAFADIABAAQADAAAFADgACfgMIAEAKIABAOQAAAMgCAGIAHAAQARgLgHgTIgHgVIAAgCIgBAAIgBAAIgDgBIgBAAIgGAFIgBAEIABAAIgBACIAAAAgAmhgmIACAHIABAKIAAAIQgDAcgTAKIAZAAQAGgGAngEIAAAAIALABIAEgBQAJgpgTgTQAFANgIAEQAGgMgbgKQgagJgEAVIgCgBIAAABgAFxAZQAAgOALgLQAOgOACgHQgJgMgaADQglAEgKgCQgCAPgBAfIAAAAQAEAAgBAGIAAAAIARgBQARAAAVACgAEtgPQABANgFAbIAKgBIABgCIABgDQgDgGABgTIABggQgNgFgRACQgRACgFALIAIAAQAhAAAEANgAhcASQARAIBEgEQgHgJALgKQALgLgDgKQgIgDgQAAQgEABgIAAIgIAAQgeACgUgHQAOARgRAagAi1ggQgBABACAZQABAIgCAFIAAABQAAAIgCAFQAZACAjgBQAYgegOgRQgigIgTAAQgJAAgGABgAjMATIAKABQAFgIACgJQACgFgFgDIgEgCQAAAOgKAMgAm3gcQgJAIgCARQgBASAPADQAOgSADggQgMgMgLgBQgMAGAB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gCABQAFAEAHAAIANgCQADAAAFADIAKAJQAHAAAAgHIAAgCIAAAAIAAgBIgJgJIgDgLIABgCIAAgBIAAgIIgHgNQAAgFAFgEQAEgFAAgDQgPgQAAgMQAAgMAKAAIAHAAIABAAIACAAQAQABAJADQAKAAgDgHIgLgUQgDgGAAgDQAAgIARgCIgGAAQgFAAgFgFIAAgBIgSgKQgCABgBAQQADAGgDADQgGAFgeAAQAHASAAANQAAAHgEACIgXALIAGALQAAALgXAHQgWAHAAAGIACAIQAAAIgEAAQgCAAgEgRQAAgIAXgJQAWgJAAgEQgGgGAAgHQAAgFAOgEQANgEAAgFQgHgZAAgIQAAgEACgBQAJgJAEAFQAGAHAMgGQADgCAAgHIgBgLQAAgIAIAAQAKAAAKAGIAFADIABAAQAEAAAAAGIAQgBIABAAIgBgFQAAgHARgCQgHABgEgEIgBgDIgBAAIgKgMQgGAEgKAAQgKAAgJgEIgGgFQgHAAgHAJQgGAJgHAAIgIgCIgIAXQgGAOgTAIQAFAHAAAHQAAAXgXgEIADAFIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgHgKQAAgFAVgFQACgBAAgIQgFgGAAgJQAAgFAEgCQAFgFAIACIAAgDIAJgOIALgbQADAAAJAEQACAAAIgIQAHgJAKAAQAEAAAFAEQAGAEAKAAQAOAAABgEQAJAAAFAOIABAAIAFAEQADAFADgDIACgBQABgGAEAAQAIAAAEAFIAFgEQAIgGALAAQAMAAADAIIACAMQAEAEAJAEQAGADAAAGQAAAEgKAPIAQAKQACADAAAHQAAADgGAMQAAACAHADQAIAEAAADIgDAMQAAAKAFANQAAADgHARIACAIQAAADgHAGQgGAFAAAFQAAACAHAGIgBADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgHAAgCgFQgCgDAAgEQAAgKAMgJQgCgNAEgFQAEgGAAgHQgFgHAAgNIACgLQgOgGAAgHQAGgGAAgJQAAgHgJgDQgJgDAAgGQAAgCAKgRQgIgCgKgNQgEgQgBAAQgMAAgIAGIgFAEIABABIAAABIAHgBQAJAIADAGQADAFAFAhIADALIgBABIAGAOIAAABQAEAIAAADQAAAPgTAAIAAAAIAAAAIAAACIADADIgEgBQAEAPgGARgAAPmHIgDADIADAHIAFAPIgBADQAWAtAtgLQARgRADgOQgaACgEgTQARgDAQANQAIgIgBgeIgBgBIAAgBIABgBIAAgDIADAAIACAAIABAAIAFABIAFAAIAEgDQACgEAAgDQgIgNgEgIIgCgHQgFgNAEgPQgGgCgFgEQgKgEgLAIQgJAIgDgDQAAgPAQgCQAQgCAIAKQgIgWgRgDIAFgBQgFgGgFgBIgBADIADAEQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIAAABQAAABgHABIgHAAIgGABIAAACIABABQgEAJgCACQgPAHgDADIgCAAIACAEQAMAWAAAEQAAAOgOAAIgJgCQAAAFgGAAIgKgIIgEAAIgKABIAAALQAEAGAFAEIACACQAFAEAAAGIgBADIABAEQAFABAAgEQgBgFADAAQADAAAAAGQAAAKgIAAQgFAAgDgDIAAABgAAiFUIAJghQgYgiAig2QgGAUAAA0QAAA0gIAaQgKgJAFgUgACUFlIAAgHQAIgXAAgKQgUgYAAgHQAAgFALgEIAXgLIgKgeQAAgcAHAAQAIAAgFAcQAAADAOAbQAAAFgjAQQACAOAIAFQAHAFAAAHQAAASgIAMQAAADAEAJQgCAEgDAAQgIAAgBgHgAlYEQQAOg1gRgRQAUgYgRg4QgQg4AUgYQABAEgFAxQgCAmATAPQABAZgOAdQANAWgIAwQgHAyAFANQgTgOAMgxgAEOCyQACgVAJgJIgSgOQgBgOAIgbQAIgYgFgNQAdALggA1QAHAWANAGQgMAfADAaQgOgEADgXgAA4A4QAMBfgSAbQgGhfAMgbgAjYkQQgHARglAOQAOgQAegPgABZj3QAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABABIgCAAgABYmwIAAgKIAIgHQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgIAMgBAAIgEgBg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#05A514","#006633"],[0,1],-21.4,9.5,4.9,2.4).s().p("AgBAAIADgCIgDAFg");
	this.shape_32.setTransform(-21.8,-11.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D29960").s().p("AC4BDIAAAAIAAAAgAiqgSQghg1AyAFQAZADARAKQALAHAHAMIAFAHIgEAOIgqADQgQgDgUgFg");
	this.shape_33.setTransform(-19.2,-9.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#996633").s().p("AgxBaIgTgLIgUgKIgMgIQgCgJgBgJQgCgZALgdQAGgQAIgNQASgfAdgNQAVgJAaAGQAbAHALAVQAJATgMAaIgGANIgCACIgiA0IAAgGQACgSAGgPIAJgOIAIgJQARgaAAgOQgGAGgUAkIgBADQgIANgHAKIgEAFIgKAKIABgIQAEgMAKgTIADgFQAUgjAEgPQgKAIgPAiIgHANQgLAWgKAMQgWgRgwgCQgOAQADAQQACAPATAPQARANARAGIgFgBgAgNgJQAYgfgCgSQgSAcgEAVgABQAvIgogRIgBAGIgJgEIAJgNIAkAMQARAEAMAMQgGACgGAAQgGAAgGgCg");
	this.shape_34.setTransform(-28.4,-18.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DDB477").s().p("ACVD4QgagBgegCIgFgCIgIgBIAFACIgEAAIgPgCIgSgBIgPgCIgBAAIgCABIgNAFQgEACgJgHIAAgBIAAAAIgBAAIAAAAIgGAAIAAgBQAMgMArAKIAOAFIADAAIAIABIgvgUIgNgGQgogRgdgJQgqgNgTACQAJABAQAFQgKACgCACQgJAAgKAGQgSAKgOgDIgMgSIgSgXIgGAEQgKAHgLAAIABgCQgCgBABgFQAAgGANgJQAMgIAEAAIABAAQAMgGAPACQAUgBAZACIAAANQAFACACgGQACgGAEAAQBBAMA/AUQAmANAlAPIAzAWQAEgHgRgFQgRgGAAgJQAUgFAsABQgBAVAHAfIAGAAIACgCIAAABIABADIgIABIgPAAQgHgJgJAAIgHABIgBAAIAAAAQgFACgBAHIgIAAgACvD0IgBAAIABAAgAg2DtIgEgBIgCAAIgYgLIgjgTQAOgEAQgKIAHgBIAJgBIALAEQAcALAnASIgFADQgSAJgaADgABPC1QgNgDgHgDIABAAQBIgyAnAaQAFgFgNgFQgPgDgGgDQgPgYgBgUQgBgUgEgOQgEgNg/gBIg2gdIgjgFIgGgBIgCAAIgEgBIAAgBIgHAAIgRgCIAAAAQgFAAAFABQgXAogJBWIgxgBIgMABIAFgZQAThdAZgyQAdg7AyAOIADAFIACACQAHAHANAAQALAAACgCIACADIABgCIACACQAFAEAIAAQAIAAADgFIADAEQAJABAJAIQgBAQABAPQAKAAgBgKQgCgNAEgFQAbAFAbgSQAxBMgFAwQANAfAHAfIAEAOQAEAXADAbQgJgVgYgKQgZgKgYALIAiAAQAZgBACAOQgngOgSALQACAKAfAAQAeAAAFAOQhGgCghgGgABeAUIABAAIgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABABAAgAhdCGIAHgpQAEADAIAEQAOAIANAAIARAAIABAAIAqABIABAAIALAGIApARIABABIgNASIgHANIgDAGQhwgggZgEgAAYhfIAAgDIgFgPIgDgHIADgDIABgBQACADAFAAQAIAAAAgKQABgGgDAAQgDAAAAAFQABAEgGgBIAAgEIAAgDQAAgGgEgEIgCgCQgGgEgEgGIAAgLIALgBIADAAIALAIQAFAAABgFIAIACQAOAAAAgOQAAgEgMgWIgCgEIACAAQADgDAPgHQACgCAEgJIAAgBIgBgCIAHgBIAGAAQAIgBAAgBIgBgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgDgEIABgDQAFABAFAGIgEABQAQADAJAWQgJgKgPACQgRACAAAPQADADAKgIQAKgIALAEQAEAEAGACQgEAPAGANIACAHQADAIAJANQAAADgDAEIgEADIgFAAIgFgBIAAAAIgDAAIgDAAIAAADIgBABIABABIAAABQABAegHAIQgRgNgRADQAEATAagCQgDAOgRARQgJACgIAAQggAAgRgkgABdiuIAAAKIADABQABAAAIgMQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAQAAAAgBAAIgHAHg");
	this.shape_35.setTransform(-0.5,-26.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("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ALQAAAEgKACIgJAAQgGAAgCACIgBABIAEAHIADAKQAAAFgFAFQgFAFgKAFIAJAQQAAAIgNAKIgHAEQgMAAgKADQgIADAAAFQAAAJAJAFIgWAHQgWAGAAATIAIAVQAAACgJADQgKAEgEAHQgDAFAAAMQAAAJAGADIABABQAIADAAAGQAAAEgIATQAAAKATAGQAKgCAAgOQAKgdAVgWQAagcAdACQASABAJANIgCABQAFAEAHAAIANgCQADAAAFADIAKAJQAHAAAAgHIAAgCIAAAAIAAgBIgJgJIgDgLIABgCIAAgBIAAgIIgHgNQAAgFAFgEQAEgFAAgDQgPgQAAgMQAAgMAKAAIAHAAIABAAIACAAQAQABAJADQAKAAgDgHIgLgUQgDgGAAgDQAAgIARgCIgGAAQgFAAgFgFIAAgBIgSgKQgCABgBAQQADAGgDADQgGAFgeAAQAHASAAANQAAAHgEACIgXALIAGALQAAALgXAHQgWAHAAAGIACAIQAAAIgEAAQgCAAgEgRQAAgIAXgJQAWgJAAgEQgGgGAAgHQAAgFAOgEQANgEAAgFQgHgZAAgIQAAgEACgBQAJgJAEAFQAGAHAMgGQADgCAAgHIgBgLQAAgIAIAAQAKAAAKAGIAFADIABAAQAEAAAAAGIAQgBIABAAIgBgFQAAgHARgCQgHABgEgEIgBgDIgBAAIgKgMQgGAEgKAAQgKAAgJgEIgGgFQgHAAgHAJQgGAJgHAAIgIgCIgIAXQgGAOgTAIQAFAHAAAHQAAAXgXgEIADAFIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgHgKQAAgFAVgFQACgBAAgIQgFgGAAgJQAAgFAEgCQAFgFAIACIAAgDIAJgOIALgbQADAAAJAEQACAAAIgIQAHgJAKAAQAEAAAFAEQAGAEAKAAQAOAAABgEQAJAAAFAOIABAAIAFAEQADAFADgDIACgBQABgGAEAAQAIAAAEAFIAFgEQAIgGALAAQAMAAADAIIACAMQAEAEAJAEQAGADAAAGQAAAEgKAPIAQAKQACADAAAHQAAADgGAMQAAACAHADQAIAEAAADIgDAMQAAAKAFANQAAADgHARIACAIQAAADgHAGQgGAFAAAFQAAACAHAGIgBADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgHAAgCgFQgCgDAAgEQAAgKAMgJQgCgNAEgFQAEgGAAgHQgFgHAAgNIACgLQgOgGAAgHQAGgGAAgJQAAgHgJgDQgJgDAAgGQAAgCAKgRQgIgCgKgNQgEgQgBAAQgMAAgIAGIgFAEIABABIAAABIAHgBQAJAIADAGQADAFAFAhIADALIgBABIAGAOIAAABQAEAIAAADQAAAPgTAAIAAAAIAAAAIAAACIADADIgEgBQAEAPgGARgAAPmHIgDADIADAHIAFAPIgBADQAWAtAtgLQARgRADgOQgaACgEgTQARgDAQANQAIgIgBgeIgBgBIAAgBIABgBIAAgDIADAAIACAAIABAAIAFABIAFAAIAEgDQACgEAAgDQgIgNgEgIIgCgHQgFgNAEgPQgGgCgFgEQgKgEgLAIQgJAIgDgDQAAgPAQgCQAQgCAIAKQgIgWgRgDIAFgBQgFgGgFgBIgBADIADAEQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIAAABQAAABgHABIgHAAIgGABIAAACIABABQgEAJgCACQgPAHgDADIgCAAIACAEQAMAWAAAEQAAAOgOAAIgJgCQAAAFgGAAIgKgIIgEAAIgKABIAAALQAEAGAFAEIACACQAFAEAAAGIgBADIABAEQAFABAAgEQgBgFADAAQADAAAAAGQAAAKgIAAQgFAAgDgDIAAABgAAiFUIAJghQgYgiAig2QgGAUAAA0QAAA0gIAaQgKgJAFgUgACUFlIAAgHQAIgXAAgKQgUgYAAgHQAAgFALgEIAXgLIgKgeQAAgcAHAAQAIAAgFAcQAAADAOAbQAAAFgjAQQACAOAIAFQAHAFAAAHQAAASgIAMQAAADAEAJQgCAEgDAAQgIAAgBgHgAlYEQQAOg1gRgRQAUgYgRg4QgQg4AUgYQABAEgFAxQgCAmATAPQABAZgOAdQANAWgIAwQgHAyAFANQgTgOAMgxgAEOCyQACgVAJgJIgSgOQgBgOAIgbQAIgYgFgNQAdALggA1QAHAWANAGQgMAfADAaQgOgEADgXgAA4A4QAMBfgSAbQgGhfAMgbgAkRjyQACATgZAfQAEgVATgdgABZj3QAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABABIgCAAgABYmwIAAgKIAIgHQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgIAMgBAAIgEgBg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DDB477").s().p("ACVD4QgagBgegCIgFgCIgIgBIAFACIgEAAIgPgCIgSgBIgPgCIgBAAIgCABIgNAFQgEACgJgHIAAgBIAAAAIgBAAIAAAAIgGAAIAAgBQAMgMArAKIAOAFIADAAIAIABIgvgUIgNgGQgogRgdgJQgqgNgTACQAJABAQAFQgKACgCACQgJAAgKAGQgSAKgOgDIgMgSIgSgXIgGAEQgKAHgLAAIABgCQgCgBABgFQAAgGANgJQAMgIAEAAIABAAQAMgGAPACQAUgBAZACIAAANQAFACACgGQACgGAEAAQBBAMA/AUQAmANAlAPIAzAWQAEgHgRgFQgRgGAAgJQAUgFAsABQgBAVAHAfIAGAAIACgCIAAABIABADIgIABIgPAAQgHgJgJAAIgHABIgBAAIAAAAQgFACgBAHIgIAAgACvD0IgBAAIABAAgAg2DtIgEgBIgCAAIgYgLIgjgTQAOgEAQgKIAHgBIAJgBIALAEQAcALAnASIgFADQgSAJgaADgABPC1QgNgDgHgDIABAAQBIgyAnAaQAFgFgNgFQgPgDgGgDQgPgYgBgUQgBgUgEgOQgEgNg/gBIg2gdIgjgFIgGgBIgCAAIgEgBIAAgBIgHAAIgRgCIAAAAQgFAAAFABQgXAogJBWIgxgBIgMABIAFgZQAThdAZgyQAdg7AyAOIADAFIACACQAHAHANAAQALAAACgCIACADIABgCIACACQAFAEAIAAQAIAAADgFIADAEQAJABAJAIQgBAQABAPQAKAAgBgKQgCgNAEgFQAbAFAbgSQAxBMgFAwQANAfAHAfIAEAOQAEAXADAbQgJgVgYgKQgZgKgYALIAiAAQAZgBACAOQgngOgSALQACAKAfAAQAeAAAFAOQhGgCghgGgABeAUIABAAIgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABABAAgAhdCGIAHgpQAEADAIAEQAOAIANAAIARAAIABAAIAqABIABAAIALAGIApARIABABIgNASIgHANIgDAGQhwgggZgEgAAYhfIAAgDIgFgPIgDgHIADgDIABgBQACADAFAAQAIAAAAgKQABgGgDAAQgDAAAAAFQABAEgGgBIAAgEIAAgDQAAgGgEgEIgCgCQgGgEgEgGIAAgLIALgBIADAAIALAIQAFAAABgFIAIACIAAAAQAOAAAAgOQAAgDgGgMIgGgLIgCgEIACAAQADgDAPgHQACgCAEgJIAAgBIgBgCIAHgBIAGAAQAIgBAAgBIgBgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgDgEIABgDQAFABAFAGIgEABQAQADAJAWQgJgKgPACQgQACgBAPIAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBIAJgFQAKgIALAEQAEAEAGACIgBAEQgCANAFALIACAHIADAHIABABIAIANQAAADgDAEIgEADIgFAAIgFgBIAAAAIgDAAIgDAAIAAADIgBABIABABIAAABQABAegHAIQgRgNgRADQAEATAagCQgDAOgRARQgJACgIAAQggAAgRgkgABzizIgKABIgKABIgDABIABABQACACAJAAIAAAAQAVAAACgEIAAgBIgCgCIgBgBIgJACg");
	this.shape_37.setTransform(-0.5,-26.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("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ALQAAAEgKACIgJAAQgGAAgCACIgBABIAEAHIADAKQAAAFgFAFQgFAFgKAFIAJAQQAAAIgNAKIgHAEQgMAAgKADQgIADAAAFQAAAJAJAFIgWAHQgWAGAAATIAIAVQAAACgJADQgKAEgEAHQgDAFAAAMQAAAJAGADIABABQAIADAAAGQAAAEgIATQAAAKATAGQAKgCAAgOQAKgdAVgWQAagcAdACQASABAJANIgCABQAFAEAHAAIANgCQADAAAFADIAKAJQAHAAAAgHIAAgCIAAAAIAAgBIgJgJIgDgLIABgCIAAgBIAAgIIgHgNQAAgFAFgEQAEgFAAgDQgPgQAAgMQAAgMAKAAIAHAAIABAAIACAAQAQABAJADQAKAAgDgHIgEgHIgHgNQgDgGAAgDQAAgIARgCIgGAAQgFAAgFgFIAAgBIgSgKQgCABgBAQQADAGgDADQgGAFgeAAQAHASAAANQAAAHgEACIgXALIAGALQAAALgXAHQgWAHAAAGIACAIQAAAIgEAAQgCAAgEgRQAAgIAXgJQAWgJAAgEQgGgGAAgHQAAgFAOgEQANgEAAgFQgHgZAAgIQAAgEACgBQAJgJAEAFQAGAHAMgGQADgCAAgHIgBgLQAAgIAIAAQAKAAAKAGIAFADIABAAQAEAAAAAGIAQgBIABAAIgBgFQAAgHARgCQgHABgEgEIgBgDIgBAAIgKgMQgGAEgKAAQgKAAgJgEIgGgFQgHAAgHAJQgGAJgHAAIgIgCIgIAXQgGAOgTAIQAFAHAAAHQAAAXgXgEIADAFIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgHgKQAAgFAVgFQACgBAAgIQgFgGAAgJQAAgFAEgCQAFgFAIACIAAgDIAJgOIALgbQADAAAJAEQACAAAIgIQAHgJAKAAQAEAAAFAEQAGAEAKAAQAOAAABgEQAJAAAFAOIABAAIAFAEQADAFADgDIACgBQABgGAEAAQAIAAAEAFIAFgEQAIgGALAAQAMAAADAIIACAMQAEAEAJAEQAGADAAAGQAAAEgKAPIAQAKQACADAAAHQAAADgGAMQAAACAHADQAIAEAAADIgDAMQAAAKAFANQAAADgHARIACAIQAAADgHAGQgGAFAAAFQAAACAHAGIgBADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgHAAgCgFQgCgDAAgEQAAgKAMgJQgCgNAEgFQAEgGAAgHQgFgHAAgNIACgLQgOgGAAgHQAGgGAAgJQAAgHgJgDQgJgDAAgGQAAgCAKgRQgIgCgKgNQgEgQgBAAQgMAAgIAGIgFAEIABABIAAABIAHgBQAJAIADAGQACAEAEAVIAAAAIABAJIABADIAAABIADALIgBABIABAAIACAFIADAJIAAABQAEAIAAADQAAAPgTAAIAAAAIAAAAIAAACIADADIgEgBQAEAPgGARgAAPmHIgDADIADAHIAFAPIgBADQAWAtAtgLQARgRADgOQgaACgEgTQARgDAQANQAIgIgBgeIgBgBIAAgBIABgBIAAgDIADAAIACAAIABAAIAFABIAFAAIAEgDQACgEAAgDIgIgNIAAgBIgEgHIgCgHQgEgLACgNIABgEQgGgCgFgEQgKgEgLAIIgIAFQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBIAAAAQAAgPAQgCQAQgCAIAKQgIgWgRgDIAFgBQgFgGgFgBIgBADIADAEQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIAAABQAAABgHABIgHAAIgGABIAAACIABABQgEAJgCACQgPAHgDADIgCAAIACAEIAGALQAGAMAAADQAAAOgOAAIAAAAIgJgCQAAAFgGAAIgKgIIgEAAIgKABIAAALQAEAGAFAEIACACQAFAEAAAGIgBADIABAEQAFABAAgEQgBgFADAAQADAAAAAGQAAAKgIAAQgFAAgDgDIAAABgAAiFUIAJghQgYgiAig2QgGAUAAA0QAAA0gIAaQgKgJAFgUgACUFlIAAgHQAIgXAAgKQgUgYAAgHQAAgFALgEIAXgLIgKgeQAAgcAHAAQAIAAgFAcQAAADAOAbQAAAFgjAQQACAOAIAFQAHAFAAAHQAAASgIAMQAAADAEAJQgCAEgDAAQgIAAgBgHgAlYEQQAOg1gRgRQAUgYgRg4QgQg4AUgYQABAEgFAxQgCAmATAPQABAZgOAdQANAWgIAwQgHAyAFANQgTgOAMgxgAEOCyQACgVAJgJIgSgOQgBgOAIgbQAIgYgFgNQAdALggA1QAHAWANAGQgMAfADAaQgOgEADgXgAA4A4QAMBfgSAbQgGhfAMgbgAkRjyQACATgZAfQAEgVATgdgABZj3QAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABABIgCAAgABkm5QgJAAgCgCIgCgBIAEgBIAJgBIALgBIAJgCIABABIABACIAAABQgBAEgVAAg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#0230E3","#0099FF"],[0,1],91.9,53.3,98.3,6.5).s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_39.setTransform(21.5,-43.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DDB477").s().p("ACXDrQgagBgfgCIgEgCIgJgBIAFACIgEAAIgPgCIgRgBIgPgCIgBAAIgDABIgNAFQgEACgJgHIAAgBIAAAAIgBAAIAAAAIgFAAIAAgBQAMgMArAKIANAFIAEAAIAIABIgwgUIgNgGQgngRgdgJQgrgNgTACQAKABAPAFQgKACgCACQgIAAgKAGQgTAKgNgDIgfgrQgQAFgOgCQAVggBUAIIAAANQAGACABgGQACgGAFAAQBAAMA/AUQAmANAmAPIAzAWQADgHgQgFQgSgGAAgJQAUgFAtABQgCAVAHAfIAHAAIABgCIAAABIABADIgIABIgPAAQgHgJgJAAIgHABIgBAAIABAAQgGACgBAHIgHAAgACwDnIgBAAIABAAgAg1DgIgDgBIgDAAIgYgLIgigTQANgEAQgKIAHgBIAKgBIAKAEQAcALAnASIgGADQgRAJgaADgABRCoQgNgDgHgDIABAAQBHgyAnAaQAGgFgOgFQgPgDgFgDQgQgYgBgUQgBgUgEgOQgEgNg/gBIg3gdIgigEIgGgBIgCAAIgDgBIAAgBIgHAAIgRgCIgBAAQgFAAAFABQgXAngJBWQg0gCgJACQANhDAPgwQAGgRAVgoQAUgpAiACQAiABAEAEIADAFIAEAFIAEAEIAFACIAEABIABAAQAMACADgCIAAADIACgCIABADQAFAEAIABQAJABADgEIACAEQAJADAIAIQgEAQAAAPQAJACABgKQAAgOAEgEQAKAEAKAAQARAAASgKQAOAgAIAYIACAKIABADIAEAUIACAAIAAAIQANAfAGAfIAEAOQAEAXADAbQgJgVgXgKQgZgKgZALIAjAAQAYgBACAOQgngOgSALQACAKAfAAQAeAAAFAOQhGgCgggGgAhbB5IAHgpQADADAIAEQAPAIAMAAIASAAIAAAAIAqABIABAAIAMAGIAoARIABABIgNASIgHANIgCAGQhxgggYgEgABggyQgmAAgOgrIABgDIgDgPIgCgIIADgCIABgBQACADAFAAQAIABABgJQACgGgEAAQAAAAgBAAQAAAAgBABQAAAAAAABQAAABgBABQAAAEgFgBIAAgEIABgEQABgGgEgEIgCgCQgFgFgDgHIABgLIALABIAEABIAJAJIABAAQAEAAACgEIAIADIAFAAIAFgBQAEgDABgGIAAgCQABgEgJgXIgCgEIACAAQAEgDAQgFQACgBAFgJIAAgBIgBgCIAHAAIAHAAQAHABAAgBIAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIgCgEIABgDQAFACAEAHIgFAAQARAFAFAWQgHgLgQAAQgMAAgFAJIgBAGQACADAKgGIABAAQALgGAKAEQAEAFAGADIgBADQgFAMAEANIABAHQACAJAHANQgBAEgDADIgEACIgFAAIgFgCIAAAAIgDAAIgDAAIAAABIAAABIgBABIAAABIAAABQgDAegIAHQgPgPgSABQACATAaACQgEAOgUANIgIABIgBAAgAB7iiIgBAKIADACQABAAAKgMQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIAAAAIgIAGg");
	this.shape_40.setTransform(-0.6,-25.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A55927").s().p("ACfCuIgMgIIgDgCIAAgBQgGgKAAgFIACgIIgCgHQgPgxgWgRQALgSAEgJQAJgQgCgPIADABIgBgEIgBgBIABAAQAQACAEgKIABgEQAAgDgDgJIgBAAIgDgPIABAAIgCgMIAAgOQgBgVgBgEQgDgGgIgJIgHAAIABgBIgBgCIAGgDQAIgEAMABQABAAACARQAIANAIAEQgMAPgBADQAAACACADQACACAEADIAAAAIAFADIACAEIABAEQgBAGgDAEIgEADIABAFQACAFAJAFIgEAKQgBANAEAHQgBAHgFAGQgFAEABAOQgNAHgCAKQAAADABAEQABAFAHABQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIAAgCQgGgIABgCQAAgEAHgFQAIgFAAgCIgBgJQAJgQABgDQgEgNACgKIAEgKQABgEgHgEQgHgFAAgCQAIgLAAgCQABgIgBgCIgPgNQAMgNAAgEQABgGgFgDQgIgGgDgFIgBgMQgCgIgMgCQgLgBgJAFIgFADQgEgGgHgBQgEAAgCAGIgCAAQgDADgDgFIgEgFIgBAAQgEgPgIgBQgBAEgPgCQgJgBgGgFIAAAAQgFgFgDAAQgKgCgJAIQgJAHgCAAQgHgGgDAAIgPAZIgHAJIgUALIgBAcIgVAGIAFANIABgJIAFAAIAEAAIAEgCIAIgGIADgJQABgEgBgDIgDgIIAVgKQAEgEADgEIALgWIAHADQAGABAJgIQAIgIAHABIAFAFIAFADQAGADAIABQAJACAHgEIAIAOIABAAIABADQACAEAIABQgRgBgBAHIAAAFIAAAAIgRgBQABgHgEAAIgBAAIgEgDIgFgEQgHgFgHAAQgIgCgCAIIAAALQAAAHgEACQgOAEgEgIQgDgFgKAIQAAAAgBAAQAAAAAAABQgBAAAAABQAAABAAAAIACAjIgbANIAAATIgtARIAAAHIAEANIACgQQANgGAPgEQAIgCAIgFIADgEIgCgPIAZgIQADgCAAgGQACgNgEgTQAeAFAGgFQADgCgCgGQAEgQABgBIARANIAAABQAFAFAEABIAGABQgNgBgEAFIgBAEQAAACACAHIAAAAIABADIAHASQABAGgFAAIgEAAQgGgDgJgCIgJgCIgCgBIgCAAIgGgBQgLgCgBANQgCAMAOASQAAADgGAEQgFACAAAFIAEAOIAAAIIAAABIgCACIABALIAIALIAAAAIAAABIAAABQgBAHgHgBIgIgKQgEgEgEgBIgNABIgGgCQhOgvgzBWIgFAJIAAACQAAAOgKACQgTgGAAgKIAGgPIACgIIgPgRIAFgCIAAgQIAJgKIAEACQAIgLAMgFIAIgDIgEgWQARgYAegCIgFgQQALgJAQABQARADAHgPIgFgUIATgLIACgKIgBgIIgCgHIAAgCQACgCAHABIAJACQAKgBAAgEIgCgLIAAgKQABgFAYAEIAHABQAbAEAFgDIABgBIgCgHIABgIIAJACQAPAEAUALQAFAAALgMQAKACAEAWIADAAQACACAFAAQAIABASAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAgBABIgDAKIgBAFQABAFAIABIANgBIAAAAQAHABAAAHIgBAFIgBADQAAAHAGADIAEABQAIADAAAFIgEAIIgFAKQgBAIAJAEIABAAIAAABIAAgBQAIAEgBAIQgBAHgMAPQgBADAEAJIgIAPQAAACADALQAAADgOAVQgBADAHAIQAHAHgBAEQAAACgJAGIgEADQAAABAKAMIABABQAJAOgCAMQAAAEgJAGIgCABQAAADAEAHIAAABIADAHIAAAEIgBAHQgGAQgNAAIgEAAgAgIA2IABgBIABACIgBACIgBgDg");
	this.shape_41.setTransform(2.3,-38.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("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gugJgaIgpAAIAAAAQgYAAgKAHgAE5ATIgCABQAvA2ASgNIAAgFIACgOIgBgHQgMgBAHgMQgZgEgSAAIgQABgABbAdQgIACgDAFQALAEAOARIACACQAOgGARgYIghgBIgDAAIgLABgAi8A1QAUgQAZgPIgogCIgFAhgAC7AcQgFACgEACQAIAEAMAMIABABQANgEASgJQgVgJgNAAIgJABgAg0ATQgIACgGAEQAJACAKAKQAHAHAGADIAGACQALgRADgKQgPgEgMAAIgLABgAAFAIQABAIgLAMQgLALAFAHQAUgPAHgMQgDgLgHAAIgBAAgAjdAkQgDgUgEgEQAAAlAHgNgAGGAJIgHAPIACABIAEAAQABAFADgBQAEgXAGgHQgJABgEAJgAC6gWQAFAKAAAGQAAAHgHAMIgGAHQAnACAkADQAOgDAAgUQAAgTgLgIQgbADgrAAgAEEgcQALADACAWQABAXADACQAQgEABguQgEgEgNAAIgBAAQgNAAgDAEgAA5AKIAQAMQAqgCApAAIACgGIABgMIgBgOQgEgGgBgFIgLAAQhOgEgfACQAEAOgDAMIAJADIAFADIABAAQADAAAFADgACfgWIAEAKIABAOQAAAMgCAGIAHAAQARgLgHgTIgHgVIAAgCIgBAAIgBAAIgDgBIgBAAIgGAFIgBAEIABAAIgBACIAAAAgAmhgwIACAHIABAKIAAAIQgDAdgTAJIAZAAQAGgGAngEIAAAAIALABIAEgBQAJgpgTgTQAFANgIAEQAGgMgbgKQgagJgEAVIgCgBIAAABgAFxAPQAAgOALgLQAOgOACgHQgJgMgaADQglAEgKgCQgCAPgBAfIAAAAQAEAAgBAGIAAAAIARgBQARAAAVACgAEtgZQABANgFAbIAKgBIABgCIABgDQgDgGABgTIABggQgNgFgRACQgRACgFALIAIAAQAhAAAEANgAhcAIQARAIBEgEQgHgJALgJQALgMgDgKQgIgDgQAAQgEABgIAAIgIAAQgeACgUgHQAOARgRAagAi1gqQgBABACAZQABAJgCAFIAAABQAAAHgCAFQAZACAjgBQAYgegOgRQgigIgTAAQgJAAgGABgAjMAJIAKABQAFgIACgIQACgGgFgDIgEgCQAAAPgKALgAm3gmQgJAIgCARQgBASAPADQAOgRADghQgMgMgLgBQgM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QAAAKATAGQAKgCAAgOIABgCIAEgJQAzhXBOAwIAFACIANgBQAEABAEAEIAJAKQAHABABgHIAAgBIAAgBIAAAAIgIgLIAAgLIABgCIAAgBIABgIIgFgOQABgEAFgEQAFgEAAgDQgOgSACgMQACgMALABIAGABIABAAIACABIAKACQAIACAHADIADAAQAGAAgCgGIgGgSIgBgDIgBAAQgCgHABgCIABgEQADgFANABIgGgBQgEAAgEgGIAAgBIgRgNQgCABgEAQQADAGgEACQgGAFgfgFQAFATgCANQgBAGgDACIgYAIIADAPIgEAEQgIAFgIACQgPAEgNAHIgCAQIgEgNIAAgIIAtgRIAAgTIAagNIgCgjQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQAKgIADAFQAFAJAOgFQAEgCABgHIAAgLQABgHAIABQAHABAIAEIAEAEIAEADIABAAQAEABgBAGIARABIABAAIAAgFQABgHARABQgIgBgDgEIAAgDIgCAAIgIgOQgHAEgJgCQgHAAgHgEIgEgDIgGgFQgHgBgIAIQgIAIgHgBIgIgDIgLAWQgDAFgEADIgUAKIADAIQABADgBAEIgDAJIgIAGIgEACIgEAAIgFAAIgBAJIgFgNIAVgGIABgcIAUgLIAGgJIAPgZQADABAIAFQACABAJgIQAKgIAJACQAEAAAEAFIABAAQAFAFAJABQAPACABgEQAIABAEAPIABAAIAEAFQADAFADgDIACAAQACgGAEAAQAIABADAGIAFgDQAJgFALABQANACABAIIABAMQADAGAJAFQAFADgBAGQgBAEgMANIAPANQACADgCAHQAAACgIALQAAACAHAFQAHAEAAAEIgFALQgBAKADANQAAADgKAQIABAJQAAACgHAFQgHAFgBAEQAAADAGAHIgBACQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgGgBgCgFQgBgEAAgDQACgKANgHQgBgOAFgEQAFgGABgHQgEgHACgNIADgLQgJgFgCgFIgBgFIAEgDQADgEABgGIAAgEIgDgEIgEgDIgBAAQgEgCgCgDQgCgDABgCQAAgDAMgPQgIgDgIgOQgBgQgCgBQgMgBgIAEIgFADIAAACIAAABIAGAAQAIAJADAGQACAFAAAUIABAOIABAMIgBAAIAEAPIAAAAQADAKAAACIgBAEQgEALgQgCIgBAAIAAAAIABABIACAEIgEgBQACAPgIAQgAAlmCIgDACIACAIIADAPIgBADQAOArAmAAIAJgBQAUgNAFgOQgagCgCgTQARgBAPAPQAIgGAEgfIgBgBIAAgBIABgBIAAgBIAAgBIADAAIADAAIAAAAIAFACIAFAAIAEgCQADgDABgEQgHgNgCgJIgBgHQgDgMAEgNIABgDQgGgDgDgFQgKgEgMAGIAAAAQgLAGgCgDIACgGQAEgJANAAQAPAAAHALQgFgWgQgFIAEAAQgEgHgEgCIgBADIACAEQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIAAABQAAABgIgBIgGAAIgHAAIAAACIAAABQgEAJgDABQgQAFgDADIgCAAIACAEQAIAYAAADIAAACQgCAGgEADIgFABIgFAAIgIgDQgBAEgEAAIgCAAIgJgJIgEgBIgKgBIgBALQADAHAEAFIACACQAEAFgBAFIgBAEIAAAEQAGABAAgEQAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAQADAAgBAGQgCAKgIgCQgFAAgCgDIgBABgAAiFKIAJghQgYgiAig2QgGAUAAA0QAAA0gIAaQgKgJAFgUgACUFbIAAgHQAIgXAAgKQgUgYAAgHQAAgFALgEIAXgLIgKgeQAAgcAHAAQAIAAgFAcQAAADAOAbQAAAFgjAQQACAOAIAFQAHAFAAAHQAAASgIAMQAAADAEAJQgCAEgDAAQgIAAgBgHgAlYEGQAOg0gRgSQAUgYgRg4QgQg4AUgYQABAEgFAxQgCAmATAPQABAZgOAdQANAWgIAwQgHAyAFANQgTgOAMgxgAEOCoQACgVAJgJIgSgOQgBgOAIgbQAIgXgFgOQAdALggA1QAHAWANAGQgMAfADAaQgOgEADgXgAA4AuQAMBfgSAbQgGhfAMgbgAjYkaQgHARglAOQAOgQAegPgAB3mfIgDgCIABgKIAJgGQAAAAABAAQABAAAAABQABAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgLAMIAAAAg");
	this.shape_42.setTransform(0,1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DDB477").s().p("ACVD3QgaAAgegDIgFgCIgIAAIAFACIgEgBIgPgBIgSgCIgPgCIgBABIgCABIgNAFQgEABgJgHIAAAAIAAAAIgBgBIAAAAIgGAAIAAAAQAMgNArALIAOAFIADAAIAIABIgvgVIgNgGQgogQgdgKQgqgNgTACQAJACAQAEQgKACgCADQgJAAgKAFQgSALgOgDIgMgTIgSgWIgGAEQgKAGgLAAIABgBQgCgCABgEQAAgHANgJQAMgIAEAAIABABQAMgHAPACQAUgBAZACIAAAOQAFABACgFQACgHAEABQBBAMA/AUQAmAMAlAPIAzAWQAEgHgRgFQgRgFAAgKQAUgFAsACQgBAUAHAfIAGAAIACgBIAAAAIABADIgIABIgPABQgHgKgJAAIgHABIgBAAIAAAAQgFADgBAGIgIAAgACvD0IgBgBIABABgAg2DtIgEgBIgCgBIgYgLIgjgSQAOgFAQgJIAHgCIAJAAIALAEQAcAKAnASIgFAEQgSAJgaACgABPC0QgNgCgHgDIABgBQBIgxAnAaQAFgGgNgFQgPgDgGgDQgPgXgBgVQgBgUgEgNQgEgOg/gBIg2gcIgjgFIgGgCIgCAAIgEgBIAAAAIgHgBIgRgCIAAABQgFgBAFABQgXApgJBVIgxAAIgMABIAFgaQAThcAZgzQAdg6AyAOIADAFIACACQAHAHANAAQALAAACgCIACACIABgCIACADQAFAEAIAAQAIAAADgFIADADQAJACAJAHQgBAQABAQQAKAAgBgKQgCgOAEgEQAbAFAbgSQAxBMgFAvQANAfAHAfIAEAPQAEAXADAbQgJgVgYgKQgZgLgYAMIAiAAQAZgBACAOQgngOgSAKQACALAfAAQAeAAAFANQhGgCghgGgABeATIABABIgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAABAAgAhdCGIAHgqQAEADAIAEQAOAJANAAIARgBIABABIAqABIABAAIALAGIApARIABABIgNASIgHANIgDAFQhwgggZgDgAAYhgIAAgCIgFgPIgDgHIADgEIABgBQACADAFAAQAIAAAAgJQABgGgDAAQgDAAAAAEQABAFgGgBIAAgEIAAgEQAAgGgEgDIgCgCQgGgFgEgGIAAgLIALAAIADAAIALAIQAFAAABgGIAIADQAOAAAAgPIgEgKIgGgQIAAgDIABgDIABAAIADgDIAEgDIAJgHIABgFIAXgIIABAAIAAAAIgCgIIAKAGIAAAAIgEABIAAAAIAJAEIACAAQAIAHAGANIgMgGIgTAMIABAAIAXgGQAEAEAGACIAAAAIABABIgCAIQgBAKAEAJIACAIQADAIAJAMQAAAEgDADIgEADIgFAAIgFAAIAAAAIgDAAIgDAAIAAACIgBABIABABIAAABQABAfgHAHQgRgMgRADQAEASAagBQgDAOgRAQQgJADgIAAQggAAgRglgABdivIAAAKIADACQABAAAIgNQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAIgHAHg");
	this.shape_43.setTransform(-0.5,-26.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("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gmAEIAEAXIAAAAIAAAAIgRAEIgJACIAFAXIgSARIAIAOIgBAEQgCALgMAEIgCABIgKACQgMAEgKAEIABALQADADAEADIgOAEQgTAIgLAUIAGAXIAAABQgHAEgFAFQgLAMABARIAHAFIAEAEQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAEgIATQADAFAEADIALAIIABABIAAgBIAIgGIABgEIAMgfQAJgOALgMQAagcAdACQASABAJANIgCABQAFAEAHAAIANgCQADAAAFADIAKAJQAHAAAAgHIAAgCIAAAAIAAgBIgJgJIgDgLIABgCIAAgBIAAgIIgHgNQAAgFAFgEQAEgFAAgDQgNgPgCgLIAAAAIACgIIAKgGIAFAAIABAAIACAAQAQABAJADQAKAAgDgHIgFgJIgEgIIgDgJIAAgGIAIgFIABgCIgBgBIgbgNIgCAGIAAAGIAAAGIAAADIAAACIAAAAIgJACIgLADIgRABQADAJABAKIACARIAAABIAAAAIgLAHIgBAAIgBABIgNAGIAGALIgEAHIgGAGQgOAOgVAEIAAACIABALQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgCgDIgEgOIAhgWQAMgFAAgDIgFgNIAUgMIAEgCIACgBIAAgBIgDgOIgBgGQgCgPAJgLIALAFIAOgFIABAAIAAgCIAAgEIABgRIAGgCIAbAJIABAAIAAAAIAAAAQACACAAAEIAJAAIAIgBIABgHIAPgGIAAgBIgGgDQgJgHgIgIIAAAAQgSAEgSgFIgIgDIgLAIQgFAFgHACIgEABIgFACIgCACQgEAFgCAHQgHATgSAJIAAABQAFAHgCALIgBAHIgBAEIgKAEIgGAEIgBAAIAAACIgEgDIgFgEIAVgKIAAgBIgDgYIAMgKQAJgJAGgLIAJgXIAFACIAFABIAEABIAAAAIAHgGIASgLQADAAAFADIAFACQAKADAJAAIAAAAQAGgBAGgCIARATIABAAQAAAAABAAQABABAAAAQABAAAAgBQABAAAAAAIACgDQACgEADAAQAIAAAEAFIAKgHIAGgCQAGgCAFABQAHAAADAEIAAAAIABABIADAPQAEADAGAEIAIAFIAAAAIAAAAIgFARIgCAIIAOAJQACACAAAGIgBADIgDAIIAAABIgBAFIABACIABABIAJAHIADADIAAAAIgBAEQgBAMACALIACAIIAAABQgCALgEALIgHAOQgFAFAAAEIABACIAEAKIgBAAIgGgCIgCgBIgBgEIAAADIgBgBQgCgDAAgEQAAgDACgEIAAAGQABgEACgEIAHgKIAEgVIABgOQAAgNgCgOIgMgKIgBgDIACgDIAAgCIADgNIAAAAIAAAAIgJgHQgGgCgCgEIAAAAIAAAAIAJgWIgNgMQgDgEgDgGQgDgJgBAAIgXAKIAFABIABABIAIAMQAGAJADAKIABALIACAJIADALIgBABIAGAOIAAABQAEAIAAADQAAAPgTAAIAAAAIAAAAIAAACIADADIgEgBQAEAPgGARgAAPmHIgDADIADAHIAFAPIgBADQAWAtAtgLQARgRADgOQgaACgEgTQARgDAQANQAIgIgBgeIgBgBIAAgBIABgBIAAgDIADAAIACAAIABAAIAFABIAFAAIAEgDQACgEAAgDQgIgNgEgIIgCgHQgDgJABgKIABgJIAAAAIAAAAQgGgCgFgEIgWAFIgCABIATgMIAMAGQgFgOgJgGIgBgBIgKgDIABgBIAEAAIAAgBIgKgGIABAIIAAABIAAAAIgXAHIgBAGIgJAGIgEADIgEADIAAABIgBADIAAADIAGAPIAEALQAAAOgOAAIgJgCQAAAFgGAAIgKgIIgEAAIgKABIAAALQAEAGAFAEIACACQAFAEAAAGIgBADIABAEQAFABAAgEQgBgFADAAQADAAAAAGQAAAKgIAAQgFAAgDgDIAAABgAAiFUIAJghQgYgiAig2QgGAUAAA0QAAA0gIAaQgKgJAFgUgACUFlIAAgHQAIgXAAgKQgUgYAAgHQAAgFALgEIAXgLIgKgeQAAgcAHAAQAIAAgFAcQAAADAOAbQAAAFgjAQQACAOAIAFQAHAFAAAHQAAASgIAMQAAADAEAJQgCAEgDAAQgIAAgBgHgAlYEQQAOg1gRgRQAUgYgRg4QgQg4AUgYQABAEgFAxQgCAmATAPQABAZgOAdQANAWgIAwQgHAyAFANQgTgOAMgxgAEOCyQACgVAJgJIgSgOQgBgOAIgbQAIgYgFgNQAdALggA1QAHAWANAGQgMAfADAaQgOgEADgXgAA4A4QAMBfgSAbQgGhfAMgbgAkRjyQACATgZAfQAEgVATgdgABZj3QAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABABIgCAAgABYmwIAAgKIAIgHQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgIAMgBAAIgEgBg");

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A55927").s().p("ACpClIgIgDIgKgEIAAgBQgHgKgBgEIAAgJQgVg0gbgPQAJgTADgKQAGgRgEgPIAEABIgDgDIAAgBIAAAAQATAAAAgPQAAgCgEgJIAAAAIgGgPIABAAIgDgLIgCgKIgBgKQgDgLgGgJIgIgMIgBAAIgFgCIAXgKQABABADAJQADAFADAEIANAMIgJAWIAAABIAAAAQACADAGACIAJAHIAAAAIAAAAIgDAOIAAABIgCADIABADIAMAKQACAOAAANIgBANIgEAWIgHAJQgCAEgBAEIAAgGQgCAEAAAEQAAADACADIABACIAAgDIABADIACACIAGABIABAAIgEgKIgBgCQAAgEAFgFIAHgOQAEgKACgLIAAgBIgCgIQgCgLABgMIABgDIAAgBIgDgDIgJgHIgBAAIgBgDIABgEIAAgBIADgIIABgEQAAgFgCgCIgOgJIACgIIAFgRIAAAAIAAAAIgIgGQgGgDgEgEIgDgPIgBAAIAAgBQgDgDgHgBQgFgBgGACIgGADIgKAGQgEgFgIAAQgDAAgCAFIgCACQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBIgBAAIgRgTQgGADgGAAIAAAAQgJABgKgEIgFgCQgFgDgDAAIgSALIgHAGIAAAAIgEgBIgFAAIgFgDIgJAXQgGALgJAJIgMAKIADAYIAAABIgVAKIAFAFIAEACIAAgBIABgBIAGgEIAKgDIABgFIABgGQACgMgFgHIAAgBQASgJAHgTQACgHAEgEIACgCIAFgCIAEgCQAHgCAGgEIALgIIAHACQASAFASgEIAAAAQAIAJAJAHIAGADIAAAAIgPAGIgBAIIgIAAIgJABQAAgFgCgBIAAgBIAAAAIgBAAIgbgJIgFACIgBARIAAAEIAAACIgBAAIgPAGIgLgGQgJALACAQIABAGIADANIAAABIgCABIgEADIgUALIAFANQAAACgMAGIghAWIAEANIACAEQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIgBgMIAAgBQAVgFAOgOIAGgGIAEgGIgGgLIANgGIABgBIABAAIALgGIAAgBIAAgBIgCgRQgBgKgDgJIARAAIAMgEIAIgBIAAgBIAAgBIAAgEIAAgGIAAgFIACgHIAbAOIABABIgBABIgIAFIAAAGIADAJIAEAIIAFAJQADAIgKAAQgJgEgQgBIgCAAIgBAAIgEAAIgKAGIgDAIIAAAAQACAMAOAOQAAADgEAEQgFAFAAAFIAHAMIAAAIIAAACIgBABIADALIAIAKIAAAAIAAABIAAABQAAAHgHAAIgJgJQgFgDgEAAIgNADQgHAAgFgFIACAAQgJgOgSgBQgdgCgaAcQgLAMgJAOIgMAgIgBADIgIAHIAAAAIgBAAIgLgJQgEgDgDgFQAIgTAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIgEgDIgHgGQgBgRALgLQAFgGAHgEIAAAAIgGgYQALgTATgIIAOgEQgEgCgDgDIgBgLQAKgFAMgDIAKgDIACgBQAMgEACgLIABgEIgIgOIASgQIgFgYIAJgCIARgDIAAAAIAAgBIgEgXIAmgEQAVAAAEgDIAAAAIAAAAIgCgQIAuALQAFAAAJgOQAKAEAFALIADAHIAlgCIAAACIAAABIAAASIAAAAIACABIACABIABgBIATgBIADADIABAIQACAHAGAFIADADIAJAEIgHATIABAFIAQAMIACAHQABAHgFAHIgGAHQAAADAFAJIgGARQAAABAFALQAAADgLAXQAAADAHAFIAJALIgMANQAAABAMALIABABQAIALACAPIAAABIgHAJQAHAIABAKIAAAIQgBANgLAIIgFABIgCgBgAgPBFIABgBIACACIgCACIgBgDg");
	this.shape_45.setTransform(1.4,-40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},26).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_19},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_19},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_4},{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_19},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_4},{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_36},{t:this.shape_30},{t:this.shape_35},{t:this.shape_19},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_4},{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},17).to({state:[{t:this.shape_38},{t:this.shape_22},{t:this.shape_37},{t:this.shape_19},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_4},{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},32).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_4},{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3},{t:this.shape_39}]},3).to({state:[{t:this.shape_21},{t:this.shape_22},{t:this.shape_20},{t:this.shape_19},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_4},{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},47).to({state:[{t:this.shape_30},{t:this.shape_36},{t:this.shape_35},{t:this.shape_19},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-58.2,95.4,116.5);


(lib.CarmenGavel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D29960").s().p("AgdAoQgEgJAAgKQAAgYAXgcQAfgmANA7QgMAUgLAOQgOASgNAFQgGgGgHgBg");
	this.shape.setTransform(14.7,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDB477").s().p("AiABzIABgBIgBAAIgBAAIgGgLQgGgOAAgNIACgIIAOgKQAVgQAYgOQAYgPAYgMIAxgYIACgBIAIgDIABgBIAAAAQAGgFAGgLIAEgJQAEgDAJgMQAEgEATgJQAIgHADgJQABgFAGgKIACgCQADAAAAAIQAAAJgIAOIgIAQIgCADIgDACQgLAIAAACIADACQADAAAEgEIgIAOQgPAWgEAJIgEAIIAAgBIgFAHIgCAEIgLAGIgUAIIAAgCQgcAPgdATQghAXgfAZIgMAIIgGADIAAAAIAAABIgBAAgAA6ANQACgHAHgDQAGAEANAAIAFAAIgEAEQgJAEgKAAQgJAAgBgCgABHgFIAKgHQAFABAHAAQAMAAAKgDIABADQAAADgJAFIgCABIgPABQgSAAgBgEgABRgYIABgDIACgCIABAAQAGACANAAQAPAAAMgHIgFAHIgCgBQgFAIgZAAQgNAAAAgEgABVgkIACgFQACgDAJgDQAVgIAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBAAIAFgKQACACAIADQAIADACAGIgCAFIgIAHQgLALgLAAQAHgCggABgABcgzIAAAAIgBAAIABAAg");
	this.shape_1.setTransform(-5.8,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996633").s().p("AhsCVIgDgBIgBgCQAAgCAJgKQADgDAEgKIABgEIABgBIAGgHIABgBIAAgBIALgVIARgdQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQgDADAAAIQgBADACADIgBAAQgGAAgEAGQgEAFAAACIACAEQgKABgBAKIgCADIACAEQADAEAJABIgKARQgTAOgFAAIgDAAgAgwAoIAEgGIACACQADgMAKgUIAFgHIAKgRIAOAEIgCAIQgCgCgEgBQgEAIgGAOIgCAAQgCAKgGALIgCAAQgFAAgGAEIgHAEgAgJgaIgXgFQgngJgIgYQgHgWAPgYQAOgYAWgHQApgQA0AXQAdAOAQASQAGAHAEAHIgCAPIgHAUIgGAVIgEAEQAIgQADgVQAEgXgJgMQgJgNgWgBQggAigEAbQgTgBgigMQgigMgOABQAOAIAmAKQAjAJAKAIQgRAEgigLQgngLgJAAQAMAMApAGQATADAMAGQAMAGAFAIIgogHgAAChMQgQgMgigGQAMAPAmADg");
	this.shape_2.setTransform(7.9,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai7C1IABAAIAAAAIAGgDIAMgIQAfgZAhgXQAdgUAdgOIgBACIAVgIIALgGIACgEIAFgIIAAAAIAEgHQAEgJAOgWIAIgOQgEAEgDAAIgDgCQAAgCALgIIACgCIADgCIAIgQQAIgOAAgJQAAgIgDAAIgCABQgGALgBAFQgDAJgIAHQgTAJgDAEQgJALgEADIgEAJQgGALgGAFIAAAAIgBAAIgIAEIgCABIgyAZQgYAMgYAPQgYAOgVAQIgOAKIAFgLIAGgEIAwgeIAxgdQAXgNAZgJIAGgFQAIgHAHgMQAKgTAGgEQAcgQACgGQAGgYAIAAQALAAADAIIgBgDIAAAAQgDgGgbgKQgbgKgFgPQgEgLACgMQACgMAIgOQANgZAWgKIAHgDIAIgCQAlgIA3ASQBJAYgRApIgBgDQgCAKgGATQgHAYgMAMQgFAEgFACIgGAFQgDAAhDgNQgCAMgDADQgBAEgEAGIgHAJQAKABAJAJQAEAFAAAHQAAAIgMAJIgBAAIABADQAAAIgLAHIgEACQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIABACQAAAJgOADIgKAEIABADQAAAJgSACIgEACIgBAAIgDABQgGAEgLAVIgDAFQgIAKgGADIgEABQgEAAgHgFIgFgGIgBgBQgCgDAAgDIAHgKIANgRIABgBQgSAJgHACQgIADgHAEQgWANgVARIAEgDQggAdglAPIgSAHQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBgAABA6IgLAVIABABIgCABIgFAHIgBABIgCAEQgDAKgDADQgJAKAAACIABACIADABIACAAQAGAAASgOIAJgRQgHgBgDgEIgCgEIACgDQAAgLAJAAIgBgEQAAgCAEgFQAEgGAFAAIACgBQgCgCAAgDQAAgIAEgDQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgRAdgAAABQQAAACAJAAQAJAAAJgEIAFgFIgFABQgNAAgGgEQgHADgBAHgAAMA9QABAEASAAIAPgBIACgBQAJgFAAgDIgCgDQgJADgMAAQgHAAgFgCIgKAIgAAZAlIgCACIgBADQAAAEANAAQAZAAAFgIIACABIAEgHQgLAHgPAAQgNAAgHgDgAAzAfQALAAALgLIAIgHIACgFQgCgGgIgCQgIgDgDgCIgEAIQABABAAAAQAAAAAAAAQAAABABAAQAAABAAABQAAAEgVAIQgJADgCADIgCAFIARgBQANAAgFACgAAgAPIABAAIAAAAIgBAAgAAdAMIgBABIABgBIAGgEQAHgEAFAAIABAAQAHgKACgKIACAAQAFgPAFgJQAEABACACIADgIIgPgDIgKARIgFAIQgLAUgCAKIgCgBIgEAGgACIh2QgYAcABAaQAAAKADAJQAIAAAFAHQAOgFAOgTQALgNAMgVQgIglgOAAQgKAAgMAPgABtgvQgGgIgLgGQgNgGgTgDQgpgGgMgMQAIAAAoALQAjALARgEQgKgIgkgJQgngKgNgJQANAAAiAMQAjAMATABQAEgbAhgjQAVACAJANQAJAMgDAXQgDAVgIAQIADgFIAHgVIAHgUIACgOQgEgIgGgHQgQgRgdgOQg0gXgrAPQgVAIgOAXQgOAZAHAVQAHAZAnAJIAXAEIApAIIAAAAgAAdh6QAhAGASAMQgogEgLgOgAgQhtIAEgJIAAAFQgBAFgDADIAAgEg");
	this.shape_3.setTransform(0.1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CarmenGavel, new cjs.Rectangle(-20,-17.7,40,36.6), null);


(lib.CarmenBicep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDB477").s().p("AAoBuQgKgQgGgRIgLghIgKgfIgLgdIgNgcIgJgPIgsgSQADgHAFgFQAKgMAQgGIgBgHIAFgIIAEgCIADgGIANAEQARAFAQALIAIAVIAHAVIAFAVIAEAWIAEAWIAGAVIAFAVIAIAUIALAYQgBARgHANQgGAKgHAIQgIgKgGgLg");
	this.shape.setTransform(-4.8,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAzBzIgSgeQgLgVgEgaQgEgVgGgSQgDgKgFgIIgMgYQgHgLgJgIQgKgIgRAAIgfgCIAEgGQAJgIALgDIAsASIAJAPIAMAcIAMAdIAKAfIALAhQAHARAJAQQAGALAIAKIgJAEIgGgIgABNAvIgIgUIgGgVIgFgVIgFgWIgEgWIgFgVIgGgVIgIgVQAGgBADAFQAGAHACAJIAFAYIAGAXIAFAYIAGAYIAFATIAFATIAEAVIAEATIgKgYg");
	this.shape_1.setTransform(-6,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CarmenBicep, new cjs.Rectangle(-14.7,-15.9,17.5,26.6), null);


(lib.Bub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AgGBdIg3gDQgdgCgegFIgZgFIgKgCQgkgDgjgOIAEAAIgFgCQgZgJgVgQQgOgLgGgNQgHgOgBggQgBghgIgSQAMAHA7AbQgDATAKAVQAGAEgCgNQgEgSAEgHQBwA2CagMQCcgNBThJQALAIAXgCQgJARgmAgQglAggMAYQgCAHgFAYQgEAUgIAKQhSAKhAACQgVADgVAAIgOgBg");
	this.shape.setTransform(-6.3,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgBgCIADgDIgCALIgBgIg");
	this.shape_1.setTransform(-31.9,-36.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#99FF33","#E3E260"],[0,1],61.5,-56.9,61.5,58).s().p("AFOHaIAEgCIAEgCIgDAEgAlVmQQABgLACgNIAGgDIAPAAIACAIIgYATgAjLnUIAIABQAGgHALABIABACIABAEIgBAAIgVACIgBACIgJACIAFgHg");
	this.shape_2.setTransform(5.6,-5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996633").s().p("AhTBiQgLgYgTAFQAQg4gQgCQAbgfALgTQgLgCAAgCQAXgGAWgXIALgKQAHgCAAgDIAAgCQAMgLAGgEQABAGgGAFQgHAFADAIQAagOAWgIIADACIADgEQAmgMAWAJQgqAYgCAGQAKgGAegCIASgCIgCAGIAAABQg3AQgZAcQAEAAAVgIQARgFAJAGQg+AZgNATQASABAagFQgNAWgcAJQAAAGgFAQQgDAOAFAIQgIgDgFAJQgEAKgFAAQgFACgSgFQgPgEgGALQgIgLgRAHg");
	this.shape_3.setTransform(-19.9,-41.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("ACYHVQABgQgEgZQgCADgFAiQgaAAgKgWQgKgVAMgYQAQgIABgDQgKhUBOhSQgFgGgIAGIgLAKQAFgYAggcQAlgfAOgPQA1gJAoAQQAsARADAoQADA0hJA+QhgBSgIAMQAKgDA6gtQATgSALgIQASgOARAJQAAAHgMAHQgKAGACALQABABAPgLQAQgJAFAMQAAAGgIACQgJADAAAGQADAEANgFQANgFAFAGQAAALgRgBQACAGAKAAQAKgBACAJQgCADhGAsQgEgDADgIQACgJgEgEQgHABgEAJQgEAMgCACQhBgFgRAMQgDgFAAgJQgDACgDAVQgDAOgSgDQAJgNABgKQgFgBgOAQQgMANgNAAIgHgBgAh9DBQhggLhBgaQhlgngHhFQgLhsA0hVQATgeBZhjQgRgTgGgMQAGgHAJAGQANAIACAAQAGgBgDgHQgEgHAEABQAoAEABgVQAnAHATgHQgCgGgTACQgWACgFgIQgGgOAOgbIAhAAQAJgBgTgGQABgIAJgHQAKgHAAgIQgEgGgLADIgTADQAYgWAYgCQgKAQAYAPQAGgHgIgHQgJgKAAgHIARAAQgCgHAGgJQgagCgMgCQAegYAwAyIALALQAIACgBgKQACgNALgBQALgHAHANIACACIAAAAIAAABIABABQACAFgDAJQgFALgIABIADAIIABAAIAGAIIAIAJIAAAAIAHAHQATARgEAZQgbAEABARQADAGALgIQALgIABADQAAARgOAbQgSgGgOADQgBAGAMAAQAMABgDAKQAggFAnARIBAAdQgBATAOAMQAIAGATAKQgGAbA5AVQAABShagJQhqgegigGQAHALATAFIAiAIIBIAUQAKABAYgBQAlALAMA7QAMA7gbAlQgZAhhvAaQhOASg9AAQgXAAgUgDgAknhoQgrBiATA5QgBhbAfg6QAAgGgEAAIgCAAgAhBmaQgGgVgRAAQAEAXATgCgADViOQgBgGAGgCQAGgCgBgDQAGADABAKQgDADgEAAQgEAAgGgDgAC6isQAIAAAQgRQAMAFgFAdQgIACgFAAQgSAAAAgTgACmi6QAOgSgEgTQASAAAFARQADAOgJANQgRgHgKAAgACVjEQgBgNgGgBQAAgBAKgCQAAgHgHgEIgKgGQANgZAPAeQAPAdgbAAIgCAAg");
	this.shape_4.setTransform(0.1,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACJH6QABgNgDgDQgBgBgGAFIgBgDIgKgFIgCgKQgOgEgEgOIgBAAQgDgIAAgLQgBgfAUgRQgCgQAHgbQAHgZgCgJQhGAJhAAEQgnAAgTgBIgBAAQgJABhJgIQhLgHgcgHIgWgHIgEgCQgKgFgVgMIgUgNIAAAAIgOgKQgZgdgEhhQgMgIgFgFQgbhuAqhqQAohoBRgvQgZg2gUgKQgBAQgMgDIAAgDIgEgnIAEgMIgFACIgDgPIAEgIQARgiANgNQgCgFgHAEQgKAFgEgBIAcgWIAAAAIAAgBIAZgUIgDgIIAIAAIAFgHIACAIQAJgFAIgMIACABQAPgLAOgIQAHgBAFgDQgEAKgNAPQATgKATgGIAIgLIALAAIgFAHIAJgDIAAgBIAWgCIAAAAQASgCASABQgDALgbAMQAHAFAagDIABgBQAGgIAEAAQAFAAADAFIgBACIgFAKQgFAJgFACIgBAAQgGADgMAAQAbAQARAPIADADIADADIABABIAHgJQAKgJAJAAQAbAAABAbIgBAJIgCAGIgBACIgDAEIgDAHIADABQAIAFAGAIIABABIAEAEQAIAMAFARIADALQAJAugcAYQA0ALA5AeQAFgHAQgHQBVAdAGBDQADAggOAhQgQAkgbABQAbAPAGA0QAGAvgMAmQAoAPBaAKQBGATgGBAQgDAagTAaIgkAsQADAFAiAiQAXAYgCAgIgCAFIgFAGIgDACIgEACIgFAAIgIAFIgCAHIgIADQgCACgCAFIgCAHIgLABQgRADADAQQgHABgDgKQgDgKgHACQgHABgOAaQgNgOgLgCQgLADAPAGQgHAFgIgKQgKgLgGgBQgFAGgFACQgBAHAJADQAKADgBAGQgQgMgaAGQglAJgUgDQgIAIACAQIAAAAQgLAAACgLgACYHjQASAFAOgRQAOgQAGACQgBAJgKAOQATADADgPQACgUADgCQAAAIAEAFQAQgMBBAGQACgCAEgMQAEgJAHgBQAEAEgCAIQgDAIAFAEQBFgtACgCQgBgKgKABQgLABgBgHQARACgBgMQgFgGgNAGQgMAFgEgFQAAgFAJgDQAJgCAAgGQgGgMgPAJQgPALgCgBQgCgMALgFQALgHAAgIQgQgJgTAOQgKAIgTATQg6AsgKADQAHgLBhhTQBJg9gEg0QgDgogsgSQgogPg0AIQgPAQgkAeQggAcgGAYIAMgJQAHgHAFAHQhOBSAKBUQgBADgQAHQgMAZAKAVQALAVAZABQAFgjACgDQAFAagCAPgAETHSIARAKQAAgKADgDIgMAAIgCAAQgGAAAAADgAECHSQAGAKgBgJQgBgFgBAAQgCAAgBAEgAjaEsIAKACIAYAFQAeAFAdACIA3ADQAdACAdgEQA/gDBRgJQAIgKAFgUQAEgYADgHQAMgZAlggQAmggAJgRQgYACgKgIQhTBJicANQibANhvg3QgEAHAEASQACANgGgEQgLgVAEgTQg7gbgMgHQAIASABAhQAAAgAIAPQAGANAOALQAUAQAZAJIAGACIgEAAQAiAOAlADgAkMkiQAGALASATQhaBjgSAfQg1BVAMBrQAHBGBlAnQBAAaBgALQBKAJBtgYQBugaAZghQAbglgMg8QgLg6gmgLQgYABgKgBIhHgUIgjgIQgTgFgGgLQAhAGBrAdQBZAKABhTQg6gUAHgbQgTgKgJgHQgOgLABgUIg/gdQgngRghAFQADgKgLAAQgNAAABgHQAPgCASAGQANgbAAgRQgBgEgLAIQgLAJgDgHQgBgQAbgEQAEgagSgRIgIgGIABAAIgJgJIgGgIIAAgBIgEgHQAJgBAEgMQAEgJgCgFIgBAAIAAgBIgBgBIgBgBQgIgNgLAHQgLAAgCAOQABAJgIgBIgKgMQgwgxgeAYQALACAaABQgFAJACAIIgRAAQgBAGAJAKQAJAIgHAHQgYgPAKgQQgYACgXAVIASgDQAMgCAEAFQAAAJgKAHQgKAHgBAIQATAGgIABIgiAAQgNAbAGAOQAFAIAVgCQAUgCACAGQgTAGgngGQgCAVgngEQgEgBADAGQAEAIgHAAQgCAAgMgIQgEgCgEAAQgEAAgEAEgADaiHQgGABACAHQAKAGAHgGQgCgLgFgDQABAEgHACgADZiNQAFgcgMgGQgPASgJgBQABAaAegJgADBilQAKgNgEgOQgFgQgSgBQAEAUgOASIAAAAQALAAAQAGgACHjYIALAHQAHADgBAHQgKACAAACQAHAAAAANQAeACgPgeQgJgRgHAAQgHAAgGALgAkBktQAGgLAPAEQASAGAFgCQAFAAAEgLQAFgIAJACQgFgIADgOQAFgQAAgGQAcgJANgVQgaAFgSgCQANgUA+gZQgJgGgRAGQgVAHgEAAQAZgcA3gQIAAgBIACgGIgSACQgeADgKAFQACgGAqgYQgWgIgmALIgDAEIgDgCQgWAIgbAOQgDgIAHgFQAGgFgBgGQgGAEgMALIAAACQAAAEgHABIgLAKQgWAYgXAFQAAACALACQgLATgbAgQAQADgQA3QATgEALAYQAHgEAGAAQAHAAAFAHgAknhaQAGgBAAAIQgfA6ABBbQgSg7AqhhgAAplYIAAgBIABACIACAEQgDgDAAgCgAANmAIAAAAIABACIgBgCgAhYmgQARAAAHAVIgDAAQgRAAgEgVgAAGmZIABAAIgBABIAAgBgAklnAIABAAQACgKAGgIIACgBQgDANAAALIAAAAQgFgCgDgDgAh6oEIABAAIAAABg");
	this.shape_5.setTransform(0,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#99FF33","#E3E260"],[0,1],61.5,-56.9,61.5,58).s().p("AFOHaIAEgCIAEgCIgDAEgAhNmNIAAgBIAKgEIAIAKIAAACQgJgFgJgCgAlVmQQABgLACgNIAGgDIAPAAIACAIIgYATgAjLnUIAIABQAGgHALABIABACIABAEIgBAAIgVACIgBACIgJACIAFgHg");
	this.shape_6.setTransform(5.6,-5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("ACYHVQABgQgEgZQgCADgFAiQgaAAgKgWQgKgVAMgYQAQgIABgDQgKhUBOhSQgFgGgIAGIgLAKQAFgYAggcQAlgfAOgPQA1gJAoAQQAsARADAoQADA0hJA+QhgBSgIAMQAKgDA6gtQATgSALgIQASgOARAJQAAAHgMAHQgKAGACALQABABAPgLQAQgJAFAMQAAAGgIACQgJADAAAGQADAEANgFQANgFAFAGQAAALgRgBQACAGAKAAQAKgBACAJQgCADhGAsQgEgDADgIQACgJgEgEQgHABgEAJQgEAMgCACQhBgFgRAMQgDgFAAgJQgDACgDAVQgDAOgSgDQAJgNABgKQgFgBgOAQQgMANgNAAIgHgBgAh9DBQhggLhBgaQhlgngHhFQgLhsA0hVQATgeBZhjQgRgTgGgMQAGgHAJAGQANAIACAAQAGgBgDgHQgEgHAEABQAoAEABgVQAnAHATgHQgCgGgTACQgWACgFgIQgGgOAOgbIAhAAQAJgBgTgGQABgIAJgHQAKgHAAgIQgEgGgLADIgTADQAYgWAYgCQgKAQAYAPQAGgHgIgHQgJgKAAgHIARAAQgCgHAGgJQgagCgMgCQAigaA3A/QAIACgBgKIANgOIASAGIACACIAAABIABABQACAFgDAJQgFALgIABQADALAWAVQATARgEAZQgbAEABARQADAGALgIQALgIABADQAAARgOAbQgSgGgOADQgBAGAMAAQAMABgDAKQAggFAnARIBAAdQgBATAOAMQAIAGATAKQgGAbA5AVQAABShagJQhqgegigGQAHALATAFIAiAIIBIAUQAKABAYgBQAlALAMA7QAMA7gbAlQgZAhhvAaQhOASg9AAQgXAAgUgDgAknhoQgrBiATA5QgBhbAfg6QAAgGgEAAIgCAAgAhBmaQgGgVgRAAQAEAXATgCgADViOQgBgGAGgCQAGgCgBgDQAGADABAKQgDADgEAAQgEAAgGgDgAC6isQAIAAAQgRQAMAFgFAdQgIACgFAAQgSAAAAgTgACmi6QAOgSgEgTQASAAAFARQADAOgJANQgRgHgKAAgACVjEQgBgNgGgBQAAgBAKgCQAAgHgHgEIgKgGQANgZAPAeQAPAdgbAAIgCAAg");
	this.shape_7.setTransform(0.1,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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");
	this.shape_8.setTransform(0,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AAAAeQgbgKgBgeIABgJIAKAMQAIABgBgJQACgNAKgBQALgHAIANIABABIABABIAAABIABAAQACAGgEAIQgEALgJABQADAJARAQIgMABIgEABQgHAAgGgDg");
	this.shape_9.setTransform(-2.7,-41.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACAMQAJgBAEgLQAEgIgCgGIgBAAIAAgBIgBgBIgBgBQgIgNgKAHQgLABgCANQABAJgIgBIgKgMIAAgLIAAgBIAHAHIAHgJQAKgJAJAAQAbAAABAbQAAAKgEAHIgDADIgEAHQALAFAHAJIABABIgNAEQgRgQgDgJgAAfAVQgHgLACgLIABAAQAAAMAFAKIACAEIgDgEg");
	this.shape_10.setTransform(-2,-42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#99FF33","#E3E260"],[0,1],61.5,-58.9,61.5,56).s().p("ADKHpQAEgIABAJQAAABAAABQAAABAAAAQAAABAAAAQAAAAAAAAQgCAAgDgFgAFOHGIAEgCIAEgCIgDAEgAlVmkQABgLACgNIAGgEIAPAAIACAIIgYAUgAjLnoIAIAAQAGgGALABIABABIABAFIgBAAIgVACIgBABIgJADIAFgHg");
	this.shape_11.setTransform(5.6,-3.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("ACYHVQABgQgEgZQgCADgFAiQgaAAgKgWQgKgVAMgYQAQgIABgDQgKhUBOhSQgFgGgIAGIgLAKQAFgYAggcQAlgfAOgPQA1gJAoAQQAsARADAoQADA0hJA+QhgBSgIAMQAKgDA6gtQATgSALgIQASgOARAJQAAAHgMAHQgKAGACALQABABAPgLQAQgJAFAMQAAAGgIACQgJADAAAGQADAEANgFQANgFAFAGQAAALgRgBQACAGAKAAQAKgBACAJQgCADhGAsQgEgDADgIQACgJgEgEQgHABgEAJQgEAMgCACQhBgFgRAMQgDgFAAgJQgDACgDAVQgDAOgSgDQAJgNABgKQgFgBgOAQQgMANgNAAIgHgBgAh9DBQhggLhBgaQhlgngHhFQgLhsA0hVQATgeBZhjQgRgTgGgMQAGgHAJAGQANAIACAAQAGgBgDgHQgEgHAEABQAoAEABgVQAnAHATgHQgCgGgTACQgWACgFgIQgGgOAOgbIAhAAQAJgBgTgGQABgIAJgHQAKgHAAgIQgEgGgLADIgTADQAYgWAYgCQgKAQAYAPQAGgHgIgHQgJgKAAgHIARAAQgCgHAGgJQgagCgMgCQAegYAwAyIAAAJQAAAfAbAJQAJAEAJgBIALgCIAHAHQATARgEAZQgbAEABARQADAGALgIQALgIABADQAAARgOAbQgSgGgOADQgBAGAMAAQAMABgDAKQAggFAnARIBAAdQgBATAOAMQAIAGATAKQgGAbA5AVQAABShagJQhqgegigGQAHALATAFIAiAIIBIAUQAKABAYgBQAlALAMA7QAMA7gbAlQgZAhhvAaQhOASg9AAQgXAAgUgDgAknhoQgrBiATA5QgBhbAfg6QAAgGgEAAIgCAAgAhSmgQgTAMAAACQABAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIAWgLQAOgKAAgCQAAgFgEAAQgEAAgMAMgADViOQgBgGAGgCQAGgCgBgDQAGADABAKQgDADgEAAQgEAAgGgDgAC6isQAIAAAQgRQAMAFgFAdQgIACgFAAQgSAAAAgTgACmi6QAOgSgEgTQASAAAFARQADAOgJANQgRgHgKAAgACVjEQgBgNgGgBQAAgBAKgCQAAgHgHgEIgKgGQANgZAPAeQAPAdgbAAIgCAAg");
	this.shape_12.setTransform(0.1,0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("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");
	this.shape_13.setTransform(0,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC99").s().p("ACYHVQABgQgEgZQgCADgFAiQgaAAgKgWQgKgVAMgYQAQgIABgDQgKhUBOhSQgFgGgIAGIgLAKQAFgYAggcQAlgfAOgPQA1gJAoAQQAsARADAoQADA0hJA+QhgBSgIAMQAKgDA6gtQATgSALgIQASgOARAJQAAAHgMAHQgKAGACALQABABAPgLQAQgJAFAMQAAAGgIACQgJADAAAGQADAEANgFQANgFAFAGQAAALgRgBQACAGAKAAQAKgBACAJQgCADhGAsQgEgDADgIQACgJgEgEQgHABgEAJQgEAMgCACQhBgFgRAMQgDgFAAgJQgDACgDAVQgDAOgSgDQAJgNABgKQgFgBgOAQQgMANgNAAIgHgBgAh9DBQhggLhBgaQhlgngHhFQgLhsA0hVQATgeBZhjQgRgTgGgMQAGgHAJAGQANAIACAAQAGgBgDgHQgEgHAEABQAoAEABgVQAnAHATgHQgCgGgTACQgWACgFgIQgGgOAOgbIAhAAQAJgBgTgGQABgIAJgHQAKgHAAgIQgEgGgLADIgTADQAYgWAYgCQgKAQAYAPQAGgGgIgIQgJgKAAgHIARAAQgCgHAGgJQgagCgMgCQAagUAmAgIALAKIADAEIAEAEIAHAHIAAAAIAEAAQADgBAAgHQACgNALgBIACgBQAJgFAHAMIACACIAAAAIAAABIABABQACAFgDAJIgEAGQgDAFgGABIADAHIABACIAGAIIAFAEIADAEIAAAAIABABIAGAGIAEAEQAOAQgDAWQgbAEABARQADAGALgIQALgIABADQAAARgOAbQgSgGgOADQgBAGAMAAQAMABgDAKQAggFAnARIBAAdQgBATAOAMQAIAGATAKQgGAbA5AVQAABShagJQhqgegigGQAHALATAFIAiAIIBIAUQAKABAYgBQAlALAMA7QAMA7gbAlQgZAhhvAaQhOASg9AAQgXAAgUgDgAknhoQgrBiATA5QgBhbAfg6QAAgGgEAAIgCAAgAhBmaQgGgVgRAAQAEAXATgCgADViOQgBgGAGgCQAGgCgBgDQAGADABAKQgDADgEAAQgEAAgGgDgAC6isQAIAAAQgRQAMAFgFAdQgIACgFAAQgSAAAAgTgACmi6QAOgSgEgTQASAAAFARQADAOgJANQgRgHgKAAgACVjEQgBgNgGgBQAAgBAKgCQAAgHgHgEIgKgGQANgZAPAeQAPAdgbAAIgCAAg");
	this.shape_14.setTransform(0.1,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("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");
	this.shape_15.setTransform(0,-1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#99FF33","#E3E260"],[0,1],88,10,58.2,120.9).s().p("AhXAPQADgLAGgLIAGgCIAOAEIABAHIgdANgABYgHIgWgEIgBACIgJAAIAGgFIAIACQAHgEALADIAAACIAAAEg");
	this.shape_16.setTransform(-14.9,-50.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("AgBgDIAEgBIgFAJIABgIg");
	this.shape_17.setTransform(-29.3,-40.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#996633").s().p("AgnBcQgFABgQgKQgOgIgJAJQgEgNgSADQgFgagTgBQAdgwgOgHQAigXAPgQQgKgEABgCQAYAAAbgRIANgHQAHAAABgDIAAgCQAOgIAHgBQgBAGgHADQgHADAAAIQAdgGAYgCIACADIAFgDQAngCATAOQgvANgDAFQALgDAdAFIASADIgDAFIAAACQg6ABgfAUQAEABAWgCQASgBAHAJQhCAIgSAPQARAGAbACQgTARgdABQgBAGgJAOQgGANADAJQgJgFgGAHQgGAIgFAAIgBAAg");
	this.shape_18.setTransform(-16.4,-42.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#99FF33","#E3E260"],[0,1],27.7,-104.1,27.7,10.8).s().p("AgDACIADgCIAEgBIgDADg");
	this.shape_19.setTransform(39.4,41.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC99").s().p("ACYHQQABgQgEgZQgCACgFAjQgagBgKgVQgKgVAMgZQAQgHABgDQgKhUBOhSQgFgHgIAHIgLAKQAFgYAggdQAlgeAOgQQA1gIAoAQQAsARADAoQADA0hJA+QhgBSgIALQAKgDA6gsQATgTALgHQASgPARAKQAAAHgMAHQgKAGACALQABABAPgLQAQgJAFAMQAAAGgIACQgJADAAAGQADAEANgFQANgGAFAHQAAALgRgBQACAGAKgBQAKAAACAJQgCADhGAsQgEgDADgJQACgIgEgEQgHABgEAJQgEAMgCACQhBgGgRAMQgDgFAAgIQgDACgDAVQgDAOgSgDQAJgNABgKQgFgCgOARQgMAMgNAAIgHAAgAh9C8QhggLhBgaQhlgngHhGQgLhrA0hVQAQgbBHhPQALgHAHgGQANgMAAgKIgDgGIgIgMIABAAQgMgXgDgNQAIgFAHAIQAKALACABQAHAAgCgIQgCgHAEACQAlAPAHgUQAkAQAUgBQAAgHgUgDQgVgEgDgJQgCgPAUgWIAhAIQAIABgRgKQADgHALgFQAMgEACgIQgDgHgLAAIgTgCQAcgOAYAEQgOAMAUAVQAIgFgHgKQgGgMACgFIARAEQAAgIAIgHQgZgIgLgFQAngRAlBLIADABQAFABABgHIAPgLIAQALIACACIAAABIAAABQABAFgGAIQgHAKgIgBIAAADQACALAPAXQAIAMgBANQABAKgFAKIgMAAQgRABgBAMIAAAAQABAGAJgDIABAAIADgBQAHgDADAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgCAHIgCAEIgIgCIgHACIgJgCQABACgBAEQAggFAnARIBAAdQgBAUAOAMQAIAGATAKQgGAbA5AUQAABThagKQhqgdgigGQAHALATAFIAiAIIBIAUQAKABAYgBQAlALAMA7QAMA7gbAlQgZAhhvAaQhOASg9AAQgXAAgUgDgAknhtQgrBhATA6QgBhbAfg6QAAgHgEAAIgCABgAgkmKQgBgVgRgFQgBAXATADgADViTQgBgGAGgCQAGgCgBgDQAGACABALQgDADgEAAQgEAAgGgDgAC6iyQAIABAQgRQAMAFgFAdQgIACgFAAQgSAAAAgUgACmi/QAOgSgEgUQASABAFARQADAOgJAMQgRgGgKAAgACVjJQgBgNgGgBQAAgCAKgCQAAgHgHgDIgKgHQANgYAPAeQAPAdgbAAIgCAAgAkBktIAAAAIABgBIABABg");
	this.shape_20.setTransform(0.1,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("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");
	this.shape_21.setTransform(0,-1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("ACYHVQABgQgEgZQgCADgFAiQgaAAgKgWQgKgVAMgYQAQgIABgDQgKhUBOhSQgFgGgIAGIgLAKQAFgYAggcQAlgfAOgPQA1gJAoAQQAsARADAoQADA0hJA+QhgBSgIAMQAKgDA6gtQATgSALgIQASgOARAJQAAAHgMAHQgKAGACALQABABAPgLQAQgJAFAMQAAAGgIACQgJADAAAGQADAEANgFQANgFAFAGQAAALgRgBQACAGAKAAQAKgBACAJQgCADhGAsQgEgDADgIQACgJgEgEQgHABgEAJQgEAMgCACQhBgFgRAMQgDgFAAgJQgDACgDAVQgDAOgSgDQAJgNABgKQgFgBgOAQQgMANgNAAIgHgBgAh9DBQhggLhBgaQhlgngHhFQgLhsA0hVQATgeBZhjQgRgTgGgMQAGgHAJAGQANAIACAAQAGgBgDgHQgEgHAEABQAoAEABgVQAnAHATgHQgCgGgTACQgWACgFgIQgGgOAOgbIAhAAQAJgBgTgGQABgIAJgHQAKgHAAgIQgEgGgLADIgTADQAYgWAYgCQgKAQAYAPQAGgHgIgHQgJgKAAgHIARAAQgCgHAGgJQgagCgMgCQAegYAwAyIAKALIABAAQAIACgBgKQACgNALgBQALgHAHANIACACIAAAAIAAABIABABQACAFgDAJQgFALgIABIADAHIAGAIIACACIAHAIIAHAHQATARgEAZQgbAEABARQADAGALgIQALgIABADQAAARgOAbQgSgGgOADQgBAGAMAAQAMABgDAKQAggFAnARIBAAdQgBATAOAMQAIAGATAKQgGAbA5AVQAABShagJQhqgegigGQAHALATAFIAiAIIBIAUQAKABAYgBQAlALAMA7QAMA7gbAlQgZAhhvAaQhOASg9AAQgXAAgUgDgAknhoQgrBiATA5QgBhbAfg6QAAgGgEAAIgCAAgAhBmaQgGgVgRAAQAEAXATgCgADViOQgBgGAGgCQAGgCgBgDQAGADABAKQgDADgEAAQgEAAgGgDgAC6isQAIAAAQgRQAMAFgFAdQgIACgFAAQgSAAAAgTgACmi6QAOgSgEgTQASAAAFARQADAOgJANQgRgHgKAAgACVjEQgBgNgGgBQAAgBAKgCQAAgHgHgEIgKgGQANgZAPAeQAPAdgbAAIgCAAg");
	this.shape_22.setTransform(0.1,0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("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");
	this.shape_23.setTransform(0,-1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC99").s().p("ACYHQQABgQgEgZQgCACgFAjQgagBgKgVQgKgVAMgZQAQgHABgDQgKhUBOhSQgFgHgIAHIgLAKQAFgYAggdQAlgeAOgQQA1gIAoAQQAsARADAoQADA0hJA+QhgBSgIALQAKgDA6gsQATgTALgHQASgPARAKQAAAHgMAHQgKAGACALQABABAPgLQAQgJAFAMQAAAGgIACQgJADAAAGQADAEANgFQANgGAFAHQAAALgRgBQACAGAKgBQAKAAACAJQgCADhGAsQgEgDADgJQACgIgEgEQgHABgEAJQgEAMgCACQhBgGgRAMQgDgFAAgIQgDACgDAVQgDAOgSgDQAJgNABgKQgFgCgOARQgMAMgNAAIgHAAgAh9C8QhggLhBgaQhlgngHhGQgLhrA0hVQAQgbBHhPQALgHAHgGQANgMAAgKIgDgGIgIgMIABAAQgMgXgDgNQAIgFAHAIQAKALACABQAHAAgCgIQgCgHAEACQAlAPAHgUQAkAQAUgBQAAgHgUgDQgVgEgDgJQgCgPAUgWIAhAIQAIABgRgKQADgHALgFQAMgEACgIQgDgHgLAAIgTgCQAcgOAYAEQgOAMAUAVQAIgFgHgKQgGgMACgFIARAEQAAgIAIgHQgZgIgLgFQAngRAlBLQAHAEACgJIAPgLIAQALIACACIAAABIAAABQABAFgGAIQgHAKgIgBQAAALARAaQAIAMgBANQABAKgFAKIgMAAQgRABgBAMIAAAAQABAGAJgDIABAAIADgBQAHgDADAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgCAHIgCAEIgIgCIgHACIgJgCQABACgBAEQAggFAnARIBAAdQgBAUAOAMQAIAGATAKQgGAbA5AUQAABThagKQhqgdgigGQAHALATAFIAiAIIBIAUQAKABAYgBQAlALAMA7QAMA7gbAlQgZAhhvAaQhOASg9AAQgXAAgUgDgAknhtQgrBhATA6QgBhbAfg6QAAgHgEAAIgCABgAgkmKQgBgVgRgFQgBAXATADgADViTQgBgGAGgCQAGgCgBgDQAGACABALQgDADgEAAQgEAAgGgDgAC6iyQAIABAQgRQAMAFgFAdQgIACgFAAQgSAAAAgUgACmi/QAOgSgEgUQASABAFARQADAOgJAMQgRgGgKAAgACVjJQgBgNgGgBQAAgCAKgCQAAgHgHgDIgKgHQANgYAPAeQAPAdgbAAIgCAAgAkBktIAAAAIABgBIABABg");
	this.shape_24.setTransform(0.1,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("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");
	this.shape_25.setTransform(0,-1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#99FF33","#E3E260"],[0,1],87.5,-13.2,87.5,101.7).s().p("AhRAlQAAgMADgMIAFgEIAPAAIACAIIgYAUgAA4geIAIAAQAFgGAMAAIABACIAAAFIAAAAIgWABIAAACIgKACIAGgGg");
	this.shape_26.setTransform(-20.4,-49.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0033FF").s().p("AgGBdIg3gDQgdgCgegFIgZgFIgKgCQgkgDgjgOIAEAAIgFgCQgZgJgVgQQgOgLgGgNQgHgOgBggQgBghgIgSQAMAHA7AbQgDATAKAVQAGAEgCgNQgEgSAEgHQBwA2CagMQCcgNBThJQAGAFALABIARAAIgiAmIgNALQglAggMAYQgCAHgFAYQgEAUgIAKQhSAKhAACQgVADgVAAIgOgBg");
	this.shape_27.setTransform(-6.3,21.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC99").s().p("ADmHTQgKgcAegWQhAg0gEhPIAqgFQAKgDAEgKIAEgIIgMACQg6AWhCgFIgGABQARghAeggIABgCQgFgFgIAGIgLAJQAGgYAfgcIADgCQAigVATgjQAeAGAeAMQBBAZASBAIAKApQAQBRg0A8IABAFIAagZIAVgNQADAEAAAHIgBAFIgCAGIgVAHIgBAGIAFAHIAFgHIAcABIgPAHIACAIIAhgDIAFAEIAAACIgMADIgBAIQAMgEAMAGIAGAEIACAEIgEAPQgFACgFAAQhdgBhbARQgLAAgDgKgAFJGPIgCAPIAHgSgAFOFxIgBADIABACIACABIACgBIABgCIgBgDIgCgBIgCABgAiqC6QhggLhAgaQhmgngHhGQgLhrA0hVQATgeBahkQgSgTgGgLQAGgHAJAFQANAIACAAQAGAAgDgIQgEgGAFABQAnAEACgVQAnAGATgGQgCgGgUACQgVACgFgIQgHgOAOgbIAiAAQAIgBgTgGQABgIAKgHQAKgHAAgJQgFgFgLACIgSADQAXgVAYgCQgKAQAYAPQAHgHgJgIQgJgKABgGIARAAQgDgIAGgJQgagBgLgCQAZgUAmAgIAAAAIAFAEIAGAGIADADIAEAEIAHAIIABAAIABAAIACAAIABAAQADgCgBgGQACgNALgBIACgBQAKgFAGAMIACABIABABIAAABIABAAQACAGgEAIIgDAHQgEAFgGABIABACIACAFIACABIAAABIAAAAIAGAHIAAABIAEAEIAEAEIAAAAIABABIAGAFIAEAEQAOAQgDAXQgcAEABAQQAEAHALgJQALgIABAEQAAARgNAbQgTgGgPACQgBAHANAAQAMAAgEAKQAhgFAmARIBAAdQgBAUAOALQAIAHATAKQgGAbA6AUQgBBThagKQhpgdgigGQAGALAUAFIAiAIIBHAUQAKABAYgBQAlALAMA6QAMA8gbAlQgZAhhuAaQhPASg9AAQgXAAgUgDgAlUhwQgrBiATA6QgBhbAfg6QAAgHgEAAIgCAAgAhtmhQgHgVgRAAQAEAXAUgCgACoiVQgBgHAGgBQAGgCAAgEQAFADACALQgEADgEAAQgEAAgGgDgACNi0QAIABAQgSQAMAGgFAcQgIADgFAAQgRAAgBgUgAB5jBQAOgSgEgUQASABAFAQQADAPgJAMQgQgGgLAAgABojMQgBgMgGgBQAAgCAKgCQABgHgHgDIgLgHQAOgZAOAfQAPAdgaAAIgDgBg");
	this.shape_28.setTransform(4.5,1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("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");
	this.shape_29.setTransform(4.6,-1.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC99").s().p("ADmHtQgKgcAegWQhAg0gEhPIAqgFQAKgDAEgKIAEgIIgMACQg6AWhCgFIgGAAQARggAeghIABgBQgFgGgIAGIgLAKQAGgYAfgcIADgCQAigVATgjQAeAGAeAMQBBAZASBAIAKApQAQBRg0A8IABAFIAagZIAVgNQADAEAAAHIgBAFIgCAGIgVAHIgBAGIAFAHIAFgHIAcABIgPAHIACAIIAhgDIAFAEIAAACIgMADIgBAIQAMgEAMAGIAGAEIACAEIgEAPQgFACgFAAQhdgBhbARQgLAAgDgKgAFJGpIgCAPIAHgSgAFOGLIgBADIABACIACABIACgBIABgCIgBgDIgCgBIgCABgAiqDUQhggLhAgaQhmgogHhFQgLhrA0hVQATgfBahjQgSgTgGgLQAGgHAJAFQANAIACAAQAGgBgDgHQgEgGAFABQAnAEACgVQAnAGATgGQgCgHgUACQgVADgFgIQgHgOAOgbIAiAAQAIgCgTgFQABgIAKgHQAKgHAAgJQgFgFgLACIgSADQAXgVAYgCQgKAPAYAQQAHgHgJgIQgJgKABgGIARAAQgDgIAGgJQgagBgLgDQAZgUAmAhIAAAAIAFAEIAGAGIADADIAEAEIAHAIIABAAIABAAIACgBIABAAQADgBgBgGQACgOALAAIACgBQAKgFAGAMIACABIABABIAAABIABAAQACAFgEAJIgDAGQgEAGgGABIABACIACAFIACABIAAABIAAAAIAGAHIAAABIAEAEIAEAEIAAAAIABABIAGAFQgBAFgGAKQgIANAAAPQAAANADAFIAAACQAEAGALgIQALgIABAEQAAARgNAbQgTgHgPADQgBAHANAAQAMAAgEAKQAagEAdAKIABgGQBBAJAXASQAuAlAKAAQAGAAAghLQAbggA/glIABAAQAFAAAAgDIAAAAIgBgCQgDgUAAhDIAAgsQACgoALAAQAOAAAAAmQABAuADAGQAXgIAEAAIAAANQgGAJAAAGQAAABAFAFIAUgBIATAAQgOAPAAAGQAAAEAZANQAZAOAAALQAAAQgoAPQggAKgGAEIgBgBIgBACIAAAAIAAABQgEAOgIAxQgIAtgSAYIgWAiQgOATgYAOQgrALgUANIgNAQQgEAFgMAFIgIAEQgKgGgIgHQgNACgRgCQhpgdgigHQAGAMAUAFIAiAHIBHAUQAKACAYgCQAlAMAMA6QAMA8gbAlQgZAhhuAZQhPASg9AAQgXAAgUgCgAlUhWQgrBhATA7QgBhbAfg6QAAgHgEAAIgCAAgAhtmHQgHgVgRAAQAEAXAUgCg");
	this.shape_30.setTransform(4.5,-1.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("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");
	this.shape_31.setTransform(4.6,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape},{t:this.shape_6},{t:this.shape_3},{t:this.shape_1}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape},{t:this.shape_11},{t:this.shape_3},{t:this.shape_1},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape},{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape},{t:this.shape_6},{t:this.shape_3},{t:this.shape_1}]},15).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape},{t:this.shape_11},{t:this.shape_3},{t:this.shape_1},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape},{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},2).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},13).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape},{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},9).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape},{t:this.shape_6},{t:this.shape_3},{t:this.shape_1}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape},{t:this.shape_11},{t:this.shape_3},{t:this.shape_1},{t:this.shape_10},{t:this.shape_9}]},7).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape},{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},2).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_3},{t:this.shape_1}]},15).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_3},{t:this.shape_26},{t:this.shape_1},{t:this.shape_27}]},109).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-52.9,81,103.5);


(lib.BkScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EgiOgX/IgJAAIgqAAIkaAAIAAABIAAEPIAAAMIAAM4IAAAMIAAFbIAAAIIAAF6IAAANIAAS1MBO3AAAIAAyKIAAgMIAAniIAAgGIAAkiIAAgGIAAi8IAAgHIAAuVIAAgBMhJYAAAg");
	this.shape.setTransform(0,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4B445").s().p("AhuARQgDAGgFgFIgBgBQggAAgEgDIABgBQhiABgbgVQAUgMAYACIAGgDIAGAAIADAAIAIAAIACAAIAAAAID2ACIAoABIAhABQBYgIBTAaIgPAEQhfANhigBIgXABIibACIgEgEg");
	this.shape_1.setTransform(-76.5,126.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7E4B01","#B16A01"],[0,1],-33.7,0,24,0).s().p("AjnBsQABgHAHABQADAHgFAHIAAAAQgHAAABgIgABhBiQAAAMgNgEQgTgGgKACQgFgNgCgIQgKADAKAOIgZgCQgOgBgIAHIgJgNQgCAAgBAJQgIgCABgHQgqAVgGgdQAAAJgJgBQgJAAABAJQgLgHgJACIgSACQgJgOAGguQAFgvgIgRQgHAWAAA6QgeAogBAPQgMgMgOgeQALgVAIgJQgKAAgMAVIgSAiIgRgZQgNABgJAPQgKAPgMAAQAOgdADgTQgMgCgDAOQgDARgCACIgOgDQAFAJgPAWQgKgBgJgKQgJgLgGgDQgFABABALQACANgFAAIgKAAQgBgNAPgOQAHgGALgGQAigUgCgbQArgcgMhrQBAAQBFAHIAAABIAKAAIApADIgFgDQBUABBDgBIASgBQBrADBogVQgNBaA+A/IAAAOQgFAAgDgCIgugmQgHAUAHAYQgKgFgDgMIgNgsQgIAjATAfIgDAGIgQgHIgCAAIgCABIAIAVIgcgYIAAAKIgGgCIgCgKIgKgIIgEgDIgEgHQADAHAFAGQAEAHAGAFIgHARIgIABQgHgBgGgIQgHgNgJAHQgIgLgDgUQgDgQAAgVQgCgygIgQQgLAhAOA2IAEAUQAHAngHATQgOABgbgZQgBABAEAPQAEAQgHAGQgVgNgMgFgABgAhQABAaAQACQgFgLgCgaQgCgYgHgMQABANgCAggAgWAhQgDAWAOAGQACgXAAgMQABgXgKgJQABAGgFAhgAiHBkQgFgHgEgBQALgMgBgMQAGALAEAbIgBAAQgFAAgFgGgAjGBXQgBgFAEgEQAGADABALIgBAAQgHAAgCgFg");
	this.shape_2.setTransform(-78.5,138.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#05A514","#006633"],[0,1],70.4,-12.1,70.4,6.6).s().p("AAOA7IADAEIAAAEIgDgIgAgQhCIAEAAIAAAZIgEgZg");
	this.shape_3.setTransform(-144.7,36.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AkxIwIABgBIACADgAomlEIABAAIABAAIgCABIAAgBgAInm+IAAABIgBABgAgFowIAAgBIACACg");
	this.shape_4.setTransform(-144.2,-46.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#6D4201","#CA9B57"],[0,1],-82.6,38.4,-9.8,12.3).s().p("AomO0QgMgKADgFQAPAAAZAHQABgPgPgPQgQgOgBgOIAjAHQAHgRgMgTQgPgTgFgJQALgGApgDQAjgCAJgNQgCgIgOgEQgPgEgDgFQAFgFgCgKQgDgKgHgBQgEACAGAKQAFAJgHAFQgxAAgdgGQAEgBAbgOQASgKAIAPQgEgJACgJQAMgBASgKQASgKAMgCQgmgjh6AtQAIgaAWgcIAMgQIADACQAAAXAKgDQgFgTgFgBIgCgCIAWggQgoABgeAaIguAzQgPgaAIgZQANgaACgOQABgPgGgPQgIgQgFgNQgCgagFgIQgYgLgCgTQANgegGgOQgRgUgEgOQAGgUAegtQAcgpAEgbQgDgiADgUIgmg2QAAgRAIgYQAJgZAAgNQABgYgXglQgZgpgEgWQgHg1AihGQgCARANARQApAFAYgWQAPgOASglQgIAGgTAaQgRAVgQAGQgBgOgOgBQgCAHAHACQAHADgBAFIgcAAQgMg8gVgUQgbgZhBAHIAAgMQAAgHgHACIAAAFQACADABAKIAtAUQACgGgKgCQgIgDAFgDIAmACQANAEAIAVQgPgQgNgBQgCAFAIAFQAFAFgEACQgLgJgmACQgjADgMgRQAIgCADgPQAAAJAEAIQAFAJAFgFQgCgDgFgNIACAAIgBgBIgBABIgNguQgJgdgVgGQgHgHgJAAQgMAAgDAGQgBAEABAEQgBACgJAGQgJAGgEAAIgPgXQgEgQgFgFIAAgCQACgDgLAAQgUAAgRAXIgFAHIgPAVIgEgFIADgOIAAgBIAIAEQADAAADgFQADgFACgLQANgOADgFQAFgBgBgFQADABAEgCQAAgIgGAAQgEAAgEAIIgGgPIgDgIIAGADIApAOQAYAiAKgZQAKgYgBgUQgBgUAJAAQALAAASANQAEACACAGQADAFAOAAQAHAAAMgKIAIgIQANgBAMAFQATAJgIARQgCgLgGABQAFAMACAkQABAjAGANQAMAFAYgIQAZgHAHACQAAADgDACQAWgJAfgoQAkgsAlgDQAMAEAOAMQgDgZggAEQgaADgUAPQgGgOgOgRQADAMAJARQAEAOgTAGQgQgmABgNQgTAAgRggIAAAVQAHAIAXAJQgBAUASAcQgEALgHAKQACglgTgQQgbgZgDgIQgDgJADgcQACgXgIgLQgIgKgTgFQgVgEgLgIQAFgSAGglQgIgDgPAEQgRAEgLgBQAFgGACgEQgHABgMgGQgKgEgFAFQAHAGAUAEQgUALgLADQgGgMgLACQgLACgMAJIgVAQQgBgbAYgMQAegKAMgJQgPgUgOgQQgRgUgPgMIAAgBQgdgagBgrIAAAAIAAgEQAMgRAAgXQAAgUgcggQgWgQgJgJQgJgJgHgRQgEgMgIgoIgBgCIgDgrIARAAQAEABACADIAAgBIAaAAIA0gBIABAEIABACIACACIAFALIAGAMQA5BNgFAeQAAAQALALQADAJATATIAPAdIACADIADAYIgBACIABAAIADAiQAVAKAvgDQAGAbAfAaQAgAbAGAVQA0gHACgXQgWAYgggBQgBgEAHgPQgRAEABgMQAWADAKgQIAPgeQAAAMACAUQABARgJAIQATgJgFglQgGgrAJgNIgNgqQgJgagaADQgNgXADgUQgRAJAYAqQAGADANgCQAMACgBAOQgDgKgIgBQAAAHASAbQAMAUgPALQADgfgXgPQgdgNgNgJQgOg2AZgiQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAAgCIAAgBIAAAAIAAgNIgEgDIAAgDIgBgEIgGgBIgFABQg1gjAAggIACgNIABgKIAAgFIgCgHIBTAAIAAADIgDABIAAACIAAAMIgCAUQAAASAFAFQAIAHAeAJIABgBQABABAAAAQAAABAAAAQABABAAAAQAAABABAAIADgBQACgNAIgDQAGgDAIgOQASgSACgPIABgFIAAgBIABgDIAAAAIgCgEIAaAAIAAACIAAACIACAHIAAABQAAADgDADQgEADAAAHIAAAEQACAEALAAIASgCQAIAAAHAHIgCABIAAAFQAGACAJAJQAMAIAaAAQAPAAACgFQAFAAABAEIAAABQgMAEgCADQgCADAAAJQAAANAEAMIgCABQgFgMgTgRQgegKgEgFQgCgIgDgDQgEgGgTAAQgOAAgBANQAAARgEACIgZANQgBABAAAUQAAAMABAFIgIgEQAAAHAJAFQAJAGACAFQgIA6AwAbQAMAHAbANQAVAMAIAQQALATgHAnQgHAtADAPQAbALAAAwQABAagEAxQAGACABgGQACgGAFACQAOAMAKACQASADAPgDQAdgHATgfQAfgzAlABQAOgXAIgLQAOgUATAGQgCAFgQAQQgMANACAHQATgbAMgK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");
	this.shape_5.setTransform(-118.1,-57);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("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");
	this.shape_6.setTransform(-83.6,-32.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC33").s().p("AZxCXIAEACIAAABgA5viZIAAAAIgFAIg");
	this.shape_7.setTransform(-20,82.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CC00").s().p("AZxCjIgDgBIABAAIAGADIAAABgA5wiNIABAAIgFAIgAxciMIAEADIAAAAgAzwihIAGgEIgGAEg");
	this.shape_8.setTransform(-20,81.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAC46A").s().p("AgLAEIACgDIAFAAIABgBIACgDIABAAIAMAAIgXAHg");
	this.shape_9.setTransform(185.2,88.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#99FF33","#E3E260"],[0,1],0.3,-57.4,0.3,57.5).s().p("EgnbAJfIAAgJMBO3AAAIAAAJgEAncAJWgEgnbAJWIAAy0IHLAEQgEAEgDAGQALAGARAAIAhgDQgDAHgSAPQgPANgBAQQAMATAggJQgbApARARQASgHASAEIAjAKQgCgJACgMQAHAMAOgFQAHgCAKgFQgKAOAHAOQANABAKgKQANgKAHgCQAAATASgCIAagYQAPAKAeASQgkAZgOA9QgNA5AMA5QhOg/hfAaQAhAiA+A7IAbAZQgOgDgmAKQgbAHgJgRQgDAKAGAKQgyATgIAkQAggLA3gHQA8gIAbAFQgHAMgTAXQgPAWADATQALgIATADIAiAFQABAJAGAOIgbgKIAMAMQAcAaALgBIgQgOIACgDQAEgFgFgHQgIgJADgKQATgDASARQASARAGAAQgFgNgYgTQgWgRgEgSQAagMASARQAKAJAPAWQgCg1AngPQACARgGAYQAJgCASgRQAPgPANAEQABALgOAMQgMAMAEAJIAEAHIgDgHQALgCAbgRQAWgOASAGQgNAmgcAAQAHAEAEAUQAEATAJAEIgHgpQAWABARADQAHAXASALQgGgXgLgJQAbAFALAJIgOgRQAVgWANgIQAzAcAigSQgHglgegcQgIgGg1gjQBRgXB0gRQgPgNgrgCQg6gDgKgCQgMgdACgTIgFgHIAFgEQA7giAdgUIgNgSIgCgCIgDgEIgKgIQgWABgYAFIAAgFQANABgBgKQgBgRACgEQgCgLgdABQAJgOgCgNQgGgGgMADQgNAGgGAAQASgbAhgiQAAgBgOgCQAIgJAIAJIABABIgDACIADgCIADAEIAJARIgCgdIAAgDIgDgFIgLgUIADgEQgNgIgCgXQgBgHgCgFIAAgDIAGABQAfAAAVAJQATAIADAAQAIAAAKgNQAKgNAAgGIAAgFQAIACATAAQAwAAAQAKQAQAKAVAAQgegHCPAAIAUAHQAzAIBxAAICVgGQAkAAA6AIQA6AJAQAAQAPAAgGACIgBABIgCAAIACAAIACAAIABAAIAnACIAAgDIARAAIB9gNIARgCQAfgCA7gCIAXgBIAegCQAtgEAIgDIBeAGIA0ADQAjAAAEgBQADgBAAgEQAPgJAMgCIAAAAIAAAFIADgCIALgFIAEABIALABQAAgDgHgBQAhgHArAUQAlgOBPAQIAHABIAOACQAjAFAYgGQAMADApAAIAdgBIANADQCiAAAigLQARgGA8gCIADAAIABACIAaABIAiAAQGBAAE4AEQAAAGABgEIGtABIgfAFQDVAFClAJIABAGIAjABIAYABID8gEIAASJgAvsJGQAGgCADgRQAEgQALABQAHAEAJAMQAJAMAJADQAIgTAJgIQAHATApgGQgMgGACgHQAFAAAJAEIAJAGQANAHAHgEQgCAAgBgKQAQATAdgTIATAKQANAGAIgGQgIABgCgHQAQgHAZAMQAYAMANgEQgFABgDgEQgFgEAGAAQADAEAEACQAPAJAogBQAEgCADgMQAJAJASgIQATgJAJABQgBgCADgLIARACIAHABIAQgLIAEAEIACADIAHAFIAIACIAJAAIACgBIABgNIAMABIACgLIANAHIAHADIAGAAIABgBIgOgxQAGALAIAJQAJAKANACIAQACIAHgFIgBgOIAKAEIALACIAVABIABgBIACgQIAOAAIAEAIQADACAEABIAGADIAIAAIAIgBIAFgBIAFgEIAAgKIgFgBIgFADIgGACIgGAAIgGAAIgDgBIgGgJQgIAAgGgCQgGgBgEgDIgBgEIgBgEIgCgFIgEgDIgFgCIgCAFIgBAFIADAJIAEALIADAKQgLgHgMgGQgYgKgMgWQgig4AFhFQgHgGgHgCQhggUhlACIgqgBIhvAAIijABIgKAAIgBABQghADgNAGQANAUgDArQgDAogKAXQgLAUABgNQABgWgFgCQAKBAhLApQAAgFAHgYQAEgRgOgFQAEAIgEANIAAABIgFAMQgKAUAJALQgHAAgGgHQgFgIgHABQAMApAyAAIACgRQAVAVAagLQAGgDAogcQgPA0AcgBgA0SI9QAIAIAFgFQgIAAgFgHQgEgKgEAAQABAIAHAGgAlwIhQgEAlAKgNQgEAAACgMQAAgGgBgDIAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIAAAAgAzkIkQABALgEAGQAHADADgLQADgJgIAAIgCAAgAyjIyQgCgXgIgBQAAAYAKAAgA1eIdQAIAMgFAJQAKAAgBgJQABgGgEgEQAGAFAFgKIgPgJIAAAAIgTgLQADAGALARgAlqIkQADADAOABQAMABADAGQgFgigCADQAGAQgPAAIgFAAQgLAAAAAEgAjzIeIAAABQgBAKgCACQAIAAABgLQADgMgJgBI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");
	this.shape_10.setTransform(0,93.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#05A514","#006633"],[0,1],14.2,-8.2,27.7,42.3).s().p("AAAAAIAAAAIAAAAg");
	this.shape_11.setTransform(216.7,-6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02C127").s().p("A6HEWIAAAAIgDACgEggygDAIAAAAIgBABgAeVjKIABgBIAAACIgBgBgEAgUgEDIAAAAIAHABIAAABIgHgCgEAgygEWIACgBIgBABg");
	this.shape_12.setTransform(23.2,15.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgEAGIAAgBIAEgLIAFAAQABANgHAAIgDgBg");
	this.shape_13.setTransform(217.9,-5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996633").s().p("AbtESIABgBIAAABgA0TCeIAfgRQgMgBAFgEIAOgMQAEAEgEADQgFAFAFAFQgFAEgLAHQgHAIAJAIQgOgIgKgCgAzcBhQAIAEAFAUQgCAIgPAJQAGgdgCgMgAiqgLQADgKAAAKQAAAFgBAAQgBAAgBgFgAdWg3QgBgHAFgGQAFgHABgEQAWAHAFAAQgDAMgLAWQgWgOgBgDgAlMi8QADgJACgLIAAAAIAAAVgA92jSQgGgHADgIQAFADAIALQgCAEgDAAQgCAAgDgDgAjukQIAAABIgFAEQgFAEgBAFIgEAAQgBgNAQgBgAg9kCQAAgHgEAAQgBgFAKABQAJABgBgFQAKAEgHAFQgGAGgHAAIgDAAg");
	this.shape_14.setTransform(-4.8,-104.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0099FF").s().p("A/DFjIAEgBIABACgAiYhiIABAAIgBAYIAAAAQABgLgBgNgAkEhUIAAgDIABADIAAAAIgBAAgAe3hlIANAAIgEAGIgJgGgAg/iKIAAAAIAAABgA7iitIAHABIgFADIgCgEgAiPi9IABgBIAAADgA5bjlIADgJQABADAAAIIABAAQgFAEgDAFIADgLgAwHjrIACAAIAAABgA1ulhIAAgCICnAAIipAHIACgFgA+XljIAaAAIgaABgA2PljIACAAIAAAAIgCAAg");
	this.shape_15.setTransform(-22.3,-118.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#996699").s().p("AEmBiQgEglgPg1QgSg+gEgYQAWgNAgAHQAuAJAIAAQARgBAigMIAgAEQAKABAHgCIADABQAMAAAMgJQAMgJAZAAQALAAAeARQAtACATAGQASAGAXAAQASgBAIgGQAIgFAfgBIAdAEIgLAGIglAOQgIAEgLAOQgPAQgDACQgjAYgIgIQgNgQgjAIIgWAJQhCAZAAALIADADQAWgUAogMQAFgBAMgGQAngPAIALQAIALApgQQANgGAHgLQACgHAQgLQAEgEAKgEIAVgGQAGgGAXgMQAagNALAAQALAAAVAHQAWAHAQgBIAPgDIAAC8IlWABIkLgFgAkKBkQgTgFhrgBIhVAAIgWABIADgDIgtABQgeAEgEACQg5gDhfACQh1ABg6gEIAAgBQAHgKAPgBIARgOIAQgEIAHAAIAEgBIBUgEQAXgEA6gRQA1gQAggDQARgCAiACQAPgCAbgPQAagOAOgDQAggFBDAIQAQgBA3gLQArgJAcACIA+ADQAOgDAagRQAQgDAzACQAqABAWgLQgBCBAFAXQh3AEhhACIglAAIgVAAIgRAAgABdBiQgFgiACgyQADg2AAgZQAqgJAWADQAUA/AWBqQgVABgbAAQgaAAgggBg");
	this.shape_16.setTransform(162.1,-52.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#0230E3","#0099FF"],[0,1],14.7,23.7,14.7,-23.6).s().p("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");
	this.shape_17.setTransform(0,-21.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#07CD1B","#01984B"],[0,1],246.2,-15.3,246.2,36.9).s().p("AoxEMIgDAAIAKAAQgygBgLgBQgXgCgOgEQgMgBgngHQgngGgkAAIiTAGQhGAAhFgHQhEgHgPAAQhDAAgKAHQgVAAgOgMQgOgMgMAAQgGAAgLAEQgrABgHADQgEgIgMAAIgIABQgXgYAAgMQAEgXAAgHQAAgDgRgtQgRgqAAgZIABgBIgBgCIgDgNIABAAIgBAAQgEgegBgOQgDgjgKgSIAHgDQgCgGgFgFQgOgQgCgGQAJgeAdgHQADADACAMQADAKAFACQAHgBAAgTQANAAAKAJIASAPQADgBAAgKQARAGAHAFQANgTAVAPQAHgEAAgNQAZAJAjgEIAAAAIACADQAHAHACAAIADgCQAAgFABgDIAMgFIANgBIAPALQAMgKAQgGIAKAGQAbgVAeARIAEAIQAggeAYAXQAVgOAYAEIALAQIAAgOIAQgDIAKAIIAHgFQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAIAEgBIADAHQAWgNALAaQgJgYAhgGIATAbIABgKIAJABIAGASQAmgVArAKIABgJQADgLATAGQAXAJAFAPQAEgBABgIQAAgJAGABQAaAWAcgBQgLgWASgJQAbAAAbAbQANgeAEAAQAGACAMAQQAKANANgBQgGgZAKgMQAEAAADAIQACAHAHgBQANgdAPAMQgBAFgIAGQgJAFABAHQANgHANAAQAPgBAPAJIgCAHQAAAIALAAQAEAAAEgDQAEgCADgGIATAZQAFAAAAgCQgBgRAFgEIAEAOQACAIAFADQAOgBAKgKQAKgLAFgBQAIAWAAAEIAGABIAfgNQAEATAOAAQAFAAAIgGQAIgGAHAAQABAAABAAQABAAAAAAQABABAAAAQgBAAAAABIAAAJIAAACIAAgBIAAADIAGABIAUgFIAJgEQANgFAEgFIgCgCIAKgEIAKAMQAGAHAHABQgCgXAUgBQANACAEAaQADgCALgKQAIgHAMACQACADABAbQAngSAaASQAAgHADgDQAEgEAJADIAAAAQALAMAEAAQABAAACgEIADgJQADgPAGgFQAGAEAMAUQACAAADgNQADgOAMAAQAGAAAFAMQAFAMAGAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAIADgNQACgKAIgHQAEgDAFgBIAYAPIARgNQALgHANAEIAIAIIAHgGIANgJIAHAJIAEgDIAPgdIAFABIAFAQQAKgDAHgFQAIgFAGgHIAGAGIABAOIAMgBIASgGIADAEIAAAIIgDAJIAKgDIAGgHIAEgEIALgDIAOALIAbgDIAHAFIAJAQIAKgIQARgNASAMIACgJIACgDIANgEIATAPIAEgFIAGgEIANgGIAKAHQAKgHAKgEQADgCAFABIAEAGIAHgFQAHgFAHgDQAEALAGAJQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAEgIIAPACIACARIABADIACAEIAIgIIAJAAIANAFIAEANIABgBIACgCIABgCIASgFIAEAGIAIAOIADAFIACgDIADgIIABgCIALgEIACACIAJAKIAEgJIAFgOQAEgBACACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAHIADAEIAKgFIAdgMIADAOIABgBQAGgIAHgHIAMgIIAOAOIAEgMQADgFAEgEQAEgEAFgDIAPARIACgFIAXgCIAGAFIAHgIQACgDADgBIABABQACACABAEQACAKAIgBQATgNAWAGQAXAHAHAUQAHgFAHgPQAMAGAGABQAEABABgCIANgPQAHgHAMACIAKAIIABABIAKAHIALAGIAIgHQANgLAFgRIAQAPIAGgIIALgOIASASIADgDIAIgLIAHgJIAKAFQAOAIAKAOQAGgOAIgMQAPgVATAJIAMAHIALgIIALgHIANgEIANgCIATAMIAbgRIAWASIAPgGIADgUQAOgCAKAIIAEAEIAEAGIADAGQAHgGAJgDQAJgFAMgCIAZASIAGAGIAFAIIAEAHIAigrIAPAVIAPgXIAUAhQAhgTAWAbQAHAJAGANIAWgpIAPAGIAGAFIAGAHIAIAMQALgZAWAIQARAGAHASIAGAIIAFgJQAMgVAWAMQADACAEAEIAFALIAKgKIACAFIAeAWIAYgsIAVAYIAqgHIALAEQADgFgHgWQgFgWAGgJQANAEAJAcQAIAbASACQAMgMgCggQAMgKAIAXQALgBARguQARguAXACQABAVgfAoQANACAXgSQAWgTAUABQgKAYgdAVQgpAegFAGQANAFAcgLQAcgJAJAFQgCAHgDAHIgDAEQgJAOgRALIgzAZQAIAIAWgIQAagKAPADQAHAVgLAYIgTAlQAQAGAPgTQARgXANgBQACAZgdASQALAHAPgKQARgLAL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");
	this.shape_18.setTransform(0,9.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#6D4201","#CA9B57"],[0,1],4,-0.9,17.6,-0.9).s().p("ACTI6IgEgKIABAJIgOgOIACiLIADgnIA6AAQgGgJgYACQgbACgEgCQACgzgCgNQAuAQAWgJQAGAlgBBJIgBCCIgCgDQgKgQgRAEIgWAhgACuIIIgnAEIAGAIIAkgHIABgDQAAgEgBAAIgDACgAC3H5IgBgKIgFACIgogIQAVAVAZgFgAC+HaQAEgBAEgCIAAgFQgKAGgSgEIgVgGQAQAUAZgIgACUGiQATARAZgHIAIgDIgogGIgPgEIADADgAA6IkQgPgdgiAOIgKAEQgEgFgCgFQgOhFgNhFIgBgFIABAAQgBgXgNhSQAgAAAKgRQgaALgQgBIgCg6QARAVAegYQACBLAEAoQgXAKgKgNQgEAEACADIAFAGIAhgGIADAHIAAABIABADQgBgPABgKQANAfABANQAFACAAAIIAAADQADAHADAMIgBAAQgFAAAAADIABACIABABIgGADIgvAFIABADQAWAIAYgHIANgFIAfCMIgJAJIgCgGgAAuHeIgEgHIgHAHQgTATgbgEQAiAMAXgbgAAeG4IgyAHIAEAHQAgAJAXgYIgCgGgAANGAIAAAAIAAAEIABABQACgDABgGIgEAEgAgGF7QAHgBAFAAIANgMIgDgCIgDAAIgBgIQgBAHgEAFIgCABQgLAOgYgNQAAAOAYgFgAAGE1QAEgKAAAKQAAAFgBAAQgBAAgCgFgACEEoQgGgaADgTQAVAMArgMQgBAUAEAjQgNAGgMAAQgVAAgSgQgAB9DyQAAgagGgMQAHgCAZADQAYAAAIgLQgGgEgQAHQgQAHgNgEQgKgIgRhGQAeASAtgOQASBVgCAfQgYALgRAAQgSAAgMgLgAgfDVQgVgDgCABQgEguABgaQARAHARgHQgbAAgHgHQACgzABgDQAKAIAbgBQgggJgIgMIAAgiQAKgIAegFQgaABgLgIQAIhDAJgyIAAgBIABgCQAGgiAHgZQAWAQAOgDQgYgJgJgIQAHgYAAgQQAYASADAnIgBAAIABAAQABALgBANQgCAbgSBBQgKABgKgGIgIgGIAAAAIAAAAIgGgCQgJAQAxAAQgPCAAJB0QgHAGgMAAIgGAAgAghhpIAAADQADAFAKACQANADAHgGQgJACgJgGQgIgEgFgCIgCADgABpB3QgEgYgKghIgNgsQgVhBgHghIAbgBQAVAAAHgHQgjAJgUgJQgDgHgHglQAjACAGgPQAUAdAiBgQgsAJgNgJQAAANAYAAQAXAAANgJQAbBQALAzQgRAMgUAAQgQAAgSgIgABfA9QAKAHASgBQATAAAHgJQgsABgKACgAAoiHQgSgXAPgPQgLAFgGgRQgHgWgDgDQAcABACgLQAZALAQA5QgSARgSAAIgFAAgAAGjVQgGgMgUghQAHgCARgDQAOgEACgLQAUAQABAZQABAZgbAAIgJgBgAAokTIAbAAQABAPgLATQgEgDgNgfgAgVkPQgOgLgWgoQg+hzg5g3QAKAAAJgLQAKgMAIgBQALAXAeAjQgVANgKgGQABALAQgBQARAAgDgNQAcAUAQAfQgTAagSgXQgEAOAVgCQAQgBAOgIQAUAiAEAEQgBANgNAAQAFAKAQgNQAeA4AGAIQgPAUgNAAQgIAAgIgGgAAskZQgFgegQAKQAOgXAHgPIATAPQALAJARgDQgFANgPAYgAA2ldIAKgVIACgFQAFgJAHgCQgKAMAogQQgBgEgKAAQgLABgCgEQAIgVADgNQAGgBAVAIQAAgIgHgDQgKgDgEgDQAAgDALgfIAXAKQgCBDgmBJIgDAAQgSAAgUgYgABFl1QAAABgBAAQAAABAAAAQAAABAAAAQABABAAABQAEAEAFgNQgHACgCACgAjBowQAWAJAWAdQgEAPgbAMQgPgQACgxgACcoHIAHAAQABAGgMABQAEgEAAgDgAjMo3QABgDADAAQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABg");
	this.shape_19.setTransform(171.1,-61.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#05A514","#006633"],[0,1],145.8,-16.9,145.8,12.2).s().p("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");
	this.shape_20.setTransform(-17.6,-123);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AH+EOQgwgQgKAAQgTAEgIgBQgWgKgMgBQgXgBg6AMQg2AMgfgFQgogKgSgDQgggFgaALQhAgdhsAuQgRgUggAFQgpAIgXAAQAqgdCbgjQAUAOAGAUQAGgCAHgJQAHgIAIgCQAdgBBTAPQA2gdApACQASABAiANQAgANAPAAQALAAAWgMQAWgLANgBQAVgBAdAIQAfAKARAAQAvg0BuASQAIAHAFAbQgTAMgPAHQgbANgbgFQgagVgSgCQgJADgCAQQgEAVgCAEQgMAFgOAAQgPAAgRgGgAniEBQAwgSAVAWQAWgLAFgEQAIgCAVAHQANAEgFgLQAQABAZgFQgBAHAGAEQAGAEgBAGQgtAKglgKQgSAPgigBIAAAAQgkAAgOgSgAn9B+QgbgEgKgVQgYAVgoABQgrACgPgcQgfAYgRgUQgCggAogHQAngHAIAdQAWgUAnACQAkADAZASQAKgWAwgDQAwgEAKAaQAGABACgJQACgJAHADQAgAgg1AGQg2AIgRgZQgFACAEAGQAGAIgCAEQgNAQgVAAIgKgBgAneg3QgHgKgDgUQg8AHgZgEQAWgfBJAYQgagKgWgUQAZgiArAzQAEgEgEgGQgGgGADgIQAWgaAwAMQAbAHAxARQAAgIgLgFIgQgHQAWgWAlAIQAhAGAUAVQADgFgGgRQgHgTADgNQAQgVAjgUQAHABAEALQAEALAGABQAEgMgEgbQgEgXALgNQATgKAVAGQAVAHAGASQgCAJgSALQAEAIAKgEQALgGAGAFQANASgKAoQAUAFgDgdQAdgYATASQAHgBASgPQAOgLAOAGQAHALAHAUQgwAjAEAXQBogrCFgdQgBAJgJAMQAlAEAHAhQgHAPgcgBQgZgBgOgKQgGAFgBAMQgBAMgGAFQg4AMgdgPIgRAlIgkABQgVgBgEgKQgZAWgMAJQg3gUgQgcQgDARgHAEQg9AGgOglQgEADACAIQADAJgEAEQgXAMgegKQgagIgNgSQgKAUggAKQgiAJgTgPQg2AngnAAQgSAAgPgJg");
	this.shape_21.setTransform(80,-107.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","#FF9966"],[0,1],8.8,55.8,8.8,-55.7).s().p("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");
	this.shape_22.setTransform(0,-98.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("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gBAPgNAaQgIAZAPAaIAugzQAegaAogBIgXAgIAAAAIgMAQQgWAcgIAaQB6gtAmAjQgNABgSAKQgRALgNABQgBAJAEAIQgJgOgRAKQgcAOgDABQAdAFAwABQAIgFgFgJQgGgKADgDQAHACADAKQACAJgFAGQADAEAQAFQANADADAJQgKAMgiADQgpADgLAGQAFAJAPATQALASgHASIgigHQABAOAPAOQAPAPgBAPQgYgHgQAAQgCAFAMAKQANALgDAMIAVgYQAMgOABgRQADADAYgNQAKADgNApIAegRQATgLATABQgHAaARAFQAFgnAFgJQANAAAJAMQAKANAGACQABgNAKgOQAOgSACgGQAEACgBAKQABALADABQAdgHgCgRQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIABAHQgCAJAFgBQABgFgCgLIgEgSIALAAIAEAYIAAAQQANgCAWAAIAsAWQAIAAAKgRIgHgGIgDABQgSAAgNgXQgJgSAAgLQAFgXAAgHQgjg7AAgvIAAgEIgCgTQgCgPgFgSQgIgigBgQIAAgDQABgKACgGQgNgZgQgvQgUg+gSgZQAphag6g1QAIgzAFgZQAJgrATgXQgIgfABgsQgagZAVg5QAXg/gLgZQAFADACALQAIgMgFgQQgEgOgJgGQBQhKASgpQACAIALgMQAPgSAGgCQALgCAKAJQA0gZANgaQASABACgBQAIgmAggiQgMgiARgkQAYgnAJgUQASABARgIIAdgNQgDAEgHACQAmADgPgTQAGgGABAMQABAMgIACQAVAFgNgkQAFABAGgKQAGgKgEgHQAJAIgCABQgGAFgBAJQACACAHgDQAIgDAHAEIAAgOIAQAsQAHAdgNAaQANANATAIQAYAKAMgKQAIAGAAAIQABAGgCARQAOgNgHAXIgKAbQACADAnAHQgDgEgTgGQgLgDAFgXQgDANAQAJQAUAKABAIQAWgFARAXIAFAIQATAZAFADQAJABAIgEIgOgLQAOAKALgDQgCgEgDgCQAOADAKgEQABgBgHgCQATgGAgADIAEABIgEgBQgEgEARAAIALAAIAHAAIAAAAQAZgEAlgJQAhgJAVgEQAFgDAVAAIAFAAIADAAIAJgBIADAEIABACQAEAJACATQAeADAmgOQAEACAJAMQAHAJAHgGQADgBgFgaQgmAG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IgQgPQgFARgNALIgIAHIgLgGIgKgHIgBgBIgKgJQgMgBgHAHIgNAPQgBACgEgBQgGgBgMgHQgHAQgHAFQgHgUgXgHQgWgGgTAMQgIACgCgKQgBgEgCgCIAAgBIgBAAQgDABgCADIgHAIIgGgFIgXACIgCAFIgPgRQgFADgEAEQgEAEgDAFIgEAMIgOgOIgMAIQgHAHgGAIIgBABIgDgOIgdAMIgKAFIgDgEIgBgHQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgCgCgEABIgFANIgEAJIgJgJIgCgCIgLADIgBACIgDAIIgCADIgDgFIgIgNIgEgGIgSAFIgBACIgCACIgBABIgEgNIgNgFIgJAAIgIAIIgCgEIgBgDIgCgRIgPgCIgEAIQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgGgJgEgLQgHADgHAFIgHAFIgEgGQgFgBgDACQgKAEgKAHIgKgHIgNAGIgGAEIgEAFIgTgPIgNAEIgCADIgCAJQgSgMgRANIgKAIIgJgQIgHgFIgbADIgOgLIgLADIgEAEIgGAHIgKADIADgJIAAgIIgDgEIgSAGIgMABIgBgOIgGgGQgGAHgIAFQgHAFgKADIgFgQIgFgBIgPAdIgEADIgHgJIgNAJIgHAGIgIgIQgNgEgLAHIgRANIgYgPQgFABgEADQgIAHgCAKIgDALQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgGAAgFgMQgFgLgGAAQgMAAgDANQgDANgCAAQgMgTgGgEQgGAFgDAOIgDAJQgCAEgBAAQgEAAgLgMIAAAAQgJgDgEAEQgDADAAAHQgagSgnASQgBgbgCgCQgMgDgIAIQgLAJgDABQgEgYgNgCQgUABACAWQgHgBgGgHIgKgMIgKAFIACACQgEAFgNAEIgJAEIgUAFIgGgBIAAgDIAAgBIAAgIQAAgBABAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQgHAAgIAFQgIAGgFAAQgOAAgEgSIgfAMIgGgBQAAgDgIgWQgFABgKALQgKAKgOABQgFgDgCgIIgEgOQgFAEABARQAAACgFAAIgTgZQgDAFgEADQgEADgEAAQgLAAAAgIIACgIQgPgIgPAAQgNABgNAHQgBgHAJgFQAIgGABgFQgPgNgNAdQgHACgCgHQgDgIgEAAQgKAMAG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");
	this.shape_23.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BkScene, new cjs.Rectangle(-253.9,-155.5,507.8,310.2), null);


(lib.Bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgnlgYDMBPLAAAMAAAAwHMhPLAAAg");
	this.shape.setTransform(1.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#8CFD1C"],[0,1],0,154,0,-154).s().p("EgnlAYEMAAAgwHMBPLAAAMAAAAwHg");
	this.shape_1.setTransform(1.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bk, new cjs.Rectangle(-253.2,-155,508.8,310), null);


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


(lib.SamSpeech = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.SamHeadTalk();
	this.instance.parent = this;
	this.instance.setTransform(4.6,-51.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110));

	// Layer 3
	this.instance_1 = new lib.SamArmRt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.3,-31.3,1,1,0,0,0,-13.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({rotation:-15},5).wait(24).to({rotation:0},10).wait(27).to({regX:-13.3,regY:11.1,rotation:15,y:-31.4},5).to({regX:-13.2,regY:11.2,rotation:0,y:-31.3},3).wait(22));

	// Layer 4
	this.instance_2 = new lib.SamArmLt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9.8,-11.7,1,1,0,0,0,17.9,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({regY:15.7,rotation:-75,y:-12.7},10).wait(26).to({regY:15.8,rotation:0,y:-11.7},6).wait(53));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AAAgBIAAgBIABAEIgBABIAAgEg");
	this.shape.setTransform(12.8,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#99FF33","#E3E260"],[0,1],-43.7,-37.9,-43.7,77).s().p("Ah8CUIgBACIgKAGIALgIgAhxCRIABgCQALACAKgFIABACQgJADgLAAIgDAAgACIibQAAAMgBAMIgBAAIACgYg");
	this.shape_1.setTransform(-0.7,41.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("ABVCLQgMAAgMgEQgDgugBgoQgBgwABglQgIAXABArIABATQAFA9gJAdQgHgGgNgBQgOgCgHgFQAEgzABgbQACgvgTgTQAIAYgTAtQgLAYgaAsQg4ADgTgNQAYhIAOghQgMAOgNAkQgNAmgKAOQgOAAgKgKQAGgcAchKIAHgBQADAAAAgGQAAgCgGgBIALghQAGgWACgQIAEgKQABgLABgBIAEgHQASAFAYAOQAbAGAcgDIAKgBQAUgDAVgHIAPgGQAdgKAogQQAjAygKBgIgBADIABACQgDAcgHAgIgBAFIgLAsQgKAGgKAEQgQAHgRAAIgBAAg");
	this.shape_2.setTransform(8.8,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE6AA").s().p("ACMIMQgCgBACgQQgHgBgEAIQgEAIgGgBQgIgHAPgNQgMgEgGAKQgGALgGAAQgMgDABgIQgBgHAIgCIAOgEQAAgEgLAAQgJACADgIQACgJAIAAQANAAAEgCQAagLAWgcIAIgLIAJgOQgGg3gdhxQgbhngDhFQAMAFAigEIAhgEIACAAIAAAZIgDApQgDAmAGAOIAGAEQAhAZgGBPQgJBjARAcQgDANgfAcQgbAXAEAjQgIAHgZAAIgIgBgADYGfIAFALQAIgHgLgMQgKgKgEAMIADAAQAGAAADAGgABAHoQABgQAUABQgFANgCAVQgQgDACgQgAC9HsQAFgMAAgDQAJAGgMAVQgGgEAEgIgAjKHWQAAgXANADQgfgXglgLQASgKAsgHQAqgHASgOQANgXAAhjQAAhWAfgXQAThcgBgQQAzAUAhgHQABAtgtAbQAhAkgbA7QgPAfgfA9QgGAXgFA2QAAAGAHAJQAFAHgFAGQgGAOgjAGQgiAGgGAOQgJgLgJgCQAAAEAFAHQAFAFgDAIQgMAEgLAAIgKgBgAh5GQQgFAKAIADQAAgEAIgOQAGgLgKgCQABAEgIAOgAjYHFQAGgBAAAIQgBAAAAAAQgBAAAAAAQAAABAAABQgBAAAAABIAAAAQgCAAgBgKgAD1HCQgCgGAFgFQAEgFAAgFQAJACgEAKQgDAJgIAAIgBAAgADyGmQAGAFgGAKQgFALgMACQAOgPADgNgAjtG0QARgEAEAHQABAGgPAFQgJgFACgJgAj6G3QgFABABgLQAAgKAIADQALAGgHAPgAgTjGQAMgSABgNIgFgJIgPgbQgKgWgHgUQgRgFgKgRQgJgTAJgUQAPABAWAMQgCgJgUgJQgRgIACgRQgTAHAJA8QAzAhgTAxQgQApgtARIgJADQgGgEgHgGIgCgBIABgBQAFgCADgCQAHgFADgKIADgJIgBgFIABgEIgIgFQgIgHAAgDQAAgDAEgDIAHgEIABgCIgBgNIABgJIgBgIIABgDIgCgBQAAgIABgHIACgLQgPgTAGghQAFghAVgHQAFgjAWgaIADgEQA4gNALgGIABgBQAbACAdgDIAdAAIADgBIAIgJIACAAIABgBIAFgDIACgBIAAAAIAPgDQAMgEAFAAQAFAAADACQADACAAAEQAAADgHADIgCABQAGABAAADQAAADgKACIABADQAAADgDABIAAAAIAJAHIgDAGQAHgCAHAKQAAADgEABIADADIgCADQAGABAAADIgBADIACADQAAACgHADQASAAAAAIQAAAEgEAAQAZAFAAADQAAABgGADIgBABIAAAAQABAEAEACQAIACAAAFQgkAdgeALQgKADgJABQALAFAMgCQAPgCARgPIANgJQAOgIALABIAHAIIACACQAKAbgVA4QgTA0AUAcQgdAUgiAMQgVAHgWAFIgNACIgBAAQgOACgNAAQguAAgegYgAApjXQgFgZAMgDQgPACgDgVIgBgIQgEgPgIgCQAAAFAEASQAEANgEAFQgGABgJgHIgBgBQgHgHgEAEIAIAHIAGAEQAJAHAKgBQAGAVAIADIAAAAgAAzkwQAIABAHAEQASAIAQAXIAZAhIAIAJIgGgMQgbg3gdgKQgGgBgGAAIgIAAg");
	this.shape_3.setTransform(1.3,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(1.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-64.7,94,129.6);


(lib.CarmenJudging = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.CarmenGavel();
	this.instance.parent = this;
	this.instance.setTransform(1.8,-9.3,0.997,0.997,-2,0,0,-19.1,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:-19.2,scaleX:1,scaleY:1,rotation:38.1,x:1.7},3).to({regX:-19.1,scaleX:1,scaleY:1,rotation:-2,x:1.8},3).wait(1).to({regX:-19.2,scaleX:1,scaleY:1,rotation:38.1,x:1.7},3).to({regX:-19.1,scaleX:1,scaleY:1,rotation:-2,x:1.8},3).wait(1).to({regX:-19.2,scaleX:1,scaleY:1,rotation:38.1,x:1.7},3).to({regX:-19.1,scaleX:1,scaleY:1,rotation:-2,x:1.8},3).wait(1).to({regX:-19.2,scaleX:1,scaleY:1,rotation:38.1,x:1.7},3).to({regX:-19.1,scaleX:1,scaleY:1,rotation:-2,x:1.8},3).wait(3).to({regY:16.4,scaleX:1,scaleY:1,rotation:13,x:13.5,y:-15},4).to({regX:-19.2,regY:16.5,scaleX:1,scaleY:1,rotation:28,x:17.7,y:-24.3},4).wait(9).to({regY:16.4,scaleX:1,scaleY:1,rotation:13,x:13.3,y:-15.7},3).to({regX:-19.1,regY:16.5,scaleX:1,scaleY:1,rotation:-2,x:1.8,y:-9.3},3).wait(96));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE9E31").s().p("AgDgOQAQACgKAbIgBAAQgNAAAIgdg");
	this.shape.setTransform(-46.4,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#07CD1B","#01984B"],[0,1],309.9,-38.2,309.9,14).s().p("AgWgPIABAEQgEATAAAdQgJgjAMgRgAAegjIgBgCIABABIAAACg");
	this.shape_1.setTransform(39,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#05A514","#006633"],[0,1],32.1,-13.3,32.1,5.4).s().p("AAMC/IgCgYQgHgvgOgSQAXgcgXgvQAXiiADhLQAegUAMgOQAJgJADgLIABAAQAKAGAGAAIACgBQAKAFgFAUQABgDAMAAQAQAQAjAbQAdAaAJAeQgTAsgkApQgCAGAFAEQAFAFgBAFQgLAhgOA7QgWAxAHA1IADAOQgOAagTAVIgLALIABAGIgVAeQgdgjgFgrgABQAYIgJAgQgGAVALAIQAIgZAAg1QAAgyAGgVQgiA3AYAhgABXhoQASgbgMhgQgMAcAGBfgAkpDPQgGgGgIgMIgCAAIgFgKIgfhSQgRg2gNg1QgOg5gUg5QgVg6A1gkIANgJQAtgZAJgJQBJAYAJAfQBGAIgWBrQgCAKgkA9QgWAlAaAiQg8CDAWBQQgSgRgXgmgAkzihQARA4gUAYQARASgOA0QgMAwATAOQgFgMAHgyQAIgvgNgXQAOgcgBgaQgUgPADglQAFgygBgDQgUAXAQA4gAg+DeQgFgVAFgOQgWgNgMgxQgNg4gLgPQAFhIg7g7QgQhQAug/IADgBIABABQAMAAAQgLQAKgGAEgEQATgLAHgQQAbAPgIAvQgEAagMA0QgBARAMAiQALAegFAVQANgUgKgfQgNgnAAgJQAAgLAMguQALglgHgcQAWAEAgAlQAKAhgaA+QgDATADAxQgBAbgJArQABAMAJAWQABAjgnAyQAuArg3BFQAAgLgHgZgAjyCcQAFg0Adg1QgWgbAOglQADgIAdgxQALAlgGBLQgIBWAFAgQAKgqABhEIAAhnQAdAHALBaQADAXAMAgQgCAMgPAPQgTAkgaBPQgfgTghhCgACQB6IACgEIgOgqIAGgTIACgJIABAAIAAADIAAABQAAgOADgKQABgKACgMIAEgeIABAAIgBgGIABgEQAAgLgBgFQApgyANgqQgHgGgPgdQgNgXgQgGQAKgEANgSQAMgQANgDIAGAIIABABQAHAIANAKQgYAsAPBFIgBAGQAAAPAEAHIALAPIAAAAQAFAOACANIABABIACANIAAAAIAGAgIABAjQAAAGgBADIACAEQgdBOg6A3QgEgkgRgggADFguIAKAdIgXALQgLAFAAADQAAAIAUAYQAAAJgIAXIAAAIQABAHAIAAQADAAACgFQgEgJAAgDQAIgLAAgSQAAgIgHgEQgIgFgCgPQAjgPAAgEQgOgbAAgDQAFgcgIAAQgHAAAAAcgAhQCwQAFgEADAPQgMgHAEgEgAE1CMQgKgNgCgOQgGgsghgdQAEgigLggIACgBIAAgEIgDgBIgDgMIgFgSIABgBIgCgDIgCgGQgZhOAPg4QARgOAlgKQApgMAOgJQAYAYA5AmQAGA9goBYQAKAVgMAmQgbBAACBDIADgGIgCANIAEABIgMAOQgagKgQgWgAEzi+QgIAbABAOIASAOQgJAKgCAUQgDAXAOAFQgDgbAMgfQgNgFgHgWQAgg1gdgMQAFAOgIAXg");
	this.shape_2.setTransform(-3.7,28.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1AB2F").s().p("AgNAKQABgQAJgIQAGgCAAALQACABACgOQgGgBgHAFQgGAEgEgEQgBgMAMgFQAKAAAMANQgEAggNASQgOgDABgTg");
	this.shape_3.setTransform(-43.7,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#6D4201","#D27E02"],[0,1],-41.7,-18,20.9,-63.6).s().p("AgDgCQAGgDAAAFIAAAEQgCgEgEgCg");
	this.shape_4.setTransform(-42.3,-4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C18F1C").s().p("AFzDxQgIgDgCgFIABgEQgEgBgCgCIgDALIgGALIAAgDIAAAAIgDgbIACAAIgCgFIAAgBIgBAAIAAgCQAAgcACgOQAJgkACgQQAEgbAAhLIgBgDQAOABAWAFQgWBLACB3IABAFIgBAGQADAHACAaQgKgBABgNgAFwgJQAMgZAAglQgBghgLgXQAFgEAAgXIAAgGIAEgBQAdgHgBgSQACATgMA/QgJA5AGAjQgDADgVAAIAAAAgACkiuIAGgIQAHgLAAgIQAAgGgFgLQAqABAcgDQAKAIAAAUQAAAUgNADQglgEgmgBgAAqi4QgFgEgEAAIgEgCIgJgDQACgNgEgOQAfgCBPAEIAKAAQACAFAEAFIAAAQIAAAMIgDAGQgogBgrACIgQgLgAnCizQASgKADgdIAAgJIAAgJIgCgHIABAAQACgHAEgEIAAAFIACAAIAEADIACABIABABIAEAFIABADQACAGAAAHQAAAJgFAGIgBAAIgDADIgBABIgBABIgHAEIgBAAIgGAHIAAAAIACAAIAAAAQgEAHARAAIAAAAIAFAAQgJADgDACIgYABIgBAAgAEsi0IAAgBQAAgFgDgBIAAAAQABggACgOQAKACAlgEQAZgDAJAMQgCAHgNAOQgLAMgBAOQgfgDgXACgAhri6QARgbgNgRQAUAHAdgDIAJABQAIAAADgCQAQABAKACQACALgMAMQgKAJAGAKIgqABQggAAgLgFgAjBi3IgEAAQACgFAAgIIAAgBQABgFgBgJQgBgZABgBIADAAIAlABQANAIAQAAQALARgWAdIgaAAIgegBgAj0i8IgpgCIACgDIgQABQgVAAgZADQAJgbgCgfQAQAIAggCQAEACAOAAIAEAAIAyABIACAEIgBAeIgDADIgBALIgCABIgCADIgTgCgAkSjGIACAAIADgDIAAAAIgFADgAl2i9IAHgGIABgCIACgLIABgBIgCAUIgEAAIgFAAgAGfjAQAOgNgOgcQAOACARgGQABAJAEARQACAPgHAHIgfgDgAmojAIABAAIgCAAIABAAgAmcjHIABgBIAAABIgBAAgAlwjXIAAAEIgCADIACgHgACRjaIAAAAIAAABg");
	this.shape_5.setTransform(1.4,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8972EB").s().p("AFaCFQAcgEAKgGIAAABIgBAKQgOAEgJAAQgJAAgFgFgAgpgkQAMgMgBgIQAIgBADALQgHANgVAOQgFgHALgKgAkIgqIAEgCIADAPQgBABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgDAAgBgRgAFhgnIgEAAIgCgCIAHgPQAEgJAJgBQgGAIgEAWIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAgBQgBAAAAgBgADthEQgDgXgKgDQADgEAOAAQANABAEADQgCAwgPADQgDgBgBgYgAB+gtQACgGAAgLIgBgQIgEgJIAAgBIABgCIgBAAIABgFIAGgEIABAAIADAAIAAABIABAAIABAAIAAABIAHAVQAHAVgRALIgHgBgAEJhaQgFgPgoABQAFgKARgCQARgDANAFIgBAgQgBAUADAHIgBADIgBACIgKABQAFgdgBgMgAjwg4QAKgMAAgPIAEACQAFAEgCAFQgCAJgEAIIgLgBgAgeg/QAAgFAHgHQAGgGgCgJIAJAAQAHANgGAKIAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAABIgFAFQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDAAgIgFgAFhhJQAKgKAAgEQAKAJgXAPQgDgCAGgIgAiKhkQAHADAGAOQAAAKgKAKQACgagFgLgAF8hNQgOgZgJgFQAEgEAJAIIAOANQgCAZgBAAIgBgMgAl8hQQAHg+AEAvQADAcgFAAQgDAAgGgNgAjqhsIAEAAIAAAAQAFAGgCAIQgCgJgFgFgAl/iJQAQACgDALIAAAAQgMAAgBgNg");
	this.shape_6.setTransform(3.6,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhdBOIADABIgCABIgBgCgABdhPIAAABIAAAAg");
	this.shape_7.setTransform(-32.5,-11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgzBxIAHAAIAPACIgBACIAKgBIAFAAIACAAIAFABIABAAQANAAAIABIAFAAIgBABQAEABABACQgEACgLAJQgEACgFACIgGAAIgJAAIgEAHIAAACIgKAHQgKAHAKgFQgLAKgKALQAFgPgFgwgAhyCGIgCgCIAAgBIgCgBIgNgKIACgDQAFgHAAgCIAHgBIAXABQAJgBAFACQAKACAOACIgLAAQgDADgDACIACADIgBAFQAGAVAFAdQgYgXgdgTgAheArIAAgBIABAAQAEgEABgDIADACIAHACIAEACIAOADIgigBgABbhBQgIgCgIgDQgPgEgLgHQgKgFgFgBIgSgEIg1gBQgGAAgCgBIgWgOIAAgCIAAgBIAAAAQAHggAHgUIABgBIACgDIADgFIAFgFIABABIAAAAIADABIAAAAIABAAIAoAIQAkAHAYAXQAvADAUAFIAAAEIABAFIAAANIABADIAAADQgKAZgeAKg");
	this.shape_8.setTransform(-16.4,-8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DDB477").s().p("AkUEKIgCgHIAAgBIAAgBQABgFAFgGIACgEIABAAIAAAAIABgCIAAgBIABgCIAAgPQABgDgGgFIgDgDIgHgIIgDgCIAAgBIgBAAIgBgEQgCgGAAgKIABgHIAAgBIAAgBQADgPAKgnIABgDIAEgdQADgUAJgMIBChDIAFgEIAAAAQAGgNATgTQAFgHASgLQAcgwAtANIAEAEIABACQAHAHANAAQAMAAADgCIABADIABgCIACACQAFAEAIAAQAJAAABgFIAEAEQAIACAJAHQgBAQABAPQAKAAgBgKQgBgNADgEIAEAAIAAAAQAFAGAIAEQAPAJAZAAQAIAAAHgCQAIAOAFAOIgTACIgDAdIAAAAQgIAFAAASQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgKgIgygBIg2gcIgGgBIgOgBIgMAAIgEAAIgGgCIgCAAIgEgBIAAgBIgHAAIgMgBIAEgDIgBgDIgDAAIgWAOIgsAcIgWAOIAAAAIgGAEIgBACQgdAUgGAJQgHAmgHANIgGAKIgEAJQgCAHgCADQgDALAAANIAAACIABARIACAEIABACIACACIAEAEIAHAIIAEAEIAAABIACAEIAAAOIgBAHIgBAHIgCADIgHANIgBAAQgBACgEABIgDAAIgFABQgKAAgHgDgABAgDIABAAIACAAIgBAAIAAgBgAEhDlIAAAAIABAAgACFDkIgDgBIgBAAIgBAAIALAAIAAAAIAAAAIgBABIgCABIgDgBgAg/DUIgEgBIgTgDIgZgEIgDgBIgIgEIgMgCIABgKIABgHIAAgFIABgIIAAgUQAEgSAIgiIACgFIgBgBIAEgUQADADAIAEQAOAIANAAIARAAIABAAIArABIABABIALAFIAoARIABABIgEAFQgHABgFAKQgGANgDAcIgBABIgEAUIgDAJIgEAKIAAABIgCAHIAAACIgBAAIABgCIgBACIgBACQgTgEgpgCgABfAIIAAgCIAAADIAAgBgAhpgKIABAAIAAABIgBABIAAgCgAhsgIIABgBIAAABIgBAAgAgFh1IAAgDIgFgPIgDgHIADgDIABgBQACADAFAAQAHAAAAgKQABgGgDAAQgDAAAAAFQABAEgFgBIAAgDIAAgEQAAgGgEgEIgCgCQgGgEgEgGIAAgLIALgBIAEABIAJAHQAFAAABgFIAIACQAOAAAAgOIgEgKIgEgLIgCgFIAAgDIACgEIADgDIAEgDIAJgGIABgGIAYgHIgCgJIAKAHIgEABIAJADQANAHADAOIgMgGIgTAMIAYgGIALAGIgCAJIAAAKIADAJIACAHQADAIAJANQAAADgDAEIgEADIgEAAIgGgBIAAAAIgDABIgDgBIAAADIgBABIABABIAAABQABAegHAIQgRgNgRADQAEATAagCQgCAOgSARQgJACgIAAQggAAgQgkgAA/jEIAAAKIADABQABAAAIgMQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgHAHg");
	this.shape_9.setTransform(-11.9,-25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A55927").s().p("AChCiIgDAAQgGAAgDgCQgMgEAEgRIgBgLIAAgCQgGgOgHgKIAFABQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIgIgFIgMgBIAAAAIAEAAIgUAEIgBAAIgDABQgUAAgIgIIgFgFQAHAAAHgDIAAAAIAXghIAJgUQAEgNgEgNIAEABIgDgDIAAgBIAAAAQATAAAAgPQAAgCgEgJIAAAAIgGgPIABAAIgDgKIAAgBIgCgKQgBgQgJgOIgIgMIgGgCIAXgJQADALAHAIIANALIgJAXIARAMIgDAOIgCAEIABADIAMAKQAEAegHAfIgHAKQgCAEgBAEIAAAGIABABIABADIACACIAHACIgFgNQANgVAFgXQgFgQACgQIABgDIgDgEIgKgIIgBgCIABgGIADgHIABgEIgCgIIgOgJIAHgYIgSgNIgEgQQgNgIgOAHIgKAHIgMgFIgHAHIgFAAIgRgTQgPAGgQgGIgNgFIgSALIgHAGIgJgCIgFgCQgEAPgIANQgJAOgPALIADAZIgVAKIAFAEIAEADIAAgCIAHgEIAKgDIACgMQACgMgFgHQAQgHAHgQIACgFQACgJAGgEIAJgEQAHgCAGgFIALgHQAUAIAXgFQAIAIAJAIQADACADABIgPAGIgBAIIgRABIgCgHIgcgJIgFACIgBAXIgQAFIgLgEQgJAKACAQIAEAUIgaAPIAFANIgtAdIAEAOIACADQABAAAAAAQAAAAABAAQAAgBABAAQAAgBAAAAIgBgNQAZgGAQgTIAEgGIgGgLIAOgHIAMgHIgCgSQgBgKgDgJQAOACAPgFIACgBIAGgCIAAgLIAAgFIACgHIAbANIABACIgJAGIAAAGIABAFIACAEIAEAIIAFAKQADAGgKABQgJgEgQgBIgCAAIgBAAIgEAAIgKAHIgDAIQACALAOAOQAAADgEAEQgFAEAAAGIAHAMIAAAJIAAABIgBABIADALIAIAKIAAAAIAAABIAAABQAAAHgHAAIgJgJQgFgDgEAAIgNACQgHABgFgFIACAAQgJgOgSgBQgdgCgaAcQgKALgIANIgjAjQgEgDgDgEIAIgYIgCgEIgLgKQgBgRALgLQAFgGAHgEIgGgYQAOgZAegGIgHgFIgBgMQAOgGASgEQAPgFACgPIgIgOIASgQIgFgYIAKgCIAQgEIgEgWIA/gIIgCgQIAZAGIAVAEIAOgNQAFACADADQAHAGADAKIAlgBIAAAUIAEADIAUgDIADAEQgBAPANAIIAJAEIgHATIABAFIAQAMQAFALgHAKIgGAHIAFAMIgGARIAFAMIgLAZIAQAUIgMANQATAPAEAZIgHAIQAJAMgBAOQgBAOgLAJIgFAAIgKgEgAgPBFIABgBIACACIgCACIgBgDg");
	this.shape_10.setTransform(-13.1,-41.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("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");
	this.shape_11.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(151));

	// Layer 3
	this.instance_1 = new lib.CarmenBicep();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.9,-28.6,1,1,0,0,0,-5.2,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({rotation:-60,x:0,y:-28.4},8).wait(9).to({rotation:0,x:-2.9,y:-28.6},6).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-58.9,95.4,117.2);


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
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmVS',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
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
		
		 window.open ("subj_Scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("subj_Scene1.html","_self");
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


(lib.FourFormsSubjunctiveMood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FourForms();
	this.instance.parent = this;
	this.instance.setTransform(0,-21.3,1.464,1.464);

	this.instance_1 = new lib.TwoVERBSusedareWEREandBE();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.6,-91.3,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({scaleX:1.24,scaleY:1.24,y:-92.4},10).wait(316).to({scaleX:0.77,scaleY:0.77,y:-86.4,alpha:0},8).to({_off:true},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(381).to({_off:false},0).to({scaleX:1.12,scaleY:1.12,alpha:1},8).wait(92));

	// Layer 6
	this.instance_2 = new lib.were();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-143,-9.1);

	this.instance_3 = new lib.were();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-143,-9.1);

	this.instance_4 = new lib.be("synched",16);
	this.instance_4.parent = this;
	this.instance_4.setTransform(91.7,93.3);

	this.instance_5 = new lib.be("synched",4);
	this.instance_5.parent = this;
	this.instance_5.setTransform(91.7,93.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{x:-143,y:-9.1}}]},96).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:-115.7,y:42.1}}]},81).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:-115.7,y:42.1}},{t:this.instance_4,p:{x:91.7,y:93.3,startPosition:16}}]},75).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:-115.7,y:42.1}},{t:this.instance_5},{t:this.instance_4,p:{x:2.4,y:144.7,startPosition:4}}]},88).wait(141));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgDACgDQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape.setTransform(-25.8,-33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_1.setTransform(-33.1,-32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_2.setTransform(-40.9,-32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_3.setTransform(-48.6,-33.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_4.setTransform(-60.9,-32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgDACgDQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_5.setTransform(-68.2,-33.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_6.setTransform(-80.4,-30.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAiIAAgzIAAgHIAAgHQAAgIAGAAQAIAAgBAMQAOgNARAAQAGAAADAEQACAEAAAKIAAAFQAAAJgHAAQgGAAAAgHIAAgFIgBgHQgLACgGAFQgHAFgEAJIAAAoQAAAHgHAAQgHAAABgHg");
	this.shape_7.setTransform(-87.4,-32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_8.setTransform(-95.1,-32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcAiIAAgzIABgHIAAgHQAAgIAHAAQAGAAABAMQANgNARAAQAGAAADAEQACAEAAAKIAAAFQAAAJgGAAQgHAAAAgHIAAgFIAAgHQgMACgGAFQgHAFgEAJIABAoQAAAHgIAAQgGAAgBgHg");
	this.shape_9.setTransform(-102.3,-32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgDACgDQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_10.setTransform(-109.7,-33.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCABQgCACgDAAQgGAAgBgGg");
	this.shape_11.setTransform(-117,-32.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_12.setTransform(-125.2,-32.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_13.setTransform(-132.8,-32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUApQgLgFAAgHQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAIABQAGAAAEgCQAHgCAAgEQAAgKgNgEIgHgBQgKgCgEgDQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAHIABAGQAAADgCACQgCACgEAAQgDAAgCgDIgCgIIgRAGQgLAEAAAHIAFABQAQADAHAFQANAIAAAOQgBAMgJAGQgKAFgMAAQgJAAgJgDg");
	this.shape_14.setTransform(-145,-32.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgDACgDQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_15.setTransform(-152,-33.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCABQgCACgDAAQgGAAgBgGg");
	this.shape_16.setTransform(-159.3,-32.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAJgOARAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAGADAIABQAFgBAGgCQAJgCACgDQADgFADAAQACAAACACQABABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_17.setTransform(-167.3,-32.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_18.setTransform(-177.3,-32.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZAfQgLgJAAgQQAAgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHADAGABQAGgBAHgCQAIgCADgDQACgFACAAQAEAAACACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_19.setTransform(-187.1,-32.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgDACgDQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_20.setTransform(-194.9,-33.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_21.setTransform(-202.3,-32.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgDACgDQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_22.setTransform(-209.7,-33.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTApQgMgFAAgHQAAgCADgDQACgCACAAQADAAAEADQABACAHABIAIABQAEAAAGgCQAGgCAAgEQAAgKgOgEIgHgBQgJgCgEgDQgGgDAAgJQAAgPAPgGIAMgFIAPgFIAGgBQADAAACACQACACAAADIABAHIABAGQAAADgCACQgCACgDAAQgEAAgCgDIgCgIIgRAGQgLAEABAHIADABQAQADAJAFQAMAIgBAOQABAMgLAGQgJAFgLAAQgKAAgIgDg");
	this.shape_23.setTransform(-217,-32.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_24.setTransform(-231.3,-28.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AACA5IgNAAIgIgBQgDgBAAgEQgBgIAMABIADAAIAEAAIgBgLIgBgKIACgcIACgcQgKAIgDAAQgDAAgCgCQgCgCAAgEQAAgDAGgFIAMgJQAEgGAHAAQAEAAAAAFIAAAGIgBAEIABAIIAAAHIgCAZIgCAYIABAKIABAKIAHAAQADAAADACQACACAAADQAAADgCACQgDACgDAAg");
	this.shape_25.setTransform(-236.5,-34.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUApQgLgFAAgHQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAIABQAGAAAEgCQAHgCAAgEQAAgKgNgDIgHgCQgKgCgEgDQgGgEAAgHQAAgQAOgHIAOgEIANgFIAHgBQADAAACACQACACAAADIABAHIABAFQAAAEgCACQgCACgEAAQgDAAgCgDIgCgIIgRAGQgLAFAAAGIAFABQAQAEAHAEQANAIAAAOQgBAMgJAGQgKAFgMAAQgJAAgJgDg");
	this.shape_26.setTransform(-176,18.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZAfQgKgJgBgQQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgIAGIgPAHIgbANQAEAHAGACQAHADAGAAQAGAAAHgCQAIgBADgEQACgFACAAQAEAAABACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_27.setTransform(-183.4,18.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAUA3IgDgQIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_28.setTransform(-191.9,16.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTApQgMgFAAgHQAAgCADgDQABgCADAAQADAAADADQACACAHABIAIABQAFAAAEgCQAHgCAAgEQAAgKgOgDIgHgCQgJgCgEgDQgGgEAAgHQAAgQAPgHIAMgEIAPgFIAGgBQADAAACACQACACAAADIABAHIABAFQAAAEgCACQgCACgDAAQgFAAgBgDIgCgIIgRAGQgKAFAAAGIADABQAQAEAIAEQAMAIAAAOQAAAMgKAGQgIAFgMAAQgKAAgIgDg");
	this.shape_29.setTransform(-200.2,18.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_30.setTransform(-205.6,17.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAFAVIgDgRIgCgPIgFAMIgMAfIgDAEQgCAFgFAAQgFAAgGgXIgEgdIgDgLIgBgLQABgDACgCQACgCADAAQAFAAACAGIABAKIABAMIAFAfQAIgWAIgdQADgIAFAAQAGAAACAJIAFAbIAFAcIAFgUIAJgoQACgEAFAAQADAAACACQACACABADIgBAEIgPA1QgCAGgFAHQgDAEgEAAQgIAAgEgUg");
	this.shape_31.setTransform(-212.9,19.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_32.setTransform(-228.9,22.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWA3IgFgBIgLABIgKAAIgJABIgIAAIgCAAIgDAAQgFAAgBgFIgBgJQAAgRAJgKQAEgFATgMQAJgHAEgEQAGgHAAgKQAAgEgGgEQgFgDgFAAQgGAAgGAEIgLAIQgDACgCAAQgHAAAAgGQAAgDADgDQAIgIAGgDQAJgFAJAAQAMAAAJAGQAKAHAAAMQAAAHgCAHQgCAGgEAFQgGAGgNAIQgNAIgEAFQgIAIAAAMIAPgBIAVgBQAGAAAFACQAGADAAAEQAAADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgGgBg");
	this.shape_33.setTransform(-235.4,16.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgZAyQgLgLABgQQgBgTALgLQALgMAPAAQAIAAAFACIAHAGIACgqQABgGAGAAQAHAAAAAHIgEAtIAAAVQAAAYACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgFAAgDgHQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHAAAPQABAKAGAGQAHAHAJAAQAFAAAFgCIAIgHIACgCIAAgMIAAgJIAAgIQgDgGgFgCQgEgDgHgBQgLAAgGAHg");
	this.shape_34.setTransform(37.9,68.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgUIAAgIIgBgHQAAgDADgBQACgCADAAQAGgBABAKIAAAJQANgRAMAAQALAAAFALQADAGAAAOIAAAHIAAAGIACAQIABAPQAAADgCADQgCABgDABQgGgBgBgGg");
	this.shape_35.setTransform(29.8,70);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_36.setTransform(21.8,70.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_37.setTransform(0.6,70.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_38.setTransform(-29.3,70.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgUApQgLgFAAgHQAAgDACgCQADgCACAAQADAAAEAEQABABAHABIAHABQAFAAAGgCQAGgCAAgEQAAgKgNgDIgIgCQgJgCgEgDQgGgEAAgHQAAgQAOgHIANgEIAPgFIAGgBQADAAACACQACACAAAEIABAGIABAFQAAAEgCACQgCACgEAAQgEAAgBgCIgCgJIgRAGQgLAFAAAGIAFABQAPAEAJAFQAMAGgBAPQABAMgKAGQgKAFgMAAQgJAAgJgDg");
	this.shape_39.setTransform(-61.4,69.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgrIgQAAQgHgCAAgGQAAgDACgCQACgDADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCABgEABIgDAAIgEAAIgKAAIACArIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_40.setTransform(-68.4,68.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgUIAAgIIgBgHQAAgDADgBQACgCADAAQAGgBABAKIAAAJQANgRAMAAQALAAAFALQADAGAAAOIAAAHIAAAGIACAQIABAPQAAADgCADQgCABgDABQgGgBgBgGg");
	this.shape_41.setTransform(-75.7,70);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAgQgLgKABgQQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAGAGADQAHADAGAAQAFAAAHgCQAJgBADgFQACgEACAAQADAAADACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_42.setTransform(-83.7,70.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgrIgQAAQgHgCAAgGQAAgDACgCQACgDADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCABgEABIgDAAIgEAAIgKAAIACArIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_43.setTransform(-91.5,68.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgUIAAgIIgBgHQAAgDADgBQACgCADAAQAGgBABAKIAAAJQANgRAMAAQALAAAFALQADAGAAAOIAAAHIAAAGIACAQIABAPQAAADgCADQgCABgDABQgGgBgBgGg");
	this.shape_44.setTransform(-98.8,70);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_45.setTransform(-107,70.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_46.setTransform(-114.6,70.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZAgQgLgKABgQQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAGAGADQAHADAGAAQAFAAAHgCQAJgBADgFQACgEACAAQADAAADACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_47.setTransform(-126.9,70.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAUA3IgDgRIgBgRIAAgGIAAgGQAAgMgHAAQgJgBgHAIIgKAQQAAAdgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAALIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_48.setTransform(-135.4,68.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgrIgQAAQgHgCAAgGQAAgDACgCQACgDADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCABgEABIgDAAIgEAAIgKAAIACArIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_49.setTransform(-143.4,68.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZA5QgJgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKgBgNQAAgUAMgMQAMgMASAAQAIAAAEACQAEABADAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgDAMgIAFQgJAHgPAAQgKAAgHgBgAgMgkQgIAJAAANQAAALAEAEQAFAFAIAAQAGAAAHgHQAGgIABgHIAEgZIgGgDQgDgCgEAAQgNAAgHAKg");
	this.shape_50.setTransform(-155.4,72.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgUIAAgIIgBgHQAAgDADgBQACgCADAAQAGgBABAKIAAAJQANgRAMAAQALAAAFALQADAGAAAOIAAAHIAAAGIACAQIABAPQAAADgCADQgCABgDABQgGgBgBgGg");
	this.shape_51.setTransform(-163.1,70);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_52.setTransform(-169.1,68.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgZAgQgLgKAAgQQAAgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAGAGADQAHADAGAAQAGAAAHgCQAIgBADgFQACgEACAAQAEAAACACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_53.setTransform(-183.1,70.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgHAiIgLgeIgNggIgBgEQAAgDACgCQACgCADAAQAFAAACAEIASAzIANghIAGgRQADgFAEAAQADAAACACQACADAAADQAAACgMAdIgPAhQAAAHgGAAQgFAAgCgGg");
	this.shape_54.setTransform(-190.9,70);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgUIAAgIIgBgHQAAgDADgBQACgCADAAQAGgBABAKIAAAJQANgRAMAAQALAAAFALQADAGAAAOIAAAHIAAAGIACAQIABAPQAAADgCADQgCABgDABQgGgBgBgGg");
	this.shape_55.setTransform(-198.4,70);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_56.setTransform(-206.6,70.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgUA1QgKgFgDgKIgBgDQAAgDADgBQACgCADAAQADAAACACIADAFQADAEAEACQAFACAGAAQAHAAAHgFQAFgGAAgHQAAgLgHgHQgIgGgLgBQgHgBAAgFQAAgEAFgCIARgEQAFgCADgDQACgDAAgFQAAgGgEgEQgGgEgJAAQgEAAgFACIgJAFIgDACQgDAAgDgCQgBgDAAgDQAAgFALgGQAJgFAHAAQAPAAAJAHQAKAIAAAOQAAARgOAFIgDABQAJAEAGAGQAEAHAAALQAAAOgKALQgKAKgOAAQgLAAgJgFg");
	this.shape_57.setTransform(-235.5,68.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_58.setTransform(-228.9,22.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_59.setTransform(-33.1,-32.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_60.setTransform(-48.6,-33.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_61.setTransform(-60.9,-32.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_62.setTransform(-80.4,-30.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_63.setTransform(-125.2,-32.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_64.setTransform(-132.8,-32.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_65.setTransform(-177.3,-32.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgUAoQgLgEAAgHQAAgDACgCQACgCAEAAQACAAADAEQACABAGABIAIABQAGAAAEgBQAHgDAAgEQAAgKgNgDIgHgCQgKgDgEgCQgGgEAAgHQAAgQAOgHIAOgEIANgFIAHgBQADAAACACQACACAAAEIABAGIABAFQAAAEgCACQgCACgEAAQgDAAgCgCIgCgIIgRAEQgLAGAAAGIAFACQAQACAHAGQANAGAAAPQgBAMgJAGQgKAFgMAAQgJAAgJgEg");
	this.shape_66.setTransform(-7.3,121);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAGIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgUIAAgIIgBgHQAAgCADgCQACgCADgBQAGAAABAKIAAAIQANgQAMAAQALAAAFALQADAGAAAOIAAAIIAAAFIACAQIABAPQAAAEgCACQgCACgDAAQgGgBgBgGg");
	this.shape_67.setTransform(-14.5,121.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgCQACgBADgBQACABACABQACACAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_68.setTransform(-28.5,119.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgrIgQAAQgHgCAAgGQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADgBQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCACgEAAIgDAAIgEAAIgKAAIACArIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_69.setTransform(-34.2,120.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAQAjQgJAFgLgBQgJAAgHgDQgHgGgBgJQgDgSAAgPQAAgKACgMQABgHAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgEIAAgOIAAgOQAAgPABgMQABgGAGgBQADAAADACQACADAAADIgCAbIAAAPIAAAQIABAFIAAAFQAAADgCACQgCACgDAAQgGAAgCgHg");
	this.shape_70.setTransform(-41.6,121.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgHA1IABgaIABgbIAAgaIAAgaQAAgIAHAAQAGAAABAIIgBAaIAAAaIgCAkIAAASQgBAGgFABQgIAAABgIg");
	this.shape_71.setTransform(-47.6,119.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgUAoQgLgEAAgHQAAgDACgCQACgCAEAAQACAAADAEQACABAGABIAIABQAFAAAFgBQAHgDAAgEQAAgKgOgDIgGgCQgKgDgEgCQgGgEAAgHQAAgQAOgHIAOgEIANgFIAHgBQADAAACACQACACAAAEIABAGIABAFQAAAEgCACQgCACgEAAQgDAAgCgCIgCgIIgRAEQgLAGAAAGIAEACQARACAHAGQANAGAAAPQAAAMgLAGQgIAFgNAAQgJAAgJgEg");
	this.shape_72.setTransform(-61.4,121);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgZAgQgLgJAAgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbAOQAEAFAGAEQAHACAGAAQAGAAAHgBQAIgCADgFQACgDACAAQAEAAACABQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_73.setTransform(-68.8,121.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgbAiIAAgzIAAgHIAAgIQAAgHAHAAQAGAAAAANQAOgOARAAQAGAAADAFQADAEgBAIIAAAGQAAAJgHAAQgGAAAAgHIAAgGIAAgFQgMABgGAFQgGAFgFAJIAAAoQABAHgIAAQgGAAAAgHg");
	this.shape_74.setTransform(-76.4,121.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgZAyQgLgLAAgQQAAgTALgLQALgMAPAAQAJAAAEACIAHAGIACgqQABgGAGAAQAHAAgBAHIgDAtIAAAVQAAAYACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgFAAgCgHQgFAEgGACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQAAAJAGAHQAHAHAJAAQAFAAAEgCIAIgHIADgCIAAgMIAAgJIAAgIQgDgGgFgCQgFgEgGAAQgLAAgHAHg");
	this.shape_75.setTransform(-89.2,119.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAGIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgUIAAgIIgBgHQAAgCADgCQACgCADgBQAGAAABAKIAAAIQANgQAMAAQALAAAFALQADAGAAAOIAAAIIAAAFIACAQIABAPQAAAEgCACQgCACgDAAQgGgBgBgGg");
	this.shape_76.setTransform(-97.3,121.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgUAoQgLgEAAgHQAAgDACgCQADgCADAAQACAAADAEQACABAGABIAIABQAGAAAEgBQAHgDAAgEQAAgKgNgDIgHgCQgKgDgEgCQgGgEAAgHQAAgQAOgHIAOgEIANgFIAHgBQADAAACACQACACAAAEIABAGIABAFQAAAEgCACQgCACgEAAQgEAAgBgCIgCgIIgRAEQgLAGAAAGIAFACQAQACAHAGQAMAGABAPQgBAMgJAGQgKAFgMAAQgJAAgJgEg");
	this.shape_77.setTransform(-117.4,121);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAGIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgUIAAgIIgBgHQAAgCADgCQACgCADgBQAGAAABAKIAAAIQANgQAMAAQALAAAFALQADAGAAAOIAAAIIAAAFIACAQIABAPQAAAEgCACQgCACgDAAQgGgBgBgGg");
	this.shape_78.setTransform(-124.7,121.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgCQACgBADgBQACABACABQACACAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_79.setTransform(-138.6,119.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgrIgQAAQgHgCAAgGQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADgBQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCACgEAAIgDAAIgEAAIgKAAIACArIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_80.setTransform(-144.4,120.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgIA1IABgaIABgbIAAgaIABgaQAAgIAGAAQAIAAgBAIIAAAaIAAAaIgBAkIgBASQgBAGgFABQgIAAAAgIg");
	this.shape_81.setTransform(-174,119.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgcAiIAAgzIABgHIAAgIQAAgHAGAAQAIAAgBANQAOgOARAAQAGAAADAFQACAEABAIIAAAGQgBAJgHAAQgGAAAAgHIAAgGIgBgFQgLABgGAFQgGAFgFAJIAAAoQAAAHgHAAQgHAAAAgHg");
	this.shape_82.setTransform(-198.8,121.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AALAwIAAgEIAAgDIAAgRIgfgBIgOgBQgHgBAAgEQAAgDAEgFIAHgIIAjgzQAFgHAHAAQAIAAAAAHIAAA8IADAAQAOAAAAAHQAAAFgGACQgCABgJgBIAAAbQAAAHgGAAQgIAAAAgKgAgSAJIAdABIAAgvIgdAug");
	this.shape_83.setTransform(-235.5,119.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_84.setTransform(21.8,70.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_85.setTransform(0.6,70.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_86.setTransform(-29.3,70.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_87.setTransform(-49.3,70.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_88.setTransform(-107,70.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_89.setTransform(-206.6,70.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_90.setTransform(-228.9,73.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_91.setTransform(-228.9,22.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_92.setTransform(-48.6,-33.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_93.setTransform(-60.9,-32.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_94.setTransform(-125.2,-32.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_95.setTransform(-177.3,-32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-177.3,y:-32.3}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-132.8,y:-32.3}},{t:this.shape_12,p:{x:-125.2,y:-32.2}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:-80.4,y:-30.3}},{t:this.shape_5},{t:this.shape_4,p:{x:-60.9,y:-32.2}},{t:this.shape_3,p:{x:-48.6,y:-33.9}},{t:this.shape_2},{t:this.shape_1,p:{x:-33.1,y:-32.3}},{t:this.shape}]},58).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-177.3,y:-32.3}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-132.8,y:-32.3}},{t:this.shape_12,p:{x:-125.2,y:-32.2}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:-80.4,y:-30.3}},{t:this.shape_5},{t:this.shape_4,p:{x:-60.9,y:-32.2}},{t:this.shape_3,p:{x:-48.6,y:-33.9}},{t:this.shape_2},{t:this.shape_1,p:{x:-33.1,y:-32.3}},{t:this.shape},{t:this.shape_33},{t:this.shape_32,p:{y:22.3,x:-228.9}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},90).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_65,p:{x:-177.3,y:-32.3}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_64},{t:this.shape_63,p:{x:-125.2,y:-32.2}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_62},{t:this.shape_5},{t:this.shape_61,p:{x:-60.9,y:-32.2}},{t:this.shape_60,p:{x:-48.6,y:-33.9}},{t:this.shape_2},{t:this.shape_59},{t:this.shape},{t:this.shape_33},{t:this.shape_58,p:{y:22.3}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_57},{t:this.shape_32,p:{y:73.5,x:-228.9}},{t:this.shape_13,p:{x:-214.2,y:70.1}},{t:this.shape_56,p:{x:-206.6,y:70.2}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_6,p:{x:-175.5,y:72.1}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:-107,y:70.2}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_12,p:{x:-49.3,y:70.2}},{t:this.shape_3,p:{x:-41.5,y:68.5}},{t:this.shape_38,p:{x:-29.3,y:70.2}},{t:this.shape_1,p:{x:-17,y:70.1}},{t:this.shape_4,p:{x:-9.4,y:70.2}},{t:this.shape_37,p:{x:0.6,y:70.1}},{t:this.shape_18,p:{x:12.3,y:70.1}},{t:this.shape_36,p:{x:21.8,y:70.2}},{t:this.shape_35},{t:this.shape_34}]},56).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_95},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_64},{t:this.shape_94},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_62},{t:this.shape_5},{t:this.shape_93},{t:this.shape_92},{t:this.shape_2},{t:this.shape_59},{t:this.shape},{t:this.shape_33},{t:this.shape_91},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_57},{t:this.shape_90},{t:this.shape_13,p:{x:-214.2,y:70.1}},{t:this.shape_89},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_6,p:{x:-175.5,y:72.1}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_88},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_87},{t:this.shape_60,p:{x:-41.5,y:68.5}},{t:this.shape_86},{t:this.shape_1,p:{x:-17,y:70.1}},{t:this.shape_63,p:{x:-9.4,y:70.2}},{t:this.shape_85},{t:this.shape_65,p:{x:12.3,y:70.1}},{t:this.shape_84},{t:this.shape_35},{t:this.shape_34},{t:this.shape_83},{t:this.shape_58,p:{y:124.7}},{t:this.shape_3,p:{x:-214.4,y:119.7}},{t:this.shape_61,p:{x:-206.7,y:121.4}},{t:this.shape_82},{t:this.shape_37,p:{x:-189.5,y:121.3}},{t:this.shape_38,p:{x:-179.9,y:121.4}},{t:this.shape_81},{t:this.shape_18,p:{x:-161.5,y:121.3}},{t:this.shape_56,p:{x:-152,y:121.4}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_45,p:{x:-132.9,y:121.4}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_36,p:{x:-105.3,y:121.4}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_12,p:{x:-53.8,y:121.4}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_4,p:{x:-22.7,y:121.4}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_32,p:{y:124.7,x:-1.5}}]},99).wait(178));

	// Layer 4
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#009900").s().p("AAJAWQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIABgcIABgIQABgFAFAAQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBADIAAADIgBAcQAAAGgGAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAgUALIAAgNIABgPQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAPIAAANIAAADIABAEQAAAAAAABQAAABAAAAQgBABAAAAQgBABAAAAQgCACgDAAQgHAAAAgNg");
	this.shape_96.setTransform(15.7,-12.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#009900").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_97.setTransform(11,-3.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#009900").s().p("AATA4QgDgHgIgKIgMgSIgNAJIgBAWQAAAEgCACQgCACgDAAQgIAAAAgKIABgSIABgTIABgYIAAgZIAAgIIgBgIQAAgDACgCQACgCADAAQAEAAACACQABACAAADIABAIIAAAIIgBAYIAAAYQALgHAHgJIARgQQACgDADAAQADAAACADQACACAAADQAAACgCADQgIAKgOALIAQAWQAMAPAAAFQgBADgCACQgCACgDAAQgEAAgDgEg");
	this.shape_98.setTransform(5.5,-8.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#009900").s().p("AgcAhIAAgyIABgHIAAgIQAAgHAHAAQAGAAABANQANgOARAAQAGAAADAFQACADAAAJIAAAGQAAAJgGAAQgHAAAAgHIAAgGIAAgFQgMABgGAFQgHAFgEAKIABAmQAAAIgIAAQgGAAgBgIg");
	this.shape_99.setTransform(-2.4,-6.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#009900").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_100.setTransform(-10.4,-6.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#009900").s().p("AAEAVIgCgRIgCgQIgFAOIgMAeIgDAEQgCAFgEgBQgGAAgGgVIgEgeIgCgLIgCgLQAAgDADgCQACgCADAAQAFAAACAGIABAKIABALIAFAgQAIgVAJgeQACgIAFAAQAGAAACAJIAEAaIAGAcIAFgUIAJgmQACgFAFAAQADAAADACQACACAAADIgBADIgPA1QgCAHgFAHQgDAEgEAAQgIAAgFgUg");
	this.shape_101.setTransform(-19.2,-6.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#009900").s().p("AgZAyQgKgLAAgQQAAgUAKgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAAAAHIgCAtIgBAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEABgDgHQgFAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAIgBAOQAAAKAHAGQAHAHAJAAQAFAAAEgCIAJgHIABgBIAAgOIAAgIIAAgJQgCgFgFgDQgFgDgGAAQgLABgHAGg");
	this.shape_102.setTransform(-33.3,-8.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#009900").s().p("AgHA1IAAgaIABgbIAAgZIABgbQAAgHAGgBQAIABAAAHIgBAbIAAAZIgBAlIgBARQAAAGgGAAQgHABAAgIg");
	this.shape_103.setTransform(-39.7,-8.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#009900").s().p("AAQAjQgJAEgLAAQgJAAgHgDQgHgGgBgJQgDgSAAgPQAAgKACgMQABgHAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgEIAAgOIAAgNQAAgQABgMQABgGAGgBQADAAADACQACADAAADIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_104.setTransform(-45.7,-6.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#009900").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_105.setTransform(-53.7,-6.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#009900").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_106.setTransform(-61.3,-6.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#009900").s().p("AgfA2QgCgCAAgDQAAgEACgCQACgCADAAIAPgBIABgOIAAgMIgBgNQAAgPACgaIgJABIgKAAQgDAAgCgDQgCgBAAgEQAAgGAHgCIAWAAQANAAAXADQAGABAAAHQAAAEgDACQgCABgCAAIgMAAIgMgCIgBAnIAAANIAAANIAAAMIAWAAQAEAAABACQACACAAADQAAADgCADQgBACgEAAIgMAAIgMAAIgOACIgOABQgDAAgCgCg");
	this.shape_107.setTransform(-73.8,-8.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#009900").s().p("AgIAQQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAFgLIAFgNQACgEACAAQABAAABAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAACgKAWQgBAEgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAg");
	this.shape_108.setTransform(-84,-2.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgJIAAgHIgBgqIgQgBQgHgBAAgHQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgDACgDQACgCADAAQAGABABAKIAAAHIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCABQgCADgEAAIgDAAIgEAAIgKABIACAqIAAADIAAADQAAARgIgBQgCABgCgCg");
	this.shape_109.setTransform(-90.1,-7.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#009900").s().p("AgYAgQgLgKAAgQQAAgSAJgNQAJgOARAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbAOQAEAFAGAEQAGACAIAAQAFAAAGgBQAJgDACgEQADgDADAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgIgAgOgTQgHAHgCANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_110.setTransform(-97.5,-6.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#009900").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgDQACgBADAAQACAAACABQACADAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_111.setTransform(-103.8,-8.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#009900").s().p("AAQAjQgJAEgLAAQgJAAgHgDQgHgGgBgJQgDgSAAgPQAAgKACgMQABgHAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgEIAAgOIAAgNQAAgQABgMQABgGAGgBQADAAADACQACADAAADIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_112.setTransform(-109.9,-6.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#009900").s().p("AAKA0IABgIIABgIIABgQIgJABQgPAAgKgIQgKgJAAgOQAAgWAMgNQAMgNAUAAQAEAAADADQADgDACAAQADAAACADQACACAAADQAAAWgCAZIgEAbIgBAcQAAADgCACQgCACgEAAQgGAAgBgHgAAIgtQgMACgHALQgGAJAAANQAAAIAGAFQAFAGAKAAQAHgBADgHQADgHABgUIABgTIgGAAIgDAAIgCAAg");
	this.shape_113.setTransform(-118,-4.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#009900").s().p("AgYAgQgMgKAAgQQABgSAIgNQAKgOARAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbAOQAEAFAGAEQAGACAIAAQAEAAAHgBQAJgDACgEQADgDADAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_114.setTransform(-130,-6.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#009900").s().p("AgcAhIAAgyIABgHIAAgIQAAgHAGAAQAIAAAAANQANgOARAAQAGAAADAFQADADAAAJIAAAGQgBAJgGAAQgHAAAAgHIAAgGIgBgFQgLABgGAFQgGAFgFAKIABAmQgBAIgHAAQgHAAAAgIg");
	this.shape_115.setTransform(-137.7,-6.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#009900").s().p("AgYAgQgMgKAAgQQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbAOQAEAFAGAEQAHACAHAAQAEAAAIgBQAIgDACgEQADgDADAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_116.setTransform(-145.4,-6.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#009900").s().p("AAEAVIgCgRIgCgQIgFAOIgMAeIgDAEQgCAFgFgBQgFAAgGgVIgEgeIgDgLIgBgLQAAgDADgCQACgCADAAQAFAAACAGIABAKIABALIAFAgQAIgVAJgeQACgIAFAAQAGAAACAJIAFAaIAFAcIAFgUIAJgmQACgFAFAAQADAAACACQADACAAADIgBADIgPA1QgCAHgFAHQgDAEgEAAQgIAAgFgUg");
	this.shape_117.setTransform(-154.8,-6.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#009900").s().p("AgYAgQgMgKAAgQQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbAOQAEAFAGAEQAHACAHAAQAEAAAIgBQAIgDACgEQADgDADAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_118.setTransform(-168.4,-6.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#009900").s().p("AAUA3IgDgRIgBgRIAAgGIAAgFQAAgOgHAAQgJAAgHAIIgKAQQAAAcgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAAQIAAARIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_119.setTransform(-176.9,-8.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#009900").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_120.setTransform(-189.7,-8.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#009900").s().p("AggA2QgCgCAAgDQAAgEACgCQADgCADAAIAQgBIABgOIgBgMIAAgNQAAgPABgaIgJABIgJAAQgEAAgCgDQgCgBAAgEQAAgGAHgCIAWAAQAOAAAVADQAHABAAAHQAAAEgCACQgDABgDAAIgLAAIgMgCIgCAnIAAANIABANIgBAMIAXAAQADAAADACQACACAAADQAAADgCADQgDACgDAAIgMAAIgMAAIgNACIgPABQgDAAgDgCg");
	this.shape_121.setTransform(-197.5,-8.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#009900").s().p("AAIAWQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgcIABgIQACgFAFAAQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBADIAAADIgBAcQABAGgHAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBgAgUALIAAgNIABgPQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAPIAAANIAAADIABAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgNg");
	this.shape_122.setTransform(-205,-12.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#009900").s().p("AAIAWQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIABgcIAAgIQACgFAFAAQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBADIAAADIgBAcQAAAGgGAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBgAgUALIAAgNIABgPQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAPIAAANIAAADIABAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgNg");
	this.shape_123.setTransform(-52.6,38.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#009900").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_124.setTransform(-57.3,47.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgBQgHgCAAgGQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGABABAKIAAAHIAAAEIAAAFIAKgBIAKAAQAFACAAAFQAAADgCACQgCACgEABIgDAAIgEAAIgKABIACApIAAAEIAAADQAAAQgIAAQgCAAgCgBg");
	this.shape_125.setTransform(-62.8,43.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#009900").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbAOQAEAFAGAEQAHADAGAAQAFAAAHgCQAJgCADgFQACgDACAAQADAAADACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_126.setTransform(-70.2,44.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#009900").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_127.setTransform(-76.5,42.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#009900").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgEgBgJQgDgUAAgOQAAgKACgMQABgHAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADABQACACAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_128.setTransform(-82.6,44.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#009900").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFgBALQABAHgJAGIgPAHIgbAOQAEAFAGAEQAGADAHAAQAFAAAHgCQAJgCADgFQACgDACAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_129.setTransform(-102.7,44.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#009900").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAGAAQAIAAgBAMQAOgNARAAQAGAAADAEQACAFAAAJIAAAFQAAAJgHAAQgGAAAAgHIAAgGIgBgGQgLACgGAFQgHAFgEAKIAAAmQAAAIgHAAQgHAAABgIg");
	this.shape_130.setTransform(-110.4,44.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#009900").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAALQAAAHgJAGIgPAHIgbAOQAEAFAGAEQAGADAIAAQAFAAAGgCQAJgCACgFQADgDACAAQADAAADACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_131.setTransform(-118.1,44.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#009900").s().p("AAEAVIgDgRIgBgQIgGAOIgLAeIgCAEQgDAEgEAAQgGAAgFgVIgGgeIgBgLIgBgLQAAgDACgCQACgCADAAQAFAAACAGIABALIACAKIAEAgQAIgVAJgeQACgIAFAAQAGAAACAJIAEAaIAGAcIAFgTIAJgnQACgFAFAAQADAAADACQABACAAADIAAADIgPA1QgCAHgFAHQgCAEgFAAQgIAAgFgUg");
	this.shape_132.setTransform(-127.5,44.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#009900").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAALQAAAHgJAGIgPAHIgbAOQAEAFAGAEQAGADAIAAQAFAAAGgCQAJgCACgFQADgDACAAQADAAADACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_133.setTransform(-141.1,44.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#009900").s().p("AAUA4IgDgSIgBgRIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKAQQAAAcgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAANIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_134.setTransform(-149.6,42.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#009900").s().p("AAUA4IgDgSIgBgRIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKAQQAAAcgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAANIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_135.setTransform(-162.7,42.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#009900").s().p("AgUAoQgLgDAAgIQAAgDACgCQADgCADAAQACAAADADQACACAGABIAIABQAGAAAEgBQAHgCAAgFQAAgKgNgEIgHgCQgKgCgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAAEIABAFIABAHQAAADgCACQgCACgEAAQgEAAgBgDIgCgHIgRAEQgLAFAAAHIAFACQAQADAHAEQAMAHABAPQgBAMgJAGQgKAFgMAAQgJAAgJgEg");
	this.shape_136.setTransform(-171,44.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#009900").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_137.setTransform(-176.4,42.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#009900").s().p("AAEAVIgDgRIgBgQIgGAOIgLAeIgCAEQgDAEgEAAQgGAAgFgVIgGgeIgBgLIgBgLQAAgDACgCQACgCADAAQAFAAACAGIABALIACAKIAEAgQAIgVAJgeQACgIAFAAQAGAAACAJIAEAaIAGAcIAFgTIAJgnQACgFAFAAQADAAADACQABACAAADIAAADIgPA1QgCAHgFAHQgCAEgFAAQgIAAgFgUg");
	this.shape_138.setTransform(-183.7,44.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#009900").s().p("AggA2QgCgCAAgEQAAgDACgBQADgDADAAIAQgCIABgNIgBgMIAAgNQAAgPABgaIgJABIgJAAQgEgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgCACQgDABgDAAIgLAAIgMgCIgCAnIAAANIABANIgBAMIAXAAQADAAADACQACACAAADQAAADgCADQgDACgDAAIgMAAIgMAAIgNACIgPABQgDAAgDgCg");
	this.shape_139.setTransform(-197.5,42.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#009900").s().p("AAKA0IABgIIABgIIABgQIgJABQgPAAgKgIQgKgJAAgOQAAgWAMgNQAMgNAUAAQAEAAADADQADgDACAAQADAAACADQACACAAADQAAAWgCAZIgEAbIgBAcQAAADgCACQgCACgEAAQgGAAgBgHgAAIgtQgMACgHALQgGAJAAANQAAAIAGAFQAFAGAKAAQAHgBADgHQADgHABgUIABgTIgGAAIgDAAIgCAAg");
	this.shape_140.setTransform(-118,-4.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#009900").s().p("AAIAWQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgcIABgIQACgFAFAAQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBADIAAADIgBAcQABAGgHAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBgAgUALIAAgNIABgPQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAPIAAANIAAADIABAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgNg");
	this.shape_141.setTransform(-205,-12.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#009900").s().p("AAIAWQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAIABgcIABgIQACgFAFAAQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIAAADIAAADIgCAcQABAGgHAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBgAgUALIAAgNIAAgPQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAPIAAANIAAADIABAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgNg");
	this.shape_142.setTransform(162.7,90.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#009900").s().p("AgZAyQgKgLAAgQQAAgUAKgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAABAHIgDAtIgBAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgDgGQgFAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAIgBAOQAAAJAHAHQAHAHAJAAQAFAAAFgCIAIgGIABgCIAAgOIAAgIIAAgJQgCgFgFgDQgFgCgGAAQgLAAgHAGg");
	this.shape_143.setTransform(151.6,93.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#009900").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQAMAAAIAEQAJAFAAALQAAAHgJAGIgPAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgCQAJgDACgDQADgEACgBQADABADACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_144.setTransform(143.3,95.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#009900").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_145.setTransform(133.3,95.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#009900").s().p("AgcAhIAAgyIABgHIAAgHQAAgIAHAAQAGAAABAMQANgNARAAQAGAAADAEQACAFAAAJIAAAFQAAAJgGAAQgHAAAAgHIAAgGIAAgGQgMACgGAFQgHAFgEAKIABAmQAAAIgIAAQgGAAgBgIg");
	this.shape_146.setTransform(124,95.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#009900").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAFAAAHgCQAJgDADgDQACgEACgBQADABADACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_147.setTransform(96.3,95.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#009900").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIAAgWIAAgUIAAgVQAAgEACgEQACgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAFgDAFAAQAPAAAKAMQAKALgBAQQAAARgLAMQgKALgPAAQgLAAgKgEgAgLgCIgKAGIgBAMIAAAMIABAMIAJAEIALABQAKAAAGgHQAHgIAAgLQAAgLgGgHQgGgHgJAAQgFAAgHAEg");
	this.shape_148.setTransform(87.8,93.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#009900").s().p("AgYAfQgMgIAAgRQABgSAIgNQAKgOARAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAEAAAHgCQAJgDACgDQADgEADgBQACABACACQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_149.setTransform(74.7,95.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#009900").s().p("AgYAfQgMgIAAgRQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbANQAEAHAGACQAHAEAHAAQAEAAAIgCQAIgDACgDQADgEADgBQADABABACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_150.setTransform(66.5,95.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_151.setTransform(58.7,94.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_152.setTransform(51.7,94.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#009900").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_153.setTransform(46.2,93.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#009900").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_154.setTransform(38.2,95.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#009900").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_155.setTransform(26.6,95.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#009900").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_156.setTransform(8.9,95.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#009900").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_157.setTransform(-3.3,95.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_158.setTransform(-15.2,94.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#009900").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_159.setTransform(-22.6,95.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#009900").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_160.setTransform(-30.6,93.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_161.setTransform(-38.6,94.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#009900").s().p("AgZAyQgLgLAAgQQAAgUALgKQALgMAPAAQAJAAAEADIAHAFIACgpQABgHAGAAQAHAAgBAHIgDAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAIAAAOQgBAJAHAHQAHAHAJAAQAFAAAEgCIAIgGIACgCIAAgOIAAgIIAAgJQgCgFgFgDQgFgCgGAAQgLAAgHAGg");
	this.shape_162.setTransform(-51,93.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#009900").s().p("AgZAfQgLgIAAgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgCQAIgDADgDQACgEACgBQAEABACACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_163.setTransform(-59.3,95.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#009900").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAHAAQAGAAAAAMQAOgNARAAQAGAAADAEQADAFgBAJIAAAFQAAAJgHAAQgGAAAAgHIAAgGIAAgGQgMACgGAFQgGAFgFAKIAAAmQABAIgIAAQgGAAAAgIg");
	this.shape_164.setTransform(-67,95.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#009900").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAFAAAHgCQAJgDADgDQACgEACgBQADABADACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_165.setTransform(-74.7,95.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#009900").s().p("AgZAyQgLgLAAgQQAAgUALgKQALgMAPAAQAJAAAEADIAHAFIACgpQABgHAGAAQAHAAgBAHIgDAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAIAAAOQgBAJAHAHQAHAHAJAAQAFAAAEgCIAIgGIACgCIAAgOIAAgIIAAgJQgCgFgFgDQgFgCgGAAQgLAAgHAGg");
	this.shape_166.setTransform(-83.4,93.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#009900").s().p("AgcAhIAAgyIABgHIAAgHQAAgIAHAAQAGAAABAMQANgNARAAQAGAAADAEQACAFAAAJIAAAFQAAAJgGAAQgHAAAAgHIAAgGIAAgGQgMACgGAFQgHAFgEAKIABAmQAAAIgIAAQgGAAgBgIg");
	this.shape_167.setTransform(-91.2,95.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#009900").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_168.setTransform(-99.1,95.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#009900").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgGIgBgHQAAgDADgDQACgCADAAQAGABABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_169.setTransform(-111.2,95.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#009900").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_170.setTransform(-119.1,95.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#009900").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_171.setTransform(-128.7,95.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#009900").s().p("AgcAhIAAgyIABgHIAAgHQAAgIAHAAQAGAAABAMQANgNARAAQAGAAADAEQACAFAAAJIAAAFQAAAJgGAAQgHAAAAgHIAAgGIAAgGQgMACgGAFQgHAFgEAKIABAmQAAAIgIAAQgGAAgBgIg");
	this.shape_172.setTransform(-138,95.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#009900").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_173.setTransform(-143.8,93.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#009900").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_174.setTransform(-149.9,95.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#009900").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_175.setTransform(-157.9,93.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#009900").s().p("AgZAfQgKgIgBgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAALQAAAHgIAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgCQAIgDADgDQACgEACgBQAEABABACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_176.setTransform(-178.5,95.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#009900").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_177.setTransform(-187,93.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#009900").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_178.setTransform(-195.9,93.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#009900").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_179.setTransform(-57.3,47.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#009900").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_180.setTransform(-10.4,-6.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#009900").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_181.setTransform(-53.7,-6.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#009900").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_182.setTransform(-61.3,-6.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#009900").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_183.setTransform(-189.7,-8.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#009900").s().p("AAIAWQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgcIABgIQACgFAFAAQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBADIAAADIgBAcQABAGgHAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBgAgUALIAAgNIABgPQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAPIAAANIAAADIABAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgNg");
	this.shape_184.setTransform(-205,-12.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#009900").s().p("AAIAWQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgcIAAgIQACgFAFAAQAAAAABAAQAAABABAAQAAAAABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBADIAAADIgBAcQAAAGgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBgAgUALIAAgNIABgPQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAPIAAANIAAADIABAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgNg");
	this.shape_185.setTransform(238.6,141.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#009900").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_186.setTransform(228.1,147.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#009900").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_187.setTransform(214.2,145.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_188.setTransform(208.4,145.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#009900").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_189.setTransform(202.9,145.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_190.setTransform(197.2,145.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#009900").s().p("AgZAgQgKgKgBgQQABgSAIgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgHAGIgQAHIgbANQAEAHAGACQAHADAGAAQAGAAAHgCQAIgBACgEQADgFADAAQADAAABACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_191.setTransform(189.7,147.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#009900").s().p("AgcA8QgCgDAAgDIABgdIAAgdIgBgdIgCgOQAAgGACgDQADgEAEgBQADAAACACQABACAAAEIAAACIAAAEQAGgEAGgCQAFgCAFAAQAPAAAHAMQAGAMAAAQQAAAPgJAKQgJALgPAAQgGAAgJgCIAAAjQAAADgCADQgCACgDAAQgEAAgCgCgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgKQAAgMgDgIQgDgGgHAAQgGAAgFADg");
	this.shape_192.setTransform(181.5,148.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#009900").s().p("AgZAgQgKgKgBgQQABgSAIgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgHAGIgQAHIgbANQAEAHAGACQAHADAGAAQAFAAAIgCQAIgBACgEQADgFADAAQADAAABACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_193.setTransform(169,147.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#009900").s().p("AAUA3IgDgQIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_194.setTransform(160.5,145.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_195.setTransform(152.6,145.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_196.setTransform(141,145.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#009900").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_197.setTransform(133.7,147.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#009900").s().p("AgZAgQgKgKgBgQQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgIAGIgPAHIgbANQAEAHAGACQAHADAGAAQAGAAAHgCQAIgBADgEQACgFACAAQAEAAABACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_198.setTransform(125.7,147.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#009900").s().p("AgTApQgMgFAAgHQAAgCADgDQABgCADAAQADAAADADQACACAGABIAJABQAEAAAFgCQAHgCAAgEQAAgKgOgEIgHgBQgJgCgEgDQgGgEAAgHQAAgQAPgHIAMgEIAPgFIAGgBQADAAACACQACACAAADIABAHIABAFQAAAEgCACQgCACgDAAQgEAAgCgDIgCgIIgRAGQgKAFAAAGIADABQARAEAHAEQAMAIAAAOQAAAMgKAGQgIAFgMAAQgKAAgIgDg");
	this.shape_199.setTransform(117.6,146.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#009900").s().p("AgZAgQgLgKABgQQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHADAGAAQAFAAAHgCQAJgBADgEQACgFACAAQADAAADACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQABAIgOAGQgLAFgLAAQgPAAgLgIgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_200.setTransform(110.2,147.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#009900").s().p("AgbAiIAAgzIAAgHIAAgIQAAgHAHAAQAGAAAAAMQAOgNARAAQAGAAADAFQADAEgBAIIAAAGQAAAJgHAAQgGAAAAgHIAAgFIAAgHQgMACgGAFQgGAFgFAJIAAAoQABAHgIAAQgGAAAAgHg");
	this.shape_201.setTransform(102.6,147.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#009900").s().p("AgcA8QgCgDAAgDIABgdIAAgdIgBgdIgCgOQAAgGACgDQADgEAEgBQADAAACACQABACAAAEIAAACIAAAEQAGgEAGgCQAFgCAFAAQAPAAAHAMQAGAMAAAQQAAAPgJAKQgJALgPAAQgGAAgJgCIAAAjQAAADgCADQgCACgDAAQgEAAgCgCgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgKQAAgMgDgIQgDgGgHAAQgGAAgFADg");
	this.shape_202.setTransform(94.8,148.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_203.setTransform(74.8,145.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#009900").s().p("AgZAyQgLgKAAgRQAAgTALgLQALgMAPAAQAJAAAEACIAHAGIACgqQABgGAGAAQAHAAgBAHIgDAtIAAAVQAAAYACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgEgBgCgGQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQgBAKAHAGQAHAHAJAAQAFAAAEgCIAIgHIACgCIAAgMIAAgJIAAgIQgCgGgFgCQgFgDgGAAQgLgBgHAHg");
	this.shape_204.setTransform(62.4,145.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#009900").s().p("AgZAgQgLgKAAgQQAAgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAHADAGAAQAGAAAHgCQAIgBADgEQACgFACAAQAEAAACACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgIAAgHAHg");
	this.shape_205.setTransform(54.1,147.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#009900").s().p("AgcAiIAAgzIABgHIAAgIQAAgHAGAAQAIAAgBAMQAOgNARAAQAGAAADAFQACAEABAIIAAAGQgBAJgHAAQgGAAAAgHIAAgFIgBgHQgLACgGAFQgGAFgFAJIAAAoQAAAHgHAAQgHAAAAgHg");
	this.shape_206.setTransform(34.8,147.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#009900").s().p("AgZAgQgKgKgBgQQABgSAIgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgHAGIgQAHIgbANQAEAHAGACQAHADAGAAQAGAAAHgCQAIgBACgEQADgFADAAQADAAABACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_207.setTransform(7,147.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#009900").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIAAgGIAAgGIAAgXIAAgWIAAgUIAAgVQAAgEABgEQADgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAGgDAEAAQAQAAAJAMQAKALAAAQQgBARgKAMQgLALgPAAQgMAAgJgEgAgKgCIgLAGIgBAMIAAAMIABAMIAJAEIALABQAJAAAIgHQAGgIAAgLQAAgLgFgHQgHgHgJAAQgGAAgFAEg");
	this.shape_208.setTransform(-1.5,145.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#009900").s().p("AgZAgQgLgKABgQQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFgBAKQABAIgJAGIgPAHIgbANQAEAHAGACQAGADAHAAQAFAAAHgCQAJgBADgEQACgFACAAQAEAAACACQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_209.setTransform(-14.5,147.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#009900").s().p("AgYAgQgLgKAAgQQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGADAIAAQAFAAAGgCQAJgBACgEQADgFACAAQADAAADACQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgIgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_210.setTransform(-22.7,147.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_211.setTransform(-30.5,145.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_212.setTransform(-37.6,145.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#009900").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_213.setTransform(-43.1,145.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#009900").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_214.setTransform(-80.3,147.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_215.setTransform(-104.4,145.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#009900").s().p("AAUA3IgDgQIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_216.setTransform(-119.9,145.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#009900").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_217.setTransform(-127.8,145.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#009900").s().p("AgEAjQgCgDAAgDIAAgEIgBgEQAAgDACgCQADgCACAAQAJAAAAAPQgBADgCADQgCACgDAAQgCAAgDgCgAgFgSQgCgCAAgDIAAgDIgBgDQAAgDACgCQADgCADAAQAHAAAAANQAAADgCACQgCACgDAAQgCAAgDgCg");
	this.shape_218.setTransform(-138.2,146.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#009900").s().p("AgZAyQgLgKABgRQgBgTALgLQALgMAPAAQAIAAAFACIAHAGIACgqQABgGAGAAQAHAAAAAHIgEAtIAAAVQAAAYACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgFgBgDgGQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHAAAPQABAKAGAGQAHAHAJAAQAFAAAFgCIAIgHIACgCIAAgMIAAgJIAAgIQgDgGgFgCQgEgDgHAAQgLgBgGAHg");
	this.shape_219.setTransform(-144.8,145.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#009900").s().p("AgYAgQgMgKAAgQQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAHADAHAAQAEAAAIgCQAIgBACgEQADgFADAAQACAAACACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_220.setTransform(-153.1,147.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#009900").s().p("AgHAiIgLgeIgNggIgBgEQAAgDACgCQACgCADAAQAFAAACAEIASAzIANghIAGgRQADgFAEAAQADAAACACQACADAAADQAAACgMAdIgPAhQAAAHgGAAQgFAAgCgGg");
	this.shape_221.setTransform(-160.9,147.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#009900").s().p("AgIA1IABgbIACgaIAAgaIAAgaQAAgIAGAAQAIAAgBAIIAAAaIAAAaIgCAkIAAARQgBAIgFAAQgIgBAAgHg");
	this.shape_222.setTransform(-166.7,145.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#009900").s().p("AgTApQgMgFAAgHQAAgCADgDQACgCACAAQADAAAEADQABACAHABIAIABQAFAAAFgCQAGgCAAgEQAAgKgOgEIgHgBQgJgCgEgDQgGgEAAgHQAAgQAPgHIAMgEIAPgFIAGgBQADAAACACQACACAAADIABAHIABAFQAAAEgCACQgCACgDAAQgFAAgBgDIgCgIIgRAGQgKAFAAAGIADABQAQAEAJAEQAMAIgBAOQABAMgLAGQgJAFgLAAQgKAAgIgDg");
	this.shape_223.setTransform(-180.5,146.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#009900").s().p("AgYAgQgLgKAAgQQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGADAIAAQAFAAAGgCQAJgBACgEQADgFACAAQADAAADACQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgIgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_224.setTransform(-187.9,147.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#009900").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_225.setTransform(-196.7,145.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#009900").s().p("AAIAWQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgcIABgIQACgFAFAAQAAAAABAAQAAABABAAQAAAAABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBADIAAADIgBAcQABAGgHAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBgAgUALIAAgNIABgPQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAPIAAANIAAADIABAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgNg");
	this.shape_226.setTransform(-205,141.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#009900").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_227.setTransform(116.1,95.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#009900").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_228.setTransform(38.2,95.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#009900").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_229.setTransform(26.6,95.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#009900").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_230.setTransform(16.5,95.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#009900").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_231.setTransform(-99.1,95.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#009900").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_232.setTransform(-119.1,95.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#009900").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_233.setTransform(-128.7,95.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#009900").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_234.setTransform(-149.9,95.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#009900").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_235.setTransform(-57.3,47.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#009900").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_236.setTransform(-10.4,-6.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#009900").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_237.setTransform(-53.7,-6.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#009900").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_238.setTransform(-189.7,-8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_122,p:{y:-12.3}},{t:this.shape_121},{t:this.shape_120,p:{x:-189.7,y:-8.3}},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113,p:{x:-118,y:-4.9}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:-61.3,y:-6.7}},{t:this.shape_105,p:{x:-53.7,y:-6.6}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:-10.4,y:-6.6}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},96).to({state:[{t:this.shape_141,p:{y:-12.3}},{t:this.shape_121},{t:this.shape_120,p:{x:-189.7,y:-8.3}},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_140},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:-61.3,y:-6.7}},{t:this.shape_105,p:{x:-53.7,y:-6.6}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:-10.4,y:-6.6}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_122,p:{y:38.9}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_113,p:{x:-90.7,y:46.3}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124,p:{x:-57.3,y:47.9}},{t:this.shape_123}]},81).to({state:[{t:this.shape_184},{t:this.shape_121},{t:this.shape_183,p:{x:-189.7,y:-8.3}},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_140},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_182},{t:this.shape_181,p:{x:-53.7,y:-6.6}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_180,p:{x:-10.4,y:-6.6}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_141,p:{y:38.9}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_113,p:{x:-90.7,y:46.3}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_179,p:{x:-57.3,y:47.9}},{t:this.shape_123},{t:this.shape_122,p:{y:90.1}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_106,p:{x:-166.2,y:95.7}},{t:this.shape_175},{t:this.shape_174,p:{x:-149.9}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171,p:{x:-128.7}},{t:this.shape_170,p:{x:-119.1}},{t:this.shape_169},{t:this.shape_168,p:{x:-99.1,y:95.8}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159,p:{x:-22.6,y:95.8}},{t:this.shape_158},{t:this.shape_157,p:{x:-3.3,y:95.8}},{t:this.shape_156},{t:this.shape_105,p:{x:16.5,y:95.8}},{t:this.shape_155,p:{x:26.6,y:95.7}},{t:this.shape_154,p:{x:38.2,y:95.7}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_120,p:{x:108.4,y:94.1}},{t:this.shape_100,p:{x:116.1,y:95.8}},{t:this.shape_146},{t:this.shape_145,p:{x:133.3,y:95.7}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_124,p:{x:158,y:99.1}},{t:this.shape_142}]},75).to({state:[{t:this.shape_184},{t:this.shape_121},{t:this.shape_238},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_140},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_182},{t:this.shape_237},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_236},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_141,p:{y:38.9}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_113,p:{x:-90.7,y:46.3}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_235},{t:this.shape_123},{t:this.shape_122,p:{y:90.1}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_106,p:{x:-166.2,y:95.7}},{t:this.shape_175},{t:this.shape_234},{t:this.shape_173},{t:this.shape_172},{t:this.shape_233},{t:this.shape_232},{t:this.shape_169},{t:this.shape_231},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_174,p:{x:-22.6}},{t:this.shape_158},{t:this.shape_170,p:{x:-3.3}},{t:this.shape_156},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_183,p:{x:108.4,y:94.1}},{t:this.shape_227},{t:this.shape_146},{t:this.shape_171,p:{x:133.3}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_179,p:{x:158,y:99.1}},{t:this.shape_142},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_181,p:{x:-172.9,y:147.2}},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_159,p:{x:-111.8,y:147.2}},{t:this.shape_215},{t:this.shape_157,p:{x:-92.6,y:147.2}},{t:this.shape_214},{t:this.shape_180,p:{x:-72.7,y:147.2}},{t:this.shape_155,p:{x:-62.7,y:147.2}},{t:this.shape_154,p:{x:-51,y:147.2}},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_120,p:{x:19.1,y:145.5}},{t:this.shape_168,p:{x:26.8,y:147.2}},{t:this.shape_206},{t:this.shape_145,p:{x:44.1,y:147.2}},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_105,p:{x:82.1,y:147.2}},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_100,p:{x:219.9,y:147.2}},{t:this.shape_186},{t:this.shape_124,p:{x:233.8,y:150.6}},{t:this.shape_185}]},88).wait(141));

	// Layer 3
	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(255,255,255,0.871)").s().p("EgmVAFMIAAqXMBMqAAAIAAKXg");
	this.shape_239.setTransform(-2.5,-90.2);
	this.shape_239._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_239).wait(389).to({_off:false},0).wait(92));

	// Layer 2
	this.instance_6 = new lib.SamSpeech();
	this.instance_6.parent = this;
	this.instance_6.setTransform(194.6,102.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.CarmenJudge();
	this.instance_7.parent = this;
	this.instance_7.setTransform(175.3,18.1,1.153,1.155,0,0,180);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46).to({_off:false},0).to({alpha:1},10).wait(148).to({alpha:0},12).to({_off:true},1).wait(264));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(217).to({_off:false},0).to({alpha:1},10).wait(254));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217,-74.7,434.1,106.8);


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


(lib.CourtroomScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.SamSpeech();
	this.instance.parent = this;
	this.instance.setTransform(43.9,32.2);

	this.instance_1 = new lib.Twiggs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121,-12.2);

	this.instance_2 = new lib.MickSitting();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-26.8,20);

	this.instance_3 = new lib.Bub();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-67.6,98.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(151));

	// Layer 4
	this.instance_4 = new lib.CarmenJudging();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-102.6,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(151));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B1018E").s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(-74,-77.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#6D4201","#CA9B57"],[0,1],-126,73,-53.2,46.9).s().p("AABAJIAAgCQAAgEgCgCQgEgCgCgEIAIgCQgBAHAIAJIgHAAg");
	this.shape_1.setTransform(-75.5,-91.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7A07AB").s().p("AglAqIAAgDIAAgGQAUhDAAgWQAAgHAGAAQAHAAAAAFIgBA0QAAAIgLASIgJAJIgTAmQAEgTADgGgAAMA1IgBgLQAAgYgCgRQgCgTAAgTQAAgTAKAAIAIACIAIgCQAKgKACAAQABAAgHAYQgIAYgDANIgLAqIgEAQg");
	this.shape_2.setTransform(-75.3,-83);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AhvBNQAAgegHgRQADgEAKAAQgEAHACAHQADAGgHAEQABAEAFgCQAFgDACAFQACAEgGAGQgEADAIAAQgFAKgHAAIgBAAgAiDAuQAJAAAAAVQgKgEABgRgAhfAmQACgQATABQAFARgCAKQgHgFgBAHQgDAJgFADQgLgLADgPgAg2AyQAAgBgKgDQAGgIgGgBQABgFAHABIAMAAQgCAVgVADQABgIAMABgAglArQgBgNASgKQAIAHgIAJQgGAHgIAAIgDAAgAA9hAQgHACAAAgQgHgHgIgDIgCgIQAAgHALgGIAUgLQArgLAVATQgFAkgnAZQgggPAFgug");
	this.shape_3.setTransform(-61.5,-97.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF00").s().p("AgfBDIgJAOQAAgJgEgEQgFgFgBgFIgHACQgEABAAAEQgCgPgPgKQAFgRATAOQAYgFAQgYQAOgVAAgYIgFAIIgGAAIgSAEQgEgKgIAAQgYAJgLAAQgEAAABgHQAAgGgHAAIgPAAIAXgdQBAgeAfAvQAMgCAfgVQAcgPAOAVQgMgGgOAIQgMAHgDAMQADACALgJQAMgKAIAAQAFALgVAJQgWAJAAAMQAGAKASgNQgDAEAAAEQgeAKAAAOIABAGQgLgEgNgBQgagCgJAWQABAGAJAOQAFALgCANQgHgLgMACQgMADABAQQgBAAgDgOg");
	this.shape_4.setTransform(-62.8,-102.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00CC").s().p("AghCdIABABIAAABIgBgCgAhEgOIABgUQgBgagCgLIAHAGQAHAHAAAFQACAUAFgEIgCAFQANABAZgHQgDAFgWANQgSASgCAAQgLAAABgMgAAuhqQgBgLgHAAIgWAJIgbAGQgGAAgBgOQAAgJgWABIAIgTQALgIAOgHIABAAIgJALQgKANAAABQAAAEAGAAIAHgBIAIAAQABANAEAAQAIAAAcgJQADAAACAFQADAGAEAAIASgFIAEABIgLAVIgCAAIgGACQgFAAgBgKg");
	this.shape_5.setTransform(-70.6,-93.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAhAgIAAAAIAAAAgAgggeIACgBIgBABg");
	this.shape_6.setTransform(-68.1,-106.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#05A514","#006633"],[0,1],74.3,-14.6,87.8,35.9).s().p("AgBACIABgDIACADg");
	this.shape_7.setTransform(155.8,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#6D4201","#CA9B57"],[0,1],-1.1,-42.6,12.5,-42.6).s().p("ABWAgIAAABIAAAAIAAgBgAg5gEQAHgRADAAQgFgHgPAEQgPADgDgEIAAgHIAsACIAEADIAAACIABgCIANAJIAIAAIABABIABAGQgFAHgIgFQgJgFABgHQgFAIgDAEQgFAFgHAAIgDAAg");
	this.shape_8.setTransform(175.4,-20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AA2C1QgVgFgkgBQgVAAgLAEQgJADgJAAIAAAAQgfgOgFgNQgUgwBKhYQgYAxAnAdQAlAcAxgVQAPgNALgjQANgsAFgKIARAGQgYAfAGAuQAIAxAiAKQgEAOAEANIgDACQgRAMgjAAQgVAAgVgEgAiWiXIAAgGQAHABgCgFQgDgHAEgCQAMAMATgaQAGADALAHQgnAJgCASQgHgEgGAAg");
	this.shape_9.setTransform(163.3,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("ABYB2QgCgCgJAGQACgIgFgIQgFgHAFgHQAHAMARAWIgKgIgAh+B3IAHgOQADADgFALgACABjQAIgLAGAAQAHADACASIgCADgAhqBjIACAGIgBAEQgFgGAEgEgAh3A9QAJgHgdAwQgGgRAagYgABkBfQADgbgTgKIgDAIQAAACgEgKQgFABADAEQAEAFgCADIgKAAQgBgIAHgKIAEgIQAEABACAEQADAIACAAQABAAAAAAQABgBAAAAQAAAAABgBQAAgBAAAAQABAEAGAEQAIAEgCAIIALgHQABAOgMAAQABACAGADQAFADgBAFgAh3BVIAAgHQAEABACgDQABAFADADIgDAEQgEgDgDAAgAiQBLQAGgIAJABIgKARQgLgDAGgHgACfA2QANAKAAAHQgPgIACgJgAixBBQgBgFAIABQAIACgBgFQAGACgIAFQgEADgDAAQgDAAgCgDgABsApQAWAOgJAKQgQgVADgDgACAAzQAEgHAFAFQAGAGgBAGQgHgJgHgBgABbA0IAAgDQAHACACAHIADADIgMgJgAiLA6IgDgHIAAAAQgCAFgEABIgIABIARgRIAAACIgCAFIAAAAIAIAAQAAAEgGAGgACpAiQAEgEAKABIAAAUQgMgKgCgHgAh6AfQADABADAQQgFgBgBAEQgKgIAKgMgAigAtQAFgHgBgEQgCgFgCAFQgFAGgFgDQANgHABgKQAMAEgEAMQgCAJgKAGQgEgBAEgFgACGAfQAJgCAIAFIAAgKQgigTgTgCQAGgIAVAEQAWADgCAIQAHAAAHgKQAKgBAHALQgDANgOASQgagCABgIgABaAoQgCgIgGAAIgBABIAAgCQAIgCACAMIgBgBgABRApIgCgBIABgBIABgBIACABIAAABIgCABgABNAUQAHgLASADIAeAIQgFAIgQAGQgMgGgWgIgAiBARQAEAAgEAOQgHgBAHgNgAiSAOQAKABAKgIQAAACgHAGQgFAEACAIIgBAAQgGAAgDgNgAi1ASQgEgEAPgEQgFAJgDAAIgDgBgAAjAOQAEgCAAgEIAAgBIgBgDIADgBIADgCIADACQAAACgHACQAAABAIACIgCACIgDADIgDgBIABACIgBAAIgFgCgAigADIAbgTQADAQgUAKQgDgIgHABgABigJQgXAMgFAAQAKgZASANgAAYgFIACgCIABABQAFAAAAgEIAEADIAAAAIgIAHQgEgDAAgCgAiqgGQAGgKgBAJQgBAFgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAgBgBgBgAhmgYIAYgMQgCgEgOADQgNACACgMQAFAAgCAEQAEADANgGQAMgHAIAGQgFALgRAMQgRAMgFAKQgIgNAPgJgAh+gJIAHAAQABAFgLACQADgEAAgDgABvgJQABgPAOAEQAQAEADgHQgRgDgHgEQgNADgIALQgIgLgNALQgPALgHgEIAAAAQASgHgBgOQALACARgIQANgFAKAIQgDgKADgKQAHgBAGALQAFAKAMgDQAGAFgGAWQgFgCgOADIgLACQgHAAgHgDgACigNQAEgEADgNIAKAAQADASgOAAIgGgBgAh2gWQAGgCAAgCQAJACgTAIQgBgEAFgCgABHgoQAZgKACgKQAKgDAKAGQgNAcgfgLQgGABgEAJQgCAJgFACQgIgMAWgJgAAfgZIgBAAQAEgJAKgIQAXgRADgIQALgCAGAMQgOgDgOARQgNAQgJAFIgGgDgACfgrQADgJAOgBQABAJgFAIQgGgHgHAAgAgPgtIgHgDIAHAAIAKACIgIAEQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAgAAFguIAIgBIgEAEIgEAAIAAgDgAg2g8QAFADABAHIgKACIAEgMgAACg1QAFgMgFgMQgHgMgCgJQAHAAAGAIQAIAIAFABQgLALAIAUQgIgEgGABgAhrg4QAFgBAAgDQAKADgUAHQgBgEAGgCgAgpg5QAEgIABAJQAAABAAABQABABgBAAQAAABAAAAQAAAAAAAAQgBAAgEgFgAiBg4QgLgBAEgHQALgBAGAFQAAAEgIAAIgCAAgAhYg5QgBgHAJgBQAJgBAAgEQAGAEgIAGQgGADgGAAIgDAAgAgWhQQgJgNgNgBQARgMARAWQAPAWgWAFQAEgKgJgNgAg0hPQgZgCgFgKQAYgFAQAJQAQALgBATQgDgTgWgDgAAThDQAHgJAAALQAAACAAAAQAAABgBABQAAABAAAAQAAAAgBAAQgBAAgEgHgAgzhGQABgHAJAHQgFAEgDAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBgAAkhKQAHgKgCAKQgBAEgBAAQgBAAgCgEgAh3hRQAKgDAHAHQgKAGgEAAQgGAAADgKgAhjhNQAEgEAAgDIAHAAIAAAKQgFgDgGAAgAAThiQAGAAABAHQgDAAAAAEIAAAAQgCAAgCgLgAgqhxQgMgEAAgIIAeAKQgDADgFAAQgEAAgGgBg");
	this.shape_10.setTransform(165.3,-11.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#07CD1B","#01984B"],[0,1],75.3,-17.5,75.3,34.7).s().p("ABUBiIAAgHIAAgIIACgEIABAAQAKATAAACQgHgBgGgBgAhZhfIgBAAIgGAAQAKgBAJgDIgBAFIgMABIABgCg");
	this.shape_11.setTransform(170.1,11.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgBAAQADgJAAAJQAAAFgBAAQgBAAgBgFg");
	this.shape_12.setTransform(-70.5,-96.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AgZgKQgMgGgHAPIgMAYQgNgnAigdIgGAOQAAAEAFAAIAGgBQALAAABALQABALAHAAQAQAAALgGQAFgBARgJQAEAAACALQACALAHAAIAGgDIAAABIgDAGQgOAYgZABQgBgJAHgLQAIgKgBgJQgKAEgNAYQgKAWgUAAQAIgSgBgKQgKAegUAEQgDgdAXgbg");
	this.shape_13.setTransform(-70.8,-102.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D29960").s().p("AhGD+QgCgGAMgSQAAAFAHADQAIADgBAGQgSAIgGAAIAAgBgAhMDcIALgLQAFgGAAgDQgWgKgMAoQgKgHAKgNQAOgRAAgGQgKgBgKAPQgJAOgJgEQgFgSASgRQAQgPAQgBQAMgCAZAKQAYAKAMgCQATgBAxgdQApgYAiAGQgJgLgUhLIAAgEIgHgpQgDAAAAANIABASIACAKIAAACIAAABIABACQACAFgBADQgigNAEgxQAEgpAWgZIADAAQAQABAIAKIALAQQAHAKAHAVQAWAqAGASQAOAqgCAUQgDATADALQAFAWAFAKQgBANgBADIAAAGIgEADQgLgFgaACQAAAFAXACQhlAuhLgbQgUAQgTADIgQABQgIgBgHgEIAJgLIALgNQgPgEgKAKQgLALgFAYQgHgMALgNgAAjCUIgNgCIghgDQgbgHgRgCIgGAAQgEgPgOgKIAFgCQAFgEAcAAQAiAAAVAFQAVAFAXAAQASAAAXgJIAIgDIAAABIABADIgCAIIACAHQgXACgcASIgQAJIgGgBgAjMB3IAAAAIgCgCQAmiPBHgiQgBALgeA6QgXArAUAhIAFAGIgHASQgDAFgPAQQgbgEgagHgAg+AAQgTgiASggIAHACQAUAAAAgSIAAgDQAJgFAIgJQgLAFgKADIgCgBIgCACIgDABQgMAFgLAAQgcAAgLgoIgKgYQgDgGAAgNQAAgNAGgLQAGgMAAgDQABAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAIAEgEIAQACQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBQAAgEgPgBIADgGQAKgSALgFIAUgGIATADQABAEAIAAIAHgCIACACIABAAQAEAAABADIABAAQACAAAMAPQADAFgBAMIAKAOIABAMIAFgBIAAAAIABAAIADgGIACgCQAFgEAGAAIACAAIADABIACAEIABABIAAAGQgCAXgHAGQgCAFgFACIgNAAQgEgDgEAAQAAAAgBAAQgBAAAAABQAAAAAAABQgBAAAAABQAAADADACQAEAEALAAQAQABAEgHIAAABQACANgJAaQgJAZAJAQQAGgCgEgKQgEgLAGgBQATAWgKAmQgJAfgVAUQgRAIgQAAQgdAAgRgcgAhYhyIACAAQAFAAAGgEQAUgIALABQABABABAAQABAAAAgBQABAAAAAAQAAAAAAgBQAAgEgTAAQgdAAgFAHIgBADQAAACAAABQAAAAABABQAAAAAAAAQAAAAAAgBQACACADABgAhrifQAEgCALAAQAIgBAAgHQgVAJgCgNQgCgOAMABQAHACANAFIgBgFQgIgGgHAAIgDgBIAAgEQACgHgHAAIgCABQgFABAAAHIACAEIgDABQgTAOAVAPgAg7jIQgDACAAAHQAAAKAHAAQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQACgCAAgIQACgKgHAAIAAAAIgBAAQgBAAAAAAQgBAAgBABQAAAAAAAAQgBABAAAAgAgljgIAAACIABAFIACAAIACgCIAAgKIgXgBQgKAFAAADQAAABAAABQAAABAAAAQAAABAAAAQABgBAAAAIAAAAIAFgDIAAAAQADgCAJAAIAKAAgAhmhUIABAAIABABIgCgBgAh+jHIABABIgCAEIABgFgAh8jPIACABIgDAEIABgFgAARjeIABAAIgBABgAgGjvIAAACIgBAAIABgCg");
	this.shape_14.setTransform(167.2,9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("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");
	this.shape_15.setTransform(54.3,-37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(151));

	// Layer 1
	this.instance_5 = new lib.BkScene();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.8,-0.4,1,1,0,0,0,0,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAGAPQgCgFABgHIgCAAQgCgDAAgCQgTAAAAgIIABgFIARAAQAPAAADAIQACAEgCADQAAAQgIAAg");
	this.shape_16.setTransform(-139.4,58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.instance_5}]}).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.7,-155.4,507.8,310.2);


// stage content:
(lib.subj_Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2_repeat:479});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_2 = function() {
		playSound("sax_lick");
	}
	this.frame_7 = function() {
		playSound("TherearefourformsoftheSubjunctiveMood");
	}
	this.frame_58 = function() {
		playSound("Onestatementscontrarytofact");
		playSound("piano_lick");
	}
	this.frame_96 = function() {
		playSound("Ifhewerequiet");
	}
	this.frame_144 = function() {
		playSound("Twowishes");
		playSound("piano_lick");
	}
	this.frame_173 = function() {
		playSound("Iwishhewerequiet");
	}
	this.frame_204 = function() {
		playSound("Threeconveyingthecontents");
		playSound("piano_lick");
	}
	this.frame_250 = function() {
		playSound("thechairmanordered");
	}
	this.frame_295 = function() {
		playSound("Fourformalmotionsandresolutions");
		playSound("piano_lick");
	}
	this.frame_336 = function() {
		playSound("Resolvedthat");
	}
	this.frame_393 = function() {
		playSound("note");
	}
	this.frame_478 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_484 = function() {
		this.gotoAndPlay("scene2_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(5).call(this.frame_7).wait(51).call(this.frame_58).wait(38).call(this.frame_96).wait(48).call(this.frame_144).wait(29).call(this.frame_173).wait(31).call(this.frame_204).wait(46).call(this.frame_250).wait(45).call(this.frame_295).wait(41).call(this.frame_336).wait(57).call(this.frame_393).wait(85).call(this.frame_478).wait(6).call(this.frame_484).wait(1));

	// Layer 12
	this.instance = new lib.FourFormsSubjunctiveMood();
	this.instance.parent = this;
	this.instance.setTransform(276.8,173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(485));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAuQgNgFAAgIQAAgEADgCQACgCAEAAQACAAAEAEIAJADIAJABQAGAAAFgCQAIgCAAgGQAAgLgQgEIgHgCQgLgCgFgDQgGgEAAgJQAAgRAQgHIAPgGIAPgFIAHgBQAEAAACACQACACAAAEIACAHIABAHQAAAEgDACQgCACgDAAQgFAAgCgDQgBgCgBgHIgTAGQgMAFAAAIIAFABQASAEAJAFQANAIAAAQQAAAOgLAHQgKAFgOAAQgKAAgKgDg");
	this.shape.setTransform(255.8,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAwQgCgCAAgEIgCgdIgCgcQAAgJgCgFQgHADgGAFIgJALIgEAFIgBAPIgBANIABAHIABAHQgBADgCACQgCACgEABQgJAAAAgWIABgOIAAgOIAAgNIgBgNQAAgTAJAAQACAAAEADQACADAAAEIAAAEIgBAFIABAJQADgJAJgHQAIgHAGAAQANAAAEANQAFgHAGgCQAGgDAIAAQANAAAGAOIADAYIAGAuQAAACgDADQgCACgDABQgHgBgBgHIgEgaIgCgYIgDgLQgDgHgDAAQgDAAgIAFIgKAIIAAAPIACAVIACAVQAAAEgDACQgCACgDAAQgCAAgDgCg");
	this.shape_1.setTransform(245.5,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAmIAAg5IAAgIIAAgIQAAgJAHABQAJAAAAANQAPgPATAAQAGAAAEAFQADAFAAAKIgBAGQAAAKgIAAQgGAAAAgIIgBgGIAAgHQgNACgHAFQgHAGgFALIAAAsQAAAIgIAAQgHAAAAgIg");
	this.shape_2.setTransform(235.1,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAjQgLgLAAgUQgBgRAKgPQALgQAUAAQAQAAAJAPQAGAMAAARQAAARgJANQgLAPgQAAQgOAAgKgKgAgOgQQgFAJAAALQAAAMAGAHQAGAGAHgBQAHABAHgHQAHgHAAgLQABgggSAAQgLAAgHAMg");
	this.shape_3.setTransform(226.2,28.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMBGQgCgCgBgEIAAgBQACgLAAgNIAAgWIAAgXIgNABQgJAAAAgHQAAgJAPAAIAIAAIABgNQACgSAIgJQAHgKASAAQALAAAAAIQAAAIgKAAQgUgBgCAcIgBAFIASgBQANABABAHQgBAHgGAAIgGABIgTABIgBASIAAAPIABAQQAAAPgCAIQAAAHgHAAQgDAAgCgCg");
	this.shape_4.setTransform(217.5,26.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZBCQgJgCgFgEIgBAAQgDAAgDgCQgCgDAAgDIABgaIAAgaIAAgbIAAgdQAAgDAEgEQADgEADAAQACAAAMAGIAOAGQAWAIARARQATATAAAXQAAAOgHANQgGAMgMAIQgMAJgXAAQgGAAgIgCgAgegWIAAAXIgCAsIACACQAHAEALAAQATAAAIgFQAIgGAFgJQAEgJAAgKQABgWgagRQgIgFgegNg");
	this.shape_5.setTransform(202.6,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpAzQgRgPAAgXQAAgcARgXQATgaAbAAQAbAAANANQAOAMAAAbQAAAcgQAXQgRAagbAAQgYAAgQgOgAgcgbQgNATAAAVQAAAQAMAKQALAJARAAQASAAANgUQAMgSAAgWQAAgTgJgIQgIgIgUAAQgTAAgOAUg");
	this.shape_6.setTransform(189.6,26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgpAzQgRgPAAgXQAAgcARgXQATgaAbAAQAbAAANANQAOAMAAAbQAAAcgQAXQgRAagbAAQgYAAgQgOgAgcgbQgNATAAAVQAAAQAMAKQALAJARAAQASAAANgUQAMgSAAgWQAAgTgJgIQgIgIgUAAQgTAAgOAUg");
	this.shape_7.setTransform(176.2,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAzA9QgDgDgCgJIgDgPQgEgNgGgrIgRAwIgFAPIgGAQQgDAGgFAAQgFAAgDgFIgDgJIgDgJQgIgdgGggIgDAPIgLAqIgDAXQgDAGgGAAQgEAAgDgDQgBgDAAgDQAAgOAFgTIAJghIAFgaQAEgSAEgFQADgFAFAAQAFAAADAGQADAHADAXQAFAbAJAeQALgeAJgjIACgMQACgHADgEQADgGAGgBQAGABAEAOIADATQAFAkAIAaIADAOIAEAOQAAAEgDACQgDACgDABQgEAAgDgGg");
	this.shape_8.setTransform(162.2,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjA/QgIgHAAgaIAAgMIABgNIgBgEQAAgCABgCIACgjIgBgJIgBgJQAAgKAJAAQADAAADACIATgEIAOgBQAVAAALAFQAGACAAAGQAAADgCADQgDACgDAAIgDAAQgOgEgNAAIgNABQgIABgJADIAAAJIgBAfIAjgEIATgBQAEAAADACQACACAAAEQAAAHgIABIgTABIglAEIAAALIAAAKQAAASACADQACACALAAIAOAAIAQAAIAEgBIAFgBQAJAAAAAJQAAAHgHABQgIACgZAAQgZAAgHgHg");
	this.shape_9.setTransform(144.7,25.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOA8QgKgZgNguIgGgWQgFgRABgGQgBgDADgDQADgCADAAQAGAAACAHIADAOIAIAcQAHAdAIAWIABgBIAUg6IAIgUQAEgNAGgGQACgDAEAAQADAAACACQADADABADQgBADgCACQgEAIgEAIIgGASIgWA7IgJAUQgBAFgGAAQgGAAgCgGg");
	this.shape_10.setTransform(134.3,26.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjA8QgCgCAAgEQAAgDACgDQACgCAEAAIARgCIABgPIAAgOIgBgOQAAgSADgcIgLAAIgLABQgEAAgCgDQgDgCAAgEQABgHAHgBIAZgBQAPAAAZAEQAIABgBAIQAAADgDADQgCACgDAAIgNgCIgNgBQgDAYAAAUIABAPIAAAOIAAAOIAZgBQAEAAADADQABACAAAEQAAADgBADQgDACgEAAIgNABIgOAAIgPABIgQACQgEAAgCgDg");
	this.shape_11.setTransform(123.7,26.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFA8QgDgCAAgDIABgEIAAgEIAAgMIgBgMIgCggIgCghIgHAAQgSAAgLgCQgGgCAAgGQAAgEACgDQACgCAEAAIANABIAOABIAPAAIANAAIATAAIATABQADABADACQACACAAAEQAAADgCADQgDADgDgBIgTAAIgSgBIgGAAIACAkIACAkIAAAJIABAJQAAAFgCAEQgCAGgFAAQgCAAgDgDg");
	this.shape_12.setTransform(114.1,25.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghAzQgLgNAAgRQAAgbAWgeQAUgYATAAIAHABIAGABQADgEAEgBQAGAAACAIIABARIgCAGQgDADgDAAQgFAAgDgHQgCgFgCgBQgDgBgGAAQgMAAgNASQgUAZAAAVQAAAKAGAIQAIAIAJgBQAIAAAIgEIAPgJQAEgEADAAQADAAADADQACADAAADQABADgEADQgVAUgWgBQgQAAgMgMg");
	this.shape_13.setTransform(102.8,25.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag2BAQgCgDAAgDIAAgLIABgKIAAgPIAAgPIAAgQIAAgQIgBgQIgBgPQAAgEADgDQADgDAEAAQAFAAAGAKQAVAeAPAUQATAXAYAWIAAgKIgBgKQAAgjgDgWIgCgIIgBgJQAAgKAIAAQAPAAAAA2IgBAaIAAAbIgCANQgBAIgHAAQgEAAgHgFQgigggpg7IgBATIAAASIAAAUIABAVQAAAWgJAAQgEAAgDgDg");
	this.shape_14.setTransform(91,26);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkAwQgKgLgCgYQgCgKAAgeIABgSIABgLQACgGAGAAQAHAAAAAOIAAAwQAAAxAiAAQAhAAAAhTIAAgIIAAgHQAAgEACgFQACgEAEAAQAJAAAAALIAAAKIAAAKQAABegxAAQgZAAgNgPg");
	this.shape_15.setTransform(78.1,26.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghA5QgQgMAAgPQAAgKAJAAQAIAAAAAKQAAAHAKAHQAJAGAIAAQAGAAADgpIABgwIgBgJIgEAAIgJAAIgKAAQgEAAgCgDQgCgCAAgEQAAgIALAAIAJAAIAHAAIAPAAIAPgBQATAAAAAKQABADgDACQgDADgDAAIgFAAIgGgBIgJAAIABAKQAAA8gJAcQgFASgNAAQgOAAgOgKg");
	this.shape_16.setTransform(66.3,26.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AglA/QgEgDAAgEIAAgXIACghIACgiIABgWQAAgFACgBQALgEAPABQANgBANALQAQALAAAQQAAAWgRALQANAFAGAGQAGAGAAAJQAAAJgLAKQgHAGgJADQgRAIgdAAQgDAAgDgEgAgYAhIAAARQAVgBANgGQAFgBAGgGQAFgDAAgCQAAgFgLgEIgPgGIgIgBIgDAAIgDAAIgKgBIAAATgAgVgwIAAAOIgCAgIANABQALgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgIABIgNAAg");
	this.shape_17.setTransform(55.7,25.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkAwQgKgLgCgYQgCgKAAgeIABgSIABgLQACgGAGAAQAHAAAAAOIAAAwQAAAxAiAAQAhAAAAhTIAAgIIAAgHQAAgEACgFQACgEAEAAQAJAAAAALIAAAKIAAAKQAABegxAAQgZAAgNgPg");
	this.shape_18.setTransform(43.9,26.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AggA5QgQgHAAgNQAAgDADgCQACgCAEAAQAEAAADAEQAEAGADADQAHAFANgBQAMABALgGQAOgHAAgMQAAgLgMgGQgKgFgNgBQgNAAgJgEQgMgHAAgNQAAgOAQgMQAQgMAQAAQAIAAAKAEQANADAAAGQAAAGgHAAIgLgBIgNgCQgMAAgJAHQgJAGAAAJQAAAGAMADIARADQASABALAKQAKAJAAAOQAAATgSAMQgQAKgUgBQgPAAgMgFg");
	this.shape_19.setTransform(31.9,26.3);

	this.instance_1 = new lib.Bk();
	this.instance_1.parent = this;
	this.instance_1.setTransform(273.2,194);

	this.instance_2 = new lib.CourtroomScene();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275.6,194.1,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(485));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '80C27527E5057B439704E73ABF337719',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmVS.mp3", id:"bgmVS"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/departure_louder.mp3", id:"departure_louder"},
		{src:"sounds/Fourformalmotionsandresolutions.mp3", id:"Fourformalmotionsandresolutions"},
		{src:"sounds/Ifhewerequiet.mp3", id:"Ifhewerequiet"},
		{src:"sounds/Iwishhewerequiet.mp3", id:"Iwishhewerequiet"},
		{src:"sounds/JingleAdjetives.mp3", id:"JingleAdjetives"},
		{src:"sounds/note.mp3", id:"note"},
		{src:"sounds/ohbaby.mp3", id:"ohbaby"},
		{src:"sounds/Onestatementscontrarytofact.mp3", id:"Onestatementscontrarytofact"},
		{src:"sounds/piano_lick.mp3", id:"piano_lick"},
		{src:"sounds/real_disco.mp3", id:"real_disco"},
		{src:"sounds/relax.mp3", id:"relax"},
		{src:"sounds/Resolvedthat.mp3", id:"Resolvedthat"},
		{src:"sounds/sax_lick.mp3", id:"sax_lick"},
		{src:"sounds/thechairmanordered.mp3", id:"thechairmanordered"},
		{src:"sounds/TherearefourformsoftheSubjunctiveMood.mp3", id:"TherearefourformsoftheSubjunctiveMood"},
		{src:"sounds/Threeconveyingthecontents.mp3", id:"Threeconveyingthecontents"},
		{src:"sounds/Twowishes.mp3", id:"Twowishes"}
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
an.compositions['80C27527E5057B439704E73ABF337719'] = {
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