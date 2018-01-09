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


(lib.bwishes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgDADgEQAEgDADAAQAEAAAEADQADAEAAADQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape.setTransform(165,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_1.setTransform(158,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGANQAEAIAAAQIAAAIIAAAIIACATQACAMAAAGQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_2.setTransform(148.4,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAmQgMgNgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAATgKANQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAALQAAANAHAIQAGAFAIAAQAIAAAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_3.setTransform(138.7,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJBAIABggIAAggIABgfIAAggQAAgJAIAAQAJAAAAAJIgBAgIAAAfIgCArIAAAVQgBAJgHAAQgIAAAAgJg");
	this.shape_4.setTransform(131.7,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAcAtIgGgHIgPAIIgJABQgVAAgJgLQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCALIAAASQAAALABAGIAGAQIACAEIAAABQAAAEgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKgBQAIAAAGgDIAJgHQgDgWAAgMIAAgHIACgKIgGgDIgEAAQgMAAgKALg");
	this.shape_5.setTransform(124.6,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEABQADAAAEADQACACAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgHQADgBAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAHAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_6.setTransform(109.9,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMACgQQACgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQABAKADAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgCAhIAAASIAAATIABAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape_7.setTransform(101.2,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_8.setTransform(86.3,2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJApIgOgkIgPgnIgBgEQAAgEADgDQADgCADAAQAGAAABAFIAXA9QAGgOAKgaIAHgUQACgGAFAAQAEAAADADQADADAAADQAAADgOAjIgTAoQAAAIgHAAQgGAAgDgHg");
	this.shape_9.setTransform(77,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAcAtIgGgHIgPAIIgJABQgVAAgJgLQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCALIAAASQAAALABAGIAGAQIACAEIAAABQAAAEgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKgBQAIAAAGgDIAJgHQgDgWAAgMIAAgHIACgKIgGgDIgEAAQgMAAgKALg");
	this.shape_10.setTransform(67.9,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_11.setTransform(58.6,2.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJBAIABggIABggIAAgfIABggQAAgJAHAAQAJAAAAAJIAAAgIgBAfIgBArIgBAVQgBAJgGAAQgJAAAAgJg");
	this.shape_12.setTransform(51.1,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgeA8QgNgNAAgTQAAgYANgNQAMgOATAAQAKABAGADIAIAFQABgkACgNQABgIAHAAQAIAAAAAIQAAANgEApIgBAZQAAAeADAPIAAACQAAADgCADQgDACgDAAQgFAAgDgIQgGAEgHADQgHACgGAAQgSAAgMgMgAgUABQgHAJAAARQAAAMAIAIQAIAJALgBQAGAAAFgCIAKgIIADgCIgBgQIAAgJIABgLQgEgHgFgCQgGgFgIAAQgNABgIAHg");
	this.shape_13.setTransform(37.8,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgJBAIABggIABggIAAgfIABggQgBgJAIAAQAJAAAAAJIAAAgIgBAfIgCArIAAAVQgBAJgHAAQgIAAAAgJg");
	this.shape_14.setTransform(30.2,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAUAqQgLAGgOAAQgLAAgIgFQgIgGgCgLQgDgXAAgRQAAgMACgQQACgHAHAAQAEAAADACQACACAAAEIgBANIgBAOIABAYQAAAKACAHIAGACIAFABQALAAANgEIAAgSIAAgQQAAgTACgOQABgIAHAAQAEAAACADQADACAAAEIgCAhIAAASIAAATIABAGIAAAGQAAADgCADQgDACgEAAQgGAAgCgIg");
	this.shape_15.setTransform(23,3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgZAmQgMgNgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAATgKANQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAALQAAANAHAIQAGAFAIAAQAIAAAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_16.setTransform(13.5,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAFAaIgDgVIgCgTIgHAQIgOAkQAAAEgDACQgDAFgFAAQgHAAgGgaQgDgOgDgWIgCgNIgCgOQAAgDADgDQACgCAEAAQAGAAACAHIACANIACANIAEAmQAKgaALgjQADgKAGAAQAHAAADALIAFAgIAGAhIAHgYIALgvQACgFAGAAQAEAAACADQADACAAAEIgBAEQgHAcgLAjQgCAIgGAJQgEAEgEAAQgKAAgGgXg");
	this.shape_17.setTransform(2.8,3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJBAIABggIABggIAAgfIABggQgBgJAIAAQAJAAAAAJIAAAgIgBAfIgCArIAAAVQgBAJgHAAQgIAAAAgJg");
	this.shape_18.setTransform(-11.2,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAcAtIgGgHIgPAIIgJABQgVAAgJgLQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCALIAAASQAAALABAGIAGAQIACAEIAAABQAAAEgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKgBQAIAAAGgDIAJgHQgDgWAAgMIAAgHIACgKIgGgDIgEAAQgMAAgKALg");
	this.shape_19.setTransform(-18.3,3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_20.setTransform(-27.7,2.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEABQADAAAEADQACACAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgHQADgBAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAHAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_21.setTransform(-37.4,2.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgLQAAgDADgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgCADgEAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_22.setTransform(-51.2,1.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAcAtIgGgHIgPAIIgJABQgVAAgJgLQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCALIAAASQAAALABAGIAGAQIACAEIAAABQAAAEgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKgBQAIAAAGgDIAJgHQgDgWAAgMIAAgHIACgKIgGgDIgEAAQgMAAgKALg");
	this.shape_23.setTransform(-60,3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgCAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAACAIIABAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_24.setTransform(-69.7,0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIABgKIgDgyIgTgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgCADgEAAIgFAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_25.setTransform(-79.3,1.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgCAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAACAIIABAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_26.setTransform(-94,0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEABQADAAAEADQACACAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgHQADgBAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAHAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_27.setTransform(-103.9,2.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgHBAQgDgDAAgEIAAgQIgBgPIABgVIABgUQAAgDACgDQADgCAEgBQADABACACQACADAAADIAAAUIgCAVIABAPIAAAQQAAAEgDADQgCACgCAAQgFAAgBgCgAgFgwQgDgDAAgEQAAgEADgDQAEgDACAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgCAAgEgDg");
	this.shape_28.setTransform(-110.4,0.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AAGAaIgEgVIgCgTIgHAQIgNAkQgBAEgDACQgCAFgHAAQgGAAgGgaQgEgOgDgWIgCgNIgBgOQAAgDADgDQADgCADAAQAHAAACAHIABANIABANIAGAmQAJgaALgjQADgKAGAAQAHAAACALIAGAgIAGAhIAHgYIALgvQACgFAFAAQAFAAACADQADACAAAEIgBAEQgHAcgLAjQgDAIgFAJQgDAEgGAAQgJAAgFgXg");
	this.shape_29.setTransform(-119.2,3.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_30.setTransform(-135.7,0.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009900").s().p("AgEApQgDgCAAgEIAAgEIgBgGQAAgDADgCQADgDACAAQAKAAAAASQAAAEgCACQgDADgEAAQgDAAgCgDgAgGgVQgCgDAAgEIgBgDIAAgEQAAgEACgCQADgCAEAAQAJAAAAAPQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_31.setTransform(-92.4,-25.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009900").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgCAEAAQADAAAEADQACACAHACIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgHQADgBAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFABQAUAEAJAHQAPAHAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_32.setTransform(-99.6,-24.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009900").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAJgKAHQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_33.setTransform(-108.4,-24.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009900").s().p("AAYBDIgEgVIgBgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgFAAQgEAAgCgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQAAgDADgDQACgCAEAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAIgFQAIgFAJAAQAPAAAFAKQAEAGABAPIAAARIACASIADASIAAADQAAADgDADQgCACgEAAQgGAAgCgGg");
	this.shape_34.setTransform(-118.6,-26.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009900").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgCAEAAQADAAAEADQACACAHACIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgHQADgBAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFABQAUAEAJAHQAPAHAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_35.setTransform(-128.5,-24.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#009900").s().p("AgHBAQgDgDAAgEIgBgQIAAgPIABgVIABgUQAAgDADgDQACgCADgBQADABADACQACADAAADIgBAUIgBAVIABAPIAAAQQAAAEgCADQgCACgEAAQgDAAgCgCgAgFgwQgDgDAAgEQAAgEADgDQAEgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgEgDg");
	this.shape_36.setTransform(-135,-26.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009900").s().p("AAFAaIgDgVIgCgTIgHAQIgOAkQAAAEgDACQgDAFgGAAQgGAAgGgaQgDgOgDgWIgCgNIgCgOQAAgDADgDQADgCADAAQAGAAACAHIACANIACANIAEAmQAKgaALgjQADgKAGAAQAHAAADALIAFAgIAGAhIAHgYIALgvQABgFAHAAQADAAADADQADACAAAEIgBAEQgHAcgLAjQgCAIgGAJQgEAEgFAAQgJAAgGgXg");
	this.shape_37.setTransform(-143.8,-24);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#009900").s().p("AgWBXQgCgCAAgDQAAgEAEgDIAJgHQATgVAAgsQAAgRgEgSQgGgUgJgMIgIgIQgGgGABgDQAAgDACgCQACgDADAAQADAAADADQAQAMALAbQAJAZAAAWQABBCglAVQgDACgDAAQgDAAgCgCg");
	this.shape_38.setTransform(-158.5,-24.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009900").s().p("AgdBDIgCAAQgGAAgCgGIgBgLQAAgUALgNQAFgFAWgPQAMgIAEgFQAIgJAAgLQAAgGgIgEQgGgEgGAAQgHAAgIAFIgMAKQgEADgCAAQgJAAAAgIQAAgEADgDQAKgJAIgFQALgGAKAAQAOAAALAIQANAJAAANQAAAJgDAIQgCAHgGAHQgGAHgQAJQgPALgGAFQgJAKAAAPIASgCIAagBQAGAAAGACQAIADAAAGQAAADgCADQgDACgDAAIgGgBIgGgBIgOAAIgMABIgLABIgKABIgDgBg");
	this.shape_39.setTransform(-167.5,-26.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgeA8QgNgNAAgTQAAgYANgNQAMgOATAAQAKABAGADIAIAFQABgkACgNQABgIAHAAQAIAAAAAIQAAANgEApIgBAZQAAAeADAPIAAACQAAADgCADQgDACgDAAQgFAAgDgIQgGAEgHADQgHACgGAAQgSAAgMgMgAgUABQgHAJAAARQAAAMAIAIQAIAJALgBQAGAAAFgCIAKgIIADgCIgBgQIAAgJIABgLQgEgHgFgCQgGgFgIAAQgNABgIAHg");
	this.shape_40.setTransform(37.8,0.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAUAqQgLAGgOAAQgLAAgIgFQgIgGgCgLQgDgXAAgRQAAgMACgQQACgHAHAAQAEAAADACQACACAAAEIgBANIgBAOIABAYQAAAKACAHIAGACIAFABQALAAANgEIAAgSIAAgQQAAgTACgOQABgIAHAAQAEAAACADQADACAAAEIgCAhIAAASIAAATIABAGIAAAGQAAADgCADQgDACgEAAQgGAAgCgIg");
	this.shape_41.setTransform(23,3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAmQgMgNgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAATgKANQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAALQAAANAHAIQAGAFAIAAQAIAAAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_42.setTransform(13.5,3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAFAaIgDgVIgCgTIgHAQIgOAkQAAAEgDACQgDAFgFAAQgHAAgGgaQgDgOgDgWIgCgNIgCgOQAAgDADgDQACgCAEAAQAGAAACAHIACANIACANIAEAmQAKgaALgjQADgKAGAAQAHAAADALIAFAgIAGAhIAHgYIALgvQACgFAGAAQAEAAACADQADACAAAEIgBAEQgHAcgLAjQgCAIgGAJQgEAEgEAAQgKAAgGgXg");
	this.shape_43.setTransform(2.8,3.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgJBAIABggIABggIAAgfIABggQgBgJAIAAQAJAAAAAJIAAAgIgBAfIgCArIAAAVQgBAJgHAAQgIAAAAgJg");
	this.shape_44.setTransform(-11.2,0.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgCAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAACAIIABAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_45.setTransform(-94,0.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEABQADAAAEADQACACAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgHQADgBAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAHAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_46.setTransform(-103.9,2.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHBAQgDgDAAgEIAAgQIgBgPIABgVIABgUQAAgDACgDQADgCAEgBQADABACACQACADAAADIAAAUIgCAVIABAPIAAAQQAAAEgDADQgCACgCAAQgFAAgBgCgAgFgwQgDgDAAgEQAAgEADgDQAEgDACAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgCAAgEgDg");
	this.shape_47.setTransform(-110.4,0.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAGAaIgEgVIgCgTIgHAQIgNAkQgBAEgDACQgCAFgHAAQgGAAgGgaQgEgOgDgWIgCgNIgBgOQAAgDADgDQADgCADAAQAHAAACAHIABANIABANIAGAmQAJgaALgjQADgKAGAAQAHAAACALIAGAgIAGAhIAHgYIALgvQACgFAFAAQAFAAACADQADACAAAEIgBAEQgHAcgLAjQgDAIgFAJQgDAEgGAAQgJAAgFgXg");
	this.shape_48.setTransform(-119.2,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-11.2}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_18,p:{x:30.2}},{t:this.shape_40},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-41.6,349.8,56.2);


(lib.astatementscontrary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgDADgEQADgDAEAAQAEAAADADQAEAEAAADQAAAFgEADQgDADgEAAQgEAAgDgDg");
	this.shape.setTransform(13.6,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAQIgBAIIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAADgDADQgCACgEAAQgIAAgBgIg");
	this.shape_1.setTransform(6.8,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_2.setTransform(-2.8,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgDgCg");
	this.shape_3.setTransform(-12.2,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNBLQgDgCAAgEIABgCQABgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAPgBIAJAAIABgNQACgUAIgJQAIgLATAAQANAAAAAIQAAAJgLAAQgVAAgDAdIAAAGIATgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIABAQIAAAQQAAARgCAJQAAAHgHAAQgEAAgCgCg");
	this.shape_4.setTransform(-21.1,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAmQgMgNgBgUQAAgTAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAAMQAAANAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_5.setTransform(-30.4,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAmQgMgNgBgUQAAgTAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAAMQAAANAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_6.setTransform(-45.2,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEAAQADAAAEAFQACACAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_7.setTransform(-54.4,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_8.setTransform(-68,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIA/QgCgCAAgEIgBgQIAAgQIABgUIABgTQAAgEACgDQADgCADAAQADAAADACQACADAAAEIgBATIAAAUIAAAQIAAAQQAAAEgCACQgCADgEAAQgEAAgCgDgAgFgwQgDgDAAgEQAAgEADgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgDAAgDgDg");
	this.shape_9.setTransform(-74.9,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAcAtIgGgGIgPAGQgGADgDAAQgVAAgJgMQgJgLAAgWQAAgVAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKAAQAIAAAGgCIAJgHQgDgXAAgLIAAgJIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_10.setTransform(-82.2,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgEAFgIAPQAAAhgDAGQgDAGgEAAQgEAAgDgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQABgDACgDQADgCADAAQAIAAABAIIABAPIgBATIAAAUIAAAHQAHgJAJgFQAHgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgCADQgDACgEAAQgGAAgCgGg");
	this.shape_11.setTransform(-91.9,14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXBFQgCgDAAgDQAAgJATgqIggg8IgEgGQgCgEAAgDQAAgEADgCQACgDAEAAQAEAAACADQAPAVAQAmIANgeIAOgbQADgFAEAAQAEAAADACQACADAAADIgBAFIgeBBQgMAYgFAQIgFARQgDAGgFAAQgEAAgDgCg");
	this.shape_12.setTransform(-107.5,18.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_13.setTransform(-118.8,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_14.setTransform(136.3,-10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAHQAGAGAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_15.setTransform(126.9,-10.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJBAIABggIABggIAAgfIABggQAAgJAHAAQAJAAAAAJIAAAgIgBAfIgBArIgBAVQgBAJgGAAQgJAAAAgJg");
	this.shape_16.setTransform(119.9,-13.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAHQAGAGAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_17.setTransform(112.6,-10.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAmQgNgLAAgTQAAgRAMgTQANgVAQABQAJAAAKADQANAGAAAIQAAACgCADQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBIgDgDQgFgEgMAAQgIAAgJAQQgIAPAAAJQAAAMAIAHQAIAGAKAAQAFAAAGgDIAKgFIAEgBQADgBADADQACADAAADQAAAHgOAFQgLAFgIABQgRAAgMgMg");
	this.shape_18.setTransform(103.4,-10.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgKAAQgCAAgDgCg");
	this.shape_19.setTransform(89.1,-12.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAHQAGAGAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_20.setTransform(80,-10.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_21.setTransform(71,-10.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgYANgNQAMgOATABQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAdADAPIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAGgHABQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAJQAIAHALABQAGAAAFgEIAKgGIADgEIgBgOIAAgLIABgKQgEgHgFgDQgGgDgIAAQgNAAgIAIg");
	this.shape_22.setTransform(55.3,-13);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgJBAIABggIAAggIABgfIAAggQAAgJAIAAQAJAAAAAJIgBAgIAAAfIgBArIgBAVQgBAJgGAAQgJAAAAgJg");
	this.shape_23.setTransform(47.7,-13.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape_24.setTransform(40.5,-10.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAHQAGAGAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_25.setTransform(31,-10.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAGAaIgEgVIgCgTIgHAQIgNAkQgBAEgDACQgCAFgHAAQgGAAgGgaQgEgOgDgWIgCgNIgBgOQAAgDADgDQADgCADAAQAHAAACAHIABANIABANIAGAmQAJgaALgjQADgKAGAAQAHAAACALIAGAgIAGAhIAHgYIALgvQACgFAFAAQAFAAACADQADACAAAEIgBAEQgHAcgLAjQgDAIgFAJQgDAEgGAAQgJAAgFgXg");
	this.shape_26.setTransform(20.3,-10.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_27.setTransform(3.8,-12.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgKATQgCgCAAgDQAAgDAFgLIAHgQQACgEADAAQAEAAACACQACADAAADQAAACgMAbQgBAEgFAAQgDAAgCgCg");
	this.shape_28.setTransform(-8.5,-5.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_29.setTransform(-16.2,-10.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQABgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgCAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQgBgDADgDQACgCAFAAQAGAAACAIIABAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_30.setTransform(-26.4,-13);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgCQAJgCAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_31.setTransform(-36.3,-11);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_32.setTransform(-50.6,-10.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_33.setTransform(-59.7,-10.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_34.setTransform(-69,-10.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AAFAaIgDgVIgCgTIgHAQIgOAkQgBAEgCACQgDAFgFAAQgHAAgGgaQgDgOgDgWIgDgNIgBgOQAAgDADgDQACgCAEAAQAGAAACAHIACANIABANIAFAmQALgaAKgjQADgKAGAAQAHAAACALIAGAgIAHAhIAGgYIALgvQABgFAHAAQAEAAACADQADACAAAEIgBAEQgHAcgLAjQgCAIgGAJQgDAEgFAAQgKAAgGgXg");
	this.shape_35.setTransform(-80.2,-10.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_36.setTransform(-96.7,-12.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgOBLQgCgCAAgEIAAgCQACgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAPgBIAJAAIABgNQACgUAIgJQAIgLAUAAQAMAAAAAIQAAAJgLAAQgVAAgDAdIgBAGIAUgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIAAAQIABAQQAAARgCAJQAAAHgHAAQgEAAgDgCg");
	this.shape_37.setTransform(-111.7,-12.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_38.setTransform(-121,-12.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009900").s().p("AgEApQgDgCAAgEIAAgFIgBgEQAAgEADgDQADgCACAAQAKAAAAASQAAAEgCACQgDADgEAAQgDAAgCgDgAgGgWQgCgCAAgEIgBgDIAAgDQAAgEACgDQADgCAEAAQAJAAAAAPQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_39.setTransform(107.5,-38.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009900").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQAAgDACgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_40.setTransform(100.7,-39.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009900").s().p("AgYAmQgNgLAAgTQAAgRAMgSQAOgWAPABQAJAAAKADQANAGAAAHQAAADgBADQgDADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgEgDQgGgEgLAAQgIAAgJAQQgIAPAAAJQAAAMAIAHQAIAGAKAAQAFAAAGgDIALgFIADgBQADAAADACQACADAAADQAAAHgNAFQgMAFgIABQgRAAgMgMg");
	this.shape_41.setTransform(91.9,-37.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#009900").s().p("AAcAtIgGgHIgPAHIgJACQgVABgJgMQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_42.setTransform(82.6,-37.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009900").s().p("AgNBLQgDgCAAgEIABgCQABgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAQgBIAIAAIABgNQADgUAHgJQAIgLATAAQANAAAAAIQAAAJgLAAQgWAAgCAdIAAAGIATgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIABAQIAAAQQAAARgCAJQgBAHgGAAQgEAAgCgCg");
	this.shape_43.setTransform(73.3,-39.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#009900").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAATgKAOQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAIQAGAFAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_44.setTransform(58.6,-37.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009900").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_45.setTransform(49.8,-39.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#009900").s().p("AgXBFQgCgDAAgDQAAgJATgqIggg8IgEgGQgCgEAAgDQAAgEADgCQACgDAEAAQAEAAACADQAPAVAQAmIANgeIAOgbQADgFAEAAQAEAAADACQACADAAADIgBAFIgeBBQgMAYgFAQIgFARQgDAGgFAAQgEAAgDgCg");
	this.shape_46.setTransform(35.2,-35.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009900").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_47.setTransform(26.7,-37.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#009900").s().p("AAcAtIgGgHIgPAHIgJACQgVABgJgMQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_48.setTransform(17.6,-37.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#009900").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_49.setTransform(8.9,-37.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#009900").s().p("AgEA+QgDgCAAgEIAAgKIABgKIgDgyIgTgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgLQAAgDADgDQADgCADAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgCADgEAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgCgCg");
	this.shape_50.setTransform(0,-39.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#009900").s().p("AAVArIgCgTIgBgUIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAHQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgHIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAHAAARIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_51.setTransform(-8.7,-37.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#009900").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAATgKAOQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAIQAGAFAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_52.setTransform(-18.4,-37.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#009900").s().p("AgYAmQgNgLAAgTQAAgRAMgSQAOgWAPABQAIAAALADQAOAGAAAHQAAADgCADQgDADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgEgDQgGgEgLAAQgIAAgJAQQgIAPAAAJQAAAMAIAHQAHAGALAAQAFAAAGgDIALgFIADgBQADAAADACQACADAAADQAAAHgNAFQgMAFgIABQgRAAgMgMg");
	this.shape_53.setTransform(-27.6,-37.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#009900").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgGQADgBAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgDgBgHIgVAGQgNAGAAAIIAFACQAUADAJAGQAPAJAAARQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_54.setTransform(-42.3,-38.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#009900").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_55.setTransform(-50.7,-39.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#009900").s().p("AAVArIgCgTIgBgUIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAHQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgHIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAHAAARIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_56.setTransform(-59.4,-37.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#009900").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_57.setTransform(-69,-37.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#009900").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_58.setTransform(-81,-37.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#009900").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_59.setTransform(-92.8,-37.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#009900").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgDgCg");
	this.shape_60.setTransform(-102.2,-39.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#009900").s().p("AAcAtIgGgHIgPAHIgJACQgVABgJgMQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_61.setTransform(-111,-37.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#009900").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_62.setTransform(-119.9,-39.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#009900").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgGQADgBAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgDgBgHIgVAGQgNAGAAAIIAFACQAUADAJAGQAPAJAAARQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_63.setTransform(-128.7,-38.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#009900").s().p("AgWBXQgCgCgBgCQAAgEAGgFIAIgGQATgVAAgtQAAgQgFgSQgEgVgKgKIgIgIQgFgHgBgCQABgEACgCQACgDADABQADgBADADQAQAMALAbQAKAZAAAXQgBBCgjAUQgEADgDAAQgDAAgCgDg");
	this.shape_64.setTransform(-141.3,-38.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#009900").s().p("AACBEIgQAAIgJgBQgEgBAAgFQAAgJANAAIAFAAIADABIAAgNIgBgMIACgiIACgiQgMAJgDAAQgEAAgCgCQgDgDAAgDQAAgEAHgGIAOgLQAHgHAHgBQAGABAAAGIgBAHIAAAFIAAAJIAAAJIgCAeQgCASAAALIABAMIAAAMIAKAAQADAAADACQACADAAADQAAAEgCACQgDACgDAAg");
	this.shape_65.setTransform(-148.8,-40.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_66.setTransform(-50.6,-10.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_67.setTransform(-59.7,-10.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_68.setTransform(-69,-10.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAFAaIgDgVIgCgTIgHAQIgOAkQgBAEgCACQgDAFgFAAQgHAAgGgaQgDgOgDgWIgDgNIgBgOQAAgDADgDQACgCAEAAQAGAAACAHIACANIABANIAFAmQALgaAKgjQADgKAGAAQAHAAACALIAGAgIAHAhIAGgYIALgvQABgFAHAAQAEAAACADQADACAAAEIgBAEQgHAcgLAjQgCAIgGAJQgDAEgFAAQgKAAgGgXg");
	this.shape_69.setTransform(-80.2,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-55.2,303,83.3);


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


(lib.Barb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F9F9").s().p("AAAABIAAgCIABACIgBABIAAgBg");
	this.shape.setTransform(152.5,147.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFAFA").s().p("AADgBIAEAAIAAABIgNACg");
	this.shape_1.setTransform(156,148.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("AgBAmIAAgBIAAABgAAAghIACgEIgCAHIAAgDg");
	this.shape_2.setTransform(146.5,40.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("AgHABQAAgBAAAAQABAAAAAAQAAAAABAAQAAgBABAAIAHgBIAFAAIgMAFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_3.setTransform(185.2,192.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCFCFC").s().p("AgCADQACgDAAgEIADAJg");
	this.shape_4.setTransform(185.1,191.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("Ag6BrIgDAAIgDgCIgCgCQgNgHgGgPIAAACQgeg7ASg3IAEgSQADgNAKgHIACgBIACgDIABAAIACgCIATACIAAgEIAJAFIAIABQAJABAHAHQAQASACAZQADA3gKA2IgBADIAAACQgCAEgEADQgLAJgNAAQgIAAgJgDgAABBOQgDgKACgMQAEgZgBgaIgDgrIAAgIIgBgIIgJgXIAngRIAJgFIALgEQAMgDAKADIAFgGQAIAKAGALIAAABIADAFQAPAhgFAkQALA7gyAiIgEACIgCAAQgDAHgGAGQgKAFgJAAIgEgBQgFAAgFgDIgJAJIgQAFg");
	this.shape_5.setTransform(153.6,138.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#030303").s().p("AgIAGQADADAIgDIACgGIABgHIADAMIgPADg");
	this.shape_6.setTransform(179.3,133.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6FFFF").s().p("AAhhLIABA6IgFgNQAGAXgPARIg1BCg");
	this.shape_7.setTransform(164.8,72.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33CCFF").s().p("AgdC7QAQADAEgRQAHgagYgFQgXAFADAaQABAJAIADIABAAIABAGIgJgHQgGgKgJgJQgOgMgNgNQgRgYgXgTIgLgKIgIgKIgKgUIgBgCIAAgDIgBgBIgFgBIgCAAIgBAAIgBgCIANgfIgDgDIAAgFQgBgIADgGIADgEIABgCIAChLIAaAMIgBADQgCALAJAGQAKAIAOgCQAJgCAEgIQAMgegjgEQgNACgFAMIgRgKIACgLIgHgJQBBhJBfAIIAKAJIgCgGQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQALAPgLAYQgLAZgYANIAHAGIArg4IAAgXIAnAXIACgDIAAgEIgEgJIAOgKIASgYIAEAAIAJgBIAAABIADgBQAIgCAHABQAQADAGATQAKAkgbAdQgHAHgIAGIAEAAIgIADIgEADQAFgfghgDQgRADAAATQgBAIAEAGQAKAOASgCIADgBQgEAGgBAIIgHAHIgEAFQgRAZgPAbIgGALIgIALIAAABIAAAAIgDAPIAAAHQgDAEAAAEIAAAFIgBACIgBABIgBAIQgBADgCACIgEAKIgFATIACgNIgEAEQgRA4gjAwIgCACgAg1BiQAAAGACAEQANAVAbgIQAJgCABgJQADgegegHQgYACgBAXgAhuAtQgXAEABAYQABAHAFAEQAJAHANACQAUACAEgSQAGgggeAAIgGAAgAgdAPQgNAbAfAHQAdAIAAgfQAAgZgagBQgOABgHAOgAhegNQgEANAJAJQAOAQATgKQANgHgBgNQgDgYgbgBQgPABgFAQgAANhCQgRABgBASQAAAFACADQAJASAVAGQAPAEAHgMQAFgKgEgLQgJgWgYAAIgEAAgAAYhkQgCAaAbgDQAMgBADgMQAFgYgYgGQgUAAgBAUgAhIiOQgPACgGAPQgGARAPAKQALAHAPgBQAJgBAEgIQAJgYgUgLIgBgBQgFgFgGAAIgEAAgAgKigQgOABgFANQgEALAGAJQAKANAQgFQAKgDAIgLQADgFgBgHQgFgRgQAAIgIABgABpidQgEAbAcgCQAMAAADgMQAJgdgegDQgPACgDARg");
	this.shape_8.setTransform(184.8,70);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0B0B0B").s().p("AAMASQgGAAgFgDIgBAAIgBgCQgCgFgEgFIgLgNIgCgHQABACAEAAIABACIAAABQABAKAIAHQAMAKAOADIgGAAIgDAAg");
	this.shape_9.setTransform(184.6,28.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkE4IgHgCIAAgBQgJgDAAgJQgDgaAXgFQAYAFgHAaQgEAPgMAAIgFAAgAg5DoQgDgEABgGQABgXAYgCQAfAHgEAeQgCAJgJACQgHACgGAAQgRAAgJgPgAhuDZQgNgCgKgHQgFgEAAgHQgCgYAYgEQAkgDgHAjQgEAQgQAAIgDAAgAgSCtQgegHANgbQAHgOAOgCQAaACAAAZQAAAZgTAAIgLgCgAhgCFQgIgKAEgNQAEgQAQgBQAbABACAYQACAOgOAHQgHAEgGAAQgLAAgJgKgAAVBsQgVgGgJgSQgDgDABgFQABgSARgBQAbgCAJAYQAFALgGAKQgFAJgKAAIgGgBgAh7BFQgIgGACgLIAAgDIACgEQAFgLAOgDQAjAEgNAeQgDAIgJACIgGAAQgLAAgIgGgAARAXQACgUAUAAQAXAGgFAYQgCAMgMABIgGAAQgWAAACgXgABNAhQgEgGAAgIQABgTARgCQAhACgGAfIAAABQgCAKgJACIgCABIgGAAQgOAAgIgMgAhbAZQgOgKAGgQQAFgPAQgCQAJgBAGAGIAAABQAVALgKAXQgDAIgJABIgFAAQgMAAgKgGgAghgCQgHgJAFgLQAFgNAOgBQAXgEAFAUQACAHgEAFQgHAKgLADIgIACQgLAAgGgJgABjghQACgRAQgCQAdADgIAdQgDAMgMAAIgDAAQgaAAAFgZgAAXkYIAGgBQADAAADgDIgFAEIgEAAIgDAAgAAPkjQgGgCgGgEIgCgBIgBgCIgBgBIgCgCIgCgCIAFAAQAIgCAIgBIABAAIAJgBIAPgCIAAAAIADAAIgBACIAAABIgBABIAAAAIgBACIgBABIAAAAIgDAFQgGAKgIAAIgIgCg");
	this.shape_10.setTransform(185.4,57.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0033").s().p("AgfAMQgJgHgBgKIAAAAIgBgCQgDAAgCgCIAIgDIAAABIgBACIAAABIAEADIAMALQANAMAPABIAIAAIAFgEIABgCIAKgMIAFgGIACgDQABgEAAgEIgCgFIgDAAIgjAFIgBAAQgPADgOgBQANgDAPgBIA2gGIgKAUQgHANgMALIgYAGQgOgDgMgLg");
	this.shape_11.setTransform(187.3,27.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FBFBFB").s().p("AABgCIAIgBIgHADIgJAEIgBAAg");
	this.shape_12.setTransform(177.2,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#040404").s().p("AgQAJQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIABgBIALADIgBAAIgHAAgAgEAJQgDgDgHgBIARgFIAMgIQAJACgFAGQgGAJgPAAIgCAAg");
	this.shape_13.setTransform(187.8,21.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#020202").s().p("AgMgIIAbgHIAOAOIgcgGIgdAXg");
	this.shape_14.setTransform(181.3,15.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#070707").s().p("AgKAKQgEgEAAgGQAAgFAEgFQAFgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_15.setTransform(183,18.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#414141").s().p("AANAFQgKgFgKAAIgHgEQAMABALAEIAGAEIgCAAg");
	this.shape_16.setTransform(185.4,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFD0A0").s().p("AAdHWIgBgLIgBgZIgCgOQgEgPgHgPIAAgCQAAgNANgBQAOADAEAPIACAGIABACQAHAOgCAPQgBAFABAFQACAJAAAJQAAAJgCAIQgCAJgKAAQgNgBABgMgAA+HBIgCgEQgBgFAAgGIAAgOIAAgFIgBgMIgBgDIAAgBQgCgHABgGQABgFAEgFIAEgCIAEgBQAOADABAPIABAIQACAOgBAOIAAAOQAAANgNAAQgIAAgDgFgAjWG2QgFgCgBgEIAAgCQgEgKAAgKIgCgcIABgHQACgHAKAAQAKAAACAKIACAHQAEgYgDgaQgEgdAEgdIADgPIADgSIgBgHQgEgOgBgPQgBgJAEgJIACgEQADgIAJAAQAOADgBANIAAADQgCAJABAJQAFAFAAAIIAAASQAAAbgDAbIgBAaQgBAHgCAFQACAbgDAaIAAABIAAAAQgDAUgHASQgDAGgGACQgGADgGAAQgFAAgGgDgACZFnQgFgCgBgGQgCgPADgPQADgOgCgPQgEgZgMgXIgHgMQgGgNAAgMIAAgBQAAgDACgDIABgBIAFgCIAEgBQAOACADAPIADAHQANAbAIAcQACAHAAAIIAAAGQACARgCARIgCAMIgCAIQgCAKgJAAIgHgBgAjqEaQgDgCgCgEIgBgHIAAgLIgFg3QgBgPABgPIAAgCQACgSAHgQQADgHAGgFQAFgFAJgCQARgDACAPQAAAGgDAEQgEAEgGAAQgLAQgBAUQgCAdAGAdIABAIQABAPAAAOQAAAEgCACQgFAFgFAAQgEAAgFgEgAhJEFIgCgKQgBgHgFgFIgHgHQgJgIgHgKQgKgPAPgIIAEgBQAFABAFADQAFAEAEAGIADAEQAMAJAHAOIACACQAIARgIAQIgDADIgHACQgIAAgDgKgACMgzQgOgCACgOQABgGAFgDQAGgRAQgKQAUgMAXgBQALgCAKAEQAAgJgCgIQgDgNgIgLQgngDgiAVQgOAJgKgNQgCgCABgEIAAgBQgGgDgDgGQgJgUACgVQABgFAFgCIAGgCQAGACAEAEQAFAEAAAJQABAMAFALIALgFQAbgLAcgCQAKgCAKADIADABIAEACQAJAEAFAIQAIANAEAPQADAOgBAPIgBAFQAAAGgGAEQgGAFgHgDQgDADgFABIgFACQgSAEgSAFIgFADIgSARIgIAGIgCABIgDAAIgCAAgAAZigQgGgDABgHIAAgEQACgIAFgHQAEgFgBgHQgCgHACgEQADgGAJgBIAKAEQAFAFAAAJQAAAJgDAIQgDAKgGAJQgEAHgHAAQgEAAgFgCgAAnjtQgNgFgLgKQgUgTgGgbIgBAAIgBgKIgHgmQgDgPACgRIABgEIAEgJQAEgGAIgDIAEgCQAQACgEAPQgBAGgFAFIgBADIgBALQAFAYAEAYQAEAaATAQQAKAIAMABQAFgDAFAAIABAAIABAAQAFACAEAGQAEAHgFAHQgEAIgJAAIgFAAQgLAAgKgDgACulJQgJgFACgMQAEgOgDgPQgHgXABgYIAAgEIgCgaQgQgEAFgPIADgFIADgDQAEgDAFAAQAPACAEAPQAFARAAASQABAVADAVIABACIABAFQADALgBAMIgBAPQgCALgJAEIAAAAIgEABQgDAAgDgCg");
	this.shape_17.setTransform(177.4,57.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#494949").s().p("AgeANIAHABIADAAIgHABIgMABgAAcgLIAMgEIgQAMIAEgIg");
	this.shape_18.setTransform(189.9,9.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C4C4C").s().p("AgCAGIACgGIACgJIABACIgDARIgCgEg");
	this.shape_19.setTransform(201,7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC99").s().p("AlIOQIAFgXIgfAiIgBgJQgMARgLgLIgDAEIgPAAIAOgLIABgCQAJgRASgHIAFgBIABAAQAPgdASgZIABgCIAWg+IAQhEQABgIAEgFQABgkADgoIACggIAAgBIgKhSQgBgPAAgPQADg7ANg6QAGgXAKgVQAGgbAAgcIgTgtIAAADQgJgNgJgRQgYgtgQgyQgNgbgMgcQgZg7AFhDQABgOAGgNIAHgUIgCgDIAGgRQACgUAFgUQAFgTAMgJQAHgPALgNIAJgJIAMASQgFgDgFgBIgEABQgPAIAKAPQAHAKAJAIIAHAHQAFAFABAHIACAKQAEANAOgFIADgDQAIgQgIgRIgCgDQASARAQATIAYAZQARAZAMAbIAGADIAKA0IgDgGQgEgPgOgDQgNABAAANIAAACQAHAPAEAPIACAOIABAYIABALQgBAMANABQAKAAACgJQACgIAAgJIAAACIgWEiIAGAEQgGAmgBAqQgBAUgEATIgOBTQgLBFgVBEIgCAKIABADIgHAMIADAHIgZBoIgCAFIgFAMIABACIgfB0IgeAHIAOgbIgGgBIgTAdIgVABgAi1E+IAQgEIgDgNIgBAIIgCAGQgJADgDgCgAjCOOQgKgEgIgMQgHgNgDgPIgFgLQgEgFgBgHIgCgFIAAgBQgDgPAAgRIACgXIgBgHQABgGACgEIACgGIAHgQIAAgDIABgBIAFgRIACgFIADgEIAtjuIAFgFIAcjuQgGgYAIgYIAAgEIAHgiQAAhIgFhJQADAGAIAAQANAAAAgMIAAgOQABgOgCgOIgBgIQgBgPgOgDIgEABIgEACQgEAFgBAFIgGgsIANgRIAehBIABABIAag2QAAAMAGANIAHAMQAMAXAEAZQACAPgDAOQgDAPACAPQABAGAFACQAPAFADgOIACgIIACgNIAAABQAOAngNAoQgKAggDAgQgCAUgJASIgEAHIgCAOIgDAGIACAGQgIA0gMA1IgBAHIgBAFQgBAPgEAPIgJAcQgJAcgQAZIgHAJIABAAIAFABIADgFIAAAGIABABIABAAQAHAFACAJQADALgDAKIAAACIAAAEQAAAPgIANIgCAFIgUA4IgHARIAAABIgBAEIgBADIgBAIIgIAdIgFASQgEAOgBAPQgDAegIAcQgCAIgEAHQgDAHgBAIQgBAWgFAVQgBAJgEAIQAHASAAAUQgBAOADAOIADANIAAACIALAYQASAGAQAOQAHAGAEAIQAEAKgCAHQgBAFgCADIgDADQgEgYgVgOIAAAAIgDABIgBAAIAAABIgBACIAAABQAAADACACQAMAPAJASIABAAIgGADIgIADIAAgBIgBgCIgBgBIAAgCIAAgBIgBgCIgJgOIgBgCQgDgIgIgEIgCABIgCABIAAADIACAJIABACIAHAJIAAADIABACIADADIADAHIgOAFIgFABQABgUgKgQIgEgBIgCAAIgCABIAAADQgBAFABAFIABABIADADIABADQABADAAAEIABABIABACIgBADIABAEIgBAAQgGAAgGgDgAnBA1IAKgGIAWg+IADgBIAAACQABAEAFACQAMAGALgGQAGgCADgGQAIgSACgUQABAdgDAdQgCAYgJAYIgUgyIgJAFIAJAiIgBgmIASA6IgGAWgAiGgfIgBgPIAAADIABAMgAmLhEQgCgKgKAAQgKAAgCAGQgCgagFgaQgEgXgCgXQABAEADACQAKAJAJgKQACgCAAgEQAAgOgBgPIgBgIQgGgdACgdQABgUALgQQAGAAAEgEQADgEAAgGQgCgPgRADQgIACgGAFIAihYIAFgEQAchFAig8IAOgZIAAgBIACgCQAOgRALgRQADAAADgCIAAgBIBegKIAGgFIAAAFQgBAHAGADQANAGAHgLQAGgJADgKQADgIAAgJQAAgJgFgFQAgAMAjgLIgEALIAAABQgEgDgGgCIgGACQgFACgBAFQgCAVAJAUQADAGAGACIAAACQgBAEACACQAKANAOgJQAigVAmADQAIALADANQACAIAAAJQgKgEgLACQgWABgUAMQgQAKgGARQgFADgBAGQgCAOAOACIAFAAIgFAFIgZgJQgJgYgYgHIgBACIANAHIAKAVQhAgKg9AdQgnATgVAlIAIgqIgEAHIAAABIgEAJQgbA9gXA+QgPAogWAlIgBABQABgOgOgCQgJAAgDAIIgCAEQgEAJABAJQABAPAEAOIABAHIgDASIgDAPQgEAdAEAdQADAagEAYIgCgHgAhDj9IACADIgFADgAA8j/QgmgngKg0IgFggIANAKIgQgYIAYgVIAEgKIACgHQACgEAEgCIAGgEIABAAQAbgBAHAbQAIAbAMAYIAEAHICTifIABgPIALgOIABgGQgGgGADgMIAGgbQACgLAEgLIAFgOQABgEAEgCIACgCIAJAAIACABQAGACABAGIgBAKIAAABQgJAagGAcIAFgCIAAAAIAAgBIgBgCIAAAAIABABIAAAAQAKAAAJgFIADgBIABAAIAAAAIABgBIAEAAIABAAIABAAIAAgBIAHAAIABgBIABAAIAAAAQAGgBAFgCIAGgBQANgBAKgIQALgJAGgNIAHgOIAAgBQAGgKAIgKIABgBIACAAIgBABQgCAGAAAGIgBABIAAABIAAABIgBACIAAAAIgBABIAAABIgBACIAAABIAAACIgBABIAAAAIgBABIgDAFIAAABIAAACIgBABQgBADgCADIAAABIAAABIgBAAIgCAEIAAACIgBAAIgBABQgCAFgFAEQgGAFgHADIABABIAAABQAGAAAFgDIABgBIABAAIAAgBIABgBQAOgOAFgSIABgBQACgDAAgDIACgCQADgJABgJIAAgBIACgDIAAAAIAAgBIAAAAIgBgBIAKgBIAAABIgBAFIAAABIgBAAIAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIAAAAIgBADIgBABIAAACIAAABIgBABIAAABIAAABIgBABIgBABIAAABIgBADIAAABIgBACIAAAAIgBABIAAABIAAACIAAABIgBABIAAABIgCAEQAAAEgDADIAAABIAAAAQgKAQgOAMIgGACIAAABIAAACIADAAIAEgBQALgGAGgLIADgFQAJgJADgMIAAgBIAHgUIAAAAIABgBIAAgCIAAAAIABgBQADgGgBgIIADABQAIAAAIAEIAAAAIABABIABAAIAAABIAAABIgCAEIgBABQACAEAAAEIAAABIgDAGQgBAFgDAEIAAAAIAAABIgBADIgBABQAAADgCADIAAABIgEAFIAAABIAAABIgDAEIAAABIgBACIgBAAIgBADIAAAAIgCADIAAABIgOAPIAAABQgDAEgEADIgHADQgSARgaAKIgEABIgUAJIgPAGIgFADQgWAPgUARIgFAHQgmA1gnA0IgHADQgsA5g6AvQgEADgGABIgHgBgAGDo3IAAABIAAACQADABACgBQAEgCAFAAIAAAAIABgBIABAAIAGgHIAAAAIAEgFIACgEIABgCIADgHIAAgCIABgIIABAAIABgDIABgCIADgIIABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIABgBIAAgCIABgBIABgBIAAgBIAAgCIABgCIACgFIAGgHIABAAIAAAAIAAgBIADgDIAAgBIAAgBIgBAAIgBgBIgBAAIgKALIgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIgBABIAAABIgBABIAAADIgBAAIAAABIAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIAAABIAAABIAAAAIgBABIAAACIAAAAIgBABIgBABIAAAAIgBADIAAABIAAAAIgBABIgBABIAAABIgBACIAAABIAAADIgBAAIgBABIAAACIAAADIAAAAIgBACIAAACIgEAJIgBAAIAAABQgEAGgFAFIgBAAIgBAAIgIABIAAABIAAAAIgDABgAGkpGIgBABIAAAAIAAAAIAAABIgBAAIAAABIgBABIAEgFIgBABgAm3kTIAAACIgCAEgAAroTIgDgBIgCAAIAAgBIgCABIgNgBIgDgBIAFgCQAGgBACgDQAHADAGgFQAGgEAAgGIABgFQADARAAASQAAADACADIgCAKQgBgPgMgKgAEqo9IABgBIgBABgAGEptIAAABIgBAAIABgBgAASp1IACAAIABABIgDgBgAGSqEIABgCIgBADIgBABIgBABgAihqaIACgEIAIAEQgJABgDAGgAiaqtQAMAEAOAAQAJAAAEgIQAFgHgEgHQgEgGgFgCIgBAAIgBAAQgFAAgFADQgMgBgKgIQgTgQgEgaQgEgYgFgYIABgLIABgDQAFgFABgGQAEgPgQgCIgFACQgHADgFAGIAbg4QBJABBCgfIADABIgDAFQgFAPAQAEIACAaIAAAEQgBAYAHAXQADAPgEAOQgCAMAJAFQAFADAFgCIAAAAIgTAjQgPAcgVAYQgQAUgZABIgEAAQgaAAgTgSgAhVsJIgiADIgaAJIgDACIAHAKIAAABIAMAOQAEAFACAFIABACIACAAQAFADAGAAIACABQAOAAAOgBQADAAACgDQALgJAIgLIACgGIACgEIAFgHIAFgFIAAgEIgBgCIAAgDIgBgCIgCgCQgSAEgTAAIgDAAgAheslIAAAAQARABAHgKQAFgHgJgCIgMAJIgSAFIgCAAIgBgBIAAgBIgEgBQgDgBgDAAIAAAAIgBABIAAAAIACACIAHACIgBABQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAIAHAAIABAAIAEAAgAiUtSQgFAFAAAGQAAAGAFAEQAEAFAGAAQAGAAAFgFQAEgEAAgGQAAgGgEgFQgFgEgGAAQgGAAgEAEgAhHtgQgHACgBAJQAAAKAHADQACACAEAAQADAAACgCQAFgBABgGQAEgLgJgFQgDgCgDAAIgFABgAintwIgRAaIAfgZIAcAHIgPgPgAhatsIAagRIAbAKIgWgTgAAAtBIAAACIAAACIAAgEg");
	this.shape_20.setTransform(196.8,102.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDFDFD").s().p("AgKgBIANgOIAAAJIAGAAIAAAAIAAAAIgBAGIAAAGQgBADACADIACADg");
	this.shape_21.setTransform(221.7,39.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663300").s().p("ADlEMQgPgEgIgQQgNgKAAgSQAAgYAKgTIABgEQgKggADghIgUgmIgDAAQgGgCgEgFIgBgBQgKgCgJgFQgQAJgQgCIgDADQgTAHgJgJIgBABIAAgCQgEgFgCgIQgCgKADgHIgBgJIBBhtIAHAAIgEgPIAGgHIgBglQgFgFgEgGIACgCIADgBIAAgCIAAgCIgBgCIAIAAIgNgHQACgOgBgOIAAgBQAAgTgFgSQgBgGgDgDQgDgFgEgCQgFgCgIABIgMAEIgDAIQgMAUghgCIgDAAIgHgBIgJADIg6AMIgMgEIgBgIIgHACQgJAEgJgBIgBACIAGALIgPAuIgaAjIAWgKIgFAMIAFAhIAHAHIgDAUIAKAKIAAABIgBAAIgBgBIACAHIgCARIANAVIgCAHIAIAIIABAAIABAAIACgEIAQAUIgfAtQgfgFgZAKIAAAAIgBgBIgBgBQgHABgGADQgNAJgKAOIgIALQgQATgNAWQgZAugbAsIgBADIAAABIABAAIABAAIgaA+IgMACIgFAGIgcgDIgDgQIAWgNIgYAGIgHgKQg1ARgggrIgBgBIAAgDQAAgTgEgSIAUguQAKgXAZgKIAVALQgLgVgIgYQgMgiATggIAHgEIACgKIANgFIABgKIBQggIABACQALgFAKAAQAKABAHACIAAgEIgdgaQgIgnAegZQAMgcAhACIANgCIAOgGIAGAJIAGACIgCgKIAIAEIAHgEIAVABIgLgEQgHADgJgBQgjgCgGghQgJgOAIgXQASguAyACQAEgRATgKQANgHAMAAIAKgCQAJgNATAAQANgBAJADIAIAEQAKABALAFIACAAIACAAIAJgBIAMgCIABAAIANACQAIADAFAFQAXgMAbADIAJgBQAbAEAGARIAHAOIgGAHIAAgBIgDAJIgCAGIABAEIgJAYIgYAcQAAAPANgOQAEgEAGgEQAhgTAfARIgCAGQAdAEgGAfQgEAZgVAOIABADQAAAAAAAAQABAAAAABQAAAAAAgBQABAAAAAAQAHgDAHgGQAYgEAYAAIARAFIADACQAIAGAGAHIgZAfIAbgbQAKAtglAiQAUgOAWgEQAJgGALABQA0gBgBAyQAAAHgEAEQgKAQgOAKQgTAhgiARIAggJIAZARIgCA0QgrA3hGgJIAAAAQA1AOAtghIAGgFIgBAMQgTAggjAOIAFAEIgsAzIghABIAfAFIgvAsg");
	this.shape_22.setTransform(182.9,33.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AlAOoQA0gxAUhDIAFgEQAVhJAFhMQADg6gKg5IgFgIIAFgFQgCgIABgIIAHhZQgWAAgUgHIgDAQQgCANgKAKQgnAug7AOQgiAHghgOQgNgGgJgLQgYgdgIgjIAAhCIADgDIABgJQAFgWAPgQIAPgPIAGABIACgHIAQgFIgBgJQABhdAEhdIACgPQADgUATgMIAKAFIAcgkIgYigQgBgUAAgVIAEhNIAAgIIAWg1Ig8gfIgDgDQghgJgfgMIgCgBQgDgMAAgMIABABQAgArA1gRIAHAKIAYgGIgXANIAEAQIAbADIAGgGIAMgCIAag+IgCAAIAAAAIAAgBIABgDQAbgsAZguQAMgWAQgTIAIgLQALgOANgJQAGgDAHgBIABABIABABIAAAAQAZgKAeAFIAggtIgRgUIgBAEIgBAAIgBAAIgIgJIACgHIgNgVIACgRIgCgHIABABIABAAQAGAbAVATQALAKANAEQAUATAdgBQAZgBAPgUQAUgYAPgcIAUgjQAJgEACgLIABgPQABgMgDgMIAAgCIgBgCIgBgCQgDgVgBgVQAAgSgFgRQgEgPgPgCQgGAAgEADIgDADIgCgBQhCAfhIgBIgbA4IgEAJIgBAEQgCARADAPIAHAmIABAJIgJgKIADgUIgHgHIgFghIAEgMIgVAKIAagjIAOguIgFgLIABgCQAIABAKgEIAHgCIABAIIAMAEIA7gMIAMgBIAHgBQAgACAMgUIAPgMQAHgBAFACQAFACADAFQACADABAGQAFASABATIAAABQAAAOgCAOIAOAHIgJAAIABACIABACIgBACIgCABIgCACQAEAGAFAFIABAlIgGAHIADAPIgGAAIhBBuIACAJQgEAHACAKQACAIAEAFIAAACIABgBQAJAJASgHIAEgDQAPACAQgJQAKAFAKACIABABQAEAFAGACIADAAIAUAmQgEAhAKAgIgBAEQgKATABAYQgBASAOAKQAHAQAPAEIAKA2IAvgsIgggFIAigBIAsgzIgGgEQAkgOASggIACgMIgGAFQgtAhg1gOIAAAAQBFAJAsg3IACg0IgZgRIggAJQAigRASghQAPgKAKgQQADgFAAgHQACgyg0ABQgMgBgJAGQgWAEgTAOQAlgigKgtIgbAbIAZgfQgHgHgHgGIgDgCIATAFIABgCIABABIADACIACAEQABAeAAAeQAegKAaASQAjAYgHApIgFADQgFADgDAFIgKAMQgHAIgCAJIgOANIAXASIAAAAQADACAGgCQADgEABgGIAEgLIABAAIAHgEIABAAQAFgCAEAAIgBABIAAABIgIAAIgCACQgEACgBAEIgFANQgEAMgDALIgFAbQgDAMAFAGIAAAGIgLAOIgBAPIiTCfIgEgHQgMgYgIgbQgHgbgbABIABgDIgCADIgHAEQgDACgDAEIgCAHIgDAKIgYAVIAQAYIgOgKIAGAgQAKA0AlAnIAHABQAGgBAFgDQA6gvAsg5IAGgDQAog0Amg1IAFgHQAUgRAWgPIAFgDIAPgGIAUgJIADgBQAbgKASgRIAHgDQAEgDADgEIAAgBIANgPIABgBIABgDIABAAIABgDIAAAAIACgCIAAgBIADgEIAAgBIAAgBIADgFIABgBQACgDAAgDIABgBIABgDIAAgBIAAgBQADgDAAgFIAEgGIAAgBQAAgEgCgEIAAgBIADgEIAAgBIAAgBIgBAAIgBgBIAAAAQgIgEgJgBIgCAAQABAHgEAHIAAABIAAAAIAAACIgBABIAAAAIgHAUIgBABQgCAMgJAJIgDAFQgGALgLAGIgEABIgDAAIAAgCIAAgBIAGgCQANgMAKgQIAAAAIABgBQADgDAAgEIACgEIAAgBIABgBIAAgBIAAgCIAAgBIABgBIAAAAIABgCIAAgBIABgDIAAgBIABgBIAAgBIAAgBIAAgBIABgBIABgBIAAgCIABgBIABgDIAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIABAAIAAgBIAAgFIAAgBIgJABIABABIAAAAIAAABIAAAAIgCADIAAABQgBAJgEAJIgBACQAAADgCADIgBABQgFASgOAOIgBABIAAABIgCAAIAAABQgGADgFAAIgBgBIAAgBQAGgDAGgFQAGgEACgFIAAgBIABAAIAAgCIADgEIABAAIAAgBIAAgBQACgDABgDIABgBIAAgCIAAgBIADgFIABgBIAAAAIABgBIAAgCIAAgBIABgCIAAgBIAAgBIABAAIAAgCIAAgBIABgBIAAgBQABgGACgGIAAgBIgBAAIgBABQgIAKgGAKIAAABIgHAOQgHANgKAJQgKAIgOABIgFABQgGACgFABIAAAAIgBAAIgBABIgHAAIAAABIgBAAIgBAAIgEAAIgBABIAAAAIgBAAIgDABQgJAFgLAAIAAAAIAAgBIAAAAIAAACIAAABIABAAIgFACQAFgcAJgaIgEAuIAAAAIABgBIABAAIABAAIAAgBIABAAQAJgDAJgCIAAAAIAAgBIABAAIAIAAIAAgBIAAAAIAUgEIAQgFIAAAAIAFgDIACgCIAAgBIABgBIAAgBIABAAIAAgBIAOgVIAAAAIAAgCIABgCIAAgBIABAAIAFgJIADgGIABAAIABgBIABAAIAAgBIACgDIgBABIADgEIAEgCQAIgDAIAAIABgBQAIAAAIADIABAAIAEABIACABIABABIAAAAIABAAIABAAIAAABIAAAAIACABIAAABIAAAAIAAADIAAAEIAAABIAAABQAAAUgKAUQgcA4g8AUQgzASgeAoIgCACIgZAbQgOAQgMARIgUAeIgEAFIgDAFIgDAFQgWAOgPAVQgkAzg4AYQgIgCgGgIQgMgUgOgTIgBgDIgBgCIgCgDIAAgBIgHgUQgBgLgGgGIAAgBQgBgJgFgHIAAgDQAAgEgBgDIgBgBIgFgCIgFADIAAABIAAAAIgBAAIgCABIgCABIAAADQgIAHgFAJQgHAEgEAIQgHAOAAAOQgGAVAMAVIABAJIAAAFIADAJIAAABIAAAAQADAGADAEIABAQIAHAIQAJAXACAXQAFBCgFBCQgCAigGAiQgJAugLAvQgKASgBAXIgBAiIgSBIQgHAbgEAbQgFAPgBARIAAABQgCAMgEALQgIAUgDAWQgIARgFASIgWBeQgUBAgFBFIgFAEIgEAUQgJBEAtAzIAAgBIACADIAZAWQAKAQgCAQIgEADIgFgBIgIABQAAABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQgXAKgZAFIgCgBIgDACIgJADIgEACQgGABgEgCIgGgDQgJgGgDgJIgQgGIgIgZIgeAyIgwAHIhnAHIAugugAkSO9IgNANIAUgBIATgdIAHABIgOAbIAegHIAfh0IgBgCIAEgNIADgEIAYhoIgDgHIAIgMIgBgDIACgKQAUhEAMhFIAOhTQAEgTABgUQABgqAGgmIgGgEIAWkiIgBgCQABgJgCgJQgBgFAAgFQACgPgGgNIgBgCIgJg0IgGgDQgNgcgRgYIgXgZQgQgTgSgRQgHgNgMgJIgDgEQgEgGgFgEIgMgSIgJAJQgLANgIAPQgLAJgFATQgFAUgCAUIgGARIACADIgIAUQgFANgBAOQgFBCAZA8QALAcAOAbQAQAxAXAuQAJARAKANIAAgDIASAtQABAcgGAbQgKAVgGAXQgNA6gDA7QgBAPACAPIAJBSIABABIgCAgQgDAogBAkQgEAFgBAIIgQBEIgWA+IgBABQgSAagPAdIgBAAIgFABQgSAHgJARIgBACIgOALIAPAAIADgEQALALAMgRIABAJIAfgigAgviNIgdBBIgNARIAGAsQgBAGACAHIAAABIACAOIAAAFIAAAOQgBAGACAFIACADQAFBIAABJIgHAiIAAAEQgJAYAHAYIgdDuIgEAFIgtDuIgDAEIgDAFIgEARIgBABIAAACIgHARIgCAGQgCAEgBAGIAAAHIgBAXQAAARADAPIAAABIACAFQABAHAEAFIAFALQACAPAIANQAHAMALAEIABACQADAEAEAAQADAAACgCIgBgBIAAgEIAAgDIgBgCIgBgBQABgEgCgDIgBgDIgCgDIgBgBQgCgFACgFIAAgDIACgBIACAAIADABQALAQgBAUIAFgBIAOgFIgEgHIgCgDIgBgCIAAgDIgHgJIgBgCIgCgJIAAgDIACgBIACgBQAHAEAEAIIAAACIAKAOIABACIAAABIAAACIABABIABACIAAAAIAIgCIAFgDIgBAAQgIgSgMgPQgCgCAAgDIAAgBIABgCIAAgBIABAAIACgBIAAAAQAVAOAFAYIACgDIAGACIgCgKQABgHgEgKQgDgIgIgGQgPgOgTgGIgKgYIgBgCIgCgNQgDgOABgOQAAgUgHgSQADgIACgJQAEgVACgWQABgIADgHQAEgHACgIQAIgcACgeQACgPAEgOIAFgSIAHgdIACgIIABgDIABgEIAAgBIAHgRIAUg4IACgFQAHgNABgPIAAgEIAAgCQADgKgDgLQgCgKgHgEIAAgDIgBADIgCgBIABgGIgEAFIgEgBIgBAAIAGgJQARgZAJgcIAIgcQAFgPABgPIABgGIABgGQALg1AIg0IgCgGIADgGIACgOIAEgHQAIgSACgUQADghALggQAMgngNgnIAAgBQABgRgBgQIAAgGQAAgIgDgHQgIgcgMgbIgDgHQgDgPgNgCIgEAAIgCgDIgDAGIgBABQgDADAAADIAAAAIgZA3IATgtgAm8H7IACABIADADIADAAQAXAJASgPQAEgDACgFIABgBIAAgDQALg2gEg4QgCgZgRgSQgGgHgKgBIgHgBIgJgFIAAAEIgTgCIgDACIgBAAIgBACIgCACQgKAHgEANIgDASQgSA3AdA8IABgCQAGAPANAHgAlIEsIgLAEIgJAFIgpARIAKAXIACAIIAAAIIACAsQACAagFAZQgCAMAEAKIgLAgIARgFIAJgJQAFACAFABIgJAEIANgDIAAgBQAJAAAJgEQAGgGAEgHIABAAIAFgCQAxgigKg8QAFgkgQghIgCgFIAAgBQgGgLgIgKIgFAGIgLgCIgLACgAjaGtIABgLIAEhKQACgugSgpQgnhbgXhgIgEATIgIAFIgJCkIAEAJIgCAKIAQAEIAAAHIAYAjIADgFQAEAxADAxIAAAIIABgBQAVACAUAEgAmbEgQABAEAEABIADABIABAEIAAgCIAAgCQAYAFAYgIIAEABIAEgJIAJgOQAHgKAAgMQAAgdAEgcQABgLgDgGIAEgHQAEgVgPgFIAAgBIg0gOIgMATIgQCWIAEgHIAAABgAmBjGIAEA3IABALIABAHQACAXAFAXQAFAaACAaIgBAIIABAbQABAKAEAKIgDABIgWA/IgKAGIA8AeIAHgWIgSg6IABAmIgJgiIAJgFIATAyQAKgYACgYQADgegBgcIAAgBIAAAAQADgagCgbQACgFAAgHIACgaQADgbAAgcIAAgRQgBgJgFgEQAAgJABgJIABgDIAAgBQAWglAQgoQAWg+Acg9IAEgKIAAAAIADgHIgHAqQAUglAogTQA9gdBAAKIgKgVIgOgHIABgCQAZAHAJAYIAYAJIAFgFIACgBIAHgGIATgRIAFgDQASgGASgEIADACIANABIACgBIAAABIACAAIADABQAMAKABAOIABgJQgBgDAAgDQAAgSgDgRQABgPgEgOQgDgPgJgNQgEgIgJgEIgFgCIAAgBIgCAAQgKgDgLACQgcACgZALIgLAFQgGgLAAgMQgBgJgEgFIAAgBIADgLQgiALgggMIgKgEIgIgEIgGgEIAEAIIgCAHQgCAEABAHQACAHgFAFQgEAHgCAHIgGAFIheAKIgBABQgCACgDAAQgMARgNARIgCACIAAABIgPAZQghA8gcBFIgFAEIgiBYQgGAFgDAHQgIAQgBASIgCAGIACgEQgBAPABAPgAhghdIAEAMIADgCQAkgwARg4IADgEIgCANIAFgTIAEgKQACgCABgDIABgIIABgBIABgCIAAgFQAAgEADgEIABgHIACgPIAAAAIAAgBIAIgLIAGgMQAOgbARgZIAFgFIAGgHQABgIAEgGQAJgCACgKIAAgBIAEgDIAJgDIgEAAQAHgGAHgHQAbgdgKgkQgFgTgRgDQgGgBgIACIgEABIAAgBIgJABIgDAAIgTAYIgOAKIAFAJIgBAEIgCADIgmgXIAAAXIgrA4IgIgGQAagNAKgZQALgYgLgPQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIACAGIgKgJQhggIhBBJIAHAJIgBALIAQAKIgCAEIgagMIgBBLIgCACIgDAEQgDAHACAIIAAAFIACADIgNAfIACACIABAAIABAAIAFABIABABIABADIAAACIAKAUIAJAKIAKAKQAXATASAYQAMANAOAMQAJAJAHAKIAIAHIgBgGIAHACgAksiyIA2hBQAPgSgGgYIAGAOIgCg6gAG5o/IABAAIAAgBIgBABgAn8nIQAHgUANgRIAFgGQAJgDAIgJQAFgHAEgJIAAAAIAAAAIABgBQAEgDABgFIAAgBIABABIgBgBQAFghgDgjIACgHQAFgGAFgDQAJgHADgLQADgIAAgHIABgFIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQAMgDALgGIAQgIIAJgFIAHgDQA7gcA2AjIgBAAIgMACIgJABIgDAAIgGgEQgMgFgMgBQgKgDgNABQgTAAgJANIgKACQgNAAgMAHQgUAKgEARQgygCgRAuQgIAXAJAOQAFAhAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACAKIgGgCIgGgJIgPAGIgNACQghgCgMAcQgdAZAIAnIAdAaIAAAEQgIgCgJgBQgLAAgKAFIgBgCIhQAhIgBAKIgNAFIgCAKIgHAEQgTAgAMAiQAIAYAKAVIgVgLQgYAKgLAXIgTAuQgDgKgFgKgAnvnyIACAAIgFAEIADgEgAG5oHIAAgCIAAgBIADgBIAAAAIAAgBIAIgBIAAAAIABAAQAGgFADgGIABgBIABAAIAEgJIAAgCIABgCIAAAAIAAgDIAAgCIABgBIABAAIAAgDIAAgBIABgCIAAgBIABgBIAAgBIAAAAIABgBIABgDIAAAAIABgBIABgBIAAAAIAAgCIABgBIAAAAIAAgBIAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgBIAAgBIABAAIAAgDIAAgBIABgBIAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIABgBIAKgLIABAAIABABIAAAAIABABIgBABIgCADIAAABIAAAAIgBAAIgGAHIgCAFIgBACIAAACIAAABIgCABIAAABIgBACIAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABIAAAAIgDAIIgBACIgCADIAAAAIgBAIIgBACIgCAHIgBACIgCAEIgEAFIgBAAIgGAHIgBAAIAAABIAAAAQgFAAgEACIgCAAIgDAAgAHXoXIABAAIAAAAIAAgBIABgBIACgBIgEAEIAAgBgAFepRIABgCIAAgBIAFADIACAEIAAAEQgBgGgHgCgAg2qlIgCgBIAKAAIAYgFQAMgLAHgOIAJgVIg2AGQgOABgOAEQAPAAAOgDIACAAIAjgFIAEABIABAEQABAEgCAEIgCAEIgEAGIgLANIgBABQgDACgEABIgFABQgRAAgNgMIgMgMIgDgEIAAgBIAAgCIABgBIgIADIABAHIAAgBIgIgKIAEgCIAZgJIAjgDIADAAQASAAASgEIACACIABACIAAADIAAACIAAAEIgFAFIgEAHIgCAEIgBAGQgJALgKAJQgCADgDAAQgOABgNAAIgCAAgAghrKIgJABIgBAAQgIABgJACIgGAAIADACIACACIABABIACACIABABQAHAEAGACQAOAGAIgOIADgFIAAAAIABgBIABgCIAAAAIABgBIAAgBIABgCIgDAAIAAAAIgPACgAhEqpIgBgCIACACIABAAIgCAAgAgsr4IgMgDIgGgCIgDgCIABAAIABgBIAAAAQADAAACABIAFABIAAABIABABIACAAQAGABAEADIAAAAIgEAAgACRsHIgBgDQAUgOAFgZQAGgfgdgEIACgGQgggRggATQgGAEgEAEQgNAOAAgPIAYgcIAJgYIAEgSIAGgHIgIgOQgFgRgbgEIgJABQgcgDgWAMQgFgFgHgDIBXgNIAbAXQAGAQgCAUQgCATgIAPIAmADIAoAlIABAMQABAHAEAGIgBAJIAGgBIAGAFIgRAGIAdAHQgYAAgXAEQgHAGgIADIAAABIgBgBgAgSsbQgHgDAAgKQABgJAHgCIAEgBQAEAAADACQAIAEgDAMQgCAGgEABQgDACgDAAQgDAAgCgCgAgFtZIAUATIgagKIgZARg");
	this.shape_23.setTransform(191.5,98.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("Ag6BrIgEAAIgCgCIgCgCQgNgHgGgPIgBACQgdg7ASg3QABgJACgJIAQgVIAFgFIASACIABgEIAJAFIAHABQAKABAGAHQARASACAZQADA3gKA2IgBADIAAACQgCAEgEADQgLAJgNAAQgIAAgJgDgAABBOQgDgKACgMQAEgZgCgaIgCgrIAAgIIgBgIIgKgXIAogRQANgIAHgBIAbgGQAIAKAFALIABABIACAFQAPAhgEAkQAKA7gxAiIgFACIgBAAQgEAHgGAGQgKAFgIAAIgEgBQgFAAgFgDIgJAJIgRAFg");
	this.shape_24.setTransform(153.7,138.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#030303").s().p("AgFAAQACABADgBIAGAAIgBAAIgCAAIgDAAIgDABg");
	this.shape_25.setTransform(179,134.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C6FFFF").s().p("AAhhLIABA6QABAKgPARIg1BCg");
	this.shape_26.setTransform(164.8,72.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#33CCFF").s().p("AgdC8QAQADAEgSQAHgagYgFQgXAFADAaQAAAFAEAEIAFADIABABIABAFIgIgHQgHgKgJgJQgOgMgNgNQgRgYgXgTIgKgKIgJgKIgKgUIgBgCIAAgDIgBgBIgFgBIgCAAIgBABIgBgDIANgfQgEgQADgGIAGhRIAaAMIgBADQgCAKAIAGIABABQAKAIAOgCQAJgCAEgIIABgEQAIgZg0ANIgPgOIACgLIgHgJQBBhJBfAIIAKAJIgCgGQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQALAPgLAYQgLAZgYANIAHAGIArg4IAAgXIAnAXIACgDIAAgEIgEgJIAOgKIATgYIADAAIAJgBIAAABIADgBQAIgCAHACQAQACAGATQAKAkgbAdQgHAHgHAGIADAAIgIADIgEADQAGgfgigDQgRADAAATQgBAIAEAGQAKAOASgCIADgBQgEAGgBAIIgHAHIgEAFQgRAZgPAbIgGALIgIALIAAABIgBAGIgCAJIAAAHQgDAEAAAEIAAAFIgBACIgBABIgBAIQgBADgCACQgBAFgDAFIgFATIACgNIgDAEQgSA4gjAwIgCACgAg1BiQAAAGACAEQANAVAlgTQADgegegHQgYACgBAXgAhuAtQgXAEABAYQABAHAFAEQAJAHAlgOQAGgggeAAIgGAAgAgdAPQgNAbAfAHQAdAIAAgfQAAgZgagBQgOABgHAOgAhegNQgEANAJAJQAOAQAfgeQgDgYgbgBQgPABgFAQgAANhCQgRABgBASQAAAFACADQAJASAVAGQAPAEAIghQgJgWgYAAIgEAAgAAYhkQgCAaAqgQQAFgYgYgGQgUAAgBAUgAhdh9QgGARAPAKQALAHAcgKQAJgYgUgLIgQgGQgPACgGAPgAgKigQgOABgFANQgEALAGAJQAKANAQgFQAKgDAKgXQgFgRgQAAIgIABgABpidQgEAbArgOQAJgdgegDQgPACgDARg");
	this.shape_27.setTransform(184.8,70);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0B0B0B").s().p("AAMASQgGgBgFgCIgCgCIgEgIIgCgCIgLgNIgCgHQABACAEAAIABABIAAABQABALAIAGQALAKAPADIAAAAIgGABIgDAAg");
	this.shape_28.setTransform(184.6,28.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgrE3IAAgBIgGgDQgDgDAAgGQgDgaAXgFQAYAFgHAaQgXANgEAAIgBAAgAg5DpQgDgEABgGQABgXAYgCQAfAHgEAeQgSAJgMAAQgOAAgGgLgAiFDRQgFgEAAgHQgCgYAYgEQAkgDgHAjQgYAKgMAAQgHAAgDgDgAgSCuQgegHANgbQAHgOAOgCQAaACAAAZQAAAZgTAAIgLgCgAhgCGQgIgKAEgNQAEgQAQgBQAbABACAYQgUAUgNAAQgHAAgFgFgAAVBtQgVgGgJgSQgDgDABgFQABgSARgBQAbgCAJAYQgHAdgMAAIgDAAgAh7BGIgBAAQgHgGACgLIABgDQAzgNgIAZIgBAEQgDAIgJACIgGAAQgLAAgIgGgABNAiQgEgGAAgIQABgTARgCQAhACgFAfIAAABIgBAAQgMANgBAAIgGAAQgOAAgIgMgAARAYQACgUAUAAQAXAGgFAYQgQAGgJAAQgQAAABgQgAhbAaQgOgKAGgQQAFgPAQgCIAPAGQAVALgKAXQgQAGgLAAQgHAAgFgDgAghgBQgHgJAFgLQAFgNAOgBQAXgEAFAUQgJAWgLADIgIACQgLAAgGgJgABjggQACgRAQgCQAdADgIAdQgPAFgJAAQgSAAADgSgAAPkiQgGgCgGgEIgCgBIgBgCIgBgBIgCgCIgCgCIAFAAIARgDIAYgDQAAAAABAAQAAABABAAQAAAAAAAAQAAABAAAAIgBACIgBACIgBABIgDAFQgGAKgIAAIgIgCg");
	this.shape_29.setTransform(185.4,57.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC0033").s().p("AgFAaQgOgEgMgKQgJgHgBgKIAAAAIgBgCQgDAAgCgCIAIgDIAAABIgBACIAAABIAEADIALALIABAAQANAMAPABQAIgBADgCIACgBIABgCIAFgGIAGgGIAEgGIACgDQABgEAAgDIAAAAIgCgGIgDAAIgWADIgNACIgQACIgOAAQANgDAPgBIA2gGIgKAUQgHANgMALIgXAGg");
	this.shape_30.setTransform(187.3,27.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#020202").s().p("AgMgMIAMADIgcAWgAAAgJIABgCIAcAHgAAAgJg");
	this.shape_31.setTransform(181.3,15.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#040404").s().p("AADAFQgDgEgGAAIARgFQAHAHgKABIgDABIgBAAIgBAAgAgNACIABAAIAAABIgBgBg");
	this.shape_32.setTransform(187.1,21.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#070707").s().p("AgIAJQgFgEAAgFQAAgGAFgFQAPgEAFAEQAEAQgEAEQgFAFgGAAQgFAAgEgFg");
	this.shape_33.setTransform(182.8,18.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#414141").s().p("AAKAEQgJgEgIAAIgHgEIADABQALABAPAHIgFgBg");
	this.shape_34.setTransform(185.4,1.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFD0A0").s().p("AAdHUIgBgLIgBgZIgCgOQgEgQgHgOIAAgDQAAgMANgBQATAVACADIAAACIABACIABADQAEAMgBAMQgBAFABAFQACAJAAAJQAAAIgCAIQgCAKgKgBQgNAAABgMgAA+G+QgDgIAAgFIAAgBIABgOIgCgRIAAgBIAAgBIAAgBIgBgBQgCgHABgGQABgGAEgEQAVAAACAOIAAABIABAIQACAOgBAOIAAAOQAAAMgNABQgIAAgDgGgAjWG0QgEgCgCgEQASALAKgFQgFADgGAAQgFAAgGgDgAitGIQgCATgHAQQgDAGgGADQAQgZACgTgAjfGsIgBgTQABAKADAJIAAABIAAABIgDgCgAjgGZIgBgEIABADIAAABIAAAAgAjmFNQADAUACAUIgBAGQgBgZgDgVgACZFkQgFgBgBgHQgCgPADgOQADgOgCgPQgEgagMgXIgHgMQgGgMAAgNIAAAAQAAgEACgCQAXgCAEAOIAAAAIADAIIAEAJIAEAJQAHASAGATQACAHAAAIIAAAFQACARgCASIgCAMIgCAIQgCAKgJAAIgHgCgAjuESQgCgDAAgEIAAgLIgFg3QgBgPABgPIAAgCIAAAAQACgSAHgQQAEgHAFgFQAFgFAIgDIABAAQARgCACAPQgHAOgGgBIAAAAQgLARgBAUQgCAWADAWIADAOIABAIQABAOAAAPIgBACQgEACgQADQgDgCgBgEgAhIEFIgBgCIAAAAIgCgKQgBgHgFgFIgHgIQgJgHgHgLQgKgOAPgIQATAGAEAHIAAAAIADADIAJAJIABABQAGAGAEAIIABABQAIARgIARQgGADgFAAQgHAAgCgGgACMg1QgOgCACgOQABgGAFgDQAGgRAQgKQAUgMAXgBQALgCAKAEQAAgJgCgIQgDgNgIgMQgngCgiAUQgOAKgKgNQgCgCABgEIAAgBQgFgDgDgFIgBgBQgJgUACgWQABgEAFgDQAUAJABAIIAAAAQABANAGALIAKgFQAbgLAcgCQAKgCAKADIAHACIAAAAQAJAFAFAIQAIANAEAPQADAOgBAPIgBAGQgCAGgEADQgFAEgHgCIgCABQgDACgEABIgFACIgkAJIgFADIgSARIgIAFIgCACIgDAAIgCAAgAAZijQgGgDABgGIAAgEIAIgRQADgFgBgFQADgRAIgBIABAAIAKAEQAFAFAAAJQAAAJgDAIQgDAKgGAJQgEAHgHAAQgEAAgFgDgAAnjvQgNgFgLgKQgTgUgHgaIgBgBIABAAIgCgEIAAgFIgHgmQgDgQACgQIABgEQAIgPAIgDIAAAAQATAAgCANIgBACIgGALIAAAAIgBADIgBAKQAFAYAEAZQAEAaATAPQAKAJAMABQAFgDAFAAQAHABADAGIABABQAEAHgFAHQgEAHgJAAIgEABQgMAAgKgDgACulLQgJgFACgMQAEgPgDgOQgGgVAAgZIAAgCIAAgDIgCgaQgLgDgBgJQgBgGACgIIADACQAagEAFAOIAAABQAFARAAARQABAWADAVIABACIAAAAQADAOAAALIAAADIgBAPQgCAKgJAFIgEABQgDAAgDgCg");
	this.shape_35.setTransform(177.4,58.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC99").s().p("AlIOQIAFgXIgfAiIgBgJQgMARgLgLIgDAEIgPAAIAPgLQAJgTASgHIAng3IAXhAIAQhEQAGgxADgoIACggIgKhTQgBgPAAgPQADg7ANg6QAGgXAKgVQAGgbAAgbIgTguIAAADQgJgNgJgRQgYgtgQgyQgNgbgMgcQgZg7AFhDQABgOAGgNIAHgTIgCgEIAGgRQACgUAFgUQAFgTAMgJQAHgPALgNIAJgJIAMASQAFAEAEAGQgEgGgTgHQgPAIAKAPQAHAKAJAIIAHAHQAFAFABAHIACAKIAAABIABABQAFALAPgIQAIgQgIgRIgBgCQARAQAQATIAYAaQARAYAMAbIAGADIAKA0QgCgDgTgVQgNABAAANIAAACQAHAPAEAPIACAOIABAYIABALQgBAMANABQAKAAACgJQACgIAAgJIAAACIgWEiIAGAEQgGAmgBAqQgBAUgEATIgOBTQgLBFgVBEIgCAKIABADIgHAMIADAHIgZBoIgCAFIgFANIABABIgfB0IgeAHIAOgbIgGgBIgTAdIgVABgAi1E+IAEgBIADgBIACgBIABAAIgGACQgEAAgCgBgAjBOPQgLgFgIgMQgHgNgDgPIgFgLQgEgFgBgHIgCgFIAAgBQgDgPAAgRIACgXQACgUACgDIAHgQIAGgVIACgFIADgEIAtjuIAFgFIAcjuQgGgYAIgYIAAgEIAHgiQAAhIgFhIQADAFAIAAQANAAAAgMIAAgOQABgOgCgOIgBgIIAAgBQgCgOgVAAQgEAFgBAFIgGgsIANgRIAehBIABABIAag2QAAAMAGANIAHAMQAMAXAEAZQACAPgDAOQgDAPACAPQABAGAFACQAPAFADgOIACgIIACgMIAAAAIADAKIAEAfQAAATgGATQgKAggDAgQgCAUgJASIgEAHIgCAOIgDAGIACAGQgIA0gMA1IgBAHIgBAFQgBAPgEAPIgJAcQgJAcgQAZIgHAJIABAAIAFABIADgFIAAAGIABABIABAAQAHAFACAJQADALgDAKIAAACIAAAEQAAAPgIANIgCAFIgUA4IgHARIAAABIgBAEIgBADIgBAIIgIAdIgFASQgEAOgBAPQgDAegIAcQgCAIgEAHQgDAHgBAIQgBAWgFAVQgBAJgEAIQAHASAAAUQgBAOADAOIADANIAAACIALAYQASAGAQAOQAHAGAEAIQAEAKgCAHQgBAFgCADIgDADQgEgYgVgOIAAAAIgDABIgBAAIAAABIgBACIAAABQAAADACACQAMAPAJASIABAAIgGADIgIADIAAgBIgBgCIgBgBIAAgCIAAgBIgBgCIgJgOIgBgCQgDgIgIgEIgCABIgCABIAAADIACAJIABACIAHAJIAAADIABACIADADIADAIIgOAEIgFABQABgUgKgQIgEgBIgCAAIgCABIAAADQgBAFABAFIABABIADADIABADQABADAAAEIABABIABACIgBADIABAEQgHAAgFgCgAnBA1IAKgGIAWg+IAEACQABADAEACQALAGAMgGIAAAAQAGgCADgGQAHgRACgTIABgCQABAdgDAdQgCAYgJAYIgUgyIgJAFIAJAiIgBgmIASA6IgGAWgAiHgtIAAgBIAAACIAAAAIAAABIAAACgAmLhEQAEgNAAgSQABAUgDASIgCgHgAmjhHQACgHAKAAQAKAAACAKQgCgKgWAHgAmsikQAQgCAEgDQgGAIgHAAQgDAAgEgDgAA8j/QgmgngKg0IgFggIANAKIgQgYIAYgVIACgGIACgDIAAgBQAFgMADgBIAGgEIABAAQAbgBAHAbQAIAbAMAYIAEAHICTifIABgPIALgOIABgGQgGgGADgMIAGgbQACgLAFgLIAEgOQABgEAEgCIACgCIAJABQAIACABAGIgBALQgJAagGAcIAFgCIAAAAIAAgBIgBgCIABAAIAAABQAKAAAJgFIADgBIABAAIACAAIADgBIABAAIABAAIAAgBIAHAAIABgBIABAAIAAAAQAGgBAFgCIAGgBQANgBAKgIQALgJAGgNIAHgOIAAgBQAGgKAIgKIABgBIACAAIgBABQgCAGAAAGIgBABIAAABIAAABIgBACIAAAAIgBABIAAABIgBACIAAABIAAACIgBABIAAAAIgBABIgDAFIAAABIAAACIgBABQgBADgCADIAAABIAAABIgBAAIgCAEIAAACIgBAAIgBABQgCAFgFAEQgGAFgHADIABABIAAABQAGAAAFgDIABgBIABAAIAAgBIABgBQAOgOAFgSIABgBQACgDAAgDIACgCQADgJABgJIAAgBIACgDIAAAAIAAgBIAAAAIgBgBIAKgBIAAABIgBAFIAAABIgBAAIAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIAAAAIgBADIgBABIAAACIAAABIgBABIAAABIAAABIgBABIgBABIAAABIgBADIAAABIgBACIAAAAIgBABIAAABIAAACIAAABIgBABIAAABIgCAEQAAAEgDADIAAABIAAAAQgKAQgOAMIgGACIAAABIAAACIADAAIAEgBQALgGAGgLIADgFQAJgJADgMIAAgBIAHgUIAAAAIABgBIAAgCIAAAAIABgBQADgGgBgIIADABQAIAAAIAEIABABIABAAIAAABIAAABIgCAEIgBABQACAEAAAEIAAABIgDAHQgBAEgCAEIgBAAIAAABIgBADIgBABQAAADgCADIAAABIgEAFIAAABIAAABIgDAEIAAABIgBACIgBAAIgBADIAAAAIgCADIAAABIgOAPIAAABQgDAEgEADIgGADQgTARgaAKIgEABIgUAJIgPAGIgFADQgWAPgUASIgFAGQgmA1gnA0IgHADQgsA5g6AvQgEADgGABIgHgBgAGvp9IgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIgBABIAAABIgBABIAAADIgBAAIAAABIAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIAAABIAAABIAAAAIgBABIAAACIAAAAIgBABIgBABIAAAAIgBADIAAABIAAAAIgBABIgBABIAAABIgBACIAAABIAAADIgBAAIgBABIAAACIAAADIgBACIAAACIgFAKQgEAGgPAHIgDABIAAABIAAACQADABACgBQAEgCAFAAIAAAAIABgBIABAAIAGgHIAAAAIAEgFIACgEIABgCIADgHIAAgCIABgIIABAAIABgDIABgCIADgIIABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIABgBIAAgCIABgBIABgBIAAgBIAAgCIABgCIACgFIAGgHIABAAIAAAAIAAgBIADgDIAAgBIAAgBIgBAAIgBgBIgBAAIgKALgAmRkuQAGAAAHgOQAAAGgDAEQgEAEgFAAIgBAAgAAroTIgDgBIgCAAIAAgBIgCABIgNgBIgDgBIAFgCQAEgBADgCIACgBQAHACAFgEQAEgCACgHIABgGQADARAAASQAAADACADIgBAKQgCgPgMgKgAhcpbQADAFAFADIAAABQgFgEgDgFgAheqMIAGgCQAGACAEAEQAFAEAAAJQgBgJgUgIgAijqTQADgGAIgBQgIABgDARQgBgHABgEgAiaqsQAMADAOAAQAJAAAEgIQAFgHgEgHIgBgBQgDgFgHgCQgFAAgFADQgMgBgKgIQgTgQgEgaQgEgYgFgYIABgLIABgDIAAAAIAGgLIABgCQACgNgUAAIAAAAQgHADgFAGIAbg4QBJABBCgfQgCAHABAGQABAKALACIACAaIAAAEIAAACQAAAZAGAUQADAPgEAOQgCAMAJAFQAFADAFgCIgTAjQgPAcgVAYQgQAUgZABIgEAAQgaAAgTgRgAhVsJQgRACgrAKIgDACIAHAKIABABIALAOIACADIAFAJIACAAQAFADAGAAIACABQAOAAAOgBQADAAACgDQALgJAIgLIACgGIACgEIAFgHIAFgFIAAgEIgBgCIAAgDIgBgCIgCgCQgSAEgWAAgAhtsmIADABIAIAAIAEAAIACAAIAEAAQAMgBAGgIQAFgHgJgCIgMAJIgSAFIgCAAIgMgDIAAAAIACACIAHADIgBAAIABABgAiUtSQgFAFAAAGQAAAGAFAEQAEAFAGAAQAGAAAFgFQAEgEgEgRQgDgCgFAAQgFAAgIACgAhPtVQAAAKANAFQADAAAIgJQAEgLgUgGQgHACgBAJgAi4tWIAegXIAdAFIgcgHIgBACIgNgDgAhatsIAagRIAFgJg");
	this.shape_36.setTransform(196.8,102.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FDFDFD").s().p("AgKgBIANgNIAGAIIgBAGQgBADACADQgCADACADIACADg");
	this.shape_37.setTransform(221.7,39.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#774A00").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_38.setTransform(173.4,32.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AlDOjQAzgxAUhDIAFgEQAWhJAEhMQAEg5gLg5IgEgJIAEgFQgCgIABgHIAIhZQgWgBgVgHQAAAIgCAIQgDAOgJAKQgnAug7ANQgjAIghgOQgNgHgIgLQgYgdgJgiIAAhCIAEgEIABgJQAEgVAQgRIAOgOIAGAAIACgHIAQgFIgBgIQACheAEhdIACgOQADgUASgNIAKAFIAdgjIgYigQgCgVABgUIADhOIAAgHIAXg2Ig9gfIgCgCQghgJgfgNIgDgBQgCgLgBgMIAAgEQAAgTgEgRIAUgvQAKgXAZgJQAKgKgHgXIAAgBQgNgiAUggIAGgFIADgKIAMgEIABgLIBQggQAKgDAKAAIADAAQAJAAAHADIgdgfQgIgmAegZQAMgdAhACIANgBIAPgHIAFAJIAGADIgBgLIAIAFIAGgFIAWACIgLgEQgIADgJgBQgjgDgGggQgIgPAHgWQASguAyABQADgQAUgLQANgGAMgBIAKgBQAJgNATAAQAOgBAKADIAHADQAJACAJADIADABIACAAIACAAIAJgBIANgCIABAAIAMADIBXgNIAbAWQAGARgBAUQgCATgJAPIAnACIAnAmQADATAEAGQAHAKAEACIgSAGIBCARIACgCIABABIACACIACAEQACAegBAfQAegLAaASQAkAZgHApIgGADQgEADgEAEIgKANQgHAIgBAJIgOANIAWARIAAABQAEACAFgCQAEgFABgFIAEgLIAAgBIAIgDIAAgBIgBACQgFADgBADIgEAOQgFALgCAMIgGAbQgCAMAFAGIAAAFIgMAPIgBAPIiSCeIgFgGQgMgZgIgaQgHgbgbABIgBAAIgGADQgDACgFALIAAABIgBADIgDAGIgXAVIAPAZIgNgLIAFAhQAKAzAmAoIAHAAQAGgBAFgDQA5guAsg6IAHgDQAogzAlg1IAFgHQAUgSAXgOIAEgDIAQgGIATgJIAEgCQAbgJASgRIAGgDQAFgDADgFIAAgBIANgPIABgBIABgCIABgBIABgCIAAgBIABgCIAAAAIADgFIAAgBIAAAAIAEgGIABgBQABgCAAgDIABgCIABgDIAAAAIABgBQACgDABgFIADgGIAAgCQABgEgCgEIAAAAIACgEIAAgBIAAgBIgBgBIgBAAQgIgEgIgBIgCAAQAAAHgDAHIAAAAIAAABIAAABIgCABIAAABIgGAUIgBAAQgDAMgJAKIgDAEQgGAMgLAFIgDABIgEAAIAAgCIAAgBIAGgBQAOgMAKgQIAAgBIABgBQACgDABgEIABgEIAAAAIABgCIAAAAIAAgCIAAgBIABgBIAAgBIABgCIAAgBIACgDIAAAAIABgBIAAgBIAAgCIAAgBIABgBIAAAAIAAgCIABgBIABgDIAAgBQABAAAAgBQAAAAAAAAQABgBAAgBQAAAAgBgBIAAAAIABgBIAAAAIABgFIAAgBIgKABIABAAIABABIAAAAIgBABIgCADIAAAAQAAAKgEAJIgBABQAAAEgDACIgBABQgFATgOAOIgBAAIAAABIgBABIAAAAQgGADgFABIgBgCIAAgBQAGgDAGgEQAFgEADgGIAAAAIABgBIAAgBIACgEIABgBIAAgBIAAgBQADgCABgEIABgBIAAgCIAAgBIACgEIABgBIAAgBIABAAIAAgCIAAgCIABgBIAAgCIABAAIABgBIAAgBIAAgCIABgBIAAAAQAAgHADgGIAAAAIgBAAIgBABQgJAJgGAKIAAABIgHAOQgGANgLAKQgKAHgNABIgGABQgFADgGAAIAAABIgBAAIAAAAIgIABIAAAAIAAAAIgBABIgEAAIgCABIgBAAIgCABQgKAEgKABIAAgBIAAAAIAAABIAAABIABAAIgGADQAGgcAJgbIgFAuIAAAAIABAAIACgBIABAAIAAAAIABAAQAIgEAKgBIAAgBIAAAAIABAAIAIgBIAAAAIAAgBIATgEIARgEIAAgBIAEgDIADgCIAAAAIABgCIAAAAIABgBIAAAAIANgVIAAgBIAAgBIABgCIAAgBIABgBIAFgIIAEgGIABgBIABAAIABgBIAAAAIABgDIAAABIACgFIAFgBQAHgDAJgBIABAAIAPACIABAAIAFACIABABIABAAIAAABIABAAIABgBIAAABIABABIACABIAAAAIAAABIAAADIAAAEIAAAAIAAABQgBAUgJAUQgdA5g7AUQgzARgeApIgCABIgZAcQgPAPgLASIgUAdIgFAGIgCAFIgDAEQgWAOgQAWQgjAyg5AZQgIgDgFgIQgMgUgOgSIgBgEIgBgBIgDgDIAAgCIgGgTQgCgMgFgGIAAAAQgCgJgFgHIAAgDQABgFgCgDIAAgBIgGgBIgEACIAAACIAAAAIgBAAIgDAAIgCABIAAADQgIAIgEAJQgIADgDAIQgIAPABAOQgHAVAMAVIACAIIAAAFIADAKIAAABIAAAAQACAGAEADIABARIAGAIQAKAWACAYQAFBCgFBCQgCAigGAhQgKAvgKAuQgJASgCAXIgCAjIgSBHQgGAcgEAbQgFAPgCARIAAABQgBAMgEAKQgIAVgEAWQgHAQgFASIgXBfQgTBAgFBEIgGAFIgDAUQgJBDAtAzIACACIAZAWQAJAQgBARIgEACIgFAAQgFAAgDABQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABQgYAKgZAFIgCgBIgCACIgJADIgFACQgFAAgFgBIgFgDQgJgHgEgJIgQgFIgIgaIgeAyIgvAIIhoAGIAvgugAkVO5IgOANIAVgCIATgdIAGACIgNAaIAdgGIAgh0IgCgCIAFgNIACgEIAZhpIgDgHIAHgLIgBgDIADgKQAUhFALhEIAPhUQADgTABgUQACgpAFgnIgGgDIAXkjIgBgBQAAgJgBgJQgCgFABgFQACgNgFgLIgBgCIgBgEIgJg1IgHgCQgMgcgRgYIgYgaQgQgSgRgRQgEgHgFgGIgCgCIgMgLIAAAAQgEgHgFgDIgLgTIgJAKQgLANgIAPQgMAJgEASQgFAUgDAVIgGAQIADAEIgIATQgGANgBAOQgFBCAZA9QAMAcANAbQAQAxAYAtQAJARAJANIAAgDIATAuQAAAbgGAbQgKAWgGAXQgNA5gDA7QAAAPACAPIAKBUIgDAfQgDApgGAwIgPBFIgYA/IgmA4QgTAHgJATIgPAKIAQAAIACgEQALALANgQIABAIIAegigAgyiRIgdBAIgOARIAHAtQgCAGACAGIABABIAAACIAAADIABAJIABAGIgBAOIAAAAQAAAGABAEIADAEQAFBIgBBIIgHAjIAAAEQgIAXAGAZIgcDuIgFAFIgtDuIgDAEIgCAFIgGAUIgHARQgBADgDAUIgBAXQAAAQACAQIAAAAIACAGQACAHAEAEIAEAMQADAOAIANQAHANALAEIABACQACAEAEAAQADAAADgCIgBgCIAAgDIAAgEIgBgBIgBgCQAAgDgBgDIgBgDIgDgDIgBgCQgBgEABgFIAAgDIACgBIADgBIADABQAKARAAAUIAFgCIANgEIgDgHIgDgDIgBgCIAAgDIgHgKIgBgBIgCgJIAAgEIACAAIADgBQAHAEAEAIIAAABIAJAOIABACIAAACIAAABIABACIABABIAAABIAIgDIAGgCIgBgBQgIgRgNgPQgCgDAAgCIAAgCIABgBIAAgBIABgBIADAAIAAgBQAVAPAFAYIACgDIAGABIgDgJQACgIgEgJQgDgIgIgHQgQgNgSgHIgKgYIgBgBIgDgNQgCgOAAgOQAAgVgHgSQAEgIABgIQAFgWACgWQAAgIADgGQAEgHADgIQAHgdADgeQACgOAEgPIAEgSIAIgdIABgHIABgEIABgDIAAgCIAHgQIAUg4IADgFQAHgOAAgPIAAgDIAAgCQAEgLgEgKQgCgKgHgEIAAgEIgBADIgBAAIAAgGIgDAFIgFgBIgBAAIAHgJQARgZAJgdIAIgcQAFgOAAgPIABgGIACgGQALg2AIg0IgCgGIADgGIABgOIAFgHQAIgSACgUQADghAKggQAHgSAAgTIgFgeIgDgLQACgRgCgRIAAgFQABgIgDgHQgFgTgIgSIgDgJIgIgRIAAgBQgDgNgNgCIgDAAIgCgEIgDAGIgCABQgCADAAAEIAAAAIgaA2IATgtgAm/H3IACABIACACIAEAAQAWAJASgOQAFgDACgFIABgBIAAgEQALg2gEg4QgDgZgQgRQgGgHgKgCIgIgBIgJgEIAAADIgTgBIgFAEIgPAVQgDAJgBAKQgRA3AdA7IABgBQAFAOAOAIgAlLEnQgHACgOAIIgoAQIAJAXIACAJIAAAIIADArQABAbgFAZQgBALADALIgLAfIARgEIAJgKQAFADAGABIgKAEIAOgDIAAgBQAIAAAKgFQAGgGAEgGIABgBIAEgCQAygigKg8QAEgjgPghIgDgFIAAgBQgGgLgHgLgAkHGjQAVACAWgHIADhKQADgugSgpQgohbgWhhIgMAZIgKCkIAFAJIgCAJIAPAFIAAAHIAYAjIADgFQAFAwADA5gAmVEmIgBgEQAYAFAZgIIADAAIAFgJIAJgNQAGgKAAgMQABgdAEgdIABgYQAEgUgOgGIhAAFIgRCVIAEgGIAAABQACAEADABIADABIACAEIAAAAgAlwAFIACATIgXBAIgKAGIA9AdIAHgWIgSg6IABAnIgJgjIAJgFIATAyQAJgYACgYQADgdgBgdIAAADQgDASgQAZIAAAAQgLAEgRgKIgBgBIAAgBQgDgKgBgJIAAgBIAAgEIAAAFgAlZgcIACAHQADgSgBgTQABASgFAMgAlygYIABgHQAWgHACAKQgCgKgKAAQgJABgDAGQgBgUgDgUQADAWAAAZgAhkhhIAFAMIACgCQAkgxARg4IADgEIgCAOIAGgTQADgFAAgGQADgCABgCIABgIIABgCIABgCIAAgEQAAgFACgDIABgIIACgJIABgFIAAAAIAAgBIAHgLIAHgMQANgbASgZIAEgFIAHgHQABgIADgGQAKgDACgJIAAgBIAAAAIAAAAIAEgDIAIgDIgDAAQAHgGAGgIQAcgcgLgkQgFgTgQgDQgHgBgIABIgDABIgJAAIgEABIgTAYIgNAKIAEAJIAAAEIgCADIgmgYIAAAYIgrA4IgIgGQAZgNALgaQAKgXgKgPQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIACAGIgKgKQhhgHhABJIAHAIIgCALIAPAPIgbgMIgFBRQgDAHAEAQIgOAfIACACIABAAIACgBIAEABIABABIABADIABADIAKATIAJALIAKAKQAXATARAYQANANANALQAJAKAIAKIAIAHIgBgGIAGACgAmFjKIAFA3IABALQgBAEACADQABADAEADQAJAIAKgNIACgCQgBgPgBgOIgBgIIgCgOQgDgWABgWQABgUALgRIAAAAQAGABAEgFQADgEAAgGQgCgPgRADIAAAAQgIACgGAGQgFAEgEAIQgHAQgCASIAAAAIgCAFIACgDQgBAPABAPgAkvi2IA2hCQAPgSgBgKIgCg6gAk4jOIAAgCIABgDIgBAFgAmRlUIAbACIgfgTgAmXlrIAYgHIgegEgAA3oKQgXABgTALQgQAKgGARQgFAEAAAGQgDAOAOACIAFgBIABgBIAIgGIATgQIAEgDIAkgKIAEABIAMABIACAAIAAABIADAAIACABQANAJABAPIABgJQgCgEAAgDQABgSgEgQQABgPgDgOQgDgPgJgOQgFgIgJgEIAAAAIgEgCIgBgBIgCABQgKgDgKACQgcABgZAMIgLAFQgGgMgBgMIAAAAQAAgIgFgFQgEgEgGgBIgGABQgEACgCAFQgCAWAKATIAAACQADAFAFAEQAAADACADQAJAMAPgJQAggUAnACQAJALADANQABAJAAAIQgGgCgHAAIgIABgAj+oRIAAAAIAGgIIgGAIgAhvpyIgCAIQgBAEABAGQABAGgCAFIgCABQgFAHgBAIIgBAFQgBAGAGADQANAHAIgLQAFgJAEgKQACgIAAgJQAAgKgFgEIgKgFIgIgEIgFgDgAjMpDIAAABQAMgFANgCQgNACgMAEgAibrAQAHAaAUAUQALAKANAEQAUATAdgCQAagBAPgTQAUgZAPgcIATgiQAKgFABgKIABgPIABgDQAAgLgEgOIAAgBIgBgBQgDgVAAgWQgBgRgFgRIAAgBQgEgOgbAEIgDgCQhBAghIgCIgbA5QAEgGAHgDQgHADgJAOIgBAFQgCAQADAQIAHAmIABAEIABAFIAAAAIAAABgACNsMQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABACgAAJuIIgEAHIAQgLgABcuTIgDAGIACAEIADgSIAAgCIgCAKgAG1oMIAAgBIAAgCIADgBQAQgHADgGIAFgKIAAgCIABgBIAAgEIAAgBIABgBIABgBIAAgDIABgBIABgCIAAAAIABgCIAAAAIAAgBIABgBIAAgCIAAgBIABgBIABAAIAAgBIAAgBIABgBIAAgBIAAAAIAAgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABgBIAAAAIABgBIAAgCIAAgBIABgBIAAgBQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAAAgBIABgBIAKgKIABAAIABAAIABABIABABIgBABIgDADIAAAAIAAAAIgBABIgGAGIgCAGIgBABIAAACIAAABIgBACIAAAAIgBACIAAACQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAIAAABIgEAIIgBACIgBACIAAABIgBAHIgBACIgDAIIgBABIgCAFIgDAEIgBABIgGAGIgBABIAAAAIAAABQgGgBgDACIgDABIgDgBgAg7qqIAJgBIAZgFQALgLAIgOIAJgVIg2AHQgPABgNADIAOAAIAQgDIAOgCIAVgCIAEAAIACAFIAAABQAAADgCAEIgCADIgDAHIgGAGIgFAGIgCACIgBABQgDABgIABQgRAAgMgMIgBgBIgMgLIgDgDIAAgBIAAgCIABgBIgIADIACAHIgBgBIgHgKIADgCQArgKASgCQAVAAARgFIACACIABADIAAACIABADIAAADIgFAFIgEAIIgCADIgCAGQgIALgKAKQgDACgDAAQgOACgOAAIgCgBgAgurOIgRADIgGABIACABIACACIACACIACABIABABQAGAFAGACQAOAFAJgNIACgGIABgBIABgCIABgCQABAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgYADgAgwr8IgLgDIgHgDIgCgBIAAgBIAMADIADABQAGAAAEAEIgFAAgAgdssQACgJAGgCQAVAFgFAMQgIAIgDAAQgNgFAAgJgAgJtdIgFAJIgaARgAgwvDIAAAAgAhMvMQALABAKAFIAHADQgRgHgLgCg");
	this.shape_39.setTransform(191.8,98.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#886000").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_40.setTransform(173.4,32.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#997700").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_41.setTransform(173.4,32.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AA8E00").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_42.setTransform(173.4,32.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BBA400").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_43.setTransform(173.4,32.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CCBB00").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_44.setTransform(173.4,32.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DDD200").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_45.setTransform(173.4,32.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EEE800").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_46.setTransform(173.4,32.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF00").s().p("AlfLjIgDAAIgCgCIgDgBQgMgIgHgPIAAACQgeg7ASg4IAEgSQADgNAKgHIACgBIACgDIABABIACgCIATABIAAgDIAJAEIAIABQAJACAHAHQAQARACAZQAFA4gMA2IgBAEIAAABQgBAFgFADQgLAJgNAAQgIAAgJgEgAkjLGQgEgKACgLQAFgZgBgbIgDgrIAAgJIgCgIIgJgXIAogRIAJgFIALgEQANgCAJACIAFgGQAIALAGALIAAAAIADAGQAPAggFAkQALA8gyAiIgEACIgBAAQgEAHgGAGQgKAFgJAAIgDAAQgGgBgFgDIgJAKIgRAEgADliYQgPgDgIgQQgNgKAAgSQAAgYAKgTIABgEQgKghADghIgUglIgDgBQgGgCgEgFIgBAAQgKgDgJgEQgQAJgQgDIgDAEQgTAHgJgJIgBABIAAgDQgEgFgCgIQgCgJADgHIgBgKIBBhtIAHAAIgEgQIAGgHIgBgkQgFgGgEgGIACgBIADgBIAAgDIAAgCIgBgCIAIABIgNgHQACgPgBgOIAAAAQAAgUgFgSQgBgFgDgEQgDgEgEgCQgFgCgIAAIgMAFIgDAHQgMAUghgCIgDAAIgHgBIgJADIg6ANIgMgEIgBgJIgHADQgJAEgJgBIgBACIAGAKIgPAvIgaAjIAWgLIgFANIAFAgIAHAIIgDAUIAKAKIAAABIgBAAIgBgCIACAHIgCASIANAUIgCAIIAIAIIABABIABgBIACgEIAQAUIgfAuQgfgFgZAJIAAAAIgBgBIgBAAQgHAAgGAEQgNAJgKANIgIALQgQATgNAXQgZAtgbAtIgBACIAAACIABAAIABAAIgaA9IgMADIgFAFIgcgCIgDgRIAWgNIgYAHIgHgLQg1ASgggsIgBAAIAAgEQAAgTgEgRIAUgvQAKgXAZgJIAVAKQgLgVgIgXQgMgiATggIAHgFIACgKIANgEIABgLIBQggIABABQALgEAKAAQAKAAAHACIAAgDIgdgbQgIgnAegYQAMgdAhACIANgCIAOgGIAGAJIAGADIgCgLIAIAFIAHgFIAVACIgLgFQgHADgJAAQgjgDgGggQgJgPAIgWQASguAyABQAEgQATgLQANgGAMgBIAKgBQAJgNATAAQANgBAJADIAIADQAKACALAEIACAAIACAAIAJgBIAMgCIABAAIANADQAIADAFAEQAXgMAbAEIAJgCQAbAFAGARIAHANIgGAIIAAgCIgDAKIgCAGIABAEIgJAXIgYAcQAAAPANgNQAEgFAGgDQAhgTAfAQIgCAHQAdADgGAgQgEAZgVAOIABACQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAHgEAHgFQAYgFAYABIARAEIADADQAIAFAGAHIgZAfIAbgbQAKAtglAjQAUgPAWgDQAJgHALABQA0AAgBAyQAAAGgEAGQgKAPgOALQgTAggiASIAggJIAZAQIgCA1QgrA3hGgKIAAABQA1ANAtghIAGgEIgBALQgTAhgjAOIAFADIgsA0IghAAIAfAFIgvAtg");
	this.shape_47.setTransform(182.9,75.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFEB00").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_48.setTransform(173.4,32.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFD600").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_49.setTransform(173.4,32.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFC200").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_50.setTransform(173.4,32.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFAD00").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_51.setTransform(173.4,32.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF9900").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_52.setTransform(173.4,32.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF8500").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_53.setTransform(173.4,32.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF7000").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_54.setTransform(173.4,32.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF5C00").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_55.setTransform(173.4,32.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF4700").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_56.setTransform(173.4,32.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF3300").s().p("ADlEMQgPgEgIgQQgNgKAAgSQAAgYAKgTIABgEQgKggADghIgUgmIgDAAQgGgCgEgFIgBgBQgKgCgJgFQgQAJgQgCIgDADQgTAHgJgJIgBABIAAgCQgEgFgCgIQgCgKADgHIgBgJIBBhtIAHAAIgEgPIAGgHIgBglQgFgFgEgGIACgCIADgBIAAgCIAAgCIgBgCIAIAAIgNgHQACgOgBgOIAAgBQAAgTgFgSQgBgGgDgDQgDgFgEgCQgFgCgIABIgMAEIgDAIQgMAUghgCIgDAAIgHgBIgJADIg6AMIgMgEIgBgIIgHACQgJAEgJgBIgBACIAGALIgPAuIgaAjIAWgKIgFAMIAFAhIAHAHIgDAUIAKAKIAAABIgBAAIgBgBIACAHIgCARIANAVIgCAHIAIAIIABAAIABAAIACgEIAQAUIgfAtQgfgFgZAKIAAAAIgBgBIgBgBQgHABgGADQgNAJgKAOIgIALQgQATgNAWQgZAugbAsIgBADIAAABIABAAIABAAIgaA+IgMACIgFAGIgcgDIgDgQIAWgNIgYAGIgHgKQg1ARgggrIgBgBIAAgDQAAgTgEgSIAUguQAKgXAZgKIAVALQgLgVgIgYQgMgiATggIAHgEIACgKIANgFIABgKIBQggIABACQALgFAKAAQAKABAHACIAAgEIgdgaQgIgnAegZQAMgcAhACIANgCIAOgGIAGAJIAGACIgCgKIAIAEIAHgEIAVABIgLgEQgHADgJgBQgjgCgGghQgJgOAIgXQASguAyACQAEgRATgKQANgHAMAAIAKgCQAJgNATAAQANgBAJADIAIAEQAKABALAFIACAAIACAAIAJgBIAMgCIABAAIANACQAIADAFAFQAXgMAbADIAJgBQAbAEAGARIAHAOIgGAHIAAgBIgDAJIgCAGIABAEIgJAYIgYAcQAAAPANgOQAEgEAGgEQAhgTAfARIgCAGQAdAEgGAfQgEAZgVAOIABADQAAAAAAAAQABAAAAABQAAAAAAgBQABAAAAAAQAHgDAHgGQAYgEAYAAIARAFIADACQAIAGAGAHIgZAfIAbgbQAKAtglAiQAUgOAWgEQAJgGALABQA0gBgBAyQAAAHgEAEQgKAQgOAKQgTAhgiARIAggJIAZARIgCA0QgrA3hGgJIAAAAQA1AOAtghIAGgFIgBAMQgTAggjAOIAFAEIgsAzIghABIAfAFIgvAsg");
	this.shape_57.setTransform(182.9,33.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F03300").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_58.setTransform(173.4,32.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E03300").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_59.setTransform(173.4,32.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D13300").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_60.setTransform(173.4,32.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C23300").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_61.setTransform(173.4,32.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B33300").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_62.setTransform(173.4,32.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A33300").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_63.setTransform(173.4,32.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#943300").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_64.setTransform(173.4,32.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#853300").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_65.setTransform(173.4,32.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#753300").s().p("AjZFBIgEgQIAfATgAjlEgIAfAEIgYAGgAlHDJQAHgUANgRIAFgGQAJgDAIgJQAGgHADgIIAAgBIABgBQAEgDABgFIAAAAIABAAIgBgBQAEghgBgjIABgHQAEgFAGgEQAJgHADgLIADgPIABgEIBWgmIgIgKIALgoIgJAQQACgNAIgHQAkgkAogfQgRggANgfQATgwA0gOQALgDALgGIAQgIIAJgFIAIgDQA5gcA3AjIgBAAIgMACIgJABIgCAAIgHgEQgLgEgKgCIgDAAQgJgDgOABQgTABgJAMIgKACQgNAAgMAHQgTALgEAQQgygCgRAuQgIAXAJAPQAFAgAjACQAKABAHgDIALAEIgVgBIgHAEIgIgEIACALIgGgDIgGgJIgOAGIgOACQgggCgNAcQgdAZAIAnIAdAeQgIgCgJgBIgDAAQgJAAgKADIhQAgIgBAKIgNAFIgCAKIgHAEQgTAgAMAiIAAACQAIAWgLAKQgYAKgLAXIgTAuQgDgKgFgKgAgUBTQAMgFAMgBQgMABgMAFgAFGh1IgBgDQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIAAAAIgBAAgADBjyIAMgEIgPAMIADgIgAERj2IADgHIADgJIAAABIgEASIgCgDgACFksIgDgCIAGACIgDAAg");
	this.shape_66.setTransform(173.4,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_14},{t:this.shape_15},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},10).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_40},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_41},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_42},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_43},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_44},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_45},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_46},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_17},{t:this.shape_18},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_47},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_23},{t:this.shape_47},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_14},{t:this.shape_15},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},10).to({state:[{t:this.shape_39},{t:this.shape_48},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_49},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_50},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_51},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_52},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_53},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_54},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_55},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_56},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_17},{t:this.shape_18},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_57}]},1).to({state:[{t:this.shape_23},{t:this.shape_57},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_14},{t:this.shape_15},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},10).to({state:[{t:this.shape_39},{t:this.shape_58},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_59},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_60},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_61},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_62},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_63},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_64},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_65},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_66},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_14},{t:this.shape_15},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140.6,0,101.7,196.3);


(lib.content_subj_mood_ab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{content_subj_moodab_restart:66});

	// timeline functions:
	this.frame_397 = function() {
		this.gotoAndPlay("content_subj_moodab_restart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(397).call(this.frame_397).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALAeQgCgDAAgDIABgmIABgLQACgGAGAAQAEAAACADQADACAAAEIAAAEIgBAEIgBAlQAAAJgIAAQgEAAgDgCgAgbAPIAAgSIABgUQAAgDACgDQADgCADAAQAEAAADACQACADAAADIAAATIgBASIABAFIAAAEQAAAEgCACQgDADgEAAQgJAAAAgRg");
	this.shape.setTransform(411.5,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_1.setTransform(405.2,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqBLQgJgIAAggIAAgOIABgQIgBgEQAAgDABgDIACgpIgBgLIgBgKQAAgMAKAAQAFAAACADIAWgEIATgCQAYAAAOAFQAHADAAAHQAAAEgDACQgDAEgEAAIgDgBQgRgEgPAAIgQABIgVAFIABAKIgCAmIAqgFIAYgCQADAAADADQAEADAAAEQgBAIgIABIgYADIgsADIgBANIAAAMQAAAVADAFQADACAMAAIASAAIASAAIAGgBIAFAAQALAAAAAKQAAAHgIADQgKABgdAAQgeAAgJgIg");
	this.shape_2.setTransform(396.7,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgxBKQgDgDAAgEIgBgXIAAgXIACgaIACgbIgBgPIgBgOQAAgGADgEQAEgFAGAAIAYACQANACAIAFQAoAVAAAeQAAAPgOAKQgLAJgQAFQAfAQAPATQACADAAADQAAAEgDADQgDADgEAAQgDAAgEgDQgggggngLIABATIABAUQAAAEgDADQgDADgEAAQgEAAgDgDgAgegrIAAAMIgBATIgCATIAEAAIAEAAQAZAAAMgHQAFgCAFgFQAFgFAAgEQAAgOgPgLQgNgLgQgCIgOgBg");
	this.shape_3.setTransform(384.1,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgqBLQgKgIABggIAAgOIABgQIgBgEQAAgDACgDIABgpIAAgLIgBgKQgBgMALAAQADAAAEADIAVgEIATgCQAYAAAOAFQAGADAAAHQABAEgDACQgDAEgEAAIgDgBQgRgEgPAAIgRABIgUAFIABAKIgCAmIAqgFIAXgCQAFAAACADQADADAAAEQAAAIgJABIgXADIgsADIAAANIgBAMQAAAVADAFQACACAOAAIARAAIASAAIAGgBIAFAAQALAAAAAKQAAAHgJADQgIABgeAAQgeAAgJgIg");
	this.shape_4.setTransform(371.6,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWBNQgEgDAAgFQgFgLgBgIIgHgqIgGgpQgIAggKAVQgMAagEAPIABAEQABAFgEADQgDACgFAAQgOAAAAgMIgDgMIgKgwQgGgXgPgtIgCgEQAAgJALAAQAGAAAEAHIAGAUQAHASAFAYIAKArQAKgZAKghIAKgeQAJgVAHAAQAHAAADAHQADAIAEAgIAHAlIAIAmQANgfAUg1IAFgSQACgLAFgHQADgFAGAAQAKAAAAAKIgEAJIgDALIgGARIgdBGIgNAiQgEAGgHAAQgEAAgEgCg");
	this.shape_5.setTransform(355.1,8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAeQgCgDAAgDIABgmIABgLQACgGAGAAQAEAAACADQADACAAAEIAAAEIgBAEIgBAlQAAAJgIAAQgEAAgDgCgAgbAPIAAgSIABgUQAAgDACgDQADgCADAAQAEAAADACQACADAAADIAAATIgBASIABAFIAAAEQAAAEgCACQgDADgEAAQgJAAAAgRg");
	this.shape_6.setTransform(339.6,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgPQAOgPAVAAQALgBAGAEIAKAHIADg3QABgJAIAAQAJAAAAAKQAAANgEAuIgBAcQAAAhADAQIAAACQAAAEgDADQgDACgDAAQgGAAgDgJQgHAGgIACQgHADgIAAQgUAAgNgOgAgWACQgIAJAAAUQAAAMAJAJQAIAJAMAAQAIAAAFgDQAEgBAHgHIADgCIAAgRIAAgMIAAgMQgEgHgGgDQgGgEgJAAQgPAAgIAJg");
	this.shape_7.setTransform(323.9,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQgBAMgIAAQgJAAAAgJIAAgHIAAgIQgQABgIAHQgJAHgGAMIAAA1QABAKgLAAQgIAAAAgKg");
	this.shape_8.setTransform(313.6,10.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_9.setTransform(303.1,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgEAFQgCAGgHAAQgHAAgIgdQgDgPgDgZIgDgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIACAPIAFArQALgdAMgoQADgLAHAAQAHAAADANIAHAjIAHAlIAHgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgCAJgHAKQgDAFgGAAQgLgBgGgag");
	this.shape_10.setTransform(291.2,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_11.setTransform(273,10.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_12.setTransform(261.7,8.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFBFQgDgDgBgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgEQADgCAEAAIAUABIAAgNIAAgMQAAgEACgCQAEgEADAAQAJAAABAPIAAAJIAAAGIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgDADgEAAIgGgBIgEAAIgOACIADA5IAAAEIAAAFQAAAWgKgBQgEAAgCgCg");
	this.shape_13.setTransform(251.1,9.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_14.setTransform(235.2,8.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_15.setTransform(224.9,11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_16.setTransform(208.5,10.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbA2QgPgFAAgKQABgEADgDQACgDAFAAQADAAAEAFQADACAIACIALABQAHAAAGgCQAJgDAAgGQAAgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQAAgVATgJIATgGQANgDAFgDQAEgCAFAAQAEAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgFAAgCgEQgCgDgBgIIgXAHQgPAGAAAKIAGABQAWAEALAHQAQAKAAATQAAAQgOAIQgLAHgRAAQgNAAgMgFg");
	this.shape_17.setTransform(197.7,10.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWAuQgMAHgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgQQABgJAIAAQAEAAADACQADADAAAEIgBAPIgCAPIABAbQABAMACAGIAHADIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgJAJABQAEAAADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgKg");
	this.shape_18.setTransform(187.9,11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_19.setTransform(171.4,10.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_20.setTransform(160.1,8.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFBFQgDgDAAgEIAAgLIAAgLIgCg4IgWgCQgIgBAAgJQAAgDACgEQADgCAEAAIAUABIAAgNIAAgMQAAgEADgCQADgEADAAQAJAAABAPIAAAJIAAAGIAAAFIANgBQALAAADABQAGABAAAIQAAAEgCADQgEADgEAAIgEgBIgGAAIgMACIACA5IAAAEIAAAFQAAAWgKgBQgEAAgCgCg");
	this.shape_21.setTransform(149.5,9.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_22.setTransform(133.4,11);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFBFQgEgDAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgEQADgCAEAAIAUABIAAgNIAAgMQAAgEACgCQAEgEADAAQAJAAABAPIAAAJIAAAGIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgEADgDAAIgGgBIgEAAIgOACIADA5IAAAEIAAAFQAAAWgLgBQgDAAgCgCg");
	this.shape_23.setTransform(123.7,9.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbA2QgOgFAAgKQAAgEADgDQACgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQAAgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAACADQADADAAAEIACAIIAAAJQAAAEgCADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEALAHQAQAKAAATQAAAQgOAIQgLAHgRAAQgNAAgMgFg");
	this.shape_24.setTransform(107.8,10.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_25.setTransform(97.9,10.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgIBHQgEgDAAgFIAAgRIAAgRIABgXIABgWQAAgEADgDQADgDADAAQAEAAACADQADADAAAEIgBAWIgBAXIAAARIABARQAAAFgDADQgDADgDAAQgEAAgCgDgAgFg1QgEgEAAgEQAAgFAEgDQADgDAEgBQAEABAEADQADADAAAFQAAAEgDAEQgEADgEABQgEgBgDgDg");
	this.shape_26.setTransform(89.7,8.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgKBGIABgjIABgjIAAgiIABgkQAAgKAIABQAKgBAAAKIAAAkIgBAiIgBAxIgBAWQgBAKgIgBQgJAAAAgKg");
	this.shape_27.setTransform(83.9,8.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AglBPQgDgCAAgFIAAgmIAAgmQAAgWgBgSIgCgUQABgGACgFQADgGAFAAQAFAAACADQADADgBADIAAADIgBAGQAJgGAIgDQAHgCAHAAQAUgBAJATQAIANAAAYQAAAUgMAOQgMAOgUAAQgIAAgNgDIAAAuQAAAFgCACQgDADgEAAQgEAAgDgDgAgIgzQgGADgIAIQACAWAAAXQALAFAJgBQAMAAAHgJQAFgHABgMQAAgSgFgJQgFgIgIAAQgIgBgHAEg");
	this.shape_28.setTransform(75.9,13.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AglBPQgDgCAAgFIAAgmIAAgmQAAgWgBgSIgCgUQABgGACgFQADgGAFAAQAEAAADADQACADAAADIAAADIgBAGQAJgGAIgDQAHgCAHAAQAUgBAJATQAIANAAAYQAAAUgMAOQgMAOgUAAQgJAAgLgDIAAAuQAAAFgDACQgDADgEAAQgEAAgDgDgAgIgzQgFADgJAIQACAWAAAXQALAFAJgBQANAAAFgJQAGgHABgMQAAgSgFgJQgFgIgIAAQgIgBgHAEg");
	this.shape_29.setTransform(65.2,13.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAIAAALAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAKgIQgDgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_30.setTransform(54.7,11);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009900").s().p("AgNAaQAAgFAEgEQAFgDAEAAQAPAAAAAWQAAAGgEAEQgEADgGAAQgOAAAAgXgAgJgTQgEgEAAgGIgBgDIAAgDQAAgGAEgDQAEgEAGAAQANAAAAATQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_31.setTransform(36.6,9.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009900").s().p("AgQBMQgSAAAAgMQAAgNAUABIAFAAIAAhWQgJAFgCABQgGAAgEgFQgEgDAAgGQAAgEAHgHIALgIIAMgJQAGgFAHAAQAJAAAAALIgBAgIgBA7IAAAYIAGAAQAGAAAEADQADAEAAAFQAAAGgDADQgEAEgGAAg");
	this.shape_32.setTransform(25.8,8.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009900").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgWAAgQgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_33.setTransform(5.6,10.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009900").s().p("AgIBNQgEgEgBgGIAAiGQABgGAEgDQAEgDAEAAQAGAAAEADQADADAAAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_34.setTransform(-2.7,8.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009900").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_35.setTransform(-10.7,11);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#009900").s().p("Ag0BJQgFgEAAgGIAAgVIABgWIAAhOQAAgHAEgFQAFgGAIAAIAZACQANACAJAFQAqAVAAAfQAAAMgJAJQgJAKgRAHQAaAOANAPQADAEAAAFQAAAGgEAEQgEADgGAAQgFAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgFAAgEgEgAgeADIAFAAQAXAAALgFQAFgDAFgEQADgEAAgCQABgLgOgKQgMgKgPgBIgMgBg");
	this.shape_36.setTransform(-21.9,8.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgEAqQgDgDAAgEIAAgFIgBgEQAAgEADgDQADgCACAAQAKAAAAASQAAAEgCADQgDACgEAAQgDAAgCgCgAgGgVQgCgDAAgEIgBgDIAAgEQAAgDACgDQADgCAEAAQAJAAAAAPQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_37.setTransform(393.8,71.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEAAQADAAAEAFQACACAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_38.setTransform(386.6,72.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAPIgBAJIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAADgDADQgCACgEAAQgIAAgBgIg");
	this.shape_39.setTransform(378,72.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZAmQgMgNgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAAMQAAANAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUAAQgMgBgHANg");
	this.shape_40.setTransform(368.1,72.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIAAgQIgBgQIABgUIABgTQAAgEACgDQADgCAEAAQADAAACACQACADAAAEIAAATIgCAUIABAQIAAAQQAAAEgDACQgCADgCAAQgFAAgBgDgAgFgwQgDgCAAgFQAAgEADgDQAEgDADAAQADAAAEADQADADAAAEQAAAFgDACQgEADgDAAQgDAAgEgDg");
	this.shape_41.setTransform(361.2,70.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgKQAAgEADgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgDACQgCADgDAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_42.setTransform(354.3,71.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgGACgDAAQgVAAgJgLQgJgLAAgXQAAgUAOgPQAPgPATAAQAIAAAJAEQAMAFAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAABQAAAEgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAHAKAAQAIAAAGgDIAJgHQgDgWAAgMIAAgIIACgJIgGgDIgEAAQgMAAgKALg");
	this.shape_43.setTransform(345.4,72.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape_44.setTransform(336.2,72.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgKQgBgEADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgCADgFAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgDgCg");
	this.shape_45.setTransform(327.2,71.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgIA/QgCgCAAgEIAAgQIgBgQIABgUIABgTQAAgEACgDQADgCADAAQADAAADACQACADAAAEIgBATIAAAUIAAAQIAAAQQAAAEgCACQgCADgEAAQgEAAgCgDgAgFgwQgDgCAAgFQAAgEADgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDACQgEADgEAAQgDAAgDgDg");
	this.shape_46.setTransform(320.7,70.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEAAQADAAAEAFQACACAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_47.setTransform(313.3,72.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgeBEQgLgCAAgHQAAgIAHAAIAMACQAHABAIAAQARAAAGgQQAEgLAAgWQgFAJgGAEQgGAEgIAAQgQAAgJgKQgKgLAAgRQAAgXANgPQAOgPAXAAQAIAAAGACQAGACADAFQAJAAAAAKIgCARIgDAQIgCAdQAAARgDAMQgEAOgJAHQgLAIgSAAQgMAAgIgCgAgQgrQgHAKgBAQQAAANAFAFQAFAHAKAAQAHAAAJgJQAIgJAAgKIAFgdQgEgDgEgBQgEgCgEAAQgPAAgKAMg");
	this.shape_48.setTransform(299,75.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAPIgBAJIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAADgDADQgCACgEAAQgIAAgBgIg");
	this.shape_49.setTransform(289.8,72.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgIA/QgCgCAAgEIAAgQIgBgQIABgUIABgTQAAgEACgDQADgCAEAAQADAAACACQACADAAAEIAAATIgBAUIAAAQIAAAQQAAAEgDACQgCADgCAAQgFAAgCgDgAgFgwQgDgCAAgFQAAgEADgDQAEgDACAAQAEAAAEADQADADAAAEQAAAFgDACQgEADgEAAQgCAAgEgDg");
	this.shape_50.setTransform(282.6,70.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAGAaIgEgVIgCgTIgHAQIgNAkQgBAEgDACQgCAFgHAAQgGAAgGgaQgDgOgEgWIgCgNIgBgOQAAgDADgDQACgCAEAAQAHAAACAHIABANIABANIAGAmQAKgaAKgjQADgKAGAAQAHAAACALIAGAgIAHAhIAGgYIALgvQACgFAFAAQAEAAADADQADACAAAEIgBAEQgHAcgLAjQgDAIgFAJQgDAEgGAAQgJAAgFgXg");
	this.shape_51.setTransform(273.8,72.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgZAmQgMgNgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAAMQAAANAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUAAQgMgBgHANg");
	this.shape_52.setTransform(262.7,72.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgJBAIABggIAAggIABgfIAAggQAAgJAIAAQAJAAAAAJIgBAgIAAAfIgBArIgBAVQgBAJgGAAQgJAAAAgJg");
	this.shape_53.setTransform(255.7,70.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgJBAIABggIABggIAAgfIABggQAAgJAHAAQAJAAAAAJIAAAgIgBAfIgCArIAAAVQgBAJgHAAQgIAAAAgJg");
	this.shape_54.setTransform(250.8,70.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgZAmQgMgNgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAAMQAAANAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUAAQgMgBgHANg");
	this.shape_55.setTransform(243.3,72.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgOBLQgCgCAAgEIAAgCQACgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAQgBIAIAAIABgNQADgUAHgJQAIgLAUAAQAMAAAAAIQAAAJgLAAQgWAAgCAdIgBAGIAUgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIAAAQIABAQQAAARgCAJQgBAHgGAAQgEAAgDgCg");
	this.shape_56.setTransform(234.1,70.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_57.setTransform(219.5,72.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgCAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAACAIIABAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_58.setTransform(209.3,70.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgKQgBgEADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgJAAQgDAAgDgCg");
	this.shape_59.setTransform(199.8,71.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAPIgBAJIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAADgDADQgCACgEAAQgIAAgBgIg");
	this.shape_60.setTransform(185.7,72.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIgBgQIAAgQIABgUIABgTQAAgEADgDQACgCAEAAQADAAACACQACADAAAEIgBATIgBAUIABAQIAAAQQAAAEgDACQgBADgEAAQgEAAgBgDgAgFgwQgDgCAAgFQAAgEADgDQAEgDADAAQADAAAEADQADADAAAEQAAAFgDACQgEADgDAAQgDAAgEgDg");
	this.shape_61.setTransform(178.4,70.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgWBYQgDgDAAgDQABgDAEgFIAJgGQATgVAAgtQAAgQgEgSQgGgVgJgKIgIgIQgGgHAAgCQAAgDADgDQACgCADgBQACABAEACQARAMAKAbQAJAYAAAXQABBCgkAWQgEACgDAAQgDAAgCgCg");
	this.shape_62.setTransform(167.2,72);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAFAXQgCgCAAgDQAAgKAJgbQACgGAFAAQADAAADADQADACAAADIgGATIgDAQQgBAIgHAAQgDAAgDgDgAgYAXQgDgCAAgDQAAgKAJgbQACgGAFAAQAEAAADADQACACAAADIgFATIgDAQQgBAIgHAAQgDAAgDgDg");
	this.shape_63.setTransform(160.2,65.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgiA9QgRgIAAgNQAAgDADgDQACgCAEAAQAEAAADAEQAFAIADABQAIAGAOAAQANgBALgFQAPgIAAgNQAAgLgMgHQgLgFgOgBQgOAAgKgFQgNgHAAgNQAAgQASgNQARgMARAAQAJAAALADQAOAEAAAFQAAAJgIgBIgMgBIgOgCQgNAAgJAGQgKAHAAAKQAAAHANADQAFACANABQAUABALALQAKAJAAAPQAAAVgTAMQgRALgVAAQgQAAgNgGg");
	this.shape_64.setTransform(150.5,70.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AAfAuQgDgIgDgUIgYAEIgWAFQgEAMgLAWQgDAFgFAAQgDAAgDgDQgDgCAAgEQAAgEAOgcQgCgCAAgDQAAgIAJgCIAZgqQAUghAFAAQAHAAACAKIAGAdIANA8IAFAOIADAKQAAADgDADQgDACgDAAQgIAAgGgUgAgLAGIAggGIgHghg");
	this.shape_65.setTransform(137.5,70.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AAUBFQgEgDAAgEQgEgKAAgHIgIgmQgEgWgBgPQgIAdgIATQgKAYgEANIABAEQAAAEgDACQgDADgEAAQgMAAAAgLIgDgLIgKgrIgTg+IgBgDQAAgIAJAAQAGAAADAGIAHASQAFAQAFAWIAJAmQAJgWAJgeIAJgaQAIgUAHAAQAFAAADAHQADAHADAdQACAOAEATIAIAjQAMgdARgvIAFgQQADgLADgFQADgFAFAAQAJAAAAAJIgCAIIgEAKIgFAPIgaA/IgMAeQgEAGgGAAQgEAAgDgCg");
	this.shape_66.setTransform(122.1,70.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AALARIgKgfQAAgEADgCQACgCAEAAQAGAAABAGIAGAQIADAPQAAADgCADQgCACgEAAQgGAAgBgGgAgQASIgFgQIgEgOQAAgDADgDQACgCADAAQAGAAACAGIAEAPIAEAOQAAADgCACQgDADgDAAQgFAAgCgFg");
	this.shape_67.setTransform(108.4,65.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAPIgBAJIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAADgDADQgCACgEAAQgIAAgBgIg");
	this.shape_68.setTransform(95.3,72.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgGACgDAAQgVAAgJgLQgJgLAAgXQAAgUAOgPQAPgPATAAQAIAAAJAEQAMAFAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAABQAAAEgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAHAKAAQAIAAAGgDIAJgHQgDgWAAgMIAAgIIACgJIgGgDIgEAAQgMAAgKALg");
	this.shape_69.setTransform(85.8,72.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgEAAQgEAAgDgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQABgDACgDQADgCADAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAJgFQAHgFAJAAQAOAAAGAKQAEAGAAAPIABARIACASIADASIAAADQAAADgCADQgDACgEAAQgGAAgCgGg");
	this.shape_70.setTransform(76.1,70.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIABgKIgDgyIgTgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgKQABgEACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgDACQgCADgDAAIgFAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_71.setTransform(66.5,71.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_72.setTransform(52.8,72.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_73.setTransform(43.5,72.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgCAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAACAIIABAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_74.setTransform(33.4,70.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgKQgBgEADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgJAAQgDAAgDgCg");
	this.shape_75.setTransform(23.8,71.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgGACgDAAQgVAAgJgLQgJgLAAgXQAAgUAOgPQAPgPATAAQAIAAAJAEQAMAFAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAABQAAAEgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAHAKAAQAIAAAGgDIAJgHQgDgWAAgMIAAgIIACgJIgGgDIgEAAQgMAAgKALg");
	this.shape_76.setTransform(15,72.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_77.setTransform(6.3,72.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAFAXQgCgCAAgDQAAgKAIgbQADgGAFAAQAEAAACADQACACABADIgGATIgDAQQgBAIgHAAQgEAAgCgDgAgYAXQgCgCAAgDQgBgKAJgbQACgGAFAAQAEAAACADQADACAAADIgFATIgDAQQgBAIgHAAQgDAAgDgDg");
	this.shape_78.setTransform(408.4,38.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCACgDIABglIAAgKIgBgJQgBgLAKAAQADAAACADIAVgEIAQgCQAWAAAMAFQAGADAAAGQAAADgCADQgDADgEAAIgCAAQgPgFgOAAIgOACQgJABgKADIABAJIgBAhIAlgDIAUgCQAEAAADACQADADAAAEQAAAHgJABIgUACIgoADIAAAMIAAALQAAATACAEQACACAMAAIAPAAIARgBIAFAAIAFgBQAJAAAAAJQAAAIgHABQgJACgaAAQgbAAgIgHg");
	this.shape_79.setTransform(399.5,43);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_80.setTransform(388.1,43);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIgBgKIgBgJQABgLAIAAQAEAAADADIATgEIARgCQAVAAANAFQAGADAAAGQAAADgCADQgCADgEAAIgDAAQgPgFgOAAIgPACQgIABgKADIABAJIgCAhIAmgDIAVgCQAEAAACACQADADAAAEQAAAHgIABIgVACIgoADIgBAMIAAALQABATACAEQACACAMAAIAQAAIAQgBIAFAAIAFgBQAKAAAAAJQAAAIgIABQgIACgbAAQgbAAgIgHg");
	this.shape_81.setTransform(376.9,43);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AAUBFQgDgDAAgEQgFgKgBgHIgHgmQgEgWAAgPQgJAdgIATQgLAYgDANIABAEQAAAEgDACQgEADgEAAQgMAAABgLIgDgLIgKgrIgTg+IgBgDQAAgIAJAAQAGAAADAGIAHASQAFAQAFAWIAIAmQAKgWAJgeIAJgaQAIgUAHAAQAFAAADAHQADAHADAdQACAOAEATIAIAjQAMgdARgvIAFgQQADgLADgFQADgFAFAAQAJAAAAAJIgCAIIgEAKIgFAPIgaA/IgMAeQgDAGgHAAQgEAAgDgCg");
	this.shape_82.setTransform(362,43.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AALARIgKgfQAAgEADgCQACgCAEAAQAGAAABAGIAGAQIADAPQAAADgCADQgCACgEAAQgGAAgBgGgAgQASIgFgQIgEgOQAAgDADgDQACgCADAAQAGAAACAGIAEAPIAEAOQAAADgCACQgDADgDAAQgFAAgCgFg");
	this.shape_83.setTransform(348.4,37.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgpBEQgCgEAAgDIAAgbIABgiIACglQAAgHABgRQAAgEADgBQALgEAQAAQAOAAAPAKQAQAMAAATQAAAWgRAMQANAGAGAGQAHAIAAAIQAAAKgMAKQgIAHgIADQgTAIgfAAQgEAAgEgDgAgaAjIAAASQAWAAAOgHQAGgCAGgEQAFgGABgBQAAgFgMgFQgJgEgHgCIgIgBIgEAAIgDAAIgLgBIAAAUgAgXg0IAAAQIgBAiIANABQAMgBAJgIQAIgHABgMQgBgJgIgHQgKgHgJAAIgOAAg");
	this.shape_84.setTransform(334.6,42.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_85.setTransform(323,43);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCACgDIABglIAAgKIgBgJQgBgLAKAAQADAAADADIAUgEIAQgCQAWAAAMAFQAGADAAAGQAAADgCADQgDADgEAAIgCAAQgPgFgOAAIgPACQgIABgKADIABAJIgBAhIAlgDIAUgCQAEAAADACQADADAAAEQAAAHgIABIgVACIgoADIAAAMIAAALQAAATACAEQADACALAAIAPAAIARgBIAFAAIAFgBQAJAAAAAJQABAIgIABQgJACgaAAQgbAAgIgHg");
	this.shape_86.setTransform(311.8,43);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgPBAQgLgagNgyIgHgYQgFgSAAgGQAAgEADgCQADgCADAAQAHgBACAIIADAPIAJAeQAIAgAIAXIABgBIAWg/IAHgWQAGgMAFgHQADgEAEAAQAEAAACADQADADAAADQAAADgCACQgFAIgEAJIgHAUIgXA/IgJAWQgDAFgEAAQgIAAgCgHg");
	this.shape_87.setTransform(300.6,43.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_88.setTransform(284,45.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIABgHQgBgPgIAAQgLAAgIAJQgEAFgIAPQAAAhgDAGQgDAGgFAAQgEAAgCgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgCgJQAAgDADgDQACgCAEAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAIgJAHgFQAIgFAJAAQAOAAAGAKQAEAGABAPIAAARIACASIADASIAAADQAAADgDADQgCACgEAAQgGAAgCgGg");
	this.shape_89.setTransform(273.9,42.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgKQABgEACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgDACQgBADgFAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_90.setTransform(264.3,43.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AALBXQgjgUgBhDQAAgXAKgYQALgbAQgMQADgDADAAQADAAADADQACACAAADQgBAEgFAFIgIAIQgJAMgFAUQgFASAAARQAAAsATAVIAIAHQAGADAAAFQAAACgCACQgDACgDAAIgHgCg");
	this.shape_91.setTransform(257,44.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgbBGQgKgCgEgDIgCAAQgEAAgCgDQgDgCAAgEIACgcIABgcIgBgeIAAgeQAAgEADgEQAEgEAEAAIANAGIAQAIQAYAIASASQAVAUgBAZQABAPgIANQgGAOgNAJQgNAIgZABQgGgBgJgCgAgggXIAAAYIgCAwIADABQAHAFAMAAQATAAAJgGQAIgGAGgKQAEgKAAgKQAAgYgbgSQgIgFgggPg");
	this.shape_92.setTransform(241.9,43.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgsA2QgSgQAAgZQAAgdASgZQAUgbAeAAQAdAAAOANQAOANAAAdQAAAegRAYQgTAcgdAAQgYAAgSgPgAgegdQgOAUAAAWQAAARANALQAMAKARAAQAVAAAOgVQAMgUAAgXQAAgVgKgIQgIgIgVAAQgVAAgPAVg");
	this.shape_93.setTransform(228,43.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgsA2QgSgQAAgZQAAgdASgZQAUgbAeAAQAdAAAOANQAOANAAAdQAAAegRAYQgTAcgcAAQgZAAgSgPgAgegdQgOAUAAAWQAAARANALQAMAKASAAQAUAAAOgVQAMgUAAgXQAAgVgKgIQgIgIgVAAQgVAAgPAVg");
	this.shape_94.setTransform(213.6,43.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AA2BCQgCgEgDgKIgDgPQgDgOgJgvIgRA0IgFARIgHAQQgEAHgEAAQgGAAgDgGIgDgJIgDgKQgJgfgGgjIgEAQIgLAtQAAAJgEAQQgDAGgGAAQgEAAgDgDQgCgCAAgEQAAgPAGgVIAJgjIAGgbQADgUAFgGQAEgFAFAAQAFAAADAHQADAIAFAYQAEAdAKAgQAMghAKgkIACgNQACgIACgFQADgGAGAAQAIAAAEAPIADAUQAFAnAJAcIAEAPIADAPQAAAEgDACQgDADgDAAQgFAAgDgFg");
	this.shape_95.setTransform(198.5,43.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIgBgKIgBgJQAAgLAJAAQAEAAADADIATgEIARgCQAVAAANAFQAGADAAAGQAAADgCADQgDADgEAAIgCAAQgPgFgOAAIgPACQgIABgKADIABAJIgCAhIAmgDIAVgCQAEAAACACQADADAAAEQAAAHgIABIgVACIgoADIAAAMIAAALQgBATADAEQACACAMAAIAQAAIAQgBIAFAAIAFgBQAKAAAAAJQAAAIgIABQgIACgbAAQgbAAgIgHg");
	this.shape_96.setTransform(179.7,43);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgPBAQgKgagOgyIgGgYQgGgSAAgGQAAgEADgCQACgCAEAAQAHgBACAIIADAPIAIAeQAJAgAIAXIAAgBIAXg/IAIgWQAFgMAFgHQADgEAEAAQADAAADADQADADAAADQAAADgCACQgFAIgEAJIgGAUIgYA/IgJAWQgDAFgFAAQgGAAgDgHg");
	this.shape_97.setTransform(168.5,43.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQADAAADACQADADAAAEQAAAEgDACQgDADgDAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_98.setTransform(157.2,43.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgFBAQgDgCAAgEIAAgEIABgEIgBgNIAAgNIgCgiIgDgjIgIAAQgTAAgLgDQgHgCAAgHQAAgDACgDQADgDAEAAIAOACIAOABIAQAAIAPgBIAUABIAUABQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAIgUgBIgUgBIgGAAQAAAMADAcIABAmIABAJIABAKQAAAGgCAEQgDAGgFAAQgCAAgDgDg");
	this.shape_99.setTransform(146.9,43);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgkA2QgMgNAAgTQAAgcAZggQAVgaAUAAIAIAAIAGABQADgEAFAAQAGAAACAIIABASQAAADgCADQgCAEgFAAQgFAAgDgHQgDgGgCgBQgCgBgHAAQgNAAgOATQgVAaAAAXQAAALAHAJQAIAIAKAAQAIAAAJgFIAQgKQAFgEACABQAEAAADACQACADAAAEQAAADgDAEQgXAUgXAAQgSAAgNgOg");
	this.shape_100.setTransform(134.8,43);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("Ag6BFQgDgDAAgEIAAgLIABgLIAAgQIABgRIgBgQIAAgSIgBgQIgBgRQABgEADgDQADgEAEAAQAGAAAGALQAWAgARAWQAVAZAYAXIAAgLIAAgLQAAglgDgXIgCgKIgCgJQAAgKAJAAQAPAAAAA5IAAAcIAAAdIgBAOQgCAJgIAAQgFAAgGgGQgkgigug/IAAAUIAAATIAAAWIAAAWQAAAYgJAAQgEAAgDgDg");
	this.shape_101.setTransform(122.1,43.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgmA0QgLgNgDgYQgBgMAAggIAAgUIACgLQACgGAGAAQAIAAAAAOIAAA0QAAA0AkAAQAjAAAAhYIAAgJIAAgHQAAgFACgFQADgFAEAAQAJAAAAAMIAAALIAAALQAABlg0AAQgbAAgNgQg");
	this.shape_102.setTransform(108.3,43.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgjA9QgRgNAAgPQAAgLAJAAQAJAAAAAKQAAAIAKAHQAKAHAJAAQAGAAADgtQABgTAAggIAAgKIgFABIgKgBIgKAAQgEAAgDgCQgCgDAAgEQAAgJAMAAIAJAAIAIAAIAQAAIARgBQAUAAAAAKQAAAEgDADQgCADgEAAIgFgBIgGgBIgKAAIAAALQAABAgJAeQgGAUgNAAQgPAAgPgLg");
	this.shape_103.setTransform(95.6,43.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgoBEQgEgEAAgDIAAgbIACgiIACglQgBgHACgRQAAgEACgBQAMgEAQAAQAOAAAOAKQARAMAAATQAAAWgSAMQANAGAHAGQAGAIAAAIQAAAKgLAKQgIAHgJADQgSAIgfAAQgEAAgDgDgAgbAjIAAASQAYAAANgHQAGgCAGgEQAGgGgBgBQAAgFgLgFQgIgEgIgCIgJgBIgDAAIgEAAIgKgBIgBAUgAgWg0IgBAQIgCAiIAOABQAMgBAIgIQAKgHgBgMQABgJgKgHQgJgHgJAAIgNAAg");
	this.shape_104.setTransform(84.3,42.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgmA0QgLgNgDgYQgBgMAAggIAAgUIACgLQACgGAGAAQAIAAAAAOIAAA0QAAA0AkAAQAjAAAAhYIAAgJIAAgHQAAgFACgFQADgFAEAAQAJAAAAAMIAAALIAAALQAABlg0AAQgbAAgNgQg");
	this.shape_105.setTransform(71.7,43.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgiA9QgRgIAAgNQAAgEADgCQACgCAEAAQAEAAADAFQAFAGADADQAIAEAOAAQANABALgGQAPgIAAgNQAAgLgMgHQgLgFgOAAQgOgBgKgFQgNgHAAgNQAAgQASgMQARgNARAAQAJAAALADQAOAEAAAGQAAAHgIABIgMgDIgOgCQgNABgJAHQgKAGAAAKQAAAHANADQAFABANABQAUACALALQAKAJAAAPQAAAVgTAMQgRALgVAAQgQAAgNgGg");
	this.shape_106.setTransform(58.8,43.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_107.setTransform(42.3,45.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgFAAQgEAAgCgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQAAgDADgDQACgCAEAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAJgFQAHgFAJAAQAPAAAFAKQAEAGABAPIAAARIACASIADASIAAADQAAADgCADQgDACgEAAQgGAAgCgGg");
	this.shape_108.setTransform(32.2,42.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgKQAAgEADgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgDACQgCADgDAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_109.setTransform(22.6,43.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_110.setTransform(8.2,45.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEABQADAAAEADQACACAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgHQADgBAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAHAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_111.setTransform(-1.5,44.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgmA0QgLgNgDgYQgBgMAAggIAAgUIACgLQACgGAGAAQAIAAAAAOIAAA0QAAA0AkAAQAjAAAAhYIAAgJIAAgHQAAgFACgFQADgFAEAAQAJAAAAAMIAAALIAAALQAABlg0AAQgbAAgNgQg");
	this.shape_112.setTransform(-12.1,43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},92).wait(306));

	// text
	this.instance = new lib.astatementscontrary("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(199.9,146.4);

	this.instance_1 = new lib.bwishes("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(219.9,232.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},178).to({state:[{t:this.instance_1},{t:this.instance}]},104).wait(116));

	// background
	this.instance_2 = new lib.Barb();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.6,201.8,0.789,0.789,0,0,0,190.1,113.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(178).to({_off:false},0).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-8.3,454.8,31.9);


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
		
		 window.open ("subj_Scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("subj_Scene2.html","_self");
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


// stage content:
(lib.subj_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3_repeat:356});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_1 = function() {
		playSound("SubjunctiveMoodForms");
		playSound("sax_lick");
	}
	this.frame_35 = function() {
		playSound("Rule1appliestotheuseofthewordwere");
	}
	this.frame_96 = function() {
		playSound("Usethesubjunctivemoodinthefollowingsituations");
	}
	this.frame_187 = function() {
		playSound("Onestatementscontrarytofact");
		playSound("piano_lick");
	}
	this.frame_222 = function() {
		playSound("IfIweresheIwouldnotcolormyhairsooften");
	}
	this.frame_285 = function() {
		playSound("Twowishes");
		playSound("piano_lick");
	}
	this.frame_312 = function() {
		playSound("Iwishthatsealwouldleaveusalone");
	}
	this.frame_355 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_361 = function() {
		this.gotoAndPlay("scene3_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(34).call(this.frame_35).wait(61).call(this.frame_96).wait(91).call(this.frame_187).wait(35).call(this.frame_222).wait(63).call(this.frame_285).wait(27).call(this.frame_312).wait(43).call(this.frame_355).wait(6).call(this.frame_361).wait(1));

	// content
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

	this.instance = new lib.content_subj_mood_ab();
	this.instance.parent = this;
	this.instance.setTransform(276.7,191.3,1,1,0,0,0,198.9,138.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(362));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk();
	this.instance_1.parent = this;
	this.instance_1.setTransform(273.2,194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(362));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '349A44B2427EF141B58D7DD51764612D',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmVS.mp3", id:"bgmVS"},
		{src:"sounds/departure_louder.mp3", id:"departure_louder"},
		{src:"sounds/Iwishthatsealwouldleaveusalone.mp3", id:"Iwishthatsealwouldleaveusalone"},
		{src:"sounds/IfIweresheIwouldnotcolormyhairsooften.mp3", id:"IfIweresheIwouldnotcolormyhairsooften"},
		{src:"sounds/JingleAdjetives.mp3", id:"JingleAdjetives"},
		{src:"sounds/ohbaby.mp3", id:"ohbaby"},
		{src:"sounds/Onestatementscontrarytofact.mp3", id:"Onestatementscontrarytofact"},
		{src:"sounds/piano_lick.mp3", id:"piano_lick"},
		{src:"sounds/relax.mp3", id:"relax"},
		{src:"sounds/Rule1appliestotheuseofthewordwere.mp3", id:"Rule1appliestotheuseofthewordwere"},
		{src:"sounds/sax_lick.mp3", id:"sax_lick"},
		{src:"sounds/SubjunctiveMoodForms.mp3", id:"SubjunctiveMoodForms"},
		{src:"sounds/Twowishes.mp3", id:"Twowishes"},
		{src:"sounds/Usethesubjunctivemoodinthefollowingsituations.mp3", id:"Usethesubjunctivemoodinthefollowingsituations"}
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
an.compositions['349A44B2427EF141B58D7DD51764612D'] = {
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