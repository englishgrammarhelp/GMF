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


(lib.letters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWAhIgEgUIgRADIgQAEIgLAYQgCADgDABQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgCIASgeQAOgYAEAAQAFAAACAHIAEAVIAJArIAEAKIACAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgGAAgEgPgAgHAEIAWgEIgFgXg");
	this.shape.setTransform(4.5,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAxQgCgDAAgDIAAgSIABgZIABgaIABgSQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAJgCALAAQAKAAAKAHQAMAJAAANQAAAQgNAIQAKAFAFAFQAEAEAAAGQAAAIgIAHQgGAFgGADQgNAFgXAAQgCAAgDgCgAgTAZIAAANQARAAAKgEIAIgGQAEgDAAgCQAAgDgIgDIgMgFIgGgBIgCAAIgDAAIgHAAIgBAOgAgQglIAAALIgBAZIAJAAQAJAAAGgGQAHgFAAgJQAAgGgHgFQgHgGgGAAIgKABg");
	this.shape_1.setTransform(4.2,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAnQgIgKgBgNQAAgUASgYQAQgSAOAAIAFAAIAFABQADgDADAAQAEAAABAFIABANQABADgCACQgCADgDAAQgEgBgCgFIgEgEIgGgBQgJAAgLAOQgPATABAQQAAAIAEAGQAGAGAIAAQAFAAAHgDIALgIQADgDACABQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgRAPgQAAQgNAAgKgKg");
	this.shape_2.setTransform(3.9,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAzQgHgCgEgCIgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIABgUIABgUIgBgVIAAgWQAAgDADgDQACgDACAAQADAAAIAFIALAFQARAGANANQAPAPAAARQAAALgFAKQgGAKgIAGQgKAHgRAAIgLgCgAgXgRIAAASIgBAiIABABQAGAEAJAAQANAAAGgFQAGgEAEgHQAEgHAAgIQAAgRgUgMQgFgFgYgKg");
	this.shape_3.setTransform(4.7,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIABgcIAAgGIgBgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAPgDIALgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAFgHABIgPABIgcADIAAAIIgBAIQAAAOACACQACACAIAAIAMAAIALAAIAEgBIAEAAQAGAAABAGQAAAGgGABQgGABgTAAQgUAAgFgFg");
	this.shape_4.setTransform(4.1,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA0QAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIABgmIAAgkIAAgIIAAgJQAAgDACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAEACIAOgCIAKgBQAIAAAJACQANADAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAIgCAAQgIgDgNAAIgJABIgMABIAAAcQAMgDAGAAIATABQAGAAAAAGQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgKgBIgJAAQgEAAgPADIAAAsQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_5.setTransform(4.1,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfArQgJgJABgRQgBgRAJgQQAHgRANgLQAHgHAJAAQAFAAAJAEQAMAEAAAFQAAADgBADQgBAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgEgCQgKgGgGAAQgFAAgEAFIgIAJQgPATAAAWQABAMADAEQAEAGAKAAQALAAAIgHQAKgIADgOQgSABgMAFIgCABQgDAAgCgCQgCgBAAgEQAAgDAEgCQAMgHAiAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQgBAEgDACQgEATgMANQgNALgRAAQgPAAgHgJg");
	this.shape_6.setTransform(4.3,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAyQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIACgUIABgUIgBgJIAAgLIABgPIAAgPQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBAPIgBAQIABAOIAagDQAQgDALgBIABgbIACgKQACgHAEABIAEABQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAIgBADIgBAIIAAAFIAAAGIgBATIgBASIABAPIABAOQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgOIgBgPIAAgJQgKAAgQADIgaAFIgBARIgBAPQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_7.setTransform(4.9,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAvQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAOgCIAAgMIAAgKIAAgLIABgkIgIABIgIAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQgBgCAAgDQAAgGAFAAIAUgBQALAAATADQAGABAAAGQAAADgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgKgBIgKgBIgBAiIAAALIAAALIAAALIAUAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLAAIgLAAIgLABIgNACQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_8.setTransform(3.4,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAsQgMgJAAgMQAAgHAGAAQAHAAAAAHQAAAGAHAFQAHAFAHAAQAEAAACggIABglIgBgHIgDAAIgHAAIgHAAQgDAAgCgCQgCgCAAgDQAAgGAJAAIAGAAIAGAAIAMAAIAMgBQAOAAAAAHQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgCACgCAAIgEAAIgEgBIgIAAIABAIQAAAugHAWQgEAOgJAAQgLAAgLgIg");
	this.shape_9.setTransform(4.2,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// circle
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAxg+QAVAaAAAkQAAAlgVAaQgUAagdAAQgcAAgUgaQgVgaABglQgBgkAVgaQAUgaAcAAQAdAAAUAag");
	this.shape_10.setTransform(4,9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.5,15.9,22.5);


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


(lib.animsharkfin1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgaALQAFgFAJgBIAGAAQAGABAJgMQADgDADAAQAFABAHgC");
	this.shape.setTransform(0.6,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAPAOQgFgUALgZQgogCgBBB");
	this.shape_1.setTransform(0,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAVgfQgLAZAFAUQgJANgGgBIgGAAQgJABgFAFQABhBAoACg");
	this.shape_2.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAbACQgVAIggAEQAcgWAJgFQgGAQAWgBg");
	this.shape_3.setTransform(0.6,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AALgNQgGAQAWgBQgVAIggAEQAcgWAJgFg");
	this.shape_4.setTransform(0.6,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAaAGQgUAIgfAEAgYAIQAZgVAJgE");
	this.shape_5.setTransform(1.8,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AgYAHQAZgUAJgDQAPAMABAKQgUAIgfADg");
	this.shape_6.setTransform(1.8,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgKgLQA6gHhAAfQATgRgNgHg");
	this.shape_7.setTransform(3,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AgKgLQA6gHhAAfQATgRgNgHg");
	this.shape_8.setTransform(3,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgKgMQA+gThGAxQAMgSgEgMg");
	this.shape_9.setTransform(5.4,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099FF").s().p("AgKgMQA+gThGAxQAMgSgEgMg");
	this.shape_10.setTransform(5.4,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgUASQAQgRgNgLQBPgWhSAyg");
	this.shape_11.setTransform(6.1,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099FF").s().p("AgRgKQBPgWhSAyQAQgRgNgLg");
	this.shape_12.setTransform(6.1,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgWgJQBZgRhXApQAUgYgWAAg");
	this.shape_13.setTransform(7.9,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099FF").s().p("AgWgJQBZgRhXApQAUgYgWAAg");
	this.shape_14.setTransform(7.9,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgMAMQA0ggg0ANQAMABgMASg");
	this.shape_15.setTransform(9.7,-0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099FF").s().p("AgMgHQA0gNg0AgQAMgSgMgBg");
	this.shape_16.setTransform(9.7,-0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgKAJQApgYgnAJQAIADgKAMg");
	this.shape_17.setTransform(11,-1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099FF").s().p("AgIgGQAngJgpAYQAKgMgIgDg");
	this.shape_18.setTransform(11,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAGgEIgNAJIAPAAg");
	this.shape_19.setTransform(-1,2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAFIAMgJIADAJg");
	this.shape_20.setTransform(-1,2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAGgJIgUAOQALAKASgLQgQgEAHgJg");
	this.shape_21.setTransform(0.8,1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAFIAUgOQgHAJAQAEQgKAGgHAAQgHAAgFgFg");
	this.shape_22.setTransform(0.8,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgOAQQA5gsgyARQAHABgOAag");
	this.shape_23.setTransform(4.2,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHgLQAygRg5AsQAOgagHgBg");
	this.shape_24.setTransform(4.2,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgLgNQAJACgPAbQBEgog+ALg");
	this.shape_25.setTransform(6.1,0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLgNQA+gLhEAoQAPgbgJgCg");
	this.shape_26.setTransform(6.1,0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgHgIQAGABgLASQAvgbgqAIg");
	this.shape_27.setTransform(11.3,-1.5,0.4,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHgIQAqgIgvAbQALgSgGgBg");
	this.shape_28.setTransform(11.3,-1.5,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24,p:{x:4.2,y:1.1}},{t:this.shape_23,p:{x:4.2,y:1.1}}]},1).to({state:[{t:this.shape_24,p:{x:4.6,y:1.2}},{t:this.shape_23,p:{x:4.6,y:1.2}}]},1).to({state:[{t:this.shape_26,p:{x:6.1,y:0.6,scaleX:1,scaleY:1}},{t:this.shape_25,p:{x:6.1,y:0.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_26,p:{x:8.1,y:-0.1,scaleX:1,scaleY:1}},{t:this.shape_25,p:{x:8.1,y:-0.1,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_26,p:{x:9.8,y:-1.3,scaleX:0.694,scaleY:0.694}},{t:this.shape_25,p:{x:9.8,y:-1.3,scaleX:0.694,scaleY:0.694}}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-4.5,7.5,8.5);


(lib.sentence1menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("acompletesentencecontains");
	}
	this.frame_25 = function() {
		playSound("OrganBlip");
	}
	this.frame_34 = function() {
		playSound("OrganBlip");
	}
	this.frame_48 = function() {
		playSound("OrganBlip");
	}
	this.frame_52 = function() {
		playSound("OrganBlip");
	}
	this.frame_69 = function() {
		playSound("OrganBlip");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(23).call(this.frame_25).wait(9).call(this.frame_34).wait(14).call(this.frame_48).wait(4).call(this.frame_52).wait(17).call(this.frame_69).wait(45));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape.setTransform(103.7,-61.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("AgtA+QgPgQAAgWQAAghAegkQAZgeAaAAIAIAAIAHABQAEgEAHAAQAKAAACAMQACAIAAAMQAAAFgDAEQgEAGgHAAQgJAAgFgKQgCgFgCgBIgIAAQgNAAgQAUQgXAbAAAYQAAALAHAIQAIAIAKAAQAJAAALgFIAPgKQAIgFAEAAQAGAAAFAEQAEAEAAAGQAAAGgGAEQgcAYgcAAQgXAAgQgRg");
	this.shape_1.setTransform(89.5,-61.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AhHBPQgEgEAAgGIAAgMIABgNIAAgSIABgSIAAgTIgBgTIgBgSIgBgSQAAgHAFgEQAFgGAHAAQAIAAAJANQAtBDAuApIAAgPIgBhEIgBgLIgBgLQAAgPAOAAQARAAAAA1IAAAQIgBBAIgBAQQgCANgNgBQgIABgJgJQgngjgxg/IAAAgIAAAYIAAAYQAAAegOABQgIAAgEgFg");
	this.shape_2.setTransform(73.4,-61.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape_3.setTransform(57.6,-61.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AgJBKQgFgEAAgGIABgEIAAgEIAAgPIgBgOIgCgkIgDglIgGAAQgWAAgOgEQgLgCAAgLQAAgFADgFQAFgFAHABIAQACIAQABIATAAIASgBIAXABIAYACQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgZgBIgZgBIADAqIACApIAAAKIABAKQAAAIgDAGQgEAIgIAAQgFAAgEgEg");
	this.shape_4.setTransform(42.5,-61.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("AhHBPQgEgEAAgGIAAgMIABgNIAAgSIABgSIAAgTIgBgTIgBgSIgBgSQAAgHAFgEQAFgGAHAAQAIAAAJANQAtBDAuApIAAgPIgBhEIgBgLIgBgLQAAgPAOAAQARAAAAA1IAAAQIgBBAIgBAQQgCANgNgBQgIABgJgJQgngjgxg/IAAAgIAAAYIAAAYQAAAegOABQgIAAgEgFg");
	this.shape_5.setTransform(25.6,-61.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape_6.setTransform(9.8,-61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("Ag3BDQgMgKAAgNQAAgGAEgEQADgFAIAAQAJAAAEAKQAGANAUAAQARgBARgHQARgIAAgKQAAgMgLgFQgHgDgXAAQgRAAgOgGQgTgIABgQQgBgUAVgRQAWgRAYAAQAKAAAPAFQASAGAAAHQAAAGgDAEQgFAEgGAAIgOgBIgPgCQgNAAgLAFQgNAHAAAIQAAAEAEACQAEACAIACIAZABQAWACAOALQAOALAAAWQAAAbgeANQgXALgdAAQgZgBgQgLg");
	this.shape_7.setTransform(-5.3,-61);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF99").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape_8.setTransform(-29.9,-61.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF99").s().p("AgJBKQgFgEAAgGIABgEIAAgEIAAgPIgBgOIgCgkIgDglIgGAAQgWAAgOgEQgLgCAAgLQAAgFADgFQAFgFAHABIAQACIAQABIATAAIASgBIAXABIAYACQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgZgBIgZgBIADAqIACApIAAAKIABAKQAAAIgDAGQgEAIgIAAQgFAAgEgEg");
	this.shape_9.setTransform(-45,-61.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape_10.setTransform(-59.6,-61.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF99").s().p("Ag2A+IACghQADgrAAg3QAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAA3gCAtIgCAZQAYAAAlgMIAEgBQAHAAAEAFQAEAEAAAGQAAAIgJAEQgNAGgZAEQgWAEgPAAQgZAAAAgWg");
	this.shape_11.setTransform(-72.9,-61.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF99").s().p("AguBOQgDgEAAgGIAAgcIABguIADgvQAAgbAPABIAJgBIAQgBQASAAASANQAUAPgBAVQABAagVAOQgSAOgZAAIgJgBIAAAvQgBAGgDAEQgEAEgGAAQgFAAgFgEgAgSgoIgCAkIAHABQAPAAALgIQALgIgBgNQAAgJgKgHQgKgGgLAAIgGAAIgEAAIAAAOg");
	this.shape_12.setTransform(-85.6,-61.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF99").s().p("AA4BDIgGgZQgFgTgGghIgPAqIgHATQgDALgEAHQgFAKgJAAQgKAAgFgLIgGgTQgIgagGgcIgNAwIgEAYQgEAOgMAAQgHAAgEgEQgDgEAAgGQAAgRAHgYIAMgmIAFggQAFgWAGgHQAFgIAIAAQAJAAAFAKQAEAJAFAbQAEAcAJAeQAKgeAKglIAGgXQAGgPALAAQAMAAAFARQADAHACATQAGArAJAeIAJAjQAAAGgEAEQgFAEgGAAQgLAAgFgQg");
	this.shape_13.setTransform(-101.3,-61.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF99").s().p("Ag1A/QgYgSAAgeQAAgiAXgdQAYggAkAAQAkAAASAQQARARABAhQAAAigVAcQgWAhglAAQgfAAgUgSgAgggeQgPAVAAAYQAAARANAKQAMALAUAAQAWAAAPgWQANgUAAgZQAAgVgJgJQgJgIgYAAQgWAAgQAWg");
	this.shape_14.setTransform(-120.2,-61.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF99").s().p("AgtA+QgPgQAAgWQAAghAegkQAZgeAaAAIAIAAIAHABQAEgEAHAAQAKAAACAMQACAIAAAMQAAAFgDAEQgEAGgHAAQgJAAgFgKQgCgFgCgBIgIAAQgNAAgQAUQgXAbAAAYQAAALAHAIQAIAIAKAAQAJAAALgFIAPgKQAIgFAEAAQAGAAAFAEQAEAEAAAGQAAAGgGAEQgcAYgcAAQgXAAgQgRg");
	this.shape_15.setTransform(-135.9,-61.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF99").s().p("AA0BNQgIAAgIgTQgGgMgEgQIgZADIgXACIgQAiQgFAIgIAAQgGAAgEgEQgFgEABgGQgBgFAPgfIgBgFQAAgFAKgDQAPgYARgbQAZgnAGAAQALAAAEANIAHAhIAPBDIAFANQAEAJAAAFQgBAGgEAEQgDADgGAAIgBAAgAgHAKIANgCIAOgBIgGgiIgVAlg");
	this.shape_16.setTransform(-161.4,-61.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF99").s().p("AgPAWQgDgEAAgEQAAgDAGgNIAJgQQADgGAHAAQAFAAAEAEQADADAAAFQAAABgGANIgIAQQgDAHgIAAQgFAAgEgDg");
	this.shape_17.setTransform(143.1,9.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF99").s().p("AgyBOQgFgFAAgGIAAhsIAAgOQgBgHABgGQACgKAQgCQAIgCASAAQASAAASAMQAVAPAAAWQAAAMgEAHQgEAIgIAGQAKAFAHAKQAJAKAAALQAAANgPANQgKAIgLAEQgWAJglAAQgGAAgFgFgAgbA3QASgBATgGQASgFAAgGQAAgIgMgGQgIgFgIgBIgbAAgAgbg2IAAAVIAAAWQAJABAFAAQAegDAAgUQAAgHgJgHQgIgHgLAAIgQAAg");
	this.shape_18.setTransform(131.7,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF99").s().p("Ag3BNQgEgEAAgGIAAgXIAAgXIAAhSQAAgHAEgFQAGgHAJABIAZACQAPABAJAGQArAWAAAgQAAAOgJAJQgJAKgSAHQAbAQAOAPQADAEAAAFQAAAGgEAEQgEAEgGAAQgGAAgEgEQgggdgkgLIABAhQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgfADIAEAAQAaAAALgFQAFgDAEgEQAFgFAAgCQAAgLgPgLQgNgKgPgCIgMAAg");
	this.shape_19.setTransform(117.2,0.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF99").s().p("AgWBJQgMgegQg3IgIgcQgGgTABgIQgBgGAFgEQAEgDAGAAQAKAAAEAKIAEASIAJAhQAIAcAIAXIAXg9IAJgZQAGgOAHgIQAFgGAGAAQAGAAAFAFQADAEAAAFQABAFgDAEQgFAHgFAMIgIAUIgbBGQgFANgHAMQgEAIgIAAQgKAAgFgKg");
	this.shape_20.setTransform(88.2,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF99").s().p("AAZAvIgQAHQgIACgEAAQgYAAgNgNQgMgNAAgaQAAgYASgSQASgRAZAAQAJAAANAFQAQAHAAAJQAAADgCADIgCAKIgBAOQAAATADAIIAEALIAFAKQAAAFgFAEQgEADgFAAQgFAAgKgJgAgOgUQgKALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAFgCAGgEQgEgYAAgMIABgHIACgKIgEgBIgDgBQgNAAgLALg");
	this.shape_21.setTransform(64.1,3.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF99").s().p("AAcBOQgHADgHACIgPABQgXAAgPgOQgPgQAAgWQAAgcAPgQQAQgRAYAAQAIAAAGABQAGACAEAEIADgxQACgMAMAAQAGAAAEAEQADAEAAAFQAAAQgCAdIgCAsQAAAlACAMIAAADQAAAGgEADQgEAEgFAAQgIAAgEgGgAgUAFQgIAIAAASQAAALAIAIQAJAIAKAAQAHAAAEgCQADgBAHgFIADgEIAAgmQgDgFgGgDQgFgDgIAAQgOAAgHAIg");
	this.shape_22.setTransform(40.8,0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF99").s().p("AAVAvIgDgVIgBgVIAAgIIAAgKIAAgDIABgFQAAgIgEAAQgJAAgIALQgIALgFAQIgBAKIAAAJIgBAJIgBAJQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIgBgJIAAgJIABgcIACgbIgBgJIAAgJQAAgGAEgEQAEgEAGAAQAOAAABAQIAAACQAPgQAPAAQAUAAAHARQAFALAAAVIAAAHIAAAGQAAAIACANQACAMAAAIQAAAGgEAEQgEAEgGAAQgNAAgBgNg");
	this.shape_23.setTransform(28.4,3.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF99").s().p("AAZAvIgRAHQgHACgEAAQgYAAgNgNQgNgNAAgaQABgYASgSQASgRAYAAQAKAAANAFQAPAHAAAJQAAADgCADIgBAKIgBAOQAAATADAIIAFALIADAKQAAAFgDAEQgFADgFAAQgFAAgKgJgAgNgUQgLALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAGgCAEgEQgCgYAAgMIAAgHIABgKIgDgBIgDgBQgNAAgKALg");
	this.shape_24.setTransform(16,3.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF99").s().p("AgsBHQgVgPAAgUQAAgQAPAAQAOAAAAAQQAAAGALAHQAKAHAJAAQAEAAABgNIACghQABgWAAgjIAAgHIgCAAIgLAAIgNAAQgGAAgEgDQgEgFAAgGQAAgOASAAIAKAAIAKAAIATAAIATgBQAcAAAAAQQAAAFgEAEQgEAEgHAAIgFAAIgHAAIgIAAIAAAHQAABJgKAhQgIAZgTAAQgTAAgTgNg");
	this.shape_25.setTransform(-51.5,1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF99").s().p("AgyBOQgFgFAAgGIAAhsIAAgOQgBgHABgGQACgKAQgCQAIgCASAAQASAAASAMQAVAPAAAWQAAAMgEAHQgEAIgIAGQAKAFAHAKQAJAKAAALQAAANgPANQgKAIgLAEQgWAJglAAQgGAAgFgFgAgbA3QASgBATgGQASgFAAgGQAAgIgMgGQgIgFgIgBIgbAAgAgbg2IAAAVIAAAWQAJABAFAAQAegDAAgUQAAgHgJgHQgIgHgLAAIgQAAg");
	this.shape_26.setTransform(-65.9,0.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF99").s().p("AgpBGQgbgVAAgyIABgPIAAgPIAAgMIABgLQAAgJADgHQAEgJAHAAQAGAAAEAEQAFADgBAHIAAARIAAARIAAAPIgBAPQAAAOAEANQAFAQAHAGQAFAEAQAAQAbABAIgvQAGgXgBgsQABgGADgFQAFgHAIAAQAHAAADAFQADAEAAAFQAAAogDAXQgHAhgQAYQgIAKgKAHQgNAIgNAAQgaAAgNgKg");
	this.shape_27.setTransform(-81.7,1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF99").s().p("Ag2BCQgNgJAAgMQAAgHAEgEQAEgEAGAAQAKAAAEAJQAGAMAVAAQAQABAQgIQASgIAAgJQAAgNgLgEQgIgEgVAAQgSAAgOgGQgTgIAAgQQABgUAUgQQAVgRAZAAQAKAAAPAEQASAGAAAIQAAAEgEAFQgDAFgHgBIgPgCIgOgCQgOAAgKAHQgNAGAAAHQABAFAEACQADADAHAAIAZACQAYACAMALQAPALAAAWQAAAbgeANQgXAKgdAAQgZAAgPgMg");
	this.shape_28.setTransform(-97.6,1.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF99").s().p("AAZAvIgQAHQgIACgEAAQgYAAgNgNQgMgNAAgaQAAgYASgSQASgRAZAAQAJAAANAFQAQAHAAAJQAAADgCADIgCAKIgBAOQAAATADAIIAEALIAFAKQAAAFgFAEQgEADgFAAQgFAAgKgJgAgOgUQgKALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAFgCAGgEQgEgYAAgMIABgHIACgKIgEgBIgDgBQgNAAgLALg");
	this.shape_29.setTransform(-121.7,3.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF99").s().p("AgcA2QgPgGgBgLQABgKALAAQAGAAAIACQAJADAFAAQAUAAAAgIQAAgFgPgHQgUgJgGgDQgOgKAAgPQAAgUAVgHQANgFAZAAQALAAAFADQAGAEABAJQgBATgJAAQgLAAgCgJIgIgBQgXAAAAAHQAAAEANAHQAUAJAHAFQAPAKAAAOQAAARgQAKQgNAHgSAAQgOAAgLgEg");
	this.shape_30.setTransform(-143.9,3.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF99").s().p("AAVAvIgDgVIgBgVIAAgIIAAgKIAAgDIABgFQAAgIgEAAQgJAAgIALQgIALgFAQIgBAKIAAAJIgBAJIgBAJQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIgBgJIAAgJIABgcIACgbIgBgJIAAgJQAAgGAEgEQAEgEAGAAQAOAAABAQIAAACQAPgQAPAAQAUAAAHARQAFALAAAVIAAAHIAAAGQAAAIACANQACAMAAAIQAAAGgEAEQgEAEgGAAQgNAAgBgNg");
	this.shape_31.setTransform(-155.3,3.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF99").s().p("AgMBLQgEgEAAgGIgBgTIAAgTIABgXIABgWQAAgGAEgDQAEgEAGAAQAFAAAEAEQAEADAAAGIgBAWIgBAXIABATIAAATQAAAGgEAEQgEADgFAAQgGAAgEgDgAgJgzQgFgFAAgGQAAgHAFgEQAFgEAGAAQAGAAAFAEQAFAEAAAHQAAAGgFAFQgFAEgGAAQgGAAgFgEg");
	this.shape_32.setTransform(-164.6,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF99").s().p("AAZAvIgRAHQgHACgEAAQgZAAgMgNQgMgNAAgaQAAgYASgSQASgRAYAAQALAAAMAFQAQAHAAAJQAAADgDADIgBAKIgBAOQAAATADAIIAEALIAEAKQAAAFgEAEQgDADgGAAQgFAAgKgJgAgNgUQgLALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAFgCAFgEQgDgYAAgMIABgHIABgKIgDgBIgDgBQgNAAgKALg");
	this.shape_33.setTransform(-174.6,3.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF99").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_34.setTransform(-186.4,1.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF99").s().p("AAVAvIgDgVIgBgVIAAgIIAAgKIAAgDIABgFQAAgIgEAAQgJAAgIALQgIALgFAQIgBAKIAAAJIgBAJIgBAJQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIgBgJIAAgJIABgcIACgbIgBgJIAAgJQAAgGAEgEQAEgEAGAAQAOAAABAQIAAACQAPgQAPAAQAUAAAHARQAFALAAAVIAAAHIAAAGQAAAIACANQACAMAAAIQAAAGgEAEQgEAEgGAAQgNAAgBgNg");
	this.shape_35.setTransform(-197.8,3.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF99").s().p("AghArQgPgOAAgYQgBgVANgSQAQgVAaAAQAVAAAMAQQALAPAAAWQAAAXgNARQgOASgXAAQgTAAgOgNgAgOgRQgGAKAAAMQAAANAHAGQAGAFAHAAQAIAAAGgGQAIgHAAgMQACgggTAAQgMAAgHALg");
	this.shape_36.setTransform(-210.1,3.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF99").s().p("AgfAtQgQgOAAgWQAAgTAOgWQAQgZAWAAQAKAAAOAGQARAHAAAJQAAAFgDAEQgEAEgGAAQgEAAgGgEQgGgFgMAAQgIAAgJAPQgIAPAAAKQAAALAHAGQAIAGALAAQAGAAALgFQAJgFADAAQAFAAAEAEQAFAEAAAFQAAAIgSAIQgPAHgKAAQgWAAgPgNg");
	this.shape_37.setTransform(-222,3.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF99").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape_38.setTransform(-29.9,-61.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF99").s().p("AgJBKQgFgEAAgGIABgEIAAgEIAAgPIgBgOIgCgkIgDglIgGAAQgWAAgOgEQgLgCAAgLQAAgFADgFQAFgFAHABIAQACIAQABIATAAIASgBIAXABIAYACQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgZgBIgZgBIADAqIACApIAAAKIABAKQAAAIgDAGQgEAIgIAAQgFAAgEgEg");
	this.shape_39.setTransform(-45,-61.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF99").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape_40.setTransform(-59.6,-61.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFF99").s().p("AgtA+QgPgQAAgWQAAghAegkQAZgeAaAAIAIAAIAHABQAEgEAHAAQAKAAACAMQACAIAAAMQAAAFgDAEQgEAGgHAAQgJAAgFgKQgCgFgCgBIgIAAQgNAAgQAUQgXAbAAAYQAAALAHAIQAIAIAKAAQAJAAALgFIAPgKQAIgFAEAAQAGAAAFAEQAEAEAAAGQAAAGgGAEQgcAYgcAAQgXAAgQgRg");
	this.shape_41.setTransform(-135.9,-61.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0000CC").s().p("AgJBKQgFgEAAgGIABgEIAAgEIAAgPIgBgOIgCgkIgDglIgGAAQgWAAgOgEQgLgCAAgLQAAgFADgFQAFgFAHABIAQACIAQABIATAAIASgBIAXABIAYACQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgZgBIgZgBIADAqIACApIAAAKIABAKQAAAIgDAGQgEAIgIAAQgFAAgEgEg");
	this.shape_42.setTransform(-8.2,0.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0000CC").s().p("AgtA+QgPgQAAgWQAAghAegkQAZgeAaAAIAIAAIAHABQAEgEAHAAQAKAAACAMQACAIAAAMQAAAFgDAEQgEAGgHAAQgJAAgFgKQgCgFgCgBIgIAAQgNAAgQAUQgXAbAAAYQAAALAHAIQAIAIAKAAQAJAAALgFIAPgKQAIgFAEAAQAGAAAFAEQAEAEAAAGQAAAGgGAEQgcAYgcAAQgXAAgQgRg");
	this.shape_43.setTransform(-23,1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0000CC").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape_44.setTransform(-36.8,0.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0000CC").s().p("AgsBHQgVgPAAgUQAAgQAPAAQAOAAAAAQQAAAGALAHQAKAHAJAAQAEAAABgNIACghQABgWAAgjIAAgHIgCAAIgLAAIgNAAQgGAAgEgDQgEgFAAgGQAAgOASAAIAKAAIAKAAIATAAIATgBQAcAAAAAQQAAAFgEAEQgEAEgHAAIgFAAIgHAAIgIAAIAAAHQAABJgKAhQgIAZgTAAQgTAAgTgNg");
	this.shape_45.setTransform(-51.5,1.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0000CC").s().p("AgyBOQgFgFAAgGIAAhsIAAgOQgBgHABgGQACgKAQgCQAIgCASAAQASAAASAMQAVAPAAAWQAAAMgEAHQgEAIgIAGQAKAFAHAKQAJAKAAALQAAANgPANQgKAIgLAEQgWAJglAAQgGAAgFgFgAgbA3QASgBATgGQASgFAAgGQAAgIgMgGQgIgFgIgBIgbAAgAgbg2IAAAVIAAAWQAJABAFAAQAegDAAgUQAAgHgJgHQgIgHgLAAIgQAAg");
	this.shape_46.setTransform(-65.9,0.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0000CC").s().p("AgpBGQgbgVAAgyIABgPIAAgPIAAgMIABgLQAAgJADgHQAEgJAHAAQAGAAAEAEQAFADgBAHIAAARIAAARIAAAPIgBAPQAAAOAEANQAFAQAHAGQAFAEAQAAQAbABAIgvQAGgXgBgsQABgGADgFQAFgHAIAAQAHAAADAFQADAEAAAFQAAAogDAXQgHAhgQAYQgIAKgKAHQgNAIgNAAQgaAAgNgKg");
	this.shape_47.setTransform(-81.7,1.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0000CC").s().p("Ag2BCQgNgJAAgMQAAgHAEgEQAEgEAGAAQAKAAAEAJQAGAMAVAAQAQABAQgIQASgIAAgJQAAgNgLgEQgIgEgVAAQgSAAgOgGQgTgIAAgQQABgUAUgQQAVgRAZAAQAKAAAPAEQASAGAAAIQAAAEgEAFQgDAFgHgBIgPgCIgOgCQgOAAgKAHQgNAGAAAHQABAFAEACQADADAHAAIAZACQAYACAMALQAPALAAAWQAAAbgeANQgXAKgdAAQgZAAgPgMg");
	this.shape_48.setTransform(-97.6,1.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF99").s().p("AgLAKQgFgEAAgFQAAgFAFgEQAFgFAGAAQAHAAAFAFQAFADAAAGQAAAFgFAEQgFAEgHAAQgGAAgFgEg");
	this.shape_49.setTransform(150.1,133.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF99").s().p("AAVAzQgNAFgNAAQgPAAgKgHQgLgHgCgNQgEgaAAgTQAAgNADgRQACgLAMAAQAGAAAEADQAEAEAAAGIgBAOIgCAOQAAAPABAJQABALACAHIAFACIAFABQAKAAAOgEIgBgSIAAgQQAAgVACgPQACgMAMAAQAGAAAEADQAFAEgBAGIgBAkIAAAUIAAAUIAAAHIAAAGQAAAGgEAEQgEADgGAAQgIAAgEgHg");
	this.shape_50.setTransform(84.6,128.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF99").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_51.setTransform(73.3,126.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF99").s().p("AgfAtQgQgOAAgWQAAgTAOgWQAQgZAWAAQAKAAAOAGQARAHAAAJQABAFgEAEQgEAEgFAAQgFAAgGgEQgHgFgLAAQgHAAgKAPQgJAPABAKQgBALAIAGQAIAGALAAQAGAAALgFQAJgFADAAQAGAAAEAEQADAEAAAFQAAAIgRAIQgQAHgJAAQgWAAgPgNg");
	this.shape_52.setTransform(61.7,128.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFF99").s().p("AAVAzQgNAFgNAAQgPAAgKgHQgLgHgCgNQgEgaAAgTQAAgNADgRQACgLAMAAQAGAAAEADQAEAEAAAGIgBAOIgCAOQAAAPABAJQABALACAHIAFACIAFABQAKAAAOgEIgBgSIAAgQQAAgVACgPQACgMAMAAQAGAAAEADQAFAEgBAGIgBAkIAAAUIAAAUIAAAHIAAAGQAAAGgEAEQgEADgGAAQgIAAgEgHg");
	this.shape_53.setTransform(38,128.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF99").s().p("AgqBSQgEgEAAgGIAAgmIAAgoQAAgVgBgRIgCgUQAAgIAEgHQAFgGAHAAQAGAAAEAEQAEADAAAGIgBABQAHgEAHgCQAGgCAHAAQAYABALATQAIAQAAAYQAAAVgNAPQgOAQgXAAQgIAAgJgDIgBAqQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgFgwQgHADgGAGIABApQAJADAIAAQALAAAFgGQAFgHAAgLIgBgTQgDgNgKAAQgGAAgGADg");
	this.shape_54.setTransform(26.1,131);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF99").s().p("AgJBRQgEgFAAgGIAAiMQAAgHAEgDQAEgDAFgBQAGABAEADQAEADAAAHIAACHQAAAUgOgBQgFAAgEgDg");
	this.shape_55.setTransform(6.3,125.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF99").s().p("AAZAvIgRAHQgHACgEAAQgYAAgNgNQgNgNAAgaQABgYASgSQASgRAYAAQAKAAANAFQAPAHABAJQgBADgCADIgBAKIgBAOQAAATADAIIAFALIADAKQAAAFgDAEQgEADgGAAQgFAAgKgJgAgNgUQgLALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAFgCAFgEQgDgYAAgMIABgHIABgKIgDgBIgDgBQgNAAgKALg");
	this.shape_56.setTransform(-3.2,128.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF99").s().p("AgMBLQgEgEAAgGIgBgTIAAgTIABgXIABgWQAAgGAEgDQAEgEAGAAQAFAAAEAEQAEADAAAGIgBAWIgBAXIABATIAAATQAAAGgEAEQgEADgFAAQgGAAgEgDgAgJgzQgFgFAAgGQAAgHAFgEQAFgEAGAAQAGAAAFAEQAFAEAAAHQAAAGgFAFQgFAEgGAAQgGAAgFgEg");
	this.shape_57.setTransform(-24.8,126.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFF99").s().p("AgIA8QgEgEAAgGQAAgMgDgXQgCgVAAgMIgBgKQgMAGgMAQIgCADIAAAfIgBAIIAAAHQAAAGgEADQgEADgGAAQgJAAgDgIQgCgFAAgLIAAglIgBgPIAAgPQAAgJADgIQAEgJAHAAQAGAAAFAEQAEAFAAAFIgBAJQAQgSAOAAQAPAAAHAMQAGgFAIgDQAHgDAJAAQAUAAAHAUQACAEADAYQADAPAEAnQAAAGgEAEQgEAEgGAAQgMAAgCgMIgEgeIgDgdQgDgSgEAAQgDAAgIAEQgJAFgDAEQAAALACAVQADAXAAALQAAAGgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_58.setTransform(-37,128.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF99").s().p("AgoA1QgDgEAAgFIAAhCIAAgKIABgJQgBgGAEgEQAEgDAFgBQAMAAACAMQASgOAVAAQAVAAAAAcIAAAHQgBAQgNAAQgOAAAAgOIAAgKQgWADgKAVIABAyQAAAFgFAEQgEAFgGAAQgGAAgEgFg");
	this.shape_59.setTransform(-51.2,128.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFF99").s().p("AgiAsQgRgNAAgXQAAgZANgSQAPgUAZAAQASAAAMAGQAPAHAAAQQAAAMgMAIQgGAEgRAHIgiAPQAFAGAHACQAHADAIAAQAOAAAJgGQAJgFAFAAQAKAAAAALQAAALgRAIQgOAGgQAAQgYAAgPgMgAgNgYQgHAHgEAMIAXgKQANgGAIgFQgHgEgLAAQgIAAgHAGg");
	this.shape_60.setTransform(-63.5,128.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFF99").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_61.setTransform(-75.1,126.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFF99").s().p("AAYBLQgDgIgCgQIgBgXIAAgIIAAgIIAAgJQgBgEgEAAQgMAAgIAKQgFAFgIAPQAAAlgEAHQgEAJgIAAQgGAAgEgFQgFgDAAgGIABgFIABgcIABhDIAAgEIAAgQIgBgJIgBgKQAAgGAFgDQAEgFAGAAQAKABADAKQACAHAAANIAAAVIgBATQAIgHAIgEQAIgEAKAAQARAAAIALQAFAGACAPIABAaIACATIADAUIABAEQAAAGgEAEQgFADgGAAQgKAAgDgKg");
	this.shape_62.setTransform(-97.1,125.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFF99").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_63.setTransform(-109.3,126.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFF99").s().p("AgMBLQgEgEAAgGIgBgTIAAgTIABgXIABgWQAAgGAEgDQAEgEAGAAQAFAAAEAEQAEADAAAGIgBAWIgBAXIABATIAAATQAAAGgEAEQgEADgFAAQgGAAgEgDgAgJgzQgFgFAAgGQAAgHAFgEQAFgEAGAAQAGAAAFAEQAFAEAAAHQAAAGgFAFQgFAEgGAAQgGAAgFgEg");
	this.shape_64.setTransform(-117.9,126.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFF99").s().p("AAEAhQgDgKgDgZIgCAFIgQAoQgCAEgDADQgEAGgJABQgEAAgGgJQgFgJgEgOIgKg2IgBgPQAAgFAEgEQAEgEAGABQALAAADAKIACAOIACAPIAEAZQAIgUAJgfQAFgNAKAAQAMAAADAOIAGAbIAFAdIAQg9QACgJALAAQAFAAAFADQAEAEAAAFIAAADQgLApgLAgQgDAJgHAKQgFAGgIAAQgNAAgHgYg");
	this.shape_65.setTransform(-129.2,128.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFF99").s().p("AgdA2QgPgGABgLQgBgKAMAAQAFAAAJACQAJADAFAAQATAAABgIQAAgFgOgHQgVgJgFgDQgPgKAAgPQAAgUAWgHQANgFAYAAQALAAAFADQAHAEgBAJQAAATgKAAQgJAAgDgJIgIgBQgYAAAAAHQAAAEAOAHQAUAJAHAFQAQAKAAAOQAAARgRAKQgNAHgTAAQgNAAgMgEg");
	this.shape_66.setTransform(-152.8,128.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFF99").s().p("AAcBOQgHAEgHABIgPABQgXAAgPgOQgPgQAAgWQAAgcAPgQQAQgRAYAAQAIAAAGABQAGACAEAEIADgxQACgMAMAAQAGAAAEAEQADAEAAAFQAAAPgCAeIgCAsQAAAkACANIAAADQAAAGgEADQgEAEgFAAQgIAAgEgGgAgUAFQgIAIAAASQAAALAIAIQAJAIAKAAQAHAAAEgCQADgBAHgFIADgEIAAgmQgDgFgGgDQgFgDgIAAQgOAAgHAIg");
	this.shape_67.setTransform(-165.1,125.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFF99").s().p("AAVAvIgDgVIgBgVIAAgIIAAgKIAAgDIABgFQAAgIgEAAQgJAAgIALQgIALgFAQIgBAKIAAAJIgBAJIgBAJQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIgBgJIAAgJIABgcIACgbIgBgJIAAgJQAAgGAEgEQAEgEAGAAQAOAAABAQIAAACQAPgQAPAAQAUAAAHARQAFALAAAVIAAAHIAAAGQAAAIACANQACAMAAAIQAAAGgEAEQgEAEgGAAQgNAAgBgNg");
	this.shape_68.setTransform(-177.5,128.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFF99").s().p("AgiAsQgRgNAAgXQAAgZANgSQAPgUAZAAQASAAAMAGQAPAHAAAQQAAAMgMAIQgGAEgRAHIgiAPQAFAGAHACQAHADAIAAQAOAAAJgGQAJgFAFAAQAKAAAAALQAAALgRAIQgOAGgQAAQgYAAgPgMgAgNgYQgHAHgEAMIAXgKQANgGAIgFQgHgEgLAAQgIAAgHAGg");
	this.shape_69.setTransform(-190.2,128.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFF99").s().p("AAcBOQgHAEgHABIgPABQgXAAgPgOQgPgQAAgWQAAgcAPgQQAQgRAYAAQAIAAAGABQAGACAEAEIADgxQACgMAMAAQAGAAAEAEQADAEAAAFQAAAPgCAeIgCAsQAAAkACANIAAADQAAAGgEADQgEAEgFAAQgIAAgEgGgAgUAFQgIAIAAASQAAALAIAIQAJAIAKAAQAHAAAEgCQADgBAHgFIADgEIAAgmQgDgFgGgDQgFgDgIAAQgOAAgHAIg");
	this.shape_70.setTransform(-213.3,125.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFF99").s().p("AAVAvIgDgVIgBgVIAAgIIAAgKIAAgDIABgFQAAgIgEAAQgJAAgIALQgIALgFAQIgBAKIAAAJIgBAJIgBAJQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIgBgJIAAgJIABgcIACgbIgBgJIAAgJQAAgGAEgEQAEgEAGAAQAOAAABAQIAAACQAPgQAPAAQAUAAAHARQAFALAAAVIAAAHIAAAGQAAAIACANQACAMAAAIQAAAGgEAEQgEAEgGAAQgNAAgBgNg");
	this.shape_71.setTransform(-225.7,128.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFF99").s().p("AAZAvIgQAHQgIACgEAAQgZAAgMgNQgNgNAAgaQAAgYATgSQASgRAZAAQAKAAAMAFQAPAHAAAJQAAADgBADIgCAKIgBAOQAAATADAIIAEALIAFAKQAAAFgFAEQgEADgFAAQgFAAgKgJgAgOgUQgKALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAGgCAFgEQgDgYAAgMIAAgHIACgKIgEgBIgDgBQgNAAgLALg");
	this.shape_72.setTransform(-238.1,128.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFF99").s().p("AgOAVQgFgDAAgFQAAgDAHgMIAJgQQADgGAGAAQAGAAAEADQAEAEAAAEQAAACgHANIgIAQQgEAHgGAAQgGAAgDgEg");
	this.shape_73.setTransform(113.4,72.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFF99").s().p("AgnA2QgEgEAAgGIAAhDIAAgJIABgKQAAgFADgEQAEgEAFABQAMAAACALQARgNAWAAQAVAAAAAbIAAAGQgBARgNgBQgNAAgBgNIAAgLQgWAFgKATIABAzQgBAGgEAEQgDADgHAAQgGAAgDgDg");
	this.shape_74.setTransform(103.4,66.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFF99").s().p("AgiAsQgRgNAAgXQAAgZANgSQAPgUAZAAQASAAAMAGQAPAHAAAQQAAAMgMAIQgGAEgRAHIgiAPQAFAGAHACQAHADAIAAQAOAAAJgGQAJgFAFAAQAKAAAAALQAAALgRAIQgOAGgQAAQgYAAgPgMgAgNgYQgHAHgEAMIAXgKQANgGAIgFQgHgEgLAAQgIAAgHAGg");
	this.shape_75.setTransform(91.1,66);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFF99").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_76.setTransform(79.5,64.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFF99").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_77.setTransform(68.6,64.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFF99").s().p("AgiAsQgRgNAAgXQAAgZANgSQAPgUAZAAQASAAAMAGQAPAHAAAQQAAAMgMAIQgGAEgRAHIgiAPQAFAGAHACQAHADAIAAQAOAAAJgGQAJgFAFAAQAKAAAAALQAAALgRAIQgOAGgQAAQgYAAgPgMgAgNgYQgHAHgEAMIAXgKQANgGAIgFQgHgEgLAAQgIAAgHAGg");
	this.shape_78.setTransform(56.6,66);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFF99").s().p("AgJBQQgEgEAAgGIAAiNQAAgFAEgEQAEgEAFABQAGgBAEAEQAEAEAAAFIAACIQAAATgOABQgFgBgEgEg");
	this.shape_79.setTransform(46.9,63.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFF99").s().p("AgJBQQgEgEAAgGIAAiNQAAgFAEgEQAEgEAFABQAGgBAEAEQAEAEAAAFIAACIQAAATgOABQgFgBgEgEg");
	this.shape_80.setTransform(19.9,63.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFF99").s().p("AAZAvIgRAHQgHACgEAAQgZAAgMgNQgNgNAAgaQAAgYATgSQASgRAYAAQALAAAMAFQAPAHAAAJQAAADgCADIgBAKIgBAOQAAATADAIIAFALIAEAKQAAAFgEAEQgFADgFAAQgFAAgKgJgAgOgUQgKALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAGgCAEgEQgCgYAAgMIAAgHIACgKIgEgBIgDgBQgNAAgLALg");
	this.shape_81.setTransform(10.4,66.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFF99").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_82.setTransform(-1.4,64.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFF99").s().p("AgMBLQgEgEAAgGIgBgTIAAgTIABgXIABgWQAAgGAEgDQAEgEAGAAQAFAAAEAEQAEADAAAGIgBAWIgBAXIABATIAAATQAAAGgEAEQgEADgFAAQgGAAgEgDgAgJgzQgFgFAAgGQAAgHAFgEQAFgEAGAAQAGAAAFAEQAFAEAAAHQAAAGgFAFQgFAEgGAAQgGAAgFgEg");
	this.shape_83.setTransform(-10.1,63.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFF99").s().p("AgqBSQgEgEAAgFIAAgnIAAgnQAAgXgBgPIgCgVQAAgJAEgFQAFgHAHAAQAGAAAEADQAEAFAAAFIgBABQAHgEAHgCQAGgBAHAAQAYAAALATQAIAQAAAXQAAAWgNAOQgOARgXgBQgIAAgJgCIgBArQAAAFgEAEQgEAEgGAAQgGAAgEgEgAgFgwQgHADgGAGIABApQAJADAIAAQALAAAFgHQAFgGAAgMIgBgTQgDgMgKAAQgGAAgGADg");
	this.shape_84.setTransform(-19.8,68.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFF99").s().p("AAZAvIgQAHQgIACgEAAQgZAAgMgNQgMgNAAgaQAAgYASgSQASgRAZAAQAJAAANAFQAQAHAAAJQAAADgCADIgCAKIgBAOQAAATADAIIAEALIAFAKQgBAFgEAEQgDADgGAAQgFAAgKgJgAgOgUQgKALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAFgCAGgEQgEgYAAgMIABgHIABgKIgDgBIgDgBQgNAAgLALg");
	this.shape_85.setTransform(-32.3,66.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFF99").s().p("AgfAtQgRgOAAgWQAAgTAPgWQARgZAUAAQALAAAOAGQASAHAAAJQgBAFgDAEQgDAEgHAAQgEAAgGgEQgHgFgMAAQgHAAgJAPQgJAPAAAKQAAALAIAGQAHAGALAAQAHAAAKgFQALgFACAAQAGAAAEAEQADAEAAAFQAAAIgRAIQgPAHgLAAQgVAAgPgNg");
	this.shape_86.setTransform(-44.8,66);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFF99").s().p("AAYBLQgDgIgCgPIgBgYIAAgIIAAgHIAAgJQgBgFgEAAQgMAAgIAJQgFAGgIAOQAAAlgEAIQgEAJgIgBQgGAAgEgDQgFgEAAgGIABgGIABgbIABhDIAAgEIAAgQIgBgKIgBgJQAAgGAFgEQAEgDAGAAQAKgBADALQACAHAAAMIAAAVIgBAUQAIgHAIgEQAIgDAKgBQARAAAIAKQAFAIACAOIABAZIACAVIADAUIABADQAAAGgEADQgFAFgGAAQgKAAgDgLg");
	this.shape_87.setTransform(-89.7,63.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFF99").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_88.setTransform(-101.9,64.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFF99").s().p("AgMBLQgEgEAAgGIgBgTIAAgTIABgXIABgWQAAgGAEgDQAEgEAGAAQAFAAAEAEQAEADAAAGIgBAWIgBAXIABATIAAATQAAAGgEAEQgEADgFAAQgGAAgEgDgAgJgzQgFgFAAgGQAAgHAFgEQAFgEAGAAQAGAAAFAEQAFAEAAAHQAAAGgFAFQgFAEgGAAQgGAAgFgEg");
	this.shape_89.setTransform(-110.6,63.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFF99").s().p("AAEAgQgDgJgDgZIgCAFIgQAnQgCAFgDACQgEAIgJAAQgEAAgGgJQgFgIgEgPIgKg2IgBgOQAAgHAEgDQAEgDAGgBQALAAADALIACAOIACAPIAEAZQAIgUAJgfQAFgOAKAAQAMABADAPIAGAbIAFAbIAQg9QACgIALgBQAFAAAFAFQAEADAAAGIAAACQgLApgLAfQgDAKgHAJQgFAIgIAAQgNgBgHgZg");
	this.shape_90.setTransform(-121.9,66.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFF99").s().p("AgdA2QgPgGAAgLQAAgKANAAQAEAAAJACQAJADAFAAQAUAAAAgIQAAgFgOgHQgVgJgFgDQgPgKAAgPQAAgUAVgHQANgFAaAAQAKAAAFADQAGAEAAAJQABATgLAAQgKAAgBgJIgJgBQgYAAAAAHQAAAEAOAHQAVAJAHAFQAOAKAAAOQAAARgQAKQgNAHgSAAQgOAAgMgEg");
	this.shape_91.setTransform(-145.4,66);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFF99").s().p("AAVAvIgDgVIgBgVIAAgIIAAgKIAAgDIABgFQAAgIgEAAQgJAAgIALQgIALgFAQIgBAKIAAAJIgBAJIgBAJQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIgBgJIAAgJIABgcIACgbIgBgJIAAgJQAAgGAEgEQAEgEAGAAQAOAAABAQIAAACQAPgQAPAAQAUAAAHARQAFALAAAVIAAAHIAAAGQAAAIACANQACAMAAAIQAAAGgEAEQgEAEgGAAQgNAAgBgNg");
	this.shape_92.setTransform(-156.8,65.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFF99").s().p("AgMBLQgEgEAAgGIgBgTIAAgTIABgXIABgWQAAgGAEgDQAEgEAGAAQAFAAAEAEQAEADAAAGIgBAWIgBAXIABATIAAATQAAAGgEAEQgEADgFAAQgGAAgEgDgAgJgzQgFgFAAgGQAAgHAFgEQAFgEAGAAQAGAAAFAEQAFAEAAAHQAAAGgFAFQgFAEgGAAQgGAAgFgEg");
	this.shape_93.setTransform(-166.1,63.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFF99").s().p("Ag0BBQAAgFAEgEQADgDAGAAIANACQAJABAHAAQAOAAAHgJQAHgJABgUQgFAGgGACQgHADgHgBQgUABgNgNQgNgOAAgTQAAgdARgQQASgSAdAAQAKgBAHADQAHACAEAFQANACAAAOIgCATQgFAYAAAZQgBAhgKAQQgOATghAAQgoAAAAgQgAgPgtQgJAKAAAQQAAAMAFAHQAFAEAJAAQAHABAJgJQAIgKABgJIAEgeIgGgDIgHgBQgQAAgKAMg");
	this.shape_94.setTransform(-176,68.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFF99").s().p("AgiAsQgRgNAAgXQAAgZANgSQAPgUAZAAQASAAAMAGQAPAHAAAQQAAAMgMAIQgGAEgRAHIgiAPQAFAGAHACQAHADAIAAQAOAAAJgGQAJgFAFAAQAKAAAAALQAAALgRAIQgOAGgQAAQgYAAgPgMgAgNgYQgHAHgEAMIAXgKQANgGAIgFQgHgEgLAAQgIAAgHAGg");
	this.shape_95.setTransform(-188.5,66);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFF99").s().p("AgeBOQgEADgFABQgFgBgFgDQgDgEAAgGIAAgHIABgHIAAhzQAAgIACgGQAFgHAIAAQAKAAABAMIgBAEIAAAFIAAAmQAHgDAHgCQAHgDAGAAQAYAAAOASQAPAPAAAYQAAAXgQARQgRARgYAAQgOAAgNgFgAgLgBQgHACgIAGIAAArQAOAHAJgBQANABAIgKQAJgIAAgNQgBgNgGgKQgIgHgLgBQgFAAgHAEg");
	this.shape_96.setTransform(-201.4,63.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AgyBOQgFgFAAgGIAAhsIAAgOQgBgHABgGQACgKAQgCQAIgCASAAQASAAASAMQAVAPAAAWQAAAMgEAHQgEAIgIAGQAKAFAHAKQAJAKAAALQAAANgPANQgKAIgLAEQgWAJglAAQgGAAgFgFgAgbA3QASgBATgGQASgFAAgGQAAgIgMgGQgIgFgIgBIgbAAgAgbg2IAAAVIAAAWQAJABAFAAQAegDAAgUQAAgHgJgHQgIgHgLAAIgQAAg");
	this.shape_97.setTransform(131.7,0.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("Ag3BNQgEgEAAgGIAAgXIAAgXIAAhSQAAgHAEgFQAGgHAJABIAZACQAPABAJAGQArAWAAAgQAAAOgJAJQgJAKgSAHQAbAQAOAPQADAEAAAFQAAAGgEAEQgEAEgGAAQgGAAgEgEQgggdgkgLIABAhQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgfADIAEAAQAaAAALgFQAFgDAEgEQAFgFAAgCQAAgLgPgLQgNgKgPgCIgMAAg");
	this.shape_98.setTransform(117.2,0.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape_99.setTransform(103,0.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AgWBJQgMgegQg3IgIgcQgGgTABgIQgBgGAFgEQAEgDAGAAQAKAAAEAKIAEASIAJAhQAIAcAIAXIAXg9IAJgZQAGgOAHgIQAFgGAGAAQAGAAAFAFQADAEAAAFQABAFgDAEQgFAHgFAMIgIAUIgbBGQgFANgHAMQgEAIgIAAQgKAAgFgKg");
	this.shape_100.setTransform(88.2,1.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFF99").s().p("AAVAvIgDgVIgBgVIAAgIIAAgKIAAgDIABgFQAAgIgEAAQgJAAgIALQgIALgFAQIgBAKIAAAJIgBAJIgBAJQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIgBgJIAAgJIABgcIACgbIgBgJIAAgJQAAgGAEgEQAEgEAGAAQAOAAABAQIAAACQAPgQAPAAQAUAAAHARQAFALAAAVIAAAHIAAAGQAAAIACANQACAMAAAIQAAAGgEAEQgEAEgGAAQgNAAgBgNg");
	this.shape_101.setTransform(28.4,3.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFF99").s().p("AAZAvIgRAHQgHACgEAAQgYAAgNgNQgNgNAAgaQABgYASgSQASgRAYAAQAKAAANAFQAPAHAAAJQAAADgCADIgBAKIgBAOQAAATADAIIAFALIADAKQAAAFgDAEQgFADgFAAQgFAAgKgJgAgNgUQgLALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAGgCAEgEQgCgYAAgMIAAgHIABgKIgDgBIgDgBQgNAAgKALg");
	this.shape_102.setTransform(16,3.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000099").s().p("AgJBKQgFgEAAgGIABgEIAAgEIAAgPIgBgOIgCgkIgDglIgGAAQgWAAgOgEQgLgCAAgLQAAgFADgFQAFgFAHABIAQACIAQABIATAAIASgBIAXABIAYACQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgZgBIgZgBIADAqIACApIAAAKIABAKQAAAIgDAGQgEAIgIAAQgFAAgEgEg");
	this.shape_103.setTransform(-8.2,0.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000099").s().p("AgtA+QgPgQAAgWQAAghAegkQAZgeAaAAIAIAAIAHABQAEgEAHAAQAKAAACAMQACAIAAAMQAAAFgDAEQgEAGgHAAQgJAAgFgKQgCgFgCgBIgIAAQgNAAgQAUQgXAbAAAYQAAALAHAIQAIAIAKAAQAJAAALgFIAPgKQAIgFAEAAQAGAAAFAEQAEAEAAAGQAAAGgGAEQgcAYgcAAQgXAAgQgRg");
	this.shape_104.setTransform(-23,1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000099").s().p("AgvBOQgLgKAAghIACgoIACgpIgBgLIgBgKQAAgQAOAAQAFAAADADIAXgFIATgBQAaAAAQAGQAJADAAAKQAAAFgEAEQgEAFgGAAIgEgBQgRgEgQAAIgPABIgTAEIgBAoIAngEIAZgCQAGAAAEAEQAFAEAAAGQAAAMgNABIgZACIgrAEIAAAVQAAAUACADQABACAMAAIASgBIATAAIAGgBIAGAAQAGAAAEADQAFAEAAAHQAAALgMACQgKACgfAAQgiAAgKgJg");
	this.shape_105.setTransform(-36.8,0.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000099").s().p("AgsBHQgVgPAAgUQAAgQAPAAQAOAAAAAQQAAAGALAHQAKAHAJAAQAEAAABgNIACghQABgWAAgjIAAgHIgCAAIgLAAIgNAAQgGAAgEgDQgEgFAAgGQAAgOASAAIAKAAIAKAAIATAAIATgBQAcAAAAAQQAAAFgEAEQgEAEgHAAIgFAAIgHAAIgIAAIAAAHQAABJgKAhQgIAZgTAAQgTAAgTgNg");
	this.shape_106.setTransform(-51.5,1.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000099").s().p("AgyBOQgFgFAAgGIAAhsIAAgOQgBgHABgGQACgKAQgCQAIgCASAAQASAAASAMQAVAPAAAWQAAAMgEAHQgEAIgIAGQAKAFAHAKQAJAKAAALQAAANgPANQgKAIgLAEQgWAJglAAQgGAAgFgFgAgbA3QASgBATgGQASgFAAgGQAAgIgMgGQgIgFgIgBIgbAAgAgbg2IAAAVIAAAWQAJABAFAAQAegDAAgUQAAgHgJgHQgIgHgLAAIgQAAg");
	this.shape_107.setTransform(-65.9,0.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000099").s().p("AgpBGQgbgVAAgyIABgPIAAgPIAAgMIABgLQAAgJADgHQAEgJAHAAQAGAAAEAEQAFADgBAHIAAARIAAARIAAAPIgBAPQAAAOAEANQAFAQAHAGQAFAEAQAAQAbABAIgvQAGgXgBgsQABgGADgFQAFgHAIAAQAHAAADAFQADAEAAAFQAAAogDAXQgHAhgQAYQgIAKgKAHQgNAIgNAAQgaAAgNgKg");
	this.shape_108.setTransform(-81.7,1.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000099").s().p("Ag2BCQgNgJAAgMQAAgHAEgEQAEgEAGAAQAKAAAEAJQAGAMAVAAQAQABAQgIQASgIAAgJQAAgNgLgEQgIgEgVAAQgSAAgOgGQgTgIAAgQQABgUAUgQQAVgRAZAAQAKAAAPAEQASAGAAAIQAAAEgEAFQgDAFgHgBIgPgCIgOgCQgOAAgKAHQgNAGAAAHQABAFAEACQADADAHAAIAZACQAYACAMALQAPALAAAWQAAAbgeANQgXAKgdAAQgZAAgPgMg");
	this.shape_109.setTransform(-97.6,1.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFF99").s().p("AAZAvIgQAHQgIACgEAAQgYAAgNgNQgMgNAAgaQAAgYASgSQASgRAZAAQAJAAANAFQAQAHAAAJQAAADgCADIgCAKIgBAOQAAATADAIIAEALIAFAKQAAAFgFAEQgEADgFAAQgFAAgKgJgAgOgUQgKALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAFgCAGgEQgEgYAAgMIABgHIACgKIgEgBIgDgBQgNAAgLALg");
	this.shape_110.setTransform(-121.7,3.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFF99").s().p("AAVAvIgDgVIgBgVIAAgIIAAgKIAAgDIABgFQAAgIgEAAQgJAAgIALQgIALgFAQIgBAKIAAAJIgBAJIgBAJQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIgBgJIAAgJIABgcIACgbIgBgJIAAgJQAAgGAEgEQAEgEAGAAQAOAAABAQIAAACQAPgQAPAAQAUAAAHARQAFALAAAVIAAAHIAAAGQAAAIACANQACAMAAAIQAAAGgEAEQgEAEgGAAQgNAAgBgNg");
	this.shape_111.setTransform(-155.3,3.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFF99").s().p("AgMBLQgEgEAAgGIgBgTIAAgTIABgXIABgWQAAgGAEgDQAEgEAGAAQAFAAAEAEQAEADAAAGIgBAWIgBAXIABATIAAATQAAAGgEAEQgEADgFAAQgGAAgEgDgAgJgzQgFgFAAgGQAAgHAFgEQAFgEAGAAQAGAAAFAEQAFAEAAAHQAAAGgFAFQgFAEgGAAQgGAAgFgEg");
	this.shape_112.setTransform(-164.6,1.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFF99").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_113.setTransform(-186.4,1.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFF99").s().p("AAVAvIgDgVIgBgVIAAgIIAAgKIAAgDIABgFQAAgIgEAAQgJAAgIALQgIALgFAQIgBAKIAAAJIgBAJIgBAJQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIgBgJIAAgJIABgcIACgbIgBgJIAAgJQAAgGAEgEQAEgEAGAAQAOAAABAQIAAACQAPgQAPAAQAUAAAHARQAFALAAAVIAAAHIAAAGQAAAIACANQACAMAAAIQAAAGgEAEQgEAEgGAAQgNAAgBgNg");
	this.shape_114.setTransform(-197.8,3.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFF99").s().p("AghArQgPgOAAgYQgBgVANgSQAQgVAaAAQAVAAAMAQQALAPAAAWQAAAXgNARQgOASgXAAQgTAAgOgNgAgOgRQgGAKAAAMQAAANAHAGQAGAFAHAAQAIAAAGgGQAIgHAAgMQACgggTAAQgMAAgHALg");
	this.shape_115.setTransform(-210.1,3.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgnA2QgEgEAAgGIAAhDIAAgJIABgKQAAgFADgEQAEgEAFABQAMAAACALQARgNAWAAQAVAAAAAbIAAAGQgBARgNgBQgNAAgBgNIAAgLQgWAFgKATIABAzQgBAGgEAEQgDADgHAAQgGAAgDgDg");
	this.shape_116.setTransform(103.4,66.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgiAsQgRgNAAgXQAAgZANgSQAPgUAZAAQASAAAMAGQAPAHAAAQQAAAMgMAIQgGAEgRAHIgiAPQAFAGAHACQAHADAIAAQAOAAAJgGQAJgFAFAAQAKAAAAALQAAALgRAIQgOAGgQAAQgYAAgPgMgAgNgYQgHAHgEAMIAXgKQANgGAIgFQgHgEgLAAQgIAAgHAGg");
	this.shape_117.setTransform(91.1,66);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_118.setTransform(79.5,64.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_119.setTransform(68.6,64.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgiAsQgRgNAAgXQAAgZANgSQAPgUAZAAQASAAAMAGQAPAHAAAQQAAAMgMAIQgGAEgRAHIgiAPQAFAGAHACQAHADAIAAQAOAAAJgGQAJgFAFAAQAKAAAAALQAAALgRAIQgOAGgQAAQgYAAgPgMgAgNgYQgHAHgEAMIAXgKQANgGAIgFQgHgEgLAAQgIAAgHAGg");
	this.shape_120.setTransform(56.6,66);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgJBQQgEgEAAgGIAAiNQAAgFAEgEQAEgEAFABQAGgBAEAEQAEAEAAAFIAACIQAAATgOABQgFgBgEgEg");
	this.shape_121.setTransform(46.9,63.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#9900CC").s().p("AgJBQQgEgEAAgGIAAiNQAAgFAEgEQAEgEAFABQAGgBAEAEQAEAEAAAFIAACIQAAATgOABQgFgBgEgEg");
	this.shape_122.setTransform(19.9,63.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#9900CC").s().p("AAZAvIgRAHQgHACgEAAQgZAAgMgNQgNgNAAgaQAAgYATgSQASgRAYAAQALAAAMAFQAPAHAAAJQAAADgCADIgBAKIgBAOQAAATADAIIAFALIAEAKQAAAFgEAEQgFADgFAAQgFAAgKgJgAgOgUQgKALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAGgCAEgEQgCgYAAgMIAAgHIACgKIgEgBIgDgBQgNAAgLALg");
	this.shape_123.setTransform(10.4,66.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#9900CC").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_124.setTransform(-1.4,64.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#9900CC").s().p("AgMBLQgEgEAAgGIgBgTIAAgTIABgXIABgWQAAgGAEgDQAEgEAGAAQAFAAAEAEQAEADAAAGIgBAWIgBAXIABATIAAATQAAAGgEAEQgEADgFAAQgGAAgEgDgAgJgzQgFgFAAgGQAAgHAFgEQAFgEAGAAQAGAAAFAEQAFAEAAAHQAAAGgFAFQgFAEgGAAQgGAAgFgEg");
	this.shape_125.setTransform(-10.1,63.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#9900CC").s().p("AgqBSQgEgEAAgFIAAgnIAAgnQAAgXgBgPIgCgVQAAgJAEgFQAFgHAHAAQAGAAAEADQAEAFAAAFIgBABQAHgEAHgCQAGgBAHAAQAYAAALATQAIAQAAAXQAAAWgNAOQgOARgXgBQgIAAgJgCIgBArQAAAFgEAEQgEAEgGAAQgGAAgEgEgAgFgwQgHADgGAGIABApQAJADAIAAQALAAAFgHQAFgGAAgMIgBgTQgDgMgKAAQgGAAgGADg");
	this.shape_126.setTransform(-19.8,68.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9900CC").s().p("AAZAvIgQAHQgIACgEAAQgZAAgMgNQgMgNAAgaQAAgYASgSQASgRAZAAQAJAAANAFQAQAHAAAJQAAADgCADIgCAKIgBAOQAAATADAIIAEALIAFAKQgBAFgEAEQgDADgGAAQgFAAgKgJgAgOgUQgKALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAFgCAGgEQgEgYAAgMIABgHIABgKIgDgBIgDgBQgNAAgLALg");
	this.shape_127.setTransform(-32.3,66.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#9900CC").s().p("AgfAtQgRgOAAgWQAAgTAPgWQARgZAUAAQALAAAOAGQASAHAAAJQgBAFgDAEQgDAEgHAAQgEAAgGgEQgHgFgMAAQgHAAgJAPQgJAPAAAKQAAALAIAGQAHAGALAAQAHAAAKgFQALgFACAAQAGAAAEAEQADAEAAAFQAAAIgRAIQgPAHgLAAQgVAAgPgNg");
	this.shape_128.setTransform(-44.8,66);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#9900CC").s().p("AgnA2QgEgEAAgGIAAhDIAAgJIABgKQAAgFADgEQAEgEAFABQAMAAACALQARgNAWAAQAVAAAAAbIAAAGQgBARgNgBQgNAAgBgNIAAgLQgWAFgKATIABAzQgBAGgEAEQgDADgHAAQgGAAgDgDg");
	this.shape_129.setTransform(103.4,66.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#9900CC").s().p("AgiAsQgRgNAAgXQAAgZANgSQAPgUAZAAQASAAAMAGQAPAHAAAQQAAAMgMAIQgGAEgRAHIgiAPQAFAGAHACQAHADAIAAQAOAAAJgGQAJgFAFAAQAKAAAAALQAAALgRAIQgOAGgQAAQgYAAgPgMgAgNgYQgHAHgEAMIAXgKQANgGAIgFQgHgEgLAAQgIAAgHAGg");
	this.shape_130.setTransform(91.1,66);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#9900CC").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_131.setTransform(68.6,64.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#9900CC").s().p("AgiAsQgRgNAAgXQAAgZANgSQAPgUAZAAQASAAAMAGQAPAHAAAQQAAAMgMAIQgGAEgRAHIgiAPQAFAGAHACQAHADAIAAQAOAAAJgGQAJgFAFAAQAKAAAAALQAAALgRAIQgOAGgQAAQgYAAgPgMgAgNgYQgHAHgEAMIAXgKQANgGAIgFQgHgEgLAAQgIAAgHAGg");
	this.shape_132.setTransform(56.6,66);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#9900CC").s().p("AgJBQQgEgEAAgGIAAiNQAAgFAEgEQAEgEAFABQAGgBAEAEQAEAEAAAFIAACIQAAATgOABQgFgBgEgEg");
	this.shape_133.setTransform(19.9,63.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#9900CC").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_134.setTransform(-1.4,64.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#009900").s().p("AAVAvIgDgVIgBgVIAAgIIAAgKIAAgDIABgFQAAgIgEAAQgJAAgIALQgIALgFAQIgBAKIAAAJIgBAJIgBAJQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIgBgJIAAgJIABgcIACgbIgBgJIAAgJQAAgGAEgEQAEgEAGAAQAOAAABAQIAAACQAPgQAPAAQAUAAAHARQAFALAAAVIAAAHIAAAGQAAAIACANQACAMAAAIQAAAGgEAEQgEAEgGAAQgNAAgBgNg");
	this.shape_135.setTransform(139.2,128.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#009900").s().p("AghArQgPgOAAgYQgBgVANgSQAQgVAaAAQAVAAAMAQQALAPAAAWQAAAXgNARQgOASgXAAQgTAAgOgNgAgOgRQgGAKAAAMQAAANAHAGQAGAFAHAAQAIAAAGgGQAIgHAAgMQACgggTAAQgMAAgHALg");
	this.shape_136.setTransform(126.9,128.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#009900").s().p("AgMBLQgEgEAAgGIgBgTIAAgTIABgXIABgWQAAgGAEgDQAEgEAGAAQAFAAAEAEQAEADAAAGIgBAWIgBAXIABATIAAATQAAAGgEAEQgEADgFAAQgGAAgEgDgAgJgzQgFgFAAgGQAAgHAFgEQAFgEAGAAQAGAAAFAEQAFAEAAAHQAAAGgFAFQgFAEgGAAQgGAAgFgEg");
	this.shape_137.setTransform(117.9,126.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#009900").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_138.setTransform(108.7,126.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#009900").s().p("AAZAvIgRAHQgHACgEAAQgYAAgNgNQgNgNAAgaQABgYASgSQASgRAYAAQAKAAANAFQAPAHAAAJQAAADgCADIgBAKIgBAOQAAATADAIIAFALIADAKQAAAFgDAEQgFADgFAAQgFAAgKgJgAgNgUQgLALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAGgCAEgEQgCgYAAgMIAAgHIABgKIgDgBIgDgBQgNAAgKALg");
	this.shape_139.setTransform(97,128.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#009900").s().p("AAVAzQgNAFgNAAQgPAAgKgHQgLgHgCgNQgEgaAAgTQAAgNADgRQACgLAMAAQAGAAAEADQAEAEAAAGIgBAOIgCAOQAAAPABAJQABALACAHIAFACIAFABQAKAAAOgEIgBgSIAAgQQAAgVACgPQACgMAMAAQAGAAAEADQAFAEgBAGIgBAkIAAAUIAAAUIAAAHIAAAGQAAAGgEAEQgEADgGAAQgIAAgEgHg");
	this.shape_140.setTransform(84.6,128.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#009900").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_141.setTransform(73.3,126.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#009900").s().p("AgfAtQgQgOAAgWQAAgTAOgWQAQgZAWAAQAKAAAOAGQARAHAAAJQABAFgEAEQgEAEgFAAQgFAAgGgEQgHgFgLAAQgHAAgKAPQgJAPABAKQgBALAIAGQAIAGALAAQAGAAALgFQAJgFADAAQAGAAAEAEQADAEAAAFQAAAIgRAIQgQAHgJAAQgWAAgPgNg");
	this.shape_142.setTransform(61.7,128.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#009900").s().p("AAVAvIgDgVIgBgVIAAgIIAAgKIAAgDIABgFQAAgIgEAAQgJAAgIALQgIALgFAQIgBAKIAAAJIgBAJIgBAJQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIgBgJIAAgJIABgcIACgbIgBgJIAAgJQAAgGAEgEQAEgEAGAAQAOAAABAQIAAACQAPgQAPAAQAUAAAHARQAFALAAAVIAAAHIAAAGQAAAIACANQACAMAAAIQAAAGgEAEQgEAEgGAAQgNAAgBgNg");
	this.shape_143.setTransform(50.1,128.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#009900").s().p("AAVAzQgNAFgNAAQgPAAgKgHQgLgHgCgNQgEgaAAgTQAAgNADgRQACgLAMAAQAGAAAEADQAEAEAAAGIgBAOIgCAOQAAAPABAJQABALACAHIAFACIAFABQAKAAAOgEIgBgSIAAgQQAAgVACgPQACgMAMAAQAGAAAEADQAFAEgBAGIgBAkIAAAUIAAAUIAAAHIAAAGQAAAGgEAEQgEADgGAAQgIAAgEgHg");
	this.shape_144.setTransform(38,128.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#009900").s().p("AgqBSQgEgEAAgGIAAgmIAAgoQAAgVgBgRIgCgUQAAgIAEgHQAFgGAHAAQAGAAAEAEQAEADAAAGIgBABQAHgEAHgCQAGgCAHAAQAYABALATQAIAQAAAYQAAAVgNAPQgOAQgXAAQgIAAgJgDIgBAqQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgFgwQgHADgGAGIABApQAJADAIAAQALAAAFgGQAFgHAAgLIgBgTQgDgNgKAAQgGAAgGADg");
	this.shape_145.setTransform(26.1,131);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#009900").s().p("AgJBRQgEgFAAgGIAAiMQAAgHAEgDQAEgDAFgBQAGABAEADQAEADAAAHIAACHQAAAUgOgBQgFAAgEgDg");
	this.shape_146.setTransform(6.3,125.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#009900").s().p("AAZAvIgRAHQgHACgEAAQgYAAgNgNQgNgNAAgaQABgYASgSQASgRAYAAQAKAAANAFQAPAHABAJQgBADgCADIgBAKIgBAOQAAATADAIIAFALIADAKQAAAFgDAEQgEADgGAAQgFAAgKgJgAgNgUQgLALAAANQAAAOAFAHQAFAHAKAAQAFAAAGgCQAFgCAFgEQgDgYAAgMIABgHIABgKIgDgBIgDgBQgNAAgKALg");
	this.shape_147.setTransform(-3.2,128.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#009900").s().p("AAVAvIgDgVIgBgVIAAgIIAAgKIAAgDIABgFQAAgIgEAAQgJAAgIALQgIALgFAQIgBAKIAAAJIgBAJIgBAJQAAAGgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIgBgJIAAgJIABgcIACgbIgBgJIAAgJQAAgGAEgEQAEgEAGAAQAOAAABAQIAAACQAPgQAPAAQAUAAAHARQAFALAAAVIAAAHIAAAGQAAAIACANQACAMAAAIQAAAGgEAEQgEAEgGAAQgNAAgBgNg");
	this.shape_148.setTransform(-15.5,128.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#009900").s().p("AgMBLQgEgEAAgGIgBgTIAAgTIABgXIABgWQAAgGAEgDQAEgEAGAAQAFAAAEAEQAEADAAAGIgBAWIgBAXIABATIAAATQAAAGgEAEQgEADgFAAQgGAAgEgDgAgJgzQgFgFAAgGQAAgHAFgEQAFgEAGAAQAGAAAFAEQAFAEAAAHQAAAGgFAFQgFAEgGAAQgGAAgFgEg");
	this.shape_149.setTransform(-24.8,126.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#009900").s().p("AgIA8QgEgEAAgGQAAgMgDgXQgCgVAAgMIgBgKQgMAGgMAQIgCADIAAAfIgBAIIAAAHQAAAGgEADQgEADgGAAQgJAAgDgIQgCgFAAgLIAAglIgBgPIAAgPQAAgJADgIQAEgJAHAAQAGAAAFAEQAEAFAAAFIgBAJQAQgSAOAAQAPAAAHAMQAGgFAIgDQAHgDAJAAQAUAAAHAUQACAEADAYQADAPAEAnQAAAGgEAEQgEAEgGAAQgMAAgCgMIgEgeIgDgdQgDgSgEAAQgDAAgIAEQgJAFgDAEQAAALACAVQADAXAAALQAAAGgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_150.setTransform(-37,128.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#009900").s().p("AgoA1QgDgEAAgFIAAhCIAAgKIABgJQgBgGAEgEQAEgDAFgBQAMAAACAMQASgOAVAAQAVAAAAAcIAAAHQgBAQgNAAQgOAAAAgOIAAgKQgWADgKAVIABAyQAAAFgFAEQgEAFgGAAQgGAAgEgFg");
	this.shape_151.setTransform(-51.2,128.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#009900").s().p("AgiAsQgRgNAAgXQAAgZANgSQAPgUAZAAQASAAAMAGQAPAHAAAQQAAAMgMAIQgGAEgRAHIgiAPQAFAGAHACQAHADAIAAQAOAAAJgGQAJgFAFAAQAKAAAAALQAAALgRAIQgOAGgQAAQgYAAgPgMgAgNgYQgHAHgEAMIAXgKQANgGAIgFQgHgEgLAAQgIAAgHAGg");
	this.shape_152.setTransform(-63.5,128.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#009900").s().p("AgIBHQgFgDAAgGIAAgLIABgLIgCg0IgTgCQgNgBAAgMQAAgGAEgEQAEgEAGAAIARABIAAgLIgBgKQAAgFAEgEQAFgEAGAAQAOAAAAAaIAAAIIAKgBQAMAAAEACQAIACAAAKQAAAGgEAEQgEAEgGAAIgFAAIgFgBIgKABIACA1IAAAFIAAAGQAAAYgPAAQgEAAgEgEg");
	this.shape_153.setTransform(-75.1,126.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-135.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-59.6}},{t:this.shape_9,p:{x:-45}},{t:this.shape_8,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_6,p:{x:9.8}},{t:this.shape_5},{t:this.shape_4,p:{x:42.5,y:-61.6}},{t:this.shape_3,p:{x:57.6,y:-61.6}},{t:this.shape_2},{t:this.shape_1,p:{x:89.5,y:-61.5}},{t:this.shape,p:{x:103.7,y:-61.6}}]},1).to({state:[{t:this.shape_16},{t:this.shape_41},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_10,p:{x:9.8}},{t:this.shape_5},{t:this.shape_9,p:{x:42.5}},{t:this.shape_8,p:{x:57.6}},{t:this.shape_2},{t:this.shape_15,p:{x:89.5}},{t:this.shape_6,p:{x:103.7}},{t:this.shape_37},{t:this.shape_36,p:{x:-210.1,y:3.6}},{t:this.shape_35,p:{x:-197.8,y:3.4}},{t:this.shape_34,p:{x:-186.4,y:1.8}},{t:this.shape_33},{t:this.shape_32,p:{x:-164.6,y:1.1}},{t:this.shape_31,p:{x:-155.3,y:3.4}},{t:this.shape_30},{t:this.shape_29,p:{x:-121.7}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_3,p:{x:-36.8,y:0.9}},{t:this.shape_1,p:{x:-23,y:1}},{t:this.shape_4,p:{x:-8.2,y:0.9}},{t:this.shape_24,p:{x:16,y:3.6}},{t:this.shape_23,p:{x:28.4,y:3.4}},{t:this.shape_22},{t:this.shape_21,p:{x:64.1,y:3.6}},{t:this.shape_20},{t:this.shape,p:{x:103,y:0.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},8).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-135.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_38,p:{x:-59.6}},{t:this.shape_9,p:{x:-45}},{t:this.shape_10,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_8,p:{x:9.8}},{t:this.shape_5},{t:this.shape_4,p:{x:42.5,y:-61.6}},{t:this.shape_6,p:{x:57.6}},{t:this.shape_2},{t:this.shape_1,p:{x:89.5,y:-61.5}},{t:this.shape_3,p:{x:103.7,y:-61.6}},{t:this.shape_37},{t:this.shape_36,p:{x:-210.1,y:3.6}},{t:this.shape_35,p:{x:-197.8,y:3.4}},{t:this.shape_34,p:{x:-186.4,y:1.8}},{t:this.shape_33},{t:this.shape_32,p:{x:-164.6,y:1.1}},{t:this.shape_31,p:{x:-155.3,y:3.4}},{t:this.shape_30},{t:this.shape_29,p:{x:-121.7}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_24,p:{x:16,y:3.6}},{t:this.shape_23,p:{x:28.4,y:3.4}},{t:this.shape_22},{t:this.shape_21,p:{x:64.1,y:3.6}},{t:this.shape_20},{t:this.shape,p:{x:103,y:0.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},16).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-135.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-59.6}},{t:this.shape_9,p:{x:-45}},{t:this.shape_8,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_6,p:{x:9.8}},{t:this.shape_5},{t:this.shape_4,p:{x:42.5,y:-61.6}},{t:this.shape_3,p:{x:57.6,y:-61.6}},{t:this.shape_2},{t:this.shape_1,p:{x:89.5,y:-61.5}},{t:this.shape,p:{x:103.7,y:-61.6}},{t:this.shape_37},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_33},{t:this.shape_112},{t:this.shape_111},{t:this.shape_30},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_22},{t:this.shape_29,p:{x:64.1}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_17},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{x:-166.1,y:63.6}},{t:this.shape_92,p:{x:-156.8,y:65.9}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89,p:{x:-110.6}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_21,p:{x:-66.8,y:66.1}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83,p:{x:-10.1,y:63.6}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77,p:{x:68.6,y:64.3}},{t:this.shape_76,p:{x:79.5}},{t:this.shape_75,p:{x:91.1}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-225.7,y:128.4}},{t:this.shape_70},{t:this.shape_69,p:{x:-190.2,y:128.5}},{t:this.shape_68,p:{x:-177.5,y:128.4}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{x:-117.9,y:126.1}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:-75.1,y:126.8}},{t:this.shape_60,p:{x:-63.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:-24.8,y:126.1}},{t:this.shape_35,p:{x:-15.5,y:128.4}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_31,p:{x:50.1,y:128.4}},{t:this.shape_52},{t:this.shape_51,p:{x:73.3,y:126.8}},{t:this.shape_50},{t:this.shape_24,p:{x:97,y:128.6}},{t:this.shape_34,p:{x:108.7,y:126.8}},{t:this.shape_32,p:{x:117.9,y:126.1}},{t:this.shape_36,p:{x:126.9,y:128.6}},{t:this.shape_23,p:{x:139.2,y:128.4}},{t:this.shape_49}]},9).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-135.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-59.6}},{t:this.shape_9,p:{x:-45}},{t:this.shape_8,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_6,p:{x:9.8}},{t:this.shape_5},{t:this.shape_4,p:{x:42.5,y:-61.6}},{t:this.shape_3,p:{x:57.6,y:-61.6}},{t:this.shape_2},{t:this.shape_1,p:{x:89.5,y:-61.5}},{t:this.shape,p:{x:103.7,y:-61.6}},{t:this.shape_37},{t:this.shape_115},{t:this.shape_114},{t:this.shape_77,p:{x:-186.4,y:1.8}},{t:this.shape_33},{t:this.shape_93,p:{x:-164.6,y:1.1}},{t:this.shape_111},{t:this.shape_30},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_22},{t:this.shape_29,p:{x:64.1}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_17},{t:this.shape_96},{t:this.shape_75,p:{x:-188.5}},{t:this.shape_94},{t:this.shape_89,p:{x:-166.1}},{t:this.shape_92,p:{x:-156.8,y:65.9}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_83,p:{x:-110.6,y:63.6}},{t:this.shape_76,p:{x:-101.9}},{t:this.shape_87},{t:this.shape_21,p:{x:-66.8,y:66.1}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124,p:{x:-1.4}},{t:this.shape_123},{t:this.shape_122,p:{x:19.9}},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-225.7,y:128.4}},{t:this.shape_70},{t:this.shape_69,p:{x:-190.2,y:128.5}},{t:this.shape_68,p:{x:-177.5,y:128.4}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{x:-117.9,y:126.1}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:-75.1,y:126.8}},{t:this.shape_60,p:{x:-63.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:-24.8,y:126.1}},{t:this.shape_35,p:{x:-15.5,y:128.4}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_31,p:{x:50.1,y:128.4}},{t:this.shape_52},{t:this.shape_51,p:{x:73.3,y:126.8}},{t:this.shape_50},{t:this.shape_24,p:{x:97,y:128.6}},{t:this.shape_34,p:{x:108.7,y:126.8}},{t:this.shape_32,p:{x:117.9,y:126.1}},{t:this.shape_36,p:{x:126.9,y:128.6}},{t:this.shape_23,p:{x:139.2,y:128.4}},{t:this.shape_49}]},14).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-135.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-59.6}},{t:this.shape_9,p:{x:-45}},{t:this.shape_8,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_6,p:{x:9.8}},{t:this.shape_5},{t:this.shape_4,p:{x:42.5,y:-61.6}},{t:this.shape_3,p:{x:57.6,y:-61.6}},{t:this.shape_2},{t:this.shape_1,p:{x:89.5,y:-61.5}},{t:this.shape,p:{x:103.7,y:-61.6}},{t:this.shape_37},{t:this.shape_115},{t:this.shape_114},{t:this.shape_77,p:{x:-186.4,y:1.8}},{t:this.shape_33},{t:this.shape_93,p:{x:-164.6,y:1.1}},{t:this.shape_111},{t:this.shape_30},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_22},{t:this.shape_29,p:{x:64.1}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_17},{t:this.shape_96},{t:this.shape_75,p:{x:-188.5}},{t:this.shape_94},{t:this.shape_89,p:{x:-166.1}},{t:this.shape_92,p:{x:-156.8,y:65.9}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_83,p:{x:-110.6,y:63.6}},{t:this.shape_76,p:{x:-101.9}},{t:this.shape_87},{t:this.shape_21,p:{x:-66.8,y:66.1}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_134},{t:this.shape_123},{t:this.shape_133},{t:this.shape_122,p:{x:46.9}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_124,p:{x:79.5}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-225.7,y:128.4}},{t:this.shape_70},{t:this.shape_69,p:{x:-190.2,y:128.5}},{t:this.shape_68,p:{x:-177.5,y:128.4}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{x:-117.9,y:126.1}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:-75.1,y:126.8}},{t:this.shape_60,p:{x:-63.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:-24.8,y:126.1}},{t:this.shape_35,p:{x:-15.5,y:128.4}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_31,p:{x:50.1,y:128.4}},{t:this.shape_52},{t:this.shape_51,p:{x:73.3,y:126.8}},{t:this.shape_50},{t:this.shape_24,p:{x:97,y:128.6}},{t:this.shape_34,p:{x:108.7,y:126.8}},{t:this.shape_32,p:{x:117.9,y:126.1}},{t:this.shape_36,p:{x:126.9,y:128.6}},{t:this.shape_23,p:{x:139.2,y:128.4}},{t:this.shape_49}]},4).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-135.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-59.6}},{t:this.shape_9,p:{x:-45}},{t:this.shape_8,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_6,p:{x:9.8}},{t:this.shape_5},{t:this.shape_4,p:{x:42.5,y:-61.6}},{t:this.shape_3,p:{x:57.6,y:-61.6}},{t:this.shape_2},{t:this.shape_1,p:{x:89.5,y:-61.5}},{t:this.shape,p:{x:103.7,y:-61.6}},{t:this.shape_37},{t:this.shape_36,p:{x:-210.1,y:3.6}},{t:this.shape_92,p:{x:-197.8,y:3.4}},{t:this.shape_61,p:{x:-186.4,y:1.8}},{t:this.shape_33},{t:this.shape_83,p:{x:-164.6,y:1.1}},{t:this.shape_71,p:{x:-155.3,y:3.4}},{t:this.shape_30},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_24,p:{x:16,y:3.6}},{t:this.shape_68,p:{x:28.4,y:3.4}},{t:this.shape_22},{t:this.shape_29,p:{x:64.1}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_17},{t:this.shape_96},{t:this.shape_69,p:{x:-188.5,y:66}},{t:this.shape_94},{t:this.shape_64,p:{x:-166.1,y:63.6}},{t:this.shape_35,p:{x:-156.8,y:65.9}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_57,p:{x:-110.6,y:63.6}},{t:this.shape_51,p:{x:-101.9,y:64.3}},{t:this.shape_87},{t:this.shape_21,p:{x:-66.8,y:66.1}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_134},{t:this.shape_123},{t:this.shape_133},{t:this.shape_122,p:{x:46.9}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_124,p:{x:79.5}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_73},{t:this.shape_72},{t:this.shape_31,p:{x:-225.7,y:128.4}},{t:this.shape_70},{t:this.shape_60,p:{x:-190.2}},{t:this.shape_23,p:{x:-177.5,y:128.4}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_32,p:{x:-117.9,y:126.1}},{t:this.shape_34,p:{x:-109.3,y:126.8}},{t:this.shape_62},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_49}]},17).wait(45));

	// Layer 3
	this.instance = new lib.animsharkfin1();
	this.instance.parent = this;
	this.instance.setTransform(71.6,-69.1,2.875,2.875,15,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[71.5,-68.9,62.8,-69.8,53.4,-66.8,46.7,-64.6,49.9,-58.4,51,-56.3,48.1,-55.6,39.5,-53.4,30.2,-56.2,23.1,-58.3,18.1,-60.1,11.6,-62.5,6.9,-58.8,-0.4,-53.1,-8.2,-48.9,-16.9,-44.3,-26.5,-47,-35.9,-49.6,-44.5,-53.4,-52.9,-57.2,-61.9,-58.7,-71.9,-60.3,-79.9,-55.5,-87.3,-51.2,-96.4,-49.6,-105.9,-47.9,-115.2,-49.4,-124.5,-50.8,-132.8,-54.6,-141.6,-58.7,-151.4,-59.5,-161.3,-60.3,-170,-56.9,-173.4,-55.6,-174.5,-51.2,-168.9,-43.1,-181.9,-41.5,-191.5,-40.3,-199.9,-37.9,-206.3,-35.9,-210.4,-32.4]}},9).to({rotation:0,skewX:-15,skewY:165,guide:{path:[-210.4,-32.2,-211.4,-31.4,-212.2,-30.5]}},1).to({scaleX:2.87,scaleY:2.87,skewX:-14.8,skewY:165.2,guide:{path:[-212.1,-30.6,-212.7,-29.9,-213.2,-29.3,-217.7,-23.1,-208.3,-22.6,-202.1,-22.2,-198.8,-19,-196.7,-17,-200.3,-14.4,-203.9,-11.9,-213.1,-8.8,-231.5,-2.7,-238,5,-241.3,8.9,-237.2,11.4,-233.1,13.9,-221.7,15.1,-198.9,17.5,-192.7,3.6,-176,-10.7,-162.1,-1.3,-148.2,8.1,-145.9,11.7,-143.6,15.3,-136.3,11.8,-128.9,8.3,-124.4,1.9,-120,-4.6,-110.5,-5.5,-100.4,-6.5,-91.4,-4.4,-82.2,-2.3,-74.8,3,-67.4,8.3,-58.5,8.1,-53,8,-51.5,4,-50.1,0.1,-48.5,-3.7,-46.3,-9,-41.3,-10.3]}},14).to({scaleX:2.88,scaleY:2.88,skewX:-15,skewY:165,guide:{path:[-41.2,-10.3,-38.2,-11.1,-34.1,-10.4,-29.3,-9.5,-11.8,2.3,-3.2,6.4,8.6,0,20.4,-6.5,23.6,-6.5,25.2,-6.6,25.8,-6.5,26.4,-6.4,26,-6.1,36.9,-6.2,38.6,3.8,39.2,7,42.6,7.2,52.4,7.9,55.8,-0.8,59.1,-9.3,70,-9.2,80.4,-9.2,86.5,-2.1,90.3,2.3,97.2,4,102.1,5.2,104.6,0.6,108.7,-6.8,119,-7.6,129.1,-8.4,135.1,-1.1,142.3,7.8,135.4,14.8,132.2,18,136.7,18.7,143.8,19.9,148.5,21.3]}},17).to({x:143.2,y:55},2).to({rotation:15,skewX:0,skewY:0,guide:{path:[143.1,55.1,143.1,55.1,143.1,55.1]}},1).to({guide:{path:[143.2,55.2,148.3,59,150.5,61.8,152.3,64.1,146.4,63.4,140.4,62.8,126.8,59.3,125.8,59.6,127,62.9,128.2,66.2,131.6,72.4,138.3,84.9,117.6,88.1,96.9,91.3,106.7,79,103.6,71.7,93.7,69.1,89.3,67.9,86.5,71.6,81.6,78,73,81.5,64.5,84.9,54.6,84.2,43,83.3,42.7,72,42.5,65.2,33,65.7,23.3,66.2,17.6,73.9,12.4,80.8,3.1,84.2,-5.3,87.2,-14.2,88.9,-24.3,90.8,-32.2,86,-33.6,85.1,-35.1,82.9,-40.5,74.7,-50.2,71.9,-60.1,69.1,-68.4,75.2,-75.9,80.6,-84.7,84.4,-93.7,88.1,-103.2,86.5,-110.2,85.3,-112.7,78.3,-116,68.7,-124.9,68.5,-129.4,68.4,-131.3,72.1,-134.5,78.4,-140.7,80.9,-143.6,82,-147.5,79.2,-151.5,76.3,-156.4,69.5]}},14).to({guide:{path:[-156.3,69.5,-157,68.5,-157.7,67.5,-168.6,51.6,-189.9,70.6,-200.9,80.5,-203.1,89.9,-205.6,100.6,-216.6,94,-224.3,89.4,-233.9,89,-237.8,88.7,-241,89.4]}},2).to({rotation:0,skewX:-15,skewY:165,guide:{path:[-241,89.5,-241,89.5,-241,89.5]}},1).to({guide:{path:[-241,89.5,-246.2,90.6,-249.4,94.2,-256.4,101.9,-246.2,103.2,-240.3,104,-236.5,106.5,-230.8,110.2,-238.1,113,-240,113.7,-241.6,114.7]}},1).to({scaleX:2.87,scaleY:2.87,skewX:-14.8,skewY:165.2,guide:{path:[-241.6,114.7,-246.6,118,-248.6,124.6,-251.6,134.7,-240.6,137.7,-230.4,140.5,-222.5,134.3,-220.6,132.8,-220,130.7,-218.3,121.3,-208.4,124.9,-203.2,126.7,-198.3,129.6,-188.3,135.4,-183.9,127.4,-179.9,120.1,-171.8,115,-164.1,110.3,-154.5,109.3,-144.5,108.2,-140.9,115.2]}},6).to({scaleX:2.88,scaleY:2.88,skewX:-15,skewY:165,guide:{path:[-140.9,115.2,-140.2,116.4,-139.8,117.8,-137.6,124.6,-130,125.7,-119.3,127.3,-114,118.1,-114,118.1,-114,118.1]}},6).to({scaleX:2.87,scaleY:2.87,skewX:-14.8,skewY:165.2,guide:{path:[-114.1,118.1,-109.5,110.1,-101.6,107.3,-94.9,105,-88.9,109.2,-81.8,114.2,-74.8,119.2,-67.2,124.4,-57.9,121,-48.9,117.7,-41.8,112,-34.1,105.6,-24.2,108.9,-21.8,109.7,-20,112.6,-16.9,117.5,-11,121.2,-0.1,123.4,3.7,113.4,6.9,104.7,16.5,103.5,26.9,102.2,31.8,110.8,36.1,118.4,45.1,119.9,53.3,121.2,61,117.9,69.5,114.4,79.3,115.4,88.9,116.5,97.9,118.8,107.8,121.4,119.7,123,128.8,124.2,154.9,125.3]}},26).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.1,-79.6,20.3,22.4);


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
		var bgm = createjs.Sound.play('bgmComS',{loop:-1});
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
		
		 window.open ("compSen_Scene2.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("compSen_Scene0.html","_self");
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
(lib.compSen_Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1_repeat:95});

	// timeline functions:
	this.frame_113 = function() {
		this.gotoAndPlay("scene1_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(113).call(this.frame_113).wait(1));

	// text
	this.instance = new lib.sentence1menu();
	this.instance.parent = this;
	this.instance.setTransform(329,153.6,1.126,1.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAlaAXrMhKzAAAMAAAgvVMBKzAAAg");
	this.shape.setTransform(276.6,194.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("EglZAXrMAAAgvVMBKzAAAMAAAAvVg");
	this.shape_1.setTransform(276.6,194.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(114));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'B49826ACB1AA6A4E8495FCDB825A9458',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/acompletesentencecontains.mp3", id:"acompletesentencecontains"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/bgmComS.mp3", id:"bgmComS"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/OrganBlip.mp3", id:"OrganBlip"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"}
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
an.compositions['B49826ACB1AA6A4E8495FCDB825A9458'] = {
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