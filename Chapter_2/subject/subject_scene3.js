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


(lib.static_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660099").ss(1,1,1).p("AM8AAI53AA");
	this.shape.setTransform(82.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,167.6,2);


(lib.static_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("AgOAUIAAgnIAdAAIAAAng");
	this.shape.setTransform(0,0.1,1,0.637);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.static_bar, new cjs.Rectangle(-1.5,-1.2,3,2.6), null);


(lib.static_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADngFQgBAAABgBQgDhOgvg7QgJgKgJgJQgPgPgQgLQgBgBgBgBIgbgCIgTA5IgEANIBXAKIABgCIgBACIAAAAIgvBAIAGgCIAgANIAcAtgAC6AIIABADIgsAjIg4gMIgBgBIglgoIAYghIAvgIACiCkQAAgBABAAQBEhDAAhgQAAgCAAgDAgXiqIADACIA1gcIAHgeQgTgEgVAAQgOAAgOACIgVAoIAaASIgIAjIg3AnIAAAFIAAABIgHA5IgBAKIA2AgIADgCIAyg5IAAAAIAFgrIgRgOIgggcABUiHIhTAcACCi+QgpgcgxgIAiUivQAAAAgBABQgHAGgGAGQgRARgNATIAQAiIAogFIAEgLIANgpIgdgaQA0gtBEgIAhdghIgTApIADAFIARAkIgnA3AjfA7IBHgvIArABAjAh+QgmA4AABGQAAAfAHAcQAIAeAQAbIBBgJIADgDIBJASIADgEIAXgtIABAAIAEABIgKhDAhWhbIgugRAg3B2IADAFIgGgBAjHB0QAPAZAWAWQAfAfAlARIBHgjIACAAIA4AOIAgg0IgGgIIAJACIBcAgABWAhIAAABIg3A7IAeAlAAfBdIgCgBIg4gSABDCKIADgGAg0B7IAeA0IABABAheDTQArAUAzAAQBfAABDhDAC1iPIgNAd");
	this.shape.setTransform(23.1,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDDEIgBgBIgdgzIgEgGIAXgsIABgBIAEABIA5ASIABACIAdAkIAHAIIggA0gAjMBPIBGgvIArABIARAlIgnA2IgCAEIhCAIQgQgbgHgegABpA2IgBAAIglgqIAZgfIAugIIAGgCIAgAMIAcAuIABADIgrAigAhMgDIABgKIAHg5IAAAAIAAgFIA3goIAhAcIAQAOIgFArIAAAAIgyA5IgDADgAiuhqQANgTARgRIANgMIABgBIAdAaIgNApIgEALIgnAGgABhhlIAFgOIATg4IAbABIACACQAQAMAPAOIASAUIgNAcIgBADgAgFiWIgagSIAVgoQANgBAPAAQAVAAATADIgHAfIg1Acg");
	this.shape_1.setTransform(21.3,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AheDSIBHgjIACAAIA4AOIAgg0IADgFIBcAfQhDBDhfAAQgzAAgrgUgAiiCiQgWgWgPgZIBCgIIACgEIAng2IgRglIgDgFIATgpIgTApIADAFIgrgBIhGAvQgIgcAAgeQABhHAlg4IARAjIAngGIAEgLIAuASIAAAAIgHA5IgBAKIA2AhIADgDIAyg5IAAAAIAFgrIgQgOIBSgcIhSAcIghgcIAIgjIADADIA1gcIAHgfQAxAIApAcIgbgBIgTA4IgFAOIBYAKIAAAAIABgDIANgcQAvA7ACBOIAAABIgsANIAsgNIAAAFQAABfhDBDIgBABIhcgfIgKgDIgdgkIA3g7IABgBIA5AMIArgiIgBgDIgcguIgggMIgGACIAvhAIgvBAIguAIIgZAgIAlApIAAABIg3A7IgBgCIg5gSIgKhDIAKBDIgEgBIgBABIgXAsIgDAEIAHACIAdAzIgBABIhHAjQglgRgfgfgAg6B5IhJgSgABWAigAhWhbIgugSIANgpIgdgaQA0gtBEgIIgVAoIAaASIgIAjIg3AoIAAAFg");
	this.shape_2.setTransform(23.1,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.1,48.1);


(lib.SentencesVERB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgEgEAAgEQAAgEAEgEQAEgEAFAAQAGAAAEADQAEAEAAAFQAAAEgEAEQgEADgGAAQgFAAgEgDg");
	this.shape.setTransform(145.6,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBFQgDgEAAgEIAAh5QAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGIAABzQAAASgMgBQgFABgDgEg");
	this.shape_1.setTransform(139.2,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBFQgDgEAAgEIAAh5QAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGIAABzQAAASgMgBQgFABgDgEg");
	this.shape_2.setTransform(134.3,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVAoIgOAGQgGACgDAAQgWAAgKgLQgLgMAAgWQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAACgCADIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAFgEADQgDADgFAAQgEAAgJgIgAgMgRQgIAJAAAMQAAAMAEAFQAEAHAIAAQAFgBAFgBQAFgCAEgEQgDgUAAgKIABgHIABgIIgDgBIgDAAQgLAAgJAJg");
	this.shape_3.setTransform(126.9,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZBDQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgHIABgGIAAhjQAAgGADgFQADgGAHAAQAJAAAAALIAAADIgBADIAAAiQAHgEAGgBQAGgCAEAAQAVAAANAPQAMANAAAUQAAAVgOAOQgOAOgUAAQgMAAgLgEgAgJgBIgOAHIAAAlQAMAFAJABQAKAAAHgIQAIgHAAgMQAAgMgGgGQgHgIgKABQgDgBgGADg");
	this.shape_4.setTransform(116.5,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQANAHgBAOQAAAJgKAIQgFADgPAGIgdAMQAFAFAGACQAGACAGAAQAMABAIgFQAHgFAFAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAUgIIATgKQgHgEgJAAQgHAAgGAGg");
	this.shape_5.setTransform(98.2,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_6.setTransform(88.3,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgLgCAAgKQAAgFADgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACAAAIQgBAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgNAAQgEAAgDgDg");
	this.shape_7.setTransform(78.7,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_8.setTransform(62.1,17.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AADAcQgCgIgCgVIgDAEIgNAiQgCAEgCACQgEAGgHAAQgEAAgFgHQgEgIgDgMQgDgLgGgkIgCgMQABgFAEgDQADgDAFAAQAKAAABAJIACAMIACANIAEAVIAPgrQADgMAJAAQAJAAAEANIAEAXIAFAYIANg1QADgHAIAAQAGAAADADQAFADAAAFIgBADIgSA9QgEAIgFAJQgFAFgHAAQgKAAgHgVg");
	this.shape_9.setTransform(51.8,17.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAATgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_10.setTransform(40.8,17.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiAuQgDgEABgEIAAg5IAAgIIAAgIQAAgFACgDQADgEAGAAQAJAAACAKQAPgLATAAQARAAAAAXIAAAGQAAANgLAAQgLAAAAgLIgBgJQgTADgJARIAAAsQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_11.setTransform(32,17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_12.setTransform(22.5,15.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACAAAIQgBAFgDAEQgDADgGAAIgEAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgNAAQgEAAgDgDg");
	this.shape_13.setTransform(12.9,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("AgZBEQgEgDAAgFQAAgIATgpIgfg3IgEgHQgDgEAAgDQAAgFAEgDQAEgEAFAAQAGAAADAEQAMARAQAhIALgZIANgXQADgGAHAAQAFAAAEADQAEAEAAAEIgCAGIgeA+IgRAmIgFAQQgDAIgIAAQgFAAgEgDg");
	this.shape_14.setTransform(-4.2,19.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066FF").s().p("AgPBKQgFgDAAgFIABgCQACgNAAgLIAAgrIgGABIgFABQgGAAgDgEQgDgDgBgFQABgIAIgDIAQgBIABgKQACgUAIgJQAKgMAUAAQARAAgBALQAAAMgOAAQgLAAgEAHQgEAGgCALIAAADIARgBQAQAAAAALQAAAMgRgBIgRABIAAAXIAAAXQAAARgCAJQgBAJgJAAQgFAAgDgDg");
	this.shape_15.setTransform(-13.8,15.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066FF").s().p("AgQBKQgDgDAAgFIAAgCQACgNAAgLIAAgrIgGABIgFABQgGAAgDgEQgEgDAAgFQAAgIAJgDIAPgBIABgKQADgUAIgJQAJgMAWAAQAQAAAAALQAAAMgPAAQgLAAgFAHQgDAGgBALIgBADIARgBQAQAAAAALQAAAMgRgBIgRABIAAAXIABAXQgBARgCAJQgCAJgIAAQgFAAgEgDg");
	this.shape_16.setTransform(-23,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066FF").s().p("AASArQgMAFgLAAQgMAAgJgGQgJgFgCgNQgEgVAAgQQAAgMADgPQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBANIABAUQAAAJACAGIAEACIAEAAQAJAAAMgCIAAgQIgBgNQAAgTACgNQABgKALAAQAFAAAEADQAEAEgBAEIgBAfIAAARIAAASIAAAFIAAAGQAAAEgDAEQgEADgFAAQgHAAgDgHg");
	this.shape_17.setTransform(-32.2,17.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066FF").s().p("AgrBDQgEgFAAgFIAAhbIAAgMQgBgIABgEQABgJAOgBQAHgCAQAAQAPAAAPAKQASANAAATQAAAKgDAHQgDAFgIAGQAJAEAHAIQAHAKAAAJQAAALgNALQgIAHgKAEQgTAHgfAAQgGAAgEgEgAgXAvQAPAAARgGQAPgEAAgFQAAgHgKgFQgHgFgHAAIgXgBgAgXguIAAATIAAASIAMABQAagDAAgRQAAgGgIgGQgHgHgJABIgOAAg");
	this.shape_18.setTransform(-42.1,15.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACAAAIQgBAFgDAEQgDADgGAAIgEAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgNAAQgEAAgDgDg");
	this.shape_19.setTransform(12.9,16);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_20.setTransform(22.5,15.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgiAuQgDgEABgEIAAg5IAAgIIAAgIQAAgFACgDQADgEAGAAQAJAAACAKQAPgLATAAQARAAAAAXIAAAGQAAANgLAAQgLAAAAgLIgBgJQgTADgJARIAAAsQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_21.setTransform(32,17.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAATgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_22.setTransform(40.8,17.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AADAcQgCgIgCgVIgDAEIgNAiQgCAEgCACQgEAGgHAAQgEAAgFgHQgEgIgDgMQgDgLgGgkIgCgMQABgFAEgDQADgDAFAAQAKAAABAJIACAMIACANIAEAVIAPgrQADgMAJAAQAJAAAEANIAEAXIAFAYIANg1QADgHAIAAQAGAAADADQAFADAAAFIgBADIgSA9QgEAIgFAJQgFAFgHAAQgKAAgHgVg");
	this.shape_23.setTransform(51.8,17.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_24.setTransform(62.1,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_19},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_19},{t:this.shape_20},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,0,201.9,29.1);


(lib.header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAHQgDgDAAgEQAAgCADgDQADgDAEAAQAFAAADACQADADAAADQAAAEgDADQgEACgEAAQgEAAgDgCg");
	this.shape.setTransform(-20.3,47.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AggA0QgEgDAAgEIAAhIIgBgJIABgJQABgGALgCQAFgCANAAQALAAAMAJQAOAJAAAPQAAAIgDAGQgCAEgGAEQAHADAFAHQAGAHAAAHQAAAJgKAIQgHAFgHADQgPAHgZAAQgEgBgCgDgAgSAlQANgBAMgEQAMgEAAgEQAAgEgHgFQgHgDgFAAIgSgBgAgSgjIAAAOIAAAOIAKABQAUgCAAgOQAAgFgGgEQgGgFgGAAIgMABg");
	this.shape_1.setTransform(-27.5,42.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgkAzQgDgDAAgEIAAgPIAAgPIAAg3QAAgEADgEQAEgEAGAAIARACQAJABAGADQAdAPAAAWQAAAJgGAFQgHAHgMAFQASAKAKALQACACAAAEQAAAEgDACQgCADgFAAQgDAAgDgDQgVgTgYgIIABAWQAAAEgDADQgCADgEAAQgFAAgCgDgAgUACIADAAQAQAAAIgDIAGgFQADgDAAgBQAAgIgKgHQgIgHgLgBIgHAAg");
	this.shape_2.setTransform(-36.5,42.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_3.setTransform(-45.3,42.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgOAxQgJgUgJglIgGgSQgEgNAAgFQAAgEADgDQADgCAEAAQAGAAADAHIACALIAHAXIALAhIAPgoIAFgRQAEgJAFgGQADgDAEAAQAEAAADADQADACAAAEIgCAGQgEAFgDAHIgEAOIgTAuQgDAJgEAIQgDAFgFAAQgHAAgDgGg");
	this.shape_4.setTransform(-54.5,42.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgIAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_5.setTransform(-69.4,44.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAQAyQgCgFgBgKIgBgQIAAgFIAAgGIAAgFQgBgDgDAAQgHAAgFAGIgJANQAAAZgCAFQgDAFgGAAQgEAAgDgCQgDgDAAgDIABgEIABgTIAAgsIAAgDIABgKIgBgHIgBgGQAAgEADgCQADgDAEAAQAHAAACAHIABANIAAAOIAAANQAFgFAFgCQAFgDAGAAQAMAAAFAHQAEAFABAJIABARIABANIACAOIABACQAAAEgDADQgDACgEAAQgHAAgCgHg");
	this.shape_6.setTransform(-77.2,42.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAvQgDgCAAgEIAAgHIAAgHIgBgjIgNgBQgIgBgBgIQABgEADgCQACgDAEAAIAMABIAAgIIgBgGQAAgEADgCQACgDAFAAQAJAAAAARIAAAGIAHgBQAHAAADABQAGACgBAHQAAAEgCACQgDACgEABIgDAAIgDAAIgHAAIABAjIAAADIAAAEQABAQgLAAQgCAAgDgDg");
	this.shape_7.setTransform(-84.6,43.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_8.setTransform(-97.6,42.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAdQgKgKgBgPQAAgPAIgLQALgOARgBQAOAAAIALQAHAKAAAPQAAAPgIALQgKAMgPAAQgMABgJgJgAgJgKQgEAGAAAIQAAAHAFAFQADAEAFgBQAFAAAFgDQAFgFAAgJQABgUgNgBQgHAAgFAJg");
	this.shape_9.setTransform(-104.9,44.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFAvQgDgCAAgEIAAgHIABgHIgCgjIgNgBQgJgBAAgIQAAgEADgCQADgDAEAAIALABIAAgIIAAgGQAAgEADgCQACgDAEAAQAKAAAAARIAAAGIAGgBQAJAAACABQAFACAAAHQABAEgDACQgDACgEABIgDAAIgEAAIgGAAIABAjIABADIAAAEQgBAQgJAAQgDAAgDgDg");
	this.shape_10.setTransform(-117.8,43.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIAAgFIAAgGIAAgDIABgDQAAgFgDAAQgGAAgEAHQgGAIgDAKIgBAGIAAAHIAAAFIgBAGQAAAEgDADQgDADgEAAQgEAAgCgDQgDgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIgBgGQABgEADgCQACgDAEAAQAJAAABALIAAABQAKgKAKAAQANAAAFAKQADAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgCADgEAAQgJAAgBgJg");
	this.shape_11.setTransform(-124.7,44.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAdQgKgKgBgPQAAgPAIgLQALgOARgBQAOAAAIALQAHAKAAAPQAAAPgIALQgKAMgPAAQgMABgJgJgAgJgKQgEAGAAAIQAAAHAFAFQADAEAFgBQAFAAAFgDQAFgFAAgJQABgUgNgBQgHAAgFAJg");
	this.shape_12.setTransform(-132.2,44.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaAkQgCgDgBgEIAAgrIABgHIAAgGQAAgEADgCQABgDAFAAQAHAAACAIQALgJAOAAQAOAAABASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgFAAQgEAAgCgCg");
	this.shape_13.setTransform(-139,44.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_14.setTransform(-146.2,42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgEAAQgEAAgDgDQgCgDAAgEIAAgFIgBgGIABgTIABgSIAAgGIgBgGQAAgEADgCQADgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_15.setTransform(-159.3,44.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIAyQgCgDgBgEIAAgMIAAgNIAAgPIABgOQABgEACgDQACgCAFAAQADAAACACQADADAAAEIgBAOIAAAPIAAANIAAAMQAAAEgCADQgDACgDAAQgEAAgDgCgAgFgiQgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_16.setTransform(-164.8,42.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTA1QgEgEABgDQgBgFADgEQADgFAGAAQAEAAADAEQADACgBAFQABADgDAEQgDAFgFAAQgEAAgDgCgAgPAXQgDgDAAgDQAAgFAJgIIAPgKQAJgGAAgGQAAgHgHgFQgGgGgGABQgDAAgHADQgHAFgCAAQgEAAgDgDQgDgDAAgEQAAgGAMgHQALgEAGAAQAOAAAMALQAMAKAAAPQAAAOgOAKIgMAHQgGAGgDADQgEAEgDAAQgEAAgDgDg");
	this.shape_17.setTransform(-176.9,42.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_18.setTransform(-185.7,42.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAYAnQgEgIgCgLIgQACIgQACIgLAWQgDAFgFAAQgFAAgCgCQgDgDgBgEQAAgEALgUIgBgEQAAgDAGgCIAWghQAQgaAEAAQAHAAADAJIAFAVIAKAsIADAJQACAHAAACQAAAEgDADQgCADgEgBQgGAAgFgMgAgEAGIAJAAIAJgBIgFgXIgNAYg");
	this.shape_19.setTransform(-195.8,42.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAdA0QgDgCAAgFIAAgOIgBgPIAAgHIgZADIgaAFIgBAPIgBAOQAAADgDADQgCADgEgBQgEABgDgDQgDgDAAgDIACgVIABgTIAAgZIABgaQAAgEACgCQADgCAEgBQAEABADACQACACAAAEIAAAQIgBAQIAAAGIAAAHIAagFIAZgDIABgZQAAgGAEgHQADgIAFAAQAEAAADACQADAEAAADIgBACIgBAJIAAAGIgBAGIAAATIgBATIABAPIAAAOQAAAFgCACQgDADgEgBQgEABgDgDg");
	this.shape_20.setTransform(-206.1,42.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAOA2QgEgDAAgEIgEgNIgIgrQgEANgFALQgHAQgDAJIABAEQgBAEgDADQgDACgEAAQgGAAgCgCQgEgDgBgFIgCgIIgHggQgFgPgKgeIAAgDQAAgFADgCQACgDAFABQAEgBAEAFIADAIQAHAUAJAkIALgeIAHgVQAHgPAGgBQAHABADAHIADAMIACAPQABALAIAeIASgwIAEgMQADgIACgFQADgEAGAAQAEAAADACQACADAAAEIgBAIIgEAGIgDAMIgMAcIgNAdIgFAMQgEAFgGAAQgEAAgDgBg");
	this.shape_21.setTransform(-218.9,42.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_22.setTransform(-2.8,22.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgNAIgNQALgNARAAQAOAAAIALQAHAKAAAOQAAAPgIALQgKANgPAAQgMAAgJgJgAgJgLQgEAHAAAHQAAAJAFAEQADADAFABQAFAAAFgFQAFgEAAgJQABgVgNABQgHAAgFAHg");
	this.shape_23.setTransform(-10.1,22.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTA0QgDgCAAgFQAAgEACgEQAEgFAFAAQAFAAACADQACAEABADQgBAEgCAFQgDAEgFAAQgEAAgDgDgAgPAXQgDgCAAgEQAAgGAJgGIAPgLQAJgGAAgGQAAgHgHgFQgGgGgGAAQgEAAgGAFQgGAEgDAAQgEAAgDgDQgDgDAAgEQAAgHAMgFQALgFAGAAQAOAAAMALQAMALAAAOQAAAOgOAKIgMAIQgGAFgDAEQgEADgDAAQgEAAgDgDg");
	this.shape_24.setTransform(-23.7,21.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjAqQgQgMAAgUQAAgWAPgTQAQgWAYAAQAYAAAMALQAMALAAAWQAAAWgOATQgPAWgYAAQgUAAgOgMgAgVgUQgKAOAAAQQAAALAJAIQAIAGANAAQAOAAAKgOQAJgOAAgQQAAgOgGgGQgGgFgQAAQgOAAgLAOg");
	this.shape_25.setTransform(-33.3,21.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAdA0QgDgCAAgEIAAgQIgBgPIAAgGIgZADIgaAFIgBAOIgBAPQAAAEgDACQgCACgEABQgEgBgDgCQgDgCAAgEIACgUIABgVIAAgZIABgZQAAgDACgDQADgCAEAAQAEAAADACQACADAAADIAAAQIgBAPIAAAHIAAAHIAagFIAZgDIABgZQAAgGAEgGQADgIAFAAQAEAAADACQADADAAADIgBADIgBAIIAAAGIgBAGIAAATIgBASIABAPIAAAQQAAAEgCACQgDACgEABQgEgBgDgCg");
	this.shape_26.setTransform(-44.1,20.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAOA1QgEgCAAgEIgEgNIgHgrQgFANgFALQgIAQgCAJIAAAEQAAAEgDACQgDADgFAAQgEAAgEgDQgDgDAAgEIgCgIIgIggQgFgQgKgdIgBgEQAAgEADgCQAEgDADAAQAGAAACAFIAFAJQAGATAIAkQAGgNAFgRIAIgWQAHgOAGAAQAHgBADAIIADANIABANQACAMAHAeIAUgwIADgNQACgHAEgEQADgFAFAAQAEAAADADQADACAAAEIgDAHIgDAHIgDAMIgNAcIgMAeIgGALQgDAGgGAAQgEAAgDgDg");
	this.shape_27.setTransform(-56.8,21.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAkQgLgEAAgIQAAgGAIAAIAKACQAFABAEAAQANAAAAgFQAAgDgKgEIgRgJQgKgHAAgJQAAgOAPgEQAIgEARAAQAHAAADADQAEACAAAGQAAANgGAAQgHgBgBgFIgGgBQgPABAAAEQAAACAJAFQANAGAFADQAKAHAAAJQAAAMgLAFQgJAGgMAAQgJgBgHgCg");
	this.shape_28.setTransform(-73.7,22.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_29.setTransform(-80.2,22.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgHAGIgQAGIgWALQADADAFACQAFACAEAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_30.setTransform(-87.8,22.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AACAWIgDgXIgBADIgLAbIgDAEQgDAFgGAAQgDAAgEgGQgDgGgCgJIgHgkIgBgKQAAgDADgDQADgCAEAAQAHAAACAHIABAJIABAKIADAQIAMghQADgJAGAAQAHAAADAKIADASIAEASIALgoQABgGAHAAQAFAAADACQACADAAAEIAAACIgPAvQgBAGgFAHQgDAEgGAAQgIAAgGgQg");
	this.shape_31.setTransform(-96.3,22.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSAkQgLgEAAgIQAAgGAIAAIAKACQAFABAEAAQANAAAAgFQAAgDgKgEIgRgJQgKgHAAgJQAAgOAPgEQAIgEARAAQAHAAADADQAEACAAAGQAAANgGAAQgHgBgBgFIgGgBQgPABAAAEQAAACAJAFQANAGAFADQAKAHAAAJQAAAMgLAFQgJAGgMAAQgJgBgHgCg");
	this.shape_32.setTransform(-104.7,22.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgEAAQgEAAgDgDQgCgDAAgEIAAgFIgBgGIABgTIABgSIAAgGIgBgGQAAgEADgCQADgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_33.setTransform(-111.6,22.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AARAfIgLAFIgHACQgRAAgJgJQgIgJAAgSQABgPALgMQAMgMARAAQAGAAAIAEQALAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIgBAHIAAAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgDAAgGgHgAgJgNQgGAHgBAJQAAAJAEAFQADAEAHAAIAHgBIAGgEIgCgYIABgFIAAgGIgCgBIgBAAQgJAAgHAHg");
	this.shape_34.setTransform(-119.2,22.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0000FF").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_35.setTransform(-134,20.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000FF").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBAAgBQgBAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_36.setTransform(-143.2,20.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000FF").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_37.setTransform(-151.8,20.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0000FF").s().p("AgdAvQgOgKAAgNQAAgKAKAAQAJAAAAAKQAAAEAIAFQAGAEAGAAQADAAABgJIABgVIABgmIAAgEIgCAAIgHAAIgIgBQgEAAgDgCQgDgDAAgEQAAgJAMAAIAHAAIAGAAIAMAAIAOgBQASAAAAAKQAAAEgDADQgDADgDAAIgFAAIgEgBIgFAAIgBAFQAAAwgGAWQgFARgNAAQgNAAgMgJg");
	this.shape_38.setTransform(-160.9,21.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0000FF").s().p("AggA0QgEgEAAgEIAAhHIgBgJIABgJQABgHALgBQAFgBAMAAQAMAAAMAIQAOAJAAAPQAAAIgDAFQgCAFgGAEQAHADAFAGQAGAIgBAHQABAJgKAIQgHAFgHAEQgPAFgZAAQgDABgDgEgAgSAkQANAAAMgEQAMgEAAgDQAAgFgHgEQgGgEgGgBIgSAAgAgSgkIAAAPIAAAOIAKAAQAUgBAAgOQAAgFgGgEQgGgFgHAAIgLAAg");
	this.shape_39.setTransform(-169.8,20.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0000FF").s().p("AgbAvQgSgOAAgiIAAgJIABgKIAAgIIAAgIQABgFACgFQACgGAEAAQAFAAACACQADADABAEIAAALIAAAMIgBAJIgBAKQAAAJADAJQADALAGAEQACACALABQARAAAHgfQADgPAAgdQAAgEACgEQADgEAGAAQAEAAACADQACADAAADQAAAbgCAPQgEAWgLAPQgFAHgHAFQgJAFgIAAQgSAAgIgGg");
	this.shape_40.setTransform(-179.6,21.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0000FF").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_41.setTransform(-189.6,21.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAKgMQAKgNAQAAQAMAAAHAEQALAFgBAKQABAIgJAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgCAIIAPgGQAIgEAFgEQgEgDgHAAQgGAAgEAFg");
	this.shape_42.setTransform(-204.5,22.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAQAyQgCgFgBgKIgBgQIAAgFIAAgGIAAgFQgBgDgDAAQgHAAgFAGIgJANQAAAZgCAFQgDAFgGAAQgEAAgDgCQgDgDAAgDIABgEIABgTIAAgsIAAgDIABgKIgBgHIgBgGQAAgEADgCQADgDAEAAQAHAAACAHIABANIAAAOIAAANQAFgFAFgCQAFgDAGAAQAMAAAFAHQAEAFABAJIABARIABANIACAOIABACQAAAEgDADQgDACgEAAQgHAAgCgHg");
	this.shape_43.setTransform(-212.3,20.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_44.setTransform(-221.3,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.header, new cjs.Rectangle(-228.2,8.6,236.9,45.1), null);


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
	this.shape.graphics.f("#000000").s().p("AAcAIIgDgLIgFAKQgDAJgEAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgBgJIgCgHQgGATgDAAIgDgBIgBgDIABgCQAEgEABgHIADgMQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQADAAACAIIADALIADgGIACgJQADgFACAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIADAKIACAHIADAIIAAABIAAADIgCABQgEAAgCgJgAgUANIAAgIIgBgGIgBgHIgFAAIgGgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAGAAIAEAAIAPAAIADAAIAEAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgOABIAAAHIAAAHIABAEIABADIgBADIgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape.setTransform(58,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAYQgHgCAAgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAEACIAEACIAGABIAFgBQAEgCAAgCQAAgGgIgCIgEgCIgIgCQgDgCgBgFQAAgJAJgEIAHgDIAJgDIADAAIAEABIABADIAAAEIABADIgBAEIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgBgEIgKADQgGACAAAFIACAAQAKACAEADQAIAEAAAJQAAAHgHADQgFADgGAAQgGAAgFgCg");
	this.shape_1.setTransform(51.7,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMATQgGgGAAgJQAAgIAGgJQAHgLAHAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgCgBIgBgCQgDgCgGAAQgDAAgFAIQgEAIAAAEQAAAGAEADQAEADAFAAIAFgBIAFgDIACgBIADACIABADQAAADgHADQgFADgEAAQgIAAgHgGg");
	this.shape_2.setTransform(47.4,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAgQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgIIABgKIAAgKQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgBIACABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAKIAAAKIAAAIIAAAIQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCABIgDgBgAgCgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(43.9,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALAVIgBgJIgBgKIAAgDIAAgEQAAgKgDAAQgFABgEAFQgEAGgCAGIAAAFIgBAEIABAEIAAAEIgBAEIgDABIgEgBIgBgEIAAgEIAAgEIAAgMIABgMIAAgEIAAgEIABgEIADgBQAEABAAAFIABAFQAHgJAHgBQAHAAADAHQABAEABAIIAAAFIAAACIABAKIAAAJIgBAEIgDABQgEAAAAgFg");
	this.shape_4.setTransform(40.3,5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAXIgDgEIgHAEIgFABQgKAAgFgGQgEgGAAgLQAAgKAHgHQAIgIAJAAQAEAAAEADQAGACAAADIgBACIAAAGIgBAJIABAIIADAIIABACIAAABIgBAEIgDABIgDgCgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_5.setTransform(35.5,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAiIgCgLIgBgKIABgEIAAgDQAAgIgFABQgFAAgEADIgGALQAAAQgCADQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBgDIABgCIAAgGIAAgHIAAggIABgGIgBgFIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQADAAAAAFIABAHIAAAKIAAAKIAAADQADgEAEgDQAEgDAEABQAIAAACAEQACAEABAHIAAAIIABAJIABAJIABACQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIgDABQgDAAgBgCg");
	this.shape_6.setTransform(30.7,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMATQgGgGAAgJQAAgIAGgJQAHgLAHAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgCgBIgBgCQgDgCgGAAQgDAAgFAIQgEAIAAAEQAAAGAEADQAEADAFAAIAFgBIAFgDIACgBIADACIABADQAAADgGADQgGADgEAAQgIAAgHgGg");
	this.shape_7.setTransform(25.8,5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOATQgHgFAAgKQAAgLAGgHQAGgJAJAAQAHAAAFACQAFADAAAHQAAAEgFAEIgJAEIgQAHQADAEADACQAEACAEAAIAHgBQAFgCACgCQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIADABIABADQAAAEgIAEQgHADgGAAQgJAAgGgFgAgIgLQgEAEgCAIIAOgGQAHgEADgDQgDgDgHAAQgFAAgDAEg");
	this.shape_8.setTransform(21,5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAhIgCgHIgCgIQgCgGgEgYIgJAaIgCAJIgEAIQgBADgCAAQgDAAgCgDIgBgFIgCgEIgIghIgBAIIgGAXIgCAMQgBADgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgDQAAgHAEgLIAEgQIADgPQACgJACgDQABgDADAAQADAAACAEQACADABANQADAOAEAPQAGgPAEgTIACgGIACgGQACgEADAAQAEAAACAIIACAKQACATAEAOIACAHIABAIQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_9.setTransform(14.6,4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_10.setTransform(5.8,5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAXIgDgEIgHAEIgFABQgKAAgFgGQgEgGAAgLQAAgKAHgHQAIgIAJAAQAEAAAEADQAGACAAADIgBACIAAAGIgBAJIABAIIADAIIABACIAAABIgBAEIgDABIgDgCgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_11.setTransform(1.2,5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCAaQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgBgDQgEABgDAEIgFAFIgCADIgBAHIAAAIIAAADIABAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAIgCABQgGAAAAgLIABgIIAAgHIAAgHIgBgHQABgKAEAAIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAADIAAAFQADgFAEgEQAEgEAEAAQAGAAACAHQACgDADgCQAEgBAEAAQAIAAACAIIACAMIAEAYIgCADIgDABQgDAAgBgDIgCgOIgBgNIgCgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgGADIgFAEIAAAIIABALIAAAMIAAADIgDABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_12.setTransform(-4.5,5.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAaQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgBgDQgEABgDAEIgFAFIgCADIgBAHIAAAIIAAADIABAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAIgCABQgFAAgBgLIABgIIAAgHIAAgHIgBgHQAAgKAFAAIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAADIAAAFQACgFAFgEQAFgEADAAQAGAAACAHQADgDADgCQADgBAEAAQAHAAAEAIIABAMIADAYIgBADIgDABQgDAAgCgDIgBgOIgBgNIgCgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgGADIgGAEIAAAIIACALIAAAMIgBADIgCABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_13.setTransform(-11.5,5.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAXIgDgEIgHAEIgFABQgKAAgFgGQgEgGAAgLQAAgKAHgHQAIgIAJAAQAEAAAEADQAGACAAADIgBACIAAAGIgBAJIABAIIADAIIABACIAAABIgBAEIgDABIgDgCgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_14.setTransform(-17.4,5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_15.setTransform(-21.7,5.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAeQgGgGAAgMQAAgMAGgLQAEgLAJgIQAGgFAFAAQAEAAAHADQAHADAAADIgBAEIgDABIgCgBQgIgEgEAAQgDAAgDAEIgFAFQgKAOAAAPQAAAIACAEQADADAHAAQAHAAAHgFQAFgFADgKQgMAAgIAFIgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgDQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAIgFAYAAIADABIABADQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgDAOgJAIQgJAIgLAAQgKAAgFgGg");
	this.shape_16.setTransform(-26.9,4.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOAhIgBgDIADgIIAKgXQAFgPAHgHIABgBIgVgBIgKAAQgEAAAAgEQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAIARABIAPAAIAIAAQAFAAAAADQAAACgDADIgEAFQgFAHgFAJIgIARIgDAKIgEAKQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgCg");
	this.shape_17.setTransform(-35.5,4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAXQgFgJAAgOQAAgNAGgKQAIgLALAAQAMAAAGAKQAGAJAAAMQAAASgHALQgGAJgMAAQgNAAgGgMgAgLgRQgEAHAAAJQAAANAEAIQAEAHAHAAQAJAAAEgLQADgHAAgLQAAgLgEgHQgEgFgHAAQgHAAgFAIg");
	this.shape_18.setTransform(-41.1,4.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTAXQgFgJAAgOQAAgNAGgKQAIgLALAAQAMAAAGAKQAGAJAAAMQAAASgHALQgGAJgMAAQgNAAgGgMgAgLgRQgEAHAAAJQAAANAEAIQAEAHAHAAQAJAAAEgLQADgHAAgLQAAgLgEgHQgEgFgHAAQgHAAgFAIg");
	this.shape_19.setTransform(-46.6,4.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgGABIgGAAIgFAAIgFABIgCAAIgBAAQgDAAgBgDIgBgGQAAgKAGgGQADgDALgHIAHgGQAEgFAAgFQAAgDgEgCQgDgCgDAAQgDAAgEACIgGAFIgDABQgEAAAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAFgFAEgCQAFgDAFAAQAHAAAGAEQAGAEAAAHIgBAJIgEAGQgDADgIAFQgIAFgCADQgFAFAAAHIAJAAIAMgBIAHABQAEACAAACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgCABIgEgBg");
	this.shape_20.setTransform(-52,4.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfABQABgLAKgKQAMgJAMAAQANAAAHAIQAIAIgBAMQABAKgKAKQgJALgMAAIgBAAQgfAAAAgdgAgOgPQgJAHAAAJQAAALAHAFQAFAFAMAAQAJAAAHgJQAGgIAAgHQAAgJgDgFQgFgFgJAAIgCAAQgLAAgHAGgAgLAJQgFgEAAgFQAAgHAHgFQAGgEAGAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAgBAAQgBAAgBAAIgBAAIgCAAQgDAAgEACQgFADABADQAAACADABIAEACQADAAADgDIAFgCIACABIABADQAAADgEADQgFADgFAAQgFAAgFgEg");
	this.shape_21.setTransform(-58.4,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-4.3,128.1,16.5);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6600CC").ss(3,1,1).p("EglvgWPMBLfAAAMAAAAsfMhLfAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEFE78","#FEB367"],[0,1],-0.2,199.3,549.7,199.3).s().p("EglvAWQMAAAgsfMBLfAAAMAAAAsfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.1,-143.9,486.2,287.8);


(lib.Wordsverb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,flash:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgcBLQgFgEABgFQAAgIADgFQAFgHAIAAQAGAAAEAFQADAEAAAGQAAAFgDAGQgEAGgIABQgFgBgFgDgAgWAiQgEgEAAgGQAAgIANgKIAVgPQANgKAAgHQAAgKgJgHQgJgIgJAAQgFAAgJAGQgKAGgEAAQgFAAgFgFQgDgEAAgFQAAgKARgIQAOgHAKABQAUAAARAPQASAPAAAVQAAAUgVAOIgQALIgOANQgEAGgGgBQgGAAgEgDg");
	this.shape.setTransform(73.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgbAzQgPgFAAgMQAAgJAMAAQAFAAAIADQAJADAEAAQATgBAAgHQAAgGgOgFIgZgMQgNgKAAgNQAAgUAVgHQAMgEAYAAQAJAAAFACQAHAEgBAJQABASgKAAQgKgBgCgHIgIgBQgWAAAAAGQAAAEANAHQAUAIAGAFQAPAKAAANQAAAQgQAJQgMAHgSAAQgNAAgLgEg");
	this.shape_1.setTransform(63,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_2.setTransform(52.5,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_3.setTransform(41.7,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgeBPQgLgDgHgEQgFAAgEgEQgEgEAAgFIABgdIABgeIgBgfIAAghQAAgFAFgFQAFgGAGAAQADAAANAGQAPAIADAAQAcAKAUATQAYAXAAAbQAAARgIAPQgJAQgOAJQgQALgdAAQgHAAgJgCgAghAyQADACAFABQAFACAGAAQAUAAAKgGQAIgGAFgJQAFgKAAgKQAAgXgcgSQgIgGgfgNg");
	this.shape_4.setTransform(29.7,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.1,0,61.3,31.9);


(lib.Wordsthrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape.setTransform(98,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AADAcQgCgIgCgVIgDAEIgNAiQgCAEgCACQgEAGgHAAQgFAAgEgHQgFgIgDgMQgDgLgFgkIgCgMQAAgFAFgDQADgDAFAAQAKAAACAJIABAMIACANIAEAVIAOgrQAEgMAJAAQAKAAADANIAFAXIAEAYIAOg1QABgHAJAAQAFAAAEADQAEADABAFIgBADIgTA9QgCAIgHAJQgDAFgIAAQgLAAgGgVg");
	this.shape_1.setTransform(87.7,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAATgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_2.setTransform(76.7,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgiAuQgDgEABgEIAAg5IAAgIIAAgIQAAgFACgDQADgEAGAAQAJAAACAKQAPgLATAAQARAAAAAXIAAAGQAAANgLAAQgLAAAAgLIgBgJQgTADgJARIAAAsQABAFgEADQgDADgGAAQgFAAgDgDg");
	this.shape_3.setTransform(67.9,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_4.setTransform(58.4,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFAEgDQADgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACABAIQAAAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape_5.setTransform(48.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.Wordscomplement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgcBLQgFgEAAgFQAAgIAEgFQAFgHAIAAQAGAAAEAFQADAEAAAGQAAAFgDAGQgEAGgIABQgFgBgFgDgAgWAiQgEgEAAgGQAAgIANgKIAVgPQANgKAAgHQAAgKgJgHQgJgIgJAAQgGAAgIAGQgKAGgEAAQgFAAgFgFQgDgEAAgFQAAgKARgIQAOgHAKABQAUAAARAPQARAPABAVQAAAUgVAOIgQALIgOANQgEAGgGgBQgGAAgEgDg");
	this.shape.setTransform(77.1,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgIBEQgEgEgBgFIABgKIAAgLIgCgyIgSgBQgMgCAAgLQAAgFADgEQAEgEAGAAIARABIAAgKIgBgKQAAgFAEgEQAEgDAFAAQAOAAAAAYIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgDADgHAAIgEAAIgGAAIgJABIACAzIAAAEIAAAGQAAAWgNAAQgFAAgEgDg");
	this.shape_1.setTransform(66.8,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AAYAtQgKAEgHACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_2.setTransform(56.6,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_3.setTransform(45.4,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AATBMQgFgDAAgGQgFgLgBgIIgKg9QgHASgIAQQgKAXgDAOIAAAEQAAAGgFAEQgFADgGAAQgGAAgFgDQgGgEAAgHIgCgMIgLgtQgHgWgPgrIgBgFQABgGAEgDQAEgDAGAAQAHAAAEAGQADADADAJQAJAcAMA0QAIgTAJgZQAGgVAEgJQAKgWAJAAQAJAAAFALQACAFACANIADAUQACAQAKAsQAKgYASgtIAFgSQADgLAEgGQAEgHAJAAQAGAAAEAEQADADAAAGIgDAKIgEAKIgFARIgSApIgSAqIgIAQQgEAIgJAAQgGAAgFgDg");
	this.shape_4.setTransform(29.1,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},3).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.6,0,68.3,31.9);


(lib.Wordssubject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgcBLQgEgEAAgFQAAgIADgFQAFgHAIAAQAHAAADAFQADAEAAAGQAAAGgDAFQgFAGgGAAQgGABgFgEgAgWAhQgEgEAAgFQAAgIANgKIAWgPQAMgJAAgIQAAgJgJgIQgJgIgJAAQgFAAgKAGQgJAGgDAAQgHAAgDgEQgFgFAAgFQAAgJASgJQAOgGAKAAQAUAAARAPQARAPAAAVQAAAUgTAOIgRAMIgOAMQgFAGgFAAQgGAAgEgFg");
	this.shape.setTransform(91.5,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgIBEQgFgDABgGIAAgLIABgKIgCgyIgTgBQgMgBAAgMQAAgGAEgDQAEgEAFAAIARABIgBgKIAAgKQAAgFAEgEQAEgEAGABQANgBAAAZIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAyIABAFIAAAGQgBAWgOABQgEAAgEgEg");
	this.shape_1.setTransform(81.2,47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AAXAtQgIAEgHACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQARgRAYAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgCAKIAAAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgKgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAEgCAGgEQgEgWAAgLIABgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_2.setTransform(71,49.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_3.setTransform(59.7,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AAUBMQgFgDgBgGQgFgLAAgIIgMg9QgGASgHAQQgLAXgEAOIABAEQAAAGgFAEQgFADgFAAQgHAAgGgDQgEgEAAgHIgEgMIgKgtQgHgWgOgrIgBgFQgBgGAFgDQAEgDAFAAQAIAAAFAGQACADADAJQAJAcANA0QAIgTAHgZQAHgVAEgJQAKgWAJAAQAJAAAFALQACAFACANIADAUQABAQALAsQALgYARgtIAFgSQADgLAEgGQAFgHAHAAQAHAAADAEQAFADAAAGIgEAKIgEAKIgGARIgRApIgSAqIgHAQQgFAIgKAAQgFAAgEgDg");
	this.shape_4.setTransform(43.4,47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQgBgGAEgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgVAEgJATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_5.setTransform(19.7,49.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_6.setTransform(9.4,49.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_7.setTransform(66.8,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_8.setTransform(56.1,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AATBMQgFgDAAgGQgEgLgCgIIgKg9QgHASgIAQQgKAXgDAOIAAAEQAAAGgFAEQgFADgGAAQgHAAgEgDQgGgEAAgHIgCgMIgLgtQgGgWgQgrIgBgFQABgGAEgDQAEgDAGAAQAHAAAEAGQADADADAJQAKAcALA0QAJgTAIgZQAGgVAEgJQAKgWAJAAQAJAAAFALQACAFACANIACAUQADAQAKAsQALgYARgtIAFgSQACgLAFgGQAEgHAJAAQAFAAAFAEQADADAAAGIgDAKIgEAKIgFARIgSApIgSAqIgIAQQgEAIgKAAQgFAAgFgDg");
	this.shape_9.setTransform(39.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},3).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,0,97,61.8);


(lib.BuffyThrowsStatic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhCjIQgBgFgBgFQAAgBAAAAQgBgIgBgIQAAgBAAgBQgCgYAKgDQAIgDAQALQAFADADAHQABASACARQAAACAAABQAKAFAFAIQADAGADAJQABAEABAGQABABAAAAQgBgBAAgCQAAABAAABQAFANAFAJQD0AdALAkQAGAQgYAhIgfAWIgrAeQgEAEgFADQgJAHgKAHQgVAOgUAPQgIAGgIAFQgWAQgTATQgIAIgHAHQgHAIgGAIQgPAVgMAYQgLAUgFATAhZjJQABAAABAAQAFAAAFAAQAGAAAFABQAFAQAHAPAgvjQQgIgFgGADAhahiQANgCANgFQABgBAAAAQAOgFAIgNQAHgLACgPABWg5QhegOgHgCQgJgFgJgFQAAAAgBgBIAAAAQgZAAgdgDQAAAAgBAAQgBAAgCAAQgBAAAAAAQgXAcgdgJQgOgFgOgIQgBgBAAAAQgBAAAAgBQgEgCgDgCQgTgNgQgEQgEgBgFAAQgRgHgEgKQgFgMAPgPQAEgDAIABQAFABAGAFQADACACADQACACACACQACACACADQACACABABQABABABABQABAAAAABQABABABABQgBgCgBgBIAAAAIAAAAQgBgBAAgBIgBgBQgIgMgGgHQgHgJgDgDQgDgEgGgEQgGgEgEgGQgBgBAAAAQgBgBAAAAQgCgDgDgEQgIgOgFgVQgGgXAQgGQASgHAHAgQAHAcATAJQACABABABQABAAABAAQADABADABQgEgGgEgFQgBgCgBgBQgCgCgBgCQgBgBgCgCQgKggADgnQAGABAFABQAcAIAFAhQAEAXASAWQABABAAABQAFAGAEAEAgbjIQABAJABAKAheAiICJhOIArgNIBLgVAiBi8QAAgDAAgEQAAgDAAgEQgBgBAAgBQgGgYgHgXQgCgIgBgGQAAgBAAgBQAAAAAAgBQAAgCAAgBQAAgWAUgFQAHgCAFAFQAOAOgDATQgEAfASAeIAAAAQAEAGAFAGQACAEADADAhtjEQgDgCgEgCAiBi8IAAAAQAAABgBABQgBARAJANQALARAOgLAiRi9QAIACAIgBAh6j4QgFgIgHgIAjhjBQgGABgDAFAi8i5QADADACADQAEAGAFAFQACADACADQACACABACQABADAEADQAAABABACQAGAMAQgEAjBh7QAAAAABABQAHAKAKAHQACABADACQAMAHAQADAiujMQgIgEgHAAAiuiJQgHAAgIADAiwEsQgLgbAAgfQAAgHABgHQADglALgjQALgjAWgeQAUgcAYgd");
	this.shape.setTransform(1.4,-23,0.732,0.732);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CE9F6E").s().p("AiSEuQgSgEgMgGQgLgbAAgfIABgOQADglALgjQALgiAWgfQAUgcAYgdIABAAICJhNIArgNQhegPgHgCIgSgKIgBgBIAAABQgZgBgdgDIgBAAIgDAAIgBAAQgXAcgdgJQgOgEgOgJIgBgBIgBAAIgHgFQgTgNgQgDIgJgCQgRgHgEgKQgFgMAPgPQAEgDAIACQAFABAGAEIAFAFIAEAEIAEAFIADAEIACABIABABIACACIgCgDIAAAAIAAAAIgBgCIgBAAIgOgUIgKgMIgJgIQgGgEgEgGIgBgBIgBgBIgFgHQgIgOgFgUQgGgYAQgGQASgHAHAgQAHAdATAIIADACIACAAIAGACIgIgKIgCgEIgDgDIgDgEQgKgfADgnIALACQAcAHAFAiQAEAWASAWIABACIAJALIgJgLIgBgCQAIACAIgBIAAgGIAAgIIgBgCIgNgvIgDgOIAAgBIAAgCIAAgDQAAgVAUgGQAHgCAFAFQAOAOgDATQgEAfASAeIAAABIACgBIAKAAIALABQAFARAHAPQgHgPgFgRIgCgKIAAgBIgCgPIAAgDQgCgXAKgEQAIgCAQAKQAFAEADAGIADAkIAAACIACATIgCgTQAKAFAFAIQADAHADAIIACAKIAAgBIABADIgBgCIAKAXQD0AcALAkQAGARgYAgIgtAcIgFAGIATgMIgrAfIgJAGIgTAOIgpAdIgQAMQgWAQgTATIgPAPIgNAPQgPAVgMAYQgLAVgFATQAFgTALgVQAMgYAPgVQAYAcgFAhIgDAPQgJAhgcAZQgaAWgmAFQgPACgPAAQgYAAgWgGgABWhAIBLgWgAjAiCQAHAKAKAHIAFADQAMAIAQACQgQgCgMgIIgFgDQgKgHgHgKIgBgBIABABgAgpiEQgIANgOAFIgBABQgNAFgNACQANgCANgFIABgBQAOgFAIgNQAHgLACgPQgCAPgHALgAi9iOIAAAAIAFgCIABAAIAHAAIAAAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIAAAAIgHAAIgBAAIgFACIAAAAgAiTiUIAIgBIgIABIAAAAIAAAAQgKAAgEgJIAAAAIgBgDQgEgDgBgDIgDgEIgEgGIgJgKIgFgHIAFAHIAJAKIAEAGIADAEQABADAEADIABADIAAAAQAEAJAKAAIAAAAIAAAAgAhriZQAFAAAFgFQgFAFgFAAIAAAAIgBAAQgHgBgHgJIAAgBQgIgLAAgOIAAgEIABgCIAAgBIAAABIgBACIAAAEQAAAOAIALIAAABQAHAJAHABIABAAIAAAAgAgDinIABAGIAAABIABAAIgCgIIAAABgAhQjEIAFAHIgFgHIgJgMIAJAMgAjqjCQADgFAGgBQgGABgDAFgAhtjMIgHgEIAHAEgAiujUQgHgDgGgBIgBAAIAAAAIgBAAIABAAIAAAAIABAAQAGABAHADgAgvjYIgBAAQgEgDgEAAIgBAAIAAAAIgEABIAAAAIAAAAIAEgBIAAAAIABAAQAEAAAEADIABAAIAAAAgAh6kAQgFgIgHgIQAHAIAFAIgAgEirIAAABIABACIgBgDg");
	this.shape_1.setTransform(1.4,-22.5,0.732,0.732);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("ACPjPQABAFAAAFQAAACAAABQgBACgBAAQgCACgCABQgFACgCAEQgCAEAEADQAAABAAABQABABgBAAQgDACgDABQgDACgEABQgDABgCACQAAACAAABQACAEgCADQgCAFgFACQgCADgEABABchIQAAgJADgJQACgFACgFQAEgFgBgHQAAAAAAgBQgBAAgBgBQABAAABAAQAGACAGgCQACAAADAAQACAAAAgCQABgCABgBQAAgEgBgEQAAgCgBgDQAAgCgBgCQgDgEAEgCQAGgEAGADQACABADAAQABABABgBQACgBAAgCQAAgCAAgCQABgCgBgCQgBgBgBgCQgBgDACgCQABgBACgBQAEgBAEACQACABABABQADABACgBQAGgCABgIQAAgHACgGABohJQgCgEABgEQAAgFADgEQACgDADgBQACgBADgBQABAAABAAQABAAAAgBQAEgFABgGQAAgBAAgCQABgHAHgBQAFAAAFABQACAAABAAQAHgCAEgGQACgDgBgFQgBgEgCgGQAAAAAAgBQACAAACgBQAEAAAFAAQACAAABgBQAEgDgBgGQgBAAAAgBQgBgCgBgCIAAAAQAFgEAHABQADAAADABIAAAAQACAAABABQADAAABACQABABAAgBQADgDAAgDQAAgCgBgCQgEgGgFgFADUiWQgDAEgEACQgCACgEgBQgCAAgCgBQgBABAAAAQgFAGABAIQABACAAABQAAAHgHAAQgEABgDAAQABAEgBAEQgBAGgFADQgCABgBAAQgDABgBgBQgDAAgCgBQAAACAAABQAAAEgDACQgDACgDABAC8ijQgCAGgBACQgFAIgFAKQgCAFgCAFQgDAIgEAIQgBADgDAAQgCAAgCAAQgEACgDABQgDACgCABIAAAAQAAABAAAAQAAADAAACQABADgBADQgEAGgHAEQgBABgBgBQgBAAAAAAQgBgCgCgBQgCgCgDgBQgDAAgCABQgDACgBACQgCACgBADQAAAEABADQAAAFAEADADShqQgDgBgDgBQgFAAgFACQgDACgCABQgBACgBACQgEAJgKAEQgCABgDAAQgFAAgFgBAC9hMIAAAAQAAgBgBgCQgBgBgBgBQgDAAgDABACtg6QgCgFgEgEQgCgBgBgBQgBAAgBAAQgEADgFACQgDACgEABQAAAAgBgBQAAgBgBgCQgBgBAAgBIAAAAQgCgBgBgCQgDgDgDgBQgDAAgDABQgEACgBADQgBADgBAEACNg/QgCADABACACMg5QACAGABAGQABAHAAAFQAAAEAAAEQAAAKABAJQABAEACACQALgDAGgIQAAAAAAgBQADgBABgDACUAAQADAFAGACQAGADAHgBQALAAABAMQACAKgGAIQgDADgDACQgFACgFADQABAKgCAKQgBAGgCAIQgCAIgGAIQgCADgDACQAAACABACQgFACgEAAQgIgBgHgDIgBAAQgJgCgJgCQgLgCgIgDQgDgBgDgCQAAAAABAAQAEgCAEABQAJABAJgBQAKgCAKAAQAJgBAJAAQAAAGACAIACQACQAAAAgBABQACACAAADQACAGgEAHIgBAAQgFAJgLABQgJAAgFgJQgFgIgCgKQgCgJADgIQACgMAHgHQADgCAEADQAIAGAEAIQAFAIAEAJQABABAAABQACAEgBACACQACQABAAAAAAQACgBABgBACPADQgEABgEgBQgDAAgDgBQgFALAKAFQAEACAFABABhjMIAAAAABijHQAAAAAAAAQgBABgBABQgBABAAABQgBACABACQABABACABQADAAACABQADABACABQAAABABAAQAAABgBAAQgCAEgFABQgFAEgBAFQgBACAAACQABABABgBQABABACAAQACAAACABQAEACgBADQgBACAAABQgEAEgFAAQgGABgFADQgBABAAACQABACABACQABACABABQAAABAAABQABACgBACQgBABgCACQgGAJgBAJQAAACACABQABABACABQACABACADQABACABACQABACAAACQgBACgBABQgBACgCAAQgDABgCABQgDABgCABQgCABAAABQgCAHABAHQABAFABAFAAhgsQgGgFgFgGQgBgBgBgCQAAAAAAgCQAAgCACAAQADgBABgBQAGgDAFgFQABAAAAgCQAAgCgCgCQgBgCgBgDQgEgFgEgGQgBAAgBgCQgCgIAGgGQACgBABgCQACgDAEgDQABAAAAgCQgBgGgGgEQgDgCgCgDQAAAAgBgCQAAgFADgDQABAAACgBQABABABgBQABAAABgBQAAgBAAgCQABgFgDgDQgBgBgBgBQgCgBgCgCQgCgCACgDIABAAQADgHAFgFQACgBABgCQABAAABgBQADgDgCgDQgCgDgBgDQgCgFAEgEQADgDADgCAA1g2QgBgGgDgHQAAgCgBgDQgBgCAAgBIABAAQAEAAAFACQABAAABAAIABAAQABAAAAgCQAAgBAAgBQAAgCAAgBQgBgCgCgCQgCgDgCgCQAAgBgBgBQABgDACgCQADAAACgBQADgBADAAQABABABAAQABgDgDgDQgEgEgFgFQgCAAgBgCQgEgDAAgEQgBgCABgDQAAgBABgCQAEgHAHgEQADgCgCgFQAAgBAAgCQgDgHgDgHQgBgDAAgDQABgJADgIQAAgBAAgBQACgCABgCQAGgFAFgHQADgCAAgEQgBgDgBgCAAHhFQAGgIAAgKQgBgCAAgCQAAgFgEgBQgCABAAAAQgBAAAAgCQAAAAgBgBQABgDABgCQAFgFAFgEQABgBABgBQACgCABgCQAAgGgEgEQgDgDgEgCQgEgCgDgEQgBgCgBgCQAAgBgBgBQAAgIAEgGQABgCABgCQAAgBABgCQACgEADgFQABgBAAgCQADgGgEgGQgBAAAAgBQgBgBgBgBQgFgEgFgEAAPgoQgIgFgHgHQAAgBgBgDQAAgEAAgEQAAgBAAgBQAAgBgCgBQgFgCgDgFQgBgCgBgCQgBgFABgFQADgKAFgHQACgBAAgCQACgFgCgFQgBgDgCgBQgBgBgBgBQgDgEgDgEQgBgBAAgBQgBgFABgFQABgGADgFQAAgBABgCQAAgGgDgFQAAgBgBgBQgBAAgBgBQgDgCgFgBQAAAAgBgBQgEgCgCgEAABghQgBgCgCgDQgBgBgDgBQgCgBgCAAQgBgBgCgBQgCgCAAgDQAAgEABgEQABgDgBgDQgBgDgEgBQgDgBgBgBQgBAAgBgCQgCgDAAgEQABgCgBgCQAAgDgBgBQgBgCgCgCQAAgBAAgCQAAgDABgDQADgFADgGQABgBAAgBQAAgCgBgCQgCgFgEgEQgBgBgCgCQgEgEgCgFQgBgBAAgDQABgHADgFQABgBAAgBQABgBgBgBQAAgCgDgCQgCgBgCgCQgEgCgFAAQgDABgDAAQgCAAgBgDQgBgCAAgCQgBgBgBgCQgBgEABgFAhbiqQACAEACADQACAEADABQAEADAEACQAFADADAEQADAGAAAGIAAAAQgBAFAAAEQAAACAAADQAAADACACQADAEAFACQACAAABACQAFADADAFQABAEAAAFQAAABAAABQAAAFgBAEQAAABAAABQAAAGADAEQAAAAAAABQAAABAAABQADAHACAHQABADABACQABABABABQADABAAACQAAACAAABQABACACACQACABACAAQABAAABAAQABABAAAAQAEAEACAFAgyg3QAAgFgBgFQgBgDgCgEQgDgIAEgJQABgBAAgBQAAgBgBgBQAAAAgBgBQgDgBgDAAQgFAAgBgFQgBgBAAgCQAAgDAAgDQAAgBgBgCQAAgDgEgBQgBAAgCAAQgDAAgCgBQgCAAgDgBQgBAAgBgBQgFgFADgIQABgDAAgDQABgFgEgEQgEgGgHgCQgEgBgEgBAhDhFIAAABIAAABQAAgBAAgBQAAAAAAgBQAAgDAAgCQABgFgEgCQgDgBgCgDQgBgBgBgBQgCgDgBgDQAAgBAAgBQABgDgBgDQAAAAgBgBQgDgCgFAAQgFAAgFgBQgFgBgCgFQgBAAAAgBQgBgBAAgCQgBgCABgBQAAgEAAgEQAAgHgHgDQgDgBgCgCQgIgEgEgJAgVgGQABAAAAgBQABgDABgDQAAgCgBgBQgCgBgDgBQgBgBgDAAQgCAAgDgBQgGAAgFgCQgCgBgBgCQgBgCgBgDQgBgFABgEQAAgBABgCQABgCgDgBQgCgBgDgBQgCAAgCgBQgGgBAAgGQAAgCgCgDQAAgBgCgBQgDgBgCgBQgBgBgBgCQgBgEAAgFQgBgGgFAAQgCAAgDAAQgJAAgJgFQgCgBgBgBQgBgBgBgCQgBgCAAgDQgBgCgBgDQAAgGgEgEQgBgBgCgBQgGgCgGgCQgEAAgDgBAhGgGQAAgEgCgFQAAgCgCgCQgFgDgGABQgCABgDABQgDgJAAgIQAAgBgBAAQgBAAgCgBQgDABgEgBQgBAAgBgBQgCgDABgDQACgEABgEQABgBgBgBQgGgFgHACQgDAAgCACQgBABgCACQgBAAgCABQgFABgFgEQgDgDAAgFQAAgCgBgDQAAgDgBgCIgBAAQAAgBgBgBQgBgBgCAAQgEAAgDAAQgDABgEACQgCABgDACQgDACgFgBQgCAAgBgBQgCgBgCgCQgCgBgCgDQgHgHgJACQgDABgGACAglgCQgGgDgIgCQgEAAgDACQgJAEgIAHQgGAHgCAJQgDAIAEAIQAAAAAAAAQAAABAAAAQAFAIAGAGQAHAHAJACQAKACAJAAQAFAAACgEAglgCQABgGgDgCQgBAAgCgBQgHgCgIAAQgCAAgBgBQgBAAgBgBQAAgEAAgEQABgFgEgEQgBgBgBgBQgCgBgCgCQgDgCgDgBQgEgBgEgCQgBAAgCgBQgCAAAAgCQAAgDABgDQACgEgEgDQgBgBgCgCQgFgCgFgCQgCgBgCAAQgGAAgGgBQgCAAgBgDQgBgCABgCQABgCAAgCQADgGgEgDQgBgBgBAAQgBgBgCgBQgCgBgCAAQgCgBgDAAQgCABgCAAQgDABgDAAQgEAAgCgBQgCgBABgDQAAgCABgDQAAgCABgCQAAgCgBgCQAAAAgCgBQgBAAgCAAQgCABgCAAQgDAAgCgCQgDgCgCgDQgCgDgBgFACBACQgGgBgFgDQgFgEgDgEQgDgEgBABAhagTQgDACgDABQgDABgEgBQgGgCgCgFQgBgBAAgCQgBgGgGgBQgCAAgCAAQgFAAgFACQgCABgBAAQgCgBgBgBQgCAAgBgCQgEgDgBgEQgBgDgCgBQgBAAgCAAQgBABgCABQgBAAgBAAQgEABgEAAQgBAAgBgBQgDgDgDgEQgBAAAAgBQgBgBAAgBQgDgBgDABQgEABgEABQgBAAgBAAQgCgBgCgBQgCgBAAgEAhdAPQgDgBgDgDQgBgCgBgCQgBgDgDgDQgBgBgBgCQgBAAAAgBQgCgEgDACQgDABgEgBQgBAAgBAAQAAgCAAgCQgCgDgEAAQgCAAgDgCQgBAAgBgCQgCgDgCgDQAAAAgCgBQAAgBgBAAQgDABgDABQgDABgDAAQgCAAgCgBQgCAAgDgBQgGgBgFgCQgCgBgCgCQgBgBgBgDQgBgCAAgEQABgCgCgCQgCgBgBABQgHAEgHAEQgBABgBgBQgCgBgCgCQgCgDgCgCQgBgFgBgEAhQAAQACgCgBgDQAAgCgCgBQgBAAgBAAQgCAAgCABQgBABgCACQgBABgBAAQgDABgCgCAhfA8IAAgBQABgHgCgIQAAgCAAgCQAAAAgBgBQgCAAgBABQgBABgBABQgBAEgDAEQgBACgDgBQgCAAgCgBQgFgCgCgFQAAgEAAgEQABgFgCgEQgBAAAAgBQgBAAgBAAQgFAAgFADQgCABgCAAQgCAAgDgCQgBAAgBgBQAAgBgBgBQABgDAAgDQABgBAAgBQAAgDgCgBQgBAAgBgBQgCgDgCgBQgGgEgHABQgCABgCABQgDABgCAEQAAACgBABQgCADgEACQgCAAgCAAAiNBpIAAAAQgBAAgBAAQgBAAADgBQgBAAAAABAhvBoQAGgDACgFQAGgJAAgKQAAgEABgFQAAgDAAgDAi+ARQgBgBgCgCAiyByQAPgEAWgGABdCNQgDgFgJgFQgIgFgJgEQgIgEgIgGQAAAAgBgBQABABAAAAQAGAIAFAIQAGAIAFAIQADAEADADQgFAIgIAFQgJAFgKABQgKAAgJgBQgKgBgLAAQgIAAgJgCQgKgBgJgFQgEgDgEgDQgCgDgCgEQgEgGgCgIABOBeQgBgBgBAAQgKgDgGgHQgKgEgHAKQgEAHACAGQAEAGACADAglgCQACACACAAQAEADABADQACAFgDAEAghAfQgCgKgJgFQgLgFgBAKQgBAHAFAGAABDZIAAAAAAEDDQgEgGgGgIAB5BqQgGAGgGAHQgHAHgFAJQgCAFgCABQALAGgIAJQgEAGgIgEQgEgDgEgE");
	this.shape_2.setTransform(15.7,-27.3,0.732,0.732);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("ADDipQgPgKgPgKQAAAAAAgBQgRgZgcgLQgcgMgbgCQgPgBgLgCQgPgEgQgDQgegGgVARQgEADgGgCQgjgMgGAjQgCAPgOACQgOABgMAIQgBAgghgBQgPAAgIANQgLAUABAbQgWABgGATQgDAIADAJQAFAVAPAPQgJAUAFAXQADASALAPQAMAQAPACQACABACACQADADACAEQACADAFAAQAIgBAIABQAEAAAAADQAAAAAAABQAFAIAIABQAFAAAEACQABAAABAAQAAAAABABQABAAABABQADAFAFgBQABAAAAAAQADgCADgBQAAgBABAAQACABACAAQABgBABABQACACAAACADPiiQgCAAgCAAQgBAAAAgBQgDgDgEgDQAGAEAGADQAFACAEAEQABABABABQgBgBgBgBQgFgDgEgDgADniAQgCgCgCgDQgGgKgDgJQAAgBAAgBQAJAMAEAOgACaACQAOgKAOgOQAIgJAIgJIAAAAQALgNAKgRQAEgHAFgHQAFgKAAgOQABgLgDgJACYgfQgBABAAAAQgBABAAAAQAAABAAABQAAABAAABQAAABAAABQAAAAAAABQAAAAAAABQAAABAAACQAAAAAAABQACABgBACQgCABgDACQgDABgCgEQgBgBAAAAQgBgDgCAAQgBAAAAgBQgBgBgCABQgDABgCABQgBABAAgBQgDgCgEACQgBgCgDgBQgCgBgDAAQgBAAgBABQgFACgEAAQgDgBgDABQgBAAgBAAQgBAAAAAAQgIAAgGADQgFABgFAEQgEACgDABQgDAAgDABQgBABgCAAQgBAAgBABQgHAEgHAFQgBABgBAAQgBAAgBAAQgCAAgBAAQgCgBgBAAQgGgBgEAEQgCACgCABQgFACgFAFQgBAAAAABQAAACgBADQAAABAAAAQABAFgEACQgCABgCgBQgBgBgCgCQgBAAgBgBQgBgBgBACQgBAIgCAFABrijQABgDgCgCIAAAAIAAAAQADgMABgEQAIgegmgBABWi0QgJgXgSALQACgYgTgOAAIimQgDgJgFgLQgSAKgFgYQgDgMgNgGAgViTQgRgGgIgUQgbgLgHgaAA5ivQgTgDgLgYQgfgLgJgYAg1iTQgKgYgdADQgIAAgBgFQgBgFAEgGAh6h1QgfAIgMgUAhlh5QgOgXgVgCAiAihQAXgDAYAeAjJgrQABgQAAgVAi4AyQgMgHgBgOQAAgHgDgFAiDhTQAAgEgMgEQgfgKgCgbAhWBiQAAgBAAAAQAAgBAAAAQAAgCADgBQAFgDABgFQABgFADgFQAAgBAAAAAiFCNIABAAAiECNIAfgBAiwA2QgCAAgBgBQgBAAAAAAAgeC+QgDAJgCAKQAOACAPAHQAFACAFACIgBgFQADAEACADQgCgBgCgBIAGAfAARDrIAAAAAADDZQADADADAEQACADADADQAAABABABQABACABABIAAAAIAAAAIAAAAAAIDgQAFAGACADQABABABABAgjDRQgCAJgCAJACYirQgNgRgRgS");
	this.shape_3.setTransform(15,-29.9,0.732,0.732);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("ABLA/QgRgFgDgLIgHgeIAEABIAIAJIABACIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAbAjQABABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgNgDgAAwARIgBgGIAFAHIgEgBgAhYhAIAAgBIABABg");
	this.shape_4.setTransform(11.8,-14.9,0.732,0.732);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKBEIgRgKQgIgEgHgFIgBgBIgHgJQgCgGAFgIQAHgJAJADQAHAIAKADIABAAQADADADABIASAFIATAEIgNAMQgGAIgFAJIgEAGQgDgFgJgFgAAVgoQgFgJgCgJQgDgKAEgJQAAAAAAAAQABAAAAABQAAAAABABQABAAAAABQADAFAGAEQAFADAFACQgEALAJAFQAEACAFAAIAAABQgGAJgKAAIgBABQgIAAgFgJg");
	this.shape_5.setTransform(22.4,-22.6,0.732,0.732);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9A67").s().p("ABTBfIgIgHIgFgHIgLgQIgMgQIAAAAQAIAGAIAEIARAJQAJAFAEAFQAKAGgHAJQgDAEgEAAQgDAAgDgCgAB5AsIAAAAIgTgFIgTgFQgDgBgDgCIABAAQAEgCAEABQAKABAJgBIATgCIASgBQAAAGACAIIABAEIgIACQgJAAgHgDgAiOApIgBABIgBAAIACgBgACHg7IgHgBQgFgBgFgEQgGgEgDgEQgBgBAAgBQgBAAAAgBQgBAAAAAAQAAAAAAAAQABgMAHgHQAEgCADADQAIAGAEAIIAKARIABADIgBABIgGABIgCgBg");
	this.shape_6.setTransform(15.8,-22.7,0.732,0.732);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAHQgJgGAEgJIAHABQADAAAEgBIACAGQABAFgEAGQgFAAgDgCg");
	this.shape_7.setTransform(25.7,-26.4,0.732,0.732);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CE9F6E").s().p("AglB8QgqgVhlhGIAlgJIgCABIACAAIgCAAIABgBIABAAIgBAAIABAAIAAAAIAAABIAfgBQAFgEADgEQAFgJAAgJIABgJIABgGIAAgBIAAgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAFgEABgEIAEgLIAAAAIABABQAEAHAGAHQAHAGAJADIABAAIABAAIAMABIABAAIAAAAIAEAAIABAAIAAAAQAEAAACgCIAAgBIAAABQgCACgEAAIAAAAIgBAAIgEAAIAAAAIgBAAIgMgBIgBAAIgBAAQgJgDgHgGQgGgHgEgHIgBgBIAAgBQgEgHADgJQADgIAGgHQAHgIAJgEQAEgDAEABQAHABAGAEIAFADQAEADABADIADgNQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAABIACABIADADIAEAAQAEgCgBgFIAAgBIACgFIABgBQAFgFAEgCIAEgDQAEgFAGACIADABIADAAIACgBIACAAIAOgKIACgBIADgBIAGgBIAHgDQAFgEAFgCQAGgCAIAAIABAAIACAAIAGgBQAEAAAFgCIACAAIAFAAQADACABACQAEgCADACIABAAIAFgCQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAAAIABABQABgBAAABQAAAAABAAQAAABABAAQAAABAAABIABAAQACAFADgCIAFgDQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIAAgBIAAgDIADANIABAMIAAAIQgBAKACAJQABAEACADQADAEAFADQAGADAHgBQALAAACAMQABAKgGAHQgCADgDACIgKAGQABAJgCAKIgDANQgDAJgFAHIgGAGQgCgIAAgHIgSABIgTACQgJABgKgBQgEAAgEABIgBAAIgBAAQgLgEgGgHQgJgCgHAIQgFAHACAHIAHAJIAAABIAMAQIALAQIAFAHQgFAHgIAGQgJAFgKAAIgTAAIgUgCQgJAAgJgBQgKgCgIgFIgIgFIgFgHQgEgHgCgHQACAHAEAHIAFAHIgFATQAOACAPAHIALAEIAGAfIAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAQgGAAgegPgAgyBvIAEgSIgEASgAg1guQgEgEAAgGIAAgCQAAgHAFAAIAAAAIACAAIADABIABABQAJAEACALQgCgLgJgEIgBgBIgDgBIgCAAIAAAAQgFAAAAAHIAAACQAAAGAEAEgABxhwQgHAHgBALQgEAJACAKQACAJAGAJQAFAJAJgBQAKAAAGgJIAAgBQAEgGgBgGIgBgGIABAAIADgCIgDACIgBAAIgBgEIgKgQQgEgJgIgFQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgDABgAgehAQACgDAAgDIgBgDIABADQAAADgCADgAAGB2IgCgBIAAgBIACADgAgHBlIAGAHIAEAGIgKgNgAiPAYIAAAAg");
	this.shape_8.setTransform(15.8,-21.4,0.732,0.732);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhZCuIgCAAIgEAAIgBAAIgGADIgBAAQgFABgDgFIgCgBIgBAAIgCAAIgJgDQgIgBgFgHIAAgCQAAAAAAgBQgBAAAAgBQgBAAAAgBQgBAAgBAAQgIgBgIABQgFABgCgEIgFgGIgEgDQgPgDgMgQQgLgOgDgTQgFgXAJgUQgPgPgFgWQgDgJADgGQAGgUAWAAQgBgcALgTQAIgOAPABQAhAAABgfQAMgIAOgCQAOgCACgOQAGgkAjANQAGABAEgCQAVgSAeAGIAfAHQALADAPABQAbABAcAMQAcALARAaIAAABIAeAUIAHAGIABAAIAEABIAJAGIACACIAAABQADAKAGAKIAEAEQADAKgBALQAAAOgFAJIgJAOIgGgDIAAAAIgBAAIgBAAIAAAAIgGACIgBAAIgBAAIgEAEIgCAEQgEAJgKADIgBABIgCAAIgCABIAAAAIgBAAIgKgCIAKACIABAAIAAAAIACgBIACAAIABgBQAKgDAEgJIACgEIAEgEIABAAIABAAIAGgCIAAAAIABAAIABAAIAAAAIAGADQgKAQgLANIAAABIAAgBIAAgDIgCgBIgBgBIgBAAIgBAAIAAAAIgEABIAEgBIAAAAIABAAIABAAIABABIACABIAAADIAAABIgQARQgCgFgEgEIgDgCIgCAAIgJAGIgGACIAAAAIAAAAIgBAAIgCgDIgBgCIAAAAIgDgEQgDgCgDgBIgDgBIAAAAIgBABIgCAAIAAAAQgDACgCADIgCAHIACgHQACgDADgCIAAAAIACAAIABgBIAAAAIADABQADABADACIADAEIAAAAIgBABIgBABIAAAAIAAABQgBADABADIAAAAIAAADIAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIgFADQgDACgCgFIgBgBQAAgBAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgFADIgBAAQgDgCgEACQgBgDgDgBIgFAAIgCAAQgFACgEAAIgGABIgCgBIgBAAQgIABgGACQgFACgFAEIgHADIgGABIgDABIgCAAIgOALIgCAAIgCABIgDgBIgDAAQgGgCgEAFIgEADQgFACgFAEIgBACIgBAFIAAABQABAEgEACIgEABIgDgDIAAgBIACgHIAAgBIgBgCIgEgCIgEgBIgGgBIAAAAIgBAAIAAAAIAAAAIgBAAIgHgBIgBgBIgDgDIgDgFIAAgEIAAgEIABgEIAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgEgCIgFgBQgFgCgBgFIAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgCgBIgGgDIgBgCIgCgIIAAgCQAAgFgFgBIgFAAIgBAAIgBAAQgJAAgHgEIgEgDIgCgDIgBgEIgBgGQgBgGgDgCIgEgCIgLgFIgIgBIAIABIALAFIAEACQADACABAGIABAGIABAEIACADIAEADQAHAEAJAAIABAAIABAAIAFAAQAFABAAAFIAAACIACAIIABACIAGADIACABQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABIAAABQABAFAFACIAFABIAEACQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAABIgBAEIAAAEIAAAEIADAFIADADIABABIAHABIABAAIAAAAIAAAAIABAAIAAAAIAGABIAEABIAEACIABACIAAABIgCAHIAAABIgCgCQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABIgDANQgCgEgDgCIgFgDIAAgEQAAgEgCgBIgDAAQgHgDgIAAIAAAAIAAAAIgDgBIAAAAIAAAAIAAAAIgBgBIAAAAIgBgIIAAgCQAAgEgDgDIgCgCIgEgDIgFgCIgIgDIgDgCQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAAAIABgFIAAgDQAAgDgCgCIgEgCIgKgFIgEAAIgLgBQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAIAAgCIABgCIABgFIABgEQAAgDgDgCIgBgBIgDgBIgEgCIgEAAIgBAAIAAAAIgBAAIgDABIgCAAIgDAAIAAAAIgCAAIgCAAIAAAAIgDAAIgBgBIgBgCIAAgBIACgFIAAgEIAAgEIgCgBIgCAAIAAAAIAAAAIgCAAIAAAAIgBAAIgBAAIgBAAIAAAAIgBAAIAAAAIAAAAIgCAAIgCAAIgBAAQgDgCgCgDQgCgEAAgEQAAAEACAEQACADADACIABAAIACAAIACAAIAAAAIAAAAIABAAIAAAAIABAAIABAAIABAAIAAAAIACAAIAAAAIAAAAIACAAIACABIAAAEIAAAEIgCAFIAAABIABACIABABIADAAIAAAAIACAAIACAAIAAAAIADAAIACAAIADgBIABAAIAAAAIABAAIAEAAIAEACIADABIABABQADACAAADIgBAEIgBAFIgBACIAAACQAAAAABABQAAAAABABQAAAAABAAQAAAAABABIALABIAEAAIAKAFIAEACQACACAAADIAAADIgBAFIAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIADACIAIADIAFACIAEADIACACQADADAAAEIAAACIABAIIAAAAIABABIAAAAIAAAAIAAAAIADABIAAAAIAAAAQAIAAAHADIADAAQACABAAAEIAAAEQgGgEgHgBQgEgBgEADQgJAEgHAIQgGAGgDAJQgDAIAEAIIAAABIgEALQgBAEgFAEQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIAAgBIABgHIgBgJIAAgDIgCgBIAAAAIgBAAIAAgBIgCABIgCACIgDAIIgBAAIAAAAIAAABIgCAAIgBAAIAAAAIgFgBQgFgCgBgFIgBgDIABgEIAAgDQAAgDgCgDIgBgCIgBAAQgFABgFACIgCABIgBAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIgEgBIgCgBIgBgDIABgGIAAgBIAAgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgDgCIgDgEIgBAAIgBgBQgEgCgEAAIAAAAIAAAAIgCAAIgBAAIgFACQgDACgBADIgBADQgCAEgEABIgCAAIgCAAIgDgCIgBAAIgEgCQgMgIgBgNQAAgHgDgGQADAGAAAHQABANAMAIIAEACIABAAIADACIACAAIACAAQAEgBACgEIABgDQABgDADgCIAFgCIABAAIACAAIAAAAIAAAAQAEAAAEACIABABIABAAIADAEIADACQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAACIAAABIgBAGIABADIACABIAEABIAAAAIABAAIAAAAIAAAAIAAAAIABAAIABAAIACgBQAFgCAFgBIABAAIABACQACADAAADIAAADIgBAEIABADQABAFAFACIAFABIAAAAIABAAIACAAIAAgBIAAAAIABAAIADgIIACgCIACgBIAAABIABAAIAAAAIACABIAAADIABAJIgBAHIAAABIAAAAIAAACIgBAFQAAAAAAgBQAAAAAAAAQgBgBAAgBQgBAAAAgBgAhjBqIABACIADADIADAGQABADACACQACACADABQgDgBgCgCQgCgCgBgDIgDgGIgDgDIgBgCIAAgBIgCgCIgBAAIgBAAIgBABIgCABIgDAAIAAAAIAAAAIgBAAIgBAAIgBgBIgBgDQgCgDgDgBIgFgBQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIgDgFIgCgCIgBAAIgGABIgBAAIgFABIAAAAIgBAAIAAAAIAAAAIgBAAIgDAAIgFgCIgKgDQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAIgDgEIAAgGIAAAAIAAgBIgCgEIgBgBIAAAAIgBAAIgBABIgNAIIgCAAIgFgDIgDgFIgDgJIADAJIADAFIAFADIACAAIANgIIABgBIABAAIAAAAIABABIACAEIAAABIAAAAIAAAGIADAEQAAAAAAAAQABABAAAAQABABAAAAQABAAABAAIAKADIAFACIADAAIABAAIAAAAIAAAAIABAAIAAAAIAFgBIABAAIAGgBIABAAIACACIADAFQAAAAABABQAAAAAAABQAAAAABAAQAAAAABABIAFABQADABACADIABADIABABIABAAIABAAIAAAAIAAAAIADAAIACgBIABgBIABAAIABAAIACACIAAABgAhGBuIABgEIAAgCIgDgCIAAAAIAAgBIgBAAIgBAAIAAAAIgDABIgEADIgCACIAAAAIgBAAIAAAAIgEgBIAEABIAAAAIABAAIAAAAIACgCIAEgDIADgBIAAAAIABAAIABAAIAAABIAAAAIADACIAAACIgBAEgAhBBbIADADIABAKIgBgKIgDgDIAAgBIgBAAIAAgBIgGgBIAAAAIAAAAIgDABIgGACIAGgCIADgBIAAAAIAAAAIAGABIAAABIABAAIAAABgAhtBNQAFABABAFIABADQADAFAGACIADABIAEgBIAFgCIgFACIgEABIgDgBQgGgCgDgFIgBgDQgBgFgFgBIgEgBIgBAAIAAAAIAAAAQgFAAgEADIgBAAIAAAAIgBAAIgBAAIAAAAIgBAAIAAAAIgCgBIgEgCQgEgDAAgFQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBAAgBAAIgCAAIgDABIgDABIgCAAIgEAAIAAAAIgCAAIAAAAIAAAAIAAAAIgBAAIgBgBIAAAAIgFgGIgCgCIgBgBIAAAAIgBgBIgBAAIgBAAIAAAAIAAAAIgBAAIAAAAIgCABIgIABIAAAAIgBAAIgBAAIgDgBQgCgCgBgDQABADACACIADABIABAAIABAAIAAAAIAIgBIACgBIAAAAIABAAIAAAAIAAAAIABAAIABAAIABABIAAAAIABABIACACIAFAGIAAAAIABABIABAAIAAAAIAAAAIAAAAIACAAIAAAAIAEAAIACAAIADgBIADgBIACAAQABAAABAAQAAAAAAABQABAAAAABQAAABABAAQAAAFAEADIAEACIACABIAAAAIABAAIAAAAIABAAIABAAIAAAAIABAAQAEgDAFAAIAAAAIAAAAIABAAIAEABgAhRBbQgCgJAAgHIAAgCIgBAAIgDgBQgDAAgEAAIgBAAIgBgBIAAAAIgCgEIABgDIADgHIAAgCIgBgBQgEgEgFAAIAAAAIAAAAIgBAAIgBAAIgBABIgBAAIgEADIgDACIgDABIgCAAIgBAAIAAAAIAAAAIgFgBIgBAAIgBgBIAAAAIAAAAQgDgEgBgEIgBgFIgBgGIAAAAIgCgCIgDgBIAAAAIAAAAIgBAAIgFABIgHACIgFADIgEACIgBAAIAAAAIgDgBIgEgBIgEgCIgDgEIgBgBIgBAAQgEgFgHAAIAAAAIAAAAIgDAAIAAABQgDAAgGADIABgZIAAgLIAAALIgBAZQAGgDADAAIAAgBIADAAIAAAAIAAAAQAHAAAEAFIABAAIABABIADAEIAEACIAEABIADABIAAAAIABAAIAEgCIAFgDIAHgCIAFgBIABAAIAAAAIAAAAIADABIACACIAAAAIABAGIABAFQABAEADAEIAAAAIAAAAIABABIABAAIAFABIAAAAIAAAAIABAAIACAAIADgBIADgCIAEgDIABAAIABgBIABAAIABAAIAAAAIAAAAQAFAAAEAEIABABIAAACIgDAHIgBADIACAEIAAAAIABABIABAAQAEAAADAAIADABIABAAIAAACQAAAHACAJgAgKBNIACABIAFAJIgFgJIgCgBIgCAAIAAAAIgBAAIAAAAIgBAAIgBgBIAAAAIAAAAIgEgEIAAgCIAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgCgBQgCgDgBgDQgBgHgDgGIgBgDIAAAAIAAgBQgDgEAAgFIAAgBIAAgCIABgHIAAgBIAAgDIAAgDIgBgFQgDgGgEgDIgDgCQgFgBgEgEQgCgCAAgDIAAAAIAAgEIABgJIAAgBIAAgBQAAgGgDgEQgDgFgEgDIgJgEQgDgCgCgDQgCgDgBgFIgBgBIgBgBQgVgZgTAAIgBAAIAAAAIgEAAIAEAAIAAAAIABAAQATAAAVAZIABABIABABQABAFACADQACADADACIAJAEQAEADADAFQADAEAAAGIAAABIAAABIgBAJIAAAEIAAAAQAAADACACQAEAEAFABIADACQAEADADAGIABAFIAAADIAAADIAAABIgBAHIAAACIAAABQAAAFADAEIAAABIAAAAIABADQADAGABAHQABADACADIACABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAIAAABIAAACIAEAEIAAAAIAAAAIABABIABAAIAAAAIABAAIAAAAIACAAgAgGA+QABADACABIACACIADABIAFACIADAGIgDgGIgFgCIgDgBIgCgCQgCgBgBgDIAAgCIABgGIABgDIgBgDQgBgEgEgBIgEgCIgCgBQgBgDAAgDIAAgBIAAgDIAAgCIgBgEIgDgEIgBgCIAAgCIABgFIAGgKIABgCIAAgBIAAgDQgDgFgDgDIgDgDQgFgFgCgFIAAgEQAAgGAEgGIAAgBIABgCIAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBIgEgCQgEgCgDAAIgBAAIAAAAIAAAAIgCAAIgFAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIgCgDIgBgEIgBgFIABgDIgBgBIAAgBQgJgUgYAAIgBAAIAAAAIgEAAIgBAAIAAAAIgBAAQgFAAgCgEIAAgBIAAgCQAAgEADgEQgDAEAAAEIAAACIAAABQACAEAFAAIABAAIAAAAIABAAIAEAAIAAAAIABAAQAYAAAJAUIAAABIABABIgBADIABAFIABAEIACADQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAFAAIACAAIAAAAIAAAAIABAAQADAAAEACIAEACQABABAAAAQABABAAAAQAAAAABABQAAAAAAABIAAABIgBACIAAABQgEAGAAAGIAAAEQACAFAFAFIADADQADADADAFIAAADIAAABIgBACIgGAKIgBAFIAAACIABACIADAEIABAEIAAACIAAADIAAABQAAADABADIACABIAEACQAEABABAEIABADIgBADIgBAGIAAACgAAIA2QAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAGAGAJAFQgJgFgGgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgBgFIABgEIAAgBIAAAAIgCgCQgGgDgBgFIgDgDIAAgGIAAgFQADgJAFgIIACgDIABgEIgBgFQgBgDgDgBIgBgCIgFgHIgCgDIAAgEIAAgGIAEgLIABgDIAAgBQAAgGgDgEIgBgBIgBgCQgEgCgEAAIgBgBQgEgDgCgEQACAEAEADIABABQAEAAAEACIABACIABABQADAEAAAGIAAABIgBADIgEALIAAAGIAAAEIACADIAFAHIABACQADABABADIABAFIgBAEIgCADQgFAIgDAJIAAAFIAAAGIADADQABAFAGADIACACIAAAAIAAABIgBAEIABAFgAAeA0IABACQAFAGAGAFQgGgFgFgGIgBgCIAAgBIAAgBIAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIAEgCQAFgCAFgFIABgCIgBgFIgDgEIgIgLIgBgCIgBgFQAAgFAFgEIADgDIAFgFIABgCQgBgHgFgEIgFgEIgBgDIAAgBQAAgEADgCIACgBIAAAAIABAAIACgBIABgBIABgDIAAgCQAAgDgCgDIgDgCIgDgCIgCgDIABgCIABgBQADgGAFgFIADgDIACgCIACgDIgBgDIgDgGIAAgDQAAgDADgDQADgDADgBQgTgEgLgXQgfgLgJgZQAJAZAfALQALAXATAEQgDABgDADQgDADAAADIAAADIADAGIABADIgCADIgCACIgDADQgFAFgDAGIgBABIgBACIACADIADACIADACQACADAAADIAAACIgBADIgBABIgCABIgBAAIAAAAIgCABQgDACAAAEIAAABIABADIAFAEQAFAEABAHIgBACIgFAFIgDADQgFAEAAAFIABAFIABACIAIALIADAEIABAFIgBACQgFAFgFACIgEACQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIAAABIAAABIAAABgAA5AmIACAFQADAGAAAHQAAgHgDgGIgCgFIgBgEIAAAAIABAAQAFAAAEACIACABIABAAIAAAAIAAAAIACgCIAAgBIAAgCIgBgDIgCgDIgEgGIgBgCQAAgDADgBIAEgCIACAAIABAAIADgBIAAAAIADABIAAgBQAAgCgDgCIgJgIIgDgCQgDgDgBgEIAAgDIAAgDIABgDQAEgHAHgDQACgCAAgDIAAgCIgBgDIgGgPIgBgFIAAgBQACgJACgIIABgCIADgEQAGgFAFgGQACgDAAgDIAAAAIgBgGIgBgBQgFgOgKAAIAAAAIAAAAQgFAAgGADIAAABIAAgGQAAgVgRgLQARALAAAVIAAAGIAAgBQAGgDAFAAIAAAAIAAAAQAKAAAFAOIABABIABAGIAAAAQAAADgCADQgFAGgGAFIgDAEIgBACQgCAIgCAJIAAABIABAFIAGAPIABADIAAACQAAADgCACQgHADgEAHIgBADIAAADIAAADQABAEADADIADACIAJAIQADACAAACIAAABIgDgBIAAAAIgDABIgBAAIgCAAIgEACQgDABAAADIABACIAEAGIACADIABADIAAACIAAABIgCACIAAAAIAAAAIgBAAIgCgBQgEgCgFAAIgBAAIAAAAIABAEgAgsAmIACAGIABAKIgBgKIgCgGQgCgEAAgEQAAgFACgEIABgDIAAgBIAAAAIgCgBIgGgCQgEAAgCgFIgBgCIABgDIgBgDIAAgBIAAgBQgBgDgDgBIgBgBIgBAAIgBAAIAAAAIgBAAIgEAAIgFgBIAAAAIgCgBIAAAAIAAgBQgEgDAAgFIABgEIACgHIAAgBQAAgEgEgEQgEgFgGgCIgJgCIAJACQAGACAEAFQAEAEAAAEIAAABIgCAHIgBAEQAAAFAEADIAAABIAAAAIACABIAAAAIAFABIAEAAIABAAIAAAAIABAAIABAAIABABQADABABADIAAABIAAABIABADIgBADIABACQACAFAEAAIAGACIACABIAAAAIAAABIgBADQgCAEAAAFQAAAEACAEgABRAoIADAKIgDgKIAAgEQAAgFACgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAEgDIAFgBIADgDIACgCIAAgCIgBgDIgCgEIgEgDIgDgDIgBgBIAAAAQABgKAGgIIACgEIABgCIAAgCIgBgCIgBgCQgCgCgBgDIAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAEgDAGgBQAFgBAEgEIABgCIABgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgFgCIgDAAIAAAAIgBAAIAAgBIAAAAIAAgBIAAgDQACgFAFgDQAEgCADgDIAAgBIgBgCIgEgCIgFgBIgEgCIAAgCIAAgCIACgCIABgBIAAgBIAAAAIAAAAIAAABIgBABIgCACIAAACIAAACIAEACIAFABIAEACIABACIAAABQgDADgEACQgFADgCAFIAAADIAAABIAAAAIAAABIABAAIAAAAIADAAIAFACQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAIgBACIgBACQgEAEgFABQgGABgEADQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIAAAAQABADACACIABACIABACIAAACIgBACIgCAEQgGAIgBAKIAAAAIABABIADADIAEADIACAEIABADIAAACIgCACIgDADIgFABIgEADQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQgCAEAAAFIAAAEgAB4ApQAAAEAEADQgEgDAAgEIAAgFIAAgCIACgGIAEgDIAEgCIABAAIABABIAEACIADADIABABIABAAIAAAAIABAAIABAAIAAAAQAHgEADgGIABgEIAAgDIgBgEIAAgBIAAAAIABgBIAEgCIAHgDIAEgBQADAAACgBIAGgQIAEgLIAKgSIAEgHIADAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIABAAIABAAQACgDAAgDIAAgBIgBgEQgEgGgFgEQAFAEAEAGIABAEIAAABQAAADgCADIgBAAIgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgDAAIgEAHIgKASIgEALIgGAQQgCABgDAAIgEABIgHADIgEACIgBABIAAAAIAAABIABAEIAAADIgBAEQgDAGgHAEIAAAAIgBAAIgBAAIAAAAIgBAAIgBgBIgDgDIgEgCIgBgBIgBAAIgEACIgEADIgCAGIAAACIAAAFgAg6ApIABABIAAAAIgBgBIAAgBIAAAAIAAgCIABgEIAAgBQAAgEgDgBQgDgCgCgCIgCgDQgDgCAAgDIAAgBIAAgBIAAgEIAAgCIgBgCIgCgBIgCAAIAAAAIgCgBIgBAAIAAAAIgBAAIAAAAIgLgBQgFgBgCgDIgBgCIgBgDIAAgBIAAgCIAAgEIAAgEQAAgHgHgDIgFgCQgIgFgDgJQADAJAIAFIAFACQAHADAAAHIAAAEIAAAEIAAACIAAABIABADIABACQACADAFABIALABIAAAAIABAAIAAAAIABAAIACABIAAAAIACAAIACABIABACIAAACIAAAEIAAABIAAABQAAADADACIACADQACACADACQADABAAAEIAAABIgBAEIAAACIAAAAIAAABIAAAAgAAQAoQAGgHAAgKIAAgBIAAgEQgBgFgEAAIgCAAIAAAAIgBgBIAAgCIACgFIAJgIIADgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgBQAAgFgEgDIgHgGQgEgCgCgEIgCgDIgBgDIAAgCQAAgHADgFIACgEIABgDIAFgIIACgEIABgEQAAgEgDgDIgBgCIgBgBIgLgIIgIgVIAAAAIAAABIAAAAQgFACgEAAIAAAAIAAAAQgKAAgEgPIAAgCQgDgLgNgHQANAHADALIAAACQAEAPAKAAIAAAAIAAAAQAEAAAFgCIAAAAIAAgBIAAAAIAIAVIALAIIABABIABACQADADAAAEIgBAEIgCAEIgFAIIgBADIgCAEQgDAFAAAHIAAACIABADIACADQACAEAEACIAHAGQAEADAAAFIAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgDACIgJAIIgCAFIAAACIABABIAAAAIACAAQAEAAABAFIAAAEIAAABQAAAKgGAHgABmAmIAAgCQAAgJACgHIAFgLQADgEAAgFIAAgBIAAgBIgBAAIAAgBIAEAAIADAAIAAAAIAAAAIAFAAIAFgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIACgDIAAgEIAAgEIgCgFIgBgDIgBgDQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIAAAAIAFgCIABAAIAAAAIAFABIAAAAIAAAAIABABIAEABIAAAAIABAAIAAAAIABAAIABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIABgDIAAAAIAAgBIgBgDIgBgEIgBgCIABgCIADgCIADgBIABAAIAAAAIAEABIAEACIABABIABAAIACAAQAHgDAAgHQAAgIADgGQgDAGAAAIQAAAHgHADIgCAAIgBAAIgBgBIgEgCIgEgBIAAAAIgBAAIgDABIgDACIgBACIABACIABAEIABADIAAABIAAAAIgBADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgBAAIgBAAIAAAAIgBAAIAAAAIgEgBIgBgBIAAAAIAAAAIgFgBIAAAAIgBAAIgFACIAAAAQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIABADIABADIACAFIAAAEIAAAEIgCADQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgFABIgFAAIAAAAIAAAAIgDAAIgEAAIgBgBIABACIABAAIAAABIAAABQAAAFgDAEIgFALQgCAHAAAJIAAACgABxAkIgBgFIABgDQAAgFACgEQACgCADgCIAFgCIACAAIACgBQADgFABgFIABgDQABgHAGgBIACAAIABAAIAAAAIAAAAIADAAIAEABIADAAQAIgBADgGIACgFIgBgDIgDgKIAAgBIABgBIADAAIAJAAIADgBQADgDAAgEIAAgCIgBgCIgCgDIABgBQAEgCAEgBIABAAIAAAAIABAAIABABIAHAAIAAABIAAgBIgHAAIgBgBIgBAAIAAAAIgBAAQgEABgEACIgBABIACADIABACIAAACQAAAEgDADIgDABIgJAAIgDAAIgBABIAAABIADAKIABADIgCAFQgDAGgIABIgDAAIgEgBIgDAAIAAAAIAAAAIgBAAIgCAAQgGABgBAHIgBADQgBAFgDAFIgCABIgCAAIgFACQgDACgCACQgCAEAAAFIgBADIABAFgACpAMQgBADgDACIgGADIAGgDQADgCABgDIAAgDIAEAAIABAAIABABIAAAAIABAAIABAAIAAAAIAAAAIABgBIABAAIAAAAIABgBIAAAAQAFgDACgFIAAgCIgBgGIABAAIAAAAIABAAIAFAAQAHgBAAgGIAAgBIAAgCIgBgEQAAgGAEgEIABgBIAFABIABAAIAAAAIACAAIACgBIAAgBQAEgBAEgEQgEAEgEABIAAABIgCABIgCAAIAAAAIgBAAIgFgBIgBABQgEAEAAAGIABAEIAAACIAAABQAAAGgHABIgFAAIgBAAIAAAAIgBAAIABAGIAAACQgCAFgFADIAAAAIgBABIAAAAIgBAAIgBABIAAAAIAAAAIgBAAIgBAAIAAAAIgBgBIgBAAIgEAAIAAADgAiPgQQAMADAAAEQAAgEgMgDQgfgLgCgaQACAaAfALgAB8grQgCAEgEADIgGAEIAGgEQAEgDACgEIABgEIAAgEIAAgBIAAgBQABgDADgBIAHgCIAGgDIABgCIAAAAIAAAAIgBgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgDQACgEAFgBIAEgDQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAIABgEQAAgFgCgFQgNgRgRgRQARARANARQACAFAAAFIgBAEQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgEADQgFABgCAEIAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIABACIAAAAIAAAAIgBACIgGADIgHACQgDABgBADIAAABIAAABIAAAEIgBAEgAiKgoQAHAAAJgDQgJADgHAAIgBAAIAAAAQgRAAgIgOIgBAAIABAAQAIAOARAAIAAAAIABAAgAhlguQgOgXgVgDQAVADAOAXgAguhjQAIAVARAFQgRgFgIgVQgbgKgHgbQAHAbAbAKgABrhZIAAgCIgBgDIAAAAIAEgQIACgJQAAgVgggBQAgABAAAVIgCAJIgEAQIAAABIAAgBIABADIAAACgACZBBIgDgNIAAAAIAAgCIAAgCIAAgCIAAgBIAAAAIABgBIABgBIABACIACADIABAAIAAAAIAAAAIAGgCIAJgGIACAAIADACQAEAEACAFQgOAPgOALIgBgMgACYArgADbAEIAAAAgABvgCIAAAAgAg1hIIAAAAgAA5hkIAAAAg");
	this.shape_9.setTransform(15,-35.3,0.732,0.732);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("ABSjJQARAiAaAUQAZAVAdAJIAgAPQAQAiAEAVQAHAhALAjQAMAmgcAgQgYAaglACAAOCVQAJACAJADAAOCVQgXgHgYgIQhKgahXgbAj7C3QBXAqBOg0QAzgiAxAK");
	this.shape_10.setTransform(2.7,-2.7,0.732,0.732);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.1,1,1).p("AAbByQgcgNgbgcQgZgbACgpQACgnAXghQAWggAfgPQAUgBAWgCQAOgBAPgCQAngGAkgHQATgEATgCQATgCATAAQAfgBAdAFQAfAFAfACQApACAdAZQAfAagGAqQgGAlgVAhQgVAhgVAaQgHAJgIAIQgEAHgEAHQgPAWgWAQQgUAPgUARQgKAIgJAJQgbAZgaAZQgYAYgZAYQgLALgKAKQgHgEgGgEAA+mpQATAWAKAdQACAHACAIQAJAogIAjQAuAEA2gJQAOgDAPACQAKgIgDgaQgBgRgGgQQgBgCgIgeAidj4QABADAAADQAAAJAAAKQgFgHADgMQAAgDABgDQAMAGASAEQAjAJApgFQAmgFAZgWQAdgZAJghQACgIABgHQAFghgYgcAgWCNIgBAAQgjALgpgDQgogCgbgUQgdgVgTgfQgTghgGgjQgGglAQghQAHgNAIgLQALgRAOgNQAbgbAEglQABgFAAgDQABgTAAgPAAbByQAcAFAmgNQAmgMAcgWQAcgXAZgWQADgDADgCQAUgRAWgQADaAWQgDAogTAdQgTAegWAeQgXAggKAlQgGAXgHAXQgBABAAAAQgEAMgEAMQgJAZgSASQgJAeAYAKACXFQQACgDACgCQAXAMAdAFQAlAGAoAAQAYAAAWgEQAOgDANgEQAcgKgHAgQgGAjgnAFQgmAFgogBQgngBgnACQgoABgmgEQgHgBgHgBQgggDgdAEQgjAEAGgcQgLAFgNADQgeASgmgJQgkgJgjgRQgkgSgnAEQgYADgYAMQgjASggARQgWAMgeAEQguAHgKgbQAigQANgsQAUgTgJAKQAsgkAeghQAMgIAQgGQAggNAUAVQAZAaAiAHQAnAIAjgLQAngNAfgLQAbgKAkgDQApgEAaAIQgIgOgJgPQgRgcgbgaQgSgSgWgQQAfgOASgNAEpDDQAKAgAJAjQAJAkACAkQABAKACAGABJFOQgIAHgIAGQgeAVggAOAmjFZQAGgFAFgEAgWCNQgIgGgIgF");
	this.shape_11.setTransform(0,17.1,0.732,0.732);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("Ah7EfQgogCgbgUQgdgVgTgfQgTghgGgjQgGgmAQghQAHgMAIgMQBXApBOg0QAzghAxAKIASAEIgSgEIgvgQQhKgZhXgaIABgiIAAgTIAdAEQAjAJApgFQAmgFAagWQAcgZAJghIADgOQAFgigYgbIANgQIAPgPQATAWAKAdIAEAPQAJAogIAjQAuAEA2gJQAOgDAPACQAKgIgDgaQgBgRgGgPIgJghIAgAPQAQAjAEAVQAHAhALAkQAMAmgcAgQgYAaglACIABAMQgTABgSAEQgkAHgnAGIgdADQgWADgUAAQgfAPgWAgQgXAhgCAoQgCApAZAbQAbAcAcANQgRANggAOIgQgLIAQALIgBAAQgcAJgfAAIgRgBgAguEXIAAAAg");
	this.shape_12.setTransform(1.8,7,0.732,0.732);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CE9F6E").s().p("AnSGsQAigQANgsIALgJQAsgkAeghQAMgIAQgGQAggNAUAVQAZAaAiAHQAnAIAjgLQAngNAfgLQAbgKAkgDQApgEAaAIIgRgdQgRgcgbgaQgSgRgWgRQAfgOASgNIACABIACAAIAMABIAAAAIAAAAQAVAAAagJIABAAIACgBQAmgMAcgWQAcgXAZgWIAGgFQAUgRAWgRQgWARgUARIgGAFQgZAWgcAXQgcAWgmAMIgCABIgBAAQgaAJgVAAIAAAAIAAAAIgMgBIgCAAIgCgBQgcgNgbgcQgZgbACgpQACgnAXghQAWggAfgPQAUAAAWgDIAdgDQAngGAkgHQATgEATgCQATgCATAAQAfgBAdAFQAfAFAfACQApACAdAZQAfAagGAqQgGAlgVAhQgVAhgVAaIgPARIgIAOQgPAWgWAQQgUAPgUARIgTARIg1AyIgxAwIgVAVIgNgIIANAIIAVgVIAxgwIA1gyIATgRQAKAgAJAjQAJAkACAkQABALACAFQAOgCANgFQAcgKgHAgQgGAjgnAFQgmAFgogBQgngBgnACQgoABgmgEIgOgCQgggDgdAEQgjAEAGgcQgLAFgNADQgeASgmgJQgkgJgjgRQgkgSgnAEQgYADgYAMIhDAjQgWAMgeAEIgRACQgfAAgIgWgAA5FyQgeAVggAOQAggOAegVQAIgGAIgHQgDAIAAAHQAAASASAHQgSgHAAgSQAAgHADgIQgIAHgIAGgADPFzQAlAGAoAAQAYAAAWgEQgWAEgYAAQgoAAglgGQgdgFgXgMIgEAFIAEgFQAXAMAdAFgADEByQgTAegWAeQgXAggKAlQgGAYgHAXIgBAAIgIAYQgJAZgSASQASgSAJgZIAIgYIABAAQAHgXAGgYQAKglAXggQAWgeATgeQATgdADgoQgDAogTAdgAjWhAQALgQAOgOQAbgbAEglIABgIQBXAaBJAaIAxAQQgzgKgyAhQgrAdguAAQglAAgngSgABgkFQAIgjgJgoIgEgPQgKgdgTgWQATgTAWgQIAQgMQASAiAZAUQAZAVAdAIIAJAhQAGAPABARQADAagKAIQgPgCgOADQglAGghAAIgegBg");
	this.shape_13.setTransform(0,15.4,0.732,0.732);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-49.3,70.3,98.7);


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


(lib.anim_buffy_toss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{sitStable:0,sitStart:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.gotoAndPlay("sitStart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AADpyQACgBABAAQACgBACABQACAAAAAAQABgEgDgDQgBgCgCgBQgFgDgGgBAAepyQgBAFgDADQgBACgDABQgCABgCABQAAABAAAAQgCAIAFAGQABABABABQADAFgFAEQgDACgDACQADADABAEQACAFgDAFQgBACgBABQgCABgBABQgCAAgCABQAAABABABQABAEgBADQgCACgCADAghn3QgFgIgBgJQgBgFAAgGQAAgGgDgFQAAgBgBAAQgCAAgBAAQABAAABgBQAGgBAEgEQACgBACgCQACgBgBgCQAAgBAAgCQgCgEgCgDQgCgBgCgCQgBgBgBgCQgFgCADgEQADgFAGgBQADAAACgCQABABABgBQABgCgBgCQgBgCgBgBQAAgCgCgBQgBgBgCgCQgCgBAAgDQABgBABgCQADgDAEAAQACAAACAAQADAAABgCQAEgFgDgHQgDgGgCgGAgJn6QgEAAgDgEQgCgCgCgEQgBgCABgDQAAgDACgDQABgCADgBQACAAADAAQACABACAAQABABAAgBQABAAABgBQADgHAAgHQAAgDgCgCQgBgCgBgCQAAAAgBAAIAAgBQABgCACgCQABgDACgDQACgBACgBQACgCAAgDQgBgIgBgJQgBgFgBgFQAAgKAAgKQAAgCgBgGAgYn+QgDgDgBgEQgCgEAAgFQAAgDACgCQABgCACgCQACgBAAgBQABAAAAgBQABgGgDgFQAAgBgBgCQgDgHAGgDQAEgDAFgCQABAAABgBQAGgFAAgHQAAgDgDgDQgEgEgEgEQAAAAAAgBQACgBABgBQAEgCAEgCQABgBAAgCQACgFgEgDQAAgBgBAAQgCgBgBgBIAAgBQADgGAFgCQACgCADAAIAAAAAAxpMQgDgBgDACQgFACgDAEQgBADgBACQAAACAAACQABAKgGAHQgCADgDABQgEADgFABAgEn8QgBgEgBgDQAAgEACgDQACgCACgBQADgBAEABQACABACABIAAAAQABAAABABQABABACAAQABABAAgBQACgCACgDQADgEACgFQABAAAAgBQACAAACABQAFABAEADAAtopIAAgBQAAgBgCgBQgBAAgBAAQgDABgCACAALoIQAAADACACAAOoCQAEAEAEAFQAEAEADAFQACAEABADQAFAJAFAGQADADADACQAHgJABgJQAAgBAAAAQACgCgBgEAgqnkQgDgEgEgEQgEgFgBgHQAAgBABgCQABgBABgCQACgCACgCQABgCAAgCQABgBgBgCQAAgCgDgBQgBgBgCgCQgDgBgCAAQgCAAgCAAQgCAAAAgCQgEgIABgKQAAgCABgCQAAgCgCgCQAAAAgCgBQAAgBgCgBQgCAAgCgCQgBgCABgBQADgFAEgDQAEgEABgEQABgBgBgCQgBgEgEABQgCAAgCABQgCABgBAAQAAABgBgBQgBgCgBgBQgBgGADgFQACgDABgEQAAgBAAAAQgBgBgBAAQgCAAgCAAQgCABgDABQgCAAgCAAQgBgBgBgCQAAgCAAgBQABgBAAgBQAAAAgBAAAAGnNQgEgLACgJQACgEAEABQAKACAHAEQAJAFAHAFQACABABABQAAAAABAAQABgCAAgBQAFACAFAAQAHgBAFgEQAKgFAHAJQAGAIgCAJQAAAEgCADQgDAFgDAFQAGAHADAJQACAHACAGQACAJgBAJQgBAEgBADQgGgGgDgFQgHAEgHAFQgIAGgIAFQgHAFgIAEQgDACgDADQgBAAAAAAQADABADgBQAJgCAJgDQAJgCAKgDQgDAIgCAIQgCAKAAAKQAAAFgBABQAMAAgCALQgBAIgJAAQgFAAgEgCQgBAJgFAJQgEAIgIAFQgIAFgJAEQgJAEgJAEQgHAFgIADQgJAEgKAAQgIAAgIgFQgHgEgFgFAAunSQAAABgBAAQADACABACQAFAFgBAHQgEACgFAAQgKAAgBgLQADgBADgBQADgCADgDAA1nBIAAABQAAAKgJAFQgHAFgJgFQgIgFgGgHQgHgHgBgJQAAgBAEACQAFACAHABQAFAAAGgBAAxnNQgBgCgCgDABfl8QABABACABQgEAEgDACQgHAEgHABIAAAAAAillQgBAAgBAAQgKADgJgEQgJACgCALQAAAJAEAEQAHADADACQABAAAAAAQAJAEAJAEQAIAEAJAEQAEACAEABAAQlHQABAAAAAAQAKABAIAAQALgBAIAAQAKAAAFACAAkjpQAEACAEACQAHAEAIAEQAEACADACQAHAFAFAFQAGAFACAGQAHAPATAHQASAHANANQACACANALIAAgdQAAgCABgRQABgRgHgVQgHgUAAgVQABgNAGAAQADgBAFAEQAPAJAIAKQAJAJgEAWQgCAMACAjQAsgXAPgXQAPgWANgHQANgGADAAQAFgBADACQALADgEAKQgEALgGAEQgGAEgRAOQgNAMgUATAAHkEQgBAJgCAIQALAEAHADQgEgCgFgCAAZjqQALALAGAGQACACABACQABAAAAABQADABADACQACABABABQAKAHAHAKQAHANAAANQgJAHgNAGQgPAGgRAGQgSAHgSAEQgZAFgEgRQgFgQgGgRQgCgFgCgFQgBAAAAgBQAAAAAAgBQgFgJgGgKQgBgBgCgCQgDgEgFgGQgNgOgdgbQADgFAAgFQAAgKgEgJQgCgEgCgEQgBgCgBgDAEgi3QARgVADgEQADgEAIAAQAIAAACARQADASgQAMQgDAFgSAJQgRAJgXAMQApAAARgJQAKgFACgBIAAAAQAagUAEAIQADAIgEAPQgFAPgNAGQgNAGgKACQgbAGgjAAQBKAHAAAFQgBAGgEAEQgFAFgcgBQgdAAgHgBQgDAPgHAQQgOAigSAZQgSAagXAbQgVAZgWAVQgCACgOAJQgOAIgdARQgcASgZAEQgZAFgJAGQgiATghgaQgegXgSgaQgKgOgMgPQgIgLgLgLQgVgYgQgbQgQgagGgjQgIgmAGgkQACgLAEgLQAEgNAHgMQAFgIAFgIQAEgHAFgIQACgCASgSQAFgEAFgGQALgLAPgPAg3qCQADADADAFQABABAAACQABACgBABQgBACgCACQgDAEAAAEQAAAFAFABQABAAAAABQABABgBAAQgBADgCACQgCADgCADQgCACgBADQABABABABQADADAAAEQAAAEgCAFQgBADgCADAg6nVQgDgGgFgEQgCgBgCgCQgCgCgBgBIABAAQAEgCAFgBQABAAABgBIAAAAQABgBAAgBQgBgBgBgBQAAgCgCgBQgBgBgCgBQgDgBgDgBQgBgBgBAAQgBgDACgDQABgBACgCQACgCACgBQABgBABAAQgBgDgDgBQgGgBgGgBQgCgBgCAAQgEgBgCgDQgCgCgBgCQAAgCAAgBQAAgIADgHQACgDgDgDQgBgBgBgCQgGgFgGgEQgCgCgCgDQgDgIgCgHQAAgCAAgBQAAgCABgCQACgHABgIQABgDgCgDQgBgDgDgBAhGnEQgHgBgHgDQgBAAgBgBQgBgBAAgBQgCgCACgBQACgCAAgBQAEgFACgHQAAgBgBgBQgBgCgCgBQgCgCgCgBQgGgCgGgDQgBAAgBgBQgGgGACgIQAAgCABgCQAAgEACgEQAAgBAAgBQgEgFgHAAQgDgBgDgBQgBAAgBgBQgDgEACgEQABgBAAgBQACAAABgCQAAAAAAgBQAAgBgBgCQgBgFgEgBQgCAAgBgBQgDABgCgBQgDAAABgEIAAAAQAAgIACgGQAAgCAAgCQABgBABgCQABgDgEgCQgCgBgDgDQgEgDACgFQABgEACgDAhcppIgBAAAhnnNQABgJgFgIQgBgCgCgCQgCgEgEACQgBABAAAAQgBAAgBgBQAAAAgBgBQAAgCAAgDQABgGACgGQABgBAAgCQABgCgBgCQgCgFgGgBQgEgBgEAAQgEAAgEgDQgCAAgCgCQgBAAgBgBQgEgGAAgIQAAgCAAgCQAAgBAAgCQAAgFAAgFQAAgBgBgCQgBgGgGgDQAAAAgBgBQgBAAgBAAQgGgCgHAAAhTm4QgJAAgIgDQgCAAgCgCQgDgDgBgEQAAgBgBgBQgBAAgCAAQgFAAgFgDQgCAAgBgCQgEgDgBgFQgDgKABgJQABgBgBgCQgBgFgEgEQgCgCgCABQgBAAgBgBQgFgCgEgCQgBAAgCgBQgDgEgBgFQgCgFAAgGQgBgBAAgCQgCgFgFgDQgBAAgBAAQgBgBgBAAQgEAAgEACQgBAAgBAAQgEAAgDgDAhbmrQgCgCgEgBQgCAAgDAAQgCABgBAAQgBAAgCAAQgDAAgBgDQgCgDgCgEQAAgDgDgCQgCgCgEABQgCABgCgBQgBAAgCAAQgDgCgBgDQgBgCgBgCQgBgCgCgBQgCgBgCgBQgBAAgBgCQgCgCAAgEQAAgFAAgGQAAgCgBgBQAAgCgCgBQgEgDgFgBQgCgBgCgBQgGgBgEgDQgBgBgBgCQgDgGAAgGQAAgBAAgBQAAgCgBgBQgBgBgDAAQgCAAgDgBQgFAAgEAEQgCABgCABQgCABgCgBQgCgBgBgCQgCAAgBgCQgDgDgBgEAjrnyQAEADADABQADACAEAAQAFAAAEAAQAFAAAFADQAFACADAGQAAAAAAAAQACAFACADQABACAAACQACADADAAQAFACAFgBQABAAACAAQAGABAEADQAEACABAEQABACABABQACADABAFQAAABABABQADAEAEACQAAAAABABQAAABABABQAGAEAEAFQADACACACQABAAABAAQADgBABADQABABABABQACABACAAQACAAACgBQABAAABAAQABAAAAAAQAFACAEADAiSmlQgCgEgDgEQgCgCgDgCQgHgGgBgJQAAgBgBgBQAAgBAAAAQgBAAgBAAQgDAAgDABQgEACgEgDQgBAAgBgCQgBgDgBgCQgBgBgBgBQgCgCgDABQgCAAgCABQgCABgCABQgCAAgDABQAAABgCgBQgGgCgCgHQAAgEgCgDQgCgEgFgCQgGgCgHABQgEABgEACAkFnQQAHAFAJAAQADABADgBQAHgBADAGQACAEACADQABABABABQABACABAAQAAABABABQAEACAFgCQAFgBAEgDQAEgCAEAAQABABABAAQACACAAADQABABAAABQACACADABQACABABAAQADABADAAQAEAAACAEQABADABACQABAAAAABIABAAIAAABQAAgBgBAAAhhmKQAAAAAAgBQAAgDgCgDQAAgBgCgBQgBAAgDAAQgCABgDAAQgCACgCABQgFADgFAAQgCAAgCgBQgCgCgDgCQgCgDgCgEQAAgBgBgCQAAgCgCABQgDAAgCAAQgCABgCABQgGABgDgEQgBgDgDgBQgBgBgBAAQgDABgDAAQgBAAgCgBQgDgEgCgEQgDgEgFACQgCABgCABQgIAFgJAAQgCAAgCgBQgCAAgCgBQgBgBgCgCQgBgCgCgCQgDgFgFgBQgCAAgCAAQgHAAgFACQgEACgDAAAkbmjQADAEADACQADABAEAAQACABACgBQACgBACgCQABgCACAAQABAAABAAQABACABABQABACAAACQABACABADQAAACACAAQADAAADgCQADgCACgBQABgBABgCQADgBACgBQACgBACAAQACAAACAAQABAAAAAAQAFABABAGQABACAAACQAAACACACQACABACAAQAFgDAFgCQACgBACAAQAFgBAFAAQACAAACAAQAFABABAFQAAACABADQABABACgBQACAAACAAQADAAAEgBQADgBADAAQADAAACABQACAAABAAQAFACABAEQADAEACADQABABABgBQABAAACgBQAGgDAHgCQACAAABAAQAEAAACAGQgHgBgHADQgDACgCADQgGAIgCAKQgCAJACAIQABAJAHAEQABABABAAQAHAEAIADQAJACAJgCQAJgDAIgFQAEgDAAgDAiilzQgHgHgDgHQgBAAAAAAQgCAAgBABQgDACgDABQgBABgCgBQgDgBAAgEQAAgEgBgDQAAgCgCAAQgHgCgFAFQgCACgBADQgBABgBACQAAACgBABQgFADgFgBQgEgBgDgEQgBgCgCgCQgBgCgCgBQAAAAgBgBQAAAAgCAAQgBgBgCABQgDACgCACQgDACgCADQgBADgBACQgCAEgFABQgCABgCAAQgCAAgCgBQgCAAgDgBQgJgDgHAGQgCACgEAFAkPlgQACACACABQACAAACgBQABAAABAAQADgDADgDQACgCADAAQABAAAAAAQABABABAAQAEACAEAAQACABAAgBQAEgBADgDQABgBABAAQABgCAAgBQABgBABAAQADgBACACQADADAEABQACAAACAAQACAAABAAQACAAABgCQADgEAEgDQABgBACAAQAGgCADAEQABACABAAQAFADAGgBQAEgBACgCQACgDABgCAiTlVQgEABgDgBQgCgBgCgCQgDgCgDgBQgCgBgCgBQgBAAAAgBQgDgCgDADQgCADgDABQgBAAgBAAQgBgBgBgBQgDgCgDABQgCACgDgBQgCABgCgBQgCgCgDgBQgBgBgBAAQgBAAgBAAQgCADgCABQgCADgDABQgBABgCABQgCAAgDABQgFABgFACQgDAAgCgBQgCAAgCgCQgCgCgBgDQgBgCgDgBQgCAAAAACQgEAHgEAGQAAABgBAAQgDAAgDgBQgCgBgDgBQgEgDgDgDAhtl+QADAAACAAQAFABACACQAEACAAAGAhZlkQgHgIgKABQgLAAAEAKQADAGAGACAiPloQgBgDgCgCQgBgBgCAAQgBAAgBABQgBABgBABQgBACgBACQAAACgBAAQgCACgDAAAiAkuIAAAAQgDgHgFgGQgBgCgBgBQgBAAAAAAQgCAAgBACQAAABAAABQABAEgBAFQAAACgCABQgCAAgDABQgFABgEgEQgCgDgBgDQgCgFgDgCQgBgBgBAAQgBAAAAABQgEADgDAEQgCACgCABQgBABgDAAQgBAAgBAAQgBAAgBgBQgBgDgBgDQAAgBgBgBQgBgDgCABQgCAAgBAAQgCgBgCgBQgHgBgGAFQgBACgCABQgCADABAEQABACgBABQAAAEgCADQgCABgCABAiLlyQgCgEgDgDQgCgBgCgBQgGgBgEAFQgCACgCACAjkklQgCAAgCAAAiRjyQgBABAAAAQgBABABgDAiSjyQAAAAAAgBAiRjyIAAAAQASAPALAKQAHAGAEAEQAFAEACACQAOANAHAOQAIAQADAUQADATgCAUQgDAUgFAQQgCAEgCACQAQASAFAZQABAKADAMQAEAWAGAgQAPgSAUgTQAagYAggKQAigLAcgRQAbgQARgbIABg9AiQGnQgRgHgSgHQglgPgQggQgRgiABgmQAAgmAHgkQACgLAEgLQAHgWAMgTQATgfAngXABPikIAIgCAgqA+IAAAAAgqA+QgFAGgEAGIAJgMgABRECQgQgLgWgBQgmgDglAKQgmAJgZAaQgZAagUAjQgSAjAOAnABRECQgFAFgGABQAiAQAgAWQACACADABQAdATAhAMQAlAOAkAQQAjAPAeAUQAcASAXAbQAZAdAGAjQAAADABACQAEAmgUAbQgVAbgiALQgjALgpACQgkACglgGQgjgGgkgFQgmgHgmgCQgngDglgNQgIgCgIgDQgcgJgbgJQghgMgjgGQgkgHgmAFQgmAFgiACQgTABgRAEQgPAEgPAHQgjARgdAVQgggoAcgWQAYgTAcgSQAbgRAfgRQAhgSAegSQAbgQAlgCQApgBAXAVQAZAWAPAdQARgHAQgFQATgGAUgFQAkgKAmgEQAmgEAmAAQAiAAAiAKQAlALAiAWQAPAKAJAOABZD4QgCADgCACQgBADgDACAB9BzQgDAigIAlQgGAigTAcQAkAOAhAOQAdANAgANQAlAPAlAJQAkAJAeAPQAfARAbAWQAdAXAFAlQAFAsggAWAgqA+IAAAAAhAHhQgngTgpgnAgjJKQgUgEgWAHQghAMglAKQghAKgngDQgSgBgFAJQgJARgSAAQgbAAgLgSQgGgLgHgMQgIgQgMga");
	this.shape.setTransform(45.2,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAVmuQgBAAgBgBQgGAAgFAAQgHgBgFAAQgSgBgRgBQAAgBgBAAQgagNgdAEQgdADgXAMQgOAGgKADQgPAEgOAFQgdAKgKAZQgCAEgGACQgjAGAMAgQAFAOgLAIQgLAIgGANQAPAagdAQQgMAHAAAPQgBAWAOAWQgSALAEATQACAIAGAGQAPAQATAFQADAVAPASQAMAOAQAHQARAIAOgGQACAAADABQAEABADACQAEACADgDQAHgFAHgDQADgBACACQAAABABAAQAHAFAIgEQADgBAFgBQABAAABgBQAAAAABAAQABAAABAAQAFADAEgEQAAAAABAAQABgDACgCQAAgBABAAQACgBACgBQAAgBABABQADAAABACAAsmfQgCAAgDgCQgJgFgIgHQAAgBgBAAQgBgBgBAAQgGgCgFACQgCAAgBABQgBAAgBAAQgDgBgEgBAAqkLQAHgQAFgTQADgLACgMIAAAAQADgRAAgSQABgIAAgIQAAgLgHgMQgFgJgHgHAAVmuQANAGAKAJAhTiXQgBgGgDgGQAAgDACAAQABABABAAQACABACgBQACAAABgCQADgDgDgDQgBgBAAgBQAAgCgBgCQAAgCABAAQABgGADgEQACgDABgCQABgGAGgBQABgBACAAQABAAABgBQABgBABgBQAAAAABgBQADgIAEgHQAAgBABgBQABgBABgBQACgDADgBQACgCACgEQACgFAEgEQAEgFAGgEQABgBAAAAQABAAABgBQACgCADgBQAEgCADgEQAAAAABgBQADgBABgBQACAAADABQACgEADABQABAAAAgBQABgCACgCQABgCACABQABAAAAAAQACgBACACQABAAAAAAQAEADACgDQABgCABgDQABgBgDgBQAAAAAAgBQgBgBgBgBQAAAAAAgBQgBAAAAgBQAAgBgBgBQAAgBAAAAQgBgBAAAAQgBgBABgBIAAAAQAAgBABAAAAmgGQgDgCgRgHQAEABAFACQAOAFAJACAAmgGIABAAIAAAAgAEbgKQABAJAKABAhMmBQAAgDgDgBIAAABIAAgBQgDgLgBgEQgIgdggARAgqmeQgSgHgYgHAhmmFQgSgPgKASQgJgWgXgCAiglUQgHgGgKgHQgLASgQgSQgHgIgPAAAh7lyQgSAGgVgPQggAGgTgQAiwk2QgRAEgRgOQgbAFgTgTAjMkmQgTgPgXAQQgGAEgEgEQgDgEAAgGAj3jsQgWAWgTgLAkWiHQgGgPgLgRAjahBQgOgBgHgKQgEgGgFgDAhxhHQgBgBAAgBQAAAAAAAAQgBgCACgCQADgGgCgDQgBgGgBgFQAAgBAAAAAjShBQgCAAgBAAQgBAAAAAAAiEgNIABgBIAAAAIAZgPAkRkOQASgOAiAOAjujLQgCgDgMACQgfAHgPgWAjnj5QgXgMgTAHAjeGmQAOACALADQAEABAEAAQAJAAAJAGQACABACAAQAbACAaAFQACABADABQABAAABAAQAHABAGABQAGAAAGAAQAHABAGgBQATgBASgBQAEAAAEAAQALgBALgBQAOgBANgEQACAAADgBQAHgBAIgBQAQgDATAAQAHAAACgFQABgBACAAQACgBABAAQAFgBAFgBQACAAADgCQAFgEAHAAQADABADgCAD/AsQgMALgJAMQgBAGAFADQAVgDAIgFQAHgFANgJQAOgIABgBAE6AzQADADAFABADfBRQAIAMAHAKADwB3QABAIAEAEADLAvQgJAHgCATAgcEiIAAAAAgmDsQATAJAZAJ");
	this.shape_1.setTransform(43.8,45.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABAJQgJAAgBgKIAGgCQADgCACgDIAEAEQAFAEgBAHQgEACgEAAIgBAAg");
	this.shape_2.setTransform(49.5,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPBCIgSABIgSgBIgBAAIgKgFQgFgEABgJQABgLAJgCQAJAEAKgDIACAAQAEABACgBIASgFIASgFIgFAQQgCAKAAAKIAAAGQgGgCgJAAgAgKgnQgJgFgGgHQgHgHgBgJQAAAAABAAQAAgBAAABQABAAABAAQABAAABABQAEACAHABQAGAAAFgBQACALAJAAQAEAAAFgCIAAABQgBAKgIAFQgEACgDAAQgEAAgEgCg");
	this.shape_3.setTransform(49.1,28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9A67").s().p("Ah5B4IAAABIAAAAIgBAAIABgBgABeA4IgJgBIgIgEIgRgIIgSgIIAAAAIASABIATAAQAKgBAFADQAMAAgCALQgBAHgIAAIgBAAgAA7AFIABAAIAGgFQAIgCAHgFIAQgLIAOgKQADAGAGAFIADADIgHAGQgHADgHABIAAAAIgTAFIgSAEIgDABIgDgBgAAvheQgHgBgFgCQgBgBgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgEgKACgKQACgDAEABQAKABAHAFIAQAJIADADIgBAAQgDADgDACIgGACIgJABIgCAAg");
	this.shape_4.setTransform(42.7,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag7DFIgIgDIgFAAQgNAFgSgIQgQgHgMgOQgPgSgCgVQgUgFgOgQQgHgGgBgIQgEgTASgLQgOgWAAgWQAAgPANgHQAcgPgPgaQAHgNALgIQALgIgFgOQgMggAjgGQAGgCACgEQAJgZAdgKIAdgJQALgDANgGQAXgMAdgDQAdgEAaANIABABIAjACIAIACIABAAIADgBIALAAIACABIACABQAHAHAJAFIAFACQAIAHAFAJQAGAMAAALIAAAQIgBAAIAAAAIAAAAIgBAAIgEABQgFACgDAEIgCAFIAAACIAAADIAAADQAAAHgFAHQgCACgCACIgKAEIAKgEQACgCACgCQAFgHAAgHIAAgDIAAgDIAAgCIACgFQADgEAFgCIAEgBIABAAIAAAAIAAAAIABAAQgBATgCAQIAAAAIgBAAIgBgCIgDgBIAAAAIgFAEIAFgEIAAAAIADABIABACIABAAIgGAXQgEgDgFgCIgDAAIgCABIgFAJIgEAFIgBAAIgDgCIgCgBIAAAAIgEgBQgEgBgDABQgDAAgCADQgBACAAADIAAABIACAHIgCgHIAAgBQAAgDABgCQACgDADAAQADgBAEABIAEABIAAAAIACABIADACIABAAIAEgFIAFgJIACgBIADAAQAFACAEADQgFATgGAQIgHgKIgIgJIABACIABABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIgCAEQgCADgEgDIgBAAQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAABAAAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgDAEIAAABQgDgBgDAEIgFgBIgFACIgBABQgDAEgDACIgFAEIgCAAIgBABQgGAEgFAEQgDAEgCAGIgFAFIgEAEIgDACIgBACIgHAPIgBABIgCACIgCABIgDABQgFABgCAGIgCAFQgDAEgCAGIAAACIABAFIAAABQADADgCAEIgDACIgFgBIAAgBIgBgGIgCgCIgCgBIAAAAIAAAAIgDABIAAAAIgEABIgFACIgBAAQgEADgEAAIgBAAIAAAAIAAAAIgBAAIgDgBIgFgDIgEgHIgBgDIAAgBIgBgBIAAAAIAAAAIgBAAIAAAAIgEABIgEABIgDAAIAAAAIAAAAQgDAAgCgCIAAAAIAAgBIgBAAQgBgDgDgBIgCAAIAAAAIgBAAIAAAAIgCAAIAAAAIgBAAIAAAAIgBAAIAAAAIAAAAIgBAAIgCgBQgEgDgCgEIAAgBQgCgCgDAAIAAAAIAAAAIgCAAIAAAAIgBAAIgEADQgHAEgJABIgBAAIAAAAIgBAAIgDgBIgDgBIgDgDIgEgFQgDgEgFgCIgCAAIgBAAIAAAAIgBAAIAAAAIgMACIgHADIAHgDIAMgCIAAAAIABAAIAAAAIABAAIACAAQAFACADAEIAEAFIADADIADABIADABIABAAIAAAAIABAAQAJgBAHgEIAEgDIABAAIAAAAIACAAIAAAAIAAAAQADAAACACIAAABQACAEAEADIACABIABAAIAAAAIAAAAIABAAIAAAAIABAAIAAAAIACAAIAAAAIABAAIAAAAIACAAQADABABADIABAAIAAABIAAAAQACACADAAIAAAAIAAAAIADAAIAEgBIAEgBIAAAAIABAAIAAAAIAAAAIABABIAAABIABADIAEAHIAFADIADABIABAAIAAAAIAAAAIABAAQAEAAAEgDIABAAIAFgCIAEgBIAAAAIADgBIAAAAIAAAAIACABIACACIABAGIAAABIgCAAQAAgBAAABQgBAAAAAAQAAAAAAABQAAAAAAABIAEAMQgDgCgFAAIgFgBIAAgBIAAAAQgCgFgDAAIAAAAIgBAAIgCABQgHABgHAEIAAAAIgCABIgBAAIAAAAIgBAAIgBAAIAAAAIgEgHQgCgFgEgBIgDgBIgEAAIgBAAIgBAAIgEAAIgIACIgDAAIAAAAIAAAAIgCAAIAAAAIgBgBIgCgFQgBgFgEAAIgEgBIgBAAIAAAAIgFAAIgFABIgDABIgLAFIgBAAIgBAAIgBAAIgBgBIAAAAIgCgDIgBgFQgBgFgEgBIgCgBIgBAAIAAAAIAAAAIgCABIgFABIgEACIgDACIgFADQgDADgCAAQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgFIgCgDIgCgDIgBAAIgBAAIAAAAIgDACIgDACIgDABIgBAAIgBAAIAAAAIAAAAQgEAAgDgCQgDgCgDgDQADADADACQADACAEAAIAAAAIAAAAIABAAIABAAIADgBIADgCIADgCIAAAAIABAAIABAAIACADIACADIABAFQAAABAAAAQABABAAAAQAAAAABAAQAAAAABABQACAAADgDIAFgDIADgCIAEgCIAFgBIACgBIAAAAIAAAAIABAAIACABQAEABABAFIABAFIACADIAAAAIABABIABAAIABAAIABAAIALgFIADgBIAFgBIAFAAIAAAAIABAAIAEABQAEAAABAFIACAFIABABIAAAAIACAAIAAAAIAAAAIADAAIAIgCIAEAAIABAAIABAAIAEAAIADABQAEABACAFIAEAHIAAAAIABAAIABAAIAAAAIABAAIACgBIAAAAQAHgEAHgBIACgBIABAAIAAAAQADAAACAFIAAAAIAAABQgHAAgGACQgEACgCAEQgGAIgCAKQgCAIACAJQABAIAIAFIAAABIACALQABAEgDAFIgBAEIABABIAAABIACAFIgEgCIgBAAIgEACIgBABIgDAFIgBABQgDADgFgDIgBAAIgCABIgBAAIgJACQgHAEgIgEIgBgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgIAEgGAFIgEABIgDgBgAhRC2IAAAAIABAAIgBAAIAAAAIgCAAIgBAAIgBAAIABAAIABAAIACAAgAhXC2IACAAIgCAAIgCAAIACAAgAhuCrQAIALANAAQgNAAgIgLQgDgGgFgDQAFADADAGgAhKCuQAAADgDADIgDACIADgCQADgDAAgDIAAgBIgBgDIAAgCIABgEIAEgEIAAAAIABgBIABgBQADgBAEgBIABAAIAAAAIAAAAIACABIAEABIADAAIAAAAIABAAIABABIACACIAAABIACAGIACACIACgBIABAAIAAAAIAEgBIADgCQADgFAEgDIABAAIACAAQADACACAFIAEAGQADADADAAIABAAIAAAAIACAAIAEgBQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAgBIAAgDIgBgFIAAgBIABgCQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAIABAAIACADQAFAHADAGIAAABIAAgBQgDgGgFgHIgCgDIgBAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAIgBACIAAABIABAFIAAADQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgEABIgCAAIAAAAIgBAAQgDAAgDgDIgEgGQgCgFgDgCIgCAAIgBAAQgEADgDAFIgDACIgEABIAAAAIgBAAIgCABIgCgCIgCgGIAAgBIgCgCIgBgBIgBAAIAAAAIgDAAIgEgBIgCgBIAAAAIAAAAIgBAAQgEABgDABIgBABIgBABIAAAAIgEAEIgBAEIAAACIABADIAAABgAh4CQIAAAAIABAAIABgBIAIgOQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAAAAIABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIADAFIAEACIADAAIAAAAIABAAIABAAIAKgDIAFgBIADgBIAFgEIAFgEIABAAIACAAIAGADIAAAAIABABIABAAIAAAAIABAAIAAAAIAAAAIABAAIAAAAIAEgBIAAAAIACgBIABAAIABAAIACABIADACIABAAQADgBADgCIAAgBIAAAAIACgBIABAAIAAAAIABAAIABABIACABIADABIAGAEIAEACIAEABIACAAIABAAIAAAAIAAAAIgBAAIgCAAIgEgBIgEgCIgGgEIgDgBIgCgBIgBgBIgBAAIAAAAIgBAAIgCABIAAAAIAAABQgDACgDABIgBAAIgDgCIgCgBIgBAAIgBAAIgCABIAAAAIgEABIAAAAIgBAAIAAAAIAAAAIgBAAIAAAAIgBAAIgBgBIAAAAIgGgDIgCAAIgBAAIgFAEIgFAEIgDABIgFABIgKADIgBAAIgBAAIAAAAIgDAAIgEgCIgDgFQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgBAAIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgIAOIgBABIgBAAIAAAAIAAAAIAAAAIgCgBIgCAAIgGgDIgGgGIAGAGIAGADIACAAIACABIAAAAIAAAAgAh6B+IAAAAIACAAIAAAAIACgBIAGgFQACgDADAAIACABIACABIAHACIADAAIAGgEIACgCIACgDIACgBIAAAAIABAAIABAAIACABIAAABQADADAEABIAEAAIABAAIAAAAIACgBIAAAAIAAAAIABAAIAAAAIACgBQADgFAEgCIAEgCIAAAAIABAAIABAAIAAAAIAAAAIABAAQACAAADACIAAABIADACIABABIAGABIAAAAIAAAAIADAAQAEgBACgDIAEgFQgIgHgDgGIgBAAIgDAAIgGAEIgCAAQgEgCAAgDIgBgIQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgCAAIgBAAIAAAAIAAAAQgFAAgDADIgBABIgDAEIgBAEIgCACIgBABIAAAAIgGACIAAAAIgBAAIgBAAQgFgBgCgEIgEgEIgDgEIAAAAIgDgBIAAAAIgBAAIgCABIgFADIgEAGIgDAFQgCADgFABIgDABIAAAAIAAAAIgBAAIAAAAIgEAAIgFgCIAAAAIgFgBIAAAAIAAAAQgFAAgEADIAAAAIgBABIAAAAIAAABIgGAHIAGgHIAAgBIAAAAIABgBIAAAAQAEgDAFAAIAAAAIAAAAIAFABIAAAAIAFACIAEAAIAAAAIABAAIAAAAIAAAAIADgBQAFgBACgDIADgFIAEgGIAFgDIACgBIABAAIAAAAIADABIAAAAIADAEIAEAEQACAEAFABIABAAIABAAIAAAAIAGgCIAAAAIABgBIACgCIABgEIADgEIABgBQADgDAFAAIAAAAIAAAAIABAAIACAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIABAIQAAADAEACIACAAIAGgEIADAAIABAAQADAGAIAHIgEAFQgCADgEABIgDAAIAAAAIAAAAIgGgBIgBgBIgDgCIAAgBQgDgCgCAAIgBAAIAAAAIAAAAIgBAAIgBAAIAAAAIgEACQgEACgDAFIgCABIAAAAIgBAAIAAAAIAAAAIgCABIAAAAIgBAAIgEAAQgEgBgDgDIAAgBIgCgBIgBAAIgBAAIAAAAIgCABIgCADIgCACIgGAEIgDAAIgHgCIgCgBIgCgBQgDAAgCADIgGAFIgCABIAAAAIgCAAIAAAAIgBAAIAAAAIAAAAIAAAAQgDAAgCgDQACADADAAIAAAAIAAAAIAAAAIABAAgAgQB4IAEgBIABgCIABgEIACgDIACgBIABAAIAAAAIAAAAIACABIABAAIACAFIgCgFIgBAAIgCgBIAAAAIAAAAIgBAAIgCABIgCADIgBAEIgBACIgEABIAAAAIgBAAIABAAIAAAAgAiUBwQgHgPgKgRQAKARAHAPgAgFBhIAEABIAFAIIgFgIIgEgBIgBgBIgBAAIAAAAIAAAAQgEABgDADIgBAAIgDAEIADgEIABAAQADgDAEgBIAAAAIAAAAIABAAIABABgAAjA7IAKAFIgKgFIgBAAIAAAAIAAAAIgCABIgBAAIgBABIgBAAIgBAAIgEgCIgBgCQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIgFgEQgFgFgGgEIgBgBIAAgBQgEgDgDgEIgBgCIgDgIIgCgCQgBgEgDgDQgFgDgFAAIgEAAIgCAAIgBAAIAAAAIgBAAIgGgBQgDgBgBgDIgCgDIgEgHIAAgBQgDgFgFgDQgFgCgFgBIgJABIgBAAIAAAAIgFgCIAAAAIAAAAIAAAAIgBAAQgDgCgEgDIgBAAIAAgBIgDAAQgOgGgLAAIgBAAIAAAAQgMAAgJAGIAAAAIAAABIAAgBIAAAAQAJgGAMAAIAAAAIABAAQALAAAOAGIADAAIAAABIABAAQAEADADACIABAAIAAAAIAAAAIAAAAIAFACIAAAAIABAAIAJgBQAFABAFACQAFADADAFIAAABIAEAHIACADQABADADABIAGABIABAAIAAAAIABAAIACAAIAEAAQAFAAAFADQADADABAEIACACIADAIIABACQADAEAEADIAAABIABABQAGAEAFAFIAFAEIABAAIAAAAIAAAAIAAAAIABAAIAAAAIABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAIABACIAEACIABAAIABAAIABgBIABAAIACgBIAAAAIAAAAIABAAgAgVAZIAAADQABAJAHAFIAFAFIAFAHIgFgHIgFgFQgHgFgBgJIAAgDIAAAAIAAAAIgBgBIAAAAIAAAAIAAAAIAAAAIgCAAIAAAAIAAAAIgGACIgDAAIAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIAAAAIgCgCIgDgFIgCgDIgBAAIgCgBIAAAAIgBAAIAAAAIgBAAIgEABIgDACIgFABIgDAAQgGgCgCgHIgBgGQgDgEgFgBIgBgBIgFgBIgCAAIAAAAIgDAAIgBAAIAAABIgIACIAIgCIAAgBIABAAIADAAIAAAAIACAAIAFABIABABQAFABADAEIABAGQACAHAGACIADAAIAFgBIADgCIAEgBIABAAIAAAAIABAAIAAAAIACABIABAAIACADIADAFIACACIAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIAAAAIAAAAIADAAIAGgCIAAAAIAAAAIACAAIAAAAIAAAAIAAAAIAAAAIABABIAAAAIAAAAgAgWA0IAAAAIgBgBIABABgAgaAtIADAFIAAABIAAgBIgDgFQgCgDgDAAIAAAAIgBAAIgBAAIAAAAIgFgBIgCgBQgEgBgCgDIAAgCIgDgFIgCAAIAAAAIAAAAIgBAAIgFABIgBABIgKAEIgCAAIgBAAIAAABIgBAAIAAAAIgFgCIgBgBIgCgCIgCgDIgDgGQgDgFgFAAIgBAAIAAAAIgBAAIgBAAIAAAAIgGAAQgJAAgHgGIgBABIgBABIgBABQgMALgLAAIgBABIgBgBQgGAAgHgDQAHADAGAAIABABIABgBQALAAAMgLIABgBIABgBIABgBQAHAGAJAAIAGAAIAAAAIABAAIABAAIAAAAIABAAQAFAAADAFIADAGIACADIACACIABABIAFACIAAAAIABAAIAAgBIABAAIACAAIAKgEIABgBIAFgBIABAAIAAAAIAAAAIACAAIADAFIAAACQACADAEABIACABIAFABIAAAAIABAAIABAAIAAAAQADAAACADgAAtAuIAGADIgGgDIgEAAIgEABIgDAAQgCgBgCgCIgDgHQgBgDgCgCIgEgCIAAAAIgBAAIAAAAIgBAAIAAABIgCAAIgBAAIAAAAIgCAAIAAAAIAAAAIgCgBQgDgCgCgDIgCgDIgDgEIgDgBIgCgCQgCgDAAgDIAAgGIAAgFIAAgCIgDgEQgEgDgFgBIgEgBQgGgBgEgEIgCgDQgDgFAAgFIAAgCIAAgBIAAAAIgBgDIAAAAIgBgBIAAAAIgDgBIAAAAIAAAAIAAAAIgFAAQgFAAgEADIgEADIgBAAIAAAAIAAAAIgDgBIgDgCIgDgCQgDgDgBgFQABAFADADIADACIADACIADABIAAAAIAAAAIABAAIAEgDQAEgDAFAAIAFAAIAAAAIAAAAIAAAAIADABIAAAAIABABIAAAAIABADIAAAAIAAABIAAACQAAAFADAFIACADQAEAEAGABIAEABQAFABAEADIADAEIAAACIAAAFIAAAGQAAADACADIACACIADABIADAEIACADQACADADACIACABIAAAAIAAAAIACAAIAAAAIABAAIACAAIAAgBIABAAIAAAAIABAAIAAAAIAEACQACACABADIADAHQACACACABIADAAIAEgBIACgBIACABgAiIAtIAMgBIABgBIABAAIADAAIAEgBIABAAIAAAAQAEAAABACQgBgCgEAAIAAAAIgBAAIgEABIgDAAIgBAAIgBABIgMABIAAAAIgBAAQgUAAgLgQIAAgBIAAABQALAQAUAAIABAAIAAAAgAA8AjIgBAAIgBAAQgHAAgHgCIgCAAIgEgDIgEgHIgBgBIgCgBIgCAAIAAAAIgBAAIgBAAIgBAAIgFgCIgBAAIgDgCQgEgEgBgFQgCgGAAgGIAAgFIABgCIAAgBQgBgGgEgDIgBgBIgCgBIgBAAIAAAAIgBAAIAAAAIgBAAIgJgEIgCgCQgEgDgBgFIgCgLIgBgDQgCgGgFgCIgCgBIgCAAIAAAAIgBAAIgHABIAAAAIAAAAIAAAAIgBAAIAAAAIAAAAQgFAAgDgCQADACAFAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIAHgBIABAAIAAAAIACAAIACABQAFACACAGIABADIACALQABAFAEADIACACIAJAEIABAAIAAAAIABAAIAAAAIABAAIACABIABABQAEADABAGIAAABIgBACIAAAFQAAAGACAGQABAFAEAEIADACIABAAIAFACIABAAIABAAIABAAIAAAAIACAAIACABIABABIAEAHIAEADIACAAQAHACAHAAIABAAIABAAgABIAYQgHgCgHgDIAAAAIAAAAIgBAAIAAAAIgBgBIgBgBIgBgCIABgCIADgDQADgFACgFIAAgBIgBgCIgDgDIgEgCIgMgGIgCgBQgEgEAAgFIAAgEIABgFIACgHIAAgBIAAgBQgEgFgHgBIgGgBIgCgCQgBgCAAgDIAAgDIACgBIACgCIAAgCIAAgDQgCgEgEgBIgDgBIgEAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgBIAAgBIAAgCQAAgGACgGIABgDIABgDIAAgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgGgEQgDgDAAgDIABgDQABgEACgCIAAAAQgFACgEAAIAAAAIgCAAQgKgBgMgHIgBgBIgBAAIgCgCIgQACIgBAAIAAAAQgUAAgNgLIgCgBIACABQANALAUAAIAAAAIABAAIAQgCIACACIABAAIABABQAMAHAKABIACAAIAAAAQAEAAAFgCIAAAAQgCACgBAEIgBADQAAADADADIAGAEQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIAAACIgBADIgBADQgCAGAAAGIAAACIAAABIAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAEAAIADABQAEABACAEIAAADIAAACIgCACIgCABIAAADQAAADABACIACACIAGABQAHABAEAFIAAABIAAABIgCAHIgBAFIAAAEQAAAFAEAEIACABIAMAGIAEACIADADIABACIAAABQgCAFgDAFIgDADIgBACIABACIABABIABABIAAAAIABAAIAAAAIAAAAQAHADAHACgAAnAPIAAgEQAAgHgEgGIgCgDIgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAIAAAAIgBAAIAAAAIAAAAIgCABIgBABIAAAAIAAAAIgBAAIAAgBIAAAAIgCgBIAAgFIAAAAIADgMIABgDIABgDIgBgCQgCgFgFgBIgJgBQgEAAgEgCIgDgCIgCgCQgEgFAAgHIAAgBIAAgCIAAgCIAAgDIAAgKIAAgBIAAgDQgBgGgGgCIgCgBIgCgBIgNgBIANABIACABIACABQAGACABAGIAAADIAAABIAAAKIAAADIAAACIAAACIAAABQAAAHAEAFIACACIADACQAEACAEAAIAJABQAFABACAFIABACIgBADIgBADIgDAMIAAAAIAAAFIACABIAAAAIAAABIABAAIAAAAIAAAAIABgBIACgBIAAAAIAAAAIABAAIAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIABABIACADQAEAGAAAHIAAAEgABGgIIACACIAEAEQAFACADAGQgDgGgFgCIgEgEIgCgCIAAgBQAEgCAFAAIACgBIABAAIAAgCIAAgBIgBgCIgCgCIgEgCIgGgDIgCgBIAAgCIABgDIADgDIAEgEIADgBQgBgCgEgBIgMgDIgDAAQgFgCgCgDIgCgEIgBgDQAAgIAEgGIAAgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgCgCIgMgKIgDgEIgFgQIgBgCIABgFIADgPIABgCIgCgEIgDgEIgBAAIAAgBQgIgGgGAAIAAAAIAAAAQgIAAgEAJIAAABQgKgWgXgCQAXACAKAWIAAgBQAEgJAIAAIAAAAIAAAAQAGAAAIAGIAAABIABAAIADAEIACAEIgBACIgDAPIgBAFIABACIAFAQIADAEIAMAKIACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAADQgEAGAAAIIABADIACAEQACADAFACIADAAIAMADQAEABABACIgDABIgEAEIgDADIgBADIAAACIACABIAGADIAEACIACACIABACIAAABIAAACIgBAAIgCABQgFAAgEACIAAABgAhlgBIgBAAQgOgHgMgBIAAAAIgBAAQgHAAgHADQAHgDAHAAIABAAIAAAAQAMABAOAHIABAAIAAAAgABYgbQABAGAFAGIAGAHIgGgHQgFgGgBgGIAAgBIABgCIADgEIADgEIACgDIAAgCIAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgEgCIgFgBIAAAAIgEgBIAAAAIAAAAIgBAAIgBgBIAAAAQgDgHAAgIIAAgEIABgEIAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgBgCIgDgBIgEgDIgBgBIABgBQADgFAEgEQAEgDABgFIABgBIgBgCQgBgDgDAAIAAAAIAAAAIgBAAIgEABIgDACIgBAAIgCgEIAAgDQAAgEACgDQADgEAAgEIAAAAIAAgBIgBgBIgFABIgFABIgDAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIgBgBIABgCIAAgBIAAgBIAAABIAAABIgBACIABABQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIADAAIAFgBIAFgBIABABIAAABIAAAAQAAAEgDAEQgCADAAAEIAAADIACAEIABAAIADgCIAEgBIABAAIAAAAIAAAAQADAAABADIABACIgBABQgBAFgEADQgEAEgDAFIgBABIABABIAEADIADABIABACQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAAAIgBAEIAAAEQAAAIADAHIAAAAIABABIABAAIAAAAIAAAAIAEABIAAAAIAFABIAEACQAAABABAAQAAAAABABQAAAAAAABQAAAAABABIAAABIAAACIgCADIgDAEIgDAEIgBACIAAABgABmg2IABAKQACAJAEAIQgEgIgCgJIgBgKIAAgBQAAgGgDgEIgBgBIgBgBQAGgCAEgEIAEgCIABgCIAAgBIAAgEQgBgDgDgDIgDgEIgDgCQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIABgDQADgFAGgBIAAAAIABAAIADgBIACAAIAAAAIAAAAIABAAIAAgBIAAgBIAAgCIgBgEIgDgDIgDgCQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgBIABgDIABgBIAEgDIACAAIAAAAIAAAAIAEABIAAAAIACgBIABgBIABAAQADgEAAgDIgCgFQgDgGgBgHQABAHADAGIACAFQAAADgDAEIgBAAIgBABIgCABIAAAAIgEgBIAAAAIAAAAIgCAAIgEADIgBABIgBADIAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAABIADACIADADIABAEIAAACIAAABIAAABIgBAAIAAAAIAAAAIgCAAIgDABIgBAAIAAAAQgGABgDAFIgBADQAAABAAAAQAAABABAAQAAABABAAQAAAAABABIADACIADAEQADADABADIAAAEIAAABIgBACIgEACQgEAEgGACIgBAAIACABIABABQADAEAAAGIAAABIAAAAgAB7gnIADAGQADADAFABQgFgBgDgDIgDgGIgBgFIAAgBIACgFQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIACgBIABAAIAAAAIABAAIABABIAEABIABAAIACgCQAEgGAAgHQAAgDgCgDIgDgDIAAgBIAAAAIACgFIAFgGIADgCQACgCAAgCIgCgRIgBgLIgBgPIAAgFIAAgIIACgBIABAAIABAAIAAAAIABAAIAAAAIAAAAIACABIABgBIAAgCQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgDgCIgNgFIANAFIADACQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIAAACIgBABIgCgBIAAAAIAAAAIgBAAIAAAAIgBAAIgBAAIgCABIgBAAIgFACQgGADgDAFIAAABIADACIACABQACADAAADIAAADIgCACIgIAFIgCACIgBAAIABABIAHAHQADADAAAEQAAAHgGAFIgCABIgJAEQgEACAAAEIABAEIACAEQABADAAAFIAAADIgBABIgCABIgDAEIgCAGIAAABQAAAEACAEQABAEADACQgDgCgBgEQgCgEAAgEIAAgBIACgGIADgEIACgBIABgBIAAgDQAAgFgBgDIgCgEIgBgEQAAgEAEgCIAJgEIACgBQAGgFAAgHQAAgEgDgDIgHgHIgBgBIABAAIACgCIAIgFIACgCIAAgDQAAgDgCgDIgCgBIgDgCIAAgBQADgFAGgDIAFgCIABAAIAAAIIAAAFIABAPIABALIACARQAAACgCACIgDACIgFAGIgCAFIAAAAIAAABIADADQACADAAADQAAAHgEAGIgCACIgBAAIgEgBIgBgBIgBAAIAAAAIgBAAIgCABQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABIgCAFIAAABIABAFgACdgmIgBAAIABAAgACZgsIABABQAAADACACIAAgBIgBgCIgBgCIgBgBIAAgBIAAAAIAAgBIABgBIgBABIAAABIAAAAIAAABgAh/gtQABAAAAABQABAAAAAAQABABAAAAQABAAABAAQACAAADgCIABgBIAAAAIABAAQAKgHAKAAIABAAIAAAAQAKAAAJAHIABAAIgBAAQgJgHgKAAIAAAAIgBAAQgKAAgKAHIgBAAIAAAAIgBABQgDACgCAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQgCgDAAgFIAAgCIAAACQAAAFACADgAg1g9IAFAAIABAAIgBAAIgFAAIAAAAIgCAAQgMAAgMgJIgBgCIgKABIgBAAIAAAAQgTAAgOgNIgBgBIAAAAIgBgBIAAAAIAAAAIABABIAAAAIABABQAOANATAAIAAAAIABAAIAKgBIABACQAMAJAMAAIACAAIAAAAgACZhLIgEAGIAEgGIABgDIgBgDIgBgDIAEgBIADgCIACgCQACgEAAgDIAAgDIgFgIIAGgDQADgDAAgDIgBgEIgCgCQgEgFAAgFIABgDIAAgBIAEgCQADgBABgDQADgDABgFQgBAFgDADQgBADgDABIgEACIAAABIgBADQAAAFAEAFIACACIABAEQAAADgDADIgGADIAFAIIAAADQAAADgCAEIgCACIgDACIgEABIABADIABADIgBADgAgfhbIgQgOIgBABIAAAAIAAAAIAAAAIgBABQgEAHgGAAIAAAAIgBAAQgGgBgIgIIAAAAIgBgBQgHgHgMAAIgBAAIAAAAIgBAAIAAAAIAAAAIABAAIAAAAIABAAQAMAAAHAHIABABIAAAAQAIAIAGABIABAAIAAAAQAGAAAEgHIABgBIAAAAIAAAAIAAAAIABgBIAQAOgABXhiIgDAGIADgGQACgEAAgEIAAgBQAAgEgDgCIgBgCQAAgDACgCIAEgGIAEgFIAAgBIAAgBIgCgBQgEgBAAgEIAAAAIAAgBQAAgEACgDIADgFIABgCIAAAAIgCgEQgCgEgEgDQgTgIgXgHQAXAHATAIQAEADACAEIACAEIAAAAIgBACIgDAFQgCADAAAEIAAABIAAAAQAAAEAEABIACABIAAABIAAABIgEAFIgEAGQgCACAAADIABACQADACAAAEIAAABQAAAEgCAEgAA1iJQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABgAAuicIAEAQIAAAAIAAAAIAAAAIgEgQIgBgCIAAAAQgFgQgOAAIAAAAIAAAAQgIAAgLAFIAAAAIgCABIACgBIAAAAQALgFAIAAIAAAAIAAAAQAOAAAFAQIAAAAIABACIAAAAgACTiWIAAAAg");
	this.shape_5.setTransform(30.8,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AiGFHQglgPgQggQgQgiAAgmQAAgmAHgkIAGgWIAZAEIAHABQAKABAJAGIAEABQAaACAaAFIAFABIADABIAMABIANABIAMAAIAmgCIAGgBIAXgCQAOgBANgDIAFgBIAPgCQARgDASAAQAHAAADgFIADgCIACgBIAKgCQADAAACgCQAFgDAIAAQACAAAEgCQgHAigTAcIgDAFIgEAFQgQgLgWgBQgngDgmAKQglAJgZAaQgZAagTAjQgTAjAPAnIgkgOgAgHhJIgEgXQgFgZgPgSIADgGQAGgQACgUQACgUgDgTQgCgUgIgQQgHgOgPgNIgGgGIgLgKIgdgZIgBAAIABAAIAZgQIApApIAJAKIACADIALATIABABIAAABIAEAKQAGARAEAQQAFARAYgFQATgEASgHIAhgMQAMgGAKgHQAAgNgIgNQgHgKgKgHIgDgCIgFgDIgBgBIgDgEIgRgSIgBAAIAAAAIAAAAIABAAIgBAAIgUgIIASAHIgJgEIAWAGIAIAFIAPAIIAIAEQAHAFAFAFQAFAFADAGQAHAPASAHQASAHANANIAQANIgBA9QgSAbgaAQQgdARgiALQgfALgbAYQgagIgTgJgAB9j2IAHgCgAhklEIAAgBIABABg");
	this.shape_6.setTransform(40.6,76.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CE9F6E").s().p("AkzIxIgNgXQgIgPgMgaQgPAEgPAHQgjARgdAVQgggoAcgWQAYgUAcgRQAbgSAfgQIA/gkQAbgQAlgCQApgCAXAVQAZAWAPAdIAhgMQgngTgpgnQgOgnASgjQAUgjAZgaQAZgZAmgKQAlgKAmADQAWACAQALQgFAFgGABQAiAPAgAWIAFADQAdAUAhAMQAlANAkAQQAjAQAeATQAcATAXAbQAZAcAGAkIABAFIgBgFQgGgkgZgcQgXgbgcgTQgegTgjgQQgkgQglgNQghgMgdgUIgFgDQgggWgigPQAGgBAFgFIAEgFIAEgFIBFAcIA9AZQAlAPAlAJQAkAJAeAQQAfAQAbAXQAdAXAFAkQAFAsggAXQAEAlgUAbQgVAcgiALQgjALgpACQgkABglgFIhHgMQgmgGgmgDQgngDglgMIgQgGIg3gSQghgMgjgGIgCAAIgEgBQgRgDgSAAIAAAAIAAAAQgOAAgPACIgBAAIgDABQgmAFgiACQgTAAgRAFQARgFATAAQAigCAmgFIADgBIABAAQAPgCAOAAIAAAAIAAAAQASAAARADIAEABIACAAQAjAGAhAMIA3ASQgUgEgWAIQghAMglAKQghAJgngDQgSgBgFAKQgJAQgSAAIgBAAQgaAAgLgSgAB9GFQAiAAAiAKQAlALAiAWQAPAJAJAOQgJgOgPgJQgigWglgLQgigKgiAAIgHAAIAAAAIgBAAQgiAAgiAEQgmAEgkAJIgnALIAngLQAkgJAmgEQAigEAiAAIABAAIAAAAIAHAAgAhgCaIgMAAIgNgCIgCAAIgFgCQgagFgbgCIgEgBQgJgGgJAAIgIgBIgYgFQAHgWAMgTQATgeAngXQAMAOAKAPQASAZAeAYIADABQARANASAAIAAAAIAAAAQAPAAAOgIQAJgFAZgFQAZgFAcgRIArgaQAOgIACgDQgDAjgIAlQgDACgDgBQgHAAgFAEQgDACgCAAIgKACIgDABIgDABQgCAFgHAAQgTAAgQADIgPACIgFABQgMAEgPABIgWACIgIAAIglACIgGAAIgHAAgAgyCAQgSAAgRgNIgDgBQgegYgSgZQgKgPgMgOIgTgWQgVgXgQgbQgQgcgGgjQgIgmAGgjQACgMAEgLQAEgNAHgMIAKgPIAJgPIAUgVIAKgJIAagaIABAAIgBABIAAgBIAAABIABgBIgBABIAAAAIABgBIAAAAIAdAaIALAJIAHAGQAOAOAHAOQAIAQADATQADAUgCATQgDAUgFAQIgEAHQAQARAFAaIAEAWIAKA2IgKg2QATAJAaAJQgUASgPASQAPgSAUgSQAagZAggKQAigLAcgRQAbgQARgbIABg+IAAgcIABgUQABgRgHgVQgHgUAAgUQABgNAGgBQADgBAFAEQAPAJAIAKQAJAKgEAWQgCAMACAjQAsgYAPgWQAPgXANgGQANgHADAAQAFAAADABQALAEgEAKQgEAKgGAEIgXATIghAfQgMALgJAMQgBAGAFADQAVgDAIgFIAVgOIAOgJIAUgaQADgEAIAAQAIAAACARQADASgQANQgDAFgSAJIgoAUQApAAARgJIAMgGIAAABQAagVAEAIQADAJgEAOQgFAPgNAGQgNAGgKADQgbAFgjAAQBKAHAAAGQgBAFgEAFQgFAEgcAAIgkgBQgDAPgHAPQgOAigSAbQgSAZgXAaQgVAZgWAVQgCADgOAIIgrAaQgcARgZAFQgZAFgJAFQgOAIgPAAIAAAAIAAAAgAgzAKIAJgKIAAgBIAAABIgJAKIAJgLIgJALgAgqgBIAAAAIAAAAIAAAAgADnigQgEgEgBgIQABAIAEAEgADgi8IgPgWIAPAWgACyjaQACgTAJgHQgJAHgCATgAE0jsQgFgBgDgDQADADAFABgAEYkkQgKgBgBgJQABAJAKABgAgqgBgAgqgBIAAAAIAAAAgAgojLQgFgRgGgQIgEgKIgBgBIAAgCIgLgSIgDgEIgIgJIgqgpQADgFAAgGQAAgKgEgIIgEgIIgCgFIgBgCIAAAAIABgEQADgFgCgEIgCgLIAAgBIACAAQAHAFAIACIACAAIAHABIAAAAIABAAIAGgBIACAAQAJgDAIgFQAEgCAAgEQAAAEgEACQgIAFgJADIgCAAIgGABIgBAAIAAAAIgHgBIgCAAQgIgCgHgFIgCAAQgHgFgBgIQgCgJACgJQACgKAGgIQACgDADgCQAHgCAHAAIAFAAQAFABACACIgDgMQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIACABIAEAAIADgCQADgDgDgDIgBgCIAAgEIAAgCQACgGADgEIACgFQABgGAGgBIADgBIACgBIACgCIABgBIAHgPIABgCIADgCIAEgEIAEgGQADgFADgEQAFgFAFgEIACgBIACgBIAEgDQAEgCADgEIABgBIAFgCIAFABQACgEADABIABgBIACgEQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAIABAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAABIABAAQAFADABgDIADgFQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgBgBIgBgCIAIAJIAHAKIADAGQAFAJAFAHQADADADABIgBADIgBABIgDgDIgQgJQgHgFgKgBQgEgBgCADQgCAKAEAKQABAJAHAHQAGAHAIAFQAJAFAHgFQAJgFAAgKIAAgBQABgHgFgFIgDgEIABgBIABgDQAFACAFAAQAHgBAFgDQAKgGAHAJQAGAIgCAJQAAAEgCADIgGAKQAGAHADAKIAEANQACAIgBAJIgCAHQgGgFgDgGIgOAKIgQALQgHAFgIADIgGAFIgBAAIgCABQgKACgJgDQgJABgCAMQAAAIAEAEIAKAFIABAAIASAIIARAIIAIAEQgBAJgFAIQgEAIgIAGIgRAIIgSAJQgHAFgIADIgDABQgHACgHAAIAAAAIgCAAIAAAAIgBAAQgGAAgGgDIAAAAIgBAAIgCgCQgHgDgFgGQAFAGAHADIACACIABAAIAAAAQAGADAGAAIABAAIAAAAIACAAIAAAAQAHAAAHgCIADgBQAIgDAHgFIgDAQIAVAJIAAAAIARASIADADIABABIAGADIADACQAKAHAHALQAHAMAAAOQgJAGgNAGIggANQgSAGgSAEIgLABQgPAAgDgMgAhxmhQADAGAGADQgGgDgDgGIgBgEQAAgGAIAAIABAAIAAAAQAJAAAGAGIABABIgBgBQgGgGgJAAIAAAAIgBAAQgIAAAAAGIABAEgAhdmzIAAgBQAAgFgEgCQAEACAAAFIAAABg");
	this.shape_7.setTransform(45.2,74.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_8.setTransform(85.7,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(22));

	// Layer 3
	this.instance = new lib.static_ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(84,38.7,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({rotation:360,y:4.7},9,cjs.Ease.get(-1)).to({rotation:720,y:38.7},10,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.4,109,133.8);


(lib.anim_buffy_throws = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{throwStable:0,throwStart:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		playSound("ball_throw");
	}
	this.frame_13 = function() {
		this.gotoAndPlay("throwStart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(11).call(this.frame_13).wait(1));

	// arm
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhCjIQgBgFgBgFQAAgBAAAAQgBgIgBgIQAAgBAAgBQgCgYAKgDQAIgDAQALQAFADADAHQABASACARQAAACAAABQAKAFAFAIQADAGADAJQABAEABAGQABABAAAAQgBgBAAgCQAAABAAABQAFANAFAJQD0AdALAkQAGAQgYAhIgfAWIgrAeQgEAEgFADQgJAHgKAHQgVAOgUAPQgIAGgIAFQgWAQgTATQgIAIgHAHQgHAIgGAIQgPAVgMAYQgLAUgFATAgvjQQgIgFgGADAhZjJQABAAABAAQAFAAAFAAQAGAAAFABQAFAQAHAPAhahiQANgCANgFQABgBAAAAQAOgFAIgNQAHgLACgPABWg5QhegOgHgCQgJgFgJgFQAAAAgBgBIAAAAQgZAAgdgDQAAAAgBAAQgBAAgCAAQgBAAAAAAQgXAcgdgJQgOgFgOgIQgBgBAAAAQgBAAAAgBQgEgCgDgCQgTgNgQgEQgEgBgFAAQgRgHgEgKQgFgMAPgPQAEgDAIABQAFABAGAFQADACACADQACACACACQACACACADQACACABABQABABABABQABAAAAABQABABABABQgBgCgBgBIAAAAIAAAAQgBgBAAgBIgBgBQgIgMgGgHQgHgJgDgDQgDgEgGgEQgGgEgEgGQgBgBAAAAQgBgBAAAAQgCgDgDgEQgIgOgFgVQgGgXAQgGQASgHAHAgQAHAcATAJQACABABABQABAAABAAQADABADABQgEgGgEgFQgBgCgBgBQgCgCgBgCQgBgBgCgCQgKggADgnQAGABAFABQAcAIAFAhQAEAXASAWQABABAAABQAFAGAEAEAgbjIQABAJABAKAheAiICJhOIArgNIBLgVAiBi8QAAgDAAgEQAAgDAAgEQgBgBAAgBQgGgYgHgXQgCgIgBgGQAAgBAAgBQAAAAAAgBQAAgCAAgBQAAgWAUgFQAHgCAFAFQAOAOgDATQgEAfASAeIAAAAQAEAGAFAGQACAEADADAhtjEQgDgCgEgCAiBi8IAAAAQAAABgBABQgBARAJANQALARAOgLAh6j4QgFgIgHgIAiRi9QAIACAIgBAjhjBQgGABgDAFAi8i5QADADACADQAEAGAFAFQACADACADQACACABACQABADAEADQAAABABACQAGAMAQgEAjBh7QAAAAABABQAHAKAKAHQACABADACQAMAHAQADAiujMQgIgEgHAAAiuiJQgHAAgIADAiwEsQgLgbAAgfQAAgHABgHQADglALgjQALgjAWgeQAUgcAYgd");
	this.shape.setTransform(48.6,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CE9F6E").s().p("AiSEuQgSgEgMgGQgLgbAAgfIABgOQADglALgjQALgiAWgfQAUgcAYgdIABAAICJhNIArgNQhegPgHgCIgSgKIgBgBIAAABQgZgBgdgDIgBAAIgDAAIgBAAQgXAcgdgJQgOgEgOgJIgBgBIgBAAIgHgFQgTgNgQgDIgJgCQgRgHgEgKQgFgMAPgPQAEgDAIACQAFABAGAEIAFAFIAEAEIAEAFIADAEIACABIABABIACACIgCgDIAAAAIAAAAIgBgCIgBAAIgOgUIgKgMIgJgIQgGgEgEgGIgBgBIgBgBIgFgHQgIgOgFgUQgGgYAQgGQASgHAHAgQAHAdATAIIADACIACAAIAGACIgIgKIgCgEIgDgDIgDgEQgKgfADgnIALACQAcAHAFAiQAEAWASAWIABACIAJALIgJgLIgBgCQAIACAIgBIAAgGIAAgIIgBgCIgNgvIgDgOIAAgBIAAgCIAAgDQAAgVAUgGQAHgCAFAFQAOAOgDATQgEAfASAeIAAABIACgBIAKAAIALABQAFARAHAPQgHgPgFgRIgCgKIAAgBIgCgPIAAgDQgCgXAKgEQAIgCAQAKQAFAEADAGIADAkIAAACIACATIgCgTQAKAFAFAIQADAHADAIIACAKIAAgBIABADIgBgCIAKAXQD0AcALAkQAGARgYAgIgtAcIgFAGIATgMIgrAfIgJAGIgTAOIgpAdIgQAMQgWAQgTATIgPAPIgNAPQgPAVgMAYQgLAVgFATQAFgTALgVQAMgYAPgVQAYAcgFAhIgDAPQgJAhgcAZQgaAWgmAFQgPACgPAAQgYAAgWgGgABWhAIBLgWgAjAiCQAHAKAKAHIAFADQAMAIAQACQgQgCgMgIIgFgDQgKgHgHgKIgBgBIABABgAgpiEQgIANgOAFIgBABQgNAFgNACQANgCANgFIABgBQAOgFAIgNQAHgLACgPQgCAPgHALgAi9iOIAAAAIAFgCIABAAIAHAAIAAAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIAAAAIgHAAIgBAAIgFACIAAAAgAiTiUIAIgBIgIABIAAAAIAAAAQgKAAgEgJIAAAAIgBgDQgEgDgBgDIgDgEIgEgGIgJgKIgFgHIAFAHIAJAKIAEAGIADAEQABADAEADIABADIAAAAQAEAJAKAAIAAAAIAAAAgAhriZQAFAAAFgFQgFAFgFAAIAAAAIgBAAQgHgBgHgJIAAgBQgIgLAAgOIAAgEIABgCIAAgBIAAABIgBACIAAAEQAAAOAIALIAAABQAHAJAHABIABAAIAAAAgAgDinIABAGIAAABIABAAIgCgIIAAABgAhQjEIAFAHIgFgHIgJgMIAJAMgAjqjCQADgFAGgBQgGABgDAFgAhtjMIgHgEIAHAEgAiujUQgHgDgGgBIgBAAIAAAAIgBAAIABAAIAAAAIABAAQAGABAHADgAgvjYIgBAAQgEgDgEAAIgBAAIAAAAIgEABIAAAAIAAAAIAEgBIAAAAIABAAQAEAAAEADIABAAIAAAAgAh6kAQgFgIgHgIQAHAIAFAIgAgEirIAAABIABACIgBgDg");
	this.shape_1.setTransform(48.6,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AhCjIQgBgFgBgFQAAgBAAAAQgBgIgBgIQAAgBAAgBQgCgYAKgDQAIgDAQALQAFADADAHQABASACARQAAACAAABQAKAFAFAIQADAGADAJQABAEABAGQAAgBAAgBQAAACABABQAAAAgBgBQAFANAFAJQD0AdALAkQAGAQgYAhIgfAWIgrAeQgEAEgFADQgJAHgKAHQgVAOgUAPQgIAGgIAFQgWAQgTATQgIAIgHAHQgHAIgGAIQgPAVgMAYQgLAUgFATAgvjQQgIgFgGADAhZjJQABAAABAAQAFAAAFAAQAGAAAFABQAFAQAHAPAhahiQANgCANgFQABgBAAAAQAOgFAIgNQAHgLACgPABWg5QhegOgHgCQgJgFgJgFQAAAAgBgBIAAAAQgZAAgdgDQAAAAgBAAQgBAAgCAAQgBAAAAAAQgXAcgdgJQgOgFgOgIQgBgBAAAAQgBAAAAgBQgEgCgDgCQgTgNgQgEQgEgBgFAAQgRgHgEgKQgFgMAPgPQAEgDAIABQAFABAGAFQADACACADQACACACACQACACACADQACACABABQABABABABQABAAAAABQABABABABQgBgCgBgBIAAAAIAAAAQgBgBAAgBIgBgBQgIgMgGgHQgHgJgDgDQgDgEgGgEQgGgEgEgGQgBgBAAAAQgBgBAAAAQgCgDgDgEQgIgOgFgVQgGgXAQgGQASgHAHAgQAHAcATAJQACABABABQABAAABAAQADABADABQgEgGgEgFQgBgCgBgBQgCgCgBgCQgBgBgCgCQgKggADgnQAGABAFABQAcAIAFAhQAEAXASAWQABABAAABQAFAGAEAEAgbjIQABAJABAKAheAiICJhOIArgNIBLgVAiBi8QAAgDAAgEQAAgDAAgEQgBgBAAgBQgGgYgHgXQgCgIgBgGQAAgBAAgBQAAAAAAgBQAAgCAAgBQAAgWAUgFQAHgCAFAFQAOAOgDATQgEAfASAeIAAAAQAEAGAFAGQACAEADADAhtjEQgDgCgEgCAiBi8IAAAAQAAABgBABQgBARAJANQALARAOgLAh6j4QgFgIgHgIAiRi9QAIACAIgBAjhjBQgGABgDAFAi8i5QADADACADQAEAGAFAFQACADACADQACACABACQABADAEADQAAABABACQAGAMAQgEAjBh7QAAAAABABQAHAKAKAHQACABADACQAMAHAQADAiujMQgIgEgHAAAiuiJQgHAAgIADAiwEsQgLgbAAgfQAAgHABgHQADglALgjQALgjAWgeQAUgcAYgd");
	this.shape_2.setTransform(48.6,31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CE9F6E").s().p("AiSEuQgSgEgMgGQgLgbAAgfIABgOQADglALgjQALgiAWgfQAUgcAYgdIABAAICJhNIArgNQhegPgHgCIgSgKIgBgBIAAABQgZgBgdgDIgBAAIgDAAIgBAAQgXAcgdgJQgOgEgOgJIgBgBIgBAAIgHgFQgTgNgQgDIgJgCQgRgHgEgKQgFgMAPgPQAEgDAIACQAFABAGAEIAFAFIAEAEIAEAFIADAEIACABIABABIACACIgCgDIAAAAIAAAAIgBgCIgBAAIgOgUIgKgMIgJgIQgGgEgEgGIgBgBIgBgBIgFgHQgIgOgFgUQgGgYAQgGQASgHAHAgQAHAdATAIIADACIACAAIAGACIgIgKIgCgEIgDgDIgDgEQgKgfADgnIALACQAcAHAFAiQAEAWASAWIABACIAJALIgJgLIgBgCQAIACAIgBIAAgGIAAgIIgBgCIgNgvIgDgOIAAgBIAAgCIAAgDQAAgVAUgGQAHgCAFAFQAOAOgDATQgEAfASAeIAAABIACgBIAKAAIALABQAFARAHAPQgHgPgFgRIgCgKIAAgBIgCgPIAAgDQgCgXAKgEQAIgCAQAKQAFAEADAGIADAkIAAACIACATIgCgTQAKAFAFAIQADAHADAIIACAKIABACIgBgDIAAABIAAgBIABADIgBgCIAKAXQD0AcALAkQAGARgYAgIgtAcIgFAGIATgMIgrAfIgJAGIgTAOIgpAdIgQAMQgWAQgTATIgPAPIgNAPQgPAVgMAYQgLAVgFATQAFgTALgVQAMgYAPgVQAYAcgFAhIgDAPQgJAhgcAZQgaAWgmAFQgPACgPAAQgYAAgWgGgABWhAIBLgWgAjAiCQAHAKAKAHIAFADQAMAIAQACQgQgCgMgIIgFgDQgKgHgHgKIgBgBIABABgAgpiEQgIANgOAFIgBABQgNAFgNACQANgCANgFIABgBQAOgFAIgNQAHgLACgPQgCAPgHALgAi9iOIAAAAIAFgCIABAAIAHAAIAAAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIAAAAIgHAAIgBAAIgFACIAAAAgAiTiUIAIgBIgIABIAAAAIAAAAQgKAAgEgJIAAAAIgBgDQgEgDgBgDIgDgEIgEgGIgJgKIgFgHIAFAHIAJAKIAEAGIADAEQABADAEADIABADIAAAAQAEAJAKAAIAAAAIAAAAgAhriZQAFAAAFgFQgFAFgFAAIAAAAIgBAAQgHgBgHgJIAAgBQgIgLAAgOIAAgEIABgCIAAgBIAAABIgBACIAAAEQAAAOAIALIAAABQAHAJAHABIABAAIAAAAgAgDinIABAGIAAABIABAAIgCgIIAAABgAhQjEIAFAHIgFgHIgJgMIAJAMgAjqjCQADgFAGgBQgGABgDAFgAhtjMIgHgEIAHAEgAiujUQgHgDgGgBIgBAAIAAAAIgBAAIABAAIAAAAIABAAQAGABAHADgAgvjYIgBAAQgEgDgEAAIgBAAIAAAAIgEABIAAAAIAAAAIAEgBIAAAAIABAAQAEAAAEADIABAAIAAAAgAh6kAQgFgIgHgIQAHAIAFAIg");
	this.shape_3.setTransform(48.6,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AgEk1QAAgCABgBIAAgBIAAAAQAAgBAAgBIABgBQADgOADgJQACgKABgFQABgFAAgHQAAgHACgHQAAgBAAgBIAAAAQABgEACgEQAGgPAOgRQAPgTAOAJQARAKgWAaQgSAWAEAUQABACAAACQAAABAAAAQACADABADQACgGACgGQAAgCABgCQAAgCABgCQABgDAAgCQATgbAhgVQADAFACAFQAKAbgXAYQgPARgHAbQgBABAAACQgBAHgCAGAiMCqID9iNQgxiggCgGQgBgKgCgKQAAgBAAgBIAAAAQgPgUgPgZQAAAAAAAAQgBgCgBgBQAAgBgBAAQgjgBgKgdQgFgOgCgQQAAgBAAgBQAAAAAAgBQAAgEgBgEQAAgWgIgQQgBgEgDgDQgEgTAFgJQAHgLAUADQAFABAEAIQACAFAAAHQAAAEgBADQAAADgBACQAAADgBADQAAADgBACQAAACAAABQAAAAAAABQAAABAAACQAAAAgBABQgDAMAAAMQAAADAAADQACAOAHAOAARkuQgFgGgGgFABGlXQgBgJgFgFAAvlXQgBAEgBAFQgCAGgCAHQgBADgBAEQAAACgBADQgCACAAAFQgBABgBABQgGAMANALAAel5QgEgEgGABABKj5QgRgEAGgTQAFgPAOgJQABgBABAAIABAAQACgCADgCQADgCADgDQAAgBABgBQAPgTAOgTQAFgHAFgEQABAAAAgBQABAAAAgBQABgBACgBQARgNAQANQAGAEgBAIQgDASgQAKQgcAPgNAhIAAAAQABABAAAAQAEAEADAEQADAFADAFQADgEADgEQABAAAAgBQAFgFAGgGQABgBABAAQARgQAJAGQAHAFACATQAAAGgEAGQgOAMgMAMQgBABgBAAQACAMgEAIQgDAHgFAHQgDAEgDAEQAAgBAAAAQgBABAAABQAAAAABgBQgHANgFAJQB8DTgWAeQgEAIgTATQgCACgCABIAAABIgkATIgrAfQgFADgEAEQgKAHgKAHQgVAOgUAOQgIAGgIAGQgVAQgTATQgHAHgHAIQgHAIgHAIQgQAVgMAYQgKAUgFATAAkjUQAKAJAMAHQABABAAAAQAMAHAQgBQANgBANgHACJlIQAEgJACgKACWj0QgBgKgGgDAB3kRQgCAHgCAHQgCAEgBAFABnkfQAAgDAAgEACcjgQgHAHgHAHACFj+QgLANgHAPABMk3QADAHAGAHAjdG0QgMgcAAgfQAAgGABgHQAEglALgjQAKgjAWgeQAUgcAZgd");
	this.shape_4.setTransform(53.1,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CE9F6E").s().p("AjAG2QgRgFgMgFQgMgbAAgfIABgOQAEglALgjQAKgjAWgeQAUgcAZgdIAAAAID9iNIgzimIgDgUIAAgCIAAAAQgPgUgPgZIAAAAIgCgDIgBgBQgjgBgKgcQgFgOgCgRIAAgBIAAgBIgBgJQAAgWgIgPIgEgIQgEgSAFgJQAHgLAUACQAFABAEAIQACAFAAAHIgBAHIgBAGIgBAFIgBAGIAAACIAAABIAAADIgBABQgDAMAAAKIAAACIAAAGQACAOAHAOQgHgOgCgOIAAgGIAAgCQAAgKADgMIABgBIABgDIAAAAIAAgBIAAgCIABAAIAGgYIADgPIABgLQAAgHACgIIAAgBIAAgBIADgIQAGgPAOgQQAPgUAOAKQARAKgWAZQgSAWAEAVIABADIAAACIADAGIAEgNIABgEIABgEIABgFQATgaAhgWIAFAKQAKAbgXAZQgPAQgHAbIgBADIgDANIADgNIABgDQADAIAGAGIgBAAIgCABQgOAJgFAPQgBAFAAAFQAAAKAMADQgMgDAAgKQAAgFABgFQAFgPAOgJIACgBIABAAIAFgEIAGgFIABgCIAdgmIAKgLIABgBIABgBIADgCQARgMAQAMQAGAEgBAIQgDATgQAJQgcAQgNAgIAAAAIABABIAHAJIAGAJIAGgIIABAAIALgLIACgCQARgQAJAGQAHAFACATQAAAGgEAGIgaAYIgCACQACALgEAJQgDAGgFAHIgGAIIAAgBIgBACIABgBIgBABIABgCIAAABIgMAWQB8DTgWAeQgEAIgTATIgEAEIAAAAIgzAZIgEAHIATgNIgrAfIgJAHIgUAOIgpAdIgQALQgVAQgTATIgOAPIgOAQQgQAVgMAYQgKAUgFATQAFgTAKgUQAMgYAQgVQAYAbgEAiIgDAOQgKAigcAYQgaAWgnAFQgPACgOAAQgZAAgWgFgACFi3IAAABIAAAAIAFgFIgFAEgABSjFIAFAAQANgBANgHQgNAHgNABIgFAAIgBAAIAAAAQgLAAgKgFIAAAAIAAAAIgBgBIgBgBQgMgHgKgJQAKAJAMAHIABABIABABIAAAAIAAAAQAKAFALAAIAAAAIABAAgACOjaIAOgNIgOANgABzjqQAHgPALgNQgLANgHAPgACWj8QgBgJgGgEQAGAEABAJgABzkKIgDAIIADgIIAEgPIgEAPgAApkdQgJgHAAgIQAAgEACgEIACgCIAAgBQAAgEACgCIABgFIACgHIAEgNIACgIIgCAIIgEANIgCAHIgBAFQgCACAAAEIAAABIgCACQgCAEAAAEQAAAIAJAHgABnkmIAAgIIAAAIgAARk2QgFgGgGgFQAGAFAFAGgACJlQQAEgIACgLQgCALgEAIgABGlfQgBgIgFgGQAFAGABAIgAAemAIAAgBIAAAAQgDgDgEAAIgBAAIAAAAIgCAAIACAAIAAAAIABAAQAEAAADADIAAAAIAAABg");
	this.shape_5.setTransform(53.1,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("ADYlkQABAAABgBIABAAIAAAAQABgBABAAIABgBQAOgFAIgEQAKgFAEgCQAEgDAFgEQAGgFAGgDQABAAABgBIAAAAQAEgCAFgBQAPgFAVAAQAZgBACARQADATghAAQgdAAgNARQgBABgBACQgBAAAAABQgCADgBADQgEACgEABQgFADgHADQgDACgEABQgCABgCACQgDgBgEADQgBABgCAAQgNADABAQAEil0QABgGgFgEAgdAGQAggCADgMIAAAAQAHgOANgUQACgDABgCQAPgYAXghQA6hUADgFQAHgIAGgHQABgBAAgBIABAAQAGgYAIgcQABAAAAAAQAAgCABgCQAAAAAAAAQgXgdAPgaQAIgNALgMQABAAAAgBQABAAAAgBQADgDADgDQARgPAHgPQACgEABgEQALgPAKgCQANgCALARQADAFgEAIQgCAFgFAFQgDACgEABQgCABgDACQgCABgDACQgCABgCABQgBABgBABQgBAAAAAAQgBABgBABQgBAAAAAAQgMAGgJAHQgCACgCACQgKALgGAPAETlRQAGgDAGgCQACgBACgBQACgBACgBQACgBACgBQAhgDAlALQgBAGgDAFQgNAZgigCQgXgBgZAMQgBABgCABQgGADgGADADglOQADgIgBgIACpkFQgBANACAOQAAABAAABQADANALALQAJAKAOAGADdkAQgIgQATgHQAPgGAQAFQABAAABABIAAAAAEOknQgEAHgBAJQADABADABQAEABAEAAQABAAABAAQAYgBAYgCQAJAAAGABQABAAAAAAQABAAABAAQACABABAAQAVAFABAVQABAHgHAEQgQAKgSgHQgegLghALIAAAAQAAABAAABQgBAFgBAFQgBAFgDAFQAGAAAFABQAAAAAAAAQAIAAAIABQABAAACABQAXADABAKQABAJgOANQgEAFgIAAQgRgCgSgCQgBgBgBAAQgHAJgJADQgHACgJAAQgFABgFAAQgOADgLACQhMDagmAPQgDADgDADQgCACgBACIgBAAIgkATIgqAgQgEADgFADQgJAHgLAHQgUAPgUAOQgIAGgJAGQgVAQgUATQgHAHgHAIQgHAHgGAIQgRAVgMAYQgKAVgFATAENjtQgHADgHADQgEACgEABAENkCQADgDACgCAFCkDQAJgCAJgGAEHjXQgRABgQAEAEilAQAGgGACgHADViiQABgBAAAAQgBAAgCABQABAAABAAgAD/ixQgKgBgJAAABKBMQgCABgCAAQgDAAgHAAAloGaQgMgbABgfQAAgHAAgHQAEglALgjQAKgiAWgfQAUgcAZgdAkXCQID6iKAELjCQAGgHgBgH");
	this.shape_6.setTransform(67,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CE9F6E").s().p("AlLGdQgRgFgMgFQgMgcABgfIAAgNQAEglALgjQAKgjAWgeQAUgcAZgdIAAAAID6iKIAAAAQAggCADgNIAAABQAHgOANgVIADgFIAmg5IA9hYIANgQIABgBIABAAQAGgZAIgbIABgBIABgDIAAgBQgXgcAPgbQAIgNALgLIABgCIABAAIAGgGQARgPAHgQIADgIQALgPAKgCQANgCALASQADAEgEAJQgCAEgFAFIgHAEIgFACIgFADIgEADIgCABIgBABIgCABIACgBIABAAIAAAAIACgBIABAAIAWgKIAOgHIAJgHQAGgEAGgEIACAAIAAgBIAJgDQAPgEAVgBQAZAAACARQADATghgBQgdAAgNARIgCADIgBABIgDAGIgIAEIgMAGIgHADIgEACIgBAAIAAAAIAAAAIAAAAQgDAAgCACIgBABIgDAAQgMADAAAPIAAACIAAgCQAAgPAMgDIADAAIABgBQACgCADAAIAAAAIAAAAIAAAAIABAAIAEgCIAHgDIAMgGIAIgEIAMgFIAEgCIAEgBIAEgCQAhgDAlALIgEALQgNAZgigCQgXgCgZANIgDABIgMAHIAMgHIADgBQgEAHgBAIIAGACIAIABIACAAIAwgCIAPABIABAAIACAAIADABQAVAEABAVQABAHgHAEQgQAKgSgGQgegMghALIAAAAIgOAGIgIAEIAIgEIAOgGIAAACIgCALIgEAKIALAAIAAAAIAQACIADAAQAXADABALQABAIgOAOQgEAEgIABIgjgFIgCAAIgTgCIATACQgHAJgJACQgHACgJABIgKAAIABAAIgDAAIACAAIgZAFQhMDagmAPIgEABIgCAAIgEABIgBAAIgDAAIADAAIABAAIAEgBIACAAIAEgBIgGAHIgDADIgBABIgzAZIgEAHIATgNIgqAfIgJAHIgUAOIgoAcIgRAMQgVAQgUATIgOAPIgNAQQgRAVgMAYQgKAUgFATQAFgTAKgUQAMgYARgVQAYAbgFAiIgDAOQgKAigcAYQgaAWgnAFQgPACgOAAQgYAAgXgFgADSiqIgHgBIAAABIAAAAIAHAAgACqjwQADAOALALQAJAJAOAGQgOgGgJgJQgLgLgDgOIAAgBIAAgBQgBgLAAgMIAAgEIAAAEQAAAMABALIAAABIAAABgAELjKQAFgGAAgFIAAgCIAAACQAAAFgFAGgADmjZQAQgFARAAQgRAAgQAFgADdkIQgCgEAAgEQAAgKANgFIABAAIABgBQAHgCAHAAIABAAIAAAAIAJABIAAAAIACAAIABABIABAAIABAAIACABIAAAAIAAAAIgCgBIgBAAIgBAAIgBgBIgCAAIAAAAIgJgBIAAAAIgBAAQgHAAgHACIgBABIgBAAQgNAFAAAKQAAAEACAEgAENkKIAFgFIgFAFgAFCkLQAJgCAJgFQgJAFgJACgADXlrQgMAFgJAIIgEAEQgKAKgGAPQAGgPAKgKIAEgEQAJgIAMgFIABgBIgBABgAEilHQAGgHACgHQgCAHgGAHgADglWQACgFAAgGIAAgFIAAAFQAAAGgCAFgAEil8IABgBQgBgFgEgDQAEADABAFIgBABgABKBEIAAAAgADViqIAAAAgADTiqIADAAIgBAAIgCAAgAD/i4IAAAAgAENj1IAAAAgAEOkuIAAAAg");
	this.shape_7.setTransform(67,20.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("ADgjPQAagPAggPQAAAAABAAQABgBACgBQABAAAAgBQAQgpAigJQAQgEARgBQABAAABAAQABAAAAAAQAEAAAFABQAXABATgGQAEgCAFgCQAVgDAHAHQAIAIgLAYQgDAGgKAEQgGACgHgBQgEgBgDgBQgDgBgCgBQgDgBgCgBQgDgBgCgBQgCAAgBAAQAAAAgBAAQgBgBgBAAQgBAAAAgBQgLgFgMgBQgEAAgDAAQgPAAgRAIAGfkGQgDgBgCAAIgBAAQgBAAgBAAQABAAABABIAAAAQAMAHAJAEQAJAEAFABQAEACAHAAQAHABAHADQABABABAAQAAAAAAAAQAEACADACQANAJALARQANAVgPAPQgRASgRgcQgPgYgXADQgCABgCAAQAAAAgBAAQgEABgEACQAGADAGACQACABACABQABABACABQACABACABQAUAZAIAoQgHADgGACQgfAJgPgdQgLgUgYgLQgCgBgBgBQgHgCgFgCAHJjYQAGgEACgHAGUkJQABABABAAIAAABIABAAAGUkJQABABABAAQAAAAABABAGfjIQgDgCgEgCQgGgCgGgDQgDgCgDgBQgDgBgCgBQgBgDgFAAQgBgBgBgCQgKgIgPAOAGDjwQAIgEAIgIAEfjjQgOALgNAOQgMANgFASQgFAPACARADejPQABAAABAAIAAAAADejPQABAAABAAAE7h9QgGgDgHgDQgEgCgDgCAEihvQADAFACAEQAAAAAAABQAEAGADAIQABABAAABQAJAWgKAKQgIAIgUgBQgGAAgFgGQgGgRgHgQQAAgBgBgBQgMABgHgFQgGgEgFgHQgFgHgFgKQgaAEgWAFQgEABgDABQgSAFgPAFQgQAGhAAcQgNAGgOAGQgZAJgbAKQgJADgIAEQgOAFgNAIQgJAEgHAFQgLAGgKAHQgbAVggAWQgVAPgUAOQgIAGgIAGQgWAQgTATQgIAHgHAIQgHAHgGAIQgRAVgLAYQgLAVgFATAD5hXQgEgJgEgIAEQhbQALgBAFgGAE7h9QgBABgBABQgFAEgGADQgGADgGACQgJgNgMgLAE1i0QAMgTARAKQANAHADASQAAABAAABIAAAAQAAAEABADQABAEACADQABABAAABQAOATANATQAFAHACAGQAAAAABABQAAABAAAAQABACAAACQAGAVgTASQgHAGgHgCQgSgFgDgVQgEghgcgTIAAgBAFPiNQAEAAAEAAAFshiQAHAGAJADAF0iqQgJACgJAGACijJQABgBABAAQAggFAaAAACijJQgBAAAAAAQABgBACAAACijJQAAAAABAAQAdgEAegCAmeAnQAZgbAfgUQAfgWAcgQQAggTAjgOQAjgPAmgJQAfgHAegLQAGgCAGgCQACAAACgBQAVgIAXgHQAKgEALgDQAhgKAhgKQADgBACAAQACgBACgBQAjgKAjgKQAKgEAMgDAGWitQAKgBAIgFAnwExQgLgbAAgfQAAgHABgHQADglALgjQALgiAWgfQATgcAZgd");
	this.shape_8.setTransform(80.6,30.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CE9F6E").s().p("AnSE0QgSgFgMgFQgLgcAAgfIABgNQADglALgjQALgjAWgeQATgcAZgdIABAAQAZgbAfgVQAfgVAcgRQAggSAjgPQAjgPAmgJQAfgHAegKIAMgEIAEgCIAsgPIAVgGIBCgUIAFgCIAEgBIBGgVIAWgGIAEgCIAHgCIABAAIABAAQAdgDAegCIACAAIAAgBQAagPAggOIABgBIADgBIABgBQAQgqAigIQAQgFARAAIACAAIABAAIAJAAQAXACATgHIAJgEQAVgDAHAHQAIAJgLAYQgDAFgKAEQgGACgHAAIgHgDIgFgCIgFgCIgFgBIgDgBIgBAAIgCgBIACACIAAAAIABAAIACABIAAAAIAVALIAOAGIALACQAHABAHADIACAAIAAABIAHAEQANAJALARQANAUgPAQQgRASgRgcQgPgYgXADIgEAAIgBABIgIACIAMAGIAEACIADABIAEACQAUAZAIAoIgNAFQgfAJgPgdQgLgUgYgLIgDgBIgMgFIAMAFIADABQgJADgJAGIAAgBIAAgCQgDgRgNgIIgBAAIgBgBQgFgCgEAAIAAAAIgBAAQgJAAgIANQAIgNAJAAIABAAIAAAAQAEAAAFACIABABIABAAQANAIADARIAAACIAAABIABAHIADAGIABADIAbAmQAFAGACAGIABACIAAABIABADQAGAVgTASQgHAGgHgCQgSgFgDgUQgEgigcgTIAAAAIgNgHIgHgDIAHADIANAHIgCABIgLAHIgMAGIAFAJIAAAAIAHAOIABADQAJAWgKAJQgIAIgUAAQgGgBgFgFIgNghIgBgCIgIgSIAIASQgMABgHgGQgGgEgFgGQgFgIgFgJQgaADgWAGIgHABQgSAFgPAGIhQAiIgbAMIg0ATIgRAGQgOAGgNAHIgQAJIgVAOIg7ArIgpAcIgQAMQgWAQgTATIgPAPIgNAQQgRAVgLAYQgLAUgFATQAFgTALgUQALgYARgVQAYAbgFAiIgDAOQgJAigdAYQgaAWgmAFQgPACgPAAQgYAAgWgFgAF8hgQgJgEgHgFQAHAFAJAEgAEQhjQALAAAFgGQgFAGgLAAgAEih2QgJgOgMgKQAMAKAJAOgADwiTIgBgIQAAgMAEgMQAFgSAMgNQANgNAOgMQgOAMgNANQgMANgFASQgEAMAAAMIABAIgAFXiVIgIAAIAIAAgAGWi1QAKAAAIgFQgIAFgKAAgAF5jjIACACQAFAAABADIAFACIAGADIAMAGIAHADIgHgDIgMgGIgGgDIgFgCQgBgDgFAAIgCgCIAAgBQgEgCgEgBIAAAAIgBAAQgGABgIAGIgBABIAAAAIAAAAIgBABIAAAAIAAAAIABgBIAAAAIAAAAIABgBQAIgGAGgBIABAAIAAAAQAEABAEACIAAABgAHJjfQAGgFACgHQgCAHgGAFgAGDj3QAIgFAIgHQgIAHgIAFgAF1kYQgPABgRAHQARgHAPgBIABAAIABAAIABAAIAEABQAMAAALAGIABAAIgBAAQgLgGgMAAIgEgBIgBAAIgBAAIgBAAIAAAAgAD5heIAAAAgAF0iyIAAAAg");
	this.shape_9.setTransform(80.6,31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(9));

	// ball
	this.instance = new lib.static_ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(31.4,5.7,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:63.8,y:-24.1},0).wait(1).to({x:105.6,y:-19.3},0).wait(1).to({x:156.1,y:-26.4},0).to({x:254.6,y:-62},3).to({x:413.7,y:103.9},5).wait(1));

	// head
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("ACPjPQABAFAAAFQAAACAAABQgBACgBAAQgCACgCABQgFACgCAEQgCAEAEADQAAABAAABQABABgBAAQgDACgDABQgDACgEABQgDABgCACQAAACAAABQACAEgCADQgCAFgFACQgCADgEABABohJQgCgEABgEQAAgFADgEQACgDADgBQACgBADgBQABAAABAAQABAAAAgBQAEgFABgGQAAgBAAgCQABgHAHgBQAFAAAFABQACAAABAAQAHgCAEgGQACgDgBgFQgBgEgCgGQAAAAAAgBQACAAACgBQAEAAAFAAQACAAABgBQAEgDgBgGQgBAAAAgBQgBgCgBgCIAAAAQAFgEAHABQADAAADABIAAAAQACAAABABQADAAABACQABABAAgBQADgDAAgDQAAgCgBgCQgEgGgFgFABchIQAAgJADgJQACgFACgFQAEgFgBgHQAAAAAAgBQgBAAgBgBQABAAABAAQAGACAGgCQACAAADAAQACAAAAgCQABgCABgBQAAgEgBgEQAAgCgBgDQAAgCgBgCQgDgEAEgCQAGgEAGADQACABADAAQABABABgBQACgBAAgCQAAgCAAgCQABgCgBgCQgBgBgBgCQgBgDACgCQABgBACgBQAEgBAEACQACABABABQADABACgBQAGgCABgIQAAgHACgGADUiWQgDAEgEACQgCACgEgBQgCAAgCgBQgBABAAAAQgFAGABAIQABACAAABQAAAHgHAAQgEABgDAAQABAEgBAEQgBAGgFADQgCABgBAAQgDABgBgBQgDAAgCgBQAAACAAABQAAAEgDACQgDACgDABAC8ijQgCAGgBACQgFAIgFAKQgCAFgCAFQgDAIgEAIQgBADgDAAQgCAAgCAAQgEACgDABQgDACgCABIAAAAQAAABAAAAQAAADAAACQABADgBADQgEAGgHAEQgBABgBgBQgBAAAAAAQgBgCgCgBQgCgCgDgBQgDAAgCABQgDACgBACQgCACgBADQAAAEABADQAAAFAEADADShqQgDgBgDgBQgFAAgFACQgDACgCABQgBACgBACQgEAJgKAEQgCABgDAAQgFAAgFgBAC9hMIAAAAQAAgBgBgCQgBgBgBgBQgDAAgDABACtg6QgCgFgEgEQgCgBgBgBQgBAAgBAAQgEADgFACQgDACgEABQAAAAgBgBQAAgBgBgCQgBgBAAgBIAAAAQgCgBgBgCQgDgDgDgBQgDAAgDABQgEACgBADQgBADgBAEACNg/QgCADABACACMg5QACAGABAGQABAHAAAFQAAAEAAAEQAAAKABAJQABAEACACQALgDAGgIQAAAAAAgBQADgBABgDACUAAQADAFAGACQAGADAHgBQALAAABAMQACAKgGAIQgDADgDACQgFACgFADQABAKgCAKQgBAGgCAIQgCAIgGAIQgCADgDACACUAAQgBABgCABQAAAAgBAAQAAAAgBABQACACAAADQABgCgCgEABqgNQACgMAHgHQADgCAEADQAIAGAEAIQAFAIAEAJQABABAAABACPADQgEABgEgBQgDAAgDgBQgFALAKAFQAEACAFABIgBAAQgFAJgLABQgJAAgFgJQgFgIgCgKQgCgJADgIACPAVQAEgHgCgGABOBeQAAAAABAAQAEgCAEABQAJABAJgBQAKgCAKAAQAJgBAJAAQAAAGACAIQAAACABACQgFACgEAAQgIgBgHgDIgBAAQgJgCgJgCQgLgCgIgDQgDgBgDgCQgBgBgBAAQgKgDgGgHQgKgEgHAKQgEAHACAGQAEAGACADQABABAAAAQAGAIAFAIQAGAIAFAIQADAEADADQgFAIgIAFQgJAFgKABQgKAAgJgBQgKgBgLAAQgIAAgJgCQgKgBgJgFQgEgDgEgDQgCgDgCgEQgEgGgCgIABijHQAAAAAAAAQgBABgBABQgBABAAABQgBACABACQABABACABQADAAACABQADABACABQAAABABAAQAAABgBAAQgCAEgFABQgFAEgBAFQgBACAAACQABABABgBQABABACAAQACAAACABQAEACgBADQgBACAAABQgEAEgFAAQgGABgFADQgBABAAACQABACABACQABACABABQAAABAAABQABACgBACQgBABgCACQgGAJgBAJQAAACACABQABABACABQACABACADQABACABACQABACAAACQgBACgBABQgBACgCAAQgDABgCABQgDABgCABQgCABAAABQgCAHABAHQABAFABAFABhjMIAAAAAAhgsQgGgFgFgGQgBgBgBgCQAAAAAAgCQAAgCACAAQADgBABgBQAGgDAFgFQABAAAAgCQAAgCgCgCQgBgCgBgDQgEgFgEgGQgBAAgBgCQgCgIAGgGQACgBABgCQACgDAEgDQABAAAAgCQgBgGgGgEQgDgCgCgDQAAAAgBgCQAAgFADgDQABAAACgBQABABABgBQABAAABgBQAAgBAAgCQABgFgDgDQgBgBgBgBQgCgBgCgCQgCgCACgDIABAAQADgHAFgFQACgBABgCQABAAABgBQADgDgCgDQgCgDgBgDQgCgFAEgEQADgDADgCAA1g2QgBgGgDgHQAAgCgBgDQgBgCAAgBIABAAQAEAAAFACQABAAABAAIABAAQABAAAAgCQAAgBAAgBQAAgCAAgBQgBgCgCgCQgCgDgCgCQAAgBgBgBQABgDACgCQADAAACgBQADgBADAAQABABABAAQABgDgDgDQgEgEgFgFQgCAAgBgCQgEgDAAgEQgBgCABgDQAAgBABgCQAEgHAHgEQADgCgCgFQAAgBAAgCQgDgHgDgHQgBgDAAgDQABgJADgIQAAgBAAgBQACgCABgCQAGgFAFgHQADgCAAgEQgBgDgBgCAAHhFQAGgIAAgKQgBgCAAgCQAAgFgEgBQgCABAAAAQgBAAAAgCQAAAAgBgBQABgDABgCQAFgFAFgEQABgBABgBQACgCABgCQAAgGgEgEQgDgDgEgCQgEgCgDgEQgBgCgBgCQAAgBgBgBQAAgIAEgGQABgCABgCQAAgBABgCQACgEADgFQABgBAAgCQADgGgEgGQgBAAAAgBQgBgBgBgBQgFgEgFgEAAPgoQgIgFgHgHQAAgBgBgDQAAgEAAgEQAAgBAAgBQAAgBgCgBQgFgCgDgFQgBgCgBgCQgBgFABgFQADgKAFgHQACgBAAgCQACgFgCgFQgBgDgCgBQgBgBgBgBQgDgEgDgEQgBgBAAgBQgBgFABgFQABgGADgFQAAgBABgCQAAgGgDgFQAAgBgBgBQgBAAgBgBQgDgCgFgBQAAAAgBgBQgEgCgCgEAABghQgBgCgCgDQgBgBgDgBQgCgBgCAAQgBgBgCgBQgCgCAAgDQAAgEABgEQABgDgBgDQgBgDgEgBQgDgBgBgBQgBAAgBgCQgCgDAAgEQABgCgBgCQAAgDgBgBQgBgCgCgCQAAgBAAgCQAAgDABgDQADgFADgGQABgBAAgBQAAgCgBgCQgCgFgEgEQgBgBgCgCQgEgEgCgFQgBgBAAgDQABgHADgFQABgBAAgBQABgBgBgBQAAgCgDgCQgCgBgCgCQgEgCgFAAQgDABgDAAQgCAAgBgDQgBgCAAgCQgBgBgBgCQgBgEABgFAhbiqQACAEACADQACAEADABQAEADAEACQAFADADAEQADAGAAAGIAAAAQgBAFAAAEQAAACAAADQAAADACACQADAEAFACQACAAABACQAFADADAFQABAEAAAFQAAABAAABQAAAFgBAEQAAABAAABQAAAGADAEQAAAAAAABQAAABAAABQADAHACAHQABADABACQABABABABQADABAAACQAAACAAABQABACACACQACABACAAQABAAABAAQABABAAAAQAEAEACAFAgyg3QAAgFgBgFQgBgDgCgEQgDgIAEgJQABgBAAgBQAAgBgBgBQAAAAgBgBQgDgBgDAAQgFAAgBgFQgBgBAAgCQAAgDAAgDQAAgBgBgCQAAgDgEgBQgBAAgCAAQgDAAgCgBQgCAAgDgBQgBAAgBgBQgFgFADgIQABgDAAgDQABgFgEgEQgEgGgHgCQgEgBgEgBAhDhFQAAAAAAgBQAAgDAAgCQABgFgEgCQgDgBgCgDQgBgBgBgBQgCgDgBgDQAAgBAAgBQABgDgBgDQAAAAgBgBQgDgCgFAAQgFAAgFgBQgFgBgCgFQgBAAAAgBQgBgBAAgCQgBgCABgBQAAgEAAgEQAAgHgHgDQgDgBgCgCQgIgEgEgJAhDhFIAAABIAAABQAAgBAAgBgAgVgGQABAAAAgBQABgDABgDQAAgCgBgBQgCgBgDgBQgBgBgDAAQgCAAgDgBQgGAAgFgCQgCgBgBgCQgBgCgBgDQgBgFABgEQAAgBABgCQABgCgDgBQgCgBgDgBQgCAAgCgBQgGgBAAgGQAAgCgCgDQAAgBgCgBQgDgBgCgBQgBgBgBgCQgBgEAAgFQgBgGgFAAQgCAAgDAAQgJAAgJgFQgCgBgBgBQgBgBgBgCQgBgCAAgDQgBgCgBgDQAAgGgEgEQgBgBgCgBQgGgCgGgCQgEAAgDgBAhGgGQAAgEgCgFQAAgCgCgCQgFgDgGABQgCABgDABQgDgJAAgIQAAgBgBAAQgBAAgCgBQgDABgEgBQgBAAgBgBQgCgDABgDQACgEABgEQABgBgBgBQgGgFgHACQgDAAgCACQgBABgCACQgBAAgCABQgFABgFgEQgDgDAAgFQAAgCgBgDQAAgDgBgCIgBAAQAAgBgBgBQgBgBgCAAQgEAAgDAAQgDABgEACQgCABgDACQgDACgFgBQgCAAgBgBQgCgBgCgCQgCgBgCgDQgHgHgJACQgDABgGACAglgCQgGgDgIgCQgEAAgDACQgJAEgIAHQgGAHgCAJQgDAIAEAIQAAAAAAAAQAAABAAAAQAFAIAGAGQAHAHAJACQAKACAJAAQAFAAACgEAglgCQABgGgDgCQgBAAgCgBQgHgCgIAAQgCAAgBgBQgBAAgBgBQAAgEAAgEQABgFgEgEQgBgBgBgBQgCgBgCgCQgDgCgDgBQgEgBgEgCQgBAAgCgBQgCAAAAgCQAAgDABgDQACgEgEgDQgBgBgCgCQgFgCgFgCQgCgBgCAAQgGAAgGgBQgCAAgBgDQgBgCABgCQABgCAAgCQADgGgEgDQgBgBgBAAQgBgBgCgBQgCgBgCAAQgCgBgDAAQgCABgCAAQgDABgDAAQgEAAgCgBQgCgBABgDQAAgCABgDQAAgCABgCQAAgCgBgCQAAAAgCgBQgBAAgCAAQgCABgCAAQgDAAgCgCQgDgCgCgDQgCgDgBgFACBACQgGgBgFgDQgFgEgDgEQgDgEgBABAhagTQgDACgDABQgDABgEgBQgGgCgCgFQgBgBAAgCQgBgGgGgBQgCAAgCAAQgFAAgFACQgCABgBAAQgCgBgBgBQgCAAgBgCQgEgDgBgEQgBgDgCgBQgBAAgCAAQgBABgCABQgBAAgBAAQgEABgEAAQgBAAgBgBQgDgDgDgEQgBAAAAgBQgBgBAAgBQgDgBgDABQgEABgEABQgBAAgBAAQgCgBgCgBQgCgBAAgEAhdAPQgDgBgDgDQgBgCgBgCQgBgDgDgDQgBgBgBgCQgBAAAAgBQgCgEgDACQgDABgEgBQgBAAgBAAQAAgCAAgCQgCgDgEAAQgCAAgDgCQgBAAgBgCQgCgDgCgDQAAAAgCgBQAAgBgBAAQgDABgDABQgDABgDAAQgCAAgCgBQgCAAgDgBQgGgBgFgCQgCgBgCgCQgBgBgBgDQgBgCAAgEQABgCgCgCQgCgBgBABQgHAEgHAEQgBABgBgBQgCgBgCgCQgCgDgCgCQgBgFgBgEAhQAAQACgCgBgDQAAgCgCgBQgBAAgBAAQgCAAgCABQgBABgCACQgBABgBAAQgDABgCgCAhfA8IAAgBQABgHgCgIQAAgCAAgCQAAAAgBgBQgCAAgBABQgBABgBABQgBAEgDAEQgBACgDgBQgCAAgCgBQgFgCgCgFQAAgEAAgEQABgFgCgEQgBAAAAgBQgBAAgBAAQgFAAgFADQgCABgCAAQgCAAgDgCQgBAAgBgBQAAgBgBgBQABgDAAgDQABgBAAgBQAAgDgCgBQgBAAgBgBQgCgDgCgBQgGgEgHABQgCABgCABQgDABgCAEQAAACgBABQgCADgEACQgCAAgCAAAiNBpIAAAAQgBAAgBAAQgBAAADgBQgBAAAAABAhvBoQAGgDACgFQAGgJAAgKQAAgEABgFQAAgDAAgDAi+ARQgBgBgCgCAiyByQAPgEAWgGAAvBvQABABAAAAQAIAGAIAEQAJAEAIAFQAJAFADAFQALAGgIAJQgEAGgIgEQgEgDgEgEAghAfQgCgKgJgFQgLgFgBAKQgBAHAFAGAglgCQACACACAAQAEADABADQACAFgDAEAABDZIAAAAAAEDDQgEgGgGgIAB5BqQgGAGgGAHQgHAHgFAJQgCAFgCAB");
	this.shape_10.setTransform(68.2,25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.1,1,1).p("ADDipQgPgKgPgKQAAAAAAgBQgRgZgcgLQgcgMgbgCQgPgBgLgCQgPgEgQgDQgegGgVARQgEADgGgCQgjgMgGAjQgCAPgOACQgOABgMAIQgBAgghgBQgPAAgIANQgLAUABAbQgWABgGATQgDAIADAJQAFAVAPAPQgJAUAFAXQADASALAPQAMAQAPACQACABACACQADADACAEQACADAFAAQAIgBAIABQAEAAAAADQAAAAAAABQAFAIAIABQAFAAAEACQABAAABAAQAAAAABABQABAAABABQADAFAFgBQABAAAAAAQADgCADgBQAAgBABAAQACABACAAQABgBABABQACACAAACADaiaQgBgBgBgBQgFgDgEgDQgCAAgCAAQgBAAAAgBQgDgDgEgDQAGAEAGADQAFACAEAEQABABABABgADniAQgCgCgCgDQgGgKgDgJQAAgBAAgBQAJAMAEAOgACaACQAOgKAOgOQAIgJAIgJIAAAAQALgNAKgRQAEgHAFgHQAFgKAAgOQABgLgDgJACYgfQgBABAAAAQgBABAAAAQAAABAAABQAAABAAABQAAABAAABQAAAAAAABQAAAAAAABQAAABAAACQAAAAAAABQACABgBACQgCABgDACQgDABgCgEQgBgBAAAAQgBgDgCAAQgBAAAAgBQgBgBgCABQgDABgCABQgBABAAgBQgDgCgEACQgBgCgDgBQgCgBgDAAQgBAAgBABQgFACgEAAQgDgBgDABQgBAAgBAAQgBAAAAAAQgIAAgGADQgFABgFAEQgEACgDABQgDAAgDABQgBABgCAAQgBAAgBABQgHAEgHAFQgBABgBAAQgBAAgBAAQgCAAgBAAQgCgBgBAAQgGgBgEAEQgCACgCABQgFACgFAFQgBAAAAABQAAACgBADQAAABAAAAQABAFgEACQgCABgCgBQgBgBgCgCQgBAAgBgBQgBgBgBACQgBAIgCAFABrijQABgDgCgCIAAAAIAAAAQADgMABgEQAIgegmgBABWi0QgJgXgSALQACgYgTgOAAIimQgDgJgFgLQgSAKgFgYQgDgMgNgGAgViTQgRgGgIgUQgbgLgHgaAA5ivQgTgDgLgYQgfgLgJgYAg1iTQgKgYgdADQgIAAgBgFQgBgFAEgGAh6h1QgfAIgMgUAiAihQAXgDAYAeAhlh5QgOgXgVgCAjJgrQABgQAAgVAi4AyQgMgHgBgOQAAgHgDgFAiDhTQAAgEgMgEQgfgKgCgbAhWBiQAAgBAAAAQAAgBAAAAQAAgCADgBQAFgDABgFQABgFADgFQAAgBAAAAAiFCNIABAAAiECNIAfgBAiwA2QgCAAgBgBQgBAAAAAAAgeC+QgDAJgCAKQAOACAPAHQAFACAFACIAGAfAAIDgQAFAGACADQABABABABAARDrIAAAAAADDZQADADADAEQACADADADQAAABABABQABACABABIAAAAIAAAAIAAAAAAIDgQgCgBgCgBIgBgFQADAEACADgAgjDRQgCAJgCAJACYirQgNgRgRgS");
	this.shape_11.setTransform(67.2,21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("ABLA/QgRgFgDgLIgHgeIgBgGIAFAHIgEgBIAEABIAIAJIABACIAAAAIAAAAIAAAAIAbAjQABABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgNgDgAA9AdIAAAAIAAAAgAA0ASIAAAAgAhYhAIAAgBIABABg");
	this.shape_12.setTransform(62.8,42.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC9A67").s().p("ABTBfIgIgHIgFgHIgLgQIgMgQIAAAAQAIAGAIAEIARAJQAJAFAEAFQAKAGgHAJQgDAEgEAAQgDAAgDgCgAB5AsIAAAAIgTgFIgTgFQgDgBgDgCIABAAQAEgCAEABQAKABAJgBIATgCIASgBQAAAGACAIIABAEIgIACQgJAAgHgDgAiOApIgBABIgBAAIACgBgACHg7IgHgBQgFgBgFgEQgGgEgDgEQgBgBAAgBQgBAAAAgBQgBAAAAAAQAAAAAAAAQABgMAHgHQAEgCADADQAIAGAEAIIAKARIABADIgBABIgGABIgCgBg");
	this.shape_13.setTransform(68.2,31.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAHQgJgGAEgJIAHABQADAAAEgBIACAGQABAFgEAGQgFAAgDgCg");
	this.shape_14.setTransform(81.8,26.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKBEIgRgKQgIgEgHgFIgBgBIgHgJQgCgGAFgIQAHgJAJADQAHAIAKADIABAAQADADADABIASAFIATAEIgNAMQgGAIgFAJIgEAGQgDgFgJgFgAAVgoQgFgJgCgJQgDgKAEgJQAAAAAAAAQABAAAAABQAAAAABABQABAAAAABQADAFAGAEQAFADAFACQgEALAJAFQAEACAFAAIAAABQgGAJgKAAIgBABQgIAAgFgJg");
	this.shape_15.setTransform(77.3,31.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CE9F6E").s().p("AglB8QgqgVhlhGIAlgJIgCABIACAAIgCAAIABgBIABAAIgBAAIABAAIAAAAIAAABIAfgBQAFgEADgEQAFgJAAgJIABgJIABgGIAAgBIAAgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAFgEABgEIAEgLIAAAAIABABQAEAHAGAHQAHAGAJADIABAAIABAAIAMABIABAAIAAAAIAEAAIABAAIAAAAQAEAAACgCIAAgBIAAABQgCACgEAAIAAAAIgBAAIgEAAIAAAAIgBAAIgMgBIgBAAIgBAAQgJgDgHgGQgGgHgEgHIgBgBIAAgBQgEgHADgJQADgIAGgHQAHgIAJgEQAEgDAEABQAHABAGAEIAFADQAEADABADIADgNQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAABIACABIADADIAEAAQAEgCgBgFIAAgBIACgFIABgBQAFgFAEgCIAEgDQAEgFAGACIADABIADAAIACgBIACAAIAOgKIACgBIADgBIAGgBIAHgDQAFgEAFgCQAGgCAIAAIABAAIACAAIAGgBQAEAAAFgCIACAAIAFAAQADACABACQAEgCADACIABAAIAFgCQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAAAIABABQABgBAAABQAAAAABAAQAAABABAAQAAABAAABIABAAQACAFADgCIAFgDQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIAAgBIAAgDIADANIABAMIAAAIQgBAKACAJQABAEACADQADAEAFADQAGADAHgBQALAAACAMQABAKgGAHQgCADgDACIgKAGQABAJgCAKIgDANQgDAJgFAHIgGAGQgCgIAAgHIgSABIgTACQgJABgKgBQgEAAgEABIgBAAIgBAAQgLgEgGgHQgJgCgHAIQgFAHACAHIAHAJIAAABIAMAQIALAQIAFAHQgFAHgIAGQgJAFgKAAIgTAAIgUgCQgJAAgJgBQgKgCgIgFIgIgFIgFgHQgEgHgCgHQACAHAEAHIAFAHIgFATQAOACAPAHIALAEIAGAfIAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAQgGAAgegPgAgyBvIAEgSIgEASgAg1guQgEgEAAgGIAAgCQAAgHAFAAIAAAAIACAAIADABIABABQAJAEACALQgCgLgJgEIgBgBIgDgBIgCAAIAAAAQgFAAAAAHIAAACQAAAGAEAEgABxhwQgHAHgBALQgEAJACAKQACAJAGAJQAFAJAJgBQAKAAAGgJIAAgBQAEgGgBgGIgBgGIgBgEIgKgQQgEgJgIgFQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgDABgAgehAQACgDAAgDIgBgDIABADQAAADgCADgACQhNIgBAAIABAAIADgCIgDACgAAGB2IgCgBIAAgBIACADgAgHBlIAGAHIAEAGIgKgNgAiPAYIAAAAg");
	this.shape_16.setTransform(68.3,33.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AhZCuIgCAAIgEAAIgBAAIgGADIgBAAQgFABgDgFIgCgBIgBAAIgCAAIgJgDQgIgBgFgHIAAgCQAAAAAAgBQgBAAAAgBQgBAAAAgBQgBAAgBAAQgIgBgIABQgFABgCgEIgFgGIgEgDQgPgDgMgQQgLgOgDgTQgFgXAJgUQgPgPgFgWQgDgJADgGQAGgUAWAAQgBgcALgTQAIgOAPABQAhAAABgfQAMgIAOgCQAOgCACgOQAGgkAjANQAGABAEgCQAVgSAeAGIAfAHQALADAPABQAbABAcAMQAcALARAaIAAABIAeAUIAHAGIABAAIAEABIAJAGIACACIAAABQADAKAGAKIAEAEQADAKgBALQAAAOgFAJIgJAOIgGgDIAAAAIgBAAIgBAAIAAAAIgGACIgBAAIgBAAIgEAEIgCAEQgEAJgKADIgBABIgCAAIgCABIAAAAIgBAAIgKgCIAKACIABAAIAAAAIACgBIACAAIABgBQAKgDAEgJIACgEIAEgEIABAAIABAAIAGgCIAAAAIABAAIABAAIAAAAIAGADQgKAQgLANIAAABIAAgBIAAgDIgCgBIgBgBIgBAAIgBAAIAAAAIgEABIAEgBIAAAAIABAAIABAAIABABIACABIAAADIAAABIgQARQgCgFgEgEIgDgCIgCAAIgJAGIgGACIAAAAIAAAAIgBAAIgCgDIgBgCIAAAAIgDgEQgDgCgDgBIgDgBIAAAAIgBABIgCAAIAAAAQgDACgCADIgCAHIACgHQACgDADgCIAAAAIACAAIABgBIAAAAIADABQADABADACIADAEIAAAAIgBABIgBABIAAAAIAAABQgBADABADIAAAAIAAADIAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIgFADQgDACgCgFIgBgBQAAgBAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgFADIgBAAQgDgCgEACQgBgDgDgBIgFAAIgCAAQgFACgEAAIgGABIgCgBIgBAAQgIABgGACQgFACgFAEIgHADIgGABIgDABIgCAAIgOALIgCAAIgCABIgDgBIgDAAQgGgCgEAFIgEADQgFACgFAEIgBACIgBAFIAAABQABAEgEACIgEABIgDgDIAAgBIACgHIAAgBIgBgCIgEgCIgEgBIgGgBIAAAAIgBAAIAAAAIAAAAIgBAAIgHgBIgBgBIgDgDIgDgFIAAgEIAAgEIABgEIAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgEgCIgFgBQgFgCgBgFIAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgCgBIgGgDIgBgCIgCgIIAAgCQAAgFgFgBIgFAAIgBAAIgBAAQgJAAgHgEIgEgDIgCgDIgBgEIgBgGQgBgGgDgCIgEgCIgLgFIgIgBIAIABIALAFIAEACQADACABAGIABAGIABAEIACADIAEADQAHAEAJAAIABAAIABAAIAFAAQAFABAAAFIAAACIACAIIABACIAGADIACABQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABIAAABQABAFAFACIAFABIAEACQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAABIgBAEIAAAEIAAAEIADAFIADADIABABIAHABIABAAIAAAAIAAAAIABAAIAAAAIAGABIAEABIAEACIABACIAAABIgCAHIAAABIgCgCQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABIgDANQgCgEgDgCIgFgDIAAgEQAAgEgCgBIgDAAQgHgDgIAAIAAAAIAAAAIgDgBIAAAAIAAAAIAAAAIgBgBIAAAAIgBgIIAAgCQAAgEgDgDIgCgCIgEgDIgFgCIgIgDIgDgCQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAAAIABgFIAAgDQAAgDgCgCIgEgCIgKgFIgEAAIgLgBQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAIAAgCIABgCIABgFIABgEQAAgDgDgCIgBgBIgDgBIgEgCIgEAAIgBAAIAAAAIgBAAIgDABIgCAAIgDAAIAAAAIgCAAIgCAAIAAAAIgDAAIgBgBIgBgCIAAgBIACgFIAAgEIAAgEIgCgBIgCAAIAAAAIAAAAIgCAAIAAAAIgBAAIgBAAIgBAAIAAAAIgBAAIAAAAIAAAAIgCAAIgCAAIgBAAQgDgCgCgDQgCgEAAgEQAAAEACAEQACADADACIABAAIACAAIACAAIAAAAIAAAAIABAAIAAAAIABAAIABAAIABAAIAAAAIACAAIAAAAIAAAAIACAAIACABIAAAEIAAAEIgCAFIAAABIABACIABABIADAAIAAAAIACAAIACAAIAAAAIADAAIACAAIADgBIABAAIAAAAIABAAIAEAAIAEACIADABIABABQADACAAADIgBAEIgBAFIgBACIAAACQAAAAABABQAAAAABABQAAAAABAAQAAAAABABIALABIAEAAIAKAFIAEACQACACAAADIAAADIgBAFIAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIADACIAIADIAFACIAEADIACACQADADAAAEIAAACIABAIIAAAAIABABIAAAAIAAAAIAAAAIADABIAAAAIAAAAQAIAAAHADIADAAQACABAAAEIAAAEQgGgEgHgBQgEgBgEADQgJAEgHAIQgGAGgDAJQgDAIAEAIIAAABIgEALQgBAEgFAEQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIAAgBIABgHIgBgJIAAgDIgCgBIAAAAIgBAAIAAgBIgCABIgCACIgDAIIgBAAIAAAAIAAABIgCAAIgBAAIAAAAIgFgBQgFgCgBgFIgBgDIABgEIAAgDQAAgDgCgDIgBgCIgBAAQgFABgFACIgCABIgBAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIgEgBIgCgBIgBgDIABgGIAAgBIAAgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgDgCIgDgEIgBAAIgBgBQgEgCgEAAIAAAAIAAAAIgCAAIgBAAIgFACQgDACgBADIgBADQgCAEgEABIgCAAIgCAAIgDgCIgBAAIgEgCQgMgIgBgNQAAgHgDgGQADAGAAAHQABANAMAIIAEACIABAAIADACIACAAIACAAQAEgBACgEIABgDQABgDADgCIAFgCIABAAIACAAIAAAAIAAAAQAEAAAEACIABABIABAAIADAEIADACQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAACIAAABIgBAGIABADIACABIAEABIAAAAIABAAIAAAAIAAAAIAAAAIABAAIABAAIACgBQAFgCAFgBIABAAIABACQACADAAADIAAADIgBAEIABADQABAFAFACIAFABIAAAAIABAAIACAAIAAgBIAAAAIABAAIADgIIACgCIACgBIAAABIABAAIAAAAIACABIAAADIABAJIgBAHIAAABIAAAAIAAACIgBAFQAAAAAAgBQAAAAAAAAQgBgBAAgBQgBAAAAgBgAhjBqIABACIADADIADAGQABADACACQACACADABQgDgBgCgCQgCgCgBgDIgDgGIgDgDIgBgCIAAgBIgCgCIgBAAIgBAAIgBABIgCABIgDAAIAAAAIAAAAIgBAAIgBAAIgBgBIgBgDQgCgDgDgBIgFgBQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIgDgFIgCgCIgBAAIgGABIgBAAIgFABIAAAAIgBAAIAAAAIAAAAIgBAAIgDAAIgFgCIgKgDQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAIgDgEIAAgGIAAAAIAAgBIgCgEIgBgBIAAAAIgBAAIgBABIgNAIIgCAAIgFgDIgDgFIgDgJIADAJIADAFIAFADIACAAIANgIIABgBIABAAIAAAAIABABIACAEIAAABIAAAAIAAAGIADAEQAAAAAAAAQABABAAAAQABABAAAAQABAAABAAIAKADIAFACIADAAIABAAIAAAAIAAAAIABAAIAAAAIAFgBIABAAIAGgBIABAAIACACIADAFQAAAAABABQAAAAAAABQAAAAABAAQAAAAABABIAFABQADABACADIABADIABABIABAAIABAAIAAAAIAAAAIADAAIACgBIABgBIABAAIABAAIACACIAAABgAhGBuIABgEIAAgCIgDgCIAAAAIAAgBIgBAAIgBAAIAAAAIgDABIgEADIgCACIAAAAIgBAAIAAAAIgEgBIAEABIAAAAIABAAIAAAAIACgCIAEgDIADgBIAAAAIABAAIABAAIAAABIAAAAIADACIAAACIgBAEgAhBBbIADADIABAKIgBgKIgDgDIAAgBIgBAAIAAgBIgGgBIAAAAIAAAAIgDABIgGACIAGgCIADgBIAAAAIAAAAIAGABIAAABIABAAIAAABgAhtBNQAFABABAFIABADQADAFAGACIADABIAEgBIAFgCIgFACIgEABIgDgBQgGgCgDgFIgBgDQgBgFgFgBIgEgBIgBAAIAAAAIAAAAQgFAAgEADIgBAAIAAAAIgBAAIgBAAIAAAAIgBAAIAAAAIgCgBIgEgCQgEgDAAgFQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBAAgBAAIgCAAIgDABIgDABIgCAAIgEAAIAAAAIgCAAIAAAAIAAAAIAAAAIgBAAIgBgBIAAAAIgFgGIgCgCIgBgBIAAAAIgBgBIgBAAIgBAAIAAAAIAAAAIgBAAIAAAAIgCABIgIABIAAAAIgBAAIgBAAIgDgBQgCgCgBgDQABADACACIADABIABAAIABAAIAAAAIAIgBIACgBIAAAAIABAAIAAAAIAAAAIABAAIABAAIABABIAAAAIABABIACACIAFAGIAAAAIABABIABAAIAAAAIAAAAIAAAAIACAAIAAAAIAEAAIACAAIADgBIADgBIACAAQABAAABAAQAAAAAAABQABAAAAABQAAABABAAQAAAFAEADIAEACIACABIAAAAIABAAIAAAAIABAAIABAAIAAAAIABAAQAEgDAFAAIAAAAIAAAAIABAAIAEABgAhRBbQgCgJAAgHIAAgCIgBAAIgDgBQgDAAgEAAIgBAAIgBgBIAAAAIgCgEIABgDIADgHIAAgCIgBgBQgEgEgFAAIAAAAIAAAAIgBAAIgBAAIgBABIgBAAIgEADIgDACIgDABIgCAAIgBAAIAAAAIAAAAIgFgBIgBAAIgBgBIAAAAIAAAAQgDgEgBgEIgBgFIgBgGIAAAAIgCgCIgDgBIAAAAIAAAAIgBAAIgFABIgHACIgFADIgEACIgBAAIAAAAIgDgBIgEgBIgEgCIgDgEIgBgBIgBAAQgEgFgHAAIAAAAIAAAAIgDAAIAAABQgDAAgGADIABgZIAAgLIAAALIgBAZQAGgDADAAIAAgBIADAAIAAAAIAAAAQAHAAAEAFIABAAIABABIADAEIAEACIAEABIADABIAAAAIABAAIAEgCIAFgDIAHgCIAFgBIABAAIAAAAIAAAAIADABIACACIAAAAIABAGIABAFQABAEADAEIAAAAIAAAAIABABIABAAIAFABIAAAAIAAAAIABAAIACAAIADgBIADgCIAEgDIABAAIABgBIABAAIABAAIAAAAIAAAAQAFAAAEAEIABABIAAACIgDAHIgBADIACAEIAAAAIABABIABAAQAEAAADAAIADABIABAAIAAACQAAAHACAJgAgKBNIACABIAFAJIgFgJIgCgBIgCAAIAAAAIgBAAIAAAAIgBAAIgBgBIAAAAIAAAAIgEgEIAAgCIAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgCgBQgCgDgBgDQgBgHgDgGIgBgDIAAAAIAAgBQgDgEAAgFIAAgBIAAgCIABgHIAAgBIAAgDIAAgDIgBgFQgDgGgEgDIgDgCQgFgBgEgEQgCgCAAgDIAAAAIAAgEIABgJIAAgBIAAgBQAAgGgDgEQgDgFgEgDIgJgEQgDgCgCgDQgCgDgBgFIgBgBIgBgBQgVgZgTAAIgBAAIAAAAIgEAAIAEAAIAAAAIABAAQATAAAVAZIABABIABABQABAFACADQACADADACIAJAEQAEADADAFQADAEAAAGIAAABIAAABIgBAJIAAAEIAAAAQAAADACACQAEAEAFABIADACQAEADADAGIABAFIAAADIAAADIAAABIgBAHIAAACIAAABQAAAFADAEIAAABIAAAAIABADQADAGABAHQABADACADIACABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAIAAABIAAACIAEAEIAAAAIAAAAIABABIABAAIAAAAIABAAIAAAAIACAAgAgGA+QABADACABIACACIADABIAFACIADAGIgDgGIgFgCIgDgBIgCgCQgCgBgBgDIAAgCIABgGIABgDIgBgDQgBgEgEgBIgEgCIgCgBQgBgDAAgDIAAgBIAAgDIAAgCIgBgEIgDgEIgBgCIAAgCIABgFIAGgKIABgCIAAgBIAAgDQgDgFgDgDIgDgDQgFgFgCgFIAAgEQAAgGAEgGIAAgBIABgCIAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBIgEgCQgEgCgDAAIgBAAIAAAAIAAAAIgCAAIgFAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIgCgDIgBgEIgBgFIABgDIgBgBIAAgBQgJgUgYAAIgBAAIAAAAIgEAAIgBAAIAAAAIgBAAQgFAAgCgEIAAgBIAAgCQAAgEADgEQgDAEAAAEIAAACIAAABQACAEAFAAIABAAIAAAAIABAAIAEAAIAAAAIABAAQAYAAAJAUIAAABIABABIgBADIABAFIABAEIACADQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAFAAIACAAIAAAAIAAAAIABAAQADAAAEACIAEACQABABAAAAQABABAAAAQAAAAABABQAAAAAAABIAAABIgBACIAAABQgEAGAAAGIAAAEQACAFAFAFIADADQADADADAFIAAADIAAABIgBACIgGAKIgBAFIAAACIABACIADAEIABAEIAAACIAAADIAAABQAAADABADIACABIAEACQAEABABAEIABADIgBADIgBAGIAAACgAAIA2QAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAGAGAJAFQgJgFgGgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgBgFIABgEIAAgBIAAAAIgCgCQgGgDgBgFIgDgDIAAgGIAAgFQADgJAFgIIACgDIABgEIgBgFQgBgDgDgBIgBgCIgFgHIgCgDIAAgEIAAgGIAEgLIABgDIAAgBQAAgGgDgEIgBgBIgBgCQgEgCgEAAIgBgBQgEgDgCgEQACAEAEADIABABQAEAAAEACIABACIABABQADAEAAAGIAAABIgBADIgEALIAAAGIAAAEIACADIAFAHIABACQADABABADIABAFIgBAEIgCADQgFAIgDAJIAAAFIAAAGIADADQABAFAGADIACACIAAAAIAAABIgBAEIABAFgAAeA0IABACQAFAGAGAFQgGgFgFgGIgBgCIAAgBIAAgBIAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIAEgCQAFgCAFgFIABgCIgBgFIgDgEIgIgLIgBgCIgBgFQAAgFAFgEIADgDIAFgFIABgCQgBgHgFgEIgFgEIgBgDIAAgBQAAgEADgCIACgBIAAAAIABAAIACgBIABgBIABgDIAAgCQAAgDgCgDIgDgCIgDgCIgCgDIABgCIABgBQADgGAFgFIADgDIACgCIACgDIgBgDIgDgGIAAgDQAAgDADgDQADgDADgBQgTgEgLgXQgfgLgJgZQAJAZAfALQALAXATAEQgDABgDADQgDADAAADIAAADIADAGIABADIgCADIgCACIgDADQgFAFgDAGIgBABIgBACIACADIADACIADACQACADAAADIAAACIgBADIgBABIgCABIgBAAIAAAAIgCABQgDACAAAEIAAABIABADIAFAEQAFAEABAHIgBACIgFAFIgDADQgFAEAAAFIABAFIABACIAIALIADAEIABAFIgBACQgFAFgFACIgEACQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIAAABIAAABIAAABgAA5AmIACAFQADAGAAAHQAAgHgDgGIgCgFIgBgEIAAAAIABAAQAFAAAEACIADABIAAAAIAAAAIACgCIAAgBIAAgCIgBgDIgCgDIgEgGIgBgCQAAgDADgBIAEgCIABAAIABAAIABAAIACgBIAAAAIABAAIAAAAIADABIAAgBQAAgCgDgCIgJgIIgDgCQgDgDgBgEIAAgDIAAgDIABgDQAEgHAHgDQACgCAAgDIAAgCIgBgDIgGgPIgBgFIAAgBQACgJACgIIABgCIADgEQAGgFAFgGQACgDAAgDIAAAAIgBgGIgBgBQgFgOgKAAIAAAAIAAAAQgFAAgGADIAAABIAAgGQAAgVgRgLQARALAAAVIAAAGIAAgBQAGgDAFAAIAAAAIAAAAQAKAAAFAOIABABIABAGIAAAAQAAADgCADQgFAGgGAFIgDAEIgBACQgCAIgCAJIAAABIABAFIAGAPIABADIAAACQAAADgCACQgHADgEAHIgBADIAAADIAAADQABAEADADIADACIAJAIQADACAAACIAAABIgDgBIAAAAIgBAAIAAAAIgCABIgBAAIgBAAIgBAAIgEACQgDABAAADIABACIAEAGIACADIABADIAAACIAAABIgCACIAAAAIAAAAIgDgBQgEgCgFAAIgBAAIAAAAIABAEgAgsAmIACAGIABAKIgBgKIgCgGQgCgEAAgEQAAgFACgEIABgDIAAgBIAAAAIgCgBIgGgCQgEAAgCgFIgBgCIABgDIgBgDIAAgBIAAgBQgBgDgDgBIgBgBIgBAAIgBAAIAAAAIgBAAIgEAAIgFgBIAAAAIgCgBIAAAAIAAgBQgEgDAAgFIABgEIACgHIAAgBQAAgEgEgEQgEgFgGgCIgJgCIAJACQAGACAEAFQAEAEAAAEIAAABIgCAHIgBAEQAAAFAEADIAAABIAAAAIACABIAAAAIAFABIAEAAIABAAIAAAAIABAAIABAAIABABQADABABADIAAABIAAABIABADIgBADIABACQACAFAEAAIAGACIACABIAAAAIAAABIgBADQgCAEAAAFQAAAEACAEgABRAoIADAKIgDgKIAAgEQAAgFACgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAEgDIAFgBIADgDIACgCIAAgCIgBgDIgCgEIgEgDIgDgDIgBgBIAAAAQABgKAGgIIACgEIABgCIAAgCIgBgCIgBgCQgCgCgBgDIAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAEgDAGgBQAFgBAEgEIABgCIABgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgFgCIgDAAIAAAAIgBAAIAAgBIAAAAIAAgBIAAgDQACgFAFgDQAEgCADgDIAAgBIgBgCIgEgCIgFgBIgEgCIAAgCIAAgCIACgCIABgBIAAgBIAAAAIAAgCIgBgDIABADIAAACIAAAAIAAABIgBABIgCACIAAACIAAACIAEACIAFABIAEACIABACIAAABQgDADgEACQgFADgCAFIAAADIAAABIAAAAIAAABIABAAIAAAAIADAAIAFACQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAIgBACIgBACQgEAEgFABQgGABgEADQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIAAAAQABADACACIABACIABACIAAACIgBACIgCAEQgGAIgBAKIAAAAIABABIADADIAEADIACAEIABADIAAACIgCACIgDADIgFABIgEADQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQgCAEAAAFIAAAEgAB4ApQAAAEAEADQgEgDAAgEIAAgFIAAgCIACgGIAEgDIAEgCIABAAIABABIAEACIADADIABABIABAAIAAAAIABAAIABAAQAHgEADgGIABgEIAAgDIgBgEIAAgBIAAAAIABgBIAEgCIAHgDIAEgBQADAAACgBIAGgQIAEgLIAKgSIAEgHIADAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIACAAQACgDAAgDIAAgBIgBgEQgEgGgFgEQAFAEAEAGIABAEIAAABQAAADgCADIgCAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgDAAIgEAHIgKASIgEALIgGAQQgCABgDAAIgEABIgHADIgEACIgBABIAAAAIAAABIABAEIAAADIgBAEQgDAGgHAEIgBAAIgBAAIAAAAIgBAAIgBgBIgDgDIgEgCIgBgBIgBAAIgEACIgEADIgCAGIAAACIAAAFgAg6ApIABABIAAAAIgBgBIAAgBIAAAAIAAgCIABgEIAAgBQAAgEgDgBQgDgCgCgCIgCgDQgDgCAAgDIAAgBIAAgBIAAgEIAAgCIgBgCIgCgBIgCAAIAAAAIgCgBIgBAAIAAAAIgBAAIAAAAIgLgBQgFgBgCgDIgBgCIgBgDIAAgBIAAgCIAAgEIAAgEQAAgHgHgDIgFgCQgIgFgDgJQADAJAIAFIAFACQAHADAAAHIAAAEIAAAEIAAACIAAABIABADIABACQACADAFABIALABIAAAAIABAAIAAAAIABAAIACABIAAAAIACAAIACABIABACIAAACIAAAEIAAABIAAABQAAADADACIACADQACACADACQADABAAAEIAAABIgBAEIAAACIAAAAIAAABIAAAAgAAQAoQAGgHAAgKIAAgBIAAgEQgBgFgEAAIgBAAIgBAAIAAAAIgBgBIAAgCIACgFIAJgIIADgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgBQAAgFgEgDIgHgGQgEgCgCgEIgCgDIgBgDIAAgCQAAgHADgFIACgEIABgDIAFgIIACgEIABgEQAAgEgDgDIgBgCIgBgBIgLgIIALAIIABABIABACQADADAAAEIgBAEIgCAEIgFAIIgBADIgCAEQgDAFAAAHIAAACIABADIACADQACAEAEACIAHAGQAEADAAAFIAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgDACIgJAIIgCAFIAAACIABABIAAAAIABAAIABAAQAEAAABAFIAAAEIAAABQAAAKgGAHgABmAmIAAgCQAAgJACgHIAFgLQADgEAAgFIAAgBIAAgBIgBAAIAAgBIAEAAIADAAIAAAAIAAAAIAFAAIAFgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIACgDIAAgEIAAgEIgCgFIgBgDIgBgDQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIAAAAIAFgCIABAAIAAAAIAFABIAAAAIAAAAIABABIAEABIAAAAIABAAIAAAAIABAAIABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIABgDIAAAAIAAgBIgBgDIgBgEIgBgCIABgCIADgCIADgBIABAAIAAAAIAEABIAEACIABABIABAAIACAAQAHgDAAgHQAAgIADgGQgDAGAAAIQAAAHgHADIgCAAIgBAAIgBgBIgEgCIgEgBIAAAAIgBAAIgDABIgDACIgBACIABACIABAEIABADIAAABIAAAAIgBADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgBAAIgBAAIAAAAIgBAAIAAAAIgEgBIgBgBIAAAAIAAAAIgFgBIAAAAIgBAAIgFACIAAAAQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIABADIABADIACAFIAAAEIAAAEIgCADQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgFABIgFAAIAAAAIAAAAIgDAAIgEAAIgBgBIABACIABAAIAAABIAAABQAAAFgDAEIgFALQgCAHAAAJIAAACgABxAkIgBgFIABgDQAAgFACgEQACgCADgCIAFgCIACAAIACgBQADgFABgFIABgDQABgHAGgBIACAAIABAAIAAAAIAAAAIADAAIAEABIADAAQAIgBADgGIACgFIgBgDIgDgKIAAgBIABgBIADAAIAJAAIADgBQADgDAAgEIAAgCIgBgCIgCgDIABgBQAEgCAEgBIABAAIAAAAIABAAIABABIAHAAIAAABIAAgBIgHAAIgBgBIgBAAIAAAAIgBAAQgEABgEACIgBABIACADIABACIAAACQAAAEgDADIgDABIgJAAIgDAAIgBABIAAABIADAKIABADIgCAFQgDAGgIABIgDAAIgEgBIgDAAIAAAAIAAAAIgBAAIgCAAQgGABgBAHIgBADQgBAFgDAFIgCABIgCAAIgFACQgDACgCACQgCAEAAAFIgBADIABAFgACpAMQgBADgDACIgGADIAGgDQADgCABgDIAAgDIAEAAIABAAIABABIAAAAIABAAIABAAIAAAAIAAAAIABgBIABAAIAAAAIABgBIAAAAQAFgDACgFIAAgCIgBgGIABAAIAAAAIABAAIAFAAQAHgBAAgGIAAgBIAAgCIgBgEQAAgGAEgEIABgBIAFABIABAAIAAAAIACAAIACgBIAAgBQAEgBAEgEQgEAEgEABIAAABIgCABIgCAAIAAAAIgBAAIgFgBIgBABQgEAEAAAGIABAEIAAACIAAABQAAAGgHABIgFAAIgBAAIAAAAIgBAAIABAGIAAACQgCAFgFADIAAAAIgBABIAAAAIgBAAIgBABIAAAAIAAAAIgBAAIgBAAIAAAAIgBgBIgBAAIgEAAIAAADgAiPgQQAMADAAAEQAAgEgMgDQgfgLgCgaQACAaAfALgAB8grQgCAEgEADIgGAEIAGgEQAEgDACgEIABgEIAAgEIAAgBIAAgBQABgDADgBIAHgCIAGgDIABgCIAAAAIAAAAIgBgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgDQACgEAFgBIAEgDQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAIABgEQAAgFgCgFQgNgRgRgRQARARANARQACAFAAAFIgBAEQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgEADQgFABgCAEIAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIABACIAAAAIAAAAIgBACIgGADIgHACQgDABgBADIAAABIAAABIAAAEIgBAEgAiKgoQAHAAAJgDQgJADgHAAIgBAAIAAAAQgRAAgIgOIgBAAIABAAQAIAOARAAIAAAAIABAAgAhlguQgOgXgVgDQAVADAOAXgAguhjQAIAVARAFQgRgFgIgVQgbgKgHgbQAHAbAbAKgAAIhbIgIgVIAAAAIAAABIAAAAQgFACgEAAIAAAAIAAAAQgKAAgEgPIAAgCQgDgLgNgHQANAHADALIAAACQAEAPAKAAIAAAAIAAAAQAEAAAFgCIAAAAIAAgBIAAAAIAIAVgABqheIAAABIAAgBIAAAAIAEgQIACgJQAAgVgggBQAgABAAAVIgCAJIgEAQIAAAAgACZBBIgDgNIAAAAIAAgCIAAgCIAAgCIAAgBIAAAAIABgBIABgBIABACIACADIABAAIAAAAIAAAAIAGgCIAJgGIACAAIADACQAEAEACAFQgOAPgOALIgBgMgACYArgADbAEIAAAAgABvgCIAAAAgAg1hIIAAAAgAA5hkIAAAAg");
	this.shape_17.setTransform(67.2,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(14));

	// body
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.1,1,1).p("ABSjJQARAiAaAUQAZAVAdAJIAgAPQAQAiAEAVQAHAhALAjQAMAmgcAgQgYAaglACAAOCVQAJACAJADAjCBRQBXAbBKAaQAYAIAXAHQgxgKgzAiQhOA0hXgq");
	this.shape_18.setTransform(50.4,58.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.1,1,1).p("AAbByQgcgNgbgcQgZgbACgpQACgnAXghQAWggAfgPQAUgBAWgCQAOgBAPgCQAngGAkgHQATgEATgCQATgCATAAQAfgBAdAFQAfAFAfACQApACAdAZQAfAagGAqQgGAlgVAhQgVAhgVAaQgHAJgIAIQgEAHgEAHQgPAWgWAQQgUAPgUARQgKAIgJAJQgbAZgaAZQgYAYgZAYQgLALgKAKQgHgEgGgEAA+mpQATAWAKAdQACAHACAIQAJAogIAjQAuAEA2gJQAOgDAPACQAKgIgDgaQgBgRgGgQQgBgCgIgeAidj4QABADAAADQAAAJAAAKQgFgHADgMQAAgDABgDQAMAGASAEQAjAJApgFQAmgFAZgWQAdgZAJghQACgIABgHQAFghgYgcAgWCNIgBAAQgjALgpgDQgogCgbgUQgdgVgTgfQgTghgGgjQgGglAQghQAHgNAIgLQALgRAOgNQAbgbAEglQABgFAAgDQABgTAAgPAAbByQAcAFAmgNQAmgMAcgWQAcgXAZgWQADgDADgCQAUgRAWgQADaAWQgDAogTAdQgTAegWAeQgXAggKAlQgGAXgHAXQgBABAAAAQgEAMgEAMQgJAZgSASQgJAeAYAKACXFQQACgDACgCQAXAMAdAFQAlAGAoAAQAYAAAWgEQAOgDANgEQAcgKgHAgQgGAjgnAFQgmAFgogBQgngBgnACQgoABgmgEQgHgBgHgBQgggDgdAEQgjAEAGgcQgLAFgNADQgeASgmgJQgkgJgjgRQgkgSgnAEQgYADgYAMQgjASggARQgWAMgeAEQguAHgKgbQAigQANgsQAUgTgJAKQAsgkAeghQAMgIAQgGQAggNAUAVQAZAaAiAHQAnAIAjgLQAngNAfgLQAbgKAkgDQApgEAaAIQgIgOgJgPQgRgcgbgaQgSgSgWgQQAfgOASgNAEpDDQAKAgAJAjQAJAkACAkQABAKACAGABJFOQgIAHgIAGQgeAVggAOAmjFZQAGgFAFgEAgWCNQgIgGgIgF");
	this.shape_19.setTransform(46.7,85.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("Ah7EfQgogCgbgUQgdgVgTgfQgTghgGgjQgGgmAQghQAHgMAIgMQBXApBOg0QAzghAxAKIASAEIgSgEIgvgQQhKgZhXgaIABgiIAAgTIAdAEQAjAJApgFQAmgFAagWQAcgZAJghIADgOQAFgigYgbIANgQIAPgPQATAWAKAdIAEAPQAJAogIAjQAuAEA2gJQAOgDAPACQAKgIgDgaQgBgRgGgPIgJghIAgAPQAQAjAEAVQAHAhALAkQAMAmgcAgQgYAaglACIABAMQgTABgSAEQgkAHgnAGIgdADQgWADgUAAQgfAPgWAgQgXAhgCAoQgCApAZAbQAbAcAcANQgRANggAOIgQgLIAQALIgBAAQgcAJgfAAIgRgBgAguEXIAAAAg");
	this.shape_20.setTransform(49.1,72.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CE9F6E").s().p("AnSGsQAigQANgsIALgJQAsgkAeghQAMgIAQgGQAggNAUAVQAZAaAiAHQAnAIAjgLQAngNAfgLQAbgKAkgDQApgEAaAIIgRgdQgRgcgbgaQgSgRgWgRQAfgOASgNIACABIACAAIAMABIAAAAIAAAAQAVAAAagJIABAAIACgBQAmgMAcgWQAcgXAZgWIAGgFQAUgRAWgRQgWARgUARIgGAFQgZAWgcAXQgcAWgmAMIgCABIgBAAQgaAJgVAAIAAAAIAAAAIgMgBIgCAAIgCgBQgcgNgbgcQgZgbACgpQACgnAXghQAWggAfgPQAUAAAWgDIAdgDQAngGAkgHQATgEATgCQATgCATAAQAfgBAdAFQAfAFAfACQApACAdAZQAfAagGAqQgGAlgVAhQgVAhgVAaIgPARIgIAOQgPAWgWAQQgUAPgUARIgTARIg1AyIgxAwIgVAVIgNgIIANAIIAVgVIAxgwIA1gyIATgRQAKAgAJAjQAJAkACAkQABALACAFQAOgCANgFQAcgKgHAgQgGAjgnAFQgmAFgogBQgngBgnACQgoABgmgEIgOgCQgggDgdAEQgjAEAGgcQgLAFgNADQgeASgmgJQgkgJgjgRQgkgSgnAEQgYADgYAMIhDAjQgWAMgeAEIgRACQgfAAgIgWgAA5FyQgeAVggAOQAggOAegVQAIgGAIgHQgDAIAAAHQAAASASAHQgSgHAAgSQAAgHADgIQgIAHgIAGgADPFzQAlAGAoAAQAYAAAWgEQgWAEgYAAQgoAAglgGQgdgFgXgMIgEAFIAEgFQAXAMAdAFgADEByQgTAegWAeQgXAggKAlQgGAYgHAXIgBAAIgIAYQgJAZgSASQASgSAJgZIAIgYIABAAQAHgXAGgYQAKglAXggQAWgeATgeQATgdADgoQgDAogTAdgAjWhAQALgQAOgOQAbgbAEglIABgIQBXAaBJAaIAxAQQgzgKgyAhQgrAdguAAQglAAgngSgABgkFQAIgjgJgoIgEgPQgKgdgTgWQATgTAWgQIAQgMQASAiAZAUQAZAVAdAIIAJAhQAGAPABARQADAagKAIQgPgCgOADQglAGghAAIgegBg");
	this.shape_21.setTransform(46.7,83.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("ABSjJQARAiAaAUQAZAVAdAJIAgAPQAQAiAEAVQAHAhALAjQAMAmgcAgQgYAaglACAjCBRQBXAbBKAaQAYAIAXAHQAJACAJADAAOCVQgxgKgzAiQhOA0hXgq");
	this.shape_22.setTransform(50.4,58.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.1,1,1).p("AAbByQgcgNgbgcQgZgbACgpQACgnAXghQAWggAfgPQAUgBAWgCQAOgBAPgCQAngGAkgHQATgEATgCQATgCATAAQAfgBAdAFQAfAFAfACQApACAdAZQAfAagGAqQgGAlgVAhQgVAhgVAaQgHAJgIAIQgEAHgEAHQgPAWgWAQQgUAPgUARQgKAIgJAJQgbAZgaAZQgYAYgZAYQgLALgKAKQgHgEgGgEAA+mpQATAWAKAdQACAHACAIQAJAogIAjQAuAEA2gJQAOgDAPACQAKgIgDgaQgBgRgGgQQgBgCgIgeAicjfQgFgHADgMQAAgDABgDQAMAGASAEQAjAJApgFQAmgFAZgWQAdgZAJghQACgIABgHQAFghgYgcAicjfQAAgKAAgJQAAgDgBgDAgWCNIgBAAQgjALgpgDQgogCgbgUQgdgVgTgfQgTghgGgjQgGglAQghQAHgNAIgLQALgRAOgNQAbgbAEglQABgFAAgDQABgTAAgPAAbByQAcAFAmgNQAmgMAcgWQAcgXAZgWQADgDADgCQgDAogTAdQgTAegWAeQgXAggKAlQgGAXgHAXQgBABAAAAQgEAMgEAMQgJAZgSASQgIAHgIAGQgeAVggAOQgLAFgNADQgeASgmgJQgkgJgjgRQgkgSgnAEQgYADgYAMQgjASggARQgWAMgeAEQguAHgKgbQAigQANgsQAGgFAFgEQAsgkAeghQAMgIAQgGQAggNAUAVQAZAaAiAHQAnAIAjgLQAngNAfgLQAbgKAkgDQApgEAaAIQgIgOgJgPQgRgcgbgaQgSgSgWgQQgIgGgIgFADaAWQAUgRAWgQACXFQQACgDACgCQAXAMAdAFQAlAGAoAAQAYAAAWgEQAOgDANgEQAcgKgHAgQgGAjgnAFQgmAFgogBQgngBgnACQgoABgmgEQgHgBgHgBQgggDgdAEQgjAEAGgcAEpDDQAKAgAJAjQAJAkACAkQABAKACAGABJFOQgJAeAYAKAmjFZQAUgTgJAKAgWCNQAfgOASgN");
	this.shape_23.setTransform(46.7,85.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("Ah7EfQgogCgbgUQgdgVgTgfQgTghgGgjQgGgmAQghQAHgMAIgMQBXApBOg0QAzghAxAKIASAEIgSgEIgvgQQhKgZhXgaIABgiIAAgTIAdAEQAjAJApgFQAmgFAagWQAcgZAJghIADgOQAFgigYgbIANgQIAPgPQATAWAKAdIAEAPQAJAogIAjQAuAEA2gJQAOgDAPACQAKgIgDgaQgBgRgGgPIgJghIAgAPQAQAjAEAVQAHAhALAkQAMAmgcAgQgYAaglACIABAMQgTABgSAEQgkAHgnAGIgdADQgWADgUAAQgfAPgWAgQgXAhgCAoQgCApAZAbQAbAcAcANQgRANggAOIgQgLIAQALIgBAAQgcAJgfAAIgRgBg");
	this.shape_24.setTransform(49.1,72.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CE9F6E").s().p("AnSGsQAigQANgsIALgJQAsgkAeghQAMgIAQgGQAggNAUAVQAZAaAiAHQAnAIAjgLQAngNAfgLQAbgKAkgDQApgEAaAIIgRgdQgRgcgbgaQgSgRgWgRQAfgOASgNIACABIACAAIAMABIAAAAIAAAAQAVAAAagJIABAAIACgBQAmgMAcgWQAcgXAZgWIAGgFQgDAogTAdQgTAegWAeQgXAggKAlQgGAYgHAXIgBAAIgIAYQgJAZgSASQASgSAJgZIAIgYIABAAQAHgXAGgYQAKglAXggQAWgeATgeQATgdADgoIgGAFQgZAWgcAXQgcAWgmAMIgCABIgBAAQgaAJgVAAIAAAAIAAAAIgMgBIgCAAIgCgBQgcgNgbgcQgZgbACgpQACgnAXghQAWggAfgPQAUAAAWgDIAdgDQAngGAkgHQATgEATgCQATgCATAAQAfgBAdAFQAfAFAfACQApACAdAZQAfAagGAqQgGAlgVAhQgVAhgVAaIgPARIgIAOQgPAWgWAQQgUAPgUARIgTARIg1AyIgxAwIgVAVIgNgIIANAIIAVgVIAxgwIA1gyIATgRQAKAgAJAjQAJAkACAkQABALACAFQAOgCANgFQAcgKgHAgQgGAjgnAFQgmAFgogBQgngBgnACQgoABgmgEIgOgCQgggDgdAEQgjAEAGgcQAggOAegVQAIgGAIgHQgIAHgIAGQgeAVggAOQgLAFgNADQgeASgmgJQgkgJgjgRQgkgSgnAEQgYADgYAMIhDAjQgWAMgeAEIgRACQgfAAgIgWgABYGNQgSgHAAgSQAAgHADgIQgDAIAAAHQAAASASAHgADPFzQAlAGAoAAQAYAAAWgEQgWAEgYAAQgoAAglgGQgdgFgXgMIgEAFIAEgFQAXAMAdAFgADaAtQAUgRAWgRQgWARgUARgAjWhAQALgQAOgOQAbgbAEglIABgIQBXAaBJAaIAxAQQgzgKgyAhQgrAdguAAQglAAgngSgABgkFQAIgjgJgoIgEgPQgKgdgTgWQATgTAWgQIAQgMQASAiAZAUQAZAVAdAIIAJAhQAGAPABARQADAagKAIQgPgCgOADQglAGghAAIgegBg");
	this.shape_25.setTransform(46.7,83.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-18.4,95.4,148);


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
		var bgm = createjs.Sound.play('bgmSub',{loop:-1});
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
		
		 window.open ("subject_scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("subject_scene2.html","_self");
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

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-486.5,-13,534.3,401.8), null);


(lib.DiagramVERB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		playSound("whoorwhatdoes");
	}
	this.frame_40 = function() {
		playSound("buffythrows");
	}
	this.frame_52 = function() {
		playSound("cowbell_3times");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(35).call(this.frame_40).wait(12).call(this.frame_52).wait(46));

	// textClips
	this.instance = new lib.SentencesVERB();
	this.instance.parent = this;
	this.instance.setTransform(-248.3,712.9,1,1,0,0,0,50.7,14.6);

	this.instance_1 = new lib.Wordscomplement();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-86,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_2 = new lib.Wordssubject();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-434.9,431.8,1,1,0,0,0,50.7,19.7);

	this.instance_3 = new lib.Wordsverb();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-272.7,426.5,1,1,0,0,0,50.7,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},19).to({state:[{t:this.instance_3},{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},12).wait(67));

	// TEXT
	this.instance_4 = new lib.header();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-280.7,337.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98));

	// images
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgvBKQgFgEAAgGIAAhmIgBgOIABgMQABgKAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAFAHAJQAJAKAAALQAAANgPALQgJAIgKAEQgWAIgjAAQgGAAgEgFgAgaA1QARgBATgGQARgFAAgFQAAgIgLgGQgJgEgHgBIgagBgAgZgfIgBAVIAOABQAdgCAAgVQAAgHgJgFQgIgIgKAAIgQAAg");
	this.shape.setTransform(-252.7,510.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag0BJQgFgEAAgGIAAgVIABgWIAAhOQAAgHAEgFQAFgGAIAAIAZACQANACAJAFQAqAVAAAfQAAAMgJAJQgJAKgRAHQAaAOANAPQADAEABAFQgBAGgEAEQgEADgGAAQgFAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgFAAgEgEgAgeADIAFAAQAXAAALgFQAFgDAFgEQADgEAAgCQAAgLgOgKQgMgKgOgBIgMgBg");
	this.shape_1.setTransform(-265.5,510.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgtBKQgKgJgBgfIACgnIADgnIgBgKIgCgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQgBAFgDAEQgEAFgGgBIgEgBQgQgDgPAAIgPABIgRADIgBAnIAlgEIAXgCQAGAAAEAEQAEADAAAGQAAALgMACIgYABIgpAFIAAAUQAAASADADQABABALAAIARAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgLACQgKACgeAAQggAAgKgJg");
	this.shape_2.setTransform(-278.1,510.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgVBFQgLgcgPg1IgIgaQgFgSgBgHQABgHAEgDQAEgDAGgBQAJAAADAKIAEARIAJAgIAPAwIAXg6IAIgXQAGgOAGgIQAFgFAFAAQAHAAADAEQAFAEAAAGQAAAEgDADQgFAIgFAKIgHAUIgaBCQgFAMgGAMQgEAIgIAAQgJAAgFgKg");
	this.shape_3.setTransform(-291.3,510.6);

	this.sitClip = new lib.anim_buffy_toss();
	this.sitClip.parent = this;
	this.sitClip.setTransform(-435.7,526.5,0.801,0.801,0,0,0,48.7,66.2);

	this.instance_5 = new lib.Wordsthrows();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-266.9,508.4,1,1,0,0,0,73.5,16);

	this.instance_6 = new lib.anim_buffy_throws();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-311,522.2,0.732,0.732,0,0,0,46.6,55.6);

	this.instance_7 = new lib.BuffyThrowsStatic("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-310.9,527.2);

	this.instance_8 = new lib.static_ball("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-322.4,485.8,0.723,0.723,0,0,0,23,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sitClip},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_5},{t:this.sitClip}]},34).to({state:[{t:this.instance_6},{t:this.sitClip}]},11).to({state:[{t:this.instance_5},{t:this.sitClip}]},8).to({state:[{t:this.sitClip},{t:this.instance_6}]},18).to({state:[{t:this.instance_8},{t:this.sitClip},{t:this.instance_7}]},13).wait(14));

	// right bar
	this.instance_9 = new lib.static_bar();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-164.7,465.4,1.176,45.595,0,0,0,0.1,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(98));

	// left bar
	this.instance_10 = new lib.static_bar();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-371.1,465.7,1.176,75.633,0,0,0,0.1,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(98));

	// line1
	this.instance_11 = new lib.static_line("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-22,579.3,2.797,2.236,0,-116.6,0,164,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(98));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-508.9,346.2,489.9,381.3);


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
(lib.subject_scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3repeat:85});

	// timeline functions:
	this.frame_101 = function() {
		this.gotoAndPlay("scene3repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(101).call(this.frame_101).wait(1));

	// Scene
	this.instance = new lib.DiagramVERB();
	this.instance.parent = this;
	this.instance.setTransform(457.9,-14.7,1,1,0,0,0,-66.2,329.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102));

	// Nav
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Background("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,195.5,1.069,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,401.5);
// library properties:
lib.properties = {
	id: 'CC0F1AA0B6EEFE4DA7BDFBFD0045FFC1',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmSub.mp3", id:"bgmSub"},
		{src:"sounds/ball_throw.mp3", id:"ball_throw"},
		{src:"sounds/buffythrows.mp3", id:"buffythrows"},
		{src:"sounds/cowbell_3times.mp3", id:"cowbell_3times"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/whoorwhatdoes.mp3", id:"whoorwhatdoes"},
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
an.compositions['CC0F1AA0B6EEFE4DA7BDFBFD0045FFC1'] = {
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