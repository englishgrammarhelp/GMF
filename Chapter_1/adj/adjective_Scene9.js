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


(lib.twogirls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJBzQgFgHAAgGQgBgGAFgDQAEgEAFAAQAFAAAGAHQAGAIgBAFQAAAGgDAEQgFADgFAAQgFAAgGgHgAgKA2IAAgSIgBgSIABg/IAAg/QAAgNANAAQANAAgBANIAACiQABANgNAAQgNAAAAgNg");
	this.shape.setTransform(187.2,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoBSQgXgJAAgOQAAgGAFgFQAEgEAGAAQAFAAAHAHQAEADAMADIAQABQAMAAAJgCQAOgFAAgJQAAgUgcgHIgOgDQgUgFgIgFQgMgHAAgRQAAgfAdgNQAJgEASgFIAcgJQAGgDAHAAQAGAAAEAEQAEAEAAAHIACAMIACANQAAAGgEAEQgEAEgHAAQgIAAgDgFQgCgEgCgMIghAKQgXAKAAAOIAIACQAhAGARALQAXAOAAAdQAAAYgUAMQgRAKgaAAQgTAAgRgGg");
	this.shape_1.setTransform(176.3,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQBqIACg1IABg1IABg0IABg1QAAgPANAAQAPAAAAAPIgBA1IgBA0IgCBIIgBAiQgCAPgLAAQgPAAAAgPg");
	this.shape_2.setTransform(165.3,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag4BDIAAhmIAAgOIAAgPQAAgOAOAAQAOAAAAAYQAcgbAhAAQAMAAAGAJQAGAJAAASIAAAKQgBASgOAAQgMAAAAgOIgBgKIAAgNQgXADgNAKQgOAKgIATIAABPQAAAPgOAAQgNAAAAgPg");
	this.shape_3.setTransform(154.5,27.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNBqQgFgEAAgGIAAgbIgBgaIACgjIABghQAAgGAFgFQADgDAHAAQAFAAAEADQAEAFAAAGIgBAhIgCAjIABAaIAAAbQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgJhQQgFgFAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_4.setTransform(142.9,24.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgyByQgTgEAAgMQAAgNANAAQAFAAANADQAMADAPgBQAbAAALgbQAHgSAAglQgIAPgLAHQgLAHgNAAQgaAAgRgSQgQgSAAgcQAAgnAWgYQAYgZAnAAQAOAAAJADQAJAEAFAHQAQAAAAARQAAALgDARIgEAcIgEAwQgBAdgFATQgGAXgPAMQgRANghAAQgTAAgNgCgAgahJQgOASAAAaQAAAWAIAJQAIALAQAAQAOAAAOgQQAMgPACgPQADgQAEgiQgGgEgGgDQgHgCgGAAQgbAAgPATg");
	this.shape_5.setTransform(130.3,31.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwA+QgVgVgBgiQgBgfATgZQAWgeAnAAQAdAAARAXQAQAVAAAgQAAAhgSAYQgVAaghAAQgbAAgUgSgAgVgYQgIAOAAARQAAASAKAJQAHAIALAAQAMAAAJgJQALgKABgRQABgugaAAIgBAAQgRAAgKAQg");
	this.shape_6.setTransform(105.4,27.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAFAvQgEgOgEgkIgEAIIgWA4QgDAGgEAEQgGAKgMAAQgHABgIgNQgIgNgFgUQgEgSgKg8IgCgUQAAgJAGgFQAGgFAJAAQAPAAAEAPQACAJABAMIADAUIAFAkQALgcAOgtQAGgTAQAAQAQAAAFAWIAIAmIAHApIAXhYQAEgNAPAAQAIAAAGAFQAHAGAAAIIgBAEQgPA6gQAtQgEAOgKAOQgHAJgMAAQgSAAgLgjg");
	this.shape_7.setTransform(87.6,28);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNBmQgFgFAAgJIAAgPIAAgQIgChLIgcgCQgSgCgBgRQAAgIAGgGQAGgGAJAAIAYACIAAgQIgBgOQAAgIAGgGQAGgFAJAAQAUAAAAAlIAAALIAPgBQAQAAAHACQAMAFgBANQABAIgGAGQgGAGgJgBIgHAAIgHAAIgOABIACBMIAAAIIABAIQAAAigWAAQgHAAgGgFg");
	this.shape_8.setTransform(70.2,25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990066").s().p("AgwA+QgVgVgBgiQgBgfATgZQAWgeAnAAQAdAAARAXQAQAVAAAgQAAAhgSAYQgVAaghAAQgbAAgUgSgAgVgYQgIAOAAARQAAASAKAJQAHAIALAAQAMAAAJgJQALgKABgRQABgugaAAIgBAAQgRAAgKAQg");
	this.shape_9.setTransform(105.4,27.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990066").s().p("AAFAvQgEgOgEgkIgEAIIgWA4QgDAGgEAEQgGAKgMAAQgHABgIgNQgIgNgFgUQgEgSgKg8IgCgUQAAgJAGgFQAGgFAJAAQAPAAAEAPQACAJABAMIADAUIAFAkQALgcAOgtQAGgTAQAAQAQAAAFAWIAIAmIAHApIAXhYQAEgNAPAAQAIAAAGAFQAHAGAAAIIgBAEQgPA6gQAtQgEAOgKAOQgHAJgMAAQgSAAgLgjg");
	this.shape_10.setTransform(87.6,28);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990066").s().p("AgNBmQgFgFAAgJIAAgPIAAgQIgChLIgcgCQgSgCgBgRQAAgIAGgGQAGgGAJAAIAYACIAAgQIgBgOQAAgIAGgGQAGgFAJAAQAUAAAAAlIAAALIAPgBQAQAAAHACQAMAFgBANQABAIgGAGQgGAGgJgBIgHAAIgHAAIgOABIACBMIAAAIIABAIQAAAigWAAQgHAAgGgFg");
	this.shape_11.setTransform(70.2,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.1,0,132.2,45.8);


(lib.threegirls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBzQgGgHgBgGQAAgGAFgDQAEgEAGAAQAEAAAGAHQAFAIABAFQAAAGgFAEQgEADgFAAQgFAAgFgHgAgJA2IgBgSIAAgSIAAg/IABg/QgBgNAMAAQANAAABANIAACiQgBANgNAAQgMAAABgNg");
	this.shape.setTransform(158,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoBSQgXgJAAgOQAAgGAFgFQAEgEAGAAQAFAAAHAHQAEADAMADIAQABQAMAAAJgCQAOgFAAgJQAAgUgcgHIgOgDQgUgFgIgFQgMgHAAgRQAAgfAdgNQAJgEASgFIAcgJQAGgDAHAAQAGAAAEAEQAEAEAAAHIACAMIACANQAAAGgEAEQgEAEgHAAQgIAAgDgFQgCgEgCgMIghAKQgXAKAAAOIAIACQAhAGARALQAXAOAAAdQAAAYgUAMQgRAKgaAAQgTAAgRgGg");
	this.shape_1.setTransform(147.1,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQBqIACg1IABg1IABg0IABg1QAAgPANAAQAPAAAAAPIgBA1IgBA0IgCBIIgBAiQgCAPgLAAQgPAAAAgPg");
	this.shape_2.setTransform(136.1,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag4BDIAAhmIABgOIAAgPQgBgOANAAQAPAAAAAYQAcgbAiAAQAMAAAFAJQAGAJAAASIAAAKQgBASgOAAQgNAAAAgOIAAgKIgBgNQgWADgOAKQgNAKgIATIABBPQAAAPgPAAQgNAAAAgPg");
	this.shape_3.setTransform(125.3,27.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNBqQgFgEAAgGIAAgbIgBgaIACgjIABghQAAgGAFgFQADgDAHAAQAFAAAEADQAEAFAAAGIgBAhIgCAjIABAaIAAAbQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgJhQQgFgFAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_4.setTransform(113.7,24.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgyByQgTgEAAgMQAAgNANAAQAFAAANADQAMADAPgBQAbAAALgbQAHgSAAglQgIAPgLAHQgLAHgNAAQgaAAgRgSQgQgSAAgcQAAgnAWgYQAYgZAnAAQAOAAAJADQAJAEAFAHQAQAAAAARQAAALgDARIgEAcIgEAwQgBAdgFATQgGAXgPAMQgRANghAAQgTAAgNgCgAgahJQgOASAAAaQAAAWAIAJQAIALAQAAQAOAAAOgQQAMgPACgPQADgQAEgiQgGgEgGgDQgHgCgGAAQgbAAgPATg");
	this.shape_5.setTransform(101.1,31.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAuBPQgOgQghgtIgcAeIgZAYQgFAFgGAAQgFAAgEgEQgFgEAAgGQAAgFAEgEQAEgGAJgHIANgNIAfgfIgTgcQgMgRgIgHQgGgFAAgGQAAgGAEgFQAFgEAFAAQAJAAARAWIAYAkIAdgbQASgRAGgJQAFgHAGAAQAGAAAEAEQAFAEAAAGQAAAIgOAOIgVAUIgaAaIAwA9QADAFAAAFQAAAFgEAFQgFAEgFAAQgGAAgEgFg");
	this.shape_6.setTransform(75.5,27.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNBqQgFgEAAgGIAAgbIgBgaIACgjIABghQAAgGAFgFQADgDAHAAQAFAAAEADQAEAFAAAGIgBAhIgCAjIABAaIAAAbQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgJhQQgFgFAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_7.setTransform(62.8,24.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoBSQgXgJAAgOQAAgGAFgFQAEgEAGAAQAFAAAHAHQAEADAMADIAQABQAMAAAJgCQAOgFAAgJQAAgUgcgHIgOgDQgUgFgIgFQgMgHAAgRQAAgfAdgNQAJgEASgFIAcgJQAGgDAHAAQAGAAAEAEQAEAEAAAHIACAMIACANQAAAGgEAEQgEAEgHAAQgIAAgDgFQgCgEgCgMIghAKQgXAKAAAOIAIACQAhAGARALQAXAOAAAdQAAAYgUAMQgRAKgaAAQgTAAgRgGg");
	this.shape_8.setTransform(50.6,27.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990066").s().p("AApBNQgNgOgdgmIglAjIgMALQgHAHgIAAQgIAAgGgGQgGgGAAgHQAAgJAMgLIAUgQIAcgbIgRgXQgKgNgJgIQgIgGAAgIQAAgHAGgGQAGgGAIAAQAKAAATAVIAWAeIAZgVQAQgOAGgJQAHgJAJAAQAIAAAHAFQAGAGAAAIQAAAJgQAPIgVATIgWAVIAsA1QAFAGAAAGQAAAIgGAFQgGAGgIAAQgIAAgHgHg");
	this.shape_9.setTransform(75.5,27.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990066").s().p("AgSBqQgFgFgBgIIAAgbIgBgbIACghIABgfQAAgJAGgGQAGgFAJAAQAHAAAGAFQAFAGABAJIgBAfIgCAhIABAbIAAAbQAAAIgGAFQgFAGgJAAQgIAAgGgGgAgNhKQgHgGAAgKQAAgIAHgGQAHgHAIAAQAJAAAIAHQAGAGABAIQgBAKgGAGQgIAGgJABQgIgBgHgGg");
	this.shape_10.setTransform(62.9,24.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990066").s().p("AgpBNQgWgJAAgQQAAgOASAAQAHAAAMAEQANAEAHAAQAdAAAAgMQAAgHgVgJQgdgOgJgFQgUgOAAgVQAAgdAfgLQASgGAlAAQAOAAAHAEQAKAFAAAOQAAAbgOAAQgPAAgDgNIgMgBQgiAAAAAKQAAAGAUAJQAdAOALAHQAVAPAAATQAAAZgYANQgTALgaAAQgUAAgQgGg");
	this.shape_11.setTransform(50.8,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.7,0,122.4,45.8);


(lib.onegirl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBzQgHgHABgGQAAgGAEgDQAEgEAFAAQAFAAAGAHQAGAIgBAFQAAAGgDAEQgEADgGAAQgFAAgFgHgAgKA2IAAgSIgBgSIABg/IAAg/QAAgNANAAQAMAAAAANIAACiQAAANgMAAQgNAAAAgNg");
	this.shape.setTransform(178.8,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQBqIACg1IABg1IABg0IABg1QAAgPANAAQAPAAAAAPIgBA1IgBA0IgCBIIgBAiQgCAPgLAAQgPAAAAgPg");
	this.shape_1.setTransform(171.5,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag4BDIAAhmIABgOIAAgPQAAgOAMAAQAPAAAAAYQAcgbAiAAQAMAAAFAJQAGAJAAASIAAAKQgBASgOAAQgNAAAAgOIAAgKIgBgNQgXADgNAKQgMAKgJATIABBPQAAAPgPAAQgNAAAAgPg");
	this.shape_2.setTransform(160.6,27.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNBqQgFgEAAgGIAAgbIgBgaIACgjIABghQAAgGAFgFQADgDAHAAQAFAAAEADQAEAFAAAGIgBAhIgCAjIABAaIAAAbQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgJhQQgFgFAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_3.setTransform(149,24.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyByQgTgEAAgMQAAgNANAAQAFAAANADQAMADAPgBQAbAAALgbQAHgSAAglQgIAPgLAHQgLAHgNAAQgaAAgRgSQgQgSAAgcQAAgnAWgYQAYgZAnAAQAOAAAJADQAJAEAFAHQAQAAAAARQAAALgDARIgEAcIgEAwQgBAdgFATQgGAXgPAMQgRANghAAQgTAAgNgCgAgahJQgOASAAAaQAAAWAIAJQAIALAQAAQAOAAAOgQQAMgPACgPQADgQAEgiQgGgEgGgDQgHgCgGAAQgbAAgPATg");
	this.shape_4.setTransform(136.4,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgxA/QgZgSAAgiQAAgkAUgZQAVgdAkAAQAaAAAQAIQAXALAAAXQAAAQgSANQgJAFgYAKIgxAWQAHAIAKAEQAKADAMAAQAUAAANgIQAMgHAIAAQAPAAAAAPQAAARgYAKQgVAJgXAAQgiAAgWgRgAgTgiQgKAJgGASIAhgOQATgJAMgIQgKgFgQAAQgNAAgJAJg");
	this.shape_5.setTransform(111.1,27.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAeBDIgEgeQgCgQAAgOIAAgMIABgNIAAgFIAAgHQAAgMgFAAQgNAAgLAQQgMAQgHAYIgBANIgBANIgBANIgBAMQAAAJgGAGQgGAFgIAAQgJAAgGgFQgGgGAAgIIAAgNIgBgNIACgoIACgmIgBgOIAAgNQAAgIAGgGQAGgFAIAAQATAAACAXIAAABQAVgVAXAAQAcAAAKAXQAHAQAAAeIAAALIAAAIQAAAMADASQADASAAALQAAAIgFAGQgGAFgJAAQgSAAgCgSg");
	this.shape_6.setTransform(95.2,27.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwA+QgVgVgBgiQgBgfATgZQAWgeAnAAQAdAAARAXQAQAVAAAgQAAAhgSAYQgVAaghAAQgbAAgUgSgAgVgYQgIAOAAARQAAASAKAJQAHAIALAAQAMAAAJgJQALgKABgRQABgugaAAIgBAAQgRAAgKAQg");
	this.shape_7.setTransform(79.1,27.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990066").s().p("AgxA/QgZgSAAgiQAAgkAUgZQAVgdAkAAQAaAAAQAIQAXALAAAXQAAAQgSANQgJAFgYAKIgxAWQAHAIAKAEQAKADAMAAQAUAAANgIQAMgHAIAAQAPAAAAAPQAAARgYAKQgVAJgXAAQgiAAgWgRgAgTgiQgKAJgGASIAhgOQATgJAMgIQgKgFgQAAQgNAAgJAJg");
	this.shape_8.setTransform(111.1,27.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990066").s().p("AAeBDIgEgeQgCgQAAgOIAAgMIABgNIAAgFIAAgHQAAgMgFAAQgNAAgLAQQgMAQgHAYIgBANIgBANIgBANIgBAMQAAAJgGAGQgGAFgIAAQgJAAgGgFQgGgGAAgIIAAgNIgBgNIACgoIACgmIgBgOIAAgNQAAgIAGgGQAGgFAIAAQATAAACAXIAAABQAVgVAXAAQAcAAAKAXQAHAQAAAeIAAALIAAAIQAAAMADASQADASAAALQAAAIgFAGQgGAFgJAAQgSAAgCgSg");
	this.shape_9.setTransform(95.2,27.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990066").s().p("AgwA+QgVgVgBgiQgBgfATgZQAWgeAnAAQAdAAARAXQAQAVAAAgQAAAhgSAYQgVAaghAAQgbAAgUgSgAgVgYQgIAOAAARQAAASAKAJQAHAIALAAQAMAAAJgJQALgKABgRQABgugaAAIgBAAQgRAAgKAQg");
	this.shape_10.setTransform(79.1,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.4,0,115.4,45.8);


(lib.AnAdjAnswersHOWMANY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtB/QgGgFAAgHQAAgLAGgIQAGgKAJABQARgBAAAVQAAAJgEAIQgGAIgJABQgHgBgGgFgAgiA+QgFgGgBgGQABgMAVgSIAogdQAWgTAAgQQAAgTgSgRQgTgQgTgBQgKABgRAKQgRAMgEAAQgGAAgFgGQgGgGAAgHQAAgNAagNQAYgMAPgBQAiABAbAaQAcAbAAAiQAAAZgPATQgKALgaASQgaAUgJAMQgHAGgGAAQgHABgFgGg");
	this.shape.setTransform(219,58.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkCDQgGgFAAgHQAAgGAQgeIAVgnQgegogJgWQgIgTgSgbIgdgtQgCgEAAgFQAAgHAFgFQAFgFAHAAQAJAAAFAIIAOAWQASAaAGAKQANAVAHASQAGAOARAXIAnhdIATglQAEgMALAAQAHAAAGAFQAFAFAAAHQAAAIgJAQQgEAHgHANIgdBJQgRAogPAeIgVAmIgJATQgFAKgKAAQgHAAgFgFg");
	this.shape_1.setTransform(198.8,58.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhyCFQgFgFAAgHIABgWIABgWIABgfIAAggIAAghIgBgiIgCggIgCggQAAgIAHgHQAHgGAIAAQAJAAAOAUQAqA/AiAqQAoAyAwAtIAAgWIAAgVQAAhKgGgtIgFgRQgDgMAAgHQAAgTASAAQAeAAAABvIgBA3IAAA5QAAAIgDATQgDARgPAAQgKAAgNgMQhFhChZh7IgBAnIgBAmIABArIAAAqQAAAugRAAQgKAAgFgGg");
	this.shape_2.setTransform(174.5,57.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA8BZQgFgQgHgmQgRACgcAGIgtAKQgIAWgVArQgFAKgKAAQgHAAgFgFQgFgFAAgIQAAgIAZg2QgCgEAAgGQAAgOAQgEQAUgkAegvQAnhBAKAAQANAAAFATIALA5IAaB2IAJAbQAFAOAAAFQAAAHgFAFQgFAFgHAAQgQAAgLgogAgVAMQAUgFApgHIgNhBg");
	this.shape_3.setTransform(147.3,58.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABpCBQgFgJgEgSIgGgeQgIgcgPhcIgiBnIgKAfQgGAUgGANQgIANgLgBQgKABgGgLQgEgIgDgLIgEgTQgSg8gNhEIgGAfIgXBZQgBAPgHAgQgFANgMAAQgIAAgFgGQgFgFAAgIQAAgcANgpIAShFIAKg2QAHglAJgLQAHgLAKAAQALAAAFANQAHAPAIAvQAJA4ATBBQAYhBAThIIAFgYQADgQAFgIQAHgNALAAQAPAAAIAcQACAKAFAfQAJBMAPA2IAJAeQAGAYAAAFQAAAHgFAFQgGAFgHAAQgJAAgGgJg");
	this.shape_4.setTransform(119.5,58.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAnCGQgIgFABgHQgJgVgBgNIgOhKQgIgtgDgcQgPA5gRAmQgVAtgGAaQADAEAAAEQAAAHgHAFQgHAFgHAAQgXAAAAgVIgGgWIgShTQgLgqgbhPIgBgHQAAgQASAAQALAAAGANQADAGAJAdQALAfAJArIARBLQATgqARg8QAMglAFgPQAPglAOAAQAMAAAFAMQAGAOAHA4QADAcAIAmIAPBDQAXg3AihdIAJggQAEgUAIgLQAGgJAKAAQARAAAAARQAAADgGAOIgGASIgJAfIgzB6QgIAUgRAnQgFAMgNAAQgIAAgFgFg");
	this.shape_5.setTransform(76,58.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhWBqQgjgfAAgxQAAg6AjgwQAng2A5AAQA4AAAcAaQAcAaAAA5QAAA6ggAvQglA3g5AAQgwAAgigdgAg8g5QgbAmAAAtQAAAhAZAVQAXAUAjAAQAoAAAbgqQAYgmAAgtQAAgpgSgRQgRgQgqAAQgpAAgdAqg");
	this.shape_6.setTransform(43.1,58);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIgBgbIgBgdIACgoIACgpQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHIgCApIgCApIABAqIBJgNQArgIAeAAQACgZAAgxQAAgNAEgNQAGgTAKAAQAHAAAFAFQAFAFAAAHIgBAHQgDAHAAAOIAAAPIABAPQAAARgDAiQgDAhAAARIACAnIABAnQAAAHgEAFQgFAFgHAAQgHAAgFgFQgEgFAAgHIgCgnIgCgnIABgZQgdAAgrAJIhHAOQAAAPgDAcQgDAdAAAPQAAAHgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_7.setTransform(15.8,57.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbA2QgOgFAAgKQAAgEACgDQADgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIACAIIAAAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEAKAHQAQAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_8.setTransform(225.4,18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgIAHQgJAHgGAMIAAA1QABAKgKAAQgJAAAAgKg");
	this.shape_9.setTransform(216.3,19.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_10.setTransform(205.9,19.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgEAFQgDAGgGAAQgIAAgGgdQgEgPgDgZIgDgPIgBgOQAAgFADgCQADgDAEAAQAHAAACAIIACAOIABAPIAGArQALgdALgoQAEgLAHAAQAHAAAEANIAFAjIAIAlIAHgaIAMg1QACgGAHAAQAEAAADADQADADAAAEIgBAEQgIAggMAnQgCAJgHAKQgEAFgFAAQgLgBgGgag");
	this.shape_11.setTransform(193.4,19.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbA2QgPgFABgKQAAgEACgDQAEgDAEAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQAAgNgTgFIgJgCQgNgDgFgEQgIgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgWAHQgQAGABAKIAFABQAWAEAKAHQAQAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_12.setTransform(181.4,18.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQgBgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAGAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgEAAQgIAAgBgJg");
	this.shape_13.setTransform(171.8,19.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXARgQQAPgRAWAAQAIAAALAEQAOAGAAAHQAAADgDACIgBAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAGAIALAAQAIAAAHgDIAJgIQgDgZAAgNIABgJIABgKIgFgDIgFgBQgOAAgLAMg");
	this.shape_14.setTransform(161.3,19.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990066").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBADgEIACgpIgBgKIgBgLQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACACAAAFQABAIgKACIgXACIgsADIAAAOIgBALQAAAVAEAFQACACANAAIARAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgJABQgJACgdAAQgeAAgJgIg");
	this.shape_15.setTransform(144.2,16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990066").s().p("AgRBHQgMgegOg3IgIgaQgGgVAAgGQAAgEAEgDQACgCAEgBQAIABACAHIAEARIAJAiQAJAjAJAbIABgDIAZhFIAIgYQAGgOAGgIQADgEAFAAQAEAAADADQADADAAAEQAAADgCADQgGAJgEAKIgHAVIgbBGQgEANgHAMQgCAGgFAAQgIAAgDgIg");
	this.shape_16.setTransform(131.7,17);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990066").s().p("AgqBIQgDgDAAgEQAAgEADgDQACgDAEAAIAWgCIABgSIgBgRIAAgQQAAgWACgiIgMABIgOAAQgDAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAFQAIABAAAJQAAAFgEACQgCADgEAAIgQgCIgQgCQgBAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgPAAIgTACIgUACQgEAAgCgDg");
	this.shape_17.setTransform(119.2,16.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990066").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgoIgIAAQgWAAgMgCQgIgDAAgHQAAgEADgEQADgCAEAAIAQABIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAHgGgBQgDAAgDgCg");
	this.shape_18.setTransform(107.7,16.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990066").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgdAXAAIAJAAIAGACQAEgGAFAAQAHAAACAJQABAIAAALQAAAFgCACQgDAEgEABQgHAAgDgIQgDgGgCgBQgCgBgIAAQgOgBgQAWQgYAdAAAZQAAANAIAJQAIAKAMAAQAJgBAKgFQAGgDAMgIQAFgEADgBQAEABADADQADADAAAEQAAAEgEADQgZAXgaAAQgUAAgOgPg");
	this.shape_19.setTransform(94.3,16.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990066").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBADgEIACgpIgBgKIgBgLQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACACAAAFQABAIgKACIgXACIgsADIAAAOIgBALQAAAVAEAFQACACANAAIARAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgJABQgJACgdAAQgeAAgJgIg");
	this.shape_20.setTransform(82.1,16.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990066").s().p("AgnBEQgTgOAAgSQAAgMAKAAQAKAAAAAMQAAAIAMAIQALAIAKAAQAHAAADgxQABgXAAgjIAAgKIgGAAIgLAAIgLgBQgFAAgDgCQgCgDAAgFQAAgKANAAIAKAAIAJABIASgBIATgBQAWAAAAAMQAAAEgDADQgDADgEAAIgGgBIgGgBIgMABIABALQAABIgKAhQgGAWgPAAQgRAAgRgMg");
	this.shape_21.setTransform(68.9,17.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990066").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_22.setTransform(55.3,16.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990066").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_23.setTransform(40.3,17);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIABgJIAAgJQgBgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_24.setTransform(22.2,19.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_25.setTransform(9.3,17);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.298)").s().p("AgtB/QgGgFAAgHQAAgLAGgIQAGgKAJABQARgBAAAVQAAAJgEAIQgGAIgJABQgHgBgGgFgAgiA+QgFgGgBgGQABgMAVgSIAogdQAWgTAAgQQAAgTgSgRQgTgQgTgBQgKABgRAKQgRAMgEAAQgGAAgFgGQgGgGAAgHQAAgNAagNQAYgMAPgBQAiABAbAaQAcAbAAAiQAAAZgPATQgKALgaASQgaAUgJAMQgHAGgGAAQgHABgFgGg");
	this.shape_26.setTransform(219,58.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.298)").s().p("AgkCDQgGgFAAgHQAAgGAQgeIAVgnQgegogJgWQgIgTgSgbIgdgtQgCgEAAgFQAAgHAFgFQAFgFAHAAQAJAAAFAIIAOAWQASAaAGAKQANAVAHASQAGAOARAXIAnhdIATglQAEgMALAAQAHAAAGAFQAFAFAAAHQAAAIgJAQQgEAHgHANIgdBJQgRAogPAeIgVAmIgJATQgFAKgKAAQgHAAgFgFg");
	this.shape_27.setTransform(198.8,58.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.298)").s().p("AhyCFQgFgFAAgHIABgWIABgWIABgfIAAggIAAghIgBgiIgCggIgCggQAAgIAHgHQAHgGAIAAQAJAAAOAUQAqA/AiAqQAoAyAwAtIAAgWIAAgVQAAhKgGgtIgFgRQgDgMAAgHQAAgTASAAQAeAAAABvIgBA3IAAA5QAAAIgDATQgDARgPAAQgKAAgNgMQhFhChZh7IgBAnIgBAmIABArIAAAqQAAAugRAAQgKAAgFgGg");
	this.shape_28.setTransform(174.5,57.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.298)").s().p("AA8BZQgFgQgHgmQgRACgcAGIgtAKQgIAWgVArQgFAKgKAAQgHAAgFgFQgFgFAAgIQAAgIAZg2QgCgEAAgGQAAgOAQgEQAUgkAegvQAnhBAKAAQANAAAFATIALA5IAaB2IAJAbQAFAOAAAFQAAAHgFAFQgFAFgHAAQgQAAgLgogAgVAMQAUgFApgHIgNhBg");
	this.shape_29.setTransform(147.3,58.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.298)").s().p("ABpCBQgFgJgEgSIgGgeQgIgcgPhcIgiBnIgKAfQgGAUgGANQgIANgLgBQgKABgGgLQgEgIgDgLIgEgTQgSg8gNhEIgGAfIgXBZQgBAPgHAgQgFANgMAAQgIAAgFgGQgFgFAAgIQAAgcANgpIAShFIAKg2QAHglAJgLQAHgLAKAAQALAAAFANQAHAPAIAvQAJA4ATBBQAYhBAThIIAFgYQADgQAFgIQAHgNALAAQAPAAAIAcQACAKAFAfQAJBMAPA2IAJAeQAGAYAAAFQAAAHgFAFQgGAFgHAAQgJAAgGgJg");
	this.shape_30.setTransform(119.5,58.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.298)").s().p("AAnCGQgIgFABgHQgJgVgBgNIgOhKQgIgtgDgcQgPA5gRAmQgVAtgGAaQADAEAAAEQAAAHgHAFQgHAFgHAAQgXAAAAgVIgGgWIgShTQgLgqgbhPIgBgHQAAgQASAAQALAAAGANQADAGAJAdQALAfAJArIARBLQATgqARg8QAMglAFgPQAPglAOAAQAMAAAFAMQAGAOAHA4QADAcAIAmIAPBDQAXg3AihdIAJggQAEgUAIgLQAGgJAKAAQARAAAAARQAAADgGAOIgGASIgJAfIgzB6QgIAUgRAnQgFAMgNAAQgIAAgFgFg");
	this.shape_31.setTransform(76,58.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.298)").s().p("AhWBqQgjgfAAgxQAAg6AjgwQAng2A5AAQA4AAAcAaQAcAaAAA5QAAA6ggAvQglA3g5AAQgwAAgigdgAg8g5QgbAmAAAtQAAAhAZAVQAXAUAjAAQAoAAAbgqQAYgmAAgtQAAgpgSgRQgRgQgqAAQgpAAgdAqg");
	this.shape_32.setTransform(43.1,58);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.298)").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIgBgbIgBgdIACgoIACgpQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHIgCApIgCApIABAqIBJgNQArgIAeAAQACgZAAgxQAAgNAEgNQAGgTAKAAQAHAAAFAFQAFAFAAAHIgBAHQgDAHAAAOIAAAPIABAPQAAARgDAiQgDAhAAARIACAnIABAnQAAAHgEAFQgFAFgHAAQgHAAgFgFQgEgFAAgHIgCgnIgCgnIABgZQgdAAgrAJIhHAOQAAAPgDAcQgDAdAAAPQAAAHgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_33.setTransform(15.8,57.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},8).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.7,82.7);


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


(lib.howmanybubble2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALil6IAAAAQABgDABgDIABAAQAAAAAAgBQAAAAAAgBQAEgMAAgJQAAAAAAgBQAAgCAAgDQAAgXADgTQAAgGABgGQABgDABgEQAAAAAAAAQABgIADgFQAAgCACgDQADgHAFAAQAJAAAFAZQADANACAPQABAPAAASQAAAkgGAZQgCAJgCAFQAAABAAAAQgBADgBACQgEAGgEAAQAAAAAAAAQgDgBgDgDQgCgDgDgHQgCgFgBgHQgBgCAAgCQgBgGgBgGIgGAEQAAAAAAAAAAygtQAFgCAFgDQAGgDAEgFQADgDADgDQABgEADgDQAGgLAAgOQAAgWgQgQQgHgHgIgEIgQgEQgDAAgDAAQgWAAgPAPQgQAQAAAWQAAAWAQAQQAEAFAGAEAnDDqQAAAigZAXQgXAZgiAAQgiAAgYgZQgYgXAAgiQAAgiAYgYQAYgYAiAAQAiAAAXAYQAZAYAAAigAqCFBQAQAPAAAWQAAAWgQAQQgPAPgWAAQgWAAgPgPQgQgQAAgWQAAgWAQgPQAPgPAWAAQAWAAAPAPgAsGG6QAKgKAOAAQAPAAAJAKQAKAKAAAOQAAAPgKAKQgJAJgPAAQgOAAgKgJQgKgKAAgPQAAgOAKgKgADpiDQgFgPAAgTQAAgeANgWQANgWASAAQASAAAMAWQANAWAAAeQAAAfgNAVQgKATgOADQgDAAgDAAQgMAAgKgJQgFgFgEgIQgBgBgBgCQgCgDgBgEQgCgEgBgEg");
	this.shape.setTransform(-22.6,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiBJPQgLgZgcAKIggAMQgWAIgVAAIgJgEIgGACQgGABgHgDIAAgBIgDgFIAAgBIgEgFIgEgDIgIgNIACgBIgDgEQgBgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBAAIAAAAQgCAAgEACIAAAEIAAABQACAEAEAEQAHAJAJAHIAAACQgXgMgSgbQgWgfgoAMIgCABIgcAUIgDAAQgJgCgIgEIgCgCIgDgGQgIgUgCgWQAAgGgEgGQgHgBgFgDIgDgFQgKgUgPAAIgGABQgPgEgRAKQgLAGgJAJIgLgEIgJAAIgIAnQgDADgBAEIgBADQgGADgBAGIgBADIgFAFIgUAFIg5gDQgYgEgXgIQgMgQgPgNQgTgTgHgVQAQAAARgFIABgEQgRgIgUgEQAAgKADgLIAFgGIACgDIAAgBQgDAGgFAEIgBABIgIACIgngBQgJgGgGgJIAAgPIACgIIAOgQIAEgGQAAgMgCgLQgBgEgCgDQgegQgjgCQgDAAgCgCIgIgIIgHgHIAAgPIAAgIIAAgeIAAgHQASgTAXgNIAugcQAGgYghABIAAgCQAAgMgCgLQgBgNAFgLQAGgPAJgOIADgHQAkgWAuADQADAAACgDIABgEIgQgDIgBgFQgIgDgGgHIAAgOIAAgJIAPgXQADgDABgDIABgBQATgKAQgNQAXgCAUgGQAKADAJAHIABABIgFgQIAEgCIAAgCQgDgJgGgIIgBgcQgCgXAPgRIADgDQAIgLAAgMQAHgFAEgHIAGgCIAFgCIBKgRIAUAAIgBgCIADAAIgDgFIAAgBQACgFgDgEIgCgCIgEgCIgCABIgQgXQgUghAXgGIAAgBIABgFIABgBQACgIAIgGIABgBIADgBIADgCIABgBIAAAAIAMgBIAGAAIAlgCQARABAQADIABADIACACIALAFIAEABIAHAGIAFACIAFgCIACgCQACgQgPgMIgFgFIAAgCIAAgkIAAgJQAFgDADgFIABgCQAHgDADgGIABgDIAIgCIACgCIAFgHIACgCQAHgDADgHIABgDIAJgFIAFgDQBCgcAtA1IAGABIAEgCIACgBIABgDIAAgJIgBgDIgGgEIgCgBQgQgRACgYIACgeQAFgEADgGIABgCIAZgQIAKgFQAvgQAyAKQAHAKAKAJIACACIABADIABAEIABADIAEACIABACIABAFIAGAaIABADIAGABIAEgCIACgCIABgCIAAgMIAAgCIADgFQAFgKgBgLIAAgDIABgCIACgFIABgCQAJgPAMgOQADgDAAgEQAqgiA3AHIAOATIABADIAGACQAGAMAJAJIABADIACAEQAEANAGALIABADIAKAAIABgBIACgFIABgfIAAgFIACgFIABgCQAIgCAGgHIACgDQAigPAlADQAKAGAFAKIABADIAGACQAKAPAHAPIADAIIAAACIAAADIAAACIACADIACACIgBACQAAAFACAFIABACIAJAAIACgBQANgNAEgRIAAgFQAJgJAGgKIACgDIAFgCIACgBIAEgHIACgCIAKgFQASgIATAFIADACIADADQAIAUAAAWQAAAVAHAUIAGABIAEgCIACgCQACgIAEgHQAdgvAvgeIBQABQAbAAADAaQAIATAFATQAFAQAHAPIAAAFIAAAKIAQAAIADgOIABgCIACgFQAEgOAHgLIASgbIBoAAQAMAHAHAMIAFAIQARASADAYQAKAIAIALIABACIAAAFIAAALIAAADIgGgBIABAEQADAMgDAIIAJABQATADAJATQAHAOgFAPQgGAWgVANIgBABIAAAGIAAAJIACAEIADADQAMAOAPAJIADADIABADIAAADIABADIAFAGIACADIAAADIAAADIAFAGIACADIABADQAHAcgBAdQgBALgGAJQgUAegcAaIgTAEIgGAFQgnAOgngEIgFAAIgBgBIgJACIgcABIgCADIAAADIgWAEIgHADQAAAGACAEQACAEADAAIAfgFIADABQAMgEAMAAIAAgDIACgDIABgCIACgBIAFAAIAAgBIAEAAIAGACIAFAIIAAABIADAFIAIACIACABIgKgJQAYADAXAGIACADIABADIACADIAAAJIAAAFQgBACgBADIAAAPIAFAIIABACIAAAIIAAAXIAFAFQAAAXgJAUQgsAJgmAOQABAdAngHQAIAXAWAKIAAAHQAHArgZAgQheAehYAFQAIAXAWAKIABAPQACAUgLARQg9AfhFgLIgFgFIgHgHQgngVgVAaQAOAYAhANIACAIIABAWQgHADgFADIgQAOIg+AAIgFgFIgFgHIgjAAQgDADgBAEIgBAPQACAEADABQAOAEAIALIADAPQAEAZgMAUQhCAWg9gOIAAgPQADgZgIgUIgNgCQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAABQgDAGAAAGQgBAigEAiQgRAHAAAPIhLgHIgegeIABgPQACgRgIgNIgUAHIAAAPIAAA8QgZAAgYAEIAAgCIgGADQgZAFgXAKQgLACgMAAQgeAAgfgMgAm/GbIABABIABAAIBgASIAoAGIADABIAHABIBdAQIAUACIAQAAIA1gBIADAAIAEAAQAdgVAbgXIAGgFIAigXIAkAgIAMgDIABACIAMgFIAMgDIAWgYIAYgjIALgFIAEACIgCAEIAsgnIATgNIALgFQAZgQAYgRIAMgIIANgJIADgCIAAgBIABgBIAUgLIAHgKIAegPIAtgeQAGgBADgEIAIgEQAIADAQgOIAAgBQAGAAAEgFIACgFIAIgFIAKADIANAQIACAGIAGAIIAHAFIAIAKIAGgEQALADANgDIAFgBQAagEAWgOIAJgIQAUgXADgeIAAgIQAAgVgDgWIgBgCIAAgCIAYgVIAdgVQARgJARgIIAGgCQAPgFgFgOQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAIgFAAIgBAAIgEgCIAAABIgUAKIgPgUIgBgGQgFgWgJgVQgLgcgYgTIgFgDIgCgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIgDgDIgFABIAAAAQgIABgGgFQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAIgLgHIgBACQgbgHgcgFIghgGQgTgDgTAAIBAgqIDrhsIABAAIAeAaQAXAWgKgeQAzAVgEgdIAAAAIgBgEQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBQAUAAAMgHIAAgBQgBgGgFgCIgBAAIg1gEIAAAAIgBAAIAYgZIAFgHQADgOgEgFIgEABIAAAAIgCAAIgIAAIgEABIAAABIgkAWIgWAJIgOgeIgGgGIgKgDIgBADQgWADACAoIAAADIgBABQgGAIgKAFQgSAKgTAIIgOAFIgaALIgzAXIgPAGIgJACIgeAKIgIAEIggALQgCgGALgVIACgDQARAAAMgGQALgHAAgKIAAgBIAAgPIgBgLIAAgHQAUgNgRgQIgFgDQgYAAgPgaIgrgBIgNACIgRgNIgTgBIgeAaIgIARIgeAKIAMAQQAAACACACQAGAGADAIIAGALIADADIgMAQIAAABIAAAAIAGgEQgFAIgBAJIgBADQgBAMAAAMIgBAAIgCgBIACAEIAAACIAAABIgDACIgDgFIgFgIQgFgHgHgFQgEgNgIgLIgGgJIgMgaIAAgBIgBgBQgFgKgHgJIAAAAQgFgOgJgLIAAgBIgDgFQgDgGgBgGIAAAAIAAgCIAAgBIACgCIABgBQABgIAEgHQAGgHAEgIQAKgTgEgVIgYAAQgDAGgGACIgBABIAAADIgBACIgCABIgCAAIgBgBQgGgHgDgHIgDgGQgIgCgHgGIgJgIIgTgBIAAABIgDACIAAACIAAADIAAAKIAAACIABABIABACIAAADIAAABIACADIABACIABABIAAADIAAACIABABIgEAAIgEgDIgDgBIgLAAIgBABIAAACIAAAGIAAABIABACIABABIAAACIAAABIADAFIABABIgNgBIAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQABAIAHAEQACACABACIAAACIAAAEIABACIADABIAAABIAAABQADAEAFABIAMADIAMAHQAFACADAAIAAAAIAEADIACACQgBADADACIABACQAEADABAEIABAFQADAGAEAEIABABIAAABIABAAIAKAOIAEALIABABIABACIAAABQAGAMAIAKIAFALIAHARIAEAIIADAEIADAEIAIAPQADAHAEAFQAEAGADAHIABACIABADIgFABIgOAHIgFADIgDACQgLgCgNgBIAIgLIABgXIAAgBIgOgaQgtgngnAjIAAABIAAAAIgYgGIgEAAIgVgTIgjAEIgBAAIgwAVIgKAFIAAABQgBAIACACIAAADQABAJADADQACACADgFIAHAEQgCAGAAAIIAAACIAAACIACAdIgBAAQgKADgFAJQgHAJgLAGIgHAEQgMAFgJAHIgNABIgBAAIgDAAIgLABIgggDIAAAAIgQgCIgDAAIgFAAIAAAAIgGgBIgHgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAIAAgBIgBgBIgFgCIgBgBIgDAAIgEgJIAAgBIAAgBIAAgBIgBgDIAAgDIABgFQACgFgDgFIgBgCIABgGQABgFgDgCIABgEQADgHAHgDIAJgGIADgCIAHgKIAAgCIACgKIABgBIgCgJIAEgBIABAAIAPgGIARgDQAbgDgCAFIgCADIAKAAIABAAQAmgFgggCIAAABIAAAAIgBAAQgEgBAAgDIABgCIAjgTIAAgBIABAAQAZAAATgaQANgTAEgYIACgDIAAgTIAAgBIAAgQIAAgDIgEABIABgBIgIADIgZAFIgTgDIgBAAIgLABIgeAXIgfAYIgVAIIgNgIIgMABIgRgKIgTgFIgKAFIgfANIgVALIgZAVQAAAAgBAAQgBABAAAAQgBAAAAAAQAAABAAAAIAAABIgJAKIgDALIABADIgCAOIAAAEQAAAPACAOQACAPAFANIAEANIABAAIAFAFIADAGIABAAQAEAHAFAGIAGAGIAFACIAXADIABAAIAFABIABAAIAAAAIgBANIgBACQgKABgKgBIgNgCIgFgBIgCADIhJgEIgLgBIgJgCQgGgBgIAAIAAAAIgBAAIgEgFIgDgDIgEgGIgUAOIAAABQgBACgDACIgCAJIgDAKIAAABIgDAKIgGAQIgBADIgDAGQgLARgKASIgBACIgHAPQgDAHgFAGIgRAZIgFAIIgGAFIgBACIgFAIIgSAGIgBgBIgCACQgRAIgTAHIgNAFQgbAKgbAMQgbAMgZAPIgEACQgQAKgMAOIgKALIAAABIAAABQAAAKgGAIQgKADgKAFIgBAAIgFABIgGAGIgJAGQgJAIAFAKIAAAHIABANIAFAUIAAACIAQAoIgfgBIgGAHIgCABQgDADgBAEIgIAJQAAAKAFAHQAEAHAGAAIAeAQIAvAJIAqAKIATAGIA3ATIAFACIAoAPIACACIAEAAgAG8DhIACgBIACgDgAkPi2IABgCIgBAAgAMDjoQAQAQAJARQgFgNgKgLQgFgGgHgFgAiNG4IgCgDQgGgHgKAAQgagBgZgDQgEgEgJgBQgIgDgJABIhQgOIgsgIIgBgBIgigHIhHgRIg7gPIg8gQQgZgKgagGIgKgDIglgOQgWgJgWgDIgBgEQARgFAXANIATgEIAlAKQArANAtAGQAVADAUAGIAYAHIAJACIAiAKQAaAIAcAEIAGABIAHACIBMAQIAMAFIAFADIAEABQAIABAHACQAbAKAdAAIAOAFIARAAIAIgBIAEAAIAKgKIAGgBIAAACIAZgEIAFAiIgKAKgAALF9IABgBIgDgDIgBAAIgDgDQgFgFgDgIIgMgYQgBgDAAgDQgBgbACgaIABgKIAAgDIAAgEIABgJIABgFIAAgCIABgOIACgMIAGgPIAFgIIAJgJQADgDAEgDIANgHIAKgFIAHAAQARABANAKIAKAJIAIAJIABABIAHALQAEAIADAJQACAHAAAIQgBAWgCAWQgBADgDABIgFABIgCAAIgBAGIAAABIgCAJQgGAZgQAXIAEAEIgSAXIghAUgAAPDZQgNAWAAAfQAAASAFAQQgBAJABAJIABAIIABADIABABQAGAIAFALQACAEAEADIACAAQANgHAKgKQAOgDAKgSQANgWAAgeQAAgfgNgWQgMgVgSAAQgSAAgNAVgAHsCeIAAAAIgHgCIgBAAIgFgFIgCgLIgBgLIgCgVIACgaIAAgEIABgHIgBgPIAAgEIAEgYIACgLQABgGADgFQANgWAHgaIABgEQANgPASgEIABABIAAAAQgEAAgEAIIgEABIgHABIgDAEIgDAFIgDAGIABgBIACgBIABgBIABgDQAGgEAHgCIgEAMIAAABQgEAEgEAFIgBABIAAABIgBAFIgCAGIABAAIACADQACAEgBAFIgDAcIgCAQQgBAIABAIIAAABQABAHADAHIAAAAIABACIABAEIABAHIAFAOIAAgBIABgBIADgBQADAGACAEIgJAIIgCACIABAAQAJgCAHgFIAAAAQAFAAADgGIACgEIAAgBIAEgOQAGgZAAgkQAAgSgBgOIAGgBIACAVIAAAOIABACIABABIAAABIAFABQAKACgCAMQgCAWAAAWIgBANQgCAegZANIgEACIgKAGIAFgFIgDABIAAAAQgIAGgJADIgHACIgEABIgHAAIgMgBgAIuBYQgBAFgDAEIgBABQACABADgFIABgCIAAgEIAAAAIAAgBIgBABgAHuALQABAIgFAGQgCADABADIgBABIgBABQgCASADASIADgLIABgCQgBgYAFgWIgCABgAH6gdIgCAEIgBABQADgCABgDg");
	this.shape_1.setTransform(0,-17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8F3F0").s().p("AiUByQgQgPAAgWQAAgWAQgQQAPgPAWAAQAWAAAPAPQAQAQAAAWQAAAWgQAPQgPAPgWAAQgWAAgPgPgAB+AhQgGgGAAgKQAAgJAGgHQAHgFAJAAQAKAAAGAFQAHAHAAAJQAAAKgHAGQgGAHgKAAQgJAAgHgHgAgXAKQgYgXAAghQAAgiAYgYQAXgYAiAAQAiAAAXAYQAZAYAAAiQAAAhgZAXQgXAYgiAAQgiAAgXgYg");
	this.shape_2.setTransform(-79.4,53.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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AAAABIAPACIAXAFIAiAHIAFABQAQAFAQACIACAAIAiAIIABAAIAFACIAKADIAXAFIADABIAGACIgEgCIABgDIBQAPIADABIAAACIAbADQAZAEAZAAQAKAAAGAHIACAEIAAABQABADgDADQgCADgCAAIgJAAIgcgBgAjsGfIAEAAIAQACIgPgEgAkEGbIAFABIABgCgAiKGXQgNgEgPAAIgDAAQgdAAgagKQgIgDgIgBIgDgBIgGgCIgMgFIgegLQgTgGgUgBIgLAAIgCgBIgGAAQgcgEgbgJIgigKIgJgCIgXgGQgUgGgVgDQgtgHgsgNIgkgJIgOgEIgEAAIgGgCIgagCIgZgCIgEAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQgEgIAIgDIAFgBQAIgCAJgBIABAAIAOAAIAFABQAPABAPADIAKACIAWAGIACAAIAFACIAaAHIAEABIArAKIADAAIAJACIAjAHIAJACIADABIABAAQAQADAQAFIAIADIAiAJQAbAJAcAEQATADAUABIADAAQAdAHAaALIAMAGIABAAIABAAQABADAEAAQAEABACgCIAJACIAHADIAGACIAPACIAsAEIAFAAIAEACIAAABQALAIgKAJIgBABIgIAAgACUFJIgEAAIgBgCQgCgIAGgFIAFgDIAHgEIADgCIAMgIQATgPAWgLIALgGIAJgGIAMgIIArggIAYgSIAXgRQAZgRAbgOIAWgLIAJgFIAOgIIAMgIQAMgJAOgGIABAAQAEgBAEACIABAAQAEACABAGQABAFgEADIgBABIgEACIgHAEIgDABIgHAFIgOAJIgEADIgSAKIgIAEIgGACQgOAGgNAIIgwAfIgFADQgKAIgJAIIgGAGIgBABIgEADIgNAJIgMAIQgXARgaAPIgKAFIgEADIgwAgIgDABIgBAAIgNABIgBAAgAllE+IgEgBIgLgDQgRgFgSgCIgWgDIgLAAIgJgBIgUgBIgQgBIgCAAIgCgBQgLgGAIgKIADgDIAFABIATAAIAEABIAFAAIAiACIAWACIAQADIAQAEIADABIAKABQAGAAAEACQAEAEAAAHQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIAAABIgEACQgDACgEAAIgDAAgAAEEwIgBAAQgCgQgEgPIAAgEIgBgFIAAgDIAAgDQABgKACgJIAKgpIAEgKQATgeAjgJIAQgEIAPgBIABAAQAJgBAIABIAFABIACABIADACQANAIAJAMQAFAIACAIQAJARAIASIAIAVIABABIABAAIAjgOQAKgEAIgHIATgRIAJgFQAQgFAOgJIALgIIACgLIAFgDIAagPIARgKQATgLAWgHQAUgHARgMIAFgEIABAAIAFgDIAXgNIANgGIAFABIABABQAEACABAFQAAAGgEADIgGAEIgHAEIgBABIgRAJQgCACgIAEIg3AdIgPAJIgCABIAAABIgBAAIgOAJIgYAQQgXAQgZAOQgFADgGABQgSAJgOAPQgEAFgGADIgPAHIgsAgIgGAGIAMgNIgBAAQgEABgDgFIgCgGQgEgCgCgGIgIgXIgEgJIAAgBIgJgTIgBgCIgBgFQgIgQgMgMIgGgFIgCgBIgBgBIgEgBQgMABgMADIgGAAIgKAFIgJADIgMAHIgEADQgLAJgFAOIgBADIAAAAIgEARIAAABIgBAEQgFAQgBARQAAAGABAGIABAQQABAMgIAAIgGgBgAC6EFQgDAJgCADIANgPIgIADgAFYCRIAFgEIAAgBIgFAFgAleEhIgMgCIgEAAIgCAAIgDgBIgugEIgBAAIgfgEIgHgBIgWgBIgDAAIgFAAIgSgBQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQgFgJAJgEIAIgDIADAAIAFgBIAEAAQAagCAZAFQATAEAUABIAJABIApAEIAFACQADACABAFQABAGgGADIgGACIgBAAIgDAAgAhzEaIgBAAIgDgCIgEgEIgBgFIgDgGIgEgHIgFgGQgIgIgKgFIgFgDIgHgDIgCgBIgHgDIAAAAIgIgDIgGgCIgMgDIAAAAIAAgBIgRgDQgSgDgQgGIgRgFQgOgFgOgCIgIgCQgPgGgRgCIgEAAIgQgCQgegDgdgFQgRgDgSgBIgPgCIgigDIgegDIgggDQgegEgegDQgSgBgQAFQgIgBgIABIgJAEQgIADACAIIABABIgKAGQgDACgDgBIgBAAQgDAAgCgCIAAAAQgFgLAKgHIAJgGIAKgHIABAAQAKgFALgEIANgDIALgCIAOAAIAEAAIAAAAQARABAQACIATADIAzAGIARACIA6AGIAxAFIAQACIA4AIIALACQALABALAEQAGADAHABQAQADAPAGIAJADIAcAGIAZAHIAKADIAAAAQAEgFAFgDQAPgOASgLQAOgIANgKQATgQAXgLIAKgFQAcgTAfgLIAOgFIAGgCIATgHIgTgFQgPgEgOgFQgLgEgNgCIgKgCQgMgBgMAAQgdgBgbgLQgbgLgdgFIgKgCIg6gJIg2gJIgHgBQgMgFgNACIgZABIgEAAIgIgBIgIABIgLgCIgCAAIgBgCIAAgBIgPgCIABgBIgEgTIAMgLIgBABQgSAVARACIAWgNIAhgNIAUgFQAGgBAGgCQAFgCgEgHIAWgKIACAAIAggyIAAgFIANgXIgWgCIgHAAIg0ACIAAAAQgbgHALgGIgHgCQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAIgBgCQgBgDABgDIAAgBIACgCIADgDIAHABIAMABIABAAIABAAIACAAIABAAIABABQAHgBAHACIAIABIALABIARACIACABIAjACIABABIALACIAGABIADAAIgEgEIACAAIAUgBQALACAJgBIABgDIACgMIAAAAIgCgBIgEAAIgCgPIAAAAIACgDIACgBIAAABIABgBIAdggIACgDIACgHQADgLgEgNIAAgBIAWACIgNAZIAWgOIgEgLIAGABIgGgTIgMgOIAfgWIAIgHQAMADAHAIIgCADQgEgCgIABIgFABIAMAHIAKAFQAAgHgDgDIADgCIAVAAIAEgBIAWgSIAVgTIgnATIAAAAQAMgGAIgJIAzgsQAGgCAEgDIgLAbQgTANANgFIADAEIgNANIgBABIgbAdIACAGIALgDIABABIghATIgGABIAEABQABADAEABIAAAAIAAAAIAAgBQAfACglAFIgBAAIgJAAIACgCQACgGgbADIAegGIAAgBIg1ALIgKACIAAAEIgEABIABAJIAAABIgCAKIgBABIgHALIgCACIgKAFQgGAEgEAHIgBADQADACgBAFIgBAHIAAAFIABALIAAADIABADIAAACIAAAAIABABIAEAJIAAABIABABIAAACIAAAAQABAFgDAAIAAgBIAAgCQgGgOgHgMIAAgCIABgGQAAgLgLABIgDACIgDADIgEAGIgBAFIgBACIgBAHIABABIAAAMIABAGQAAAFADADIADACQADABADAAIACAAIABAAIAAAAIgBgBIADAAIAIAAIAAABIgBABIANABIAEABIAGAAIAHABIgKgPIABgBIAAAAQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIAHABIAHABIAAAAIAEABIADAAIAQABIAAABIAgACIALgBIADAAIABAAIANgBIgGAFIgDADIAAADQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIADAAIACAAIADgCIAHAEIACABIACAAIAEgBQAPAAAOACIAYADIAFABIACABIgFgNIgCgEIAAgBIABgCIAFgFIABAAIABgEIADgBQgBgEADgDIAKABQAKADAIgEIABgBQAQgDAOgGIAFgDIAFgBIAAgBIALADIACABIAAABIAAABIgCAEQgBAEgEADIgBAAIgBAAIgHADIgJADQgQAGgSABIgBgBIgOAAIgEgBIgBACIACABIgCACQgCAFABAGIABADQABAEACADIACABIABAAQADADAFABIAIACIAHAEIAEABIACABIAIACIAGACIACABIAAgBQAMAAAJgHQAGgFACgHIAAgBIAAAAIABgDIAAgBIANgFQAEgEAGgCIABgBIABgBIAEAAIAAgBQAPgDANAFIACAAIADABIAAABIABABIAAAAIgBgBIAAAAIAAgCIAAgBIAAAAIABgDIABgBIADAAIAAgBQAcgFAWANIABABIAFACIABAAIABAAQAIAAAHACIADABIACABQACABAEAAIACABIAEgCQAHgCAIAAIgCgDQgDgEgDgDIgEgCIgCgBIgBgBIAAgBIgEgBIgBgDIAAgDIAAAAIgEgGIgBgCIgCgBIgFgEQgDgFgCgFIgBgDQgBgFABgFIAAAAIABgJIABgBIACgDIAFgCIAPgHIAFgCIAFgBIAAAAIAjADIADAAIABAAIAAAAIACAAIAAAAIAFgBIAMgBIAAAAQASgBAQAFIACABIgBgBIAAAAIgBgBIAAgCIAAgDQAFgEAGgBIAWgVQAFgFAIgCIAIgCIAFgKIgEAAIgBgBIgBgBQAAgFACgDIACgDIABgDIABgEIAEgEIACgCIgDgDIAAgEIADgHIACAEIAHgBQgFAAgCgDIgDgEIgBgBIgUgeIgMgDQgJgGgLgBIgDAAIgBgBIAAABQgLAAgLADIgDgBIADACIgGABIgLAEIgGADIgFAEIgDABIgBAAQgCACAAADIAAABIABACIgBACIAAACIgDgEIADAEIgBAGIgCgCIgDgDIgFgKQgDgIgGgGQgCgCgBgDIAAgBIgMgPIABAAIAmgHIgJgDIAJgQIAegbIATABIARAOIANgDIArABIAMAbIABAAIADAAQAqgCgQAdIgBAEIAAAHQgBAGgHgCQADABABAFIAAABQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAIABAQIAAABQAAAJgMAHQgMAHgRAAIgCADQgLAUACAHIAggMIAIgDIAfgKIAJgDIADgBQAagHAYgLQATgIARgKIACgCIABAAIAOgGQATgIASgKQAJgFAHgIIAAAAIAAgEQgBgnAWgDIgGAOIgBAFQgEAFAAAHIgFAPIAAACQADAHgIAEIgBACQgHAFgHAEQgQAIgRAGQgSAHgQALQgGAEgIABQgFAEgHACQggAOgiAKIgWAHIgvARIgDABIgKADIgFACQgKAFgGAIQgGAHgHAEIgJAFIgBAAIgCAAIAMAGIAAAAIABABIABABIADADIABABIABABIAGAHIABACIACAAIADgCIAEgEIABgBIAKgFIABgBIBvg1IADgBIC4hTIApAlIAAgXQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABABIAAABIAegDIgKgFIAvgPIgfAAQgugEARgJIAZgVIAFgXIgBgCIAEAAQADAFgCANIgFAHIgYAZIABAAIAAAAIA1AEIABAAQAEADACAFIAAABQgNAIgTAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAIABAEIAAAAQAEAdgzgVQAKAegXgVIgegbIgBABIjqBrIhBArQATAAATADIAiAGQAbAFAcAGIADABQAFABABAGQAAAFgCACQAMgBAKACIAFACIABAAIAGAEQAXATAMAcQAIAVAFAVIACAGIACATIAAAHIAagLIAJgEIACAAIAAAAIAGAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAFANgOAFIgHADQgRAIgQAJIgMAGIgOAKIgGAFIgMAIIgIADIgFABIADAEIABAEIAAACIAAADQAEAVAAAWIgBAHQgCAegVAXIgJAIQgVAPgaAEIgGABQgNACgLgDIgCgBIgEgBQgGgDgFgFQgFgEgDgGQgHgMgBgMQgBgIABgIQABgIADgJIAAAAIADgDIACAAIADgBQAFAAADAGIACAGIgBAGIgBAFIgBALQABAKAHAJIAGAFIAAABQADACADAAQAKABALgBIADAAIAEgBIADgBIAPgGIALgGIADgCQAZgNADgdIAAgOQABgWACgVQABgMgJgDIgCgFIAAgFIgBgNIgEgXQgCgHAAgIIAAgDQAAgLgHgHIgEgFIgCgBIgMgFIgCAAQgSADgMAQIgCADQgHAagNAWQgDAFAAAHIgCALIgEAXIgBAEIgCAFIgBAAQgCACgDgBIgGgBQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIgBgCQgBgGABgHIAEgSIABgLIAAgBIABgDIADgLIADgFQAKgRAFgTQADgKAGgJIACgDIAJgIIABAAIAMgHIALgFIADAAQAKAAAJADQAMAEAKAKQALAMAAARQAAASAFASIABAEIABALIAIgFIAagSIADgCIAEgDIAAgBQgEgEAAgGIAAgCQAAgNgEgNQgFgSgIgQIgKgUIgGgIIgDgEIgNgLQgSgBgQAIIgqATIgvAWIgpAVIgxAZIgxAZIgYAMIgGADQgIAFgJABQgDAFgCAHIADAMQAAAGgDAEIgEACIAAAAIgCADIgpgBIgSgBQgdgDgdgHIgJgDQgKgEgKgCIAIABIA6AJQAXAEAXgEIASAAIADAAIgBgBIAAgBIgCgCIgBgCIAAAAIACgFQADgHgCgHIgBgHQgBgNgDgNIAAgEIgHgTIgCgFIgMgbIgFgNQgFgOgKgMIgBgCQgDgIgKABIgCACIgrgCIAAACIAAABIgBACIgBABIgBAAIgCABIgDAAQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAgBAAIAAABIgDACIAAAAIgBABIgVARQgDgGgJgBIAKAGIACACIABABIABAAIADABIACAFIABAEIABAOQABAJgBAJQgCAMgHAKIgCACIgEAFIgCAEQgCAFAAAEQABABAEABIABAAIAiAFIAAABIgBAAIgMABIgEgBIgJgCIgMgCIgHAAIgBgBIAAABIAAAAQgHACgEAHIAAAAQgBABAAAAQgBABAAAAQAAAAAAAAQgBAAAAABQgDAHAGAEIABABIgCAGIgBABIAAABIgDAGIgBABIgCABQgHACgCAHQgCAFgBAFIABAIIgBABIgDAJIAAAAIADgCIADAAIACAFIAEAEIAFACIAAADIgBABQgBACgEACIgDABIgFACIgMgBIgFADQgNAGgPAEQgfAHgZASIgGAFQgQAHgPAKIgKAEIgHADIgUAMIgPALIgSAOQgNAHgMAJIgEACQgKAEACAKQACAKALgEIADgBIAOAMQALAKAGAMQAGALgGAJIgDACIgCABIgEgBgAA3A3IgBAEIgCADIAHABIAJACIAAABIACABIADACIACACIABAAIAAgCIAAgCIABgBIACgEIADgGIADgHIAAgBIAGgMIABgCIAAgBIAAgCIABgBIABgCIAAgBIAAgCIABgBIAEgFIABgBIAAgDIgUgCIgBAAQgHgBgFgEIgCgBQgIgDgKAAIAAAAIgBAAIgCAAIAAAAIABADIABACIABADQAKANAAAPIAAABIAAACIAAADIgBAAIgBAJgAglAkIABAEIADAAQAPACAPAEQANADANAEIAPAGIAIgFIACgIQgZAAgXgDQgRgDgQgEIgFgCIABACgAhiAGIAFAKIABABQAIAKANABQALABAHAGIAAABIgBACIAIABIgCgEIgCgFIAAAAIgBAAQgLgCgKgIIgCgCIgBAAIgEgDIgEgDIgGgDIgBgBIAAAAIgBgBIgCAAIgFgCgAAwAmQAAgMgJgLIgDgDIgBgHIgBABIgVAIIgdAKQgHACgHgBQARAHASADIAVACIAWABIAAAAgAhVAgIgHgDIgEgDQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIgCgCQgEgEgCgGIgCgGIgBgDIgBAAIAAAAIgFgCIgBAAIAAgCIAAgBIAAgBIABAAIADgCIAAAAIABAAIAAgBIAAgHIgCgHIgBgCIAAADIAAAAIAAABQACAOgIgLIABgoIAFgIIgGAIIgbAoIgGAWIABAIIABAAQAQAEAQAGIAAAAIADACIAUAEIALADIAAAAgAhqgqIAAABIgBAEQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABIABABQACAFABAFIABAJIAAACIACADIAAADIACAAQAVAGARANIAHAFIAAgBIAAgCIABgBIgMgPIgCgEIgDgBIgBgCIAAgBIAAgBIgUgTIgEgFIgGgGIgFgEIAAAAgAgKgmIABAAIAAABIABABQABAFgBAFIAAAAIgBAGIgBAEIAAAAIgBACIAAABIAAACQgHALgJAKIgLAGQAcAAAXgMIAAAAIAJgEIABAAIACgBIAGgBIADABIAAgDIAAgBIAAgCIACgBIACgBIACABIABABIABAGIABgCIABgBIADAAIAAgBIABABQAWACAWAFIAAAAIAHACIAEABIABgCIAAgBIAAgCIABgBIAAAAIABgBIAAAAIAAgBIAAgCIAAgBIgDAAQgGAAgFgEIgBgBIgKgFIgKgFIAAAAIgCgDIgCgEIgFgCIgCACIgNgLIgWAAIgBgBQAGAAAEgDQAFgDAEgFIAGgJQALgUAAgcIgXAOIgUAXIgRAWIAFgUQgFgDgFAGIgFADIAjg0IgOgCQgDABgEgBIgIgBIgigDIgCAAIgGgBIgZgBIgKgBIgTgCQABAEgFAGIgEAHIgDAAIAAgBIgCgFIgCgNIgMgBIgFgBIgEAAQgKAFgHAJIgDADIgCAAQgIABgIgBQgKAAgIgDQgEAAgDgBIgBAAIAAAAIAAAAQgFADgBAGIAAACQgHAPATACIACgBIAbAFIABAFIAAACIgBACIABABIgNAUIgGAPIgLAQQgKASAIAKIAAAAIAAABIAJABIALABIAAAAIADAAIAXg3IACgCIARgaIAHgJIAHgIIABAAIADgDIADAAIgBAEQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIADAAQABAJAHADIABADIAGgCIAdABIAAABIANACIAQAFIAJAEIABABIAAABIAAACIAAACIgLAAIgBAAIgHgCIgJgDIgCgBIACADIABABIABABIAAACIABABIABACIAAACIABAEIABADIAAACIABACIAAAQIABAGIAAACIABABQADAMgBALQANgKAJgMIABgDIABgBQAAgEACgDIABAAIAAgBIAAgEIAAgIIABgCIABgBIACgBIACACgAEeAMIAAAAIgBgDIABADgAhgg+IAAABIgCADIgDADIAAABIgCAFIAMAJIABABIAAAAIAHAGQARARAOATIgDgoIAAgBIgBgCIgCgCIAAgDIAAgCIgDgEIgBgCIgBgCIAAgBIgCgBIgBgCIAAgCIABgBIgfgBIAAABgAk1gaIgKAEIgRAJQATAAASADIA2AJIARABIAGgGIACABIAFgJIARgaIACABIABgDIgBgBIAKgXIgbgGIAAAAIABgBQgOgOgHAWIAAACIgHAOIgIAIIAGADQgBAFgDAFQgGAIgJAAIAAgDIgBgNIAIgRIAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgEgBIAEgEIgFABQgHABgFAHQgGAHgBAKIAAAEIAAABIABAAIAAABQgJAJgGgHIgCgEgAEagkIAAAOQADAEABAFIAAABIABACIABAAIADgBIABABIAAAAIgIgRIAAgKIABAAQAAAKAEAHQADAGADABIACgBIAEgBIAFgBIAJgEIAFgDIAGgEIgDAAQgUgBgRgKIgBAAIgCgBIgBgBIAAAEgABngRQAEACACAEIAAAAIADgDIABgCIACgCQADgCABgDIAAgDIABgCIABgDIABgBIAEgFIAAgBIAAgBIAAgBIABgBIAEgCIABgCIAAgBIAAgCIABgBIABgBIADgEIABgBIAAgBIAAgBIAAgGIAAgBIAAgDIAAgIIAAgIIgBABIgCAAQgCgFgGgCIgMgFIgHgDQgJgHgNAAIgEgBIgMgEIgHgBIgCgBIgBAEIADABIgBALIALgFQgEAEgCAFIgDAHQgDAHAAAIIAAASIgBAHQAAAGAFADIADACIAKAFIAJADIAIAFIAEADIABAAIADAAgAknggIABAAIAMgXQgQAMADALgAkAgpIgEAFIgBABIAAACIABgBIALgHQACgIgBAAQgCAAgGAIgAHGipIgCABIgBAFIgEATIgDAGIAAACIAAABIgCAFIgDAGIgFAGIAAAAIgMAUIAAABIgDADQgGAIgHAHQgLAKgPAGIgCABQgIAIgLAFIgGACIgBACIgBABIgBACIgDABIgDABIgDAFIgBABIAvgVIASgKQAUgMAVgKIAOgGIAGgDIASgJIAKgFIAdgOQAWgLAXgJIAXgJQgHABgHgBIgLgCIgsgIIgGgBQgVgDgVgCIgJgBIgKgBIgBACgAEdgvIAAACIACACQALAFAMACIABABQAIACAHgDIACAAIAAAAQAEgCAEgEIACgCQAKgFACgLQABgEgCgDQgGgMgKgJQgNgKgOgIIgCgCQgGgIgKgBIgBACQgIAGACALIABAFQgCAEABAEQAAAFgCADQgBAGgCAEIgCADIgBAAIgCAAQAGAIADAJIABgBIAEABgAA0gnIAAgBIAAgBIABgCIAAAAIgCgBQgDAAAEAFgAhxg0IAAADIACgEgAFmhOIAAABIAAAAQAEAFACAIIAGgGQAWgKARgRQABgFAFgEIABgBIAAgDIAIgLIAAgBIAAgCIAGgGIAAgBIAAgDIADgDIABgCIAAgBIAAgCQADgEABgFQgDABgEAAIgIAAIgOAAIgEAAIgCAAIgOgBQgCgBgCgDIAAgBIgCgCIgCgBIgDAAIgKgEQgDADgGADQgJAGgIAAQgFABgFgBIABACIACAGQACAFgBAGIAAABIgDgBQgFgBgFACQgGADgDADIgEACQAHAEAGAHIAIAIQANAKALALIABABIAAACIABABIABABIAAAAIAAAAgAD5hgIAEAKIAAAAIAKANIAFAEIACgLIAAgBIACgCIAAgEQABgJADgIQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIADgIIAAgBIAAgBIAAgFIAAAAIgBgBIAAgCIAAgBIgBgBIgGgBQgMgFgNgEIgHgBIAIAqgAjthuIgDAHIgQAZIAAAHIADACIADgDQANAAAKgPIADgFQAFgLABgNIAAgJIAFgCQAJgGACgDIgGgBIgBAAIgEgBIgDAAgAE8hpIAAABIgCgDIACACgAAshuIADACIAAgGIgIgBQgBADAGACgAi0iDIgLAGIgGAFIACAAIAFABIAHACIAMABIAAAAQAGABAFgBIACAAIAHgIIABgBIAEgDIAAAAIACgCIAAAAIgCAAIgLgBIgHgBIgEAAIgEgBgAEth3IgBABIABAAIACAAIgBgBgAjLh7IANgLIABAAIgMgCgABEiAIAEABIgDgFgACgiAIAGgCIABgDgAhSiNIAGABIABAAIAFABIgGgDgADciNIADAAIABABIAAgBIgBAAIgEgBIABABgAk0iTIACAAIAOABIABAAIgKgBIgEgBIgHgBIgDAAIAHACgAF8iiIAOADQANABANgBIAEgBIAHAAIABgFQAJgJgFgOQgCgGgFgEQgEgEgEAAQgbgEgbADQgGgCgIACIgBAAQgNgJgSACQgHADgDAFIgBAAIAAADIAAAAIgBAGQgBAJAEAGQAGAJAIADQAIAGANgCIABAAIAHgBIAGgDQAKABAJADgAifiqIAAAAIABgBgAGCjQIABAAIABAAIgBAAIgBAAgAiEjhIABAKIACgEIgCgGIgBAAgAHlkoIACgBIAAAAIAFAAIAAABIAEgBIABgCQgVADAJAAgAH0lcIABAAIAggFQADgcgEAPIgCAEIgFgBgAFeljIAAAAIADAFIABAAIgBgFQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIAAAAIgCgBIgDAEgAHhlpIAYgHIgHAAIgBAAQgLAEgDgBgAFsltIgJAEIALgDIAEABIABAAIAAgDIgHABgAHklzIAIgGIABgTgAGrmRQAAAFgEAAQAKAaAOgYIAAgBIgGACQASgQgbAJIgEADIgBgFIAAABgAGGmNIACAAIAfgIgAHXmSIACAAIAGAAIgLgEQgCAAAFAEgAmBEGIAAAAIgBgBIgDAAQgbgCgbgFIgLgCIgUgBIgWgBIgJgBIgDgBIgBgBQgCgGACgEIACgDIADgCIAIAAIAiAAIASACQASABASAEIAMABQAJAAAJADIANAEIACADIABADIAAACIgBABQgBADgFABIgDABIgJABIgEAAgAmADiQgNgEgOgDIgFAAIgggFIgLgBIgEgBIgYgDQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgBgDQgCgGAFgEIABAAIACgCIATAAIAIAAIAcAEIAEAAIAOADQAUACASAHIACABQADABABAEIgBAFIAAAAIAAABQgCAFgEABIgEABIgFgBgAB+ATIgDABIgEgBIAAAAIgBgBIAAgBIAAgCIAAgBIATAFIAJADQgKgCgKgBgADMAFIgHgBIAAAAIgBgBIgRgFQgIgCgJgBIAHgCIAeAFIAGAAIgGgQIgEgbQgEABgBgCIgBgDIAAgBIAAgEIAAgjQgPgKAAAUIAAAAIgEAeQgDAEgDAAQgDABgBgEIgCgHIAEgaIAAgCIABgBIAAgLQATgCgPgDIAAgCIAYABIAAANQAAAFACgNIABgCIAFAQIAGAnIAFAQIAAAEIAJAWIAAAGIgKACIgFgCgADDjnIACAAIACAfIABALQgRAGATAAIABABIAAACIAAAAIgDABIgBAAIAAABIgBABIAAACQAAAAAAABQAAABAAAAQABABAAAAQABAAAAABIAAAAIgWATgAA7i6IAAAAIAAgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgCgBIgCgBIgEgbIACgBIAJgPIAEACIgBAGIAAADIAAABIgCALIADAGIABAAIAAAKIAEgHQAFAAAEgRIAogmIAUgGQAIgBABgDIAAgBIgPgHIg7AUIgXAhIgCgCQAAgHACgHQAGgPAQgMIAKgGQARgJAWgBIAKgBIgCgCIgGAAIgegHIAigEIAWAUIAEAAIAYAGIAAAAIAAAAIAAgCQAngiAtAmIAOAaIAAACIgJAiIgGgBIgCABIgCABIAGgQIgEgBIgDghIABgDIgHgFIACAJIAAARIgaAzIAAAEIgIADIgCAAIgBgBIgLAAIAEgCIACgCIAHgUIAAgBIAAAQIAZgvIgCgUIgKgKIAAAAIgUgEIgFACQgGAFARAIIACALIgEADIgIgLIgXgMIAKAKIAMAhIAAABIgEACIgFgLIAAgBIgSgWIACADIgNgGIgZANIAAACIgBgBIAAgDIgEAAQgGgHgJAIQAIgIgLAFIAAABIgTAUIgNASIgHADQgGADACAHIAAABIgBABIgIAcgADqkUIgfgHQgGAHAJgBIAEgBIAYACgAjCiyIgFgCIgGgFQgGgGgEgHIACgCIAAgEIAAgDQgCgDgJgBIAAACIgBgBIgDgMQgGgOgBgOQgCgPAAgPIgBgEIACgNIACABQADACAEAAIAAABQgHAIAOgBIABABQAAAGAHABIAAABIACACIgXgDIAEAqIABgFIACAAQAAARANAOIABABIACgBQANgFAPACIACgCIACgCIAEAAIAAgBIAEACIACACQAFAOgPACIAAAAIgDAAIgKABIgDACQgFgCAAAEIAAABIABAAIADAHQAHAHAMgGIAAgCIACAAIACAMIgWgEgADOjFIgDgDIAAgTQAFABABgBIADACIAGgLIgBATQAAAMgIAAIgDAAgACejXIgDgBQgDgDABgEIAAgEIABgBIAAAAIACgBIgBgCIABgCIABgEIACgCIAEgBIAFACIACACIAAAFIgBAEIABABIAAAEIgBAFQgEADgDAAIgEgBgAjQjqIgBAAIgCgEIAAAAQgBgFAGgCIABABQAEAGgBADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAIgCgBgAAojzQgDgDgBgJIgBgDQgBgCAAgHIABgCIAKgEIAEAIQgBAPgDAFQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgCgBgAitj4QgDgCABgDIAAgCIABgEIAAgBIACgBIAEgBIABABIAEABIACACIAAAFIgBAFQgDACgDAAQgCAAgDgCgAjdj7QgDgDABgEIABgEIAAgBIAAAAIABAAIACgBIAEgBIAEACIABABIABABIABAFIgCAEQgCADgDAAIgGgCg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IgEgEIAAgCIAAgBIgBgCIgBgBIAAgCIAAgGIAAgBIABgBIAMgBIACACIAFADIAEAAIgCgCIAAgBIAAgDIAAgCIgBgBIgDgDIAAgCIAAgDIAAgBIgCgCIAAgBIAAgLIAAgDIABgBIACgDIABAAIASAAIAKAJQAGAFAJADIACAGQAEAHAFAGIACACIACgBIACgBIAAgBIAAgDIABgBQAGgDAEgFIAXgBQAEAVgKATQgEAIgFAIQgFAHgBAIIgBABIgCABIAAACIAAABIAAAAIAAACIgBABIgDAAIgCgBIAAgBIAAgBIAAAAIAAAAIgCgBIABgCIABgBIADgDIABgDIAGgMIAEgFIAAgBIABgDQAHgFACgJQADgLgBgNIAAAAIgRgBIgBABQgCAEgFACIAAACQgBAEgEADIgBACIAAADIgBABIgDAAIgBgBIgCgCIAAgBIAAgDIAAgCIgEgEQgGgFgCgHIgBgDIgNgIIgJgIIgBAAIgPAAIAAABQgBAHADAFIAAAGIACACIACADIAAABIAAACIABABIACAFIABABQAFADABAGIAAAAIAEADIAAABIgBADIgFAAIgBgBIgLgJIgEgCIgHgEIgHAAIABABIABACIAAABIAAADIABABIACACIABACIAAADIAAABIABACIADAEIACACQAEACAAAEIAAABIgBABIAAABIgDgBIgBgBIAAgBIgBgBQgHgBgFgGIgBAAIgEABIABABIADACQADAHAHADIAPAHIgBABIgNAAIgBAAIgBgBIAAABIABABQAGAHAKgCIACACQAIAEAIACIACACIAAABIABABIAAAAIACACIACACIAAAAIABABIADADIgBAAIAAABIgEgCgAEDmSIAAAAIAAAAIAAAAIABgBIgBABg");
	this.shape_3.setTransform(-3.7,-17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A8ABAA").s().p("AAGADIADACIgBAAgAgIgEIACAAIAGAAIAGAGIAAABg");
	this.shape_4.setTransform(-85.4,24.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B1A59F").s().p("AgIABIASgCIgTADIABgBg");
	this.shape_5.setTransform(-57.1,37.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#110C05").s().p("AAAACIAAgFIAAgCIACALQgCgCAAgCg");
	this.shape_6.setTransform(-56.3,35.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A3F35").s().p("AgBAAIADAAIgCABIgBgBg");
	this.shape_7.setTransform(-60.3,36.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#160B06").s().p("AgBgHQACACAAACIABALIgDgPg");
	this.shape_8.setTransform(-56.8,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#899794").s().p("AAEgTIAAACIgGAkIgBABg");
	this.shape_9.setTransform(-57.4,31.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#423B33").s().p("AgFAeIAHgJIAAAGQAAACADACIgCgLIAGgIIACABQgEALgBAMIAAAAgAgDgjQAGAFADAIQgIALgGALIgCABgAAAgeQAAgDgDgBQAFAcgCgYg");
	this.shape_10.setTransform(-56.6,33.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D130F").s().p("AABABQgGgGgHgEIADgBIAWASIAAADQgHgDgFgHg");
	this.shape_11.setTransform(-47.9,28.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7E2DD").s().p("AgKACIABgCIAKgEQADAAADADIAEACIgLABIgFACIgCAAIAAABIAAAAg");
	this.shape_12.setTransform(-51.2,30.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A37C6E").s().p("AAMAMIAAgDIgWgSIgDgDQAOAAAKATIADAGIgCgBg");
	this.shape_13.setTransform(-47.8,28.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AC9B93").s().p("AAAAAIABAAIgBAAg");
	this.shape_14.setTransform(-70.9,39.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#473D33").s().p("AgGAAIAAAAIANAAIAAABIgNgBg");
	this.shape_15.setTransform(-66,36.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7B6F67").s().p("AA6AlIAMAGIAAAEIgBgBIgUADIAJgMgAgVAuIAAgBIgPAAIAAABIgbgCIgLgEQgFgCgDgEIgHgJQAWAJAZAEIA4ACIAUgEIgBABIgEAEIgDAAIACABQgGAEgGAAIgWABIgPgBgAiBATQgHgKgEgLIAHAEIAVAZIgRgIgABJATIAFgHIgDAIIgCgBgABrgTIACADQgHAEgGAEIALgLgAA8gcIAAgCIAJAAIALAEIgLALQgCgIgHgFgABtgWQAFgFAFABIgLAFIABgBgACEguIAGgCIADADIgEABIgFgCg");
	this.shape_16.setTransform(-63,32.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8F8984").s().p("AAWAFIgugJIAYAEIAZAEIAAABg");
	this.shape_17.setTransform(-70.4,15.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5E5550").s().p("AgHAAIAAAAIAGgBIAJADIgPgCg");
	this.shape_18.setTransform(-67.1,15.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A59D99").s().p("AgUgEIAEAAIAPADIABAAIAVAGg");
	this.shape_19.setTransform(-66.2,16.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#76726F").s().p("AACAGIgdgPIA3ASg");
	this.shape_20.setTransform(-73.2,14.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FAF7F5").s().p("AgCABIADgBIACABIgFAAg");
	this.shape_21.setTransform(-73.7,11.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#716C63").s().p("AgaAAIgCAAIAAgCIAZACIAZABIAHACg");
	this.shape_22.setTransform(-72,11.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#99938D").s().p("AgWACIAGgFIAeABQAHACACACIgPgBIgBABQgHAAgIACQgIgEgGACg");
	this.shape_23.setTransform(-73.7,8.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#848984").s().p("AgCAKQgEgHAAgJIAGgKIAHAhQgGAAgDgHg");
	this.shape_24.setTransform(-76.7,11.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1B1610").s().p("AgBAGQgKgOAQgCIgDAVIgDgFg");
	this.shape_25.setTransform(-73.5,2.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A89C97").s().p("AAigIQAEACABAGIAAABIgKAWIgJADQAKgMAEgWgAgmgTIABgGIAAAJIgBgDg");
	this.shape_26.setTransform(-68.5,6.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6C5448").s().p("AgEAHQgGgHAQgHIAAADIgEADQgDAEAAAFIgDgBg");
	this.shape_27.setTransform(-64.3,9.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7F6C64").s().p("AgEAGQABgGADgDIAEgEIABAEQgHAGADAFIgFgCg");
	this.shape_28.setTransform(-64.1,9.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C1B4AE").s().p("AgVgBIAAAAIgDABIgEABIgCAAIgBgBIgEgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABAAIA3AEIADABIAOACIgTAEQgXgMgQAFg");
	this.shape_29.setTransform(-71.1,11.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9C9493").s().p("AgDgFQACgDADgCIAEgCIAAAAIAAAAIAEgBIgBABIgFACQgJAHgDALIgBAGQAAgMAGgHg");
	this.shape_30.setTransform(-71.4,3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#786862").s().p("AgBAAIABAAIACABg");
	this.shape_31.setTransform(-69,0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FBF9F8").s().p("AgIADIgDAAIgEAAIAAAAIACgBQANgHANAEIADABIAAADg");
	this.shape_32.setTransform(-69.2,1.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0A0201").s().p("AgJAEIgLAAIgBAAIAAAAIAAgHIAmAAIAFADIAAAAIgDgBQgOgDgMAHIgCABg");
	this.shape_33.setTransform(-69.8,1.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#312520").s().p("AgDAEIAYAAIAAgEIAAAAIAHADIgCACQgDAEgFAAgAgVAEIALAAIgEACQgEAAgDgCgAgbgCIARgGIAOABIACAAIAAAAIAEABIAGADIABAAIgmAAIAAAHQgEgCgCgEg");
	this.shape_34.setTransform(-69.8,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#695A52").s().p("AANAKQgHgDgHAAIgNgMQAFAAADgDIADgDIAAAAIACABQAKAJAGAMIAAABIgCgCg");
	this.shape_35.setTransform(-66.5,2.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3A2F27").s().p("AAEABQgZgDAdACIgCABIgCAAg");
	this.shape_36.setTransform(-46.4,21.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A3918B").s().p("AAFAEIghgKIAAgBIA5AOIgBABIgXgEg");
	this.shape_37.setTransform(-50.1,18.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#251C16").s().p("ABvBIIAFgBIAAADIgFgCgAg1AsIg3gTIgHghQABgEADgCIACgCQAGgDAIAFIgFABQgJADAEAIQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIAFAAIAAACQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAEADIABABIgCAAQgGACgBAGQAAAIAHACQALAEAMACQAYAFAWAKIACAAIgGABgAgTgKIgKgCIAIABIAPACIAKgiIAAgBQgBgGgDgCIgQgVQAIAAAHAEIACABQAFANACANIAFAWQgQAHAFAIIgVgFg");
	this.shape_38.setTransform(-65,10.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9B8B84").s().p("AAUAFIgDgBIgqgIIgEgBIAUADIAnAIIgKgBg");
	this.shape_39.setTransform(-58.5,11.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2C1D18").s().p("AgDgBIACAAIAFADIgHgDg");
	this.shape_40.setTransform(-53.5,1.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#190F0C").s().p("AAKAGIgbgGIgCgFIALABIABADQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAXADQgBACgHABIgCAAg");
	this.shape_41.setTransform(-52,3.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D1CAC4").s().p("AgDAAIADAAIAAAAIAAAAIAEABg");
	this.shape_42.setTransform(-42.3,8.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#100600").s().p("AgBAAIAAAAIADABIgDgBg");
	this.shape_43.setTransform(-39.8,8.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#685A54").s().p("AgEABIgSgEIAtADIgMAEIgPgDg");
	this.shape_44.setTransform(-43.2,11.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#979895").s().p("AgEACIgDgCIgBgDIABAAIAQABQgCAEgDABIAAABIgBAAIgHgCg");
	this.shape_45.setTransform(-51.5,12.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#615C57").s().p("AgNgCIgdgHIAKAAIAWADIA2AQg");
	this.shape_46.setTransform(-43.4,13.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#827671").s().p("AACADIgPgFIAUABIAHABIgHADIgFAAg");
	this.shape_47.setTransform(-50.1,10.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A19C99").s().p("AAYAEIg/gJIAaAAIACAAIAkAIIAOADg");
	this.shape_48.setTransform(-49.6,4.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#847772").s().p("AgQAAIAGAAIAbABIghgBg");
	this.shape_49.setTransform(-51.7,5.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3D322A").s().p("AA1AMIADgBQAFAAABgEQAJACgJgCIABgDIAVALIgfgDgAhUgNIACAAIgBACg");
	this.shape_50.setTransform(-46.2,7.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#201710").s().p("AAKAGIgOgCIgNgJIAeAEQAJADgGAEg");
	this.shape_51.setTransform(-46.7,4.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#281B13").s().p("AAAAAIABAAIgBAAg");
	this.shape_52.setTransform(-52.6,1.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A09592").s().p("AgqgLIADAAQABAGACAGIACAGIAAAFgAAngFIgDAAIAHAAg");
	this.shape_53.setTransform(-50.3,2.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7A6A63").s().p("AgFABIACgCIAKgCIgEAFIgDABIAAAAIgGABg");
	this.shape_54.setTransform(-16.4,43.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#73655E").s().p("AAAAEIgBgBIgEgKIADAGIAFADIABABIACAFIgGgEg");
	this.shape_55.setTransform(-27.9,40.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#AD9F96").s().p("AAwAfQgWABgUgEIApgMIALgBIACgDIAIgCIgDAGIAKgBIAAAAIgFAKIgLACIgCADIAAADIgJAAgAggAGIAGgCIAKAEIAAAAQgIAAgIgCgAhEgRQgEgEgCgEIAAgBIAAgEQAEgCACAAIABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAABIAAABIAAABIAAADIABAAIAJANIAEADIADAFIgGgEIgDgFIAEAKQgIgHgHgJg");
	this.shape_56.setTransform(-22.7,40.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B6AAA5").s().p("AAAAFIAAgEIAAgBIAAAAIAEAEIgDABIgBAAgAgDgEIABAAIAAABIgBgBg");
	this.shape_57.setTransform(-29.3,38.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5C574E").s().p("AANAEIgdgGIAAgCIAhAJg");
	this.shape_58.setTransform(-32.4,25.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#625D56").s().p("AAGABIgMgBIANABIgBAAg");
	this.shape_59.setTransform(-21.3,27.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A39C96").s().p("AgVgBIA5AHIASADIAEABIANACIAAACgAhGgJIAAgBQABgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIADAAIADACIAeAHg");
	this.shape_60.setTransform(-27.9,26.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7F7974").s().p("AACACIgTgCIAAgBIABAAIAhADIABAAg");
	this.shape_61.setTransform(-18.9,27.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C6B9B4").s().p("AAAAAIABgFIgBADIAAAIIAAgGg");
	this.shape_62.setTransform(-25.7,15.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A9A19F").s().p("AgDAAIADAAIAEABg");
	this.shape_63.setTransform(-37.8,18.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9C8E84").s().p("AgGAAIgKgDIgFgBIArAHIAAACg");
	this.shape_64.setTransform(-34.3,22.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A3928B").s().p("AAjAIQgQgCgQgFIgEgBIgigGIABgBIBHAPIgCAAg");
	this.shape_65.setTransform(-43.7,20.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3F382C").s().p("AgKAAIARgCIABAAQgCABAEADIABABg");
	this.shape_66.setTransform(-41.2,23.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A49C96").s().p("AgBAAIADAAIAAAAg");
	this.shape_67.setTransform(-40.1,11.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#261C17").s().p("AALAGQASADASAFIAKACIAFABIADAHgAAjgKIAMgDIAEAIIgQgFgAgDgOIgigDIAIgEIAeADIAAAAIASAGIgWgCgAgtgRIgTgBIADgFIADAAIAQAGIgDAAg");
	this.shape_68.setTransform(-45.6,12.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#725C52").s().p("AACAMQAGABAEgCQgBAEgDACIgCACgAgFgJIgDgBIgDgIIADAAIACABIAEAAIADAEIADAFIgJgBg");
	this.shape_69.setTransform(-39.7,13);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B6A8A2").s().p("AAtARQADgDABgEIADgCIABALgAg0gCIAIABIAeAGgAApgJIgDgEIgEgEIAAgBIALACIAEAAIABAKQgDgDgGAAg");
	this.shape_70.setTransform(-43.3,13);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A39791").s().p("ABQATIgpgFIgJAAQgUgCgSgEQgZgEgZACQAOgEAPAAIALABQAaAFAbADIAIABIgEgBQAHABAGgCIAgADIgWgKIgBgDIgCgCIgNgFIAcAEIAOATIgDAFIgFgCgAhWgCIgBgDQgEgQAaABIgGACIgIAAIgDADIgCAAIAAACQgCAEACAGIABACg");
	this.shape_71.setTransform(-46.2,7.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B6A299").s().p("AAAABIAAgCIAAAAIABAAIAAAAIgBAEIAAgCg");
	this.shape_72.setTransform(-39.3,6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#ABA7A0").s().p("AgngGIAQACIAGAAQAUAFAYADIACAAIALABIAAACg");
	this.shape_73.setTransform(-43.3,5.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#221A15").s().p("AAFAGIgYgGIAOgCIAEAAIAUgDIgEABQgaAGAcABIAAABIgKACgAATADIABAAIgBABg");
	this.shape_74.setTransform(-41.1,5.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0A0301").s().p("AAAAFIgCAAIgCgHIAEgBIAAgCIACACQAGADgIAFIAAAAg");
	this.shape_75.setTransform(-39.1,5.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#594D46").s().p("AA8AWIAKgCIABADgAANANQAGgEgJgEIAFABQAOADAOADIAFABIgOACIAYAHQgYgDgVgGgABFALIABAJQgcgCAbgHgAA5AGIANACIgMgDIAAgFIADAAIAEgDIgLgBIgCgBQgSgGgTgDIgPgCIADAAIAoAEIACABIAiAJIgEANIgDgCIAAACIgVACQAFgBABgGgAgrACQAHgCAAAAIAEAAIAMABIAOAKgAhHACIgCgBIAAgFIAcAGgAhLgJQgDgHAAgHIACAAIADAAQAOAIgMgIIAgACIgTABIgCACIgBAAIABAAQgFADABAHg");
	this.shape_76.setTransform(-46.4,3.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#251711").s().p("AgEgCIAJABIgEACIgBACQgBgDgDgCg");
	this.shape_77.setTransform(-40.5,3.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#8F9694").s().p("AAQgIIgSAOIgNADg");
	this.shape_78.setTransform(-7.4,22.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#746B62").s().p("AAAANIAAAAIgBgIQAAgFgDgGIADgGIAGAag");
	this.shape_79.setTransform(-2.6,15);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#828B8A").s().p("AgNAWIAAgBIAPAAIAJgJIgEghIACAEIAFAdIgKAKg");
	this.shape_80.setTransform(-12.9,24.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#847871").s().p("AB/AOIgaADIAAgCQAMgBALgDQABgBABAAQABAAAAAAQABAAAAAAQABAAAAABQABABgBAGgABSAIIgEgCIgFAAIAKgFIASgEQAFAAADgCQADgCAAgDIADgBQgBAFAEABIAAABIgeAEIgGAIIAAAAgAh8gPIgFgCIALABQAUABATAGIAeAKg");
	this.shape_81.setTransform(-24.9,20.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CAADA1").s().p("AgDAOIgBgWIAAgSIACAlIAHAQg");
	this.shape_82.setTransform(-11.3,18);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8F7669").s().p("AAAgIIAAAAIABARg");
	this.shape_83.setTransform(-11.9,16.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C9BAB5").s().p("AAAAAIAAAAIABACIgBgCg");
	this.shape_84.setTransform(-15.1,4.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A09691").s().p("AACAwIAFgFIgBADIgBAFIAGAAIgSAGQAGgEADgFgAAYAmIAAAFIgCABgAASALQAAgVgQgQQgGgHgIgEIAFABIAXAUQACAcAGgNIAAAjQgHgDgFAFQAGgLAAgOgAgFgvIACAAIAEADIAEACIAAABgAgXg4IANAGIAAABIAAAAg");
	this.shape_85.setTransform(-15.8,14.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EBE7E5").s().p("AACgHIgBADIAAAJIgCADg");
	this.shape_86.setTransform(-1.7,9.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#809293").s().p("AgCgEIAFAAIgBAJIgEgJg");
	this.shape_87.setTransform(-2.4,16.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8C817A").s().p("AAAAAIAAAAIAAABIAAAAIAAgBg");
	this.shape_88.setTransform(-1.4,6.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#637A7D").s().p("AAAgDIAFgJIgFAOIgEALIAEgQg");
	this.shape_89.setTransform(-1,3.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#736A60").s().p("AALgJIAAABIgVARg");
	this.shape_90.setTransform(-6.1,-49.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B6A39A").s().p("AAAAAIAAAAIABAAIgBABIAAgBg");
	this.shape_91.setTransform(-20.5,5.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#A3AAA8").s().p("AAGACIgDADIgFACgAgGgGIANAEIAAACg");
	this.shape_92.setTransform(-1.2,-9.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5A4C43").s().p("AgDAAIAAgBIAHACIABAAIgCABIgGgCg");
	this.shape_93.setTransform(-21.7,5.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#272424").s().p("AABACQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIAAABIABACg");
	this.shape_94.setTransform(-14.7,-17.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2E1E1A").s().p("AgEACIgCAAIgBgCQAEgEADADIAEABIAEACIgJABg");
	this.shape_95.setTransform(-12,-16);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#988680").s().p("AgBACIAIAAIABAAIACACgAgJABIADAAIABABgAAAgBIAAgCIADADIgDgBg");
	this.shape_96.setTransform(-12,-15.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#8F7F77").s().p("AgHgBIgDgBIAAAAIAVAFg");
	this.shape_97.setTransform(-14.5,-14.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#655A55").s().p("AAJAVIgBgBIgFgKIAAgBIAFABIADACIAAAAIABABIAGADIABACQgEgDgEAEIABACgAgIAFIAAAAIAAABgAgSgKIAAgDQAIALgCgOIADAEIAAAIIAAABIAAAAIAAAAIgDACgAgLgUIABACIgCABg");
	this.shape_98.setTransform(-13.9,-17.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#AC9082").s().p("AAJAOIACAAIABABgAABACIAAgCIADADIgDgBgAgLgNIAAgBIAAAAIACAAIABAGg");
	this.shape_99.setTransform(-14,-18.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#251B17").s().p("AgCACIAAgBIAAgDIAFAFIAAAAIgFgBg");
	this.shape_100.setTransform(-13.6,-21.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#927F7C").s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_101.setTransform(-12.7,-21.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#9F968F").s().p("AAAACIAAgDIAAACIAAABg");
	this.shape_102.setTransform(-9.3,-21.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#5E534C").s().p("AAhAFIAAAAIABAAIAAABgAghgEIAAAAIABgBIAAABIgBAAg");
	this.shape_103.setTransform(-9.4,-21.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FAF9F8").s().p("AAoAFIAAAAIABAAIABAAgAgpADIAGgHIgFAHg");
	this.shape_104.setTransform(-11.6,-23.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0B0503").s().p("AgBABIgDgBQARgEgNAHIAAAAIgBgCg");
	this.shape_105.setTransform(-2.3,-20.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#9B8E88").s().p("AAFACQgBgCgJAAIAAAAIgCAAIAAgBIAHgBQAGABACAEg");
	this.shape_106.setTransform(-3.8,-21.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#594E49").s().p("AgFAHQgDgCgBgCIAAgBQABgDgBgFIABAAQACAFAEADQAAAAAAAAQAAABABAAQAAgBABAAQAAAAAAgBQADgCgBgCIADAAIABAAIABAAIADADIgOAHIgBAAg");
	this.shape_107.setTransform(-3.5,-20.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#34291F").s().p("AgOgBIAPgIIABABQAOgHgSADIgBAAIgBAAQgCgFgFgBIACgBIACAAIAUAAIABABIAAADIAAAPQgDgBgCAIIAAABQADAHADACIAAACIgDAAIgBABg");
	this.shape_108.setTransform(-2.6,-19.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#5C554F").s().p("AgFABIgBgBIgIgCIAAAAIAKACIAAADIgBgCgAAJABIABgBIAFgCIgFAEg");
	this.shape_109.setTransform(-5.8,-23.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#18100D").s().p("AgIATIgBAAIAAAAIgJgHQAAgEAFgFIAQgNIAFgFQAHgGAEADIgGASIgCACIACACIACAFIgCABIgIACIgBgBIgBgBIgCgBIgBABIgBAAIgBADIAAAHg");
	this.shape_110.setTransform(-5.1,-22.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C1A39A").s().p("AgTAWIACgBIgBADIgBgCgAAAAAIAUgXIgBAEIgRATg");
	this.shape_111.setTransform(-2,-24.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#DACDC5").s().p("AgEgCIACADIgNAEgAAPgEIABAAIgBAAg");
	this.shape_112.setTransform(-32.9,-20.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B4A79E").s().p("ACmCIIABgBIgBAFgAikiDIgCgDIANgFIgLAIg");
	this.shape_113.setTransform(-18,-6.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#40443E").s().p("AgFALQgDgLAOgKIgLAVg");
	this.shape_114.setTransform(-32.6,-22);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#A8A4A1").s().p("AgGgBIAAgBIAAAAIAMgDQAEAGgFACQgFADgGAAg");
	this.shape_115.setTransform(-34.8,-22);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#9B948E").s().p("AhQAXIAHgIIgFAJgABGgXIAJAAIACACg");
	this.shape_116.setTransform(-17.9,-20.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#2B1E15").s().p("AgGAGIACgCIADgEQALgPgFAPIgKAHIgBABIAAgCg");
	this.shape_117.setTransform(-29.2,-21.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#AAA59E").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_118.setTransform(-31.3,-21);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#866B5D").s().p("AgLAPIAAgBIAAgEIAFACIAAABIgEACIgBAAgAAIgOIAEAAIgEADg");
	this.shape_119.setTransform(-30.7,-22.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#937F77").s().p("AACgFIAAgCIADACIgJANg");
	this.shape_120.setTransform(-27.3,-23.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BB9F93").s().p("AgCADIALgTIgSAig");
	this.shape_121.setTransform(-21.1,-23.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#888E91").s().p("AAAABIABgCIAAADg");
	this.shape_122.setTransform(-23.5,-21.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#897A70").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_123.setTransform(-23.8,-29.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#BBB0A9").s().p("AgDAEIAAAAIAAAAgAgBAAIAFgDIgCACIgBABIgCAAg");
	this.shape_124.setTransform(-23.3,-29.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#787D79").s().p("AgQAcIANgbIAUgbIAAAEIgfAyg");
	this.shape_125.setTransform(-30.3,-26.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#746A62").s().p("AgBAAIADAAIAAABIgDgBg");
	this.shape_126.setTransform(-34.2,24.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#060200").s().p("AgFgFIAMABIgCAAIgLAKg");
	this.shape_127.setTransform(-23.3,-30.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E4DED7").s().p("AAFgNIAAgBIAEABQAFAFgNAHIgKAQg");
	this.shape_128.setTransform(-25.6,-29.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#A39993").s().p("AAAAAIABAAIAAABg");
	this.shape_129.setTransform(-25.2,-31.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#050202").s().p("AABAHIgCgKIAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAAAAIACAOIgBgBg");
	this.shape_130.setTransform(-21,-35.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#949895").s().p("AABgEIAAABQgBADAAAFIAAAAIABgJg");
	this.shape_131.setTransform(-39.1,-32.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#595B57").s().p("AgLAMIACgJQADgCABgCIARgLQgGAEAFAEIAAABIgDAAIgGAAIgDADIgBAAIgEADQgDAEgCAGg");
	this.shape_132.setTransform(-37.7,-34.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#513E36").s().p("AAGAFIgBAAQgDgDgFABIAAAAQgGgDAHgEIAAAAQADABACACIACACIACAEIgBAAg");
	this.shape_133.setTransform(-36.2,-34.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#A0968E").s().p("AAzAKIgBAAIgjgDIgCAAIgPgCIBHAEIgCAAIgEAEIgMgDgAhEABIATgMIAFAFQgCgCgEgBIAAABIgSAKgAgoABIgBgEIADAEIgCAAg");
	this.shape_134.setTransform(-31.4,-34.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EDE5DB").s().p("AAGABIgNgBIACAAIAEAAIAJABg");
	this.shape_135.setTransform(-33.6,-32.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#80726A").s().p("AgqAMQAAgKAJgFIgIARQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAgAgJgLIACAAIAygCQgIABgHACIgCABIgLABIgFgBIgmACQAIgEALAAg");
	this.shape_136.setTransform(-34.5,-30.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CCC0B6").s().p("AACABIgGgBIADAAIAGAAIgCABIgBAAg");
	this.shape_137.setTransform(-34.7,-32.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#120B07").s().p("AgYAaIAKgTIAAgCIgCgBIADgJIABAAQAAgFACgFQACgFAEgEIADgDIgBACQAAADABACIABACQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAIAHABQgKAGAaAHIgCABQgLAAgIADIgEADIAAAAQgJAHAAAKIgDACQgGAIgDAAQgDAAAAgHgAAJgfIADAAQAHgCADADIgNgBg");
	this.shape_138.setTransform(-37.8,-31.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#7D6C63").s().p("AgIADIABgBIAAABgAAAAAIgBAAIgBAAIgBAAIADgBIAJgBQgDACgGAAIAAAAg");
	this.shape_139.setTransform(-22.8,-37.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#877267").s().p("AAAAAIAAAAIABAAIAAAAIgBABIAAgBg");
	this.shape_140.setTransform(-24.9,-38.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#070403").s().p("AADAGIgDgFIgFgFIAAgBQAIABADADIgBACIAAADIgCACg");
	this.shape_141.setTransform(-25.6,-38.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#B6A9A9").s().p("AAAAAIABAAIgBABg");
	this.shape_142.setTransform(-27.2,-36.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#0F0A07").s().p("AgLgUIAWAEIABAMIgBgBIgFgCIgEABIgCABIAAgBIAAABIAAAAIAAABQgCAGgBAHIgCAHIgCAFg");
	this.shape_143.setTransform(-25.9,-43.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#1A110D").s().p("AgBACIgCgCIgBgCIACgBQAEgBACACQACACgBADIAAABQgEAAgCgCg");
	this.shape_144.setTransform(-27,-47.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D6C4BB").s().p("AACAVQABgDgDgGIADgBIADAJIgEACgAgFgTIAAgCIABAEg");
	this.shape_145.setTransform(-24.1,-43.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#8A7369").s().p("AgDAEIABAAIgBACIAAgCgAAEgFIAAABIAAAAIAAgBg");
	this.shape_146.setTransform(-24.6,-46.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F5F2EE").s().p("AAAAAIAAAAIAAAAg");
	this.shape_147.setTransform(-22.1,-48.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#917E75").s().p("AghAKIACgBIgCAEgAAZAEIgCgEIACACIAJADgAgQAAIAAAAIAeAAIgBABIAAACgAAOgJIAFgBIAAgCIABAAIAHAFIgNgCg");
	this.shape_148.setTransform(-11.7,-23.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#7D695F").s().p("AAAACIAAgDIABABIgBACIAAAAg");
	this.shape_149.setTransform(-14.7,-26.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#372C29").s().p("AgCAGQACgEAAgEIAAgCIAAgCIADAAIgCANg");
	this.shape_150.setTransform(-14.8,-27.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#90827B").s().p("AgSAAIAEAAIAAAAgAANAAIAGAAIgJAAIADAAg");
	this.shape_151.setTransform(-9.7,-29.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#837A76").s().p("AguAxIAMAAIgBABIgLgBgAAoghIAGABIgFACgAAegxIABAAIABADIgEAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAg");
	this.shape_152.setTransform(-17.8,-21.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#837D76").s().p("AAAAPIABABIgBADgAgQgOIAAABIgPAEgAAegQIACgCIAAACIAAABg");
	this.shape_153.setTransform(-23.3,-23.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#45372E").s().p("AgDADIAGgKIABAAIgBACQgBAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIgDAIIgBABg");
	this.shape_154.setTransform(-19.9,-26.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#060201").s().p("AgFACIAAgBIAAgBIADAAIACAAIACgDIAEAHIgLgCg");
	this.shape_155.setTransform(-16.2,-32.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E4DDD9").s().p("AgDgFIAAgBIAJABIAAABIAAABIgDADIgBAAIgGAHIgCAAg");
	this.shape_156.setTransform(-19.1,-30);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#837771").s().p("AAAABIAAgBIAAgCIAAAFg");
	this.shape_157.setTransform(-20.1,-25.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#C1A59B").s().p("AAAAAIgBAAIACAAIABAAIgCABIAAgBg");
	this.shape_158.setTransform(-15.6,-33.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#AFA79D").s().p("AAAAAIAAAAIAAAAIABAAIAAAAIAAAAIgBAAg");
	this.shape_159.setTransform(-17.9,-32.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#766960").s().p("AATAEIgBgBIADAAIgCACIAAgBgAgUgEIABAAIgBABIAAgBg");
	this.shape_160.setTransform(-17.6,-34.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#7A695C").s().p("AAAAHIgFAAQgCgFAFgIIAJANIgHAAg");
	this.shape_161.setTransform(-14.6,-32.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#372B24").s().p("ABJASIgDgDIAAgBIgCgBIgBgCIAAgBIAMABIABAOQgCgEgFgDgABeANIATACIAKABIgEACIgFAAIgHAAIgRAGQAEgHAAgEgAAvAKIAAgCIACAAIABAAIgDACgAh7AAIACAAIAAAAgAB2AAIAAgBIgGAAIAFgBIAHACIgGAAgABMgGIgFgHIABgDQADAAAAgEIAAgBIACgDIAFACIABACIAAABQgGAJADAFIgEgBgAA0gIIABAAIABAAIgCAAgAgNgPIgGgBIAEgDIAEAEIgCAAg");
	this.shape_162.setTransform(-23.1,-31.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#030102").s().p("AAAgEQAAgBABAGIgBAEIAAgJg");
	this.shape_163.setTransform(-16.8,-39.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#130D0D").s().p("AgOgCIABgIIABAAIAbAMIgOAGIgCgBIAAABIgBAAIgEABIgDABIAAABg");
	this.shape_164.setTransform(-20.2,-44.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#817D77").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_165.setTransform(-21.6,-45.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#848783").s().p("AAAgBIAAAAIABACIgBABIAAgDg");
	this.shape_166.setTransform(-19.2,-47.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#7A756C").s().p("AgDAEIgBAAQAEgDACgEIAAAAIACAAIgGAHIgBAAg");
	this.shape_167.setTransform(-18.9,-48.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#71554B").s().p("AgTAOIAngbIgkAbg");
	this.shape_168.setTransform(-16.7,-50.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#100D0A").s().p("AAQAQIgCgGIgDAFIgVgCIgBAAIgKgVIAWgHIADAAIAMAOIAGARg");
	this.shape_169.setTransform(-16.2,-45);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#B59B90").s().p("AgHAAIAJgCIAGAAIgPAFIAAgDg");
	this.shape_170.setTransform(-12.2,-44.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#7C5D4E").s().p("AAAgBIAAACIAAABg");
	this.shape_171.setTransform(-13,-44.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#A0867A").s().p("AANgIIAEAAIghASg");
	this.shape_172.setTransform(-16.1,-47.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#837169").s().p("AgFgCIAFgBIgBABIAHAGg");
	this.shape_173.setTransform(-11.2,-47.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#BFB0AA").s().p("AgCAAIAFAAIgCABg");
	this.shape_174.setTransform(-6.4,-45.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#786154").s().p("AgLAJIAXgRIgWARIgBAAg");
	this.shape_175.setTransform(-1.5,-48.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#867167").s().p("AguAQIA0gLIAAABIgdAGIgRAEgAAtgPIACAAIAAABIgBABg");
	this.shape_176.setTransform(-7.3,-46.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#7E736C").s().p("AAGgCIAAABIgLAEg");
	this.shape_177.setTransform(-50.8,-11.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#B7AAA7").s().p("AgFACIgBgBIgPgBIgJAAIgDAAIgGAAIAAgBIACgBIAeABIAEAAIAhACIAKACIgtgBg");
	this.shape_178.setTransform(-53.4,-0.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FDFCFB").s().p("AC8DvIgBgHIABgIIABASIgBgDgAhCDMIABAAIAAAAIACABIgDgBgAi8CpIAAAAIAAABgAhXCRIAVACIAUABQgPAAgOAEIgFAAIgEAAIgEABgABEjqIApgGIAGABQACAIAGADIADgNIABAAIAoAEIgIAIIAAAJIgeAdIgQAFIg9AuIBKghIgkAWIAAAAIAAAAIgNALIgRABIgSAMIAAgMIgVANg");
	this.shape_179.setTransform(-44.5,-7.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#E1D7D1").s().p("AhIAmIAlhMIAIgSIAAAAIAFgDIAlgCIgoAGIgvBrIAVgNIAAAMIASgMIARgBIANgLIAAAIIgUAFIghANIgVAOgAATgHIAQgFIAegdIAAgJIAIgIIgogEQAIgDAIgBIAHAAIAWACIgMAYIgWAcIgNAaIgWAJIgMAEIAjgWIhJAhgAAVg8IALgCIgDANQgGgDgCgIg");
	this.shape_180.setTransform(-35.1,-25);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#080201").s().p("AgKADIAAgBQgDgEAJAAIAOACIAAAAIABACIgSABg");
	this.shape_181.setTransform(-43.2,-17.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#AFA8A2").s().p("AABAAIABAAIgDABIACgBg");
	this.shape_182.setTransform(-49.6,-16.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#78807F").s().p("AgCACIAFgFIgDAGIgCABg");
	this.shape_183.setTransform(-46.8,-18.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#6F7471").s().p("AABAAIAAAAIgBABIABgBg");
	this.shape_184.setTransform(-42.6,-24.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#917164").s().p("AgSAnIAjhNQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIgkBLIgBAAg");
	this.shape_185.setTransform(-40.6,-25.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#AC9284").s().p("AACgIIABgBIADgFIABAAIgGAdQgQgCARgVg");
	this.shape_186.setTransform(-43.1,-19.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#342920").s().p("AgLA8IATgBIACABgAgNA8IgagIIADgHIAGgIIARgZQAFgGADgGIAGgPIABgBIAXgnQAAANAMgOIADgDIgkBNIgEAFIgKALIADATIgBABQgJAAAEAGIAAAAg");
	this.shape_187.setTransform(-42.8,-23);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#BAACA5").s().p("AgDAAIAHAAIgHAAg");
	this.shape_188.setTransform(-37.1,-16.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#5F5749").s().p("AABAAIAAAAIgBABg");
	this.shape_189.setTransform(-66.1,-7.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#877A72").s().p("AgDAAIAHAAIgCAAIgFAAg");
	this.shape_190.setTransform(-57.5,-0.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#DFD4CF").s().p("AAKABIgZgBIAaAAIAFAAIAAABg");
	this.shape_191.setTransform(-59,-0.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#B9A29B").s().p("AADAHIgYgHQgEgDAIgHIAAAAIACAFIAAAAIABABIACABQAKAGAKACIAPAGg");
	this.shape_192.setTransform(-61.8,10.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#51473F").s().p("AAYAvIADgCIAEgEIAJgDIAKgWIgLAhgAgSAqQgBgCgHgDIgQgnIAAgCIgFgUIgBgNIgBgHIABAAQABADADAAIABAAQAHAGAJgNQADAIAJgDIADgBIABAAIAAAAIgSAGQADAEADADIAAAAIABAAQADACAEAAQgEACgCAEQgGAIAAALIAAADQAAANAGAPQAEAJAFAGIgGAAgAgngOIADAGIAEgXQgRACAKAPgAgIgfIABAAIADAAg");
	this.shape_193.setTransform(-69.6,4.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#6D7B7A").s().p("AgfAdIAGgBIgBAAIgLAHgAAAAAIABAAIAJgKQAMgOAQgKIgmAkIAAgCg");
	this.shape_194.setTransform(-69.4,-5.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#100C09").s().p("Ah9BOQADABADgCIAJgGIABABQgGAIgGAAQgCAAgCgCgAhqAtIAAAAIgBAAgAhQATIAmgkIAEgDQAZgPAagMQAbgMAbgJIAOgFIAtgGIgxASQgZAKgXANQAFgFAIgFIgtAUIggASQAAADgDACQgDACgEAAIgDADQgFADAAACIgUAXIAagUIAEgDIAHgBIgLAIQgEACgBADIAAAAIgUAQIgNADQAFgHAAgKg");
	this.shape_195.setTransform(-61.4,-7.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#7B9192").s().p("AAAgBIAAgCIAAAFIAAACg");
	this.shape_196.setTransform(-78.7,-17.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#4B4D4C").s().p("AAAAAIAAgBIAAADg");
	this.shape_197.setTransform(-78.7,-17.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#AE8675").s().p("AgGAKIANgUIABgBIgOAXIAAgCg");
	this.shape_198.setTransform(-76.3,-19.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#A2938B").s().p("AAJAHQgJgHgJgCIAJgDIADAAIgBgBIADgBIAFAPIgBgBg");
	this.shape_199.setTransform(-66.2,-23.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#825F52").s().p("AgBABIADgBIAAABIgDAAg");
	this.shape_200.setTransform(-66.2,-24.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#A49E97").s().p("AgMAVIAXgEQgHgLgEgLQAHgHAGgJIABAnIgDABIgLACIgNABIABgBg");
	this.shape_201.setTransform(-69.4,-27.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#5E6B65").s().p("AAAAXIAAgnIABgGIAAAHIAAAXIgBAPg");
	this.shape_202.setTransform(-68,-28.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#726F68").s().p("AgLAUQAJgSALgQIADgGIgBACIgWAng");
	this.shape_203.setTransform(-41.4,-26.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#37322B").s().p("AgEAOIABgDIAFgQIACABIAAACIgJASgAAFgPIABAAIgBABg");
	this.shape_204.setTransform(-39.7,-30.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#DFD6CE").s().p("Ag8ApIAQgNQAAAGgDAFIgEACIgBABIgCAEIgCAHIgDACIgBABIAAgPgAgCgNIAEgGIAogkIAKARIAJALIgSgUQgcARgNAUIgMAGIAIgJg");
	this.shape_205.setTransform(-61,-39.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FAF9F6").s().p("AALgSIASATIAAABQgBAHgKAFIgGAAQgWgBgSAGQAMgTAbgSg");
	this.shape_206.setTransform(-57.8,-42.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#7B7F7A").s().p("ACZA5IABAAIAGABQgBADgKAGIgFADQAOgIgFgFgAiUgxIgBgBIgIgKIgCgJIAUAcIgGABQgHADgHABQAJgGACgHg");
	this.shape_207.setTransform(-40,-37);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F9F5EF").s().p("AgHAJQAKgOAEgRQAFgEACAFIADAGQABADACACIgnAjIAMgQg");
	this.shape_208.setTransform(-58.8,-43.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#818582").s().p("AABAAQgBgBgBgDIgCgGQgDgFgFAEIABgCQAGgGAFAGIAAADQgBAHAEADIAGAIIACAJg");
	this.shape_209.setTransform(-57,-44.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#19110E").s().p("AhzB6IAHgEIgPAVQACgJAGgIgAhnBvIAAAAIgBAAIABAAgAg8BCIAOAAIgLADIgEACIABgFgAgfAwIAAAOIgBABgABohIIARgEIAAAAIABACIACACgABXh1IgGgKIgBgBQAAgSAIAOIAIARIAPAXIgFACg");
	this.shape_210.setTransform(-64.7,-32.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#55483D").s().p("AABAIIAAgDQgEgGgHAGIABgHIAUgFIAAATQgIgNAAARIABACQgEgEABgGgAgIgMIAHgEIgHAIIAAgEg");
	this.shape_211.setTransform(-57,-46.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#8A8E88").s().p("AgJAFIAPgLIAEAAIgBACQgDAFgHABIgIAFIAAgCg");
	this.shape_212.setTransform(-57,-48.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#AB8F80").s().p("AACAUIgIgRIAAgTIAMgDIAAABQgWAGATAgIgBAAg");
	this.shape_213.setTransform(-55.2,-45.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#988277").s().p("AAKASIABgDIAEAFIgEAAgAgOgTIABAAIAPAVIgCABg");
	this.shape_214.setTransform(-53.6,-41.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#908984").s().p("AgIABIARgBIgNABg");
	this.shape_215.setTransform(-50.9,-52.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#4F4540").s().p("AgKgDIAQgBIABACIAEAAIgUAHg");
	this.shape_216.setTransform(-52.5,-51.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#766B62").s().p("AgIAKIABgCIAAACgAAEgIIAFgBIgDACIgDABIgBABg");
	this.shape_217.setTransform(-53.7,-49.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#8E999A").s().p("AgOAPIAagVIgBgHIACgBIACAKIgYATg");
	this.shape_218.setTransform(-54.9,-50.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#6D645B").s().p("AAAAAIAAAAIAAAAg");
	this.shape_219.setTransform(-1.3,-51.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#748180").s().p("AgOALIAdgWIgdAXIAAgBg");
	this.shape_220.setTransform(-7.5,-54.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#977E71").s().p("AAOgJIAKgEIguAbg");
	this.shape_221.setTransform(-2.4,-54.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#735C4F").s().p("AAAAAIABgBIAAABIgBACIAAgCg");
	this.shape_222.setTransform(-7.3,-53.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#81685B").s().p("AgBABIABgBIACABg");
	this.shape_223.setTransform(-14.6,-48.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#EFEFEA").s().p("AAKgDIgCABIgRAFg");
	this.shape_224.setTransform(-24,-49.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#595048").s().p("AACgDIAAgBQAAAEgCAEIgBABQACgGABgCg");
	this.shape_225.setTransform(-22.1,-51);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#807C78").s().p("AAAgGIABABIgZALIgGABgAAdgDIAAgCIACACg");
	this.shape_226.setTransform(-18.3,-53.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#676968").s().p("AgMAGIATgKIAGgBIgYALIgBAAg");
	this.shape_227.setTransform(-22.1,-52.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#1F1611").s().p("AgnAUIAHgIQAJgBADgGIABgCIAYgTIAVgIIAOgBIgBABIAAABIgSACIgCADIABAHIABADIAJgBIgFACIgLABIAAABIgCABIgFAAIgCAEQgGAEgDAIIgCACIABAAIgBAEIgMADIgVAFIAAgGg");
	this.shape_228.setTransform(-53.9,-49.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#8B8077").s().p("AgUABIAFgBQASgBASABIgkABIgFAAg");
	this.shape_229.setTransform(-49.3,-50.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#524541").s().p("AAAAFIgCgDIgBgCQAGgGABADIAAACQgBAGgDAAIAAAAg");
	this.shape_230.setTransform(12,16.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#AD9185").s().p("AgKAJIAKgJIALgLIgVAXg");
	this.shape_231.setTransform(7,21.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#8C6C61").s().p("AgSAaQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAEgEIABgBIAkgtIgEAIIgXAiIgMALg");
	this.shape_232.setTransform(8.7,18.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#362C21").s().p("AgDAPQgMgCAHgHIAKgNIAIgHIABAKIgBABIgEADQAAABABAAQAAABAAAAQAAAAABAAQAAAAABAAIAAABIgJAKIgCACIgBAAg");
	this.shape_233.setTransform(6,21.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#53453A").s().p("AgLAIQABgJAPgHQgFAHALABIABAAIgKAEIgLAFIgCgBg");
	this.shape_234.setTransform(4.5,22.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#95857C").s().p("AhWAnIAAAAIA8grQgcAWgdAVgABVgKIACgCIAAADIgMADgAAkgmIAAAAIAAAAg");
	this.shape_235.setTransform(-2.8,23.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#55453A").s().p("AgKgDIADgNIADADIAAABIAFAMQACAFADADIAFAJg");
	this.shape_236.setTransform(1.3,21.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#8A9494").s().p("AgNATIAQgWIAMgPIAAACIgSAcIgJAHIgBAAg");
	this.shape_237.setTransform(7.5,18.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#556060").s().p("AgKAQIAGgJIAHgLIAIgNIgBAIQgFAFACAHIgDAEQgFALgJAAg");
	this.shape_238.setTransform(10,14.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#B5ACA7").s().p("AAAgDIAAAAIACAAIgDAHIABgHg");
	this.shape_239.setTransform(9.8,12.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#8E776D").s().p("AgBAAIABgCIACAFg");
	this.shape_240.setTransform(1.1,13.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#E7D7CF").s().p("AgNAnQgDgDgCgFIgGgNIAAAAIADACIAAABIAPAVIAhgUIAAABQgNAPgSAHQgFgCgEgEgAgXgbIgBABIAAgDIgCgIIACgHIABABIADADIACADQAFAIAFAFg");
	this.shape_241.setTransform(3.3,18.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#695751").s().p("AALBAIAAABIAAABIAAgCgAACgrIgMgWIABABIATAeIAAAAIgIgJg");
	this.shape_242.setTransform(8.6,5.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#BF9C8E").s().p("AAAAyIAAgBIAAgGIACABIAAAGgAgBgxIAAAAIAAABIAAgBg");
	this.shape_243.setTransform(9.8,6.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#B7B1AB").s().p("AAEgCIAAABIgHAEg");
	this.shape_244.setTransform(19.4,8.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#BE9B8D").s().p("AgMAWIADgGIACAAIgIAPgAAKgYIAGgGIgMAXIgDACg");
	this.shape_245.setTransform(12.1,13.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#9EACAD").s().p("AgOA4IAGgHIgGAJIAAgCgAAJALIgCALIAAABIAAAAIgHANQAFgMAEgNgAALg5IAEAJIAAAdIgBAKIAAACQADgYgGgag");
	this.shape_246.setTransform(10.4,10.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#D1C9C1").s().p("AAFAKIAAgCIgTgcIACABIAbAkQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAABIgIgLg");
	this.shape_247.setTransform(9.1,1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FBFBF9").s().p("AgkBNQgEgDgCgEQgFgLgGgIIgBgBIABgBIAOACQAKAKAMAAIAFgBQgJAKgNAHIgCAAgAAKBIQAPgXAHgaIAEgIIAAgHIAGgBQADgBABgDQACgVABgWQAAgIgCgHQgDgJgEgIQAAgBABgBQAAgBAAAAQAAgBAAAAQABAAAAAAIABACIAIATIABABQAFAagDAYIgFASQgDAMgHANIgIANIgGAHIAAACIgLAOg");
	this.shape_248.setTransform(6.4,10.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#BDAFA8").s().p("AgGAFQAIgHAKgIIABABIgHAJIgSALIAGgGg");
	this.shape_249.setTransform(28.3,4.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#BBA9A4").s().p("AAAgBIAXgNIgtAdg");
	this.shape_250.setTransform(34.9,0.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#8F776B").s().p("AgJAGIANgJIAMgHIgdAVIgCAAIAGgFg");
	this.shape_251.setTransform(62.7,-16.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#829090").s().p("AgCgGIABgBIAAACQABAFACAEIABABIgEADg");
	this.shape_252.setTransform(62.9,-20);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#A1877E").s().p("AAAAAIgBAAIAAAAIADABIgCgBg");
	this.shape_253.setTransform(68.2,-21.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#9A9286").s().p("AgOAGIgDgSIAPAUIATgKIABAAIgIAEIgYALIAAgHg");
	this.shape_254.setTransform(66.3,-21.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#8C837D").s().p("AAAAKIgCgEIAAgDIAFgDIACAMIgFAFIAAgHgAgEgPIAAgBIAAAAIABABIAGAPIgFADgAgEgQIAAAAIAAAAgAgEgQg");
	this.shape_255.setTransform(51.9,-11.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#869091").s().p("AgJAFQAJgDAHgFIAAAAIADgBIgFAEIgOAFg");
	this.shape_256.setTransform(53.2,-2.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#67544D").s().p("AAGARIgGgFIgGgIIgCgFIgGgTIABgBQACANAGALQAEAGAEAEQAFAEAGADIAAACg");
	this.shape_257.setTransform(46.5,-2.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FCFDFC").s().p("AgXAjQgDAAgDgCIAHABIAAABIAAgBQAKACAJgBIgLABIgJgBgAAHAhIAAAAIgEABIgDABIAHgCgAgrAIIAGAIIACALQgHgIgBgLgAAJgJIAJgJQADAEADAAQgIAEgIACIgBAAIACgBgAAmgZIABgBQADgEABgFIABAAIAAABIAAAEIgBABQgCAFgCAAIgBgBg");
	this.shape_258.setTransform(51.5,-5.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#504F47").s().p("AgCAAIAAAAIACgBIACgBIABAFg");
	this.shape_259.setTransform(44.6,-4.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#C3B9B2").s().p("AgEABIACgBIAHgEIAAABIAAAIg");
	this.shape_260.setTransform(43.8,-4.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#8E837D").s().p("AgJA5IgBADIgCABgAANAJIAJAFIADAAIACAAIgGAFgAgNgZIgBgIIAHACIABADIAFATgAgUg1QgCgCgEgBIAAgBQAMgIACAMQgEgBgEABg");
	this.shape_261.setTransform(45.7,-1.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#45453D").s().p("AgFAAIAGgEIAFAFIAAADIgBABg");
	this.shape_262.setTransform(44.3,-7.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#7C706A").s().p("AgJACIAQgIIABgBIAMAGIgDAEIgBgBQgCgKgMAHIAAABIgLAGIgKACQAJgEABgCg");
	this.shape_263.setTransform(42.8,-7.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#89999A").s().p("AAAABIAAgCIABAAIgBADIAAgBg");
	this.shape_264.setTransform(44.8,-10.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#DED0CB").s().p("AAKASIABAAIAAABgAgKgHIABgLIAEAIIACAKg");
	this.shape_265.setTransform(48.1,-3.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#746D5E").s().p("AgBABIABgBIACAAIgCABg");
	this.shape_266.setTransform(46.2,-8.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#8D7F79").s().p("AgBAaIABgFIAAgGIABgCIABAVgAAAgVIAAgMIAAAAIACAQIAAAFg");
	this.shape_267.setTransform(47.3,-8.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#020101").s().p("AgFARIgBgDIgFgGIAGgDQAEgDgBgFQgBgFgDgCIABgFQAFgDgBgHIAAgBIADgEIABABQAAABAAABQAAAAABABQAAAAABABQAAAAABAAIAGABIAAAVIgLAKIgBAIIAAAAQgCAIgCAJg");
	this.shape_268.setTransform(45.6,-9.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#59686E").s().p("AgBACIAAgCIAFgTIAAAEIAAABIgIAig");
	this.shape_269.setTransform(45.9,-15);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#C3A395").s().p("AAAgBIAAABIAAACg");
	this.shape_270.setTransform(47.5,-10);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#B28A7C").s().p("AgLAGIAKgHIALgIIACAAIgWATIgBgEg");
	this.shape_271.setTransform(60.1,-14.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#E3DDD8").s().p("AABgHIABALIAAAGQgHgYAGAHg");
	this.shape_272.setTransform(56.9,-16.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#DFC3B6").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAABgAAAAAg");
	this.shape_273.setTransform(51.5,-12.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#F9F7F5").s().p("AgBABIADgKQAAAJgDAKg");
	this.shape_274.setTransform(51.7,-14.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#A87B6B").s().p("AACgFIAAABIgDAKg");
	this.shape_275.setTransform(51.7,-14.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#8D989C").s().p("AgCAEIACgEIADgEIgEAJIgBgBg");
	this.shape_276.setTransform(51.6,-20.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#F2E6DF").s().p("AAAAKIgBgQIACgEIABAPIgBAGIgBgBg");
	this.shape_277.setTransform(47.5,-11.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#C0B7AE").s().p("AABAfIAAgCIgBgBIAAgBIgBgOIgCgWIAAAAIgCgQQABgFACAAQAAAIACAHIADAXQgGgHAHAZIACAFIgFAAg");
	this.shape_278.setTransform(56.7,-18.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#BEA498").s().p("AgDgFQADAEAEACIgGAFIgBgLg");
	this.shape_279.setTransform(59.4,-17.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#90A0A0").s().p("AgHgNIAGAIIAJATg");
	this.shape_280.setTransform(60.3,-28.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#291E19").s().p("AhVCFIAAgCIAEACIgEAAgAhyBXIgCgFQAEgDgCgFQgBgGgEgCIAEgFIABgCIABAPQAAAIAAAIIgBAAgAhcA6QgDgFgFAAIgCgCIgCACIABAAIgCABIgDADIABgIIALgLIAAgVQACAAACgBIAAAMIAEAJIgBAaIgBACIgCgHgAgsAnIAEgFIABAEIADAMIgDABIgBABIAAABIgEgOgAgwAbIAAgBQgDgHgBgHIAAAAIACgGIgCAGQgBgJABgHIACgQIADgdQABgFgCgEIAGgGQgCATAAAXIAAAFIgFAMIAAAIIAAACIAAgCIAAACIAAAAIgBAAIAAABIABABIABATIABACIgBgBgAgwAaIAAAAIAAAAgAhvAMIABgJIAJghIgCAKIgDATQgBAFABAHIgEAEIgBgDgAAWgIIAFgBIAIgEIgLAJIgCgEgAB0hUIAEABIgCAAIgJAEgAgmiEIAGADIgDAAIgMAFg");
	this.shape_281.setTransform(56.5,-13.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#66615D").s().p("AgYASIAFgLIADgDIABgCIgCAMIgFAHIgCgDgAAWAAQAAgFgBgGIgCgJQAGAIAAALIAAACQgCAAAAAFIgBgGg");
	this.shape_282.setTransform(53.9,-21.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FAFBFB").s().p("AgVAbIABgBIABgBQAAgDACgDQAEgGAAgHIABgCQgEAXAAAYIgBABIgDALQgCgSABgSgAAIghIAAgBIABgBQADgFAEgEIgBAHIgBABIgEAEIgDAEIABgFgAgEgeIADgFIAAAAQgBADgCADIAAgBgAAGgzIADgFIADgEIAGgBIAEgBIgCAFQgHACgGAEIgBADIgBABIgBABIgCABIAEgGg");
	this.shape_283.setTransform(50.8,-17.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#A69285").s().p("AgBABIgBgBIgBAAIAEgBIADABQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDgBg");
	this.shape_284.setTransform(58.6,-33.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#798B8A").s().p("AABAAIAAAAIgBABg");
	this.shape_285.setTransform(50.5,-25.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#968884").s().p("AgVAHIAAAAQAXgaAVATQgJgCgKAAIgFgDIgJAHIgLAHg");
	this.shape_286.setTransform(52.8,-26.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#89867F").s().p("AgLADIARgGIAGACIgIAFg");
	this.shape_287.setTransform(42.1,-28.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#868479").s().p("AgCAAIAFgBIgFADg");
	this.shape_288.setTransform(42.6,-27.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#99928C").s().p("AgTAHIAkgNIADAAIglANIgCAAg");
	this.shape_289.setTransform(46.3,-29.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#A39D96").s().p("AgGAAIACAAIALABg");
	this.shape_290.setTransform(48,-33.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#6F5D51").s().p("AgJAGIgBgCQAKgEAKgFIABgBIgBABIgKAFIAAAAIgEAEIgDADIgCgBg");
	this.shape_291.setTransform(41.9,-37.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#97908B").s().p("AAAAGIACACIgCADgAgBgDQAAgGABgBIABABIAAABIABAEIgCAGg");
	this.shape_292.setTransform(44.2,-47.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#656864").s().p("AgCgBIADgBIALgEIgKAFIgCABIgLAHg");
	this.shape_293.setTransform(42.8,-41.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#281C12").s().p("AAHAAIAAABIgFAAIAAAAIgDAAIgBAAIgBAAIgBAAQgHAAASgBg");
	this.shape_294.setTransform(45.3,-47.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#81817C").s().p("AAHgCIgKAEIgDABg");
	this.shape_295.setTransform(53.3,-46.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#BB9E94").s().p("AAEAEIgJgIIACABIAJAHIgCAAg");
	this.shape_296.setTransform(77.1,-25.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#19120C").s().p("AAFgFIABAAIAAACIACADIALAAIglAGg");
	this.shape_297.setTransform(69.8,-26.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#A09E95").s().p("AgIACIAAAEIAAAAIgWABgAAdgGIACABIgEABIgHAAg");
	this.shape_298.setTransform(71.3,-27.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#565854").s().p("AgJAGQgEgCgBgGIAIgCIAVgBIgYALIAAAAg");
	this.shape_299.setTransform(68.9,-26.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#6F6359").s().p("AgvALQgCgFAAgGQAAAHAEADIABAAIAlgHIAWABIAAADQgNgBgKAEIgDAAIgfAFQgDAAgCgEgAArANIgDgGIgBgBIABAAIAKAIIgHgBgAATgOIAFABIgJAAg");
	this.shape_300.setTransform(72.5,-26.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#5A4C42").s().p("AgCgCIgDgCQAGAEAFAFg");
	this.shape_301.setTransform(77.5,-40.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#A9A098").s().p("AgLgQIAJAJQAJAKAFAOQgJgRgOgQg");
	this.shape_302.setTransform(78.3,-39.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#B9B0A6").s().p("AgLAFIARgJIAGgBIgBABQgLAKgIAAIgDgBg");
	this.shape_303.setTransform(40.1,-2.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#CCCCCC").s().p("AEfBOIDHiBIACgBIAAgBIAQgKIA2gcIABACIAJgFIAMgGQAFABABACIAAAAQgOAFgMAKIgMAIIgPAHIgDgHIgJAFIADAHIgVALQgbAPgaAQIgXARIgXASIgsAgIgMAIIAAgBIgJAGIgLAGQgVAMgUAOIgMAJgApIBYIgBgDIACgBIABAAIAAAEIgCAAg");
	this.shape_304.setTransform(-15,2.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#A9948B").s().p("AgoAVIAAgBIACgBIAAABIgCABIAAAAgAAfgSIAKgDIgJAFg");
	this.shape_305.setTransform(37.7,-4.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#030100").s().p("AACgBIABABIgFACIAEgDg");
	this.shape_306.setTransform(31,-3.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#A68D82").s().p("Ag2AhIAPgHQAGgDAEgFQAOgPAQgIQAGgBAGgDQAZgOAXgQIAYgQIANgJIABAAIAAABIjGCAg");
	this.shape_307.setTransform(23.7,4.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#AF9E98").s().p("AACgBIABABIgFACIAEgDg");
	this.shape_308.setTransform(40.4,-8.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#898C8D").s().p("AgEACIARgJIgZAPIAIgGg");
	this.shape_309.setTransform(28.7,-2.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#73554C").s().p("AgBADIABgDIACgCIAAABIAAABIgBACIgBABIAAAAIgBAAg");
	this.shape_310.setTransform(26.2,-13.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#705146").s().p("AAAgCIAAgEIAAABIABADIAAAJg");
	this.shape_311.setTransform(24.6,-21);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#CAAFA8").s().p("AgCAFQgDgGAAgKIALAWIAAAAIgCABQgEgBgCgGg");
	this.shape_312.setTransform(25.5,-20.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#54473D").s().p("ABTAHIAAAAIABABgAhSgDIACgCIABgCIAKABQgHACgGAEIgBAAIABgDg");
	this.shape_313.setTransform(49.8,-34);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#A19994").s().p("AgOAGIAZgLIAEAAIgHADIgEACIgJAEIgFABIgEABg");
	this.shape_314.setTransform(27.5,-19.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#617374").s().p("AgNgSIAGAFQALAMAIAPIACAFg");
	this.shape_315.setTransform(9.2,0.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#16100D").s().p("AgwCdIghgDIgPgDIgEgBIgSgDIABgEQAcAFAcACQATACASgBQACAAACgCQADgEgBgDIASABIAJgLIgFgeQABgFgBgCQAAAAgBAAQAAgBgBAAQAAAAgBABQgBAAAAAAQgLADgMACIgGABIgJAKIgEAAIABgBQAKgJgLgIIAGgJIAegFIAPAAQgBADABAMIAAAGQABARAHAKQAGALAIgDQAIgCAIgZIATgOQAPAAALgPIACgEIAQgKIgIgKIgBgCIABgKIgHgbIgCAGIgCgDIgBgLIABAAQAPAFgCgPIgBgPQgBgGAAgGQABgRAFgRIABgDIAAgCIAEgLIgBAMIgCAOIAAABIAAACIAAADIgBAKIgBAEIgDAPIACgCQgCAZABAbQAAADACADIAMAYQADAIAFAFIgCANIgKgLIgpAeIgGAFIg8AsIAAAAIgEAAIg0ABgAjbCAIgDAAIgVgCIgMgIIgVgCIgBgBQgEgDACgCIAMACQAJABAIADQAIADAKACIARAEIgBADgAhSBrIADAAQAPAAANAEIABAAIgSABgADCBMIATgdQAJAAAGgLIACgFIABACIAEAAIgDAHIglAugACCAEIADAJIAAADIgBAAIgCAHQgBgJABgKgADqAKIAAAAIAAAAIADgLIAEgTIABgCIABgKIAAgdIAIAYQACAFAEACIACAGQADAGAEgCIABAAIgMAOIgJASIgHADIgFAEIAAgJgAERghIAIgDIgNAPQACgEADgIgACGhyIAMgHIAIgDIgNAHQgEADgCADIgKAIgADKh2QgOgKgRgBQAMgDAMgBIAEACIANAWIgKgJgAC6iXIABgBIAHgEIACAAIAGAEIABACQgIgBgJAAg");
	this.shape_316.setTransform(-12.4,12);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#948781").s().p("AgxAkIARgaIADgDIgIALIgGAJIgGAJgAAvgbIgDgBIgEAAIgBgCIgHgEIAEgBIACAAIAMAKIgDgCgAAWgdIACgBIgBABIAAAAIgBAAg");
	this.shape_317.setTransform(4,-0.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#0E0A08").s().p("ACaBuIAAAAIgDgBIgBgBIAAAAIgBgBIAAAAIAAgCQgEgDgDgEIAAgBIgBgBQADgFgEgFQgDgEgFgDIgGgDIgEgGIAFACQAKAFAIAIIAAABIAFAGIAEAHIADAGIABAEIgCABIgBABIgBgBgABGA1IgggCIABgBIADgBIADAAIgbgHIgMgDQgGgFgIgCIgMgDQgTgGgUgDIAEAAQARABAPAGIAIACQAOACANAFIARAGQAQAGASACIARAEIAAAAIAAABIgKgCgAiqAFIgEAAIgKgBIAPABIAAAAIgBAAgAjeAAIgeAAIgHAAIgbgBIgZgDQgdgEgeABIgBAAIgDAAQAQgGASACQAeACAeAEIAgAEIAeABIgEAAgAE5hQIABgCIAAgDIgOgEIgMgFQgQgBgPgIIgBgBQANACALAEQAPAFAPADIATAGIgTAHIADgDgAFjhhIgDgCIAJgFIgCAEIgBACIAAABIAAACIgBABIgCgDgAFzhkIADgJIABgBIAAACIgEAIg");
	this.shape_318.setTransform(-31.9,-0.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#C1ADA5").s().p("AgGAEIAFgCIgDACIgBAAIgBAAgAAHgDIAAABIgBAAIABgBg");
	this.shape_319.setTransform(6.2,-9.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#5A4941").s().p("AgYAYIAIgFIAIgMIgDAIIgDAFIgJAFIgBgBgAAAAQIABAGIgCABIgCABgAARgWQAEgDAEABIAAABIAAABIgIABIAAgBg");
	this.shape_320.setTransform(5.7,-13.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#E8E2DE").s().p("AAAgBIACABIAAAAIgBABIAAABIgCAAIABgDg");
	this.shape_321.setTransform(6.7,-17.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#352A25").s().p("AgBAAIADAAIgDABg");
	this.shape_322.setTransform(-10,-24.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#847A74").s().p("AAiAVIAAAAIABAAIAAABgAAAAVIAAgEIgBgBIgDgDQgEgJgHgCIgBgEIgBgBIgDgBIAAAAIgBABIABgGQABADADABIABABIAYAUIgJAFgAAcAJIAFgCIADAFIgCgBIAAABIgCAAIgCABIAAACIgCgGgAANANQAEACAEgEIAAABIABACIgDAAIgGABgAgjgMIAAgBIAHACIAAAEIgBABgAAMgTIAAgCIAWAAIgSACg");
	this.shape_323.setTransform(-2.4,-19.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#848482").s().p("AgEACIAJgEIgIAFIgBgBg");
	this.shape_324.setTransform(3.5,-11.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#7C7E7C").s().p("AAGAMIABAAIABAAIgCAAIAAAAgAAQAKIADAAIgBABIgCAAIAAgBgAARAGIAAgDIADAAIAAACIAAABIAAABgAgLgIIgIgDIAFAAIAAABIAKAEgAANgIIgEgCIAIACIgEAAg");
	this.shape_325.setTransform(4.9,-18.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#9D7F75").s().p("AAAgIIABAIIgBAGIAAADg");
	this.shape_326.setTransform(2.5,-23.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#DCC7BF").s().p("AAAgDIABAAIAAACIAAABIgBAEg");
	this.shape_327.setTransform(2.5,-24.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#888A86").s().p("AgKARIAAAAIAAABgAgEAHIAHgKIAAABIAAABIgDAEIgBABIgBACIgBACIgBgBgAALgRIAAADIgBABIgBABIAAACIAAABIgBACIgEACg");
	this.shape_328.setTransform(8.6,-21.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#98908B").s().p("AgEgBIABgBIAHgBIAAAAIAEABQgIACgHAEIADgFg");
	this.shape_329.setTransform(7.8,-15.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#AF8F7E").s().p("AgEAWQgDgBgCgCQAAgDACgFIACgEIAEgFIABgCQAHgJACgMIABAAIgNArIgBAAg");
	this.shape_330.setTransform(10.2,-21.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#564643").s().p("AgBAAQABAAAAAAQAAAAAAAAQABAAAAgBQABAAAAgBIAAABIgBABIgCADg");
	this.shape_331.setTransform(9.9,-22.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#94776A").s().p("AAEAKIgJgVIAAgFIAKAbIgBAGg");
	this.shape_332.setTransform(17.9,-18.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#8C8580").s().p("AAAgBIAAAAIAAADg");
	this.shape_333.setTransform(15.2,-22.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#E7DFD9").s().p("AAAABIABgBIAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIAAAAg");
	this.shape_334.setTransform(19.3,-25.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#B09084").s().p("AAAgGIgCAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAFACACAEQACAEgBAHIAAAAIgEgPg");
	this.shape_335.setTransform(15.9,-26.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#2D1A16").s().p("AgBAGIAAgMQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABIACAAIgBACIgBAIIgBgBg");
	this.shape_336.setTransform(15.6,-27);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#594B44").s().p("AgBgBIADABIAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABg");
	this.shape_337.setTransform(12.8,-27.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#6C4F48").s().p("AAGAEIgDgDIgIgEQAIAAADAFIAAACIAAAAg");
	this.shape_338.setTransform(9.7,-28);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#33231D").s().p("AgEgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABABQAOACgSACg");
	this.shape_339.setTransform(13.1,-27.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#978F88").s().p("AgDAYIADgDIABAGgAABgTIACgHIAAAAIAAADIAAAFg");
	this.shape_340.setTransform(12.3,-25.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FEFEFD").s().p("AlCEtIACgBIgBABgAFCksIABAAIgCABg");
	this.shape_341.setTransform(-19.8,0.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#A09088").s().p("AABACIgFgCIAAgBQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAIABAAIADgBQABABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgCAAg");
	this.shape_342.setTransform(13.3,-29.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#281D18").s().p("AADgBIAAABIgFACg");
	this.shape_343.setTransform(12.7,-30.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#584D45").s().p("AACABIgCgBIgBAAIADAAIABAAIAAABIgBAAgAgBAAIgBAAIAAAAIABAAIAAAAg");
	this.shape_344.setTransform(18.4,-31.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#7D6F6A").s().p("AADgCQAAAEACABQgSAAAQgFg");
	this.shape_345.setTransform(16,-36.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#869D9F").s().p("AACgEIAAAFIAAABQAAABgBAAQAAABgBAAQAAAAAAABQAAAAgBAAg");
	this.shape_346.setTransform(9.9,-23.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#2F201B").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_347.setTransform(8.8,-28.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#867670").s().p("AgBAHQAAgHADgGIgBAGIAAAGIgBABIgBAAg");
	this.shape_348.setTransform(2.6,-25.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#DDCEC7").s().p("AAAAAIAAgBIAAACIAAABg");
	this.shape_349.setTransform(2.6,-24.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FAF2F1").s().p("AAEgCIgBAFQgOgCAPgDg");
	this.shape_350.setTransform(1.3,-27.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#1D1811").s().p("AABACQgFgCABgDIAHACIAAAFIgDgCg");
	this.shape_351.setTransform(0.6,-28.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#4A3E36").s().p("AALAtIgGgGIACgDIAGAFIABACIACACgAgeAbIAAAAIABABgAAcglIgBgCIAEACIgEAAgAAFgoIABgEIACAAIAAAEg");
	this.shape_352.setTransform(1.8,-24.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#0F0A06").s().p("AgIAHIAAgEIAHABIALAEIAAACIAAAAIgCAAIgHADIgKAGgAgEgOIACgDIACAEIgEgBg");
	this.shape_353.setTransform(3.6,-28.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#AB9289").s().p("AACAEIgCgBQgCgDAAgDQACAEADADIgBAAg");
	this.shape_354.setTransform(4.1,-30.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#999F9C").s().p("AABAIIgDgBQADgCgEgJIAAgEIABABIACAEIAEAMIgDgBg");
	this.shape_355.setTransform(2.6,-31.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#312F2D").s().p("AgBAGIADgLIAAABIgCAGIAAAEg");
	this.shape_356.setTransform(3,-33.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#9BADAD").s().p("AABgIIADAAIAAABIgEALIgDAFg");
	this.shape_357.setTransform(2.8,-33.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#9DA5A5").s().p("AAGAcIgKgQIAEgDIAJATgAgGAAIgCgbIAAABIAFAaIgBAAIgCAAg");
	this.shape_358.setTransform(2.3,-37.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#211614").s().p("AgEAGIAAAAIACAAIgCAAgAAEgFIAAAAIAAAAIABAAIgBABIAAgBg");
	this.shape_359.setTransform(11.4,-34.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#70574B").s().p("AAAAAIAAgBIABADg");
	this.shape_360.setTransform(3.9,-34.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#665C52").s().p("AgmA4IgCgFIAFAFgAAkg2IABgBIAEABIgBAAIgDACg");
	this.shape_361.setTransform(0.3,-27.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#BDAFA9").s().p("AgCAAIAFAAIgFAAIAAAAg");
	this.shape_362.setTransform(8.4,-36);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#675142").s().p("AAAAAIAAAAIACAAIgDAAIABAAg");
	this.shape_363.setTransform(5.9,-36.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#1B140E").s().p("AgOAcIAAgBIAAgBIAIgcIABgBQABADAEABQAFACAGAAIAAAAIgBABIgHACIgDAAQgEACgCAFIgBAEIgBADIACACIAAABQABAEAEABIABAAIgLAAQgCADABAEIgEAAIACgHgAARgiIgFAOIAAABIAAAAIgIACg");
	this.shape_364.setTransform(4.7,-36.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#695648").s().p("AgOATIAFgPIASgTIAAgBQALgFgJAHIgLAeIgGAAIgIADIAAAAg");
	this.shape_365.setTransform(7.4,-40.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#2F3D3B").s().p("AgLAQIABgCIAWgfIgMATIgJAQg");
	this.shape_366.setTransform(2.7,-41.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#B7A39B").s().p("AAAAGQABADACAAIgDAHgAgCgLIAAgEIABAAIgBADIAAACg");
	this.shape_367.setTransform(3.1,-39.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#E5D3CA").s().p("AgBADQAAgEABgEIADABQgDAEgCAGg");
	this.shape_368.setTransform(3.1,-40.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#261810").s().p("AgqATIANgTIA6gUIAOAHIgaAFQgOACgKAEIgBAAIgQADIgHAKIgFAHIgBABIgCADg");
	this.shape_369.setTransform(6.9,-43.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#908F8A").s().p("AAAABIAAAAIAAgBIABAAIgBABIAAAAg");
	this.shape_370.setTransform(1.4,-40.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#463732").s().p("AgQAAQAAAAAAAAQAAAAABgBQAAAAAAAAQABgBABAAIABgBIAdAGIgJABQgZAAABgEg");
	this.shape_371.setTransform(7.1,-46.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#757775").s().p("AAAALIADAAIgCALgAgCgVIAAABIAAAAg");
	this.shape_372.setTransform(16.3,-38.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#685B50").s().p("AAAAJIAAgSIABAAIAAASIgBABg");
	this.shape_373.setTransform(18.1,-39.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#41362E").s().p("AgGAMIgBgBIAWgZIAJAAIgUAXIgGAGIgEgDgAgWAPIAAgBIAAABg");
	this.shape_374.setTransform(8.3,-40.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#6D655E").s().p("AgtALIAAgBIAAAAIABAAIABACIgCAAgAAmgGQAGgCgDgDIAEAAIABADIAAABIAAABg");
	this.shape_375.setTransform(6,-41.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#9C928B").s().p("AABgBIAAABIgBACg");
	this.shape_376.setTransform(11.8,-40.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#797B72").s().p("AgCgCIgEgFIgCgDIARAVg");
	this.shape_377.setTransform(15.1,-42);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#8A7165").s().p("AAAAEIAAgFIABgCQgBADAAAEIAAAAg");
	this.shape_378.setTransform(2.9,-41.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#4D3F34").s().p("AgIANIgBgBIAFgCIAAAAQAAABABABQABAAAAABQAAAAAAAAQAAABAAAAIgBAAIgFgBgAAEgLIADgCIADAKg");
	this.shape_379.setTransform(17.5,-40.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#D5C9C1").s().p("AgBADIADgFIgBAFIgCAAg");
	this.shape_380.setTransform(40.4,-30.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#96867E").s().p("AgKAKIALgTIAAAAIAAABIgGARIAQgCIgVADg");
	this.shape_381.setTransform(39.6,-28.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#65605C").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_382.setTransform(37.3,-32.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#B09389").s().p("AAGAZIgBgCIACABIAAABIgBAAgAgGgXIABgBIAAAEIgBACg");
	this.shape_383.setTransform(24.1,-23.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFCC99").s().p("ABWC1IgGgBIACgDIAAgEIACgJIAAAAIABgDIAAgCIgBgBQAAgPgKgNIgBgDIgBgCIAAgDIAAAAIACAAIABABIATADQAFAEAHABIABAAIAVACIgBADIAAABIgFAFIgBABIAAACIAAABIgBACIgBABIAAACIAAABIgBACIgFAMIgBABIgIALIgJAFIgJgCgAAyCrQgNgEgNgDIACgDQAZADAZAAIgCAIIgIAFIgQgGgAA1CbIgVgCIAFgKIABgDIACgCIAAgGIAWgIIAAgBIACAHIADADQAIALABAMIgXgBgADyCXIg6gJIgIgBIgCgBIgKgDIgSgFIgFgBIgBAAIgBgBQgFgEADgHQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAgBIABAAQADgHAHgCIABAAIAHAAIAMACIAJACIAFABIADABIADAAQAIABAIACIARAGIABABIABAAIAHABIAEACIALgCIABgGIgLgbIgFgQIgFgnIAAgBQABgGgCgFQgCgEgGgDIgYgBIgEgBIAAAAIgCAIIACAAIAAALIAAABIgBACIgDAaIgDADIAEAEQACAEADgBQACAAAEgEIADgeIAAAAQABgUAPAKIAAAjIgBAAIABAEIAAABIABADQABACAEgBIADAbIAGAQIgGAAIgegFIAAgBIghgFIANgsIgBAAQACgJgBgJIgBgOIgBgEIgDgFIgDgBIgBAAIAAgBIgBgBIAVgQIACgBIADgCIAGACQAGABgDgEIAAAAIABgBIABgCIAAgBIABgCIAqACIADgCQAJgBADAIIACACQAJALAFAOIAFANIAMAbIADAFIAGATIABAEQADANAAAOIABAHQACAHgCAHIgDAFIAAAAIABACIADACIAAABIAAABIgDAAIgSAAQgLACgLAAQgMAAgMgCgAEAAlQAAABABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgBIgCACgAiUB+IgMgBIgIgBIAAgBIgBAAQgIgLAKgSIAMgQIATgjIAAgBIAAgFIAFgIQgBgBAAAAQAAgBAAgBQABAAAAgBQAAAAAAgBIABgCIABgCIAIgTQAEgIAJgDIADAAIAAgBIABAAIAFABIAAABIAAABIAAAAIACABIABABIAAAAIAAABIAAAAIACACIABABQAFACACADIACAFIABADIAAABQAAAGgDAEIgCADIgBAAIgHAIIgHAJIgSAaIgBACIgYA4gAB5B5IAAAAIgCAAQgVgGgWgCIgDgFIgFACIgBgBIgCgBIgBABIgCABIgBACQgEAEgEgCQgDgBgCgIIAAgBQABgIAEAAIgBgPIAEAAIASgCIANALIAHAGIAIAEIAHACIAJAFIABABQAFAEAGAAIABACIgBAFIgBABIgCADgAAoB6IAAAAIAAAAgAjZB0Ig2gJQgTgDgSAAIARgJIAJgEIACADIAAAAIANgEQAFAHAJgJIAAgBIAEgDIABAAIAAgBIgBABIgFgCQACgKAFgHQAGgHAHgBIABADIADABQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIAAABIgJARIACANIAAADQAIAAAGgIQADgFACgFIgGgDIAHgIIAKgOIgDgCQAIgWAOAOIgBABIgPAEIAPgEIAaAGIgKAXIgBADIgSAaIgGAIIgHAHIgQgCgAAQBlIACgEIABgBIAAAAIADABIABABIAAAFIgHgCgACFBkQgFgBgFgDIgFgCIgEgCIgIgDIgKgFIgEgCQgFgDABgGIAAgHIABgDIABgGIAAgFIAAgCIAAgBIABgDIAAgGIABgHIACgHQADgFAEgEIAHgDIACAAIAEgBQAMAAAKAHIAGADIANAFQAGADACAEIABAAIABgBIAAAIIAAAIIAAADIAAABIgDAKIgIAMIgBABIAAABIgHALIABABIAAABIgBADQAAADgDACIgCAAIgBABIgBAAIgDAAIgDAAgAAZBaQgEgDgBgFIAAgBQAKAAABADQAAACgDAEIgCABIgBgBgAAzBOIgUAAIgFgGIABgDIASgWIABABIARgUIABgEIAXgOQAAAcgKAUIgGAJQgEAFgFADQgFADgFAAgABQAYIABgGQgQAEAPACgAjlAuIAAgHIAQgZIAEgHIAVgbIACABIgPAcIALgQIgBAIQgBANgFALIgDAFQgJAPgOAAIgDADIgDgCgACXAIIgFgCIgJgCIgBgBIgFgBIgHgDIgHgCQgFgBgDgDQgEgDgCgFIgBgDQgCgGADgFIABgCIADgBIABgBIAOAAIAAABQASgBARgGIAJgDIAHgDIAAAAIABAAQAEgDACgEIACgEIABgBIgBAAIAAAAIAAAAIgBgBIgCgBIgKgDIAAABIgGABIgEADQgPAGgPADIgBABQgIAEgKgDIgBgBQgEgBgBgEIAAAAIgBgFIABgFQACgEAFgCIADgBIAHgCIADgBIgCAAQgGAAgGgCQgEgBgBgDIAAgBQgCgHAGgDIAGgDIAIgDIAAAAIABAAIAIgDIAGAAIAMgeQAKgIAFAHQADADgGACIgYAaIACABIADADIAIgGIATgYIAAgBIAAgCIAZgNIANAGIAEAFIALAQIgRBPIABAIQgHACgDAEIgOAFIAAABIAAADIgBAAIABABQgCAHgHAEQgIAHgNAAgACShCIAFAAIgFgBIAAABgAC1htIgBAEQgBAEADADIADABQAGACAFgEIACgFIgBgEIgBgBIACgEIgBgFIgCgCIgEgCIgEABIgDACIgBAEIAAACIgBADIgBAAIAAABgAiPABIgBAAIgLgBIgHgBIgFgBIABgCIACgDIALgGIAJgCIAEABIADAAIAIABIAAABIgDANIgFAAIgGAAgAh5geIgDgCQgDgDgBgFIAAgGIgBgMIAAgBIAAgHIABgCIACgFIADgGIADgDIADgCQALgBAAALIgBAGIAAACQAIAMAFAOIABACIgBABIgBADIgCADIgCABIgEAAIgHAAIgDAAIgBAAIgBABIgCAAIgEgBgAinhDIgEgHIAAgBQgBgEAFACIABAAIABAAIABAAQAHAAADgDIAEAAIAAAAQAPgCgFgOIgCgCIgFgCIAAABIgEAAIgCACIgCACQgPgCgNAFIAAgBIgBAAIgBABQgNgOgBgRIAAAAIABgIQABgGADgHIgBAEQgBAEADADQAGAEAFgFIABgEIAAgFIgBgBIgBgNIgBgCIAAgBQgHgBAAgGIgCgBQgNABAGgIIAGgBIADgCIAHgBIgBANIAAABIABgBQAGgCABgIIABAAQAMgKARAGIABgBQAPABAFAMIABABIAHACIAJAXIAAABIABAAQAFANgDALIgDAHIgCADIgdAgIAAABIgBgBIgBABIgDADQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIAAABIgBAAIgBACQgFADgEAAQgFAAgEgEgAi3h4IAAAAIACAEIAAAAQAGABABgCIAAABIAEgCIgDgJIgEABIgBgBQgHACACAFgAiXijIgBAIIAFAOIgBAEIAAACQAAADACACQAGAEAFgEIACgFIgBgFIgCgCIgDgBIAAgCIADABIAOgGIgcgNIAAAAIgBgBIAAABgAi2ifIABADIgBgEIAAABgAhjhLIAAgFIABACQADAEgCAFIgBAFIgBgLgAhViMIADgGIACAGIAEALIgXAOgAjCiRIAAgBIAAABg");
	this.shape_384.setTransform(-6.4,-29.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#A89B93").s().p("AADACIgBgCIgCAAIgCAAIAEgBIAAABIABABIAAABg");
	this.shape_385.setTransform(17.9,-32);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#9BA29D").s().p("AgCgDIACACIADAEIAAABg");
	this.shape_386.setTransform(26.9,-34);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#6D6861").s().p("AgDAAIgBgCQAEACAFgBIgDAEIgFgDg");
	this.shape_387.setTransform(30,-32.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#996600").s().p("Ai8BuIgDgBIgBgEIgBgCIAFACQAQAEARADIgDADQgPgEgPgBgAjRBrIABgBIAAgBQgHgHgLgBQgNgBgIgJIAEAAIAEABIAMABQAKAIALACIABAAIAAAAIACAFIACAEIgIgBgAi5BfQAHAAAHgCIAegKIAAAGIgCADIgCACIgEAKQgTgDgRgGgAj7BjIgXgHQgQgFgQgEIgBgBIgBgIIAGgWIAbgpIABABIgBAoIAAACIAFAJIgBAAIAAACIAAABIAAABIABABIAFACIAAABQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAIAAAAIACAFQACAGAEAFIACABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAEAEIAHADgAjYBUQgRgNgVgGIgCgDIgCgEIAAgBIgBgKQgBgFgCgFIgBgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIABgEIAAgBIAAgBIAFAEIAAAEIAAABQADACADAAIAEAEIAUAUIAAABIAAABIABABIADABIACAFIAMAQIgBABIAAABIAAABIgHgFgAi2BPQAJgKAHgLIAAgDIAAgBIABgBIAAgBIAHACQAIADAEAJIADADIABABIABADIAAABQgYALgcABIALgHgAjIA3IgBgBIAAgBIgBgGIAAgRIgBgCIAAgCIgBgCIgBgFIAAgBIgBgDIgBgBIAAgBIgBgCIgBAAIAJAAIAHACIAAABIACAAIgBgBIALAAIAAgBIAAgCIABgFIgKgBIgBAAIgQgEIgHgFIgBAAIAAACIgFgBIgdgBIgHgBQgHgCgBgKIgBgDIACgDIgCgBIACgNIAEgHIARgFIAIAAIAFAAIgDABQgHACgDAGIgBADIACAEIAEgBIAHgFQAHgFAHgDIALgDIAKAAIACAAIAiADIAJACQAEABADgCIAOADIgkAyIgBACIABAAIgRAPQgFAFAAADIAIAIIACABIAGAFIgBABQgCADAAADIgBABIgBAEQgJANgNAJQABgMgDgMgAjuAjIgHgFIABgBIgBgBIgBABIgMgKIACgFIAAgBIADgCIACgEIAAgBIAeADIABADIACABIAAABIABABIgJABIAKABIADAEIAAADIAAACIACACIAAADIABAAIADApQgOgUgRgRgAC6AhIADgEIADgBIADgCIABgBIABgBIABgDIAGgCQALgFAIgHIACgCQAPgFALgKQAHgGAGgJIADgDIAWgDIgRACIAHgTIAAABQAKABAKAEIAFACIAFABIgSAHIAQABIgDAGIABABIgOAHQgVAKgUALIgSAJIgvAWIABgCgAh3hAQgOgBgPAAIgEAAIgCAAIgDAAIgHgFIADgBQAhgMAVgcIAIgDIALARIgGASIgBACIAAAEQAEAKgEADIgYgEgACNhFQgHgCgIAAIgBABIgBgBIgFgBIgBgCQgWgMgcAFIAAAAIgDABIgBAAIgBADIAAABIgFAAQgNgFgPAEIAAAAIgEABIgBABIgBAAIgBgHIAWgUQALAGAMABQAGAAAFADQAgARAjADIAAAEg");
	this.shape_388.setTransform(11.8,-24.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#91877E").s().p("AABAAIgCAAIADAAIAAABg");
	this.shape_389.setTransform(26.2,-31.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#A9A49C").s().p("AgSAFIAAgBIAIgCIAQAAIACACQgIAAgFACgAAOgFIAFACIgDADIgCgFg");
	this.shape_390.setTransform(28.3,-31.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FF0000").s().p("Ag1EpQgFgHAAgLIgIgPIgDgmQAAgUgKgOQgIgKgKgDIADgCQAGgJgGgKQgGgNgLgKIgOgMIgDACQgLAEgCgLQgCgKAKgDIAEgDQAMgJANgHIASgOIAPgKIAUgMIAHgDIALgFQAOgJAQgIIAFgEQAagSAfgHQAPgDANgHIAFgCIAMAAIACAAIADgBIADgCQAEgBABgDIABAAIAAAAIABgDIgGgDIgEgEIgCgFIgCgGIAAgCIgBgHQABgGACgFQACgGAHgCIACgCIABAAQAIgFAIgCIADgBQAKAAAKACIADABQAKACAKAEIAJAEQAdAGAdAEIASABIApAAIABAAIACAAIABAAIABgDIABgCIAAAAQADgDAAgGIgDgNQACgGADgGQAJgBAIgFIAGgEIAYgMIAxgZIAxgYIApgVIAvgWIAqgTQAQgIASABIANALIAEADIAPAcQAIARAFASQAEAMAAANIgBACIABAOIgDADIgaATQgFgDgEgFIgBgEQgFgRAAgSQAAgRgLgNQgKgKgMgEQgUgUgYAbIgBABIgBACIgJAHIgCADQgGAJgDALQgFASgKARIgDAFIgDAMIgHATIAAACIgCASIgCAJIABACIAAACQACAGgFAEIgCAAIgBADIgFAAIgNAFIgXANIAAAAIgFADIgBAAIgFAEQgRALgUAHQgWAIgTALIgRAJIgSAJIgIAGIgFAEIgCALIgLAHQgOAJgQAGIgJAFIgTAQQgIAIgKAEIgjAOIgBgBIgBAAIgIgVQgIgSgJgRQgCgJgFgHQgJgNgNgIIgMgKIgBAAIgEABIgCAAIgHAEIgBABIgQACIgQADQgjAJgTAfIgEAKIgLAoQgCAKgBAKIAAADIAAADIABAEIAAAFQAFAPACAPIABALIACADQACAGABAHIABAHIAAAAIAFALIAAACIAIAKIgQAKIgbATIggASQgIAAgFgIgAhmB4QADAHgDgHIAAAAIAAAAgAjVEQQgEgBgBgCIAAgBIgCAAIgMgFQgagMgdgGIgDgBQgUAAgTgDQgcgFgbgIIgigKIgIgCQgQgFgQgEIgBAAIgCgCQACgBADgFIATABIAmAIIA6AOIACgCIAJACIgBgLIAAAAQABgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgHgEgDIgBgKIAGgBQAGgDgBgHQgBgEgDgDIADgEIgOgUIgcgEQgJgCgJgBIgMgBQgSgDgSgCIgSgBIgcgDQgagBAEAQIABADIADAAIADABIAKABIgBAIIgIACQgJAEAFAJQABABAAAAQABABAAAAQABAAAAAAQABABAAAAIASABIAFAAIgDAFIgFAAIgDADQgIAJALAGIACABIACADIACADIgjgHIgngJIgPgGQgLgDgLgGIgCgCIAAAAIgCgFIAAgBIgBgDIgBgDIgEgWQgDgNgFgMIAAgCQgGgMgLgKIgCAAIAAgBIgIgDIgEgDIgBAAIgGgDIgDgBIgBAAIAAAAIgCAAIgOgBIgBAAIAAAAIgDABQgKADgCgIIAAgBIgBAAQgCgIAIgEIAJgDQAIgCAIABIADABIABAAQAegBAdAEIAZADIAaADIAGAAIAGAAIADABIAJAAIAPABIACABIAtABIAEAAIABAAQASABARADQAdAFAeADIARACQATAEATAGIAMADQAIACAHAFIAMADIAbAHIgDAAIgDABIgBABIAgACIAKABIAMAEIAGABIgBABIAIADIABgBIAIAEIgBABIABABIABgCIAHAEIAEAGIAGADQAFADADAEQAEAFgDAFIABABIAAABQADAEAEADIAAACIABAAIgOgGQgDACgFABQgPAEgPAHQgKAFgIAHQgMALgEAQIgBAEIgCAHIAAAFIABAHIABADIADAIQAEAGgCAFQgBAEgFADQgCACgDAAIgBAAgAnpBwIADABIA/AJIBPAOIACgFIABAAQAIgGgGgEIAEgNIgjgJIgCgBIgngEIgHgBIgcgDIgIgBIgggCIgCAAIgEAAIgBAAIgDAAgAhxCuIADgBIADAEgAh8CWIAAgBIAFAHIgFgGgAAnBoQAFgOALgJIgRAaIABgDgAigBpIgKgDIgZgGIgcgGIgJgDQgPgHgQgDQgHgBgGgCQgLgEgLgCIgLgBIg4gIIgQgCIgxgGIg6gGIgRgCIgzgGIgTgDQgQgCgRgBIAAAAIgEAAIgCgBQgGgHADgGQACgCADgDIALgIIAHgEIAPgJQAJgKAAAEIAXgPIAMgHQAXgOAZgKIAygSIAJgDIAKgDQAdgIAfgCIAIAAIAIAAIAEABIANgBIAAABIAIgBIAEAAQANgDAMAFIAHABIA2AKIA6AJIAKABQAdAGAbALQAbAKAdABQAMAAAMACIAKABIABACQAOAHAQACIAMAFIAOAHIgBACIgJAFIgOAEQgfAKgcATIgKAGQgXALgTAPQgNAKgOAJQgSAKgPAOQgFAEgEAEIAAAAgAnQgoIAMgEIAAgBgAHFjjIABgGIACgEIAAgCIAAgBIADgGIAFgUIABgBQAFgEAHgCIAJABIACABQARAFASABIANADIAwALIg1ATIgCAAIglAOIgngJgAEPkIIgCgBQgWgOgagBIAAgBIACgCIAHgCIABAAIAIgDIAagHIAHgJQAPAEAPABIAAAAQgBAGABAFIABACQACAGADAEIAFAFIACABIAFAHIAAAEIABADIAEABIAAAAIABABIAAADQgcgFgbgIg");
	this.shape_391.setTransform(-4.9,-7.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#7E8480").s().p("AAAAAIABgBIgBADIAAgCg");
	this.shape_392.setTransform(27.4,-37.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#C5A596").s().p("AgEARIAJghIgBAWIgHALg");
	this.shape_393.setTransform(23.5,-40.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#22170E").s().p("AlhAxIAAgDQADgGAIgCIACgBIAAgBIAEgCIAYACIgDAAIgLAEQgIADgHAEIgHAFIgEABIgBgEgADMAyIgGgBIgFgCIgFgCQgKgEgJgBIgBAAIAAgBIAAAAIAAgBIAFgGIACABIAnAIIACABIAKACIABABIABACIgJAEIgPgBgAkYAUIgDgBQAAAAgBgBQAAAAAAAAQAAgBAAgBQgBAAAAgBIAAgCIAEgEIAFgEQAKgGAMgFIAHgEQAKgGAJgJQAFgJAKgDIABAAIAAAAIACgBIABAAIACABIABACQAAAAAAABQABAAAAAAQAAABAAABQAAAAgBABIAAACIAAAAIgEADIgIADQgVAbghAMIgCABIgEADIgCAAgAArAQIgHgBQgkgDgfgQQgEgDgHAAQgMgBgKgGIAAAAQgBAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIAAgBIABgCIABgBIABAAIACAAIAAgBIAFACIABAAIABABQAZABAWAOIACABQAbAHAbAFIAGABQAEADACAEIgLAAIgGAAgAFMABQADgBgBgEQAAgGgGgCIgDAAIAAgCIAMAHQAAAAAAABQAAAAAAABQABAAAAABQABAAAAABQAGAEAHgBIABABIABACQgKgDgMABgAD2gFIgBAAQgRgBgSgFIgCgBQAVACAWAEIAGABIgIAAIgDAAgAgFgsIgBAAIgBgBIgBgDIAAAAIAAgBIABgCIACAAIACgBIAFAAIAAAAQAMAAAMADIgBABIgBAJQgOgBgPgEg");
	this.shape_394.setTransform(22.9,-33.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#968A80").s().p("AAFAQQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAQAUgEgWAJgAgPgSIADgBIgDACg");
	this.shape_395.setTransform(18.5,-38.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#B0A79F").s().p("AAHAiIgFgCIgBgCIADAAIALAAIABAAIgGACIgDACIAAAAgAgPghIAMAOIAAABIgCAAg");
	this.shape_396.setTransform(16.4,-38.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#7C6F66").s().p("AAmAgIAAAAIAAADIABACIACAAIgIAIgAgogkIABABIgBABIAAgCgAgQgsQgBAGAHgCIABAAIgDACIgCAAQgHAAAFgGg");
	this.shape_397.setTransform(18.3,-41.4);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#7F8079").s().p("AACADIABAAIAAAAgAAAAAIgBgBIgBgBIABAAIADAFIgCgDg");
	this.shape_398.setTransform(39.8,-38.2);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#0000FF").s().p("AlIEjQAFgDABgEIADAJIgJgCgADKh1IgBgBQgMgCgLgFIgCgCIAAgCIgEgBIgBABQgDgJgGgIIACAAIABAAIACgDQACgEABgGQACgDAAgFQgBgEACgEIgBgFQgCgLAIgGIABgCQAKABAGAIIACACQAOAIANAKQAKAJAGAMQACADgBAEQgCALgKAFIgCACQgEAEgEACIgCAAQgEACgEAAIgHgBgAE4jmIgMgCIAOAAIgBACIgBAAgAENjxIADAAIACABIACACIAAABIgHgEgAEdjxIgOgDQgJgDgKgBIgGADIgHABIgBAAQgNACgIgGQgIgDgGgJQgEgGABgJIABgGIAAAAIABgDQADgFAHgDQASgCANAJIABAAQAIgCAGACQAbgDAbAEQAEAAAEAEQAFAEACAGQAFAOgJAJIgBAFIgHAAIgEABIgNABIgNgBg");
	this.shape_399.setTransform(7.2,-9.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#A9A09B").s().p("AgBABIAAgBIACAAIABAAIAAgBIAAACIgCABIgBgBg");
	this.shape_400.setTransform(33,-39.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#5A4C48").s().p("AAKAGIACAAIgCAAgAgLgEIAAAAIAEgBIACABIgFAAg");
	this.shape_401.setTransform(34,-39);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#665956").s().p("AAAABIAAgCIABADIgBgBg");
	this.shape_402.setTransform(34.8,-40.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#57686C").s().p("AAAADIAAgFIABAFIgBAAg");
	this.shape_403.setTransform(34.3,-45.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#F0EAE4").s().p("AADAKIAAABIAAABgAgBgBIgBgFIAAgBIABgCIAAABIAAAHIABACgAADgLIAAAAIAAADIAAgDg");
	this.shape_404.setTransform(31.6,-42.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#E6DACF").s().p("AgDABIABgCIABAAIAAACIgBABIgBgBgAADAAIAAAAIABAAIAAAAg");
	this.shape_405.setTransform(31.6,-43.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#B2AFAF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_406.setTransform(31.6,-47.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#908A7E").s().p("AgFAGQAAgEACgDIAGgGQADAAAAAFIgIAIIgDACIAAgCg");
	this.shape_407.setTransform(38.4,-45.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#18110D").s().p("AgbAQIgDgHIgCgFIAAgDQABgFgBgDIAHAAQAEgCAAgDIAfgCQADAAADgBIAFgDIALACIAAAAIABACIAAABIAAAAIgBAGIAAABQgHALgNAFIgEABIAJgJQAIgGgFgDIgGAFIgHAFQgHAIAAADQgHADgHgBQgFAAgEADIgEgDg");
	this.shape_408.setTransform(37.3,-46.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#584B40").s().p("AgCAAQgDAEAAAEIAAACIgFABQABgDAHgIgAADgFIAHgFQAEADgHAHQgBgFgDAAg");
	this.shape_409.setTransform(38.3,-46.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#9F8E83").s().p("AgEABIAFgCIAEAAIgFACQgBABgDAAIAAgBg");
	this.shape_410.setTransform(38.8,-48.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#A49991").s().p("AgFgHIALAOIAAABg");
	this.shape_411.setTransform(30.2,-53.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#9C938F").s().p("AgLAxIACABIAAAEIgCgFgAgGAKIALgQIACACIAAAAIgCABIgBABQgEAEAAAEIAAAAIgGAFgAAEg0IAHAAIABACIgBAAIgEgBIgKADIAHgEg");
	this.shape_412.setTransform(32.3,-48.8);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#938981").s().p("AgQAEIAhgHIgeAHg");
	this.shape_413.setTransform(37,-57.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#7E7B76").s().p("AgSAFIAdgJIAIACIgkAHIgBAAg");
	this.shape_414.setTransform(31.5,-54.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#8C7E75").s().p("AgBABIABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIAAAAIABAAIgCABIgBAAg");
	this.shape_415.setTransform(23.5,-54.1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#1B1512").s().p("AARAfIAAABIAGAKgAgVgkIgBgBIABgEIACADIAAABIAEAKIABACQAJAMAFANIACAFg");
	this.shape_416.setTransform(25.8,-50.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#9C8E86").s().p("AAAADIAAAAIAAgDIgBgEIADAAIgBAEIABAFIgCgCg");
	this.shape_417.setTransform(19.5,-56.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#665F5B").s().p("AAAAAIgBgBIAAAAIABAAIACADIgCgCg");
	this.shape_418.setTransform(18.6,-57.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#B89B8D").s().p("AAAAAIAAAAIAAAAg");
	this.shape_419.setTransform(-2.6,-47.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#8F8477").s().p("AgFAGIAMgLIAAABQgJAIAAACg");
	this.shape_420.setTransform(-0.6,-51.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFF00").s().p("AAcGLQgGgEgFgFQgQgQAAgWQAAgWAQgQQAQgPAWAAIAGAAIAQAEQAIAEAHAHQAQAQAAAWQAAAOgGALQgCADgCAEIgGAGQgEAEgGAEIgKAFIgsgEgAmvEbQgOgDgPgBQgFgHgEgJQgGgPAAgNIABgJQAEgMAJgIIAFgBIAEAAIAVAEIANANIAQAVQgEAWgKAMIgDAEIgDADgAAShMIgBABQgSgCAGgPIAAgCQABgGAEgDIABAAIAAgBQADACAEAAQAJADAKAAQAHABAIgBIADAAIACgDQAIgJAJgFIAFAAIgBAAIAAABIgDAAQgJADgEAJIgIATIgBACIAAAAIgHALgABjhgIABABIAAACIgBgDgABZhsIgCgCIAAAAIAAgBIADAEIgBgBgABUhxIAAgBIAAAAIACACIgCgBgABAhzIABAAIgBAAgAGeiqIAAAAQgCgBAAgFIACgLIAEADQAKACAAgOIACACIgIAUIgCACIgDACIgCAAIgBAAgAG4ixQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIAagzIAAgRIgCgJIAIAEIgCAEIAEAhIAEABIgGAQIgBABIAAABIgFANIgZAIQAWgJgVAEgAGujEIABgTIgBAAIgGALIgEgCQABAAgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIAAgBIADgCIgEABIgLghIgKgKIAWAMIAJALIAGAHIgCgKIgDgLQgRgIAHgFIAEgCIAVAEIAAAAIAJAKIADAUIgZAvgAGYjbIABAAIAFALIAAACIAAATIgDAAgAEWjEIAAAAIgDgGIACgLIAAgCQACgFADgFIgDgBIABgBIAFgHIAHgKIARgEIAAAAQALgEAOgBIAagGIAAABQAAADgIABIgVAGIgnAmQgFAQgEABIgBAAQgCAAgCgDgAEBjoQACgFABgPIgDgIIAwgVQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABQgBAEAkgBIAFAAIgHACQgWACgRAJIgLADIABADQgRAMgFAPgAGlkJIgBAAQgHACABgHIAfAHgAAAkcIgHABIgDACIgGABIAAgBIAAgBQABgEgCgCIAIgFIACgDIAHgGIAAgBQAdgdAAAHQAAADgEAGIgHAIIgSAHIARgGIgJALQgOAcAMgNIAAgBIAAABQgBAIgFABIgBABgABYkVIgRAAIAhgTIgBgCIATgOIAAgBQAQgQAKALIADAGIAJAKIACAAIATgJIAogTIgWATIgBgBIgWATIgDABIgWAAIgCgDQgHgIgMgDIgJAHIgfAWgACOkdIgIgHIABgBQAHgBAFACIACACQADADgBAHgAA4kfIACgBIgCgEIAIgIIAlgcIAGgDQAZgFgLANIg2AkIgBAAIAAAAIgDACIgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBgADPklIAcgdIAAAAIAAgBIAEAAQAAgCAJgKIAAgBIACAAIAEgHQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAgBABAAIAFgCQAJgFgKAMIAGAFIgaAhIgYASIgMADgAAckpIAAgBQgEgDAGgIQADgFAHgHIABgBIAegVQAEgDAFgBIAYAEIgGAFIgBAAIg4ArIgEAAQgGAAgDgCgACfk3IgDgCQgGgJALgBIABgBIAWgMIAAAAIAAgBQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgCgBgEAAIAAgBIAAAAQAHgQAigZIAAABIACgBQAMgGAAAKIAPADIAWgOIAAgBQADgDADAAQADgBADACQAGAFABgJIAAAQIgBAAQgJgKgLAMIAAABIgEAEQgEADgGACIg0AsQgHAJgMAGQgGADgGAAQgFAAgFgDgADulyIgmAYIAvgbg");
	this.shape_421.setTransform(-24.8,-18.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#060202").s().p("AgKANIAKgaIAEgDQAOgOAFARIgYAYQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgCACAAADIgJAEIgFABQgDAAAOgKg");
	this.shape_422.setTransform(1.4,-55.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#2B211A").s().p("AiXBPIACgIIAAAIIAAAAgAg7A9IAAgBIABAAIAAABgAAMAPIACgDIACADIgCACIgCgCgAAZAFIgJgJIAGgBIACACQAKAGAMgGIAAAAIgTAIgABygcIgDgEIAJgDIgFAHIgBAAgACDgmQAKgMgKAFIgFADIAYgZQgEgRgPANIAAgBQAMgMAIAKIABAAIAAACIAAATIgCACIgOASg");
	this.shape_423.setTransform(-11.3,-49.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#A28B82").s().p("AgKgBIABAAIAUACIAAABg");
	this.shape_424.setTransform(-0.8,-58.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#716A64").s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_425.setTransform(-3,-57.2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#7D6E67").s().p("AgRAEIAYgFIgYAGIAAgBgAALACQgDgCgDABIAJgEIAEgBIAAADQAAAFgDAAIgEgCg");
	this.shape_426.setTransform(2.1,-58.5);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#1C130F").s().p("AgLGeQgHgKgBgRIAAgGQgBgMABgDIgQAAIAAAAQgEgCABgFIAAgFIgDAGQAAADgDACQgDACgFAAIgGAAIABgFIACgDQACgFACgCQAFgFAIADIAAgkQgHAOgCgdIgXgUIgGgBIgQgEIgGgBQgWAAgQAQQgPAQAAAWQAAAWAPAPQAGAGAGADIgPgCIgGgCIgHgCIgDgJQACgFgEgHIgDgIIgBgSIABgDIABgFQAEgQAMgLQAIgHAKgFQAPgHAPgEQAFgBADgCIAOAHIABABIADABIAAAAIALAGIAAgBIABAAQAEACACgBQAKACAIALQAKANAAAUIgBAAIACASIAAAWIAKANQAAALAFAHQAFAIAHAAIANgEQgIAZgIACIgCABQgGAAgFgJgAleGQIgCAAIgBgBIhCgVIgFAAIgBgCIgpgPIAQAFQALAEAMACQAcAHAbAEQAKABAJADQAVAGAXAEIgSADIAWADIAVACIAMAIIAVACQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABgBAAIAAABgAlsGCQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABgBIgQgBIAMACgAiOGaIAAgCIgDgBQAIgBAJADQAIABAFAEIgbgEgAiuGXIgEgBIAFgBIAPAEIgQgCgABQFzIgiAXIApgeIAKALIAWAUIgFgIQAEADAFADQATgIANgOIAAgBIABAAIgLANQgQAHgBAKIgLADgAjKGSIAGgBIgBACIgFgBgAjkGLIgDgBIgXgEIAcAFIAEACIgGgCgABBFqIgCAEQgLAPgPAAgAmfFiQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAABIgWgGIAAgCIgGABIgMgEIghgNIgFgBIA8AQIAAABIAiALIgPgDgAqHEcIAAgBIABABgAk3DTIAAAAIAAgBIAMADgAo7BwIAAAAQgDAFAGAHIACABIgOAAIgLACgAo8BkQAAgDAGgEIACgCIAAgBQAEAAADgCQADgCAAgDIAggSIAugTQgIAEgFAGIgMAHIgXAPQAAgEgJALIgPAJIgHAEIgHACIgEACIgaAVgAmSAFIADgBIATgFIAEgIIAEgCIAZAJIAAAAIADAAIAVAAIALABQgfABgdAIIgKADIgKADIgtAGQASgHARgIgAkoAAIAEgBIAZAAIgEAAIgIABIgNAAIgEAAgAIIhtIAHgGIAPABIgSAJIgHACgAInh4IgBgBIgKgCIAlgPIA1gTIgwgLIgMgDIAKAAIAsAHIALACQAHABAHAAIgXAIQgXAKgWALIgdAOIgBgCgAhfkmIgBAAQgFgNgOAAIgBAAQgSgGgMALIAAgBIgBAAQgMAOAPgdIAIgLIACgBIAHgHIAAgBQAEgFAAgDIgBAAQAAgIgdAdIgBABIgHAHIgCADIgHAFQgCgCgFABIgCABIAEgLIAIgKIAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIAZgVIABAAIAZgMIAagMIAcADIACAAIANAJIAOgBIAHAEIAHAEQALADAJgMIAfgZIAdgXIALgBIAVAEIAZgGIAIgDIgBABIgJAEQgCABgEACIAAABIgVAPIgPgEQAAgJgNAGIgBAAQgjAYgHARIgBACIACgBQADgBACACQABAAAAAAQAAABABAAQAAAAAAABQAAABAAAAIAAABIAAABIgVAMIgCAAQgJACAFAIIgEACIgEgGQgJgMgQAQIAAACIgUAOIgCABIgeATIARAAIgXAIgAhik5IABAAIABAFQACADAEgBIADgCIABAAIABAAIA2gkQAKgNgZAFIgGADIgnAcIgBAAQgCAEgEAEgAhwk9IA5gqIAAgBIAHgFIgZgDQgEABgEADIgfAVIAAAAQgHAHgEAGQgFAIADADIAAABIABgBQADADAJgBg");
	this.shape_427.setTransform(-9.5,-16.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#665B51").s().p("AgSgEIAbAEIAJAGg");
	this.shape_428.setTransform(78.5,-51.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#E7E1D8").s().p("AAAgCQAcgMgdATIAAABIgCAAIAAAAIAAAAIgBAAIgBABIgGAAQgHAAASgJg");
	this.shape_429.setTransform(78,-55.6);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#A0A095").s().p("AgEgFIAEADIAFAIg");
	this.shape_430.setTransform(73.9,-52.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#73685F").s().p("AgVAHIAYgOIAHgDIgQAKIAYgIIACAAIAAgBIAAAAIABAAIABAAIgnAUg");
	this.shape_431.setTransform(75.6,-54.1);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#746B5F").s().p("AgPgNIACgDIACAAIAAAAIALAMIAQAVg");
	this.shape_432.setTransform(74.6,-51.7);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#B49A92").s().p("AgFABIAEgBIAHAAIgLABIAAAAg");
	this.shape_433.setTransform(80.1,-58.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#605148").s().p("AgEgDIABgBIAMgHQgCAIAGgBIgEACQgBABAAAAQAAABgBAAQAAAAAAAAQAAABAAABIgLAHIgIACg");
	this.shape_434.setTransform(77.1,-56);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#BFB8AC").s().p("AABAAIAMgHIADAAQgXALARgDIgZAIg");
	this.shape_435.setTransform(76.5,-55);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#817C74").s().p("AgJAJQAdgSgbALIgCAAQAAgBAAgBQAAAAAAAAQAAAAABgBQAAAAABgBIAEgBIABAAQAZgQgYAZQgDADgFABIAAgBg");
	this.shape_436.setTransform(78.8,-56.1);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#727671").s().p("AimBDIABAAIAAAAIABAAIgCAAgAChhAIABgBIAFgBIgHADIABgBg");
	this.shape_437.setTransform(54.6,-45.9);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#EAF1ED").s().p("AgCAPQACgIAAgHIAAgBIABABIgCAPgAABgDQACgHgDgEQAFABgDAJIAAABg");
	this.shape_438.setTransform(71.7,-55.4);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#80817A").s().p("AANgEIgBAAIgCACIgWAHg");
	this.shape_439.setTransform(60.5,-49.9);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#D4CABF").s().p("AAAAaIAAABIAAAAIAAgBgAgHgSIABgBQAGgHAGAAIACAAIABAJQgEgEgIABIgFAFg");
	this.shape_440.setTransform(70.8,-55.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#7F8D8C").s().p("AAAAAIABgBIgBACIAAABIAAgCg");
	this.shape_441.setTransform(69.9,-56.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#866C5C").s().p("AgFABIADgCQAEgDAGAAQgIABgEAFIgBABIgBACIABgEg");
	this.shape_442.setTransform(70.6,-57.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#16100C").s().p("AlADHIgDgBIAMgBIABAAIgHACIgDAAgAgvgEIgMgGIACAAIABAAIAJgFQgCAFADAGIgBAAIAAAAgAh0gNIgBAAIgDAAIgGgLIgBgDIgBgBQgFgHgDgJIgBgDIgMgQIgBgBQgGgFgDgIIgCgFIgGgKIAAAAQgDgCgCgEIgKgUIgCgGQgGgOgJgLIgBgDIgEgJIAAgBIgCgDQgBgDgCgCIgBgGIgFgNIgBgCIgCgDIABgBIAAgCQABAHAEAGIADAFIAAABQAJALAFANIAAABQAHAIAFAKIAAABIABACIALAZIAGAKQAJAKAEANQAGAGAFAHIAFAHIADAFIACADIABAFIAAABIAAAAIAAABIABABIABAEIAAAAIACACIAAABIAAAAIABABIAAABIAAABIAAAAQACAFAEABIACADIAAgDIAAgBIAAgBIgCgBIgEgHIAAgCIgEgIIgBgDIAAgIIAAAAIAAgEQgBgMACgMIAAgDQACgJAEgIIAAgBIABgBIAGgIIABgBIAAACIAAABIABABIABABIABAAIgBABIgCACIgBAAIgDAGIgBABQgDAKgCAMIAAAHIAAAMIAAABIAAADIACAMIAAACQAJAJABAMIAAABIgBABIgDAAIABABIAAABIAAAAIgCAAgAiigSIAAgCQgDgHgEgFQgFgGgDgHIgIgOIgDgFIgDgEIgDgIIgIgQIgFgMQgIgKgFgLIgBgBIgBgCIAAgCIgEgKIgLgPIAAAAIgBgBIAAAAQgFgFgCgGIgCgEQgBgFgDgDIgBgBQgDgDAAgDIAEACIAAgBIABAAIgDgDIAAgBQADACACACIABADIAAAAIABACQAEAEACAHQADAIAGAGIAEAFIAGAIQACAEAAADQAGANAIAMQAGAIADAJIABAEIABAEIACADIABABIAEAJIABACQAIAMAHAMIAEAJQAFAEACAGIABACIAEAJIgFABIgCgDgAgMgoIAJgEIADgBIgOAHgABhhaIA0gXIAXgIQgRAKgTAIQgYALgaAHgAD3igIAFgPQAAgHAEgFIgBABQgDAFAAAHIAAACQgBAIgEAGIAAgCgAFDi3IABgBIgBABgAjcjFIAAAAIABgBIgBABg");
	this.shape_443.setTransform(44.3,-38);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#B09790").s().p("AAAAGIAAgCQAAgEgDgBQAGABABgFIAAALQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBABg");
	this.shape_444.setTransform(49.3,-51.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#8D8E8B").s().p("AgOAIIAYgPIAFABIgcAOIgBAAg");
	this.shape_445.setTransform(47.9,-53.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#1D140F").s().p("AANgCIACgEQADgPgDAcIgeAFg");
	this.shape_446.setTransform(48.1,-53.6);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#716258").s().p("AAeAMIgBAAIAAgBQAAgEgDgCIgBgBIgEgFIAHAAIAFAPIgDgCgAgegIIgCgCIADABQALgDALgBIAAAAIABAAIACABIgEAAIgHAGQgHgDgIABg");
	this.shape_447.setTransform(39.4,-51.5);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#CC9966").s().p("AimENIACgCIAAgBIgBADIgBABIAAgBgAlcDuIABABIAEABIAAAAIAAACQgEAAgDACIACgGgAiwDrIABACIAAABIgBgDgAmdDnIgBgCQAJABAJACIABACIgSgDgAlqDnIADgEIACAAIAAABIAAACIgBABIgEAAgAlxDlIACgBIAFADIgHgCgAivDVIAAgCQgBgFgDgEIAAgOIACAJIAIARIAAAAIgBAAIgDAAIgBABIgBgCgAlgDVQgCgDgEgCIgIgDIgJgFIAEABIAFADQAFADAGAAIAGAAIAAAAIAAAAIABAAIACgBIgCADIgBABIgDAEIAAgBgAlSDVIAAAAIABAAIgCABgAiwC8IgBgCIACABQARAKAUABIgaAMgAmJDIIgGgFIAFADIACAEIgBgCgAlWDGIABgCIgBACgAiHC9IACgBIgBABIgBAAgAmYC1IAAABIgBABIAAACIAAABQgGgHAHACgAhnCUIAAgBIAAAAIgBAAIAAgBIgBgCIAAgBIgBgBQgLgMgNgJIgIgJQgGgHgIgEIAFgBQADgEAGgCQAFgCAFAAIADABIAAAAQABgGgCgGIADgDIAEgEQAIgBAJgFQAGgDADgEIAKAEIAHAFQABACADABIAOABIACABIAEAAIAMABIABAAIABgBIAIAAQAEAAADgCQgBAGgDAEIAAABIAAACIgBABIgDADIAAADIAAACIgGAGIAAABIAAACIgIAKIAAADIgBACQgFADgBAGQgRARgWAJIgGAGQgCgHgEgFgAg0BOIABAAIAAAAIgBAAgAjGCXIgKgMIAAAAIgEgKIgIgrIAHABQANAEAMAGIAGABIABAAIAAACIAAABIABACIAAAAIAAAEIAAABIAAABIgDAIQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAAAQgDAJgBAIIgBABIgBAGIAAAAIgDAMIgEgFgAiRB4IgCgCIACACIAAAAgAigBqIgBAAIABgBIABAAIAAACIgBgBgAiaBaQgEAAgCgCIgCAAIACAAIAMABIgEACIgCgBgAgWAXIgCgCIABAAIgBAAIgEgFQgDgGACgFQAHgEAGgGQAGgJAKgEIgJAIIAMgHIAOgIIAvgRIAWgHQAigJAggPQAHgBAFgEQAIgBAGgEQAQgLASgHQARgGAQgJQAHgDAHgGIABgBQAIgFgDgGQAEgGABgIIAAgCQAAgHADgFIABgBIAFgFQAJAAADADIgBgJIgCAAQgGAAgEAEIgDACIAGgPIABgDIAVAaIACANQgEAGAHgEIAEgCIAVgJQAHABABgFIAAAAIgIAQIgZAQIAAgBIgBAAIgCADIAfAfIgRgVIgGgJIAogVQAFgBADgDQAZgagaAQIgBAAQgGAAACgHIAcgNIABAAIABACIgFAXIgZAVQgRAJAuADIAfABIgvAPIgbgGIAlALIgeADIAAgCQgBAAgBAAQgBgBAAAAQgBAAAAAAQAAABAAAAIAAAXIgpglIi4BSIgDACIhvAzIgBABQgJAGgLAEIgGgGgAEiiZQAAAJgCAHQgCAHgEAGIgBABIAAABIAHgDIACgMIADgQIgCgBIgBABgAEkicIABAAIABgBQACgJgEgBQACAEgCAHgAhPAFIAAAAIgMABIgCAAIAAgDIAAAAQgBgLgJgKIAAgBIgCgNIAAgDIAAAAIAAAAIAAgMIAAgIQACgLADgLIABAAIADgGIABAAIACgDIABAAIgBgBIgBAAIgBgBIAAgBIAAgDIAAAAIABgGIAAAAIAAgCIABgCIgBgBIAAgBQAAgDACgCIABgBIADAAIAFgEIAGgEIALgEIAFAAQAIgBAHADIAHgGIAEAAQAMABAJAFIAFAFIAEAGIgEgEIgJgBQgDACABAEIAAABIAAACIABABIABABIABACIABAAQAEAGAIADIAGAAIAAAAIACgDIALAPIABAGIAAAEIABAFIgEAEIgBAEIgBACIgCAEQgCADAAAEIABACIABABIAEAAIgFAJIgIADQgHABgFAFIgWAWQgGABgFACIAAAEIAAABIABABIgBABQgQgFgSABgAhNABIACAAIgCgCgAhVg9IABAEIABAFIACAGIABAAIAEADQAEgDAGAAQAHABAHgCIAFgCIADgBIAEgCQAOgEAGgNIAAgBIABgFIABgBIgBgBIAAgCIgBAAIgLgBIgFgBIgFADIAAABIggADQgBADgDABIgIAAQABAEgBAFgAglhZIABAAIAAABIACADIABABIAEAAIAAAAQADgEAAgFQAAgCgCgDIgFgDIgBAAIgIAAIgBAAIAAAAQgDADgEABIgCACIAAABQgBABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAAAABAAIAFAAIACgBIABgBIAEAAgAhHhtIgCACQgGADgBAGIABACIABABIAFAAIABgBIABgBIABAAIAEAAIABgBQAKAAADgIIgCgFIgBgBIgHAAIgBAAIAAAAIgDAAQgDABgCACgAiJAEIAAAAIgEgJIgBgBQgCgGgFgFIgEgIQgHgNgIgLIgBgDIgEgIIgBgCIgCgDIgBgDIgBgEQgDgKgGgIQgIgLgGgNQAAgEgCgDIgGgJIgEgFQgGgGgDgIQgCgGgEgFIAAgGIAAgDIgDAAIABAFQgCgDgDgBIAAAAIgBAAIAAgBIgCgDIgCgBIgBAAIAAgCIgCgBQgIgCgIgEIgCgCQgKABgGgHIAAgBIABABIANgBIABAAIgPgIQgHgCgDgHIgDgCIgBgBIAEgCIABABQAFAGAHABIABAAIAAABIABACIADAAIAAAAIABgBIAAgCQAAgDgEgDIgCgBIgDgFIgBgBIAAgCIAAgDIgBgBIgCgCIgBgBIAAgDIAAgCIgBgBIgBgCIAHAAIAHAFIAEABIALAJIABACIAFAAIABgDIAAgCIgEgCIAAgBQgBgFgFgEIgBgBIgCgEIgBgCIAAgBIAAgCIgCgDIgCgBIAAgGQgDgGABgGIAAgCIAPAAIABAAIAJAIIANAIIABADQACAIAGAFIAEAEIAAABIAAADIAAACIACABIABACIADgBIABgBIAAgDIABgBQAEgDABgFIAAgBQAFgCACgEIABgCIARACIAAAAQABAMgDAMQgCAIgHAFIgBADIAAACIgEAFIgGALIgBADIgDADIgBACIgBABIACABIAAAAIAAABIAAABIAAAAIACACIADAAIACADIABABIAFAOIABAFQACADABADIgBADIAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBAAIAAABIADgCIAYArIAKATQACAEADADIAGAKIACAFQADAHAGAGIABABIAMAQIABADQADAJAFAHIABADIABABIAGAJIgjgCgAjBiCIAAgBIAAAAIAAABgAjKiaIAAAAIgBgBIABABgAjPimIABACIAAgCIgBAAgAjZitIADABIABgCIgEABgAhlgCIACAAIAAACIgCgCgAhlgFIgBAAIgCgEIAAgBIAAgBIgBAAIgDgFIAAgBQgCgDAAgDIgBgCIACADIADAJIABACIAAgBIAEAHgAhzgcIABAAIABABIAAABIgCgCgAhihZIABgBIgFAHIgBACQABgEAEgEgAgBhlIAAgBIAAABIAAAAgAjLiwIABgBIAAABg");
	this.shape_448.setTransform(42.5,-40.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#B9AAA2").s().p("AAGAQIAAgFIACAFQADADAFgBIgIABgAgIACIAAgBIAAAAIgCgDIgFgPIAAgBIAUAcIgBAAQgCAAAAAHg");
	this.shape_449.setTransform(43.8,-49.9);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#B6ADA3").s().p("AAAACIgFgDIALACIAAABg");
	this.shape_450.setTransform(41.6,-51.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#A1A19F").s().p("AgJAOQADAAAKgDIABgBIAHAAIgXAHgAAAgQIAAASIgIAGg");
	this.shape_451.setTransform(45.6,-55.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#392D20").s().p("AAAACIgBAAQgKgIARAIg");
	this.shape_452.setTransform(43.6,-58);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#2C231B").s().p("AiXFzQADAAABgHIAAgCIACgEIABAAIACgBIAxggIADgDIgTANIgsAogAgBEIIAAACIgEACIAEgEgAAYDyIAEgDIAxgfQANgIAOgGIAFgCQgDAEgGABIgXANIgWARIgeAQgACMCvIANgJIgCAFQgEAGgFAAIgHABIAFgDgAB2luIABAAIABgBIAEgDQAbgJgSAQIAAAAQgFAIgDAAQgEAAgDgLg");
	this.shape_453.setTransform(27.2,-20.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#96938F").s().p("AgLgDQAEAAgBgFIAAgBIACAFIgBABIgBAAQAGAVAIgSIAAAAIAGgCIAAABQgHALgFAAQgGAAgFgNg");
	this.shape_454.setTransform(39.9,-56.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#B79F94").s().p("AAQAZQAQgdgoACIgDABIgBAAIgNgbQAPAaAXABIAFABQARAQgUANg");
	this.shape_455.setTransform(48.2,-55.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#35291E").s().p("AADIDIABACIgGABIAFgDgAuPFjIgGgOIgDgFQAPADAPAFQAIADAJABIAHABIgCAAQgUABgWAFgAATEKQgFgFgFgHIgCgDIgDgHIgDgIQgDgQAAgSQAAgfALgWQANgVASAAQASAAANAVQANAWAAAfQAAAegNAWQgLASgOADIgGABQgMAAgJgKgAIVAoQgDAAgCgDQgDgEgDgGIgDgMIgBgEIgCgLIgHgQIABgBIAAgCQAEgLAAgJIAAgBIAAgFQAAgXACgTIACgMIABgHIAAgBIAEgMIACgFQAEgIAFAAQAIAAAGAZQADANABAQQACAPAAASQAAAkgGAYIgEAOIgBABIgCAEQgDAGgEAAIgBAAgAMzg2IAAgYIAAgIIADAFIABAPIABARIgFgFgANGhoIgGgOIgMgDIgBACQgDABgBACIAAgFIAAgJIgCgDIgCgDIgBgDQgXgGgZgDIgCAAIgBAAIgEgIIgHgCIgEAAIAAABIgFAAIgCABIgBACIgBADIgYgBIgKAAIgCgDIgBgDIAAgDIABgDIABgDIAcgBIAHAAIAIgBQAnAEAogOIAFgFIATgEQAcgaAVgeQAGgJAAgLQABgdgHgcIgBgDIgCgDIgFgGIAAgDIAAgDIgCgDIgFgGIAAgDIgBgDIgBgDIgDgDQgPgJgLgOIgEgDIgBgEIgBgJIAAgGIACgBQAUgNAHgWQAEgPgGgOQgJgTgUgDIgIgBQADgIgDgMIgBgEIAGABIAAAAIgCACIgBADIAAACIABAFIABACQAGADAHgCIABgBQACgDAAgDIAAgHIACAAQADAAAEADQAzApgbA5QgFALgNAEIABADQAFAMAMAFIAFACIACADIANAYQACAEABAFQANARgBAWIgBAtIAAATIgCADQgFAMgKAKQgCACgDACQgNAQgOAOQgUASgcABIADADQAEAFADAHIACADIAAADIAAASIAAAJIACADIACADIAAAEIgBgCgAn4mZIAAgCIABgCIAPABIAQAAIAAABIAAACQgQAAgRABIABgBg");
	this.shape_456.setTransform(0.5,-11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.howmanybubble2still, new cjs.Rectangle(-102.1,-79.8,194.8,156.6), null);


(lib.howmanybubblethreestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ANGhhQAAABAAABQAIATAAAbQAAANgCAMQgCALgEAKQgEAKgEAEQgCACgCABQgBABgBAAQgCABgBAAQgDAAgDgCQgGgEgFgNQgIgTAAgbQAAgbAIgTQAHgTAKAAQAKAAAHARgAB5gfQgGgIAAgKQAAgJAEgHQADgDADgEQADgDAEgCQAHgEAJAAQAJAAAHAEQAEACADADQAEAFADAFIAAAAQACAGAAAHQAAAOgJAJQgFAFgGACQgFADgHAAQgCAAgBgBQgKAAgHgGQgCgBgBgCQgCgCgCgDgAFpCUQgBgGAAgGQAAgVAHgQQABgDACgDQABgBABgCQAIgNALgEQAFgBAFAAQAJAAAIAGQAGAEAFAIQAMATAAAbQAAANgDALQgDAMgGAJQgJAOgMAEQgBAAgBAAQgDABgCAAQgDAAgCgBQgDAAgDgBQgBgBgBAAQgBgBgBAAQgIgFgGgKQgDgEgCgFQgFgLgBgNgAkHh9QgBABAAABQAAAAgBABQgCAEgBADQAAACgBACQAAADgBAEQAAADAAADQAAAOAGAKQADAGAEACQAEADAEAAQAIAAAFgJQABgBAAgBQAGgJABgNQAAgBAAgBQAAgHgCgHQgBgGgEgFQgBgCgBgCQgFgGgHAAQgHAAgGAHQgBABAAAAgAqQiSQAOANAAATQAAATgOAOQgNANgTAAQgTAAgOgNQgNgOAAgTQAAgTANgNQAOgOATAAQATAAANAOgAn9h8QAAACgBACQgBAGgCAGQgEAJgGAIQgOASgUAAQgVAAgOgSQgOgTAAgaQAAgaAOgSQAOgTAVAAQANAAALAIQAFAEAFAHQAHAIADAKQACAEABAEQABAHABAIQAAACAAABQAAAGgBAGgAszg1QgLAAgHgHQgIgIAAgKQAAgLAIgHQAHgIALAAQAKAAAIAIQAHAHAAALQAAAKgHAIQgIAHgKAAg");
	this.shape.setTransform(-11.5,37.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag1AHIAAAAIAdgzIACAGQAOAVAYgEQAPAOAOgHIABAHIAAAAIgVgEQgagFgZgJIgEAAIgCABQgMAMARAJQAcAPAgABQgbAUgfAJIgJAEgAAygGIACgBIACgJIAAAKIgEAAg");
	this.shape_1.setTransform(71.9,-6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("ABDArQgJgOAEgEQACgCAIABIAQAEIgDADIgSAMIAAAAgAhMASIgLgDIgCgOIgDgOIgBgEIACgHIAfAGIAQgIIgCADIApgSIACAVIgBACIgCAEIgBACIgCAIIgiACIgBgCQgEgIABgIIAAgBIgEAUIAAABQABAKgLgFIAAgBQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQAJASgRAAIgEgBgAAhAJQgFADgGgCQgGgBgFgIIgBgBQgEgJABgJIAAAAQgEALgIgBIARgUQAJgCAIgFIAEgCQAHgDAFgCQASgEAAAUIgRAOIgCABIAAABQABAJAFgBQAFAAAJgJIASgHQAIgDADAFIAAABIABABIAAACIgBABIgIAHIgRAHIgPACIgKAHg");
	this.shape_2.setTransform(-2.1,-21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF66").s().p("AASC1IgEgCIgBgBIgCgCIgBgBIgBgFQAAgWAEgWIACgDIAFgBIAAAAIAAAAQAEACADADIAAgIIgCgBIgBgCIgBgBQgDgFgFgDIgCgDQgUABgTgHQgDgBAAgEQgBgHAGgEIAFAAIAAgBIAOgBIgIgEQgFgDABgFQABgEACgCQgDgEgBgFIgCgDIgEgDQgGgFgIAAIgBAAQgOgEgQAEIgRABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABIgDADIgBADQgCAEgEABIgCAAQgQACAFgPIADgIIAAgBQAEgGAGgEIAHgEIACAAIADgBIAAAAIAIAAIAFAAIABAAIAqABQAHAAAFAFQAYAKgBAYIAKABIADAAIADABQAOAEALAKIABACIAGAFIAAABQAOAKADATQADAPgKAGIgDABIgBABQgFABgBgFIgFgNQADAMgBAPIgCAGIgCAJIgDAFQgCABgCADIAAAAQgEACgFgDIAAADQAAAKgHAAIgEAAgAAsBvIgCgIIgEgDQAEAFACAGgAALBRIAIADIgFgDIgDAAgAiBCKIgBAAIgFgCQgEgCABgEIABgDIABgCIADgKIAAAAIACgDIADgFIgIACIgHABIAAABQgHABgBgGQgFgTAXgDIABAAQAGgCAFgCQAFgDAHgBIABgBIAKgFIATgMIAFAAIAAgBIAHAAIALABIABAAIAQABIACABIAEAAQAEABABAEIAAAAQABADgBACQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCAFQgCAEgFAAQgRAAgOAJQgXAOgTASQgCAPgKAAIgDAAgAgOhWIgEgKIAWgJIAggIIADADQADAHgBAFIgpAMIgHAAIgHAAgAhZhvIAIgGIAgACIAKAAIgpAKIAAAHgAgCh1IAAgBIgCABIgFgJIAqgQIAAACIAHgBIAGABIABAAQATAFASgCIABACQATgDgRAIIgFACIgKAAIgiAEIglALIgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBQgBAAABgBgAAmiBIANAAQgHAGAKgGIAJgGIgCgBIgBAAgAhgiLIAfgRIAVAOIgUAFIgXAMIAAABgAggiGIAkgSIAegWIAYAGIAIACIARACIA3gQIg5AgIgjgHIg2AaIgPABgAB1iVQAIgEAIgHIAGgFQAIgKAEAIIABACIABAAQAAAGgCAEQgCAEgEADQgHAHgLAAIgBAAIgCAAQgOAAAHgIg");
	this.shape_3.setTransform(43,-24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AAPAzIgDAAQgSgFAQgFIAXggIgUAHIABgCIgBABQgOAIgDgOQAEgHAJgBIAAgBQAKgCAJgFIgNAEIgCgFQgGADgLACIgIAAIgDgBIgCAAQgFAAgCgEIADgCIAigPIAAAAQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAIABAAIABABIABAAIAAABIAHgIQgIgGAGgDIAIgDIABAAIAPADIAAAAIAIACIAAABIASgIQAAAFgDADIgBACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgBABIgNAMIgDADIAbgCIgMAFIgKAWIgCgDIgCABIgBADIgBABIAFAJQgCAAgCAJIABACIAAABIgcATIgGAAgAAZAjIAAABIAEgBIAAgBgAgJgJIgDADIAVgFQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBgAhJgOQgDgDADgIIAAAAIAEgDIASgNIAAgDIAJAAIAGgEIAEgCIAHAHIAFAGIAAABIAAAAIAEAEIAAAAQAEAFgDADIgIADIgIACQgWAIgLAAQgGAAgDgDg");
	this.shape_4.setTransform(20.4,-17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3333").s().p("AANAYIgBgBIAAAAIgBAAIgCgBIgDAAIgFgCIgBAAIgCgBIAAAAIgBABQgbgDgaAAIgIgDIAAAAIgCgCIgBgBQgBgKABgJQACgHADgHIABgCIApACIACADQADAEAFAAIA/gBQAGACAEAFIABACIAEACIABABIAAAFIAAACIAAAKIgBACIgIAEQgMAEgLACIgKAAIgOgBg");
	this.shape_5.setTransform(-6,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgOAHIgSgEIAAgBIAIgEIgBAAQgIgHANgGIABAAIAigKIAMAOIAGAAIAAAGIAAAEIgCABIACAAIAAABIgGAAIgHAFIgRAUgAgGgFIACgBIgBAAIgBABg");
	this.shape_6.setTransform(52.9,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC9966").s().p("ABMCxIAIgWIgLgeIgCgTIgDgEIgBAAIgCgHIAEgDIADgBIgDgCQAPAAAKALQALALAAAPIAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIABAEIADALIABAIIgBgHIAIAcIgFAAIgiADIgBAAgAA3CQIABgDIACgBIADAAQALACAAAJQABAFgCAFIgCAHIgCAAQgRgIAFgQgAAhCJQgHgBgEAFQgYgPAbgFIASgaIAPAYIgUAWIgFgEgAAABzIAAgBQAEgOAOgGIAEgBQAHAAgCAKIAAABQgDAIgGADIgBACIgIABQgGAAgDgDgAgVBgIAAgBIAKgIIABgBQADAOgGAJIgBABQgHgEAAgKgAg2BIQgGABgMgCIADgOIgEgVIAAgBIgBgHQAKgGgDgQQgDgRgOgKIAAgBIgGgGIgBgEIACgBIAbgJQAPgDANAFQAFADgIAHIgPAzIABAAIAAgDIAUAnIAAAGQgBAOgJAAQgFAAgIgFgAA+AnIAAABQAQAFgPgHIAAgBQAOgageAeIg1AGIgKAAIgDAAIgDgNIgCABIgEgVIAAgFIAGgPQAFgEACADIAGAAIAIgaIAJgIQABALAIgCIACAAIgBAAQgJARARgDIAAADIALgJIAKgbIAYgPIAXAHIABABIAEABIAKAJIACAjIABAFIgGAHIgBAAIgKAHIgGAYIAAABIgTARIgVAIgAATAZIgdgIIAdABQgXgHANgKIACgBQgMgEgGADQgGADABALIAAABIgEgHIAAAEIADAHIAgAHgABJgcIACAAIADgGIgFAGgABGguIAAACIADgEIgDACgAhig0IgLgrIgBAAIAAABIgCADIgCACQgDgRAIgQQAKgLAJgMIAAgDIAAgCIAFgEIAJAUIACgqIACAIIgBgGIABgBQACADAEAEIAiAAIAGgFIABAAIABADQABADAEABQALADALABIABgBQADgBACgDIABAAQABAEACAEQAEALAIAIIgBAJQgBAMAKAGIAAAFIgGAGIgPAHIgBAAIgCABIgNAHIgGAEIgDABIgRAQIgrALQgBAFgMgCIgLADgAhJhMIgGABIgBAEIgCAAIAAAAQAAADACACQABADADABIABAAIATABIADgEIABAAIABgBIAEgDIAJgIIgIABIgBgCIgBgBIgDgBIgCABIgBAAIgBABIgDADIgJgBIgGAAgAhQhsIgCAEIAAAIIAEACIgBAAIADACIADAAQAEAAABgEQABgDgBgGIAfgNIglAFIgBAAQgDAAgCAFgAAGh3IACgGIgDgFQACAGgBAFgAgNiJQgLAJAKAGIAEAAQAFgEABgFQABgFgEgEIgBgBIgFAEIAAAAgAgriVIgDAIIAAAIIAPgPIgCgDg");
	this.shape_7.setTransform(56.7,-14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("ACbEaIgKgBIgJgBIgBAAIgBAAQgKgKgFgNIABAAIAKAAIAUABIAFAAIAnACIAcgJIAZgMIABgCIABABIABAAQAGAPAMgIIgZhnIgCAAIgDgUIAlgzIAJALIgCACIgHAVIgIAQQgHAGABAGIgEAHIAGgCIAGAFIADAAIAQgNIAJgDIABgBIABABIALADIALATIgVAEIgTAOIASgMIAFABIgFACIgXAWIACgLIgGAEQgCAEABADQABACADABIAJADQAJAIAagGIAEAZQgVAcgZAQQgKAHgKAFIgkALIgCAAIAAAAIgDABIgRAFIgDAAQgUAAgVgEgAhjDnIAAAAQAGAAAEgIIABgFIgZAEIgLgCIhWgRIgegDIAIgGIAGgBIAFgFQANgKADgQIABgEIADgDIABgBQACgEAAgEIABAAIgFAkIAIgEIAOgHIgEABQgGgBgCgDIACgOIABgCIACgEQAFgLAJgGIADgCQANgGAMAGIAIAFIAGAIIACADIABAEQAEALAAAJIgBAIIABACIACgCQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAHgEACgEQAngWAygCIABAAIgOAJIgaATIgCAGQAAARAHALQAFAIAHADIAGALIgJABQgIgCAGAGQABABAAAAQAAAAABABQABAAAAAAQABAAABAAgADfDIIgDgpIAHgPIAJAqIAHAfgAByDQIgBgBIgEgHIgDgDIgHgGIADgIIACgFIAagdIAJABIAxADIABABIAKAUIAAABIgFgVIAMgFIAAAAIACACIAJACIgBAHIAAACIACARIABAGIAAADIABADIgMAIQgEABgCgCIADAHIhWADIgFAAgACaCbIADAAIgEAAgAkcDFIgFgIIgNAEIgBAAIgJgOIgBgFIACgPIgHgWIgCgJIAGAAIAyADIABAKIAGgHIABADIAEgDIABgCIABAAIADABQAOACANgCIACAAQAOgBAOgFIgNARQgBAHgGAFIAAAFQgCAKgIAIIgFADIgBACIgBADIgHADQgJAEgGAGIgNACIgWgFgAhuCdIAAAAIgBgCIgBgBIgCgGQALgFAOADIAAABQgCALgMAAIgHgBgAAZCdQgXgBgHgSIgCgGIABAAIgHgVIgGgZIBNAIQgJAGAKAGIABABQgDAWACAXIAAACQgDACgGgBQgFgBgFACIgNABIgCAAgABZCaIgBgTQgBgOAEgMQAGgQgDgRQgBgDgCgBIAAgQIg9ACIgMgCIgIACIgPgBQgTgEADgOIAAgBQAXAAAQgSQARgSAAgZIgDAAIAcgQIACgDIAAgCQgBgMgCgBIAAAAIgGgJIACgBIAAgCIACgCIADADQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAgBQANgDACgVIADgCIAUgLIgoAJIgCgCIAMgLIACAAIAAgBQAAAAABAAQAAAAABgBQABAAAAAAQABgBAAAAIAVgJIAZAJIgDAIQgFAPAQgCQgPAJgPAOIAAACIgBADIgBAAQgXADAFATQABAGAHgBIAAAAIgEAMIgBAAQAAgHgGgFQgFgGgIAAIATASIADAEIAIAAIgBADQgBAEAEACIAFACIAAABIgBAXIABAAIAAADQAFAAACgCQACgCgCgEIgBgCIAAAAIABgCIAxgtIgMAWIABAAIAHgCIABgCIABgBIABgBIABgBIAFgCIAAgCIABgBQAJgHAMgCIAJgCIABAAIATACIABABIABABIgBADIAAAAIAAABQAEADADAFIABABIABAAIADgBIADADIABACIAEADIAEAEIgBAEIABABIABACIAAADIgBABIgCAAIAAACIgBAEIgCANIACABIABABIAAADIABAGIAAAYIAAADIAAAAQAKgGgDALIgDAHIgHAIIgCALIAAACIgBABQgDABgDgCIgBgBIgqAfIgRgBIgEACIgDACQgHgDgCgCQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgEgCQgKgEgDgHIgBAAIgEgHIAAgBIgBgBIAAgCIABgDIgEgcIgBgXIAAgDIABgCIAAgBIABAAIAEgCIADgCIACgBIAAAAIgCgBIgCAAIgCgBIgBgBIAAgEIgBACIgBABIgBABIgIAWIgEALIgIAQIAAAKIAEASIAHAiIgGAMIgFAKIgBAAIgEABIgHgCgACOBLIAAABQALADAMgBQAFgEALACIADgBIANgEIAAAAIABgHIABgEIABgBIACgCIABgBIAAgBIgEACIgNAFIgZABIgBgEIgCAAIgFAAIgBgBQgGgKgKgFIAGAggADdAsIABACIAAgCgACrAJIgCABIAAADIgBAMIgBABQgFAHAEAHQAIAEAHgEIABgDIAAgCQgDgDgBgDIABgDQAAgIgCgHIgBgBIgDgCIgCABgADJgCQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAAAAAQgGANAOACQADAAACgCQAPgNgUgDIgFABgACAALIAGgDIAAgDIACgGIAAAAIgIAMgACagGQgFADAAAFQAAAGAGABQAEACADgCQAOgKgRgGIgFABgAC0CFIgDAAIAfgUIAMgJIAEAWIgeADQgEgDgBADIgBABIgCAFIgDADQACgDgFgCgAg5BxQgNgFgCgHIAAAAIAAgBQgDgFgQgEIACgBQACACAFgBIADgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAIAKgFIAcADIAHALIAHAPQAJAXgWABIgWAEgAj1B7IABgBIAAABIgBAAgAlCBxIAJADIgIAAgAiaBYIAAAAIAEgCIAAgCIABgBIAHgJIAGAAIANACIASAMIgZAFIggANgADuBTIAPgYIATgcIACgEQAKAEgIAOIgjA8gAiwBjQAAgUgUgGIgEgBIgFAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIAtAEIAFABIgBABIgHALIgMAOQgDABgCACIABgDgAkQBDIgFgBIglgCIAAAAQAAgEACgDQAGAAAGgEIAAgBIABgBIACAAQAWAGAXAEIAGABIANAHIgBADIggABQgDgEgDgCgAjaBIIABgBIACABIgDAAgAhPAzIg1gGQgHgHgDgKQgBgEABgDQAAgDADgCIgBgBQgCgHABgIQABgGAEgHIAHgIIAAgCQABgFAFgDIABgBQAAAAAAAAQABAAABgBQAAAAABAAQAAAAABAAIALgSIAFgFIAHgDIABgCIAAgBQAIgKAMgEIAJgCIADgBQAIgBAEAFIABADIAAABIAAgBIABAAIAOgCIALAGIgBABIAMAlIgTASIAEAOIAEACIACACQAJAHgQAHIgCADIgLAWIgCAFIgDAAIAAACIAAAAIAAACIghgDgAh5gFIgDAEIgCADIgBADIgCADIAAABIAAACIgCACQAGABADAGQACAEAEACQACACACADIAFAAIABAAQAMgBALgEIABAAIAEgBIAFgBIADgDQAHgGAGgJIABgCIAAgGIABgBIgJAGIgBAAIgBAAIgDABQgIANgOgCQgGACgGgFIgKgCIgBgDIgBgDIgCgDIgBAAIgBgBIAAgDIAAgCIgBAAIgBAAgAhWgHIADABIADACIACgDIAIgBIABgBQAEgEgCgEIgDgBIAigeIgHgEQAIgNgJADIgHAFIgDAHIgGAAQgHAHgKABIgCABIADgFQACgCAAgEIgBgBIgBgCIAAgBIAAgCIgBgBIgBgBQgGgDgFgBIAAABIgFACIgBAHQAAAIACAGQAEACAEAAIgHAGQgEAFgDAGIgDAGIAAACIAAAFIACAAIAGAAQAEAAAEABgAgqgoIgCACIgBABIgBACIAAAGIAAADQAHAJAMgFIACgHQAAgEgCgDIgBgBIgLgEIgDABgAjlAiQgVgDgVgGIgRgFIgDgEIgDgDQgGgEgBgIIAAgDQgDACgEgBQgEgTAEgUIABgJIABgBIABgCIAAgBIAAgBIAAgBQADgHAFgEIACgBIAAAAIACgJIADgFIADgDQAFgDADgFIABAAIACgBQAFAAADABIADACQADACABAEIAAAEIgBACQgBAKgJADIgBAAIgBABIAAAQIAUABIAAAAIADABIAEABIAAgDIACgCIADgGIAAAAIAAgCQgNgIAHgQQAFgMAIgHIAHABQAFACABAEIABAFIAAACIgDAJIgBABIAAACIAEAHIAEgCIABAAIABAAIAAgCIAAAAIAAgBIABgBIACgDIAAAAIABgBIABgBIABAAIABgBIAAAAIADAAQAQgCANAKIAAABIABABIACAFIABABIAAAIIABAVQAAAHgBAGQgCAHgDAFIADALIgEAQIgFAIIABABQACAIgIAFIgpgFgAkWgaIABACIAAABQABAIgBAIIABABIABAAIAAABIADAEQAEACAGgCIAEgDIAdgKQAOgEACgPIAAAAQABgFACgEIACgGIAAAAIgIACIgEACIgFAFQAAAFgBADIAAAAIgGAHIgCAAIgFACIgDAFQgFAEgJAAIgBAAQgEgEAAgGIAAgCIgDgBIgKgBIgEgBIAAACgAkoguIAAgBIAAAAIAAABgAiZggIAAgMIAMgLIAcgWIgIgNIgIgLIASgQIAAgEIAAgPIA6gFQAKgDAIgEIAGgDIABACIAEABIAEABIACADIABACQgGgBgIADIg6AyIgiAtIgOAaIgLASgABiiEQgMgLgBgHIgBgBIgDgFIAAgDIgCgIIgBgFIAAgOIABgUIAAgCIABgGIAAgEIACgEIAOgSIAIgKIAAgBIABgGIgFABIgDgBIAEgHIADgDIADgCIAcgQIAJAOIgIAFIgBABQgDAOAKgGIAJAMIAlgBIAKAJIAPgGIAEAKIgBABIgKATIgIANIgBAGIgEAHIgCADIgJALIgCAMIg8AigABoioIAAACIAAALIAAABIAAABQAPAQAWgPIABAAQAPgGAIgMQAGgIgJgCIgOALIghAFIgLgFgAB7jBIgDABIgBAAIgBACIAAAFIABABIAEACQACADADACIACAAQAGABADgCQAEgCAAgGIgBgBIgDgCIAAgCIgBAAIgPgCgACXjgIAAABIAAABQgBAGACADQACAFAEAEQAFACAFgCIABAAIAGgIIABgBIAAgBIABgEQAJACAGgGIAAgCIAAgEIAAgCIgCAAIgNgCIgEgCIAAAAIgHAAIAEABIABABIgCABQgEgCgGABIAAAAIgCABIgBAAQgEADgBAEgABcjqIgBABIAAADIAAACIABABIABACIAKADIAAAFIACADIACACIAAABIABADIAAACIAAABIAEAAQAHABAHgCIACgHIABgIIACgCIAAgBIADgFIgDABIgBgCIgBgIIgBgBIgJgBIAAAAIgDABIgBAAIgCABIgGADIgLgBIAAAAIgCABIgBAAIgBABgAhUicIgQgCQgJgCgJgFIgJgGIgBAAQgQgKgBgSIAAgJIgBgDIgBgBIgBgEIgBgGIAAgKIACgRIAAAAIABgCIAAAAIACgFIAAAAIALgRIAGgDIABgBIABAAIACgBIAAAAIABAAIAOgEIAAAAIACgCIABAAIACgBIAkABQAAAAABABQAAAAABAAQAAAAAAAAQAAABABAAQACADAAADIABAAIACACIAGAAIAGABIAEABQAIACAHAEIAEACQAHAFABAHIAAAFIAAAAIgBAFIAAAKIAAAEIAAAOIAAADIgDASIgBADIAAABIAAACIAAAAQgDAHgFAFIgFAFIgEACQgSAKgVABIgFABIgCAAgAiIjNIgBAAIgBABIgBACIAAADIAAADQAFAIAIAGIADACQAeAHAfgGIACgDQAJgGgCgJQgHgGgEAJQgEAEgFABQgWABgVAAIgCgBQgIgGgFgKIgDgBIgCABgAhdjTIADABIAEAAIgCgFIAHgDQAGgFgEgEQgCgCgGgDIgBACQgIAFgKgEIAAAAIgBgDIgCgBIgBAAIgBgDIAAgDQAEgDADgGQgHgCgBgFIAAgCIgBAAIgCABIgDABIgBABQgIALAAANIAAABQACACABAEIABACIABAGIAAACIAAABIAAAAIABAAIAGAAIACAAQACABAIgBIAKABgAhHjnQAIADAIgEQACgDgBgEIAAgFIgBgBIgBgCIAAgBIAAgCIgBgBIgBgBIgKgCIAAAAIgDgBIgBgBIgBAAQgKANAFAFIAAAEQABAFACgCIADgCIABACgAhajwIABACIACgCIgDAAg");
	this.shape_8.setTransform(19.8,-10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AjOCdIgGgBIgCgBIgCgCQgIgEgGgKIgFgJQgFgLgBgNIgBgMQAAgVAHgQIADgGIACgDQAIgNAMgEQAEgBAFAAQAJAAAIAFQAGAFAFAIQAMATAAAbQAAANgDALQgDALgGAKQgJAOgLAEIgDAAIgFABIgFgBgADUgbQgGgEgFgOQgHgTAAgbQAAgbAHgUQAHgSAKAAQAKgBAHASIAAABQAIAUAAAbQAAANgCAMQgCALgEAKQgDAKgFAFIgEADIgCABIgDAAQgDABgDgCg");
	this.shape_9.setTransform(48.7,41.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("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");
	this.shape_10.setTransform(17.3,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BCB2A8").s().p("AgRgBIAPgBIAVABIgNAEg");
	this.shape_11.setTransform(-29.8,61.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#878E8E").s().p("AgDgGIAHAMIAAABg");
	this.shape_12.setTransform(-25.3,62.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#928B83").s().p("AgBABIAAgBIAAgCIABABIACAEIgDgCg");
	this.shape_13.setTransform(-23.2,64.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C7B8B0").s().p("AgGAAQAcABgbAAg");
	this.shape_14.setTransform(-32.1,62.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BCAEA6").s().p("AgDACIgBgCIABgBIAAgBIABAAQANAFgKAAIgEgBg");
	this.shape_15.setTransform(-34.2,57.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AFAFAE").s().p("AADAGIgIgKIACgCIAJAMIgCAAIgBABIAAgBg");
	this.shape_16.setTransform(-38.3,57.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8D7A72").s().p("AAJAVIAFgmIgcAKIAJgFIAUgIIgFApIgBAAg");
	this.shape_17.setTransform(-39.5,51.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9C7A6A").s().p("AAAACIgBgDIADAAIgCADIAAAAg");
	this.shape_18.setTransform(-24.6,60.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7F7E7B").s().p("AgiACQAKAGALACIAJAJIAdACIgQAAIgUAEgAA9AXIAGAAIACACgAg+gYIAJALIgFABQgRAAANgMg");
	this.shape_19.setTransform(-32.6,59.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A39187").s().p("AgLAHIgDgDIgMgLIAAAAIA1APIgmgBg");
	this.shape_20.setTransform(-31.7,59.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#585B5A").s().p("AABAGIgLgSIAVAZg");
	this.shape_21.setTransform(-27.4,52.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDFDFA").s().p("AAAANIgIgFIgGgdIAMAMQACAJAHAGIAGANIABADg");
	this.shape_22.setTransform(-25.3,51.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#63625F").s().p("AgLgEIAHAEQAcADgVACg");
	this.shape_23.setTransform(-24.8,54.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#736257").s().p("AAEgBIAAAAIgBACIgDABIgDAAg");
	this.shape_24.setTransform(-13.5,53.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#896D5E").s().p("AADgGIABAAIgHANg");
	this.shape_25.setTransform(-12.6,52.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A99E98").s().p("AANARIgDgFIgGgIIARARgAgUgUIABABIADADIgEgEg");
	this.shape_26.setTransform(-43.4,61.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7B807D").s().p("AAEAJIgLgLIAAgGIAQARg");
	this.shape_27.setTransform(-48.5,49.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#817E78").s().p("AgjgDIAEAAQAJADAIgCQAkgGAOAHIgHACQgHADgIACg");
	this.shape_28.setTransform(-44.5,51.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ABAAA5").s().p("AAMgKIgbAEQAIgCAHgDIAGgDQAOgEgFASIAAACIABAOg");
	this.shape_29.setTransform(-41.5,52.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FAF4EF").s().p("AgNAIIgDgFIgHgLIgBgEIAqAWIAJAFgAgbgOIABABIABABg");
	this.shape_30.setTransform(-45.7,49);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9B7C6B").s().p("AAAAIIAAgCIgCgLQAQAVgNgOIAAAFIABAFIABALgAgGgWIACAAIAAAIg");
	this.shape_31.setTransform(-48.3,46.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#758D8F").s().p("AgDgVIAAgBQgBgHABgCQABgCAEAEIADA5IAAAFg");
	this.shape_32.setTransform(-49.8,46.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F5EDE9").s().p("AAAgFIAAgBIAAAAIAAABIACACIgBAKIgBgMg");
	this.shape_33.setTransform(-49.3,41.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D9D4CD").s().p("AgFAEQgCgFACgGQADAXAAgVIgBgCIAKAFIgBACQgFAIgDAAQgCAAgBgEg");
	this.shape_34.setTransform(-48.9,41.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8E7367").s().p("AgMAcIAZgiIgBAGQgJAEgGAOIgCACQgDADgCAFIgCAAgAgIgbIAEACIAEAFQAMAFABAJg");
	this.shape_35.setTransform(-47.7,41.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#606360").s().p("AgCAEQgDgEgBgEIAAAAIAAgBIgBgEIAPATQgHAAgDgGg");
	this.shape_36.setTransform(-49.5,39.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6A5854").s().p("AgBAGIgCgDIgCgDIABgEQABAEACADQADAEACgCIAAAEQgDAAgCgDgAAGgIIAAAAIAAABIAAACIAAgDg");
	this.shape_37.setTransform(-42.6,43.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CFC0B8").s().p("AAGAyIgqgXIgBgFQAOAOgSgXIgCgCIAAgHIAAgGQACgFAEgEIACgCIgEAIIgDAGQAUApAtAJIAVgCIgJAFIgEABgAgjAqIgBgLIAHAMgAgUggIABgFIAAAAIAAgBQAAgIgNgGIAOgCIAGAEQALAFACgEIgBAFIAJAQQgQgMgNAIg");
	this.shape_38.setTransform(-44.5,45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#767F80").s().p("AACATIgIgRIABgDIACgJIgDgNIABgEIABAAIALAzIgCAEg");
	this.shape_39.setTransform(-43.8,40.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8D918F").s().p("AACA1IAAgrQABAFACAEQAFAGAGAAIAGAKIgLgFIgBgBIAAAAIAAABQgDAGACAGQADAKAJgOQgDAJgKAIQgFgEgBACgAgVghIABgVIAVA7IAAAEg");
	this.shape_40.setTransform(-50.4,37.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B08573").s().p("AAAAWIAAgqIAAAAIABAqIgBAAg");
	this.shape_41.setTransform(-50.9,33.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BCAEA9").s().p("AgNAAIABgCIAaAFg");
	this.shape_42.setTransform(-55.3,33.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4B413A").s().p("AgtgKIAUAHIAaADIAtAHIgqAEg");
	this.shape_43.setTransform(-54,26.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BAB7B5").s().p("AADgEIABgEIAEACIgBAEIgOALg");
	this.shape_44.setTransform(-45.2,38.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A5918A").s().p("AgBARIgWgkIABAAIAOAXIAdgXQAEADgBADIgDACIgBAAIgSAfg");
	this.shape_45.setTransform(-48.5,37.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C5B5B1").s().p("AgEAAIAJgEQgCACgCADIgDAEQABgCgDgDg");
	this.shape_46.setTransform(-45.8,35.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#18100E").s().p("ABRChIgPgPIgKgOIgMgaIgBgOIAAgBQAFgTgOADQgOgHgkAGQgIACgJgCIgRgSIgCg5QAKgIADgJIABgDIgGgKIgPgTIgWg9IAHgRIAJgVIgEAAIgggKIAJgBIApgDIAfgFIgMAIIgZAPIgKAWIACArIAWAlIAWAVIAAAAIAAABIgZAhIABAIIAAAHIACACIADANIgBgBIABACIADAPIAGABIADAFIApAHIgJgFIAZAFIAEgBIAdgLIgGAoQAEAUAMAMIAGAFIAAAAIAAADIABADIAXAbQgLgCgKgGg");
	this.shape_47.setTransform(-44.3,43.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#94867D").s().p("AgEASIAEAAIAAABIgBADIgDgEgAgTAPIgFgEQgNgLgDgVIABAAIAOAcIBCgcIgsAWIAAABQgHAJABAEIgGgCQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAABAAAAIgBAAIgCADg");
	this.shape_48.setTransform(-34.5,55.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#647B82").s().p("AgBAAIABgMIADgEIgFAhg");
	this.shape_49.setTransform(-41.7,24.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#688082").s().p("AgTAXIAnhEIgUA1IgFAJIgBAJIgIAUg");
	this.shape_50.setTransform(-57.2,20.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BD9A85").s().p("AgFgBIAFgJIAGgKIgKApg");
	this.shape_51.setTransform(-57.2,22.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#919C99").s().p("AAmASIADABIgIAUgAAQAQQgzgDgFgrIgBgIIAGAXIABACIAxAUIgKABIAhAKIgWgCg");
	this.shape_52.setTransform(-55,26.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9E8A80").s().p("AALAtIAKgWIAZgPIAOgCIgwAnIgBAAgAgsgFIgPgRIACgNIABgJIABAYQATAMATAHg");
	this.shape_53.setTransform(-52.1,26.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A58676").s().p("AASgaIACAAIgnA1g");
	this.shape_54.setTransform(-54.6,17.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#684C40").s().p("AgMAKIAZgTIgXATg");
	this.shape_55.setTransform(-51.5,13.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#525354").s().p("AgHgJIABgFIAEAEIAKAZg");
	this.shape_56.setTransform(-46.2,2.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A38D80").s().p("AgSAFIARgFIgpAagAAMgEIAHgDIAVADIADADgAAbgSIgBgHIABADIALAPg");
	this.shape_57.setTransform(-48.3,12.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5E6A6B").s().p("AAEAYIAFglIgBAlIgXAHgAAKgXIAEgHIACAAIgHAOg");
	this.shape_58.setTransform(-47.7,7.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#918780").s().p("AAKADIAPgDIgiAMgAgQAJIgIgUIAPAXIgHgDg");
	this.shape_59.setTransform(-42.8,1.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#656C6D").s().p("AgJgOIgCAAIAGgOIARA5g");
	this.shape_60.setTransform(-39.7,26.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#635D56").s().p("AgFAFIgHgDQAWAHgCgMIAAgDQALANgNAAIgLgCg");
	this.shape_61.setTransform(-14.1,43.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#84807B").s().p("AgGAJIAEgHIAAAAIAIgDIgUAWIgHABQAJgEAGgJgAAWgVIAAACIgBABIABgDg");
	this.shape_62.setTransform(-14.9,50.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6C6865").s().p("AgDANIAAAAIAAgCQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAJgKgMgDQABgGgFgEIARAGIgMAZg");
	this.shape_63.setTransform(-12.3,47.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A9A7AB").s().p("AAAAAIgEgCIACgEQAMADgKAKQACgFgCgCg");
	this.shape_64.setTransform(-12.5,47.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#AD9A90").s().p("AAFgCIgCACIgHADg");
	this.shape_65.setTransform(-17,48.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BDB1AA").s().p("AgNgCIALABIAHABIAHACIACAAIAAABg");
	this.shape_66.setTransform(-19.9,46.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E7DED9").s().p("AAHACIgHgCIgIgBIAIABIAJABIgBABIgBAAg");
	this.shape_67.setTransform(-19.3,46.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8E837D").s().p("AgGAGIAAAAQgFgFgCgDQgEgMAfAMIAAACQABAJgJAAQgFAAgHgDg");
	this.shape_68.setTransform(-14.7,43.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#BFB7B3").s().p("AgKABIAAgBQAAgMAKAFQAGADAEAEIABAFQgFAEgEAAQgGAAgGgIgAAHAFQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAIgPgHIANAIg");
	this.shape_69.setTransform(-19,42.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EEE2DF").s().p("AAFAEQgagQAdAQIgCABIgBgBg");
	this.shape_70.setTransform(-18.9,42.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#776C66").s().p("AgIAMQAEgKgKgEIAAAAQABgEADgEQAFgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAEQgEAFgGAAQgEAAgEgDgAgJAAIAAAAQAJAOANgKIgBgEQgFgFgGgDIgEgBQgGAAAAAJg");
	this.shape_71.setTransform(-19.2,42.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5B504A").s().p("AgHADIgCAAQgCgBABgDQAKgFALAGIABAAQgHAEgGAAIgGgBg");
	this.shape_72.setTransform(-14.6,41.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#8A7D75").s().p("AgEAJQgFgFgCgHIgBgDIgBgEIABgBIAAAHIABAAIAAAAIAUAAIAAABQABAGAEADQgDAEgDABIgFABQgDAAgEgDg");
	this.shape_73.setTransform(-15.7,39.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5E5550").s().p("AgCAAIADgDIABAEIABADg");
	this.shape_74.setTransform(-17.2,38.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6F6762").s().p("AgEgCIgBgBIAAgCIAHAEQABAEACADQgGgBgDgHg");
	this.shape_75.setTransform(-11.5,40.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F5EDEA").s().p("AAAAEIAAgBIAAgGIABAHIAAAAg");
	this.shape_76.setTransform(-12.1,39.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#7D6054").s().p("AAAgCIAAgCIAAAHIAAACg");
	this.shape_77.setTransform(-12.1,39.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FDFEFC").s().p("AAAgGIABgBIgBAPIAAgOgAABgHIAAAAIAAAAg");
	this.shape_78.setTransform(-10.8,30.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDE1DB").s().p("AAAACIAAgFIAAAHIAAgCg");
	this.shape_79.setTransform(-8.3,35.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#736F6B").s().p("AAGAKQgBgOgKgFIgBAAQAMAEABAPIgBAAg");
	this.shape_80.setTransform(-3.1,29.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#453937").s().p("AgBgDIAAgBIABAAIAAABIABAAIABAHIgCABg");
	this.shape_81.setTransform(-2.4,30.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F8F3F0").s().p("AFjDOIADgFIADADQADACgCAFQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAABIAAABIAAABIAAACQgCAKgOAHIgIAEIgBAAIAUgigAEPDrQgVgOAEgaIAMATIAeANIARgMIAIgEIgBABQgJAagXAAQgHAAgKgDgAldATQgNgOAAgSQAAgTANgNQAOgOATAAQATAAANAOQAOANAAATQAAASgOAOQgNANgTAAQgTAAgOgNgAjcAJQgOgSAAgaQAAgaAOgSQAOgTAVAAQANAAALAIQAFAEAFAHQAHAIADAKIADAIIACAPIAAADIgBAMIgBAEIgDAMQgEAIgGAIQgOASgUAAQgVAAgOgSgAk1jEQgHgHAAgLQAAgKAHgIQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape_82.setTransform(-48.7,27);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#867C73").s().p("AgbgCIAAgBIAbAHIAcgNIAAABIgKAHIgQALg");
	this.shape_83.setTransform(-19.3,48.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8C8D8C").s().p("AgFgGIAAgBIAAgDIALAUIAAABg");
	this.shape_84.setTransform(-22.7,47.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8E8A83").s().p("AANAHIABgBIgIgCIgJgCIgKgBIgCAAQgJgIAKAAIAJABIABABIARAFIgBABIAIACIAAABQgCAEgFAAIAAgBg");
	this.shape_85.setTransform(-19.8,45.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#7A6F69").s().p("AAGAIQgHgCgGgDQgKgEgBgHIAGABIAMACIgJgBQgKAAAKAIIABAAIAbAHIgNgBg");
	this.shape_86.setTransform(-20.4,45.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E9DFDA").s().p("AAJAjIgFgNIABABQAKAIALAFIANALgAgSAXIgEgJQgchNAUAWIAQAjIAIAJIAAADIgLgLIAFAdIAIAFg");
	this.shape_87.setTransform(-25,49.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#7E7A76").s().p("AgDgBIAAgGIAGAGIAAABIABAIg");
	this.shape_88.setTransform(-26.1,49.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#707D83").s().p("AgGgNIgCgHIACAAIAPAjIAAAGg");
	this.shape_89.setTransform(-27.3,46.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9A8175").s().p("AALAqIgWhIIgBgKQABgDAEAEIAHAKIAAABIABAGQgSgWAaBOIAEAIg");
	this.shape_90.setTransform(-28.2,47.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#82746C").s().p("AgCgJIACgCIACAAIgCAGQAAAFACAFIABAHg");
	this.shape_91.setTransform(-26.6,45.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CFBBB0").s().p("AgBAAIgBgHQACADADADIAAAJg");
	this.shape_92.setTransform(-26.1,46.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#635B53").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_93.setTransform(-26.9,44.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#72706D").s().p("AgBAAIADAAIAAABg");
	this.shape_94.setTransform(-22.5,40.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#5A6261").s().p("AgFgDIgBgCIABgBIADgPIABAGIABAFIAHAgg");
	this.shape_95.setTransform(-29.9,47.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#776B63").s().p("ABoAaQAKAEgDAIQgBgEgGgIgAhIAOIgJgFIADAAIAEABIAIACIAIADIgOgBgAhvghIABgBIAAgBQAIgFAEAJIgNgCg");
	this.shape_96.setTransform(-32.7,38);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#625C57").s().p("AAMAHIAAgBIgHgJIAEAAQAFAEAAAGIgCAAgAAAAEQgEgNgFANQAAgEgEgFIAAgBIANACIAAAIg");
	this.shape_97.setTransform(-29.5,44.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#999895").s().p("AA6BbIAGgLIAGACIgFAJIgHAAgABKAmIgng2IgEgWIAOAZIAHAPIAMATIAKAGIADADIAPAKIgSgCgAAchNQAEAFgBAFIACAFIABAFIgDAPgAhbhLQAEADACABIgBAFgAhThaIABAAIAAACIgBgCg");
	this.shape_98.setTransform(-33.6,51.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#7C8A8F").s().p("AAIAnIAAAAIgBgBQgTgZgBgcQAAgOAEgOIgCASIARAwIAHATIABACg");
	this.shape_99.setTransform(-40.9,28.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#62564E").s().p("AAAAHQAHgCAFgLIgDAJIAAABIgBADIgIAAgAgLAGIABgCIAAAAIABACIgBABIgBgBg");
	this.shape_100.setTransform(-34.3,31.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#7B6B62").s().p("AAFArIgDgEQgCgGgBgGIAAAAIAFAFIAFADQgCAFACAHIgEgEgAgIguIABAAIAFAtg");
	this.shape_101.setTransform(-39.9,29.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#856D61").s().p("AAAgCIAAgBIABABIgBAGIAAgGg");
	this.shape_102.setTransform(-38.6,26.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7C6057").s().p("AAAAIIACgJIABgQIABABQABAHgCAHQgBAJgFALg");
	this.shape_103.setTransform(-33.1,30.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#DAD4CD").s().p("AgCgHQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIADALIgFgPg");
	this.shape_104.setTransform(-32.2,30.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#97908A").s().p("AAIADIghgEIAuAFIgCgFIADgCIAEAHIgFAAIgDABIgKgCg");
	this.shape_105.setTransform(-32,36.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#DAD4CA").s().p("AgFgMIAAgBQAEgCABACQADACABAHQACAGgBAGIAAAHIgKgbg");
	this.shape_106.setTransform(-32.9,26);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#9E9994").s().p("AgPADIACgFIAdgFQgLAEgBAKIgCABg");
	this.shape_107.setTransform(-33.5,20.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#635E5B").s().p("AAAAAIABAAIAAAAIgBAAIAAAAg");
	this.shape_108.setTransform(-33.2,21);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#65574F").s().p("AgJgBIACABIARAEIABAAIgEABIgDABIgBABIgEAAQgIAAAAgIgAgJgGIAAAAIAAABIAAAAIAAgBg");
	this.shape_109.setTransform(-34.2,20.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#727474").s().p("AAIAfQAGgJABgNQACATgKAFIABgCgAAGgVIABAAIABADIgCgDgAgKgdIgEAAIABgDIAGAEIgDgBg");
	this.shape_110.setTransform(-35.9,26.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CABBB6").s().p("AgBgDIADAAIADAAIACABQgHAAgGAHg");
	this.shape_111.setTransform(-37.2,23.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7F776C").s().p("AgEgEQABgBAIAFIAAABIgFAEQgGgIACgBg");
	this.shape_112.setTransform(-38.6,23.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FBF7F3").s().p("AAAAAIABAAIgBAAIAAABg");
	this.shape_113.setTransform(-38.1,24.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#776055").s().p("AgFgIIAFgEIAGAAIAAACIgFAJIgBABIgBABIABABIgDAHIgBADIgBABg");
	this.shape_114.setTransform(-38,24.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#788583").s().p("AAGgOIABAAIAIgBIgZAcIgDADg");
	this.shape_115.setTransform(-40.3,21.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#837A72").s().p("AAAAGQgFgCgEgEIAAAAQAEgDAFgCIACgBIAAABQAFACACADQABABgBAEIAAACIgJgBg");
	this.shape_116.setTransform(-37.1,21.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#897E6F").s().p("AgHAHQgYgEAggHQALgEAGAEIgFACIgUAFIAVAAIgUAEIgBAAg");
	this.shape_117.setTransform(-40.8,3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#605245").s().p("AghAOIAbgIIAVgDIACAAIACAAIADgCIABgBIAAgBIAAgBIABgPQAKAFAAAGQABAGgJAHIgGAFIgXADIgOACg");
	this.shape_118.setTransform(-40.9,3.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#DFD8D0").s().p("AAHADIgVAAIATgFIAKABIAAgBIAAABIAAABIgBABIgDACIgCAAIAAAAIgCAAg");
	this.shape_119.setTransform(-40.1,3.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#AA988D").s().p("AgqAZIACgDIgCAIIAAADgAgSAKQgJgCgGAEIAHgKIAQAEIANgCIgPAJIgGgDgAAfgcIgTAAIgNACIAAAAQAdgPAPAXIgBABQgBgGgKgFg");
	this.shape_120.setTransform(-41.6,4.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B1A39E").s().p("AAAAAIgBAAIAAAAIADAAIgCAAg");
	this.shape_121.setTransform(-15.2,23.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#7C756C").s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_122.setTransform(-11.9,12.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#7C8A8E").s().p("AADAeIgGg3IAAgBIACgDIAAABIAFA6IgBAAg");
	this.shape_123.setTransform(-13.8,5.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#9E938B").s().p("AgJAAIAGABIABACIgGAHgAAHgHIAAgCIACAAIAAAAIABABIgBABIgCAAg");
	this.shape_124.setTransform(-5.7,3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#54534D").s().p("AAAAAIABAAIAAABg");
	this.shape_125.setTransform(-3.5,-3.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#180E0C").s().p("AACAHIAAAAIAAAAgAgBgFIAAgBIABABIgBAAg");
	this.shape_126.setTransform(-6,2.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#554B45").s().p("AgDAHIAAgCIABAAIABAAIABAAIAAAAIACAAIAAAAIgBABIgDADgAAGgEIgDgCIADABIABABIgBAAgAgGgIIABgBIAAAAIAAABIgBAAg");
	this.shape_127.setTransform(-5.6,2.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0F0907").s().p("AAlAaIAEABIgEABIAAgCgAgkgVIgEgGIAMAIIgIgCg");
	this.shape_128.setTransform(-7.1,-6.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8A807A").s().p("AAJAFIgCgBIgBABIgPAAIABgDIgNgGIANACIACACIAEgBIAYACQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAIgFAAIgFAAg");
	this.shape_129.setTransform(-2.7,-3.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B3988E").s().p("AAAAEIABAAIACAJgAgBgHIgBgFIACACIAAAAIAAADIAAAAIgBAAg");
	this.shape_130.setTransform(-12.4,2.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#040201").s().p("AgHASIAKgLIAAgXIAAgBIABACQAEANgBAHIAAABIgBABIABAAQgBALgIAAIgFAAg");
	this.shape_131.setTransform(-13.7,-3.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#231915").s().p("AAHBOIgHg7IABgEIAAABIAEABIAKAAIgCAOQAIAlgGAMIgBAAQgCgCgFAAgAACgBIgNgnQAOAFgBgIIgBgBQgTgHABgZIABgEQACAEADACIADABQAEAeAGgVIABgEIADABIABAEIAAAAIgBAZIgJAKQANADABgNIADAAIAAASQgCAKABAKIABAAIAAAGIgMAAgAAIg9IAFAQIgBAEIgBAAQAAgIgDgMg");
	this.shape_132.setTransform(-14.1,0.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#95A1A3").s().p("AgLgyIABADIAWBfIgCACIAAABg");
	this.shape_133.setTransform(-15.2,-2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#413732").s().p("AAFAkIgLgJIgHgpIAHgVIADgCIAAABIAAACIgBABIgBACIgBAJQgDATAEASQAEADACgDIAAAEQAAAHAHAFIACADIAEAEIgJgCg");
	this.shape_134.setTransform(-10.5,-11.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#7A6659").s().p("AABAUQgFgTgDgWIAIADIADAOIACAQIABADQABAGgDABg");
	this.shape_135.setTransform(-11.5,-20.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#939C9C").s().p("AgIAkIARguIgHgDQACAAAAgGIgBgEIAOAFIgEAIIgNAZIgHAVIgBAAgAgFgRIgFgCIgGgQIAJARIADACg");
	this.shape_136.setTransform(-11.1,-16.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#695B52").s().p("AgFgBIAAgBIAEgCIAHgDIAAABIgCAGQgCADgBAFg");
	this.shape_137.setTransform(-1.7,-14.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#6E594F").s().p("AgBACQAAgCADgCIAAABIgDAEIAAgBg");
	this.shape_138.setTransform(-4.7,-15.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B6A79F").s().p("AAAACIgBACIgBAAIACgCgAAAgCQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAIgBABQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAIAAgCg");
	this.shape_139.setTransform(-1.7,-17.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#D9D1CE").s().p("AAAABIAAAAIAAACIgBAAgAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAgBIAAABIgCACIAAAAg");
	this.shape_140.setTransform(-1.7,-17.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#817774").s().p("AALAIQABgDgBgFIAGgDIAAAAIgGALgAgOgGIgCAAIAHgBIAAADIgFgCg");
	this.shape_141.setTransform(-4,-14.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#ABA59A").s().p("AAAAAIAAAAIABAAIgBABIAAgBg");
	this.shape_142.setTransform(-8,-12.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#110B0B").s().p("AgbAVIgDgFIAAgUIAAgBIABAAIAAABQAMAWAWgNIAHgHIAGgGIAAgBIAGgMIAHAKIAAABQgCANgOAFIgcAKIgEACQgDACgDAAIgEgBg");
	this.shape_143.setTransform(-4.7,-12.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CDC4BD").s().p("AAKAGIADgEIAFgCIACAAIgHAHgAgVgCIAAAAIAKABIADABIAAABgAgZgBIAAgCIAEABIgBAAIAAAAIgBAAIAAACIgBAAIAAAAIgBgBgAAagGIAAAAIAAAAg");
	this.shape_144.setTransform(-5.5,-12.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7B7470").s().p("AABALIgBgBIAAgBQAAgIAAgHIAAgCIAAgBIABgBIAAABIAAAUg");
	this.shape_145.setTransform(-7.9,-11.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#7B6B65").s().p("AgQgGIAOADQAAAFACAEIABAAQAKAAAEgEIADABQgIAFgHAAQgLAAgIgOgAgRgHIABAAIgBABIAAgBg");
	this.shape_146.setTransform(-6,-12.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#ECE3DB").s().p("AAAAKIAAAAIAAABIAAgBgAAAgJIABgBIAAABIgBABg");
	this.shape_147.setTransform(-9.9,-15.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#4E423D").s().p("AAGgLIACgBIgBABQgHANAFgCIAAAAQgFAEgDAHIAAABIgEABg");
	this.shape_148.setTransform(-10.4,-16.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#515352").s().p("AAAABIAAgDIAAAAIAAABIAAAEIAAgCg");
	this.shape_149.setTransform(-6.4,-18.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#898782").s().p("AAAAEQAAgEgCgCQAJgDgGAJg");
	this.shape_150.setTransform(-6.5,-19);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D5C9BF").s().p("AgMAGIgDgQIADAOIALADQAUACgJgSQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAABQAKAIgOAFIgHADg");
	this.shape_151.setTransform(-9.5,-19.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#636B6B").s().p("AgYAAIAHgMIAPgFIAVAJIAGADIgegFIgIgCIAAABIgHAdg");
	this.shape_152.setTransform(-10.7,-22.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#AFA09B").s().p("AgCAAIAFAAIAAABg");
	this.shape_153.setTransform(-8.5,-23.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#1C120E").s().p("AgKADIABgDIADgIIAAgBIARAHIgCABIgDAAIAAABIgBAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAIAAADIAAAAIAAACIAAAAIgCADIgEABIgEgHg");
	this.shape_154.setTransform(-1.7,-18.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#A19B95").s().p("AAAADQAAgDgFgBIADgBIADABQAFACAAABQAAABgGAAIAAAAg");
	this.shape_155.setTransform(-2.5,-20);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D4C7BD").s().p("AgSgJIAAABQAAAIADAHIACACIgIABgAAVAAIABAGIgDABIACgHg");
	this.shape_156.setTransform(-5,-22.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#BAACA7").s().p("AgHgCIAGABIAJAEIgPgFg");
	this.shape_157.setTransform(-33.8,-23.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#99766B").s().p("AgCAKIABgYIABAZIADAEg");
	this.shape_158.setTransform(-34.7,-30.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#B7ADA7").s().p("AgDAAIABAAIAGAAg");
	this.shape_159.setTransform(-36.6,-32.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#977D73").s().p("AgIAOIARgbIgFASIgLAJIgBAAg");
	this.shape_160.setTransform(-33.4,-34.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#C09E8B").s().p("AgCgGIAEgNIABAAIgDAng");
	this.shape_161.setTransform(-34.6,-31.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#8B837D").s().p("AAbARIACgYIgIAAIABgBQAMgLABgNIAHgDIAAACIgMA0IhHARg");
	this.shape_162.setTransform(-39,-31.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#6B5B52").s().p("AgHACIAKgHIABAAIAEADIgHAIg");
	this.shape_163.setTransform(-31.7,-36.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#B7ABA3").s().p("AgFgCIAIADQgEAHgDAHIgGABgAAGgKIABgEIAAgBIABAAIADAHIAAABIgFgDg");
	this.shape_164.setTransform(-32,-35.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#ADA19B").s().p("AgIgGIADgEIACAQIAAABIgKAJgAAKgPIAEAAIgFAIg");
	this.shape_165.setTransform(-32.2,-38.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#716F6D").s().p("AgVAYIAMgRIAJgJQgHARgOALgAAAgTIAAgBIACgFIANAAIgCAJIABgBIAIgCIgWAQg");
	this.shape_166.setTransform(-32.7,-37.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#BFB1AC").s().p("AgJAFIAIgKIALAHIgHAEIgMgBg");
	this.shape_167.setTransform(-21.9,-40.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#A5A29E").s().p("AARgFIACABIglAKg");
	this.shape_168.setTransform(-26.1,-42.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#8A6E62").s().p("AgNgNIANALIAJAGIACABIACAFIABAEg");
	this.shape_169.setTransform(-22.1,-42.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#A08D83").s().p("Ag1AZIAAgCIABgCIAAAEIgBAAgAgwARQAogtA9AQIACAEIgDABIgBAAIgMgHIgZAJIgQgBIgYAQIgYAJIACgCgAAwgYIABAAIABABIgCgBg");
	this.shape_170.setTransform(-26,-39.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#8D9894").s().p("AAQgLIAAADIgYASIgHACg");
	this.shape_171.setTransform(-29.6,-40.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#565651").s().p("AgSAFIAlgLIglANg");
	this.shape_172.setTransform(-26.1,-42.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#987D71").s().p("AgSAHIADgEQAKgMAMAAIAOACIgpAQIACgCg");
	this.shape_173.setTransform(-4.7,-24.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#6B7A7A").s().p("AACAMIACgFIgBALgAADgOIgMgBIAAgBIAIAAQAUACgOAUg");
	this.shape_174.setTransform(-3,-23.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#B6A297").s().p("AACAGIAAAAIgCAFIACgFgAAAgFIgKgFIAVABIgGAJQABgDgGgCg");
	this.shape_175.setTransform(-45.4,-3.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#8E6456").s().p("AgCgFQAGACgBADIgDAFIAAABIAAAAg");
	this.shape_176.setTransform(-45.1,-3.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#A19E9B").s().p("AAAARIgJgVIAEgLIAPAYIgHAIg");
	this.shape_177.setTransform(-46.3,3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#60574E").s().p("AAAgGIABgDIgBATg");
	this.shape_178.setTransform(-46.8,-1.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#8E928B").s().p("AAAAGIgCgHIADgEIACAGIgCADIAAACIgBAAg");
	this.shape_179.setTransform(-47,-2.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#7B888C").s().p("AgKAVIAVgrQgEAOgKAQQgEAGgDAJIAAAAIAAgCg");
	this.shape_180.setTransform(-48.7,-11.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#878885").s().p("AgHgCIABAAQAFAHAGgLIADAAIAAAAIAAABQgHAMgDAAQgEAAgBgJg");
	this.shape_181.setTransform(-48,-9.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#99857D").s().p("AgPgSIAIgEIALgFIAVACIggADIgOAkIAKAOQgZgUAVgag");
	this.shape_182.setTransform(-45.3,-7.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#A18275").s().p("AgbAkIAAgBIAPgmIAPgMIAUgDIAFAEIgVABIghAxIgBAAgAADgeIgBgFIAQAMg");
	this.shape_183.setTransform(-45.9,-13.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#738082").s().p("AgXAjIgBAAIAAgCIAxhDIgwBFg");
	this.shape_184.setTransform(-45.7,-24.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#485C60").s().p("AgDgQIABAAIAAAAIABABIAFAhg");
	this.shape_185.setTransform(-47.8,-19.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#B69080").s().p("AgGAGIAPgYIgRAlg");
	this.shape_186.setTransform(-46,-22.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#958A87").s().p("AgBAAIAAgBIABAAIAAAAIACADIgDgCg");
	this.shape_187.setTransform(-2,-49.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#8B867E").s().p("AgJAIQgCgDAJgNIANARIgCAAIgJgBIgEABIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_188.setTransform(-3.1,-50.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FCFBF9").s().p("AAAAAIAAAAIABAAIgBABIAAgBg");
	this.shape_189.setTransform(-4.9,-51);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#614F47").s().p("AAQASIgNgSIgUAEIAMgGIAHgBIgCgPIAFAGIAEALQAAAAAAABQAAAAAAAAQAAAAABABQAAAAAAABIAEADIAAADIADALg");
	this.shape_190.setTransform(-3.7,-51.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#AA988F").s().p("AABAGIADgBIABAEgAgDgIIADABIACABIABAFIAAAAIgDADIgDgKg");
	this.shape_191.setTransform(-2.8,-52.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#312721").s().p("AgDADQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBAAIABgHIAGgDIgBAGIABAOIgHABg");
	this.shape_192.setTransform(-3.9,-53.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#78706B").s().p("AgOAEIADgBIAagHIgSAIIgJABg");
	this.shape_193.setTransform(-8.5,-53.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#867970").s().p("AgIAFIAAgDIACgCIABgCIAAgBIAOgGIgBAIIgBgCQgIgHgEAMIAAAAQAFAHAIgHIAAgBIAAAIIgCgBIgGACQgGAAgCgFg");
	this.shape_194.setTransform(-5.1,-53.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#DED5CC").s().p("AgGADIgBgBQAFgLAIAGIABACIABABQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAABIAAAAQgFAEgCAAQgEAAgCgDg");
	this.shape_195.setTransform(-5,-53.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#735E52").s().p("AAAASIABgGQADgGgDgDQgEgDgDABIANgYIgFAMIACAjg");
	this.shape_196.setTransform(-3.6,-55.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#979E9F").s().p("AAAAMIAYghIAAABIgDAHIgMAQIgGALIgaAIg");
	this.shape_197.setTransform(-7.3,-55.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#433D39").s().p("AAGAcIABgJQADAIAMgFIACABIgLAHgAgXASIAAgBQAHAAgFgEIATgJIAGgJQgGAQAFAPIAAABgAAKAKIAAABIgBACgAATgdIACAAIgGAGg");
	this.shape_198.setTransform(-6.7,-54.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F9F1EA").s().p("AgFACIALgEIgLAFIAAgBg");
	this.shape_199.setTransform(-12.8,-51.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#BDB0A8").s().p("AAeAEIABgBIgDAAQgDgDgDAAQgagEgagBIADgCIAPgGIAaAJIACACIABgBIAHACIAUgDQgJANACADQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAIgIABIgEgKgAAvAMIAKABIAAABgAg4AGIABgCIAAACg");
	this.shape_200.setTransform(-7.8,-51.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#8E766E").s().p("AgMACIAWgHIAHgCIgEACIgDAAIgJAFIgMAEIAAACIgEACQgBgDAEgDg");
	this.shape_201.setTransform(-12.3,-51.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#BCAFA9").s().p("AAAAAIAAAAIAAAAg");
	this.shape_202.setTransform(-15.7,-50);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#978076").s().p("AgxAgQAAgNAFgJQAEgJAHAAIgOAcIALAOgAAcgfIAWgLQgEADABADIgNAEIgFACg");
	this.shape_203.setTransform(-18.6,-46.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#160F0C").s().p("Aj4GEIgBgCIAHgUIgBANIAPAQgAjXElIA8gwIAXgHIABgmIAAgBIAAgCIAIgOIAHgIIgKgaIgFgEIABgLIAAgDIABgUIgCgHIgEADQgDgJgGgJQgFgGgGgFIgGglIAAAAQADgIAFgHQAKgQAFgOIAKgSIgPgwIgBgCIAxhGIBIgRIANg1QAMgLAIgSIABgBIAVgQIAZgTIAngOIAAgTIAAgHIADgJIADgCIBDgnIAIgMIAagGIAkgIIAJgBQAFADgIAAIAAABIgOAGIgHACIgXAIIgWALIgDACIgNAFIgBACIgtAXQgGAAgFAJQgFAJAAANIAcAdIABABQg+gQgoAuIgCACIgBABIgBABIgBACIAAACIgMAIIgRAcIgFANIgBAZIAGAFIAJAJIAEALIgYgIIgkgFIgIADIg1AlIgPAZIgDANIAHAfIAGAEIABAFIAOAHIAIAFIgCAAIgUADIgQAMIgPAnIgBABQACAWAOgaIAAgBIAAAAIAhgBIgKAEIgNAFIgIAEQgUAbAZAUIAAAAIAAAAIABABIAKAFIACAMIgCAFIABAVIAIAVIAHADIAAAAIAjgMIATAAIgCAPIAAABIgJgBIAFgCQgGgFgLAEQghAIAXAEIABAAIgbAIIgGAJIgIALIgBACIAAAIIAAAKIABALIABAHIALAKIADAEIgBAAIgVgDIgHADIgGgBIgIAFIgRAGIgaAVIgmA2IgHAKgAiEBzIABABIABgCIAAARQAAgIgCgIg");
	this.shape_204.setTransform(-33.7,-13.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#7C7F7B").s().p("AhIAzQABgKACgIIAAATgAgbgUQAOgHAQgGQgIgMAQACIAaACIAggKIACAAIACACIgkAIIgaAGIgIAMIhCAmQALgVAZgOg");
	this.shape_205.setTransform(-17.1,-48);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#C0B4AD").s().p("AgHACIABgBIANgDIgOAFIAAgBg");
	this.shape_206.setTransform(-21,-50.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#CCC1B8").s().p("AADgFIABAAIgHAMIAGgMg");
	this.shape_207.setTransform(50.3,56.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#7C6051").s().p("AgCABIAHgFIgJAJIACgEg");
	this.shape_208.setTransform(53.1,65.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#52413C").s().p("AABADIgFgJQABAAABABQAAAAABABQAAAAAAAAQABABAAABIAEAJg");
	this.shape_209.setTransform(56,66.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#AEA19C").s().p("AgCgEIACAEIADAFIgFgJg");
	this.shape_210.setTransform(56.4,67.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#BBB3AB").s().p("AgCAJIgEgBIgBAAIgmgGIA4ACIgMAFgAgwAAIgBAAIBjgHIgNADQglAEgkAAIgMAAg");
	this.shape_211.setTransform(60,63.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#A09B92").s().p("AgpAEIBTgJIgEAEIgFABQgeACgbAEg");
	this.shape_212.setTransform(42.7,68.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#848F8E").s().p("AgYARQAJAAAJgCIgGAEQgHACgJAAgAAPAAQAJgIAFgMIgFAKQgDAHgHAGIAAAAIgCACIgDABIAGgGg");
	this.shape_213.setTransform(49.4,66.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#6C6760").s().p("AgdAKIANgFIACAAIgKADIgFACIAAAAgAAWgGIAHgDIABAAIgRAGIgEAAg");
	this.shape_214.setTransform(62.8,63);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#B5A499").s().p("Ag6AJIALgJIACgCIgBABQgHAJgKAIIAFgHgAgagDIgMgDIgCgBIAFgBIArgDIABAAIAEABIAAAAIABAAIAFgCIAjgDIAKAAQgfAOggAAQgNAAgOgCg");
	this.shape_215.setTransform(58.4,65.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#29302E").s().p("AAAAAIgFAAIABgPIAKAZIgFAGQAAgIgBgIg");
	this.shape_216.setTransform(69.4,58);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#8B6D61").s().p("AAEAFIgRgNIAEAAQAJABAGAGQAGADABAGIAAABIgJgEg");
	this.shape_217.setTransform(70,55.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#A1A099").s().p("AgMAAIADAAIAIgCIAOACIAHAAIAAADgAgTgBIAAgBIAGACg");
	this.shape_218.setTransform(73,58.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#716960").s().p("AgPAcIgEADIgBAAIAFgDgAgZAdIAIgIIARgRIgBALQgFADgDAFIgBABIgOAFIgBAAgAALAFIAFgFQACgJAGABIACAAIAAACIgPALgAADgeIACADIAAAPIgBABg");
	this.shape_219.setTransform(68.3,59.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#B8A293").s().p("AgTAQIAFgDIgBABIgGAFIgBAAgAgOAMIABAAIgBAAgAAIgGIAOgMIAAAAIABABIAAABIgQAMIABgCg");
	this.shape_220.setTransform(68.7,60.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#170F0C").s().p("AgZgFIgDgEIAAgKIASAOIgGgCIgFABIAAAFQAQAFABAFQAEACATACIAKAFIgPgCIgTgDIgBAAQgGgCgCAJg");
	this.shape_221.setTransform(71.5,57.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#A09086").s().p("AgHgCIAHABIAEABIAEAAIAAACIgGABg");
	this.shape_222.setTransform(74.2,58.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#A98E80").s().p("AgIAJQAAgJAFgHQAFgHAHAAQgJAIgBAHIgDADIADACIAAADQABADACADg");
	this.shape_223.setTransform(16.7,70.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#95796D").s().p("AgBgCIAGABIgDADIgGABg");
	this.shape_224.setTransform(18.1,68.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#807D7A").s().p("AgagDIgBgDIA3ALIgbABg");
	this.shape_225.setTransform(17.4,72.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#9C8D80").s().p("AgPADIAfgHIABADIghAGIABgCg");
	this.shape_226.setTransform(13,72.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#818D8D").s().p("AAEgMIACgEIABAAIgDAXIgFAJIgFABQAJgNABgQg");
	this.shape_227.setTransform(12.8,69.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#A8A19A").s().p("AgKAHQABgFgBgFIAAAAIAEgHIACABIgBABQgFAWARgPIAEABQgJALgGAAQgEAAgCgEg");
	this.shape_228.setTransform(16.1,68.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#F7F7F3").s().p("AgFgGIABAAQAFAEAGACQgHAHgDAAQgFAAADgNg");
	this.shape_229.setTransform(16,67.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#899698").s().p("AgcAyIAOgLIAAABIgPALIAAAAIABgBgAAbgDIgcgvIAfAuIgCACIgBgBg");
	this.shape_230.setTransform(16.4,62.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#736B66").s().p("AgCAAIACgCIADAFIgFgDg");
	this.shape_231.setTransform(19.5,62.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#67625A").s().p("AgHAFQALACgFgNIABgCQALADgFAOg");
	this.shape_232.setTransform(12.7,50.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#8D6C5C").s().p("AgBAJIADgRIgCARIgBAAg");
	this.shape_233.setTransform(14.1,50.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#857777").s().p("AgDgBIgBgCIAAgCQAFAIAAgIIAAgBIABAAIADAJIAAAEIgIgIg");
	this.shape_234.setTransform(13.8,52.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#968B82").s().p("AgDgPIADALIgDABIABADIACgDIAFAOIAAADQgDACgCAAQgHAAAEgfg");
	this.shape_235.setTransform(17.4,52.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#C4C0BA").s().p("AgBAAIACgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIgCACIAAgCg");
	this.shape_236.setTransform(17.2,52.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#80949A").s().p("AgCgXIAAgEIADAJIACAug");
	this.shape_237.setTransform(15.9,54.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#D5C8C1").s().p("Ai/BCIABAAIgBAEIAAgEgAjCA4IgGAAIAAgBIACgDIAHACIgCAFIgBgDgAhZgKIADgBIABgCIACgDIAHgOIABACIAAAAQgEAKgHAIIgDAAgAC6gfIADgSIACgUIAFASIgHADIgBAbIgCgKgACwgcIADAAIAAADIgDgDgADHgnIACAIIAAAEgAAEg+IgOgEIATAEg");
	this.shape_238.setTransform(-4.5,54.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#968D86").s().p("Ag+gMIAAgDQASASAeAFQAfAFAZgEIAVgBQgYAIgWAAQgpAAgmgcg");
	this.shape_239.setTransform(39.8,68.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#A18B7A").s().p("AgNAJIAbgQIAAACIgXAOg");
	this.shape_240.setTransform(32.2,68.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#8D796C").s().p("AAGAIIgPgRIAQAHIAAACIABAAQAAAFADAFg");
	this.shape_241.setTransform(34.4,66.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#AB9A8F").s().p("AAegJIACAAQgHAGgEAGIADACIgTgBIgkAGg");
	this.shape_242.setTransform(25.2,71.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#998474").s().p("AgLAIIgDAAIAZgPIAEAAIgZAPg");
	this.shape_243.setTransform(29.7,69.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#7B8182").s().p("AgZAQIAzghIgzAjIAAgCg");
	this.shape_244.setTransform(29.4,68.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FDFDFC").s().p("AgQAPQgIgDgGgFIgDgDIADgDIASgQIADgDIAFAAIAmAZQgIAFgIADQgJAEgJAAQgIAAgIgEg");
	this.shape_245.setTransform(19.6,70.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#DDD4CE").s().p("AgxAiQAIgDAIgFIgngaIAJAAQAEgDADgEIApAdIBEgrIABAAQAUgXANAVIgRgHIgOAPIg1AhIgQAGQgLAAgJgDIAFACIgOALgAheAiQgDgDgBgDIAAgDQAGAGAIADgAhXAEIAHgBIgSARQACgIAJgIgABbgJIAAgBQgDgFAAgGIAMAQQgFAAgEgEg");
	this.shape_246.setTransform(26.4,68.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#8F8982").s().p("AgWAIIANgKIgFgCQAKADAKAAIARgGIAAACIgoANg");
	this.shape_247.setTransform(24.5,71.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#82766D").s().p("AghgFIALAFIAJAAQAQAHATgHIAHAAIAFAAIAAABQgQAFgOAAQgUAAgRgLg");
	this.shape_248.setTransform(19.2,71.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#8B7C75").s().p("AgUAKIAfgGIABgCIAJABIgBAEIgnADIgBAAgAgEgJIABAAIACACg");
	this.shape_249.setTransform(24.1,63.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#83645B").s().p("AgBAKIABgCIgCAAIgEgEIgFgfIAHAcIAOARIAAADIACAGg");
	this.shape_250.setTransform(20.3,58.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#D0B3A9").s().p("AALAqIgCgGIAFAHIAAABgAgFAQIgIgcIADgfIADA0IAQAYg");
	this.shape_251.setTransform(20.4,56.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E0CFC5").s().p("AACAeIgFgPIgEgQIAAgUIADgGQABgBABAAQAAgBABAAQAAAAABAAQAAABAAAAQACADABAIIAFAPIgKgTIAHAzg");
	this.shape_252.setTransform(24.2,54.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#A4958B").s().p("AgDADIADgLIAEAKQgBAAAAAAQgBgBAAAAQgBAAAAABQgBAAAAABIgDAGg");
	this.shape_253.setTransform(23.7,51.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#897872").s().p("AgCgCIADADIACgBIgDADIgCgFg");
	this.shape_254.setTransform(25.2,58.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#F8F5F2").s().p("AgHAaIgIgzIALAUIACACIADAIQAHAKAIAFIgDAGg");
	this.shape_255.setTransform(25.5,54.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#ACABA9").s().p("AABgCIABABIgDAEg");
	this.shape_256.setTransform(27,57);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#3F3838").s().p("AADgIIAAAEIgFANIAFgRg");
	this.shape_257.setTransform(34.8,51.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#988075").s().p("AgBgBIADABIgDACIAAgDg");
	this.shape_258.setTransform(34.3,49.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#564E46").s().p("AgFgGIAAgFIAEgIIAAAAIABABIAGAeIAAAAIgGAFIgBADIAAAAg");
	this.shape_259.setTransform(34.7,43.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#ADA59E").s().p("AAAAOQgDgFAAgIQgIgOACgEQACgDAHACIAHALIAEAaIgBABQgFAAgFgGg");
	this.shape_260.setTransform(33.5,43.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#6B5E55").s().p("AACAAQgGgCgCACIgDgJIATAOIAAAFg");
	this.shape_261.setTransform(33.2,41.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FCF4EA").s().p("AgFAAQAEgBACABQACAAABAAQABABAAAAQABAAAAABQAAAAgBAAIgKgCg");
	this.shape_262.setTransform(38.3,41.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FCF5F3").s().p("AgIAGQgCgOATADIgQAMg");
	this.shape_263.setTransform(36.6,42.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#4B4039").s().p("AAAgBIADAAIgFADg");
	this.shape_264.setTransform(35.7,41.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#B49180").s().p("AAAgCIABgBIAAACIgBAFg");
	this.shape_265.setTransform(25.3,46.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#F1EBE7").s().p("AgKAIIAAgCIACgCIADgEQAFgFAIgDIACgBIABAAIAAAAQgLAEgIAMIgCADg");
	this.shape_266.setTransform(26.5,45.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#71706C").s().p("AgLAfIADAAIAUAAIAEgFIACABIgMAMgAgFAAIgFgQQgCgIgCgCIgDgMIAHARQACANAEAJg");
	this.shape_267.setTransform(25.6,54.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#897D7A").s().p("AgFAFIgCADIAAABIgDABgAAGgJIAFACQgIADgFAFg");
	this.shape_268.setTransform(26.2,45.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#95756A").s().p("AAFgdIAAAEIAAAVIAAACIgJAgg");
	this.shape_269.setTransform(20.6,47.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#AF9286").s().p("AgEAGIAAgBIAJgOIgDAJIgGAKg");
	this.shape_270.setTransform(21.6,43.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#4C3A37").s().p("AgHACIAPgMIgDAHIgKAOg");
	this.shape_271.setTransform(21.7,43.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#010100").s().p("AgxBJIATAAIACAAIgBABIgKATgAAFgiIACgHIAFgIQAAAGgCAFQgEALgDAEIACgLgAAYhHIADgOIAVgHQADADgDADQgGAGgGgGIgUAeg");
	this.shape_272.setTransform(23.1,51.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#797776").s().p("AgWAKIARgUIABAAIAXgBIAFAFIgSgEIgKAIQgLAGgHAIIAAgCg");
	this.shape_273.setTransform(26.8,43);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#F1ECE8").s().p("AgvB/IAogDIABgEIAFAAQALgKAMgIIATAAIgbAggAgyBhIAAAAIgFgHIAAgEIgRgXIgDg1IAHgWIALghIgFAeQgDAbAEAcIAAAAQgLACAHAPIACABIAHACIADAJIgBgBIALAZIAGADIADAFIADAGIgBAAIgFACgAAuBLIACgHQAJgSAEgTQABgGACgFIABgCIABAAIgTBMIgBABgAgIBWIgCgCIgHgIIAEgDIAYgRIAAgBIAFABIAFgBIAAADIgBADQgGAVgUAGgABIgWIAEgCIgDAOIgBgMgAg5hDIAHgLIgEANIgDATgAAAhjIAAAAIARACIABABIgYABIAGgEgAgYh5IANgDIgJADgAgGh+IAdgHIADAIIgggBg");
	this.shape_274.setTransform(26.9,51.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#79898B").s().p("AABADIgBAAIgCgHIACAAIADAJIgCgCg");
	this.shape_275.setTransform(29.6,38.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#221A15").s().p("AAIC/IgfAIIAEgHIAKgCIACgCIADgDIABgBQALAEACgJIABgCQAPgOgUAJIAAAAQAEgGABgGQAHAKAQgSIAHACIgDAFQgIAAgFAIQgFAGAAALQAcAVAogPIAAgBIApgNIA1gkIANgPIARASIAEABIABABQADAFAFAAIAWAJIARACIgKABQAAABABABQAAABAAAAQABABAAAAQAAAAABAAQAXADAWAAQgZAEgggFQgegFgSgTIgbARIgbARIg+ATIgRAGgAC1CQIAYgDIgHgIgAgcCtQAGgDAEgFIAMgQQgBARgJANIgFABIgFAFIgGAHIAEgTgAgDCRIAOgKIABADIAEADIgFAIIgFgBIgBABIgCAEIgDAFIgGALgAFHCZQAIAAAIgCIgCACIgUACgAAGB/IAEAFIAAABIgNALIAJgRgAFyCIIAAgBIgBADIgBAAIACgCgACGCCIACABIgBAAIgBgBgAGOBwIABgDQABgFgEgEIgFgBIgBACQgCAFgDADQACgIAAgIIAZAIIABABIgEAAIAAACIAHAAIAmAGIgsADIgFABIgDACQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgCACIgJAGIAJgPgABVBzIAiAKQgTgBgPgJgAGABwIAAABIgBAGIgDADIAEgKgAl0ByIAAgFIgDgDIAAgJQABAJAEAIIgCAAgAHaBqIAaAAIgjADgAmKBZIgBAAIgCgCIALAAIABAKIgBAFgAIIBbIAOgEIAAAAIgBABIgEADIgFADIgVADgAAoBRQgIgGgCgIQgDgJgEgFQgBgMgDgLQgGgRgJgLIAAgEIACgbIAGgDIABAAIACAMIACAMIAGAzIAdAwIgMgKgAmZBLIAFgJIASAFIACAEIgZAAgABuA4QgFgIgDgKIgDgJIAGAOIATAIIAMgLIAGABIAAABIgaARIgBABgAgKgLIABAAIAAAAIgBAAgAhKgaIAMAEIgIABIgEgFgAhqgfIAHgBIALADIgSgCgAiRgkIgggHIgCAAIAFAAIAmAEIARAGIgagDgAlUhDIAKACIAAAAgAlEhEIABgBIAIADgAoUjIIgBgCIAGAEIAAABg");
	this.shape_276.setTransform(13.8,52.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#5E5953").s().p("AAAAAIAAAAIAAAAg");
	this.shape_277.setTransform(25.6,31.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#8C847E").s().p("AAAAAIAAAAIABAAIgBAAIAAAAg");
	this.shape_278.setTransform(25.6,31.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#C6BAB6").s().p("AAAAAIACgCIgDAFIABgDg");
	this.shape_279.setTransform(21.3,39.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#413036").s().p("AgCAEIACgCIgCADgAABgBIAAAAIACgDIgDAFIABgCg");
	this.shape_280.setTransform(20.3,42.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#020100").s().p("Ai+ArQgCgDALgLIAcACIgKAEQgNAEgMAGIgCgCgACoAAIgDAAQgEAAAAgDQAOgEAFAEQAAABAAAAQABAAgBABQAAAAgBAAQgBABgBAAIgHAAIgCAAgAC/gsIgIAGIgGADIAOgJg");
	this.shape_281.setTransform(0.2,50.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#667279").s().p("AACARIgCgHIgBgMIgBAAIgEgRIABgCQADgEADgBQAGACAAARIgBAig");
	this.shape_282.setTransform(15.3,49.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#797069").s().p("AAJgSIgFAcIAAABQgIAIgDAAQgGAAAWglg");
	this.shape_283.setTransform(15.6,38.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#3C322D").s().p("AgCADQgVgHAiACIgLAFIgCABIAAgBg");
	this.shape_284.setTransform(4,43.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#C3B7B2").s().p("AB7ATIgLgCIAFAAQAEgBAEgDIAAABIgBAFgAAEAGIAAgBIAAABgAh8gMIAAAAIAVAAIAAAAgAACgSIAAABIAAACIAAgDg");
	this.shape_285.setTransform(-4.3,40.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#876A5F").s().p("AABglQgBADACADIABABQACALABAMIABAJIgEAYIgIAMIgBAAg");
	this.shape_286.setTransform(7,30.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#6D635B").s().p("AgEABQgBgBAFgCIAFAEIgCABQgGAAgBgCg");
	this.shape_287.setTransform(1,35.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#7C7975").s().p("AgBgEIABAIIgCABgAABADIgBgHIADAGIgCABg");
	this.shape_288.setTransform(-2.3,30.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#756D67").s().p("AgFAAIACAAIAKAAIgBAAIgFABIgGgBg");
	this.shape_289.setTransform(3.6,36.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#787068").s().p("AgCABIADgCIACABIgDACg");
	this.shape_290.setTransform(1.6,29.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFF00").s().p("AC+A6QgJAAgIgGIgDgDIgEgFQgFgIAAgKQAAgJAEgHIAFgHIAHgEQAHgEAJAAQAJAAAHADIAHAFQAFAEACAGIAAAAQADAGAAAHQAAAOgKAJQgFAFgGACQgFACgHABIgDgBgAjUAJQgDgDgEgFQgGgJAAgOIAAgHIACgHIABgDIADgHIAAgBIABgCIABgBQAGgHAHAAQAHgBAFAHIADAEQADAFACAGQABAGAAAIIAAACQAAANgGAIIgBACQgGAIgIABQgEAAgEgDg");
	this.shape_291.setTransform(-16.1,29.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#010001").s().p("AEBDJQgDgGgDgMQAnARgTgBIgCACQgDAEgCABIgBAAQgDAAgDgFgAijAxIAUgLIANABQAFAAACgEIAAgBIgIgDIAXgMQALgEgDAOQgLgDACAPIgUAOgAivAWIANARIgBACIgBAAQgNAAACgTgAiKAjIAAAAIAJACgAB1h3IgBAAIAEACIgDgCgAkUjNIAkAYQgPACgCAQIgBAAg");
	this.shape_292.setTransform(-5.4,42.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#78716A").s().p("AAYgnIgVAuIgaAhg");
	this.shape_293.setTransform(13.1,36.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#6F655F").s().p("AhZAXIABAEIgBACIgDACIgEACgABhAAIAAAAIAAAAgAhEgNIAAAAIAAgJIABgJIAAABIABADIAGADIgBACIgCACIAAADIAKAHIAAABg");
	this.shape_294.setTransform(-1.6,41.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#736E69").s().p("AgBgCIACAEIABABIgDAAg");
	this.shape_295.setTransform(16.8,28.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#96857D").s().p("AAFAeIgBgGIAEgFIABABIAAAHIgDAEIgBgBgAgIgeIABAAIAAACIgBgCg");
	this.shape_296.setTransform(15.8,26.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#6C7775").s().p("AADADIAAgBIgBABIgFgDIAGgDIABAHIgBgBg");
	this.shape_297.setTransform(11.9,24.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#A39892").s().p("AAAAAIABAAIgBABg");
	this.shape_298.setTransform(17.7,17.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#ABA6A1").s().p("AgNACIAbgDIgCABIgSACg");
	this.shape_299.setTransform(6.4,23.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#010101").s().p("AA1DrIACgCQAFgFADgFIABABQAUgKgPAOIgBADQgBAFgHAAIgHgBgAD/C4IAIAIIgZADgADshcIgSgKIAAAAIgCgPIAIABIABADQACAIAHAEQAFAEAEAAIACADIAJABQAFACACADQgEAGACAJIABADIgBACgAkFhRIAAAAIgBAMIABgMgAglhvIABgDIgBgBIgOgJIAEABQAGAAAGgDQAFABACAGIgJAIgAgTiAIACgCIABgBIgIAJQABgDAEgDgAhLiKIgHgQIgCAGIgBgKIAAAAIABgJIgIgNIgOgOIATgDQANgDgEgOIgBgCIAAAAIAzgTIACAAIgDABQgHADgDAEIgDABIABABQgEAHAGAMQACAEAEgBIAIAAIgBARIgGACQgHgEgIAAQgJAAgIAEIgBAAIAEgDIgCgBIgEADIgNgDIAEAQQgEAHAAAJQAAAKAFAIg");
	this.shape_300.setTransform(8.1,47.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#736761").s().p("AAoAKIACAAIA6gVIAHAAIAAABIg/AWIgEgCgAhqgGIACAAIADAAIgFAAg");
	this.shape_301.setTransform(-5,24.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#6C6762").s().p("AgIABIARgCIgCABIgPACIAAgBg");
	this.shape_302.setTransform(6.7,23.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#6B6058").s().p("AgEACQACgGACABQACABACAGIgIgCg");
	this.shape_303.setTransform(-1.2,11);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#827B74").s().p("AgFgRIADAfIACgKQABADAGABIAEgBIgNAHIgIAEgAABgLIABAAIgBADg");
	this.shape_304.setTransform(0.6,6.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#75716D").s().p("AAfASIABgIIABAIgAgggGIACgEIgBAEIgBAAgAAZgRIABABIAAAAIABADIgCgEg");
	this.shape_305.setTransform(4.1,5.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#686159").s().p("AgEAAIAJAAIgCABIgHgBg");
	this.shape_306.setTransform(6.9,2.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#DDCFCB").s().p("AgJgFIATAFQgDACgCAEg");
	this.shape_307.setTransform(16.5,10.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#685953").s().p("AgNACIADAAIgBgCIgGgJIAjATg");
	this.shape_308.setTransform(17.5,11.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#CABDB8").s().p("AAIgDIgBABQgEAEAGACIgIAAIgJAAg");
	this.shape_309.setTransform(15.5,7.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#9A867B").s().p("AgOAFIATgJIAKgDIgNAHIgQAIg");
	this.shape_310.setTransform(16.1,7.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#B1A49F").s().p("AACAGQgFAAgJgHIAZgEIgBAFQgEAGgGAAIAAAAg");
	this.shape_311.setTransform(9.6,12.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#4E5C60").s().p("AALAXIgDgBQgHgDgEgIQgIgLAAgQIACgGIACAAIAAAHIAAAAIABAJQACAIADAIQADAHAFAEIAFACg");
	this.shape_312.setTransform(14.7,9.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#605C53").s().p("AgBACQABgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIgBADg");
	this.shape_313.setTransform(11.8,0.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#7D726D").s().p("Ag1ARIACAAIABAAIgCACgAAMAOIAagSIgZASIgBAAgAgmgCQASADADgNIAAgBQgOgDgLAFIACAGIgGgHIAdgGIALAIIA8gGIgDADQgyACgmAUQADgFgEgGg");
	this.shape_314.setTransform(12.6,5.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#605752").s().p("AAAAAIABAAIgBAAg");
	this.shape_315.setTransform(39.3,21.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#B1A49C").s().p("AgHgEIAHACIAHAEIABAAIgJADg");
	this.shape_316.setTransform(32.1,13.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#7C706D").s().p("AgYAAIAxAAIgxAAIAAAAg");
	this.shape_317.setTransform(37.1,14.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#DBD1CB").s().p("AABADIgHgFIANACIgFADIgBAAg");
	this.shape_318.setTransform(32.8,13.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#928882").s().p("AgSAAIAeAAIAHABg");
	this.shape_319.setTransform(37.3,15.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#746C69").s().p("AgNAGIABgBQgKAFgLgCIAKgDIAFgDIgNgCIgIgBIgCgBQAqgMAaAEQAIABAHAEIgJAAQgQAAgRgBIgEALIgDADIACAAIgCADIAAABQgLAAAFgGg");
	this.shape_320.setTransform(35.3,13.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#010000").s().p("AADAEQgDAAgGgEIAKgCIABgBIACAEQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_321.setTransform(-39.3,21.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#615550").s().p("AAAAAIAAAAIABAAIgBAAIAAAAg");
	this.shape_322.setTransform(29.9,13.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#675D56").s().p("ABJAuIgBgBQAKACgGABIgDgCgAASAfIAFgDIADAEIgIgBgAAJAfIABgBIAAABgABBAUIgKAAIgBAAIgBgCIAfADgAgtAUIAKgJIgSgJIAXgHIAYAFIAAgRIgGgGQghgXgnACIAVgCIAKgBIAQAHIAZALIANAdIgaAQIgDAAIgKADIgGABIgBAAg");
	this.shape_323.setTransform(26.3,13.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#766A62").s().p("AAlALIgUgFIgQgGIgJAAIgrgJIAJAAIAtgBIAoAOIAAgBIAIgIIAAAAIAAACQADAOgPAAIgCAAg");
	this.shape_324.setTransform(20.8,8.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#A7ADAA").s().p("AgCALQAIgOgKgIIAGADIABACIACAIIAAABIgHAJIAAgBg");
	this.shape_325.setTransform(25.4,8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#A99F98").s().p("AAdADIg8AAIAugFIABAAIAQAFg");
	this.shape_326.setTransform(20.8,6.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#815B50").s().p("AgCADIAFgHIgFAJIAAgCg");
	this.shape_327.setTransform(29.1,6.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#80655A").s().p("AABANIAFAAIAFAEQgFAAgFgEgAgDAHIgEgFIAEADIADAHIgDgFgAgKgQIACAAIgCAFIAAgFg");
	this.shape_328.setTransform(31.1,9.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#6F8487").s().p("AACAMIgFgiIAHAfIgHAOg");
	this.shape_329.setTransform(30.8,2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#6F6258").s().p("AAAADQAAgBgBgKIADARg");
	this.shape_330.setTransform(32.3,1.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#706862").s().p("AgwAQIAdgeIAIADIgJgBIgZAcgAAxAMIgLgTIAGgBIAFAVg");
	this.shape_331.setTransform(34.8,6.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#685F54").s().p("AAAACIAAAAIgBgEIABgBIACAHIAAAAIgCgCg");
	this.shape_332.setTransform(40.4,4.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#665E56").s().p("AgEAHQgKgCgJgKIAMAJIAYgCIAEgCQgKAHgHAAIgEAAgAAUgBIABgCIADgDIgBACIgCACIgCACg");
	this.shape_333.setTransform(36,4.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#F2EBE6").s().p("AgQACIAYgGIADgBIACABQAFABgCADIgBABIgDADIgEACg");
	this.shape_334.setTransform(36.5,3.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#B9AFA8").s().p("AgVgDQAQABAUgDIgYAFIAYAFIgYABgAAWAAIgBABIgCACIADgDg");
	this.shape_335.setTransform(35.8,3.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#4E433D").s().p("AgCADIAGgGIgGAHg");
	this.shape_336.setTransform(73.3,43.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#968073").s().p("AgKAKIAKgJIAGgHIACgBIADgCIgSATg");
	this.shape_337.setTransform(73,43.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#4B4441").s().p("AgaBqIgBAAIgGgCIgBgBIAAAAIAAgCIATAEIgIABIgCAAIgBAAgAAjhpIAAAIIgDAHg");
	this.shape_338.setTransform(74.4,48.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#B3ACA5").s().p("AABACIgBgDIABADg");
	this.shape_339.setTransform(67.8,38.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#1E1413").s().p("AgHAAIgCgEIgBgBQAKAIAIgDIACAEQgCABACAAIABABg");
	this.shape_340.setTransform(68.7,38.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FCF1EE").s().p("AgCABIAEgCIACABIgGACIgBAAIABgBg");
	this.shape_341.setTransform(70,39.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#E6D9D5").s().p("AAAAHIgHgBIgOgJIgBgBIATAGIgBgCIAGAAIgBgCIgFACIgCgFIADgCIACABQACACADgBIACAAIAQADIgRAKg");
	this.shape_342.setTransform(70.2,39.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#5E6162").s().p("AgEABIADgCIAGABQgCACgDAAIgEgBg");
	this.shape_343.setTransform(71.6,38.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#695C53").s().p("AgIAcIADgLIgDALIAAAAgAAAAAIAJgbIgJAug");
	this.shape_344.setTransform(67.9,29.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#5E6B6E").s().p("AgCgEIALACIAAABQgJAAgHAGIAFgJg");
	this.shape_345.setTransform(69,25.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#76675E").s().p("AgNBDIAPgNIAHhAIgIAdIAAgGQABgMAAgMQAAgbgGgTIgBgCIAAAAQAHAHgCgNIAAgCIAHASQADAQgCAQQAAAFACAEQADAJABAMQABAhgaAWIgCgBg");
	this.shape_346.setTransform(72.8,33.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#4F4338").s().p("AABgDIANgCIgPAGIgMAFg");
	this.shape_347.setTransform(42.9,41.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#937B6F").s().p("AgWALIAAgCIACgDIgCAVgAALgWIAGgCIAGgCIgXAOIALgKg");
	this.shape_348.setTransform(37.8,48.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#E9E1DB").s().p("Aj2CeIAAgBIgBAAIgFgDQAmgCAWgkIgGAUIgWAUQgMAHgLACQAAgEgDgDgACkBbIACgXIgCgXIAFADIgEAAIAAAKIACAUIgBACIgDANIgSASgADhBTIgFgCIAJABIAAABIAAABIgEgBgADABCIAAgBIABABIgBAAgAimAXIABgOIADgUIABgIIATgLIAYgPIALgDIgsAYIgQA0IABgFgACngyQARAEAOgKIABAAIACAAIATgUIANgLIgHAKIgdAeIgZACgADvhdQAHgIAFgJIABgBIABAKQgEAOgEAUgAAXh6IgMAPIgMADIAYgSgAAqiIIAIgGIgFAHIgIADIAFgEgABdiiIAJgCIAAAHIgSgCIgFAJIgdAIQAUgOAXgGg");
	this.shape_349.setTransform(52.1,50.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#B8ADA9").s().p("AAAAAIAAAAIAAAAg");
	this.shape_350.setTransform(58,31.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#160B05").s().p("AgGAFIgCgBQgCgDAOgFQABAAABAAQAAgBABAAQAAAAAAABQABAAAAAAIABADIAAABIgKAFIgEAAIgBAAg");
	this.shape_351.setTransform(55.6,32.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#130805").s().p("AgKACIAMgGQADAAADACIAAAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAAAIgCABIgBABQgHADgDAAIAAAAQgFAAgDgDg");
	this.shape_352.setTransform(53.1,33.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#5C5049").s().p("AABAIQAAgGgEgCIABgIIAGAKIAAAHg");
	this.shape_353.setTransform(59.1,28.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#ADA39E").s().p("AgBgCIACABIABACIgDACIAAgFg");
	this.shape_354.setTransform(59.4,29.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#41362E").s().p("AgvAYIAqgYQADADAEAAIgyAVIABAAgAANgFIAAABQgDgDgDAAIAcgQQACADAEABIAHAAIABACIgIAEIgCABIgBgEQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgPAGACADIACABIgHAEQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_355.setTransform(52.7,33.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#354B51").s().p("AgDgJIAGgNIAAAEQgEATgCAWg");
	this.shape_356.setTransform(56,25.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#909A9C").s().p("AAGgLIgDAGIgCAFIgGAMg");
	this.shape_357.setTransform(56.2,23.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#435154").s().p("AABgBIAAABIgBABIAAABg");
	this.shape_358.setTransform(56.5,22.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#5E504C").s().p("AAAAAIABAAIgBAAg");
	this.shape_359.setTransform(41.8,17.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#826F6A").s().p("AgQADIAhgHIAAACIgaAHg");
	this.shape_360.setTransform(40.2,15.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#91756C").s().p("AgEgEQADAEAEABIACgCIAAACQgDAEgCAAQgDAAgBgJg");
	this.shape_361.setTransform(45.9,13.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#89867C").s().p("AgJABIAAgBQALgIAIAJIAAAAQgGAEgEAAQgFAAgEgEg");
	this.shape_362.setTransform(49.6,7.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#777A76").s().p("AgsgBIBWgCIACAHg");
	this.shape_363.setTransform(36.8,11.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#D2C8C2").s().p("AgoAHIgGgEIBVgDIgCgGQACACADgBIAFAKIhWACIgBAAg");
	this.shape_364.setTransform(36.4,10.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#805847").s().p("AAAgEIAAAHIAAABg");
	this.shape_365.setTransform(41.8,9.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#7D7D77").s().p("AgQAwIAWgbIgPgKIgIgMIAAgBIADABIATARIgGgeIgGgjIABAAIAWBOIACAEIgHADIgBAAIgBABIgZANIAAgCg");
	this.shape_366.setTransform(43.6,10);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#C1B6AB").s().p("AgEAgIgBgHIgBgDIAAgDIgBgGIgCgQIAAAAIAFgPQAHggABAlIAGAhIgJgpIgGAPIADAog");
	this.shape_367.setTransform(42.4,6.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#7A7168").s().p("AAGATIABgHIAFgVIghgBIABgBQABgDAEADIAdgDQAFgBAAgFIADAfIgCAAQgBgkgIAfIgFAPIAAAAg");
	this.shape_368.setTransform(40.8,4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#8A9B9B").s().p("AgEgIIAAgBQAEgGADADIACAUQgBAFgEABg");
	this.shape_369.setTransform(42.2,1.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#A37668").s().p("AACAZIgGglIgCgCIACgZIAAADIADAUIAIA4g");
	this.shape_370.setTransform(44.1,5.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#766F69").s().p("AgJANIgGgFIgCgFQgCgFAIgGIAFgEIgFAVIAegQIAAABIgGAEIgEACIgPANIgDAAg");
	this.shape_371.setTransform(47.7,2.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#CEC3BB").s().p("AgHAGQgBgNAOgDQgQAIARAFIABAAIgPAIIAAgFg");
	this.shape_372.setTransform(53.6,8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#665D57").s().p("AAAgIIAVgEIgTAPQAPgTgYAYIABAAIgBAAQgJAFgDAAQgHAAAagVg");
	this.shape_373.setTransform(54.2,5.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#B6B2AD").s().p("AgHAHQAYgYgPATIgIAFg");
	this.shape_374.setTransform(54.2,5.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#8C8E8D").s().p("AATAMIgDAAQAAgJgLgFQgHgFgLgBIgBAAIAAAAIgGAAIAGgEIARAEIASASIgBAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIAAgBg");
	this.shape_375.setTransform(51.1,3.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#6F7171").s().p("AAAAAIACAAIgDABg");
	this.shape_376.setTransform(52.7,4.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#8A796C").s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_377.setTransform(52.3,1.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#968A83").s().p("AgmANIgEgEIgCAAIArgFIAsgVIADAAIgZAQQgOACABANQgFgJgDAMQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAAAQgLADgIAAQgLAAgFgFg");
	this.shape_378.setTransform(52.1,7.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#D4CBC5").s().p("AgBACIAAgBIAAgDIABACIACADg");
	this.shape_379.setTransform(56.4,1.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#726E6B").s().p("AAWAKIAAgHIgGAAIgMgMIgiAJIgBAAIAjgLIAcATIgIAEg");
	this.shape_380.setTransform(54,0.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FCF7F3").s().p("AgFgBIgBgHIAJALIAEAFIAAABIgMgKg");
	this.shape_381.setTransform(73.6,21.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#D9CDC7").s().p("AgYBmIgDgCIAMACIgFACIgEgCgAAbhgIAAgBIgFgGIAFADIAAAAIABAEIgBAAg");
	this.shape_382.setTransform(71.6,32.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#66797C").s().p("AAAAAIABABIADAIgAgDgIIABABIACAGIAAABg");
	this.shape_383.setTransform(72.5,25.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#826B62").s().p("AAAAAIAAAAIABAAIAAAAIgBAAg");
	this.shape_384.setTransform(68.9,12.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#E0D6D1").s().p("AAMAPIgBgFIAGACIABAGIgGgDgAgQgPIAAgCIAFAAIAJAHIADAHg");
	this.shape_385.setTransform(74.1,20);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#779B9F").s().p("AAAAGIAAgNIAAAAIABAPIgBgCg");
	this.shape_386.setTransform(76.8,22.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#B5ADA5").s().p("AAPANIAAgCIgBgDIABgFQAAgHgCgHIgBgDIACACIADAJIAAAAIAEAIIAAACQABAIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAgAgUgMIAAgBIAOgBIgCAEg");
	this.shape_387.setTransform(70.7,26);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FDFCFB").s().p("AACADIgLAAIAAgBIADgEIAPAAIABABIAAAEg");
	this.shape_388.setTransform(70.1,23.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#7F675F").s().p("AAFAEQgGgFgKAAIAAgBIACgEIACgDIAIAAIAAgGIAIAJIABADQACAGAAAIIAAAFQgBgHgGgFg");
	this.shape_389.setTransform(71,25.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#E9E0D9").s().p("AgDgCIAAABIALAAIgCACIgNACIAEgFg");
	this.shape_390.setTransform(69.4,24.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#352B27").s().p("AAQCDQAGgEAEgGIABABIgKAJIgBAAgAAIBYIACgCIABAAIACABIgBABIgEAAgAgBBYIgGgEIAGABIACADIgCAAgAgXBJIAAAAIABAAIAAABIgBgBgAg6AVIAAABIABAFIAAADIAAACIgBgLgAhBAAIAIgcQgCAMAAANIgEAJIgCgGgAhLgGIAAgCIACgNIAEARQgDgCgDAAgAAZgwIgCgIQAGANADAOgABGhIQgBgHgDgEIgBgRIADAAIACAMQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIADABIgBAqIgFgegAAThBIADADIgBADgAAYhvQgXgGALAPIgNgBQAIgHAKgHIACgBIgbACIgHAHIAFgJQAKgBAGgHIADgEIAMAAIAAACIASALIABACIABACQAAAHAGADIACABIABAFIgBgBIAAABIgEAAIgCAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIAAADg");
	this.shape_391.setTransform(70.3,31.4);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#060202").s().p("AgjBFIABgCIABAPIgCgNgAgkA7IAAgDIABAEgAgnAuIgCgBIAAgBIAEgKIABAOIgDgCgAAGhIIAHgHIAdgCIgCACQgLAGgJAHIgSgBIgDAEg");
	this.shape_392.setTransform(68,27.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#8B7C74").s().p("AgbANIAXgUIgUAUgAgDgIIADgEIAZAIIADAGg");
	this.shape_393.setTransform(59.1,4.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#9F877D").s().p("AgHgHIAHgHIgBACQgFAPAQAJIACgBIAAADIgEABQgcgFANgRg");
	this.shape_394.setTransform(62.4,1.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#707573").s().p("AACANIADgGIgCAIIgBABgAgFgNQAMgHgBASQgBgKgKgBg");
	this.shape_395.setTransform(63.3,1.2);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#706660").s().p("AgFAJIAggDIAMgKIgLALIgGAEgAgXAIIgJgIIgCAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgDgHIAaATg");
	this.shape_396.setTransform(65.5,4.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#0C0806").s().p("AhABsQAEgDABgHIABgCIADAKIgJADgAg6A/IgBAJIgBgBIAAgEQADgXAIgXQAHgRAEgQQAHgbAUgTQAJgKALgGIAGgDIgLAIIgBABIgIAJQgMAPgGARIgCAEQgVAtgFA0IAAABgAhSAWIABgCIgCAGgAAohTIACgBIgBABIgBAAgABOhoIgCgCIAIADIgGgBgABIhpIAAgBIgCgCIAFABIACADIgFgBg");
	this.shape_397.setTransform(64.7,20.9);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#A1A29E").s().p("AAAAAIgBAAIgCAAIAHAAIAAABg");
	this.shape_398.setTransform(71.3,9.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#674D41").s().p("AAAABIgEgCIAEAAIAEADIgEgBg");
	this.shape_399.setTransform(71.7,9.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#BC9F92").s().p("AADADIgDgCIgDgDIAAgBIAFAFIACACIgBgBg");
	this.shape_400.setTransform(72.1,10);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#BAB8B6").s().p("AAAgEIAAAAIABACIAAAHg");
	this.shape_401.setTransform(67.4,-0.3);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#5A6D73").s().p("AAAAAIAAgHIAAAAIAAAIIABAHg");
	this.shape_402.setTransform(67.5,0.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#B39285").s().p("AAIAuIgNgsQAFACAHgCIAOAeIgXAagAgVgzIAAgGIATAnIgIAEg");
	this.shape_403.setTransform(68.6,-0.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#807674").s().p("AgDAAQALgKgFAOIgCABIgBAAQgFAAACgFg");
	this.shape_404.setTransform(61.1,-5.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#9A8B84").s().p("AgBAAIADAAIgCABg");
	this.shape_405.setTransform(63.7,-5.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#736E67").s().p("AgEgBQALgIgCAKIgCACIgEACQgEAAABgGg");
	this.shape_406.setTransform(63.1,-6.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#C0B8B0").s().p("AgDAAIAAAAIAAAAIABgBQAIADgCAAIgHgCg");
	this.shape_407.setTransform(63.3,-10.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#604D43").s().p("AgIAPQgHgGAagYIgTAfIAAgBg");
	this.shape_408.setTransform(67.4,-9.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#A98578").s().p("AgNALIATgfIAHgGIABAAIAAACIgcAzg");
	this.shape_409.setTransform(67.9,-8.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#030202").s().p("AlDEaQABgFgCgIQgBgEgEgBIgWgEIgMgBQAEgFgCgIIgCgDIAQgLQgNgCAOgJIABAAIAFgDQAGAHAIgFIAagpQAQABgGgQIAKgWQAEALAPgEQALgCALgFIAZgMIAJABIgHAKQgOAKgIARQgHANgFANIgIAIIAAAVIgCAJIgLgCQAGgUgXAYIgCAgIgGAGIgHAOIAAgGQgQAJAGAJgAkNDDIAAgBIAFgcQghA3AcgagAEBD5IgKgDQgGgDgGgFQgYgVgLgfQgFgOgBgPIgCgPIAAgIIAKgEQAHgEgBgIIACABIACACIABAJIAAACIABALIACAMIAAAIQgBAOAGAMQANAaAYAIIADACQADADAGgDQALACAPgCQA2gmgOhBIgBgHQgCgggJgeQAHgLgKgJIgHgHIgBgEIAAAAIAAgCIAAgDQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAABgBIABAAIAEAAIAAgBIABABIAGACIABABQAFADADAFIABACQADAFABAHIAGAeIAAAAQACAPABAOQAEAqgKAoIgDAIIgBABQgFAKgHAHIgGAHIgNAKIgCACIgCABIgHAHQgFAGgGAEQgKAIgMAAIgJgBgAitCBIgSgFIgNABIANgGIAFgCIADAEQAGgHAGAPIgCAAgAkGBrIgBAAIgFgBIABgCQALgCgCgNQAIAKANgGQAagMAdABIADACIAAAAQgXAHgWAKIgsASgAFdAaIgEgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIgCgMQAGgCACgHQADgJgBgKQgCgcgMgZIgDgEIAAgUQABgeAEgdQADgXABgXIAAgWIAAgYIgBAAQgFAFgFAEQgeAYgkAJIgCABQgIACgFgCQgDgCgDgDIAAAAIgCgCIAAAAIgBgEQgBgBABAAQAAgBAAAAQAAgBAAAAQAAgBABAAIACgCIABgBIAIgEIAJgDQAggJAbgVQgggBgdgPQgQgJAMgNIACAAIADgBQAZAKAbAFIAVADIAFABIADABIADAAQAFABADACQADADgCAGQANAIgDAVQgCAIABAIQACAtgGArQgFAdAAAeQgBApAIAnQAEASgLABIgCAAIgDAAg");
	this.shape_410.setTransform(43,20.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#725F59").s().p("AgBAKIAFgGIgEAGgAgDgHIADgCIgDADIAAgBg");
	this.shape_411.setTransform(64.1,-18.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#67615C").s().p("AgIABIAFgBQAUABgNAAIgMAAg");
	this.shape_412.setTransform(69.4,-19.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#6C7D7F").s().p("AgKARIAGgXIAJgHIABgBIAFgDIAAgBIAAAFIgOALIgHAVIAAgCg");
	this.shape_413.setTransform(66.7,-13);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#807871").s().p("AgKAFQgDAAgDgDQgCgCAAgDIAigBIgBAAQgUAEAYgCIgdAHg");
	this.shape_414.setTransform(68.4,-21.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#BBB4AF").s().p("AABAAIAAAAQAEgBAEABIAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgLABQgGAAANgCg");
	this.shape_415.setTransform(69.8,-22.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#797269").s().p("AgDABIAHgCIgCADIgFgBg");
	this.shape_416.setTransform(71.1,-14.7);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#7B7267").s().p("AAAgCIANADIgDACIgGAAQgeAAAagFg");
	this.shape_417.setTransform(70.7,-17.7);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#A08075").s().p("AAAABIABgBIAAABg");
	this.shape_418.setTransform(69.3,-11.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#C3B7B1").s().p("AAFgBIgBABIgBAAIgGACIAIgDg");
	this.shape_419.setTransform(73.4,-18.8);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#786357").s().p("AgQAGIAfgMIACgDIgCAHQgQAFAPgDIgGAEIgEAEIgHACg");
	this.shape_420.setTransform(72.4,-18.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#C4BBB4").s().p("AgLgBQAMgGALAHIAAAAQAAAEgMAAQgJAAgCgFg");
	this.shape_421.setTransform(71,-24.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#6C5F58").s().p("AAAAHQgLgBgDgIQAOgHAOAJIABAAQABAHgOAAIgCAAgAgLgBQACAGAJAAQAMgBAAgEIAAAAQgGgDgGAAQgFAAgGACg");
	this.shape_422.setTransform(71,-24.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#6B6358").s().p("AgEgGQACAEADgBIgBADQgBAHgCAAQgBAAAAgNgAAEgEIABgBIAAABIgBAAg");
	this.shape_423.setTransform(73.7,-21.5);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#605855").s().p("AgGgHIADAAIAAABIAKAOIgNgPg");
	this.shape_424.setTransform(55.4,-8.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#58625F").s().p("AABgLQAEAGgFAPIgBACg");
	this.shape_425.setTransform(50.4,-4.2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#E5DCD7").s().p("AgGBSQAXgRAVgbIgEgZIAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABABIABAYQgRAbgWASQgKAFgMADIgFACQALgFAKgHgAgiA/IgBgBIAHgDQABAQAJgKIAAgDIgQgnIgJg3IACAAIAZBmQgEADgEAAQgGAAgEgKgAgJAIQgDgBgBgDQgBgCACgDIAGgFIgCALIABACIADAAIAEAEIgJgDgAAPgVIAVgEIgLgTIgLgDQALABAIAEQALAHAAAJIgCABIgNAIIgJgBIgGgBIgRAMgAgXgpIACAFIgGACgAAHgwIAFAAIgJADgAgJhFIAHgVIACgDIAHAIIgTAcIgFAEg");
	this.shape_426.setTransform(48.3,7.4);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#677A77").s().p("AAIgLIAEgDIgXAdg");
	this.shape_427.setTransform(48.2,0.1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#340D07").s().p("AgBgXIABACIACAVIgCAYg");
	this.shape_428.setTransform(43.4,1.9);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#191312").s().p("AAJBCIgBgDIgWhOIgCggIgCgUQABgFAFABIAAAAIADAvIABADIAHAlIAEAOIAQAoIgBACQgGgBgDgFg");
	this.shape_429.setTransform(44.4,6.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#6F605D").s().p("AgwAXIApgNIADgCIApgfIABACQADABADgBQgBAEAGACIAAABIgCgBIAAgBQgFAAgBAEQgFgDgDAGIAAABIgMAJIgeATIgCABQgOADgNAAIgKgBg");
	this.shape_430.setTransform(38.5,1.1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#948C88").s().p("AgZAkIgBgWIAAgBQgGgCAAgEIABAAIABgDIAFgEIAEAWIAhg8IACAAQAAASAFAMQAGALAIABIgFACIgHgHIgKgKIgkAyg");
	this.shape_431.setTransform(46.1,-1.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#B2AC9F").s().p("AgEABIAAAAIAAgDIADgCIAGAEIgDAFIAAAAQADgJgJAFg");
	this.shape_432.setTransform(44,-4.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#6B6E6D").s().p("AgEgBIAEgFIABABIAEACQgFAKgDAAQgCAAABgIg");
	this.shape_433.setTransform(44.2,-6.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#638386").s().p("AABAGIABgFIACAUgAgDgTIAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAIAAAEg");
	this.shape_434.setTransform(43.2,-10.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#605650").s().p("AgGAEIADgFIACgIIAEgJIABAiIAIgPIgIASQgFgRgFACgAgLAIIAAAAIAAAAg");
	this.shape_435.setTransform(48,-8.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#CFC5BF").s().p("AAAAAIAAgDIADACIgFAFg");
	this.shape_436.setTransform(44,-6.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#A89A92").s().p("AgNgDIAAAAQADgEACAAQAFgCAFAQIAIgRIACgWIADAVIgCANQALACAHgBIgkAPIgCAAQAHgOgJgDIgCADIgTAcg");
	this.shape_437.setTransform(48.2,-7.4);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#78493C").s().p("AgBgMIACgCIABAHIAAABIgBAVg");
	this.shape_438.setTransform(49.1,-10);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#706158").s().p("AgIAfIABgEIABABIgCAEIAAgBgAACgZIADgGIABAAIABACIACABIAAAIQgDgDgEgCg");
	this.shape_439.setTransform(44.8,-10);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#766D63").s().p("AgDAAIADAAIAEABIgHgBg");
	this.shape_440.setTransform(44.5,-16.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#9F9E90").s().p("AAAAAIAAAAIABABIgBgBg");
	this.shape_441.setTransform(45.3,-13.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#959D9E").s().p("AgBAAIADAAIgBAAIgCAAg");
	this.shape_442.setTransform(44.5,-18.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#C09F93").s().p("AAMgDIABAAIgZAHQAEgHAUAAg");
	this.shape_443.setTransform(49,-18.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#6E5851").s().p("AgSAIQgDgPAogCIgKAFIgBAAQgUABgEAHIgCABIABAFIgBgCg");
	this.shape_444.setTransform(49.4,-18.1);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#5F797E").s().p("AgKAcIAPgyIAGgFIgUA1IAAACIgBAAg");
	this.shape_445.setTransform(52.4,-15.1);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#0C0607").s().p("AgNAJIgCgCIAAgBQgBgLAGgDQAGgDAMAEIgCABQgNAKAXAGg");
	this.shape_446.setTransform(57,-13.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#7D8282").s().p("AgOABIgDgGIAAgDIAFAHIABABIAdAJg");
	this.shape_447.setTransform(56.8,-12.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#636161").s().p("AAJgCQgKgBgKACIAAgBQAdgOgHAYQACgJgEgBg");
	this.shape_448.setTransform(52.7,-18.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#B2B0AD").s().p("AALAAQgMgFgPADIAKgFIABAAQAJgCALABQAEABgCAJIgDACIgGAFQAIgHgFgCg");
	this.shape_449.setTransform(52.1,-18.3);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#655C57").s().p("AgOAHIgBAAQgDgBgBgCQgCgCAAgDIABAAIABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAABAAAAQANAFAMgCIgDADgAAOgGIAIgBIgJAHQACgCgBgEg");
	this.shape_450.setTransform(50.6,-21.3);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#7D7772").s().p("AgLgBIAGgFIADABQgDAAgEAEIAAABQABAHAGgCQAEgCAAgEIAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAIAMAAIgMALIgBAAIgDABQgGAAgBgIg");
	this.shape_451.setTransform(58.7,-18.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#C0B4B0").s().p("AgFAAIAAgBQADgDACgBIAAAAIADAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAIAAABQgBAFgFACIgBAAQgDAAgBgGg");
	this.shape_452.setTransform(58.3,-18.3);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#626362").s().p("AgQAIIAPgGIgJAIIgLADgAABABIAOgGIAHgHIAAADIgJAKg");
	this.shape_453.setTransform(57.8,-24);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#180F0A").s().p("AgPgFIAkgEIgeALIgDACQgFAGgCAAQgDAAAHgPg");
	this.shape_454.setTransform(50.8,-25.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#170F0D").s().p("AgGABIADgHIAJgCIABADIgNAOg");
	this.shape_455.setTransform(52.7,-28.6);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#231A19").s().p("AgCAJQgKgFALgIIAAAAIAEgFIABABQAEAFAAAEQgBAEgGAFIgDgBg");
	this.shape_456.setTransform(55.5,-27.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#908782").s().p("AAAAAIAAAAIAAAAg");
	this.shape_457.setTransform(55.3,-28.1);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#1F1511").s().p("AgCAAIgBgDIAHAHIgGgEg");
	this.shape_458.setTransform(57.3,-36.1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#796A63").s().p("AgFAFIAAgFQAOAKgOgMIgCgEQARAFgCAEIgDADIgKABIAAgCg");
	this.shape_459.setTransform(57.6,-36.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#B09D95").s().p("AgBABIACgBIABABIgDAAg");
	this.shape_460.setTransform(58.3,-35.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#403A36").s().p("AAAAKIgDgBIABgBIgEgCIABgGIABgFQACgFACAAIABAAQgKAaANgQIADgCQABAFgBAEQgBAEgEAAIgBAAIgBgBg");
	this.shape_461.setTransform(49.1,-24.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#58504D").s().p("AgUAaIAAgBIAEgJIAAgBIATghIACgBIAAAKIgLAMIgFAHQgIAOAAANQgCAAABgLgAAOgYIgBgBIgCgBIAKgKIgHANIAAgBg");
	this.shape_462.setTransform(46.1,-28.3);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#B6A196").s().p("AgBADIAAgCIABgBIABgCIAAgCIABAAIgCAJIgBgCg");
	this.shape_463.setTransform(45.5,-23.4);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#8C9698").s().p("AgJALIATgbIgTAgIAAABg");
	this.shape_464.setTransform(45.4,-28.4);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#967568").s().p("AgEgQIAUgFIADAAIgWAcIgPAPg");
	this.shape_465.setTransform(43.2,-30.4);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#594D46").s().p("AALgGIACgBIAAABQgBAFAFgBIghAKg");
	this.shape_466.setTransform(41.4,-35.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#BCB0AB").s().p("AgtA1IABAAIACAAIAAAAIgCAAgAArgFIACAFIgBAGQAAgGgBgFgAglgzIACgBIABACIgBABIABAHg");
	this.shape_467.setTransform(52.9,-26.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#7E7973").s().p("AARgDIgjAKIgDAAIAVgKIAWgHIgKAVg");
	this.shape_468.setTransform(47,-33.2);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#565851").s().p("AgJAAIgDgDIAAgBIAZAJg");
	this.shape_469.setTransform(47.9,-35.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#927F77").s().p("AAUgEIAAABIgfAHIgIABg");
	this.shape_470.setTransform(44.6,-35.8);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FEFCFA").s().p("AgDACIAHgGIABAAIAAAAIACABIgIAFIgFADIADgDg");
	this.shape_471.setTransform(48.6,-38);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#83807D").s().p("AgrAMIA2gZIAjAGIgMAAIgEAAIgEAAIgUgBIgHAHIgsAQg");
	this.shape_472.setTransform(46.5,-39);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#7E7B78").s().p("Ag5ARIAAAAIAAgCQALgFAKgHIgSAOgAAEgJQgFgEgIgBIgQAKIAOgMIAsAKIAYgKQgMAOgQAAQgMAAgNgHg");
	this.shape_473.setTransform(47,-41.9);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#1A130F").s().p("AABAAIgBAAQgVgDAXgFIADADIAEAIIABAGIAAAAQgCAAgHgJg");
	this.shape_474.setTransform(59.3,-39.5);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#6A584F").s().p("Ag0AMIgBAAIAaADIA9gWQgIAHgJADQgPAJgRADIgLAAQgNAAgNgDgAA1gMIgBgCIACAAIAAACIgBAAg");
	this.shape_475.setTransform(52.9,-40.1);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#9E8C83").s().p("AglALIAHgFIAOgHIAOAAIgOADIgLAFIgBABQgRAIAPACIgCABQgMgBAHgHgAAogSIABABIAAADIgpAMg");
	this.shape_476.setTransform(55.3,-37.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#E6DED7").s().p("AgKAEIAVgHIAAABIgJAGg");
	this.shape_477.setTransform(47.9,-38.2);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#B6A89F").s().p("AgRAIQARgHgTACIgBgCQASgBAOgJQgHAIAQgBIABAAIgcAGIAAABQgCACgEABIgJACIAEgCg");
	this.shape_478.setTransform(53.4,-38.7);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#5F5047").s().p("AgGADIAAgBQAGgDAFgBIACgBIgNAHg");
	this.shape_479.setTransform(54.7,-44.5);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#B29E95").s().p("AAkAhIABgCIACAFgAAJgbIgUgGIAAgBIgBABIgBAAIAEgCIAiANIAHAdgAgagaIAAAAIgMAGg");
	this.shape_480.setTransform(56.6,-41.4);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#9C7F72").s().p("AgBAPIABgSIADAOIAJAEIAAADIgEgBIAAgBIgBABQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgBABQgDAAgBgEgAgKgRIgBAAIAAgBIAIACIABAGg");
	this.shape_481.setTransform(73.4,-23.7);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#B0A09B").s().p("AgMAAIAAAAIAZACg");
	this.shape_482.setTransform(68.4,-25.9);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#655551").s().p("AgZgBIABAAIAZABIAZABIAAABg");
	this.shape_483.setTransform(69.6,-25.7);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FEFEFE").s().p("AA0AfIgTAAIAHgEQANgJAFgOIAAAUIAAAHgAggAWIgKgYIABAAIAHALIAJAPgAACAPIADACIgCAAIgBgCgAg0gMIgCgBQgHgPALgCQACALADAJgAAhgPIACAAIgCADg");
	this.shape_484.setTransform(25.8,58.6);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#776659").s().p("AAIAFIgNgHIgDABIACgCQADADAHABIAFADIAAABIgBAAg");
	this.shape_485.setTransform(66.3,-26.4);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#A28C83").s().p("AgFADIAJgLQACAIAAAJQgHgCgEgEg");
	this.shape_486.setTransform(66.1,-27.2);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#6E7F80").s().p("AgKAWIAIgJIADAEIgEAJIAAAAIgDAAQgEAAAAgEgAAFAHIgBAAIACgCIACAAIgCADIgBgBgAAHgCIgFgXIABAAIAIAYIgEgBg");
	this.shape_487.setTransform(73.6,-46.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#8B7870").s().p("AAHgBIAAAAIgNADg");
	this.shape_488.setTransform(38.8,-2.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#787E7E").s().p("AgSATIAAgDIAEgCIAAABIgCACIgCACgAADAEIABgBIgBADIAAgCgAASgPIABgDIAAAIIgBgFg");
	this.shape_489.setTransform(41.6,-6.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#897167").s().p("AAIANIAEgCIARABIgEADQgJgBgIgBgAgMAFQgHgEgEgEQgEgFgBgFIAFAHIAAAAQAEAGAKAEIAEACQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIgIgEg");
	this.shape_490.setTransform(35.1,0.7);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#B5A79B").s().p("AgDAUIAAghIADgHIACgLIACANIgCAyg");
	this.shape_491.setTransform(30.8,-2.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#7D7069").s().p("AgCgCIADABIADAEIgEAAg");
	this.shape_492.setTransform(35.5,-4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#B1B4B0").s().p("AAAgBIACABIAAAAIgDACg");
	this.shape_493.setTransform(32.6,-7.6);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#D1D4D4").s().p("AAAAAIABAAIAAAAIgBABIAAgBg");
	this.shape_494.setTransform(32.8,-7.6);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#95877D").s().p("AgGAHIAAgBIABgBIABADIABABIACABIgBAEIgEACgAAHgPIAAAAIgCAHIgBAEIgEACIAHgNg");
	this.shape_495.setTransform(32.7,-8.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#CFC1BA").s().p("AgRAEIgDgFIACAAIABADIAZgBIANgEIAAACIgNAEIgZABg");
	this.shape_496.setTransform(37.6,-4);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#6A7E83").s().p("AgDAEIAHgQIgCAHIgFASg");
	this.shape_497.setTransform(30.3,-3.3);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#6D7A7D").s().p("AABAFQgJgFAIgGIAEAAIAAABIgCAMIgBgCg");
	this.shape_498.setTransform(25.6,-0.1);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#8D817F").s().p("AgBADIgCAAQAGgPABARQgCgDgDABg");
	this.shape_499.setTransform(27.8,-3.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#746962").s().p("AAAAAIAAAAIAAAAg");
	this.shape_500.setTransform(26,-0.7);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#D0D0CB").s().p("AAFgDQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgHAEIAJgHg");
	this.shape_501.setTransform(20.6,-10.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#8D776D").s().p("AgDAHIABgBIAAABIgBAAgAACgGIACAGIgBAAIgBgGg");
	this.shape_502.setTransform(30.2,-9.2);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#91908E").s().p("AgbAaIAAgBIAGgGIAAAAIABACQACAEgCACQgCACgFAAgAgWAMIAygoIgvAuIgDgGg");
	this.shape_503.setTransform(32.7,-11.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#7B6D62").s().p("AgCAAIACAAIADABIAAAAIgFgBg");
	this.shape_504.setTransform(29.3,-13.4);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#78807B").s().p("AAJAHIABAAIgCABIABgBgAgGgDIgDgEIABAAIAKACIAAACIgIAAg");
	this.shape_505.setTransform(29,-11.7);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#989F9F").s().p("AgIgIQAHAAAFAFQAGAFAAAHg");
	this.shape_506.setTransform(27.1,-13.4);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#6E635D").s().p("AAAAAIAAAAIAAAAg");
	this.shape_507.setTransform(25.3,-14.7);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#F6EFE8").s().p("AgBAAIADAAIAAAAIgDABIAAgBg");
	this.shape_508.setTransform(23.1,-14.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#F5EEEB").s().p("AALgBQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgSACg");
	this.shape_509.setTransform(20.5,-19);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#746B65").s().p("AAAAAIAAAAIABABIgBgBg");
	this.shape_510.setTransform(22.2,-20.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#BFB7AF").s().p("AADAEIgBAAIgOgDIAIgDQAYgJgKARg");
	this.shape_511.setTransform(25,-22.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#7F685D").s().p("AgKANIAKgVIALgGIgBACIAAABIgEACQgCAUgLADIgBABIgCgCg");
	this.shape_512.setTransform(26.9,-18.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#7D6F66").s().p("AADAHIACgCIgaACIADgDIACACIAngIIgUAKgAgGgGIABgBIAAABIAAAAIgBAAg");
	this.shape_513.setTransform(27.5,-20.3);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#655C56").s().p("AACAHQAKgRgXAJIgIADIAPgJIAPABIAJAGIgSAIIAAgBg");
	this.shape_514.setTransform(25.8,-22.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#B4ABA6").s().p("AAAACIgGgEQAKAEgEgGIAAgBQAKALgDAAIgHgEg");
	this.shape_515.setTransform(27.8,-23.1);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#8D837A").s().p("AAHAGIgDgDIgCABIgCgBQgDgEgEgDIAAgBIABAAQAHABAHAKg");
	this.shape_516.setTransform(42,-12.8);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#4F443D").s().p("AAQALQgHgLgJgBIABgDIgBgBIAAgBIgTgCIgBAAIADgCIAmAFIgBAPIAAAAIgDABIgBAAg");
	this.shape_517.setTransform(41.2,-13.2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#D5CDC9").s().p("AAHAVIgBgBIgCgBIACgNIACAQIgBACIAAgDgAAAgUIABABIAAAAgAgHgXIACABIgCAAIAAgBg");
	this.shape_518.setTransform(42.7,-10.1);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#8C8177").s().p("AgTAAIAEgDIAjADIgBAEg");
	this.shape_519.setTransform(41.4,-14.2);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#8A847F").s().p("AAKgGQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIgRAKIATgNg");
	this.shape_520.setTransform(37.9,-15.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#8F6B5E").s().p("AgBACIACgDIABABIgCACIgBAAg");
	this.shape_521.setTransform(29.2,-13.7);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#D4C9C3").s().p("Ag4AcIACgEIAEACIgCADgAA0gUIAGADIgGACQABgCgBgDgAApgaIABgBIABACIgCgBgAAYgbIAGgBIgFABIgBAAg");
	this.shape_522.setTransform(34.9,-16.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#100B0A").s().p("AgbAMIA5gdQAAALgJAIIgCABIgDACIgDADIgKAFIgHgBIAAABIgEAAIgBAAIgHAFIgNABg");
	this.shape_523.setTransform(34.7,-24.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#7B716F").s().p("AARAEIAAgBQgCgDgDAAIgEgBIgCgBIAAgBIgEgBIgGABIgHABIgKgBIAMgCQAVgDAKAPg");
	this.shape_524.setTransform(38.4,-18.7);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FBFAF8").s().p("AgvAaIAAgBIgBAAIAIgCIgDAFIgEgCgAAggZIAFgBIAIgBIAEABIAAABIAAABIgRgBg");
	this.shape_525.setTransform(34.2,-16.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("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");
	this.shape_526.setTransform(20.7,1.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#946D64").s().p("AAHAXIgOgqIABgCIAAgBIAHAXIAHAWIgBAAg");
	this.shape_527.setTransform(18.3,0.8);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#7C6153").s().p("AAEAVIACABIAAAAIgBABIgBACgAAAgIIAAgBIgFgBQADgIAFgGQgIAKAJAHIgEgBg");
	this.shape_528.setTransform(17.1,-3.7);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#C3B2B0").s().p("AgDACQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAIgDACADQAAAAAAABQABAAAAAAQAAAAAAABQAAAAgBABIgCABIgCAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAgBgBAAg");
	this.shape_529.setTransform(11.2,-1.4);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#160F0F").s().p("AgEAAIAFgDIAEADQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAQgBAAgEgEg");
	this.shape_530.setTransform(10.3,-11.5);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#A99792").s().p("AgCAAIACAAIADAAIgDABIgCgBg");
	this.shape_531.setTransform(11.5,-11);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#9E7F74").s().p("AgcAfIAJgMIAagMIATglIADAAQAAAagRARQgPASgYAAIgBAAg");
	this.shape_532.setTransform(20.4,-9.4);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#83756E").s().p("AgIAIIAAgCQADgDAAgEIAAgBQAFgIAJACIAAABQABAHgDAEIgBABQgEAEgEAAIgGgBgAAGgBQAAAAABgBQAAAAAAAAQAAgBABgBQAAAAAAgBQgSAOAQgKg");
	this.shape_533.setTransform(20.3,-10.2);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#7B7E7A").s().p("AgSAfIAAAAIAAAAgAgDACIADgCQAPgHgJgHIAAgBQABAAABAAQAAAAAAgBQABgBgBAAQAAgBAAgBQgDgFAHgFIAEgBQAEAHgBAHIgDAGIgQANIgOAVgAAAgSIABgGIABAGIABACIgDgCg");
	this.shape_534.setTransform(17,-8);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#6F726E").s().p("AAKADIgRgKIABAAIAVAMIgdAEg");
	this.shape_535.setTransform(8.2,-1.7);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#676868").s().p("AgPASIAAgCQAGgEAEgGQAFgDABgEIAEgCIAAAAIgUAWIAAgBgAAGgRIABAAIACgBIAHABIgHAJIACgEIgBgBIgDgBIgBABIgHAHg");
	this.shape_536.setTransform(3.8,-1);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FCF4F1").s().p("AgIAJIAOgTIACAFQAEAQgMAAIgIgCg");
	this.shape_537.setTransform(3.5,-7.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#465C5F").s().p("AAAAOIAAgKIAAgRIACAbIgCAAg");
	this.shape_538.setTransform(5.2,-7.2);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#DFD4D1").s().p("AAEAPIgOgCIgCgCQANgsAMAfIAAAJQABAFgFADIgFAAgAgJAIQAVAHgFgVIgCgEg");
	this.shape_539.setTransform(3.6,-7.4);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#677475").s().p("AABARIAAgJIAAgBQgNgYARABIAAAAIgDAQIAAARIgBAAg");
	this.shape_540.setTransform(4.8,-8.5);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#BCB4AE").s().p("AgEAXIAEgHIgEAIIAAgBgAABgLQADgGABgGIgBAQIgBAHg");
	this.shape_541.setTransform(1.9,-10);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#A09691").s().p("AgRAFIAOgEIAIgBQgKAEgMABgAALgBIAFgCIACgBIgDADIgEAAIAAAAg");
	this.shape_542.setTransform(10.9,-7.5);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#534640").s().p("AgSARQgCgDgCgCQgEgCgCgEQgDgGgGAAIACgCIAWATIgDAAIgCAAgAgQABIACACIABACIABADIAAABIAGADIABACIADgBIADAAIgNAEgAAggIIAAAAIAFgIIAAAHIgBACQgGAIgHAGIgCABQAKgGABgKg");
	this.shape_543.setTransform(10.4,-8.7);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#617278").s().p("AgVAcIAPgaIAcggIgrA9g");
	this.shape_544.setTransform(8.1,-14.9);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#110A09").s().p("AAKASIgUgTIAAgBIAAgCIABgDIABgDIACgDIADgEIACAAIABAAIAAACIAAADIAAABIAAABIAAAAIgBABQgBAAAAABQAAAAAAABQgBABAAAAQAAABABAAIABADQAEACAEADIAEAPIAAAAIgBAAg");
	this.shape_545.setTransform(7.9,-8.9);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#675A4F").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_546.setTransform(7.6,-10.7);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#76625B").s().p("AgIACIABgEQAHAHADgGQACACAEABIgEABQgFgCgIABg");
	this.shape_547.setTransform(10.6,-11.2);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#CDBDB8").s().p("AgFgBIALACQgHgBgCACg");
	this.shape_548.setTransform(4.5,-18.7);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#2D201D").s().p("AABAAIABgBIAHgHIgJARIgGAAQgHAAAOgJg");
	this.shape_549.setTransform(5.8,-17);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#534239").s().p("AABARIgRghIANAXIAUgLIAAABQgTANARgEIgCADIgLAIIgBAAg");
	this.shape_550.setTransform(4.2,-16.7);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#A79A95").s().p("AgFBBIAAgBIACAAIAAABIgCAAgAgFg5IAKgHIABAAIgLALIAAgEg");
	this.shape_551.setTransform(5,-9.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#635E58").s().p("AAYAkIABgQQABgGAAgHIgBgUIADAAIgCAxIgCAAgAgbgiIABgBIAAACIgBgBg");
	this.shape_552.setTransform(0,-14.4);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#160E0C").s().p("AAAgEIABgBIAEgCIgEAGIgBAHIgBABIgCABQgDAAAGgMg");
	this.shape_553.setTransform(-9.7,-17.6);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#9E978E").s().p("AAAAIIAAgIIAAAAIADAHIAAABIgDAAgAgCgHIAAAAIABACIgBgCg");
	this.shape_554.setTransform(2.4,-16.6);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#947F79").s().p("AgGAYIADgEIAIgSIgCAAIACgCIgOgEIgMgDIAAgCQAMAAAIgEQAGgEAAgGQABAFACAEQADAEADAAIAIAMIgbAWIgBAAg");
	this.shape_555.setTransform(6.2,-18.1);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#B7AAA5").s().p("AgIADIgBgGIABgCIACAFQAIABADgKIABAAQgBAJAEAIIABACg");
	this.shape_556.setTransform(-1.9,-21.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#727472").s().p("AgBALIAGgHIgDAGIgDADIAAgCgAAFAAQgDgFgHADIAAgHIAFgDQAGAHAAAFIgBAAg");
	this.shape_557.setTransform(6.7,-22.6);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#5F4E45").s().p("AgKAMQACgQAHgGIABACIABADIAFAEIABABIAAAGIgRAHIAAgBgAAKgLIgFgBIAGABIgBAAg");
	this.shape_558.setTransform(5.4,-23.5);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#B9A9A3").s().p("AgGALQgCgDAAgGIAAAAIAOgNIADgEIAAAEIgQAPIAHAMQgDAAgDgFg");
	this.shape_559.setTransform(7.6,-20.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#261D19").s().p("AgTAYQgEgCgBgCQgCgHAggLIAEgCIADgGIABgBIAAgCIAAgBQAAgGgGgHIABAAQAVgBgGATIAAACIgQANIAAAAQAAAGgIAEQgHAEgLAAIgBAAg");
	this.shape_560.setTransform(5.9,-21.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#938279").s().p("AgFAGQgFgFAAgFIAMgFIAEAAIAAABQgIACgFAGQADANAOgIIABAAIgBACIgBAAIgDABIAAABIgCABQgFAAgEgEg");
	this.shape_561.setTransform(20.7,-16.9);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#5E5042").s().p("AgIAAIAEgHQAAAGAEADQADAFAGAAIAAABIgEAAQgOAAABgIg");
	this.shape_562.setTransform(20.2,-16.6);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#8E7065").s().p("AgDAHIAEgFQARgagSANIAGgEQAIgEgIAOIgJAPIgGAHg");
	this.shape_563.setTransform(14.7,-14.8);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#161013").s().p("AgGAAIAEgGQASgNgQAaIgFAFg");
	this.shape_564.setTransform(14.9,-15.2);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#5B4E45").s().p("AgJgDQAIACALgBQgJACACACIgIACg");
	this.shape_565.setTransform(12.9,-18.2);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#E9E1DC").s().p("AgGAkIgBgBIAHgHIAAABIgFAIIgBgBgAAYATIATgSIgLgkIAAgBIAFADIAKAkIgEAGIgGAGIgBAFIgGAIIgBAGgAgbAZIAFgBIABAAIgCADIgEgCgAguASIAAgCIAEgGQADgGAEgEQgIAKAAANIgDABIAAgGgAgZALIAAgCIAWgHIAFgFIAKgQIAHADIggAdQgFgDgHABg");
	this.shape_566.setTransform(14.1,-13.3);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#BBABA3").s().p("AAAAAIAAAAIAAAAg");
	this.shape_567.setTransform(14.8,-17.4);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#6C787A").s().p("AACAiIAFgIIgEAOgAATAJIgKgkIgFgDIgKgGIgOADIAAAAIgBAAIgBgEIAHgCIASADIANALIAHAgIgJAIg");
	this.shape_568.setTransform(17,-14);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#A0ACAE").s().p("AARgVIgCAGIgDAGIgcAfg");
	this.shape_569.setTransform(9.1,-17);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#C5BBB5").s().p("AgHAAIASgBIgVADg");
	this.shape_570.setTransform(20.3,-18.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#564D46").s().p("AgPADIAbgJIgCACQACAEAEAAQgNgBgEABQgEABAFAEIADACg");
	this.shape_571.setTransform(17,-18.3);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#C0B3AE").s().p("AgcgBIAAAAIAHgFIgBABQgCAGADAEIgNACgAAjgEQgBABgFABIgBABg");
	this.shape_572.setTransform(15.3,-19.9);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#756F6B").s().p("AgjANIgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIACgCIANgCQAHAHAhgMIAJgCIgpAQIgGAAIgOgBgAAhgMIgBgBQAKACgFAFIAAAAIgDABQACgCgDgFg");
	this.shape_573.setTransform(15.5,-19.9);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#AD9F9A").s().p("AgPgKIgOABQAIgDAHABIAFAEIAEAHIADADIAFAAIAEAIIAXgFIgDABIgYAFg");
	this.shape_574.setTransform(19.6,-23.3);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#746E6B").s().p("Ag3AXIA5gyIAOgBIATAXIAXgFIgbAIIAAAAIABAEQAAADgBACIgDACIAAAAQAFgFgKgCIgDgCIgFgaIgQANIAFABIgGAEIgJAAIAAADIgSAMIgDACIgGAFIgBAAIgSAPgAAOgHIAEADQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAg");
	this.shape_575.setTransform(16.4,-21.5);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#120D0B").s().p("AhTDZIgCgEIgGADIgIAAIAAgBIADgBQAIgCAEgFIADALIgCgBgAgSDOIgGAAIgfgDIgCgHQgEgNgKACIgBgBIgBABIgEABIgGhCIAGgKIAEgHIAFgKIAJgPIgJggIgFgRIAGgTIAAAhIAGAMIADAFQAHALABgCIAEAFIgFgSIAAgBIgBAAIAAgCIAAgBIAAgtIADAcIgBADIAAACIABABIAAABQABAFAEAFQAEAFAHAEIAIAFQADACAHADIADgCQAIACAIAAIgoANQAJALAKACQAKABALgIIACgBIACgCIACgCIABgCIADgFIAhABIgEAWIgKgCIgBgJIgDABIACAFIgLAGIgGAAIAAgBIgwgDIgJgDIgdAfIABAFIgEAIIAHAGIADAFIAFAFIAAABIABAAQAEADAGABIABAAIBYAGIgCgIIgEgLIALgIIABAJIAHANIARAJIgXAcIgiAIgAggC8QgFAGALAAIAxAAIARgBQARgQgigBQgHgDgIgCQgZgEgrAMIACABIAGAKQALACAKgFgAh5CbIgZgLIAUAFQARABgDgQIAAgCIgCgJIgCgCIgHgDQgEgDgIgCIADAAIgPgFIgBAAIgvAFIgKACIgUALIAAACIgHABIAAgHIAZgTIANgJIAAAAIADgDIg+AGIgKgIIgdAGIAGAHIAAABIABACIABAAQADAHgCAFQgCAFgHAEQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAgBIgBAAIgCgIQABgJgEgLIgBgEIgBgDIAAAAIgBgBIgGgHIgJgFQgMgGgMAGIgDACQgJAGgGALIgCAEIAAACIgDAOIgBAKIgEggQAFgEACgFIADgBIABgBIAAgBIAEgHIAAgBIAAgCIABAAIACgBIACgKIAAAAIACgCIABgBIAVgWIgJASIAhgNIAdgDIgWgOIA0AFIgJAEQgCgCgJADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAIgDACQAQAEADAFIABABIAAAAQABAHAOAFIgHAZIAWgEQAWgBgJgXIgHgPIgHgLIAUACIABADIAOArIACAGQAJASAWABIAQgBQAEgCAGABQAFABADgCIABALIADATIACAWQACAPAAAPIAAAAgAkzBOIAIABIABgBIgIgBIgBABgAj/A3IADABIABgEIAAAAIgEADgABlCAIAXgWIAGgCIAKABIAMgIIAFgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIABAAIARgVIAIgEIAFAAIAAgCIgCAAIACgBIAAABIAFAAIgCgDIAIgEIgdgUIgkAMQgNAGAIAHIABAAIgIAFIgeARIAFgWIAYgeQgIAAgGgMQgFgNAAgQIAlgPQAUANADgWIAAgGIgVgnIAVg2IACgCQAHgZgeAOIAAABIgBAAQgpACACAQQgLgKgOgEQAJgEgHgQQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAGASIAKgDIABADIAMgDQAMACABgFIArgLIAQgQIAEgBIALgDIAJgIIABgBIACAAIAMAAIAJgLIACAEQACADADACIAKAAIACgCIAJAAQAOgLALgMIADgBIAOAIIA0AFIAAAAIAJAHIACABIAAAGIgBASQgBAaAGgUIAAgCQAAgBABAAQAAAAAAAAQABAAAAgBQABAAAAAAIABABIAEAAIgBAKIgBAGIgCAHIgCADIghANQgdAGAnAAIADgCIAJgCIgBABIAAAFIAAAGIgEAEQgGAGgDAHIgIADIAGABIgBAFIgSALIAAAKIAAADIgBABIgHAGQgbAZAHAFIAAABIgBAQIAAABIAAAGIALAjIgBABIgCACIgBgBQAAgPgKgLQgLgKgPAAIABADIgEACIACAHIAAAAIADAFIACASIALAeIgHAXQgWAVA2gIIAEgDIAAgCIgBgLIAEgBIgHgcIgBgJQADADADACIANArIgLALIghADIgGABIgBgBIgagUIgZgHIgEAEIAAAAIgBABIgXAUIgtAWIgrAFgABxB4IABABQAHAHANgHIAAgBQgEgFgGAAQgFAAgGAFgACqBcQgnAfAfgNIABgBIAJgFIATgPgAD6AwIgHAHQgMASAcAFIAEgBIABgBIACgIQABgGAAgEQABgSgNAGIgCAAIgDACgADkArIAEAFIAVgXIgQgYIgSAbQgcAFAaAPQADgFAFAAIADAAgADUABQgNAFgFAOIAAABQAHAFALgDIAAgBQAGgEADgHIABgBQACgKgHAAIgFABgAB3gFQgUAPAaAJIACAAIABAAIACAAIABgCQAGgRgEgEIABgDIgEAAIgDAAQgDAAgFACgAC2gGIgKAHIAAABQABAKAGAEIABgBQAGgJgDgMIgBAAgADrgJQgCAIAGgBIACgBQADgJgDAAQgCAAgEADgAD+gQQgBAKAJgFIACgCQABgGgEAAQgCAAgFADgACvguQAZAfgWgeIgBgBIALAAIA2gGQAegegPAaIAAABIgBABIAAABIgNAQIAVgIIAUgQIAHgWIAPgLIAAgFQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAIgCgFIgCgiIgKgJQgJgJAKgEIAHAAIAAAAIAegIQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAgBIAAgBQgEgBgEABIgjABIgrAIIgMAVIgHAYIgKAHQgRADAKgQIAAgBIANgMIgNgBIgCAAIAAAAIgDAAIgGAFIgJAHIgJAaIgGAAQgBgDgGAEIgGAQIAAAGIAFAUIACgBgAE5iNQAhABgdgDIgEACgAFCjDQADAJANABQAPABgBgIIAAgBQgIgFgJAAQgGAAgHADgAgUBnIgBAAIAFAAgAggAYIAAgBIgFgfQAJAFAGAJIACAAIADAHIAEgBIAAABIAZgBIANgFIAAAAIgBABIAAAEIgBAHIgOAEIgCABQgKgCgFAEIgFAAQgKAAgJgCgAlFAVIABAAIgCABgABJADIgIgDIgCABIAAgWIAAgIIgCgUIAAgCIACgBIABgBIAAgDIAAgCIgBgBIABgEIgEgEIgBgFIAAAAIACgQIABgDIgkgEIgFACIgCACIgJACQgLACgKAHIAAABIAAACIgGACIgBABIAAABIgBABIgBACIgIACIAAAAIAMgWIg0ApIACAGIgHAHIgBABIABgYIACgBQANACABgRQATgSAXgOQAOgJAQAAQAFAAADgEIACgFQAAAAABAAQABAAAAgBQAAAAABgBQAAAAABgBIAFgCQgKgPgWACIAbgJIAHAEIACADQACAFADAEQgDACAAAEQgBAFAEADIAIAEIgOABIAAABIgFAAQgFAEAAAHQABAEADABQASAHAVgBIACADQAFADAEAFIgBABIgDAGIAAAAIAAAAIgFABIgCADQgEAWAAAWIABAFIAAAEIAAABIgCADQgCASAMgUQALAEABgOIAAgDQAFADADgCIAAABIgQAjgAAOhpQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQglAaAjgXgAjcACIAAgCIAAAAIACgBIADgFIAOgVIAQgOIADgGQABgHgEgHIgEABQgHAFADAFQAAABAAABQABAAgBABQAAAAAAABQgBAAgBAAIAAAAIgDgBIgBgCIAFgOIABgGIAGgFIAIgJIgHghIgNgKIgDgCQgGgEAFgBQAEgBAOAAIACABIADAAIAIABQAMgDAGgDIADAFIgLAEIgNAFIgDAHQgCAKAUgBIAAgBIACgBIAAgBIADgBIABAAIAUgIIgXAgQgRAFATAFIADABIAGAAIAcgTIAAAAIAAgBIgBgDQACgJACAAIABAAQABABACAMIgBACIgBADIgcAQIgUAmIgbAMIgIAMIgCACQgGAGgCAGIAEACIAAABIgSgCgAiug3IAAABQAAAFgDADIAAACQAJAEAGgHIABgBQADgEgBgIIAAgBIgEAAQgGAAgFAGgAk+gIIgDgbIADgQIAAgBIAGgRIAsg9IACgGIATgOIgHAIIgBADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIAAAAIAFAIQgMADgIALIgBABIgBACIgGADIgFAFIgLASQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgBABQgEADgBAFIAAACIgHAIQgFAHgBAHQAAAIACAHIAAAAQgCACgBAEQgBADABAEQADAJAHAHIgLgBgABug3IgFAIIABgGQACgPgEgMIAFANQACAFAFgBIABgBIACAdIgIAPgAhahLIAFgNIAHgBIAAAAIgDAFIAFABIgDAKgABghiIAEADIACAIQgCgGgEgFgAhKh1IAhgLIgJAFIgCABQgGABgFADQgGADgGABgAjtiDIgCABQgCgCAJgDIApgQIACAAQAEgBACgCIADgBIADgCQACgDgBgDIgBgFIABAAIAbgHIADgBIAIgCIAGgCIASgCIALADIgPgBIgQAJIgBABIgIACQgGADAIAHIgHAHIAAAAIgCgCIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIAAAAIgjAQIgdAJIgHADQgDgFgJABgAi8imIAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgDgDIgHgHIgEACIgGgBIARgMIAGAZg");
	this.shape_576.setTransform(37.2,-4.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#827A78").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_577.setTransform(17.6,-29);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#43352D").s().p("AgBAAQACAAAHgEIgBADIgHADIgBAAIAAAAIAAABIgGACIAGgFg");
	this.shape_578.setTransform(17.1,-27.7);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#715D55").s().p("AgBgEIAGAAIgEAFIgFAEg");
	this.shape_579.setTransform(11.5,-25.4);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FCF6F3").s().p("AgBAAIADAAIgCABIgBgBg");
	this.shape_580.setTransform(10.8,-34.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#827873").s().p("AACgIIABAAIABABQgDAEgDAMQgFgFAJgMg");
	this.shape_581.setTransform(12.2,-34.9);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#110B0C").s().p("AgEAIIAAgDQAEgNADgDIACABIgCAAIgCABQgBAEAAAEQAAAFABAGIgCACIgBAAQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAgBAAgBg");
	this.shape_582.setTransform(12.4,-34.5);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#879393").s().p("AAAABIgCABIABgCIAEgBIgCADIgBgBg");
	this.shape_583.setTransform(18.2,-31.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FBFAF9").s().p("AgDAIIADgRIABgBIACABIACAAIgJAUIABgDg");
	this.shape_584.setTransform(18.1,-30.3);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#F6ECE7").s().p("AgEgEIAHABIACACQgCAGgCAAQgBAAgEgJg");
	this.shape_585.setTransform(18.8,-35.8);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#D2C4BE").s().p("AgDADIgCgCIAAgCIAAgCIACABQASAEgQABIgBABIgBgBg");
	this.shape_586.setTransform(5.9,-24.5);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#A9A5A2").s().p("AgeABIAFADQALAHAJADIgLAEgAAXgRIAFAFIADAFQAAAGgFAEQgDADgFABQAFgIAAgQg");
	this.shape_587.setTransform(0.9,-26.4);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#726D6A").s().p("AhAATQAAgNASgIQARgKAZABIAOAQIAKgEIAVgHIgjANIgIgPIgLAFIgJAAIAAABQgNAAgKALIgDAEIgQAIgAAtgFIgDgBIADAAQAFgBADgDQAFgEAAgGIABABQANAPgQAAIgLgBg");
	this.shape_588.setTransform(-1.7,-25);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#7C746F").s().p("AgIAHIARgNQgEAKgMADIgBAAg");
	this.shape_589.setTransform(3.4,-23);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#CCC3BB").s().p("AgBgMIADgEIAAAAIAAAKIABAGIgEANIgBAEg");
	this.shape_590.setTransform(4.6,-31.7);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#756D68").s().p("AgCgBIAEgOIABADIgFAcg");
	this.shape_591.setTransform(4.7,-30.2);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#989EA0").s().p("AgIgHIANADIAEAMQgIgKgJgFg");
	this.shape_592.setTransform(1,-33.9);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#635F5E").s().p("AFEFoIAAgDIgDgVIAEAKIALAUgAFAFIIgCgMIAAgPIABAAIABAdIAAgCgAk+ksIgOgwIgDgNIAXgEIgBAAQgNASANgFIABAAIgKAYIAAABIAJAgg");
	this.shape_593.setTransform(35.1,1.9);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#848785").s().p("AgOAWQgEgIAJABIAGAAIgJAHgAAEAQIAYAAIAEADgAgfgVIADAAIABABIAyAhg");
	this.shape_594.setTransform(0,-37.3);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#6B6B65").s().p("AgFAIIALgOIgKAOIgBAAgAgEgGIABgBIgBACIAAgBg");
	this.shape_595.setTransform(4.3,-34.1);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#C3BBB2").s().p("AgDAAIAAAAIABgCQAFgNAGAEIACgBIgCAFQgPAEAJAAIAFgBIABgBIAAABIgCACIgLAOIgEABQgGAAALgNg");
	this.shape_596.setTransform(4.2,-34.6);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#EDE3D9").s().p("AAFgBIAAAAIAAABIgBAAIgEACQgKAAAPgDg");
	this.shape_597.setTransform(4.6,-35.1);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#846D63").s().p("AACABIgKgBIAFAAIAKgCIACAEIgEABIgDgCg");
	this.shape_598.setTransform(10.2,-31.5);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#5A4945").s().p("AgDABIAAAAIAAgBIAAAAIABAAIAAABIgBAAgAADABIABgBIABABIgCAAg");
	this.shape_599.setTransform(7.9,-31.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#8B7F7C").s().p("AAAADIAAgFIABAAIAAAFIgBAAg");
	this.shape_600.setTransform(7.5,-32);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#5C524E").s().p("AABAFIgBgCQAAgDgCgCIAAgCQAHgCgCALg");
	this.shape_601.setTransform(7.3,-32.8);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#81776E").s().p("AAAgCIACAAIABACIgEADQgCAAADgFg");
	this.shape_602.setTransform(8.8,-33.2);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#808786").s().p("AgQABIAYAIIAJgUIgIAXg");
	this.shape_603.setTransform(6.2,-42.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#796C64").s().p("AgBABIABADQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAgGgAgBgDQAAgHADAIIgDgBg");
	this.shape_604.setTransform(8.6,-39.1);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#C5C2BD").s().p("AABAEIgBgDQgGgEAGAAIADABIABABIAAABIAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAIgBAAg");
	this.shape_605.setTransform(8.5,-39.1);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#756F65").s().p("AgFgKIAEABQAQAHgRANgAAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIABgLIgBAHg");
	this.shape_606.setTransform(6.4,-39.2);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#CAC8C1").s().p("AAAABQADgPgDAUQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_607.setTransform(6.4,-39.4);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#99867D").s().p("AgIgBIADAHIAOgPIgNATg");
	this.shape_608.setTransform(9.5,-41.6);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#8E8B86").s().p("AAKAQIgagiIAiAlg");
	this.shape_609.setTransform(2.8,-38.8);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#736962").s().p("AAtATIAAgLQASALgSAEIAAgEgAAtAEIAAgFIABABQABACAGAAIAAABIgIABgAg1gEIADgBIAAAAIAAACgAAOgVIADAAIABABIAAAAIgEgBg");
	this.shape_610.setTransform(13.5,-35.3);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#89817B").s().p("AgaAIIAbgLIArgSIgSANIhFAegAgDAKIARgKIgJAHIgFADg");
	this.shape_611.setTransform(15.9,-41.5);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#838A88").s().p("AgOAEIARgFIAPgGIgkAPg");
	this.shape_612.setTransform(16.4,-39.8);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#95877B").s().p("AAIgIIAEAAIgKAKIgCADIgLAFg");
	this.shape_613.setTransform(14.6,-39.5);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#8B7E7C").s().p("AAGgNIgGAVIgFAGg");
	this.shape_614.setTransform(11.8,-42.8);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#8E8A84").s().p("AgFgGIAFgGIgFAQIAUgTIgdAfg");
	this.shape_615.setTransform(11.8,-40.7);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#97857E").s().p("AAOgKIgHAJIgUAMg");
	this.shape_616.setTransform(14.7,-43.3);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#A7867C").s().p("AgcAaIAFgDIgEADgAAQgQIANgJIgiAfg");
	this.shape_617.setTransform(38.4,-25.6);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#7D8481").s().p("AgdARIA7ghIAAADIg6AeIgBAAg");
	this.shape_618.setTransform(34.8,-24.6);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#453630").s().p("AgtAgIAJgFIAOAAQgGAEgEAGgAgCAWIAIgFIAEgDIgEAEIgEAEIgCAAIgCAAgAAYgJIAAgCIADgNIAJgKIACgCIACAAIgKAZIAQgKIgVAWQgEAFgGAEQAJgIAAgLg");
	this.shape_619.setTransform(35.3,-25.1);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#8F9A98").s().p("AABgBIAAABIgBACg");
	this.shape_620.setTransform(39,-28.8);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#858B89").s().p("AgxAjIAAgBIADgHIgBAIgAgagKIABAAIAOAAIgPAEIgKAOgAAcgjIAWAGIgVAGQACgFgDgHg");
	this.shape_621.setTransform(44.1,-32.3);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#B89C91").s().p("AgMANQAMgHAJgKQAEgGgGgDQAJACgFAIQgJALgOAGIAAgBg");
	this.shape_622.setTransform(35.2,-26.8);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#66564F").s().p("AgcAKIAQADIAUgGIAAAAQAggYgcAMIAOgKQAGADgFAFQgJAKgMAHIgVAGg");
	this.shape_623.setTransform(33.4,-26.6);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#71635F").s().p("AgCAGIgCAAQgDgCgCgEQAIACAGgCIABgCIAAgDIADACIABABQAAAFgEACIgFABIgDAAg");
	this.shape_624.setTransform(33.1,-28.5);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#968279").s().p("AgMAMIAAgBIAEABgAAKgKIADgBIgDAFIAAgEg");
	this.shape_625.setTransform(31.9,-31.9);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#110A0C").s().p("AAAgDIABABIgBADIAAABIAAACIAAgHg");
	this.shape_626.setTransform(32.8,-32.8);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#A1928E").s().p("AgEAAIglAAIAngCIAkgDIAIgBIgWAIIgQAFg");
	this.shape_627.setTransform(39.2,-34.7);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#8F807B").s().p("AgMACIAAgBIABgBIgBACIAAABIACAHQgCgCAAgGgAAHgHIAAAAIgBgBIgEgBIAHAAIAAAAIAEACIgGAAg");
	this.shape_628.setTransform(36.2,-32.6);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#968F8A").s().p("AgVAFIABgCQAVgSAVARIAAABIgMAEg");
	this.shape_629.setTransform(37,-37.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#5E544E").s().p("AgWAEIAogJIgKgBIAMgEQABABAAAAQABAAAAAAQABABAAAAQAAAAAAAAQgBAHgFAJIgnADg");
	this.shape_630.setTransform(37.2,-35.8);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#261B16").s().p("AgZAJIgCgCIAAgKIALAIIAYgGIAHgFQAcgNgfAYIgBABIgUAFg");
	this.shape_631.setTransform(33,-26.4);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#9B9692").s().p("AgRgCIgBgBIAAgBIADACIANAFIAVgFIAAABIgBABQgLAFgHAAQgKAAgHgHg");
	this.shape_632.setTransform(32.1,-25.3);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#B5A69C").s().p("AgCADQgEgEAAgGIAAgCIABACQABAGALALQgGgEgDgDg");
	this.shape_633.setTransform(28.9,-24.4);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#ABA19C").s().p("AgVgCIAAgBIALAEIAggEIgIAEIgUADg");
	this.shape_634.setTransform(32.4,-26.7);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#796B61").s().p("AgRgDIAAgCIAPAHIAUgCIgYAGg");
	this.shape_635.setTransform(32,-26.5);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#0F0502").s().p("AAAAAIABgCIAAAEIgBABg");
	this.shape_636.setTransform(27.5,-27.1);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#000000").s().p("AjUJeQgWgRgYgNIgEACIgEAGIgFAGIhTAAQgNgLgHgNIgCgDIAAgDIAAgDIgCgEIgCgDIAAgDIAAgDQgGACgFADIgFAEIhYAAQgGgIgKgEIgJgPIgEgGIgBgGIAAgGIgCgDIgCgDIAAgFIAAgCIAAgFIAAgKIgLAAIgGAAIgPgBIgVgBIgegCIgJgJIgXgbIgCgDIAAgDIACgDIABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAABABAAIAGACQABACAEABIADAEIABACIACAFIABADIAAAAIAMAMIADADIAmACIAMAAIAHAAIAYABIABAAIAGAAIABADIABAHIABAEIAAAHIAAABIgBAJIADADIABAEIAAACIAAACIAAAEQAIAOALAKIAEADQAnABAmgEQAIAAAIgEIAAgGIABgGIACgBIAFAAIADADIACADQAFATAHASIACACQAEAHAGAGIBMAAQABgGAFgEIAGgFQABgJAAgKIAAgJIACgCIAGgBQADAKgBAMIAAAJQAUARAXAOIAggDIADgCIAJgDIABgCIAFgHIAFgFIAFgBIAFgBIAGgJIAHgLIACgFIACgFIABAAIAFAAIABAAQAAAGgBAGQgBAGgEAGQgDAFgFAFIgCACIgBABIgDADIgCACIgKACIgEAHIgBABQgGAIgIAEIgCABIgnAAgAB8IvQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAJgBQAcgEAegCIATgCIACgCIAGgEIAJgHIABgBIAHgBIACAAIACgBIABgCQAGgGAEgIIADgCIABgGIAAgBIAAgCIAAgBQAEgDABgFIACgCIAFABQADAEgBAFIAAADIgJAPIgCADIgFAIIgEAFIAAACIgRAGIgBADIgBACIgLADIgDADIgCADIgVADIgUABIgFAAQgUAAgVgDgAgCIIIgKgCIAAAAIgigKIgDgCIA9AHIAbghIAGAAIAAgGIABgCIAShLQAFgEABgGIABgTIAEgPIgFAAIAAgBQgBgNgEgNIgDgMQgEgSgJgPQgIgPgNgMIgDgKIgDAAIgeAIIgBAAIgEABIgMADIAEABQgOAIgIAPIgCAEIgQANIACAIIAAABIgLA8IgHAWIgCAfIAFAfIAEAFIgSAAIAKAUIAJgSIAPARIACACIAOAMIAEgCIADABQAGAIAJADIgBABIghAGIgKgHQACgBADgFIACgCQATABgngRQADANADAGIgFgEIgEgGIgggvIgBhSQgBgRgGgBQgDAAgDAEIgCACIgHAmIAAABQAAAJgGgJIAAgDQAGgPgLgDIgCACQAFAOgLgCIgFgCIgSgIIgggGIgCgBIgBAAIgSgEIgqgFIgGgBQgwgHgxgGIAAABIgCgBIgFAEIgDADQgDAEAAAGQABAEgDADQgEADgDAEQgEAFACAHIACAEIgGAOIgCADIAAAAIgIAEQgMAAgLADIAKgFIgcgBQgLAKACAEIACACIgJAFQgJgBgJACIgCgBIgdgDQAVgCgcgFIgHgEIgEgCIgVgaIgIgPIgIghIgBgGIgBgFIgCgFIgBgFQAGgOAEAOIABAAIAXBJQAWAfAngEIAKgCIAEgBIgIgHQAMABAPgEIAGgCIAHgBIAVgXQAOgIABgJIABgBIANgZIgSgGQgFgDgJAAQgMAJgHAOIgbAOIgdgJIgMgVQABgJgDgGIgdgFIgDgBIgDAAIABACIAGAWIAFAJIAAAQIgGgGIgRgkQAAgFgEgFIgFgBQgEgEgBAEIgNgCIgIgBQgugGgvgEIgKgBIgBAAIAAAAIAAADQAAAJgCACQgCACgEgFQgCgDgBgEIgMg0IgBAAIgEgCIgCgBQgKgFADgKIAAgCQABgEADgDIAFgCIABAAIAAAAIAIABIANACIAeAEIAzAIIAhAFIAKACIADgBIAFAAIgEgIIADgFQAEgIgGgFQgFgFgGgDIgQhAQAAgGgBgHQgCgHgCgCIgFgUIgCAYIAAACIAAACIABAAIAFAVIADAHIgBADIgBAQIgDAKQgEAMgJACIgIAAIgBgDIgegcIgBgCIgSg6IgFAOIAGAuIgBAMIgRgwIAGgiIAZgdIBmgPQAFgIAPgDQALgBAKgHQAQgMATgHQAHgDAFgEQAOgPAQgNIAAgCIAFgCQALgIANgIIAFABIABAAQAFAAADADIAAgBQAGgMgHglIABgOIgKAAIgDgBIgBAAIAAADIAAgBIgWhgIgBgCIgMgRIgBAAQARgNAuAOIgHgvIABAAIAHAqIAEAHIAJACIAIACIARAEQAVAHAVACIApAFQAHgEgBgJIAEgIIAEgRIABgHIABAAIADgyIAAgCIgEgHIgCgFIAAgCIgBAAIAAAAQgNgKgQABIACgBIgSgHIgBgGQAGAAAAgBQAAgBgFgDIgEgBIgDABIgHgBQgIAHgFALQgHAQANAIIAAACQgDADAAACIAAABIgCADIgHABIAAgBIgUgBIAAgPIABgBIABgBQAJgDABgJIABgFIAAgBQAGgKgKADIgDgCQgDgBgFAAIgCABIgBABQgDAFgFADIgDACIgDACIgCACIAEgJIAHgDQAOgFgKgJQAMAGgBgMIAAgBIAIAAIAhgDIADAAIATAHQAEAHAGACQAGABAFgDIAKAEIAKgHIAQgDIARgHIAAABQgiALADAIQABACAEABIABABIAAABIABAFQgEAEAJANIABABIASgMIACAAIgHAHIgVAMIgOgYIASAiIABAAIAAAEIAAAMIAFAeIALgSIAAADIgGARQgSgBANAZIAAABQgLgfgOAtIABACIAPACIAFAAQAFgDgBgGIABAAIABAKIACAAIAMABIA1AGIAhAEIASABIAGABQgKgHAIgKIACgCIABAAIAAABQgDAOATAFIAQABIAIgDIAMADIA8gDIAAAQQACACABADQADAQgGARQgEAMABANIABAUQAEACAHgBIABAAIgFAGIgGAJIAAACIAHBAIAEAAIABAAQAKgBAEAMIACAHIABACQAFANAKAJIABAAIABAAIAJABIAKACQAXAEAVAAIARgFIADgBIACgBIAkgLIAFgBQALgEALgFQAXgRARgbIgBgYQADgMAEAKIABAEIAQgIIgBAAQgSgFAQgIIAYgPIAUgVIABgBIAAAAIAgALQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAIABAAIAJAJIALAAIABABIAGAAIAcABIgdAHQgHgEgJADIgSAIIgFABIAAABIgBAAQgcAMgQAZIAAAAQgJAIgEALQgTAyg1AMIgNADIgfAJIgEACIgBAAQgRAHgTAEIAAAAQgSAEgTACQgDgEgHgBIAAAAIgEgBIgMgEQgbgLgHgeQgBgDgDAAIgDgBIgCgKQgFAEgHADIgDABIgBAAIgFAAQgxAagzAZIgHAEQgHAFgCAGIgBABIAAACQgBAEACAGIAHASIAFAYIABAGIAAACIAEgFIADAAIACACQABAMgLADIgBACIAGAAIAAAAIgGAMIAsgSQAXgKAXgHIgBAAIgCgBIAKABIAdAEQAPAHALAPQAOASAJAVQAEALgFAJQgCAGgEACIABA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EIgEAFIAAAGQgHAQAAAVIAAANIgHgRIgEAMIAAAGIAAAUQgEgXAEgWgAgLEpIgDANIgIAQIATgeQAGAFAFgFQAEgDgDgDgAhfENIAJgIQgFAOgEAOgAGxEJIgDgDIAHABIARgLIgQgCIACgBIAEAAQAEAAACgDIgHAAQAFgFAEgKQADgKACgMIABAGIAIgeIgHBBIgQANIgBAAIgCACIgHAAgAGVD1IgBgCIANAGIgLgVIgEgJIgBgGIgBgdIACgKIgDAKIgBAPQgGgqASglQAHgHAKAAQAKAAAHAHQAGAFABAHIAAADIAAABIAAABQgHgSgJAAQgKAAgIATQgHAUAAAbQAAAbAHATQAFANAHAFIgCgBIgDACIgGABQgGAAgHgGgAGYCdIAAASIAKgugAkQDTIgCgFIAAgNIACgHIAHAQIAAABIAFAFIADADQAHAFAJABIAOAIIABABIgBAEIAAAAIAAAAIgLAAIgCABQgUgDgMgRgAkJDZQABABAKAAIgFgFQgHACABACgAkOCZIANADIACAAIABABIgGAFIgGAHgAF7B2QAFgIACgJIAQgkIAHABQAFgDADgFIACAAIACAAIgFAJIgJAJQgIAHgGAKQgKARgFASIABgKgABLAIIABgEIgBAAIADgDIAFgKQAQABARgBIAIAAQAiACgQAPIgRAAgAg7g5IguABQgGgDADgFIABgBIANgHIA8AAQAIACAEADQAMAIgJAPIAAABIAAAAgAF0hlIABAAIAigDIABAMIAAABIgDADQgPACgKAAQgYAAAQgPgAAqh8IgCgFIABgzIgBgNIAIgVIABgCIAAAJIgBABIAAABIgBABIAAADIABAYIAAAsIAAABIABACIAAABIAAABQADAKgCACIAAAAQgCAAgGgIgAChifIAHgJIADgHIAAAAIADgGIAGAEIgPAYIgGAEIACgKgAh3i5IAAgCIADAAIgCACgABdjEQgEgHAFgHIABgBIABgNIAAgDIACgBIACAAIADABIABABQACAIAAAIIgBADQABACADAEIAAABIgBADQgEACgEAAQgEAAgDgBgAiljRIgEgBIgEgBIgGgCIAAgCIgBgDIgBgBIgCgCQgEgEgFgCIgCgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIACgBIABAAIACACIABADIABADIAKADQAGAEAGgBQAOABAIgNIADAAIABgBIABABIACABIAAAAIABABQgBAKgKAGIgFADIgBAAIgEABIgBABIgIABIgBAAgACFjeQgOgCAGgMQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBIAFgBQAUAFgPANQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgBAAgABSjjQgGgCAAgGQAAgGAFgDIAFgBQARAGgOALIgEABIgDAAgAiXj1IgBAAIgDgBQgEgBgDgDIgDgEIgHADIgBAFQAAgNAIgKIAHgHQgEAAgEgBQgCgHAAgHIABgIIAFgCIAAAAQAFAAAGADIABABIABACIAAABIAAACIABABIABACQAAADgCADIgDAEIACAAQAKgCAHgGIAGgBIABAMIgGAKIgXAHIAAABQAHgBAFADIADACQACAEgEAEIgBABIgGAAIgCAAgAh3kIIAAgDIAAgGIABgBIABgCIACgBIADgBIALADIABABQACAEAAAEIgCAHQgFABgDAAQgHAAgEgGgAFCkpIAKgIIAHgYIALgUIAsgIQAAADACADQACACAEAAIgGABQgKADAJAJIgEgBIgBgBIgXgHIgYAOIgKAcIgLAIgAAbkwQAPgOAPgJIACgBQAEgBACgDIADgCQALgFAKgCQAQgEAOADIALAEIgaAKIgNACIgHAAIAAAAIgFABIgTAMIghALIAAgCgACwlDIAAgBIABgEIgLgzIADgOIAAABQgBALACAAQAAgNAIgOIAFgHIAMgOIAAgKIAAgCIABgDIABgBIADAAIABAAIACABIABABIAAABQABAGAAAHIAAACIAAADQgJAMgKAKQgIAQADASIABABIABACIADgJIALArIgLACIgGgSQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABQAGAQgIAEIgDgBgADYlaQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIABgDIAGgBQAHgBAIACIADgEIABgBIABAAIACgBIADACIABABIABACQAAADgBAEIgEADIgBABIgBAAIgIABQgJAAgJgDgAAYllIgVAIIACgBQACgEAAgFIgIgGIgMgDIANgBIAHAFQAQAKgRgTIgEgJQAEgJgDgKIgDgKIADAFIABADIAEAKIAAgBIADAFIAAACQAAAGAEAFQAEADAGAEIAWAEIABAAIgCAGIgKAFIANAFIAAAAgAi7lkQAGgUgVACIgBAAIgGACIgBAAIgEgFIABAAQARgCgSgEIgCgBIgBACIAAADIgBgCQgCgFAKACIAFABIABAAIArAAIAAgBIAHgEIAEgGQAVgBASgKIAEgCIAFgDIAAAAIABAAIAAAAIAJgFIAQgCIgQAOIgiAYIg6AFIAAAQIgDADIAAgBgAhNltIgDgEIgEgHIgGgEIgBgCIgCgDIgEgBIgEgBIgBgBIAAgBIAAgEIABgCIABAAIADgBIAAAAQAEgBADABQADACADAEIAAABQAIACAEAHIADAFIABADQABAEgDACIgBABIAAAAIgDAAIgDAAgAFRl5QgEgBgCgEIgBgDIgBgCIAAgFQgKgGABgMIABgJQgIgIgEgLQgCgEgBgFIgBABQgCADgDABIgBABQgMgBgLgDQgEgBgBgDIgBgDIgBAAIgGAEIgiAAQgEgDgCgDIgBgDQgBgFAFgHQADgFAHAAQAEgLAJgIIACgCQAGgFAJgDIANgGQANgCAFAIIABADIABADIAAAFIAAACIALgBIAEAAQAJAAAJACQADAAACAEIABADQALAAALACIAFACQASgIALAMQAEAFgCAFQgDAHgGAEQAKAIAPAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQAFATgWAFIgDACIAAAAIgKAMIgCACQgMANgNALIgJAAIgDABIgJAAgAjYmXIAJADQAbAIgUAGgAjEmiIgDgCQgIgFgFgJIAAgDIAAgDIABgBIABgBIABgBIACAAIADABQAFAJAIAGIACACQAVAAAWgCQAFAAAEgEQAEgJAHAFQACAJgJAHIgCACQgPADgOAAQgQAAgQgEgAAymkIgEgBIgBgCIAAgEIABgCIABgBIADAAIAAgBIAPACIABABIAAACIAAACIgBACQgFADgFAAIgFgBgABVm6QgEgEgCgFIgBgHIAAgBIAAgCQABgEAEgEIABAAIACAAIAAgBQAGAAAEABIACAAIAAgBIAGABIANABIACABIAAACIAAAEIAAACQgGAFgJgCIgBAEIAAACIgBABIgGAHIgBABIgFAAIgFgBgAAnm7IgEgBIAAgBIgBgDIAAgCIgCgBIgCgDIAAgGIgKgCIgBgCIgBgCIAAgBIAAgDIABgCIABgBIABAAIACAAIAAgBIALABIAGgCIACgBIABgBIADAAIAAgBIAJACIABABIABAIIgBAJIgBAHIgCAHIgJACIgFgBgAiQnVIgBgBQgCgGABgGQAAgEABgEIACgBIACAAIAAAAIAKABIABABIABACIAAABIAAACIABABIABACIAAAEQABAFgCADQgEACgFAAQgEAAgDgCgAhMnlIgGgBIAAAAQgGAAgBgDIAAgBQgCgHgGgEIgEgCIAOAEQAHAUADgQIgCgCIAXACIAFAAIAEAAIABAAIADACIANABIABABQAPAJgUACIgSABgAgzniQgFgDgBgHQgHAGANAEgAEXoDIgWgDIAdgHQALAAAHgHQAEgDACgEQACgFAAgFIAAgDIgHgaIAWAjIAHALIAAAFIgCAIIgBACQgDABgFgMIAAgCQAIALABgCIgBgGIgEgJIgDgDQgYAFAWADIgoAPIgCABg");
	this.shape_637.setTransform(27.1,13.6);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#9C9789").s().p("AgDAEIAHgIIAAACIgHAHIAAAAIAAgBg");
	this.shape_638.setTransform(27.3,-30.5);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#A18579").s().p("AAAAIIgBgBQgKgOALgCIAFAAIACAAIgIATg");
	this.shape_639.setTransform(24.1,-32.6);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#9D8C85").s().p("AgNANIAPgNIgPABIABgBIAHgIIAagVIgBABQgIAfgWARQgEgBgEABIAAAAIgCABIgCAAIgBACIABAEIAAABIgGADQgJAEgKACgAAYggIAYgEIgBACIgaAFg");
	this.shape_640.setTransform(19.2,-28.1);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#6C5B54").s().p("AgFgEQAIgHAMAAIgDACIAAAAIAAABIgaAUQAAgKAJgGg");
	this.shape_641.setTransform(20.1,-30.1);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#655B4F").s().p("AgGgBIALgBIAAACIACADg");
	this.shape_642.setTransform(20.5,-32.6);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#99948B").s().p("AgGADIgCgDIgBgCIAIgBQAXADgXAEIgFgBg");
	this.shape_643.setTransform(21.9,-32.6);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#F3E9E2").s().p("AgEgCQACAGAEADQgMgEAGgFgAAGgFIgFAAIAGAAIgBAAg");
	this.shape_644.setTransform(21.7,-35.4);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#65635F").s().p("AAeAHIgCgCIgGAAIgFABIgVgDIgIgBIgOgEQgIgEgIgCIAAAAIBQAKQgBAEAGACIAAABg");
	this.shape_645.setTransform(19.7,-36.5);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#3A312C").s().p("AAAAaIACgBIACAIIABADIAAABgAgCASQgCgMAAgLIAGgIIgBATIAAAOIgBADgAgDgLIAAgHQACgJAEgJIgCAGIADAFIgBAEIAAAGIgHAJIABgFg");
	this.shape_646.setTransform(27.4,-29.4);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#9A7C70").s().p("AgBANIgDAAIAGgCIAEgDIgBADIgFACIgBAAgAgFgMIACAAIACABIgEgBg");
	this.shape_647.setTransform(25.1,-34.9);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#140E0D").s().p("AgmAhIAAAAIAAgBIAAgBIAAgBIAKgVIgCAAIABgEIgFABIAAgNQASgDgSgLIABgFIAHgBIAGABIAXAGIASgBQAUgCgPgKIgBAAIAAgBQgGgCABgEIABgEQABAGAHAAIABAAIADAAQAHACADADQAEAEgBAFIgCAEIAAAAIgBAAIgBADIgEACIgHACIgGAAQgLADAKANIABABIgYAFQgMAAgJAHQgIAHAAAKIgHAHQgIAFgDAAQAFgFADgHgAgEgGIgMACIAOAEIAFABQAYgFgZgDg");
	this.shape_648.setTransform(21.5,-32.2);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#604B3E").s().p("AgCgHIABAAQADADACACIAAABIgHAJg");
	this.shape_649.setTransform(29.8,-35.1);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#AF9588").s().p("AgDAEIgBgBIABAAIACABIAEgBIgBAGQgCgDgDgCgAAAgEIAFgEIgDACIgCADg");
	this.shape_650.setTransform(30,-36.2);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#928680").s().p("AAAAEIAegKIgnACIApgDQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQgUAIAGAEgAgZgDIACgCIALACIgSADQgDAAAIgDg");
	this.shape_651.setTransform(23,-39.6);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#998579").s().p("AgKAMIgBAAQgGAAgBgFIAggOIAFABIgaASgAgDgKIAAgBIARAEg");
	this.shape_652.setTransform(25.5,-37.4);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#6C5B50").s().p("AgGgDIAOADIAGACIAAABIgBAAIgRABQgRAAAPgHg");
	this.shape_653.setTransform(23.7,-38.8);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#120D0C").s().p("Ai7B+IABABIgCgCIgKgRIAHgfIAAAAIAIABIgBAHIABAEIgJgDQADAXAGATIAAAAIAAACIgEgEgAguBcIAAgBIACgBIABAAQANgDADgLQgBgUgRAEQgFACgHADIgEACQgIAFgJACIgSAUIABgKIABgCQAOgUgVgDIALgFIAKAQIAigOIABAAIADABQAfAFgRgUIgBAAIgDgGIgJggIAAAAIAKgXIAKgPIACgDIgCARIgBABIgDADIgBAeIABgEIAAARIAFgbIABAAIACADIAAAJQABASAPAKIABAAIAJAGQAIAFAKACIAQACIgEAKIAAABIgrAAIgGgBQgJgCACAEQgHAGgCARIAAABQgKAJgEAAIgBAAQgEAAgBgIgAAAA7QAUgHgbgIIgJgCgAAFgDIAAgGQACgMgHADQAAgNAHgLIACgBIACgBIADABQACAFAGACQgCAGgFADIABADIABADIABAAQgHALAJgHIABAAQAKAEAIgFIAAgCQAHACACADQAEAEgGAFIgHADIgLACIgFABQgIAAgCAAIAAgBIgBABIgGAAIgBgDgAhFghIgNgDIAAAAIAIgHIAJAAIAcADIgEgCIAAAAIgFgDIgzgjIgBgBIAhAKIAiAOIgBAAIAIADIgjgnIAjgPIAZALIAIgYIAEANIACADIAAABIAEAMIAPgUIAUgRIAAABIgNAcIgIAXIAegfIAUgNIAIgFIgHAIIgXAZIgQAPIBFggIAOgGIgaAPIgSALIgUATIALgFIAlgPIAZACIgBABIgCACQgRAHAegHIADgBIAogCIgeALQgVAMApgFIABAAIASADIghAPIgBAEIhSgLIgBgBIgDAAIgGgBIgGAAIgCgCIAAAAQgBgDgCgDQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAIglgBIgBABIgBAAIgCACIAAAAIgOAEIgBAAIgBAAIgBABIgBAAIgBABIgGADIgLARIAAAAIgCABQgGgFgGAOIAAAAIAAABIgXAEgAgIhCQAQgPgQgHIgEgBgAANhLIAAAFQAAAAAAgBQAAAAABAAQAAgBABAAQAAgBABAAQADAAgBgEIAAgBIAAgBIAAAAQgEgJgBAIIgBAAQgFAAAGAFg");
	this.shape_654.setTransform(7,-31.3);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#766C65").s().p("AmAEoQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAgBIACgCIAAgBIAAgBIAcgHIAOgCQAHgBADABIgKACIgIACIgeAFIgCAGIgCAAgAFaklIgkALIAWgMQATgDANAGIAJAGIABADIANgBIgPADg");
	this.shape_655.setTransform(3.3,-9.1);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#C6B8B0").s().p("AAHALIAPgBIgCACIgNABIAAgCgAgiABIAVgEIAOgDIAbgFIAHgBIgkARQgOgFgTABg");
	this.shape_656.setTransform(39.9,-38.8);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#7E7570").s().p("AhnAKQATALARABIgPACgAArASIA5geIg3APIgRgDIA5gXIATAJIgzAggAgGgIIAaAHIgXgGIgeAWIgHABQASgHAQgRg");
	this.shape_657.setTransform(46.8,-41.6);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#AC9A91").s().p("AAEAFIgNgBIgFgDQAAgDgEgDIAlAKIAAABIAAAAg");
	this.shape_658.setTransform(39.4,-40.8);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#19100C").s().p("AiZA7IACgFIAAgBIAEgFIABgBQAFgEABgGQACgIgEgEIA0g0IASgHIABAAIAWANIAEACIAPABIAOACIADAAIARgOIAKgIIAQgKQAIABAHAEQAfAQAWgXIAMgGIAOgHIABAAIAAAAIAVAGIAIAaIgCABQgFgJgIALIgFAEIg+AXIgagDIgFAAIgHABIAAgDIAIgHIAUABIAEAAIAEAAIAMAAIAJAAIA0ghIgTgKIg6AZIgIgCIgbgHQgQASgQAHIgbAFQgSAAgTgLIgeASIgdAQIgFADIAAABIgEAHIAAABIgCAQIgNATIgCADIgDgFg");
	this.shape_659.setTransform(42.9,-38.5);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#718080").s().p("AAXgaIADAAIgzA1g");
	this.shape_660.setTransform(31.2,-38.6);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#3C3933").s().p("AgHgBIABgBIAHgFIgBABQgGAKANgFIABgBIgBACIgHAGIgFACQgEAAACgJg");
	this.shape_661.setTransform(34.1,-36.6);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#6D615B").s().p("AAAgFIAAAAIgSAGIgDAAIAPgHQALAAAIAEIAFACQAEADAAAEg");
	this.shape_662.setTransform(35.7,-41.4);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#1B130F").s().p("AgxAkIABgJIABgGIAIgNIALgOIAOgEIApgNIAVgGIgagKIgnALIglADQAFgKABgHQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIAAgBQgVgRgWASIgBABQgPAGAIgLIABgBIAAAAIAlgLIAaAMIAPgDIAFAKIgcAPIAigMIAkgLIAigEIAKABIAKgDQADAAACgDIABAAIAWADIgOAAIgOAJIgHAFQgHAHAMAAQgJAJgEALQgHAAgDAFQgFAGABAFIgBABIgCAqIgJgTIgFAEQAAgHgBgGIAHgOIAAgBIAKgUIgXAHIgVAKIgUAEIgOAnIgNAJIgQAKg");
	this.shape_663.setTransform(44.4,-32.4);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#7C5F50").s().p("AAIgGIgEAFIgMAIg");
	this.shape_664.setTransform(29.9,-68.2);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#8E7E71").s().p("AgHgJIAFAAQAPABgHAMIgFAGg");
	this.shape_665.setTransform(28.5,-62.5);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#705D54").s().p("AgVgIIArAPIAAADg");
	this.shape_666.setTransform(24,-68.7);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#8F908D").s().p("AgMADIAZgIIgZALg");
	this.shape_667.setTransform(27.5,-68.3);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#9C8B81").s().p("AgPAgIgCgFQAKANAUAAIgDAEgAAFgJQATAYgKAWgAAAghIAMgKIgLARg");
	this.shape_668.setTransform(29,-64);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#6F7B7B").s().p("AAFADIgQgGQAMAAALAHIgHgBg");
	this.shape_669.setTransform(23.3,-68.5);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#BCAEA8").s().p("ADmENQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAAAIgEAEgAjmkSIANgCIACACIAdAQg");
	this.shape_670.setTransform(44.9,-42.2);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#F5EEE7").s().p("AgBACQgEgCAAgDIALAHQgFAAgCgCg");
	this.shape_671.setTransform(39.4,-65.9);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#C7B6B1").s().p("AAAALIgLgIIADgRIAUAdg");
	this.shape_672.setTransform(40,-66.6);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#B9A397").s().p("AgHAAIABgCIANgFIANgBIgnARg");
	this.shape_673.setTransform(32.7,-69.8);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#797773").s().p("AAKgKIAFgBIAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAIALgDIABAAIgPADIggAMg");
	this.shape_674.setTransform(31.1,-70.1);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#C3B4AF").s().p("AgLgDIABgBIAWAHIAAABIgFABg");
	this.shape_675.setTransform(31.4,-71.8);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#6E655C").s().p("AgCACQADgSACAXQgEgHgBACg");
	this.shape_676.setTransform(10.1,-60.6);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#887970").s().p("AgHALIABgEIAHADIgEAFgAAEgOQACAJADAFIgIAJg");
	this.shape_677.setTransform(10.9,-58.8);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#AEAEA4").s().p("AgCgHQABgDAEAIIAAACQAAAHgBACQgBgIgDgIg");
	this.shape_678.setTransform(10.1,-59.6);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FEFDFB").s().p("AgUAoIgEgHIAGgBIAAAJIgCgBgAgVADIArgrIADAEQghATgIAfg");
	this.shape_679.setTransform(-0.7,-57.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#DACFC8").s().p("AgTAtIACgEIAAAAIABAHIgCABQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBgAgYAiIgBgjIAFgMIAoggIADgDIACAEIABADIgBAAIgCgEIgrAsIAFAKQgCAJAAAKIgGAAIAEAIIgFgCg");
	this.shape_680.setTransform(-0.8,-56.6);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#80726A").s().p("AgYAPIAKgPQAKgLAKgDQAFgBAFAAIgoAfIAAgBgAAVgPIAEACIgDABg");
	this.shape_681.setTransform(-0.4,-59.6);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#F8F6F2").s().p("AgRAFQgBgEAHgHIAdAJIgEADIgJABIgWgCg");
	this.shape_682.setTransform(6.5,-62.3);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#9EA9A9").s().p("AgTASIAnglIgnAnIAAgCg");
	this.shape_683.setTransform(11.3,-65.9);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#ACA5A0").s().p("AAcgBIAAABIg3ACg");
	this.shape_684.setTransform(6.6,-63.9);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#241913").s().p("AgPgCIAbACIABADgAAPAAIAAAAIABAAIgBAAg");
	this.shape_685.setTransform(7.2,-63.4);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#5C6360").s().p("AgqAeIAAgBIAQgVIAFgGQAWgBASgVIAYgKIgjAaQgKADgKALIgdAUIgBAAg");
	this.shape_686.setTransform(-0.5,-60.5);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#AFA29B").s().p("AANAGIAIgBIAFgDIAAACIgCAEIAAAAIgLgCgAgYAAIgBAAIAMgHIAKAAQgHAHABAEIgGAAIAAAAIgBABg");
	this.shape_687.setTransform(5.8,-62.2);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#604D40").s().p("AgEAAIAAAAIAHAGIgEABIgDgHgAgEgCQAEgEAGAAIgLAGQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAg");
	this.shape_688.setTransform(3.8,-62.3);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#170E0B").s().p("Ag3A6IgBgBQgFgPAHgRIALgRIAFgHIAdgTIgLAOIAAACIgOAXQAEgBAEAEQAEADgEAGIgHACIgQAGIAAAEIgCACIAAADIgBAJIgBABIgCgCgAAagiIgCgDIgEADQgEgBgFACIAjgaQAWAAgPAGIgBAAQgHABgEADQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIABABIAAAAIADAGIgIAEIgDABIgDABIgEgBg");
	this.shape_689.setTransform(-0.8,-57.6);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#B4A8A2").s().p("AACgCIABAAIgFAFg");
	this.shape_690.setTransform(-3,-60);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#977869").s().p("AAPgMIAAABIgdAYg");
	this.shape_691.setTransform(13.4,-66.4);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FEFEFD").s().p("AgLAFIAQgHIAFgBIABABIgEAJIgSgCgAAKgDIgCgBIAEgCIgBADIgBAAIAAAAg");
	this.shape_692.setTransform(19.4,-68.2);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#B4A49C").s().p("AhBAXIANgSIgHAbIABgBIAAADgAAkgTIAEgFIgHgFIAAgBIABAAIAPgDIARAIIgMAIIgSgCgAgWgVIAEAAIgEACIAAgCg");
	this.shape_693.setTransform(17.2,-65.5);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#8A8481").s().p("AgnAHIA0gLIAagCIhLANg");
	this.shape_694.setTransform(17.9,-69);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#4F4E4A").s().p("AgFAeIgegKIgKAAIABAAQAPgGgWAAIAAgBIA3gCIAngmIAFgFIABAAIADAAIg0AxIgCAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABIgcgEIAdAHIgBAMg");
	this.shape_695.setTransform(9,-65);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FCFBFA").s().p("AhSAaQAIgDAGgEQAdgWAigJIAEgBQAGgGAGgIIADgDQAmAAAlgDIg1AMIgBAAIgFAEIgmAlIg4AEIAAABIgYAJIAGgIg");
	this.shape_696.setTransform(10.3,-66.1);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#1F1611").s().p("AhaA9IgIgDIAAgGQACgBAAgJIAAgCQgCgYgEAUIgBgBIgBgCQgEgGgGgBIgEgBIAAAAIACgEIABgMIgBgDQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABIABAAIABAAIA1gxIBLgNIAsATIAagMIAggMIgBACIgMAKIgRAPIACAHIgFAIIAJAKIAJAtIAAACIAAABIgCAAQgUAAgKgNQgEgGgCgIQACgKgEgKIAAAAQAAgKgDgHIgFgHQgEgEgFgCIAAAAIgDgCQgLgJgNAAIgQADIABgDIgEADIACAAIgEABIACgBQgRgJggASIgDABIgeAaIgNARIAGALQAAAIABAJIAAABIgDAZIAAABgABMAEIAKAUIAEgGQAIgNgRgBIgCAAIgDAAg");
	this.shape_697.setTransform(20.1,-63.9);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#EFE6E1").s().p("AgqAGIAegYIAEgCQAegSATAJIgEABIgRAJIgMgBIgUAKQggAOgEAdIgBAAgAAngSIAEgKIAHAFIgEAGIgHgBg");
	this.shape_698.setTransform(16.2,-65.7);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#8E7D75").s().p("AgGDpIADgIQAJgogDgqQgBgPgCgOIAAAAIAAgqIAFAAIABBfQAAAAAAABQABAAAAABQAAAAAAABQAAABgBABIAAAAIAAArIgFALIgBAAIABgHIgDAPIgDAJgAgCjnIgDAAIAAgLIAAAAIAJAKIAAAEQgCgCgEgBg");
	this.shape_699.setTransform(77.9,15.7);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#C0A99D").s().p("AAOAJIgfgTIgCgBIAAgBQARABALAHQAMAGgBAKg");
	this.shape_700.setTransform(71.9,-53.4);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#967768").s().p("AAdApIAAADIgHACgAAJgZIAGAEIACAHIgIgLgAgcgtIADAAIACABIgFgBg");
	this.shape_701.setTransform(72.4,-50);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#768683").s().p("AAtA+IgeglIAKACIAVAjIgBAAgAgHAXIgmhUIACAAIAnBUIAMABg");
	this.shape_702.setTransform(69.3,-55.6);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#A17E6C").s().p("AALAdIgIgSIAFAEIAFANIAAABgAgMgbIAAgBIABAAIAGAOIABAGg");
	this.shape_703.setTransform(68.5,-57.5);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#6F5648").s().p("AgFgJIgDgBIABAAIACABQAOAJAAALQgBgLgNgJg");
	this.shape_704.setTransform(66.3,-61.6);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#918C85").s().p("AAMAFIgBgBQgGgEgGAAIgBAAQgGgBgGACIAAgBIACgBIAEgCIAAAAIAJgBIAOAJg");
	this.shape_705.setTransform(63.4,-62.3);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#201610").s().p("AA4BXIACADIgHAGgAA9BOIABgDIAKACIAAABIgGAFIgFgFgABCBEIgIgYIgVgkIgKgBIAAAAIgHgBIgNgCIgmhUIgNgJIgBgCIATACIAEABQANAJABAMIAAACIAIATIAAACQAAALAHAHIAIASIAEABIAhATIAIAKQAFAIAEAJIAEAHIAAAKIgBAMIgGAAgAhIhbIAJgEIASAEQgGAAgEACIAAAAIgEACIgDAAQgFAAgFgEg");
	this.shape_706.setTransform(68.1,-53.7);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#A68E83").s().p("AgKAEQAGgMARAAIAAABIgZARIACgGg");
	this.shape_707.setTransform(60.6,-61.3);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#BAAAA4").s().p("AgIgDIAIgCQAEAFAFAGg");
	this.shape_708.setTransform(40,-71);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#694433").s().p("AgEAIIAAALIgFABgAgBgGIALgNIgOAag");
	this.shape_709.setTransform(46.8,-63.8);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#7D8D8C").s().p("AAQgOIgZAZIgGAEg");
	this.shape_710.setTransform(47.9,-67.1);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#B79988").s().p("AgVASIAAAAIABgBIAOgaIAagTIABAAIgqA5g");
	this.shape_711.setTransform(48.5,-64.8);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#674D40").s().p("AAOgKIgBADIgaASg");
	this.shape_712.setTransform(49.2,-67);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#9A9389").s().p("AgCABIABgBIAEAAIgEABIgBAAg");
	this.shape_713.setTransform(50.8,-67.9);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#9E867A").s().p("AgKgEIAAgCIAVANg");
	this.shape_714.setTransform(45.2,-66.4);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#978176").s().p("AgGgVIANAAIATAKIADAEIAGAEIAXAYIAAACQgbgkglgIgAg5gWIAJAAIgDAAIgGABIAAgBg");
	this.shape_715.setTransform(38.4,-69.2);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#2D241C").s().p("AAyAkIAAAAIgBgBIgFgVIgRgRIgMgMIgGgGIgRgJIgNgHIgbAAIgNACIgBAAQgKADAAgIQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIAAgBIAGAAIACgBQAXgDAUAEQAkAIAbAlIAWAMIAGgFIgJASIgMACIABAUg");
	this.shape_716.setTransform(39.6,-66.9);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#9B928E").s().p("AgOAJQgDgHAAgKIAMgFQACgDAAgDIgDgGIARAKIAAABIgOAIIgDARQAAAEAEACQADADAEAAIANADIABABQgHACgFAAQgPAAgGgRg");
	this.shape_717.setTransform(39.5,-67.5);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#809190").s().p("AAMAVIADALQABAFAIgBIAAgBIAFgBIgBABQgEADgDAAQgJAAAAgRgAgFgLIgGgIIARASIAFAUQgHgRgJgNgAgcgkIAAgBIAGAGIgGgFg");
	this.shape_718.setTransform(43.4,-65.3);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#6E8D8F").s().p("AgHgcIAPAWIAAAZIgIAKg");
	this.shape_719.setTransform(57.2,-62.8);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#A99C94").s().p("AAhAOQAAgMgOgIIgCgBIATAAIABACQgCAJAAAKIgCAAgAgkgJIAMgDIADgBIABAAIgJAEIgHACIAAgCg");
	this.shape_720.setTransform(63.8,-61.9);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#533A2E").s().p("AgIgNIAAgBIADgEIAGgBQAFAFAHgBIgBACQgSABgGAMIgCAFQgFAJgIAHgAARgRIAAAAQAEgDAGAAIABACIgKABg");
	this.shape_721.setTransform(60.8,-60.9);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#735549").s().p("AAdAOIACAAIAKATIAAABQgFgLgHgJgAgbgdQgHgDgGgBIAdAAIANAMIAFAMQgOgMgUgIg");
	this.shape_722.setTransform(55.7,-65.6);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#150F0E").s().p("AAtAzIACgLIAJgKIAAgaIgQgWIgXgVIgYgEIgFADIgFAAIgcAVIgMAOIgCAMIgBABIAAAAIgEANIAAABQgIABgBgGIgBgSIAMgCIAIgSIAbgaIABgBIASgCIABAAQAHAAAGADQATAIAQANIABACQAHAOANAHQAHAIAGALIgTAjg");
	this.shape_723.setTransform(52.4,-63.9);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#B49E93").s().p("AAnARIAEABIAJANIgCAEgAgDgeIgdAAIgBAAIgSACQAAgBAAABQANgFALgBIADAAQASAAAOAKIACAFg");
	this.shape_724.setTransform(54.9,-65.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.howmanybubblethreestill, new cjs.Rectangle(-97.1,-72.2,197.1,146.5), null);


(lib.HowmanyBubble1still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgLgLQAFgFAGAAQAHAAAFAFQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEQgEgFAAgHQAAgGAEgFg");
	this.shape.setTransform(16.1,60.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAFgHAAQgGAAgFgFg");
	this.shape_1.setTransform(16.1,60.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgFhWQAWAAAQAQQAPAPAAAXQAAAWgPAPQgQAPgWAAQgWAAgQgPQgPgPAAgWQAAgXAPgPQAQgQAWAAgAAiBXQgLAAgHgHQgHgIAAgKQAAgLAHgHQAHgHALAAQAKAAAIAHQAHAHAAALQAAAKgHAIQgIAHgKAAg");
	this.shape_2.setTransform(9.2,47.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ABA9A6").s().p("AgCABQgDgEgCgFIAAAAIAGAHIAJAKQgGgCgEgGg");
	this.shape_3.setTransform(-41.4,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3B5AF").s().p("AADAEIgBACQgIgVAJATg");
	this.shape_4.setTransform(-64.6,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BAAEA9").s().p("AAAAHIAAgOIAAAPg");
	this.shape_5.setTransform(-64.5,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BCADAA").s().p("AABAEQgEgBAAgGQAKgDgFAKIAAABIgBgBg");
	this.shape_6.setTransform(-50.6,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C423D").s().p("AABgBIAAABIgBACIABgDg");
	this.shape_7.setTransform(-12.7,29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A09A96").s().p("AgCAAIACAAIADAAIAAABg");
	this.shape_8.setTransform(-34.7,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B0A7A2").s().p("AgNgBIAFAAIABgBQAFACAGAAIAAACIgCABQgIgBgHgDgAAJAAIAFAAIgBABIgEgBg");
	this.shape_9.setTransform(-23.3,9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#899090").s().p("AgCAAIgBgCIAEABIADAEIgGgDg");
	this.shape_10.setTransform(-29.8,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B0A9A2").s().p("AAtANQgIgBgDgHIAMAIIgBAAgAAhAFIgOgIIAIADIAHAFIgBAAgAgtgIIAFgEIgBACIgEADIAAgBg");
	this.shape_11.setTransform(-16.1,8.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D5252").s().p("AAAALIABgWIgBALIAAALIAAABg");
	this.shape_12.setTransform(-1.3,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#72655D").s().p("AB1AhIAAAAIAAAAgAhBAJIADgBIADAAIgBABIgEABIgBgBgAhIgDIAAAAIAAAAgAh0ggIACAAIgBABIgBAAIAAgBg");
	this.shape_13.setTransform(-15.8,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B8A8A0").s().p("AAAAAIAAAAIABAAg");
	this.shape_14.setTransform(-4,12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8E9FA1").s().p("AgCACIAFgKIgEAJIAAAIg");
	this.shape_15.setTransform(-0.5,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#71635C").s().p("AgBgCIABABIABABIABADg");
	this.shape_16.setTransform(-5.4,-12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DFD9D2").s().p("AAAAAIAAAAIABAAIgBABIAAgBg");
	this.shape_17.setTransform(-0.2,-9.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0F0705").s().p("AADACQgXgIAcAIIgDAAIgCAAg");
	this.shape_18.setTransform(-13.8,-10.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#160B08").s().p("AAAAEIAAgHQAAgJABASIgBABIAAgDg");
	this.shape_19.setTransform(-18.4,-12.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BCABA2").s().p("AgCAAIABgBIAEADIAAAAIgFgCg");
	this.shape_20.setTransform(-18.1,-16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#887F7C").s().p("AgCgBIAAgCIADADIACADIgCABg");
	this.shape_21.setTransform(-18.6,-23.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#79675D").s().p("AAAADIAAAJIgCAAgAAAgCIADgJIgCAJg");
	this.shape_22.setTransform(-17.3,-24.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6DDD7").s().p("AAAAAIAAAAIABAAg");
	this.shape_23.setTransform(-17.3,-24.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E6DCD7").s().p("AgvALIAAgBIABAAIAlAVgAAvgOIAAgBIABABgAARgVIAAgBIAAABgAAUgeIAAAAIAAAAg");
	this.shape_24.setTransform(-12.3,-16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#897B73").s().p("AgBACIgBgCIgBgBIABABIAGACg");
	this.shape_25.setTransform(-5.1,-12.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#100B0A").s().p("AgeAqIgDgDIAEgEQAjAFgggLIgBAAQgZgNACAKIATASIghgYQgBgTgBAJIABAIIgSgjIgZgOIgFgPIAAgBIACgBIAZAHIgBAGIAOAJIAAgCQAFAAAEADIAFADIABAAIAFAEIgJABQgKADALAJQACACADAAQACAAACgCIAmATIATAKIAUgGIABAAIACgDIAFgHQABgEgCgEIgGAAIgHAAQAIgBAIgCIABACIAAABIABABIADABIAUAaIgigHIADAGIA4AKQAGgJAJADIAOAFIgZgBIgMAIIgogKIAOAPIAAABgAgQAqIAFAAIgQgFIALAFgAAdgQIgEACIgDAAgAgXgRIAAgBIACAAIAAABg");
	this.shape_26.setTransform(-11.8,-14.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A8A9AA").s().p("AAXASIADgDIgCADIgBAAgAgZgRIACAAIAAACIgCgCg");
	this.shape_27.setTransform(-11.6,-14.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#776E69").s().p("AgKAAIALAAIACAAIAIAAIgJABQgGAAgGgBg");
	this.shape_28.setTransform(-10.3,-14.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#667776").s().p("AAAABIAAgBIABABg");
	this.shape_29.setTransform(-3.4,-20.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#99877F").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_30.setTransform(-4.3,-14.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#736962").s().p("AgPg4IACAAIAdBxIgBAAg");
	this.shape_31.setTransform(-1.8,-17);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DBD2CA").s().p("AgCgEIABAAQACADACAFIgCABg");
	this.shape_32.setTransform(-29.4,-2.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9E7F71").s().p("AAGANIAAAAIAAAAgAgFgMIACAAIADALIAAAAg");
	this.shape_33.setTransform(-29.3,-1.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#060302").s().p("AAOAZIAAgEIAAgBIABgEIAEADIABABQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQAGgBgBgIIgBgBIABAAIAQAMIACACIAEACQATAQgWgIIgPADgAgiAEIAAgBIgMgSIAAAAIAFADIAAAAIAAAAIABAAIACADIAAgBIAGAHIABACQABADgEACgAg0ADIgEgBIgBgHQACACABADIADADgAg5ggIAAgCIgBgCIABAAIAJAMIAAAAIgBADIgIgLg");
	this.shape_34.setTransform(-24.6,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#443933").s().p("AgGAWIgBgEIAEACIABACgAAIAEIABABIAAABgAgIgUIAEgBIAEALIAAABIAAABg");
	this.shape_35.setTransform(-29.4,-0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A6A7A6").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_36.setTransform(-35,0.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7D6252").s().p("AgIgPIAAgBIARAig");
	this.shape_37.setTransform(-39.2,-7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7C5B4D").s().p("AAAgDIAAAFIAAACg");
	this.shape_38.setTransform(-40.2,-9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#010100").s().p("AgBAAIACgBIABACIgBAAIgCAAIAAgBg");
	this.shape_39.setTransform(-33.1,-9.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#211915").s().p("AASAWIABgDIgCAHIgCABIADgFgAAEARIgCgBQgCgFgDgFQAFADAIgDIgFALIgBAAgAgOgEIgCgFIgCgCIABAAIAGAHIACADIgFgDgAAAgLIAAAAIAAAAgAgEgaIAAABIAAAAg");
	this.shape_40.setTransform(-28,2.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#010000").s().p("AgEgBQgHgGALADIAHAEIAAABQACAFgDAAQgDAAgHgHg");
	this.shape_41.setTransform(-31.7,-12.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B69B8F").s().p("AACACIgCgBIgCgCIAFADIAAAAIgBAAg");
	this.shape_42.setTransform(-35,-1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BAB2AB").s().p("AAAgDIAUADIgnAEg");
	this.shape_43.setTransform(-38.2,-16.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A19790").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_44.setTransform(-36.1,-20.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#211813").s().p("AgDABIgFgCIARgBQgEAFgEAAQgBAAgDgCg");
	this.shape_45.setTransform(-34.1,-20.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2B2017").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgBAAIAAABIAAgBg");
	this.shape_46.setTransform(-27.2,-20.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F8ECE4").s().p("AAAAAIABAAIAAAAg");
	this.shape_47.setTransform(-30.2,-21.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8D8D89").s().p("AgDABIAGgBIACgBIgJADIABgBg");
	this.shape_48.setTransform(-24.4,-24.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0F0806").s().p("AAMAKIgYgHQAEgBgBgEIAAgBIAAgBQAAgIADAEIASARIABABg");
	this.shape_49.setTransform(-21.7,-19.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0E0805").s().p("AgFAAQAEgDADABQARACgUABIgBAAIgGACQgCAAAFgDg");
	this.shape_50.setTransform(-22.1,-21.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AAA09A").s().p("AgBAAIADAAIgCABg");
	this.shape_51.setTransform(-23,-19.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1C1713").s().p("AgBgBIAAgBIAAgBQABgCAAgDQADgEABAHIAAABQgHAGAKgEIABAAIgBABQgFABAEAGQgDgEABAHIAAABQgSgBANgKg");
	this.shape_52.setTransform(-23,-20.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D0C6BF").s().p("AAhABIABAAIAAgBIAAABgAghAAIACAAIgCAAIAAAAg");
	this.shape_53.setTransform(-26.7,-21.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0F0905").s().p("AgFAFQgFAAgCgDQgEgIAOAEIAQgMIgCALQgJADgCAHQgCAIgBAAQgCAAgBgKg");
	this.shape_54.setTransform(-22.4,-24.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#918781").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_55.setTransform(-21.7,-22.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CABEB4").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_56.setTransform(-21.3,-23.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E9DFDA").s().p("AAAAAIADAAIgFABg");
	this.shape_57.setTransform(-22.8,-28.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1A0C07").s().p("AAAgBIABgBIgBAFIAAgEg");
	this.shape_58.setTransform(-26.5,-26.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9C8D82").s().p("AAAAAIAAAAIAAAAg");
	this.shape_59.setTransform(-26.4,-32.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#756C65").s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_60.setTransform(-23,-28.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#998A85").s().p("AAKACIASgCIgMADIgGgBgAgYgBIgDgBIAIACIgFgBg");
	this.shape_61.setTransform(-30.2,-23.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B0998E").s().p("AgJAYIABAAIgBABIAAgBgAgEARIAAgCIABgBIgBAEIAAABIAAgCgAAKgYIAAAAIAAABIAAgBg");
	this.shape_62.setTransform(-28.1,-47.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E1D3CA").s().p("AAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_63.setTransform(-29.5,-48.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#615B58").s().p("AAHACIACAEIgBAAgAgIgFIABAAIgBAAg");
	this.shape_64.setTransform(-2.7,-25.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#714E42").s().p("AAAgDIAAgBIABAJg");
	this.shape_65.setTransform(-4.4,-26.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E7D5CE").s().p("AAGAMIAAAAQgGgJgCgCQgDgDgBgDIAFABIADADIAFANgAgFgLIABAAIgCACIABgCg");
	this.shape_66.setTransform(-3.1,-27.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#AF988D").s().p("AAAABIgCgDIgGgOIABAAIAQAhg");
	this.shape_67.setTransform(-1.7,-24.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9D918F").s().p("AgEACIACgBIABABgAAEAAIABgBIAAABIgBAAg");
	this.shape_68.setTransform(-9.7,-28.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#AAA39C").s().p("AARACIAAAAIAAAAIAAAAgAgQgBIAAAAIAAABIAAgBg");
	this.shape_69.setTransform(-7.5,-28.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5C534D").s().p("AgCgLIAAgDIABABIAFAcg");
	this.shape_70.setTransform(-5.7,-26.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#453A31").s().p("AgBAAIAAAAIADAAg");
	this.shape_71.setTransform(-6.6,-9.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#90847F").s().p("AAPACIACAAIgCAAIAAAAgAgPgBIAAAAIgBAAg");
	this.shape_72.setTransform(-10.1,-26.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BCB2AC").s().p("AAAAAIAAAAIABAAIgBABIAAgBg");
	this.shape_73.setTransform(-23,-28.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#8F8D85").s().p("AgbAFIA4gMIg5APg");
	this.shape_74.setTransform(-16.3,-37.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#94928D").s().p("AgnAQIBPgfIgBADIhOAcg");
	this.shape_75.setTransform(-23.1,-35.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A29990").s().p("Ag+ACIB8gEIhoAFg");
	this.shape_76.setTransform(-7.1,-38.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#978A7E").s().p("AgjADIBHgGIAAAAIAAABIhHAGIAAgBg");
	this.shape_77.setTransform(-4.1,-38.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#9A897E").s().p("AAAAAIAAAAIAAABg");
	this.shape_78.setTransform(-7.8,-37.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C0AEA7").s().p("AgMgCIAZAEIgFABg");
	this.shape_79.setTransform(-5.7,-44.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#281E16").s().p("AgJADIAAgBIATgEIAAAAIgTAFg");
	this.shape_80.setTransform(-54.4,-3.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#594B43").s().p("AAOgEIABAAIgEABIgFADIgUAFg");
	this.shape_81.setTransform(-53.9,-3.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#AD9C92").s().p("AgUAIIADgBIAAAAIgBABIAAAAIAAAAIgCAAgAAKgDIACgBIgBABgAAPgFIAFgCIABADIgGgBg");
	this.shape_82.setTransform(-53.6,-3.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8C837C").s().p("AgDAAIAHABIgDAAIgBAAIAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAg");
	this.shape_83.setTransform(-31.9,-20.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#A1928A").s().p("AAAAAIgBAAIADAAIgCAAIAAAAg");
	this.shape_84.setTransform(-46,-21.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#524840").s().p("AhNAIIAAgBIAJgBIAAABIgJABgABNgGIAAgBIABABg");
	this.shape_85.setTransform(-33.3,-19.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9B8F86").s().p("AAUAHIAEAAIgCABgAgXgHIAEAAIAAACg");
	this.shape_86.setTransform(-47.5,-22.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#261912").s().p("AgGAHIANgNIgFAGIgIAHg");
	this.shape_87.setTransform(-61.2,-22.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EFE7E2").s().p("AABAAIAAAAIgBABg");
	this.shape_88.setTransform(-38.5,-26.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#907B72").s().p("AgTAGIABgBIgDACgAAOgEIAIgCIgDABIgCABIgDAAg");
	this.shape_89.setTransform(-40.3,-25.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FDFDFC").s().p("AAAAAIABAAIgBABg");
	this.shape_90.setTransform(-38.5,-26.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#817872").s().p("AgEAEIABgBIAJgHIAAABIgKAHIgBABIABgBg");
	this.shape_91.setTransform(-41.9,-26.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E8DED8").s().p("AAAAAIACAAIACAAIgEAAIgBABIgCAAg");
	this.shape_92.setTransform(-39.6,-29.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFF33").s().p("AAYA9IACgHIABABIgBgBIAHggIAJgSIAAACIgFAKIgEAsQAAAGAEACIABAAIAAABgAjZA1IgLgBIgOgCIAAAAIgOgBIgEgBIgCgFIgBgBIgJgGQgHgFgJAAQgFAAgFgDQgFgDgEgFIgPgRQgDgCgCgDIgDgCIAFgHIADgDIAFgCIAJAFIATAIQAGACADABIABACIAAAAIgBAAIACACIADACIABACIAQAMIABABIAWAEIAEACIABABIADAAIAQgCQAHgBAHABQAbgGAZgVIAKABIAJACIACABIAGABIAFABIAIAAIAKAAIAFABIgIgCIgmgNIgBAAIgBACQgCACgCABQgHAAgFACIgFACIgLADIgHACQgMAHgNADIgJAFIgJABIgEAAIgCAAIgQgEQgKgBgJgEQgBgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCIAAgBQAAgFAGgBIAJAAQAPABAOgBQAJAAAIgEIABAAIABgBIAGgEIABgBIADgCIgBABIgIADQgYANAMgNQgKAFgMAAQgWADgbgIIgLgBQgKgCgEgIIgBgDIAAgBIAAAAQACgGAGgCIABAAIACgBIAGAAIAAAAIAHABIABAAIAEAAIAWgGIAGAFIAFABIAGACIALADQAFAAAFgCIAMgFIAEgDQAFgEAGgDIADgCQAJgFALgEIAAAAIACgBIADgBIAEgBIADAAQANAAAMAEIAFACIAIACQAHAEAHABIAMAFIACAAIAIAAIADAAIAMAAIASAAQANABANgDIAMgDIAEgBQADgBACABIADADIAAAAIAAABIAFgCIgDACIgBgCIAZgNIAgAIIACABIAIAFIgGAFQAAADgEABQgFABgOgHIgDgBIgjACIgBACIAAABQgCAEgEABIAAAAQgJAEgLACIgDAAIgDAAIgCAAIgMACIgLABQgOACgNgCIgIgCIgCgBIgDgCIgJgCIgCgCIgBAAIAAAAIgFgCIgLgDIgEgBIgNgEIgDgBIgTAAIgGADIgMAHIgKAIIgBABIgBABIABgBIAMgIQATgPAaAKIADAIIgEgBIgDAAIABAAQAwAcA4gKIAMgFIAFgCIAOgHIAcABIgPALIgJADIgCABIgFACIgDABIgGACIgBABIgRAHIgDAAIgFABIgSADIAGABIAMADIACABIAAABIAOAAIAKgCQAIgDAHAEIABADIABAEQAAADgCACIAAABIgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgaABIgDABIgJgBIgYABIgcgLIgKAAIgEACIgCAAIgDABIgIAEIgGAEIAAgBIgCABQgMAIgOAEIgFACIAAAAIgBAEQgCAEgGABIgIACIgBAAIAAABIgDACIgBAAIgIABQgOAAgLgHgAhHAaIACAAIAAAAIgCAAgAhFAaIACgBIgCAAIAAABgAiagVIACgCIAAAAIADgBIgJACIABABIADgBgAAKAmQAHgKAFAGQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBABQgCACgCAAQgDAAgEgDgAAOAPQgJgGAMgHIAAAAIACgBIAFAHIgCAFIgIACIAAAAgAAXgQIAIAAIAEAAIgDAGIgDAIgAEFgKIgCAAIgBAAIgBgCIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAAgBIABgCIACgEIAAgBQAEgEABgEQAAgDACgCIABgBIAAgBQADgJAIgFQAFgFAHgDIAAAAIACgBIAIgBIAAAAIABAAIAPAAIAAAAIABAAIAEABIAGAAIABABIAAABIAAABIAAABIAAABIgBAAIgBABIgGAAQgEAAgDgBIgKAAIgBAAIAAAAIgGAAIABACIgFAIIgCAEIAGATIAAAEIAAADIABADQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABIgCAAIgBgCIgBgBIAAAAIAAgCIAAgBIgBgEIAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAAAIAAgDIAAgBIgBgBIAAgBIgBgFIgCgEIAAgCIAAgEIACgFIgEADQgHAGgDAJQgDAJgFAGIAAABIAAABIgCABIAAACIgCADIAAABIAAACIAAAAIAAABIgBABgAFGgPIAAAAIgDAAIAAgCIgBAAIAAAAIAAgBIAAgDIABgQIAAgCIADgKIABgBIADAAIABAEIAAACIgBAFQgCAFAAAGIAAADIAAAHIAAABIgCACg");
	this.shape_93.setTransform(-23.1,-23.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8E8884").s().p("AhRAMIAFADIgDAAgAAVgEQAfAJAeADIAAABIgCACIAAAAQgdgEgegLgAgIgPIALADIgnANg");
	this.shape_94.setTransform(-39.5,-29.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#110B09").s().p("ACJAqIAEgBIADgBIABACIgBAJgACzAuQACgIgIgCIAAAAQgCgEgEAAIgDgCQACgCABgDQACgIgIgBQgKADgKAFQgFADgFAAIgEABIAAAAIgCgCQgDgagGASIgCAEIgDgPIADgHIgEAAIgBgIIAAgBIAWABIAHgIQADAAABgDIAGgGIgJgEIgBgCIgggHIgZANIgCAAIgDgCQgDgBgDABIgEABIgLACQgNADgOAAIgSgBIABgDQAfACAggJIACgBIARgFIAZgLIBBAsIAAAAQgEAFACAEIABACQgDgDgFgDQgKgDgOgBIgKAEIgCAKIgBAAIAAAAIAAAGIgCAJIACgBIAAABIAYgKQAPgBAEATIABAAIgBAPIgBAAIAAgCgAC5AMIgCgEIACABIAAAAQABADADABIgBAAIgDgBgADTgEIgBAAIABgDIABgBIACAGgAiWgIIgKgDIgHgDIgEgBIgHgEIgZAFIgCAAIgGgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQABgGAFgFIArAIIACAAIAKAFIAfgTIAngOIAAAAIAIADIALAFQAdAMAeAEIAAADIgBABIgIAAIgBAAIgMgEQgIgCgHgEIgHgCIgFgBQgNgEgNgBIgDABIgCAAIgDABIgDACIgBAAQgLADgIAGIgDABQgHADgEAFIgFACIgMAGQgEACgEAAIgCAAgADBgOIADgDIADAAIgCACIgEACg");
	this.shape_95.setTransform(-31,-25.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7E6A5E").s().p("AABAAIgBAAIAAAAIABAAg");
	this.shape_96.setTransform(-53,-27.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#94837A").s().p("AAAAAIAAAAIABABIgBgBg");
	this.shape_97.setTransform(-51.1,-23.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A39B94").s().p("AgOAHIALgEIgEACQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAgAAGgGIAJACQgIABgHADg");
	this.shape_98.setTransform(-52.5,-28.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#948B83").s().p("AgGADIAAgFIAKAAIADAAIgMAFIgBAAIAAAAg");
	this.shape_99.setTransform(-54.4,-27.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0D0703").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_100.setTransform(-54,-26.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#879496").s().p("AgGAVIANgpIgMApIgBAAg");
	this.shape_101.setTransform(-56.3,-30.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#929692").s().p("AAUgWIAAADIgnAqg");
	this.shape_102.setTransform(-53.6,-35.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#78807F").s().p("AgfAeIABgBIgBADgAAXgbIAJgEIgBABIgLAHg");
	this.shape_103.setTransform(-45.5,-46.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#88A29F").s().p("AAAgHIACAGIAAABIgBACIgCAGg");
	this.shape_104.setTransform(-48.6,-40.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#8B918A").s().p("AgQAMIAEgCIgCADIgCABgAAPgNIACAAIAAAAIgDACg");
	this.shape_105.setTransform(-50,-38.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#332B24").s().p("AgDgCIAHgCQgEAEAAAFQgCgCgBgFg");
	this.shape_106.setTransform(-9.1,-53.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A08A7C").s().p("AAPgIIACgDIABgBIADgBIAEAAIgxAbQATgNAUgJg");
	this.shape_107.setTransform(-20.5,-55.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#9EA5A1").s().p("AgRAPIgDAAIApgdIgEADQgNAJgMALIgGAEIgBAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIAAAAg");
	this.shape_108.setTransform(-25.8,-53.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#A1A39B").s().p("AAQgIIAAABIgcAPIgIADgAAQgIIAFgCIgBABIgCABIgCAAg");
	this.shape_109.setTransform(-41,-50.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#908A83").s().p("AgJADIAAAAIAAAAIACAAIgCABIAAgBgAgEAAIAAAAIAOgDIgLAEIgEABg");
	this.shape_110.setTransform(-38.4,-51.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#9A9188").s().p("AgOAAIAAAAIAdAAIgMABIgRgBg");
	this.shape_111.setTransform(35.9,27.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D8CABE").s().p("AgBAFIACgJIABAHIgBABIgBABIgBAAg");
	this.shape_112.setTransform(13,34.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#625147").s().p("AgHgCIAEACIALACIgJABg");
	this.shape_113.setTransform(16.1,34.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C5BDB5").s().p("AgCgHQACADABAEIABAIIgEgPg");
	this.shape_114.setTransform(4.8,13);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#735749").s().p("AgGAUIABgBIAEgEIABABIgDADIAAABgAABgTIABACIABAAQAEAJAAAIIgDAAQABgJgEgKg");
	this.shape_115.setTransform(11.2,17.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B39084").s().p("AgPAXIgBgBQAFgBADgDIgEAFIgBAAIgBABIgBgBgAgBAEIAQgbIACAAIgSAdIAAgCg");
	this.shape_116.setTransform(9,22.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#615A56").s().p("AgGACIACgBQAGABAFgEIgCACQgDADgEAAg");
	this.shape_117.setTransform(7.6,23.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A6A9A8").s().p("AgMgCIAMACQAEAAAEAAIAEACIABABQgNgBgMgEg");
	this.shape_118.setTransform(6.1,24.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#718080").s().p("AACANIAAAAIAAACgAgBgDIABgLIAAABIgBAIIABAFg");
	this.shape_119.setTransform(-1.3,10.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#535655").s().p("AgCgDIAAgEIADAEIABAGIABAFIgFgLg");
	this.shape_120.setTransform(0.9,16.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6F4D40").s().p("AAAAAIAAgDIAAAGIAAABIAAgEg");
	this.shape_121.setTransform(7.1,12.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CEC6C1").s().p("AABgGIAAAEIgBACIAAAHIABgNg");
	this.shape_122.setTransform(8.9,16.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B39587").s().p("AgDAnIADgEIAAABIgDAEIAAgBgAALAUIgEgBQABgIgFgJIACABIAHASIgBgBgAgLgnIAAAAIAAABIAAAAg");
	this.shape_123.setTransform(11.1,15.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#5F7474").s().p("AACAPIgEggIAFAjg");
	this.shape_124.setTransform(5.5,10.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C8C2C0").s().p("AgDgWIACACIABALIAEAgg");
	this.shape_125.setTransform(5.3,9.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B1B3B3").s().p("AAAgGIACAGIAAABQgCAGgBAAQgCAAADgNg");
	this.shape_126.setTransform(3.3,10.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#5D4D45").s().p("AgBAAIABgDIAAAOIgCABQgJAAAKgMgAAGACIgCgHIgBgBIgCgEQAGgDAAAPIgBAAg");
	this.shape_127.setTransform(2.9,10.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#79746C").s().p("AAAANIgCgGIgBgOIAAgDIAAgDIABgBIABgBIABAFIAAABQgEAXAHgPIAAgBIABAAQACASgDAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAAAg");
	this.shape_128.setTransform(3.3,10.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#877C77").s().p("AAAAlQgDgCgCgIQgCgJABgIIAAgoIAAgBQgCgJAHAFIAHAtIABACQAAAOgCAHQgCAEgDAAIAAAAgAgBAVQgBgEgDgDQAHAcgDgVg");
	this.shape_129.setTransform(5.1,10.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#999088").s().p("AAAAAIABAAIgBAAg");
	this.shape_130.setTransform(2.4,1.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#9D8379").s().p("AgLAAQAMAAALABIgDAAIgBAAg");
	this.shape_131.setTransform(1.9,-0.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#565855").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_132.setTransform(18.7,7.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#9B9691").s().p("AgBgBIACAAIABACIAAABg");
	this.shape_133.setTransform(37.1,13.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#A9A2A0").s().p("AgOABIAdgDIgBACIgXADg");
	this.shape_134.setTransform(22.2,16);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#858885").s().p("AAHgCIgEACIgGACIgDAAg");
	this.shape_135.setTransform(33.8,12.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#82817E").s().p("AgaAIIA2gRIgBACIAAAAIgQAFIgmAMg");
	this.shape_136.setTransform(26.4,14.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#8C8077").s().p("AgBAAIABAAIACAAIgCABIgBgBg");
	this.shape_137.setTransform(21.6,12.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#7B5849").s().p("AAAABIAAgBIAAABg");
	this.shape_138.setTransform(22.3,6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B2A29A").s().p("AgfANIACAAIAEADgAAggPIAAAAIAAAAg");
	this.shape_139.setTransform(19.1,7.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6F6A61").s().p("AAAgCIABAAIgBAFIAAgFg");
	this.shape_140.setTransform(30.2,5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#695750").s().p("AAbgJIgCAEIgpAMIgKACg");
	this.shape_141.setTransform(37.8,9.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#9D8E86").s().p("AgbAGIAugLIAKgDIg5ARg");
	this.shape_142.setTransform(33.2,10.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#BEB4B0").s().p("AgZA8IgBgCIgBgBIgBgJIADgDQAHgHAJgDIAqgRQAJgBABAHQACAGgGADIgLAFQgUAHgTAJIgDACIgJAEIgCAAgAgdAoIgDgQIAAgCIAAAAIADgEIABgBQAHgGAJgDIAagJQAHgDAHgBIAEgCQAFgCAEAEIABAFIABAEIgBABQgCACgEABQgSAFgRAGIgBABIgEACIgOAHQgCABgBADQgBAHgFAAIgBAAIgBAAgAgkAEQgBgEgEAAIAAgBIgBgCIABgEIABgCQABgDAEgDIASgKQAOgHANgEIAHgDQAGgBAEAEIABABQABAAABAAQAAAAABAAQABAAAAABQABAAAAAAIAAAAIADAHIAAABIgBADIgBAEQgBAEgEACIgeAJIgHACIgFACIgHAAIgLADIgEABIgBAAgAgrggIAAgBIAAgBQAAgGAHgCIAIgDQATgJARgFIALABIADACQADAIgHADIgFABQgTAFgUAKIgFADIgBAAIgEABQgFAAgCgHg");
	this.shape_143.setTransform(33.1,0.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#756154").s().p("AAaAKIABAAIgDAAIACAAgAgCAHIABAAIAAAAIgBAAgAgWgEIgDgBIAAgDIADgBIAFABIgBAEIABAEIgFgEg");
	this.shape_144.setTransform(42.2,13.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#584D46").s().p("AgCgCIAFAAIgEADIgBACIAAgFg");
	this.shape_145.setTransform(50.3,19.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#BEABA0").s().p("AgDABIADgCIAEABIgHACg");
	this.shape_146.setTransform(45.2,14.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#B0A39D").s().p("AAqAZIABgDIABgFIAAAJgAgrgZIAEABIACACQAFAEAHAAIADABIAFACQgRgBgJgJg");
	this.shape_147.setTransform(43.3,18);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#828887").s().p("AgXAKIAvgTIgrATg");
	this.shape_148.setTransform(42.8,6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#9C8980").s().p("Ag0ASIBagjIAQgEIhrArg");
	this.shape_149.setTransform(45.8,6.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#695A53").s().p("AABABIgEgCIAHADg");
	this.shape_150.setTransform(38.9,15.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FAF8F5").s().p("AASATQAHgHgBgPIgCgBIgEgBIgCABIgCABIgCADQgCAEgBAGIgCACQgQgDgPgIIgFADIgFgBIAKgEQALgEANgEQAQgDARgGIACgBIgGAbIgDAJIgBACIgCABg");
	this.shape_151.setTransform(43.4,12.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#949896").s().p("AACgNIABAAQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAAGgCADIAAAFIgCAHIAAACg");
	this.shape_152.setTransform(46.6,11.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#B6ABA7").s().p("AAAAAIAAAAIAAAAg");
	this.shape_153.setTransform(49.7,1.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#959189").s().p("AADAPIABABIgBADgAgDgRIAAgBIAAACg");
	this.shape_154.setTransform(54.7,6.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#999999").s().p("AjBBFIgHgSQALADALgDIBagbIAugNIABgBIAAgDIAcgDIgBADIA5gQIArgNIBsgrIAHgFQAAAEgCAFIAAABIgFAFQgHAHgIAGIgIAGIgGACIgCABIgGACQgOAGgPAFIgPAEIgMADIgMAEIgDABIgNAFIgVAGIgDABIgTAHIgDABIgOAFIgGABQgIABgIADIgHADQgFACgEADIg3ASIgeAEIgGgCIgIADIgFgCQgcANgfAHIgFgCg");
	this.shape_155.setTransform(31.8,10.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#6F6158").s().p("AgOAHQAZgTAFAIQgDgBgGAEIAAABIgHAEIgPADQAAgBABABg");
	this.shape_156.setTransform(51.2,3.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#848986").s().p("AgDgBIAAgBQAGgEACABIABAAIgHAJIgCACIgCABQACgFAAgDg");
	this.shape_157.setTransform(52.3,4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#A67D6D").s().p("AAOAmIgchLIAIANIAVA+IgBAAg");
	this.shape_158.setTransform(53.4,-3.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#828786").s().p("AAAABIABgBIAAAAIAAABIgBAAIAAAAg");
	this.shape_159.setTransform(48.7,-0.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFF00").s().p("AiQBKIgHAAIgBgBIgCAAIAAgBIgDgCQgFgGgBgHIAAgDQAAgHgBgHQgDgMAHgIIAFgEIAGgEIADgCQARgCAIAOIADAGQAHAPgEAQIgBADQgHAKgLACIgBAAIgDAAIgBAAIAAABIgEAAIgBgBgACTgHQgEABgFgCQgGgCgFgGQgHgKgCgMQgDgNADgNIABgCQAFgFAGgCIABAAIABgBQAJgBAHAGIAEAGQAIAJADAMIABACIACARIAAADIAAABQAAAEgCADIgCADIgBABIgCADIgMgCg");
	this.shape_160.setTransform(32.7,0.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#0E0907").s().p("AgGApIAJACIgDABIgGgDgAAMApIACgEQAKgDgDgLQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQgFgDgDACQACgDAAgFIAAgBIAAgDIgCgPQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABgBQAGgDgDgIIgCgHQAPAZgKAoIgIAEgAAHAXIABgCIgBACgAgXgqIABgBIABABIgCAAIAAAAIAAAAg");
	this.shape_161.setTransform(48.1,-2.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#775448").s().p("AAAgBIAAABIABACg");
	this.shape_162.setTransform(49.3,-11.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#B99A8C").s().p("AAEAGIgHgIIAAgDIAHALg");
	this.shape_163.setTransform(48.8,-12.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#99857C").s().p("AgUgHIgVgKIBTAgIAAADg");
	this.shape_164.setTransform(44.2,-14.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#6B5E56").s().p("AAAgHIABgDIABAQIAAADIgCACQACgJgCgJg");
	this.shape_165.setTransform(56.6,-28.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#595443").s().p("AgCADIgBgBIADgEIAEgCIgBABIgBADIgCAFIgCgCg");
	this.shape_166.setTransform(43.9,-40.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#61534C").s().p("AgCABIACgBIACAAIABABIgFAAg");
	this.shape_167.setTransform(50.5,-39.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#6B5E54").s().p("AgBAAIAAAAIAAgBIAEABIgBACIgDgCg");
	this.shape_168.setTransform(52.1,-38.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#6E6663").s().p("AAAAAIAGgBQgGADgFAAIAFgCg");
	this.shape_169.setTransform(32.2,0.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#71706E").s().p("AAHADIgBgBQgEgDgFABIgIACIABgCQAEgDAFAAQAEgBADADQAEABACAEQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape_170.setTransform(35.2,-3.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#CEC7C0").s().p("AAAAFIAAgCIAAACgAAAgDIAAAAIABgBIgBADg");
	this.shape_171.setTransform(28.9,0.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#6B716E").s().p("AAAAAIAAAAIAAAAg");
	this.shape_172.setTransform(28.9,-0.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#646057").s().p("AAEADQgJACAAgHQABAHAJgDIABAAIgCABg");
	this.shape_173.setTransform(29.3,-2.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#6C5952").s().p("AAXgHIAAABIgsAOg");
	this.shape_174.setTransform(26.4,-15.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#94857E").s().p("AAHAFIACADIgBACIgBgFgAgIgJIAAAAIAAAAg");
	this.shape_175.setTransform(21.1,-20.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#9F7E6B").s().p("AAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_176.setTransform(28.6,-16);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#6E8082").s().p("AgCAXIAEgEIABAEgAgCgQIAAgBIAAgEIAAgCIACAAIAAAKIgCgDg");
	this.shape_177.setTransform(26.2,-19.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#81837F").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_178.setTransform(35.6,-15.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#868C88").s().p("AG7A6IABgBIAEADIgBABIgEgDgAm/g8IABAAIABATIgCABg");
	this.shape_179.setTransform(-12.3,-22.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#656260").s().p("AAAAAIAAAAIAAAAg");
	this.shape_180.setTransform(-5.9,10.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#140E0B").s().p("AjNDGQgIgBgGgEIAAgBIgBgBIgBgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgHAGgCIADgBIADAAIAEABIABAAIAGACQAegHAcgNIAFACIAIgDIAGACIAFACIAYgEIAngNIAQgFIAAAAIABgCQAEgEAFgBIAHgDQAIgDAJgBIAFgBIADgBIAHgCIAFgCIACgBIATgHIADgBIAVgHIANgFIADgBIAMgEIAMgDIAPgEQAPgFAOgGIAGgCIACgBIAGgCIAIgGQAIgGAHgHIAFgFIAAgBIACgBIACgCIAIgKIgBAAQgFgIgaAUQgBgBAAABIhbAkIg2ATIguAMIgbADIgBADIgBABIguANIhaAbQgLADgLgDIgCAAIgBgBIgBgCIAAAAIAFACQADAAACgDIABgCQACACADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIgBgDQAqgKArgNIAAgBIADAAIgCAAIAIgCIAcgKIAEgBIAFABICSgpIAsgTIABAAIABAAIAPgCQAWgEARgQQAXgWAAgdIAAgFIgKgRIAAABIgFgQQgGgOgOgCIgCAAIgBAAIAAABIhFg2IhEgcIAAgBQgSAAgMgJIgDgCIAEgCIABgCIAAgDIgBgCIgBgBIgMgCQgBgEAAgEIgDgIIAFAAIAFAAIAJAAIAdAbIBAATIA+AbIAIAIIACAEIABABIABABIALARIAMAUIAeBMIABAAQAEACABAHQAAAFgCAFIgCAEQgCAKgFAJIgBABIgBABQgEAHgFAFIgBAAIgSARQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgHAHgIADIgGADIAAgBIgBAAIgBgCQgEgBgFABQgEABgCAFIAAACIgDACIAAAAIgBABIgDABQgQAGgSADQgMADgLAFIgKAEIgEACIABACQgDgCgFABIgDACQgEgBgEACQgEACAAAFIgEAAIgBgCIgBAAIgFACQgLAFgLADIgCAAIgIADIgDACQgFADgHACQgOAEgNAFIgZAJIgMAFQgJACgKABIgKACIgHACIgIACIgbAFIgaAGQgKACgJAAIgJAAgAB6h7QAzAjgUgWIAAgBQgBgEgFgBIgkgRIALAKgAAzA5IABgBIABAAIABAIQgBgEgCgDgAgLA8QATgJAUgIIALgFQAGgDgCgFQgBgIgJACIgqARQgJADgHAGIgDAEIAAgCIABgGQAFgBABgHQABgCACgCIAOgHIAEgBIABgBQARgHASgEQAEgBACgDIABAAIABAMIABAJIAAABQgBAFADAEIgCAAQgPACgOAHIgFACQgNAEgMAGIADgCgAghAXIgDgIIAAgBIAAgFIAFAAIALgDIAHgBQAEgBAIgDIAegJQAEgBABgEIABgEIABgEQAEAKABALQgEgDgFACIgEABQgHAAgHADIgaAKQgJAEgHAGIgBABIgDADIgBgEgAgvgGQAAgHABgHIABgBIABgLQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAQgNAUgGIADAAQAIgBAGgDIADgBIAJAFIAFAEIgBABQgCAGADAGIADAHIABADIAAAAQgCgEgDgCQgEgDgFAAQgFABgDAEIgBABQgNAEgOAIIgSAKQgEACgBAEIgBAAIAAgBIAAABIAAACIgBACIABACIAAACIgFgBIgBABIAAgLgAghgTIACgCIAFgCQAUgKATgFIAFgCQAHgDgDgHIgDgCIgLgCQgRAGgTAIIgIADQgHADAAAGIAAABIAAABQAAAIAKgCgAC5gMIABABIAAAEg");
	this.shape_181.setTransform(33.1,0.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#574D43").s().p("AgBABIABgBIACABg");
	this.shape_182.setTransform(31.1,-19.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#A9A09B").s().p("AAAgCIABAEIAAABIgBgFg");
	this.shape_183.setTransform(31.7,-21.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#17100D").s().p("AgEAiQAEACAIgBIAGgBIACgBIgDACQgEABgEAAQgFAAgEgCgAgNAeIAAgCIAGAFIgGgDgAgBATIgBgCIABAAIABABIAGAAIABABIgCAAIgGAAgAAMASIADAAIABAAIgEABgAgNgDIgCgIIABgDIAAgBIgBgFQAAgIADgGIADgBQgGAIACAMQACAHgBAHIABACIgCgEg");
	this.shape_184.setTransform(17.6,5.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#261E17").s().p("AAIABIAAAAIAEAAgAgLABIACgBIAHAAIACABg");
	this.shape_185.setTransform(9.9,-14.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#767371").s().p("AgIABIAXgFIABAAIADAAIglAJg");
	this.shape_186.setTransform(5.5,-13.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#BBA59F").s().p("AgBAPIARgBIgKADgAgMANIgDgdIAHAeg");
	this.shape_187.setTransform(2.9,-14.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#160F0C").s().p("AARBqIgFgeIgCAAIgNgEQgJgEgGAKIg4gLIgDgGIAiAHIgUgaIACAAQAEAAADgCIABABIABAHIABACIAKAHIAEAFIAGAAQALAFANgBIACgBQAFgHgGgHIAAAAQAKgVgWgyIgBgDIAAgFQAAgIgIgBIgBAAIAAgBIgEgJIgBgCIgFgTIgGgeIADABIAAgBIABgBIAAgBIgBgCIgBAAIAGgEIABAAQADABAAADIgBAHQAAAEADACIACAJIAFAcIAEAJIAeBxIABADQASgYgKgcIgSgwIAKAEIALAkIAHAnIAEABIABACIAHgBIAIACIAmgJIg1AXIgBABIAAADIgDAFQgJAbAYgLIAHgDIAigMQALgDAKADQABAAAAABQAAAAAAAAQgBAAAAABQgBAAgBABIhXAXIgCABgAhbABIAAgDIAAgDIADgBIAAAAIAggRQAUgFgSgDIgFABIgjACIgOgFIAngIIAEgBQAFACAGgBIABABQAHACAEAGQACAEgBAFIgCAFIgBABQgFACgBAFIgBAIIgFgDIgBABIAAgBIgiAGg");
	this.shape_188.setTransform(-1.4,-18.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#C09B8C").s().p("AAFAXIgJglIgEgMIARA0g");
	this.shape_189.setTransform(0.4,-19.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#7F554A").s().p("AgDgSIADADIABAFIADAdg");
	this.shape_190.setTransform(1.3,-15.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#868E8E").s().p("AACAUQAWgQgggPQgEgCgDgDIAAgDQAFAGAGACQAUAIAAAIIgDAEIgFAGIgDAEIAAAAIAAAAIgBABIAAAAIgCAAg");
	this.shape_191.setTransform(9.3,-17.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#5C534B").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_192.setTransform(2,-11.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#6B5B50").s().p("AAWgEIgfAIIgBAAIgLABg");
	this.shape_193.setTransform(21.2,-13.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#B29F97").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_194.setTransform(20.2,-13.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#AD9C94").s().p("AAAAAIAAAAIAAAAg");
	this.shape_195.setTransform(20.2,-13.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#F4F0ED").s().p("AAAAAIABAAIgBAAg");
	this.shape_196.setTransform(16.6,-13.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#A8A7A3").s().p("AAVgIIgEADIglAOg");
	this.shape_197.setTransform(11.1,-12.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#706868").s().p("AAAAAIAAAAIAAAAg");
	this.shape_198.setTransform(9.6,-15.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#A8A29F").s().p("AgnAMQALAAAHgHQAHgFABgKIAAAEIAAAAQgCAGABAEIAAACIgFABIgDABIgNAEgAAAABIAEgHIACgDQAMADANgEIAEgBQgDAGAGgDIACAAIgoAKIAAgBg");
	this.shape_199.setTransform(11,-14.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#E3D8D2").s().p("AACABIgDAAIgFgBQAEgBADAAIAEABQABAAABAAQAAABAAAAQABAAgBAAQAAAAAAAAIgBABIgEgBg");
	this.shape_200.setTransform(14.8,-17.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#85827D").s().p("AAAAAIAAAAIAAAAg");
	this.shape_201.setTransform(11.4,-22.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#A08A81").s().p("AgKANIAAAAIAIgYIgGASIALADIgEAAIgHADIgCAAgAALAMIgBgBIABABg");
	this.shape_202.setTransform(19.1,-22.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#6D5F56").s().p("AAAACIAAgCIAAAAIABAAIgBACgAABgBIAAAAIAAAAg");
	this.shape_203.setTransform(9.7,-15.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#B5A9A1").s().p("Ag3AMIAHAAIgDACIAGgBIAAAAIAEAAIACABIgLACIgCAAIgDAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBABgBgAgPAHIAGgCIABADIgLACIAEgDgAAMADIAtgFIgwAHIADgCgAg2gDIAFAAIgFABIgCAAgAghgPIABAAIAAAAg");
	this.shape_204.setTransform(20.1,-17.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#958681").s().p("AAAAAIADAAIABAAIgHABIADgBg");
	this.shape_205.setTransform(19.2,-19.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#989087").s().p("AArACIhggCIAAgBIBrADg");
	this.shape_206.setTransform(4.9,-38.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#0E0A08").s().p("AgTAKIAAAAIAAgIIADgBIANgEIAEACQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIACgDIAKgEIADALIgfAKIgIgBg");
	this.shape_207.setTransform(17.1,-24.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F5EEEB").s().p("AAAAAIAAAAIABAAg");
	this.shape_208.setTransform(10.7,-27.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#221819").s().p("AAAABIAAgBIABACIgBgBg");
	this.shape_209.setTransform(12.4,-28.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#180F0D").s().p("AgCAFIgIgBQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIgBAAIgDgNQAHAHAKgBQAEACAGgBIACgBQAQAEgOAFg");
	this.shape_210.setTransform(16,-27);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#21150D").s().p("AgVgDIAVAAIAWADIgWAEg");
	this.shape_211.setTransform(13.7,-33.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFCC99").s().p("Ah7BZIglgVIgBAAIAAABQgCACgCAAQgDAAgCgCQgLgJAKgDIAJgBIgFgEIgFgEIgBABQgEgDgFAAIgCAAQgEgBABgHIADgqIAFgLIAEAGQgFADADAGQAAAAAAAAQAAABABAAQAAAAABAAQAAABAAAAIAIABIAFAAIAGAIIABgJQACAHAFAFQADADADACQAGACAIgCQAEgCABgEIACgEIACAAIAAgOIgBgBQgEgSgPABIgYAJIAAAAIAAgIIAAgGIABAAIABAAIABgKIAKgFQAOAAALAFQAEADADACIACADIABAEIADABIABAAIACAAQABAFADAEQAEAIAJAAIAFgBQAGgCgCgHIAAAAIAJAKIAAACIgnAHIAOAEIAjgCIAFAAQASACgUAFIggARIAAAAIAAABIgDAAIAAAEIAAADIAAABIAAAAIAigIIAAABIgBAAQgDABgBADQgBAFACAEIABABIgBAAIABAAIABACIAAAEIgCAHQgDgDgGADIgEACIgHADIgJAAIgGgBQgGgBgGgEQgEgDgGgBQgFAAgCAFIAAABIgCgBIAAABIACACIAAABQADAGAHACIABABIACABIABAAQAGADAGABQALAEALgDIAGAAQACAEgBAEIgFAHIgDADIgUAGgACmAhIAHgDIADgBIABABIgDANIgFAAIgEgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAIgFgBQgDAAgFABIAFABIgCACIgJABQAKgGAMgFgACBAeIgBAAQgLAAgJgKIgHgGQgQgMABgSQAAgEACgCIgBglQAAgHAFgFQAEgFAHAAIgEAMIABAVIAAAEIABAAIAAABIAAAGIABAGIADgLIAAAAIABgCIAAgBIAAgHIADgNIABgFIABgFIABgBIAAgBIAGgWIADAAIAAAAIADgBIAKAAQACgCAEgBQAWgCAKAUIAEAJQAFAFAAAEQgEgGgKABQgEAAgCAEQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQADAEAEACQgLAAgHgHIAEAOIAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAIABIAQADIAAABQAHADgDAGIgCADQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgEgBIgNAFIgDgBIgBAJIAAAAIAIABQALAEADALQABAEgDADQgEADgDABIAAABIAAAAIgCABIghgNIgOgJIABABIAhAcIgCABIgPAGIgKAGgAB7gIIABgBIgBAAgAB6g7QgCACAAADQgCALAKADQAMAEABgMQABgKgIgDIgBgDIgBACIgFAAQgDAAgCADgABZgsIAAgBIAAAAIAAABgAB0g6IABABIgBgBg");
	this.shape_212.setTransform(-0.9,-21.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C3BBB6").s().p("AAAgDIAAABIAAAGg");
	this.shape_213.setTransform(15.1,-23.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#BBADA6").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_214.setTransform(11.4,-33.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#8C7F76").s().p("AAAAAIAAAAIAAAAg");
	this.shape_215.setTransform(19.7,-31.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#9C9088").s().p("AATABIgMAAIgcgBIAAAAIArABg");
	this.shape_216.setTransform(17.4,-33.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#1F130D").s().p("AAGAGIgEgBQgIgCgNgIIAPgBIALAAQACAFAGAAIABAAIAEAFQgEADgFAAIgFgBg");
	this.shape_217.setTransform(18.6,-32.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#9D8B81").s().p("AgBAAIADAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_218.setTransform(17.2,-31.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#6E564E").s().p("AgEAQIAAgGIAAAAIAAAAIABABIADAAIAAAAIgDALgAABgBQAAgFACgFIgCAMIAAgCgAAEgSIABgDIgBAFIAAgCg");
	this.shape_219.setTransform(9.7,-26.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#CCCAC4").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_220.setTransform(7.9,-26.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#879B9B").s().p("AAFAaIABAAIAAACgAgFgaIABgBIAAABg");
	this.shape_221.setTransform(7.2,-22.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#68706A").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_222.setTransform(6.7,-25.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#607273").s().p("AAAgCIAAAAIAAAFg");
	this.shape_223.setTransform(9.1,-25.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#5D473E").s().p("AAAABIABgCIgBACg");
	this.shape_224.setTransform(3.9,-26.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FAF8F6").s().p("AAAAAIABgBIAAABIgBACg");
	this.shape_225.setTransform(3.9,-26.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#6F716E").s().p("AAAAAIABAAIgBAAg");
	this.shape_226.setTransform(2.7,-25);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#AF9B92").s().p("AgVAFIAsgMIgGADIgnAMg");
	this.shape_227.setTransform(-0.7,-30);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#9D9690").s().p("AgsAIIBYgPIABAAIAAABIhWAOg");
	this.shape_228.setTransform(7,-32.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#8A8682").s().p("AAAAAIABAAIgBAAg");
	this.shape_229.setTransform(2.6,-32);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#160F0D").s().p("AgdE4IAHAAIAFABIgCABIgCAAIgIgCgAgYEvIAAgCIAIgBIAGgBIgCACQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgDABIgEgBgAgBElQAEgEADgHIAGgMIAEgLIACgHQADgMAAgNIACACIABABQAEAKgBAKIgDAAQgGACAAAHQAAABAAABQAAAAAAABQAAAAABABQAAAAABABIABABIgFAEIAAABIgQAcQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAgBgAguEjIgCgBIALADIAAAAIAAABIgJgDgAgiD/IABAAIADgBIAAABIAAABIgCACIgCgDgAgvDtIgOgUIgBACIgJgQIAAghIABgCQAAgZAMgWIACgBQgDACgBAEIABADQACAFAGgDIAAAAIABACQACAGAGABQAEABADACIADABIACABQADAEAAAGQACAOgBAPIAAAEIgBAdIgBAIQgDAHAAAIIgCACIAAACIAAABIgDABIgBAAQgEgGgGgDgAgtCVIAAABIAAApQAAAIACAJQACAIACACQADACADgGQADgHAAgOIgGgjIgBgLIgCgCIgEgBQgDAAABAFgAg4DCQAIAMgDgbQgBgQgFADIgBAAIgBACIAAADIAAACIgCAEQgLAOAOgDIACAGgAAKDrIgBgOIABgFIACAHIAAADIAAAKIgBACgAhSDpIAAgFIABABIABACIACAFgAhZDBIgBgIIgBgJIAAgDIAAgGIAAgCIACAJIAAABIAAACIABAEIACAXIgDgLgAgSDEIABgNIAAAOIgBADIAAgEgAAEC+IgBgNIgBgCIAEAHIABAGIADADIAAABIgBAAIAAACQgBgDgEgBgAhZCPIABgBIAAABIgBACIAAAHIgBABIABgKgAgMB4IgCgEIgJgNIAAgBIgDgEIAOANIABACIACAIIABADIAAACIgEgGgAgiBbIgCgCIgCgBIgBAAIgBgDIAEADIAGAGIgEgDgAhCBVIABgCIABgBIAKgBIAEAAIAFACIAAAAIgIAAIgIACIgCAAIgCAAIAAABIgEABIADgCgAFKg4IhAgbIABgBIBEAcIBFA2IgBABgAENhgIAeAEIAMAFIAVAKgADrhcIABgBQANAJARAAIAAABQgRAAgOgJgAAAh2QgGgCgFgFIAAAAIgHgjIgEgQQgHATgDgUIAAgGIgBgYIgPAOIgBABIAAACIABAAIgCALIAAAPIgDAAIgBAAQgVACAGgSIAEgKIAQgpQgbARAAgQQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAgBIAGgCIgtANIgSAJQAAgDgDgBIAAAAIgBAAIgGADIAAAAIACACIgBACIAAABIgBABIgCgBIgBgBIgDgBIgEgDIgBgBIgCgCIgGgDQgFgDgFAAIgCgCIgKgEQgGgDgJgCQgHgBgHgFIgWgDIgQgCIgLgCIgBgBIAAAAQgQgDgOgBQgEADgEAAIAAABQgEADgHACIgEACIAAADIgDAFIAAAIQAAADgCADIAAAAIAAAAIASgEIgSAFIgBABQggAJgggCIAAADIgLAAIgEAAIABgBIAAgDIAAgBIABgBIABgBIAAgBQgBgJACgIQACgDADgCQAEgIAIgHIABgBIABAAIADgBIABgCIABgCQAHgFAIgBIABABIAAAAIBOgeIA7gQIAUACIBpgHIABAAIADABIAAAAIAAAAIhIAGIgBAAIh5AZIgEAFQgWANgQAHIAZABIAGgCIAFACIAMABIASABIABABIAAABIAOACIAaADIAKACIACABQAFAEAFAAQAIABAGADIAOAHIAHACIAJAEIACADIADgCIABAAIBWgZIABABIACgBIBWgQIABAAIAWAIIAWgEIgVgEIANAAIAeABIgPABQANAJAJACIAEABQAIACAGgEIgEgGIAWASIAAABQgOAEAlAWIAAAAIAHAPQgKgPABAWIAAACIAQAmIgCAAIgDgIIgTgkIgFgKIgCgCIgBgEIgLgNIgagLIgRgEIgFgBIAAACQgDAEAGAKIABABIAIAYQARALgFASQgCAGgFABIgHAZIAAAAIACAAIgCABIgfALIgCABIACgBIgigdIgBgBIAPAKIAgANIADgBIAAAAIgBgBQAEgBADgDQAEgDgBgEQgDgMgLgEIAhgKIgEgMIgKAEQADgGgHgDIAAgBQANgFgPgFQACgDgBgEIgBgCQAAgEgFgFIgEgJQgKgUgWACQgEABgCACIgKAAIgDABIgBAAIgFAAIADAAIgHAWIABABIgBABIgBADIgCgFIgDAAIgBABIgDAKIAAADIgBAPIgCgVIAFgMQgGAAgFAFQgFAFAAAHIABAlQgBADAAADQgBATAPAMIAHAGQAJAKALAAIAAAAIACADQgGAFgGAGQAAgJgUgJgAgmjhQgHAGgEAIIAAABIAAABQgCACgBADQgBAFgEADIAAABIgBAEIgCACIAAABQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAAGIACABIAAABIADAAIAAAAIABgCIAAgBIAAAAIAAgCIAAgBIACgDIAAgBIACgCIAAgBIAAgBQAFgGADgIQADgKAIgGIADgCIgBAEIAAAEIAAADIABADIABAGIAAABIABAAIAAABIAAADIAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAAAIABAEIAAABIAAACIAAABIACABIAAABIADAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBIgBgDIAAgDIAAgDIgGgUIADgEIAEgIIgBgBIAGAAIABAAIABgBIAKAAQACACAEgBIAFAAIABAAIABgBIAAAAIABgCIAAgBIgBgBIgBgBIgFAAIgFgBIAAAAIAAAAIgPAAIAAAAIgBAAIgHABIgCABIgBAAQgHADgFAFgAg+iwIAAAAIABgBIgBABgAgWiyIABAAIAAgBIAAAAgAlsjzIgKAEQgIAHgFAKIgBACIAAAIQAgABAggHIgCAAQgCgEABgEIAAgKIADgEIACgFQAEgDAFgBIgDgCQgZABgXAHgAiSjVIAAAAIAAgBIAAAAgABsjwIAAAAIAAgBgAlgj+IAAAAIAAgBIAAABgAACi3IAAgBIABABIAAAAg");
	this.shape_230.setTransform(8.9,-7.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#746A5F").s().p("AgeAAIAwAAIABAAIAMABg");
	this.shape_231.setTransform(11,-39.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#A09890").s().p("AgEAAIAKAAIAAAAg");
	this.shape_232.setTransform(9.7,-38.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#6A5F55").s().p("AgCAAIACgCIAJAAIgRAFIAGgDg");
	this.shape_233.setTransform(44.7,-37.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#1D130E").s().p("AgcA8IBLgRIgQgBIAjgOIgaAFIARgIIgBgEIACgCIABgDQADgPgIgMIgBgKIgQgmIAAgBQgBgXAKAQIAHAVIASAwIAFAaIgBAAIAAACIgBABIAAACQgBADABADIABABIADAAIAAABIgtAQIgGABIgsAKIg8AGg");
	this.shape_234.setTransform(20.8,-20.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#CCCCCC").s().p("Ag9BkIgIgDIgBgBIgBgBIgKgHIgBgCIgBgIIgBgBIABAAIAAgFQACgLADgKIAAgDQgDgHAAgGIABgIQABgFAEgCIACgBIACgFQABgFgDgEQgDgFgIgCIgBgBQgFABgFgCIgEABIgBgCIgJgKIABgBIAAgGQgBgIgJAAIgBgBIAEgJIABABIACABIgBgGIABgDQABgHgIgCIgIAEIgDgBIgCAEIgBAAIgGAFIg/gpIgGAAIgYALIgSAEIAAAAQACgCgBgDIAAgIIADgFIABgDIAEgCQAGgCAFgDIAAgBQAEgBAEgDQAOABAPADIABABIABABIALABIAQADIAWADQAHAEAHACQAIABAHAEIAJAEIACABQAGABAFACIAGAEIACABIABACIAEACIADACIgBADIAHAaIAFAUIABACIAEAJIABAAIABAAQAIABgBAIIABAFIAAADIABAAQAXAzgLAVIAAAAQAHAHgHAHIgBABIgGAAQgKAAgIgEgAg7BJIABAAIAAgBIgBABgAhlgtIACAAIgCAAIAAAAgAh1hBIADAAIgBgBgAhshEIABAAIAAgBIAAAAgAAEBbIgGgfIgBgFIgSg1IgCgJIgRgiIgEgOIgFgEIgEgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBIABgBIAHgFIAogNQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQABAQAagRIgQApIgFAJQgEASAUgBIABAAIACAAIAAgQIACgLIABgDIAAAAIAOgNIABAYIABAGQADATAGgSIAFAQIAHAhIAAADQADADAEACQAhAQgWAQIAAAAQAAAJgHAHQgIAGgKABIgBAAIgYAGIgRABIgIABgACwAxIgBAFIgGABIAHgGgADJAxIgBgBIAAgBIAAgBIABgCQAQgZgegIIgBgBIAAAAIgBAAIgGgBQgFgCgFgEIAPgYIgUg9QAjAIAVAcIABABIASAkIACAEIACAIIAAABIAIAgIgBADIgvAKIgCAAgACWAvIADgPIAbgHIACACIgCABIgPAKQgHAEgEAGIgEgBg");
	this.shape_235.setTransform(1.6,-22.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#879190").s().p("AALAWIgBgEIAEAIIAAACgAgIgSIgFgIIAFAJIAAgBg");
	this.shape_236.setTransform(24.6,-24.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#E4DBD5").s().p("Ag4BKIADABIgFABgAAIA8IAAAAIAAABIABABIACAAIAvgKIgCACIgFAFIgCAAIgtAGIAEgFgAgqA8IACgNIAAgBIAUgHIAJgBIAAABIgbAHIgDAOIgBAAgAAKA3QACgGgBgFIAAgCIgCgDIgDgDIAAgBQgEgHgGgDQAcAIgPAZIABgDgAAzASIACADQAIAOgDAPgAgNAWIgMgCIAFgUQAFAAACgGQAFgSgSgLIgIgYIAAgBQgGgLADgDQABAAAAAAQAAAAABgBQABAAAAAAQABAAAAAAIARAEIAZALIALANIACAEIACACIAEAJQgVgcgigIIAUA8IgPAYQAFAEAFACIgBAAIAAAAgAAxAIIACAFIAAAEIgCgJg");
	this.shape_237.setTransform(20.8,-23.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#B1897B").s().p("AAGATIgGgVIgHgPIAAgBIgEgHIAAgCIAXA3g");
	this.shape_238.setTransform(25.5,-26.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FF0000").s().p("ABBEFQgEgIgHgGIgCgIIgBgFIgEgLIgDgJIAAgCQgBgEgDgDQgBgGgCgGIgFgLIgEgOQgCgKgGgJQgEgJgIgFIgKgJQgMgJgQABQgLgCgMAAIgIAIIgCADIAAABIgGAKIABAHIgEAmIgDAXIgBALIABADIAAACIABAFQAAAEACACIABACIAAAEIAAADIAAABQgSgMgUgHIgCAAIgCgBIgcgVIgogUIgcgFIgIgIIgngLIgEgCIgCgCQgGgFgBgIIgagqIgCgDIgzhZIgngYQgHAAgFAKQgDAFgBAFIgBAMIgBABIgDARIAAASIgBAFIgBAdIAAAEIACALIAAAJIgFgEIgfgmIgSgjIgBgHIgBgGIgEgkQAAgEADgCQACgDAEAAIAtACIAGgOIABgNIAAgCQACgKADgIIABgCQAHgOALAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAABAAIABAAIBLAXIAFgNQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAIACACIgCAEIAAABIAFAOIAZAPIARAjIABADIABAAIAhAWIgTgRQgCgKAZANIABAAQAhAKgkgEIgEADIADAEIBSAGIADABIgDgBIgOgQIAoAKIAMgHIAZAAIADAAIAEAeIAAABIACgBIAygGIACAAIA7gYIBUgZIABgBIBVgUIABgHQAQgDAQgFIAEADQAOAJASAAIBAAcIBIA1IABgBIAAAAIABAAIACAAQAOACAGAOIAFAQIAAgBIAKARIAAAFQAAAegXAWQgRAQgWAEIgPACIgBAAIgBAAIgwATIAEAAIiTAoIgFAAIgEABIgcAJIgIADIgCgBIABABQgrAOgrAKIgCgFgABpDTIADACQALAEAIgEIADgBQALgCAJgGQAKgGABgMIABgGIAAAAIAAgCIAAgRQgBgHgEgGQAAgFgCgEQgGgKgIgJIgCgDQgOgIgRACIgEABQgJACgHAHQgFAFAAAHIAAABQgDAJAAAKIACAFIABAFQAAAJADAIQAEAOAJAMIABAAIAAACIgDAAIAHAEIgEgEIAFADgAEMAtIgCACIgFACIgQAFQgPAFgMAKQgIAHgBAJIgBAIQgDATABAUIABAUIAAADIABALQAAADACACIAAAFIACAHIACAEQABAGAEADQANALARgGIADgBQASgIATgGIAEgCQAJgFAKgBIAIgBQACADABAEIgBgIQAMgFABgNQABgKgCgKIgDgiIAAgEQgBgLgGgKQgGgKgIgKQgPgRgYAAIgDADgAGzCKIABAAIgBAAgAGrCHIAEgDIAIgEQALgpgQgZIgBgCIgBgCIgBgCQgEgDAAgDQgEgFgGgDQgDgEgEgCIgEgCQgGgEgHAAQgCgDgFAAQgGACgGAEIgCADQgGAMgCAMQgCAJACAIQAEAQAJAOIAFAJIACACIAEADQAEAEAFADIAJADIAGABIAHADIAEgBIAEABgAHHBwIAAgEIgBgBgAhAAWQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABgBIgCAAgADzC5IACABIgBAAIgBgBgAgnAUQAdgPAagJICQgdIgqAMIgyAOIgCAAIAEgCIgqAQIgMAGIgFADIghAMIAJgEIgIADQgGADgEAAQgGAAgCgKgABngTIAAAAIACAAIgBAAIgBAAgAhAAGIABAAIgehxIgCAAIgEgJIgFgcIgCgKIgDgFIABgHIATgJIgBADIgHAFIgBAAIgBABQAAABgBABQAAAAAAABQAAAAAAABQABAAAAAAQABAEADADQgHgDAFATIABACIAAAAIAVAuIACAAIASAxQAKAcgSAXgADZhPIgSgxIAGAKIgYg5IgLgJIgHgHIAAgBIgXgRIAAgBIgGgEIgsgDIAAACIgOAAIgWAAIgBAAIAAgCIgBAAIAAAAIhYARIhXAZIgBABIgCABIgDgCIgJgEIgGgCIgPgIQgGgCgHgBQgGgBgFgDIgCgCIgKgBIgagEIgNgCIgBAAIgBgBIgRgBIgNgBIgEgCIgGABIgagBQAQgGAWgOIAFgFIB4gZIABABIBJgGIBfADIALABIAAgBIAsACIB8A/IAXAgIAUBDIABADIADAFIAAgBIABAOIgFAAIgEgDIgBADIADAIQAAAEABAEIgBAAIgDAAQgKACgKAEIAAgBIAAABIgFACgAikiEIAAAAIgBAAIABAAgAloimIgBgIIABgCQAFgKAIgHIAKgDQAXgIAZgBIADACQgFABgEADIgBAGIgEAEIAAAJQAAAFABADIACABQgbAFgaAAIgKAAgAknisIAAAAIAAAAg");
	this.shape_239.setTransform(6.2,-11.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#A2867A").s().p("AAJAHIAMAJIAAADgAgUgRIABgBIAAABIgBAAg");
	this.shape_240.setTransform(22.2,-31.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#251710").s().p("AgIgMIABAAIAGAGIALALIADAIIAAABQgjgWAOgEg");
	this.shape_241.setTransform(23.3,-29.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#564B43").s().p("ABgA5IABABIgDAAIACgBgABoAsIAAAAIAAAAgAA2AMIADAAIgDABIAAgBgAiRgXIADAFIAAABQgDgCAAgEgACVgdIAAAAIAAABgAiUgiIABAAIAAAAgAB+g4IABABIgBAAgAAIg5IAFAAIgCAAg");
	this.shape_242.setTransform(9.8,-25.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#9F8C81").s().p("AgcgJIA5ASIAAABIg5gTg");
	this.shape_243.setTransform(21.2,-36.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#453B38").s().p("AAAABIgBgEIADAHg");
	this.shape_244.setTransform(26.2,-33.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#665A50").s().p("AAAAAIABAAIgBAAg");
	this.shape_245.setTransform(33.9,-50.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#2A2016").s().p("AAFgEIAAABIgFAFIAAABIAAABIgEABIAJgJg");
	this.shape_246.setTransform(30.8,-49.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#A2968E").s().p("AgdAlIACgBIAEgCIAAABIAAACIgEAAIgCAAgAAdgjIABgBIgCAHg");
	this.shape_247.setTransform(33.1,-52.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#72615B").s().p("AgCAKIAAgBQACgKAAgMIADAFIgBAGIgEAQg");
	this.shape_248.setTransform(35.8,-55.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#A89D93").s().p("AgVAKIAAgKIAAgBIADABIACANIgBACgAAJgNIAEAAIAJAJIgNgJg");
	this.shape_249.setTransform(37.9,-57.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#796D66").s().p("AgDgEIADgBIAEAHIgEAEg");
	this.shape_250.setTransform(12.8,-55.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("ABsI+QgHgIAAgKQAAgLAHgHQAHgHALAAQAKAAAIAHQAHAHAAALQAAAKgHAIQgIAHgKAAQgLAAgHgHgAAwHzQgPgQAAgWQAAgXAPgPQAQgQAWAAQAXAAAPAQQAPAPAAAXQAAAWgPAQQgPAPgXAAQgWAAgQgPgAhiF9IgHgDQgGgEgEgFQgMgQgRgHIgBgBIAJgPIAGgGQAOgEgJgDIAAgBQACgIgEgIIgFAAIgBAAQgIAMgKAJIgCgBIgDABIgDABIgBACIgDAFIgKAGQgLAFgKADQgXADgXAAIg2gJIgHgDQgQgKgSgFIgsgXIgCAAIgGgFQgFgHgGgFQgRgPgLgUIgUgiIAAgCIAAgCIARgBQAEgDgBgFQgBgEgDgCIgLAAQgJAAgJgCIgMgEIgIgFIgOgEIgHgCIgDgBIgXgTIgKgDIgCgCQgQgRgLgUQgVgkAPgoIAEgFIAKgJIAhgUIADAAIAAgBIAMgGIgBgCIABgBQADgCAAgEIAAgBIgCgEIgBgCIgEAAIgBgCIgFACIgBAAIgCABIgCABIgdAKIgCABQgYgDgUgMQgYgPgMgXQAAgHgGgGIAAgBIAAAAIgDgKIgBgCIAAAAIgCgQIACAIIAAgPIAAgFIABgCQARgqAdgjQAMgKAKgLIAAgBQAJgCAGgGIAEADQABADAEACIAPARQAEAFAFADQAEADAGAAQAJAAAGAGIAKAGIABAAIACAFIAEABIANABQAyAUA4gTIACgBQAJgBgBAIIAAABIAAAAIAAABIgEARIgUgDIgUAHIgSAQIABAsIAPAnIAPAaIANARQAFAUAUAEIABAAIAHACIADAMIABABIABAEIAEAHIACAGQAFAPAJANIADADIAEAHQADAIAHADQAHAGAKABQATACASgBQAIAEAJABIABgBIADgCIACABIABAAIAEAAIAAgBIABgBQAGgIAHgHIgCgJIAFgDQASgLAZAKQAIADAKAFIANAJIACABQACAGAIACIACAAIAOAGIAfARIAcAEIACAAQALAGAJAHQAEACAFABIABAAIAAABIAAACIADAHIAAACIABAEIACAKIADARQACAHADAHQADAJAGAIQADAFAFADIADAEQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFAEQAEAEAFACIAGACQAMAFAOABIACAAIACAAIADgGIADgDIABgCIADgEIABgCIATgeIADgEQAGAEAIABQAOACAOgEIAagFIAbgFIAIgCIAHgCIAKgCQAKgBAJgDIAMgEIAZgKQANgFAOgDQAHgCAFgDIADgDIAJgCIACgBQALgDALgFIAFgCIABAAIABACIAEAEQACAHAHADIADABIAFAEQAIAJARABIAEAAIAHACIAPACIAOgBQAEAAAEgCIABgBQANgGAHgOQADgEABgFQAFgOACgOQABgJgGgGIAGgCQAIgEAHgHQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIASgRIABgBQAFgFAEgGIABgCIABABIAAgCQAFgIACgKIACgFQACgFAAgFQgBgHgEgCIgWg+IgJgNIgMgUIgLgRIgBgCIgBgBIgCgDIgIgMIhUghIgMgFIg5gnIgihgIg4g3Ig6gUIgqgPIgMgDIgBAAIgxACIhSAGIgEgBIgBAAIh9AFIg5AOIhQAgIgBgBQgIABgHAFIgBACIgBACIgDABIgBAAIgBABQgHAHgFAIQgDACgBADQgDAIABAJIAAABQgfgDgegKIgLgFIgIgDIAAAAIgMgDIgbARIgfASIgKgEIgFgDQgSgJgPACIgJgCIgGAHIgCACIgCABIgLAEIgLAAQACgJADgJIAKgXIATgcIAGgIIAOgJIADgEIAEgFIALgGIAUgMQASgMAWACQAIADAKAGIADACQgBgagngCIgLgBIgWAIIgBgDIgBgGIACgKQAFgNAKgJQAfgbAkgTIAKgGQAngUAlARQADAFgBAFIABABIAFAHIAAABQAEAIAAAKIABASIAAABIAAgBIACgBIABgBIABgDIABgBIAAgEIAAgEQAAgKADgHIAAgCQAEgJAHgGIABgBIAAAAQAHgJAIgHQAMgLANgJIAzgcIAbACIAPACIAHACQAFACAFgCIAEABIACACIAGAFQACAFAAAFIABACIAFABIABAAQAGALAAANIALgNIABgBIADgDQAGgEAEgFQAOgUASgQQAKgHAKgFQAEgBAFgCIAGgDQArgLAtAHIABAAQADAEAEACIAMAIIAQAWIAEALQAPAEAZgeQAMABAIgKIACgCIAEgBQARgFAQgCIATgCQARgCASACIAOADQAQAEAPAHQARAJgCATQgCAOgFAMIgDAHIgEADIAAABQgFAKgJAKIgKAKIgCACIAHgBIAAAAIAAACIAAABIABABQAPgFAPgBIAHABIAFgBQAKAAALADIADgBQAdgDAVASIABAAQAFAAACAEIABABIABAFIAFADQAPAMgFASIAAACIgDAHIAAAAIgDAGIgFAIIgDAFQgOAUgRARIgBABQgDAFgFAEQgHAGgIAEIgEAAIgFADIAAABIAAABIAAACIAAABIABACIABABIACACQAKABAJgFQAWgPARgSQAQgFANgDQASgDAOABQBBAEgYBpQgEARgQAOIgCACQAKAMAQgLQALgDAJAFQAcASAFAhQAGAkgTAdIgIAMIgBAAIgFAAIAAABIgCAAIgBACIgBABIgBACIAAABIAAAAIgIAHIgBABIAAACIAAADIAAABIACADIACABIAIAAIAIgGIAKgCIASABIADACQAaANAOAaIACAEIAAADQADAMAAAMIgBAgQgIALgLAIIgBAAIgCABIgEADQgKAGgLACQgSADgPAIIgCAAIgBAEIAAABIgEAAIAAAAIgDACIgBACIAAABIAAACIAAABIAAABQABADADABIAKAFQANAJAAAQIgCAFQAAAEgCAEIgBADQgJALgGANQgDAFgDACQgQANgUABQgYABgUAHQgDgEgEAGIgFACIAAABIAAACIAAABIAAACIABABIABABIABACIAJAAIAAAGIAAAAIgBAGIAAACIABABIAAADQgNAdgXAYQgHAEgGAGQgbAHgbABIgeAAIgDgCQgGgIgIgCIgDgEIgBAAIADgLIgDgEIgBgBIgHgBQgKAGgGAJIAAAAIgBAAIgBABIgCACIgIAKIgBAEQgIAWgNAUIgXANQgiACghgCQgXgCgQgQIgBgBQgFgGgHgFIgIAAIAAAAIgDADIgBABIAAABIAAADIAAABIAGAHQALAJADANIAAAAIgDAKIABAAIADgBQgCACgEAAQgFABgEAEQgmAEglgIQAJgOgGgNIgHAAQgFAFgEAHIgDAGIgCgBIgDABIgCABIgCACIgCACIgBAEIgBADQgMAAgIAIIgqABIgHABIgDABQgUgCgTgEgAInBnIABgDIgCAAgApogsIgBgBIgCgCIADADgAgwmqIAGgBIgbgEgAApDtIgEgCIgCgBQgHgFgEgIIgBgCIgFgJIgFgNIAAgBIgBgFIgCgIIgBgFIgCgCIgBgBIAAgDIgBgGIgDgPIgBgXIgBgEIAAgCIAAgBIgBgJIAAgKIABgCIAAgBIAAgHIAAgCIAAgBIABgDIACgWIACgJIgBgCQgBgJAHgFQADgEAFgBIABAAIAFgBIACgBIABAAIAJgCIAHAAIABAAIAEACIACADIABAAIABABIADACIAEADIABABIADADIACAEIAAABIAJANIACAEIAFAGIABADQADADAAAEIADAVIAAACIACAGIACAKIAAACIABANIAAAAIAAAYQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgCANIAAACIgCANIgCAJIgBAKQgBAIgGAGIgIAHIAAAAIgBAAIgBABQgFAGgIgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABIgLgDgAAhBDIgDABQgMAWAAAZIAAACIAAAhIAAADQAFAKAAAMIAAACQACACAAADIABACQALAQATAGIABgBIABgCIABgBIAAgBQAEgCABgGIAGgSIABgFIAAgPIAAgDIABgBIAAgHIAAgOQABgNgBgNQgBgIgDgGIgGgKIgDgDQgCgIgKAAIAAgBQgFgCgFAAIgEABgAGkCgIAAAAIgBAAIgBgBQgIgCgHgFIAAgEIAAgEIAGgDQAPAIARADIACgCQABgGACgFIACgDIABgBIADgBIAEABIABACQACAPgHAHIgEAEIgCAAIgDAAIgJABIgOgEgAkgBpIgBgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCAAIgBgBIgFgHIgCgBIgFgHQgJgOgGgQIgCgFIgDgIQgFgLgDgMIAAgGIABgJIgDgEIAAgBIgBgDIAAgFQAHACAAgIIADgDIAFgHIAAAAIANgIIAAAAIAIgDQALgGAOABIABAAIAGADIADACIABACIAJAOIAAACQAAAAAAABQABAAAAABQAAAAAAAAQAAABABAAIABADQADAIAFAFIABADQAGAMAHALIAEAJIAAABIgCAKIAAAEIgBABIAAAEIAAAFIgBADIAAAFIgBAFIAAAHIgBABIgCACIAAAGIgDABQgDAIgGAFQgLABgLgBIAAAAIgKACIgIgBgAkogHIgCAAIgEABIgBABQgEABgDADIgDACIAAAAIgCAIIAAABQACAGgCAGIAAABIADAQQAJAgAdAFIABABIAAAAIACgBIAFgBIAAAAIADgBIACgBIACgIQAGghgXgYQgGgGgEgGIAAAAIgFgDIgEAAIAAAAIgBAAgAkPgxIAAAAIAAAAgAiXiyQgDgCgDgDQgFgFgCgHIgBgBIACgBQAHgFAIgDIADgBIADACIgBAAQgEAAgCADQgEAEAAAFQAAAFAEACQADADAFAAQAGABADgDQgBAEgEACIgHABIgHgBgAhyjWQgDgEgBgFIABAAIAFAAIACAAIAAACQAAAJAKABQAGAAACgFQACAHgGACIgFABIgBAAQgIAAgEgIg");
	this.shape_251.setTransform(0,-2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#A9A59C").s().p("AgjAMIgEADIgHAFIALgIgAAtgTIACABIgIAAIAGgBg");
	this.shape_252.setTransform(-1,-60);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AhTH1QgQgFgOgHIgCgCIgGgDIgCAAIgJgBIgCgDQgOgFgHgOIAAgCIAAgCIgBgCIgCgCQgFgBgEgDIgEADQgDACgEAAIgSgBIgSAFQggAFgggIIgXgFQgWgKgVgMQglgIgbgbIgJgLIgHgHIAAgBIgGgGIgEgCQgHgJgEgKIgJgRQgFgHgCgHIgEgJIAAgGQgPgCgOgGIgNAAIgegYQgPgHgMgNQgVgVgGgcIgCgDQgFgRACgRQAAgKAEgKIACgPIACgDIADgHIAJgJIAHgJQgQgCgQgHIgCgDIAAgBQgjgSgTgjQgPglAKgpIAJghQACgHAGgFIAAAAIAAgDIACgDIACgKQAbghAogNIACAAIABgBIAAgTIANgqIAogrIABgCIACgDIAEgEQAJgGAJgEIADgCIADgGIACgCIAAAAIgBAAIgBgCIgCgGQgEgLAFgNIABgDQAOghAhgSIADgCIAMgHIAAgBIAdgQIACgBIACgBIADgBIANgFQANgFAOgDQAWgCAVAGIAZAEIADAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIAAAAIABAAIAFgFQANgMANgJIAJgFIAOgIQAMgIALgJIABAAIAFgBIAAgBIAJAAIACgBIACgBIAMAAIARABIADAAIAEABQAOADAJAHIAPAGQAIADABAJIAAADIADADIAhgiIAHgEIAEgEQAbgWAjgGIALgCIAJgBQAUgBASAFIAOAEIABAAIAIADIARAHIACABIACABQAFABADAEQAEAHAGAFIACACIADABIAGgFIAEgEQAFgIAIgEIAWgMIAAAAIABAAIAMgFIAMgCIACAAIAAgBQAsAAAqAMQAUACATAEQAEABABAEIADACIAHAEQACAIABAHIAAABIAAALQAAAMgCALIAAABIgMAkIAAAAIABAAQAVgBATAGIAAAAQATABARAHIALAFIAEACQAaANADAeQACAagOAXQARgEARADIAIAAIAJgBIgCABIAHABIgCgBIAEABIAHABIACABIAAABIAAABIAEACQBNAmghBKIgBgRIgCADQAEAKgCAJQgCAHgHAHQASAEAKAOIAFAHQAFAHAEAJQAaA5glAzQAMABAKAFIAPABQAIABAEAHQACAEAAAEQAKANAFAOIAHAOQAQAcgMAfQgDAIgFAGIgBACQgEAFgGAFIgKAGIgSAKIgBAAIgLAFIgKAEQALA0gbAtIgDADQAAADgCADIgDADQgPAIgRABIgiACIgGAAIAAAFQAAAHgDAHIgDAEIgCAGQgBAKgEAJIgDAIIgCADQgRAagcALQgRAJgWAAIgBAAQgaADgbgCIgEAAIgEAAIgGgFQgFgBgFgCIgEABQgCAGgDAFIgFAFIgFALIgCAEIgFABIgCADIgJAJIgFAIQgFACgFABIgBABQgKAHgMABQglAFghgHIgFABIgEABIgPgEQgCALgKAJIgCABIgFACQguAHgtgLIgIgDIgCACQgXAUgfADIgTABQgTAAgTgEgAiFGkIgGAGIgKAOIAAABIACAAIAAABQARAHAMAQQAEAFAGAEIAHADQATAEATABIAEAAIAHgBIAqgBQAJgIALAAIABgDIABgEIACgCIACgCIACgBIADgBIACABIADgGQAEgHAFgFIAHAAQAGANgJAOQAlAIAmgEQAEgEAFgBQADAAACgDIABAAIgBgIIAAgBQgDgMgLgJIgGgHIAAgBIAAgDIAAgBIABgBIADgDIAAAAIAIAAQAHAFAEAGIACABQAQAQAXACQAhACAhgCIAYgNQANgUAIgWIABgEIAIgKIACgCIABgBIAAAAIABAAQAGgJAKgGIAHABIABABIADAEIgDAKIABABIADAEQAIACAGAIIACABIABABIAeAAQAbgBAbgHQAGgGAHgEQAXgYANgdIAAgDIAAgJIAAgBIAAgFIgJAAIgBgCIgBgBIgBgBIAAgCIAAgBIAAgCIAAgBIAFgCQADgGADADQAVgGAYgBQAUgBAQgNQADgCADgFQAGgNAJgLIABgDQACgEAAgEIACgFQAAgQgNgJIgKgFQgDgBgBgDIAAgBIAAgBIAAgCIAAgBIABgCIADgCIAAAAIAEgBIAAAAIABgEIACgBQAOgHATgDQALgCAKgGIAEgDIACgBIABAAQALgJAIgLIABgfQAAgNgDgMIgBgDIgBgEQgOgagagNIgDgCIgTgBIgJACIgIAGIgIAAIgCgBIgCgDIAAgBIAAgDIAAgCIABgBIAIgHIAAAAIAAgBIABgCIABgBIABgCIACAAIAAgBIAFAAIABgBIAIgKQATgdgGgkQgFghgcgSQgJgFgLADQgQALgKgMIACgCQAQgOAEgRQAYhphCgFQgNgBgSAEQgNACgQAGQgRASgWAPQgJAFgKgBIgCgCIgBgBIgBgCIAAgBIAAgCIAAgBIAAgBIAFgEIAEABQAIgEAHgGQAFgEADgFIABgBQARgRANgUIABABIACACIADgGIABgDIAAgBIgDACIAFgJIgBAFIACgEIABgEIABgCIAAAAIADgHIAAgCQAFgTgPgLIgDgGIgBgBIgDgCQgCgEgFAAIgBAAQgVgSgdADIgEAAQgKgDgKABIgFAAIgHAAQgPABgQAEIAAAAIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgBIAGgGIgBgBQAJgKAFgKIAAgBIAEgEIADgGQAFgMACgOQACgTgRgJQgPgHgQgEIgPgEQgRgBgRABIgTADQgQACgRAFIgEABIgCACQgIAKgMgBQgZAdgPgDIAEgEIgFgJIgDACIgQgWIgMgIQgEgCgDgEIgBgBQgtgGgqALIgHADQgFACgEAAQgKAGgKAHQgSAQgOAUQgEAFgGAEIgDADIgCABIgKANQAAgNgGgLIgBAAIgFgBIgBgCQAAgFgCgFIgGgFIgCgCIgEgBQgFACgFgCIgHgDIgPgBIgcgDIgEAAIgDACIAAAAIgDAEQgVAJgTAOQgNAJgMALQgIAHgHAJIgBABQgHAGgEAJIAAABQgDAIAAAKIAAAEIAAABIAAACIgBACIgBADIgBABIgCABIgBAAIAAgSQAAgKgEgIIAAgCIAAABIAAAAIgFgHIgBgBQABgGgDgEQglgRgnAUIgKAGQgkATgfAbQgKAJgFAMIgCALIABAGIAAADIAXgIIALABQAnACABAaIgDgCQgKgHgIgDQgWgCgSANIgUAMIgMAGIgDAFIgDAEIgOAIIgGAJIgTAcIgKAXQgDAIgCAKIgBAFIACAAIANgFQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIADgDIADAAIABgCQAIgFAIAAQAPgCASAJIADADIgrgIQgFAFgBAGQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABIgBAAIgGAAIgDABQgGACgCAGIAAAAIAAAAIAAAAIAAABIABADQAFAIAKACIALACQAaAIAXgEQALAAAKgEQgLANAXgNIAIgEIgCACIgBAAIgGAEIgBABIAAAAQgIAEgJABQgPACgOgCIgJAAQgHABAAAFIgEAAIAEACIABACQAAAAAAAAQAAABAA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IIAAAAIABgMIABgLIADgnIABgHIAFgKIAAgBIACgCIAHgJIATADIABAAIADgBQAQAAAMAJIALAJQAIAFAEAIQAGAJACALIAEANIAFAMQACAFABAGQADAEABAEIAAABIADAJIAEALIABAFIACAJQAHAGAEAHIACAFIACADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQgDACgDgDIAAADQgCACgDAAIgGgCIgCgCQAAANgDAMIgCAHIgEALIgGAMQgDAGgFAFQABAAAAABQAAABAAAAQABABAAAAQAAABAAABIAAACIgBACIgDAEIgCACQgEAFgGAAIgCAAgABFFXIgIABIAAACIAEABIAEgBQAAAAABAAQAAAAABAAQABgBAAAAQABAAAAgBIACgCIgGABgAAHCHQgHAFABAJIAAACIgBAJIgCAWIAAADIAAABIgBAJIgBADIAAAKIgBACIAAAGIABADIAAAJIACAIIACALIACAPIABAGIAAADIAAAEIABAEIAFANIABABIAFANIAFAJIABACQAEAIAHAFIACABIAEACIABABIAJADIAAgBIABgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABABQAIABAFgGIABgBIABAAIAAgBIAIgGQAGgGABgIIABgKIACgJIABgHIABgCIAAgEIAAgCIACgNQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAgYIAAAAQAEAAABADIABgBIAAgBIABAAIAAAAIgBAAIgCgDIgCgGIgEgHIgBgKIgCgGIAAgCIgDgVQAAgEgDgDIgBgDIgBgCIAAgDIgDgIIgBgCIgNgNIgDgDIgCgBIgGgHIgEgCIgEgCIgGgCIgEAAIgKABIAAABIgCACIgDACIgBAAQgFABgDAEgABgEIIAAAOIABADIABgCIAAgKIAAgDIgCgHIAAAFgAg9DaIAAAAIAAAAgAjpDJIAAAAIAAgBgAkSAuIAAAAIAAgBgAlOAYIAAABIACAAIACgBIgBgCIgDACgAlEgLQAQANgDgKIgBgCIgIgEIgFgBQgBAAAAAAQAAAAAAABQAAAAABABQAAABABABgAkChSIABAAIgBAAgAkThUIAAABIABgBIACgBIgCgBIgBACgAlghcIAGAEQAGAGAGgLgAAXEYIgBgCQAAgDgCgCIAAgCQAAgMgFgKIAAgDIAJAQIAAgCIAOAUQAGADAEAGIACAAIACgBIAAgBIAAgCIACgCQAAgIADgHIACgIIAAgdIAAgEQACgPgCgOQgBgGgDgFIgCAAIgCgBQgEgCgEgBQgGgBgCgGIgBgCIAAAAQgGADgCgFIgBgDQABgFADgBIAFgBQAFAAAFACIAAABQAJAAADAHIADAEIAGAKQADAGABAIQABANgBANIgBANIAAAEIAAAFIAAADIAAAPIgBAFIgGASQgBAFgEADIgEABIgBAAIACADIAAABQgTgGgLgQgAG2EcIgPgCIgHgCIgEgBIgEgBIgEgBQgHgBgFgEIgCgBIgJgFIgCgBQgHgDgCgHIAAgBIgBgDQAAgFAFgCQAEgCAEACIADgCQAFgCADACIADACIAEAEQAHAFAIACIAAAAIACABIAOAEIAJgBIADAAIACAAIAIgDIADgBIABgCIADgJIABgCIABgHIACgFQACgEAAgGQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAAgBIADgCIAAgCQACgEAEgCQAFgBAEACIABABIABABIAAAAQAGAGgBAJQgCAOgFAOQgBAFgDAEQgIAOgMAGIgBABQgEACgEAAIgLABIgDAAgACnDRIgDgBIgGgFIAAgBQgJgLgEgPQgDgIAAgIIgBgFIgCgFQAAgKADgJIAAgCQAAgGAFgFQAHgHAJgCIAEgCQARgCAOAJIACACQAIAJAGALQACAEAAAFQAEAFABAHIAAARIgBACIAAAAIAAAHQgBALgKAHQgJAFgLACIgCABIgGABIgHAAIgHgBgACxCBIgDACIgGAEIgFAEIgDABQgDAGgBAIIACAFIAAABIgCADIADAIIABAFQABAHAFAGIADACIAAABIACACIAJAAIAEAAIABAAIAEgBQALgCAHgKIABgDQAEgQgHgPIgDgGQgHgNgOAAIgEABgAEWDBQgEgEgBgFIgCgEIgCgIIAAgEQgCgDAAgDIgBgKIAAgDIgBgUQgBgUADgTIABgIQABgKAIgGQAMgKAPgFIAQgGIAFgCIACgBIADgEQAYABAPARQAIAJAGALQAGAJABAMIAAAEIADAiQACAJgBALQgBAMgMAFIgBABIgBAAIgIACQgKAAgJAFIgEACQgTAGgSAIIgDABQgGACgGAAQgKAAgIgGgAEdB5IABAAQADABACAEIAAAEIAAABIADAJIABAEIAAAAIAAACIADAQIABAHIAAABIABAJIABABIABACIABABIABgBIAJgEQAMgGAOgDIAFgCQAOgHAPgCIACgBQgDgEABgFIAAgBIgBgJIgCgMIAAgFIgBgFQgCgLgDgLIAAAAIgDgHIgBgCIgDgHQgDgGACgHIAAAAIgEgEIgJgFIgDAAQgGAEgJAAIgDABQgUAGgQAMQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgBALIgBACQgBAHAAAHIgBAMIACgBIABAAIADAAgAkVCsQgdgFgJggIgDgQIAAgCQACgFgCgGIAAgBIABgIIABAAIADgDQADgDAEgCIAAADIAAACIAJALIAAgDIAAgBIAAgBIABgBIABgBIADgBQgDgGgDgDIAEAAIAFACIAAABQAEAHAGAGQAXAYgHAhIgBADIgDAFIgCACIAAAAIgGABIgCAAgAkwCBIABADIAAACQAHAQARAIIABABIACAAIAEgLQgHADgGgDQgEgCgDgGIgBgCIgGgIIgDgDQgBgEgDgCIACAIgAkmBvIALASIABABIAAABIAAgBQADgCgBgDIAAgCIgGgHIgBgBIgBgBIgBgBIgBAAIgEgCgAHiCDIgLgCIgGgCIgJgDQgFgCgFgEIgDgDIgCgCIgFgJQgJgOgEgRQgCgIACgIQACgNAGgLIACgDQAGgEAGgCQAFAAACACQAHABAGADIAEACQAEACADAEQAGADAEAFQAAADAEAEIABABIABADIABABIADAIQACAHgGAEQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBgCQgDgMgIgJIgEgGQgGgHgKACIgBAAIAAAAIgBABQgGACgFAFIgBACQgDANADANQACAMAHAKQAFAGAGACQAFACAEgBIAMACIABAAIABgBIAAgBIABgCIACgDQADgCAGADQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQADALgKAEIgCADIAAAAIgEADIgEAAgApuAwIACABIABACIgDgDgABZAPQABAAABgBQAAAAABgBQAAAAAAAAQAAAAgBAAQgKgDgLADIAFgEIAMgFIAmgOIACAAIA8gGIALgBIAAAAIhUAZIg8AYIgCAAIgyAHgAAOAMIADgFIAAgEIABAAIAAAAIA1gXIANgDIALAA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");
	this.shape_253.setTransform(0.3,-11.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#756C63").s().p("Ai2AvIAGgFIgFAFIgBAAgAiSASIAFgCIgJAFgAhJgMIAIgCIABAAIACAAIAGADIgRgBgAClgtIASAAIgBACIgDABIAAABIgOgEg");
	this.shape_254.setTransform(-9,-57);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#B5A59A").s().p("AgDABIABgBIAGAAIgGABIgBAAg");
	this.shape_255.setTransform(9.6,-61.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#B9A396").s().p("AgCAAIgBAAIAAAAIADgBIAAAAIAEADIgGgCg");
	this.shape_256.setTransform(9.3,-61.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HowmanyBubble1still, new cjs.Rectangle(-66.4,-62,133.5,125.6), null);


(lib.daydreamingguystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("ACICjIgKgGIAEgGIAAAAIAGgKIAEgHQALgWAHgWIAGABIgBAJIAIgqIABAAIAFABIACAQIgTBOIAAACIgjAkIgBABIABgBIAAAAIAHgCIgRAWIAMgFQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgEAEIgZAHgACZCWIgCAJIADgLgACYCKIgBABIABgBIABgBgACoBcIACgHIgBAAgACoCnIALgQIAjhRIAEgMIAAAAIAAgBIACgEIAAAAIABgBQACgMgCAAQgDABgIAOIgHAYIAAABIgIAYIgShwIgOgUIACgDIABgBIAAAAIAAgBIgBAAIgHglIADgBIAHAFIABABIAAgBIgIgWIgCgDIACgBIAMAGIABAAIAAAAIAAAAIAHADIAAAAIACAKIgCACIgBADIAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIAAAAQADAAAKgEQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIANAWIAGAHIgBABIgMgIIAeBLIgJg2QAIAPAEAOQAEAMABANIABAUIgBALQgCAVgHAWIgCACIgVAbIgBgBIgGAIIACABIgkAsgADEBNIABgGIgBgFIgDAAIADALgADhA8QADgDADgCIAAgKgACzgdIAAgBIgBgEQgBgIABgEIAAgCQABgCAEAAIACABIAIAGIgGgGIgEgCIAAgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgBADQgBAFACAIIAAAAIAAABIABAFIAAAAIAAAAgADFguIAAABIAAAAIABAAIgCgEIgDgCIAEAFgACxg9IAFAFIAAAAIABABIgBgCIAAgBIgEgEIgBgBIgBgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIAFAFgACthQIAAABIAAABIACADIgBgFIgBgEIAAAAIAAAAIAAAEgADhCkIADgLIAGgOIAfgnIAFgDIABgCQAIgNAFgDQAEgDABAIIAAAHIgGAJIgUAYIgBgBIgCgBIgeAugABdBaIADgGQATgdgPALIADgOIAAAAIACgCIgBgBIAJg3IAFABQAIAUgHARIgCAEIAAALIAEAAIACgBIAFAEQgOAbgPASgAECAzIABgBIgEgvIgDgKIgahEQAIgIAGAHQAGAGADAJIAJAiIAAABIABAAIgBgBIgHghIABAAIgEgHIgDgIIAWAAIAAACIABAAIgBgHIgCgMQAEAAADADQANALAHAOIgBABQABADAAADIgRgOIABgBIgCgBIABACIAWA8IABAFIgGAoIACABIgNAIIgTAcgAEUAsIACgGQACgCgBgEQgGARADgFgAEFglIAOAKIAMA3IgNhEgAENhAIAAAAIABAAIgBgFgACWAmIABgnIAQALIAAADIAAAAIgKAbgAjsAbQgDgDgBgFIgBgDIABgEIABgBIABgBIgBAAIAGgNIgJgRIABgBIAAgBQAJgaALAUIAAACIgCAHIACAcIAAACQABAFgCAGIgDAFIgDACIgDAAQgDAAgCgCgAlAgKIAFgUQAEgLADgDIACgBIACAAIgBgCIgBAAIABgBIAMgVIAbgUIgOAkIgCAFQgKAHgHgCIADAFIADAIIACAGIAAAAIgDABIgTAPgAE4gOIgEgUQgEgcAHgBIAIAfIACAOQABAHgEAAQgCAAgEgDgACMgxIgBgBIgBgBIgCAAIACABIgHgBIgNgNIgugUIBOAIIAAAAIABABIALAggAgDgtIgBgHQgDgIgPAMIABgYIACgSIAAAAIAAAAQAAgFgHAAQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAIgIgHIgDgGIAgALIgfgVIgQgUIAUACIgCgCIAAAAIgSgGQgIgKALACIABAAIAAgBQgMgDADAJIgFgGQgFgGAMABQAKAEAIgDQATAFAOAKIgBABIACAAQAGABADAEQAFAFAAAHIAAABIABAAIAEAIIAFAPIABADIAJgLIgSgjIABgBIANAKIAAgEIAHALIADAFIAEgMIgEgKIgsgjIglgNIgRgFIAxAEIAZALIAAABIAeAlIANAMIAHAFIACAAIACABIAbARIAHgLIAggIIAAAAIAAgBQAJgEgDgGIAAAAIAVgLIBMARIAAABIAXAPIAWANIAAABIgbgCIgSgNIgGgEIgygGIgBAAIgNAIIgHACIAAAAIgdAEQgFADgBADQgBACADACQAEADACgEIABgCIACADIAAAAIACACIASAVIgBADQgcgMgdAAIgDAAIgSACIAAAAIgBAAQgNACgMAFIAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAQgJgKgEAAQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAABIACAHIAAAAIAPAFIABAAIAAAAIAuAIIgBACIgZAAIgvgLIgCAEQgDAGABAEIABACQABAEAGAFIAXgIIAaAEIAHAGIgDACIgLgEIhDAKgAAIhPIgHABIgBACQgEADgEACIAOABIAEgCIADgEQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIgCAAIgCAAgAgKhmIAQANIgEgTQgEAFgHAAIgEgBgAAdhqIAAABIgBAEIAAABIACACQAEABALgHIACgCIgIgBIgCABIgBgBIgHgBIAAACgAC+iDIABABIAKAAIgdgJgAjfg8IASgLIgHASQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBgBIgFABQgGAAAEgJgAjGg5QADgIAPgSIAFgEIAegLIADADIgxAqgAj0hOIAAgBIABgBIALgMIAAABIgEAMQgFAFgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBgADchSIgYgTQgEgDgCAEQgGAIgEgDIgBAAIgDgEIARgHIAAAAIAEgBIAKgCIAAAAIABAAIgBgCIAAAAIABgBIABAAIAAAAIACABIAFADQATAIgLAPIgCADIgBAAIgBAAgAjlhXIgDAAIAAgEIABgCIACgEIABgBIABgBIANgHIAAgCIABAAQABgBABAAQAAAAABAAQAAAAABABQAAAAAAABQAAACgCAFIgRAOgAkDh1IAAgBIAbgOIACAFIgdASIgCAAQgFAAAHgIgAiaiIIADAAIAAgBIAGgDQAQgFgIAJQgDABgCACIgBABIgYAOgABBiGIgBgBIgDgJIgwgnIgBgBIgPgPIAAgBIgCgCIgCgBIgDgBIgBgBIgBACIgEgBIg8gLIAfgCIAAgBIAEAAIABAAIAdgBIAiAFIAGAAIABgCQAYAIAMAVIAPAfIABACIgDACIACAQIABAIIgCgEIgDAJgAjIipIgCgBIAAgBQgFgFAAgDIAIgIIACAAIAVgIIAZgKIABABIAAgBQAHgBgEAHIAVACIgcALIgBgBIAAABIAAAAQgVAJANAFIAAABIAEgBIAWgHIBSABIAEABQAKAEAHAHIgVgDIhOACIgFgEIAAgBIAAAAIAAABIABAEIgZAFIgFAAg");
	this.shape.setTransform(16.8,-49.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B1D16").s().p("AAAABQgDgKAFANIgCgDg");
	this.shape_1.setTransform(140.6,61.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E9092").s().p("AgIgPIAAgEIARAhIAAAGg");
	this.shape_2.setTransform(140.7,66.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B4A99E").s().p("AAagEIAJAAIhGAJg");
	this.shape_3.setTransform(128.2,62.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#898882").s().p("AANgOIgwAIIgJAAIAAgBIA7gKIAeAfIAAAEg");
	this.shape_4.setTransform(135.3,62.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#70655A").s().p("AAtgFIAAABIg9AJIgBAAIgaABg");
	this.shape_5.setTransform(126.3,62.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#757069").s().p("AgrAFIAAgBIBXgKIgBACIhCALg");
	this.shape_6.setTransform(125.9,61.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#564B41").s().p("AgFgBIAAgBQANgJgCAOIAAABQgCACgEABQgGgBABgHg");
	this.shape_7.setTransform(129.4,57.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2A69E").s().p("AAAAJQgLgBAAgKIAAgCQAHgHAMAEIACAAQACACgBAFIAAAAQgGAFgFAEgAgJgCIAAABQAAAGAGABQADAAACgDIAAgBQACgIgEAAQgDAAgGAEg");
	this.shape_8.setTransform(129.8,57.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7D6C5E").s().p("AANgJIgFAFIgBABQAAADgDAEIgDACQgFAEgIAAg");
	this.shape_9.setTransform(121.6,58.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#90837A").s().p("AABAFQgGgBABgGIAAgCQALgFgCALQAAABAAABQgBABAAAAQAAABgBAAQAAAAAAAAIgCgBg");
	this.shape_10.setTransform(125.5,58.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7C898B").s().p("AALA2IAVgRIhEhdIBJBfIgbASg");
	this.shape_11.setTransform(122.8,49.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A89082").s().p("AgWALIArgXIAHgCIg3Adg");
	this.shape_12.setTransform(125.3,56.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#81726A").s().p("AgIgFIAAgBIAAAAIABgBQAPgDABAPIAAABIAAABIgBAAIgFABQgIAAgDgNgAgBABIACADIgCgHIAAAEg");
	this.shape_13.setTransform(140.7,61.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#946F5E").s().p("AgHgKIAAgBIAPAXg");
	this.shape_14.setTransform(138.9,61.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#746B62").s().p("AgmABIAMAAIgNACgAAmgCIACAAIAAABg");
	this.shape_15.setTransform(134.1,60.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#706356").s().p("AAAAAQADAAACAAQABAAABAAQAAAAgBAAQgBAAgCABIgDgBgAgFABIgBgBIAEABIgDAAg");
	this.shape_16.setTransform(135.4,57.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#382B1F").s().p("AAAACIgDgBIgBgBIAAAAIAGABIADABIgFAAg");
	this.shape_17.setTransform(135.1,57.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B6ACA3").s().p("AgMgGIgBgBQALgGALAKQADADACAEQgDAEgEACIAAAAQgQgCgDgOgAABAAQACAAABAAQABAAAAAAQgBAAgBAAQgCAAgCAAIgIgCIAAABIABABIAAAAIAEAAIADAAIACAAg");
	this.shape_18.setTransform(135.6,57.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7E786A").s().p("AgDAEQAPgPgOAPg");
	this.shape_19.setTransform(137.8,54);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#241810").s().p("AgLACIAAgBQApgOgfARIgBABIgEABQgEAAgBgEg");
	this.shape_20.setTransform(140.1,50.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#746C62").s().p("AgCgDIABAAIABAAQABAGAGgDIABAAIAGAAIgbAEg");
	this.shape_21.setTransform(139,51);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B19181").s().p("AgDAIIACgDIAFgMIgBAPg");
	this.shape_22.setTransform(150.2,67.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#27190E").s().p("AAAABIABgBIgBABg");
	this.shape_23.setTransform(149.8,68.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#768888").s().p("AAAAEIAAgCIAAgFIABAHg");
	this.shape_24.setTransform(141.7,68);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#493930").s().p("AgDAEIAAgBIgCgHIACAAIAJAEIgCADIgBAAIAAABIgCABIgEgBg");
	this.shape_25.setTransform(143,64.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#99857C").s().p("AACAEIACgEQAGADgGABIgCABgAgGgEIACABIgCAAIAAgBg");
	this.shape_26.setTransform(143.1,64.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1F1509").s().p("AgBgCIABgCIABAAQACAJgBAAQgBAAgCgHg");
	this.shape_27.setTransform(149.9,66.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1F150F").s().p("AgBAFIAAgPIABgBIAAABQADAWgCAAIgCgHg");
	this.shape_28.setTransform(151.8,59.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E120B").s().p("AgCgCIABAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIACADIgFgFg");
	this.shape_29.setTransform(157.5,57.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#24170D").s().p("AgMAAIAEAAIAWABg");
	this.shape_30.setTransform(160.6,57);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B9ADA5").s().p("AgDAFQAPgHgWgFIgBgEIAYAAIgNAYg");
	this.shape_31.setTransform(157.3,54.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#816E63").s().p("AAAAGQAEgEgFgEIgDgCIgCgBIAAgBIABAAQAVAFgQAHIgBABIABgBg");
	this.shape_32.setTransform(156.9,54.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3A2E2B").s().p("AgDgFIABAAIACACQAGAFgDADIgDABg");
	this.shape_33.setTransform(156.6,54.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AA9C93").s().p("AgGADQgDgFAAgJQAIgGAHAIIABABQAHALgIALIAAABQgIgBgEgLg");
	this.shape_34.setTransform(152.6,54.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6C6358").s().p("AgcABIAhgBIAYABg");
	this.shape_35.setTransform(114.1,63.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AEA79D").s().p("AAKABIgYgBIAdAAIgFABg");
	this.shape_36.setTransform(116.1,63.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9A8D85").s().p("AgkAFIAFgDIAqgEIAagCIhIAJIgBAAg");
	this.shape_37.setTransform(120.8,63.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#846C60").s().p("AAVgKIgiATIgHACg");
	this.shape_38.setTransform(116.5,60.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C7367").s().p("AgcgEIAHgCQgEAIAFADIgVACgAArgBIAAABIgOABIAOgCg");
	this.shape_39.setTransform(117.3,62.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#919390").s().p("AAZgLIgBACQgBAFgGAEQgHADgKAAIgYAJg");
	this.shape_40.setTransform(121.5,56.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7B807E").s().p("Ag0AhIBRg7IAYgJIhlBHg");
	this.shape_41.setTransform(116.1,60.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#615248").s().p("AADgEIgCACIgBAAIABABQgBACACADIACABQgOgIANgBg");
	this.shape_42.setTransform(117.8,40.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A79184").s().p("AAAAAIACAAIgDABIABgBg");
	this.shape_43.setTransform(117.4,37.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#41372E").s().p("AgPgDIASABQgKAAAXAGIAAAAg");
	this.shape_44.setTransform(157.6,47.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3E2F25").s().p("AgNAAIgBAAQgYgGALAAIALAAIAvANg");
	this.shape_45.setTransform(160.6,48.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#463A32").s().p("AAMAAIgFACQgngHAsAFg");
	this.shape_46.setTransform(153,46.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B49F92").s().p("AgSAMIAmgdIAEAAIgvAjg");
	this.shape_47.setTransform(154.5,43.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6B5648").s().p("AgVARIArghIgDAEIgnAdIgBAAg");
	this.shape_48.setTransform(154.7,42.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FDFCFA").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_49.setTransform(152.5,42.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6B6C64").s().p("AgVAPIAAgBIACAAIgCgLQAIAEAAgIIAAgBIABAAIAjgPIgtAig");
	this.shape_50.setTransform(154.6,41.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#806D60").s().p("AAFAHIACgEIAAAEIgBAAIgBAAgAgCgEIgEAAQAMgGABAJQgCgDgHAAg");
	this.shape_51.setTransform(152.7,40.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#32281F").s().p("AgCAIIgFgRIAFAAQAHAAACADQACACgCADIgDADIAAABQABAHgEAAIgDgCg");
	this.shape_52.setTransform(152.8,40.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BEBAB4").s().p("AgTAVIgLggIAMgFIAPAMIAhgRIABAAIAAADIgIAJIgjAOIABgBIAAgDQACgDgCgCQgBgJgNAHIAEARIACALg");
	this.shape_53.setTransform(154.6,40.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6E615A").s().p("AACAHIgDgEIAAgDIgCgBIgCgHQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAGALQABABAAABQAAABABABQAAAAAAABQgBAAAAAAIgDgCg");
	this.shape_54.setTransform(145,45.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#604E41").s().p("AgRAGIAjgLIggALg");
	this.shape_55.setTransform(147.2,40.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6D6055").s().p("AAVgDIgYAAIA0gTQgNAHgCAKIAAACIhSAagAAqgJIAEAAIAAACIgIADIAEgFg");
	this.shape_56.setTransform(141.2,42);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C5B8B2").s().p("AgDADIACgDIgLgMIARAJIgEAEQgJANAVgOIgBACIgMAKIgCABQgEAAADgKg");
	this.shape_57.setTransform(151.1,42.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8B8985").s().p("AgGAAIABACQAPABgMgNQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIAAgEIAKAMIgCAEQgDAMAHgEIgHAFIgGAEg");
	this.shape_58.setTransform(150.4,43.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3C2F2B").s().p("AgCAIIgBgEIgBgLIACAAQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAMANgNAAIgBAAg");
	this.shape_59.setTransform(150.1,42.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#332A20").s().p("AgmAUIAAgCQACgKAOgHIATgBIAJgJIATgCIAMgIIACAKIghALIgjAMIgFAFIgBAAIgDABg");
	this.shape_60.setTransform(148.4,39.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#767472").s().p("AgHACIAOgFIAIgBIgLAIIgSABg");
	this.shape_61.setTransform(147.6,39.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E5DAD2").s().p("AgeAGIAbgJIgIADIgGAEQgRgDATARgAASABQAGgMgHgBIAOgFIgMASIgBAAg");
	this.shape_62.setTransform(155.8,38.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9C8E84").s().p("AhCAZIAAgBIAhgMIAhgMIBCgYIABAAQAAASgOAGIAAgDIAMgTIgOAGIgVAIIgbAJIgLAFIg5ATIgBAAg");
	this.shape_63.setTransform(152.4,38.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#463930").s().p("AgjAHIAvgVIANgCIALACQgJAAAEAGIACABIhBAYg");
	this.shape_64.setTransform(155.7,36.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#917A6B").s().p("AgSAgIAEgDQAggagIgfIgBAAIgKgCIAAgBIABAAIAKABQAGABADAFIAAABIgHAZIAAAAIAAABIgGAIIgUAVg");
	this.shape_65.setTransform(158.4,38.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2C221A").s().p("AgvAzQgFgJALgGIAIgGIAMgKIAsgiIAJgJQANgGAAgSIAAAAIgCgCQgEgGAIABIABAAQAJAfgiAZIgrAiIgXATIgEgEg");
	this.shape_66.setTransform(154.6,40.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A9A29F").s().p("AAJgCIAAACIgMABIgFACg");
	this.shape_67.setTransform(157.3,35.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8B8983").s().p("AAegMIAHgCIAGgCIgvAVIgMAIIgTACIgHACg");
	this.shape_68.setTransform(152.6,37.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#62564B").s().p("AgjAJQAhgRgqAOIAAABIgBAAIgBgBIAJgGIARgGQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAAAIAnACIAXAGIADABIgCAAIhKAIg");
	this.shape_69.setTransform(143.4,49.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7F756D").s().p("AgCAEIgBgBQANgOgKANIAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAAAg");
	this.shape_70.setTransform(141.6,48.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#AA9E95").s().p("AgwAZIgHgLQAAgBgBAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQACgEADgCIBGgvIADABIAAAEIAEADIgRAVIAhABIAKAPIgXgFIgmgDQAJgNgNAPIABABIgRAFIgJAHIgLAJIAdgGIBJgIIAEAHIhJACIgiAjQAOgRgQARIACAAIgGAGgAgyAwgAAVgyQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIAGgDIAHADIAEADIAAABIgHAJIgHgNg");
	this.shape_71.setTransform(142.6,49.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#85776E").s().p("ABgAMIjAgTIgBgCIAGgDICFAMIA4ALIAAABIgCAAg");
	this.shape_72.setTransform(124.8,39.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6A594D").s().p("AgCAAIABAAIAFABg");
	this.shape_73.setTransform(134.8,41.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9D978F").s().p("AgZAOIBWgcIgHADIg1ASIgSAIgAg2AFIgGgCIAAgBQATABANAJIABABIgbgIg");
	this.shape_74.setTransform(140.7,40.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#30251C").s().p("AgeAPQgFgBgDgJIAbgGIAygNIgEAKIgXAGIgDAAIgfAMIgGABIgCAAg");
	this.shape_75.setTransform(129.1,45.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A79187").s().p("AgOgXIACgHIAAABIAWAXIAEAjIgGACg");
	this.shape_76.setTransform(126.7,51.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58493D").s().p("AgEgBIAEgDQAKACgKAHg");
	this.shape_77.setTransform(124.7,48.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1A120E").s().p("ACSCTIgDgJIgSgiIgeggIg8AKIhYAMIgrAGIgdABIgiABIBmhIQAKAAAHgDQAGgEABgFIAbgSIhLhfIgngzIDAAVIAHACIAbAIIACABIAIABIATgIIAZAAIhGAbIgEABIghAGIAEgJIAmgLIgHgBIABAAIgGgCIgDAAIg0gLIgqgKIgtgFIgMgBQgNgBgHABQgOABAQAKIAPASIAsA0IAEAHIAGAGIAWA2IgsAYIgaATIgGABIgBAAIAAABIgLACIgqAXIgNAMIAVgCQAKAFAigIIAGgCIANgBIAUACIBCgMIAMgDIA4gJIAJAFIACABIARAXIAFAIIAIALIAOATIAGARg");
	this.shape_78.setTransform(127.3,53.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BDADA2").s().p("AhjAeIABgCQADABAEgCIAhgLIACAAIA4gOIAEgBIBSgaIABAAIijA1IgTACgABbgaIAHgDIACAAIgKADIABAAg");
	this.shape_79.setTransform(135.9,44.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8D7567").s().p("AAQAbQALgHgKgDIgFADIgrgzIADAAIATAWIAEAGQAGALAGACIAGAHQAKgHAHAKQADAEgCACIAAAAIgCAAIgFAAIgCAHg");
	this.shape_80.setTransform(123,46.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#78716A").s().p("AgMAEIACgCIAXgFIAAABIgZAGg");
	this.shape_81.setTransform(126.5,45.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#75695F").s().p("Ag2AEIADgBIABAAQACAIAGABIgBACgAAWgHIAhgGIg3ANg");
	this.shape_82.setTransform(130.3,45.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D8CFC8").s().p("AgPAqIAFAAIgFABIAAgBgAgJAkQgHgKgKAGIgGgGQAEABADgEIAFgGIALAKIADAAQAHAKgJAEQACgBgDgEgAgSAQIABgBIAAABIgBAAgABTgRIilgWIAWAcIAGgKIAEANIABAAQAFAFACgHIABAAQgBgQgJAAIACgEIAGAFQACACAAADQACAGgBAFQAAAGgGgBQgMgGAJAQIgTgWIgWgZIgBgBIABAAIBOAFIArAIIA0ALIADABIAGABIgBAAIhSAXIgYAHg");
	this.shape_83.setTransform(127,44.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#78756F").s().p("AghAWIBSgWIAGAAIgmALIgyANIAAgCgAg2gWIAAgBIAsAKg");
	this.shape_84.setTransform(131.2,43);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8D7D71").s().p("AgTAOIgPgRIgCgBQgCgDAAgDIAWAYgAgmgLIACgCQAHgBANABIAMABIArAFIAAABg");
	this.shape_85.setTransform(121.8,41.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8E7E76").s().p("AAAAIIgBAAIgEgMIgBgDIAAgBIAEgBQAIAAABAPIgBAAQgBAEgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAgAgEgFQALAWgIgUQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBgBIgBAAIABABg");
	this.shape_86.setTransform(122.1,42.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#2D221D").s().p("AgCgFIgBAAIABAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAEAJIgGgLg");
	this.shape_87.setTransform(121.9,42.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#AB978A").s().p("AhhggICYgOIACAAIA+gFQg8AVhtgBQgXABgXACIgWBQg");
	this.shape_88.setTransform(162.5,61.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#211A0C").s().p("AgIgCIAAgBIAAAAIAJABQARACgSADIgCABQgGgBAAgFg");
	this.shape_89.setTransform(168.4,56.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4D4139").s().p("AATAMQgEgHgJAAIgYgRIAlALIAAAOIAAgBg");
	this.shape_90.setTransform(162.1,53.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#857C74").s().p("AgGgDIAAgBQAJAAADAFIABABQgGADgDAAQgFAAABgIg");
	this.shape_91.setTransform(163.3,54.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B7B3AD").s().p("AgIgDIABAAIAQAHg");
	this.shape_92.setTransform(167.4,50.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#18100B").s().p("AgBAGIAAgBQABgXACAYg");
	this.shape_93.setTransform(178.2,55.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#291D13").s().p("AgEgBIAUABIgfACg");
	this.shape_94.setTransform(174.8,55.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#473B31").s().p("AAAAJQgDAAgBgEIAAgBIgBgDIAAAAQgDgJAHAAIAEABQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAIAAABQACACgGAKIgBABIgBAAg");
	this.shape_95.setTransform(171.9,52.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#483A2E").s().p("AiVBIIACgEIAEgSQAGARgDgTIgCAAIAKguIAIgRQAGATgGgiIA3gLQALALgGgJQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIAAgBIABAAIATABIAbABIgXgCIAygBIAbgGQAAAHAGAAIiYAOIgWBUIgGAOIgCACgAArgxIAKABIAOgGIAYACIAfgCIgVgBIATgJIAGAAIgCgBIAEgCIgBgEQACgBAPAFIAAAAQAOAMgPAGQgDgZgBAYIAAABIgkACIg+AFQAUgEgSgDg");
	this.shape_96.setTransform(164.1,61.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#797068").s().p("AiWB4IAAgBIAfhtIAAgBIAMgBIAvgEIAAABIgBAAIg3ALIAAgBIgBABIAAAPIgHASIgLAuIgBADIgDASIgCAEgAg7AEIC7gUIgTAIIgLADIgXgCIgPAGIgJgBIgKAAIAAAAIAAAAIgbAFIgyABIgEABgABjgcIgNgEIABgBQAGgLgBgDIAAAAIAbALIABAAQAQAHAPAJQgOgFgCABIABAEIgFACgABPglIAAgDIABADIgBAAgAA4gzIgGgCIgSgIIgNgEIgEgBIgQgEIAAAAIiBgbIgFgBQgNgHAMgKIAHgEQgLAHAFAJIAEAEIAXgUIACAAIgGAGQBeAXBmAnQgHABACAJIgXgKgAgohTIAsAHIgvgNIgLgBIgTgBgAhfhfIAEgCIgXgDQgEAAAXAFg");
	this.shape_97.setTransform(163.4,56.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B0B2AE").s().p("AABAFIAOgRQAAALgJAGQgHAIgMAAg");
	this.shape_98.setTransform(-92.4,31);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#928981").s().p("AAIADIACgEIAEgBIgDAFIgDAAgAgNABQAJgFADAGIgMgBg");
	this.shape_99.setTransform(-94.2,36.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#50483B").s().p("AACAEIgJgDIAOgEQADAHgGAAIgCAAg");
	this.shape_100.setTransform(-89.6,36.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#848178").s().p("AAAAFIgYgHIANACIAKADQAIABgDgIIAVAEIgUABIgFAEg");
	this.shape_101.setTransform(-89.2,36.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#DCD9CC").s().p("AgDgCIADgDQAIgJgHASIAAABQgBABAAABQAAABAAAAQAAAAgBABQAAAAAAAAQgCAAAAgLg");
	this.shape_102.setTransform(-86.9,28.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B0A295").s().p("AgFgHIACgGIAAAFQABARADgJIABgBIAEgGIgIAUIgBABg");
	this.shape_103.setTransform(-86.9,28.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#828A8A").s().p("AALgPIAFAAIgXAXIgIAIg");
	this.shape_104.setTransform(-88.9,26.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#5C5851").s().p("AgIASIAIgTIADgFQgDAJAAANIAAABIgHAEgAAJgUIgEAIIgBgCQgEgBgGADg");
	this.shape_105.setTransform(-86.4,28.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B8B5AF").s().p("AgEAAIgCACIAAgEIAAgDIABgBQAGgDAFABIABABIgCAGIgDAEIgDAGQAGgSgJAJg");
	this.shape_106.setTransform(-86.6,27.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A7A099").s().p("AAAAFIAAgIIABABIAAACIgBABIAAAEg");
	this.shape_107.setTransform(-108.2,39);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#56554F").s().p("AABACIgBgBIAAgGIABAFIAAAEIAAACIAAgEg");
	this.shape_108.setTransform(-108.1,38.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B2B2AB").s().p("AgGgGQAJgJAPAAIgiAYIgBAHQAAgNALgJg");
	this.shape_109.setTransform(-106.5,36.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C2B8AE").s().p("AgdAKIACgDIAZgDIgMAGIgQACIABgCgAgEAAIAjgLIgbAMIgIgBg");
	this.shape_110.setTransform(-99.1,35.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#675C50").s().p("AgHAOIALgGIAFgBIABgBIABgBIAagMIgjAKIgSgDQAOgGAPgGIALgCIAHgBIAAAAIABAAIAAAAQAYANhDASgAghAKIgBAEIgDAAIAEgEg");
	this.shape_111.setTransform(-99.8,34.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7A7972").s().p("Ag4AZIAOgFIAvgNQgQAFgNAIIgJgCIAAACQgFADgCAFIgzAWgAAzgDQAMgBAIgHQAJgIAAgKIAEgNIAIgHQAAAWgUAQQgUAOgcABIgBAAIgIABg");
	this.shape_112.setTransform(-98.9,32.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#8E867E").s().p("AgPAAIgCABQgEAEgFACQgDgDAOgEgAAMgFIAQgBIgEACIgRAFIAFgGg");
	this.shape_113.setTransform(-103.4,36.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#979894").s().p("AgSALIAlgVIgIAJIgYAMg");
	this.shape_114.setTransform(-85.9,24.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#757A74").s().p("AgLAJIAPgRIAPgJIgCAEIgjAgg");
	this.shape_115.setTransform(-82.9,22.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#A0948C").s().p("AgFAAIALAAIgEABg");
	this.shape_116.setTransform(-28.4,65.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#787B77").s().p("AgGAEIAOgLIADAAIgPANIgGACg");
	this.shape_117.setTransform(-23.3,62.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A89D93").s().p("AgCgCIACAAQAGAEgFABIgDgFg");
	this.shape_118.setTransform(-36.9,65.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B6ABA2").s().p("Ag9ALQAFgBgIgFIAGAAIAGAGIgJAAIAAAAgAACALIADgBIAAABgABBgKIgEAEIgBAAg");
	this.shape_119.setTransform(-30.5,64.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7D807D").s().p("AgeATIAqgfIATgGIgTAJIgIAKIgHAFIgZANg");
	this.shape_120.setTransform(-19.4,60.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#838785").s().p("AATgRIASgFIg2AnIgTAGg");
	this.shape_121.setTransform(-14.5,56.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#878984").s().p("AAjgSIAFAAIg9AgIgSAFg");
	this.shape_122.setTransform(-8.5,52.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C2BEB7").s().p("AgCgBIgCgCIAJAHIgCAAIgFgFg");
	this.shape_123.setTransform(-51.9,55.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#A5A49E").s().p("AATALIg2gkIgCgBIAMAGIA+AsIABABIAAACQgJgJgKgHg");
	this.shape_124.setTransform(-56.5,52.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#56564D").s().p("AgfgWIAiAUQASARgOgPIgBgBIAaAQIgDABQgDACAEAFg");
	this.shape_125.setTransform(-55.9,52.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2F271B").s().p("AgEgDIAAgBIADACIABABIAFAGIgJgIg");
	this.shape_126.setTransform(-55.1,52.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9C938B").s().p("AgJAJIgKgIIgDgDIAAgBIAOAMIgBAAgAAMgHIAAgBIALAJg");
	this.shape_127.setTransform(-50.5,55.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#AC9688").s().p("AAWAVIgogfIAAgBQgGgCAAgHIAAAAIACAAIALAAIAkAoIAAABg");
	this.shape_128.setTransform(-51.8,52.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6A5A50").s().p("AAFALIAKABIABAAIAVASQgPgLgRgIgAgIgFIgcgYIADAAIALAJIASAQIgEgBg");
	this.shape_129.setTransform(-45.9,57.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#878986").s().p("AAIAHIgCgCIgZgRIAFADIAiAWg");
	this.shape_130.setTransform(-61.1,49);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#868783").s().p("AABABIgHgDQAIABAEADIAAABg");
	this.shape_131.setTransform(-63.2,47.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#4D4840").s().p("AAEACIgVgMIAdALIAGAKIgOgJg");
	this.shape_132.setTransform(-65.7,46.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#AEA297").s().p("ABKAvIiVhcIAAgBICVBbIABgBIABACIgBABg");
	this.shape_133.setTransform(-63.2,45);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#868881").s().p("AgGgDIALAEIACADIgNgHg");
	this.shape_134.setTransform(-76.4,40.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#68665F").s().p("AgZgMIgCgDIA3AfIg1gcg");
	this.shape_135.setTransform(-73.1,42);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#65584E").s().p("ABQAuIAAABIgBAAIABgBgAg1gYIgbgVIAAgBIAJABICVBcg");
	this.shape_136.setTransform(-63.6,45);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#9D8F86").s().p("ABRAjIgigOIgKgFIgCAAIg+gZIACgCIBzAuIAAABgAhZgjIABAAIAAAAIgBAAg");
	this.shape_137.setTransform(-79.8,36.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#615141").s().p("AAWAHIAiAPIAAABgAgTgBIgkgTIADgCIA+AZg");
	this.shape_138.setTransform(-77.3,38.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C0AFAB").s().p("AAAgEIABAHIgBACg");
	this.shape_139.setTransform(-67.9,24.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#565651").s().p("AgMACIAcgHIgfALg");
	this.shape_140.setTransform(-79.6,20.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A9A8A3").s().p("AgEgBIAagJIAAAEIAAABIgcAHIgPAJg");
	this.shape_141.setTransform(-80.3,20.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#585855").s().p("AgFAGIAKgPIgBAIIgBADIAAABIgCAIQgBAEgCAAQgCAAgBgJgAABgLQAAgEADABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAgBAAAAQAAAAgBAAQgBAAgBAAQAAAAgBABg");
	this.shape_142.setTransform(-76.6,19.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#95897C").s().p("AABgHQABgBAAAAQABgBABAAQABAAAAABQAAAAAAABIAAABIgKAQg");
	this.shape_143.setTransform(-76.6,19.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#A7B5B6").s().p("AACAjIAJhQIgFBPIgQAMg");
	this.shape_144.setTransform(-71.4,9.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7B8584").s().p("AgjAdIADgDIgDAIgAATgVIARgMIgXARg");
	this.shape_145.setTransform(-74.4,16);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#9CAEB2").s().p("AAEgdIgDAeIgCAXIAAACIgCAEg");
	this.shape_146.setTransform(-69.8,1.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#566D71").s().p("AACglIACgEIgHBTg");
	this.shape_147.setTransform(-70.4,8.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#B2A69F").s().p("AADAIQgEgGgEgFQAAgKAHAFQAAAKAEAJIAAAAIgDgDg");
	this.shape_148.setTransform(-55.5,0.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B6AAA1").s().p("AAMAPIAAAAIABAAgAgLgNIAAgBIABABIgBAAg");
	this.shape_149.setTransform(-49.8,7.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#88786C").s().p("AAMAFIgdgJIAjAJg");
	this.shape_150.setTransform(-1.7,-12.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#9F9F9C").s().p("AAVAIIgqgPIAAAAIACAAIAHABIAiAOIgBAAg");
	this.shape_151.setTransform(-9.1,-11.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A29994").s().p("AAAABIgCgBIAFABg");
	this.shape_152.setTransform(-11.4,-12.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#747877").s().p("AgWgKIgGgFIA5Afg");
	this.shape_153.setTransform(-10.9,-14.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C9B6A8").s().p("AACACIgDgCIgMgHIAbAPg");
	this.shape_154.setTransform(-7.7,-14.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#766355").s().p("AgSgJIADAAIADABIAPAJIAEACIAMAHg");
	this.shape_155.setTransform(-9.8,-15.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#5E584E").s().p("AgIAAIARAAIgBAAIgOABIgCgBg");
	this.shape_156.setTransform(-29.7,-21.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#C7C1BC").s().p("AgCAAIADAAIACABIgFgBg");
	this.shape_157.setTransform(-22.1,-23.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#6F6D6B").s().p("AAFAIIgCAAIgBgCIgDABIgDgBIAEgBIAEgKIgRADIACgEIAGgCIANgCIAGAVQgEgCgFgBg");
	this.shape_158.setTransform(-22.2,-23.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#6A7A7F").s().p("AAAADIgBgEIABgEIACALg");
	this.shape_159.setTransform(-21.6,-27.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#779298").s().p("AAEgLIADADIAAASIgNACg");
	this.shape_160.setTransform(-22.1,-25.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E4D9D5").s().p("AgFAkQAAgDgCgCIgFgCIABgBQAPgGAEgOIACAFIgKAYIgGABIABgCgAAHgXIAGgOIgGAPg");
	this.shape_161.setTransform(-22.7,-28.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#61787F").s().p("AgHASIAFgPIAHgVIADgBIgOAnIgBgCg");
	this.shape_162.setTransform(-21.1,-32.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#4D5C63").s().p("AgCAKIgEgBIAAgBIADgUIAKAZg");
	this.shape_163.setTransform(-38.2,-27.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#8E908C").s().p("AAVAHQgLgGgMgCQANgJALAHIgBADIAAAHgAgVgCIAAgBIAFABIgFAAg");
	this.shape_164.setTransform(-36.8,-26);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#B9B6B4").s().p("AABAUIABAAIAAABIAAABgAgBgVIADAUIgCABg");
	this.shape_165.setTransform(-39.1,-28.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#7D8A8D").s().p("AAAABIAAgBIABAAIAAABIgBAAg");
	this.shape_166.setTransform(-39.1,-32.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#8E9798").s().p("AABAcIgCgCQgHgIAIgKIABgCIgCgTIABgOIAAAAIAAAPQAGAFgBAMIAAABIgEAWg");
	this.shape_167.setTransform(-39.1,-29.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#757472").s().p("AAdAKIg/gTIACAAIACAAIBCATg");
	this.shape_168.setTransform(-3.8,-27.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#B0968B").s().p("AAmA6IgeghIAhAhgAgog4IACgBIAAAJg");
	this.shape_169.setTransform(-15.5,-22.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#9E7869").s().p("AgHAOIABgDQgCAOAAAPIgCABgAAJgnIACgBIgDAPIgCACIgEAGg");
	this.shape_170.setTransform(-18.5,-32);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#747C7C").s().p("AAhAVQgQAAgNgFQgMgFgLgKIgDgCQgHgHgFgIIABgEQAEAJAIAHIADAEQAVAUAgABg");
	this.shape_171.setTransform(-10.7,-30.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E0CDC6").s().p("AAIAeIgMgRIgMgPIALgKIgEAMIAaAlgAgPgkIgBAEIgBAAg");
	this.shape_172.setTransform(-11.9,-36.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#BEA8A1").s().p("AABgFIACAAIgDAGIgBAEIgBABg");
	this.shape_173.setTransform(-13.5,-40.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#7D6C63").s().p("AAKAUIAEgDIAMAQQgJgKgHgDgAATggIgDAIIgEANIgGAEQgQALgIARIgFAAIgCABg");
	this.shape_174.setTransform(-15,-38.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#A3ABAC").s().p("AgCgGIANgKIAAADIAAABQgBAFgEADQgDADgFgBIgIATg");
	this.shape_175.setTransform(-18.6,-37.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#615956").s().p("AgFAGIgEgXIAKAXIgEALIgBABgAAKgMIAAADIgCADg");
	this.shape_176.setTransform(-16.6,-47.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#798589").s().p("AgbAdIApgvIAOgMIg3A9g");
	this.shape_177.setTransform(-14.6,-42.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#BCB0AB").s().p("AgHAEIAGgJIABAEIAEgRIACgDIALgHIAAABIgSAoIABAUgAgOgeIgCAAIABgCIACAAIABAAIAAADIADAYg");
	this.shape_178.setTransform(-16.3,-46);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#6D6D6B").s().p("AAHgEIAAAHIAAACIgNAMgAAFgQIACAAIAAAGIgCgGg");
	this.shape_179.setTransform(-12.5,-46);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#ABBABB").s().p("AACAIIABgCIgBAKIAAgIgAgCgNIAAgCIACAJg");
	this.shape_180.setTransform(-12,-47.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#8F8C88").s().p("AgHAJIAAgTQAAAJABAEQACAHACAAQACAAADgQIAGgCIgGAIQgCAKgCAAIgCABQgCAAgCgCg");
	this.shape_181.setTransform(-2.6,-36.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#312922").s().p("AgEAKQgCgGAAgHIAAgIIANgFIgCAQQgDARgCAAQgCAAgCgHg");
	this.shape_182.setTransform(-2.7,-37.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#625A54").s().p("AAAAHIgIgPIANAOIAEgBIgJAEg");
	this.shape_183.setTransform(-7.1,-45.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#A08A81").s().p("AgeAcIAEgIIAHgGIgJAOIgCAAgAAZgQQgFgDgGABIAJgJIAIAQIgGgFg");
	this.shape_184.setTransform(-10.3,-43.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B5A6A0").s().p("AgaAEIAAAAIATgIIAiACIg1AHIAAgBg");
	this.shape_185.setTransform(-0.9,-46.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#B4A29B").s().p("AgHADIAZgJIAAABIAAABIgFACIgTAFIgLAEg");
	this.shape_186.setTransform(-5.4,-45.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#695E57").s().p("AgFgOIAEACIAAABIAAAFIADAFIAEAFIAAAEIgBAHIAAAAg");
	this.shape_187.setTransform(-56.8,-8.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#BDB4AD").s().p("AABAEQgEgFgDgJIAGAAIAHAFIAAAIIAAAIIgGgHg");
	this.shape_188.setTransform(-56.9,-12.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#6E665F").s().p("AgCAEIgFgKIACAAQACAHAEAGgAABgGIAGAAIABAAIAAAFg");
	this.shape_189.setTransform(-57,-13.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#70625A").s().p("Ag7BpIAJhUQgDAeAAAeIgCAZgAA0gNQgEgHgEgFQAJACAHgBIAAAJQgHgFAAALIgBgEgAAkg3QAFgLACAOIgHgDgAAig4IAAgBIAAABgAgOhAIACgEIgBAEIgBAAgAAzhVIAAgBIAAAEgAAQhpIAGARIgEgBIgCgMIgRASQAHgMAKgKg");
	this.shape_190.setTransform(-61.4,1.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#4C656B").s().p("AABgNIAAgDIABAAIgDAhg");
	this.shape_191.setTransform(-69.5,0);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#70898E").s().p("AgHARIANgfIACgCIgOAhIgBAAg");
	this.shape_192.setTransform(-68.6,-3.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#BBA9A1").s().p("AgOAPIADgIIAIgHIARgRIACALIgEgBQgCADgBAEIgCAPQgDgCgDgMIAAAAIAAAAIgIARIgIAAg");
	this.shape_193.setTransform(-61.2,-6.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#DCD6D6").s().p("AAAAIQgHggAKAeIAAABIgCACg");
	this.shape_194.setTransform(-62.5,-15.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#B7B1AF").s().p("AACALQgTgRAQgEQADAEAFADIABAEIABADIgCAEIgBABQgKgeAHAgIABAAIgCAAg");
	this.shape_195.setTransform(-62.8,-15.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#998C85").s().p("AgFAIQgEgGgCgFQgCgHAAgHIATALIAAACQgPAEATARIACABIADgCIAAACQgMAAgIgKg");
	this.shape_196.setTransform(-63.6,-16.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#7B8C90").s().p("AAUgBIgVgsIABgEIAYAwIgtBMIgCABgAgNhGIgCgEIAAgBIACABIAFAIIgFgEg");
	this.shape_197.setTransform(-65.6,-12.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#B3AFAE").s().p("AAGAJQgJgFgCABIAAgNIAKAPIABACIAAAAg");
	this.shape_198.setTransform(-69,-24.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#9E9D9B").s().p("AgLgMIAAgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQADgBAIAFIAAAAIAAAAIACAFIAKAbIAAABg");
	this.shape_199.setTransform(-68.5,-22);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#585653").s().p("AAOAXIAAgBIAAAAIACgEIAAADIABAAIgDAFgAgOgKIgCgPIABACIACABIADAEIACgBIAFAEIACAEQABAIAFAEg");
	this.shape_200.setTransform(-63.6,-17);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#9EABB0").s().p("AgCgGIAAAAIAFANg");
	this.shape_201.setTransform(-70,-26);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#48463F").s().p("AAAAKIAAgEIAAgHIgBgCIgBgJIAFAYg");
	this.shape_202.setTransform(-70.3,-28.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#C3B5AE").s().p("AgHABIAAgBQAFgDAGACIAEABIgLADg");
	this.shape_203.setTransform(-80.1,-33.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#595E5F").s().p("AAZA4IgKgdIAMAegAABAEIgGgNIAAgGIABABIACACIAOAhgAgag3IAAAAIABgBIABACIgCgBg");
	this.shape_204.setTransform(-69.7,-25.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#4E4F4D").s().p("AgDAGIAEgLIADALQgDgBgEABg");
	this.shape_205.setTransform(-73.5,-43.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#63615A").s().p("AgDgGIAHAUIgJgeQAAgHACgGQAAAAABAAQAAAAAAAAQABAAAAABQABABAAABIAGAsIgEAMg");
	this.shape_206.setTransform(-74,-46.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#ADA69F").s().p("AgCgEIgCgKIAJAdg");
	this.shape_207.setTransform(-74.1,-46.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#808686").s().p("AgGAIIANgTQAAARgHAFIAAABg");
	this.shape_208.setTransform(-40.6,-37.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#AC978B").s().p("AADAFQgDAAAAgEIgDgGIAGAGIABADIAAABIgBAAg");
	this.shape_209.setTransform(-51.3,-26.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#B39F92").s().p("AABALQAEAAgBgJQgBgEgFgBIgEgGIAAgBQAFADACAEQAKAOgHAAIgDAAg");
	this.shape_210.setTransform(-50.3,-24.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#6B6E6B").s().p("AAJAQIgbghIAAgBIACAAIAEAGQAbAlgEgWQAGABABAFQACAJgEAAIgHgCg");
	this.shape_211.setTransform(-51.7,-25.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#BAB4AD").s().p("AABABIgBAAIAAgBIAAAAIABABg");
	this.shape_212.setTransform(-55.4,-29.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#704536").s().p("AgBgWIAAgCIABAAIAAgBIACAzg");
	this.shape_213.setTransform(-54.5,-34.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#583F32").s().p("AACgJIAAAHIgCAJIgBABIAAABIAAABg");
	this.shape_214.setTransform(-54.4,-38);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#C39D88").s().p("AAAAZIgCgzIAAgBIACgBIAAAAIACAWIgBAGQgBAQADANg");
	this.shape_215.setTransform(-54.3,-34.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#77695D").s().p("AAAgBIABgDIAAAIIgBABg");
	this.shape_216.setTransform(-54.1,-38.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#0B0505").s().p("AACBGIgDgGIgBgBQgRgbgGgdIABgBIgCg4IADgMIAAgBIADgHQAPgnAFAcIgBAGIgBACIgBACIAAABQgEAGAAAJIAAABIgBADIgFAUIAAAAIAAABIADAxIADAFQAEAbASASIADAGQAAAEAEABIABAAIADAGQABAIgCAAQgFAAgSgYg");
	this.shape_217.setTransform(-53.2,-33.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#B29A8D").s().p("AgEATIACgKIACAAIAAAHIgDADIgBAAgAADgRIABgBIABAAIAAAAIgCACIAAgBg");
	this.shape_218.setTransform(-53.9,-39.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#2A2D2D").s().p("AATBAIgFgIIgNgOIABAAIgBgBIgBgCQgGgJgHgGIgFgPIgBgJQAAgCAHAKQACAEAFAAIACgDIABgCQAFAdARAaIAAACIgBAAgAgDg3IADgIIgDANg");
	this.shape_219.setTransform(-55.5,-33.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#8D827C").s().p("AAKA7IgGgMIgBgDIAAAAIANAPgAACArIgBgCIACADgAgNAYIgCgMIAEAOIgCgCgAgBg1IAAgFIAAAFg");
	this.shape_220.setTransform(-55.7,-34);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#BFA595").s().p("AAAAOIAAgCIABgGQAJgLgLgHIgFAAIAAgCQAGACADACQAIAHgIAOIgDAEg");
	this.shape_221.setTransform(-53.4,-42.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#66625D").s().p("AgOASIAHgWIAKgSIAFABQAMAGgJANQgFgdgPAmIgCAHIAAABIgDAIgAAIAFIACgDIgBADg");
	this.shape_222.setTransform(-54.4,-41.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#7F888A").s().p("AgPgJIgFgFIApAdg");
	this.shape_223.setTransform(-46.2,-45.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#96928F").s().p("AASAeIAAgCIACACIgCAAgAgEARIgBggIgSgOIAVAKIAEAmIAAgCQgBgcASARIAFAFIgFgEQgNgGgCALIAIAJIgFAAIAAAAIgBABIgBAAIgCADg");
	this.shape_224.setTransform(-50.2,-47.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#6D6862").s().p("AADAEQgTgPAWAPIgDAAg");
	this.shape_225.setTransform(-49.5,-53.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#C1B3B0").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_226.setTransform(-48.6,-57.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#9B9191").s().p("AAAAAIgBAAIABAAIACABIgBAAg");
	this.shape_227.setTransform(-48.4,-57.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#7B6F6B").s().p("AgSgDIAfAAIAGAHIglgHg");
	this.shape_228.setTransform(-44.5,-56.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#BCAFAA").s().p("AABADIgFgGIABAAIAIAHIgEgBg");
	this.shape_229.setTransform(-42.8,-56.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#7E7871").s().p("AgKgDIAPADIAGACIgVACg");
	this.shape_230.setTransform(-54.1,-52.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#B2B6B1").s().p("AgGAIIgGgDIAOACIAGACIgGABQgEAAgEgCgAAJAHIgDgQIAHAPIAAACIgDABg");
	this.shape_231.setTransform(-52.3,-52.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#788080").s().p("AAQALQgNgIgKgIQgZgWATACIADAFIgDgCQgLALApARIAGAVg");
	this.shape_232.setTransform(-53.2,-55);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#9D9B95").s().p("AgDACQgFgGANAEIgIACg");
	this.shape_233.setTransform(-59,-72.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#5C564D").s().p("AghAAQAXAAASgEIArAEIg1ACQgLgCgNACIgBAAQgOgDAFAGIAAAAIgBAAQgbgCAfgDg");
	this.shape_234.setTransform(-55.7,-72.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#574C3F").s().p("AAjACIAdADIAEAEgAhDgHIAEgBIAlADg");
	this.shape_235.setTransform(-47.2,-73.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#778E96").s().p("AAFAdIgKg9IAAgCIALBFIgBgGg");
	this.shape_236.setTransform(-76.2,-52.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#7E675A").s().p("AAAgGIAAAEIACAEIgDAFg");
	this.shape_237.setTransform(-73.6,-67.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#C0A99F").s().p("AAAgBIAAAAIABADIAAAAg");
	this.shape_238.setTransform(-73.5,-67.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#8A9EA2").s().p("AABgpIACANIAAABIABA9QgEAAgBADIgCAFg");
	this.shape_239.setTransform(-76.5,-60.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#B0ADA7").s().p("AAAgBIADAAIgFADIACgDg");
	this.shape_240.setTransform(-76.1,-68.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#C1BDB7").s().p("AAAgCQAVACgdADIAIgFg");
	this.shape_241.setTransform(-70.9,-71.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B3A79D").s().p("AgMAKIAAgDIACgEIADgEQAJgPALAMQgIAEgHAHIgJADIgBAAg");
	this.shape_242.setTransform(-72.3,-68.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#84837F").s().p("AAAAOIgCgWIgCAAQACgGACgGIAFgDIgEAzgAADgYIACgDIAAAEg");
	this.shape_243.setTransform(-76.3,-66.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#5E4D43").s().p("AgEABIAIgDIABAAIgJAFg");
	this.shape_244.setTransform(-72.4,-71);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#6B6055").s().p("AgNAGQgHgRAhAGIACADIgDACQgLgMgJAOIgDAFIgCgBg");
	this.shape_245.setTransform(-72.2,-69.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#504338").s().p("AgEAAIAJgBIgHADg");
	this.shape_246.setTransform(-70.4,-69.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#4E4A47").s().p("AgGgEIANgRIgIAUIgEAXg");
	this.shape_247.setTransform(-10.3,-50.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#BDB1A7").s().p("AgGAAIADgGIACgBQgJAOARgDIABAAIgJADIgDABQgEAAACgIg");
	this.shape_248.setTransform(-3.1,-49);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#695E56").s().p("AgBAOQABgFAAgGIAAgCIASgTIgBAGIgCAGQgDAMAIgEIACAAIAAABQgQAPgKABIADgFgAgVAIIABAAIAAADIgBgDg");
	this.shape_249.setTransform(-5.3,-48.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#85665C").s().p("AgDAZIAEgSIgGgMIADgSIAAgBIgBAMIAAABIAJAQIgGAOIAAABIAAABIgCAEIgBAAg");
	this.shape_250.setTransform(-7.1,-50.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#BFB9B6").s().p("AACAPIAAAAIgBABgAgBgPIABAAIgBAAg");
	this.shape_251.setTransform(-7.3,-49.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#657073").s().p("AAAASIAAAAIAAACgAAAgTIAAAAIAAACIAAgCg");
	this.shape_252.setTransform(-5.3,-50.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#61605E").s().p("AAIgFIgRALIgDAAIAZgRIgMAXg");
	this.shape_253.setTransform(-4.6,-55.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#97918D").s().p("AgDAEQgCgEgBgDIAAgDIABgBIACAAQgFALAMgEQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIgDAHIAAABQgEAAgDgEg");
	this.shape_254.setTransform(-5.2,-54.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#634F4A").s().p("AADgJIAAAAIAEANIgNAGg");
	this.shape_255.setTransform(-6.5,-53.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#B2A49F").s().p("AgLAKIABgLIACgCIANgGQAKACgFAKIAAAAQgLgUgJAaIAAABIgBAAg");
	this.shape_256.setTransform(-6.3,-52.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#837671").s().p("AAAAAIABAAIgBABg");
	this.shape_257.setTransform(-6.4,-58.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#5C5D5C").s().p("AgOAEIAAABQgCAKAJgLIAHgGIARgOIgOAPIgKAMIgEAEIgEACQgDAAAEgNg");
	this.shape_258.setTransform(-6.1,-57.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#C9C4C1").s().p("AAOgIIgCACIgMANIgHABIgGABg");
	this.shape_259.setTransform(-7.7,-61.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#DBD4D1").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_260.setTransform(-6.1,-59.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#B7B3B3").s().p("AgGADIAAAEIADAAIAAABIgHAGgAgCgFIALgHIACgBIAAACIgMAHIgBAAIAAgBg");
	this.shape_261.setTransform(-5.8,-58.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#C6BCB7").s().p("AAAgEIgKARIAAgBIAAgMIASgNIADAaIAAACg");
	this.shape_262.setTransform(-13.4,-50.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#746A62").s().p("AgCgCQADgFAGgBIgNAQQAAgGAEgEg");
	this.shape_263.setTransform(-10.3,-51.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#7D7771").s().p("AAAAEIAAAAIgBgEIACgFIAAAJIAAAAIABACIgCgCg");
	this.shape_264.setTransform(-13.9,-54.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#4F433A").s().p("AgDACQAHACAJgGIgCACQgHAFgEACIgDgFgAgMgGIACAFIAAAAIACABIgCAAIgCABIAAgHg");
	this.shape_265.setTransform(-12.8,-53.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#6B605A").s().p("AAAAAIAAAAIABABIAAAAIgBAAIAAgBg");
	this.shape_266.setTransform(-17.7,-49.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#ADABA1").s().p("AABAAIgKAAIAFgCQAWACgNADQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_267.setTransform(-19,-51.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#AFB1B3").s().p("AgDAJQgNgPAYgEQgTAIAMAHIAAABIgEAFIAAgCg");
	this.shape_268.setTransform(-15.5,-56.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#6F6E6A").s().p("AAMgOIgZATIgDAAIAhgZIgRApg");
	this.shape_269.setTransform(-11.1,-56.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#AF9B93").s().p("AgGABIAKgLIADAAIgMAUIgBABg");
	this.shape_270.setTransform(-13.2,-55.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#686E6E").s().p("AgOAfQgNgHAVgJIATgbQAAgIgIgGQgFgEgHgBIATACIAIAJIghA0IgBgBg");
	this.shape_271.setTransform(-14,-59);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#544842").s().p("AgHACQgBgCgBgEIATAAIAAABIgCACQgHAGgDAAQgDAAgCgDgAACAAIACAAIgFgEQgBAAAEAEg");
	this.shape_272.setTransform(-11.4,-62.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#8E817D").s().p("AADACIgCABQgIgJAKAIg");
	this.shape_273.setTransform(-11.3,-62.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#837E7B").s().p("AgFAHQgDgBgBgFQgCgEABgEIABAAQAAAOAHgIQAEgHAJACIgIADQgBAGgCADQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCgBg");
	this.shape_274.setTransform(-16.7,-61.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#A0A09D").s().p("AgSgGIAJgDIAIABQAGABAFAEQAJAFAAAIg");
	this.shape_275.setTransform(-14.5,-61.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A6A19D").s().p("AgHADIAPgFQgBAAAAABQAAABgBAAQAAAAgBAAQAAAAgBAAIgLADg");
	this.shape_276.setTransform(-2.2,-62.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#62534B").s().p("AgEAAIAEgDQAAADAFADIAAABIgJgEg");
	this.shape_277.setTransform(-3.9,-66.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#6E696A").s().p("AgGgGIAAABQgIAIAIgBIAGgBIgWAPgAAVgPIABAAIgDACg");
	this.shape_278.setTransform(-8.4,-60.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#565953").s().p("AgHAEIAOgHIgDADIgKAEg");
	this.shape_279.setTransform(-8.4,-65.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#868B8A").s().p("Ag6AUIACgFQAzgkBAABIgGABQg8AFgzAjg");
	this.shape_280.setTransform(-3.8,-70.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#8D7E77").s().p("AgOAFIAdgJIgHADIgUAGg");
	this.shape_281.setTransform(-1.7,-68.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#91877D").s().p("AgdACIATgBIgJABgAASAAIAEgBIAIAAIgEABIgIAAg");
	this.shape_282.setTransform(-22.5,-51.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#92857D").s().p("AABABQgTgDAaACIgFABIgCAAg");
	this.shape_283.setTransform(-28.4,-51.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#ACA29B").s().p("AhWARIAWABQBzATB2giIAEACQAPAHADgOIAFgFIgHAOIgcAGIgOgCIgIAGIgqAGIgOABQgbACgcAAQg4AAg6gJgAi/gTIgBgBIgDgFQAPAIAIADIACAEg");
	this.shape_284.setTransform(-35,-55);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#2B2517").s().p("AgCAEIgEgBQgDABACgGIABAAIANgBIACABIgBAAQgEAGgEAAIgCAAg");
	this.shape_285.setTransform(-26,-52.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#5E544B").s().p("AAVAcQg/gGhCACIgPgGIBkAFIABgBIAAAAIgBAAQhBgCg4gYIAGACQAbAHAbACQBUANBVgGIgBAAQgCAHADgBIAEABQAGACAFgJIABAAIgDgBIArgGIgMAJIATAFIgEAAIgSgBIgLADIgTACIAKAAIgLABIgDABIgOgBIgPAEIgqgCgABFAZQADABADgCIgOgBQgEAAAMACgACoAbIAAAAIgBgBIAGABgAC5AKQgBgHgJACIgMgCIAbgFIgDAIIgBAFIgBAAIAAgBgAi9gdIAVAJIACACQAHAGAIAFQgTgKgTgMg");
	this.shape_286.setTransform(-35.2,-54);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#ADA29A").s().p("AAEACIgIgDIAIABIAAACg");
	this.shape_287.setTransform(-37.8,-69.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#584B3F").s().p("AgSgEIAPACIAWAHg");
	this.shape_288.setTransform(-38.5,-71.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#534338").s().p("AgVgHIArANIgPABg");
	this.shape_289.setTransform(-33.5,-70.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#92887F").s().p("ADEATIgsgNIgJgDIgXgHIgPgBIgEgEIAaAEQAMABAKAEIANADIgFgBIAcALIAjAMgAjSADIACAAQAwgPAwgHIhNAZIgeAEIAJgHgAjQAHQAdgDgUgDIgJAGgAgagXIgEABIhIACQAmgFAmACg");
	this.shape_290.setTransform(-50.9,-71.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#C6BCB4").s().p("AgNgEIAFABIALADIACABIAJAEg");
	this.shape_291.setTransform(-33.8,-71);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#86867F").s().p("AgTgBIAAgDIAnAHIAAACg");
	this.shape_292.setTransform(-35.4,-69);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#878883").s().p("AgjgJIAAgCIBHAXg");
	this.shape_293.setTransform(-29.8,-67.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#7D6D62").s().p("AAMAKIgJgKIAoAPIACACQACAEADAAIANABIAKAEIAJgEIADAAIgNAGgAgogIIgsgTIAYAGIA5AUg");
	this.shape_294.setTransform(-22.7,-67);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#EDE4DF").s().p("ABMAdIATAAIgJAEgAAPAIIgBgCIgFgBIg5gTIgjgMIgJgFIgCgBQAwAPAwALIAGADQAUASAZACIADAFg");
	this.shape_295.setTransform(-24,-67.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#959A96").s().p("AApAUIgKgOIhJgZIAsAPQAJAAAHABQAHACAGACQAMAHAAAJIAAABIgBACIgBAAg");
	this.shape_296.setTransform(-21.9,-64.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#382D21").s().p("AAAABIABgBIgBABg");
	this.shape_297.setTransform(-99.7,-9.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#7B7267").s().p("AgJAHQACgFAHgDIAAgBIADgCIAAABIABgBIACgBIAAAAIADgBIABgBIgQAOIgBABg");
	this.shape_298.setTransform(-100.4,-9.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#ADA39A").s().p("AhHAjIAAABQgHAEgCAFIACABIgnAOQAWgOAYgLgAg8AeIAYgJIAAAAIgIAMIgIADIgZAJgAB2g7IgEACIg1AbQAcgQAdgNg");
	this.shape_299.setTransform(-93.3,-12.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#1C150E").s().p("AgGACIADgCIAGgBIAFgBIgPAFg");
	this.shape_300.setTransform(-84.2,-21.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#60574D").s().p("AhgBBIABgBIgBABgAA1gxIADgDQAWgIATgEIgRAHIgPAGIgHACIgCACIgBABIgFACg");
	this.shape_301.setTransform(-90.4,-16.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#72645C").s().p("AABAAIAAAAIgBABIABgBg");
	this.shape_302.setTransform(-85.6,-33.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#9B918A").s().p("AgaADIAFgEIACgCIARADIgHAEIgRgBgAAZABIACAAIAAAAg");
	this.shape_303.setTransform(-83.6,-33.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#A5978E").s().p("AgGAHIADgFIAJgIIABAAIgNANg");
	this.shape_304.setTransform(48,65.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#6A6157").s().p("AAAABIABgBIAAAAIgBABIAAAAg");
	this.shape_305.setTransform(48.8,64.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#B3A99F").s().p("AAHgGIABAAIADAAIgBABIgCADIgSAJg");
	this.shape_306.setTransform(-0.2,51.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#DED4CC").s().p("AgBAAIALgCIgBABIgGACIgDACIgFAAQgKAAAOgDg");
	this.shape_307.setTransform(21,32.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#C6BDB4").s().p("AgDAAIAAAAIAHABIgBAAIAAAAg");
	this.shape_308.setTransform(24.4,31.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#9E958D").s().p("AAHACIgHgCIASACIgJABIgCgBgAgRgBIAHABIgBAAIgGAAgAgJAAIgIgCIANACIgFAAg");
	this.shape_309.setTransform(25.8,31.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#6B625A").s().p("AAAgDIgMAHQgDgOgJAFIgBABIAAgCIAAgDIAXAAIALAGIADADIAAgBIAFACIADAAIAGAEIAAAAIgGACIgCADIgDAAQgLAAgEgNg");
	this.shape_310.setTransform(22.9,28.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#6D5D55").s().p("AgDAAIAFAAIABAAIAAABg");
	this.shape_311.setTransform(38.1,30.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#ACABAA").s().p("AARgRIAAACIghAhg");
	this.shape_312.setTransform(9.5,42.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#D2C9C0").s().p("AIfBvIgFgQIgOgUIgIgLIgGgHIgQgYIgCAAIgJgGIg4AKIgLAAIhYALIgNADIgHABQghAIgKgFQgGgDAEgJIAjgUIALgDIgtAgIDlgbIAOARIADgDIABgBIAAABQADARAOgEIgGAMQAHAPAJgQQAIABAEAFIADAGQADAIgMgCQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgLADANAJIAGASgAIZBDIACAIIAAABQAFACACgCIAAAAIACgBQAGgBgGgDIgJgEIgCgBIAAABgAJwACIADgBIggBtgAH/AlQAMgKAIARIgCAGQgBgRgRAEgAE3AUIAFgCQAJAAAGgEIACgCIABAFQACAKgHAAQgGAAgMgHgAL3gTIgYgHIgWgZQgHgEABgCIgEgGQAygEANArIBpgBIgagMIAhALIACAAIgFABIi8AWIgBAAIgvADgALkgjIAAABQgDAPAQgJIAAgOIgmgLgAM6guIABAAIAAABgAttg9IAAgBIBHgtIAFgDIgBADIgzAhIgaAPIACgCg");
	this.shape_313.setTransform(88.7,57.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#836F61").s().p("AgkAXIBIgtIAAABIhFAsg");
	this.shape_314.setTransform(4.3,48.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#766B60").s().p("AgCACIAFgEIgBACIgEADIAAgBg");
	this.shape_315.setTransform(8.3,46.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#120D09").s().p("AiJCDQAPgRASgLIAEgDIAEgCIAFgDQAKgFAMgEIAFgCIACAAIAGgCIAQgOIAYgNIgaAVIgSAOIAAAAIgGAEQgMAJgHALIgDABIgLAFQgIADgHAIgAieCDIgCgFIgDgKQgGgIgHgGIgHgGIgFAAIgCAAQgHgJgJgIIgCgCIACABIgBgBQgFgFgEgHIgPgKIgegUIgBAAIgKgBIgSgBIgCgCIgCgDIAAgBIAAgDIAAgBIABgBIABgCIADgCIAAgBIADAAIAEAAIAdABQANALAPAJQAPAIALAOQAVAMAPARIAFAHIAEAFIAIANQAEAIADAJgAAAAnIASgJIA4gmIA+giIA0gTIAVgOIAngXQADgBABgCIAAgBIAfgSIAMgKQgLARgNAQIgEAGIgHAEIhJAtIgBAAIgRAOQgkASgnALQg3ARgvAgg");
	this.shape_316.setTransform(-18.1,55.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#656860").s().p("AgSAKIAlgUIglAVIAAgBg");
	this.shape_317.setTransform(4.7,46.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#A8A8A1").s().p("AgXAOIAvgbIgCADIAAABQgCACgDABIgmAUg");
	this.shape_318.setTransform(5,46.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#8A8C87").s().p("AgmASIBKgiIADAAIAAABIgVAPIgzASg");
	this.shape_319.setTransform(-1.1,49.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#AFA49D").s().p("AgLAFIAAgCIAEgDIAAAAQASgOABAOIgEAAIABAAIgKACQgSAEATgBIgFADIgGgDg");
	this.shape_320.setTransform(21.1,32.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#665E53").s().p("AgEAEIABgHIACgBIAGAIg");
	this.shape_321.setTransform(12.6,33.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#615950").s().p("AAAAHIgFgFIACAAIABgBQgCgGgKABIgCgBQADgCADACQAuAIghAEIgDAAg");
	this.shape_322.setTransform(32,20.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#54483B").s().p("AADgCIABAEIgFABQgFAAAJgFg");
	this.shape_323.setTransform(33.7,18.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#A39C96").s().p("AAEgCIAFgEIAGABIAAAAIgBAEIgLADIgRAFIASgJg");
	this.shape_324.setTransform(32.5,17.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#5D5752").s().p("AgFABIARgEIgXAHIAGgDg");
	this.shape_325.setTransform(31.6,17.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#9F8F83").s().p("AgGABIANgCQgFADgDAAIgFgBg");
	this.shape_326.setTransform(28.7,19);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#A59B98").s().p("AgGgBIgBgBIAEgBQAIgBADAGIgCABIgBAAIgEABQgFAAgCgFg");
	this.shape_327.setTransform(31,20.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#605247").s().p("AgTABIAngEIgSAHg");
	this.shape_328.setTransform(29,5.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#A09E9A").s().p("AANAMIgagWIAAgBIAbAXIgBAAg");
	this.shape_329.setTransform(22.8,2.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#58554D").s().p("AAiAnQgBgBgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgCgBAAgDIgCgJIAKAPIgBAAgAASAMIADAGQgEgEgGgCIgagXIgdgbIBZA5g");
	this.shape_330.setTransform(23,2.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#BBB1AD").s().p("AgIgBIARAAIAAADIgRgDg");
	this.shape_331.setTransform(36.5,8.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#DAD1C8").s().p("AgIAAQgBAAAMAAIAGAAIAAAAIgQAAIgBABIAAgBg");
	this.shape_332.setTransform(65.8,33.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#B9AEA5").s().p("AgPAAIANAAIASAAQgNAAAAABIgSgBg");
	this.shape_333.setTransform(64.5,33.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#988C84").s().p("AggABQAUgCAtABIAAAAIgNABQgZgBgbABg");
	this.shape_334.setTransform(61,33.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#A49990").s().p("AAEgBIgBABIgGACg");
	this.shape_335.setTransform(74.6,32.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#84776F").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_336.setTransform(75,32.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#211A14").s().p("AkVAbQgCgDgFAEIAAABQgIgBgCgHIgHgJIAbgJQAPgEAIgJIABAAIAEgCQAHgDAFgFQAKgJABgMIABgBQAKgFACAPIAOgIQAEAQAOgCIACgDIAGgCIAHACIACAAIAJAIQABACADAAIBkADIAHACIAvACIAmABQAcACAdAAIAGAAIAUgBIACABIAPAFIAUgGIAOAJIBSACIAhgHIAIAKIhAgCIiaAKIgPgCQhSgNhVABIgGgEIgQADIgOgGIg0gCIgDAJIgBAAIgFACIAAgJIgdAGIgGAKQgHgBgKADIgCABIAAAAIgBACQgPALgJATIgBACQAAgIgBgJg");
	this.shape_337.setTransform(42.6,32.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#53463D").s().p("AgmAHQAPAFgCgMIACgCQAYAIADgTIAGAAIANADIAIgDIAIAAIguAYIgBAAIAAAAIABAAIgEADIgHAAg");
	this.shape_338.setTransform(48.9,22.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#989590").s().p("AALgBIgFACIgQABg");
	this.shape_339.setTransform(43.3,23.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#A79991").s().p("AgWAAIAFgEIABAAIAFACIATAGIgFABgAATACIAEABIgIABg");
	this.shape_340.setTransform(46.2,23.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#110C09").s().p("AAlAiQgIgLgRgCIgPgDQgagIgagFQAhgEgvgJQgDgCgDACIACABIgEABIABABQADAHAJgCIAGAEQgZgEgagBIgDgJIAJgCIAFgBQAHAFAHgIIAGgDIAEgCIAYgIIALgEIAAAIQgOAIAQgDIAEAHQAEAGAJAEIAAABIAAAAQACACADABIAIAAQAJADAMAAIBHACIAcACQgCAVgZgJIgDACQADANgQgFIgFgCIgBAAIgWAFIgEABg");
	this.shape_341.setTransform(37.9,20.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#8B827A").s().p("ABCAKIAVAAIgIADgAgnAFQgMAAgKgCQAVABAUgEIABAAIANACQASAEAUACgAhKgBQgJgFgDgGIACACQAFAFAFADIABABg");
	this.shape_342.setTransform(43.3,20.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#B9A8A0").s().p("AAAAAIADAAIgFABIACgBg");
	this.shape_343.setTransform(44.9,10.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#60574C").s().p("AgDgHQAAAAABABQAAAAABAAQAAABABAAQAAAAAAABIAEAMIgHgPg");
	this.shape_344.setTransform(60.1,11.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#7C6F65").s().p("ABqAQQAFgCAEgDIABAAIAAAAIgBAKIgJgFgAhygTIADgBIACAAIgGACIABgBg");
	this.shape_345.setTransform(43.3,5.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#9B948E").s().p("ACsAvIgLgHIALACIACACIACAFIgEgCgABfAMQgZgOgcgFIgEgBIgDAAQgSgDgRAAIgFgEIBAAHQAUAGAPAGIATAIQgJgBgJABgAiYgVIABAAIAGABIAVAEIASgJIAVACIgRAAIgXALgAiggXIgFgQIgKgJIABAAQAGACADAEIAEAGIACAJQAAADACACg");
	this.shape_346.setTransform(41.7,8.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#998D84").s().p("AAAgDIABAEIgBADg");
	this.shape_347.setTransform(57.3,5.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#2F2217").s().p("AAAAAIABAAIgBABg");
	this.shape_348.setTransform(63.7,12.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#BFA495").s().p("AAAAAIAAAAIABABg");
	this.shape_349.setTransform(63.7,12.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#64574D").s().p("AALAMQAJAFAJAEIACACQgFAGgIAEgAgRAVIgLgDIgCgBIAMABIADAFgAgcggIAAABIAAAFg");
	this.shape_350.setTransform(60.7,10.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#B6A498").s().p("AAAgBIAGABIAAAAIgLACIAFgDg");
	this.shape_351.setTransform(83.4,43.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#777469").s().p("AgCAAIAEAAIABAAIAAAAIgBABg");
	this.shape_352.setTransform(83.8,43.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#72665C").s().p("AAAAAIADAAIgFABIACgBg");
	this.shape_353.setTransform(83.7,43.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#19110D").s().p("AgCAEIgDAAIABgBIAKgGIgHAIg");
	this.shape_354.setTransform(84.3,42.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#4E4137").s().p("AgEgEIAJADIgCABIgHAFg");
	this.shape_355.setTransform(84.5,29.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#2E281F").s().p("AgFACIAFgEIADgDQgBAHAIABIgCABIgRACg");
	this.shape_356.setTransform(81.9,30.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#1E140E").s().p("AgTAJQALgLAGgOQAIgEAJAIQAGAAgCAFIgBABIgTAIIAAAKIgLAHQgHgCAAgIg");
	this.shape_357.setTransform(84.1,28.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#100A08").s().p("AAAAJQgCgBgDgFIACgLQAIAJABAEIAAACQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAIgCAAg");
	this.shape_358.setTransform(85.9,21.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#372C21").s().p("AAAAoQACgFgGAAIgBgkIgBgNIAAgHQADAFADABQAEAAABgCIACAYIAAAEQAAANgDAMIgEAFIAAgBgAgEghIAFgHIACADIABASQgBgEgHgKg");
	this.shape_359.setTransform(86.1,23.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#675D54").s().p("AmFB7IAEgDIAighQAJAAAHgJIgNAUIgNALIgeARgAlKBGQAIgSAAgZIAAAAQAGgEABADQACAJgBAIIgDAGIgGAIIgIAOIABgBgAAtALICagLIBBACIgIgJIgiAHIhSgCIgOgJIAwgCIALADQAFACAHAAIAMABQAcACAmgEQASAGAUgGIAbgHQAFAAAEgCIgDADIARgBIgGADIhGARIAAgBIgJAEIgWAFIgBABIgQgBIgDABIghABIABgBIgHAAIgSgCIAAgBQguAAgUACIgpACIgBAAIgagDgAkgAJIAAAAIgBABgAkNAGIAGgLIAdgFIAAAJIgGABQgBgMgTANIAAAAIgEADIAAADIgFgBgAjOgEIgEgBIgNgCIAAABIgBACIgEABIADgKIA0ADIAOAFIAQgCIAGAEIgyACgABbgKIAEAAIAQgBIAPAAIgUAGgAhOgQIAAAAIAwADgAF2g1IABgDIABAAIAAAAQAFgNACgOIACABIABgNIAFAKIABAkQgJgIgJAEgAGDhqIACgTIABATIAAAIg");
	this.shape_360.setTransform(46.4,32.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#F8EEEE").s().p("AAAACIAAgGIABACIAAAHIgBgDg");
	this.shape_361.setTransform(84.8,20.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#F6F0E9").s().p("AAAAAIAAgBIABgBQAAABAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABIAAABIAAgDg");
	this.shape_362.setTransform(84.8,17.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#DED5CF").s().p("AAAAcIgCgGIAAgNIACADIABAFIACAIIABANgAgDACIAAgGIAAgRIACgCIABAbIgDgCgAgDggIABgFIABALIgCACIAAgIg");
	this.shape_363.setTransform(85,19.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#493529").s().p("AgBgIIABAAIAAABIACAHIgCAJg");
	this.shape_364.setTransform(86.1,13.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#EAE1DB").s().p("AnpDtIAbAAIABACIgcgCgAC9gBIAJgBIgFACgAHlihIAFgCIgGAIIABgGgAFojoIgPgGIAAAAIAAAAIAiAJIgTgDg");
	this.shape_365.setTransform(56.4,41);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#A69E98").s().p("AAMAFIghgIIAAgCIAjAHIAIAEIgKgBg");
	this.shape_366.setTransform(93.1,17.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#76685D").s().p("AACAeIgBgCIgBgSIABgRIACABIABA9gAAAgfIgDgOIADgJIAAACIABAEIAAABIAAAQIgBAAIAAAAg");
	this.shape_367.setTransform(86.4,19.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#271B15").s().p("AADApIgDgVIAGAFIABAAIgBASgAgGgmIACgCQAGgHgBASIABASIAEANIgDABIgCACIgBACg");
	this.shape_368.setTransform(85.8,15.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#5C534D").s().p("AAFA3IgDg7IgHgKIgBgGIABgkIABACIACAKIACAEIABABIACAAIAAABIAAgBIAEAAIAFAOIAAAFIAAACIAAAEIgBAAQABgSgHAHIgCADIAGAtIAAAAIgBACIAAAFIAAACIADADIACAVIgGAHIgBAMgAgLhFIgBgFIACAEIADAIIAAABg");
	this.shape_369.setTransform(84.8,14.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#372D26").s().p("AAFALIABAAIAAABgAgDgFIgCgFIABgBIADAIg");
	this.shape_370.setTransform(84.5,9.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#ABA29C").s().p("AlxCiIAag0IABgBIAAAAIgEgBIgRAAIADgLIAKAAQACAIAIAAQAAAZgJASIAAABIgFAHQgHAJgIAAgAC/BGQAdAAAdgFIACABIAFACQgZACgUAAIgUAAgACcBAIgxACIgPAAQAhgCAggDIAGAEIADACIgKgDgAgxBAIgwgDIgBgBIAKABIAMAAIAYAAIAoAEgAjxAmIABgGQADAEAFAFIgEAAgAj/AeIgYAAIAAgEIAGgCIATADIALAJgAFlAVIAAAAIAAAAgAFsgFIABgJIAAgJIADAGIgBANIgDgBgAFvgiIAAgHIgBgcIAAAAQABAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIgBABIgBgLIgBAEQgBgTgDgUIAIAKIACA9IgBATgAFliHIgBgLIABgPIAAgDIACAEIAAAlQgCgFAAgHg");
	this.shape_371.setTransform(48.2,24.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#F9F1EB").s().p("AAAgHIABACIAAANIgBgPg");
	this.shape_372.setTransform(83.8,9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#D7D2CC").s().p("AAAAEIgBgJIADAHIAAAEIgCgCg");
	this.shape_373.setTransform(83.7,7.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#F4F1EB").s().p("AhBBfIgBABIgDACIAEgDgAARhhQAbAHAaAIIAAAAIg1gPg");
	this.shape_374.setTransform(106.6,22.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#241912").s().p("AgEAHIgCAAQADgDABgEIAAgBIgCgFIALADIgKAKIgBAAIAAAAg");
	this.shape_375.setTransform(111.8,24.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFF00").s().p("ATHHAIgHgSQgNgJAMgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABABQALACgCgIIgEgHQgDgEgIgBQgKAQgGgPIAFgMIABgBIAAgBIAAgBIADgFQgJgRgLAKIgBAAIAAABIgBABIgCACIgPgQIjlAbIAuggIABgBIAAAAQAbAPgEgRIAAgFQADgDAAgFIABgBIA5geIgFgkIgXgXIAFgBIACAAIABAAQAJgEgHgLIATgCICkg2IACgBIAKgDIA5gTIALAhIgCAAIAAABQgWAQAKgOIAEgFIgSgJIAAAEIgCAAIABAMIAAASQgMAKANAHIAEABICBAbIABAAIAQAEIAFABIAMAEIASAIIAGACIAYAKIAAABIAAADIABABQAAAEAFAAIABAAIAMAEIAZAMIhoABQgOgrgyAEIAFAFQgBACAGAFIAWAZIAZAGIh4AUIgMABIgBABIgCABIgdBsIAAABgAQNFVIAAACQgBAHAHABQADADABgGQACgIgGAAIgGABgAQxFSIAAABQgBAMALAAIAAABQAHgEAFgHIABAAQAAgEgCgDIgBAAIgIgBQgIAAgEAFgARpFLIAAABQAEAPAQACIABgBQAEgCADgDQgCgGgDgDQgIgGgGAAQgFAAgEADgAVQFDIAMgZIgZAAIACAEIAAAAIAAACIAEAMIADgBgAUXEoQAAAJADAGQAEAKAJABIAAAAQAIgLgHgNIgBgBQgEgEgFAAQgDAAgEADgATPDQIABAHIhHAxQgDACgCADQAAABAAAAQAAABAAAAQAAABAAAAQAAABABABIAHALIgJAdIAHgHIAigiIBKgCIgEgIIACAAIgDgBIgKgQIgigCIASgUQAFAFgDgHIAHgJIAAgBIgEgEIgIgDIgFADgAn8HAQAGgJAJgDIAKgEIAQgFIAFgJQAEgHAFgDIgCgCIAAAAIASgOIAbgUIAIgGQAvggA4gRQAngMAkgSIATgKIAZgPIAzghIACgDIABgCIAEgGQANgQALgRIANgUIAFgHIAHgOIAHgIIADgGIABgDQAJgSAOgMIACgBIACgBQAKgDAHABIAEABIAHADIAEgDIADgCIAGgDIADgCIAHgCIAFgCIAAAAIAFgBIAHgBIAAAAIABAAIABAAIAEAAIAFABIAHADIACABIAKgBIAygCQBUgBBUAOIAPACIAaADIAAAAIAqgCQAaAAAaABIATABIACAAIARAAIAggBIADgBIARABIABgBIAWgFIAHgCIACgBIBFgSIAHgDIABgBIALgHIAJgFIACgCIgLgDIAUgJIAFgFQADgLAAgNIAAgFIgBg9QAqAVAygBQAGAFAHABQAVAFAUAKIAMAFIABgBIAFgBQAPAEADAJIAGADIgBACIgEACIgBAFIgEAKQgKAVgWAGQgNAFgKAKQgJAIgMAEQgXAKgVANIgYARIgSAPQgWAVgaAUIgsAgQggAYgcAdQgXAZgfAMIgMAFQgWAHgVAKQhGAkg9AwIgBABIgDACIgKAJIgDAFIAAABQgIANgIAMgAhuGcIgBgCIgbAAIAcACgAIcCrIAEADIAFgEgA4HiCIAagLQAYgJAVgMQA/giAzgvIBag7IAEgDIAogOIABAAIAZgJIAIgEQAkgNAhgUIAngZIAyghIAFgCQASgIATgHQAKAIANAHQAGADAIACQAaAIAZALQAPAGAMgIIAFgEIAWAtIgsBOIgOAfIAAADIgJA8IgJBRIgOALIgGAGIgpAfIgEAMIgEADIgbAJIgRAOIgQASIglAVIgcAgIgEANIgOASIgPAIIgkAJIgKACIgwANIgOAFQgPAAgLAJQgKAKAAAOIAAAJIgGACIgKAKIgDABIgIAGIAAAAIgDABQgLAHgJAJIgTAQIgFABIgEACIgYAUQgKAKgNACQgEAEgBAGIgBADIgEACIgGAFIgFAGIgBADIgBABQgbAQgXAZQgEAFgDAGIgBAAIgDACIgEAFIgBAEQgSAKgQAPgA2+AOIACABIgBgPIgBAOgAwukZIABABIAAgBIgBAAgAQADqQgGgCgIgMIgDgGQgKgRAMAHQAGABABgHQAAgFgBgGQgBgDgCgBIgFgGIgDAEIgDABIAAACIAAACIgFAKIgXgcICmAXIhiAfIgCABIgBABIgDABIgEAGQgDADgDAAIgBAAgAUvCVIAGgEIAIgEIAVgJQAHABgGANIgiARQgTgRARADgAKLheIABAAIgBABIAAgBgA01ksIAGgDIgFAEgAwtm9IAFgBIgDAFIgGACg");
	this.shape_376.setTransform(21.3,23.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#9B897D").s().p("AAAAAIABAAIAAABIgBgBg");
	this.shape_377.setTransform(138.7,18);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#DED6CF").s().p("AAAAFQgDgCgCgEIgHgOQALANAMALIAAACIAAACIACADQgGgGgHgFg");
	this.shape_378.setTransform(75.8,-11.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#6B5242").s().p("AAAAAIAAAAIAAABg");
	this.shape_379.setTransform(67.6,-23.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#7D6355").s().p("AAGAMIgTgiIAAgBQAOAXANAYIgIgMg");
	this.shape_380.setTransform(69,-21.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#5D5D5C").s().p("AAGALIAGACIADAFIAJASQgKgLgIgOgAgXgjIAFAGIAAADIgFgJg");
	this.shape_381.setTransform(73.6,-17.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#9EA1A1").s().p("AABAMIACAAIgBAGIgBgGgAABgNIgDgBIAAgDIAFACIAAACg");
	this.shape_382.setTransform(54.8,1.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#685E58").s().p("AgDAHIAAgBIAGADgAACgHIABgCIABAAIAAACIgBABIgBgBg");
	this.shape_383.setTransform(54.9,-1.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#819294").s().p("AAHAgIAAgCIABACIgBAAgAgHgfIABAAIABAEg");
	this.shape_384.setTransform(54.5,-5.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#676061").s().p("AgBgBIAAAAIgEgFIAHAEQAHAEABAGQgFgFgGgEgAgIgGIgCgBIAEABIABADIgDgDg");
	this.shape_385.setTransform(48.9,-20.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#B5A19A").s().p("AAHAKIgOgMQgBgEABgDIABAAIACABQgEAHAQALIgBAAg");
	this.shape_386.setTransform(49.4,-22.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#B6B2AD").s().p("AAbA+IgUgyIgEgPIAZBBIgBAAgAgag5IgBgDIAAgBIAAABIAFAFIgEgCg");
	this.shape_387.setTransform(51,-14.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#B6A89F").s().p("AABAGQgCgBgCgDIgDgEIgBgEIAJAEIABAAIAFAJIgBAAIgGgBg");
	this.shape_388.setTransform(53.1,-16.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#75645A").s().p("AALAaIgHgMQACACADACQAEABADAAIAFAMgAgUgeIABAAIATAjIABAEg");
	this.shape_389.setTransform(52.3,-18.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#ACB7B5").s().p("AAAAHIAAgCIABgMIAAAKIAAAFIgBgBg");
	this.shape_390.setTransform(53.6,-37.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#C0A69B").s().p("AAIAHIgSgPIgCAAIgCAAIAAgDIAdAXg");
	this.shape_391.setTransform(59.5,-34.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#BBA096").s().p("AACAOIgGgHIAGgUIADAZIAAACg");
	this.shape_392.setTransform(57.5,-37.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#B39C92").s().p("AgDgCIAGAEIgCABQgCAAgCgFg");
	this.shape_393.setTransform(42.2,-34.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#64524C").s().p("AAEACIAAAAIAAABgAgEgCIABAAIABABg");
	this.shape_394.setTransform(42.2,-34.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#231E1A").s().p("AgDABIgBgBIAEgCQACgDACABIgBAJg");
	this.shape_395.setTransform(42.3,-34.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#AC9F9A").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_396.setTransform(43.1,-36.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#7C7A7A").s().p("AgIALIAMgVIACAAIADAAQgEAFgCAGIgCAFQgBgCgEAEIgDADIgBAAg");
	this.shape_397.setTransform(42.6,-35.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#4C4748").s().p("AgJAMIATgXIAAAKIgDABQgIAEgFAIg");
	this.shape_398.setTransform(44.2,-38);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#645B54").s().p("AgIAKQALgRAGgCQgEADgHAMIgBACIgFADIAAgBg");
	this.shape_399.setTransform(44.3,-40.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#8C8C87").s().p("AACgFQABADgCACIgBAFIgBABIADgLg");
	this.shape_400.setTransform(44.5,-45.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#7B675D").s().p("AAAAEIgCgHIACADIADAAIgDAEIAAAAg");
	this.shape_401.setTransform(48.6,-45);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#888179").s().p("AgDgFQAEgLABAPIACAAIgGAMg");
	this.shape_402.setTransform(48.4,-47.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#BBA8A2").s().p("AAAALIgCgDQgDgDABgEIAGgMIADAAIgBAHQgIAJAHAGIgBABIgCgBg");
	this.shape_403.setTransform(48.6,-46.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#5A544F").s().p("AAAAFQgBgOgFAKIgBAAQAEgJALAHIgCAEIgBACIgEAAg");
	this.shape_404.setTransform(48.7,-47.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#7A5A4F").s().p("AAIgfIABAHIAAABIgKAiIgHAVg");
	this.shape_405.setTransform(58,-39.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#AF8D7F").s().p("AgBAEIADgOIAAAIIgCANg");
	this.shape_406.setTransform(58.9,-43.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#70888B").s().p("AgLAcIALghIABgDIAEgGIgQA1gAAKggIAAgFIACgBIgDAJIABgDg");
	this.shape_407.setTransform(54.9,-40.8);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#666159").s().p("AABAFQgBgHgGgJIABABIAMAWIgGgHg");
	this.shape_408.setTransform(64,-27.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#75574B").s().p("AAJAFIAHAFIAAABIgHgGgAgOgKIgBAAIACAAIACABIgDgBg");
	this.shape_409.setTransform(59.4,-34.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#9A867B").s().p("AB9DmIAAgEIABAFgABdBfIAQAvIABADIgBAAIgBABIgPgzgAAyAAIAAgCIAFAHIgFgFgAAfgaIgFgFIgKgSIgCgFIAGADIAWAkIgLgLgAgVhnIgWgkIAAgBIAbAjIAAAIgAh8jlIgBgBIAEADIgDgCg");
	this.shape_410.setTransform(73.5,-10.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#858581").s().p("AgegIIAGAAIArAMIAMAFg");
	this.shape_411.setTransform(2.2,-25.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FEFDFC").s().p("ACtBJIACgBIABAAIgCAHIgEAAQgMgCAPgEgAivhIIAAgFIABgBIALAWQgHgHgFgJg");
	this.shape_412.setTransform(3.5,-25.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#798585").s().p("AAMgLIgDAHQgEAHgFAFQgFAEgGAAg");
	this.shape_413.setTransform(23.3,-19.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FBF7F4").s().p("AgEACIAAgBQAEgGAFgCQgEAFgBAFIAAABIgEAEIAAgGg");
	this.shape_414.setTransform(27.3,-20.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#786055").s().p("AgEACIAJgLIAAABIgHAMIgCAGg");
	this.shape_415.setTransform(26.9,-21.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#776965").s().p("AgMADIAAgBIgBgBIAAgBIADgCQAKgHAIANIAGABg");
	this.shape_416.setTransform(26.4,-24.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#72625B").s().p("AgPACIALgCIgCACIgJABIAAgBgAAKgBIAGgBIAAABIgGAAg");
	this.shape_417.setTransform(29,-22.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#A3A7A6").s().p("AgXgQIAPAEIAEADIAcAZIAAABg");
	this.shape_418.setTransform(19,-0.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#816B61").s().p("AADADIgFgEIgCgBIAHADIACACg");
	this.shape_419.setTransform(17.3,-5.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FCFAF9").s().p("AA9ArIABABIAAAAgAA3AmIAAAAIAAABgAASAVIgEgCIgBgBIAJACIAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAgAg9grIACAAIgCABg");
	this.shape_420.setTransform(24.8,-1.4);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#DDD1C9").s().p("AC5A4IAAAAIADgDIAAAFIgDgCgAgwAaIAAgCIAHAAIgDABIgBABIgCABgAhsgCIAHABIAAABIgBABgAi7g4IADAAIgBABg");
	this.shape_421.setTransform(36.4,0.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#AFA59B").s().p("AgCAEIgBgDIABgFIACAAQAEgBAAAFIAAACIgBADIgCAAIgDgBg");
	this.shape_422.setTransform(15.1,-5.5);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#59564E").s().p("AAAAGIABgDIAAgDQAHAGgEAAIgEAAgAgEgFIACABIgDABIABgCg");
	this.shape_423.setTransform(15.4,-5.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#5F5953").s().p("AAFgFIgLABIAIgFIADAAIACATg");
	this.shape_424.setTransform(12.8,-7.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FF0000").s().p("AHlH+IABgBIAKgGIAJgFIAIgJQAVgVAZgQIAMgIIAGgEIABgDIAGgBIAIgIQAJgIALgGQAXgGATgMIAKgDIAFgDIAIgDQAPgGAMgKIADgCQAOgMATgHIABgCIAkgjIASgSIANgJIAHgJIAAgBQAHgHAJgFIAEgCIAMgDIAAAAIABgBIAAgBIAIgJIAFgGQAkgvA4gWQAagLAYgNIACgBIACgBIAEgEIAJgIQAfgcAlgRQAMgOASAAIABAAIABAAIALgLIgMgDIgBgBIgCgDQgRgBgRgEIgFgCIgDAAQgUgPgYgJIgygUIgVAAIgIgEIgjgGIAAABIAAABIAAAAIAPAEIgQgDIAAAAQgRgFgPgIIgLgBIgBgQIACgCIgDgDIgBgDIgCgHIgBgFIAAgBIAAgGIgFgOIgDgHQgEgHAAgJIgBgLIAEACIAaAIIBVAcQAQAGARABQAtAFAsAKIA1APIAAgBIAVAHQAoAeAzABQAjABAhAJIAAAAIABAAIgBAAQgnATglAYQg7AmgzAwQg0AxgwAzQgiAmgsAcQgmAZgfAhQgIAIgIAFQgcATgaAVQgrAjglApIgCABIAAABIgIAJgA0rH+IAAhFIAnghIAHgGIAIgDQAEgDADgFQAFgIAJgHQAFgDACgFQAPgJALgQQADgEAEgCQALgFACgLIABgCIAMgDQAGgFAEgGIABgDIAGgDQAJgEAHgHIADgDIAPgDIABgBIAHgGIASgOQAEgEACgFIAJgCQADgDABgDQAFgKAKgFQAGgDAEgIIAJgCIAKgGQAVgJAXgHQAZgCAZABIANABIAJABIADAAIADgGIALADIAXAIIAAACIABgCIAGgEIATgCQAogBAiAUIAXANIANAHIA3AdIATAKIAJAFIAWANIAOAJIAHAFIAaASIADABIACACIA3AlQAJAGAKAJIADAEIABACIAGAGIACAAIABAAQATgCANANIABABIAFACIAAADIAAABIACADIACACIASABQARAIAPAKIgVgRIAeAUIAPAKQAEAGAFAGIgBAAIACACQAJAIAHAJIAFAFIAAABIAJAAQAHAGAGAIIADAKIACAFgAz5F7QAXgZAbgRIABAAIgGAFQgFAKgKAFQgIAFgFAIIgJADIgBABQgCAGgDAEIgBADIgIACQADgFAEgFgAxlEAQAKgIALgHQgFAEgCAFIgCAEIgGADIgMAKIgCADIgKACIASgQgAxGDqIADgCIgBACIgBADIgJACIAIgFgA0rjYIA3gnIANgKIAcgSIAIgFQAlgWAlgSIAcgOIAJgFIAUgLIgBgBQASgMAQgOIAcgQQAjgUAhgXIALgIQAogUAmgWQAIgFAHgFIAAAAIARAAIAHgDQAOACAOgBIACAAIAEACIAMgCIgEgDIABAAQAEAAADABIASAEIACABIAQAKIADADQAQALAJgHIAAAAIACABQAPAHAEATIAAACIABAIIAAADIAAAGIAAAAIAGAOIAAAPQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAZAhIACAEQgKgHgPgBQgTgCgOgKIgJgFIABgCIACgJQACgRgbACIAAABIgEAAIgDABIgNAGIgHgCIAAABIgHABIgEAFIgCACIAAAAIgBADIgHADQgTAEgWAJIgDACIgGABIgEAHIgIADQgKAEgJAIQgKAJgKAIQgVANgWAJIgCgCIgFAEQgqAQgoAVQglAUglAXIgHADIABAAQgeATgYAXQg9AzhIAgQgMAFgMAEgAIHhwIAAAAIgFACQgQADgRgCQgjgGghgIQgigIghgKIgLgEIAAADIgFAAIgCgBIgGAAIgBADIgNADIgpgdIAAAAIACgCIAEACQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIAAgCIgIgBIgHgCIgagCQgCAAgDgCQgOgPgEgOIgdgUIABgBIgDgDIgIgEQgIgFgBgFQgBgFACgEQgGgKAGgQIAEgHIABACQAAAFAEACQAfALAfAJIAHACQAIACAJAAQA2gDAwAVIAEADQApARAqAPQAoAOApAAIATgBIACAFIAAACIAAACIAEABIADAAIgBAbIgCAAIACAFQACAKAAALQABAEgDADIgCADIgBAAQgEADgFACIgIABQgJAAgKgHgAE9iPIAAAAIgBgBgAE2iUIAAAAIAAgBgAEsieIAAgDIgCgBIACAEgADCjmIABAAIgCgBg");
	this.shape_425.setTransform(-0.7,17.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#716D66").s().p("AAXAFIAlgLIANADIAAABQgZAGgZADgAhIABIAGAAIAAABIgGgBg");
	this.shape_426.setTransform(6.8,-11.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#A7A09B").s().p("AAgAaIgJgFIgBgGIAZAPgAAAgNIgIgDIACgKIgjAEIgFgDIAUAAQAIgBAGgCIALgBIABAQIAAAAg");
	this.shape_427.setTransform(13.4,-5.1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#717B7C").s().p("AgTAPIABgBIAmgeIgnAhIAAgCg");
	this.shape_428.setTransform(20.1,-16.4);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AK2IUIAIgJIACgCQAlgqArgiQAagVAcgTQAJgGAHgHQAfghAngZQArgcAigmQAwgzA1gxQAzgwA6gmQAlgYAogTIAAAAIAAAAIgBAAQghgKgjAAQgzgBgogeIgVgHQgagIgbgGQgsgKgtgFQgRgCgQgFIhVgcIgZgIIgFgCQgOgHAJgPIACgEIABgBIABAAIABAAIAGgBIAAAAICfAtQARAEASABQBbAFBOAqQAOAIAQACIBAAHQAlAGAkAGQAEACABAFIAAAFIAAAAIABACQgBAFACAGQgCAEgFAFQgGAHgKACIgUAGQgsAPgmAbIg6ArQhHA0g8A/Ig3A6QgZAaggASQgfASgXAaQgaAfgkATIgHADQgmAhgjAkgAGtIUQAIgMAHgMIABgBIAOgOIABgCIAAAAIABgBQA+gxBFgjQAWgKAWgIIALgEQAggNAWgYQAcgdAhgZIAsggQAagTAWgVIASgQIAYgRQAVgNAXgJQALgEAJgJQAKgKAOgEQAWgHAJgUIAEgKIAGgHIABgCIgHgEQgDgJgOgEIgFABIgBAAIgMgFQgUgJgWgFQgHgCgFgFQgzACgpgWIgCgBIgBAAIgFgFIgDgDIAAgCIAAgFIABgCIAAAAIACgCIACgDIADgBIAAAAIAAgBIABABIALAAQAQAJARAGIAAAAIAPADIATADIAKABIAUAAIAyAUQAYAIAVAPIACABIAGACQAQAEARABIACADIACABIACAFIgBADQAAADgDADQgSAAgMAOQglARgeAcIgKAIIgEADIgEADQgYANgaAKQg4AXgkAvIgFAGIgLAIIgBAAIgCACIgGAEIgFACQgJAEgGAIIgBABIgKAHIgKALIgRASIgkAiIgCADQgSAGgOANIgDACQgNAKgPAGIgIACIgFADIgJAEQgUAMgXAGQgKAGgKAIIgIAIIgGABIgGACIgDACIgCABIgCAFIgGAEQgYARgWAVIgIAIIgJAGIgKAGIgBABgA1PG/QAQgOATgLIABgDIAEgGIACgCIACAAIAHgCIABgDQAEgEABgGIACgCIAJgCQAEgIAIgFQAKgFAGgKIAFgGIABgCIAGgHIAFgEIAFgDIAAgDQACgFADgFQAOgCAKgJIAYgUIADgDIAGgBIAKgCIADgDIAMgLIAGgCIABgEQACgFAFgEIACgCIABAAIAIgCIABgDIACgCIAJgJIAGgDIAAAAIACgDIAAgBIABgCQADgFAEgDQAHgBAGgDQAFgDADgEIACgCQAGgFAIgBIADAAIACgDIAAgBIABgBQACgGAFgDIAAgBIAJABIASADIAJACIAAACIgBABIgGAAIgZADIgCAEIAAABIgFAGIgFAEIgKACIgDAEIgGAEIgKAHIgJACQgDAIgHADQgKAFgFAKQgBACgDAEIgJACQgBAFgFAEIgSANIgGAHIgCABIgPACIgDAEQgHAHgJAEIgGACIgBAEQgEAGgFAFIgMADIgCACQgBALgLAFQgFACgDAEQgLAQgPAJQgCAFgEADQgKAHgEAIQgDAEgFAEIgIACIgHAGIgnAigA1PhSQANgDALgFQBIggA9g0QAZgWAdgTIAGgEQAlgWAmgVQAngUAqgQIAHgCQAXgJAUgOQAKgHAKgJQAJgIALgEIAHgDIAHgCIAFgDIAPgGIALgFIAQgHIAIgEIAAgCIACgDIAEgEIAIgBIAAgBIAHACIAMgHIADAAIAFgBIAAAAQAbgCgCARIgDAJIgBACIAJAFQAPAKASACQAPABAKAHIAFAEQAEAEADAFQACAFAAADIgCAEIgEAEQgNAHgPgGQgZgLgagIQgHgCgHgDQgMgHgLgHQgTAGgSAIQgdANgcARIgFACIgaARQgfAVgjAMIgBAAIgYAJIgBAAIgDACIgCAAIgBABIgEABQgYALgWAPIgEACIhaA8Qg0Aug+AjQgWALgXAJIgbAMgAGeivQgqgPgpgRIgEgDQgwgVg2ADQgIAAgJgCIgGgCQgggJgegMQgFgBAAgGIAAgCQgBgJAIgEIAHgBIABgBIABAAQApAFApAJIAmAIIAYADQAUADASAHQA4AaA7APIAdAHIAgAGQALACADAGQABADgBADIAAABIgBACIgCAFQgBADgDAAIgCABIgTABIgBAAQgpAAgngOgA1PjoIAvgfQACgHAIgDIAEgCQAfgcAogRQAvgTAqgeIAngaIAggUQAigUAhgXQAZgRAdgMQAigNATgeIACAAIAFgBIAAAAQAOADADAJIABgDIACgCIADgCIAHgBIABgBQA8ADArAnIAGAGQACABgBADQgDAHgDAEIgBABQgKAHgPgLIgEgDIgPgKIgDgBIgSgFQgDAAgEAAIgBAAQgHgCgFAEIgBABQgPABgOgCIgQgEIgBAAIgBABIgGAGIAAAAQgHAFgHAFQgnAVgnAVIgMAHQggAYgjAUIgdAQQgQAOgSAMIgSALIgJAGIgcAOQgmASglAWIgHAEIgdATIgNAKIg3AngAkZl+IAEgEQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQgEgEgGgEIgBAGIABAIIgJgDIgCgBIgDgDIgGgGIhAgBQgDgCAAgEIgBgHIABgEIADgFQADgFAIAAQA0gEApAXIAEADQADABgBAEIAAACIgCAFQgDAEgEADIgHADIgEgBg");
	this.shape_429.setTransform(2.9,15.2);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#7D8282").s().p("AgZALQAVgDAQgKIgYAPgAAbgMIAAABIgMAHIAMgIg");
	this.shape_430.setTransform(15.4,-13.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#917F77").s().p("AAKgEIAEAAIAAAAIgbAJg");
	this.shape_431.setTransform(16.4,-26.4);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#726052").s().p("AgCASIACgEIADAAIgBABQgBADgEABIABgBgAAFgFIgKgLIAAgBQAEABACACQAEADAAAGQABAFgBAGIgBAFg");
	this.shape_432.setTransform(19.1,-28.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#888A87").s().p("AAAAAIAAAAIAAABg");
	this.shape_433.setTransform(18.3,-29.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#736861").s().p("Ag1ABIAWAEIgDABIgHAAgAA2gFIgWAHIgKABg");
	this.shape_434.setTransform(9.6,-25.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#7D746B").s().p("AgrgBIgPgFIABAAIA0ALIApgJIAXgCQgcANgdAAQgWAAgXgIg");
	this.shape_435.setTransform(7.7,-26.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#130D0B").s().p("AAqA3IgDAAIgXgFIgrgNIhCgTIgCAAQgggBgXgUIgDgEIgLgWIgBABQABgKgGgGQADgDAAgFIAAgBIADgGQAHADAJAKIANARIAIAIIABAAIAGAFQAzAjBAANIANAGQA1ATAygZQAggEAPgVIAAgBIACgEIALALIgBARIgBAEIgEAAIgMgBIAAAAIgEAAIgZAKIggAJIgeAIg");
	this.shape_436.setTransform(2.5,-30.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#B9ABA1").s().p("AgYgEIAAAAIAAAAIgBgCIAzANg");
	this.shape_437.setTransform(4.5,-26.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#97837A").s().p("ABAAfIABAAIAAAAIgBAAgAhAgeIAJAHIgBABIgIgIg");
	this.shape_438.setTransform(-4.6,-30.1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#0B0806").s().p("AggADIgOAFIAAgFIAEgEQAOgMAPgEQAKgCAJABQALABALAFIAFADIAOAOQAAAHgEgBIgQgHIgCgBIgNgFIgpATIgFADg");
	this.shape_439.setTransform(1.3,-39.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#7B7570").s().p("AAhgCIgFgDIAHABIAHAFIAFALgAguAHIAYgSIAJABQgPAEgOAKIgEAGg");
	this.shape_440.setTransform(1.3,-39.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#A0928C").s().p("AABAOIABAAIgBABIAAgBgAAKgDIgFgLQAEAEACAEIABADgAgLgFIACABIgBABg");
	this.shape_441.setTransform(5,-38.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#B7A399").s().p("AAAACIABgDIAAADIgBAAg");
	this.shape_442.setTransform(3.2,-44.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#AAA7A3").s().p("AAAAAIABAAIgBAAg");
	this.shape_443.setTransform(3.2,-44.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#5D5B55").s().p("AgBgBIACAAIABgBIAAAAIAAABIgBAEg");
	this.shape_444.setTransform(3.1,-44.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#67615E").s().p("AASAEIgEgDIghgBIAfgDIAIAHg");
	this.shape_445.setTransform(0.3,-46.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#6A5850").s().p("AgYAAIgCAAIAJgEIAHgDQAUABAOALIADADg");
	this.shape_446.setTransform(-0.6,-48.1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#0B0909").s().p("AAZgHIgtABIgFAFIgCAAIAAABQgLAFgFgGIgCgEIAAgEIBYgFIADAdg");
	this.shape_447.setTransform(15.8,-43);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#99918A").s().p("AgPgBIACADIgBAAgAAKgBIAFAAIgLADIAGgDg");
	this.shape_448.setTransform(12.8,-43.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#C0BBB8").s().p("AAIAGIgBAAIgOgLIAGADIAJAIg");
	this.shape_449.setTransform(39.4,-26.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#A6A19E").s().p("AAeAOIg+gaIAAgBIANADIADABIAAABIAxAWIgDAAg");
	this.shape_450.setTransform(41.1,-24);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#D3C5BF").s().p("Ag4AfIABgGIAJgNIAJgBIgGAFQgGACgDAHIAAACIAAAFIgEAFgAgNAHIArgdIAKgLIABgCIABgBIAAAAIAQAPIAAACIgRgFIg0AgIgCgBg");
	this.shape_451.setTransform(32.1,-23.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#78726D").s().p("AgDgCIAGADIABACg");
	this.shape_452.setTransform(39.7,-29);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#5F544F").s().p("AgBgIIAVAMIgYgGIgPALg");
	this.shape_453.setTransform(32.8,-28.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#6E6761").s().p("AAJAHIgOgOIACgCIAZATgAgIgFIgKALIgDABg");
	this.shape_454.setTransform(37,-26.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#7F665B").s().p("AgWAPIAAgBIApgbIAEgBIgrAdIgCAAg");
	this.shape_455.setTransform(32.8,-24);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#6C5E57").s().p("AAGgLIAAAMIAAADIgBACIgIAFIgBABQgFAAAPgXg");
	this.shape_456.setTransform(33,-31.3);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#F4E9E8").s().p("AAAgDIABgBIgBAJIAAgIg");
	this.shape_457.setTransform(32.1,-33.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#A7948E").s().p("AAAAAIAAAAIAAABg");
	this.shape_458.setTransform(32,-35.3);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#84817E").s().p("AgYAJQALgBAGgFQADgDABgCIAcgFIgrARgAgCgJIABAAIgBABIAAgBg");
	this.shape_459.setTransform(29.6,-24.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#E5DCD9").s().p("AhsBTIgTgFIBcAPIgmAAgAACBaIAAACIgGAAgACfgGIABgBIAAACgACvgbIABAAIAAAAgAgNgjIADgBIADABIgGAAgABng5IAAAAIABAAgADJg8IAAAAIAAACgAjFhUIgDgIQALAJANAFIgBADIgUgJg");
	this.shape_460.setTransform(7.5,-21.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#626A6D").s().p("AARgRIAAACIgaAfIgHACg");
	this.shape_461.setTransform(31.1,-31.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#D0C8C5").s().p("AgMAbIAAAAIgCABgAAOgaIABAAIgBABg");
	this.shape_462.setTransform(30.7,-32.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#606261").s().p("AgBADIABAAIANgbIAAAAIAAADIgNAYIAAABIgMAVg");
	this.shape_463.setTransform(28.2,-35.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#5E493D").s().p("AACgMIAAATIgDAGg");
	this.shape_464.setTransform(26.3,-41.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#938A83").s().p("AAMgOIgnAAIgGAAIAtgBIAVAXIABAAIgCAIg");
	this.shape_465.setTransform(17.1,-42.2);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#DDD4CF").s().p("AAAAAIABAAIgBABg");
	this.shape_466.setTransform(27.2,-44.1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#6F8186").s().p("AgmA4QAHAAAHgCIgCABIgLAHgAAmg9IABAAIgBAJIAAgJg");
	this.shape_467.setTransform(22.6,-40.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#D3CDC5").s().p("AgBgFIACABIABAEIgBAGIgCgLg");
	this.shape_468.setTransform(36.3,-42);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#DACFCE").s().p("AAAAAIAAAAIAAABg");
	this.shape_469.setTransform(33.5,-48);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#4B4340").s().p("AAAgKIAAACQAAABABAAQAAAAABABQAAAAABgBQAAAAAAAAQACgBADgEIAAAAIgBAEIAAABIAAAAIgFALIgJAJg");
	this.shape_470.setTransform(38,-42.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#3A302B").s().p("AgDAIIgCgDQAHgMADgBQACgBgCALIgBABIAAAAIgBAAQgCAEgBACIgCAAIgBgBg");
	this.shape_471.setTransform(38.4,-44.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#D6CFCC").s().p("AgNAsIAFgHIABABIgFAHgAAPgsIAAAKQgEABgDADg");
	this.shape_472.setTransform(38.5,-40.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#5D534E").s().p("AgjAEQAkgJAlACIhLAHIACAAg");
	this.shape_473.setTransform(30.5,-64.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#3F3832").s().p("AABACIAAAAIgCgEIACACIABACIgBABg");
	this.shape_474.setTransform(36.4,-54.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#BAA9A5").s().p("AgFALIgBgFIAAgBIAAAAQgCgHABgEIABgEQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIAAAAIADACIAGAGIgIgGIgBgBQgDAAgCADIAAACQgBAEABAGIABAEIAAABg");
	this.shape_475.setTransform(35.3,-53.3);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#58524F").s().p("AAFBTIAAgCIAAAEgAAHAAIAAAAIAAAAgAAMg9IAAAAIAAADIAAgDgAgLhUIABABIgBAAIAAgBg");
	this.shape_476.setTransform(32.3,-42);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#735147").s().p("AgMBOIABgCIgBAEIAAgCgAAGhOIABAAIAAgBIACALQAEATAAAVIAAAXIgCAFIAAABIAAABQAFgngKgpg");
	this.shape_477.setTransform(30.5,-42.5);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#64554E").s().p("AAAAAIAAAAIABAAIAAABg");
	this.shape_478.setTransform(30.5,-54.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#BDB2AE").s().p("AAFAEIAAAAIgFgEIgFgEQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAAAAIAAACIAFADIAAAAIABACg");
	this.shape_479.setTransform(34.6,-55.4);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#B6B0AA").s().p("AKWIcIgNgEIAOAEIgBAAgAqVoUIAAgBIAAgCIAAgEIAAAAIABAEIABAGIgCgDg");
	this.shape_480.setTransform(100.3,-3.7);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#1F1410").s().p("AAAAAIABAAIgBABg");
	this.shape_481.setTransform(31.1,-58.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#575048").s().p("AgFgDIgBgPQAAABABAAQAAAAAAABQABAAABAAQAAABABAAIABAAIAIAig");
	this.shape_482.setTransform(37.2,-56.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#4D4440").s().p("AgGAEIAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAAAIACgCIABgCQAFAEAAgCQAEgGAFAFQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgIAEgEAAIAAAAg");
	this.shape_483.setTransform(35.7,-56.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#9E968F").s().p("AAFgBIAAABIABAAIgBAAIgBAAIgJACg");
	this.shape_484.setTransform(37,-60.2);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#615C59").s().p("AAOBCIABAAIgBACgAgOATIAMhWIACABIAGALIgBAAIAAADIgDgDIgBAEIgIA3IgBADIgDAOQAOgLgRAdg");
	this.shape_485.setTransform(28,-44.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#A79E9A").s().p("Ag2B4IgIgFIAMAAIgCAEIgBABgAgHB0IAdgDQgIAFgKAAQgFAAgGgCgAg3BTIAAABIgCADIgBABIgCABgAAxgKQAKgcgBgaIACgBQAEANgCAOQgCANgJAPgAAeg4IABgCIgBACgAAshzIAAgEIAAAFIAAgBg");
	this.shape_486.setTransform(24.1,-38.4);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#9DB3B7").s().p("AAAAcIAAg3IAAAGIAAABIABAuIAAACIgBAAg");
	this.shape_487.setTransform(26.4,-49.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#C9BEB9").s().p("AAoAPIABAAIAAAAgAA0gKIAAgBIABABIAAAAIAAAAgAgzgNIgBAAIAAAAIABgBIAAAAIAAAAIAAABg");
	this.shape_488.setTransform(26.6,-55.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#D2C6C2").s().p("AgHgCIAMABQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAAAIAAABIAAAAIgBABIAAABg");
	this.shape_489.setTransform(20.6,-57.3);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FAF4EE").s().p("AAAAAIAAAAIAAABg");
	this.shape_490.setTransform(20.4,-60);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#514944").s().p("AgHAeIgHgGIgKgIIgSgTIAJAFIABABIAQALIACgGIAIAWIAAAAgAAwAKQALgNgTgJIgFgCQAIACAEADQANAJgOANIACgDgAAFAMIgGgCIAAAAIAAgBIgBAAIgMgFIAAgCQgCgLgPgFIgJgBIgMAFIAFADQgCAEgEgCQgDgCABgDQABgCAFgDIAdgFIAAAAIAHgBIANgIIAAAAIAyAGIAGADIAAABIg8gBQgBABAFAEIAAABIADACIADADIAAgBIAUgHIAFABIABAAIABABIgBAAIgBAAIgKAEIgEABIAAABIgRAGIADADIABABQAEACAGgHQACgDAEADIgPARg");
	this.shape_491.setTransform(34.4,-58.9);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#C4BBB5").s().p("AgDgBIgCgCQAFgBAGAGIAAACIgBAAg");
	this.shape_492.setTransform(30.6,-59.1);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#978A85").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_493.setTransform(29.7,-62);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#6B797C").s().p("AAIANIgcglIApAxg");
	this.shape_494.setTransform(19.9,-64.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#EEE4DE").s().p("AAFAFIgBgBIgRgHIAbAIg");
	this.shape_495.setTransform(35.5,-62.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#B2AFAA").s().p("AAAAAIAAAAIAAAAg");
	this.shape_496.setTransform(14.8,-58.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#969B98").s().p("AANAMQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQAHAAAAAFgAgUgKIgDgEIAaAOIACAFQgKgIgPgHg");
	this.shape_497.setTransform(12.4,-59.8);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#B2A7A1").s().p("AAAAAIgGAAIACgBIAGgBIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgDAEQAEgGgIACg");
	this.shape_498.setTransform(17.4,-56.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#E7DDDA").s().p("AgBAAIADAAIgBABg");
	this.shape_499.setTransform(15.6,-59.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#CBBFBA").s().p("AAFgEIAAgBIgBAJIgHACQgFAAANgKg");
	this.shape_500.setTransform(4,-58);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#B5A39D").s().p("Ag0AgIAAgBQAAgEACgBQAggzA1AFQg9ACgZA3IgCABgAAvgGIgKgNIAFAAIABABQAIAIAAgDIADAEQgCAFgCAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAAbgjIAAgCIADADg");
	this.shape_501.setTransform(1.9,-53.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#6D625B").s().p("AgTAEIAIgKIARAGIADAAIALAGg");
	this.shape_502.setTransform(4,-56.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#6C6B69").s().p("AAIgDIgEADIgBAAIgKAEg");
	this.shape_503.setTransform(3,-59.5);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#685550").s().p("AgrAGQAEgEAFgEIAMgIQAZgOAjgBIAEAAIABAAQAHALABACQAAACgIgIIgBAAIgFgBIAAAAIgDAAQg0gFggAyQAAgLAHgJg");
	this.shape_504.setTransform(1.9,-53.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#B2A19A").s().p("AgPAIIAYgRIAHgDIAAACIgPAJIgBABQgSAOASgGIACADIAAACg");
	this.shape_505.setTransform(4.4,-58.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#B1A7A0").s().p("AAAABIgVgCIAAgBIAXACIACADQAUAZgUgjIgBgBIgBgEIAQgHIADAEQgWACAQAbQABACgBAEg");
	this.shape_506.setTransform(8.2,-59.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#756766").s().p("AgDAAIgCgDIACgHQALAVgCAAQgBAAgIgLg");
	this.shape_507.setTransform(9,-59);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#635951").s().p("AgIAEIgHACIAdgLIABAEIABABIgCAGg");
	this.shape_508.setTransform(7,-60);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#675B53").s().p("AgDgEIAIAEIAAAAQgFAFgCAAQgEAAADgJg");
	this.shape_509.setTransform(8.9,-63.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#666560").s().p("AgDABIgGACIAAgBQAPgGADABQAEABgJAGQAIgIgPAFg");
	this.shape_510.setTransform(2.6,-63.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#615B53").s().p("AgBABQABgBADgBIgFADIABgBg");
	this.shape_511.setTransform(2.7,-62.7);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#625D59").s().p("AAAAAIAAABIAAAAIAAgBg");
	this.shape_512.setTransform(1.3,-68);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#F4E8E4").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_513.setTransform(2.9,-66.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#736A66").s().p("AgMADIAXgGIACAAIgVAGIgEABg");
	this.shape_514.setTransform(1.7,-66.8);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#4E4742").s().p("AADAAIgGABIgBAAIgKABIAWgFIAHAHg");
	this.shape_515.setTransform(2.2,-70.9);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#B5ACA9").s().p("AgFACIAFgCIANgEIgZAJg");
	this.shape_516.setTransform(0.4,-69.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#F6EEE9").s().p("AAAAAIABAAIgBAAIAAABg");
	this.shape_517.setTransform(1.7,-69.8);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#73746E").s().p("AgKgDIAIAAQAbAGgcABg");
	this.shape_518.setTransform(4,-70.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#7A716D").s().p("ABBCgIAjgsIAGgIIgpA3gAgHgzIAAAAIAAAGgAA9g0IABAAIAAAAgABwg+IABAAIABABgAgLhXIAAgCIALACIgDABIgBAAIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAg4hjIAAgBIAAABgAA3hwIACABIgBAAgAAbh5IABAAIAAAAIACACgAhfiOIABABIgBAAIAAgBgAhwifIAAgBIACACIgCgBgAhdiiIAAABIAAABIAAgCg");
	this.shape_519.setTransform(27.2,-47.2);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#BFB6AE").s().p("AgFgCIAAAAIgCgEIAPANg");
	this.shape_520.setTransform(18.4,-63.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#6B5E57").s().p("AgHgGIAMAHIABABIACAEIAAABg");
	this.shape_521.setTransform(16.9,-64.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#7B7D79").s().p("AgHgFIAAgBIAQAJIAAAEg");
	this.shape_522.setTransform(18.3,-63.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#CEC5C0").s().p("AgIgBIAOACIABgBIACACg");
	this.shape_523.setTransform(12.3,-63);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#F7F0EA").s().p("AgGAAIgBAAIgBgCIARAFg");
	this.shape_524.setTransform(12,-63.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#B59F94").s().p("AgGAHIgFgIQgDgJAMAEIAAAAIgBAAQgLgBAIAIIABACIABABIARAFg");
	this.shape_525.setTransform(11.8,-63.6);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#BDB4AF").s().p("AgLgEIgFgBIAKAAIAXALIgMAAQgGgGgKgEg");
	this.shape_526.setTransform(12.9,-66.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#ACA7A0").s().p("AgMAAIgQgCIgHgBIAvABIAOAAIAFACIAFADg");
	this.shape_527.setTransform(11.6,-68.7);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#747A76").s().p("AgKgDIgEgDIAdANg");
	this.shape_528.setTransform(16.2,-68);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#686058").s().p("AgYgDIAQAAIAQADIARADg");
	this.shape_529.setTransform(9.5,-68.6);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#695F56").s().p("AgigDIAngDIAAABIgdACIA7AKgAAJgGIAHAAIgFAAg");
	this.shape_530.setTransform(11.7,-70.4);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#8D8985").s().p("AhFACIgGAAICOgDIAJACIh6ABIgXAAg");
	this.shape_531.setTransform(10.7,-72.4);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#EDE6E0").s().p("AA9AZIADgBIACAGIgDALgAgYgXIADABIgBABgAhBgnIAAgBIABAAIAAABg");
	this.shape_532.setTransform(18.7,-67);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#BCB2AA").s().p("AgFAJIgBAAIABgCIABABIADABgAAdgBIgigFIgdABIAFgBIAdgCIAjAHg");
	this.shape_533.setTransform(16.2,-70.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#7B736C").s().p("AAiAvQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIgBABgAAmAlIAAABIAAAAIAAgBgAglgeIADAAIACACIACACIARAPgAgfgwIADAAQATABANAEIgBACg");
	this.shape_534.setTransform(19.5,-66.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#9B7D71").s().p("AgEAAIAJAAIgBABg");
	this.shape_535.setTransform(17.9,-72.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#9F948B").s().p("AgCgGIAEAIIABAFg");
	this.shape_536.setTransform(57.8,-50.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#4E686C").s().p("AAAAXIACgDIgBAMgAgEgcIAAgDIAJAMIgBAEQgCgIgGgFg");
	this.shape_537.setTransform(56,-47.9);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#909FA1").s().p("AAIAhIAAgCIACgCIAAAIIgCABIAAgFgAgEgaIgBgDIgEgIIAOAMIAAADQgEgDgFgBg");
	this.shape_538.setTransform(55.1,-48.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#A08B82").s().p("AgjgTIgVgYIBuBUIADADIgBAAg");
	this.shape_539.setTransform(50.8,-56.9);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFCC99").s().p("AkhLAQgDgJgEgIIgIgNIgEgFIALgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgPgEQgPgRgVgNQgLgNgPgIQgPgJgNgLIgdgBIgSgPIgLgKIglgpIgLgBIgCAAIAAAAQgJgBgEgFIAAAAIgCgDIgBABIiWhcIhzgvIgDACIgCACIgIACQghAAgggDQgGAAgBgGQgDgVAYAAIAAAAIAAAAQgEgOALgKIAJgGIAIgDIAAgBQAAgNADgLIACgGIAEgHQAIgQAQgLQAGgEAHgBIAPgGIABgBIAbACIACAAIAJABQgEgJACgKIADgIIAAgBQAFgKAIgJIABAAQADgSAQgNQAGgGAHgDQAPAAAPADIAIgCIAFgDIADAAIABgQIABgZQABgeADgdIABgOQADgTAEgUQAFgUASgLIADgCIACAAIABAAIAIgBIAIgQIABgBIAAABQADALADADIACgQQAAgFADgCIAEABIAEABIABAAIAEAKIAFAGIABAKIAAAFIAAABIABAAIACABIAHADIAJAFQgDgIABgKIAAgHIAAAAIABgKIAAgEIAAgHIAAgEIgDgGIgEgFIAAgFIAAgBQgBgGAEgEIACgCIACABIAAgFIAAgIIAAgJIAAgEIAAgBIgHAAIgHAAIgBAAIgfAAIgFgGIgFgEIgBgBIAAgCIAAgDIgBgGQgFgDgEgEIgBgBQgFgFgCgIIgCgEIgFgEQgHgGgHgKIgHgLQgLgVgIgXQgTg6gRg8QgEgPgCgPIgQiCIgDgfIgEg0QgDgaAPgTIAEgFIAAgBIgBgEIAJgDQAIgHAIgGIADgBIAIgFIANgGQAMgFAMgDQAYgFAZABQAJAAAJgCIABAAIAJgDIAAgBQANgCAMADIAKAEIAFADQATgBATACQAXACAXAFIAqACQAJAAAJACQAIACAHAEIADABIAJADIAAAAIAoAIIBIAVIBKAaIAKAOQgBAEACAFQABAEADACQADABACgCQADgDABgIIAlARIgUAdQgaAEANAQIABACQgDAPgQgHIgEgCQh1Aih0gTIgWgBQgbgCgbgIIgGgCIgGgDQgJgFgHgGIgCgCIgCgEQgJgDgPgIQgTgCAZAWQALAJANAIIAEAQIAAACIgCAAIgFgBIgQgDIgRgDIAAAIIAcAOIARAOIABAhIAIAIIACgCIABgBIABAAIAAAAIAGAAIgJgKQACgKANAGIAFADIAlAZIANAJQAAAFAEABIABAAIAYAoIgPAUIAGAEQAXALgGAcIgBABIAAAAIgBAOIACAWQgJALAHAHIADACIAAACIAFAAIAKACIACABIACgCQANADALAGIAAAAQABAEACACIBBABIAFAGIAEADIACABIAIADIgBgJIABgFQAHADAEAFQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgEAEIADABIAHgDIAQACIADAAIAFABIACAAQAFABAEADQAIAFACANQAEAWATANIABAAIADADIACABIADACIAPAQIAFAEIAHAGIABABQAKAKAMAHIADACIAAAAIArAPIABABIAHAAIADABQAVALAXAEIAcAFQAkAHAlAAIAEADIAjgEIgBAKIAIADIABAAQAIAEAFAHIACACIABADQAEAHACAHIABAFIAJAFIAwAhIAaAXIALAJIAFAPIADABQAAABABAAQAAAAABAAQABABAAAAQABAAABAAIAbAJIAXgMIARABIBIADIAHAFIAGAEQASAAASADIADAAIAEABQAcAFAZAOQAJAAAIABQATADAPANIANAKIACACIAKAHIAFABIAaAJIABAAIAFgCQAHgFAFgGIABgBIgCgBIgBAAQgIgEgJgFIgGgEIgLgJQgPgNgIgRIgBgCIgDgJIgBgFQgEgNAAgQIAAgFQgCgJAAgKQAAgWAEgTIACgGQgFgSAAgTQgFgKgDgKIgKgfIgGgQIgGgNIgEgKIgBAAIgLgEIgUgkQgRgMADgHIgCgBIgBAAQgNgFgNgHIAAgBIgFgEQgQABgKgGQgHgEgEgHIgCgGIgCgBQgJgGgDgJIgBgCQgDgIADgLIAAgCIgHgFIAFgIIAeguIACABIAAAAIgNAWIABABQADAJAEgEIABAAIAAgBIABgKIABgFQADgHADgFQAFgHAJgFIADgCIAFgDIAHgBIACgMQAHgaAOgVIACgEIABgBQgJgGAJgKIACgHIABgCIACgFIAFgKIAGgIIABAAIABgCIABgBIgEgtQACACADABIABAAIAGABIAYAUIAEAIIACADQAFABAEADQAGAFADAHQADAJgBAOQgBAIgDAGIgCADIgCACIAAACIABAFIgBAFIAAAEIgEAOIgEAGIgCADIgLAiIgDANIABACIACABQAMAHAJANQAOADANAJQALAGAKAIQAKAIAJAJIAIALIAAABQAGAJACAIIAGAGQAYAdAVAgIAEAGIAIAMIAEAFIAMAPIAAADIACAAQANATAKAUIAHANQACAFAEACQAHAFAGAGQARAQAIAYIACACIACADQALAnANAoQAGASAEATIABAFIACAJIACARIAAAMQAAAGACAFIABAGQADATABAUIAAAIIAAADIAAARIABAHIAAAHIAAAOIAAAIIgBAJQgCAOgFANIAAAAIgBAEQgGAOgLAMIgCADIgHAFQgDACgFABIgbAGQgUAHgTgHIgFgCIgCgBQgdAFgdAAIgMAAQgHAAgGgDIgDgCIgFgEQghAEghABIgPABIgEAAIgCgBIgUABIgGAAQgdAAgdgCIgngDIgZgBIgMAAIgKAAIgGgBIhkgDQgDAAgCgCIgIgHIgCgBIgHgCIAAAAIgGgEQgFgEgDgFIgBAGIAAABIgCgCIgLgKIgTgDIgGADIAAADIAAADIAAACQgBAMgKAJQgFAFgHADIgFACIAAAAQgJAKgOAEIgbAJIgCABIgBAHIgCALIAQABIAEABIAAAAIgBABIgaA0IgjAkIgEACIgwAdIhKAjIhMAmIg4ApIgrAfIgQAMIgFAFIgGACQgLAEgKAFIgFADIgMAAIAIACIgEACQgTAMgOARgAkQKiIAEAAIAAAAIgEAAgAqHEQIABgCIgCgIgAHvEGIAFAAIAHgBIAIAAIgEgCIAAAAIgBAAIABAAIAwgaIgIABIgWAAIgGgBIgcgCQgTgCgTgDIgOgDIAAAAQgVAEgUgBIgIAAQgDgBgCgDIAAAAIAAgBQgGgDgFgFIgCgCIgEgHIgCgFIAAgIIABgEIAAAAIgGgBIgFAEIgTAKIgFADIgFACIgGADIgNADIgGABIgJACIADAJQAaACAZAEIADABQAaAFAaAIIAQADQARACAIALIABAAIAFgBIAQgCgAHdB+IAGgBIgDgBIgDACgAGVBrIAAgEIgSAAIASAEgAnGBqIAAAAIAAgBIAAABgAneBMIABABIgCgCgAoTAUIACAEQADAGAFAGIADADIAAAAQgDgKgBgLIAAgJQgIABgIgCQAEAFADAHgAo8iTIAAAAIAEAGIADADIANACIgLgEIgCgEQgCgCgCgBIgCAAIgBAAgAkSi/IACABIAPgBIABgBIgSABgAofk9IABAKIADAMIACADQAHAGAGAJIAAABIABABIACADIAGAMIAGAAIAFAHIAAABIAcAiIAGACQAMADgMgSQgDgEgFgDIAAgEIgHgGQgTgSgEgbQgDgOABgQIABgHIgCgWIADgDIAAgIIAAgJIAAgBQAAgJAEgGIABgCIAEgEQAIgPgIgHQgEgCgGgCIAAACIgLASIgHAWIAAAFIAAAAIAAAFIABA5IAAABIgBADIgCADQgFgBgCgDQgGgJgBAAIAAAAgAnEmpIACABIgCgDIAAACgAmLofIADABIgJgJIAAAAIgfAAIAlAIgAnGosIAAABIAAAAIAAAAIACABIABAAIgDgCgAlmKKIABgBIABACgAAfhfIAAgCIAnAAIhcgPIgJgDIgcgPIgEgDIgQgJIgDgCIghghIgUgUQgZgOgCgfIAAgFIAAgDIAAgKQAAgOACgPIAEgRQACgGADgGIAEgFIACgCIADgPIAFAAQAIgRARgMIAGgFIABAAIABgBIABgEIACgHIAJgPIAjggQAFgBAFADIAGAEIAAADIAMgEIAGAAIANgGIAFgCIA1gJIAEAEIACAAIAAABIAGAJIACAFIABABIABgBIAAgEIAAgCIAAgBIABgBIAAgIIgDgJIgKgCIgDgCQgOgNgVAAIgHADIgBAAQgQADAJgPQAYg4A9gCIACAAIABABIAJANQAFAFACgIIgDgDQAAgCgIgMIgBgBIgLgGIgDgEIgDgDIACgKIAPgJIAVACIAQATQABgDgBgCQgRgdAXgCQAPAIALAJIAIAHIALADIgQAiQAGAUAGgKIABgCIALgBIACAFIAGgBIABAAIBEgJIALAEIATASIAAA4IAAAJQgBAQgDAPQgGAYgMAUIgFAHQgQAVgUAFQgHABgHAAIABAGIAPgBQAVgDAQgMIAIgHQAIgIADgLIAJgKQAPgSAOgbIADgHQABAbgKAbIgDAJIAAAAQgGAOgJAOQgRAcgbAdIAhgJIgiAeIgjgSQgDgCgEgBIgFAGIACgBIAAAAQgOAWggAEIgXACIgqAKIg1gPIABACIAAABIgBAAQg+gNgzgkIgGgFIgBAAIABgBIgbgmIADgMIgKAKIgEADIgEAFIAAACQABAFgDADQAGAGgBAKIAAAFIgBAEQAFAIAHAHIADACIAEAIIAUAJIAAgCQAOAFAPAAIBAAUIA+ASIAHAAIAGAAIAVAEIAegIIAKAAIAWgIIAcgKIABAAIAIAFIABAAQAFAAABgDIABgBIABgEIABgFQAMgLARARIAFACIADABQARAFANgIIAEgCIAJABIgBACIABgCIAIADQAHAEACAIIAAABIgFAGIAEAAQgBADgDADQgGAFgLABQgIgOgKAHIgDACIAAACIAAABIAAABIAAAAIADASIgGANIgDADIgXAYIgoAfIgBABIgLAIIgDACQgRALgWADIglALIABACQgPACgPAAQgeAAgfgGgABlhiIAHAAIAAgCgADvifQgPAEAMACIADgBIADgHIgBAAIgCACgAEJjFIAAABIAAgCIAAABgAgDl0IAAADIAAAFIAAAIIAAATQADADADgBQADgBABgKIAGgJIAqgUIAOAGIABACIAAgBIARAHQAEABgBgHIADAAIgBgDQgCgDgFgFIgHgGIgHAAQgLgFgKgCQgLgBgKACIgJgBgABSlcIABAAIgBgBIAAABgADWmgIAUAeIACgIIgBAAIgDgfIhZAFIAAAEIABAFIABgBQAFAIALgHIAAAAIACgBIALgEg");
	this.shape_540.setTransform(-3.1,-2);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#BFAEA7").s().p("AAAAAIAAAAIAAAAg");
	this.shape_541.setTransform(50.6,-49.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#6F5F57").s().p("AgBADIAAgBQgHgVANAUIAAAAIgGAJIAAgHg");
	this.shape_542.setTransform(50.1,-50);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#503C35").s().p("AgEABIgBgFIAAgBQAAgGAKAFIAAABIABAKIAAABIgBABIAAAAQgNgUAHAVIAAABIgDgIg");
	this.shape_543.setTransform(50.1,-50.6);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#596B72").s().p("AgDAWIAFgoIACgFIgDAtIgBAAIAAABIgBABIgCgCg");
	this.shape_544.setTransform(46.4,-48);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#849299").s().p("AgBAOIAAggIADAcIgBAEIgBAFg");
	this.shape_545.setTransform(46.7,-51.8);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#C6A699").s().p("AADAXIgBgLIAAgBIgEgaIAAgBQgDgJAFADIABAAIADAtIgBABg");
	this.shape_546.setTransform(50.4,-52.4);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#8C8783").s().p("AgFAFQgJgNAMAEIAMAHIgGgBIgBAAQgDgBgBgBIgBAAQgGgDADAIIABABIgBgBg");
	this.shape_547.setTransform(50.6,-54.6);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#917063").s().p("AAIAaIgVg2IABgFIAaBDg");
	this.shape_548.setTransform(40.7,-53.4);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#89959A").s().p("AgEgQIADABIAGAgIgJghg");
	this.shape_549.setTransform(42.2,-53.7);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#9E9E9B").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_550.setTransform(44.3,-56.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#5C504A").s().p("AgYgGIAGAGIACAMIAFAvIgBAAgAAYArIABgBIgBABgAgMgSIAAgBIAAACgAgTgzIgDgIIADAIgAgBg3IABAAIgBAAg");
	this.shape_551.setTransform(44,-50.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#C7B7B0").s().p("AAAADIAAgBIAAgEIABAFIgBAAg");
	this.shape_552.setTransform(43.5,-57);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#67615D").s().p("AAMgBIAAgBIgDgKIgBgCQAAgEgCgDIACgBQAEAJACAKIACALQABAJgBAKgAgOgWIgBgEIACAEIgBAAg");
	this.shape_553.setTransform(45.3,-53.4);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#716867").s().p("AALAKQgDgJgGgFQgFgGgIAIIgBADQAAgEACgDQADgGAGACIAHAFIABADIADAGIADAHg");
	this.shape_554.setTransform(40.6,-56.4);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#755B4F").s().p("AgPgMIAGAAIAFACIAUAXg");
	this.shape_555.setTransform(45.6,-60.2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#68625F").s().p("AgJAOIgPgOIAAgBIASANIAaABIAFAEgAgYgPIAAgBIAXAQg");
	this.shape_556.setTransform(42.5,-60.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#0D0908").s().p("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");
	this.shape_557.setTransform(-11.4,-8.2);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#C8BFBA").s().p("AAAAAIAAAAIABAAg");
	this.shape_558.setTransform(44.6,-59.4);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFF99").s().p("ADiC9IgDAEIgaAIgABtDDIgFgDIAWgMIAWgUIAAAAIAPgSIAKgOIAKAGIglA4IgDACIgfAEIgDgBgAEQCHIAGAEIgGAIgACMA9IAGAFIgJALQADgIAAgIgADNA9IAEgSIAAAAIADAKIAAABIgBAIgADGAJIAHACIgHAVgADaAdIAEgQIgDAQgACqARQAGgEgEgIIADgDQADAGACAGIgBABIgEAGgAjxgPIAAgBIgCgJIgEgbIAEgBQADAPABATIAAAFIgBABIgBgCgAkVgWIAEgRIAHACIAAALIgLAIgACggjIABgEIADADIAAABIABABgACPg9IgUgSIADgCIARAPIAAAFgAiYhVIABgBIAIAEIgBAAIgGACQgEAAACgFgADGhpIAAAAIgBAAIACgDIAJAIIgDABQgDgEgEgCgAhih/IALgFIABABIgJAHgAi3icIgCgFIARgJIgOAOIgBAAgAhajIIAEAEIgEAAg");
	this.shape_559.setTransform(12.1,-46.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#AB9E96").s().p("AAWAJIgsgPIAAgCQAWAHAWAJIABABIgBAAg");
	this.shape_560.setTransform(40.5,-63.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#635248").s().p("AgWgIIAsAPIABACg");
	this.shape_561.setTransform(40.5,-63.3);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#9B8276").s().p("AADAFIgKgHIgBgCIABAAIAQAJg");
	this.shape_562.setTransform(43.6,-62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.daydreamingguystill, new cjs.Rectangle(-133.1,-74.1,312.3,142.6), null);


(lib.bk3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9933","#980189"],[0.008,1],53.8,-17.5,53.8,22.4).s().p("AhSChQgKgEgHgBIgIgCIAKgFQAQgIAIgGQAkgkABgFIgBgCIgFgBQgNAAgTAIIgUAJIABgBQA6hQAAgOIgBgDIgCgBQgIAAgbARIgkAYIgBgBQAEgLAJglQAJglAAgIQAAgBAAAAQgBgBAAgBQAAAAgBAAQAAgBgBAAQgeAggaAVQgNgpgIgcIgEgQQAHAIAJAIIAFADQAQANALAAQADAAAAgMIAAgEQgEgeAAgMQAAgQAFgLQAKgXADgLQAIAnAZAlIATAbQAiAwAFAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAgDQgDgMgCgMIAAgUIAAgGQAAgXAEgPIADgOQACAOAUAsIACAEIALAiQAFATAHALQAQgTAtgwQgQAvgUAvQAAAAAAABQAAABAAAAQABABAAAAQABAAABAAQAJgNAdgTIAtgdIACACQAAAJgUAnIgGAOQgEAIgFAEQgeARAAAGIABADIACAAQANAAAhgQQAbgNANgJIABAAQgTAfgkAeIggAYIAAABQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAIAqgPIABABQgDAJgbANQgYAMgUAEIgDABIgUAGQgnAMgJAAQgzAAgTgHg");
	this.shape.setTransform(116.2,175.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#6A6A6A"],[0,1],125.1,-9.1,125.1,2.7).s().p("AhKAvIgNgEIAAAAIANgBQAPgFAYgMIASgJIANgIQAKgHAGgFQANgNAggUQASgMAGgFQAJAHgCAVQAAAJgDAZIgBAIIgBAGIgBAFIgBAAIgDAAIAAADIABACQgHAHgQAHQgXAJgLAAQg+AAgigIg");
	this.shape_1.setTransform(50,189.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9933","#660033"],[0.008,1],76.2,-16.3,76.2,23.6).s().p("AA4CoIAAgBIAFgGQARgVAAgIIgDgDQgPALgTAAIAAgJIADgLQAAgFgEAAQgGAAgWALIgZAMIAAgBQAJgRAAgGIgBgBIgDgBIhFAeQAEgKAAgIQABgKgFAAIgYAbQgNAMgXAHIgFABIgIABIABgBIAAgCQAAgFADgCQALgNAAgMQAAgGgFgCQgVgHgFAEIgCABIgCgEQgBgCAAgJIAAgEQAKgCAHgFQAHgHABgGIABAAIABgWQAAgMgNgeIgNgaIADgBQAYAFAJAOIAFANQADAHADAEIADgBIAAgJQAAghgVgnQgOgcgZgfIAAAAQAqAaAaAhQAWAbAKAfIACgBIAAgxIgBgIQgEgYgPggQgVgrgJgVQBJBMATAsQAHAPAAALIgDAJQgDAJABAIQgBABADADQAKgMAAgHQAAgHAJgeIAEgRIANgyQACAWAMAtIACAHQAOAtAAAaQAAAGgEAKQgEAJAAAFQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAqgZA4g3QgFAJgCAPIgEAaQgKAkgOAQQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAkgaQAbgTAXgJQgIASgcAqQgbAmAAABIAAADIADABIAWgLQAXgLAMgCIAAABQgOAUgVAQQgIAHgTAIIgBABIgLAEIgJACIgBABIAAAAQgMAEgKAAQgKAAgGgFg");
	this.shape_2.setTransform(93.7,174.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#919191"],[0,1],120.9,-8.1,120.9,3.7).s().p("AiSAtQgJgGgCgJIAAgFIgBgEIAGgDQAOgKAWgJQAUgKAagLQBBgaAiAAIABADIgZAOQgZAPgNAQQgGAJgOAJIgNAHIgMAGQgWALgQADQgKACgGAAQgDgFgCAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIAAAFIgGgEgAA0ArIgKgEIAGgOIABgHQACgOAAgTIAPgLQAQgKAcAAQARAAAQAVQAMAPADASIAAAHIAAADQABAFgJAGQgNAJgUAAQgMAAg1gFg");
	this.shape_3.setTransform(54.2,188.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],997.2,-60.1,997.2,5.8).s().p("AgBAJIAAgQIADAGIAAABIgCAIIAAAAIAAABg");
	this.shape_4.setTransform(67.6,138.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#67E473","#015C13"],[0.008,1],328.6,-53.2,328.6,53.4).s().p("AgVgQIAAgKIALAAQAGgDANgMQAIAAAGALIAABFIgsADg");
	this.shape_5.setTransform(40.2,150.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#67E473","#015C13"],[0.008,1],26.3,-24.1,26.3,82.5).s().p("AjnA5QAbgUAoAAQgUgOguAHQgzAMgVADQATgbAmgQQAogRAgAHIABgFIAFAAQghgVACgOQARAAAPALIAZARQAPgVAzgOQgDAHgKAJQgKAJgDAIIAvgOQAigIAVAKIgmAKQgVAHgKALQAmgDAeALQAdAMAJAVQgqgTgrADQAJAKAWAUQASASABARQgqg3grANQAnAbAFArIgbgaQgSgOgPABQAIAIgGABQgKgHgdAAQgHABgNAIQgMAHgDAAQABgHAKgHQAJgJACgFQgdgCgiAVIgbASQgQAKgNAEQAFglAfgUgADDAMQgLACgFAPQgHARgGADQgCgKAFgQQAEgQgBgIQgFgRgbgIQghgGgPgEQAogOAbAJQgHgFgagOQgWgLgKgKQAcgGAyAZQgLgPgPgiQAOgDAPAMIAWAVIADgRQACgMAHgDQAAAHACAKIACANQAfgQALgCQgCAHgJAGQgMAHgCADQA8ACAMAfQgNADgPgBQgPgCgIgFIAXAeQAQAUAAAVQgLACgMgMQgRgPgEgCIAOAsQAIAggRAMQgEgHgIgbQgFgXgLgGIgOAjQgKAVgLAJIAHhIg");
	this.shape_6.setTransform(80.8,115.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF9933","#660033"],[0.008,1],197.4,-32.1,197.4,7.8).s().p("AhmAJIAAgCIAIgEIADACQAJAEAFgBQANAAAGgGIACAAIAGAHQAEAFAFAAQAFAAAKgFIAMgHIAagVIABABQgFAKgBAFIABADIADAAQBEgPAYgPQgMAPgQAKIgTAHIgGACIgMAFQgJAFAAADIAAACIABAFIgEABQgYAGgtAAQgKgBgxgVg");
	this.shape_7.setTransform(305.7,190.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#67E473","#015C13"],[0.008,1],96.6,-70.2,96.6,36.4).s().p("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");
	this.shape_8.setTransform(409.7,167.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#67E473","#015C13"],[0.008,1],353.6,-31.2,353.6,8.7).s().p("AghA1IgHgFIgEgDIgCgDIgCABIgBABQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgGAAQgBgCAAgHIAAgKQACgGAFgCIgEgCIgDgCQgCgCAAgFQAAgLAJgCIAFgBQAFgCABgDQgCgFACgDQACgCAGgEIAJgFIAGgHIAIgHIAIAAIAAABIABAAIAAAAIACABIACgCQADgBAEAAIAAgCIACABIABABQAXgIASgBIAABbIABAAQAIAAAAACQAAABAAAAQAAAAgBABQAAAAAAABQgBAAgBABQABAAABAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgFABIgGAAIgKAAIABABIgUAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgCAAIAAACIgDAAIgGgBIgBAAIAAABIgDAAIgDgDIgHAAIgHADQgFACgLAAIgCgBg");
	this.shape_9.setTransform(244.2,189.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#ADFC36","#BB9500"],[0.008,1],-50.1,-6.8,-50.1,8.4).s().p("AhhBbIgGgEQgMgJgHgOQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAFANAQIAFAFIgfAAIgDgBIgOAAIgDAAIgCgEIgNgOIAAgBQgHgKgDgCQgQgZgGgaQAHALANAMQAPAOAJAAIADgBIAAgEIgNgnQgHgSgBgUQAIAQAEAFQAPAUAIgBIACAAIAAgLIgBgPIAAAAQAVAUADAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAgBIgBgPQAAgKAFgBIgDAEIACABIADgBIAFALQABADAGAFQAFAGAEAAQAIAAADgoIAAAAIADAJQADAHAIAAQAHgBALgOIAWgbIAAAAIgBASQAAAMAIAAQACAAAagdQAZgbAEgGQgCANgFAUQgFASAAAOQAAAHACADQAFgIAkgVIAAAFIgKAfQgGAOABAMIAAAIQABAHAKAAQAJAAARgNQASgNAKgRIAAAAQgKAfABAGIAAAEQABAFADAAQAEAAAQgOQAQgOAMgDIAAAIQgDAKgEARQgFANAAAPQAAABAAAAQAAAAAAABQABAAAAAAQAAABABAAIABgBQACgJAOgGIAQgGIAQgDIACABQgOAJABAMQgOACgEAGQAAACAAAIIAAAGIABADIgMgBIgBABIgCADQgBACgOAAQgJAAgFgFQgDgGgBABQgEADgDACQgIAEgHAAQgFAAgBgEIAAgGIgCgBIgJAHQgGADgDABQgOAAgBgCQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgCAAQgTAHgMAAQgDAAAAgFIAAgCQAAgEgDAAIgJAEQgIADgGABQgGgBgBgDIAAgCQAAgHgCgCQgDAIgNAAQgIAAgDgPIgCAAQgBAAgFAJQgDAHgFACIgFABIgCgBQgDgBgEgFIgGgHIgCAAQAAADAFAKIADAHQAAAFgHAAQgKAAgNgIg");
	this.shape_10.setTransform(220.2,182.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FEDD92","#D2A679"],[0,1],1026.9,-112,1037.9,-7.2).s().p("ApdAHIABAAIAAAAIgBAAgAm2gFIABABIAAAAgAJegGIAAAAIAAAAg");
	this.shape_11.setTransform(101.6,193.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#C25812","#FF9933"],[0,1],-3.5,16.1,-8.2,-1.5).s().p("AhFBQIgKgKIgKgIQgSgNgMgMQgKgKgCgOIgCgYQAEAIARAKQASALAKAAIACAAIAAgDQgBgKgJgRQgHgPAAgPQAAgLAFgDQAEAFACANQAGASALAAQAIAAAEgYQABAFAEAIQAGALAGAAQAMAAAYhAIAGAvIAAALIABAAIAUgTIALgUIAAAAIAAAuIgEAOIACACQAqgbANgbIABAAIgLAiQgGASgHAOQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAJgHAZgOQARgLAGgHIgUAjQgKAPgZAXIACACQAXgLArgZQgMAQgWAUQgTAQgMAGQgGADgFAAIgEgDQgDgCgEAAQgFAAgHACIgSAGIggAIIAAgBIALgNQANgSAAgJIAAgEIgCAAIgMAUIgIALQgJALgGAAQgEgKgFAAQgRAOgCAAQgKAAgDgFg");
	this.shape_12.setTransform(163.8,184.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#67E473","#015C13"],[0.008,1],28,-88.1,28,18.5).s().p("ANuCMIAAgBIAAABgANOCMIABgCIABACgAMFCMIABgBIAAABgALdCMIAGgDIAAABIAAACgALCCMQAEgEACgIIADAIQACADAEABgAF+CMQAEgEAVAAQAjgCAAgNIgBgEIAIAAIAAABIABAGQAAABABAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAEADQAHAFAKAAIADgBIAdAAIACABIAmAAIAHAAQAUgBAGgEIAHAIIADADgAC0CMQAFgGADgGIABAAIAAAAQgCAEgGAIgABZCMIAGgGIAHAGgAizCMIAGgCQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAgAjmCMIAJgDIAJgDIAEgBIAAABIAAABIABAEIABABgAnkCMIARgBIACABgAqPCKIACAAIABABIgDgBgAm+BwIABgBIAAACgAEPBqIABgBIAAABgApQBiIABAAIAAABgAiaBeIAAAAIAAABgAECBJIAAAAIAAABgAttBCIADAAIgCACgAJdAxIACAAIAAACIgCgCgAmOAiIABAAIAAAAgANpAiIABgBIAAABgAESAMIAAgBIABABgADdAEIAAAAIAAAAgAq1iLIABAAIAAAAIgBAAg");
	this.shape_13.setTransform(144.9,177.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#67E473","#015C13"],[0.008,1],46.4,-16.2,46.4,23.7).s().p("ADFCtQgQgEgfgBIgdgBIgBABQgFADggABQgYgBgIgDIgEgDIgBgCIAAgCQAAgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgHADQgKAEgNAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAIAAgBIgBgDQA+gWAAgVIgBgCIgCgBIgdAJIAAAAIArgqIAEABIAQgBQARgCAFAEIADAEQACAEADAAQABAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQAGgTACgEQAJgNAZgDIABgFQAAgGgDgJQgDgJAAgGQAAgIAIgGQAIgGAagJQAFgDANADQAKAAABgOQgBgGADgDQAGgGASAAQAGgBAGAGIAGAGIANgOIAAgCIAIAAQAIAAADAEIADAEIAGAJIAKgSIACgCQAFgJAEAAQAFAAAIAJIABABIACgBIAAgEIgBgJQACgOAaAAIAQAJQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQgCgEACgDQACgHAOAAQAYAAALASQAEAHACAIIABAFIADgFQAEgGAEgDQANgOATAAQATAAANAQIAFAHQAFAHAAAEIAAACIAAABIAAADIACAAIABAAIABgDIADgBQAFABAEAFQADAFAAADQAAAGgMAMIACABIALgCQATAAgBASQAAALgIAKIAKAHQALAGAAAFIgBADQACABAGAAIAIAAQgCgaARABQAQgBADALQADAMABgBQAEAAAAgGQgDgFAAgDQAAgDACgCQAFgDAPAAQALAAAAAMIACAAQACAAADgEQAFgGANABQADAAAEAIQAEAIABAGQgIADAAAEQAAADADADQADAEAAAEQAAASgcAFQgdADAAADIABABQATgEAAATQAAAEgIAJIgHAGIgJADIgRABIAAADIAEAFQAAANgzgBQgGAAgCAEIgEAEIgEACIgmABIgCgEQgDgDgBAAQgBAAAAAAQAAAAgBABQAAAAgBABQAAAAgBABIAAAAQgDAEgRAAQAJgDghAAIgLADIgDgEIAKgHIAZgUQAfgWAAgNIgBgBIgCgBQgGAAgVANIgdARIAAgBQAJgJAVghQAUggAAgDIgBgBIgBgBQgUAVgEACIgmAYIAAAAQAGgLAKghQAJgeAAgFIAAgBIgCgBQgPAbgFAGQgQAUgVAMIAAgBIABhAIgDgBIgBABQgJAcgUAPIgDgfIgFgeQgDAGgRAlQgNAcgFAAQgJAAgDgPQgCgRgCgEIgCAAQAAAIgEANQgEAPgEABQgHgBgGgRQgFgTgFAAQgHAAAAASQAAANAQArQgggKgHgJQgJgWgEABIgBABIAAAJQACAJACASQADAQAHALQAGAIAWAQIgDACIgNAHIgFADQgJAGgNgBIgHABIgOAAIgVABIgXgFgAk2CsQgTAAgEgEIgBAAQgEgDgDAAIgTADIgJABIgoADQgNgBgOgDIgCgBIgBgBIAPgFQAKgFAKgHQATgNAHgKIABABQABAGgFANQAAADADACQAQgKAygSIAAACIgEAOIAAADQABADAEAAQAQAAAlgYQgDAJAAAGIAAAFQACAFAIAAQAJgBADgBIAHgEIABABQgFAOgFAHIgDADIgFgDIgCgBIgHABQgLAAgRAFIgDABIgPAFIgGgBgAnjCoIgDAAIglgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBgFQgCgUgLgPQgRgZghAAQgNAAgVAKQgKAFgFAEQAAgggRABQg5AAg0AZIgrASIgNAHQgYALgIAJIgBACIgCADIAAlVIADABIAEAAQAYAIAOATIACAAIABgDQAEgHATAAQAIAAAGACQAFADADAEQAFAFAAAEIgDAJQgDAHAAAFIAAAEIAFAAQADAAAFgDQAGgDALgBQAMAAAAAUQAAAaADAGIABgBIABgEIABgBQABgBAMAAQAHAAAMAJQALAJAAACQAAACgDAEIgCABIABACIAFABQAtAAgCANIgDAJQABAEAKAAQAFAAAFgCQAEgCASAAQANAAACAaQAAAGgIAHIgIAIIABADIACABQAHAAAWgQQAWgPABAAQAFABAFANQAAAGgDAEIACADIACAAQgBgIASAAQAaAAAAAgQAAAIARALQARALAAACQAAAHgRAGQgRAFAAABIAAACIADACIAGgBIAAANIAEAIQAOAQAKgEIAIgEQgBAEgDAGQgEAIgDADQgCAIgDAEIgBAAQgFAGgRABIgGAAgAL3CdIgnAAIgBgBIgdAAIgTgCQgEgCAAgGIACgDIADAAIACAAQAHgEAFgFQAHgJAAgHQAAgIgIgIIACAAQAqgHAAgWIAAgHIgFgGQAAgCAEgDQADgCAAgCQgEgZgPAAQgMAAgHAGIgEgFQgEgEgKgBQgJAAgGAFIgGAEIgJgFQgEgDgHAAQgSAAAAAZIgJAAQgBgHgSgLQAGgKAAgKQAAgJgCgEQgFgIgRgCQAFgHAAgFQgBgLgFgEIAAgMIACgJQAGgOAPAAQAHAAAEAGQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAgYIgCgJQAAgHANgBQAMgBAAgGQgEgPAAgHIAAgEQAEgFANAAQAVAAAIALQADAEACAJIABgBQABgBABgLQAFgLARAAQALAAADAIQADAHADAAIAUgKQAGAAAIATQAIARADABQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAMAKAAAEIgCAHQAAACAXAEQAXADAAARIAAAJQgDANgKAQQAgAQAAAHQAAACgGAFQgHAFAAAFQAAADAOAGQAOAGAAAJQAAAEgCADQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgHgBAAAKIAAARQgZgUgDgIQgLgbgCAAIgBAAIAAAEIAKAbQAEAFABAJIACAMIAAACIgCAAQgOgKgLgUQgKgSgBABIgCAAIAAADQADAaAUA+QgSgIgQgUIgMgSIgCABIAAAGQAEAYALAWQACAEAIAJQAAAEABACIAGAGIgCABIgKABIgMADgAi3A+IAAAAIAAAAgAnUgNQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIABABIgDABgABJgPIABAAIAAABIAAABg");
	this.shape_14.setTransform(123.5,174.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#ADFC36","#BB9500"],[0.008,1],177.5,19.9,172.4,2.3).s().p("Ag1BxIARgGIAOgHIAQgKQAWgRAAgKQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgnATIg0ANIAAAAQAEgIAAgGQABgHgFAAQgbAVgPAJQgLAGgEAAQgDAAgEgGQgFgHgCAAQgDAAgFAEQgDACgEABIgKABIgCgBIgGgDIAZgOQAAgFgGAAQAFgDAAgFQgDgJgJgGIAAgPQAAgQgDgHQgHgNgFgSQAIAFAFAKQAGAMACACQAGgLAAgVQAAgJgFgcIgHgfIAbAjQAWAdAHAQIACAAQgDgZAVglIATgeIAJgQIAHgOIAAAAIAAASQgCAHAAASIACAgIAAAQQAAALADAFIADgBQAGgTAvgbIBRgsIAAAAIg1BaQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAQArgVAhgHQA1gMATgGIg7AkQguAbAAAFQAAAAAAABQAAAAAAABQAAAAABABQABAAAAAAQALgDAqgGIA5gIIAAABQh8BFAAAEIADAEQANgGAVgDIAqgFIAAAAQgVAegfAQIgGADIABACIADABIAQgGIAsgQIAAABQgHACgHAGIgGAHIgGAFIgFACQgWALg2AAIgGgDIgDgBQg0AOgWAAQgWAAAMgPg");
	this.shape_15.setTransform(315.1,180.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#67E473","#015C13"],[0.008,1],217.5,-90.3,217.5,16.3).s().p("AGCB2IABgBIABABgABuBuIACgBIAAABgAC3BmIABgBIAAABIgBAAgAGaBfIABAAIgBAAgAC1BZIABAAIAAABgAnBA5IAAAAIABAAgAHBAAIABAAIgCAAgAF1grIAFAAIgFABgAFYhlIAAAAIAAABgADLh0IAAgBIAAABg");
	this.shape_16.setTransform(288.8,179.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#67E473","#015C13"],[0.008,1],-71.5,-68.8,-71.5,37.8).s().p("AAAAFIAAgLIABgBIAAANIgBACg");
	this.shape_17.setTransform(351.6,157.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#67E473","#015C13"],[0.008,1],175.2,-18.3,175.2,21.6).s().p("AsLC1IAAgCIAFAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBABQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgCgIgBIgBAAIAAhbIADAAQAKAAABACQAAABABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIAEgIQAGgHALAAIAIACQAFADADAAIAFgCQALgGAEAHIACACQACAAAEgFIACgIQgEgLAAgGIAAgFIAUAAIAIAEQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgGQgDgIACgGQAFgNAegBIAFADQADAAAGgIQAGgJAGgBQAEAAAHAKQAIAIAEgBQAAAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQgDgIABgGQACgLASABQADAAAKAIQAKAKADAAQACAAABgEIADgIQAFgMAVABQAHgBAPAYIgBAGQAfgIAGATQAAAFgFALIABAFIAFAAIAQgEQgCAGgFAGQgDADAAAGQAAADACABQAHAJAEgBQACAAAEgEQAJgJALAKQADACACAEQAAAEADABQAcgGAMAHQAIAFAAAEQAAADgGAHQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAQAFgDATAAQAQABALAFQAJAFAAAFQAAAHghAVIgBABIgNAIQgaANgTAAQgNAAAAgDQgBgDgCAAQgBgBgFAHQgEAGgEAAQgPgJgEAAQgBAAgDADQgCAEgJAAQgCAAgFgFQgFgEgCAAIgDAAQAFAMggAAIgEgGQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIAAACQAAABgVAAQgFAAgGgGIgFgFIgEAAIACAIQgCAEgRAAQgGAAgBgEQgCgEgCAAIgFAFQgGAEgUAAQgKAAgKgIIgKgHIgDABQAAADADAGQgBAGgTgBQgDAAgGgDIgGgFQgDABgCAFQgEAFgUABIgYgKQgaAPgQADgAEXCnIgfgGQgFgHgEgEIgCgBIgDgBIgBAAIgDgDIgEADQgIADgWAFQggAHgQAAQgrgBgJgHQgCgGgCgBQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgGACIgGABQgKAEgSAAQgYAAgNgEIgDgBIgGgDIgBABIACgCIAFgEIAhgYIgBgCIgCgBQgoAPgJABIAVgTQARgSAAgCIAAgCIgEgBIhBAJIB6hKIgDgBQhiANgNADQBqg7ABgKIgBgBIgDgBIhOAVIgGAAIAAgDQgDgEABgHIAAgHQAEgJATAAQARAAAIAEIAIADQABAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAgUARgPIAJgFIANABQAJABACgJIACgLQAAgUARgBIAKACQADgZAOgLQAOgOAbgBQASABANAIIANAJQACgBAEgHIAHgLIABABIABgBIACgBIAGgFQAFgDAOgEIAeAAQATADAJAOQAJANAFAAIAZgHQAcgIARAAIAMAAIALARQAHAJAGAFIBXABIA9AGQAKABAGAHIAFALQAGAUAOAXQAbABASAGQARAGACAKQAGAXAAAIQAAAMALAGIAWALQAGAEAGALQAGALAAAGIAAAZQAEALAYgEIADAEIAAAHQAAAWgiAKQgJAGgLAFQgWAIgpABQgCAAgDgDQgEgDgDAAIgbAIQgcAJgLABIgKgIQgEgCgIAAIgJABQgJADgBABQgKACgNADQgKAEgSACIg0AGIgfAAIgLABQgIAAgJgFIgLgGIgYAHQgWAFgOABQgFgBgegEgAlECTIABgBIAAACIgBgBgAA7AdIAAAAIAAABg");
	this.shape_18.setTransform(327.8,176.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#67E473","#015C13"],[0.008,1],85.4,-60.1,85.4,46.5).s().p("AGcErQAKgkAAgQIAAgIIgDAAQgJAAgSAPIgVARIAAAAIAAgHQAMghAAgSQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgfA8gfAAQgFAAAAgLQAAgKAIgWQAIgYAAgFIAAgGIgDAAQgMgBgcAaIAAgIQACgNAGgVQAFgRAAgOQAAgEgCgCIgbAiQgXAWgLANQgDgHAAgLQAAgMgCgFQgfAvgKAAQgHAAgDgJQgEgKgBAAQgCAAgEARQgDAUgDAGQgKgHgDgIIgDgJIABgCQADgFAAgCQAAgNgOgGQgOgFAAgCQAAgBAGgHQAHgGAAgEQAAgJgfgOIAAgBQAJgPACgNIABgJQAAgZgugBIACgGQgIgUgLAAQgDAAgIgQQgHgSgIABQgFAAgGADIgIAGIgFgIQgFgGgKAAQgWAAgEAOQgJgPgYAAQgVAAAAAOQAAAJAEAMIgMADQgMADAAAKIABALIAAAPQgFgEgEAAQgZAAgBAbIgBAFIABAGIgGgBIgEAAIgEgKQgNgagcAAQgVAAgVAWIAAAAQgIghgjAAQgWAAACANIgFgEQgGgCgMAAQgKgBgEADQgIAFAAASQgFgIgHAAQgGAAgGALIgCACIgHANQgBgFgDgCQgEgFgIgBIgGAAIgJAAIgCAAIABABIgBAAQgHAIgCAAQgLgHgLABQgLgBgHAHQgHAEgBAFIgBAJQgQACgLADQgrAPAAAVQAAAHABAGIAEAPQgWAGgKAMIgKASIgEgEQgBgBgQAAQgPAAgHABQAcgdAAgLIgBgBIgCgBQg7AmgbAIIgBAAIABgBQASgJAIgOIALgXQARgYAAgYQAAgGgDgDIhLA0IAAgBIAPgrIAKgkIACgIQAAgIgDAAIgDACIgIAOQgQAYglAjIgSg7QgWg+gGAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgBIAAgIQABgNgEAAIgCABIgGA8IgCAXQgBAUACAOIAAAAQgUgVgJgNIgDgDQgNgbgIgLQgJgMgLghIgIgeQgGABgKAjQgKAiAAAFIAEApIAAAEIAAAGIgSgKQgMgHgEgEIgPgXIgCABIAAAQIADARIALAoQAJAfAFACQgVASgUAMIAAgBQAGgNAAgKQAAgNgQhCIgBgEQgIg7gHgaQgHASgJAkQgFAUgGAPIgHASIgHgSIgIgUQgJgWgNgPQgRgUgYgZIgTgUQgJgJgBABIgDAAIADAIIAdBDQAPAfAEAYQACAKAAAKIgBAKIgUgeQgKgMgJgIQg3gzgLAAIgCABQACAGAlA+IABACQAVAlADAYQgEgIgHgHQgNgMgTAAIgFAAIAAAFIANAeQANAeAAAKIAAAQQgEgFgIgEQgRgJgBgLQgGgjgZAAIgOABQAAgFgEgHQgFgIgFAAQgFgBgQAMIgSAOIgBgBQAGgGAAgHQAAgIgDgIQgHgQgTAAQgIAAgEACQgFACgLAAQgBAAAAgGIAAgKQAAgFgIgEQgLgEgXADQAFgIgPgKQgQgLgXgBQABgQgCgKQgEgSgPAAIgVAGQAGgNAAgHQgBgGgEgFQgEgGgHgDQgHgDgKAAIgXAFIgCAAQgHgGgLgFIgHgEIgSgGIgDgBIAAhFIADAAIAAA7IAtgDIAAhGIACAEIADALQACAEABAAIAFgEIAUgTQAHAAALAUIAGALQADAAAIgLIAHgKIAOAKIARAOIAFgLIABgCQAEgKACAAQAJAAALALIAGAFIAFAHIgBgGIAAgBIgBgCIgBgDIgFgLQgIgQACgNQAEgEALACIAKABIAAAAQAEABADACIABAAIABACIADgCIAEABQAEACAEAAIgHgNQgEgHABgIIAGgDQADgCADAAQAGgBAFAFQAGAFAEAAQAAgHADgIIADgGIAEgGQAEgEADgCIAMgDIACABIAGACIACAAIABAAQAFgDALgKQAKgKAJgCQAKAHgHARIgFANQgDAIAAACQAHgBALgIIADgCIADgDIAGAAIABACIAFAFIAGADIAAAFQAAANAFACIAFgMQADgJADgCIABAAQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIACAAIAFAEIALAFQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIAAgBIAFACQgFgLAAgJQAAgFACgFQANgFAPAFIAOAIIAIADIABgEQAIgVAXgOIAEAQQABAKAHACQAGAAALgKQALgNAJgBQAEAEgDAGQgDAHACACQAEgBAKgGQAHgGAJABQAEACACAHIAAABQACAFADACIADAAQgDgIAEgKQADgJAIgBQAGABAJAGQAJAGAGABQgDgIACgHQABgIAHAAIAMAMQAHAJAHACQAFgMALgEQANAFAQAUQAFgJANAAQAJADAFALIACADIAIAQQAHABAFgJQAGgHAHAAQADAOASAKQAPgRAJgGIAEgDIACADIAIANQAFAIAJACQAEAAAFgGQAEgGAFAAQAAAJAKAIQALABAJgDIAPgIIAIgOQANgUATgOQAcgUAggCQgbARgMAKQgQAOgIARIgCAIIASgHIAYgKQAbgJAWAFQgGACgfALIgGADQgSAHgHAJIAjAAQAZAAAKAFQAFgJARABQANAAAJAGQACgIAFgEQAFgDAKABQAIACAIADIALAGIADgFQALgVAhgLQAOAIACAGQAIgFASgHIAAABIACABQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBQACgBANAAQAJAAAGAHQAGAJAFAAQABAAAAABQABAAAAAAQAAABABAAQABAAAAAAIgBgCIACgCIgCAAIgEgPIgHgUQAHABAMAGQALAGAIABQgBgYgXgWIgTgPQgKgJgDgHQAOgCAVAEIABgBIAGADIABAAIAAABIAIAHIAMAKIAAAAQAHAJAHAEQABgRgLgQQgOgUgCgIQADgBAEABQACACAIAAIACABIADACIgDAAQAMADAIATQAJAUAIAFIAMgeQAHgRAHgKQACAPgIASQgIATAAAFQAIgCARgRQARgRAOgCQgHALgPALIgZAUQAHABAZgFQAXgGALADQgIAGgVAHQgWAFgIAFQAFAEARgDQAQgDAEAHQgQAGgcAGQAAAGALABQALACgBAHQAAAFgEACQgFADAAACQAEAEAEgBIANgBQAEAFAFAPIAEAIQADAHAFACQgDgGAEgDQACgBAEgBIAHABQAGACAEAHIAJAUQAGgFAKACIASAGQgDgQAUgFQALgCAagDQAAADAFAEIgFAGQgEAEAEAEQAFgBAJgIQAHgGAIABQAIAAAIAMQAJAMAGABQgEgIACgJQACgKAJgBQAIABAIAJQADgMAHAAIABAHIABAAIACAGQADAHAEAEQAFgRAUABQAPABAQAKIATgTQAFgDAGAAIAEAAIAEAAIAVAFIAAABQAEADADADQACgFAEgEQAJgJATADQAOAEAGAHQAGAHABAJQAAgJADgFQACgGAEgDQACABADAGIACADQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAAAAIADgGQABgEADgBQAFABADALQADAMAFACQACgGAOABQACABACAJQACAHAEABQAOgMAcABQAMAAAWADIACAAIAAAAIAAABIgCACIABABIACAAIADgBQACABAJAAIACAAQAMAAADgDIACgDIACgBIAAAAIABAAIADABQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAAAAIABAAIADgIIAFgSQAFgRAKgDQABAKgFAJQgGALAAAHQAGgCAJgIQAJgHAHgCQAFAJgKAPQgJANAHAIQAFgBAEgDQAGgCAFAAQAJAAADAIIACAHIgBACIgKAQIAQgOIAGgIQAOgNANAGQAEABAGAKQAEAKAHgBQgDgBAEgGQADgFAFABQAKAAAMAJQAMAKAEAAQACgMAQAGQANAFAFAIIABACIADgCQAFgEAMACIALACIALACIAAgCQgCgKgNgYQgNgZAAgLQAKAEAPANQAPAMAJAGQgBgOAGgOQAHgQACgIQAFAEAGARQAFARAHAEQAagbAVgKQgFAJgOARQgOAQgEAMIAggLQAYgIAOAEIgZAOQgPAIgHAIQAFACAWABQATAAAIAEIgSAGIgNACQAEAFAIAFIALAGQANAGAJABQABACgDAGQgCAEAGAAIATgHQAPgEALAGQAAAIgHAFQgJAFgBAGIAVgHQAJgDAMAJIAAACQh9AHhwAlQBuACBvgRIA6gHIgCgEQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQB+gPCEABQCPADCJgHIkfgEQAAgTAKgCQAFABAGAGQAGAIAGABQAAgOAFgHIABgBIADgBIAEABIABABIACADQADAEAEAAQAGgVANgFQAGADAKAJQAHgJAJgCIAMASQAHgEAHAFIAKAKIAIgBIAIgBIAEACQAFAEACAAQACAAACgGQABgGAKAAQADAAAJAGQAJAEADABIALgFQAMgFAKABQALgBAGAGQAFAFADAAIAKgEQAJgEAHAAQAJAAAEAFIAEAGIABAAIABgBIABABIAOgHIACgBIAAARIgCAAIAAAMQgJAKgHANQgFgFgGgEQgLgGgLAAQgiAAgTARIgDADQgLAJgEAMIgTAQQgQAOAEAOQgZAEgLAJIgGAGQgFARgEAGIgGgDQgIgCgQAAQgWAAgGAKQgCAEAAAIIAAAJQABAFACACIgTAFQgTAEgbAMIAAAAIAAgBQAmg+ALgUIAFgJQAAAAAAgBQgBAAAAAAQAAAAgBgBQgBAAAAgBIgTAMIg5AhQg1AcgPAQIgDgvIADgrQAAgQgDgHQgHAJgJAWIgCAFQgJATgEAHQgcAqgCATQg0hIgHABIgDAAIAAAGQAOA1AAAVIAAAQQgjgpgBgBQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQAFARAQAiQAEAJABARQABALACAIQgKgEgQAAIgRABQAEgOgPgGQgFgCgMACQgLACgMgJQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgCIgmgBQAAgFAFgIQAGgIAAgDIAAgDIgFgBQgHAAgDACQgCACgGAAIAAgBIAEgOQAAgSgkgBQgEgdgeAAQgQAAgHALQgEAFgBAHQgPgRgLAAQgPAAgFALQgDAGABAGIgGgIQgFgHgGABQgJgBgHAKIgIAJQgegBgKAHQgFAEAAAKIAAAKQgVgFgHAGQgDADACAEQAAAKACAFIAAABIgBAAQgFgCgMAGIgFAFQgOgGgEAAQgJABgHAFQgEADgCADIgQAAQgZACgSAEIgDADIgCAAIgCABIgDACIgCAAIAAgEIgCgDIgDAHIgJAAIgGAHQgEAFgFADQgDgEgBAAQgHgBgTAJQgRAHgFADgAQWgJQgsAAgqADIACgSQADgPAIgFQANAMAGAFQgBgeAKgFIAAAAQAGgCAFACQAEACACAFQAEAQACACQAPgVAQgCQABAFgDAFQgEAGABAFQAFAAAFgEQAFgEAGABQAEACAFALQADALAHABQgBgQAKgMQAFABAHAGIAIAGIADACQACgYAaACQADADAFAOIABACIAAADIAGgEIANgGQAKgHALAAQAJAFAFAOQAAACgEAHQgDAFADAEQAFABAFgDQAEgFAEAAIAHAJIAEAGIjAgDgAUog0IgCgCIACABIAEAEIgEgDg");
	this.shape_19.setTransform(194.6,157.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FEDD92","#3CCC49"],[0,1],1638.8,-460.5,1698.8,-233.7).s().p("EgoOAK0IAAlEIgGAAIAAtnIABgBIABAAIADgCIABAAQABAFgBAHQACAIAPAHIAXALIADAAQAbAIAyAAQA0gBARgOQAHgFAEgIQAVAKA4AAQAVAAAPgJQALgJAAgIQAIAOAlgKQAWgBAIgEQAKAIAhAAIBEgGQACAAAGAEQAGADAHAAQALAAAFgCIACABQAJAAAJgGQAFgDAKAAIATAAIAHAFQAIAFATABQAHAAASgIIAXABQAHAFADAAQAGABAEAEQAJADAkABQAdgBA7gRIAYAAQAEADAJAAQAGAAAGgCIACgBIALAAIACADQAGAFAeABQAhAAAFgFQA0AAAZAGQAYAFAIAAQATAAgFgDQAbAAAJADQACgBAKgGIAKgHIABgBIAOAAIAIAHIAEAGQAFAGALAAQAGAAAOgPQAEAAADAMQANgHAKgJIABAAIgPAPIAAAEIACAAIAhgIIAkgKQAFAAAEAGQAFAAAIgFQADAFAGAAIAMgDQAcABABADQASgBAAgGIABADIABABIAAADQAFgBARAAQAdgBAAgFIABgBIDOAAIAEAEIAAABIABAAIACABIABAAIAjADIASgBIABAAIAAgDIACABQALAKAQAAQAJAAAAgJIAAgGQACADAHAAQAFAAAFgEIAPAAIAHABIAEgBIAHAAIAAACQACAFAJAAQAIgBAOgGIACAAQAAALAHgBQAGAAAXgGQAHAAAHADQANgBAIgGIACAAQAAAAAAAAQAAABAAAAQABABAAAAQAAABABAAQADAEAIABQAHgBAKgHIAAAAQAGAJAUAAQAGAAACgCQACgDARgBIgCAHIgBAJIAAABIAAABIABAFQABAFACACIAHAAIACgCIADgCIAFAGQAHAEAKAAQAGAAAHgCIAKgCIADABQABACAEAAIADAAIAVABIAVgCIAEAAIAOACQAYAAAegRIAKAFQALADAHAAQARAAAGgJIAIAEQAFACAKAAQALAAACgDQAAgEABgCIAOAGQAJADANAAQAIAAAEgCIALgFQADAGANAAQAJAAAEgDIAFgFIAEAEQAFADAPAAIALAAIABgCQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAIAAQAQAAAGgFIAFgEIAGADQAFADAFAAQAEAAAFgDIAHgDIAHADQAEAFAEAAQAFAAADgEIAEgFQAEADAJAAQAbAAAegRQAEAFAPAHQAdANAkAAQAfAAAbgIQAJALAWgEIApgLQATgFABABIADAEQACABAOAAQAwAAAagQIACAAQABAFAEACQAJADAjABQAeAAAJgIQACALAHACQAMAFApgBQAWABATgGQAegJAJgBQABAEAHAEIAAgCIACACIAIAHIARACIAzAIQANAAAWgGIAXgGQADAAAJAFQAKAFAHAAIAKgBIAfAAIA4gGQAogDAYgNIAIAAIAGAGQAGAFAOAAQAHAAAzgSQAAAAABAAQAAAAABAAQAAABABAAQAAABABABQACACAFAAQAoAAAagKQAMgEALgHQAkgJgBgdIAAgHQgCgFgGgFIgWAAQgCgCAAgJIgBgNIAHAAQAGgFAGABQAIACADgBIA8AAQADAEAAAEQAEACAfAAIACAHQADAEALAAQAEAAACgCQAdgFAJgPQAEgHAFgMIgDAMIgDATIAEABQAPgEAQgPQAVgUAGgEIABAIIgDARIABAEIAGABQAOAAANgEIAggGIgBAMIAAAHIAEABIAJgEIAQAAQAEADAFABQAFAAAEgFICtAAIANgCIAuAAQATANAIAAQAEAAABgKIACgNIAFAJQAEAGADAAIADgCQACgCADgBIADAHQADAEAFAAQAGAAAJgNQAKgOgCgJIAAg/IAMAeQAHAWAAAKIgBAIIADAAQAIABAGgXIAIAXQAGAQAFAAQABAAAGgLQAFgLABgEQABADACAOQADAMAIAAIAIgCIAVgDQACAKAJAAQAEAAAKgIIACADIABACIAAABIADACIAOAAQAUgDAKgDQAJgCAJgGIABABQAAAEgCADQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAAEQABAEAEAAIARgGIAcgIIAcgIIAOgFQANgHAIgBQAVgFATgBQgDADgEAKIgDAKQAAAHAFgBIARgFIAdgKIASgGQALgEAOgCIgHAUQgEAJAAAIIAAAEIAEABIANgFQAMgFAEgCIAJgCIAEgDIAGAAIgBAKQAAAIAJAAIBDgIIADAFQAFADAGAAQADAAANgFIAPgGQACgDADgGIADgIQACAKAEANQAFAPAFAAQAHAAAEgIIAGgKIADAIQADAIAEAAQADAAAHgJIAKgMIAEAFIAJAAIAEgCICHgBIgHUJg");
	this.shape_20.setTransform(295.7,241.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],1712.1,-8.2,1712.1,100).s().p("AfQM8QgEgPgFgHIg5AAIgEgTQgDgJgDgHIgVgBIgdAEQAFgQgCgLQgEgTgigBQgEAAgIAGQgIAEgJAAQgEgJgFgGQgKgMgeANQgOAGgHAPQgHANACAKIgHgFQgDgCgQAAQgGAAgHAHQgIAIgEAAIgUAAQgLAEAAALIABAPQgRAAgNADQgHACgDACIAAgRIgBgBIAAAAIgQgPQgIgGgPgCQgGgEgDgEQgCgCgBgPQgBgMgHgGIg8gCIgEgNQgDgJgMgFIgkgEIgsABIgGAFQgDAEgGABIgHgLQgEgJgIgDQgIgCgOAKQgPAKgDAAIgEgBIABgBIgCgDIgigBQgSAAAAAXIAAAEIAAgBIhfACQgLACgRAHIgQAGQgGAAgMgQQgJgMggARQgZAOgEAEQgDADAAAMIACANIADANIAAADIgCABQABgGgBgBIgmACIgHAEIgDADIgIgDQgGgEgeAAQgJAAgHAHQgFAGAAAGIAAABIAAAAQgWgNg3gBIg2AAIAAgcQgDgIgIgJIgRgOIgmAAIgCABQADgHgBgDQgDgGgVAAIgYABQgDgDgCgIQgBgHgDgCQgZAAgBgCQgBgGgCAAQgCgBgEADQgFAFgDAAIgDgGIgRAAIgaACQgHACgFAEIgEAGIgBAEIgEAEIgCACIgDAEIAAABIgIACIgFADQgEgKgOABQgGAAgJADIgLAEQgIgKgRAAQgMAAgKAFQgJAEgEAAQgOgLgIAAQgKABgEAFQgCAEgBABIgJgGIAAAAIgFgBQgJADgFgBIgjgbIgCgBQgFABgEADIgHAGIgCgBIgBgBIgBgBIgEgFIgCgBIAAAAIgBgBIgFAAIgDAAQgFADgFAIIgJANQgBgFgKgFQgEADgDAHIgHALIgFgGIgHgFQgEgDgDAAQgEACgEAFIgFAIIgBABQAAgEgGgCIgIgDQgCgXgTgCQgQgCgWAKQgCgSgTADQgTACgGANIgJgGQgFgEgHABIgDAHIgEAIIgCAEIgCgDIgFgIIgEgHIgBgBQgDAAgDACQgCACgEgCQADgDgBgDIgDgFIgBgCQgHgBgGADIgFAEQgKAHgHAAQgBgHgEgEIgFgDQgJgEgKAFIgBACQgEAIgCARQgEgBgFgGQgFgGgFgBQgFAIgDAPIgFAWIgCAAIgEgDIAAABQgQgMgFAAQADgFAAgEQgIgIgQAAQgNAAgMAGQAAgFgDgCQgDgFABgCQgOgBgKgEIgJgFQADgCAQgDIAHgCQAGgDABgEQgJgDgQgCIgbgFQAEgCAVgLQAPgJAFgKQgMgDgUAFQgaAEgIABQAEgIAOgPQAKgPgCgMQgPADgQAPQgSAQgJAEIgIgZQgGgNgKgEIgIAaQgGARgEAIQgZgWgWgKQACAPAMAZQAIAOADAKIgFABQgFgGgGgBIAAACIgGgJQgJgKgKABIAOAOQAIAJADAHQgJACgVgKQgSgKgPAJQgIgKgNgEQgPgFgIAKQgCgIgHgEIgEgCIgEgBIgNgDIgDACQgDAAgCgCIgBgCIAAgBIgKAQQgCgPgPAAIgGABIABgDIgGAAIgCAEIgDgBIAAgDIAEgKIABgCQAIgOgGgJQgHgCgIAHQgHAFgDgDIADgMIACgIIAAgEIAAgDIgBAAQgOAAgGAQIgGARIgBADIAAABIgBACIgBABIAAABIgBABIAAgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABIgBABIgCABIgCAAIAAABQgEAFgTAAIgBgDIACgCIgEgBIgBgBIgEAEQgNgHgYAAQgKAAgJACQgQACgMAGQgBgHgGgHIgCgCIgKAAQgFAAgBACIgCgDQgKgTgHgEQgCAJgFADQgEgJgKAAQgCAIgFAFQgHgQgWgBQgTAAgNALIgCACIgCgCQgOgLgUAFIgIACQgOAGgIAMIgXgLIgDADQgEAFgJAAIgHAAIgIADIgBgFIgDgBIgBAAIgBgGIAAgEIgDgDQgKABgBAKQgIgHgGgCQgQAHACARQgHgMgVgEQgYgFgHgFQgGACgLAAIgRABQgUADgCARQgQABgSgQQgFgGgGgDQgLgGgJACQgEgIgMgRQgLgOgDgMIAggJQACgEgEgCQgBgBgBgBQAAAAAAgBQAAAAAAAAQABgBABAAIAXAEIgDgFQgagBgIgCIAUgJQAMgEADgJQgJgEgOACQgTAEgJgCQADgGAPgMQAOgLAAgIQgQgCgPAMQgRANgDAAQAFgSAAgJQABgPgIgGQgFAHgJAWQgIAUgGAIIgOgYQgGgJgHgDIAAgCQgDgGgKAAIgDAAIgQgCQACAIANARQAKAOABAOIgOgLQgCgFgEgDIgHgGQgEgEgCAAIgIgHIgBABIgCABQAFAFAEACIABABIgGgBQgJAAAAACIgLgBI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");
	this.shape_21.setTransform(295.6,83.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B16A01").s().p("Ag5CCQgEgFgOgCIACgHIAFgFIBHhXIAlglQAqgrBShMQAEAcgiAfIgdAZQgQAOgGAMQhEA7g6BZIgFACIgDACIgEADIgCgDgAiTB2IADABIgMADQAFgEAEAAgAikB3IACgCIAGgJQAGgKADgPIAEgwIAIgtQAFgagDgOQAOACgCAIIgBAKIgCAAQgHAagDAxIgFA6IAAAEIAAACQgHgBgLAGIgHAGg");
	this.shape_22.setTransform(80.5,128.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("APtCvIAEgBIADALgAPlCvIACABQAFACgDACIgEgFgAMkCRIADABIgDABIAAgCgALWCKIgBAAIABgCIACgCIAAACIAAACIgCAAgAgKBHIgCgGIADgBIABACIACAJgADkA0IAEgBIAAABIACAAgAgDgSIADAAIAIABIgCACIgJgDgAvBhKIABAAIgCASIABgSgAlLhTIAHgCQgBACgFAFgAvvi4IgBAFQgHgEAIgBg");
	this.shape_23.setTransform(164.3,132.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("EgnnAHIIgCgBIgYgLQgPgHgCgHQABgIgBgFIgBAAIgDACIgBAAIgBABIAAgIIACgDIACgBQAIgJAXgLIAOgHIAqgSQA1gaA4AAQARAAABAgQAEgEALgFQAUgLANAAQAhAAASAZQAKAQADAUIAAAFQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAkABIAEAAIAGAAQARgBAFgGIAAAAQADgFACgHQAEgDADgIQAEgHAAgDIgHAEQgLAEgNgQIgFgIIAAgNIgGAAIgCgBIAAgCQAAgBARgFQAQgGAAgHQAAgDgQgLQgRgKAAgJQAAgfgbAAQgRAAABAIIgCAAIgDgEQADgDAAgGQgEgPgFAAQgCAAgWAQQgVAQgHAAIgDgBIgBgDIAJgIQAIgIAAgGQgCgagOAAQgRAAgFACQgEACgGAAQgKAAAAgEIACgJQACgNgsAAIgGgBIAAgCIABgBQADgEAAgCQAAgDgLgIQgLgJgIAAQgMAAgBABIAAABIgBAEIgCAAQgCgFAAgaQAAgUgNAAQgLAAgFAEQgGADgDAAIgEAAIgBgEQAAgFAEgIIADgIQAAgEgFgGQgEgEgFgCQgGgCgHAAQgUAAgDAGIgBADIgDABQgOgUgYgHIgDAAIgEgBIAAgGIAEABIASAGIAHAEQALAGAGAGIADAAIAXgFQAKAAAHADQAGADAEAGQAFAGAAAGQAAAGgGANIAVgGQAQAAAEATQACAJgBAQQAXABAQAMQAOAKgFAHQAYgCALAEQAHADABAGIAAAJQgBAGACAAQAKAAAFgCQAEgCAJAAQASAAAHAQQADAIAAAJQAAAGgFAGIAAABIATgNQAQgMAEAAQAFAAAFAIQAFAHAAAGIANgCQAaAAAFAjQACALAQAJQAJAFAEAEIgBgPQAAgLgNgeIgNgeIABgEIAFgBQATAAANANQAGAGAEAJQgCgZgVgkIgCgDQgkg+gDgGIADgBQALAAA3AzQAJAIAJANIAVAdIAAgKQAAgJgCgKQgEgZgOgfIgehEIgDgIIADAAQACAAAIAIIAUAVQAYAZARAVQAMAOAKAXIAIAUIAHARIAHgRQAFgPAFgVQAJgkAIgRQAGAZAIA7IABAFQAQBCABANQgBAJgFANIAAABQATgMAVgRQgFgDgJgfIgKgnIgEgSIAAgQIADgBIAPAYQAEAEAMAHIARAJIABgGIgBgDIgDgqQAAgFAJghQALglAFAAIAJAeQAKAhAJAMQAIALAOAbIACAEQAJANAUAUIABAAQgCgOABgTIABgYIAGg7IADgCQADAAAAAOIgBAIIAAABQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAHAAAVA/IATA6QAlgjAPgXIAJgPIACgCQAEAAgBAJIgBAIIgLAjIgPAsIAAAAIBLgzQADADAAAFQAAAYgQAYIgLAXQgIAOgTAJIAAABIAAAAQAbgIA7gmIACABIACACQgBAKgbAdQAGgBAQAAQAPAAACABIAEAEIAKgSQAJgMAXgGIgEgPQgCgFAAgIQAAgVAsgPQAKgDARgCIAAgJQACgEAGgFQAIgGAKAAQALAAAMAGQABAAAIgHIABAAIgBgBIABAAIAJgBIAGABQAIAAAEAFQADACACAFIAHgMIABgDQAHgLAGAAQAHAAAEAIQABgSAHgFQAEgCALAAQAMAAAFADIAGADQgCgMAVAAQAjAAAIAgIABAAQAUgWAVAAQAcAAANAbIAEAKIAFgBIAFABIAAgGIAAgEQACgbAYAAQAFAAAFADIAAgPIgCgLQAAgKAMgCIANgEQgEgMAAgJQAAgNAVAAQAXAAAKAOQAEgOAVAAQALAAAFAGIAFAIIAJgFQAFgEAGAAQAHAAAIARQAHAQAEAAQAKAAAIAUIgBAHQAtAAAAAaIAAAJQgDANgJAPIAAAAQAfAOAAAJQAAAEgGAHQgHAGAAACQAAABAOAFQAOAGAAANQAAACgCAFIgCACIAEAJQADAIAJAHQADgFAEgVQADgRADAAQABAAADAKQADAJAHAAQAKAAAggvQACAFgBAMQAAAMAEAGQALgNAWgWIAbgiQACACAAAEQAAAOgFARQgGAVgCANIAAAIQAdgZALAAIADAAIABAGQAAAFgIAYQgIAXAAAKQAAAKAEAAQAgAAAeg8QABAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAARgMAhIAAAHIABAAIAVgRQASgOAJAAIADAAIAAAIQAAAPgKAkIAAABQAEgEARgHQATgIAHAAQACAAACAFQAFgDAFgGIAFgHIAJAAIAEgHIACAEIgBADIACAAIADgCIADAAIABAAIAEgDQARgFAagBIAPgBQACgDAFgDQAHgFAIAAQAEAAAOAFIAGgEQALgHAFACIACAAIAAgBQgDgFAAgJQgBgFADgDQAGgFAWAEIgBgKQAAgKAGgEQAJgGAeAAIAIgJQAIgJAIAAQAHAAAFAGIAFAJQAAgHADgGQAEgLAQAAQAKAAAQARQABgHAEgFQAHgKAQAAQAeAAADAdQAlAAAAASIgEAOIgBABQAHAAACgCQACgCAIAAIAEABIABADQAAADgGAIQgGAIAAAFIAmABIABADQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAMAJALgCQANgCAEACQAQAHgEANIARgBQAOAAAKAEQgCgIAAgLQgCgRgDgJQgPgigGgQQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQACAAAiApIAAgQQAAgVgOg1IAAgFIADgBQAGAAA1BHQACgTAbgqQAFgHAIgSIADgGQAJgWAGgIQADAGAAAQIgCArIACAvQAQgPA1gdIA4ggIATgMQABAAABAAQAAABAAAAQABAAAAABQAAAAAAAAIgEAKQgLAUgmA9IgBABIABAAQAagMAUgEIASgEQgCgCAAgGIAAgIQAAgJACgEQAFgKAXABQAQgBAHADIAHACQAEgGAFgQIAGgGQALgKAZgEQgFgOARgOIATgPQADgMALgKIADgCQAUgSAhAAQAMAAAKAHQAGADAGAFQAHgNAJgKIAAADIACgBIAGgEQALgHAKACIAAAAIAbAAQAMACAQAOIAQANIAdgHQAggHAPAAQAKAAAKAOIALARIAYAAIgEgZQgDgSgTgKIgjAAQgCAGgEAAIgEgBIAAgLQABgHgGgCIgVAAQgEACgGAAQgOAAgBgIIAAgNQgWAAgEgDIgDgFQgDAFgMAFQgDgBAAgDIAAgEIgRAAIgUADQgJACgDADIgCAJQgDAHgGAAIgCABIgPAHIgBAAIgBAAIAAAAIgFgFQgEgGgIAAQgHAAgKAEIgKAEQgCAAgGgFQgFgFgLAAQgLAAgMAEIgLAFQgDAAgIgFQgJgGgEAAQgJAAgCAGQgCAGgBAAQgDAAgEgDIgEgDIgIABIgJACIgKgKQgGgGgHAEIgNgSQgJADgGAIQgKgJgGgDQgOAFgFAVQgFAAgDgEIgCgDIAAAAIgEgCIgDACIgBABQgGAGAAAOQgFgBgGgHQgGgHgGgBQgJACAAATIgDAAIgFgGIgGgIQgEgBgFAFQgFAEgFgBQgCgFADgFQAEgHAAgCQgGgOgIgFQgLAAgLAHIgNAHIgFADIgBgDIgBgCQgFgOgCgCQgbgDgBAYIgEgCIgHgGQgHgGgGAAQgJALAAARQgGgCgEgLQgEgLgFgCQgFgBgFAEQgGAEgFAAQAAgFADgFQADgGgBgFQgQACgOAVQgCgBgFgRQgCgFgDgCQgEgCgGACIgBAAQgJAGAAAdQgGgEgMgNQgIAFgDAPIgDASIgHAAIAFgXQAEgOAEgIQAGABAFAGQAFAGADABQADgRADgIIABgDQAKgEAKAEIAEADQAFAEAAAHQAHAAAKgIIAGgDQAGgDAHAAIABADIACAEQACAEgDADQADABADgBQADgDACABIABABIAEAGIAFAIIACAEIADgEIAEgJIADgGQAHgBAFAEIAJAGQAGgNASgCQAUgDACASQAWgKAPACQAUACABAXIAJADQAFACAAAEIACgBIAFgIQADgGAEgBQAEAAADACIAHAGIAFAGIAHgLQAEgHADgDQAKAFACAEIAIgMQAFgIAFgDIAEgBIAEABIABABIAAAAIADACIAEAEIABAAIABABIABABIAIgFQAEgEAFAAIACABIAjAbQAEAAAJgDIAFABIABAAIAIAHQACgBACgFQAEgFAKAAQAIAAANALQAEAAAKgEQAKgFAMAAQARAAAIAKIAKgEQAKgEAGAAQAOAAAEAKIAFgEIAIgBIgBgBIAEgEIACgCIADgEIACgFIAEgFQAFgFAHgBIAZgCIARAAIAEAGQADAAAEgFQAEgDADABQABAAACAFQABADAYgBQAEADABAHQABAIADADIAZgCQAVAAACAHQABADgDAGIACgBIAnAAIARAPQAIAIADAJIAAAcIA2AAQA3ABAVAMIABABIAAgCQAAgFAFgGQAGgHAJAAQAfAAAGAEIAHADIAEgDIAHgEIAlgCQABABgBAGIACgBIAAgDIgCgNIgDgNQAAgMAEgDQADgEAagOQAfgRAJALQAMARAGAAIAQgGQASgIAKgCIBfgBIABAAIAAgDQAAgXASAAIAiABIABADIAAABIAEABQADAAAPgKQAOgKAIACQAHADAFAJIAHALQAFgBAEgEIAGgFIArgBIAkADQAMAGADAIIAEAOIA9ACQAGAFABANQABAO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MQAIAVAWArQAOAgAFAYIABAIIAAAyIgDABQgJgggWgbQgaghgrgaIAAAAIAAAAQAZAfAPAcQAUAnAAAiIAAAJIgCABQgEgEgCgHIgGgNQgIgPgYgFIgBgBQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAABIANAbQANAeAAAMIgCAWIAAAAQgBAGgHAHQgIAFgKACIABAEQgBAJABACIADAEIABgBQAFgEAVAHQAGACgBAGQAAAMgLANQgCACgBAFIAAACIAAABIAIgBIAFgBQAXgHANgMIAYgbQAEAAgBAKQAAAIgEAKIBGgeIADABIAAABQAAAGgIARIAAABIAagMQAVgLAHAAQAEAAAAAFIgDALIAAAJQASAAAQgLIACADgEggMAGhIABAAQAEAEATAAIAGABIAQgFIADgBQARgFALgBIAHAAIACAAIAFAEIADgEQAFgGAEgOIAAgCIAAABIgHAEQgEABgIABQgJAAgCgFIAAgFQAAgHADgIQglAYgPAAQgFAAgBgDIAAgDIAEgOIAAgCQgyARgQALQgDgDAAgCQAFgNAAgHIgBgBIAAABQgIAJgTAOQgKAHgJAFIgQAFIgBAAIACABIADABQANADAOAAIAogCIAJgBIASgDIABAAQADAAADADgAwgGIIgBADQAAAGAEABIASADIAdAAIACABIAnAAIAFABIALgDIALgCIABAAIgFgGQgCgCAAgEQgHgJgCgFQgLgVgFgZIAAgFIACgBIAMASQAQATATAJQgVg/gDgZIAAgDIACgBQABAAAKASQAMATANALIACACIAAgCIAAgCIgBgNQgBgIgFgFIgKgbIAAgEIACgBQACAAALAcQADAIAYATIAAgQQABgKAHAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQADgEAAgDQAAgJgOgGQgOgGAAgDQAAgFAGgFQAHgGAAgDQAAgGgggQQAJgQADgNIABgJQAAgRgXgEQgXgDAAgCIABgHQAAgEgMgLQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgDAAgIgSQgJgSgFAAIgUAKQgDAAgEgHQgDgIgLAAQgRAAgEALQgBAKgBABIgBABQgDgIgCgEQgIgLgVAAQgOAAgDAEIgBAFQAAAHAEAPQAAAFgMACQgMABAAAHIABAJIAAAXQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgEgGgIAAQgPAAgFAOIgDAJIAAAMQAGAEABAKQAAAFgGAIQASACAFAIQACAEAAAKQAAAKgGAJQASAMABAHIAIAAQAAgZATAAQAHAAADACIAJAGIAHgFQAGgEAJAAQAKAAAEAFIAEAFQAHgHALAAQAQAAAEAaQAAACgEACQgDACAAADIAFAGIAAAGQAAAXgrAHIgBAAQAHAIAAAHQAAAIgHAIQgFAGgGADIgDAAIgDABgAhCBKQgNgIgJADIgUAGQABgGAIgFQAIgFgBgIQgKgGgPAFIgTAGQgGAAACgDQACgGgBgDQgIgBgNgGIgLgGQgIgFgEgFIANgCIARgFQgHgFgUAAQgWAAgEgCQAHgIAOgIIAZgNQgOgEgYAHIggALQAFgLAOgRQAOgQAFgKQgVAKgaAbQgHgEgGgQQgFgRgFgFQgDAJgHAPQgFAOAAAOQgIgFgQgNQgOgNgKgEQAAALANAZQAMAXACAKIABACIgLgCIgMgCQgLgCgGAEIgDACIgBgCQgFgIgNgFQgQgFgCALQgDAAgNgKQgMgIgJAAQgFgBgEAGQgEAEADACQgGAAgFgIQgFgLgEgBQgNgFgOAMIgHAIIgPAOIAJgPIACgDIgDgGQgDgJgJAAQgFAAgGACQgEADgFABQgHgHAKgOQAJgPgFgIQgHABgIAIQgJAHgGACQAAgHAFgLQAFgJgBgKQgKAEgEARIgGARIgDAJIgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgEgBIAAAAIgBAAIgBABIgCADQgDADgMAAIgDAAQgJAAgBgBIgEABIgCAAIAAgBIABgCIAAAAIABgBIgCAAQgWgDgNAAQgcAAgOAMQgEgCgCgHQgCgIgBgCQgOgBgDAGQgEgCgDgLQgEgLgFgCQgCABgCAFIgCAFIgBABQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgDgDQgCgGgDgBQgDADgDAGQgCAFgBAKQgBgKgFgHQgHgHgNgDQgTgEgJAJQgEAEgDAGQgDgEgEgDIAAAAIgVgGIgDAAIgFAAQgGABgFACIgSATQgQgJgPgBQgUgCgFARQgEgDgDgIIgCgGIADABIABAEIAIgCIAGAAQAKAAADgFIADgEIAYALQAHgLAPgGIAHgCQAVgGAOAMIABACIACgCQAOgLASAAQAWAAAHARQAGgFABgJQAKABAEAJQAGgDABgJQAHAEALASIABAEQABgCAFAAIAKgBIACADQAGAHACAHQALgHAQgCQAJgBALAAQAYgBANAIIAEgEIAAABIAFABIgCACIAAgBIgCACIgBABIABABIACAAQATAAAEgFIAAgBIADAAIABgBIACgCQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAAAAIAAAAIABgBIAAgBIACgCIAAgBIABgEIAGgRQAGgPAOgBIAAAEIAAADIgBAJIgEAMQAEADAHgGQAHgGAIACQAGAJgIAOIgBACIgBAAIgEADQgEADgBADIAGABIgBADIAAABIADgBIACgDIAGAAIgBADIAHgBQAPAAACAOIAKgPIAAABIABABQABADAEAAIADgCIAMACIAEACIAEACQAIAEABAHQAJgJAPAFQAMAEAJAJQAOgIASAIQAVALAKgCQgDgIgJgHIgOgOQALgCAIALIAHAIIAAgCQAGABAFAGIAHAJIgDgLQgDgIgHgOQgNgZgCgPQAWAKAZAWQAFgJAFgQIAJgaQAJAEAGANIAIAZQAKgEASgQQAQgPAPgDQACAMgLAPQgNAPgEAIQAIgBAZgFQAVgEALADQgEAKgQAIQgVALgDACIAaAEQARACAIAEQgBAEgFADIgIACQgQADgCACIAIAFQALAEANAAQAAADADAEQACADAAAEQANgFANAAQAPAAAIAHQABAFgDAFQAFAAAQAMIAAgBIADADIgDABIAAgCgAk8AMQADgDgFgCIgCgBIAEAGgEgmOAAAIgOgLIgHAKQgJAKgCAAIgGgKQgLgTgIAAIgUASIgEADQgCAAgBgDIgEgKIgBgFQgFgKgJAAQgNAMgGADIgMAAIAAgDQARgFAOgLQAIAAAGAFQAFAHACAQQASgVAHAAQAJAAANAXIADAFIAGgFIALgOQAIAAAPAPIAHAHIADgHQAEgNAHAAQAIAAALAJQgIgPgCgUQAFgFAMABIAPABIAAgBIACAAQAEAAAGAFQADgDgCgFQgGgMABgEQAEgGALgBQANgCAFAHIADgIIABgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgGAMgJIACgEIgDAAIAAgCIAFgFIABAAQAHgbAFgoIAKhSQgJAAgJAIQgLAJgGACQgHgIAGgLIALgQQgXAFgdAUQgiAWgPAGQgKggAWgZQASgUAhgJQgVgFgfAIQgrAKgHABQABgOAOgPQAMgNARgKQANgGAYgFIAogHQgNgSgKgRQAQgBATAIQATAIAJANQAaggA6gFQgBAIgHAGQgJAHgCAEQAXgIAgABQAkABAMANQgjABgjAQQA7AEArA2QgIgBgfgLQgcgKgVABQAIALASAVQAPATAGATQgJABgLgPQgPgVgIgFQgSgMgTAFQAEAJAQAUQANAVAAAUQgGAEgHgKIgNgRQgEgEgKgEQgKgFgEgDQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQADAEgBACQgGAAgJgDQgJgEgGAAQgCABgBAFIgHAiIgDAuIgDAoIgBACIgCAJIADAEIAAARIgBAAIABAEIAOgMQAJgHAJgCIAMAJQABAIgCAIIAEgDIABAAIgDAGIAFAAQApg+BFhGQArgsBYhUQgMgKgagGQgegGgOgEQALgFAwgGQglgbgPgJQAOgGAYAFQAOADAXAIQgBgGgHgOQgHgNgBgJQAMgCAQAJIAXAQIAFgSQAEgKAIgCQAGAHADAXIAXgIQANgGAIAHQgCAIgOAIQAxAKAOAeQgKADgLAAIgXAAQAFAKAQAUQANATgEASQgNABgUgMIAGAnQACAbgPAIQgMgHgHgSQgEgLgFgZIgSAnQgKAXgQAGQgCgPADgSQAEgWAAgNQgFAEgMAXQgJAQgOACQABgGAHgNQAEgKgBgIQh7BphOBwIABACIABABIABAAIABAAIACABIAIAGIgCgIQgBgMAPgEQAJgCALADQALACAHAHQAXgfAMgHQAPAGgBAUQAGABAKgKQALgLAIgBQAFAAADAFIAGAHIAOgEQAIgCAEAGQADgCADgHQADgHAEgBQAJAAAHAFIANAHQACgBgCgHQgCgIAEgDQASgGAMAZQANgFAQgLIABABIgCABIAYAVQAZgOAPAfIAEAJQAGgBAHgIQAGgIAHAAIADAJQAFAOAGADQAGgCAJgKIAEgEQAGgGAFgBQAGABAFAHIACADQAFAMAGACQAFAAAHgIQAGgIAHAAQAAAKAHALQAOAEAJgKIAJgNIADgGQAVgaAjgRQAmgTAgAGQgyAZgdAjQA4gWAnAIQgIAJgVAIIgPAFQgOAFgFADQASAGAcgFQAagEAPAGIAEgFQADgEAFgDQAKgBALAEIASAGQAKgQATgKQAWgMAPAPQAKgIAGgBQAIgDAHADQAFgCALAAQAMAAADAEIACAGIAEADIgCgJIgBgBQgEgTgDgGQAPADAWALQABgVgWgUIgUgQQgMgKgFgHQADgCAGgBIACADIAIgCIALACQAAgCAJAAIAGAAIAAgBQgEgBgGgFIACgBIACgBIAIAGQABAAAEAFIAHAFQAEAEADAFIANALQgBgOgKgOQgMgRgCgIIAPACIADAAQALAAADAFIAAADQAHADAGAJIANAYQAHgIAIgUQAIgWAFgIQAJAHgBAPQgBAIgEATQADAAARgOQAPgMAQADQAAAHgOALQgQANgDAGQAKACASgEQAPgDAJAFQgDAIgNAFIgTAIQAHACAaACIAEAEIgYgDQgBAAAAAAQgBABAAAAQAAABABAAQAAABABAAQAEADgBADIghAKQADALALAPQANARADAIQAKgDALAHQAFADAGAFQASARAQgBQABgRAUgDIASgBQALAAAGgCQAGAEAZAFQAUAFAHALQgBgQAPgHQAGABAIAIQACgKAKgBIACADIAAAEQgGgBgDAMQgJgIgIgBQgIAAgCAKQgCAJADAJQgFgCgJgMQgJgLgHgBQgJgBgIAHQgIAHgFABQgEgDADgEIAFgHQgEgEAAgDQgbADgLADQgUAEAEAQIgTgFQgJgDgHAGIgIgVQgEgGgHgCIgHgCQgEABgBABQgFADADAHQgEgDgDgGIgEgJQgGgPgEgEIgMAAQgFABgEgEQABgBAFgEQAEgCgBgFQABgHgKgCQgLgBAAgGQAcgFAQgHQgEgHgQADQgRAEgFgEQAIgGAVgFQAVgGAIgHQgLgDgXAGQgZAFgGgBIAYgTQAPgMAIgLQgPADgQAQQgSARgHACQAAgFAIgTQAHgSgBgOQgIAKgGARIgMAdQgIgFgJgUQgJgTgMgDIADAAIgCgCIgCAAQgJgBgBgCQgEgBgDABQACAIANAUQALAQgBARQgGgEgHgIIgBgBIgLgKIgIgHIgBAAIAAgBIgGgDIgIgCIgEAAIAKADQgVgDgOABQAEAIAKAIIASAQQAYAVAAAYQgHgBgLgGQgMgFgHgCIAGAUIAFAPIABAAIgBACIABADQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQgFAAgGgIQgGgIgJAAQgNAAgDACQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBgBIgBAAQgRAGgIAFQgDgFgNgJQgiALgLAVIgCAGIgMgHQgIgDgIgBQgJgCgGAEQgFADgBAIQgKgGgNAAQgRgBgEAJQgLgEgZAAIgjAAQAHgKASgHIAHgCQAfgLAFgDQgWgFgaAJIgZAKIgSAHIADgIQAHgRARgOQAMgKAbgRQghACgbAVQgUAOgNATIgIAOIgOAIQgKAEgLgCQgJgIAAgJQgFAAgEAGQgFAGgFAAQgIgBgGgJIgHgNIgCgCIgEACQgJAGgPARQgSgJgDgOQgHgBgGAIQgGAIgHgBIgIgQIgBgDQgGgLgIgDQgOABgFAIQgQgUgMgFQgMAEgEAMQgHgCgHgIIgMgNQgIAAgBAIQgBAIADAHQgHgBgJgGQgJgGgGgBQgHACgEAJQgDAJADAIIgDAAQgDgCgCgFQgCgIgEgBQgKgCgHAGQgJAHgEAAQgDgCADgGQAEgHgEgDQgJABgMAMQgLALgGgBQgGgBgCgLIgDgQQgYAOgHAVIgCAFIgHgEIgPgIQgOgFgNAFQgCAFgBAFQAAAJAFAMIgEgCIgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKgGIgGgEIgCAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBgBAAAAIAAAAQgDADgDAIIgGAMQgFgCAAgNIAAgEIgFgEIgFgFIgCgBIgGAAIgDACIgDACQgKAIgHABQgBgCADgIIAGgNQAHgRgLgHQgJACgJAKQgLALgGADIAAgBIgDABIgFgCIgDgBIgDgBQgEAAgEADQgEACgDAEIgFAGIgDAHQgCAHAAAIQgFgBgFgFQgFgFgGABQgEAAgDACIgFADQgCAJAFAHIAGAMQgDABgFgDIgDAAIgDABIgCgBIAAAAQgEgDgEAAIAAgBIgJAAQgMgDgEAEQgCANAIARIAFAJIABAEIABACIAAABIABAFIgFgGIgGgGQgLgJgIAAQgCAAgEAJIgBABIgFALIgRgMgEghDgDjIgkAnIhJBXIgEAFIgCAHQANACAFAFIABADIAEgDIAEgDIAFgBQA6hZBEg9QAHgLAQgOIAcgZQAjgfgEgcQhTBMgqAqgEgjygDfIgIAuIgFAvQgDAPgFALIgGAJIgCACIAAAAIAHgFQALgGAGABIAAgCIABgFIAEg5QAEgyAHgaIgBATIACgTIACgLQACgHgPgDQADAOgEAbgEgkNgEtQgoAAgcATQgeAVgFAlQANgEAQgKIAbgSQAigVAdACQgCAFgKAIQgJAIgCAHQAEAAAMgHQANgIAGgCQAeABAKAGQAFAAgHgJQAPgBASAPIAbAZQgGgrgmgaQArgNArA2QgCgQgSgTQgWgUgJgKQArgCArATQgJgWgdgLQgfgMgmADQAKgMAVgHIAngJQgWgKgjAIIguANQADgHAKgJQAKgKADgHQgzAOgPAWIgZgSQgPgLgSABQgBANAgAVIgEABQgIABAHADQgggGgoARQgmARgTAaQAUgDA0gLQAPgDANAAQAZAAANAKgA+sj/QALgIAJgVIAPgkQAKAHAGAWQAIAcAEAGQAQgLgHghIgOgsQADABASARQAMAMALgCQAAgWgQgUIgXgfQAIAGAPABQAPABANgDQgMgeg8gDQACgDAMgHQAJgGACgHQgLACgfAQIgCgNQgCgKAAgHQgIAEgCALIgCASIgWgWQgQgLgOACQAQAiAKAQQgxgZgcAGQAKAKAWALQAaANAHAGQgbgJgoANQAOAEAiAHQAbAHAEARQACAJgEAQQgFAQACALQAFgEAHgRQAGgPALgCIgHBIgAovg9IACgJIABgCIAAAQgEgjqgBtIgBADIAAABIgCACIAAABIADgHg");
	this.shape_24.setTransform(296.1,149.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.6,-1,516.9,312.2);


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
		
		 window.open ("adjective_Scene10.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adjective_Scene8.html","_self");
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


(lib.Lesson7HowMany = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		playSound("SE3questions");
	}
	this.frame_12 = function() {
		playSound("EvanAdjanswers");
	}
	this.frame_40 = function() {
		playSound("Evanhowmany");
	}
	this.frame_67 = function() {
		playSound("SEWhichOne");
	}
	this.frame_71 = function() {
		playSound("HMMM");
	}
	this.frame_84 = function() {
		playSound("Evanhowmany");
	}
	this.frame_107 = function() {
		playSound("bell_chord_1");
	}
	this.frame_115 = function() {
		playSound("_1girl");
	}
	this.frame_159 = function() {
		playSound("bell_chord_2");
	}
	this.frame_170 = function() {
		playSound("_2girls");
	}
	this.frame_212 = function() {
		playSound("bell_chord_3");
	}
	this.frame_221 = function() {
		playSound("_6girls");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(6).call(this.frame_12).wait(28).call(this.frame_40).wait(27).call(this.frame_67).wait(4).call(this.frame_71).wait(13).call(this.frame_84).wait(23).call(this.frame_107).wait(8).call(this.frame_115).wait(44).call(this.frame_159).wait(11).call(this.frame_170).wait(42).call(this.frame_212).wait(9).call(this.frame_221).wait(53));

	// Layer 1
	this.instance = new lib.AnAdjAnswersHOWMANY("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(176.4,25.4,1,1,0,0,0,155.1,30.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtB/QgGgFAAgHQAAgKAFgJQAHgJAJAAQARgBAAAVQAAAJgFAIQgFAIgIABQgIAAgGgGgAgiA+QgGgFAAgHQAAgMAWgSIAogdQAWgTAAgQQAAgTgTgSQgRgPgUgBQgLABgQAKQgRAMgDAAQgHAAgGgGQgEgGAAgHQAAgNAagNQAXgNAPAAQAiAAAbAbQAcAbAAAiQABAZgRATQgJALgaASQgaAUgKAMQgFAGgHABQgHAAgFgGg");
	this.shape.setTransform(275.9,139.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkCDQgGgFAAgHQAAgGAQgeIAVgnQgegogJgVQgIgUgSgbIgdgtQgCgEAAgFQAAgHAFgFQAFgFAHAAQAJAAAFAIIAOAWQASAaAGAKQANAVAHASQAGAOARAXIAnhdIATglQAEgMALAAQAHAAAGAFQAFAFAAAHQAAAIgJAQQgEAHgHANIgdBJQgRAogPAeIgVAnIgJASQgFAKgKAAQgHAAgFgFg");
	this.shape_1.setTransform(255.7,139.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhyCFQgFgFAAgHIABgWIABgWIABgfIAAggIAAghIgBgiIgCggIgCggQAAgIAHgHQAHgGAIAAQAJAAAOAUQAqA/AiAqQAoAyAwAtIAAgWIAAgVQAAhKgGgtIgFgRQgDgMAAgHQAAgTASAAQAeAAAABvIgBA3IAAA5QAAAIgDATQgDARgPAAQgKAAgNgMQhFhChZh7IgBAnIgBAmIABArIAAAqQAAAugRAAQgKAAgFgGg");
	this.shape_2.setTransform(231.3,139);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA8BZQgFgQgHgmQgRACgcAGIgtAKQgIAWgVArQgFAKgKAAQgHAAgFgFQgFgFAAgIQAAgIAZg2QgCgEAAgGQAAgOAQgEQAUgkAegvQAnhBAKAAQANAAAFATIALA5IAaB2IAJAbQAFAOAAAFQAAAHgFAFQgFAFgHAAQgQAAgLgogAgVAMQAUgFApgHIgNhBg");
	this.shape_3.setTransform(204.1,139.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABpCBQgFgJgEgSIgHgeQgGgbgPhdIgjBnIgKAfQgGAUgGANQgIANgLgBQgKABgGgMQgDgHgDgLIgGgTQgRg8gNhEIgGAfIgWBZQgBAQgIAfQgFANgMAAQgIAAgFgGQgEgFgBgHQAAgdAMgpIAThFIAKg2QAIglAIgLQAHgKAKAAQALAAAFAMQAHAQAIAuQAJA5ATBAQAZhBAShIIAFgYQADgQAFgIQAGgNAMAAQAPAAAIAcQADAKADAfQALBMAOA3IAJAdQAGAXABAGQgBAIgFAEQgGAFgHAAQgJAAgGgJg");
	this.shape_4.setTransform(176.3,139.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAmCGQgGgFAAgHQgIgVgDgNIgNhKQgIgtgCgcQgPA5gSAmQgUAtgHAaQACAEAAAEQABAHgHAFQgGAFgIAAQgXAAAAgVIgFgWIgThTQgLgqgbhPIgBgHQAAgQARAAQAMAAAGANQADAGAKAdQAKAfAJArIARBLQATgqASg8QAKglAHgPQAOglAOAAQAMAAAFAMQAHAOAFA4QAEAcAJAmIAOBDQAXg3AihdIAJggQAFgUAHgLQAGgJAKAAQARAAAAARQAAADgGAOIgGASIgKAfIgyB6QgIAUgQAnQgHAMgMAAQgHAAgHgFg");
	this.shape_5.setTransform(132.8,139.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhWBqQgjgfAAgxQAAg6AjgwQAng2A5AAQA4AAAcAaQAcAaAAA5QAAA6ggAvQglA3g5AAQgwAAgigdgAg8g5QgbAmAAAtQAAAhAZAVQAXAUAjAAQAoAAAbgqQAYgmAAgtQAAgpgSgRQgRgQgqAAQgpAAgdAqg");
	this.shape_6.setTransform(100,139.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIgBgbIgBgdIACgoIACgpQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHIgCApIgCApIABAqIBJgNQArgIAeAAQACgZAAgxQAAgNAEgNQAGgTAKAAQAHAAAFAFQAFAFAAAHIgBAHQgDAHAAAOIAAAPIABAPQAAARgDAiQgDAhAAARIACAnIABAnQAAAHgEAFQgFAFgHAAQgHAAgFgFQgEgFAAgHIgCgnIgCgnIABgZQgdAAgrAJIhHAOQAAAPgDAcQgDAdAAAPQAAAHgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_7.setTransform(72.7,139);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_8.setTransform(235.4,100.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_9.setTransform(226.7,100.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_10.setTransform(218,100.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJBlQgFgFAAgIQAAgUgEgpQgEgnAAgVQAAgSgFgKQgMAFgMANIgVAWIgIALIgCAdIgCAeIACAOIABANQAAAHgFAFQgFAFgHAAQgUAAAAgsIACgfIACgdIgBgbIgCgcQAAgmARAAQAHAAAGAFQAFAGAAAHIgBAKIgBALIABARQAJgSARgPQARgOAMAAQAbAAAJAaQAKgMANgGQANgHAQAAQAdAAAKAfQACAGAFAqQAFAcAIBFQAAAHgFAFQgFAEgHAAQgOAAgDgOIgGg1IgGg0QgCgMgEgLQgFgQgHAAQgHAAgRALQgQAKgFAGQgBAQABAQIAGAtQADAbAAARQAAAIgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_11.setTransform(200.1,92.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJBlQgFgFAAgIQAAgUgEgpQgEgnAAgVQAAgSgFgKQgMAFgMANIgVAWIgIALIgCAdIgCAeIACAOIABANQAAAHgFAFQgFAFgHAAQgUAAAAgsIACgfIACgdIgBgbIgCgcQAAgmARAAQAHAAAGAFQAFAGAAAHIgBAKIgBALIABARQAJgSARgPQARgOAMAAQAbAAAJAaQAKgMANgGQANgHAQAAQAdAAAKAfQACAGAFAqQAFAcAIBFQAAAHgFAFQgFAEgHAAQgOAAgDgOIgGg1IgGg0QgCgMgEgLQgFgQgHAAQgHAAgRALQgQAKgFAGQgBAQABAQIAGAtQADAbAAARQAAAIgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_12.setTransform(172.9,92.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJBlQgFgFAAgIQAAgUgEgpQgEgnAAgVQAAgSgFgKQgMAFgMANIgVAWIgIALIgCAdIgCAeIACAOIABANQAAAHgFAFQgFAFgHAAQgUAAAAgsIACgfIACgdIgBgbIgCgcQAAgmARAAQAHAAAGAFQAFAGAAAHIgBAKIgBALIABARQAJgSARgPQARgOAMAAQAbAAAJAaQAKgMANgGQANgHAQAAQAdAAAKAfQACAGAFAqQAFAcAIBFQAAAHgFAFQgFAEgHAAQgOAAgDgOIgGg1IgGg0QgCgMgEgLQgFgQgHAAQgHAAgRALQgQAKgFAGQgBAQABAQIAGAtQADAbAAARQAAAIgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_13.setTransform(145.7,92.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIgBgbIgBgdIACgoIACgpQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHIgCApIgCApIABAqIBJgNQArgIAeAAQACgZAAgxQAAgNAEgNQAGgTAKAAQAHAAAFAFQAFAFAAAHIgBAHQgDAHAAAOIAAAPIABAPQAAARgDAiQgDAhAAARIACAnIABAnQAAAHgEAFQgFAFgHAAQgHAAgFgFQgEgFAAgHIgCgnIgCgnIABgZQgdAAgrAJIhHAOQAAAPgDAcQgDAdAAAPQAAAHgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_14.setTransform(118.7,88.2);

	this.instance_1 = new lib.onegirl("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(148,328.4,1,1,0,0,0,139.1,22.9);

	this.instance_2 = new lib.twogirls("synched",3);
	this.instance_2.parent = this;
	this.instance_2.setTransform(148,328.4,1,1,0,0,0,139.1,22.9);

	this.instance_3 = new lib.threegirls("synched",4);
	this.instance_3.parent = this;
	this.instance_3.setTransform(148,328.4,1,1,0,0,0,139.1,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},6).to({state:[]},56).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},36).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},55).to({state:[{t:this.instance_3}]},51).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.33,scaleY:1.33,x:189.1,y:36.5},6).to({_off:true},56).wait(212));

	// Layer 5
	this.instance_4 = new lib.HOWMANY();
	this.instance_4.parent = this;
	this.instance_4.setTransform(134.2,263.5,0.599,0.599,0,0,0,71.8,99.1);
	this.instance_4._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ao6FiQgFgEAAgCQAAgFgCgGQgDgFAAgGQAAgGACgCIABgFQATgDAIAJQAGAGAAAKQAAAEgFAIQgGANgKAAQgCgBgDgFgAoFEXQgBgKgDgQIgCgWQgBgWAKgGQAJgEANAJQANAIAKAPQAKARAAAQQAAAGgBABIgBABQgXABgOAEIgQAEgAgtDfQgRgXgOAAQgQAAgEAGIgDANQgHAUhRAAQgXAAgMgWQgKgZgEgFQgIgBgEAHQgEAHgNAAIhZACQgCgQgHgQQgKgWgNAAIgJAKQgIALgIgCIgdAAQgCgEgJgSIg0gZQgWgLgLgHQgMgKgFgLQgFgMAAgUQAAgEADgFQAEgIADgJIAUgCQAIgKgBgNIgIgeQgHgcgBgPQAAgSACgDQADgIASgTIAUgBQAFAAAFACQAFADACgBIgBgjQAAgaAFgSQAQg3BIAAQAKAAAJAMQAIALAFAAQAEAAABgBIAAgDIAEgaQADgXAHgQQAUgyA4AAIAOAQQANAQAGAAIAtgTQAxgUAYgBIBQAAIALAaQAJASAHAEIAQgHIAMgEID1AAQALAKgBAWQAAAXAEAGIACgDIABgCIDLAAQAFASAGAHQAGAFAAAHQgBAJgGAOQgGANAAADIAAAHIABABQAfgDAdApQAKAOAHARQAHAPAAAEQgBATgTAYIgVAWIAAAHIABgBQAbgBAHARQAEAHgCAJQABAegVAhQgbAtgwAAQgMAAgTgOIgSgOIgDAEIAAACIAAASQABAQgFALQgSAjhGAAQgNABgFgJQgFgHgEgBIgoAmQgpAkgLAAQgIAAg3gcIg4gcQgTARgXARQguAkgYgBQgSAAgQgYg");
	this.shape_15.setTransform(61.4,172.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ApJFhIgDgOIAAgHQAAgMADgJQAEgNAJAAQAUAAAJAOQAGAJAAAMQAAAJgHAOQgHAQgIAAQgTAAgHgTgApBE5IgCAEQgCACAAAGQAAAGADAFQADAGAAAFQAAACAEAFQAEAFACAAQAKAAAGgMQAFgJAAgEQAAgKgGgGQgHgGgLAAIgJABgAoNEEIgHgeQAAgcANgKQALgKARAHQAQAGALATQANAVAAAaQAAAOgIAIQgWACgLADIgLAEQgNAAgJgggAoCDLQgKAFAAAWIADAWQADARAAAJIAEACIAPgDQAPgEAWgCIACgBQABgBAAgGQAAgQgLgQQgJgQgNgIQgIgGgHAAQgEAAgDACgAgyDrIgNgRQgHgIgHAAQgGAAgGAHIgJANQgNAUgRAAQhbAAgPgQQgFgGAAgKQABgOgCgFIgIACIgWALIhagBIgJgZQgIgRgIgKIgJAKQgKAKgHAAIgfgBIgHgLIgGgLQhAgVgbgfQgUgXAAgfQAAgQABgDQABgGAMgPIAVgDIACgCIAAgHIgHgcQgIgdAAgSQAAgVACgDIAbgjIAOAAQAOABACABIABgkQADgaAHgSQAUg0A+AAIAUABQACAEAEAFQAFAFAFABIAHgYQAGgXAHgPQAWgzAsAAQAVAAAFAQIAEAKQADAFAJAAQAFAAAigRQArgSAxgDIAJAAIA+AAQARAaAIAVQAFgDAbgIID0ACQALAIADAQIABAcIDLACIAWAbQACADAAARIgBATQgBAKgHAJQAdAEAbAnQAZAiAAAVQAAARgFALQgGANgSAWIAWAcQAEAFAAAIQAAAfgUAkQgbA1gzAAQgNAAgQgJQgNgGgGgFQgGAXgLATQgVAkgnAAQgWAAgIgFQgIgGgOAAQgHAAghAdQgeAbgLAOQgbgFgwgbIgrgaQgHAAgPALIgeAYQgtAkgeAAQgSAAgRgYgAguDfQARAYASAAQAYAAAugjQAXgSATgRIA3AcQA4AcAHAAQAMAAApgkIAoglQAEAAAFAIQAFAIAMAAQBHAAARgkQAGgLgBgQIgBgSIABgCIADgEIASAPQATANALAAQAxAAAbgtQAUggAAgfQACgJgEgHQgHgRgbACIgBABIAAgIIAUgVQAUgZAAgSQAAgFgGgPQgHgQgKgPQgdgpgfAEIgBgBIAAgIQAAgDAGgNQAGgNAAgKQAAgHgFgFQgHgHgEgSIjLAAIgBADIgDACQgEgGABgXQAAgWgKgKIj1AAIgMAEIgQAIQgIgFgIgSIgLgaIhQAAQgYACgyATIgtATQgFAAgOgQIgNgQQg4AAgVAyQgGAQgDAXIgEAbIAAACQgBABgFAAQgEAAgIgLQgJgLgKAAQhIAAgQA2QgGASAAAaIACAjQgCABgFgCQgGgDgEAAIgUABQgSATgDAIQgCADAAASQAAAPAIAdIAIAeQAAAMgHAKIgUACQgDAJgEAIQgDAGAAADQAAAUAFAMQAFAMAMAJQAKAHAXALIA0AZQAIASADAEIAdAAQAIACAIgKIAJgLQANAAAKAWQAHAQACAQIBZgCQAMAAAFgHQAEgGAHAAQAFAGAKAYQAMAWAXAAQBRAAAHgTIADgOQADgGARAAQAOAAAQAYg");
	this.shape_16.setTransform(61.4,173);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Aq6GLQAAgGgEgHQgEgGAAgGQAAgHACgDQAZgIAKAKQAIAGAAALQAAAFgGAKQgIAOgLAAQgMgLAAgCgAp5EeIgEgYQAAgZANgGQALgGAQAKQAPAKALARQANATAAASIgDAJQgbACgSAFIgTAEIgIghgAg3D9QgUgbgRAAQgUAAgFAHIgDAQQgJAWhiAAQgcAAgPgZQgLgcgHgGQgJgBgEAIQgGAIgQAAIhsACQgCgSgJgSQgMgZgQAAIgKAMQgKALgKgCIgiAAQgEgEgKgVIg/gcQgcgNgMgIQgPgKgHgNQgFgOAAgXQgBgEAEgGQAFgJADgKIAagDQAIgLAAgOIgJgiQgKghAAgQQAAgVACgEQADgIAWgWIAZgBQASAGACgBIgCgoQAAgeAHgUQAUg+BWAAQANAAALANQAKANAFAAQAGAAABgCIAAgCQACgRADgNQAEgaAHgTQAZg5BEAAQABAAAPATQARASAHAAIA3gWQA8gWAegCIBgABIAOAdQAKAUAJAGIAUgJIAOgEIEqAAQANALgBAZQAAAaAFAHIADgDIABgDID2AAQAGAUAIAIQAGAGAAAIQAAALgIAPQgHAOAAAEIAAAJIACABQAlgEAjAvQAMAQAKATQAHAQAAAGQAAAUgZAcIgZAZIABAIIABgBQAggCAJATQAFAJgCAKQAAAjgYAlQghAzg8AAQgNAAgXgQIgWgRIgEAFIgBADIACAUQAAASgGANQgWAohWAAQgOAAgHgJQgGgJgFAAIgwAqQgyApgOAAQgJAAhEggIhDgfQgYATgcAUQg3AogdAAQgWAAgUgcg");
	this.shape_17.setTransform(74.1,167.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ArIGQQgCgHgBgJIAAgHQAAgOADgKQAGgPAKAAQAZAAALAPQAHALAAAOQAAAKgIAQQgJARgKAAQgXAAgJgVgArAFnQgCADAAAHQAAAGAEAGQADAHAAAGQAAACAMALQAMAAAIgOQAFgKAAgFQAAgLgHgGQgGgGgKAAQgIAAgLAEgAp/EmIgIgiQAAgfAQgMQAOgLAUAIQATAHAOAVQAPAYAAAdQAAAQgJAKQgbACgNAEIgNAEQgQAAgMglgApxDmQgMAGAAAZIAEAYIAIAhIATgEQASgFAbgCIADgJQAAgSgNgTQgLgRgQgKQgKgGgIAAQgFAAgEACgAg9EKIgPgTQgJgJgJAAQgHAAgHAHIgLAQQgQAWgVAAQhvAAgSgSQgGgGABgMQABgQgDgFIgJACIgbAMIhugBIgLgcQgJgTgLgMIgKAMQgMALgJAAIgmgCIgIgMIgIgNQhNgYghgiQgZgbAAgjQAAgSACgEQACgGAOgRIAagEQACgKgJggQgKggAAgVQAAgXADgEIAhgoIAQABQASAAACABIACgpQADgcAIgVQAZg7BLAAIAZABQACAFAFAFQAGAGAGABQACgDAGgYQAIgbAIgQQAbg6A2AAQAZAAAGASQADAJACACQAEAGALAAQAGAAApgUQA1gTA7gEIALAAIBLAAQAVAdAJAYQAHgDAhgJIEpACQANAJAEASIABAgID2ACIAbAfQACADAAAUIAAAVQgCAMgIAJQAiAFAiAsQAeAnAAAYQAAATgGAMQgHAQgXAYIAbAgQAFAGAAAJQAAAjgYApQghA8g+AAQgPAAgUgKQgQgHgHgGQgHAagOAWQgaApguAAQgbAAgKgGQgKgHgRAAQgIAAgoAhQglAfgOAPQghgFg5geIg0geQgJAAgSANIglAbQg3AogkAAQgWAAgVgbgAg4D8QAVAcAVAAQAeAAA3goQAcgUAXgTIBEAfQBEAgAIAAQAPAAAygpIAwgqQAFAAAGAJQAGAJAPAAQBWAAAVgoQAHgNgBgSIgBgUIABgDIADgFIAXARQAWAQAOAAQA8AAAhgzQAYglAAgjQACgKgFgJQgJgTggACIgBABIgBgIIAZgZQAZgcAAgUQAAgGgIgQQgJgTgMgQQgjgvgmAEIgBgBIAAgJQAAgEAHgOQAIgPAAgLQAAgIgGgGQgJgIgFgUIj2AAIgBADIgEADQgFgHABgaQAAgZgMgLIkqAAIgOAEIgUAJQgKgGgJgUIgOgdIhhgBQgeACg8AWIg3AWQgGAAgRgSQgPgTgBAAQhEAAgZA5QgIATgEAaQgCANgCARIAAACQgBACgGAAQgFAAgKgNQgLgNgNAAQhXAAgTA+QgHAUAAAeIACAoQgCABgSgGIgZABQgWAWgEAIQgCAEAAAVQAAAQAKAhIAKAiQAAAOgJALIgZADQgDAKgFAJQgEAGAAAEQAAAXAGAOQAGANAPAKQANAIAcANIA/AcQAKAVADAEIAjAAQAKACAJgLIALgMQAQAAAMAZQAJASACASIBsgCQAQAAAFgIQAFgIAJABQAGAGAMAcQAOAZAcAAQBjAAAJgWIADgQQAEgHAUAAQARAAAUAbg");
	this.shape_18.setTransform(74.1,168);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("As2G6QgBgHgEgIQgEgHAAgHQAAgHACgEQAdgIANALQAIAIAAAMQAAAFgHALQgJAPgOAAQgOgMABgCgArqFAQgEgVAAgGQABgcAOgHQANgFASALQASAKAOATQAOAWAAAUIgDAKQgfACgWAFIgWAEQgFgOgFgWgAhCEbQgXgdgVAAQgXAAgEAIQgDAEgBAMQgLAZh0AAQghAAgRgcQgOgfgHgHQgLAAgFAIQgHAJgSAAIh/ACQgDgUgKgUQgOgcgTAAIgNANQgLANgLgCIgqAAQgDgFgMgXIhLggQgggOgQgJQgRgLgHgPQgHgQAAgZQAAgEAEgHQAHgLADgLIAdgDQAKgMAAgQIgLgmQgLglAAgSQAAgXACgEQAEgKAagYIAegBQAVAGACgCIgCgrQgBgiAIgXQAXhEBnAAQAPAAANAOQAMAOAFAAQAIAAABgCIAAgDIAFghQAEgeAKgUQAehABQAAIASAVQAUAUAIABIBBgYQBGgZAjgDIByABIARAgQALAXALAGIAXgJIARgGIFfAAQAPAOgBAcQgBAdAGAHIAEgDIACgEIEiAAQAGAXAKAJQAHAHAAAIQAAANgJAQQgJARAAAEIAAAKIACABQAsgFApA0QAPATALAVQAIASAAAGQAAAYgcAfIgeAbQAAAJABABIABgCQAmgCALAVQAFALgDALQAAAngcApQgnA5hGAAQgQAAgbgSIgagTQgDADgBAEIgBACIACAXQAAAUgIAOQgYAthmAAQgRAAgIgKQgHgLgGAAQgbAYgdAXQg6AvgSAAQgKAAhQgjIhQgkQgbAWggAVQhCAtgjAAQgZAAgZgfg");
	this.shape_19.setTransform(86.8,162.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AtGG/QgDgHgBgKIAAgJQAAgPAEgLQAHgRAMAAQAdAAANARQAJAMAAAQQAAALgKASQgLATgMAAQgbAAgKgYgAs9GRQgCAEAAAHQAAAHAEAHQAEAIAAAGQAAADAOAMQAOAAAJgPQAHgLAAgGQAAgMgJgHQgHgGgMAAQgJAAgNADgArwFJIgJgmQAAgjASgNQAQgNAYAJQAXAIAQAYQASAaAAAiQAAARgLALQgfACgQAFIgQAEQgTAAgNgpgArgEBQgOAHAAAcQAAAGAEAVQAFAWAFAOIAWgEQAVgFAggDIADgJQAAgUgOgWQgOgTgSgLQgMgHgKAAQgFAAgFACgAhIEpQgOgRgEgEQgKgJgLAAQgJAAgHAIIgNARQgTAZgZAAQiCAAgWgVQgHgHABgNQABgRgCgGIgMACIgfAOIiCgBIgNggQgLgWgMgMIgMANQgPAMgKAAIgsgCIgKgOIgJgOQhbgagmgnQgegeAAgnQAAgUACgEQACgHAQgTIAfgFQADgLgLgkQgLgkAAgXQAAgaADgFIAmgsIAUAAIAXACIACgtQAEghAKgXQAdhCBYAAIAeABQACAGAGAGQAHAGAHACQACgEAIgbQAJgdAJgTQAhhAA/AAQAdAAAHATIAGANQAFAGANAAQAGAAAxgVQA+gXBGgEIANAAIBYAAQAZAhALAbQAHgEAogKIFdACQAQAKAEAVQABADAAAhIEiACIAgAiQADAEAAAWQAAAUgBAEQgCANgKAKQApAGAoAxQAjAsAAAaQAAAVgHAOQgIARgbAcIAfAjQAGAHAAAKQAAAogcAuQgnBChJAAQgSAAgYgLQgRgHgKgHQgIAdgPAYQgfAug3AAQggAAgLgHQgMgHgUAAQgKAAgvAlQgrAjgQARQgngGhEgiIg9ghQgKAAgWAOIgrAeQhBAtgqAAQgaAAgZgfgAhCEaQAYAfAaAAQAiAABCgtQAhgWAbgVIBQAjQBQAkAKAAQARAAA7gvQAdgXAbgYQAGAAAHALQAHAKASAAQBmAAAYgtQAIgOgBgUIgBgXIABgDQABgDADgDIAaATQAbASAQAAQBGAAAng6QAcgpAAgmQADgMgFgKQgLgVgnACIAAACQgBgBAAgJIAdgbQAdggAAgXQAAgGgJgSQgKgVgPgTQgpg0gtAFIgBgCIAAgJQAAgFAJgQQAJgRAAgMQAAgJgIgGQgJgJgHgXIkiAAIgBAEIgEADQgGgIABgdQAAgcgPgNIleAAIgRAGIgXAJQgLgGgMgXIgQghIhyAAQgjAChHAZIhAAYQgIAAgUgUIgSgVQhQAAgeBAQgKAUgEAdIgFAiIAAADQgBACgIAAQgFAAgNgOQgMgPgPAAQhnAAgXBFQgIAXABAhIACAsQgCACgWgHIgdACQgaAYgEAJQgCAFAAAWQAAATALAlIALAmQAAAQgKAMIgdADQgEALgGALQgEAHAAAEQAAAZAHAQQAHAOARAMQAPAJAhAOIBLAgQALAXAEAFIApAAQAMACALgNIANgNQASAAAPAcQAKAUADAUIB/gCQASAAAGgJQAGgJALABQAHAHAOAfQARAcAhAAQB0AAAKgZQACgMADgFQAEgIAXAAQAUAAAYAeg");
	this.shape_20.setTransform(86.8,163);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AuzHoQAAgHgEgIQgGgIAAgIQAAgIADgEQAigKAOAMQAJAJABANQAAAGgIAMQgKARgRAAQgQgNAAgDgAtaFiQgEgYAAgGQAAgfAQgIQAOgGAWAMQAVAMAPAWQASAXgBAWIgDALQglADgZAFIgZAFQgGgQgFgYgAhME6QgbgigXAAQgbAAgFAJQgDAFgCAOQgMAbiGAAQgmAAgTgfQgQgigIgIQgMAAgHAJQgHAJgVABIiSACQgEgWgLgXQgRgegVAAIgPAOQgNAOgOgCIguAAQgFgGgNgZIhWgjQgmgPgRgLQgUgMgJgRQgHgQgBgcQAAgFAGgIQAGgLAFgNIAigDQALgOAAgSIgNgqQgNgoAAgVQAAgZACgFQAGgKAdgbIAigCQAYAIADgCIgCgxQgBgkAKgaQAahMB2AAQARAAAOAQQAOAPAIAAQAHAAADgCIAAgCQABgVADgRQAGggAKgWQAjhHBcAAIAWAXQAWAXAJAAIBKgbQBRgcApgCICDAAIATAkQANAZAOAHIAagKIATgGIGTAAQASAOgBAfQgBAhAHAIIAEgEIACgEIFOAAQAHAaAMAJQAHAIABAKQAAANgLASQgKASAAAGIAAAKIACABQAzgEAwA5QARAUAMAXQAKAVAAAHQgBAZghAjIgiAeQAAAKACABIABgCQAsgCAMAXQAGALgDANQAAArggAtQgtA/hQAAQgUAAgegSIgegWQgEADgCAEIAAADIABAZQABAWgJAQQgcAyh1AAQgUAAgJgMQgIgLgGAAIhCA0QhDAzgUAAQgLAAhdgnIhbgoQgfAZgmAYQhMAxgoAAQgdAAgcghg");
	this.shape_21.setTransform(99.5,157.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AvEHvQgEgJgBgKIAAgKQAAgRAFgNQAHgSAOAAQAiAAAPATQAKANAAASQAAAMgMAUQgMAVgNAAQggAAgLgagAu6G8QgDAEAAAIQAAAIAFAIQAFAIAAAHQAAADAQANQAQAAALgRQAHgMAAgGQAAgNgKgJQgHgGgOAAQgLAAgPAEgAthFsIgLgqQAAgmAVgPQASgOAbAKQAbAJATAaQAUAdAAAlQAAATgMAMQgkACgSAFIgSAGQgWAAgPgugAtOEcQgRAIAAAfQAAAGAFAYQAFAYAGAQIAZgFQAZgFAkgDIAEgLQAAgWgRgXQgPgWgVgMQgOgIgMAAQgFAAgFACgAhTFJIgVgYQgMgKgMAAQgKAAgJAJIgPATQgVAcgdAAQiWAAgYgXQgIgIAAgPQACgTgDgGQgKABgDABIglAQIiVgCIgPgjQgMgYgOgOIgPAOQgQAOgMAAIgzgCIgLgPIgKgPQhpgegsgrQgighAAgrQAAgXACgEQACgIATgVIAjgEQAEgNgNgoQgNgoAAgZQAAgeAEgFIAsgwIAXAAQAXABADABIADgyQAEgkAMgZQAhhKBlAAIAiACQADAGAHAHQAIAHAIABQACgDAJgeQAKghAMgVQAlhHBIAAQAiAAAIAVQAEAMADADQAGAGAOAAQAIAAA4gXQBHgZBRgFIAPAAIBlAAQAdAlAMAeQAJgFAtgKIGSABQATAMAEAXIACAnIFNACIAmAnQACADAAAZIgBAbQgCAOgLAMQAvAFAtA3QApAwAAAeQAAAXgIAPQgKATgeAfIAkAnQAHAIAAAKQAAAsggAzQguBJhUAAQgUAAgcgLQgUgJgLgIQgJAhgSAaQgjA0hAAAQgkAAgNgIQgOgIgXAAQgLAAg2ApQgzAmgSATQgsgHhOgmIhHgkQgMAAgYAPIgzAiQhKAygxAAQgeAAgcgigAhME5QAcAhAdAAQAoAABMgxQAmgYAfgZIBbAoQBdAnALAAQAUAABDgzIBBg0QAHAAAIALQAJAMAUAAQB1AAAcgyQAJgQgBgWIgBgZIAAgDQACgEADgDIAfAWQAeASATAAQBRAAAsg/QAhgtAAgrQADgNgGgLQgNgXgsACIgBACQgBgBAAgKIAigeQAhgjAAgZQAAgHgKgVQgMgXgRgUQgvg5gzAEIgCgBIAAgKQAAgGAKgSQAKgSAAgNQAAgKgIgIQgLgJgIgaIlNAAIgCAEIgEAEQgHgIABghQAAgfgRgOImTAAIgTAGIgbAKQgNgHgNgZIgTgkIiDAAQgpAChRAcIhKAbQgJAAgWgXIgWgXQhcAAgjBHQgKAWgGAgQgDARgCAVIAAACQgCACgIAAQgHAAgOgPQgOgQgRAAQh2AAgbBMQgJAaAAAkIADAxQgDACgZgIIghACQgeAbgFAKQgCAFAAAZQAAAVANAoIANAqQAAASgLAOIgiADQgFANgHALQgFAIAAAFQAAAcAIAQQAJARAUAMQARALAmAPIBVAjQANAZAFAGIAvAAQANACAOgOIAOgOQAWAAAQAeQAMAXADAWICTgCQAUgBAIgJQAGgJANAAQAIAIAPAiQAUAfAmAAQCGAAAMgbQACgOADgFQAFgJAbAAQAXAAAbAig");
	this.shape_22.setTransform(99.5,158);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AwvIXQAAgIgFgIQgGgJAAgJQAAgJADgEQAmgLAPAOQAMAIAAAQQAAAGgJAOQgMARgSABQgSgPAAgDgAvKGFQgGgbAAgHQAAgiATgIQAQgHAZAOQAYAMARAYQATAZAAAZIgFAMQgoACgcAHIgdAFQgHgSgFgZgAhWFYQgfglgaAAQgeAAgGAKQgDAFgCAQQgOAdiXAAQgrABgXgjQgRglgKgJQgNAAgIAKQgIALgYAAIilADQgEgZgNgZQgTghgYAAIgRAQQgPAPgPgCIg1AAQgFgGgPgcIhhgmQgrgRgTgLQgXgOgJgTQgJgRAAgfQAAgGAFgIQAIgNAFgOIAngDQAMgPAAgTIgOgvQgPgsAAgXQAAgbADgFQAFgMAigeIAmgBQAcAIADgBIgDg2QAAgpAKgcQAehSCGgBQATABAQARQAQAQAIABQAJgBACgCIAAgDIAGgoQAGgkAMgYQAnhOBoAAIAZAZQAZAZAKAAIBUgdQBcgfAtgCICVAAIAVAnQAPAdAPAHIAegMIAWgGIHIAAQATAQAAAiQgCAjAIAJIAGgEIABgEIF5AAQAJAcANAKQAJAJAAAKQAAAPgMAUQgLAUAAAFIAAALIACACQA6gFA2A/QATAWANAZQAMAXAAAHQAAAdgmAmQgmAfAAACQAAAKABABIABgBQAygEAOAaQAHANgDANQAAAwglAyQgzBFhbAAQgVgBgjgUIgigXQgEADgCADIgBAEIACAcQABAYgKARQggA3iEAAQgXAAgKgNQgJgMgIAAIhJA4QhMA5gXAAQgMAAhpgrIhngrQgjAagrAbQhWA2gtAAQgiAAgfglg");
	this.shape_23.setTransform(112.2,152.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AxCIeQgEgJgCgMIAAgKQAAgTAGgOQAIgTAQAAQAmAAARAUQALAPAAATQAAANgNAWQgOAXgPAAQgkAAgMgdgAw3HnQgDAEAAAJQAAAIAGAJQAFAJAAAIQAAADASAOQASAAAMgSQAJgNAAgHQAAgPgMgJQgIgHgQAAQgMAAgRAFgAvTGPQgMgxAAADQAAgqAYgQQAVgPAeAKQAeAKAWAdQAXAgAAAoQAAAVgOAOQgpACgUAFIgVAGQgYAAgSgygAu9E4QgTAIAAAiQAAAHAGAaQAFAaAHASIAdgGQAcgGAogDIAFgLQAAgZgTgZQgRgYgYgNQgQgJgNAAQgHAAgFADgAheFpIgYgaQgNgMgOAAQgLAAgKAKIgRAVQgYAfggAAQiqAAgcgaQgJgIABgQQABgVgDgHQgLABgEABIgpARIiogBIgSgnQgNgagQgPIgRAPQgSAPgOAAIg5gCIgNgRIgMgQQh2ghgygvQgmgkAAgwQAAgYACgFQADgIAVgXIAogFQAEgPgOgrQgPgsAAgcQAAggAEgFIAyg2IAaABQAaABAEABIADg3QAEgnANgcQAmhRBzAAQAPAAAXACQADAHAIAHQAJAIAJACQADgEAKghQALgkANgXQAqhOBSAAQAmAAAJAYQAFAMADADQAGAIARAAQAJAAA/gaQBRgbBbgFIARgBIBzABQAgAoAOAgQAKgFAzgLIHHACQAUAMAFAZQABAEABAoIF5ACIArAqQACAEAAAbIAAAdQgDAQgNANQA2AGAzA8QAuA1AAAgQAAAZgJARQgLAVgiAiIAoAqQAIAJAAALQAAAxgkA4Qg0BQhfAAQgXAAgfgNQgXgJgMgJQgKAkgVAdQgoA4hHAAQgpAAgPgJQgQgJgaAAQgNAAg9AtQg5AqgUAVQgzgHhYgqIhQgoQgNAAgcARQgjAYgWANQhUA3g3AAQgiAAggglgAhWFXQAfAkAiAAQAtAABWg1QArgbAjgbIBnAsQBpArAMAAQAXAABMg5IBJg4QAIAAAJAMQAKAMAXAAQCEAAAgg2QAKgRgBgZIgCgbIABgEQACgDAEgEIAiAYQAjAUAVAAQBbAAAzhFQAlgyAAgvQADgNgHgNQgOgagyADIgBACQgBgBAAgKQAAgCAmggQAmgmAAgcQAAgIgMgWQgNgZgTgWQg2g/g6AFIgCgCIAAgLQAAgGALgTQAMgUAAgPQAAgLgJgIQgNgKgJgdIl5AAIgBAFIgGAEQgIgJACgkQAAghgTgQInIAAIgWAGIgeAMQgPgIgPgcIgVgnIiVgBQgtADhcAeIhUAeQgKAAgZgZIgZgZQhoAAgnBNQgMAZgGAjIgGApIAAADQgCACgJAAQgIAAgQgRQgQgRgTAAQiGAAgeBTQgKAcAAAoIADA2QgDACgcgIIgmABQgiAegFALQgDAGAAAbQAAAWAPAtIAOAuQAAAUgMAPIgnADQgFAOgIANQgFAIAAAFQAAAfAJASQAJASAXAOQATAMArARIBhAmQAPAbAFAHIA1AAQAPACAPgPIARgQQAYAAATAhQANAZAEAYIClgCQAYgBAIgKQAIgKANAAQAKAJARAlQAXAiArAAQCXAAAOgeQACgPADgGQAGgJAeAAQAaAAAfAlg");
	this.shape_24.setTransform(112.2,153);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AyrJGQAAgJgGgKQgGgJAAgJQAAgKAEgFQApgLASAOQANAKAAAQQAAAIgKAOQgOAUgTAAQgVgQAAgDgAw7GmQgGgcAAgIQAAglAVgJQATgIAbAPQAbAOATAaQAVAcAAAaIgFANQguADgfAHIggAGQgHgUgHgcgAhgF2QgigogdAAQgiAAgHAKQgDAGgCARQgQAgipAAQgvAAgagkQgTgqgKgJQgQAAgJALQgJALgaAAIi4ADQgEgagPgbQgWglgaAAQgBAAgSASQgRARgQgDIg7AAQgHgHgQgeIhtgpQgwgTgUgMQgagQgKgTQgLgUAAghQAAgGAGgJQAKgOAGgPIAqgEQAOgPAAgWIgQgyQgQgxAAgYQAAgeACgGQAGgNAmgfIArgCQAfAIADgBIgDg6QAAgsALgeQAhhbCWAAQAVAAASATQASASAJAAQAKAAACgCIAAgDQADgaAEgTQAGgmAOgbQArhUB0AAQACAAAaAbQAdAbAKAAIBeggQBnggAzgEICkABIAZArQARAeARAIQAMgGAVgGIAXgHIH+AAQAWARgCAlQgBAmAKAKIAGgEIACgFIGkAAQAKAeANAMQALAIAAAMQAAAQgNAWQgNAWAAAGIAAAMIADACQBBgGA7BFQAVAYAPAbQANAYAAAJQAAAegqApQgqAkAAABQAAALABABIABgBQA4gEAQAdQAHANgEAPQABAzgpA2Qg5BLhmAAQgYAAgmgWIgmgZQgFADgCAEIgBADQAAAGACAZQABAagMATQgiA7iUAAQgaAAgKgNQgKgOgJAAQgnAfgrAfQhVA9gaAAQgOAAh0gvIhzgvQgnAdgxAdQhfA7gzAAQgkAAgkgog");
	this.shape_25.setTransform(124.9,147.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AzBJNQgEgKgBgMIgBgMQAAgUAGgPQAKgWARAAQArAAASAXQAOAPAAAVQAAAPgPAXQgQAagRAAQgnAAgPgggAyzIRQgEAEAAAKQAAAKAGAJQAGAKAAAIQAAADAVAQQATAAAOgUQAKgOAAgHQAAgQgNgKQgKgIgRAAQgOAAgSAFgAxEGyIgNgzQAAgtAagSQAXgQAiALQAiALAXAfQAbAjAAAsQAAAXgPAOQgvACgXAHIgWAGQgcAAgTg2gAwsFTQgVAJAAAlQAAAHAGAcQAHAdAHATIAggGQAfgGAugDIAFgOQAAgagVgcQgTgZgbgPQgSgJgOAAQgHAAgHADgAhpGIIgagcQgPgNgPAAQgNAAgLALIgTAXQgbAhgkAAQi9AAgggbQgJgKAAgSQACgWgEgIQgMABgEACIguATIi8gCIgTgqQgPgdgSgQIgSARQgVAQgPAAIhAgCIgPgTQgLgOgCgEQiDgjg4gzQgsgoABgzQAAgbABgFQAEgJAYgZIAsgGQAFgPgQgwQgQgvAAgeQAAgjADgGQAXgWAigkIAdAAQAdABAEABIAEg7QAEgrAPgeQAqhYCAAAIArACQADAIAKAIQAKAIAJACQADgFAMgjQAMgnAPgZQAuhVBcAAQAqAAAKAaQAGANADAEQAHAIATAAQAKAABHgcQBZgeBmgGIATAAICAAAQAkAsAPAkQAMgGA5gMIH7ACQAYANAFAcQABAEACAqIGkADIAvAuQADAEAAAeQAAAagBAFQgDARgOAOQA7AHA6BBQAzA5AAAkQAAAbgKATQgMAWgnAlIAtAuQAKAKgBAMQAAA1goA8Qg5BYhrAAQgZAAgjgOQgagLgNgJQgMAngXAfQgsA+hQAAQgtAAgRgKQgRgJgeAAQgNAAhFAxQhAAtgWAXQg4gIhjgtIhZgsQgPAAgfATIg/AoQheA7g+AAQgmAAgkgogAhgF0QAkAoAkAAQAzAABfg6QAxgdAngdIBzAvQB0AvAOAAQAaAABVg9QArgfAngfQAJAAAKANQAKAOAaAAQCUAAAig8QAMgTgBgaQgCgZAAgFIABgDQACgFAFgDIAmAZQAmAXAYAAQBmAAA5hMQApg2gBgzQAEgPgHgNQgQgcg4ADIgBACQgBgBAAgMQAAgBAqgjQAqgqAAgdQAAgJgNgYQgPgcgVgYQg7hEhBAFIgDgCIAAgMQAAgGANgWQANgVAAgQQAAgMgLgJQgNgLgKgfImkAAIgCAFIgGAEQgKgJABgnQACglgWgRIn+AAIgXAHQgVAHgMAFQgRgIgRgeIgZgrIikAAQgzADhnAhIheAgQgKAAgdgbQgagcgCAAQh0AAgrBUQgOAbgGAmQgEAUgDAZIAAADQgCADgKAAQgJAAgSgTQgSgTgVAAQiWAAghBbQgLAeAAAsIADA6QgDACgfgJIgrACQgmAggGAMQgCAGAAAeQAAAZAQAwIAQAyQAAAWgOAQIgqAEQgGAPgKANQgGAKAAAGQAAAhALAUQAKATAaAPQAUANAwASIBtAqQAQAeAHAGIA7AAQAQADARgRQASgRABAAQAaAAAWAlQAPAbAEAaIC4gDQAaAAAJgMQAJgLAQABQAKAJATApQAaAlAvAAQCpAAAQghQACgQADgGQAHgLAiAAQAdAAAiAog");
	this.shape_26.setTransform(124.9,148.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("A0nJ0QAAgJgHgKQgGgKAAgKQAAgLAEgFQAtgMAUAPQAOALAAARQAAAIgLAQQgPAVgVAAQgXgRAAgEgAyrHIQgHgfAAgHQAAgpAXgJQAUgJAfAQQAdAQAVAbQAXAeAAAcIgFAPQgyADgjAHIgkAHQgHgVgHgfgAhqGUQgmgrggAAQglAAgHALQgFAHgCARQgSAki5gBQg1AAgcgnQgWgsgLgKQgRgBgKAMQgKAMgcAAIjMAEQgFgcgQgeQgXgogeAAQgBABgTASQgTASgSgCIhBAAQgHgIgSggIh4gtQg1gTgXgOQgdgRgLgUQgMgWAAgkQAAgGAHgLQALgOAGgQIAvgFQAQgRAAgXQAAgCgSg0QgTg1AAgaQAAggAEgHQAGgNApgjIAwgCQAiAKAEgCIgDg/QgBgwAMggQAlhiClAAQAYAAAUAVQAUATAJABQAMAAACgEIAAgDIAHgwQAHgpAQgdQAvhbCBAAQABAAAdAdQAfAdANAAIBngiQBxgjA4gEIC2ABIAbAuQASAhAUAIQAOgFAWgHIAagIIIzAAQAYATgCAnQgBAqAKAKIAHgEIACgGIHQAAQAKAiAQAMQAMAJAAANQAAARgPAYQgOAXAAAGIAAAOIADACQBIgHBBBKQAXAaARAfQAOAZAAAKQAAAgguAtQgvAmAAACQAAALABACIABgCQA+gEARAfQAJAOgEAQQAAA3gtA7Qg/BRhwAAQgaABgqgZIgrgbQgFADgCAFIgBAEIACAgQABAdgNAUQgnBAiiAAQgdAAgLgOQgMgPgJAAQgrAhgvAiQheBCgcAAQgQAAiAgyIiAgzQgrAeg1AgQhqA/g4AAQgoAAgngrg");
	this.shape_27.setTransform(137.6,142.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("A0+J8QgGgKgBgOIgBgMQAAgWAIgQQAJgXAUAAQAvAAAUAYQAOARABAWQgBAQgQAZQgRAcgTAAQgrAAgPgjgA0wI7QgEAFAAALQAAAKAGAKQAHALAAAJQAAADAXARQAWAAAPgVQAKgPAAgIQAAgSgOgKQgLgJgTAAQgPAAgUAFgAy1HVQgPg6AAADQAAgxAcgTQAbgSAlAMQAmAMAZAiQAeAlAAAwQAAAZgRAQQg0ACgZAHIgYAGQgfAAgVg6gAybFuQgXAKAAAoQAAAIAHAeQAHAfAIAVIAkgHQAigHAygDIAGgOQAAgcgYgfQgVgbgdgQQgUgKgPAAQgJAAgHADgAh0GnQgWgYgHgGQgQgNgRAAQgOAAgMALQgDADgSAWQgeAkgnAAQjRAAgjgeQgLgKABgTQABgYgDgJQgNABgFACIgzAUIjPgBIgWguQgRgfgUgSIgUATQgWARgRAAIhGgCQgFgFgMgPIgOgUQiRgmg+g3QgvgrgBg4QAAgcADgGQADgJAbgcIAxgGQAFgRgSgzQgSgzAAghQAAglAEgHIA+g/IAhABIAlACIADhAQAFguARghQAuhfCOAAQASAAAdACQADAJALAIQALAJAKACQAEgFANgmQAOgqAPgbQA0hbBlAAQAvAAAKAbQAHAPADADQAIAJAVAAQAKAABOgeQBkggBwgGIAVgBICNABQAoAvARAmQANgGA/gNIIvACQAaAOAGAeQABAFACAuIHQADIA0AxQAEAFAAAgQAAAcgCAGQgDASgPAPQBCAIA/BGQA4A+AAAmQAAAegLAUQgNAYgqAoIAxAyQAJAKAAANQAAA6gsBBQg/Beh2AAQgcAAgmgPQgdgLgOgKQgNAqgZAiQgxBChZAAQgyAAgSgKQgTgLghAAQgPAAhLA1QhGAygaAYQg+gJhtgwQhggvgCAAQgQAAgiAUIhHArQhnBAhEAAQgqAAgogsgAhqGSQAnArApAAQA3AABrg/QA0gfAsgfIB/AzQCBAyAPAAQAcAABehCQAvghArgiQAJAAAMAPQALAOAdAAQCjAAAmhAQANgUAAgcIgDghIACgEQACgEAEgEIArAbQAqAZAbAAQBvAAA/hSQAtg6AAg3QAEgQgIgPQgSgfg9AEIgBACQgCgBAAgMQAAgCAvgmQAvgtgBggQAAgKgOgZQgQgegXgaQhChKhIAGIgDgCIAAgNQAAgHAOgXQAPgYAAgRQAAgNgMgJQgPgMgLgiInQAAIgCAGIgHAEQgKgKACgqQABgngYgTIoyAAIgaAIQgXAHgOAGQgTgJgSghIgbguIi3gBQg4AEhxAjIhnAjQgNAAgfgdQgcgegCAAQiBAAgvBbQgQAdgGApIgIAxIAAADQgCADgMAAQgJAAgUgUQgUgVgYAAQikAAgmBiQgMAhABAvIADA/QgEACgigJIgvACQgqAigGANQgDAHAAAgQAAAaASA1QASA0AAACQAAAYgQARIgvAEQgGAQgLAPQgGAKgBAGQAAAkANAWQAKAUAdARQAXAOA1AUIB4AsQASAhAHAHIBBAAQATADASgSQATgTABAAQAeAAAXAoQARAdAEAcIDMgDQAdAAAJgNQALgMAQABQALAKAXAsQAcAoA0AAQC6AAARgjQACgSAFgHQAHgLAlAAQAgAAAmArg");
	this.shape_28.setTransform(137.6,143.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("A2kKjQAAgKgGgLQgIgLAAgKQAAgMAFgFQAygOAVARQAPALAAATQAAAJgLAQQgQAXgYAAQgagSAAgEgA0bHqQgIghAAgJQAAgqAZgLQAWgJAhARQAhAQAXAeQAZAgAAAfIgGAPQg2AEgmAHIgoAHQgIgWgHghgAh0GyQgqgvgjAAQgpAAgHAMQgFAHgCAUQgUAmjLAAQg5AAgfgrQgYgwgMgKQgTgBgKANQgLANggAAIjeAEQgFgfgTgfQgZgrggAAQgCAAgVAVQgUATgUgDIhHAAQgIgIgUgjIiDgwQg6gVgZgPQgfgSgMgWQgNgXAAgnQAAgGAIgLQALgQAGgRIA0gFQARgSAAgaQAAgCgUg4QgUg4AAgcQAAgjAEgHQAIgPAsglIA0gCQAmAKAEgBIgEhEQAAgzANgjQAphpC0AAQAaAAAWAVQAVAWALAAQAMAAADgDIAAgDQADgeAFgWQAIgsAQggQA0hiCNAAQABAAAgAgQAiAgAOAAIBxgmQB7glA+gEIDHABIAeAxQATAjAWAKQAPgHAZgIIAcgHIJoAAQAaATgCArQgBAtALALIAHgFIACgGIH8AAQALAkASANQAMAKAAAOQAAATgQAZQgPAZAAAHIAAAOIADACQBPgGBHBPQAaAcASAgQAQAcAAAKQAAAjg0AwQgzApAAABQAAANACABIABgBQBEgEASAhQAKAPgEARQAAA8gyA/QhEBXh7AAQgdAAgugaIgugdQgGAEgCAEIgBAEQgBAGADAdQABAfgOAWQgrBFiyAAQgeAAgNgQQgNgPgKAAQgvAjg0AkQhnBHgeAAQgRAAiNg2IiLg3QgvAig6AiQh0BDg9AAQgtAAgqgug");
	this.shape_29.setTransform(150.3,137.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("A29KsQgFgMgCgOIgBgNQAAgYAIgSQALgYAVAAQA0AAAWAaQAQASgBAYQAAARgRAbQgTAegUAAQgwAAgRglgA2tJmQgEAFAAAMQAAALAHALQAHALgBAKQAAADAaATQAYAAAQgXQALgRAAgIQAAgTgPgMQgMgJgUAAQgQAAgXAGgA0nH4QgQg+AAADQAAg0AfgVQAdgTApANQAoANAdAkQAgAoAAAzQAAAbgSARQg4ACgbAHIgcAIQghAAgYg/gA0JGJQgaALAAArQAAAIAIAhQAIAhAHAXIAogHQAmgIA3gDIAGgQQAAgegaggQgXgegggRQgWgLgRAAQgJAAgHADgAh/HHIggghQgRgOgTAAQgPAAgNAMIgYAbQggAmgrAAQjlAAgmgfQgMgLABgVQACgagEgJQgPABgFACIg3AWIjkgCIgXgxQgSghgWgTIgWATQgYATgTAAIhNgCIgSgWIgPgUQiggqhDg7Qg0guAAg8QAAgfACgGQAFgKAdgdIA1gGQAGgTgUg3QgTg3gBgjQAAgpAGgHIBDhDIAjABQAkABAEABIAFhFQAGgxASgjQAyhmCaAAQAVAAAfACQAEAJAMAJQAMAKALACQAEgFAOgqQAPgtARgdQA5hiBvAAQAzAAAMAdQAGAQAEAEQAJAJAWAAQANAABUggQBtgiB8gHIAVAAICbAAQAsAzASApQAPgGBFgPIJkACQAcAQAHAgIADA2IH7AEIA6A1QACAEAAAjIAAAlQgEATgQARQBHAHBFBMQA+BCAAApQAAAggMAWQgPAaguAqQAdAeAZAYQALALAAAPQAAA9gwBGQhGBliAAAQgfAAgqgQQgfgMgQgKQgOAtgcAkQg2BHhgAAQg3AAgUgLQgVgLgkAAQgRAAhSA5QhNA1gcAaQhDgJh4g1IhrgyQgSAAglAVIhNAvQhxBFhLAAQguAAgrgvgAh0GxQArAuAsAAQA9AAB0hEQA6giAvgiICMA3QCMA3ARAAQAeAABohHQAzgkAvgkQALAAAMAQQANAPAeAAQCyAAAshFQANgWgBgeQgDgdABgGIABgEQADgFAFgEIAuAeQAvAZAcAAQB7AABEhXQAyg/AAg7QAEgRgJgQQgTghhEAEIgBACQgBgBAAgNQAAgCAygpQA0gwAAgiQAAgLgQgcQgSgggagbQhHhQhOAGIgEgCIAAgNQAAgIAPgZQAQgZABgSQAAgOgNgLQgRgNgMgjIn7AAIgDAGIgHAEQgLgLACgtQABgqgagUIpnAAIgdAIQgZAIgPAGQgWgJgTgjIgegyIjHgBQg9AEh8AmIhxAlQgOAAghgfQghgggBAAQiMAAg1BiQgQAfgIAsQgEAXgEAdIAAADQgCADgNAAQgKAAgWgVQgWgWgaAAQi0AAgoBpQgOAkAAAyIAEBEQgEACgmgKIg0ACQgsAlgHAOQgFAHAAAjQABAcATA4QAVA4AAADQAAAZgRATIg0AEQgHASgLAPQgIALAAAHQAAAnANAWQANAXAeASQAZAOA7AWICCAwQAUAiAIAIIBHAAQAUADAVgTQAUgUACAAQAhAAAYAqQATAgAFAeIDfgDQAfgBALgNQALgMASAAQAMALAYAvQAfArA6AAQDKAAAUgmQACgTAFgHQAHgMApAAQAjAAAqAvg");
	this.shape_30.setTransform(150.3,138.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("A4gLSQAAgKgHgMQgIgMAAgMQAAgMAFgGQA2gOAXASQARANAAATQAAAKgNARQgRAZgagBQgcgTAAgEgA2MIMQgIgjAAgKQAAgtAbgMQAYgJAkASQAjARAaAhQAbAiAAAgIgHARQg7AEgpAHIgrAIQgJgXgIgkgAh+HRQgugzgmAAQgsABgIANQgFAHgDAVQgVAojcAAQg/AAghguQgagzgOgLQgTAAgMANQgMAOgiAAIjyAEQgFghgUghQgcgtgjgBQgBABgXAVQgWAVgWgDIhNAAQgJgJgVglIiOgzQg/gXgcgPQghgUgOgYQgOgYAAgpQAAgIAJgMQAMgRAHgSIA4gFQATgTAAgbQAAgEgWg7QgVg8AAgeQAAglAEgIQAIgQAwgnIA4gCQAqAKAEgCQgDgrgBgdQgBg2APgmQAshwDEAAQAcAAAXAXQAYAXALAAQAOAAADgDIAAgDQAEggAEgYQAJgwASghQA5hoCYgBQACAAAiAjQAlAhAPAAIB7goQCGgoBCgFIDZABQADAEAdAxQAWAmAXAKIArgPIAfgIIKcAAQAdAVgCAtQgCAwAMAMIAIgEIADgHIInAAQANAmASAOQAOAKAAAPQAAAVgRAaQgRAbAAAIIAAAOIADADQBWgHBOBVQAbAeAUAiQARAdAAAMQAAAlg4A0Qg3ArAAACQAAAOACABIABgCQBJgFAVAkQAKARgFASQAABAg2BDQhKBdiFAAQgfAAgygcIgzgfQgGAEgCAGIgCADIADAmQABAggPAYQguBKjCAAQghgBgOgQQgOgQgLgBQgzAmg4AnQhwBMghAAQgSAAiZg6IiXg7QgzAkg/AkQh+BJhDgBQgwAAgugwg");
	this.shape_31.setTransform(163,132.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("A47LbQgGgMgCgPIgBgPQAAgYAJgUQAMgaAXAAQA3AAAZAcQARATAAAaQAAASgTAdQgVAggWAAQgzAAgTgogA4qKRQgEAFgBANQABALAHAMQAIAMAAAKQgBAEAcAUQAaAAASgYQAMgSAAgJQAAgUgRgNQgNgKgWAAQgSAAgYAHgA2YIbQgRhCAAADQgBg4AjgXQAegTAtANQAsAOAfAmQAiAsAAA2QAAAdgUASQg8ACgeAIIgdAIQglAAgZhDgA15GlQgbALAAAuQAAAJAIAjQAIAkAJAXIArgHQAqgIA6gEIAHgQQAAghgbgiQgZgggkgSQgXgMgSAAQgKAAgJAEgAiKHnQgbgdgHgGQgUgQgUAAQgRAAgOAOQgDADgWAZQgjApgvAAQj5AAgogiQgOgLACgXQABgbgEgKQgQABgFADIg9AXIj2gCIgag0QgUgkgXgVIgYAVQgbAVgUAAIhUgDIgTgXQgPgSgBgEQiugshIhAQg5gxAAhAQAAghADgGQAEgLAfggIA6gGQAHgUgVg7QgWg6AAgmQAAgsAGgHQAcgbAtgtIAmABQAmABAGABIAEhJQAHg2ATglQA3htCoAAQAWAAAiACQAEAKANAKQANAKAMACQAEgFAPgtQARgwASgeQA+hqB4AAQA4AAANAgQAHARAEAEQAKAKAYAAQANAABdgjQB1glCHgHIAXAAICpAAQAuA2AVAtQAPgHBMgQIKYADQAeAQAIAjQABAFACA1IInAEIA+A4QAEAFAAAlQAAAhgBAGQgEAVgSASQBOAIBLBQQBDBIAAArQAAAjgNAXQgQAbgyAuIA6A6QAMALAAAQQAABCg0BLQhMBsiLAAQgiAAgtgSQgigMgSgLQgPAvgeAnQg6BMhpAAQg8AAgWgLQgWgMgnAAQgSAAhaA9QhTA4geAcQhJgKiCg4Qhzg2gCAAQgSAAgqAXIhTAzQh6BJhSAAQgxAAgwgygAh+HPQAuAxAwAAQBDAAB+hIQA/glAzgkICXA7QCZA6ASAAQAhAABxhMQA4gmAygmQALAAAOARQAOAQAhAAQDCAAAuhKQAPgXAAghIgEglIACgEQACgGAGgEIAzAgQAyAbAfAAQCGAABJhdQA2hDAAhAQAFgSgKgRQgVgjhJAEIgBACQgCgBAAgOQAAgCA4grQA3g0AAglQAAgLgRgeQgUgigbgeQhOhVhVAHIgEgCIAAgPQAAgIARgbQARgaAAgUQABgPgOgLQgTgOgNgmIonAAIgCAHIgIAEQgMgMACgvQABgugcgVIqdAAIgfAIIgrAPQgXgJgWgmQgcgygDgDIjagBQhCAEiGApIh6AnQgQAAgkghQgjgigBAAQiZAAg4BoQgTAigIAvQgFAYgEAgIAAADQgCADgOAAQgLAAgYgXQgYgXgcAAQjEAAgsBxQgOAlAAA3QABAdADArQgEACgqgLIg4ACQgwAogIAPQgEAIAAAlQAAAeAWA8QAVA8AAADQAAAbgTATIg3AFQgIATgMARQgIAMAAAHQgBApAOAYQAOAYAiAUQAbAPA/AXICOAzQAWAlAIAJIBNAAQAWADAWgVQAXgVACAAQAiAAAcAtQAUAiAGAgIDygDQAhgBAMgOQAMgNATAAQAOALAaA0QAhAtA/AAQDcAAAVgoQADgVAGgHQAHgNAtAAQAlAAAuAyg");
	this.shape_32.setTransform(163,133.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("A6QMPQgMgKAAgEQAAgMgIgMQgIgNAAgMQAAgNAFgGQAEgGAAgCQA2gHAZATQASANAAAVQAAAKgNATQgTAagcAAQgFAAgNgLgA3zJnQAAgUgJglQgJgmAAgKQAAgwAdgMQAagLAnAUQAmASAbAiQAeAlAAAjQAAAOgCABIgFACQhAAEgtAJIguAIgAiIHuQgxg1gpAAQgwAAgJAOQgFAIgDAWQgXArjuAAQhDAAgkgxQgcg2gPgMQgVgBgNAPQgNAPgkAAIkFAEQgGgjgWgjQgdgxgmAAQgCAAgYAXQgYAWgYgDIhTAAQgJgJgXgoIiag2QhEgZgdgQQglgVgOgZQgPgaAAgsQAAgIAJgMQANgSAIgUIA8gFQAUgVAAgdQAAgDgXhAQgXhAAAggQAAgnAEgIQAJgRA0gqIA9gCQAMAAASAGQAOAFAFgCIgEhNQgBg6AQgoQAvh3DTAAQAfAAAZAYQAaAZAMAAQAPAAADgEIAAgDQAEgiAFgaQAJgyAUgkQA9hvCkAAQACAAAlAkQAoAkAQAAICFgqQCQgrBIgFIDqABIAjA5QAXAoAZAKIAvgQIAhgJILRAAQAfAXgCAwQgCAzANANIAJgFIACgHIJTAAQAOAoAUAPQAPAMAAAQQAAAVgTAcQgSAdAAAIIAAAQIAEACQBcgHBUBbQAeAfAVAlQASAfAAAMQAAAog8A2Qg8AvAAACQAAAOACACIACgCQBPgFAWAmQALASgFATQAABEg6BHQhQBkiQAAQgiAAg2geIg2ghQgHAEgCAGIgCAEQAAAHADAhQABAjgQAZQgyBOjRAAQgkAAgPgRQgPgSgMAAQg3Aog8ApQh5BRgkAAQgTAAilg+Iikg+Qg3AmhEAnQiHBNhIAAQg1AAgxg1g");
	this.shape_33.setTransform(175.7,127.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("A65MKQgHgNgCgQIgBgPQAAgbAKgUQANgcAYAAQA8AAAbAeQASAUAAAbQAAAUgVAeQgWAigYAAQg4AAgTgqgA6jKzQABACgFAGQgFAGAAANQAAAMAIANQAJAMgBAMQABAEALAKQANALAFAAQAcAAATgaQANgTAAgKQAAgVgSgNQgSgOgiAAQgMAAgPACgA4KI9QgShGgBAEQABg8AkgYQAigVAwAOQAvAPAiApQAlAuAAA6QAAAegWAUQhBACggAJIggAIQgnAAgchIgA3oHAQgdAMAAAwQAAAKAJAmQAJAlAAAUIAKAGIAtgIQAtgJBAgEIAFgCQACgBAAgOQAAgjgdglQgcgigmgSQgZgNgUAAQgKAAgKAEgAiVIGIglglQgVgRgVAAQgSAAgQAOIgbAeQgmAsgzAAQkMAAgsgkQgPgMACgYQACgdgFgLQgRACgGACIhBAZIkKgCIgcg4QgVgmgagWIgZAXQgdAVgVAAIhbgCIgVgZQgPgTgDgFQi6gvhPhDQg+g0ABhFQAAgjACgHQAGgLAhgiIA/gHIAFgEQACgCAAgOIgXg/QgYg/AAgoQAAguAHgIIBPhNIAoABQAqABAGACIAFhPQAHg4AUgoQA8h0C1AAQAYAAAkACQAFAKAOALQAOALANACQAEgGARgvQASgzATghQBDhwCCAAQA8AAAOAiQAIASAEAEQALALAZAAQAPAABjglQCAgnCQgIIAaAAIC2AAQAzA6AVAvQARgHBRgRILNADQAiARAHAlQABAFADA5IJSAEIBEA8QAEAFAAAnQgBAjAAAHQgFAXgUASQBUAJBSBWQBIBMAAAuQAAAlgPAZQgQAdg3AwQAiAiAeAcQANAMAAARQgBBGg5BQQhRBziWAAQgkAAgxgTQglgNgTgMQgQAzghApQg+BRhxAAQhBAAgYgMQgYgNgqAAQgUAAhgBBQhaA8ghAeQhPgLiLg7Qh8g6gCAAQgVAAgsAZIhaA1QiFBOhYAAQg1AAgzg1gAiIHsQAyA1A0AAQBIAACHhNQBEgnA3gmICkA+QClA+AUAAQAjAAB5hRQA8gpA3goQANAAAPASQAOARAlAAQDQAAAyhOQAQgZgBgjQgDghABgHIABgEQADgGAGgEIA2AhQA2AeAjAAQCPAABQhkQA6hHAAhEQAFgTgLgSQgWgmhPAFIgCACQgBgCAAgOQAAgCA7gvQA9g2gBgoQAAgMgSgfQgVglgegfQhUhbhcAHIgEgCIAAgQQAAgIASgdQATgcAAgVQAAgQgPgMQgUgPgOgoIpSAAIgDAHIgIAFQgOgNADgzQABgwgfgXIrRAAIghAJIgvAQQgZgKgXgoIgjg5IjqgBQhHAFiRArIiFAqQgPAAgpgkQglgkgBAAQilAAg9BvQgTAkgKAyQgFAagEAiIAAADQgDAEgPAAQgMAAgagZQgZgYgfAAQjTAAgvB3QgQAoABA6IAEBNQgEACgPgFQgSgGgMAAIg8ACQg1AqgJARQgEAIAAAnQAAAgAXBAQAYBAAAADQgBAdgTAVIg9AFQgIAUgNASQgJAMAAAIQAAAsAPAaQAPAZAkAVQAeAQBEAZICZA2QAXAoAJAJIBUAAQAXADAYgWQAYgXACAAQAmAAAdAxQAWAjAGAjIEFgEQAkAAAOgPQAMgPAWABQAOAMAcA2QAkAxBEAAQDuAAAWgrQADgWAGgIQAIgOAwAAQApAAAxA1g");
	this.shape_34.setTransform(175.7,128.1);

	this.instance_5 = new lib.HowmanyBubble1still();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-34.5,145.3,0.859,0.859,4.6,0,0,-3,-0.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},11).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_4}]},27).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.shape_16},{t:this.shape_15}]},7).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.instance_5}]},36).to({state:[{t:this.instance_5}]},8).wait(159));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({regX:71.9,regY:99.2,scaleX:1.36,scaleY:1.36,x:134.3,y:263.7},9).wait(27).to({alpha:0},8).to({_off:true},7).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107).to({_off:false},0).to({scaleX:1.35,scaleY:1.35,x:-24.3,y:100},8).wait(159));

	// Layer 4
	this.instance_6 = new lib.howmanybubble2still();
	this.instance_6.parent = this;
	this.instance_6.setTransform(105,166.5,0.708,0.708,0,0,0,-0.3,-5.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(159).to({_off:false},0).to({regX:-0.4,scaleX:1.36,scaleY:1.36,x:197.3,y:101.8},11).wait(104));

	// Layer 3
	this.instance_7 = new lib.howmanybubblethreestill();
	this.instance_7.parent = this;
	this.instance_7.setTransform(130.4,226.3,0.888,0.703,0,0,0,-8.2,-5.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(212).to({_off:false},0).to({scaleX:1.48,scaleY:1.17,x:257.1,y:212.4},9).wait(53));

	// Layer 10
	this.instance_8 = new lib.daydreamingguystill();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-21.3,258,0.663,0.663);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(54).to({_off:false},0).to({alpha:1},9).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.3,-5.5,238.7,82.6);


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
(lib.adjective_Scene9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene10:0,scene10_repeat:270});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_281 = function() {
		this.gotoAndPlay("scene10_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(281).call(this.frame_281).wait(1));

	// Main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUBLQgDgDAAgEQAAgEAJgRIAMgWQgSgXgFgMQgEgLgKgPQgPgVgCgFIgBgFQAAgEADgDQADgDAEAAQAEAAAEAFIAHAMIAOAVQAHAMAFAKQADAIAJANIAXg1IAKgVQADgHAGAAQAEAAADADQADADAAAEQAAAFgFAJIgGALIgRAqIgSAoIgMAVIgFALQgDAGgFAAQgEAAgDgDg");
	this.shape.setTransform(362.5,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhBBMQgCgCAAgFIAAgMIABgNIAAgSIABgSIgBgTIAAgTIgBgSIgBgTQAAgEADgEQAEgEAFABQAFAAAIALQAYAlATAYQAXAbAcAaIAAgNIgBgMQAAgpgDgaIgDgKIgCgLQAAgLAKAAQARAAAABAIAAAfIAAAgIgBAQQgCAKgJAAQgFAAgIgHQgogmgyhGIgBAXIAAAVIAAAYIABAYQAAAagKAAQgFAAgEgDg");
	this.shape_1.setTransform(348.6,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiAzIgGgfIgaAFIgZAFIgRAmQgEAFgFAAQgEAAgDgDQgCgDAAgEQAAgFAOgfQgCgCAAgDQAAgIAKgDQALgTARgcQAWglAGAAQAIAAADALIAGAhIAOBDIAGAPIACALQAAAEgCADQgDADgFAAQgJAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_2.setTransform(333,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA8BKQgDgFgCgLIgEgRQgEgQgJgzIgTA5IgGASIgHATQgEAHgGAAQgGAAgDgGQgDgEgBgHIgDgKQgKgjgHgmIgEASIgMAyQgBAJgFARQgDAJgGgBQgFABgDgEQgCgDAAgFQAAgQAHgXIAKgnIAGgeQAEgWAFgGQAEgHAGAAQAGABAEAHQADAJAFAbQAFAfAKAlQAOglAKgoIAEgPQABgIADgFQAEgIAGAAQAJAAAFARIADAWQAGArAJAgIAEAQIAEARQAAAEgDADQgDADgFAAQgFAAgDgFg");
	this.shape_3.setTransform(317.1,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWBNQgEgDAAgFQgFgLAAgIIgIgqIgGgpQgIAggKAVQgMAagEAPIABAEQABAFgEADQgEACgEAAQgNAAAAgMIgEgMIgKgwQgHgXgOgtIgBgEQgBgJALAAQAGAAAEAHIAHAUQAGASAFAYIAKArQAKgZAKghIAKgeQAJgVAHAAQAHAAADAHQADAIAEAgIAHAlIAIAmQANgfAUg1IAFgSQACgLAFgHQADgFAGAAQAKAAAAAKIgEAJIgEALIgFARIgdBGIgNAiQgEAGgHAAQgEAAgEgCg");
	this.shape_4.setTransform(292.2,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgxA8QgUgRAAgcQAAggAUgdQAWgeAhAAQAgAAAQAPQAQAPAAAgQAAAhgSAbQgWAfggAAQgbAAgUgRgAgiggQgPAWAAAZQAAATAOAMQANALAUAAQAXAAAPgYQAOgWAAgZQAAgYgKgJQgKgJgYAAQgXAAgRAYg");
	this.shape_5.setTransform(273.5,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag9BNQgCgCAAgFIABgeIACggIAAgOIgBgRIABgXIABgXQAAgEADgDQADgDAEAAQAEAAACADQADADAAAEIgBAXIgBAYIAAAYIAqgHQAZgGARAAIABgpQAAgIACgHQAEgLAFAAQAEAAADADQADACAAAFIgBADQgCAFABAIIAAAIIAAAJIgBAdIgCAcIABAWIABAXQAAADgDAEQgCACgEAAQgFAAgCgCQgDgEAAgDIgBgXIgBgWIABgPQgSABgXAFIgpAIIgCAZIgBAYQgBAFgCACQgDADgEAAQgEAAgDgDg");
	this.shape_6.setTransform(257.9,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaA2QgPgFgBgKQAAgEAEgDQADgDADAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAKgDgBgGQAAgNgSgFIgJgCQgNgDgGgEQgIgEAAgLQABgVASgJIASgGQANgDAGgDQAEgCAEAAQAFAAACADQADADAAAEIACAIIABAJQAAAEgDADQgDADgEAAQgFAAgCgEQgCgDgBgIIgXAHQgOAGgBAKIAHABQAVAEALAHQAPAKAAATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_7.setTransform(238.9,20.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglAtIAAhEIABgJIAAgKQgBgKAJAAQAKAAAAAQQASgSAWAAQAJAAADAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgJAHQgIAHgGAMIABA1QgBAKgJAAQgJAAAAgKg");
	this.shape_8.setTransform(229.8,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_9.setTransform(219.4,21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIACAPIAFArQALgdAMgoQADgLAHAAQAIAAACANIAHAjIAHAlIAHgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_10.setTransform(207,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbA2QgPgFAAgKQAAgEAEgDQACgDAEAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAJgDAAgGQAAgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQABgVASgJIASgGQAOgDAFgDQAEgCAEAAQAFAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgFAAgCgEQgCgDgBgIIgXAHQgPAGAAAKIAGABQAWAEALAHQAPAKAAATQAAAQgNAIQgLAHgRAAQgNAAgMgFg");
	this.shape_11.setTransform(194.9,20.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_12.setTransform(185.4,21.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAIAAALAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_13.setTransform(174.8,21.3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(282));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoiAb+MAAAg38MBRFAAAMAAAA38g");
	mask.setTransform(275,212.3);

	// Anim
	this.instance = new lib.Lesson7HowMany();
	this.instance.parent = this;
	this.instance.setTransform(282.1,71.9,1,1,0,0,0,155.1,30.9);

	this.instance_1 = new lib.bk3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(261.5,211.9,1.007,1,0,0,0,282.3,176.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(282));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '6154E0396DA67F4DABB5BB5D6D230BA9',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_1girl.mp3", id:"_1girl"},
		{src:"sounds/SE1stThought.mp3", id:"SE1stThought"},
		{src:"sounds/_2girls.mp3", id:"_2girls"},
		{src:"sounds/SE2ndThought.mp3", id:"SE2ndThought"},
		{src:"sounds/SE3rdThought.mp3", id:"SE3rdThought"},
		{src:"sounds/_6girls.mp3", id:"_6girls"},
		{src:"sounds/arealways.mp3", id:"arealways"},
		{src:"sounds/arearticles.mp3", id:"arearticles"},
		{src:"sounds/SEAdjetiveAnswers.mp3", id:"SEAdjetiveAnswers"},
		{src:"sounds/modifies.mp3", id:"modifies"},
		{src:"sounds/nounmarkers.mp3", id:"nounmarkers"},
		{src:"sounds/bell_chord_1.mp3", id:"bell_chord_1"},
		{src:"sounds/bell_chord_2.mp3", id:"bell_chord_2"},
		{src:"sounds/bell_chord_3.mp3", id:"bell_chord_3"},
		{src:"sounds/SEBlackHair.mp3", id:"SEBlackHair"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SEBrownHair.mp3", id:"SEBrownHair"},
		{src:"sounds/bushrattle.mp3", id:"bushrattle"},
		{src:"sounds/SERitaChopsMick.mp3", id:"SERitaChopsMick"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/EvanAdjanswers.mp3", id:"EvanAdjanswers"},
		{src:"sounds/Evanhowmany.mp3", id:"Evanhowmany"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/HMMM.mp3", id:"HMMM"},
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
an.compositions['6154E0396DA67F4DABB5BB5D6D230BA9'] = {
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