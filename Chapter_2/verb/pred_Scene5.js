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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AiEAKQABAAABAAQAmADAjAAQAnABAmgGQANgLAMgMQAMgLAMgOQALgOAHgMQAEgGAFgEQACgCAEABQATAAASABQAUACATABQAFAAABAGQgJACgKABQgTAEgSAFQgHACgHAAQARABATADQATADARAEQALACgGAIQgZADgSADQgPABgNACQgEAAgEAAABugFQgFgCgDgBAB4gXQAQAFARAGQAPAHANAHQgJADgKACQgWACgRgJQgGgDgHgCQAOAJAMAMQAIAGAEAGQANASgYgBQgCAAgEgCQgPgHgNgLQgEgFgEgEQgEgDgDgDABfAQQgJAQgTAFQgTAFgOgDQgfAIghAJQgdAHgeAHQgUAEgVAEAiGAKQABAAABAAQgQgEgOAEAisANQgQAHgEAO");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AiNA3IgBAAIAAACQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgDABIgFAEIgBAAIgBABIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIgBgBIgHAAIgFgCQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAABAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgHgLIgDgFQgCgEAAgFIAAgEIAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIAAgCIABgCIACgDQgBAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIAGgFQACgCAEgBIACAAIACAAIADgBIABAAQAEAAAEABIAAAAIALgBIAFABIACAAIABAAQAnADAjAAQAmABAngGIAYgXIAYgZQAMgOAGgMQAEgGAGgEQACgCADABIAmABIAnADQAFAAABAGIgUADQgTAEgSAFQgHACgHAAIAkAEQATADARAEQAMACgHAIIgrAGIgcADIAiALQAPAHAMAHIgSAFQgXACgRgJIgNgFQAOAJAMAMQAIAGAEAGQAOASgYgBIgGgCQgQgHgMgLIgJgJIgGgGIAGAGQgIAQgUAFQgTAFgOgDIhAARIg6AOIgqAIgABpgFIgIgDIAIADgABrgXIAIAAIgIAAg");
	this.shape_1.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-8.8,40.6,17.7);


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


