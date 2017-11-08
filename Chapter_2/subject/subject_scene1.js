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


(lib.anim_buffy_throws_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		playSound("ball_throw");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(11));

	// arm
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhCjIQgBgFgBgFQAAgBAAAAQgBgIgBgIQAAgBAAgBQgCgYAKgDQAIgDAQALQAFADADAHQABASACARQAAACAAABQAKAFAFAIQADAGADAJQABAEABAGQAAgBAAgBQAAACABABQAAAAgBgBQAFANAFAJQD0AdALAkQAGAQgYAhIgfAWIgrAeQgEAEgFADQgJAHgKAHQgVAOgUAPQgIAGgIAFQgWAQgTATQgIAIgHAHQgHAIgGAIQgPAVgMAYQgLAUgFATAgvjQQgIgFgGADAhZjJQABAAABAAQAFAAAFAAQAGAAAFABQAFAQAHAPAhahiQANgCANgFQABgBAAAAQAOgFAIgNQAHgLACgPABWg5QhegOgHgCQgJgFgJgFQAAAAgBgBIAAAAQgZAAgdgDQAAAAgBAAQgBAAgCAAQgBAAAAAAQgXAcgdgJQgOgFgOgIQgBgBAAAAQgBAAAAgBQgEgCgDgCQgTgNgQgEQgEgBgFAAQgRgHgEgKQgFgMAPgPQAEgDAIABQAFABAGAFQADACACADQACACACACQACACACADQACACABABQABABABABQABAAAAABQABABABABQgBgCgBgBIAAAAIAAAAQgBgBAAgBIgBgBQgIgMgGgHQgHgJgDgDQgDgEgGgEQgGgEgEgGQgBgBAAAAQgBgBAAAAQgCgDgDgEQgIgOgFgVQgGgXAQgGQASgHAHAgQAHAcATAJQACABABABQABAAABAAQADABADABQgEgGgEgFQgBgCgBgBQgCgCgBgCQgBgBgCgCQgKggADgnQAGABAFABQAcAIAFAhQAEAXASAWQABABAAABQAFAGAEAEAgbjIQABAJABAKAheAiICJhOIArgNIBLgVAiBi8QAAgDAAgEQAAgDAAgEQgBgBAAgBQgGgYgHgXQgCgIgBgGQAAgBAAgBQAAAAAAgBQAAgCAAgBQAAgWAUgFQAHgCAFAFQAOAOgDATQgEAfASAeIAAAAQAEAGAFAGQACAEADADAhtjEQgDgCgEgCAiBi8IAAAAQAAABgBABQgBARAJANQALARAOgLAh6j4QgFgIgHgIAiRi9QAIACAIgBAjhjBQgGABgDAFAi8i5QADADACADQAEAGAFAFQACADACADQACACABACQABADAEADQAAABABACQAGAMAQgEAjBh7QAAAAABABQAHAKAKAHQACABADACQAMAHAQADAiujMQgIgEgHAAAiuiJQgHAAgIADAiwEsQgLgbAAgfQAAgHABgHQADglALgjQALgjAWgeQAUgcAYgd");
	this.shape.setTransform(48.6,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CE9F6E").s().p("AiSEuQgSgEgMgGQgLgbAAgfIABgOQADglALgjQALgiAWgfQAUgcAYgdIABAAICJhNIArgNQhegPgHgCIgSgKIgBgBIAAABQgZgBgdgDIgBAAIgDAAIgBAAQgXAcgdgJQgOgEgOgJIgBgBIgBAAIgHgFQgTgNgQgDIgJgCQgRgHgEgKQgFgMAPgPQAEgDAIACQAFABAGAEIAFAFIAEAEIAEAFIADAEIACABIABABIACACIgCgDIAAAAIAAAAIgBgCIgBAAIgOgUIgKgMIgJgIQgGgEgEgGIgBgBIgBgBIgFgHQgIgOgFgUQgGgYAQgGQASgHAHAgQAHAdATAIIADACIACAAIAGACIgIgKIgCgEIgDgDIgDgEQgKgfADgnIALACQAcAHAFAiQAEAWASAWIABACIAJALIgJgLIgBgCQAIACAIgBIAAgGIAAgIIgBgCIgNgvIgDgOIAAgBIAAgCIAAgDQAAgVAUgGQAHgCAFAFQAOAOgDATQgEAfASAeIAAABIACgBIAKAAIALABQAFARAHAPQgHgPgFgRIgCgKIAAgBIgCgPIAAgDQgCgXAKgEQAIgCAQAKQAFAEADAGIADAkIAAACIACATIgCgTQAKAFAFAIQADAHADAIIACAKIABACIgBgDIAAABIAAgBIABADIgBgCIAKAXQD0AcALAkQAGARgYAgIgtAcIgFAGIATgMIgrAfIgJAGIgTAOIgpAdIgQAMQgWAQgTATIgPAPIgNAPQgPAVgMAYQgLAVgFATQAFgTALgVQAMgYAPgVQAYAcgFAhIgDAPQgJAhgcAZQgaAWgmAFQgPACgPAAQgYAAgWgGgABWhAIBLgWgAjAiCQAHAKAKAHIAFADQAMAIAQACQgQgCgMgIIgFgDQgKgHgHgKIgBgBIABABgAgpiEQgIANgOAFIgBABQgNAFgNACQANgCANgFIABgBQAOgFAIgNQAHgLACgPQgCAPgHALgAi9iOIAAAAIAFgCIABAAIAHAAIAAAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIAAAAIgHAAIgBAAIgFACIAAAAgAiTiUIAIgBIgIABIAAAAIAAAAQgKAAgEgJIAAAAIgBgDQgEgDgBgDIgDgEIgEgGIgJgKIgFgHIAFAHIAJAKIAEAGIADAEQABADAEADIABADIAAAAQAEAJAKAAIAAAAIAAAAgAhriZQAFAAAFgFQgFAFgFAAIAAAAIgBAAQgHgBgHgJIAAgBQgIgLAAgOIAAgEIABgCIAAgBIAAABIgBACIAAAEQAAAOAIALIAAABQAHAJAHABIABAAIAAAAgAgDinIABAGIAAABIABAAIgCgIIAAABgAhQjEIAFAHIgFgHIgJgMIAJAMgAjqjCQADgFAGgBQgGABgDAFgAhtjMIgHgEIAHAEgAiujUQgHgDgGgBIgBAAIAAAAIgBAAIABAAIAAAAIABAAQAGABAHADgAgvjYIgBAAQgEgDgEAAIgBAAIAAAAIgEABIAAAAIAAAAIAEgBIAAAAIABAAQAEAAAEADIABAAIAAAAgAh6kAQgFgIgHgIQAHAIAFAIg");
	this.shape_1.setTransform(48.6,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AhCjIQgBgFgBgFQAAgBAAAAQgBgIgBgIQAAgBAAgBQgCgYAKgDQAIgDAQALQAFADADAHQABASACARQAAACAAABQAKAFAFAIQADAGADAJQABAEABAGQABABAAAAQgBgBAAgCQAAABAAABQAFANAFAJQD0AdALAkQAGAQgYAhIgfAWIgrAeQgEAEgFADQgJAHgKAHQgVAOgUAPQgIAGgIAFQgWAQgTATQgIAIgHAHQgHAIgGAIQgPAVgMAYQgLAUgFATAgvjQQgIgFgGADAhZjJQABAAABAAQAFAAAFAAQAGAAAFABQAFAQAHAPAhahiQANgCANgFQABgBAAAAQAOgFAIgNQAHgLACgPABWg5QhegOgHgCQgJgFgJgFQAAAAgBgBIAAAAQgZAAgdgDQAAAAgBAAQgBAAgCAAQgBAAAAAAQgXAcgdgJQgOgFgOgIQgBgBAAAAQgBAAAAgBQgEgCgDgCQgTgNgQgEQgEgBgFAAQgRgHgEgKQgFgMAPgPQAEgDAIABQAFABAGAFQADACACADQACACACACQACACACADQACACABABQABABABABQABAAAAABQABABABABQgBgCgBgBIAAAAIAAAAQgBgBAAgBIgBgBQgIgMgGgHQgHgJgDgDQgDgEgGgEQgGgEgEgGQgBgBAAAAQgBgBAAAAQgCgDgDgEQgIgOgFgVQgGgXAQgGQASgHAHAgQAHAcATAJQACABABABQABAAABAAQADABADABQgEgGgEgFQgBgCgBgBQgCgCgBgCQgBgBgCgCQgKggADgnQAGABAFABQAcAIAFAhQAEAXASAWQABABAAABQAFAGAEAEAgbjIQABAJABAKAheAiICJhOIArgNIBLgVAiBi8QAAgDAAgEQAAgDAAgEQgBgBAAgBQgGgYgHgXQgCgIgBgGQAAgBAAgBQAAAAAAgBQAAgCAAgBQAAgWAUgFQAHgCAFAFQAOAOgDATQgEAfASAeIAAAAQAEAGAFAGQACAEADADAhtjEQgDgCgEgCAiBi8IAAAAQAAABgBABQgBARAJANQALARAOgLAh6j4QgFgIgHgIAiRi9QAIACAIgBAjhjBQgGABgDAFAi8i5QADADACADQAEAGAFAFQACADACADQACACABACQABADAEADQAAABABACQAGAMAQgEAjBh7QAAAAABABQAHAKAKAHQACABADACQAMAHAQADAiujMQgIgEgHAAAiuiJQgHAAgIADAiwEsQgLgbAAgfQAAgHABgHQADglALgjQALgjAWgeQAUgcAYgd");
	this.shape_2.setTransform(48.6,31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CE9F6E").s().p("AiSEuQgSgEgMgGQgLgbAAgfIABgOQADglALgjQALgiAWgfQAUgcAYgdIABAAICJhNIArgNQhegPgHgCIgSgKIgBgBIAAABQgZgBgdgDIgBAAIgDAAIgBAAQgXAcgdgJQgOgEgOgJIgBgBIgBAAIgHgFQgTgNgQgDIgJgCQgRgHgEgKQgFgMAPgPQAEgDAIACQAFABAGAEIAFAFIAEAEIAEAFIADAEIACABIABABIACACIgCgDIAAAAIAAAAIgBgCIgBAAIgOgUIgKgMIgJgIQgGgEgEgGIgBgBIgBgBIgFgHQgIgOgFgUQgGgYAQgGQASgHAHAgQAHAdATAIIADACIACAAIAGACIgIgKIgCgEIgDgDIgDgEQgKgfADgnIALACQAcAHAFAiQAEAWASAWIABACIAJALIgJgLIgBgCQAIACAIgBIAAgGIAAgIIgBgCIgNgvIgDgOIAAgBIAAgCIAAgDQAAgVAUgGQAHgCAFAFQAOAOgDATQgEAfASAeIAAABIACgBIAKAAIALABQAFARAHAPQgHgPgFgRIgCgKIAAgBIgCgPIAAgDQgCgXAKgEQAIgCAQAKQAFAEADAGIADAkIAAACIACATIgCgTQAKAFAFAIQADAHADAIIACAKIAAgBIABADIgBgCIAKAXQD0AcALAkQAGARgYAgIgtAcIgFAGIATgMIgrAfIgJAGIgTAOIgpAdIgQAMQgWAQgTATIgPAPIgNAPQgPAVgMAYQgLAVgFATQAFgTALgVQAMgYAPgVQAYAcgFAhIgDAPQgJAhgcAZQgaAWgmAFQgPACgPAAQgYAAgWgGgABWhAIBLgWgAjAiCQAHAKAKAHIAFADQAMAIAQACQgQgCgMgIIgFgDQgKgHgHgKIgBgBIABABgAgpiEQgIANgOAFIgBABQgNAFgNACQANgCANgFIABgBQAOgFAIgNQAHgLACgPQgCAPgHALgAi9iOIAAAAIAFgCIABAAIAHAAIAAAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIAAAAIgHAAIgBAAIgFACIAAAAgAiTiUIAIgBIgIABIAAAAIAAAAQgKAAgEgJIAAAAIgBgDQgEgDgBgDIgDgEIgEgGIgJgKIgFgHIAFAHIAJAKIAEAGIADAEQABADAEADIABADIAAAAQAEAJAKAAIAAAAIAAAAgAhriZQAFAAAFgFQgFAFgFAAIAAAAIgBAAQgHgBgHgJIAAgBQgIgLAAgOIAAgEIABgCIAAgBIAAABIgBACIAAAEQAAAOAIALIAAABQAHAJAHABIABAAIAAAAgAgDinIABAGIAAABIABAAIgCgIIAAABgAhQjEIAFAHIgFgHIgJgMIAJAMgAjqjCQADgFAGgBQgGABgDAFgAhtjMIgHgEIAHAEgAiujUQgHgDgGgBIgBAAIAAAAIgBAAIABAAIAAAAIABAAQAGABAHADgAgvjYIgBAAQgEgDgEAAIgBAAIAAAAIgEABIAAAAIAAAAIAEgBIAAAAIABAAQAEAAAEADIABAAIAAAAgAh6kAQgFgIgHgIQAHAIAFAIgAgEirIAAABIABACIgBgDg");
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(8));

	// ball
	this.instance = new lib.static_ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(31.4,5.7,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:63.8,y:-24.1},0).wait(1).to({x:110.4,y:-51.2},0).to({scaleX:1.83,scaleY:1.83,x:300.1,y:-309.7},8).wait(1));

	// head
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("ACPjPQABAFAAAFQAAACAAABQgBACgBAAQgCACgCABQgFACgCAEQgCAEAEADQAAABAAABQABABgBAAQgDACgDABQgDACgEABQgDABgCACQAAACAAABQACAEgCADQgCAFgFACQgCADgEABABohJQgCgEABgEQAAgFADgEQACgDADgBQACgBADgBQABAAABAAQABAAAAgBQAEgFABgGQAAgBAAgCQABgHAHgBQAFAAAFABQACAAABAAQAHgCAEgGQACgDgBgFQgBgEgCgGQAAAAAAgBQACAAACgBQAEAAAFAAQACAAABgBQAEgDgBgGQgBAAAAgBQgBgCgBgCIAAAAQAFgEAHABQADAAADABIAAAAQACAAABABQADAAABACQABABAAgBQADgDAAgDQAAgCgBgCQgEgGgFgFABchIQAAgJADgJQACgFACgFQAEgFgBgHQAAAAAAgBQgBAAgBgBQABAAABAAQAGACAGgCQACAAADAAQACAAAAgCQABgCABgBQAAgEgBgEQAAgCgBgDQAAgCgBgCQgDgEAEgCQAGgEAGADQACABADAAQABABABgBQACgBAAgCQAAgCAAgCQABgCgBgCQgBgBgBgCQgBgDACgCQABgBACgBQAEgBAEACQACABABABQADABACgBQAGgCABgIQAAgHACgGADUiWQgDAEgEACQgCACgEgBQgCAAgCgBQgBABAAAAQgFAGABAIQABACAAABQAAAHgHAAQgEABgDAAQABAEgBAEQgBAGgFADQgCABgBAAQgDABgBgBQgDAAgCgBQAAACAAABQAAAEgDACQgDACgDABAC8ijQgCAGgBACQgFAIgFAKQgCAFgCAFQgDAIgEAIQgBADgDAAQgCAAgCAAQgEACgDABQgDACgCABIAAAAQAAABAAAAQAAADAAACQABADgBADQgEAGgHAEQgBABgBgBQgBAAAAAAQgBgCgCgBQgCgCgDgBQgDAAgCABQgDACgBACQgCACgBADQAAAEABADQAAAFAEADADShqQgDgBgDgBQgFAAgFACQgDACgCABQgBACgBACQgEAJgKAEQgCABgDAAQgFAAgFgBAC9hMIAAAAQAAgBgBgCQgBgBgBgBQgDAAgDABACtg6QgCgFgEgEQgCgBgBgBQgBAAgBAAQgEADgFACQgDACgEABQAAAAgBgBQAAgBgBgCQgBgBAAgBIAAAAQgCgBgBgCQgDgDgDgBQgDAAgDABQgEACgBADQgBADgBAEACNg/QgCADABACACMg5QACAGABAGQABAHAAAFQAAAEAAAEQAAAKABAJQABAEACACQALgDAGgIQAAAAAAgBQADgBABgDACRBoQADgCACgDQAGgIACgIQACgIABgGQACgKgBgKQAFgDAFgCQADgCADgDQAGgIgCgKQgBgMgLAAQgHABgGgDQgGgCgDgFQgBABgCABQAAAAgBAAQACAEgBACQACAGgEAHIgBAAQgFAJgLABQgJAAgFgJQgFgIgCgKQgCgJADgIQACgMAHgHQADgCAEADQAIAGAEAIQAFAIAEAJQABABAAABQAAAAgBABQACACAAADACPADQgEABgEgBQgDAAgDgBQgFALAKAFQAEACAFABACRBoQgCgIAAgGQgJAAgJABQgKAAgKACQgJABgJgBQgEgBgEACQgBAAAAAAQgBgBgBAAQgKgDgGgHQgKgEgHAKQgEAHACAGQAEAGACADQABABAAAAQAGAIAFAIQAGAIAFAIQADAEADADQgFAIgIAFQgJAFgKABQgKAAgJgBQgKgBgLAAQgIAAgJgCQgKgBgJgFQgEgDgEgDQgCgDgCgEQgEgGgCgIAB5BqIABAAQAHADAIABQAEAAAFgCQgBgCAAgCABijHQAAAAAAAAQgBABgBABQgBABAAABQgBACABACQABABACABQADAAACABQADABACABQAAABABAAQAAABgBAAQgCAEgFABQgFAEgBAFQgBACAAACQABABABgBQABABACAAQACAAACABQAEACgBADQgBACAAABQgEAEgFAAQgGABgFADQgBABAAACQABACABACQABACABABQAAABAAABQABACgBACQgBABgCACQgGAJgBAJQAAACACABQABABACABQACABACADQABACABACQABACAAACQgBACgBABQgBACgCAAQgDABgCABQgDABgCABQgCABAAABQgCAHABAHQABAFABAFABhjMIAAAAAAhgsQgGgFgFgGQgBgBgBgCQAAAAAAgCQAAgCACAAQADgBABgBQAGgDAFgFQABAAAAgCQAAgCgCgCQgBgCgBgDQgEgFgEgGQgBAAgBgCQgCgIAGgGQACgBABgCQACgDAEgDQABAAAAgCQgBgGgGgEQgDgCgCgDQAAAAgBgCQAAgFADgDQABAAACgBQABABABgBQABAAABgBQAAgBAAgCQABgFgDgDQgBgBgBgBQgCgBgCgCQgCgCACgDIABAAQADgHAFgFQACgBABgCQABAAABgBQADgDgCgDQgCgDgBgDQgCgFAEgEQADgDADgCAA1g2QgBgGgDgHQAAgCgBgDQgBgCAAgBIABAAQAEAAAFACQABAAABAAIABAAQABAAAAgCQAAgBAAgBQAAgCAAgBQgBgCgCgCQgCgDgCgCQAAgBgBgBQABgDACgCQADAAACgBQADgBADAAQABABABAAQABgDgDgDQgEgEgFgFQgCAAgBgCQgEgDAAgEQgBgCABgDQAAgBABgCQAEgHAHgEQADgCgCgFQAAgBAAgCQgDgHgDgHQgBgDAAgDQABgJADgIQAAgBAAgBQACgCABgCQAGgFAFgHQADgCAAgEQgBgDgBgCAAHhFQAGgIAAgKQgBgCAAgCQAAgFgEgBQgCABAAAAQgBAAAAgCQAAAAgBgBQABgDABgCQAFgFAFgEQABgBABgBQACgCABgCQAAgGgEgEQgDgDgEgCQgEgCgDgEQgBgCgBgCQAAgBgBgBQAAgIAEgGQABgCABgCQAAgBABgCQACgEADgFQABgBAAgCQADgGgEgGQgBAAAAgBQgBgBgBgBQgFgEgFgEAAPgoQgIgFgHgHQAAgBgBgDQAAgEAAgEQAAgBAAgBQAAgBgCgBQgFgCgDgFQgBgCgBgCQgBgFABgFQADgKAFgHQACgBAAgCQACgFgCgFQgBgDgCgBQgBgBgBgBQgDgEgDgEQgBgBAAgBQgBgFABgFQABgGADgFQAAgBABgCQAAgGgDgFQAAgBgBgBQgBAAgBgBQgDgCgFgBQAAAAgBgBQgEgCgCgEAABghQgBgCgCgDQgBgBgDgBQgCgBgCAAQgBgBgCgBQgCgCAAgDQAAgEABgEQABgDgBgDQgBgDgEgBQgDgBgBgBQgBAAgBgCQgCgDAAgEQABgCgBgCQAAgDgBgBQgBgCgCgCQAAgBAAgCQAAgDABgDQADgFADgGQABgBAAgBQAAgCgBgCQgCgFgEgEQgBgBgCgCQgEgEgCgFQgBgBAAgDQABgHADgFQABgBAAgBQABgBgBgBQAAgCgDgCQgCgBgCgCQgEgCgFAAQgDABgDAAQgCAAgBgDQgBgCAAgCQgBgBgBgCQgBgEABgFAhbiqQACAEACADQACAEADABQAEADAEACQAFADADAEQADAGAAAGIAAAAQgBAFAAAEQAAACAAADQAAADACACQADAEAFACQACAAABACQAFADADAFQABAEAAAFQAAABAAABQAAAFgBAEQAAABAAABQAAAGADAEQAAAAAAABQAAABAAABQADAHACAHQABADABACQABABABABQADABAAACQAAACAAABQABACACACQACABACAAQABAAABAAQABABAAAAQAEAEACAFAgyg3QAAgFgBgFQgBgDgCgEQgDgIAEgJQABgBAAgBQAAgBgBgBQAAAAgBgBQgDgBgDAAQgFAAgBgFQgBgBAAgCQAAgDAAgDQAAgBgBgCQAAgDgEgBQgBAAgCAAQgDAAgCgBQgCAAgDgBQgBAAgBgBQgFgFADgIQABgDAAgDQABgFgEgEQgEgGgHgCQgEgBgEgBAhDhFQAAAAAAgBQAAgDAAgCQABgFgEgCQgDgBgCgDQgBgBgBgBQgCgDgBgDQAAgBAAgBQABgDgBgDQAAAAgBgBQgDgCgFAAQgFAAgFgBQgFgBgCgFQgBAAAAgBQgBgBAAgCQgBgCABgBQAAgEAAgEQAAgHgHgDQgDgBgCgCQgIgEgEgJAhDhFIAAABIAAABQAAgBAAgBgAgVgGQABAAAAgBQABgDABgDQAAgCgBgBQgCgBgDgBQgBgBgDAAQgCAAgDgBQgGAAgFgCQgCgBgBgCQgBgCgBgDQgBgFABgEQAAgBABgCQABgCgDgBQgCgBgDgBQgCAAgCgBQgGgBAAgGQAAgCgCgDQAAgBgCgBQgDgBgCgBQgBgBgBgCQgBgEAAgFQgBgGgFAAQgCAAgDAAQgJAAgJgFQgCgBgBgBQgBgBgBgCQgBgCAAgDQgBgCgBgDQAAgGgEgEQgBgBgCgBQgGgCgGgCQgEAAgDgBAhGgGQAAgEgCgFQAAgCgCgCQgFgDgGABQgCABgDABQgDgJAAgIQAAgBgBAAQgBAAgCgBQgDABgEgBQgBAAgBgBQgCgDABgDQACgEABgEQABgBgBgBQgGgFgHACQgDAAgCACQgBABgCACQgBAAgCABQgFABgFgEQgDgDAAgFQAAgCgBgDQAAgDgBgCIgBAAQAAgBgBgBQgBgBgCAAQgEAAgDAAQgDABgEACQgCABgDACQgDACgFgBQgCAAgBgBQgCgBgCgCQgCgBgCgDQgHgHgJACQgDABgGACAglgCQgGgDgIgCQgEAAgDACQgJAEgIAHQgGAHgCAJQgDAIAEAIQAAAAAAAAQAAABAAAAQAFAIAGAGQAHAHAJACQAKACAJAAQAFAAACgEAglgCQABgGgDgCQgBAAgCgBQgHgCgIAAQgCAAgBgBQgBAAgBgBQAAgEAAgEQABgFgEgEQgBgBgBgBQgCgBgCgCQgDgCgDgBQgEgBgEgCQgBAAgCgBQgCAAAAgCQAAgDABgDQACgEgEgDQgBgBgCgCQgFgCgFgCQgCgBgCAAQgGAAgGgBQgCAAgBgDQgBgCABgCQABgCAAgCQADgGgEgDQgBgBgBAAQgBgBgCgBQgCgBgCAAQgCgBgDAAQgCABgCAAQgDABgDAAQgEAAgCgBQgCgBABgDQAAgCABgDQAAgCABgCQAAgCgBgCQAAAAgCgBQgBAAgCAAQgCABgCAAQgDAAgCgCQgDgCgCgDQgCgDgBgFACBACQgGgBgFgDQgFgEgDgEQgDgEgBABAhagTQgDACgDABQgDABgEgBQgGgCgCgFQgBgBAAgCQgBgGgGgBQgCAAgCAAQgFAAgFACQgCABgBAAQgCgBgBgBQgCAAgBgCQgEgDgBgEQgBgDgCgBQgBAAgCAAQgBABgCABQgBAAgBAAQgEABgEAAQgBAAgBgBQgDgDgDgEQgBAAAAgBQgBgBAAgBQgDgBgDABQgEABgEABQgBAAgBAAQgCgBgCgBQgCgBAAgEAhdAPQgDgBgDgDQgBgCgBgCQgBgDgDgDQgBgBgBgCQgBAAAAgBQgCgEgDACQgDABgEgBQgBAAgBAAQAAgCAAgCQgCgDgEAAQgCAAgDgCQgBAAgBgCQgCgDgCgDQAAAAgCgBQAAgBgBAAQgDABgDABQgDABgDAAQgCAAgCgBQgCAAgDgBQgGgBgFgCQgCgBgCgCQgBgBgBgDQgBgCAAgEQABgCgCgCQgCgBgBABQgHAEgHAEQgBABgBgBQgCgBgCgCQgCgDgCgCQgBgFgBgEAhQAAQACgCgBgDQAAgCgCgBQgBAAgBAAQgCAAgCABQgBABgCACQgBABgBAAQgDABgCgCAhfA8IAAgBQABgHgCgIQAAgCAAgCQAAAAgBgBQgCAAgBABQgBABgBABQgBAEgDAEQgBACgDgBQgCAAgCgBQgFgCgCgFQAAgEAAgEQABgFgCgEQgBAAAAgBQgBAAgBAAQgFAAgFADQgCABgCAAQgCAAgDgCQgBAAgBgBQAAgBgBgBQABgDAAgDQABgBAAgBQAAgDgCgBQgBAAgBgBQgCgDgCgBQgGgEgHABQgCABgCABQgDABgCAEQAAACgBABQgCADgEACQgCAAgCAAAiNBpIAAAAQgBAAgBAAQgBAAADgBQgWAGgPAEAiOBpQAAgBABAAAhvBoQAGgDACgFQAGgJAAgKQAAgEABgFQAAgDAAgDAi+ARQgBgBgCgCABdCNQgDgFgJgFQgIgFgJgEQgIgEgIgGQAAAAgBgBABOBeQADACADABQAIADALACQAJACAJACAghAfQgCgKgJgFQgLgFgBAKQgBAHAFAGAglgCQACACACAAQAEADABADQACAFgDAEAABDZIAAAAAAEDDQgEgGgGgIABdCNQACgBACgFQAFgJAHgHQAGgHAGgGABMCXQAEAEAEADQAIAEAEgGQAIgJgLgG");
	this.shape_10.setTransform(68.2,25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.1,1,1).p("ADDipQgPgKgPgKQAAAAAAgBQgRgZgcgLQgcgMgbgCQgPgBgLgCQgPgEgQgDQgegGgVARQgEADgGgCQgjgMgGAjQgCAPgOACQgOABgMAIQgBAgghgBQgPAAgIANQgLAUABAbQgWABgGATQgDAIADAJQAFAVAPAPQgJAUAFAXQADASALAPQAMAQAPACQACABACACQADADACAEQACADAFAAQAIgBAIABQAEAAAAADQAAAAAAABQAFAIAIABQAFAAAEACQABAAABAAQAAAAABABQABAAABABQADAFAFgBQABAAAAAAQADgCADgBQAAgBABAAQACABACAAQABgBABABQACACAAACADaiaQgBgBgBgBQgFgDgEgDQgCAAgCAAQgBAAAAgBQgDgDgEgDQAGAEAGADQAFACAEAEQABABABABgADniAQgCgCgCgDQgGgKgDgJQAAgBAAgBQAJAMAEAOgACaACQAOgKAOgOQAIgJAIgJIAAAAQALgNAKgRQAEgHAFgHQAFgKAAgOQABgLgDgJACYgfQgBABAAAAQgBABAAAAQAAABAAABQAAABAAABQAAABAAABQAAAAAAABQAAAAAAABQAAABAAACQAAAAAAABQACABgBACQgCABgDACQgDABgCgEQgBgBAAAAQgBgDgCAAQgBAAAAgBQgBgBgCABQgDABgCABQgBABAAgBQgDgCgEACQgBgCgDgBQgCgBgDAAQgBAAgBABQgFACgEAAQgDgBgDABQgBAAgBAAQgBAAAAAAQgIAAgGADQgFABgFAEQgEACgDABQgDAAgDABQgBABgCAAQgBAAgBABQgHAEgHAFQgBABgBAAQgBAAgBAAQgCAAgBAAQgCgBgBAAQgGgBgEAEQgCACgCABQgFACgFAFQgBAAAAABQAAACgBADQAAABAAAAQABAFgEACQgCABgCgBQgBgBgCgCQgBAAgBgBQgBgBgBACQgBAIgCAFABrijQABgDgCgCIAAAAIAAAAQADgMABgEQAIgegmgBABWi0QgJgXgSALQACgYgTgOAAIimQgDgJgFgLQgSAKgFgYQgDgMgNgGAgViTQgRgGgIgUQgbgLgHgaAA5ivQgTgDgLgYQgfgLgJgYAg1iTQgKgYgdADQgIAAgBgFQgBgFAEgGAh6h1QgfAIgMgUAiAihQAXgDAYAeAhlh5QgOgXgVgCAjJgrQABgQAAgVAi4AyQgMgHgBgOQAAgHgDgFAiDhTQAAgEgMgEQgfgKgCgbAhWBiQAAgBAAAAQAAgBAAAAQAAgCADgBQAFgDABgFQABgFADgFQAAgBAAAAAiECNIgBAAAhlCMIgfABAiwA2QgCAAgBgBQgBAAAAAAAgeC+QgDAJgCAKQgCAJgCAJAARDrQgBgBgBgBQgCgDgFgGQgCgBgCgBQgFgCgFgCQgPgHgOgCAARDrIAAAAAADDZQADADADAEQACADADADQAAABABABQABACABABIAAAAIAAAAIAAAAAADDZIABAFAADDZQADAEACADAAKD9IgGgfACYirQgNgRgRgS");
	this.shape_11.setTransform(67.2,21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("ABLA/QgRgFgDgLIgHgeIAEABIAIAJIABACIAAAAIAAAAIAbAjQABABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgNgDgAA9AdIAAAAIAAAAIAAAAIAAAAgAAwARIgBgGIAFAHIgEgBgAhYhAIAAgBIABABg");
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
	this.shape_16.graphics.f("#CE9F6E").s().p("AglB8QgqgVhlhGIAlgJIgCABIACAAIAfgBQAFgEADgEQAFgJAAgJIABgJIABgGIAAgBIAAgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAFgEABgEIAEgLIAAAAIABABQAEAHAGAHQAHAGAJADIABAAIABAAIAMABIABAAIAAAAIAEAAIABAAIAAAAQAEAAACgCIAAgBIAAABQgCACgEAAIAAAAIgBAAIgEAAIAAAAIgBAAIgMgBIgBAAIgBAAQgJgDgHgGQgGgHgEgHIgBgBIAAgBQgEgHADgJQADgIAGgHQAHgIAJgEQAEgDAEABQAHABAGAEIAFADQAEADABADIADgNQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAABIACABIADADIAEAAQAEgCgBgFIAAgBIACgFIABgBQAFgFAEgCIAEgDQAEgFAGACIADABIADAAIACgBIACAAIAOgKIACgBIADgBIAGgBIAHgDQAFgEAFgCQAGgCAIAAIABAAIACAAIAGgBQAEAAAFgCIACAAIAFAAQADACABACQAEgCADACIABAAIAFgCQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAAAIABABQABgBAAABQAAAAABAAQAAABABAAQAAABAAABIABAAQACAFADgCIAFgDQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIAAgBIAAgDIADANIABAMIAAAIQgBAKACAJQABAEACADIgDACIgBAAIgBgEIgKgQQgEgJgIgFQgDgEgEADQgHAHgBALQgEAJACAKQACAJAGAJQAFAJAJgBQAKAAAGgJIAAgBQAEgGgBgGIgBgGIABAAIADgCQADAEAFADQAGADAHgBQALAAACAMQABAKgGAHQgCADgDACIgKAGQABAJgCAKIgDANQgDAJgFAHIgGAGQgCgIAAgHIgSABIgTACQgJABgKgBQgEAAgEABIgBAAIgBAAQgLgEgGgHQgJgCgHAIQgFAHACAHIAHAJIAAABIAMAQIALAQIAFAHQgFAHgIAGQgJAFgKAAIgTAAIgUgCQgJAAgJgBQgKgCgIgFIgIgFIgFgHQgEgHgCgHQACAHAEAHIAFAHIgFATQAOACAPAHIALAEIAGAfIAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAQgGAAgegPgAgyBvIAEgSIgEASgAg1guQgEgEAAgGIAAgCQAAgHAFAAIAAAAIACAAIADABIABABQAJAEACALQgCgLgJgEIgBgBIgDgBIgCAAIAAAAQgFAAAAAHIAAACQAAAGAEAEgAgehAQACgDAAgDIgBgDIABADQAAADgCADgAAGB2IgCgBIAAgBIACADgAgHBlIAGAHIAEAGIgKgNgAgpBKIAAAAgAiQAYIABAAIgBAAIABAAIAAAAIAAABIgCAAIABgBgAiPAZg");
	this.shape_16.setTransform(68.3,33.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AhZCuIgCAAIgEAAIgBAAIgGADIgBAAQgFABgDgFIgCgBIgBAAIgCAAIgJgDQgIgBgFgHIAAgCQAAAAAAgBQgBAAAAgBQgBAAAAgBQgBAAgBAAQgIgBgIABQgFABgCgEIgFgGIgEgDQgPgDgMgQQgLgOgDgTQgFgXAJgUQgPgPgFgWQgDgJADgGQAGgUAWAAQgBgcALgTQAIgOAPABQAhAAABgfQAMgIAOgCQAOgCACgOQAGgkAjANQAGABAEgCQAVgSAeAGIAfAHQALADAPABQAbABAcAMQAcALARAaIAAABIAeAUIAHAGIABAAIAEABIAJAGIACACIAAABQADAKAGAKIAEAEQADAKgBALQAAAOgFAJIgJAOIgGgDIAAAAIgBAAIgBAAIAAAAIgGACIgBAAIgBAAIgEAEIgCAEQgEAJgKADIgBABIgCAAIgCABIAAAAIgBAAIgKgCIAKACIABAAIAAAAIACgBIACAAIABgBQAKgDAEgJIACgEIAEgEIABAAIABAAIAGgCIAAAAIABAAIABAAIAAAAIAGADQgKAQgLANIAAABIAAgBIAAgDIgCgBIgBgBIgBAAIgBAAIAAAAIgEABIAEgBIAAAAIABAAIABAAIABABIACABIAAADIAAABIgQARQgCgFgEgEIgDgCIgCAAIgJAGIgGACIAAAAIAAAAIgBAAIgCgDIgBgCIAAAAIgDgEQgDgCgDgBIgDgBIAAAAIgBABIgCAAIAAAAQgDACgCADIgCAHIACgHQACgDADgCIAAAAIACAAIABgBIAAAAIADABQADABADACIADAEIAAAAIABACIACADIABAAIAAAAIAAAAIAGgCIAJgGIACAAIADACQAEAEACAFQgOAPgOALIgBgMIgDgNIAAAAIAAgCIAAgCIAAgCIAAgBIAAAAIABgBIABgBIgBABIgBABIAAAAIAAABQgBADABADIAAAAIAAADIAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIgFADQgDACgCgFIgBgBQAAgBAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgFADIgBAAQgDgCgEACQgBgDgDgBIgFAAIgCAAQgFACgEAAIgGABIgCgBIgBAAQgIABgGACQgFACgFAEIgHADIgGABIgDABIgCAAIgOALIgCAAIgCABIgDgBIgDAAQgGgCgEAFIgEADQgFACgFAEIgBACIgBAFIAAABQABAEgEACIgEABIgDgDIAAgBIACgHIAAgBIgBgCIgEgCIgEgBIgGgBIAAAAIgBAAIAAAAIAAAAIgBAAIgHgBIgBgBIgDgDIgDgFIAAgEIAAgEIABgEIAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgEgCIgFgBQgFgCgBgFIAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgCgBIgGgDIgBgCIgCgIIAAgCQAAgFgFgBIgFAAIgBAAIgBAAQgJAAgHgEIgEgDIgCgDIgBgEIgBgGQgBgGgDgCIgEgCIgLgFIgIgBIAIABIALAFIAEACQADACABAGIABAGIABAEIACADIAEADQAHAEAJAAIABAAIABAAIAFAAQAFABAAAFIAAACIACAIIABACIAGADIACABQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABIAAABQABAFAFACIAFABIAEACQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAABIgBAEIAAAEIAAAEIADAFIADADIABABIAHABIABAAIAAAAIAAAAIABAAIAAAAIAGABIAEABIAEACIABACIAAABIgCAHIAAABIgCgCQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABIgDANQgCgEgDgCIgFgDIAAgEQAAgEgCgBIgDAAQgHgDgIAAIAAAAIAAAAIgDgBIAAAAIAAAAIAAAAIgBgBIAAAAIgBgIIAAgCQAAgEgDgDIgCgCIgEgDIgFgCIgIgDIgDgCQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAAAIABgFIAAgDQAAgDgCgCIgEgCIgKgFIgEAAIgLgBQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAIAAgCIABgCIABgFIABgEQAAgDgDgCIgBgBIgDgBIgEgCIgEAAIgBAAIAAAAIgBAAIgDABIgCAAIgDAAIAAAAIgCAAIgCAAIAAAAIgDAAIgBgBIgBgCIAAgBIACgFIAAgEIAAgEIgCgBIgCAAIAAAAIAAAAIgCAAIAAAAIgBAAIgBAAIgBAAIAAAAIgBAAIAAAAIAAAAIgCAAIgCAAIgBAAQgDgCgCgDQgCgEAAgEQAAAEACAEQACADADACIABAAIACAAIACAAIAAAAIAAAAIABAAIAAAAIABAAIABAAIABAAIAAAAIACAAIAAAAIAAAAIACAAIACABIAAAEIAAAEIgCAFIAAABIABACIABABIADAAIAAAAIACAAIACAAIAAAAIADAAIACAAIADgBIABAAIAAAAIABAAIAEAAIAEACIADABIABABQADACAAADIgBAEIgBAFIgBACIAAACQAAAAABABQAAAAABABQAAAAABAAQAAAAABABIALABIAEAAIAKAFIAEACQACACAAADIAAADIgBAFIAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIADACIAIADIAFACIAEADIACACQADADAAAEIAAACIABAIIAAAAIABABIAAAAIAAAAIAAAAIADABIAAAAIAAAAQAIAAAHADIADAAQACABAAAEIAAAEQgGgEgHgBQgEgBgEADQgJAEgHAIQgGAGgDAJQgDAIAEAIIAAABIgEALQgBAEgFAEQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIAAgBIABgHIgBgJIAAgDIgCgBIAAAAIgBAAIAAgBIgCABIgCACIgDAIIgBAAIAAAAIAAABIgCAAIgBAAIAAAAIgFgBQgFgCgBgFIgBgDIABgEIAAgDQAAgDgCgDIgBgCIgBAAQgFABgFACIgCABIgBAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIgEgBIgCgBIgBgDIABgGIAAgBIAAgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgDgCIgDgEIgBAAIgBgBQgEgCgEAAIAAAAIAAAAIgCAAIgBAAIgFACQgDACgBADIgBADQgCAEgEABIgCAAIgCAAIgDgCIgBAAIgEgCQgMgIgBgNQAAgHgDgGQADAGAAAHQABANAMAIIAEACIABAAIADACIACAAIACAAQAEgBACgEIABgDQABgDADgCIAFgCIABAAIACAAIAAAAIAAAAQAEAAAEACIABABIABAAIADAEIADACQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAACIAAABIgBAGIABADIACABIAEABIAAAAIABAAIAAAAIAAAAIAAAAIABAAIABAAIACgBQAFgCAFgBIABAAIABACQACADAAADIAAADIgBAEIABADQABAFAFACIAFABIAAAAIABAAIACAAIAAgBIAAAAIABAAIADgIIACgCIACgBIAAABIABAAIAAAAIACABIAAADIABAJIgBAHIAAABIAAAAIAAACIgBAFQAAAAAAgBQAAAAAAAAQgBgBAAgBQgBAAAAgBgAhjBqIABACIADADIADAGQABADACACQACACADABQgDgBgCgCQgCgCgBgDIgDgGIgDgDIgBgCIAAgBIgCgCIgBAAIgBAAIgBABIgCABIgDAAIAAAAIAAAAIgBAAIgBAAIgBgBIgBgDQgCgDgDgBIgFgBQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIgDgFIgCgCIgBAAIgGABIgBAAIgFABIAAAAIgBAAIAAAAIAAAAIgBAAIgDAAIgFgCIgKgDQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAIgDgEIAAgGIAAAAIAAgBIgCgEIgBgBIAAAAIgBAAIgBABIgNAIIgCAAIgFgDIgDgFIgDgJIADAJIADAFIAFADIACAAIANgIIABgBIABAAIAAAAIABABIACAEIAAABIAAAAIAAAGIADAEQAAAAAAAAQABABAAAAQABABAAAAQABAAABAAIAKADIAFACIADAAIABAAIAAAAIAAAAIABAAIAAAAIAFgBIABAAIAGgBIABAAIACACIADAFQAAAAABABQAAAAAAABQAAAAABAAQAAAAABABIAFABQADABACADIABADIABABIABAAIABAAIAAAAIAAAAIADAAIACgBIABgBIABAAIABAAIACACIAAABgAhGBuIABgEIAAgCIgDgCIAAAAIAAgBIgBAAIgBAAIAAAAIgDABIgEADIgCACIAAAAIgBAAIAAAAIgEgBIAEABIAAAAIABAAIAAAAIACgCIAEgDIADgBIAAAAIABAAIABAAIAAABIAAAAIADACIAAACIgBAEgAhBBbIADADIABAKIgBgKIgDgDIAAgBIgBAAIAAgBIgGgBIAAAAIAAAAIgDABIgGACIAGgCIADgBIAAAAIAAAAIAGABIAAABIABAAIAAABgAhtBNQAFABABAFIABADQADAFAGACIADABIAEgBIAFgCIgFACIgEABIgDgBQgGgCgDgFIgBgDQgBgFgFgBIgEgBIgBAAIAAAAIAAAAQgFAAgEADIgBAAIAAAAIgBAAIgBAAIAAAAIgBAAIAAAAIgCgBIgEgCQgEgDAAgFQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBAAgBAAIgCAAIgDABIgDABIgCAAIgEAAIAAAAIgCAAIAAAAIAAAAIAAAAIgBAAIgBgBIAAAAIgFgGIgCgCIgBgBIAAAAIgBgBIgBAAIgBAAIAAAAIAAAAIgBAAIAAAAIgCABIgIABIAAAAIgBAAIgBAAIgDgBQgCgCgBgDQABADACACIADABIABAAIABAAIAAAAIAIgBIACgBIAAAAIABAAIAAAAIAAAAIABAAIABAAIABABIAAAAIABABIACACIAFAGIAAAAIABABIABAAIAAAAIAAAAIAAAAIACAAIAAAAIAEAAIACAAIADgBIADgBIACAAQABAAABAAQAAAAAAABQABAAAAABQAAABABAAQAAAFAEADIAEACIACABIAAAAIABAAIAAAAIABAAIABAAIAAAAIABAAQAEgDAFAAIAAAAIAAAAIABAAIAEABgAhRBbQgCgJAAgHIAAgCIgBAAIgDgBQgDAAgEAAIgBAAIgBgBIAAAAIgCgEIABgDIADgHIAAgCIgBgBQgEgEgFAAIAAAAIAAAAIgBAAIgBAAIgBABIgBAAIgEADIgDACIgDABIgCAAIgBAAIAAAAIAAAAIgFgBIgBAAIgBgBIAAAAIAAAAQgDgEgBgEIgBgFIgBgGIAAAAIgCgCIgDgBIAAAAIAAAAIgBAAIgFABIgHACIgFADIgEACIgBAAIAAAAIgDgBIgEgBIgEgCIgDgEIgBgBIgBAAQgEgFgHAAIAAAAIAAAAIgDAAIAAABQgDAAgGADIABgZIAAgLIAAALIgBAZQAGgDADAAIAAgBIADAAIAAAAIAAAAQAHAAAEAFIABAAIABABIADAEIAEACIAEABIADABIAAAAIABAAIAEgCIAFgDIAHgCIAFgBIABAAIAAAAIAAAAIADABIACACIAAAAIABAGIABAFQABAEADAEIAAAAIAAAAIABABIABAAIAFABIAAAAIAAAAIABAAIACAAIADgBIADgCIAEgDIABAAIABgBIABAAIABAAIAAAAIAAAAQAFAAAEAEIABABIAAACIgDAHIgBADIACAEIAAAAIABABIABAAQAEAAADAAIADABIABAAIAAACQAAAHACAJgAgKBNIACABIAFAJIgFgJIgCgBIgCAAIAAAAIgBAAIAAAAIgBAAIgBgBIAAAAIAAAAIgEgEIAAgCIAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgCgBQgCgDgBgDQgBgHgDgGIgBgDIAAAAIAAgBQgDgEAAgFIAAgBIAAgCIABgHIAAgBIAAgDIAAgDIgBgFQgDgGgEgDIgDgCQgFgBgEgEQgCgCAAgDIAAAAIAAgEIABgJIAAgBIAAgBQAAgGgDgEQgDgFgEgDIgJgEQgDgCgCgDQgCgDgBgFIgBgBIgBgBQgVgZgTAAIgBAAIAAAAIgEAAIAEAAIAAAAIABAAQATAAAVAZIABABIABABQABAFACADQACADADACIAJAEQAEADADAFQADAEAAAGIAAABIAAABIgBAJIAAAEIAAAAQAAADACACQAEAEAFABIADACQAEADADAGIABAFIAAADIAAADIAAABIgBAHIAAACIAAABQAAAFADAEIAAABIAAAAIABADQADAGABAHQABADACADIACABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAIAAABIAAACIAEAEIAAAAIAAAAIABABIABAAIAAAAIABAAIAAAAIACAAgAgGA+QABADACABIACACIADABIAFACIADAGIgDgGIgFgCIgDgBIgCgCQgCgBgBgDIAAgCIABgGIABgDIgBgDQgBgEgEgBIgEgCIgCgBQgBgDAAgDIAAgBIAAgDIAAgCIgBgEIgDgEIgBgCIAAgCIABgFIAGgKIABgCIAAgBIAAgDQgDgFgDgDIgDgDQgFgFgCgFIAAgEQAAgGAEgGIAAgBIABgCIAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBIgEgCQgEgCgDAAIgBAAIAAAAIAAAAIgCAAIgFAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIgCgDIgBgEIgBgFIABgDIgBgBIAAgBQgJgUgYAAIgBAAIAAAAIgEAAIgBAAIAAAAIgBAAQgFAAgCgEIAAgBIAAgCQAAgEADgEQgDAEAAAEIAAACIAAABQACAEAFAAIABAAIAAAAIABAAIAEAAIAAAAIABAAQAYAAAJAUIAAABIABABIgBADIABAFIABAEIACADQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAFAAIACAAIAAAAIAAAAIABAAQADAAAEACIAEACQABABAAAAQABABAAAAQAAAAABABQAAAAAAABIAAABIgBACIAAABQgEAGAAAGIAAAEQACAFAFAFIADADQADADADAFIAAADIAAABIgBACIgGAKIgBAFIAAACIABACIADAEIABAEIAAACIAAADIAAABQAAADABADIACABIAEACQAEABABAEIABADIgBADIgBAGIAAACgAAIA2QAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAGAGAJAFQgJgFgGgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgBgFIABgEIAAgBIAAAAIgCgCQgGgDgBgFIgDgDIAAgGIAAgFQADgJAFgIIACgDIABgEIgBgFQgBgDgDgBIgBgCIgFgHIgCgDIAAgEIAAgGIAEgLIABgDIAAgBQAAgGgDgEIgBgBIgBgCQgEgCgEAAIgBgBQgEgDgCgEQACAEAEADIABABQAEAAAEACIABACIABABQADAEAAAGIAAABIgBADIgEALIAAAGIAAAEIACADIAFAHIABACQADABABADIABAFIgBAEIgCADQgFAIgDAJIAAAFIAAAGIADADQABAFAGADIACACIAAAAIAAABIgBAEIABAFgAAeA0IABACQAFAGAGAFQgGgFgFgGIgBgCIAAgBIAAgBIAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIAEgCQAFgCAFgFIABgCIgBgFIgDgEIgIgLIgBgCIgBgFQAAgFAFgEIADgDIAFgFIABgCQgBgHgFgEIgFgEIgBgDIAAgBQAAgEADgCIACgBIAAAAIABAAIACgBIABgBIABgDIAAgCQAAgDgCgDIgDgCIgDgCIgCgDIABgCIABgBQADgGAFgFIADgDIACgCIACgDIgBgDIgDgGIAAgDQAAgDADgDQADgDADgBQgTgEgLgXQgfgLgJgZQAJAZAfALQALAXATAEQgDABgDADQgDADAAADIAAADIADAGIABADIgCADIgCACIgDADQgFAFgDAGIgBABIgBACIACADIADACIADACQACADAAADIAAACIgBADIgBABIgCABIgBAAIAAAAIgCABQgDACAAAEIAAABIABADIAFAEQAFAEABAHIgBACIgFAFIgDADQgFAEAAAFIABAFIABACIAIALIADAEIABAFIgBACQgFAFgFACIgEACQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIAAABIAAABIAAABgAA5AmIACAFQADAGAAAHQAAgHgDgGIgCgFIgBgEIAAAAIABAAQAFAAAEACIADABIAAAAIAAAAIACgCIAAgBIAAgCIgBgDIgCgDIgEgGIgBgCQAAgDADgBIAEgCIABAAIABAAIABAAIACgBIAAAAIABAAIAAAAIADABIAAgBQAAgCgDgCIgJgIIgDgCQgDgDgBgEIAAgDIAAgDIABgDQAEgHAHgDQACgCAAgDIAAgCIgBgDIgGgPIgBgFIAAgBQACgJACgIIABgCIADgEQAGgFAFgGQACgDAAgDIAAAAIgBgGIgBgBQgFgOgKAAIAAAAIAAAAQgFAAgGADIAAABIAAgGQAAgVgRgLQARALAAAVIAAAGIAAgBQAGgDAFAAIAAAAIAAAAQAKAAAFAOIABABIABAGIAAAAQAAADgCADQgFAGgGAFIgDAEIgBACQgCAIgCAJIAAABIABAFIAGAPIABADIAAACQAAADgCACQgHADgEAHIgBADIAAADIAAADQABAEADADIADACIAJAIQADACAAACIAAABIgDgBIAAAAIgBAAIAAAAIgCABIgBAAIgBAAIgBAAIgEACQgDABAAADIABACIAEAGIACADIABADIAAACIAAABIgCACIAAAAIAAAAIgDgBQgEgCgFAAIgBAAIAAAAIABAEgAgsAmIACAGIABAKIgBgKIgCgGQgCgEAAgEQAAgFACgEIABgDIAAgBIAAAAIgCgBIgGgCQgEAAgCgFIgBgCIABgDIgBgDIAAgBIAAgBQgBgDgDgBIgBgBIgBAAIgBAAIAAAAIgBAAIgEAAIgFgBIAAAAIgCgBIAAAAIAAgBQgEgDAAgFIABgEIACgHIAAgBQAAgEgEgEQgEgFgGgCIgJgCIAJACQAGACAEAFQAEAEAAAEIAAABIgCAHIgBAEQAAAFAEADIAAABIAAAAIACABIAAAAIAFABIAEAAIABAAIAAAAIABAAIABAAIABABQADABABADIAAABIAAABIABADIgBADIABACQACAFAEAAIAGACIACABIAAAAIAAABIgBADQgCAEAAAFQAAAEACAEgABRAoIADAKIgDgKIAAgEQAAgFACgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAEgDIAFgBIADgDIACgCIAAgCIgBgDIgCgEIgEgDIgDgDIgBgBIAAAAQABgKAGgIIACgEIABgCIAAgCIgBgCIgBgCQgCgCgBgDIAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAEgDAGgBQAFgBAEgEIABgCIABgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgFgCIgDAAIAAAAIgBAAIAAgBIAAAAIAAgBIAAgDQACgFAFgDQAEgCADgDIAAgBIgBgCIgEgCIgFgBIgEgCIAAgCIAAgCIACgCIABgBIAAgBIAAAAIAAgCIgBgDIABADIAAACIAAAAIAAABIgBABIgCACIAAACIAAACIAEACIAFABIAEACIABACIAAABQgDADgEACQgFADgCAFIAAADIAAABIAAAAIAAABIABAAIAAAAIADAAIAFACQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAIgBACIgBACQgEAEgFABQgGABgEADQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIAAAAQABADACACIABACIABACIAAACIgBACIgCAEQgGAIgBAKIAAAAIABABIADADIAEADIACAEIABADIAAACIgCACIgDADIgFABIgEADQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQgCAEAAAFIAAAEgAB4ApQAAAEAEADQgEgDAAgEIAAgFIAAgCIACgGIAEgDIAEgCIABAAIABABIAEACIADADIABABIABAAIAAAAIABAAIABAAQAHgEADgGIABgEIAAgDIgBgEIAAgBIAAAAIABgBIAEgCIAHgDIAEgBQADAAACgBIAGgQIAEgLIAKgSIAEgHIADAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIACAAQACgDAAgDIAAgBIgBgEQgEgGgFgEQAFAEAEAGIABAEIAAABQAAADgCADIgCAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgDAAIgEAHIgKASIgEALIgGAQQgCABgDAAIgEABIgHADIgEACIgBABIAAAAIAAABIABAEIAAADIgBAEQgDAGgHAEIgBAAIgBAAIAAAAIgBAAIgBgBIgDgDIgEgCIgBgBIgBAAIgEACIgEADIgCAGIAAACIAAAFgAg6ApIABABIAAAAIgBgBIAAgBIAAAAIAAgCIABgEIAAgBQAAgEgDgBQgDgCgCgCIgCgDQgDgCAAgDIAAgBIAAgBIAAgEIAAgCIgBgCIgCgBIgCAAIAAAAIgCgBIgBAAIAAAAIgBAAIAAAAIgLgBQgFgBgCgDIgBgCIgBgDIAAgBIAAgCIAAgEIAAgEQAAgHgHgDIgFgCQgIgFgDgJQADAJAIAFIAFACQAHADAAAHIAAAEIAAAEIAAACIAAABIABADIABACQACADAFABIALABIAAAAIABAAIAAAAIABAAIACABIAAAAIACAAIACABIABACIAAACIAAAEIAAABIAAABQAAADADACIACADQACACADACQADABAAAEIAAABIgBAEIAAACIAAAAIAAABIAAAAgAAQAoQAGgHAAgKIAAgBIAAgEQgBgFgEAAIgBAAIgBAAIAAAAIgBgBIAAgCIACgFIAJgIIADgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgBQAAgFgEgDIgHgGQgEgCgCgEIgCgDIgBgDIAAgCQAAgHADgFIACgEIABgDIAFgIIACgEIABgEQAAgEgDgDIgBgCIgBgBIgLgIIALAIIABABIABACQADADAAAEIgBAEIgCAEIgFAIIgBADIgCAEQgDAFAAAHIAAACIABADIACADQACAEAEACIAHAGQAEADAAAFIAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgDACIgJAIIgCAFIAAACIABABIAAAAIABAAIABAAQAEAAABAFIAAAEIAAABQAAAKgGAHgABmAmIAAgCQAAgJACgHIAFgLQADgEAAgFIAAgBIAAgBIgBAAIAAgBIAEAAIADAAIAAAAIAAAAIAFAAIAFgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIACgDIAAgEIAAgEIgCgFIgBgDIgBgDQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIAAAAIAFgCIABAAIAAAAIAFABIAAAAIAAAAIABABIAEABIAAAAIABAAIAAAAIABAAIABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIABgDIAAAAIAAgBIgBgDIgBgEIgBgCIABgCIADgCIADgBIABAAIAAAAIAEABIAEACIABABIABAAIACAAQAHgDAAgHQAAgIADgGQgDAGAAAIQAAAHgHADIgCAAIgBAAIgBgBIgEgCIgEgBIAAAAIgBAAIgDABIgDACIgBACIABACIABAEIABADIAAABIAAAAIgBADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgBAAIgBAAIAAAAIgBAAIAAAAIgEgBIgBgBIAAAAIAAAAIgFgBIAAAAIgBAAIgFACIAAAAQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIABADIABADIACAFIAAAEIAAAEIgCADQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgFABIgFAAIAAAAIAAAAIgDAAIgEAAIgBgBIABACIABAAIAAABIAAABQAAAFgDAEIgFALQgCAHAAAJIAAACgABxAkIgBgFIABgDQAAgFACgEQACgCADgCIAFgCIACAAIACgBQADgFABgFIABgDQABgHAGgBIACAAIABAAIAAAAIAAAAIADAAIAEABIADAAQAIgBADgGIACgFIgBgDIgDgKIAAgBIABgBIADAAIAJAAIADgBQADgDAAgEIAAgCIgBgCIgCgDIABgBQAEgCAEgBIABAAIAAAAIABAAIABABIAHAAIAAABIAAgBIgHAAIgBgBIgBAAIAAAAIgBAAQgEABgEACIgBABIACADIABACIAAACQAAAEgDADIgDABIgJAAIgDAAIgBABIAAABIADAKIABADIgCAFQgDAGgIABIgDAAIgEgBIgDAAIAAAAIAAAAIgBAAIgCAAQgGABgBAHIgBADQgBAFgDAFIgCABIgCAAIgFACQgDACgCACQgCAEAAAFIgBADIABAFgACpAMQgBADgDACIgGADIAGgDQADgCABgDIAAgDIAEAAIABAAIABABIAAAAIABAAIABAAIAAAAIAAAAIABgBIABAAIAAAAIABgBIAAAAQAFgDACgFIAAgCIgBgGIABAAIAAAAIABAAIAFAAQAHgBAAgGIAAgBIAAgCIgBgEQAAgGAEgEIABgBIAFABIABAAIAAAAIACAAIACgBIAAgBQAEgBAEgEQgEAEgEABIAAABIgCABIgCAAIAAAAIgBAAIgFgBIgBABQgEAEAAAGIABAEIAAACIAAABQAAAGgHABIgFAAIgBAAIAAAAIgBAAIABAGIAAACQgCAFgFADIAAAAIgBABIAAAAIgBAAIgBABIAAAAIAAAAIgBAAIgBAAIAAAAIgBgBIgBAAIgEAAIAAADgAiPgQQAMADAAAEQAAgEgMgDQgfgLgCgaQACAaAfALgAB8grQgCAEgEADIgGAEIAGgEQAEgDACgEIABgEIAAgEIAAgBIAAgBQABgDADgBIAHgCIAGgDIABgCIAAAAIAAAAIgBgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgDQACgEAFgBIAEgDQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAIABgEQAAgFgCgFQgNgRgRgRQARARANARQACAFAAAFIgBAEQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgEADQgFABgCAEIAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIABACIAAAAIAAAAIgBACIgGADIgHACQgDABgBADIAAABIAAABIAAAEIgBAEgAiKgoQAHAAAJgDQgJADgHAAIgBAAIAAAAQgRAAgIgOIgBAAIABAAQAIAOARAAIAAAAIABAAgAhlguQgOgXgVgDQAVADAOAXgAguhjQAIAVARAFQgRgFgIgVQgbgKgHgbQAHAbAbAKgAAIhbIgIgVIAAAAIAAABIAAAAQgFACgEAAIAAAAIAAAAQgKAAgEgPIAAgCQgDgLgNgHQANAHADALIAAACQAEAPAKAAIAAAAIAAAAQAEAAAFgCIAAAAIAAgBIAAAAIAIAVgABqheIAAABIAAgBIAAAAIAEgQIACgJQAAgVgggBQAgABAAAVIgCAJIgEAQIAAAAgACWAuIAAAAgADbAEIAAAAgABvgCIAAAAgAg1hIIAAAAgAA5hkIAAAAg");
	this.shape_17.setTransform(67.2,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(13));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).wait(12));

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
		//this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmSub',{loop:-1});
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.1;
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.instance}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-284.7,-13,332.5,401.8), null);


