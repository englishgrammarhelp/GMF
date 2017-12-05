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


(lib.When = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAQAfIgDgOIgBgOIABgFIAAgGQAAgNgFAAQgHgBgGAJQgFAIgEALIAAAFIgBAGIABAHIAAAFQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgBgCAAgDIAAgFIgBgHIABgRIAAgSIAAgGIAAgFQABgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAABAJIAAAHQALgPAKAAQAKAAAEAJQADAHAAALIAAAHIAAAEIACAOIABANQAAAEgCABQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgFAAAAgGg");
	this.shape.setTransform(33.7,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAbQgJgHAAgPQAAgPAIgLQAIgNAOAAQAKAAAHAEQAIAEAAAJQAAAHgHAFIgNAGIgYAMQAEAFAFADQAGACAFAAIALgBQAHgDADgDQABgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAAHgMAFQgJAFgKAAQgNAAgJgIgAgMgQQgFAGgDALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_1.setTransform(26.7,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_2.setTransform(19.4,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAyQgDgCABgDQgDgHgBgGIgFgbIgEgaQgFAVgHANQgHARgCAKIAAACQABAEgDACIgFABQgJAAAAgIIgCgIIgHgfIgNgsIgBgCQAAgHAGABQAEAAADAEIAFAOIAHAbIAGAbQAHgQAHgVIAGgTQAFgOAFgBQAEABACAEQACAGADAUQABALADANIAGAZIAVg2IADgMIAEgMQADgDAEAAQAGAAAAAGIgCAGIgDAHIgDALIgTAtIgJAXQgCADgEAAQgDAAgDgBg");
	this.shape_3.setTransform(9.1,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.1,22.2);


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


(lib._throws = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape.setTransform(40.7,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAEASIgDgOIgBgOIgFALIgKAbQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAABQgCADgEAAQgFABgFgUIgEgaIgCgJIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAgBABAAQAFABABAFIABAJIABAJIAEAcQAHgTAIgaQACgGAEgBQAFABACAHIAEAYIAEAYIAFgSIAIghQABgFAFAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAACQgFAWgIAZIgGAMQgDACgDAAQgHABgEgSg");
	this.shape_1.setTransform(33.3,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_2.setTransform(25.2,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_3.setTransform(19,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_4.setTransform(12,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_5.setTransform(5.1,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.2,22.2);


(lib.the = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQAAgPAJgLQAIgNAOAAQAKAAAHAEQAIAEAAAJQAAAHgHAFIgOAGIgXAMQAEAFAFADQAFACAHAAIAKgBQAHgDADgDQACgDACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgLAFQgLAFgIAAQgOAAgJgIgAgMgQQgGAGgCALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape.setTransform(19.4,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_1.setTransform(12,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_2.setTransform(5.1,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,22.2);


(lib.Stacy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgDADgBQAAgBABAAQAAgBAAAAQABAAABAAQAAgBABAAQADAAABADQALAPAMAbIAJgVIAKgUQACgEADAAQABAAAAABQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgBAEIgWAvQgIAQgDANIgFALQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape.setTransform(33.7,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAcQgJgIAAgOQgBgMAJgNQAKgQAKAAQAHAAAIADQAJAEABAFQAAABgBAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDgBIgDgCQgEgDgJAAQgFAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAHAAQAEAAAFgCIAHgEIACgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIACAEQgBAFgJAEQgJAEgGAAQgLAAgJgIg");
	this.shape_1.setTransform(27.2,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_2.setTransform(20.5,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_3.setTransform(14.1,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAsQgMgGAAgJQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQADAAACADIAGAHQAFAEALAAQAIAAAJgFQALgFAAgKQAAgIgJgEQgIgEgKgBQgKAAgHgDQgJgFAAgKQAAgLAMgKQANgIAMAAQAGAAAIACQAKACAAAFQAAAFgGAAIgJgBIgKgBQgIAAgHAFQgIAEAAAHQAAAGAKACIAMABQAPABAIAIQAIAHAAAKQAAAQgOAJQgMAHgPAAQgMAAgKgEg");
	this.shape_4.setTransform(6.6,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,22.2);


(lib.shows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYA0QAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgaIAAgYIgBgZIgBgNQAAgEABgEQACgDAEAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIAAACIgBADQAGgEAFgBQAEgCAEAAQANAAAGAMQAFAIAAAPQAAANgHAKQgIAJgNAAQgFAAgIgCIAAAeQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFghIgJAHIABAdQAHADAGAAQAIAAAEgGQAEgEAAgJQAAgLgDgGQgDgFgGAAQgEAAgFACg");
	this.shape.setTransform(52.2,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgIAAgGgDQgGgEgBgIQgDgRABgMQAAgJACgLQAAgFAGAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAJIgBAKIAAARIACAMIAFACIAEABQAIAAAJgDIgBgNIAAgLQAAgOACgKQAAgGAGAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAIgCAYIAAANIAAAOIABAEIAAAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGg");
	this.shape_1.setTransform(45.3,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_2.setTransform(34.6,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAEASIgDgOIgBgOIgFALIgKAbQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAABQgCADgEAAQgFABgFgUIgEgaIgCgJIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAgBABAAQAFABABAFIABAJIABAJIAEAcQAHgTAIgaQACgGAEgBQAFABACAHIAEAYIAEAYIAFgSIAIghQABgFAFAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAACQgFAWgIAZIgGAMQgDACgDAAQgHABgEgSg");
	this.shape_3.setTransform(27.2,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_4.setTransform(19.2,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_5.setTransform(12.2,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_6.setTransform(5,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.8,22.2);


(lib.Sam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAlQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIgCgXIgCgWQAAgGgBgEQgFACgFAEIgHAJIgDAEIgBAKIgBALIABAFIABAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgHAAAAgQIABgLIAAgLIAAgKIgBgKQAAgOAHAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQACACAAADIAAADIAAAEIAAAHQADgHAGgFQAHgGAEAAQAKAAADAKQAEgFAEgCQAFgCAGAAQALAAAEALIACASIAFAjQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgGAAAAgGIgDgUIgCgSQAAgFgCgEQgCgGgDAAQgCAAgGAEIgIAGIAAAMIACAQIABARQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape.setTransform(22.8,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_1.setTransform(14.4,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAsQgMgGAAgJQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQADAAACADIAGAHQAFAEALAAQAIAAAJgFQALgFAAgKQAAgIgJgEQgIgEgKgBQgKAAgHgDQgJgFAAgKQAAgLAMgKQANgIAMAAQAGAAAIACQAKACAAAFQAAAFgGAAIgJgBIgKgBQgIAAgHAFQgIAEAAAHQAAAGAKACIAMABQAPABAIAIQAIAHAAAKQAAAQgOAJQgMAHgPAAQgMAAgKgEg");
	this.shape_2.setTransform(6.6,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,22.2);


(lib.sack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AARAxIgKgPIgLgQIgLAIIAAAUQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgJIAAgPIABgQIAAgVIABgWIgBgHIAAgHQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAHIABAHIgBAVIAAAVQAIgHAIgHIANgOQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgTATIAOATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgEAAgBgDg");
	this.shape.setTransform(25.7,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAcQgJgIAAgOQAAgMAIgNQAKgQAKAAQAHAAAIADQAKAEAAAFQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDgBIgDgCQgEgDgJAAQgFAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAHAAQAFAAADgCIAIgEIACgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIABAEQABAFgKAEQgJAEgGAAQgMAAgIgIg");
	this.shape_1.setTransform(18.4,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_2.setTransform(11.7,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_3.setTransform(5,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.9,22.2);


(lib.returns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape.setTransform(44.3,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAfIgDgOIgBgOIABgFIAAgGQAAgNgFAAQgHgBgGAJQgGAIgDALIAAAFIgBAGIABAHIAAAFQAAADgBACQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgBgCAAgDIAAgFIgBgHIABgRIABgSIAAgGIAAgFQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAGAAAAAJIAAAHQALgPAKAAQAKAAAEAJQADAHAAALIAAAHIAAAEIACAOIABANQAAAEgCABQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgFAAAAgGg");
	this.shape_1.setTransform(38.1,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_2.setTransform(31.6,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgIAAgGgDQgGgEgBgIQgCgRAAgMQAAgJACgLQAAgFAGAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAJIgBAKIAAARIACAMIAFACIAEABQAHAAAKgDIgBgNIAAgLQABgOABgKQAAgGAGAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAIgCAYIAAANIAAAOIABAEIAAAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgGg");
	this.shape_3.setTransform(25,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_4.setTransform(18.4,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAbQgJgHAAgPQgBgPAJgLQAIgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgNAGIgYAMQAEAFAFADQAGACAFAAIALgBQAHgDADgDQABgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQgBAHgKAFQgKAFgKAAQgNAAgJgIgAgMgQQgFAGgDALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_5.setTransform(12,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_6.setTransform(5.4,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.9,22.2);


(lib.Pro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape.setTransform(18.3,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_1.setTransform(12.1,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAxQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgTIABgaIACgZIAAgJIAAgJQACgGAFAAIAFgBIAKAAQAKABAKAHQAMAJAAAMQAAAQgMAIQgLAJgOgBIgIAAIAAAiQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAgAgOglIAAAMIgBAZIAHAAQAKAAAHgFQAIgGAAgKQAAgHgIgFQgHgFgHAAIgFAAIgEABg");
	this.shape_2.setTransform(5.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.1,22.2);


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


(lib.lunch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape.setTransform(29.7,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAcQgKgIAAgOQAAgMAJgNQAKgQALAAQAGAAAHADQAKAEAAAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBIgCgCQgEgDgIAAQgGAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAIAAQADAAAFgCIAHgEIADgBQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABIACAEQAAAFgLAEQgIAEgFAAQgMAAgJgIg");
	this.shape_1.setTransform(22.5,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQAfIgCgOIgBgOIAAgFIAAgGQAAgNgFAAQgHgBgFAJQgHAIgCALIgBAFIgBAGIABAHIAAAFQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgCgCAAgDIAAgFIAAgHIABgRIAAgSIAAgGIAAgFQAAgBABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAABAJIAAAHQALgPAKAAQAKAAAEAJQADAHAAALIAAAHIAAAEIABAOIACANQAAAEgCABQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgGAAAAgGg");
	this.shape_2.setTransform(15.9,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgJAAgFgDQgGgEgBgIQgDgRAAgMQABgJACgLQAAgFAFAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBAJIgBAKIABARIABAMIAFACIAEABQAHAAAKgDIgBgNIAAgLQABgOABgKQABgGAFAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABABAAAAIgCAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgGAAgBgGg");
	this.shape_3.setTransform(9,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_4.setTransform(3.8,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.5,22.2);


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


(lib.it = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape.setTransform(8.7,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgBgLIAAgMIABgOIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgEgiQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQACACABAEQgBADgCACQgCACgDAAQgCAAgDgCg");
	this.shape_1.setTransform(4,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,22.2);


(lib.If = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgvBPQgCgDAAgEIAAg6IABg5IAAgMIAAgNQAAgFADgCQACgDAEgBQAEAAACACIAWgDIAQgBQALAAAPADQATAFAAAHQAAAEgCADQgDADgEAAIgEAAQgMgFgUAAIgOABIgTADIgBAqQATgFAKAAIAeABQAJACAAAIQAAAFgDADQgDACgEAAIgPgBIgOAAQgHAAgWAFIgBBDQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape.setTransform(22.5,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgqBIQgDgDAAgEQAAgEADgDQADgDAEAAIAUgCIABgSIAAgRIgBgQQAAgWADgiIgNABIgMAAQgFAAgDgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAdAFQAJABAAAJQAAAFgEACQgCADgEAAIgQgCIgPgCQgCAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgQAAIgSACIgTACQgEAAgDgDg");
	this.shape_1.setTransform(10.4,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0066").s().p("AgvBPQgCgDAAgEIAAg6IABg5IAAgMIAAgNQAAgFADgCQACgDAEgBQAEAAACACIAWgDIAQgBQALAAAPADQATAFAAAHQAAAEgCADQgDADgEAAIgEAAQgMgFgUAAIgOABIgTADIgBAqQATgFAKAAIAeABQAJACAAAIQAAAFgDADQgDACgEAAIgPgBIgOAAQgHAAgWAFIgBBDQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_2.setTransform(22.5,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0066").s().p("AgqBIQgDgDAAgEQAAgEADgDQADgDAEAAIAUgCIABgSIAAgRIgBgQQAAgWADgiIgNABIgMAAQgFAAgDgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAdAFQAJABAAAJQAAAFgEACQgCADgEAAIgQgCIgPgCQgCAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgQAAIgSACIgTACQgEAAgDgDg");
	this.shape_3.setTransform(10.4,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,0,27.3,31.9);


(lib.hamburgers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape.setTransform(70.2,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_1.setTransform(64.3,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAGACAFAAIALgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQAAAHgLAFQgKAFgJAAQgNAAgJgIgAgMgQQgFAGgDALIAUgIQAKgGAFgEQgFgFgKAAQgHAAgFAGg");
	this.shape_2.setTransform(57.6,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAxQgIgCAAgEQAAgGAFAAIAIABIAMABQALAAAFgMQADgHAAgRQgDAHgFADQgFADgFAAQgMAAgHgHQgHgJAAgLQAAgRAKgKQAKgMARAAQAFAAAEACQAEABADADQAGABAAAHIgBAMIgCAMIgBAVQgBAMgCAIQgDALgGAFQgIAFgNABQgIAAgGgCgAgLgfQgGAIAAALQAAAJAEAEQADAFAHAAQAGgBAGgFQAFgIABgGIADgVIgFgDIgGgBQgLgBgHAJg");
	this.shape_3.setTransform(50.3,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_4.setTransform(44.1,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgJAAgFgDQgGgEgBgIQgCgRgBgMQAAgJACgLQABgFAGAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIgBAJIgBAKIAAARIADAMIAEACIAEABQAHAAAKgDIAAgNIAAgLQAAgOABgKQAAgGAGAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAgBgGg");
	this.shape_5.setTransform(37.4,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAwQgCADgDAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgFIAAgFIAAgUIgBgTIABgSIAAgRQAAgEABgDQACgEAEAAQAFAAAAAFIgBADIAAADIAAANIAAARQAFgEAFgCQAFgCAEAAQANAAAJALQAIAIAAAPQAAAOgKAKQgJAKgNAAQgJAAgIgDgAgJgCIgJAFIAAALIAAAKIAAALIAIADIAJABQAIAAAGgGQAGgHAAgJQAAgKgFgGQgFgGgIAAQgFAAgFADg");
	this.shape_6.setTransform(30.3,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgDAlQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIgCgXIgCgWQAAgGgBgEQgFACgFAEIgHAJIgDAEIgBAKIgBALIABAFIABAFQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgHAAAAgQIABgLIAAgLIAAgKIgBgKQAAgOAHAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQACACAAADIAAADIAAAEIAAAHQADgHAGgFQAHgGAEAAQAKAAADAKQAEgFAEgCQAFgCAGAAQALAAAEALIACASIAFAjQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgGAAAAgGIgDgUIgCgSQAAgFgCgEQgCgGgDAAQgCAAgGAEIgIAGIAAAMIACAQIABARQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_7.setTransform(21.3,13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_8.setTransform(12.9,13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_9.setTransform(5.9,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.8,22.2);


(lib.hacky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgDADgBQAAgBABAAQAAgBAAAAQABAAABAAQAAgBABAAQADAAABADQALAPAMAbIAJgVIAKgUQACgEADAAQABAAAAABQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAvQgIAQgDANIgFALQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape.setTransform(33.1,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARAxIgKgPIgKgQIgMAIIgBAUQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgHAAAAgJIAAgPIABgQIAAgVIABgWIgBgHIAAgHQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAHIABAHIgBAVIAAAVQAIgHAHgHIAPgOQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgTATIANATQAKANAAAEQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCABgDAAQgDAAgCgDg");
	this.shape_1.setTransform(26.8,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAcQgJgIAAgOQgBgMAJgNQAKgQAKAAQAHAAAIADQAJAEABAFQAAABgBAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDgBIgDgCQgEgDgJAAQgFAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAHAAQAEAAAEgCIAIgEIACgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIACAEQgBAFgJAEQgJAEgGAAQgLAAgJgIg");
	this.shape_2.setTransform(19.6,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_3.setTransform(12.9,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_4.setTransform(5.9,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.8,22.2);


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


(lib.grills = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape.setTransform(28.9,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_1.setTransform(24.2,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_2.setTransform(20.6,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgBgLIAAgMIABgOIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAOIgBAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgDgiQgDgCAAgDQAAgEADgCQACgCACAAQADAAACACQACACABAEQgBADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_3.setTransform(17.2,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_4.setTransform(12.3,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAxQgIgCAAgEQAAgGAFAAIAIABIAMABQALAAAFgMQADgHAAgRQgDAHgFADQgFADgFAAQgMAAgHgHQgHgJAAgLQAAgRAKgKQAKgMARAAQAFAAAEACQAEABADADQAGABAAAHIgBAMIgCAMIgBAVQgBAMgCAIQgDALgGAFQgIAFgNABQgIAAgGgCgAgLgfQgGAIAAALQAAAJAEAEQADAFAHAAQAGgBAGgFQAFgIABgGIADgVIgFgDIgGgBQgLgBgHAJg");
	this.shape_5.setTransform(5.4,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.5,22.2);


(lib._for = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape.setTransform(18.8,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_1.setTransform(11.9,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJA2QgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_2.setTransform(5.2,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,22.2);


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


(lib.Buffy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgDADgBQAAgBABAAQAAgBAAAAQABAAABAAQAAgBABAAQADAAABADQALAPAMAbIAJgVIAKgUQACgEADAAQABAAAAABQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgBAEIgWAvQgIAQgDANIgFALQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape.setTransform(33.4,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJA2QgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_1.setTransform(26.8,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJA2QgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_2.setTransform(20.2,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgIAAgGgDQgGgEgBgIQgCgRgBgMQAAgJACgLQABgFAFAAQABAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBAJIgBAKIABARIACAMIAEACIAEABQAIAAAJgDIAAgNIAAgLQAAgOABgKQABgGAFAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAgBgGg");
	this.shape_3.setTransform(13.7,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAxQgCgDAAgDIAAgSIABgZIABgaIABgSQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAJgCALAAQAKAAAKAHQAMAJAAANQAAAQgNAIQAKAFAFAFQAEAEAAAGQAAAIgIAHQgGAFgGADQgNAFgXAAQgCAAgDgCgAgTAZIAAANQARAAAKgEIAIgGQAEgDAAgCQAAgDgIgDIgMgFIgGgBIgCAAIgDAAIgHAAIgBAOgAgQglIAAALIgBAZIAJAAQAJAAAGgGQAHgFAAgJQAAgGgHgFQgHgGgGAAIgKABg");
	this.shape_4.setTransform(6.4,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.1,22.2);


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


(lib.always = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape.setTransform(37.5,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgDADgBQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQADAAABADQALAPAMAbIAJgVIAKgUQACgEADAAQABAAAAABQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAvQgIAQgDANIgFALQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_1.setTransform(31,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_2.setTransform(24.5,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAEASIgDgOIgBgOIgFALIgKAbQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAABQgCADgEAAQgFABgFgUIgEgaIgCgJIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAgBABAAQAFABABAFIABAJIABAJIAEAcQAHgTAIgaQACgGAEgBQAFABACAHIAEAYIAEAYIAFgSIAIghQABgFAFAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAACQgFAWgIAZIgGAMQgDACgDAAQgHABgEgSg");
	this.shape_3.setTransform(16.7,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_4.setTransform(10.5,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_5.setTransform(5.4,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.1,22.2);


(lib.WhenBuffy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHANQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgKIAFgMQACgCACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIgJAVQgBAEgDgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBg");
	this.shape.setTransform(187.5,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_1.setTransform(182,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_2.setTransform(176.1,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQAAgPAIgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgXAMQAEAFAFADQAFACAHAAIAKgBQAHgDACgDQADgDACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgLAFQgLAFgIAAQgOAAgJgIgAgMgQQgGAGgCALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_3.setTransform(169.3,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAxQgIgCAAgFQAAgFAFAAIAIABIAMABQALAAAFgMQADgIAAgPQgDAFgFAEQgFADgFAAQgMAAgHgIQgHgHAAgMQAAgRAKgKQAKgLARAAQAFAAAEABQAEABADADQAGABAAAHIgBAMIgCAMIgBAUQgBANgCAIQgDALgGAEQgIAHgNAAQgIgBgGgBgAgLgfQgGAHAAAMQAAAJAEAEQADAEAHABQAGAAAGgHQAFgGABgHIADgWIgFgCIgGgBQgLAAgHAIg");
	this.shape_4.setTransform(162.1,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_5.setTransform(155.8,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgIAAgGgDQgGgEgBgIQgCgRAAgMQAAgJACgLQAAgFAGAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAJIgBAKIAAARIACAMIAFACIAEABQAHAAAKgDIgBgNIAAgLQABgOABgKQAAgGAGAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAIgCAYIAAANIAAAOIABAEIAAAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGg");
	this.shape_6.setTransform(149.2,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAwQgCADgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgFIAAgFIAAgUIgBgTIABgSIAAgRQAAgEABgDQACgEAEAAQAFAAAAAFIgBADIAAADIAAANIAAARQAFgEAFgCQAFgCAEAAQANAAAJALQAIAIAAAPQAAAOgKAKQgJAKgNAAQgJAAgIgDgAgJgCIgJAFIAAALIAAAKIAAALIAIADIAJABQAIAAAGgGQAGgHAAgJQAAgKgFgGQgFgGgIAAQgFAAgFADg");
	this.shape_7.setTransform(142,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDAlQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgCgXIgCgWQAAgGgBgEQgFACgFAEIgHAJIgDAEIgBAKIgBALIABAFIABAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgHAAAAgQIABgLIAAgLIAAgKIgBgKQAAgOAHAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACACAAADIAAADIAAAEIAAAHQADgHAGgFQAHgGAEAAQAKAAADAKQAEgFAEgCQAFgCAGAAQALAAAEALIACASIAFAjQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgGAAAAgGIgDgUIgCgSQAAgFgCgEQgCgGgDAAQgCAAgGAEIgIAGIAAAMIACAQIABARQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_8.setTransform(133.1,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_9.setTransform(124.6,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_10.setTransform(117.6,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_11.setTransform(106.5,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_12.setTransform(101.8,0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_13.setTransform(98.2,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgFAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgBgLIAAgMIABgOIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAOIgBAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgDgiQgCgCAAgDQAAgEACgCQACgCACAAQADAAACACQADACgBAEQABADgDACQgCACgDAAQgCAAgCgCg");
	this.shape_14.setTransform(94.8,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_15.setTransform(89.9,2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgVAxQgIgCAAgFQAAgFAFAAIAIABIAMABQALAAAFgMQADgIAAgPQgDAFgFAEQgFADgFAAQgMAAgHgIQgHgHAAgMQAAgRAKgKQAKgLARAAQAFAAAEABQAEABADADQAGABAAAHIgBAMIgCAMIgBAUQgBANgCAIQgDALgGAEQgIAHgNAAQgIgBgGgBgAgLgfQgGAHAAAMQAAAJAEAEQADAEAHABQAGAAAGgHQAFgGABgHIADgWIgFgCIgGgBQgLAAgHAIg");
	this.shape_16.setTransform(83,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgCADgCQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQADAAABACQALAPAMAcIAJgXIAKgTQACgDADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgBAEIgWAvQgIAQgDAMIgFAMQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_17.setTransform(72.2,3.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgJA2QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_18.setTransform(65.6,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgJA2QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_19.setTransform(59,0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AAOAeQgIAEgJAAQgIAAgGgDQgGgEgBgIQgCgRgBgMQAAgJACgLQABgFAFAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBAJIgBAKIABARIACAMIAEACIAEABQAIAAAJgDIAAgNIAAgLQgBgOACgKQAAgGAGAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgGAAgBgGg");
	this.shape_20.setTransform(52.5,2.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgdAxQgCgDAAgDIAAgSIABgZIABgaIABgSQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAJgCALAAQAKAAAKAHQAMAJAAANQAAAQgNAIQAKAFAFAFQAEAEAAAGQAAAIgIAHQgGAFgGADQgNAFgXAAQgCAAgDgCgAgTAZIAAANQARAAAKgEIAIgGQAEgDAAgCQAAgDgIgDIgMgFIgGgBIgCAAIgDAAIgHAAIgBAOgAgQglIAAALIgBAZIAJAAQAJAAAGgGQAHgFAAgJQAAgGgHgFQgHgGgGAAIgKABg");
	this.shape_21.setTransform(45.2,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAQAfIgDgOIgBgOIABgFIAAgGQAAgNgFAAQgHAAgGAIQgFAIgEALIAAAGIgBAFIABAHIAAAFQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgBgCAAgDIAAgFIgBgHIABgRIAAgSIAAgFIAAgGQABgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAABAIIAAAIQALgPAKAAQAKABAEAIQADAHAAALIAAAGIAAAGIACANIABAOQAAACgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgFAAAAgGg");
	this.shape_22.setTransform(33.7,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVAbQgJgHAAgPQAAgPAIgLQAIgNAOAAQAKAAAHAEQAIAEAAAJQAAAHgHAFIgNAGIgYAMQAEAFAFADQAGACAFAAIALgBQAHgDADgDQABgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAAHgMAFQgJAFgKAAQgNAAgJgIgAgMgQQgFAGgDALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_23.setTransform(26.7,2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_24.setTransform(19.4,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAOAyQgDgCABgDQgDgHgBgGIgFgbIgEgaQgFAVgHANQgHASgCAJIAAADQABADgDABIgFACQgJAAAAgIIgCgHIgHggIgNgsIgBgCQAAgHAGAAQAEABADAEIAFANIAHAcIAGAbQAHgPAHgXIAGgSQAFgPAFAAQAEAAACAFQACAGADAUQABALADANIAGAZIAVg3IADgLIAEgMQADgDAEgBQAGABAAAGIgCAHIgDAGIgDAMIgTAtIgJAVQgCAEgEABQgDAAgDgCg");
	this.shape_25.setTransform(9.1,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_26.setTransform(106.5,1.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_27.setTransform(101.8,0.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_28.setTransform(98.2,0.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgBgLIAAgMIABgOIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAOIgBAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgDgiQgCgCAAgDQAAgEACgCQACgCACAAQADAAACACQADACgBAEQABADgDACQgCACgDAAQgCAAgCgCg");
	this.shape_29.setTransform(94.8,0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_30.setTransform(89.9,2.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgVAxQgIgCAAgFQAAgFAFAAIAIABIAMABQALAAAFgMQADgIAAgPQgDAFgFAEQgFADgFAAQgMAAgHgIQgHgHAAgMQAAgRAKgKQAKgLARAAQAFAAAEABQAEABADADQAGABAAAHIgBAMIgCAMIgBAUQgBANgCAIQgDALgGAEQgIAHgNAAQgIgBgGgBgAgLgfQgGAHAAAMQAAAJAEAEQADAEAHABQAGAAAGgHQAFgGABgHIADgWIgFgCIgGgBQgLAAgHAIg");
	this.shape_31.setTransform(83,3.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgCADgCQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQADAAABACQALAPAMAcIAJgXIAKgTQACgDADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgBAEIgWAvQgIAQgDAMIgFAMQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_32.setTransform(72.2,3.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgJA2QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_33.setTransform(65.6,0.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgJA2QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_34.setTransform(59,0.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgIAAgGgDQgGgEgBgIQgCgRgBgMQAAgJACgLQABgFAFAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBAJIgBAKIABARIACAMIAEACIAEABQAIAAAJgDIAAgNIAAgLQgBgOACgKQAAgGAGAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgGAAgBgGg");
	this.shape_35.setTransform(52.5,2.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgdAxQgCgDAAgDIAAgSIABgZIABgaIABgSQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAJgCALAAQAKAAAKAHQAMAJAAANQAAAQgNAIQAKAFAFAFQAEAEAAAGQAAAIgIAHQgGAFgGADQgNAFgXAAQgCAAgDgCgAgTAZIAAANQARAAAKgEIAIgGQAEgDAAgCQAAgDgIgDIgMgFIgGgBIgCAAIgDAAIgHAAIgBAOgAgQglIAAALIgBAZIAJAAQAJAAAGgGQAHgFAAgJQAAgGgHgFQgHgGgGAAIgKABg");
	this.shape_36.setTransform(45.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// Layer 2
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.8)").s().p("AsEB0QlAgwABhEQgBhDFAgwQFBgwHDAAQHEAAFAAwQFBAwAABDQAABElBAwQlAAwnEAAQnDAAlBgwg");
	this.shape_37.setTransform(95,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-15.6,218.5,32.8);


(lib.SamAlways1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAGQgDgCAAgEQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAAEgDACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(135.5,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1.setTransform(130.7,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgBgLIAAgMIABgOIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAOIAAAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgEgiQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQACACABAEQgBADgCACQgCACgDAAQgCAAgDgCg");
	this.shape_2.setTransform(126,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_3.setTransform(116.7,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAfIgBgOIgBgOIAAgFIAAgGQAAgNgFAAQgHAAgFAIQgHAIgCALIgBAGIAAAFIAAAHIAAAFQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgCgCAAgDIAAgFIAAgHIABgRIAAgSIAAgFIAAgGQAAgBABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAQAGAAABAIIAAAIQALgPAKAAQAKABAEAIQADAHAAALIAAAGIAAAGIABANIACAOQAAACgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgGAAgBgGg");
	this.shape_4.setTransform(110.5,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_5.setTransform(104,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgIAAgGgDQgGgEgBgIQgCgRgBgMQAAgJACgLQABgFAGAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBAJIgBAKIABARIACAMIAEACIAEABQAIAAAJgDIAAgNIAAgLQAAgOABgKQABgGAFAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAgBgGg");
	this.shape_6.setTransform(97.4,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_7.setTransform(90.8,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAFACAHAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgLAFQgKAFgJAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_8.setTransform(84.4,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_9.setTransform(77.8,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_10.setTransform(67.2,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgQAyQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgCADgCQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQADAAABACQALAPAMAcIAJgXIAKgTQACgDADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAvQgIAQgDAMIgFAMQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_11.setTransform(60.6,3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_12.setTransform(54.1,2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AAEATIgDgPIgBgOIgFAMIgKAaQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCADgEAAQgFABgFgUIgEgaIgCgJIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAFAAABAEIABAKIABAJIAEAcQAHgTAIgaQACgGAEAAQAFAAACAHIAEAXIAEAZIAFgSIAIgiQABgDAFAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABIAAADQgFAUgIAaIgGALQgDADgDAAQgHAAgEgQg");
	this.shape_13.setTransform(46.4,2.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_14.setTransform(40.1,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBAAAAABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_15.setTransform(35,2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgDAlQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgCgXIgCgWQAAgGgBgEQgFACgFAEIgHAJIgDAEIgBAKIgBALIABAFIABAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgHAAAAgQIABgLIAAgLIAAgKIgBgKQAAgOAHAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACACAAADIAAADIAAAEIAAAHQADgHAGgFQAHgGAEAAQAKAAADAKQAEgFAEgCQAFgCAGAAQALAAAEALIACASIAFAjQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgGAAAAgGIgDgUIgCgSQAAgFgCgEQgCgGgDAAQgCAAgGAEIgIAGIAAAMIACAQIABARQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_16.setTransform(22.8,2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_17.setTransform(14.4,2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgZAsQgMgGAAgJQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQADAAACADIAGAHQAFAEALAAQAIAAAJgFQALgFAAgKQAAgIgJgEQgIgEgKgBQgKAAgHgDQgJgFAAgKQAAgLAMgKQANgIAMAAQAGAAAIACQAKACAAAFQAAAFgGAAIgJgBIgKgBQgIAAgHAFQgIAEAAAHQAAAGAKACIAMABQAPABAIAIQAIAHAAAKQAAAQgOAJQgMAHgPAAQgMAAgKgEg");
	this.shape_18.setTransform(6.6,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_19.setTransform(67.2,1.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgCADgCQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQADAAABACQALAPAMAcIAJgXIAKgTQACgDADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAvQgIAQgDAMIgFAMQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_20.setTransform(60.6,3.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_21.setTransform(54.1,2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAEATIgDgPIgBgOIgFAMIgKAaQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCADgEAAQgFABgFgUIgEgaIgCgJIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAFAAABAEIABAKIABAJIAEAcQAHgTAIgaQACgGAEAAQAFAAACAHIAEAXIAEAZIAFgSIAIgiQABgDAFAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABIAAADQgFAUgIAaIgGALQgDADgDAAQgHAAgEgQg");
	this.shape_22.setTransform(46.4,2.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_23.setTransform(40.1,0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBAAAAABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_24.setTransform(35,2.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgDAlQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgCgXIgCgWQAAgGgBgEQgFACgFAEIgHAJIgDAEIgBAKIgBALIABAFIABAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgHAAAAgQIABgLIAAgLIAAgKIgBgKQAAgOAHAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACACAAADIAAADIAAAEIAAAHQADgHAGgFQAHgGAEAAQAKAAADAKQAEgFAEgCQAFgCAGAAQALAAAEALIACASIAFAjQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgGAAAAgGIgDgUIgCgSQAAgFgCgEQgCgGgDAAQgCAAgGAEIgIAGIAAAMIACAQIABARQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_25.setTransform(22.8,2.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_26.setTransform(14.4,2.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZAsQgMgGAAgJQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQADAAACADIAGAHQAFAEALAAQAIAAAJgFQALgFAAgKQAAgIgJgEQgIgEgKgBQgKAAgHgDQgJgFAAgKQAAgLAMgKQANgIAMAAQAGAAAIACQAKACAAAFQAAAFgGAAIgJgBIgKgBQgIAAgHAFQgIAEAAAHQAAAGAKACIAMABQAPABAIAIQAIAHAAAKQAAAQgOAJQgMAHgPAAQgMAAgKgEg");
	this.shape_27.setTransform(6.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// Layer 3
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(214,247,254,0.651)").s().p("AAACMQlhAAj6gpQj7gpAAg6QAAg5D7gpQD6gpFhAAQFiAAD6ApQD7ApAAA5QAAA6j7ApQj6ApliAAIAAAAg");
	this.shape_28.setTransform(69.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-13.6,170.9,28);


(lib.Proshows1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgCACgCQACgDADAAQADAAACADQADACAAACQAAAEgDACQgCACgDAAQgDAAgCgCg");
	this.shape.setTransform(139.8,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_1.setTransform(134.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAcQgJgIAAgOQAAgMAIgNQAKgQAKAAQAHAAAIADQAKAEAAAFQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDgBIgDgCQgEgDgJAAQgFAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAHAAQAFAAADgCIAIgEIACgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIACAEQAAAFgKAEQgJAEgGAAQgMAAgIgIg");
	this.shape_2.setTransform(127.3,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPAfIgCgOIgBgOIABgFIAAgGQAAgNgFAAQgHAAgFAIQgGAIgEALIAAAGIAAAFIAAAHIAAAFQAAADgBACQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgCgCAAgDIAAgFIgBgHIABgRIABgSIAAgFIAAgGQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAQAHAAAAAIIAAAIQALgPAKAAQAKABAEAIQADAHAAALIAAAGIAAAGIACANIABAOQAAACgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgFAAgBgGg");
	this.shape_3.setTransform(120.7,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgJAAgFgDQgGgEgBgIQgDgRABgMQAAgJABgLQABgFAGAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAJIgBAKIAAARIADAMIAEACIAEABQAIAAAJgDIgBgNIAAgLQAAgOACgKQAAgGAGAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAYIAAANIAAAOIABAEIAAAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGg");
	this.shape_4.setTransform(113.8,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_5.setTransform(108.6,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_6.setTransform(100,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_7.setTransform(93.1,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJA2QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_8.setTransform(86.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYA0QAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgaIAAgXIgBgaIgBgNQAAgEABgDQACgFAEAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIAAACIgBADQAGgEAFgBQAEgCAEAAQANAAAGAMQAFAIAAAQQAAAMgHAJQgIAKgNgBQgFAAgIgBIAAAeQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFghIgJAHIABAdQAHADAGAAQAIAAAEgGQAEgEAAgIQAAgMgDgFQgDgHgGAAQgEABgFACg");
	this.shape_9.setTransform(75.9,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgIAAgGgDQgGgEgBgIQgCgRAAgMQAAgJACgLQAAgFAGAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAJIgBAKIAAARIACAMIAFACIAEABQAHAAAKgDIgBgNIAAgLQABgOABgKQAAgGAGAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAIgCAYIAAANIAAAOIABAEIAAAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGg");
	this.shape_10.setTransform(69.1,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_11.setTransform(58.4,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AAEATIgDgPIgBgOIgFAMIgKAaQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCADgEAAQgFABgFgUIgEgaIgCgJIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAFAAABAEIABAKIABAJIAEAcQAHgTAIgaQACgGAEAAQAFAAACAHIAEAXIAEAZIAFgSIAIgiQABgDAFAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAADQgFAUgIAaIgGALQgDADgDAAQgHAAgEgQg");
	this.shape_12.setTransform(51,2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_13.setTransform(42.9,2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_14.setTransform(36,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_15.setTransform(28.8,1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_16.setTransform(18.3,2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_17.setTransform(12.1,2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgaAxQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgTIABgaIACgaIAAgJIAAgJQACgFAFAAIAFgBIAKAAQAKAAAKAIQAMAJAAANQAAAPgMAIQgLAJgOgBIgIAAIAAAiQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAgAgOglIAAALIgBAaIAHAAQAKAAAHgFQAIgGAAgJQAAgIgIgFQgHgFgHABIgFAAIgEAAg");
	this.shape_18.setTransform(5.5,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_19.setTransform(58.4,1.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAEATIgDgPIgBgOIgFAMIgKAaQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCADgEAAQgFABgFgUIgEgaIgCgJIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAFAAABAEIABAKIABAJIAEAcQAHgTAIgaQACgGAEAAQAFAAACAHIAEAXIAEAZIAFgSIAIgiQABgDAFAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAADQgFAUgIAaIgGALQgDADgDAAQgHAAgEgQg");
	this.shape_20.setTransform(51,2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_21.setTransform(42.9,2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_22.setTransform(36,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_23.setTransform(28.8,1.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_24.setTransform(18.3,2.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_25.setTransform(12.1,2.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgaAxQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgTIABgaIACgaIAAgJIAAgJQACgFAFAAIAFgBIAKAAQAKAAAKAIQAMAJAAANQAAAPgMAIQgLAJgOgBIgIAAIAAAiQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAgAgOglIAAALIgBAaIAHAAQAKAAAHgFQAIgGAAgJQAAgIgIgFQgHgFgHABIgFAAIgEAAg");
	this.shape_26.setTransform(5.5,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// Layer 3
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(214,247,254,0.541)").s().p("Ao7BhQjsgoAAg5QAAg4DsgoQDtgoFOAAQFPAADsAoQDtAoAAA4QAAA5jtAoQjsAnlPAAQlOAAjtgng");
	this.shape_27.setTransform(68.5,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-12.6,161.7,27.3);


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


(lib.IfStacy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHANQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgKIAFgMQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgJAVQAAAEgDgBQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape.setTransform(196.7,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARAxIgKgPIgLgQIgLAIIAAAUQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgJIABgPIABgQIAAgVIAAgWIAAgHIAAgHQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIABAHIAAAHIAAAVIgBAVQAJgHAIgHIANgOQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgTATIAOATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgEAAgBgDg");
	this.shape_1.setTransform(191.5,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAcQgKgIAAgOQAAgMAJgNQAKgQAKAAQAHAAAHADQALAEgBAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBIgCgCQgEgDgJAAQgFAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAIAAQADAAAEgCIAIgEIADgBQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABIABAEQABAFgLAEQgIAEgFAAQgNAAgIgIg");
	this.shape_2.setTransform(184.2,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_3.setTransform(177.5,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_4.setTransform(170.8,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgCADgCQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQADAAABACQALAPAMAcIAJgXIAKgTQACgDADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgBAEIgWAvQgIAQgDAMIgFAMQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_5.setTransform(160.4,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AARAxIgKgPIgLgQIgLAIIAAAUQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgJIABgPIABgQIAAgVIAAgWIAAgHIAAgHQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABABAAIAAAHIAAAHIAAAVIAAAVQAJgHAHgHIANgOQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgTATIAOATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgEAAgBgDg");
	this.shape_6.setTransform(154.1,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAcQgKgIAAgOQAAgMAJgNQAKgQAKAAQAHAAAIADQAKAEgBAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBIgCgCQgEgDgJAAQgFAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAIAAQADAAAEgCIAIgEIADgBQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABIABAEQABAFgLAEQgIAEgFAAQgNAAgIgIg");
	this.shape_7.setTransform(146.9,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_8.setTransform(140.2,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_9.setTransform(133.2,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAbQgKgHABgPQAAgPAHgLQAJgNAOAAQAKAAAHAEQAIAEAAAJQAAAHgHAFIgNAGIgXAMQADAFAFADQAGACAFAAIALgBQAHgDACgDQADgDACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAAHgMAFQgJAFgKAAQgNAAgJgIgAgMgQQgFAGgDALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_10.setTransform(122,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_11.setTransform(114.7,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_12.setTransform(107.7,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_13.setTransform(97.4,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AAEATIgDgPIgBgOIgFAMIgKAaQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCADgEAAQgFABgFgUIgEgaIgCgJIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAFAAABAEIABAKIABAJIAEAcQAHgTAIgaQACgGAEAAQAFAAACAHIAEAXIAEAZIAFgSIAIgiQABgDAFAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABIAAADQgFAUgIAaIgGALQgDADgDAAQgHAAgEgQg");
	this.shape_14.setTransform(90,2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_15.setTransform(82,2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_16.setTransform(75.8,2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_17.setTransform(68.8,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_18.setTransform(61.8,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgCADgCQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQADAAABACQALAPAMAcIAJgXIAKgTQACgDADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAvQgIAQgDAMIgFAMQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_19.setTransform(51.3,3.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgRAcQgKgIAAgOQAAgMAJgNQAKgQALAAQAGAAAHADQALAEgBAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBIgCgCQgEgDgIAAQgGAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAIAAQADAAAFgCIAHgEIADgBQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABIABAEQAAAFgKAEQgIAEgFAAQgNAAgIgIg");
	this.shape_20.setTransform(44.8,2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_21.setTransform(38.1,2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_22.setTransform(31.7,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgZAsQgMgGAAgJQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQADAAACADIAGAHQAFAEALAAQAIAAAJgFQALgFAAgKQAAgIgJgEQgIgEgKgBQgKAAgHgDQgJgFAAgKQAAgLAMgKQANgIAMAAQAGAAAIACQAKACAAAFQAAAFgGAAIgJgBIgKgBQgIAAgHAFQgIAEAAAHQAAAGAKACIAMABQAPABAIAIQAIAHAAAKQAAAQgOAJQgMAHgPAAQgMAAgKgEg");
	this.shape_23.setTransform(24.2,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJA2QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_24.setTransform(12.3,0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgbAvQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAOgCIAAgMIAAgKIAAgLIABgkIgIABIgIAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQgBgCAAgDQAAgGAFAAIAUgBQALAAATADQAGABAAAGQAAADgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgKgBIgKgBIgBAiIAAALIAAALIAAALIAUAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLAAIgLAAIgLABIgNACQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_25.setTransform(5.6,0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_26.setTransform(97.4,1.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAEATIgDgPIgBgOIgFAMIgKAaQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCADgEAAQgFABgFgUIgEgaIgCgJIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAFAAABAEIABAKIABAJIAEAcQAHgTAIgaQACgGAEAAQAFAAACAHIAEAXIAEAZIAFgSIAIgiQABgDAFAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABIAAADQgFAUgIAaIgGALQgDADgDAAQgHAAgEgQg");
	this.shape_27.setTransform(90,2.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_28.setTransform(82,2.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_29.setTransform(75.8,2.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_30.setTransform(68.8,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_31.setTransform(61.8,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgCADgCQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQADAAABACQALAPAMAcIAJgXIAKgTQACgDADAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAvQgIAQgDAMIgFAMQgBAGgEAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_32.setTransform(51.3,3.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgRAcQgKgIAAgOQAAgMAJgNQAKgQALAAQAGAAAHADQALAEgBAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBIgCgCQgEgDgIAAQgGAAgGAMQgGAKAAAHQAAAIAGAFQAFAFAIAAQADAAAFgCIAHgEIADgBQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABIABAEQAAAFgKAEQgIAEgFAAQgNAAgIgIg");
	this.shape_33.setTransform(44.8,2.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_34.setTransform(38.1,2.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_35.setTransform(31.7,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgZAsQgMgGAAgJQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQADAAACADIAGAHQAFAEALAAQAIAAAJgFQALgFAAgKQAAgIgJgEQgIgEgKgBQgKAAgHgDQgJgFAAgKQAAgLAMgKQANgIAMAAQAGAAAIACQAKACAAAFQAAAFgGAAIgJgBIgKgBQgIAAgHAFQgIAEAAAHQAAAGAKACIAMABQAPABAIAIQAIAHAAAKQAAAQgOAJQgMAHgPAAQgMAAgKgEg");
	this.shape_36.setTransform(24.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// Layer 2
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.8)").s().p("AtHB0QlbgwAAhEQAAhDFbgwQFcgwHrAAQHsAAFcAwQFbAwAABDQAABElbAwQlcAwnsAAQnrAAlcgwg");
	this.shape_37.setTransform(104,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-15.6,237.5,32.8);


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


(lib.NoticeThat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(367.1,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_1.setTransform(360.8,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAkQgMgKAAgRQAAgTAMgRQANgSAUAAQATAAAJAJQAKAJAAATQAAATgLARQgNASgTAAQgQAAgMgKgAgUgTQgJANAAAPQAAAMAIAHQAIAGAMAAQANAAAKgOQAIgNAAgPQAAgOgGgGQgGgFgOAAQgOAAgKAOg");
	this.shape_2.setTransform(351.2,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQgBABAAABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_3.setTransform(343.1,29.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDArQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_4.setTransform(336.3,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAkQgHgJAAgMQAAgTAQgVQAOgSANAAIAFABIAEABQACgDADAAQAEAAACAFIABAMIgCAEQgCACgDAAQgDAAgCgEQgBgEgCgBQgBgBgFAAQgJAAgJANQgOASAAAPQAAAHAFAGQAFAFAHAAQAFAAAGgDIAKgHIAGgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAACgCACQgPAOgPAAQgNAAgIgJg");
	this.shape_5.setTransform(328.2,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_6.setTransform(319.7,29.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAjQgHgJgCgQIgBgdIAAgNIABgIQACgEAEAAQAFAAAAAKIAAAiQAAAjAYAAQAXAAAAg7IAAgGIAAgEIABgHQACgDADAAQAGAAAAAIIAAAHIAAAHQAABDgjAAQgRAAgJgKg");
	this.shape_7.setTransform(310.5,29.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAoQgLgHAAgLQAAgIAGAAQAGAAAAAIQAAAEAHAFQAGAFAGAAQAEAAACgeIABgiIgBgGIgDAAIgGAAIgHAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgGAIAAIAGAAIAFAAIALgBIALAAQANAAAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgDAAIgEAAIgHAAIAAAGQAAArgFAUQgEANgJAAQgKAAgKgIg");
	this.shape_8.setTransform(302.1,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_9.setTransform(293.3,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAkQgMgKAAgRQAAgTAMgRQANgSAUAAQATAAAJAJQAKAJAAATQAAATgLARQgNASgTAAQgQAAgMgKgAgUgTQgJANAAAPQAAAMAIAHQAIAGAMAAQANAAAKgOQAIgNAAgPQAAgOgGgGQgGgFgOAAQgOAAgKAOg");
	this.shape_10.setTransform(283.7,29.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAkQgJgJABgMQAAgTAQgVQAOgSANAAIAFABIAEABQACgDADAAQAFAAAAAFIABAMIgBAEQgBACgEAAQgDAAgCgEQgCgEgBgBQgBgBgFAAQgIAAgKANQgOASAAAPQAAAHAFAGQAFAFAHAAQAFAAAGgDIALgHIAEgCQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQABAAAAABQgBACgCACQgPAOgPAAQgNAAgHgJg");
	this.shape_11.setTransform(275.4,29.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZAtQgFgFgBgTIABgIIAAgKIgBgDIACgCIABgaIAAgGIgBgGQAAgHAFAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIANgCIALgBQAOAAAJADQADACAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgKgDgJAAIgKABIgMACIABAGIgBAXIAZgDIANgBQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQABABAAABQgBAEgFABIgOABIgaACIAAAIIAAAHQAAANACACQAAACAJAAIAJgBIALAAIAEAAIADgBQAHAAAAAHQAAAFgGABQgFABgRAAQgTAAgFgFg");
	this.shape_12.setTransform(264.5,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgDArQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQABAAAAABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_13.setTransform(257,29.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAVAeIgEgSIgQADIgOADIgKAWQgCAEgEAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgDAJgTIgBgDQAAgFAGgBIARgcQANgWADAAQAFAAACAGIADAUIAJAoIADAJIACAGQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgFAAgEgOgAgGAEIAUgEIgFgWg");
	this.shape_14.setTransform(247.9,29.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_15.setTransform(238.9,29.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZArQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQgBABAAABQAAAAAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_16.setTransform(230.8,29.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSAvQgGgCgDgCIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgSIAAgTIAAgTIAAgVQAAgCADgDQABgCADAAIAJADIALAFQAQAGAMALQANAOAAAQQAAAKgEAJQgGAKgIAFQgJAHgQgBIgKgBgAgVgQIAAAQIgBAhIACAAQAFADAHAAQANAAAGgDQAFgFAEgGQADgHABgGQAAgQgTgMQgFgEgVgKg");
	this.shape_17.setTransform(223.4,29.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAtQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgOIgBgNIABgPIABgQIAAgJIgBgJQAAgDACgDQACgDAEAAIAPABQAIABAEADQAYANAAASQAAAJgIAGQgGAFgKADQASAKAJALIABAEQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgFgCQgTgTgXgHIAAAMIABALQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgSgZIABAHIgCAMIgBAKIADAAIADAAQAOAAAHgEQADAAADgDQADgEAAgCQAAgIgJgHQgHgHgKgBIgJAAg");
	this.shape_18.setTransform(215.2,29.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAkQgMgKAAgRQAAgTAMgRQANgSAUAAQATAAAJAJQAKAJAAATQAAATgLARQgNASgTAAQgQAAgMgKgAgUgTQgJANAAAPQAAAMAIAHQAIAGAMAAQANAAAKgOQAIgNAAgPQAAgOgGgGQgGgFgOAAQgOAAgKAOg");
	this.shape_19.setTransform(206.5,29.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaAtQgDgCAAgDIAAgRIABgXIACgYIAAgQQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQAIgDAKAAQAJABAKAGQALAJAAALQAAAQgMAHQAJAEAFAFQAEAEAAAFQAAAIgIAGQgFAFgGACQgNAFgUABQgDgBgBgCgAgRAXIAAANQAPgBAJgEQAEgCADgDQAEgDAAgCQAAgCgHgEQgGgDgFAAIgFgBIgCAAIgDAAIgHgBIAAANgAgPgiIAAAKIgBAWIAJACQAIgCAFgEQAHgFgBgJQAAgFgGgFQgGgFgGABIgJAAg");
	this.shape_20.setTransform(198.2,29.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAjQgHgJgCgQIgBgdIAAgNIABgIQACgEAEAAQAFAAAAAKIAAAiQAAAjAYAAQAXAAAAg7IAAgGIAAgEIABgHQACgDADAAQAGAAAAAIIAAAHIAAAHQAABDgjAAQgRAAgJgKg");
	this.shape_21.setTransform(189.8,29.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXAoQgLgFAAgIQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQADAAACADIAFAGQAFAEAKAAQAIAAAIgEQAKgFAAgJQAAgIgJgEQgHgEgJAAQgJAAgHgDQgIgFAAgJQAAgKAMgJQALgIALAAQAGAAAHACQAJADAAAEQAAAFgFAAIgIgBIgJgCQgIAAgHAFQgGAEAAAHQAAAFAIACIAMABQANABAIAIQAHAFAAAKQAAAOgNAIQgLAIgOAAQgLAAgJgFg");
	this.shape_22.setTransform(181.2,29.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AATAeIgEgFIgKAFIgGACQgOgBgGgHQgGgIAAgOQAAgNAKgLQAJgKANABQAFgBAGADQAIADAAAFIgBACIgBAIIAAAMIABAMIADAKIACADIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAIAAAIQAAAKAEAEQADAGAHAAQAFAAADgCIAGgFIgCgWIABgGIABgGIgEgCIgCgBQgJABgGAHg");
	this.shape_23.setTransform(170.3,31.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgPAuIgBgEQAAgGAMgcIgVgnIgCgFIgCgEIACgFQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAKAOALAaIAIgUIAJgSQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIgBACIgUArIgLAbIgEALQgBAFgEgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAg");
	this.shape_24.setTransform(160.4,32.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRAsQgCADgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAgFIAAgEIAAgTIAAgSIAAgQIAAgRQAAgDABgDQACgDAEAAQAEAAAAAFIAAACIgBACIAAANIAAAPIAKgFIAHgCQANAAAIAKQAHAIAAAOQAAANgIAJQgJAKgMgBQgJAAgHgDgAgIgCIgJAFIAAAKIAAAKIAAAJIAIADQAEACAEgBQAIAAAFgFQAGgGAAgJQAAgKgFgFQgEgGgJABQgDAAgFACg");
	this.shape_25.setTransform(154,29.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAtQgFgFAAgTIAAgIIABgKIgBgDIABgCIABgaIAAgGIgBgGQAAgHAFAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIANgCIALgBQAOAAAIADQAEACABAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgKgDgJAAIgKABIgMACIAAAGIAAAXIAZgDIANgBQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAEgFABIgOABIgaACIAAAIIAAAHQAAANABACQACACAHAAIAKgBIAMAAIADAAIADgBQAHAAAAAHQAAAFgGABQgFABgRAAQgTAAgFgFg");
	this.shape_26.setTransform(143.2,29.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXAoQgLgFAAgIQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQADAAACADIAFAGQAFAEAKAAQAIAAAIgEQAKgFAAgJQAAgIgJgEQgHgEgJAAQgJAAgHgDQgIgFAAgJQAAgKAMgJQALgIALAAQAGAAAHACQAJADAAAEQAAAFgFAAIgIgBIgJgCQgIAAgHAFQgGAEAAAHQAAAFAIACIAMABQANABAIAIQAHAFAAAKQAAAOgNAIQgLAIgOAAQgLAAgJgFg");
	this.shape_27.setTransform(135.2,29.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAjQgHgJgCgQIgBgdIAAgNIABgIQACgEAEAAQAFAAAAAKIAAAiQAAAjAYAAQAXAAAAg7IAAgGIAAgEIABgHQACgDADAAQAGAAAAAIIAAAHIAAAHQAABDgjAAQgRAAgJgKg");
	this.shape_28.setTransform(126.6,29.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVAeIgEgSIgQADIgOADIgKAWQgCAEgEAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgDAJgTIgBgDQAAgFAGgBIARgcQANgWADAAQAFAAACAGIADAUIAJAoIADAJIACAGQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgFAAgEgOgAgGAEIAUgEIgFgWg");
	this.shape_29.setTransform(117.6,29.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAuQgEgDAAgGIABgTQABgaAAghQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAhgCAaIgBAJIgBAJQAQAAAXgIIABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAEgEABQgHADgNADQgNACgIAAQgGAAgCgCg");
	this.shape_30.setTransform(110.2,29.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYAkQgHgJAAgMQAAgTAQgVQAOgSANAAIAFABIAEABQACgDADAAQAEAAACAFIABAMIgCAEQgCACgDAAQgDAAgCgEQgBgEgCgBQgBgBgFAAQgJAAgJANQgOASAAAPQAAAHAFAGQAFAFAHAAQAFAAAGgDIAKgHIAGgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAACgCACQgPAOgPAAQgNAAgIgJg");
	this.shape_31.setTransform(103.2,29.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDArQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQABAAAAABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_32.setTransform(92.3,29.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_33.setTransform(83,29.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgZAtQgFgFgBgTIABgIIAAgKIgBgDIACgCIABgaIAAgGIgBgGQAAgHAFAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIANgCIALgBQAOAAAJADQADACAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgKgDgJAAIgKABIgMACIABAGIgBAXIAZgDIANgBQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQABABAAABQgBAEgFABIgOABIgaACIAAAIIAAAHQAAANACACQAAACAJAAIAJgBIALAAIAEAAIADgBQAHAAAAAHQAAAFgGABQgFABgRAAQgTAAgFgFg");
	this.shape_34.setTransform(74.6,29.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSAvQgGgCgEgCIAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgSIABgTIgBgTIAAgVQAAgCADgDQACgCACAAIAJADIALAFQAPAGANALQANAOAAAQQAAAKgEAJQgGAKgIAFQgIAHgRgBIgKgBgAgVgQIAAAQIgBAhIABAAQAFADAIAAQANAAAGgDQAGgFADgGQADgHAAgGQABgQgTgMQgFgEgVgKg");
	this.shape_35.setTransform(66.5,29.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_36.setTransform(57.3,29.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZAtQgFgFAAgTIAAgIIABgKIgBgDIABgCIABgaIgBgGIAAgGQAAgHAGAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAAAIANgCIALgBQAOAAAIADQAFACAAAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgKgDgJAAIgJABIgNACIAAAGIgBAXIAZgDIAPgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAABQABAEgGABIgOABIgaACIgBAIIAAAHQAAANACACQACACAHAAIALgBIALAAIADAAIAEgBQAFAAAAAHQAAAFgEABQgGABgSAAQgRAAgGgFg");
	this.shape_37.setTransform(48.9,29.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgYAtIgBgEIAAgRIABgYIABgYIAAgIIAAgIQACgFAEAAIAFgBIAJAAQAJAAAKAIQALAIAAALQAAAPgMAHQgJAIgNAAIgHgBIgBAfIgBAEQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgNgiIAAALIgBAXIAHAAQAIAAAIgEQAGgGAAgJQAAgHgGgEQgHgFgHAAIgEAAIgEABg");
	this.shape_38.setTransform(42,29.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgZAtQgFgFAAgTIAAgIIABgKIgBgDIABgCIABgaIAAgGIgBgGQAAgHAFAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIANgCIALgBQAOAAAIADQAEACABAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgKgDgJAAIgKABIgMACIAAAGIgBAXIAagDIANgBQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAEgFABIgOABIgaACIAAAIIAAAHQAAANABACQACACAHAAIAKgBIAMAAIADAAIADgBQAHAAgBAHQABAFgGABQgFABgRAAQgTAAgFgFg");
	this.shape_39.setTransform(35.2,29.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgRAvQgHgCgEgCIAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgSIABgTIgBgTIAAgVQAAgCACgDQACgCADAAIAKADIAKAFQAQAGALALQAOAOAAAQQAAAKgFAJQgEAKgIAFQgKAHgPgBIgKgBgAgVgQIAAAQIgBAhIABAAQAGADAIAAQAMAAAGgDQAGgFADgGQAEgHgBgGQAAgQgSgMQgFgEgWgKg");
	this.shape_40.setTransform(27.1,29.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_41.setTransform(17.9,29.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABABABAAQAAAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_42.setTransform(9.8,29.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_43.setTransform(348.1,12.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAQAsIgCgNIgCgOIABgFIAAgEQAAgKgGAAQgHAAgFAFIgIANQAAAXgCAEQgCAEgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgIIAAgJIAAgqIABgKIgBgFIAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQAFAAABAGIABAKIAAANIgBAMIAAAGQAFgHAGgDQAEgDAGAAQAKAAAEAGQACAFABAJIAAALIABAMIACANIAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_44.setTransform(341.3,10.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgHIAAgGIgCghIgMgBQgFgBgBgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAABAJIAAAFIAAADIAAAEIAIgBIAIABQADABABAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIABADQgBANgGAAQAAAAAAAAQAAAAgBgBQgBAAAAAAQgBgBAAAAg");
	this.shape_45.setTransform(335,11.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgRAZQgHgIgBgOQAAgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAANgHAJQgHAKgMAAQgJAAgIgHgAgKgLQgDAHAAAHQAAAJAEAEQAEAEAFAAQAFAAAFgEQAFgFAAgIQABgWgNAAQgIAAgFAIg");
	this.shape_46.setTransform(325.3,12.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgHIAAgGIgBghIgMgBQgGgBAAgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAEAAAAAJIABAFIAAADIgBAEIAJgBIAIABQAEABAAAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIABADQAAANgHAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_47.setTransform(319.5,11.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAoQgIgIAAgNQAAgQAIgIQAIgKANAAQAGAAAEACIAGAFQAAgZACgJQAAgFAFAAQAFAAAAAGIgCAkIgBAQQAAAUACAJIAAACQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgEAAgCgFQgEADgEACQgFABgEAAQgMAAgIgIgAgNABQgFAGAAAMQAAAHAGAFQAFAGAHAAQAEAAADgBIAHgGIACgBIgBgKIAAgIIABgGQgDgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_48.setTransform(309.5,10.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_49.setTransform(302.8,12.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgHIAAgGIgBghIgMgBQgGgBAAgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAEAAABAJIAAAFIAAADIAAAEIAIgBIAIABQADABABAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIABADQgBANgGAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_50.setTransform(296.6,11.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgQAaQgJgIAAgMQABgLAHgMQAKgPAJAAQAGAAAHADQAJAEAAAEIgBAFQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgDgBIgCgCQgEgDgIAAQgFAAgGALQgFAKAAAGQAAAHAFAFQAFAEAHAAIAHgBIAIgFIACgBQABAAAAABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAFgJAEQgJADgFAAQgLAAgIgHg");
	this.shape_51.setTransform(290.8,12.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_52.setTransform(284.5,12.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgNgFAAQgGAAgFAIQgGAHgDAKIAAAFIAAAHIAAAEIAAAGQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgGIAAgEIABgRIABgQIAAgFIgBgGQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQABAAAAAAQAFAAABAHIAAAIQAKgOAJAAQAKABADAHQADAGAAALIAAAGIAAAEIABANIACAMQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgFAAgBgGg");
	this.shape_53.setTransform(278.1,12.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgNgFAAQgGAAgFAIQgGAHgDAKIAAAFIAAAHIAAAEIAAAGQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgGIAAgEIABgRIABgQIAAgFIgBgGQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAFAAABAHIAAAIQAKgOAJAAQAKABADAHQADAGAAALIAAAGIAAAEIABANIACAMQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgFAAgBgGg");
	this.shape_54.setTransform(271.9,12.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgRAZQgHgIgBgOQAAgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAANgHAJQgHAKgMAAQgJAAgIgHgAgKgLQgDAHAAAHQAAAJAEAEQAEAEAFAAQAFAAAFgEQAFgFAAgIQABgWgNAAQgIAAgFAIg");
	this.shape_55.setTransform(265.4,12.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgQAaQgIgIAAgMQgBgLAJgMQAIgPALAAQAFAAAHADQAJAEAAAEIgCAFQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgBIgDgCQgDgDgHAAQgGAAgFALQgGAKAAAGQAAAHAGAFQAFAEAGAAIAIgBIAHgFIACgBQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAFgJAEQgHADgGAAQgLAAgIgHg");
	this.shape_56.setTransform(259.3,12.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgPAhQgKgEABgFQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQABAAADADIAHACIAGAAIAHgBQAGgBAAgEQAAgIgLgDIgFgBQgIgCgDgCQgFgDAAgGQAAgMAMgGIAKgDIALgEIAFgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIAAAFIACAFQAAAAgBABQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgDAAgCgDIgCgGIgNAEQgIAEAAAFIADABQAMADAHAEQAJAFAAAMQAAAJgIAFQgGAEgKAAQgIAAgGgCg");
	this.shape_57.setTransform(249.5,12);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgFAqQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgKIAAgLIABgOIAAgMQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIgBAMIAAAOIAAALIAAAKQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQACgCACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAADgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_58.setTransform(245.2,10.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgZAtQgFgFgBgTIABgIIABgKIgCgCIACgEIABgZIAAgFIgBgHQAAgHAFAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIANgCIALgBQAOAAAIADQAEACAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAQgKgDgJAAIgKABIgMADIAAAFIAAAXIAZgCIANgCQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAFgFABIgOABIgaACIAAAIIAAAHQAAANABACQABACAIAAIAKAAIALAAIAEgBIADAAQAHgBAAAHQAAAEgGACQgFABgRAAQgTAAgFgFg");
	this.shape_59.setTransform(236.2,10.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgXAoQgLgFAAgIQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQADAAACADIAFAGQAFAEAKAAQAIAAAIgEQAKgFAAgJQAAgIgJgEQgHgEgJAAQgJAAgHgDQgIgFAAgJQAAgKAMgJQALgIALAAQAGAAAHACQAJADAAAEQAAAFgFAAIgIgBIgJgCQgIAAgHAFQgGAEAAAHQAAAFAIACIAMABQANABAIAIQAHAFAAAKQAAAOgNAIQgLAIgOAAQgLAAgJgFg");
	this.shape_60.setTransform(228.2,11.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZAjQgHgJgCgQIgBgdIAAgNIABgIQACgEAEAAQAFAAAAAKIAAAiQAAAjAYAAQAXAAAAg7IAAgGIAAgEIABgHQACgDADAAQAGAAAAAIIAAAHIAAAHQAABDgjAAQgRAAgJgKg");
	this.shape_61.setTransform(219.6,10.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAVAeIgEgSIgQADIgOADIgKAWQgCAEgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgDAJgTIgBgDQAAgFAGgBIARgcQANgWADAAQAFAAACAGIADAUIAJAoIADAJIACAGQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgFAAgEgOgAgGAEIAUgEIgFgWg");
	this.shape_62.setTransform(210.6,11);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZAuQgDgCAAgHIABgUQABgZAAghQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAhgDAaIAAAJIgBAJQAQAAAXgIIABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAEgEACQgHADgNACQgNADgIAAQgGAAgDgCg");
	this.shape_63.setTransform(203.2,11);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgYAkQgHgJgBgMQABgTAQgVQAOgSANAAIAFABIAEABQACgDADAAQAEAAACAFIABAMIgCAEQgCACgDAAQgDAAgCgEQgBgEgCgBQgBgBgFAAQgIAAgKANQgOASAAAPQAAAHAFAGQAFAFAHAAQAFAAAGgDIAKgHIAGgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAACgCACQgQAOgOAAQgMAAgJgJg");
	this.shape_64.setTransform(196.3,10.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgDArQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_65.setTransform(185.3,10.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_66.setTransform(176,10.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgYAtQgHgFAAgTIABgIIAAgKIgBgCIACgEIABgZIgBgFIAAgHQAAgHAFAAQABAAABAAQAAAAABAAQAAABABAAQABAAAAAAIANgCIALgBQAOAAAJADQADACAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAQgKgDgJAAIgKABIgMADIABAFIgBAXIAZgCIANgCQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAQgBAFgFABIgOABIgaACIAAAIIAAAHQAAANACACQAAACAJAAIAJAAIALAAIAEgBIADAAQAGgBABAHQgBAEgFACQgFABgSAAQgSAAgEgFg");
	this.shape_67.setTransform(167.6,10.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgSAvQgGgBgEgDIAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgTIABgSIgBgTIAAgVQAAgCADgDQACgDACABIAJADIALAFQAPAGANAMQANANAAAQQAAAKgEAJQgGAKgIAFQgIAHgRAAIgKgCgAgVgQIAAAQIgBAhIACAAQAFAEAHgBQANAAAGgDQAFgFAEgGQADgGABgIQAAgPgTgMQgFgEgVgKg");
	this.shape_68.setTransform(159.6,11);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_69.setTransform(150.3,10.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgZAtQgFgFAAgTIAAgIIABgKIgBgCIABgEIABgZIAAgFIgBgHQAAgHAFAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIANgCIALgBQAOAAAIADQAFACAAAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAQgKgDgJAAIgJABIgNADIAAAFIgBAXIAZgCIAPgCQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQABAFgGABIgOABIgaACIgBAIIAAAHQABANABACQACACAHAAIAKAAIAMAAIADgBIADAAQAHgBgBAHQAAAEgEACQgGABgRAAQgSAAgGgFg");
	this.shape_70.setTransform(141.9,10.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgYAtIgBgEIAAgRIABgYIABgYIAAgIIABgIQABgFAEAAIAFgBIAJAAQAJAAAKAIQALAIgBALQAAAPgLAHQgKAIgMAAIgHgBIgBAfIgBAEQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgNgiIAAALIAAAXIAGAAQAIAAAHgEQAIgGgBgJQABgHgIgEQgGgFgGAAIgFAAIgEABg");
	this.shape_71.setTransform(135,10.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgZAtQgFgFgBgTIABgIIABgKIgCgCIACgEIABgZIAAgFIgBgHQAAgHAFAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIANgCIALgBQAOAAAIADQAEACAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAQgKgDgJAAIgKABIgMADIAAAFIAAAXIAZgCIANgCQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAFgFABIgOABIgaACIAAAIIAAAHQAAANABACQABACAIAAIAKAAIALAAIAEgBIADAAQAHgBAAAHQAAAEgGACQgFABgRAAQgTAAgFgFg");
	this.shape_72.setTransform(128.2,10.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgSAvQgGgBgEgDIAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgTIABgSIgBgTIAAgVQAAgCACgDQADgDACABIAKADIAKAFQAPAGANAMQANANAAAQQAAAKgEAJQgFAKgJAFQgIAHgQAAIgLgCgAgVgQIAAAQIgBAhIABAAQAFAEAJgBQAMAAAGgDQAGgFADgGQADgGAAgIQAAgPgSgMQgFgEgVgKg");
	this.shape_73.setTransform(120.2,11);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_74.setTransform(108.9,12.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAQAsIgCgNIgCgOIABgFIAAgEQAAgKgGAAQgHAAgFAFIgIANQAAAXgCAEQgCAEgDAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgDIABgIIAAgJIAAgqIABgKIgBgFIAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAABAGIABAKIAAANIgBAMIAAAGQAFgHAGgDQAEgDAGAAQAKAAAEAGQACAFABAJIAAALIABAMIACANIAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_75.setTransform(102.1,10.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgHIAAgGIgBghIgMgBQgGgBAAgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAEAAAAAJIABAFIAAADIgBAEIAJgBIAIABQAEABAAAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIABADQAAANgHAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_76.setTransform(95.7,11.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgHIAAgGIgBghIgMgBQgFgBgBgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAEAAABAJIAAAFIAAADIAAAEIAIgBIAIABQADABABAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIABADQgBANgGAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_77.setTransform(86.5,11.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AATAeIgEgEIgKAEIgGABQgOAAgGgHQgGgIAAgOQAAgNAKgLQAJgKANAAQAFABAGACQAIADAAAFIgBADIgBAHIAAAMIABALIADALIACADIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAIAAAIQAAAKAEAFQADAEAHAAQAFAAADgBIAGgFIgCgWIABgGIABgGIgEgCIgCgBQgJAAgGAIg");
	this.shape_78.setTransform(80.6,12.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAQAsIgCgNIgCgOIABgFIAAgEQAAgKgGAAQgHAAgFAFIgIANQAAAXgCAEQgCAEgDAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgDIABgIIAAgJIAAgqIABgKIgBgFIAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAABAGIABAKIAAANIgBAMIAAAGQAFgHAGgDQAEgDAGAAQAKAAAEAGQACAFABAJIAAALIABAMIACANIAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_79.setTransform(74.1,10.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgHIAAgGIgBghIgMgBQgGgBAAgFQABgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAEAAAAAJIABAFIAAADIgBAEIAJgBIAIABQADABAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIAAADQABANgHAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAg");
	this.shape_80.setTransform(67.7,11.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_81.setTransform(58.1,12.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgQAaQgJgIAAgMQAAgLAJgMQAJgPAJAAQAGAAAHADQAJAEAAAEIgCAFQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgDgBIgDgCQgDgDgIAAQgFAAgFALQgGAKAAAGQAAAHAGAFQAEAEAHAAIAHgBIAIgFIACgBQABAAAAABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQgBAFgIAEQgJADgFAAQgLAAgIgHg");
	this.shape_82.setTransform(51.7,12.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgFAqQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgKIAAgLIABgOIAAgMQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIgBAMIAAAOIAAALIAAAKQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQACgCACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAADgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_83.setTransform(47,10.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIAAgHIAAgGIAAghIgOgBQgEgBAAgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAAAAJIABAFIAAADIgBAEIAJgBIAIABQAEABgBAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIAAADQABANgHAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_84.setTransform(42.4,11.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgRAZQgHgIgBgOQAAgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAANgHAJQgHAKgMAAQgJAAgIgHgAgKgLQgDAHAAAHQAAAJAEAEQAEAEAFAAQAFAAAFgEQAFgFAAgIQABgWgNAAQgIAAgFAIg");
	this.shape_85.setTransform(36.4,12.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgmAuQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_86.setTransform(28.6,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.4,0,366.2,39.4);


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


(lib.rock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAAgJQgEAEAPgKQgDgGgJAEAgmgRQAAAIAAAGQAAAGABAFQACAOAHAHQABABACABQAaARARgXQATgYASgeQgVgJgTABQgWABgVAGQgHACgGADQgHACgGADQAFASAMAK");
	this.shape.setTransform(5.5,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgZAfIgDgCQgHgHgCgOQgMgKgFgSIANgFIANgFQAVgGAWgBQATgBAVAJQgSAegTAYQgKANgMAAQgKAAgLgHgAgmgDIABALIgBgLIAAgGIAAgIIAAAIIAAAGIAAAAgAAJgNIACgCIAAAAIAAAAIgBgBQgBgDgEAAIAAAAIAAAAIgFABIAAAAIgBABIABgBIAAAAIAFgBIAAAAIAAAAQAEAAABADIABABIAAAAIAAAAIgCACIgKAGIAAAAIABgCIgBACIAAAAIAKgGg");
	this.shape_1.setTransform(5.5,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,13,9.7);


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


(lib.BuffyHandSandwhich = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Ai6g3QgFgCgFgBQgBgBgBgCQgCgEgCgEQgJgVAeAGQAFACAIACQAKADAJAFQALAGAIAHQACACACACQADACADACQAGAFACAEQAIAJAIAMQABACABACQAIAOAPAFQACABACABQALAEALAAAgrAMQAGgCAFgDQAPgIANgJQAOgLARgJQAQgJARgIQAPgHASgHQAJgDAJgDQAKgCAJgCQANgCAKgEQABAAABgBAgQBCQgCABgCAAQgDAAgDABQgnADgCABQgNAFgMAFQgEACgDABQgIAEgWgKQgJgFgMgGQgCgCgDgBQgTgMAGgLQg6ATAMgVQABgCABgCAi6gSQAAAAgBAAQgEgCgDgBQgWgIAIgLQACgDAFgEQAFgEAGgDQACAAACgBQASgGASALQAEADAFAEQALAFAFAIQACADAEADADZgWQgDABgCABQgOAHgQAHQgDACgEACQgNAFgLAHQgPAJgQAKQgPAKgSAFQgBABgBAAQgQAEgSAEQgTAGgRACQgNACgNACQgDABgCAAAgsAPQgCgEABgDQABAAACAAAi6gSQAGgCAGAAQAKABAMAGQAEAAADACQAEABAEAEQAEADAEAEQADACACACIABAAQAAABAAAAQAAAAgBgBAieAQQgBAAgBAAQgNgIgSgDQgOgCAEgFQABgDACgCQAFgIAHgDAgLBCQgDAAgCAAAjSAhQAPghAlAR");
	this.shape.setTransform(20.2,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("AgGAGQAHgGAGgLIgFAXIgIgGg");
	this.shape_1.setTransform(-3.3,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9A67").s().p("AiBBPIgVgLIgFgDQgTgMAGgLQg6ATAMgVIACgEIACgDQAPghAlARIAAgBIgCAAQgNgIgSgDQgOgCAEgFIADgFQAFgIAHgDIACgBIACAAIACgBIADAAIABAAIAAAAIABAAIABAAQAKABAMAGQAEAAADACQAEABAEAEIAIAHIAFAEIgFgEIgIgHQgEgEgEgBQgDgCgEAAQgMgGgKgBIgBAAIgBAAIAAAAIgBAAIgDAAIgCABIgCAAIgCABIgBAAIgHgDQgWgIAIgLIAHgHQAFgEAGgDIAEgBIABAAIABgBIAKgBIAAAAIAAAAQALAAAMAHIAAAAIABAAIAJAHQALAFAFAIIAGAGIgGgGQgFgIgLgFIgJgHIgBAAIAAAAQgMgHgLAAIAAAAIAAAAIgKABIgBABIgBAAIgKgDIgCgDIgEgIQgJgVAeAGIANAEQAKADAJAFQALAGAIAHIAEAEIAGAEQAGAFACAEQAIAJAIAMIACAEQAIAOAPAFIAEACQALAEALAAIAAACIABAFIgBgFIAAgCIADAAIgCAHIABACIAAgFIALgFIAcgRQAOgLARgJIAhgRIAhgOIASgGIATgEQANgCAKgEIACgBQARAVAPAXQAQAFAOAHIgFACIgeAOIgHAEIgYAMIgfATQgPAKgSAFIgCABIgiAIQgTAGgRACIgaAEIAAABIgFAAIAFgBIgFABIgEABIgGABQgnADgCABIgZAKIgHADIgFABQgIAAgRgHgAh7AGIAAgBIgBAAIABAAIAAABIgBgBIABABg");
	this.shape_2.setTransform(20.2,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("ABIgwQgIgJgLgFQgEgCgDgCQgXgNgbgKQgOgFACARQABADAAADQACANAAALQAAAHAAAHQARAEAFAGQAAACABABQABAEgDAFQgDAGgHAGQgIAHAAAKQAAAKAKANQAKAOAVAQQABAAABgBQAEAAADgBQAAACgBACQgHACgHAGQgDACAAgFQAAgCAAgCABXApQgBgBgBAAAgNgvQgFgBgEgCQgHgCgIgBQgCAAgCAAQANAIgNAFQgDAEgBACQgDAHAIACQABABACAAQgDAEgCAFQgBACAEABQANAEgIAKQgFAGAGAFQAIAGAGAIQADAEADAFQADAFAEAFQACACACADQAFAGAKAFQAIADABAJQgFADgEACQgCACgDACQgEABgDACQghATgFgwQgCgOgJgJQgKgIgJgKQgMgNgHgQQACgEACgCQAOgSAXAD");
	this.shape_3.setTransform(-2.1,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AAZBAIAAgDQgBgKgHgDQgKgFgHgGIgDgFIgHgKIgGgJQgGgIgIgFQgGgFAFgGQAIgKgNgFQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQACgFADgDIgDgCQgHgCACgHIAEgFQANgGgMgIIAEAAQAHABAHACIAJAEIAAANQASAEAEAHIABACQACAEgEAGQgDAFgHAHQgIAHAAAJQAAAKAKAOQAKANAVAQIACgBIAHgBIgBAEQgHACgHAGIgCABQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_4.setTransform(-2.4,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC97").s().p("AglA5QgCgOgJgJQgKgIgJgKQgMgNgHgQIAEgGQAOgSAXADQgDAHAIACIADABQgDAEgCAFQAAAAAAABQAAAAAAAAQABABAAAAQABABABAAQANAEgIAKQgFAGAGAFQAIAGAGAIIAGAJIAHAKIAEAFQAFAGAKAFQAIADABAJIgJAFIgFAEIgHADQgJAFgHAAQgSAAgEgigAAAApQgKgNAAgKQAAgKAIgHQAHgGADgGQADgFgBgEIgBgDQgFgGgRgEIAAgOIgCgYIgBgGQgCgRAOAFQAbAKAXANIAHAEQALAFAIAJQgJgCgLgBIgOAAQgeACAOASIAGAGIADACIAKABIgEACQgFAEgEAGIgEAIQgFAMAXACIAIAAIABAAQgHAFgDAKIgBAFQgCAHAOgCQASgBAPAEIACABQgpgIgGAkIgHABIgCABQgVgQgKgOg");
	this.shape_5.setTransform(-2.1,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BuffyHandSandwhich, new cjs.Rectangle(-11.8,-6.4,54.7,22.3), null);


(lib.BuffyArmSandwhich = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgOgVQABgBAAgBQAAgBAAgCQACgJAGgIQAKgPARgKQAEgCACgDQAFgHACgMQACgMAEgJAgOgVQAAADAAADAiFBEQASgQAEgDQAGgFAEgHQAKgQAOgLQAOgLASgHQAQgGAPgHACGgrQgMANgCADQgJAPgPANQAAAAgBAAQAAABgBABQgMAJgOADQgDABgCABQgOAJgOAHQgGAEgHABQgBACgBACQgBACgBACQgIAPgOANQgCACgDACQgLAKgMAIQgMAHgyAL");
	this.shape.setTransform(12,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9A67").s().p("AiEBFIAWgTQAGgFAEgHQAKgPAOgMQAOgLASgGQAQgHAQgHIgBAHIABgHIAAgCIAAgCQADgKAFgHQAKgPARgLQAEgCACgDQAFgHACgMQACgLAFgJQAHgCAHgDQABABABAAQAAABABAAQAAAAABAAQAAAAAAAAQACgCAKACQALACADgBQAPAHATAOIABAEIAFACIAHARQACAHAAAOIgBAGIgOAQQgJAQgPAMIAAABIgCABQgLAJgPADIgFADIgcAQQgGADgHACIgCADIgCAEQgIAPgOAOIgEAEQgLAKgNAIQgLAHgzAKQgJACgHAAQglAAAOgwg");
	this.shape_1.setTransform(11.9,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BuffyArmSandwhich, new cjs.Rectangle(-2.4,-11.6,28.8,24.8), null);


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


(lib.WhenBuffyGrills_diag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Connector();
	this.instance.parent = this;
	this.instance.setTransform(106.6,81.7,0.877,0.877,0,0,0,28.4,47.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AEWF0IAAD4IS3AAAOniVItzAAQhdilhfikItUAAIAAkqAvcneIAACVA3MneIHwAAAp3JsIAACdAp3JsIAAlsA09JsILGAAAEWJsIuNAAAiIneIEoAA");
	this.shape.setTransform(152.4,88.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},19).wait(121));

	// Layer 2
	this.instance_1 = new lib.When("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-40.7,-54.8,1.36,1.36,0,0,0,19.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.27,scaleY:1.27,x:144.7,y:73.3},8).wait(4).to({startPosition:0},0).to({scaleX:1.36,scaleY:1.36,rotation:60,x:116.8,y:74.9},7).wait(121));

	// Layer 10
	this.instance_2 = new lib.Buffy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(11.9,-55.3,1.36,1.36,0,0,0,19.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.27,scaleY:1.27,x:79.3,y:108.8},8).wait(4).to({startPosition:0},0).to({regY:11,scaleX:1.36,scaleY:1.36,x:51.1,y:134.9},7).wait(121));

	// Layer 9
	this.instance_3 = new lib.grills("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(60.3,-54.8,1.36,1.36,0,0,0,17.2,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:17.3,scaleX:1.27,scaleY:1.27,x:133,y:108.8},8).wait(4).to({startPosition:0},0).to({regX:17.2,regY:11,scaleX:1.36,scaleY:1.36,x:137.1,y:134.9},7).wait(121));

	// Layer 8
	this.instance_4 = new lib.hamburgers("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(133.8,-55.3,1.36,1.36,0,0,0,37.9,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.27,scaleY:1.27,x:206.9,y:108.8},8).wait(4).to({startPosition:0},0).to({regY:11,scaleX:1.36,scaleY:1.36,x:239.7,y:134.9},7).wait(121));

	// Layer 7
	this.instance_5 = new lib.Pro("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(210.7,-54.8,1.36,1.36,0,0,0,12,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.27,scaleY:1.27,x:62.1,y:39.4},8).wait(4).to({startPosition:0},0).to({scaleX:1.36,scaleY:1.36,x:27.6,y:24.5},7).wait(121));

	// Layer 6
	this.instance_6 = new lib.shows("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(252.9,-54.8,1.36,1.36,0,0,0,20.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.27,scaleY:1.27,x:110.3,y:39.4},8).wait(4).to({startPosition:0},0).to({regX:20,scaleX:1.36,scaleY:1.36,x:112.9,y:24.5},7).wait(121));

	// Layer 4
	this.instance_7 = new lib._for("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(319,-54.8,1.36,1.36,0,0,0,12,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.27,scaleY:1.27,x:178.8,y:39.4},8).wait(4).to({startPosition:0},0).to({scaleX:1.36,scaleY:1.36,rotation:60,x:160.5,y:53.7},7).wait(121));

	// Layer 3
	this.instance_8 = new lib.lunch("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(358.8,-54.8,1.36,1.36,0,0,0,17.8,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.27,scaleY:1.27,x:220.5,y:39.4},8).wait(4).to({startPosition:0},0).to({regY:11,scaleX:1.36,scaleY:1.36,x:212,y:59.3},7).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.3,-70.4,450.2,30.7);


(lib.MickPlays_Diag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Connector();
	this.instance.parent = this;
	this.instance.setTransform(50.6,70.2,0.877,0.877,0,0,0,28.4,47.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AQXF0IAAD4IHoAAADyraIAAD4AGpneIEZHTApEJsIAAlsApEJsIAACdAFIJsIAAj4AFIJsIuMAAAYAFsIt0AAQheilheikAROneIqlAAAQXJsIrPAAAuplJIAAiVInwAAA3/JsIO7AAAupneIVSAAAupsIIAAEq");
	this.shape.setTransform(91.4,76.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},19).wait(106));

	// Layer 2
	this.instance_1 = new lib.Because1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-84.3,-73.2,1.182,1.182,0,0,0,19.5,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.36,scaleY:1.36,x:56.2,y:50.3},7).wait(4).to({startPosition:0},0).to({regX:19.6,rotation:60,x:60.8,y:63.4},8).wait(106));

	// Layer 10
	this.instance_2 = new lib.everyone("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-22.7,-73.3,1.182,1.182,0,0,0,19.6,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.36,scaleY:1.36,x:-9.7,y:99},7).wait(4).to({startPosition:0},0).to({x:-28.3,y:123.4},8).wait(106));

	// Layer 13
	this.instance_3 = new lib.likescopy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(227.7,-72.6,1.182,1.182,0,0,0,17.2,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.38,scaleY:1.38,x:109.8,y:12.8},7).wait(4).to({startPosition:0},0).to({regX:10.9,rotation:60,x:161.2,y:48.7},8).wait(106));

	// Layer 9
	this.instance_4 = new lib.likes("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(43.5,-73.3,1.162,1.162,0,0,0,17.4,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:17.2,scaleX:1.36,scaleY:1.36,x:71,y:99},7).wait(4).to({startPosition:0},0).to({x:81.1,y:123.4},8).wait(106));

	// Layer 8
	this.instance_5 = new lib.guitar("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(277.2,-72.7,1.182,1.182,0,0,0,37.9,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.36,scaleY:1.36,x:176.3,y:12.9},7).wait(4).to({startPosition:0},0).to({x:183.3,y:8.5},8).wait(106));

	// Layer 7
	this.instance_6 = new lib.Mick("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(143.8,-72.6,1.182,1.182,0,0,0,12.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:12,scaleX:1.36,scaleY:1.36,x:-4,y:13},7).wait(4).to({startPosition:0},0).to({x:-41.4},8).wait(106));

	// Layer 6
	this.instance_7 = new lib.plays("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(190.9,-73.5,1.182,1.182,0,0,0,20.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:20,scaleX:1.36,scaleY:1.36,x:56.9,y:13},7).wait(4).to({startPosition:0},0).to({startPosition:0},8).wait(106));

	// Layer 4
	this.instance_8 = new lib.to("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(74.1,-72.8,1.182,1.182,0,0,0,11.9,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.36,scaleY:1.36,x:111.3,y:99.1},7).wait(4).to({startPosition:0},0).to({regX:12,rotation:60,x:159.5,y:93.6},8).wait(106));

	// Layer 3
	this.instance_9 = new lib.listen("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(100.9,-72.6,1.182,1.182,0,0,0,17.8,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:11,scaleX:1.36,scaleY:1.36,x:149.1,y:99},7).wait(4).to({startPosition:0},0).to({x:211,y:99.2},8).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.3,-86.5,387.6,27.1);


(lib.IfStacyThrowsDiag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.Connector();
	this.instance.parent = this;
	this.instance.setTransform(140.9,-169.4,1.065,1.065,0,0,0,28.4,47.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AuwAAIJaAAICaAAIRtAA");
	this.shape.setTransform(71.6,-219.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("Ak3ruIBsAAIAAkPADjruImuAAA4/xXIAAFpIAAC2AtVJIIAAC/A60JIINfAAIAAm6AOIRYIlMoQIlBAAAD7EbIAAEtIxQAAA2lruIF3KPAI8JIIR4AA");
	this.shape_1.setTransform(197.3,-144.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},22).wait(127));

	// if
	this.instance_1 = new lib.If("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-99.3,-346,1.571,1.571,0,0,0,9,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:2.01,scaleY:2.01,x:158.4,y:-155.9},9).wait(5).to({startPosition:5},0).to({scaleX:1.84,scaleY:1.84,rotation:60,x:172,y:-185.6,startPosition:0},8).wait(127));

	// stacy
	this.instance_2 = new lib.Stacy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-54.2,-346.2,1.571,1.571,0,0,0,19.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:2.01,scaleY:2.01,x:30.2,y:-89.2},9).wait(5).to({startPosition:0},0).to({scaleX:1.84,scaleY:1.84,x:65.5,y:-108.5},8).wait(127));

	// throws
	this.instance_3 = new lib._throws("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(13.7,-346.1,1.571,1.571,0,0,0,23.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:23.2,scaleX:2.01,scaleY:2.01,x:116.4,y:-89.2},9).wait(5).to({startPosition:0},0).to({regX:23.1,scaleX:1.84,scaleY:1.84,x:169.4,y:-108.5},8).wait(127));

	// the
	this.instance_4 = new lib.the("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(69.3,-346,1.571,1.571,0,0,0,12.5,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:2.01,scaleY:2.01,x:186.4,y:-89.2},9).wait(5).to({startPosition:0},0).to({regY:11,scaleX:1.84,scaleY:1.84,rotation:60,x:287.9,y:-63.4},8).wait(127));

	// hackey
	this.instance_5 = new lib.hacky("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(119.2,-346,1.571,1.571,0,0,0,19.4,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:11.1,scaleX:2.01,scaleY:2.01,x:250.5,y:-88.8},9).wait(5).to({startPosition:0},0).to({scaleX:1.84,scaleY:1.84,x:267.3,y:-108.1},8).wait(127));

	// sack
	this.instance_6 = new lib.sack("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(174.1,-346.1,1.571,1.571,0,0,0,15.5,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:2.01,scaleY:2.01,x:320.5,y:-89.2},9).wait(5).to({startPosition:0},0).to({scaleX:1.84,scaleY:1.84,x:331.4,y:-108.5},8).wait(127));

	// sam
	this.instance_7 = new lib.Sam("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(245.2,-346.1,1.571,1.571,0,0,0,15,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:2.01,scaleY:2.01,x:63.4,y:-224.1},9).wait(5).to({startPosition:0},0).to({scaleX:1.84,scaleY:1.84,x:3.6,y:-236},8).wait(127));

	// always
	this.instance_8 = new lib.always("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(302.3,-346.2,1.571,1.571,0,0,0,21.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:21.5,scaleX:2.01,scaleY:2.01,x:135.5,y:-224.1},9).wait(5).to({startPosition:0},0).to({regX:21.6,regY:11,scaleX:1.34,scaleY:1.34,rotation:60,x:87.5,y:-190.3},8).wait(127));

	// returns
	this.instance_9 = new lib.returns("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(375.9,-346.3,1.571,1.571,0,0,0,24.9,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:2.01,scaleY:2.01,x:228.8,y:-224.1},9).wait(5).to({startPosition:0},0).to({scaleX:1.84,scaleY:1.84,x:96.9,y:-238},8).wait(127));

	// it
	this.instance_10 = new lib.it("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(428.7,-346.3,1.571,1.571,0,0,0,8.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:2.01,scaleY:2.01,x:296.1,y:-224.1},9).wait(5).to({startPosition:0},0).to({regX:8.7,scaleX:1.84,scaleY:1.84,x:200.4,y:-236},8).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.1,-363.8,546.3,50.4);


(lib.DependentClauseSimple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAHATQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIABgYIAAgIQABgDAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIgBADIAAAYQAAAFgGAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgRAKIAAgLIAAgNQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAAMIAAALIAAADIABAEQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgGAAAAgLg");
	this.shape.setTransform(393.5,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAvQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgEACgDQACgEAEAAQAGAAAAAIQAAADgCADQgCADgDAAQgDAAgCgCgAgMAXQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgFAIgGIAOgLQAIgHAAgFQAAgIgHgGQgGgGgHAAQgEAAgGAEIgIAEQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCgFQAAgFAKgFQAIgEAGAAQAMAAAKAKQALAKAAANQAAAJgGAGQgEAEgJAHQgKAHgDAFQgCACgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_1.setTransform(387.3,57.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAuQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgDIAAgDIgBgJIAAgKIgBgYIgCgaIgGABQgOAAgIgDQgFgBAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQACgDADABIAKABIAKAAIAMAAIAKAAIAPABIAOABQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAADQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgOgBIgPgBIgEAAIABAdIACAbIAAAHIABAHQAAAEgCADQgBAEgEAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_2.setTransform(380.3,57.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAhIgEgUIgRADIgQAEIgLAYQgCADgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgBIASgfQAOgYAEAAQAFAAACAHIAEAWIAJAqIAEALIACAGQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgGAAgEgPgAgHAEIAWgEIgFgYg");
	this.shape_3.setTransform(370.5,57.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnAyQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIACgUIABgTIgBgKIAAgLIABgPIAAgPQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBAQIgBAOIABAPIAagDQAQgEALAAIABgbIACgKQACgHAEAAIAEACQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAIgBADIgBAIIAAAGIAAAFIgBATIgBASIABAOIABAPQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgPIgBgOIAAgJQgKAAgQADIgaAFIgBAQIgBAQQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_4.setTransform(360.9,57.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAyQgDgCAAgDQgCgIgBgEIgFgbIgEgbQgFAVgGAOQgIARgCAJIABACQAAADgDADIgFABQgJAAAAgHIgBgIIgHggIgPgsIAAgDQAAgFAGAAQAEgBADAFIAEAOIAIAbIAGAbQAHgPAGgXIAHgTQAFgOAFABQAFgBACAFQACAFACAVQABAKAEAOIAEAZIAWg2IADgNIAFgLQACgDADAAQAHgBAAAHIgCAGIgCAHIgEALIgTAtIgJAXQgCAEgFgBQgDAAgCgBg");
	this.shape_5.setTransform(349.4,57.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqAyQgCgCABgDIAAgIIAAgIIAAgMIAAgMIAAgLIAAgNIAAgMIgBgMQAAgDACgCQADgDADAAQADAAAGAIQAPAXAMAQQAPASASARIAAgIIgBgIQAAgbgCgRIgCgHIAAgGQAAgIAGAAQALAAAAAqIAAAUIAAAVIgBAKQgBAGgGAAQgEAAgFgEQgZgZghgtIAAAPIAAANIAAAQIAAAQQAAARgGAAQgEAAgCgCg");
	this.shape_6.setTransform(333.3,57.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIABgcIgBgGIAAgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAPgDIALgBQAPAAAJAEQAFABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgNADIAAAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABAFgHABIgOABIgdADIAAAIIgBAIQAAAOADACQABACAJAAIAKAAIAMAAIAEgBIADAAQAIAAAAAGQgBAGgFABQgGABgTAAQgTAAgGgFg");
	this.shape_7.setTransform(324.2,57.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnAyQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIACgUIABgTIgBgKIAAgLIABgPIAAgPQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABIgBAQIgBAOIABAPIAagDQAQgEALAAIABgbIACgKQACgHAEAAIAEACQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAIgBADIgBAIIAAAGIAAAFIgBATIgBASIABAOIABAPQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAgPIgBgOIAAgJQgKAAgQADIgaAFIgBAQIgBAQQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_8.setTransform(315,57.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEAuQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgDIAAgDIgBgJIAAgKIgBgYIgCgaIgGABQgOAAgIgDQgFgBAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQACgDADABIAKABIAKAAIAMAAIAKAAIAPABIAOABQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAADQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgOgBIgPgBIgEAAIABAdIACAbIAAAHIABAHQAAAEgCADQgBAEgEAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_9.setTransform(306.1,57.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAIATQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgYIACgIQABgDADAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIAAADIgBAYQAAAFgGAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAgRAKIAAgLIAAgNQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAAMIAAALIAAADIABAEQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgGAAAAgLg");
	this.shape_10.setTransform(298.1,54);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgDAeQgBgCgBgDIAAgDIgBgEQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAIAAAAANQAAADgDACQgCACgCAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAgEgPQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAgCIgBgDQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAGAAAAALQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCACgCAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_11.setTransform(289.7,58);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJA2QgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_12.setTransform(284.4,57.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_13.setTransform(279.4,57);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAbQgJgHAAgPQAAgPAIgLQAIgNAOAAQAKAAAHAEQAIAEAAAJQAAAHgHAFIgNAGIgYAMQAEAFAFADQAGACAFAAIALgBQAHgDADgDQABgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAAHgMAFQgJAFgKAAQgNAAgJgIgAgMgQQgFAGgDALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_14.setTransform(274.2,58.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_15.setTransform(267.2,58.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_16.setTransform(261.3,58.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgJAAgFgDQgGgEgBgIQgDgRAAgMQAAgJADgLQAAgFAFAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBAJIgBAKIABARIACAMIAEACIAEABQAIAAAJgDIAAgNIAAgLQgBgOACgKQABgGAFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgGg");
	this.shape_17.setTransform(254.6,58.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_18.setTransform(247.6,58.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAxQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgeIgXgrIgDgFIgCgFQAAgDADgCQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQADABABACQALAPAMAbIAJgVIAKgUQACgDADgBQABAAAAABQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIgBADIgWAuQgIASgDAMIgFAMQgBAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_19.setTransform(240.8,60.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AARAxIgKgPIgLgQIgLAIIAAAUQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgJIABgPIABgQIAAgVIAAgWIAAgHIAAgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABIAAAHIAAAHIAAAVIAAAVQAJgHAHgHIANgOQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQgHAJgMAKIAOATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgEAAgBgDg");
	this.shape_20.setTransform(230.6,57);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_21.setTransform(223.3,58.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_22.setTransform(217,58.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_23.setTransform(206.4,58.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgQAxQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgeIgXgrIgDgFIgCgFQAAgDADgCQAAAAABAAQAAgBAAAAQABAAABAAQAAgBABAAQADABABACQALAPAMAbIAJgVIAKgUQACgDADgBQABAAAAABQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAABIgBADIgWAuQgIASgDAMIgFAMQgBAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_24.setTransform(199.9,60.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_25.setTransform(193.4,58.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAEASIgDgPIgBgMIgFAKIgKAbQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgCAEgEABQgFgBgFgSIgEgaIgCgKIAAgJQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABgBQAFAAABAGIABAJIABAKIAEAbQAHgTAIgZQACgIAEAAQAFAAACAJIAEAWIAEAYIAFgRIAIgiQABgEAFAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIAAACQgFAWgIAYIgGANQgDADgDAAQgHgBgEgRg");
	this.shape_26.setTransform(185.6,58.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_27.setTransform(179.4,57);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAWAhIgEgUIgRADIgQAEIgLAYQgCADgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgBIASgfQAOgYAEAAQAFAAACAHIAEAWIAJAqIAEALIACAGQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgGAAgEgPgAgHAEIAWgEIgFgYg");
	this.shape_28.setTransform(172.8,57.4);

	this.instance = new lib.SamAlways1();
	this.instance.parent = this;
	this.instance.setTransform(286.3,56.5,1,1,0,0,0,73.4,0);
	this.instance._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAHAUQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgXIABgHQABgFAFAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIgBADIAAAXQAAAGgFAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAgRAKIAAgMIAAgMQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIAAAMIgBALIABADIAAADQAAABAAAAQAAABgBAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgGAAAAgLg");
	this.shape_29.setTransform(457.9,28.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgQAvQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgEACgDQACgEAEAAQAGAAAAAIQAAADgCADQgCADgDAAQgDAAgCgCgAgMAXQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgFAIgGIAOgLQAIgHAAgFQAAgIgHgGQgGgGgHAAQgEAAgGAEIgIAEQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgCgFQAAgFAKgFQAIgEAGAAQAMAAAKAKQALAKAAANQAAAJgGAGQgEAEgJAHQgKAHgDAFQgCACgDAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_30.setTransform(451.8,32.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAWAhIgEgUIgRADIgQAEIgLAYQgCAEgDAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgCIASgeQAOgYAEAAQAFAAACAHIAEAVIAJArIAEAKIACAIQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgGAAgEgPgAgHAFIAWgFIgFgXg");
	this.shape_31.setTransform(434.9,32.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgnAyQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIACgUIABgVIgBgJIAAgLIABgPIAAgPQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQABAAAAAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAABIgBAPIgBAPIABAQIAagFQAQgDALAAIABgbIACgKQACgGAEgBIAEACQAAABABAAQAAABAAAAQAAABABAAQAAABAAABIgBACIgBAIIAAAGIAAAFIgBATIgBASIABAOIABAPQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgPIgBgOIAAgKQgKABgQADIgaAFIgBAQIgBARQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_32.setTransform(425.3,32.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAOAyQgCgCAAgDQgEgHAAgFIgFgbIgEgbQgFAVgGANQgIASgCAJIABADQgBACgCACIgFACQgJAAAAgHIgBgIIgIggIgOgsIAAgCQAAgHAGAAQAEABADAEIAEANIAIAcIAGAbQAHgPAGgXIAHgTQAFgOAFAAQAEAAACAFQADAGACAUQABALAEANIAFAZIAVg3IADgLIAFgMQACgDADgBQAHABAAAGIgCAHIgCAGIgEAMIgTAtIgJAVQgCAFgFAAQgCAAgDgCg");
	this.shape_33.setTransform(413.8,32.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgqAyQgBgCgBgDIABgIIAAgIIAAgMIAAgMIAAgLIAAgNIgBgMIAAgMQAAgDACgCQADgDADAAQAEAAAFAIQAPAXAMAQQAPASASARIAAgIIAAgIQgBgbgCgRIgCgHIAAgGQAAgIAGAAQALAAAAAqIAAAUIAAAVIgBAKQgBAGgGAAQgEAAgFgEQgZgZgggtIgBAPIAAANIAAAQIABAQQgBARgGAAQgDAAgDgCg");
	this.shape_34.setTransform(397.8,32.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgbAxQgGgGAAgUIAAgJIAAgKIAAgEIABgCIABgcIgBgGIAAgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAOgDIAMgBQAPAAAJAEQAFABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgNADIAAAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQABAFgHABIgOABIgdADIAAAIIgBAIQABAOACACQABACAJAAIAKAAIAMAAIAEgBIADAAQAIAAAAAGQgBAGgFABQgGABgTAAQgTAAgGgFg");
	this.shape_35.setTransform(388.7,32.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnAyQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIACgUIABgVIgBgJIAAgLIABgPIAAgPQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABABQAAAAAAABQAAAAABABQAAAAAAABIgBAPIgBAPIABAQIAagFQAQgDALAAIABgbIACgKQACgGAEgBIAEACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIgBACIgBAIIAAAGIAAAFIgBATIgBASIABAOIABAPQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAgPIgBgOIAAgKQgKABgQADIgaAFIgBAQIgBARQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_36.setTransform(379.5,32.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAIAUQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgXIABgHQABgFADAAQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIAAADIgBAXQAAAGgGAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAgRAKIAAgMIAAgMQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAAMIAAALIAAADIABADQAAABAAAAQAAABAAAAQgBABAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgGAAAAgLg");
	this.shape_37.setTransform(362.6,28.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgDAeQgCgCAAgDIAAgDIgBgEQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAIAAAAANQAAADgCACQgDACgDAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAAAgBgAgEgPQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAgCIgBgDQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAGAAAAALQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCACgCAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_38.setTransform(354.1,32.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgJA2QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_39.setTransform(348.8,32.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVAbQgJgHAAgPQgBgPAJgLQAIgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgNAGIgYAMQAEAFAFADQAGACAFAAIALgBQAHgDADgDQABgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQgBAHgKAFQgKAFgKAAQgNAAgJgIgAgMgQQgFAGgDALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_40.setTransform(338.7,33.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_41.setTransform(331.6,33.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgJAAgFgDQgGgEgBgIQgDgRAAgMQABgJACgLQAAgFAFAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBAJIgBAKIABARIABAMIAFACIAEABQAHAAAKgDIgBgNIAAgLQABgOABgKQABgGAFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABABAAAAIgCAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgGAAgBgGg");
	this.shape_42.setTransform(319.1,33.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgCADgCQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQADAAABACQALAPAMAcIAJgXIAKgTQACgEADABQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBAEIgWAuQgIARgDAMIgFANQgBAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_43.setTransform(305.2,35.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AARAxIgKgPIgLgQIgLAIIgBAUQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgJIABgPIABgQIAAgVIAAgWIAAgHIAAgHQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIABAHIAAAHIAAAVIgBAVQAJgHAHgHIAPgOQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAIgUATIAOATQAKANAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgDAAgCgDg");
	this.shape_44.setTransform(295.1,31.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_45.setTransform(287.8,33.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_46.setTransform(270.9,33.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgQAyQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgfIgXgrIgDgEIgCgFQAAgCADgCQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQADAAABACQALAPAMAcIAJgXIAKgTQACgEADABQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgBAEIgWAuQgIARgDAMIgFANQgBAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_47.setTransform(264.3,35.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAEATIgDgPIgBgOIgFAMIgKAaQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgCAEgEABQgFAAgFgUIgEgaIgCgJIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAFAAABAEIABAKIABAJIAEAcQAHgTAIgaQACgGAEAAQAFAAACAIIAEAWIAEAZIAFgSIAIgiQABgDAFAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAADQgFAUgIAaIgGALQgDADgDABQgHAAgEgRg");
	this.shape_48.setTransform(250.1,33.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAWAhIgEgUIgRADIgQAEIgLAYQgCAEgDAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgCIASgeQAOgYAEAAQAFAAACAHIAEAVIAJArIAEAKIACAIQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgGAAgEgPgAgHAFIAWgFIgFgXg");
	this.shape_49.setTransform(237.2,32.3);

	this.instance_1 = new lib.Proshows1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(301.8,35.1,1,1,0,0,0,73.4,0);
	this.instance_1._off = true;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAIATQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgZIACgHQABgDADAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIAAACIgBAZQAAAFgFAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAgRAKIAAgLIAAgNQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAAMIAAALIAAADIABAEQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgGAAAAgLg");
	this.shape_50.setTransform(479.5,138.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgQAvQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgEACgDQACgEAEAAQAGAAAAAIQAAADgCADQgCADgDAAQgDAAgCgCgAgMAXQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgFAIgGIAOgLQAIgHAAgFQAAgIgHgGQgGgGgHAAQgEAAgGAEIgIAEQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCgFQAAgFAKgFQAIgEAGAAQAMAAAKAKQALAKAAANQAAAJgGAGQgEAEgJAHQgKAHgDAFQgCACgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_51.setTransform(473.3,142.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAWAhIgEgUIgRADIgQADIgLAZQgCADgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgBIASgfQAOgYAEAAQAFAAACAHIAEAWIAJArIAEAKIACAGQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQgGAAgEgPgAgHAEIAWgEIgFgYg");
	this.shape_52.setTransform(456.5,142.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgnAyQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIACgUIABgTIgBgKIAAgLIABgPIAAgPQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABIgBAQIgBAPIABAOIAagDQAQgDALgBIABgbIACgKQACgHAEABIAEABQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAIgBADIgBAIIAAAGIAAAFIgBATIgBASIABAOIABAPQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAgPIgBgOIAAgJQgKAAgQADIgaAFIgBARIgBAPQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_53.setTransform(446.9,142);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAOAyQgCgCgBgDQgCgIgBgFIgFgbIgDgaQgGAVgHAOQgHARgCAJIAAACQABAEgDACIgFABQgJAAAAgHIgCgJIgHgfIgNgsIgBgDQAAgFAHAAQAEgBACAFIAFAOIAHAbIAGAbQAHgQAHgVIAGgUQAFgOAFABQAFAAABAEQADAFACAVQABAKADAOIAFAZIAWg2IADgNIAEgLQADgEAEABQAGgBAAAHIgCAGIgDAHIgDALIgTAtIgJAXQgCADgEAAQgDABgDgCg");
	this.shape_54.setTransform(435.4,142.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgqAyQgCgCAAgDIABgIIAAgIIABgMIAAgMIAAgLIAAgNIgCgMIAAgMQAAgDADgCQACgDADAAQAEAAAEAIQAQAXAMAQQAPASASARIAAgIIgBgIQAAgbgBgRIgCgHIgCgGQAAgIAHAAQALAAAAAqIAAAUIAAAVIgBAKQgBAGgGAAQgDAAgFgEQgagZghgtIAAAPIAAANIAAAQIAAAQQABARgIAAQgDAAgCgCg");
	this.shape_55.setTransform(419.3,142);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIACgcIgBgGIgBgHQAAgIAGAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIAOgDIAMgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBAFgFABIgQABIgcADIAAAIIAAAIQAAAOABACQACACAIAAIAMAAIAMAAIADgBIAEAAQAGAAAAAGQABAGgGABQgGABgTAAQgUAAgFgFg");
	this.shape_56.setTransform(410.2,141.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgnAyQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIACgUIABgTIgBgKIAAgLIABgPIAAgPQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBAQIgBAPIABAOIAagDQAQgDALgBIABgbIACgKQACgHAEABIAEABQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAIgBADIgBAIIAAAGIAAAFIgBATIgBASIABAOIABAPQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgPIgBgOIAAgJQgKAAgQADIgaAFIgBARIgBAPQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_57.setTransform(401,142);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAHATQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgZIABgHQABgDAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIgBACIAAAZQAAAFgFAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgRAKIAAgLIAAgNQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIAAAMIgBALIABADIAAAEQAAAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgGAAAAgLg");
	this.shape_58.setTransform(384.1,138.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgDAeQgCgCABgDIgBgDIAAgEQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAHAAAAANQAAADgCACQgBACgEAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAAAgBgAgEgPQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAgCIAAgDQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAGAAAAALQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAABQgCACgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAg");
	this.shape_59.setTransform(375.7,142.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgJA2QgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_60.setTransform(370.4,142.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAFACAHAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgMAFQgJAFgJAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_61.setTransform(360.2,143.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_62.setTransform(353.2,143.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgJAAgFgDQgGgEgBgIQgDgRABgMQAAgJABgLQABgFAGAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAJIgBAKIAAARIADAMIAEACIAEABQAIAAAJgDIgBgNIAAgLQAAgOACgKQAAgGAGAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAIgCAYIAAANIAAAOIABAEIAAAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgGg");
	this.shape_63.setTransform(340.6,143.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgQAxQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAOgeIgXgrIgDgFIgCgFQAAgDADgCQAAAAABAAQAAgBAAAAQABAAABAAQAAgBABAAQADABABACQALAPAMAbIAJgVIAKgUQACgDADgBQABAAAAABQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAABIgBADIgWAuQgIASgDAMIgFALQgBAFgEABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_64.setTransform(326.8,145.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AARAxIgKgPIgKgQIgMAIIgBAUQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgHAAAAgJIAAgPIABgQIAAgVIABgWIgBgHIAAgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIAAAHIABAHIgBAVIAAAVQAIgHAHgHIAOgOQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgSATIANATQAKANAAAEQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCABgDAAQgDAAgCgDg");
	this.shape_65.setTransform(316.6,141.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_66.setTransform(309.3,143.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBABAAAAQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_67.setTransform(303,143.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_68.setTransform(292.4,143.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgQAxQAAAAgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgGAOgeIgXgrIgDgFIgCgFQAAgDADgCQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQADABABACQALAPAMAbIAJgVIAKgUQACgDADgBQABAAAAABQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIgBADIgWAuQgIASgDAMIgFALQgBAFgEABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_69.setTransform(285.9,145.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQgBABAAAAQAAAAAAABQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_70.setTransform(279.4,143.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAEASIgDgPIgBgMIgFAKIgKAbQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAABQgCADgEAAQgFAAgFgSIgEgaIgCgKIAAgJQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAgBABAAQAFAAABAGIABAJIABAKIAEAbQAHgTAIgZQACgIAEAAQAFAAACAIIAEAYIAEAXIAFgRIAIghQABgFAFAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABIAAACQgFAWgIAYIgGANQgDACgDAAQgHAAgEgRg");
	this.shape_71.setTransform(271.6,143.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAWAhIgEgUIgRADIgQADIgLAZQgCADgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgBIASgfQAOgYAEAAQAFAAACAHIAEAWIAJArIAEAKIACAGQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQgGAAgEgPgAgHAEIAWgEIgFgYg");
	this.shape_72.setTransform(258.8,142.1);

	this.instance_2 = new lib.Mickplays();
	this.instance_2.parent = this;
	this.instance_2.setTransform(348.1,137.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27,p:{x:179.4,y:57}},{t:this.shape_26},{t:this.shape_25,p:{x:193.4,y:58.8}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:217,y:58.8}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:247.6,y:58.8}},{t:this.shape_17},{t:this.shape_16,p:{x:261.3,y:58.8}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:279.4,y:57}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:306.1,y:57.2}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:380.3,y:57.2}},{t:this.shape_1},{t:this.shape}]},115).to({state:[{t:this.instance}]},40).to({state:[{t:this.instance}]},13).to({state:[{t:this.instance}]},11).to({state:[]},94).to({state:[{t:this.shape_49},{t:this.shape_27,p:{x:243.8,y:31.9}},{t:this.shape_48},{t:this.shape_25,p:{x:257.8,y:33.8}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_22,p:{x:281.5,y:33.8}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_18,p:{x:312.1,y:33.8}},{t:this.shape_42},{t:this.shape_16,p:{x:325.7,y:33.8}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_13,p:{x:343.9,y:31.9}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_9,p:{x:370.5,y:32.1}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_2,p:{x:444.7,y:32.1}},{t:this.shape_30},{t:this.shape_29}]},37).to({state:[{t:this.instance_1}]},30).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_1}]},12).to({state:[]},112).to({state:[{t:this.shape_72},{t:this.shape_27,p:{x:265.4,y:141.7}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_18,p:{x:333.6,y:143.5}},{t:this.shape_63},{t:this.shape_16,p:{x:347.3,y:143.5}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_13,p:{x:365.4,y:141.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_2,p:{x:392.1,y:141.9}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_9,p:{x:466.3,y:141.9}},{t:this.shape_51},{t:this.shape_50}]},36).to({state:[{t:this.instance_2}]},36).to({state:[{t:this.instance_2}]},43).to({state:[{t:this.instance_2}]},6).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).wait(13).to({scaleX:1.17,scaleY:1.17,x:376.3,y:10.5},11).to({_off:true},94).wait(433));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(340).to({_off:false},0).wait(19).to({x:303.7,y:33.2},0).to({scaleX:1.28,scaleY:1.28,x:380.8,y:18.8},12).to({_off:true},112).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(555).to({_off:false},0).wait(43).to({regX:73.4,x:281.5,y:145.9},0).to({scaleX:1.17,scaleY:1.17,x:370,y:8},6).wait(102));

	// Layer 10
	this.instance_3 = new lib.IfStacy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(251.3,29.7,1,1,0,0,0,73.4,0);
	this.instance_3._off = true;

	this.instance_4 = new lib.WhenBuffy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(94,32.8,1,1,0,0,0,73.4,0);
	this.instance_4._off = true;

	this.instance_5 = new lib.Becauseeveryoe();
	this.instance_5.parent = this;
	this.instance_5.setTransform(281.5,115.2,1,1,0,0,0,73.4,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).wait(86).to({scaleX:1.17,scaleY:1.17,x:130.3,y:10.6},11).to({_off:true},101).wait(426));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(280).to({_off:false},0).wait(79).to({scaleX:1.28,scaleY:1.28,x:131,y:18.6},12).to({_off:true},112).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(490).to({_off:false},0).wait(108).to({scaleX:1.17,scaleY:1.17,x:141.7,y:11.7},6).wait(102));

	// Layer 13
	this.instance_6 = new lib.IfStacyThrowsDiag1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(252.6,273.1,0.735,0.735,0,0,0,169.4,11.2);

	this.instance_7 = new lib.WhenBuffyGrills_diag1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(241.2,135,0.957,0.957,0,0,0,147.2,66.6);

	this.instance_8 = new lib.MickPlays_Diag2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(310.1,151.1,1,1,0,0,0,147.2,66.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},179).to({state:[]},94).to({state:[{t:this.instance_7}]},98).to({state:[]},112).to({state:[{t:this.instance_8}]},122).wait(101));

	// Layer 11
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIACgcIgBgGIgBgHQAAgIAGAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIAPgDIALgBQAQAAAJAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBAFgFABIgQABIgcADIAAAIIAAAIQgBAOACACQACACAIAAIAMAAIALAAIAEgBIAEAAQAGAAABAGQAAAGgGABQgGABgTAAQgUAAgFgFg");
	this.shape_73.setTransform(329.8,144.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(210,126,2,0.651)").s().p("AgZAsQgMgGAAgJQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQADAAACADIAGAHQAFAEALAAQAIAAAJgFQALgFAAgKQAAgIgJgEQgIgEgKgBQgKAAgHgDQgJgFAAgKQAAgLAMgKQANgIAMAAQAGAAAIACQAKACAAAFQAAAFgGAAIgJgBIgKgBQgIAAgHAFQgIAEAAAHQAAAGAKACIAMABQAPABAIAIQAIAHAAAKQAAAQgOAJQgMAHgPAAQgMAAgKgEg");
	this.shape_74.setTransform(321.1,144.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(210,126,2,0.651)").s().p("AgcAmQgHgKgCgRIgBggIAAgOIABgIQACgEAEgBQAGAAAAALIAAAlQAAAmAaAAQAZAAAAhAIAAgGIAAgFQAAgEABgDQADgEADAAQAGAAAAAJIAAAIIAAAIQAABIgmAAQgSAAgLgLg");
	this.shape_75.setTransform(311.8,144.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(210,126,2,0.651)").s().p("AAWAhIgEgUIgRADIgQADIgLAZQgCAEgDgBQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgBIASgfQAOgYAEAAQAFAAACAHIAEAWIAJArIAEAKIACAHQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgGAAgEgPgAgHAFIAWgFIgFgYg");
	this.shape_76.setTransform(302.1,144.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAyQgDgCAAgIIABgVQACgcAAgkQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAAlgCAcIAAAJIgBAKQARAAAYgIIACAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAAFgEACQgHADgPADQgNACgJAAQgHAAgDgCg");
	this.shape_77.setTransform(294,144.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(210,126,2,0.651)").s().p("AgaAnQgIgKgBgNQAAgVASgXQAQgSAOAAIAFAAIAFABQACgDAEAAQAEAAABAGIABAMQABADgCACQgCACgDABQgEAAgCgGIgEgEIgGgBQgJAAgLAOQgPATABAQQAAAIAEAGQAGAGAIAAQAFAAAHgEIALgHQADgDACABQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgRAPgQAAQgNAAgKgKg");
	this.shape_78.setTransform(286.5,144.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(210,126,2,0.651)").s().p("AgEAuQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgDIAAgDIgBgJIAAgKIgBgYIgCgaIgGABQgOAAgIgDQgFgBAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQACgDADABIAKABIAKAAIAMAAIAKAAIAPABIAOABQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAADQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgOgBIgPgBIgEAAIABAdIACAbIAAAHIABAHQAAAEgCADQgBAEgEAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_79.setTransform(357.9,124.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(210,126,2,0.651)").s().p("AgqAyQgBgCAAgDIAAgIIAAgIIABgMIAAgMIAAgLIAAgNIgBgMIgBgMQAAgDADgCQACgDADAAQADAAAFAIQAQAXAMAQQAPASASARIAAgIIgBgIQAAgbgBgRIgCgHIgBgGQgBgIAHAAQALAAAAAqIAAAUIAAAVIgBAKQgBAGgGAAQgDAAgFgEQgagZghgtIAAAPIAAANIAAAQIAAAQQABARgIAAQgDAAgCgCg");
	this.shape_80.setTransform(347.9,124.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIACgcIgBgGIgBgHQAAgIAGAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIAPgDIALgBQAQAAAJAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQgBAFgFABIgQABIgcADIAAAIIAAAIQgBAOACACQACACAIAAIAMAAIALAAIAEgBIAEAAQAGAAABAGQAAAGgGABQgGABgTAAQgUAAgFgFg");
	this.shape_81.setTransform(338.8,124.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(210,126,2,0.651)").s().p("AgTAzQgHgCgEgCIAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIABgUIAAgUIAAgVIAAgWQAAgDACgDQADgDADAAQABAAAJAFIALAFQARAGANANQAPAPAAARQAAALgFAKQgGAKgIAGQgKAHgSAAIgKgCgAgXgRIAAASIgBAiIACABQAFAEAIAAQAOAAAGgFQAGgEAFgHQADgHAAgIQAAgRgTgMQgGgFgYgKg");
	this.shape_82.setTransform(330,124.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(210,126,2,0.651)").s().p("AgqAyQgBgCgBgDIABgIIAAgIIAAgMIAAgMIAAgLIAAgNIgBgMIAAgMQAAgDACgCQADgDADAAQAEAAAFAIQAPAXAMAQQAPASASARIAAgIIAAgIQAAgbgDgRIgCgHIgBgGQABgIAGAAQALAAAAAqIAAAUIAAAVIgBAKQgBAGgGAAQgEAAgFgEQgZgZgggtIgBAPIAAANIAAAQIABAQQgBARgGAAQgDAAgDgCg");
	this.shape_83.setTransform(320,124.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAxQgGgGAAgUIAAgJIAAgKIAAgEIABgCIABgcIgBgGIAAgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAOgDIAMgBQAQAAAIAEQAFABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgNADIAAAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAFgFABIgPABIgdADIAAAIIAAAIQAAAOACACQABACAJAAIAKAAIANAAIADgBIADAAQAIAAgBAGQAAAGgFABQgGABgTAAQgTAAgGgFg");
	this.shape_84.setTransform(310.9,124.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(210,126,2,0.651)").s().p("AgaAxQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgTIABgaIACgZIAAgJIAAgJQACgGAFAAIAFgBIAKAAQAKAAAKAIQAMAJAAAMQAAAQgMAIQgLAJgOgBIgIAAIAAAiQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOglIAAAMIgBAZIAHAAQAKAAAHgFQAIgGAAgKQAAgHgIgFQgHgFgHABIgFAAIgEAAg");
	this.shape_85.setTransform(303.4,124.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAxQgGgGAAgUIAAgJIAAgKIAAgEIABgCIABgcIgBgGIAAgHQAAgIAGAAQABAAABAAQAAAAABABQAAAAABAAQABAAAAABIAOgDIAMgBQAQAAAIAEQAFABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgNADIAAAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAFgFABIgPABIgdADIAAAIIAAAIQAAAOACACQABACAJAAIAKAAIANAAIADgBIADAAQAIAAgBAGQAAAGgFABQgGABgTAAQgTAAgGgFg");
	this.shape_86.setTransform(296.1,124.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(210,126,2,0.651)").s().p("AgTAzQgHgCgEgCIgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIABgUIABgUIgBgVIAAgWQAAgDADgDQACgDACAAQADAAAIAFIALAFQARAGANANQAPAPAAARQAAALgFAKQgGAKgIAGQgKAHgRAAIgLgCgAgXgRIAAASIgBAiIABABQAGAEAJAAQANAAAGgFQAGgEAEgHQAEgHAAgIQAAgRgUgMQgFgFgXgKg");
	this.shape_87.setTransform(287.3,124.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,204,102,0.651)").s().p("A1RHCIAAuDMAqjAAAIAAODg");
	this.shape_88.setTransform(235.5,118);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIABgcIAAgGIgBgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAPgDIALgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAAFgHABIgOABIgdADIAAAIIgBAIQAAAOACACQACACAJAAIALAAIALAAIAEgBIADAAQAIAAAAAGQgBAGgFABQgGABgTAAQgUAAgFgFg");
	this.shape_89.setTransform(337.6,181.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(210,126,2,0.651)").s().p("AgZAsQgMgGAAgJQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQADAAACADIAGAHQAFAEALAAQAIAAAJgFQALgFAAgKQAAgIgJgEQgIgEgKgBQgKAAgHgDQgJgFAAgKQAAgLAMgKQANgIAMAAQAGAAAIACQAKACAAAFQAAAFgGAAIgJgBIgKgBQgIAAgHAFQgIAEAAAHQAAAGAKACIAMABQAPABAIAIQAIAHAAAKQAAAQgOAJQgMAHgPAAQgMAAgKgEg");
	this.shape_90.setTransform(328.9,182);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(210,126,2,0.651)").s().p("AgcAlQgHgIgCgTIgBgeIAAgPIABgIQACgFAEABQAGAAAAAKIAAAlQAAAmAaAAQAZAAAAhAIAAgGIAAgFQAAgEACgDQABgEAEAAQAGAAAAAJIAAAHIAAAIQAABJgmAAQgSAAgLgMg");
	this.shape_91.setTransform(319.6,181.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(210,126,2,0.651)").s().p("AAWAhIgEgUIgRADIgQAEIgLAYQgCADgDABQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgCIASgeQAOgYAEAAQAFAAACAHIAEAVIAJArIAEAKIACAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgGAAgEgPgAgHAEIAWgEIgFgXg");
	this.shape_92.setTransform(309.9,181.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAyQgDgDAAgHIABgVQACgcAAgjQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAjgCAdIAAAKIgBAJQARAAAYgIIACAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgEACQgHAEgPACQgNADgJAAQgHAAgDgCg");
	this.shape_93.setTransform(301.8,181.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(210,126,2,0.651)").s().p("AgZAnQgJgKAAgNQgBgVATgWQAPgTAOAAIAGAAIAEABQADgDADAAQAEAAABAFIABANQAAADgBACQgCACgDAAQgEAAgCgEIgDgGIgHAAQgJAAgKAOQgPATgBAQQAAAIAGAGQAFAGAIAAQAFAAAHgDIALgIQADgDACAAQABAAABABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgRAPgQAAQgOAAgIgKg");
	this.shape_94.setTransform(294.3,181.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(210,126,2,0.651)").s().p("AgEAuQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgDIAAgDIgBgJIAAgKIgBgYIgCgaIgGABQgOAAgIgDQgFgBAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQACgDADABIAKABIAKAAIAMAAIAKAAIAPABIAOABQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAADQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgOgBIgPgBIgEAAIABAdIACAbIAAAHIABAHQAAAEgCADQgBAEgEAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_95.setTransform(365.8,161.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(210,126,2,0.651)").s().p("AgqAyQgCgCABgDIAAgIIAAgIIABgMIAAgMIAAgLIAAgNIgBgMIgBgMQAAgDACgCQADgDADAAQADAAAGAIQAPAXAMAQQAPASASARIAAgIIgBgIQAAgbgCgRIgBgHIgBgGQgBgIAHAAQALAAAAAqIAAAUIAAAVIgBAKQgBAGgGAAQgEAAgEgEQgagZghgtIAAAPIAAANIAAAQIAAAQQAAARgGAAQgDAAgDgCg");
	this.shape_96.setTransform(355.7,161.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIABgcIAAgGIgBgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAPgDIALgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAFgHABIgOABIgdADIAAAIIgBAIQAAAOACACQACACAJAAIALAAIALAAIAEgBIADAAQAIAAAAAGQgBAGgFABQgGABgTAAQgUAAgFgFg");
	this.shape_97.setTransform(346.6,161.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(210,126,2,0.651)").s().p("AgTAzQgHgCgEgCIAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIABgUIAAgUIAAgVIAAgWQAAgDADgDQACgDACAAQACAAAJAFIALAFQARAGANANQAPAPAAARQAAALgFAKQgFAKgJAGQgKAHgSAAIgKgCgAgXgRIAAASIgBAiIACABQAFAEAIAAQAOAAAHgFQAFgEAFgHQADgHAAgIQAAgRgUgMQgFgFgXgKg");
	this.shape_98.setTransform(337.9,161.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(210,126,2,0.651)").s().p("AgqAyQgCgCAAgDIABgIIAAgIIAAgMIAAgMIAAgLIAAgNIgBgMIAAgMQAAgDADgCQACgDADAAQAEAAAEAIQAQAXAMAQQAPASASARIAAgIIAAgIQAAgbgCgRIgDgHIgBgGQAAgIAHAAQALAAAAAqIAAAUIAAAVIgBAKQgBAGgGAAQgDAAgGgEQgZgZgggtIgBAPIAAANIAAAQIABAQQAAARgIAAQgDAAgCgCg");
	this.shape_99.setTransform(327.9,161.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAxQgGgGAAgUIAAgJIAAgKIAAgEIABgCIACgcIgBgGIgBgHQAAgIAGAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIAOgDIAMgBQAQAAAIAEQAFABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAFgFABIgQABIgcADIAAAIIAAAIQAAAOABACQACACAIAAIALAAIANAAIADgBIAEAAQAGAAAAAGQABAGgGABQgGABgTAAQgTAAgGgFg");
	this.shape_100.setTransform(318.8,161.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(210,126,2,0.651)").s().p("AgaAxQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgSIABgaIACgaIAAgJIAAgJQACgFAFABIAFgBIAKAAQAKAAAKAHQAMAJAAANQAAAPgMAJQgLAHgOABIgIgBIAAAhQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAABQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOglIAAALIgBAaIAHAAQAKAAAHgFQAIgFAAgKQAAgIgIgFQgHgEgHgBIgFAAIgEABg");
	this.shape_101.setTransform(311.2,161.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAxQgGgGAAgUIAAgJIAAgKIAAgEIABgCIACgcIgBgGIgBgHQAAgIAGAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIAOgDIAMgBQAQAAAIAEQAFABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAFgFABIgQABIgcADIAAAIIAAAIQAAAOABACQACACAIAAIALAAIANAAIADgBIAEAAQAGAAAAAGQABAGgGABQgGABgTAAQgTAAgGgFg");
	this.shape_102.setTransform(303.9,161.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(210,126,2,0.651)").s().p("AgTAzQgHgCgEgCIgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIABgUIABgUIgBgVIAAgWQAAgDACgDQADgDADAAQACAAAIAFIALAFQARAGANANQAPAPAAARQAAALgFAKQgGAKgIAGQgKAHgRAAIgLgCgAgXgRIAAASIgBAiIABABQAGAEAJAAQANAAAGgFQAHgEADgHQAEgHAAgIQAAgRgTgMQgGgFgYgKg");
	this.shape_103.setTransform(295.2,161.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,204,102,0.651)").s().p("A1RJzIAAtAIKRAAIAAmlIJeAAIAAGlIW0AAIAANAg");
	this.shape_104.setTransform(241.6,173.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIABgcIgBgGIAAgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAPgDIALgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAFgHABIgOABIgdADIAAAIIgBAIQAAAOACACQACACAJAAIALAAIALAAIAEgBIAEAAQAHAAAAAGQgBAGgFABQgGABgTAAQgUAAgFgFg");
	this.shape_105.setTransform(148.2,181.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(210,126,2,0.651)").s().p("AgcAlQgHgIgCgTIgBgeIAAgPIABgIQACgFAEABQAGAAAAAKIAAAlQAAAmAaAAQAZAAAAhAIAAgGIAAgFQAAgEACgDQACgEADAAQAGAAAAAJIAAAIIAAAHQAABJgmAAQgSAAgLgMg");
	this.shape_106.setTransform(130.2,182);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(210,126,2,0.651)").s().p("AAWAhIgEgUIgRADIgQAEIgLAYQgCADgDABQgBgBAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgBIASgfQAOgYAEAAQAFAAACAHIAEAWIAJAqIAEALIACAGQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgGAAgEgPgAgHAEIAWgEIgFgXg");
	this.shape_107.setTransform(120.5,182);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAyQgDgCAAgIIABgVQACgcAAgjQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAjgCAdIAAAJIgBAKQARAAAYgIIACAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgEADQgHADgPACQgNADgJAAQgHAAgDgCg");
	this.shape_108.setTransform(112.4,182);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(210,126,2,0.651)").s().p("AgZAnQgJgKAAgNQgBgUATgXQAPgTAOAAIAGAAIAEABQADgDADAAQAEAAABAFIABANQAAADgBACQgCACgDAAQgEAAgCgEIgDgGIgHAAQgJAAgKAOQgPATgBAQQAAAIAGAGQAFAGAIAAQAFAAAHgDIALgIQADgCACAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAADgCACQgRAPgQAAQgOAAgIgKg");
	this.shape_109.setTransform(104.9,181.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(210,126,2,0.651)").s().p("AgqAyQgCgCABgDIAAgIIAAgIIABgMIAAgMIAAgLIAAgNIgBgMIgBgMQAAgDACgCQADgDADAAQADAAAGAIQAPAXAMAQQAPASASARIAAgIIgBgIQAAgbgCgRIgBgHIgBgGQAAgIAGAAQALAAAAAqIAAAUIAAAVIgBAKQgBAGgGAAQgEAAgEgEQgagZghgtIAAAPIAAANIAAAQIAAAQQAAARgGAAQgDAAgDgCg");
	this.shape_110.setTransform(166.3,161.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIABgcIgBgGIAAgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAPgDIALgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAFgHABIgOABIgdADIAAAIIgBAIQAAAOACACQACACAJAAIALAAIALAAIAEgBIAEAAQAHAAAAAGQgBAGgFABQgGABgTAAQgUAAgFgFg");
	this.shape_111.setTransform(157.2,161.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAxQgGgGAAgUIAAgJIAAgKIAAgEIABgCIACgcIgBgGIgBgHQAAgIAGAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIAOgDIAMgBQAQAAAIAEQAFABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAFgFABIgQABIgcADIAAAIIAAAIQAAAOABACQACACAIAAIALAAIANAAIADgBIAEAAQAGAAAAAGQABAGgGABQgGABgTAAQgTAAgGgFg");
	this.shape_112.setTransform(129.3,161.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(210,126,2,0.651)").s().p("AgaAxQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgSIABgaIACgZIAAgJIAAgJQACgGAFAAIAFAAIAKAAQAKAAAKAHQAMAJAAAMQAAAQgMAJQgLAHgOABIgIgBIAAAhQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOglIAAAMIgBAZIAHAAQAKAAAHgFQAIgFAAgLQAAgHgIgFQgHgEgHgBIgFAAIgEABg");
	this.shape_113.setTransform(121.8,161.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(210,126,2,0.651)").s().p("AgbAxQgGgGAAgUIAAgJIAAgKIAAgEIABgCIACgcIgBgGIgBgHQAAgIAGAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIAOgDIAMgBQAQAAAIAEQAFABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgNADIAAAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAFgFABIgQABIgcADIAAAIIAAAIQAAAOACACQABACAIAAIALAAIANAAIADgBIAEAAQAGAAAAAGQABAGgGABQgGABgTAAQgTAAgGgFg");
	this.shape_114.setTransform(114.5,161.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,204,102,0.651)").s().p("A6IKDIAAv7IPOAAIAAkKILVAAIAAHFIZvAAIAANAg");
	this.shape_115.setTransform(258.2,178.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},202).to({state:[]},71).to({state:[{t:this.shape_104},{t:this.shape_103,p:{x:295.2,y:161.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99,p:{x:327.9,y:161.7}},{t:this.shape_98,p:{x:337.9,y:161.7}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95,p:{x:365.8,y:161.6}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90,p:{x:328.9,y:182}},{t:this.shape_89}]},119).to({state:[]},91).to({state:[{t:this.shape_115},{t:this.shape_103,p:{x:105.7,y:161.8}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_99,p:{x:138.4,y:161.8}},{t:this.shape_98,p:{x:148.4,y:161.8}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_95,p:{x:176.3,y:161.7}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_90,p:{x:139.5,y:182.1}},{t:this.shape_105}]},144).wait(79));

	// Layer 12
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_116.setTransform(253.8,157.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.039)").s().p("A60NEIAA6HMA1pAAAIAAaHg");
	this.shape_117.setTransform(253.8,156.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.078)").s().p("A60NGIAA6LMA1pAAAIAAaLg");
	this.shape_118.setTransform(253.8,156.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.122)").s().p("A60NJIAA6RMA1pAAAIAAaRg");
	this.shape_119.setTransform(253.8,156.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.161)").s().p("A60NLIAA6VMA1pAAAIAAaVg");
	this.shape_120.setTransform(253.8,156.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.2)").s().p("A60NOIAA6bMA1pAAAIAAabg");
	this.shape_121.setTransform(253.8,155.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.239)").s().p("A60NRIAA6hMA1pAAAIAAahg");
	this.shape_122.setTransform(253.8,155.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(255,255,255,0.278)").s().p("A60NTIAA6lMA1pAAAIAAalg");
	this.shape_123.setTransform(253.8,155.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.322)").s().p("A60NWIAA6rMA1pAAAIAAarg");
	this.shape_124.setTransform(253.8,155);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(255,255,255,0.361)").s().p("A60NYIAA6vMA1pAAAIAAavg");
	this.shape_125.setTransform(253.8,154.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.4)").s().p("A60NbIAA61MA1pAAAIAAa1g");
	this.shape_126.setTransform(253.8,154.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(255,255,255,0.439)").s().p("A60NdIAA65MA1pAAAIAAa5g");
	this.shape_127.setTransform(253.8,154.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.478)").s().p("A60NgIAA6/MA1pAAAIAAa/g");
	this.shape_128.setTransform(253.8,154);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(255,255,255,0.522)").s().p("A60NiIAA7DMA1pAAAIAAbDg");
	this.shape_129.setTransform(253.8,153.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.561)").s().p("A60NlIAA7JMA1pAAAIAAbJg");
	this.shape_130.setTransform(253.8,153.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(255,255,255,0.6)").s().p("A60NoIAA7PMA1pAAAIAAbPg");
	this.shape_131.setTransform(253.8,153.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(255,255,255,0.639)").s().p("A60NqIAA7TMA1pAAAIAAbTg");
	this.shape_132.setTransform(253.8,153);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(255,255,255,0.678)").s().p("A60NtIAA7ZMA1pAAAIAAbZg");
	this.shape_133.setTransform(253.8,152.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(255,255,255,0.722)").s().p("A60NvIAA7dMA1pAAAIAAbdg");
	this.shape_134.setTransform(253.8,152.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(255,255,255,0.761)").s().p("A60NyIAA7jMA1pAAAIAAbjg");
	this.shape_135.setTransform(253.8,152.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(255,255,255,0.8)").s().p("A60N0IAA7nMA1pAAAIAAbng");
	this.shape_136.setTransform(253.8,152);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(255,255,255,0.039)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_137.setTransform(253.8,157.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.078)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_138.setTransform(253.8,157.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(255,255,255,0.122)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_139.setTransform(253.8,157.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,255,255,0.161)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_140.setTransform(253.8,157.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(255,255,255,0.2)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_141.setTransform(253.8,157.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,255,255,0.239)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_142.setTransform(253.8,157.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(255,255,255,0.278)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_143.setTransform(253.8,157.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.322)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_144.setTransform(253.8,157.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(255,255,255,0.361)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_145.setTransform(253.8,157.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.4)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_146.setTransform(253.8,157.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(255,255,255,0.439)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_147.setTransform(253.8,157.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.478)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_148.setTransform(253.8,157.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,255,255,0.522)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_149.setTransform(253.8,157.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.561)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_150.setTransform(253.8,157.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(255,255,255,0.6)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_151.setTransform(253.8,157.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,255,255,0.639)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_152.setTransform(253.8,157.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(255,255,255,0.678)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_153.setTransform(253.8,157.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,255,255,0.722)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_154.setTransform(253.8,157.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,255,255,0.761)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_155.setTransform(253.8,157.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,255,255,0.8)").s().p("A60NBIAA6BMA1pAAAIAAaBg");
	this.shape_156.setTransform(253.8,157.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(255,255,255,0.039)").s().p("A65NHIAA6NMA1zAAAIAAaNg");
	this.shape_157.setTransform(254,157.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(254,255,255,0.078)").s().p("A6+NMIAA6XMA19AAAIAAaXg");
	this.shape_158.setTransform(254.1,158.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(254,255,255,0.122)").s().p("A7DNRIAA6hMA2HAAAIAAahg");
	this.shape_159.setTransform(254.3,158.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(254,255,255,0.161)").s().p("A7HNXIAA6tMA2PAAAIAAatg");
	this.shape_160.setTransform(254.4,159.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(254,255,255,0.2)").s().p("A7MNcIAA63MA2ZAAAIAAa3g");
	this.shape_161.setTransform(254.6,159.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(253,255,255,0.239)").s().p("A7RNiIAA7DMA2jAAAIAAbDg");
	this.shape_162.setTransform(254.7,160.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(253,255,255,0.278)").s().p("A7WNnIAA7NMA2tAAAIAAbNg");
	this.shape_163.setTransform(254.9,160.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(253,255,255,0.322)").s().p("A7bNsIAA7XMA23AAAIAAbXg");
	this.shape_164.setTransform(255,161.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(253,255,255,0.361)").s().p("A7gNxIAA7iMA3BAAAIAAbig");
	this.shape_165.setTransform(255.2,161.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(253,255,255,0.4)").s().p("A7lN3IAA7tMA3LAAAIAAbtg");
	this.shape_166.setTransform(255.3,162.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(252,255,255,0.439)").s().p("A7qN8IAA73MA3VAAAIAAb3g");
	this.shape_167.setTransform(255.5,163);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(252,255,255,0.478)").s().p("A7vOCIAA8DMA3fAAAIAAcDg");
	this.shape_168.setTransform(255.6,163.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(252,255,255,0.522)").s().p("A70OHIAA8NMA3oAAAIAAcNg");
	this.shape_169.setTransform(255.8,164.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(252,255,255,0.561)").s().p("A75OMIAA8XMA3yAAAIAAcXg");
	this.shape_170.setTransform(255.9,164.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(251,255,255,0.6)").s().p("A79OSIAA8jMA37AAAIAAcjg");
	this.shape_171.setTransform(256.1,165.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(251,255,255,0.639)").s().p("A8COXIAA8tMA4GAAAIAActg");
	this.shape_172.setTransform(256.2,165.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(251,255,255,0.678)").s().p("A8HOdIAA85MA4PAAAIAAc5g");
	this.shape_173.setTransform(256.4,166.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(251,255,255,0.722)").s().p("A8MOiIAA9DMA4ZAAAIAAdDg");
	this.shape_174.setTransform(256.5,166.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(250,255,255,0.761)").s().p("A8ROnIAA9NMA4jAAAIAAdNg");
	this.shape_175.setTransform(256.7,167.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(250,255,255,0.8)").s().p("A8WOsIAA9YMA4tAAAIAAdYg");
	this.shape_176.setTransform(256.8,167.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_116}]},179).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[]},74).to({state:[{t:this.shape_116}]},98).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[]},92).to({state:[{t:this.shape_116}]},122).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).wait(81));

	// Layer 15
	this.instance_9 = new lib.NoticeThat("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(240.8,4.1,1,1,0,0,0,187.5,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.32,scaleY:1.32,x:250.2,y:8.8},11).wait(70).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:240.8,y:293.7},10).wait(615));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.7,-15.6,366.2,39.4);


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


(lib.throw_and_catch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		playSound("ball_passes");
	}
	this.frame_30 = function() {
		playSound("_catch");
	}
	this.frame_40 = function() {
		playSound("ball_passes");
	}
	this.frame_50 = function() {
		playSound("_catch");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(10).call(this.frame_30).wait(10).call(this.frame_40).wait(10).call(this.frame_50).wait(11));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AinixQAKALAHAMQAAAAAAAAAiNi7QgIADgDAIACoCeQAAACAAACQAAABAAACIAAANIAAAK");
	this.shape.setTransform(300.5,46.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ADUAtQADgEADgFQALgOAHgNQAHgOAEgQQAFgPgBgQQgBgQAAgQQgBgOAEgPQAFgQgHgLQgDgEgDgEQgIgDgEgGQgCgDgCgEQgIgPgEgTQgIgngXgcQgLgPgOgPQgHgHgHgHQgLgggfgQQgggRgrgJADUAtQgGAJgGAJQgDAFgDAFQgBAAAAAAQgFAJgFAJQgBABAAAAQADAFADAEQAIgOAGgOQAGgOAEgOgACnDGQAAABABABQAFAHAFAGQAGAHAHAGQAIAHACgJQAAAAAAgBQADgQgMgNQgGgGgHgIQARALARANQAPAMgEgMQgBgBAAgBQgBgBAAgBQgJgTgPgOQgCgCgCgBQgBgBgBgCQgPgMAOgQQAEgFgBgFQAAgIgDgIQgBgDgCgDAgeCJQgIALgIAMQgKAQgLAQQgLAQgKAOQgMAQgKAPQgIANAGAFQAEAAADADQABAAAAABQAQAKAMAMQAMAMANANQANAMAOAOQAPAOANANQANALAOAOQANANAOANQAEAEAEAEQACACACABQABACACACQALAMATAHQAEACAFACQARAFAIAJQAMAOgHAVQgKAkgXANQgBAAAAAAQgLAIgKAHQgQAKgRAGQgQAFgRAEQgOAEgIAHQgLAHgKgEQgQgHgWALQgBADgBACQgDARAUACQACAAACAAQARACASABQAFAAADADQAFADAFACQAMADANgKQANgLASgGQANgEBdgQIATgDQAegFAvgEQACAAACAAQABgBABAAQACgBACAAQAAAAABAAQAGgCAGgCQASgGASgGQAFgCABgDQADgSgQgJQgNgHgLgMQgCgCgCgBQgLgIgKgIQgOgKgPgNIgBAAQgNgLgNgNQgJgKgJgLQgDgEgDgEQgJgMgMgQQgJgOgOgOQgNgOgNgOQgOgOgOgKQgNgJgQgOQgOgMgQgLQgMgJgMgJQAJgNAOgNQAOgNAOgOQAMgOAMgNQAAgBAAAAQgIgKgOgJQgTgMgVgKQgWgJgWADQgGABgFABQgIACgHADQAHgIAGgMQAIgQALgQQAIgPAFgRAgln2QADgCAEgDQANgLAEgTQABgIgDgHQgJgPgQAJQgRAKgDARQgPgKgRgCQgPgCgOgDQgBABgBAAQgDABgCgBQgLAOgJAPQgBADgCADQgFAJgGAIQgCADgDAEQgBACgEABQgJADgHAEQgCABgCABIAAABQgCABgCABQgBABAAABIgBAAQgCACgCABQgEAFgEADQAAABgBABQAAAAgBABQgBABgBABQgHAHgHAGQgOANgLAQQgJgQADgZQAEgZARgTQAMgNANgMQAFgFAFgDQgPAFgQALQgGADgHADQAZgdAbgbQAUgTAUgQQAEgDAEABQgOgFgQgLQANACAUACQATADALgHQAHgWAMgPQADAMADAPQABAIACAGQAPgLAUgHQAUgHAPAJQgXAEABAOQAbAPAUAQQADACADADQgPgCgTAAQgHAAgGgBQADAFADAEQADAFAEAEQAIAHAKADQAGADAAAIQgBANgJAJQgLAMgMAJQgDACgCgBQgCgBgCgFQgDABgDABAiKn4QAHgUATAAQAJAAgBABAgXmuQABAUAHAPQAAAAAAABQAGANAJAIAghnwQAEAFADAFQAJAfgGAZQgEARgLAOAivmJQAIgGAHgIQACgCACgCIAAAAQAKgMALgMQAKgOAEgPQAIAKAAANQAAASgGASQgGATgPADQgNADgNgIQgDgBgGgEQgHAFgHAEAi0mwQgIgCgDgDQgDgDACgFQAAgBACgCIAAAAQADgDAEgEAiqk3QAEgJAFgCQAMgDAJgGQgFAAgKAAQgPAAgPgLQgPgMgHgPQgDgFgBgFQAAgCAAgCQAAgBAAAAQAAgBAAgBQAAgBAAgBQAAgGACgHQAEgQAKgRAiqk2QgLAOgCAWQgFAmAPAYQABACABABQAGAJgCAHQgFAYgIAWQgDAIgDAHQgHARAFAbQABACAAACQgBAHgGAQQAAACgBACQgKAgABAOQACANAAAMQAAANgCAMQgBAFgCAEQgCAJgDAHQgEAMgLAJQgBABgBABQgBADgBADQgEAJAAAJQAAAGgBAGIgBAAQAAAHgCAGQgCANAAAOQAAABAAAAQAEgEAEgEQALgNAIgOQAAAAABAAQAAAAABAAQABAAACAAQAPAAAPgBQAFgBAFAAQACAAABAAQASgCASABQAUABASAIQAHAEAIAEQgKARgMAPQgNAOgOAOQgOANgNANQgPAOgNANQgOANgJANQgCADgBACQgHgDgHgBAAPkmQABACACACQAXAfAfAOQAPAHANAJQABAFACAFQABADABAEQALAoAHAzAAel+QgVgGgYgGAjWCBQgZAAAPgQQAEgEAFgFQABgCABgBQAHgHAIgHQAOgNAOgOQAMgNANgOQACgCACgCQABgDACgEQAEgIAEgIQADgFADgEQAGgLAFgNQAAgMgDgOQgKgngOgqQgNgkgEgpAjxCkQgJAKgLAHQgQALgNAOQgNAOgKAQQgHAKgHAJQgCADgDADQgFAOAFAOQAFARALAQQAKAQANAPQAMAOANANQAOANAOAOQANANANANQANAPAMANQANANANAOQANANAQAIQAHADAEAGQAEAFABAHIAAAAQgDAEgGAEQgNAKgUAFQgBABgBAAQgRAEgTABQgUACgTACQgSADgSAFQgBABgBAAQgJgGgNACQgZACAJAZQAEgDAIgBQAJAAAIACQAAAAABAAQAFABAFAAIABAAQABAAACAAQAIAAAHgEQAEgBADgDQALgGAJgBQADAAACgBQAMAAAKgCQATgDATgFQABAAABAAIABAAQABAAABgBQARgDASgBQAAAAABAAQAOgBAMgGQAFgCAEgCQAFgEAFgEQALgKAVgFQAKgCA1gMQg1ghgOgFQgJgCgHgHQgGgFgFgIQgJgNgLgQQgLgQgIgRQgEgKgIgLQgKgOgKgOQgBgCgBgCQgNgQgJgKQgMgNgQgKQgFgCgEgCABkjlQAKAIAJAJQAFAGAFAGQADAFAEAFQAQAWAPAbQACAFgBAKQgDAWgFAVQABgBABgBQAAACgCAFQAAACgBABQgBADgCADQAAACgBABQgDAIgDAIQgFAQACAQQACARgBAPQAAAKgCAKQgBAGgCAGQgEAOgDAOQAAACgBACQgIAMgCAOQgCAKgEAKQgCAFgCAGQgCAGgCAGQgBACgBACQgCAHgCAHQgBAKACAJQABAEADAFQAHAPAHAOQACACABADQAGAKAGALQABABABABQAKARALADQANgKgDgKQAFAEAFAEQAHgHgCgIQgBgFgCgFQgCgGgDgGQgBgDgCgCQgEgJgEgJQgBgBgBgBQgCgCgBgDQgBgBAAAAQgBgBAAgBQgFgJgFgIACfhLQgBAAgBgBQgOgJgKgGQgBgBgBAAQgDACgCAAAh2AFQCGgXAygdQAxgdABgGQAAgGAHgMAh8AGQADAAADgBAiCAGQABABABAAAh8AGQgCABgCAAIAAAAQAFgBAFgBAiAAHQgBgBgBAAAh8AIQgJAMgIAJAgeCJQADgEAEgEACrD6QgCgCgCgBQgBgBAAgBQgHgFgGgFIAAgBQgHgGgDgHQgDgIAAgIABXC3QAEAEADAFQAFgEAGgEAhxgbQgBAUgKANAAMEHQAAABAAAAQgDAEACADAAHEEQADACACAB");
	this.shape_1.setTransform(304.9,74.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC97").s().p("AgMgBIABgBIABgCIAIgIIADgDIAAAAIACgCIAEgCIAGAIQgHADgEAIIAHAHIAAAAIgCADQgCAFADADIgEACQgGgLgKgKg");
	this.shape_2.setTransform(284.9,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAjIgJgFQAIgGAHgIIAEgEIAAAAIAUgXQAKgOAEgPQAIAKAAANQAAARgGASQgGATgPADIgGABQgJAAgKgGg");
	this.shape_3.setTransform(290.4,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiIBQQADgZARgTQAMgOANgLIAKgIQgOAFgQALIgNAGQAZgcAbgbQAUgTAUgQQADgDAFABQgOgFgQgLIAhAEQASADALgHQAHgWAMgPIAFAbIAEAOQAPgLAUgHQAUgHAPAJQgXAEABAOQAaAPAWAQIAGAFQgQgCgTAAIgNgBIAGAJIAHAJQAIAHAKADQAHADgBAIQAAAMgKAJQgLAMgMAJQgDACgCgBQgCgCgCgEIAGgFQAOgLADgSQACgIgDgHQgKgQgQAKQgRAKgCAQQgQgJgRgCIgcgFIgBABQgDABgCgBQgMANgIAPIgDAGIgLARIgFAHQgCACgEABQgIADgIAEIgDACIAAABIgEACIgCACIAAAAIgEADIgIAIIgBACIgBABIgCACIgOANQgOANgLAQQgJgQADgZg");
	this.shape_4.setTransform(292.6,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02CD01").s().p("ABgCFIAAgBQgIgJgNgJQgTgMgWgKQgVgKgXAEIgLABIAHgIIgHAIIgPAFQAIgIAFgLQAJgQAKgQQAIgPAEgSQgEASgIAPQgKAQgJAQQgFALgIAIIggACIgPgIQgSgIgTgBQgTgBgSABIgDAAIgKABIgeACIgDAAIgBAAIgBAAQgYgBAOgPIAJgKIADgDIAOgNIAcgbIAagaIADgEIARgVQAggEAggIIAUgFIAKgDIAagGQAUgFARgGQARgHAQgLQARgLAQgJQAQgJAMgQQABABAEgCIABABIAYAOIACACIgCAFIgCAEIgGAQQgEAPABARQACARgBAPQAAALgCAKIgDAMQgEANgCANIgBAEQgIAMgDAOIgGAUIgEALIgEANIgBAEIgEAOQgCAJACAJIgLAIIgHgJgAgkBcIAAAAgAC/ArIABgBIALgSIAAgBIAGgJIAMgRQgEANgGANQgGAPgIAOIgGgJg");
	this.shape_5.setTransform(304,79.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1D38D").s().p("AAMJgQgFgBgFgEQgDgCgFgBIgjgCIgEgBQgUgCADgRIACgEQAWgLAQAHQAKAEALgIQAIgGAOgEIAhgKQARgFAQgLIAVgOIABgBQAXgMAKgkQAHgWgMgNQgIgJgRgGIgJgDQgTgIgLgMIgDgDIgEgDIgIgJIgbgaIgbgZIgcgaIgbgaIgZgZQgMgMgQgLIgBgBQgDgCgEAAQgGgGAIgMIAWgfIAVgfIAVggQAIgMAIgLIALgCQAWgDAWAKQAVAJATANQAOAJAIAJIAAABIgYAbQgOAPgOAMQgOANgJAOIAYARIAeAYQAQANANAJQAOAKAOAOIAaAcQAOAPAJAOIAVAcIAGAIIASAVQANANANALIABAAIAdAWIAVAQIAEADQALANANAHQAQAIgDATQgBADgFABIgkAMIgMAEIgBAAIgEABIgCABIgEABQgvAEgeAFIgTADQhdAQgNAEQgSAGgNAKQgKAIgJAAIgGgBgAALDgIgBgCIACgEIAAgBIgFgEIAFAEIAAABIgCAEIABACgAkpIJQANgBAJAFIACAAQASgFASgDIAngFQATgBARgEIACAAQAUgFANgKIAJgIIAAgBQgBgHgEgFQgEgFgHgEQgQgIgNgNIgagbIgZgbIgagbIgcgbQgNgMgMgPQgNgPgKgPQgLgQgFgSQgFgOAFgNIAFgHIAOgSQAKgQANgPQANgNAQgLQALgIAJgJIAIgJQALgMAIgOIABAAIABAAIADAAIAegCIAKgBIADAAQASgBASABQAUABASAIIAPAHQgKASgMAPIgbAcIgbAZIgcAbQgOAOgJANIgDAEQgHgCgHgCQAHACAHACIAJAEQAQAKAMANQAJAKANARIACADIAUAdQAIAKAEAKQAIASALAQIAUAdQAFAIAGAFQAHAGAJADQAOAFA1AhIg/AOQgVAEgLALIgKAHIgJAFQgMAFgOABIgBAAQgSABgRAEIgCAAIgBAAIgCABQgTAFgTACIgWADIgFAAQgJABgLAHIgHAEQgHADgIABIgDAAIgBAAIgKgBIgBgBQgIgBgJAAQgIAAgEADQgJgYAZgDgACMDMIgCgDIgMgVIgDgFIgOgdIgEgJQgCgJABgJIAEgPIACgDIAEgNIAEgLIAGgUQACgOAIgMIABgEQADgNAEgOIADgLQACgKAAgLQABgQgCgQQgCgRAFgPIAGgQIABgEIADgFIABgEIACgGIgCABQAFgUADgXQABgKgCgEQgPgcgQgWIgHgKIgKgMQgJgJgKgHIADAJIACAHQALApAHAzIAAADIgEABQADADABANQgHANAAAFQgBAGgxAdQgyAdiGAYIgGACQAKgOABgUIAAgDQAAgLgDgNQgKgngOgpQgNglgEgoQAEAoANAlQAOApAKAnQADANAAALIAAADQgFAMgGAMIgGAJIgIAQIgDAIIgEADIgZAaIgcAbIgPAOIgCADIgJAKQgPAPAZABQgIAOgLAMIgIAJIAAgCQAAgNACgNIACgNIABAAIABgNQAAgJAEgJIACgGIACgBQALgKAEgLIAFgQIADgJQACgMAAgMQAAgNgCgOQgBgNAKggIABgEIAHgXIgBgFQgFgbAHgQIAGgQQAIgVAFgZQACgHgGgIIgCgEQgPgYAFgmQACgWALgNIAAgCQAEgJAFgBQAMgEAJgGIgPABQgPAAgPgMQgPgMgHgPQgDgEgBgFIAAgEIAAgCIAAgBIAAgCIACgNQAEgRAKgQIAAgBIAEgDQADAEAIABQgIgBgDgEQgDgDACgEIACgDIAAAAIgHgIQAEgIAHgEIgGgIIAAAAIAEgDQAHgEAJgCQAEgCABgCIAFgHIALgRIADgFQAJgQALgOQACABADgBIACAAIAdAEQARADAPAJQADgQARgLQAQgJAJAQQADAGgBAIQgEAUgNALIgHAEQACAFACABIAHALQAJAegGAZQgEARgLAOQALgOAEgRQABAUAHAPIAAABQAYAGAVAHIAAgBQArAJAgAQQAfAQALAgIAOAOQAOAQALAPQAXAcAIAnQAEATAIAPIAEAGQAEAHAIADIAGAHQAHAMgFAPQgEAPABAOIABAgQABAQgFAPQgEAQgHAPQgHAOgLAOIgGAIIgMASIgGAJIgBABIgKASIgBABIAGAJIADAGQADAIAAAHQABAFgEAGQgOAQAPAMIACACIAEADQAPAPAJATIABABIABACQAEAMgPgLQgRgOgRgKIANAOQAMANgDAPIAAACQgCAIgIgHIgNgNIgKgNIgBgBIgCgCIgDgGIgBgBIgBgCIgKgRIAKARIABACIABABIADAGIACACIAIARIADAGIAFALIADAKQACAJgHAGIgKgIQADALgNAKQgLgDgKgRgACPCuQADAHAHAHIAAAAIANALIABABIAEADIgEgDIgBgBIgNgLIAAAAQgHgHgDgHQgDgGAAgGIAAgDIAAADQAAAGADAGgAASlRQAXAgAfANQAPAHANAKQgNgKgPgHQgfgNgXggIgDgEIADAEgAAAmjQgJgJgGgNQAGANAJAJgAimmyQANAHANgCQAPgDAGgTQAGgTAAgRQAAgNgIgKQgEAOgKAOIgVAYIAAABIgEAEQgHAIgIAGIgOAIIAOgIIAJAFgAi+nuIAHgHIgHAHgAgroiIAGgDIgGADgAhwo7QgTABgHATQAHgTATgBIABAAIAAAAIAAAAIABAAQAHAAgBACIAAAAIAAAAQABgCgHAAIgBAAIAAAAIAAAAIgBAAgAB8igQAHgBgIANg");
	this.shape_6.setTransform(304.9,78.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("ACwo3QgBAAgCAAQgKAAgKAAQgTABgUADQAFgRATgQQAUgQAagDQATgCASABQABAAABAAQAGAAAFABQgFgCgGgCQgLgDgMgCQgIgCgHgDQAngEAogBQAdgBAbACQAEABADAEQgHgOgGgTQAKAKAOAQQAMAPANADQAWgMASgCQgGAKgIANQgEAGgDAGQAUACAUAJQAUAJAGARQgUgNgKALQAKAdAGAaQAAAEABAEQgLgMgPgNQgFgFgFgFQgBAFAAAGQgBAFABAGQABALAFAJQAEAHgGAFQgJAJgPABQgQAAgQgBQgEgBAAgCQgBgCACgFQADABAFAAQASABAQgMQAHgFACgHQAEgSgTgEQgUgEgOALQgFgSgMgNQgJgLgJgMQgCAAgBgBQgCgBgBgCQgTACgRAGQgDABgDABQgKADgKACQgFABgEAAQgDABgEgCQgIgEgJgCQgCAAgCgBIgBAAQgCAAgDAAQgBAAgBAAIAAAAQgDAAgCAAQgGAAgGAAQgBAAgBAAQgBAAgBAAIAAAAQABAQgDAMQAAABAAAAQgUAFgOAJQgGAEgFAFQgBABAAAAQgBABAAAAQgBABAAAAQgBACgCABQgCAFgCAFQgEAQADATQAEATALAKQAIAHAEADQgLgCgMgGQgSgIgSAHQgSAGgTAFQgOAEgUAOQAHAJAHAIQAMAMAHAOQABACACABQALALALAOQAJAKAJAIQAFAEAFAEQAPALAQAKQARAKAMAOQALAPAJAOQADAFACABQgBgOALgOQAMgPANgMQAPgMARgIQAJgFAHgEQAHgDAGgEAEKonQATgKAPANQAIAGgDABACgnvQALACALgBQACgBADAAIABAAQAQgCAQgCQASgDANgIQgBANgJAJQgLANgTAKQgRAKgOgIQgLgHgFgOQgBgEgDgHQgIgBgJgCAFXngQgEgBgCgCAFWnZQgCATgFASQgCAJgCAHQAOADAJADQAEAAADABQARAGANANQAJAJAHALQADAFADAGQACAEABADQAAACAAABQABABAAABQACANgFANQgHARgIAPQgJARgKAPQgKAQgQALIAAAAQAAAMgHAKQgKAPgRAKQgRAJgRAKQgRAKgOAKQgNALgSAJQgGAEgGACQgEABgEAAQgIABgIgBQgPgCgLgOQgMgOgOgJQgPgLgQgKQgPgKgMgOQgMgPgLgQQgIgOgIgSQgHgQgIgRQAAgBgBgBQgCgFgDgFQgFgKgFgLQgBAAAAgBQgJAAgJgDQgJgDgIgFQgFgDgDgHQgHgWgUAEQgCAAgCAAQgCABgCAAQgXACgXgGQgBAAAAgBQgCAAgBAAQgJgDAFgDQADgCAGgBQAXgFATgFQgKAAgKAAQgTABgNgNQgBgBAAAAQgHgIAKgBQAKgBAKAAQABAAAAAAQAJAAAIABQABAAABAAQACAAABAAQAEABADAAQABAAABAAQABAAABAAQALACALADAFijqIgCgOABFEXQANAIAMAJQAPAMAPAMQAPANAOAJQAOAKANAOQANAOANAOQAOAPAKAOQALAQAJAMQADAEADAEQAJALAKAKQAMANAOALIAAAAQAPAMAOAKQALAIAKAIQACACACABQALANAOAHQAQAIgEATQgBADgFABQgSAHgRAFQgGACgHACQAAAAgBAAQgCABgCAAQgBABgBAAQgCAAgCABQgvAEgeAFIgTADQhdAQgMAEQgSAGgOAKQgNALgMgEQgFgBgFgEQgDgCgFgBQgTAAgRgCQgCAAgCgBQgTgCAEgRQAAgCABgCQAVgLAQAHQALAEAKgIQAJgGAPgEQARgFAPgFQARgFAQgLQALgHAKgHQABAAAAgBQAXgMALgkQAGgWgLgNQgIgJgRgGQgFgBgFgCQgSgIgMgMQgBgBgCgCQgBgCgCgBQgFgEgEgFQgOgNgNgNQgNgNgOgMQgOgMgOgOQgOgOgNgMQgNgNgMgMQgMgMgQgLQAAAAgBgBQgDgCgEAAQgGgGAIgMQALgPALgQQALgOALgRQAJgPAKgRQAIgMAIgLQgHACgIADQAIgIAFgLQAJgQAKgRQAJgPAEgRAC4oPQgFgGAAgFQAAgEAEgCQACgBACAAIAAAAQAEgBAGABADLosQgIgDgIAEAiHnDQgLgFgDgRQAKgHAWAEQABAAACAAQANADAOACQADABADABQASADASAFQARAEALAMQAGAGAFAGQACACABACQAEAGAEAGQAEAGAFAFQAAAAABABAiHnDQADgBACAAQABAAABAAQAJgCAJgBIAAAAQALgBAIADQAJACAHAGAhUmjQgJgDgKgCQgBAAgBAAQgDgBgEgBQgHgBgHgDQgFgCgGgDQgJgEgCgKQAGgBAHgBAmiqSQgFgIAKgCQATgEARAFQASAGAMALQANAOAKAPQAFAHAFAHIAAAAQAFAHAFAHQALAMAFAQQAAACABABQgCASAHAOQAIAQAJAQQAJAOAMAMQALAMAPANQAOAMAKAOQALAPAHANQADAFAOADQANABAVAAAgzhPQAUhbAAgEQADgOAEgOQABgEABgEQACgIAAgKQAAgHgBgHQAAgLgBgMQgCgQAKgPQAAAAABgBIgBAAQgGAAgFABQgTADgTAAQgTABgSAAQgTAAgTABQgCAAgBAAQgQABgRgCQgSgCgTgCQgQgCgOgIQgOgHgKgRQgJgPgJgQQgIgQgGgTQgFgSgGgSQgGgSgHgRQgFgSgFgSQgDAAgEgBQgRgFgDgRQgFgUgNgJQgOgJgQgIQgOgIgFgSQgKgEgHgHQgDgDgBgDQgBgGAJgCIAAAAQABAAACgBQAAAAgCgBIAAAAQgLgHABgKQADgQAaAAQAAABABACQAKANASAIQAJADAKgBAlHpWQgJgSgRgIQgKgFgFADQgGADgBAMQAAAJADAHQADAIAIAHQAJAIAFAFAmppWQAGADAIABQAMACAMAAAmzpwQAQAJAQACQANABAFABAiWEuQAFACAEACQAQAKAMANQAKAKAMARQABACABABQALAOAKAPQAHAKAFAKQAHASALAQQALAQAJANQAFAIAGAFQAHAGAIADQAPAFA1AhQg1AMgLACQgTAEgMALQgEAEgGADQgEADgEACQgMAFgPABQAAAAgBAAQgRABgSAEQgBAAgBAAIAAAAQgBABgCAAQgTAFgSACQgKACgMABQgDAAgDAAQgJABgLAHQgDACgDACQgIADgIABQgBAAgCAAIgBAAQgFAAgFgBQAAAAgBgBQgHgBgKAAQgIAAgEADQgIgYAYgDQANgBAJAFQABAAABAAQASgFASgDQAUgDATgCQATgBARgEQACAAABAAQATgFANgKQAGgFADgDIAAgBQgBgHgEgFQgEgFgHgEQgQgIgNgNQgMgNgNgOQgNgNgNgOQgNgOgNgNQgOgOgOgNQgNgMgMgPQgMgPgLgPQgLgQgFgSQgEgOAEgNQADgDACgEQAHgIAHgKQAKgQAOgPQAMgNAQgLQAMgIAJgJQAEgEADgFQALgMAIgOQgYgBAOgPQAEgFAFgFQACgBABgCQAHgGAHgIQAPgNANgOQANgMANgPQABgBACgCQACgDACgCQAAgCABgCADMhCQgXAAgUAAQgOAAgNAAQgXABgTAAQgbAAgagCQgngFgxgGQgBgBgBAAADMhCQAAANAAAPQAAAGAAAHIAAAYQAAABAAAAQABAPgBAOQABALgDAKQgBAGgCAGQgEAOgCANQgBACAAACQgIAMgDAOQgCAKgEAKQgBAGgDAFQgCAHgCAGQgBACAAABQgDAIgBAHQgCAJACAJQgGAFgFADQgDgFgEgEQAAAAAAgBQgIgJgNgJQgTgNgWgJQgVgKgYADQgFABgGABQAEgEADgEADUh6QgGAMgCAsAhNAkQAPhEALgvIAAAAQgDAAgDgBAidCRQAAAAABAAQAAAAABAAQABAAACAAQAPAAAPgCQAFAAAFgBQACAAABAAQASgBATABQATABASAIQAIADAHAEQgJASgNAPQgMAOgPAOQgNAMgOANQgPAOgNANQgOAOgJANQgCACgBACQgGgCgHgCACQDGQgLAOgNANQgNAPgPAMQgOANgJAOABEEeQgCgCADgEQAAgBAAAAQgCgCgDgCAALCdIgfAB");
	this.shape_7.setTransform(302.7,70.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02CD01").s().p("ACBCGIgBgBQgHgJgOgJQgTgNgVgJQgWgJgXACIgLACIAHgHIgHAHIgOAFQAGgIAGgLQAIgQAKgRQAJgPAEgQQgEAQgJAPQgKARgIAQQgGALgGAIIggABIgQgHQgRgIgUgBQgSgBgSABIgDAAIgLABIgeACIgDAAIgBAAIgBAAQgYgBAOgPIAKgKIACgDIAPgNIAcgbIAZgaIADgEIAEgFIABgEQAJgsAThHIgZB0IAch0IBYAMQAZABAcAAIAqgBIAaAAIAsAAIgBAcIAAAHIAAAGIAAgGIAAgHIABABIgBAMIAAAYIAAADQABAOAAAPQAAAKgCAKIgDAMQgFANgCANIgBAEQgIAMgCAPIgGATIgEALIgFANIgBADIgEAPQgCAJADAKIgLAIIgHgKgAALBYIAAAAg");
	this.shape_8.setTransform(304.3,77.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC97").s().p("AgOAOQACgNAAgOIAAAAIACAAIACgBIALAAIAEAAIABAAIACAAIAFABIgBAKQgIgCgIADIABAJIAAAAIgEABQgFACAAAFg");
	this.shape_9.setTransform(321.7,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAWQgMgHgFgPIgDgJQAKABALgBIAGAAIAAAAIAggEQASgDANgIQgBANgJAJQgMAMgSAKQgJAFgIAAQgHAAgGgDg");
	this.shape_10.setTransform(323.3,22.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1D38D").s().p("ABUKeQgFgBgEgEQgEgCgFgBIgjgCIgEgBQgVgCAEgRIABgEQAWgLAQAHQALAEALgIQAIgGAPgEIAggKQARgFAQgLIAWgOIAAgBQAXgMALgkQAGgWgLgNQgIgJgRgGIgKgDQgSgIgMgMIgDgDIgDgDIgJgJIgbgaIgbgZIgcgaIgbgaIgZgZQgMgMgPgLIgBgBQgEgCgEAAQgGgGAIgMIAXgfIAUgfIAVggQAHgMAJgLIALgCQAXgDAWAKQAVAJATANQANAJAIAJIABABIgZAbQgNAPgPAMQgOANgIAOIAYARIAeAYQAPANAOAJQAOAKANAOIAaAcQAOAPAKAOIAVAcIAFAIIATAVQAMANAOALIAAAAIAdAWIAVAQIAEADQALANAOAHQAQAIgEATQgBADgEABIgkAMIgNAEIgBAAIgDABIgDABIgEABQgvAEgeAFIgTADQhdAQgMAEQgSAGgOAKQgKAIgJAAIgGgBgABUEeIgBgCIABgEIABgBIgGgEIAGAEIgBABIgBAEIABACgAjhJHQANgBAJAFIACAAQASgFATgDIAngFQASgBASgEIACAAQATgFANgKIAJgIIAAgBQAAgHgEgFQgEgFgIgEQgQgIgMgNIgagbIgagbIgagbIgcgbQgNgMgMgPQgMgPgLgPQgLgQgFgSQgEgOAFgNIAFgHIANgSQAKgQAOgPQAMgNAQgLQAMgIAJgJIAHgJQALgMAIgOIABAAIABAAIADAAIAegCIAKgBIAEAAQARgBATABQATABASAIIAQAHQgKASgNAPIgbAcIgbAZIgcAbQgOAOgJANIgDAEIAJAEQAQAKAMANQAKAKAMARIADADIAUAdQAHAKAFAKQAHASALAQIAUAdQAEAIAGAFQAIAGAJADQAOAFA1AhIhAAOQgUAEgLALIgKAHIgIAFQgMAFgOABIgCAAQgRABgSAEIgCAAIAAAAIgCABQgUAFgSACIgWADIgFAAQgKABgLAHIgGAEQgIADgIABIgDAAIAAAAIgLgBIgBgBQgHgBgKAAQgIAAgEADQgIgYAYgDgAiHEuQgGgCgHgCQAHACAGACgAgkhPIAAAAIACABIgcByIAahzgAA3hDIhZgLIgCgBIAVhfIAGgcIACgIQADgIgBgKIgBgOIgBgXQgCgQAJgPIABgBIgBAAIgKABQgTADgTAAIglABIgmABIgDAAQgQABgRgCIgkgEQgRgCgOgIQgOgHgKgRIgRgfQgJgQgFgTIgMgkIgMgjIgLgkIgGgBQgSgFgDgRQgEgUgOgJIgdgRQgPgIgFgSQAGADAIABIABAAIADABIAJAAIAHABIABAAIAAAAIABAAIACAAIgCAAIgBAAIAAAAIgBAAIgHgBIgJAAIgDgBIgBAAQgIgBgGgDQgKgEgHgHQgDgDAAgDQgCgGAJgCIAAAAIAEgBIgCgBIgBAAQgLgHACgKQACgQAaAAIABADQAKANATAIIAAAAQAFACAGAAIABAAIAAAAIADAAIAAAAIADAAIgDAAIAAAAIgDAAIAAAAIgBAAQgGAAgFgCIAAAAQgTgIgKgNIgBgDQgFgIALgCQASgEARAFQASAGAMALQANAOAKAPIAKAOIAAAAIALAOQAKAMAFAQIABADQgBASAGAOQAIAQAKAQQAIAOAMAMQALAMAPANQAOAMAKAOQALAPAHANQADAFAOADQANABAVAAIAKgDQAWgFATgFIgUAAQgTABgNgNIgBgBQgHgIALgBIATgBIABAAIARABIADAAIADAAIAGABIACAAIACAAIAWAFIgWgFIgCAAIgCAAIgGgBIgDAAIgUgFIgBAAIgHgCIgOgEIgLgFQgKgEgCgKIANgCQgLgFgDgRQAKgHAWAEIADAAIAbAFIAGACIAkAIQARAEALAMIAKAMIADAEIAKAMIAIALIABABIAOARQAMAMAHAOIADADQALALALAOQAJAKAKAIIAJAIQAPALARAKQAQAKAMAOQALAPAJAOIAGAGIgBgDQAAgNAKgMQAMgPAOgMQAOgMARgIIARgJIAMgHIgMAHIgRAJQgRAIgOAMQgOAMgMAPQgKAMAAANIABADIgGgGQgJgOgLgPQgMgOgQgKQgRgKgPgLIgJgIQgKgIgJgKQgLgOgLgLIgDgDQgHgOgMgMIgOgRQAUgOAOgEIAlgLQASgHASAIQAMAGALACIgLgKQgMgKgDgTQgEgTAFgQQABgFADgFIACgDIABgBIABgBIABgBIALgJQAOgJAUgFIAAgBIAFABQAAgEAEgCIAEgBIAAAAIAAgKQAIgEAJADIABgLIAAAAIAEABQAJACAJAEQADACADgBIAJgBIAUgFIAGgCQARgGATgCQABACADABIACABIASAXQAMANAFASQAOgLAUAEQATAEgEASQgCAHgGAFQgQAMgTgBIgIgBIgGgDIAGADQgCAFABACQgCATgEASIgFAQIAYAGIAGABQARAGANANQAJAJAHALIAGALIADAHIABADIAAACQACANgFANQgHARgIAPIgTAgQgKAQgQALIAAAAQAAAMgHAKQgKAPgRAKIgiATQgRAKgOAKQgNALgRAJIgNAGIgIABIgGABIgBAAIAAAAIgHgBIgBAAQgQgCgLgOQgMgOgOgJIgfgVQgPgKgMgOQgMgPgKgQQgJgOgHgSIgPghIgBgCIgFgKIgLgVIgBgBQgKAAgJgDQgIgDgHgFQgGgDgCgHIgCgDQgGgPgPgBIAAAAIAAAAIgEABIAAAAIgBAAIgEAAIgEABIgBAAIgMAAIAAAAIAAAAQgQAAgPgEIgCAAIgBgBIgDAAQgGgCAAgCIACgCIgCACQAAACAGACIADAAIABABIACAAQAPAEAQAAIAAAAIAAAAIAMAAIABAAIAEgBIAEAAIABAAIAAAAIAEgBIAAAAIAAAAQAPABAGAPIACADQACAHAGADQAHAFAIADQAJADAKAAIABABIALAVIAFAKIABACIAPAhQAHASAJAOQAKAQAMAPQAMAOAPAKIAfAVQAOAJAMAOQALAOAQACIABAAIAHABIAAAAIABAAIAGgBIAIgBQgGAMgBAsIgsAAIgaAAIgrABIgEAAQgZAAgXgCgAFxjqIgBgOgAhMnFQAJACAHAGQgHgGgJgCIAAAAIgCgBIgKgBIgBAAIAAAAIgCAAIgEAAIAAAAIgRADIgCAAIgGABIAGgBIACAAIARgDIAAAAIAEAAIACAAIAAAAIABAAIAKABIACABIAAAAgACvnvIAEALQAFAOAMAHQANAIASgKQASgKAMgNQAJgJAAgNQgNAIgRADIghAEIgBAAIgFABQgLABgLgCIgQgDIAQADgADHoPQgFgGAAgFQAAAFAFAGgAFAodIABgBQAAgBgFgFQgJgHgKAAIgBAAIAAAAQgHAAgHADIgBABIABgBQAHgDAHAAIAAAAIABAAQAKAAAJAHQAFAFAAABIgBABgADKohIAFAAIABAAIAAAAIABAAIACAAIABAAIgBAAIgCAAIgBAAIAAAAIgBAAIgFAAgAllpTQAEAIAHAHIAOANIgOgNQgHgHgEgIQgCgHgBgHIABgCQAAgMAGgDIABAAIAAAAIAAAAIADgBIABAAIAAAAIAHACIABAAIACABQARAIAKASQgKgSgRgIIgCgBIgBAAIgHgCIAAAAIgBAAIgDABIAAAAIAAAAIgBAAQgGADAAAMIgBACQABAHACAHgAmEplIATACIgTgCQgQgCgPgJQAPAJAQACgAgkhPIAAAAgADjh6IAAAAgAmapWIAAAAg");
	this.shape_11.setTransform(301.2,70.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABBBfQgDgBgBgCQgBgDACgEIAIABQASABAQgMQAHgFACgHQAEgSgTgEQgUgEgOALQgFgSgMgNIgSgWIgCgBQgDgBgBgCQgTACgQAGIgGABIgUAFIgJABQgDABgDgCQgJgEgJgBIgEgBIgBAAIgEAAIgDAAIAAAAIgFAAIgMAAIgCAAIgCAAIgCAAIgVAAQgTABgUACQAFgQATgQQAUgQAagDQATgCASABIACAAIAMABIgMgEQgLgDgMgCIgPgFQAngEAogBQAcgBAbACQAEABADAEQgHgOgFgTIAXAaQAMAOANAEQAWgMASgCIgOAXIgHAMQAUACAUAJQAUAJAGAQQgUgMgKAKQAKAdAGAaIABAIQgLgMgPgNIgKgKIgBALIAAALQABAKAFAKQAEAHgGAFQgJAJgOABIgKAAIgXgBg");
	this.shape_12.setTransform(330.8,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.1,1,1).p("ACIo8QgBAAgBAAQgKABgKAAQgUAAgUAEQAFgSAUgQQATgQAagCQATgCASAAQABAAABAAQAHAAAFABQgGgCgGgCQgLgDgMgCQgHgCgHgCQAmgEAogCQAdAAAbACQAEAAADAEQgHgNgFgTQAJAKAOAPQAMAPAOADQAVgMATgCQgGAKgJANQgEAGgCAGQATADAUAIQAUAJAGARQgUgNgKALQALAdAFAaQABAEABAEQgLgLgQgOQgFgFgFgFQgBAGAAAFQAAAFAAAGQABALAFAJQAEAHgGAGQgJAIgOABQgRABgQgCQgDgBgBgCQgBgCACgFQAEABAEAAQATACAQgNQAGgEACgHQAEgSgTgEQgUgEgNAKQgGgSgLgNQgKgLgJgLQgBgBgBAAQgDgCgBgCQgSADgSAFQgDABgDABQgKADgKACQgEABgFABQgCAAgEgCQgJgEgJgCQgCAAgCAAIAAAAQgDgBgCAAQgCAAgBAAIAAAAQgCAAgDAAQgGAAgGAAQgBAAgBAAQgBAAgBAAIAAABQABAPgDANQAAAAAAAAQgTAFgPAKQgGAEgFAEQAAABgBAAQgBABAAAAQAAABgBAAQgBACgBACQgDAEgBAFQgFARAEATIAAAAQADASAMAKQAIAHAEADQgLgCgNgGQgRgHgTAGQgSAGgTAFQgIADgKAGQgHAEgIAGQADAEADADQAEAFAEAEQADADADADQAHAKAFAKQACACABACQAMALALANQAIAKAKAIQAEAEAFAEQAGAEAFAEQAKAHALAGQAQALAMAOQALAOAJAOQAEAFACABQgBgOAKgOQAMgPAOgLQAOgNASgIQAIgEAIgFQAGgDAGgDADiosQATgJAQAMQAHAHgCAAAB5nzQAKABALgBQADAAADgBIAAAAQAQgBARgDQASgCAMgIQAAAMgJAKQgMANgSAJQgSAKgNgIQgMgGgFgPQgBgEgCgGQgJgBgIgDAEvnlQgDgBgDgBAEuneQgCATgEASQgCAJgDAHQAPADAJADQADABADABQARAGANAMQAKAJAGALQAEAFACAGQACAEABADQAAACABACQAAAAAAABQADANgGANQgGARgJAQQgJARgJAPQgLAPgQALIAAAAQAAAMgHAKQgKAPgRAKQgRAKgRAJQgRAKgNALQgOAKgRAKQgHADgGACQgEABgEABQgIABgHgCQgPgCgMgOQgMgOgOgJQgPgKgPgLQgQgKgMgOQgMgOgKgQQgDgFgDgGQgGgKgEgLQgGgRgIgRQgBgBAAgBQgDgFgCgFQgFgKgGgKQAAgBgBgBQgEAAgDAAIABgEQABgDABgDAE6jvIgBgOAAeESQAMAJAMAJQAQALAOAMQAQAOANAJQAOAKAOAOQAMAOANAOQAOAOAKAOQALAQAKAMQADAEACAEQAJALAKAKQAMANAOALIAAAAQAQAMAOALQAKAHAKAIQACACADACQALAMANAHQAQAJgDASQgCADgEACQgSAGgSAGQgGACgGABQgBABAAAAQgCAAgCABQgBAAgCAAQgCABgCAAQgvAEgdAFIgUADQhcAQgNAEQgSAGgOALQgNAKgMgEQgFgBgEgDQgEgDgFAAQgRgBgRgCQgCAAgCAAQgVgDAEgRQAAgCABgCQAWgLAQAHQAKAEALgHQAJgHAOgEQARgEAPgFQASgGAPgKQALgHALgIQAAAAAAAAQAXgNALgkQAHgVgMgOQgIgJgRgFQgFgCgEgCQgTgHgMgNQgBgBgBgCQgCgBgCgCQgEgEgFgEQgOgNgNgNQgNgOgOgLQgNgNgOgOQgOgOgNgMQgNgNgNgMQgMgMgPgLQgBAAAAAAQgDgDgFAAQgGgGAIgMQALgPAMgQQAKgOALgQQAKgQALgQQAHgNAJgKQgIACgHACQAHgIAGgLQAIgQAJgQQAJgPAEgRACQoTQgFgHAAgEQAAgFAFgCQABAAACgBIABAAQADAAAGAAACkoxQgIgCgJADAgYmZQAAgBgBgBQgEgFgEgGQgFgGgFgGQgBgCgBgCQgGgGgGgGQgLgMgRgEQgSgEgRgEQgEgBgDAAQgNgDgOgDQgBAAgCAAQgWgDgJAGQACARALAFQADAAADgBQABAAABAAQAIgBAJgBIAAAAQALgBAJACQAIADAHAFAhLloQADAHAFACQAHAFAJADQAGACAFABQABgCABgCAihl/IAAAAQACAAABABQABAAAAAAQAXAGAXgCQACAAACgBQACAAACAAQAUgDAIAVQAAABAAAAQgOAJgOALQgMAMgCAOQgCgCgCgFQgHgQgIgQQgJgQgPgNQAAAAgBgBgAh7moQgBAAgBAAQgJgBgJAAQAAAAAAAAQgKAAgKABQgLACAHAHQABABAAAAQANANATAAQAKgBALAAQgUAGgWAEQgHACgDABQgBABAAAAQgLgKgKgLQgNgNgJgRQgIgPgKgNQgBgCgBgCQgEgPgKgOQgGgKgGgLQgDgGgCgGQgEgHgEgHQgBgCgBgCQgEgHgEgHQgKgOgPgHQgRgIgRgGQgDgCgDgBQgNgFgMgFQgCAAgCgBQgUgHgLAFQAAARAKAHQACAAADAAQABAAABAAQAJAAAJABIAAAAQAKABAIAEQAIAEAGAHAivnIQgGABgHACQACAJAKAFQAFACAGACQAGADAIABQADABAEABQABAAAAAAQAKACAKADQABAAACAAQADABAEAAQAAAAABAAQABABABAAQAMACAKACAimmEQACADADACAldooQgBAAgBAAQgJgDgIgCQgKgBgKgBQgLAAAGAIQAAABAAABQALAPATADQAKABAKACQgUACgXAAQgTABAMAHQABAAACABQAAAAABABQAVAKAXACQACAAADAAQABAAACAAQAUABAEAWQABAIAFAEQAHAGAHAEQAJAFAKACQAAABABAAQADAMADALQACAGACAHQAFASADARQAFATAFAQQAHARAKARQAJAQAOAMQANANANAOQAMALAJAQQAJAQAOAFQAIACAHABQALAAALgDQATgGAPgIQACgBACgBQABgEgBgFQAAgHAAgHQgBgLgBgLQgCgRALgPIALgiQABgCABgDIABAAIgDAFAmJpQQgHAAgHAAQAAAKAJAGQAFADAFADQAGAEAHADQADABAEABQAKAFAJAEQACABABAAQADABAEABQABAAAAABQABAAACAAQAKAEAKAFAi+EqQAFABAEADQAQAKAMANQAKAKAMAQQACACABABQAKAOAKAPQAHALAFAKQAIARAKAQQALAQAJANQAFAIAGAFQAIAGAJADQAOAFA0AhQg0AMgLACQgUAFgMAKQgEAEgFAEQgFACgEACQgMAGgOABQgBAAgBAAQgRABgSADQgBAAgBABIAAAAQgBAAgBAAQgTAFgTADQgKABgMABQgDABgCAAQgKABgLAGQgDACgDACQgHADgJABQgBAAgCAAIAAAAQgFAAgFgBQgBAAgBAAQgHgCgKAAQgIAAgEADQgIgYAYgCQAOgCAIAGQABgBACAAQARgFATgDQATgCAUgCQATgCARgDQABgBABAAQAUgFAMgKQAHgFACgDIAAAAQAAgHgEgGQgEgFgIgDQgPgIgNgNQgNgOgNgNQgMgNgOgPQgMgNgOgNQgOgOgOgNQgNgNgLgOQgNgPgLgQQgLgQgFgRQgEgPAFgNQACgDADgDQAGgJAHgKQALgQANgOQAMgOARgLQALgIAJgJQAEgEAEgEQAKgNAIgOQgYgBAOgPQAFgFAEgFQACgBABgBQAHgHAIgHQAOgNANgOQANgNANgOQACgCABgCQACgCACgDQAAgCABgCAhbhUQABABACAAQAxAGAnAGQAZABAcAAQASAAAYAAQAMAAAOgBQAUAAAYAAQgBANAAAPQAAAHAAAGIAAAYQAAABAAACQABANAAAPQAAAKgCAKQgBAGgCAGQgFAOgCANQgBACAAACQgIAMgDAPQgCAKgDAJQgCAGgCAFQgDAHgCAGQAAACgBACQgCAHgCAHQgCAJADAKQgGAEgGAEQgCgFgEgFQgMAOgMAOQgOAOgOANQgOAMgJAOQAAABgBAAQgCAEACADACsh/QgFAMgCAsAh1AgQAQhFAKguIAAgBQgDAAgDgBAg8jgQAAAFgCAFQgBADgBAEQgDAOgDAPQgBAEgUBaAjFCMQABAAAAAAQABAAAAAAQACAAABAAQAPAAAPgBQAFgBAFAAQACAAACgBQASgBASABQAUABARAIQAIAEAIAEQgKARgNAPQgMAOgOAOQgOANgOANQgOAOgOANQgOANgJANQgBADgCACQgGgDgHgBAgbCYIggACABpDBQAAAAgBAAQgIgKgNgJQgTgMgVgKQgWgJgWADQgGABgFABQADgEAEgEAAeESQgDgCgDgB");
	this.shape_13.setTransform(304.5,71.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02CD01").s().p("ACBCGIgBgBQgHgJgOgJQgTgNgVgJQgWgJgXACIgLACIAHgHIgHAHIgOAFQAGgIAGgLQAIgQAKgRQAJgPAEgQQgEAQgJAPQgKARgIAQQgGALgGAIIggABIgQgHQgRgIgUgBQgSgBgSABIgDAAIgLABIgeACIgDAAIgBAAIgBAAQgYgBAOgPIAKgKIACgDIAPgNIAcgbIAZgaIADgEIAEgFIABgEQAJgsAThHIgZB0IAch0IBYALQAZACAcAAIAqgBIAaAAIAsAAIgBAcIAAAHIAAAGIAAgGIAAgHIABABIgBAMIAAAYIAAADQABAOAAAPQAAAKgCAKIgDAMQgFANgCANIgBAEQgIAMgCAPIgGATIgEALIgFANIgBAEIgEAOQgCAJADAKIgLAIIgHgKg");
	this.shape_14.setTransform(302.1,77.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC97").s().p("AgOAOQACgNAAgOIAAAAIACAAIACgBIAKAAIAGAAIAAAAIACAAIAFABIgBAKQgIgCgHADIAAAJIAAAAIgEABQgFACABAFg");
	this.shape_15.setTransform(319.5,15.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAWQgMgHgFgPIgEgJQALABALgBIAFAAIABAAIAggEQASgDAMgIQAAANgJAJQgMAMgSAKQgJAFgIAAQgHAAgGgDg");
	this.shape_16.setTransform(321.1,22.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F1D38D").s().p("AAsKCQgEgBgFgEQgEgCgFgBIgigCIgEgBQgUgCADgRIABgEQAXgLAPAHQAKAEALgIQAJgGAOgEIAhgKQARgFAPgLIAWgPIAAAAQAXgNALgjQAHgWgMgNQgIgJgRgGIgJgDQgTgIgMgMIgCgDIgEgDIgJgJIgbgaIgagZIgdgaIgagaIgagZQgMgMgPgLIgBgBQgDgCgEgBQgHgFAJgMIAWgfIAVgfIAVggQAHgMAIgLIALgCQAXgDAWAKQAVAJATANQAOAJAHAJIABABIgYAbQgOAPgOAMQgOANgJAOIAYARIAeAYQAQANANAJQAOAKAOAOIAZAcQAOAPAKAOIAVAcIAGAHIASAWQANANANALIAAAAIAeAWIAUAQIAFADQALAMANAIQAQAIgDATQgCADgEABIgkAMIgMAEIgBAAIgEABIgCABIgFAAQgvAFgdAFIgUADQhcAQgNAEQgSAGgNAKQgKAIgKAAIgGgBgAAsECIgBgCIABgEIABgBIgFgEIAFAEIgBABIgBAEIABACgAkJIrQAOgCAIAGIADAAQARgFATgDIAngFQATgBARgEIACAAQAUgFANgKIAIgJIAAAAQAAgHgEgFQgEgFgIgEQgPgIgNgNIgagbIgZgbIgbgbIgcgbQgNgMgLgPQgNgPgLgPQgLgQgFgSQgEgOAFgNIAFgHIANgSQALgQANgPQAMgNARgLQALgIAJgKIAIgIQALgMAHgOIABAAIABAAIADAAIAegCIALgBIADAAQASgCASACQAUABARAIIAQAHQgKASgMAPIgbAcIgcAZIgcAbQgOAOgIANIgDAEIAIAEQAQAKANANQAJAKAMARIADADIAUAdQAHAKAFAKQAIASALAQIATAdQAFAHAHAGQAHAGAJADQAOAFA1AhIhAAOQgUAEgMALIgJAHIgJAFQgMAFgOABIgCAAQgRABgRAEIgDAAIAAAAIgCABQgTAFgTACIgWADIgFAAQgKABgKAHIgHADQgHAEgIAAIgEAAIAAAAIgKgBIgCAAQgHgBgKAAQgIAAgEADQgIgYAYgDgAiuESQgHgDgHgBQAHABAHADgAhMhrIAAAAIADAAIgcBzIAZhzgAAPhfIhYgMIgDAAIAVhfIAGgdIACgHIACgKIgEACQgPAIgTAGQgLAEgKgBQgIAAgHgDQgPgFgJgQQgJgPgMgMIgagaQgOgNgJgQQgJgQgHgSQgGgQgEgSIgJgkIgEgNIgGgWIgBgBQgKgCgIgFQgIgFgHgGQgEgEgCgHQgDgXgVAAIgDgBIgFAAQgXgCgVgKIgBgBIgDgBQgMgHATAAQAXgBAUgCIgUgDQgTgDgKgPIgBgBQgGgJALABIAUACIARAEIACABIADABIAHACIABAAIADABIAUAIIgUgIIgDgBIgBAAIgHgCIgDgBIgTgJIgHgDIgNgGIgKgHQgIgGgBgKIAOAAQgKgHAAgRQALgFAVAIIADABIAZAKIAGACIAiAPQAQAHAJANIAIAPIADAEIAHAOIAGALIAMAVQAJAOAEAPIADAEQAJANAIAPQAKARANAOIAUAVIABgBIAKgDQAWgFAUgGIgVABQgTABgNgNIgBgCQgHgHALgBIAUgCIAAAAIASABIACABIADAAIAHABIABAAIADAAIAVAEIgVgEIgDAAIgBAAIgHgBIgDAAIgTgFIgCgBIgHgBIgOgEIgLgFQgKgEgCgKIAOgCIAFgBIACgBIARgCIABAAIADAAIACAAIAAAAIABAAIALABIACABQAIACAHAGQgHgGgIgCIgCgBIgLgBIgBAAIAAAAIgCAAIgDAAIgBAAIgRACIgCABIgFABQgMgFgCgRQAKgHAVAEIADAAIAbAFIAHACIAjAIQARAEALALIAMANIADADIAJANIAIAKIABACIAHAIIAHAJIAFAGQAIAJAFALIADADQAMALALANQAIALAKAIIAJAHIALAJIAVANQAQAKAMAOQALAOAKAOIAFAHIAAgDQAAgNAJgMQAMgPAOgMQAOgMASgIIAQgJIAMgHIgMAHIgQAJQgSAIgOAMQgOAMgMAPQgJAMAAANIAAADIgFgHQgKgOgLgOQgMgOgQgKIgVgNIgLgJIgJgHQgKgIgIgLQgLgNgMgLIgDgDQgFgLgIgJIgFgGIgHgJIgHgIIAOgKQALgGAIgCIAmgMQASgGARAIQANAGALABIgMgJQgMgKgDgTIAAAAQgEgTAFgRQABgEADgFIACgDIABgBIABgBIACgBIAKgJQAPgJATgFIAAgBIAFABQAAAFAFAGQgFgGAAgFQAAgEAFgCIADgBIABAAIgBgKQAJgEAIADIABgLIAAAAIAFABQAIACAJAEQAEACACgBIAJgCIAUgEIAGgCQASgGASgDQABADADABIACABIATAWQALAOAGARQANgKAUAEQATAEgEASQgBAHgHAFQgQAMgTgBIgIgBIgGgDIAGADQgCAEABACQgCAUgEASIgFAPIAYAGIAGACQARAGANANQAKAJAGAKIAGAMIADAHIABADIAAABQADAOgGANQgGAQgJAQIgSAgQgLAQgQAKIABABQgBAMgHAJQgKAQgRAKIgiATQgRAJgNALQgOALgRAJIgNAFIgIACIgGABIgBAAIgBAAIgGgBIgBAAQgPgCgMgPQgMgNgOgJIgegVQgQgKgMgOQgMgPgKgQIgGgLIgKgVIgPghIAAgCIgFgKIgLgVIgBgBIgHgBIABgEIgBAEIgMgDQgJgCgHgFQgFgDgDgGIAAgBQgIgWgUADIgDABIgFAAQgXADgWgGIgCgBIgDgBIAAAAIgFgEIAFAEIACACQAOANAJAQQAJAQAGAPIAEAHQACgOANgLQANgMAOgIQADAGAFADQAHAFAJACIAMADIgCAGIgMAiQgJAMAAAOIAAAFIACAXIABAOIAAACIgBAGIABgGIAAgCIgBgOIgCgXIAAgFQAAgOAJgMIAMgiIACgGIAAAAIABgEIgBAEIAHABIABABIALAVIAFAKIAAACIAPAhIAKAVIAGALQAKAQAMAPQAMAOAQAKIAeAVQAOAJAMANQAMAPAPACIABAAIAGABIABAAIABAAIAGgBIAIgCQgFAMgCAtIgsAAIgaAAIgqABIgFAAQgZAAgXgCgAFJkHIgBgNgAgXlwIACgFIgCAFgACIoLIADAKQAFAPAMAHQANAHASgJQASgKAMgNQAJgJABgNQgNAIgSADIghAEIAAAAIgGAAQgLABgKgBIgRgDIARADgAEZo5IAAgBQAAgBgFgFIgBgBIAAAAQgJgGgJAAIAAAAIAAAAQgHAAgIADIgBABIABgBQAIgDAHAAIAAAAIAAAAQAJAAAJAGIAAAAIABABQAFAFAAABIAAABgACjo9IABAAIABgBIADAAIAAAAIAAAAIACAAIABAAIABAAIgBAAIgBAAIgCAAIAAAAIAAAAIgDAAIgBABIgBAAgAlzpoIASABIAAAAQAKABAIAEQAIAEAGAHQgGgHgIgEQgIgEgKgBIAAAAIgSgBIgCAAIgDAAIgCAAIACAAIADAAIACAAgAhMhrIAAAAgAgYlsIAAAAIgCAGIACgGgAgYlsg");
	this.shape_17.setTransform(303,73.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABBBfQgDgBgBgCQgBgDACgEIAIABQASABAQgMQAHgFACgHQAEgSgTgEQgUgEgOALQgFgSgMgNIgSgWIgDgBQgCgBgBgCQgTACgQAGIgGABIgUAFIgJABQgDABgEgCQgIgEgJgBIgEgBIAAAAIgGAAIgCAAIAAAAIgFAAIgMAAIgCAAIgCAAIgDAAIgUAAQgTABgUACQAFgQAUgQQATgQAagDQATgCASABIACAAIALABIgLgEQgLgDgMgCIgPgFQAngEAogBQAcgBAbACQAEABADAEQgHgOgGgTIAYAaQAMAOANAEQAWgMATgCIgPAXIgGAMQATACAUAJQAUAJAGAQQgUgMgKAKQAKAdAGAaIABAIQgLgMgPgNIgKgKIgBALIAAALQABAKAFAKQAEAHgGAFQgJAJgPABIgJAAIgXgBg");
	this.shape_18.setTransform(328.6,14.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.1,1,1).p("ACwo3QgBAAgCAAQgKAAgKAAQgTABgUADQAFgRATgQQAUgQAagDQATgCASABQABAAABAAQAGAAAFABQgFgCgGgCQgLgDgMgCQgIgCgHgDQAngEAogBQAdgBAbACQAEABADAEQgHgOgGgTQAKAKAOAQQAMAPANADQAWgMASgCQgGAKgIANQgEAGgDAGQAUACAUAJQAUAJAGARQgUgNgKALQAKAdAGAaQAAAEABAEQgLgMgPgNQgFgFgFgFQgBAFAAAGQgBAFABAGQABALAFAJQAEAHgGAFQgJAJgPABQgQAAgQgBQgEgBAAgCQgBgCACgFQADABAFAAQASABAQgMQAHgFACgHQAEgSgTgEQgUgEgOALQgFgSgMgNQgJgLgJgMQgCAAgBgBQgCgBgBgCQgTACgRAGQgDABgDABQgKADgKACQgFABgEAAQgDABgEgCQgIgEgJgCQgCAAgCgBIgBAAQgCAAgDAAQgBAAgBAAIAAAAQgDAAgCAAQgGAAgGAAQgBAAgBAAQgBAAgBAAIAAAAQABAQgDAMQAAABAAAAQgUAFgOAJQgGAEgFAFQgBABAAAAQgBABAAAAQgBABAAAAQgBACgCABQgCAFgCAFQgEAQADATQAEATALAKQAIAHAEADQgLgCgMgGQgSgIgSAHQgSAGgTAFQgOAEgUAOQAHAJAHAIQAMAMAHAOQABACACABQALALALAOQAJAKAJAIQAFAEAFAEQAPALAQAKQARAKAMAOQALAPAJAOQADAFACABQgBgOALgOQAMgPANgMQAPgMARgIQAJgFAHgEQAHgDAGgEAEKonQATgKAPANQAIAGgDABACgnvQALACALgBQACgBADAAIABAAQAQgCAQgCQASgDANgIQgBANgJAJQgLANgTAKQgRAKgOgIQgLgHgFgOQgBgEgDgHQgIgBgJgCAFXngQgEgBgCgCAFWnZQgCATgFASQgCAJgCAHQAOADAJADQAEAAADABQARAGANANQAJAJAHALQADAFADAGQACAEABADQAAACAAABQABABAAABQACANgFANQgHARgIAPQgJARgKAPQgKAQgQALIAAAAQAAAMgHAKQgKAPgRAKQgRAJgRAKQgRAKgOAKQgNALgSAJQgGAEgGACQgEABgEAAQgIABgIgBQgPgCgLgOQgMgOgOgJQgPgLgQgKQgPgKgMgOQgMgPgLgQQgIgOgIgSQgHgQgIgRQAAgBgBgBQgCgFgDgFQgFgKgFgLQgBAAAAgBQgJAAgJgDQgJgDgIgFQgFgDgDgHQgHgWgUAEQgCAAgCAAQgCABgCAAQgXACgXgGQgBAAAAgBQgCAAgBAAQgJgDAFgDQADgCAGgBQAXgFATgFQgKAAgKAAQgTABgNgNQgBgBAAAAQgHgIAKgBQAKgBAKAAQABAAAAAAQAJAAAIABQABAAABAAQACAAABAAQAEABADAAQABAAABAAQABAAABAAQALACALADAFijqIgCgOABFEXQANAIAMAJQAPAMAPAMQAPANAOAJQAOAKANAOQANAOANAOQAOAPAKAOQALAQAJAMQADAEADAEQAJALAKAKQAMANAOALIAAAAQAPAMAOAKQALAIAKAIQACACACABQALANAOAHQAQAIgEATQgBADgFABQgSAHgRAFQgGACgHACQAAAAgBAAQgCABgCAAQgBABgBAAQgCAAgCABQgvAEgeAFIgTADQhdAQgMAEQgSAGgOAKQgNALgMgEQgFgBgFgEQgDgCgFgBQgTAAgRgCQgCAAgCgBQgTgCAEgRQAAgCABgCQAVgLAQAHQALAEAKgIQAJgGAPgEQARgFAPgFQARgFAQgLQALgHAKgHQABAAAAgBQAXgMALgkQAGgWgLgNQgIgJgRgGQgFgBgFgCQgSgIgMgMQgBgBgCgCQgBgCgCgBQgFgEgEgFQgOgNgNgNQgNgNgOgMQgOgMgOgOQgOgOgNgMQgNgNgMgMQgMgMgQgLQAAAAgBgBQgDgCgEAAQgGgGAIgMQALgPALgQQALgOALgRQAJgPAKgRQAIgMAIgLQgHACgIADQAIgIAFgLQAJgQAKgRQAJgPAEgRAC4oPQgFgGAAgFQAAgEAEgCQACgBACAAIAAAAQAEgBAGABADLosQgIgDgIAEAiHnDQgLgFgDgRQAKgHAWAEQABAAACAAQANADAOACQADABADABQASADASAFQARAEALAMQAGAGAFAGQACACABACQAEAGAEAGQAEAGAFAFQAAAAABABAiHnDQADgBACAAQABAAABAAQAJgCAJgBIAAAAQALgBAIADQAJACAHAGAhUmjQgJgDgKgCQgBAAgBAAQgDgBgEgBQgHgBgHgDQgFgCgGgDQgJgEgCgKQAGgBAHgBAmiqSQgFgIAKgCQATgEARAFQASAGAMALQANAOAKAPQAFAHAFAHIAAAAQAFAHAFAHQALAMAFAQQAAACABABQgCASAHAOQAIAQAJAQQAJAOAMAMQALAMAPANQAOAMAKAOQALAPAHANQADAFAOADQANABAVAAAgzhPQAUhbAAgEQADgOAEgOQABgEABgEQACgIAAgKQAAgHgBgHQAAgLgBgMQgCgQAKgPQAAAAABgBIgBAAQgGAAgFABQgTADgTAAQgTABgSAAQgTAAgTABQgCAAgBAAQgQABgRgCQgSgCgTgCQgQgCgOgIQgOgHgKgRQgJgPgJgQQgIgQgGgTQgFgSgGgSQgGgSgHgRQgFgSgFgSQgDAAgEgBQgRgFgDgRQgFgUgNgJQgOgJgQgIQgOgIgFgSQgKgEgHgHQgDgDgBgDQgBgGAJgCIAAAAQABAAACgBQAAAAgCgBIAAAAQgLgHABgKQADgQAaAAQAAABABACQAKANASAIQAJADAKgBAlHpWQgJgSgRgIQgKgFgFADQgGADgBAMQAAAJADAHQADAIAIAHQAJAIAFAFAmppWQAGADAIABQAMACAMAAAmzpwQAQAJAQACQANABAFABAiWEuQAFACAEACQAQAKAMANQAKAKAMARQABACABABQALAOAKAPQAHAKAFAKQAHASALAQQALAQAJANQAFAIAGAFQAHAGAIADQAPAFA1AhQg1AMgLACQgTAEgMALQgEAEgGADQgEADgEACQgMAFgPABQAAAAgBAAQgRABgSAEQgBAAgBAAIAAAAQgBABgCAAQgTAFgSACQgKACgMABQgDAAgDAAQgJABgLAHQgDACgDACQgIADgIABQgBAAgCAAIgBAAQgFAAgFgBQAAAAgBgBQgHgBgKAAQgIAAgEADQgIgYAYgDQANgBAJAFQABAAABAAQASgFASgDQAUgDATgCQATgBARgEQACAAABAAQATgFANgKQAGgFADgDIAAgBQgBgHgEgFQgEgFgHgEQgQgIgNgNQgMgNgNgOQgNgNgNgOQgNgOgNgNQgOgOgOgNQgNgMgMgPQgMgPgLgPQgLgQgFgSQgEgOAEgNQADgDACgEQAHgIAHgKQAKgQAOgPQAMgNAQgLQAMgIAJgJQAEgEADgFQALgMAIgOQgYgBAOgPQAEgFAFgFQACgBABgCQAHgGAHgIQAPgNANgOQANgMANgPQABgBACgCQACgDACgCQAAgCABgCADMhCQgXAAgUAAQgOAAgNAAQgXABgTAAQgbAAgagCQgngFgxgGQgBgBgBAAADMhCQAAANAAAPQAAAGAAAHIAAAYQAAABAAAAQABAPgBAOQABALgDAKQgBAGgCAGQgEAOgCANQgBACAAACQgIAMgDAOQgCAKgEAKQgBAGgDAFQgCAHgCAGQgBACAAABQgDAIgBAHQgCAJACAJQgGAFgFADQgDgFgEgEQgLAOgNANQgNAPgPAMQgOANgJAOADUh6QgGAMgCAsAhNAkQAPhEALgvIAAAAQgDAAgDgBAidCRQAAAAABAAQAAAAABAAQABAAACAAQAPAAAPgCQAFAAAFgBQACAAABAAQASgBATABQATABASAIQAIADAHAEQgJASgNAPQgMAOgPAOQgNAMgOANQgPAOgNANQgOAOgJANQgCACgBACQgGgCgHgCAAaCYQAEgEADgEAAaCYQAGgBAFgBQAYgDAVAKQAWAJATANQANAJAIAJQAAABAAAAABEEeQgCgCADgEQAAgBAAAAQgCgCgDgCAALCdIgfAB");
	this.shape_19.setTransform(302.7,70.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.1,1,1).p("ACIo8QgBAAgBAAQgKABgKAAQgUAAgUAEQAFgSAUgQQATgQAagCQATgCASAAQABAAABAAQAHAAAFABQgGgCgGgCQgLgDgMgCQgHgCgHgCQAmgEAogCQAdAAAbACQAEAAADAEQgHgNgFgTQAJAKAOAPQAMAPAOADQAVgMATgCQgGAKgJANQgEAGgCAGQATADAUAIQAUAJAGARQgUgNgKALQALAdAFAaQABAEABAEQgLgLgQgOQgFgFgFgFQgBAGAAAFQAAAFAAAGQABALAFAJQAEAHgGAGQgJAIgOABQgRABgQgCQgDgBgBgCQgBgCACgFQAEABAEAAQATACAQgNQAGgEACgHQAEgSgTgEQgUgEgNAKQgGgSgLgNQgKgLgJgLQgBgBgBAAQgDgCgBgCQgSADgSAFQgDABgDABQgKADgKACQgEABgFABQgCAAgEgCQgJgEgJgCQgCAAgCAAIAAAAQgDgBgCAAQgCAAgBAAIAAAAQgCAAgDAAQgGAAgGAAQgBAAgBAAQgBAAgBAAIAAABQABAPgDANQAAAAAAAAQgTAFgPAKQgGAEgFAEQAAABgBAAQgBABAAAAQAAABgBAAQgBACgBACQgDAEgBAFQgFARAEATIAAAAQADASAMAKQAIAHAEADQgLgCgNgGQgRgHgTAGQgSAGgTAFQgIADgKAGQgHAEgIAGQADAEADADQAEAFAEAEQADADADADQAHAKAFAKQACACABACQAMALALANQAIAKAKAIQAEAEAFAEQAGAEAFAEQAKAHALAGQAQALAMAOQALAOAJAOQAEAFACABQgBgOAKgOQAMgPAOgLQAOgNASgIQAIgEAIgFQAGgDAGgDADiosQATgJAQAMQAHAHgCAAAB5nzQAKABALgBQADAAADgBIAAAAQAQgBARgDQASgCAMgIQAAAMgJAKQgMANgSAJQgSAKgNgIQgMgGgFgPQgBgEgCgGQgJgBgIgDAEvnlQgDgBgDgBAEuneQgCATgEASQgCAJgDAHQAPADAJADQADABADABQARAGANAMQAKAJAGALQAEAFACAGQACAEABADQAAACABACQAAAAAAABQADANgGANQgGARgJAQQgJARgJAPQgLAPgQALIAAAAQAAAMgHAKQgKAPgRAKQgRAKgRAJQgRAKgNALQgOAKgRAKQgHADgGACQgEABgEABQgIABgHgCQgPgCgMgOQgMgOgOgJQgPgKgPgLQgQgKgMgOQgMgOgKgQQgDgFgDgGQgGgKgEgLQgGgRgIgRQgBgBAAgBQgDgFgCgFQgFgKgGgKQAAgBgBgBQgEAAgDAAIABgEQABgDABgDAE6jvIgBgOAAeESQAMAJAMAJQAQALAOAMQAQAOANAJQAOAKAOAOQAMAOANAOQAOAOAKAOQALAQAKAMQADAEACAEQAJALAKAKQAMANAOALIAAAAQAQAMAOALQAKAHAKAIQACACADACQALAMANAHQAQAJgDASQgCADgEACQgSAGgSAGQgGACgGABQgBABAAAAQgCAAgCABQgBAAgCAAQgCABgCAAQgvAEgdAFIgUADQhcAQgNAEQgSAGgOALQgNAKgMgEQgFgBgEgDQgEgDgFAAQgRgBgRgCQgCAAgCAAQgVgDAEgRQAAgCABgCQAWgLAQAHQAKAEALgHQAJgHAOgEQARgEAPgFQASgGAPgKQALgHALgIQAAAAAAAAQAXgNALgkQAHgVgMgOQgIgJgRgFQgFgCgEgCQgTgHgMgNQgBgBgBgCQgCgBgCgCQgEgEgFgEQgOgNgNgNQgNgOgOgLQgNgNgOgOQgOgOgNgMQgNgNgNgMQgMgMgPgLQgBAAAAAAQgDgDgFAAQgGgGAIgMQALgPAMgQQAKgOALgQQAKgQALgQQAHgNAJgKQgIACgHACQAHgIAGgLQAIgQAJgQQAJgPAEgRACQoTQgFgHAAgEQAAgFAFgCQABAAACgBIABAAQADAAAGAAACkoxQgIgCgJADAgYmZQAAgBgBgBQgEgFgEgGQgFgGgFgGQgBgCgBgCQgGgGgGgGQgLgMgRgEQgSgEgRgEQgEgBgDAAQgNgDgOgDQgBAAgCAAQgWgDgJAGQACARALAFQADAAADgBQABAAABAAQAIgBAJgBIAAAAQALgBAJACQAIADAHAFAihl/IAAAAQACAAABABQABAAAAAAQAXAGAXgCQACAAACgBQACAAACAAQAUgDAIAVQAAABAAAAQADAHAFACQAHAFAJADQAGACAFABQABgCABgCAh7moQgBAAgBAAQgJgBgJAAQAAAAAAAAQgKAAgKABQgLACAHAHQABABAAAAQANANATAAQAKgBALAAQgUAGgWAEQgHACgDABQgBABAAAAQgLgKgKgLQgNgNgJgRQgIgPgKgNQgBgCgBgCQgEgPgKgOQgGgKgGgLQgDgGgCgGQgEgHgEgHQgBgCgBgCQgEgHgEgHQgKgOgPgHQgRgIgRgGQgDgCgDgBQgNgFgMgFQgCAAgCgBQgUgHgLAFQAAARAKAHQACAAADAAQABAAABAAQAJAAAJABIAAAAQAKABAIAEQAIAEAGAHAivnIQgGABgHACQACAJAKAFQAFACAGACQAGADAIABQADABAEABQABAAAAAAQAKACAKADQABAAACAAQADABAEAAQAAAAABAAQABABABAAQAMACAKACAimmEQACADADACAhLloQgOAJgOALQgMAMgCAOQgCgCgCgFQgHgQgIgQQgJgQgPgNQAAAAgBgBAldooQgBAAgBAAQgJgDgIgCQgKgBgKgBQgLAAAGAIQAAABAAABQALAPATADQAKABAKACQgUACgXAAQgTABAMAHQABAAACABQAAAAABABQAVAKAXACQACAAADAAQABAAACAAQAUABAEAWQABAIAFAEQAHAGAHAEQAJAFAKACQAAABABAAQADAMADALQACAGACAHQAFASADARQAFATAFAQQAHARAKARQAJAQAOAMQANANANAOQAMALAJAQQAJAQAOAFQAIACAHABQALAAALgDQATgGAPgIQACgBACgBQABgEgBgFQAAgHAAgHQgBgLgBgLQgCgRALgPIALgiQABgCABgDIABAAIgDAFAmJpQQgHAAgHAAQAAAKAJAGQAFADAFADQAGAEAHADQADABAEABQAKAFAJAEQACABABAAQADABAEABQABAAAAABQABAAACAAQAKAEAKAFAi+EqQAFABAEADQAQAKAMANQAKAKAMAQQACACABABQAKAOAKAPQAHALAFAKQAIARAKAQQALAQAJANQAFAIAGAFQAIAGAJADQAOAFA0AhQg0AMgLACQgUAFgMAKQgEAEgFAEQgFACgEACQgMAGgOABQgBAAgBAAQgRABgSADQgBAAgBABIAAAAQgBAAgBAAQgTAFgTADQgKABgMABQgDABgCAAQgKABgLAGQgDACgDACQgHADgJABQgBAAgCAAIAAAAQgFAAgFgBQgBAAgBAAQgHgCgKAAQgIAAgEADQgIgYAYgCQAOgCAIAGQABgBACAAQARgFATgDQATgCAUgCQATgCARgDQABgBABAAQAUgFAMgKQAHgFACgDIAAAAQAAgHgEgGQgEgFgIgDQgPgIgNgNQgNgOgNgNQgMgNgOgPQgMgNgOgNQgOgOgOgNQgNgNgLgOQgNgPgLgQQgLgQgFgRQgEgPAFgNQACgDADgDQAGgJAHgKQALgQANgOQAMgOARgLQALgIAJgJQAEgEAEgEQAKgNAIgOQgYgBAOgPQAFgFAEgFQACgBABgBQAHgHAIgHQAOgNANgOQANgNANgOQACgCABgCQACgCACgDQAAgCABgCAhbhUQABABACAAQAxAGAnAGQAZABAcAAQASAAAYAAQAMAAAOgBQAUAAAYAAQgBANAAAPQAAAHAAAGIAAAYQAAABAAACQABANAAAPQAAAKgCAKQgBAGgCAGQgFAOgCANQgBACAAACQgIAMgDAPQgCAKgDAJQgCAGgCAFQgDAHgCAGQAAACgBACQgCAHgCAHQgCAJADAKQgGAEgGAEQgCgFgEgFQgMAOgMAOQgOAOgOANQgOAMgJAOQAAABgBAAQgCAEACADACsh/QgFAMgCAsAh1AgQAQhFAKguIAAgBQgDAAgDgBAg8jgQAAAFgCAFQgBADgBAEQgDAOgDAPQgBAEgUBaAjFCMQABAAAAAAQABAAAAAAQACAAABAAQAPAAAPgBQAFgBAFAAQACAAACgBQASgBASABQAUABARAIQAIAEAIAEQgKARgNAPQgMAOgOAOQgOANgOANQgOAOgOANQgOANgJANQgBADgCACQgGgDgHgBAgbCYIggACABpDBQAAAAgBAAQgIgKgNgJQgTgMgVgKQgWgJgWADQgGABgFABQADgEAEgEAAeESQgDgCgDgB");
	this.shape_20.setTransform(304.5,71.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F1D38D").s().p("AAsKCQgEgBgFgEQgEgCgFgBIgigCIgEgBQgUgCADgRIABgEQAXgLAPAHQAKAEALgIQAJgGAOgEIAhgKQARgFAPgLIAWgPIAAAAQAXgNALgjQAHgWgMgNQgIgJgRgGIgJgDQgTgIgMgMIgCgDIgEgDIgJgJIgbgaIgagZIgdgaIgagaIgagZQgMgMgPgLIgBgBQgDgCgEgBQgHgFAJgMIAWgfIAVgfIAVggQAHgMAIgLIALgCQAXgDAWAKQAVAJATANQAOAJAHAJIABABIgYAbQgOAPgOAMQgOANgJAOIAYARIAeAYQAQANANAJQAOAKAOAOIAZAcQAOAPAKAOIAVAcIAGAHIASAWQANANANALIAAAAIAeAWIAUAQIAFADQALAMANAIQAQAIgDATQgCADgEABIgkAMIgMAEIgBAAIgEABIgCABIgFAAQgvAFgdAFIgUADQhcAQgNAEQgSAGgNAKQgKAIgKAAIgGgBgAAsECIgBgCIABgEIABgBIgFgEIAFAEIgBABIgBAEIABACgAkJIrQAOgCAIAGIADAAQARgFATgDIAngFQATgBARgEIACAAQAUgFANgKIAIgJIAAAAQAAgHgEgFQgEgFgIgEQgPgIgNgNIgagbIgZgbIgbgbIgcgbQgNgMgLgPQgNgPgLgPQgLgQgFgSQgEgOAFgNIAFgHIANgSQALgQANgPQAMgNARgLQALgIAJgKIAIgIQALgMAHgOIABAAIABAAIADAAIAegCIALgBIADAAQASgCASACQAUABARAIIAQAHQgKASgMAPIgbAcIgcAZIgcAbQgOAOgIANIgDAEIAIAEQAQAKANANQAJAKAMARIADADIAUAdQAHAKAFAKQAIASALAQIATAdQAFAHAHAGQAHAGAJADQAOAFA1AhIhAAOQgUAEgMALIgJAHIgJAFQgMAFgOABIgCAAQgRABgRAEIgDAAIAAAAIgCABQgTAFgTACIgWADIgFAAQgKABgKAHIgHADQgHAEgIAAIgEAAIAAAAIgKgBIgCAAQgHgBgKAAQgIAAgEADQgIgYAYgDgAiuESQgHgDgHgBQAHABAHADgAhMhrIAAAAIAVhfIAGgdIACgHIACgKIgEACQgPAIgTAGQgLAEgKgBQgIAAgHgDQgPgFgJgQQgJgPgMgMIgagaQgOgNgJgQQgJgQgHgSQgGgQgEgSIgJgkIgEgNIgGgWIgBgBQgKgCgIgFQgIgFgHgGQgEgEgCgHQgDgXgVAAIgDgBIgFAAQgXgCgVgKIgBgBIgDgBQgMgHATAAQAXgBAUgCIgUgDQgTgDgKgPIgBgBQgGgJALABIAUACIARAEIACABIADABIAHACIABAAIADABIAUAIIgUgIIgDgBIgBAAIgHgCIgDgBIgTgJIgHgDIgNgGIgKgHQgIgGgBgKIAOAAQgKgHAAgRQALgFAVAIIADABIAZAKIAGACIAiAPQAQAHAJANIAIAPIADAEIAHAOIAGALIAMAVQAJAOAEAPIADAEQAJANAIAPQAKARANAOIAUAVIAFAEIgFgEIABgBIAKgDQAWgFAUgGIgVABQgTABgNgNIgBgCQgHgHALgBIAUgCIAAAAIASABIACABIADAAIAHABIABAAIADAAIAVAEIgVgEIgDAAIgBAAIgHgBIgDAAIgTgFIgCgBIgHgBIgOgEIgLgFQgKgEgCgKIAOgCIAFgBIACgBIARgCIABAAIADAAIACAAIAAAAIABAAIALABIACABQAIACAHAGQgHgGgIgCIgCgBIgLgBIgBAAIAAAAIgCAAIgDAAIgBAAIgRACIgCABIgFABQgMgFgCgRQAKgHAVAEIADAAIAbAFIAHACIAjAIQARAEALALIAMANIADADIAJANIAIAKIABACIAHAIIAHAJIAFAGQAIAJAFALIADADQAMALALANQAIALAKAIIAJAHIALAJIAVANQAQAKAMAOQALAOAKAOIAFAHIAAgDQAAgNAJgMQAMgPAOgMQAOgMASgIIAQgJIAMgHIgMAHIgQAJQgSAIgOAMQgOAMgMAPQgJAMAAANIAAADIgFgHQgKgOgLgOQgMgOgQgKIgVgNIgLgJIgJgHQgKgIgIgLQgLgNgMgLIgDgDQgFgLgIgJIgFgGIgHgJIgHgIIAOgKQALgGAIgCIAmgMQASgGARAIQANAGALABIgMgJQgMgKgDgTIAAAAQgEgTAFgRQABgEADgFIACgDIABgBIABgBIACgBIAKgJQAPgJATgFIAAgBIAFABQAAAFAFAGQgFgGAAgFQAAgEAFgCIADgBIABAAIgBgKQAJgEAIADIABgLIAAAAIAFABQAIACAJAEQAEACACgBIAJgCIAUgEIAGgCQASgGASgDQABADADABIACABIATAWQALAOAGARQANgKAUAEQATAEgEASQgBAHgHAFQgQAMgTgBIgIgBIgGgDIAGADQgCAEABACQgCAUgEASIgFAPIAYAGIAGACQARAGANANQAKAJAGAKIAGAMIADAHIABADIAAABQADAOgGANQgGAQgJAQIgSAgQgLAQgQAKIABABQgBAMgHAJQgKAQgRAKIgiATQgRAJgNALQgOALgRAJIgNAFIgIACIgGABIgBAAIgBAAIgGgBIgBAAQgPgCgMgPQgMgNgOgJIgegVQgQgKgMgOQgMgPgKgQIgGgLIgKgVIgPghIAAgCIgFgKIgLgVIgBgBIgHgBIABgEIACgFIgCAFIgBAEIgCAGIgMAiQgJAMAAAOIAAAFIACAXIABAOIAAACIgBAGIABgGIAAgCIgBgOIgCgXIAAgFQAAgOAJgMIAMgiIACgGIAAAAIABgEIgBAEIAHABIABABIALAVIAFAKIAAACIAPAhIAKAVIAGALQAKAQAMAPQAMAOAQAKIAeAVQAOAJAMANQAMAPAPACIABAAIAGABIABAAIABAAIAGgBIAIgCQgFAMgCAtIgsAAIgaAAIgqABQgcAAgZgCIhYgMIgDAAIADAAIgcBzIAZhzgAFJkHIgBgNgAiQmVQAOANAJAQQAJAQAGAPIAEAHQACgOANgLQANgMAOgIQADAGAFADQAHAFAJACIAMADIgMgDQgJgCgHgFQgFgDgDgGIAAgBQgIgWgUADIgDABIgFAAQgXADgWgGIgCgBIgDgBIAAAAIACACgACIoLIADAKQAFAPAMAHQANAHASgJQASgKAMgNQAJgJABgNQgNAIgSADIghAEIAAAAIgGAAQgLABgKgBIgRgDIARADgAEZo5IAAgBQAAgBgFgFIgBgBIAAAAQgJgGgJAAIAAAAIAAAAQgHAAgIADIgBABIABgBQAIgDAHAAIAAAAIAAAAQAJAAAJAGIAAAAIABABQAFAFAAABIAAABgACjo9IABAAIABgBIADAAIAAAAIAAAAIACAAIABAAIABAAIgBAAIgBAAIgCAAIAAAAIAAAAIgDAAIgBABIgBAAgAlzpoIASABIAAAAQAKABAIAEQAIAEAGAHQgGgHgIgEQgIgEgKgBIAAAAIgSgBIgCAAIgDAAIgCAAIACAAIADAAIACAAgAgYlsIAAAAIgCAGIACgGgAgYlsg");
	this.shape_21.setTransform(303,73.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},20).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},10).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_19}]},10).to({state:[{t:this.shape_18},{t:this.shape_21},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_20}]},10).wait(11));

	// front
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("ABoBVQgEABgFABQgCAAgCAAQgWAFgTAKQgNAPgMALQgNALgNAFQgIAEgJABQgbAFgZAJQgOAFgNAHQgGAEgGAEQgHgVgSgBQgFgTAJgZQAFgMAGgKQAFgKAHgLQAHgKAIgLQAOgSAQgWQAOgUANgXQAHgNAJgNQAEgFAEgFQAQg4gBgbQAAgSAHgHQAEgDAFAAQARgCAIgCQAFAAAGgBQANALgLANIAAAAQAJAIADADQABAEACAEQgBADAAAFQgBAEAAAFQAGAFADAHQgDACgCACQANAIgKANQgCABgCACQgQANgagEQgDAIgBAEQgBADgEAGQgEAGgcBEQgGAQgIAOQAOgHAOgFQABAAABAAQAPgFAcgVQABgBABgCQAQgVAigDQASgBAPADQABAAABAAAAQipQAFAUALAPQAEAFAHAEQgHANAIAJAgXA0QAAABgBABQgZAwgfAS");
	this.shape_22.setTransform(33.9,35.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC97").s().p("AiLChQgFgTAJgZIALgWIAMgVIAPgVIAegoQAOgUANgXIAQgaIAIgKQAQg4AAgbQAAgSAGgHQAEgDAFAAIAZgEIALgBQANALgLANIAAAAIAMALIADAIIgBAIIgBAJQAGAFADAHIgFAEQANAIgKANIgEADQgQANgagEIgEAMIgFAJQgEAGgcBEQgGAQgIAOQAOgHAOgFIACAAQAPgFAcgVIACgDQAQgVAigDQASgBAPADIACAAIAAAEIAGAAIAAgDIAEACIAAAAIgCALIgFAFQg+A/ARAIQAEACAGABIAAgJIAGAAIAAAJIgGACIgBAAIAAABIgJACIgEAAQgWAFgTAKQgNAPgMALQgNALgNAFQgIAEgJABQgbAFgZAJQgOAFgNAHIgMAIQgHgVgSgBgAgdA2QgZAwgfASQAfgSAZgwIABgCIgBACgAAnhnQgEgFAAgGQAAgFADgGQgHgEgEgFQgLgPgFgUQAFAUALAPQAEAFAHAEQgDAGAAAFQAAAGAEAFg");
	this.shape_23.setTransform(34.4,35.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.1,1,1).p("AhOAMQAWACAugIQBCgMAJgCQAKgCAEgB");
	this.shape_24.setTransform(72.7,42.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.1,1,1).p("AE2AXQAEAGACAEQADAFADAFQAGAJAGAHQAGAGAIACQAEACACgBQACgBgBgEQAAgGgDgFQgDgGgCgGQgDgFgCgHQgDgJgDgHQAEABADACQAIAEAIAEQAHAEAHABQAIABgFgIQgEgHgGgHQgGgGgIgFQgIgFgHgFQgHgFgJgEQgJgEgIgFQgJgFgJgBQgJAAgJgBQgJAAgJgBQgFgBgGgBQgEgBgEgBQgDgBgDgBQgGgBgGgBQgKgCgJgCQgGgCgGgCQgCgBgDgBQAAAAAAAAQgIgDgJgBQgKAAgKgBQgJgBgKAAQgKAAgJgBQgKgCgKAAQgJAAgJAAQgJABgKAAQgJAAgJAAQgKgBgIADQgFAAgFAAQgKAAgKAAQgJAAgKAAQgJAAgKAAQgJABgJABQgKABgKABQgJABgKABQgJACgKAAQgJAAgKAAQgKgBgGAFQgCABgDABQgJADgKgCQgJgBgJgCQgIgCgJgBQgKAAgJAAQgGAAgFABQgCAAgCAAQgCAAgDABQgJAAgKACQgJACgIACQgJADgIACQgJACgIAFQgBABAAAAQgHAEgJADQgIABgIADQgBAAgBABQgCAAgCABAkCAkQADgBAEgCQAJgDAJgEQAJgDAKgDQAJgDAJgDQAJgDAIgDQAJgEAKACQAIACAKAAQAKAAAKgCQABAAACAAQADAAADAAQABAAABAAQAJAAAKAAQAKAAAKAAQAJgBAKABQAKABAJgCQAEAAADgBQAGAAAGgBQAJgBAIAAQAKAAAJAAQAJgBAKgBQAKAAAJgCQAJgBAKgDQAJgCAKgBQAJgBAJgBQAKgBAJgBQAJgCAKAAQAGgBAEACQAHADAHAFQAHAFAIAFQAIAFAKABQAOACAOABQABAAAAAAQANABANAAQAEAGAHAFQAIAFAJADQAJADAHgDQABgFAAgFQAAgBgBAAQAAgBAAAAQABABAAABAEJAOQADAAADAAQAMgBALgBQAFAAACABQAFADADAF");
	this.shape_25.setTransform(106.5,37.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC97").s().p("AF6BDQgIgCgGgGQgGgHgGgJIgGgKIgGgKQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIAAABIABABIgBAKQgHADgJgDQgJgDgIgFQgHgFgEgGIAGAAIAXgCQAFAAACABQAEADAEAFQgEgFgEgDQgCgBgFAAIgXACIgGAAQgNAAgNgBIgBAAIgcgDQgKgBgIgFIgPgKIgOgIQgEgCgGABIgTACIgTACIgSACIgTADIgTAEIgTACIgTACIgTAAQgJAAgJABIgMABIgGABQgJACgKgBQgKgBgJABIgUAAIgTAAIgCAAIgGAAIgDAAQgKACgKAAQgKAAgIgCQgKgCgJAEIgRAGIgSAGIgTAGIgSAHIgHADQgEACgKACIhNAOQgtAJgXgCIAAgJIgGAAIAAAJQgGgBgEgCQgRgIA9g/IAGgFIAGAAIAAgDIAEgBIACgBIAQgEQAIgDAIgEIABgBQAIgFAJgCIARgFIARgEIATgCIAFgBIAEAAIALgBIATAAQAJABAIACIASADQAKACAJgDIAEgCQAHgFAKABIATAAQAKAAAJgCIATgCIAUgCIASgCIATAAIASAAIAUAAIALAAQAIgDAKABIASAAIATgBIASAAQAKAAAKACIATABIATABIAUABQAJABAHADIABAAIAEACIANAEIATAEIAMACIAGACIAIACIALACIASABIASABQAJABAJAFIARAJQAJAEAHAFIAPAKQAIAFAGAGQAGAHAEAHQAFAIgIgBQgHgBgHgEIgQgIQgDgCgEgBQADAHADAJIAFAMIAFAMQADAFAAAGQAAABAAABQAAAAAAABQAAABAAAAQgBAAAAABIgCAAIgEgBg");
	this.shape_26.setTransform(103.5,37.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.1,1,1).p("AFKAXQAEAGACAEQADAFADAFQAGAJAGAHQAGAGAIACQAEACACgBQACgBgBgEQAAgGgDgFQgDgGgCgGQgDgFgCgHQgDgJgDgHQAEABADACQAIAEAIAEQAHAEAHABQAIABgFgIQgEgHgGgHQgGgGgIgFQgIgFgHgFQgHgFgJgEQgJgEgIgFQgJgFgJgBQgJAAgJgBQgJAAgJgBQgGgBgFgBQgEgBgEgBQgDgBgDgBQgGgBgGgBQgKgCgJgCQgGgCgHgCQgCgBgCgBQAAAAgBAAQgHgDgJgBQgKAAgKgBQgJgBgKAAQgKAAgJgBQgKgCgKAAQgJAAgJAAQgJABgKAAQgJAAgJAAQgKgBgIADQgGAAgFAAQgKAAgJAAQgJAAgKAAQgJAAgKAAQgJABgJABQgKABgKABQgJABgKABQgJACgKAAQgJAAgKAAQgKgBgHAFQgCABgCABQgJADgKgCQgJgBgJgCQgIgCgJgBQgKAAgJAAQgGAAgFABQgCAAgCAAQgCAAgDABQgJAAgKACQgJACgIACQgJADgIACQgJACgIAFQgBABAAAAQgHAEgJADQgIABgIADQgBAAgBABQgCAAgCABAmNA9QAXACAtgJQBDgMAKgCQAKgCAEgCQADgBAEgCQAJgDAJgEQAJgDAKgDQAJgDAJgDQAJgDAIgDQAJgEAKACQAIACAKAAQAKAAAKgCQABAAACAAQADAAADAAQABAAABAAQAJAAAKAAQAKAAAKAAQAJgBAKABQAKABAJgCQADAAAEgBQAGAAAFgBQAJgBAJAAQAKAAAJAAQAJgBAKgBQAKAAAJgCQAJgBAKgDQAJgCAKgBQAJgBAJgBQAKgBAJgBQAJgCAKAAQAGgBAEACQAHADAHAFQAHAFAIAFQAIAFAKABQAOACAOABQABAAAAAAQANABANAAQAEAGAHAFQAIAFAJADQAJADAHgDQABgFAAgFQAAgBgBAAQAAgBAAAAQABABAAABAEdAOQADAAADAAQAMgBALgBQAFAAACABQAEADAEAF");
	this.shape_27.setTransform(104.5,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},20).to({state:[{t:this.shape_26},{t:this.shape_27}]},20).to({state:[{t:this.shape_23},{t:this.shape_22}]},10).wait(11));

	// rock
	this.instance = new lib.rock("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(40.7,23.3,0.999,0.999,-68.2,0,0,5.4,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({regX:5.5,scaleX:1,scaleY:1,rotation:0,x:135.3,y:40.9},0).to({x:265.2,y:16.6},10).wait(10).to({x:260.8,y:8.9},0).to({x:135.3,y:40.9},9).to({_off:true},1).wait(2).to({_off:false,regX:5.4,scaleX:1,scaleY:1,rotation:-68.2,x:40.7,y:23.3},0).wait(9));

	// main bodies
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.1,1,1).p("AE6qoQAYAOANARQAPASASATQANAMAPAHQAGADAGACQgBAJgDAGQgFALgMAFQAAABABACQABAEACAEQACACACABQgGADgFACQgPAGgPABQgCAAgCAAQgOAAgKgGQAAAhAbAQQAFADADAAQABABABAAQAKADAIAAQAAANgYAOQggAPgJgSQAEAZgEAOQgCAIABALQADAbAMASQAGAJAGALQABAAABAAQAHAAAGACIAAAAQAKACAGAHQAEAEAFAFQABACACADQAFAHAGAIQAEAGACAKQABAKgDAIQgCAEgCADQgDAFgEAEQgGAGgJAFQgIAFgIAEQgHAFgIADQgIADgJAAQgBAAgBAAIAAAAQgHAAgHgBQgJAjgfAMQgmAPgQAmQgUArAYAkQABAAABAAQABgBACABQAGABAFAGQAMAOAOANQAOANAMAPQANANAJAOQgFAFgGAEQAHASALAQQAMAPAIAQQAIARAHARQAHASAIARQAIASAHAQQAIASAFAQQAEAOADANQgGAQgMARQgKAPgMANQgLANgKAPQgLARgMAMQgNAOgNAOQgNAPgMAMQgNANgMANQgOAOgOANQgOANgMANQgMANgOAMQgRAPAEAIQAEAGAGAGQAMALARAGQASAHAUABQAUAAASAEQAVADAKAMQANAOgMAOQAAAAgBABQgLAMgUABQgTAAgRgFQgTgGgQgJQgQgJgPgHQgRgHgQAGQgGACgGAAQgTAAgTgCQgSgBgTgDQgGgBgGgCQgLgDgMgFQgBgBAAgCQgBgDACgDQAHgRAOgLQAPgMANgOQAMgMANgNQANgMAKgOQALgOALgPQAMgPAIgMQALgPAGgRQAIgTAHgPQAHgQAIgPQAJgQAJgNQALgQAMgNQAOgPAOgKQAOgKALgLQACgCABgCIAAAAQgJgHgNgHQgPgIgOgPQgMgOgNgMQgOgOgKgOQgLgOgKgHIgBAAQgDAEgDAFQgQgSgUgVQgPgPgJgMQgHgIgGgMQABgBAAgBQALgNALgNAEmqqQAAgEAAgDQABgZAcgDQAHgCAFAGQgfgEAAAcQAcgYASAZQACADACAFQgUgKgUAKQgbAJgKAWQgIARAGAQQgEAIAAAIQAAAKgBAJQAAADAAACQAUAQgPAeQgBABAAABQgFAKgHAJQAEACAFACQADAAACABIAAABQAAAKgBAIQAAAAAAABQAAAEgBAEQAAABgBACQgCAJgDAIQgDAGgEAHQAAACgBACQgEAIgEAIQgEAJgFAIQgFAHgGAGQgHAGgIADQgIAEgJAEQgBAAgBABQgBACgBACQgLAcgbAMQgBABgCABQgFACgGABQgVAGgWgGQgKgDgKgEQgQgGgQgIQAEgCADgBQAYgMATgYQATgXAPgZQAPgaACgdQABgNgBgNQgFgIAAgOQABgFAAgFQADgZAHgXQAJgcAPgZQAPgZAcgJQAbgIAeADQgGgZASgLQgHASAJAQAETpoQACAEACAEAFQpSQACgDACgBQAEgCAGgBQgHgJgBgHQgWAKAUAJAFIpCQACgKAFgGIABAAIgBAAQgQAAgFgJQAEgXAZgGQgDAHACAIAFepZQAEAAAFABAFHorQgJALAFALAFIqKQghAJgFAhAEGn9QgKAMgNALQgWATgLAYACTk2QAEABABABQABAAAAAAQABAAACAAQAHgBAHAAQAJAAAJAAQAIAAAJAAQAJgBAKAAQAJAAAJgCQAKgCAJgDQAJgDAIgCQAJgDAKgBQAJgCAKgBQAJgBAJgBQAKgCAKAAQACgBACAAACSksQAGACAFACQAJADAJACQAKACAJABQAJABAIACQAKABAJABQAKABAJADQAJACAKABADGl3QADgJACgHAGQoaQgWAdATAcABmknQAAADgBAEQAAAJgGAIQgJAKgMAFQgJAEgKACQACgJAFgIQAEgIAGgHQACgDADgCQAAgBABAAQgBAAgBAAQgJAAgHgEQgLgGgEgMQAFACAHACQAJACAKgBQAJgCAJgBQABABABACQAXgDAOgHQAJADAFACQAGgJACgKABOkgQABgBABAAQADgDADgCQAJgGAIABQgDgDgEgDABnkrQAAACgBACACOkiQgCABgCACQgJADgJgCQgKgCgIgHACQkhQgBAAgBgBQABgBAAgBQABACAAABgAgEhoQAngPAhgUQAkgVAKgmQAIgcAGgbQACgEACgCQAHgNAEgNQABgCAAgCQAGAFAFAGQAGAHAJAEQAIADAJAFQAIAEAIAFQAJAFAJAEQAFACAFACQAJAEAJACQAJACAJACQAJADAIACQAJADAJACQAJABAKACQADAAACAAAgEhoQgBABgBABQAAABgBAAQABgCACgBAgEhoIAAAAADsgjQgCAAgBABQgRAGgVgCQgTgBgTgCQgSgBgSgGQgSgFgSgFQgRgFgQgHQgRgHgQgJQgQgIgHgSAg9B6QgBgBAAAAQgEgCgDgEQAAgBgBgBQgDgHAAgKQgBgUACgTQABgUADgSQADgSAEgSQAEgSAKgPQAKgRAKgNQAJgLALgKAmkK9QAAgBgBgBQgEgLADgMQAFgSADgPQgBgCgBgBQgEgKAIgHQAMgKAPgJQARgKAQgLQAPgLAPgKQAQgKAPgOQAOgNALgRQALgQAKgPQAKgOAIgRQAHgRAFgSQAEgTAJgQQAIgNAIgLQADgDADgEQAMgOAPgNQAOgMAQgJQAIgFAIgFQAGgGAGgGQABgCACgCQAWgYAEgrQAFguAAgkQADACAFAAQAUAAARADQASADASAEQAUADARAHQAFACAEABABpBKQgMAPgGARQgCAEgBAEQAAAAAAABQgBAEAAAEQgBgFACgEQAAAAAAABABTB7QgBAJADAJQgFAGgJAAQgCAAgDAAQgEAQgIAPQgIAQgFARQgFATgGASQgFASgFASQAAABAAACQgCAHgCAGQAAAEgBAEQgBABAAACQgDAJgHAGQgHAHgJAFQgJAFgLADAC5CXQAFgIAGgIQAMgPAPgMQAPgLARgIQASgIASgGQANgFALgHAEyEHQADACACADAhNFdQAaACATgFQgFANgIALQgQAWgVAUQgIAIgKAIQgUAQgXAPQggAUgeAdQgZAYgHAqQAAAAAAAAQgBAEgBAFQgBAOgQAFQgPAFgNAGIAAAAQgLAegQAbQgTAggkARQgcAMgQgNQgGgGgEgKQAAgBAAAAQAAgBABgBQAAAAAAAAQAIgQANgN");
	this.shape_28.setTransform(22.7,75.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AgdDRQgPgPgJgMQgHgJgGgLIABgCIAWgbIgWAbIgBACQgMAPgGAQIgDAIIAAAAQgCAFABAEQgBAKADAJQgFAGgJAAIgFgBIgJgCQgRgHgUgEIglgHQgRgDgUAAQgFAAgDgCIgBAAQgEgCgDgEIgBgDQgDgGAAgLQgBgTACgUQABgTADgTIAHgkQAEgTAKgPQAKgQAKgNQAJgLALgJIABgBIACgCQAIARAQAIQAQAJARAHIAhAMIAkAKQASAFASACIAlADQAVABARgGIADgBIACAAIADAAQAGACAFAGIAaAbIAaAcQANAOAJAOIgLAIQgLAIgNAEIgkAOQgRAIgPAMQgPALgMAPIgLAQIgBAAIgGAJIgjgmgACoh9IAAAAIgOgBIgFgBIgTgDIgSgEIgRgFIgSgFQgJgCgJgDIgKgFIgSgJIgQgJIgQgIQgJgEgGgHIgLgKIgBgEIgBACIgEADQgJAEgJgCQgKgCgIgIIABgDIgHgHIAHAHIgBAAIgBgBIAAAAIAAAAQgIABgHAFIgGAEIgCACIACgCIAGgEQAHgFAIgBIAAAAIAAAAIABABIABAAIgBADIgBAIQAAAJgGAIQgJAKgMAFQgJADgKACQACgJAFgIIAKgPIAFgFIABAAIgCAAQgJgBgHgEQgLgGgEgLIAMADQAJADAKgCIASgCIACACQAXgCAOgHIAOAFIAFACIABAAIADgBQAGgBAIABIARAAIARgBIATAAQAJgBAJgCIATgFIARgFQAJgDAKgBIATgDIASgCIAUgCIAEAAIACAAQAHAAAGABIAAAAQAKADAGAGIAJAKIADAEIALAPQAEAHACAKQABAJgDAJIgEAHIgHAIQgGAHgJAFIgQAJIgPAIQgIADgJAAIgBAAIgBAAgAgOjRIARAGIATADIARACIATADQAKABAJACIATAEIgTgEQgJgCgKgBIgTgDIgRgCIgTgDIgRgGIgLgDIALADgAhEjTIAAAAgAhEjTIAAAAg");
	this.shape_29.setTransform(39.9,66.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAWBJIgBgBQgEAAgEgDQgbgRAAggQAKAGANAAIAEAAQAQgBAOgGQgWAdATAbIgCAAQgHAAgJgCgAgqgtQAFgXAYgGQgDAGACAIQgVALAUAJIgFADIAAAAIgBAAQgQAAgFgIg");
	this.shape_30.setTransform(58.3,19.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AACgJQABAIAHAIQgGAAgEADQgTgJAVgKg");
	this.shape_31.setTransform(56.7,14.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEFF97").s().p("AhkDFIgUgGQgQgGgPgJIAGgDQAYgMATgYQAUgXAOgZQAPgaACgdIAAgZQgFgJAAgNIABgKQADgZAIgXQAIgcAPgZQAPgZAbgJQAbgIAeADQgGgZATgLQgIASAJAQIAAADIAAAEIAAgEIAAgDQABgZAcgDQAIgBAEAFQgfgEAAAcQAcgYASAZIAFAIQgVgKgUAKQgbAJgKAWQgIARAGAQQgEAJAAAHIgBATIAAAFQAUAQgPAeIgBACQgFAJgHAJIAJAEIAGABIAAABIgBASIgBABIgBAIIAAADIgGARIgHAOIgBADIgIAQIgJARQgFAHgGAGQgHAGgIADIgQAIIgCABIAFgQIgFAQIgCAEQgLAcgaAMIgEACIgLAEQgJACgLAAQgLAAgMgDgAAmAlQgXATgLAYQALgYAXgTQAMgKAKgNQgKANgMAKgABcilIAAAAg");
	this.shape_32.setTransform(42.9,22.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC97").s().p("AmaK4QgGgGgEgJIAAgCIABgBIAAgBQAIgQANgNQgNANgIAQIAAABIgCAAQgEgMADgMQAFgRADgQIgCgCQgEgLAIgHQAMgJAPgJQARgKAQgMIAegUQAQgLAPgNQAOgOALgQIAVgfQAKgOAIgRQAHgSAFgSQAEgSAJgRQAIgMAIgLIAGgHQAMgPAPgNQAOgLAQgKIAQgJIAMgNIADgDQAWgYAEgrQAFguAAglQADACAFAAQAUAAARADIAkAHQAUAEARAHIAJACQgEAQgIAQQgIAPgFARIgLAlIgKAlIAAACIgEAOIgCAHIgBADIABAAQgDAJgHAHQgHAHgJAFQgJAEgLADQgNAEgQAAIgBAAIAAAAIgMgBIgDAAIADAAIAMABIAAAAIABAAQAQAAANgEQgFAOgIAKQgQAXgVATIgSAQQgUARgXAOQggAUgeAeQgZAXgHAqIgBABIABAAIgCAIQgBAPgQAFQgPAEgNAGIAAAAQgLAfgQAaQgTAhgkAQQgOAGgKAAQgMAAgIgHgAD0KXQgTgGgQgJQgQgJgPgGQgRgIgQAGQgGACgGAAQgTAAgTgBQgSgBgTgDIgMgDQgLgDgMgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQgBgCACgDQAHgSAOgLQAPgLANgOIAZgZQANgNAKgNIAWgdIAUgcQALgPAGgQIAPgjIAPgfQAJgQAJgMQALgQAMgOQAOgPAOgJQAOgKALgLIADgFIAFAFIgFgFIAAAAQgJgHgNgGQgPgJgOgPIgZgaQgOgNgKgPQgLgOgKgHIALgQQAMgPAPgLQAPgMARgIIAkgOQANgEALgIQAHATALAPQAMAPAIARIAPAhIAPAjIAPAiQAIASAFAQIAHAbQgGARgMAQQgKAPgMANQgLAOgKAOQgLASgMALIgaAdIgZAbIgZAaIgcAaIgaAbQgMANgOAMQgRAOAEAIQAEAGAGAGQAMAMARAGQASAGAUABQAUABASADQAVADAKAMQANAPgMANIgBABQgLAMgUABIgDAAQgRAAgQgFgADDgzIgmgDQgSgCgSgFIgkgKIghgMQgRgHgQgJQgQgIgHgSIAAgBQAngOAhgUQAkgWAKgmIAOg3IAEgGQAHgMAEgOIABgDIALAKQAGAHAJAEIARAIIAQAJIASAJIAKAFQAJADAJACIASAFIARAFIASAEIATADIAFABQgJAigfANQgmAPgQAlQgUArAYAkIgDABQgNAFgQAAIgJAAgACYlJIgFgCQAGgJACgLIADgBQAbgNALgbIACgFIACgBIARgHQAIgDAHgHQAGgGAFgHIAJgRIAIgQIABgDIAHgOIAFgRIABgDIABgIIAAgBIABgSIAAgBIgFgBIgJgEQAHgJAFgJIABgCQAPgfgUgPIAAgFIABgTQAAgIAEgIQgGgQAIgRQAKgWAbgKQAYAOANASQAPASASASQANANAPAHIAMAEQgBAJgDAHQgFALgMAEIABAEIADAIIAEACIgLAGQgPAFgPABIgEAAQgOAAgKgFQAAAgAbARQAFACADABIACAAQAKADAIAAQAAAOgYAOQggAPgJgSQAEAYgEAPQgCAIABALQADAbAMASIAMAUIgEAAIgUACIgSACIgTADQgKABgJADIgRAFIgTAFQgJACgJABIgTAAIgRABIgSAAQgHgBgHABIgDABIgBAAgAFDorQgCgEAAgEQAAgHAGgHQgGAHAAAHQAAAEACAEgAFIpXQACgLAFgFQgFAFgCALgAFPpnIABgBIAEgDQAEgDAGAAQgHgJgBgIQgCgIADgHQgZAHgEAXQAFAIAQAAgAFnpuIgDAAIgCAAIgBAAIAAAAIgBAAIgCAAIACAAIABAAIAAAAIABAAIACAAIADAAgAEip1QAFghAhgJQghAJgFAhgAEXp1IgEgIIAEAIg");
	this.shape_33.setTransform(22.7,77.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.1,1,1).p("AEmqxQABgZAcgDQAHgCAFAGQgfgEAAAcQAcgYASAZQACADACAFQgUgKgUAKQgbAJgKAWQgIARAGAQQACAEACAEAEmqqQAAgEAAgDACblJQgFACgGABQgVAGgWgGQgKgDgKgEQgQgGgQgIQAEgCADgBQAYgMATgYQATgXAPgZQAPgaACgdQABgNgBgNQgFgIAAgOQABgFAAgFQADgZAHgXQAJgcAPgZQAPgZAcgJQAbgIAeADQgGgZASgLQgHASAJAQAE6qoQAYAOANARQAPASASATQANAMAPAHQAGADAGACQgBAJgDAGQgFALgMAFQAAABABACQABAEACAEQACACACABQgGADgFACQgPAGgPABQgCAAgCAAQgOAAgKgGQAAAhAbAQQAFADADAAQABABABAAQAKADAIAAQADgBADAAQAAABAAACQgBAJAAAIQgBALgDAKQgDAMgLAAQgQgCgPgGQgBgBgCgBQgOAHgEAOQgCAIABALQADAbAMASQAGAJAGALQABAAABAAQAHAAAGACIAAAAQAKACAGAHQAEAEAFAFQABACACADQAFAHAGAIQAEAGACAKQABAKgDAIQgCAEgCADQgDAFgEAEQgGAGgJAFQgIAFgIAEQgHAFgIADQgIADgJAAQgBAAgBAAIAAAAQgHAAgHgBQgCAAgDAAQgKgCgJgBQgJgCgJgDQgIgCgJgDQgJgCgJgCQgJgCgJgEQgFgCgFgCQgJgEgJgFQgIgFgIgEQgJgFgIgDQgJgEgGgHQgFgGgGgFQAAgBgBgCQAAABgBABQgCABgCACQgJADgJgCQgKgCgIgHQAAADgBAEQAAAJgGAIQgJAKgMAFQgJAEgKACQACgJAFgIQAEgIAGgHQACgDADgCQAAgBABAAQABgBABAAQADgDADgCQAJgGAIABQgDgDgEgDQAXgDAOgHQAJADAFACQAEABABABQABAAAAAAQABAAACAAQAHgBAHAAQAJAAAJAAQAIAAAJAAQAJgBAKAAQAJAAAJgCQAKgCAJgDQAJgDAIgCQAJgDAKgBQAJgCAKgBQAJgBAJgBQAKgCAKAAQACgBACAAAFQpSIgBAAQgQAAgFgJQAEgXAZgGQgDAHACAIQABAHAHAJQAEAAAFABAFUpWQgCABgCADIgBAAQgFAGgCAKAFWppQgWAKAUAJQAEgCAGgBAETpoQgEAIAAAIQAAAKgBAJQAAADAAACQAUAQgPAeQgBABAAABQgFAKgHAJQAEACAFACQADAAACABIAAABQAAAKgBAIQAAAAAAABQAAAEgBAEQAAABgBACQgCAJgDAIQgDAGgEAHQAAACgBACQgEAIgEAIQgEAJgFAIQgFAHgGAGQgHAGgIADQgIAEgJAEQgBAAgBABQgBACgBACQgLAcgbAMQgBABgCABAFHorQgJALAFALAFIqKQghAJgFAhAEGn9QgKAMgNALQgWATgLAYABOkgQgBAAgBAAQgJAAgHgEQgLgGgEgMQAFACAHACQAJACAKgBQAJgCAJgBQABABABACABnkrQAAACgBACACTk2QAGgJACgKACSksQAGACAFACQAJADAJACQAKACAJABQAJABAIACQAKABAJABQAKABAJADQAJACAKABACQkhQgBAAgBgBAgEhoQAngPAhgUQAkgVAKgmQAIgcAGgbQACgEACgCQAHgNAEgNQABgCAAgCADGl3QADgJACgHAFem3QgHgDgGgEQgWgQgTgPAGQoaQgWAdATAcAg9B6QgBgBAAAAQgEgCgDgEQAAgBgBgBQgDgHAAgKQgBgUACgTQABgUADgSQADgSAEgSQAEgSAKgPQAKgRAKgNQAJgLALgKQABgCACgBAgEhoIAAAAAgHhlQABAAAAgBQABgBABgBQAHASAQAIQAQAJARAHQAQAHARAFQASAFASAFQASAGASABQATACATABQAVACARgGQABgBACAAAmkK9QAAgBgBgBQgEgLADgMQAFgSADgPQgBgCgBgBQgEgKAIgHQAMgKAPgJQARgKAQgLQAPgLAPgKQAQgKAPgOQAOgNALgRQALgQAKgPQAKgOAIgRQAHgRAFgSQAEgTAJgQQAIgNAIgLQADgDADgEQAMgOAPgNQAOgMAQgJQAIgFAIgFQAGgGAGgGQABgCACgCQAWgYAEgrQAFguAAgkQADACAFAAQAUAAARADQASADASAEQAUADARAHQAFACAEABQgEAQgIAPQgIAQgFARQgFATgGASQgFASgFASQAAABAAACQgCAHgCAGQAAAEgBAEQgBABAAACQgDAJgHAGQgHAHgJAFQgJAFgLADQgFANgIALQgQAWgVAUQgIAIgKAIQgUAQgXAPQggAUgeAdQgZAYgHAqQAAAAAAAAQgBAEgBAFQgBAOgQAFQgPAFgNAGIAAAAQgLAegQAbQgTAggkARQgcAMgQgNQgGgGgEgKQAAgBAAAAQAAgBABgBQAAAAAAAAQAIgQANgNAFGjWQgJAjgfAMQgmAPgQAmQgUArAYAkQABAAABAAQABgBACABQAGABAFAGQAMAOAOANQAOANAMAPQANANAJAOQgFAFgGAEQgLAHgNAFQgSAGgSAIQgRAIgPALQgPAMgMAPQgGAIgFAIIgBAAQgDAEgDAFQgQgSgUgVQgPgPgJgMQgHgIgGgMQgMAPgGARQgCAEgBAEQAAAAAAABQgBAEAAAEQgBAJADAJQgFAGgJAAQgCAAgDAAABpBKQABgBAAgBQALgNALgNABTB7QgBgFACgEQAAAAAAABAEyEHIAAAAQgJgHgNgHQgPgIgOgPQgMgOgNgMQgOgOgKgOQgLgOgKgHAE7A/QAHASALAQQAMAPAIAQQAIARAHARQAHASAIARQAIASAHAQQAIASAFAQQAEAOADANQgGAQgMARQgKAPgMANQgLANgKAPQgLARgMAMQgNAOgNAOQgNAPgMAMQgNANgMANQgOAOgOANQgOANgMANQgMANgOAMQgRAPAEAIQAEAGAGAGQAMALARAGQASAHAUABQAUAAASAEQAVADAKAMQANAOgMAOQAAAAgBABQgLAMgUABQgTAAgRgFQgTgGgQgJQgQgJgPgHQgRgHgQAGQgGACgGAAQgTAAgTgCQgSgBgTgDQgGgBgGgCQgLgDgMgFQgBgBAAgCQgBgDACgDQAHgRAOgLQAPgMANgOQAMgMANgNQANgMAKgOQALgOALgPQAMgPAIgMQALgPAGgRQAIgTAHgPQAHgQAIgPQAJgQAJgNQALgQAMgNQAOgPAOgKQAOgKALgLQACgCABgCQADACACADAggFaQgTAFgagC");
	this.shape_34.setTransform(33.7,77.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEFF97").s().p("AhkDFIgUgGQgQgGgQgJIAHgDQAYgMATgYQATgXAQgZQAPgaABgdIAAgZQgFgJAAgNIABgKQADgZAHgXQAKgcAOgZQAPgZAbgJQAbgIAeADQgGgZASgLQgHASAJAQIAAADIAAAEIAAgEIAAgDQABgZAdgDQAHgBAEAFQgfgEAAAcQAcgYASAZIAEAIQgUgKgTAKQgcAJgKAWQgIARAGAQQgEAJAAAHIgBATIAAAFQAUAQgPAeIgBACQgFAJgHAJIAJAEIAGABIAAABIgBASIgBABIgBAIIgBADIgFARIgHAOIgBADIgHAQIgKARQgEAHgHAGQgHAGgIADIgQAIIgCABIAFgQIgFAQIgCAEQgLAcgaAMIgEACIgLAEQgJACgLAAQgLAAgMgDgAAmAlQgXATgLAYQALgYAXgTQAMgKAKgNQgKANgMAKg");
	this.shape_35.setTransform(53.9,24.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF00").s().p("AgdDRQgPgPgJgMQgHgJgGgLIABgCIAWgbIgWAbIgBACQgMAPgGAQIgDAIIAAAAQgCAFABAEQgBAKADAJQgFAGgJAAIgFgBIgJgCQgRgHgUgEIglgHQgRgDgUAAQgFAAgDgCIgBAAQgEgCgDgEIgBgDQgDgGAAgLQgBgTACgUQABgTADgTIAHgkQAEgTAKgPQAKgQAKgNQAJgLALgJIABgBIACgCQAIARAQAIQAQAJARAHIAhAMIAkAKQASAFASACIAlADQAVABARgGIADgBIACAAIADAAQAGACAFAGIAaAbIAaAcQANAOAJAOIgLAIQgLAIgNAEIgkAOQgRAIgPAMQgPALgMAPIgLAQIgBAAIgGAJIgjgmgACoh9IAAAAIgOgBIgFgBIgTgDIgSgEIgRgFIgSgFQgJgCgJgDIgKgFIgSgJIgQgJIgQgIQgJgEgGgHIgLgKIgBgEIgBACIgEADQgJAEgJgCQgKgCgIgIIABgDIgBADIgBAIQAAAJgGAIQgJAKgMAFQgJADgKACQACgJAFgIIAKgPIAFgFIABAAIACgCIAGgEIAAgBQAHgEAHAAIABgBIAAAAIABABIABAAIgHgHQAXgCAOgHIAOAFIAFACIABAAIADgBQAGgBAIABIARAAIARgBIATAAQAJgBAJgCIATgFIARgFQAJgDAKgBIATgDIASgCIAUgCIAEAAIACAAQAHAAAGABIAAAAQAKADAGAGIAJAKIADAEIALAPQAEAHACAKQABAJgDAJIgEAHIgHAIQgGAHgJAFIgQAJIgPAIQgIADgJAAIgBAAIgBAAgAgOjRIARAGIATADIARACIATADQAKABAJACIATAEIgTgEQgJgCgKgBIgTgDIgRgCIgTgDIgRgGIgLgDIALADgAhfjIQgJgBgHgEQgLgGgEgLIAMADQAJADAKgCIASgCIACACIAHAHIgBAAIgBgBIAAAAIgBABQgHAAgHAEIAAABIgGAEIgCACIgCAAgAhLjaIAAAAg");
	this.shape_36.setTransform(50.9,68.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC97").s().p("AmaK4QgGgGgEgJIAAgCIABgBIAAgBQAIgQANgNQgNANgIAQIAAABIgCAAQgEgMADgMQAFgRADgQIgCgCQgEgLAIgHQAMgJAPgJQARgKAQgMIAegUQAQgLAPgNQAOgOALgQIAVgfQAKgOAIgRQAHgSAFgSQAEgSAJgRQAIgMAIgLIAGgHQAMgPAPgNQAOgLAQgKIAQgJIAMgNIADgDQAWgYAEgrQAFguAAglQADACAFAAQAUAAARADIAkAHQAUAEARAHIAJACQgEAQgIAQQgIAPgFARIgLAlIgKAlIAAACIgEAOIgCAHIgBADIABAAQgDAJgHAHQgHAHgJAFQgJAEgLADQgNAEgQAAIgBAAIAAAAIgMgBIgDAAIADAAIAMABIAAAAIABAAQAQAAANgEQgFAOgIAKQgQAXgVATIgSAQQgUARgXAOQggAUgeAeQgZAXgHAqIgBABIABAAIgCAIQgBAPgQAFQgPAEgNAGIAAAAQgLAfgQAaQgTAhgkAQQgOAGgKAAQgMAAgIgHgAD0KXQgTgGgQgJQgQgJgPgGQgRgIgQAGQgGACgGAAQgTAAgTgBQgSgBgTgDIgMgDQgLgDgMgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQgBgCACgDQAHgSAOgLQAPgLANgOIAZgZQANgNAKgNIAWgdIAUgcQALgPAGgQIAPgjIAPgfQAJgQAJgMQALgQAMgOQAOgPAOgJQAOgKALgLIADgFIAAAAQgJgHgNgGQgPgJgOgPIgZgaQgOgNgKgPQgLgOgKgHIALgQQAMgPAPgLQAPgMARgIIAkgOQANgEALgIQAHATALAPQAMAPAIARIAPAhIAPAjIAPAiQAIASAFAQIAHAbQgGARgMAQQgKAPgMANQgLAOgKAOQgLASgMALIgaAdIgZAbIgZAaIgcAaIgaAbQgMANgOAMQgRAOAEAIQAEAGAGAGQAMAMARAGQASAGAUABQAUABASADQAVADAKAMQANAPgMANIgBABQgLAMgUABIgDAAQgRAAgQgFgAE3D2IgFgFIAFAFgADDgzIgmgDQgSgCgSgFIgkgKIghgMQgRgHgQgJQgQgIgHgSIAAgBQAngOAhgUQAkgWAKgmIAOg3IAEgGQAHgMAEgOIABgDIALAKQAGAHAJAEIARAIIAQAJIASAJIAKAFQAJADAJACIASAFIARAFIASAEIATADIAFABQgJAigfANQgmAPgQAlQgUArAYAkIgDABQgNAFgQAAIgJAAgACYlJIgFgCQAGgJACgLIADgBQAbgNALgbIACgFIACgBIARgHQAIgDAHgHQAGgGAFgHIAJgRIAIgQIABgDIAHgOIAFgRIABgDIABgIIAAgBIABgSIAAgBIgFgBIgJgEQAHgJAFgJIABgCQAPgfgUgPIAAgFIABgTQAAgIAEgIIAEAIIgEgIQgGgQAIgRQAKgWAbgKQAYAOANASQAPASASASQANANAPAHIAMAEQgBAJgDAHQgFALgMAEIABAEIADAIIAEACIgLAGQgPAFgPABIgEAAQgOAAgKgFQAAAgAbARQAFACADABIACAAQAKADAIAAIAGgBIAAAEQgBAJAAAIIgEAUQgDANgLgBQgQgBgPgHIgDgBIgNgIQgWgPgTgQQATAQAWAPIANAIQgOAGgEAPQgCAIABALQADAbAMASIAMAUIgEAAIgUACIgSACIgTADQgKABgJADIgRAFIgTAFQgJACgJABIgTAAIgRABIgSAAQgHgBgHABIgDABIgBAAgAFDorQgCgEAAgEQAAgHAGgHQgGAHAAAHQAAAEACAEgAFIpXQACgLAFgFQgFAFgCALgAFPpnIABgBIAEgDQAEgDAGAAQgHgJgBgIQgCgIADgHQgZAHgEAXQAFAIAQAAgAFnpuIgGAAIgBAAIAAAAIgCAAIAAAAIAAAAIACAAIAAAAIABAAIAGAAgAEip1QAFghAhgJQghAJgFAhg");
	this.shape_37.setTransform(33.7,79.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC97").s().p("AmaK4QgGgGgEgJIAAgCIABgBIgCAAQgEgMADgMQAFgRADgQIgCgCQgEgLAIgHQAMgJAPgJQARgKAQgMIAegUQAQgLAPgNQAOgOALgQIAVgfQAKgOAIgRQAHgSAFgSQAEgSAJgRQAIgMAIgLIAGgHQAMgPAPgNQAOgLAQgKIAQgJIAMgNIADgDQAWgYAEgrQAFguAAglQADACAFAAQAUAAARADIAkAHQAUAEARAHIAJACQgEAQgIAQQgIAPgFARIgLAlIgKAlIAAACIgEAOIgCAHIgBADIABAAQgDAJgHAHQgHAHgJAFQgJAEgLADQgNAEgQAAIgBAAIAAAAIgMgBIgDAAIADAAIAMABIAAAAIABAAQAQAAANgEQgFAOgIAKQgQAXgVATIgSAQQgUARgXAOQggAUgeAeQgZAXgHAqIgBABIABAAIgCAIQgBAPgQAFQgPAEgNAGIAAAAQgLAfgQAaQgTAhgkAQQgOAGgKAAQgMAAgIgHgAmjKlIAAABIAAgBQAIgQANgNQgNANgIAQgAD0KXQgTgGgQgJQgQgJgPgGQgRgIgQAGQgGACgGAAQgTAAgTgBQgSgBgTgDIgMgDQgLgDgMgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQgBgCACgDQAHgSAOgLQAPgLANgOIAZgZQANgNAKgNIAWgdIAUgcQALgPAGgQIAPgjIAPgfQAJgQAJgMQALgQAMgOQAOgPAOgJQAOgKALgLIADgFIAAAAQgJgHgNgGQgPgJgOgPIgZgaQgOgNgKgPQgLgOgKgHIALgQQAMgPAPgLQAPgMARgIIAkgOQANgEALgIQAHATALAPQAMAPAIARIAPAhIAPAjIAPAiQAIASAFAQIAHAbQgGARgMAQQgKAPgMANQgLAOgKAOQgLASgMALIgaAdIgZAbIgZAaIgcAaIgaAbQgMANgOAMQgRAOAEAIQAEAGAGAGQAMAMARAGQASAGAUABQAUABASADQAVADAKAMQANAPgMANIgBABQgLAMgUABIgDAAQgRAAgQgFgAE3D2IgFgFIAFAFgADDgzIgmgDQgSgCgSgFIgkgKIghgMQgRgHgQgJQgQgIgHgSIAAgBQAngOAhgUQAkgWAKgmIAOg3IAEgGQAHgMAEgOIABgDIALAKQAGAHAJAEIARAIIAQAJIASAJIAKAFQAJADAJACIASAFIARAFIASAEIATADIAFABQgJAigfANQgmAPgQAlQgUArAYAkIgDABQgNAFgQAAIgJAAgACYlJIgFgCQAGgJACgLIADgBQAbgNALgbIACgFIACgBIARgHQAIgDAHgHQAGgGAFgHIAJgRIAIgQIABgDIAHgOIAFgRIABgDIABgIIAAgBIABgSIAAgBIgFgBIgJgEQAHgJAFgJIABgCQAPgfgUgPIAAgFIABgTQAAgIAEgIIAEAIIgEgIQgGgQAIgRQAKgWAbgKQAYAOANASQAPASASASQANANAPAHIAMAEQgBAJgDAHQgFALgMAEIABAEIADAIIAEACIgLAGQgPAFgPABIgEAAQgOAAgKgFQAAAgAbARQAFACADABIACAAQAKADAIAAIAGgBIAAAEQgBAJAAAIIgEAUQgDANgLgBQgQgBgPgHIgDgBIgNgIQgWgPgTgQQATAQAWAPIANAIQgOAGgEAPQgCAIABALQADAbAMASIAMAUIgEAAIgUACIgSACIgTADQgKABgJADIgRAFIgTAFQgJACgJABIgTAAIgRABIgSAAQgHgBgHABIgDABIgBAAgAFDorQgCgEAAgEQAAgHAGgHQgGAHAAAHQAAAEACAEgAFIpXQACgLAFgFQgFAFgCALgAFPpnIABgBIAEgDQAEgDAGAAQgHgJgBgIQgCgIADgHQgZAHgEAXQAFAIAQAAgAFnpuIgGAAIgBAAIAAAAIgCAAIAAAAIAAAAIACAAIAAAAIABAAIAGAAgAEip1QAFghAhgJQghAJgFAhg");
	this.shape_38.setTransform(33.7,79.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.1,1,1).p("AE6qoQAYAOANARQAPASASATQANAMAPAHQAGADAGACQgBAJgDAGQgFALgMAFQAAABABACQABAEACAEQACACACABQgGADgFACQgPAGgPABQgCAAgCAAQgOAAgKgGQAAAhAbAQQAFADADAAQABABABAAQAKADAIAAQADgBADAAQAAABAAACQgBAJAAAIQgBALgDAKQgDAMgLAAQgQgCgPgGQgBgBgCgBQgHgDgGgEQgWgQgTgPAEmqqQAAgEAAgDQABgZAcgDQAHgCAFAGQgfgEAAAcQAcgYASAZQACADACAFQgUgKgUAKQgbAJgKAWQgIARAGAQQgEAIAAAIQAAAKgBAJQAAADAAACQAUAQgPAeQgBABAAABQgFAKgHAJQAEACAFACQADAAACABIAAABQAAAKgBAIQAAAAAAABQAAAEgBAEQAAABgBACQgCAJgDAIQgDAGgEAHQAAACgBACQgEAIgEAIQgEAJgFAIQgFAHgGAGQgHAGgIADQgIAEgJAEQgBAAgBABQgBACgBACQgLAcgbAMQgBABgCABQgFACgGABQgVAGgWgGQgKgDgKgEQgQgGgQgIQAEgCADgBQAYgMATgYQATgXAPgZQAPgaACgdQABgNgBgNQgFgIAAgOQABgFAAgFQADgZAHgXQAJgcAPgZQAPgZAcgJQAbgIAeADQgGgZASgLQgHASAJAQAETpoQACAEACAEAFQpSQACgDACgBQgUgJAWgKQgCgIADgHQgZAGgEAXQAFAJAQAAgAFIpCQACgKAFgGIABAAAFUpWQAEgCAGgBQgHgJgBgHAFepZQAEAAAFABAFHorQgJALAFALAFIqKQghAJgFAhAFem3QgOAHgEAOQgCAIABALQADAbAMASQAGAJAGALQgCAAgCABQgKAAgKACQgJABgJABQgKABgJACQgKABgJADQgIACgJADQgJADgKACQgJACgJAAQgKAAgJABQgJAAgIAAQgJAAgJAAQgHAAgHABQgCAAgBAAQAAAAgBAAQgBgBgEgBQAGgJACgKAEGn9QgKAMgNALQgWATgLAYACSksQAGACAFACQAJADAJACQAKACAJABQAJABAIACQAKABAJABQAKABAJADQAJACAKABAFmlOQABAAABAAQAHAAAGACIAAAAQAKACAGAHQAEAEAFAFQABACACADQAFAHAGAIQAEAGACAKQABAKgDAIQgCAEgCADQgDAFgEAEQgGAGgJAFQgIAFgIAEQgHAFgIADQgIADgJAAQgBAAgBAAIAAAAQgHAAgHgBQgCAAgDAAQgKgCgJgBQgJgCgJgDQgIgCgJgDQgJgCgJgCQgJgCgJgEQgFgCgFgCQgJgEgJgFQgIgFgIgEQgJgFgIgDQgJgEgGgHQgFgGgGgFQgBAAgBgBQgCABgCACQgJADgJgCQgKgCgIgHQAAADgBAEQAAAJgGAIQgJAKgMAFQgJAEgKACQACgJAFgIQAEgIAGgHQACgDADgCQAAgBABAAQgBAAgBAAQgJAAgHgEQgLgGgEgMQAFACAHACQAJACAKgBQAJgCAJgBQABABABACQAXgDAOgHQAJADAFACADGl3QADgJACgHAGQoaQgWAdATAcABOkgQABgBABAAQADgDADgCQAJgGAIABQgDgDgEgDABmknQABgCAAgCACQkhQAAgBgBgCQAAABgBABAgEhoQAngPAhgUQAkgVAKgmQAIgcAGgbQACgEACgCQAHgNAEgNQABgCAAgCAgEhoQgBABgBABQAAABgBAAQABgCACgBAgEhoIAAAAADsgjQgCAAgBABQgRAGgVgCQgTgBgTgCQgSgBgSgGQgSgFgSgFQgRgFgQgHQgRgHgQgJQgQgIgHgSAg9B6QgBgBAAAAQgEgCgDgEQAAgBgBgBQgDgHAAgKQgBgUACgTQABgUADgSQADgSAEgSQAEgSAKgPQAKgRAKgNQAJgLALgKAmkK9QAAgBgBgBQgEgLADgMQAFgSADgPQgBgCgBgBQgEgKAIgHQAMgKAPgJQARgKAQgLQAPgLAPgKQAQgKAPgOQAOgNALgRQALgQAKgPQAKgOAIgRQAHgRAFgSQAEgTAJgQQAIgNAIgLQADgDADgEQAMgOAPgNQAOgMAQgJQAIgFAIgFQAGgGAGgGQABgCACgCQAWgYAEgrQAFguAAgkQADACAFAAQAUAAARADQASADASAEQAUADARAHQAFACAEABAC5CXIgBAAQgDAEgDAFQgQgSgUgVQgPgPgJgMQgHgIgGgMQABgBAAgBQALgNALgNABpBKQgMAPgGARQgCAEgBAEQAAAAAAABQgBAEAAAEQgBgFACgEQAAAAAAABABTB7QgBAJADAJQgFAGgJAAQgCAAgDAAQgEAQgIAPQgIAQgFARQgFATgGASQgFASgFASQAAABAAACQgCAHgCAGQAAAEgBAEQgBABAAACQgDAJgHAGQgHAHgJAFQgJAFgLADQgTAFgagCAFGjWQgJAjgfAMQgmAPgQAmQgUArAYAkQABAAABAAQABgBACABQAGABAFAGQAMAOAOANQAOANAMAPQANANAJAOQgFAFgGAEQAHASALAQQAMAPAIAQQAIARAHARQAHASAIARQAIASAHAQQAIASAFAQQAEAOADANQgGAQgMARQgKAPgMANQgLANgKAPQgLARgMAMQgNAOgNAOQgNAPgMAMQgNANgMANQgOAOgOANQgOANgMANQgMANgOAMQgRAPAEAIQAEAGAGAGQAMALARAGQASAHAUABQAUAAASAEQAVADAKAMQANAOgMAOQAAAAgBABQgLAMgUABQgTAAgRgFQgTgGgQgJQgQgJgPgHQgRgHgQAGQgGACgGAAQgTAAgTgCQgSgBgTgDQgGgBgGgCQgLgDgMgFQgBgBAAgCQgBgDACgDQAHgRAOgLQAPgMANgOQAMgMANgNQANgMAKgOQALgOALgPQAMgPAIgMQALgPAGgRQAIgTAHgPQAHgQAIgPQAJgQAJgNQALgQAMgNQAOgPAOgKQAOgKALgLQACgCABgCIAAAAQgJgHgNgHQgPgIgOgPQgMgOgNgMQgOgOgKgOQgLgOgKgHAE7A/QgLAHgNAFQgSAGgSAIQgRAIgPALQgPAMgMAPQgGAIgFAIAEyEHQADACACADAggFaQgFANgIALQgQAWgVAUQgIAIgKAIQgUAQgXAPQggAUgeAdQgZAYgHAqQAAAAAAAAQgBAEgBAFQgBAOgQAFQgPAFgNAGIAAAAQgLAegQAbQgTAggkARQgcAMgQgNQgGgGgEgKQAAgBAAAAQAAgBABgBQAAAAAAAAQAIgQANgN");
	this.shape_39.setTransform(22.7,75.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF00").s().p("AgdDRQgPgPgJgMQgHgJgGgLIABgCIAWgbIgWAbIgBACQgMAPgGAQIgDAIIAAAAQgCAFABAEQgBAKADAJQgFAGgJAAIgFgBIgJgCQgRgHgUgEIglgHQgRgDgUAAQgFAAgDgCIgBAAQgEgCgDgEIgBgDQgDgGAAgLQgBgTACgUQABgTADgTIAHgkQAEgTAKgPQAKgQAKgNQAJgLALgJIABgBIACgCQAIARAQAIQAQAJARAHIAhAMIAkAKQASAFASACIAlADQAVABARgGIADgBIACAAIADAAQAGACAFAGIAaAbIAaAcQANAOAJAOIgLAIQgLAIgNAEIgkAOQgRAIgPAMQgPALgMAPIgLAQIgBAAIgGAJIgjgmgACoh9IAAAAIgOgBIgFgBIgTgDIgSgEIgRgFIgSgFQgJgCgJgDIgKgFIgSgJIgQgJIgQgIQgJgEgGgHIgLgKIgBgEIgBACIgEADQgJAEgJgCQgKgCgIgIIABgDIgBADIgBAIQAAAJgGAIQgJAKgMAFQgJADgKACQACgJAFgIIAKgPIAFgFIABAAIgCAAQgJgBgHgEQgLgGgEgLIAMADQAJADAKgCIASgCIACACQAXgCAOgHIAOAFIAFACIABAAIADgBQAGgBAIABIARAAIARgBIATAAQAJgBAJgCIATgFIARgFQAJgDAKgBIATgDIASgCIAUgCIAEAAIACAAQAHAAAGABIAAAAQAKADAGAGIAJAKIADAEIALAPQAEAHACAKQABAJgDAJIgEAHIgHAIQgGAHgJAFIgQAJIgPAIQgIADgJAAIgBAAIgBAAgAgOjRIARAGIATADIARACIATADQAKABAJACIATAEIgTgEQgJgCgKgBIgTgDIgRgCIgTgDIgRgGIgLgDIALADgAhVjOIgGAEIgCACIACgCIAGgEIAAgBQAHgEAIgBIAAAAIAAAAIABABIABAAIgHgHIAHAHIgBAAIgBgBIAAAAIAAAAQgIABgHAEIAAABg");
	this.shape_40.setTransform(39.9,66.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC97").s().p("AmaK4QgGgGgEgJIAAgCIABgBIAAgBQAIgQANgNQgNANgIAQIAAABIgCAAQgEgMADgMQAFgRADgQIgCgCQgEgLAIgHQAMgJAPgJQARgKAQgMIAegUQAQgLAPgNQAOgOALgQIAVgfQAKgOAIgRQAHgSAFgSQAEgSAJgRQAIgMAIgLIAGgHQAMgPAPgNQAOgLAQgKIAQgJIAMgNIADgDQAWgYAEgrQAFguAAglQADACAFAAQAUAAARADIAkAHQAUAEARAHIAJACQgEAQgIAQQgIAPgFARIgLAlIgKAlIAAACIgEAOIgCAHIgBADIABAAQgDAJgHAHQgHAHgJAFQgJAEgLADQgNAEgQAAIgBAAIAAAAIgMgBIgDAAIADAAIAMABIAAAAIABAAQAQAAANgEQgFAOgIAKQgQAXgVATIgSAQQgUARgXAOQggAUgeAeQgZAXgHAqIgBABIABAAIgCAIQgBAPgQAFQgPAEgNAGIAAAAQgLAfgQAaQgTAhgkAQQgOAGgKAAQgMAAgIgHgAD0KXQgTgGgQgJQgQgJgPgGQgRgIgQAGQgGACgGAAQgTAAgTgBQgSgBgTgDIgMgDQgLgDgMgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQgBgCACgDQAHgSAOgLQAPgLANgOIAZgZQANgNAKgNIAWgdIAUgcQALgPAGgQIAPgjIAPgfQAJgQAJgMQALgQAMgOQAOgPAOgJQAOgKALgLIADgFIAFAFIgFgFIAAAAQgJgHgNgGQgPgJgOgPIgZgaQgOgNgKgPQgLgOgKgHIALgQQAMgPAPgLQAPgMARgIIAkgOQANgEALgIQAHATALAPQAMAPAIARIAPAhIAPAjIAPAiQAIASAFAQIAHAbQgGARgMAQQgKAPgMANQgLAOgKAOQgLASgMALIgaAdIgZAbIgZAaIgcAaIgaAbQgMANgOAMQgRAOAEAIQAEAGAGAGQAMAMARAGQASAGAUABQAUABASADQAVADAKAMQANAPgMANIgBABQgLAMgUABIgDAAQgRAAgQgFgADDgzIgmgDQgSgCgSgFIgkgKIghgMQgRgHgQgJQgQgIgHgSIAAgBQAngOAhgUQAkgWAKgmIAOg3IAEgGQAHgMAEgOIABgDIALAKQAGAHAJAEIARAIIAQAJIASAJIAKAFQAJADAJACIASAFIARAFIASAEIATADIAFABQgJAigfANQgmAPgQAlQgUArAYAkIgDABQgNAFgQAAIgJAAgACYlJIgFgCQAGgJACgLIADgBQAbgNALgbIACgFIACgBIARgHQAIgDAHgHQAGgGAFgHIAJgRIAIgQIABgDIAHgOIAFgRIABgDIABgIIAAgBIABgSIAAgBIgFgBIgJgEQAHgJAFgJIABgCQAPgfgUgPIAAgFIABgTQAAgIAEgIQgGgQAIgRQAKgWAbgKQAYAOANASQAPASASASQANANAPAHIAMAEQgBAJgDAHQgFALgMAEIABAEIADAIIAEACIgLAGQgPAFgPABIgEAAQgOAAgKgFQAAAgAbARQAFACADABIACAAQAKADAIAAIAGgBIAAAEQgBAJAAAIIgEAUQgDANgLgBQgQgBgPgHIgDgBIgNgIQgWgPgTgQQATAQAWAPIANAIQgOAGgEAPQgCAIABALQADAbAMASIAMAUIgEAAIgUACIgSACIgTADQgKABgJADIgRAFIgTAFQgJACgJABIgTAAIgRABIgSAAQgHgBgHABIgDABIgBAAgAFDorQgCgEAAgEQAAgHAGgHQgGAHAAAHQAAAEACAEgAFPpnQgFAFgCALQACgLAFgFIABgBIAEgDQAEgDAGAAQgHgJgBgIQgCgIADgHQgZAHgEAXQAFAIAQAAIAAABgAFnpuIgDAAIgCAAIgBAAIAAAAIgBAAIgCAAIACAAIABAAIAAAAIABAAIACAAIADAAgAEip1QAFghAhgJQghAJgFAhgAEXp1IgEgIIAEAIg");
	this.shape_41.setTransform(22.7,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:56.7,y:14.5}},{t:this.shape_30,p:{x:58.3,y:19.6}},{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.shape_31,p:{x:67.7,y:16.3}},{t:this.shape_37},{t:this.shape_30,p:{x:69.4,y:21.4}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},20).to({state:[{t:this.shape_35},{t:this.shape_38},{t:this.shape_30,p:{x:69.4,y:21.4}},{t:this.shape_31,p:{x:67.7,y:16.3}},{t:this.shape_36},{t:this.shape_34}]},20).to({state:[{t:this.shape_41},{t:this.shape_32},{t:this.shape_30,p:{x:58.3,y:19.6}},{t:this.shape_31,p:{x:56.7,y:14.5}},{t:this.shape_40},{t:this.shape_39}]},10).wait(11));

	// back
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.1,1,1).p("ABEgNQAAABABABQAEAMgMgEQgBAAgBAAQgNgGgLgHQgJgFgHgHQAAABABACAAUgtQgCAFABAMQAAAAAAAAAASAGQgNgFgHgIQgBgCgBgCAgjgXQABAIADAFQAAABABAAQAGALAPgCQAEgBAFgCAAJgfQAKAMAKAKQAAAAABABQATAUANAKQAHAGAIADIAAABQgBAFgBAEQgGACgEABQgMABgJgMQgBgBgBgBQgCgBgBgBQgCASAAAFQgRgCgJgIQgDAEgBAHQgbgFgFgXQgCgBgBgBQgPgMgMgRAASAGQgBgDABgDAASAHQAAgBAAAAAAXAMQgCgCgDgDQABACABACQABABACAAQADAFAEAEQAEAEAFAEAg3gnQgRgCgEgLAgDAbQADACACACQADAGAGAF");
	this.shape_42.setTransform(72.1,85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.1,1,1).p("AA4DvQgEAAgEAAQgjgCgXgoQgLgKgNgKQgogegdgZQgfgdgRgqQgSgvgCgtQgBgvAHgxQAEgfgDgmQgBgKgBgLQAAgpAngEQAEAAAEAAQAVAAAQAJQAJAGAHAJQgJAfgFAgQgIAvgFAvQgFApAFAqQABAHABAGQACAQADAQQARASARATQAHAIAIAIQABABAAABQACABACACQAUAXAkAnQAhAAAhACQAIAAAhAgQARARAYAZAhyAJQAOAOAOAOAB8DcQgGgDgFgDQgEgCgDgCQgBAAgBgBQgDgCgDgBQgGgEgHgDQgHgDgJgBABnDyQgBgCgBgCAA+C+QADACAEADIAAAAAAHCdQAJAAAIAAABjDrQgEgHgEgGQAAAAAAAAQgLgRgLgKABHDrQgEgCgDgDQgKgKgGgOQgCgEgCgFAA4DvQAAAAABAAQAGgBAIgDQABABAAABAA4DvQAOANAPALQAHAFAIAF");
	this.shape_43.setTransform(61.7,60.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC97").s().p("ABJEDIgDgCQgPgNgMgSQgjgCgXgoIgXgUQgpgegcgZQgggdgQgqQgTgugBguQgBgvAGgxQAEgfgCgmIgDgVQAAgpAogEIAIAAQAVAAAPAJQAJAGAHAJQgJAfgFAgQgIAvgFAvQgEApAEAqIACAOIAFAfIAiAlIAPAQIACACIADADIA5A+IBBACQAJAAAhAgIAoAqIACABQADANgMgEIgCgBQgNgFgKgHQgJgGgHgGIAAACIgLgGIgHgEIgCgBIgGgDIgMgHQgHgDgKgBIAAAAIgHgFIAHAFIAAAAQAMAKALARIgBAAIAIANIgIgNIABAAQgLgRgMgKQAKABAHADIAMAHIAGADIACABIAHAEIAUAWIABABQAUAWANAKQAGAFAIAEIAAAAIgCAJQgFADgFAAQgMABgJgLIgCgCIgDgDIgJgIIgGgIIgFgGIABAFIAEABIAGAIIAJAIIgCAYQgRgDgJgIQgFgEgEgGIgGgFIAGAFQAEAGAFAEQgCAEgBAHQgdgEgFgXgAAzDiQAPANAOALIAPAKIgPgKQgOgLgPgNIABAAQAGgBAIgDIACACIAAAAQAGAJAJAAIAAAAIAAAAIAGgBIABAAIAJgDIgDgEIADAEIgJADIgBAAIgGABIAAAAIAAAAQgJAAgGgJIAAAAIgBgCQgCgFgCgHQACAHACAFIgBAAIgGgFQgLgJgGgPIgDgJIADAJQAGAPALAJIAGAFQgIADgGABIgBAAIgIAAIAIAAIAAAAgAB2DwIgBgBIABABgABgDhQAJAKAMAEIAAgEIAAgCIAAACIAAAEQgMgEgJgKIgCgDIACADgAB2DMIABABIgBgBIAAgGQAAgHABgDQgBADAAAHIAAAGgAArDBQgQgBgFgLQAFALAQABgAAUCQIgRAAIARAAgAhbAYIgcgbIAcAbgACKEGIAAAAgABjDlIAAAAgABCDeIAAAAgABAC2IAAAAg");
	this.shape_44.setTransform(62.1,61.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.1,1,1).p("AAEABQgDgEgBgDQgHgOAJgJQABgBAAAAQAEgEAHgDAgGg1QgOAQgIASQgBACgBACQgVAKADAcQAHgBAEACQADgHAGgFQABgDABgEAAAAVQAAgNAHgJQACgCABgBAgBAWQgCAEgCACQgEAEgCAEQgEAFgCAGQgBACgBACQAAABgBACQgJALAEALQABAFAEAEQAFAAAFAAQAAAAAAAAQACgIADgIQAGgPAQgZQAAgBABAAQAHgMAJgNAAAAVQAAABgBAAQgCABgCACQAAABAAACAAFAUQgDAAgCABAAZg9QgCgQAJgHAAhAOQAAAAAAgBQALgDAFAAAAhAOQgEAJgDAJQgFANgCAOQAAABAAABQgBAMAMgGQAAgBABgBAAfAPQABgBABAAAglAYQgFAKACASQAFgBASgE");
	this.shape_45.setTransform(28.8,70.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.1,1,1).p("Ag4hMQAPgHAPgGQAHgDAGgCQAngPApgGQAvgHAvgEQAggDAhABQAHgKADgKQAFgRgFgUQgBgEgBgEQgOglgoAKQgKAEgJADQgkAMggAEQgwAGgtANQgsANgpAeQglAagTAmQgSAigTAuQgGAOgHAOQghAhAHAiQAAAEACAEQAAABAAAAQACAGAFAHQABgEADgEQAGgMANgKQADgDAFgDAgjhuQgKARgLARAiQA9QAdgtARgZQABgCABgCQABgBABgBQAFgKAHgJQANgVANgVAiQA9QgCgIgCgIAjRCAQABgBAAgBAjOCfQABgBACgCAjuCkQADgJAEgJQAHgQAJgSAiqByQAAAAABAAQABgEACgEAi0CuQABgHACgGQABgEABgEQAAgBABgBQAAgDABgDQACgHACgHQABgHgCgKAjICZQAFgFAFgGQAAAAAAAAQANgOAHgOAi0DfQASgdAMgVQAXgogCgIQgHgggIgg");
	this.shape_46.setTransform(49.9,54.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC97").s().p("AjcDpQgEgEgCgFQgDgLAJgLIABgDIABgEIAGgLIAGgIIgGAIIgGALIgXAFQgCgSAGgKQgFgCgHABQgCgdAUgKIACgEQAIgSAPgQIACAIIgCgIQgHgiAhghIANgbQATgvASgiQATgmAlgaQApgeArgNQAugNAwgGQAggEAkgMIATgHQAogKAOAlIACAHQAGAUgGASQgDAKgHAJQghgBggAEQgvAEgvAHQgpAGgnAOIgNAGIgeANIAVgiIgVAiIgaAqIgMASIgCADIgCAEIguBGIgEgRIAEARIAPBAQACAIgXAoIgeAyIgBACQgMAGABgMIABgCQACgOAEgNQADgJAEgJIABgBIABAAIACgBIAGgBIAAAAIAAAAIAFgBIAAAAIABAAIABAAIgBAAIgBAAIAAAAIgFABIAAAAIAAAAIgGABIgCABIgBAAIgBABIgCABIADgMIACgIIABgCIABgGIAEgOIABgIIgCgJIABgBIADgHIgDAHIgBABIACAJIgBAIIgEAOIgBAGIgBACIgCAIIgQAZIgBABQgQAZgGAPQgEAIgBAIIgBAAIgFAAIgEAAgAjOCwIAFgGIABgBIAGgBIgGABQABgNAHgKIADgDIgDADQgHAKgBANIgBABIgEADIgBADIAAAAgAjcCIIgHARIgCAHQgFAFgDAHQADgHAFgFIACgHIAHgRQAHgRAJgRIAAABQACAGAFAHIAEgIQAGgMANgKIAIgGIgIAGIgBgHQAAgLAHgFQgHAFAAALIABAHQgNAKgGAMIgEAIQgFgHgCgGIAAgBQgJARgHARgAjDCVIADgDIgDADgAjJCNIAGAIIgGgIQgCgGgBgEQAAgIAGgFIABgBIAAgBIgBACQgGAFAAAIQABAEACAGgAi9CPIAKgLIAAAAQANgPAHgNQgHANgNAPIAAAAIgKALgAjFB1QAFgEAHgDQgHADgFAEgAjICpIAAAAgAiuBWIAAAAg");
	this.shape_47.setTransform(48.8,55.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.1,1,1).p("AgYh4QgKARgLARQAPgHAPgGQAHgDAGgDQAngOApgGQAvgHAvgEQAggEAhABQAHgJADgKQAGgSgGgUQgBgDgBgEQgOglgoAKQgKAEgJADQgkAMggAEQgwAGguANQgrANgpAeQglAagTAmQgSAigTAvQgGANgHAOQghAhAHAiQAAAEACAEQAAABAAAAQACAGAFAHQACgEACgEQAGgMANgKQADgDAFgDAiFAzQgCgIgCgJAiFAzQAdguARgYQABgCABgCQABgBABgCQAGgJAGgJQANgWANgUAjGB2QABgBAAAAQAFgEAHgDAjGB2QABgBAAgBAjOBeQgPAQgIASQgBACgBACQgUAKACAdQAHgBAFACQADgHAFgFQABgDABgEQADgIAEgJQAHgRAJgRAjGB2QgKAJAHAOQACADAEAFQABgCACgBQABgCACgBQAFgGAFgFQAAAAAAAAQANgPAHgNQABAAAAgBQACgEABgDAjJCqQgCADgDADQgDAEgDAEQgDAFgDAGQgBACAAACQgBABAAACQgJALADALQACAFAEAEQAEAAAFAAQAAAAABAAQABgIAEgIQAGgPAQgZQABgBAAAAQAHgMAJgNQABgEABgEQAAgBABgBQABgDAAgDQACgHACgHQACgIgDgJAjICpQgBABAAAAQgDABgBACQAAABgBACAjCCoQgEAAgCABAjACSQgHAKgBANAiuBWQgDgQAJgHAimCXQgBAGgCAGQACgBAAAAQAAgBABAAQAKgDAGAAAinCiQgEAJgDAJQgEANgCAOQgBABAAABQgBAMAMgGQABgBAAgBQASgdAMgVQAXgogCgIQgHgggIggAjtCsQgGAKACASQAFgBASgE");
	this.shape_48.setTransform(48.8,55.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC97").s().p("AjcDpQgEgEgCgFQgDgLAJgLIABgDIABgEIAGgLIAGgIIgGAIIgGALIgXAFQgCgSAGgKQgFgCgHABQgCgdAUgKIACgEQAIgSAPgQIACAIIAAABQACAGAFAHIAEgIQAGgMANgKIAIgGIgIAGIgBgHQAAgLAHgFQgHAFAAALIABAHQgNAKgGAMIgEAIQgFgHgCgGIAAgBIgCgIQgHgiAhghIANgbQATgvASgiQATgmAlgaQApgeArgNQAugNAwgGQAggEAkgMIATgHQAogKAOAlIACAHQAGAUgGASQgDAKgHAJQghgBggAEQgvAEgvAHQgpAGgnAOIgNAGIgeANIgaAqIgMASIgCADIgCAEIguBGIgEgRIAEARIAPBAQACAIgXAoIgeAyIgBACQgMAGABgMIABgCQACgOAEgNQADgJAEgJIABgBIABAAIACgBIAGgBIAAAAIAAAAIAFgBIAAAAIABAAIABAAIgBAAIgBAAIAAAAIgFABIAAAAIAAAAIgGABIgCABIgBAAIgBABIgCABIADgMIACgIIABgCIABgGIAEgOIABgIIgCgJIABgBIADgHIgDAHIgBABQgHANgNAPIAAAAIgKALIgDADIgDADIgGgIQgCgGgBgEQAAgIAGgFQgGAFAAAIQABAEACAGIAGAIIADgDIADgDIAKgLIAAAAQANgPAHgNIACAJIgBAIIgEAOIgBAGIgBACIgCAIIgQAZIgBABQgQAZgGAPQgEAIgBAIIgBAAIgFAAIgEAAgAjOCwIAFgGIABgBIgBABIgEADIgBADIAAAAgAjcCIIgHARIgCAHQgFAFgDAHQADgHAFgFIACgHIAHgRQAHgRAJgRQgJARgHARgAjICpIAGgBIgGABQABgNAHgKQgHAKgBANIAAAAgAjGB2IABgBIAAgBIgBACIAAAAgAjFB1QAFgEAHgDQgHADgFAEgAgthWIAVgiIgVAigAjICpIAAAAgAiuBWIAAAAg");
	this.shape_49.setTransform(48.8,55.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(0.1,1,1).p("AArDiQgjgCgXgoQgLgKgMgKQgpgegcgZQgggdgQgqQgTgugBguQgBgvAGgxQAEgfgCgmQgBgKgCgLQAAgpAogEQAEAAAEAAQAVAAAPAJQAJAGAHAJQgJAfgFAgQgIAvgFAvQgEApAEAqQABAHABAHQADAPACAQQARASARATQAIAIAHAIQABABABABQABACACABQAVAXAkAnQAgAAAhACQAJAAAhAgQARARAXAZQABAAABABQADANgMgEQgBAAgBgBQgNgFgKgHQgJgGgHgGQAAABAAABQgFgDgGgDQgDgCgEgCQgBAAgBgBQgDgCgDgBQgGgDgGgEQgHgDgKgBQAMAKALARQgBAAAAAAQAEAGAEAHQABACABABQAJAKAMAEQAAgDAAgDAhbAYQgOgOgOgNAB3DNQgBgBAAAAQgBgLACgFABEDgQAHAMAPgEQADgBAGgCQgCgCgBgCABsDJQALAMAJAKQAAABABAAQAUAWANAKQAGAFAIAEIAAAAQgBAFgBAEQgFADgFAAQgMABgJgLQgBgBgBgBQgCgBgBgCQgBATgBAFQgRgDgJgIQgCAEgBAHQgdgEgFgXQgBgBgCgBQgPgNgMgSQAEAAAEAAQABAAAAAAQAGgBAIgDQgDgCgDgDQgLgJgGgPQgQgBgFgLAB1DvQAAABABAAQADADACADQACAEAEAEQAEAEAFAEAB2DwQAAADABACQACAAACABABAC2IAAAAQgDgDgEgCAAUCQQgJAAgIAAABEDgQgBgBgBgBAA/DSQACAHACAFQABABAAABAArDBQgCgEgBgFABuETQgFgEgEgGQgDgCgDgDQgHgFgIgFQgOgLgPgN");
	this.shape_50.setTransform(62.1,61.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC97").s().p("ABJEDIgDgCQgPgNgMgSIAEAAIAEAAIgEAAIgEAAQgjgCgXgoIgXgUQgpgegcgZQgggdgQgqQgTgugBguQgBgvAGgxQAEgfgCgmIgDgVQAAgpAogEIAIAAQAVAAAPAJQAJAGAHAJQgJAfgFAgQgIAvgFAvQgEApAEAqIACAOIAFAfIAiAlIAPAQIACACIADADIA5A+IBBACQAJAAAhAgIAoAqIACABQADANgMgEIgCgBQgNgFgKgHQgJgGgHgGIAAACIgLgGIgHgEIgCgBIgGgDIgMgHQgHgDgKgBIAAAAIgHgFIAHAFIAAAAQAMAKALARIgBAAIAIANIACADIgCgDIgIgNIABAAQgLgRgMgKQAKABAHADIAMAHIAGADIACABIAHAEIAUAWIABABQAUAWANAKQAGAFAIAEIAAAAIgCAJQgFADgFAAQgMABgJgLIgCgCIgDgDIgJgIIgGgIIAGAIIAJAIIgCAYQgRgDgJgIQgFgEgEgGIgGgFIgPgKQgOgLgPgNQAPANAOALIAPAKIAGAFQAEAGAFAEQgCAEgBAHQgdgEgFgXgAB3D1IAEABIgFgGIABAFgAB1DvIABABIgBgBIAAgEIAAgCIAAACIAAAEQgMgEgJgKIADAEIgJADIgBAAIgGABIAAAAIAAAAQgJAAgGgJIAAAAIgBgCQgCgFgCgHQACAHACAFIgBAAIACACIAAAAQAGAJAJAAIAAAAIAAAAIAGgBIABAAIAJgDIgDgEQAJAKAMAEIAAAAgAA0DiIgBAAIABAAQAGgBAIgDIgGgFQgLgJgGgPQAGAPALAJIAGAFQgIADgGABgAB2DMIABABIgBgBIAAgGQAAgHABgDQgBADAAAHIAAAGgAArDBIgDgJIADAJQgQgBgFgLQAFALAQABIAAAAgAAUCQIgRAAIARAAgAhbAYIgcgbIAcAbgABuETIAAAAgACKEGIAAAAgABgDhIAAAAgAArDBIAAAAgABAC2IAAAAgABAC2IAAAAg");
	this.shape_51.setTransform(62.1,61.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},20).to({state:[{t:this.shape_49},{t:this.shape_48}]},20).to({state:[{t:this.shape_51},{t:this.shape_50}]},10).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,1.9,360.2,146.9);


(lib.pro_eat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ForeArm
	this.instance = new lib.BuffyHandSandwhich();
	this.instance.parent = this;
	this.instance.setTransform(103.9,67.1,1,1,45,0,0,38.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:25.8,x:89.3,y:48.9},7).wait(5).to({scaleX:1,scaleY:1,rotation:45,x:103.9,y:67.1},6).wait(7).to({x:123.2,y:65.2},8).to({x:120.5,y:65.5},7).to({x:103.9,y:67.1},6).wait(18));

	// UpperArm
	this.instance_1 = new lib.BuffyArmSandwhich();
	this.instance_1.parent = this;
	this.instance_1.setTransform(113.7,41.2,1,1,-30,0,0,21.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:21.4,scaleX:1,scaleY:1,rotation:25.8,x:113.6,y:41.1},7).wait(5).to({rotation:25.8},0).to({regX:21.5,scaleX:1,scaleY:1,rotation:-30,x:113.7,y:41.2},6).wait(7).to({rotation:-30},0).to({rotation:-68.5},8).to({regY:-8.4,scaleX:1,scaleY:1,rotation:-63,x:113.8},7).to({regY:-8.5,scaleX:1,scaleY:1,rotation:-30,x:113.7},6).wait(18));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgQkcQAEgEAGgBQAIgDAJADQAFABACADQAEgCAFAAQAKgBAKAEQAIAEAGAIQAFAGACAFIABAAQABAAABAAQAJgCAJAEQAIADAEAJQADAJABAJQAEABAEADQAIAFABAKQABAEgBADQADAAAFAEQAFAEgBAIQAAABgBABQAFACAEAEQAHAIgGAJQgBABgBABQAFAEADAGQAFALgKAFIAAAAQABABABABQAGAJgHAIQgEAGgFACQABAEAAAEQgBAGgDAGQAEAFABAGQABAIgEAGQABAAAAABQAEAHABAHQACAJgGAEQADAHgDAIQgDAKgHgBQADAFgCAFQgDALgGgGQAHAMgJAIQgBABgCABQgBgBAAgBQAAgBAAgBQAAABgBABQgBABgBABQgEAFgDAAQAAAFgEABQgDABgDgBABWjgQACgCACgBAA4j7QgBADAAACAh4iPQAAAAAAAAQgIAFgJgBIAAAAQgLgCgCgJAhJhPQABACABABQAGAFAJgFQAGgDADgHQAHgPgKgMQgCgCgDgBQgDgBgCAAQgCAAgCABQgCABgIAEQABABgDAIQgBACAAADQgCAKAFAHQAAABABAAgAhKhvQATAHgGAQQgDAKgJgBAhiA+QAEgBAIgDQACAAACAAAhoA3QgFABgBgCAhxAyQgEADgEgBQgIgBAAgJQgGAIgKgDAh2BCQADABACgBQAJAAAGgEAAfAaQgCgEgBgGQgBgGABgBQAAgBgBAAQgFgCgBgFQgDgJAEgIQADgJAKgGQgCgBgBgCQgBgBAAgDQgCgJAIgFAAhAcQgBAAAAgBQgBgBAAAAQACAAAAACgABjAmQABADgCADQgEAEgGAAQgEABgEgCQgEgBgCgCQgBAEgEABQgKACgIgDQgIgDgBgGQgBAAgBAAAAkAlQgDgEAAgFABjAZQACAHACAAAhvEjQAFgLACgaQAAgMAEgE");
	this.shape.setTransform(105.5,34.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AD0i+QAAAAABAAQACAAACAAQAIACAHAGQACABABACQABABACACQAKAOAJARQAKARgCAUQgBASAAASQgBAOAAALQgEAAgEAAQgSgDgUgBQgBAAgBAAACpkMQABgBABgBQADAAADAAQAGgBAFgDQAEgCADgEQANgQgRgKQgEgDgEADQgLALgOgJQgFgDADgGQAJgRgUgIQACgMgGgEQgPgMgJgUQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUgBQAAgDAAgEAA8lYQAPgPARAIQADACADADAgwlOQgOgGAAgPQAAgKAEgHQgNgSADgSQACgQAPgFQgHgUATgLQAMgGAJABQAAgQAKgMQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgCAIAEQABABABABQAbgLAPALAgnkzQgEgFgDgHQgDgIABgHQABAAAAAAQAEABAFAAAAPlIQAAgBABAAQAOgLAHALQAAABABACQACACACADQACAEAAAGQAAAFgCAHQgCAEgDACQgOAFgIgGQgEgEgCgHIAAAAQAAgCAAgCQAAgFAAgFQABgFAFgEQATARgTARAgFljQAEAQgBASQgBAQgBAUQgBATAGAPQAHARAIANQADAFADAFQAFAHAEAJQAIAOATAAQAGABAGgBQANAAAMgCQASgDANgMQALgLAKgOQADgFADgFQAFgIAGgJAAFlUQARgMAQAIAAcl4QgBANgQAEAApkaQgNgCgDAGQgDAFACAIQACAFAHABQALACALgHABnj2QghAIgCgBQgEgBgCABQgOAGgLgHQgEAGgDAGQADAAADAAIABAAQAdACAlgUgAAkjkQAAABABABQAAAPASgBQATAAAMgMQABgHAQgPAgskJQgEgCgEgDQgFgEAAgFQgCgVAUgHAgTkoQgGgCgFgCQgFgDgEgEAgskJQADABAEABAgNioIgBAAQgLgGAHgOQgTgGANgVQgWgGAPgPQgQgIADgVAh4gqQAAgJAEgHQAKgSATgGQAPgGACgKQACgTALgOQALgPATgDQATgDARADQACAAACAAAAxidQAEAAAHgEQAEgCAAgEQADAJAPgIQgEgGgFgFQgBgCgCgCAAtidQgBAAgBgBQgBAAgBgBQgBgBAAgBQgCgCAAgEQgFAFgEACQgBAAgBAAAAVihQgCgBgBgDAAhiZQAAAAAAAAADdg1QgDAAgDgBQhJgPglgIQgdgHgHgEQgQgHgRgHQgDAAgCgBQAAAAgBAAQgEAAgEACQgDACgDAFQgJAOgHARQgDAKgBAJAAJkxQgCgIACgGAAUBLQg4hOAFgHQADgDACgDQAIgJAKgNQACgDACgDQAAAJACAIQACAOAfAjQAAAAAAAAQAFAAAFABQBTAAAMgDQAWgFAWgEQAJgCAKgCQAUgEATgEQAagIAZgMQACAUAEARQAFASgBATQgCATgGASQgGARgFARQgGATgDASQgDASADALQADgCAEgCQAFAEADAHQAGAQgDAVQgDAUgKARQgGALgHAKQgEAGgEAGQgKAPgJAQQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAAAQgFACgEABQgSAEgSAEQgCAAgBABQgQADgSABQgJABgJAAQgBAAAAAAQgKAAgJgCQgJgBgIgDQgJgCgIgEQgQgIgOgKQgPgLgNgLQgMgJgOgMQgBAAgBgBQgFgEgFgDQAAgBAAgCQAAgOACgPQADgTADgSQADgTAAgUQgBgTgEgSQgCgHgCgIQgDgJgSgvABkBhQARAEASAFQATAFATADQAFABAEgBAAUBLQhAhNgFgFQgJgJgKgHQgQgKgRgGQgJgDgKAAQABADAAACABQC9QgEgJgEgJQgGgRgLgQQgJgPgGgRQgDgIgEgHQgFgIgIgIAgrALQABgEA+BEABQC9QADAHAEAHQAJAPgHATQgGASgNAPQgLAMgOANQgOAMgSAGQgRAGgUgDQgRgDgNgEAg2FZQADAGAEAGAhCEtQAAADABADQABAUAIAPQABABABACQAHAAAAAHQAAADAAACQAAACAAABQABAPAFANQAGAQAEASQADALgCAIQgCAHgGAFQgOALgVgCQgSgBgRAJQgCABgCABQgHADgGADQgIAFgJAFQgQAKgQAFQgRAGgUgEQgUgEgMgKQgGgFgNABQgWADgHgOQgDgEgBgEQgCgNANgGQARgGAUAAQATAAARgGQARgGARgIQASgJAMgOQANgPgDgTQgDgTgCgUQgDgTgDgTQgDgSgEgSQgFgSgCgTQgDgRgFgTQgBgDgCgEQgFgOgDgMQABAEACAFQACAFACAGQABADAAADAEPC+QgOAFgOAEQgSAFgRAGQgRAHgUgBQgSAAgRgHQgSgHgSgFQgMgDgIgFAEngvQANgCAKgOQANgRAMAAQAGAVgVAJQgFADgFAEQAIgCAOAAQAWAAALAMQAHAHgJAHQgYARgbgMQgOgHgNgCQgCABgCABAEngvQAAADAAACAi1CTQgUg7AAgCQAAgGgBgHQgCgSAAgUQAAgMAEgLQACgHADgFQAKgPAPgJQAPgJASgGQAIgDAJAAAj4DVQgCgEgCgEQgCgEgCgEQgVgxgHguIgBgKQgFglAFgjQABgFACgEQAGgKAMgGQANgHASAAQAWABAFAUAlCBPQADgCADgFQADABAEACQACABACAAAl3AxQABACAAABAknHUQgMgDAAgNQgHgLgQgLQAAgDACgCQADgHAKgDQABAAAAAAQABgBAAAAQAMgEANgDQAEAAAEgBQASgDAQgJQARgJANgOQABgBABgBQABgCABgBQACgCAAgDQAEgJgDgOQgDgTgGgSQgFgSgGgTQgFgTgHgSQgBgCgBgCIgBgBIgEgJIgHgOIgBgCAj0DeQgCgGgCgFAknHUQAEAAAFAA");
	this.shape_1.setTransform(92.3,56);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FE").s().p("AhLDzIgCAAIgSgCIgSgEIgQgGQgRgIgOgKIgdgWIgZgVQANAEAQADQAVADASgGQARgGAOgMQAPgNALgMQAMgPAHgSQAGgTgIgPIgIgOQAJAFAMADQASAFARAHQARAHASAAQATABASgHIAigLIAdgKIAHgDQAFAEADAHQAGAQgDAVQgDAUgKARIgOAVIgHAMIgUAfQgIAOgRAHIgTAGIgBAAIgGADIgBAAIgJADIgiAIIgEAAIghAFIgPABIgDAAgAh2h0IgKAAIgBAAQgegkgEgOQgCgJABgIIAAAAQAAgKAEgJQAHgRAJgOQADgFAEgCQAEgCAEAAIABAAIAEABQASAHAPAHQAIAEAdAGQAlAJBHAPIAAABIAHAAIAaACIACAAQATABATADIAHAAIABAFIgBgFQAOgCAKgOQAMgRANAAQAFAVgUAJIgKAHQAIgCAOAAQAWAAAKAMQAHAHgJAHQgYARgbgMQgOgHgNgCIgEACQgYAMgbAIIgmAJIgUADIgqAKQgKADg0AAIghgBg");
	this.shape_2.setTransform(108.3,69.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996631").s().p("AgcADIAAgCIAFAAIAAAAIABAAQAXAAAcgNIACgBIABgBIADgBIACgBQgRAPAAAGQgMAMgTAAIgCAAQgPAAAAgOgAgXABIgFAAIgBAAIgHAAIAHgLQALAHAOgGQADgBACABQADABAhgIIgCABIgDABIgBABIgCABQgcANgXAAIgBAAIAAAAgAAlgQIAAAAg");
	this.shape_3.setTransform(98.9,33);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJAUIgCgDQAJABAEgKQAFgPgTgHIALgFIADgBIAFABQADABACACQAKAMgGAOQgEAHgFADQgFACgEAAQgEAAgDgCgAgjASQATgRgTgQIABgBQAPgLAGALIABADIAEAFQACAEAAAFQAAAFgCAHQgCAEgDACQgHACgFAAQgGAAgEgDg");
	this.shape_4.setTransform(97.4,24.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag8CvIgDgBIgBgCIgBgCIgBABIgCgHQgFAGgEABIgCABQgEAAgCgBIgDgEQgDACgFAAQgHgBAAgJQgHAHgKgCIAAAAQgMgHAHgOQgTgFAOgVQgWgGAOgQQgQgHAEgVIgJgGQgEgDgBgFQgCgWAVgHQgFgFgCgGQgEgIACgGIABAAIACAAIADABIAAAAIAAAAIABAAIACgBIgCABIgBAAIAAAAIAAAAIgDgBIgCAAIgBAAQgOgGAAgQQAAgJADgIQgNgRADgSQADgRAOgEQgGgVATgKQALgHAKABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAJgLAOgEQAJgDAHAFIACABQAbgLAPAMQAEgEAGgCQAIgCAJACQAFACADADQAEgDAFAAQAKAAAJAEQAJAEAGAHIAHAMIAAAAIACgBQAKgBAJADQAIAEAEAJQADAJAAAJQAFABAEACQAIAGABAJIgBAHQAEABAEADQAGAFgCAIIAAACQAFABAEAFQAGAHgFAJIgCACQAFAFADAGQAFALgKAEIgBABIACACQAGAIgGAIQgFAGgFACQACADAAAFQgBAGgDAGQADAFABAFQABAIgDAGIABACQAEAHABAHQABAIgFAFQADAHgDAIQgDAKgHgBQACAEgBAGQgDAMgGgHQAGAMgJAJIgEgBIAAgCIAAACIgCADQgFAEgCAAQgDAAgBgHQABAHADAAQgBAGgEABQABADgCACQgEAFgFAAQgEAAgFgBIgGgDQAAAEgFAAQgJACgJgDQgHgDgCgFIgCAAIAAAAIgDgDQgEgEAAgEQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgCgEgBgGQAAgGABgBIgCgBQgEgCgBgEQgDgLADgIQAEgIAJgHIgDgCIgBgEQgBgKAHgFIADgBIAGAAQAGgBAEgDIAHgGQANgRgQgKQgFgCgDADQgMALgOgJQgEgDADgHQAJgRgUgGQABgMgGgFQgOgLgKgVQgFAEgHADQgLAEgJAAQgRAAgIgQQgLAQgTAAIAAgCIgBgGIABAGIAAACQgBAMgQAFIgBAAQgHAEgJgBIgBAAQgKgBgCgKQACAKAKABIABAAQADAQgBARIgBAkQgBAUAGAPQAHARAIAMIAGAKIAKAQQAHAOATABIANAAIADADIAIALQgPAJgDgKQABAEgFADQgGADgFABIgCAAIgBAAgAB8CbIgCAAIgEgBIAEABIACAAgAiQBEIgGgBIAGABgAiIAfQAEADAGABQgGgBgEgDQgFgCgEgFQAEAFAFACgABwhsIADgDIgDADgABRiBIABgFIgBAFgACBCUIAAAAgACKCNIAEABIgCACIgCgDgAhgAbIAAgBIAAgEIgBgJQACgFAEgFQAUASgTAQQgEgDgCgHgAgwAlIgBgCQgFgHACgJIACgGQACgHgBgBQATAHgFAPQgDAKgJAAIgBAAg");
	this.shape_5.setTransform(102.9,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9A67").s().p("Ai2HAQgUgEgLgKQgGgFgNABQgWADgIgOIgDgJIAAABIABAAIABAAIAFAAIAAAAIAAAAIACAAIgCAAIAAAAIAAAAIgFAAIgBAAIgBAAIAAgBIgBgDQAAgKAMgFQAQgGAVAAQASAAARgGQARgGASgIQARgJAMgOQALgMAAgPIAAgHIgGgnIgFgmIgIgkQgEgSgDgTQgDgRgFgTIgCgHIgCgHIgDgKIgEgJIAJAaIACAHQAFATADARQADATAEASIAIAkIAFAmIAGAnIAAAHQAAAPgLAMQgMAOgRAJQgSAIgRAGQgRAGgSAAQgVAAgQAGQgMAFAAAKIABADQgMgDAAgMQgIgLgQgLIACgFQAEgHAKgDIABgBIAAAAIAagHIAIgBQASgDAQgJQARgJANgOIACgCIACgEIACgEQADgKgCgNQgEgTgFgSIgLglQgFgTgIgSIgCgFIAAgBIgFgKIgDgGIgEgJQgVgwgHguIgCgLQgEgjAEgjIAEgKQAFgKAMgGQANgHATAAQAVABAGAVIAFACQgEAMAAAMQAAAUACARIACANIATA9IgTg9IgCgNQgCgRAAgUQAAgMAEgMIAGgMQAKgPAOgJQAQgJARgGQAJgDAJAAIABAFIgBgFIAAAAIABAAQAHAAAIACIAAAAIACABIABAAQAQAGARAKQAKAGAIAKIBFBSQAIAHAGAJQAEAHADAIQAFARAKAPQAKAQAHARIAHASIgHgSQgHgRgKgQQgKgPgFgRQgDgIgEgHQgGgJgIgHIhFhSQgIgKgKgGQgRgKgQgGIgBAAIgCgBIAAAAQgIgCgHAAIgBAAIAAAAQgBgJAFgHQAKgSASgGQAQgGABgKQACgTALgOQALgPATgDQASgDATADIAEAAIAFAAQAIAAAGgEIABgBIAMgDIADAAQAFgBAGgDQAFgCgBgEQADAJAPgIIgIgLIgDgEIAYgCQATgDAMgMQAMgLAJgOIAHgKIAKgRIgKARIgHAKQgJAOgMALQgMAMgTADIgYACIgNAAQgTAAgHgOIgKgRIgGgJQgIgNgHgRQgGgPABgTIABgkQABgTgDgPQAJABAHgFIABAAQAPgEACgNQATABALgQQAIAPARAAQAJAAALgDQAIgDAFgEQAKAUAOAMQAGAEgBAMQAUAIgJARQgDAGAEADQAOAJAMgLQADgDAFADQAQAKgNAQIgHAGQgEADgGABIgGAAIgDABQgHAGABAJIABAEIADADQgJAGgEAIQgDAJADAKQABAFAEACIACAAQgBABAAAHQABAFACAFIABABIABABQAAAFAEADIADADIAAAAIACAAQACAGAHADQAJADAJgCQAFgBAAgEIAGADQAFACAEgBQAFAAAEgEQACgDgBgDQAEgBABgGQACABAFgFIACgDIAAAAIACADIACgCQAJACAGAGIAEADIACADQALAOAJARQAJARgBAUIgCAkIgBAZIgHAAQgTgDgTgBIgCAAIgagCIAAAAQh0gbAAACIAAAAQgegGgHgEQgPgHgSgHIgEgBIgBAAQgFAAgDACQgEACgDAFQgJAOgHARQgEAJAAAKIAAAAIgFAGIgRAWIgEAGQgGAHA4BOQAGgLABgaQABgLADgEIABAAIAKAAQBTABAMgDIArgKIAUgDIAmgJQAbgIAYgMQACAUAFASQAEASgBATQgBASgGASIgMAiQgFATgDASQgDARADALIgdAKIgiALQgSAHgTgBQgTAAgRgHQgRgHgSgFQgMgDgJgFIAIAOQAIAPgGATQgHASgMAPQgLAMgPANQgOAMgRAGQgSAGgVgDQgQgDgMgEIgCgBIgKgHIAAgBIAAgCIAAgFQAAgMABgMIAGglQADgQAAgSIAAgFQAAgTgFgSIgEgPQgCgJgTgvQATAvACAJIAEAPQAFASAAATIAAAFQAAASgDAQIgGAlQgBAMAAAMIAAAFIAAACIAAABIAAAGQACAUAIAPIABADIAIAMIAAADQABAPAFANIAKAiQABAKgBAIQgBAIgHAFQgNALgVgCQgTgBgRAJIgEACIgMAGIgRAKQgQAKgRAFQgKADgLAAQgHAAgJgBgADRA5IABAAIACAAIgCAAIgBAAIAAAAIgBAAIgCAAIgDAAQgUgDgTgFIgigJIAiAJQATAFAUADIADAAIACAAIABAAIAAAAgAAxASIgDgDQg3g9gEAAIAAAAIAAAAIAAAAIAAAAQAEAAA3A9IADADIAAAAgABBkdIABACQABAPARgBQAUAAAMgMQAAgHARgPQgiAIgCgBQgDgBgDABQgOAGgLgHIgHAMIADAAIADAAgABDk7QAIgBAIgFIAAAAIABAAIAAAAIAAAAIgBAAIAAAAQgIAFgIABIAAAAIAAAAIgFgBQgHgBgBgFIgBgGQAAgEABgDIAAAAQADgFAIAAIAAAAIAAAAIAFABIAAAAIAAAAIgFgBIAAAAIAAAAQgIAAgDAFIAAAAQgBADAAAEIABAGQABAFAHABIAFABIAAAAIAAAAgABhmFIgLAFQABABgCAHIgCAGQgCAJAFAHIABACIADACQAFAGAKgFQAGgDADgHQAGgPgKgMQgCgCgDgBIgFgCIgDACgAAumCIgCABQgEAEgCAFQgCAGADAIIAAAAQACAHAEADQAHAHAOgFQAEgCABgEQADgHAAgGQAAgFgDgFIgDgEIgCgDQgDgGgFAAQgFAAgHAGgAAimNIABgBIAAAAQAJgGAKAAIAAAAIAAAAQAGAAAGADIABAAIAAAAIAAAAIgBAAQgGgDgGAAIAAAAIAAAAQgKAAgJAGIAAAAIgBABgABZmRIAAgBIABAAIABgBIABgBQAIgHAJAAIAAAAIAAAAQAFAAAFACIACABIAAAAIAGAFIgGgFIAAAAIgCgBQgFgCgFAAIAAAAIAAAAQgJAAgIAHIgBABIgBABIgBAAIAAABgAjiCOIgBgCIABACIgBgCIAAAAIABgBIAEAJIgEgGgAiYBaIAEAJIADAKIACAHIgJgagAk5BWQgHgOAKgEIAAAVIgDgDgAlEA6QgEgDABgEIABgCQAEgKANAAIgBAZQgIgCgGgEgAkeAOIAHAEIAEABIgSADQAEgCADgGgAhahjIAAAAgABFjaIABgBIABADIgCgCg");
	this.shape_6.setTransform(89.3,61.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AD5i9QAIACAHAFQACACABABQABACACABQAKAOAJASQAKARgCAUQgBASAAASQgBANAAALQgEABgEgBQgSgDgUgBQgBAAgBAAAgwlNQgOgHAAgPQAAgKAEgHQgNgRADgSQACgRAPgEQgHgVATgKQAMgHAJABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgDAIAFQABAAABABQAbgLAPAMQAEgEAGgCQAJgCAJACQAFACACADQAEgDAFAAQAKAAAKAEQAIAEAGAHQAFAHACAFIABAAQABgBABAAQAJgBAJADQAIAEAEAJQADAIABAKQAEABAEACQAIAGABAJQAAAEAAADQADABAFADQAFAFgBAIQgBABAAABQAFABAEAFQAHAHgGAJQgBABgBABQAFAFADAGQAFALgKAEIAAABQABABABABQAGAIgHAJQgEAFgFADQABADAAAFQgBAGgDAGQAEAEABAGQABAIgEAGQABABAAABQAEAHABAHQACAIgGAFQADAGgDAJQgDAJgHAAQADAEgCAGQgDAMgGgHQAHAMgJAJQgBABgCABQgBgCAAgBQACAAACABADam4QACgCACgBAC8nSQgBACAAADAA8lYQAPgPARAJQADABADADACkj5QgBgCAAgCQgCgKAIgFQABgBABAAQADAAADAAQAGgBAFgDQAEgDADgDQANgRgRgKQgEgCgEADQgLALgOgJQgFgDADgHQAJgRgUgHQACgMgGgFQgPgLgJgVQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUAAQAAgEAAgEAgnkzQgEgFgDgGQgDgJABgGQABAAAAAAQAEABAFgBAAcl3QgBAMgQAFQAAAAAAAAQgIAEgIgBIAAAAQgLgBgCgKAAPlIQAAAAABgBQAOgKAHAKQAAACABACQACACACACQACAEAAAGQAAAGgCAHQgCAEgDABQgOAGgIgHQgEgEgCgGIAAgBQAAgCAAgCQAAgEAAgFQABgGAFgEgAgFljQAEAQgBASQgBARgBATQgBAUAGAPQAHARAIAMQADAFADAFQAFAIAEAIQAIAOATABQAGAAAGAAQACABABACQAFAFAEAGQgPAJgDgKQAAAEgEADQgHADgEABQgCAAgCAAQgBgBgBAAQgBgBgBgBQgBAAAAgBQgCgDAAgEQgFAFgEACQgBABgBAAQgFAAgBgBQgCgCgBgCQgEACgEAAQgIgBAAgJQgFAHgKgCIgBAAQgLgHAHgOQgTgGANgUQgWgGAPgQQgQgHADgVQgEgCgEgEQgFgDAAgFQgCgWAUgHQAEAEAFADQAFADAGABAAFlUQARgLAQAIAA5lGQAIgFACgBQACAAACgBQACAAADABQADABACADQAKALgHAPQgDAIgGADQgJAFgGgGQgBgBgBgBQgBgBAAgBQgFgHACgJQAAgDABgDQADgHgBgBgAA6kmQAJAAADgKQAGgQgTgGAApkaQgNgBgDAGQgDAEACAJQACAFAHABQALACALgIAAljbQAAAQASgBQATgBAMgLQAAgFAIgQQACgDACgEQACgFADgFQgCAAgBABQgeAHgCgBQgEgBgCABQgOAGgLgHQgEAGgDAGQACAAADAAQAAAAABAAIABAAIAAAAABjj8QgBADgDAFQgCAFgIAIQgXAMgYgCIgBAAIAAAAAAljsIAAAKIAAADIAAACAgskIQADABAEAAAh4gpQAAgJAEgIQAKgRATgHQAPgFACgKQACgUALgOQALgPATgDQATgDARADQACABACAAQADAAACAAQAJAAAGgFQAAAAAAAAQAEgBAIgCADdg0QgDgBgDAAQhJgPglgJQgdgHgHgDQgQgIgRgGQgDgBgCAAQAAAAgBAAQgEgBgEADQgDACgDAFQgJAOgHARQgDAJgBAJAD0i+QgBABgBACQgEAEgDAAQAAAFgEACQgDAAgDgBAD1i+QgBAAAAAAQAAgBABgBQAAABAAABgABGi0QANgBAMgBQASgDANgNQALgLAKgOQADgFADgEQAFgJAGgIACli6QgBgBAAgBQgBAAAAgBQgDgEAAgGQgBgGABgBQgBAAAAgBQgFgCgBgEQgDgLAEgIQADgIAKgHQgDgBAAgBADniwQABADgCACQgEAEgGABQgEAAgEgBQgEgBgCgCQgBADgEABQgKACgIgDQgIgDgBgFQgBAAgBAAACoiyQgDgEAAgEACji9QACABAAACADri3QgCAAgCgHAAJkxQgCgHACgGAAPkmQATgQgTgSAAfAWQAAABAAAAQAFAAAFAAQBTABAMgDQAWgFAWgFQAJgCAKgCQAUgEATgEQAagHAZgMQACAUAEARQAFARgBAUQgCATgGARQgGARgFASQgGASgDASQgDASADALQADgBAEgCQAFADADAIQAGAPgDAWQgDATgKASQgGAKgHALQgEAGgEAFQgKAQgJAPQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAABQgFABgEABQgSAFgSADQgCABgBAAQgQADgSACQgJABgJAAQgBAAAAAAQgKgBgJgBQgJgCgIgCQgJgDgIgEQgQgHgOgLQgPgLgNgKQgMgKgOgLQgBgBgBAAQgFgEgFgDQAAgCAAgBQAAgPACgOQADgTADgSQADgTAAgUQgBgTgEgSQgCgIgCgIQgDgJgSguABkBiQARADASAFQATAGATACQAFABAEAAAAUBMQg4hOAFgHQADgDACgDQAIgKAKgMQACgDACgDQAAAIACAIQACAOAfAjAAUBMQAFgMACgaQAAgMAEgEAAUBMQhAhNgFgGQgJgJgKgGQgQgKgRgGQgJgDgKAAQABACAAADAAUBMQAIAHAFAJQAEAHADAHQAGASAJAPQALAQAGAQQAEAKAEAIQADAIAEAGQAJAPgHAUQgGASgNAOQgLANgOAMQgOAMgSAGQgRAHgUgEQgRgCgNgEAgrALQABgDA+BEAg2FZQADAGAEAHAhCEuQAAADABADQABATAIAPQABACABABQAHABAAAHQAAACAAADQAAABAAACQABAPAFANQAGAQAEARQADALgCAIQgCAIgGAFQgOAKgVgBQgSgBgRAIQgCABgCABQgHADgGAEQgIAFgJAFQgQAJgQAGQgRAFgUgEQgUgEgMgKQgGgFgNACQgWACgHgNQgDgFgBgEQgCgNANgFQARgHAUAAQATAAARgFQARgGARgJQASgIAMgOQANgPgDgTQgDgUgCgTQgDgTgDgTQgDgSgEgTQgFgSgCgSQgDgSgFgSQgBgEgCgEQgFgOgDgMQgUg7AAgCQAAgFgBgHQgCgTAAgTQAAgNAEgLQACgGADgGQAKgPAPgJQAPgJASgGQAIgDAJABABQC9QAIAGAMADQASAEASAHQARAHASABQAUAAARgGQARgGASgGQAOgEAOgFAEngvQANgBAKgOQANgSAMABQAGAUgVAKQgFADgFAEQAIgCAOAAQAWAAALALQAHAIgJAGQgYARgbgMQgOgGgNgCQgCABgCABAEngvQAAADAAADAj4DVQgCgEgCgDQgCgFgCgEQgVgwgHguIgBgLQgFgkAFgkQABgFACgEQAGgKAMgFQANgIASABQAWAAAFAVAlCBQQADgDADgFQADACAEABQACABACABAitCtQAAgDgBgDQgCgFgCgFQgCgFgBgFAl3AyQABABAAACAknHUQgMgDAAgNQgHgLgQgLQAAgCACgCQADgHAKgEQABAAAAAAQABAAAAAAQAMgEANgDQAEgBAEgBQASgDAQgIQARgJANgOQABgBABgCQABgBABgCQACgCAAgCQAEgKgDgOQgDgSgGgTQgFgSgGgSQgFgTgHgSQgBgDgBgCIgBgBIgEgJIgHgNIgBgCAj0DeQgCgFgCgFAknHUQAEABAFAA");
	this.shape_7.setTransform(92.3,55.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996631").s().p("AgcAKIAAgCIAAAAIAAAAQAYACAXgLQAIgIACgFIAEgIQgSAKgQADIgDABQgIADgHgBIgJAAIgBAAIAAAAIgCAAIgFAAIAHgMQALAHAOgGQADgBACABQADABAegHIADgBIgFAKIgEAHQgIAPAAAFQgMALgTABIgCAAQgPAAAAgPg");
	this.shape_8.setTransform(98.9,32.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALAwIgEgBQARgEASgJIgEAIIgbAGIAAAAgAADgFIgCgCQAJAAADgKQAGgPgTgHIAKgGIAEgBIAEABQAEACACACQAJAMgGAOQgDAIgGADQgEACgEAAQgEAAgDgDgAgpgHQATgQgTgSIABgBQAOgKAGAKIACAEIAEAEQACAEAAAGQAAAGgCAHQgCAEgEABQgGADgFAAQgGAAgEgEg");
	this.shape_9.setTransform(98,27.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag8CvIgDgBIgBgCIgBgCIgBABIgCgHQgFAGgEABIgCABQgEAAgCgBIgDgEQgDACgFAAQgHgBAAgJQgHAHgKgCIAAAAQgMgHAHgOQgTgFAOgVQgWgGAOgQQgQgHAEgVIAGABIgGgBIgJgGQgEgDgBgFQgCgWAVgHQgFgFgCgGQgEgIACgGQgOgGAAgQQAAgJADgIQgNgRADgSQADgRAOgEQgGgVATgKQALgHAKABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAJgLAOgEQAJgDAHAFIACABQAbgLAPAMQAEgEAGgCQAIgCAJACQAFACADADQAEgDAFAAQAKAAAJAEQAJAEAGAHIAHAMIAAAAIACgBQAKgBAJADQAIAEAEAJQADAJAAAJQAFABAEACQAIAGABAJIgBAHQAEABAEADQAGAFgCAIIAAACQAFABAEAFQAGAHgFAJIgCACQAFAFADAGQAFALgKAEIgBABIACACQAGAIgGAIQgFAGgFACQACADAAAFQgBAGgDAGQADAFABAFQABAIgDAGIABACQAEAHABAHQABAIgFAFQADAHgDAIQgDAKgHgBQACAEgBAGQgDAMgGgHQAGAMgJAJIgEgBIAEABIgCACIgCgDIAAgCIAAACIgCADQgFAEgCAAQgDAAgBgHQABAHADAAQgBAGgEABIgCAAIAAAAIgEgBIAEABIAAAAIACAAQABADgCACQgEAFgFAAQgEAAgFgBIgGgDQAAAEgFAAQgJACgJgDQgHgDgCgFIgCAAIAAAAIgDgDQgEgEAAgEQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgCgEgBgGQAAgGABgBIgCgBQgEgCgBgEQgDgLADgIQAEgIAJgHIgDgCIgBgEQgBgKAHgFIADgBIAGAAQAGgBAEgDIAHgGQANgRgQgKQgFgCgDADQgMALgOgJQgEgDADgHQAJgRgUgGQABgMgGgFQgOgLgKgVQgFAEgHADQgLAEgJAAQgRAAgIgQQgLAQgTAAIAAgCIgBgGIABAGIAAACQgBAMgQAFIgBAAQgHAEgJgBIgBAAQgKgBgCgKQACAKAKABIABAAQADAQgBARIgBAkQgBAUAGAPQAHARAIAMIAGAKIAKAQQAHAOATABIANAAIADADIAIALQgPAJgDgKQABAEgFADQgGADgFABIgCAAIgBAAgAiIAfQAEADAGABQgGgBgEgDQgFgCgEgFQAEAFAFACgAiUAAIABAAIACgBIgCABIgBAAIAAAAIAAAAIgCAAIgDgBIgBAAIABAAIADABIACAAIAAAAIAAAAgABwhsIADgDIgDADgABRiBIABgFIgBAFgACBCUIAAAAgAhgAbIAAgBIAAgEIgBgJQACgFAEgFQAUASgTAQQgEgDgCgHgAgwAlIgBgCQgFgHACgJIACgGQACgHgBgBQATAHgFAPQgDAKgJAAIgBAAg");
	this.shape_10.setTransform(102.9,22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC9A67").s().p("Ai2HAQgUgEgLgKQgGgFgNABQgWADgIgOIgDgJIAAABIABAAIABAAIAFAAIAAAAIAAAAIACAAIgCAAIAAAAIAAAAIgFAAIgBAAIgBAAIAAgBIgBgDQAAgKAMgFQAQgGAVAAQASAAARgGQARgGASgIQARgJAMgOQALgMAAgPIAAgHIgGgnIgFgmIgIgkQgEgSgDgTQgDgRgFgTIgCgHIgCgHIgDgKIgEgJIAJAaIACAHQAFATADARQADATAEASIAIAkIAFAmIAGAnIAAAHQAAAPgLAMQgMAOgRAJQgSAIgRAGQgRAGgSAAQgVAAgQAGQgMAFAAAKIABADQgMgDAAgMQgIgLgQgLIACgFQAEgHAKgDIABgBIAAAAIAagHIAIgBQASgDAQgJQARgJANgOIACgCIACgEIACgEQADgKgCgNQgEgTgFgSIgLglQgFgTgIgSIgCgFIAAgBIgFgKIgDgGIgEgJQgVgwgHguIgCgLQgEgjAEgjIAEgKQAFgKAMgGQANgHATAAQAVABAGAVIAFACQgEAMAAAMQAAAUACARIACANIATA9IgTg9IgCgNQgCgRAAgUQAAgMAEgMIAGgMQAKgPAOgJQAQgJARgGQAJgDAJAAIABAFIgBgFIAAAAIABAAQAHAAAIACIAAAAIACABIABAAQAQAGARAKQAKAGAIAKIBFBSQAIAHAGAJQAEAHADAIQAFARAKAPQAKAQAHARIAHASIgHgSQgHgRgKgQQgKgPgFgRQgDgIgEgHQgGgJgIgHIhFhSQgIgKgKgGQgRgKgQgGIgBAAIgCgBIAAAAQgIgCgHAAIgBAAIAAAAQgBgJAFgHQAKgSASgGQAQgGABgKQACgTALgOQALgPATgDQASgDATADIAEAAIAFAAQAIAAAGgEIABgBIAMgDIADAAQAFgBAGgDQAFgCgBgEQADAJAPgIIgIgLIgDgEIAYgCQATgDAMgMQAMgLAJgOIAHgKIAKgRIADADQgJAGgEAIQgDAJADAKQABAFAEACIACAAQgBABAAAHQABAFACAFIABABIABABQAAAFAEADIADADIAAAAIACAAQACAGAHADQAJADAJgCQAFgBAAgEIAGADQAFACAEgBQAFAAAEgEQACgDgBgDQAEgBABgGQACABAFgFIACgDIAAAAIACADIACgCQAJACAGAGIAEADIACADQALAOAJARQAJARgBAUIgCAkIgBAZIgHAAQgTgDgTgBIgCAAIgagCIAAAAQh0gbAAACIAAAAQgegGgHgEQgPgHgSgHIgEgBIgBAAQgFAAgDACQgEACgDAFQgJAOgHARQgEAJAAAKIAAAAIgFAGIgRAWIgEAGQgGAHA4BOQAGgLABgaQABgLADgEIABAAIAKAAQBTABAMgDIArgKIAUgDIAmgJQAbgIAYgMQACAUAFASQAEASgBATQgBASgGASIgMAiQgFATgDASQgDARADALIgdAKIgiALQgSAHgTgBQgTAAgRgHQgRgHgSgFQgMgDgJgFIAIAOQAIAPgGATQgHASgMAPQgLAMgPANQgOAMgRAGQgSAGgVgDQgQgDgMgEIgCgBIgKgHIAAgBIAAgCIAAgFQAAgMABgMIAGglQADgQAAgSIAAgFQAAgTgFgSIgEgPQgCgJgTgvQATAvACAJIAEAPQAFASAAATIAAAFQAAASgDAQIgGAlQgBAMAAAMIAAAFIAAACIAAABIAAAGQACAUAIAPIABADIAIAMIAAADQABAPAFANIAKAiQABAKgBAIQgBAIgHAFQgNALgVgCQgTgBgRAJIgEACIgMAGIgRAKQgQAKgRAFQgKADgLAAQgHAAgJgBgADRA5IABAAIACAAIgCAAIgBAAIAAAAIgBAAIgCAAIgDAAQgUgDgTgFIgigJIAiAJQATAFAUADIADAAIACAAIABAAIAAAAgAAxASIgDgDQg3g9gEAAIAAAAIAAAAIAAAAIAAAAQAEAAA3A9IADADIAAAAgAjiCOIgBgCIABACIgBgCIAAAAIABgBIAEAJIgEgGgAiYBaIAEAJIADAKIACAHIgJgagAiYBaIAAAAgAk5BWQgHgOAKgEIAAAVIgDgDgAlEA6QgEgDABgEIABgCQAEgKANAAIgBAZQgIgCgGgEgAkeAOIAHAEIAEABIgSADQAEgCADgGgAhahjIAAAAgABFjaIABgBIABADIgCgCgABXjuQgTAAgHgOIgKgRIgGgJQgIgNgHgRQgGgPABgTIABgkQABgTgDgPQAJABAHgFIABAAQAPgEACgNQATABALgQQAIAPARAAQAJAAALgDQAIgDAFgEQAKAUAOAMQAGAEgBAMQAUAIgJARQgDAGAEADQAOAJAMgLQADgDAFADQAQAKgNAQIgHAGQgEADgGABIgGAAIgDABQgHAGABAJIABAEIgKARIgHAKQgJAOgMALQgMAMgTADIgYACIgHAAIgGAAgABCkUQABAPARgBQAUAAAMgMQAAgFAIgPIAEgIIAFgKIgDABQgfAHgCAAQgDgBgDABQgOAFgLgHIgHAMIAFAAIABAAIABAAIABALIgBAAIABACIAAADIAAAAIAAgDIAAADIgBAAgABDk7QAIgBAIgFIAAAAIABAAIAAAAIAAAAIgBAAIAAAAQgIAFgIABIAAAAIAAAAIgFgBQgHgBgBgFIgBgGQAAgEABgDIAAAAQADgFAIAAIAAAAIAAAAIAFABIAAAAIAAAAIgFgBIAAAAIAAAAQgIAAgDAFIAAAAQgBADAAAEIABAGQABAFAHABIAFABIAAAAIAAAAgABhmFIgLAFQABABgCAHIgCAGQgCAJAFAHIABACIADACQAFAGAKgFQAGgDADgHQAGgPgKgMQgCgCgDgBIgFgCIgDACgAAumCIgCABQgEAEgCAFQgCAGADAIIAAAAQACAHAEADQAHAHAOgFQAEgCABgEQADgHAAgGQAAgFgDgFIgDgEIgCgDQgDgGgFAAQgFAAgHAGgAAimNIABgBIAAAAQAJgGAKAAIAAAAIAAAAQAGAAAGADIABAAIAAAAIAAAAIgBAAQgGgDgGAAIAAAAIAAAAQgKAAgJAGIAAAAIgBABgABZmRIAAgBIABAAIABgBIABgBQAIgHAJAAIAAAAIAAAAQAFAAAFACIACABIAAAAIAGAFIgGgFIAAAAIgCgBQgFgCgFAAIAAAAIAAAAQgJAAgIAHIgBABIgBABIgBAAIAAABg");
	this.shape_11.setTransform(89.3,61.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("AD5i9QAIACAHAFQACACABABQABACACABQAKAOAJASQAKARgCAUQgBASAAASQgBANAAALQgEABgEgBQgSgDgUgBQgBAAgBAAAgwlNQgOgHAAgPQAAgKAEgHQgNgRADgSQACgRAPgEQgHgVATgKQAMgHAJABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgDAIAFQABAAABABQAbgLAPAMQAEgEAGgCQAJgCAJACQAFACACADQAEgDAFAAQAKAAAKAEQAIAEAGAHQAFAHACAFIABAAQABgBABAAQAJgBAJADQAIAEAEAJQADAIABAKQAEABAEACQAIAGABAJQAAAEAAADQADABAFADQAFAFgBAIQgBABAAABQAFABAEAFQAHAHgGAJQgBABgBABQAFAFADAGQAFALgKAEIAAABQABABABABQAGAIgHAJQgEAFgFADQABADAAAFQgBAGgDAGQAEAEABAGQABAIgEAGQABABAAABQAEAHABAHQACAIgGAFQADAGgDAJQgDAJgHAAQADAEgCAGQgDAMgGgHQAHAMgJAJADam4QACgCACgBAC8nSQgBACAAADACkj5QgBgCAAgCQgCgKAIgFQABgBABAAQADAAADAAQAGgBAFgDQAEgDADgDQANgRgRgKQgEgCgEADQgLALgOgJQgFgDADgHQAJgRgUgHQACgMgGgFQgPgLgJgVQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUAAQAAgEAAgEAA8lYQAPgPARAJQADABADADAgnkzQgEgFgDgGQgDgJABgGQABAAAAAAQAEABAFgBAAcl3QgBAMgQAFQAAAAAAAAQgIAEgIgBIAAAAQgLgBgCgKAAPlIQAAAAABgBQAOgKAHAKQAAACABACQACACACACQACAEAAAGQAAAGgCAHQgCAEgDABQgOAGgIgHQgEgEgCgGIAAgBQAAgCAAgCQAAgEAAgFQABgGAFgEgAgFljQAEAQgBASQgBARgBATQgBAUAGAPQAHARAIAMQADAFADAFQAFAIAEAIQAIAOATABQAGAAAGAAQACABABACQAFAFAEAGQgPAJgDgKQAAAEgEADQgHADgEABQgCAAgCAAQgBgBgBAAQgBgBgBgBQgBAAAAgBQgCgDAAgEQgFAFgEACQgBABgBAAQgFAAgBgBQgCgCgBgCQgEACgEAAQgIgBAAgJQgFAHgKgCIgBAAQgLgHAHgOQgTgGANgUQgWgGAPgQQgQgHADgVQgEgCgEgEQgFgDAAgFQgCgWAUgHQAEAEAFADQAFADAGABAAFlUQARgLAQAIAA6kmQgBgBAAgBQgFgHACgJQAAgDABgDQADgHgBgBQAIgFACgBQACAAACgBQACAAADABQADABACADQAKALgHAPQgDAIgGADQgJAFgGgGQgBgBgBgBgAAljxIgBAAQgBAAAAAAQgDAAgCAAQACgEADgFQABgBABgCQAAABABAAQALAGANgFQACgBAEABQABAAAVgEQABgBACAAQAAAAABgBIAAABQgBACAAADQgBAFgBAFQgBAGAAAFQgBACAAACQAAAAAAAAQgDAQAAADQgMALgTABQgSABAAgQAA5lGQATAGgGAQQgDAKgJAAAApkaQgNgBgDAGQgDAEACAJQACAFAHABQALACALgIAAljUQAAgCAAgCIAAAAIAAgKIAAgPAAljUIAAAAIABAAQAYACAXgMABdkAQgCABgBABQgPAIgLADQgBAAgCABQgIACgHAAQgEAAgFgBAgskIQADABAEAAAh4gpQAAgJAEgIQAKgRATgHQAPgFACgKQACgUALgOQALgPATgDQATgDARADQACABACAAQADAAACAAQAJAAAGgFQAAAAAAAAQAEgBAIgCADdg0QgDgBgDAAQhJgPglgJQgdgHgHgDQgQgIgRgGQgDgBgCAAQAAAAgBAAQgEgBgEADQgDACgDAFQgJAOgHARQgDAJgBAJAD1i+QACAAACABAD0i+QAAgBABgBQAAABAAABQgBAAAAAAQgBABgBACQgEAEgDAAQAAAFgEACQgDAAgDgBAD1i+QAAABABACQACgBABgBABGi0QANgBAMgBQASgDANgNQALgLAKgOQADgFADgEQAFgJAGgIACli6QgBgBAAgBQgBAAAAgBQgDgEAAgGQgBgGABgBQgBAAAAgBQgFgCgBgEQgDgLAEgIQADgIAKgHQgDgBAAgBADniwQABADgCACQgEAEgGABQgEAAgEgBQgEgBgCgCQgBADgEABQgKACgIgDQgIgDgBgFQgBAAgBAAACoiyQgDgEAAgEACji9QACABAAACADri3QgCAAgCgHAAJkxQgCgHACgGAAPkmQATgQgTgSAAfAWQAAABAAAAQAFAAAFAAQBTABAMgDQAWgFAWgFQAJgCAKgCQAUgEATgEQAagHAZgMQACAUAEARQAFARgBAUQgCATgGARQgGARgFASQgGASgDASQgDASADALQADgBAEgCQAFADADAIQAGAPgDAWQgDATgKASQgGAKgHALQgEAGgEAFQgKAQgJAPQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAABQgFABgEABQgSAFgSADQgCABgBAAQgQADgSACQgJABgJAAQgBAAAAAAQgKgBgJgBQgJgCgIgCQgJgDgIgEQgQgHgOgLQgPgLgNgKQgMgKgOgLQgBgBgBAAQgFgEgFgDQAAgCAAgBQAAgPACgOQADgTADgSQADgTAAgUQgBgTgEgSQgCgIgCgIQgDgJgSguABkBiQARADASAFQATAGATACQAFABAEAAAAUBMQg4hOAFgHQADgDACgDQAIgKAKgMQACgDACgDQAAAIACAIQACAOAfAjAAUBMQAFgMACgaQAAgMAEgEAAUBMQhAhNgFgGQgJgJgKgGQgQgKgRgGQgJgDgKAAQABACAAADAAUBMQAIAHAFAJQAEAHADAHQAGASAJAPQALAQAGAQQAEAKAEAIQADAIAEAGQAJAPgHAUQgGASgNAOQgLANgOAMQgOAMgSAGQgRAHgUgEQgRgCgNgEAgrALQABgDA+BEAg2FZQADAGAEAHAhCEuQAAADABADQABATAIAPQABACABABQAHABAAAHQAAACAAADQAAABAAACQABAPAFANQAGAQAEARQADALgCAIQgCAIgGAFQgOAKgVgBQgSgBgRAIQgCABgCABQgHADgGAEQgIAFgJAFQgQAJgQAGQgRAFgUgEQgUgEgMgKQgGgFgNACQgWACgHgNQgDgFgBgEQgCgNANgFQARgHAUAAQATAAARgFQARgGARgJQASgIAMgOQANgPgDgTQgDgUgCgTQgDgTgDgTQgDgSgEgTQgFgSgCgSQgDgSgFgSQgBgEgCgEQgFgOgDgMQgUg7AAgCQAAgFgBgHQgCgTAAgTQAAgNAEgLQACgGADgGQAKgPAPgJQAPgJASgGQAIgDAJABABQC9QAIAGAMADQASAEASAHQARAHASABQAUAAARgGQARgGASgGQAOgEAOgFAEngvQANgBAKgOQANgSAMABQAGAUgVAKQgFADgFAEQAIgCAOAAQAWAAALALQAHAIgJAGQgYARgbgMQgOgGgNgCQgCABgCABAEngvQAAADAAADAj4DVQgCgEgCgDQgCgFgCgEQgVgwgHguIgBgLQgFgkAFgkQABgFACgEQAGgKAMgFQANgIASABQAWAAAFAVAlCBQQADgDADgFQADACAEABQACABACABAitCtQAAgDgBgDQgCgFgCgFQgCgFgBgFAl3AyQABABAAACAknHUQgMgDAAgNQgHgLgQgLQAAgCACgCQADgHAKgEQABAAAAAAQABAAAAAAQAMgEANgDQAEgBAEgBQASgDAQgIQARgJANgOQABgBABgCQABgBABgCQACgCAAgCQAEgKgDgOQgDgSgGgTQgFgSgGgSQgFgTgHgSQgBgDgBgCIgBgBIgEgJIgHgNIgBgCAj0DeQgCgFgCgFAknHUQAEABAFAA");
	this.shape_12.setTransform(92.3,55.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996631").s().p("AgYAQIAAgCIAAAAIABAAQAXACAXgMIAEgEIgDATQgMALgSABIgCAAQgQAAAAgPgAgPgOIgJAAIgBAAIgBAAIgFAAIAFgJIACgDIACABQAKAGAMgFQACgBAEABQACAAAUgFIAAABQgPAJgLADIgCAAQgGADgFAAIgEgBgAAfgdIABgBIAAAAIAAABg");
	this.shape_13.setTransform(98.5,33.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPA9IgBgEIAAAAIAAgKIAAgPIAJAAQAHABAGgDIAEAAQAKgDAPgJIADgBIgDADIAAAAIADgDIABAAIABgBIgBAFIgCALQgCAEgDADIADAEIgBADIAAABIAAAAIgDAEQgVAKgUAAIgFAAgAAiAvIAAgBIABAAIgBABIAAAAgAAnAVIAAAEIgCAHIACgLgAAjARIADAAIgDABgAAjARIADAAIgDAAgAAmARgAAmARIAAAAgAAmARIAAAAgAAGgSIgDgCQAJAAAEgKQAFgQgTgGIALgGIADgBIAFABQADABACADQAKALgGAPQgDAIgGACQgFADgDAAQgEAAgDgDgAgmgUQATgQgUgSIACgBQAOgKAGAKIACAEIADAEQADAEAAAGQAAAFgDAIQgBAEgEABQgGADgFAAQgGAAgEgEg");
	this.shape_14.setTransform(97.7,28.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC9A67").s().p("Ai2HAQgUgEgLgKQgGgFgNABQgWADgIgOIgDgJIAAABIABAAIABAAIAFAAIAAAAIAAAAIACAAIgCAAIAAAAIAAAAIgFAAIgBAAIgBAAIAAgBIgBgDQAAgKAMgFQAQgGAVAAQASAAARgGQARgGASgIQARgJAMgOQALgMAAgPIAAgHIgGgnIgFgmIgIgkQgEgSgDgTQgDgRgFgTIgCgHIgCgHIgDgKIgEgJIAJAaIACAHQAFATADARQADATAEASIAIAkIAFAmIAGAnIAAAHQAAAPgLAMQgMAOgRAJQgSAIgRAGQgRAGgSAAQgVAAgQAGQgMAFAAAKIABADQgMgDAAgMQgIgLgQgLIACgFQAEgHAKgDIABgBIAAAAIAagHIAIgBQASgDAQgJQARgJANgOIACgCIACgEIACgEQADgKgCgNQgEgTgFgSIgLglQgFgTgIgSIgCgFIAAgBIgFgKIgDgGIgEgJQgVgwgHguIgCgLQgEgjAEgjIAEgKQAFgKAMgGQANgHATAAQAVABAGAVIAFACQgEAMAAAMQAAAUACARIACANIATA9IgTg9IgCgNQgCgRAAgUQAAgMAEgMIAGgMQAKgPAOgJQAQgJARgGQAJgDAJAAIABAFIgBgFIAAAAIABAAQAHAAAIACIAAAAIACABIABAAQAQAGARAKQAKAGAIAKIBFBSQAIAHAGAJQAEAHADAIQAFARAKAPQAKAQAHARIAHASIgHgSQgHgRgKgQQgKgPgFgRQgDgIgEgHQgGgJgIgHIhFhSQgIgKgKgGQgRgKgQgGIgBAAIgCgBIAAAAQgIgCgHAAIgBAAIAAAAQgBgJAFgHQAKgSASgGQAQgGABgKQACgTALgOQALgPATgDQASgDATADIAEAAIAFAAQAIAAAGgEIABgBIAMgDIADAAQAFgBAGgDQAFgCgBgEQADAJAPgIIgIgLIgDgEIAYgCQATgDAMgMQAMgLAJgOIAHgKIAKgRIADADQgJAGgEAIQgDAJADAKQABAFAEACIACAAQgBABAAAHQABAFACAFIABABIABABQAAAFAEADIADADIAAAAIACAAQACAGAHADQAJADAJgCQAFgBAAgEIAGADQAFACAEgBQAFAAAEgEQACgDgBgDQAEgBABgGQACABAFgFIACgDIAAAAIACADIACgCQAJACAGAGIAEADIACADQALAOAJARQAJARgBAUIgCAkIgBAZIgHAAQgTgDgTgBIgCAAIgagCIAAAAQh0gbAAACIAAAAQgegGgHgEQgPgHgSgHIgEgBIgBAAQgFAAgDACQgEACgDAFQgJAOgHARQgEAJAAAKIAAAAIgFAGIgRAWIgEAGQgGAHA4BOQAGgLABgaQABgLADgEIABAAIAKAAQBTABAMgDIArgKIAUgDIAmgJQAbgIAYgMQACAUAFASQAEASgBATQgBASgGASIgMAiQgFATgDASQgDARADALIgdAKIgiALQgSAHgTgBQgTAAgRgHQgRgHgSgFQgMgDgJgFIAIAOQAIAPgGATQgHASgMAPQgLAMgPANQgOAMgRAGQgSAGgVgDQgQgDgMgEIgCgBIgKgHIAAgBIAAgCIAAgFQAAgMABgMIAGglQADgQAAgSIAAgFQAAgTgFgSIgEgPQgCgJgTgvQATAvACAJIAEAPQAFASAAATIAAAFQAAASgDAQIgGAlQgBAMAAAMIAAAFIAAACIAAABIAAAGQACAUAIAPIABADIAIAMIAAADQABAPAFANIAKAiQABAKgBAIQgBAIgHAFQgNALgVgCQgTgBgRAJIgEACIgMAGIgRAKQgQAKgRAFQgKADgLAAQgHAAgJgBgADRA5IABAAIACAAIgCAAIgBAAIAAAAIgBAAIgCAAIgDAAQgUgDgTgFIgigJIAiAJQATAFAUADIADAAIACAAIABAAIAAAAgAAxASIgDgDQg3g9gEAAIAAAAIAAAAIAAAAIAAAAQAEAAA3A9IADADIAAAAgAjiCOIgBgCIABACIgBgCIAAAAIABgBIAEAJIgEgGgAiYBaIAEAJIADAKIACAHIgJgagAiYBaIAAAAgAk5BWQgHgOAKgEIAAAVIgDgDgAlEA6QgEgDABgEIABgCQAEgKANAAIgBAZQgIgCgGgEgAkeAOIAHAEIAEABIgSADQAEgCADgGgAhahjIAAAAgABFjaIABgBIABADIgCgCgABXjuQgTAAgHgOIgKgRIgGgJQgIgNgHgRQgGgPABgTIABgkQABgTgDgPQAJABAHgFIABAAQAPgEACgNQATABALgQQAIAPARAAQAJAAALgDQAIgDAFgEQAKAUAOAMQAGAEgBAMQAUAIgJARQgDAGAEADQAOAJAMgLQADgDAFADQAQAKgNAQIgHAGQgEADgGABIgGAAIgDABQgHAGABAJIABAEIgKARIgHAKQgJAOgMALQgMAMgTADIgYACIgHAAIgGAAgABCkLQABAPARgBQAUAAAMgMIACgTIABAAIgBAAIABgEIACgKIACgHIAAgEIABgFIAAAAIgCAAIgDAAIAAABQgUAFgCgBQgDgBgDABQgNAFgKgFIgCgBIgBACIgGAKIAFAAIABAAIACAAIAAAPIgBAAIAAAFIAAACIABACIAAABIAAACIAAACIAAgCIAAgCIABAEIgBAAIgBAAgABDk7QAIgBAIgFIAAAAIABAAIAAAAIAAAAIgBAAIAAAAQgIAFgIABIAAAAIAAAAIgFgBQgHgBgBgFIgBgGQAAgEABgDIAAAAQADgFAIAAIAAAAIAAAAIAFABIAAAAIAAAAIgFgBIAAAAIAAAAQgIAAgDAFIAAAAQgBADAAAEIABAGQABAFAHABIAFABIAAAAIAAAAgACClBIAAAAIAAgBgABhmFIgLAFQABABgCAHIgCAGQgCAJAFAHIABACIADACQAFAGAKgFQAGgDADgHQAGgPgKgMQgCgCgDgBIgFgCIgDACgAAumCIgCABQgEAEgCAFQgCAGADAIIAAAAQACAHAEADQAHAHAOgFQAEgCABgEQADgHAAgGQAAgFgDgFIgDgEIgCgDQgDgGgFAAQgFAAgHAGgAAimNIABgBIAAAAQAJgGAKAAIAAAAIAAAAQAGAAAGADIABAAIAAAAIAAAAIgBAAQgGgDgGAAIAAAAIAAAAQgKAAgJAGIAAAAIgBABgABZmRIAAgBIABAAIABgBIABgBQAIgHAJAAIAAAAIAAAAQAFAAAFACIACABIAAAAIAGAFIgGgFIAAAAIgCgBQgFgCgFAAIAAAAIAAAAQgJAAgIAHIgBABIgBABIgBAAIAAABg");
	this.shape_15.setTransform(89.3,61.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("AD5i9QAIACAHAFQACACABABQABACACABQAKAOAJASQAKARgCAUQgBASAAASQgBANAAALQgEABgEgBQgSgDgUgBQgBAAgBAAAgwlNQgOgHAAgPQAAgKAEgHQgNgRADgSQACgRAPgEQgHgVATgKQAMgHAJABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgDAIAFQABAAABABQAbgLAPAMQAEgEAGgCQAJgCAJACQAFACACADQAEgDAFAAQAKAAAKAEQAIAEAGAHQAFAHACAFIABAAQABgBABAAQAJgBAJADQAIAEAEAJQADAIABAKQAEABAEACQAIAGABAJQAAAEAAADQADABAFADQAFAFgBAIQgBABAAABQAFABAEAFQAHAHgGAJQgBABgBABQAFAFADAGQAFALgKAEIAAABQABABABABQAGAIgHAJQgEAFgFADQABADAAAFQgBAGgDAGQAEAEABAGQABAIgEAGQABABAAABQAEAHABAHQACAIgGAFQADAGgDAJQgDAJgHAAQADAEgCAGQgDAMgGgHQAHAMgJAJQgBABgCABQgBgCAAgBQACAAACABADam4QACgCACgBAC8nSQgBACAAADACkj5QgBgCAAgCQgCgKAIgFQABgBABAAQADAAADAAQAGgBAFgDQAEgDADgDQANgRgRgKQgEgCgEADQgLALgOgJQgFgDADgHQAJgRgUgHQACgMgGgFQgPgLgJgVQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUAAQAAgEAAgEAA8lYQAPgPARAJQADABADADAgnkzQgEgFgDgGQgDgJABgGQABAAAAAAQAEABAFgBAAcl3QgBAMgQAFQAAAAAAAAQgIAEgIgBIAAAAQgLgBgCgKAAPlIQAAAAABgBQAOgKAHAKQAAACABACQACACACACQACAEAAAGQAAAGgCAHQgCAEgDABQgOAGgIgHQgEgEgCgGIAAgBQAAgCAAgCQAAgEAAgFQABgGAFgEgAgFljQAEAQgBASQgBARgBATQgBAUAGAPQAHARAIAMQADAFADAFQAFAIAEAIQAIAOATABQAGAAAGAAQACABABACQAFAFAEAGQgPAJgDgKQAAAEgEADQgHADgEABQgCAAgCAAQgBgBgBAAQgBgBgBgBQgBAAAAgBQgCgDAAgEQgFAFgEACQgBABgBAAQgFAAgBgBQgCgCgBgCQgEACgEAAQgIgBAAgJQgFAHgKgCIgBAAQgLgHAHgOQgTgGANgUQgWgGAPgQQgQgHADgVQgEgCgEgEQgFgDAAgFQgCgWAUgHQAEAEAFADQAFADAGABAAFlUQARgLAQAIAA6kmQgBgBAAgBQgFgHACgJQAAgDABgDQADgHgBgBQAIgFACgBQACAAACgBQACAAADABQADABACADQAKALgHAPQgDAIgGADQgJAFgGgGQgBgBgBgBgAA5lGQATAGgGAQQgDAKgJAAAApkaQgNgBgDAGQgDAEACAJQACAFAHABQALACALgIAAljsIAAAAAAljbQAAAQASgBQATgBAMgLQAAgFAIgQQACgDACgEQACgFADgFQgCAAgBABQgeAHgCgBQgEgBgCABQgOAGgLgHQgEAGgDAGQACAAADAAQAAAAABAAIABAAABjj8QgBADgDAFQgCAFgIAIQgXAMgYgCIgBAAIAAAAAAljdIAAgCIAAgDIAAgKAgskIQADABAEAAAh4gpQAAgJAEgIQAKgRATgHQAPgFACgKQACgUALgOQALgPATgDQATgDARADQACABACAAQADAAACAAQAJAAAGgFQAAAAAAAAQAEgBAIgCADdg0QgDgBgDAAQhJgPglgJQgdgHgHgDQgQgIgRgGQgDgBgCAAQAAAAgBAAQgEgBgEADQgDACgDAFQgJAOgHARQgDAJgBAJAD1i+QAAgBAAgBQgBABAAABQAAAAABAAgAD0i+QgBABgBACQgEAEgDAAQAAAFgEACQgDAAgDgBABGi0QANgBAMgBQASgDANgNQALgLAKgOQADgFADgEQAFgJAGgIACli6QgBgBAAgBQgBAAAAgBQgDgEAAgGQgBgGABgBQgBAAAAgBQgFgCgBgEQgDgLAEgIQADgIAKgHQgDgBAAgBADniwQABADgCACQgEAEgGABQgEAAgEgBQgEgBgCgCQgBADgEABQgKACgIgDQgIgDgBgFQgBAAgBAAACoiyQgDgEAAgEACji9QACABAAACADri3QgCAAgCgHAAJkxQgCgHACgGAAPkmQATgQgTgSAAfAWQAAABAAAAQAFAAAFAAQBTABAMgDQAWgFAWgFQAJgCAKgCQAUgEATgEQAagHAZgMQACAUAEARQAFARgBAUQgCATgGARQgGARgFASQgGASgDASQgDASADALQADgBAEgCQAFADADAIQAGAPgDAWQgDATgKASQgGAKgHALQgEAGgEAFQgKAQgJAPQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAABQgFABgEABQgSAFgSADQgCABgBAAQgQADgSACQgJABgJAAQgBAAAAAAQgKgBgJgBQgJgCgIgCQgJgDgIgEQgQgHgOgLQgPgLgNgKQgMgKgOgLQgBgBgBAAQgFgEgFgDQAAgCAAgBQAAgPACgOQADgTADgSQADgTAAgUQgBgTgEgSQgCgIgCgIQgDgJgSguABkBiQARADASAFQATAGATACQAFABAEAAAAUBMQg4hOAFgHQADgDACgDQAIgKAKgMQACgDACgDQAAAIACAIQACAOAfAjAAUBMQAFgMACgaQAAgMAEgEAAUBMQhAhNgFgGQgJgJgKgGQgQgKgRgGQgJgDgKAAQABACAAADAAUBMQAIAHAFAJQAEAHADAHQAGASAJAPQALAQAGAQQAEAKAEAIQADAIAEAGQAJAPgHAUQgGASgNAOQgLANgOAMQgOAMgSAGQgRAHgUgEQgRgCgNgEAgrALQABgDA+BEAg2FZQADAGAEAHAhCEuQAAADABADQABATAIAPQABACABABQAHABAAAHQAAACAAADQAAABAAACQABAPAFANQAGAQAEARQADALgCAIQgCAIgGAFQgOAKgVgBQgSgBgRAIQgCABgCABQgHADgGAEQgIAFgJAFQgQAJgQAGQgRAFgUgEQgUgEgMgKQgGgFgNACQgWACgHgNQgDgFgBgEQgCgNANgFQARgHAUAAQATAAARgFQARgGARgJQASgIAMgOQANgPgDgTQgDgUgCgTQgDgTgDgTQgDgSgEgTQgFgSgCgSQgDgSgFgSQgBgEgCgEQgFgOgDgMQgUg7AAgCQAAgFgBgHQgCgTAAgTQAAgNAEgLQACgGADgGQAKgPAPgJQAPgJASgGQAIgDAJABABQC9QAIAGAMADQASAEASAHQARAHASABQAUAAARgGQARgGASgGQAOgEAOgFAEngvQANgBAKgOQANgSAMABQAGAUgVAKQgFADgFAEQAIgCAOAAQAWAAALALQAHAIgJAGQgYARgbgMQgOgGgNgCQgCABgCABAEngvQAAADAAADAj4DVQgCgEgCgDQgCgFgCgEQgVgwgHguIgBgLQgFgkAFgkQABgFACgEQAGgKAMgFQANgIASABQAWAAAFAVAlCBQQADgDADgFQADACAEABQACABACABAitCtQAAgDgBgDQgCgFgCgFQgCgFgBgFAl3AyQABABAAACAknHUQgMgDAAgNQgHgLgQgLQAAgCACgCQADgHAKgEQABAAAAAAQABAAAAAAQAMgEANgDQAEgBAEgBQASgDAQgIQARgJANgOQABgBABgCQABgBABgCQACgCAAgCQAEgKgDgOQgDgSgGgTQgFgSgGgSQgFgTgHgSQgBgDgBgCIgBgBIgEgJIgHgNIgBgCAj0DeQgCgFgCgFAknHUQAEABAFAA");
	this.shape_16.setTransform(92.3,55.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag8CvIgDgBIgBgCIgBgCIgBABIgCgHQgFAGgEABIgCABQgEAAgCgBIgDgEQgDACgFAAQgHgBAAgJQgHAHgKgCIAAAAQgMgHAHgOQgTgFAOgVQgWgGAOgQQgQgHAEgVIAGABIgGgBIgJgGQgEgDgBgFQgCgWAVgHQgFgFgCgGQgEgIACgGQgOgGAAgQQAAgJADgIQgNgRADgSQADgRAOgEQgGgVATgKQALgHAKABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAJgLAOgEQAJgDAHAFIACABQAbgLAPAMQAEgEAGgCQAIgCAJACQAFACADADQAEgDAFAAQAKAAAJAEQAJAEAGAHIAHAMIAAAAIACgBQAKgBAJADQAIAEAEAJQADAJAAAJQAFABAEACQAIAGABAJIgBAHQAEABAEADQAGAFgCAIIAAACQAFABAEAFQAGAHgFAJIgCACQAFAFADAGQAFALgKAEIgBABIACACQAGAIgGAIQgFAGgFACQACADAAAFQgBAGgDAGQADAFABAFQABAIgDAGIABACQAEAHABAHQABAIgFAFQADAHgDAIQgDAKgHgBQACAEgBAGQgDAMgGgHQAGAMgJAJIgEgBIAAgCIAAACIgCADQgFAEgCAAQgDAAgBgHQABAHADAAQgBAGgEABIgCAAIAAAAIgEgBIAEABIAAAAIACAAQABADgCACQgEAFgFAAQgEAAgFgBIgGgDQAAAEgFAAQgJACgJgDQgHgDgCgFIgCAAIAAAAIgDgDQgEgEAAgEQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgCgEgBgGQAAgGABgBIgCgBQgEgCgBgEQgDgLADgIQAEgIAJgHIgDgCIgBgEQgBgKAHgFIADgBIAGAAQAGgBAEgDIAHgGQANgRgQgKQgFgCgDADQgMALgOgJQgEgDADgHQAJgRgUgGQABgMgGgFQgOgLgKgVQgFAEgHADQgLAEgJAAQgRAAgIgQQgLAQgTAAIAAgCIgBgGIABAGIAAACQgBAMgQAFIgBAAQgHAEgJgBIgBAAQgKgBgCgKQACAKAKABIABAAQADAQgBARIgBAkQgBAUAGAPQAHARAIAMIAGAKIAKAQQAHAOATABIANAAIADADIAIALQgPAJgDgKQABAEgFADQgGADgFABIgCAAIgBAAgAiIAfQAEADAGABQgGgBgEgDQgFgCgEgFQAEAFAFACgAiUAAIABAAIACgBIgCABIgBAAIAAAAIAAAAIgCAAIgDgBIgBAAIABAAIADABIACAAIAAAAIAAAAgABwhsIADgDIgDADgABRiBIABgFIgBAFgACBCUIAAAAgACKCNIAEABIgCACIgCgDgACKCNIAAAAgAhgAbIAAgBIAAgEIgBgJQACgFAEgFQAUASgTAQQgEgDgCgHgAgwAlIgBgCQgFgHACgJIACgGQACgHgBgBQATAHgFAPQgDAKgJAAIgBAAg");
	this.shape_17.setTransform(102.9,22.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.1,1,1).p("AgQkcQAEgEAGgBQAIgDAJADQAFABACADQAEgCAFAAQAKgBAKAEQAIAEAGAIQAFAGACAFIABAAQABAAABAAQAJgCAJAEQAIADAEAJQADAJABAJQAEABAEADQAIAFABAKQABAEgBADQADAAAFAEQAFAEgBAIQAAABgBABQAFACAEAEQAHAIgGAJQgBABgBABQAFAEADAGQAFALgKAFIAAAAQABABABABQAGAJgHAIQgEAGgFACQABAEAAAEQgBAGgDAGQAEAFABAGQABAIgEAGQABAAAAABQAEAHABAHQACAJgGAEQADAHgDAIQgDAKgHgBQADAFgCAFQgDALgGgGQAHAMgJAIQgBABgCABQgBgBAAgBQAAgBAAgBQAAABgBABQgBABgBABQgEAFgDAAQAAAFgEABQgDABgDgBABWjgQACgCACgBAA4j7QgBADAAACAh4iPQAAAAAAAAQgIAFgJgBIAAAAQgLgCgCgJAhJhPQgBAAAAgBQgFgHACgKQAAgDABgCQADgIgBgBQAIgEACgBQACgBACAAQACAAADABQADABACACQAKAMgHAPQgDAHgGADQgJAFgGgFQgBgBgBgCgAhKhvQATAHgGAQQgDAKgJgBAhiA+QAEgBAIgDQACAAACAAAhoA3QgFABgBgCAhxAyQgEADgEgBQgIgBAAgJQgGAIgKgDAh2BCQADABACgBQAJAAAGgEAAfAaQgCgEgBgGQgBgGABgBQAAgBgBAAQgFgCgBgFQgDgJAEgIQADgJAKgGQgCgBgBgCQgBgBAAgDQgCgJAIgFAAhAcQgBAAAAgBQgBgBAAAAQACAAAAACgABjAmQABADgCADQgEAEgGAAQgEABgEgCQgEgBgCgCQgBAEgEABQgKACgIgDQgIgDgBgGQgBAAgBAAAAkAlQgDgEAAgFABnAgQgCAAgCgHAhvEjQAFgLACgaQAAgMAEgE");
	this.shape_18.setTransform(105.5,34.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.1,1,1).p("AD0i+QAAAAABAAQACAAACAAQAIACAHAGQACABABACQABABACACQAKAOAJARQAKARgCAUQgBASAAASQgBAOAAALQgEAAgEAAQgSgDgUgBQgBAAgBAAAA8lYQAPgPARAIQADACADADACpkMQABgBABgBQADAAADAAQAGgBAFgDQAEgCADgEQANgQgRgKQgEgDgEADQgLALgOgJQgFgDADgGQAJgRgUgIQACgMgGgEQgPgMgJgUQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUgBQAAgDAAgEAgwlOQgOgGAAgPQAAgKAEgHQgNgSADgSQACgQAPgFQgHgUATgLQAMgGAJABQAAgQAKgMQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgCAIAEQABABABABQAbgLAPALAgnkzQgEgFgDgHQgDgIABgHQABAAAAAAQAEABAFAAAAPlIQAAgBABAAQAOgLAHALQAAABABACQACACACADQACAEAAAGQAAAFgCAHQgCAEgDACQgOAFgIgGQgEgEgCgHIAAAAQAAgCAAgCQAAgFAAgFQABgFAFgEgAgFljQAEAQgBASQgBAQgBAUQgBATAGAPQAHARAIANQADAFADAFQAFAHAEAJQAIAOATAAQAGABAGgBQACACABACQAFAFAEAGQgPAIgDgJQAAAEgEACQgHAEgEAAAAFlUQARgMAQAIAAcl4QgBANgQAEAApkaQgNgCgDAGQgDAFACAIQACAFAHABQALACALgHAAkjkQAAABABABQAAAPASgBQATAAAMgMQABgHAQgPQglAUgdgCgABnj2QghAIgCgBQgEgBgCABQgOAGgLgHQgEAGgDAGQADAAADAAAgskJQgEgCgEgDQgFgEAAgFQgCgVAUgHQAEAEAFADQAFACAGACAgskJQADABAEABAgNioIgBAAQgLgGAHgOQgTgGANgVQgWgGAPgPQgQgIADgVAh4gqQAAgJAEgHQAKgSATgGQAPgGACgKQACgTALgOQALgPATgDQATgDARADQACAAACAAAAtidQgBAAgBgBQgBAAgBgBQgBgBAAgBQgCgCAAgEQgFAFgEACQgBAAgBAAAAVihQgCgBgBgDAAhiZQAAAAAAAAADdg1QgDAAgDgBQhJgPglgIQgdgHgHgEQgQgHgRgHQgDAAgCgBQAAAAgBAAQgEAAgEACQgDACgDAFQgJAOgHARQgDAKgBAJABzkNQgEAKAAAEQAAAGALAOABGi1QANAAAMgCQASgDANgMQALgLAKgOQADgFADgFQAFgIAGgJAAJkxQgCgIACgGAAPkmQATgRgTgRAAUBLQg4hOAFgHQADgDACgDQAIgJAKgNQACgDACgDQAAAJACAIQACAOAfAjQAAAAAAAAQAFAAAFABQBTAAAMgDQAWgFAWgEQAJgCAKgCQAUgEATgEQAagIAZgMQACAUAEARQAFASgBATQgCATgGASQgGARgFARQgGATgDASQgDASADALQADgCAEgCQAFAEADAHQAGAQgDAVQgDAUgKARQgGALgHAKQgEAGgEAGQgKAPgJAQQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAAAQgFACgEABQgSAEgSAEQgCAAgBABQgQADgSABQgJABgJAAQgBAAAAAAQgKAAgJgCQgJgBgIgDQgJgCgIgEQgQgIgOgKQgPgLgNgLQgMgJgOgMQgBAAgBgBQgFgEgFgDQAAgBAAgCQAAgOACgPQADgTADgSQADgTAAgUQgBgTgEgSQgCgHgCgIQgDgJgSgvABkBhQARAEASAFQATAFATADQAFABAEgBAAUBLQhAhNgFgFQgJgJgKgHQgQgKgRgGQgJgDgKAAQABADAAACABQC9QgEgJgEgJQgGgRgLgQQgJgPgGgRQgDgIgEgHQgFgIgIgIAgrALQABgEA+BEABQC9QADAHAEAHQAJAPgHATQgGASgNAPQgLAMgOANQgOAMgSAGQgRAGgUgDQgRgDgNgEAgvFlQgEgGgDgGAhCEtQAAADABADQABAUAIAPQABABABACQAHAAAAAHQAAADAAACQAAACAAABQABAPAFANQAGAQAEASQADALgCAIQgCAHgGAFQgOALgVgCQgSgBgRAJQgCABgCABQgHADgGADQgIAFgJAFQgQAKgQAFQgRAGgUgEQgUgEgMgKQgGgFgNABQgWADgHgOQgDgEgBgEQgCgNANgGQARgGAUAAQATAAARgGQARgGARgIQASgJAMgOQANgPgDgTQgDgTgCgUQgDgTgDgTQgDgSgEgSQgFgSgCgTQgDgRgFgTQgBgDgCgEQgFgOgDgMQgUg7AAgCQAAgGgBgHQgCgSAAgUQAAgMAEgLQACgHADgFQAKgPAPgJQAPgJASgGQAIgDAJAAAEPC+QgOAFgOAEQgSAFgRAGQgRAHgUgBQgSAAgRgHQgSgHgSgFQgMgDgIgFAEngvQANgCAKgOQANgRAMAAQAGAVgVAJQgFADgFAEQAIgCAOAAQAWAAALAMQAHAHgJAHQgYARgbgMQgOgHgNgCQgCABgCABAEngvQAAADAAACAj4DVQgCgEgCgEQgCgEgCgEQgVgxgHguIgBgKQgFglAFgjQABgFACgEQAGgKAMgGQANgHASAAQAWABAFAUAlCBPQADgCADgFQADABAEACQACABACAAAitCtQAAgDgBgDQgCgGgCgFQgCgFgBgEAl3AxQABACAAABAknHUQgMgDAAgNQgHgLgQgLQAAgDACgCQADgHAKgDQABAAAAAAQABgBAAAAQAMgEANgDQAEAAAEgBQASgDAQgJQARgJANgOQABgBABgBQABgCABgBQACgCAAgDQAEgJgDgOQgDgTgGgSQgFgSgGgTQgFgTgHgSQgBgCgBgCIgBgBIgEgJIgHgOIgBgCAj0DeQgCgGgCgFAknHUQAEAAAFAA");
	this.shape_19.setTransform(92.3,56);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#996631").s().p("AgcADIAAgCIgBAAIgHAAIAHgLQALAHAOgGQADgBACABQADABAhgIIgCABIgDABIgBABIgCABQgcANgXAAIgBAAIAAAAIgFAAIAFAAIAAAAIABAAQAXAAAcgNIACgBIABgBIADgBIACgBQgRAPAAAGQgMAMgTAAIgCAAQgPAAAAgOg");
	this.shape_20.setTransform(98.9,33);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag8CvIgDgBIgBgCIgBgCIgBABIgCgHQgFAGgEABIgCABQgEAAgCgBIgDgEQgDACgFAAQgHgBAAgJQgHAHgKgCIAAAAQgMgHAHgOQgTgFAOgVQgWgGAOgQQgQgHAEgVIAGABIgGgBIgJgGQgEgDgBgFQgCgWAVgHQgFgFgCgGQgEgIACgGIABAAIACAAIADABIAAAAIAAAAIABAAIACgBIgCABIgBAAIAAAAIAAAAIgDgBIgCAAIgBAAQgOgGAAgQQAAgJADgIQgNgRADgSQADgRAOgEQgGgVATgKQALgHAKABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAJgLAOgEQAJgDAHAFIACABQAbgLAPAMQAEgEAGgCQAIgCAJACQAFACADADQAEgDAFAAQAKAAAJAEQAJAEAGAHIAHAMIAAAAIACgBQAKgBAJADQAIAEAEAJQADAJAAAJQAFABAEACQAIAGABAJIgBAHQAEABAEADQAGAFgCAIIAAACQAFABAEAFQAGAHgFAJIgCACQAFAFADAGQAFALgKAEIgBABIACACQAGAIgGAIQgFAGgFACQACADAAAFQgBAGgDAGQADAFABAFQABAIgDAGIABACQAEAHABAHQABAIgFAFQADAHgDAIQgDAKgHgBQACAEgBAGQgDAMgGgHQAGAMgJAJIgEgBIAAgCIAAACIgCADQgFAEgCAAQgDAAgBgHQABAHADAAQgBAGgEABQABADgCACQgEAFgFAAQgEAAgFgBIgGgDQAAAEgFAAQgJACgJgDQgHgDgCgFIgCAAIAAAAIgDgDQgEgEAAgEQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgCgEgBgGQAAgGABgBIgCgBQgEgCgBgEQgDgLADgIQAEgIAJgHIgDgCIgBgEQgBgKAHgFIADgBIAGAAQAGgBAEgDIAHgGQANgRgQgKQgFgCgDADQgMALgOgJQgEgDADgHQAJgRgUgGQABgMgGgFQgOgLgKgVQgFAEgHADQgLAEgJAAQgRAAgIgQQgLAQgTAAIAAgCIgBgGIABAGIAAACQgBAMgQAFIgBAAQgHAEgJgBIgBAAQgKgBgCgKQACAKAKABIABAAQADAQgBARIgBAkQgBAUAGAPQAHARAIAMIAGAKIAKAQQAHAOATABIANAAIADADIAIALQgPAJgDgKQABAEgFADQgGADgFABIgCAAIgBAAgAB8CbIgCAAIgEgBIAEABIACAAgAiIAfQAEADAGABQgGgBgEgDQgFgCgEgFQAEAFAFACgABwhsIADgDIgDADgABRiBIABgFIgBAFgACBCUIAAAAgACKCNIAEABIgCACIgCgDgAhgAbIAAgBIAAgEIgBgJQACgFAEgFQAUASgTAQQgEgDgCgHgAgwAlIgBgCQgFgHACgJIACgGQACgHgBgBQATAHgFAPQgDAKgJAAIgBAAg");
	this.shape_21.setTransform(102.9,22.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC9A67").s().p("Ai2HAQgUgEgLgKQgGgFgNABQgWADgIgOIgDgJIAAABIABAAIABAAIAFAAIAAAAIAAAAIACAAIgCAAIAAAAIAAAAIgFAAIgBAAIgBAAIAAgBIgBgDQAAgKAMgFQAQgGAVAAQASAAARgGQARgGASgIQARgJAMgOQALgMAAgPIAAgHIgGgnIgFgmIgIgkQgEgSgDgTQgDgRgFgTIgCgHIgCgHIgDgKIgEgJIAJAaIACAHQAFATADARQADATAEASIAIAkIAFAmIAGAnIAAAHQAAAPgLAMQgMAOgRAJQgSAIgRAGQgRAGgSAAQgVAAgQAGQgMAFAAAKIABADQgMgDAAgMQgIgLgQgLIACgFQAEgHAKgDIABgBIAAAAIAagHIAIgBQASgDAQgJQARgJANgOIACgCIACgEIACgEQADgKgCgNQgEgTgFgSIgLglQgFgTgIgSIgCgFIAAgBIgFgKIgDgGIgEgJQgVgwgHguIgCgLQgEgjAEgjIAEgKQAFgKAMgGQANgHATAAQAVABAGAVIAFACQgEAMAAAMQAAAUACARIACANIATA9IgTg9IgCgNQgCgRAAgUQAAgMAEgMIAGgMQAKgPAOgJQAQgJARgGQAJgDAJAAIABAFIgBgFIAAAAIABAAQAHAAAIACIAAAAIACABIABAAQAQAGARAKQAKAGAIAKIBFBSQAIAHAGAJQAEAHADAIQAFARAKAPQAKAQAHARIAHASIgHgSQgHgRgKgQQgKgPgFgRQgDgIgEgHQgGgJgIgHIhFhSQgIgKgKgGQgRgKgQgGIgBAAIgCgBIAAAAQgIgCgHAAIgBAAIAAAAQgBgJAFgHQAKgSASgGQAQgGABgKQACgTALgOQALgPATgDQASgDATADIAEAAIAFAAQAIAAAGgEIABgBIAMgDIADAAQAFgBAGgDQAFgCgBgEQADAJAPgIIgIgLIgDgEIAYgCQATgDAMgMQAMgLAJgOIAHgKIAKgRIgKARIgHAKQgJAOgMALQgMAMgTADIgYACIgNAAQgTAAgHgOIgKgRIgGgJQgIgNgHgRQgGgPABgTIABgkQABgTgDgPQAJABAHgFIABAAQAPgEACgNQATABALgQQAIAPARAAQAJAAALgDQAIgDAFgEQAKAUAOAMQAGAEgBAMQAUAIgJARQgDAGAEADQAOAJAMgLQADgDAFADQAQAKgNAQIgHAGQgEADgGABIgGAAIgDABQgHAGABAJIABAEIADADQgJAGgEAIQgDAJADAKQABAFAEACIACAAQgBABAAAHQABAFACAFIABABIABABQAAAFAEADIADADIAAAAIACAAQACAGAHADQAJADAJgCQAFgBAAgEIAGADQAFACAEgBQAFAAAEgEQACgDgBgDQAEgBABgGQACABAFgFIACgDIAAAAIACADIACgCQAJACAGAGIAEADIACADQALAOAJARQAJARgBAUIgCAkIgBAZIgHAAQgTgDgTgBIgCAAIgagCIAAAAQh0gbAAACIAAAAQgegGgHgEQgPgHgSgHIgEgBIgBAAQgFAAgDACQgEACgDAFQgJAOgHARQgEAJAAAKIAAAAIgFAGIgRAWIgEAGQgGAHA4BOQAGgLABgaQABgLADgEIABAAIAKAAQBTABAMgDIArgKIAUgDIAmgJQAbgIAYgMQACAUAFASQAEASgBATQgBASgGASIgMAiQgFATgDASQgDARADALIgdAKIgiALQgSAHgTgBQgTAAgRgHQgRgHgSgFQgMgDgJgFIAIAOQAIAPgGATQgHASgMAPQgLAMgPANQgOAMgRAGQgSAGgVgDQgQgDgMgEIgCgBIgKgHIAAAGQACAUAIAPIABADIAIAMIAAADQABAPAFANIAKAiQABAKgBAIQgBAIgHAFQgNALgVgCQgTgBgRAJIgEACIgMAGIgRAKQgQAKgRAFQgKADgLAAQgHAAgJgBgAgkD0IAAgBIAAgCIAAgFQAAgMABgMIAGglQADgQAAgSIAAgFQAAgTgFgSIgEgPQgCgJgTgvQATAvACAJIAEAPQAFASAAATIAAAFQAAASgDAQIgGAlQgBAMAAAMIAAAFIAAACIAAABgADRA5IABAAIACAAIgCAAIgBAAIAAAAIgBAAIgCAAIgDAAQgUgDgTgFIgigJIAiAJQATAFAUADIADAAIACAAIABAAIAAAAgAAxASIgDgDQg3g9gEAAIAAAAIAAAAIAAAAIAAAAQAEAAA3A9IADADIAAAAgABBkdIABACQABAPARgBQAUAAAMgMQAAgHARgPQgiAIgCgBQgDgBgDABQgOAGgLgHIgHAMIADAAIADAAgACMk4QAAAGAMAOQgMgOAAgGQAAgEAFgKQgFAKAAAEIAAAAgABDk7QAIgBAIgFIAAAAIABAAIAAAAIAAAAIgBAAIAAAAQgIAFgIABIAAAAIAAAAIgFgBQgHgBgBgFIgBgGQAAgEABgDIAAAAQADgFAIAAIAAAAIAAAAIAFABIAAAAIAAAAIgFgBIAAAAIAAAAQgIAAgDAFIAAAAQgBADAAAEIABAGQABAFAHABIAFABIAAAAIAAAAgABhmFIgLAFQABABgCAHIgCAGQgCAJAFAHIABACIADACQAFAGAKgFQAGgDADgHQAGgPgKgMQgCgCgDgBIgFgCIgDACgAAumCIgCABQgEAEgCAFQgCAGADAIIAAAAQACAHAEADQAHAHAOgFQAEgCABgEQADgHAAgGQAAgFgDgFIgDgEIgCgDQgDgGgFAAQgFAAgHAGgAAimNIABgBIAAAAQAJgGAKAAIAAAAIAAAAQAGAAAGADIABAAIAAAAIAAAAIgBAAQgGgDgGAAIAAAAIAAAAQgKAAgJAGIAAAAIgBABgABZmRIAAgBIABAAIABgBIABgBQAIgHAJAAIAAAAIAAAAQAFAAAFACIACABIAAAAIAGAFIgGgFIAAAAIgCgBQgFgCgFAAIAAAAIAAAAQgJAAgIAHIgBABIgBABIgBAAIAAABgAjiCOIgBgCIABACIgBgCIAAAAIABgBIAEAJIgEgGgAiYBaIAEAJIADAKIACAHIgJgagAiYBaIAAAAgAk5BWQgHgOAKgEIAAAVIgDgDgAlEA6QgEgDABgEIABgCQAEgKANAAIgBAZQgIgCgGgEgAkeAOIAHAEIAEABIgSADQAEgCADgGgAhahjIAAAAgABFjaIABgBIABADIgCgCg");
	this.shape_22.setTransform(89.3,61.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.1,1,1).p("AD5i9QAIACAHAFQACACABABQABACACABQAKAOAJASQAKARgCAUQgBASAAASQgBANAAALQgEABgEgBQgSgDgUgBQgBAAgBAAAgwlNQgOgHAAgPQAAgKAEgHQgNgRADgSQACgRAPgEQgHgVATgKQAMgHAJABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgDAIAFQABAAABABQAbgLAPAMQAEgEAGgCQAJgCAJACQAFACACADQAEgDAFAAQAKAAAKAEQAIAEAGAHQAFAHACAFIABAAQABgBABAAQAJgBAJADQAIAEAEAJQADAIABAKQAEABAEACQAIAGABAJQAAAEAAADQADABAFADQAFAFgBAIQgBABAAABQAFABAEAFQAHAHgGAJQgBABgBABQAFAFADAGQAFALgKAEIAAABQABABABABQAGAIgHAJQgEAFgFADQABADAAAFQgBAGgDAGQAEAEABAGQABAIgEAGQABABAAABQAEAHABAHQACAIgGAFQADAGgDAJQgDAJgHAAQADAEgCAGQgDAMgGgHQAHAMgJAJADam4QACgCACgBAC8nSQgBACAAADACkj5QgBgCAAgCQgCgKAIgFQABgBABAAQADAAADAAQAGgBAFgDQAEgDADgDQANgRgRgKQgEgCgEADQgLALgOgJQgFgDADgHQAJgRgUgHQACgMgGgFQgPgLgJgVQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUAAQAAgEAAgEAA8lYQAPgPARAJQADABADADAgnkzQgEgFgDgGQgDgJABgGQABAAAAAAQAEABAFgBAAcl3QgBAMgQAFQAAAAAAAAQgIAEgIgBIAAAAQgLgBgCgKAAPlIQAAAAABgBQAOgKAHAKQAAACABACQACACACACQACAEAAAGQAAAGgCAHQgCAEgDABQgOAGgIgHQgEgEgCgGIAAgBQAAgCAAgCQAAgEAAgFQABgGAFgEgAgFljQAEAQgBASQgBARgBATQgBAUAGAPQAHARAIAMQADAFADAFQAFAIAEAIQAIAOATABQAGAAAGAAQACABABACQAFAFAEAGQgPAJgDgKQAAAEgEADQgHADgEABQgCAAgCAAQgBgBgBAAQgBgBgBgBQgBAAAAgBQgCgDAAgEQgFAFgEACQgBABgBAAQgFAAgBgBQgCgCgBgCQgEACgEAAQgIgBAAgJQgFAHgKgCIgBAAQgLgHAHgOQgTgGANgUQgWgGAPgQQgQgHADgVQgEgCgEgEQgFgDAAgFQgCgWAUgHQAEAEAFADQAFADAGABAAFlUQARgLAQAIAA5lGQAIgFACgBQACAAACgBQACAAADABQADABACADQAKALgHAPQgDAIgGADQgJAFgGgGQgBgBgBgBQgBgBAAgBQgFgHACgJQAAgDABgDQADgHgBgBgAA6kmQAJAAADgKQAGgQgTgGAApkaQgNgBgDAGQgDAEACAJQACAFAHABQALACALgIABSj2QgFAEgNAMQgOAMgHgEQgIgEAAgCIgBAAQgBAAgBAAQgBAAgBAAIgBAAQADgGACgGQABABABABQAFADAFgBQADgBADgBQACgBADABQABAAAYgIQgDADgBADQgIALAAAGQgKAVgJgBQgJgBgEgDQgDgDAAgQAgskIQADABAEAAAh4gpQAAgJAEgIQAKgRATgHQAPgFACgKQACgUALgOQALgPATgDQATgDARADQACABACAAQADAAACAAQAJAAAGgFQAAAAAAAAQAEgBAIgCADdg0QgDgBgDAAQhJgPglgJQgdgHgHgDQgQgIgRgGQgDgBgCAAQAAAAgBAAQgEgBgEADQgDACgDAFQgJAOgHARQgDAJgBAJAD1i+QACAAACABAD0i+QAAgBABgBQAAABAAABQgBAAAAAAQgBABgBACQgEAEgDAAQAAAFgEACQgDAAgDgBAD1i+QAAABABACQACgBABgBABjkFQgEALAAAEQAAABAAABQABACABACQADAGAGAHABGi0QANgBAMgBQASgDANgNQALgLAKgOQADgFADgEQAFgJAGgIACli6QgBgBAAgBQgBAAAAgBQgDgEAAgGQgBgGABgBQgBAAAAgBQgFgCgBgEQgDgLAEgIQADgIAKgHQgDgBAAgBADniwQABADgCACQgEAEgGABQgEAAgEgBQgEgBgCgCQgBADgEABQgKACgIgDQgIgDgBgFQgBAAgBAAACoiyQgDgEAAgEACji9QACABAAACADri3QgCAAgCgHAAJkxQgCgHACgGAAPkmQATgQgTgSAAfAWQAAABAAAAQAFAAAFAAQBTABAMgDQAWgFAWgFQAJgCAKgCQAUgEATgEQAagHAZgMQACAUAEARQAFARgBAUQgCATgGARQgGARgFASQgGASgDASQgDASADALQADgBAEgCQAFADADAIQAGAPgDAWQgDATgKASQgGAKgHALQgEAGgEAFQgKAQgJAPQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAABQgFABgEABQgSAFgSADQgCABgBAAQgQADgSACQgJABgJAAQgBAAAAAAQgKgBgJgBQgJgCgIgCQgJgDgIgEQgQgHgOgLQgPgLgNgKQgMgKgOgLQgBgBgBAAQgFgEgFgDQAAgCAAgBQAAgPACgOQADgTADgSQADgTAAgUQgBgTgEgSQgCgIgCgIQgDgJgSguABkBiQARADASAFQATAGATACQAFABAEAAAAUBMQg4hOAFgHQADgDACgDQAIgKAKgMQACgDACgDQAAAIACAIQACAOAfAjAAUBMQAFgMACgaQAAgMAEgEAAUBMQhAhNgFgGQgJgJgKgGQgQgKgRgGQgJgDgKAAQABACAAADAAUBMQAIAHAFAJQAEAHADAHQAGASAJAPQALAQAGAQQAEAKAEAIQADAIAEAGQAJAPgHAUQgGASgNAOQgLANgOAMQgOAMgSAGQgRAHgUgEQgRgCgNgEAgrALQABgDA+BEAg2FZQADAGAEAHAhCEuQAAADABADQABATAIAPQABACABABQAHABAAAHQAAACAAADQAAABAAACQABAPAFANQAGAQAEARQADALgCAIQgCAIgGAFQgOAKgVgBQgSgBgRAIQgCABgCABQgHADgGAEQgIAFgJAFQgQAJgQAGQgRAFgUgEQgUgEgMgKQgGgFgNACQgWACgHgNQgDgFgBgEQgCgNANgFQARgHAUAAQATAAARgFQARgGARgJQASgIAMgOQANgPgDgTQgDgUgCgTQgDgTgDgTQgDgSgEgTQgFgSgCgSQgDgSgFgSQgBgEgCgEQgFgOgDgMQgUg7AAgCQAAgFgBgHQgCgTAAgTQAAgNAEgLQACgGADgGQAKgPAPgJQAPgJASgGQAIgDAJABABQC9QAIAGAMADQASAEASAHQARAHASABQAUAAARgGQARgGASgGQAOgEAOgFAEngvQANgBAKgOQANgSAMABQAGAUgVAKQgFADgFAEQAIgCAOAAQAWAAALALQAHAIgJAGQgYARgbgMQgOgGgNgCQgCABgCABAEngvQAAADAAADAj4DVQgCgEgCgDQgCgFgCgEQgVgwgHguIgBgLQgFgkAFgkQABgFACgEQAGgKAMgFQANgIASABQAWAAAFAVAlCBQQADgDADgFQADACAEABQACABACABAitCtQAAgDgBgDQgCgFgCgFQgCgFgBgFAl3AyQABABAAACAknHUQgMgDAAgNQgHgLgQgLQAAgCACgCQADgHAKgEQABAAAAAAQABAAAAAAQAMgEANgDQAEgBAEgBQASgDAQgIQARgJANgOQABgBABgCQABgBABgCQACgCAAgCQAEgKgDgOQgDgSgGgTQgFgSgGgSQgFgTgHgSQgBgDgBgCIgBgBIgEgJIgHgNIgBgCAj0DeQgCgFgCgFAknHUQAEABAFAA");
	this.shape_23.setTransform(92.3,55.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#996631").s().p("AgEAVQgJgBgDgDQgEgDAAgOIAAgCQAAABAIADIABABIADAAIAAAAIACAAQAGgBAIgHIASgPIgEAGQgIALAAAEQgJAUgHAAIgCAAgAgIADIgDAAIgBgBQgIgDAAgBIgBAAIgCgBIgCABIAAAAIAFgMIABABQAFADAGgBIAGgCQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQACABAXgIIgSAPQgIAHgGABIgCAAIAAAAgAAagUIAAAAg");
	this.shape_24.setTransform(97.9,33.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC9A67").s().p("Ai2HAQgUgEgLgKQgGgFgNABQgWADgIgOIgDgJIAAABIABAAIABAAIAFAAIAAAAIAAAAIACAAIgCAAIAAAAIAAAAIgFAAIgBAAIgBAAIAAgBIgBgDQAAgKAMgFQAQgGAVAAQASAAARgGQARgGASgIQARgJAMgOQALgMAAgPIAAgHIgGgnIgFgmIgIgkQgEgSgDgTQgDgRgFgTIgCgHIgCgHIgDgKIgEgJIAJAaIACAHQAFATADARQADATAEASIAIAkIAFAmIAGAnIAAAHQAAAPgLAMQgMAOgRAJQgSAIgRAGQgRAGgSAAQgVAAgQAGQgMAFAAAKIABADQgMgDAAgMQgIgLgQgLIACgFQAEgHAKgDIABgBIAAAAIAagHIAIgBQASgDAQgJQARgJANgOIACgCIACgEIACgEQADgKgCgNQgEgTgFgSIgLglQgFgTgIgSIgCgFIAAgBIgFgKIgDgGIgEgJQgVgwgHguIgCgLQgEgjAEgjIAEgKQAFgKAMgGQANgHATAAQAVABAGAVIAFACQgEAMAAAMQAAAUACARIACANIATA9IgTg9IgCgNQgCgRAAgUQAAgMAEgMIAGgMQAKgPAOgJQAQgJARgGQAJgDAJAAIABAFIgBgFIAAAAIABAAQAHAAAIACIAAAAIACABIABAAQAQAGARAKQAKAGAIAKIBFBSQAIAHAGAJQAEAHADAIQAFARAKAPQAKAQAHARIAHASIgHgSQgHgRgKgQQgKgPgFgRQgDgIgEgHQgGgJgIgHIhFhSQgIgKgKgGQgRgKgQgGIgBAAIgCgBIAAAAQgIgCgHAAIgBAAIAAAAQgBgJAFgHQAKgSASgGQAQgGABgKQACgTALgOQALgPATgDQASgDATADIAEAAIAFAAQAIAAAGgEIABgBIAMgDIADAAQAFgBAGgDQAFgCgBgEQADAJAPgIIgIgLIgDgEIAYgCQATgDAMgMQAMgLAJgOIAHgKIAKgRIADADQgJAGgEAIQgDAJADAKQABAFAEACIACAAQgBABAAAHQABAFACAFIABABIABABQAAAFAEADIADADIAAAAIACAAQACAGAHADQAJADAJgCQAFgBAAgEIAGADQAFACAEgBQAFAAAEgEQACgDgBgDQAEgBABgGQACABAFgFIACgDIAAAAIACADIACgCQAJACAGAGIAEADIACADQALAOAJARQAJARgBAUIgCAkIgBAZIgHAAQgTgDgTgBIgCAAIgagCIAAAAQh0gbAAACIAAAAQgegGgHgEQgPgHgSgHIgEgBIgBAAQgFAAgDACQgEACgDAFQgJAOgHARQgEAJAAAKIAAAAIgFAGIgRAWIgEAGQgGAHA4BOQAGgLABgaQABgLADgEIABAAIAKAAQBTABAMgDIArgKIAUgDIAmgJQAbgIAYgMQACAUAFASQAEASgBATQgBASgGASIgMAiQgFATgDASQgDARADALIgdAKIgiALQgSAHgTgBQgTAAgRgHQgRgHgSgFQgMgDgJgFIAIAOQAIAPgGATQgHASgMAPQgLAMgPANQgOAMgRAGQgSAGgVgDQgQgDgMgEIgCgBIgKgHIAAgBIAAgCIAAgFQAAgMABgMIAGglQADgQAAgSIAAgFQAAgTgFgSIgEgPQgCgJgTgvQATAvACAJIAEAPQAFASAAATIAAAFQAAASgDAQIgGAlQgBAMAAAMIAAAFIAAACIAAABIAAAGQACAUAIAPIABADIAIAMIAAADQABAPAFANIAKAiQABAKgBAIQgBAIgHAFQgNALgVgCQgTgBgRAJIgEACIgMAGIgRAKQgQAKgRAFQgKADgLAAQgHAAgJgBgADRA5IABAAIACAAIgCAAIgBAAIAAAAIgBAAIgCAAIgDAAQgUgDgTgFIgigJIAiAJQATAFAUADIADAAIACAAIABAAIAAAAgAAxASIgDgDQg3g9gEAAIAAAAIAAAAIAAAAIAAAAQAEAAA3A9IADADIAAAAgAjiCOIgBgCIABACIgBgCIAAAAIABgBIAEAJIgEgGgAiYBaIAEAJIADAKIACAHIgJgagAiYBaIAAAAgAk5BWQgHgOAKgEIAAAVIgDgDgAlEA6QgEgDABgEIABgCQAEgKANAAIgBAZQgIgCgGgEgAkeAOIAHAEIAEABIgSADQAEgCADgGgAhahjIAAAAgABFjaIABgBIABADIgCgCgABXjuQgTAAgHgOIgKgRIgGgJQgIgNgHgRQgGgPABgTIABgkQABgTgDgPQAJABAHgFIABAAQAPgEACgNQATABALgQQAIAPARAAQAJAAALgDQAIgDAFgEQAKAUAOAMQAGAEgBAMQAUAIgJARQgDAGAEADQAOAJAMgLQADgDAFADQAQAKgNAQIgHAGQgEADgGABIgGAAIgDABQgHAGABAJIABAEIgKARIgHAKQgJAOgMALQgMAMgTADIgYACIgHAAIgGAAgAA/kdIABAAIAAACQAAAPAEADQADADAKABQAJACAJgWQABgFAHgLIAEgGQgXAIgCgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgGACQgGABgFgDIgBgBIgFAMIAAAAIADgBIABABgAB8kwIABADIABAEIAKANIgKgNIgBgEIgBgDQAAgEAFgKQgFAKAAAEIAAAAgABDk7QAIgBAIgFIAAAAIABAAIAAAAIAAAAIgBAAIAAAAQgIAFgIABIAAAAIAAAAIgFgBQgHgBgBgFIgBgGQAAgEABgDIAAAAQADgFAIAAIAAAAIAAAAIAFABIAAAAIAAAAIgFgBIAAAAIAAAAQgIAAgDAFIAAAAQgBADAAAEIABAGQABAFAHABIAFABIAAAAIAAAAgABhmFIgLAFQABABgCAHIgCAGQgCAJAFAHIABACIADACQAFAGAKgFQAGgDADgHQAGgPgKgMQgCgCgDgBIgFgCIgDACgAAumCIgCABQgEAEgCAFQgCAGADAIIAAAAQACAHAEADQAHAHAOgFQAEgCABgEQADgHAAgGQAAgFgDgFIgDgEIgCgDQgDgGgFAAQgFAAgHAGgAAimNIABgBIAAAAQAJgGAKAAIAAAAIAAAAQAGAAAGADIABAAIAAAAIAAAAIgBAAQgGgDgGAAIAAAAIAAAAQgKAAgJAGIAAAAIgBABgABZmRIAAgBIABAAIABgBIABgBQAIgHAJAAIAAAAIAAAAQAFAAAFACIACABIAAAAIAGAFIgGgFIAAAAIgCgBQgFgCgFAAIAAAAIAAAAQgJAAgIAHIgBABIgBABIgBAAIAAABg");
	this.shape_25.setTransform(89.3,61.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.1,1,1).p("AgQkcQAEgEAGgBQAIgDAJADQAFABACADQAEgCAFAAQAKgBAKAEQAIAEAGAIQAFAGACAFIABAAQABAAABAAQAJgCAJAEQAIADAEAJQADAJABAJQAEABAEADQAIAFABAKQABAEgBADQADAAAFAEQAFAEgBAIQAAABgBABQAFACAEAEQAHAIgGAJQgBABgBABQAFAEADAGQAFALgKAFIAAAAQABABABABQAGAJgHAIQgEAGgFACQABAEAAAEQgBAGgDAGQAEAFABAGQABAIgEAGQABAAAAABQAEAHABAHQACAJgGAEQADAHgDAIQgDAKgHgBQADAFgCAFQgDALgGgGQAHAMgJAIQgBABgCABQgBgBAAgBQAAgBAAgBQAAABgBABQgBABgBABQgEAFgDAAQAAAFgEABQgDABgDgBABWjgQACgCACgBAA4j7QgBADAAACAh4iPQAAAAAAAAQgIAFgJgBIAAAAQgLgCgCgJAhKhvQAIgEACgBQACgBACAAQACAAADABQADABACACQAKAMgHAPQgDAHgGADQgJAFgGgFQgBgBgBgCQgBAAAAgBQgFgHACgKQAAgDABgCQADgIgBgBgAhJhPQAJABADgKQAGgQgTgHAhiA+QAEgBAIgDQACAAACAAAhoA3QgFABgBgCAhxAyQgEADgEgBQgIgBAAgJQgGAIgKgDAh2BCQADABACgBQAJAAAGgEAAfAaQgCgEgBgGQgBgGABgBQAAgBgBAAQgFgCgBgFQgDgJAEgIQADgJAKgGQgCgBgBgCQgBgBAAgDQgCgJAIgFAAhAcQgBAAAAgBQgBgBAAAAQACAAAAACgABjAmQABADgCADQgEAEgGAAQgEABgEgCQgEgBgCgCQgBAEgEABQgKACgIgDQgIgDgBgGQgBAAgBAAAAkAlQgDgEAAgFABnAgQgCAAgCgHAhvEjQAFgLACgaQAAgMAEgE");
	this.shape_26.setTransform(105.5,34.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.1,1,1).p("AD0i+QAAAAABAAQACAAACAAQAIACAHAGQACABABACQABABACACQAKAOAJARQAKARgCAUQgBASAAASQgBAOAAALQgEAAgEAAQgSgDgUgBQgBAAgBAAACpkMQABgBABgBQADAAADAAQAGgBAFgDQAEgCADgEQANgQgRgKQgEgDgEADQgLALgOgJQgFgDADgGQAJgRgUgIQACgMgGgEQgPgMgJgUQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUgBQAAgDAAgEAA8lYQAPgPARAIQADACADADAgwlOQgOgGAAgPQAAgKAEgHQgNgSADgSQACgQAPgFQgHgUATgLQAMgGAJABQAAgQAKgMQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgCAIAEQABABABABQAbgLAPALAgnkzQgEgFgDgHQgDgIABgHQABAAAAAAQAEABAFAAAAPlIQAAgBABAAQAOgLAHALQAAABABACQACACACADQACAEAAAGQAAAFgCAHQgCAEgDACQgOAFgIgGQgEgEgCgHIAAAAQAAgCAAgCQAAgFAAgFQABgFAFgEgAgFljQAEAQgBASQgBAQgBAUQgBATAGAPQAHARAIANQADAFADAFQAFAHAEAJQAIAOATAAQAGABAGgBQACACABACQAFAFAEAGQgPAIgDgJQAAAEgEACQgHAEgEAAAAFlUQARgMAQAIAAcl4QgBANgQAEAApkaQgNgCgDAGQgDAFACAIQACAFAHABQALACALgHAAkjkIABAAQAdACAlgUQghAIgCgBQgEgBgCABQgOAGgLgHQgEAGgDAGQADAAADAAQAAABABABQAAAPASgBQATAAAMgMQABgHAQgPAgskJQgEgCgEgDQgFgEAAgFQgCgVAUgHQAEAEAFADQAFACAGACAgskJQADABAEABAgNioIgBAAQgLgGAHgOQgTgGANgVQgWgGAPgPQgQgIADgVAh4gqQAAgJAEgHQAKgSATgGQAPgGACgKQACgTALgOQALgPATgDQATgDARADQACAAACAAAAtidQgBAAgBgBQgBAAgBgBQgBgBAAgBQgCgCAAgEQgFAFgEACQgBAAgBAAAAVihQgCgBgBgDAAhiZQAAAAAAAAADdg1QgDAAgDgBQhJgPglgIQgdgHgHgEQgQgHgRgHQgDAAgCgBQAAAAgBAAQgEAAgEACQgDACgDAFQgJAOgHARQgDAKgBAJABzkNQgEAKAAAEQAAAGALAOABGi1QANAAAMgCQASgDANgMQALgLAKgOQADgFADgFQAFgIAGgJAAJkxQgCgIACgGAAPkmQATgRgTgRAAUBLQg4hOAFgHQADgDACgDQAIgJAKgNQACgDACgDQAAAJACAIQACAOAfAjQAAAAAAAAQAFAAAFABQBTAAAMgDQAWgFAWgEQAJgCAKgCQAUgEATgEQAagIAZgMQACAUAEARQAFASgBATQgCATgGASQgGARgFARQgGATgDASQgDASADALQADgCAEgCQAFAEADAHQAGAQgDAVQgDAUgKARQgGALgHAKQgEAGgEAGQgKAPgJAQQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAAAQgFACgEABQgSAEgSAEQgCAAgBABQgQADgSABQgJABgJAAQgBAAAAAAQgKAAgJgCQgJgBgIgDQgJgCgIgEQgQgIgOgKQgPgLgNgLQgMgJgOgMQgBAAgBgBQgFgEgFgDQAAgBAAgCQAAgOACgPQADgTADgSQADgTAAgUQgBgTgEgSQgCgHgCgIQgDgJgSgvABkBhQARAEASAFQATAFATADQAFABAEgBAAUBLQhAhNgFgFQgJgJgKgHQgQgKgRgGQgJgDgKAAQABADAAACABQC9QgEgJgEgJQgGgRgLgQQgJgPgGgRQgDgIgEgHQgFgIgIgIAgrALQABgEA+BEABQC9QADAHAEAHQAJAPgHATQgGASgNAPQgLAMgOANQgOAMgSAGQgRAGgUgDQgRgDgNgEAgvFlQgEgGgDgGAhCEtQAAADABADQABAUAIAPQABABABACQAHAAAAAHQAAADAAACQAAACAAABQABAPAFANQAGAQAEASQADALgCAIQgCAHgGAFQgOALgVgCQgSgBgRAJQgCABgCABQgHADgGADQgIAFgJAFQgQAKgQAFQgRAGgUgEQgUgEgMgKQgGgFgNABQgWADgHgOQgDgEgBgEQgCgNANgGQARgGAUAAQATAAARgGQARgGARgIQASgJAMgOQANgPgDgTQgDgTgCgUQgDgTgDgTQgDgSgEgSQgFgSgCgTQgDgRgFgTQgBgDgCgEQgFgOgDgMQgUg7AAgCQAAgGgBgHQgCgSAAgUQAAgMAEgLQACgHADgFQAKgPAPgJQAPgJASgGQAIgDAJAAAEPC+QgOAFgOAEQgSAFgRAGQgRAHgUgBQgSAAgRgHQgSgHgSgFQgMgDgIgFAEngvQANgCAKgOQANgRAMAAQAGAVgVAJQgFADgFAEQAIgCAOAAQAWAAALAMQAHAHgJAHQgYARgbgMQgOgHgNgCQgCABgCABAEngvQAAADAAACAj4DVQgCgEgCgEQgCgEgCgEQgVgxgHguIgBgKQgFglAFgjQABgFACgEQAGgKAMgGQANgHASAAQAWABAFAUAlCBPQADgCADgFQADABAEACQACABACAAAitCtQAAgDgBgDQgCgGgCgFQgCgFgBgEAl3AxQABACAAABAknHUQgMgDAAgNQgHgLgQgLQAAgDACgCQADgHAKgDQABAAAAAAQABgBAAAAQAMgEANgDQAEAAAEgBQASgDAQgJQARgJANgOQABgBABgBQABgCABgBQACgCAAgDQAEgJgDgOQgDgTgGgSQgFgSgGgTQgFgTgHgSQgBgCgBgCIgBgBIgEgJIgHgOIgBgCAj0DeQgCgGgCgFAknHUQAEAAAFAA");
	this.shape_27.setTransform(92.3,56);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.1,1,1).p("AD5i9QAIACAHAFQACACABABQABACACABQAKAOAJASQAKARgCAUQgBASAAASQgBANAAALQgEABgEgBQgSgDgUgBQgBAAgBAAAgwlNQgOgHAAgPQAAgKAEgHQgNgRADgSQACgRAPgEQgHgVATgKQAMgHAJABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgDAIAFQABAAABABQAbgLAPAMQAEgEAGgCQAJgCAJACQAFACACADQAEgDAFAAQAKAAAKAEQAIAEAGAHQAFAHACAFIABAAQABgBABAAQAJgBAJADQAIAEAEAJQADAIABAKQAEABAEACQAIAGABAJQAAAEAAADQADABAFADQAFAFgBAIQgBABAAABQAFABAEAFQAHAHgGAJQgBABgBABQAFAFADAGQAFALgKAEIAAABQABABABABQAGAIgHAJQgEAFgFADQABADAAAFQgBAGgDAGQAEAEABAGQABAIgEAGQABABAAABQAEAHABAHQACAIgGAFQADAGgDAJQgDAJgHAAQADAEgCAGQgDAMgGgHQAHAMgJAJADam4QACgCACgBAC8nSQgBACAAADAA8lYQAPgPARAJQADABADADACkj5QgBgCAAgCQgCgKAIgFQABgBABAAQADAAADAAQAGgBAFgDQAEgDADgDQANgRgRgKQgEgCgEADQgLALgOgJQgFgDADgHQAJgRgUgHQACgMgGgFQgPgLgJgVQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUAAQAAgEAAgEAgnkzQgEgFgDgGQgDgJABgGQABAAAAAAQAEABAFgBAAcl3QgBAMgQAFQAAAAAAAAQgIAEgIgBIAAAAQgLgBgCgKAAPlIQAAAAABgBQAOgKAHAKQAAACABACQACACACACQACAEAAAGQAAAGgCAHQgCAEgDABQgOAGgIgHQgEgEgCgGIAAgBQAAgCAAgCQAAgEAAgFQABgGAFgEgAgFljQAEAQgBASQgBARgBATQgBAUAGAPQAHARAIAMQADAFADAFQAFAIAEAIQAIAOATABQAGAAAGAAQACABABACQAFAFAEAGQgPAJgDgKQAAAEgEADQgHADgEABQgCAAgCAAQgBgBgBAAQgBgBgBgBQgBAAAAgBQgCgDAAgEQgFAFgEACQgBABgBAAQgFAAgBgBQgCgCgBgCQgEACgEAAQgIgBAAgJQgFAHgKgCIgBAAQgLgHAHgOQgTgGANgUQgWgGAPgQQgQgHADgVQgEgCgEgEQgFgDAAgFQgCgWAUgHQAEAEAFADQAFADAGABAAFlUQARgLAQAIAA6kmQgBgBAAgBQgFgHACgJQAAgDABgDQADgHgBgBQAIgFACgBQACAAACgBQACAAADABQADABACADQAKALgHAPQgDAIgGADQgJAFgGgGQgBgBgBgBgAA5lGQATAGgGAQQgDAKgJAAAApkaQgNgBgDAGQgDAEACAJQACAFAHABQALACALgIABSj2QgFAEgNAMQgOAMgHgEQgIgEAAgCIgBAAQgBAAgBAAQgBAAgBAAIgBAAQADgGACgGQABABABABQAFADAFgBQADgBADgBQACgBADABQABAAAYgIQgDADgBADQgIALAAAGQgKAVgJgBQgJgBgEgDQgDgDAAgQAgskIQADABAEAAAh4gpQAAgJAEgIQAKgRATgHQAPgFACgKQACgUALgOQALgPATgDQATgDARADQACABACAAQADAAACAAQAJAAAGgFQAAAAAAAAQAEgBAIgCADdg0QgDgBgDAAQhJgPglgJQgdgHgHgDQgQgIgRgGQgDgBgCAAQAAAAgBAAQgEgBgEADQgDACgDAFQgJAOgHARQgDAJgBAJAD0i+QgBABgBACQgEAEgDAAQAAAFgEACQgDAAgDgBAD1i+QgBAAAAAAQAAgBABgBQAAABAAABQACAAACABAD1i+QAAABABACQACgBABgBABjkFQgEALAAAEQAAABAAABQABACABACQADAGAGAHABGi0QANgBAMgBQASgDANgNQALgLAKgOQADgFADgEQAFgJAGgIACli6QgBgBAAgBQgBAAAAgBQgDgEAAgGQgBgGABgBQgBAAAAgBQgFgCgBgEQgDgLAEgIQADgIAKgHQgDgBAAgBADniwQABADgCACQgEAEgGABQgEAAgEgBQgEgBgCgCQgBADgEABQgKACgIgDQgIgDgBgFQgBAAgBAAACoiyQgDgEAAgEACji9QACABAAACADri3QgCAAgCgHAAJkxQgCgHACgGAAPkmQATgQgTgSAAfAWQAAABAAAAQAFAAAFAAQBTABAMgDQAWgFAWgFQAJgCAKgCQAUgEATgEQAagHAZgMQACAUAEARQAFARgBAUQgCATgGARQgGARgFASQgGASgDASQgDASADALQADgBAEgCQAFADADAIQAGAPgDAWQgDATgKASQgGAKgHALQgEAGgEAFQgKAQgJAPQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAABQgFABgEABQgSAFgSADQgCABgBAAQgQADgSACQgJABgJAAQgBAAAAAAQgKgBgJgBQgJgCgIgCQgJgDgIgEQgQgHgOgLQgPgLgNgKQgMgKgOgLQgBgBgBAAQgFgEgFgDQAAgCAAgBQAAgPACgOQADgTADgSQADgTAAgUQgBgTgEgSQgCgIgCgIQgDgJgSguABkBiQARADASAFQATAGATACQAFABAEAAAAUBMQg4hOAFgHQADgDACgDQAIgKAKgMQACgDACgDQAAAIACAIQACAOAfAjAAUBMQAFgMACgaQAAgMAEgEAAUBMQhAhNgFgGQgJgJgKgGQgQgKgRgGQgJgDgKAAQABACAAADAAUBMQAIAHAFAJQAEAHADAHQAGASAJAPQALAQAGAQQAEAKAEAIQADAIAEAGQAJAPgHAUQgGASgNAOQgLANgOAMQgOAMgSAGQgRAHgUgEQgRgCgNgEAgrALQABgDA+BEAg2FZQADAGAEAHAhCEuQAAADABADQABATAIAPQABACABABQAHABAAAHQAAACAAADQAAABAAACQABAPAFANQAGAQAEARQADALgCAIQgCAIgGAFQgOAKgVgBQgSgBgRAIQgCABgCABQgHADgGAEQgIAFgJAFQgQAJgQAGQgRAFgUgEQgUgEgMgKQgGgFgNACQgWACgHgNQgDgFgBgEQgCgNANgFQARgHAUAAQATAAARgFQARgGARgJQASgIAMgOQANgPgDgTQgDgUgCgTQgDgTgDgTQgDgSgEgTQgFgSgCgSQgDgSgFgSQgBgEgCgEQgFgOgDgMQgUg7AAgCQAAgFgBgHQgCgTAAgTQAAgNAEgLQACgGADgGQAKgPAPgJQAPgJASgGQAIgDAJABABQC9QAIAGAMADQASAEASAHQARAHASABQAUAAARgGQARgGASgGQAOgEAOgFAEngvQANgBAKgOQANgSAMABQAGAUgVAKQgFADgFAEQAIgCAOAAQAWAAALALQAHAIgJAGQgYARgbgMQgOgGgNgCQgCABgCABAEngvQAAADAAADAj4DVQgCgEgCgDQgCgFgCgEQgVgwgHguIgBgLQgFgkAFgkQABgFACgEQAGgKAMgFQANgIASABQAWAAAFAVAlCBQQADgDADgFQADACAEABQACABACABAitCtQAAgDgBgDQgCgFgCgFQgCgFgBgFAl3AyQABABAAACAknHUQgMgDAAgNQgHgLgQgLQAAgCACgCQADgHAKgEQABAAAAAAQABAAAAAAQAMgEANgDQAEgBAEgBQASgDAQgIQARgJANgOQABgBABgCQABgBABgCQACgCAAgCQAEgKgDgOQgDgSgGgTQgFgSgGgSQgFgTgHgSQgBgDgBgCIgBgBIgEgJIgHgNIgBgCAj0DeQgCgFgCgFAknHUQAEABAFAA");
	this.shape_28.setTransform(92.3,55.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag8CvIgDgBIgBgCIgBgCIgBABIgCgHQgFAGgEABIgCABQgEAAgCgBIgDgEQgDACgFAAQgHgBAAgJQgHAHgKgCIAAAAQgMgHAHgOQgTgFAOgVQgWgGAOgQQgQgHAEgVIAGABIgGgBIgJgGQgEgDgBgFQgCgWAVgHQgFgFgCgGQgEgIACgGQgOgGAAgQQAAgJADgIQgNgRADgSQADgRAOgEQgGgVATgKQALgHAKABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAJgLAOgEQAJgDAHAFIACABQAbgLAPAMQAEgEAGgCQAIgCAJACQAFACADADQAEgDAFAAQAKAAAJAEQAJAEAGAHIAHAMIAAAAIACgBQAKgBAJADQAIAEAEAJQADAJAAAJQAFABAEACQAIAGABAJIgBAHQAEABAEADQAGAFgCAIIAAACQAFABAEAFQAGAHgFAJIgCACQAFAFADAGQAFALgKAEIgBABIACACQAGAIgGAIQgFAGgFACQACADAAAFQgBAGgDAGQADAFABAFQABAIgDAGIABACQAEAHABAHQABAIgFAFQADAHgDAIQgDAKgHgBQACAEgBAGQgDAMgGgHQAGAMgJAJIgEgBIAAgCIAAACIgCADQgFAEgCAAQgDAAgBgHQABAHADAAQgBAGgEABIgCAAIAAAAIgEgBIAEABIAAAAIACAAQABADgCACQgEAFgFAAQgEAAgFgBIgGgDQAAAEgFAAQgJACgJgDQgHgDgCgFIgCAAIAAAAIgDgDQgEgEAAgEQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgCgEgBgGQAAgGABgBIgCgBQgEgCgBgEQgDgLADgIQAEgIAJgHIgDgCIgBgEQgBgKAHgFIADgBIAGAAQAGgBAEgDIAHgGQANgRgQgKQgFgCgDADQgMALgOgJQgEgDADgHQAJgRgUgGQABgMgGgFQgOgLgKgVQgFAEgHADQgLAEgJAAQgRAAgIgQQgLAQgTAAIAAgCIgBgGIABAGIAAACQgBAMgQAFIgBAAQgHAEgJgBIgBAAQgKgBgCgKQACAKAKABIABAAQADAQgBARIgBAkQgBAUAGAPQAHARAIAMIAGAKIAKAQQAHAOATABIANAAIADADIAIALQgPAJgDgKQABAEgFADQgGADgFABIgCAAIgBAAgAiIAfQAEADAGABQgGgBgEgDQgFgCgEgFQAEAFAFACgAiUAAIABAAIACgBIgCABIgBAAIAAAAIAAAAIgCAAIgDgBIgBAAIABAAIADABIACAAIAAAAIAAAAgABwhsIADgDIgDADgABRiBIABgFIgBAFgACBCUIAAAAgACKCNIAEABIgCACIgCgDgAhgAbIAAgBIAAgEIgBgJQACgFAEgFQAUASgTAQQgEgDgCgHgAgwAlIgBgCQgFgHACgJIACgGQACgHgBgBQATAHgFAPQgDAKgJAAIgBAAg");
	this.shape_29.setTransform(102.9,22.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.1,1,1).p("AD5i9QAIACAHAFQACACABABQABACACABQAKAOAJASQAKARgCAUQgBASAAASQgBANAAALQgEABgEgBQgSgDgUgBQgBAAgBAAAgwlNQgOgHAAgPQAAgKAEgHQgNgRADgSQACgRAPgEQgHgVATgKQAMgHAJABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgDAIAFQABAAABABQAbgLAPAMQAEgEAGgCQAJgCAJACQAFACACADQAEgDAFAAQAKAAAKAEQAIAEAGAHQAFAHACAFIABAAQABgBABAAQAJgBAJADQAIAEAEAJQADAIABAKQAEABAEACQAIAGABAJQAAAEAAADQADABAFADQAFAFgBAIQgBABAAABQAFABAEAFQAHAHgGAJQgBABgBABQAFAFADAGQAFALgKAEIAAABQABABABABQAGAIgHAJQgEAFgFADQABADAAAFQgBAGgDAGQAEAEABAGQABAIgEAGQABABAAABQAEAHABAHQACAIgGAFQADAGgDAJQgDAJgHAAQADAEgCAGQgDAMgGgHQAHAMgJAJADam4QACgCACgBAC8nSQgBACAAADACkj5QgBgCAAgCQgCgKAIgFQABgBABAAQADAAADAAQAGgBAFgDQAEgDADgDQANgRgRgKQgEgCgEADQgLALgOgJQgFgDADgHQAJgRgUgHQACgMgGgFQgPgLgJgVQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUAAQAAgEAAgEAA8lYQAPgPARAJQADABADADAgnkzQgEgFgDgGQgDgJABgGQABAAAAAAQAEABAFgBAAcl3QgBAMgQAFQAAAAAAAAQgIAEgIgBIAAAAQgLgBgCgKAAPlIQAAAAABgBQAOgKAHAKQAAACABACQACACACACQACAEAAAGQAAAGgCAHQgCAEgDABQgOAGgIgHQgEgEgCgGIAAgBQAAgCAAgCQAAgEAAgFQABgGAFgEgAgFljQAEAQgBASQgBARgBATQgBAUAGAPQAHARAIAMQADAFADAFQAFAIAEAIQAIAOATABQAGAAAGAAQACABABACQAFAFAEAGQgPAJgDgKQAAAEgEADQgHADgEABQgCAAgCAAQgBgBgBAAQgBgBgBgBQgBAAAAgBQgCgDAAgEQgFAFgEACQgBABgBAAQgFAAgBgBQgCgCgBgCQgEACgEAAQgIgBAAgJQgFAHgKgCIgBAAQgLgHAHgOQgTgGANgUQgWgGAPgQQgQgHADgVQgEgCgEgEQgFgDAAgFQgCgWAUgHQAEAEAFADQAFADAGABAAFlUQARgLAQAIAA5lGQAIgFACgBQACAAACgBQACAAADABQADABACADQAKALgHAPQgDAIgGADQgJAFgGgGQgBgBgBgBQgBgBAAgBQgFgHACgJQAAgDABgDQADgHgBgBgAA6kmQAJAAADgKQAGgQgTgGAApkaQgNgBgDAGQgDAEACAJQACAFAHABQALACALgIABSj2QgFAEgNAMQgOAMgHgEQgIgEAAgCIgBAAQgBAAgBAAQgBAAgBAAIgBAAQADgGACgGQABABABABQAFADAFgBQADgBADgBQACgBADABQABAAAYgIQgDADgBADQgIALAAAGQgKAVgJgBQgJgBgEgDQgDgDAAgQAgskIQADABAEAAAh4gpQAAgJAEgIQAKgRATgHQAPgFACgKQACgUALgOQALgPATgDQATgDARADQACABACAAQADAAACAAQAJAAAGgFQAAAAAAAAQAEgBAIgCADdg0QgDgBgDAAQhJgPglgJQgdgHgHgDQgQgIgRgGQgDgBgCAAQAAAAgBAAQgEgBgEADQgDACgDAFQgJAOgHARQgDAJgBAJAD0i+QgBABgBACQgEAEgDAAQAAAFgEACQgDAAgDgBAD1i+QgBAAAAAAQAAgBABgBQAAABAAABQAAABABACQACgBABgBAD1i+QACAAACABABjkFQgEALAAAEQAAABAAABQABACABACQADAGAGAHABGi0QANgBAMgBQASgDANgNQALgLAKgOQADgFADgEQAFgJAGgIACli6QgBgBAAgBQgBAAAAgBQgDgEAAgGQgBgGABgBQgBAAAAgBQgFgCgBgEQgDgLAEgIQADgIAKgHQgDgBAAgBADniwQABADgCACQgEAEgGABQgEAAgEgBQgEgBgCgCQgBADgEABQgKACgIgDQgIgDgBgFQgBAAgBAAACoiyQgDgEAAgEACji9QACABAAACADri3QgCAAgCgHAAJkxQgCgHACgGAAPkmQATgQgTgSAAfAWQAAABAAAAQAFAAAFAAQBTABAMgDQAWgFAWgFQAJgCAKgCQAUgEATgEQAagHAZgMQACAUAEARQAFARgBAUQgCATgGARQgGARgFASQgGASgDASQgDASADALQADgBAEgCQAFADADAIQAGAPgDAWQgDATgKASQgGAKgHALQgEAGgEAFQgKAQgJAPQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAABQgFABgEABQgSAFgSADQgCABgBAAQgQADgSACQgJABgJAAQgBAAAAAAQgKgBgJgBQgJgCgIgCQgJgDgIgEQgQgHgOgLQgPgLgNgKQgMgKgOgLQgBgBgBAAQgFgEgFgDQAAgCAAgBQAAgPACgOQADgTADgSQADgTAAgUQgBgTgEgSQgCgIgCgIQgDgJgSguABkBiQARADASAFQATAGATACQAFABAEAAAAUBMQg4hOAFgHQADgDACgDQAIgKAKgMQACgDACgDQAAAIACAIQACAOAfAjAAUBMQAFgMACgaQAAgMAEgEAAUBMQhAhNgFgGQgJgJgKgGQgQgKgRgGQgJgDgKAAQABACAAADAAUBMQAIAHAFAJQAEAHADAHQAGASAJAPQALAQAGAQQAEAKAEAIQADAIAEAGQAJAPgHAUQgGASgNAOQgLANgOAMQgOAMgSAGQgRAHgUgEQgRgCgNgEAgrALQABgDA+BEAg2FZQADAGAEAHAhCEuQAAADABADQABATAIAPQABACABABQAHABAAAHQAAACAAADQAAABAAACQABAPAFANQAGAQAEARQADALgCAIQgCAIgGAFQgOAKgVgBQgSgBgRAIQgCABgCABQgHADgGAEQgIAFgJAFQgQAJgQAGQgRAFgUgEQgUgEgMgKQgGgFgNACQgWACgHgNQgDgFgBgEQgCgNANgFQARgHAUAAQATAAARgFQARgGARgJQASgIAMgOQANgPgDgTQgDgUgCgTQgDgTgDgTQgDgSgEgTQgFgSgCgSQgDgSgFgSQgBgEgCgEQgFgOgDgMQgUg7AAgCQAAgFgBgHQgCgTAAgTQAAgNAEgLQACgGADgGQAKgPAPgJQAPgJASgGQAIgDAJABABQC9QAIAGAMADQASAEASAHQARAHASABQAUAAARgGQARgGASgGQAOgEAOgFAEngvQANgBAKgOQANgSAMABQAGAUgVAKQgFADgFAEQAIgCAOAAQAWAAALALQAHAIgJAGQgYARgbgMQgOgGgNgCQgCABgCABAEngvQAAADAAADAj4DVQgCgEgCgDQgCgFgCgEQgVgwgHguIgBgLQgFgkAFgkQABgFACgEQAGgKAMgFQANgIASABQAWAAAFAVAlCBQQADgDADgFQADACAEABQACABACABAitCtQAAgDgBgDQgCgFgCgFQgCgFgBgFAl3AyQABABAAACAknHUQgMgDAAgNQgHgLgQgLQAAgCACgCQADgHAKgEQABAAAAAAQABAAAAAAQAMgEANgDQAEgBAEgBQASgDAQgIQARgJANgOQABgBABgCQABgBABgCQACgCAAgCQAEgKgDgOQgDgSgGgTQgFgSgGgSQgFgTgHgSQgBgDgBgCIgBgBIgEgJIgHgNIgBgCAj0DeQgCgFgCgFAknHUQAEABAFAA");
	this.shape_30.setTransform(92.3,55.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.1,1,1).p("AD0i+QAAAAABAAQACAAACAAQAIACAHAGQACABABACQABABACACQAKAOAJARQAKARgCAUQgBASAAASQgBAOAAALQgEAAgEAAQgSgDgUgBQgBAAgBAAAA8lYQAPgPARAIQADACADADACpkMQABgBABgBQADAAADAAQAGgBAFgDQAEgCADgEQANgQgRgKQgEgDgEADQgLALgOgJQgFgDADgGQAJgRgUgIQACgMgGgEQgPgMgJgUQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUgBQAAgDAAgEAgwlOQgOgGAAgPQAAgKAEgHQgNgSADgSQACgQAPgFQgHgUATgLQAMgGAJABQAAgQAKgMQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgCAIAEQABABABABQAbgLAPALAgnkzQgEgFgDgHQgDgIABgHQABAAAAAAQAEABAFAAAAPlIQAAgBABAAQAOgLAHALQAAABABACQACACACADQACAEAAAGQAAAFgCAHQgCAEgDACQgOAFgIgGQgEgEgCgHIAAAAQAAgCAAgCQAAgFAAgFQABgFAFgEgAgFljQAEAQgBASQgBAQgBAUQgBATAGAPQAHARAIANQADAFADAFQAFAHAEAJQAIAOATAAQAGABAGgBQACACABACQAFAFAEAGQgPAIgDgJQAAAEgEACQgHAEgEAAAAFlUQARgMAQAIAAcl4QgBANgQAEAApkaQgNgCgDAGQgDAFACAIQACAFAHABQALACALgHABnj2QglAUgdgCIgBAAQAAABABABQAAAPASgBQATAAAMgMQABgHAQgPQghAIgCgBQgEgBgCABQgOAGgLgHQgEAGgDAGQADAAADAAAgskJQgEgCgEgDQgFgEAAgFQgCgVAUgHQAEAEAFADQAFACAGACAgskJQADABAEABAgNioIgBAAQgLgGAHgOQgTgGANgVQgWgGAPgPQgQgIADgVAh4gqQAAgJAEgHQAKgSATgGQAPgGACgKQACgTALgOQALgPATgDQATgDARADQACAAACAAAAtidQgBAAgBgBQgBAAgBgBQgBgBAAgBQgCgCAAgEQgFAFgEACQgBAAgBAAAAVihQgCgBgBgDAAhiZQAAAAAAAAADdg1QgDAAgDgBQhJgPglgIQgdgHgHgEQgQgHgRgHQgDAAgCgBQAAAAgBAAQgEAAgEACQgDACgDAFQgJAOgHARQgDAKgBAJABzkNQgEAKAAAEQAAAGALAOABGi1QANAAAMgCQASgDANgMQALgLAKgOQADgFADgFQAFgIAGgJAAJkxQgCgIACgGAAPkmQATgRgTgRAAUBLQg4hOAFgHQADgDACgDQAIgJAKgNQACgDACgDQAAAJACAIQACAOAfAjQAAAAAAAAQAFAAAFABQBTAAAMgDQAWgFAWgEQAJgCAKgCQAUgEATgEQAagIAZgMQACAUAEARQAFASgBATQgCATgGASQgGARgFARQgGATgDASQgDASADALQADgCAEgCQAFAEADAHQAGAQgDAVQgDAUgKARQgGALgHAKQgEAGgEAGQgKAPgJAQQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAAAQgFACgEABQgSAEgSAEQgCAAgBABQgQADgSABQgJABgJAAQgBAAAAAAQgKAAgJgCQgJgBgIgDQgJgCgIgEQgQgIgOgKQgPgLgNgLQgMgJgOgMQgBAAgBgBQgFgEgFgDQAAgBAAgCQAAgOACgPQADgTADgSQADgTAAgUQgBgTgEgSQgCgHgCgIQgDgJgSgvABkBhQARAEASAFQATAFATADQAFABAEgBAAUBLQhAhNgFgFQgJgJgKgHQgQgKgRgGQgJgDgKAAQABADAAACABQC9QgEgJgEgJQgGgRgLgQQgJgPgGgRQgDgIgEgHQgFgIgIgIAgrALQABgEA+BEABQC9QADAHAEAHQAJAPgHATQgGASgNAPQgLAMgOANQgOAMgSAGQgRAGgUgDQgRgDgNgEAg2FZQADAGAEAGAhCEtQAAADABADQABAUAIAPQABABABACQAHAAAAAHQAAADAAACQAAACAAABQABAPAFANQAGAQAEASQADALgCAIQgCAHgGAFQgOALgVgCQgSgBgRAJQgCABgCABQgHADgGADQgIAFgJAFQgQAKgQAFQgRAGgUgEQgUgEgMgKQgGgFgNABQgWADgHgOQgDgEgBgEQgCgNANgGQARgGAUAAQATAAARgGQARgGARgIQASgJAMgOQANgPgDgTQgDgTgCgUQgDgTgDgTQgDgSgEgSQgFgSgCgTQgDgRgFgTQgBgDgCgEQgFgOgDgMQgUg7AAgCQAAgGgBgHQgCgSAAgUQAAgMAEgLQACgHADgFQAKgPAPgJQAPgJASgGQAIgDAJAAAEPC+QgOAFgOAEQgSAFgRAGQgRAHgUgBQgSAAgRgHQgSgHgSgFQgMgDgIgFAEngvQANgCAKgOQANgRAMAAQAGAVgVAJQgFADgFAEQAIgCAOAAQAWAAALAMQAHAHgJAHQgYARgbgMQgOgHgNgCQgCABgCABAEngvQAAADAAACAj4DVQgCgEgCgEQgCgEgCgEQgVgxgHguIgBgKQgFglAFgjQABgFACgEQAGgKAMgGQANgHASAAQAWABAFAUAlCBPQADgCADgFQADABAEACQACABACAAAitCtQAAgDgBgDQgCgGgCgFQgCgFgBgEAl3AxQABACAAABAknHUQgMgDAAgNQgHgLgQgLQAAgDACgCQADgHAKgDQABAAAAAAQABgBAAAAQAMgEANgDQAEAAAEgBQASgDAQgJQARgJANgOQABgBABgBQABgCABgBQACgCAAgDQAEgJgDgOQgDgTgGgSQgFgSgGgTQgFgTgHgSQgBgCgBgCIgBgBIgEgJIgHgOIgBgCAj0DeQgCgGgCgFAknHUQAEAAAFAA");
	this.shape_31.setTransform(92.3,56);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC9A67").s().p("Ai2HAQgUgEgLgKQgGgFgNABQgWADgIgOIgDgJIAAABIABAAIABAAIAFAAIAAAAIAAAAIACAAIgCAAIAAAAIAAAAIgFAAIgBAAIgBAAIAAgBIgBgDQAAgKAMgFQAQgGAVAAQASAAARgGQARgGASgIQARgJAMgOQALgMAAgPIAAgHIgGgnIgFgmIgIgkQgEgSgDgTQgDgRgFgTIgCgHIgCgHIgDgKIgEgJIAJAaIACAHQAFATADARQADATAEASIAIAkIAFAmIAGAnIAAAHQAAAPgLAMQgMAOgRAJQgSAIgRAGQgRAGgSAAQgVAAgQAGQgMAFAAAKIABADQgMgDAAgMQgIgLgQgLIACgFQAEgHAKgDIABgBIAAAAIAagHIAIgBQASgDAQgJQARgJANgOIACgCIACgEIACgEQADgKgCgNQgEgTgFgSIgLglQgFgTgIgSIgCgFIAAgBIgFgKIgDgGIgEgJQgVgwgHguIgCgLQgEgjAEgjIAEgKQAFgKAMgGQANgHATAAQAVABAGAVIAFACQgEAMAAAMQAAAUACARIACANIATA9IgTg9IgCgNQgCgRAAgUQAAgMAEgMIAGgMQAKgPAOgJQAQgJARgGQAJgDAJAAIABAFIgBgFIAAAAIABAAQAHAAAIACIAAAAIACABIABAAQAQAGARAKQAKAGAIAKIBFBSQAIAHAGAJQAEAHADAIQAFARAKAPQAKAQAHARIAHASIgHgSQgHgRgKgQQgKgPgFgRQgDgIgEgHQgGgJgIgHIhFhSQgIgKgKgGQgRgKgQgGIgBAAIgCgBIAAAAQgIgCgHAAIgBAAIAAAAQgBgJAFgHQAKgSASgGQAQgGABgKQACgTALgOQALgPATgDQASgDATADIAEAAIAFAAQAIAAAGgEIABgBIAMgDIADAAQAFgBAGgDQAFgCgBgEQADAJAPgIIgIgLIgDgEIAYgCQATgDAMgMQAMgLAJgOIAHgKIAKgRIgKARIgHAKQgJAOgMALQgMAMgTADIgYACIgNAAQgTAAgHgOIgKgRIgGgJQgIgNgHgRQgGgPABgTIABgkQABgTgDgPQAJABAHgFIABAAQAPgEACgNQATABALgQQAIAPARAAQAJAAALgDQAIgDAFgEQAKAUAOAMQAGAEgBAMQAUAIgJARQgDAGAEADQAOAJAMgLQADgDAFADQAQAKgNAQIgHAGQgEADgGABIgGAAIgDABQgHAGABAJIABAEIADADQgJAGgEAIQgDAJADAKQABAFAEACIACAAQgBABAAAHQABAFACAFIABABIABABQAAAFAEADIADADIAAAAIACAAQACAGAHADQAJADAJgCQAFgBAAgEIAGADQAFACAEgBQAFAAAEgEQACgDgBgDQAEgBABgGQACABAFgFIACgDIAAAAIACADIACgCQAJACAGAGIAEADIACADQALAOAJARQAJARgBAUIgCAkIgBAZIgHAAQgTgDgTgBIgCAAIgagCIAAAAQh0gbAAACIAAAAQgegGgHgEQgPgHgSgHIgEgBIgBAAQgFAAgDACQgEACgDAFQgJAOgHARQgEAJAAAKIAAAAIgFAGIgRAWIgEAGQgGAHA4BOQAGgLABgaQABgLADgEIABAAIAKAAQBTABAMgDIArgKIAUgDIAmgJQAbgIAYgMQACAUAFASQAEASgBATQgBASgGASIgMAiQgFATgDASQgDARADALIgdAKIgiALQgSAHgTgBQgTAAgRgHQgRgHgSgFQgMgDgJgFIAIAOQAIAPgGATQgHASgMAPQgLAMgPANQgOAMgRAGQgSAGgVgDQgQgDgMgEIgCgBIgKgHIAAgBIAAgCIAAgFQAAgMABgMIAGglQADgQAAgSIAAgFQAAgTgFgSIgEgPQgCgJgTgvQATAvACAJIAEAPQAFASAAATIAAAFQAAASgDAQIgGAlQgBAMAAAMIAAAFIAAACIAAABIAAAGQACAUAIAPIABADIAIAMIAAADQABAPAFANIAKAiQABAKgBAIQgBAIgHAFQgNALgVgCQgTgBgRAJIgEACIgMAGIgRAKQgQAKgRAFQgKADgLAAQgHAAgJgBgADRA5IABAAIACAAIgCAAIgBAAIAAAAIgBAAIgCAAIgDAAQgUgDgTgFIgigJIAiAJQATAFAUADIADAAIACAAIABAAIAAAAgAAxASIgDgDQg3g9gEAAIAAAAIAAAAIAAAAIAAAAQAEAAA3A9IADADIAAAAgABBkdIABACQABAPARgBQAUAAAMgMQAAgHARgPQgiAIgCgBQgDgBgDABQgOAGgLgHIgHAMIADAAIADAAgACMk4QAAAGAMAOQgMgOAAgGQAAgEAFgKQgFAKAAAEIAAAAgABDk7QAIgBAIgFIAAAAIABAAIAAAAIAAAAIgBAAIAAAAQgIAFgIABIAAAAIAAAAIgFgBQgHgBgBgFIgBgGQAAgEABgDIAAAAQADgFAIAAIAAAAIAAAAIAFABIAAAAIAAAAIgFgBIAAAAIAAAAQgIAAgDAFIAAAAQgBADAAAEIABAGQABAFAHABIAFABIAAAAIAAAAgABhmFIgLAFQABABgCAHIgCAGQgCAJAFAHIABACIADACQAFAGAKgFQAGgDADgHQAGgPgKgMQgCgCgDgBIgFgCIgDACgAAumCIgCABQgEAEgCAFQgCAGADAIIAAAAQACAHAEADQAHAHAOgFQAEgCABgEQADgHAAgGQAAgFgDgFIgDgEIgCgDQgDgGgFAAQgFAAgHAGgAAimNIABgBIAAAAQAJgGAKAAIAAAAIAAAAQAGAAAGADIABAAIAAAAIAAAAIgBAAQgGgDgGAAIAAAAIAAAAQgKAAgJAGIAAAAIgBABgABZmRIAAgBIABAAIABgBIABgBQAIgHAJAAIAAAAIAAAAQAFAAAFACIACABIAAAAIAGAFIgGgFIAAAAIgCgBQgFgCgFAAIAAAAIAAAAQgJAAgIAHIgBABIgBABIgBAAIAAABgAjiCOIgBgCIABACIgBgCIAAAAIABgBIAEAJIgEgGgAiYBaIAEAJIADAKIACAHIgJgagAiYBaIAAAAgAk5BWQgHgOAKgEIAAAVIgDgDgAlEA6QgEgDABgEIABgCQAEgKANAAIgBAZQgIgCgGgEgAkeAOIAHAEIAEABIgSADQAEgCADgGgAhahjIAAAAgABFjaIABgBIABADIgCgCg");
	this.shape_32.setTransform(89.3,61.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(0.1,1,1).p("AD5i9QAIACAHAFQACACABABQABACACABQAKAOAJASQAKARgCAUQgBASAAASQgBANAAALQgEABgEgBQgSgDgUgBQgBAAgBAAAgwlNQgOgHAAgPQAAgKAEgHQgNgRADgSQACgRAPgEQgHgVATgKQAMgHAJABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgDAIAFQABAAABABQAbgLAPAMQAEgEAGgCQAJgCAJACQAFACACADQAEgDAFAAQAKAAAKAEQAIAEAGAHQAFAHACAFIABAAQABgBABAAQAJgBAJADQAIAEAEAJQADAIABAKQAEABAEACQAIAGABAJQAAAEAAADQADABAFADQAFAFgBAIQgBABAAABQAFABAEAFQAHAHgGAJQgBABgBABQAFAFADAGQAFALgKAEIAAABQABABABABQAGAIgHAJQgEAFgFADQABADAAAFQgBAGgDAGQAEAEABAGQABAIgEAGQABABAAABQAEAHABAHQACAIgGAFQADAGgDAJQgDAJgHAAQADAEgCAGQgDAMgGgHQAHAMgJAJQgBABgCABQgBgCAAgBQgBAAAAAAQgBABgBACQgEAEgDAAQAAAFgEACQgDAAgDgBADam4QACgCACgBAC8nSQgBACAAADAA8lYQAPgPARAJQADABADADACkj5QgBgCAAgCQgCgKAIgFQABgBABAAQADAAADAAQAGgBAFgDQAEgDADgDQANgRgRgKQgEgCgEADQgLALgOgJQgFgDADgHQAJgRgUgHQACgMgGgFQgPgLgJgVQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUAAQAAgEAAgEAgnkzQgEgFgDgGQgDgJABgGQABAAAAAAQAEABAFgBAAcl3QgBAMgQAFQAAAAAAAAQgIAEgIgBIAAAAQgLgBgCgKAAPlIQAAAAABgBQAOgKAHAKQAAACABACQACACACACQACAEAAAGQAAAGgCAHQgCAEgDABQgOAGgIgHQgEgEgCgGIAAgBQAAgCAAgCQAAgEAAgFQABgGAFgEgAgFljQAEAQgBASQgBARgBATQgBAUAGAPQAHARAIAMQADAFADAFQAFAIAEAIQAIAOATABQAGAAAGAAQACABABACQAFAFAEAGQgPAJgDgKQAAAEgEADQgHADgEABQgCAAgCAAQgBgBgBAAQgBgBgBgBQgBAAAAgBQgCgDAAgEQgFAFgEACQgBABgBAAQgFAAgBgBQgCgCgBgCQgEACgEAAQgIgBAAgJQgFAHgKgCIgBAAQgLgHAHgOQgTgGANgUQgWgGAPgQQgQgHADgVQgEgCgEgEQgFgDAAgFQgCgWAUgHQAEAEAFADQAFADAGABAAFlUQARgLAQAIAA6kmQgBgBAAgBQgFgHACgJQAAgDABgDQADgHgBgBQAIgFACgBQACAAACgBQACAAADABQADABACADQAKALgHAPQgDAIgGADQgJAFgGgGQgBgBgBgBgAA5lGQATAGgGAQQgDAKgJAAAApkaQgNgBgDAGQgDAEACAJQACAFAHABQALACALgIABSj2QgFAEgNAMQgOAMgHgEQgIgEAAgCIgBAAQgBAAgBAAQgBAAgBAAIgBAAQADgGACgGQABABABABQAFADAFgBQADgBADgBQACgBADABQABAAAYgIQgDADgBADQgIALAAAGQgKAVgJgBQgJgBgEgDQgDgDAAgQAgskIQADABAEAAAh4gpQAAgJAEgIQAKgRATgHQAPgFACgKQACgUALgOQALgPATgDQATgDARADQACABACAAQADAAACAAQAJAAAGgFQAAAAAAAAQAEgBAIgCADdg0QgDgBgDAAQhJgPglgJQgdgHgHgDQgQgIgRgGQgDgBgCAAQAAAAgBAAQgEgBgEADQgDACgDAFQgJAOgHARQgDAJgBAJAD1i+QACAAACABAD0i+QAAgBABgBQAAABAAABABjkFQgEALAAAEQAAABAAABQABACABACQADAGAGAHABGi0QANgBAMgBQASgDANgNQALgLAKgOQADgFADgEQAFgJAGgIACli6QgBgBAAgBQgBAAAAgBQgDgEAAgGQgBgGABgBQgBAAAAgBQgFgCgBgEQgDgLAEgIQADgIAKgHQgDgBAAgBADniwQABADgCACQgEAEgGABQgEAAgEgBQgEgBgCgCQgBADgEABQgKACgIgDQgIgDgBgFQgBAAgBAAACoiyQgDgEAAgEACji9QACABAAACADri3QgCAAgCgHAAJkxQgCgHACgGAAPkmQATgQgTgSAAfAWQAAABAAAAQAFAAAFAAQBTABAMgDQAWgFAWgFQAJgCAKgCQAUgEATgEQAagHAZgMQACAUAEARQAFARgBAUQgCATgGARQgGARgFASQgGASgDASQgDASADALQADgBAEgCQAFADADAIQAGAPgDAWQgDATgKASQgGAKgHALQgEAGgEAFQgKAQgJAPQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAABQgFABgEABQgSAFgSADQgCABgBAAQgQADgSACQgJABgJAAQgBAAAAAAQgKgBgJgBQgJgCgIgCQgJgDgIgEQgQgHgOgLQgPgLgNgKQgMgKgOgLQgBgBgBAAQgFgEgFgDQAAgCAAgBQAAgPACgOQADgTADgSQADgTAAgUQgBgTgEgSQgCgIgCgIQgDgJgSguABkBiQARADASAFQATAGATACQAFABAEAAAAUBMQg4hOAFgHQADgDACgDQAIgKAKgMQACgDACgDQAAAIACAIQACAOAfAjAAUBMQAFgMACgaQAAgMAEgEAAUBMQhAhNgFgGQgJgJgKgGQgQgKgRgGQgJgDgKAAQABACAAADAAUBMQAIAHAFAJQAEAHADAHQAGASAJAPQALAQAGAQQAEAKAEAIQADAIAEAGQAJAPgHAUQgGASgNAOQgLANgOAMQgOAMgSAGQgRAHgUgEQgRgCgNgEAgrALQABgDA+BEAg2FZQADAGAEAHAhCEuQAAADABADQABATAIAPQABACABABQAHABAAAHQAAACAAADQAAABAAACQABAPAFANQAGAQAEARQADALgCAIQgCAIgGAFQgOAKgVgBQgSgBgRAIQgCABgCABQgHADgGAEQgIAFgJAFQgQAJgQAGQgRAFgUgEQgUgEgMgKQgGgFgNACQgWACgHgNQgDgFgBgEQgCgNANgFQARgHAUAAQATAAARgFQARgGARgJQASgIAMgOQANgPgDgTQgDgUgCgTQgDgTgDgTQgDgSgEgTQgFgSgCgSQgDgSgFgSQgBgEgCgEQgFgOgDgMQgUg7AAgCQAAgFgBgHQgCgTAAgTQAAgNAEgLQACgGADgGQAKgPAPgJQAPgJASgGQAIgDAJABABQC9QAIAGAMADQASAEASAHQARAHASABQAUAAARgGQARgGASgGQAOgEAOgFAEngvQANgBAKgOQANgSAMABQAGAUgVAKQgFADgFAEQAIgCAOAAQAWAAALALQAHAIgJAGQgYARgbgMQgOgGgNgCQgCABgCABAEngvQAAADAAADAj4DVQgCgEgCgDQgCgFgCgEQgVgwgHguIgBgLQgFgkAFgkQABgFACgEQAGgKAMgFQANgIASABQAWAAAFAVAlCBQQADgDADgFQADACAEABQACABACABAitCtQAAgDgBgDQgCgFgCgFQgCgFgBgFAl3AyQABABAAACAknHUQgMgDAAgNQgHgLgQgLQAAgCACgCQADgHAKgEQABAAAAAAQABAAAAAAQAMgEANgDQAEgBAEgBQASgDAQgIQARgJANgOQABgBABgCQABgBABgCQACgCAAgCQAEgKgDgOQgDgSgGgTQgFgSgGgSQgFgTgHgSQgBgDgBgCIgBgBIgEgJIgHgNIgBgCAj0DeQgCgFgCgFAknHUQAEABAFAA");
	this.shape_33.setTransform(92.3,55.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.1,1,1).p("AD5i9QAIACAHAFQACACABABQABACACABQAKAOAJASQAKARgCAUQgBASAAASQgBANAAALQgEABgEgBQgSgDgUgBQgBAAgBAAAgwlNQgOgHAAgPQAAgKAEgHQgNgRADgSQACgRAPgEQgHgVATgKQAMgHAJABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgDAIAFQABAAABABQAbgLAPAMQAEgEAGgCQAJgCAJACQAFACACADQAEgDAFAAQAKAAAKAEQAIAEAGAHQAFAHACAFIABAAQABgBABAAQAJgBAJADQAIAEAEAJQADAIABAKQAEABAEACQAIAGABAJQAAAEAAADQADABAFADQAFAFgBAIQgBABAAABQAFABAEAFQAHAHgGAJQgBABgBABQAFAFADAGQAFALgKAEIAAABQABABABABQAGAIgHAJQgEAFgFADQABADAAAFQgBAGgDAGQAEAEABAGQABAIgEAGQABABAAABQAEAHABAHQACAIgGAFQADAGgDAJQgDAJgHAAQADAEgCAGQgDAMgGgHQAHAMgJAJADam4QACgCACgBAC8nSQgBACAAADACkj5QgBgCAAgCQgCgKAIgFQABgBABAAQADAAADAAQAGgBAFgDQAEgDADgDQANgRgRgKQgEgCgEADQgLALgOgJQgFgDADgHQAJgRgUgHQACgMgGgFQgPgLgJgVQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUAAQAAgEAAgEAA8lYQAPgPARAJQADABADADAgnkzQgEgFgDgGQgDgJABgGQABAAAAAAQAEABAFgBAAcl3QgBAMgQAFQAAAAAAAAQgIAEgIgBIAAAAQgLgBgCgKAAPlIQAAAAABgBQAOgKAHAKQAAACABACQACACACACQACAEAAAGQAAAGgCAHQgCAEgDABQgOAGgIgHQgEgEgCgGIAAgBQAAgCAAgCQAAgEAAgFQABgGAFgEgAgFljQAEAQgBASQgBARgBATQgBAUAGAPQAHARAIAMQADAFADAFQAFAIAEAIQAIAOATABQAGAAAGAAQACABABACQAFAFAEAGQgPAJgDgKQAAAEgEADQgHADgEABQgCAAgCAAQgBgBgBAAQgBgBgBgBQgBAAAAgBQgCgDAAgEQgFAFgEACQgBABgBAAQgFAAgBgBQgCgCgBgCQgEACgEAAQgIgBAAgJQgFAHgKgCIgBAAQgLgHAHgOQgTgGANgUQgWgGAPgQQgQgHADgVQgEgCgEgEQgFgDAAgFQgCgWAUgHQAEAEAFADQAFADAGABAAFlUQARgLAQAIAA5lGQAIgFACgBQACAAACgBQACAAADABQADABACADQAKALgHAPQgDAIgGADQgJAFgGgGQgBgBgBgBQgBgBAAgBQgFgHACgJQAAgDABgDQADgHgBgBgAA6kmQAJAAADgKQAGgQgTgGAApkaQgNgBgDAGQgDAEACAJQACAFAHABQALACALgIABSj2QgFAEgNAMQgOAMgHgEQgIgEAAgCIgBAAQgBAAgBAAQgBAAgBAAIgBAAQADgGACgGQABABABABQAFADAFgBQADgBADgBQACgBADABQABAAAYgIQgDADgBADQgIALAAAGQgKAVgJgBQgJgBgEgDQgDgDAAgQAgskIQADABAEAAAh4gpQAAgJAEgIQAKgRATgHQAPgFACgKQACgUALgOQALgPATgDQATgDARADQACABACAAQADAAACAAQAJAAAGgFQAAAAAAAAQAEgBAIgCADdg0QgDgBgDAAQhJgPglgJQgdgHgHgDQgQgIgRgGQgDgBgCAAQAAAAgBAAQgEgBgEADQgDACgDAFQgJAOgHARQgDAJgBAJAD0i+QAAgBABgBQAAABAAABQACAAACABAD1i+QgBAAAAAAQgBABgBACQgEAEgDAAQAAAFgEACQgDAAgDgBAD1i+QAAABABACQACgBABgBABjkFQgEALAAAEQAAABAAABQABACABACQADAGAGAHABGi0QANgBAMgBQASgDANgNQALgLAKgOQADgFADgEQAFgJAGgIACli6QgBgBAAgBQgBAAAAgBQgDgEAAgGQgBgGABgBQgBAAAAgBQgFgCgBgEQgDgLAEgIQADgIAKgHQgDgBAAgBADniwQABADgCACQgEAEgGABQgEAAgEgBQgEgBgCgCQgBADgEABQgKACgIgDQgIgDgBgFQgBAAgBAAACoiyQgDgEAAgEACji9QACABAAACADri3QgCAAgCgHAAJkxQgCgHACgGAAPkmQATgQgTgSAAfAWQAAABAAAAQAFAAAFAAQBTABAMgDQAWgFAWgFQAJgCAKgCQAUgEATgEQAagHAZgMQACAUAEARQAFARgBAUQgCATgGARQgGARgFASQgGASgDASQgDASADALQADgBAEgCQAFADADAIQAGAPgDAWQgDATgKASQgGAKgHALQgEAGgEAFQgKAQgJAPQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAABQgFABgEABQgSAFgSADQgCABgBAAQgQADgSACQgJABgJAAQgBAAAAAAQgKgBgJgBQgJgCgIgCQgJgDgIgEQgQgHgOgLQgPgLgNgKQgMgKgOgLQgBgBgBAAQgFgEgFgDQAAgCAAgBQAAgPACgOQADgTADgSQADgTAAgUQgBgTgEgSQgCgIgCgIQgDgJgSguABkBiQARADASAFQATAGATACQAFABAEAAAAUBMQg4hOAFgHQADgDACgDQAIgKAKgMQACgDACgDQAAAIACAIQACAOAfAjAAUBMQAFgMACgaQAAgMAEgEAAUBMQhAhNgFgGQgJgJgKgGQgQgKgRgGQgJgDgKAAQABACAAADAAUBMQAIAHAFAJQAEAHADAHQAGASAJAPQALAQAGAQQAEAKAEAIQADAIAEAGQAJAPgHAUQgGASgNAOQgLANgOAMQgOAMgSAGQgRAHgUgEQgRgCgNgEAgrALQABgDA+BEAg2FZQADAGAEAHAhCEuQAAADABADQABATAIAPQABACABABQAHABAAAHQAAACAAADQAAABAAACQABAPAFANQAGAQAEARQADALgCAIQgCAIgGAFQgOAKgVgBQgSgBgRAIQgCABgCABQgHADgGAEQgIAFgJAFQgQAJgQAGQgRAFgUgEQgUgEgMgKQgGgFgNACQgWACgHgNQgDgFgBgEQgCgNANgFQARgHAUAAQATAAARgFQARgGARgJQASgIAMgOQANgPgDgTQgDgUgCgTQgDgTgDgTQgDgSgEgTQgFgSgCgSQgDgSgFgSQgBgEgCgEQgFgOgDgMQgUg7AAgCQAAgFgBgHQgCgTAAgTQAAgNAEgLQACgGADgGQAKgPAPgJQAPgJASgGQAIgDAJABABQC9QAIAGAMADQASAEASAHQARAHASABQAUAAARgGQARgGASgGQAOgEAOgFAEngvQANgBAKgOQANgSAMABQAGAUgVAKQgFADgFAEQAIgCAOAAQAWAAALALQAHAIgJAGQgYARgbgMQgOgGgNgCQgCABgCABAEngvQAAADAAADAj4DVQgCgEgCgDQgCgFgCgEQgVgwgHguIgBgLQgFgkAFgkQABgFACgEQAGgKAMgFQANgIASABQAWAAAFAVAlCBQQADgDADgFQADACAEABQACABACABAitCtQAAgDgBgDQgCgFgCgFQgCgFgBgFAl3AyQABABAAACAknHUQgMgDAAgNQgHgLgQgLQAAgCACgCQADgHAKgEQABAAAAAAQABAAAAAAQAMgEANgDQAEgBAEgBQASgDAQgIQARgJANgOQABgBABgCQABgBABgCQACgCAAgCQAEgKgDgOQgDgSgGgTQgFgSgGgSQgFgTgHgSQgBgDgBgCIgBgBIgEgJIgHgNIgBgCAj0DeQgCgFgCgFAknHUQAEABAFAA");
	this.shape_34.setTransform(92.3,55.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.1,1,1).p("AD5i9QAIACAHAFQACACABABQABACACABQAKAOAJASQAKARgCAUQgBASAAASQgBANAAALQgEABgEgBQgSgDgUgBQgBAAgBAAAgwlNQgOgHAAgPQAAgKAEgHQgNgRADgSQACgRAPgEQgHgVATgKQAMgHAJABQAAgQAKgLQAFgGAIgBQAUgDAHAOQAIgLAOgEQAJgDAIAFQABAAABABQAbgLAPAMQAEgEAGgCQAJgCAJACQAFACACADQAEgDAFAAQAKAAAKAEQAIAEAGAHQAFAHACAFIABAAQABgBABAAQAJgBAJADQAIAEAEAJQADAIABAKQAEABAEACQAIAGABAJQAAAEAAADQADABAFADQAFAFgBAIQgBABAAABQAFABAEAFQAHAHgGAJQgBABgBABQAFAFADAGQAFALgKAEIAAABQABABABABQAGAIgHAJQgEAFgFADQABADAAAFQgBAGgDAGQAEAEABAGQABAIgEAGQABABAAABQAEAHABAHQACAIgGAFQADAGgDAJQgDAJgHAAQADAEgCAGQgDAMgGgHQAHAMgJAJADam4QACgCACgBAC8nSQgBACAAADACkj5QgBgCAAgCQgCgKAIgFQABgBABAAQADAAADAAQAGgBAFgDQAEgDADgDQANgRgRgKQgEgCgEADQgLALgOgJQgFgDADgHQAJgRgUgHQACgMgGgFQgPgLgJgVQgFAEgJADQgLAEgIAAQgSAAgHgQQgLAQgUAAQAAgEAAgEAA8lYQAPgPARAJQADABADADAgnkzQgEgFgDgGQgDgJABgGQABAAAAAAQAEABAFgBAAcl3QgBAMgQAFQAAAAAAAAQgIAEgIgBIAAAAQgLgBgCgKAAPlIQAAAAABgBQAOgKAHAKQAAACABACQACACACACQACAEAAAGQAAAGgCAHQgCAEgDABQgOAGgIgHQgEgEgCgGIAAgBQAAgCAAgCQAAgEAAgFQABgGAFgEgAgFljQAEAQgBASQgBARgBATQgBAUAGAPQAHARAIAMQADAFADAFQAFAIAEAIQAIAOATABQAGAAAGAAQACABABACQAFAFAEAGQgPAJgDgKQAAAEgEADQgHADgEABQgCAAgCAAQgBgBgBAAQgBgBgBgBQgBAAAAgBQgCgDAAgEQgFAFgEACQgBABgBAAQgFAAgBgBQgCgCgBgCQgEACgEAAQgIgBAAgJQgFAHgKgCIgBAAQgLgHAHgOQgTgGANgUQgWgGAPgQQgQgHADgVQgEgCgEgEQgFgDAAgFQgCgWAUgHQAEAEAFADQAFADAGABAAFlUQARgLAQAIAA5lGQAIgFACgBQACAAACgBQACAAADABQADABACADQAKALgHAPQgDAIgGADQgJAFgGgGQgBgBgBgBQgBgBAAgBQgFgHACgJQAAgDABgDQADgHgBgBgAA6kmQAJAAADgKQAGgQgTgGAApkaQgNgBgDAGQgDAEACAJQACAFAHABQALACALgIABSj2QgFAEgNAMQgOAMgHgEQgIgEAAgCIgBAAQgBAAgBAAQgBAAgBAAIgBAAQADgGACgGQABABABABQAFADAFgBQADgBADgBQACgBADABQABAAAYgIQgDADgBADQgIALAAAGQgKAVgJgBQgJgBgEgDQgDgDAAgQAgskIQADABAEAAAh4gpQAAgJAEgIQAKgRATgHQAPgFACgKQACgUALgOQALgPATgDQATgDARADQACABACAAQADAAACAAQAJAAAGgFQAAAAAAAAQAEgBAIgCADdg0QgDgBgDAAQhJgPglgJQgdgHgHgDQgQgIgRgGQgDgBgCAAQAAAAgBAAQgEgBgEADQgDACgDAFQgJAOgHARQgDAJgBAJAD0i+QAAgBABgBQAAABAAABQACAAACABAD0i+QgBABgBACQgEAEgDAAQAAAFgEACQgDAAgDgBAD1i+QgBAAAAAAAD1i+QAAABABACQACgBABgBABjkFQgEALAAAEQAAABAAABQABACABACQADAGAGAHABGi0QANgBAMgBQASgDANgNQALgLAKgOQADgFADgEQAFgJAGgIACli6QgBgBAAgBQgBAAAAgBQgDgEAAgGQgBgGABgBQgBAAAAgBQgFgCgBgEQgDgLAEgIQADgIAKgHQgDgBAAgBADniwQABADgCACQgEAEgGABQgEAAgEgBQgEgBgCgCQgBADgEABQgKACgIgDQgIgDgBgFQgBAAgBAAACoiyQgDgEAAgEACji9QACABAAACADri3QgCAAgCgHAAJkxQgCgHACgGAAPkmQATgQgTgSAAfAWQAAABAAAAQAFAAAFAAQBTABAMgDQAWgFAWgFQAJgCAKgCQAUgEATgEQAagHAZgMQACAUAEARQAFARgBAUQgCATgGARQgGARgFASQgGASgDASQgDASADALQADgBAEgCQAFADADAIQAGAPgDAWQgDATgKASQgGAKgHALQgEAGgEAFQgKAQgJAPQgIAOgSAHQgJAEgKADIAAAAQgEABgDABIAAABQgFABgEABQgSAFgSADQgCABgBAAQgQADgSACQgJABgJAAQgBAAAAAAQgKgBgJgBQgJgCgIgCQgJgDgIgEQgQgHgOgLQgPgLgNgKQgMgKgOgLQgBgBgBAAQgFgEgFgDQAAgCAAgBQAAgPACgOQADgTADgSQADgTAAgUQgBgTgEgSQgCgIgCgIQgDgJgSguABkBiQARADASAFQATAGATACQAFABAEAAAAUBMQg4hOAFgHQADgDACgDQAIgKAKgMQACgDACgDQAAAIACAIQACAOAfAjAAUBMQAFgMACgaQAAgMAEgEAAUBMQhAhNgFgGQgJgJgKgGQgQgKgRgGQgJgDgKAAQABACAAADAAUBMQAIAHAFAJQAEAHADAHQAGASAJAPQALAQAGAQQAEAKAEAIQADAIAEAGQAJAPgHAUQgGASgNAOQgLANgOAMQgOAMgSAGQgRAHgUgEQgRgCgNgEAgrALQABgDA+BEAg2FZQADAGAEAHAhCEuQAAADABADQABATAIAPQABACABABQAHABAAAHQAAACAAADQAAABAAACQABAPAFANQAGAQAEARQADALgCAIQgCAIgGAFQgOAKgVgBQgSgBgRAIQgCABgCABQgHADgGAEQgIAFgJAFQgQAJgQAGQgRAFgUgEQgUgEgMgKQgGgFgNACQgWACgHgNQgDgFgBgEQgCgNANgFQARgHAUAAQATAAARgFQARgGARgJQASgIAMgOQANgPgDgTQgDgUgCgTQgDgTgDgTQgDgSgEgTQgFgSgCgSQgDgSgFgSQgBgEgCgEQgFgOgDgMQgUg7AAgCQAAgFgBgHQgCgTAAgTQAAgNAEgLQACgGADgGQAKgPAPgJQAPgJASgGQAIgDAJABABQC9QAIAGAMADQASAEASAHQARAHASABQAUAAARgGQARgGASgGQAOgEAOgFAEngvQANgBAKgOQANgSAMABQAGAUgVAKQgFADgFAEQAIgCAOAAQAWAAALALQAHAIgJAGQgYARgbgMQgOgGgNgCQgCABgCABAEngvQAAADAAADAj4DVQgCgEgCgDQgCgFgCgEQgVgwgHguIgBgLQgFgkAFgkQABgFACgEQAGgKAMgFQANgIASABQAWAAAFAVAlCBQQADgDADgFQADACAEABQACABACABAitCtQAAgDgBgDQgCgFgCgFQgCgFgBgFAl3AyQABABAAACAknHUQgMgDAAgNQgHgLgQgLQAAgCACgCQADgHAKgEQABAAAAAAQABAAAAAAQAMgEANgDQAEgBAEgBQASgDAQgIQARgJANgOQABgBABgCQABgBABgCQACgCAAgCQAEgKgDgOQgDgSgGgTQgFgSgGgSQgFgTgHgSQgBgDgBgCIgBgBIgEgJIgHgNIgBgCAj0DeQgCgFgCgFAknHUQAEABAFAA");
	this.shape_35.setTransform(92.3,55.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_2},{t:this.shape_7}]},31).to({state:[{t:this.shape_15},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_2},{t:this.shape_12}]},2).to({state:[{t:this.shape_11},{t:this.shape_17},{t:this.shape_9},{t:this.shape_8},{t:this.shape_2},{t:this.shape_16}]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_4},{t:this.shape_20},{t:this.shape_2},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_25},{t:this.shape_10},{t:this.shape_4},{t:this.shape_24},{t:this.shape_2},{t:this.shape_23}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_25},{t:this.shape_29},{t:this.shape_4},{t:this.shape_24},{t:this.shape_2},{t:this.shape_28}]},1).to({state:[{t:this.shape_25},{t:this.shape_10},{t:this.shape_4},{t:this.shape_24},{t:this.shape_2},{t:this.shape_30}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_25},{t:this.shape_29},{t:this.shape_4},{t:this.shape_24},{t:this.shape_2},{t:this.shape_28}]},1).to({state:[{t:this.shape_32},{t:this.shape_21},{t:this.shape_4},{t:this.shape_20},{t:this.shape_2},{t:this.shape_31},{t:this.shape_18}]},1).to({state:[{t:this.shape_25},{t:this.shape_10},{t:this.shape_4},{t:this.shape_24},{t:this.shape_2},{t:this.shape_23}]},1).to({state:[{t:this.shape_25},{t:this.shape_10},{t:this.shape_4},{t:this.shape_24},{t:this.shape_2},{t:this.shape_33}]},1).to({state:[{t:this.shape_25},{t:this.shape_29},{t:this.shape_4},{t:this.shape_24},{t:this.shape_2},{t:this.shape_34}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_25},{t:this.shape_29},{t:this.shape_4},{t:this.shape_24},{t:this.shape_2},{t:this.shape_28}]},1).to({state:[{t:this.shape_32},{t:this.shape_21},{t:this.shape_4},{t:this.shape_20},{t:this.shape_2},{t:this.shape_31},{t:this.shape_18}]},1).to({state:[{t:this.shape_25},{t:this.shape_10},{t:this.shape_4},{t:this.shape_24},{t:this.shape_2},{t:this.shape_23}]},1).to({state:[{t:this.shape_25},{t:this.shape_10},{t:this.shape_4},{t:this.shape_24},{t:this.shape_2},{t:this.shape_33}]},1).to({state:[{t:this.shape_25},{t:this.shape_29},{t:this.shape_4},{t:this.shape_24},{t:this.shape_2},{t:this.shape_35}]},1).wait(12));

	// head
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.1,1,1).p("AgIAtQgCgGAAgGQAAgFABgFQABgLADgKIAAAAQABgDABgEQAGgUAIgT");
	this.shape_36.setTransform(57.8,19.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(0.1,1,1).p("ACHAmQAIAAAIgBQAKgEADgKQADgIgEgFQAHgBAGgFQAHgFADgJQAEgIgEgIQAAgBAAAAQAAgBAAgBQAFgHAFgHQAGgIAAgLQABgLgFgIQgFgKgLAAQgEgBgEABQACgHAAgIQAAgIgEgGQgBgBAAgBQgJgKgMgEQgLgEgLAFQgBABgBAAQgBgJgEgIQgFgKgKgBQgKgBgIADQgJADgHAEQAAgGgGgHQgHgKgNABQgMABgLADQgNAEgGALQgCACgBADQgBgGgGgGQgKgKgNADQgIACgHACQgIADgCAIQgBADAAAFQgCgIgKgEQgMgFgNAGQgHADgGAEQgJAEgCAJQgCAIADAFQgKgFgFAGQgEAEgDAEQgFAHgBALQAAABAAACQAAABABACQAAADACADACWAAQgLgBgHgHIAAAAQgGgIgDgKQgKgBgIgDQgJgFgFgHQgCgDgBgDQgEAEgGAFQgKAGgKgDQgOgEgNgGQgHgEgEgDQAAAHgDAEQgCAEgEADQgEACgGABQgMAAgMgFQABADAAAGQAAAHgGADQgHAEgIACQAFADABAEQACAEgFACQgJAFgJABQADADAAAGAA1A2QAEgGAFgGQACgCABgDQABgCAAgBQACgIgGgFQgEgDgGAAQgBAAgBAAQgKAAgHAIQgGAHgFAIQgGAHAAALQABAFAFAEQAEADAGAAQgDgCAAgCQgCgKAJgFQAKgFAHAHgAgJBJQgHAEgHADAAgBHQADgBAEgCQAIgGAFgHQAAgBABAAABpBAQACgGADgGQABgFABgFQABgDAAgCQAAgBAAgBQABgBAAAAQAAgEgCgEQgIgDgJADQgEACgEADQgCACgCACQgBABgBACQAAABgBACQAAAAgBABQgDAGgBAIQgCAIAAAKQAFgEAFADQADACADACQgCgEAAgGQAAgHADgBQALgDAEAIgABZBNQABABABACIABAAQACADABADQAEgIAEgJQABgDABgCABfBWQAAADgBADQgCAKgJADQgLADgKgDQgDgBgDgCAg3BpQgBAJAEAIQABABAAABQAFAIAIAHQAHAGAHAGQAHAFAHAFQAGAEAGADQACABACABQADABADABQAGACAGABQAJABAKAAQAFAAAFAAQAFAAAEgBQAJgCAIgEQABAAABgBQAGgCAFgFQABgBABgBQAHgGAFgHQAFgGAFgIQAEgIAEgKQAEgIABgKQABgEAAgDABjAFQAUgKAHAQAAigEQAVgRARAVAACBgQADAJAFAIQAFAJAJADQAJADAJgBAi5AmQgQgOAMgJQgBgCAAgCQgBgGACgFQAFgMAKgJQAJgIAJgCQgCAAgBgBQgDgCgCgCQgIgGAAgKQAAgLADgJQADgJAHgFQAIgFAJgBAi6AmQgaAGAUAUIABAAQgVAKAXAQQAHAFAHgCQAAAMAQALQANAJAGgKQAGAEAKABQASADADgLQACgBACgCQABgBABgBQANgPgJgRQACgCACgBQADgEAAgEQABgCgBgBQAAgBgBAAQgEgDgDgEQgBgCgBgCQAAAAAAgBQgBgCAAgCQgCgFABgFQABgCAAgCQABgCABgCQAFgIAHgGQAEgFAFgBQAEgCADABQAGgBADADAi/BAQAAAAAAAAQABAAAAABQgBgBAAAAgAi5AmQAAAAAAAAQAAAAgBAAgAhWA9QAFADAGABQADAAACAAAhOAcQgGACgBAEQgCAEACAG");
	this.shape_37.setTransform(43.9,14.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AASAaQgFgDgFADQAAgJACgJQABgHADgGIABAAIABgDIACgDIAEgEQAEgDAEgCQAJgDAIACQACAEAAAEIgBABIAAACIgBAFIgCAKIgFALQgEgIgLAEQgDABAAAGQgBAHADAEIgGgEgAgqAVQgFgEgBgGQAAgKAGgHIALgPQAHgHAKgBIACAAQAGAAAEADQAFAFgCAJIgBACIgCAFIgJALQgHgGgKAFQgJAEACAKQAAADADABIgDAAQgEAAgDgCg");
	this.shape_38.setTransform(50.4,19.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC9A67").s().p("AASBzQgKAAgJgCIgLgCIgHgCIgEgCIgNgHIgOgLIgOgMQgHgGgFgJIgBgBQgEgHAAgHIAAgEIAAAEQAAAHAEAHQgiAAgMgPQAOgPgJgRIAEgEQADgDAAgEIAAgDQAFADAGABIAFAAIgFAAQgGgBgFgDIgBAAQgFgDgDgFIgBgDIgBgBIgBgEQgBgFABgGIABgDIACgEQAFgIAGgGQAFgFAFgCIAHgBQAGAAACADQADADAAAGQAAgGgDgDQAKgBAIgFQAGgDgCgEQgCgEgEgDQAIgCAHgEQAGgDAAgIIgBgIQAMAFANgBQAFAAAEgDQAEgCADgEQADgFAAgGQAEADAFADQAOAHAOAEQAKADAJgGQAHgFADgEIADAGQAFAHAJAEQAJAEAJABQADAKAGAHIABABQAHAHALABQgJATgGAUIgDAIIAAAAQgDAKgBAKIgBAKQAAAGACAGIAAAHQgCAJgDAJIgJASIgJAOIgNANIgCACQgFAEgGADIgBABQgIADgJACIgJACIgHAAIgDAAgAAMBCIACAAIADAAIgDAAIgCAAIAAAAIgBAAQgGAAgFgBIgBgBQgJgDgFgJQgFgJgDgIQADAIAFAJQAFAJAJADIABABQAFABAGAAIABAAIAAAAgAAwAtIAJgBIAAAAIABAAIAAAAQAIgDADgKIAAgEIAAgCIAIgRIACgFIAFgLIADgKIABgFIAAgCIAAgCQABgDgCgEQgJgDgIADQgFACgDADIgEAEIgCADIgCADIAAABQgDAGgCAHQgCAIAAAJQAFgDAFADIAHAEIACADIAAAAQACADABADIAAACIAAAEQgDAKgIADIAAAAIgBAAIAAAAIgJABIAAAAIgBAAIgJgBIgCgBIgFgCIAFACIACABIAJABIABAAIAAAAgAgwATIANgHIgNAHgAAIgiIgLAOQgFAIAAALQAAAEAFAEQAEADAFgBIAHgDQAJgFAEgGIABgCIAJgLIAEgGIAAgCQACgIgGgGQgEgCgGgBIgBAAQgKABgHAIgAhvgQIgBgGIABgEQACgEAFgCQgFACgCAEIgBAEIABAGgABkgxIAAAAQgEgKgJAAIAAAAIAAAAQgFAAgHADIgBABIABgBQAHgDAFAAIAAAAIAAAAQAJAAAEAKIAAAAgAAvg9QgKgMgKAAIgBAAIAAAAQgIAAgIAHIAAAAIgBAAIAAAAIAAABIAAgBIAAAAIABAAIAAAAQAIgHAIAAIAAAAIABAAQAKAAAKAMIAAAAgABFAZIAAAAgAhvAAIAAAAg");
	this.shape_39.setTransform(46.5,20.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ah8CUQgKgBgGgEQgGAJgNgIQgQgLAAgMQgHACgHgFQgXgRAVgJIgBAAQgUgUAagGIABAAIAAgBQgQgNAMgKIgBgDQgBgHACgFQAFgNAKgIQAJgIAJgBIgDgBIgFgEQgIgHAAgJQAAgLADgJQACgJAIgFQAIgGAJAAIACAGIgCgGIgBgEIAAgDQABgKAFgIIAHgHQAFgGAKAFQgDgGACgHQACgKAJgEIANgGQANgHAMAGQAKAEACAHIABgHQACgJAIgCIAPgEQANgEAKALQAGAGABAGIADgFQAGgLANgEQALgDAMgBQANgCAHALQAGAHAAAGQAHgFAJgCQAIgDAKAAQAKABAFAKQAEAIABAKIACgBQALgFALAEQAMAEAJAKIABACQAEAGAAAIIgCAPIAIAAQALAAAFAJQAFAJgBALQAAALgGAIIgKAOIAAABIAAAAQAEAJgEAIQgDAJgHAFQgGAFgHACQAEAFgDAIQgDAKgKADQgIACgIAAQAHgUAIgTQgLgBgHgHIAAgBQgGgHgDgKQgKgBgIgDQgJgEgFgHIgDgGQgEAEgGAFQgKAGgKgDQgOgFgNgGQgHgDgEgDQAAAGgDAFQgCAEgEACQgEADgGAAQgMABgMgFIABAIQAAAGgGAEQgHAEgIACQAFACABAFQACAEgFADQgJAFgJABQgDgDgGAAIgHABQgFACgEAFQgHAGgFAIIgCAEIgBADQgBAFACAGIABAEIAAABIACADQADAEAEAEIABABIAAADQAAAEgDADIgEAEQAJARgNAPIgCACIgEADQgCAJgMAAIgHgBgAi/BcIABABIgBgBIAAAAgABcBsIgBAAIgCgDQgCgEAAgHQAAgGADgBQALgEAEAJIgCAFIgIARQgBgDgCgDgAAdBeQgCgKAJgEQAKgFAHAGIgBACQgFAHgIAFIgHADQgDgBAAgDg");
	this.shape_40.setTransform(43.9,12);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.1,1,1).p("ACHAmQAIAAAIgBQAKgEADgKQADgIgEgFQAHgBAGgFQAHgFADgJQAEgIgEgIQAAgBAAAAQAAgBAAgBQAFgHAFgHQAGgIAAgLQABgLgFgIQgFgKgLAAQgEgBgEABQACgHAAgIQAAgIgEgGQgBgBAAgBQgJgKgMgEQgLgEgLAFQgBABgBAAQgBgJgEgIQgFgKgKgBQgKgBgIADQgJADgHAEQAAgGgGgHQgHgKgNABQgMABgLADQgNAEgGALQgCACgBADQgBgGgGgGQgKgKgNADQgIACgHACQgIADgCAIQgBADAAAFQgCgIgKgEQgMgFgNAGQgHADgGAEQgJAEgCAJQgCAIADAFQgKgFgFAGQgEAEgDAEQgFAHgBALQAAABAAACQAAABABACQAAADACADACHAmQAHgUAIgSQgLgBgHgHIAAAAQgGgIgDgKQgKgBgIgDQgJgFgFgHQgCgDgBgDQgEAEgGAFQgKAGgKgDQgOgEgNgGQgHgEgEgDQAAAHgDAEQgCAEgEADQgEACgGABQgMAAgMgFQABADAAAGQAAAHgGADQgHAEgIACQAFADABAEQACAEgFACQgJAFgJABQADADAAAGAA2AqQAEgGAFgGQACgCABgDQABgCAAgBQABgGgDgEQgBgCgBgBQgEgDgGAAQgBAAgBAAQgIAAgHAGQgBABgBABQgGAHgFAIQgGAHAAALQABAFAFAEQAEADAGAAQADgBAEgCQAIgGAFgHQAAgBABAAgAgJBJQgHAEgHADAAABaQgEABAAAGQAAARAJATQAEAIAbAHQAYAGAPAAQAGAAAIgKQAHgLAAgHQAAgDgBgCQABgCAAgCQAAgEgUgFIhIgUQgEAAAAACgAAhA7QgDgCAAgCQgCgKAJgFQAKgFAHAHABgBKQAAADgBADQgCAKgJADQgLADgKgDQgDgBgDgCABqA0QACgGADgGQABgFABgFQABgDAAgCQAAgBAAgBQAAgBABAAIAAAAQAAgEgCgEQgIgDgJADQgBABgCABQgDABgCACQgCACgCACQgBABgBACQAAABgBACQAAAAgBABQgDAGgBAIQgCAIAAAKQAFgEAFADQADACADACQgCgEAAgGQAAgHADgBQALgDAEAIgABgBKQAEgIAEgJQABgDABgCABaBBQABABABACIABAAQACADABADAg3BpQgBAJAEAIQABABAAABQAFAIAIAHQAHAGAHAGQAHAFAHAFQAGAEAGADQACABACABQADABADABQAGACAGABQAJABAKAAQAFAAAFAAQAFAAAEgBQAJgCAIgEQABAAABgBQAGgCAFgFQABgBABgBQAHgGAFgHQAFgGAFgIQAEgIAEgKQAEgIABgKQABgEAAgDQgCgGAAgGQAAgFAAgFQACgLADgKIAAAAQABgEABgEABjgCQAUgLAHAQAAigMQAVgRARAVAiOhcQgJABgIAFQgHAFgDAJQgDAJAAALQAAAKAIAGQACACADACQABABACAAQgJACgJAIQgKAJgFAMQgCAFABAGQAAACABACQgMAJAQAOQAAAAAAAAQAAAAgBAAQgaAGAUAUIABAAQgVAKAXAQQAHAFAHgCQAAAMAQALQANAJAGgKQAGAEAKABQASADADgLQACgBACgCQABgBABgBQANgPgJgRQACgCACgBQADgEAAgEQABgCgBgBQAAgBgBAAQgEgDgDgEQgBgCgBgCQAAAAAAgBQgBgCAAgCQgCgFABgFQABgCAAgCQABgCABgCQAFgIAHgGQAEgFAFgBQAEgCADABQAGgBADADAi/BAQAAAAAAAAQABAAAAABQgBgBAAAAgAi5AmIgBAAAhWA9QAFADAGABQADAAACAAAhOAcQgGACgBAEQgCAEACAG");
	this.shape_41.setTransform(43.9,14.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgIAaQgbgHgEgIQgLgSAAgRQAAgGAEgBIgBADQAAAHAQAEIAZAGQAuAMAFAAQAEAAABgBIAAAEQAAAHgGALQgIAKgHAAQgOAAgXgGg");
	this.shape_42.setTransform(48.5,27);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRAtIgYgFQgRgFAAgGIACgEQABgCAEAAIBHAUQAUAFAAAEIgBAEQgBADgEAAQgFAAgugOgAAcgCQgFgDgFADQAAgJACgJQABgHADgHIABAAIABgDIACgDIAEgEIAFgEIADgBQAJgDAIACQACAEAAAEIAAABIgBAAIAAACIgBAFIgCALIgFALQgEgIgLAEQgDABAAAGQgBAHADADIgGgDgAgggHQgFgEgBgGQAAgKAGgIIALgPIACgCQAGgFAJgBIACAAQAFAAAEADIACADQADAFgBAGIgBACIgDAFIgIAMQgHgGgKAFQgJAEACAKQAAADADABIgDAAQgEAAgDgCg");
	this.shape_43.setTransform(49.5,21.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC9A67").s().p("AASBzQgKAAgJgCIgLgCIgHgCIgEgCIgNgHIgOgLIgOgMQgHgGgFgJIgBgBQgEgHAAgHIAAgEIAAAEQAAAHAEAHQgiAAgMgPQAOgPgJgRIAEgEQADgDAAgEIAAgDQAFADAGABIAFAAIgFAAQgGgBgFgDIgBAAQgFgDgDgFIgBgDIgBgBIgBgEQgBgFABgGIABgDIACgEQAFgIAGgGQAFgFAFgCIAHgBQAGAAACADQADADAAAGQAAgGgDgDQAKgBAIgFQAGgDgCgEQgCgEgEgDQAIgCAHgEQAGgDAAgIIgBgIQAMAFANgBQAFAAAEgDQAEgCADgEQADgFAAgGQAEADAFADQAOAHAOAEQAKADAJgGQAHgFADgEIADAGQAFAHAJAEQAJAEAJABQADAKAGAHIABABQAHAHALABQgJATgGAUIgDAIIAAAAQgDAKgBAKIgBAKQAAAGACAGIAAAHQgCAJgDAJIgJASIgJAOIgNANIgCACQgFAEgGADIgBABQgIADgJACIgJACIgHAAIgDAAgAgaAcQgEACAAAGQAAARALATQAEAIAZAHQAYAGAPAAQAHAAAHgKQAHgLAAgHIAAgFIABgEQAAgEgVgFIhHgUQgDAAgCABgAAxAhIAHAAIACgBIABAAQAIgDADgKIAAgEIAAgCIAIgQIACgFIAFgMIADgKIABgFIAAgCIAAgBIAAgBQABgDgCgEQgJgDgIADIgDACIgFADIgEAEIgCADIgCADIAAABQgDAGgCAHQgCAJAAAIQAFgCAFACIAHAEIACADIAAAAQACADABADIAAACIAAAEQgDAKgIADIgBAAIgCABIgHAAIAAAAIgBAAIgIgBIgDgBIgFgCIAFACIADABIAIABIABAAIAAAAgAgwATIANgHIgNAHgAALgwIgCACIgLAOQgFAIAAALQAAAFAFAEQAEADAFgBIAHgDQAJgFAEgHIABgCIAJgLIAEgGIAAgCQACgGgDgFIgDgDQgEgCgGgBIgBAAQgJABgGAGgABYgVIgBAMIACgPIgBADgAhvgQIgBgGIABgEQACgEAFgCQgFACgCAEIgBAEIABAGgABZgbIABgDIABAAIAAgHIgBgBIgBALgABkg5IAAAAQgEgKgJAAIAAAAIAAAAQgFAAgHADIgBABIABgBQAHgDAFAAIAAAAIAAAAQAJAAAEAKIAAAAgAAvhFIAAAAIgBgBIgBgBQgJgKgJAAIgBAAIAAAAQgHAAgIAGIgBABIAAAAIgBAAIAAAAIAAABIAAgBIAAAAIABAAIAAAAIABgBQAIgGAHAAIAAAAIABAAQAJAAAJAKIABABIABABIAAAAgAhvAAIAAAAg");
	this.shape_44.setTransform(46.5,20.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ah8CUQgKgBgGgEQgGAJgNgIQgQgLAAgMQgHACgHgFQgXgRAVgJIgBAAQgUgUAagGIABAAIAAgBQgQgNAMgKIgBgDQgBgHACgFQAFgNAKgIQAJgIAJgBIgDgBIgFgEQgIgHAAgJQAAgLADgJQACgJAIgFQAIgGAJAAIACAGIgCgGIgBgEIAAgDQABgKAFgIIAHgHQAFgGAKAFQgDgGACgHQACgKAJgEIANgGQANgHAMAGQAKAEACAHIABgHQACgJAIgCIAPgEQANgEAKALQAGAGABAGIADgFQAGgLANgEQALgDAMgBQANgCAHALQAGAHAAAGQAHgFAJgCQAIgDAKAAQAKABAFAKQAEAIABAKIACgBQALgFALAEQAMAEAJAKIABACQAEAGAAAIIgCAPIAIAAQALAAAFAJQAFAJgBALQAAALgGAIIgKAOIAAABIAAAAQAEAJgEAIQgDAJgHAFQgGAFgHACQAEAFgDAIQgDAKgKADQgIACgIAAQAHgUAIgTQgLgBgHgHIAAgBQgGgHgDgKQgKgBgIgDQgJgEgFgHIgDgGQgEAEgGAFQgKAGgKgDQgOgFgNgGQgHgDgEgDQAAAGgDAFQgCAEgEACQgEADgGAAQgMABgMgFIABAIQAAAGgGAEQgHAEgIACQAFACABAFQACAEgFADQgJAFgJABQgDgDgGAAIgHABQgFACgEAFQgHAGgFAIIgCAEIgBADQgBAFACAGIABAEIAAABIACADQADAEAEAEIABABIAAADQAAAEgDADIgEAEQAJARgNAPIgCACIgEADQgCAJgMAAIgHgBgAi/BcIABABIgBgBIAAAAgABdBgIgBAAIgCgDQgCgEAAgHQAAgGADgBQALgEAEAJIgCAFIgIARQgBgDgCgDgAAeBSQgCgKAJgEQAKgFAHAGIgBACQgFAHgIAFIgHADQgDgBAAgDg");
	this.shape_45.setTransform(43.9,12);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.1,1,1).p("ACHAmQAIAAAIgBQAKgEADgKQADgIgEgFQAHgBAGgFQAHgFADgJQAEgIgEgIQAAgBAAAAQAAgBAAgBQAFgHAFgHQAGgIAAgLQABgLgFgIQgFgKgLAAQgEgBgEABQACgHAAgIQAAgIgEgGQgBgBAAgBQgJgKgMgEQgLgEgLAFQgBABgBAAQgBgJgEgIQgFgKgKgBQgKgBgIADQgJADgHAEQAAgGgGgHQgHgKgNABQgMABgLADQgNAEgGALQgCACgBADQgBgGgGgGQgKgKgNADQgIACgHACQgIADgCAIQgBADAAAFQgCgIgKgEQgMgFgNAGQgHADgGAEQgJAEgCAJQgCAIADAFQgKgFgFAGQgEAEgDAEQgFAHgBALQAAABAAACQAAABABACQAAADACADACHAmQAHgUAIgSQgLgBgHgHIAAAAQgGgIgDgKQgKgBgIgDQgJgFgFgHQgCgDgBgDQgEAEgGAFQgKAGgKgDQgOgEgNgGQgHgEgEgDQAAAHgDAEQgCAEgEADQgEACgGABQgMAAgMgFQABADAAAGQAAAHgGADQgHAEgIACQAFADABAEQACAEgFACQgJAFgJABQADADAAAGAA2AqQAEgGAFgGQACgCABgDQABgCAAgBQABgGgDgEQgBgCgBgBQgEgDgGAAQgBAAgBAAQgIAAgHAGQgBABgBABQgGAHgFAIQgGAHAAALQABAFAFAEQAEADAGAAQADgBAEgCQAIgGAFgHQAAgBABAAgAgDBtQADACgBAAQAKALABABQAAABAIAEQAIAEAMADQAXAGAPABQAAAAABAAQAHAAALgPQAAgBAAAAQABgCAAgCQAAgEgUgFIhIgUQgEAAAAACQgEABAAAGQAAAAAAABQAAACAAADAgJBOQgHgBgHADAAhA7QgDgCAAgCQgCgKAJgFQAKgFAHAHABgBKQAAADgBADQgCAKgJADQgDABgEAAQgHABgHgCQgDgBgEAAABqA0QACgGADgGQABgFABgFQABgDAAgCQAAgBAAgBQAAgBABAAIAAAAQAAgEgCgEQgIgDgJADQgBABgCABQgDABgCACQgCACgCACQgBABgBACQAAABgBACQAAAAgBABQgDAGgBAIQgCAIAAAKQAFgEAFADQADACADACQgCgEAAgGQAAgHADgBQALgDAEAIgABgBKQAEgIAEgJQABgDABgCABaBBQABABABACIABAAQACADABADAg3BpQgBAJAEAIQABABAAABQAFAIAIAHQAHAGAHAGQAHAFAHAFQAGAEAGADQACABACABQADABADABQAGACAGABQAJABAKAAQAFAAAFAAQAFAAAEgBQAJgCAIgEQABAAABgBQAGgCAFgFQABgBABgBQAHgGAFgHQAFgGAFgIQAEgIAEgKQAEgIABgKQABgEAAgDQgCgGAAgGQAAgFAAgFQACgLADgKIAAAAQABgEABgEABjgCQAUgLAHAQAAigMQAVgRARAVAgCBvQgBgBAAgBQAAAAAAAAAiOhcQgJABgIAFQgHAFgDAJQgDAJAAALQAAAKAIAGQACACADACQABABACAAQgJACgJAIQgKAJgFAMQgCAFABAGQAAACABACQgMAJAQAOQAAAAAAAAQAAAAgBAAQgaAGAUAUIABAAQgVAKAXAQQAHAFAHgCQAAAMAQALQANAJAGgKQAGAEAKABQASADADgLQACgBACgCQABgBABgBQANgPgJgRQACgCACgBQADgEAAgEQABgCgBgBQAAgBgBAAQgEgDgDgEQgBgCgBgCQAAAAAAgBQgBgCAAgCQgCgFABgFQABgCAAgCQABgCABgCQAFgIAHgGQAEgFAFgBQAEgCADABQAGgBADADAi/BAQAAAAAAAAQABAAAAABQgBgBAAAAgAi5AmIgBAAAhWA9QAFADAGABQADAAACAAAhOAcQgGACgBAEQgCAEACAG");
	this.shape_46.setTransform(43.9,14.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AAfAYQgPgBgVgGQgNgDgIgEQgIgEAAgBIgMgLIABAAIgCgCIgBgBIgBAAIAAgFIAAgBQAAgGAEgCIgCAEQABAGALAEIAFABIAYAGIAQADQAfAJAEAAQADAAACgCQgLAQgGAAIgCAAgAgvgHIAAgBIACACIgBAAIAAAAIgBgBgAgvgIIAAAAg");
	this.shape_47.setTransform(48.4,26.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAAA1IgRgFIgYgGIgFgBQgMgEAAgGIACgDQABgCAEAAIBHAUQAUAFAAAEIgBAEIAAABQgCABgDAAQgEAAgegIgAAcgFQgFgCgFADQAAgKACgIQABgIADgGIABgBIABgDIACgDIAEgEIAFgDIADgCQAJgCAIACQACAEAAAEIAAAAIgBABIAAACIgBAFIgCAKIgFAMQgEgIgLADQgDABAAAHQgBAGADAEIgGgEgAgggKQgFgDgBgGQAAgLAGgHIALgPIACgCQAGgGAJAAIACAAQAFAAAEADIACADQADAEgBAGIgBADIgDAFIgIAMQgHgHgKAFQgJAFACAKQAAACADACIgDAAQgEAAgDgDg");
	this.shape_48.setTransform(49.5,21.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC9A67").s().p("AASBzQgKAAgJgCIgLgCIgHgCIgEgCIgNgHIgOgLIgOgMQgHgGgFgJIgBgBQgEgHAAgHIAAgEIAAAEQAAAHAEAHQgiAAgMgPQAOgPgJgRIAEgEQADgDAAgEIAAgDQAFADAGABIAFAAIgFAAQgGgBgFgDIgBAAQgFgDgDgFIgBgDIgBgBIgBgEQgBgFABgGIABgDIACgEQAFgIAGgGQAFgFAFgCIAHgBQAGAAACADQADADAAAGQAAgGgDgDQAKgBAIgFQAGgDgCgEQgCgEgEgDQAIgCAHgEQAGgDAAgIIgBgIQAMAFANgBQAFAAAEgDQAEgCADgEQADgFAAgGQAEADAFADQAOAHAOAEQAKADAJgGQAHgFADgEIADAGQAFAHAJAEQAJAEAJABQADAKAGAHIABABQAHAHALABQgJATgGAUIgDAIIAAAAQgDAKgBAKIgBAKQAAAGACAGIAAAHQgCAJgDAJIgJASIgJAOIgNANIgCACQgFAEgGADIgBABQgIADgJACIgJACIgHAAIgDAAgAgPA+QAAABAIAEQAHAEANADQAWAGAPABIACAAQAGAAALgQIABAAIABgEQAAgEgVgFIhHgUQgDAAgCABQgEACAAAGIAAABIABAFIABAAIAAABIAAABIACABIALAMgAAxAhIABAAIAAAAIABAAIAIgBQAIgDADgKIAAgEIAAgCIAIgQIACgFIAFgMIADgKIABgFIAAgCIAAgBIAAgBQABgDgCgEQgJgDgIADIgDACIgFADIgEAEIgCADIgCADIAAABQgDAGgCAHQgCAJAAAIQAFgCAFACIAHAEIACADIAAAAQACADABADIAAACIAAAEQgDAKgIADIgIABIgBAAIAAAAIgBAAIgBAAIAAAAIgDAAIgCAAIgEgBIgCgBIAAAAIgCAAIgCAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIACAAIACAAIAAAAIACABIAEABIACAAIADAAIAAAAIABAAgAgwATIADgBIAHgBIABAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIgBAAIgHABIgDABgAALgwIgCACIgLAOQgFAIAAALQAAAFAFAEQAEADAFgBIAHgDQAJgFAEgHIABgCIAJgLIAEgGIAAgCQACgGgDgFIgDgDQgEgCgGgBIgBAAQgJABgGAGgABYgVIgBAMIACgPIgBADgAhvgQIgBgGIABgEQACgEAFgCQgFACgCAEIgBAEIABAGgABZgbIABgDIABAAIAAgHIgBgBIgBALgABkg5IAAAAQgEgKgJAAIAAAAIAAAAQgFAAgHADIgBABIABgBQAHgDAFAAIAAAAIAAAAQAJAAAEAKIAAAAgAAvhFIAAAAIgBgBIgBgBQgJgKgJAAIgBAAIAAAAQgHAAgIAGIgBABIAAAAIgBAAIAAAAIAAABIAAgBIAAAAIABAAIAAAAIABgBQAIgGAHAAIAAAAIABAAQAJAAAJAKIABABIABABIAAAAgAhvAAIAAAAg");
	this.shape_49.setTransform(46.5,20.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(0.1,1,1).p("ACHAmQAIAAAIgBQAKgEADgKQADgIgEgFQAHgBAGgFQAHgFADgJQAEgIgEgIQAAgBAAAAQAAgBAAgBQAFgHAFgHQAGgIAAgLQABgLgFgIQgFgKgLAAQgEgBgEABQACgHAAgIQAAgIgEgGQgBgBAAgBQgJgKgMgEQgLgEgLAFQgBABgBAAQgBgJgEgIQgFgKgKgBQgKgBgIADQgJADgHAEQAAgGgGgHQgHgKgNABQgMABgLADQgNAEgGALQgCACgBADQgBgGgGgGQgKgKgNADQgIACgHACQgIADgCAIQgBADAAAFQgCgIgKgEQgMgFgNAGQgHADgGAEQgJAEgCAJQgCAIADAFQgKgFgFAGQgEAEgDAEQgFAHgBALQAAABAAACQAAABABACQAAADACADACHAmQAHgUAIgSQgLgBgHgHIAAAAQgGgIgDgKQgKgBgIgDQgJgFgFgHQgCgDgBgDQgEAEgGAFQgKAGgKgDQgOgEgNgGQgHgEgEgDQAAAHgDAEQgCAEgEADQgEACgGABQgMAAgMgFQABADAAAGQAAAHgGADQgHAEgIACQAFADABAEQACAEgFACQgJAFgJABQADADAAAGAA1A2QAEgGAFgGQACgCABgDQABgCAAgBQACgIgGgFQgEgDgGAAQgBAAgBAAQgKAAgHAIQgGAHgFAIQgGAHAAALQABAFAFAEQAEADAGAAQgDgCAAgCQgCgKAJgFQAKgFAHAHgAgHBIQgCALgRAKAAgBHQADgBAEgCQAIgGAFgHQAAgBABAAABpBAQACgGADgGQABgFABgFQABgDAAgCQAAgBAAgBQABgBAAAAQAAgEgCgEQgIgDgJADQgEACgEADQgCACgCACQgBABgBACQAAABgBACQAAAAgBABQgDAGgBAIQgCAIAAAKQAFgEAFADQADACADACQgCgEAAgGQAAgHADgBQALgDAEAIgABZBNQABABABACIABAAQACADABADQAEgIAEgJQABgDABgCABfBWQAAADgBADQgCAKgJADQgLADgKgDQgDgBgDgCAg3BpQgBAJAEAIQABABAAABQAFAIAIAHQAHAGAHAGQAHAFAHAFQAGAEAGADQACABACABQADABADABQAGACAGABQAJABAKAAQAFAAAFAAQAFAAAEgBQAJgCAIgEQABAAABgBQAGgCAFgFQABgBABgBQAHgGAFgHQAFgGAFgIQAEgIAEgKQAEgIABgKQABgEAAgDQgCgGAAgGQAAgFAAgFQACgLADgKIAAAAQABgEABgEABjAFQAUgKAHAQAAigEQAVgRARAVAACBgQABAGABABQABACAJADQAJADADgBAiOhcQgJABgIAFQgHAFgDAJQgDAJAAALQAAAKAIAGQACACADACQABABACAAQgJACgJAIQgKAJgFAMQgCAFABAGQAAACABACQgMAJAQAOQAAAAAAAAQAAAAgBAAQgaAGAUAUIABAAQgVAKAXAQQAHAFAHgCQAAAMAQALQANAJAGgKQAGAEAKABQASADADgLQACgBACgCQABgBABgBQANgPgJgRQACgCACgBQADgEAAgEQABgCgBgBQAAgBgBAAQgEgDgDgEQgBgCgBgCQAAAAAAgBQgBgCAAgCQgCgFABgFQABgCAAgCQABgCABgCQAFgIAHgGQAEgFAFgBQAEgCADABQAGgBADADAi/BAQAAAAAAAAQABAAAAABQgBgBAAAAgAi5AmIgBAAAhWA9QAFADAGABQADAAACAAAhOAcQgGACgBAEQgCAEACAG");
	this.shape_50.setTransform(43.9,14.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC9A67").s().p("AASBzQgKAAgJgCIgLgCIgHgCIgEgCIgNgHIgOgLIgOgMQgHgGgFgJIgBgBQgEgHAAgHIAAgEIAAAEQAAAHAEAHQgiAAgMgPQAOgPgJgRIAEgEQADgDAAgEIAAgDQAFADAGABIAFAAIgFAAQgGgBgFgDIgBAAQgFgDgDgFIgBgDIgBgBIgBgEQgBgFABgGIABgDIACgEQAFgIAGgGQAFgFAFgCIAHgBQAGAAACADQADADAAAGQAAgGgDgDQAKgBAIgFQAGgDgCgEQgCgEgEgDQAIgCAHgEQAGgDAAgIIgBgIQAMAFANgBQAFAAAEgDQAEgCADgEQADgFAAgGQAEADAFADQAOAHAOAEQAKADAJgGQAHgFADgEIADAGQAFAHAJAEQAJAEAJABQADAKAGAHIABABQAHAHALABQgJATgGAUIgDAIIAAAAQgDAKgBAKIgBAKQAAAGACAGIAAAHQgCAJgDAJIgJASIgJAOIgNANIgCACQgFAEgGADIgBABQgIADgJACIgJACIgHAAIgDAAgAgBAxIABAAIgBAAIAAAAIgBAAIgEgBIAAAAIgCAAIgBgBIgCAAIgKgFQgBgBgBgGQABAGABABIAKAFIACAAIABABIACAAIAAAAIAEABIABAAIAAAAgAAwAtIAJgBIAAAAIABAAIAAAAQAIgDADgKIAAgEIAAgCIAIgRIACgFIAFgLIADgKIABgFIAAgCIAAgCQABgDgCgEQgJgDgIADQgFACgDADIgEAEIgCADIgCADIAAABQgDAGgCAHQgCAIAAAJQAFgDAFADIAHAEIACADIAAAAQACADABADIAAACIAAAEQgDAKgIADIAAAAIgBAAIAAAAIgJABIAAAAIgBAAIgJgBIgCgBIgFgCIAFACIACABIAJABIABAAIAAAAgAg0AgQASgKABgLQgBALgSAKgAAIgiIgLAOQgFAIAAALQAAAEAFAEQAEADAFgBIAHgDQAJgFAEgGIABgCIAJgLIAEgGIAAgCQACgIgGgGQgEgCgGgBIgBAAQgKABgHAIgAhvgQIgBgGIABgEQACgEAFgCQgFACgCAEIgBAEIABAGgABkgxIAAAAQgEgKgJAAIAAAAIAAAAQgFAAgHADIgBABIABgBQAHgDAFAAIAAAAIAAAAQAJAAAEAKIAAAAgAAvg9QgKgMgKAAIgBAAIAAAAQgIAAgIAHIAAAAIgBAAIAAAAIAAABIAAgBIAAAAIABAAIAAAAQAIgHAIAAIAAAAIABAAQAKAAAKAMIAAAAgABFAZIAAAAgAhvAAIAAAAg");
	this.shape_51.setTransform(46.5,20.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.1,1,1).p("ACHAmQAIAAAIgBQAKgEADgKQADgIgEgFQAHgBAGgFQAHgFADgJQAEgIgEgIQAAgBAAAAQAAgBAAgBQAFgHAFgHQAGgIAAgLQABgLgFgIQgFgKgLAAQgEgBgEABQACgHAAgIQAAgIgEgGQgBgBAAgBQgJgKgMgEQgLgEgLAFQgBABgBAAQgBgJgEgIQgFgKgKgBQgKgBgIADQgJADgHAEQAAgGgGgHQgHgKgNABQgMABgLADQgNAEgGALQgCACgBADQgBgGgGgGQgKgKgNADQgIACgHACQgIADgCAIQgBADAAAFQgCgIgKgEQgMgFgNAGQgHADgGAEQgJAEgCAJQgCAIADAFQgKgFgFAGQgEAEgDAEQgFAHgBALQAAABAAACQAAABABACQAAADACADACHAmQAHgUAIgSQgLgBgHgHIAAAAQgGgIgDgKQgKgBgIgDQgJgFgFgHQgCgDgBgDQgEAEgGAFQgKAGgKgDQgOgEgNgGQgHgEgEgDQAAAHgDAEQgCAEgEADQgEACgGABQgMAAgMgFQABADAAAGQAAAHgGADQgHAEgIACQAFADABAEQACAEgFACQgJAFgJABQADADAAAGAA1A2QAEgGAFgGQACgCABgDQABgCAAgBQACgIgGgFQgEgDgGAAQgBAAgBAAQgKAAgHAIQgGAHgFAIQgGAHAAALQABAFAFAEQAEADAGAAQgDgCAAgCQgCgKAJgFQAKgFAHAHgAgCBFQADATggAFAAgBHQADgBAEgCQAIgGAFgHQAAgBABAAABpBAQACgGADgGQABgFABgFQABgDAAgCQAAgBAAgBQABgBAAAAQAAgEgCgEQgIgDgJADQgEACgEADQgCACgCACQgBABgBACQAAABgBACQAAAAgBABQgDAGgBAIQgCAIAAAKQAFgEAFADQADACADACQgCgEAAgGQAAgHADgBQALgDAEAIgABZBNQABABABACIABAAQACADABADQAEgIAEgJQABgDABgCABfBWQAAADgBADQgCAKgJADQgLADgKgDQgDgBgDgCAg3BpQgBAJAEAIQABABAAABQAFAIAIAHQAHAGAHAGQAHAFAHAFQAGAEAGADQACABACABQADABADABQAGACAGABQAJABAKAAQAFAAAFAAQAFAAAEgBQAJgCAIgEQABAAABgBQAGgCAFgFQABgBABgBQAHgGAFgHQAFgGAFgIQAEgIAEgKQAEgIABgKQABgEAAgDQgCgGAAgGQAAgFAAgFQACgLADgKIAAAAQABgEABgEABjAFQAUgKAHAQAAigEQAVgRARAVAACBgQADAJAFAIQAFAJAJADQAJADAJgBAiOhcQgJABgIAFQgHAFgDAJQgDAJAAALQAAAKAIAGQACACADACQABABACAAQgJACgJAIQgKAJgFAMQgCAFABAGQAAACABACQgMAJAQAOQAAAAAAAAQAAAAgBAAQgaAGAUAUIABAAQgVAKAXAQQAHAFAHgCQAAAMAQALQANAJAGgKQAGAEAKABQASADADgLQACgBACgCQABgBABgBQANgPgJgRQACgCACgBQADgEAAgEQABgCgBgBQAAgBgBAAQgEgDgDgEQgBgCgBgCQAAAAAAgBQgBgCAAgCQgCgFABgFQABgCAAgCQABgCABgCQAFgIAHgGQAEgFAFgBQAEgCADABQAGgBADADAi/BAQAAAAAAAAQABAAAAABQgBgBAAAAgAi5AmIgBAAAhWA9QAFADAGABQADAAACAAAhOAcQgGACgBAEQgCAEACAG");
	this.shape_52.setTransform(43.9,14.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC9A67").s().p("AASBzQgKAAgJgCIgLgCIgHgCIgEgCIgNgHIgOgLIgOgMQgHgGgFgJIgBgBQgEgHAAgHIAAgEIAAAEQAAAHAEAHQgiAAgMgPQAOgPgJgRIAEgEQADgDAAgEIAAgDQAFADAGABIAFAAIgFAAQgGgBgFgDIgBAAQgFgDgDgFIgBgDIgBgBIgBgEQgBgFABgGIABgDIACgEQAFgIAGgGQAFgFAFgCIAHgBQAGAAACADQADADAAAGQAAgGgDgDQAKgBAIgFQAGgDgCgEQgCgEgEgDQAIgCAHgEQAGgDAAgIIgBgIQAMAFANgBQAFAAAEgDQAEgCADgEQADgFAAgGQAEADAFADQAOAHAOAEQAKADAJgGQAHgFADgEIADAGQAFAHAJAEQAJAEAJABQADAKAGAHIABABQAHAHALABQgJATgGAUIgDAIIAAAAQgDAKgBAKIgBAKQAAAGACAGIAAAHQgCAJgDAJIgJASIgJAOIgNANIgCACQgFAEgGADIgBABQgIADgJACIgJACIgHAAIgDAAgAAMBCIACAAIADAAIgDAAIgCAAIAAAAIgBAAQgGAAgFgBIgBgBQgJgDgFgJQgFgJgDgIQADAIAFAJQAFAJAJADIABABQAFABAGAAIABAAIAAAAgAAwAtIAJgBIAAAAIABAAIAAAAQAIgDADgKIAAgEIAAgCIAIgRIACgFIAFgLIADgKIABgFIAAgCIAAgCQABgDgCgEQgJgDgIADQgFACgDADIgEAEIgCADIgCADIAAABQgDAGgCAHQgCAIAAAJQAFgDAFADIAHAEIACADIAAAAQACADABADIAAACIAAAEQgDAKgIADIAAAAIgBAAIAAAAIgJABIAAAAIgBAAIgJgBIgCgBIgFgCIAFACIACABIAJABIABAAIAAAAgAg5AgQAegFAAgQIAAgDIAAADQAAAQgeAFgAAIgiIgLAOQgFAIAAALQAAAEAFAEQAEADAFgBIAHgDQAJgFAEgGIABgCIAJgLIAEgGIAAgCQACgIgGgGQgEgCgGgBIgBAAQgKABgHAIgAhvgQIgBgGIABgEQACgEAFgCQgFACgCAEIgBAEIABAGgABkgxIAAAAQgEgKgJAAIAAAAIAAAAQgFAAgHADIgBABIABgBQAHgDAFAAIAAAAIAAAAQAJAAAEAKIAAAAgAAvg9QgKgMgKAAIgBAAIAAAAQgIAAgIAHIAAAAIgBAAIAAAAIAAABIAAgBIAAAAIABAAIAAAAQAIgHAIAAIAAAAIABAAQAKAAAKAMIAAAAgABFAZIAAAAgAhvAAIAAAAg");
	this.shape_53.setTransform(46.5,20.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.1,1,1).p("ACHAmQAIAAAIgBQAKgEADgKQADgIgEgFQAHgBAGgFQAHgFADgJQAEgIgEgIQAAgBAAAAQAAgBAAgBQAFgHAFgHQAGgIAAgLQABgLgFgIQgFgKgLAAQgEgBgEABQACgHAAgIQAAgIgEgGQgBgBAAgBQgJgKgMgEQgLgEgLAFQgBABgBAAQgBgJgEgIQgFgKgKgBQgKgBgIADQgJADgHAEQAAgGgGgHQgHgKgNABQgMABgLADQgNAEgGALQgCACgBADQgBgGgGgGQgKgKgNADQgIACgHACQgIADgCAIQgBADAAAFQgCgIgKgEQgMgFgNAGQgHADgGAEQgJAEgCAJQgCAIADAFQgKgFgFAGQgEAEgDAEQgFAHgBALQAAABAAACQAAABABACQAAADACADACHAmQAHgUAIgSQgLgBgHgHIAAAAQgGgIgDgKQgKgBgIgDQgJgFgFgHQgCgDgBgDQgEAEgGAFQgKAGgKgDQgOgEgNgGQgHgEgEgDQAAAHgDAEQgCAEgEADQgEACgGABQgMAAgMgFQABADAAAGQAAAHgGADQgHAEgIACQAFADABAEQACAEgFACQgJAFgJABQADADAAAGAA1A2QAEgGAFgGQACgCABgDQABgCAAgBQACgIgGgFQgEgDgGAAQgBAAgBAAQgKAAgHAIQgGAHgFAIQgGAHAAALQABAFAFAEQAEADAGAAQgDgCAAgCQgCgKAJgFQAKgFAHAHgAgCBFQgVgBgIAZAAgBHQADgBAEgCQAIgGAFgHQAAgBABAAABpBAQACgGADgGQABgFABgFQABgDAAgCQAAgBAAgBQABgBAAAAQAAgEgCgEQgIgDgJADQgEACgEADQgCACgCACQgBABgBACQAAABgBACQAAAAgBABQgDAGgBAIQgCAIAAAKQAFgEAFADQADACADACQgCgEAAgGQAAgHADgBQALgDAEAIgABZBNQABABABACIABAAQACADABADQAEgIAEgJQABgDABgCABfBWQAAADgBADQgCAKgJADQgLADgKgDQgDgBgDgCAg3BpQgBAJAEAIQABABAAABQAFAIAIAHQAHAGAHAGQAHAFAHAFQAGAEAGADQACABACABQADABADABQAGACAGABQAJABAKAAQAFAAAFAAQAFAAAEgBQAJgCAIgEQABAAABgBQAGgCAFgFQABgBABgBQAHgGAFgHQAFgGAFgIQAEgIAEgKQAEgIABgKQABgEAAgDQgCgGAAgGQAAgFAAgFQACgLADgKIAAAAQABgEABgEABjAFQAUgKAHAQAAigEQAVgRARAVAACBgQADAJAFAIQAFAJAJADQAJADAJgBAiOhcQgJABgIAFQgHAFgDAJQgDAJAAALQAAAKAIAGQACACADACQABABACAAQgJACgJAIQgKAJgFAMQgCAFABAGQAAACABACQgMAJAQAOQAAAAAAAAQAAAAgBAAQgaAGAUAUIABAAQgVAKAXAQQAHAFAHgCQAAAMAQALQANAJAGgKQAGAEAKABQASADADgLQACgBACgCQABgBABgBQANgPgJgRQACgCACgBQADgEAAgEQABgCgBgBQAAgBgBAAQgEgDgDgEQgBgCgBgCQAAAAAAgBQgBgCAAgCQgCgFABgFQABgCAAgCQABgCABgCQAFgIAHgGQAEgFAFgBQAEgCADABQAGgBADADAi/BAQAAAAAAAAQABAAAAABQgBgBAAAAgAi5AmIgBAAAhWA9QAFADAGABQADAAACAAAhOAcQgGACgBAEQgCAEACAG");
	this.shape_54.setTransform(43.9,14.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC9A67").s().p("AASBzQgKAAgJgCIgLgCIgHgCIgEgCIgNgHIgOgLIgOgMQgHgGgFgJIgBgBQgEgHAAgHIAAgEIAAAEQAAAHAEAHQgiAAgMgPQAOgPgJgRIAEgEQADgDAAgEIAAgDQAFADAGABIAFAAIgFAAQgGgBgFgDIgBAAQgFgDgDgFIgBgDIgBgBIgBgEQgBgFABgGIABgDIACgEQAFgIAGgGQAFgFAFgCIAHgBQAGAAACADQADADAAAGQAAgGgDgDQAKgBAIgFQAGgDgCgEQgCgEgEgDQAIgCAHgEQAGgDAAgIIgBgIQAMAFANgBQAFAAAEgDQAEgCADgEQADgFAAgGQAEADAFADQAOAHAOAEQAKADAJgGQAHgFADgEIADAGQAFAHAJAEQAJAEAJABQADAKAGAHIABABQAHAHALABQgJATgGAUIgDAIIAAAAQgDAKgBAKIgBAKQAAAGACAGIAAAHQgCAJgDAJIgJASIgJAOIgNANIgCACQgFAEgGADIgBABQgIADgJACIgJACIgHAAIgDAAgAAMBCIACAAIADAAIgDAAIgCAAIAAAAIgBAAQgGAAgFgBIgBgBQgJgDgFgJQgFgJgDgIQADAIAFAJQAFAJAJADIABABQAFABAGAAIABAAIAAAAgAAwAtIAJgBIAAAAIABAAIAAAAQAIgDADgKIAAgEIAAgCIAIgRIACgFIAFgLIADgKIABgFIAAgCIAAgCQABgDgCgEQgJgDgIADQgFACgDADIgEAEIgCADIgCADIAAABQgDAGgCAHQgCAIAAAJQAFgDAFADIAHAEIACADIAAAAQACADABADIAAACIAAAEQgDAKgIADIAAAAIgBAAIAAAAIgJABIAAAAIgBAAIgJgBIgCgBIgFgCIAFACIACABIAJABIABAAIAAAAgAg5AgQAIgYAVAAIAAAAIABAAIgBAAIAAAAQgVAAgIAYgAAIgiIgLAOQgFAIAAALQAAAEAFAEQAEADAFgBIAHgDQAJgFAEgGIABgCIAJgLIAEgGIAAgCQACgIgGgGQgEgCgGgBIgBAAQgKABgHAIgAhvgQIgBgGIABgEQACgEAFgCQgFACgCAEIgBAEIABAGgABkgxIAAAAQgEgKgJAAIAAAAIAAAAQgFAAgHADIgBABIABgBQAHgDAFAAIAAAAIAAAAQAJAAAEAKIAAAAgAAvg9QgKgMgKAAIgBAAIAAAAQgIAAgIAHIAAAAIgBAAIAAAAIAAABIAAgBIAAAAIABAAIAAAAQAIgHAIAAIAAAAIABAAQAKAAAKAMIAAAAgABFAZIAAAAgAhvAAIAAAAg");
	this.shape_55.setTransform(46.5,20.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(0.1,1,1).p("ACHAmQAIAAAIgBQAKgEADgKQADgIgEgFQAHgBAGgFQAHgFADgJQAEgIgEgIQAAgBAAAAQAAgBAAgBQAFgHAFgHQAGgIAAgLQABgLgFgIQgFgKgLAAQgEgBgEABQACgHAAgIQAAgIgEgGQgBgBAAgBQgJgKgMgEQgLgEgLAFQgBABgBAAQgBgJgEgIQgFgKgKgBQgKgBgIADQgJADgHAEQAAgGgGgHQgHgKgNABQgMABgLADQgNAEgGALQgCACgBADQgBgGgGgGQgKgKgNADQgIACgHACQgIADgCAIQgBADAAAFQgCgIgKgEQgMgFgNAGQgHADgGAEQgJAEgCAJQgCAIADAFQgKgFgFAGQgEAEgDAEQgFAHgBALQAAABAAACQAAABABACQAAADACADACHAmQAHgUAIgSQgLgBgHgHIAAAAQgGgIgDgKQgKgBgIgDQgJgFgFgHQgCgDgBgDQgEAEgGAFQgKAGgKgDQgOgEgNgGQgHgEgEgDQAAAHgDAEQgCAEgEADQgEACgGABQgMAAgMgFQABADAAAGQAAAHgGADQgHAEgIACQAFADABAEQACAEgFACQgJAFgJABQADADAAAGAA1A2QAEgGAFgGQACgCABgDQABgCAAgBQACgIgGgFQgEgDgGAAQgBAAgBAAQgKAAgHAIQgGAHgFAIQgGAHAAALQABAFAFAEQAEADAGAAQgDgCAAgCQgCgKAJgFQAKgFAHAHgAACBSQABAQgSgGAAgBHQADgBAEgCQAIgGAFgHQAAgBABAAABpBAQACgGADgGQABgFABgFQABgDAAgCQAAgBAAgBQABgBAAAAQAAgEgCgEQgIgDgJADQgEACgEADQgCACgCACQgBABgBACQAAABgBACQAAAAgBABQgDAGgBAIQgCAIAAAKQAFgEAFADQADACADACQgCgEAAgGQAAgHADgBQALgDAEAIgABZBNQABABABACIABAAQACADABADQAEgIAEgJQABgDABgCABfBWQAAADgBADQgCAKgJADQgLADgKgDQgDgBgDgCAg3BpQgBAJAEAIQABABAAABQAFAIAIAHQAHAGAHAGQAHAFAHAFQAGAEAGADQACABACABQADABADABQAGACAGABQAJABAKAAQAFAAAFAAQAFAAAEgBQAJgCAIgEQABAAABgBQAGgCAFgFQABgBABgBQAHgGAFgHQAFgGAFgIQAEgIAEgKQAEgIABgKQABgEAAgDQgCgGAAgGQAAgFAAgFQACgLADgKIAAAAQABgEABgEABjAFQAUgKAHAQAAigEQAVgRARAVAgBBhQAIAUAQgJAiOhcQgJABgIAFQgHAFgDAJQgDAJAAALQAAAKAIAGQACACADACQABABACAAQgJACgJAIQgKAJgFAMQgCAFABAGQAAACABACQgMAJAQAOQAAAAAAAAQAAAAgBAAQgaAGAUAUIABAAQgVAKAXAQQAHAFAHgCQAAAMAQALQANAJAGgKQAGAEAKABQASADADgLQACgBACgCQABgBABgBQANgPgJgRQACgCACgBQADgEAAgEQABgCgBgBQAAgBgBAAQgEgDgDgEQgBgCgBgCQAAAAAAgBQgBgCAAgCQgCgFABgFQABgCAAgCQABgCABgCQAFgIAHgGQAEgFAFgBQAEgCADABQAGgBADADAi/BAQAAAAAAAAQABAAAAABQgBgBAAAAgAi5AmIgBAAAhWA9QAFADAGABQADAAACAAAhOAcQgGACgBAEQgCAEACAG");
	this.shape_56.setTransform(43.9,14.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC9A67").s().p("AASBzQgKAAgJgCIgLgCIgHgCIgEgCIgNgHIgOgLIgOgMQgHgGgFgJIgBgBQgEgHAAgHIAAgEIAAAEQAAAHAEAHQgiAAgMgPQAOgPgJgRIAEgEQADgDAAgEIAAgDQAFADAGABIAFAAIgFAAQgGgBgFgDIgBAAQgFgDgDgFIgBgDIgBgBIgBgEQgBgFABgGIABgDIACgEQAFgIAGgGQAFgFAFgCIAHgBQAGAAACADQADADAAAGQAAgGgDgDQAKgBAIgFQAGgDgCgEQgCgEgEgDQAIgCAHgEQAGgDAAgIIgBgIQAMAFANgBQAFAAAEgDQAEgCADgEQADgFAAgGQAEADAFADQAOAHAOAEQAKADAJgGQAHgFADgEIADAGQAFAHAJAEQAJAEAJABQADAKAGAHIABABQAHAHALABQgJATgGAUIgDAIIAAAAQgDAKgBAKIgBAKQAAAGACAGIAAAHQgCAJgDAJIgJASIgJAOIgNANIgCACQgFAEgGADIgBABQgIADgJACIgJACIgHAAIgDAAgAgKAyQADAAAEgCIABgBIgBABQgEACgDAAIgBAAIAAAAQgIAAgGgMIAAAAIgBgBIAAgBIAAABIABABIAAAAQAGAMAIAAIAAAAIABAAgAAwAtIAJgBIAAAAIABAAIAAAAQAIgDADgKIAAgEIAAgCIAIgRIACgFIAFgLIADgKIABgFIAAgCIAAgCQABgDgCgEQgJgDgIADQgFACgDADIgEAEIgCADIgCADIAAABQgDAGgCAHQgCAIAAAJQAFgDAFADIAHAEIACADIAAAAQACADABADIAAACIAAAEQgDAKgIADIAAAAIgBAAIAAAAIgJABIAAAAIgBAAIgJgBIgCgBIgFgCIAFACIACABIAJABIABAAIAAAAgAgfAhQAJAAAAgLIAAgBIAAABQAAALgJAAIgBAAIAAAAIgGgBIgCgBIACABIAGABIAAAAIABAAgAAIgiIgLAOQgFAIAAALQAAAEAFAEQAEADAFgBIAHgDQAJgFAEgGIABgCIAJgLIAEgGIAAgCQACgIgGgGQgEgCgGgBIgBAAQgKABgHAIgAhvgQIgBgGIABgEQACgEAFgCQgFACgCAEIgBAEIABAGgABkgxIAAAAQgEgKgJAAIAAAAIAAAAQgFAAgHADIgBABIABgBQAHgDAFAAIAAAAIAAAAQAJAAAEAKIAAAAgAAvg9QgKgMgKAAIgBAAIAAAAQgIAAgIAHIAAAAIgBAAIAAAAIAAABIAAgBIAAAAIABAAIAAAAQAIgHAIAAIAAAAIABAAQAKAAAKAMIAAAAgABFAZIAAAAgAhvAAIAAAAg");
	this.shape_57.setTransform(46.5,20.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(0.1,1,1).p("ACHAmQAIAAAIgBQAKgEADgKQADgIgEgFQAHgBAGgFQAHgFADgJQAEgIgEgIQAAgBAAAAQAAgBAAgBQAFgHAFgHQAGgIAAgLQABgLgFgIQgFgKgLAAQgEgBgEABQACgHAAgIQAAgIgEgGQgBgBAAgBQgJgKgMgEQgLgEgLAFQgBABgBAAQgBgJgEgIQgFgKgKgBQgKgBgIADQgJADgHAEQAAgGgGgHQgHgKgNABQgMABgLADQgNAEgGALQgCACgBADQgBgGgGgGQgKgKgNADQgIACgHACQgIADgCAIQgBADAAAFQgCgIgKgEQgMgFgNAGQgHADgGAEQgJAEgCAJQgCAIADAFQgKgFgFAGQgEAEgDAEQgFAHgBALQAAABAAACQAAABABACQAAADACADACHAmQAHgUAIgSQgLgBgHgHIAAAAQgGgIgDgKQgKgBgIgDQgJgFgFgHQgCgDgBgDQgEAEgGAFQgKAGgKgDQgOgEgNgGQgHgEgEgDQAAAHgDAEQgCAEgEADQgEACgGABQgMAAgMgFQABADAAAGQAAAHgGADQgHAEgIACQAFADABAEQACAEgFACQgJAFgJABQADADAAAGAA1A2QAEgGAFgGQACgCABgDQABgCAAgBQACgIgGgFQgEgDgGAAQgBAAgBAAQgKAAgHAIQgGAHgFAIQgGAHAAALQABAFAFAEQAEADAGAAQgDgCAAgCQgCgKAJgFQAKgFAHAHgAAgBHQADgBAEgCQAIgGAFgHQAAgBABAAABpBAQACgGADgGQABgFABgFQABgDAAgCQAAgBAAgBQABgBAAAAQAAgEgCgEQgIgDgJADQgEACgEADQgCACgCACQgBABgBACQAAABgBACQAAAAgBABQgDAGgBAIQgCAIAAAKQAFgEAFADQADACADACQgCgEAAgGQAAgHADgBQALgDAEAIgABZBNQABABABACIABAAQACADABADQAEgIAEgJQABgDABgCABfBWQAAADgBADQgCAKgJADQgLADgKgDQgDgBgDgCAg3BpQgBAJAEAIQABABAAABQAFAIAIAHQAHAGAHAGQAHAFAHAFQAGAEAGADQACABACABQADABADABQAGACAGABQAJABAKAAQAFAAAFAAQAFAAAEgBQAJgCAIgEQABAAABgBQAGgCAFgFQABgBABgBQAHgGAFgHQAFgGAFgIQAEgIAEgKQAEgIABgKQABgEAAgDQgCgGAAgGQAAgFAAgFQACgLADgKIAAAAQABgEABgEABjAFQAUgKAHAQAAigEQAVgRARAVAABBpQApAgAEgKAAHBOQgbgPgEAoAiOhcQgJABgIAFQgHAFgDAJQgDAJAAALQAAAKAIAGQACACADACQABABACAAQgJACgJAIQgKAJgFAMQgCAFABAGQAAACABACQgMAJAQAOQAAAAAAAAQAAAAgBAAQgaAGAUAUIABAAQgVAKAXAQQAHAFAHgCQAAAMAQALQANAJAGgKQAGAEAKABQASADADgLQACgBACgCQABgBABgBQANgPgJgRQACgCACgBQADgEAAgEQABgCgBgBQAAgBgBAAQgEgDgDgEQgBgCgBgCQAAAAAAgBQgBgCAAgCQgCgFABgFQABgCAAgCQABgCABgCQAFgIAHgGQAEgFAFgBQAEgCADABQAGgBADADAi/BAQAAAAAAAAQABAAAAABQgBgBAAAAgAi5AmIgBAAAhWA9QAFADAGABQADAAACAAAhOAcQgGACgBAEQgCAEACAG");
	this.shape_58.setTransform(43.9,14.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC9A67").s().p("AASBzQgKAAgJgCIgLgCIgHgCIgEgCIgNgHIgOgLIgOgMQgHgGgFgJIgBgBQgEgHAAgHIAAgEIAAAEQAAAHAEAHQgiAAgMgPQAOgPgJgRIAEgEQADgDAAgEIAAgDQAFADAGABIAFAAIgFAAQgGgBgFgDIgBAAQgFgDgDgFIgBgDIgBgBIgBgEQgBgFABgGIABgDIACgEQAFgIAGgGQAFgFAFgCIAHgBQAGAAACADQADADAAAGQAAgGgDgDQAKgBAIgFQAGgDgCgEQgCgEgEgDQAIgCAHgEQAGgDAAgIIgBgIQAMAFANgBQAFAAAEgDQAEgCADgEQADgFAAgGQAEADAFADQAOAHAOAEQAKADAJgGQAHgFADgEIADAGQAFAHAJAEQAJAEAJABQADAKAGAHIABABQAHAHALABQgJATgGAUIgDAIIAAAAQgDAKgBAKIgBAKQAAAGACAGIAAAHQgCAJgDAJIgJASIgJAOIgNANIgCACQgFAEgGADIgBABQgIADgJACIgJACIgHAAIgDAAgAARBFQAAAAABgBQABAAAAAAQABAAAAgBQAAAAABgBIAAAAIAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgBABAAAAIAAAAIgCgBIgDAAIgBAAIAAgBIgBAAIAAAAIAAAAIgCgBIgBAAIgBgBIgBAAIAAAAIgBgBIgCgBIAAAAIgBgBIgBgBIgDgCIgEgDIgBAAIgNgKIgBAAIgBgBIAAAAIgBgBIABABIAAAAIABABIABAAIANAKIABAAIAEADIADACIABABIABABIAAAAIACABIABABIAAAAIABAAIABABIABAAIACABIAAAAIAAAAIABAAIAAABIABAAIADAAIACABIAAAAgAAwAtIAJgBIAAAAIABAAIAAAAQAIgDADgKIAAgEIAAgCIAIgRIACgFIAFgLIADgKIABgFIAAgCIAAgCQABgDgCgEQgJgDgIADQgFACgDADIgEAEIgCADIgCADIAAABQgDAGgCAHQgCAIAAAJQAFgDAFADIAHAEIACADIAAAAQACADABADIAAACIAAAEQgDAKgIADIAAAAIgBAAIAAAAIgJABIAAAAIgBAAIgJgBIgCgBIgFgCIAFACIACABIAJABIABAAIAAAAgAgxAqIAAAAIAAgDIAAAAQAEgaAOAAIAAAAIABAAQAEAAAGACIAAAAIABABIABAAIAAAAIABABIgBgBIAAAAIgBAAIgBgBIAAAAQgGgCgEAAIgBAAIAAAAQgOAAgEAaIAAAAIAAADIAAAAgAAIgiIgLAOQgFAIAAALQAAAEAFAEQAEADAFgBIAHgDQAJgFAEgGIABgCIAJgLIAEgGIAAgCQACgIgGgGQgEgCgGgBIgBAAQgKABgHAIgAhvgQIgBgGIABgEQACgEAFgCQgFACgCAEIgBAEIABAGgABkgxIAAAAQgEgKgJAAIAAAAIAAAAQgFAAgHADIgBABIABgBQAHgDAFAAIAAAAIAAAAQAJAAAEAKIAAAAgAAvg9QgKgMgKAAIgBAAIAAAAQgIAAgIAHIAAAAIgBAAIAAAAIAAABIAAgBIAAAAIABAAIAAAAQAIgHAIAAIAAAAIABAAQAKAAAKAMIAAAAgABFAZIAAAAgAhvAAIAAAAg");
	this.shape_59.setTransform(46.5,20.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(0.1,1,1).p("ACHAmQAIAAAIgBQAKgEADgKQADgIgEgFQAHgBAGgFQAHgFADgJQAEgIgEgIQAAgBAAAAQAAgBAAgBQAFgHAFgHQAGgIAAgLQABgLgFgIQgFgKgLAAQgEgBgEABQACgHAAgIQAAgIgEgGQgBgBAAgBQgJgKgMgEQgLgEgLAFQgBABgBAAQgBgJgEgIQgFgKgKgBQgKgBgIADQgJADgHAEQAAgGgGgHQgHgKgNABQgMABgLADQgNAEgGALQgCACgBADQgBgGgGgGQgKgKgNADQgIACgHACQgIADgCAIQgBADAAAFQgCgIgKgEQgMgFgNAGQgHADgGAEQgJAEgCAJQgCAIADAFQgKgFgFAGQgEAEgDAEQgFAHgBALQAAABAAACQAAABABACQAAADACADACHAmQAHgUAIgSQgLgBgHgHIAAAAQgGgIgDgKQgKgBgIgDQgJgFgFgHQgCgDgBgDQgEAEgGAFQgKAGgKgDQgOgEgNgGQgHgEgEgDQAAAHgDAEQgCAEgEADQgEACgGABQgMAAgMgFQABADAAAGQAAAHgGADQgHAEgIACQAFADABAEQACAEgFACQgJAFgJABQADADAAAGAA1A2QAEgGAFgGQACgCABgDQABgCAAgBQACgIgGgFQgEgDgGAAQgBAAgBAAQgKAAgHAIQgGAHgFAIQgGAHAAALQABAFAFAEQAEADAGAAQgDgCAAgCQgCgKAJgFQAKgFAHAHgAAgBHQADgBAEgCQAIgGAFgHQAAgBABAAABpBAQACgGADgGQABgFABgFQABgDAAgCQAAgBAAgBQABgBAAAAQAAgEgCgEQgIgDgJADQgEACgEADQgCACgCACQgBABgBACQAAABgBACQAAAAgBABQgDAGgBAIQgCAIAAAKQAFgEAFADQADACADACQgCgEAAgGQAAgHADgBQALgDAEAIgABZBNQABABABACIABAAQACADABADQAEgIAEgJQABgDABgCABfBWQAAADgBADQgCAKgJADQgLADgKgDQgDgBgDgCAg3BpQgBAJAEAIQABABAAABQAFAIAIAHQAHAGAHAGQAHAFAHAFQAGAEAGADQACABACABQADABADABQAGACAGABQAJABAKAAQAFAAAFAAQAFAAAEgBQAJgCAIgEQABAAABgBQAGgCAFgFQABgBABgBQAHgGAFgHQAFgGAFgIQAEgIAEgKQAEgIABgKQABgEAAgDQgCgGAAgGQAAgFAAgFQACgLADgKIAAAAQABgEABgEABjAFQAUgKAHAQAAigEQAVgRARAVAABBpQApAgAEgKAAHBOQgEAbgbgCAiOhcQgJABgIAFQgHAFgDAJQgDAJAAALQAAAKAIAGQACACADACQABABACAAQgJACgJAIQgKAJgFAMQgCAFABAGQAAACABACQgMAJAQAOQAAAAAAAAQAAAAgBAAQgaAGAUAUIABAAQgVAKAXAQQAHAFAHgCQAAAMAQALQANAJAGgKQAGAEAKABQASADADgLQACgBACgCQABgBABgBQANgPgJgRQACgCACgBQADgEAAgEQABgCgBgBQAAgBgBAAQgEgDgDgEQgBgCgBgCQAAAAAAgBQgBgCAAgCQgCgFABgFQABgCAAgCQABgCABgCQAFgIAHgGQAEgFAFgBQAEgCADABQAGgBADADAi/BAQAAAAAAAAQABAAAAABQgBgBAAAAgAi5AmIgBAAAhWA9QAFADAGABQADAAACAAAhOAcQgGACgBAEQgCAEACAG");
	this.shape_60.setTransform(43.9,14.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC9A67").s().p("AASBzQgKAAgJgCIgLgCIgHgCIgEgCIgNgHIgOgLIgOgMQgHgGgFgJIgBgBQgEgHAAgHIAAgEIAAAEQAAAHAEAHQgiAAgMgPQAOgPgJgRIAEgEQADgDAAgEIAAgDQAFADAGABIAFAAIgFAAQgGgBgFgDIgBAAQgFgDgDgFIgBgDIgBgBIgBgEQgBgFABgGIABgDIACgEQAFgIAGgGQAFgFAFgCIAHgBQAGAAACADQADADAAAGQAAgGgDgDQAKgBAIgFQAGgDgCgEQgCgEgEgDQAIgCAHgEQAGgDAAgIIgBgIQAMAFANgBQAFAAAEgDQAEgCADgEQADgFAAgGQAEADAFADQAOAHAOAEQAKADAJgGQAHgFADgEIADAGQAFAHAJAEQAJAEAJABQADAKAGAHIABABQAHAHALABQgJATgGAUIgDAIIAAAAQgDAKgBAKIgBAKQAAAGACAGIAAAHQgCAJgDAJIgJASIgJAOIgNANIgCACQgFAEgGADIgBABQgIADgJACIgJACIgHAAIgDAAgAARBFQAAAAABgBQABAAAAAAQABAAAAgBQAAAAABgBIAAAAIAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgBABAAAAIAAAAIgCgBIgDAAIgBAAIAAgBIgBAAIAAAAIAAAAIgCgBIgBAAIgBgBIgBAAIAAAAIgBgBIgCgBIAAAAIgBgBIgBgBIgDgCIgEgDIgBAAIgNgKIgBAAIgBgBIAAAAIgBgBIABABIAAAAIABABIABAAIANAKIABAAIAEADIADACIABABIABABIAAAAIACABIABABIAAAAIABAAIABABIABAAIACABIAAAAIAAAAIABAAIAAABIABAAIADAAIACABIAAAAgAAwAtIAJgBIAAAAIABAAIAAAAQAIgDADgKIAAgEIAAgCIAIgRIACgFIAFgLIADgKIABgFIAAgCIAAgCQABgDgCgEQgJgDgIADQgFACgDADIgEAEIgCADIgCADIAAABQgDAGgCAHQgCAIAAAJQAFgDAFADIAHAEIACADIAAAAQACADABADIAAACIAAAEQgDAKgIADIAAAAIgBAAIAAAAIgJABIAAAAIgBAAIgJgBIgCgBIgFgCIAFACIACABIAJABIABAAIAAAAgAgtAqQAYAAAEgZIAAAAIAAAAQgEAZgYAAIgBAAIAAAAIgCAAIgBAAIABAAIACAAIAAAAIABAAgAAIgiIgLAOQgFAIAAALQAAAEAFAEQAEADAFgBIAHgDQAJgFAEgGIABgCIAJgLIAEgGIAAgCQACgIgGgGQgEgCgGgBIgBAAQgKABgHAIgAhvgQIgBgGIABgEQACgEAFgCQgFACgCAEIgBAEIABAGgABkgxIAAAAQgEgKgJAAIAAAAIAAAAQgFAAgHADIgBABIABgBQAHgDAFAAIAAAAIAAAAQAJAAAEAKIAAAAgAAvg9QgKgMgKAAIgBAAIAAAAQgIAAgIAHIAAAAIgBAAIAAAAIAAABIAAgBIAAAAIABAAIAAAAQAIgHAIAAIAAAAIABAAQAKAAAKAMIAAAAgABFAZIAAAAgAhvAAIAAAAg");
	this.shape_61.setTransform(46.5,20.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(0.1,1,1).p("ACHAmQAIAAAIgBQAKgEADgKQADgIgEgFQAHgBAGgFQAHgFADgJQAEgIgEgIQAAgBAAAAQAAgBAAgBQAFgHAFgHQAGgIAAgLQABgLgFgIQgFgKgLAAQgEgBgEABQACgHAAgIQAAgIgEgGQgBgBAAgBQgJgKgMgEQgLgEgLAFQgBABgBAAQgBgJgEgIQgFgKgKgBQgKgBgIADQgJADgHAEQAAgGgGgHQgHgKgNABQgMABgLADQgNAEgGALQgCACgBADQgBgGgGgGQgKgKgNADQgIACgHACQgIADgCAIQgBADAAAFQgCgIgKgEQgMgFgNAGQgHADgGAEQgJAEgCAJQgCAIADAFQgKgFgFAGQgEAEgDAEQgFAHgBALQAAABAAACQAAABABACQAAADACADACHAmQAHgUAIgSQgLgBgHgHIAAAAQgGgIgDgKQgKgBgIgDQgJgFgFgHQgCgDgBgDQgEAEgGAFQgKAGgKgDQgOgEgNgGQgHgEgEgDQAAAHgDAEQgCAEgEADQgEACgGABQgMAAgMgFQABADAAAGQAAAHgGADQgHAEgIACQAFADABAEQACAEgFACQgJAFgJABQADADAAAGAA1A2QAEgGAFgGQACgCABgDQABgCAAgBQACgIgGgFQgEgDgGAAQgBAAgBAAQgKAAgHAIQgGAHgFAIQgGAHAAALQABAFAFAEQAEADAGAAQgDgCAAgCQgCgKAJgFQAKgFAHAHgAAgBHQADgBAEgCQAIgGAFgHQAAgBABAAABpBAQACgGADgGQABgFABgFQABgDAAgCQAAgBAAgBQABgBAAAAQAAgEgCgEQgIgDgJADQgEACgEADQgCACgCACQgBABgBACQAAABgBACQAAAAgBABQgDAGgBAIQgCAIAAAKQAFgEAFADQADACADACQgCgEAAgGQAAgHADgBQALgDAEAIgABZBNQABABABACIABAAQACADABADQAEgIAEgJQABgDABgCABfBWQAAADgBADQgCAKgJADQgLADgKgDQgDgBgDgCAg3BpQgBAJAEAIQABABAAABQAFAIAIAHQAHAGAHAGQAHAFAHAFQAGAEAGADQACABACABQADABADABQAGACAGABQAJABAKAAQAFAAAFAAQAFAAAEgBQAJgCAIgEQABAAABgBQAGgCAFgFQABgBABgBQAHgGAFgHQAFgGAFgIQAEgIAEgKQAEgIABgKQABgEAAgDQgCgGAAgGQAAgFAAgFQACgLADgKIAAAAQABgEABgEABjAFQAUgKAHAQAAigEQAVgRARAVAABBpQApAgAEgKAAHBOQgigBADAaAiOhcQgJABgIAFQgHAFgDAJQgDAJAAALQAAAKAIAGQACACADACQABABACAAQgJACgJAIQgKAJgFAMQgCAFABAGQAAACABACQgMAJAQAOQAAAAAAAAQAAAAgBAAQgaAGAUAUIABAAQgVAKAXAQQAHAFAHgCQAAAMAQALQANAJAGgKQAGAEAKABQASADADgLQACgBACgCQABgBABgBQANgPgJgRQACgCACgBQADgEAAgEQABgCgBgBQAAgBgBAAQgEgDgDgEQgBgCgBgCQAAAAAAgBQgBgCAAgCQgCgFABgFQABgCAAgCQABgCABgCQAFgIAHgGQAEgFAFgBQAEgCADABQAGgBADADAi/BAQAAAAAAAAQABAAAAABQgBgBAAAAgAi5AmIgBAAAhWA9QAFADAGABQADAAACAAAhOAcQgGACgBAEQgCAEACAG");
	this.shape_62.setTransform(43.9,14.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC9A67").s().p("AASBzQgKAAgJgCIgLgCIgHgCIgEgCIgNgHIgOgLIgOgMQgHgGgFgJIgBgBQgEgHAAgHIAAgEIAAAEQAAAHAEAHQgiAAgMgPQAOgPgJgRIAEgEQADgDAAgEIAAgDQAFADAGABIAFAAIgFAAQgGgBgFgDIgBAAQgFgDgDgFIgBgDIgBgBIgBgEQgBgFABgGIABgDIACgEQAFgIAGgGQAFgFAFgCIAHgBQAGAAACADQADADAAAGQAAgGgDgDQAKgBAIgFQAGgDgCgEQgCgEgEgDQAIgCAHgEQAGgDAAgIIgBgIQAMAFANgBQAFAAAEgDQAEgCADgEQADgFAAgGQAEADAFADQAOAHAOAEQAKADAJgGQAHgFADgEIADAGQAFAHAJAEQAJAEAJABQADAKAGAHIABABQAHAHALABQgJATgGAUIgDAIIAAAAQgDAKgBAKIgBAKQAAAGACAGIAAAHQgCAJgDAJIgJASIgJAOIgNANIgCACQgFAEgGADIgBABQgIADgJACIgJACIgHAAIgDAAgAARBFQAAAAABgBQABAAAAAAQABAAAAgBQAAAAABgBIAAAAIAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgBABAAAAIAAAAIgCgBIgDAAIgBAAIAAgBIgBAAIAAAAIAAAAIgCgBIgBAAIgBgBIgBAAIAAAAIgBgBIgCgBIAAAAIgBgBIgBgBIgDgCIgEgDIgBAAIgNgKIgBAAIgBgBIAAAAIgBgBIABABIAAAAIABABIABAAIANAKIABAAIAEADIADACIABABIABABIAAAAIACABIABABIAAAAIABAAIABABIABAAIACABIAAAAIAAAAIABAAIAAABIABAAIADAAIACABIAAAAgAAwAtIAJgBIAAAAIABAAIAAAAQAIgDADgKIAAgEIAAgCIAIgRIACgFIAFgLIADgKIABgFIAAgCIAAgCQABgDgCgEQgJgDgIADQgFACgDADIgEAEIgCADIgCADIAAABQgDAGgCAHQgCAIAAAJQAFgDAFADIAHAEIACADIAAAAQACADABADIAAACIAAAEQgDAKgIADIAAAAIgBAAIAAAAIgJABIAAAAIgBAAIgJgBIgCgBIgFgCIAFACIACABIAJABIABAAIAAAAgAgxAqQgDgZAhAAIAAAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIAAAAQghAAADAZgAAIgiIgLAOQgFAIAAALQAAAEAFAEQAEADAFgBIAHgDQAJgFAEgGIABgCIAJgLIAEgGIAAgCQACgIgGgGQgEgCgGgBIgBAAQgKABgHAIgAhvgQIgBgGIABgEQACgEAFgCQgFACgCAEIgBAEIABAGgABkgxIAAAAQgEgKgJAAIAAAAIAAAAQgFAAgHADIgBABIABgBQAHgDAFAAIAAAAIAAAAQAJAAAEAKIAAAAgAAvg9QgKgMgKAAIgBAAIAAAAQgIAAgIAHIAAAAIgBAAIAAAAIAAABIAAgBIAAAAIABAAIAAAAQAIgHAIAAIAAAAIABAAQAKAAAKAMIAAAAgABFAZIAAAAgAhvAAIAAAAg");
	this.shape_63.setTransform(46.5,20.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.1,1,1).p("ACHAmQAIAAAIgBQAKgEADgKQADgIgEgFQAHgBAGgFQAHgFADgJQAEgIgEgIQAAgBAAAAQAAgBAAgBQAFgHAFgHQAGgIAAgLQABgLgFgIQgFgKgLAAQgEgBgEABQACgHAAgIQAAgIgEgGQgBgBAAgBQgJgKgMgEQgLgEgLAFQgBABgBAAQgBgJgEgIQgFgKgKgBQgKgBgIADQgJADgHAEQAAgGgGgHQgHgKgNABQgMABgLADQgNAEgGALQgCACgBADQgBgGgGgGQgKgKgNADQgIACgHACQgIADgCAIQgBADAAAFQgCgIgKgEQgMgFgNAGQgHADgGAEQgJAEgCAJQgCAIADAFQgKgFgFAGQgEAEgDAEQgFAHgBALQAAABAAACQAAABABACQAAADACADACHAmQAHgUAIgSQgLgBgHgHIAAAAQgGgIgDgKQgKgBgIgDQgJgFgFgHQgCgDgBgDQgEAEgGAFQgKAGgKgDQgOgEgNgGQgHgEgEgDQAAAHgDAEQgCAEgEADQgEACgGABQgMAAgMgFQABADAAAGQAAAHgGADQgHAEgIACQAFADABAEQACAEgFACQgJAFgJABQADADAAAGAA1A2QAEgGAFgGQACgCABgDQABgCAAgBQACgIgGgFQgEgDgGAAQgBAAgBAAQgKAAgHAIQgGAHgFAIQgGAHAAALQABAFAFAEQAEADAGAAQgDgCAAgCQgCgKAJgFQAKgFAHAHgAgJBJQgHAEgHADAAgBHQADgBAEgCQAIgGAFgHQAAgBABAAABpBAQACgGADgGQABgFABgFQABgDAAgCQAAgBAAgBQABgBAAAAQAAgEgCgEQgIgDgJADQgEACgEADQgCACgCACQgBABgBACQAAABgBACQAAAAgBABQgDAGgBAIQgCAIAAAKQAFgEAFADQADACADACQgCgEAAgGQAAgHADgBQALgDAEAIgABZBNQABABABACIABAAQACADABADQAEgIAEgJQABgDABgCABfBWQAAADgBADQgCAKgJADQgLADgKgDQgDgBgDgCAg3BpQgBAJAEAIQABABAAABQAFAIAIAHQAHAGAHAGQAHAFAHAFQAGAEAGADQACABACABQADABADABQAGACAGABQAJABAKAAQAFAAAFAAQAFAAAEgBQAJgCAIgEQABAAABgBQAGgCAFgFQABgBABgBQAHgGAFgHQAFgGAFgIQAEgIAEgKQAEgIABgKQABgEAAgDQgCgGAAgGQAAgFAAgFQACgLADgKIAAAAQABgEABgEABjAFQAUgKAHAQAAigEQAVgRARAVAACBgQACAHAEAGQABACABACQAFAJAJADQAJADAJgBAiOhcQgJABgIAFQgHAFgDAJQgDAJAAALQAAAKAIAGQACACADACQABABACAAQgJACgJAIQgKAJgFAMQgCAFABAGQAAACABACQgMAJAQAOQAAAAAAAAQAAAAgBAAQgaAGAUAUIABAAQgVAKAXAQQAHAFAHgCQAAAMAQALQANAJAGgKQAGAEAKABQASADADgLQACgBACgCQABgBABgBQANgPgJgRQACgCACgBQADgEAAgEQABgCgBgBQAAgBgBAAQgEgDgDgEQgBgCgBgCQAAAAAAgBQgBgCAAgCQgCgFABgFQABgCAAgCQABgCABgCQAFgIAHgGQAEgFAFgBQAEgCADABQAGgBADADAi/BAQAAAAAAAAQABAAAAABQgBgBAAAAgAi5AmIgBAAAhWA9QAFADAGABQADAAACAAAhOAcQgGACgBAEQgCAEACAG");
	this.shape_64.setTransform(43.9,14.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CC9A67").s().p("AASBzQgKAAgJgCIgLgCIgHgCIgEgCIgNgHIgOgLIgOgMQgHgGgFgJIgBgBQgEgHAAgHIAAgEIAAAEQAAAHAEAHQgiAAgMgPQAOgPgJgRIAEgEQADgDAAgEIAAgDQAFADAGABIAFAAIgFAAQgGgBgFgDIgBAAQgFgDgDgFIgBgDIgBgBIgBgEQgBgFABgGIABgDIACgEQAFgIAGgGQAFgFAFgCIAHgBQAGAAACADQADADAAAGQAAgGgDgDQAKgBAIgFQAGgDgCgEQgCgEgEgDQAIgCAHgEQAGgDAAgIIgBgIQAMAFANgBQAFAAAEgDQAEgCADgEQADgFAAgGQAEADAFADQAOAHAOAEQAKADAJgGQAHgFADgEIADAGQAFAHAJAEQAJAEAJABQADAKAGAHIABABQAHAHALABQgJATgGAUIgDAIIAAAAQgDAKgBAKIgBAKQAAAGACAGIAAAHQgCAJgDAJIgJASIgJAOIgNANIgCACQgFAEgGADIgBABQgIADgJACIgJACIgHAAIgDAAgAAMBCIACAAIADAAIgDAAIgCAAIAAAAIgBAAQgGAAgFgBIgBgBQgJgDgFgJIgCgEIgGgNIAGANIACAEQAFAJAJADIABABQAFABAGAAIABAAIAAAAgAAwAtIAJgBIAAAAIABAAIAAAAQAIgDADgKIAAgEIAAgCIAIgRIACgFIAFgLIADgKIABgFIAAgCIAAgCQABgDgCgEQgJgDgIADQgFACgDADIgEAEIgCADIgCADIAAABQgDAGgCAHQgCAIAAAJQAFgDAFADIAHAEIACADIAAAAQACADABADIAAACIAAAEQgDAKgIADIAAAAIgBAAIAAAAIgJABIAAAAIgBAAIgJgBIgCgBIgFgCIAFACIACABIAJABIABAAIAAAAgAgwATIANgHIgNAHgAAIgiIgLAOQgFAIAAALQAAAEAFAEQAEADAFgBIAHgDQAJgFAEgGIABgCIAJgLIAEgGIAAgCQACgIgGgGQgEgCgGgBIgBAAQgKABgHAIgAhvgQIgBgGIABgEQACgEAFgCQgFACgCAEIgBAEIABAGgABkgxIAAAAQgEgKgJAAIAAAAIAAAAQgFAAgHADIgBABIABgBQAHgDAFAAIAAAAIAAAAQAJAAAEAKIAAAAgAAvg9QgKgMgKAAIgBAAIAAAAQgIAAgIAHIAAAAIgBAAIAAAAIAAABIAAgBIAAAAIABAAIAAAAQAIgHAIAAIAAAAIABAAQAKAAAKAMIAAAAgABFAZIAAAAgAhvAAIAAAAg");
	this.shape_65.setTransform(46.5,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},8).to({state:[{t:this.shape_45},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},3).to({state:[{t:this.shape_40},{t:this.shape_51},{t:this.shape_38},{t:this.shape_50}]},1).to({state:[{t:this.shape_40},{t:this.shape_53},{t:this.shape_38},{t:this.shape_52}]},1).to({state:[{t:this.shape_40},{t:this.shape_55},{t:this.shape_38},{t:this.shape_54}]},1).to({state:[{t:this.shape_40},{t:this.shape_57},{t:this.shape_38},{t:this.shape_56}]},1).to({state:[{t:this.shape_40},{t:this.shape_59},{t:this.shape_38},{t:this.shape_58}]},1).to({state:[{t:this.shape_40},{t:this.shape_61},{t:this.shape_38},{t:this.shape_60}]},1).to({state:[{t:this.shape_40},{t:this.shape_63},{t:this.shape_38},{t:this.shape_62}]},1).to({state:[{t:this.shape_40},{t:this.shape_65},{t:this.shape_38},{t:this.shape_64}]},1).to({state:[{t:this.shape_40},{t:this.shape_51},{t:this.shape_38},{t:this.shape_50}]},1).to({state:[{t:this.shape_40},{t:this.shape_53},{t:this.shape_38},{t:this.shape_52}]},1).to({state:[{t:this.shape_40},{t:this.shape_55},{t:this.shape_38},{t:this.shape_54}]},1).to({state:[{t:this.shape_40},{t:this.shape_57},{t:this.shape_38},{t:this.shape_56}]},1).to({state:[{t:this.shape_40},{t:this.shape_59},{t:this.shape_38},{t:this.shape_58}]},1).to({state:[{t:this.shape_40},{t:this.shape_61},{t:this.shape_38},{t:this.shape_60}]},1).to({state:[{t:this.shape_40},{t:this.shape_63},{t:this.shape_38},{t:this.shape_62}]},1).to({state:[{t:this.shape_40},{t:this.shape_65},{t:this.shape_38},{t:this.shape_64}]},1).wait(37));

	// Layer 1
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(0.1,1,1).p("AAdlsIAAAAQAXACEZB/QDVBgjJAqAmXhEQgFgIgEgIQgDgIgDgJQgDgJgBgKQgBgKACgJQABgJACgJQACgKABgJQABgLAEgHQADgHAGgIQAFgHAHgGQAGgFAFgEQABgCABAAQABgHACgGQACgHADgHQAAgCABgBQABgHADgIQACgKAFgIQAGgJAGgHQAGgHAHgHQAGgHAIgGQAGgFAHgGQAIgFAJgFQAIgFAKgDQAJgDAJgCQAJgDAKgCQAHgCAIgCQBIgCAjgOQAKgEAGgJQgBgTALgGQACgBAEgBQAegFAUASQAUASANAWQAKAPAKAOAAKkDQAAABgCABQgIAFgIACQgJADgKAAQgJAAgKgBQgJgBgJgBQgBAAgBAAQgIgCgJgBQgKgCgIgDQgDgBABgDQAAgCABgDQADgBACgBQAHgBAHgBQAJgBAKABQAKAAAJAAQAJAAAKAAQAKgBAJADQAFABAEADQAEABADADQABABAAABIAAAAQgCAJAAAKQgBAJgBAKQgBAJAAAKQAAAEAAAEQAAAAABAAQgBAAAAAAQAAAGgBAFQgBAKABAKQAAAJgBAKQgBAKACAJQADALgGAGQgCAEgGABQgJADgJACQgBABgBAAQgIACgIgBQgKAAgJgDQgJgDgKAAQgHgBgFgBQgDgBgCgBQgCgBgBgCQgHgCgIgCQgIgBgCADQgBACgBACQgEAIgKABQgKAAgJgCQgJgBgGgEQgFAIgFAHQgEAHgHAIQAAABgBAAQAAAAAAABQgBAAAAABQAAAAABAAQAAgBABAAQAAAAABAAQAEgCAGgBQAJgDAJAAQAKAAAKAAQAKAAAJAAQAKAAAKgBQAJAAAKACQAJACAHAFQAHAFAFAIQAKgIAJgEQAJgEAKgBQAJAAAJABQAIABAHACQAEgDAGgEQAIgFAJgDQAJgCAJgCQAJgCAJgBQAJgBAJgBQABAAACAAQAIgBAIgBQAKAAAKAAQAJABAJADQAJADAJAEQAGADAEAEQgBgBgBgBQAAgBAAAAIgEgFIAIAKIAAABIABAAQABgBACAAQAAAPAAAEQAAAEgBAEQgBAFAAAGQgCAJAAAKQAAAKgDAJQgCAIgEAJQgDAIgEAHQgDAFgCAGQgBADgBADQgDAKgCAIQAAABgBABQgBAJgDAJQgDAJgFAIQgEAIgEAIQAAAAAAABQgEAGgDAHQAAACgBACQgDAJgFAIQgFAIgGAHQgGAIgFAIQgFAIgGAIQgFAIgDAGQAAgCAAgBQgBAFgDAIQgDAGgDAGQAAACgBACQgBADgBACQAAAEgCAEQgBADgBADQgBABAAABQgBABgBABQABgDACgBAAFjCIAAAAABoirQgBAFgCAFQgCAJgEAIQgDAIgFAIQgFAIAAAKQgBAJAGADQADABADACABmjcQAAABABABQACAKAAAJQABAKgBAJQAAAFgBAEABsjdQgEgDgEgCACyicIAAAAIAAgDQAAACAAABgACyicQgigHgogIAjvkJQACAJADAIQADAJgCAKQgBALgIAGQgDACADAFQAGAJAAAKQABAHgBAHQAAABAAABQgBAAgBAAQgEABgEACQgJACgIACQgJADgJADQgJADgKADQgHADgHAEQgBAAgBABQgIAEgHAFAlUjIQAJgCAHgHQAHgFAFgGAjsiqQAEgBAFgBQAJgDAIgCQAHgCAFgCQAAgKADgJQACgKAFgHQAEgHAIgGQAHgFAJgEQAIgDAKABQAKAAAJgBQAKgCAJABQAAAAABAAQAIABAJABQAJACAJADQAAAAABAAQAJADAEAIQAFAKgMAFQgBAAgCABQAAAAAAAAQgBAAAAAAIAAAAQgHACgIgBQgJAAgJAAQgJAAgJAAQgKgBgKABAhnjzQgCgJACgKAg9izQgCABgCABQgGACgGABQgDAAgDAAQgJAAgJAAQgKgBgJACQgIABgHABAhAjRQAHgCAGAHQAAAAAAAAQAEAGgCAGQgBACgBACQgEAGgGADQAGAGABAKQAAADgDADQgGAHgJACQgJADgIABQAIAEAJADQAKADACAIQABAFgDAEQgGAGgKACQgJACgKgCQgCAAgCAAAhZiQQgBAAgBAAQgGABgHAAQgDAAgDAAQgJAAgJgBAg+g6IAAAAQAFAJAEAJQAEAIAAAKQAAAKgBAKQgBAIgDAKQgDAJgCAJQgDAJgCAKQgDAJgCAJQgDAJgEAIQAAABAAAAQgBABAAACQgBAHgCAHQgCAKgCAJQgBAKgBAJQgBACAAACIAAABAirhwQgCADgCADQgBABAAAAAjHhIQgBABgBABQgFAFgEAEQgHAGgIAFQgGADgHADQgEAHgEAJQgEAIgEAJQgDAIgDAJQgCAJAAAJQAAAJABAJQABAJADAJQADAKAEAIQAEAJAGAGQADAEADACQACABACACQAAgCABgCQACgJABgJQABgJAEgIQADgIACgIQADgIAEgIQAEgIADgIAmXhEQAAAAABABQAGAHAJADQAJACAKACQAJADAKADQAJADAJACQAJACAKAAQAJABAKABQAJAAAKAAQAJAAAJgBQAJgCAJgCQACgBACAAAmYBqQgBgBAAAAQgBgCgBgBQAAgBAAgBQgFgHgGgHQgHgIgDgJQgDgJgBgKQgBgIgBgJQgCgJgBgJQgBgKACgIQABgKAEgIQADgJAFgIQAFgIAGgHQAAAAABgBQAAAAAAAAQAFgGADgIAlPBpQgCAOgCAOAjfCbQgNAJgSAAQgSABgRgCIgBAAQgBgBAAAAQgOgBgMgHQgNgGgNgIQgDgCgCgBQgPgJgPgGQgNgGgNgIQgCgCgCAAAmUBtQgBAAgCgCQgBAAAAgBAgdCFQgJADgKACQgSACgVAJQgBAHAAAHQgBAKgCAJQgDAIgCAKQgCAIgCAIQgDAJgCAIQgCAJgDAJQgBAEAAADQAAAJgDAJQgDAIAAAKQgBAJACAKQACAJACAJQADAIAGAIQAGAHAHAFQAIAGAIAEQAJAFAKABQAKACAJABQAJACAJADQAJADAJADQAIACAIAGQAIAFABAKQABAKgHAGQgGAFgKgEQgKgEgGAGQgFAGgJABQgJABgKgCQgJgBgJgDQgJgCgJACQgKACgJACQgJACgKABQgKAAgJgDQgJgDgIgFQgIgGgJgDQgIgEgHgGQgIgGgFgIQgGgIgFgHQgFgJgGgHQgGgHgGgGQgGgGADgKQAEgKAEgGQADgEADgDQACgBABgDQACgDAAgEQABgFACgFQADgJAAgKQAAgJABgKQABgJAAgKQAAgJABgKQAAgKgCgJQgDgJgCgJQgDgJgCgJQgBgDAAgDQgBgBAAAAQgCgGgDgEQgBgDgBgEQgDgKABgKQABgIACgHAAzEIQgDAGAAAHQgBAKAFAIQAFAIAGAGQAHAHAHAGQAHAGAKADQAJADAIAEQAIAFAIAGQAGAFAFAJQACAEgCAEQgDAEgGAAQgJgBgJgCQgLgCgIAEQgCACACACQAFAHAEAKQABAFgCACQgCACgHAAQgJAAgKgBQgJgBgJgFQgJgEgGgGQgDgDgDgDQAAAAAAgBQgBAAgBgBQgHgHgIgFQgIgFgIgFQgGgGgHgHQgHgHgHgFQgIgGgIgGQgIgGgJgBQgBAAAAAAQgBgCgCgBQgFgHgDgIQgEgKADgJQACgJAFgIQADgHADgJQAEgJAEgJQAFgIAEgIQAEgIADgJQAEgJAAgKQABgKACgJQACgIgBgJQgBgCAAgCIAAgBQAAgJABgKQAAgJABgKQACgIAAgJQACgKAEgJQAEgHAEgHQACgDACgDQABgBABgBQAEgGAFgFQAIgGACgIACvhPQABACABABACxhNIABABAgHAmQAAgEgCgEQgEgHgFgIQgDgEgBgFQgBgEAAgEQgBgJADgJQACgJACgJQACgJAHgIQAGgHAGgGQACgBADgCAE3h6QgkgOhhgUAgzjMQAgAAAYAKAgxjAQAYgEAeAC");
	this.shape_66.setTransform(44.2,64.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00CCFF").s().p("AAEA2QgIgBgKgDQgJgCgJgBQgIAAgFgCIgFgCQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIAFABQAJABAKgCQAJgCAGgGQADgDAAgFQgCgIgLgDQgJgDgHgFIARgDQAIgCAGgGQADgDAAgEQAAgJgHgGQAHgDAEgHIABgDQACgGgDgGQAfAAAYAJIAAAAIgRAAIgBAAIAAAAQgUAAgQADQAQgDAUAAIAAAAIABAAIARAAIgBAMQAAAJAAAKIgBATQgBAJACAKQADAKgFAHQgEADgGACIgRAFIgCAAQgHACgHAAIgDAAgAA1gsIAAAAg");
	this.shape_67.setTransform(39.4,49.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AA0AnIAAgBQgYgJgfAAIgBAAQgFgHgHABIADAAQAMgFgFgKQgFgIgJgCIgBAAIgRgFIgSgCQgBgJABgKIAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAABAAIASAFIARACIABABIASACIAGABIAFAAIABAAIABAAIACAAIAEAAQAJAAAJgDQAKgCAIgFIACgCIgCACQgIAFgKACQgJADgJAAIgEAAIgCAAIgBAAIgBAAIgFAAIgGgBIgSgCIgBgBIgRgCIgSgFQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAAAIACgFIAFgCIANgCIAUAAIARAAIATAAQAKgBAJADQAGABAFADIAGAEIACACIAAAAIgDATIgCASIAAATIgBAHIABABIgBAAgAg4gcIAAAAg");
	this.shape_68.setTransform(39.5,41.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CC9A67").s().p("AiTG1QgJgDgHgFQgIgGgJgDQgIgEgIgGQgHgGgGgIIgKgPIgMgQIgLgNQgHgGAEgKQADgKAFgGIAGgHIADgEIABgHIADgKQADgJAAgKIACgTIABgTIAAgTQABgKgDgJIgFgSIgEgSIgCgGIgBgBIgFgKIgCgHQgCgKABgKIACgPIgUgYIgHgSIgEgSIgBgSQAAgJADgJIAGgRIAHgRIAJgQIgFABIgRAEQgJABgKAAIgTAAIgTgCIgTgCIgSgFIgTgGIgSgEQgKgDgGgHIgBgBQgFgIgDgIIgGgRQgDgJgBgKQgBgKABgJIADgSIADgTQACgLADgHQAEgHAFgIQAFgHAHgGIAMgJIACgCQAAgHACgGIAFgOIABgDIAEgPQADgKAFgIIALgQIANgOIAOgNIAOgLIAQgKQAJgFAJgDIATgFIASgFIAQgEQBHgCAjgOQAKgEAHgJQgCgTALgGIAGgCQAfgFAUASQATASAPAWIASAdIAFgFIAEAAIAAgDIAAAAQAWACEZB/QDWBgjKAqIAAgZIgiAAQgjgOhigUIAAgDIAAADIAAgDIAAADIAAAAIhKgPIACgJIAAgJIAAgKIgDgTIgBgCIABACIADATIAAAKIAAAJIgCAJIgCAKIgGARIgIAQQgFAIgBAKQAAAJAGADIAFADIARgCIATAAQAJABAJADIASAHQAGADAFAEIgCgCIgBgBIgDgFIAIAKIgIgKIAIAAIAAAKIAAABIAAAAIAEgBIAAATIgBAIQgnACgcAKIgEACQgPAfAAAmIAAAKQAhAdAAAvIAAABIgGANIgBAEQgEAJgFAIIgKAPIgMAQIgKAQIgJAOIABgDQgBAFgEAIIgFAMIgCAEIgBAFIgCAIIgCAGIgDAEQgDAGAAAHQgBAKAFAIQAEAIAHAGIANANQAIAGAJADQAJADAJAEIAPALQAHAFAEAJQACAEgCAEQgCAEgGAAQgKgBgJgCQgKgCgIAEQgBABAAAAQgBABAAAAQAAABAAAAQABABAAAAQAGAHADAKQACAFgCACQgDACgGAAIgTgBQgKgBgIgFQgJgEgGgGIgGgGIgBgBIgBgBQgHgHgJgFIgOgKQgIgGgGgHIgPgMIgPgMQgIgGgJgBIgBAAIgDgDQgGgHgDgIQgDgKACgJQADgJAEgIIAHgQIAIgSIAIgQQAFgIADgJQADgJABgKIADgTQACgIgCgJIgBgEIAAgBIABgTIACgTIACgRQABgKAEgJIAJgOIAEgGIABgCQAEgGAHgFQAHgGABgIQgBAIgHAGQgHAFgEAGIgBACIgCgIIgJgPQgDgEgBgFIgCgIQAAgJACgJIAFgSQACgJAGgIQAGgHAIgGIADgDIALgHQAIgFAJgDIARgEIASgDIATgCIACAAIgCAAIgTACIgSADIgRAEQgJADgIAFIgLAHQgFgCgJgBIgTgBQgKABgJAEQgIAEgLAIIABAAIAJASQAEAIAAAKQAAAKgCAKQgBAIgDAKIgFASIgFATIgFASQgCAJgEAIIgBABIAAADIgDAOIgEATIgDATIAAAEIAAABIgCAOIgDATIgEASIgFAQIgEARIgFASIgCAHQABAJgDAJQgDAIgBAKQAAAJABAKIAFASQACAIAGAIQAGAHAIAFIAQAKQAIAFAKABIATADQAKACAIADIATAGQAIACAIAGQAHAFABAKQABAKgGAGQgHAFgJgEQgKgEgGAGQgFAGgJABQgKABgJgCIgSgEQgJgCgKACIgSAEQgKACgKABQgKAAgJgDgAjZAfIgGAQIgGAQQgDAIgCAJIgDASIgBAEIABgEIADgSQACgJADgIIAGgQIAGgQIAIgQIgIAQgAjRhGIgIAJQgHAGgIAFIgNAGIANgGQAIgFAHgGIAIgJIACgCIgCACgAhihOQAKACAHAFQAHAFAEAIQgEgIgHgFQgHgFgKgCIgTgCIgTABIgUAAIgTAAQgKAAgJADIgKADIgBAAIAAABIgBgBIABgBIABgBIALgPIAKgPIgKAPIgLAPIgBABIgBABIgBABIACAAIAAgBIABAAIAKgDQAJgDAKAAIATAAIAUAAIATgBIATACgACqhMIgCgDIACADgAhqhqIAFACQAFABAIABQAJAAAJADQAKADAJAAQAIABAJgCIACgBIARgFQAGgBAEgEQAFgGgCgLQgDgJABgKIABgTQAAgKABgKIAAgLIABAAIgBAAIABgIIAAgTIABgTIADgTIAAAAIgCgCIgFgEQgFgDgGgBQgJgDgKABIgTAAIgSAAIgUAAIgNACIgFACIgCAFQgBAKABAJIAAAAQgKgBgKACIgTABIgDAAIAAAAIAAAAQgHAAgHACIgBAAQgIAEgIAFQgHAGgFAHQgEAHgDAKQgCAJAAAKIgMAEIgSAFIgJACIAAgCIABgIIAAgGQgBgKgFgJIgCgEQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAIgGABgLIAAgHQAAgGgCgGQgDgIgBgJQABAJADAIQACAGAAAGIAAAHQgBALgIAGQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIACAEQAFAJABAKIAAAGIgBAIIAAACIgBAAIgIADIgSAEIgSAGIgSAGIgOAHIgCABIgPAJIAPgJIACgBIAOgHIASgGIASgGIASgEIAIgDIABAAIAJgCIASgFIAMgEQAAgKACgJQADgKAEgHQAFgHAHgGQAIgFAIgEIABAAQAHgCAHAAIAAAAIAAAAIADAAIATgBQAKgCAKABIAAAAIASACIARAFIABAAQAJADAFAIQAFAKgMAFIgDABIgBAAIgBAAIAAAAIgBAAIgKABIgBAAIAAAAIgBAAIgBAAIgSAAIgTAAIgEAAIgCAAIgBAAIAAAAIgLAAIgBAAIABAAIALAAIAAAAIABAAIACAAIAEAAIATAAIASAAIABAAIABAAIAAAAIABAAIAKgBIABAAIAAAAIABAAIABAAQAGgCAGAHIABAAQAEAGgDAGIgBAEQgEAGgHADQAHAGAAAKQAAADgDADQgFAHgJACIgRAEQAHAEAJADQALADACAIQABAFgEAEQgGAGgJACQgKACgJgCIgEAAQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAgAiahiIADAAIABAAQALgBADgIIACgEQACgCAEAAIAAAAIAAAAIABAAIACAAIABAAIABAAIAPAEIgPgEIgBAAIgBAAIgCAAIgBAAIAAAAIAAAAQgEAAgCACIgCAEQgDAIgLABIgBAAIgDAAIAAAAIAAAAIgOgBIgBgBQgIgBgGgEIAAgBIAEgGIgEAGIAAABQAGAEAIABIABABIAOABIAAAAIAAAAgAh1iPIAGAAIANgBIACAAIgCAAIgNABIgGAAIgTgBIATABgAiAitIgPACIAPgCQAKgCAJABIAJAAIAJAAIAGAAIANgDIADgCIgDACIgNADIgGAAIgJAAIgJAAIgFAAIgOABgAlLjRQgHAHgJACQAJgCAHgHQAHgFAFgGQgFAGgHAFgABkjdIgHgFIAHAFgAB4B3QAAgvghgdIAAgKQAAgmAPgfIAEgCQAcgKAngCIgCALIgCATQAAAKgCAJIgGARIgHAPIgFALIgCAGIgFASIgBACQgCAJgDAJQgDAJgEAIIgIAQIgBABIAAgBgAi3hpIAAAAg");
	this.shape_69.setTransform(45,64.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AhIB2IgBAAIgCAAQgOgCgLgGIgagOIgGgEQgOgIgQgHQgMgFgNgJIgFgCIgBAAIgBgEIgBgBIgLgPQgGgIgDgJQgDgJgBgJIgDgRIgCgRQgBgKABgKQACgJADgJQAEgJAFgIIALgPIAAAAIABgBQAFgGADgIIAAABQAGAIAKACIASAFIATAGIASAEIATADIATABIATABQAKAAAJgCIARgEIAFgBIgJAQIgHARIgGASQgDAJAAAJIABATIAEARIAHASQAEAIAHAHIAGAGIAEACIgDAQQgBAKACAJIADAIIAFAJIAAACQgMAIgSABIgKAAQgNAAgMgCgAh6BYIAEgcIgEAcgACBBoIAAgEIADgTIAEgTIADgPIAAgCIABgBQAEgIACgKIAFgSIAFgRIAFgTQADgJABgKQACgJAAgKQAAgKgEgJIgJgRIAAgBQAKgIAIgEQAJgEAKAAIATAAQAJABAHACIgFAEQgIAGgGAHQgGAHgCAJIgFASQgCAJAAAKIACAJQABAFADAEIAJAPIACAIIgEAFIgJAOQgEAIgBAKIgCASIgCASIgBAUIAAAAIgTAFQgSADgUAIgAi+A/IgCgCIAFACIAAACIgDgCg");
	this.shape_70.setTransform(22.6,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]}).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-3.8,131.9,113.4);


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
		
		 window.open ("dep_Scene7.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("dep_Scene5.html","_self");
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


(lib.PartyOnTheBeach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Ag7gCQgEgGgDgGQgKgGgCgFQgBgBAAAAQgPgOAPgRQAZgcgqgGQg6gKAPghQAEgJAGgFQAkgdhDgLQgigGgUgaQgagiA6geQA6gdgrgLQAtACAsAGQAVACAWACQgOAGgNAIQgmAYAeAbQAYAVAZASQAnAegcAiQgOAPgGAQQgNAdAjAHQA4ANgZAmQgqAaAeAfQAKAJAGANQAggQAoAAQAcgBgEAUQAYgCADAYQAIgBAJABQA1ACARAiQAGALAFALADCDNQgbgZAJgRQAEgLAQgHQATgJAXABQAFABAFABQArAGgBAsQgBAYgZAFQgHgIgJgEQgfgNgXAMgABzBvQgWgCgBgVQAAgGABgHQACgMAFgBQANgFAJgBQAAAAABAAAAjBYQABACAAABQACArAnAKQgHArgOAAQgpgYgdgjQAGgEAHgEQAEgEAGgDQgHgFgCgFQgIgNAKgJQgkgUAMgUQgXgWgOgVAhUBeQAFABA5AFQAQABAEADQADADgHAFQgCABgDABQgZANgQAMACsChQg1gCgDgrQgBgDAAgCACWBOQgiADgBAeABXBXQgfgBgVACAAbA1QAHAPABAUAA8DsQAAAAABAAQAAAAABABQApAXgWAoQgDAGgGAFQgHAGgLACQgqAIgvgDQgtgEgPgmQgEgLgFgKQgaAAgYgEQgSgEgLgPQgMgSACgMAgODiQAAAAAAABQgGAVgsAIQgVAEgTABAA8DsQgBgBgBAAQgkgUgkALAA8DsQABAAAAAAQAdgRAlgFQAegEASALQAMAHAFAPQAMAdgOASQgCACgBABQgJAJgQAGQgrAQgsgKAEIDaQAGAIAEALQANAogxAFQgZADgXAFACxDZQAIgIAJgEAhXAZQgCAAgBABQAAAAAAABQACABABACQAYAbgXAaQgEAFACADQABACADABQgmAmgighQgNgbgagQQgNgIgQABQAOg4A2ABQAxABATAdQABAAAAABQAcgNAAgOAjtCQQgUgKgVgMQgPgJAGgRQALgoAvgGQADgBACAAAiTB/QgugGgiARQgGADgEADAicBjQAGANADAPQACAAACAAQAsAFAEAuQAKABAKACQAnAIAWAlAhfCyQgkgDggAIQgcAHgCASQgTgCgOgNQghgfAWgSAgOCAQgNAJgOAJAgvA7QALAVAPALAgLByQgPAHghAJ");
	this.shape.setTransform(44.4,203.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA6DFIANgJIALgGQgHgFgDgFQgIgNALgKQglgTAMgUQgXgWgOgWIgHgMQgJgHgCgEIgBgCQgPgNAPgRQAYgbgpgHQg6gJAPgiQAEgIAGgFQAkgdhDgMQgigFgUgaQgagiA6geQA6gegrgKQAsACAtAFIAqAFQgOAGgNAIQglAYAdAbQAYAUAZATQAoAegdAhQgOAQgGAQQgNAdAjAHQA5ALgZAnQgrAbAfAfQAKAJAGANQAHAPABAUIABADQACArAnAKQgHAqgOABQgpgYgegjg");
	this.shape_1.setTransform(37.1,197.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgjClQgtgEgPgmIgJgVQATgBAVgEQAsgIAGgVIAAgBQAkgLAkAUIACABIABAAIABABQAbAPAAAXQAAALgIAOQgDAGgGAFQgHAGgLACQgcAGgfAAIgegBgABLCbIgDgDQAGgFADgGQAIgOAAgLQAAgXgbgPIgBgBIAAAAQAdgRAlgFQAegEASALQAMAHAFAPQAFANAAALQAAANgHAKIgDADQgJAJgQAGQgaAKgaAAQgRAAgSgEgAC+CDQAHgKAAgNQAAgLgFgNQgFgPgMgHIACgEQAIgIAJgEIABgBQAKgFAMAAIAAAAIAAAAQAOAAAQAHIABAAQAJAEAHAIQgHgIgJgEIgBAAQgQgHgOAAIAAAAIAAAAQgMAAgKAFIgBABQgbgZAJgRQAEgKAQgHIABgBQAQgHASAAIABAAIAAAAIAGAAIAKACQArAHgBAqQgBAYgZAFQAGAIAEALQANAogxAFQgZADgXAFIAAAAgAiaBiQgSgEgLgPQgMgSACgMQgTgCgOgNQghgfAWgRQgUgKgVgMQgPgJAGgRQALgoAvgGIAFgBQAOg5A2ABQAxABATAeIgCACIAAABIADADQAMANAAAOQAAANgLANQgDADAAADIABACQABACADABQgmAmgighQgNgbgagQIgBAAQgLgHgNAAIAAAAIAAAAIgCAAIAAAAIgCAAIACAAIAAAAIACAAIAAAAIAAAAQANAAALAHIABAAQAaAQANAbQAGANADAPIAEAAQAsAFAEAtIAUADQAnAIAWAlIAAABQgGAVgsAIQgVAEgTABIgIAAQgWAAgUgEgAijAYQgcAHgCASQACgSAcgHIAFgBIABgBIAAAAQATgEAVAAIAAAAIABAAIARABIAAAAIAEAAIgEAAIAAAAIgRgBIgBAAIAAAAQgVAAgTAEIAAAAIgBABIgFABgAjjgUIgKAGIAKgGIABAAIABgBIABAAQAZgLAeAAIABAAIAAAAIAUABIABAAIgBAAIgUgBIAAAAIgBAAQgeAAgZALIgBAAIgBABIgBAAgAA9BNIAAAAgACvA+IAAAAgACsACQg1gCgDgqIgBgFQgWgCgBgVIAAgDIABgKQACgMAFgBQANgFAJgBIABAAIgBAAQgJABgNAFQgFABgCAMIgBAKIAAADIgFgBQgfgBgVACQgBgUgHgPQAggQAoAAQAcgBgEAUQAYgCADAYQgiADgBAeQABgeAigDIARAAQA1ACARAiIALAWIAAADIgKgCIgGAAIAAAAIgBAAQgSAAgQAHIgBABQgQAHgEAKgAgWg6Ig+gGQgDgBgBgCIgBgCQAAgDADgDQALgNAAgNQAAgOgMgNIgDgDIAAgBIADgBQAcgNAAgPQAOAWAXAWQgMAUAkAUQgKAJAIANIgCABQgEgDgQgBgAgVhDQgPgLgLgVQALAVAPALg");
	this.shape_2.setTransform(44.4,219.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// characters
	this.instance = new lib.MickPlayin();
	this.instance.parent = this;
	this.instance.setTransform(335.3,283.8,1,1,0,0,0,61.4,0);

	this.instance_1 = new lib.carmen_eat();
	this.instance_1.parent = this;
	this.instance_1.setTransform(218.2,289.3,0.947,0.947,0,0,0,82.7,59.5);

	this.instance_2 = new lib.throw_and_catch();
	this.instance_2.parent = this;
	this.instance_2.setTransform(265.9,197,0.894,0.894,0,0,0,161.7,73.9);

	this.instance_3 = new lib.pro_eat();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.2,160.2,0.796,0.796,0,0,0,42.6,54.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("ADKAIQACABABACAjLgKIAAAAQgBABAAAAQAAAAABgBg");
	this.shape_3.setTransform(323.6,253.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1D38D").s().p("AgPAIQAHgIAPgFIAIgDIABAAIgDACIgZAOIgBABIgCgBg");
	this.shape_4.setTransform(304.1,242.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AhZgJQALgIAJAMQAUgeAOAfQAGgSAXANQAGADAAAGQAAADAAABQAEgDAKgBQADgBACACQAFAHgBAIQASgYAJAWQAEgJAOAHQACABAAAEQAQgKAEAO");
	this.shape_5.setTransform(266.5,186.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AbSgRQglgGglgLQgpgLgqgDQgtgDgtADQgtACgtAIQgtAHgrgKQgtgKgqgSQgZgLgfACQgtADgpgOQgpgOgngEQgGAAgHgBQgngEgogEQgqgEgrAAQgbAAgbABQgUAAgTAAQglAHgogCQgwgCgqAIQgRACgRAEQAAgdAcADQATggAHAXQAVgqALAkQAbglAHAhQASgnAMAmQAVgPAcASQABABACABQABABABACQAbgVAJAnQAdg5AnAwQAmg4AaAzQAmhFAwArQAEACADAEQAyglASAtQAgg0AgAcQArgXAKArQAfgmALAxQAFgMAEgIQgVgggjACQAogIAvgDQgmgNgeggQApAFAsATQgLgngbgjQAzgBApAgQAZhIgGhJQAPAyASAtQAMg2AYg0QAFAoAOAyQAnhAA/gmQgSAzgPA+QBEgxBdgOQgjAlgmAmQBFAEBOAdQhkAPgZAEQgFAVBGAKQgZARgdAJQArADAqAQQgKALgPAIQAQACAEAAQgLARhHAFQgYgVglAnQACgvgmAWQgNAIgEASQgcgyguAtQAMgPgRgZQgLgRgSASQgHAGgEAKQgBADgBADAV+iTQAJgdgMgdQgiAHgDAYQgJg3gnArQgGAHACAKQgcgqgNA4QgPgfgQAZAZniKQAJAIAHASQATgXATAeQAjggAdBsQABABAAADQAAABABACAbSgRQAGgDAHgCQAAACAAAFQgGgBgHgBgEAttAAyQnQgLgogEQiPgPiKgVQhCgKg5gVQiAgwiCA5IAAABAcMNbQgJgIgHgHQgZAaApgLgAamNOQgOARAmgJAbFOaQgPgCgNAHQAEALAKgEAQHJ0QAAADgBACQgDAIgQgHQABAAAAAAQAIgFALgBQAIgBAKACAPnJkQgJgBgHABQgIALgHgIQAHgDAIAAAOeJmQAHABACgKQgvAGAmADgAQgKMQgxAJAnAPQAPAFAJgKAuBPnQAYgBAXgDQAtgFAtgHQAtgGAsgGQABAAAAAAQAtgHAtgHQAugIAugGQAtgFAqgJQAugKAtgMQAsgNAugDQAVgBAUgGQATgFATgJQABgBABAAQATgCASgDQAtgJAugHQAtgIAtgNQAsgNAsgMQArgMAsgMQARgFARgGQAbgJAagKQApgRAsgNQAWgGAVgEQAWgFAXgCQAsgEArgJQAugJAjAfQABACACABQAeAaAjAUQAPAJAOAJQAIAEAHAGQARALARALQAjAZApAQQArARArAUQAFACAEACQAbAMAbAHQADABACABQAFACAEACQABABACABQALgCANAEQgFADgFACQAIADAHADQAQAHASAGQAoAOAoAPQArAPAqALQAsAMApATQAnASAnAXQATALAVAIQAUAIAWAGQAZAHAYAJQARAFAQAGQAEACAEABQAlAPAkATQApAWArAOQAfAKgkAOQgoAPgpAMQgcAHgcAEQgOACgOABQgrAEgqANQgpAOgqAMQgrANgtAEQgqAEgqAJQgtAIgsANQgrALgqAMQgqAMguAGQgJABgKABQgiAEghAIQgjAHgjAGQgKACgJABQgqAHgqAMIgBAAQAAAAABAAIAAAAAPnOdQAOAEANAGQAGACAGADQAaAGAZAKQALAFALAFQAoAUAqAQQAoAOAqAOQAsAOAiAPQApASAkARQAaAMAdAPQALAFALAFQAnATAoAOQAMADANAEQACAAACABQgBABgCABQgxAXhCAMQgdAFgeAFQg+AKhAAGQhKAJhJAOQhMAPhKAZQgIADgIACQhLAYhOAOQgsAHgqAOQgzAQg0AMQghAHgiAFQgGABgFABQgbAEgTACQgCAAgCAAQgEACgFACQgYAJgbAHQgGACgHABQgjAIgxAHQgsAFgsAFQgtAFgvAEQgrAEgtAAQgtAAghgZQgKgIgLgIQgYgTgYgVQgggbglgUQgjgUgigZQglgbgngVQgogWgngZQglgXgngTQgogTgpgRQgogQgngRQgogRgogPQghgMgggIQAbgEAcgEQBSgMBYgKQA1gHA2gLQBSgRBRgXQAbgIAagGQBFgPBHgDQA8gDA9gEQBJgFBIgKQAjgFAigLQAdgJAegIQAFgCAFgBQAFgCAEgBQAugCAfgOIABAAQADgCAEgCQAmgRAlgPQAogQAwgCQASgBARAEQAYAFAWANQASAMAUAKQASAKAUAIQApASAoASQAJAEAJADQAfAMAkAIQAOACANAEQAJADAIADgAStN6QgNAGgCgGQALgEAEAEQACADgBAGASDOJQgHAAgHAAQABAFANgFgAR/OYQgZgMgZANQAGAFAKgDAQuOWQAHADAHAEAV+P3QANANAFgeAWyOtQgBgFgIgCQAPgKAPALAYlPzQgIAKgJgFAX3OtQAEAFAIAMQg5AYANgfQADgHAKABQAIABALgFgAYDPGQgUARAfAAAYgPGQACABACACQATAOAKgSQgOgFgPAFQgCAAgCABgAZbPQQgHAGgGACQgIACgJgFQAIgKAJANAZfPWQAFAHAKgCAZfOaQgNgDgPABAZjO7QgSAPAAgRQAKAAAIACQAHABAGACAW3P6QATAFADgMQgSgJgEAQgAaRN5QAcAPgOgPQgHAAgHAAgEgtsgBGIAAcwMBbZAAAIAA64IAA8bMhbZAAAgAwpkAQARgSAXAJQALAFACAJQASgbAPAcQADAHgBAHQANgfAQAhQACAEAAAGQAOgWAPAYQAGgdAZAfQADgfAhAAQAKAPADAMQAGgaAOAOQAHAHgBAJQAJgQAPAQQAQgOANASQAOgdAdAUQAIAFAAAKQAMgcAQAWQACACABACQAFAFAEAJQAUgKAAAXQAUgNAHAVQASgZAWAXQADgfAbAXQAFAEABAHQAYgPACAfQAagVAEAiQABAGgDADQADgCADgBQAcgPAGAhQABADAAACQABACACACQgDABgFgDQgCAAgCgBQgYgEgagDQgVgDgUgHQgGgDgGgCQgVAAgSAFQgUgGgZABQgaABgbAAQgcAAgcABQgbACgdgBQgcgBgbgDQgcgDgagIQgZgIgbgHQgbgHgYgMQgHgEgLgFQgYgLgYgKQgXgKgagIQgZgJgZgJQgZgIgXgJQgYgLgYgLQgUgKgVgKQgEgCgDgBQgBgBgBAAQgDgCgDgCQgUgIgXgEQgcgEgagHQgYgFgbgCQgbgCgbAAQgbgBgbAAQgbAAgaAGQgbAGgcADQgbADgaADQgHABhDAFQAbg7AdgEQACgBACAAQAFAAAEAEQACgDACgBQADgYAXgOQAegUAaARQAFgkAmgDQAcgCAOAYQAJgNAXgCQAPAAALAMQAGAGAAAJQAHgXAXgBQASgCAIARQAFAMABALQAFgSASgHQAVgIASAMQAIAGgCALQAAAAAAABQAFgLAPAFQAOAFACAOQAEgNALgBQALgCAFAIQAEAFADAEQADgKAOgEQAJgDAGAEQAdABgCAjQAsgQAIAvQABAHgBAGQA9gRAYA7QACAFgDAEQAogTAVAhQAEAIgCAJQAAACgBACQgBAEgDABAB3gbQgVAAgXAAQheABhWgUQhbgVhOgeQhNgdhiAIADBhcQAAgUgCgTQAaAFAHAXQAFgTgOgYQATAHAXAWQgPgtgXg3QAjASAbAeQgCgeAOgiQAOAaACAoQASgmAUgjQgCAgAHAnQArgdAogQQgWARgQAjQAggLAogDQAGAAAFAAQgGADgFADQgZARgTAOQAVgCAXABQAXABAaADQgTAMgYAIQARgCAgAUQgOAEgOAEQgNAEgOAEQgbAJgaAHQgPAFgOAEQgZAJgWAJQgCABgCABQAAgBABAAQACgBABAAADQhYQgHgEgIAAQgEAAgGABQgMAEgEAKQgMgSgRAVQgFAHAEAGQgYgCgDAWQADAJAGAFAFQglQgtADggACQhCADhKACAIdhmQgIACgJACEggmgF0QgLAAgMABQAMgNASABQghgEgegGQAcgPAoAFQAHABAIAAQgHgCgIgCQgkgKghgKQAdgKAlADQgcgUghgGQAjgHAiAMQgPgegSgbQAXAGAYAMQgNgQgFgUQAOACAOAMQgBgUgFgXQAaAQAXARQAIgLAKgIQAKAhAegNQAWgJAVgFQgIAVgOAbQAwgFAvgHQgjAjgXAjQAdgGAggFQAEAYADAUQASgMAXgPQACATAEATQABAAAAAAEggUgF0IABAAQASABATACQAHgRACgUQAGACAHAEQAUANAVAMQAFAPAOAMQALAJANAJQAKAHALAEQhhAHijAKQgYACgaACQgBAAgBAAQgKgDACgJQABgDACgEQAIgOARAFQgDgCACgFQABgKAIgFQATgOAOALQACgaAZABQAKABAIAEQAHAFAFAJQACgEACgEQADgEAEgDQAIgEAKAEIABABQAPAHAEASA7ol4QAEgFADgDA8mlEQgdACgpADQgBAAgCAAA10mnQgBAEgBAEA26OwIAAgFA3EKPQAAATAQgNA4LKMQAVABAPgDA2SKmQAMAPAQgLQgFgHgLABAxbK0QgKAEgEAGQAHAGAOgBA5RKrIgNgHQgfAVAsgOgA67K6QAhgFAEgKQgfgZgGAogA9nLCQAFgCAHAAQAEAXgZgQQAEgDAFgCgA+ZKrQgGgCgHAAQgOAOgGgMQALgDAJABA7WLhQgaADgYAKAKfW5QgXAEgYAHQgHACgIACQgpANgrALQgcAHgcAIQgQAEgPAEQgsAMguAFQgsAFgsAFQgtAGgtAIQgsAHgiAIQgCAAgCgBQgBAAgBgBQgrgKgrgLQgsgLglgeQgfgagggXQgBAAgBgBQgmgagogVQgjgTghgXQgmgZgngYQgngYglgZQglgYgkgYQglgagkgYQgkgagngTQgogTgkgVQgogWgmgbQgogbglgTA4ZKiQgGATAQgVANRKZQgKgLgEAFQggAKAugEgAMZKYQgUgHgPANQAJAKALgJApHHKQgbgQgEAJAqxHRQAUADAMgJAKgW5IgBAAAKgW5IAAAEIgBgEAL3WtQgdACgjAFQgMACgLADEgivgE2Qh0gEhKAoQgaAOgjgBQiagDhoBEQhWA4hqBG");
	this.shape_6.setTransform(236.7,194.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#9AEBFE","#E9FBFC"],[0,1],-18.2,-82.4,-18.2,63.9).s().p("EAl1AN/QiPgOiKgWQhCgLg5gUQiAgxiCA6IgBgDIgBgEQgdhsgjAgQgTgegTAXQgHgRgJgJQBHgEALgRIgUgDQAPgHAKgMQgqgPgrgEQAdgIAZgSQhGgKAFgUIB9gTQhOgdhFgEIBJhMQhdAOhEAyQAPg+ASg0Qg/AmgnBAQgOgygFgoQgYA0gMA2QgSgtgPgxQAGBIgZBIQgpgggzABQAbAjALAnQgsgTgpgFQAdAgAnANQgvAEgoAIQAjgDAVAgQgEAIgFANQgLgygfAmQgKgrgrAYQgggdggA1QgSgtgyAkIgHgGQgwgqgmBEQgagzgmA4QgngwgdA6QgJgogbAVIgCgDIgDgCQgcgSgVAQQgMgngSAnQgHghgbAlQgLgkgVAqQgHgWgTAfQgcgDAAAdIgRAEQgggUgRADQAYgIATgNQgagDgXgBQgXAAgVACQATgPAZgRIALgGIgLABQgoACggALQAQgiAWgSQgoAQgrAdQgHgnACggQgUAjgSAnQgCgpgOgaQgOAiACAeQgbgegjgRQAXA2APAtQgXgWgTgGQAOAXgFAUQgHgXgagGIACAnIgKABQgMAFgEAKQgMgTgRAVQgFAHAEAGQgYgCgDAWQADAJAGAFIgsABQheABhWgVQhbgVhOgdQhNgehiAIIgBgFQgGghgcAPIgEgFQgEgjgaAVQgCgfgYAQQgBgIgFgEQgbgXgDAfQgWgXgSAaQgHgWgUANQAAgXgUAKQgEgJgFgEIgDgFQgQgVgMAbQAAgKgIgFQgdgUgOAdQgNgRgQAOQgPgRgJARQABgKgHgGQgOgOgGAZQgDgMgKgOQghAAgDAfQgZgfgGAdQgPgZgOAWQAAgGgCgEQgQghgNAfQABgHgDgGQgPgcgSAbQgCgKgLgFQgXgJgRASIABgEQACgJgEgIQgVgggoATQADgFgCgFQgYg6g9AQQABgFgBgHQgIgvgsAQQACgkgdgBQgGgEgJADQgOAEgDAKIgHgIQgFgJgLACQgLABgEANQgCgOgOgEQgPgGgFALIAAgBQACgLgIgFQgSgNgVAJQgSAGgFATQgBgMgFgMQgIgRgSACQgXACgHAWQAAgJgGgGQgLgMgPABQgXACgJAMQgOgYgcACQgmADgFAkQgagQgeATQgXAPgDAXIgEAEQgEgDgFgBIgBAAQgEgTgCgSIgpAbIgHgtQggAFgdAGQAXgiAjgjQgvAGgwAGQAOgbAIgWQgVAFgWAJQgeAOgKgiQgKAJgIAKQgXgRgagPQAFAXABATQgOgLgOgDQAFAVANAPQgYgMgXgGQASAcAPAdQgigLgjAGQAhAGAcAUQglgDgdAKIBFAUIAPAEIgPgBQgogFgcAQQAeAFAhAEQgSAAgMAMIAXgBQgEADgDAFIgEAHQgFgJgHgFQgIgEgKAAQgZgCgCAbQgOgMgTAOQgIAFgBAKQgCAGADABQgRgEgIAOIgDAHQh0gEhKAoQgaAOgjgBQiagEhoBEIjAB+IAA6iMBbZAAAIAAcbQnQgLgogEg");
	this.shape_7.setTransform(236.7,108.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFCC33","#FFFF99"],[0,1],158.4,70.4,159.3,-92.2).s().p("EgtsAQlIAA8wIDAh+QBohECaADQAjABAagOQBKgoB0AEQgCAJAKADIACAAIAygEIEEgSIADAAIBGgFIBKgGIA1gFQAcgDAbgGQAagGAbAAIA2ABIA2ABQAbACAYAGQAaAGAcAEQAXAFAUAHIAGAFIACAAIAHADIApAVIAwAVQAXAKAZAIIAyARQAaAJAXAKIAwAUIASAKQAYAMAbAHQAbAHAZAIQAaAIAcACIA3AFQAdABAbgCQAcgCAcAAIA1AAQAZgBAUAFQASgEAVgBIAMAFQAUAHAVAEIAyAHIAEABQAFACADgBIgDgDQBigIBNAdQBOAdBbAWQBWAUBegBIAsAAQBKgCBCgEQAggBAtgEQACAAACgCQAWgIAZgJIAdgJIA1gQIAbgIIAcgIIARgEIAigHQAqgHAwACQAoACAlgHIAngBIA2AAQArAAAqAEIBPAIIANABQAnAEApAOQApAOAtgDQAfgCAZAKQAqATAtAKQArAKAtgIQAtgHAtgDQAtgCAtADQAqADApALQAlALAlAGIANABIAAgHIAAAAQCCg5CAAwQA5AVBCAKQCKAWCPAPQAoAEHQALIAAa3gAhRMqQAlAdAsAMIBWAVIACABIAEABQAigIAsgHIBagOIBYgLQAugEAsgMIAfgJIA4gOQArgLApgNIAPgEQAYgHAXgFIABAEIAAgEIAXgEQAjgFAdgDIgBABIABgBQAqgLAqgHIATgDIBGgOQAhgHAigEIATgCQAugGAqgMIBVgYQAsgMAtgJQAqgIAqgEQAtgEArgNIBTgaQAqgOArgDIAcgDQAcgEAcgIQApgLAogPQAkgOgfgKQgrgPgpgVQgkgTglgPIgIgDIghgMIgxgPQgWgGgUgIQgVgJgTgKQgngXgngSQgpgTgsgMQgqgLgrgPIhQgdIgigNIgPgHIAKgFQgNgDgLABIgDgBIgJgFIgFgBQgbgHgbgMIgJgEQgrgUgrgRQgpgQgjgZIgigXIgPgKIgdgRQgjgUgegaIgDgDQgjgeguAJQgrAIgsAFQgXACgWAEQgVADgWAHQgsANgpARQgaAKgbAJIgiAKIhXAYQgsAMgsAOQgtANgtAHQguAHgtAKIglAEIgCABQgTAKgTAFQgUAGgVABQguADgsANQgtAMguAKQgqAJgtAFQguAGguAHIhaAPIgBAAIhZAMIhaAMQgXADgYABIAAAFQAlATAoAbQAmAaAoAXQAkAVAoATQAnATAkAZIBJAyIBJAxIBMAxIBNAxQAhAXAjATQAoAVAmAaIAAABIACAAQAgAXAfAagAXCE2QAJAAACgIIgBgBIgBAAIgHgCIgCgBIgBAAQgIABgCAKIABAAIABAAIAIABIAAAAIABAAgAWGE1QAGAAAEgSIAAgCIAAACQgEASgGAAIgBAAIAAAAQgCAAgDgDIgBAAIAAgBIgBAAIABAAIAAABIABAAQADADACAAIAAAAIABAAgAYbE0QAEAAAEgFIABAAIABgBIgBABIgBAAQgEAFgEAAIgBAAIAAAAIgGgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAGABIAAAAIABAAgAZrEWIABAAIABAAIABAAIgBAAIgBAAIgBAAIgBAAIAAAAQgHAAgDgFIgBAAIAAgBIAAABIABAAQADAFAHAAIAAAAIABAAgAZJETIAEgBIABAAQAGgBAHgGQgHAGgGABIAAAAQgFgGgEgBIgBAAIAAAAQgDAAgEAEIAAABIABAAQAFADAGAAIAAAAIAAAAgAYMERIACAAIAAAAIAAAAIgCAAIAAAAIAAAAQgbAAAQgOIAAgBIABAAIABgBIgBABIgBAAIAAABQgQAOAbAAIAAAAIAAAAgAYkD/IgEABIAEADQATAOAKgSQgHgCgIAAQgHAAgHACgAXXDyQgNAeA5gXIgMgRQgLAEgIAAIgBgBQgJAAgDAHgAZjD1IANADIgNgDIgSgBQAAARASgQgA26DqIAAgFgAWpDhQAIACABAFQgBgFgIgCIACgBIAAAAQAGgEAGAAIABAAIAAAAQAIAAAHAGQgHgGgIAAIAAAAIgBAAQgGAAgGAEIAAAAIgCABIAAAAgAayDhIAFAAIAAgBIAAAAIAAAAIAAAAIAAAAIAAABIgFAAIAAAAIgBAAQgGAAgCgHQAKgGALAAIABAAIAAAAIAGABIgGgBIAAAAIgBAAQgLAAgKAGQACAHAGAAIABAAIAAAAgARWDXIAGgBIABAAIgBAAIgGABIAAAAIAAAAQgFAAgEgEQANgGANAAIAAAAIAAAAQALAAALAFIACAAIgCAAQgLgFgLAAIAAAAIAAAAQgNAAgNAGQAEAEAFAAIAAAAIAAAAgAZfDVQgKgDgLAAIAAAAIAAAAIgGAAIgBAAIABAAIAGAAIAAAAIAAAAQALAAAKADgASDDEIgOAAQABAFANgFgASuC9IAAgDQAAgDgBgCQgEgEgLAEQACAFANgFQABACAAADIAAADgAafC0IgOAAQAcAOgOgOgAcMCVIgQgOQgZAaApgMgAaqCUIANgCIABAAIAAAAIABAAIAAAAIACAAIAAAAIACgBIABAAIgBAAIgCABIAAAAIgCAAIAAAAIgBAAIAAAAIgBAAIgNACIAAAAIAAAAQgMAAAHgKIABAAIAAAAIAAgBIAAAAIAAAAIAAABIAAAAIgBAAQgHAKAMAAIAAAAIAAAAgA8IApQAYgLAagCQgaACgYALgA9ngCQgFACgEACQAZAQgEgWIAAAAQgHAAgFACgAxagBIAGgBIgGABIAAAAIAAAAQgIAAgFgDIAAgBIgBAAIgBgBQAEgGAKgEQgKAEgEAGIABABIABAAIAAABQAFADAIAAIAAAAIAAAAgA67gKQAhgFAEgKQgMgKgIAAQgNAAgEAZgA+ygUQAFAAAHgHQAHAAAGACQgGgCgHAAIgCgBIgCAAIAAAAIgBAAIgNACIgCAAIAAABIABAAQACAFAEAAIABAAIAAAAgA5RgZIgNgIQgfAVAsgNgA2CgWQAGAAAGgEIAAgBQgFgFgJgBIgBAAIAAAAIgBAAIABAAIAAAAIABAAQAJABAFAFIAAABQgGAEgGAAIgBAAIAAAAQgHAAgHgGIAAgBIAAAAIAAAAIgBgBIABABIAAAAIAAAAIAAABQAHAGAHAAIAAAAIABAAgA4ZgZIAAAAIAFgFIAAAAIACgDIABgBIAAAAIAAAAIABgBIAAgBIABAAIgBAAIAAABIgBABIAAAAIAAAAIgBABIgCADIAAAAIgFAFIAAAAIgBAAQgBAAACgIIAAgBIAAgBIAAABIAAABQgCAIABAAIABAAgAQggfQAIAAAGgGQgGAGgIAAIAAAAIAAAAIgIgBIgBAAIAAAAIgBgBQgRgGAAgFQAAgHAbgFQgbAFAAAHQAAAFARAGIABABIAAAAIABAAIAIABIAAAAIAAAAgAMBghQAEAAAFgEQgFAEgEAAIgBAAIgBAAQgFAAgEgGQAJgHAMgBIAAAAIABAAQAGABAGACIABAAIgBAAQgGgCgGgBIgBAAIAAAAQgMABgJAHQAEAGAFAAIABAAIABAAgANDgxQggAKAugEQgHgIgEAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAgA29gqQADgBAFgEIABAAIAAgBIAAABIgBAAQgFAEgDABIgBAAIAAAAQgGAAAAgLIAAgBIAAABQAAALAGAAIAAAAIABAAgA39g4QAMAAAKgCQgKACgMAAIgBAAIAAAAIgMAAIgBAAIABAAIAMAAIAAAAIABAAgAP0hLIgBABQAQAGADgIIABgEIACgBIABAAIACAAIAAAAIABAAIAKABIACAAIgCAAIgKgBIgBAAIAAAAIgCAAIgBAAIgCABQgLAAgIAFgAPIheQAHAIAIgLQgIABgHACgAOeheQAHAAACgKQgvAHAmADgAPnhgIAAgBIgJAAIAAAAIgBAAIgCAAIgEAAIAEAAIACAAIABAAIAAAAIAJAAIAAABIAAAAgAqnjyQANAAAIgGIABgBIgBABQgIAGgNAAIAAAAIAAAAIgEgBIgBAAIgCAAIgDAAIADAAIACAAIABAAIAEABIAAAAIAAAAgApHj6IgBgBIgBAAIgCgBIgBgBIgLgGIgBAAIgBAAIAAAAIgBgBIAAAAIgBAAIAAAAIgBAAIgBAAIAAAAIgDgBIAAAAQgEAAgCAEQACgEAEAAIAAAAIADABIAAAAIABAAIABAAIAAAAIABAAIAAAAIABABIAAAAIABAAIABAAIALAGIABABIACABIABAAIABABgAXBE2IgIgBIgBAAIgBAAQACgKAIgBIABAAIACABIAHACIABAAIABABQgCAIgJAAIgBAAIAAAAgAW3E1IAAAAgAZJETQgGAAgFgDIgBAAIAAgBQAEgEADAAIAAAAIABAAQAEABAFAGIAAAAIgBAAIgEABIAAAAIAAAAgAZOESIAAAAgA+zgUQgEAAgCgFIgBAAIAAgBIACAAIANgCIABAAIAAAAIACAAIACABQgHAHgFAAIAAAAIgBAAgA+mgbIAAAAg");
	this.shape_8.setTransform(236.7,265);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("AlsG/IgCAAIhXgWQgsgLglgeQgfgagggWIgCgCQgmgZgogWQgjgTghgWIhNgyIhMgxIhJgwIhJgyQgkgZgngUQgogSgkgVQgogWgmgbQgogbglgTIAAgEQAYgCAXgDIBagMIBZgMIABAAIBagOQAugIAugFQAtgGAqgJQAugKAtgMQAsgNAugCQAVgCAUgFQATgGATgJIACgBIAlgFQAtgJAugHQAugHAtgOQAsgNAsgMIBXgYIAigKQAbgJAagLQApgRAsgNQAWgGAUgEQAWgFAXgCQAsgEArgJQAugIAjAfIADACQAfAaAiAUIAdASIAPAKIAiAXQAjAZApAQQArAQArAUIAJAFQAbALAbAIIAFABIAJAFIADABIAOAHIAPAGIAiAOIBQAcQArAPAqAMQAsALApATQAnASAnAXQATALAVAIQAUAJAWAGIAxAPIAhAMIAIACQAmAPAjATQApAVArAOQAfALgkANQgoAPgpAMQgcAHgcAFIgcADQgrADgqAOIhTAaQgrAMgtAFQgqADgqAJQgtAIgsANIhVAXQgqANguAFIgTACQgiAFghAHIhGANIgTADQgqAIgqALIAAAAQgdACgjAGIgXAEIgBAAQgXAEgYAHIgPAFQgpAMgrALIg4APIgeAJQgsALguAFIhYALIhaANQgrAIgjAIIgEgCgACzlZQgwACgoARQglAPgmARIgHADIgBAAQgeAOguACIgJADIgKADIg7ASQgiAKgjAFQhIAKhJAFIh6AHQhHADhFAQQgaAFgbAIQhRAXhSARQg2AMg1AGIiqAWIg3AIQAgAIAhAMQAoAPAoARIBPAiQApAPAoAUQAnASAlAYQAnAYAoAWQAnAVAlAbQAiAZAjAUQAlAUAgAcIAxAoIAVAQQAhAYAtAAQAtAAArgEQAvgDAtgGIBYgKQAxgHAigIIANgDQAbgGAYgJIAJgEIAEgBIAugGIALgBQAigGAhgHQA0gLAzgRQAqgNAsgIQBOgNBLgYIAQgGQBKgYBMgPQBJgPBKgIQBAgHA+gKIA7gKQBCgMAxgXIADgCIgEgBIgZgHQgogNgngSIgWgLIg3gbIhNgjQgigPgsgOIhSgcQgqgQgogUIgWgJQgZgKgagGIgMgGIgbgKIgRgGIgbgGQgjgIgggMIgSgHIhRgjIgmgTQgUgKgSgLQgWgOgYgFQgOgDgPAAIgGAAg");
	this.shape_9.setTransform(282,307.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006600").s().p("ASaD2QAAgDgDgBQgNgHgEAIQgKgWgRAYQAAgIgEgGQgDgEgCABQgKACgFAEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBgGgGgEQgYgNgFASQgPgfgTAfQgKgMgKAHQgHgEgIAAIgCgnQAaAFAHAXQAFgTgOgXQATAGAXAWQgPgtgXg3QAjASAbAeQgCgeAOgiQAOAaACAoQASgmAUgjQgCAgAHAnQArgdAogQQgWARgQAjQAggLAogDIALAAIgLAGQgZARgTAOQAVgCAXABQAXABAaADQgTAMgYAIQARgCAgAUIgcAIIgbAIIg1ARIgdAJQgEgPgPAKgAxagWQgNgJgLgKQgOgLgFgPIgpgZIgNgGQgCAUgHARIglgCIgBAAQgKgFgIAEIgXABQAMgNASABQghgEgegGQAcgPAoAFIAPABIgPgEIhFgUQAdgKAlADQgcgUghgGQAjgHAiAMQgPgegSgbQAXAGAYALQgNgPgFgUQAOACAOAMQgBgUgFgXQAaAQAXARQAIgLAKgIQAKAhAegNQAWgJAVgGQgIAWgOAbQAwgFAvgHQgjAjgXAjQAdgGAggFIAHAsIApgbQACATAEATIgDAAQgdAFgbA7IhGAFIgDAAQgLgEgKgHg");
	this.shape_10.setTransform(155.7,163.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AjbCwIgEgCIgygHQgWgDgTgHIgMgFQgVAAgSAFQgUgGgZABIg2ABQgcAAgbACQgbABgdgBIg3gEQgcgDgagIQgZgIgbgHQgbgHgYgMIgTgJIgvgVQgYgKgZgIIgygRQgZgJgYgJIgvgWIgpgTIgIgDIgBgBIgGgEQgUgIgYgEQgbgEgagGQgYgGgcgCIg1gCIg2gBQgbAAgaAGQgbAGgcADIg1AGIhKAGQAbg7AcgEIAEgBQAGAAADAEIgGAIIAGgIIAFgEQADgYAWgOQAfgUAaARQAEgkAmgDQAdgCAOAYQAIgNAYgBQAPgBALAMQAGAGgBAJQAIgWAWgCQATgCAHARQAGAMABALQAFgSASgHQAVgIASANQAIAFgCALIgBABIgCAIIACgIQAGgLAPAFQAOAFACAOQAEgNALgBQALgCAFAIIAHAJQADgKAOgEQAJgDAGAEQAcABgCAkQAtgRAIAvQABAHgCAGQA+gQAYA6QACAFgDADQAogSAUAgQAFAIgCAJIgBAEQARgSAXAJQALAFABAKQATgcAPAcQACAHAAAHQANgfAQAhQACAEAAAGQANgWAQAYQAFgdAaAfQADgeAhAAQAJAOAEAMQAGgaAOAPQAHAGgBAJQAJgQAOAQQARgNANARQANgdAeAUQAIAFAAAKQAMgcAQAWIADAFQAFAEAEAJQAUgKAAAXQAUgNAHAVQASgZAWAXQADgfAbAXQAFAEAAAHQAZgPABAfQAbgVAEAjQABAFgDADIAFgDQAdgPAGAhIABAFIADAEIgCAAIgGgBgAtCApQADgCABgEQgBAEgDACgAaWCnQAMgPgRgZQgLgRgSASQgHAGgEAKQAJgdgMgdQgiAHgEAYQgJg3gmArQgGAHABAKQgcgqgMA4QgPgfgQAZQgVgggkADQApgIAvgEQgngNgeggQAqAFAsATQgLgngbgiQAzgBApAfQAYhHgFhJQAOAyATAtQAMg2AYg0QAEAoAPAyQAnhAA/gmQgSAzgPA+QBEgxBdgOIhKBLQBGAFBNAbIh8ATQgFAVBGAKQgZASgdAIQAqADArAQQgKALgPAIIAUACQgLARhHAFQgYgVglAnQACgvgmAWQgNAIgEASQgcgyguAtgA/EgSIADgGQAIgPARAFQgDgCABgFQACgKAIgFQATgOAOAMQABgbAZACQALAAAIAEQAHAFAFAJIAEgIQADgEAEgDQAHgEALAFIABAAIAAAAIAlACQAHgRACgUIANAGIApAZQAFAPANAMQAMAJANAJQAKAHALAEIkEASIgyADIgDAAQgJgDACgJgA8Vg2QgFgSgOgHQAOAHAFASg");
	this.shape_11.setTransform(213.2,164.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CC00").s().p("ALhBNQgogLgrgDQgtgDgtADQgtACgsAIQgtAHgsgKQgsgKgrgSQgZgLgeACQgtADgqgOQgogOgngDIgNgCIhOgHQgqgEgrAAIg3ABIgmAAQglAHgpgCQgvgCgrAHIghAGQgBgcAdADQASggAHAXQAWgqALAkQAaglAHAhQATgnALAmQAVgPAcASIAGAFQAbgVAIAnQAdg5AoAwQAmg4AaAzQAlhFAwArIAHAGQAyglASAtQAgg0AgAdQArgYAJArQAggmALAxQAEgMAFgIQAPgZAQAfQAMg4AcAqQgBgKAGgHQAmgrAJA3QAEgYAigHQAMAdgKAdIgCAGIACgGQAFgKAGgGQATgSALARQAQAZgLAPQAugtAbAyQAFgSAMgIQAngWgCAvQAlgnAXAVQAKAIAHASQATgXASAdQAkgfAcBrIACAEIAAADIgMAFQglgGgmgLgAs3BGQADgWAYACQgFgGAFgHQASgVAMASQAEgKAMgEIAKgBQAIAAAGAEQALgHAJAMQAUgeAPAeQAFgSAXANQAHAEAAAGQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAGgEAKgCQACgBACAEQAFAGAAAJQARgZAKAXQAEgJANAHQACABABADQAPgKAEAPQgZAIgWAJIgEABIgBABQgtADgfACQhDADhJACQgGgFgDgJg");
	this.shape_12.setTransform(330.2,182.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CCFF").s().p("AmlE8IgWgQIgxgnQgggcglgUQgjgUgigZQglgbgngVQgogWgngZQgkgXgogTQgogTgogPIhQgiQgngRgpgPQghgMgggIIA3gIICqgWQA2gGA1gMQBSgRBSgXQAagIAbgGQBFgPBHgDIB5gHQBJgFBIgKQAkgFAhgLIA7gRIALgDIAIgDQAvgCAegOIAAAAIAIgEQAlgRAlgPQApgQAvgCQATgBARAEQAYAFAVANQASAMAUAKIAmATIBSAjIARAHQAgAMAjAIIAbAGIASAGIAbAKIALAFQAaAHAZAJIAWAKQApAUAqAQIBRAcQAtAOAhAPIBOAjIA3AbIAVAJQAoATAnAOIAZAHIAFABIgEACQgwAXhCAMIg7AKQg/AKhAAHQhKAIhJAOQhMAQhJAYIgQAFQhMAZhNANQgsAHgrAOQgzARgzALQgiAHgiAFIgLACIguAGIgDAAIgKAEQgYAKgaAGIgNADQgjAIgxAHIhYAKQgtAFgvAEQgrAEgtAAQgtAAgggZg");
	this.shape_13.setTransform(281.6,307.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC00").s().p("AgrAEIAAAAIABAEgAAsgHIAAAAIgCABIACgBg");
	this.shape_14.setTransform(308.2,340.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PartyOnTheBeach, new cjs.Rectangle(-56.8,16.1,587.1,356.1), null);


// stage content:
(lib.dep_Scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6:0,scene6_repeat:689});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_1 = function() {
		playSound("noticethat");
	}
	this.frame_84 = function() {
		playSound("ifstaceythrowsthehackey");
	}
	this.frame_116 = function() {
		playSound("alwaysaskyourself");
	}
	this.frame_152 = function() {
		playSound("samalwaysreturnsit");
	}
	this.frame_280 = function() {
		playSound("whenbuffygrills");
	}
	this.frame_310 = function() {
		playSound("alwaysaskyourself");
	}
	this.frame_340 = function() {
		playSound("proshowsup");
	}
	this.frame_490 = function() {
		playSound("becauseeveryone");
	}
	this.frame_519 = function() {
		playSound("alwaysaskyourself");
	}
	this.frame_556 = function() {
		playSound("mickplays");
	}
	this.frame_700 = function() {
		this.gotoAndPlay("scene6_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(83).call(this.frame_84).wait(32).call(this.frame_116).wait(36).call(this.frame_152).wait(128).call(this.frame_280).wait(30).call(this.frame_310).wait(30).call(this.frame_340).wait(150).call(this.frame_490).wait(29).call(this.frame_519).wait(37).call(this.frame_556).wait(144).call(this.frame_700).wait(1));

	// Main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,55.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape.setTransform(210.4,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBAQgHgHAAgbIAAgLIABgPIgBgDIABgFIACgjIgBgJIgBgJQAAgKAJAAQADAAACACIATgDIAQgBQAUgBAMAFQAGACgBAGQAAAEgCACQgCADgDAAIgDgBQgOgDgNAAIgOABIgRADIABAJIgCAgIAkgEIATgCQAEABACACQACACABAEQAAAHgIABIgTABIgmAEIgBALIAAAKQAAASADADQACADALAAIAPgBIAPAAIAFgBIAFAAQAIAAABAJQgBAGgGACQgJABgZAAQgZABgIgHg");
	this.shape_1.setTransform(199.4,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape_2.setTransform(188,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAxQgKgMgDgXIgBgpIAAgTIACgLQACgGAFAAQAIAAAAAOIAAAxQAAAxAiAAQAhAAAAhTIAAgIIAAgHQAAgFACgEQACgFAFAAQAIAAAAALIAAALIAAAKQAABfgyAAQgYAAgNgPg");
	this.shape_3.setTransform(175.8,26.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdArIgFgaIgXAEIgVAEIgOAhQgDAEgEAAQgDAAgDgCQgCgDAAgEQAAgEAMgaQgCgCABgDQgBgHAJgCQAJgQAOgXQATggAFAAQAGABADAIIAFAcIAMA5IAGANIACAJQgBADgCADQgDADgDgBQgIAAgFgTgAgKAGIAdgGIgGgfg");
	this.shape_4.setTransform(163.2,26.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgjBBQgFgDAAgJIACgcQACglAAguQgBgEADgCQADgDADAAQAEAAACADQACACAAAEQAAAvgCAlIgBANIgBAMQAWAAAggKIADgBQADAAADADQACADAAADQAAAFgGADQgJAEgUAEQgRADgMAAQgJAAgDgDg");
	this.shape_5.setTransform(152.6,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_6.setTransform(142.8,26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAOAAIAOAAIATABIATABQAEAAADACQACADAAADQAAAEgCADQgDACgEAAIgTgBIgTgBIgFAAIACAlIACAlIABAIIAAAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_7.setTransform(127.3,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag3BAQgCgCAAgDIAAgLIABgLIAAgPIAAgPIAAgQIAAgRIgBgPIgBgPQAAgFADgDQAEgCAEAAQAEAAAHAJQAUAfAQAUQATAXAYAXIAAgLIAAgKQAAgjgDgWIgCgJIgCgIQAAgLAJABQAOAAAAA2IAAAaIAAAcIgCANQgBAIgIAAQgEAAgGgFQgighgrg7IAAATIgBASIABAVIAAAUQAAAWgJABQgEAAgDgEg");
	this.shape_8.setTransform(114.1,26.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkBAQgIgHAAgbIABgLIAAgPIgBgDIACgFIACgjIgBgJIgBgJQAAgKAIAAQAEAAADACIASgDIAQgBQAUgBAMAFQAFACABAGQgBAEgBACQgDADgEAAIgCgBQgOgDgNAAIgOABIgSADIABAJIgBAgIAjgEIAUgCQADABADACQACACAAAEQABAHgIABIgUABIglAEIgBALIAAAKQAAASADADQACADALAAIAOgBIAQAAIAFgBIAEAAQAKAAgBAJQABAGgIACQgHABgZAAQgaABgIgHg");
	this.shape_9.setTransform(102.2,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZBDQgKgDgEgDIgBAAQgEAAgCgDQgDgCAAgDIACgaIABgbIgBgbIAAgeQAAgDADgEQAEgDADgBQACABALAFIAPAHQAXAIAQAQQATAUAAAXQABAOgHANQgGANgMAIQgNAJgXgBIgOgBgAgfgWIABAXIgCAtIADABQAGAFAMAAQARAAAKgGQAHgFAFgKQAFgJAAgKQAAgWgZgRQgIgFgfgOg");
	this.shape_10.setTransform(90.9,26.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag3BAQgCgCAAgDIAAgLIABgLIAAgPIAAgPIAAgQIAAgRIgBgPIgBgPQAAgFADgDQAEgCAEAAQAEAAAHAJQAUAfAQAUQATAXAYAXIAAgLIAAgKQAAgjgDgWIgCgJIgCgIQAAgLAJABQAOAAAAA2IAAAaIAAAcIgCANQgBAIgIAAQgEAAgGgFQgighgrg7IAAATIgBASIABAVIAAAUQAAAWgJABQgEAAgDgEg");
	this.shape_11.setTransform(77.8,26.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkBAQgHgHgBgbIABgLIAAgPIgBgDIACgFIACgjIgBgJIgBgJQAAgKAIAAQAEAAADACIASgDIAQgBQAUgBAMAFQAFACAAAGQAAAEgBACQgDADgEAAIgCgBQgOgDgNAAIgOABIgSADIABAJIgBAgIAjgEIAUgCQADABADACQACACAAAEQABAHgIABIgUABIglAEIgBALIAAAKQAAASADADQACADALAAIAPgBIAPAAIAFgBIAEAAQAJAAAAAJQAAAGgGACQgIABgZAAQgaABgIgHg");
	this.shape_12.setTransform(65.9,26.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiBAQgCgCAAgEIAAgYIABgiIACgiIAAgLIAAgMQADgHAGABIAIgCIALAAQAOAAAOAKQAPAMAAAQQAAAUgQAMQgOALgTAAIgKgCIgBAsQAAAEgCACQgCACgDAAQgDAAgCgCgAgSgxIAAAQIgCAhIAJAAQANAAAKgGQAKgIAAgNQAAgKgKgGQgJgGgJAAIgHAAIgFAAg");
	this.shape_13.setTransform(56,25.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgkBAQgIgHAAgbIABgLIAAgPIgBgDIACgFIACgjIgBgJIgBgJQAAgKAIAAQAEAAADACIATgDIAPgBQAUgBAMAFQAFACAAAGQAAAEgBACQgDADgEAAIgCgBQgOgDgNAAIgOABIgSADIABAJIgBAgIAjgEIAUgCQADABADACQACACAAAEQABAHgIABIgUABIglAEIgBALIAAAKQAAASADADQACADALAAIAOgBIAQAAIAFgBIAEAAQAKAAgBAJQABAGgIACQgHABgZAAQgaABgIgHg");
	this.shape_14.setTransform(46.4,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZBDQgKgDgEgDIgBAAQgEAAgCgDQgDgCAAgDIACgaIABgbIgBgbIAAgeQAAgDADgEQAEgDADgBQACABALAFIAPAHQAXAIAQAQQATAUAAAXQABAOgHANQgGANgMAIQgNAJgXgBIgOgBgAgfgWIABAXIgCAtIADABQAGAFAMAAQARAAAKgGQAHgFAFgKQAFgJAAgKQAAgWgZgRQgIgFgfgOg");
	this.shape_15.setTransform(35.1,26.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFF66").ss(3,1,1).p("EAmzAXeMhNfgAHMgAGgu0MBNlAAAg");
	this.shape_16.setTransform(276.4,194.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(701));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmrAa9IAAm9MAAAgu8MBNXAAAMAAAAu8IAAG9g");
	mask.setTransform(276.3,215.7);

	// Anim
	this.instance = new lib.DependentClauseSimple();
	this.instance.parent = this;
	this.instance.setTransform(251.9,75.2,1,1,0,0,0,223.1,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(701));

	// Bk
	this.instance_1 = new lib.PartyOnTheBeach();
	this.instance_1.parent = this;
	this.instance_1.setTransform(271.6,181.7,0.849,0.849,0,0,0,230.1,179.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(701));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,202.6,534,398.7);
// library properties:
lib.properties = {
	id: 'BC388305B2B54545ABA920EB7D741D6F',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/alwaysaskyourself.mp3", id:"alwaysaskyourself"},
		{src:"sounds/ball_passes.mp3", id:"ball_passes"},
		{src:"sounds/becauseeveryone.mp3", id:"becauseeveryone"},
		{src:"sounds/bump.mp3", id:"bump"},
		{src:"sounds/_catch.mp3", id:"_catch"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/ifstaceythrowsthehackey.mp3", id:"ifstaceythrowsthehackey"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/mickplays.mp3", id:"mickplays"},
		{src:"sounds/noticethat.mp3", id:"noticethat"},
		{src:"sounds/proshowsup.mp3", id:"proshowsup"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/samalwaysreturnsit.mp3", id:"samalwaysreturnsit"},
		{src:"sounds/whenbuffygrills.mp3", id:"whenbuffygrills"}
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
an.compositions['BC388305B2B54545ABA920EB7D741D6F'] = {
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