(lib.Bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009999").ss(3,1,1).p("EgnNgXjMBObAAAMAAAAvHMhObAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCFFFF","#FEFDB4"],[0,1],0,-153.2,0,153.3).s().p("EgnNAXkMAAAgvHMBObAAAMAAAAvHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.5,-152.3,505,304.7);


(lib.wordsbestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape.setTransform(3.6,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgRAsQgCADgDAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAgFIAAgFIAAgSIAAgSIAAgQIAAgRQAAgDABgCQACgFAEAAQAEABAAAFIAAACIgBACIAAAOIAAAOIAKgFIAHgBQANgBAIAKQAHAIAAANQAAAOgIAJQgJAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAKIAAAJIAIADQAEABAEAAQAIAAAFgFQAGgHAAgJQAAgJgFgFQgEgFgJAAQgDgBgFADg");
	this.shape_1.setTransform(-3.2,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordsbestill, new cjs.Rectangle(-8.9,-10.3,17.9,20.7), null);


(lib.wordsarestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape.setTransform(3.7,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgWAbIAAgoIABgGIAAgGQAAgFAEAAQAHAAgBAJQALgLAOAAQAEAAADAEQACAEAAAGIAAAFQgBAHgFAAQgFAAAAgGIAAgEIAAgFQgKABgFAEQgEAEgEAIIAAAfQAAAGgGAAQgFAAAAgGg");
	this.shape_1.setTransform(-2.3,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AATAeIgEgEIgKAEIgGABQgOAAgGgHQgGgIAAgOQAAgNAKgLQAJgKANAAQAFABAGACQAIADAAAFIgBADIgBAHIAAAMIABALIADALIACADIAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAIAAAIQAAAKAEAFQADAEAHAAQAFAAADgBIAGgFIgCgWIABgGIABgGIgEgCIgCgBQgJAAgGAIg");
	this.shape_2.setTransform(-8.5,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordsarestill, new cjs.Rectangle(-13.6,-10.3,27.2,20.7), null);


(lib.wordsamstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgCAiQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIgBgVIgCgUQAAgGgCgDQgEABgEAFIgHAHIgDAEIgBAJIAAALIAAAEIABAFIgCAEQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgHAAAAgPIABgLIABgJIgBgKIAAgJQAAgNAFAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIgBADIAAAEIAAAGQADgGAGgFQAGgFAEAAQAJAAADAJQADgEAEgCQAFgDAGAAQAJAAAEALIACAQIAFAhQAAAAAAABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgFAAgBgFIgCgTIgCgRIgCgIQgCgFgCAAQgCAAgGAEIgIAFIABALIABAPIABAPQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape.setTransform(3.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AATAeIgEgEIgKAEIgGABQgOAAgGgHQgGgIAAgOQAAgNAKgLQAJgKANAAQAFABAGACQAIADAAAFIgBADIgBAHIAAAMIABALIADALIACADIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAIAAAIQAAAKAEAFQADAEAHAAQAFAAADgBIAGgFIgCgWIABgGIABgGIgEgCIgCgBQgJAAgGAIg");
	this.shape_1.setTransform(-4.7,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordsamstill, new cjs.Rectangle(-9.8,-10.3,19.7,20.7), null);


(lib.wordisstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgPAhQgKgEABgFQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQADAAACADIAHACIAGAAIAHgBQAGgBAAgEQAAgIgLgDIgFgBQgIgCgDgCQgFgDAAgGQAAgMAMgGIAKgDIALgEIAFgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIAAAFIABAFQAAAAAAABQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgDAAgCgDIgCgGIgNAEQgJAEABAFIADABQAMADAHAEQAJAFAAAMQABAJgJAFQgGAEgKAAQgIAAgGgCg");
	this.shape.setTransform(1.5,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgFAqQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgKIAAgLIABgOIAAgMQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIgBAMIAAAOIAAALIAAAKQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQACgCACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAADgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_1.setTransform(-2.9,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordisstill, new cjs.Rectangle(-6.7,-10.3,13.4,20.7), null);


(lib.scene3bottomstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhEB4QgPgNAAgzIABgWIABgZQgCgEAAgEQAAgEADgEQADgtAAgWIgBgRIgCgRQAAgTAQAAQAGAAAFAFQATgFAQgDQARgCAOAAQAmAAAWAJQALAEAAALQAAAGgEAFQgFAFgHAAIgEAAQgbgIgYAAQgNAAgOADQgPACgSAFIABAQQAAAWgCAmIBDgHIAlgDQAHAAAFAEQAFAFAAAHQAAANgPACIglADIhHAHIgBAVIgBASQAAAjAFAGQAEAEAVAAIAcAAIAdgBIAKgBIAJgBQAQAAAAAQQAAAOgNACQgPADgwAAQgwAAgOgNg");
	this.shape.setTransform(110.9,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhPB2QgFgEAAgHIgBglIgBglQAAgOADgcQADgcAAgOIgBgYIgCgYQAAgJAFgGQAGgJALABIAlADQAWADANAIQBAAhAAAxQAAAXgWASQgRAOgaAIQAxAaAYAdQAEAFAAAGQAAAGgFAFQgFAFgGAAQgGAAgFgFQg0gzg+gSIABAfIABAfQAAAHgFAEQgEAFgHAAQgHAAgEgFgAgxhGIABATQAAANgCASIgEAfIAHAAIAHAAQAoAAATgLQAJgEAHgHQAIgJAAgGQAAgWgYgTQgWgRgZgDIgXgBg");
	this.shape_1.setTransform(90.7,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AA3BRQgFgOgGgjIgpAIIgpAIQgIAVgTAnQgFAJgIAAQgGAAgGgFQgEgEAAgHQgBgHAYgyQgCgEgBgFQABgNAPgEQARggAcgrQAkg8AJAAQAMAAAFASIAJA0IAYBsIAJAYQAEANAAAEQAAAHgEAEQgGAFgGAAQgOAAgKglgAgUALIA5gLIgNg8g");
	this.shape_2.setTransform(68.4,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgSAiQgFgEAAgGQAAgEAKgWIANgbQADgIAHAAQAGAAADAEQAEAFAAAFQABAEgXAwQgCAJgIAAQgFAAgEgEg");
	this.shape_3.setTransform(53.4,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag+BsQgdgOgBgXQAAgHAFgDQAEgEAHgBQAIAAAFAJQAIAMAHAEQANAJAZAAQAXAAAVgLQAbgNAAgYQAAgTgXgMQgSgKgbgBQgZAAgRgKQgWgMAAgYQAAgbAfgYQAegVAfAAQAQAAATAFQAZAGAAALQAAAOgOAAQgGAAgQgDQgQgEgIAAQgYABgRAMQgRALAAASQAAANAXAFQAJACAXABQAkADAUAUQATARAAAbQAAAkgjAWQgeAUgmAAQgdAAgXgLg");
	this.shape_4.setTransform(37.1,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhEBzQgFgEAAgIQAAgGAFgEQAFgFAGgBQAKAAAYgDQABgNAAgPIAAgbIgBgaQAAgjADg2IgTAAIgVABQgHAAgEgEQgFgFAAgHQAAgPAPgBQAMgCAkAAQAeABAuAGQAOACAAAPQAAAHgFAEQgFAFgGAAQgKAAgPgCIgZgEQgEAtAAApIABAbIAAAbIgBAbIAygBQAGAAAFAEQAEAGAAAGQAAAHgEAFQgFAEgGAAIgaAAIgbABQgJAAgVADQgVACgKABQgGgBgFgEg");
	this.shape_5.setTransform(17.1,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgTAiQgDgEAAgGQAAgEAJgWIANgbQADgIAHAAQAFAAAEAEQAFAFAAAFQAAAEgXAwQgDAJgHAAQgGAAgEgEg");
	this.shape_6.setTransform(-4.7,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("ABgB1QgEgHgEgSIgGgaQgGgZgOhVIggBeIgJAdQgGASgFALQgHAMgKAAQgJAAgGgKQgDgHgDgKIgFgRQgPg3gNg+IgFAcIgUBRQgCAPgGAcQgFAMgKAAQgIAAgFgFQgDgFAAgHQgBgaALgmIASg+IAJgxQAGgiAIgLQAHgJAIAAQALAAAFALQAGAOAHArQAIA0ARA6QAWg7AShBIAEgXQADgNAEgJQAGgLAMAAQANAAAHAaQADAIADAcQAJBGAOAyIAHAbQAHAVAAAFQAAAHgGAFQgFAEgGAAQgJAAgFgJg");
	this.shape_7.setTransform(-24,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AA3BRQgFgOgGgjIgqAIIgoAIQgIAVgTAnQgFAJgIAAQgHAAgEgFQgGgEAAgHQAAgHAYgyQgDgEAAgFQAAgNAPgEQASggAbgrQAlg8AJAAQAMAAAEASIAKA0IAYBsIAJAYQAEANAAAEQAAAHgEAEQgGAFgFAAQgPAAgKglgAgUALIA5gLIgNg8g");
	this.shape_8.setTransform(-50.2,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgSAiQgFgEAAgGQAAgEAKgWIANgbQADgIAHAAQAGAAADAEQAEAFABAFQAAAEgXAwQgCAJgIAAQgFAAgEgEg");
	this.shape_9.setTransform(-74.7,14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhEB4QgPgNAAgzIABgWIABgZQgCgEAAgEQAAgEADgEQADgtAAgWIgBgRIgCgRQAAgTAQAAQAGAAAFAFQATgFAQgDQARgCAOAAQAmAAAWAJQALAEAAALQAAAGgEAFQgFAFgHAAIgEAAQgbgIgYAAQgNAAgOADQgPACgSAFIABAQQAAAWgCAmIBDgHIAlgDQAHAAAFAEQAFAFAAAHQAAANgPACIglADIhHAHIgBAVIgBASQAAAjAFAGQAEAEAVAAIAcAAIAdgBIAKgBIAJgBQAQAAAAAQQAAAOgNACQgPADgwAAQgwAAgOgNg");
	this.shape_10.setTransform(-89.6,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhIB5QgHgHAAgHIAAguQABgVACgpQADgtABgUIABgrQABgHAFgDQAUgGAcgBQAaABAaASQAdAWAAAfQAAAogfAXQAXAKALAMQAMAMABAPQAAATgVARQgOANgQAGQgiANg3AAQgHAAgFgFgAgvA+IAAAhQAogCAZgKQALgEAKgJQAJgIAAgEQABgIgVgJQgOgHgOgDIgRgDIgGAAIgGAAIgSgBIAAAjgAgphcIgBAbIgCA9IAXABQAXgCAPgNQAQgNAAgXQAAgPgQgMQgRgMgRAAIgYABg");
	this.shape_11.setTransform(-109.4,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene3bottomstill, new cjs.Rectangle(-122.4,-24.3,244.8,48.6), null);


(lib.new_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(17.5,23.7,1,0.997,0,-16.1,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,rotation:-2,skewX:0,skewY:0,x:19.6,y:27},15).to({startPosition:0},5).to({rotation:-16,x:17.5,y:23.8},12).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAeBPQgPgPgGgGQgVgVgUgWQgYgXgSgZQgKgIgCgEQgDgDgCgEAgVhOQAAABgBAAQADADADACQAHAHAGAGQAbAcAkAfQAkAfgFAT");
	this.shape.setTransform(9.5,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AAgBfIgVgVIgpgrQgYgYgSgYIgBgBIAAgBIgDgCQgEgDgFgGIgEgGIgCgEIgBgNIAAgQQAAgIACgEQACgFAFgHIACgDIA+AiIgBABIAGAFIANANQAbAcAkAeQAkAggFATQgOAfgcAAQgJAAgKgCg");
	this.shape_1.setTransform(9.3,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,10.7,37.2,39);


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


(lib.wordsbe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wordsbestill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-10.3,17.9,20.7);


(lib.wordsare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wordsarestill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-10.3,27.2,20.7);


(lib.wordsamstill_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wordsamstill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-10.3,19.7,20.7);


(lib.wordis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wordisstill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-10.3,13.4,20.7);


(lib.scene3bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scene3bottomstill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.4,-24.3,244.8,48.6);


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
		var bgm = createjs.Sound.play('bgmAux',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("verb_menu.html","_self");
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
		
		 window.open ("pred_Scene6.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pred_Scene4.html","_self");
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


(lib.wordsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		playSound("Cowbell");
	}
	this.frame_52 = function() {
		playSound("Cowbell");
	}
	this.frame_74 = function() {
		playSound("Cowbell");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(24).call(this.frame_52).wait(22).call(this.frame_74).wait(46));

	// Layer 1
	this.instance = new lib.wordis();
	this.instance.parent = this;
	this.instance.setTransform(21.9,2.1,2.655,2.655);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKB6QgFgIAAgHQgBgFAFgEQAFgEAFAAQAFAAAHAIQAFAHAAAHQAAAFgDAEQgFAFgGAAQgFAAgHgIgAgKA5IgBgTIAAgTIAAhDIABhEQAAgNANAAQANAAAAANIAACtQAAANgNAAQgNAAAAgNg");
	this.shape.setTransform(38.3,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0BDQgYgTAAgjQgBgoAUgbQAVgeAkAAQAZAAAQAJQAUALAAAWQABAPgTANQgHAGgZALIg7AcQAJANANAGQANAHARAAQAKAAAPgEQASgFAFgJQAFgIAHAAQAFAAAFAEQADAEAAAGQAAARgbAMQgYALgWAAQgjAAgVgSgAgfgpQgNAPgGAcIAvgWQAcgNAMgKQgOgNgXAAQgTAAgMAPg");
	this.shape_1.setTransform(-2.2,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhhB7QgEgFAAgGQAAgRADggQACghAAgRIAAgYIgBgaIACglIABglQAAgHAFgEQAEgEAGAAQAHAAAEAEQAEAEAAAHIgBAlIgCAlIABAnIBCgMQAngHAcgBQACgWAAgtQAAgMADgMQAGgQAJAAQAGAAAEAEQAFAEAAAHIgBAGQgDAHAAAMIABAOIAAAOQAAAPgDAfQgCAeAAAQIABAjIACAkQAAAGgEAEQgFAFgGAAQgGAAgFgFQgEgEAAgGIgCgkIgBgjIAAgXQgaAAgmAIIhCAMQAAAOgCAaQgDAaAAAOQAAAGgEAFQgFAEgGAAQgHAAgEgEg");
	this.shape_2.setTransform(-23.2,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBABIAAgBIADABIgDAAg");
	this.shape_3.setTransform(-57.8,20.2);

	this.instance_1 = new lib.wordsare();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.9,2.9,1.769,1.769);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_4.setTransform(82.5,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_5.setTransform(77.2,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_6.setTransform(71.9,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGBJQgDgDAAgEIAAgLIABgMIgCg8IgXgBQgKgCAAgJQAAgEADgDQADgDAEAAIAWABIAAgOIgBgMQAAgFADgDQADgDAFAAQAIAAACAQIAAAJIAAAGIAAAGIAOgBQALAAADABQAHACAAAHQAAAFgDADQgDADgFAAIgFAAIgFAAIgOABIACA8IAAAFIAAAFQABAXgMAAQgDAAgDgDg");
	this.shape_7.setTransform(64.2,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXAxQgNAHgQAAQgNAAgJgGQgKgGgCgNQgEgbAAgVQAAgOADgTQACgIAIgBQAEAAADAEQADACAAAEIgBAQIgCAQQAAARACALQABANACAHIAHADIAGABQANAAAQgFIAAgVIgBgSQAAgXACgRQABgJAJAAQAFAAADADQADADAAAFIgCAnIAAAVIAAAWIAAAHIABAHQAAAEgDADQgDADgFABQgIAAgCgLg");
	this.shape_8.setTransform(53.8,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBNQgDAFgFAAQgEAAgDgCQgCgDAAgEIAAgIIAAgIIAAghIgBggIAAgdIAAgcQAAgHACgFQAEgGAGAAQAIAAAAAJIgBAEIAAAFIAAAWIAAAbQAJgGAIgDQAHgEAGAAQAXAAAOASQANAPAAAXQAAAYgQAQQgPARgVAAQgQAAgNgHgAgPgEIgPAJIgBASIABAQIAAARIANAGQAHACAIAAQAOAAAKgLQAJgKAAgQQAAgPgIgLQgIgKgPAAQgHAAgIAFg");
	this.shape_9.setTransform(42.2,3.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMAXQgDgDABgEQAAgDAGgOIAIgSQACgFAEAAQAFAAACADQADADgBADQAAACgOAgQgCAGgEAAQgEAAgDgCg");
	this.shape_10.setTransform(27,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbBRQgDgDAAgEQAAgKAWgyIglhGIgEgIQgDgEAAgEQAAgEADgEQADgCAEAAQAFgBADAEQARAYAUAuIAPgkIAQggQADgGAGAAQAEAAADADQADADAAAFIgBAEIgkBNQgNAdgGASIgHAUQgDAIgGAAQgFAAgDgDg");
	this.shape_11.setTransform(-20.5,9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiAtQgQgNgBgXQAAgaANgTQAPgUAXAAQAQAAAMAGQANAHAAAPQAAALgMAIIgVALIgoASQAHAJAIAEQAJAFAKAAQAIAAAJgDQANgDADgGQADgFAEAAQAEAAADACQACADAAAEQAAALgSAIQgPAIgQAAQgWAAgOgMgAgVgbQgIAKgEASIAfgOQATgJAHgHQgIgIgQAAQgMAAgJAKg");
	this.shape_12.setTransform(-31.3,6.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAcBOQgCgIgCgQIgCgZIAAgIIABgIQAAgSgKAAQgNAAgKALQgFAGgJARQAAAngEAIQgCAGgHAAQgEAAgDgDQgDgDAAgEIABgEQABgDAAgNIAAgPIAAhLIABgRIgBgKIgBgKQAAgFADgCQADgDAFAAQAIAAACAJIABASIgBAXIAAAWIAAAKQAJgMAJgFQAJgGALAAQARAAAGALQAFAIABASIAAATIADAWQABAMACAJIAAADQAAAEgDADQgDADgEAAQgHAAgDgIg");
	this.shape_13.setTransform(-43.3,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGBMQgEgDAAgEIABgFIAAgFIAAgPIgBgPIgCgpIgDgpIgKAAQgWAAgNgEQgJgCAAgIQAAgEADgDQADgEAFAAIARACIAQABIATAAIASAAIAYABIAXABQAFAAADADQADADAAAFQAAAEgDADQgDADgFAAIgXgBQgQgBgIAAIgHAAIADAvIACAtIABALIAAALQAAAHgCAFQgDAHgGAAQgDAAgDgDg");
	this.shape_14.setTransform(-55.9,3.5);

	this.instance_2 = new lib.wordsamstill_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.3,0.7,2.341,2.341);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_15.setTransform(73.8,12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_16.setTransform(66.7,12.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_17.setTransform(59.7,12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIBgQgEgDAAgFIAAgQIABgQIgDhPIgfgCQgMgCAAgMQAAgGAEgEQAEgEAFAAIAdADIAAgTIgBgRQAAgGAEgEQAEgDAGAAQALAAACAUIAAAMIAAAIIAAAIIATgCQAPAAAEACQAJACAAALQAAAGgEAEQgEADgGAAIgHAAIgHAAIgSACIACBQIABAGIAAAHQAAAegPAAQgEAAgEgEg");
	this.shape_18.setTransform(49.5,3.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgoA6QgTgTgBggQgBgeARgXQATgcAhAAQAcAAAOAZQALAUAAAdQgBAdgPAWQgSAYgcAAQgXAAgQgRgAgYgbQgJAQAAASQAAAUALALQAJAJAMAAQAOAAAKgKQALgLABgUQACg0gfAAQgTAAgLATg");
	this.shape_19.setTransform(35.4,5.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAiBDIgFgeQgCgQAAgOIABgMIAAgNQAAgegLAAQgOAAgNATQgOAQgGAZIgBANIgCANIACANIAAAMQAAAGgEAEQgDAEgHAAQgFAAgEgEQgEgEABgGIgBgMIgCgNIADgmIACgnIgBgNIAAgNQAAgGADgEQAFgEAFAAQANAAABASIABAQQAXgeAWAAQAXAAAJATQAFANAAAZIAAAOIAAAMQAAALAEASQADASAAALQAAAGgFAEQgEAEgFAAQgMAAgBgNg");
	this.shape_20.setTransform(21.3,5.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag7BlQgFgEAAgGQAAgGAFgEQADgEAGAAQAJAAAUgDIABgZIAAgYIgBgWQAAgfAEgvIgSAAIgSAAQgGAAgEgDQgDgFAAgGQAAgNAMgBIAqgBQAaAAApAGQANACAAAMQAAAHgGAEQgEADgFAAIgWgCIgWgDQgDApAAAiIAAAYIABAYIgBAXIAsAAQAFAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgFAAIgYAAIgXABQgIAAgSADQgSACgJAAQgGAAgDgEg");
	this.shape_21.setTransform(-36.1,2.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgDABIAAgBIAHABIgHAAg");
	this.shape_22.setTransform(-0.4,28);

	this.instance_3 = new lib.wordsbe();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80.8,2.1,1.857,1.857);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIAJQgEgDgBgGQABgFAEgDQADgEAFgBQAGABADAEQAEADAAAFQAAAGgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_23.setTransform(95.4,10.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLBPIABgoIABgnIAAgnIABgnQAAgLAJAAQAMAAAAALIgBAnIgBAnIgCA2IAAAZQgBALgJAAQgKAAAAgLg");
	this.shape_24.setTransform(62.7,2.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMBPIABgoIACgnIAAgnIABgnQAAgLAKAAQAKAAABALIgBAnIAAAnIgDA2IAAAZQgCALgIAAQgLAAAAgLg");
	this.shape_25.setTransform(56.6,2.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJBPQgEgDAAgFIAAgUIgBgTIABgaIABgYQAAgFAEgDQACgDAGAAQADAAADADQADADAAAFIgBAYIgBAaIAAATIABAUQgBAFgDADQgDADgDAAQgFAAgCgDgAgGg7QgEgEAAgFQAAgFAEgEQAEgEAEAAQAFAAAEAEQAEAEgBAFQABAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_26.setTransform(50.6,3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAHAgIgFgaIgDgXIgIAUIgRAtQgBAEgDACQgDAGgHAAQgJABgHghQgFgRgDgcIgDgQIgBgQQAAgFADgDQADgDAFAAQAIAAACAJIACAQIACAQIAGAwQANghANgsQADgMAIAAQAIAAADAOIAHAnIAIAqIAJgeIAOg6QABgHAIAAQAEAAADADQAEADAAAFIgBAFQgIAjgPAsQgCAKgIAKQgDAGgHAAQgLAAgHgdg");
	this.shape_27.setTransform(39.8,5.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgpAyIAAhMIAAgLIAAgKQAAgLAKAAQALAAgBASQAVgUAZAAQAJAAAEAGQAFAHgBAOIAAAHQAAAOgLAAQgJAAAAgLIgBgHIAAgKQgRACgJAIQgKAHgGAOIAAA7QAAALgLAAQgJAAAAgLg");
	this.shape_28.setTransform(20.4,5.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AglAvQgQgOAAgYQAAgbANgUQAPgUAZAAQARAAAMAGQAOAHAAAQQAAALgNAIQgFAEgSAIIgoATQAGAJAJAFQAJAFALAAQAIAAAKgDQANgEADgGQAEgGAEAAQAEAAADADQADADAAAEQAAAMgTAJQgRAHgQAAQgXAAgQgMgAgWgdQgJALgEATIAhgPQATgJAIgHQgJgJgQAAQgNAAgJAKg");
	this.shape_29.setTransform(8.8,5.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgLAyIgRgsIgTgxIgBgFQAAgEADgEQADgDAFAAQAGAAADAHIAcBLQAHgRANggIAJgZQADgHAHAAQAEAAADADQADADABAFQgBAEgRAqIgXAzQAAAKgJAAQgHAAgEgKg");
	this.shape_30.setTransform(-2.8,5.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AglAvQgQgOAAgYQAAgbANgUQAPgUAZAAQARAAAMAGQAOAHAAAQQAAALgNAIQgFAEgSAIIgoATQAGAJAJAFQAJAFALAAQAIAAAKgDQANgEADgGQAEgGAEAAQAEAAADADQADADAAAEQAAAMgTAJQgRAHgQAAQgXAAgQgMgAgWgdQgJALgEATIAhgPQATgJAIgHQgJgJgQAAQgNAAgJAKg");
	this.shape_31.setTransform(-14.2,5.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAaA1IgCgYIgCgXIABgKIAAgKQAAgYgJAAQgMAAgLAPQgKANgFATIgBALIgBAKIABAKIAAAKQABAFgDADQgDADgFAAQgFAAgDgDQgCgDAAgFIgBgKIgBgKIACgeIABgfIAAgKIgBgKQAAgFADgDQAEgDAEAAQAKAAABAOIAAANQATgZASAAQARAAAHAQQAFAKABAUIAAALIAAAJQAAAJABAPQADAOAAAJQAAAEgDAEQgDACgFAAQgKAAgBgKg");
	this.shape_32.setTransform(-26,5.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgmBKQgPgPAAgYQAAgdAPgRQAQgRAXAAQANAAAHAEIAKAHQACguACgQQABgJAJAAQAJAAAAAKQAAAPgEA0QgBAPAAAQQAAAkADATIAAACQAAAFgDADQgDACgEAAQgGAAgEgJQgHAFgJADQgIADgIAAQgXAAgPgPgAgZACQgJALAAAVQAAAOAKALQAKAKAOAAQAIAAAGgEIAMgJIADgDIAAgTIAAgNIAAgMQgEgJgHgEQgHgEgJAAQgRAAgKAKg");
	this.shape_33.setTransform(-45.4,2.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAaA1IgCgYIgCgXIABgKIAAgKQAAgYgJAAQgMAAgLAPQgKANgFATIgBALIgBAKIABAKIAAAKQAAAFgCADQgDADgFAAQgEAAgEgDQgDgDAAgFIAAgKIgBgKIABgeIACgfIAAgKIgBgKQAAgFADgDQADgDAFAAQAKAAABAOIABANQASgZASAAQASAAAGAQQAFAKAAAUIAAALIAAAJQAAAJACAPQADAOAAAJQAAAEgDAEQgDACgFAAQgKAAgBgKg");
	this.shape_34.setTransform(-57.4,5.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAjA4QgFgFgCgDIgTAIQgIADgEAAQgaAAgLgOQgLgOAAgcQAAgZASgTQASgSAYAAQAKAAALAFQAPAGAAAIQAAADgCACQgBAFgBAJIAAAXQAAAOABAIIAHATIADAGIAAABQAAAFgDADQgDACgEAAQgCAAgFgEgAgRgaQgNANAAARQAAASAHAJQAGAJAMAAQAKAAAHgEIALgIQgDgcAAgOIAAgKIACgMIgHgDIgEgBQgQAAgMAOg");
	this.shape_35.setTransform(-69.2,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:-57.8,y:20.2}},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_3,p:{x:-57.8,y:20.2}},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},28).to({state:[{t:this.shape_3,p:{x:-47,y:25}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_2}]},24).to({state:[{t:this.shape_3,p:{x:-40.8,y:26.5}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_3}]},22).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.9,-25.4,115.7,55.5);


(lib.tobe3talkbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.wordsstill();
	this.instance.parent = this;
	this.instance.setTransform(15.1,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AqZjLQEUhTGFAAQGHAAEVBUQEVBUAAB2QAAB3kVBUQkVBUmHAAQmGAAkVhUQkVhUAAh3QAAhHBng8");
	this.shape.setTransform(25.5,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhfgzQAjAAAZALQAYANAAARQAAAQgYALQgZAMgjAAQgjAAgYgMQgZgLAAgQQAAgRAZgNQAYgLAjAAgAkmAYQAIgBAJAAQAWAAAPAHQAQAIAAALQAAALgQAIQgPAIgWAAQgVAAgQgIQgPgIAAgLQAAgLAPgIQAIgEAKgCQABAAABAAgACaBFQgxgDglgSQgtgVAAgdQAAgeAtgVQAtgWBAAAQA/AAAtAWQAtAVAAAeQAAAdgtAVQgtAWg/AAQgMAAgLgBg");
	this.shape_1.setTransform(-74.2,-21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AncDLQkVhUAAh3QAAhHBng8IAWABQBAAAAtgWQAtgUAAgfQEUhTGFAAQGHAAEUBUQEWBUgBB2QABB3kWBUQkUBUmHAAQmGAAkVhUgAxfiEQgPgIAAgLQAAgLAPgIQAIgDAKgCIACgBQAIgBAJAAQAWAAAPAHQAPAIABALQgBALgPAIQgPAIgWAAQgVAAgQgIgAqKiDQgxgDglgSQgtgUAAgfQAAgdAtgWQAtgVA/AAQBAAAAtAVQAtAWAAAdQAAAfgtAUQgtAWhAAAIgWgBgAvAi2QgYgMAAgRQAAgRAYgMQAZgMAjAAQAjAAAZAMQAYAMAAARQAAARgYAMQgZAMgjgBQgjABgZgMgAxPi1IAEAFIgCABgAnajLIAAAAg");
	this.shape_2.setTransform(6.4,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobe3talkbubblestill, new cjs.Rectangle(-108.2,-31.4,229.1,59.4), null);


(lib.tobe3talkbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		playSound("pop_up");
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(2).call(this.frame_33).wait(1));

	// Layer 1
	this.instance = new lib.tobe3talkbubblestill();
	this.instance.parent = this;
	this.instance.setTransform(-80.1,9.8,0.019,0.019,0,180,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABMBVQgOgEgMgLIgHgGQgHgCgIgEQgQgJgRgDQgMgCgJgIQgWgFgCgWIAAgDQgUgHgWgFIghgJQgtgMAZgnIAAgBQAFgQAXgCQBJgCBBAcQAhANAjgBQAmAAAXAYQAJAKgGAMQgLAXgYABQgDAKgHAFQARAaggATQgFADgGAAIgGgBg");
	this.shape.setTransform(-43.1,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{scaleX:0.019,scaleY:0.019,skewX:180,x:-80.1,y:9.8}}]},22).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:1,scaleY:1,skewX:0,x:0,y:0}}]},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// msg
	this.instance = new lib.tobe3talkbubble();
	this.instance.parent = this;
	this.instance.setTransform(20.8,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AALgsQABADgBAEQAAARgJANQAAADgCAEQgBAFgBABQgIAQAAATIAAADQAAAAAAAB");
	this.shape.setTransform(133.1,-3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AALgqQAAAFgCAFQgFAMgDAFIgDALQgFAOgCAKQgBAGAAAKAgKAoQAAABAAAC");
	this.shape_1.setTransform(133.1,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AgSA8QgNgBgFgMQgCgFAAgKQAAgKAEgHIAGgIQAFgHACgSQACgHAKgQQAGgJADgDQAGgFAJgBIAAAAQAOAAAGAMQAHAMgIAMIgCAEIABADQAEAKgGAHIgGAIQgFAHgHAOIgFAMIgGAKQgGAIgKAAIgEAAg");
	this.shape_2.setTransform(136.4,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// animation
	this.instance_1 = new lib.new_arm();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.6,-20.5,1,1,-29,0,0,12.5,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AAVg0QgSAUgIAVIgHASQgDAJgCAIQgEAPACAJQACAEACAB");
	this.shape_3.setTransform(132.4,-2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AytTbIgGAAIw2AFIAIqbIgIx9QAFgLABgCQAVgnAkgpQA/hHBOg4QAKgHALgFQAbgNAcgQQAsgYAugGQAGgBAFgCQADAAACgBQAJgBAGACQACABAJAAQAEgsAQgmQALgZATgQQASgOAOgKQgUgBgRAAQgIAAgHACQgXAIgcAAQALgSAQgLQAGgEAHgCQAUgSAfgHQAUgEAQAEQAPAIAFgJQANgZAJgeQADgKABgLQAEgZAPgKQAAADABACQABAFADAFQALAWAOAYQAPgHAKgRQATgRAVgQQAdgXAlgVQAHgGAVgFQAGgEAIgEQAVgIAXgFQAFgBAGgBQAHgCAIAAQAdgBASADQAdgCAZACQAFABAFAAQAYABAQAHQAFACAGABQAXADAMAOQgsAJgwAIQgNABgHAMQgBACgBACQAEAAADAAQAXABAXgEQAFABAFgBQARAEASgCQAmAAASAbQgIAIgMgBQgXgBgXgBQgCAAgDAAA9BteQgDADgCAEQgBACgBABIAAAAIAAABQAAAAgBABQgEAHgEAGQgEAFgDAFQgIALgHAMQgXAjgTAkQgJARgKAOQgLARAQgCA0+yeQgLAAgJAAQgEAAgEABA1IyuQgLgCABAIAzmx/QARABAPAHQAEACADACQAZAPATARQAMANABAOQgNgFgQAAQAAAAgBAAIgBAAQgEAAgEAAQgFABgGABQAeAOALAOQAWATgCAeQAEAMAAAKAzTwkQAGgDAIACAzTwkQgnAAgBABQgGgBgDAAQAAABABACQAAABABABQAAAAAAABQACACABADQAEAJADAKQABAFACAGQARgQAKgTQADgEAEgCgAyQvdQggAFALAiQABABAJADQAegCgHgjQgCgGgFgEQgBAAAAgBQgEgDgBgBAyzv8QAJAAALAGAx2vTQACAQgOASQgBAEgDABQgHABgHABQgEAAgDAAQgTABgRgDQgDgEgEgBQgCgCgCgCQAAgBgBgBQgCgEgCgEQgBgEgBgEQgDgMACgOQADgGADgFQAMgPANgBQAcgIAOAZQAGAEAHAEQAEAFABAGQABACAAADQAqASAmAOQAIADAIAEQAaANAPAWQAIALAFAMQACAHACAHQAHAbAAAdQAAArgCAqQgBAFAAAFQgBAOgEAIQgCAEgCAEQgNAwgeAjQgDAEgDAFQgNAWgVAPQgEADgEAEQgDAEgEADQhDA9hgAIQgFABgEABQglAKgegJQgTgGgUgEQgbgDgZgIQgdgKgGgbA8RspQAAgBAAgBQACgDABgEQABgCABgBQADgHAEgGQABAAAAAAQAFgHAHgFQADgHAEgBQAQgHAIAHQAAAAAAABQADACABADQAMgbAAADQgBAEABABQABACAFgFQAYgdAegdQAMgKALAPQAmAyAOA3QATgUgBgeQAAgKABgKQADglgHgiQATARAZAUQAEAEADAEQACADADADQAIgEAAgRQgBgHABgIQABgNgCgMQgFgUgDgVQAWAIAUALQAGAEAJAIQAEgIABgJQAAgBAAgBQABgKgDgLQgFgeAegKQAQgEAUgHQALADAKgCQAsgHAvAAQAHAAAGgBQAEAAAEgBQAGgCAGgCQABgBAAAAQAdAAAcAAA1Zv8QgHgFgKADA1Zv8QgJgBgIgBQgRgCgRAAQgKAAgGAJQgLAJgDANQgCAFAAAHQAHgEAHgDQALgEAKgEQACAAABAAQAAgBABAAQAJgDAJgCQAKgDAGgCQAEgCAFgCQADgBACgCQgCgEgCgCgA1uuyQgBAAgBAAQgDABgDAAQgJAEgIAIQgQARADAcQACAOAGALQAHAPARAHQAaAKAXgNQADAAACAAQALgCAHgHQAOgJALgMQAGgIADgIQADgJAAgJQAAgFgCgFIgBAAQgCgFgDgEQgBgBgBgBIAAAAQgDgFgFgDQgCgBgCAAQgDgBgDgBQgJgBgGgBQgIgBgggCQgJAAgLgBgA1auxQgFgBgBAAQgHgBgHABA1BuhQAAAAAAAAQgCABAAgCQABAAABABgA1AuhQgMAFgQASQgFAFgDAIQgDAXASAEQADABADABQAHAEAHgBQAGAAAGgGQANgMAJgUQACgEAAgFQAAgJgDgGQgCgFgGgDQgBAAgDgBQgIgCgNAFAyxtEQgHgGAIgOQAAgBABgBQAIgOAOgKQAEgBAGgDQAYgDAPAQA9KtdQAAgBABgBQAHgSATgHQAIABgBAOQgBAHgBAGIAAABQgBAIgBAIQAAADAAACQAAACAAABQABAKAaAQQgPApATAqQADAHADAHQAHAPASAGQAFACAFACQAbALAdgKQAmgMAWgTA9NtdQAAACAAACQAAABgBABIAAAAQAAABAAABIAAABQABgBAAgBIAAAAQABgDACgEQgBAAgCAAgA9KtdQAEgBAFAAQAJgJAJAIQgKABgIAAAy4poQgWgCgQAUQAIARAXgIQAcgVgBgkQgSgDgMAJQgDACgCACAgUhBQgDgSgDgTQgBgCAAgDQgDgNgCgOQgBAAAAgBQAAAAAAgBIAAAAQgFgbgIgbQgBgEgBgEQgBgBgBgGQgCgGgUhBQgKgfgFgLQgjhul+kEQhGg3hQgjQhQgthVgkQgXgJgYgHQgrgNhggRArEm8QgGgJgKgDQgCAAgDAAQAHAeAVAeQANASAJAUQAIASANAOQAPAjAUAfQABABAAABQABAAAAABQABAAAAABIAAAAQAAAAAAAAIAAAAIAAAAIgBAAQAAAAgBAAQgBAAgBgBQgCAAgCgBQgtgLgyACQgdgCgbgCQgbgBgYgFQgKgDgJgDQgxABgwAAQgXAAgcAFQgbAEgkAQQgkAQggAXQgfAWAAAxQgBAZAOAPQAKAUATADQAHABAIADQAbALAcgMQALgFAKgFQAPgHAOgJQAGgEAGgCQAQgIASgCQADAAADgBQASgGgJAOApskAQATAFASAGQAIADAIADQAYAKARALQAMAJAMAJQASANAXAPQAgAUAeAZQAEAEADAEQASAUAPAOApskAQAJANAJALQAHAKgDgNASop2QAJgBAKgCQAEgBAFgBQAIgDAJAAQABAAACAAQAIABAHgCQAEgBAEAAQABACADgBQAHADAHAEQADACAEACQAAACAAAAQABADACAAQAKAEAJAHQAEACADABQAKAIAJAKQAAAAABABQABABAAABQACABABACQABABAAAAIAAAAQAIAKAIAKQAAAAAAABQADADADAEQACACADADQADAEAEAEQABABABAAQAOAQAGAUQABAEABAFQAEAMAAAMQAAACAAADQAAAEABAFQgBABABAAQAAAFAAAFQABAEgBAEQgCAZgHAYQgBAEgCAEIAAAAQgCAHgCAGQgEALgEAMQgBAAAAABQAAAAAAABIAAAAQgGAQgEAPQgCAFgCAFQgBACgBACQgDAMADANATkkDQAAgGACgGQADgNADgMQABgBAAgCQADgDAHgBQADgBACAAQAEgBAEgBQACgBADAAQACgBABgBQADgBAEgBQAQgFANgIIAAgBQACgCADgDQAFgHAFgJQAAAAAAgBIABAAQABgCAAgBQABgCABgCQABgBAAgBIAAAAQAAgBABAAQAAgBAAAAQABgDABgDQAEgPADgQQAAgCABgCQAAgBAAgBQAAgBAAgBQAAgEABgEQABgQABgiQgBgDgBgDQgDgFgCgGQgIgRgFgRQgCgGgCgFQgCgEgCgDQgCgDgDgEQAAgBgBAAQAAgBgBgBQgCgDgDgDQgBAAgBgBQgGgDgEgEQgBgBgCgBIAAAAQgBgBgBAAQgBgBgBgBQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQgBAAAAgBQgCgBgCAAQgFgDgFgCQgJgEgKgDQgQgGgRgGQgCAAgDgBQgEgBgDgCIgDgCQAAAAAAABQgBAAAAABAT8ocQACgFAIABAUSoRQgCgCgCgCQgDgCgCABQgEAAgCAFIAAAAQgCAFABAFQAAAFABAEQAAABABAAQABAEACADQADAEAEABQABABACAAQACAAACAAQACAAADgCQADgBgBgEQgBgJgDgIQgCgFgEgEIAFAAQAFABAGgCQAEgBAEgCATCpQQAAgCAAgBIAAACIAAAAIAAABQgBABAAABQgCAMgFAMQgDAHgDAHQAAACgBABIAAAAQgCAGgCAHIAAAAQAAABAAAAQgBADAAAEQgBAEAAAFQAAABAAABQAAABAAACQAAABAAAAIAAABQgBACABACQgCAGAAAIQABAFAAAFQABADAAACIAAABQACAPAFAPQADAJADAJQACAFACAFQADAKADAKQAAACAAABQAAAAABABQAAAAAAABQAAAAAAAAQACAKAAAKQAAAJgBAJQAAAIgBAIQABAPgDANQgBAFAAAEQgDANgCANQAAAAAAABQgBAGgBAFQAAABAAAAQgBAFAAAEQgDATgGASQgCAHgDAHQgBAEgBADQgBACAAACQgEAKgEAKQgCADgBACQgDAFgCAEQgFAHgEAIQgBACgBADQgBACAAABQgCAEgCAFIAAAAQgBABAAABQgBABgBACQgBACAAACQgEAOABAOQAAACABACQAAAEABAEQAGgBADAAQABgBABAAQABAAABAAQACgBABAAQABAAABAAQAOgEAOgFQABAAACgBQAPgCAOgCQAGAAAEACQABAAABAAQABABABAAQAHADAGAFQACABACAAQAdAEAdgFQALgBALAAQACAAACgBQAHgBAEgEQACgEADgFQAAgCABgCQAEgJAFgJIAAAAQACAAABAAQAMAAAJAEIABAAQAIAEAIAHQADAEAEADQATAXAPAXQAEAFACAGQAHAMAGAMQAFAIAEAHQAGAHAHAGQAGAFAHABQAMABAJgGQAFgDAEgEQAPgPAQgPQACAAACgCQALgLALgMQAFgFADgGQAGgKAGgJQABgCACgCQAEgHADgHQADgHACgIQABgBABgCQAHgKAFgJQAAAAAAgBQAAAAABgBQACgDADgEQABgCACgDQAEgGAEgHQABgCABgCQAAAAAAAAQACgCABgCIAAAAIABAAIAAAAQAAAAAAgBQAAAAAAAAQABgBAAgBQABgCABgCQAAgBABgBIAAAAQAAgBABAAIAAAAQAAgBAAAAQAAAAABgBIAAAAQAAAAAAgBQAAgBAEgCQABgBABAAIAAAAQAEgCAFgDIAAAAIAAAAQAAAAAAABQABAAAAABQAAAAAAAAIAAABQAAABAAACQABADABACQAAAAAAABIAAAAQAAABABABQAAAAAAABAS3oWQADAAADAAQAAAAABAAIABAAQADAAACAAATgoEQgCgBgBAAQgBAAgBgBQgBAAgBgBQgBAAgBgCQgBgBgBgBIAAAAQgBgBAAAAQgBgBgBAAIgBgBQgBAAgBgBQgDgBgEABQgBAAAAABQgBAAgBAAQAAAAAAAAQgCABgBACQAAABgBABQAAABAAABQAAABAAABQAAABAAACQgBACABACQABAGAEAFQAGgLAPgEQACgBADgBgATGnzQAAAAABAAQABACABABQAGAFAHACQAEAAADAAQABAAAAAAQAAAAABAAIAAAAQAAAAABAAQACgBACAAQACgCgBgEQABgBAAgBQAAgBAAgBIAAAAQAAgBgBgDQAAgFgCgDQgBgBgBgBQgBgBAAgBATBoJQgJgBgEADQAAABgBABQgBABgBACQAAABgBABQgBACAEACQAEACAFABAUPoDQACAAABABQABAAABABQgDAAgCgCgAUEn9QAEgKAHAEAUEnPQAHAFAJAAQADAAACgBQABACgFADQgEACgDADQgCADgCADAUfmqQAAACABAEQABACABABIAAABQABABABACQADAEAGADAT1mVQAGABAHAAQAKABAJgEQACgCADgCQADgEAFgCASgp2QgJgBgKACQgNACgMAEQgOADgLAJQgDACgBACQgRAWgKAXQgDAGgCAHQgBADgBACQgCAHAAAIQAAAGAAAGQAAASgBARQgCAPACAMQAAAEABAEQACANADANQABAFACAFQAAACABACQAEAMACAOQAAAFABAFQADALABALQAAACAAABQABAJABAJQABAMABAMQAAADAAADQAAAPgBAPQAAABAAABQAAAAAAABIAAAAQgBADAAADQAAAIgCAGQgBACAAACQgBACAAABQgDALgEALQgGASgFARQAAAEAAADQgBACAAACQAAABAAAAQAAADAAACQAAACAAACQAAABABABQgBABAAABQAAABAAAAQAAAEAAAEQgBAMAAAMQAAAAAAABQABACAAABQAAAOACANQAAACABACQABAGAAAGQABACAAACQAAABAAAAQABAXAOAPQAAgNAAgMQACAJADAJQAEAIAFAHIAAAAQACADABADQACACABABQABAAAAAAIgFAJIgBABIAAAAIABgBAQVicQACgBACgBQABgBABgBQABAAAAgBQABAAABAAQAFgBAPAGATymQQADADABAEQABACABABQAIAMAKAHQADACADAAQAEgBADgBASwjEIAFACQAEACAEAAQARAFAOAIQABABABAAQACADADgDQACgCAEgBQADgBACgBQAHgCAHgDQABAAAAAAQABgBACAAQAMgFAOAAQAEAAAEABQAKAAAKAAQAGAAACADQABABABAAQAHAEADAGQACACACADQABADACACQAFAHAFAGQAEAGAEAFQADAFgDAGQgCAFgCAFIAAABAVMkTQgLAGgLAIQgIAGgIADQgIADgIACQgJABgIgBQgIgBgHgFQgDgBgDgDAUkmdQgKANABAPAaRkwQgBgDAAgDQABgBAAgCQAAgKgGgIQgHgNgKgLQgCgCgBgBQgKgLgGgNQgHgNgEgOQgFgRgFgSQgHgcgCgdQgBgcAFgbQABgEABgEQAGgfATgXQAHgIALgCQACgBADgBQANAAAOAAQACAAACAAQAGACAGADQACABABABQADABACACQAFADAEAEQABACABABQAAAAAAAAQADAFADAFQABABAAAAQABACABADQABAEADAGQACAFACAFQADAKAEAJQADAGADAFQADAGADAHQADAJADAJQADAJABAJQABAEAAAEQABADAAADQgBAMgBAMQgBAHgBAHQgDAPgIAOQgDAHgDAGQgKAUgHAXQgBADgBACQgBADAAACQgBACAAACIAAAAQAAABAAABQgBABABAAIAAAAQgCAUABAVAarpjQgEADgCgBQgEgCgEgDQgBgBgCAAQgUgDgKARQgRAagDAeQAAAEAAAFQgBAdAFAcQACAFABAFQAFAbALAbQAHARAPALQADACACACQADADADABQACABACAAQACABACAAQAHAAAGgDQAGgEAEgHQAFgIADgKQAGgUAEgVQAFgcgBgdQAAgDgBgEQgGgcgLgbQgIgSgIgQQgDgFgFgDgAVRkKQANAEAKAJQAPAPAJATQACAFACAEQAHAOADAPQABACABACQAAACABABQAAADABACQABACABACQADAGADAHQACADABADQAGAKAIAIQAKALALAKQALALAIAMQACADABABQAGAJAFAHQAEAFAHAAQADABACgCQACgBACgCQAMgHALgKQAFgGAFgEQAGgFAFgGQACgCACgCQALgKALgKQACgCABgBQADgEADgEQAEgFAEgGQAEgFAEgGQADgFADgGQACgCABgDQACgDABgDQABgCABgCQADgHAFgIQAAgBABAAQAAgBABgBQABgCABgBQAAgBAAAAQABAAAAgBQABgBAAgCQACgEACgFQAFgQABgTQAAgBAAgBQABgDABgDQAAgCABgCQAAAAABgBQABgBABgBQACgBABgCQAAAAAAgBQACAAABgBQABAAAAgBQABgBABAAQABgBABAAQAAAAABgBQABAAACgBQABAAAAAAQABAAACAAQAAAAABAAIAAAAQABAAAAABIABAAQAAAAAAAAIAAAAQABAAAAAAIABAAQAAgCAAgBIAAgBQgBgEAAgDQgBgDgBgEQgCgBAAgCQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAAAQgBgCAAgBAaVkoQgBgDgCgDIAAgBQgBAAAAgBAa+kdQACgBACgCIAAgBQABAAAAgBIACgBIAAAAQABgBACgBIAAAAIAAAAQABgBABAAQAAgBABAAQAAgBABAAQAEgEAEgEQAFgEAEgEQAEgDAFgCQAJgCADAHQABACACABQADAIgIAGQgBABgCABQgFAFgHACQAGgCAHgBQAMgBAOAAQACAAACAAQAIABgBAJQAAABgCABQgJAJgMABQgCAAgBAAQgUgBgSADQgBAAAAAAQgDAAgCABQgBAAAAAAIgBAAQAAAAAAAAIgBAAQgBAAAAAAIgDAAQAAAAgBAAIAAAAQgBAAgBAAQAAAAAAAAIgCAAQAAAAAAAAIgBAAQAAAAAAAAQgCAAgCgBQAAAAgBAAIAAAAQgCAAgBAAIAAAAIAAAAIgBAAQAAAAAAABIgBAAQAAAAAAAAQgBABAAAAIAAAAQgBABAAAAIgBAAQAAAAAAABIAAAAQgBAAgBABIAAAAQgBAAgBABIAAAAQgBAAAAAAIAAAAIgBAAQAAAAgBAAIAAAAQgBAAAAAAQgBAAAAABIgBAAQAAAAgBAAQgBAAAAABIAAAAQgBAAAAAAIAAAAQgBAAgBAAQgBABAAAAIAAAAIgBAAQgBAAAAAAQgBABAAAAIgBAAIAAAAQgBAAAAAAIAAAAQAAAAgBAAQAAAAgBABIAAAAIgBAAQAAAAAAAAIAAAAIgDABQAAAAAAAAIgBAAIgBAAQAAABAAACQgBADAAADQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAABQACAHADAbQAAADAAACIAAABQABACAAADAbGkbQADAAACAAQADgBADAAQAFgBAGAAQADAAACgBAbMkEQACgBAEABQAFABAFAAQANAAAOADQADAAAEABQACAAABAAQAHACAGACQADACgBADQgCAJgJAFQgBABgBABIgBAAQAHASgEAFQgBACgCABQgDACgDACQgHADgJAAQgDAAgDgBQgHgBgGgBQgJgCgHgFIgBAAQAAgBgBgCQgBgFABgDQAAAAAAAAQACgDADgBAa+j2QgBAHADAFIABAAQAAABAAAAQAAAAABABIAAAAQACADADABIAAAAQABAAACAAIAAAAQAAABABAAQAAAAABAAIAAAAQABAAAAAAIABAAQALAEANgBQALgBALgDQADgBADgBAaykWQgCABgBAAQgCAAAAAAQgCAAgBAAIAAAAQgDAAgDAAQgCAAgCAAQgBAAgCAAIAAAAQgCAAgBAAIAAAAQgBAAAAAAQgBgBAAAAIAAAAQAAAAAAAAAbAjJQgBACgBAEQAAACgBACQAAAEAAAEQAAADAAADQAAACAAABQAAADgBACQAAACgBABQgBABAAABQgBADgCACQgBAAgBAAQgCABgCABQgDABgEgDQgFgFgCgFQAAAAAAAAQgBgCgBgCQAAgBAAAAQgBgDgBgDIAAAAQgEgBgDABAdEANQgPgFgBgPQAAgDABgCQADgFAAgIQgBgLAEgJQAJgUAUgCQAEgBADACQANAFAFANQgBgDAAgCQABgLAKgGQAWgOALAVQAAgDABgEQAAgBABgCQAHgNANgIQANgIANAHQAKAEACAMQABABAAABQABgBABAAQgBgJADgGQAIgNAPgCQAEAAAEAAQANAAAHAMQAEAGACAFQACAJAFAIQABgGAGgEQADgBACAAQAUAEAQAPQACACADADQAAgDABgBQAJgIAKAJQAEAEADAEQAIAIACAKQAAAHAAgFQABgFAHABQATABABAVQAAACABACQAFAGABAGQABAEAAAEQABANgEAJQgFALgHgDQACAEACAEQABACAAADQADALgCAMQgDALgLABQADACACABQADABACACQATASgJAYQgCAAgBgBQgCgGAAAFQgEAZgUANIgBAAIAAAAQADgFADgDQAAgBABgBQAFgIAEgJEAh1AC2QAEACAEAFQAEAFAHAFQALAHAKAMQAhAUAQAbQACAHACACQAKAQAOAcIAAEVEAirAFgQAJANACAPQABAOgEAOEAjjAJTQgBACgBABQgBABgBAAQgBABAAAAQgBACgBAAQAAABgBAAQAAABgBAAQgFAEgGACAe3LHQADgEAFgEQAHgHAHgGQAGgFAFgFQAEgCAEgBQABAAABAAQAIgCAHgBQADABACgBQARAAAQgDQAFAAAEgBQAKAAAKgCQAEABADgCQAOgBAOgCQAJAAAJgCQAFgBAGgCQABAAABAAQAQgFAOgEQALgDAJgFQARgHAOgNQAFgEAEgFQABAEAAAEQABAGgBAFQAAAJAAAJQAAADgBACQAAADgBACQAAACAAACQgBAFgCAFQgEAJgDAIQgBADgBACQgBADgBADQgBAFgBAFQAAADAAACQAAABgBABQAAACAAABQAAADgBADQAAACAAABQAAAGABAFEAjBAL5QgDADgCACQAAAAAAABQgMAMgGADQgLAFgNABQgHAAgGAAQgGABgFAAQgTABgSACQgYACgZAEQgFABgEACQgGADgGABQgGACgCAEEAjCAMDQgBAJABAJQAAAKAAAKQAAAIAAAJQAAAIgBAHQAAAEAAAEQgBAKAAAKQAAAJAAAJQAAAJAAAKQAAAJAAAJQAAAKAAAJQAAAKAAAJQAAAKAAAJQAAAJAAAKQAAAEAAAEEAhPACBQgGADgIAAQgLgKAFgGQACgDAFgCQgEAAgDgBQgMgDACgPQACgGAAAAQgcgDgCgcQgFAPgUgGQgDgBgEgDQgDAAgFADQgEABgEAAQgBAAgBAAQgYgBgLgMQgCACgCABQgOAHgTABQgBABgBAAQAAAAgBAAQgBAAAAAAQgCAAgBAAQgEAAgDAAQgUAAgGgNQgCANgKAEQgBAAgBAAQgCABgEAAQgBAAgCAAIAAAAQgBAAgBAAQAAAAgBAAQgCAAgCgBQgBAAAAgBIgBAAQgBAAgBgBQgBAAgBAAIAAAAQgBgBgBgBQgHgFgBgFIAAAAQACgBACgBQACgBAAgFQgGADAAAFQgPAEgDgRQgBgKAEgGQADgEAEgDQAEgDADgBAdQALQgFgCgHAEAeoBuQACgCACgCQACgDABgDQADgIgCgHQgBgBgCgCQgCgBgCAAQgCAAgCgBQgBgBgBgBQgCgCgDAAQgCAAgCAAIAAAAQgBABgBABQgDACgBADQgCACgBADQAAABgBAAQAEABACAAQAEABACAAQABAAAAABQACAAABABIABAAQADACADAEQADAGgCAFgAelBwQABAAACgCAeQBZQAAABAAABQgCAGABAIQABAFAEACQABAAABABQABAAACAAQACABADAAIABAAQAAAAABAAQAAAAABAAQABgBACAAIAAAAQAAAAABgBQABACABgCQABgBAAgBAfSEAQgTAFgUgEQgCAAgBAAQgBAAgBAAQgEgBgEgCQgBAAgBAAQAAgBgBAAQAAAAgBAAQgFgCgFgDQgMgHgEgMQAAgBgBgBQgGgLgKgKQgCgCgDgGQgEgHgCgDQgCgDAAgBQAAAAgDgFQgDgEgDgEQgFgNgBgPQgBgCAAgBIAAAAIAAgBQAAgBAAgBQgBgcALgpAesDoQgBAAAAAAQgDAAgEgBQgFgDgDgDQgEgEgCgGQABgGACgGQABgDAAgCQAAgDAAgCQAAgLgFgIQgCgCgDgDAXQJFQABgCABgBQAEgHAFgHQAEgFACgFQACgEADgDQAFgLALgCQADAAAEgBQAQgCATgDQAAAAABAAQABAAARgNQABgFgBgIQgBgHgBgHQgFgcgJgbQgBgDgBgEQgHgTgCgUQAAgCgBgDQAAgQABgPQAFgcAKgZQADgGAEgGQABgBAAgBQABgDACgCQAFgJAFgJQAHgMALgHQABAAABgBQAIgEAGgEQAFgFABgCQAAgCAEgBQAEgCAGgEQAMgKAMgJQABgBABgBQAWgOAagEQAKgCAKgBQABAAABAAQANgCANgBQANgCAMgDQAJgCAJgBQAQgCAOgHQAOgGAJgJAcfE3QAAABAAABIAAAAIACAAQAAgBAAAAAZ7IIQAAgBABgCQACgDACgDQAFgLAFgMQABgEABgEQAFgVABgVQgBgcgIgbQgBgDADgDQAMABAMADQAdAGAcgLQALgEAIgIQADgDADgCQANgMAKgPQAHgJAFgMQAAgBAHABQAAAAACgBQAAABAAABQgBAAgBgBAe0DnQgEACgEgBAe0DnQAAAAgBAAQgBAAgBAAQgDABgCAAEAhqAC/QgEAHgDgJIAAAAQgBgDgBgFQAAAGgCAEQgHATgQgOQgKgJgBgQQABgFABgDQAEAAADgBQAJgDAEgIQAFgIgBgMQAAgFAAgIQgBgBgBgBQgGgIgBAGQAAABAAADQAAAEABAHEAhXAB2QACAFADADEAhwAC1IAAAAQAAgBgBgCQAAgBAAgBQABgNgCANQAAACgBACQAAABAAABQAAAAAAABQgBABAAAAQABgBABgBQAAAAAAAAQABgBABAAQAAAAAAAAgEAh1AC2QAAABgBAAQgBAAAAAAQgBAAgBgBQAAgBgBAAEAh6ACuQgBACgBACQgBADgCABEAhqAC/QAAgBABgDQABgBAAgCQgBADgBAEgEAhXAB2QgDAHgFAEAfbBmQARgCACAVIAAABQgEADgDABQABAAAGgCAfwB7QgBgBgBAAIAAgBQABgBABADQAKgJgCgJQgEgJgGgEQgGgFgHABQgHAEgEAIQgBADgBAEQgDAJAEAFQADAFAIACQABAAABAAQABAAABgBQABAAABAAQAAAAABAAIAAgBAedCpQATAMAZgBQAKgBAFgEQgCAGgFAFQgLARgHARQgDAIgIADAepCPQAKgCAKAEAamEyQAKgMAPgHQAQgIAPgFAanIgQAKACAKADQAFADADADQACAEACADQACABAAACQAFAJgEAKQgDAGgFADQgFADgIgBQgCAAgCgBQgMgGgKgIQgFgEgCgFQgFgGgIgDQgHgDgKAAQgJAAgHAFQgBABgCABQgFADgFABQgCAAgCABQgCAAgBABIgBAAQgFABgFAAQgCABgCABIAAAAQgBAAgBABQgFADgDAEIgBAAQAAABgBAAIAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBABAAABQgCADgCADQAAAAAAAAIAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQgBACgCADQgDAHgEAHIAAAAQgBAAAAABQgHAKgPABQgIABgGgEQAAAAAAgCQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAgBAAAAQACgEACgEQABgEACgDQADgHAEgHQACgDACgDQAAAAAAgBIABAAQACgEACgEQABgBABgCQABgBABgBQACgCADgCAanIgIAAAAQgDAAgDAAQgBABgCgBQgIAAgGgDQgBgBAAAAQgJgFgGgJQgBAAgBgCQAAAAgBAAIAAgBQgBgBgBgCQADADAAAAIAAAAIgDgDAbyIVQgHgCgHgBQgPgDgQABQgEAAgDABQgGADgHACQgGABgEAJAXWJVIAAAAQAAAAAAAAIAAgBQAHgMAIgKQABgCABgCQACgEADgCAX7JsQgHAAgFgBQgIgBgFgGQAAgBAAgBQABgDACgDIAAAAQADgGADgFQAFgHAGgFQACgEADgCQABgBABgCQAAAAAAAAQABgCABgBQADgHAHgCAXNJMQgBgCABgBQAAgCADgCQgCACgBACQAAACAAABgAXWJVQgJgHAAgCAXbJfQgJgCAEgIAbTOqQgEgHAAgGQAAgDAAgDQgCgJgCgKQgBgBAAgCQgCgFgCgEQgGgKgEgMQgBgDAAgCQgJgdgNgYQgJgQgKgPQgBgBgBgCQgCgBgBgCQgKgLgEgIQguhIgKgOQgEgGgDgGIAAAAQgBgCgBgCQgDgIgCgJQgBgIAAgJIAAgBQAAgEAAgEQAAgDgBgUAbAK2QAFAMAGAMQACAEABAFEAhEAFDQAIAKAFAKQABACABACQABAGgEABQgIADgHAGQgKAIgHAKQgCAEgDADQgGAJgEALQgCAEgCAEQgFAOAAAOQAAAPADAPQAAAFACAEQAIAaAQAWQABACACACQAJAMAPAFQADABAEAAQAEABAEAAQAFAAAEgBAfbG7QgCgEAHABQAJAAAJABQANABALACAe1HOQABAGAEAFQAEADACAFQACAFABAGQABAGAAAFQAAAKgBAJQAAABAAACQAAAAgBABQAAAEAAAEAf/I0QgLACgJAFQgDABgDABQgDACgEABQgNAGgOAGQgCABgDABQgIACgGADQgMAFgLAHQgFAEgEADQgBABgBAAQgIAAgGgCQgMgEgMAFQgDACgDACQgBAAAAAAQgQAGgLAOQgDAFgDAFQgGAJgHAIQgDADgBADQgEAJACAKQAAABABAAQACACADAAQACgBACgCQAJgIAHgIQAFgGAIgBQACAAABAAQAJgCADAGQgGAFgGAEQgCABgCABQgQAOgCAWIAAABQAAACAAACQAAACAAABQAAABAAABQAAABABABQAAAJADAIQABABAAABQABABAAAAQAAAAABAAIAAABIAAAAQABAAACAAQADAAADgCIgBAAIAAgBQgBgIACgJQACgCABgDQABgMAFgHAd/IJQACAAACACQADABADABQAOAFAPAHQAHADAIADQAEACAEABIAAAAQACABACABQAAAAABAAQAbAKAcAEQADABADABQABAAABAAQABgBABAAQAAAAABAAQABAAACAAQACAAACgBQAMgBAMgCQASgEATACQAEAAACgBIABAAQAHABAEAGAf/I0QAAAAABAAQAAAAABAAQABgBACAAQADABADAAQAAAAABgCAcfE8QACALAAALQAAAFAAAEQACAcAQAWQACADADACQAIAFAKAEQAGACAGACQAMAFAMAFAdUGkQAAgBAAAAIAAgBQABAAgBACQAAABAAACQABACAAADQAAACAAACQAEAaAQAXQAIAKAGAMIAAAAQABADABACQACAEACAFIAAAAAcnKbQAAgDAAgEQAAAAAAgBQgBgGAAgFQAAgBAAAAQgBgBAAgBQAAgBAAgBQAAgBAAgBQgBgFAAgFQAAgBgBgBQgBgFAAgEQAAgBgBgCQAAgBAAgBQgBgCAAgBQgBgFgCgFQAAgCgBgCQgBgDgBgDQgBgCgBgDQgBgCgBgCQgCgGgDgGQgFgIgFgIQgBgBgBgCQgCgCgBgBQgCgCgCgBQgGgGgGgHQAHABAGABQAcAEAdABQAFAAAEACQAeACAWgTQADgEAFgEQAAABABABQAAABABABQADAJACAKAcwLZIAAAAQgFgCgCgCQgPgGgOABIAAAAQABADABACQAAAAABABQAAAAAAABIAAAAQACADABADQAAABABAAQAEAKADAJQABAEACADQAAABAAAAQAAABAAAAQABACAAACQAFAQACARQACASAAASQgBAUABAVQABAIADAGQAFALAHALQAJAOAIAOQABABAAABQAHANAHAMQABABABABQAHALgDAOQAAAEgDADQgCADgCADQgFAHgJACQgKADgMgCQgSgDgSgBQgCAAgCAAQgOgCgMAEQgBACgCABQgFADgGADQgBABgBABQgBABgBAAQAAABAAAAQgCABgBABQgEADgFADQgCABgBABQgBAAgBAAQgCACgDABQAAAAgBAAQgBABgBAAQAAABgBAAQgBAAgBABQgDABgDABQgGAEgGAEQgBAAgCABQgEABgEAEQgDADgCADQAAACgBAAQgCACgDABQgBABgBAAQgBABgCAAQgDACgEACQgLADgLAGQgCABgBABQgOAJgQgFQgGgCgFgCQgCgBgBgBQgGgGgEgGQAAgCgBgCQgBgNAHgLQABgBAAgCQACgEADgCQAAAAAAAAQgDgIADgEQAAgBABgBIABgBQAEgEAIAAAbWRxQgFACgGABQgBABgBAAQgDABgDAAQgBAAgCAAQgJAAgGgFQgBAAgBgCQgEgEABgHQADgOAKgKQABgBABgCQAAAAAAAAQACgDADgCIABAAQAAgBACAAQAGgEAIgDQABAAABAAQABgBAAAAQACAAACgBQAHgCAHgCQABAAABAAQAIgCAIgCQAbgHAdABQABAAABAAQAdAAAdAAQAHABAIgCQAHgCAGgDQACgBACgCQAHgEAHgDQACgBABAAIABAAQABgCABgCQACgEABgEQAAgBAAgCQAEgRgCgSQAAgDgBgCQgEgdgTgVQgCgDgCgCQgKgLgHgOQgNgZgOgZQgOgagLgbQgLgagFgaQAAgCAAgDQgBAAAAAAIAAgBQAAgBAAgBQAAgBAAgBQgCgLgBgLIAAAAAczK1QgDAVAAAHQAAABAAAAIAAABQAAABAAABQAAACAAABIAAABAdRLtIAAAAQABgCABgCQACgFABgGQAAAJABAIQABABAAABQAGAGAIAAQACAAABgBQALgEADgMQABgEABgEQAAAAAAgBQABACABACAcMLQQAAAAAAgBQgCgFgCgFQAAgBgBgCQgIgagTgSAe3LHQgDAEgDAEQgDAEABAHQgBABAAACQACAFAAAJQABAGgEAEQAAACgCABQgEAHgIACQgBgEAAgEQgDgFgBgEQgCgDgBgDQgBgKAAgKQAAAAAAgBQgBgFAAgBAeXLqQAAgCgBgCQgBAGgCAFQgCAHgGAEQgEACgEgDQgJgFABgMQAAgBAAgCQAAgDAAgDQAAgKgBgJQAAgHADgDAe3LHQACABACABQAGADAHADQACABADAAQAYAIASASQAEAEADAFQANAXgDAaQAAAEgBADQgDASABAJQAAAEAAAFQAAAPgEAPQgHAcgBAdQAAADAAADQgCAJABAKQABAHABAHQACANAFALQAEALAGAJQABAAAAABQAAAAAAABQAFAGAFAGQACADACACQAIALAHALQAHAOAAAQQAAAIgFAHQgHAMgPgCQgMgBgNgCQgCAAgCAAQgRgBgRABQgBAAgCAAQAAAAgBAAQgIAAgIAEQgCABgBAAQgCACgDAAQgBABgBAAQgEABgDABQgBAAgBAAQgPAFgQAFQgGADgCAAQgCABgKAEQgLAEgLAGQgLAFgEABQgEACgFABQgRACgRgCQgBgBgCgBQgFgDAAgHQAAgFAFgCEAjAAP1QgDAAgEAAQgBAAgBAAQAAABgDAAQgHAAgHAAQgJAAgJAAQgJAAgKAAQgJAAgJAAQgJAAgIAAQgJAAgJAAQgJAAgKAAQgJAAgJgBQgJgBgKAAAcFR0QgEABgDgCIgBAAIAAAAQAAAAAAAAIgBAAIAAgBQgBAAAAgBQgBAAAAAAIAAAAQgBgBAAAAQgCgJAIgFAb6RxQgCABgBAAQgGAEgFABQgKABgGgHIAAAAIAAAAQgBgBAAgBQgDgEACgFQACgHAEgHAcbR7QgFADgFgDQgBgBgBgBQAAgCAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAgBAAAAQABgEADgCAfCRaQgBAAgBAAQgBABgCABQgBAAgCABAZHP8QgDgDADgFQACgDADgBQABgBABAAQAAgCABgBQABgCABgCQACAAABgBQADgCAEgDQAVgBAMAAQADAAADAAQAEgBAEAAQAQABANgGQACgBADgBQABAAAAAAQAGgCAFgFQABgBAAgBQADgDADgCQACAAAAgCQACgDADgCQAEgCABgEQAAgBAAgBQAEgGADgHQAAgCABgCQAAAAAAAAIAAgBQADgKgBgNAZKQNQAAAAABAAQAAAAAAAAQAFgCAGACQABABABAAQAHABAGgBQACAAACAAQABAAABgBQADAAACgBQACAAABAAQAAAAABAAQAEgBAFAAAVbhjQgBAdgMAZQgCAEgCADQgDAEgCADQgDAFgEAEQgCADgCACQgCADgBACQgBABgBABQgGAHgGAGQgIALgHAKQgDAFgDAHQgCADgBACQgBABAAABQgBADAAACQgFAZADAcQAAADABACQgBABgBACQgBAAgBABQgJALgOAHQgBABgCABQgDABgEACQgHAEgFADQgMAGgOABQgGABgGAAQgeABgegDQgKgCgKgEQgBgBgDgBQgPgHgMgLQgLgKgHgNQgEgHgCgIIAAAAIAAgBQAAAAAAgBQgBgDAAgEQAAgBABgBQACgCACgDQAAAAABgBQAKgJALgIQACgBACgCQACgBADgCQAPgGgDgQQgBgMgHgKQgBgBAFgNASEhPQAAACABABIAAAAQAAADABACQABAFACAFQAAACABACQAEAQADARQABALABALQABAEADAEQAAABABABQAAADAAADQgGgCgFgDQgHgEgIgDQgTgEgNgNQgBgBAAgBIAAABIAAAAQgBAAAAAAIgBAAASNiJQgEACgBAFQAAACgBABQAAACgBACAQaicQgBARADAOQABAEACACQABABAAADQABABABADQADAGABAEQACACABABQACAIAHACQABAAACAAARdgRIgBAAQAAAAAAgBQgBgBAAgBQAAgBAAAAAQHDUQAAgHABgIQAAgDAAgDQAAgQACgPQAEgdAMgaQACgEACgEQAEgHAHgFIAGgFQAAABAAAAIABABQAAAAAAAAARcgRQgBgCAAgCQgEgLgDgKAQHDUQAFAAAEgFQAFgGAIgDQAEAAAEgCQAXgIAYgCQAMAAALABQAXADAUANQAKAGAJAHQADACABACQAJAHgFAXIAAAAQAggnAbgNQADgBADgBQAIgEAKACQACAAABACQACACADABQABABABABIgBgGQgBgEADAHQgBABAAACAROJwQgBgGgBgGQgEgXgFgZQgFgagGgcQgBgEgBgFQgGgdgGgdQgFgTgEgUQgFgXgFgWQgHgdgHgdQgDgOAAgOQgDgbAEgiAUOByQAAABAAAAQAAABAAAAQAAAHACAHQABALABALQABAMgBANQgCALgBAKQABADACAFQAGAQACAaQACAagBAIQgBAagFAbQgFAbgDAbQgEAegFAdQAAAFgBAEQgFAUgGATQgDAIgBAJQgBAEgCADQgDAJgDAJQAAACgBACQgBAEgBAFQgEAMgCAMQgGAdgFAbQgBADAHAIQgDAIgCAGQgFAOAAAIQABAeAAAeQAAAQgBAPQAAABAAAAQgBAFAAAEQABARgCAQQAAAFAAAFQAAACAAACQAAAcgBAdQgBAOAAAPQgBAVABAWQAAADAAADQACAPADAQQABAGACAHQACAHACAHQAAABAAABQACAGAEAGQAJATATALQADACAEACQABACACABQAFAFAHABQACABABABQAMAGAKAHQAHAFAGAIQABACABABQABACABABQAEAEgCABAUOBqQAAABAAACQAAAAAAABQAAACAAACQgBABABABQABACAAADIAAAAQAAABAAABQABADAAAEASxD6QAAAEAAAFQABAdABAdQABAdgBAdQgBAdgFAdQgBAHgBAGQgDAdgBAdQgBALAAALQgCAdACAfQgBAGAAAGQABADgBACQABADAAACQAAACAAACQAAAGAAAGIAAAAQAAAHAAAGQAAABAAAAIAAABQAAAAAAABQAAAIABAIQAAAIABAIQAAADAAADQAEAdAFAeQADANgCAPQAAACABADQABAMABAMQABAOgCANQAAAEgBADQgCAegEAcQgBAFABADQgFAcgDAdQgDAaAAAbQAAACAAADQABANACANQABADAAAEQAAAGgDAOQgNAJgEAFQgFAGgIAHQgEAEgDAEQgBABgBABQgLALgLAKQgFAFgGAEQgGAGgEAGQAAACgBABQgIAQgOAOQgJAIgOACQgRAAgSAAQgKgBgJgEQgKgFABgKQABgIAIgEQACAAABgCQAHgGAHgFQAPgKANgMQAQgPANgSQAEgDACgFQALgQATgPQACgDABgDQABgEAAgDQAEgOABgOQABgPgCgOQgEgcAAgdQgBgeAAgdQAAgdgBgdQABgQgBgPQgBgEAAgDQgDgegBgdQgBgJgBgJQgCgPgCgPQgBgEAAgEQgBgIgBgIAgQghQgCgFgBgGQAAgKgBgLQACAQACAQgAnLFSQAXAIAcAGQAbAFBJgNQAggHARgBQBNgUA0gxQA1gyADgHQALgWAIgZQAFgEABgIQANgOAEgRQAMgtAEgyQACgagCgZQAAgDAAgEAVBRjQgKAEgLAAQgRgBgPgFQgFgCgDgFQAAgBgBgBQgHgLgKgKQgCgCgCgBQgIgEgHgDQgDgBgCgBQgJgCgIAAQgDAAgCgBQgNgBgUgNAvEhFQAEgEAFgEQAHACACAAAwChbQgCAJAGAHQAMARAZgBIAAAAQAFgKAQAAAvZg7QAFAAAFgBQACgDADgBQADgDADgCAuJgoQgMADgKALQgEAEgDAEQgDAEgJACQgiAFgHghQgCgLAEgHIAAgBAwChbQABgGAFgIQAPgVAUANAuWgRQgSgBgJAIQgLAIgCARQAAAFACAFQANAaAlgIQACAAABAAQAEgBAEgDQAPgJAKgPAuHArQgBAAgBABQgQAQACAZQACAOAKAMQAEAFAEAEQANANAagCQAFgDAGgBQALgBAxgzQBMAqA5BqQAeBLCnAoQggBvgMAWQgMAWgKAVQgXAxgiAoQgIAKgKAJQAAABAAAAQgEAEgEAEQgaAYgiAUQhRAxhNA5QgTAOgTAJQhTAkhfAFQgKAAgKABQgtACgugCQgNgBgNAFQgIADgKAAQgBAAAAAAQhjAAhigBQgxAAgvgMQgKgCgKgCQgNgDgNgDQgygLgygNQg4gOgugiQgVgPgRgSQgGgFgJgKQgjgigsghQgGgFgHgEQgXgPgTgMQgEgCgFgBQgDgBgDgCQgagTgigQQgTgJgPgNQgBgHgGAAQgUgPgLgRQgPgUgJgQQgrhQgbhXQgJgfgKgeQgCgHgCgHQAAgDAAgCQAAgKgFgHQgDgDACgFApQKHIATAAIABAAQAAABAAABQAAACgBABQgEARgCARQgKBdABBeQABBgAABgQAABTgDBTAytTbQAAAAAAAAQgEgGgCgFQgDgXAAgWQgFgOAAgMQgCgjAAgkQAAgbACgcQAEgwACgwQABgWALgJApOTbIpfAAA/5h+QgRgMgNAXQguBTgpBWQgHAVgHAUQgQAxgRAyQAAAAAAABQAAABgBABQgEAMgEAMQgFAhgIAhQgPA1gJA1QgEAagHAZQgCAFABAFQADAXgGASQgDAHgBAHQgBAKAHAG");
	this.shape_4.setTransform(25.2,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#6699FF"],[0.325,1],2.4,0,0,2.4,0,13.6).s().p("AAFB3IgDgCQgDAAgCgDIgGgFQgOgKgHgSQgLgagGgcIgCgKQgGgbABgdIABgJQADgeAQgZQALgSATADIAEACIAGAEQADACAEgDQAFACADAFIAPAiQAMAbAFAdIABAGQACAcgGAcQgDAVgHAVQgDAJgFAJQgEAHgFADQgGADgIAAIgEAAg");
	this.shape_5.setTransform(194.6,-33.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#000000","#996600","#996600"],[0,0.427,0.545],-163.2,-103.3,0,-163.2,-103.3,819.2).s().p("AhRB9QgGgJgEgLQgFgLgCgNIgCgOQgBgKACgJIAAgGQABgdAHgbQAEgPAAgPIAAgJQgBgJADgSQACgEAGgCIAMgEIAJgDQAZgEAYgCIAkgDIALgBIANAAQANgBALgFQAGgDAMgMIAAgBIAGAFQgBAJABAJIAAAUIAAARIgBAPIAAAIQgBAKAAAKIAAASIAAASIAAASIAAATIAAATIAAATIAAATIAAAIIAAAFIgHAAIgCAAIgDABIgOAAIgSAAIgTAAIgSAAIgRAAIgRAAIgTAAIgSgBIgTgBIgIAGIgBgBg");
	this.shape_6.setTransform(239.3,105);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996633").s().p("Ak3DBIAAgCIAAgFIACgRIAAAAIACgOQABgNgJgCQgSAIgIASIAAABIgDAAQAEgsAQgmQAKgYAUgQQARgPAPgKIglgBQgIAAgHACQgXAIgcAAQALgRAPgMQAHgDAHgBQAUgSAegHQAVgFAQAFQAPAHAFgIQANgaAIgdQADgLACgLQAEgYAPgKIABAFIADAKQALAVAPAYQAPgGAKgSQATgQAUgRQAdgXAmgUQAHgGAUgFQAGgFAHgDQAVgJAXgFIALgCIAPgCQAegBARAEQAdgCAZACIAKAAQAYABARAHIAKADQAYAEAMANIhcASQgNABgHALIgCAEIAHAAQAXABAWgDQAGABAEgBQARADATgCQAmABARAbQgHAIgNgBQgWgCgXAAQARAAAPAIIAHAEQAZAOASASQANAMABAOQgNgFgQAAIgCAAIAAAAIgIABIgLACIg5gBIgBABIgNAEIgHACIgOABQgugBgsAIQgLABgKgCQgUAHgQADQgfAKAGAdQACAMgBAKIAAABQAAAJgEAJQgJgIgGgEQgVgLgUgIQADAUAEAUQACANgBANQgBAHAAAIQABAQgIAEIgEgFQgDgFgEgDIgsglQAHAhgEAlQgBAKABAKQABAegUAVQgOg4glgxQgMgQgLALQgfAdgYAcQgEAFgCgCIAAgEQABgDgMAbIgEgGIAAgBQgIgGgQAGQgEACgDAHQgHAEgFAHIgBABIgHAMIgCADIgDAIIgBABQgZgQgBgKgAEOh5IgFAAIADAAIACAAgACiiZIgIABIAIgBIACAAIALAAIABAAIAAAAIACAAIAEAAIgEAAIgCAAIAAAAIgBAAIgLAAIgCAAgAChiiIAAgBQAAgGAHAAIAAAAIABAAIACAAIgCAAIgBAAIAAAAQgHAAAAAGIAAABIAAAAgABJAjQAEgMALgJQAGgJAKAAQARgBAQACIARADIAFAFQgDADgDABIgIADIgQAFIgTAGIgBAAIgCABIgVAIIgPAGQABgGABgGgAD7gBIgGgTIgDgFIAAgBIgBgCIgBgCIAJAAIAogBQgEACgDAFQgKASgRAPIgEgKg");
	this.shape_7.setTransform(-127.3,-87.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgEDgQAEgWgIgIIgEgDIgTgOQgUgMgXgEQgLgBgMABQgYACgXAIIgIACQgIADgFAGQgEAFgFAAIABgPIAAgHQAAgPACgPQAEgdAMgbIAEgIQAEgGAHgFIAGgFIAAABIABAAIAAABQACAIAEAHQAHANALAKQAMALAPAHIAEABQAKAEAKACQAeADAdgBIAMAAQAOgCAMgGIAMgGIAHgEIADgBQAOgHAJgLIACgCIACgCIAAACIAAACIAAADIAAACQAAAIACAHIACAVQABANgBAMIgDAVQgBgBAAgCQgBgBAAAAQAAAAAAAAQAAAAAAACIABAFIgCgCIgFgDIgDgCQgKgBgIADIgGADQgbANgfAmgAgyhxIgBgDQgBgPAEgNIABgFIACgDIABgCIAAAAIAEgJIABgCIACgGIAJgOIAFgJIADgGIAIgUIABgDIAGACIAFACIAHACQARAEAOAIIACACQAAAAABABQABAAAAAAQABAAABAAQAAgBABAAQACgCAEgBIAFgCIAOgGIABAAIADgBQAMgEAOAAIAIABIAUAAQAGAAACADIACABQAHADADAGIAEAFIADAGIAKANIAIALQADAFgDAGIgEAKIAAAAIgJATIgBADIgFAJQgEAFgHABIgEAAQgLAAgLACQgdAEgdgDQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgNgHIgCgBIgCgBQgEgCgGABIgcAEIgDABIgcAIIgCAAIgDABIgCAAIgCABIgJACIgBgJgAiMh8IgDgDIgEgKIgCgEIgBgEQgCgCgBgDQgDgPABgQIgBgCIACgCIABgBIACgBQAFgBAPAHIAAABIAAAHQgBAMAAAMIAAABIABAEQAAANACANIgCAEQgHgCgCgIgAiZijIAEAFIgEgFIgBgGQAAgHADgLQgDALAAAHIABAGg");
	this.shape_8.setTransform(145.8,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("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AAIgEAAIgCgBIgBAAIgBAAIAAAAIgGACIgoABIgKgBIABADgAWcDIIAAAAgAVnBgQgKgCgKgEIgEgCQgQgHgMgLQgKgKgHgNQgEgHgCgIIgBAAIAAgBIAAgBIgBgHIABgCIAEgFIABgBIAWgQIADgDIAGgDQAOgGgCgQQgCgMgGgLQgBgBAFgNIAAAAIABAAIAAAAIAAgBIABACQANANATAFQAJADAHAEIALAFIgBgGIgBgCIgEgJIgCgWQgCgRgFgQIgBgEIgDgKIgBgFIAAAAIAAgDIAJgBIABgBIADAAIACgBIACAAIAcgJIAEgBIAdgEQAGAAAEACIABAAIADABIANAIQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAdAEAdgFQALgBAMAAIAEgBQAHgBAEgEIAEgJIAGACQAAAdgNAZIgEAHIgFAHIgGAJIgFAFIgDAFIgBACIgMAOIgPAVIgHAMIgDAFIgBACIgBAFQgFAYAEAcIAAAFIgCADIgBABQgKALgNAHIgDACIgHADIgNAHQgLAGgOABIgNABIgPAAQgWAAgWgCgAbTgjQgIgBgGgFQgHgGgFgIIgKgPIgMgYIgGgLQgQgXgTgXIgHgHQgHgHgJgEIAAAAQgJgEgNAAIgCAAIgBAAIAAgBIAFgKQADgGgEgFIgHgLIgKgNIgEgFIgDgFQgEgGgHgEIgBgBQgDgDgFAAIgUAAIgIgBQgOAAgNAFIgDABIAAAAIgOAFIgFACQgEABgDACQAAABgBAAQgBABAAAAQgBAAgBgBQAAAAgBgBIgBgBQgPgIgRgFIgHgCIgGgCIgGgCIACgHIAFgOQAGgSADgTIABgJIABgBIABgLIAAgBIAFgaIACgJQACgNgBgPIACgQIAAgSQAAgKgCgKIAAAAIAAgBIAAgBIgBgDIgGgUIgDgKIgHgSQgEgPgDgPIAAgBIAAgFIgCgKIACgOIAAgEIAAgBIAAgBIAAgDIAAgCIABgJIABgHIABgBIAAAAIAEgNIAAAAIAAgDIAGgOQAGgMACgMIAAgBIAAgBIADACQAEACAEABIAFABIAhAMIASAHIAKAFIAEABIACABIAAAAIABABIABAAIABAAIABACIACABIAAAAIAEACIAJAHIADABIAFAGIABACIAAABIAGAHIADAHIAFALQAFARAHARIAFALIADAGIgDAyIgBAIIAAACIAAACIgBAEQgCAQgFAPIgCAGIAAABIAAABIgBAAIgBACIgBAEIgCADIAAAAIgBABIgKAQIgEAFIgBABQgNAIgPAFIgHACIgEACIgFABIgHACIgFABQgHABgDADIgBADIgHAZIgBAMIALACIAGAEQAIAFAHABQAJABAIgBQAIgCAIgDQAJgDAIgGQAKgIALgGIAFAAIABAJQANAEAKAJQAPAPAIATIAEAJQAHAOAEAPIABAEIABADIACAFIABAEIAHANIADAGQAFAKAJAIIAUAVQAMALAIAMIACAEIAMAQQAEAFAGAAQADABADgCIADgDQAMgHALgKIALgKIALgLIADgEIAXgUIADgDIAFgIIAJgLIAHgLIAHgLIADgFIADgGIABgEIAIgPIABgBIABgCIACgDIABgBIABgBIABgDIADgJQAFgQACgTIAAgCIABgGIACgEIAAgBIADgCIACgDIABgBIACgBIACgBIACgBIABgBIABgBIAEgBIAAAAIADAAIABAAIABAAIABABIAAAAIABAAIAAAAIABAAIAAAAIAAAAIABAAIAAABIABAAIABAAIACAAIAAAAIAEAAIADAAIAGAAIABAAIACAAIACAAIADgBIAGAMIgBAAIAAABIAAAAIgBAAIgBABIAAAAIgBABIAAAAIgBABIAAAAIgCABIAAAAIgCABIAAAAIgBAAIAAAAIAAAAIgBAAIgBAAIgBAAIgBABIAAAAIgCAAIAAABIgBAAIgBAAIAAAAIgCAAIgBABIAAAAIAAAAIgCAAIgBABIAAAAIgBAAIgBAAIAAAAIAAAAIgBABIgBAAIAAAAIgBAAIAAAAIgDABIAAAAIgBAAIAAAAIgBADIAAAGIAAABIAAABIAAABIAAACIAEAiIAAAFIAAABIACAFIgBAAIgJAFIAAAAIgCABIgEADIAAABIAAAAIgBABIAAABIAAAAIAAABIgBAAIgBACIgCAEIgBACIAAAAIAAABIAAAAIAAAAIAAAAIgDAEIgBAAIgBAEIgJANIgDAFIgFAHIAAABIgBABIgMATIgBADIgGAPIgGAOIgDAEIgMATIgJALIgWAXIgEACIgeAfIgJAHQgIAFgKAAIgDAAgAX8mjIAHgCIgHACQgEAAgDgCQgKgHgIgMIgBgDQgCgEgDgDQADADACAEIABADQAIAMAKAHQADACAEAAIAAAAgAYGmzIAAgBQAAgOAJgNQgJANAAAOIAAABgAXynGQAGAAAGgCIABAAIACgBIAFgEQACgEAFgCIAAABIACADQADAEAHADQgHgDgDgEIgCgDIAAgBIgBgDIgCgFIAAgBIAAABIACAFIABADQgFACgCAEIgFAEIgCABIgBAAQgGACgGAAIgBAAIAAAAIgCAAIgCAAIgNgBIANABIACAAIACAAIAAAAIABAAgAYBn4IgHAFIgFAGIAFgGIAHgFQAEgDAAgCIAAAAIgBAAIgBABIgCAAIgBAAQgJAAgHgFQAHAFAJAAIABAAIACAAIABgBIABAAIAAAAQAAACgEADgAWto7IgBACIAAACIAAADIAAAEQABAGAEAFIABAAIADADQAFAFAIACIAHAAIAAAAIABAAIAAAAIABAAIAEgBQACgCAAgEIABgCIAAgCIAAAAIgCgEQAAgFgCgDIgBgCIgCgCIgDgBIgCgBIgCgBIgBgCIgCgCIgBAAIgBgBIgCgBIAAgBIgDgBQgDgBgEABIgBABIgBAAIgBAAIgDADIAAACIgDAAIgCAAIAAAAQgGAAgCACIgCACIgCADIAAACIgBABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIgJgDQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIABgBIAAgCIACgDIACgCQACgCAGAAIAAAAIACAAIADAAIAAAAgAX0pIQgDAAgDAFIAAAAQgCAFABAFQAAAFACAEIAAABIAEAHQADAEADABIAEABIADAAIAFgCQADgBAAgEQgBgJgDgIQgDgFgDgEIAEAAIACAAIAAAAIABAAIAIgBIAIgDIgIADIgIABIgBAAIAAAAIgCAAIgEAAIgEgEIgFgBIgBAAgAWopIIABAAIABAAIAGAAIgGAAIgBAAIgBAAIgDAAIgDAAIADAAIADAAgAXnpOQACgEAGAAIAAAAIAAAAIABAAIACAAIgCAAIgBAAIAAAAIAAAAQgGAAgCAEgAfXj3IgGgBIgMgCQgKgCgHgFIAAAAIgBgDQgCgFABgDIABAAQABgDAEgBIABgFIAAAAIABABIABAAIABAAQAIADAIAAIAAAAIAAAAIAFgBQALgBALgDIAHgCIgHACQgLADgLABIgFABIAAAAIAAAAQgIAAgIgDIgBAAIgBAAIgBgBIAAAAIgBAAIgBAAIgBAAIgBgBIAAAAIgCAAIgBAAQgCgBgDgDIAAAAIgBgBIAAgBIAAAAQgDgFABgHIANgOIAGAAIAKABQAOAAANADIAHABIAEAAIANAEQAAABABAAQAAABABAAQAAABAAAAQAAABAAABQgDAJgIAFIgDACIAAAAQAGASgDAFIgEADIgGAEQgGADgIAAIgCAAgAe8lOIALgBIAGgBIgGABIgLABIgFABIgFAAIgCgIIAAAAIADgCIAAAAIABAAIABgBIABgBIABgBIAJgIIAIgIQAEgDAGgCQAJgCADAHIACADQADAIgHAGIgDACQgGAFgGACIAMgDQANgBANAAIAEAAQAJABgCAJQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQgJAJgNABIgDAAQgUgBgSADg");
	this.shape_9.setTransform(1.6,20.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AhJFCQgHgEgIgCQgTgGgNgNIgCgCIAAAAIAAAAIAAABIgIgJIAAAAIgJgPIgFgSIAAAaQgOgQgBgWIAAgBIgBgEIgBgMIgBgFQgCgNAAgNIgBgEIAAgBQgBgMABgMIABgHIAAgCIAAgBIAAgDIAAgEIAAgEIAAgCIABgEIAAgHIALgiIAHgXIABgCIABgEQACgHAAgHIABgGIAAgBIAAgBIAAgBQABgPAAgPIgBgHIgBgWIgCgSIAAgEQgBgLgDgKIgBgKQgCgOgEgNIgBgEIgDgKIgFgZIgBgIQgCgNACgPQABgQAAgTIAAgLQAAgIACgHIACgFIAFgOQAKgXARgVIAEgFQALgIAOgEIAZgGQAKgCAJACIAIAAIASgDIAKgCQAIgDAJAAIACAAQAIAAAHgCQAEgBAEABQAAAAAAAAQABAAAAABQABAAAAAAQABAAABAAIAOAHIAHAEIAAACQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAKAFAJAGIAHAEQAKAHAJAKIABACIABABIADAEIABAAIAAAAIAQAUIAAABIAGAHIAFAFIAHAIIACACQAOAQAGAUIACAIQADAMABAMIAAAFIAAAJIAAACIABAKIAAAHQgCAZgHAYIgDAIIAAAAIgEANIgJAXIAAABIAAABIAAAAIgKAfIgEAJIgCAEQgDAMADANIgDAAIgFABQgLAFgLAIQgIAGgIAEQgIADgIABQgJABgIgBQgIgBgHgFIgGgDIgMgDIACgMIAGgZIABgDQADgDAHgBIAFgBIAIgBIAFgCIADgBIAHgDQAPgDAOgJIAAAAIAFgGIAKgPIAAgBIABgBIABgDIACgDIABgCIAAgBIAAgBIABgBIACgGQAEgPADgQIAAgEIABgCIAAgBIABgJIACgyIgDgFIgFgMQgHgRgFgRIgEgLIgEgGIgFgIIgBgBIgBgBIgFgGIgCgCIgKgGIgDgDIAAAAIgCgBIgCgBIgBgBIAAAAIgBAAIgBgBIgBAAIgEgCIgKgFIgTgHIgggLIgFgCQgEAAgDgDIgDgCIAAgCIAAABIAAABIgBAAIAAACQgCAMgFAMIgGAPIgBACIAAAAIgEANIAAABIAAAAIgBAHIgBAJIAAACIAAADIAAACIAAAAIAAAEIgCAOIABAKIABAGIAAAAQACAPAFAQIAGARIAEALIAGAUIAAACIAAABIABABIAAABQACAJAAALIgBASIgBAPQABAPgDANIgCAIIgEAaIAAABIgCALIAAABIgBAKQgDASgGASIgFAPIgCAHIgCADIgIAUIgCAGIgFAJIgJAOIgCAFIgCADQgDADgBAFIgBADIgBADIgBAFQgEANABAPIABADIABAJIABACIAAAAIABAGIADAKIABAEQAEAQADARIACAWIAEAIIABACIAAAHIgLgGgAh7EkIABADIAAAAIgCgEIABABgAh8EjIgGgUIAGAUgAh6Eng");
	this.shape_10.setTransform(149.1,-15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AZSOAQADgagNgXQgDgFgEgEQgSgSgYgIIgFgBIgOgGIgDgCIAIgIIAOgNIALgKIAIgDIACAAIAPgDQABAAAAAAQABAAABAAQAAAAABAAQABAAAAAAQARAAAQgDQAFAAAEgBQAKAAAKgCQAEABADgCIAcgDQAJAAAJgCIALgDIACAAIAegJQALgDAJgFQARgHAOgNIAKgBIAAALIAAASIgBAFIgBAFIAAAEIgDAKIgHARIgCAFIgCAGIgCAKIAAAFIgBACIAAADIgBAGIAAADQAAAGABAFIADASIgFAGIgBABQgLAMgGADQgLAFgNABIgNAAIgLABIglADQgYACgZAEIgJADIgMAEQgGACgCAEIABgHgAVxL3IAAgHIAAgBIgBgLIAAgBIgBgCIAAgCIAAgCIgBgKIgBgCIgBgJIgBgDIAAgCIgBgDIgDgKIgBgEIgCgGIgCgFIgCgEIgFgMIgKgQIgCgDIgDgDIgEgDQgGgGgGgIIANADQAcAEAdABQAFAAAEACQAeACAWgTIAIgIIAAACIABACQABAAABAAQAAAAABAAQAAABABAAQABAAAAABIAGACIAdAMIAOAGIAJADIAAAAIAEACIABAAQAbAKAcAEIAGACQgLACgJAFIgGACIgHADIgbAMIgFACIgPAFQgLAFgLAHIgJAHIgCABQgIAAgGgCQgMgEgMAFIgGAEIgBAAQgQAGgLAOIgGAKIgNARIgEAGgAXOJ4IgGgTIAGATgAaSEgQgKgJgBgQIACgIQAEAAADgBQAJgDAEgIQAEgIAAgMIAAgNIgCgCQgGgIgBAGIAAAEIABAKQgGAEgIAAQgLgKAEgGQADgDAFgCIgHgBQgMgDACgPIACgGQgcgDgCgcQgFAPgUgGIgHgEIgIADIgIABIgCAAQgYgBgLgMIgEADQgOAHgTABIgCABIgBAAIgBAAIgDAAIgHAAQgUAAgGgNQgCANgKADIgCABIgGABIgDAAIAAAAIgCAAIgBAAIgEgBIgCgBIAAAAIgCgBIgCgBIAAAAIgCgBQgHgGgBgEIAAAAIAEgCQACgBAAgFQgGADAAAFQgPAEgDgRQgBgKAEgGQADgEAEgDIAHgFIAAAAIAAAAIABAAIAAAAIAFgCIACAAIABAAIACAAIABABIgBgBIgCAAIgBAAIgCAAIgFACIAAAAIgBAAIAAAAIAAAAQgPgEgBgQIABgFQADgFAAgIQgBgLAEgJQAJgUAUgCQAEgBADACQANAFAEAMIAAgEQABgLAKgGQAWgOALAVIABgHIABgDQAHgNANgHQANgIANAHQAKADACAMIABACIACgBQgBgJADgFQAIgNAPgCIAIAAQANAAAHAMIAGAKQACAJAFAIQABgGAGgEIAFgBQAUAEAQAPIAFAFIABgEQAJgIAKAJIAHAIQAIAIACAKQAAABAAACQAAABAAAAQAAAAAAAAQAAgBAAgBQABgFAHABQATABABAVIABAEQAFAGABAHIABAIQABANgEAJQgFALgHgDIAEAIIABAFQADALgCAMQgDALgLABIAFADIAFADQATASgJAYQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgCgGAAAFQgEAZgVANIAAAAIAFgIIACgCQAFgIAEgJQgEAJgFAIIgCACIgFAIIAAAAIgCAEIgDAEIgBABIgBAAIgCgBIgBgBIAAAAIgBgDIAAgCQABgNgCANIgBAEIAAACIgBABIAAABIgDAHQgDAHgDgJIgBAAIgBgIQAAAGgCAEQgEALgHAAQgFAAgHgGgAamDaIgFgIIAFAIgAYqDcQgJgCgDgFQgDgFADgJIACgHIAFACQARgCABAVIAAAAQgDAEgDABIgBABIAAAAIgCAAIgCABIgBAAIgBAAgAXoDOIAAAAIgGgBIgCAAIgCgBQgEgDgBgEQgBgIACgGIAAgCIAGABIAGABIABABIADABIAAAAQAEACADAEQADAGgCAFIgDACIgBABIgBAAIgCAAIgBABIgBAAIgBAAgA8FsEIgGgCQgSgEADgXQADgIAFgFQAQgSAMgGQAJADALgFIAEABQAGADACAFQADAGAAAJQAAAFgCAEQgJAUgNAMQgGAGgHAAIgCAAQgFAAgGgDgA5btaQgLgiAggFIAEgFIABABQAFAEACAGQAHAjgeACQgJgDgBgBg");
	this.shape_11.setTransform(69,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC9966").s().p("AgvN+IgCgCQgGgEABgHQAAgFAEgBQgEABAAAFIgJADQgFACgFgCIgCgDIgBgDIAAgBIAAAAIAAgBIABgCIAAgBQABgDADgDQgDADgBADIAAABIgBACIAAABIgJAAQgEABgEgCIAAAAIAAgBIgBAAIAAAAIAAAAIgCgBIAAgBIgBAAIAAgBIgBgEQAAgGAHgEQgHAEAAAGIABAEIAAABIgCACQgGADgFABQgKABgGgHIAAAAIAAAAIgCgCQgBgCAAgDIAAgEIAGgOIgGAOIAAAEQAAADABACIgEACQgFADgGABIgDABIgFAAIgDAAQgJAAgGgEIgCgCQgEgEABgHQACgOALgLIACgCIAAgBIAFgFIAAAAIACgBIAPgGIACgBIABgBIAEgBIAOgEIACAAIAQgDQAbgHAdAAIABAAIA6ABQAHAAAHgCQAHgBAHgEIAEgCIAOgIIADgBIAAAAIACgEIAEgIIAAgCQAEgRgCgTIgBgFQgEgcgTgWIgEgFQgKgKgHgOIgbgzQgNgagMgbQgKgZgFgbIgBgEIAAgBIAAgBIAAgBIgBgDIgCgWIAAAAIAAAAIAAgEIAAgBIAAgBIAAgBIAAAAIAAgBIACgcQADgBACgCIAPgQQAGgFAIgBIADgBIAAAAIADAAIAAAAIAAAAQAFAAACAEIAAAAIABABQgGAFgGADIgDADQgRAOgBAWIAAAAIAAACIAAACIAAACIAAACIAAABIAAABIAAACQABAJADAIQgDgIgBgJIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgCIAAAAQABgWARgOIADgDQAGgDAGgFIgBgBIAAAAQgCgEgFAAIAAAAIAAAAIgDAAIAAAAIgDABQgIABgGAFIgPAQQgCACgDABIAAAAIgCAAIgCgBIAAAAIgBgCIgBgHQAAgGADgFIADgGIAOgSIAGgJQAKgPAQgGIAAAAIAGgEQANgFAMAEQAGADAHAAIADgBIAJgHQAKgHAMgFIAPgGIAFgCIAbgLIAHgDIAGgDQAJgFALgCIgGgBQgcgFgcgKIgBAAIgDgCIAAAAIgJgDIgPgGIgcgLIgGgDQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAAAgBAAIgBgDIgBgCIAAAAIgDgIIgCgFIgBgBQgGgLgHgLQgPgWgEgbIgBgEIAAgFIAAgCIAAgCIABgEIAYALIgYgLIgLgEQgKgDgIgGIgFgFQgQgWgCgcIgBgIQABgMgCgKIAAgEIACAAIAAgBIgBgBIgBABIgIgBQgFAMgGAKQgKAOgOAMIgFAFQgJAIgKAEQgcAMgdgHQgMgCgMgBQgEACABAEQAJAaAAAdQAAAUgFAVIgDAIIgKAXIgDAHIgBADIACADIAAAAIABAAIABADQAHAIAJAGIAAAAQAHADAIABIADgBIAFABIABAAQAEgJAGgCIAMgEQAEgCAEAAQAPgBAPADIAPADQAFAHAHAGIAEADIACADIACAEIAKAPIAGANIACAEIABAEIADAHIABADIACAKIABADIABACIAAAEIACAIIABADIABAJIAAACIAAADIABABIAAABIABALIAAACIAAAHIAIAEQgDAFAAAGIABAHIABACIAAAAIACABIACAAIAAAAIgCAcIAAABIAAAAIAAABIAAABIAAABIAAAEIAAAAIAAAAIgIgDQgOgGgOAAIAAAAIgEgKIgBgEQgIgagTgRQATARAIAaIABAEIAEAKIAAAAIAAABIACAEIAAABIABABIAAAAIADAGIABABIAHAUIACAHIABABIAAABIABADQAEAQADARQACASAAATIAAAoQAAAIADAGQAGAMAHALIARAcIABABIANAZIACADQAHAKgDAPQgBAEgBADIgFAFQgEAHgJACQgKAEgNgDQgRgDgSgBIgEAAQgPgBgLAEIgDADIgLAGIgCABIgCACIAAAAIgDACIgJAGIgEACIgBABIgFACIgBABIgCABIgBAAIgDABIgFADIgMAHIgDABQgFACgDADIgFAHIgBACIgFADIgDABIgCABIgHAEQgLACgMAHIgDACQgOAJgPgFIgLgFIgEgBQgFgGgEgHIgBgDQgCgNAIgLIABgDQACgFACgBIAAgBQgCgIACgEIACgCIABAAQAEgEAIAAQgIAAgEAEIgBAAIgFgDQgCgDACgEQACgEAEgBIABgBIACgDIACgDIACgBIAIgFIAhgCIAGAAIAHAAQARAAANgFIAEgCIACgBQAGgCAFgEIABgCIAGgFIACgCIAFgGQAEgBABgFIAAgBQAEgGACgHIACgEIAAgBIAAAAQACgJAAgLIAAgEIAAAEQAAALgCAJQgEgHgBgHIAAgGIgDgTQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgFgIQgFgKgEgNIgBgFQgJgcgOgYIgTgfIgCgEIgCgCQgKgLgFgJIg3hVIgIgNIAAAAIgBgDQgEgJgBgIIgCgSIAAgBIAAgIIAAgWIAAgBIABAAIAAgBQAEgEAFgDIACgBIAAAAIAEgBIAKgCIAAAAIAEgBIADAAQAFgBAGgEIADgCQAHgEAIAAIABAAIABAAIAAAAIABAAQAIAAAGACIABAAQAIADAFAGQACAGAEADQAKAJANAGIADABIACAAIABAAIAAAAIAAAAQAGAAAFgDQAFgCADgGQACgFAAgEQAAgGgDgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgDgCgBgFQgDgDgFgCQgKgEgKgBQAKABAKAEQAFACADADQABAFADACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQADAEAAAGQAAAEgCAFQgDAGgFACQgFADgGAAIAAAAIAAAAIgBAAIgCAAIgDgBQgNgGgKgJQgEgDgCgGQgFgGgIgDIgBAAQgGgCgIAAIgBAAIAAAAIgBAAIgBAAQgIAAgHAEIgDACQgGAEgFABIgDAAIgEABIAAAAIgKACIgEABIAAAAIgCABQgFADgEAEIAAABIgBAAIAAABIgBAAIAAABIgBABIgBABIgDAGIAAABIAAAAIAAAAIgBABIgBABIAAABIgDAEIgIAOIAAAAIAAABQgHAKgPACQgIAAgGgEIAAgBIAAgBIAAgBIABgBIAAgCIABgBIAEgIIACgGIAIgOIAEgGIAAgBIAAgBIAFgHIACgDIACgCQACgDADgBQgDABgCADIgCACIgCADIgFAHIAAABIAAABIgEAGIgIAOIgCAGIgEAIIgBABIAAACIgBABIgFgCIgNAAQgHgBgFgHIAAgCIACgGIAAAAIAHgKQAEgHAHgGIAFgGIACgCIAAgBIABgDQAEgHAGgCQgGACgEAHIgBADIAAABIgCACIgFAGQgHAGgEAHIgHAKIAAAAIgCAGIgHgDQgKgCAEgHIABgBIAAAAIAAAAQAGgMAIgKIACgEQACgFAEgBQgEABgCAFIgCAEQgIAKgGAMIAAAAIAAAAIgBABQgIgHgBgDIABgCIACgFIACgDIAKgOIAGgKIAEgHQAGgKALgCIAHgBIAjgFIABAAQABAAARgOQAAgEAAgIIgCgOQgGgdgJgbIgBgGQgHgTgCgUIgBgFIABggQAFgcAKgZIAGgLQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIADgFIAKgQQAHgMALgHIABgBQAJgEAGgFQAFgFAAgCQABgBAEgCQAEgBAGgFIAXgTIADgCQAWgNAagFIAUgCIABgBIAagDIAagEIASgDQAQgDAOgHQANgGAKgJIAGAAIAAAAIAAADQACAPAFANIAEAIIAEAGIAAAAIAAAAIACADIAFAKIAGAJQAKAJAGAMIABACQAEALAMAHIAKAFIABABIABAAIACABIAIACIACAAIADABIABAAIAPABIAAAAIAAAAQALAAAMgDQgMADgLAAIAAAAIAAAAIgPgBIgBAAIgDgBIgCAAIgIgCIgCgBIgBAAIgBgBIgKgFQgMgHgEgLIgBgCQgGgMgKgJIgGgJIgFgKIgCgDIAAAAIAAAAIgEgGIgEgIQgFgNgCgPIAAgDIAAAAIAAAAIAAgDQgCgcALgpIADAAIAGgBIACAAQAKgEACgMQAGANATgBIAHAAIADAAIACAAIABAAIACAAQATgCAOgHIAEgCQALAMAYAAIACAAIAIAAIAIgEIAHAEQAUAHAEgPQADAbAcADIgCAGQgCAQAMADIAHAAQgGACgCADQgEAGAKALQAJgBAGgDQAFgEADgGIAAAMQAAAMgEAIQgEAIgJAEQgDABgEgBIgCAIQABAQAKAJQAQAPAHgTQABgFABgFIABAHIAAAAQAEAKADgHIACgFIABgCIABgCIABgBIABgBIABAAIABABIACACIABgBIABgBQADADAFAFQAEAFAGAEQAMAIAJALQAiAUAQAbQACAHACABQAKARAOAbIAAEWIgIAAIgCACIgBACIgBABIgCACIgCABIAAABIgLAGIABACIgJAJQgPANgQAIQgJAEgLADIgeAJIgCABIgLADQgKACgIAAIgcADQgDABgEAAQgKACgKAAQgFABgEgBQgQADgRAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAIgPADIgDAAIgHADIgLAKIgOANIgIAJIADABIAOAGIAFACQAYAHASATQAEAEADAFQANAWgDAaIgBAHQgDASABAJIAAAJQAAAQgEAPQgIAbAAAdIgBAHQgBAJABAKIACAOQACAMAEALQAFALAGAJIAAABIABABIAKANIAEAFQAIAKAHAMQAHANgBAQQABAJgFAHQgHAMgQgCIgYgDIgFgBIgiAAIgCABIgBAAQgIAAgIADIgCABIgDABIgDABIgCABIgIACIgBABIgfAKIgIADIgNAEIgVAKIgPAHQgDACgGAAIgTABIgPAAgAkEMGIACABIANAAIAEgBIABAAIAGgBIADgBIABAAIAJgBIgJABIgBAAIgDABIgGABIgBAAIgEABIgNAAIgCgBIgEgBIgBAAIgCgBIAAAAIgBAAIgBAAIAAAAIgBABIgBAAIgBAAIgBABIABgBIABAAIABAAIABgBIAAAAIABAAIABAAIAAAAIACABIABAAIAEABgAA6HPIACATIACAGIAEAJIACAIQAHgBAFgIQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQADgDAAgFIAAgBQAAgJgCgGIABgDIAAgDQAAgEACgEIAGgHIgGAHQgCAEAAAEIAAADIgBADQACAGAAAJIAAABQAAAFgDADQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgFAIgHABIgCgIIgEgJIgCgGIgCgTIAAgBIAAAAIAAgGIAAAGIAAAAIAAABgAAsH1IADAAIABgBQAGgDACgHIADgLIABADIgBgDIgDALQgCAHgGADIgBABIgDAAIAAAAIAAAAIgEgBIgBAAQgIgGAAgKIAAgBIAAgDIABgEIgBgDIAAgSQAAgIADgDQgDADAAAIIAAASIgBgDIAAAAIgCAJQgDALgMAEQAAABAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgIAAgFgHIgBgCIgBgQIgDAKIgCAEIgBAAIAAAAIAAAAIAAgHIABgKQACgDABgDQAAgLAGgIQgGAIAAALQgBADgCADIgBAKIAAAHIAAAAIAAAAIgLgBIABABIABABIAAABIABAAIAAAAIADABQADgBACgCIABAAIACgEIADgKIABAQIABACQAFAHAIAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAgBQAMgEADgLIACgJIAAAAIABADIABADIgBAEIAAADIAAABQAAAKAIAGIABAAIAEABIAAAAIAAAAgAiPHHIADAIIgDgIIgMgYIAMAYgAClEsIgBAAIAAABIABgBIADgBQADACADgBIABgBIAZgEIADAAIAAAAQALgCALAAIABAAIAAAAIAFAAIAGAAIACAAIAAAAIAAAAIACAAIACAAIAAAAQAIABAEAFQgEgFgIgBIAAAAIgCAAIgCAAIAAAAIAAAAIgCAAIgGAAIgFAAIAAAAIgBAAQgLAAgLACIAAAAIgDAAIgZAEIgDAAIgEAAIgBAAIgCABgAEEEiIAJAAIgJAAIgIAAIgHgCQgPgEgKgNIgDgEQgPgWgJgaIgCgIQgCgPAAgQQAAgOAFgNIAEgJQAEgKAGgKIAEgGQAIgLAKgHQAHgHAIgDQADgBAAgDIgBgDIgBgEQgFgKgIgKQAIAKAFAKIABAEIABADQAAADgDABQgIADgHAHQgKAHgIALIgEAGQgGAKgEAKIgEAJQgFANAAAOQAAAQACAPIACAIQAJAaAPAWIADAEQAKANAPAEIAHACIAIAAIAAAAgABoECIgBADIAAACIgBAHIABgHIAAgCIABgDIABgSIgBgMIgDgLQgCgEgEgEQgEgFgBgGQABAGAEAFQAEAEACAEIADALIABAMIgBASgACECwIASABQANABALADQgLgDgNgBIgSgBIAAAAIgBAAIAAAAQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAABIABAAIgBAAQAAgBAAgBQAAAAABAAQAAgBABAAQABAAABAAIAAAAIABAAIAAAAIAAAAgAFYCRQADgKAAgKIgBgJQgCgOgIgOQAIAOACAOIABAJQAAAKgDAKgAicAYQgOAHgKALQAKgLAOgHQARgIAPgGQgPAGgRAIgAA5hYQAFAIABAKIAAAFIgBAFIgEANQADAFAEAEQADAEAFACIAGACIACAAQAEAAAEgCQAIgCADgIQAGgSAMgQQAFgGACgGQgFAFgKAAQgZABgTgMIgJAGIgEgGIAEAGgABih1IgDgBQgGgCgGAAIAAAAIAAAAIgFAAIgBAAIABAAIAFAAIAAAAIAAAAQAGAAAGACIADABgACGivQgHAEgEAIIgDAHQgCAJADAFQADAFAIACIADAAIACAAIACgBIAAAAIAHgDIgHADQAEgCADgDIACACQALgKgDgJQgDgJgGgEQgGgEgGAAIgBAAgABDiVIABAAIACAAIACgBIABAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBIABgBIAEgFIADgFQACgIgCgIIgCgCIgEgBIgEgBIgCgDQgDgCgDAAIgDABIAAAAIgDABIgEAFIgCAFIgBACIAAABQgCAHABAIQABAEADACIADABIACABIAGAAgAAfHZIAAAAgACSiNIAAAAQABgBAAAAQAAAAAAABQABAAAAAAQAAABAAABIgCgCgACSiNIAAAAgAiwmnQgFgFgCgEIgBgBIgBgEIAAgBIgCgGIgBgBIAAgCIAAAAIgBgBIgBgFIAAgDIAAAAIgBgBIAAgBIAAgBIAAAAIgBgFIAAgBIgBgEIgEgiIAAgDIAAgBIAAgBIAAgBIABgGIAAgDIABAAIAAAAIABAAIACgBIAAAAIABAAIAAAAIABAAIABAAIABgBIAAAAIABAAIAAAAIABAAIAAAAIACgBIAAAAIAAAAIACAAIACgBIAAAAIABAAIAAAAIABAAIABgBIAAAAIACAAIAAAAIABAAIABgBIAAAAIABAAIABAAIAAAAIABgBIABAAIABgBIAAAAIABAAIAAgBIABgBIABAAIAAAAIABgBIAAAAIABgBIAAAAIABAAIAAAAIACABIABAAIABAAIADAAIABAAIAAAAIABAAIABAAIABAAIABAAIABAAIABAAIADAAIABAAIAAAAIABAAIAAAAIAAAFIgNAOQgBAIADAEIAAABIABAAIABABIAAAAQACADADABIAAAAIADABIAAAAIABAAIAAAAIABAAIABABIgBAFQgEAAgBADIAAAAQgCADACAGIABACIgJAGIgBAGIgBAEIgBAIIAAAHIAAACIAAAGIgBADIgBABIgDAFIgDABIgDABIgCAAQgCAAgDgCgAi6ocIgDgBIAAAAIgDAAIgBAAIgBAAIAAAAIAAAAIgBgBIAAgDIAAgBIAAgGIgCgHIgDgHIgBAAIAAgCIgCgGIABgCQAAgLgFgIQgHgMgKgMIgDgDQgKgLgGgNQgHgNgEgNIgKgkQgHgcgCgcQgBgcAFgcIACgIQAGgeATgXQAHgJALgCIAEgBIAbAAIAFAAQAGABAGAEIACABIAGADQAFADAEAFIABACIABABIAGAJIABACIABAEIAFAKIADALIAIASIAFAMIAGAMIAHATIAEASIABAHQABADgBAEIgCAYIgBAOQgDAOgIAPIgHAMQgKAVgHAWIgBAGIgBAEIgBAEIAAAAIgBACIAAABIAAAAQgBAUABAVIAGAHIgBAAIgDADIAAAAIgBABIgBABIAAAAIgFADIgMAIIgDAAIgCAAIgCAAIgBAAIgGABIgBAAIgCAAgAjetgQgRAZgDAeIAAAJQgCAdAGAcIACAKQAGAcALAaQAHASAPAKIAFAFQACADAEAAIADACIAFAAQAHAAAGgDQAFgEAEgGQAGgJACgJQAHgVADgVQAGgcgBgdIgBgGQgGgdgLgbIgQgiQgDgFgFgCQgEADgDgCIgHgEIgEgCIgFAAQgQAAgIAPg");
	this.shape_12.setTransform(213.5,42.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("AtOiMIAJg5QgHgGACgJQAAgIADgHQAGgSgDgXQAAgFABgFQAHgZAFgaQAIg1APg1QAJggAFghIAIgZIAKAAQgCAFACAEQAFAHAAAJIABAFIADAPIATA8QAcBYArBPQAIAQAPAUQALARAUAPQAGAAACAIQAPAMASAJQAiAQAaATIAHADIAIAEQAUALAXAQIAMAIQAsAhAjAiIAPAPQARARAVAPQAuAiA4APQAyANAyAKIAaAGIAUAEQAvAMAwAAIDFABIABAAQAKAAAJgDQAMgEAOAAQAtACAugCIATgBQBfgEBTglQAUgJASgOQBNg5BRgwQAjgUAZgYIAIgIIAcAYIgBAAIgTAAIATAAIAAAFQgEARgCARQgKBcABBeIABDAQAABUgDBTIAAALIpfAAIAAAAIgGgKQgDgYAAgWQgEgOgBgMQgCgjAAgkQAAgbACgcIAGhgQABgWALgIQgLAIgBAWIgGBgQgCAcAAAbQAAAkACAjQABAMAEAOQAAAWADAYIAAAKIw1AGgADfH+IAAAAg");
	this.shape_13.setTransform(-117.5,88.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene3, new cjs.Rectangle(-204,-110,458.4,251.7), null);


(lib.content_scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AguA5QgLgIAAgLQgBgFAEgEQAEgEAFAAQAIAAAEAIQAFALASAAQAOAAAOgGQAPgHAAgIQgBgLgIgEQgHgCgSgBQgQAAgMgFQgQgHAAgNQABgSARgOQASgOAVAAQAJAAANAEQAPAFAAAGQAAAFgDADQgDAEgGAAIgMgCIgNgBQgLAAgKAFQgKAGAAAGQAAADADACQADADAHAAIAVACQAUABALAKQANAJAAATQAAAXgaALQgUAJgYAAQgXAAgMgKg");
	this.shape.setTransform(169.8,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgrBDQgEgFAAgFIAAhbIAAgMQgBgIABgEQABgJAOgBQAHgCAQAAQAPAAAPAKQASANAAATQAAAKgDAHQgDAFgIAGQAJAEAHAIQAHAKAAAJQAAALgNALQgIAHgKAEQgTAHgfAAQgGAAgEgEgAgXAvQAPAAARgGQAPgEAAgFQAAgHgKgFQgHgFgHAAIgXgBgAgXguIAAATIAAASIAMABQAagDAAgRQAAgGgIgGQgHgHgJABIgOAAg");
	this.shape_1.setTransform(158.2,33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_2.setTransform(146.7,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAVgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIgkADIgBASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_3.setTransform(135.4,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgSA+QgLgZgNgvIgHgYQgFgQAAgHQAAgFADgDQAEgEAFAAQAIAAAEAJIADAPIAJAcIANAsIAUg0IAHgVQAFgMAGgHQAEgFAGAAQAFAAAEAEQADADAAAFQAAADgCAEQgFAHgEAJIgGASIgYA8QgEAKgGALQgDAHgHAAQgJAAgDgJg");
	this.shape_4.setTransform(123.5,33.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAIADAAAIQAAAFgCAEQgEAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_5.setTransform(104.2,33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgmA2QgNgOAAgTQAAgdAZgeQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABAQQAAAFgCADQgDAGgHAAQgIAAgDgJQgCgEgCgBQgBgBgGAAQgLAAgNASQgVAXAAAVQAAAJAHAHQAGAIAJAAQAIAAAJgGIANgIQAHgEADAAQAGAAADADQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_6.setTransform(92.8,33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag9BEQgDgEAAgFIAAgKIAAgLIABgQIAAgPIAAgQIAAgRIgBgPIgBgQQAAgFAEgEQAFgFAFAAQAHAAAIAMQAnA5AnAjIAAgOIgBg5IgBgKIgBgJQAAgNANAAQAOAAAAAtIAAAOIgBA2IgBAOQgCALgLAAQgGAAgIgHQgigegpg2IAAAbIAAAVIAAAVQAAAagNAAQgGAAgEgEg");
	this.shape_7.setTransform(79.8,33.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQAAAFgEAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_8.setTransform(67.1,33.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkQACAVAAAOIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_9.setTransform(55.1,33.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgvA5QgLgIABgLQgBgFAEgEQAEgEAFAAQAIAAAEAIQAFALARAAQAPAAAOgGQAPgHAAgIQAAgLgJgEQgHgCgTgBQgPAAgMgFQgQgHAAgNQABgSARgOQATgOAUAAQAJAAAMAEQAQAFAAAGQAAAFgDADQgEAEgFAAIgMgCIgNgBQgMAAgJAFQgKAGAAAGQAAADADACQAEADAGAAIAVACQAUABALAKQANAJAAATQAAAXgaALQgUAJgYAAQgXAAgNgKg");
	this.shape_10.setTransform(42.6,33.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgpBAQgEgEABgEQAAgFADgEQAEgDAFAAIARgCIAAgnQABgXABgWIgTAAQgGAAgDgDQgEgDABgFQgBgGAEgDQADgDAEAAIAbgBQAQAAAaAEQALABAAALQgBAFgEAEQgDACgEAAIgYgCIAAAqIgBAnIAYAAQAFAAAEAEQADADABAFQgBAFgDADQgEAEgFAAIgPAAIgQAAIgQACIgSABQgGAAgDgDg");
	this.shape_11.setTransform(31.4,33.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAaAzIgMgSIgLgPIgaAeIgRASQgEADgFAAQgFAAgEgDQgDgEAAgFQAAgEADgDIAQgRIAfgiIgTgWIgKgOQgGgHgFgEQgFgEAAgFQAAgFAEgEQADgEAFAAQAFAAAIAHIAJAKIALAOIAPAUIAWgdQASgWAGAAQAFAAAEAEQADAEAAAFQAAAEgDADIgSAWIgVAcIASAZIAUAaQADADAAAFQAAAEgEAEQgDADgFAAQgJAAgOgTg");
	this.shape_12.setTransform(19.8,33.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAVgCQAFAAADAEQAEADAAAFQABAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_13.setTransform(8.1,33.2);

	this.instance = new lib.Scene3();
	this.instance.parent = this;
	this.instance.setTransform(204.2,180.2);

	this.instance_1 = new lib.scene3bottom();
	this.instance_1.parent = this;
	this.instance_1.setTransform(220.3,340.7,0.77,0.77);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAHIAAAAIgBgBQAAgFADgBIABgBIgBAAIgBgBIAAgBIAHgDIAAAAIABAAIABAAIAAABQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIAAABQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABABIAAAAIAAABIAEADIAAABIgBABIAAAAIgBAAIgBAAIgBgBIgEgDIgDAAIgDAAIgBACQgCABgBADIgCAAg");
	this.shape_14.setTransform(297.1,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.instance_1},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.content_scene5, new cjs.Rectangle(0.1,18,457.9,341.4), null);


// stage content:
(lib.pred_Scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene5:0,scene5_repeat:121});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_2 = function() {
		playSound("beamisare");
	}
	this.frame_19 = function() {
		playSound("pop_up");
	}
	this.frame_32 = function() {
		playSound("heistheyarebutiamnot");
	}
	this.frame_139 = function() {
		/* gotoAndPlay("scene5_repeat");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(17).call(this.frame_19).wait(13).call(this.frame_32).wait(107).call(this.frame_139).wait(1));

	// content
	this.instance = new lib.content_scene5();
	this.instance.parent = this;
	this.instance.setTransform(232.6,197.4,1.096,1.096,0,0,0,191,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140));

	// Layer 1
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,190.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '0FBE8AB6ACE0464485E924BE5E3B5F12',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/beamisare.mp3", id:"beamisare"},
		{src:"sounds/Cowbell.mp3", id:"Cowbell"},
		{src:"sounds/bgmAux.mp3", id:"bgmAux"},
		{src:"sounds/heistheyarebutiamnot.mp3", id:"heistheyarebutiamnot"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/needtoreview.mp3", id:"needtoreview"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/pop_up.mp3", id:"pop_up"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/predicateverbsdefinition.mp3", id:"predicateverbsdefinition"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"},
		{src:"sounds/trumpet_lick.mp3", id:"trumpet_lick"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"}
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
an.compositions['0FBE8AB6ACE0464485E924BE5E3B5F12'] = {
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