(lib.Definition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		playSound("thesubjectanswerswhoorwhatinfrontoftheveb");
	}
	this.frame_71 = function() {
		playSound("thesubjectofasentenceisalways");
	}
	this.frame_87 = function() {
		playSound("ball_bounce");
	}
	this.frame_93 = function() {
		playSound("ball_bounce");
	}
	this.frame_99 = function() {
		playSound("ball_kick");
	}
	this.frame_107 = function() {
		playSound("ball_bounce");
	}
	this.frame_115 = function() {
		playSound("ball_bounce");
	}
	this.frame_121 = function() {
		playSound("ball_kick");
	}
	this.frame_130 = function() {
		playSound("ball_bounce");
	}
	this.frame_145 = function() {
		playSound("ball_kick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(66).call(this.frame_71).wait(16).call(this.frame_87).wait(6).call(this.frame_93).wait(6).call(this.frame_99).wait(8).call(this.frame_107).wait(8).call(this.frame_115).wait(6).call(this.frame_121).wait(9).call(this.frame_130).wait(15).call(this.frame_145).wait(57));

	// Moving Ball
	this.instance = new lib.static_ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(163.6,-105.9,1,1,0,0,0,23.1,23.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127).to({_off:false},0).to({scaleX:0.84,scaleY:0.84,guide:{path:[163.5,-105.9,170.3,-105.4,177.1,-103.3,186.1,-100.4,193.2,-94.6,200.5,-88.6,206.4,-81.4,212.2,-74.4,215,-64.7,217.7,-55.4,220,-45.8,222.1,-36.4,225.2,-7,225.3,-6.5,225.3,-6.1,225.4,-6.5,225.6,-6.9]}},6).to({scaleX:0.68,scaleY:0.68,guide:{path:[225.6,-6.7,229.9,-19.6,239,-30.7,251.2,-45.5,272.3,-36.4,282.8,-31.8,284.1,-18.8,286,0.3,286.1,20,286.2,26.6,286.1,29.3,285.9,32,285.6,30.8]}},6).to({scaleX:0.52,scaleY:0.52,x:148.3,y:250.1},9).wait(54));

	// Moving Ball
	this.instance_1 = new lib.static_ball("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.9,-105.8,1,1,0,0,0,23.1,23.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(103).to({_off:false},0).to({scaleX:0.84,scaleY:0.84,guide:{path:[164.8,-105.8,171,-105.2,177.1,-103.3,186.1,-100.5,193.2,-94.7,200.5,-88.7,206.4,-81.5,212.2,-74.5,215,-64.8,217.7,-55.4,220,-45.8,222.1,-36.3,225.2,-7,225.3,-6.5,225.3,-6.1]}},3).to({regX:23,regY:23,scaleX:0.66,scaleY:0.66,guide:{path:[225.3,-6,225.3,-6,225.3,-6,229.6,-19.2,239,-30.7,251.2,-45.5,272.3,-36.4,282.8,-31.8,284.1,-18.8,286,0.3,286.1,20,286.2,26.6,286.1,29.3,285.9,32,285.6,30.8,285.6,30.8,285.6,30.8]}},6).to({regX:23.1,regY:23.1,scaleX:0.52,scaleY:0.52,x:148.3,y:218.1},6).wait(84));

	// Moving Ball
	this.instance_2 = new lib.static_ball("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(163.6,-105.9,1,1,0,0,0,23.1,23.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({_off:false},0).to({scaleX:0.79,scaleY:0.79,guide:{path:[163.5,-105.9,170.3,-105.4,177.1,-103.3,186.1,-100.4,193.2,-94.6,200.5,-88.6,206.4,-81.4,212.2,-74.4,215,-64.7,217.7,-55.4,220,-45.8,222.1,-36.4,225.1,-8]}},4).to({regX:23.2,regY:23,scaleX:0.65,scaleY:0.65,guide:{path:[225.1,-7.8,225.2,-7.4,225.2,-6.9,225.3,-6.4,225.3,-6,229.6,-19.2,239,-30.7,251.2,-45.5,272.3,-36.4,282.8,-31.8,284.1,-18.8,286,0.3,286.1,20,286.2,25.7,286.1,28.5,286,31.3,285.7,31.2]}},6).to({regX:23.1,regY:23.1,scaleX:0.52,scaleY:0.52,x:148.3,y:184.2},6).wait(103));

	// Woman
	this.instance_3 = new lib.anim_buffy_throws_up();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.1,91.4,0.538,0.538,0,0,0,46.7,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(202));

	// The SUBJECT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIADgEAAQgZgBgMgOQgLgNAAgbQAAgZASgTQASgSAYAAQAJAAAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCAAgGgEgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKAAAHgFIALgHQgEgcAAgOIABgKIACgMIgHgDIgFgBQgPAAgMAOg");
	this.shape.setTransform(422,151.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgEAEgEQADgDAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgBQAKgEAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgCAGAAQAEAAADAEQADADAAAEIABAJIACAJQAAAGgDACQgDAEgFAAQgGAAgCgFQgCgCgBgJIgZAHQgQAHAAAKIAGACQAYAFAMAHQARALAAAVQAAARgPAJQgMAIgSAAQgPgBgMgEg");
	this.shape_1.setTransform(404.1,151.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcBUQgDgDAAgEQAAgLAXg0IgmhJIgFgHQgDgFAAgEQAAgEADgDQAEgEAEAAQAFAAACAEQATAZAUAvIAQglQAIgTAIgOQADgGAGAAQAEAAAEADQADADAAAFIgBAFIglBPQgOAegGATIgHAVQgDAIgHAAQgFAAgDgDg");
	this.shape_2.setTransform(393.1,154.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIADgEAAQgZgBgMgOQgLgNAAgbQAAgZASgTQASgSAYAAQAJAAAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCAAgGgEgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKAAAHgFIALgHQgEgcAAgOIABgKIACgMIgHgDIgFgBQgPAAgMAOg");
	this.shape_3.setTransform(382.1,151.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmQAEAaADAQIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_4.setTransform(368.9,151.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLBOIABgnIABgnIAAgmIABgnQAAgLAJAAQAMAAAAALIgBAnIgBAmIgCA1IgBAZQAAALgJAAQgKAAAAgLg");
	this.shape_5.setTransform(358.4,148.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIADgEAAQgZgBgMgOQgLgNAAgbQAAgZASgTQASgSAYAAQAJAAAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCAAgGgEgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKAAAHgFIALgHQgEgcAAgOIABgKIACgMIgHgDIgFgBQgPAAgMAOg");
	this.shape_6.setTransform(349.7,151.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgEAEgEQADgDAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgBQAKgEAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgCAGAAQAEAAADAEQADADAAAEIABAJIACAJQAAAGgDACQgDAEgFAAQgGAAgCgFQgCgCgBgJIgZAHQgQAHAAAKIAGACQAYAFAMAHQARALAAAVQAAARgPAJQgMAIgSAAQgPgBgMgEg");
	this.shape_7.setTransform(331.9,151.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJBOQgDgDgBgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgEADQgDADgDAAQgEAAgDgDgAgGg6QgEgEABgFQgBgFAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_8.setTransform(324,148.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAJAFQAJAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_9.setTransform(308.3,151.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgVAOgXQAQgZATAAQALAAANAEQAQAHAAAJQAAAEgCADQgDADgEAAQgDAAgCgBIgFgFQgGgEgPAAQgKgBgKAUQgKASAAAMQAAAOAKAJQAJAHANAAQAGAAAHgEIANgGIAFgBQAEAAACADQADACAAAFQAAAHgQAIQgPAGgJAAQgVAAgPgNg");
	this.shape_10.setTransform(296.5,151.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAKABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape_11.setTransform(285.3,151.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkAvQgQgOgBgYQAAgbAOgTQAPgVAYAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgRAHIgoATQAGAJAJAFQAJAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_12.setTransform(273.5,151.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGBMQgDgDAAgFIAAgLIAAgNIgCg+IgYgCQgJAAAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA+IAAAGIABAFQAAAYgMgBQgDAAgDgCg");
	this.shape_13.setTransform(262.1,149.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAKABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape_14.setTransform(251.5,151.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAJAFQAJAEALAAQAIAAAJgDQANgDAEgGQAEgGADAAQAEAAAEADQACADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_15.setTransform(239.7,151.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgEAEgEQADgDAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgBQAKgEAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgCAGAAQAEAAADAEQADADAAAEIABAJIACAJQAAAGgDACQgDAEgFAAQgGAAgCgFQgCgCgBgJIgZAHQgQAHAAAKIAGACQAYAFAMAHQARALAAAVQAAARgPAJQgMAIgSAAQgPgBgMgEg");
	this.shape_16.setTransform(227.8,151.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIADgEAAQgZgBgMgOQgLgNAAgbQAAgZASgTQASgSAYAAQAJAAAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCAAgGgEgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKAAAHgFIALgHQgEgcAAgOIABgKIACgMIgHgDIgFgBQgPAAgMAOg");
	this.shape_17.setTransform(210.6,151.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQBcQgEgDAAgFIABgBQACgPAAgQIAAgdIAAgeIgSABQgLAAABgKQgBgMAUAAIAKAAIABgQQADgYAKgLQAJgOAYgBQAPAAAAALQABALgOAAQgaAAgEAkIAAAGIAYgBQARAAAAAKQAAAJgIABIgJAAIgZACIgBAXIABAVIAAAUQAAATgCAMQgBAIgIAAQgFABgCgDg");
	this.shape_18.setTransform(192.6,149.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AggAuQgOgQgBgZQAAgXAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgOATgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_19.setTransform(181.3,151.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066FF").s().p("AgKBOQgFgEAAgHIABgEIABgFIgBgPIgBgPQAAgOgCgYIgDgnIgGAAQgYAAgOgDQgMgDAAgLQAAgGAEgEQAFgGAHABIARACIARABIAUAAIASAAIAZABIAYABQAHAAAEAEQAFAEAAAGQAAAGgFAFQgEAEgHAAIgagBIgagBIADArIACArIABALIABALQAAAIgEAGQgEAJgIAAQgFAAgFgEg");
	this.shape_20.setTransform(161.5,148.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066FF").s().p("AgvBCQgQgSAAgXQAAgiAfgmQAbggAbAAIAIABIAHABQAFgFAGAAQALAAADANQACAIAAANQAAAFgDAEQgEAGgIAAQgJAAgFgKQgDgFgCgBIgIAAQgNAAgRAUQgZAdAAAZQAAAMAIAIQAHAJALAAQAKAAALgFIAQgLQAJgFAEgBQAHABAEAEQAFAEgBAGQAAAHgFAEQgeAZgeAAQgYAAgQgRg");
	this.shape_21.setTransform(147.1,148.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066FF").s().p("AgxBSQgMgKAAgjIACgqQADgdAAgPIgCgLIgBgKQAAgRAPAAQAFAAAEADQAMgDAMgCIAUgBQAbgBAQAHQAKADAAALQAAAFgEAEQgEAFgHABIgEgCQgSgEgQAAIgRABIgTAEIgBAqIApgDIAagCQAGAAAEADQAFAEAAAHQAAAMgOACIgZACIgtAEIgBAWQAAAVADADQABABAMABIATgBIAVAAIAFgBIAHAAQAGAAAEADQAGAEAAAHQAAAMgNADQgKABgiAAQgiAAgLgJg");
	this.shape_22.setTransform(133.6,148.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0066FF").s().p("AguBKQgWgPAAgVQAAgRAPAAQAPAAAAARQAAAGALAHQALAHAKAAQAEAAABgOIACghQABgYAAgkIAAgHIgCAAIgMAAIgNgBQgGAAgFgEQgEgEAAgGQAAgPATAAIALAAIAKABIAUgBIAUgBQAdAAAAAQQAAAGgEAEQgFAFgGAAIgGAAIgHgBIgIAAIgBAIQAABMgKAjQgIAagUAAQgUAAgUgOg");
	this.shape_23.setTransform(119.2,149.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066FF").s().p("Ag0BSQgFgFAAgGIAAhxIgBgPQAAgIABgGQABgKASgDQAIgCATAAQATAAATAOQAVAPAAAXQAAAMgEAIQgEAHgJAHQALAFAIAKQAJAMAAALQAAAOgPANQgLAJgLAEQgYAJgnAAQgGAAgFgFgAgcA5QASAAAVgHQATgFAAgGQgBgIgLgHQgKgFgIAAIgcgBgAgcghIAAAWIAPAAQAggCAAgVQAAgIgKgHQgJgIgLAAIgRAAg");
	this.shape_24.setTransform(105.2,148.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066FF").s().p("AgrBKQgcgXAAg1IABgPIAAgPIAAgNIABgMQAAgJADgHQAEgKAIAAQAFABAFADQAFAEAAAHIAAASIAAASIgBAPIAAAPQAAAPADAOQAFARAJAHQAEADARAAQAbABAKgxQAFgYABguQgBgGAEgFQAFgIAJAAQAHAAAEAGQADADgBAGQAAAqgDAXQgHAkgRAZQgIAKgLAHQgOAJgNAAQgbgBgOgJg");
	this.shape_25.setTransform(89.7,149.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0066FF").s().p("Ag5BGQgNgKAAgOQAAgGADgEQAFgFAHAAQAJAAAFAKQAGANAWAAQARAAARgIQATgJgBgJQABgNgMgFQgIgDgXAAQgSgBgPgGQgTgJAAgQQAAgVAWgRQAWgSAZAAQALAAAPAEQAUAHAAAIQAAAFgEAEQgFAFgGABQgFAAgKgDIgQgCQgOAAgKAHQgNAGgBAIQAAAEAFADQADACAIACIAbABQAYACANALQAQAMAAAXQgBAcgfAOQgYALgeAAQgbAAgQgMg");
	this.shape_26.setTransform(74.1,149.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAJAFQAJAEALAAQAIAAAJgDQANgDAEgGQAEgGAEAAQAEAAADADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_27.setTransform(54.2,151.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_28.setTransform(41.7,148.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_29.setTransform(28.7,148.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},71).wait(131));

	// NounPronoun
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape_30.setTransform(330.4,91.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("Ag0BSQgFgFAAgHIAAhwIgBgPQAAgIABgGQABgKASgDQAIgCATAAQATAAATANQAVAQAAAXQAAAMgEAJQgEAGgJAHQALAFAIAKQAJALAAAMQAAAOgPANQgLAIgLAFQgYAJgnAAQgGAAgFgFgAgcA5QASAAAVgHQATgEAAgHQgBgIgLgHQgKgFgIAAIgcgBgAgcghIAAAWIAPAAQAggCAAgVQAAgIgKgHQgJgIgLAAIgRAAg");
	this.shape_31.setTransform(321,83.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("Ag6BQQgEgEAAgGIAAgYIABgYIAAhWQAAgHADgGQAGgHAKABIAbACQAOACAKAFQAuAXAAAiQAAAOgJAKQgKALgUAHQAdAQAOARQAEAEAAAFQAAAGgEAFQgFAEgGAAQgGAAgEgEQghgfgmgMIABAjQAAAGgFAEQgEAFgGAAQgGAAgFgFgAggADIAEAAQAbAAAMgFIAKgIQAEgEAAgDQAAgMgPgLQgOgKgQgCIgMgBg");
	this.shape_32.setTransform(306.9,83.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgxBSQgMgKAAgjIACgqQADgdgBgPIgBgKIgBgLQAAgRAPAAQAFAAAEADQAMgDALgCIAVgBQAbgBAQAHQAKADAAALQAAAFgEAFQgEAEgHAAIgFgBQgRgEgQAAIgQABIgUAEIgBAqIApgDIAagDQAGABAEAEQAFADAAAHQAAAMgOACIgZACIgtAEIgBAWQAAAVACADQACACAMAAIATgBIAUAAIAHgBIAGgBQAGAAAFAEQAEAEAAAHQAAAMgMADQgKACgiAAQgiAAgLgKg");
	this.shape_33.setTransform(293.1,83.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgWBMQgOgfgQg6IgIgdQgHgUAAgIQAAgGAFgEQAFgEAGAAQAKAAAEAKIAEATIALAjIAQA1IAYhAIAJgaQAHgPAHgIQAFgGAHAAQAGAAAEAFQAFAEAAAGQAAAEgDAFQgGAIgFAMIgIAVIgcBJQgFANgHANQgFAJgIAAQgLAAgEgLg");
	this.shape_34.setTransform(278.5,83.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQADgGAFAAQADAAAEADQADADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_35.setTransform(258.7,86.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_36.setTransform(246.3,83.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgGBMQgDgDAAgEIAAgMIAAgNIgCg+IgYgCQgJAAAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgDAEAAQAJAAACAPIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA+IAAAGIABAFQAAAYgMgBQgDAAgDgCg");
	this.shape_37.setTransform(234.6,84.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgRBcQgDgDAAgEIABgCQABgOAAgRIAAgdIAAgeIgRABQgLgBAAgJQABgLASgBIAKAAIACgQQADgZAKgKQAJgOAYgBQAPAAAAALQAAALgNgBQgaABgDAjIgBAHIAYgBQARAAAAAKQAAAJgJABIgIAAIgZACIgBAXIABAUIAAAVQAAATgCAMQgBAIgIAAQgFABgDgDg");
	this.shape_38.setTransform(217.1,83.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AggAtQgOgPgBgZQAAgXAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgOATgWAAQgSAAgNgOgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgPQACgpgYAAQgPAAgJAPg");
	this.shape_39.setTransform(205.8,86.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGBMQgDgDAAgEIAAgMIAAgNIgCg+IgYgCQgJAAAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgDAEAAQAJAAACAPIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA+IAAAGIABAFQAAAYgMgBQgDAAgDgCg");
	this.shape_40.setTransform(188.4,84.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAaA0IgDgXIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAKIABAJQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgJIAAgKIABgeIACgfIgBgJIAAgLQAAgFADgDQADgCAFAAQAJAAABANIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDADgEABQgKAAgBgLg");
	this.shape_41.setTransform(177.8,86.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AggAtQgOgPAAgZQgBgXAMgSQAPgWAbAAQAVAAALAUQAJAPgBAXQAAAXgMARQgOATgWAAQgSAAgNgOgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgPQACgpgYAAQgPAAgJAPg");
	this.shape_42.setTransform(165.9,86.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgpAxIAAhKIABgKIAAgLQAAgLAJAAQALAAAAARQAUgTAZAAQAIAAAFAHQAEAGAAANIAAAIQgBANgKAAQgJAAAAgLIgBgHIAAgJQgRACgJAHQgKAIgGAOIAAA5QAAALgKAAQgKAAAAgLg");
	this.shape_43.setTransform(155.4,86.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgRBcQgDgDAAgEIABgCQACgOAAgRIAAgdIAAgeIgSABQgLgBABgJQgBgLAUgBIAJAAIACgQQADgZAKgKQAJgOAYgBQAPAAAAALQABALgOgBQgaABgEAjIAAAHIAYgBQARAAAAAKQAAAJgIABIgJAAIgZACIgBAXIABAUIAAAVQAAATgCAMQgBAIgIAAQgFABgDgDg");
	this.shape_44.setTransform(144,83.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAaA0IgDgXIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAKIABAJQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgJIAAgKIABgeIACgfIgBgJIAAgLQAAgFADgDQADgCAFAAQAJAAABANIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDADgEABQgKAAgBgLg");
	this.shape_45.setTransform(126.6,86.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_46.setTransform(117.7,83.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0066FF").s().p("AgfBTQgFgFAAgGQAAgHAEgHQAFgHAJAAQAHAAAEAFQAEAFAAAGQAAAGgEAGQgFAHgIAAQgGAAgFgDgAgYAlQgFgFAAgFQAAgJAOgLIAYgRQAOgKAAgJQAAgKgKgJQgKgIgKAAQgGAAgKAGQgKAHgEAAQgHAAgEgFQgEgEAAgGQAAgLATgJQAPgHALAAQAWAAATARQATARAAAWQAAAWgWAQIgSANQgLAHgEAHQgFAFgHAAQgGAAgEgEg");
	this.shape_47.setTransform(355.8,51);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0066FF").s().p("AgKBOQgFgEAAgHIABgEIABgFIgBgPIgBgPQAAgOgCgYIgDgnIgGAAQgYAAgOgDQgMgDAAgLQAAgGAEgEQAFgGAHABIARACIARABIAUAAIASAAIAZABIAYABQAHAAAEAEQAFAEAAAGQAAAGgFAFQgEAEgHAAIgagBIgagBIADArIACArIABALIABALQAAAIgEAGQgEAJgIAAQgFAAgFgEg");
	this.shape_48.setTransform(342.1,50.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0066FF").s().p("AA3BRQgJAAgJgUQgFgNgEgQIgaACIgZADQgFAMgNAXQgEAIgJAAQgGAAgEgEQgFgEAAgGQAAgGAQgfIgCgGQABgGAKgDIAig1QAagpAGAAQAMAAAEAOIAGAjIAQBGIAGAOQAEAJAAAFQAAAGgFAEQgEAEgFAAIgBAAgAgIAKIAOgCIAQgBIgIgjIgWAmg");
	this.shape_49.setTransform(326.2,51.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0066FF").s().p("AAuBSQgFgEAAgGIAAgXIgBgYIAAgLQgRABgYAEIgpAIIgBAXIgBAXQAAAFgFAEQgEAEgGAAQgGAAgFgEQgEgEAAgGIACgfIACggIABgoIAAgoQAAgGAFgEQAEgEAGAAQAGAAAEAEQAFAEAAAGIgBAZIgBAYIAAALIgBALIApgIQAXgEASgBIABgnQABgJAEgKQAGgOAIAAQAGAAAEAEQAFAEAAAGIgBAEQgCAHAAAGIAAAKIgBAJIgBAeIgBAeIABAXIABAYQAAAGgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_50.setTransform(310,50.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0066FF").s().p("AAWBUQgGgEAAgGQgFgNgCgIIgMhEQgHAVgIARQgMAagEAPIABAFQAAAGgGAEQgFAEgGAAQgIAAgFgEQgGgEAAgIIgDgNIgMgyQgHgYgQgvIgBgGQAAgGAFgEQAEgDAGAAQAIAAAFAHQADADADAKQALAfANA5QAJgVAJgcQAHgXAEgKQALgXAKAAQALAAAFALQACAGACAOIADAWQACASAMAwIAehMIAGgUQADgMAFgHQAFgHAIAAQAHAAAEAEQAEAEAAAGIgDAMIgFALIgGASIgTAtIgUAuQgEALgEAHQgFAJgKAAQgGAAgFgDg");
	this.shape_51.setTransform(290,51.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgpAyIAAhLIABgKIAAgLQAAgLAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgLIgBgHIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_52.setTransform(267.1,53.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgXAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_53.setTransform(255.6,53.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0066FF").s().p("AgfBTQgFgFAAgGQAAgHAEgHQAFgHAJAAQAHAAAEAFQAEAFAAAGQAAAGgEAGQgFAHgIAAQgGAAgFgDgAgYAlQgFgFAAgFQAAgJAOgLIAYgRQAOgKAAgJQAAgKgKgJQgKgIgKAAQgGAAgKAGQgKAHgEAAQgHAAgEgFQgEgEAAgGQAAgLATgJQAPgHALAAQAWAAATARQATARAAAWQAAAWgWAQIgSANQgLAHgEAHQgFAFgHAAQgGAAgEgEg");
	this.shape_54.setTransform(237.1,51);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0066FF").s().p("Ag4BDQgYgVAAgfQAAgjAXgeQAZghAmAAQAmAAASARQATAQAAAjQAAAkgVAeQgYAhgmABQggAAgWgSgAgigfQgQAVAAAZQAAASAOALQANALAVAAQAWAAAQgXQAPgVAAgaQAAgXgKgJQgKgIgZAAQgXAAgRAYg");
	this.shape_55.setTransform(222.1,51.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0066FF").s().p("AAuBSQgFgEAAgGIAAgXIgBgYIAAgLQgRABgYAEIgpAIIgBAXIgBAXQAAAFgFAEQgEAEgGAAQgGAAgFgEQgEgEAAgGIACgfIACggIABgoIAAgoQAAgGAFgEQAEgEAGAAQAGAAAEAEQAFAEAAAGIgBAZIgBAYIAAALIgBALIApgIQAXgEASgBIABgnQABgJAEgKQAGgOAIAAQAGAAAEAEQAFAEAAAGIgBAEQgCAHAAAGIAAAKIgBAJIgBAeIgBAeIABAXIABAYQAAAGgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_56.setTransform(205.1,50.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0066FF").s().p("AAWBUQgGgEAAgGQgFgNgCgIIgMhEQgHAVgIARQgMAagEAPIABAFQAAAGgGAEQgFAEgGAAQgIAAgFgEQgGgEAAgIIgDgNIgMgyQgHgYgQgvIgBgGQAAgGAFgEQAEgDAGAAQAIAAAFAHQADADADAKQALAfANA5QAJgVAJgcQAHgXAEgKQALgXAKAAQALAAAFALQACAGACAOIADAWQACASAMAwIAehMIAGgUQADgMAFgHQAFgHAIAAQAHAAAEAEQAEAEAAAGIgDAMIgFALIgGASIgTAtIgUAuQgEALgEAHQgFAJgKAAQgGAAgFgDg");
	this.shape_57.setTransform(185.1,51.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgFAEgDQADgDAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgDAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgGQAEgDAGAAQAEAAADAEQADADAAAEIABAKIACAJQAAAEgDADQgDAEgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSAAQgPgBgMgFg");
	this.shape_58.setTransform(161.5,53.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgpAyIAAhLIABgKIAAgLQAAgLAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgLIgBgHIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_59.setTransform(151.5,53.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAJAFQAJAEALAAQAIAAAJgDQANgDAEgGQAEgGADAAQAFAAADADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_60.setTransform(140.1,53.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmQAEAaADAQIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_61.setTransform(126.4,53.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgFAEgDQADgDAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgDAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgGQAEgDAGAAQAEAAADAEQADADAAAEIABAKIACAJQAAAEgDADQgDAEgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSAAQgPgBgMgFg");
	this.shape_62.setTransform(113.2,53.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAKABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape_63.setTransform(102.7,53.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYABQAJAAAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_64.setTransform(91.1,53.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0066FF").s().p("AgKBOQgFgEAAgHIABgEIABgFIgBgPIgBgPQAAgOgCgYIgDgnIgGAAQgYAAgOgDQgMgDAAgLQAAgGAEgEQAFgGAHABIARACIARABIAUAAIASAAIAZABIAYABQAHAAAEAEQAFAEAAAGQAAAGgFAFQgEAEgHAAIgagBIgagBIADArIACArIABALIABALQAAAIgEAGQgEAJgIAAQgFAAgFgEg");
	this.shape_65.setTransform(290.6,18.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0066FF").s().p("AgvBCQgQgSAAgWQAAgjAfgmQAbggAbAAIAIABIAHAAQAFgEAGAAQAMAAACANQACAJAAALQAAAGgDAEQgEAGgIAAQgJAAgFgKQgDgFgCgBIgIgBQgNABgRAUQgZAdAAAaQAAALAIAJQAHAIALAAQAKAAALgGIAQgKQAJgGAEAAQAHAAAEAFQAFAFgBAFQAAAGgFAFQgeAZgeAAQgYAAgQgRg");
	this.shape_66.setTransform(276.2,18.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0066FF").s().p("AgxBSQgMgKAAgjIACgqQACgdAAgOIgBgMIgBgLQAAgQAPAAQAFAAAEADQANgDAKgCIAVgBQAbAAAQAGQAKADAAAKQAAAGgEAEQgEAGgHAAIgEgBQgSgFgQAAIgQABIgUAEIgBArIApgFIAagBQAGAAAEADQAFAFAAAGQAAAMgOABIgZADIgtAEIgBAWQAAAVADADQABACAMgBIATAAIAVAAIAFgBIAHAAQAGAAAEADQAFAEABAHQAAAMgNACQgKACgiAAQgiAAgLgJg");
	this.shape_67.setTransform(262.7,18.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0066FF").s().p("AguBKQgWgPAAgVQAAgRAPAAQAPAAAAARQAAAGALAHQALAHAKAAQAEAAABgOIACghQABgYAAgkIAAgHIgCAAIgMAAIgNgBQgGAAgFgEQgEgEAAgGQAAgPATAAIALAAIAKABIAUgBIAUgBQAdAAAAAQQAAAGgEAEQgFAFgGAAIgGAAIgHgBIgIAAIgBAIQAABMgKAjQgIAagUAAQgUAAgUgOg");
	this.shape_68.setTransform(248.3,18.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0066FF").s().p("Ag0BSQgFgGAAgFIAAhyIgBgOQAAgJABgFQABgKASgCQAIgDATAAQATAAATAOQAVAOAAAXQAAANgEAIQgEAHgJAHQALAFAIALQAJALAAALQAAAOgPANQgLAIgLAFQgYAJgnAAQgGAAgFgFgAgcA5QASAAAVgGQATgGAAgGQgBgIgLgGQgKgGgIgBIgcgBgAgcgiIAAAXIAPABQAggDAAgWQAAgHgKgHQgJgIgLABIgRAAg");
	this.shape_69.setTransform(234.3,18.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0066FF").s().p("AgrBKQgcgXAAg1IABgPIAAgPIAAgMIABgNQAAgIADgIQAEgKAIAAQAFAAAFAEQAFAEAAAGIAAATIAAASIgBAPIgBAPQABAQAEAOQAEAQAJAHQAEADARABQAbAAALgxQAEgYABgtQAAgGADgHQAFgGAJgBQAHABAEAFQACAEAAAEQAAArgDAXQgGAkgSAYQgIALgLAHQgOAIgNABQgbAAgOgKg");
	this.shape_70.setTransform(218.8,18.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0066FF").s().p("Ag5BGQgNgKAAgOQAAgGADgFQAFgEAHAAQAJAAAFAKQAGANAWAAQASAAAQgIQASgIAAgKQABgOgLgEQgJgDgXAAQgSgBgPgGQgTgIgBgRQABgVAWgSQAWgRAZAAQALAAAPAFQAUAGAAAHQAAAGgEAEQgEAGgHAAQgFgBgKgCIgQgCQgOAAgLAGQgNAIAAAHQAAAFAEACQAEACAIACIAbABQAYACANAMQAQALAAAXQAAAcggAOQgYALgeAAQgbAAgQgMg");
	this.shape_71.setTransform(203.2,18.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAJAFQAJAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQADADAAAEQAAAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_72.setTransform(183.2,20.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_73.setTransform(170.8,18);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_74.setTransform(157.7,18.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgfBTQgFgFAAgGQAAgHAEgHQAFgHAJAAQAHAAAEAFQAEAFAAAGQAAAGgEAGQgFAHgIAAQgGAAgFgDgAgYAlQgFgFAAgFQAAgJAOgLIAYgRQAOgKAAgJQAAgKgKgJQgKgIgKAAQgGAAgKAGQgKAHgEAAQgHAAgEgFQgEgEAAgGQAAgLATgJQAPgHALAAQAWAAATARQATARAAAWQAAAWgWAQIgSANQgLAHgEAHQgFAFgHAAQgGAAgEgEg");
	this.shape_75.setTransform(237.1,51);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("Ag4BDQgYgVAAgfQAAgjAXgeQAZghAmAAQAmAAASARQATAQAAAjQAAAkgVAeQgYAhgmABQggAAgWgSgAgigfQgQAVAAAZQAAASAOALQANALAVAAQAWAAAQgXQAPgVAAgaQAAgXgKgJQgKgIgZAAQgXAAgRAYg");
	this.shape_76.setTransform(222.1,51.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAuBSQgFgEAAgGIAAgXIgBgYIAAgLQgRABgYAEIgpAIIgBAXIgBAXQAAAFgFAEQgEAEgGAAQgGAAgFgEQgEgEAAgGIACgfIACggIABgoIAAgoQAAgGAFgEQAEgEAGAAQAGAAAEAEQAFAEAAAGIgBAZIgBAYIAAALIgBALIApgIQAXgEASgBIABgnQABgJAEgKQAGgOAIAAQAGAAAEAEQAFAEAAAGIgBAEQgCAHAAAGIAAAKIgBAJIgBAeIgBAeIABAXIABAYQAAAGgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_77.setTransform(205.1,50.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAWBUQgGgEAAgGQgFgNgCgIIgMhEQgHAVgIARQgMAagEAPIABAFQAAAGgGAEQgFAEgGAAQgIAAgFgEQgGgEAAgIIgDgNIgMgyQgHgYgQgvIgBgGQAAgGAFgEQAEgDAGAAQAIAAAFAHQADADADAKQALAfANA5QAJgVAJgcQAHgXAEgKQALgXAKAAQALAAAFALQACAGACAOIADAWQACASAMAwIAehMIAGgUQADgMAFgHQAFgHAIAAQAHAAAEAEQAEAEAAAGIgDAMIgFALIgGASIgTAtIgUAuQgEALgEAHQgFAJgKAAQgGAAgFgDg");
	this.shape_78.setTransform(185.1,51.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgKBOQgFgEAAgHIABgEIABgFIgBgPIgBgPQAAgOgCgYIgDgnIgGAAQgYAAgOgDQgMgDAAgLQAAgGAEgEQAFgGAHABIARACIARABIAUAAIASAAIAZABIAYABQAHAAAEAEQAFAEAAAGQAAAGgFAFQgEAEgHAAIgagBIgagBIADArIACArIABALIABALQAAAIgEAGQgEAJgIAAQgFAAgFgEg");
	this.shape_79.setTransform(342.1,50.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AA3BRQgJAAgJgUQgFgNgEgQIgaACIgZADQgFAMgNAXQgEAIgJAAQgGAAgEgEQgFgEAAgGQAAgGAQgfIgCgGQABgGAKgDIAig1QAagpAGAAQAMAAAEAOIAGAjIAQBGIAGAOQAEAJAAAFQAAAGgFAEQgEAEgFAAIgBAAgAgIAKIAOgCIAQgBIgIgjIgWAmg");
	this.shape_80.setTransform(326.2,51.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0066FF").s().p("AhLBTQgEgFAAgGIABgNIABgNIAAgTIAAgTIAAgTIAAgUIgCgUIgBgTQAAgGAGgGQAFgEAHAAQAIAAAKANQAwBGAvArIAAgRIgBhGIgBgLIgBgMQAAgQAPABQASAAAAA2IAAARIgBBCIgCARQgCAOgNABQgIAAgJgJQgqglgzhDIAAAiIAAAZIAAAaQAAAggPgBQgIAAgFgEg");
	this.shape_81.setTransform(276.7,183.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0066FF").s().p("AgrBJQgbgWAAg0IAAgQIAAgPIAAgMIABgNQAAgIADgIQAEgKAIABQAFAAAFADQAFAEAAAGIAAASIgBATIAAAPIgBAQQAAAPAFAOQAEAQAJAHQAFADAQABQAbAAALgxQAEgYAAgtQAAgHAEgGQAFgGAJAAQAHAAAEAEQACAEABAFQAAArgFAXQgFAkgSAYQgIALgLAHQgOAIgNAAQgbABgOgLg");
	this.shape_82.setTransform(259.5,183.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0066FF").s().p("Ag4BCQgYgTAAggQAAgjAXgeQAZghAmgBQAmABASAQQATARAAAjQAAAkgVAdQgYAjgmgBQggAAgWgSgAgiggQgQAXAAAYQAAATAOALQANAKAVABQAWgBAQgXQAPgVAAgaQAAgWgKgKQgKgHgZgBQgXAAgRAXg");
	this.shape_83.setTransform(242.7,183.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0066FF").s().p("AhLBTQgEgFAAgGIABgNIABgNIAAgTIAAgTIAAgTIAAgUIgCgUIgBgTQAAgGAGgGQAFgEAHAAQAIAAAKANQAwBGAvArIAAgRIgBhGIgBgLIgBgMQAAgQAPABQASAAAAA2IAAARIgBBCIgCARQgCAOgNABQgIAAgJgJQgqglgzhDIAAAiIAAAZIAAAaQAAAggPgBQgIAAgFgEg");
	this.shape_84.setTransform(225,183.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgSAYgBQAJAAAMAFQAOAGAAAIQAAADgCADIgBAOIgBAWQAAAOACAIIAGASIADAGIABABQAAAFgDADQgDADgEAAQgCAAgGgFgAgRgaQgNANAAARQAAASAHAIQAGAJAMAAQAKAAAHgDIALgJQgEgbAAgOIABgKIACgLIgHgDIgFgCQgPAAgMAOg");
	this.shape_85.setTransform(421.8,151.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape_86.setTransform(404,151.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgcBUQgDgDAAgEQAAgLAXg0IgmhJIgFgHQgDgFAAgEQAAgEADgDQAEgEAEAAQAFAAACAEQATAZAUAvIAQglQAIgTAIgOQADgGAGAAQAEAAAEADQADADAAAFIgBAFIglBPQgOAegGATIgHAVQgDAIgHAAQgFAAgDgDg");
	this.shape_87.setTransform(392.9,154.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgSAYgBQAJAAAMAFQAOAGAAAIQAAADgCADIgBAOIgBAWQAAAOACAIIAGASIADAGIABABQAAAFgDADQgDADgEAAQgCAAgGgFgAgRgaQgNANAAARQAAASAHAIQAGAJAMAAQAKAAAHgDIALgJQgEgbAAgOIABgKIACgLIgHgDIgFgCQgPAAgMAOg");
	this.shape_88.setTransform(381.9,151.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgMBOIACgnIABgnIAAgmIABgnQAAgLAKAAQAKAAABALIgBAnIgBAmIgBA1IgCAZQgBALgIAAQgLAAAAgLg");
	this.shape_89.setTransform(358.2,148.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgSAYgBQAJAAAMAFQAOAGAAAIQAAADgCADIgBAOIgBAWQAAAOACAIIAGASIADAGIABABQAAAFgDADQgDADgEAAQgCAAgGgFgAgRgaQgNANAAARQAAASAHAIQAGAJAMAAQAKAAAHgDIALgJQgEgbAAgOIABgKIACgLIgHgDIgFgCQgPAAgMAOg");
	this.shape_90.setTransform(349.6,151.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape_91.setTransform(331.7,151.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgkAvQgQgOgBgYQAAgbAOgTQAPgVAYAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgRAHIgoATQAGAJAJAFQAJAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_92.setTransform(308.2,151.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgZATgBQALAAANAGQAQAGAAAIQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgFgPgBQgKABgKATQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgCQAEAAACADQADAEAAADQAAAJgQAHQgPAHgJAAQgVAAgPgOg");
	this.shape_93.setTransform(296.3,151.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAaA0IgDgXIgBgXIAAgJIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgEAFAAQAJABABAOIABAMQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDACgEAAQgKABgBgLg");
	this.shape_94.setTransform(285.2,151.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAALgDQAMgDAEgGQADgGAFAAQADAAADADQAEADAAAEQgBAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_95.setTransform(273.4,151.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_96.setTransform(261.9,149.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAaA0IgDgXIgBgXIAAgJIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgEAFAAQAJABABAOIABAMQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDACgEAAQgKABgBgLg");
	this.shape_97.setTransform(251.3,151.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAKAFQAIAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADABAEQgBAMgTAIQgRAIgPAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_98.setTransform(239.5,151.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape_99.setTransform(227.6,151.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgSAYgBQAJAAAMAFQAOAGAAAIQAAADgCADIgBAOIgBAWQAAAOACAIIAGASIADAGIABABQAAAFgDADQgDADgEAAQgCAAgGgFgAgRgaQgNANAAARQAAASAHAIQAGAJAMAAQAKAAAHgDIALgJQgEgbAAgOIABgKIACgLIgHgDIgFgCQgPAAgMAOg");
	this.shape_100.setTransform(210.4,151.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgRBcQgDgDAAgEIAAgDQACgNAAgRIAAgdIAAgfIgRABQgKAAgBgKQABgLASAAIAKAAIADgRQACgYAKgLQAJgNAYAAQAPAAAAAKQAAALgNgBQgaAAgDAkIgBAHIAYgBQARAAAAALQAAAHgJACIgIABIgZABIgBAYIABAUIAAATQAAAVgCALQgBAJgIAAQgEAAgEgDg");
	this.shape_101.setTransform(192.4,149.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AggAtQgOgPgBgYQAAgXAMgTQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgVAAQgTAAgNgOgAgSgVQgIAMAAAPQABAPAIAJQAHAHAKAAQAKAAAIgIQAJgJAAgQQACgogYAAQgPAAgIAPg");
	this.shape_102.setTransform(181.1,151.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0066FF").s().p("AgvBBQgQgRAAgWQAAgjAggmQAaggAbAAIAJAAIAGABQAFgEAHAAQAKAAADAMQACAJAAAMQAAAGgDAEQgEAGgIAAQgJAAgFgKQgDgFgBgBIgJgBQgOAAgQAWQgZAcAAAaQAAALAIAJQAIAIAKAAQAKAAALgGIARgKQAIgGAEAAQAGAAAFAFQAEAFABAFQAAAGgHAFQgdAZgeAAQgXAAgRgSg");
	this.shape_103.setTransform(147,148.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0066FF").s().p("AgxBSQgMgKAAgjIACgqQACgdABgOIgCgLIgBgMQAAgQAPAAQAFAAAEADQANgDALgCIAUgCQAbABAQAGQAKAEAAAJQAAAGgEAEQgEAGgHgBIgFAAQgRgFgQAAIgRABIgTAEIgBArIApgFIAagCQAGAAAFAEQAEAFAAAGQAAAMgNABIgaADIgtAEIgBAWQAAAVADADQABACAMgBIAUAAIATAAIAHgBIAGAAQAGAAAFADQAEAEAAAHQAAAMgMACQgLACggAAQgkABgKgKg");
	this.shape_104.setTransform(133.5,148.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0066FF").s().p("Ag0BSQgFgGAAgGIAAhxIgBgOQAAgIABgGQABgKASgCQAIgDATAAQATAAATAOQAVAPAAAWQAAANgEAJQgEAGgJAHQALAFAIALQAJALAAALQAAAOgPANQgLAJgLAEQgYAJgnAAQgGAAgFgFgAgcA6QASgBAVgGQATgGAAgGQgBgIgLgGQgKgGgIgBIgcgBgAgcgiIAAAXIAPABQAggDAAgWQAAgHgKgHQgJgHgLAAIgRAAg");
	this.shape_105.setTransform(105.1,148.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0066FF").s().p("AgqBJQgcgWAAg0IAAgQIABgPIAAgMIAAgNQAAgIADgIQAEgKAHABQAHAAAEADQAFAEAAAGIAAASIgBATIAAAPIAAAQQAAAPADAOQAFAQAJAHQAEADARABQAcAAAJgxQAGgYgBgtQABgHADgGQAFgGAJAAQAHAAAEAEQACAEAAAFQAAArgEAXQgFAkgSAYQgIALgLAHQgNAIgOAAQgbABgNgLg");
	this.shape_106.setTransform(89.6,149.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0066FF").s().p("Ag5BGQgOgKAAgNQAAgHAFgFQAEgEAHAAQAKAAAEAKQAHANAVAAQARAAASgIQASgJAAgJQAAgOgMgEQgHgDgXgBQgTAAgPgGQgUgIABgRQAAgVAWgSQAWgRAaAAQAKAAAQAFQATAGAAAHQAAAGgEAEQgEAGgHgBQgFAAgKgCIgPgCQgOAAgLAGQgOAIAAAHQABAFAEACQADACAIABIAaACQAZACANAMQAPALAAAXQAAAcgfAOQgYALgeAAQgcAAgPgMg");
	this.shape_107.setTransform(74,149.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAPgVAYAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAJAFQAJAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADAAAEQAAAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_108.setTransform(54,151.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_109.setTransform(117.7,83.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmQAEAaADAQIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_110.setTransform(126.4,53.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0066FF").s().p("AgKBOQgFgEAAgHIABgEIABgFIgBgPIgBgPQAAgOgCgYIgDgnIgGAAQgYAAgOgDQgMgDAAgLQAAgGAEgEQAFgGAHABIARACIARABIAUAAIASAAIAZABIAYABQAHAAAEAEQAFAEAAAGQAAAGgFAFQgEAEgHAAIgagBIgagBIADArIACArIABALIABALQAAAIgEAGQgEAJgIAAQgFAAgFgEg");
	this.shape_111.setTransform(290.6,18.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0066FF").s().p("AguBKQgWgPAAgVQAAgRAPAAQAPAAAAARQAAAGALAHQALAHAKAAQAEAAABgOIACghQABgYAAgkIAAgHIgCAAIgMAAIgNgBQgGAAgFgEQgEgEAAgGQAAgPATAAIALAAIAKABIAUgBIAUgBQAdAAAAAQQAAAGgEAEQgFAFgGAAIgGAAIgHgBIgIAAIgBAIQAABMgKAjQgIAagUAAQgUAAgUgOg");
	this.shape_112.setTransform(248.3,18.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_113.setTransform(170.8,18);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_114.setTransform(157.7,18.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0066FF").s().p("AhLBTQgEgFAAgGIABgNIABgNIAAgTIAAgTIAAgTIAAgUIgCgUIgBgTQAAgGAGgGQAFgEAHAAQAIAAAKANQAwBGAvArIAAgRIgBhGIgBgLIgBgMQAAgQAPABQASAAAAA2IAAARIgBBCIgCARQgCAOgNABQgIAAgJgJQgqglgzhDIAAAhIAAAaIAAAaQAAAggPgBQgIAAgFgEg");
	this.shape_115.setTransform(320,218.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0066FF").s().p("AgqBJQgcgWAAg0IAAgQIABgPIAAgMIAAgNQAAgIADgIQAEgKAHABQAHAAAEADQAFAEAAAGIAAASIgBATIAAAPIAAAQQAAAPADAOQAFAQAJAHQAEADARABQAcAAAJgxQAGgYgBgtQABgHADgGQAFgGAJAAQAHAAAEAEQACAEAAAFQAAArgDAXQgGAkgSAYQgIALgLAHQgNAIgOAAQgbABgNgLg");
	this.shape_116.setTransform(302.9,218.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0066FF").s().p("Ag4BCQgYgTAAggQAAgjAXgeQAZghAmgBQAmABASAQQATARAAAjQAAAkgVAdQgYAjgmAAQgggBgWgSgAgiggQgQAXAAAYQAAATAOALQANAKAVABQAWgBAQgXQAPgVAAgaQAAgWgKgKQgKgHgZgBQgXAAgRAXg");
	this.shape_117.setTransform(286.1,218.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0066FF").s().p("AhLBTQgEgFAAgGIABgNIABgNIAAgTIAAgTIAAgTIAAgUIgCgUIgBgTQAAgGAGgGQAFgEAHAAQAIAAAKANQAwBGAvArIAAgRIgBhGIgBgLIgBgMQAAgQAPABQASAAAAA2IAAARIgBBCIgCARQgCAOgNABQgIAAgJgJQgqglgzhDIAAAhIAAAaIAAAaQAAAggPgBQgIAAgFgEg");
	this.shape_118.setTransform(268.4,218.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0066FF").s().p("Ag4BCQgYgTAAggQAAgjAXgeQAZghAmgBQAmABASAQQATARAAAjQAAAkgVAdQgYAjgmAAQgggBgWgSgAgiggQgQAXAAAYQAAATAOALQANAKAVABQAWgBAQgXQAPgVAAgaQAAgWgKgKQgKgHgZgBQgXAAgRAXg");
	this.shape_119.setTransform(250.6,218.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0066FF").s().p("Ag6BQQgEgEAAgGIAAgYIAAgYIAAhWQAAgHAFgGQAFgHAKABIAaACQAPACAKAFQAuAXAAAiQAAAOgKAKQgJALgUAHQAdAQAPARQADAEAAAFQAAAGgEAFQgFAEgGAAQgGAAgFgEQgggfgmgMIABAjQAAAGgEAEQgEAFgHAAQgHAAgEgFgAghADIAFAAQAaAAAMgFIAKgIQAFgEAAgDQAAgMgQgLQgNgKgQgCIgNgBg");
	this.shape_120.setTransform(235.1,218.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0066FF").s().p("AgwBSQgEgEAAgGIAAgeIACgwIACgyQAAgcAQABIAKgBIAPgBQAVAAASAOQAVAPAAAWQAAAcgWAPQgTAOgaAAIgJAAIgBAxQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgTg4IAAAPIgCAlIAHABQAPAAAMgIQALgJABgOQgBgJgKgHQgLgHgMAAIgGAAIgEABg");
	this.shape_121.setTransform(222,217.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0066FF").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_122.setTransform(337.2,251.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0066FF").s().p("AgpAxIAAhKIABgKIAAgLQAAgLAJAAQALAAAAARQAUgTAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgLIgBgHIAAgJQgRACgJAIQgKAGgGAPIAAA5QAAALgKAAQgKAAAAgLg");
	this.shape_123.setTransform(323.5,251.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0066FF").s().p("AgfAuQgPgQgBgZQAAgXAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgNATgXAAQgRAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_124.setTransform(312,251.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0066FF").s().p("AgQBcQgEgDAAgFIAAgBQACgPAAgQIAAgdIAAgeIgQABQgMAAAAgKQAAgMATAAIALAAIACgQQACgYAJgLQALgOAXgBQAQAAAAALQAAALgPAAQgaAAgCAkIgBAGIAYgBQARAAAAAKQAAAJgJABIgIAAIgZACIAAAXIAAAVIAAAUQAAATgCAMQgBAIgIAAQgEABgDgDg");
	this.shape_125.setTransform(300.6,249.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0066FF").s().p("AhLBSQgEgEAAgGIABgNIABgNIAAgTIAAgTIAAgTIAAgVIgCgTIgBgTQAAgHAGgEQAFgFAHgBQAIAAAKAOQAwBFAvArIAAgPIgBhHIgBgMIgBgMQAAgPAPAAQASAAAAA2IAAARIgBBEIgCARQgCANgNAAQgIABgJgJQgqglgzhCIAAAhIAAAZIAAAaQAAAfgPABQgIAAgFgGg");
	this.shape_126.setTransform(276.7,248.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#0066FF").s().p("AgrBKQgbgXAAg1IAAgPIAAgPIAAgNIABgMQAAgIADgIQAEgKAIAAQAFABAFADQAFAEAAAHIAAASIgBASIAAAPIgBAPQAAAPAFAOQAEARAJAHQAFADAQAAQAbABALgxQAEgYAAguQAAgGAEgFQAFgIAJAAQAHAAAEAGQACADABAGQAAAqgFAXQgFAkgSAZQgIAKgLAHQgOAJgNAAQgbgBgOgJg");
	this.shape_127.setTransform(259.5,249.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0066FF").s().p("Ag4BDQgYgVAAgeQAAgkAXgeQAZghAmAAQAmgBASASQATAQAAAjQAAAkgVAeQgYAhgmABQggAAgWgSgAgigfQgQAVAAAaQAAARAOALQANALAVAAQAWAAAQgXQAPgVAAgaQAAgWgKgJQgKgJgZAAQgXAAgRAYg");
	this.shape_128.setTransform(242.7,249);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0066FF").s().p("AhLBSQgEgEAAgGIABgNIABgNIAAgTIAAgTIAAgTIAAgVIgCgTIgBgTQAAgHAGgEQAFgFAHgBQAIAAAKAOQAwBFAvArIAAgPIgBhHIgBgMIgBgMQAAgPAPAAQASAAAAA2IAAARIgBBEIgCARQgCANgNAAQgIABgJgJQgqglgzhCIAAAhIAAAZIAAAaQAAAfgPABQgIAAgFgGg");
	this.shape_129.setTransform(225,248.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74,p:{x:157.7,y:18.2}},{t:this.shape_73,p:{x:170.8,y:18}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:248.3,y:18.8}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:290.6,y:18.2}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:126.4,y:53.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:290}},{t:this.shape_50,p:{x:310}},{t:this.shape_49},{t:this.shape_48,p:{x:342.1,y:50.8}},{t:this.shape_47,p:{x:355.8}},{t:this.shape_46,p:{x:117.7,y:83.5}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_74,p:{x:157.7,y:18.2}},{t:this.shape_73,p:{x:170.8,y:18}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:248.3,y:18.8}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:290.6,y:18.2}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:126.4,y:53.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_78,p:{x:185.1}},{t:this.shape_77,p:{x:205.1}},{t:this.shape_76},{t:this.shape_75,p:{x:237.1}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:290}},{t:this.shape_50,p:{x:310}},{t:this.shape_49},{t:this.shape_48,p:{x:342.1,y:50.8}},{t:this.shape_47,p:{x:355.8}},{t:this.shape_46,p:{x:117.7,y:83.5}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},22).to({state:[{t:this.shape_74,p:{x:157.7,y:18.2}},{t:this.shape_73,p:{x:170.8,y:18}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:248.3,y:18.8}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_48,p:{x:290.6,y:18.2}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:126.4,y:53.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_51,p:{x:185.1}},{t:this.shape_50,p:{x:205.1}},{t:this.shape_55},{t:this.shape_47,p:{x:237.1}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_78,p:{x:290}},{t:this.shape_77,p:{x:310}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_75,p:{x:355.8}},{t:this.shape_46,p:{x:117.7,y:83.5}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},16).to({state:[{t:this.shape_74,p:{x:157.7,y:18.2}},{t:this.shape_73,p:{x:170.8,y:18}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:248.3,y:18.8}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:290.6,y:18.2}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:126.4,y:53.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:290}},{t:this.shape_50,p:{x:310}},{t:this.shape_49},{t:this.shape_48,p:{x:342.1,y:50.8}},{t:this.shape_47,p:{x:355.8}},{t:this.shape_46,p:{x:117.7,y:83.5}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},14).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_112},{t:this.shape_67},{t:this.shape_66},{t:this.shape_111},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_110},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:290}},{t:this.shape_50,p:{x:310}},{t:this.shape_49},{t:this.shape_65,p:{x:342.1,y:50.8}},{t:this.shape_47,p:{x:355.8}},{t:this.shape_109},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_73,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_74,p:{x:28.5,y:148.8}},{t:this.shape_36,p:{x:41.6,y:148.6}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_68,p:{x:119.1,y:149.4}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_48,p:{x:161.4,y:148.8}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_46,p:{x:323.8,y:148.8}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_61,p:{x:368.8,y:151.7}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},47).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_112},{t:this.shape_67},{t:this.shape_66},{t:this.shape_111},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_110},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:290}},{t:this.shape_50,p:{x:310}},{t:this.shape_49},{t:this.shape_65,p:{x:342.1,y:50.8}},{t:this.shape_47,p:{x:355.8}},{t:this.shape_109},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_73,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_74,p:{x:28.5,y:148.8}},{t:this.shape_36,p:{x:41.6,y:148.6}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_68,p:{x:119.1,y:149.4}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_48,p:{x:161.4,y:148.8}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_46,p:{x:323.8,y:148.8}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_61,p:{x:368.8,y:151.7}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},19).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_112},{t:this.shape_67},{t:this.shape_66},{t:this.shape_111},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_110},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:290}},{t:this.shape_50,p:{x:310}},{t:this.shape_49},{t:this.shape_65,p:{x:342.1,y:50.8}},{t:this.shape_47,p:{x:355.8}},{t:this.shape_109},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_73,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_74,p:{x:28.5,y:148.8}},{t:this.shape_36,p:{x:41.6,y:148.6}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_68,p:{x:119.1,y:149.4}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_48,p:{x:161.4,y:148.8}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_46,p:{x:323.8,y:148.8}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_61,p:{x:368.8,y:151.7}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},27).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,447.5,130.7);


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
(lib.subject_scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1repeat:182});

	// timeline functions:
	this.frame_198 = function() {
		this.gotoAndPlay("scene1repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(198).call(this.frame_198).wait(1));

	// Nav
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(199));

	// Whole Scene 1
	this.instance = new lib.Definition();
	this.instance.parent = this;
	this.instance.setTransform(271,201.3,1,1,0,0,0,223.7,131.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199));

	// Bk
	this.instance_1 = new lib.Background("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,195.5,1.069,1.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(290.2,201.6,526.3,401.5);
// library properties:
lib.properties = {
	id: '62DCCC9E2DF66242AB6EF8B07BB73732',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmSub.mp3", id:"bgmSub"},
		{src:"sounds/ball_bounce.mp3", id:"ball_bounce"},
		{src:"sounds/ball_kick.mp3", id:"ball_kick"},
		{src:"sounds/ball_throw.mp3", id:"ball_throw"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/thesubjectanswerswhoorwhatinfrontoftheveb.mp3", id:"thesubjectanswerswhoorwhatinfrontoftheveb"},
		{src:"sounds/thesubjectofasentenceisalways.mp3", id:"thesubjectofasentenceisalways"},
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
an.compositions['62DCCC9E2DF66242AB6EF8B07BB73732'] = {
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