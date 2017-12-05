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


(lib.to = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape.setTransform(11.5,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1.setTransform(5.1,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.2,22.2);


(lib.plays = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape.setTransform(28.9,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgDADgBQAAgBABAAQAAgBAAAAQABAAABAAQAAgBABAAQADAAABADQALAPAMAbIAJgVIAKgUQACgEADAAQABAAAAABQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAvQgIAQgDANIgFALQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_1.setTransform(22.4,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_2.setTransform(15.9,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_3.setTransform(10.8,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYA0QAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgaIAAgYIgBgZIgBgNQAAgEABgEQACgDAEAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIAAACIgBADQAGgEAFgBQAEgCAEAAQANAAAGAMQAFAIAAAPQAAANgHAKQgIAJgNAAQgFAAgIgCIAAAeQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFghIgJAHIABAdQAHADAGAAQAIAAAEgGQAEgEAAgJQAAgLgDgGQgDgFgGAAQgEAAgFACg");
	this.shape_4.setTransform(5.6,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.5,22.2);


(lib.Mick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AARAxIgKgPIgKgQIgMAIIAAAUQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgHAAAAgJIAAgPIABgQIAAgVIABgWIgBgHIAAgHQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAHIABAHIgBAVIAAAVQAIgHAIgHIANgOQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgSATIANATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgCABgDAAQgDAAgCgDg");
	this.shape.setTransform(27.8,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAcQgJgIAAgOQAAgMAIgNQAKgQAKAAQAHAAAIADQAJAEABAFQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDgBIgDgCQgEgDgJAAQgFAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAHAAQAFAAADgCIAIgEIACgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIACAEQAAAFgKAEQgJAEgGAAQgMAAgIgIg");
	this.shape_1.setTransform(20.6,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgEgiQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQADACAAAEQAAADgDACQgCACgDAAQgCAAgDgCg");
	this.shape_2.setTransform(15.5,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAnAvQgCgCgBgIIgDgLQgDgKgFghIgNAlIgDAMQgCAIgDAEQgDAFgEgBQgDAAgCgEIgDgGIgCgHQgGgXgFgYIgCALIgIAgIgEASQgBAFgFAAQgDAAgCgCQgBgCAAgDQAAgKAEgQIAHgZIAEgTQACgPADgDQADgEAEgBQAEABACAEQACAGADASQAEAUAHAYQAIgYAHgaIACgJQABgGACgDQADgFAEgBQAFAAADALIADAPQAEAcAFAUIADALIACALQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQgBACgDAAQgEAAgCgFg");
	this.shape_3.setTransform(7.9,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.1,22.2);


(lib.listen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPAfIgCgOIAAgOIAAgFIAAgGQAAgNgFAAQgHgBgFAJQgHAIgCALIgBAFIAAAGIAAAHIAAAFQAAADgBACQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgCgCgBgDIAAgFIAAgHIABgRIABgSIAAgGIAAgFQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAQAHAAAAAJIAAAHQALgPAKAAQAKAAAEAJQADAHAAALIAAAHIAAAEIABAOIACANQAAAEgCABQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgGAAgBgGg");
	this.shape.setTransform(32.4,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAFACAHAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgMAFQgJAFgJAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_1.setTransform(25.4,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_2.setTransform(18.6,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_3.setTransform(12.2,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgBgLIAAgMIABgOIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAOIgBAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgDgiQgCgCAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_4.setTransform(7.6,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_5.setTransform(3.8,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.8,22.2);


(lib.likescopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape.setTransform(16.2,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgBgLIAAgMIABgOIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAOIgBAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgDgiQgCgCAAgDQAAgEACgCQACgCACAAQADAAACACQADACgBAEQABADgDACQgCACgDAAQgCAAgCgCg");
	this.shape_1.setTransform(11.5,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_2.setTransform(5.9,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,22.2);


(lib.likes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape.setTransform(26.3,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQAAgPAIgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgXAMQAEAFAFADQAFACAHAAIAKgBQAHgDACgDQADgDACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgLAFQgLAFgIAAQgOAAgJgIgAgMgQQgGAGgCALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_1.setTransform(19.9,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAxIgKgPIgLgQIgLAIIAAAUQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgJIAAgPIACgQIAAgVIAAgWIAAgHIAAgHQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAHIAAAHIAAAVIAAAVQAJgHAHgHIANgOQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgTATIAOATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgEAAgBgDg");
	this.shape_2.setTransform(13.2,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgBgLIAAgMIABgOIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAOIgBAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgDgiQgCgCAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_3.setTransform(7.6,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_4.setTransform(3.8,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.9,22.2);


(lib.guitar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape.setTransform(35.5,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_1.setTransform(28.8,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_2.setTransform(22.4,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgEgiQgBgCAAgDQAAgEABgCQADgCACAAQADAAACACQADACAAAEQAAADgDACQgCACgDAAQgCAAgDgCg");
	this.shape_3.setTransform(17.7,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgIAAgGgDQgGgEgBgIQgCgRAAgMQAAgJACgLQAAgFAGAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAJIgBAKIAAARIACAMIAFACIAEABQAHAAAKgDIgBgNIAAgLQABgOABgKQAAgGAGAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAIgCAYIAAANIAAAOIABAEIAAAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGg");
	this.shape_4.setTransform(12.4,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAxQgIgCAAgEQAAgGAFAAIAIABIAMABQALAAAFgMQADgHAAgRQgDAHgFADQgFADgFAAQgMAAgHgHQgHgJAAgLQAAgRAKgKQAKgMARAAQAFAAAEACQAEABADADQAGABAAAHIgBAMIgCAMIgBAVQgBAMgCAIQgDALgGAFQgIAFgNABQgIAAgGgCgAgLgfQgGAIAAALQAAAJAEAEQADAFAHAAQAGgBAGgFQAFgIABgGIADgVIgFgDIgGgBQgLgBgHAJg");
	this.shape_5.setTransform(5.4,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.6,22.2);


(lib.everyone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAFACAHAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgMAFQgJAFgJAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape.setTransform(52.9,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAfIgCgOIgCgOIABgFIAAgGQAAgNgFAAQgHgBgGAJQgFAIgEALIAAAFIgBAGIABAHIAAAFQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgCgCABgDIAAgFIgBgHIABgRIAAgSIAAgGIAAgFQAAgBABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAABAJIAAAHQALgPAKAAQAKAAAEAJQADAHAAALIAAAHIAAAEIABAOIACANQAAAEgCABQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgFAAAAgGg");
	this.shape_1.setTransform(46,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_2.setTransform(38.8,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgDADgBQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQADAAABADQALAPAMAbIAJgVIAKgUQACgEADAAQABAAAAABQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAvQgIAQgDANIgFALQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_3.setTransform(32,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_4.setTransform(25.9,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAFACAHAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgMAFQgJAFgJAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_5.setTransform(19.1,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAdIgKgZIgLgdIgBgCQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAEAAABAEIAQArQAEgKAHgSIAGgOQACgEADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABABABQAAAAAAABQAAACgLAZIgNAdQAAAGgFAAQgEAAgCgGg");
	this.shape_6.setTransform(12.4,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAFAAIALgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgJAAQgNAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_7.setTransform(5.7,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.5,22.2);


(lib.Because1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAFACAHAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgMAFQgJAFgJAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape.setTransform(47.5,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_1.setTransform(40.4,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgJAAgFgDQgGgEgBgIQgDgRAAgMQAAgJADgLQAAgFAFAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBAJIgBAKIABARIABAMIAFACIAEABQAIAAAJgDIAAgNIAAgLQgBgOACgKQABgGAFAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgGg");
	this.shape_2.setTransform(34.1,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_3.setTransform(27.4,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAcQgKgIAAgOQAAgMAJgNQAKgQALAAQAGAAAHADQAKAEAAAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBIgCgCQgEgDgIAAQgGAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAIAAQADAAAFgCIAHgEIADgBQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABIACAEQAAAFgLAEQgIAEgFAAQgMAAgJgIg");
	this.shape_4.setTransform(20.7,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAFAAIALgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgJAAQgNAAgJgIgAgMgQQgFAGgDALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_5.setTransform(13.9,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAxQgCgDAAgDIAAgSIABgZIABgaIABgSQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAJgCALAAQAKAAAKAHQAMAJAAANQAAAQgNAIQAKAFAFAFQAEAEAAAGQAAAIgIAHQgGAFgGADQgNAFgXAAQgCAAgDgCgAgTAZIAAANQARAAAKgEIAIgGQAEgDAAgCQAAgDgIgDIgMgFIgGgBIgCAAIgDAAIgHAAIgBAOgAgQglIAAALIgBAZIAJAAQAJAAAGgGQAHgFAAgJQAAgGgHgFQgHgGgGAAIgKABg");
	this.shape_6.setTransform(6.4,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.1,22.2);


(lib.Mickplays = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgCADAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgDAAgCgCg");
	this.shape.setTransform(135.2,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_1.setTransform(130.6,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_2.setTransform(124,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQAAAAABAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_3.setTransform(117.5,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgEgiQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQACACABAEQgBADgCACQgCACgDAAQgCAAgDgCg");
	this.shape_4.setTransform(112.8,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgJAAgFgDQgGgEgBgIQgDgRABgMQAAgJABgLQABgFAGAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAJIgBAKIAAARIADAMIAEACIAEABQAIAAAJgDIgBgNIAAgLQAAgOACgKQAAgGAGAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABABAAIgCAYIAAANIAAAOIABAEIAAAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGg");
	this.shape_5.setTransform(107.5,5.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVAxQgIgCAAgEQAAgGAFAAIAIABIAMABQALAAAFgMQADgHAAgRQgDAHgFADQgFADgFAAQgMAAgHgHQgHgJAAgLQAAgRAKgKQAKgMARAAQAFAAAEACQAEABADADQAGABAAAHIgBAMIgCAMIgBAVQgBAMgCAIQgDALgGAFQgIAFgNABQgIAAgGgCgAgLgfQgGAIAAALQAAAJAEAEQADAFAHAAQAGgBAGgFQAFgIABgGIADgWIgFgCIgGgBQgLgBgHAJg");
	this.shape_6.setTransform(100.5,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_7.setTransform(89.9,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgEgiQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQADACAAAEQAAADgDACQgCACgDAAQgCAAgDgCg");
	this.shape_8.setTransform(85.3,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_9.setTransform(79.6,3.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_10.setTransform(68.5,4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgQAyQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgGAOgeIgXgsIgDgEIgCgFQAAgDADgBQAAgBABAAQAAgBAAAAQABAAABAAQAAgBABAAQADAAABADQALAPAMAbIAJgVIAKgUQACgEADAAQABAAAAABQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAvQgIAQgDANIgFALQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_11.setTransform(62,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_12.setTransform(55.5,5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_13.setTransform(50.4,3.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgYA0QAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgaIAAgYIgBgZIgBgNQAAgEABgEQACgDAEAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIAAACIgBADQAGgEAFgBQAEgCAEAAQANAAAGAMQAFAIAAAPQAAANgHAKQgIAJgNAAQgFAAgIgCIAAAeQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFghIgJAHIABAdQAHADAGAAQAIAAAEgGQAEgEAAgJQAAgLgDgGQgDgFgGAAQgEAAgFACg");
	this.shape_14.setTransform(45.2,6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AARAxIgKgPIgKgQIgMAIIAAAUQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgJIAAgPIABgQIAAgVIABgWIgBgHIAAgHQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAHIABAHIgBAVIAAAVQAIgHAIgHIANgOQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgTATIAOATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgEAAgBgDg");
	this.shape_15.setTransform(34.7,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgRAcQgJgIAAgOQAAgMAIgNQAKgQAKAAQAHAAAIADQAKAEAAAFQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDgBIgDgCQgEgDgJAAQgFAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAHAAQAFAAADgCIAIgEIACgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIABAEQABAFgKAEQgJAEgGAAQgMAAgIgIg");
	this.shape_16.setTransform(27.4,5.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgEgiQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQACACABAEQgBADgCACQgCACgDAAQgCAAgDgCg");
	this.shape_17.setTransform(22.4,3.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AAnAvQgCgCgBgIIgCgLQgDgKgGghIgNAlIgDAMQgCAIgDAEQgDAFgEgBQgDAAgCgEIgDgGIgCgHQgGgXgFgYIgCALIgIAgIgDASQgDAFgEAAQgDAAgCgCQgBgCgBgDQABgKAEgQIAHgZIAEgTQACgPADgDQADgEAEgBQAEABACAEQADAGACASQAEAUAHAYQAIgYAHgaIACgJQABgGACgDQADgFAEgBQAFAAADALIADAPQADAcAGAUIADALIADALQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBABQgCACgCAAQgEAAgCgFg");
	this.shape_18.setTransform(14.7,3.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_19.setTransform(68.5,4.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgGAOgeIgXgsIgDgEIgCgFQAAgDADgBQAAgBABAAQAAgBAAAAQABAAABAAQAAgBABAAQADAAABADQALAPAMAbIAJgVIAKgUQACgEADAAQABAAAAABQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAvQgIAQgDANIgFALQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_20.setTransform(62,6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_21.setTransform(55.5,5.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_22.setTransform(50.4,3.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYA0QAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgaIAAgYIgBgZIgBgNQAAgEABgEQACgDAEAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIAAACIgBADQAGgEAFgBQAEgCAEAAQANAAAGAMQAFAIAAAPQAAANgHAKQgIAJgNAAQgFAAgIgCIAAAeQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFghIgJAHIABAdQAHADAGAAQAIAAAEgGQAEgEAAgJQAAgLgDgGQgDgFgGAAQgEAAgFACg");
	this.shape_23.setTransform(45.2,6.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AARAxIgKgPIgKgQIgMAIIAAAUQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgJIAAgPIABgQIAAgVIABgWIgBgHIAAgHQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAHIABAHIgBAVIAAAVQAIgHAIgHIANgOQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgTATIAOATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgEAAgBgDg");
	this.shape_24.setTransform(34.7,3.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRAcQgJgIAAgOQAAgMAIgNQAKgQAKAAQAHAAAIADQAKAEAAAFQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDgBIgDgCQgEgDgJAAQgFAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAHAAQAFAAADgCIAIgEIACgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIABAEQABAFgKAEQgJAEgGAAQgMAAgIgIg");
	this.shape_25.setTransform(27.4,5.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgEgiQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQACACABAEQgBADgCACQgCACgDAAQgCAAgDgCg");
	this.shape_26.setTransform(22.4,3.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAnAvQgCgCgBgIIgCgLQgDgKgGghIgNAlIgDAMQgCAIgDAEQgDAFgEgBQgDAAgCgEIgDgGIgCgHQgGgXgFgYIgCALIgIAgIgDASQgDAFgEAAQgDAAgCgCQgBgCgBgDQABgKAEgQIAHgZIAEgTQACgPADgDQADgEAEgBQAEABACAEQADAGACASQAEAUAHAYQAIgYAHgaIACgJQABgGACgDQADgFAEgBQAFAAADALIADAPQADAcAGAUIADALIADALQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBABQgCACgCAAQgEAAgCgFg");
	this.shape_27.setTransform(14.7,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// Layer 3
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(214,247,254,0.651)").s().p("ApbBjQj6gpAAg6QAAg5D6gpQD6gpFhAAQFiAAD6ApQD7ApAAA5QAAA6j7ApQj6ApliAAQlhAAj6gpg");
	this.shape_28.setTransform(71,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-11,170.9,28);


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


(lib.Connector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("bump");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEaHhQgEgBgDgEIgLgSQgCgDABgEQABgEAEgCQADgDAEABQAEABACAEIALASQADADgBAEQgBAEgEADQgCABgDAAIgCAAgADxGbQgEgBgCgEIgggzQgCgDABgEQABgEAEgDQADgCAEABQAEABACAEIAgAzQACADgBAEQgBAEgEACQgCACgDAAIgCAAgACzE0QgEgBgCgEIgggzQgCgDABgEQABgEAEgDQADgCAEABQAEABACAEIAgAzQACADgBAEQgBAEgEADQgCABgDAAIgCAAgAB1DNQgEgBgDgEIgeg0QgDgEABgEQABgDAEgDQAEgCAEABQADABACAEIAgA0QACAEgBADQgBAEgEACQgCACgDAAIgCAAgAA3BlQgEgBgDgEIgeg0QgDgEABgDQABgEAEgCQAEgDAEABQADABADAEIAeA0QADAEgBAEQgBADgEADQgCABgDAAIgCAAgAgGgBQgEgBgDgEIgegzQgDgDABgEQABgEAEgCQADgDAEABQAEABADAEIAdAzQADADgBAEQgBAEgEACQgBACgDAAIgCAAgAhEhnQgEgBgDgEIgegzQgDgDABgEQABgEAEgDQADgCAEABQAEABADAEIAeAzQADADgBAEQgBAEgEADQgCABgDAAIgCAAgAiCjNQgEgBgDgEIgfgzQgCgDABgEQABgEAEgCQADgDAEABQAEABADAEIAeAzQADADgBAEQgBAEgEACQgCACgDAAIgCAAgAjAkzQgEgBgCgEIgggzQgCgDABgEQABgEAEgCQADgDAEABQAEABACAEIAfAzQADADgBAEQgBAEgEACQgCACgDAAIgCAAgAj+mZQgEgBgCgEIgggzQgCgDABgEQABgEAEgDQADgCAEABQAEABACAEIAgAzQACADgBAEQgBAEgEADQgCABgDAAIgCAAg");
	this.shape.setTransform(28.4,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3333").s().p("AEaHhQgEgBgCgEIgMgSQgCgDABgEQABgEAEgDQADgCAEABQAEABACAEIAMASQACADgBAEQgBAEgEACQgCACgDAAIgCAAgADxGbQgEgBgDgEIgegzQgDgDABgEQABgEAEgCQADgDAEABQAEABADAEIAeAzQADADgBAEQgBAEgEACQgCACgDAAIgCAAgACzE0QgEgBgDgEIgegzQgDgDABgEQABgEAEgDQADgCAEABQAEABADAEIAeAzQADADgBAEQgBAEgEADQgCABgDAAIgCAAgAB0DNQgDgBgDgEIgeg0QgDgEABgEQABgDAEgCQAEgDADABQAEABADAEIAeA0QADAEgBAEQgBADgEACQgCACgDAAIgDAAgAA2BlQgDgBgDgEIgfg0QgCgEABgDQABgEAEgDQAEgCADABQAEABADAEIAeA0QADAEgBADQgBAEgEADQgCABgDAAIgDAAgAgGgBQgEgBgCgEIgggzQgCgDABgEQABgEAEgCQADgDAEABQAEABACAEIAeAzQADADgBAEQgBAEgEACQgBACgDAAIgCAAgAhEhnQgEgBgCgEIgggzQgCgDABgEQABgEAEgCQADgDAEABQAEABACAEIAgAzQACADgBAEQgBAEgEACQgCACgDAAIgCAAgAiCjNQgEgBgCgEIgggzQgCgDABgEQABgEAEgDQADgCAEABQAEABACAEIAgAzQACADgBAEQgBAEgEADQgCABgDAAIgCAAgAjAkzQgEgBgCgEIgggzQgCgDABgEQABgEAEgCQADgDAEABQAEABACAEIAgAzQACADgBAEQgBAEgEACQgCACgDAAIgCAAgAj+mZQgEgBgDgEIgegzQgDgDABgEQABgEAEgCQADgDAEABQAEABACAEIAgAzQACADgBAEQgBAEgEACQgCACgDAAIgCAAg");
	this.shape_1.setTransform(28.4,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,58.8,96.2);


(lib.Becauseeveryoe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHANQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIAEgKIAFgMQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgJAVQAAAEgDgBQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape.setTransform(197.2,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAfIgCgOIgCgOIABgFIAAgGQAAgNgFAAQgHAAgGAIQgFAIgEALIAAAGIgBAFIABAHIAAAFQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgBgCgBgDIAAgFIAAgHIABgRIAAgSIAAgFIAAgGQAAgBABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAABAIIAAAIQALgPAKAAQAKABAEAIQADAHAAALIAAAGIAAAGIABANIACAOQAAACgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgFAAAAgGg");
	this.shape_1.setTransform(191.8,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAbQgJgHAAgPQgBgPAJgLQAIgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgNAGIgYAMQAEAFAFADQAGACAFAAIALgBQAHgDADgDQABgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQgBAHgKAFQgKAFgKAAQgNAAgJgIgAgMgQQgFAGgDALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_2.setTransform(184.8,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_3.setTransform(178,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_4.setTransform(171.6,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgEgiQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQACACABAEQgBADgCACQgCACgDAAQgCAAgDgCg");
	this.shape_5.setTransform(166.9,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_6.setTransform(163.2,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_7.setTransform(153.9,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_8.setTransform(147.5,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_9.setTransform(137.2,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAFAAIALgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgJAAQgNAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_10.setTransform(130.8,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AARAxIgKgPIgLgQIgLAIIAAAUQgBAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgJIABgPIABgQIAAgVIAAgWIAAgHIAAgHQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIABAHIAAAHIAAAVIgBAVQAJgHAHgHIAPgOQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAIgUATIAOATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgDAAgCgDg");
	this.shape_11.setTransform(124.1,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AgFAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgEgiQgBgCAAgDQAAgEABgCQADgCACAAQADAAACACQADACAAAEQAAADgDACQgCACgDAAQgCAAgDgCg");
	this.shape_12.setTransform(118.5,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_13.setTransform(114.7,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAGAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgIAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_14.setTransform(105.6,2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAQAfIgCgOIgBgOIAAgFIAAgGQAAgNgFAAQgHAAgFAIQgHAIgCALIgBAGIgBAFIABAHIAAAFQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgCgCAAgDIAAgFIAAgHIABgRIAAgSIAAgFIAAgGQAAgBABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAABAIIAAAIQALgPAKAAQAKABAEAIQADAHAAALIAAAGIAAAGIABANIACAOQAAACgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgGAAAAgGg");
	this.shape_15.setTransform(98.7,2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_16.setTransform(91.6,2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgCADgCQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQADAAABACQALAPAMAcIAJgXIAKgTQACgDADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAvQgIAQgDAMIgFAMQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_17.setTransform(84.7,3.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_18.setTransform(78.6,2.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAGAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgIAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_19.setTransform(71.9,2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgGAdIgKgZIgLgdIgBgCQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAEAAABAEIAQArQAEgKAHgSIAGgOQACgEADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAACgLAZIgNAdQAAAGgFAAQgEAAgCgGg");
	this.shape_20.setTransform(65.1,2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAFAAIALgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgJAAQgNAAgJgIgAgMgQQgFAGgDALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_21.setTransform(58.5,2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAFACAHAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgMAFQgJAFgJAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_22.setTransform(47.5,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_23.setTransform(40.4,1.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgJAAgFgDQgGgEgBgIQgDgRAAgMQAAgJADgLQAAgFAFAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBAJIgBAKIABARIABAMIAFACIAEABQAIAAAJgDIAAgNIAAgLQgBgOACgKQABgGAFAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgGg");
	this.shape_24.setTransform(34.1,2.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBAAAAABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_25.setTransform(27.4,2.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAcQgKgIAAgOQAAgMAJgNQAKgQALAAQAGAAAHADQAKAEAAAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBIgCgCQgEgDgIAAQgGAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAIAAQADAAAFgCIAHgEIADgBQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABIACAEQAAAFgLAEQgIAEgFAAQgMAAgJgIg");
	this.shape_26.setTransform(20.7,2.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAFAAIALgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgJAAQgNAAgJgIgAgMgQQgFAGgDALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_27.setTransform(13.9,2.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAxQgCgDAAgDIAAgSIABgZIABgaIABgSQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAJgCALAAQAKAAAKAHQAMAJAAANQAAAQgNAIQAKAFAFAFQAEAEAAAGQAAAIgIAHQgGAFgGADQgNAFgXAAQgCAAgDgCgAgTAZIAAANQARAAAKgEIAIgGQAEgDAAgCQAAgDgIgDIgMgFIgGgBIgCAAIgDAAIgHAAIgBAOgAgQglIAAALIgBAZIAJAAQAJAAAGgGQAHgFAAgJQAAgGgHgFQgHgGgGAAIgKABg");
	this.shape_28.setTransform(6.4,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_29.setTransform(137.2,1.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAFAAIALgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgJAAQgNAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_30.setTransform(130.8,2.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AARAxIgKgPIgLgQIgLAIIAAAUQgBAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgJIABgPIABgQIAAgVIAAgWIAAgHIAAgHQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIABAHIAAAHIAAAVIgBAVQAJgHAHgHIAPgOQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAIgUATIAOATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgDAAgCgDg");
	this.shape_31.setTransform(124.1,0.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgEgiQgBgCAAgDQAAgEABgCQADgCACAAQADAAACACQADACAAAEQAAADgDACQgCACgDAAQgCAAgDgCg");
	this.shape_32.setTransform(118.5,0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_33.setTransform(114.7,0.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAGAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgIAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_34.setTransform(105.6,2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAQAfIgCgOIgBgOIAAgFIAAgGQAAgNgFAAQgHAAgFAIQgHAIgCALIgBAGIgBAFIABAHIAAAFQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgCgCAAgDIAAgFIAAgHIABgRIAAgSIAAgFIAAgGQAAgBABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAABAIIAAAIQALgPAKAAQAKABAEAIQADAHAAALIAAAGIAAAGIABANIACAOQAAACgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgGAAAAgGg");
	this.shape_35.setTransform(98.7,2.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_36.setTransform(91.6,2.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgCADgCQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQADAAABACQALAPAMAcIAJgXIAKgTQACgDADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAvQgIAQgDAMIgFAMQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_37.setTransform(84.7,3.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_38.setTransform(78.6,2.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAGAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgIAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_39.setTransform(71.9,2.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGAdIgKgZIgLgdIgBgCQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAEAAABAEIAQArQAEgKAHgSIAGgOQACgEADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAACgLAZIgNAdQAAAGgFAAQgEAAgCgGg");
	this.shape_40.setTransform(65.1,2.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAFAAIALgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgJAAQgNAAgJgIgAgMgQQgFAGgDALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_41.setTransform(13.9,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27,p:{x:13.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_28},{t:this.shape_41},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_27,p:{x:58.5}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// Layer 2
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.8)").s().p("AAACBQntAAldglQldgmAAg2QAAg1FdgmQFdglHtAAQHuAAFdAlQFdAmAAA1QAAA2ldAmQldAlnsAAIgCAAg");
	this.shape_42.setTransform(104.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-12.1,238.4,25.9);


(lib.DependentClauseDefSimple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape.setTransform(422.4,-13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghBMQgMgDAAgIQAAgIAIAAIAMABQAIACAKAAQASAAAHgSQAFgMAAgZQgFAKgIAFQgHAFgJAAQgRAAgLgMQgLgMAAgSQAAgbAPgQQAPgRAaAAQAKABAGACQAGACADAFQAKAAAAALQAAAIgBALIgDATIgDAfQAAAUgDAMQgEAQgLAHQgLAJgVAAQgNAAgJgBgAgRgwQgJAMAAARQAAAOAFAHQAGAGAKABQAJAAAJgLQAJgKABgKIAEghIgIgFIgJgBQgRAAgKANg");
	this.shape_1.setTransform(414.4,-15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIABgJIAAgJQgBgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_2.setTransform(404.3,-17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQAEgDADAAQADAAAEADQACADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgCACgEABQgEgBgDgCgAgFg1QgEgDAAgFQAAgEAEgEQADgEADAAQAGAAADAEQADAEAAAEQAAAFgDADQgDADgGAAQgDAAgDgDg");
	this.shape_3.setTransform(396.3,-20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_4.setTransform(388.3,-17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAIAAALAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_5.setTransform(377.8,-17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_6.setTransform(367.3,-17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFA6QgDgDAAgFIgCgiQgCgXAAgLQAAgLgDgFQgHADgHAHIgMANIgFAGIgBAQIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADADQADADAAAEIAAAGIAAAGIAAAKQAFgKAKgIQAKgJAGAAQAQAAAFAPQAFgHAHgDQAIgEAJAAQARAAAGASIAEAbIAHA3QAAAEgDADQgDACgEAAQgIAAgCgIIgDgeIgDgeIgEgNQgDgJgEAAQgEAAgJAGQgKAGgDAEIABASIADAZQACAPAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_7.setTransform(354,-17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBEQgDgCAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDADgDQACgDAEAAIAVABIAAgNIgBgMQAAgEACgCQAEgDAEAAQAHAAACAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgDADQgDADgDAAIgGgBIgEAAIgOACIACA4IAAAFIAAAFQABAVgLAAQgCAAgEgDg");
	this.shape_8.setTransform(335.4,-19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQAEgDAEAAQACAAAEADQACADAAAEIgBAWIgBAXIABARIAAASQAAAEgDADQgCACgEABQgEgBgDgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADAAQAFAAAEAEQADAEAAAEQAAAFgDADQgEADgFAAQgDAAgEgDg");
	this.shape_9.setTransform(328.1,-20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_10.setTransform(313.8,-17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAtIgPgoIgRgsIgBgEQAAgEADgDQADgDAEABQAGAAACAFIAZBDIASgsIAIgWQADgGAFAAQAEAAADADQADADAAAEQAAADgQAnIgUAtQAAAIgIABQgHAAgDgJg");
	this.shape_11.setTransform(303.4,-17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQADgDAEAAQAEAAADADQACADAAAEIgBAWIgBAXIABARIAAASQAAAEgDADQgCACgEABQgEgBgDgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADAAQAGAAADAEQADAEAAAEQAAAFgDADQgEADgFAAQgDAAgEgDg");
	this.shape_12.setTransform(295.8,-20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghBMQgMgDAAgIQgBgIAJAAIAMABQAIACAKAAQASAAAHgSQAFgMAAgZQgGAKgHAFQgHAFgJAAQgRAAgLgMQgLgMAAgSQAAgbAPgQQAPgRAaAAQAKABAGACQAGACADAFQAKAAAAALQAAAIgBALIgDATIgDAfQAAAUgDAMQgFAQgKAHQgLAJgWAAQgMAAgJgBgAgRgwQgJAMAAARQAAAOAFAHQAFAGALABQAJAAAJgLQAJgKABgKIAFghIgIgFIgKgBQgRAAgKANg");
	this.shape_13.setTransform(287.4,-15.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_14.setTransform(270.9,-17.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFBEQgDgCAAgEIAAgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEADgCQADgDADAAQAJAAABAOIAAAIIAAAHIAAAFIANgBQALAAADABQAGABAAAIQAAAEgCADQgEADgEAAIgEgBIgGAAIgMACIACA4IAAAFIAAAFQAAAVgKAAQgEAAgCgDg");
	this.shape_15.setTransform(261.1,-19.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbA2QgPgFABgKQAAgEACgDQAEgDAEAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQAAgNgTgFIgJgCQgNgDgFgEQgIgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgWAHQgQAGABAKIAFABQAWAEAKAHQAQAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_16.setTransform(245.3,-18.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_17.setTransform(234.8,-20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQgBAMgIAAQgJAAAAgJIAAgHIAAgIQgQABgIAHQgJAHgGAMIAAA1QABAKgLAAQgIAAAAgKg");
	this.shape_18.setTransform(224.5,-17.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_19.setTransform(214,-17.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgEAFQgCAGgHAAQgHAAgIgdQgDgPgDgZIgDgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIACAPIAFArQALgdAMgoQADgLAHAAQAHAAADANIAHAjIAHAlIAHgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgCAJgHAKQgDAFgGAAQgLgBgGgag");
	this.shape_20.setTransform(202.1,-17.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_21.setTransform(186.5,-20.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAQgRAVAAQAJAAAKAEQANAGAAAHQAAADgCACIgBAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAJgIQgCgZAAgNIAAgJIABgKIgGgDIgDgBQgPAAgLAMg");
	this.shape_22.setTransform(178.6,-17.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIABgJIAAgJQgBgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_23.setTransform(168.5,-17.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_24.setTransform(157.7,-17.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQADgDAEAAQAEAAADADQACADAAAEIgBAWIgBAXIABARIAAASQAAAEgDADQgCACgEABQgEgBgDgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADAAQAGAAADAEQADAEAAAEQAAAFgDADQgDADgGAAQgDAAgEgDg");
	this.shape_25.setTransform(150,-20.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFBEQgDgCAAgEIAAgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEADgCQADgDADAAQAJAAABAOIAAAIIAAAHIAAAFIANgBQALAAADABQAGABAAAIQAAAEgCADQgEADgEAAIgEgBIgGAAIgMACIACA4IAAAFIAAAFQAAAVgKAAQgEAAgCgDg");
	this.shape_26.setTransform(142.3,-19.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgJBHQgDgDAAgEIAAgSIAAgRIABgXIABgWQAAgEADgDQADgDADAAQAEAAACADQADADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgDACgDABQgEgBgDgCgAgFg1QgEgDAAgFQAAgEAEgEQADgEAEAAQAFAAADAEQADAEAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_27.setTransform(135,-20.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_28.setTransform(126.1,-20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_29.setTransform(114.4,-20.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgDgZgBgNIABgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_30.setTransform(103.5,-17.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgbA2QgOgFAAgKQAAgEACgDQADgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEAKAHQAQAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_31.setTransform(87.2,-18.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_32.setTransform(76.7,-20.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_33.setTransform(65.6,-17.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_34.setTransform(54.7,-17.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_35.setTransform(44.1,-17.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFBEQgDgCgBgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEACgCQAEgDADAAQAJAAABAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgDADgFAAIgFgBIgEAAIgOACIADA4IAAAFIAAAFQAAAVgKAAQgEAAgCgDg");
	this.shape_36.setTransform(27.9,-19.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgJBHQgDgDABgEIAAgSIgBgRIABgXIABgWQAAgEACgDQAEgDADAAQAEAAACADQADADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgDACgDABQgEgBgDgCgAgFg1QgEgDAAgFQAAgEAEgEQADgEAEAAQAFAAADAEQADAEAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_37.setTransform(20.6,-20.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgeABQAAgHAIAAIAWgBIAXAAQAJAAAAAHQAAAGgIABQgOABggAAQgIAAAAgHg");
	this.shape_38.setTransform(427.2,-48.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_39.setTransform(411.7,-47.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQAAAEgDADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_40.setTransform(401.1,-47.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_41.setTransform(390.3,-47.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgKBGIABgjIABgjIAAgiIABgkQAAgKAIABQAKgBAAAKIAAAkIgBAiIgBAxIgBAWQgBAKgIgBQgJAAAAgKg");
	this.shape_42.setTransform(382.5,-50.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAIAAALAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_43.setTransform(374.6,-47.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgPQAOgPAVAAQALgBAGAEIAKAHIADg3QABgJAIAAQAJAAAAAKQAAANgEAuIgBAcQAAAhADAQIAAACQAAAEgDADQgDACgDAAQgGAAgDgJQgHAGgIACQgHADgIAAQgUAAgNgOgAgWACQgIAJAAAUQAAAMAJAJQAIAJAMAAQAIAAAFgDQAEgBAHgHIADgCIAAgSIAAgLIAAgMQgEgHgGgDQgGgEgJAAQgPAAgIAJg");
	this.shape_44.setTransform(357.6,-50.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_45.setTransform(346.8,-47.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAKgIQgDgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_46.setTransform(336.3,-47.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgGBFQgDgDAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDADgEQACgCAEAAIAVABIAAgNIgBgMQAAgEACgCQAEgEAEAAQAHAAACAPIAAAJIAAAGIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgDADQgDADgDAAIgGgBIgEAAIgOACIACA5IAAAEIAAAFQABAWgLgBQgCAAgEgCg");
	this.shape_47.setTransform(326.4,-49.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaA2QgPgFgBgKQAAgEADgDQAEgDADAAQAEAAAFAFQABACAJACIALABQAHAAAGgCQAKgDAAgGQAAgNgTgFIgJgCQgNgDgFgEQgJgEABgLQAAgVASgJIASgGQANgDAGgDQAEgCAEAAQAFAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgGAAgBgEQgCgDgBgIIgWAHQgPAGgBAKIAHABQAVAEAKAHQARAKgBATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_48.setTransform(316.6,-48);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgFBFQgDgDAAgEIAAgLIAAgLIgCg4IgWgCQgIgBAAgJQAAgDACgEQADgCAEAAIAUABIAAgNIAAgMQAAgEADgCQACgEAEAAQAJAAABAPIAAAJIAAAGIAAAFIANgBQALAAADABQAGABAAAIQAAAEgCADQgEADgEAAIgEgBIgGAAIgMACIACA5IAAAEIAAAFQAAAWgKgBQgEAAgCgCg");
	this.shape_49.setTransform(301.3,-49.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_50.setTransform(291.2,-47.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQgBgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAGAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgEAAQgIAAgBgJg");
	this.shape_51.setTransform(281.2,-47.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_52.setTransform(270.8,-47.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAKgIQgDgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_53.setTransform(260.2,-47.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgSANgVQAPgYARAAQAJAAAMAEQAPAGABAIQgBAFgCADQgCACgEAAQgDAAgCgBIgEgEQgGgEgNgBQgJABgKARQgJAQABALQgBANAJAIQAJAHALAAQAGAAAGgDIAMgHIAEgBQAEAAADADQACADAAADQAAAIgPAHQgNAFgJAAQgTAAgNgMg");
	this.shape_54.setTransform(250,-47.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00FFCC").s().p("AgqBLQgJgIAAggIAAgOIAAgQIAAgEQAAgDABgDIACgpIgBgLIgBgKQAAgMAKAAQAFAAADADIAVgEIATgCQAYAAAOAFQAHADAAAHQAAAEgDACQgDAEgEAAIgDgBQgRgEgPAAIgQABIgVAFIABAKIgCAmIAqgFIAYgCQADAAADADQAEADAAAEQgBAIgIABIgYADIgsADIgBANIAAAMQAAAVADAFQADACAMAAIASAAIASAAIAGgBIAFAAQALAAAAAKQAAAHgIADQgKABgdAAQgeAAgJgIg");
	this.shape_55.setTransform(232.9,-50.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00FFCC").s().p("AgmBDQgTgHAAgPQAAgFADgCQADgDAEABQAFgBAEAGQAEAHAEADQAIAFARAAQAOAAANgGQAQgJAAgOQAAgNgOgHQgLgGgRAAQgPgBgLgGQgOgHAAgPQAAgRAUgPQASgNAUAAQAJAAAMADQAQAEAAAGQgBAKgIgBIgOgCIgPgCQgOABgLAGQgKAIAAALQgBAIAOAEIAVABQAWACANANQALAKAAARQAAAWgWAPQgSAMgXgBQgTABgOgIg");
	this.shape_56.setTransform(219.5,-49.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00FFCC").s().p("AgqA6QgNgOgDgbQgBgNAAgkIAAgWIACgMQADgIAGAAQAJAAAAARIAAA5QAAA6AoAAQAnAAAAhjIAAgJIAAgIQAAgGACgFQADgFAGAAQAJAAAAANIAAAMIAAANQAABvg6AAQgdAAgPgRg");
	this.shape_57.setTransform(205.2,-49.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00FFCC").s().p("AAiAzIgHgfIgZAFIgZAFIgRAmQgEAFgEAAQgEAAgEgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAIAAADALIAFAhIAPBDIAGAPIACALQAAAEgCADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_58.setTransform(190.3,-49.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00FFCC").s().p("AgqBNQgFgEAAgLIACghQACgrAAg3QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAA3gDAtIgBAOIgBAPQAaAAAmgMIADgBQAEAAADAEQACADAAAEQAAAGgGADQgLAFgYAEQgVAEgNAAQgKAAgFgDg");
	this.shape_59.setTransform(177.8,-49.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00FFCC").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgeAXAAIAJABIAGACQAEgGAFAAQAHABACAIQABAIAAALQAAAEgCAEQgDADgEAAQgHABgDgIQgDgGgCgBQgCgBgIAAQgOAAgQAVQgYAdAAAZQAAANAIAJQAIAKAMAAQAJAAAKgGQAGgDAMgIQAFgFADAAQAEAAADAEQADADAAAEQAAAEgEADQgZAYgaAAQgUAAgOgQg");
	this.shape_60.setTransform(166.3,-50);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00FFCC").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgOIgBgOIgCgnIgDgnIgIAAQgWAAgMgCQgIgDAAgHQAAgFADgCQADgDAEAAIAQACIAQABIARAAIARgBIAWABIAXABQAEAAADADQADADAAAEQAAAFgDACQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAGgGAAQgDAAgDgCg");
	this.shape_61.setTransform(148.1,-50.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00FFCC").s().p("AhBBMQgCgCAAgFIAAgMIABgNIAAgSIABgSIgBgTIAAgTIgBgSIgBgTQAAgEADgEQAEgEAFABQAFAAAIALQAYAkATAZQAXAbAcAaIAAgNIgBgMQAAgpgDgaIgDgKIgCgLQAAgLAKAAQARAAAABAIAAAfIAAAgIgBAQQgCAKgJAAQgGAAgHgHQgogmgyhGIAAAXIgBAUIABAZIAAAYQAAAagKAAQgFAAgEgDg");
	this.shape_62.setTransform(132.6,-49.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00FFCC").s().p("AgqBLQgKgIAAggIABgOIAAgQIgBgEQAAgDADgDIACgpIgBgLIgBgKQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADABAHQgBAEgCACQgDAEgEAAIgDgBQgQgEgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACADAAAEQABAIgKABIgXADIgsADIAAANIgBAMQAAAVAEAFQACACANAAIARAAIASAAIAGgBIAGAAQAKAAAAAKQAAAHgJADQgJABgdAAQgeAAgJgIg");
	this.shape_63.setTransform(118.5,-50.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00FFCC").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_64.setTransform(105.1,-49.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00FFCC").s().p("AhBBMQgCgCgBgFIABgMIAAgNIABgSIAAgSIAAgTIAAgTIgCgSIAAgTQAAgEADgEQAEgEAFABQAGAAAHALQAYAkATAZQAXAbAbAaIAAgNIAAgMQAAgpgDgaIgDgKIgCgLQAAgLAKAAQASAAgBBAIAAAfIAAAgIgCAQQgBAKgJAAQgFAAgIgHQgngmgzhGIgBAXIAAAUIAAAZIABAYQAAAagLAAQgEAAgEgDg");
	this.shape_65.setTransform(89.7,-49.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00FFCC").s().p("AgqBLQgJgIAAggIAAgOIABgQIgBgEQAAgDACgDIABgpIAAgLIgBgKQgBgMAKAAQAFAAADADIAVgEIATgCQAYAAAOAFQAHADgBAHQAAAEgCACQgDAEgEAAIgDgBQgRgEgPAAIgRABIgUAFIABAKIgCAmIAqgFIAXgCQAFAAACADQADADABAEQgBAIgIABIgYADIgsADIAAANIgBAMQAAAVADAFQACACAOAAIARAAIASAAIAGgBIAFAAQALAAAAAKQAAAHgJADQgIABgeAAQgfAAgIgIg");
	this.shape_66.setTransform(75.6,-50.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00FFCC").s().p("AgpBLQgCgCAAgFIAAgcIACgoIABgoIAAgNQABgKABgFQACgIAHABIAJgCIAPAAQAQAAAQAMQARAOAAATQAAAYgSANQgQANgXAAIgLgBIgBAzQAAAFgDACQgDADgDAAQgEAAgDgDgAgPg6IgGAAIgBASIgBAnIAKABQAPAAAMgIQANgJAAgPQAAgLgNgIQgLgHgLgBIgHABg");
	this.shape_67.setTransform(64,-50.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00FFCC").s().p("AgqBLQgKgIAAggIABgOIAAgQIgBgEQAAgDACgDIADgpIgBgLIgCgKQAAgMALAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADABAHQgBAEgCACQgDAEgEAAIgDgBQgQgEgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAFAAADADQACADAAAEQABAIgKABIgXADIgsADIgBANIAAAMQAAAVAEAFQABACANAAIASAAIASAAIAGgBIAGAAQAKAAAAAKQAAAHgJADQgJABgdAAQgfAAgIgIg");
	this.shape_68.setTransform(52.7,-50.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00FFCC").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_69.setTransform(39.3,-49.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_70.setTransform(18.3,-49.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.506)").s().p("AgqBLQgKgJABgfIAAgNIABgQIgBgGQAAgBACgDIABgqIAAgKIgBgLQgBgMALAAQADAAAEADIAVgFIATgBQAYAAAOAGQAGACAAAHQABADgDADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgCAlIAqgEIAXgCQAFAAACADQADACAAAGQAAAHgJACIgXACIgsADIAAAOIgBALQAAAWADAEQACACAOAAIARAAIASgBIAGAAIAFgBQALAAAAAKQAAAJgJABQgIACgeAAQgeAAgJgIg");
	this.shape_71.setTransform(233.5,-48.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.506)").s().p("AgmBEQgTgJAAgPQAAgDADgDQADgCAEgBQAFABAEAFQAFAIADACQAJAGAPgBQAOABANgHQARgIAAgQQAAgMgOgHQgMgGgQgBQgQAAgKgGQgOgHAAgPQAAgSATgOQAUgOATABQAJAAAMADQAQAEAAAGQAAAJgJAAIgOgCIgPgCQgOAAgLAIQgLAHAAALQAAAIAOADIAUACQAXADAMAMQAMAKAAAQQAAAYgWANQgSAMgYAAQgRAAgPgGg");
	this.shape_72.setTransform(220.1,-48.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.506)").s().p("AgqA6QgNgOgDgcQgBgMAAgkIAAgXIACgLQADgIAGAAQAJAAAAARIAAA5QAAA6AoAAQAnAAAAhiIAAgKIAAgIQAAgGACgEQADgHAGAAQAJAAAAAOIAAAMIAAAMQAABxg6AAQgdAAgPgSg");
	this.shape_73.setTransform(205.8,-48.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.506)").s().p("AAiAzIgHgfIgaAFIgZAFIgQAmQgDAFgFAAQgFAAgCgDQgDgDgBgEQAAgFAPgfQgCgCABgDQAAgIAJgDQALgTARgcQAWglAGAAQAHAAADALIAGAhIAPBDIAFAPIAEALQAAAEgEADQgCADgEAAQgJAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_74.setTransform(190.9,-48.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.506)").s().p("AgqBNQgFgEAAgLIACghQACgrAAg3QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAA3gDAtIgBAOIgBAPQAaAAAmgMIADgBQAEAAADAEQACADAAAEQAAAGgGADQgLAFgYAEQgVAEgNAAQgKAAgFgDg");
	this.shape_75.setTransform(178.4,-48.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.506)").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgdAXAAIAJAAIAGACQAEgFAFgBQAHAAACAJQABAIAAALQAAAFgCACQgDAFgEAAQgHAAgDgIQgDgGgCgCQgCAAgIAAQgOgBgQAWQgYAdAAAZQAAANAIAJQAIAKAMAAQAJgBAKgFQAGgDAMgJQAFgDADAAQAEAAADADQADADAAAEQAAAEgEAEQgZAWgaAAQgUAAgOgPg");
	this.shape_76.setTransform(166.9,-48.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.506)").s().p("AgGBHQgDgCAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgoIgIAAQgWAAgMgDQgIgBAAgJQAAgEADgDQADgCAEAAIAQABIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAPIABALIAAAKQAAAHgCAFQgCAHgGgBQgDAAgDgDg");
	this.shape_77.setTransform(148.7,-48.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.506)").s().p("AhBBMQgDgDAAgEIABgNIAAgLIABgTIABgSIgBgSIAAgUIgCgSIgBgTQAAgEAFgEQADgDAFgBQAGAAAHAMQAYAkATAYQAXAcAcAaIAAgMIgBgNQAAgqgDgZIgDgKIgCgLQAAgLALAAQARAAAAA/IAAAgIgBAgIgCAQQgBAKgJAAQgGAAgHgHQgogmgyhGIAAAXIgBAUIABAZIAAAZQAAAagKAAQgGAAgDgEg");
	this.shape_78.setTransform(133.2,-48.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.506)").s().p("AgqBLQgJgJgBgfIABgNIAAgQIgBgGQAAgBACgDIACgqIgBgKIgBgLQABgMAJAAQAFAAACADIAXgFIASgBQAYAAAOAGQAHACAAAHQAAADgDADQgDAEgEAAIgDAAQgQgFgQAAIgQABIgVAFIABAKIgCAlIAqgEIAYgCQADAAAEADQADACAAAGQAAAHgJACIgYACIgsADIgBAOIAAALQAAAWAEAEQABACANAAIASAAIASgBIAGAAIAGgBQAKAAAAAKQAAAJgIABQgKACgdAAQgeAAgJgIg");
	this.shape_79.setTransform(119.1,-48.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.506)").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_80.setTransform(105.7,-48.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.506)").s().p("AhBBMQgCgDAAgEIAAgNIABgLIAAgTIABgSIgBgSIAAgUIgBgSIgBgTQAAgEADgEQAEgDAFgBQAFAAAIAMQAYAkATAYQAXAcAcAaIAAgMIgBgNQAAgqgDgZIgDgKIgCgLQAAgLAKAAQARAAAAA/IAAAgIAAAgIgBAQQgCAKgJAAQgGAAgHgHQgogmgyhGIgBAXIAAAUIAAAZIABAZQAAAagKAAQgFAAgEgEg");
	this.shape_81.setTransform(90.3,-48.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.506)").s().p("AgqBLQgKgJAAgfIABgNIAAgQIgBgGQAAgBADgDIACgqIgBgKIgBgLQAAgMAKAAQADAAADADIAXgFIASgBQAYAAAOAGQAGACAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAlIApgEIAXgCQAEAAAEADQACACAAAGQABAHgKACIgXACIgsADIAAAOIgBALQAAAWAEAEQACACANAAIARAAIASgBIAGAAIAGgBQAKAAAAAKQAAAJgJABQgJACgdAAQgeAAgJgIg");
	this.shape_82.setTransform(76.2,-48.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.506)").s().p("AgoBLQgDgCAAgEIAAgdIACgoIACgoIAAgNQgBgKACgFQACgIAHABIAJgCIAPAAQARAAAPANQARANAAASQAAAZgSAOQgRAMgVAAIgNgBIgBA0QAAAEgCACQgDADgDAAQgEAAgCgDgAgQg6IgFAAIAAASIgCAoIALAAQAOAAAMgIQAMgJAAgQQABgKgMgIQgLgIgMAAIgIABg");
	this.shape_83.setTransform(64.6,-49.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.506)").s().p("AgqBLQgJgJAAgfIAAgNIAAgQIAAgGQAAgBABgDIACgqIgBgKIgBgLQAAgMAKAAQAFAAADADIAVgFIATgBQAYAAAOAGQAHACAAAHQAAADgDADQgDAEgEAAIgDAAQgRgFgPAAIgQABIgVAFIABAKIgCAlIAqgEIAYgCQADAAADADQAEACAAAGQgBAHgIACIgYACIgsADIgBAOIAAALQAAAWADAEQADACAMAAIASAAIASgBIAGAAIAFgBQALAAAAAKQAAAJgIABQgKACgdAAQgeAAgJgIg");
	this.shape_84.setTransform(53.3,-48.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.506)").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_85.setTransform(39.9,-48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DependentClauseDefSimple, new cjs.Rectangle(5.9,-66.8,430.5,61.8), null);


(lib.DependentClauseDef_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape.setTransform(423,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghBMQgNgCAAgJQAAgIAJAAIAMABQAIADAKgBQASAAAHgSQAEgMABgYQgGAJgGAFQgIAFgIAAQgSAAgLgMQgLgMAAgSQAAgbAPgQQAQgRAaAAQAJAAAGADQAGACADAFQALAAAAAMQAAAGgCAMIgDATIgDAfQAAAUgDAMQgFAQgKAIQgLAIgWABQgMAAgJgCgAgRgwQgJAMAAARQAAAPAFAFQAFAIALAAQAJgBAJgJQAJgLABgKIAFghIgIgFIgJgBQgSAAgKANg");
	this.shape_1.setTransform(415,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQgBgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAGAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgEAAQgIAAgBgJg");
	this.shape_2.setTransform(404.9,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIBHQgDgDAAgEIAAgSIgBgSIABgWIABgWQAAgFACgDQADgCAFAAQACAAAEACQACADAAAFIgBAWIgBAWIABASIAAASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADABQAFgBAEAEQADAEAAAEQAAAFgDADQgEAEgFgBQgDABgEgEg");
	this.shape_3.setTransform(396.9,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIABgJIAAgJQgBgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_4.setTransform(388.9,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAKgIQgEgZAAgNIABgJIACgKIgGgDIgFgBQgOAAgKAMg");
	this.shape_5.setTransform(378.4,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_6.setTransform(367.9,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFA6QgDgDAAgFIgCgiQgCgXAAgLQAAgLgDgFQgHADgHAHIgMANIgFAGIgBAQIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADADQADADAAAEIAAAGIAAAGIAAAKQAFgKAKgIQAKgJAGAAQAQAAAFAPQAFgHAHgDQAIgEAJAAQARAAAGASIAEAbIAHA3QAAAEgDADQgDACgEAAQgIAAgCgIIgDgeIgDgeIgEgNQgDgJgEAAQgEAAgJAGQgKAGgDAEIABASIADAZQACAPAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_7.setTransform(354.6,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBEQgCgCAAgDIAAgMIAAgLIgCg4IgWgBQgIgCAAgIQAAgFADgCQACgDAEAAIAVACIAAgOIgBgMQAAgEADgDQACgCAFAAQAHAAACAOIAAAIIAAAGIAAAHIANgCQALAAADABQAGACAAAHQAAAEgDADQgCADgFAAIgEAAIgGAAIgMABIABA4IAAAFIAAAFQABAVgKABQgDAAgEgEg");
	this.shape_8.setTransform(336,10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIBHQgEgDAAgEIAAgSIAAgSIABgWIABgWQAAgFADgDQACgCAFAAQADAAACACQADADAAAFIgBAWIgBAWIAAASIABASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEAEABQAEgBAEAEQADAEAAAEQAAAFgDADQgEAEgEgBQgEABgEgEg");
	this.shape_9.setTransform(328.7,9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_10.setTransform(314.4,12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAtIgPgnIgRgsIgBgFQAAgEADgDQADgCAEgBQAGAAACAHIAZBCIASgsIAIgWQADgGAFAAQAEAAADADQADADAAADQAAAEgQAnIgUAtQAAAJgIAAQgHAAgDgJg");
	this.shape_11.setTransform(304,12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIBHQgDgDgBgEIAAgSIAAgSIABgWIABgWQAAgFADgDQACgCAFAAQACAAADACQADADAAAFIgBAWIgBAWIABASIAAASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADABQAFgBAEAEQADAEAAAEQAAAFgDADQgEAEgFgBQgDABgEgEg");
	this.shape_12.setTransform(296.4,9.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghBMQgNgCAAgJQAAgIAJAAIAMABQAIADAKgBQASAAAHgSQAFgMAAgYQgGAJgGAFQgIAFgIAAQgSAAgLgMQgLgMAAgSQAAgbAPgQQAQgRAaAAQAIAAAHADQAGACADAFQALAAAAAMQAAAGgDAMIgCATIgCAfQgBAUgEAMQgDAQgKAIQgMAIgWABQgMAAgJgCgAgRgwQgJAMAAARQAAAPAFAFQAFAIAMAAQAIgBAKgJQAIgLABgKIAFghIgIgFIgJgBQgSAAgKANg");
	this.shape_13.setTransform(288,14.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_14.setTransform(271.5,12.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFBEQgEgCAAgDIABgMIAAgLIgCg4IgVgBQgJgCAAgIQAAgFADgCQACgDAEAAIAUACIAAgOIAAgMQAAgEACgDQADgCAEAAQAJAAABAOIAAAIIAAAGIAAAHIAOgCQAKAAADABQAGACAAAHQAAAEgCADQgEADgDAAIgGAAIgEAAIgOABIACA4IAAAFIAAAFQABAVgLABQgCAAgDgEg");
	this.shape_15.setTransform(261.7,10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgqBLQgKgJAAgfIABgNIABgQIgCgGQABgCACgCIACgqIgBgKIgBgLQAAgMAKAAQADAAAEADIAVgFIATgBQAYAAAOAGQAGACAAAHQABADgDADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAlIApgEIAXgCQAFAAADADQACADAAAFQAAAHgJACIgXABIgsAEIAAAOIgBALQAAAVADAFQADACANAAIARAAIASgBIAGAAIAFgBQALAAAAAKQAAAJgJABQgIACgeAAQgeAAgJgIg");
	this.shape_16.setTransform(245.1,9.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmBEQgTgJAAgPQAAgEADgCQADgCAEgBQAEABAFAFQAFAIADACQAJAGAPAAQAOAAANgHQARgIAAgQQAAgMgOgHQgMgGgQgBQgPAAgMgFQgNgIAAgPQAAgSATgNQAUgOASAAQAKAAAMADQAPAEABAHQAAAIgJABIgOgDIgPgCQgOAAgLAIQgLAHAAALQAAAIAPADIATACQAXADAMAMQAMAKAAAQQAAAYgWANQgSANgYAAQgRgBgPgGg");
	this.shape_17.setTransform(231.7,10.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgqA6QgNgOgDgcQgBgMAAgkIAAgXIACgMQADgHAGAAQAJAAAAAQIAAA6QAAA6AoAAQAnAAAAhiIAAgKIAAgIQAAgGACgEQADgHAGAAQAJAAAAAOIAAAMIAAAMQAABxg6AAQgdAAgPgSg");
	this.shape_18.setTransform(217.4,9.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgZAFIgQAmQgDAFgGAAQgEAAgCgDQgEgDAAgEQAAgFAPgfQgCgCABgDQAAgIAJgDQALgTARgcQAWglAGAAQAHAAADALIAGAhIAPBDIAFAPIAEALQgBAEgDADQgCADgFAAQgIAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_19.setTransform(202.5,10);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgqBNQgFgEAAgLIACghQACgrAAg3QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAA3gDAtIgBAOIgBAPQAaAAAmgMIADgBQAEAAADAEQACADAAAEQAAAGgGADQgLAFgYAEQgVAEgNAAQgKAAgFgDg");
	this.shape_20.setTransform(190,10);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgoA8QgNgPAAgUQAAghAbgiQAXgdAXAAIAJAAIAGACQAEgFAFgBQAHAAACAJQABAIAAAMQAAADgCADQgDAFgEAAQgHAAgDgIQgDgGgCgCQgCgBgIAAQgOAAgQAWQgYAdAAAaQAAAMAIAJQAIAKAMAAQAJgBAKgFQAGgDAMgJQAFgDADAAQAEAAADADQADADAAAEQAAAEgEAEQgZAWgaAAQgUAAgOgPg");
	this.shape_21.setTransform(178.5,9.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGBHQgDgCAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgnIgIAAQgWgBgMgDQgIgBAAgJQAAgDADgEQADgDAEAAIAQACIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAPIABALIAAALQAAAGgCAFQgCAHgGAAQgDgBgDgDg");
	this.shape_22.setTransform(160.3,9.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhBBMQgCgDgBgEIABgNIAAgLIABgTIAAgSIAAgSIAAgUIgCgSIgBgTQAAgEAFgEQADgDAFgBQAFAAAIAMQAYAlATAXQAXAcAbAaIAAgMIAAgNQAAgqgDgZIgDgKIgCgKQAAgMALAAQARAAAAA/IAAAgIgBAhIgCAPQgBAKgJAAQgGAAgHgHQgogmgyhFIAAAVIgBAVIABAZIAAAZQAAAagLAAQgFAAgDgEg");
	this.shape_23.setTransform(144.8,9.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgqBLQgJgJAAgfIAAgNIABgQIgBgGQAAgCABgCIACgqIgBgKIgBgLQAAgMAKAAQAFAAACADIAWgFIATgBQAYAAAOAGQAHACAAAHQAAADgDADQgDAEgEAAIgDAAQgRgFgPAAIgQABIgVAFIABAKIgCAlIAqgEIAYgCQADAAADADQAEADAAAFQgBAHgIACIgYABIgsAEIgBAOIAAALQAAAVADAFQADACAMAAIASAAIASgBIAGAAIAFgBQALAAAAAKQAAAJgIABQgKACgdAAQgeAAgJgIg");
	this.shape_24.setTransform(130.7,9.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_25.setTransform(117.3,9.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhBBMQgCgDAAgEIAAgNIABgLIAAgTIABgSIgBgSIAAgUIgBgSIgCgTQABgEAEgEQADgDAFgBQAGAAAHAMQAYAlATAXQAXAcAcAaIAAgMIgBgNQAAgqgDgZIgDgKIgCgKQAAgMAKAAQARAAABA/IAAAgIgBAhIgBAPQgCAKgJAAQgFAAgIgHQgngmgzhFIAAAVIgBAVIABAZIAAAZQAAAagKAAQgFAAgEgEg");
	this.shape_26.setTransform(101.9,9.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgqBLQgKgJAAgfIABgNIAAgQIgBgGQAAgCACgCIADgqIgBgKIgCgLQAAgMALAAQAEAAACADIAXgFIASgBQAYAAAOAGQAGACABAHQgBADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAlIApgEIAXgCQAFAAADADQACADAAAFQABAHgKACIgXABIgsAEIgBAOIAAALQAAAVAEAFQABACANAAIASAAIASgBIAGAAIAGgBQAKAAAAAKQAAAJgJABQgJACgdAAQgfAAgIgIg");
	this.shape_27.setTransform(87.8,9.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgoBLQgDgCAAgEIAAgdIABgoIADgoIAAgOQAAgJABgFQACgIAIABIAJgCIANAAQASAAAPANQARANAAASQAAAZgSAOQgRAMgVAAIgNgBIgBA0QABAEgDACQgDADgDAAQgEAAgCgDgAgQg6IgFABIAAASIgDAnIAMAAQAOAAAMgIQAMgJAAgQQABgKgMgIQgLgIgMAAIgIABg");
	this.shape_28.setTransform(76.2,9.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgqBLQgJgJAAgfIAAgNIABgQIgBgGQAAgCABgCIACgqIgBgKIgBgLQAAgMAKAAQAEAAAEADIAVgFIATgBQAYAAAOAGQAHACgBAHQAAADgCADQgDAEgEAAIgDAAQgRgFgPAAIgQABIgVAFIABAKIgCAlIAqgEIAYgCQADAAADADQAEADAAAFQgBAHgIACIgYABIgsAEIgBAOIAAALQAAAVADAFQACACAOAAIARAAIASgBIAGAAIAFgBQALAAAAAKQAAAJgIABQgKACgdAAQgfAAgIgIg");
	this.shape_29.setTransform(64.9,9.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_30.setTransform(51.5,9.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhBBMQgDgDAAgEIABgNIABgLIAAgTIABgSIgBgSIAAgUIgCgSIgBgTQAAgEAFgEQADgDAFgBQAGAAAHAMQAYAlATAXQAXAcAcAaIAAgMIgBgNQAAgqgDgZIgDgKIgCgKQAAgMALAAQAQAAABA/IAAAgIgBAhIgBAPQgCAKgJAAQgGAAgHgHQgngmgzhFIAAAVIgBAVIABAZIAAAZQAAAagKAAQgGAAgDgEg");
	this.shape_31.setTransform(36.1,9.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgqBIQgDgDAAgEQAAgEADgDQACgDAEAAIAWgCIABgSIgBgRIAAgQQgBgWADgiIgMABIgOAAQgDAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAFQAIABAAAJQAAAFgEACQgCADgEAAIgQgCIgQgCQgCAdAAAZIAAAQIABARIgBARIAfAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgQAAIgQAAIgTACIgUACQgEAAgCgDg");
	this.shape_32.setTransform(22.5,9.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQAAAEgDADQgDACgEAAQgFAAgCgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAGAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_33.setTransform(378.2,-17.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAQgRAVAAQAJAAAKAEQANAGAAAHQAAADgCACIgBAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAJgIQgCgZAAgNIAAgJIABgKIgGgDIgEgBQgOAAgLAMg");
	this.shape_34.setTransform(367.6,-17.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_35.setTransform(351.1,-17.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGBEQgCgCAAgEIAAgLIAAgLIgCg4IgWgCQgIgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEADgCQACgDAEAAQAJAAABAOIAAAIIAAAHIAAAFIANgBQALAAADABQAGABAAAIQAAAEgDADQgCADgFAAIgEgBIgGAAIgMACIACA4IAAAFIAAAFQAAAVgKAAQgEAAgDgDg");
	this.shape_36.setTransform(341.3,-19.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgaA2QgQgFABgKQAAgEACgDQADgDAEAAQADAAAGAFQABACAJACIALABQAHAAAHgCQAJgDAAgGQAAgNgTgFIgJgCQgNgDgFgEQgJgEABgLQgBgVAUgJIARgGQANgDAGgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgFAAgDgEQgBgDgBgIIgWAHQgQAGABAKIAGABQAVAEAKAHQAQAKAAATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_37.setTransform(325.5,-18.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFBEQgEgCAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAVABIAAgNIgBgMQAAgEACgCQADgDAEAAQAJAAABAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgEADgDAAIgGgBIgEAAIgOACIACA4IAAAFIAAAFQABAVgLAAQgCAAgDgDg");
	this.shape_38.setTransform(316.2,-19.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAKAAAMAFQAOAGAAAHQAAAFgCACQgDADgDAAQgDAAgCgCIgEgDQgGgEgNgBQgJABgKARQgJAQAAALQAAAOAJAHQAIAHAMAAQAGAAAHgEIALgGIAEgBQAEAAACADQADADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_39.setTransform(306.4,-17.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_40.setTransform(295.9,-17.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgEAAQgIAAgBgJg");
	this.shape_41.setTransform(285.3,-17.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_42.setTransform(274.9,-17.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_43.setTransform(264.1,-17.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAKAAAMAFQAPAGAAAHQAAAFgDACQgDADgDAAQgDAAgCgCIgEgDQgGgEgNgBQgJABgKARQgJAQAAALQAAAOAJAHQAJAHALAAQAGAAAGgEIAMgGIAEgBQAEAAADADQACADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_44.setTransform(254,-17.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_45.setTransform(236.9,-20.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_46.setTransform(226.1,-17.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgDgZgBgNIABgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_47.setTransform(215.6,-17.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIABgJIAAgJQgBgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_48.setTransform(199.5,-17.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_49.setTransform(188.6,-17.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AglBPQgCgCgBgFIAAgnIAAglQABgWgCgSIgBgUQgBgGADgFQADgGAGAAQADAAADADQACACAAAEIAAAEIAAAFQAIgFAIgEQAHgDAHAAQAUABAJARQAIAOgBAXQABAVgMANQgMAPgUAAQgJAAgMgDIAAAuQABAFgDACQgDADgEAAQgFAAgCgDgAgIgyQgGACgIAIQACAWAAAXQALAFAJgBQAMABAHgKQAFgHAAgNQABgRgFgJQgEgJgJAAQgIAAgHAFg");
	this.shape_50.setTransform(178.3,-15.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_51.setTransform(167.7,-17.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgaA2QgQgFABgKQAAgEACgDQADgDAFAAQADAAAFAFQABACAJACIALABQAHAAAHgCQAJgDAAgGQAAgNgTgFIgJgCQgNgDgFgEQgJgEABgLQgBgVAUgJIARgGQANgDAGgDQAEgCAEAAQAFAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgFAAgDgEQgBgDgBgIIgWAHQgQAGABAKIAGABQAVAEAKAHQAQAKAAATQABAQgOAIQgMAHgQAAQgNAAgLgFg");
	this.shape_52.setTransform(151.3,-18.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_53.setTransform(140.8,-20.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_54.setTransform(130.1,-17.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_55.setTransform(119.3,-17.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglBPQgDgCAAgFIAAgnIAAglQAAgWgBgSIgCgUQABgGACgFQADgGAFAAQAEAAADADQACACAAAEIAAAEIgBAFQAJgFAIgEQAHgDAHAAQAUABAJARQAIAOAAAXQAAAVgMANQgMAPgUAAQgJAAgLgDIAAAuQAAAFgDACQgDADgEAAQgFAAgCgDgAgIgyQgFACgJAIQACAWAAAXQALAFAJgBQANABAFgKQAGgHABgNQAAgRgFgJQgFgJgIAAQgIAAgHAFg");
	this.shape_56.setTransform(108.4,-15.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_57.setTransform(97.7,-17.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_58.setTransform(86.1,-20.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgGBEQgCgCAAgEIAAgLIAAgLIgCg4IgWgCQgIgBAAgJQAAgDADgDQACgDAEAAIAVABIAAgNIgBgMQAAgEADgCQACgDAFAAQAHAAACAOIAAAIIAAAHIAAAFIANgBQALAAADABQAGABAAAIQAAAEgDADQgCADgFAAIgEgBIgGAAIgMACIACA4IAAAFIAAAFQAAAVgKAAQgDAAgEgDg");
	this.shape_59.setTransform(69.6,-19.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgIBHQgEgDAAgEIAAgSIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQADAAACADQADADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEAEAAQAEAAAEAEQADAEAAAEQAAAFgDADQgEADgEAAQgEAAgEgDg");
	this.shape_60.setTransform(62.3,-20.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgeABQAAgHAIAAIAWgBIAXAAQAJAAAAAHQAAAGgIABQgOABggAAQgIAAAAgHg");
	this.shape_61.setTransform(427.2,-48.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_62.setTransform(411.7,-47.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQAAAEgDADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_63.setTransform(401.1,-47.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_64.setTransform(390.3,-47.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgKBGIABgjIABgjIAAgiIABgkQAAgKAIABQAKgBAAAKIAAAkIgBAiIgBAxIgBAWQgBAKgIgBQgJAAAAgKg");
	this.shape_65.setTransform(382.5,-50.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAIAAALAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_66.setTransform(374.6,-47.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgPQAOgPAVAAQALgBAGAEIAKAHIADg3QABgJAIAAQAJAAAAAKQAAANgEAuIgBAcQAAAhADAQIAAACQAAAEgDADQgDACgDAAQgGAAgDgJQgHAGgIACQgHADgIAAQgUAAgNgOgAgWACQgIAJAAAUQAAAMAJAJQAIAJAMAAQAIAAAFgDQAEgBAHgHIADgCIAAgSIAAgLIAAgMQgEgHgGgDQgGgEgJAAQgPAAgIAJg");
	this.shape_67.setTransform(357.6,-50.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_68.setTransform(346.8,-47.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAKgIQgDgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_69.setTransform(336.3,-47.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgGBFQgDgDAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDADgEQACgCAEAAIAVABIAAgNIgBgMQAAgEACgCQAEgEAEAAQAHAAACAPIAAAJIAAAGIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgDADQgDADgDAAIgGgBIgEAAIgOACIACA5IAAAEIAAAFQABAWgLgBQgCAAgEgCg");
	this.shape_70.setTransform(326.4,-49.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgaA2QgPgFgBgKQAAgEADgDQAEgDADAAQAEAAAFAFQABACAJACIALABQAHAAAGgCQAKgDAAgGQAAgNgTgFIgJgCQgNgDgFgEQgJgEABgLQAAgVASgJIASgGQANgDAGgDQAEgCAEAAQAFAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgGAAgBgEQgCgDgBgIIgWAHQgPAGgBAKIAHABQAVAEAKAHQARAKgBATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_71.setTransform(316.6,-48);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFBFQgDgDAAgEIAAgLIAAgLIgCg4IgWgCQgIgBAAgJQAAgDACgEQADgCAEAAIAUABIAAgNIAAgMQAAgEADgCQACgEAEAAQAJAAABAPIAAAJIAAAGIAAAFIANgBQALAAADABQAGABAAAIQAAAEgCADQgEADgEAAIgEgBIgGAAIgMACIACA5IAAAEIAAAFQAAAWgKgBQgEAAgCgCg");
	this.shape_72.setTransform(301.3,-49.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_73.setTransform(291.2,-47.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQgBgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAGAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgEAAQgIAAgBgJg");
	this.shape_74.setTransform(281.2,-47.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_75.setTransform(270.8,-47.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAKgIQgDgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_76.setTransform(260.2,-47.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgSANgVQAPgYARAAQAJAAAMAEQAPAGABAIQgBAFgCADQgCACgEAAQgDAAgCgBIgEgEQgGgEgNgBQgJABgKARQgJAQABALQgBANAJAIQAJAHALAAQAGAAAGgDIAMgHIAEgBQAEAAADADQACADAAADQAAAIgPAHQgNAFgJAAQgTAAgNgMg");
	this.shape_77.setTransform(250,-47.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00FFCC").s().p("AgqBLQgJgIAAggIAAgOIAAgQIAAgEQAAgDABgDIACgpIgBgLIgBgKQAAgMAKAAQAFAAADADIAVgEIATgCQAYAAAOAFQAHADAAAHQAAAEgDACQgDAEgEAAIgDgBQgRgEgPAAIgQABIgVAFIABAKIgCAmIAqgFIAYgCQADAAADADQAEADAAAEQgBAIgIABIgYADIgsADIgBANIAAAMQAAAVADAFQADACAMAAIASAAIASAAIAGgBIAFAAQALAAAAAKQAAAHgIADQgKABgdAAQgeAAgJgIg");
	this.shape_78.setTransform(232.9,-50.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00FFCC").s().p("AgmBDQgTgHAAgPQAAgFADgCQADgDAEABQAFgBAEAGQAEAHAEADQAIAFARAAQAOAAANgGQAQgJAAgOQAAgNgOgHQgLgGgRAAQgPgBgLgGQgOgHAAgPQAAgRAUgPQASgNAUAAQAJAAAMADQAQAEAAAGQgBAKgIgBIgOgCIgPgCQgOABgLAGQgKAIAAALQgBAIAOAEIAVABQAWACANANQALAKAAARQAAAWgWAPQgSAMgXgBQgTABgOgIg");
	this.shape_79.setTransform(219.5,-49.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00FFCC").s().p("AgqA6QgNgOgDgbQgBgNAAgkIAAgWIACgMQADgIAGAAQAJAAAAARIAAA5QAAA6AoAAQAnAAAAhjIAAgJIAAgIQAAgGACgFQADgFAGAAQAJAAAAANIAAAMIAAANQAABvg6AAQgdAAgPgRg");
	this.shape_80.setTransform(205.2,-49.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00FFCC").s().p("AAiAzIgHgfIgZAFIgZAFIgRAmQgEAFgEAAQgEAAgEgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAIAAADALIAFAhIAPBDIAGAPIACALQAAAEgCADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_81.setTransform(190.3,-49.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00FFCC").s().p("AgqBNQgFgEAAgLIACghQACgrAAg3QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAA3gDAtIgBAOIgBAPQAaAAAmgMIADgBQAEAAADAEQACADAAAEQAAAGgGADQgLAFgYAEQgVAEgNAAQgKAAgFgDg");
	this.shape_82.setTransform(177.8,-49.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00FFCC").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgeAXAAIAJABIAGACQAEgGAFAAQAHABACAIQABAIAAALQAAAEgCAEQgDADgEAAQgHABgDgIQgDgGgCgBQgCgBgIAAQgOAAgQAVQgYAdAAAZQAAANAIAJQAIAKAMAAQAJAAAKgGQAGgDAMgIQAFgFADAAQAEAAADAEQADADAAAEQAAAEgEADQgZAYgaAAQgUAAgOgQg");
	this.shape_83.setTransform(166.3,-50);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00FFCC").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgOIgBgOIgCgnIgDgnIgIAAQgWAAgMgCQgIgDAAgHQAAgFADgCQADgDAEAAIAQACIAQABIARAAIARgBIAWABIAXABQAEAAADADQADADAAAEQAAAFgDACQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAGgGAAQgDAAgDgCg");
	this.shape_84.setTransform(148.1,-50.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00FFCC").s().p("AhBBMQgCgCAAgFIAAgMIABgNIAAgSIABgSIgBgTIAAgTIgBgSIgBgTQAAgEADgEQAEgEAFABQAFAAAIALQAYAkATAZQAXAbAcAaIAAgNIgBgMQAAgpgDgaIgDgKIgCgLQAAgLAKAAQARAAAABAIAAAfIAAAgIgBAQQgCAKgJAAQgGAAgHgHQgogmgyhGIAAAXIgBAUIABAZIAAAYQAAAagKAAQgFAAgEgDg");
	this.shape_85.setTransform(132.6,-49.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00FFCC").s().p("AgqBLQgKgIAAggIABgOIAAgQIgBgEQAAgDADgDIACgpIgBgLIgBgKQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADABAHQgBAEgCACQgDAEgEAAIgDgBQgQgEgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACADAAAEQABAIgKABIgXADIgsADIAAANIgBAMQAAAVAEAFQACACANAAIARAAIASAAIAGgBIAGAAQAKAAAAAKQAAAHgJADQgJABgdAAQgeAAgJgIg");
	this.shape_86.setTransform(118.5,-50.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00FFCC").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_87.setTransform(105.1,-49.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00FFCC").s().p("AhBBMQgCgCgBgFIABgMIAAgNIABgSIAAgSIAAgTIAAgTIgCgSIAAgTQAAgEADgEQAEgEAFABQAGAAAHALQAYAkATAZQAXAbAbAaIAAgNIAAgMQAAgpgDgaIgDgKIgCgLQAAgLAKAAQASAAgBBAIAAAfIAAAgIgCAQQgBAKgJAAQgFAAgIgHQgngmgzhGIgBAXIAAAUIAAAZIABAYQAAAagLAAQgEAAgEgDg");
	this.shape_88.setTransform(89.7,-49.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00FFCC").s().p("AgqBLQgJgIAAggIAAgOIABgQIgBgEQAAgDACgDIABgpIAAgLIgBgKQgBgMAKAAQAFAAADADIAVgEIATgCQAYAAAOAFQAHADgBAHQAAAEgCACQgDAEgEAAIgDgBQgRgEgPAAIgRABIgUAFIABAKIgCAmIAqgFIAXgCQAFAAACADQADADABAEQgBAIgIABIgYADIgsADIAAANIgBAMQAAAVADAFQACACAOAAIARAAIASAAIAGgBIAFAAQALAAAAAKQAAAHgJADQgIABgeAAQgfAAgIgIg");
	this.shape_89.setTransform(75.6,-50.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00FFCC").s().p("AgpBLQgCgCAAgFIAAgcIACgoIABgoIAAgNQABgKABgFQACgIAHABIAJgCIAPAAQAQAAAQAMQARAOAAATQAAAYgSANQgQANgXAAIgLgBIgBAzQAAAFgDACQgDADgDAAQgEAAgDgDgAgPg6IgGAAIgBASIgBAnIAKABQAPAAAMgIQANgJAAgPQAAgLgNgIQgLgHgLgBIgHABg");
	this.shape_90.setTransform(64,-50.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00FFCC").s().p("AgqBLQgKgIAAggIABgOIAAgQIgBgEQAAgDACgDIADgpIgBgLIgCgKQAAgMALAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADABAHQgBAEgCACQgDAEgEAAIgDgBQgQgEgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAFAAADADQACADAAAEQABAIgKABIgXADIgsADIgBANIAAAMQAAAVAEAFQABACANAAIASAAIASAAIAGgBIAGAAQAKAAAAAKQAAAHgJADQgJABgdAAQgfAAgIgIg");
	this.shape_91.setTransform(52.7,-50.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00FFCC").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_92.setTransform(39.3,-49.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_93.setTransform(18.3,-49.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.506)").s().p("AgqBLQgKgJABgfIAAgNIABgQIgBgGQAAgBACgDIABgqIAAgKIgBgLQgBgMALAAQADAAAEADIAVgFIATgBQAYAAAOAGQAGACAAAHQABADgDADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgCAlIAqgEIAXgCQAFAAACADQADACAAAGQAAAHgJACIgXACIgsADIAAAOIgBALQAAAWADAEQACACAOAAIARAAIASgBIAGAAIAFgBQALAAAAAKQAAAJgJABQgIACgeAAQgeAAgJgIg");
	this.shape_94.setTransform(233.5,-48.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.506)").s().p("AgmBEQgTgJAAgPQAAgDADgDQADgCAEgBQAFABAEAFQAFAIADACQAJAGAPgBQAOABANgHQARgIAAgQQAAgMgOgHQgMgGgQgBQgQAAgKgGQgOgHAAgPQAAgSATgOQAUgOATABQAJAAAMADQAQAEAAAGQAAAJgJAAIgOgCIgPgCQgOAAgLAIQgLAHAAALQAAAIAOADIAUACQAXADAMAMQAMAKAAAQQAAAYgWANQgSAMgYAAQgRAAgPgGg");
	this.shape_95.setTransform(220.1,-48.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.506)").s().p("AgqA6QgNgOgDgcQgBgMAAgkIAAgXIACgLQADgIAGAAQAJAAAAARIAAA5QAAA6AoAAQAnAAAAhiIAAgKIAAgIQAAgGACgEQADgHAGAAQAJAAAAAOIAAAMIAAAMQAABxg6AAQgdAAgPgSg");
	this.shape_96.setTransform(205.8,-48.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.506)").s().p("AAiAzIgHgfIgaAFIgZAFIgQAmQgDAFgFAAQgFAAgCgDQgDgDgBgEQAAgFAPgfQgCgCABgDQAAgIAJgDQALgTARgcQAWglAGAAQAHAAADALIAGAhIAPBDIAFAPIAEALQAAAEgEADQgCADgEAAQgJAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_97.setTransform(190.9,-48.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.506)").s().p("AgqBNQgFgEAAgLIACghQACgrAAg3QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAA3gDAtIgBAOIgBAPQAaAAAmgMIADgBQAEAAADAEQACADAAAEQAAAGgGADQgLAFgYAEQgVAEgNAAQgKAAgFgDg");
	this.shape_98.setTransform(178.4,-48.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.506)").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgdAXAAIAJAAIAGACQAEgFAFgBQAHAAACAJQABAIAAALQAAAFgCACQgDAFgEAAQgHAAgDgIQgDgGgCgCQgCAAgIAAQgOgBgQAWQgYAdAAAZQAAANAIAJQAIAKAMAAQAJgBAKgFQAGgDAMgJQAFgDADAAQAEAAADADQADADAAAEQAAAEgEAEQgZAWgaAAQgUAAgOgPg");
	this.shape_99.setTransform(166.9,-48.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.506)").s().p("AgGBHQgDgCAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgoIgIAAQgWAAgMgDQgIgBAAgJQAAgEADgDQADgCAEAAIAQABIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAPIABALIAAAKQAAAHgCAFQgCAHgGgBQgDAAgDgDg");
	this.shape_100.setTransform(148.7,-48.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.506)").s().p("AhBBMQgDgDAAgEIABgNIAAgLIABgTIABgSIgBgSIAAgUIgCgSIgBgTQAAgEAFgEQADgDAFgBQAGAAAHAMQAYAkATAYQAXAcAcAaIAAgMIgBgNQAAgqgDgZIgDgKIgCgLQAAgLALAAQARAAAAA/IAAAgIgBAgIgCAQQgBAKgJAAQgGAAgHgHQgogmgyhGIAAAXIgBAUIABAZIAAAZQAAAagKAAQgGAAgDgEg");
	this.shape_101.setTransform(133.2,-48.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.506)").s().p("AgqBLQgJgJgBgfIABgNIAAgQIgBgGQAAgBACgDIACgqIgBgKIgBgLQABgMAJAAQAFAAACADIAXgFIASgBQAYAAAOAGQAHACAAAHQAAADgDADQgDAEgEAAIgDAAQgQgFgQAAIgQABIgVAFIABAKIgCAlIAqgEIAYgCQADAAAEADQADACAAAGQAAAHgJACIgYACIgsADIgBAOIAAALQAAAWAEAEQABACANAAIASAAIASgBIAGAAIAGgBQAKAAAAAKQAAAJgIABQgKACgdAAQgeAAgJgIg");
	this.shape_102.setTransform(119.1,-48.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.506)").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_103.setTransform(105.7,-48.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.506)").s().p("AhBBMQgCgDAAgEIAAgNIABgLIAAgTIABgSIgBgSIAAgUIgBgSIgBgTQAAgEADgEQAEgDAFgBQAFAAAIAMQAYAkATAYQAXAcAcAaIAAgMIgBgNQAAgqgDgZIgDgKIgCgLQAAgLAKAAQARAAAAA/IAAAgIAAAgIgBAQQgCAKgJAAQgGAAgHgHQgogmgyhGIgBAXIAAAUIAAAZIABAZQAAAagKAAQgFAAgEgEg");
	this.shape_104.setTransform(90.3,-48.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.506)").s().p("AgqBLQgKgJAAgfIABgNIAAgQIgBgGQAAgBADgDIACgqIgBgKIgBgLQAAgMAKAAQADAAADADIAXgFIASgBQAYAAAOAGQAGACAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAlIApgEIAXgCQAEAAAEADQACACAAAGQABAHgKACIgXACIgsADIAAAOIgBALQAAAWAEAEQACACANAAIARAAIASgBIAGAAIAGgBQAKAAAAAKQAAAJgJABQgJACgdAAQgeAAgJgIg");
	this.shape_105.setTransform(76.2,-48.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.506)").s().p("AgoBLQgDgCAAgEIAAgdIACgoIACgoIAAgNQgBgKACgFQACgIAHABIAJgCIAPAAQARAAAPANQARANAAASQAAAZgSAOQgRAMgVAAIgNgBIgBA0QAAAEgCACQgDADgDAAQgEAAgCgDgAgQg6IgFAAIAAASIgCAoIALAAQAOAAAMgIQAMgJAAgQQABgKgMgIQgLgIgMAAIgIABg");
	this.shape_106.setTransform(64.6,-49.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.506)").s().p("AgqBLQgJgJAAgfIAAgNIAAgQIAAgGQAAgBABgDIACgqIgBgKIgBgLQAAgMAKAAQAFAAADADIAVgFIATgBQAYAAAOAGQAHACAAAHQAAADgDADQgDAEgEAAIgDAAQgRgFgPAAIgQABIgVAFIABAKIgCAlIAqgEIAYgCQADAAADADQAEACAAAGQgBAHgIACIgYACIgsADIgBAOIAAALQAAAWADAEQADACAMAAIASAAIASgBIAGAAIAFgBQALAAAAAKQAAAJgIABQgKACgdAAQgeAAgJgIg");
	this.shape_107.setTransform(53.3,-48.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.506)").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_108.setTransform(39.9,-48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DependentClauseDef_2, new cjs.Rectangle(5.9,-66.8,430.5,91.7), null);


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


(lib.WhiteSheet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.851)").s().p("EggOAQLMAAAggVMBAaAAAIAAP3IADAAIAADcIgDAAIAANCg");
	this.shape.setTransform(206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WhiteSheet, new cjs.Rectangle(0,0,412.6,207), null);


(lib.PartyOnTheBeach3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhZgJQALgIAJAMQAUgeAOAfQAGgSAXANQAGADAAAGQAAADAAABQAEgDAKgBQADgBACACQAFAHgBAIQASgYAJAWQAEgJAOAHQACABAAAEQAQgKAEAO");
	this.shape.setTransform(266.5,186.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AbSgXQglgGglgLQgpgLgqgDQgtgDgtADQgtACgtAIQgtAHgrgKQgtgKgqgSQgZgLgfACQgtADgpgOQgpgOgngDQgGgBgHgBQgngEgogEQgqgEgrAAQgbAAgbABQgUAAgTAAQglAHgogCQgwgCgqAIQgRACgRAEQAAgdAcADQATggAHAXQAVgqALAkQAbglAHAhQASgnAMAmQAVgPAcASQABABACABQABABABACQAbgVAJAnQAdg5AnAwQAmg4AaAzQAmhFAwArQAEACADAEQAyglASAtQAgg0AgAdQArgYAKArQAfgmALAxQAFgMAEgIQgVgggjACQAogIAvgDQgmgNgeggQApAFAsATQgLgngbgjQAzgBApAgQAZhIgGhJQAPAyASAtQAMg2AYg0QAFAoAOAyQAnhAA/gmQgSAzgPA+QBEgxBdgOQgjAlgmAmQBFAEBOAdQhkAPgZAEQgFAVBGAKQgZARgdAJQArADAqAQQgKALgPAIQAQACAEAAQgLARhHAFQgYgVglAnQACgvgmAWQgNAIgEASQgcgyguAtQAMgPgRgZQgLgRgSASQgHAGgEAKQgBADgBADAV+iZQAJgdgMgdQgiAHgDAYQgJg3gnArQgGAHACAKQgcgqgNA4QgPgfgQAZAZniQQAJAIAHASQATgXATAeQAjggAdBsQABABAAADQAAABABACAbSgXQAGgDAHgCQAAACAAAFQgGgBgHgBgEAttAAsQnQgLgogEQiPgPiKgVQhCgKg5gVQiAgwiCA5IAAABAcMNVQgJgIgHgHQgZAaApgLgAamNIQgOARAmgJAbFOUQgPgCgNAHQAEALAKgEAQHJuQAAADgBACQgDAIgQgHQABAAAAAAQAIgFALgBQAIgBAKACAPnJeQgJgBgHABQgIALgHgIQAHgDAIAAAOeJgQAHABACgKQgvAGAmADgAQgKGQgxAJAnAPQAPAFAJgKAuBPhQAYgBAXgDQAtgFAtgHQAtgGAsgGQABAAAAAAQAtgHAtgHQAugIAugGQAtgFAqgJQAugKAtgMQAsgNAugDQAVgBAUgGQATgFATgJQABgBABAAQATgCASgDQAtgJAugHQAtgIAtgNQAsgNAsgMQArgMAsgMQARgFARgGQAbgJAagKQApgRAsgNQAWgGAVgEQAWgFAXgCQAsgEArgJQAugJAjAfQABACACABQAeAaAjAUQAPAJAOAJQAIAEAHAGQARALARALQAjAZApAQQArARArAUQAFACAEACQAbAMAbAHQADABACABQAFACAEACQABABACABQALgCANAEQgFADgFACQAIADAHADQAQAHASAGQAoAOAoAPQArAPAqALQAsAMApATQAnASAnAXQATALAVAIQAUAIAWAGQAZAHAYAJQARAFAQAGQAEACAEABQAlAPAkATQApAWArAOQAfAKgkAOQgoAPgpAMQgcAHgcAEQgOACgOABQgrAEgqANQgpAOgqAMQgrANgtAEQgqAEgqAJQgtAIgsANQgrALgqAMQgqAMguAGQgJABgKABQgiAEghAIQgjAHgjAGQgKACgJABQgqAHgqAMIgBAAQAAAAABAAIAAAAAPnOXQAOAEANAGQAGACAGADQAaAGAZAKQALAFALAFQAoAUAqAQQAoAOAqAOQAsAOAiAPQApASAkARQAaAMAdAPQALAFALAFQAnATAoAOQAMADANAEQACAAACABQgBABgCABQgxAXhCAMQgdAFgeAFQg+AKhAAHQhKAIhJAOQhMAPhKAZQgIADgIACQhLAYhOAOQgsAHgqAOQgzAQg0AMQghAHgiAFQgGABgFABQgbAEgTACQgCAAgCAAQgEACgFACQgYAJgbAHQgGACgHABQgjAIgxAHQgsAFgsAFQgtAFgvAEQgrAEgtAAQgtAAghgZQgKgIgLgIQgYgTgYgUQgggcglgUQgjgUgigZQglgbgngVQgogWgngZQglgXgngTQgogTgpgQQgogRgngRQgogRgogPQghgMgggIQAbgEAcgEQBSgMBYgKQA1gHA2gLQBSgRBRgXQAbgIAagGQBFgPBHgDQA8gDA9gEQBJgFBIgKQAjgFAigLQAdgJAegIQAFgCAFgBQAFgCAEgBQAugCAfgOIABAAQADgCAEgCQAmgRAlgPQAogQAwgCQASgBARAEQAYAFAWANQASAMAUAKQASAKAUAIQApASAoASQAJAEAJADQAfAMAkAIQAOACANAEQAJADAIADgAStN0QgNAGgCgGQALgEAEAEQACADgBAGASDODQgHAAgHAAQABAFANgFgAR/OSQgZgMgZANQAGAFAKgDAQuOQQAHADAHAEAV+PxQANANAFgeAWyOnQgBgFgIgCQAPgKAPALAYlPtQgIAKgJgFAYDO4Qg5AYANgfQADgHAKABQAIABALgFQAEAFAIAMgAYDPAQgUARAfAAAYgPAQACABACACQATAOAKgSQgOgFgPAFQgCAAgCABgAZbPKQgHAGgGACQgIACgJgFQAIgKAJANAZfPQQAFAHAKgCAZfOUQgNgDgPABAZjO1QgSAPAAgRQAKAAAIACQAHABAGACAW3P0QATAFADgMQgSgJgEAQgAaRNzQAcAPgOgPQgHAAgHAAgEgtsgBMIAAcwMBbZAABIAA65IAA8QMhbZAAAgAwpkGQARgSAXAJQALAFACAJQASgbAPAcQADAHgBAHQANgfAQAhQACAEAAAGQAOgWAPAYQAGgdAZAfQADgfAhAAQAKAPADAMQAGgaAOAOQAHAHgBAJQAJgQAPAQQAQgOANASQAOgdAdAUQAIAFAAAKQAMgcAQAWQACACABADQAFAEAEAJQAUgKAAAXQAUgNAHAVQASgZAWAXQADgfAbAXQAFAEABAHQAYgPACAfQAagVAEAjQABAFgDADQADgCADgBQAcgPAGAhQABADAAACQABACACACQgDABgFgDQgCAAgCgBQgYgEgagDQgVgDgUgHQgGgDgGgCQgVAAgSAFQgUgGgZABQgaABgbAAQgcAAgcACQgbABgdgBQgcgBgbgDQgcgDgagIQgZgIgbgHQgbgHgYgMQgHgEgLgFQgYgLgYgKQgXgKgagIQgZgJgZgJQgZgIgXgJQgYgLgYgLQgUgKgVgKQgEgCgDgBQgBgBgBAAQgDgCgDgCQgUgIgXgEQgcgEgagHQgYgFgbgCQgbgCgbAAQgbgBgbAAQgbAAgaAGQgbAGgcADQgbADgaADQgHABhDAFQAbg7AdgEQACgBACAAQAFAAAEAEQACgDACgBQADgYAXgOQAegUAaARQAFgkAmgDQAcgCAOAYQAJgNAXgCQAPAAALAMQAGAGAAAJQAHgXAXgBQASgCAIARQAFAMABALQAFgSASgHQAVgIASAMQAIAGgCALQAAAAAAABQAFgLAPAFQAOAFACAOQAEgNALgBQALgCAFAIQAEAFADAEQADgKAOgEQAJgDAGAEQAdABgCAjQAsgQAIAvQABAHgBAGQA9gRAYA7QACAFgDAEQAogTAVAhQAEAIgCAJQAAACgBACQgBAEgDABAB3ghQgVAAgXABQheAAhWgUQhbgVhOgeQhNgdhiAIADBhiQAAgUgCgTQAaAFAHAXQAFgTgOgYQATAHAXAWQgPgtgXg2QAjARAbAeQgCgeAOgiQAOAaACAoQASgmAUgjQgCAgAHAnQArgdAogQQgWARgQAjQAggLAogDQAGAAAFAAQgGADgFADQgZARgTAOQAVgCAXABQAXABAaADQgTAMgYAIQARgCAgAUQgOAEgOAEQgNAEgOAEQgbAJgaAHQgPAFgOAFQgZAIgWAJQgCABgCABQAAgBABAAQACgBABAAADQheQgHgEgIAAQgEAAgGABQgMAEgEAKQgMgSgRAVQgFAHAEAGQgYgCgDAWQADAJAGAFAFQgrQgtADggACQhCADhKACAIdhsQgIACgJACEggmgF6QgLAAgMABQAMgNASABQghgEgegGQAcgPAoAFQAHABAIAAQgHgCgIgCQgkgKghgKQAdgKAlADQgcgUghgGQAjgHAiAMQgPgegSgbQAXAGAYAMQgNgQgFgUQAOACAOAMQgBgUgFgWQAaAPAXARQAIgLAKgIQAKAhAegNQAWgJAVgFQgIAVgOAbQAwgFAvgGQgjAigXAjQAdgGAggFQAEAYADAUQASgMAXgPQACATAEATQABAAAAAAEggUgF5IABAAQASAAATACQAHgRACgUQAGACAHAEQAUANAVAMQAFAPAOAMQALAJANAJQAKAHALAEQhhAHijALQgYABgaACQgBAAgBAAQgKgDACgJQABgDACgDQAIgPARAFQgDgCACgFQABgKAIgFQATgOAOALQACgaAZABQAKABAIAEQAHAFAFAJQACgEACgEQADgEAEgDQAIgEAKAFIABAAQAPAHAEASA7ol+QAEgFADgDA8mlKQgdACgpADQgBAAgCAAA10mtQgBAEgBAEA26OqIAAgFA3EKJQAAATAQgNA4LKGQAVABAPgDA2SKgQAMAPAQgLQgFgHgLABAxbKuQgKAEgEAGQAHAGAOgBA5RKlIgNgHQgfAVAsgOgA67K0QAhgFAEgKQgfgZgGAogA9wLBQAEgDAFgCQAFgCAHAAQAEAXgZgQgA+ZKlQgGgCgHAAQgOAOgGgMQALgDAJABA7WLbQgaADgYAKAKfWzQgXAEgYAHQgHACgIACQgpANgrALQgcAHgcAIQgQAEgPAEQgsAMguAFQgsAFgsAFQgtAGgtAIQgsAHgiAIQgCAAgCgBQgBAAgBgBQgrgKgrgLQgsgLglgeQgfgagggXQgBAAgBgBQgmgagogVQgjgTghgWQgmgagngYQgngYglgZQglgYgkgYQglgagkgYQgkgagngTQgogTgkgVQgogWgmgbQgogbglgTA4ZKcQgGATAQgVANRKTQgKgLgEAFQggAKAugEgAMZKSQgUgHgPANQAJAKALgJApHHEQgbgQgEAJAqxHLQAUADAMgJAKgWzIgBAAAKgWzIAAAEIgBgEAL3WnQgdACgjAGQgMABgLADEgivgE8Qh0gEhKAoQgaAOgjgBQiagDhoBEQhWA4hqBG");
	this.shape_1.setTransform(236.7,194.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#89E8FE","#D5FFFF"],[0,1],-18.2,-83,-18.2,63.3).s().p("EAl1AN5QiPgOiKgWQhCgLg5gUQiAgxiCA6IgBgDIgBgEQgdhsgjAgQgTgegTAXQgHgRgJgJQBHgEALgRIgUgDQAPgHAKgMQgqgPgrgEQAdgIAZgSQhGgKAFgUIB9gTQhOgdhFgEIBJhMQhdAOhEAyQAPg+ASg0Qg/AmgnBAQgOgygFgoQgYA0gMA2QgSgtgPgxQAGBIgZBIQgpgggzABQAbAjALAnQgsgTgpgFQAdAgAnANQgvAEgoAIQAjgDAVAgQgEAIgFANQgLgygfAmQgKgrgrAYQgggdggA1QgSgtgyAkIgHgGQgwgqgmBEQgagzgmA4QgngwgdA6QgJgogbAVIgCgDIgDgCQgcgSgVAQQgMgngSAnQgHghgbAlQgLgkgVAqQgHgWgTAfQgcgDAAAdIgRAEQgggUgRADQAYgIATgNQgagDgXgBQgXAAgVACQATgPAZgRIALgGIgLABQgoACggALQAQgiAWgSQgoAQgrAdQgHgnACggQgUAjgSAnQgCgpgOgaQgOAiACAeQgbgegjgRQAXA2APAtQgXgWgTgGQAOAXgFAUQgHgXgagGIACAnIgKABQgMAFgEAKQgMgTgRAVQgFAHAEAGQgYgCgDAWQADAJAGAFIgsABQheABhWgVQhbgVhOgdQhNgehiAIIgBgFQgGghgcAPIgEgFQgEgjgaAVQgCgfgYAQQgBgIgFgEQgbgXgDAfQgWgXgSAaQgHgWgUANQAAgXgUAKQgEgJgFgEIgDgFQgQgVgMAbQAAgKgIgFQgdgUgOAdQgNgRgQAOQgPgRgJARQABgKgHgGQgOgOgGAZQgDgMgKgOQghAAgDAfQgZgfgGAdQgPgZgOAWQAAgGgCgEQgQghgNAfQABgHgDgGQgPgcgSAbQgCgKgLgFQgXgJgRASIABgEQACgJgEgIQgVgggoATQADgFgCgFQgYg6g9AQQABgFgBgHQgIgvgsAQQACgkgdgBQgGgEgJADQgOAEgDAKIgHgIQgFgJgLACQgLABgEANQgCgOgOgEQgPgGgFALIAAgBQACgLgIgFQgSgNgVAJQgSAGgFATQgBgMgFgMQgIgRgSACQgXACgHAWQAAgJgGgGQgLgMgPABQgXACgJAMQgOgYgcACQgmADgFAkQgagQgeATQgXAPgDAXIgEAEQgEgDgFgBIgBAAQgEgTgCgSIgpAbIgHgtQggAFgdAGQAXgiAjgjQgvAGgwAGQAOgbAIgWQgVAFgWAJQgeAOgKgiQgKAJgIAKQgXgRgagPQAFAXABATQgOgLgOgDQAFAVANAPQgYgMgXgGQASAcAPAdQgigLgjAGQAhAGAcAUQglgDgdAKIBFAUIAPAEIgPgBQgogFgcAQQAeAFAhAEQgSAAgMAMIAXgBQgEADgDAFIgEAHQgFgJgHgFQgIgEgKAAQgZgCgCAbQgOgMgTAOQgIAFgBAKQgCAGADABQgRgEgIAOIgDAHQh0gEhKAoQgaAOgjgBQiagEhoBEIjAB+IAA6WMBbZAAAIAAcPQnQgLgogEg");
	this.shape_2.setTransform(236.7,108.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFCC33","#FFFF99"],[0,1],158.4,70.4,159.3,-92.2).s().p("EgtsAQlIAA8wIDAh+QBohECaADQAjABAagOQBKgoB0AEQgCAJAKADIACAAIAygEIEEgSIADAAIBGgFIBKgGIA1gFQAcgDAbgGQAagGAbAAIA2ABIA2ABQAbACAYAGQAaAGAcAEQAXAFAUAHIAGAFIACAAIAHADIApAVIAwAVQAXAKAZAIIAyARQAaAJAXAKIAwAUIASAKQAYAMAbAHQAbAHAZAIQAaAIAcACIA3AFQAdABAbgCQAcgCAcAAIA1AAQAZgBAUAFQASgEAVgBIAMAFQAUAHAVAEIAyAHIAEABQAFACADgBIgDgDQBigIBNAdQBOAdBbAWQBWAUBegBIAsAAQBKgCBCgEQAggBAtgEQACAAACgCQAWgIAZgJIAdgJIA1gQIAbgIIAcgIIARgEIAigHQAqgHAwACQAoACAlgHIAngBIA2AAQArAAAqAEIBPAIIANABQAnAEApAOQApAOAtgDQAfgCAZAKQAqATAtAKQArAKAtgIQAtgHAtgDQAtgCAtADQAqADApALQAlALAlAGIANABIAAgHIAAAAQCCg5CAAwQA5AVBCAKQCKAWCPAPQAoAEHQALIAAa3gAhRMqQAlAdAsAMIBWAVIACABIAEABQAigIAsgHIBagOIBYgLQAugEAsgMIAfgJIA4gOQArgLApgNIAPgEQAYgHAXgFIABAEIAAgEIAXgEQAjgFAdgDIgBABIABgBQAqgLAqgHIATgDIBGgOQAhgHAigEIATgCQAugGAqgMIBVgYQAsgMAtgJQAqgIAqgEQAtgEArgNIBTgaQAqgOArgDIAcgDQAcgEAcgIQApgLAogPQAkgOgfgKQgrgPgpgVQgkgTglgPIgIgDIghgMIgxgPQgWgGgUgIQgVgJgTgKQgngXgngSQgpgTgsgMQgqgLgrgPIhQgdIgigNIgPgHIAKgFQgNgDgLABIgDgBIgJgFIgFgBQgbgHgbgMIgJgEQgrgUgrgRQgpgQgjgZIgigXIgPgKIgdgRQgjgUgegaIgDgDQgjgeguAJQgrAIgsAFQgXACgWAEQgVADgWAHQgsANgpARQgaAKgbAJIgiAKIhXAYQgsAMgsAOQgtANgtAHQguAHgtAKIglAEIgCABQgTAKgTAFQgUAGgVABQguADgsANQgtAMguAKQgqAJgtAFQguAGguAHIhaAPIgBAAIhZAMIhaAMQgXADgYABIAAAFQAlATAoAbQAmAaAoAXQAkAVAoATQAnATAkAZIBJAyIBJAxIBMAxIBNAxQAhAXAjATQAoAVAmAaIAAABIACAAQAgAXAfAagAXCE2QAJAAACgIIgBgBIgBAAIgHgCIgCgBIgBAAQgIABgCAKIABAAIABAAIAIABIAAAAIABAAgAWGE1QAGAAAEgSIAAgCIAAACQgEASgGAAIgBAAIAAAAQgCAAgDgDIgBAAIAAgBIgBAAIABAAIAAABIABAAQADADACAAIAAAAIABAAgAYbE0QAEAAAEgFIABAAIABgBIgBABIgBAAQgEAFgEAAIgBAAIAAAAIgGgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAGABIAAAAIABAAgAZrEWIABAAIABAAIABAAIgBAAIgBAAIgBAAIgBAAIAAAAQgHAAgDgFIgBAAIAAgBIAAABIABAAQADAFAHAAIAAAAIABAAgAZJETIAEgBIABAAQAGgBAHgGQgHAGgGABIAAAAQgFgGgEgBIgBAAIAAAAQgDAAgEAEIAAABIABAAQAFADAGAAIAAAAIAAAAgAYMERIACAAIAAAAIAAAAIgCAAIAAAAIAAAAQgbAAAQgOIAAgBIABAAIABgBIgBABIgBAAIAAABQgQAOAbAAIAAAAIAAAAgAYkD/IgEABIAEADQATAOAKgSQgHgCgIAAQgHAAgHACgAXXDyQgNAeA5gXIgMgRQgLAEgIAAIgBgBQgJAAgDAHgAZjD1IANADIgNgDIgSgBQAAARASgQgA26DqIAAgFgAWpDhQAIACABAFQgBgFgIgCIACgBIAAAAQAGgEAGAAIABAAIAAAAQAIAAAHAGQgHgGgIAAIAAAAIgBAAQgGAAgGAEIAAAAIgCABIAAAAgAayDhIAFAAIAAgBIAAAAIAAAAIAAAAIAAAAIAAABIgFAAIAAAAIgBAAQgGAAgCgHQAKgGALAAIABAAIAAAAIAGABIgGgBIAAAAIgBAAQgLAAgKAGQACAHAGAAIABAAIAAAAgARWDXIAGgBIABAAIgBAAIgGABIAAAAIAAAAQgFAAgEgEQANgGANAAIAAAAIAAAAQALAAALAFIACAAIgCAAQgLgFgLAAIAAAAIAAAAQgNAAgNAGQAEAEAFAAIAAAAIAAAAgAZfDVQgKgDgLAAIAAAAIAAAAIgGAAIgBAAIABAAIAGAAIAAAAIAAAAQALAAAKADgASDDEIgOAAQABAFANgFgASuC9IAAgDQAAgDgBgCQgEgEgLAEQACAFANgFQABACAAADIAAADgAafC0IgOAAQAcAOgOgOgAcMCVIgQgOQgZAaApgMgAaqCUIANgCIABAAIAAAAIABAAIAAAAIACAAIAAAAIACgBIABAAIgBAAIgCABIAAAAIgCAAIAAAAIgBAAIAAAAIgBAAIgNACIAAAAIAAAAQgMAAAHgKIABAAIAAAAIAAgBIAAAAIAAAAIAAABIAAAAIgBAAQgHAKAMAAIAAAAIAAAAgA8IApQAYgLAagCQgaACgYALgA9ngCQgFACgEACQAZAQgEgWIAAAAQgHAAgFACgAxagBIAGgBIgGABIAAAAIAAAAQgIAAgFgDIAAgBIgBAAIgBgBQAEgGAKgEQgKAEgEAGIABABIABAAIAAABQAFADAIAAIAAAAIAAAAgA67gKQAhgFAEgKQgMgKgIAAQgNAAgEAZgA+ygUQAFAAAHgHQAHAAAGACQgGgCgHAAIgCgBIgCAAIAAAAIgBAAIgNACIgCAAIAAABIABAAQACAFAEAAIABAAIAAAAgA5RgZIgNgIQgfAVAsgNgA2CgWQAGAAAGgEIAAgBQgFgFgJgBIgBAAIAAAAIgBAAIABAAIAAAAIABAAQAJABAFAFIAAABQgGAEgGAAIgBAAIAAAAQgHAAgHgGIAAgBIAAAAIAAAAIgBgBIABABIAAAAIAAAAIAAABQAHAGAHAAIAAAAIABAAgA4ZgZIAAAAIAFgFIAAAAIACgDIABgBIAAAAIAAAAIABgBIAAgBIABAAIgBAAIAAABIgBABIAAAAIAAAAIgBABIgCADIAAAAIgFAFIAAAAIgBAAQgBAAACgIIAAgBIAAgBIAAABIAAABQgCAIABAAIABAAgAQggfQAIAAAGgGQgGAGgIAAIAAAAIAAAAIgIgBIgBAAIAAAAIgBgBQgRgGAAgFQAAgHAbgFQgbAFAAAHQAAAFARAGIABABIAAAAIABAAIAIABIAAAAIAAAAgAMBghQAEAAAFgEQgFAEgEAAIgBAAIgBAAQgFAAgEgGQAJgHAMgBIAAAAIABAAQAGABAGACIABAAIgBAAQgGgCgGgBIgBAAIAAAAQgMABgJAHQAEAGAFAAIABAAIABAAgANDgxQggAKAugEQgHgIgEAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAgA29gqQADgBAFgEIABAAIAAgBIAAABIgBAAQgFAEgDABIgBAAIAAAAQgGAAAAgLIAAgBIAAABQAAALAGAAIAAAAIABAAgA39g4QAMAAAKgCQgKACgMAAIgBAAIAAAAIgMAAIgBAAIABAAIAMAAIAAAAIABAAgAP0hLIgBABQAQAGADgIIABgEIACgBIABAAIACAAIAAAAIABAAIAKABIACAAIgCAAIgKgBIgBAAIAAAAIgCAAIgBAAIgCABQgLAAgIAFgAPIheQAHAIAIgLQgIABgHACgAOeheQAHAAACgKQgvAHAmADgAPnhgIAAgBIgJAAIAAAAIgBAAIgCAAIgEAAIAEAAIACAAIABAAIAAAAIAJAAIAAABIAAAAgAqnjyQANAAAIgGIABgBIgBABQgIAGgNAAIAAAAIAAAAIgEgBIgBAAIgCAAIgDAAIADAAIACAAIABAAIAEABIAAAAIAAAAgApHj6IgBgBIgBAAIgCgBIgBgBIgLgGIgBAAIgBAAIAAAAIgBgBIAAAAIgBAAIAAAAIgBAAIgBAAIAAAAIgDgBIAAAAQgEAAgCAEQACgEAEAAIAAAAIADABIAAAAIABAAIABAAIAAAAIABAAIAAAAIABABIAAAAIABAAIABAAIALAGIABABIACABIABAAIABABgAXBE2IgIgBIgBAAIgBAAQACgKAIgBIABAAIACABIAHACIABAAIABABQgCAIgJAAIgBAAIAAAAgAW3E1IAAAAgAZJETQgGAAgFgDIgBAAIAAgBQAEgEADAAIAAAAIABAAQAEABAFAGIAAAAIgBAAIgEABIAAAAIAAAAgAZOESIAAAAgA+zgUQgEAAgCgFIgBAAIAAgBIACAAIANgCIABAAIAAAAIACAAIACABQgHAHgFAAIAAAAIgBAAgA+mgbIAAAAg");
	this.shape_3.setTransform(236.7,265);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AlsG/IgCAAIhXgWQgsgLglgeQgfgagggWIgCgCQgmgZgogWQgjgTghgWIhNgyIhMgxIhJgwIhJgyQgkgZgngUQgogSgkgVQgogWgmgbQgogbglgTIAAgEQAYgCAXgDIBagMIBZgMIABAAIBagOQAugIAugFQAtgGAqgJQAugKAtgMQAsgNAugCQAVgCAUgFQATgGATgJIACgBIAlgFQAtgJAugHQAugHAtgOQAsgNAsgMIBXgYIAigKQAbgJAagLQApgRAsgNQAWgGAUgEQAWgFAXgCQAsgEArgJQAugIAjAfIADACQAfAaAiAUIAdASIAPAKIAiAXQAjAZApAQQArAQArAUIAJAFQAbALAbAIIAFABIAJAFIADABIAOAHIAPAGIAiAOIBQAcQArAPAqAMQAsALApATQAnASAnAXQATALAVAIQAUAJAWAGIAxAPIAhAMIAIACQAmAPAjATQApAVArAOQAfALgkANQgoAPgpAMQgcAHgcAFIgcADQgrADgqAOIhTAaQgrAMgtAFQgqADgqAJQgtAIgsANIhVAXQgqANguAFIgTACQgiAFghAHIhGANIgTADQgqAIgqALIAAAAQgdACgjAGIgXAEIgBAAQgXAEgYAHIgPAFQgpAMgrALIg4APIgeAJQgsALguAFIhYALIhaANQgrAIgjAIIgEgCgACzlZQgwACgoARQglAPgmARIgHADIgBAAQgeAOguACIgJADIgKADIg7ASQgiAKgjAFQhIAKhJAFIh6AHQhHADhFAQQgaAFgbAIQhRAXhSARQg2AMg1AGIiqAWIg3AIQAgAIAhAMQAoAPAoARIBPAiQApAPAoAUQAnASAlAYQAnAYAoAWQAnAVAlAbQAiAZAjAUQAlAUAgAcIAxAoIAVAQQAhAYAtAAQAtAAArgEQAvgDAtgGIBYgKQAxgHAigIIANgDQAbgGAYgJIAJgEIAEgBIAugGIALgBQAigGAhgHQA0gLAzgRQAqgNAsgIQBOgNBLgYIAQgGQBKgYBMgPQBJgPBKgIQBAgHA+gKIA7gKQBCgMAxgXIADgCIgEgBIgZgHQgogNgngSIgWgLIg3gbIhNgjQgigPgsgOIhSgcQgqgQgogUIgWgJQgZgKgagGIgMgGIgbgKIgRgGIgbgGQgjgIgggMIgSgHIhRgjIgmgTQgUgKgSgLQgWgOgYgFQgOgDgPAAIgGAAg");
	this.shape_4.setTransform(282,307.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006600").s().p("ASaD2QAAgDgDgBQgNgHgEAIQgKgWgRAYQAAgIgEgGQgDgEgCABQgKACgFAEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBgGgGgEQgYgNgFASQgPgfgTAfQgKgMgKAHQgHgEgIAAIgCgnQAaAFAHAXQAFgTgOgXQATAGAXAWQgPgtgXg3QAjASAbAeQgCgeAOgiQAOAaACAoQASgmAUgjQgCAgAHAnQArgdAogQQgWARgQAjQAggLAogDIALAAIgLAGQgZARgTAOQAVgCAXABQAXABAaADQgTAMgYAIQARgCAgAUIgcAIIgbAIIg1ARIgdAJQgEgPgPAKgAxagWQgNgJgLgKQgOgLgFgPIgpgZIgNgGQgCAUgHARIglgCIgBAAQgKgFgIAEIgXABQAMgNASABQghgEgegGQAcgPAoAFIAPABIgPgEIhFgUQAdgKAlADQgcgUghgGQAjgHAiAMQgPgegSgbQAXAGAYALQgNgPgFgUQAOACAOAMQgBgUgFgXQAaAQAXARQAIgLAKgIQAKAhAegNQAWgJAVgGQgIAWgOAbQAwgFAvgHQgjAjgXAjQAdgGAggFIAHAsIApgbQACATAEATIgDAAQgdAFgbA7IhGAFIgDAAQgLgEgKgHg");
	this.shape_5.setTransform(155.7,163.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AjbCwIgEgCIgygHQgWgDgTgHIgMgFQgVAAgSAFQgUgGgZABIg2ABQgcAAgbACQgbABgdgBIg3gEQgcgDgagIQgZgIgbgHQgbgHgYgMIgTgJIgvgVQgYgKgZgIIgygRQgZgJgYgJIgvgWIgpgTIgIgDIgBgBIgGgEQgUgIgYgEQgbgEgagGQgYgGgcgCIg1gCIg2gBQgbAAgaAGQgbAGgcADIg1AGIhKAGQAbg7AcgEIAEgBQAGAAADAEIgGAIIAGgIIAFgEQADgYAWgOQAfgUAaARQAEgkAmgDQAdgCAOAYQAIgNAYgBQAPgBALAMQAGAGgBAJQAIgWAWgCQATgCAHARQAGAMABALQAFgSASgHQAVgIASANQAIAFgCALIgBABIgCAIIACgIQAGgLAPAFQAOAFACAOQAEgNALgBQALgCAFAIIAHAJQADgKAOgEQAJgDAGAEQAcABgCAkQAtgRAIAvQABAHgCAGQA+gQAYA6QACAFgDADQAogSAUAgQAFAIgCAJIgBAEQARgSAXAJQALAFABAKQATgcAPAcQACAHAAAHQANgfAQAhQACAEAAAGQANgWAQAYQAFgdAaAfQADgeAhAAQAJAOAEAMQAGgaAOAPQAHAGgBAJQAJgQAOAQQARgNANARQANgdAeAUQAIAFAAAKQAMgcAQAWIADAFQAFAEAEAJQAUgKAAAXQAUgNAHAVQASgZAWAXQADgfAbAXQAFAEAAAHQAZgPABAfQAbgVAEAjQABAFgDADIAFgDQAdgPAGAhIABAFIADAEIgCAAIgGgBgAtCApQADgCABgEQgBAEgDACgAaWCnQAMgPgRgZQgLgRgSASQgHAGgEAKQAJgdgMgdQgiAHgEAYQgJg3gmArQgGAHABAKQgcgqgMA4QgPgfgQAZQgVgggkADQApgIAvgEQgngNgeggQAqAFAsATQgLgngbgiQAzgBApAfQAYhHgFhJQAOAyATAtQAMg2AYg0QAEAoAPAyQAnhAA/gmQgSAzgPA+QBEgxBdgOIhKBLQBGAFBNAbIh8ATQgFAVBGAKQgZASgdAIQAqADArAQQgKALgPAIIAUACQgLARhHAFQgYgVglAnQACgvgmAWQgNAIgEASQgcgyguAtgA/EgSIADgGQAIgPARAFQgDgCABgFQACgKAIgFQATgOAOAMQABgbAZACQALAAAIAEQAHAFAFAJIAEgIQADgEAEgDQAHgEALAFIABAAIAAAAIAlACQAHgRACgUIANAGIApAZQAFAPANAMQAMAJANAJQAKAHALAEIkEASIgyADIgDAAQgJgDACgJgA8Vg2QgFgSgOgHQAOAHAFASg");
	this.shape_6.setTransform(213.2,164.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC00").s().p("ALhBNQgogLgrgDQgtgDgtADQgtACgsAIQgtAHgsgKQgsgKgrgSQgZgLgeACQgtADgqgOQgogOgngDIgNgCIhOgHQgqgEgrAAIg3ABIgmAAQglAHgpgCQgvgCgrAHIghAGQgBgcAdADQASggAHAXQAWgqALAkQAaglAHAhQATgnALAmQAVgPAcASIAGAFQAbgVAIAnQAdg5AoAwQAmg4AaAzQAlhFAwArIAHAGQAyglASAtQAgg0AgAdQArgYAJArQAggmALAxQAEgMAFgIQAPgZAQAfQAMg4AcAqQgBgKAGgHQAmgrAJA3QAEgYAigHQAMAdgKAdIgCAGIACgGQAFgKAGgGQATgSALARQAQAZgLAPQAugtAbAyQAFgSAMgIQAngWgCAvQAlgnAXAVQAKAIAHASQATgXASAdQAkgfAcBrIACAEIAAADIgMAFQglgGgmgLgAs3BGQADgWAYACQgFgGAFgHQASgVAMASQAEgKAMgEIAKgBQAIAAAGAEQALgHAJAMQAUgeAPAeQAFgSAXANQAHAEAAAGQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAGgEAKgCQACgBACAEQAFAGAAAJQARgZAKAXQAEgJANAHQACABABADQAPgKAEAPQgZAIgWAJIgEABIgBABQgtADgfACQhDADhJACQgGgFgDgJg");
	this.shape_7.setTransform(330.2,182.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CCFF").s().p("AmlE8IgWgQIgxgnQgggcglgUQgjgUgigZQglgbgngVQgogWgngZQgkgXgogTQgogTgogPIhQgiQgngRgpgPQghgMgggIIA3gIICqgWQA2gGA1gMQBSgRBSgXQAagIAbgGQBFgPBHgDIB5gHQBJgFBIgKQAkgFAhgLIA7gRIALgDIAIgDQAvgCAegOIAAAAIAIgEQAlgRAlgPQApgQAvgCQATgBARAEQAYAFAVANQASAMAUAKIAmATIBSAjIARAHQAgAMAjAIIAbAGIASAGIAbAKIALAFQAaAHAZAJIAWAKQApAUAqAQIBRAcQAtAOAhAPIBOAjIA3AbIAVAJQAoATAnAOIAZAHIAFABIgEACQgwAXhCAMIg7AKQg/AKhAAHQhKAIhJAOQhMAQhJAYIgQAFQhMAZhNANQgsAHgrAOQgzARgzALQgiAHgiAFIgLACIguAGIgDAAIgKAEQgYAKgaAGIgNADQgjAIgxAHIhYAKQgtAFgvAEQgrAEgtAAQgtAAgggZg");
	this.shape_8.setTransform(281.6,307.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AgrAEIAAAAIABAEgAAsgHIAAAAIgCABIACgBg");
	this.shape_9.setTransform(308.2,340.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PartyOnTheBeach3, new cjs.Rectangle(-56.8,17.3,587.1,354.9), null);


(lib.guitar_playing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// forearm
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AgYAnIAxhN");
	this.shape.setTransform(11,47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("Ah5AqQADgEACgFQABgFACgFQADgFAEgEQAGgHAHgGQAHgFAIgFQAHgEAJgDQAJgDAJgDQAFgBAGgBQADgBAEAAQAKgCAIgDQAEgCADgCQADgDAEgDQAGgGABgIQACgKAAgJQAAgKgBgJQgCgLAGgFQACgCADgBQAKgDAJgBQAJgBAKgBQADgBADAAQAHgBAGgBQAJgBAJgBQAKgCAKABQADABADAAQABAAACAAQAFABAFAAQADAAACABQgGAKgJAEQgCABgBAAIAAAAQgJADgKABQgJACgKABQgIABgIABQASAAARABQAEAAADAAQAHABAIABQAIABAIABQAJABAJAAQAJABACAFQgBACAAACIAAAAQgKAEgNADQgLACgKABQgGAAgFAAQgNABgOAAQgFAAgFAAQAEAHAMACQALABALACQAEABAEAAQABAAABAAQACAAACAAQAJAAAIAAQAJAAgBAHQgBAFgGABQgBAAgBAAQgKACgKABQgEAAgDAAQgMAAgLgCQgCAAgCgBQgGAAgGgBQAEADAIAFQAHAEAIADQAHACAIACQACAAACABQAFABAFACQAGACgBADQgBABgBACQgFAFgIAAQgCAAgCAAQgMgCgLgEQgFgCgGgBQgFgBgEAAQgDAAgCACQgGAHgJAGQgKAGgMADQgGACgIAAQgFAAgEgCQgBAAAAAAQgDAHgCAGQgEAJgFAHQgDAHgFAIQgBABAAAAQgCADgCADQgEAFgDAEQgGAGgGAHQgDAAgCAEQgFAEgFADQgGAEgFADQgDABgCABQgIAEgJAEQgGADgGADQgCABgDABQgDABgCABQgGACgFABQgJADgJAAQgKABgJgBQgIgBgHgCQgCAAgCgBQgBAAgBAAAAOAGQABgCABgCQACgCAAgF");
	this.shape_1.setTransform(25.6,39.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC97").s().p("AiWB7IgPgDIgEgBIgCAAIAyhNIAFgJIADgKIAHgJIANgNIAPgKQAHgEAJgDIASgGIALgCIAHgBQAKgCAIgDIAHgEIAHgGQAGgGABgIQACgKAAgJIgBgTQgCgLAGgFIAFgDIATgEIATgCIAGgBIANgCIASgCQAKgCAKABIAGABIADAAIAKABIAFABQgGAKgJAEIgDABIAAAAQgJADgKABIgTADIgQACQASAAARABIAHAAIAPACIAQACIASABQAJABACAFIgBAEIAAAAQgKAEgNADIgVADIgLAAIgbABIgKAAQAEAHAMACIAWADIAIABIACAAIAEAAIARAAQAJAAgBAHQgBAFgGABIgCAAIgUADIgHAAQgMAAgLgCIgEgBIgMgBIAMAIQAHAEAIADIAPAEIAEABIAKADQAGACgBADIgCADQgFAFgIAAIgEAAQgMgCgLgEIgLgDIgJgBQgDAAgCACQgGAHgJAGQgKAGgMADQgGACgIAAQgFAAgEgCIgBAAIACgEQACgCAAgFQAAAFgCACIgCAEIgFANQgEAJgFAHIgIAPIgBABIgEAGIgHAJIgMANQgDAAgCAEIgKAHIgLAHIgFACIgRAIIgMAGIgFACIgFACIgLADQgJADgJAAIgKABIgJgBg");
	this.shape_2.setTransform(25.6,39.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AgcAkIA5hH");
	this.shape_3.setTransform(8.9,47,1,1,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("Ah7AeQAEgEACgEQACgFACgFQAEgEAEgEQAHgFAHgFQAHgFAJgFQAHgDAKgCQAJgCAKgCQAFgBAFAAQAEAAADAAQALgBAIgCQADgBAEgCQAEgCAEgDQAHgFACgJQACgJABgJQABgKAAgJQAAgLAHgFQACgCADAAQAKgCAJAAQAJAAAKAAQADAAAEAAQAGAAAGAAQAJgBAKAAQAJAAAKACQADAAADABQACAAABAAQAFABAFABQADABACABQgHAJgKADQgBABgBAAIgBAAQgJACgKAAQgJABgKAAQgIAAgIAAQARABARAEQAEAAAEABQAHABAHACQAIACAIACQAJACAIABQAJACACAFQgBACgBACIAAAAQgKADgNABQgLABgLAAQgFgBgGAAQgNgBgNgBQgFgBgFAAQADAHALADQALADAMADQADABAEABQABAAABAAQACAAACAAQAJABAIACQAJABgCAGQgBAFgHAAQAAAAgBAAQgKABgLgBQgDAAgEAAQgMgBgKgEQgCAAgCgBQgGgBgGgBQAEADAHAGQAGAFAIAEQAHACAIADQACABABABQAGABAEADQAGADgCABQAAACgCABQgFAEgIAAQgCgBgCAAQgMgDgKgEQgFgDgGgCQgEgBgEgBQgDAAgDACQgHAGgJAFQgLAFgMACQgHABgHgBQgGAAgDgCQgBAAAAgBQgDAGgEAGQgFAJgEAHQgFAGgGAHQAAABgBABQgCACgCADQgEAEgFAEQgGAGgHAFQgDAAgCAEQgFADgGADQgGADgGADQgCABgDAAQgIADgJAEQgGACgHACQgCAAgDABQgDABgDABQgFABgFABQgKABgJAAQgKAAgJgCQgHgCgHgDQgCAAgCgBQgBAAgBgBAAPAJQABgCACgCQABgCABgE");
	this.shape_4.setTransform(24.8,42,1,1,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC97").s().p("AiOBuQgKAAgJgCIgOgFIgEgBIgCgBIA6hHIAGgIIAEgKIAIgIIAOgKIAQgKQAHgDAKgCIATgEIAKgBIAHAAQALgBAIgCIAHgDIAIgFQAHgFACgJIADgSIABgTQAAgLAHgFIAFgCIATgCIATAAIAHAAIAMAAIATgBQAJAAAKACIAGABIADAAIAKACIAFACQgHAJgKADIgCABIgBAAQgJACgKAAIgTABIgQAAQARABARAEIAIABIAOADIAQAEIARADQAJACACAFIgCAEIAAAAQgKADgNABIgWABIgLgBIgagCIgKgBQADAHALADIAXAGIAHACIACAAIAEAAIARADQAJABgCAGQgBAFgHAAIgBAAIgVAAIgHAAQgMgBgKgEIgEgBIgMgCIALAJQAGAFAIAEIAPAFIADACIAKAEQAGADgCABIgCADQgFAEgIAAIgEgBQgMgDgKgEIgLgFIgIgCQgDAAgDACQgHAGgJAFQgLAFgMACQgHABgHgBQgGAAgDgCIgBgBIADgEQABgCABgEQgBAEgBACIgDAEIgHAMQgFAJgEAHIgLANIgBACIgEAFIgJAIIgNALQgDAAgCAEIgLAGIgMAGIgFABIgRAHIgNAEIgFABIgGACIgKACIgOABIgFAAg");
	this.shape_5.setTransform(24.8,42,1,1,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AggAhIBBhB");
	this.shape_6.setTransform(8.9,47.4,1,1,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("Ah7AVQADgEADgEQACgFADgEQAEgEAFgCQAHgFAIgFQAIgEAJgEQAIgCAKgBQAJgBAJgBQAGAAAFAAQAEAAADAAQAKABAIgCQAEgBAEgBQAFgCAEgCQAHgEADgJQADgJACgJQACgJABgJQABgLAHgFQACgBAEAAQAJgBAJABQAKABAJABQAEAAADAAQAGAAAGABQAJABAKABQAKAAAJADQADABADABQABAAACABQAFABAEABQADACACABQgHAIgKACQgCAAgBABIAAAAQgKABgKgBQgJgBgKAAQgIgBgIgBQARADARAFQADABAEABQAHACAHADQAIACAIADQAIADAIACQAJADABAFQgBACgBACIAAAAQgKACgOAAQgKgBgLgBQgFgBgGgBQgNgCgNgDQgFgBgFgBQADAIALAEQAKAEALAEQAEABAEACQAAAAABAAQACAAACABQAJACAIACQAIACgCAGQgCAFgGAAQgBAAgBgBQgKAAgKgCQgEAAgDgBQgMgCgKgFQgCAAgCgBQgGgCgFgBQADADAHAGQAGAGAHAFQAHACAHADQACABABABQAFADAFADQAFADgCACQAAACgCABQgGADgIgBQgCAAgCgBQgLgEgKgGQgFgEgFgCQgEgCgEgBQgDAAgDACQgIAFgJAEQgMAFgMABQgGAAgIgCQgFgBgEgCQAAAAAAgBQABgBACgCQACgDABgEAAQAOQgEAGgEAGQgGAIgFAGQgGAGgGAGQgBABAAAAQgDADgCACQgEAEgFAEQgHAEgHAFQgEAAgCADQgGADgFACQgGADgHACQgCABgDAAQgJACgJADQgGABgHABQgCABgDAAQgDABgDAAQgFABgGAAQgJABgKgCQgKgBgIgCQgHgDgGgDQgDgBgCgBQAAgBgBAA");
	this.shape_7.setTransform(24.9,43.4,1,1,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC97").s().p("AiXBiQgKgBgIgCIgNgGIgFgCIgBgBIBBhBIAGgIIAFgJIAJgGIAPgKIARgIQAIgCAKgBIASgCIALAAIAHAAQAKABAIgCIAIgCIAJgEQAHgEADgJIAFgSIADgSQABgLAHgFIAGgBIASAAIATACIAHAAIAMABIATACQAKAAAJADIAGACIADABIAJACIAFADQgHAIgKACIgDABIAAAAQgKABgKgBIgTgBIgQgCQARADARAFIAHACIAOAFIAQAFIAQAFQAJADABAFIgCAEIAAAAQgKACgOAAIgVgCIgLgCIgagFIgKgCQADAIALAEIAVAIIAIADIABAAIAEABIARAEQAIACgCAGQgCAFgGAAIgCgBIgUgCIgHgBQgMgCgKgFIgEgBIgLgDIAKAJQAGAGAHAFIAOAFIADACIAKAGQAFADgCACIgCADQgGADgIgBIgEgBQgLgEgKgGIgKgGIgIgDQgDAAgDACQgIAFgJAEQgMAFgMABQgGAAgIgCQgFgBgEgCIAAgBIADgDQACgDABgEQgBAEgCADIgDADIgIAMQgGAIgFAGIgMAMIgBABIgFAFIgJAIIgOAJQgEAAgCADIgLAFIgNAFIgFABIgSAFIgNACIgFABIgGABIgLABIgFABIgOgCg");
	this.shape_8.setTransform(24.9,43.4,1,1,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AgiAeIBFg7");
	this.shape_9.setTransform(10.1,47.2,1,1,-8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("Ah7AOQAEgDADgEQADgFADgDQAEgEAFgDQAIgEAIgEQAJgEAJgCQAIgCAKAAQAJAAAKAAQAFAAAFAAQAEABADAAQAKACAIgBQAEgBAFgBQAEgBAFgCQAHgEADgIQAEgIADgKQADgJACgJQABgLAIgDQACgBADAAQAKAAAJABQAKACAJACQADAAAEAAQAGABAGACQAJABAJACQAKABAJAEQADABADABQABABACAAQAEACAFACQACABACABQgIAIgKABQgBAAgCABIAAgBQgJABgKgCQgKgBgKgCQgHgBgIgCQARAFAQAGQADACAEABQAGADAHACQAIAEAHADQAJAEAIADQAIADABAGQgBABgBACIAAAAQgLABgNgBQgLgCgKgCQgGgBgFgBQgNgDgNgEQgEgCgFgBQACAIAKAFQAKAEALAFQADACAEACQABAAABAAQABAAACABQAJADAIADQAIABgDAGQgCAFgGgBQgBAAgBAAQgKgCgKgCQgEgBgDgBQgLgDgKgEQgCgBgCgBQgGgCgFgCQADADAGAGQAFAHAHAFQAHADAHAEQABABACACQAFACAEAEQAFADgCADQgBABgBABQgHADgHgCQgCAAgCgBQgMgFgIgHQgFgEgFgDQgEgCgEgBQgDgBgDACQgIAFgKADQgMADgMAAQgGAAgHgCQgGgCgDgDQAAAAgBAAQgEAFgEAGQgHAHgGAGQgFAFgHAGQgBAAgBABQgCACgDACQgFAEgFADQgHAEgHAFQgEgBgDADQgFACgGACQgGACgHACQgCAAgDABQgJABgKACQgGABgHAAQgCABgDAAQgDAAgDAAQgFAAgGAAQgJAAgKgCQgJgCgIgDQgHgEgGgEQgCgBgCgBQgBAAgBgBAAQATQACgCACgBQACgDABgE");
	this.shape_10.setTransform(25.1,40.5,1,1,-8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC97").s().p("AidBZQgJgCgIgDIgNgIIgEgCIgCgBIBHg7IAGgHIAGgIIAJgHIAQgIIASgGQAIgCAKAAIATAAIAKAAIAHABQAKACAIgBIAJgCIAJgDQAHgEADgIQAEgIADgKIAFgSQABgLAHgDIAGgBIATABIATAEIAHAAIAMADIASADQAKABAJAEIAFACIADABIAKAEIAEACQgIAIgKABIgDABIAAgBQgJABgKgCIgUgDIgPgDQARAFAQAGIAHADIANAFIAPAHIARAHQAIADABAGIgCADIAAAAQgLABgOgBIgUgEIgLgCIgZgHIgKgDQACAIAKAFIAVAJIAHAEIABAAIAEABIARAGQAIABgDAGQgCAFgHgBIgBAAIgUgEIgHgCQgLgDgKgEIgEgCIgLgEIAJAJQAFAHAHAFIAOAHIADADIAJAGQAFADgCADIgDACQgGADgHgCIgFgBQgLgFgIgHIgKgHIgIgDQgDgBgCACQgJAFgKADQgMADgLAAQgHAAgIgCQgFgCgDgDIgBAAIAEgDQACgDABgEQgBAEgCADIgEADIgIALQgHAHgGAGIgMALIgCABIgFAEIgKAHIgPAJQgDgBgDADIgLAEIgNAEIgFABIgTADIgNABIgFABIgGAAIgLAAQgJAAgKgCg");
	this.shape_11.setTransform(25.1,40.5,1,1,-8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AgdAjIA7hE");
	this.shape_12.setTransform(9.9,47.2,1,1,-3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.1,1,1).p("Ah7AaQADgDACgFQADgFACgFQAEgDAEgEQAIgFAHgFQAIgEAIgEQAIgEAKgBQAJgBAJgCQAGgBAFAAQAEAAADAAQAKAAAJgDQADgBAEgBQAEgCAEgDQAHgFACgIQADgJABgKQACgJAAgJQAAgLAHgFQACgBADgBQAKgBAJAAQAKAAAJABQAEAAADgBQAGABAGAAQAJAAAKAAQAJAAAKACQADABADABQACAAABAAQAFACAFAAQADABACABQgHAJgKADQgBAAgCABIAAgBQgJACgKAAQgKAAgKAAQgHAAgIAAQARACARAEQADABAEAAQAHACAHABQAIADAIACQAJACAIACQAJACACAFQgBACgBACIAAAAQgLADgNAAQgLABgKgBQgGAAgFgBQgNgBgNgCQgFgBgFAAQADAHALAEQAKADALADQAEABAEABQABAAABAAQACABACAAQAJABAIACQAIABgCAGQgBAFgGABQgBAAgBAAQgKAAgLgBQgDAAgEgBQgLgCgLgDQgCgBgCAAQgGgCgGgBQAEADAHAGQAGAGAIAEQAHACAHADQACABACABQAFACAFACQAFADgBACQgBACgCABQgFAEgIgBQgCAAgCgBQgMgDgKgGQgFgCgGgCQgDgBgFgBQgDAAgCACQgHAFgKAFQgLAFgMABQgHACgHgCQgFgBgEgCIgBAAQACgCABgCQACgDAAgEAAPALQgDAGgEAFQgFAJgFAHQgFAGgGAGQAAABgBABQgCACgDADQgEAEgEAEQgGAFgIAFQgDAAgDAEQgFADgFADQgGADgGACQgDABgCABQgJADgJACQgGACgHACQgCAAgDABQgDABgDAAQgFABgFABQgKACgJgBQgKgBgIgCQgIgCgHgDQgCgBgCgBQgBAAgBgB");
	this.shape_13.setTransform(24.9,40.2,1,1,-3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC97").s().p("AiRBqQgKgBgIgCIgOgFIgFgCIgCgBIA9hFIAFgIIAFgKIAIgHIAPgKIAQgIQAIgEAKgBIASgDIALgBIAHAAQAKAAAJgDIAHgCIAIgFQAHgFACgIQADgJABgKIACgSQAAgLAHgFIAFgCIATgBIATABIAHgBIAMABIATAAQAJAAAKACIAGACIADAAIAKACIAFACQgHAJgKADIgDABIAAgBQgJACgKAAIgUAAIgPAAQARACARAEIAHABIAOADIAQAFIARAEQAJACABAFIgBAEIAAAAQgLADgNAAIgVAAIgLgBIgagDIgKgBQADAHALAEIAWAGIAHACIACAAIAEABIARADQAIABgCAGQgBAFgGABIgCAAIgVgBIgHgBQgLgCgLgDIgEgBIgMgDIALAJQAGAGAIAEIAOAFIAEACIAKAEQAFADgBACIgDADQgFAEgIgBIgFgBQgLgDgKgGIgKgEIgJgCQgDAAgCACQgHAFgKAFQgLAFgMABQgHACgHgCQgFgBgEgCIgBAAIADgEQACgDABgEQgBAEgCADIgDAEIgHALQgFAJgFAHIgLAMIgBACIgFAFIgIAIIgOAKQgDAAgDAEIgKAGIgMAFIgFACIgSAFIgNAEIgFABIgFABIgLACIgMABIgHAAg");
	this.shape_14.setTransform(24.9,40.2,1,1,-3.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AgbAkIA3hH");
	this.shape_15.setTransform(10.4,47.3,1,1,-4.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("Ah6AhQADgEACgFQACgFACgFQADgEAEgEQAHgGAHgEQAIgGAIgEQAHgEAKgCQAJgCAKgCQAFgBAFgBQAEAAADAAQAKgBAJgDQAEgBADgCQAEgCAEgDQAGgFACgIQACgKABgJQABgKAAgJQgBgLAGgFQADgCADAAQAJgCAJgBQAKAAAJAAQAEgBADAAQAGAAAGAAQAJgBAKAAQAJgBAKACQADABADAAQACAAACAAQAEABAFABQADABADAAQgHAKgKADQgBABgBAAIgBAAQgJACgKABQgJABgKAAQgIABgIgBQASABARADQADABAEAAQAHACAHABQAIACAIABQAJACAJABQAJACABAFQAAACgBABIAAAAQgKAEgOABQgKABgLAAQgFABgGgBQgNAAgNgBQgFgBgFAAQADAHAMADQAKACAMADQAEABAEABQAAAAABAAQACAAACAAQAKABAIABQAIABgCAGQgBAFgGABQgBAAgBAAQgKABgKgBQgEAAgDAAQgMgBgLgDQgCAAgCgBQgGgBgGgBQAEADAHAGQAHAFAIADQAHADAHACQACABACABQAGACAEACQAGACgCADQAAABgBACQgGADgIAAQgCAAgCgBQgMgCgKgEQgFgDgGgCQgEgBgEAAQgDAAgDACQgHAGgJAFQgLAFgLADQgHABgHgBQgGAAgEgCIAAAAQABgCABgDQACgCAAgEAAPAJQgEAGgDAGQgEAIgFAHQgEAHgGAHQAAABgBAAQgCADgCACQgEAFgEAEQgGAGgHAFQgEAAgCAEQgFAEgFADQgGADgGADQgCABgCABQgJADgJAEQgGACgHACQgCABgCAAQgDABgDABQgFABgGABQgJACgKAAQgKAAgIgCQgIgBgGgDQgDAAgCgBQAAAAgBgB");
	this.shape_16.setTransform(25,39.2,1,1,-4.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC97").s().p("AiMBxQgKAAgIgCIgOgEIgFgBIgBgBIA4hIIAFgJIAEgKIAHgIIAOgKIAQgKQAHgEAKgCIATgEIAKgCIAHAAQAKgBAJgDIAHgDIAIgFQAGgFACgIIADgTIABgTQgBgLAGgFIAGgCIASgDIATAAIAHgBIAMAAIATgBQAJgBAKACIAGABIAEAAIAJACIAGABQgHAKgKADIgCABIgBAAQgJACgKABIgTABIgQAAQASABARADIAHABIAOADIAQADIASADQAJACABAFIgBADIAAAAQgKAEgOABIgVABIgLAAIgagBIgKgBQADAHAMADIAWAFIAIACIABAAIAEAAIASACQAIABgCAGQgBAFgGABIgCAAIgUAAIgHAAQgMgBgLgDIgEgBIgMgCIALAJQAHAFAIADIAOAFIAEACIAKAEQAGACgCADIgBADQgGADgIAAIgEgBQgMgCgKgEIgLgFIgIgBQgDAAgDACQgHAGgJAFQgLAFgLADQgHABgHgBQgGAAgEgCIAAAAIACgFQACgCAAgEQAAAEgCACIgCAFIgHAMQgEAIgFAHIgKAOIgBABIgEAFIgIAJIgNALQgEAAgCAEIgKAHIgMAGIgEACIgSAHIgNAEIgEABIgGACIgLACQgIACgJAAIgCAAg");
	this.shape_17.setTransform(25,39.2,1,1,-4.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AgYAmIAxhL");
	this.shape_18.setTransform(10.4,47.4,1,1,-3.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.1,1,1).p("Ah5ApQADgEABgFQACgFACgFQADgEAEgEQAGgHAHgGQAHgFAIgFQAHgEAJgDQAJgCAJgDQAFgCAGgBQADgBAEAAQAKgBAIgEQAEgCAEgCQADgCADgEQAGgFABgJQACgJAAgKQAAgJgBgKQgCgKAGgGQACgCAEgBQAJgCAJgCQAJgBAKgBQADAAAEgBQAGAAAGgBQAJgBAJgBQAKgCAKABQADABADAAQABAAACAAQAFAAAFABQADAAACABQgGAJgJAEQgBABgCABIAAgBQgJADgKACQgJACgKABQgIABgHAAQARAAARACQADAAAEAAQAHABAIAAQAIACAIABQAJABAJAAQAJABACAFQgBACAAABIAAAAQgKAFgNACQgLACgLABQgFABgFAAQgNABgOgBQgFAAgFAAQAEAHAMACQALACALABQAEABAEABQABgBABAAQACABACAAQAJAAAIAAQAJAAgCAHQAAAFgGABQgBAAgBAAQgKACgLAAQgDAAgEABQgMAAgKgDQgDAAgCAAQgGgBgGAAQAEACAIAFQAHAFAIADQAIACAHABQACABACABQAGABAFACQAFACgBADQAAABgBACQgFAEgJABQgCAAgCAAQgMgCgKgEQgGgDgGgBQgEgBgEAAQgDAAgCADQgHAHgIAGQgLAFgLAEQgHACgHgBQgGAAgDgCIgBABQgDAGgCAGQgEAJgFAHQgDAHgFAIQgBAAAAABQgCADgCADQgEAFgEAEQgFAGgGAGQgEAAgCAEQgFAEgEAEQgGAEgGADQgCABgCABQgJAEgIAEQgGADgGACQgCABgDABQgDACgDABQgFABgFACQgJACgKABQgKABgIgBQgIgCgHgBQgCgBgCAAQgBAAgBgBAAOAHQABgDABgCQABgCAAgE");
	this.shape_19.setTransform(24.6,38.6,1,1,-3.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC97").s().p("AiWB7IgPgDIgEgBIgCgBIAyhNIAEgJIAEgKIAHgIIANgNIAPgKQAHgEAJgDIASgFIALgDIAHgBQAKgBAIgEIAIgEIAGgGQAGgFABgJIACgTIgBgTQgCgKAGgGIAGgDIASgEIATgCIAHgBIAMgBIASgCQAKgCAKABIAGABIADAAIAKABIAFABQgGAJgJAEIgDACIAAgBQgJADgKACIgTADIgPABQARAAARACIAHAAIAPABIAQADIASABQAJABACAFIgBADIAAAAQgKAFgNACIgWADIgKABIgbAAIgKAAQAEAHAMACIAWADIAIACIACgBIAEABIARAAQAJAAgCAHQAAAFgGABIgCAAIgVACIgHABQgMAAgKgDIgFAAIgMgBIAMAHQAHAFAIADIAPADIAEACIALADQAFACgBADIgBADQgFAEgJABIgEAAQgMgCgKgEIgMgEIgIgBQgDAAgCADQgHAHgIAGQgLAFgLAEQgHACgHgBQgGAAgDgCIgBABIACgFQABgCAAgEQAAAEgBACIgCAFIgFAMQgEAJgFAHIgIAPIgBABIgEAGIgIAJIgLAMQgEAAgCAEIgJAIIgMAHIgEACIgRAIIgMAFIgFACIgGADIgKADQgJACgKABIgIAAIgKAAgAAOAHIAAAAg");
	this.shape_20.setTransform(24.6,38.6,1,1,-3.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AgWAoIAthP");
	this.shape_21.setTransform(10.2,47.1,1,1,-2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("Ah3AvQACgEABgFQACgFABgFQAEgFADgEQAGgHAGgGQAHgGAHgFQAHgFAJgDQAJgDAJgEQAFgCAFgBQAEgBADAAQAKgCAIgFQAEgBAEgDQADgCADgEQAGgGAAgIQABgKgBgKQAAgJgBgJQgDgLAGgFQACgDADgBQAJgDAJgCQAKgBAJgCQADgBAEAAQAGgBAGgBQAJgCAJgCQAJgCALABQADAAADAAQABAAACAAQAFAAAEAAQADAAADABQgFAKgJAEQgCABgBABIAAgBQgJAEgKACQgJACgKACQgHACgIABQARgCARABQAEAAAEAAQAHAAAHAAQAIABAJABQAJAAAJAAQAIABADAEQgBACAAACIAAAAQgKAFgNADQgKACgLACQgFABgFABQgNABgOAAQgFABgFAAQAEAHAMABQALABAMAAQAEABAEABQAAgBABAAQACAAACAAQAKAAAIAAQAIgBgBAHQAAAFgGABQgBABgBAAQgKACgKABQgDAAgEABQgMAAgLgBQgCAAgCAAQgGgBgGAAQAEADAIAEQAHAFAJACQAHABAIABQACABACAAQAFABAFACQAGACgBADQAAABgBACQgFAFgIAAQgCABgCAAQgNgBgKgEQgGgCgGgBQgEAAgEAAQgDAAgCADQgGAHgIAGQgKAHgLADQgHADgIAAQgFAAgEgBIgBAAQgCAGgCAGQgEAKgEAHQgDAHgFAIQAAABAAABQgCADgCACQgDAGgEAFQgFAGgFAGQgEAAgCAEQgFAFgEADQgFAFgGADQgCABgCACQgJAEgIAFQgFADgHADQgCABgCABQgDABgDABQgFACgFACQgJADgJABQgKACgJgBQgHAAgIgCQgCAAgCgBQgBAAgBAAAANAFQABgCABgDQABgCAAgE");
	this.shape_22.setTransform(24.1,37.8,1,1,-2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC97").s().p("AiQCCIgPgCIgEgBIgCAAIAuhQIADgJIAEgKIAGgJIAMgNIAOgLQAHgFAJgDIASgHIAKgDIAHgBQAKgCAJgFIAHgEIAGgGQAGgGAAgIIAAgUIgCgSQgCgLAGgFIAFgEIASgFIATgDIAHgBIAMgCIASgEQAJgCAKABIAGAAIAEAAIAJAAIAGABQgFAKgKAEIgCACIAAgBQgJAEgKACIgTAEIgPADQARgCARABIAIAAIAOAAIARACIARAAQAJABADAEIgBAEIAAAAQgKAFgNADIgVAEIgLACIgaABIgKABQAEAHAMABIAXABIAIACIABgBIAEAAIASAAQAIgBgBAHQAAAFgGABIgCABIgUADIgHABQgMAAgLgBIgEAAIgMgBIAMAHQAHAFAJACIAPACIAEABIAKADQAGACgBADIgBADQgFAFgIAAIgEABQgNgBgKgEIgMgDIgIAAQgDAAgCADQgGAHgIAGQgKAHgMADQgGADgHAAQgGAAgEgBIAAAAIABgFIABgFIAAgBIAAABIgBAFIgBAFIgFAMQgEAKgEAHIgIAPIAAACIgEAFIgHALIgKAMQgEAAgCAEIgJAIIgLAIIgEADIgRAJIgMAGIgEACIgGACIgKAEQgJADgJABIgNABIgGAAgAAOAFIAAAAg");
	this.shape_23.setTransform(24.1,37.8,1,1,-2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AgUApIAphR");
	this.shape_24.setTransform(10.2,47.3,1,1,6.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.1,1,1).p("Ah2AzQACgEABgFQABgFACgGQADgEADgFQAGgHAGgGQAGgHAHgFQAHgFAJgDQAJgEAJgDQAFgCAFgCQADgBAEAAQAKgDAIgFQADgBAEgDQAEgDACgEQAFgGAAgIQABgKgBgJQgBgKgCgJQgCgKAFgGQACgCADgCQAKgDAIgCQAKgCAJgCQADgBAEgBQAGgBAGgBQAIgCAKgCQAJgDAKAAQADABADgBQACAAABAAQAFAAAFAAQADAAADABQgFAKgJAFQgBABgCAAIAAAAQgJAEgJACQgKADgJACQgIACgHABQARgCARAAQADAAAEAAQAHAAAIAAQAIAAAIABQAKAAAIgBQAJABADAEQgBACAAABIAAAAQgKAGgNAEQgKACgKACQgGABgFABQgNACgNABQgFABgGAAQAFAHAMABQALAAAMAAQAEABAEAAQAAAAABgBQACAAACAAQAKgBAIAAQAIAAgBAGQAAAFgGACQAAAAgBAAQgKADgLABQgDABgDAAQgMABgMgBQgCAAgCAAQgGAAgGAAQAEACAJAFQAHAEAIACQAIABAIABQACAAACABQAFABAFABQAGABgBADQAAACgBABQgEAGgJAAQgCABgCAAQgMAAgLgEQgGgCgFAAQgFgBgEAAQgDABgBADQgGAHgIAHQgKAHgLAEQgGACgIABQgFAAgFgBIAAAAQgCAGgCAHQgDAJgFAIQgCAHgEAIQgBABAAABQgCADgCACQgDAGgDAFQgFAGgFAGQgEABgCAEQgEAFgEADQgGAFgFADQgCACgCABQgIAFgJAFQgFADgGADQgCACgCABQgDABgDABQgFADgFABQgJAEgJABQgKACgIAAQgIAAgHgCQgDAAgCAAQgBAAgBgBAANAEQABgCAAgCQACgDgBgE");
	this.shape_25.setTransform(25.1,39.7,1,1,6.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC97").s().p("AiLCHIgPgCIgFAAIgCgBIArhRIADgJIADgLIAGgJIAMgNIANgMQAHgFAJgDIASgHIAKgEIAHgBQAKgDAIgFIAHgEIAGgHQAFgGAAgIQABgKgBgJIgDgTQgCgKAFgGIAFgEIASgFIATgEIAHgCIAMgCIASgEQAJgDAKAAIAGAAIADAAIAKAAIAGABQgFAKgJAFIgDABIAAAAQgJAEgJACIgTAFIgPADQARgCARAAIAHAAIAPAAIAQABIASgBQAJABADAEIgBADIAAAAQgKAGgNAEIgUAEIgLACIgaADIgLABQAFAHAMABIAXAAIAIABIABgBIAEAAIASgBQAIAAgBAGQAAAFgGACIgBAAIgVAEIgGABQgMABgMgBIgEAAIgMAAIANAHQAHAEAIACIAQACIAEABIAKACQAGABgBADIgBADQgEAGgJAAIgEABQgMAAgLgEIgLgCIgJgBQgDABgBADQgGAHgIAHQgKAHgLAEQgGACgIABQgFAAgFgBIAAAAIABgEIABgGIAAgBIAAABIgBAGIgBAEIgEANQgDAJgFAIIgGAPIgBACIgEAFIgGALIgKAMQgEABgCAEIgIAIIgLAIIgEADIgRAKIgLAGIgEADIgGACIgKAEQgJAEgJABIgQACIgCAAgAANAEIAAAAg");
	this.shape_26.setTransform(25.1,39.7,1,1,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{rotation:0,x:25.6,y:39.5}},{t:this.shape_1,p:{rotation:0,x:25.6,y:39.5}},{t:this.shape,p:{rotation:0,x:11,y:47.5}}]}).to({state:[{t:this.shape_2,p:{rotation:6.3,x:25.3,y:40.8}},{t:this.shape_1,p:{rotation:6.3,x:25.3,y:40.8}},{t:this.shape,p:{rotation:6.3,x:9.9,y:47.2}}]},2).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},2).wait(2));

	// plucking arm
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AgfgpIA/BT");
	this.shape_27.setTransform(8.7,28.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.1,1,1).p("AAIgzQgHAMgBAIQAAAEACACQABADAEACQAEADAFADQAEADAEAEQADACACADQAGAHABAJQABAJgDAJQgCADgBAEQgCADgCAEQgFAHAAAIQAAgBABgBAhagPQgDgDgCgEQgCgCgBgCQgBgCAAgBQgCgFgCgEQgDgJgCgJQgCgJAAgIQgBgFABgEQAAAAAAgBQABgEADgEQAEgIAFgHQAFgGAHgFQAGgFAIgEQAFgDAKgGAgaCIQgEgBgEgBQgDgBgDgBQgKgDgIgFQgHgEgGgFQgBgBAAAAQgBgBAAAAQgGgGgGgHQgFgHgFgHQgEgGgCgGQgCgDAAgCQgEgHAAgJQgBgKABgKQACgJABgIQABgKAEgHQACgDABgDQADgFADgDQACACAEACABwBgQgDACgCAB");
	this.shape_28.setTransform(11.1,37.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC97").s().p("AADCGIgGgCQgJgDgIgFQgIgEgGgFIgBgBIAAgBIgMgNIgKgOIgHgMIgCgFQgEgHAAgJQAAgKABgKIACgRQACgKAEgHIADgGIAGgIIAFAEIgFgEIgGgHIgCgEIgCgDIgDgJIgFgSIgDgRIABgJIAAgBIADgIQAEgIAGgHQAEgGAHgFQAHgFAIgEIAPgJIA/BUQgGAMgBAIQAAAEABACQACADADACIAJAGIAJAHIAFAFQAFAHABAJQABAJgDAJIgCAHIgFAHQgEAHgBAIIACgCIgyBNIgIgCg");
	this.shape_29.setTransform(7.4,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).wait(20));

	// lefthand
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AAmgNIhLAb");
	this.shape_30.setTransform(59.8,23.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.1,1,1).p("AhDgQQAAAAgBAAQAAAAAAAAQAFgGAFgGQAEgFAHgCQADgBACAAQAJgCAKgBQAKgCAJACQAJABAIACQAIABAJAAQAFgBgBgEQgDgJgFgHQgCgDgEgBQgFgBgFACQgFACgEACQgIADgKABQgDAAgDAAQgCAAgDAAQgHAAgCgGQgBgLAJgFQAGgEAHgCQACAAABAAQAIgBAGgCQAJgBAJABQABAAAAAAQABAAABAAQAJABAIACQAIAEAHAEQAHAFAHAHQACACACAFQABACAAACQAAABAAABQABAGgEAEQgGAGABAKQABAIAEAGQABABAAABQAGAGAEAHQAFAJAEAHQACAFACAEQACACACADQACADAAAEQACAEABAFAhDgQQADgBAEgBQAGgBAHgBQAAAAAAAAQAGgBAFABQAGABAFACQAGABAGACQACAAACAAQAHABAGABAAeBMIgBAAQgKgBgJgDQgBgBgBgBQgJgEgGgJQAAgBAAAAQgCgEgEgCQgCgCgEAAQgFgBgFABQgFABgEACQgEADgFACQgIAEgJADQgSAGgUAAQADgFAFgFQAFgHAHgGQACgBABgBQAGgEAGgDQACgBACgBQAGgCAFgCQADgBACAAQAHgCAHABQACAAACAAQAIAAAHgCQAKgDAEgJQAEgGgEgFQgFgEgKgBQgKAAgKABQgGAAgGADQgCABgDABQAAABgBAAQgBABgCABQgFADgHABQgIACgJAAQgDAAABgFQADgJAFgGQAFgFAGgFQABAAAAAAAAeBMQAGAAABgEAAcBUQABgEABgE");
	this.shape_31.setTransform(53.3,16.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC97").s().p("AAdBMIABAAIABAAIAAAAQAFAAABgDIAAgBIAAABQgBADgFAAIAAAAIgBAAIgBAAIAAAAQgKgBgJgDIgCgCQgJgEgGgJIAAgBQgCgEgEgCIgGgCQgFgBgFABQgFABgEACIgIAFQgJAEgJADQgSAGgUAAIAIgKIAMgNIADgCIAMgHIAEgCIALgEIAGgBQAGgCAHABIAEAAQAIAAAIgCQAJgDAEgJQAEgGgEgFQgGgEgKgBQgJAAgKABIgLADIgGACIgBABIgDACIgLAEQgJACgJAAQgDAAABgFQAEgJAEgGQAFgFAGgFIABAAIAHgCIANgCIABAAQAFgBAFABIAKADIAOADIADAAIANACIgNgCIgDAAIgOgDIgKgDQgFgBgFABIgBAAIgNACIgHACIgBAAIAAAAIALgMQADgFAIgCIAEgBIATgDQAKgCAKACIAQADQAJABAJAAQADgBAAgEQgDgJgFgHQgDgDgEgBQgEgBgFACIgJAEQgIADgKABIgGAAIgFAAQgHAAgCgGQgBgLAJgFQAGgEAHgCIADAAIAOgDQAJgBAJABIABAAIACAAQAJABAHACQAJAEAHAEQAIAFAGAHQADACABAFIABAEIAAACQABAGgEAEQgGAGABAKQABAIAEAGIABACIAKANIAJAQIAEAJIAEAFIACAHIADAJIhLAdIABgIg");
	this.shape_32.setTransform(53.3,16.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AAngIIhNAR");
	this.shape_33.setTransform(60,24.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.1,1,1).p("Ag3gcQgBAAAAAAIAAAAQAFgFAHgFQAEgEAHgCQADAAACAAQAKAAAJgBQAKAAAJADQAIADAJADQAIACAJABQAEAAAAgEQgCgJgEgIQgCgEgEgBQgDgBgGABQgFABgEABQgKACgJgBQgDAAgDAAQgCgBgDAAQgHgBAAgGQAAgLAJgEQAHgDAGgBQACAAABAAQAIAAAIAAQAJAAAIACQABAAAAAAQABAAABAAQAJACAHAEQAIAFAGAFQAHAGAFAIQACACABAFQABACAAACQAAABAAACQgBAFgEAEQgHAFAAAKQAAAIADAFQAAABABACQAEAIAEAHQADAKADAHQACAFABAEQACADABADQABADAAAEQABAEABAFAg3gcQACgBAFABQAGAAAHgBIABAAQAFAAAFACQAFACAFACQAGACAGADQACAAAAABQAIACAHABAAbBNIAAAAQgKgDgIgEQgBgBgCgBQgIgFgEgKQAAgBAAAAQgCgFgDgCQgCgCgEgBQgFgCgFAAQgFABgEACQgFACgEABQgJADgJACQgTAEgUgDQAEgFAFgFQAHgGAHgEQACgBACgBQAFgDAHgDQACAAADgBQAFgBAGgBQADgBACAAQAHAAAHABQACABACAAQAIABAHgBQAJgCAGgHQAFgGgEgGQgFgFgJgBQgJgCgKAAQgGAAgGACQgCAAgDABQgBABAAAAQgCABgCABQgGABgGAAQgJABgJgBQgCAAACgFQAEgIAGgGQAFgFAHgEQAAAAABAAAAbBNQAHABABgEAAZBUQABgDABgE");
	this.shape_34.setTransform(53.6,16.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC97").s().p("AAbBNIABAAIACAAIAAAAIABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAIABgBIAAAAIAAgBIAAABIAAAAIgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBAAIAAAAIgCAAIgBAAIAAAAQgKgDgIgEIgDgCQgIgFgEgKIAAgBQgCgFgDgCIgFgDQgGgCgEAAQgGABgEACIgJADQgJADgJACQgTAEgUgDIAJgKIAOgKIADgCIANgGIAFgBIALgCIAFgBQAHAAAIABIADABQAIABAIgBQAIgCAHgHQAEgGgEgGQgFgFgJgBQgJgCgKAAIgMACIgFABIgBABIgEACIgMABQgJABgJgBQgCAAACgFQAEgIAGgGQAFgFAHgEIABAAIABAAIADAAIAAAAIABAAIACAAIANgBIABAAIAAAAIABAAIABAAIAIACIAKAEIAMAFIACABIAOADIgOgDIgCgBIgMgFIgKgEIgIgCIgBAAIgBAAIAAAAIgBAAIgNABIgCAAIgBAAIAAAAIgDAAIgBAAIgBAAIAAAAIAMgKQAEgEAHgCIAFAAIAUgBQAJAAAJADIARAGQAIACAJABQAEAAgBgEQgBgJgEgIQgCgEgDgBQgEgBgGABIgJACQgKACgJgBIgGAAIgFgBQgHgBAAgGQAAgLAJgEQAHgDAGgBIADAAIAQAAQAJAAAIACIABAAIACAAQAJACAHAEQAIAFAGAFQAHAGAFAIQACACABAFIABAEIAAADQgBAFgEAEQgHAFAAAKQAAAIADAFIABADIAIAPIAGARIADAJIADAGIABAHIACAJIhOASIACgHg");
	this.shape_35.setTransform(53.6,16.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AAogEIhPAJ");
	this.shape_36.setTransform(59.9,24.6,1,1,-3.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(0.1,1,1).p("AgugjQAAAAAAAAIgBAAQAHgEAGgFQAFgEAIAAQACgBACABQAKAAAJABQAKABAIAEQAJAEAIADQAIAEAIABQAEABAAgEQAAgKgDgIQgBgEgEgBQgEgCgGABQgFAAgEABQgKABgKgCQgDgBgCAAQgDgBgCgBQgHgCABgGQABgKAJgDQAHgCAHgBQACABABAAQAIABAIAAQAIABAJADQAAAAABAAQABABABAAQAIADAHAEQAHAGAGAGQAGAGAFAIQABADABAFQAAACAAACQAAABgBACQgBAFgEADQgHAFgCAKQgBAGADAHQAAABAAACQAEAIACAIQADAKACAHQABAFABAFQABADABACQABAEAAAEQAAAEABAFAAZBOIAAgBQgJgDgIgFQgBgBgCgBQgHgGgDgLQAAAAAAgBQgBgFgDgCQgDgCgDgBQgFgDgEAAQgFAAgFABQgFACgFABQgIACgKABQgTABgUgFQAFgEAFgEQAIgFAHgEQACgBACgBQAGgCAHgCQADAAACgBQAFgBAHAAQACAAADAAQAHABAHACQABAAACABQAIACAHAAQAJgBAHgHQAGgGgEgGQgEgFgJgDQgJgCgKgBQgGgBgGABQgCABgDAAQgBABgBAAQgBAAgCABQgGABgGAAQgJAAgJgDQgDAAADgFQAFgIAHgFQAFgEAIgDQAAAAAAAAQADgBAEABQAHABAHAAIAAAAQAFABAFACQAFACAFADQAFADAGADQABABABAAQAHADAHACAAZBOQAHACABgEAAWBVQACgDABgE");
	this.shape_37.setTransform(53.3,17,1,1,-3.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC97").s().p("AAZBOIABAAIADAAIAAAAIABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIAAAAIAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBAAIAAAAIgDAAIgBAAIAAgBQgJgDgIgFIgDgCQgHgGgDgLIAAgBQgBgFgDgCIgGgDQgFgDgEAAQgFAAgFABIgKADQgIACgKABQgTABgUgFIAKgIIAPgJIAEgCIANgEIAFgBIAMgBIAFAAQAHABAHACIADABQAIACAHAAQAJgBAHgHQAGgGgEgGQgEgFgJgDQgJgCgKgBIgMAAIgFABIgCABIgDABIgMABQgJAAgJgDQgDAAADgFQAFgIAHgFQAFgEAIgDIAAAAIABAAIAAAAIAAAAIABAAIAAAAIAFAAIAOABIAAAAQAFABAFACIAKAFIALAGIACABIAOAFIgOgFIgCgBIgLgGIgKgFQgFgCgFgBIAAAAIgOgBIgFAAIAAAAIgBAAIAAAAIAAAAIgBAAIAAAAIgBAAIANgJQAFgEAIAAIAEAAIATABQAKABAIAEIARAHQAIAEAIABQAEABAAgEQAAgKgDgIQgBgEgEgBQgEgCgGABIgJABQgKABgKgCIgFgBIgFgCQgHgCABgGQABgKAJgDQAHgCAHgBIADABIAQABQAIABAJADIABAAIACABQAIADAHAEQAHAGAGAGQAGAGAFAIQABADABAFIAAAEIgBADQgBAFgEADQgHAFgCAKQgBAGADAHIAAADIAGAQIAFARIACAKIACAFIABAIIABAJIhQAKIADgHg");
	this.shape_38.setTransform(53.3,17,1,1,-3.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AApgKIhRAV");
	this.shape_39.setTransform(59.8,24.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.1,1,1).p("Ag9gYQgBAAAAAAQAFgFAGgFQAEgFAIgCQACAAACAAQAKgBAJgBQAKAAAJACQAJACAIADQAIACAJAAQAEAAAAgEQgCgJgEgHQgCgEgEgBQgEgBgGABQgFABgEACQgKADgJgBQgDAAgCgBQgDAAgCAAQgIgBgBgGQAAgKAJgFQAHgDAHgCQACAAABAAQAHAAAIgBQAIAAAJABQABABABAAQAAAAABAAQAJABAHAEQAIAEAHAFQAHAGAGAHQACADABAEQABACAAACQAAACAAABQAAAFgEAEQgHAGAAAKQAAAHAEAHQAAABABAAQAFAIADAHQAFAKADAHQACAFABADQABAEAFAEQAGAFgBACQgBADABAEAg9gYQACgBAEABQAHgBAHAAIAAAAQAFgBAGACQAFABAFACQAGACAGACQACAAABABQAHACAHABAAaBNIAAgBQgKgBgIgEQgCgBgBgBQgIgFgFgJQAAgBgBgBQgBgEgEgCQgCgCgDgBQgGgBgEAAQgFAAgFADQgEACgFACQgIADgJADQgTAEgUgCQAEgFAEgFQAHgGAHgFQABgBACgBQAGgEAHgCQACgBACgBQAGgBAGgCQACAAADAAQAGgBAIABQABAAACABQAIAAAIgBQAJgCAFgIQAFgGgFgGQgEgEgKgCQgJgBgKAAQgGABgGACQgCABgDABQgBAAAAAAQgCAAgCABQgGACgGABQgIACgKgCQgCAAACgEQADgIAGgGQAFgFAHgFQAAAAABAAAAaBNQAHABABgEAAYBUQABgDABgE");
	this.shape_40.setTransform(53.3,17);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC97").s().p("AAaBNIADAAIAAAAIAAAAQAEAAABgDIAAAAIAAAAQgBADgEAAIAAAAIAAAAIgDAAIAAgBQgKgBgIgEIgDgCQgIgFgFgJIgBgCQgBgEgEgCIgFgDQgGgBgEAAQgFAAgFADIgJAEQgIADgJADQgTAEgUgCIAIgKIAOgLIADgCIANgGIAEgCIAMgDIAFAAQAGgBAIABIADABQAIAAAIgBQAJgCAFgIQAFgGgFgGQgEgEgKgCQgJgBgKAAIgMADIgFACIgBAAIgEABIgMADQgIACgKgCQgCAAACgEQAEgIAFgGQAFgFAHgFIABAAIACAAIACAAIAAAAIABAAIAAAAIABAAIAOgBIAAAAIACAAIAAgBIABAAIAAAAIADABIAAAAIAFABIAKADIAMAEIADABIAOADIgOgDIgDgBIgMgEIgKgDIgFgBIAAAAIgDgBIAAAAIgBAAIAAABIgCAAIAAAAIgOABIgBAAIAAAAIgBAAIAAAAIgCAAIgCAAIgBAAIALgKQAEgFAIgCIAEAAIATgCQAKAAAJACIARAFQAIACAJAAQAEAAAAgEQgCgJgEgHQgCgEgEgBQgEgBgGABIgJADQgKADgJgBIgFgBIgFAAQgIgBgBgGQAAgKAJgFQAHgDAHgCIADAAIAPgBQAIAAAJABIACABIABAAQAJABAHAEQAIAEAHAFQAHAGAGAHQACADABAEIABAEIAAADQAAAFgEAEQgHAGAAAKQAAAHAEAHIABABIAIAPIAIARIADAIQABAEAFAEQAGAFgBACQgBADABAEIhRAWIACgHg");
	this.shape_41.setTransform(53.3,17);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AAngJIhNAT");
	this.shape_42.setTransform(59.9,24.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.1,1,1).p("AgvgrQAAABgBAAQAGgEAHgFQAFgEAHgBQADAAACAAQAKABAIABQAKABAJADQAIAEAIAEQAIADAJACQAEAAAAgEQAAgJgDgIQgCgEgEgCQgEgBgGAAQgEABgFAAQgKACgKgCQgCgBgDgBQgCAAgCgBQgHgCAAgGQABgKAJgEQAHgCAIAAQABAAACAAQAHABAIABQAJABAIACQABABABAAQABAAAAAAQAIADAHAFQAHAFAGAGQAGAHAFAIQACADAAAEQAAADAAACQAAABAAABQgBAGgFACQgHAFgBAKQgBAHACAHQABABAAABQAEAIACAIQADAKACAIQABAFABADQAAAEAAAGQAAAGADABQAEACgDAKAgvgrQADAAAEABQAHABAGAAIABAAQAFABAFACQAFACAEACQAGAEAFACQACABABABQAHADAHACAAZBGIgBAAQgJgDgIgFQgBgBgCgCQgHgGgDgKQAAAAgBgBQgBgFgDgDQgCgBgDgCQgFgCgEgBQgFAAgFACQgFACgFABQgIACgKABQgTABgUgEQAFgFAFgEQAIgFAHgEQACgBACgBQAGgDAHgBQACAAADgBQAFgBAHAAQACAAADAAQAGAAAHACQACABACABQAIACAIAAQAIgBAHgIQAGgEgEgGQgEgGgJgDQgJgDgKgBQgGAAgGABQgDABgCAAQgBABgBAAQgCAAgCABQgFABgHAAQgIAAgJgDQgDAAADgFQAFgIAGgFQAGgEAHgDQABAAAAgBAAZBGQAGACABgEAAXBcQAAgSACgE");
	this.shape_43.setTransform(53.7,16.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC97").s().p("AAZBGIAAAAIADABIAAAAIAAAAQABAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIAAAAIAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAIAAAAIAAAAIgDgBIAAAAIgBAAQgJgDgIgFIgDgCQgHgHgDgKIgBgBQgBgFgDgDIgFgCQgFgDgEgBQgFAAgFACIgKADQgIACgKABQgTABgUgEIAKgJIAPgJIAEgCIANgEIAFgBIAMgBIAFAAQAGAAAHACIAEACQAIACAIAAQAIgBAHgHQAGgFgEgGQgEgGgJgDQgJgDgKgBIgMABIgFABIgCABIgEABIgMABQgIAAgJgDQgDAAADgEQAFgJAGgFIANgHIABgBIAHABIANABIABAAQAFABAFACIAJAEIALAGIADACIAOAFIgOgFIgDgCIgLgGIgJgEQgFgCgFgBIgBAAIgNgBIgHgBIgBABIANgJQAFgEAHAAIAFAAIASABQAKABAJAEIAQAHQAIADAJACQAEAAAAgEQAAgJgDgIQgCgEgEgCQgEgBgGAAIgJABQgKACgKgCIgFgBIgEgCQgHgCAAgGQABgKAJgEQAHgCAIAAIADAAIAPACQAJABAIACIACABIABABQAIACAHAFQAHAFAGAGQAGAHAFAIQACADAAAEIAAAFIAAACQgBAGgFADQgHAEgBAKQgBAHACAHIABACIAGAQIAFASIACAIIAAAKQAAAGADABQAEACgDAKIhOATQAAgSACgEg");
	this.shape_44.setTransform(53.7,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_35,p:{rotation:0,x:53.6,y:16.9}},{t:this.shape_34,p:{rotation:0,x:53.6,y:16.9}},{t:this.shape_33,p:{rotation:0,x:60,y:24.4}}]},2).to({state:[{t:this.shape_35,p:{rotation:-5.3,x:52.6,y:17.3}},{t:this.shape_34,p:{rotation:-5.3,x:52.6,y:17.3}},{t:this.shape_33,p:{rotation:-5.3,x:59.6,y:24.2}}]},3).to({state:[{t:this.shape_35,p:{rotation:6,x:54.3,y:16.6}},{t:this.shape_34,p:{rotation:6,x:54.3,y:16.6}},{t:this.shape_33,p:{rotation:6,x:59.9,y:24.7}}]},2).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},4).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},3).wait(4));

	// leftarm
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AAAA6QADg3gDg9");
	this.shape_45.setTransform(51.4,36.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.1,1,1).p("AA6hlQAAABABABQAAACABADQAAAAAAABQABABABACQACAIABAKQABAKgCAJQgCAJgCAKQgDAIgCAJQgCAJgDAIQgDAJgDAKQgDAIgCAIQgEAJgDAJQgDAIgHAIQgGAHgGAHQgHAIgGAEQgFAFgIABQgJABgJAAQgBAAgBAAQgKAAgJgBQgCAAgHgCAg/gRQAFgBACgEQAGgIAFgHQAGgGAFgGQABgBABgBQAHgHAFgHQACgDACgE");
	this.shape_46.setTransform(57.8,32.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC97").s().p("AgkBmIgTgBIgJgCQAEg3gDg9QAFgCACgDIALgPIALgMIACgCQAHgHAFgHQACgDACgEIBKgdIABACIABAFIAAABIACADQACAIABAKQABAKgCAJIgEATIgFARIgFARIgGATIgFAQIgHASQgDAIgHAIIgMAOQgHAIgGAEQgFAFgIABIgSABIgCAAg");
	this.shape_47.setTransform(57.8,32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(20));

	// guitar
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.1,1,1).p("AFSklQABAHAAAHQABAJAAAJQAAAGgIAJQAAAAAAABQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBgCgBgCQgEgFgEgBQgCAAgDACQAAAAgBAAQgEAEgCAFQgFAJACAKQABAHAEABQAAAAABAAQABAAAAAAQgBABgBgBQgGgBgEgDQgEADgCADQAAADgBAAQABACABADQABAKgGAIQgDAHgHACQgCABgDAAQgFAAgEgCQAAAAgBgBIAAAAQgBAAAAgBQgCgBgCgDQgBgEgCABQgHACgFAIQgFAHgFAJQgDAEgIAJQgCACgCADQgLAHgJAHQgNAJgPANQgOALgOAIQgDACgCACQgCACgBABQgEAEgEAFQgGAGgGAHQgGAHgFAGQgEAGgFAFQAAABgBAAQAAABgBAAQAAABgBAAQgFAHgIAHQgHAHgIAGQgGAFgGAGQgCAHgBAHQgBAKAEAIQAEAIAEAJQAEAIABAKQABAIgCAKQgCAJgDAIQgDAJgEAJQgEAIgHAGQgCABgDACQgBAAgCABQgEACgFACQgJACgKACQgJACgHADQgEACgEAAQABAFAAAHQABAHgBAGQAAADAAADQgCAJgCAIQgCAHgDAGQAAADgCACQgEAJgEAIQgEAIgFAIQgDAFgEAFQgBABgBABQgBABgBACQgGAHgGAHQgGAHgKAEQgIADgJADQgIAEgJABQgJACgJACQgKADgJABQgKAAgKAAQgJABgJAAQgJAAgJgCQgJgCgJgCQgKgCgJgDQgJgCgIgDQgKgDgIgFQgHgFgHgGQgHgFgEgIQgFgHgFgIQgFgIgDgJQgDgIgDgJQgCgGgBgHQgBgCAAgCQAAAAAAgBQgCgFgBgGQgBgDAAgEQgCgQAFgNQAGgQAJgTQAIgQAQgKQAQgKATgFQASgFATgBQAUgBAVAAQAFgLADgNQAFgRAJgOQAJgNAPgJQAOgJARgEQAQgFAUAEQASAEATABQAKABAHgEQABgBABgBQAMgHAJgKQACgBABgBQAHgDAEgFQAFgGAFgGQADgDADgEQACgBABgCQABgBABAAQAGgFAEgGQADgDADgDQADgCACgCQAFgGAHgHQABAAAAgBQAEgDAEgEQAEgDACgDQATgcAOgJQAOgLARgHQANgGAKgFIAMgMQAAgCgCgEQgCgEgFgDQAAgBgBAAQgBgLABgHQABgBABgBQADgCAEgDQAAAAAAAAQADgCACgCQAEgDADgCIAaAOIAIgHAFSklQgDAFgDADIAAAAQgBABgCABQgHAHgHAFQgIAGgGAHQAAABgBAAQgCACgCADIAAAAQgBABgBABQAAAAAAAAQgDADgCAEQgEAEgEAEQgCADgDADQgFAFgGAFQgCACgCABQgBABAAAAQgBABgBABQgEAEgGAFQgBABgCABQgCADgDABQgFADgDADAD1krQADgGACgGQABgBADABQAJADAIADQAFACAFABQAEABADABQAHACAGABQACAAACAAQAKABAJABQAIABAGABAEkkFIgHAHIAJAEAEfkIIAFADIAFgFAEjkMIgEAEAEskBIgIgEAE8j/QgIAAgHAEQgBAAgBABQgIAFADALQABAEACADQACADACABADuktQADABAEABADukeQADgEACgEQABgDABgCAENkFIALAEIAHgHIgKgEIAKgKAEVkMIgIAHIglgQADukeIAnASAD7jlIgKgGIAcgaAD0jeIAHgHIAFAEIAdgdIgFgDIgdAcAD5jbIAJAGAEZjYIAAAAQACAAABgBQAAAAgCABQAAAAgBAAQAAAAAAAAQgBAAgBAAQgGAAgFADQgCABgCACQgBABgBABQAAAAgBABQgCACgBADAEXjYQgFAEgDAFQgFAJADAJAEJjbIgJgGIgHAGIgFgDAFMj1QABAFgCAGQgEAKgIAEQgDABgDAAAEnjZQgBABAAACQgDgEgHABADdkOQgKgCAFgLQADgIAGgGQAFgEAIAAQgIAJgHAGQgIAHAFAIQAAABABAAgADPj+QgHgHgKACQgJACgBAHQgBACAAABQAAAGAEADQAAAAgBgBQgGgEABgHQAAgCABgCQAEgIAKgCQAKgCAIAJQAFgEAFgEQACgBABgBQAAgBABAAQAAAAAAAAQAAAAgBAAQgBgBgBgBADgkMQAFgFADgEQABgBAAAAQADgEACgEADSkBQAAABgBAAQgBABgBABQgDACgCACQgBABgCACADhjpIAJAFIgSARAC7juQgCABgCgBAC8jHIAGgFIAJAFIANgMIgJgGIASgQADPjZIgNANIgPgIADVjBIAGAEIAegeADdjQIgFgDADLjHIAKAGADRkAIAYAQAC0jpIAbAQAC8jHQAAAGgGADQgDABgDACIllFQIAAAAQAGAAAFABQAKABAJAFQACACACABQABABABABIABAAQADACACABIFmlhADxjrIgHAHIAKAGIgfAdAD/kGIgWAWIAIAFAjlDCQAAAAAAgBQABgUAOgLQAOgMATgBIgwAtQAAAEABAEQAAABAAAAIgVAUIAQAMIgIAIIgQgNIAIgHIgGgEgAjRDoQAKAHAMACIABAAQAOADALgEQAFgBAEgDQALgFAHgLQAHgJACgMQABgGgBgIQgBgNgNgIIhGBEQgEgCgEgEQgCgCgBgCIgNANIANAJgAkGDiIgIgFIAIgIIAHAGgAkBDmIgFgEAjcD0IAOAKIgHAKIgQgMIgMgJAjkDLQACALAGAIIBFhCIFsldAjlD8IAJgIAiqCWIF1ldAjkDLIA6g1");
	this.shape_48.setTransform(37.4,31.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#996600").s().p("AAJANIAJgIIAOAKIgIAKgAgCAEIAHgHIANAIIgJAIgAASAFgAgSgHIAHgIIAQAMIgHAHgAAFgDgAgSgHIgGgFIAIgHIAFAEIgHAIgAgfgRIAHgHIAIAFIgIAHgAgQgTg");
	this.shape_49.setTransform(13.5,55.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CCCCCC").s().p("AANA6IgCgBIAAAAIgBgBIgDgEQgBgBAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgBgKIAEgFIABgBIABgCIAFgDQAFgDAFAAIACAAIABAAIADgBQAHgBACAEIACgDQAAABAAABQgBAAAAAAQAAABAAAAQAAAAAAAAIABAFQACAKgGAIQgEAHgGACIgGABIgBAAQgEAAgDgCgAAPA0IgBgHQAAgGACgFQADgFAFgEQgFAEgDAFQgCAFAAAGIABAHgAA5AWIgBAAQgEgBgBgHIAAgFQAAgIADgFQADgFAEgEIABAAIAEgCQAEABAEAFIADAEIAAABIAAAAIAAABQACAEgDAGQgDAKgJAEIgFABIgCAAgAAvASIgEgEQgDgDgBgEQgCgKAHgFIADgBQAHgEAIAAIgBAAQgEAEgDAFQgDAFAAAIIAAAFQABAHAEABQgFgBgEgDgAhGADQgEgDAAgFIAAgDQACgHAJgCIAEAAIAAAAIAAAAQAHAAAFAFIgEAEIgEADIgHAFIgEADIgBAAIgBABIgCgBgAhIACQgGgDACgHIABgEQAEgIAKgCQAKgCAIAJIgCABIgCACQgFgFgHAAIAAAAIAAAAIgEAAQgJACgCAHIAAADQAAAFAEADIgCgBgAgegaIgDgCIgBgBQgBgDAAgDQAAgFAFgEIAOgPIgOAPQgFAEAAAFQAAADABADIABABQgJgCAEgLQAEgIAGgGQAEgEAIAAIAIACIgDAFIgEAIIgGAIIAAABIgIAJIgBAAg");
	this.shape_50.setTransform(62.8,7.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIAtIgBAAQgMgCgKgGIgIgHIgDgDIBEhBIhEBBQgHgJgBgKIA4g1Ig4A1IAAgCIgBgHIAwgtIAAAAIAJABQALABAJAGIADACIADACIABABIAFACIhFBEIBFhEQANAIABANIAAANQgCANgHAIQgHALgLAFIgJAEQgHADgHAAIgKgCgAgzgCQABgUAOgLQANgMAUgBIgwAtIAAgBg");
	this.shape_51.setTransform(19.6,50.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#993300").s().p("AjSE3IgSgEIgTgFIgRgFQgKgDgIgFQgHgFgHgGQgHgFgEgIIgKgPQgFgIgDgJIgGgRIgDgNIgBgEIAAgBIgDgLIgBgHQgCgQAFgNQAGgQAJgTQAIgQAQgKQAQgKATgFQASgFATgBIApgBQAFgLADgNQAFgRAJgOQAJgNAPgJQAOgJARgEQAQgFAUAEQASAEATABQAKABAHgEIACgCQAMgHAJgKIADgCQAHgDAEgFIAKgMIAGgHIADgDIACgBIAKgLIAGgGIAFgEIAMgNIABgBIAIgHQAEgDACgDQATgcAOgJQAOgLARgHIAXgLIAGgDQAGgDAAgGIAGgFIAJAFIAKAGIgKgGIANgMIgJgGIASgQIgagOIAaAOIgSAQIAJAGIgNAMIgJgFIANgNIgbgQIAbAQIgNANIgPgIIgBgBIAAgSIACgCIAHgFIAAAAIAFgEIAHgFIADgDIAFgEIACgCIABgBIAKgIIADgCIABgBIAAAAIAIgJIABgBIAFgIIAFgIIACgFIAFgMQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAABIARAGIAKADIAHACIANADIAEAAIATACIAOACIgGAIIAAAAIgDACIgOAMQgIAGgGAHIgBABIABgBQAGgHAIgGIAOgMIADgCIAAAAIAGgIIABAOIABASQAAAGgIAJIAAABIAAgBIgBAAIAAgBIgCgEQgEgFgEgBIgFACQgIAAgHAEIgCABQgIAFADALQABAEACADIAEAEQgEADgCADIgBADQgDgEgHABIgCABIgBAAIAAAAIgCAAQgGAAgFADIgEADIgCACIgBABIgDAFIAAAKQgHACgFAIIgKAQIgLANIgEAFIgUAOIgcAWQgOALgOAIIgFAEIgDADIgIAJIgMANIgLANIgJALIgBABIgBABIgBABIgNAOIgPANIgMALIgDAOQgBAKAEAIIAIARQAEAIABAKQABAIgCAKIgFARIgHASQgEAIgHAGIgFADIgDABIgJAEIgTAEQgJACgHADQgEACgEAAQABAFAAAHIAAANIAAAGIgEARIgFANIgCAFIgIARIgJAQIgHAKIgCACIgCADIgMAOQgGAHgKAEIgRAGQgIAEgJABIgSAEQgKADgJABIgUAAIgSABQgJAAgJgCgAkODdIAIAFIAFAEIAQANIAMAJIAQAMIAHgKIgOgKIALgMQAKAHAMACIABAAQAOADALgEIAJgEQALgFAHgLQAHgJACgMIAAgOQgBgNgNgIIFmlhIlmFhIgFgDIgBAAIgCgCIgEgDIFsldIlsFdQgJgFgKgBIF1ldIl1FdIgLgBIAAAAIFllQIllFQQgTABgOAMQgOALgBAUIAAABIgaAZIgHgGgADbi9IAegeIAJAGIgKAJIgDACIgFAEIgIAGIAIgGIAFgEIADgCIAKgJIgJgGIAHgGIAJAGIgEADIgBABIgCACIACgCIABgBIAEgDIgJgGIgHAGIgFgDIAFADgADVjBIAGAEIgGgEIAfgdIgKgGIAHgHIAKAGIgKgGIAcgaIALAEIAHgHIgKgEIAKgKIgKAKIAKAEIgHAHIgLgEIAIgHIgngSIAnASIgIAHIglgQIAlAQIgcAaIgIgFIAWgWIgWAWIAIAFIgHAHIAKAGIgfAdgADYjTIAFADIgFgDIASgRIgJgFIAIgHIgYgQIAYAQIgIAHIAJAFIgSARgAEmj6IgFAHIgIAIIgFAGIgLAKIALgKIAFgGIAIgIIAFgHIAAAAIAAAAgAD0jeIAHgHIAFAEIAdgdIgFgDIgdAcIAdgcIAFADIgdAdIgFgEgAEmj6IACgCIAAAAIAEgFIgIgEIAFgFIgFAFIgFgDIAEgEIgEAEIAFADIgHAHIAJAEgAjpDrIANgNIADAEIAIAGIgLAMgAjpDrIgQgMIAVgUQACALAGAIIgNANgAjRDoIAAAAgAj/DbIAagZIABAIIAAABIgVAUgAjkDLIAAAAgABWh2IADgDQgCADgEADIADgDgAC6jNQgCgEgFgDIAPAIIgGAFQAAgCgCgEgACzjUgADPjZgAD5jbgAD5jbgAD5jbgADhjpgADpjwgAEmj6IgJgEIAHgHIAIAEIgEAFIAAAAIgCACgAEkkFgAEkkFgAENkFgAENkFg");
	this.shape_52.setTransform(37.4,31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(20));

	// body
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFCC97").ss(0.1,1,1).p("AAAgzQABAKABAJQAAAEgDBQ");
	this.shape_53.setTransform(51.6,37.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.1,1,1).p("AFHkbQACABACAAAiThTQAIgCAIgCQAJgDAJgBQAJgCAJgBQAKgBAJgBQAKAAAJABQAKABAGAFQAHAGAEAIQAFAIALgCQAGgBAGABIABAAQAJABAHAEQADABACABQACABAUAFQADAAACABQAZAFARAPQARAOAIAIQAIAHAEAHQADAHABAGQABACAAACIAAABACBB7QgFAAgFgCQgKgCgIgCQgIgDgIgDQgBAAAAgBQgIgDgHgEQgHgFglgZQgBABABACIAAAAQgCBSgEAGQgGAHAAAJQAAAEABADQAAABABABQACAIACAIQACAJAAAJQAAABAAABQAAAJgCAIQgBAIgEAHQgFAIgEAIQAAABgBABQAAAAAAABQgEAGgIABQgIABgJgBQgJgBgKgBQgJgCgHgDQgCgBjcgNQgXgvgZkRQACgBAAAAIgBAAAAZBJQgBgBABgBQgBgFABgFAlKg6IAAAAIABgBQANgGADgBQAIgEAIgCQAKgCAJgCQAKgBAKAAQAJAAAKACQAIABAJAAAjghOIAAAA");
	this.shape_54.setTransform(38.5,30.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC97").s().p("ABJC+IgSgDQgKgBgHgDQgCgBjbgOQgXgugZkRIADgCIAOgHQAIgEAJgCIATgDIATgBIATABQAIACAJgBIAEAJIAHAHQAWAFAYgEQANAAAKgGIgDgNIgCgDIAAgDIAQgFQAJgDAJgBIASgCIASgCQAKgBAKABQAJACAGAFQAHAGAEAIQAFAHALgBIANgBIAAAAQAKABAIAEIAEADIAWAFIAGABQAYAFARAPIAZAWQAIAHAEAJIAEANIABAEIAAAAIACAUIgDBUIgLgCIgSgFIgQgGIgBAAIgPgIIgsgdIAAgCIAAgEIAAgFIAAAFIAAAEIAAACIAAADIAAAAQgBBSgFAFQgGAIAAAJIABAHIABACIAEAQQACAIAAAJIAAADQAAAJgCAHQgBAIgEAIIgJAQIgBACIAAAAQgEAGgIABIgLABIgHAAgAh8isIAAAAIAAABg");
	this.shape_55.setTransform(28.6,39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.6,64.6);


(lib.carmen_eat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// main body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AJcmLQgCADgFABQgSAGgOAKQgQALgPAGQgPAHgVgCQgUgBgPgIQgOgJgCgSQgGAGgHAJQgIAOgIANQgKAOgFANQgDgDgCgFQgGgQgMgQQgJgNgPgGQgCAAgDgBQAAAAAAAAQgCAAgBAAQgFACgFADQgDACgDACQgHAGgGAHQgGAHgCAIQgCAKACAJQACAHAEAFQABABABABQAGAGAJADQARAGASAEQAJADAJAEQAIAEAHAFQAOAKAPAHQARAIAPALQAOAKAQAMQAQAMAPAKQAHAFAEAIQAIAQAMgBQAEAAAEgCQAOgIAUgCIABAAIABAAQALgCADgFQAAACAAADQABALACAJQAFASAAATQABATAAAUQAAASACATQACAUgBATQAAAEgBADQAHACAIACQAHACAIAAAJwl6QgLgFgJgMAJwl6QAEABAEABQATADARAEQALADALACQAIgJAHgJAJemOQgBACgBABAHxmaQgCAEgCADQgKAVgUgIQgFgCgFgDQgCACgDACQAAABgBABAHWmhQgBABgBABQgGAKgJAKAJli6QADgFgDgHQgBgCgBgCQgCgFgLgBQgTgCgOgOQgNgNgEgTQgEgTAGgSQAFgSANgOQANgOAOgNQAPgNAOgNAL8l4QAAACABADQAGARAEARQACAFAAAFQABACAAADQABAEABAFQADAMABANQACANgCALQgBAFgCAFQgHAXgOAXQgLAVgLARQgBABAAACQgKAQgCARQAAAJAAAKQAAAUAAATQABAUgBATQAAATgBASQgCATACAUQACAVgGAQQgGAPgMAMQgMALgSAHQgUAHgNgKQgOgLgNgNQgNgNgNgNQgNgNgNgNQgNgNgLgRQgJgOgMgPQgKgOgLgPQgLgOgLgOQgHgJgIgEQgTANgQAKQgPALgSAIQgRAIgOAKQgHAEgGAFQgDABgCACQAAgBAAgBQgBgPgNgLQgNgMgNgLIAAgBIAAAAQAIgCAHgCQAHgCAGgCQAQgFAQgGQAHgCAKgBQgJAJgBAMQAEgCAFgBQAQgEAPgIQAPgJAUABQAIAAAHAEAKylsQgCACgCABQgBABAAABQgEADgEADQgJAJgGAKQgKAOgFASQgGARgCARQgDATAGATQACAHADAFQABADABACQABgBAAgBQANgTAUgRQAKgIALgCQAKgBAFALQANAdgEAjQgCAQgBAQQAAAAAAABQgBAJABALAB/mhQABABAAABAhAijQgBgDgBgDQgFgTgEgTQAAgBAAAAQgEgSgCgTQgBgMAAgNQAAgHABgHQACgUACgTQADgSAEgSQAEgSAIgRQAJgRAPgLQAPgLAQgKQANgJASgFQAGgBAHAAQABAAABAAQALAAALAEQAQAHAQAJQAQAJANAMQABABABABQACACADACQAKAKAIALQAMAOAMAQQAFAHAFAHQABAAAAABQADAFAEAEQAAABABAAQAKAOAKAPQAHAMAFAOQAAABAAABQABADABACQABAEABADQAFAOAHANQAKARAGATQALgHAKABQABAAABABQACgBABgCQALgJALgTQAJgRAGgSQABgBAAgBQABgCAAgBQAAgBAAgCQADgPgHgNABZgOQAAgBAAgBQAAgTAAgTQAAgTAAgSQAAgUgBgTQgBgTgCgTQAAgBAAgBQgDgRgCgSQgCgTgDgSQgEgSgDgSQgDgSAAgRAFWmBQgHgFAHgJQAKgMAMgKQANgMAQgGQAQgHAOgKAFfl8QgGgCgDgDQADgBADgBAFfl8QADgBACACADkkWQgBAAgBAAAF5hZQADgDADgCQAPgLASgJQgcAFgiABQgXABgTgGQAOgLASgDQAFgBAFAAQAZgBAXgHQgbAAgggBQgVAAgTAAQAGgGAHgDQAKgFALgBQACAAADAAQAIgBAJAAQAPgCAPgCQAFAAAFgBQAJgBAKgBQgdAAgfACQgIABgIAAQgPABgRgCQgRgCASgHQAVgJAYgEIABAAQACAAADgBQAWgCAXgCQAHgBAGABQAMACAJAHQAPAMAQAMQANAJAMAKQADACACACQAPgLAPgJQANgJAKgJAEZjQQABAAABAAQABABAAAAQATAGAMgQQAMgRAKARQAKARAJAPAEeg/QgLADgLAEQgDgGgIgGQgDgCgDgBQgPgDgNgIQgEgDAAgEQAAgUgSgMQALgQgRgKQgGgDgEgEQgFgGgEgHQgDgHgIgFQAMADANgJQALgHAEgLQAIAEALAEQAUAHAOgMQACgBACgCAEeg/IAAAAQABAHgBACQgEAOgGAQQgFAPgKAMQgIAKgMAGQgHAFgJADQgFABgFACQgPADgNAFQgQAFgUgBQgQgBgcAAQgBgBAAgBIgBAAQgDgHgCgKQgEgTgHgRQAAASgBASQgBAJAAAIQAAAAAAABQABAKAAAKQABAHAAAHIAAAEQAAARABASQACATAAAUQAAAQgBARQAAADgBADQgBAOAAAPQAAAEAAAFQAAAFAAAFQABAPACAOQAAABABAAQAAACAAABQAEAQAHANQAJARABATQABAIgDAGIAAAAQgCAFgDAEQgCABgBACQgKAJgKALQgNANgNANQgMAMgOAMQgOAMgNAHQgQAJgUgCQgUgCgSgDQgGgBgEgDQgPgKgTAHQgSAGgOgKQgLgJgBgLQgCgVAagBQATAAARgIQARgJAPgLQAPgLAMgOQANgNAKgQQAJgPAHgQQAJgRAHgRQACgEACgFQAFgLAEgMQAAgCABgCQgBgIgDgHQAAgBgBgBQgGgRgDgUQAAgDAAgCQgBgCAAgBQgCgOgEgOQgEgTgGgRQgFgTgEgSQgEgTgDgTQAAgFgBgFAEshDQgDABgDABQgEABgEABAFUgPQAAACAAACQAAAJgEAJQgHARgLAOQgLAPgPALQgQALgQAGQgJAEgLAAIAAAAQgIAAgIgCQgBAAgBgBQhFgLgEgCQgQgHgPgJQgGgEgEgGIAAgBQAAAAgBAAQAAAAAAgBADeBSQAJACAJABAH2iBQAHAHAHAJQAIAKAHAMQAHANAJAKQAEAFAVAcQADADACACQAPALAPAJQAIAEAJAEQAAACgBACAjngcQgEAQgGANQAAAAAAABQgBABgBABQgHASgKAPQgLAPgLAPQAAABgBAAQgLAQgMAMQgMANgQAKQgPALgPALQgPALgPALQgPAKgQALQgQAKgQAKQgNAIgOAOQgOANAEATQAEATADASQAFAVgVAFQgSAGgTgEQgUgEgTABQgTABgRAIQgMAHgPABQgTABgSAGQgSAFgSAEQgRAEgTgBQgVgBgJgRQgKgSAXgGQASgEAVABQATAAAQgHQARgIAOgJQARgKAQgJQAQgKAQgIQARgJAPgJQAOgJALgMQAMgNAHgPQAGgPAIgOQAEgGAEgHQAEgGAEgGQALgQAKgOQAKgPAKgRQAJgQAKgQQAKgQAMgNQAEgEADgCQAJgLAHgKQAKgPAMgOQACgCACgCIAAAAQAJgJAMgLQANgNANgNQAOgOAPgLQAMgIANgHQAEgCAEgCQARgHAUgCQASgCAUABQATABATgDQASgDATgDQATgCATABQAFAPAEAQQAGASAFATQAGATAGAQQABAEABADQAAAEAAADQABADABACQADALACALQAEANACANQgWgBgTgDQgUgDgTgBQgUgCgTgCQgUgDgTgFQgTgFgSgGQgKgDgJgBQgHgBgHAA");
	this.shape.setTransform(78.5,73.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBJIgGgDQgPgDgNgJQgEgCgBgFQAAgTgRgMQAKgRgRgIQgFgDgEgFQgFgFgEgIQgDgHgJgFQANADANgIQAKgIAFgLQAIAFALADQAUAHANgLIAFgDQALgIAKACIACAAIACABIABAAQASAHALgQQAMgRALAQIATAgIAAAGQgYADgVAJQgTAIASACQAQACAPgBIARgCQAfgCAdAAIgTACIgLACIgeADIgQABIgFABQgMABgJAEQgHAEgGAEIAnABIA8AAQgYAHgYABIgKABQgTADgNALQATAGAXgBQAhgBAcgFQgRAKgPAKIgHAFQgKABgHADIgfALIgNAEIgPAEIgBAAIgFABIgHACIgXAIQgCgHgIgFg");
	this.shape_1.setTransform(107.5,59);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFF97").s().p("AgBgBIADABIgCACIgBgDg");
	this.shape_2.setTransform(143.4,51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Ah8DxIgSgDIASADQgIAAgJgDIgBAAIgigKQgRgHgUgEQgSgDgKgLQgEgDgMgCIAAgBIgBAAQAcgBAQABQAVACAQgGIAbgIIALgDIAQgHQAMgGAHgLQALgMAFgPIAKgfQABgCgBgGIAAgBIAIgCIAFgBIABAAIAaAYQANAKABAPIAAACIAAAEQAAAKgEAKQgIAQgKAPQgLAPgPALQgQAKgRAHQgJAEgKAAgACqgbQgFgHgHgFIgegWIgegWQgQgMgRgHQgPgIgNgJQgHgGgJgEQgIgEgKgCIgigKQgJgDgFgHIgCgCQgEgFgCgGQgDgKADgJQACgIAGgIQAGgHAHgFIAGgEIAKgFIACgBIABAAIAFACQAOAGAJANQAMAQAGAPIAEAIQAGgMAKgPIAQgaQAGgKAHgGQABATAPAIQAPAJAUABQAVABAPgGQAPgHAPgLQAOgKATgFQAEgCADgDQAIANAMAEQgOAOgPANIgcAaQgMAPgGARQgFATAEATQADASANANQAPAPATABQAKABADAGIABADQADAIgDAEQgDAFgKACIgBAAIgBAAQgUADgOAHQgFADgDAAIgBAAQgLAAgIgQg");
	this.shape_3.setTransform(115.1,57.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("AgDHLIgmgFQgGgBgEgDQgPgKgTAHQgSAGgOgKQgLgJgBgLQgCgVAagBQATAAARgIQARgJAPgLQAPgLAMgOQAMgNAKgQIARgfQAJgRAHgRIAEgJIAJgXIABgEIgEgPIgBgCQgGgRgDgUIAAgFIgBgDIgGgcQgEgTgGgRQgGgTgEgSIgHgmIgBgKIgGgaIgEgWIgCgFIAAAAIAAgHIgCgHIgMgjIgLglIgJgfIAJAfIALAlIAMAjIACAHIAAAHIAAAAIACAFIAEAWIAGAaQgVgBgTgDIgngEIgngEQgUgDgTgFIglgLQgKgDgJgBIgOgBIAOABQgEAQgGANIAAABIgCACQgHASgKAPIgWAeIgBABQgLAQgMAMQgMANgQAKIgeAWIgeAWIgfAVIggAUQgNAIgOAOQgOANAEATIAHAlQAFAVgVAFQgSAGgTgEQgUgEgTABQgTABgRAIQgMAHgPABQgTABgSAGQgSAFgSAEQgRAEgTgBQgVgBgJgRQgKgSAXgGQASgEAVABQATAAAQgHQARgIAOgJIAhgTIAggSIAggSQAOgJALgMQAMgNAHgPIAOgdIAIgNIAIgMIAVgeIAUggIATggQAKgQAMgNIAHgGIAQgVQAKgPAMgOIAEgEIAAAAIAVgUIAagaQAOgOAPgLQAMgIANgHIAIgEQARgHAUgCQASgCAUABQATABATgDIAlgGQATgCATABIgCgGQgFgTgEgTIAAgBQgEgSgCgTIgBgZIABgOIAEgnIAHgkQAEgSAIgRQAJgRAPgLIAegVQAOgJASgFIANgBIACAAQALAAALAEQAQAHAQAJQAQAJANAMIACACIAFAEIASAVIAYAeIAKAOIABABIAHAJIABABIAUAdQAHAMAFAOIAAACIACAFIACAHQAFAOAHANQAKARAGATIgEADQgOAMgUgHQgLgEgIgEQgEALgLAHQgNAJgMgDQAIAFADAHQAEAHAFAGQAFAEAFADQARAKgLAQQASAMAAAUQAAAEAEADQANAIAPADIAGADQAIAGADAGIAWgHIAAAAQABAHgBACIgKAeQgFAPgKAMQgIAKgMAGIgQAIIgKADIgcAIQgQAFgUgBQgQgBgcAAIgBgCIgBAAQgDgHgCgKQgEgTgHgRIAAgCIAAgmIAAglIgBgnIgDgmIAAgCIgFgjQgCgTgDgSIgHgkQgDgSAAgRQAAARADASIAHAkQADASACATIAFAjIAAACIADAmIABAnIAAAlIAAAmIAAACIgBAkIgBARIAAABIABAUIABAOIAAAEIABAjQACATAAAUIgBAhIgBAGQgBAOAAAPIAAAJIAAAKQABAPACAOIABABIAAADQAEAQAHANQAJARABATQABAIgDAGIAAAAQgCAFgDAEIgDADIgUAUIgaAaQgMAMgOAMQgOAMgNAHQgOAHgQAAIgGAAgAKbB2QgOgLgNgNIgagaIgagaQgNgNgLgRIgVgdIgVgdIgWgcQgHgJgIgEQgHgEgIAAIgBAAIgBAAIAAAAIgBAAQgRAAgPAIIAAAAQgPAIgQAEIgJADQABgMAJgJIAGgFQAPgLASgJQgcAFgiABQgXABgTgGQAOgLASgDIAKgBQAZgBAXgHIg7gBIgoAAQAGgGAHgDQAKgFALgBIAFAAIARgBIAegEIAKgBIATgCQgdAAgfACIgQABQgPABgRgCQgRgCASgHQAWgJAXgEIAAgFIgTggQgKgRgMARQgMAQgTgGIAAgEQALgJALgTQAJgRAGgSIABgCIAJgHIgIABQADgPgHgNQAGAGAJADIAjAKQAJADAJAEQAIAEAHAFQAOAKAPAHQARAIAPALIAeAWIAfAWQAHAFAEAIQAJAQALgBQgKAJgNAJIgeAUQAHAHAHAJIAPAWQAHANAJAKIAZAhIAFAFQAPALAPAJIARAIIgBAEIABgEIAPAEIACABIAKABIAAAAIAAAAIACAAIABAAIgBAAIgCAAIAAAAIAAAAIgKgBIgCgBIgPgEIABgHQABgTgCgUQgCgTAAgSIgBgnQAAgTgFgSQgCgJgBgLIAAgFQADgFgDgHIgCgEQgCgFgLgBQgTgCgOgOQgNgNgEgTQgEgTAGgSQAFgSANgOIAbgbQAPgNAOgNIAIACQATADARAEIAWAFIgEADIgBACIgIAGQgJAJgGAKQgKAOgFASQgGARgCARQgDATAGATIAFAMIACAFIABgCQANgTAUgRQAKgIALgCQAKgBAFALQANAdgEAjIgDAgIAAABQgBAJABALIAAATIAAAnIAAAnIgBAlQgCATACAUQACAVgGAQQgGAPgMAMQgMALgSAHQgIADgHAAQgKAAgIgGgAHAi5QAMACAJAHQAPAMAQAMIAZATIAFAEIgFgEIgZgTQgQgMgPgMQgJgHgMgCIgHAAIAAAAIgBAAIgCAAIAAAAIgDAAIgtAEIgFABIgBAAIABAAIAFgBIAtgEIADAAIAAAAIACAAIABAAIAAAAIAHAAgAFigrIgagXIAAgBIAPgEIANgEIAggLQAHgCAKgBQgJAJgBAMIAJgDQAQgEAPgIIAAAAQAPgIARAAIABAAIAAAAIABAAIABAAQAIAAAHAEIgjAXQgPALgSAIQgRAIgOAKIgNAJIgFABQgBgPgNgLgAjLgcIAAAAgAGVhZIAAAAgAIOlhQgUgBgPgIQgOgJgCgSIABgCIAFgEIAKAFQAUAIAKgVIAEgHIAAAAQAWAKAbAFQAdgBAfgCIgCADQgCADgFABQgSAGgOAKQgQALgPAGQgMAGgQAAIgIgBg");
	this.shape_4.setTransform(75.7,73.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC97").s().p("ABpDHIAEgBIgEADIAAgCgABACVIAAAAIAAABgAAwAIIgCAAIADgDIAAAEIgBgBgAgIg9IgBgCIADACIgCAAgAhsjIIABAAIABACIgCgCg");
	this.shape_5.setTransform(102.1,51.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#993300").s().p("ACjCNIAAgBIADggQAEgigNgeQgFgLgKACQgLABgKAIQgUARgNATIgDgDIgFgMQgGgSADgTQACgRAGgRQAFgRAKgPQAGgKAJgJIAIgGIABgBIAEgEIAPgRIgPARIgWgEQgRgFgTgDIgIgCQgLgFgJgMIACgDIADAAQApAFAsAKIALACQAeAFAdAAIABAFQAGASAEAQIACAKIABAFIACAKIAEAXQACANgCALIgDAKQgHAYgOAXIgWAlIgBADQgKAQgCARQgBgKABgKgAijggQgGgPgMgQQgJgNgPgGQgCgDgDABQgGgCgDgCIAGgDIgGADQgHgGAHgIQAKgMAMgLQANgMAQgGQAQgGAOgLIACACQAIAEAEAGQACACgCAEQAHAGAIADIALAHIAHAFIADABQAFAAADAEIAQACIgEAIQgKAVgUgJIgKgFQAJgKAGgJIACgDIgCADQgGAJgJAKIgFAFIgBABQgGAGgHAKIgQAaQgKAPgFAMIgFgIg");
	this.shape_6.setTransform(134.7,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(45));

	// moving arm
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AgGASQgDgIgCgHQgEgQgGgPQAHAbAIATgAgVgcQgBgCgBgDQgIgRgHgRQgIgSgHgQQgGgQgJgSQgDAAgEgBQgGgBgHgBQgSgDgQgGQgBgIgEgGQgCgCgBgBQgEgCgEAAQgGgBgGAAQgOAAgOACIAAAAQgLACgKAFQgRAJgRgLQgQgKAGgMQABgDACgCQABgBABgCQADgCACgDQAJgNgQgTQgPAAACAYQAAAIgCAGQgDAFgGADQgPAHAAAVQAAAHACAHIAAAAQgPAPALATQAIAPAOAOQANANAPAMQANAKAUgEQASgEATgEQABAAABAAQAQgDASgGQASgGAJAJQAEAEAAAHQAAAQADAPQAZA/AEALQALAfAKAjQALAjAXAYQAUAXAmALQAhAJAoABQAFAAAFAAQAJAAAJAAQACABADAAQAWAAAXABQApACAXgaQAagegHgfQgDgNgUAGQgYAHghACQgIAAgHgBQgUAAgJAAQgZAChFAHQgDAAgCgBQgFgBgFgCQgHgDgFgIQgTgfgJgfQgCgIgKgdQgCgJgEgMAh6iTQAAAEAAAFQAAATgNAPQgMAPgTAEQgRAEgUgEQgTgDgQgJQgRgJgLgNQgIgIgDgMIAAAAAiyilQAAgRgYgGQgTgEgTAF");
	this.shape_7.setTransform(89.8,22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgCBGQgTgDgQgJQgRgJgLgNQgHgIgEgLIAAgBQgBgGgBgIQAAgUAPgHQAGgCADgGQACgGAAgIQgCgYAPAAQAQATgJANIgFAFIgCADIgDAFIgCAGQAAAJAMAHIABABQAJAEAJAAIAAAAIAAAAQAHAAAGgCIABgBQAKgFALgCIAAAAQAOgCAOAAIAMABIAIACIADADQAEAFABAJIAAAIQAAATgNAPQgMAPgTAEQgIACgKAAQgJAAgJgCgAgNABQgJAAgJgEIgBgBQgMgHAAgJIACgGIADgFQATgFATAEQAXAGAAARQgLACgKAFIgBABQgGACgHAAIAAAAIAAAAgAgngfIAAAAg");
	this.shape_8.setTransform(69.7,7.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC97").s().p("AAAAAIAAAAIAAAAg");
	this.shape_9.setTransform(62,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC66").s().p("ADKC8IgtgCIgFAAIgSAAIgKgBQgogBghgJQgmgLgUgWQgXgYgLgkQgKgigLgfIgdhKQgDgPAAgRQAAgGgEgEQgJgJgSAGQgSAFgQADIgCABIglAHQgUAFgNgLIgcgZQgOgNgIgQQgLgSAPgPIAAAAQADALAIAJQALANARAJQAQAJATADQAUADARgDQATgFAMgOQANgQAAgTIAAgIQAQAGASADIANACIAHABQAJARAGARIAPAiIAPAiIACAFQAHAbAIAUIAGAVIAMAjQAJAfATAfQAFAJAHACIAKAEIAFABQBFgIAZgBIAdAAIAPABQAggCAZgHQAUgHADANQAHAfgaAeQgWAZglAAIgFAAgACHC6IgBAAIAAAAIASAAIgFAAIgMAAgAgGgVIAAAAgAgVhEQAGAPAEAQIAFAQQgIgUgHgbg");
	this.shape_10.setTransform(89.8,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.1,1,1).p("ACfiqIAAAAQgCgVgVgDQgSgEgTACQgSADgTADQgQAEgJATQgJAQgIARQgBABgBABQgGAMgGAPQAAAFgEADQgOANgCACQgEADgDADQhJA/gUAQQgZAWgaAYQgdAbgJAdQgLAjAiAXQAcAUAeAHQAKACALACQAIACAIABQAfAAAbgKQAigMAfgWQAggWAVgXQAagbgLgnQgGgagYAAQglACgZAQQgbASgeASQgQAKgQALQgBgfASgXQATgZAwg4QAYgbAKgJQAAgBAAgBQgEgTAIgRQAIgQAQgNQAOgMARgHQARgIASAAQALgBALAFgAArhQQABAEABADQABAEACADQAFAJAIAHQADADADACQAHAEAIABQACAAADAAQADgCADgDQAEgEAEgFQAJgLAHgMIAAAAQAGgKACgLQADgSAUgHQASgGAFAMQABADABADQAAACABACQAAADABADQAEAPAZABQAKgMgUgOQgHgFgCgGQgDgFACgHQAEgQgRgMQgGgFgGgDAB1hNQANALAUgPQAPgMAIgSAAGhpQgBACgBACQgBACgBACAgOhSIAAAAQgBAAAAAA");
	this.shape_11.setTransform(118.2,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("ACwBDQgHAAgHgFIgHgFQgIgHgFgJIgCgGIgDgIIAAgCQgEgSAIgRQAJgPAPgOQAOgMARgHQASgHARgBQALAAALAEIAAAAQAHADAGAFQAQANgEAQQgCAGADAGQACAFAHAFQAUANgKAMQgZAAgEgQIgBgGIgBgDQgIARgPAMQgTAPgOgLQAGgJACgMQAEgRATgHIABAAIAJgCIABAAIAAAAQAIABAEAHIABABIABAFIgBgFIgBgBQgEgHgIgBIAAAAIgBAAIgJACIgBAAQgTAHgEARQgCAMgGAJIAAABQgHALgIALIgJAJIgGAFIgFAAIAAAAgAkhAbIABgBIAAAAIgMAOIALgNg");
	this.shape_12.setTransform(108.8,19.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC66").s().p("AhNDCIgVgEQgegHgcgUQgigXALgjQAJgdAdgbIAzguIBchPIAHgGIARgPQAEgDAAgFQAGgPAGgMIACgCIARghQAJgTAQgEIAlgGQAUgCARAEQAVADACAVIAAAAIAAAAQgLgFgLABQgRAAgSAIQgRAHgOAMQgPANgJAQQgIARAEATIAAACQgKAJgYAbQgwA4gTAZQgSAXABAfIAggVIA5gkQAZgQAlgCQAYAAAGAaQALAngaAbQgVAXggAWQgfAWgiAMQgbAKgfAAIgQgDgAAIhSIABAAIAAAAIgHAGIAGgGg");
	this.shape_13.setTransform(115.8,30.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.1,1,1).p("AgGASQgDgIgCgHQgEgQgGgPAgGASQgIgTgHgbQgBgCgBgDQgIgRgHgRQgIgSgHgQQgGgQgJgSQgDAAgEgBQgGgBgHgBQgSgDgQgGQgBgIgEgGQgCgCgBgBQgEgCgEAAQgGgBgGAAQgOAAgOACIAAAAQgLACgKAFQgRAJgRgLQgQgKAGgMQABgDACgCQABgBABgCQADgCACgDQAJgNgQgTQgPAAACAYQAAAIgCAGQgDAFgGADQgPAHAAAVQAAAHACAHIAAAAQgPAPALATQAIAPAOAOQANANAPAMQANAKAUgEQASgEATgEQABAAABAAQAQgDASgGQASgGAJAJQAEAEAAAHQAAAQADAPQAZA/AEALQALAfAKAjQALAjAXAYQAUAXAmALQAhAJAoABQAFAAAFAAQAJAAAJAAQACABADAAQAWAAAXABQApACAXgaQAagegHgfQgDgNgUAGQgYAHghACQgIAAgHgBQgUAAgJAAQgZAChFAHQgDAAgCgBQgFgBgFgCQgHgDgFgIQgTgfgJgfQgCgIgKgdQgCgJgEgMgAh6iTQAAAEAAAFQAAATgNAPQgMAPgTAEQgRAEgUgEQgTgDgQgJQgRgJgLgNQgIgIgDgMIAAAAAiyilQAAgRgYgGQgTgEgTAF");
	this.shape_14.setTransform(89.8,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},9).to({state:[{t:this.shape_10},{t:this.shape_8},{t:this.shape_9},{t:this.shape_14}]},10).wait(26));

	// head
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("ADag8IAAAAQgBgCAAgCQgCAEADAAgADZhAQgGgNgLgLQgMgNgRgIQgDgBgEgCIAAAAQgNgFgOgEQgQgEgTgFQgSgGgUAAQgUgBgOAJQgPAJgNALQAEACAEABQAIgDAIgCQACAAADAAQARABARACQASACAIAOQAKARgSAOQgPALgOAIQgMAHgKAKQgCACgDADQgJALgDAQQgDAUAPANQALAKAMANQAFAGAEAGQABABAAAAQgMANgPAIQgPAJgSADQgSACgTgCQgBAAAAAAQgTgBgSgFQgSgFgRgHQgSgGgPgKQAAAAgBAAQgDgCgDgDQgLgIgEgLQgHgRAHgSQAGgRAKgNQAEgFAEgFQAIgIAJgGQALgIAJgGQABAAABgBQAEgOAPgIQABgBABgBQALgEALgCQAIgBAHAAQAFAAAEACQAQgNARgHQAGgCAGgCAB2B9QACgHAGgHQALgOAMgNQALgMAOgNQAPgNAJgNQABgBABgCQAJgNAGgRQAIgQgBgSQAAgPgEgLAjeA5QABAAABgBQAPgMAIgOQAHgLAEgLQADgFACgFQAGgRgFgTQgEgLAGgKQAIgMATgGIAAAAQASgGASgGQAKgDAIgCQASgFARgGQARgGAUAAQAEAAADAAQAEAAADABQAHABAGABAgmgeIgBAAQgMATARAGQASAGASgGQAOgGAKgJQADgDACgCQANgQgLgQQgHgKgPAAQgEAAgGABQgFACgGADQAKgDAIACQAHADAEAIQADAHgFAFQgNAMgUgCQgLgBgLAAgAhmgyQAAAAgBABQATAJARgDQACgBABAAQASgFAKgMQAFgGAEgGQgDgGgFgCAgaguQgBACgBABQgGAGgEAHAgRg6QgCABgBABQgEAEgCAGQACgEADgDQACgDACgCgAhmgyQAAgBAAgBAg7hSQAOATgXAKQgUAJgOgGAgwAXQAUAFgZAQQgNAJgQgEQgQgFgHgRQgEgNgIgNQAQAHARAFQATAFARAFgAgnB0QABgDABgDAiWBHQgHADgEAFQgHAHgHAKAiQBMQAAAAAAAAQAAAPgEAMAB2CJQgBgGABgGQgBACgCACQgDADgBACAA8BNQAFAIADAJQAHARgMAQQgCADgCACAgKg9QgEABgDAC");
	this.shape_15.setTransform(143.1,21.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAZAaIgXgBQAFgHAGgGIABgDIAFgHIAFgEIAGgDQAMgDAHACQAIADAEAHQADAHgFAFQgMALgRAAIgFgBgAg9AFIABgCQADgNAQgIIACgCQALgEALgCQAOATgXAJQgMAGgKAAQgHAAgGgDg");
	this.shape_16.setTransform(138.9,16.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgqBCQgQgFgHgRQgEgNgIgNQAQAHARAFIAkAKQATAFgYAQQgJAGgKAAIgKgBgAAFALQgQgGALgSIABAAIAWABQAVACANgMQAFgFgDgHQgEgIgHgDIADgFQAPAAAHAKQALAQgNAQIgFAFQgKAIgOAGQgKADgJAAQgJAAgJgDgAg/ggIABgBQAOAGAUgJQAXgKgOgTIAPgBQAEAAAEACQAFACADAGIgJAMQgJAMgSAFIgDABIgJABQgNAAgOgHg");
	this.shape_17.setTransform(139.1,20);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC66").s().p("AhvBkIAAAAQAEgNAAgOIACAAQAPAJASAHQARAGARAFQASAFATACIABAAIgCAFQgfACgcABQgcgFgWgKgAAABrIgBAAQgTgCgSgFQgRgFgRgGQgSgHgPgJIgCgBIgGgEQgLgIgEgLQgGgRAGgTQAGgPALgPIAHgJQAIgJAKgGIAUgNIABABQASAJASgDIADgBQARgEAKgNIAIgMQgCgGgGgCQAQgNASgGIAMgFIAQgFIAFAAQASABAQACQATADAIANQAKARgTAOQgPAMgNAHQgNAHgKAKIgBgBQAOgPgLgQQgIgLgPABIgJABQgHABgGADIgHAEIgDACQgEADgCAGIgCAEQgGAFgDAIIAAAAQgNASARAHQASAGASgHQAOgFALgKIABABQgKALgCAQQgEAUAPANQALAKAMAOIAJAMIABAAQgMANgOAJQgPAJgTACIgWABIgPAAgAhDAXQAGARARAFQAPAEAOgIQAXgQgSgGIgkgKQgSgFgQgFQAIAMAFAMgAAABrIAAAAg");
	this.shape_18.setTransform(139.4,22);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC97").s().p("AhXBBIAAgBIABABgABTggIAEgFIACABIgFAFgAgvg+IACgCIgBACIAAABg");
	this.shape_19.setTransform(137.5,22.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#993300").s().p("AA7CEIAEgFQAIgKAAgKQAAgHgDgGQgDgJgFgIQAFAIADAJQADAGAAAHQAAAKgIAKIgEAFIgLgCQgsgKgogFIgDABIACgGQATACASgCQASgDAPgJQAPgIAMgNIgBgBIgJgMQgMgNgLgKQgPgNADgUQADgQAJgLIAFgFQAKgKAMgHQAOgIAPgLQASgOgKgRQgIgOgSgCQgRgCgRgBIgFAAIgQAFIgIgDQANgLAPgJQAOgJAUABQAUAAASAGIAjAJQAOAEANAFIAAAAIAHADQARAIAMANQALALAGANQgBABAAABQAAABAAAAQABABAAAAQABAAAAAAQAEALAAAPQABASgIAQQgGARgJANIgCADQgJANgPANIgZAZIgXAbQgGAHgCAHIgDAEIgEAFIAEgFIADgEQgBAGABAGIgCAAQgcAAgdgFgAikBlQgDgEgFAAIgDgBQAHgKAHgHQAEgFAHgDQgHADgEAFQgHAHgHAKIgHgFIgLgHQgIgDgHgGQACgEgCgCQgEgGgIgEIgCgCIACgBQAPgMAIgOIALgWIAFgKQAGgRgFgTQgEgLAGgKQAIgMATgGIAAAAIAkgMIASgFIAjgLQARgGAUAAIAHAAIAHABIANACIAIADIgMAEQgRAHgQANQgEgCgFAAIgPABQgLACgLAEIgCACQgPAIgEAOIgCABIgUAOQgJAGgIAIIgIAKQgKANgGARQgHASAHARQAEALALAIIAGAFIAAAAQAAAPgEAMgAAKhpIAAAAg");
	this.shape_20.setTransform(143.1,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,167.4,121.1);


(lib.AskYourself = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0099").s().p("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");
	this.shape.setTransform(202.6,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE00A4").s().p("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");
	this.shape_1.setTransform(202.5,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DD00B0").s().p("A4UDRIgCgSQAAgPALgGQAPgHApABQBjgBAAAdQABAQgIAEQgZANhnAAQgXAAgGgQgA/lDUQgFgEAAgGIADgFQAUgbBBAAQBFAAAIAGQAHARAAAEIACAIQAAAFgFAEQgQALhBAAQhDAAgQgNgAGoDUQgGgPAAgFQgCgEAAgDQgBgFAHgEQASgLBSAAQBZAAAIAGQAHARAAAEQACANgGADQgSALhSAAQhbAAgHgHgAxPDOQgFgEABgFIABgFQASgbAzAAQA9AAAFACQgCAJABAEIADAMQAAANgEADQgNALgzAAQg2AAgMgNgA0sDOQgEgEABgFIABgFQASgbA1AAQBVAAgOAbQAAANgFADQgNALg1AAQg3AAgOgNgA70DOQgFgEABgFIACgFQARgbA5AAQBFAAAFACQgDAJABAEIADAMQAAANgEADQgOALg5AAQg7AAgNgNgAKhDFQgGgDAAgGIABgHQAOghAJAAQCFAAAeAQQAPAHgLAKQABANgFADQgRALhKAAQhJAAgRgLgAuQDDQgGgEABgFIACgFQAVgbBHAAQBIAAAQAMQAFAEAAAFQgCAIABAFQAAAGgFADQgRALhGAAQhJAAgQgNgAR1C+QgEgEABgGIABgFQASgbA7AAQA8AAAOANQAEAMgBACQAAAOgEADQgOALg7AAQg+AAgNgNgAYtC5QgEgFAAgFIACgFQAQgbAzAAQA0AAANANQAHAHgEAHQAAANgEADQgNALgzAAQg1AAgMgMgAVCC/QgGgOAAgHQgCgEAAgDQgBgFAHgEQARgLBJAAQBRAAAHAHQAHARAAADQACANgGADQgRALhKAAQhRAAgHgGgAOVC5QgEgFABgFIABgFQATgbBAAAQBAAAAQANQAIAHgFAHIABAHQAAAGgFADQgPALhAAAQhCAAgPgMgAbWCuQgEgFABgFIACgFQASgbA3AAQA5AAANANQADAcgEADQgNAKg4AAQg7AAgNgMgAeZC1QADgKgBgFQgCABAAgNQAAgNAEgDQANgLAxAAQAyAAANANQACAbgEADQgMALgxAAIhCAAgEggYABDQgHhLAbAAQAbAAgGBLQAGBMgbAAQgbAAAHhMgAfrAgIgBgpIABguQADgiAQAAQAaAAgHBPIAAAtQgDAmgQAAQgQAAgDgpgEggQgBfQgCgSACgOQADgbARAAQAbAAgGA7IAAAhQgEAbgRAAQgcAAAIg8gA+8iIQgKgFAAgOQAAgfAtAAICnAIQAMAPAAAIIgMAZIhUgEQhPgCgDAIQgZgCgLgGgA6ziVIgBgRQAAgfAUAAQAigFA6AAQBLAAARAMIAGAXQABAHgKAEQgfAMiEAAQgGALgMAAQgPAAgEgQgALRihQgGgEABgGQAAgCACgDQAWgaBMAAQBSAAALAHIAEAIIACALQADANgHAEQgSALhNAAQhOAAgRgNgAH2icQgEgDgCgFIgBgMQgCgEAAgCQAAgGAGgDQARgLBLAAQBMAAASAMQACAQACAGQgVAUhNAAQhSAAgHgIgArkiUQhJAAgKgIQgDgCgCgEIgCgGIgBgHIAAgCQgCgDABgCQgBgFAFgDQASgMBHAAIAcAAQAwACAPAKQAEAPAAACIABAGQAAAEgFAEIgBAAQgOAIgvACIgbABIgDAAgAwGiUQh9AAgbgNQgJgEACgGIADgDQgBgLABgCQACgDAHgCQAdgKB1AAIBwADQAiACAEACIAFAIIADAJIABADIABADIABAFQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgCADgFABQgMAFgeACQglAEhEAAIgEAAgA2ricQgEgDgCgFIgBgMIgDgGQAAgGAHgDQAUgLBaAAQBbAAAUAMQADAQACAGQgaAUhaAAQhkAAgHgIgAeEimQgDgEAAgFIABgFQARgcAvAAQA4AAAFADQADALAAAOQAAAMgEADQgNALgvAAQgyAAgMgMgAPEiiQgDgDgCgEQgCgGABgFIgBgIQAAgFAFgEQAPgLA/AAQBBAAAQANIAEAVQgVAUhAAAQhFAAgHgIgASjisQgGgEABgFQABgCACgDQAYgbBaAAIBrAHQADAEABAEQADAJAAADIACAHQABAFgHAEQgUALhaAAQhcAAgUgNgAaoixQgEgEABgFIACgFQASgbA8AAQA+AAAPANQAHAGgEAIQgBAMgDADQgPALg9AAQg+AAgPgMgAXci3QgFgEABgFIABgFQATgbA7AAQA7AAAPANQAHAHgEAHQACANgFADQgOALg8AAQg9AAgOgNg");
	this.shape_2.setTransform(202.5,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC00BB").s().p("A39DRIgDgSQAAgPAMgGQAPgHArABQBogBAAAdQABAQgJAEQgaANhrAAQgYAAgGgQgA/jDUQgFgEABgGIACgFQAVgbBEAAQBIAAAJAGQAHARAAAEIABAIQAAAFgFAEQgQALhEAAQhGAAgRgNgAFIDUQgHgPAAgFIgCgHQAAgFAHgEQATgLBWAAQBeAAAJAGQAIARAAAEQACANgHADQgTALhXAAQhfAAgIgHgAwlDOQgEgEABgFIABgFQASgbA1AAQBAAAAFACQgCAJABAEIAEAMQAAANgFADQgNALg2AAQg4AAgNgNgA0LDOQgEgEAAgFIACgFQATgbA3AAQBZAAgQAbQAAANgEADQgOALg3AAQg6AAgOgNgA7nDOQgFgEABgFIABgFQATgbA7AAQBIAAAFACQgDAJABAEIADAMQAAANgEADQgPALg7AAQg9AAgOgNgAJPDFQgGgDAAgGIABgHQAPghAKAAQCMAAAgAQQAQAHgMAKQACANgGADQgSALhPAAQhNAAgSgLgAtdDDQgGgEABgFIACgFQAWgbBKAAQBLAAARAMQAFAEAAAFQgDAIACAFQAAAGgGADQgRALhJAAQhMAAgRgNgAQ+C+QgEgEABgGIACgFQATgbA+AAQBAAAAPANQAEAMgBACQAAAOgEADQgPALg/AAQhBAAgPgNgAYQC5QgEgFAAgFIACgFQARgbA2AAQA3AAAOANQAHAHgEAHQAAANgEADQgOALg2AAQg4AAgNgMgAUYC/QgHgOAAgHIgCgHQAAgFAGgEQASgLBOAAQBVAAAIAHQAHARAAADQACANgGADQgSALhOAAQhWAAgHgGgANSC5QgFgFABgFIACgFQAUgbBDAAQBFAAAQANQAIAHgFAHIABAHQAAAGgFADQgQALhEAAQhGAAgPgMgAbDCuQgEgFABgFIACgFQATgbA6AAQA8AAAPANQACAcgEADQgOAKg7AAQg+AAgOgMgAeSC1QADgKgBgFQgCABAAgNQAAgNAEgDQANgLA0AAQA2AAANANQACAbgEADQgNALg0AAIhFAAgEggYABDQgIhLAdAAQAcAAgGBLQAGBMgcAAQgdAAAIhMgAfoAgIgBgpIABguQADgiARAAQAbAAgHBPIAAAtQgDAmgRAAQgRAAgDgpgEggQgBfQgCgSACgOQADgbATAAQAbAAgGA7IAAAhQgEAbgRAAQgdAAAHg8gA+3iIQgMgFABgOQgBgfAwAAICtAIQAOAPAAAIIgOAZIhWgEQhTgCgEAIQgZgCgLgGgA6jiVIgBgRQgBgfAWAAQAjgFA8AAQBPAAASAMIAGAXQABAHgLAEQggAMiKAAQgFALgNAAQgQAAgEgQgAKCihQgGgEABgGQAAgCADgDQAWgaBRAAQBXAAALAHIAEAIQADAIAAADQACANgGAEQgTALhSAAQhSAAgTgNgAGaicQgEgDgCgFIgBgMIgCgGQAAgGAGgDQATgLBPAAQBQAAATAMIAFAWQgXAUhRAAQhXAAgIgIgAqpiUQhLAAgMgHQgDgDgCgDIgDgGIgBgIIAAgCIgBgFQAAgFAFgEQATgLBJAAIAeAAQAyACAPAKQAFAPgBACIACAFQgBAFgFAEIgBAAQgOAIgxACIgcABIgDAAgAvZiUQiCAAgcgNQgJgEACgGIADgDQAAgMABgBQADgDAGgCQAggKB4AAIB0ADQAkACAEABIAFAJIADAKIABADIACACIAAAGQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBABIgHAEQgNAEgeACQgoAEhFAAIgFAAgA2QicQgEgDgCgFQgCgGAAgGIgCgGQAAgGAHgDQAVgLBdAAQBgAAAVAMQACAQADAGQgbAUhfAAQhnAAgIgIgAd7imQgEgEABgFIABgFQASgcAyAAQA7AAAGADQACALAAAOQAAAMgEADQgNALgyAAQg1AAgNgMgAODiiQgDgDgBgEQgDgGABgFIgBgIQAAgFAFgEQAQgLBDAAQBEAAARANIAEAVQgWAUhDAAQhJAAgIgIgARvisQgGgEABgFIADgFQAagbBfAAIBxAHQADAEABAEQAEAJAAADIACAHQABAFgIAEQgVALhfAAQhiAAgVgNgAaTixQgFgEABgFIACgFQATgbBAAAQBBAAAQANQAIAGgFAIQAAAMgEADQgQALhAAAQhCAAgPgMgAW6i3QgEgEAAgFIACgFQATgbA/AAQA/AAAPANQAIAHgFAHQACANgFADQgPALg/AAQhAAAgQgNg");
	this.shape_3.setTransform(202.5,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB00C6").s().p("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");
	this.shape_4.setTransform(202.5,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA00D2").s().p("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");
	this.shape_5.setTransform(202.4,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9900DD").s().p("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");
	this.shape_6.setTransform(202.4,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8800E8").s().p("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");
	this.shape_7.setTransform(202.4,17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7700F4").s().p("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");
	this.shape_8.setTransform(202.4,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6600FF").s().p("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");
	this.shape_9.setTransform(202.6,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6600FF").s().p("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");
	this.shape_10.setTransform(202.3,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6600FF").s().p("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");
	this.shape_11.setTransform(202.2,18.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6600FF").s().p("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");
	this.shape_12.setTransform(202,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:202.6,y:17.7}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_9,p:{scaleX:1.076,scaleY:1.221,x:202.1,y:19.3}}]},1).wait(7));

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AANAhQgDgCAAgEIABgrIACgMQACgGAHAAQADAAAEACQACADAAAEIAAAFIAAAEIgBAqQgBAKgJAAQgFAAgCgDgAgeARIAAgVIAAgVQABgEACgDQADgDAEAAQAEAAAEADQACADAAAEIgBAUIAAAVIABAFIAAAFQAAAEgCADQgEACgEABQgKAAAAgTg");
	this.shape_13.setTransform(388.7,14.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdBRQgDgDAAgFQAAgHADgFQAFgGAGAAQAKAAAAANQAAAGgDAEQgDAGgGAAQgEAAgFgDgAgWAnQgDgDAAgEQAAgIAOgLIAZgSQAOgMAAgKQAAgNgMgLQgMgKgLAAQgHAAgKAHQgLAHgDAAQgEAAgDgDQgDgEgBgEQAAgJARgJQAPgHAKAAQAVAAARARQATARgBAWQAAAPgKAMQgGAHgQAMQgRAMgGAHQgEAFgEAAQgEAAgEgEg");
	this.shape_14.setTransform(378.2,20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBQQgDgDAAgFIABgFIAAgFIAAgQIgBgQQAAgQgDgbIgDgrIgKAAQgXAAgOgEQgJgCAAgIQAAgFADgDQADgEAGAAIARACIARACIAUgBIASAAIAZABIAaABQAEAAADAEQADADAAAFQAAAEgDAEQgDADgEAAIgagCIgYgBIgIAAIADAxQACAeAAASIABALIABAMQAAAHgCAFQgDAIgHAAQgDAAgEgDg");
	this.shape_15.setTransform(366.2,19.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAmA4QgDgKgEgYIgdAFIgcAGIgSAqQgEAGgGAAQgEAAgEgDQgDgEAAgEQAAgFAQgiQgBgEAAgDQAAgJAKgCQANgXASgdQAZgqAGAAQAJAAADAMIAHAlIAQBKIAGARIADAMQAAAFgDACQgDAEgFAAQgKAAgHgagAgNAIIAngIIgJgpg");
	this.shape_16.setTransform(349.4,20.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhDBWQgDgDAAgFIACgiIACgjIgBgRIAAgSIABgZIABgaQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFIgBAaIgCAaIABAaIAugIQAbgFAUAAIABgvQAAgIACgIQAEgMAHAAQAEAAADADQADADAAAEIgBAFQgBAEAAAJIAAAKIAAAKIgCAgIgCAfIABAZIACAZQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgZIgCgZIABgQQgTAAgaAGIguAJIgBAbIgCAcQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_17.setTransform(333,19.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAYBVQgEgDAAgFQgFgNgBgIIgJgvQgFgcgBgSQgKAkgLAYQgNAdgEAQIACAEQAAAGgFACQgDAEgFAAQgPAAAAgOIgDgNIgMg1QgHgagRgzIgBgEQAAgKALAAQAHAAAEAHIAIAXQAGAUAHAbIAKAwQAMgbALgmQAHgXAEgKQAKgYAIAAQAIAAADAIQAEAJAEAkQACARAFAYIAKArQAOgjAWg6IAFgVQADgNAFgHQAEgGAGAAQALAAAAALIgDALIgFALIgGAUIggBNQgEANgLAYQgEAIgIAAQgFAAgEgDg");
	this.shape_18.setTransform(313.3,20.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhIBVQgDgEAAgFIAAgNIABgOIAAgUIABgUIAAgVIgBgVIgBgUIgBgVQAAgFAEgEQAEgFAGABQAFgBAJANQAbApAVAbQAZAeAfAdIAAgNIAAgOQAAgugEgdIgDgLQgCgIAAgEQAAgNALABQATAAAABGIAAAjIgBAkIgBASQgCAKgKAAQgGAAgIgIQgsgpg4hOIgBAYIAAAYIAAAbIAAAbQAAAdgLAAQgGAAgDgDg");
	this.shape_19.setTransform(285.9,19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgvBUQgKgKAAgjIAAgPIABgSQgBgCAAgDQAAgDACgDIACguIgBgMIgBgMQAAgNALAAQAEAAAEAEIAYgGIAVgBQAaAAAQAGQAHADAAAHQAAAFgCADQgEAEgEAAIgEgBQgSgFgRAAQgJAAgJACQgLABgMAEIABALIgCApIAvgEIAZgCQAFAAADADQAEADAAAFQAAAJgKABIgaACIgxAFIgBAOIAAANQAAAYADAEQADADAOAAIATAAIAVAAIAGgBIAGgBQAMAAAAALQAAAKgJABQgLACggAAQgiAAgKgIg");
	this.shape_20.setTransform(270.3,19.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhDBWQgDgDAAgFIACgiIACgjIgBgRIAAgSIABgZIABgaQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFIgBAaIgCAaIABAaIAugIQAbgFAUAAIABgvQAAgIACgIQAEgMAHAAQAEAAADADQADADAAAEIgBAFQgBAEAAAJIAAAKIAAAKIgCAgIgCAfIABAZIACAZQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgZIgCgZIABgQQgTAAgaAGIguAJIgBAbIgCAcQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_21.setTransform(254.6,19.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGBQQgEgDAAgFIAAgFIABgFIgBgQIgBgQQABgQgDgbIgDgrIgKAAQgYAAgNgEQgJgCAAgIQAAgFADgDQADgEAGAAIAQACIASACIAUgBIATAAIAZABIAYABQAFAAADAEQADADAAAFQAAAEgDAEQgDADgFAAIgYgCIgZgBIgIAAIADAxQADAeAAASIAAALIABAMQAAAHgDAFQgDAIgGAAQgDAAgDgDg");
	this.shape_22.setTransform(239.3,19.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AANAhQgDgCAAgEIABgrIACgMQACgGAHAAQADAAADACQADADAAAEIAAAFIAAAEIgBAqQgBAKgJAAQgEAAgDgDgAgeARIABgVIAAgVQAAgEACgDQADgDAEAAQAFAAADADQACADAAAEIAAAUIAAAVIAAAFIAAAFQAAAEgCADQgDACgFABQgKAAAAgTg");
	this.shape_23.setTransform(225.7,14.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGA0QgDgEAAgEIAAgHIgBgGQAAgEADgDQAEgDAEAAQAMAAgBAXQAAAEgCAEQgEACgFAAQgEAAgDgCgAgHgaQgDgEgBgFIAAgDIgBgFQAAgFAEgDQADgCAFAAQAKAAABASQAAAFgDAEQgEACgEAAQgFAAgCgCg");
	this.shape_24.setTransform(211.3,21.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRBcQgDgCAAgFIAAgCQADgOAAgQIgBgeIAAgeIgRABQgLgBAAgKQAAgLATAAIALAAIABgRQADgZAJgKQAKgOAYgBQAQAAAAALQAAALgOAAQgbgBgDAlIAAAGIAYgBQASAAAAALQAAAIgJABQgEACgEgBIgZACIgBAXIAAAVIABAUQgBAUgCALQgBAJgIAAQgFAAgDgDg");
	this.shape_25.setTransform(202.3,20.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgLBPIABgoIABgnIABgmIAAgoQAAgKAKgBQAKABAAAKIAAAoIgBAmIgBA2IgBAZQgBAKgJABQgKAAAAgLg");
	this.shape_26.setTransform(193.8,19.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AglAvQgQgOAAgYQAAgbAOgTQAOgVAZAAQASAAALAGQAOAHgBAQQABALgMAJQgGAEgSAHIgoATQAGAJAJAFQAJAFALAAQAIAAAKgDQANgEADgGQAEgFAEAAQAEAAADADQADACAAAEQAAAMgUAJQgQAHgQAAQgYAAgPgMgAgVgcQgKAKgEAUIAhgPQATgKAIgHQgJgJgQAAQgNAAgIALg");
	this.shape_27.setTransform(184.9,22.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeA8QgQgGAAgKQAAgFADgDQAEgDAEAAQADAAAGAFQACACAJACIANABQAIAAAHgCQAKgDAAgHQAAgPgVgFIgKgCQgPgDgGgFQgJgFAAgMQAAgXAWgJQAGgDAOgEQAOgEAGgDQAFgCAFAAQAFAAADADQACADAAAFIACAJIABAJQAAAFgDADQgDADgEAAQgGAAgDgEIgDgMIgZAIQgQAHAAAKIAGACQAYAEAMAIQASALAAAVQAAASgPAJQgNAHgSAAQgPAAgNgFg");
	this.shape_28.setTransform(172.8,22);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgpAyIAAhMIAAgKIAAgLQAAgLAKAAQALAAAAASQAUgUAZAAQAJAAAEAHQAEAGAAANIAAAIQgBAOgKAAQgJAAAAgLIAAgHIgBgJQgRACgJAHQgKAHgGAPIAAA6QAAALgLAAQgJAAAAgLg");
	this.shape_29.setTransform(162.7,22.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAYA0QgNAHgRAAQgOAAgJgGQgLgIgCgMQgEgdAAgWQAAgOADgUQACgJAJAAQAEAAADADQAEADAAAEIgCAQIgCARQAAASACAMQABANACAIIAHADIAHABQAOAAAQgFIAAgWIgBgUQAAgXADgSQABgJAJgBQAFAAADAEQADADAAAEIgCApIAAAXIAAAXIABAHIAAAIQAAAEgDAEQgDACgFAAQgIAAgDgKg");
	this.shape_30.setTransform(151.3,22.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AggAuQgOgPgBgaQgBgXANgTQAPgVAagBQAWABALATQAJAQAAAXQAAAXgNARQgOATgVAAQgTAAgNgNgAgTgWQgHANAAAOQAAAQAJAJQAHAIAKAAQAKAAAIgJQAJgJABgQQABgpgXAAQgQAAgJAPg");
	this.shape_31.setTransform(139.5,22.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgcBVQgDgDAAgFQAAgKAXg1IgnhJIgFgIQgDgFAAgEQAAgEAEgEQADgDAEAAQAFABADADQATAaAUAvIAQgmQAIgTAIgOQAEgGAGAAQAEAAADADQAEAEAAAEIgCAFIglBRQgOAdgGAUIgIAVQgCAIgHAAQgFAAgDgDg");
	this.shape_32.setTransform(127.7,25.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAdBTQgFgLgMgPIgSgaIgTAOIgCAhQAAAEgDAEQgCADgGAAQgLAAAAgPIACgbIABgbIAAglIABglIgBgMIAAgLQAAgFADgDQADgDAFAAQAEAAADADQAEADAAAFIAAAMIABALIgBAjIAAAlQAOgLANgNIAXgYQAFgEADAAQAEAAAEADQAEAEAAAEQgBAEgDADQgNAQgTARIAXAgQAQAXAAAHQAAAEgCADQgEADgEAAQgHAAgDgGg");
	this.shape_33.setTransform(110.3,19.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeA8QgQgGAAgKQAAgFADgDQAEgDAEAAQADAAAGAFQACACAJACIANABQAIAAAHgCQAKgDAAgHQAAgPgVgFIgKgCQgPgDgGgFQgJgFAAgMQAAgXAWgJQAGgDAOgEQAOgEAGgDQAFgCAFAAQAFAAADADQACADAAAFIACAJIABAJQAAAFgDADQgDADgEAAQgGAAgDgEIgDgMIgZAIQgQAHAAAKIAGACQAYAEAMAIQASALAAAVQAAASgPAJQgNAHgSAAQgPAAgNgFg");
	this.shape_34.setTransform(97.9,22);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAjA4IgIgIIgSAIQgIADgEAAQgaAAgLgOQgLgOAAgbQAAgaASgSQASgTAYAAQAJAAAMAFQAPAGAAAJQAAACgCADIgCANIgBAXQAAAOACAIQABAFAGAOIADAGIAAABQAAAFgDADQgDACgEAAQgCAAgFgEgAgSgaQgMAOAAARQAAARAGAJQAHAJAMAAQAKAAAHgEIALgIQgDgcAAgOIAAgKIACgMIgHgDIgFgBQgPAAgNAOg");
	this.shape_35.setTransform(87.1,22.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgeA8QgQgGAAgKQAAgFADgDQAEgDAEAAQADAAAGAFQACACAJACIANABQAIAAAHgCQAKgDAAgHQAAgPgVgFIgKgCQgPgDgGgFQgJgFAAgMQAAgXAWgJQAGgDAOgEQAOgEAGgDQAFgCAFAAQAFAAADADQACADAAAFIACAJIABAJQAAAFgDADQgDADgEAAQgGAAgDgEIgDgMIgZAIQgQAHAAAKIAGACQAYAEAMAIQASALAAAVQAAASgPAJQgNAHgSAAQgPAAgNgFg");
	this.shape_36.setTransform(69,22);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgcBVQgDgDAAgFQAAgKAXg1IgnhJIgFgIQgDgFAAgEQAAgEAEgEQADgDAEAAQAFABADADQATAaAUAvIAQgmQAIgTAIgOQAEgGAGAAQAEAAADADQAEAEAAAEIgCAFIglBRQgOAdgGAUIgIAVQgCAIgHAAQgFAAgDgDg");
	this.shape_37.setTransform(57.8,25.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAjA4IgIgIIgSAIQgIADgEAAQgaAAgLgOQgLgOAAgbQAAgaASgSQASgTAYAAQAJAAAMAFQAPAGAAAJQAAACgCADIgCANIgBAXQAAAOACAIQABAFAGAOIADAGIAAABQAAAFgDADQgDACgEAAQgCAAgFgEgAgSgaQgMAOAAARQAAARAGAJQAHAJAMAAQAKAAAHgEIALgIQgDgcAAgOIAAgKIACgMIgHgDIgFgBQgPAAgNAOg");
	this.shape_38.setTransform(46.7,22.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAHAfIgEgZIgDgXIgJATIgQAtQgCAFgDACQgDAGgHAAQgIABgIghQgEgRgEgcIgDgQIgBgRQAAgEADgDQAEgDAEAAQAIAAACAJIADAQIACAQIAFAwQANghAMgsQAEgMAIAAQAJABADANIAHAnQAEAaAEAQIAHgeIAPg6QABgGAIgBQAFAAADADQADAEAAAEIgBAFQgJAkgNArQgDAKgHAKQgEAGgHAAQgLgBgHgdg");
	this.shape_39.setTransform(33.4,22.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgLBPIABgoIABgnIABgmIAAgoQAAgKAKgBQAKABAAAKIAAAoIgBAmIgBA2IgBAZQgBAKgJABQgKAAAAgLg");
	this.shape_40.setTransform(22.8,19.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAmA4QgDgKgEgYIgdAFIgcAGIgSAqQgEAGgGAAQgEAAgEgDQgDgEAAgEQAAgFAQgiQgBgEAAgDQAAgJAKgCQANgXASgdQAZgqAGAAQAJAAADAMIAHAlIAQBKIAGARIADAMQAAAFgDACQgDAEgFAAQgKAAgHgagAgNAIIAngIIgJgpg");
	this.shape_41.setTransform(11.4,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-4.8,415.3,44.9);


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


(lib.MickPlays_Diag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Connector();
	this.instance.parent = this;
	this.instance.setTransform(50.6,70.2,0.877,0.877,0,0,0,28.4,47.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AQXF0IAAD4IHoAAADyraIAAD4AGpneIEZHTApEJsIAAlsApEJsIAACdAFIJsIAAj4AFIJsIuMAAAYAFsIt0AAQheilheikAROneIqlAAAQXJsIrPAAAuplJIAAiVInwAAA3/JsIO7AAAupneIVSAAAupsIIAAEq");
	this.shape.setTransform(91.4,76.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},27).wait(73));

	// Layer 2
	this.instance_1 = new lib.Because1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.9,233.4,1.005,1.005,0,0,0,19.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:19.5,scaleX:1.36,scaleY:1.36,x:56.2,y:50.3},12).wait(6).to({startPosition:0},0).to({regX:19.6,rotation:60,x:60.8,y:63.4},9).wait(73));

	// Layer 10
	this.instance_2 = new lib.everyone("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(60.2,233.4,1.005,1.005,0,0,0,19.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:11,scaleX:1.36,scaleY:1.36,x:-9.7,y:99},12).wait(6).to({startPosition:0},0).to({x:-28.3,y:123.4},9).wait(73));

	// Layer 13
	this.instance_3 = new lib.likescopy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(273.5,233.9,1.005,1.005,0,0,0,17.2,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.38,scaleY:1.38,x:109.8,y:12.8},12).wait(6).to({startPosition:0},0).to({regX:10.9,rotation:60,x:161.2,y:48.7},9).wait(73));

	// Layer 9
	this.instance_4 = new lib.likes("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(116.4,233.3,0.988,0.988,0,0,0,17.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:17.2,scaleX:1.36,scaleY:1.36,x:71,y:99},12).wait(6).to({startPosition:0},0).to({x:81.1,y:123.4},9).wait(73));

	// Layer 8
	this.instance_5 = new lib.guitar("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(315.2,233.8,1.005,1.005,0,0,0,37.9,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.36,scaleY:1.36,x:176.3,y:12.9},12).wait(6).to({startPosition:0},0).to({x:183.3,y:8.5},9).wait(73));

	// Layer 7
	this.instance_6 = new lib.Mick("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(201.7,233.9,1.005,1.005,0,0,0,12,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.36,scaleY:1.36,x:-4,y:13},12).wait(6).to({startPosition:0},0).to({x:-41.4},9).wait(73));

	// Layer 6
	this.instance_7 = new lib.plays("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(241.8,233.2,1.005,1.005,0,0,0,20.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:20,scaleX:1.36,scaleY:1.36,x:56.9,y:13},12).wait(6).to({startPosition:0},0).to({startPosition:0},9).wait(73));

	// Layer 4
	this.instance_8 = new lib.to("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(142.5,233.7,1.005,1.005,0,0,0,12,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:11.9,scaleX:1.36,scaleY:1.36,x:111.3,y:99.1},12).wait(6).to({startPosition:0},0).to({regX:12,rotation:60,x:159.5,y:93.6},9).wait(73));

	// Layer 3
	this.instance_9 = new lib.listen("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(165.7,233.9,1.005,1.005,0,0,0,17.8,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:11,scaleX:1.36,scaleY:1.36,x:149.1,y:99},12).wait(6).to({startPosition:0},0).to({x:211,y:99.2},9).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,222,329.6,23);


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


(lib.beachparty_playing_guitar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Ah7AiQgGABgFAFQgNAMgJgUQgIgRgCgRQgBgUAEgRQAEgRAPgJQAHgNAOgHQAUgKAUgJQASgHAYALQALgIAGgOQALgUAPgSQARgTAUgEQAKgBAJACQAIABAHAFQADADAEABQAVAHAVANQAMAHAFAMQAIARgGATQgCgGgEgFQgOgOgOgLQgNgJgSAEQgHABgHACQANANANAMQAPAMAMANQAMAMAGAQQACAHgBAFQgBADgBACQAAABgBABQgBADgBACQgDAOAKAKQAEAEAEAFQAAAAABAAQAGAJAFALQAHASADAUQACAMgBAOQAAABAAABQAAAFAAAGQgCAOgGAOQgCADgCAEQgCAEgEABQgCADgCADQgKALgMAMQgMALgSAFQgRAEgSgCQgUgCgRgHQgOgGgRgFQgPgFgQgGQgQgHgJgMIAAAAQAAAAgBgBACDgmQABgEAAgDQAAgVgYABQgUAAgPALQgEADgEAEQgJAGgIAIACBghQgEAJgKAEQgOAGgSAHQgJADgKAAACfB9QgFAGgFAGAA+iHQgOAEgMAFQgMAGgIALQgNASgHAQQgCABAAACQgPgKgRAFQgCABgCAAQgSAHgMAQQgMAOgGAPQAAACgBACQgBACAAACAhagYQgCADgBADQgDANAEAOQACAGADAGQAEAJAHAIQAAAEAAAEQgNgDgOgGQgLgFgJACAhNBqQgFAAgFgCQgHgDgFgEQgHgHgDgMQAAgNAHgHAhCA8QgSgNgPAJQgBABgCABQgPgMgGgMABCAuQANAGAMgDQAGAWAHAWQAFARgQAIQgJAEgIgGQgLgKgKgPQgLgRgEgTQgDgOgCgOQAPALAQAIgAAZgzQAHgSARACAgLgUQgVgKgIAUQgCAFACAEAhNBqIAAAAQAJgBAIgIQACgCABgBQAGgGACgFAhCCGQAAAAgBgBQgKgKAAgR");
	this.shape.setTransform(29,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGArQgKgKgKgPQgLgRgEgSQgDgOgCgOQAPALAQAIQAMAGAMgDQAGAWAHAVQAFARgQAIQgEABgDAAQgGAAgEgDg");
	this.shape_1.setTransform(36,39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC97").s().p("AAkCfQgUgCgQgGQgOgGgSgGQgPgEgQgHQgQgGgJgMIAAAAIAAgBQgLgKAAgRQgFAAgFgCQgHgDgEgFQgIgHgDgMQAAgMAHgHQgPgMgGgNQAJgBALAEQAOAGANAEIAAgIQgHgIgEgJIgFgMQgEgOAEgNIAAABIABgEIACgDQAGgPALgPQAMgPASgHIAEgBQARgFAPAJIACgDQAIgPANgSQAHgMAMgFQAMgFAOgEIAaAYIAbAZQAMAMAGARQACAHgBAFIgCAEIAAACIgCAGQgDAOAJAJIAIAJIABABQAGAKAFALQAHARADATQACANAAANIAAACIgBALQgBAPgHANIgJANIgFAFIgWAXQgMALgSAFQgLADgMAAIgMgBgAASAeQAEATALASQAKAOALAKQAIAHAJgFQAQgHgFgSQgHgVgGgXQgMADgNgGQgQgHgPgMQACAOADAOgAhiBSQAIgBAJgJIACgDQAGgGACgFQgCAFgGAGIgCADQgJAJgIABIgBAAIABAAgAhYAjQgKgHgJAAIAAAAIgBAAQgGAAgGADIgBABIgDACIADgCIABgBQAGgDAGAAIABAAIAAAAQAJAAAKAHgAg+gaIgBgEIABgFIABAAQAFgNALAAIAAAAIAAAAQAFAAAHADQgHgDgFAAIAAAAIAAAAQgLAAgFANIgBAAIgBAFIABAEgAAugdQAHAAAHgCIABAAIAggNQALgEAEgJQgEAJgLAEIggANIgBAAQgHACgHAAIgBAAIAAAAIgBAAIgCAAIACAAIABAAIAAAAIABAAgABWhaQgUABgPALIgIAGIgRAOIARgOIAIgGQAPgLAUgBIABAAIABAAQAWABAAATIAAAAIAAAHIAAgHIAAAAQAAgTgWgBIgBAAIgBAAIAAAAgAADhMIABgBIAAAAQAGgPAOAAIAAAAIAAAAIADAAIgDAAIAAAAIAAAAQgOAAgGAPIAAAAIgBABg");
	this.shape_2.setTransform(31.2,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFF97").s().p("AhbBqQgLgFgJACQgGABgFAFQgNAMgJgUQgIgRgCgSQgBgUAEgRQAEgRAPgJQAHgMAOgHQAUgKAUgJQASgHAYALQALgIAGgOQALgUAPgSQARgTAUgEQAKgBAJACQAIABAHAFQADADAEABQAVAHAVANQAMAHAFAMQAIARgGATQgCgGgEgFQgOgOgOgLQgNgJgSAEIgOADQgOAEgMAFQgMAGgIALQgNASgIAQIgCADQgOgJgRAEIgEABQgSAHgMAPQgMAOgGAPIgDAGQgDANAEAPIAFAMQAEAJAHAIIAAAIQgNgDgOgGgAhRAyIADgGIgBAEIgBAEIgBgCgAhOAsIAAAAg");
	this.shape_3.setTransform(27.8,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.guitar_playing();
	this.instance.parent = this;
	this.instance.setTransform(54.4,51,1.26,1.266,-16.1,0,0,35.8,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.beachparty_playing_guitar, new cjs.Rectangle(4,0,104.5,100.1), null);


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
		
		//volume vars -----------------------------------------
		var prev_vol = 1;
		var mute= false;
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmusic',{loop:-1});
		bgm.volume = 1;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		//volume functions -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume *0.5;
			if(!mute){
				bgm.volume = createjs.Sound.volume *0.5;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.5;
			if(!mute){
				bgm.volume = createjs.Sound.volume +0.5;
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
		
		 window.open ("dep_Scene6.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("dep_Scene4.html","_self");
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


(lib.MickPlayin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beachparty_playing_guitar();
	this.instance.parent = this;
	this.instance.setTransform(51.5,-9.9,0.947,0.947,0,0,0,54.3,50.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgYmUQgDAAgCgBQgDAAgDgCAh2gtQAFgFAFgEQALgLALgMQANgOAMgOQAEgEADgEQAJgIAUgMQADgCADgDQABgCACgCIBBgkQANgHAIgFQAOgHADAAQASgCASADQAQACAPAKQANALAKAMQAJALAFASQAEAQABASQABASABASQAAABAAABQAAADAAACQAAABAAABQgBAQACAOQABAJABAJQABAIABAJQACATgDASQgCASAAARQAAATADASQACAPAIAPQAGAMAHAKQACAFADAEQAJAQAKALQAJAKASAFQASAFARgHQAOgGAKgOQAKgPAJgNQAJgNAIgPQABgCABgCQAJgNAOgBQAEAAAEADQABABABABQAMALgGALQAEgEAKgCQAUgFgIAWQgCAFgCAEQAEgEAHADQAMAFgKAJQgBABgCACQAHgDAJACQADABABADQAAACgBACQAAABAAAAQgCAEgFABQAIABACAJQADAMgKAGQgEABgDACQgBAAgCABQgEAIgEAIQgIAQgOALQgOALgPAFQgPAFgSADQgSACgTAAQgTABgNAMQgJAKgLANQgMAPgMAJQgQALgSgFQgDgBgDgBQgDAKgHAIQgKAOgRADQgQADgTAAQgSABgSgBQgTgBgRgFQgQgFgRgCQgSgDgOgFQgMgDgPgBQgBAAgCAAQgDAAgCgBQgEABgDABQgRAGgTgBQgTgBgSgCQgGgBgHgBQgLgCgKgEQgTgFgHgNQgJgPALgNQAAgBABgBQALgOANgNQAJgKALgJQADgCACgCQAPgKAIgQQAFgJAEgLQgEABgCACQgBABgBABIAAAAQgIAEgKADQgFACgGABQgKADgKAEQgSAGgQAEQgNACgNADQgFABgEAAQgSAEgSABQgTACgRgDQgTgCgQgFQgRgEgQgGQgPgGgOgJQgNgJgMgOQgLgMgHgRQgGgPgHgRQgHgRgFgQQgFgRgEgSQAHgBAHgCQAPAHAQAFQARAFATABQATABARgCQASgCAQgFQAQgEAQgIQAPgIAMgLQACAAABAAQABAAABAAQAGgBAHgCQgFARAAARQgBATADASQABAKADAIAB4geQALAPABARQAAALgDAJABDg9QgJAQgFASQgDAMgBALQgCAGAAAHQgBATAFARQAFASAIAQQAIAQAOAKQAKAHAKAGQADABADACQABABABAAQABABABABQAHADAHACACSE6QgFADgHADQgQAHgRADQgNACgOACQgSACgTABQgSAAgTgBQgQgCgQgDQgTgEAEgSQAAgCAAgBQAGgRAIgNQAKgOAKgOQAKgOAMgNQABgBABAAQABgCACgCQAKgKALgKQAMgNANgOQALgNAMgOQAKgNANgLAByB6QALAOADAPQADAQAGARQAGARADARQABAQABASQAAABAAABQgBASAAATQAAALgBALQAAABAAAAQAAAHAAAHQAAAIAGAGQALALAPAGQAOAGANAEAGdCbQgCADgDACAh+gjQAEgFAEgFAh+gjIABAAQADgFAEgDQAAgBAAgBAjvBAQAGgDAHgDQAQgJAPgLQAOgKAOgLQAOgNAIgMQAGgKAHgJIABAAQABgDACgCQABgCABgBAiDgbQABgDACgCIAAAAIAAAAAiAggQgCAJgCAJQgBAGgBAHQgCARAAASQgBATAEARQABACAAACQAEAPAIAPQAIAOAPALQANAJAOAFQADgKAEgLQAGgQAJgOQAJgOAMgPQAMgOAMgMQALgLAOgNQAMgLAPgGAiAggQABgCACgBAj+BDQgMAMgNAMQgJAJgFAJQgDAFgCAGQgEAMgCANAhGCPQgCAGgBAGQgEASgFAPQgFARgEAQQgCAGgCAGAgfF+QgEgBgEAAAgfF+QACgBAAgF");
	this.shape.setTransform(76.1,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgYCZQgSgCgRgFQgRgEgQgGQgPgGgOgJQgNgJgMgOQgKgMgHgRIgOggQgHgQgEgRIgJgiIANgDQAQAHAPAFQASAFASABQATABARgCQASgCARgFQAQgEAPgIQAPgIAMgLIACAAIACAAIANgDIANgGQAQgJAPgLQAPgKANgLQAOgNAIgNIAOgTIAAAAIAEgFIgEASIgCANQgCASgBASQAAATAEARIABAEQAEAPAHAPQAJAOAOAKQANAJAOAFIgDAMQgEASgEAPIgKAhIgEAMQgDABgDACIgCACIAAAAQgIAEgKADIgKADIgVAHQgRAGgRAEIgaAFIgJABQgSAEgSABIgMABQgMAAgLgCgAAaANQABAKADAIQgDgIgBgKQgCgQAAgSIAAgCQAAgQAFgSQgFASAAAQIAAACQAAASACAQgAgJgeQgJAJgGAJIgFALQgEALgBANQABgNAEgLIAFgLQAGgJAJgJIAXgYIgXAYg");
	this.shape_1.setTransform(49.1,29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC97").s().p("AgsEvQgTgBgRgFQgQgGgRgCQgSgCgPgFQgMgEgPgBQACgBAAgEIAAAAIAAAAQAAAEgCABIgIAAIgHABQgRAGgTgBQgSAAgTgCIgNgDIgVgFQgTgGgHgNQgIgPAKgNIABgCIAYgaQAKgLAKgIIAFgEQAPgLAIgQQAFgJAEgKIAEgNIAJggQAFgPAEgSIADgMIAHgWQAHgQAIgNQAJgOAMgPQAMgNAMgMIAagYQAMgLAPgHIgCAOIAAAIQAAAOAEAOQAFARAIARQAIAQAOAJIAUAMQgNALgKAOIgXAbIgZAaIgVAVIgDADIgCACQgNAMgKAOIgUAdQgIANgGAQIAAADQgEASATAEQAQAEARABQATACASgBIAlgCIAbgEQARgEAQgHIALgFIAAANQAAAIAGAHQALALAPAGIAbAJQgDALgHAIQgKAOgRACQgQADgSABIgSAAIgSAAgABFEKIgGgCIgbgJQgPgGgLgLQgGgHAAgIIAAgNIAAgBIABgXIABglIAAgCQAAgRgCgRQgDgRgFgRQgGgQgDgQQgDgPgLgOIACABIAOAFIgOgFIgCgBIgCgBIgGgEIgUgMQgOgJgIgQQgIgRgFgRQgEgOAAgOIAAgIIACgOQgPAHgMALIgaAYQgMAMgMANQgMAPgJAOQgIANgHAQIgHAWQgOgGgNgJQgPgKgIgOQgHgOgFgPIgBgEQgDgSAAgSQAAgTACgRIACgOIAEgRIAAgBIADgDIAHgIIAAgBIAKgKIAWgWIAZgdIAHgHQAJgJAUgLIAGgGIADgDIBCgkIAVgMIARgIQASgBASACQARACANALQANAKAKAMQAJAMAFARQAEARABASIACAkIAAACIAAAFIAAACQgBAPACAPIACASIACASQACASgDATQgCARAAASQAAATADAQQACAQAIAPIANAWIAFAIQAJAQAKALQAJALASAFQASAFARgHQAOgGAKgOIATgcQAJgOAIgPIACgDQAJgOAOgBQAFAAADAEIACABQAMAMgGAKQAFgDAJgCQAUgFgIAWIgEAJQAEgEAHADQAMAEgKAJIgDADQAHgDAJADQABAAABAAQAAABABAAQAAABAAAAQABABAAAAIgBAFIAAABQgCADgFABQAIABACAKQADAMgKAFIgHADIgDABIgIAQQgIAQgOALQgOAMgPAFQgPAEgSADQgSADgTAAQgTAAgNANIgUAXQgLAOgNAKQgLAHgMAAQgFAAgGgCgAEKA4IAFgGIgFAGgAgMhSQADgHAAgIIAAgFQgBgSgLgPQALAPABASIAAAFQAAAIgDAHgAhYiDQgDALgBAMQABgMADgLQAGgSAIgQQgIAQgGASg");
	this.shape_2.setTransform(90.3,27.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1D38D").s().p("AgBAAIACAAIABABIgDgBg");
	this.shape_3.setTransform(73.3,-23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MickPlayin, new cjs.Rectangle(3.8,-57.9,120.1,116.9), null);


(lib.CarmenMick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MickPlayin();
	this.instance.parent = this;
	this.instance.setTransform(195.4,57.9,1,1,0,0,0,61.4,0);

	this.instance_1 = new lib.carmen_eat();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.4,63.4,0.947,0.947,0,0,0,82.7,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257,119.9);


(lib.DependentClause3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("fade_in");
	}
	this.frame_111 = function() {
		playSound("high_blip");
	}
	this.frame_145 = function() {
		playSound("timbale_roll_long");
	}
	this.frame_186 = function() {
		playSound("rhodes_f9_chord");
	}
	this.frame_215 = function() {
		playSound("Flying");
	}
	this.frame_224 = function() {
		playSound("SlowerRise");
	}
	this.frame_247 = function() {
		playSound("right_answer");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(108).call(this.frame_111).wait(34).call(this.frame_145).wait(41).call(this.frame_186).wait(29).call(this.frame_215).wait(9).call(this.frame_224).wait(23).call(this.frame_247).wait(91));

	// Layer 1
	this.instance = new lib.DependentClauseDef_2();
	this.instance.parent = this;
	this.instance.setTransform(250,149.8,1.126,1.126,0,0,0,224.8,0);
	this.instance.alpha = 0;

	this.instance_1 = new lib.DependentClauseDefSimple();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250,149.8,1.126,1.126,0,0,0,224.8,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7).to({_off:true},87).wait(244));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).to({scaleX:1.03,scaleY:1.03,y:38.7},11).wait(233));

	// Layer 2
	this.instance_2 = new lib.WhiteSheet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,18,1.202,1.026);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.51,y:73,alpha:1},7).wait(87).to({scaleY:0.67,y:24},0).to({scaleY:0.32,y:-34.2},11).wait(233));

	// Layer 15
	this.instance_3 = new lib.Mickplays();
	this.instance_3.parent = this;
	this.instance_3.setTransform(347.8,88.2,1.632,1.632,0,0,0,73.4,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(186).to({_off:false},0).to({_off:true},29).wait(123));

	// Layer 10
	this.instance_4 = new lib.Becauseeveryoe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(158.5,57.3,1.679,1.679,0,0,0,73.4,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(111).to({_off:false},0).to({_off:true},104).wait(123));

	// Layer 12
	this.instance_5 = new lib.AskYourself();
	this.instance_5.parent = this;
	this.instance_5.setTransform(255.4,109.9,1,1,0,0,0,198.8,18.9);
	this.instance_5._off = true;

	this.instance_6 = new lib.MickPlays_Diag("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(234,130.6,1,1,0,0,0,147.2,66.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},145).to({state:[{t:this.instance_5}]},30).to({state:[{t:this.instance_5}]},11).to({state:[]},1).to({state:[{t:this.instance_6}]},33).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(145).to({_off:false},0).wait(30).to({alpha:0},11).to({_off:true},1).wait(151));

	// Layer 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAOQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIADgJIAFgLQACgEACAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABIgIAVQgBADgDABQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape.setTransform(272.2,303.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAfIgDgOIgBgOIABgFIAAgGQAAgOgFAAQgHAAgGAJQgFAHgEALIAAAHIgBAGIABAFIAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAQgBgCAAgDIAAgGIgBgFIABgSIAAgRIAAgGIAAgHQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAFAAABAJIAAAHQALgOAKAAQAKgBAEAKQADAFAAAMIAAAGIAAAFIACAOIABANQAAAEgCACQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgFAAAAgGg");
	this.shape_1.setTransform(266.8,299.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAbQgJgHAAgPQAAgPAIgLQAIgNAOAAQAKAAAHAEQAIAEAAAJQAAAHgHAFIgNAGIgXAMQADAFAFADQAGACAFAAIALgBQAHgDADgDQABgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAAHgMAFQgJAFgKAAQgNAAgJgIgAgMgQQgFAGgDALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_2.setTransform(259.8,299.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_3.setTransform(253,298.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_4.setTransform(246.6,299.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAgAgEgiQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQACACABAEQgBADgCACQgCACgDAAQgCAAgDgCg");
	this.shape_5.setTransform(242,298);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_6.setTransform(238.2,297.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_7.setTransform(229,299.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_8.setTransform(222.6,298.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_9.setTransform(212.3,299.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAFACAHAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgMAFQgJAFgJAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_10.setTransform(205.9,299.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AARAxIgKgPIgLgQIgLAIIAAAUQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgJIABgPIABgQIAAgVIAAgWIAAgHIAAgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABIAAAHIAAAHIAAAVIAAAVQAJgHAHgHIANgOQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQgHAJgMAKIAOATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgEAAgBgDg");
	this.shape_11.setTransform(199.1,297.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAgDgiQgCgCAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_12.setTransform(193.5,298);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_13.setTransform(189.8,297.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAFACAHAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgMAFQgJAFgJAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_14.setTransform(180.7,299.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAQAfIgCgOIgCgOIABgFIAAgGQAAgOgFAAQgHAAgGAJQgFAHgEALIAAAHIgBAGIABAFIAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAQgCgCAAgDIAAgGIAAgFIABgSIAAgRIAAgGIAAgHQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAFAAABAJIAAAHQALgOAKAAQAKgBAEAKQADAFAAAMIAAAGIAAAFIABAOIACANQAAAEgCACQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgFAAAAgGg");
	this.shape_15.setTransform(173.8,299.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_16.setTransform(166.6,299.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAxQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgeIgXgrIgDgFIgCgFQAAgDADgCQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQADAAABACQALAPAMAcIAJgWIAKgUQACgDADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIgBADIgWAuQgIASgDAMIgFAMQgBAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_17.setTransform(159.8,301.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_18.setTransform(153.7,299.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAFACAHAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgMAFQgJAFgJAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_19.setTransform(146.9,299.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAdIgKgZIgLgdIgBgCQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAEAAABAEIAQArQAEgKAHgSIAGgOQACgEADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABABABQAAAAAAABQAAACgLAZIgNAdQAAAGgFAAQgEAAgCgGg");
	this.shape_20.setTransform(140.2,299.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAFAAIALgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgJAAQgNAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_21.setTransform(133.5,299.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQAAgPAJgLQAIgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgXAMQAEAFAFADQAFACAHAAIAKgBQAHgDADgDQACgDACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgLAFQgLAFgIAAQgOAAgJgIgAgMgQQgGAGgCALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_22.setTransform(122.5,299.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_23.setTransform(115.5,299.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgIAAgGgDQgGgEgBgIQgCgRgBgMQAAgJACgLQABgFAFAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBAJIgBAKIABARIACAMIAEACIAEABQAIAAAJgDIAAgNIAAgLQgBgOACgKQAAgGAGAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgGAAgBgGg");
	this.shape_24.setTransform(109.2,299.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_25.setTransform(102.4,299.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAcQgKgIAAgOQAAgMAJgNQAKgQALAAQAGAAAHADQAKAEAAAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBIgCgCQgEgDgIAAQgGAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAIAAQADAAAFgCIAHgEIADgBQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABIABAEQAAAFgKAEQgIAEgFAAQgMAAgJgIg");
	this.shape_26.setTransform(95.8,299.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAFAAIALgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgJAFgKAAQgNAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_27.setTransform(89,299.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAxQgCgDAAgDIAAgSIABgZIABgaIABgSQAAAAABgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAJgCALAAQAKAAAKAHQAMAJAAANQAAAQgNAIQAKAFAFAFQAEAEAAAGQAAAIgIAHQgGAFgGADQgNAFgXAAQgCAAgDgCgAgTAZIAAANQARAAAKgEIAIgGQAEgDAAgCQAAgDgIgDIgMgFIgGgBIgCAAIgDAAIgHAAIgBAOgAgQglIAAALIgBAZIAJAAQAJAAAGgGQAHgFAAgJQAAgGgHgFQgHgGgGAAIgKABg");
	this.shape_28.setTransform(81.5,297.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFAFQgCgCAAgDQAAgCACgCQACgDADAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgDAAgCgDg");
	this.shape_29.setTransform(404.3,302);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_30.setTransform(393.1,299);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQAAAAABAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_31.setTransform(386.6,297.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgJAAgFgDQgGgEgBgIQgDgRABgMQAAgJABgLQABgFAGAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAJIgBAKIAAARIADAMIAEACIAEABQAIAAAJgDIgBgNIAAgLQAAgOACgKQAAgGAGAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAIgCAYIAAANIAAAOIABAEIAAAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGg");
	this.shape_32.setTransform(376.6,299);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgVAxQgIgCAAgFQAAgFAFAAIAIABIAMABQALAAAFgMQADgHAAgRQgDAGgFAEQgFADgFAAQgMAAgHgHQgHgIAAgMQAAgRAKgLQAKgLARAAQAFABAEABQAEABADAEQAGAAAAAHIgBAMIgCAMIgBAVQgBAMgCAIQgDAKgGAGQgIAFgNAAQgIABgGgCgAgLgfQgGAHAAAMQAAAJAEAEQADAFAHgBQAGABAGgHQAFgGABgHIADgVIgFgEIgGgBQgLAAgHAJg");
	this.shape_33.setTransform(369.6,300.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAgAgEgiQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQADACAAAEQAAADgDACQgCACgDAAQgCAAgDgCg");
	this.shape_34.setTransform(354.4,297.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgCgFg");
	this.shape_35.setTransform(348.7,297.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_36.setTransform(337.6,298.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQAxQAAAAgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgGAOgeIgXgrIgDgFIgCgFQAAgDADgCQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAQADgBABADQALAPAMAcIAJgXIAKgTQACgEADABQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIgBADIgWAuQgIASgDALIgFANQgBAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_37.setTransform(331.1,300.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_38.setTransform(324.6,299);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYAzQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgZIAAgZIgBgZIgBgNQAAgEABgDQACgEAEgBQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABABAAABQAAAAAAABIAAACIgBAEQAGgFAFgBQAEgCAEAAQANAAAGALQAFAKAAAPQAAANgHAIQgIAJgNAAQgFAAgIgCIAAAfQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBgAgFggIgJAGIABAeQAHACAGAAQAIAAAEgGQAEgEAAgIQAAgMgDgGQgDgFgGgBQgEAAgFAEg");
	this.shape_39.setTransform(314.3,300.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AARAxIgKgPIgLgQIgLAIIAAAUQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgJIAAgPIABgQIAAgVIABgWIgBgHIAAgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIAAAHIABAHIgBAVIAAAVQAIgHAIgHIANgOQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgHAJgMAKIAOATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgEAAgBgDg");
	this.shape_40.setTransform(303.8,297.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgRAcQgJgIAAgOQAAgMAIgNQAKgQAKAAQAHAAAIADQAJAEABAFQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDgBIgDgCQgEgDgJAAQgFAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAHAAQAFAAADgCIAIgEIACgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIACAEQAAAFgKAEQgJAEgGAAQgMAAgIgIg");
	this.shape_41.setTransform(296.5,299);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAgAgEgiQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQACACABAEQgBADgCACQgCACgDAAQgCAAgDgCg");
	this.shape_42.setTransform(291.5,297.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAnAwQgCgEgBgGIgCgLQgEgKgFgiIgNAlIgDAMQgCAHgDAFQgDAEgEAAQgDAAgCgDIgDgHIgCgHQgGgXgFgYIgCALIgIAhIgDARQgDAFgEAAQgDAAgCgCQgBgCgBgDQABgLAEgPIAHgYIAEgVQACgNADgFQADgEAEABQAEgBACAGQACAFADARQAEAVAHAXQAIgXAHgbIACgJQABgFACgEQADgEAEAAQAFAAADAKIADAPQADAcAGAUIADALIADALQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQgCACgCAAQgEAAgCgDg");
	this.shape_43.setTransform(283.8,297.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAgAgEgiQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQACACABAEQgBADgCACQgCACgDAAQgCAAgDgCg");
	this.shape_44.setTransform(242,298);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_45.setTransform(189.8,297.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_46.setTransform(153.7,299.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_47.setTransform(115.5,299.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:115.5}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:153.7,y:299.6}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:189.8}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:238.2,y:297.7}},{t:this.shape_5,p:{x:242,y:298}},{t:this.shape_4,p:{x:246.6,y:299.3}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},111).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_47},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_46},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_45},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13,p:{x:238.2}},{t:this.shape_44},{t:this.shape_23,p:{x:246.6}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_6,p:{x:319.5,y:297.2}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_4,p:{x:359,y:298.7}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_5,p:{x:381.9,y:297.4}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_18,p:{x:399.7,y:299}},{t:this.shape_29}]},75).wait(152));

	// Layer 13
	this.instance_7 = new lib.CarmenMick("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(282.3,204.1,1,1,0,0,0,128.4,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(215).to({startPosition:0},0).to({scaleX:0.71,scaleY:0.71,x:394.6,y:218.1},5).wait(118));

	// Layer 14
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,204,204,0)").s().p("EgmoASYMAAAgkvMBNRAAAMAAAAkvg");
	this.shape_48.setTransform(247.8,149.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(27,212,214,0.2)").s().p("EgmoAQWMAAAggrMBNRAAAMAAAAgrg");
	this.shape_49.setTransform(247.8,136.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(54,220,224,0.4)").s().p("EgmoAOUIAA8nMBNRAAAIAAcng");
	this.shape_50.setTransform(247.8,123.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(82,227,235,0.6)").s().p("EgmoAMSIAA4jMBNRAAAIAAYjg");
	this.shape_51.setTransform(247.8,110.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(109,235,245,0.8)").s().p("EgmoAKPIAA0dMBNRAAAIAAUdg");
	this.shape_52.setTransform(247.8,97.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#88F3FF").s().p("EgmoAINIAAwZMBNRAAAIAAQZg");
	this.shape_53.setTransform(247.8,84.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#88F3FF").s().p("EgmoAKPIAA0dMBNRAAAIAAUdg");
	this.shape_54.setTransform(247.8,97.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#88F3FF").s().p("EgmoAMSIAA4jMBNRAAAIAAYjg");
	this.shape_55.setTransform(247.8,110.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#88F3FF").s().p("EgmoAOUIAA8nMBNRAAAIAAcng");
	this.shape_56.setTransform(247.8,123.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#88F3FF").s().p("EgmoAQWMAAAggrMBNRAAAMAAAAgrg");
	this.shape_57.setTransform(247.8,136.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#88F3FF").s().p("EgmoASYMAAAgkvMBNRAAAMAAAAkvg");
	this.shape_58.setTransform(247.8,149.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_48}]},111).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},99).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).wait(118));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,18,495.8,247);


// stage content:
(lib.dep_Scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene5:0,scene5_repeat:378});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		playSound("cannotstandalone");
	}
	this.frame_110 = function() {
		playSound("becauseeveryone");
	}
	this.frame_144 = function() {
		playSound("alwaysaskyourself");
	}
	this.frame_184 = function() {
		playSound("mickplays");
	}
	this.frame_389 = function() {
		this.gotoAndPlay("scene5_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(110).call(this.frame_110).wait(34).call(this.frame_144).wait(40).call(this.frame_184).wait(205).call(this.frame_389).wait(1));

	// Main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,55.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape.setTransform(210.4,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBAQgHgHAAgbIAAgMIABgOIgBgEIABgEIACgjIgBgJIgBgJQAAgKAJAAQADAAACADIATgFIAQgBQAUABAMAEQAGADgBAFQAAADgCADQgCADgDAAIgDgBQgOgEgNAAIgOABIgRAFIABAIIgCAgIAkgDIATgDQAEAAACADQACACABAEQAAAGgIABIgTADIgmADIgBALIAAAKQAAASADAEQACACALAAIAPAAIAPgBIAFAAIAFgBQAIAAABAJQgBAHgGABQgJABgZABQgZgBgIgGg");
	this.shape_1.setTransform(199.4,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape_2.setTransform(188,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAxQgKgMgDgXIgBgpIAAgTIACgLQACgGAFAAQAIAAAAAOIAAAxQAAAxAiAAQAhAAAAhTIAAgIIAAgHQAAgFACgEQACgFAFAAQAIAAAAALIAAALIAAAKQAABfgyAAQgYAAgNgPg");
	this.shape_3.setTransform(175.8,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdArIgFgaIgXAEIgVAFIgOAfQgDAFgEAAQgDAAgDgDQgCgCAAgDQAAgFAMgaQgCgCABgDQgBgGAJgCQAJgRAOgXQATggAFABQAGgBADAKIAFAcIAMA4IAGANIACAJQgBADgCADQgDADgDAAQgIgBgFgTgAgKAGIAdgGIgGggg");
	this.shape_4.setTransform(163.2,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgjBBQgFgDAAgJIACgcQACglAAguQgBgEADgCQADgDADAAQAEAAACADQACACAAAEQAAAvgCAlIgBANIgBAMQAWAAAggKIADgBQADAAADADQACADAAADQAAAFgGADQgJAEgUAEQgRADgMAAQgJAAgDgDg");
	this.shape_5.setTransform(152.6,19.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_6.setTransform(142.8,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAOAAIAOAAIATABIATABQAEAAADACQACADAAADQAAAEgCADQgDACgEAAIgTgBIgTgBIgFAAIACAlIACAlIABAIIAAAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_7.setTransform(127.3,18.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag3BBQgCgDAAgEIAAgKIABgKIAAgQIAAgQIAAgPIAAgQIgBgQIgBgQQAAgDADgEQAEgDAEAAQAEAAAHAKQAUAfAQAVQATAXAYAWIAAgKIAAgLQAAgjgDgWIgCgJIgCgJQAAgJAJgBQAOAAAAA2IAAAbIAAAbIgCAOQgBAIgIAAQgEAAgGgGQgigfgrg8IAAATIgBASIABAUIAAAVQAAAXgJgBQgEAAgDgCg");
	this.shape_8.setTransform(114.1,19);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkBAQgIgHAAgbIABgMIAAgOIgBgEIACgEIACgjIgBgJIgBgJQAAgKAIAAQAEAAADADIASgFIAQgBQAUABAMAEQAFADABAFQgBADgBADQgDADgEAAIgCgBQgOgEgNAAIgOABIgSAFIABAIIgBAgIAjgDIAUgDQADAAADADQACACAAAEQABAGgIABIgUADIglADIgBALIAAAKQAAASADAEQACACALAAIAOAAIAQgBIAFAAIAEgBQAKAAgBAJQABAHgIABQgHABgZABQgagBgIgGg");
	this.shape_9.setTransform(102.2,18.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZBDQgKgCgEgEIgBAAQgEAAgCgCQgDgDAAgEIACgaIABgaIgBgcIAAgdQAAgDADgEQAEgDADAAQACgBALAGIAPAHQAXAIAQARQATATAAAXQABAOgHANQgGANgMAIQgNAJgXAAIgOgCgAgfgWIABAWIgCAuIADABQAGAFAMAAQARAAAKgGQAHgGAFgIQAFgKAAgKQAAgWgZgRQgIgGgfgNg");
	this.shape_10.setTransform(90.9,19.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag3BBQgCgDAAgEIAAgKIABgKIAAgQIAAgQIAAgPIAAgQIgBgQIgBgQQAAgDADgEQAEgDAEAAQAEAAAHAKQAUAfAQAVQATAXAYAWIAAgKIAAgLQAAgjgDgWIgCgJIgCgJQAAgJAJgBQAOAAAAA2IAAAbIAAAbIgCAOQgBAIgIAAQgEAAgGgGQgigfgrg8IAAATIgBASIABAUIAAAVQAAAXgJgBQgEAAgDgCg");
	this.shape_11.setTransform(77.8,19);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkBAQgHgHgBgbIABgMIAAgOIgBgEIACgEIACgjIgBgJIgBgJQAAgKAIAAQAEAAADADIASgFIAQgBQAUABAMAEQAFADAAAFQAAADgBADQgDADgEAAIgCgBQgOgEgNAAIgOABIgSAFIABAIIgBAgIAjgDIAUgDQADAAADADQACACAAAEQABAGgIABIgUADIglADIgBALIAAAKQAAASADAEQACACALAAIAPAAIAPgBIAFAAIAEgBQAJAAAAAJQAAAHgGABQgIABgZABQgagBgIgGg");
	this.shape_12.setTransform(65.9,18.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiBAQgCgCAAgEIAAgYIABgiIACgiIAAgLIAAgMQADgHAGABIAIgCIALAAQAOAAAOAKQAPAMAAAQQAAAUgQAMQgOALgTAAIgKgCIgBAsQAAAEgCACQgCACgDAAQgDAAgCgCgAgSgxIAAAQIgCAhIAJAAQANAAAKgGQAKgIAAgNQAAgKgKgGQgJgGgJAAIgHAAIgFAAg");
	this.shape_13.setTransform(56,18.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgkBAQgIgHAAgbIABgMIAAgOIgBgEIACgEIACgjIgBgJIgBgJQAAgKAIAAQAEAAADADIATgFIAPgBQAUABAMAEQAFADAAAFQAAADgBADQgDADgEAAIgCgBQgOgEgNAAIgOABIgSAFIABAIIgBAgIAjgDIAUgDQADAAADADQACACAAAEQABAGgIABIgUADIglADIgBALIAAAKQAAASADAEQACACALAAIAOAAIAQgBIAFAAIAEgBQAKAAgBAJQABAHgIABQgHABgZABQgagBgIgGg");
	this.shape_14.setTransform(46.4,18.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZBDQgKgCgEgEIgBAAQgEAAgCgCQgDgDAAgEIACgaIABgaIgBgcIAAgdQAAgDADgEQAEgDADAAQACgBALAGIAPAHQAXAIAQARQATATAAAXQABAOgHANQgGANgMAIQgNAJgXAAIgOgCgAgfgWIABAWIgCAuIADABQAGAFAMAAQARAAAKgGQAHgGAFgIQAFgKAAgKQAAgWgZgRQgIgGgfgNg");
	this.shape_15.setTransform(35.1,19.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF6600").ss(3,1,1).p("EAmzAXeMhNfAAAMgAGgu7MBNlAAAg");
	this.shape_16.setTransform(276.4,194.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(390));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmrAakMAAAg1HMBNXAAAMAAAA1Hg");
	mask.setTransform(276.3,213.2);

	// Anim
	this.instance = new lib.DependentClause3();
	this.instance.parent = this;
	this.instance.setTransform(251.9,75.2,1,1,0,0,0,223.1,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(390));

	// Anim
	this.instance_1 = new lib.PartyOnTheBeach3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.1,181.7,0.849,0.849,0,0,0,230.1,179.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(390));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,202.6,534,398.7);
// library properties:
lib.properties = {
	id: 'C92D335F6B0AED49AB1ED64BF562A6D7',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/alwaysaskyourself.mp3", id:"alwaysaskyourself"},
		{src:"sounds/becauseeveryone.mp3", id:"becauseeveryone"},
		{src:"sounds/bump.mp3", id:"bump"},
		{src:"sounds/cannotstandalone.mp3", id:"cannotstandalone"},
		{src:"sounds/fade_in.mp3", id:"fade_in"},
		{src:"sounds/Flying.mp3", id:"Flying"},
		{src:"sounds/high_blip.mp3", id:"high_blip"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/mickplays.mp3", id:"mickplays"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/rhodes_f9_chord.mp3", id:"rhodes_f9_chord"},
		{src:"sounds/SlowerRise.mp3", id:"SlowerRise"},
		{src:"sounds/timbale_roll_long.mp3", id:"timbale_roll_long"}
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
an.compositions['C92D335F6B0AED49AB1ED64BF562A6D7'] = {
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