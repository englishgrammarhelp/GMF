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


(lib.VertLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAKEiIgTAAIAApDIATAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJEiIAApDIATAAIAAJDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-30,4,60);


(lib.shestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAvQgGgGAAgHQAAgHAOgeQALgbAHgMQAFgKAJAAQAIAAAGAGQAFAGAAAHQAAAGgfBEQgEAMgLAAQgIAAgFgGg");
	this.shape.setTransform(48.4,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AhgCpQgVgUAAhGIABgfIABgkQgCgFAAgGQAAgGAEgGQAFhAAAgeQAAgIgDgQIgCgYQAAgaAWAAQAJAAAHAHQAagHAYgEQAXgDAUAAQA1AAAgAMQAPAGAAAPQAAAJgGAHQgGAHgKAAIgHgBQglgKgiAAQgSAAgVADQgVADgYAHIACAXQAAAfgEA1IBfgJQAqgFAKAAQAKAAAGAHQAHAGAAAKQAAATgUACIg1AFIhkAJIgBAeIgBAaQAAAwAHAJQAFAGAdAAIApAAIApgBIANgCIAMgBQAYAAAAAXQAAASgTAEQgVAEhDAAQhFAAgTgSg");
	this.shape_1.setTransform(27.5,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AiJCuQgGgHAAgJQAAgXAEguQADguAAgYIgBgjIAAglIACg0IACg0QAAgJAGgHQAGgGAJAAQAJAAAGAGQAGAHAAAJQAAARgCAkIgCA0IABA3IBegRQA4gLAmAAQADggAAg/QAAgRAFgRQAHgXAOAAQAIAAAHAGQAGAGAAAJIgCAJQgDAJAAASIAAAUIABATQAAAWgEAsQgEAqAAAWIACAyQADAiAAARQAAAJgGAGQgGAGgJAAQgJAAgGgGQgGgGAAgJQAAgRgDgiQgCghAAgRIABggQgmAAg2ALIhcASQAAAUgEAkQgEAkAAAUQAAAJgGAHQgGAGgJAAQgJAAgGgGg");
	this.shape_2.setTransform(-4.2,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9900FF").s().p("AhYCYQgpgTAAghQgBgJAHgFQAGgHAKABQALgBAIAMQALARAJAHQASAMAkgBQAhAAAdgOQAmgTAAghQAAgcgggQQgagOgmgBQgjgBgZgOQgfgRAAghQAAgnAtghQAqgfAsAAQAWAAAaAIQAkAJAAAPQAAAUgUgBQgJAAgWgEQgVgFgNAAQghABgYAQQgYARAAAYQAAASAgAIQAMADAiACQAyAEAdAcQAaAYAAAlQAAA0gxAgQgqAbg2AAQgoAAgigQg");
	this.shape_3.setTransform(-37.2,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shestill, new cjs.Rectangle(-55.2,-33.3,110.5,66.7), null);


(lib.shesentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgCpQgVgUAAhGIABgfIABgkQgCgFAAgGQAAgGAEgGQAFhAAAgeQAAgIgDgQIgCgYQAAgaAWAAQAJAAAHAHQAagHAYgEQAXgDAUAAQA1AAAgAMQAPAGAAAPQAAAJgGAHQgGAHgKAAIgHgBQglgKgiAAQgSAAgVADQgVADgYAHIACAXQAAAfgEA1IBfgJQAqgFAKAAQAKAAAGAHQAHAGAAAKQAAATgUACIg1AFIhkAJIgBAeIgBAaQAAAwAHAJQAFAGAdAAIApAAIApgBIANgCIAMgBQAYAAAAAXQAAASgTAEQgVAEhDAAQhFAAgTgSg");
	this.shape.setTransform(33.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiJCuQgGgHAAgJQAAgXAEguQADguAAgYIgBgjIAAglIACg0IACg0QAAgJAGgHQAGgGAJAAQAJAAAGAGQAGAHAAAJQAAARgCAkIgCA0IABA3IBegRQA4gLAmAAQADggAAg/QAAgRAFgRQAHgXAOAAQAIAAAHAGQAGAGAAAJIgCAJQgDAJAAASIAAAUIABATQAAAWgEAsQgEAqAAAWIACAyQADAiAAARQAAAJgGAGQgGAGgJAAQgJAAgGgGQgGgGAAgJQAAgRgDgiQgCghAAgRIABggQgmAAg2ALIhcASQAAAUgEAkQgEAkAAAUQAAAJgGAHQgGAGgJAAQgJAAgGgGg");
	this.shape_1.setTransform(2,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhYCYQgpgTAAghQgBgJAHgFQAGgHAKABQALgBAIAMQALARAJAHQASAMAkgBQAhAAAdgOQAmgTAAghQAAgcgggQQgagOgmgBQgjgBgZgOQgfgRAAghQAAgnAtghQAqgfAsAAQAWAAAaAIQAkAJAAAPQAAAUgUgBQgJAAgWgEQgVgFgNAAQghABgYAQQgYARAAAYQAAASAgAIQAMADAiACQAyAEAdAcQAaAYAAAlQAAA0gxAgQgqAbg2AAQgoAAgigQg");
	this.shape_2.setTransform(-31,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shesentstill, new cjs.Rectangle(-49,-33.3,98,66.7), null);


(lib.pronounhowl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYCfQAAgbACg0QADg2AAgaIABhPIABhQQAAgVAVgBQAVABAAAVIgBBQIgBBPIgDBsIgCA0QgCAWgSgBQgWAAAAgWg");
	this.shape.setTransform(40.4,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOBAQgFgTgEghIgGgwIgSApIgiBbQgDAIgFAFQgHAMgOABQgRAAgQhCQgIgigHg5IgGghQgDgUAAgNQAAgJAHgGQAGgGAKAAQAQAAAEASQADANACATIADAgIANBiQAZhDAahYQAHgZARAAQARAAAGAcQAGAZAJA2QAJA2AGAfIAQg8IAdh2QADgOAQAAQAJAAAHAHQAHAGAAAIIgDALQgRBHgcBaQgGAUgOAVQgIALgNAAQgYAAgNg7g");
	this.shape_1.setTransform(18.9,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBBdQgdgegCg0QgBgwAagmQAfgsA2gBQAsAAAWApQASAhAAAtQgBAwgZAjQgcAngtgBQglABgbgcgAgmgsQgPAZAAAeQAAAgASATQAOAOAUAAQAWAAAQgRQATgSABgfQADhUgxgBQgfAAgSAfg");
	this.shape_2.setTransform(-8.9,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA7CmQgEgSgFghQgDggAAgUIAAgSIABgRQgBgogUAAQgbAAgWAYQgMANgTAkQAABUgHAPQgGAOgNAAQgJAAgHgGQgGgGgBgJIACgKQACgFABgbIABggIAAihIACgkQAAgMgCgKQgDgKAAgKQAAgKAHgGQAGgGAKAAQARAAADAUQAEAVAAARIgCAwQgBAYAAAYIAAAUQATgZAVgLQASgNAYAAQAlAAANAYQAKARABAmIABAqIAFAuQADAaAFATIABAHQgBAJgGAGQgHAGgJAAQgQAAgFgRg");
	this.shape_3.setTransform(-32.9,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronounhowl, new cjs.Rectangle(-48.4,-33.3,96.9,66.7), null);


(lib.pronounheader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLAAQgNAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape.setTransform(134.8,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_1.setTransform(121.5,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_2.setTransform(108.2,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSBgQgDgEAAgFIABgQIABgQIAAgWIAAgXIAAgXIAAgZIgBgXIgCgWQAAgGAFgEQAEgGAHAAQAGAAAKAPQAeAuAYAdQAcAkAjAgIAAgQIgBgPQAAg1gDgfIgEgNQgCgJgBgEQABgPANAAQAVAAAABQIAAAoIgBAoIgCATQgCANgLAAQgGAAgKgJQgygvg/hXIAAAbIgBAbIABAeIAAAfQAAAhgNgBQgHAAgEgDg");
	this.shape_3.setTransform(92.1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_4.setTransform(68.1,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_5.setTransform(47.8,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_6.setTransform(35.4,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_7.setTransform(22,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_8.setTransform(9.1,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBZIABgtIACgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_9.setTransform(-0.7,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvBjQgDgDAAgGIAAgwIAAgxQAAgagBgWIgCgZQAAgJADgFQAEgIAHABQAEAAAEADQADADAAAFIgBAEIAAAHQAKgIAKgDQAJgEAJABQAZAAALAVQAJATAAAcQAAAagOAQQgPATgZAAQgLAAgPgEIAAA6QAAAGgDADQgEAEgFAAQgFAAgEgEgAgLhAQgGADgKAKQABAbAAAeQAOAFAMAAQAPAAAIgLQAHgJAAgQQAAgWgFgLQgFgLgLAAQgLAAgJAFg");
	this.shape_10.setTransform(-10.7,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_11.setTransform(-24.1,4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_12.setTransform(-36.8,4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9C30CE").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLAAQgNAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFADgEQAEgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_13.setTransform(-56.9,3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9C30CE").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_14.setTransform(-70.2,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9C30CE").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_15.setTransform(-83.5,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C30CE").s().p("AAeA7IgEgaQgBgOAAgNIAAgLIAAgLQABgbgKAAQgOAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgGAAgDgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAVAAQATAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_16.setTransform(-96.1,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9C30CE").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_17.setTransform(-109.8,4.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9C30CE").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHgBAPIAAAJQAAAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIAABCQAAAMgMAAQgLAAAAgMg");
	this.shape_18.setTransform(-121.7,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9C30CE").s().p("AgzBeQgDgDAAgFIAAgkQAAgSACggIADgyIAAgRQAAgMABgFQADgMAJACIALgBIASgCQAVABAUAPQAVARAAAYQAAAegXARQgUAQgcAAIgPgBIgBBAQAAAFgDADQgDADgFAAQgFAAgDgDgAgahIIgBAXIgCAwIANABQAUAAAOgKQAPgLAAgTQAAgOgPgKQgNgJgPAAIgJAAIgHABg");
	this.shape_19.setTransform(-134.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronounheader, new cjs.Rectangle(-143.2,-19.4,286.4,38.8), null);


(lib.pronouncanword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA2BrIgHgwQgCgaAAgWIABgUIAAgVQAAgvgSAAQgYAAgVAdQgVAbgLAnIgCAWIgBAVIABAUIABAUQAAAJgGAHQgGAGgJAAQgKAAgGgGQgGgHAAgJIgBgUIgCgUQAAgXADgnQAEgoAAgWIgBgVIgBgVQAAgKAGgGQAHgGAJAAQAUAAACAdIABAaQAkgyAmAAQAkAAANAfQAKAVABAoIAAAXIAAATQAAASAEAdQAFAdAAASQAAAKgGAGQgHAGgJAAQgTAAgCgVg");
	this.shape.setTransform(23.7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABGBwQgKgIgEgHQgWAKgQAGQgQAHgJgBQg0AAgXgcQgXgcAAg4QAAg0AlgmQAlgmAxAAQATAAAYAKQAeAMAAASQAAAFgEAFQgCAIgCAUIgBAvQAAAcAEAPQACALALAcIAGAMIABAEQAAAIgGAHQgGAFgJAAQgEAAgLgKgAgkg2QgZAcAAAjQAAAkAMASQANASAaAAQAUAAAPgIQAHgEAPgNQgHg4AAgeIABgUIAEgYIgOgGIgKgCQghAAgYAcg");
	this.shape_1.setTransform(-0.1,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/BgQgfgcAAgvQAAgsAdgvQAig1AoAAQAVAAAbAKQAiANgBATQABAIgGAHQgFAGgJAAQgGAAgFgDIgJgIQgNgLgdAAQgWAAgWAoQgTAlgBAaQABAdATARQATAPAcAAQANAAAPgHIAagNQAGgEADAAQAIAAAGAHQAGAGAAAIQAAAQgiAPQgeAOgTAAQgsAAgfgcg");
	this.shape_2.setTransform(-23,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-33.3,73.8,66.7);


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


(lib.itstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AgPChQgHgGAAgJIABgKIABgKIgBghIgCggQAAgfgEg4QgGg+gBgbIgTABQgxAAgbgIQgSgEAAgRQAAgJAFgHQAIgIAJABIAkAEQAWACAOAAIAnAAIAogBQARAAAgADQAiACARAAQAJAAAHAHQAGAGAAAKQAAAJgGAHQgHAGgJAAQgQAAgjgCQgggDgRAAIgQAAQABAfAFBEQAFA+gBAjIACAYIACAXQAAAPgFALQgGAPgNAAQgIAAgHgHg");
	this.shape.setTransform(14.4,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AhgCiQgGgHAAgJQAAgKAGgGQAGgHAJAAQAPAAAhgEQACgSAAgXIgCglIgBglQAAgyAGhMIgdABIgcABQgKAAgGgHQgGgGAAgKQAAgUAUgCQASgCAxAAQArAABCAJQATADAAAVQAAAKgHAGQgHAFgIAAQgPAAgVgCIgjgFQgFBAAAA5IABAmIAAAmQAAAVgBARIBFgBQAJAAAHAGQAGAHAAAJQAAAKgGAHQgHAGgJAAIglABIglAAQgNAAgdAEQgdAEgPAAQgJAAgGgGg");
	this.shape_1.setTransform(-15.1,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.itstill, new cjs.Rectangle(-29.7,-33.3,59.4,66.7), null);


(lib.itsentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPChQgHgGAAgJIABgKIABgKIgBghIgCggQAAgfgEg4QgGg+gBgbIgTABQgxAAgbgIQgSgEAAgRQAAgJAFgHQAIgIAJABIAkAEQAWACAOAAIAnAAIAogBQARAAAgADQAiACARAAQAJAAAHAHQAGAGAAAKQAAAJgGAHQgHAGgJAAQgQAAgjgCQgggDgRAAIgQAAQABAfAFBEQAFA+gBAjIACAYIACAXQAAAPgFALQgGAPgNAAQgIAAgHgHg");
	this.shape.setTransform(14.4,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhgCiQgGgHAAgJQAAgKAGgGQAGgHAJAAQAPAAAhgEQACgSAAgXIgCglIgBglQAAgyAGhMIgdABIgcABQgKAAgGgHQgGgGAAgKQAAgUAUgCQASgCAxAAQArAABCAJQATADAAAVQAAAKgHAGQgHAFgIAAQgPAAgVgCIgjgFQgFBAAAA5IABAmIAAAmQAAAVgBARIBFgBQAJAAAHAGQAGAHAAAJQAAAKgGAHQgHAGgJAAIglABIglAAQgNAAgdAEQgdAEgPAAQgJAAgGgGg");
	this.shape_1.setTransform(-15.1,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.itsentstill, new cjs.Rectangle(-29.7,-33.3,59.4,66.7), null);


(lib.HorizontalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AXXAKMgutAAAIAAgTMAutAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A3WAKIAAgTMAutAAAIAAATg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-2,301,4);


(lib.Hesheitsaxcheekstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeAZQAxgCAEgvIAAgHIACAAQADACACAFQABAGgBAIIgBADQgGARgPALQgKAIgSADIgDAAQgHAAAAgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hesheitsaxcheekstill, new cjs.Rectangle(-3,-3.2,6.1,6.5), null);


(lib.Hesheitfinger4sill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFCC66"],[0,0.333],41.9,8.2,41.9,8.2).s().p("AAAAAIABAAIAAAAg");
	this.shape.setTransform(-2.4,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOAQQgSgIgJAHIgJgDIAAgHIAAgBIgCABIgFAEIgBgBIgGgGIAAgBIABgBIABgCQAeAIAkACIAAgCQgTgHgVgEQgMgCgIgGIgEgDIAnAFQAQAGAJAJIADAEIAAAAQADAFgEABIgFACIgMABIgDgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgfACIgBACIgBABIgBgQIABAAIADAAIAFADQAIAFAMADQAVADATAIIAAACQgkgCgegJg");
	this.shape_2.setTransform(-0.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hesheitfinger4sill, new cjs.Rectangle(-3.7,-1.7,7.4,3.4), null);


(lib.Hesheitfinger3still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgbALIgMgBQgBgKACgGIADgDIAEgBIAFADQAHADAKAAQAJAAACgDIADAAQAQAGAUACIAAACQglAFglgHQAEAGAFAEIgDAAg");
	this.shape.setTransform(-0.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggALQgFgEgEgGQAmAHAkgGIAAgBQgUgDgPgFIgDgBQgDAEgJAAQgKgBgHgDIgFgCIAPgEIAfgBIACADIAAAAIABAAQAFACAHAAQAPAEAFAMIgBAAQgOALgdgEIAKADIgogFg");
	this.shape_1.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hesheitfinger3still, new cjs.Rectangle(-4.5,-1.5,9.1,3.2), null);


(lib.Hesheitfinger2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AghAJIgFgNIgBgDIAEgBIAIABQAfADAkgBIAAAAIhEANIAAABIgFAAg");
	this.shape.setTransform(-0.5,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARAMIABAAIALABIgDAAQgGAAgDgBgAAUALIgEAAIgCgCIgxABIgBgBIBEgNIADAAIABAAIgBAAIgDAAQgjABgggDIgIgBIAKgDIABgBIAAAAQAXABAUgCIAFAAQAKADAQgBIAAABIABAAQACAJgDAGIgBABQgEAFgJAAIgIgBg");
	this.shape_1.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hesheitfinger2still, new cjs.Rectangle(-4.5,-1.3,9.1,2.7), null);


(lib.Hesheitfinger1still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgeAMIACgBIgDgBQgEgEgBgGIANgGIABgCQAdgGAdAFIAAABQgWAKgaAHQgIAAgIACIACABg");
	this.shape.setTransform(-0.2,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAigCIAAgBQgdgFgeAGIAAACIgNAGIABgIIAFgDQAFADALgGQAEgCAFgBIAGAAQAOgCAPgBQADADAGABIAAABIAAADQAJAQgfACIACABIgXABIgIABQAagHAWgKg");
	this.shape_1.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hesheitfinger1still, new cjs.Rectangle(-3.9,-1.6,7.8,3.3), null);


(lib.Hesheitdogmouthstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAVIAAgDQAKgZAWgOIAEgBQAFAMgMARQgKAQgLAAQgEAAgEgCg");
	this.shape.setTransform(-0.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAeIgBAAQgCgLAAgLQANgXAZgLIACgBQAFgHAEAHQAGAJAAAJQAAAJgGAKQgNAWgTAAQgHAAgHgCgAAQgUIgDABQgWAOgKAZIAAADQAQAHANgVQAMgSgFgLIAAgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hesheitdogmouthstill, new cjs.Rectangle(-2.7,-3.2,5.6,6.4), null);


(lib.Hesheitsetoffingersstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFCC00","#FFFFFF"],[0,0.502],40.1,20.8,0,40.1,20.8,0).s().p("AgIADIAAgGIADADIABABQAGACAHgBIgBABg");
	this.shape.setTransform(-3.6,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpAyIAAgCIgDgDIgBgQQALgLAOgIIABgBIgCAAQgOAIABgRQASgKgIgHQgGgGAAgFQgBgGAFgGIAAgCIAEgFIAGAAQAQAHASgJIAPgBQADAFgDAOIgDADIAAABQAdAHgYAUIgCAAQgRAGgDAUIgCAAIgQAMIAAACIABACIgMAEIgHABIgDAEIgDAAIgMgBgAABAGIgnAbQAEARARgLIASgNQAKgGACgNIAAgCIgMgBIAAACgAgYgCQAIAGASgFQAOgEARgCIAAgCQALgNgTABIgCAAIgBAAQgaAAgUATgAgZgiIgBABQAEARAagMIACAAIARgJIACgBQgYgCgXAEIgCAAIgBACg");
	this.shape_1.setTransform(0,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AglAfIAngbIAAgCIAMABIAAACQgCANgKAGIgSANQgGAEgFAAQgHAAgDgKgAgXgEQAUgUAbABIACAAQATgBgLANIAAACQgRACgOAEQgHADgGAAQgIAAgFgEgAgZgjIABgBIABgCIACAAQAXgEAYACIgCABIgRAJIgCAAQgKAFgHAAQgLAAgCgKg");
	this.shape_2.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hesheitsetoffingersstill, new cjs.Rectangle(-4.5,-5.1,9.1,10.3), null);


(lib.Hesheitguitararmstll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("ACvAuIgCAAIAAgCQgLgHgIgIIAAgBQgMgGAAARIgCAAQgXAPgVgPIgCAAIgKABQgkADgmADIgCAAQhAADg8AGIAAADIgDAAIgBAAIgLABIggABIgGAAIgCAAIgUAAIgCAAQgeACgXgEQgGgBgCgCIABgCIAFABQAEgCACgDQADgJgCgGIAEgEIABgFIAFgBIAHgLIAEgBIACgGIAIgHIAHARIAAgBQAFgRAdAEIACABQB1ALCCgCIACAAQAYgfAfgZIACgBIAWgPIAAgBQAzgBAjAQIAAACQgPAHgcgHQgbgGgNAPIBaAcIAAACQgugFgqgBQABADADACQACACADAAIADAAIABACIA5AdIAAABIhKgTIgIgCIABAHIABABIADABQAYAVAWAZIABABQgRgCgOgPgAgpgGIAFgCIAAgBIACAAIgFADIgCAAg");
	this.shape.setTransform(-0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACtA4IAAgBQgGgKgKgCQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQgMgFgLAJIgQAFIghAAIAAgBIgBABIgKAAQg9ADg+ACIhIADIAAAEIgBABIhEgBIg0AHQgKgBgGgFIADgIQABADAHAAQAXAEAegCIABAAIAVAAIACAAIAGAAIAggBIALgBIABAAIACAAIAAgDQA9gGA/gDIADAAQAmgCAkgEIAKgBIACAAQAVAPAXgPIACAAQAAgRALAGIABABQAIAIAKAHIABACIACAAQAOAQARABIgBgBQgWgZgZgUIgCgCIgBgBIgBgHIAIACIBJATIAAgBIg5gdIAAgCIgDAAQgDAAgDgCQgCgCgBgDQApABAvAFIAAgCIhbgcQAOgPAbAGQAcAHAPgHIAAgCQgjgQgzABIgBABIgVAPIgCACQggAYgXAfIgDAAQiBACh1gLIgCgBQgdgEgFARIAAABIgHgQIAEgFIABABIACABQAaACAWgBQAUAFAXgEQAlADAkAAIABAAIAMAAIgCABIgCAAQAtAHA5gDIACAAQAlgqAxggIABgBIAAAAIACAAQAkgBAbAHIACABQAJAFAGgCIADADIAKAIIACACIgLAKIAAABQgJACgKAAQALALASAGQAJADgHAIIgCABQgcAIgggJQgCAAgBAAQAAAAgBgBQAAAAAAAAQAAABAAAAIAkAOQAPAGgEANIAAABQgfAJgdgRIgBAAQAcASAEAgIAAABQgUgFgQgKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hesheitguitararmstll, new cjs.Rectangle(-26,-7.1,52,14.3), null);


(lib.hestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAvQgFgGAAgHQAAgHANgeQAMgbAHgMQAFgKAJAAQAIAAAFAGQAGAGAAAHQAAAGgfBEQgEAMgLAAQgHAAgHgGg");
	this.shape.setTransform(32.8,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AhgCpQgVgUAAhGIABgfIABgkQgCgFAAgGQAAgGAEgGQAFhAAAgeQAAgIgDgQIgCgYQAAgaAWAAQAJAAAHAHQAagHAYgEQAXgDAUAAQA1AAAgAMQAPAGAAAPQAAAJgGAHQgGAHgKAAIgHgBQglgKgiAAQgSAAgVADQgVADgYAHIACAXQAAAfgEA1IBfgJQAqgFAKAAQAKAAAGAHQAHAGAAAKQAAATgUACIg1AFIhkAJIgBAeIgBAaQAAAwAHAJQAFAGAdAAIApAAIApgBIANgCIAMgBQAYAAAAAXQAAASgTAEQgVAEhDAAQhFAAgTgSg");
	this.shape_1.setTransform(11.9,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AiJCuQgGgHAAgJQAAgXAEguQADguAAgYIgBgjIAAglIACg0IACg0QAAgJAGgHQAGgGAJAAQAJAAAGAGQAGAHAAAJQAAARgCAkIgCA0IABA3IBegRQA4gLAmAAQADggAAg/QAAgRAFgRQAHgXAOAAQAIAAAHAGQAGAGAAAJIgCAJQgDAJAAASIAAAUIABATQAAAWgEAsQgEAqAAAWIACAyQADAiAAARQAAAJgGAGQgGAGgJAAQgJAAgGgGQgGgGAAgJQAAgRgDgiQgCghAAgRIABggQgmAAg2ALIhcASQAAAUgEAkQgEAkAAAUQAAAJgGAHQgGAGgJAAQgJAAgGgGg");
	this.shape_2.setTransform(-19.8,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hestill, new cjs.Rectangle(-39.6,-33.3,79.3,66.7), null);


(lib.hesheitsent2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAHgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgLAAgHgIg");
	this.shape.setTransform(46.6,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYCfQAAgbACg0QADg2AAgaIABhPIABhQQAAgVAVgBQAVABAAAVIgBBQIgBBPIgDBsIgCA0QgCAWgSgBQgWAAAAgWg");
	this.shape_1.setTransform(34.8,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOBAQgFgTgEghIgGgwIgSApIgiBbQgDAIgFAFQgHAMgOABQgRAAgQhCQgIgigHg5IgGghQgDgUAAgNQAAgJAHgGQAGgGAKAAQAQAAAEASQADANACATIADAgIANBiQAZhDAahYQAHgZARAAQARAAAGAcQAGAZAJA2QAJA2AGAfIAQg8IAdh2QADgOAQAAQAJAAAHAHQAHAGAAAIIgDALQgRBHgcBaQgGAUgOAVQgIALgNAAQgYAAgNg7g");
	this.shape_2.setTransform(13.3,7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhBBdQgdgegCg0QgBgwAagmQAfgsA2gBQAsAAAWApQASAhAAAtQgBAwgZAjQgcAngtgBQglABgbgcgAgmgsQgPAZAAAeQAAAgASATQAOAOAUAAQAWAAAQgRQATgSABgfQADhUgxgBQgfAAgSAfg");
	this.shape_3.setTransform(-14.5,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA8CmQgGgSgDghQgFggAAgUIABgSIAAgRQAAgogUAAQgbAAgWAYQgMANgTAkQAABUgHAPQgGAOgNAAQgJAAgHgGQgGgGAAgJIABgKQACgFABgbIAAggIABihIACgkQgBgMgCgKQgCgKAAgKQABgKAGgGQAGgGAKAAQASAAADAUQADAVAAARIgCAwQgBAYAAAYIAAAUQASgZAVgLQAUgNAXAAQAkAAAOAYQAJARACAmIABAqIAFAuQADAaAEATIACAHQAAAJgHAGQgHAGgJAAQgQAAgEgRg");
	this.shape_4.setTransform(-38.5,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hesheitsent2still, new cjs.Rectangle(-54,-33.3,108.1,66.7), null);


(lib.hesentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgCpQgVgUAAhGIABgfIABgkQgCgFAAgGQAAgGAEgGQAFhAAAgeQAAgIgDgQIgCgYQAAgaAWAAQAJAAAHAHQAagHAYgEQAXgDAUAAQA1AAAgAMQAPAGAAAPQAAAJgGAHQgGAHgKAAIgHgBQglgKgiAAQgSAAgVADQgVADgYAHIACAXQAAAfgEA1IBfgJQAqgFAKAAQAKAAAGAHQAHAGAAAKQAAATgUACIg1AFIhkAJIgBAeIgBAaQAAAwAHAJQAFAGAdAAIApAAIApgBIANgCIAMgBQAYAAAAAXQAAASgTAEQgVAEhDAAQhFAAgTgSg");
	this.shape.setTransform(18.1,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiJCuQgGgHAAgJQAAgXAEguQADguAAgYIgBgjIAAglIACg0IACg0QAAgJAGgHQAGgGAJAAQAJAAAGAGQAGAHAAAJQAAARgCAkIgCA0IABA3IBegRQA4gLAmAAQADggAAg/QAAgRAFgRQAHgXAOAAQAIAAAHAGQAGAGAAAJIgCAJQgDAJAAASIAAAUIABATQAAAWgEAsQgEAqAAAWIACAyQADAiAAARQAAAJgGAGQgGAGgJAAQgJAAgGgGQgGgGAAgJQAAgRgDgiQgCghAAgRIABggQgmAAg2ALIhcASQAAAUgEAkQgEAkAAAUQAAAJgGAHQgGAGgJAAQgJAAgGgGg");
	this.shape_1.setTransform(-13.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hesentstill, new cjs.Rectangle(-33.4,-33.3,66.8,66.7), null);


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


(lib.texthesheit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_254 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(254).call(this.frame_254).wait(1));

	// vert1
	this.instance = new lib.VertLine("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-55.9,173.8,0.8,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({alpha:1},5).wait(125).to({startPosition:0},0).wait(1));

	// horz
	this.instance_1 = new lib.HorizontalLine("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,183.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).to({x:-3.9,alpha:1},5).wait(125).to({startPosition:0},0).wait(1));

	// howl
	this.instance_2 = new lib.hesheitsent2still();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84.5,167.5);

	this.instance_3 = new lib.pronounhowl();
	this.instance_3.parent = this;
	this.instance_3.setTransform(85.1,160.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},63).to({state:[]},60).to({state:[{t:this.instance_3}]},19).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},107).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(142).to({_off:false},0).to({alpha:1},5).wait(108));

	// can
	this.instance_4 = new lib.pronouncanword();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-14.9,166.8);
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},0).to({_off:true},60).wait(10).to({_off:false,y:160.8,alpha:0},0).to({alpha:1},5).wait(117));

	// it
	this.instance_5 = new lib.itsentstill();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,169);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).to({scaleX:1.52,scaleY:1.52},10).to({scaleX:1,scaleY:1},5).to({alpha:0},5).wait(1).to({x:-94.9},0).wait(39).to({alpha:1},0).to({scaleX:1.52,scaleY:1.52,x:-100.9},10).to({scaleX:1,scaleY:1,x:-94.9},5).to({alpha:0},5).to({_off:true},1).wait(38).to({_off:false,y:162,alpha:1},0).wait(7).to({alpha:0},8).wait(24).to({alpha:1},0).wait(55));

	// she
	this.instance_6 = new lib.shesentstill();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,167);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({_off:false},0).to({scaleX:1.43,scaleY:1.43,y:166},10).to({scaleX:1,scaleY:1,y:167},5).to({alpha:0},7).wait(21).to({x:-108.9},0).wait(19).to({alpha:1},0).to({scaleX:1.43,scaleY:1.43,x:-120.9,y:166},10).to({scaleX:1,scaleY:1,x:-108.9,y:167},5).to({alpha:0},5).to({_off:true},20).wait(25).to({_off:false,x:-106.9,y:160,alpha:1},0).wait(7).to({alpha:0},7).wait(28).to({alpha:1},0).to({alpha:0},11).wait(55));

	// he
	this.instance_7 = new lib.hesentstill();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,169);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.45,scaleY:1.45,y:166},9).to({scaleX:1,scaleY:1,y:169},5).to({alpha:0},6).wait(43).to({x:-94.9,alpha:1},0).to({scaleX:1.45,scaleY:1.45,x:-98.9,y:166},9).to({scaleX:1,scaleY:1,x:-94.9,y:169},5).to({alpha:0},5).wait(35).to({_off:true},1).wait(9).to({_off:false,y:160,alpha:1},0).wait(11).to({alpha:0},8).wait(30).to({alpha:1},0).to({alpha:0},12).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.4,135.7,66.8,66.7);


(lib.she = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.instance = new lib.shestill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.2,-33.3,110.5,66.7);


(lib.it = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer 1
	this.instance = new lib.itstill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-33.3,59.4,66.7);


(lib.Hesheitsaxfinger1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitfinger1still();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,x:-0.4,y:-0.8},4).to({rotation:0,x:0,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-1.6,7.8,3.3);


(lib.Hesheitsaxcheek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitsaxcheekstill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.49,scaleY:0.49},14).to({scaleX:1.09,scaleY:1.09},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.2,6.1,6.5);


(lib.Hesheitguitararm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitguitararmstll();
	this.instance.parent = this;
	this.instance.setTransform(-23.4,2.7,1,1,0,0,0,-23.4,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:2.6,rotation:15},3).to({regY:2.7,rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-7.1,52,14.3);


(lib.Hesheitfinger4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitfinger4sill();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleX:1,scaleY:1,rotation:13.3},4).to({scaleX:1,scaleY:1,rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-1.7,7.4,3.4);


(lib.Hesheitfinger3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitfinger3still();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1,scaleY:1,rotation:-19},4).to({scaleX:1,scaleY:1,rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-1.5,9.1,3.2);


(lib.Hesheitfinger2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitfinger2still();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-15},4).to({rotation:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-1.3,9.1,2.7);


(lib.Hesheitdogmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitdogmouthstill();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.536,0.536);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.5,scaleY:1.5},14).wait(15).to({scaleX:0.54,scaleY:0.54},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.7,3,3.4);


(lib.Hesheitsetoffingers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitsetoffingersstill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:1.8},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-5.1,9.1,10.3);


(lib.he = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Layer 1
	this.instance = new lib.hestill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-33.3,79.3,66.7);


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
		var bgm = createjs.Sound.play('bgmusic',{loop:-1});
		var vo = createjs.Sound.play('VO6');
		
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
		
		 window.open ("pronoun_Scene7.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pronoun_Scene5.html","_self");
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


(lib.Hesheitdogstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitdogmouth();
	this.instance.parent = this;
	this.instance.setTransform(5.9,-8.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6633").s().p("AhfCaIAAgCQgBgRADgMIAAgBQgKADgJAGIAAgDQgFgcAOgUIACgBQgGgIgGAIQgNAOgFgLQAGgPAIgOIAAgCIACAAQAVgeAegUQgGgBAAgEQgGgVgMAKIgBAAQADghgVALQgBgIAEgCQANgKAAgLIgCAAQglACgZAPIgBgHQgBgLgHAIQgOAVgEgVIAAgCQgEgNgKAWQgMAAAPgTQAKgPgDgGQgIABgEADQgQARgEgOQAMgVAWgLIAAgBQA4gYBAARQAIADAHAGQAUglAtgNIAAgBQAVABAQgFIACAAQALARgFAOIABAAQAVAFASgHIAAACIAAACQACAVgFAPQAFAYASgZIADgCQAWgLAlACQAYAKALAYIABACQgCAigPATIAAACIgBADIgSAVIgCAAQgCgMgNABIgBgDQgHgNgLgLIgDAAQgXACAGgYIgCAAQgRgLgOAQIgCABQgMArg2ALQgCAMAJgCIAAgBQAZALADAbIgDAAIgIgFQgDgIgLABQgKAIABAOQAAAOAGALQAIATAWgFIAEgDQAQAMACAYIgBAAQgTgDAQATQADAFAAAFIAAAFQgCAFgDADIgBABIgBABIgCACIgGAAIAAACIgBAAIABAAIAAABIg3AAQgYgKgnAEIgJAEIgZgCIAHAEIgHABQgFgLgHgKgAhSB+QgJAYAXAMIAVAAQAYgOgIgbQgCgHgHgBIgbgEQgKAGgFALgAgcBZQgFARANAMQgBAEACADQADAEAFABIAPACQAKgBAGgHQAQgXgPgVQgDgEgEAAQgMgCgNgBQgMAEgFAMgAhfAuQgGAKAKAGIAJAAQAEgBABgCQAHgSgUAAQgDACgCADgAgfhTQgOAFgJAOQgGAKAAAOQAAAIAFAGQAKAOASgEQAJgFgCgIIgCgHQAHgCAEgHQAEgGABgJQABgXgXAAIgDAAgACchiQgSADAFAQQACAEADADQgBARATABIABAAIALAAIAFgCIABgBQAYABADgTQADgQgMgJIglAAIgJACgAimhzQgCAIAGAEQAXAMAaAAQADgDAFAAQATgDgBgTQAAgDgDgBQgLgIgPADIgBgBQgFgHgJADQgFADgKgBIgDAAQgOAAgDANgAAiiRQgFALAKAGIAJAAQACgBABgEQAIgQgTgBQgDABgDAEgABSBXIgBAAIABgCIABACg");
	this.shape.setTransform(0,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhZC5QgLgOgCgXIgBgDQgbgEAKgdIABgDQgHABgKgJIAAgBQACgdANgQIACgBIABAAQARgZAXgSIgCgBQgPgKgFgTIgBgBQgCACgDgBQgQgIAMgQIACgDQgdACgUANQgDgDAAgCQgBgGgBABQgPAVgMgSIAAgCQgHACgMAMIgBgBQgEgWAKgVIgBABQgPAXgEgQQgBgFgBgKQAFgFACgHIAAgCQAPgJAMgMIACgBIAAgCQBCgbBFAYIACAAQAkgxBRgDIACAAQAKgQAcACIAAACQAWALgNAWIgBAAIgBACIgHAFQAGAXABASIABAAQAagNApABIADAAQAPAGAMAKIABABQAIANAFAPIACABIAAAVIAAADQgIAIgDANIgCAAIAAADQgIARgLANIgCABQgNAHgEgNQgEAAgCACQgGAEAAgGQgCgMgHgEQAAABgBABQAAAAAAAAQAAABAAAAQAAAAgBAAQgHAEAAgEQAAgNgIgEIgDAAQgaAMAMgiQAAgEgDAEQgfAjgoAYQAWAaAGAeIABACQAOAIACASIAAADQgPALARAVIABABQgCAWgFASIgIAEQADgDACgFIAAgEQAAgGgDgEQgQgUATADIABAAQgCgYgQgLIgEACQgWAFgIgTQgGgLAAgOQgBgOAKgIQALgBADAIIAIAGIADAAQgDgcgZgLIAAABQgJACACgMQA2gLAMgrIACgBQAOgPARAKIACABQgGAYAXgDIADAAQALALAHANIABADQANgBACALIACABIASgVIABgCIAAgCQAPgUACgiIgBgCQgLgXgYgLQglgCgWALIgDACQgSAZgFgYQAFgPgCgVIAAgCIAAgBQgSAGgVgFIgBAAQAFgNgLgSIgCAAQgQAFgVAAIAAABQgtAMgUAlQgHgGgIgCQhAgSg4AYIAAABQgWALgMAVQAEAPAQgRQAEgEAIgBQADAGgKAPQgPATAMABQAKgWAEAMIAAADQAEAUAOgUQAHgJABALIABAHQAZgOAlgDIACAAQAAALgNAKQgEACABAJQAVgLgDAgIABAAQAMgKAGAUQAAAEAGACQgeAUgVAeIgCAAIAAADQgIANgGAQQAFALANgPQAGgHAGAHIgCABQgOAUAFAcIAAADQAJgFAKgEIAAABQgDAMABARIAAADQAHAJAFALIAAAAIgGAAgABSBhIABAAIgBgBIgBABIAAAAIABAAgABFC4IAAAAIgBAAIABAAIAAgDIAGAAIACgCIgEAFgAhECsQgXgMAJgYQAFgLAKgFIAbADQAHABACAHQAIAbgYAOIgVAAgAgLCMQgFgBgDgEQgCgDABgEQgNgLAFgSQAFgMAMgEQANABAMACQAEABADADQAPAWgQAWQgGAHgKABIgPgCgAhbBJQgKgHAGgKQACgDADgCQAUAAgHASQgBADgEABIgJAAgAg3gPQgFgHAAgIQAAgOAGgKQAJgOAOgFQAagCgBAaQgBAIgEAHQgEAGgHACIACAHQACAJgJAEIgIABQgMAAgIgKgACngrIgBgBQgTAAABgRQgDgEgCgDQgFgQASgDIAJgDIAlABQAMAIgDAQQgDATgYgBIgBABIgFADIgLAAgAiihdQgGgEACgIQADgPARACQAKABAFgDQAJgCAFAGIABACQAPgEALAIQADACAAADQABASgTADQgFAAgDADQgaAAgXgMgAAnh2QgKgGAFgLQADgDADgCQATABgIARQgBADgCABIgJAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hesheitdogstill, new cjs.Rectangle(-22.5,-18.5,45.1,37), null);


(lib.Hesheitdog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitdogstill();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,17,0.998,0.998,15.5,0,0,-1.3,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-1.4,scaleX:1,scaleY:1,rotation:-12.6,x:-0.8},14).to({regX:-1.3,scaleX:1,scaleY:1,rotation:15.5,x:-2.2},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-22.7,53.3,47.6);


(lib.hesheitbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.it();
	this.instance.parent = this;
	this.instance.setTransform(-136.4,-199.4);

	this.instance_1 = new lib.she();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-275.2,-199.9);

	this.instance_2 = new lib.he();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-427.4,-200.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AeSEvQs7BXxXAAQz3AAuDhyQuDhyAAiiQAAihODhyQODhyT3AAQT4AAODByQODByAAChQAABtmUBWEAmsADoQgBABgBAAEAphADGQhNAQhbAP");
	this.shape.setTransform(-290.9,-196.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EAsCAGdQgVABgRgPQhcgYhUgsIgBgBQiFgvh8hCIgkgSQhiguhogWQghgHgQgWIgHAAIgEgEIgFgGIgJgEQgGgDgDgGIAAgEIAAgEIAAgDIABgDIACgDIAEgEIAEgBIAAgBIAaABQAGAJAIAEIAEAGQBWAkBYAZQAbAIAYANQAqANAiAbIABABQCAA4CCA1QBSAgBPAkQgIhBgRg/QgoiMiIg9QgYgLgUgQIAAgDIABgHIAAgEIADgDIABgBIACgCIAAAAIAEgBIABgBIAIABIAOABIAMAIIARAOQBzAvA3BuQAcA4AKA9QAIAyACAzQAAAKgIAGIgCABIgJgBgEAnRgBEQgtgGgegeQgHggADgkIACgNQALgOAMgLIAEgCIAygHQgcgigUgoIgEgHIAAgpIAAgNQAwggA3gUIAIgEIAKgDIANAGQADACACAEQAJAMgGAPIgFALQgwAUgsAUQARAeASAdQAqgGAdgeIAPgDIAAgCIANAGIAGAGQAMAgggAWIgFAEQgaALgaABIAJAMIASAYIAAAGIAAAHIAEAHIAFAHQAcBAg4AVQgVAIgXAAIgUgBgEgnJgB6QgzgXgThBIAAgHIAAgHIgEgGIgFgHIAAgUIAAgVIgEgGIgFgHQg/AJhOAVIgDABIgCAFIgEAHQgLAIgMAFIAMAPIAGAFQA9gaAWA/QAAAQgCARQgBAHgDAHQhVAfgwheQgMgXgSgSIgBgNIgBgOIAFgHIACgEIAFgCIAJgBIACgBIAAgBIAAABIAFgDIAAgEQABgHADgHQB3gRBqgsQAwAkACBGQABANAFAOQBMgrAjBIQAHAigBAiQAAAJgEAJQgXAKgUAAQgdAAgXgVg");
	this.shape_1.setTransform(-299.7,-173.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EAn5AGvQiCg1iAg4IgBgBQgigbgqgNQgZgNgbgIQhXgZhXgkIgDgGQgIgEgGgJIgagBIgBABIgDABIgEAEIgDADIAAADIAAADQs7BXxXAAQz3AAuDhyQuDhyAAihQAAiiODhyQODhyT3AAQT4AAODByQODByAACiQAABsmUBXQAOASAKAWQAFALgBAMQAAAJgDAIIgEAGIgEAAIgBgBIgCgCQANgigYgcQgDgFgCgFQgEgEgDgFQhNAQhbAQIgJgBIAAABIgEACIAAAAIgEAAIAAADIgCADIgBAEIAAAHIAAADQATAQAZALQCIA9AnCMQASA/AIBBQhPgkhSgggEAm1gEfIgIAEQg4AUgwAgIAAANIAAApIAFAHQATAoAcAiIgxAHIgEACQgMALgLAOIgCANQgDAkAHAfQAeAeAsAGQAkAEAdgLQA4gVgdg/IgEgHIgFgHIAAgHIAAgGIgSgYIgJgMQAbgBAZgLIAGgEQAggWgNggIgFgGIgNgGIAAACIgQADQgdAegpAGQgTgdgRgeQAtgUAwgUIAEgLQAHgPgJgMQgCgEgDgCIgNgGIgKADgEgp0gChIAFAGIAAAVIAAAUIAEAHIAFAGIAAAHIAAAHQATBBAzAWQAmAjA4gYQAEgJABgIQAAgigGgiQgjhIhMArQgFgOgBgNQgChGgxgkQhpAsh4ARQgCAHgBAHIAAAEIgFADIgBgBIAAABIgBABIgKABIgEACIgDAEIgEAHIABAOIABANQASASALAXQAxBdBUgeQAEgHABgHQACgRAAgQQgWg/g9AaIgGgFIgMgPQALgFALgIIAFgHIACgFIADgBQBOgVA/gJIAEAHg");
	this.shape_2.setTransform(-290.9,-185.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hesheitbubblestill, new cjs.Rectangle(-598.9,-236.7,616,104.5), null);


(lib.hesheitbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.instance = new lib.hesheitbubblestill();
	this.instance.parent = this;
	this.instance.setTransform(43,73.6,0.224,0.224);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:9.7,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.3,20.6,138,23.4);


(lib.HESHEIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hesheitbubble();
	this.instance.parent = this;
	this.instance.setTransform(89.3,-0.6,0.368,0.368);

	this.instance_1 = new lib.Hesheitfinger3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.9,5);

	this.instance_2 = new lib.Hesheitfinger4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44.3,7.8);

	this.instance_3 = new lib.Hesheitfinger2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(43.4,2.5);

	this.instance_4 = new lib.Hesheitsaxfinger1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(42.9,-0.2);

	this.instance_5 = new lib.Hesheitsetoffingers();
	this.instance_5.parent = this;
	this.instance_5.setTransform(43.8,16);

	this.instance_6 = new lib.Hesheitdog();
	this.instance_6.parent = this;
	this.instance_6.setTransform(84,32.3);

	this.instance_7 = new lib.Hesheitsaxcheek();
	this.instance_7.parent = this;
	this.instance_7.setTransform(43.1,-14);

	this.instance_8 = new lib.Hesheitguitararm();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-73.7,4.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AB3h4IgIAIIgKAIIgNAMIihB3IguAiQgFAEgFAFAhGA0QAEgEAEgEIAVgRICGhrIACgCQABgBACgBIADgDIANgKACChaIgZAUIh3BuIghAeIglAiIgXAR");
	this.shape.setTransform(-58.8,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("A0YuuIAAXYIAAAIIAAF9MAoxAAAIAAmSIAAgDIAA3I");
	this.shape_1.setTransform(-6.5,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AUZAAMgoxAAA");
	this.shape_2.setTransform(-6.5,-90.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC33").s().p("AgrD2IgHgCQg6gQgKhDIAAgCIAAgwQAFgcAHgbIAAgDQADgRAOAPQACACAEgCQAEgCACgFQACgFAAgHQgLgUgNAUIAAgBQAEgHABgJQAeACAGgUIAAgDQgCgTgTgDIAAgCQARACALgEIADAAQAJgLAKgJIAFgDIACAAIABAHIgBAIIgBABIAAABQgBAGgEAFIAFAAIAAAAIAAADIAAAAIgBgBQgDACgCAEQgFAMAGAMIABABIABAAIABABIAAABIACAAIABACIgBgBIAAgBIgCAAIgBABIgFAIIAAADIABAJIAGAGIgEAFIgBABIAAABIAAAAIgBABIAAACIAAAGQAEAIAHADIAEAAIABACIgCABQABADgBADIgBABIAAABQACAZgfgGIAAgCIgOgIIAAADQABAPAQABIABAAQgCAXAWAJIADAAQAuABARgcIAAADQAAAvAKAlIACAAQAJALABAUQgBAFgSACQgMABgKAFQgVAMgXAAQgLAAgNgDgAg1CmIAAAYIABAAQADAPANAEIAAACQAZAFAGgOIAAgCQgMgkgkAAIAAACgAg1A1IAAABIAAAAIAAgBIAAAAgABaDrQgQgHgDgVIgCAAIgCgFIAAgBQgRgnABg3IAAgBIABgHQADgCABgFIAAgDQARgOgOAdIAAACQALAqACA0IABAAIAAACIABAEQAKAYAQgSIACAAIAAgbIAAgCIABAAQABgxgTgfQgGgKgIgIIAJAAIADAAIAJANQARAZAHAkQAIAlgNAVQgGAMgNAHIgCgBgABdDWQgSgUABglIgBgDQgCgfgFgdQAeAXgCA4QAAAVgEAPIABAFIAAAAgAgMifQAQglADg0IABAAQAJAXgEAhQgDAZgQAJIgEABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_3.setTransform(44.3,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009933").s().p("AB7BhQgLgHgEgOQBKgmAhhMIABgDQAfAgAlAYIABABQgeAGgbAIIgDAAIgCABQhBAQghAwIAAADIgCgBgACPBSQAJgPAMAJQAGAEgCAFQgRAHgSAFQAFgFAFgKgAinBKQgNgMgGgUIgCAAQgfgdg2gHIgCAAIAAgBQgJACAAgHQA3goA5glQAJgGAGgKQAIgIADAKIAAACIABADQABASgDANQgCAVADAPIAAACIABADQAJAbARAUIgBABQgYAUgXAWIAAgCg");
	this.shape_4.setTransform(-73.4,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#996600"],[0,0.333],-661.6,-14.1,976.8,-14.1).s().p("AkOFxQiGgHgihwIAAgCIAAgRQAaBdBaAbQAmALAtgIIArgKIAAgDQBBgdAahDIAAgCQARgzAfgnQALgNASgFQAFAEgPAJQgUAMgIAYQgIAbgLAWIgBADQggBNhOAhQgYARgkAFIgLABIgDAAgAk3FhIgxgVQhIggABhnQAEAAgBgHIgBgCQAEgSAJgNIAMgMIACgBIAAAAIgBgBIAAgBIAAgBIAAgBIABAAIABgBIAEAAQABgCAAgDQACgCABgDIAAgBIADgDIAGgHIADgCIABAAIAEgCIAPgKIAAAAIAGgEIABgBIAAAAIAAgBIABAAIADgCIAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBIAAAAIABgBIADAAQAFgCADgEIADgCIAAAAIABAAIAAAAIADAAIAAAAIAAAAIABAAQAhgOAxADIADAAQAigRATgfIACAAQADgLgBgNIAAgCQAaguA9gLIACAAQgNAOgEAYIAAACQADAQAQAEIAAABQAhAAASgNIACAAIAAgDIAAgFQA+g3BDgyIACAAIARgRQApgnAwgeIACgBIhQBGIiTB9IgFAEIgEADIAAABIgKAHQgKAIgMAHIAJgDQAdgMAZgZIAZgYIBrhbIBQhGIARgEIADAAQgRAUgVARIgsAlIiyCTIgNAKIgCABIgBACIgDACIgDABIABABIACACIAKAIIAAAAIACACIAXgWQA0gwA5gvIAAgBQg+Atg+A5QgMALgHgGQAFAAACgDIAAgCQBFg4BHg2QAAAAAAAAQAAABABAAQAAABABAAQAAAAABABQAMgJALgKIABAAIAAgDIAlgfIBAg6IAAgBQgEgFAHACQAGgNAFANIABACQgkAdgjAfIgoAjIgCABQgfAhgjAdQgiAcgZAkQAAALAFAFIACABQARANAbgIIACAAQgCASgHANIgBACIgBABQgUAxhAADQgMAKgJAMQgdAigPAvIAAADIAAACIgBABQgpByiaAAIgIAAgAlZC8QAdAXAXAdIABABIABgCQAOgHgPgLQAIgCgCgDIgBgCIgCABQgIAIgEgQIABgBIABgBQA1gfAugmIACgBIgNAOIgHAHQgRAQgUARIgBABQAlgbAmgZIACgBIhFA9IgBACIAAACIAAADIBGg9IAIgJIAIgIIgRAFIgJAAICGhsIiGBsIgYAAIAAABQAGAEgNAKQgZATgeAMIAAgCQAdgZAggTIgIAAIgCAAIgHAAIAAABIgBACIAAAAIAAACIgkAdIgKAIIgEAEIgCABQgMADgPABIAAACIgCAAQgIgFgGAAQgJAAgJAIgAkADiIAAAHIAAADQA2gvA6grIAHgFIAEgEIgGgHIgCgCQgQAbggAYQgXARgVANIgSALIgCABIgDAAIAAAFgAj5DXIAAACIA1gqIglAiIAlgiIACgCQASgOANgOIB4hvIh4BvQAJgKAGgKQgsAjgoAoQgOAPgFgKIgCAAQgDAJAHABgAhYCbIAAAAIAAgBgAkSCIIANAAIAAAAIgBAAIgMAAgAjeCEICih4gAgvARIANgKIgNAKgAgiAHIAAAAgAgvAAgAglgHIgBABIgJAGgAglgHIAAAAgAEBj6QgEgJADgHIABgBQAEgKgDgJQgDgHgIgIQAYgRAdgNIAEgCIABAAIACgBIACgBIABAAIAOgFIAAgCQAZgLAdgGIAAgBIAEgBIABAAIAIgBIAAAAIACgBIABAAIACAAQANgDAOgBIABAAIANgBIACAAIAAAKQgCAWgGASIgBAAIgDAAQgOgCgPACIgKADIAAAAIgGACIgDABIgfAOIAAACIgCABIgIAGIgMAJIAAAAIgGAGIgIAHIAAAAIgCACIgDAAQgOgHgNADQgHABgHADIAAADIAAACIgCABIgCABIAAADIAAACQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIgCAAgAGIliIgHACIgBAAIgEABQgcAIgYALIgOAHIgBAAIgCABIgCACIgDACQgUALgRAPIAAADQAFAKADgCQADgCABgNQAEgBACgEQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAEAUADgGIAAgDQAIghAHAdIABAAIABgKIABgEIACgHQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQACAAADAEIADAGIADgBIABgCIAAgCQgBgFACgCIACgBQAWgOAagKIADgBIAJgCQAPgFARgDIAAgCIghAGg");
	this.shape_5.setTransform(-43.9,-4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996600").s().p("AgfBWQgEgbgSgaIAAgCIAAgCQANgHAHAXIAJAdQAFgRgPgVQgOgUARgBIABAEIABACQANAZALAaIAAACIgCABQgHACgGADIgBABQgFADgFAFIAAgDgAgGAsIgNgRIgEgGQgFgIAGgFQAHAAAAAGIAAABQAKALAFAOQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgCABIgDAAgAgKAOQgHgGgCgIQgBgEAEgCQAGAAABAGIAAAAQAGAEAAAHQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIgFAAgAAAgIIgDgGQgFgIAEgHIABgBQAGABACAIIAAAEQAGAGACAIIAAACIgCABQgIAAgDgIgAAQgMQgIgKgFgMIgBgEQgBgEAEgCQAIABACAIQADAIAEAGQADAFgFAEIgEAAgAAegcQgIgGgHgUIgBAAIAAgDQAAgKACgHQADgJAHgFIAAACIANAcIAPAZIgMADIgMgXIgKgUIgCgBQAMAZACAVg");
	this.shape_6.setTransform(-98.3,-48.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCF9C").s().p("ApyFNQgDAAgDgDIgBgDIAAgBQABgEADgEIgFABQgEgBgCgDIAAAAIgCgEQAAgEABgEQACgGAGgBQAIACACAJIABADIADAAQAGAAADAFQACADgCADIgEAGIgCACIgFADIgEABIgBAAgADME3QgPgGgRgDIgHgDQgDgBgBgEIAAgBQgBgKAJgEQAkABAeAOQACABAAADQABAKgIAEIgJAAIgRgBgAqZEwQgCgDAAgEIAAgBIABgEQAEgJAJAAQAMgCADAKIAAACQAAAJgIADQgDACgEAAIAAAAIgEABQgFAAgDgEgAKAEcIgEgHIgDgDIgFgCIgFgBQgBAHgIgDQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIAAgCIgBAAIgDACQgIADgHgDIgCgBQgDgHAGgCIADgBIADgBIAGgBIAAgBIAEgBIADAAQAMgBAMAEIACgBIACgBQAGAAAEADIAAABQAGgCAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAEAHgIADIAAAAIABAFQABAAAAABQgBABAAAAQAAABAAAAQgBABgBAAQgEAEgEgDIgBgBIgBgBQgBAEgGABIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAGgEWIgDgDIgBAAQgGgBgCgFQgCgDADgDIADgCIABAAIAAAAQAAgEAFgCIACAAQAFgBADABIACgDIAEgCIANgCQAHgBADAEQACACABADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQgEAFgGgEQgFACgFgBQACAEACAFQAAABAAAAQAAABAAAAQAAABgBABQAAAAgBABQgEAEgFgEIgCgCIgBABQgBAEgEAAIgEgBgADyDdIAAgIQADgJAKgDQAQgGAQgHQANgIAMgJIALgKIAEAAQAUACgKATIgFAHQgFAHgJAFIgKAFQgYAOgaAKIgHABQgIAAgBgKgApekvQgMgDABgKQAAgEACgFQABgFAEgCQAKABAFAFIgBACIAAABIgCAAIgDABQgKAFAEALIACADIgBAAg");
	this.shape_7.setTransform(-38.7,39.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#0066FD","#CCCCCC","#FFFFFF","#FFFFFF","#FFFFFF","#996600","#FFCC00"],[0,0.184,0.788,0.937,1,1,1],42.1,15.8,42.1,15.8).s().p("AAAAlIgBgDQgEgDACgFIABgCIAAgBIACAAQACgCABgCIAAAPIABAAIAAABIABACIAAACIgFgCgAACAOIAAAAIgDgDIgBgBIgCgDIAAgDQABgGADgFQAAAHACAGIAAADIAAAGIAAgBgAgCgRIAAgCIgBgBIgBgDIAAgLIABgBIACgDIAAAWIgBgBg");
	this.shape_8.setTransform(42.1,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC6633").s().p("AB2CjQgKgDgSAEIgCAAQg5gBgmgSIAAgIQAVgPgBgcQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAYgSgIgaIABgCQAJgIAHgLQAMgQAFgWIgaAfIgGAHQgJANgCAMQANADgLAKQgTARAFASIgBACQgMATgSAPIAAADIgCAAIgCAAIgDAAQgcAGgdADIgCgCIgBgCQgMADgIgFQgJgFgOgDQgHgEgIAFQgHADABgDQAEgQgHgEQAfgKApgBQALAAALAEQAGgGAFgGQgCALAJAKIAfgCQAOgBABgQIAAgXQAAgVgUABQgHACAAAIIgBAIQgGAFgJACIACgEIABgCQAAgVALgTQAEgHgDABQgDAAgCAFQgDAIgEAHQgKAUgfgBIgCgBQgQgEgSgCIgBgCQgSgNgNgSIgHgLIAAgCQgEgKgFgIIAAgDIAAgTQALggAigKIAAgBQAmgEAQASIACAAQACgGAPANQATATAJASQgEAOgOAEIgBABIAAgBQgXgIgNgSQgNgRgSgOQAHAOANAOIAAAAIAKAKIARAPIAUASIACAAIABgCQAHgHAJgFIABgCQAJgPAHgSIAAgDQgDgSgGgPQABgEAAgFIgBgDIAAAAIgBAAIgEgFIgIgHIgBgDIgCgFIAAAAIAAgDQgCgIAAgKIAAgBIAAgBIAAgCIgCAAQgEAAgEgBIgBgBIgBAAIgBgBIgBgBIAAgCQgBgCAAgEIAAAAIABgLIACgPIACgEIAEgCIAiABIAKABIANACIAMAAIBZABQADAAAEACIAEACQAMADAEAMIAAAAIABAGIAAAEIAAADIAAAAIgBAEIAAAMIgBAIIgCALIgCAKIAAgKQABgIgGgCIgCABIgBABQgDAJABAKIgBAGIAAACIABAFQgFAVAJAIIgBACQgEAZgKALIAAACQgDACgBAFQAAAGgDADIgFAGQACgVgTgBQgEABgEAEQgDAEgBAFIgFAGQgCAEgEACQgNAGgBAMQgCALgEALQgHAXAZAAQAEgDADgEQAFgGgCgIIAHgHQAOgKAHgPIACgEIAEgBIgBADIgBADIAAAAQgPApgjAgIAAAKIAAACQAZAPAsgFIADAAIACAAQAHAIAFAIIgCAAQgdgGARAQIAAAFQgDABgDAAQgFAAgHgCgAh2ggQgFAGgBAIQgDATAPAMIgBATQgBAWAXABQAFgEAIAAIANgBQASgEgDgTQgBgMgHgIQgHgIgMgFIAAgCIAAgCQgDgGgDgFQgKgOgVgBIgEAEgACgCCIgCAAQgJgCgGgFIgmACQgWABgKgIIAHgFIABgCQAWgSAjAGIADAAQAjgBAeAGIACAAQAZAHAMAVIABABQgPgBgNADIACAAQAOAKgRACIgCAAIAAgBQgIgBgGgDIAAADIAAACIAAAAIgBABIgBAAIgMABQgXAAgEgTgAC2BvIgBAAQgEACgCAFQgDAIAHAGIACACIAiAAQAGgDABgFQABgFgEgDQgLgJgOAAIgMACgAjCBvQgCgLgLAEQgUAIAGgIQAJgCAFgGIABgCIgnAFIAAgCQA/gcBRAFIAMABQAEAEALgCQAXgFADAIIAAABQgkAag8gIIAAABQgSADgEAPIAAABIgQACQgRAAAFgKgABfBZIATgTIApgqIAOgOIAAgBIgVAPIgIAGQgPANgOAPIgCABIAagjIAdgkIABgCQgLAHgJAJIgHAIIgCABIAHgLQALgPAPgOIAAgCQgQAHgPAUIgCgBQARgyBDAAIAAABQAaAIgCAiQgHATgSALIgJAGQgJAJgFAOIgDACIgFAEQgTAEgCAQIgCABQgPARgdgIQAXgUAUgYIABgCQgTANgWAWIAAABIgCABQgHAOgKAAQgEAAgGgDgADOgeQgJAFACAJIAAACQgLAIgGAMQgEAJAFAHQAGAKAMgEQAJgEAGgHIAGgIQADgBACgDQALgLgGgRQgCgEgDAAIgUgDIgBAAg");
	this.shape_9.setTransform(77.1,58.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFCC00","#FFFFFF"],[0,0.502],41.4,33.1,0,41.4,33.1,0).s().p("AgKAGIgEgEQgCgCACgEQAOgQAOAQIACAAQABARgKAAQgHAAgKgHg");
	this.shape_10.setTransform(41.4,33.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7AOIABgDIgBgLQALgFALATQACAFAJgDQAFgCADgFQAHgOgTAQIgCAAIgTgSIAAgCIAdgOIAEgBQAXACgFAdIAAABQgPATgQAAQgNAAgPgNgAApgEQgHANgKgKQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgHAXgFgdIAAgCIACgBIAAgCIACAAQAKgPAbABIAAACQARAQgPARIgKAEIgCABQAIgMgIgGg");
	this.shape_11.setTransform(47.2,-21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("Ai+CtQgLgKgJgNIAAgDIAAgwIAJgcIABgBIADAAQAKAGALAEQAgAMAqACIABACIAFAIQACAUAaABIgEACQgIAFgFAIIAAABQgZgUgvAMIAAABQgLAHgIALQgHAKgFAMIgCgBgAB7gIIgbAAIAAgBQgLgHgRABIgBgBQgYgOgZgLQAKgUANgRIAAgCQAlgEASgiIAAgDQARgZASgZQADgFgBALIgBAGIAAACQgBAWgIAOQgDAUAIAKIAAACQAMAGATgBIADgBQAbgSATgbIACAAIABAAQgBAJgIADIAAACIgBABQggAjgUAwIAAADIAAACIgBAAQgGAPgQAEIgDAAgAgghUQgPgKgCgWQAJgKAEAHIACABQAUATgQAQIgCABIAAgCg");
	this.shape_12.setTransform(17.2,5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("ArHJvIAEgFIACgBQAGgFAKABQAJAAAFgEIgCAAQgVgKgUgMIAAgCQAlABAggFIABgBQAmgGATgYQASgXATgUIADgGQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQgBgGgDgDQgDgDgFAAIgCAAQhDhOhYg4QgcgTgggPIgCgBQgmgRgRgmIAAgCIAAgCIA5g2IBEhBIAAgBQA4ACAeAnQALANgDAMIgDABQgCgLgJAFIgBABQgkAbgpAXIgCAAIgCABQgQAEgIAMQAvAZAoAhQANALANANQAiAzAnAuIAAABIABAAIATAVQAmApAqAkIACABIAAABQAUALgGAYQgWARgmgIQgjgIgdAKIgLAEQgUAIgTAKQgbAPgdgFIgBABQgLAHgKAAQgMAAgMgLgADSJjIgCABQgRAHgbgDIAAgBQgSgGgQgIIAJAAQAIgEgBgJQAAgDgCgCQgegOgkAAQgJAEABAKIAAAAQgJABgMgBIAAABQgJAAgDAGIgTABQgcADAAgXQAKgUgEghIgBAAQgEgTgIgPQgHgLgIgKIgwg2Qg3g8g8g5IAAgCIAAgnIgCAAQgZgXgegRIgBgCQgNgHgIgNQAegWAsgIIAAgBQAYgLAPAIIgCADQgEAFgGACIgBAAQgBgJgIgBIAIAMIgBAAIACACIAfAxQAyBPA3BKIACAAQApBNA2BAIACABQAdASAgAOQAcAMAeAKQAdAJASgRQAYgLAEAXIAAACQgbABAIAJIAFAAIAHAAQAZAOgggCIgCAAQgCAHAKAEIgIABQgRADAWACQAGABgCAIIAAABIgLABQgQAAgLgMgAH0I7IAAACIgCAAQgngHgagTIgCAAIguAAIAAgDQAAgTgKgKIAQgNQAZgUAVgWIABgCQAXgWAMgiIABgCQAOgYAHgfIAAgCQASgKAIgTIABgDQABgEgBgEQgihVg5g/QgFgLgIgHQgXgSgKgfQAHgWATACIAAABQA0AxAyAzIACABQAqAxAnA0IAAACQABAXgLAMQgfAjgYAoIgBABQgEAFgHACIAAACQgEAKgIAHIAAACIAAACIgyA+IgXAaIgDAEIABAJIABAAQAaAcAsAHIAFAAIgDABIgDABQgGADADAGIACACQAHACAIgDIADgBIABgBIAAACQABABAAAAQAAABABAAQAAAAABAAQAAABAAAAQAIACABgGIAFAAQAEAIgCAEIAAACIgDAAIgIAAQgQAAgMgEgAEJI2IgBgCQgHgKgOgFIAAgBIgQgEIgBgBIgOgLIgCAAQgzgBgmgNIAAgDIALgIIABgBIASgDIAAAIQACAOAOgGQAagKAYgNQAJAUAWAGIA1APIAAABIAPADIAAAAIATABIgCADQgDgBgFABIgCAAQgFABAAAEIgBABIgDABQgDADACADQACAGAGAAIABABQgNAGgOAAQgOAAgQgFgAFPIcQANgFALgIIAAgBQAQgDAFAJQABAIgGAAIgNAAQgDgDgHABIgNACIgEACIAAgCgAD2HXQAKgSgUgCQAdgSAagUQA4gnAzgtQAUgRAZgNIABAAQAGgMgYgHIgBgCQhCg7g6hEIgBgCQgFgGgEgGQgEgJgDgLIAHgMQAJgNAKgJIABgCQAYgHAYAHIACAAIBEBTIACABQAwA9AlBJIgDAPQgwAtg9AgIAAACIgCABQg1Ahg6AcIgrAUIgCAAIgFADIAFgHgAF3AjIAAgCIAAgWQAFgGgCgMIAAgCQAYhIAqg1IABgCIACgBIAng3QgGABgDAFQgTAjgUgdIgBgBQgDgCgBgEIAdgSIACgBIABAAQAtgkBIACIACAAIAAAAIAAABQgHAegQAXIgBACIAAACQgRAXgbAOIgBABIAAgBIAAgBQAMgPAJgTIgCABQgcAdgXAjIAAAFIAAACIgBABQgaArgSAyQgCAMAFAGIACAAQBZgJBVgbIABgBIAYgHIACAAQAHgHAIgFIACAAIAJgpIABgDIAGgFIAAAAIABgCIAAAAIAAgBIABAAIAEAAIAAgBIAAgDIADgBIAPgEIAIgDIAKAAIAAABIABABIAAABQgCADgDABIAAAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAABIgBACIAAAAIgDAAIAAABIABAFIgBAAIAAABIgBAAIgBABIAAAAIgBABIgDAAIgCABIAGAAIABAAIAAgBIABAAIAAAAIAAABIABAAIAEABIABABIAAAAIAGAHIADAGIAAABIADABIAAABIAAABIAAABIAAAAIABABIAAABIADAAIAAAAIABgBIAAABIAAAAIABABQgIAEADAJIACADQAAADABADQABADADABIAGABIgKgBIAMADIAEACIgBABIgCACQgDAKAAAKQgMgDgIAFIgIgDIgBgHIgCAAIgEADIgCAAIgFgGIAAgCIgLASIgCABQgaALgRgQIgDAAIgRAIIgOAEIgCAAQhbAghoATIgCADQgKAEgHAAQgRAAgFgTgAK7hGIAHgCIgJAAIgBAAIADACgAJ5AZIgBgCQAWgXAVAYIAAACQgLAKgKAAQgLAAgKgLgAFrAaQgogBgggLIgCAAIgBgCIgQgKIAAgCQAIgZALgWQAMgWAOgRIABgCIACgBQAmgtAxgiIABABQAOAPALASIgBACQgyA+gQBgIgDAAgAHEgCQgHgBACgLIAAgCIAAgDQAQglASgjIAAgCQAjAKAbATIAAACIhWA7IgCABIgDAAgAqjgIQgEgCgCgDQgDAFgJgDIgDgCIgBABIAAgCIABAAIgCgDQgEgLAKgFIADgBIACABIAAgCIABgCQgFgEgKgBQgEACgBAEQgCAFAAAEQgMgggEglQgJhXgChdIAAgOQgBgyABgzQAGgcAaAMQAZALAWgJQAFgMABgLQAAgHgCgIQgDgLgJgLIgBAAQgJAKgNgFIgCAAQgVgMgDgdIAAgDQAHgNAWABIACAAIAAACQAFgEABgEQABgIgJgMQgCgNADgHIABgDQgIAIABgTIAGgFIABgCQAVgUARgXIAAgCIAMgDIAAAAIAAAAIAIgCIAMAUIgCADQgJAKALAIQAGgZAEASIAAAHIgBAEQgBASAGgVQAFgPARgBQAUANgOAZIgCABQgDASAOgZIABgBQAJgFANANQAJAIAGAKIABACQAOAYAEAiIAAADQgJAZgWAMIgBACIgCAAQgcAKgqgDIAAgCQgNgIgNADQAPAPAhgBIACAAQAFAPAHAMIAAACQANAhAagfQAGgHALgCQAWADAVAGQAmALAkAQIAnASQBNAhBSAZIAGABQASAEAVgEQAygJApgSQAvgGAmgNIADAAQgWAQgSASQgMALgOAKQgyAjhJAMQgLABgHgBIgXgFIgIgCQgjgIgggLIg/gVQgygRg0gOIAAgCQgLgegWgTQAWAnATArQAlBUAYBiIABAAIAAAFQAAAFgDACQgVAVgxgGIgEADIgGACIAAAAIgBABIgPACIgDADIgFADIgCAAQgDADgDABIgBAAIAAABIAAABIgBAAIgCADIgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAIgBABIgGACIgCABIgFAEIABAAIgEACIgDACIgDACIgEACQgMAJgGAOQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABIgDADIgEABIAAgCIgCgFIgCgNQgCgLgFgKIgBgCQgCgIgDgHIgCgBIAAgBIgBgBIgBgBIAAAAIAAgBIAAgBIAAAAIgBgBQgVgogYglIAAgBQgBgCgBgDQgVglgXgkQAAgYACgYQABgKgBgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQgCADgFALQADAtABAzIABAAQAAA/AQAtQADAEAAAGIABABQADAEAAAEIABABQAEACACACQADAGgFAHQgCAEgFAAIAAABIABAHQAEAKgKADQgDACgDgBIgDgBQgCADgEAAIgGgBgAownwIABgCQAKgHAHgLQAGgLADgPIgCAAQgKAbgWAOQgggBgRgRQgYgagIAbQADAGADgGIABgCQAbAYA2AAgAqeo+QgGAEAAAIIgBAJQAAAEADADIACAAIABgBIABgBQgBgIACgIIABgBQAHgJAMgCIABAAQAFgBAFgCQABAAABgBQAAAAAAgBQAAAAAAgBQgBAAgBgBIgNAAQgKADgJAGgAJ/g0QgEgGAAgHIAAgdIAAgEIAAgOQAMgYARgTIACgBQAKgQACAEQAFAJAAAKIgCABQAAAUgDAQIgCAAQgSARgCAhIgBABQgHALgFAAIgEgCgAL9hIIACAAIgCAAIAAAAgALbhUIAAAAIAAAAgAMCheIAAAAIAEAAIAAAAIgEAAgALbhfIAFAAIAAAAIgCAAIgDAAgAJXicIAAgCIAAgOQAIgTADgZIABgCQAUgNANgVQAHgJAFgMIACgDQAAgCADgCQACgDAFAAQgBgHgHAAIgBAAQgFAAgJAEQgLAFgGgFIgEgEIgGgHIgBgCQgCgHAAgKIAAgIQADgFADgFIAFgEQAIgFAKgCIADAAQAQAIAHACIgCgCQgCgCAAgEQAOgTATAWQACADAEABIACAAIgBADQgBAFgDAEIABATIABABQAGAJAHAFQAMAHATgFIAAAAIAIgCIADgBIAAgBQARgMAdABIAAABQgEAHgGAFQgIAIgMAEIAEAAQAXgCAMgKIACgDIABABIAEACQALAFADAMQACAHgBAKIAAACQgMAdgcANIgBAAIgGADQgOAFgPACIgBAAIAAgVIgCAAQgMgDgFAFQgGAEABALIAAABQgdAMgXgUIAAACQAAAEgFgBIgEAAQAEAHgMAFQAAASgWASQgMALgNAAQgKAAgKgHgAB3kzIgDAAQgOgGgHgNIAAgCQAfAFARgHIAAACQAOAEgEANIgBACQgKADgNAAIgKgBgACnlSIgiAAIAAgBQgWgFgJgQQAFACABgEIABAAQAwgEATAXIgCABIgFAEIgCAAgAL6lgQAEgBAAgEIABgDIACAAQARgSAaARIAAABQgLAIgOAHQgFACABgMQgIgJgEAVIgBABQgDAAgFgKgAAflhQgIgNgDgSQAnACAdgIIACgBQAPgSAGAQIAAACIAAACQgVAagngJIAAAFIAAADIgBAAQgGAJgMADIgBgBgACFl7IAigHIACAAIAdAMIACAAQAMAFgJAHIgDADIgMAAQgfAAgYgUgAB+mVQAEgBAAgEIABgCIAwAEIACAAIAAACQATgEAAAOIAAACQgMACgMAAQgaAAgYgNg");
	this.shape_13.setTransform(-29.6,10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AiKBLIgEgJIAAAAQgDgJABgIIAAgDIAAgBQACgJAHgIIABAAIAAgBIABgBIABgBIABAAIAAgDIAAgCQASgQASADIABAAIABAAIABAAIAAAAIAAABIABAAIADABIABAAIAAABIAAAAQACADgBADIgBADIAAAAIAAABQgDACgFADIgBABIgEABIgCAAQgQAaANAWIAAABIgUgDQACgTAAgUIABAAIAPgNIAAAAIAEgDIABgBIAJgJIABAAIgBAAIgBAAIgBAAQgWAFgLARIAAACQgBAJgEAIQAAAHACAGQABAFADADIABABIAAABIAAABIABAAIgNADgAhlBMQAAgGgDgQQAEgNAIgIIABgBIABAAIAAAAIAAgCIAFgFIABAAIAAgBIAIgKIABgBIAAAAIAAAAIACAAIABACIACACIACABQACgFAEABQADABAFAHIgGgLIgBgCQgDgIAFAAIABAAIACAAQgBAJADAEQACADAEgCIgBAAIgBgGIgBgIQAAgNAEgPIAAgCQAqgpBGAMIADAAQASAKAGAXIABAEIABADIACABIAAACIAAACQgDALgGAFIAAADIgBABQgQAQgRAOIgCAAQgVAJgbADIAAAAIAAgBIgBgBQgWgOgMgZIgBAAQANAfgWAFQgHgDgEgEQgEgEgDgBQgFgCgDAHQgDAGgEAFIgBABIgCACIgCACIACgHQACgPgFABIgBAAIgFACIAAACIAAABQABAFgEAAQAAARACAQIAAABgAh9BJgAirAxIAAgVIAAgBIAAgOIAAgDQAGgTAUgHIAAgBQAXgCASAEIACAAIANAGIAEABIgBAAIgMAAIgDAAIgiAAIgBABQgNAEgIAGIAAACQgFAKgCAMIACAPIAAACQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIACgEQADgGAAgOQAAgEAEgFQAKgOAcACQgJAKgUAKIgDABQgCANgFAKIAAAAIAAABIgDAFIgDADIgBAAIAAACgABZANQAIgJAEgMIAAgCIAGgRIABAAIABAHIACAAQAHALgDAQQgDAQgIAAQgGAAgJgKgACjgQQgHgTgUgEIgEAAIADgBIAAAAIACgBIADgBQAWgCAJAKIABAAIAAAAQgFAPACACIgGACIAAgBgACjgwIgCgBIg5AEIAAgBQALgIAPgFIAAgCQAdgEAKANIACABQADAIgDAAQgCAAgGgFgAhDg6IAAgBIAEgDIACgBQATgBANAEIABAAIAAAAIABACIgCAAQgHABgXAAIgHABgAgbg9IgJgFIgBgCQgUgBgLAGIgCgFQAEAAAHgEQAFgDAHAAQAQgBAKAFQAFACADAEQgDAFgFAAIgGgBg");
	this.shape_14.setTransform(40.3,-28.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C6FFFF").s().p("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IgDADQgbglgXgoIgBgBQhHhgg+hoIAAgCQANgLAIgNIAAgCQgtgZgagrIgBAAIABgBQADgBgBgGIAAgCIAAgCIASgrIABgDQAxgcAngmQAHgGADgJIACgBQAJgWAEgaIAAgBQgQAEgSADIgCgBIgRgMIAAgCIAAgFQBQhVBZhLIAXgSQAIgHAQABIAAAAQABAAABgBQABgBAAAAQAAgBAAAAQAAgBgBAAQgCgCgKAAIAAgBQAOgVAWAAIADAAQAJANgfgCQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAABIADAHIABACQAIANAQAGIAAABQAfADAPgKIACAAQABgSgGgHIAFABQAHABABgEQAUgCgBgNIAEACQAKADAHgJQAKgRgMgJIgCAAIgCAAQALgXgUgHQgFgDgIgBIgCgBIgBgEIABAAIACgDIAEgDQADgCACACIACgCQANgPgFAUIgCADQAAABAQgHIAAgBQAXgIgEgVIAEgBQAEgCADgEQAQAFARgBIgEAAQgMALgKgCIACACQACACAEAAQASgBAFgOIABgCIAFAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABgDIAAAAQAOgagFggQgGgEgKADQgaAJgGgTIAAgBIADgDQABAAAAAAQAAgBAAAAQAAgBAAAAQgBgBgBgBIAAAAIgEgDQgUgMgLAcIAHAFQAFAEADgDQAIgEAEACIABACQABADgBADIgDACIgGABIgCAAIgBAAIgEAAQgEABgGACQgXAKgFgPIABgCQAJgJgMAEIgBABQgYAVARgZQAIABADgFIABgBQgSgIgKAZQANARgNADIAAABIgDABQgVAOgDgMIAAgCQAIgZgZAIIgHAFQgWAUAbAIIAEAAQgPANgSAMIABABQAOALAEAVIAAACQgWAJgQANIgCAAQgkADgbAAIAAACIAMAiQggALgiAKQhGAVhSAKIicg5QgugSgsgWQgigRgzgEQgMAMgNAJQgMAHgGgQIgBgEIAAgCQgFgIgCgLQAbAAAQgLIAAgCIACgBQAVgOALgXIAAgCIAAggIgBAAQgSgugngXIAAgDQAAgTgTgDIgHAAIgFAAQgNgJgXgMIgHACIAAgCQgJgkgWgYIgCAAQggBUg+A1IAAACQAQARALAYIACAAIACAEIADAFQAIAUAIAQIACABQAHAHAJAFIAEACIACABQAKAEAHgKIABABQANAUgHAWIgCAFIgDAAQgQABgRgDIgYgFIgCABQgHAGgIAFIAAAMIAAADIAABkIAAAPQACBQAEBPIABArQAJAeAOAZIABABQADAIAGAFIADgJIAAgBIADACQAJADAEgEQACACADACQAIAEAFgGIACABQAEABADgBQAKgEgEgKIgCgHIAAgBQAFAAADgEQAEgHgDgFIAAgBQABgGgEgFIgBgCIgEgPIgBAAQgNgwgDg5IAAgDIAAgYQAqA6AhBDIAAAAIAFALIAAAAIAAACIAAAAIABACIAGAIIABAAIAJAWIAAABIABABIACAKIAEARIgBAAIgBAEIgDAEIgBABIgLAFQgIAOgQAIQABAHgDACQg7AthAAqIAAADQgUADANADQAKADgNAFIABAEQgUAcgWAZQgdAgghAdIAAACIAAACIgCAAQARAtAsATIADACIAbALQAoAjAvAbIACABIA9A7IgBABQghgJgkgCIAAABQgwAFgvAJIgBABIgBABQhWAZhWgYQgDgDgEgCQgkgRgoALIgCACIgKAHIgIAFQgGAGgHADgAIVDEIADgBIgCAAIgBABgAHzC3IAAAAIAAAAgAIbCtIAAABIADAAIAAgBIgDAAgAH0CsIAEAAIAAAAIgEAAgAC0LRIAAABIhsAEQA0gaAwgeIABgBQAqgWAjgdIACAAQgEAUgKAaIgBACIAAACQgSAbgUAaIAAADIgCAAIgBACIgQgFgAtVJjQgRgcgdgPQgegOgZgUIAQgIIABgBIBSguQAGgDADADQAUgIAOgOIAcgaQAxBDBtgIQAPgBAPgEQAQgFAMgGQAGARAPAHQgBACADACIAGAAIAXgHIATgGQAEgCABgEIAAAAIADAAIADAAQAbATAYAWIACABIAAAmIAAACQBIBFBDBKIgCABIiagBQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQiiAEieABQgrgxgmg3gAD5EAIBGgxIAAgCQA1AOATghIAAgCIAAgDQAEAAAAgEIABAAIAAgDIACADIAAAEIgBAOQAAAKACAJIADAEIAAACIgBAAIgBABQgmANgpAJIgCABQgcAMggAAIgKAAgApYCiIgBAAIgBgCQgahhglhVIgIgTQApAGAnANQAhALAfAOIACABQApAJAlANIAZALIADAAIBYgTIADAAQgwAyg6AnQgFAEgJgCQgJgUgCgcIABgHQhLgBgbA9IgBAAIAAARIAAACQgLAYgZAIg");
	this.shape_15.setTransform(-6.5,-15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CC33").s().p("A0YDXIAAl8IAKAAIACACIAJABIABgBIADgEQACgEADgCIAHgFIAEgEIAGgDQAkgPAlARIAIADQBZAbBZgYIABgBIABgBQBSgSBQAFIAAgBIABgBIAfAfIABABIAAACQgIAogZAXIgCAAQgSAHgQAJIgDAAQgOgBgKAEIAAACIgCAAIg6AAIAAgBQgRgNgQAJQgCAKADADIAAABQAAAEACADQAEAGAHgDQgEACgDAAIADADQACACAFABQAHADADgDIAAAAQADAEADAAIACAIIAAADQADADADAAQAAAAAAABQAAAAABAAQAAAAABAAQABAAABAAIAAACIgCADQALALAUADIADAAQALgDAKgFIAAgCQBAADAmgjQAGgFAMABQAyADA4gEIACgBQAIgJgBgRIAAgDIgWgcQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgCAAQgugqgpguQCgANCkgIQBIgEBHAGQAHABAEgIIgDgFIgBgCIACgCIAOAPQAaAcANAoIAAACQACAbgHARQAFAqA0gRQALgEAQAAIAMACQARADAQAGQAXAIATAOIACABQAdADATgHIACgBQARAUAUgIIADAAQAUgVgGglIAAgCQAYAGAdABIACAAQAQgJAXgDIACAAQAEgJAKgEIAAgBQA8gCAjAWQANAIAUABQAMALAVgGIADgBIACABQAeADALgQIABAAQAIgdgcAFQgGAAgDgCQgNgHgfACIgWgDQgggGgNgYIAFgGQAWgaAVgaIAAAAQAcADAdABQAJAAAFgEIAGgDQCSgNCVAJQAMABANgBIABgBIABgBIAJAAIAAAcIAAADQAFAMAIALIABABIABACIADAEQAPASARAQIgCABQg0AEgxAHIAAACQgTAFgKANIAAACIgCAAQAAAXAUgEIAJAAIAVAAQALARAdACIACADQAFAJAPgCQAzASBIgNIACAAQArAVA/AAIACAAIAiAFQANAFAEgIIACgJIATACIAAgEQAWgEAmAAIAAgBIAFAAQAFAAACgCQAMgMAHAHQAIgNgOgOQgegdg3gEIAJgFQAXgSAOgcIACAAIAOgKQARgPAKgXIAAgCQgBgKgDgJIAEAAQAlADAmACIABABIABACQAcAAAbADQASACASAEQANADANAFQAMAEAIgFIAEAAIAAGRgAhohzQghgLgcgTIAAgCQgZgdgXggIAAAAIADgCIBdAEIAjACIACABQAiAFAhgCIguAcIAAADIgCAAQgfAKgZAQIAAAHIAAADQAFAIAKAFQAKAEAOAAQAWABAcgCQAJAJAMAFIABABQgFADgFAAQgwgCgogOgABih5IgYAAIgCgBQgagMgigEIgBgCQgLgHgJgKQANgIARgFIABgCIAmgSIAHgEQA6ADA6ABQAFAAADgBQgUAVgXATIgQANIgCAAQgQAHgNAKIgDAAg");
	this.shape_16.setTransform(-6.5,76.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AO9KfIgigFIgCAAQg/gBgrgVIgCABQhIAMgzgRQgPACgFgJIgCgDQgdgDgLgQIgVgBIgJAAQgUAFAAgXIACAAIAAgDQAKgNATgFIAAgBQAxgHA0gFIACAAQgRgRgPgSIgDgEIgBgCIgBAAQgIgLgFgNIAAgCIAAgcIAAgBQAPgeAggMIABgBQBKACAnAmIACABIgGgXQgGgBABgHIAAgFQgKgGgEgLQgEgLAAgNQgKAAgDgJIAAgCIgBgGQgBgJADgIIABgBIAAAAIACAAQADABABADIgBAKIAAAAQAAAEABADIAAABIABABIABABIACAAIAAABQAEACAEgBIACADIAAABQAAAKACAJIAAACIAAAAIACAGIABACIAIAHIAFAFIAAAAIAAABIABACQAAAFgBAFQAGAPADARIAAADQgHASgJAQIgBACQgJAFgHAHIgBACIgCAAIgUgRIgRgRIgKgKIAAAAQgNgOgHgOQASAOANARQANASAXAJIAAABIABAAQAOgFAEgPQgJgSgTgTQgPgNgCAGIgCAAQgQgSgmAEIAAABQgiAKgLAgIAAATIAAADQAFAJAEAKIAAACIAIALQANASARANIABACQASACAQAEIACABQAfABAKgUQAEgHADgIQACgFADAAQADgBgEAHQgLATAAAVIgBACIgCAFQAJgDAGgFIABgIQAAgIAHgCQAVgBAAAVIAAAXQgBAQgPABIgfACQgIgJABgMQgFAHgGAFQgLgEgLAAQgpABgfAKQAHAEgEAQQgBADAHgDQAIgFAHAEQAOADAJAFQAIAFAMgDIABACIACACQAdgDAcgGIADAAIACAAIACAAIAAgDQASgPANgTIABgCQgFgSATgRQALgKgNgDQACgMAJgNIAGgHIAaggQgFAXgMAQQgHALgJAIIgBACQAIAagYASQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQABAcgWAPQgFADAFAFQAnASA5ABIACAAQASgEAKADQANAEAFgDIAAgFQgRgQAdAGIACAAQgFgIgHgIIgCAAIgDAAQgsAFgZgPIAAgCIAAgKQAjgfAPgpIAAgBIACgDIABgDIgFABIgCAEQgHAPgOAKIgHAHQACAIgFAGQgDAEgEADQgZAAAHgXQAEgLACgLQABgMANgGQAEgCACgEIAFgGQABgFADgEQAEgEAEgBQATABgBAVIAEgGQADgDAAgGQABgFADgCIAAgDQAKgLAEgZIABgCQgJgIAFgVIgBgFIAAgCIABgGQgBgKADgJIABgBIACgBQAGACgBAIIAAAKIACgJIACgMIABgIIAAgMIABgEIAAAAIAAgDIAAgEIABAAIACAAIABABIAFAGIAAAFIgBAIIAAAAQABAMgDALIgDAOQgBADgDABIgCAAIgDABIgBAGIAHAcIAAgBQAPgDAHgLIACgBQAkgMAYATIACABQAGAHACAKQADAJABAKIAAACQgKAXgRAOIgOAKIgCABQgOAbgXASIgJAFQA3AFAeAdQAOAOgIAMQgHgHgMAMQgCADgFAAIgFAAIAAABQgmAAgWADIAAAEIgTgBIgCAIQgCAGgGAAQgEAAgFgCgAPfJxIACAAQAGAZAhgGIABgBIABAAIAAgBIAAgCIAAgDQAGADAIABIAAABIACAAQARgCgOgKIgCAAQANgDAPABIgBgBQgMgVgZgHIgCAAQgegGgjABIgDAAQgjgGgWASIgBACIgHAFQAKAIAWgBIAmgCQAGAFAJACgAJ+JeQgHAOAjgGIAAgBQAEgPASgDIAAgBQA8AIAkgaIAAgBQgDgIgXAFQgLACgEgEIgMgBQhRgFg/AcIAAACIABAAIAmgFIgBACQgFAGgJACQgGAIAUgIIAFgBQAGAAACAIgAPqH9IgOAOIgpAqIgTATQARAKAKgVIACgBIAAgBQAWgWATgNIgBACQgUAYgXAUQAdAIAPgRIACgBQACgQATgEIAFgEIADgCQAFgOAJgJIAJgGQASgLAHgUQACgigagIIAAgBQhDAAgRAyIAAADIABgBIABAAQAPgVAQgHIAAACQgOAOgMAQIgHALIACgBIAHgIQAJgJALgIIgBACIgdAlIgaAjIACgBQAOgOAQgOIAHgGIAVgPIAAABgAuXKXQgUgCgLgMIACgCIAAgDQgBABgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQADAAADgCIAEgCIgDAEQAUAUAZgQIAAgBQAeAFAbgPQASgKAVgIIALgEQAdgKAiAIQAnAIAWgRQAFgYgTgLIgBgBIgCgBQgqgkgmgpIgTgVIgBAAIAAgBQgngugigzQgMgNgOgLQgoghgvgZQAJgMAPgEIADgBIACAAQApgXAkgbIAAgBQAKgFACALIACgBQAEgMgLgNQgfgng3gCIgBABIhDBBIg5A2IAAACIAAACQARAmAlARIADACQAfAPAcASQBZA4BCBOIADAAQAEABADADQADADACAFQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgCAGQgUAUgRAXQgTAYgnAGIAAABQggAFglgBIAAACQAUAMAVAKIACAAQgFAEgKAAQgKAAgGAEIAFgGQABgEgCgDQgCgFgHAAIgDABIAAgEQgCgIgJgCQgFAAgCAGQgCAEABAFIABAEQgDADgHgEQgFgBgCgCIgDgDQADAAAEgBIABgBQAEABADgCQAHgEABgIIAAgCQgEgKgLABQgJABgEAIIgBAFQgDgDACgKQAQgJARAMIAAACIA6AAIACAAIAAgDQAKgDAOABIADAAQAQgJASgHIACgBQAZgWAIgoIAAgDIgBAAIgfgfIg9g8IgCAAQgvgcgogiIgbgLIgDgCQgsgTgRgtIACAAIAAgCIAAgDQAhgcAdggQAWgZAUgcIgBgEQANgFgKgDQgNgEAUgDIAAgCQBAgqA7guQADgCgBgGQAQgIAIgOIALgGIABAAIADgEIABgEIABAAIgEgQIgCgKIgBgBIAAgBIgJgWIgBAAIgGgIIgBgCIAAAAIAAgCIAAAAIgFgMIAAAAQghhCgqg6IAAAYIAAACQADA6ANAwIABAAIAEAPIABACQAEAFgBAGIAAABQgCgDgDgCIgBgBQgBgEgDgEIAAgBQgBgGgDgDQgQguABg/IgCAAQgBgzgCgtQAEgLACgDQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAABQABADgBAJQgBAYAAAYQAWAkAWAlQAAADACADIAAAAQAYAlAVAoIAAABIAAABIAAAAIAAABIAAAAIABABIABABIABABIABACQAEAHACAHIABACQAEAKACALIADAMIABAFIABACIADAAIADgEQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAFgNANgJIADgCIADgCIAEgCIADgCIAAAAIAFgEIACgBIAFgCIABgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBIAAAAIACgDIABAAIABgBIADgCIAFgCIAFgEIADgCIAPgDIABgBIAAAAIAGgCIAFgDQAxAHAVgWQACgCAAgFIAAgFIgBAAQgYhiglhUQgTgrgWgnQAXATAKAeIABACQAzAPAyAQIBAAVQAgAMAiAIIAIABIAXAFQAIABAKgBQBJgMAzgjQAOgKAMgLQATgSAVgQIgCAAQgoANgvAGQgpASgyAJQgVAEgSgEIgFgBQhTgZhNghIgngSQgjgQgmgLQgWgFgWgEQgLACgGAHQgZAfgNghIgBgCQgHgMgEgPIgCAAQghABgPgPQAMgDANAIIABACQAqADAcgKIACAAIAAgCQAXgMAIgZIAAgDQgEgigOgYIgBgCQgGgKgJgIQgNgNgIAFIgCABQgNAZADgSIABgBQAOgZgUgNQgRABgEAPQgGAVABgSIAAgEIABgHQgEgSgHAZQgKgIAJgKIACgDIgNgUQAXAMANAJIAFAAIAHAAQATACAAAUIAAACQAnAYASAuIABAAIAAAfIAAADQgLAXgVAOIgCABIAAACQgQALgbgBQACAMAFAIIAAACIABAEQAGAQAMgHQANgJAMgMQAzADAiASQAsAWAuASICcA5QBSgKBGgVQAigKAggMIgMghIAAgDQAbAAAkgCIACAAQAQgNAWgJQgEAGAEAJQAFABAAgEIAAgCIAAgDIADgBIACgBIAAgCIAAgDQAGgDAHgBQAOgCAOAGIACAAIACgBIAAgBIAIgHIAGgFIABgBIALgJIAJgGIACgBIAAgCIAegOIACgBIAGgCIABAAIAKgDQAOgCAPACIACAAIABAAQAGgSACgWIABgKIgDAAIgMABIgBAAQgPABgMADIgDAAIgBABIgBAAIgBAAIgIACIAAAAIgEABIgBAAQgcAGgYALIgBACIgNAFIgBAAIgCABIgDACIAAAAIgEABQgdANgYARQAIAIACAHQAEAKgFAJQgEgVgOgLIgBgCQASgLAPgNIgEAAQgbgIAWgUIAHgFQAZgIgIAZIAAACQADAMAVgOIADgBIAAgBQANgDgNgRQAKgZASAIIgBABQgDAEgIAAQgRAZAYgVIABgCQAMgDgJAJIgBABQAFAQAXgKQAGgCAEgBIAEAAIABAAIACAAIAGgCIADgCQABgCgBgEIgBgBQgEgCgIAEQgDACgFgDIgHgFQAMgcATAMIAEADIAAAAQABABABABQAAAAAAABQAAAAAAABQAAAAgBAAIgDACIAAACQAGATAagJQAKgEAGAEQAFAhgOAaIAAAAIgBACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgFAAIgBACQgFAOgSAAQgEAAgCgBIgCgCQAKACAMgLIAEAAQgRAAgQgEQgDAEgEACIgEABQAEAUgXAJIAAABQgQAHAAgCIACgCQAFgVgNAQIgCACQgCgCgDACIgEADIgCACIgBABIABAEIACABQAIABAFACQAUAIgLAWIACAAIACABQAMAJgKARQgHAJgKgDIgEgCQABANgUACQgBAEgHgBIgFgBQAGAHgBARIgCABQgPAKgfgEIAAgBQgQgFgIgNIgBgCIgDgHQAAgBAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAfACgJgOIgDAAQgWABgOAVIAAABQAKAAACACQABAAAAABQAAAAAAABQAAAAgBABQgBAAgBABIAAAAQgQgBgIAGIgXATQhZBMhQBVIAAAFIAAACIARALIACABQASgCAQgEIAAABQgEAagJAWIgCAAQgDAKgHAGQgnAlgxAcIgBACIgSArIAAADIAAACQABAGgDABIgBAAIABABQAaArAtAZIAAABQgIAOgNALIAAABQA+BpBHBfIABACQAXAoAbAlIAAAAQAXAfAZAdIAAACQAcATAhAMQAoAOAwACQAFAAAFgEIgBgBQgMgFgJgIQgcACgWgBQgOgBgKgEQgKgEgFgJIAAgCIAAgHQAZgQAfgKIACgBIAAgCIAugdQghACgigFIgCAAIgjgCIhdgFIABgCIABgBIBbACIArABIAaACIAoAFIAMgIQAdgRAbgUQAkgaAggfQAfgfApgWQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAgBIgBAAQhNg8g6hPIgCgBIgDgGQgOgWgUgRIAAgCQgKgYADgmIALgpIABAAIAAgDIAAgCQANgcAQgbQAJgPALgPIACAAIAAgDIAAgCQA8hCBPgxIACAAIAAgDQAmgTApgSIAAgBQApgCAdAJIAMAEIACABIAFgBIAAgCIABgBQAIgGAFgIIAFgLQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAIgFgDQgNgGgGgLIAAAAIgEgHIgBAAIgCgTIAAAAQgBgRAAgRQAEAAgCgFIAAAAIAAgCIAGgDIAAAAQAGAAgDAOIgCAIIADgCIACgCIABgBQAEgFACgHQADgHAFACQADABAEAEQAEAFAIACQAVgEgNggIABAAQANAZAXAPIAAABIAAAAIAAAAQAbgDAVgIIADgBQARgOAQgPIAAgCIAAgCQAHgHADgKIAAgDIgBgBIgCgBIgBgEIgBgEQgGgXgSgKIgCAAQhHgLgqAoIAAACQgFAQAAAOIABAIIABAGIACAAQgFACgCgDQgCgEAAgKIgBAAIgBAAQgFAAADAIIABACIAFALQgEgGgEgBQgDgBgDAEIgBgBIgCgCIgCgCIgBAAIgBAAIABABIgBABIgIAKIgBAAIAAABIgFAEIAAACIAAAAIgBABIgBAAQgJAIgEANQAEARAAAFQAAABgBAAQAAABAAAAQAAAAAAAAQAAABAAgBIgDAAIAAgCIAAAAQgNgWAQgaIACgBIADgBIABAAQAGgDACgDIAAAAIABgBIABgCQAAgDgCgDIAAgBIAAAAIAAgBIgEgBIAAAAIAAAAIgBAAIgBAAIgBgBIAAAAQgTgDgRAQIAAADIAAACIgCABIgBABIgBABIAAAAIAAABQgHAIgCAIIAAABIgBADQgBAIADAJIAAABIAFAJIAAABQgMgJgIgOIAAgBIACAAIACgEIADgFIAAAAIABgBQAEgKADgNIACAAQAUgLAJgKQgcgDgKAPQgDAFAAAFQgBAOgCAGIgDAEQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBIAAgCIgDgOQADgMAEgKIAAgCQAIgIAOgDIAAgBIAjAAIACAAIANAAIAAAAIgEgCIgMgGIgDAAQgRgDgYABIAAABQgUAIgGAUIAAACIABAPIAAAAIgBAVIAAgCQgJgNACgaQAJgWAUgLIACAAQAdgDARAKIACAAQALADAHAGIAEAEIAAABIACAAIACAAIAFAAIACAAQAEAAADgDIAEgDIgBAAIACgEIgBADIAAAAIACgFIAAgCQgCgdAXgFIAAgBQgQgGgRAFQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAHgBQAWAAAHgBIACgBIAAgBIAAAAIgBAAQgOgFgTABIgBABIgEAEIgBAAQgHAGABgGIABgBIAEgDQAMgHATACIABABIAKAFQAJAEAEgIQgDgDgEgCQgKgFgQAAQgHAAgGADQgHAEgEABQgEAAgBgFQAPgJAaACIACAAQAGAFAGADQAMAGAKgDIAAgCQACgUgHgJIACABIAAACQAOAMAEgFQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIABAFQgDATAigDQANgCAJAIIACACQAFAEAGADIAGADQANgCAUgQIAAgBQATgFARAEIADABQAUAOgBAYIAAACQgJAMgCgCQgCgBAEgPIAAgBIgBAAQgJgKgWADIgCAAIgDACIAAAAIgCAAIADABQAVAEAGATIABAAIACAKIAAABQgJAEAAgRIgBgCQgJgLgQABIgMACIgBAAIAHAEIABAAIABABQATANABAeIAAADQgPABAEgXIgBgEQgEgOgKAEQACAFAAAEQgHAmARAPIAAACQAKAcgUAJIABACIAIAMIAKAMIAAACIAAADQABAUgDAQIgBAAQgPAYgZAIIgBABQgOAEgOADQgFACgEgBIgCAtIgBADQgNAPAJAGQgPABgPACIgFAAIADAAIABgDQAHgcAHgpIgCAAQgYAFgUgKIgCAAIgDAAIAAACIgCADIAIAQIACAAQABAcgFAXIgBAAQABAJAEACIgGADIAAAHIgDAAIAAADIgBABIgDAAIgBAAIgBABIAAAAIAAACIAAAAIgHAFIAAADIgKApIgCAAQgIAFgGAHIgDAAIgYAHIAAABQhWAahZAKIgCAAQgEgHABgMQATgxAZgrIACgBIAAgCIAAgFQAWgjAdgdIACgBQgJATgMAPIAAABIgBABIACAAQAagPARgXIABgCIAAgCQAQgWAHgfIABgBIgBAAIgCAAQhIgCgtAkIAAAAIgCABIgeASQABAEAEACIAAABQAUAdAUgjQACgFAGgBIgnA3IgCABIAAACQgrA1gYBHIAAACQACANgEAGIAAAWIAAACQAGAbAggMIADAAIAAgDQBogTBaghIACAAIAOgEIASgIIACAAQASAQAZgLIADgBIAKgQIAAABIAGAGIABABQgLAHgJALIgCAAQgMAEgRgCIAAACQATADADATIgBADQgGAVgdgCQgCAJgDAHIgBABQAOgUALAUQAAAHgCAFQgDAFgEACQgDACgCgCQgPgPgCARIgBADQgGAbgFAcIAAAwIAAACQAJBDA6AQIAIACQAmAJAfgSQAKgFALgBQATgCAAgFQAAgUgKgLIgCAAQgJglAAgvIAAgDQgRAcgwgBIgCAAQgXgJACgXIgBAAQgPgBgCgPIAAgDIAOAIIABACQAeAGgBgZIAAgBIABgBQABgDgCgDIA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gBgCIAAgCIgBgBIgBAAIAAgQQgBADgDABgAHeBKIAAADIACACIABABIADAEIAAAAIABABIgBgGIAAgDQgCgHAAgIQgEAGAAAHgAGOAsIAAACQAUAVAXgUIgBgCQgKgMgLAAQgLAAgKALgAHeAiIgBABIABAKIAAAEIABABIABACIAAAAIABgVIgDADgABVhEIgCABIAAACQgPASgLAVQgMAWgHAYIAAADIAQAKIABACIACABQAfAKApABIACAAQAQhgAzg+IAAgCQgKgSgOgPIgCgBQgxAigmAtgAD2hGQgSAjgPAkIAAADIAAACQgDALAIABIACAAIACgBIBXg6IgBgCQgagTgkgKIAAACgAE8gnIhGAvQAlACAhgMIACgBQApgJAmgNIABgCIABAAIAAgBIgDgFQgCgIAAgKIABgOIAAgEIgCgDIAAACIgBAAQAAAFgEAAIAAACIAAADQgTAgg1gNIAAACgAGviHIgBABQgRATgNAYIAAAOIABAEIAAAdQAAAHADAGQAHAGAJgPIACgBQABghASgRIACAAQAEgQAAgUIABAAIAAAAQAAgLgEgJIgBgBQgDAAgJANgAFKgvIAAABIAbAAIACAAQARgEAGgPIABAAIAAgCIAAgDQATgwAggjIACgBIAAgCQAIgDAAgJIgBAAIgBAAQgTAbgcASIgCABQgTABgMgGIgBgCQgHgKADgUQAIgOABgWIAAgCIABgGQABgKgDAEQgSAZgRAZIAAADQgSAiglAEIAAACQgNARgLAUQAaALAYAOIABABIAEAAQAPAAAJAGgAqckNQAlBWAaBgIABADIABAAIABACQAZgHALgYIAAgCIAAgRIABgBQAbg8BLABIgBAHQACAcAJAUQAJABAFgDQA6gnAwgyIgDAAIhYATIgDAAIgZgLQglgNgpgKIgCAAQgfgPghgLQgngNgpgGIAIATgAHrhsQABAEAGgDQARgJADgZQAEghgJgXIgBAAQgDA0gSAlgAmshsIADgDgAC4iaQACAWAOAKIABACIACgBQAQgQgVgTIgBgBQgCgDgDAAQgDAAgFAGgAGqkNQAHAAABAHQgFAAgDADQgCACgBACIgBADQgGAMgGAKQgOAUgUANIAAACQgDAZgJATIAAAOIAAACQAYAPAWgTQAVgSAAgSQAMgFgDgHIADAAQAFABAAgEIAAgC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QgDgEgCgFQgCgFAAgIQAEgHABgKIAAgCQAMgQAWgFIAAAAIACgBIAAAAIAAABIgKAJIgBAAIgDADIAAABIgPAMIgCABQAAATgBATgAhrmkIgBgDQARgOAUgMIADgCIADgBIACgBIAAgBIAPgHQAYgLAbgIIADgBIABAAIAIgCIAggGIAAACQgQADgQAFIgIADIgDABQgaAJgWAOIgCABQgCACABAFIAAACIgBACIgCABIgEgGQgCgDgCgBQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBABIgCAGIgBAEIgBAKIgBAAQgHgdgHAhIAAADQgEAGgDgUQAAAAgBAAQAAAAAAAAQAAABAAAAQAAABgBAAQgCAEgEABQAAANgDACIgBABQgDAAgEgJgAtsnzIgBACQgCAGgEgGQAJgbAYAaQAQARAhABQAWgOAKgbIABAAQgCAPgHALQgGALgLAHIAAACQg2AAgcgYgAuMoNQgDgDAAgEIAAgJQABgIAGgEQAIgGALgDIANAAQABABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgFACgGABIgBAAQgLACgIAJIgBABQgBAIAAAIIAAABIgBABIgCAAg");
	this.shape_17.setTransform(-6.2,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HESHEIT, new cjs.Rectangle(-138.4,-92.3,264,191.6), null);


// stage content:
(lib.pronoun_Scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_9 = new lib.texthesheit();
	this.instance_9.parent = this;
	this.instance_9.setTransform(274.9,196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.UI}]}).wait(165));

	// main
	this.instance_10 = new lib.pronounheader();
	this.instance_10.parent = this;
	this.instance_10.setTransform(275,43);

	this.instance_11 = new lib.HESHEIT();
	this.instance_11.parent = this;
	this.instance_11.setTransform(285.4,199,1.427,1.427);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAUQgWgCAIgTQACgFAEgEQAGgGAHgDQAWgBATALQANAIgJALQgFAIgLACIgiAAg");
	this.shape_18.setTransform(349,223);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.instance_11},{t:this.instance_10}]}).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '170C00D0C7D1DD479503B0A278E02202',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_12a.mp3", id:"_12a"},
		{src:"sounds/_12b.mp3", id:"_12b"},
		{src:"sounds/_13b.mp3", id:"_13b"},
		{src:"sounds/_13c.mp3", id:"_13c"},
		{src:"sounds/_16a.mp3", id:"_16a"},
		{src:"sounds/_18b.mp3", id:"_18b"},
		{src:"sounds/_19b.mp3", id:"_19b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/_9a.mp3", id:"_9a"},
		{src:"sounds/bgmusic_1.mp3", id:"bgmusic_1"},
		{src:"sounds/MenuPronoun.mp3", id:"MenuPronoun"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/VO6.mp3", id:"VO6"},
		{src:"sounds/hesheit.mp3", id:"hesheit"},
		{src:"sounds/himherit.mp3", id:"himherit"},
		{src:"sounds/i.mp3", id:"i"},
		{src:"sounds/me.mp3", id:"me"},
		{src:"sounds/nominative.mp3", id:"nominative"},
		{src:"sounds/objectis.mp3", id:"objectis"},
		{src:"sounds/objectivecase.mp3", id:"objectivecase"},
		{src:"sounds/objectsof.mp3", id:"objectsof"},
		{src:"sounds/replaces.mp3", id:"replaces"},
		{src:"sounds/subjectis.mp3", id:"subjectis"},
		{src:"sounds/subjectof.mp3", id:"subjectof"},
		{src:"sounds/substitutes.mp3", id:"substitutes"},
		{src:"sounds/them.mp3", id:"them"},
		{src:"sounds/they.mp3", id:"they"},
		{src:"sounds/us.mp3", id:"us"},
		{src:"sounds/we.mp3", id:"we"},
		{src:"sounds/you.mp3", id:"you"}
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
an.compositions['170C00D0C7D1DD479503B0A278E02202'] = {
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