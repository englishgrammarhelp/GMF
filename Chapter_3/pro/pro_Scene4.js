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


(lib.PastProgressiveDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAGAAAEADQAFAFAAAFQAAAGgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(446.4,99);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAHIAAAHIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_1.setTransform(437.6,91.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgEAFABQAEgBAFAGQADADAKACIANABQAJAAAHgCQALgEAAgHQAAgQgWgGIgLgCQgQgEgGgEQgKgGAAgNQABgZAXgKQAGgEAPgEIAWgHQAFgCAGgBQAFABADADQADADAAAFIABAKIACALQAAAFgDADQgEADgEABQgHgBgCgEQgCgDgBgJIgbAIQgTAHABALIAGACQAaAEAOAJQASALABAYQAAATgRAKQgOAHgUABQgPgBgOgFg");
	this.shape_2.setTransform(425.8,93);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_3.setTransform(414.1,93.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgtBfQgDgDAAgFIABgvIAAguIgCguIgCgYQAAgJADgGQAEgGAGAAQAFAAADADQADADAAAFIgBADIAAAIQAKgHAJgEQAJgEAIAAQAYABALAVQAJARAAAcQAAAYgNAQQgPASgYgBQgLABgOgEIAAA4QAAAFgDADQgEADgFAAQgFAAgDgDgAgKg9QgHADgJAJQABAbAAAcQANAFAMAAQAOAAAJgLQAGgJAAgOQAAgWgFgLQgGgKgKAAQgJAAgJAFg");
	this.shape_4.setTransform(401.7,96.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgoAyQgRgOgBgbQABgdAPgUQAPgXAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAEANAAQAHAAAMgCQAOgEAEgGQADgHAFAAQAEAAAEADQACAEAAADQAAANgUAKQgTAIgQAAQgaAAgRgOgAgXgeQgKALgFAVIAkgQQAVgLAJgHQgKgKgSAAQgOAAgJAMg");
	this.shape_5.setTransform(381.6,93.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAGgHABQgEAAgEgEQgEgDAAgFIABgFIACgRIAAgRIAAhWIABgTIgBgLQgBgGAAgFQAAgGADgCQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAZIAEAYIABADQAAAFgEADQgDAEgFgBQgJABgCgKg");
	this.shape_6.setTransform(368.1,90.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAHIAAAHIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_7.setTransform(355.3,91.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_8.setTransform(336.5,93.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgVIABgbIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAbIABAVIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_9.setTransform(326.8,90.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgoAyQgRgOgBgbQABgdAPgUQAQgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAEAMAAQAHAAAMgCQAOgEADgGQAEgHAFAAQAEAAAEADQACAEAAADQAAANgUAKQgTAIgQAAQgaAAgRgOgAgXgeQgKALgFAVIAkgQQAVgLAJgHQgLgKgRAAQgOAAgJAMg");
	this.shape_10.setTransform(309.7,93.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGBFQgDgDAAgGQAAgOgDgbQgDgbAAgOQAAgNgEgHQgHAEgJAJIgOAPIgGAHIgBAUIgBAUIABAKIABAJQAAAFgDADQgFAEgEAAQgOAAAAgeIACgVIACgUIgCgTIgBgTQAAgaAMAAQAFAAAEAEQADAEAAAEIgBAHIAAAHIAAANQAHgNALgKQAMgKAIAAQATAAAFASQAHgIAJgFQAJgEALAAQAUAAAHAVQACAEADAdIAIBCQAAAFgDADQgEADgFAAQgJAAgBgKIgFgkIgEgjQgBgIgDgIQgEgLgEAAQgFAAgLAIQgMAGgEAFIABAWIAEAeQACASAAAMQAAAGgEADQgDADgEAAQgFAAgDgDg");
	this.shape_11.setTransform(293.8,93.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgVIABgbIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAbIABAVIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(281.1,90.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAHIAAAHIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_13.setTransform(271.8,91.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoAyQgRgOgBgbQABgdAPgUQAQgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAEAMAAQAIAAAKgCQAPgEADgGQAEgHAFAAQAEAAAEADQACAEAAADQAAANgUAKQgSAIgRAAQgaAAgRgOgAgYgeQgJALgFAVIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKAMg");
	this.shape_14.setTransform(259.9,93.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGBFQgDgDAAgGQAAgOgDgbQgDgbAAgOQAAgNgEgHQgHAEgJAJIgOAPIgGAHIgBAUIgBAUIABAKIABAJQAAAFgDADQgEAEgFAAQgOAAAAgeIACgVIACgUIgCgTIgBgTQAAgaAMAAQAEAAAFAEQADAEAAAEIgBAHIAAAHIAAANQAGgNAMgKQAMgKAIAAQATAAAFASQAHgIAJgFQAJgEALAAQAUAAAHAVQACAEADAdIAJBCQAAAFgEADQgEADgFAAQgJAAgCgKIgEgkIgEgjQgBgIgDgIQgEgLgEAAQgFAAgLAIQgMAGgEAFIABAWIAEAeQACASAAAMQAAAGgDADQgEADgEAAQgFAAgDgDg");
	this.shape_15.setTransform(243.9,93.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQAAAZgNASQgQAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_16.setTransform(228,93.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgEAFABQAEgBAGAGQACADAKACIANABQAJAAAIgCQAKgEABgHQAAgQgXgGIgLgCQgQgEgGgEQgKgGABgNQgBgZAXgKQAIgEAOgEIAWgHQAFgCAFgBQAFABAEADQADADAAAFIACAKIABALQAAAFgEADQgDADgEABQgHgBgCgEQgDgDgBgJIgbAIQgRAHgBALIAHACQAaAEANAJQAUALgBAYQAAATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_17.setTransform(215.7,93);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgEAFABQADgBAGAGQADADAKACIANABQAJAAAHgCQALgEAAgHQAAgQgWgGIgLgCQgQgEgGgEQgKgGAAgNQAAgZAYgKQAHgEAOgEIAWgHQAFgCAGgBQAEABAEADQADADAAAFIABAKIACALQAAAFgEADQgDADgFABQgGgBgDgEQgBgDgBgJIgbAIQgTAHABALIAGACQAaAEAOAJQASALAAAYQAAATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_18.setTransform(196.9,93);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgEAFABQADgBAGAGQADADAKACIANABQAJAAAHgCQALgEAAgHQAAgQgWgGIgLgCQgQgEgGgEQgKgGAAgNQAAgZAYgKQAHgEAOgEIAWgHQAFgCAGgBQAEABAEADQADADAAAFIABAKIACALQAAAFgEADQgDADgFABQgGgBgDgEQgBgDgBgJIgbAIQgTAHABALIAGACQAaAEAOAJQASALAAAYQAAATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_19.setTransform(185.2,93);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgoAyQgRgOgBgbQABgdAPgUQAPgXAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAEANAAQAHAAAMgCQAOgEAEgGQADgHAFAAQAEAAAEADQACAEAAADQAAANgUAKQgTAIgQAAQgaAAgRgOgAgXgeQgKALgFAVIAkgQQAVgLAJgHQgKgKgSAAQgOAAgJAMg");
	this.shape_20.setTransform(173.3,93.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQALAAABAUQAWgWAbAAQAJAAAFAHQAEAIAAAOIAAAIQgBAPgKAAQgKAAAAgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgMAAQgKAAABgMg");
	this.shape_21.setTransform(161.1,93.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgoBbQgPgDAAgJQAAgLAKAAIAOACQAKACAMAAQAWAAAIgWQAGgOAAgeQgGAMgJAGQgJAGgKAAQgVAAgNgPQgOgOAAgWQAAggASgTQATgUAgAAQAKAAAIADQAHADAEAFQANAAAAAOQAAAIgDAOIgDAXIgDAmQAAAXgFAPQgFATgLAJQgOALgaAAQgQAAgKgCgAgVg6QgLAOAAAWQAAAQAGAIQAHAJANAAQALAAALgNQAKgMABgNQADgMADgbIgKgGQgFgBgGAAQgVAAgMAPg");
	this.shape_22.setTransform(148.4,96.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQAAAZgNASQgQAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_23.setTransform(135.7,93.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQALAAABAUQAWgWAaAAQAKAAAFAHQAFAIAAAOIAAAIQgCAPgLAAQgKAAAAgMIAAgIIAAgKQgSACgKAJQgLAHgHAQIAAA/QAAAMgLAAQgLAAAAgMg");
	this.shape_24.setTransform(124.2,93.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgtBfQgDgDAAgFIABgvIAAguIgCguIgCgYQAAgJADgGQADgGAHAAQAFAAADADQADADAAAFIAAADIgBAIQAKgHAJgEQAJgEAIAAQAYABALAVQAJARAAAcQAAAYgOAQQgOASgYgBQgLABgOgEIAAA4QAAAFgDADQgEADgFAAQgEAAgEgDgAgKg9QgHADgJAJQABAbAAAcQANAFAMAAQAOAAAJgLQAGgJAAgOQAAgWgFgLQgGgKgKAAQgJAAgJAFg");
	this.shape_25.setTransform(111.8,96.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_26.setTransform(92.1,93.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgVIABgbIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAbIABAVIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_27.setTransform(82.4,90.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_28.setTransform(65.6,93.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgnAyQgTgOABgbQAAgdAOgUQAQgXAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAEAMAAQAJAAAKgCQAOgEAEgGQAFgHAEAAQAEAAADADQADAEABADQAAANgWAKQgRAIgSAAQgZAAgQgOgAgYgeQgJALgEAVIAkgQQATgLAJgHQgKgKgRAAQgOAAgKAMg");
	this.shape_29.setTransform(52.7,93.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgoAyQgSgOAAgbQAAgdAPgUQAQgXAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAJAEAMAAQAJAAAKgCQAOgEAEgGQAEgHAFAAQAEAAADADQADAEAAADQABANgWAKQgSAIgRAAQgZAAgRgOgAgYgeQgJALgEAVIAkgQQATgLAJgHQgKgKgRAAQgOAAgKAMg");
	this.shape_30.setTransform(39.6,93.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgjBYQgEAFgFAAQgFAAgDgDQgDgDAAgFIAAgJIAAgJIAAglIAAgkIAAggIAAghQgBgHADgGQAFgHAHAAQAIAAAAAKIgBAFIAAAFIgBAaIAAAeQALgHAIgEQAKgDAHAAQAZAAAQATQAPARAAAbQAAAagRATQgSATgYAAQgSAAgPgHgAgSgFIgRALIAAAUIAAASIAAAUIAQAGQAHACAKAAQAPAAAMgMQALgLgBgSQABgSgKgLQgJgMgQAAQgJAAgKAFg");
	this.shape_31.setTransform(25.9,90.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgDAFAAQAEAAAFAFQADACAKACIANACQAJAAAHgCQALgEAAgHQAAgQgWgGIgLgCQgQgEgGgFQgKgFAAgNQAAgZAYgKQAGgDAPgFIAWgHQAFgCAGgBQAFABADADQADADAAAFIABALIACAKQAAAFgDADQgEADgFAAQgGAAgDgEQgBgDgBgKIgbAJQgTAHABALIAGACQAaAFAOAIQASALABAYQAAATgRAKQgOAHgUABQgPAAgOgGg");
	this.shape_32.setTransform(456.9,57.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAOIgBAaQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_33.setTransform(445.2,58.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAHgHAAQgEAAgEgEQgEgDAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgDQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDAEgFgBQgJAAgCgJg");
	this.shape_34.setTransform(432.3,54.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_35.setTransform(412,57.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQAAgZAOgUQAQgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_36.setTransform(399,58.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_37.setTransform(389.8,55.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_38.setTransform(380.5,56.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AghAzQgRgPAAgZQAAgXAQgZQASgcAUAAQAMAAAOAGQASAGAAAKQAAAEgCAEQgDADgFABQgEAAgCgCIgEgFQgIgFgQAAQgKAAgMAVQgLAUAAANQAAAQALAIQAKAJAOAAQAIAAAHgEIAOgHIAFgCQAEAAAEADQACAEAAAEQABAJgTAIQgQAHgKAAQgXAAgQgPg");
	this.shape_39.setTransform(368.8,58.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAOIgBAaQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_40.setTransform(356.4,58.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgUQAQgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFAMgBQAHAAAMgCQAOgEADgGQAEgHAFAAQAEAAAEADQACAEAAADQAAAOgUAJQgTAIgQAAQgaAAgRgOgAgXgfQgKAMgFAVIAkgQQAVgLAJgHQgLgKgRAAQgOAAgJALg");
	this.shape_41.setTransform(336.7,58.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAHgHAAQgEAAgEgEQgEgDAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgDQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDAEgFgBQgJAAgCgJg");
	this.shape_42.setTransform(323.2,54.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_43.setTransform(310.4,56.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_44.setTransform(291.9,56.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAOIgBAaQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_45.setTransform(280.2,58.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAHgHAAQgEAAgEgEQgEgDAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgDQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDAEgFgBQgJAAgCgJg");
	this.shape_46.setTransform(267.3,54.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_47.setTransform(254.5,56.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgoBbQgPgDAAgJQAAgLAKAAIAOACQAKACAMAAQAWAAAIgWQAGgOAAgeQgGAMgJAGQgJAGgKAAQgVAAgNgPQgOgOAAgWQAAggASgTQATgUAgAAQAKAAAIADQAHACAEAGQANAAAAAOQAAAIgDAOIgDAXIgDAmQAAAYgFAOQgFATgLAJQgOALgaAAQgQAAgKgCgAgVg6QgLAOAAAWQAAARAGAHQAHAJANAAQALAAALgNQAKgNABgMQADgMADgbIgKgGQgFgBgGAAQgVAAgMAPg");
	this.shape_48.setTransform(235.2,61.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_49.setTransform(223,57.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_50.setTransform(213.3,55.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_51.setTransform(204,56.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAOIgBAaQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_52.setTransform(192.2,58.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AghAzQgRgPAAgZQAAgXAQgZQASgcAUAAQAMAAAOAGQATAGgBAKQAAAEgCAEQgDADgFABQgEAAgBgCIgGgFQgGgFgRAAQgKAAgMAVQgKAUAAANQAAAQAKAIQAKAJAPAAQAHAAAHgEIAOgHIAFgCQAEAAADADQADAEABAEQAAAJgSAIQgRAHgJAAQgYAAgQgPg");
	this.shape_53.setTransform(180,58.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_54.setTransform(170.6,55.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgpBQQgRgRAAgZQAAggARgSQARgSAZAAQAOAAAHAEIALAIQACgyACgRQABgKAKAAQALAAgBALQAAARgEA3IgCAiQAAAnAEAUIAAACQAAAFgDADQgDADgEAAQgIAAgEgKQgIAGgJADQgJADgJAAQgYAAgQgQgAgbACQgKAMAAAXQAAAPALALQALALAOAAQAJAAAHgEIANgJIADgEIAAgUIAAgOIAAgOQgEgJgHgEQgIgFgKAAQgTAAgKALg");
	this.shape_55.setTransform(159.9,54.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_56.setTransform(146.9,57.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_57.setTransform(137.2,55.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgjBYQgEAFgFAAQgFAAgDgDQgDgDAAgFIABgJIAAgJIgBglIAAgkIAAggIAAghQAAgHADgGQAEgHAGAAQAJAAAAAKIgBAFIAAAFIAAAaIAAAeQAJgHAKgEQAJgDAHAAQAZAAAQATQAOARAAAbQAAAagRATQgRATgZAAQgSAAgOgHgAgRgFIgRALIgBAUIABASIAAAUIAPAGQAIACAIAAQARAAALgMQAKgLABgSQgBgSgIgLQgKgMgQAAQgIAAgKAFg");
	this.shape_58.setTransform(119.6,54.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAFAIAAAOIAAAIQgBAPgMAAQgJAAgBgMIAAgIIAAgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgLAAQgKAAAAgMg");
	this.shape_59.setTransform(106.8,58.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgUQAQgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFAMgBQAIAAAKgCQAPgEADgGQAEgHAFAAQAEAAAEADQACAEAAADQAAAOgUAJQgSAIgRAAQgaAAgRgOgAgYgfQgJAMgFAVIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKALg");
	this.shape_60.setTransform(94.3,58.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgMA2IgSgwIgVg1IgBgEQAAgGAEgDQADgDAFAAQAHAAADAHIAdBRQAJgTANgjIAKgaQAEgIAGAAQAFAAAEAEQADADAAAFQAAAEgTAuIgYA2QAAALgKAAQgJAAgDgKg");
	this.shape_61.setTransform(81.8,58);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgUQAQgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFALgBQAJAAAKgCQAPgEADgGQAEgHAFAAQAEAAAEADQACAEAAADQAAAOgUAJQgSAIgSAAQgZAAgRgOgAgYgfQgJAMgFAVIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKALg");
	this.shape_62.setTransform(62.3,58.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAHgHAAQgEAAgEgEQgEgDAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgDQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDAEgFgBQgJAAgCgJg");
	this.shape_63.setTransform(48.8,54.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgHBSQgDgCAAgFIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgEAFAAQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_64.setTransform(36,56.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgDAFAAQADAAAHAFQACACAKACIANACQAJAAAHgCQAMgEAAgHQgBgQgWgGIgLgCQgQgEgGgFQgKgFAAgNQAAgZAYgKQAGgDAPgFIAWgHQAFgCAFgBQAFABAEADQADADAAAFIABALIACAKQAAAFgEADQgCADgGAAQgGAAgDgEQgCgDgBgKIgaAJQgSAHAAALIAGACQAaAFANAIQAUALgBAYQAAATgQAKQgOAHgUABQgPAAgOgGg");
	this.shape_65.setTransform(17.1,57.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgLBVQgDgEAAgEIAAgWIgBgVIABgbIACgbQAAgFADgDQADgEAFABQAEgBADAEQAEADAAAFIgCAbIgBAbIABAVIAAAWQAAAEgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_66.setTransform(8.4,55.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_67.setTransform(416.7,19.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_68.setTransform(400.7,20.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AhOBbQgEgDABgFIABgPIAAgPIABgWIAAgWIAAgWIgBgXIgBgWIgBgWQgBgGAFgEQAFgFAFAAQAHAAAJAOQAdAsAXAdQAbAhAiAfIAAgPIgBgOQAAgzgEgeIgDgMQgDgIAAgFQAAgOANAAQAVAAgBBNIAAAlIgBAnIgBATQgCAMgLAAQgHAAgIgJQgwgtg8hUIgBAbIgBAaIABAdIABAdQAAAggNAAQgHAAgDgFg");
	this.shape_69.setTransform(382.8,19.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_70.setTransform(365.9,19.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AgHBWQgEgDAAgGIABgFIAAgFIgBgRIAAgSQgBgQgDgeIgCgvIgLAAQgaAAgPgDQgJgDAAgJQAAgFADgEQAEgEAFABIATACIATABIAVAAIAUAAIAbABIAbABQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAIgbgBIgbgBIgHAAQAAAQADAkQACAhAAATIABAMIAAANQAAAIgCAFQgDAIgHAAQgEAAgDgDg");
	this.shape_71.setTransform(351,19.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_72.setTransform(327.5,19.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_73.setTransform(312.6,19.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AgzBWQgDgDAAgFQAAgGADgDQAEgDAEAAIAZgDQACgKAAgMIgBgTIgBgUQAAgaADgpIgOABIgQAAQgFAAgEgDQgCgEAAgFQAAgLALAAIAjgBQAWAAAjAEQAKACAAALQAAAGgDADQgEACgFABIgSgCIgTgDQgDAiAAAfIABAUIAAAUIAAAUIAlAAQAEAAAEAEQADACAAAGQAAAFgDAEQgEADgEAAIgUAAIgUAAIgWACIgYADQgEgBgEgDg");
	this.shape_74.setTransform(297.5,19.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_75.setTransform(282.7,20.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_76.setTransform(266.1,20.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_77.setTransform(250.5,19.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_78.setTransform(235.3,19.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("Ag8BQQgOgQAAghQAAgeAOgfQAPggAWgUQAPgNAQAAQALAAARAHQAVAIAAAKQAAAFgDAEQgEAEgFAAQgCAAgFgDQgSgLgMAAQgIAAgJAJIgOARQgbAkAAAoQAAAWAGAKQAIAJAUAAQAUAAAPgNQAQgOAHgaQghABgWALIgFABQgFAAgEgDQgDgEAAgFQAAgHAGgDQAZgOA+gBQAFAAADAEQAEACAAAFQAAAIgHADQgHAkgXAVQgYAWgeAAQgdAAgPgQg");
	this.shape_79.setTransform(219.6,19.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("Ag6BJQgZgVAAgiQAAgnAYghQAbglAnAAQAnAAASARQAUASAAAnQAAAogWAgQgZAlgnAAQgiAAgWgTgAgognQgTAbAAAeQAAAXARAOQAQANAYAAQAbAAASgcQARgaAAgfQAAgcgNgLQgLgLgdAAQgcAAgTAcg");
	this.shape_80.setTransform(201.8,19.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_81.setTransform(184.8,19.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AgxBaQgDgDAAgFIAAgjQAAgQACgfIADgwIAAgQQAAgMABgFQADgLAJACIAKgCIARAAQAVAAASAOQAVAQAAAXQAAAdgWAQQgUAPgaAAIgPgBIgBA+QAAAFgDADQgDADgEAAQgFAAgDgDgAgThGIgHAAIAAAWIgCAvIANABQASAAAOgJQAPgMAAgSQAAgNgOgKQgNgJgOAAIgKABg");
	this.shape_82.setTransform(170.9,19.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AgIBWQgDgDAAgGIABgFIAAgFIgBgRIAAgSQgBgQgDgeIgCgvIgLAAQgaAAgPgDQgJgDAAgJQAAgFADgEQAEgEAFABIATACIATABIAVAAIAUAAIAbABIAbABQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAIgbgBIgbgBIgHAAQAAAQADAkQACAhAAATIABAMIAAANQAAAIgCAFQgDAIgHAAQgEAAgEgDg");
	this.shape_83.setTransform(150.3,19.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_84.setTransform(132.9,20.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AAoA9QgDgLgEgaQgMABgTAFIgeAGQgGAPgPAeQgDAGgHAAQgEAAgEgDQgDgDAAgFQAAgGARglQgCgDAAgEQAAgKAMgCQANgYAVghQAagsAHAAQAJAAAEAMIAHAoIASBQIAGATQADAJABADQgBAFgDAEQgEADgFAAQgKAAgJgbgAgPAIIArgIIgKgtg");
	this.shape_85.setTransform(115.5,20);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgxBaQgDgDAAgFIAAgjQAAgQACgfIADgwIAAgQQAAgMABgFQADgLAJACIAKgCIARAAQAVAAASAOQAVAQAAAXQAAAdgWAQQgUAPgaAAIgPgBIgBA+QAAAFgDADQgDADgEAAQgFAAgDgDgAgThGIgHAAIAAAWIgCAvIANABQASAAAOgJQAPgMAAgSQAAgNgOgKQgNgJgOAAIgKABg");
	this.shape_86.setTransform(100.8,19.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgnAyQgSgOAAgaQgBgeAQgVQAPgWAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQANgDAFgGQAEgHAEAAQAEAAAEAEQADADAAADQgBAOgUAJQgTAIgQAAQgaAAgQgOgAgXgfQgKALgFAWIAkgQQAVgLAIgHQgJgKgSAAQgOAAgJALg");
	this.shape_87.setTransform(80.9,22.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_88.setTransform(67.4,19.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgIBWQgDgDAAgGIABgFIAAgFIgBgRIAAgSQAAgQgEgeIgDgvIgKAAQgaAAgPgDQgJgDAAgJQAAgFADgEQAEgEAFABIATACIATABIAVAAIAVAAIAbABIAaABQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAIgagBIgbgBIgIAAQAAAQADAkQACAhAAATIABAMIAAANQAAAIgCAFQgDAIgHAAQgEAAgEgDg");
	this.shape_89.setTransform(53.2,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PastProgressiveDef, new cjs.Rectangle(-0.9,0,469.6,108.4), null);


(lib.FormulaPastProgressive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAIADAAAIQAAAFgDAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape.setTransform(465.1,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AguA1IACgcQACglAAgvQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAvgDAnIgBAVQAUAAAggKIAEgBQAFAAAEAEQADAEAAAEQAAAIgIADQgKAFgWAEQgTADgMAAQgWAAAAgTg");
	this.shape_1.setTransform(454.5,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgnBDQgDgEAAgEIAAgYIABgoIACgoQAAgYANABIAIgBIANAAQAQAAAPALQARAMAAATQAAAWgSANQgQALgUAAIgIAAIAAAoQAAAEgEAEQgDADgFAAQgFAAgDgDgAgQguIAAANIgBAdIAGABQAMABAJgHQAKgHAAgLQAAgIgJgGQgJgGgJAAIgFAAIgEABg");
	this.shape_2.setTransform(444.5,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgpBAQgEgEAAgEQABgFAEgEQADgDAGAAIARgCIAAgnQgBgXACgWIgTAAQgFAAgEgDQgEgDAAgFQAAgGAEgDQADgDAFAAIAagBQAPAAAbAEQALABAAALQAAAFgFAEQgDACgFAAIgWgCIgBAqIgBAnIAYAAQAFAAAEAEQAEADAAAFQAAAFgEADQgEAEgFAAIgQAAIgOAAIgRACIgSABQgFAAgEgDg");
	this.shape_3.setTransform(434.7,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgmA2QgNgOAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABAQQAAAFgCADQgDAGgHAAQgIAAgDgJQgCgEgCgBQgBgBgGAAQgLAAgNASQgVAXAAAVQAAAJAHAHQAGAIAJAAQAIAAAJgGIANgIQAHgEADAAQAGAAADADQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_4.setTransform(424.4,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgpBAQgEgEABgEQAAgFADgEQAEgDAFAAIARgCIAAgnQABgXABgWIgTAAQgGAAgDgDQgEgDABgFQgBgGAEgDQADgDAFAAIAagBQAQAAAaAEQALABAAALQgBAFgEAEQgDACgFAAIgWgCIgBAqIgBAnIAYAAQAFAAAEAEQADADABAFQgBAFgDADQgEAEgFAAIgPAAIgPAAIgRACIgSABQgGAAgDgDg");
	this.shape_5.setTransform(413.8,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_6.setTransform(402.8,15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_7.setTransform(390.9,15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAtBCQgHAAgHgQQgFgKgDgOIgWACIgUACIgOAdQgEAHgHAAQgFAAgDgDQgEgEAAgFQAAgEANgaQgCgDABgCQAAgFAIgCIAcgsQAVghAFAAQAKAAADAMIAFAcIANA5IAFALQADAIAAAEQAAAFgEADQgDADgEAAIgBAAgAgGAIIALgBIANgBIgGgdIgSAfg");
	this.shape_8.setTransform(378.3,15.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgnBDQgDgEAAgEIAAgYIABgoIACgoQAAgYANABIAIgBIANAAQAQAAAPALQARAMAAATQAAAWgSANQgQALgUAAIgIAAIAAAoQAAAEgEAEQgDADgFAAQgFAAgDgDgAgQguIAAANIgBAdIAGABQAMABAJgHQAKgHAAgLQAAgIgJgGQgJgGgJAAIgFAAIgEABg");
	this.shape_9.setTransform(367.1,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_10.setTransform(348.3,15.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Ag9BEQgDgEAAgFIAAgKIABgLIAAgQIABgPIgBgQIAAgRIgBgPIgBgQQAAgFAFgEQAEgFAFAAQAHAAAIAMQAnA5AnAjIAAgOIgBg5IgBgKIgBgJQAAgNANAAQAOAAAAAtIAAAOIgBA2IgBAOQgCALgLAAQgGAAgIgHQghgegqg2IgBAbIAAAVIABAVQAAAagNAAQgGAAgEgEg");
	this.shape_11.setTransform(334.7,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAIADAAAIQAAAFgDAEQgDAEgGAAIgDgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_12.setTransform(322,15.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AguA5QgMgIABgLQgBgFAEgEQAEgEAFAAQAIAAAEAIQAFALARAAQAPAAAOgGQAPgHAAgIQAAgLgJgEQgHgCgSgBQgQAAgMgFQgQgHAAgNQABgSARgOQATgOAUAAQAJAAAMAEQAQAFAAAGQAAAFgDADQgEAEgFAAIgNgCIgMgBQgMAAgJAFQgKAGAAAGQAAADADACQAEADAGAAIAVACQAUABALAKQANAJAAATQAAAXgaALQgUAJgYAAQgXAAgMgKg");
	this.shape_13.setTransform(309.9,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAVgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIgkADIgBASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgdAAgIgIg");
	this.shape_14.setTransform(298.3,15.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_15.setTransform(286.8,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgnBDQgDgEAAgEIAAgYIABgoIACgoQAAgYANABIAIgBIANAAQAQAAAPALQARAMAAATQAAAWgSANQgQALgUAAIgIAAIAAAoQAAAEgEAEQgDADgFAAQgFAAgDgDgAgQguIAAANIgBAdIAGABQAMABAJgHQAKgHAAgLQAAgIgJgGQgJgGgJAAIgFAAIgEABg");
	this.shape_16.setTransform(276.1,15.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_17.setTransform(261.2,17.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgEAFgIAPQAAAhgDAGQgDAGgEAAQgEAAgDgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIAAgJQAAgDACgDQADgCADAAQAIAAABAIIABAPIgBATIAAAUIAAAHQAHgJAJgFQAHgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgCADQgDACgDAAQgHAAgCgGg");
	this.shape_18.setTransform(251,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEADgDQACgCAEAAIASABIAAgMIAAgLQAAgDACgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBQAJAAADABQAFABAAAHQAAAEgCACQgDADgDAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_19.setTransform(241.4,16);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAiQgCgCAAgEIAAgKIAAgKIgPAAQgOAAAAgIQAAgFAFgBIAJAAIAPgBIAAgKIAAgLQABgEACgBQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAACADQACACAAADIAAAFIAAAFIAAAKIAGAAIAFAAIAGgBQAOAAAAAIQAAADgCACQgCADgEAAIgDgBIgCAAIgJAAIgJAAIAAAVQAAAIgHAAQgEAAgCgCg");
	this.shape_20.setTransform(227.3,16.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAANAFQAJADAAAIQAAAFgDAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_21.setTransform(210,15.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_22.setTransform(198.5,15.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAUgCQAGAAAEAEQADADAAAFQABAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_23.setTransform(187.2,15.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AASBEQgFgDAAgFQgEgKgCgGIgJg4QgGARgGAOQgKAVgEAMIACAEQgBAGgFADQgDADgGAAQgGAAgEgDQgFgEAAgGIgDgLIgJgoQgGgUgOgnIAAgEQAAgFADgEQAEgCAFAAQAHAAAEAFIAFALQAJAZAKAvQAHgRAIgXIAJgbQAJgTAIAAQAJAAAEAJQABAFACAMIADARQACAQAJAmIAZg9IAEgRQADgJAEgGQAEgGAHAAQAFAAAEADQAEADAAAFIgEAKIgDAJIgFAPIgQAlIgQAlIgHAPQgEAHgIAAQgFAAgEgDg");
	this.shape_24.setTransform(172,15.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiAuQgCgEgBgEIAAg5IAAgIIAAgIQAAgFAEgDQADgEAFAAQAKAAACAKQAOgLATAAQARAAABAXIAAAGQgBANgMAAQgLAAAAgLIAAgJQgTADgIARIAAAsQgBAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_25.setTransform(150.7,17.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAATgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_26.setTransform(141.4,17.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgvA5QgLgIABgLQAAgFADgEQAEgEAFAAQAIAAAEAIQAFALARAAQAOAAAPgGQAPgHAAgIQAAgLgKgEQgGgCgTgBQgPAAgMgFQgQgHAAgNQABgSARgOQATgOAUAAQAJAAAMAEQAQAFAAAGQAAAFgDADQgEAEgFAAIgNgCIgMgBQgMAAgJAFQgKAGAAAGQAAADADACQAEADAGAAIAVACQATABAMAKQANAJAAATQAAAXgaALQgUAJgZAAQgWAAgNgKg");
	this.shape_27.setTransform(122.8,15.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AAtBCQgHAAgHgQQgFgKgDgOIgWACIgUACIgOAdQgEAHgHAAQgFAAgDgDQgEgEAAgFQAAgEANgaQgCgDABgCQAAgFAIgCIAcgsQAVghAFAAQAKAAADAMIAFAcIANA5IAFALQADAIAAAEQAAAFgEADQgDADgEAAIgBAAgAgGAIIALgBIANgBIgGgdIgSAfg");
	this.shape_28.setTransform(109.9,15.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AARBEQgEgDAAgFQgEgKgCgGIgJg4QgGARgGAOQgKAVgEAMIABAEQAAAGgEADQgEADgGAAQgGAAgEgDQgFgEAAgGIgDgLIgJgoQgGgUgOgnIAAgEQAAgFAEgEQADgCAFAAQAHAAAEAFIAFALQAJAZAKAvQAHgRAHgXIAKgbQAJgTAIAAQAJAAAEAJQABAFACAMIADARQACAQAJAmIAZg9IAEgRQADgJAEgGQAEgGAHAAQAFAAAEADQADADAAAFIgDAKIgDAJIgFAPIgQAlIgQAlIgGAPQgFAHgIAAQgFAAgFgDg");
	this.shape_29.setTransform(94.1,15.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaBCQgDAEgEAAQgDAAgDgCQgCgDAAgDIAAgHIABgGIgBgcIAAgcIAAgXIAAgZQAAgGACgDQADgGAFAAQAHAAAAAHIgBAFIgBADIAAATIAAAXQAHgFAIgDQAHgDAEAAQAUAAAMAOQALAOgBATQABAUgNAOQgNAOgTAAQgNAAgLgFgAgNgDIgNAIIAAAPIAAANIAAAPIAMAFQAGABAGAAQAMAAAIgJQAJgIgBgOQABgNgHgJQgHgIgNAAQgFAAgIAEg");
	this.shape_30.setTransform(74.2,15.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_31.setTransform(64.5,17.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_32.setTransform(55.2,17.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgJApIgNgkIgQgnIgBgEQAAgEACgDQAEgCADAAQAGAAACAFIAWA9QAFgOAKgaIAIgUQADgGAFAAQADAAADADQADADAAADQAAADgPAjIgSAoQAAAIgHAAQgGAAgDgHg");
	this.shape_33.setTransform(45.9,17.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_34.setTransform(31.3,17.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgEAFgIAPQAAAhgDAGQgCAGgGAAQgEAAgCgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAABAIIACAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAOAAAGAKQAEAGABAPIAAARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_35.setTransform(21.1,15.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFBAQgDgCAAgEIAAgEIABgEIgBgNIAAgNIgCgiIgDgjIgIAAQgTAAgLgDQgHgCAAgHQAAgDACgDQADgDAEAAIAOACIAOABIAQAAIAPgBIAUABIAUABQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAIgUgBIgUgBIgGAAQAAAMADAcIABAmIABAJIABAKQAAAGgCAEQgDAGgFAAQgCAAgDgDg");
	this.shape_36.setTransform(10.4,15.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9900FF").s().p("AgEAqQgDgDAAgEIAAgEIgBgGQAAgDADgDQADgCACAAQAKAAAAASQAAAEgCADQgDACgEAAQgDAAgCgCgAgGgVQgCgDAAgEIgBgDIAAgEQAAgEACgCQADgCAEAAQAJAAAAAPQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_37.setTransform(-4.7,16.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9900FF").s().p("AAcAtIgGgGIgPAHIgJACQgVAAgJgMQgJgLAAgWQAAgVAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAMIAAASQAAALABAGIAGAPIACAFIAAACQAAADgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKAAQAIAAAGgCIAJgIQgDgWAAgMIAAgIIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_38.setTransform(-11.8,17.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9900FF").s().p("AgJBAIABggIABggIAAgfIABggQgBgJAIAAQAJAAAAAJIAAAgIgBAfIgCArIAAAVQgBAJgHAAQgIAAAAgJg");
	this.shape_39.setTransform(-18.9,15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9900FF").s().p("AAUAqQgLAGgOAAQgLAAgIgFQgIgGgCgLQgDgXAAgRQAAgMACgQQACgHAHAAQAEAAADACQACACAAAEIgBANIgBAOIABAYQAAAKACAHIAGACIAFABQALAAANgEIAAgSIAAgQQAAgTACgOQABgIAHAAQAEAAACADQADACAAAEIgCAhIAAASIAAATIABAGIAAAGQAAADgCADQgDACgEAAQgGAAgCgIg");
	this.shape_40.setTransform(-26,17.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9900FF").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_41.setTransform(-37.6,17.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9900FF").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_42.setTransform(-48.8,17.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9900FF").s().p("AgZAmQgMgNgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAALQAAAOAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_43.setTransform(-58.2,17.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9900FF").s().p("AgpBIQgEgDAAgEIABg0IABgzIAAgMIAAgLQAAgEACgDQACgCAEAAQAEAAACABIATgDIAPgBQAKAAAMADQATAEgBAHQAAADgCADQgDADgEAAIgDAAQgLgEgRgBIgNABIgSADIAAAlQASgEAIAAQANAAAOACQAIAAAAAJQAAADgCADQgDACgEAAIgNgBIgNAAQgGAAgUAEIgBA9QAAAEgCADQgCACgFAAQgDAAgCgCg");
	this.shape_44.setTransform(-67.7,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FormulaPastProgressive, new cjs.Rectangle(-75.8,0,548.3,29.1), null);


(lib.Zmove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAdQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgEACgDIAFgHIAMgQIAOgPIgJAAIgPAAIgCAAIgBAAIgEgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgGAHAAIAIABIAJAAIAIAAIAJAAQALAAAAAFQAAADgFAEIgFADQgHAFgJALIgNASIAAABIANgBIAOAAIAHAAQAFACAAADQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgEABIgDAAIgEAAIgQAAIgSAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape.setTransform(5.1,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Zmove, new cjs.Rectangle(0,0,10.2,15.2), null);


(lib.SnakeHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgyBfQADAIAFgBQgTAGgQgNQgLgKgCgMQAIgTgIgMQADgFAFACQAEADAFgCQgFAKAJAIQAJAHgCADQARAAAiAYQgBAFgGAHQgTgBgNgIgAg4BMQgEAEADAFQADAGAHgBQAFgFgEgFQgCgFgFAAIgDABgAhSAgQgBgBAAgBQgBAAAAAAQgBgBAAAAQAAABgBAAIgDgPQgCgNAFgFQAEABABAGQAAACgFACQAMAAgBALQgDAQACACIgBABQgDAAgCgGgAhNAAIgGgHQAEgIABgEQAGAFAGgFQgFgNgCAIQgHgFAYgCQAHANgYADQgDADgCAFQAEABADgEQADgEAFACQgKATgDABQADgHgEgBgAg1glQABgGgEAEQAGgIgCgGQAEAAABAKQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBQAHACAFgEQAAAOgRAKQgCAAABgIgAgQhDQgCgDAAgCQgCADgFACQgDABAAAGQgJgFAAAFQgCgEAhgXQAAAFgCAFQACABADgLQAAAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBQAEABgDAEQgCAEADABQABACgEAAQgFAAADAFIgIgDQgFAOgEADQgGgBAKgIgABThMQgCgFADgDQAGACABAKQgGAAgCgEgAAJhXQACgEgGAAQALgNAbABQAbABAJANQgBADgIgDQgHgDAEAFQgRgNgpANg");
	this.shape.setTransform(15,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLB3IgFgMQgqAEgUgdQgNgTAAgbIAAAAIABgSQAIg3A3grIAEgCQA8gtA0AaQAEgGgSgNQALADAZAlIgBAFIgQAAIgNAAQgKgVgcAHQgZAHgbAaQgcAZgNAdQgOAfANAVQAGAKAUAJQAXALAKAKQgNAQgGABQAKALAAASQgIgHgDAHQgFAJgGABQACgPAKgMgAgGBkQAGgHAAgFQghgYgQAAQABgDgJgIQgJgIAFgKQgEADgFgDQgFgDgDAGQAIAMgIATQACAMAMAKQAPANATgGQgFABgCgJQAMAIATACgAhGAcQADAGADgBQgCgDADgPQACgMgMABQAEgCABgCQgCgHgDAAQgGAGACALIAEAQIABgBIACADgAhHgMIAHAHQADADgDAGQADgCAKgTQgFgBgDAEQgCAEgFgCQACgEADgDQAYgEgHgNQgXACAGAFQACgHAFAMQgGAGgGgGQgBAFgEAHgAgogpQgCAIACAAQARgLAAgNQgFADgHgBQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAgJgFAAQACAFgGAJIADgCQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAABgAgEhIQgJAJAFABQAEgDAEgOIAIACQgCgEAEAAQAFAAAAgDQgFAAAEgFQACgEgEAAQAAAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQgDALgCgBQACgGAAgEQgfAXABADQAAgEAJAEQABgGADgBQAEgBACgEQAAADACACgABfhRQADAEAFAAQgBgKgGgCQgDAEACAEgABPhbQgEgGAHADQAJAEAAgDQgJgOgbgBQgaAAgMAMQAGAAgBAFQAogOARAOIAAAAgAiGBgQgGgTAJgIIACAWQACAQAIADIgEABQgGAAgFgPgAhoAjIAHAAQgHALACASQADARAHAJQgXgKALgtgAgtBRQgDgGAEgEQAHgBADAFQAEAGgFAFIgCAAQgFAAgDgFgAg4hmQAGgTAKgGQABAEgIAPQgIAPABAMIADAEQgLgEAGgVgAgRhyQAMgOARgEQgfARgJAiQgCgSANgPgABUiEQAgAIACAVQgEgFgegYgACBiFQgFgIgGgDQAHgDAGAIQAHAJgBAKg");
	this.shape_1.setTransform(13.7,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SnakeHead, new cjs.Rectangle(0,0,27.5,29.2), null);


(lib.SnakeBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009933").s().p("AAAgBIACABIAAAAIgDACIABgDg");
	this.shape.setTransform(19.5,64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAAAAIABAAIgBABg");
	this.shape_1.setTransform(14.5,32.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AAjHfIgBgJIgHgPIgRgpQACgIAJAEQALAEAIAaQAIAHAGAYQABACAAAHIgKABQgGAAgEgCgAALGWQgHgfALgCQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBABAAAAQgEADgCgBQgDgEAAgIQALgBAGgGIAAAPIgBAAIABAAIAAACQAAAHgHACIACAFQAEgCADgEIABgBIAAAAQAGAOgEAOQgHgCgHACgAAcF7IABAAIAAABgAAKFiQgEgCgFACQADgMAHAMQABgGgLgGIAAgDQAAgyAThGIAFAMQgBgUARgzIACgEQAUg3gCghIAKAFQAFgEgNgNQgKgzAGgPQgJgHgDgWQAEAAAFADQAAgEgFgBIgHgDQgFgtgig+IgMgYQgQgegKgVQgIgRgDgJQAFACADAAQgWgNAMgEQgIgIgGgQQgHgRAEgHQgSgaAEg0QACgVAOgnIADgIIAFgHQACAAADAEQAIgJgIACQAFgDAGgGIAUAAQACAEAGAEQgCAGgGAFIgRARQgCADgIAQQgHANgHAEQAJAAgCAOQgCAOgKgCQAKATAGAkQAGAlAHAQQgFgDgCABQAEACAAAEQAAAEgEACQACADAHAEIAIgFQAKAOgNAKQALACgDgHQAHAGAIAPIAIARIAOAeIACAEQAEABgBAFQgBAEgCACIAIAGIgBABQgGABgDgGQgEgIgDgBIAAAOQAOAKACgKIABgBQAFAGACAHIgIAAQAKAFAKAUQAKAWgGALQAIADALAtQAKAqgCAKIgFgDQAAADAFAKQACAIgHgBQAHALgCAQQgCATACAJIgHAAQAHAMgKgFIAAAOQAEABABgIQAIAOgKAqIgDALQgEgBgCACIgDAEQAOgFgTAiQgDgDgJADQAJAKgLAZQgLAaABAEQgIAIgHABQADAIAHAAIgFATQgEgCgBgIQAAADgGAEQgFADACAHQADAAADgDQAEgDAEABIgBAZIAAAGQgCALgEAGIgDgCgAgjnJQgJAEAFAEQABgDAJAAIAHgJQgEABgDgBQACABgIADgAg9nIIADgFIgDAFg");
	this.shape_2.setTransform(11.7,48.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAsHYQgGgZgIgGQgIgagLgFQgJgEgCAIIARApIAHAPIABAKQgDgFgCAAQAAAEgDgEQgCgEgCgLIgCgFIgBgDIgCgJQgDgHgFgFQgPgmAAg1IACgeQAGhWAgg+IgCgBIAAAAQAHgFAAgLIgBgCQAbhNgRhJQgKgvgHgXQgJgfgZgvIgKgTQgSgigIgSIgDgHQgYg0gKgeQgRg0AIgrIABgEIgBACIAQgwIAXgUIAIAAQgGAHgFADQAIgCgIAJQgDgEgCgBIgFAHIgDAFIgDAGIADgFIADgGIgDAJQgOAngCAVQgEA0ASAaQgEAGAHASQAGAQAIAIQgMADAWANQgDABgFgDQADAKAIARQAKAUAQAfIANAYQAhA9AFAuIAHACQAFACAAADQgFgDgEABQADAWAJAGQgGAPAKA0QANAMgFAEIgKgEQACAggUA3IgCAFQgRAzABAUIgFgMQgSBGAAAyIAAACQAKAGgBAGQgGgLgDALQAFgBADACIADACQAEgGACgLIAAgHIABgYQgEgCgEAEQgCADgDgBQgCgGAFgDQAFgEAAgDQABAHAEACIAFgTQgHABgDgIQAHgCAIgIQgBgDALgbQALgYgJgLQAJgCADACQATgigOAGIADgEQACgDAEACIADgLQAKgqgIgOQgBAIgEgBIAAgPQAKAGgHgNIAHAAQgCgIACgUQACgPgHgMQAHACgCgIQgFgKAAgDIAFACQACgKgKgqQgLgtgIgDQAGgLgKgVQgKgUgKgFIAIAAQgCgIgFgFIAAgBIgIgFQACgCABgFQABgFgEAAIgCgEIgNgeIgJgSQgIgPgHgFQADAGgLgCQANgJgKgPIgIAFQgHgEgCgDQAEgCAAgEQAAgEgEgCQACAAAFACQgHgQgGgkQgGglgKgTQAKACACgOQACgOgJAAQAHgDAHgNQAIgRACgDIARgQQAGgGACgFIAFADIgXAiIAAAAQgCADAAADIAAABIgBABQgeA5AaBEQALAfAcAxIAPAdIAJASQAyBsAGBbQADAsgKBUIACgBIAAADIAAADIgCgBIgCAEQgyBjAABQQAAAVADATIgBgBIABABQAGAmATAhQABAFACAEIgBAAQABACAEACIAFACIAEABIAAAEQgIAEgHAGQAAgIgBgBgAAPGXQAEgOgGgPIAAAAIgBACQgDAEgEABIgCgEQAHgCAAgHIAAgCIgBgBIABABIAAgQQgGAHgKAAQAAAIADAEQACABADgCQAAgBABAAQAAAAABAAQAAAAABABQAAAAAAABQgKADAGAfIAHgBIAHABgABbDjQAAgDAHgIQAHgHAAgOIADAAQACACAAAGQAAAOgPANQgEgBAAgCgABDDiQAfgxgJggQAAgBAAAAQABAAAAAAQAAgBABAAQABAAAAAAQAFAAgBATQAAAdgWAkQgGAAgBgBgAALA+QAKgdAAgCQAAgVgFgMQgFgMAAgLIAAgCIADgBIALAjIABAXQAAAcgLAIQgEgBAAgDgAgEAgQAFgcAAgFIAAgFIADAAQAEANAAAGQAAAJgIANIgDAAIgBABIAAgEgAABiXIAAgPQADABAEAIQADAGAGAAQgBAFgEAAQgEAAgHgFgAhFi4QABgBAAgFIgohGIABgCIACAAQAGAAAQAcQAPAdAFAUIgCABgAhZjTQgGgMgNgKIADgBQAKAAASApIgBAEIgCABIgJgXgAgckxIADgBIAvA+QAAABAAAAQgBABAAAAQAAABAAAAQAAABgBAAQghgSgPgvgAgtnIQAIgEgCgBQADABAEgBIgHAKQgJAAgBACQgFgDAJgEgAhEnNIAAAAg");
	this.shape_3.setTransform(12.7,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SnakeBody, new cjs.Rectangle(1.7,0,22,96.3), null);


(lib.SlimTorso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmDSIABAAIgBABgAAhiyQgGgMgFAAQgHAAAAAIIAAAEQgFgCAAgMQAAgTAPACIABAAIgCAAIAEABQAIAEABAWQAAAEgEACIgDABQABAAAAAAQABgBAAAAQABgBAAAAQAAAAAAgBgAgPi7QAAgIgKAAQgIAAAAAIIACAEQgHgDAAgJIABgGIAAgBIAAgBIABgBIAJgHIABAAQAMAAAAASQAAAHgCADIgDABQAEgBAAgEg");
	this.shape.setTransform(10.4,30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("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");
	this.shape_1.setTransform(17.9,41);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABoF2IABgDIADgeQgBgagFgbQgEgZACgaQABgTgCgRIgCgbIAAgBIgCACQgNAZgHAcIgGAPIgHAPIgLASQgLARgTgIQgcgLgMgeIgIgQQgHgOgJgLIgbAWQADAIAAAFQgBAEACAHQACAIAAAIIAAAjIACANQACAHgBANQABAAgBAOQgCACgDAAQgFgOACgIQABgIgCgGIAAgFQADgGgBgGIgDgoQgBgOgFgKIACgCIgJAJIgQASQgQAPgVACQgOAAgIgJQgDgoAFgoQADgWAAgWQABgWAEgUIADgVQAAgNADgKIADgLQgTgPgPgUQgHgJAEgMQAEgEAGADQAQAIAMAMIAJAIIAGAEQgSgUgRgXQgHgKACgMIAEgEIgBgIIAKgKIgEgPQAHgJANAEIAHAEIAFgDQAKgHANABQAjAHAjADIgLgfIgVAEQgXgNgQgVIgQgUQgLgPgGgRQgHgSAIgRIAKgTQADgFABgHQABgQgFgPIgMADIAKgLIgCgMQgWgGgNgVIgKgUIgCgFQAFgFAIAEIADABIAaAAQARgLAVAIIABAAQACgHAIgCQAHgCAIAAIAPAEQANABAOAFQAIADAIAGQAHAEAIgBIAHgFQAIgBAHAHQAFAFACAIQAJAegCAcIgBAHIgCAGQAIAJgDAMIgBAFIgEACIgBAnQgFAGgGgBIgGgCIgJAUQAHAQABARQABAHADAHQAGAPADAOIABAKQABAKAJACQAFACAGAAIALgEQAXgEAWACQAGAAAHgCQAPAJAIARIACAHIADARIADATQACAJAAAIQgBAGACAAQAFAAAEAEIAFAFIAAAAQADAAAGAQIgCAIIABAEQAAAFgGAAIgCgBIgBASIgBAAIgBATIgBABQgNAEgNgIIgBADIAEADIAFAlQgEAEgHAAIgHgBIgGgFQgKAPgIAVQgEAKAAAKIADBTQABAgAGAgQABAMgEAlQgEAKgBAAQgBAAAAgGgAitgFQAIALAKAMQASAWAVAUIABACIAEAWQABAHADAHQACAEAFAEQARAPAQAVQATAaANAfQADAJAGAIQAOAWAHAXIAlAUQAKgCAGgKIAQgcIADgFIgBgGIADgEQACgSAIgPIATgnIAVgzIABgCIgDgEIgDgCIgQgBIgFAAIgFAFQgWAfgPAjQgGANgHALQgIAMgNADQgRgHgOgRQgIgKgJgIQgIgIgDgLIgCgHIgkg+IgDgEIgCgGQgFgWAIgVQADgJgDgJIgEgJIgEgSIgEgUQgDgLgIgFIgTgMIgOgIQgEgDgGABQAAANAKAEQANAGAHALQAKAQAHASIgBAAQgDgBgBgDIgRgcIgDgDQgMgJgNgDIgCACQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIAVAWQAPAPAMARIgDAFIgHgHQgKgNgMgNQgKgKgJgCIgEAHIAqAyIgCAKQgHAFgHgFQgKgJgJgJQgFgFgGgCIgJgHgAiNBaIgCAPIgBAOIgJBgQgBALABAMIAAAaIAfACQAUgPAQgTQAPgSATgJIAGgJIgPgjQgHAIgIAFIgDADIgBAAQgPAJgKAQQgFAIgIADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAgSAHgRQAKgXAAgaQAAgIgCgJIgDgJQgDgGgBgIQgDgQgIgMIgKgNQgFAUgCAUgAhlCfQABAJgEAIQgEAKgCAMQAHgPAPgIQAAgKgFgRQgEgMAAgRIgBgBQgEAVABAUgAhshWQgIAAgDAFIAHAHIARAOQALAHgBAMQgDAZALAVQADAFgBAGIgEAcQgCAJABAKQAJALAIANQAOAaAMAaIABABIAZAgIAcAZQAKgCAGgLIAvhbIAAgBIgbAWQgIAHgJAFQgGACgEAGQgPAWgVAPIgBgBIgCgDQAVgUASgXQAFgGAHgEQATgLASgOIgBgGIAGACQAGAEAHgEIAJgEQADAAADABQAPAIAFARIADAGIABACIAJACQAEgCgBgHQgCgJgDgIIgEgFIAAAAIgBgBIgDgCQgTgNgbgEIgGgJQAXgGAYAKQARAGAOAIQAFAEADgEIAAgIIgegSIAAAAIgNgGQgGgDgHAAQgFAAgGgEQAEgEAIAAQANgBALAIIAJAFIAOAKQAIAHAAgJIgCgGIAAgBIgDgFQgFgGgMgIQgMgIgKAAQgGAAgGgDIgCgBQgEgEAFACQAYgBAZAEIAMAVIAAAAQAEABgBgOIgCgHIgGgFQgMgIgPgDIgHgCQgRgGgPABQgJACgHAGQgOAOgKAUQgFAKgGAJIgjAyQgMAPgMAMQgIAHgMADIgEgDQAogYAXgqQAGgLAHgKIAfgsQAEgHAIgFQAPgKARACQALAAAXALIgFggIgCgNQgBgIgDgIIgEgHIgGgHIgDgEIhaAEQgGgNgEgQIgOg0IgEgPIgYAtQgFAJgMACIAJAKIABAMIAAAEIAAAGIgBAHIAAABIgdAAQgJgGgKAAQgQgEgPAAIgEABgAhWCOIAHAdIAFgGIAIgHIgXggIADAQgABbA9QAKACAOAEIAOAGIADACIACgEIgBgBQgTgJgTAAIgEAAgACaAaIgCgFIgCgBQAAADAEADgAh0j6IgFAFIgFASQgJAbARAZIAJALIAIALIAbAfIAIACIADAEQARgCANgGQAHgDAEgHQAWgiAOgkIgIgHIAMgDQAEACACAEQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAJgJgDgOIAAgMIAAgGIAFgCIgCgPIgGgCIgOAAQgEAIACAJQABAGgGABQgHgCgBgKIgCgUIgPgNIAHgYQgGgDgHgBQgRgEgSgBQgJgCgJAEIgGgCIgoAIIACAKQANgGAIAGIgEAEIgPADIAEANIAHgGQAQADADASIACALIAAAEQgFAAgCgCQACgDAAgHQAAgRgMAAIAAAAIgKAGIAAABIAAAAIgBACIAAAAIAAAGQAAAJAHADIgDgEQAAgIAJAAQAJAAAAAIQAAAEgEACQgDACgHAAIgBgCgAgElAQAEAOgJALQAOAMABATIAJgJIAUgDQAEgSgEgQIgGgdIgDgIQgEgHgLgBIgHAEQgIACgHgFIgLgIIgJgGIgygEIgKAKIgagCIgBABIABABQgHAIgKgDQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIAAgBIgdAAIAAAAQAGAQAOAMIALAJIAFgCQAJgBAJAFQAJAEAGgHQAGgFAHAAQARAEASgEQAIgCAHAAQAQAAAOAKgAgNE+QACgGAFAEIAEADIAGAFIgEAEgAhQi8QgWgEgPgPIgDgFIACgCIAEADIACADQAJAEAKAGQAKAGAMgCQAbgDARgUIAIgMIACgCIgFgLQAKACAIAOIABABIgEAFIgGgFIgNAOQgIALgKAFQgPAHgPAAIgGAAgAhljtIACgKQAEgHAMAEQAPAAAIAEIAAgBIgFgHQgIgNAHgMQAIgIAKAAQAIABABAHIAFAcIgEAFIgDgCQADgCAAgDQgBgXgIgEIgBgBIgCAAQgOgCAAAUQAAALAFACIgBgDQAAgJAHAAQAFAAAGAMQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgGABIgBAAIgBAAIgCAAIgCgBIgCABQAIAFAAAIQAAAJgWAAQgdAAAAgNgAhdj1IAAAKQAAAFAPAAQAQAAAEgDQgGgOgSAAIgLACgAgfklQgPgOgSAJIgIAGQgCgLAOgDQAMgDAMAEIAKAHIgBAJIgEgEg");
	this.shape_2.setTransform(18,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("AA3AXQAJgLgEgNQgTgOgaAGQgRAEgRgEQgHAAgGAFQgGAGgJgDQgJgFgJABIgEACIgLgJQgPgMgGgQIABAAIAdAAIAAABQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAKADAHgHIAAgDIAbACIAJgKIAxAEIAJAGIALAIQAIAFAIgCIAHgEQAMABAEAHIACAIIAGAcQAEAQgEASIgUADIgIAJQgCgTgPgMg");
	this.shape_3.setTransform(11.5,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SlimTorso, new cjs.Rectangle(0,0,36,76.4), null);


(lib.SlimLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhiBQQgBgCAAgQQAAgGACgHIAAAAQAHgYgBgFQgBgFgKgMQgKgMAEgNQADgOAeAGIALACQA5AIAvgPQgDgPgSgJIAAgMIAEACIAFAFQASAQALAXIh5AEIgFAAIgUgEQgLgBgFAGQgFAHAMANQAMANgEAaQgGAMAAACIABAHIAAACIABALIgCAGQABAEAMAAQAEAAABgHQgHgGAAgFQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIADAAIAEAKQADgDAAgCQgEgFAAgDQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAEAAABAEQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAAAQgGgEAAgDIAAgBIACgCIABAAIAFgBIABgCQgFgCAAgGQACgGABgSQADgJACgDIADgEQAagJA3AJQA9AIAVgPQgEgSgSgWIgQgTIAAAAIgLgRIgBgBIAHAAQACAKAZAZQAZAZgEARQgEASgmgDIgzgEQgFgCgIAAIgDAAIABAAQgegBgNABIgEgBQgLAAgCALIgFAaIgCAGIABAAQAEAAAAADQAAAHgHABIAEAFQAAAHgFAAIgBgBIAAAFQAAAGgGAAIABABQAAALgJAAQgNAAgCgHgAhPAjIAAABIAAAAIAAgBgAhQgBQAEAAABgHIABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAABQAAADgHACg");
	this.shape.setTransform(11,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AheBTIABgGIgBgLIABgBIgBgIQAAgCAGgMQADgagMgNQgMgNAGgGQAFgHAKABIAUAEIAGABIB4gFQgKgXgSgQIgFgFIgEgCIAAgGQAFgIAKgCQAHgFAFADQAFgCAEAFIAAACIALAQIABAAIAPATQASAWAEASQgVAPg8gJQg3gIgaAIIgDAFQgCADgDAJQgBASgCAGQAAAGAFACIgBACIgGABIAAAAIgCACIAAABQAAADAGAEQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgCgEgDAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAADAEAFQAAACgEADIgEgKIgCAAQgBAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAQAAAFAIAGQgBAHgFAAQgMAAAAgEgAhOApIABgBIgBgBIAAACgAhPACIABADQAHgDAAgCQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgBAAQgBAGgEAAg");
	this.shape_1.setTransform(10.9,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SlimLeg, new cjs.Rectangle(0,0,22.1,17.9), null);


(lib.Mick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAHAEIgPgBIgBAAIAAAAIABgFQADgFgEgDQAEgUAiAFQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABQgDADABACQADACASAAIABABIgFAAIgIADQAUAFAKAIIgigJQAgAMADAHQAAAJgGAAQgFgQgLgEIgEACQgCACgFgDQgKgKAGAHQAFAHgCANQgCANgMgYQgMgYAQAqQgKgDgGgUgAgyAHQACgCAMgJIgWAGIgIADQAAgLAKgFIAJgEIAJgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAUAAAGADQgJAFAEAPQgJABgKAEIgPAKQAAgDABgDg");
	this.shape.setTransform(18.7,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AABBDIgPgDQgCgLABgVQAAgWgCgKQgDAQAAAPIACAfIgPABQgKABgGAAQgIgXAFgeQgGAGABARIACAaIgBAAIgCgBIgCABIgEgBQgGgCgCgDQABgMAAgTIgBgPIABgWIABgiQAAgJAIgNIAEACQAXAHAgADIAHAAIAEAAIANAAIALAAQAOgBANgDIACAAIACAEIADAJQAGARABAZQABATgBAsQgCgCgIAAIgYAIIgJACIgLABIAAgEQgCgWABgOQgDAHABARIABANIgBAHIAAACIgPgEgAAzA/IACgBIgBABIAAAAIgBAAg");
	this.shape_1.setTransform(15.5,38.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARF1IgHgDQgFgDgDAAIgLAAQgEAAgDgEQgggFgCgLQgNgBgOgHQgQgIgJgCIgBgCIAAgEQABAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBQgDgBAAAEQAAAFACAAQgEAEgCgHQgBgHAEgCQAYAFAWgCQAYgBALgLIACgCQAEgUAAgXIgEgeIgIg8IABABIgBgDIgBgJIgBAAIgHgdQgCgPAAgRIgCgSQgCgDgGgCIgIgFIAAgEIAAAAQgBgvACgWQgBgYACgMQACgVAQgLIAAAAIADgSIgMADIgBAAIgCABIgDABIgQgBQgNgCgJgGIgBgBQgFgDgDgGQgFgJACgMIgFACQgBAAgBAAQAAABgBAAQAAgBgBAAQAAAAgBgBIAAAAIAIgFQALgGAEgGIAJAFQAGAEAGgBIgBAEQgDADgFgDIgBAAQgIgHgCAAQgFABgCAGIgBAIQAAALAFALQALAFAMABQAKACAKgBQAWgBAYgMIABAAIABgBQAPgIAWgPIAegVIABgGQABgDgBgDQAJgDAVgDQgDgGgNACQgQACgFgBQAEgGANgDQAQgDAEgCQgFgFgNAEQgRAEgFAAQAFgFAKgEIATgFQgHgDgMADIgRAFQAJgKAZAAQgWgGgRAMQgSANAFAaQgPAMgjAHIgnAIIgSAFIAHgFQALgFATgEQgGgBgGgHIgLgLQgNgNgMADIAAAAQgIgGgQAGQgOAFgHAJIANgGQAKgFAIACIgQAGQgKAEgDAFIAPgGQAJgEAFABQgDAEgOAFQgMAFgDAGQAFAAANgHQAOgGAIgBIgQANIgKAIIgCADIgBgBIgBAAQgBgDAEgDQAGgEABgCIgLAFIgLAGQgDgBABgFQABgFgFABQABgCADgFQADgDgCgFQANgSAhgEIACgBIACgCIAAAAIABACIAAgDIAAAAQADgKAGgGIABgBIAPgMIAIgMIACgDIACgCQAIgKARgEIAdgIQAAgCgFgBQgEgBgBgCIAAgPQgBgHgHAAIAAgMQgIgBgDgLQgDgKAHgHQAIgDADAGQADgCADgHQADgHACgDQgBgBgEAEQgDAEgDgBIgBgBIAAgEQABgFAAgDQgFAAgHADQgGAEgCgBQAFgOAEgHQAHgKAKgCQABAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgCAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQAAAAAAgBQAGgFAQAAQAQABAGAFQADgDAEgBQARgEAVADQAAADgDADQgDADgBABQAHABAQgBQAOAAADAHQgCABgEAAIgIAAQALAIAHAJIgFAOQgDAHgEADIgBABIgBgDIgFgNQgEgIgHgCIADAKQAEAKAHAGQAAAJgFAIIgKAMQgNAQAGASQAKAFAYAFQAUAHADAPQAEAUgTAZQgBAVgJARIgDAGIgFAIIgOAQIgKAKIgGAFIgBABIgEAEQg+AAgXgNQgGADgRAFIABAJQAAAIgCAFQABAHgCADIABAAQASAFAUADIABAAIACAAIABAAIAEAAIAHABIAhAAQAPgBANgDIgDgKIAAgCIgBgGQAAgMAEgFIAAAFIADASIAAACIACALIACAIIACAJIAAABQAIAkAAAXIAAAeQAAAMgDAIIgDAFQADAOgIAYIgOAnQAHAOAKALQAEANgDAVIgJAnQgGAagBANQgCAUAFANQABADAJAHQAJAHgBAGQAAAMgQAAQgSgCgGABQgDAAgMAGQgIAFgJAAIgCgBgAAOFrQAAAFADABQALABAJgFIAQgJQAGAEAMAAQANgBADgGQgCgFgMgMQgJgJgBgLQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQgBgQAEgXIAHgoQAEgXgCgPQgDgTgMgMQABgPAKgaQAJgYAAgSIgZABQgMAIgMAAIgDgBIAAACIgJgCIgIgCQgDAOACAXQACAYAGALQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQgCAYAOAyQAMAwgDAaQgCASgIAFIABgDQgZAPgXgBQgFgFgIgBQgJgCgGAEQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQAAAEAEABIAHADQAKgNAKAHQgBACgEAAQgFABgCABQAAAGAKAEIgBgCQADgJAOABQAAAFgFAAQgHAAgBABQAAAEAFABIAIACQgBgDACgDQADgCAGAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAgBAAIgDACQAAABABAAQAAAAABABQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAIABABgAg6FWQADABACgBQAHgFAKgBQAGAAAOACQAaAEAMgJQgBgGgHgHQgHgHgBgGQAFgOACgRQAGgigCgsQgFhHgBglQgDAAgEgDIgEgBIgIgBIAAABIgcAAIgBgBIgDAAIAAgBQAFAQgCAUIAOBHQAFAZABAWIADATIgCAPIgBgBIgBALIAAADIAAAAIgDAVIgBADQgGAIgTADQgWADgKADQAEAAgDAFQgDAFAFAAQAEABABgEQACgEAEABQAAAKACABIABAAIAEABgAhjFHIAKADQAGAAABgEQgGABgFgGQABABAAABQgBABAAAAQAAABgBAAQAAAAgBAAIgCAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAgAAREUIgCAJQgBANABAKQADAOAIAHQAVgXgYhJQgBANgFAegAAAAvQgBAWABAKIAQADIAPAFIAAgCIABgIIgBgNQgBgQADgHQgBANACAXIAAAEIALgBIAJgCIAYgIQAIAAACABQABgsgBgUQgBgXgGgRIgDgJIgCgEIgCAAQgNACgOABIgLABIgNAAIgEAAIgIgBQgfgCgXgIIgEgCQgIAOAAAIIgBAiIgBAXIABAOQAAAUgBAMQACADAGABIAEABIACAAIACABIABAAIgCgbQgBgRAGgFQgFAeAIAWQAGABAKgBIAPgBIgCgfQAAgQADgPQACAKAAAVgAgrBTIAAgCIAAAAIAAAAIAAACgABCBOIABAAIABgBIgCABgAAeh6QgKAIgVALIgCABIgHADQAWAIAVAEQAfAEAMgIIAEgDIAKgIIAAgBQAIgIAHgMIAAgBIACgDIADgFQAIgSgBgQIAOgWQAGgNgDgNQgDgPgVgGIgRgEQgLgCgGgEQgBgPAIgWQAAgBgFgBQAAAAgBAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQANABAGgFQAHgGgDgMQgEgDgHABQgHAAgEAEQgBgDAFgDQAGgCAGAAQAAgDgBgCIgCgEQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgJALQgGAJgIgJQgIgJgGgKQgEgDgEgBIgLABQgBgEACgCIAEgDIgFACIAAABIgEABQgHAEgGAAQgDAEgGALQgFALgDAEQgEABgCgDQgCgCgDAAQgGAEADANQAAADAEAAQAGAAABABIAAAOQAIAFAKgFQAGgDAKgIQgGALgWAIIAAAPQAQAFAPgGIAXgNQgGAKgMAFQgMAGgNgCIABADIABADQgaAFgOAFIgGADIgKANIAAAAIgBAAIgCAEIgIALQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQgIAAgIAPQgEAGgDAIIAJACQAFACAMAPQAKANAHADIABACIABAAIAAAAIAAAAIAAgBIACgZIAAAAQgGgEgDgMQgBgJgCgKIACAAQABAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIADATIAFAMIAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAIAAAFIgEAUIACgBIAJgCIAAABIgBAAQAjgFAOgJQACgFAAgMQAAgLADgFQAHgOAZgEQAZgFAGAMQAAAFgJABQABABAEABQAFABAAACQgBAHgQADQADADAHgCQAGgBABAFQgBAHgJADQgFACgMAAQgCALgLAIIgSAMIADABIAHABQAIABACACQgFACgJgBIgKAAIgFAAgAgeiiIAAAAIAAAAgABGk7QgPgrAMAYQAMAZACgNQACgNgGgIQgGgHAKALQAFADACgCIAFgDQALAFAEAQQAGAAAAgKQgCgHghgMIAiAKQgKgKgUgEIAIgDIAFAAIAFgBIgFAAQgSgBgEgBQgBgDADgDQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQgjgFgEAUQAEACgDAGIgBAFIAAABIABAAIARAAQAFAVAKADIAAAAgAgClPQgCADABACIAOgJQAJgFAKgBQgEgPAIgFQgGgDgUAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAIgIAFIgJAEQgKAGAAAMIAIgDIAVgHQgLAJgBADgAAhllQgEAFAFAEQgBgGAAgEIAAABgAgNhMQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQADACAAAEIgBACIgBAAgAgMihIAAgCQAMACAGgKQABgIAEgCQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAARgVAAgAAWjfQgDgBgdAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIABgBIAQAAQAXAAAAAHQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgEgCgAAgk2QgFgGgFAEQgDADgCgHQADgBAFAAQAPAAAAAJIAAABIAAAAIgBABIgCABg");
	this.shape_2.setTransform(14,37.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AAQFkQgEgBABgFQgDgBgDADQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBgBIAEgCQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBgBgBQgFAAgDACQgCADAAADIgIgBQgEgBAAgEQABgCAHAAQAFAAgBgEQgOgCgDAJIABACQgKgDAAgGQACgCAFAAQAFgBAAgCQgKgGgKAMIgHgCQgDgCAAgEQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAAAAAQAGgEAIABQAIABAFAFQAXABAagPIgCADQAJgFACgSQADgZgNgwQgNgzABgYQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQgGgLgCgYQgCgWACgPIAIADIAJACIAAgCIADAAQAMAAANgHIAZgCQAAASgJAYQgKAbgBAOQAMAMACATQACAPgDAXIgIAoQgEAXACAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAABQABAKAJAKQALALACAGQgDAGgMAAQgMAAgHgDIgPAIQgIAEgIAAIgEAAgAg7FJQgDgBgDAAQgBgBAAgKQgFgBgBAEQgCAFgDgBQgFgBADgFQADgFgEAAQAKgDAVgCQATgEAHgIIAAgDIADgVIAAAAIABgDIAAgLIABABIACgPIgDgTQgBgWgEgZIgPhGQACgVgFgQIABABIACAAIACABIAcAAIAAAAIAJAAIACABQAEADAEAAQABAlAFBHQABAsgFAiQgDARgEAOQABAGAHAHQAHAHAAAGQgLAJgbgEQgNgCgGABQgKAAgHAGIgBAAIgEgBgAhbE9IgJgDQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAQABABABgBQAAAAABAAQAAgBAAgBQAAgBAAgBQAEAGAHgBQgBAEgFAAIgCAAgAgtBEIAAAAIABABIgBABIAAgCgAANg8IgGAAIgFgBIAAAAIgCAAIAAAAQgWgCgRgGIgBAAQABgCgBgIQACgFAAgIIgBgJQARgFAGgCQAXANA/gBIAEgEIABgBIAAAHIgBgFQgEAFABAMIABAGIAAACIACAKQgNADgPABIghAAgAgPhZIADAFIACAAIAAgCQAAgEgCgCQgBAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAgAAghkQgWgDgVgIIAGgDIADgCQAUgKAKgJIAPAAQAKABAEgCQgCgCgHgBIgIgBIgDgBIATgMQAKgIACgKQANgBAFgCQAIgDACgHQgBgEgGABQgIABgCgCQAQgEABgHQgBgCgEgBQgFgBgBgBQAJAAAAgGQgGgMgZAFQgYAEgIAOQgDAGAAAKQAAANgBAFQgPAIgjAFIACAAIgBAAIgJABIgBABIADgTIAAgGQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBABIgFgNIgDgSQAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAAAIgDAAQADALAAAIQADAMAGAFIAAAAIgCAYIAAABIAAABIAAAAIgBAAIAAgDQgHgDgLgMQgMgQgEgCIgJgBQADgJAEgGQAIgPAIAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAIgLIACgEIABAAIAAAAIAKgNIAHgCQANgFAagGIgBgDIAAgDQAMACANgFQALgGAHgJIgYAMQgPAGgOgEIAAgQQAVgIAGgKQgLAHgGADQgKAFgIgFIAAgNQgBgCgFAAQgFAAAAgDQgDgNAGgEQADAAACADQADACADAAQAEgFAFgLQAFgLAEgEQAFAAAIgDIADgCIABAAQgBADABADIAKgBQAFABADADQAGALAIAJQAJAJAGgJIAJgMQAAAAABAAQAAgBAAAAQABAAAAAAQAAABAAAAIACAEQACADgBACQgGAAgFADQgGACACADQAEgDAGgBQAIgBADAEQADALgGAGQgGAFgOgBQAAABAAABQAAAAABABQAAABAAAAQABAAABAAQAEABABABQgJAWABAPQAGAEALACIASAFQAVAFADAPQADANgHANIgNAWQABAQgJASIgBAAIgCAFIgBADIgBABQgGAMgIAIIgBABIgCABIgCABIgGAGIABAAIgFADQgHAGgQAAIgTgCgAgNiuIAFABQAUAAAAgRQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgEACgBAIQgGAKgNgCgAgMjyIgCABQAAABAAABQABABAAAAQAAAAABABQAAAAABAAQAcAAADABIAEACQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgHgXAAgAAflDIAFAFIACgBIAAgBIAAAAIAAgBQAAgJgOAAQgGAAgDABQACAHAEgDQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQADAAADADgAhLhnQgLgCgLgFQgFgLAAgLIABgIQACgGAFgBQABAAAJAHIAAAAQAGADACgDIACgEQgGABgGgDIgKgFQgEAFgKAGIgJAFQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIACgDIAKgIIAQgNQgIABgNAHQgNAGgGAAQAEgGAMgFQANgFAEgEQgFgBgKAEIgPAGQAEgFAKgEIAQgGQgJgBgKAFIgMAFQAGgIAPgGQAQgGAHAGIABAAQALgDANANIALAMQAHAGAFACQgSADgLAFIgIAFIATgFIAmgIQAkgHAOgMQgEgaARgNQARgMAXAHQgZgBgJAKIARgFQALgCAHACIgSAGQgLADgFAFQAGAAARgEQAMgDAFAEQgEADgPADQgOACgEAGQAFABARgCQAMgCADAGQgVADgIADQABADgCADIgBAGIgdAVQgWAPgQAJIgBAAIAAAAQgYAMgWABIgHABIgOgBgAggivIABAAIgBABgAhVi8IAAgBIABgBIgBADIAAgBg");
	this.shape_3.setTransform(14.1,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mick, new cjs.Rectangle(0,0,28,74.7), null);


(lib.Buntail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDALQgDgGgKADQgBgIANABQABgDgGgDQgFgCABgFIAPAEQAEgBgCgFQgDgFABgDQANAWACAPQgHgEgDAEQgFAHgCABQgBgJgCgDg");
	this.shape.setTransform(2.6,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAYQgNgNgGAAQgBgLALAAQgGgHABgHQADgCAKABQAHgCgDgMQALAAAHARIAAgJIAEAFIAAALQACACABADIAAABIAAAFIABADIAAABIAAAJIADAFIgPACIgBACIgDABIgBAAIgCABQgEgBgGgFgAgCAOQACADABAJQACgBAFgHQADgEAGAEQgBgQgNgVQgBADADAFQACAFgEABIgQgEQgBAFAFACQAGACAAAEQgNgBABAIIAGgBQAFAAACAEg");
	this.shape_1.setTransform(2.6,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Buntail, new cjs.Rectangle(0,0,5.2,6), null);


(lib.BunHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#006666","#45FF24"],[0,1],26.8,98.5,26.8,-59.5).s().p("AAAgGIAAAGIAAAHIAAgNg");
	this.shape.setTransform(9.3,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWA9QgDAEgLAFQgIAEgBAGQgLgQAigDgAAMBHQAIgBAMgHQgCgJAGgDIAMgGQAEgWgPgJQgVgIgJgFIABgDIAAgJIABgIIAAgGIABgOIAAgEIgBgCQgCgbgUAAQABAFgCAMQgDAKAEAEIACgLQACgFAGgBQgOARAOAWIgEAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQgBgEgCgBIAAAIQACAFADAFQAIAJAAADQgRACgEAOIAAAAIgCAIQAAARAMATIANgHQAHgDAFACIADABIgCABIgCABIgWALIgRgXIgCAAIAAgJIAAgCIgCgCQABgKADgHIgEgDQgbgOgHgGIgDgDQgIgMgGgMIgCgKQAYgCAUAWIADAFQASATAMAAQgHgGgEgNQgGgWAFgnQAZACAHAYQACALgBAYIAAATQAWAGAGAGQANALgDAWQAbgGABAAQgOAJgMABQADAFALABQAMABADADQgvACgOAPIgJABIgCACgAhEgTQAEAFAJAHIAaAUIADADIAGgIQgJgPgLgLIgBgBQgPgPgTgEQAAAKAHAJgAAUAqQAEgGAAgDIAIAAQACAEgFAHQgFAGgHACQgBgGAEgEgAg4gWQAGABAGAFQAFAGgDAFQgOgIAAgJg");
	this.shape_1.setTransform(8.4,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMBOIgXgZQgDgFAAgHIACAAIAQAWIAXgKIACgBIACgBIgDgBQgFgCgHADIgOAHQgLgTAAgRIABgIIAAAAQAFgOARgBQgBgFgIgJQgEgFgBgFIAAgHQABABACAEQABAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIADAAQgNgVANgRQgFAAgCAGIgCALQgDgEACgKQACgMgBgFQAVAAACAaIABADIAAAEIgBAOIgBANIAAAKIgBAEQAJAEAVAIQAPAJgEAVIgMAGQgGAEABAJQgMAGgHACIAAAIIgDAEgAALBLQACgGAJgFQALgFACgDQgiADAKAQgAAiAkQgEAFABAFQAGgBAGgHQAFgGgDgFIgHAAQAAAEgEAFgAgPAIIgagUQgJgHgEgGQgHgIgBgLQAUAFAPAOIABABQALALAIAQIgFAHIgDgCgAgcgKQADgFgFgGQgGgFgHgBQABAJAOAIg");
	this.shape_2.setTransform(7,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BunHead, new cjs.Rectangle(0,0,16.8,16.4), null);


(lib.BunEar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAcQgFgEgFgIQgOgUAGgdQASAGAMAYQAFAHACAIQACAHAAAGIgBAGIgBACIgEABQgIAAgHgGgAgKAHQAHAPAFgIQgEgCgMgcQgEAJAIAOg");
	this.shape.setTransform(2.8,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAHAtIgKgIQgegaAEgxIABgHIAKAHQASAOAGAFQAMANAFAOIAEANIADAAIAAABIgDAFIgBAAIAAABIAAABQgFAJgHAHIgBABIgDAAIgDgBgAgMASQAFAHAFAFQAIAHALgCIABgDIABgFQAAgGgCgIQgCgHgFgHQgMgYgSgGQgGAdAOAUgAgMAJQgIgOAEgJQAMAcAEACQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgEAAgFgKg");
	this.shape_1.setTransform(3,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BunEar, new cjs.Rectangle(0,0,6,9.3), null);


(lib.BunBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguAZQADgaAbgNQAQgHAggKIAJgDIAAgBIAEABIACACQgEAEgHAEQgMAGgVAEQglAIACAcIgFAOQgGgFgDgGg");
	this.shape.setTransform(5.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsAhIAFgOQgCgcAmgIQAUgEALgGQAIgEAEgFIADAEQADAFgCAIIAAABIgEAFQgHAPgPAGIgBAAIgDADQgZARgdAJIgEgEg");
	this.shape_1.setTransform(6,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguAZQAEgZAYgOQAQgKAfgIIAMgDIAAAAIAEABIACACQgEAEgIACIghAKQgiAJAAAdIgFAOQgGgFgDgGg");
	this.shape_2.setTransform(5.3,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsAgIAFgOQAAgeAjgIIAggKIAPgEQADAFgCAJQgLAUgPAGIgEADQgZARgdAJIgEgDg");
	this.shape_3.setTransform(6,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AguAZQAEgYAXgPQAPgMAegHIAOgCIABAAIAEABIACACQgEAEgJABIAAAAQgNACgUAHQggAJgBAfIgFAOQgGgFgDgGg");
	this.shape_4.setTransform(5.3,4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsAgIAFgOQABggAhgJQATgGANgDIAAAAIAQgCQADAFgCAJQgLAUgPAGIgEADQgZARgdAJIgEgDg");
	this.shape_5.setTransform(6,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AguAZQAFgWAUgRQAPgPAdgFIARgBIABAAIAEABIACACQgDADgGAAIgFABQgOAAgTAIQgdAJgDAhIgFAOQgGgFgDgGg");
	this.shape_6.setTransform(5.3,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsAgIAFgOQADgiAegJQASgIAOAAIAFAAIAMgBQADAFgCAJQgLAUgPAGIgEADQgZARgdAJIgEgDg");
	this.shape_7.setTransform(6,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AguAZQAFgUATgTQAOgRAcgEIATAAIACAAIAEABIACACQgCACgFABIgJgBQgNgBgSAJQgbAJgFAjIgFAOQgGgFgDgGg");
	this.shape_8.setTransform(5.3,4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsAgIAFgOQAFgjAbgKQASgIANABIAJAAIAKAAQADAGgCAIQgLAVgPAFIgEADQgZARgdAJIgEgDg");
	this.shape_9.setTransform(6,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguAaQAGgTARgVQANgTAbgDQASAAAEABIACAAIAEABIACACQgCACgDABQgFAAgHgCQgOgCgRAJQgYAKgHAlIgFAOQgGgGgDgFg");
	this.shape_10.setTransform(5.3,4.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsAhIAFgOQAHglAYgKQARgJAOACQAHACAFAAIAIAAQADAGgCAIQgLAVgPAFIgEADQgZARgdAJIgEgDg");
	this.shape_11.setTransform(6,4.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AguAaQAGgRAPgWQAOgWAYgBQAVAAAEABIADABIAEABIACACIgEACQgFAAgJgCQgOgFgRAKQgVALgJAmIgFAOQgGgFgDgGg");
	this.shape_12.setTransform(5.3,4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsAiIAFgOQAJgnAVgKQARgLAOAFQAIADAFgBIAIABQADAGgCAIQgLAVgPAFIgEADQgZARgdAJIgEgDg");
	this.shape_13.setTransform(6,4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AguAbQAHgQANgYQANgYAXAAQAYAAAEACIADABIAEABIACACQgEAFgPgGQgOgGgRALQgSALgLAoIgFAOQgGgGgDgFg");
	this.shape_14.setTransform(5.3,4.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgsAjIAFgOQALgoARgLQARgLAPAGQAPAGAEgFIADADQADAGgCAIIAAAAIgEAFQgHAQgPAFIgBAAIgDADQgZARgdAJIgEgDg");
	this.shape_15.setTransform(6,4.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AguAaQAGgRAPgWQANgXAZAAQAVgBAEACIADABIAEABIACACIgEACQgFAAgJgDQgOgEgRAKQgVALgJAmIgFAOQgGgFgDgGg");
	this.shape_16.setTransform(5.3,4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgsAiIAFgOQAJgnAVgKQARgLAOAFQAJADAFgBIAHABQADAGgCAIQgLAVgPAFIgEADQgZARgdAJIgEgDg");
	this.shape_17.setTransform(6,4.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AguAaQAGgTAQgVQAOgUAagCQATAAAEABIACAAIAEABIACACQgCACgDABQgFAAgHgCQgOgDgRAKQgXAKgIAlIgFAOQgGgGgDgFg");
	this.shape_18.setTransform(5.3,4.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgsAhIAFgOQAIglAXgKQARgKAOADQAHACAFAAIAIAAQADAGgCAIQgLAVgPAFIgEADQgZARgdAJIgEgDg");
	this.shape_19.setTransform(6,4.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AguAaQAFgUATgUQAOgSAbgDQAQgBAEABIACAAIAEABIACACQgCACgEABIgKgBQgOgBgRAIQgaAKgGAkIgFAOQgGgGgDgFg");
	this.shape_20.setTransform(5.3,4.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgsAgIAFgOQAGgjAagKQARgJAOACIAKAAIAJABQADAFgCAIQgLAVgPAGIgEADQgZARgdAJIgEgEg");
	this.shape_21.setTransform(6,4.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AguAZQAFgVAUgSQAOgQAcgFIATAAIABAAIAEABIACACQgDACgFABIgHAAQgNAAgTAIQgcAJgEAiIgFAOQgGgFgDgGg");
	this.shape_22.setTransform(5.3,4.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgsAgIAFgOQAEgjAdgJQASgIANAAIAHAAIALAAQADAFgCAJQgLAUgPAGIgEADQgZARgdAJIgEgDg");
	this.shape_23.setTransform(6,5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AguAZQAFgXAVgQQAPgOAdgGIAQgBIABAAIAEABIACACQgDADgIABIgDAAQgNACgUAHQgdAJgDAgIgFAOQgGgFgDgGg");
	this.shape_24.setTransform(5.3,4.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgsAgIAFgOQADghAegJQATgHANgCIADAAIAOgBQADAFgCAJQgLAUgPAGIgEADQgZARgdAJIgEgDg");
	this.shape_25.setTransform(6,5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AguAZQAEgYAXgPQAQgMAegHIANgCIABAAIAEABIACACQgEAEgJABIAAAAIghAKQggAIgBAfIgFAOQgGgFgDgGg");
	this.shape_26.setTransform(5.3,4.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgsAgIAFgOQABgfAhgJIAggKIAAAAIAQgCQADAFgCAJQgLAUgPAGIgEADQgZARgdAJIgEgDg");
	this.shape_27.setTransform(6,5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AguAZQAEgZAZgOQAPgJAggJIALgCIAAgBIAEABIACACQgEAEgIADQgNAEgUAFQgjAJABAdIgFAOQgGgFgDgGg");
	this.shape_28.setTransform(5.3,4.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgsAgIAFgOQgBgeAkgIQATgGANgEIAPgEQADAFgCAJQgLAUgPAGIgEADQgZARgdAJIgEgDg");
	this.shape_29.setTransform(6,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},12).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0.9,10,7.6);


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


(lib.PastProgressiveLesson = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.PastProgressiveDef();
	this.instance.parent = this;
	this.instance.setTransform(204.4,97.4,0.879,0.879,0,0,0,233.8,54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({regX:233.9,scaleX:0.74,scaleY:0.74,x:204.5,y:40.5},9).wait(52).to({alpha:0},9).wait(162));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgDADABQADgBADADQACADAAACQAAADgCADQgDADgDAAQgDAAgCgDg");
	this.shape.setTransform(340.2,254.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEACAAAEQAAADgCADQgCABgDAAIgDAAIgEAAIgJABIABAoIAAADIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_1.setTransform(335.1,250.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAGgCQAIgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_2.setTransform(328.2,251.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASA0QgDgHgHgJIgLgRIgNAJIgBAVQAAADgBACQgCACgDAAQgHAAAAgKIABgRIAAgRIABgWIAAgYIAAgHIgBgHQAAgEACgBQACgCADAAQADAAACACQACABAAAEIAAAHIABAHIgBAWIAAAXQAJgHAIgHIAPgQQACgCADAAQACAAADACQACACAAADQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgJAKgMAKIAPAVQAKAOAAAEQAAADgCACQgCACgDAAQgEAAgCgEg");
	this.shape_3.setTransform(320.8,249.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAmQgLgEAAgGQAAgEACgCQACgCADAAQACABAEADQABACAGABIAIABQAEgBAFgBQAGgCAAgFQAAgJgNgDIgGgCQgJgBgEgDQgFgDAAgHQAAgPANgGIAMgEIANgFIAGgBQADAAACACQACACAAADIABAGIABAFQAAAEgCACQgCABgDAAQgEABgBgDIgCgIIgQAFQgKAEAAAHIAEABQAPADAHAFQAMAGAAANQAAAMgKAGQgIAEgLAAQgJAAgIgDg");
	this.shape_4.setTransform(313.1,251);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_5.setTransform(306.3,251.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAzQgDADgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgCgCABgDIAAgFIAAgGIAAgVIgBgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIgBADIAAAPIAAASQAGgEAFgCQAGgDADAAQAPAAAJAMQAJAJAAAQQAAAPgKALQgKALgOAAQgLAAgIgEgAgKgCIgKAFIAAAMIAAALIAAALIAJAEQAEABAGAAQAJAAAGgHQAHgHAAgKQgBgKgFgHQgFgHgKAAQgEAAgGAEg");
	this.shape_6.setTransform(298.7,249.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgKAEgLAAQgOAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_7.setTransform(286.5,251.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_8.setTransform(278.6,249.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEACAAAEQAAADgCADQgCABgDAAIgDAAIgEAAIgJABIABAoIAAADIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_9.setTransform(271.1,250.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_10.setTransform(260.1,251.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAyQgCgDAAgDIAAgLIAAgNIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBAPIgBAQIABANIAAALQAAADgCADQgCABgCAAQgDAAgCgBgAgDglQgDgCAAgEQAAgDADgCQACgCACAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAQgCAAgCgCg");
	this.shape_11.setTransform(254.5,249.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgiAvQgIgJAAgTQAAgSAIgSQAIgSANgMQAJgIAJAAQAGAAAKAEQAMAFAAAGQAAADgCACQgBACgDAAIgFgBQgKgHgHAAQgFAAgFAGIgIAJQgQAVAAAYQAAAMAEAGQAFAFALAAQALAAAKgHQAJgIADgQQgSABgNAHIgDAAQgDAAgCgCQgCgCAAgDQAAgEAEgCQAOgIAkAAQADAAABACQACABAAADQAAAEgDACQgFAVgNANQgOAMgRAAQgRAAgIgJg");
	this.shape_12.setTransform(243.6,249.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgtA1QgCgCAAgDIAAgIIABgJIAAgNIAAgNIAAgMIAAgOIgBgNIgBgMQAAgEADgCQADgDADAAQAEAAAFAIQARAaANARQAQATATASIAAgJIAAgIQAAgdgCgSIgCgHIgCgIQAAgIAIAAQAMAAAAAtIgBAVIAAAXIgBALQgBAHgGAAQgEAAgFgFQgcgagjgxIAAAQIgBAOIABARIAAARQAAATgHAAQgEAAgCgDg");
	this.shape_13.setTransform(233.2,249.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgdAyQgCgCAAgDQAAgDACgCQACgCADAAIAOgBIABgNIAAgLIgBgMQAAgPACgXIgJAAIgJAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAVAAQAMAAAVADQAGAAAAAHQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLgBIgLgCIgCAlIAAAMIABAMIgBAMIAWgBQADAAACACQABACAAADQAAADgBACQgCACgDAAIgMABIgLAAIgNABIgNABQgDAAgCgCg");
	this.shape_14.setTransform(223.7,249.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgbIAAgKIABgKQABgGAFABIAHgBIAJgBQAMABALAIQAMAJAAAOQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBANIgBAbIAHAAQALAAAIgFQAIgHAAgKQAAgIgIgGQgHgEgIgBIgFAAIgEABg");
	this.shape_15.setTransform(216.3,249.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAAAABgBQAAgBAAAAQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_16.setTransform(208.4,249.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAAAABgBQAAgBAAAAQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_17.setTransform(199.7,249.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgdA2QgEgDAAgIIACgXQABgdAAgnQAAgDACgCQACgCADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQACACAAADQAAAngCAeIgBALIAAAKQASAAAagIIACgBQADAAACADQACABAAADQAAAFgFABQgHAEgRADQgOADgKAAQgHAAgDgCg");
	this.shape_18.setTransform(191.4,249.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgbAvQgMgGgBgKQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQACgCADAAQAEAAACAEIAGAHQAGADALAAQAKAAAJgEQAMgGAAgKQAAgJgKgFQgIgEgMgBQgKAAgIgDQgKgGAAgKQAAgMAOgLQANgJANAAQAHAAAIACQALADAAAFQAAAGgGAAIgJgCIgLgBQgKAAgHAFQgIAFAAAIQAAAGAKACIAOACQAQABAIAIQAJAHAAAMQAAAQgPAKQgOAIgQAAQgMAAgLgFg");
	this.shape_19.setTransform(182.6,249.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgbAvQgMgGgBgKQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQACgCADAAQAEAAACAEIAGAHQAGADALAAQAKAAAJgEQAMgGAAgKQAAgJgKgFQgIgEgMgBQgKAAgIgDQgKgGAAgKQAAgMAOgLQANgJANAAQAHAAAIACQALADAAAFQAAAGgGAAIgJgCIgLgBQgKAAgHAFQgIAFAAAIQAAAGAKACIAOACQAQABAIAIQAJAHAAAMQAAAQgPAKQgOAIgQAAQgMAAgLgFg");
	this.shape_20.setTransform(168.7,249.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAYAkIgFgWIgSAEIgRADIgMAaQgCAEgEAAQgCAAgDgCQgCgCAAgDQAAgDALgWQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAHgBQAIgNAMgUQAPgaAEAAQAFAAACAIIAFAXIAKAvIAEAKIACAIQAAACgCACQgDADgCAAQgHAAgEgQgAgIAFIAYgFIgFgZg");
	this.shape_21.setTransform(158.6,249.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AAPA2QgDgCABgDIgFgOIgFgdIgEgcQgGAWgGAOQgJASgCALIABADQAAADgDACQgCACgDAAQgKAAAAgJIgCgIIgHghIgQgwIAAgDQAAgHAHAAQAFABACAFIAFANIAIAfIAHAcQAHgQAHgXIAHgVQAGgPAFAAQAFAAACAEQACAHADAVQABAMADAOIAHAbIAWg6IAEgNQABgIADgEQADgEAEAAQAHAAAAAGIgCAIIgDAHIgEAMIgUAxIgKAXQgCAFgFAAQgDAAgDgCg");
	this.shape_22.setTransform(146.6,249.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_23.setTransform(131.3,251.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgNAQAAQAOAAAHAMQAGAKgBAOQAAAPgHALQgJALgOABQgLAAgIgJgAgLgNQgFAIAAAIQAAALAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgZgQgBQgJAAgFAKg");
	this.shape_24.setTransform(123.6,251.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_25.setTransform(116.1,249.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEACAAAEQAAADgCADQgCABgDAAIgDAAIgEAAIgJABIABAoIAAADIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_26.setTransform(108.7,250.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_27.setTransform(101.5,253.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaA4QgCgCAAgDIAAgcIAAgaIgBgbIgBgOQAAgFACgDQADgEAEAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIAAACIgBAEQAGgEAGgCQAEgCAFAAQAOAAAGANQAGAJAAARQgBANgHAKQgJAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFgjIgJAHIAAAgQAHACAHAAQAJAAAEgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgFAAgFADg");
	this.shape_28.setTransform(94.4,252.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgaANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_29.setTransform(82.7,251.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_30.setTransform(74.8,249.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgEAyQgCgCAAgDIAAgDIABgDIgBgKIAAgKIgCgaIgCgcIgGAAQgPAAgIgCQgGgBAAgGQAAgDABgCQADgCADAAIALABIALABIANAAIALAAIAPABIAQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgQAAIgPgBIgFAAIACAfIABAdIABAHIAAAIQABAEgCAEQgCAEgEAAQgCAAgCgCg");
	this.shape_31.setTransform(66.5,249.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_32.setTransform(336.6,254.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAIIgBAGIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgUIAAgHIgBgIQAAgCADgCQACgDADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFALQADAGAAAOIAAAIIAAAFIACAQIABAQQAAACgCADQgCACgDAAQgGgBgBgGg");
	this.shape_33.setTransform(330.9,250.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_34.setTransform(322.7,250.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAUA3IgDgRIgBgRIAAgGIAAgGQAAgNgHAAQgJAAgHAIIgKAQQAAAdgCAFQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgMIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAHIABAMIAAAQIAAARIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_35.setTransform(314.7,248.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgqIgQgBQgHgBAAgHQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgEACgBQACgDADAAQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgEAAIgKABIACAqIAAADIAAADQAAARgIgBQgCABgCgCg");
	this.shape_36.setTransform(306.8,249.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_37.setTransform(299.1,252.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgcA7QgCgCAAgDIABgdIAAgdIgBgcIgCgQQAAgEACgEQADgFAEABQADAAACABQABACAAAEIAAACIAAAEQAGgFAGgBQAFgDAFAAQAPAAAHAOQAGALAAARQAAAOgJALQgJALgPgBQgGAAgJgCIAAAjQAAADgCACQgCACgDAAQgEAAgCgCgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgJQAAgOgDgGQgDgHgHAAQgGAAgFADg");
	this.shape_38.setTransform(291.5,252.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYA5QgKgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKAAgNQAAgUALgMQAMgMASAAQAIAAAEACQAEABADAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgEAMgHAFQgJAHgPAAQgKAAgGgBgAgMgkQgIAJAAANQAAALAFAEQADAFAJAAQAGAAAHgHQAGgIABgHIAEgZIgGgDQgDgCgEAAQgNAAgHAKg");
	this.shape_39.setTransform(278.9,252.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAJQgHAKgEAMIAAAIIgBAGIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgUIAAgHIgBgIQAAgCADgCQACgDADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFALQADAGAAAOIAAAIIAAAFIACAQIABAQQAAACgCADQgCACgDAAQgGgBgBgGg");
	this.shape_40.setTransform(271.3,250.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgNIgBgNIABgRIABgQQAAgEACgCQACgBADAAQACAAACABQACACAAAEIgBAQIAAARIAAANIAAANQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_41.setTransform(265.2,249);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_42.setTransform(258.9,252.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_43.setTransform(251.3,250.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAEAVIgCgRIgCgQIgGAOIgLAeIgCAEQgDAFgEgBQgGABgFgWIgFgeIgCgLIgBgLQAAgDACgCQACgCADAAQAFAAACAGIABAKIACALIAEAgQAIgVAJgeQACgIAFAAQAGAAACAJIAEAaIAGAcIAFgUIAJgmQACgFAFAAQADAAADACQABACABADIgBADIgPA1QgCAHgFAHQgCAEgFAAQgIAAgFgUg");
	this.shape_44.setTransform(242.4,251);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgTAoQgMgEAAgHQAAgDADgCQACgCACAAQADAAAEAEQABABAHABIAIABQAEAAAGgBQAGgCAAgFQAAgKgNgDIgIgDQgJgBgEgDQgGgEAAgHQAAgQAPgHIAMgEIAPgFIAGgBQADAAACACQACACAAAEIABAFIABAGQAAAEgCACQgCACgDAAQgEAAgCgCIgCgIIgRAEQgLAGABAGIADACQAQACAJAGQAMAGgBAPQABAMgLAGQgIAFgMAAQgKAAgIgEg");
	this.shape_45.setTransform(233.4,250.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgYAgQgLgJAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbAOQAEAGAGADQAGACAIAAQAFAAAGgBQAJgCACgFQADgDADAAQACAAACABQABABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgIgAgOgTQgHAHgCANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_46.setTransform(221.5,250.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAUA3IgDgRIgBgRIAAgGIAAgGQAAgNgHAAQgJAAgHAIIgKAQQAAAdgCAFQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgMIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAHIABAMIAAAQIAAARIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_47.setTransform(213,248.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgqIgQgBQgHgBAAgHQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgEACgBQACgDADAAQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgEAAIgKABIACAqIAAADIAAADQAAARgIgBQgCABgCgCg");
	this.shape_48.setTransform(205.1,249.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AglAyQgIgKgBgUQABgTAIgUQAJgTAPgNQAIgIAKAAQAHAAALAEQANAGAAAGQAAADgCACQgDACgCABIgFgCQgLgHgIAAQgFAAgFAFIgJALQgRAXAAAZQAAANAEAGQAFAGAMAAQANAAAJgIQALgJADgQQgUAAgOAIIgDABQgDgBgCgCQgCgDAAgDQAAgDAEgDQAOgJAoAAQACAAACACQACACABADQgBAFgEACQgEAWgPAOQgOANgTAAQgRAAgKgKg");
	this.shape_49.setTransform(192.1,249);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_50.setTransform(181,249.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgfA2QgCgCgBgDQABgEACgCQACgCADAAIAPgBIABgOIAAgMIgBgNQAAgQACgZIgJABIgKAAQgDAAgCgCQgCgDAAgDQAAgGAHgCIAWAAQANAAAXADQAGABAAAHQAAAEgDACQgBABgEAAIgLAAIgMgCIgBAnIAAANIAAANIAAANIAWgBQADAAADACQABACAAADQAAAEgBACQgDACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_51.setTransform(170.8,249.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgWA7QgJgCgEgDIAAAAQgEAAgCgDQgCgCAAgDIABgXIABgXIgBgYIAAgaQAAgDADgDQADgEADAAIAMAFIANAGQAUAHAOAPQASARAAAUQAAANgGALQgGAMgKAHQgMAIgUAAQgFAAgHgCgAgbgUIAAAVIgBAoIACAAQAGAFAKAAQAQAAAHgFQAHgFAFgIQAEgJAAgIQAAgUgXgPQgGgFgbgMg");
	this.shape_52.setTransform(161.5,249.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AggA2QgBgCAAgDQAAgEABgCQADgCADAAIAPgBIABgOIAAgMIgBgNQAAgQADgZIgKABIgKAAQgDAAgCgCQgCgDAAgDQAAgGAHgCIAWAAQANAAAXADQAGABAAAHQAAAEgDACQgCABgCAAIgMAAIgMgCIgCAnIAAANIABANIgBANIAYgBQADAAABACQACACAAADQAAAEgCACQgBACgDAAIgNAAIgMAAIgOACIgOABQgDAAgDgCg");
	this.shape_53.setTransform(151.8,249.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_54.setTransform(143.1,248.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_55.setTransform(128.6,249.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_56.setTransform(117.7,249.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AARA6QgDgCAAgEIgFgOIgFggQgEgTAAgLQgHAXgHAQQgJAUgDALIABADQAAAEgDABQgCADgEAAQgKgBAAgIIgCgJIgIgkIgQgzIgBgDQAAgIAIABQAFgBACAGIAGAPQAEAOAEASIAIAfQAHgSAIgZIAHgWQAHgQAFAAQAFAAACAFQADAHADAXIAFAcIAGAdIAZg/IADgOQACgIADgFQADgEAEAAQAIAAAAAHIgDAHIgDAIIgEAOIgVA0IgLAYQgCAGgGgBQgDABgCgCg");
	this.shape_57.setTransform(104.9,249.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_58.setTransform(86.5,250.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgNIgBgNIABgRIABgQQAAgEACgCQACgBADAAQACAAACABQACACAAAEIgBAQIAAARIAAANIAAANQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_59.setTransform(78.6,249);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgHA1IABgaIABgbIAAgZIAAgbQAAgHAHgBQAGABABAHIgBAbIAAAZIgCAlIAAARQgBAGgFABQgIAAABgIg");
	this.shape_60.setTransform(74.4,248.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_61.setTransform(67.2,249.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},154).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},47).wait(105));

	// Layer 3
	this.instance_1 = new lib.FormulaPastProgressive();
	this.instance_1.parent = this;
	this.instance_1.setTransform(206.9,150,0.744,0.744,0,0,0,198.3,33.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(83).to({_off:false},0).wait(61).to({x:209,y:141.1},0).to({scaleX:0.63,scaleY:0.63,x:196.4,y:-9},8).wait(154));

	// Layer 1
	this.instance_2 = new lib.WhiteSheet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(206.3,103.5,1,1,0,0,0,206.3,103.5);
	this.instance_2.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({regY:103.6,scaleY:0.08,y:-19.6,alpha:0.789},8).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,414.6,207);


(lib.Z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Zmove();
	this.instance.parent = this;
	this.instance.setTransform(5.1,17.8,0.467,0.467,0,0,0,5.2,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5.1,regY:7.7,scaleX:0.62,scaleY:0.62,x:2.6,y:11.1},5).to({regY:7.5,scaleX:0.79,scaleY:0.79,x:5.1,y:7.5},6).to({scaleX:1,scaleY:1,x:8,y:3.2},8).to({x:-1.9,y:-3.7},14).to({x:1.8,y:-13.2},12).to({scaleX:1.36,scaleY:1.36,x:6.7,y:-19},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,14.2,4.8,7.1);


(lib.SlimSTanding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAgEIABAJ");
	this.shape.setTransform(17.4,107.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAhCUIAAgwIAAgtQgBgRABgQIABgUIgCgDIgFAEIAACUIgjgRQABgbgDgcQgDgpgCgnIgCgbQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFAGIADA6IAEBBQACATgDAQIgWAGIgMAAIgBgSIAAgSQgCgaADgWIABgOQACgJgGgDIgBACIgCAHQgEAhAEAdQACAQgEAQIAAAAIgLgHQgHgEgFgGQgEgCAAgEQgDgeAEgcIABgSIgBgcQgBguABguIACAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBIgDgHIgBgCIgBgKIAVAMIAFgEIgcgRQgUgNANgSIAFADQAKALANAHIALAIIAGAEQATARAagCQATAAAUgEQAXgFAVgHQAJgDAEgHQAKgNgBAcIgBAAIgoAbIADAAIALgCIAHgEQANgFAHgJQABAOgDANQgFAZAFAZQAEAPgBAOIgBBiQgBAXACATIgZAEIgEADIgFACIgIABIgaABIAAgDg");
	this.shape_1.setTransform(22.7,85.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AjhERQABgFAEgEQASgSAaAEIAGAEIAIgDIgEgEQgHgFgIABQgXABgTAMIgJAEIgDgDIAPgFQAIgBgEgFQgQgFgJAMIgHgCIARgOIgSAAQAHgIAMACIgBABIAAAAIAEABIAuABQAdAAAbgKQAIgDAKgCQAJgCAFgCQAbgQAKgfIABgHQABgSgBgSIgGhUIgHhbIgIhiIgCgNQgBgKAEgJIgFAAIgCgKIAAAAIgEgMIgJgbIgCgGIAAgGIAAgFIACgYIAAgBIABgBIABgBIAIAMIAogIIAJAEQgDAIgCAIIABADIAJgRIACAAIABABIADABIgCAUIAAACQgBAFACAFQACAKAFAJIgJAMIgIAMIgCAFIgFAKQgDAHABAGQAPCqgGCrIAZAwQgOAEgMACQgLABgNgBQgQgEgRADQgEABgGACIgkAOQgZAHgXAIQgNAGgNAAIgLgBgAguDOIgJAHQgHAFAGAEIAFgBIAGgHIAEgFQADgEgGgBIgCACgADNECQACgLgIgIIAPABIAEAIIgBAHIgNAKIgCABIADgIgACFEGQgGgDgFgBIgXgKIgIgFQgIgDgIgEQgFgBgFgCQgfAAghgCQgJgBgBgIIAfg0IAGgGIgjlRIADgLIgEgOQgEgLgFgLQgFgKABgLIABgDQABgGgBgIIAWAHIABAAIAAAAIAFAWIABgBIABgHIAAgFIgBgHIAAgCIAjgEIAAABIAAADIAAAAQABAHAEAFIAGAKIABABIAEAGQABAHgFAHIgOAWQgEAGAAAGQABBZAFBYQADBUgHBUQAAAJAJAFQAhAQAdAUQANAHANAAIAtgBIAfABQAFgBAEgCQAGgGAIAAQALgBADAIIgDAFQgCADgDgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQgEgEgFAAIgEABIgFADIAMADIgKAMIgCgGQgGgDgHgBQgHgDgIABQgRgDgQAFQgNAEgBAHQAJgCAHgEQAMgEAMAEQAMAEgBAOIgCAEIhAgBgAAZC+IgBAHIABAHQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBQAAAAAAgBIACgHIgCgHQAAAAAAgBQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAg");
	this.shape_2.setTransform(25.6,126.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjaGpQgIABgEgFIgBgJIgLgIIgLgBIAAgPIgCgFQAAgMANgCIAfgFQAgAGAhgBIALgFQAKgEANgEQAigFAIgjQACgIAAgIQgCh5gJh7IgFhRQAAgFACgEIgCgBIgBgDIADgHIABAJIAGAAQgFAKACAKIACAMIAIBhIAHBcIAGBVQABASgCARIgBAHQgJAggbAPQgFADgJABQgKACgIADQgbALgdAAIgvgBIgDgBIAAgBIABgBQgMgCgHAJIASgBIgRAOIAGADQAJgNARAFQADAGgHABIgQAFIAEACIAJgEQATgMAWAAQAJgBAHAFIAEADIgIAEIgGgEQgagEgSASQgEADgBAFQASAEATgIQAXgJAZgHIAkgNQAFgDAFAAQAQgDARAEQAMABALgCQANgBANgEIgZgwQAHisgPiqQgBgGADgHIAEgJIACgFIAJgMIAIgMQgEgKgDgJQgBgFAAgFIABgCIACgUIgDgCIgBAAIgCgBIgJARIgBgCQABgJADgHIgIgFIgoAJIgIgMIgBAAIAAABIgBABIAAABIgCAXIAAAFIAAAHIACAGIAJAbIAEAMIgHgNIgJgRQgEgHgCgIQgCgHABgIQAAgLAFgLIAAgBIgFgHIgMgLQgEgDAAgEQgCgOABgOQADhfgDhcIABgEQgCgKgKgPQgJgQAOgMQAVAUAPAHIAYANQAUAMAYgBQAmgCAjgPIAGgEIAFAAIACgDIAAAAIgBgNQAOAJABAHQAFAjgHAiQgCAIACAJQAIAvgEAwIgBAHQgBArACAsIgbAHIgBAEIAAABQAAAKAIAIIADAEIACAHQACAFgBAGQgFAUgRAOQgDAOACAPIACAQIAJDTQABAfgCAgIgBAZIgBAIQACAFAFADIAQAJIAgAQQAKAGAJACQAtAFAuACQAMgKAPABQANAAACANQABAJgJAGIgIAAQgCAFgFACIgIAEQgGAOgNADIgDgDIAOgLIABgGIgEgJIgPgBQAIAJgCALIgDAHQgCAHgHgBQgggDgfAAQgDgDgFgBQgQgDgPgLIgIgDIgOgFIhNgHQgGAIgLgCIhEACQgMACgMAFIgyAUIgNAFQgOAGgPAAIgJgBgABLF9QAIAEAIACIAIAGIAXAKQAFABAFACIBBACIACgFQABgOgMgEQgNgEgLAFQgIAEgIABQABgGAMgFQARgEARACQAIAAAHACQAHABAGAEIACAFIAKgLIgNgEIAGgDIADAAQAGAAAEADQAAABAAABQAAAAAAAAQAAAAABABQAAAAAAgBQACABADgDIACgEQgCgIgLABQgIgBgHAGQgDADgFABIgfgCIgtACQgOAAgMgIQgegUgggPQgKgGABgJQAHhUgEhUQgEhZgBhXQAAgHADgGIAPgVQAFgIgCgHIgDgFIgBgCIgGgJQgEgGgBgGIAAAAIAAgDIAAgCIgjAFIAAACIABAHIAAAFIgBAHIgCABIgEgWIAAAAIgBAAIgWgHQAAAHgBAHIAAADQgBAKAEAKQAGALAEALIAEAPIgDAKIAiFSIgFAFIgfA0QABAIAJACQAhACAfgBQAFADAFABgAgVg1IgKATIgEAHIgDALIAAAEIAEBWIAFBiIADBVQABAkgFAjIARAeQAMgOAJgRQAHgMACgNIAAgCIgBAFIgdlXIADgFIgHgQIgEAGgAAFkGIgBATQgBARABAQIAAAuIAAAwIAAADIAagBIAIgBIAFgCIAEgDIAZgEQgCgUABgWIABhiQABgQgEgOQgFgaAFgYQADgOgBgOQgHAKgNAFIgHADIgLADIgDgBIAogbIACAAQAAgbgJANQgFAHgJADQgVAHgXAFQgTAEgUAAQgaACgTgRIgGgFIgLgHQgNgHgKgLIgFgDQgNASAUANIAcARIgFAEIgVgMIABAKIABACIADAHQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABIgBgCIAAABQgCAuABAwIABAcIgBASQgEAcADAdQAAAEAEADQAFAGAHAEIALAHIABAAIAAAAQADgRgCgPQgEgeAEggIACgIIABgBQAGADgCAJIgBANQgDAXACAaIAAARIABATIAMgBIAWgFQADgRgCgSIgEhBIgDg8IAFgFQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIACAbQACAoADApQADAcgBAbIAkARIAAiUIAEgFIACAEgAg4FmIAJgHIADgDQAGACgDADIgEAGIgGAGIgGACQgFgEAGgFgAAZFdIgCgHIACgHQAAAAAAgBQABgBAAAAQABAAAAAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABABQAAABAAAAIABAHIgBAHQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_3.setTransform(25.6,112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(100));

	// Layer 2
	this.instance = new lib.SlimTorso();
	this.instance.parent = this;
	this.instance.setTransform(20.6,74.5,1,1,0,0,0,17.9,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({scaleX:1,scaleY:1,rotation:-19.6,x:22.2,y:75.2},25).wait(29).to({scaleX:1,scaleY:1,rotation:0,x:20.6,y:74.5},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,154.6);


(lib.Slim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAoAiIgCgBIAAgHIABAAIAEACIAAAGgAAnAhIADAAIAAgDIgDgBgAgqgcQAAgGAGAAQADAAABAEQgDAAgBACgAgpgdIAAAAQAHAAAAgCIgEgBQAAAAgBAAQAAAAAAABQgBAAAAAAQgBABAAABg");
	this.shape.setTransform(30.8,8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAoArIAAgDQAAgJAFgEQgFALAEADIAAAAQAGAAgFgOQAFAGAAAFQAAAHgFAAIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAAvAQIAEgMQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQgEgCAAAKIAAACQAEgCABgIIABAHQAAAGgEAAIgBAAQgEAAAAgEgAg2gVQgCgCADgDIACAEQAEgBADgGIgJADIABgBQAFgFADAAIAAADQAAAEgEAEIgDACIgDgCgAg1gagAgsgoQAAgEAEAAIgBAEQADACAGgCQgDADgFAAQgEAAAAgDgAgogsIACAAQAHAAABACIgCACg");
	this.shape_1.setTransform(30.7,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAlAsIAAgCQAAgKAFgDQgFALAEACIAAABQAHgBgGgNQAFAGAAAEQAAAIgFAAIAAAAQgBAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBgAAsARIAEgLQAAAAABAAQABAAAAABQAAAAABABQAAAAABABQgEgCAAAKIAAABQADgBABgIIABAHQAAAGgEAAIAAAAQgFAAAAgFgAgzgWQgCgCADgEIABgBQAFgFACAAIABADIgJADIABAEQAEgBAEgGQgBAEgDAEIgEACIgCgBgAgognQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgBQABgCAEgBIABAAQAHAAACACIgCACIgIgEIgCAEQAEACAGgCQgDADgFAAIgDAAg");
	this.shape_2.setTransform(30.4,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMAEQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAEAAAAADQAAAFgEAAQgEAAAAgFgAgTgEQAAgEAFAAQAFAAABAEQAAAEgFAAQgGAAAAgEg");
	this.shape_3.setTransform(31.9,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAFIAGgFQAGAAgBAGQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgIAAAAgDgAgWgEQAAgDAHAAQAJAAAAAEQAAACgIAAQgIAAAAgDg");
	this.shape_4.setTransform(31.5,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMAEIAAAAQABgBAAAAQAAgBAAAAQABgBABAAQAAAAABAAQAEAAAAADQAAAFgEAAQgDAAgBgFgAgTgEQAAgEAFAAQAFAAABAEQAAAEgFAAQgGAAAAgEg");
	this.shape_5.setTransform(31.5,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALAFIAGgFQAEAAABADIAAADQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgIAAAAgDgAgWgEQAAgDAHAAQAJAAAAAEQAAACgIAAQgIAAAAgDg");
	this.shape_6.setTransform(31.3,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},37).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},3).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},16).to({state:[{t:this.shape_6},{t:this.shape_5}]},5).to({state:[]},8).wait(9));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgiAWQgYgSAEgbQAIgPAEgOQARAMAiAUQAfATAPASQgJAEgKAGIgNAKIgSAQg");
	this.shape_7.setTransform(11.3,30.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgjDBIgFgFIgDgDIgUAAQAKgMAKgXQAIgCAqACIgCADIgFAGIgMANIgHAGIgKAFIgBABIgCAAIgBABQAAAEgCAEgAAABrIAAgBQAFgJAHgEQgBABADAJIAAACIADgEIAHgKIACgDIADABQAGAEAFAMIgLANQgHAGgNgCQADgFAAgDIgXAKQAFgKAGgHgAAwAaQgFADgDAAQgGgLABgMIAAgBIAAgFIABgXQAGgBAFACQgNgHAGgHQAEgDAGAGQAFAFAFAAQgEABAEAOQADAKgDAFIgBABIABgBIgEADIgEABQATgBgLAjQgUgFAIgJgAAyhKQgDABgEgBQABgDANgJIAAAKIgBACIAAAHQgBAIAFACQgCADgIACQgIABgEAGQABgUALgJgAAohRQgBgSgShTQAEgGALgEQAHAPAFAWQAFAagFAMQAHAAAAAMQAAAMACAAIgGAIQgEAEgGAAIgBAAg");
	this.shape_8.setTransform(10.4,27);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#60ECFF","#FFFFFF"],[0,0.506],1,-3.4,1,144.9).s().p("AhbBGIAGgDIgIAEIACgBgABZhAIAFgGIgFAGg");
	this.shape_9.setTransform(19.6,15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#834101").s().p("AgrAVQgKgHAHgLQAJgQgBgHIALAAQANABAMADIAAAXIAAgXQAfAHAVAOQgNAJglgHIgCAAIgFgBIgFAAIgCAAIgXAIIgEAFIgCADIAAgBg");
	this.shape_10.setTransform(32.7,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("AigDCIgNgZQAFgHALABIAUAEQAnADBYgIQgBgTgcgTIACgFQAIgMATgFIAAACQAGALATAYQASAVAEATQgVAQg7gKQhBgKgYANQgDAcgTAIQABgQgHgOgAhAArIgHgCQgPgFgKgQQACgUAUgKIAAAAIAIgEIAbgPQgHAvAAAYIgDABIgIAAIgHAAgAgGgkIgEgnQAFADAEAMQACAMAFACQgCgMgQgjQgNgcABgaQAWANATAkQAaAvAIAKQgKgYgMgXIgBgBQAvgKAKgcQgMACgCgOIACgCIAdAAIAAACIAAgBIABgBIADgEIABABIABgCIAAAAQAGgFAIgCIALgBIAFgBIAJABIABAAQAQABAKAGQgCACgIgBQgFgBgDADIAAAAIAAABIgBABIABAAQgCAIgIAKQAAAEAKABIgMASIgHAKQgHAHgIAFQgPAKgUABIgGABQgCgBgDgFIAAgBIgDgGQgEgKgBAGQAJANgQASQANAcgaAZQgNAMgmAXQAAghgDgmgABVhPQAZgCAHgSQgZADgHARgAB6hvIgDAAQABAGABADIABACQAEADAFgCIAIgFQAHgGAAgEQgBgFgJABQgBAAgBABQAAAAAAAAQAAABAAAAQABAAABABQAGACgCACQgEAIgFAAQgCgJgGABIgBAAgACKiDQgDAEABACQATgKgFgHQgKAHAAgCIADgEIAEAAIAAgJIAAgBIAAgDIAAADIgNgBQgGABgGACQgHACgCAFIgBAAIAAABIgJAAIAJAAIgBAIIAAABQgBAHAHAAQAEAAAAgEQALAAADgDIAAAAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAgAiCheQAIgHA+gpQAAgHgHgHQgGgHgCgFQARgcAWAEQgFAIgTAJQAFACAJgFIAOgJQAEAFgKAFQgMAFAAAEQAGAEAWgOIgYARQgLAJgDANQAAAEAEgDQABAAABgBQAAAAAAAAQABAAAAABQAAAAAAABQAAAEADABQgNAQgmAUQAaAMAiAAQAFAJgFARQgjgIg2gcgACPiNQAEgGAAgDIAAAJgABJiNQASgNACAAQAGACADALgACTiWgAgiihQAEgHAKAAQAAAEADAFIgDABQgEAAgKgDgAhcjCQABgHgHACIAEgKQgDgDgFACQgGACgFgBQAFgLAPAAQAaAAAHgDQAKAVAAAFQgPAMgbAAQgCgBACgIgAhMjJQAEAIAHgGQgDgQgJgBQgCAJADAGg");
	this.shape_11.setTransform(17.7,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("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");
	this.shape_12.setTransform(19.3,23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQANQgBgFgCAAQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBABIAAgBQAIgJAAgEIAAAAQAKAAABADIAAABIAAAAIAAAAIgJANIgCAAgAgNAEIAAgBQAAgDgGAAQgFAAAAADIgBABIgBgEIAAgBIACgCIAWAAIgDAEIgIADIAAAAgAgCgDIgWAAQACgEAEgCIADgBQAKgEAGAFIgDAGgAgYgDg");
	this.shape_13.setTransform(31.8,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(83));

	// Leg
	this.instance = new lib.SlimLeg();
	this.instance.parent = this;
	this.instance.setTransform(14.4,30,1,1,-75,0,0,16.9,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-60,x:14.5,y:29.9},10).to({regX:17,rotation:-90},12).to({regX:16.9,regY:1.1,scaleX:1,scaleY:1,rotation:-32.7,x:14.4},17).wait(25).to({regY:1.2,scaleX:1,scaleY:1,rotation:-75,y:30},15).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.7,50.6);


(lib.BunniesWatching = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.BunEar();
	this.instance.parent = this;
	this.instance.setTransform(8.4,13.7,1,1,0,0,0,4.9,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regY:8.2,rotation:6.3,x:8.6},4).to({regY:8.3,rotation:0,x:8.4},3).wait(5).to({regX:4.8,rotation:-15,x:8.7,y:13.8},5).to({regX:4.9,rotation:0,x:8.4,y:13.7},8).wait(31));

	// Layer 3
	this.instance_1 = new lib.Buntail();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.3,29,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({regX:4.3,regY:3.9,rotation:15,x:0.2,y:28.9},4).to({regX:4.4,regY:4,rotation:0,x:0.3,y:29},3).wait(5).to({rotation:-15,x:0.8,y:28.9},3).wait(5).to({rotation:0,x:0.3,y:29},6).wait(3).to({regX:4.3,rotation:15,x:0.1,y:28.8},7).to({regY:3.9,rotation:-15,x:0.7,y:28.9},11).to({regX:4.4,regY:4,rotation:0,x:0.3,y:29},4).wait(3));

	// Layer 2
	this.instance_2 = new lib.BunHead();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.6,15.6,1,1,0,0,0,8.4,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({scaleX:1,scaleY:1,rotation:18.6,x:22.4,y:15.7},16).wait(15).to({scaleX:1,scaleY:1,rotation:0,x:21.6,y:15.6},13).wait(6));

	// Layer 1
	this.instance_3 = new lib.BunBack();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.7,23,1,1,0,0,0,5.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,0,34.1,30.9);


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
		
		 window.open ("pro_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pro_Scene3.html","_self");
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


(lib.Zzzs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Z();
	this.instance.parent = this;
	this.instance.setTransform(2.3,8.6,1,1,0,0,0,5.1,7.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(56));

	// Layer 4
	this.instance_1 = new lib.Z();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.6,7,1,1,0,0,0,5.1,7.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(53).to({_off:true},1).wait(9));

	// Layer 1
	this.instance_2 = new lib.Z();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.6,5.1,1,1,0,0,0,5.1,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,11.8,4.8,7.1);


(lib.SnakeSleep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#006666","#45FF24"],[0,1],77.5,226.6,77.5,-213.8).s().p("AgKAZIAGgmIABACIgBgCIAEgWQAIAGACALQAEASgQAkIgIgLg");
	this.shape.setTransform(48.1,276);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#006666","#45FF24"],[0,1],41.5,230.4,41.5,-210).s().p("AjXB4QgKgEgJABQgBgJAJgCQAMgDgBgFIABAAQADADAEAXIgIgEgADQh6IAAgBIAbADIgbgCg");
	this.shape_1.setTransform(84.1,256.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#BDA5FE","#550055"],[0,1],12.3,-8.6,0,12.3,-8.6,49.4).s().p("ABbEKQgfAugWAHQAOg/gcADQgVAygfADQgVgggGgVQgPgEgDARQgDAQgMgCQgJgbgZAHQgLAPgDAKQgSgVgagoQggg1gfgSQATgjAEgvQABgZgDgcQgCgVgFgPQgPg1gngJQgGAAgHAIQgKAKgMAWQgRAfgPgSQgGALgCAOQgHA2ArBeQg0grAKhqQAGhCAWgyQAGgPAIgNQAIAHgIAbQgJAbAJAGQAIAAAGgDQASgMgGg0IACgDQANgXAhgUQApgVASgOQAHAIAOAEQAOAFAVACQApAGAYgLQhDgNgggIIgNgEQgugOgRgcQAUgOAVgKIALgEQAogPArAEIBYgEQBeAAAKABQAxAFA4AdIAdAPQgDAKgTAPQgQANgBAPQAfgOA1AnQAxAjAbAvQAPAeAIAgQAPBIgeBYQgJAagLAYQgiBHg3AzQgIABgEgMQgDgNgLAEQAAAigvATQgpgtghgIgAiUDwIBWAAQgBgRgqAAQgoABgDAQgACqCyQggAGAAAPQAdAEAmgLQgBgPgVAAIgNABgABjDHQAPAAgDgOQgoAAAAAOIAKgBIASABgAAfDAQABgQgaABQglADgEgCQgCAcBEgOgAipC5QBVAOACgVQgNgIgiAAIAAAAQgkAAgEAPgAg+CCQgMABgCABQAGAMAXACIAJAAQAegBgBgTIg1AEgAiUCPQAcAGALgKQgygTgRgCQgDAUAfAFgACUB2QggAGgFAPQAfADArgKQgDgPgTAAQgHAAgIABgAA6CLQAXgBgDgUQgEADggACQgXACgBAOIAQAAIAYAAgADUCEQAIAFAXgDQAWgEAHgMQgQgEgMAAQgZAAgHASgAgCBcQAJAIAYgBQAZAAABgOQgSAEgpADgABhBjQAHgEAqgCQAggBABgUQhNAQgFALgADwBNQgfABgEAOQBjAIgZgjQgHAJggADgAhmBVQA/ARAEgYQgNgHgZgBIgFAAQgZAAABAPgAjRBOQALABAiAJQAfAEgDgUQgGAAgmgFIgDAAQgPAAgLALgAB3AWQgaADgCANQAbACAbgHQAdgJgXgNQgGAHgaAEgAgCAmIABAAQBAgDABgRQg/ALgDAJgAjKAZQBQAdAAgrQgEACgsgDIgFAAQgaAAgBAPgAD9AOQgpAGgPAIIgGAEQBNALAQggIgfADgAhfAgQAnACAOgJQAFgDACgEIgaAAIgKAAQgXAAgBAOgAALgOQBRAUgBgoQgHAEgmACIgBAAQgeAAgEAOgADNgIQA8gIAHgSQhAAUgDAGgACUghQgmANAVAMQAPgLAngCQgBgQgPAAQgJAAgMAEgAisgiQgkAGgIAOQAUALBBgSIABAAIABAAIgCgGQgGgHgMgBIgGgBQgHAAgKACgAg8gjQgfAFADAQQAaAFAigMQgBgQgTAAIgMACgACqhJQgWAHgDALQAfAHAdgTQgDgVgEAAQgEAKgYAFgABphRQgDAHgZADQgVACABAOQAWACAggHQgCgVgEAAIAAAAgAAHg8QAWAAACgOIgjAAQgXAAgBAOIAOgBIAVABgAhbhNQgRADgBAOQAvgDAAgSIgdAEgAibhKQADgRgnAAQggAAgFALIgBAGIAJgCIAYgBQATAAAWADgAD1hRQAwAAAFgbQgwARgFAKgABGh7QgXADgCAMQA5ANgFgbQgEgDgIAAQgGAAgJACgACYh8QgWACABAOQAYAGAYgLQAWgMgWgJQgDAIgYACgAgHhrQAOABgDgQQgmAAgBAOIAHAAIAVABgAhiiFQgcADgDAPIA1AAQAFgSgVAAIgGAAgAj6h6QBDAKAOgRQgPgGgeAAIgFAAQgbAAgEANgAAdiqQgYAFgBARQAQgCAegFQADgRgOAAIgKACgAjRivQAeARAUAFQApAKACgnQgOARgggHIgCAAQgVgFgMAAQgJAAgDACgAhCixQgjAFgBARQBIAFAJgZQgIgDgMAAIgHAAIgSABgABtiqQgZACgGANQBGgDADgRIgqAFgAA5jCQANgDAegDQAZgDAGgMQhHADgDASgAgqjCQAagIA9ABQgMgPgjgBQgkACgEAVgAiWknIgnANQAlAyB7AAIAbAAQBUgFBFgYQgCgNgOgJQgJgFgPgEIh8gJIgHAAIgBAAIgCAAIgEAAQglACg6AAIgHgCIgVAGg");
	this.shape_2.setTransform(99.7,277.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");
	this.shape_3.setTransform(110.2,281.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLACIAZgPQgFAQgKAHQgGAEgGAAQADgFgBgHg");
	this.shape_4.setTransform(64,249.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.instance = new lib.BunniesWatching();
	this.instance.parent = this;
	this.instance.setTransform(30.3,233.2,2.787,2.787,0,0,0,15,13.6);

	this.instance_1 = new lib.Zzzs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(95.9,221.3,2.787,2.787,0,0,0,4.4,4.4);

	this.instance_2 = new lib.Mick();
	this.instance_2.parent = this;
	this.instance_2.setTransform(203.7,201.6,2.787,2.787,0,0,0,13.9,37.3);

	this.instance_3 = new lib.SlimSTanding();
	this.instance_3.parent = this;
	this.instance_3.setTransform(130,170.6,1.43,1.43,0,0,0,25.6,77.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("EgtVgByIAAzdIAAm2IGHABIBPAAIF4ACIJMgCIBqABIAYAAIIxAAIAFAAIGBAAIACAAIAaAAIBFAAIU3gBIABAAIADAAIAzAAIACAAIAIAAIV5gBIGGAAIAAFbIAAAAIAAFUEAtWgRLIAAPLIAAeGImGgBIhJAAIuAgDIgYAAMg+oAAEIgLAAIgKAAImHAAIAGnfIgG2S");
	this.shape_5.setTransform(151.2,186.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AgUAAIApAA");
	this.shape_6.setTransform(400.3,173.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#006666","#45FF24"],[0,1],-9.1,201.1,-9.1,-239.3).s().p("AuGIjQANgCAQAIQAEASgTAJQgNgCgBgfgAr5HYQgvgNgUgNQAGgSAkgDQAhgEATALQgGApAKAhIgGABQABgKgFgFQgPgEABAUQADAYgKAAgASOByIADACIgDABgAwmhFQAVgEAAAtQgngUASgVgArYgqQgNgFgDgYQAAgfgDgNQgPgCAAAUIABAjQgRgggKgPQADAjgcgRQgagSgIgaQALgPAOALQAQARAFAAQASgBgSgZQATAAgGAaQAagHAIgGQgKgNAKgOQASgGAJAUQACAzgCA0IAAADgAyQg+QBNg5AKgkQAeARgEAQIghAAQgGAeANAlQgygMglAFgArRitQgKgEgJABQgBgIAJgDQALgDAAgFIABAAQADADADAXIgHgEgAkpmfIAAgCIAbADIgbgBgAslnEIABAAIgBABIAAgBgAu0pBIADgCIAAACg");
	this.shape_7.setTransform(134.8,285.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#BDA5FE","#550055"],[0,1],12.3,-8.6,0,12.3,-8.6,49.4).s().p("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");
	this.shape_8.setTransform(99.7,277.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#006600","#009900"],[0,1],-122.7,-34.8,-122.7,-159.4).s().p("EApKAcFIBJAAIAAABgEgkLAcGIAAAAIAKAAIAAAAgEgkLAcGIABgVQACAGADAAQACAAACgOIAAAdgEgkLAcGgEApKAcFIuAgDIgLAAIENgEILHAAIAAAHIhJAAgAv2hBQh6gngOAAQgMAAgDAKIg9guQgEADgDAAIAAAaIgNABQg8gegJAAQgKAAgHAXQgHAXgJAAQgNgKgQAAQgHAJgeAAIgSgZQgEABgKAJQABgPgNgBQgOgCgBgMQgHgqgBAAQgpBIgzAAQgvAJgbAAIABgCQAUgEAAgNIgBgIIgIgBIiTAWQAAgegLAAIgZAaQgegdgDAAQgGAAAAAIQgRgTgIAAQgMAAABArIgTgUQgOgMgQAAQgKAAgGAWIgIAjIhPg0IgHAFQAAAXgOAAQgYgegQAAQgFAAAAAhIgmgQQgBgBgGASIgEAAQgsgogRgGIgFgBQgQAAAJAFIAAAYIgtABQgEgBgNgNIgGAHIgGAFIgIAFIgGABQgGAAgTgTQgTgUgFAAQgGAAAAAgQgLgHgagYQgCAAgLAYQgKAXgQAAQgMAAgjgYQgCAAgKANQgJANgZAAQgbAAgJgRQgIgRgCAAQgDAAgaAVIgKgRQgIgOgGAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABQgHADgKALQgQAPgOAAQgIAAgDADIAAzcQAGgDALgLIARgSQAAAJALAAQAGAAAEgHIAGgLQAaAYAFAAQAGAAAGgVIAGgYIAIAAQAxAmACAAQAFAAAGgQIAJgXIARAUQABAAAOgSQAPgTARAAQACAAArAkQAGAAALgRQALgSABAAQAKAAAIAZQAIAYAGAAIAggPIAKgFIAAACQAQgLA4AAQAEAAAIALIAHAJQAKAPAKAEIABADQAFAMACAOQARADAEgUQAFgUAHgDQAmAagfBRQAcgEAZgkQAEADAEAXQADARARgDQAGgHAHgjQAEgcAQgEQBGAWAYgkQADACAPAVQAKAOASgDQgJguA2gRQAzgRgCA8QAeADAEgyQAIADALAOIgCAEQAUBEA1AgQgtgrgCgsIADgBIABgFIAxAAQAEgEgEguQgEgsASgHQAKAQAfgDQAFhiAjgIQAHAAAIALQAHAKALgBQANgwAVAAQAWALAYAsQAFgDACgVQADgRALAAQAPAHARAgQAOAfAUAEQgIhDAVgOQALABAHAWQAHATAPgBQAJABgCgSQgCgSAJABQAFARAGAGQAEAEAFgBQAHgEAKgOIgCgFQAAguAlgJIAIgCQgGAAgGACQgKADgJAJIgBgMIAAgIIA1AAQAEgEgEguQgEgrASgHQAJAPAfgCQABgRAIgvIAAgCIIxAAIAAACIoxAAIIxAAIAAAhIgdAAQgHAHgOgBIgNgGIgBABIAAABQgNAXAAAHQAAAVAGAMIADAHIgOASIhOC+IhlBkIAAHUQBeD0CpC6QAxA3A4AyQgRCCgVCRIgBAAIgCgBQgVAehJgeQgLAZgRAGIgPABQgXgPgBgRQgkAWgZAEQgKgBgCgNQgDgRgFgCQg1AbgbANQACghgPAAQgDAJgZAGIgKADIgBAAQgKAHgaAAQgEAAgUAJIgHgJQgMgNgKAAQgKAAgIAOQgGALgGADIgDAAIgDAAgEgkLgWQIAKABIAAACIgKAFgEAp5gW3IAKAAIgBABIgQAAgEAqSgW5IAAAAIABAAIAAAAgAhe8DIhEgCIV8AAIA4AAIgCABIgRAJIgigJIgDgBIgBABIgNAigAhe8DIU3gBgAUQ8EIgzAAgEAqTgb4IAAgNIAAANgEgj/gb9IgMACIAAgJIBPAAIhPAAIAAgBIBPABIF4ACImtAHQgGgCgIAAgApF8Dg");
	this.shape_9.setTransform(131.7,186.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#0033CC","#0066FF"],[0,1],-0.1,18.1,-0.1,-17.9).s().p("AiOCkQgQg6gSgXQgaAPgkgQQgngRghAMQgJgDgqghQgdgYgpAGQABgLgCgIQgFgRgUgFQgcgHgSAWQgDgMAWggQAagjABgVQgKgRgDgJQgCABgagBQgSgCgBAJQgLgFAFgNIAGgXIC/ACIDZABQAJgDALAAQAJAAAIADIJFgDIAQAAIgQAuIhEC2IgJAZQgZgQgwAeQgLgcghgKIgEgBQgsgPgJgGQgRgDgEASIgBAGIgBANIgDAMQgpgRgyAGQg6AHgZAlQgbgTgiASQglASgcgRQgiApgkAAIgEAAg");
	this.shape_10.setTransform(184.6,58.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#0033CC","#0066FF"],[0,1],-0.1,15.3,-0.1,-15.1).s().p("ABSBvQgTAAgiAhQgFgXg+AJQgBgSgggIQgOAAgOANQgNANgMAAQgZgFgCgOIALggIAGgTQAyiQAohAICLAAQAMDLAtBeQgxgfgVgHg");
	this.shape_11.setTransform(249,56.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#006666","#45FF24"],[0,1],29.5,236.1,29.5,-204.3).s().p("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");
	this.shape_12.setTransform(96.1,266.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#006666","#45FF24"],[0,1],-2344.1,233.1,-2344.1,-207.3).s().p("AChPFIAAgHIrHAAIAA94IAAgBIAWAAQGDgBC5gFIB1gDIAAgBQARABAfAAQBfAAAoAGIA1AKQAlAIAUAAQAKAABWgUIABAAIAAeGg");
	this.shape_13.setTransform(386.3,269.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#006600","#009900"],[0,1],19.2,71.9,19.2,-71.9).s().p("AtkNPQgTgIgRAAQgIAAgUAEQgRgTgMAAQgNAZgJAAQgLgGgIAAQAOAEg5AAQgXgJgSAAIgCAAQAViRARiCQg4gygyg3Qioi7hejzIAAnTIBkhkIBPi+IAOgSIgEgHQgFgNAAgUQAAgHANgXIAAgBIABgBIAMAGQAPAAAHgHIAdAAQAIAKAFASQAJAAAXgMQAVAAANAXQAIAAAUgLQAOAAAXAQIAFAAIABAAIAjAUQATgnAVAGQAHAAgGANQgFALASgDQAXgGAWggQgIAMAJAMQAWgDAcgZIAMgKIAqghIADAAQgDAngEAGQgKASAKAIQAOADAZgNQAUgLAIAIQAAAVgTAXQgUAZgBASQAgAAAjgaQAJASgBAXQgCAlghAwQARAEAPgSQALgPAMAKQAIA9gqBCQAXANBAgHQAHAlgbAkQAKAAAlgZQAcgSASAXQgFAcgaAiQgcAkgHAWQAQAKAWgPQAdgVAMAAIAVBKIABAAQAMAAAIgQQAHgRASAGQAjAOAuA1QASgEAdgRQAqAPAEAuQARADAEgTQAGgVAHgDQAlAbgfBRQAcgFAZgkQAFADAEAYQABAHAEADQAFAFAJgBQAFgHAHgfIABgEQAEgcARgEQBFAWAYgkQADABAPAVQAJAOASgDQgIguA0gRQA0gQgBA8QAdACAEgyQAJADAMARQALAMAOACIAEgQQAGgfAKgMIABgBIABABQAaAuAagcQARAGAQAbQAQAeASAEQAEgBgDgcQgBgZATABQARAPARAtQAMAAAjgYQAYgQAYAVQAFgDALgRQAJgOAOAAQAZAGgEAoQAMAAANgPQALgOARADQAFAEACAXQABAUAMAAQAKgGANgbQAMgYASgDQAMADAOAZQAJATA1gCQAJAQALAMQAJAAAJgTQAIgPATAHQAYASAIAbIACAKQALABAGgLIABAAIAAgDQAHgQAJABQAIAEAnAKIAAAEIAPAAQASAGAHAJQAAgIABgHQACgNAKgFIANATQASAbADABQAGgPAHgLQAPgYATgKQgGAFANAcQAhgCA1gSQAGACABAVQABAHADAEQAEAGAGAAQAFgCAFgBIAQACQALAFAKAMQAfAjAPADQADgVAFAAQAQAVAngIIAJgCQAFAGAhAAQAIAAAUgLIAANzIAAAIIgFADQgUgegcAVQgVgLgFAWIgugdQgYAGgGgBQgWgegDAAQgJAAgEAPQgEAQgQAHQgQAGgigWQgDALgQAAQgGgIgKAAQghALgOAYQAFgegBAAQgOgIgQALQgJAJgLgUQgKgOgGAfQgHgtgLAAIAAA1QgcgOgOgPIgSgVIgTAbQAAgHgLAAQgQAAgJAEQgLAFgDAKIgOACIhVAFIgkABQhMAFg5gFIgRgBIgQgCIgegGIAAADIAAAAIiLgVQhBAbgmAAQgIghgRAAQgHAAgEAEIhDAEQgWgegLAAQgDAAgRATIgCgBQAAgrgUAAQgLAAgmAmIgXAlQgCAGg0gBIhHgWQgOAUgfAAQgDgigTAAQgDANhSAAQgYgKgaAAQgUAOgmAAQAGgIgZAAQgZAJgOABQgLAAgHgOQgGgQgIAAQgOAAgSAVQgVAZgEABQgRg6gIAAIgHADQADAbgjAOQhHATAAAHIgCABIgCgHIgkgDQgxAXgLAAQgfgXgKAAQgRAAgXAaQgOAPgSAAQgOAAgQgJgAsAtVIADgCIAAACgAsAtVg");
	this.shape_14.setTransform(189.3,92.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#0033CC","#0066FF"],[0,1],4.4,21,4.4,-22.5).s().p("AEjDQIgsgBQg1AAglgZQgfgUgVglQgdgChBAPQgDgagQgHQgTABgNARIgVAdQgKgrgXgEQgRAOgEAaQhLgmggAZQgXgtgyAFQgki8gEhwIKfACIAAGOIghARIgMgBg");
	this.shape_15.setTransform(297.6,62.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#006600","#009900"],[0,1],-1430.7,40.4,-1430.7,-103.4).s().p("AImHxQgCgQgDADQAEAFgGAAIhHgBQgIAAgCgDQgCgEgIgCQgfgKiZAAIhrAOIAAgMQgjAFgHgBQg2gBhTAAIoUATIAAtzIAEgDIAOAAIAEgGIgCgDIAkgXQALgBAKAIIABAAIANABIAAgKIALAMQATADAEALIAEABIgDAAIACAFQALgOAjgCIAggOQAFAAAIAPIACAEQAOAEADAJIAGACIADgCIANAAQADgEAFgDIgNAAIANgNQAXgUALAAQAPAAAtADIACgNQAAgmABgCQAOAMAPAdQAIASAVAAQAQAAgCgEQAAgLAbg5QAKAJAKASQAPAQA4AAQBrAAADgDQABgCgBgHQABgEAdgCIALAAQACAAADgBIABgCQACgDAJAAQARAAADAGQACAAAEgDQAFgEANAAQACAAAaAQQAGAAAPgKIAOAIQALAHAKAAQALAAAJgOQAKgQADgCQAKAYAMAAQADAAADgLQAEgMAEgCIAOARQARAQAPAAQAGAAAEgNQAFgOALAAIALALQAOALAKAAQAHAAAQgJQAQgKAHAAIAGAEQAFAFAOAAIADAAIAAPJg");
	this.shape_16.setTransform(386.3,123.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#0033CC","#0066FF"],[0,1],-400.7,21.4,-400.7,-22.1).s().p("AoWDUIAEgCIACACIgGAAgAmlDFQgQAAgHgVQgHgVgPAAQgKAAAAADIACACIAAASQgagKgqAXIgIAEIAAmOIFhAAQEIAABCgFIADgBQAGAAAJACIAAADIgBAAIAAAAIAhAAQBAgGB7AAIC1gBIAAFTIgMABQgDAAgDgFQgBgFgHAAQgHAAgRAKQgRAJgGAAQgNAAgJgKQgIgLgIAAQgLAAgJANIgGAOQgJgDgRgQQgQgQgCAAQgMAAgGATQgIgQgMAAQgKAAgIAQQgKAPgHAAQgGAAgKgHQgIgHgJAAIgUAJQgUgQgMAAQgPAGgGAAQgIgFgLAAQgOAHgFAAIAAAAIgMgBIAAgEIgggBQgIALgKACQgOAFhVAAQgdAAgTgUQgXgXgRgFQgeAkgDAeIgIgCQgCgLgPgPQgSgSgOAAQgSAEgFAAIAAAqIAGAEQhNgKgKARQgDAJgDAEQgEAIgRACQgMgagFgLQgNAAgmAUIgkAUIAAAAg");
	this.shape_17.setTransform(386.3,62.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#60ECFF","#FFFFFF"],[0,0.506],-2306,-118.8,-2306,294.6).s().p("AH9ChIAAgBIAAAAIAAABIgCAAIgBAAIAAAAQgJAAgEACIgKAAIqWAAIgWAAIAAkrQk+AHlzgpIgJgBIRNAAQCagGCZAGIAAAAIGHAAIAAFaQgCgvmFAhgAH9ieIAAAAIAAgNIAAANgAt6iqIV3gBg");
	this.shape_18.setTransform(351.4,23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#60ECFF","#FFFFFF"],[0,0.506],29.8,-137.1,29.8,276.3).s().p("AdQFtIAAgEIAPAEIgPAAgAcQFtIABgDIAAADgA7WBxQgPg6gSgYQgUAMgagHQgDgGgDgDIgHgFQgJgGgOgDIgMgCQgqAJgUAAIgKAAIgKgBIAAAHIgeAPQgFgSgEgKQgHgSgSAAQgMAAgQAfQgfgggWAAQgYAAgQAeQgHgPgMAAQgOAAgFAjIgBAAQgEgEgOgRQgPgOgWAAQgMAAgFARQgCAKgCAPIgLgLQgKgIgNAAQgNAAgBAPIgMgIQgVAVgKAYIAAm2IGHACIAAAIIALgBQAJAAAFABIGugHIJLgBIBrABIhrgBIBrgCIAAADQgEAmgCAGQgHgIgWAAIgKABQgLAMgFAfQgEAXgBAiIgYACQgbADgCACIAFAPIAIARIgHAPQgIAFgHABQACgOgVgNQgKAJgLAZQgFgRgcgDIgiAuQgdgkgRgDIgVAUQgXgdgeACQgVAYgMAKQgKgKgeADQgNAKgcBaQgIgKgfADQgSAWgDBOIgVACIgMgcIgDAMQgogRgyAFQg7AHgZAmQgbgUgjATQglASgcgRQgiApgkAAIgEAAgA1VBHIACABIgCABgA1uA4IACACIgEABgAFhgNQgZgcgVgGQgdASADgLQAZgngPg5QgJghgEgXQgGghACgQQgkACgFgIQAUgZgGgcQgJgOgXAEQgZAFgEgCQACgHAEgmIBFAAIUrAhQgiArgoBUIgHAQQg2BygfAqIgYAAQmTAFmxACIjNAAgAaOgUQgDgTgNiZIgKh6QABgCAAglIAJAAQFzAqE+gIIAAEsIqhgBgAXNgUQAShKA5hiIAZgpQAHAQAGAZQANA9AHBvgAhLklIgDAEIgLgGQgSgOgKAAIgaAKQgHgPgNgFIggAAIgKAFIgPgmIgBgCIgEgKIAHAKIGAAAIgCACIgrAhQghg+g4A+IgKADQgvAQgcATQgIgKgOgCgAjclgIGAAAgADAlgIAAgCIBFACgADAlggAZ1lhIAAgBIAJABgAZ1lhg");
	this.shape_19.setTransform(96.1,42);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F3BC85").s().p("Aj5A5IACgJIAPABQgEAIgIAAIgFAAgAjRA0IAGABIAAAEIgGgFgADkgMIAWgNQgFAJgIAFIgBAAQgEAAgEgBgADXgbIgCgGIACAAQgEgcAKAGIAFApQgHgDgEgKgACwgcIAPgCQgDAFgEACIgIgFg");
	this.shape_20.setTransform(228.8,298.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("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");
	this.shape_21.setTransform(123.7,178.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#996633").s().p("AirEGQAGgnAWgwIAcg9IAghHQABgpATgGQATglANgSQACA1gQAOIgNAaQgMAbgnB6IgGAQQgMAjgMAcQgRAkgQAXQgFgbAGgggACSCjIgBgOQgHgLgDgzIgDhFIABgYQgPgfgDg9IgDg8QgDgpgDgWIgBgDIgBgDIgCgMIABAAIgCgjQgEgFgJgoIgBgBIAEABIgDAAIADAAIAhAJQgDAoAAASIAAAMIAGBSQAJBeALBNIgGgHIAEA2QAAASAEAiIACALIADATIAVCFQgXgigGhOgABLkEQAOgBgJAjQgFAAgiAuQgGgNAohDgABbk/g");
	this.shape_22.setTransform(247.1,38.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009933").s().p("EgkdAAoIAAgBIABABIAAAAIAAAAgA0JAlIAMgFIADAFIgHAAIgIAAgAwnASQAMAEARAJIg0ABQALgFAMgJgAvJASQAKAHALAEIgpABQAIgMAMAAgEgh/AADQADgFADgJIAAgBIAAABQAAAEgEAKgEAj0gAaIAqAAIh1ACIBLgCgAWdgdIAIgKIAFAKIgGAAIgHAAgARvggIAJgHIAKAHIgTAAg");
	this.shape_23.setTransform(168.9,175.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("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");
	this.shape_24.setTransform(151.5,176.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SnakeSleep, new cjs.Rectangle(-140.5,5,583.4,362.7), null);


(lib.SlimSnake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.instance = new lib.SnakeHead();
	this.instance.parent = this;
	this.instance.setTransform(23.9,7.8,1,1,0,0,0,23.9,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,x:24.7,y:2.2},5).to({scaleX:1,scaleY:1,rotation:10.8,x:24.3,y:8.2},9).to({scaleX:1,scaleY:1,rotation:0,x:23.9,y:7.8},6).wait(1));

	// Slim
	this.instance_1 = new lib.Slim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34,30,1,1,0,0,0,19.3,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:34.4,y:24.3},5).to({x:34,y:30},9).wait(7));

	// Body
	this.instance_2 = new lib.SnakeBody();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.2,99.8,1,1,0,0,0,12.3,47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.7,scaleY:1.13},5).to({scaleX:1,scaleY:1},9).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,148.3);


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


(lib.SnakeWake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BDA5FE","#550055"],[0,1],8.6,-6.3,0,8.6,-6.3,34.6).s().p("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");
	this.shape.setTransform(167,316.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnEoQgJgLAIgRQgBgGgNAGQgLgHACgWQARAIAVgDQABAGAJAUQAGANgDARQgGADgGAAQgJAAgGgHgAgDD8IAEgDIACAMIgGgJgAAlBuQgJgdAUgKQAigEAVAqQgGAGgDAHQABgIgFgKQgTgEgIAKQgKAJANAIQgFADgFAAQgMAAgHgUgAhkiYQAgAEAJAOQgKAHgSgIQgLgEgFAIIADgVgAhiijIAFgbQAdABArAIQgWASgzAAIgEAAgAgekYQgHgIALAAQgJAAgIgDIABgEQAOAAANgEIAMgDQgCAogVACQAFgIgJgMgAhKkIIAFgDIgEAGIgBgDg");
	this.shape_1.setTransform(143.8,323.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#006666","#45FF24"],[0,1],42.2,150.1,42.2,-158).s().p("AhZCQQALASAOAPIgMATQgIgagFgagAgiAsQAAgVgCgJQgLgCAAAOIABAZIgSghQACAYgUgMQgJgGgGgIIACgVQADAAADADQAMALADAAQANgBgNgRQAOAAgEASQARgFAGgEQgHgJAHgJQANgEAGANQACAkgCAlQgKgDgCgRgAgfgcQgBgGAHgCQAHgCAAgEQACAAADATQgJgGgJABgAgYhVQgnAAgUgFIAAgSQAbgpASgVIABgBIAAgBIABgBQAGAJADAdQAqAAAEg7QArgFAkAQIgdANIgBABQgGAFgEAHIAAABIgBACQAEARAcAPQgPAGgzApQgGgJgpgBg");
	this.shape_2.setTransform(142.9,312.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");
	this.shape_3.setTransform(173.4,327.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.SlimSnake();
	this.instance.parent = this;
	this.instance.setTransform(168.6,152.8,1.949,1.949,0,0,0,26.7,73.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AN8AlICDAAAAzAlIM2AAA5JAlIAAAAIAWAAA68AlIBAAAA36AlIHYAAAQGAlIZJAAEgo5gAkIAAA2IAAATIgVAAEgoFAAlIgvAAIgFAA");
	this.shape_4.setTransform(177.1,136);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("EApFgDIIAAkYIAAgTIAAgCIAAgGIAAAAIAA1VMhSJAAAIAAAAIAAUUEApFAGrIAAgSIAAjSIAAhWIAAkjEApFAG1IAAAJIAAA+IAAAAIAAGLIAAALIAAAeIAAAAIAAOgIjoAAMg7kgABIgGAAIy3ABIAGn0IgEulIgCunEAk7AdRIAFAAIAdgBAwenzIgOAAA5UnzIgXAAA4pnzIgUAA");
	this.shape_5.setTransform(178.1,189.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AAAABIAAgB");
	this.shape_6.setTransform(334.7,232);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AAAAAIAAAAIAAAAg");
	this.shape_7.setTransform(158.5,111.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAOBtIgGgGQgDgDABgGQgsg3gPgLIgLgIIArA4QgkADgmgLIgZgGIgBAAIgLgMIgCgKIAAgNQgBgGgCgGIgCgEQgNgXgEgaQgFgTAAgUIgBgLIgBgOQAbAXAgAAQAxAFAygJQAcgFAZgVIAiAsQAGAHAMAJQAJAbAQAXQAXAmAFAlQACAKAJAHQgEAHgYgBQgmAEgmAGIgXABIgXgBg");
	this.shape_8.setTransform(229.9,288);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AgFAJQgEgUgOgCIADgFQAGADAKAAQAXABAFAGIgMAQQgJALgHAAIgBgKg");
	this.shape_9.setTransform(231.8,234.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3BC85").s().p("AAvKDIAJgcQAIgZACgEQBDgJANgrQhjhQgvgqQhRhKgshGIBBAAQAIApBCgEQAHANAVA+QA7AKAsA5QAYAfAvBCQhCBLg9ATQAAgOgFgBQgDABgCATQgJgFgEgTQgEABgCAOQgCAJgHAAIgEAAgAF1JHQgFgOgIgBQgCAPgHADQgrgZggACQgMgvhEgtQhFgugOgoIhChQQAHgHAVgCQAfgDACgBQALASARAqIAhAAQAdAMAZAoIAoBBQAFAIAQAMQANAKgCAMQAVACAiAQQAhAOAYABQgEApgPAKIgBAAQgKAAgEgMgAjbAwQgHgLACgVQACgXgCgJQgjg0ADglQACgfAUgfQAZglAOgXQgmgDgtAFQg1AHgSAAQgagxANhWIAAgEQAQhsACgfIAAgHQACgJAFAFIADADQACAFgEAFQAMgFgCgXQgGgCgKAEIgMAHQgWANgLABIAdgWIAMgHQAZgQAgADQgHgOgTACQgYAHgKAAQAHgKAYgHQAUgGAggEQgCAJARAAQgBAjglA/QgBA0AFA9IAGA9QAggNA2AJIBSANQAWgCALgbQALALAoAEQgIgMgcgHQgYgFgFgSQgCgGABgIQAEgaAigyQAMAKAHgDIATgLQgBgEgNgBQgLgBACgIQgDgRAVADQAKgEAAALQgBAMAFAAQAIg5ApANIABgBIANgKQABAFABACQAJAKAJgKQAFgIAFANIADAGQACAEAEADQACAVgHAOQAGABADgCQAEgBACgFQAFgKAIACQAAAMgOAHIgDAAQgOAGgCAIQAGAGAMgJQAPgJAJACQgWAlgZAfQgcAmggAfQArAfAuAGQACgBADgSQBHADARA6QBDgPApBQQgkBZjIgQIgfgDQAUgCAJgCQhDgagageQgNAFgWAcQgTAXgaAAQAGgRAWgWQAXgXAGgNQgTACgYARQgZARgRABQAUggAugOQgIgOgUAJQgbAMgLgDQAIgIAVgFIAIgCQATgFAFgDQgKgJgWABQgfACgRgEQAvgeBDAaQBAAaANAwQATgCBEgcQA0gTAxADQgVgPg4ANQg0ALgRgXQALgSgLgKQgZAIgMA1QgUgvhGgQQhIgTg0AfQgBAUArgCQgDAKgVAIQgUAIgDALQAKAOAggOQgPALgMARQASAQAcgNIASgKIAYgQQABAHgTATQgVAVABASQAiALApg9IAtAdQAXASgCAXQgBAHggAqQgZAiAQAcQgUAahUABIgJAAQhOAAgUgggAiVAGQgCAQAHANQAIAOALgLQgKABgCgQQgDgRgJAAIAAAAgAi8AXQALAMAKgGQgOgdgOgIQgEARALAOgAg2gdQAFAdAJALQAIhBgggTQAFAKAFAigAiigtQAHAlALAAQgJgMAFgQQAGgSgCgEQgEAGgOAHgAjEghQAGATANADQgFgtgNgHQgHAMAGASgACNjTQgQAFgDAHQAJAHAPgDQgBgGAQgIQAMgGgOgHQgDAHgPAEgAkFj/QAFAFARABQARABADgHQgHADgQgGIgJgBQgHAAgDAEgAg8l5QgBANAEAKQAHARAXAHQASgOAJgMQAOgTgFgQQgXAIgugIQABAGAGADIgCAFIgDAAIgCAAgAAFmtQAIAFAOgFQAPgGAAgMIgHAAQgYAAgGASgABHnNQABgOgZgEQACANAWAFgAl6obQgUgGgIgBQAFgFATAAQARABAGAEQgCAIgKAAIgHgBgAlLpEQgqgDgXgSQAUgFBFATQABgVgSgKQgbgNgDgDQAXgRAgASQAeAQAIAZQgWANggAAIgQgBg");
	this.shape_10.setTransform(235,270.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AA/BBIgKgXIgbgFIgJgcIgrgMQALgggTgdIASAEIAMArQA9gYAqArIABAMQgCgFgEgEQgdgfgPAQIAEADQAUACAJATIgggFIAZAXIARAHIAAAIIgEAEIgFgCIADAJIgXAHgAhjgeQAHgNAYAKQAMAEAWAMQgpgOgYABgAhbgxQAJgQAWAJQATAIAHANQgkgOgVAAg");
	this.shape_11.setTransform(243.3,220.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#BDA5FE","#550055"],[0,1],8.6,-6,0,8.6,-6,34.6).s().p("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");
	this.shape_12.setTransform(167,315.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#006600","#009900"],[0,1],67.8,43.7,67.8,-43.5).s().p("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");
	this.shape_13.setTransform(35.7,173.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#0033CC","#0066FF"],[0,1],-0.1,10.7,-0.1,-10.5).s().p("AA5BOQgNAAgXAXQgEgRgrAHQgBgMgXgGQgJAAgKAIQgJAKgJAAQgRgEgBgJIAHgXIAEgNQAjhkAdgtIBgAAQAICOAgBBQgigWgPgEg");
	this.shape_14.setTransform(271.5,150.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AAAABIAAgCIAAADg");
	this.shape_15.setTransform(278.1,116);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#0033CC","#0066FF"],[0,1],86.7,12.9,86.7,-12.2).s().p("AMAB1QgLgogNgQQgSAKgagLQgbgMgWAJQgHgCgdgYQgVgQgcAEQAAgIgBgGQgEgLgOgEQgTgEgNAOQgCgIAQgWQARgYABgPQgHgMgCgHQgBABgSgBQgNAAgBAFQgHgDADgJIAEgQICGABICYABQAGgCAIAAQAGAAAGACIGXgCIALAAIgLAgIgwB/IgGARQgRgKgiAUQgIgTgXgHIgDgBQgegKgHgFQgMgCgDANIAAAEIgBAJIgCAIQgdgLgjAEQgpAFgRAaQgTgOgYANQgaANgUgMQgYAcgYAAIgDAAgAvPggQgLgogNgRQgCACgpABIgCAAIAAgBIgDAAIAEgCIAAAAIABAAIgBgBIgqABIAcABIgBADIgSAAIgIAAIgBAAIgGAAIgJAAIgJAAQgKgCgFADIgMAAIgCgFIgCgFIADgDQADgEAAgCQAAgBgWgMIHYAAQgDARAAAZIgPACIgJgUIgCAIQgcgLgjAEQgpAEgSAbQgSgOgZANQgaANgTgMQgYAcgZAAIgDAAgAzBhYIgRgbIAAgBIAWAAIAAABIgDAbIgBAAIgBAAg");
	this.shape_16.setTransform(139.6,151.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#996633").s().p("AiiG0QAFgbAPghIATgrIAXgyIABgMQADgSAKgEQANgZAJgNQABAlgLAKIgGANIgDAFQgIAUgcBVIgEALQgIAZgJATQgLAZgLAQQgEgSAEgXgAA8FvIgBgKQgFgIgCgkIgCgqIAAgFIAAgSQgKgWgCgqQgDg8gEgbIAAgCIgBgBIgCgJIABAAIgBgZQgEgFADgGIAAgRQAAgoADgTIAGgbQANjIA/hcQAOhMAhg2QAJgBgEAGQhPDHgkDFQAAASgHAXIgBACIgHAvIAAANIADAHIABABQAEAPAAAZIAAAIQAHBlAMBNIgFgFIABAOIACAYQAAANADAXIABAIIACANIAPBdQgQgXgEg3gAAKBHQAKgBgGAYQgEAAgXAgQgEgJAbgugABagaQAugnAEgJQgMAbg/BHQgIgWAhgcg");
	this.shape_17.setTransform(274.4,112.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("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");
	this.shape_18.setTransform(180.2,214.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#006666","#45FF24"],[0,1],7,272.9,7,-35.2).s().p("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");
	this.shape_19.setTransform(178.1,189.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009933").s().p("A2EPVIAAgBIABAAIAAAAIAAABgAqpPSIAIgDIACADIgFAAIgFAAgAoLPGIAUAIIglABIARgJgAnKPGQAHAEAIADIgdAAQAGgHAIAAgAgIO2QAEgCADgEIAUAJQALAAABgEQACAAADADIADgBIgCAPQgWgLgXgFgACOOuIgBgFIABAAIAGAUIgGgPgA0VO7IAEgLIAAgBIAAABQAAADgDAIgACPOpQADABAEgEIAHAIQACAAAHgFIAIgBQAEAAAEAFQAEAAACgBQAJACAPAAIgUACQgNACgKAAQgTAAgHgJgAJzOxIAAAAIABAAgAWAOnIAFgBIAAABIgFAAgATJOkIAGgHIADAHIgEAAIgFAAgAP2OiIAGgFIAHAFIgNAAgAS4mfQADgjgOgKQgGAGgFAiQgDAcgSACQgDhJgCgGQAMAAAMgKQgDgKgLAAQAGgJASABQACgNgMgBQgOgCAAALQgCgBgDgSQghgGgJgIQAVAKAQgFQgbhCgBgFQAQgFANAcQARAiAGAFQAOghAEgOQALADgGAQQgHAUAHAIQAJABAGgIQAGgJAHABIBABKQAhAygSAyQgVgNgTg7QgTg1gegLQAcBOgpBMQgHgNADgogAQKsKQgCAHADAUQAEAVgFAMQgLgngIgQQgUgEgQAMQgSAOgLABQgBgQAQgLQATgNADgHQgGgEgXAIQgZAKgLgKQAJgLAegFQAfgEAFgHQgqgHg2AUQg7AZgcAJQBAhIBfgNQgcgeh+AQQAVgYA6gIQA2gHAoALQABgVgggWQgqgegGgHQBHgDBFBJQAVgqAoAFQgIAQgaAVQBCAQAMAFQAuASAIAkIhZgXQAGAMAeAaQAbAcgCAgQhCgtgSgGQAAAIAPAmQALAngRASQg1g2gWgQg");
	this.shape_20.setTransform(193.4,138.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#006600","#009900"],[0,1],-42.9,49.7,-42.9,-50.9).s().p("AyTJKQgNgGgMAAQgGAAgNADQgMgOgJAAQgJASgGAAQgIgEgFAAQAKADgoAAQgRgHgNAAIgBAAIAbjAQitiahUjcIAAlHIBGhGIA2iFIAKgMIgCgFQgEgJAAgOQAAgFAJgRIABAAIAJAEQAQAAACgNQATAAAIAcQAFAAARgJQAPAAAIAQQAGAAAOgHQAKAAAQAKIADAAIABAAIAYAPQAOgbAPAEQAEAAgDAIQgEAIAMgCQAQgEAQgXQgGAJAHAIQAPgCAUgRQASgRARgBQAHAHgHAMQgHANAHAFQAJACASgIQAOgIAGAGQAAAOgOAQQgOARgBANQAXAAAYgSQASAjgkA1QALADALgNQAIgKAIAHQAFAogZArIgEAFQAQAKAtgFQAEAagSAZQAHAAAagSQAUgMAMAQQgEAUgSAXQgUAagFAPQAMAHAQgLQATgOAJAAIAPAzIAAAAQAJABAFgMQAFgLANAEQAYAJAgAlQANgCAUgMQAeALADAgQALACADgOQAEgPAFgCQAaATgVA5QATgDASgaQADACADARQACAMALgCQAEgFAFgZQADgTAMgDQAxAPAQgZQACABALAPQAHAJAMgCQgGggAlgLQAlgMgBAqQAUACADgjQAGACAJALQAHAJAKABIADgLQAEgWAHgIIABgBIAAABQATAgASgTQALAEAMATQALAVANADQADgBgCgUQgBgRANABQAMAKAMAfQAIAAAZgQQAQgMARAPQAEgCAIgMQAFgKAKAAQASAEgDAdQAJAAAIgLQAIgKAMACQAEADABARQABANAIAAQAHgEAJgTQAJgRAMgCQAIACAKASQAHANAlgBQAGALAIAIQAGAAAGgNQAFgKAOAEQAQANAGATIABAHQAIAAAEgHIABAAIAAgCQAFgLAFAAQAGADAcAHIAAADIAKAAQANAEAFAGIAAgKQACgJAHgEIAJAOQANASABABIAJgSQALgRANgHQgEAEAJAUQAXgCAlgNQAEACABAPQABAFACACQADAEAEAAIAHgCIALACQAIADAHAJQAWAYAKACQACgOADAAQAMAOAcgGQAMgCARgCQAEADAMAAQAKAAAPgFIAMAAIAXgBIAMAHQAaAPAHAAQAMAAAAgLIgBgJQAXAEABgFIADgEIAKAAQAEACACAEQAOAHAxAAQAUAAADgCQACgBADgHQBCAEASgFQAEgBABgCIgMgQQAOAOAAgFQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAIACAEgDQAHABAHAFIASgFQARgFAjAAQAPAAAgADQA3ADgDgIQAGAAAAAGQAAAHgFACQAAALATAAQAbAAAAgLQgLgOAAgDQAAgNAsgTIAMAUQAOARAUAAQAPAAAIgMQAIgMAOAAQAGAAAAAFQAEABAuACIALAKQAHAEATAAQANAAAMgGQAMgHAgAAQAdAAATAYQATAXAPAAQAOAAABgHIgCgKIAKgDQAGAAAFAFQAEAGAOAAQAQAAARgJIAXANQAmAIAcABIAAEjQAHApgHAtIAAhWIAABWIAADTQgEANgHADIgIgBIhjAOQgDAAAAgHQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgDgFAAIgEADIgLANIgJgOQgHgIgFAAIgIAIQgNAKgOAAIgagLQgWgJgIAAQgbAFgHAAQgIAAgDgEQgDgEgGAAQgFAAgMAHIgIADQgOAGgTgDIgTgDIgJgBIgBABQgEAGgGADQgNAGg1AAQghgOgFAAQgHAAAAACIABADQgDAEhAAAQgJgGgHAAQgHAAgHAEQgJAFgTAAQgWABgGABQgJAEhCgDIgBAAIAAAAQgNgIgEAAIgIACIAAADIgBAAQgBgHgDgGQgHgOgNAAIgGABIAAAFQADAEAEADIAAABQAAAGgDACIgTAAIgngHIgwAAIingPIg1AUQgOgUgTAOQgPgHgEAPIgggUQgQAEgEAAQgQgWgCAAQgHAAgDALQgCALgLAFQgLAEgYgPQgCAIgMAAQgEgGgHAAQgXAIgKAQQAEgUgBAAQgKgGgKAIQgHAGgIgOQgHgKgEAWQgFgggHAAIAAAlQgUgJgKgLIgMgPIgOATQAAgFgIAAQgXAAgEAOIgJABIhVAEQg0ADgpgDIgLgBQgegDgWgHQgCAOgTgBQgRgBgEgMQgWAUgxgUQgPAPgNADQgXgKgFgNIAFgIIAUgPQAOAAAHAFQAHAAAAgGIgIgSQAPgDAAgLQAAgKgMgEQALgQAGgQQgPgYgegKQghgJgdAOQgDgcgHgKQgPgJgYAHQgXAJgRgLQhCA4gEAmQAPgZAggKQAIAEAQACIALAKQgNAEgEAPQgigIgXAqQgfA5gKAGQgKgIgVADQgbADgHgBQgRgPgHAAIgSAPIgWgIQgFgCgCADIgCgCQgNAIgFAAQgBgKgEgEIgNANQgHgkANgnQAfheABgIQgWgugQgSQgagggwADQgSATAXAgQgbgJgPgCQgagFgCAVQANAXA5AOIg0AAQgeABgDAbQAUAGAqAIQgGAGgQAGQgMAIABANQAKAIATgLQARgKAFADIgWBwQgEADgDAGIgHgEQgDAIgJAAQgMgHgFAAIAAAAIAAgBQgMAFgjgNQABAHgIAHIgHAEIgFgEQAAgGgGAAIgBAAIgDgCIAAADIgDABIgZgCQgiAQgIAAQgWgQgGAAQgMAAgRASQgJALgNAAQgJAAgMgGgAYNIigAYNFPQAPCmgPAtgAlsH+IABAAIgBABgAYNFPIAAAAgAIBg/IAJAAIgFADIgEgDg");
	this.shape_21.setTransform(286.1,176);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#0033CC","#0066FF"],[0,1],-52.9,14.6,-52.9,-15.8).s().p("AkKCCIgOgJIhCAYIgKAAIgegBQglAAgagSQgWgOgOgZQgVgCguALQgCgTgLgFQgOABgJAMIgOAVQgHgfgRgDQgMAKgCATQg1gbgXASQgPgggjAEQgaiEgDhOIIRAAQD1AAMwAOIAAEXQgRgDgeAAQglgPgHAAQgMAIgRAAQgFAAgIgFQgIgGgKAAQgXAAgEAUQgHgRgJgKQgPgUgtAAQgrAAgFAHQgFAGgRAAQgQAAgHgFQgEgGgCgBQgJgGgegCIgggCQgPAAgKANQgKAMgKAAQgEAAgMgTQgMgTgLAAQgNAAgYASQgXASgBAJQgFgLgWAAQgjAFgHAAIg4gDQgggCgQAGIgIAEIgGADQAAgHgUAAQgMAAgDAGQgCAGgFAAIhUACQgDADgDAAQgDACABAEQAAACgeAAQgZAAgPgIQgOgIgFAAQgSAAgdAVIgIAAIgbgRgAkUCSIAAgBIABABIAAAAIgBAAgAkbCNIAEADIgLAAIAHgDg");
	this.shape_22.setTransform(361.4,154.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("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gQAAgIAJQgHAJgKAAQgGAAgNgFQgXAAgIAJQgJAJgLAAIgGADIgvAAIAvAAIgiASIgFgBQgFgCAAgFQAAgJgIACIAFgDIAqgTQAmgUAQAAQARAFAHAAQAGAAAJgIQAJgJAMAAQAQAAAIAIIAIAJQACgJAEgGQAHgKAngEQAEAAAHgPQAHgOATAAQASAAALANQAGAHAFALQAVgKAPgRQAOgRgBgMQgBgHAEgLIAFgNQALgXAMAAQAIAAANARQAMASAHAAQAVgKAIAAQAJAAAQAWIAKANIAfAxQATgnAZAAQAcAAAAAcIAAACQASgHAJAAQAPAAALAJQALAJAdAAQAFgLATAAQAKAAArAYQAvAZAZAVQAGgTAPAAQAJAAAGAIIAGAMQAHAJAXABQAaACADACIAFgOIACgFQAFgMANgCIAEgBQAHAAAHAGQAGAFAHAJIAAABIASAbIABADIABgDIACgbIAAgBIAVAAIgVAAIABgDQADgRAQAAIAlAUQAWANAAABQAAACgEAEIgDADIADAFIACAFIADAGQADAAAFgGIABgBQAFgCAKACIALADIADgBIADgCIAHAAIAAAAIAJAAIARgBIAHAAIAHAAIABAAIABAAQApgBADgCQANARAKAoQAbACAZgfQATAMAbgMQAYgNATANQARgaApgFQAjgDAdALIACgIIAIATIAPgBQABgaADgRQAEgTAHgIQAVgCAGAHQAThAAJgHQAVgCAHAHQAJgHAPgQQAUgCARAUIAPgNQALACAVAZIAXggQATACAEALQAIgRAHgGQAPAJgBAKQAEgBAGgDIAHgGIgDgFQgFgKgDgMQABgCATgCIARgBQAAgYADgQQAEgVAHgJIAIgBQAPAAAFAFQALglAIgSQAFgMAEgDIAIAAQAPAAAFAFQAJgHAOgQQAVgCAQAUIAPgNQAMACAUAZIAYggQATACAEALQAIgRAHgGQAOAJgBAJQALAAANgQQALgOARADQAFAEAAAcQAEAKAcgPQAFALAKAEQABAfgQAGQgBAHALgCQAJgBAAADIAZAGIADgBIAHgBQAIgLAGAAQAaAAAGAYQAJgFAKAAQAQAAAIAPIATgHQAHAAAMAKIAIAFIACABIAAgEQAKABAGAHQATgOAhgKQAjgLAPAHQAqgkAcAbIgFASQADACARgEQAPgCAHAJQAEAUgOAR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");
	this.shape_23.setTransform(178.9,202.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#60ECFF","#FFFFFF"],[0,0.506],7.2,-145.8,7.2,143.4).s().p("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");
	this.shape_24.setTransform(178.1,190.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SnakeWake, new cjs.Rectangle(-87.8,0.9,530.4,377.5), null);


(lib.SnakeScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SnakeSleep();
	this.instance.parent = this;
	this.instance.setTransform(206.3,151.4,0.825,0.825,0,0,0,150,189);

	this.instance_1 = new lib.SnakeWake();
	this.instance_1.parent = this;
	this.instance_1.setTransform(185.3,147.3,0.789,0.789,0,0,0,150,189);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},70).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.4,-0.4,481.4,299.2);


// stage content:
(lib.pro_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4_repeat:251});

	// timeline functions:
	this.frame_1 = function() {
		playSound("pastprogressivetenseis");
	}
	this.frame_82 = function() {
		playSound("multi_bells");
	}
	this.frame_87 = function() {
		playSound("pastprogformula");
	}
	this.frame_141 = function() {
		playSound("python_snoring");
	}
	this.frame_160 = function() {
		playSound("pythonwassleeping");
	}
	this.frame_210 = function() {
		playSound("swayingpythonslimwasriding");
		playSound("python_attack");
	}
	this.frame_250 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_259 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(81).call(this.frame_82).wait(5).call(this.frame_87).wait(54).call(this.frame_141).wait(19).call(this.frame_160).wait(50).call(this.frame_210).wait(40).call(this.frame_250).wait(9).call(this.frame_259).wait(1));

	// Layer 8
	this.instance = new lib.PastProgressiveLesson();
	this.instance.parent = this;
	this.instance.setTransform(276,197.7,1.17,1.17,0,0,0,206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(260));

	// content
	this.instance_1 = new lib.SnakeScene();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.8,194.7,1.032,1.032,0,0,0,207.3,149.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(260));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape.setTransform(325,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_1.setTransform(310.3,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhHBUQgDgDgBgFIABgOIABgNIAAgVIABgUIgBgTIAAgWIgBgVIgCgUQABgEAEgFQAEgDAGAAQAGAAAHAMQAbAoAVAaQAZAfAfAcIAAgNIAAgOQAAgtgFgcIgCgMQgCgHAAgFQAAgMALAAQATAAgBBGIAAAiIAAAkIgBARQgCALgKAAQgGAAgIgHQgsgqg3hNIgBAYIAAAYIAAAbIABAbQAAAdgMAAQgGAAgDgEg");
	this.shape_2.setTransform(293.9,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_3.setTransform(278.4,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_4.setTransform(264.7,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_5.setTransform(243.2,21.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTBOQgNgggQg9IgIgdQgHgWAAgHQAAgFAEgDQADgDAFAAQAHAAADAJIAEASIAKAlQAKAnALAdIAAgCIAchNIAJgaQAGgQAHgIQADgFAFAAQAEAAAEAEQAEADAAAFQgBADgCADQgHAKgEALIgIAXIgdBOQgEANgHANQgDAHgGAAQgIAAgEgJg");
	this.shape_6.setTransform(229.5,21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AguBPQgDgDAAgFQAAgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_7.setTransform(215.7,21.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_8.setTransform(202.2,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_9.setTransform(186.9,22.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAFgDADQgDADgFABIgDgBQgSgGgRAAQgJAAgKADIgWAEIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgBQALAAAAALQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_10.setTransform(172.6,21.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_11.setTransform(158.7,21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag3BJQgMgOAAgeQAAgcAMgcQAOgeAVgSQANgMAOAAQALAAAPAGQAUAIAAAKQAAAEgDADQgDAEgFAAQgCAAgFgDQgQgKgMAAQgHAAgJAIIgMAQQgZAhAAAlQAAAUAHAIQAGAJATAAQARAAAOgMQAPgNAHgYQgeACgUAKIgGABQgEAAgDgEQgDgDAAgFQAAgFAGgEQAWgNA5AAQAEAAAEADQADACAAAFQAAAHgHADQgGAhgWAUQgUATgcAAQgbAAgOgPg");
	this.shape_12.setTransform(144.3,21.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag2BDQgWgUAAgfQAAgkAWgeQAYghAlgBQAiAAASAQQASAQAAAlQAAAjgVAfQgWAigkAAQgegBgWgRgAglgkQgRAYAAAcQAAAWAPANQAPALAWAAQAZAAARgaQAPgYAAgbQAAgbgLgJQgMgLgZAAQgaAAgSAag");
	this.shape_13.setTransform(128,22);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_14.setTransform(112.4,21.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_15.setTransform(99.7,21.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_16.setTransform(80.7,21.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_17.setTransform(64.8,22.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAlA4IgGgiIgdAFIgcAGIgSAqQgDAFgHAAQgEAAgDgDQgDgDgBgFQAAgFARghQgCgDAAgEQAAgIALgDQAMgWASgeQAZgpAGAAQAJAAADAMIAHAkIAQBKIAFARQADAJABACQgBAFgDADQgDADgEAAQgKAAgIgZgAgNAIQANgDAZgFIgIgog");
	this.shape_18.setTransform(48.9,22);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_19.setTransform(35.4,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: 'F0777AAD9CB40B4E8E43407E0C477A28',
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
		{src:"sounds/pastprogformula.mp3", id:"pastprogformula"},
		{src:"sounds/pastprogressivetenseis.mp3", id:"pastprogressivetenseis"},
		{src:"sounds/PresentProgressiveTense.mp3", id:"PresentProgressiveTense"},
		{src:"sounds/Progressive.mp3", id:"Progressive"},
		{src:"sounds/ProgressiveFormoftheVerb.mp3", id:"ProgressiveFormoftheVerb"},
		{src:"sounds/ProIsSawingTwiggs.mp3", id:"ProIsSawingTwiggs"},
		{src:"sounds/pythonwassleeping.mp3", id:"pythonwassleeping"},
		{src:"sounds/python_attack.mp3", id:"python_attack"},
		{src:"sounds/python_snoring.mp3", id:"python_snoring"},
		{src:"sounds/bgmP.mp3", id:"bgmP"},
		{src:"sounds/SlimWasRiding.mp3", id:"SlimWasRiding"},
		{src:"sounds/StaceisPracticingHerMagicAct.mp3", id:"StaceisPracticingHerMagicAct"},
		{src:"sounds/swayingpythonslimwasriding.mp3", id:"swayingpythonslimwasriding"},
		{src:"sounds/TheAudienceWillBeParticipating.mp3", id:"TheAudienceWillBeParticipating"},
		{src:"sounds/TheKidsSHallBePresenting.mp3", id:"TheKidsSHallBePresenting"},
		{src:"sounds/ThePastProgressiveTense.mp3", id:"ThePastProgressiveTense"},
		{src:"sounds/ThePythonWasSleepimg.mp3", id:"ThePythonWasSleepimg"},
		{src:"sounds/TheRabbitsareApplauding.mp3", id:"TheRabbitsareApplauding"},
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
an.compositions['F0777AAD9CB40B4E8E43407E0C477A28'] = {
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