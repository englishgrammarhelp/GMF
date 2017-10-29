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


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AhZCFQgFgFAAgIIgBgpIgCgpQAAgRAEgfQADggAAgQIgBgaIgCgbQAAgKAGgHQAGgKAMABIAqAEQAZADAPAIQBHAmAAA3QAAAagYAUQgUAQgdAJQA3AdAbAhQAFAGAAAGQAAAHgGAGQgFAFgHAAQgHAAgGgFQg6g6hGgUIABAjIABAiQAAAIgFAFQgFAFgHAAQgIAAgFgFgAg4hOIACAVQAAAOgDAVIgDAiIAHAAIAIABQAtAAAVgMQAKgFAJgJQAJgJAAgHQAAgZgcgVQgYgTgcgDIgagCg");
	this.shape.setTransform(14.4,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AhYBtQglggAAgxQAAg9AkgxQAog3A8AAQA5AAAdAZQAdAcAAA6QAAA8ghAxQgmA3g7AAQgyAAgigdgAg9g7QgcAoAAAvQAAAiAZAUQAYAVAkgBQApAAAcgqQAZgnAAgvQAAgqgTgRQgSgQgqAAQgrAAgdAqg");
	this.shape_1.setTransform(-11.6,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-27.1,55.5,54.2);


(lib.orpointstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEiBpIgBAAIAAgDQhCAGgsgOQhVgbhOgiQgngRgmgSIgFABQgNAFgMAJQgQAMgLASQgTAJgUAGIgCABIAAgBQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgMgIQgugjgGgzIAAgDQgXAKgSgBQgbgBgOgbIALgIQAOgJAQgFQATgHAWgDIAFgBIAAgFIAfAAQAEAFAFACQAEACAGgBQAHAAAJgFIAFgDIABAAIAAgBIABgCIAQABIAMgCIgCAEQAhAAAxAIIAAADIBrATIC9AiIAAATIAAAEIgBAAQhcgchigWIgfgHIhGgPIgEAAIgWgEIgFAAIg2ABIgDAAIgvgBIAAAAIgGAAQg2gCgkAQIgLAFQgKAGgJAIQANAJARAEQARADAXgEIAUgEQAKgDgJAJQgFAGgKACQARAaAVgPIgCABQgHAGgBAJQgIAgAjgRIgDAHQgEAIgJACQAFALAGAGQAGAGAGAAQAFAAAFgDQAIgFAIgMIgFgDQgLgNAxgDIAFgBQALgSAcgCIAFgBQAhAWAkASQBxA0CdADIASgBIABAOIgCABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIAAACIgHAAQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(-29.3,-7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AEdBWQiegDhwg0QglgRgggWIgGAAQgbADgLASIgGAAQgwADAKANIAGADQgJANgHAFQgFADgFAAQgHgBgGgGQgFgGgGgLQAKgBADgJIAEgGQgjARAHghQACgJAHgFIABgBQgUAPgRgbQAJgCAGgFQAJgJgLACIgUAFQgWADgSgDQgRgDgNgKQAJgIALgFIAKgGQAkgQA3ACIAFAAIAAAAIAvABIADAAIA2gBIAGAAIAVAEIAEABIBHAPIAfAHQBhAWBdAbIAAAAQACAgAfAIQANAQACASIACAUIgQABIgBAAg");
	this.shape_1.setTransform(-28.8,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.orpointstill, new cjs.Rectangle(-60.1,-17.7,61.7,21), null);


(lib.ormehandstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AijCgQgIgBgCgIQgFgUASgNIACgDQAEgZACgbIACgEIAHgFQAHAAAEACIABAAIAAAAQA4gLBBgYIAJgDIAUgLQAqgXAUgtIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIAAABIgBAAIAAgLQAAgKgCgJQgBgGgEgDQABgNgDgMQgCgKADgBQACABAFAGIAAABQAJAwAdgBQAIABAKgEIAEgBIABAAQACgYgKgTQgKgTgVgOIAAgBIABAAQAeACAQAaIAAAAQAJAPAFAXIAAAFQgOARADAFQADAGATgGIACAFQABADADADQgEAmgcAOIgBACIgFACQgpAdgtAbIgCABIgCABQhTAzhdApIgCgCIgEAEIgBABQgJAHgKABIgCAAIgGgBg");
	this.shape.setTransform(15.1,-9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CCFF").s().p("AgBACIABgDIACgBIAAAAIABABIgDABIgCADIABgBg");
	this.shape_1.setTransform(28.5,-8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AimCpIgCgDIgBADIAAgDIAAgBIABgBIADgBQAKgBAJgGIABgCIAGgCQBdgpBTgzIACgBIACgBQAsgbAqgdIAFgBIAAgBIABgCQAcgOAEgmQgDgDgBgCIgCgGQgTAGgDgFQgDgGAOgQIAAgGQgFgXgJgPIAAAAQgQgagegBIgBAAIAAAAIgCgLIADAAQAgADAZAfIAAABIAFAHQAAAAABAAQAAABAAAAQABAAABAAQAAAAABAAQAgBGgiAsIgBABIgCAAIgBAAIAAABIgBADIgCAKIgCgEIgIAGIgHAKIgBABIgBgBIAAAAIgDABIgBAEIAAABIgDABIgFAGIgDACIgPAJIgGAGIi+BhIgCgCIAAAAIAAABIAAABIgBAAIAAABIgBABIgHACIgVAJIgGADIgCAAQgEAAgEACIgEADQgGAEgHABgAiZA4IAFgFIAAAEQCFgfBGhFIAEgBQAEgEAAgGQgBgGgDgFIAAgDIgCgIIgFgPIgDgGIgLgfQAygMAPA6QAAADAGgBQAOgBgDgOQgbgegHgdQAVANAKATQAKATgCAYIgFABQgJAEgIAAQgdAAgJgvIAAgCQgFgGgCAAQgEgCACAMQADAMgBAOQAEACABAHQACAIAAAKIAAANIABgBIABgBIAAgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQgUAtgqAYIgUAKIgJADQhBAYg3ALIgBAAQgEgCgHAAg");
	this.shape_2.setTransform(16.1,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ormehandstill, new cjs.Rectangle(-2.4,-26.8,35.5,33.9), null);


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


(lib.orpoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Layer 1
	this.instance = new lib.orpointstill();
	this.instance.parent = this;
	this.instance.setTransform(30.9,8.4,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:1,scaleY:1,rotation:-1.9,x:29.6,y:7.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.2,-54.3,36.3,65);


(lib.ormehand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// Layer 1
	this.instance = new lib.ormehandstill();
	this.instance.parent = this;
	this.instance.setTransform(-15.9,11.9,0.999,0.999,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({scaleX:1,scaleY:1,rotation:-8.8,y:10.8},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-2.4,46.3,46.9);


(lib.ORSYM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Symbol37("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275,200);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Symbol37("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,200,1.2,1);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Symbol37("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,200,1.4,1);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Symbol37("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,200,1.6,1);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Symbol37("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,200,1.8,1);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Symbol37("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,200,2,1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{scaleX:2,alpha:0}},{t:this.instance_4,p:{scaleX:1.8,alpha:0}},{t:this.instance_3,p:{scaleX:1.6,alpha:0}},{t:this.instance_2,p:{scaleX:1.4,alpha:0}},{t:this.instance_1,p:{scaleX:1.2,alpha:0}},{t:this.instance,p:{alpha:0}}]}).to({state:[{t:this.instance_5,p:{scaleX:1.947,alpha:0.02}},{t:this.instance_4,p:{scaleX:1.758,alpha:0.02}},{t:this.instance_3,p:{scaleX:1.568,alpha:0.02}},{t:this.instance_2,p:{scaleX:1.379,alpha:0.02}},{t:this.instance_1,p:{scaleX:1.189,alpha:0.02}},{t:this.instance,p:{alpha:0.02}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.895,alpha:0.039}},{t:this.instance_4,p:{scaleX:1.716,alpha:0.039}},{t:this.instance_3,p:{scaleX:1.537,alpha:0.039}},{t:this.instance_2,p:{scaleX:1.358,alpha:0.039}},{t:this.instance_1,p:{scaleX:1.179,alpha:0.039}},{t:this.instance,p:{alpha:0.039}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.842,alpha:0.051}},{t:this.instance_4,p:{scaleX:1.674,alpha:0.051}},{t:this.instance_3,p:{scaleX:1.505,alpha:0.051}},{t:this.instance_2,p:{scaleX:1.337,alpha:0.051}},{t:this.instance_1,p:{scaleX:1.168,alpha:0.051}},{t:this.instance,p:{alpha:0.051}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.789,alpha:0.07}},{t:this.instance_4,p:{scaleX:1.632,alpha:0.07}},{t:this.instance_3,p:{scaleX:1.474,alpha:0.07}},{t:this.instance_2,p:{scaleX:1.316,alpha:0.07}},{t:this.instance_1,p:{scaleX:1.158,alpha:0.07}},{t:this.instance,p:{alpha:0.07}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.737,alpha:0.078}},{t:this.instance_4,p:{scaleX:1.589,alpha:0.078}},{t:this.instance_3,p:{scaleX:1.442,alpha:0.078}},{t:this.instance_2,p:{scaleX:1.295,alpha:0.078}},{t:this.instance_1,p:{scaleX:1.147,alpha:0.078}},{t:this.instance,p:{alpha:0.078}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.684,alpha:0.102}},{t:this.instance_4,p:{scaleX:1.547,alpha:0.102}},{t:this.instance_3,p:{scaleX:1.411,alpha:0.102}},{t:this.instance_2,p:{scaleX:1.274,alpha:0.102}},{t:this.instance_1,p:{scaleX:1.137,alpha:0.102}},{t:this.instance,p:{alpha:0.102}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.632,alpha:0.121}},{t:this.instance_4,p:{scaleX:1.505,alpha:0.121}},{t:this.instance_3,p:{scaleX:1.379,alpha:0.121}},{t:this.instance_2,p:{scaleX:1.253,alpha:0.121}},{t:this.instance_1,p:{scaleX:1.126,alpha:0.121}},{t:this.instance,p:{alpha:0.121}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.579,alpha:0.129}},{t:this.instance_4,p:{scaleX:1.463,alpha:0.129}},{t:this.instance_3,p:{scaleX:1.347,alpha:0.129}},{t:this.instance_2,p:{scaleX:1.232,alpha:0.129}},{t:this.instance_1,p:{scaleX:1.116,alpha:0.129}},{t:this.instance,p:{alpha:0.129}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.526,alpha:0.148}},{t:this.instance_4,p:{scaleX:1.421,alpha:0.148}},{t:this.instance_3,p:{scaleX:1.316,alpha:0.148}},{t:this.instance_2,p:{scaleX:1.211,alpha:0.148}},{t:this.instance_1,p:{scaleX:1.105,alpha:0.148}},{t:this.instance,p:{alpha:0.148}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.474,alpha:0.172}},{t:this.instance_4,p:{scaleX:1.379,alpha:0.172}},{t:this.instance_3,p:{scaleX:1.284,alpha:0.172}},{t:this.instance_2,p:{scaleX:1.189,alpha:0.172}},{t:this.instance_1,p:{scaleX:1.095,alpha:0.172}},{t:this.instance,p:{alpha:0.172}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.421,alpha:0.18}},{t:this.instance_4,p:{scaleX:1.337,alpha:0.18}},{t:this.instance_3,p:{scaleX:1.253,alpha:0.18}},{t:this.instance_2,p:{scaleX:1.168,alpha:0.18}},{t:this.instance_1,p:{scaleX:1.084,alpha:0.18}},{t:this.instance,p:{alpha:0.18}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.368,alpha:0.199}},{t:this.instance_4,p:{scaleX:1.295,alpha:0.199}},{t:this.instance_3,p:{scaleX:1.221,alpha:0.199}},{t:this.instance_2,p:{scaleX:1.147,alpha:0.199}},{t:this.instance_1,p:{scaleX:1.074,alpha:0.199}},{t:this.instance,p:{alpha:0.199}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.316,alpha:0.219}},{t:this.instance_4,p:{scaleX:1.253,alpha:0.219}},{t:this.instance_3,p:{scaleX:1.189,alpha:0.219}},{t:this.instance_2,p:{scaleX:1.126,alpha:0.219}},{t:this.instance_1,p:{scaleX:1.063,alpha:0.219}},{t:this.instance,p:{alpha:0.219}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.263,alpha:0.23}},{t:this.instance_4,p:{scaleX:1.211,alpha:0.23}},{t:this.instance_3,p:{scaleX:1.158,alpha:0.23}},{t:this.instance_2,p:{scaleX:1.105,alpha:0.23}},{t:this.instance_1,p:{scaleX:1.053,alpha:0.23}},{t:this.instance,p:{alpha:0.23}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.211,alpha:0.25}},{t:this.instance_4,p:{scaleX:1.168,alpha:0.25}},{t:this.instance_3,p:{scaleX:1.126,alpha:0.25}},{t:this.instance_2,p:{scaleX:1.084,alpha:0.25}},{t:this.instance_1,p:{scaleX:1.042,alpha:0.25}},{t:this.instance,p:{alpha:0.25}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.158,alpha:0.27}},{t:this.instance_4,p:{scaleX:1.126,alpha:0.27}},{t:this.instance_3,p:{scaleX:1.095,alpha:0.27}},{t:this.instance_2,p:{scaleX:1.063,alpha:0.27}},{t:this.instance_1,p:{scaleX:1.032,alpha:0.27}},{t:this.instance,p:{alpha:0.27}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.105,alpha:0.289}},{t:this.instance_4,p:{scaleX:1.084,alpha:0.289}},{t:this.instance_3,p:{scaleX:1.063,alpha:0.289}},{t:this.instance_2,p:{scaleX:1.042,alpha:0.289}},{t:this.instance_1,p:{scaleX:1.021,alpha:0.289}},{t:this.instance,p:{alpha:0.289}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.053,alpha:0.301}},{t:this.instance_4,p:{scaleX:1.042,alpha:0.301}},{t:this.instance_3,p:{scaleX:1.032,alpha:0.301}},{t:this.instance_2,p:{scaleX:1.021,alpha:0.301}},{t:this.instance_1,p:{scaleX:1.011,alpha:0.301}},{t:this.instance,p:{alpha:0.301}}]},1).to({state:[{t:this.instance,p:{alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(218.6,172.9,111,54.2);


(lib.OR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		/* _root.dougpoint.start();*/
	}
	this.frame_38 = function() {
		/* _root.sampoint.start();stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(12).call(this.frame_38).wait(1));

	// Layer 1
	this.instance = new lib.ormehand();
	this.instance.parent = this;
	this.instance.setTransform(5.3,31.5);

	this.instance_1 = new lib.orpoint();
	this.instance_1.parent = this;
	this.instance_1.setTransform(109.3,18.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AlGYhI8zAAIAAzaIAAgCIAA9VIAAgQEAh6AYhMgm6AAA");
	this.shape.setTransform(40.6,41.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("Egh5gYgMBDzAAAIAAAQIAAdRIAATg");
	this.shape_1.setTransform(40.6,41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgOCrIABgFIAEgNQgEgBgFgDIgDgCQgKAJgQgBIgGgCIgIgDQgYgMAEgQQAThXAOhZIAAABQgdBPgSBdIgBADIgFAAQgtgCgmgJIABgFIANgfQgFACgFgDQgNARgSAEQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgJgHgCgOQAdgnATgwIABgEIAAAAQAkhKAihLIABgFQAjAKAjAFQBcAPBhgUIACAAQAhgHAUAFQAIACAGADIAEAFIAAAEQgBAOAEAMIAAAIQgLCvhJBxIAAADIiegDg");
	this.shape_2.setTransform(159.7,57.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("ABRPwIgIgZQhTkKglk8IgLhhIAAgGIgBgKIgBgLIgEgnIgMhyIAAgBIgDgiIgCgRIgIhjIAAAAIgIh8QACgIgCgKIgDgdIgFgsIgBgRIgBgiQABgLgCgLIAAgpQAAglAFgkIADglIABgOQADgSABgTIAAgCIgBgHIAAgKIgBgeQAAgEACgEIAAgBIAAgNIAAguIgBghIABgxIAAghIAAgbIAAgSIABgpIABgWIAAglIACgeQAAgHgCgFIAAgBIADgSIAAgBQAGgqAIgoIgEBSIAAAAIgBAaIgBABIgBABQAAASgCASIgBAFQgDAPAAAPIABA8IAAADIAAAtIAAALIAAA7IABAtIAAAPIABAZIAAAGIgCAOIAAAAQACACAAAEIgBAPIABAdIABAFIAGAAIAAAfIAABAIgCAGIACAAIAAAEIAAANIAAADIAAACIgBARIgBABIAAABIAAAEIAAAoIgEBDIgBAmIgBAZIABAvIACABIAIB/IAIBjIAFAzIAMByIAFAnQAIA+AJA9IAAAAIACAQQArD3AzDwQAJArALAjQAKAiAMAaQgWgNgGgSg");
	this.shape_3.setTransform(102.3,52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgKSwQgOgNgGgYQhJkZgxkzIgBgFQgLhQgJhSQgJhSgHhTQgKhvgHhyIAAAAIABgQQgCgkABgmIAAgjIAAgcQACgkAAgkIAAgOIACgZIABgsIABggIAAgZIgBgRIgDgNIgDAAIAAgGIgCghIgBguIgCgsIAAgqIAAgdIAAgfIAAgOIAAgtIABgeIACgRIADgdQABgIgDgGIAAAAIADgbQAQiOAgiCIABgEIACgFQANg0AbgsQABAAAAAAQABAAABAAQAAAAAAgBQABAAAAAAQAugwBcAAIAAADQAaAIAXALQAbAhAPApQApBmAICDIABALIAAABIAAAMIgBABQgCAIAAAJQAAAJgBAJIAAAEIgDAYIgBAFQgBAFACADIgDATIgCAHIAAACIgCADQgCADABADQgJAAgIgBQgFgGAAABQgEAigzgIQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAAAABQgCAEgCABIgaAKIgsAQQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgTAMAygDIAIAAQgUAYglAPQAIAXAigZQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAPAEQAJAJgoAaQAOALAYgUIAHgHQAIgHACALQAEgOALgJQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAhAAgZApIgGAIQgMARAKAEIAAAAIgBABQgBAIgFAHIgGACIAAAAIgDgGIgBgDQgEAWgMAMIgHAFQgRALANAOQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABIAJAIQAaAXAhAQQAUALAYAHQAYAIAbAFIAFAAQANAAgDAPIgEAMQgUAQADAhQADAZAAAWQABApgHAjIAAALIAAAGIABA6IABAYIAGBKIABAcQABAVgCAUIABACIABABIABAAQADB8AAB+IAAAcIgBBjIgEDUIgHDjQgGC7g7B9IgBAKQgbAeglAUIgGAAIgIAAQgiAAgXgLgADQgkIABgBIAAAAIAAAJIgBgIgADOibIABAGIgBAAIAAgGgAjUj2IACgFIAAAFIgBAAIgBAAgACwtSIABgDIAAAFIgBALIAAgNg");
	this.shape_4.setTransform(115.4,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("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gEACQgCAAABgGgA7wmQIAAgCIALAEIAAACQgEADgDAAQgEAAAAgHgAcDmTIAAgDIAFAFIAAABIgEADQgCAAABgGgAU8mTIAAgDIAFAFIAAABIgEADQgCAAABgGgA/2mTIABgDIAFAFIAAABQgBABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgCAAAAgGgAigmaIABgCIAFAEIAAACIgEACQgCAAAAgGgAFdmkIAAgDIAFAFIAAABIgEADQgCAAABgGgAr2msQgDgFADgEIABgDIAEACIACACIAAAFIgCADIgFAAgA/inGIABgDIAFAFIAAABQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgCAAAAgGgAfmnPIgCgCQAAgGAEgEIACgCIAEACIACACQAAADgDAEIgBADIgDAAIgDAAgAATnXIABgCIAFAEIAAABQgBABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgCAAAAgGgA+GnXIABgCIAFAEIAAABQgBABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgCAAAAgGgA8knaIABgDIAFAEIAAACIgEADQgCAAAAgGgEghVgHeIAAgCIAFAEIABACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgCAAAAgGgAhqncQgDgEADgFIABgCIAEABIACACIgBAFIgBADIgFAAgAELnkIABgDIAFAEIAAACIgEACQgCAAAAgFgA7gnvIABgCIAFAEIAAACQAAAAgBABQgBAAAAAAQAAABgBAAQAAAAgBAAQgCAAAAgGgEAhQgIRIAAgCIAEABQADARgBASIAAADIgHACQgDgTAEgUgA6Rn8IAAgDIAFAEIAAACIgEADQgCAAABgGgArNoAIABgCIAFAEIAAACIgEACQgCAAAAgGgAagoKIABgCIAFAEIAAACIgEACQgCAAAAgGgA/OoRIAAgCIAFAEIABACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgCAAAAgGgEAgxgIeIAAgDIAFAEIABACQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCAAAAgGgEghCgIeIABgDIAFAEIAAACQAAABgBAAQgBABAAAAQAAAAgBAAQAAABgBAAQgCAAAAgGgAtHoiIABgCIAFAEIAAACIgEACQgCAAAAgGgAXDodQgDgEADgEIABgDIAEACIACACIgBAFIgBACIgFAAgABUooIAAgDIAFAEIAAACQAAAAgBABQgBAAAAABQgBAAAAAAQAAAAgBAAQgCAAABgFgAsDooIABgDIAFAEIAAACQgBAAgBABQAAAAgBABQAAAAAAAAQgBAAAAAAQgCAAAAgFgAeLo9IAAgCIAFAEIAAACIgEACQgCAAABgGgAC9pEIABgCIAFAEIAAACIgEACQgCAAAAgGgAYOpHIABgDIAFAFIAAABIgEADQgCAAAAgGgAG4pFQgDgMADgNIABgDIAEABQAEAMgDANIgBACIgBAAIgEAAgAixpYIABgDIAFAFIAAABIgEADQgCAAAAgGgArKprQgDgEADgEIABgDIAEACIACACIAAAFIgBACIgGAAgABGqtIABgCIAFAEIAAACIgEACQgCAAAAgGg");
	this.shape_5.setTransform(40.3,129.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgCAOIgCgBQglgDgzAGIAAgDQAwgNgEgNIAAgGQgogWBOgBQAPAAAQgCIAXgEQACgBAEADQgfAaBEgEIAGAAQgJAJgiAPQgUAIgJAWIgFALQgEAIgDAAQgHAAgEgjg");
	this.shape_6.setTransform(-135.5,149.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#99CCFF").s().p("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QglgDgnAhIgFAAQgQACAVgkQgCgbgRAZQgJAPgOAMQgiAbgRgHIAAgJQgVABgMAuQgLgGgMgEIgFgBQAVAlgkAcIAAAFIAAAFQgQAKgHASQgFAQgHAQIgBABIACAOIACACQAIABADgHIAEgGIAFgJIALgCQAKAHADAQIAFAlQACARAJAKQAJgEACgLQABgCADgDIARBEQAEAOABAOQgYAMgVAMIgcARQgyAegqAoQgjAggfAnQgUAZgTAcQgNAVgMAUQgZAugTAxQgDAHAAAJQgDAUAAAVQgCAZAEAUQADAPAFAOIAKAaIALAZQAHALAHAKIAPAWIARATIATASIAVAOIABADIAAAWQhpgLhnAUQgPADgOgCQhXgJhYgHQg5ALg9ACIgbAbIgFADIgPAGgAPCMzQAAh9gEiHIAAgBQADgQgCgPIgCgIIgBgDIAAgJIABAAQgGgDAAgHIAAgkQgHgKADgLQABgGAFgDIACgBQAWABACAWQABALAAAMIACADQACAFAAAFIALgIIAGgDIAUgMIADAFIAAALQALAEALAJQALAKAKARQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQgHATALAZIABAFIgIAXQgcBNgiBGIgBAGIgBAEQgTAmgXAiIAAgFgAkaK6QAZgsgIg3IgBgFQATgcAPghIACgEIADgBIAHAEQAJAGAIAIQAJAJAIAKQAAABAAAAQAAAAABAAQAAAAABAAQAAABABAAQAHBoAoBKIADAIQACAJgCAOIgEAAIgegEIgagEIgDABIgPgBIgBABIgBADIABABIgsAKIgNgEIAAAEIgDAAIgKhVg");
	this.shape_7.setTransform(40.7,-19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996633").s().p("AhuBgIgDgZIgDgJIglgFIAWgpIABgDQAkgRgHgfQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAcgSAQgcIAAADQAFAMAKgDQAKgCAOgSQAOgQANgPQAYgYgJAbQgYAkASAAIAAgDQAogRAlgSIAAACQgCADgEABQgJADABABQAeAIAsgQQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQg0AQAaAOQA3AGhIARQg0AMAJAUIgBADQgmANgfAQQA6Aeg5AgQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQgQAFgBAPIgCAWQgBAFgFAFQgHABgGgFQgNgMgKgOQgJgBgJAHQgGAGgEAJQgEALgBALQgKgSgCgTg");
	this.shape_8.setTransform(-88.4,-20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AiLDKIgUgBIgVgDIgUgDQgVgFgUgHQgLgCgKgEIgBgBIgBgCIgCgDIgEgCIgNgTIgBgFIgCgLIgBgZIAAgZIAAgMIAAgNIAAgNQAAgHgBgGQgCgKgEgKIgJgRIAKgIIATgSIAQgUIAOgWIAMgZIAFgNIAFgOIAEgOIAEgPIAGgfIADgSIAiAMIAiAKIAkAJIAkAHIAnAGIAnAEIAVACIAUABIAWABIAVAAIAEAAIAcAAIAhgBICOgBIgIAQIgOAhIgOAiIgNAjIgMAkIgFATIgFATIgEAUIgEAVIgJApIgFAUIgcAIIgOACIgOABIgOABIgPAAIgdgEIgSgCIAAgNIABgcIABgbIABgbIADgbIACgaIACgOIABgNIACgNIADgNIAFggIABgSIgHAhIgHAeIgFAeIgFAdIgEAeIgCAPIgCAPIgBAPIgBAPIgDAeIgBAUIgUAJQgUAIgVAGQgTAHgUADQgUAFgUADIgpADIgVgBg");
	this.shape_9.setTransform(-78.3,87.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("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");
	this.shape_10.setTransform(40.7,78.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009933").s().p("AiOCLQgJgBgHgDQgGgGgEgMQAAgoADgoIABgCIACgCIAAgCQgBgMAEgLIAAgCQAAgGAAgHIgBgBIAKhdQADgnAhgDIAKgBQApAKBAAFQBCAGA2gPQAPCJAhB4IAAAFQg0AHg+gCIgGAAIgCAAQABhLgKg9IgCAAQgEBJAABKIgFABIgYAEIiRgGg");
	this.shape_11.setTransform(-1.2,63.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("AwIO8IgQgMIgWAGQgbAFgagEQgSgEgRgGIgmgOIgdAFQggAEgfgFQgRgEgQgHQgPgGgOgIIABgNIACgLIACgDIAUACQgBgJABgIQABgOADgOIAGgbIAHgaIAHgYQAGgRgDgQIgHgnIgFgcIgGgaIgGgbQgFgTgGgUIgIgZQgEgNgCgNQgDgSAAgUIAAghIAHgLQAKgPAQgEQANAAAMADQAQACAPAGQASAIAUADIAZACIAkgHIBcgfIgIAaIgLAnIgHAbIgFAPIgCAFIgEAKIgBAhIgBAhIgBAtIACAsIAEA5IAEAeIAGAgIAHAaIABADIAFADQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABQAXAGAXAIIA/AVIAVAHIABgBQAFgHAGgGQAGgGAHgCQAMgFAMACIALADIABAJIABANQAAAIgGAEQgIAHgIgDIgQgGIgSgFQgHgCgGAAIgCAAIAtAYIgOAHIgKADIgWgEQgJgDgLgCIgEAAIgFAAIAIAEIgCAIIgagGIALAEQAIAEAHAGQAFADADAEIAAAFIgCAFIgDAGQgGgDgGgCIgQgFIABACIAFACIgMAUIgJADIgMgFgAWuN+IgggVQgLgOgJAPQgHAKgJADQgBABgBAAQgBAAgBAAQAAAAAAgBQgBAAABgBQAFgZgZABQgFAMgMADIgFABQAVglgVAKQgFAAgEACQgFADgDABQgtAEAugbQAIAAAHgCQBaggAKhyQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgYgnQhnifh7iJIAAgGIAAhHQALhJAVg+IAQgpIABgFIAqAIQBCALBOADIgCACIgFAEQgDAEgBAGIgBAFQgpBcgtBaQBUBTAiCLQAFATAJAVQAHAPAJAOQAaAqAnAcQAAABAAABQAAAAAAAAQAAABABAAQAAAAAAAAQAnAMAKAoQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQguAkgoAqIgDAAQAEAggBAoQgIAIgMAHQgDABgEAAQgIAAgKgGgAPSNjIAFgGIABgFQAUgrAkgbQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQgGi2ANjKIAFheIAMjUIAEhLIAFADQAcAdA8gBIAFAAIAUAKIAjAQIAFABIgCAJQgGAYgIAWQgTAzgcApQgbAmgiAeQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgHAGgLADQAYAgAMApIABAGQAQBAgMBYQgNBZAbA6IABAFQAnA8APBTIgFABQgwAZhUgJQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgYAQgbAAQgMAAgNgDgAsXNhQgGgDgEgGQgFgKgEgKQgMgEgMABIgEABIgNAGIhSAAIgDAEQgXAKgcgHQgWgFgUgGQgWgGgWgIQgGgNgDgOIgGgeIgFgZQgEghAAgeQAAhAAChBIAAgVIAFgHIgBgNIAahqIBOgQQASgEAUgBQAkgFAigBIgZCyIgCAOQgFAiAAAhQgBAiAFAiQAEAUAFAVQADALAHALQACADAEACQAJAEAJACIAiAJQAnAKAoAGQAhAEAfADIAGAAQgQAMgTAGIgfAFQgNAAgKAJQgBAHAIAFIAFAFQgJAGgLADQgEABgDAAIgGgBgAmzMsQgKAHgIAHQgBABgBAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgEgVgKgCIgjgJQASgNAJgUIABgFQAUgSAOgZIAEgBQAOhLgChFQgDhFgTg/QgHgXAAgZQAPgXAKgfIADAAQgGhVgKhVIgBgGQALgZAdgFIAPACQARACARAAIABAAQATAFAOgFIADAAQglBhAEBlIADAkIADAAQAAAcgGAaQgPBHgEBNQgEBNAHBTIgDABQgEAZgPANIAAAFQAAA0gWAeIgFAAIgCAAQglAAAWgsgAhDL2QgRAAgQADQhxAYADhYQAQgvgIhDQgTibghiOQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIACAAQgMgzAEhGQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgIgSgFgTIAbAAIAGAAQAzgJATAQIABAEQACCXAJCHQAHBdAOBQQAEAWgDAiQAOAVAKAbQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAZAcApAJQAxAMAVAMIgFAAQgrABA2AUIgBADQgOADgOAAQgpAAghgbgA2NDYQAcgjATgoIAGgNQgLAVgUAPQgIAFgJgDIARgdIgCABIgIAHQgMAPgRAIQgDgGACgHQAHgWALgTQgaAlgoAaQgTAAgIgOQAAgNALgMQAUgDANgNQgDgWABgWIABgTIAQABIgFgIIgDgFIgGAAIAEgPQglghgegmQgagigUgoQgEgIgBgJQgDg2ABg3IAJgLQAIgNAGgOQATgzAZgwQAuhWBOg9QAlgeAqgXQAmgVAlgZIgIgeQgLgrAHgtIAMgDQAIATARAJIAIgJQADgFAHgBQAGACAGAAIAUgCQANAAANgGIgugCQgHgFgCgJQgEgSAHgRQAhgNAbgOIAAgCQgGgTgggMQAhgTA0gZIgDAAQgZgLAygSQAtgRABAYQglAeAbALIAAgIIAAgQQAVgCASAHQAPAGANAMIAEgGQAFgEALADQA0gJgXAqIgBAFQgqAQAuApQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQghAbgCAkIABgBQgCAIABAJIAAAAIACAMQABAFAEgEQAPgRACASIgCABIgQAQQgWAZgaASIANAOQAhAhAeAkQA3BCAuBGIANATIATAbIAEAEQAKAIgCANIAfAvQATAeAKAiQAGAVABAZIACApQADAmgKAnIAAgBIgLAYIgBABQgMAfgTAbIgPAVQgDABgDAAQgtAMgvAFQgjADgkABQgoACgmgBQhSgChRgPQgmgIglgMQgjgNgegQQgFgggIghQgIglgOgjQgPgogWgkIgFgMQAZgNAXgOQAcgSAYgVQAdgaAYgdIAGgKQgTAUgWATQgZAWgdAUQgjAZgkATIgKAHIABAAQAsBEAYBPQAOAwAHAwQADAUAAAUQAAAJgDAIQgHAWgDAVIgEACQgQAXgMAXQgEAKgGAIIgPAQQgXAXgeAKIALgPgAvjt0IgEABQgFAGgBAHQgFAXAPANQALgIAAgRQAAgRgLgIgAADAoIAAgGQAAgrgQgbQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgaAagpAKIAAAGQgGABgCAAQAAAAAAgBQgBAAABAAQAAgBAAAAQAAgBABgBQAegkAlgfQAEgHAAgJQAAgIgEgJIAAgBIgBgCIgCgFQghhQgNhoQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAIgIgEQgGgDgEgFQgNgMABgTIgBgEIgHAGIgBABIgBAAIgGAJIgCABIgDABIgCAEIgCABIgGAGIgDADIgOAIIgHAGIAIgEIABAAIAAACQgbA6gLBDQAAABgLAAQgHgWgTAdIgBAEQhfAShFgfIgBgBIgJAAIgDAEIgNgBIgCgGIAAABIAAABIAAADIAAABIgFgBQhjgoAAiLQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAOgTABgfQgDgVgCAVIAAAEIAAABIgCgBQgogTADhDQAKgoAWgbQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQA+gdA0gmQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQgChBASgoIABgFQgoAXgGgPQgEgHAFgRIABgFQANALAGgCQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQACgFgDgPQgBgHgGAEIgOAIQgKAEgBgGIAAgGIAAgBIAAgEIA3hUQACgEAIgCQAMgEALgFQgIgSAJgIIAEgBQAmgHATgPIADgLQAVANASARQgFgBgGACIAAABIgFAAQgMAKgDAOQgBAFADADQALAOAIgRIACgBQADgCABgEIABgCIAKgDQAFgCAAgEQATAXAPAdQAFAMAJANQgRAOgJAUIgBAFIABADIACACQAHATgWADQghAFgggHIgEgCQgOgGgDgPQgBgDABgDIgCgBIgEAAIgDADIgBAEQAOAGgHASQgDAJgJgFIAAAAIgBABQgGANAOABQAKACAEgKIABgEQAEADAHACIAHACQAdACAegCQAKAAAJgGIABAAQAAAdgVAUQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQg3ADAeA4QAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAQApAYA6AIIAFAAQA2AlAMBPIAAAFIAEAHIABAAQAmBAAcBLIABACQAMAiALAkQAAABAAAAQAAAAABAAQAAAAAAAAQABAAABAAQAABPAEBLIABAIIABARQAEA2AGAzIAAAGQgOAmghATQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAABIgGADQAAgXAbgdgAlljUIAAAAIABABIACAAIACAAIAAgBIAAgCIgCgEIgBAAIgCgBIgGgHIgBgBIgBgBIAAAAIAAgBIgBgCIAAAAIgFgDIgBgBIAAgBIgCgBIgDgBIAAAAIgBgCQgGgEgFgHIAAgCIAAAAIgIgLIAAgCIgBgWIACgBQACg/gXgmIgBgCIABAAIABAAIADABQAXAPAmAAQgNgPgZgFQgMgCgCgIQgRg5gOA2IACAFQAYAwAGBDQAAAPABAPIACABQAEAGADAHIACABQACADADACIABACIAAABIACABIAAAAQACAHAHAFIADACQADAEAEAAQADADAEACgAk+tdIgEABIgKAGQgQAIgBAUQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAJAGAFgDQAHABADgMIACgDIABgCIADgBIAEgFQANgLgRgJIgBAAgATqj0QgNgHgHgNQgFgJgOAMIgFgBQgkgRAOg1IgFgBQgUgJgOgPQgNgMgIgRIAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQBOg4BHg/IAAgDQBBARgwgfIACgDIgTAPIgBABQhHA3hXA8IgHAFIAAAAQgHAEgFAGQgGgBgDAFIgMAHIgBgDQAAgMgBgLQgDgXgVAAIgCABIAAgkIABgBIgBgFIAAg3QAcglAggiQAHgIAHgEQAUgNASAQQAPgSADgqQABgLAJgLQgdAEgJAzIgBAFQgQAHgNAJQgpAYgbAmIgBAEQgHgkAAggQABgrANgiIADgOIABgQQAGgkAmgNIAFAAQAIgcgUAVQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgkAmg+gPIgGgBIAMgSQATggAMgmIABgFQgmgFAEAxQABANgFAOQgcARgVgOQgHgEgGgJIgEgBQgHgdglgEIAAAAIgFAAIAAgFIAAgLIAFgCQAbgKALgFIgCgCIgMgOIAGAAIABgBIADgCIAAgBIAAgBIABgCIABgBIAAgCIAAgBIABgBQADgFgCgGIAAAAQgBgUAEgJQAEgJAJAAIABABIABABIAMACIADACIgCgBQADAAACADIADABIADgBIABgBIABgBQgDgRgUAEIAAABIgCAAQgCgFAFgFQAbgkANAbIAIgFQAFgCACgGIAPgDQAOAEAAAQQgBARgCAQIgBAKQAEgCACgHQAEgPAJgNIAFgFQAFABADAEQADADABAGIABAIQAYgXAeAMQAFADACAHQADAKAAAMIAAAFQgUAfgjAKIAGADQAmgHAXgfIAFgJIABADIAUAcIAHALQAGAMAEAPICnA9QAHAMALALIAIAJIADADQAPAJALAJIAFAGQA4BnATB0QANBQABBTIAAATIAAADIgBABIgBAKIAAAAIAAABIgBABIAAACIAAAPIgBAKIAAAAIgBABIAAABIAAACIAAABQgcAJgdAFQgpAHgsAAQgyAAg1gJgAOut9QgJAPAQAHQAHADAFgGQAQgTgYgHIgBAAQgHAAgDAHg");
	this.shape_12.setTransform(30.2,65.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("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LgDIAAgBQACgCADAAIABgCIABgBIAPgHIABAAIADgCQASgJAQgMQABgDAEAAIACABIABABQABAJAEAIIAAACIADADIABABQAIAAAJACQALAAAHAFIgFADQgLADgFAIIACACIANAGIAHACQAkAHAPAhIgNABQgMAAgHAJQACAGADAGQAGAKALAIQAEADgBAGIgDABIgNgFIgHAGQgDAOAEANIAFARIAIAUQAFANAHAMIAQAZIAUAEQBBAQA6AjIAEAAIAWARIABACQAPATAUANQAEACAKALIABABQAWAdAQAhQALAXAIAYQAkBygCB4IgCAsIABAAIABABQACARgDAQIAAACIgBAAIAAABIgCAbIAFgCIAFgBIgBAEQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIAAAFIABAAIABACIAAACIAEADIAAABIABACIABABIACACQADAKgBALIAAAGIABABIAAAAIAAAHIAAABIAAAHIgBABIgBgBQgBBQgOBEIgBAGIADgEIACgCIAEgFIACgBIAKgDIADgFIADgCIABgBIAAgBIA3AFIAQADIAFADIAaAbIAEAFQBWAFBXACIAWAAQBgACBhgEIADAAIAFAFIADADIAFAGIACADQA/AEA+AFQAJAAAJADIAEAFQAIAKALADIADAEIADAJQACAHAFAEIACABQAaAOANAQIgCACQgNABgNAAIgCgFIgCgDIgDgFIgKgEIgMgGIgCgFIgBgEIAAgEIgBgFIgCgCIgLgDIgFgFIgDgFIgBgEQgJgEgJAAQg+gEg/gCIgEgEIgEgFIgBgEIgDgFQhhADhggBIgYgBQhXgBhXgFIgEgFIgDgCIgXgYIgHgHQgLgDgLAAQgUAAgUADIgDADIgBABIgMADIgCAEIgFAEIgHAGIgGgBIgCAIQgTBFgpAuIgBACIgQAPIgFAFIAAAFIgBAGIgCADQgnBVgjBXQBEBZAmB7QAcBaA/A8IAFABQAnAPALAsQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQggAtgxAbIAAAFIgGBIIgBAEQg5Aygjg7QABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAfAVQAQAKAKgFQAMgHAHgIQABgngDghIACAAQAogqAvgkQAAAAA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");
	this.shape_13.setTransform(40.8,37.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,1,1).p("EAh6AYhMgm6AAAEgh5gYgIAAAQIAAdVIAAACIAATaIczAA");
	this.shape_14.setTransform(40.6,41.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF99").s().p("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");
	this.shape_15.setTransform(40.7,78.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("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IAAAAQAAgOgCgPIAAgEQgFgOABgPIAAgEQgEgigCgkIgBgeIABgBIABgBIABhEIABgUIABgHIACgPIAAgPQAEgOgBgPIgBgEQAFgVgBgXIAAgCQAAgWABgVIABgeIAAgBIAAgDIABgZIAAgiIAAgaIAAg4IAAgDIgBhNIACAjIABgSIABg7IAAgPIAAgyIABgBIABgBIAAgGIABgMIAAgBQAJicAvh3IACgGQAUgyAbgsQAAAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAAgGQAjgcAvgSIAAgDIBNAAIAGAAQCRBYgJD2QgBAbgEAUIAAADQACACgCAFIgBAEIAAAFIgBAFIgCARQgBAEABAEQAAAEgCACIgBAJIgBAGQAAALgCAJIgBABIALgDIAAgBQACgCADAAIABgCIABgBIAPgHIABAAIADgCQASgJAQgMQABgDAEAAIACABIABABQABAJAEAIIAAACIADADIABABQAIAAAJACQALAAAHAFIgFADQgLADgFAIIACACIANAGIAHACQAkAHAPAhIgNABQgMAAgHAJQACAGADAGQAGAKALAIQAEADgBAGIgDABIgNgFIgHAGQgDAOAEANIAFARIAIAUQAFANAHAMIAQAZIAUAEQBBAQA6AjIAEAAIAWARIABACQAPATAUANQAEACAKALIABABQAWAdAQAhQALAXAIAYQAkBygCB4IgCAsIABAAIABABQACARgDAQIAAACIgBAAIAAABIgCAbIAFgCIAFgBIgBAEQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIAAAFIABAAIABACIAAACIAEADIAAABIABACIABABIACACQADAKgBALIAAAGIABABIAAAAIAAAHIAAABIAAAHIgBABIgBgBQgBBQgOBEIgBAGIADgEIACgCIAEgFIACgBIAKgDIADgFIADgCIABgBIAAgBIA3AFIAQADIAFADIAaAbIAEAFQBWAFBXACIAWAAQBgACBhgEIADAAIAFAFIADADIAFAGIACADQA/AEA+AFQAJAAAJADIAEAFQAIAKALADIADAEIADAJQACAHAFAEIACABQAaAOANAQIgCACQgNABgNAAIgCgFIgCgDIgDgFIgKgEIgMgGIgCgFIgBgEIAAgEIgBgFIgCgCIgLgDIgFgFIgDgFIgBgEQgJgEgJAAQg+gE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ABQAEANAJALIAAABIAFAAIAKgMIABgBQAJgEALgCIAFgFIACgBIAAgCIABgCQADgDADAEIAAABQAcgPAUANIgDAAQgbAYBMACQASAAgHAHQgnAIAeAgIACACQAEACADAGQARASAQAVIAbArIgaAiIgBAEQAJA6gYAZIgBAFIgMACQgiAMAPAoIABAAIACABQAnAWA2AEIAGAAQA/AnANBYIABAGQAxA0ALBaIAAADQgdhLgmg/IAAgBIgEgGIgBgGQgLhOg2gmIgGAAQg5gHgpgZQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQgeg4A4gCQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAVgTAAgeIAAAAQgKAGgKABQgdABgegCIgHgCQgGgBgFgDIgBADQgDAKgLgCQgOgBAGgMIABgCIABABQAIAEAEgJQAHgSgOgGIABgEIADgCIADgBIACABQgBADABADQAEAPAOAGIADACQAgAHAigFQAVgDgHgTIgCgBIgBgEIABgFQAKgUARgNQgJgOgGgMQgOgdgUgXQABAEgGACIgKADIAAACQgBAEgDACIgDABQgHARgMgNQgDgEABgEQAEgOALgLIAFAAIAAgBQAHgBAEAAQgRgRgVgNIgEAMQgTAOglAHIgFABQgJAIAIASQgLAFgLAEQgIACgDAEIg3BUIAAAFIAAABIAAAFQABAHALgFIAOgIQAFgDACAGQADAPgDAFQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgGACgOgLIAAAFQgFARADAHQAHAPAngXIgBAGQgRAnACBBQAAABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQg0Ang9AcQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQgVAbgKAoQgDBDAnAUIACABIAAgBIABgFQACgVADAVQgCAfgNAUQgBAAAAAAQAAABAAAAQgBABAAABQAAAAAAABQABCKBiAoIAFABIAAgBIABgCIACADIAMABIAEgEIAJAAIABABQBFAfBegRIABgFQATgdAIAWQALAAAAgBQALhDAbg5IAAgCIgBAAIgIAFIAGgGIAPgJIADgDIAFgFIACgCQgOAhgTAbIAAAFQAJA3gaAsIAKBVIAAACIAMBSIAAABIAAACIABABQAIA2ALAvIgDAAQgaACA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");
	this.shape_16.setTransform(40.8,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_16},{t:this.shape_12},{t:this.shape_11},{t:this.shape_15},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_14},{t:this.instance_1},{t:this.instance}]},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.9,-116.7,437,317);


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
		var bgm = createjs.Sound.play('bgmCon',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
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
		
		 window.open ("con_Scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("con_Scene2.html","_self");
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


(lib.textbuborsam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ORSYM();
	this.instance.parent = this;
	this.instance.setTransform(-6.2,0.1,1,1,0,0,0,274.2,200);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABgB1QgEgHgEgSIgGgaQgHgZgNhVIggBeIgJAdQgGASgGALQgGAMgKAAQgKAAgEgKQgEgHgDgKIgFgRQgQg3gMg+IgFAcIgUBRQgCAPgGAcQgEAMgLAAQgIAAgFgFQgEgFABgHQgBgaALgmIARg+IAJgxQAIgiAHgLQAHgJAIAAQALAAAEALQAHAOAHArQAIA0ARA6QAXg7ARhBIAEgXQADgNAEgJQAHgLAKAAQAOAAAHAaQACAIAEAcQAJBGAOAyIAHAbQAHAVgBAFQAAAHgEAFQgGAEgGAAQgIAAgGgJg");
	this.shape.setTransform(99.1,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA2BRQgDgOgHgjIgqAIIgoAIQgIAVgTAnQgFAJgJAAQgFAAgFgFQgFgEgBgHQABgHAXgyQgCgEAAgFQAAgNAOgEQATggAagrQAlg8AJAAQAMAAAEASIAKA0IAYBsIAJAYQAEANABAEQgBAHgEAEQgFAFgGAAQgPAAgLglgAgTALIA4gLIgNg8g");
	this.shape_1.setTransform(72.9,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag+BsQgdgOgBgXQAAgHAFgEQAEgDAHAAQAIgBAFAJQAIAMAHAEQANAJAZAAQAXAAAVgLQAbgNAAgYQAAgTgXgMQgSgKgbgBQgZAAgRgKQgWgMAAgYQAAgcAfgXQAegVAfAAQAQAAATAFQAZAHAAAKQAAAOgOAAQgGAAgQgDQgQgEgIAAQgYAAgRANQgRAMAAARQAAANAXAFQAJACAXABQAkAEAUATQATARAAAbQAAAlgjAVQgeAUgmAAQgdAAgXgLg");
	this.shape_2.setTransform(50.4,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhIB5QgHgHAAgHIAAguQABgWACgoQAEgtAAgUIACgrQAAgHAEgDQAVgGAcgBQAaABAaASQAdAWAAAfQAAAoggAXQAYAKALAMQANAMAAAPQgBASgUASQgOANgQAGQgiANg3AAQgHAAgFgFgAgwA+IAAAhQApgCAZgKQALgFAKgIQAJgJAAgDQAAgIgUgJQgOgHgOgDIgQgDIgHAAIgGAAIgSgBIgBAjgAgphcIgBAbIgCA9IAXABQAXgCAPgNQAQgNAAgXQAAgOgQgNQgRgMgRAAIgYABg");
	this.shape_3.setTransform(-58.2,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhFBdQgTgXgFgsQgCgUgBg6IABgkQABgOADgFQADgMAKAAQAPAAAAAbIAABbQAABeBBAAQA+AAAAieIAAgQIAAgMQABgKADgHQAEgKAJAAQAPAAABAWIAAATIAAAUQAAC0heAAQgwAAgYgcg");
	this.shape_4.setTransform(-80.7,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhIB5QgHgHABgHIAAguQgBgWADgoQAEgtAAgUIACgrQABgHADgDQAWgGAbgBQAaABAaASQAdAWAAAfQAAAoggAXQAYAKALAMQANAMAAAPQgBASgUASQgOANgQAGQgiANg3AAQgGAAgGgFgAgwA+IAAAhQApgCAZgKQALgFAKgIQAJgJAAgDQAAgIgTgJQgPgHgOgDIgQgDIgHAAIgGAAIgSgBIgBAjgAgphcIgBAbIgCA9IAXABQAXgCAPgNQAQgNAAgXQAAgOgQgNQgRgMgRAAIgYABg");
	this.shape_5.setTransform(-101.9,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textbuborsam, new cjs.Rectangle(-115,-27,230,54.2), null);


// stage content:
(lib.con_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* dougpoint = new Sound();
		dougpoint.attachSound("4-b");
		sampoint = new Sound();
		sampoint.attachSound("4-a");
		v1 = new Sound();
		v1.attachSound("coordinate");
		v2 = new Sound();
		v2.attachSound("and");
		v3 = new Sound();
		v3.attachSound("or");
		v4 = new Sound();
		v4.attachSound("nor");
		v5 = new Sound();
		v5.attachSound("for");
		v6 = new Sound();
		v6.attachSound("but");
		v7 = new Sound();
		v7.attachSound("yet");
		v8 = new Sound();
		v8.attachSound("so");
		
		v1.onSoundComplete = play1;
		v2.onSoundComplete = play2;
		v3.onSoundComplete = play3;
		v4.onSoundComplete = play4;
		v5.onSoundComplete = play5;
		v6.onSoundComplete = play6;
		v7.onSoundComplete = play7;
		v8.onSoundComplete = play8;
		
		function play1(){
			v2.start();
		}
		function play2(){
			v3.start();
		}
		function play3(){
			v4.start();
		}
		function play4(){
			v5.start();
		}
		function play5(){
			v6.start();
		}
		function play6(){
			v7.start();
		}
		function play7(){
			v8.start();
		}
		function play8(){
			v1.start();
		}
		
		v1.start();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgdAkQgMgKAAgRQAAgTAMgRQANgSAUAAQATAAAJAJQAKAJAAATQAAATgLARQgNASgTAAQgQAAgMgKgAgUgTQgJANAAAPQAAAMAIAHQAIAGAMAAQANAAAKgOQAIgNAAgPQAAgOgGgGQgGgFgOAAQgOAAgKAOg");
	this.shape_17.setTransform(469,45.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgXAoQgLgFAAgIQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQADAAACADIAFAGQAFAEAKAAQAIAAAIgEQAKgFAAgJQAAgIgJgEQgHgEgJAAQgJAAgHgDQgIgFAAgJQAAgKAMgJQALgIALAAQAGAAAHACQAJADAAAEQAAAFgFAAIgIgBIgJgCQgIAAgHAFQgGAEAAAHQAAAFAIACIAMABQANABAIAIQAHAFAAAKQAAAOgNAIQgLAIgOAAQgLAAgJgFg");
	this.shape_18.setTransform(460.1,45.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgDArQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_19.setTransform(448.7,45.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgYAtQgHgFAAgTIABgIIAAgKIgBgCIACgEIABgZIgBgFIAAgHQAAgHAGAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAAAIANgCIALgBQAOAAAJADQADACAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAQgKgDgJAAIgJABIgNADIABAFIgCAXIAZgCIAPgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAAFgGABIgOABIgaACIgBAIIAAAHQAAANADACQABACAIAAIAKAAIAKAAIAEgBIAEAAQAFgBAAAHQAAAEgEACQgGABgSAAQgRAAgFgFg");
	this.shape_20.setTransform(440.6,45.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgMAtQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgCAGgLIAHgNQgKgOgDgGIgJgQIgKgQIgBgCQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAEgCQADABACACIAEAHIAJANQAEAHADAGQABAFAGAIIANggIAHgMQABgFAEAAQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAACgDAGIgEAGIgKAZIgLAYIgHANIgCAGQgCADgEAAIgEgBg");
	this.shape_21.setTransform(432.7,45.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgDArQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_22.setTransform(421.9,45.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgZAjQgHgJgCgQIgBgdIAAgNIABgIQACgEAEAAQAFAAAAAKIAAAiQAAAjAYAAQAXAAAAg7IAAgGIAAgEIABgHQACgDADAAQAGAAAAAIIAAAHIAAAHQAABDgjAAQgRAAgJgKg");
	this.shape_23.setTransform(412.9,45.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgaAtQgDgDAAgCIAAgRIABgXIACgYIAAgQQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAIgDAKABQAJgBAKAIQALAHAAANQAAAOgMAIQAJAEAFAEQAEAFAAAFQAAAIgIAGQgFAFgGACQgNAGgUgBQgCAAgCgCgAgRAXIAAAMQAPAAAJgEQAEgBAEgEQADgDAAgCQAAgDgIgCQgFgDgFgCIgGgBIgBAAIgDAAIgHAAIAAANgAgPgiIAAAKIgBAXIAJABQAHgCAHgEQAFgGAAgHQABgGgHgFQgGgEgGgBIgJABg");
	this.shape_24.setTransform(405,45.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgdAtQAAgBgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBIAAgOIAAgNIABgPIABgQIgBgJIAAgJQAAgDABgDQACgDAFAAIANABQAJABAFADQAXANAAASQAAAJgIAGQgHAFgJADQASAKAJALIABAEQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIgDgCQgUgTgXgHIAAAMIABALQAAABAAAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgSgZIAAAHIgBAMIgBAKIADAAIADAAQAOAAAHgEQADAAADgDQADgEAAgCQAAgIgJgHQgIgHgJgBIgJAAg");
	this.shape_25.setTransform(393.7,45.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgdAkQgMgKAAgRQAAgTAMgRQANgSAUAAQATAAAJAJQAKAJAAATQAAATgLARQgNASgTAAQgQAAgMgKgAgUgTQgJANAAAPQAAAMAIAHQAIAGAMAAQANAAAKgOQAIgNAAgPQAAgOgGgGQgGgFgOAAQgOAAgKAOg");
	this.shape_26.setTransform(385,45.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgbAwQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgiIABgiIAAgIIAAgIQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQABgBAAAAIAEACIANgDIAJAAQAHAAAJACQALACAAAFIgBAEQgBAAAAABQAAAAgBAAQAAABgBAAQgBAAAAAAIgDAAQgHgDgMAAIgIABIgMABIAAAaQAMgEAFAAIASABQAGABAAAFQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBABAAAAIgKgBIgIAAQgEAAgNADIAAAoQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_27.setTransform(376.8,45.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgdAtQAAgBgBAAQAAgBAAgBQgBAAAAgBQAAAAAAgBIAAgOIgBgNIABgPIABgQIAAgJIgBgJQAAgDACgDQADgDADAAIAPABQAIABAEADQAYANAAASQAAAJgIAGQgGAFgLADQATAKAJALIABAEQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgFgCQgTgTgXgHIAAAMIABALQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgSgZIABAHIgBAMIgCAKIADAAIACAAQAPAAAHgEQADAAADgDQADgEAAgCQAAgIgJgHQgIgHgJgBIgIAAg");
	this.shape_28.setTransform(365.6,45.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgdAkQgMgKAAgRQAAgTAMgRQANgSAUAAQATAAAJAJQAKAJAAATQAAATgLARQgNASgTAAQgQAAgMgKgAgUgTQgJANAAAPQAAAMAIAHQAIAGAMAAQANAAAKgOQAIgNAAgPQAAgOgGgGQgGgFgOAAQgOAAgKAOg");
	this.shape_29.setTransform(356.9,45.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgmAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_30.setTransform(347.4,45.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgdAtQgBgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBIAAgOIgBgNIACgPIABgQIgBgJIAAgJQAAgDACgDQACgDADAAIAPABQAIABAFADQAXANAAASQAAAJgIAGQgHAFgKADQATAKAJALIACAEQAAAAgBABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIgDgCQgUgTgXgHIABAMIAAALQAAABAAAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgSgZIAAAHIAAAMIgBAKIACAAIACAAQAPAAAHgEQAEAAACgDQADgEAAgCQAAgIgJgHQgHgHgKgBIgIAAg");
	this.shape_31.setTransform(335.3,45.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgdAkQgMgKAAgRQAAgTAMgRQANgSAUAAQATAAAJAJQAKAJAAATQAAATgLARQgNASgTAAQgQAAgMgKgAgUgTQgJANAAAPQAAAMAIAHQAIAGAMAAQANAAAKgOQAIgNAAgPQAAgOgGgGQgGgFgOAAQgOAAgKAOg");
	this.shape_32.setTransform(326.6,45.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgRAvQgHgBgDgDIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgTIAAgSIAAgTIAAgVQAAgCACgDQADgDACABIAJADIALAFQAPAGAMAMQAOANAAAQQAAAKgFAJQgFAKgHAFQgKAHgQAAIgJgCgAgVgQIAAAQIgBAhIACAAQAEAEAIgBQANAAAGgDQAFgEAEgHQAEgGAAgIQgBgPgSgMQgFgEgWgJg");
	this.shape_33.setTransform(314.1,45.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgmAuQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_34.setTransform(304.8,45.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AAVAeIgEgSIgQADIgOADIgKAWQgCAEgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgDAJgTIgBgDQAAgFAGgBIARgcQANgWADAAQAFAAACAGIADAUIAJAoIADAJIACAGQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgFAAgEgOgAgGAEIAUgEIgFgWg");
	this.shape_35.setTransform(295.5,45.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_36.setTransform(280.8,46.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgWAbIAAgoIABgGIAAgGQAAgFAEAAQAHAAAAAJQAKgLAOAAQAEAAADAEQACAEAAAGIAAAFQgBAHgFAAQgFAAAAgGIAAgEIAAgFQgKABgEAEQgGAEgDAIIAAAfQAAAGgGAAQgFAAAAgGg");
	this.shape_37.setTransform(274.8,46.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATAeIgEgEIgKAEIgGABQgOABgGgIQgGgIAAgPQAAgMAKgLQAJgJANgBQAFABAGACQAIADAAAFIgBADIgBAHIAAAMIABALIADALIACADIAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAHAAAJQAAAKAEAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgGIABgGIgEgCIgCgBQgJAAgGAIg");
	this.shape_38.setTransform(268.6,46.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgXAoQgLgFAAgIQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQADAAACADIAFAGQAFAEAKAAQAIAAAIgEQAKgFAAgJQAAgIgJgEQgHgEgJAAQgJAAgHgDQgIgFAAgJQAAgKAMgJQALgIALAAQAGAAAHACQAJADAAAEQAAAFgFAAIgIgBIgJgCQgIAAgHAFQgGAEAAAHQAAAFAIACIAMABQANABAIAIQAHAFAAAKQAAAOgNAIQgLAIgOAAQgLAAgJgFg");
	this.shape_39.setTransform(257.9,45.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_40.setTransform(248.9,45.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdAkQgMgKAAgRQAAgTAMgRQANgSAUAAQATAAAJAJQAKAJAAATQAAATgLARQgNASgTAAQgQAAgMgKgAgUgTQgJANAAAPQAAAMAIAHQAIAGAMAAQANAAAKgOQAIgNAAgPQAAgOgGgGQgGgFgOAAQgOAAgKAOg");
	this.shape_41.setTransform(239.3,45.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZArQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_42.setTransform(231.2,45.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgDArQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_43.setTransform(224.4,45.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYAkQgHgJgBgMQAAgTARgVQAOgSANAAIAFABIAEABQACgDAEAAQADAAABAFIABAMIgBAEQgBACgDAAQgEAAgCgEQgCgEgBgBQgBgBgFAAQgJAAgJANQgOASAAAPQAAAHAFAGQAFAFAHAAQAFAAAGgDIALgHIAEgCQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABACgDACQgQAOgOAAQgMAAgJgJg");
	this.shape_44.setTransform(216.3,45.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_45.setTransform(207.8,45.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZAjQgHgJgCgQIgBgdIAAgNIABgIQACgEAEAAQAFAAAAAKIAAAiQAAAjAYAAQAXAAAAg7IAAgGIAAgEIABgHQACgDADAAQAGAAAAAIIAAAHIAAAHQAABDgjAAQgRAAgJgKg");
	this.shape_46.setTransform(198.6,45.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgXAoQgLgHAAgLQAAgIAGABQAGAAAAAGQAAAGAHAEQAGAFAGAAQAEAAACgdIABgiIgBgHIgDAAIgGAAIgHAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgGAIAAIAGAAIAFAAIALAAIALgBQANAAAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgDAAIgEgBIgHAAIAAAIQAAAqgFAUQgEANgJAAQgKAAgKgIg");
	this.shape_47.setTransform(190.2,45.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_48.setTransform(181.4,45.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgdAkQgMgKAAgRQAAgTAMgRQANgSAUAAQATAAAJAJQAKAJAAATQAAATgLARQgNASgTAAQgQAAgMgKgAgUgTQgJANAAAPQAAAMAIAHQAIAGAMAAQANAAAKgOQAIgNAAgPQAAgOgGgGQgGgFgOAAQgOAAgKAOg");
	this.shape_49.setTransform(171.8,45.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgYAkQgHgJAAgMQAAgTAQgVQAOgSANAAIAFABIAEABQACgDADAAQAEAAACAFIABAMIgCAEQgCACgDAAQgDAAgCgEQgBgEgCgBQgBgBgFAAQgJAAgJANQgOASAAAPQAAAHAFAGQAFAFAHAAQAFAAAGgDIAKgHIAGgCQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAACgCACQgPAOgPAAQgNAAgIgJg");
	this.shape_50.setTransform(163.5,45.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYAtQgHgFAAgTIABgIIAAgKIgBgCIACgEIABgZIgBgFIAAgHQAAgHAGAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAAAIANgCIALgBQAOAAAJADQAEACgBAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAQgKgDgJAAIgJABIgNADIABAFIgCAXIAZgCIAPgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAAFgGABIgOABIgaACIgBAIIAAAHQAAANADACQABACAIAAIAKAAIAKAAIAEgBIAEAAQAFgBAAAHQAAAEgEACQgGABgSAAQgRAAgFgFg");
	this.shape_51.setTransform(152.6,45.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgDArQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_52.setTransform(145.1,45.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAVAeIgEgSIgQADIgOADIgKAWQgCAEgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgDAJgTIgBgDQAAgFAGgBIARgcQANgWADAAQAFAAACAGIADAUIAJAoIADAJIACAGQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgFAAgEgOgAgGAEIAUgEIgFgWg");
	this.shape_53.setTransform(136,45.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_54.setTransform(127,45.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgZArQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_55.setTransform(118.9,45.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgRAvQgHgBgDgDIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgTIAAgSIAAgTIAAgVQAAgCACgDQACgDADABIAKADIAKAFQAPAGAMAMQAOANAAAQQAAAKgFAJQgFAKgHAFQgKAHgPAAIgKgCgAgVgQIAAAQIgBAhIABAAQAFAEAJgBQAMAAAGgDQAFgEAEgHQADgGAAgIQAAgPgSgMQgFgEgWgJg");
	this.shape_56.setTransform(111.5,45.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdAtQgBgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBIAAgOIAAgNIABgPIABgQIgBgJIAAgJQAAgDABgDQACgDAFAAIANABQAJABAFADQAXANAAASQAAAJgIAGQgHAFgJADQASAKAJALIACAEQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIgDgCQgUgTgXgHIABAMIAAALQAAABAAAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgSgZIAAAHIgBAMIAAAKIACAAIADAAQAOAAAHgEQAEAAACgDQADgEAAgCQAAgIgJgHQgIgHgJgBIgJAAg");
	this.shape_57.setTransform(103.3,45.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgdAkQgMgKAAgRQAAgTAMgRQANgSAUAAQATAAAJAJQAKAJAAATQAAATgLARQgNASgTAAQgQAAgMgKgAgUgTQgJANAAAPQAAAMAIAHQAIAGAMAAQANAAAKgOQAIgNAAgPQAAgOgGgGQgGgFgOAAQgOAAgKAOg");
	this.shape_58.setTransform(94.6,45.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgdAkQgMgKAAgRQAAgTAMgRQANgSAUAAQATAAAJAJQAKAJAAATQAAATgLARQgNASgTAAQgQAAgMgKgAgUgTQgJANAAAPQAAAMAIAHQAIAGAMAAQANAAAKgOQAIgNAAgPQAAgOgGgGQgGgFgOAAQgOAAgKAOg");
	this.shape_59.setTransform(85,45.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgYAkQgIgJAAgMQAAgTARgVQAOgSANAAIAFABIAEABQACgDAEAAQADAAABAFIABAMIgBAEQgBACgDAAQgEAAgCgEQgCgEgBgBQgBgBgFAAQgJAAgJANQgOASAAAPQAAAHAFAGQAFAFAHAAQAFAAAGgDIALgHIAEgCQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBACgCACQgQAOgOAAQgMAAgJgJg");
	this.shape_60.setTransform(76.7,45.1);

	this.instance_2 = new lib.textbuborsam();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,363.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2,1,1).p("AfpBoMg/RAAAIAAjPMA/RAAAIAAAIIAAAFAfphTIAACz");
	this.shape_61.setTransform(273.4,44.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("A/oBnIAAjOMA/RAAAIAAAII0IAAIAAAFIUIAAIAAAHIAACzIAAAHg");
	this.shape_62.setTransform(273.4,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.instance_2},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.UI}]}).wait(1));

	// main
	this.instance_3 = new lib.OR();
	this.instance_3.parent = this;
	this.instance_3.setTransform(234.3,151.9,0.955,0.955);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgTgCQgBAAAAAAQAAgBAAAAQABgBAAAAQABgBABAAQATADATAEIgBACQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgTgBgRgHg");
	this.shape_63.setTransform(370.2,208.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.instance_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'F5E3117203C2EC419865D86C94A89DBD',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_10d.mp3", id:"_10d"},
		{src:"sounds/_11a.mp3", id:"_11a"},
		{src:"sounds/_11b.mp3", id:"_11b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_2b.mp3", id:"_2b"},
		{src:"sounds/_2c.mp3", id:"_2c"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/_5a.mp3", id:"_5a"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_8a.mp3", id:"_8a"},
		{src:"sounds/_9a.mp3", id:"_9a"},
		{src:"sounds/JingleConjunction.mp3", id:"JingleConjunction"},
		{src:"sounds/MenuConjunction.mp3", id:"MenuConjunction"},
		{src:"sounds/SECorrectAnswer.mp3", id:"SECorrectAnswer"},
		{src:"sounds/and.mp3", id:"and"},
		{src:"sounds/andor.mp3", id:"andor"},
		{src:"sounds/but.mp3", id:"but"},
		{src:"sounds/butyetso.mp3", id:"butyetso"},
		{src:"sounds/coordinate.mp3", id:"coordinate"},
		{src:"sounds/_for.mp3", id:"_for"},
		{src:"sounds/nor.mp3", id:"nor"},
		{src:"sounds/norfor.mp3", id:"norfor"},
		{src:"sounds/or.mp3", id:"or"},
		{src:"sounds/so.mp3", id:"so"},
		{src:"sounds/words.mp3", id:"words"},
		{src:"sounds/yet.mp3", id:"yet"},
		{src:"sounds/bgmCon.mp3", id:"bgmCon"}
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
an.compositions['F5E3117203C2EC419865D86C94A89DBD'] = {
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