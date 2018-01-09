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


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiJDxQgegbAAhlIABgsIADg0QgEgGAAgJQAAgKAGgIQAGhaAAgsQAAgLgDgWQgDgXAAgLQAAgmAfAAQANAAAJAJQAmgKAigFQAhgFAdAAQBMAAAtASQAVAJAAAWQAAAMgIAJQgJALgOAAIgKgCQg0gOgxAAQgaAAgdAEQgfAFgjAKQADAUAAAMQAAAsgGBMICIgNQA9gHAOABQAOAAAJAJQAJAIAAAPQAAAcgcADIhLAGIiPAOIgCAqIgCAlQAABFALANQAHAIAqAAIA6gBIA6gBIASgCIASgCQAiAAAAAhQAAAZgbAGQgdAGhhAAQhiAAgbgag");
	this.shape.setTransform(181.5,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ah+DZQg6gbgBgvQAAgNAJgJQAJgIAOAAQAPAAAMARQAQAZAMAIQAbASAzAAQAvgBAqgUQA1gbAAgxQAAgngsgXQgmgTg3gCQgygBgjgTQgsgaAAgwQAAg3A/guQA9gsA/AAQAfAAAmAKQAzAOAAAVQAAAbgcAAQgNABgfgHQgggHgRABQgwAAgiAYQgjAXAAAjQAAAaAuALQASAEAwADQBIAFAoAoQAlAkAAA0QAABLhFAsQg8AnhOAAQg5AAgwgWg");
	this.shape_1.setTransform(138.6,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AjSD0QgJgJAAgOIACgoIACgnIABg6IABg7IgBg9IgBg/QAAgUgDgmQgEgnAAgVQAAgOAMgMQANgMAPABQARAAAYAkQBOB0A/BOQBJBbBZBUQABgOgBgaIgBgoQAAiJgLhRIgIghQgHgVAAgMQAAglAiAAQA2AAAADMIgBBnIgBBoQAAAPgFAjQgFAggcgBQgSABgXgXQiAh5ikjiIgCBHIgBBHIACBOIABBOQAABVghAAQgRAAgKgMg");
	this.shape_2.setTransform(90.8,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiJDxQgegbAAhlIABgsIACg0QgDgGAAgJQAAgKAGgIQAGhaAAgsQAAgLgDgWQgDgXAAgLQAAgmAfAAQAOAAAIAJQAmgKAigFQAhgFAcAAQBNAAAtASQAVAJAAAWQAAAMgIAJQgJALgNAAIgLgCQg0gOgyAAQgZAAgdAEQgfAFgjAKQADAUAAAMQAAAsgGBMICJgNQA8gHAOABQAOAAAJAJQAKAIgBAPQAAAcgcADIhLAGIiPAOIgCAqIgBAlQAABFAKANQAHAIAqAAIA6gBIA6gBIASgCIASgCQAiAAAAAhQAAAZgbAGQgdAGhhAAQhiAAgbgag");
	this.shape_3.setTransform(45.7,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgWDmQgKgJAAgOIABgOIACgOIgCguQgCgfAAgPQAAgtgHhQQgIhYgBgmIgcAAQhFAAgngKQgZgHAAgYQAAgNAIgKQAJgKAPAAIAyAGQAgAEATAAIA5gBIA4gBQAZAAAvAEQAvADAZAAQANAAAJAKQAJAJAAANQAAAOgJAJQgJAJgNAAQgYAAgwgDQgvgEgYABIgXAAQABArAHBhQAIBaAAAyIABAhQADAWAAALQAAAWgHAPQgIAVgTAAQgMAAgKgJg");
	this.shape_4.setTransform(5.6,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AiSDxQgMgNAAgNIAAhbQAAgtAFhSQAHhaAAgoQAAgdAEg5QACgPAIgFQArgOA2AAQA2AAAzAmQA6ArAABAQAABQg+AuQAvAUAXAYQAXAZAAAdQAAAmgpAjQgcAZggAMQhFAchuAAQgNAAgMgNgAhgB9IAABBQBSgDAygVQAWgIAUgSQAUgQAAgIQAAgPgpgTQgegOgbgHIghgFIgNABIgMAAQgRAAgTgDQgCAoAAAfgAhTi6IgBA2IgGB6IAwADQAugEAegZQAggcAAgsQAAgeghgZQghgagjAAQgiAAgOADg");
	this.shape_5.setTransform(-56.7,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AifDtQgJgJAAgOQAAgZgDgxQgCgxAAgZQAAgdAGg4QAGg5AAgcQAAgQgCgfQgEggAAgQQAAgSALgNQALgRAVACIBMAGQArAFAcAQQB/BDAABhQAAAwgrAkQgjAdg0APQBiA1AwA6QAIAKAAALQAAANgJAKQgKAKgNAAQgMAAgKgKQhohnh+gjIADA9IABA+QAAAOgIAJQgKAJgNAAQgOAAgIgJgAhkiMQACAXAAAOQAAAagEAlIgGA9IAOABIANAAQBQAAAngVQASgJAPgQQAQgRAAgNQAAgrgxgmQgtgigxgGIgvgDg");
	this.shape_6.setTransform(-98,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AiJDxQgegbAAhlIABgsIADg0QgEgGAAgJQAAgKAGgIQAGhaAAgsQAAgLgDgWQgDgXAAgLQAAgmAfAAQANAAAJAJQAmgKAigFQAhgFAcAAQBNAAAtASQAVAJAAAWQAAAMgIAJQgJALgOAAIgKgCQg0gOgyAAQgZAAgdAEQgfAFgjAKQADAUAAAMQAAAsgGBMICIgNQA9gHAOABQAOAAAJAJQAJAIAAAPQAAAcgcADIhLAGIiPAOIgCAqIgCAlQAABFALANQAHAIAqAAIA6gBIA6gBIASgCIASgCQAiAAAAAhQAAAZgbAGQgdAGhhAAQhiAAgbgag");
	this.shape_7.setTransform(-138,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag5DkQglhfgviyIgYhWQgThBAAgUQAAgOAKgJQAJgJANAAQAXAAAIAaIALA2IAeBrQAfBzAcBVIACgFIBTjiIAahOQATgtAUgZQAJgMAPAAQAMAAALAJQAJAKAAAOQAAAJgGAKQgUAdgMAfIgYBFIhUDjQgPAogTAmQgKATgRAAQgZAAgKgZg");
	this.shape_8.setTransform(-177.8,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.7,-50.5,413.6,101.1);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(111.3,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgCAAgHQAAgPgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGgBQAEABADADQADADAAAEIABAKIACAJQAAAEgDAEQgDADgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAEAMAIQARAKAAAWQAAARgPAJQgMAIgSAAQgPAAgMgGg");
	this.shape_1.setTransform(102.8,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgKQAAgLAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_2.setTransform(92.8,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYA0QgNAGgQABQgPAAgJgHQgKgGgCgOQgFgcAAgWQAAgPAEgSQABgKAJAAQAFAAADAEQADADAAAEIgCAQIgBAQIABAeQABANACAIIAHACIAIABQANABAPgFIAAgWIAAgUQAAgXACgRQACgKAJAAQAEAAADADQAEADAAAFIgCAoIAAAXIAAAWIAAAIIABAHQAAAEgEAEQgDACgEABQgJAAgCgKg");
	this.shape_3.setTransform(81.6,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgaATABQALAAANAEQAQAGAAAJQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgGgPAAQgKAAgKAUQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgBQAEAAACACQADAEAAAEQAAAHgQAIQgPAHgJgBQgVAAgPgNg");
	this.shape_4.setTransform(70.2,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgaATABQALAAANAEQAQAGAAAJQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgGgPAAQgKAAgKAUQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgBQAEAAACACQADAEAAAEQAAAHgQAIQgPAHgJgBQgVAAgPgNg");
	this.shape_5.setTransform(58.9,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_6.setTransform(47.3,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAaA1IgDgYIgBgXIAAgKIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgEADgEQADgCAFgBQAJABABAOIABAMQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDADgEAAQgKAAgBgKg");
	this.shape_7.setTransform(29.7,19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAPAAAXQAAAXgNAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_8.setTransform(17.8,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_9.setTransform(9.4,17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgLIAAgNIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_10.setTransform(0.9,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgaATABQALAAANAEQAQAGAAAJQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgGgPAAQgKAAgKAUQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgBQAEAAACACQADAEAAAEQAAAHgQAIQgPAHgJgBQgVAAgPgNg");
	this.shape_11.setTransform(-9.9,19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_12.setTransform(-21.2,20);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAaA1IgDgYIgBgXIAAgKIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgEADgEQADgCAFgBQAJABABAOIABAMQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDADgEAAQgKAAgBgKg");
	this.shape_13.setTransform(-38.8,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_14.setTransform(-50.4,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAaA1IgDgYIgBgXIAAgKIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgEADgEQADgCAFgBQAJABABAOIABAMQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDADgEAAQgKAAgBgKg");
	this.shape_15.setTransform(-68.1,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAALgDQAMgDAEgGQADgGAFAAQADAAADADQAEADAAAEQgBAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_16.setTransform(-79.9,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_17.setTransform(-92.3,17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmIAHAqIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_18.setTransform(-106.3,20.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQADgGAFAAQADAAAEADQADADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_19.setTransform(154.8,-12.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_20.setTransform(140.1,-12.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgEADQgDADgDAAQgEAAgDgDgAgGg6QgEgEABgFQgBgFAEgEQAEgEAEAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_21.setTransform(128.6,-15.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_22.setTransform(120.1,-14.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQABgbANgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQADgGAFAAQADAAAEADQADADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_23.setTransform(102.6,-12.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_24.setTransform(90.1,-15.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgCQgJgCAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgDAEAAQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAEIABAGQAAAYgMAAQgDgBgDgDg");
	this.shape_25.setTransform(78.4,-14.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAFQACADAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape_26.setTransform(61.1,-13.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmQAEAaADAQIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_27.setTransform(48.5,-12.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AggAtQgOgPgBgYQAAgXAMgTQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgOgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_28.setTransform(35.1,-12.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_29.setTransform(23.3,-15.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAFQACADAJABIANACQAIgBAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGAAQAEAAADACQADADAAAFIABAKIACAJQAAAFgDADQgDACgFAAQgGAAgCgDQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAFAMAHQARALAAAUQAAASgPAJQgMAHgSAAQgPABgMgGg");
	this.shape_30.setTransform(11.1,-13.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AguBTQgLgJAAgjIABgPIAAgSIgBgFQAAgDACgCIACguIgBgMIgBgMQAAgMALAAQAFAAADADQANgEALgCQAMgCAJAAQAaABAPAGQAIADAAAHQAAAFgDADQgDAEgFgBIgDAAQgSgGgRABQgJAAgKACIgWAEIABAMIgCAoIAugEIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAFIgBAOIAAANQAAAXADAFQADACAOAAIATAAIAUAAIAHAAIAGgBQALgBAAALQAAAKgJABQgKACghAAQghABgJgJg");
	this.shape_31.setTransform(-7,-15.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_32.setTransform(-21.7,-15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AhHBUQgDgDgBgFIABgOIABgNIAAgUIABgVIgBgUIAAgVIgBgVIgCgUQABgEAEgFQAEgDAGAAQAGAAAHAMQAcAoAUAbQAZAeAfAcIAAgNIAAgOQAAgtgFgcIgCgMQgDgHABgFQAAgMALAAQASAAAABGIAAAjIAAAjIgBASQgCAKgKAAQgGAAgIgHQgsgqg3hNIgBAYIAAAYIAAAaIABAbQAAAdgMAAQgGAAgDgDg");
	this.shape_33.setTransform(-38.1,-15.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AguBTQgLgJAAgjIABgPIAAgSIgBgFQAAgDACgCIACguIgBgMIgBgMQAAgMALAAQAFAAADADQANgEALgCQAMgCAJAAQAaABAPAGQAIADAAAHQAAAFgDADQgDAEgFgBIgDAAQgSgGgRABQgJAAgKACIgWAEIABAMIgCAoIAugEIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAFIgBAOIAAANQAAAXADAFQADACAOAAIATAAIAUAAIAHAAIAGgBQALgBAAALQAAAKgJABQgKACghAAQghABgJgJg");
	this.shape_34.setTransform(-53.6,-15.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_35.setTransform(-67.3,-15.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgyBTQgEgEAAgFIAAgfIACgsIADgsQgBgKACgTQAAgFADgCQAPgFASAAQASAAASANQAUAPAAAWQAAAcgWAPQARAGAIAJQAIAIAAAKQAAANgPAMQgJAIgLAFQgXAJgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgDAHgGQAGgFAAgDQAAgFgNgHQgLgFgJgCIgLgCIgEAAIgEAAIgNgBIAAAZgAgcg/IAAASIgCArIAQABQAPgCALgIQALgKAAgPQAAgKgMgJQgLgJgMAAIgQABg");
	this.shape_36.setTransform(-88.7,-15.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZIACgdQADgTAAgKIgBgQIgBgQQAAgGADgFQAEgGAHABIAaACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAhASARATQADAEAAAEQAAAEgEAEQgDADgEAAQgEAAgEgEQgjgjgrgMIABAVIAAAVQAAAFgDADQgDAEgEAAQgFAAgDgEgAgigvIABANIgBAVIgCAUIAEAAIAFABQAbAAANgIQAGgCAFgFQAGgGAAgFQAAgPgRgMQgPgMgRgCIgQgBg");
	this.shape_37.setTransform(-102.8,-15.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AguBTQgLgJAAgjIABgPIAAgSIgBgFQAAgDACgCIACguIgBgMIgBgMQAAgMALAAQAFAAADADQANgEALgCQAMgCAJAAQAaABAPAGQAIADAAAHQAAAFgDADQgDAEgFgBIgDAAQgSgGgRABQgJAAgKACIgWAEIABAMIgCAoIAugEIAagCQAEAAAEADQADADAAAFQAAAJgKABIgaACIgwAFIgBAOIAAANQAAAXADAFQADACAOAAIATAAIAUAAIAHAAIAGgBQALgBAAALQAAAKgJABQgKACghAAQghABgJgJg");
	this.shape_38.setTransform(-116.5,-15.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgSBOQgNgggRg9IgIgdQgGgWAAgHQgBgFAEgDQADgDAEAAQAIAAADAJIAEASIALAlQAKAnAJAdIABgCIAchNIAJgaQAGgQAHgIQADgFAGAAQAEAAADAEQADADABAFQAAADgCADQgHAKgFALIgHAXIgeBOQgEANgIANQgCAHgGAAQgIAAgDgJg");
	this.shape_39.setTransform(-130.2,-15.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAmA4IgIgiIgcAGIgbAFIgTAqQgEAFgFABQgEgBgEgDQgEgDAAgFQABgEAQgjQgCgCAAgEQAAgJAKgCQAMgWAUgeQAYgpAGAAQAIAAADAMIAHAkIAQBKIAHARQACAIAAADQAAAFgCADQgEADgEAAQgKAAgHgZgAgNAIQANgEAagEIgJgpg");
	this.shape_40.setTransform(-152.8,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.7,-33.6,325.5,67.3);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AgBA6QgBAAgBgBQglgVgogUQgygYgmgUQglgRgggbQgDgBgDgBQglgOgkgYQgngYgqgSQgrgTgogaQgkgYglgTQgogVgigaQglgcgBglQABgFACgFQAAgBAAgBQAJgXAUgNQALgIAPgFQAxgPAjAZQADACACACQAIAHAIAHQAeAYAtAbQApAaAkAUQANAHAMAHQAYAPAXAOQAlAYAkAVQAtAYAhAZQApAgAlAZQAJAHAIAGAHHDoQAVgNAbAAQABAAABAAQAaAAAVAIQAQAGAMgEAJZFLQACgDACgDQAAgBABgBQACgCABgDQASgQAWAJQAXAJgIAdQgFAWgRARQgBABgCACAI1FxQgEABgEAAQgXABgMgVQgEADgFABQgXAIgGggQgKAIgMgDQgTgGgJgWAJOFZQgHAPABASQABAkAWACQgBAAAAAAQgUAMgKgPQgNgVACgXQABgBAAAAQAIgDAFgGQAGgHAFgHgAJYFMQgCABgCACQgDAFgDAFAJ/GHQgNANgTAMADoC2QADgGAGgFQAPgPARgSQAJgKAIgIQABgBAAAAQADgDADgDQABgBABgBQAQgOAbADQAJABAIAHAAlgpQAiAdAlAVQAlAVAoAbQAUAOAWANAFoBtQAJgBAKACQADABACACAEzC9QAOgRARgOQASgPASgLQALgHAKABQALACAHANQAFAIgBAHQAMACAFAUQAGAXgJANQAFADAEAEQAEACADADQAEADAEADAFnBtQgZAFgNAUQgMARgRAQADQCsQgggRgpgRQgCgBgCgBQgbgOgUgMQglgWgqgZAGREZQAGgLAKgJQASgQASgMQABAAABgBAF/EQQgBAAgBAAQgRgIgNgKQAUgNAQgRQALgMAOgKQAEgDAEgDAGhCcQgHgBgLAGQgUAMgTAMQgSANgRAPAHkFKQABAAAAAAQAQgNAGgUAIKFeQAGgCAFgEQAPgLAHgQAEpEOQgCgMgNgMQgQgOgUgLQgQgKgBgMQAAgJADgH");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("Ah/CMIAEgBIAAADgABOBsIALgGQAPgLAHgQQgHAQgPALIgLAGIgJAFQgWAHgHgfIACgBQAPgNAGgUQgGAUgPANIgCABQgKAHgMgDQgSgFgJgWIAAgBIgCACQgDAEgEABQgWAKgJgbIAAgCIAHgOQAHgLAJgIQASgRARgLIACgBQAWgNAbABIACAAQAZAAAVAHQAQAGANgEQAaAPAYAVQANALAOAGIgSALQgTAKgLAOIgCADQgFAEgDAHIgEAEIgFAJIgLAOQgGAGgHADIgBABIgJABIgCAAQgVAAgMgUgAiSAcQgBgMgNgMQgRgNgTgLQgRgKAAgMQgBgJADgHIABAAQACgHAGgFQAPgOARgTIASgSIABgBIAGgGIABgBQAQgPAbADQAKABAHAHIABABIgBAAIABAAIABAAQAIgBAKADIAGACQAIgBADAIIgBAHIgDgBIAAAAIAAAAQgJAAgJAGQgRALgTAQQgRANgNARQANgRARgNQATgQARgLQAJgGAJAAIAAAAIAAAAIADABQALABAIANQAFAIgBAIQALACAFATQAGAXgIANIgUgMIAIgGIgIAGQgNAKgMAMQgQARgUAMQAOALAQAHIADABIADADQgDAIAAAIIgGAmQgdgsg0gQgAgshPIgmAXQgTANgRAPQARgPATgNIAmgXIACgBIABgBIAAAAQAGgDAEAAIADgBIAAAAIADABIgDgBIAAAAIgDABQgEAAgGADIAAAAIgBABIgCABgAh6hrQgMASgRAPQARgPAMgSQANgUAZgFQgZAFgNAUg");
	this.shape_1.setTransform(44.4,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#993300").s().p("AJAGdQgNgVACgXIABgBQAIgDAFgGIALgOQgGANAAARIAAADQABAkAWACQgWgCgBgkIAAgDQAAgRAGgNIALgOIAEgGIABgCIADgFQASgQAWAJQAXAJgIAdQgFAWgRARIgDADIAAAAQgNANgTAMIgBAAQgJAGgGAAQgJAAgGgJgAGCEUIABgCIgEgCIgCAAQgRgIgNgKQAUgNAQgRQALgMAOgKIATAMIAJAHIAHAFIAIAGIgCABQgSAMgSAQQgKAJgGALQgJgBgGgEgADXCvIgHgDIAAAAQgggRgpgRIgEgCIgvgaIhPgvIgGgFIgCgBQglgVgogUIhYgsQglgRgggbIgGgCQglgOgkgYQgngYgqgSQgrgTgogaQgkgYglgTQgogVgigaQglgcgBglIADgKIAAgCQAJgXAUgNQALgIAPgFQAxgPAjAZIAFAEIAQAOQAeAYAtAbQApAaAkAUIAZAOIAvAdQAlAYAkAVQAtAYAhAZQApAgAlAZIARANQAjAYAiASQAiAdAlAVQAlAVAoAbIAqAbIAeATQAQAJARAIIgRASQgRASgPAPQgGAFgDAGIAAABIgRgIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-43.1,135.2,86.3);


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


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3366").ss(3,1,1).p("EAlbAVBMhK1AAAMAAAgqBMBK1AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DDF5FF","#3399FF"],[0,1],0,-134.5,0.1,134.6).s().p("EglaAVBMAAAgqBMBK1AAAMAAAAqBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-240.9,-135.9,481.9,272), null);


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


(lib.animCarmen_ready = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(10));

	// Layer 3
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(234.5,-135.5,1,1,0,0,0,46,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:46.1,regY:27.9,scaleX:1,scaleY:1,rotation:13.8,x:234.6},5).to({regX:46,regY:28,scaleX:1,scaleY:1,rotation:0,x:234.5},5).wait(10));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("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QgMgFgHgLQgEgGgEgIQgFgLgFgNQABAAAAgBIAAAAQAGgEAAgMQgBgKgBgJAh+tDQAFgBAEAAQANABACAHQABADgDAFAh0tQQgCAGgEAEQgCABgCACAiHtnQgDABgDAAAi5t6QAKgGAIgJQADgKgCgIQgBgEgCgDAjvtvQACgBABgBQAGABAEAEQAQAOAEAbQAFAdgXAJQgaAJgagJQgZgJgJgTQgFgIgBgJQgDgdgKgSQAIAHAOAFQACAAABABQAEABAEABQgDgDgCgCQgBgCgBgDQgJgKgEgOAjvtvQgCgBgDgBQgMgEgBgOAj/trQACAAACgBQAIgBAEgCAkZuAQAIAMAKAFQAEADAEABAj/rMQACgGAEgFQAJgNAQgFQASgGARAHQAYALAaAAQAQAAAGgIAlNueQAXACAWAEQAEABAFABQAMADAJAFAkPtpQgDgCgEgCQgBgBgCgBQgMgIgCgRAkotqQAMACANgBQAIAAAIgCAlJt5QgJgIgEgKAkqrtQgOAYASASAlKovQAEgGAEgFIAAgBQAFgGALgDQAAABAAABQABAaAMASQABACABABQAHAJAGAJQAGAKAFALQAKAWANAVQAMAVACAeQABAOAIANQAEAHAFAFAlSpvQAGAbACAbQAAAFAAAFAkKpTQABABgBACQAAAAgBAAQgSAJgVAFAl6nNIAAAAQgEAHgEAHQACgFACgEQACgDABgCQAMgTAIgRQAKgVAKgXQgBgBgBgBQADAAABgBQgBACgBABAkjoTQAGAKAFAJAlRogIAAAAQABgCAAgBQACgEACgEQABgCABgCAhwp/QACgGADgGQAAgCABgBQAFgNAEgMQABgBAAgBAowpjQAAgDgBgCQgEgQADgUQADgdgCgdQgBgcACgYQAAgBAAgCAowr7QAAgBAAgBAovpbQABgEgBgDQgBgBAAAAQAAAAAAABQABADAAAEQADATACAVQADAXABAcQAAAcgDAcQgDAbgFAbQgFAZgKAXQgJAVgMASQgMATgSAPQgRAOgQANQgIAGgNACQAUARAmAAQAiABAdgIQAdgHAYgKQAJgEAHgEAowpjQAAgDAAgCQADADADADAmCm/QgGAKgHAKQgMASgOASQgNARgLAUQgKATgIAVQgJAXgKAUQgCADgBAEQgBABgBACQgGANgHAPQgBADAAADQgFAWgJARQgKAVgGAYQgGAWgIAZQgKAeANAUQAEAFAGAEQAZAMAXgLQAVgKATgNQAXgRARgPQAPgNAOgMQAQgPASgRQAVgUARgSQATgTAQgRQAPgQAKgaQAFgMAFgMQgBgbgBgcAjlk5QAAABAAABAm4jYQATgLANgTQAMgRAUgOQAOgKAMgKQATgRANgQQABgCAAgBQAJgnALgiAjrCXQgCACgBABQgCACgCADQgHAHgHAIQABAAACABAhJDwQAEgGADgHQgBgDACgBQABAAAAAAQAMAJAIAHQAGAFAGACQgUAFgVgLQgIANgNAMQgPAPgSAQQgQAOgUAMQARAOAJASQAKATALAYQALAZAKAWQALAYAGAZQAGAaAIAXQAIAZAJAZQAKAaAIAXQAIAYAMAUQAMAWAKAbQAKAaARAQQASARAQARQATAUAQARQAHACABAGQgDgDgDgDQgBgBgBgBAkACuQgGAGgGAHQgGAHgHAIQgJAJgKALQgTATgSATQgSASgMAWQACAZAIAXQAJAZAHAYQAHAaANAWQANAWAMAYQALAXAOAVQAPAVAPAYQAOAVANAWQANAWAPAUQAOATARAVQAOAUASAUQARASAQAPQALAKAIAMQADAEADAEQAJANAFAPQgSARgVAJQgDABgDABQgUAJgWAIQgYAKgaAJQgYAKgZAGQgYAHgXAKQgEACgDABQgCABgBAAQgYAGgPAQQgLALAMAHQAEADADADQABAAAAABQAAgBABgCQAFgWAeAEQAMABAEgCAkhB/QAAgBAAAAQAAgBAAAAAkACuQgHgFgFgEQgQgPgFgXAkoPgQAGgCAEgFQAGgHALgBQAPgDgEACAkoPgQAKANATAAQAIAAAIgCQAOgDAMgEAlDPVQAPAQAMgFAkLPtQAJAVAeACQAfACAXgJQAWgKAUgMQAVgPAXgMQAVgMAbgCQAegCAbgDQAZgDAXgIAGBD1QAFABACABQACABABAAQACAAABAAQAAAAgBABQgCAAgBAAQgBAAgBABQgBgBAAAAQgFAFgOACQgbAEgbAEAGHD5QgDgCgDgCQgSgNgUgIQgCgBgCgBQgBAAAAAAQgIgDgJgDQgRgFgTgCQgfgDgegDQgjgEggAHQgbAFgYAMQgDABgCABQgBAAgBABQgEARgFARQgWgBgDgQIAAgBQABAAAAAAQAQgIARgIAGLD4QACgCACAAQAAABgBABAFWDeQgLATgKATQgBACgCACQgKASgMARQgOATgOAUQgNAUgMAWQgMAUgNASQAXgDARAQQAUATAOASQARAUAOAUQAQAVAMAYQANAYALAWQALAWALAXQAMAYAIAXQAJAZASAUQAQARATARQALALAMAIQADABADACQACABACABQARALAVAOQAVAOAUAMQASALAVAIQACABACABQAVAIARAPQAWASgaAQIAAABQAHAYgjAHQAGAUgdADQAAAVgXAFQgCAAgCABQgCgBgBAAQgMgGgNgHQgJgEgHgGQgTgQgVgOQgYgOgOgQQgSgTgNgWQgFgIgEgIQgIgOgFgMQgBgBgCgBQgRgMgWgOQgXgPgTgUQgSgRgRgSQgTgSgRgTQgQgRgSgUQgTgWgOgVQgPgXgRgRQgUgXgOgUQgMgSgSgVQgQgUgLgZQgLgYgNgRQgEgdAIgWQAKgaAKgUQALgVAIgWQABgCABgDQACgFABgFABXCbQgCACgBABQgKAJgKALQgRASgQANQgSANgSAPQgLAIgKABQgDAAgDAAABYCXQgDABgCADIAAAAQADgCACgCgABTCbQACAAACgBQAAABAAAAABdCWQAAgBAAAAQAAgCAAgCQADgDACgDQAMgRAHgbQAGgYACgaABdCRQgCADgDADABdCVQgDABgCABABdCWQgDADgDACABFDvQAHgUAHgXQAGgUAEgaABFDyQgBABgBAAQABgCABgCQAAACAAABgABNOlQALgKAJgMQAOgSAFgYQABgCAAgDQAAgFAAgEQADAEACAFABNOlQgCAGgGACQgBAAgBABQAAAAAAAAQgBAAgBAAQAGgEAGgFgAGfNGQAFADADAAAKAO7QAAgDgCgDQgIgSgTgKAJpPSQgBgcgdgDAKcObQgGgWgWgIAi9u6QgTANgJAV");
	this.shape.setTransform(249.2,-104.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag+AZQgGgPAHgGQAEgDAGgBIALABQADABAEAIQAHAOgQAFIgKABQgHAAgDgFgAAjgIQgOgQAPgEIAFgBIAEAAQAIACAIAHIADAEQAFAHgIAEIgDABQgGACgEAAQgIAAgFgGg");
	this.shape_1.setTransform(231.4,-188.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BAQgZgIgJgTQgFgJgBgIQgDgcgKgTQAJAHANAFIADABIAIACQAMACANgBIARgCIADgBIAMgDIADgCQAGABAEAEQAPAOAEAaQAFAegWAIQgNAFgNAAQgNAAgNgFgAgHAUQgHABgDADQgIAFAHAQQAEAIAOgFQAQgEgHgOQgDgIgDgBIgGgBIgEAAgABRAdIgKgDQgMgFgHgKIgHgOQgGgLgFgNIABgBIAAAAQALgGAHgJQAGgHADgIIAEgKQATAOANARQAPASgFAWIgEgDQgIgHgHgDIgEABIgGABQgOAEAOAPQAIAJAOgFIAEgCQgDAGgEAEIgDADQgGADgHAAIgBAAg");
	this.shape_2.setTransform(227.1,-190.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("AkpGQQglgBgVgQQAOgCAHgGIAhgbQASgPAMgTQAMgSAKgWQAKgWAEgaQAFgbADgaQAEgcgBgdQAAgbgDgYIgFgoIAAgDIgBgDIAGgBIgHgGIAAAAQgEgPACgTQADgdgBgeQgCgcADgYIAAgCIAAgFIABgGIAGgmQAEgcAIgZIAEgIQAGgSALgOQAOgTAQgRQARgRAbgKQASgHAVgBIANABIAWABIAjAEQAUADASAHIABACIgfATIgCABQgUALgMAWIgUAoQgLAWABAgIABAMQACAWAFAUIAMAuQAIAZALAVQAKARAFAYIABACQAGAaABAcIABAKIgCADIgEAIIgBADIgBABIgDABIACACIgUArQgIASgMASIgDAFIgEAJIgOAVIgaAkQgMARgLATQgLAUgIAVQgIAWgKAUIgEAHIgBADQgHAEgKAEQgYAKgcAIQgbAHggAAIgFAAgAg7C1IAAAAgAg3CsIADgFIABAAIAAABIgIANIAEgJgAjpATIAAAAIABADIAAADIgBgGgAjpATIAAAAgADrhFIAHgaQAHgbgEgaQgEgXgTgUQACgFAAgDQgCgHgNAAIgJAAIAEgDQAEgEACgFQAIgFgFgGQAFgXgOgRQgOgSgSgOIgEgCIgfgWIgIgGQgTgMgdAAQgeAAgXALQgSgHgUgDIgjgEIAqgXQARgKAbgMQAYgLAaAFQAaAFATAKQAVAMAUAQQASAPANASQAOASAJAVQAJAVANAWIAZAqIATAjIAGALQAMAYAQAPIAYAUIABADQgXAHgYAGIgWAFIgCABIgYAGQgRAFgOAHIAFgRgAjqiFIABgCIAAACg");
	this.shape_3.setTransform(216.5,-167.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AkkPpQgegDgJgVIABAAIABAAQAGAAAIgCQAOgCAMgFQgMAFgOACQgIACgGAAIgBAAIgBAAQgTAAgJgNQAFgCAEgFQAGgGALgCIABAAIABAAIAAAAIAHgBQABAAABAAQAAAAABAAQAAAAAAAAQAAAAgBABIAAAAIAAAAQABgBAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgHABIAAAAIgBAAIgBAAQgLACgGAGQgEAFgFACQgNAFgPgPIAAgBIAAgBIAAAAQAGgRAVAAIAAAAIAAAAIAHAAIAAAAIAAAAIAAAAIABAAQAMACAEgDQgEADgMgCIgBAAIAAAAIAAAAIAAAAIgHAAIAAAAIAAAAQgVAAgGARIAAAAIAAABIAAABIgBACIgIgGQgMgIALgLQAPgQAYgGIADAAIAHgEQAXgKAYgGQAZgHAYgJIAygTIArgRIAFgDQAVgJASgQQgFgPgJgOIgGgIQgIgMgLgJQgQgPgRgTQgSgTgOgUIgfgpQgPgTgNgWIgbgsIgegsQgOgVgLgXQgMgYgNgWQgNgWgHgaIgQgxQgIgXgBgaQALgVASgTIAlgmIATgUIANgOIAMgOIADACIgDgCIAPgPIADgEIADgDIADAAQAZAFAaAGQATAFAUAIQASAHAPAKIAfAUIANAKQAAAAgBABQAAAAAAABQAAABAAAAQAAABAAABIgHAMQgIANgNAMIghAfQgQAOgUANQARANAJATQAKATALAYIAVAvQALAXAGAaQAGAZAIAYIARAyIASAxQAIAYAMAUQANAWAKAaQAKAbARAQQASAQAPASIAjAkIACACIAGAHIAAAJIgBAEQgFAZgOASQgJAMgLAKIgMAJQgWAIgZADIg6AFQgbACgVALQgXANgVAOQgUANgWAJQgTAIgZAAIgKAAgAILPQIgZgMQgJgFgHgFQgTgQgVgOQgYgPgOgQQgSgTgNgVIgJgQQgIgOgFgNIABABIACABIADABIACAAIAAAAIAAAAIAAAAIAAAAIgCAAIgDgBIgCgBIgBgBIgDgCIgngaQgXgOgTgUIgjgjIgkglIgigmQgTgVgOgVQgPgXgRgSQgUgWgOgUQgMgTgSgVQgQgTgLgZQgKgYgMgSQgFgdAIgWQAKgaAJgUQALgUAIgXIACgEIADgLIAKgiIABAAIAFgDQAYgMAbgFQAggGAjADIA9AHQATACARAFIARAFIgVAmIgCAEQgLATgMARIgcAmQgNAVgMAWQgLATgOATQAXgEARARQAUATAOASQARAUAOATQAQAWAMAXIAYAuIAWAtQAMAZAIAXQAJAZASAUQAQAQATASQALAKAMAIIAGAEIAEACIAmAYIApAbQASALAVAIIAEABQAVAIARAPQAWASgaARQgGgXgWgIQAWAIAGAXIAAAAQAHAZgjAGIgCgGQgIgSgTgJQATAJAIASIACAGQAGAVgdACQgBgbgdgEQAdAEABAbQAAAWgXAEIgEABIgDgBgAJcOAIAAAAgApYhBQgGgDgEgGQgNgTAKgeIAOgwQAGgXAKgWQAJgRAFgWIABgFIAOgdIABgCIADgIQAKgUAJgWQAIgVAKgUQALgTANgRIAagkIANgVIAIgNIAAAAIAAgBQALgSAIgSIAVgrIABgDIAAAAIACgEIADgHIACgEIAIgMIAAAAQAFgHALgCIAAACQABAZAMASIACAEIALATIACgBIALAUQAKAWANAWQAMAVACAeQABANAIAOIAJALQgRAVAAAaIABAAIgBACIAAgBIAAgBIAAABIAAABIgCAFIgGASIgCg3IACA3IgKAYQgKAZgPAQIgjAlIgmAmIgiAfIgdAaQgRAPgXAQQgTANgVAKQgLAGgLAAQgNAAgNgHgAl9lpIgBADQgNARgTAQQgMALgOAJQgUAOgMASQgNASgTAMQATgMANgSQAMgSAUgOQAOgJAMgLQATgQANgRIABgDQAJgmALgiQgLAigJAmgABIh0QgOgBgNgDIgngIIgKgCIgugPIgCgDQgHgPgGgTIAAAAQgJgWgMgSIgXgnQgKgSgXgNQgXgMgMgVQgKgUgFgYIAFgBQAZgIAcgBIAfgCQAfgCATgJQAMgFAMgCQAagGAYgDIADgBIAUgKIABgBQAUgLARgOQAQgNAUgNIAdgVIAIgHIALgKIAQgOIANgJIAWgTQATgOAOgTIAQgVIAMgOQAJgJACgPIgKADQgYAFgcACIgEAAIg4ADIgvACQAJATAQAOQAPAOAMAUIAJAPIADAEIABACIAEAEIACACQgGgCgXAAQgUABgTAEIgFABQgdAHgYgEQgdgEgUgKQgTgKgTgPQgVgPgOgSQgQgSgMgVIAAAAQgLgSgIgYQgIgXAIgYIACgBIAVgFQAYgGAXgHIACAAIgDgCIA1gGIAIgBQAYgDAaACQAcACAeAAIA3AAQAdAAAdABQAcACAbgDQAegDAbACQAeACAZAEIASACIAMACQAQAHAIAPQAMAXgHAdQgFAXgNAUQgOAWgJATIgWAoQgKARgUALIgCABIgFAHIgBACQgKALgMAJQgUAPgRAPIgUAPIgTANIgFADIgBABQAGAWAOAPIAQARQAPASAUANIAmAXQAPAJASAFIgYAqQgNAagVAMIgpAZIgoAXIgvAXQgWAKgXAIQgXAIgdAIQgSAFgWAAIgPgBgABJiaQAKAAAEgJIABgBIAAAAQgMACgKAHIAEABIADAAIAAAAIAAAAgAhtkOIBAgJIhAAJgADnmXQgXANgUAOQgTAOgYANQgVALgXALIgKAEIgFACQgOAJgQAGIgFACIgxAQIgsANIAsgNIAxgQIAFgCQAQgGAOgJIAFgCIAKgEQAXgLAVgLQAYgNATgOQAUgOAXgNIAlgUIglAUgAAEmOIgrAXIgfAPIgDABIgIADIAAABQgeATgmAGQAmgGAegTIAAgBIAIgDIADgBIAfgPIArgXIAUgLIgUALgABJiaIgDAAIgEgBQAKgHAMgCIAAAAIgBABQgEAJgKAAIAAAAIAAAAgABCibIAAAAgAjxmaIAAAAIAAABIAAgBgAkMmkIABABIgBAAIAAgBgAivnyQgZgEgSgMQgTgNgRgOQgQgNgKgUQgFgLgJgGQgTgMgQgTIAAgDQASAFAUABQAeADAcAAIACAAIABAAIAAAAIAAAAQAaAAALgRIABgBIABgCQAIgPAHgQQgHAQgIAPIgBACIgBABQgLARgaAAIAAAAIAAAAIgBAAIgCAAQgcAAgegDQgUgBgSgFIgBgBIgCAAIgIgDQgXgJgagIIgNgEIAAgCQgGgZgKgRQgLgVgHgZIgMguQgFgUgCgWIgBgMQgBggAKgWIAUgoQANgWAUgLIABAAIAhgUIABgBIgCgBQAWgLAeAAQAeAAASAMIAJAGIAeAWIAEADIgEAKQgEAIgFAGQACgFAAgFIgBgHIgDgHIADAHIABAHQAAAFgCAFQgHAJgLAHQAGgEAAgKIAAgCIgCgUIACAUIAAACQAAAKgGAEIAAAAIgBAAQAFANAGAMIAHAOQAHALAMAFIAKACQAIABAGgEIAIAAQANAAACAHQABADgCAFIgGAJQgKAPgOAMQAOgMAKgPIAGgJQATAUADAXQAEAagGAbIgIAaIgFARIgBACIgJAZIgBADIgFAMQAUAMAKATQAKATAMASQAMATAEAbQABAIgBAGQgCAKgFAHQgFAJgGAGQgLALgWAAIgQgCgAlmrfQgKgKAAgMQAAgJAGgKQgGAKAAAJQAAAMAKAKgAkgsFQgPAFgKANIgGALIAGgLQAKgNAPgFIAAAAQAIgCAHAAIABAAIAAAAQAIAAAIACIABABIABAAIAAAAIABABQAYAKAaAAIABAAIAAAAIABAAIAAAAQAPAAAFgIQgFAIgPAAIAAAAIgBAAIAAAAIgBAAQgaAAgYgKIgBgBIAAAAIgBAAIgBgBQgIgCgIAAIAAAAIgBAAQgHAAgIACIAAAAgAl8tlQABAIAFAJQAJATAZAIQAaAKAagKQAXgIgFgeQgEgagQgPQgEgEgGgBIgDACIgFgBQgMgFgBgOQABAOAMAFIAFABIgMAEIgDABQgFgBgEgDQgKgGgIgMQAIAMAKAGQAEADAFABIgRACIgGgFIgEgCQgMgIgCgQQACAQAMAIIAEACIAGAFQgNAAgMgCIgFgFIgCgEQgJgLgEgOQAEAOAJALIACAEIAFAFIgIgCIgDgBQgOgEgIgIQAKATADAdgAmJuVQgJgHgEgKQAEAKAJAHgAlgu0IAJACQAMADAJAGQgJgGgMgDIgJgCQgWgEgXgCQAXACAWAEgAkZu0QAJgVAUgNQgUANgJAVgAmVo6IAEgBIgBADIgDgCgAjnulIAAAAg");
	this.shape_4.setTransform(255.6,-101.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#339966").s().p("ADGHeIAVgmIABAAIAEACQAUAIASANQgSgNgUgIIgEgCIgBAAIgRgFQgRgFgTgCIg9gHQgjgDggAGQgbAFgXAMIgFADIgBAAIgiARIAigRIgKAiQgWgBgDgQIABAAIgBgDIAOgrQAGgVAEgaIAAgBIABgDIAEgHQAMgRAHgbQAFgXACgbQgCAbgFAXQgHAbgMARIgEAHIgFAFIgGAEIABAAIADgBIAAACIgDACIgUAUQgRATgQAMIglAcQgLAJgJAAIgHAAQgGgBgGgFIgUgQIgBgBIABABIAUAQQAGAFAGABQgUAGgVgMIAHgMQAAgBAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAIgNgKIgfgUQgPgKgSgHQgUgIgTgFQgZgGgagFIgDgBIgFAAQgfgGgRgSIgBgBQALgQAUgMQAYgPAUgUIATgSIAXgWQAWgTAWgPIAsgeIAmgbQARgOAMgSQACAaAEAaQACAMAEAMQgEgMgCgMQgEgagCgaIAEgCIAAgBQANgHAMgKIACACIAuAPIACABIAJABIAnAIQANADANABQAfACAYgGQAdgIAXgIQAXgIAWgKIAvgXIAogXIApgZQAVgMANgZIAYgqIAHACQARAKAPAPQAUASAIAaQAHAaADAcQAEAcgHAbIgQAzQgJAbgKAVQgLAXgOAUIgBABQgGAKgDAMQgFAZgNAUQgMATgLAcIgCAGIgQAoQgKAYgJAQQgDAAgCACIgDAAIgHgDIAGAEQgFAFgOACIg1AIIACgEgAhvCYQgPgQgKgUQAKAUAPAQgAmHF/QgQgOgEgYQARASAfAGIAFAAIgDAEIgDAEIgPAPQgHgEgFgFgAkth6QgUgEgOgPIgJgLQgIgOgBgNQgCgegMgVQgNgWgKgWIgLgUIgNgSIANASIgCABIgLgTIgCgEQgMgSgBgZQAVgGASgIIACgBIAAgDQARAUASAMQAJAGAFALQAKAUAQANQARAOATANQASAMAZAEQAiAFAPgOQAHgGAEgJQAFgHACgKQABgGgBgIQgEgbgMgTQgMgSgKgTQgKgTgUgMIAFgMIABgDIAJgZIABgCQAPgHAQgFIAZgGQgIAYAIAXQAIAYALASIAAAAQAMAVAQASQAOASAVAPQATAPAUAKQAUAKAcAEQAYAEAdgHIAFgBQATgEAUgBQAXAAAGACIgCgCIAGADIgNAKIgQAOIgLAKIgIAHIgdAVQgUANgQANQgRAOgTALIgBABIgUAKIgDABQgZADgaAGQgMACgMAFQgTAJgfACIgfACQgcABgZAIIgFABQgNADgNAAQgMAAgMgCgAksikIAAABIAAgBgAlHitIABAAIgBgBIAAABg");
	this.shape_5.setTransform(261.5,-126.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120.9,-208.3,197.5,207.8);


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
		var bgm = createjs.Sound.play('bgmVT',{loop:-1});
		
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
		
		 window.open ("intro_Scene2.html","_self");
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

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-283.9,-13,331.7,399), null);


(lib.contentverbtenseintro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("space_blip");
	}
	this.frame_11 = function() {
		playSound("verbtense");
	}
	this.frame_90 = function() {
		playSound("pastali");
	}
	this.frame_107 = function() {
		playSound("presentAli");
	}
	this.frame_124 = function() {
		playSound("futureAli");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(10).call(this.frame_11).wait(79).call(this.frame_90).wait(17).call(this.frame_107).wait(17).call(this.frame_124).wait(60));

	// character
	this.instance = new lib.animCarmen_ready();
	this.instance.parent = this;
	this.instance.setTransform(-144,-65,0.397,0.397,0,0,0,219.6,-104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184));

	// text1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiJDxQgegbAAhlIABgsIADg0QgEgGAAgJQAAgJAGgJQAGhbAAgqQAAgNgDgVQgDgXAAgLQAAgmAfAAQANAAAKAJQAmgKAhgFQAhgFAdAAQBLAAAuASQAVAIAAAXQAAAMgIAJQgJALgOAAIgKgCQg0gPgxABQgaAAgeAEQgeAFgjAKQADAUAAANQAAArgFBMICHgNQA9gHAOABQAOAAAJAJQAJAIAAAPQAAAcgcADIhLAHIiQAMIgCArIgBAlQAABFAKANQAIAIAqAAIA5gBIA7gBIATgCIASgCQAhAAAAAhQAAAZgbAGQgdAGhiAAQhhAAgbgag");
	this.shape.setTransform(224.4,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ah+DZQg6gbgBgvQAAgNAJgJQAJgIAOAAQAPAAAMARQAQAYAMAJQAbARAzABQAvgBAqgUQA1gbAAgxQAAgngsgXQgmgTg3gCQgygBgjgTQgsgaAAgvQAAg4A/guQA9gsA/AAQAfAAAmALQAzANAAAVQAAAbgcAAQgNABgfgHQgggHgRAAQgwABgiAYQgjAXAAAjQAAAaAuALQASAEAwADQBIAFAoAoQAlAkAAA0QAABLhFAsQg8AnhOAAQg5AAgwgWg");
	this.shape_1.setTransform(181.5,31.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AjSD1QgJgLAAgNIACgnIACgpIABg5IABg7IgBg9IgBg/QAAgUgDgmQgEgnAAgVQAAgOAMgMQANgMAPABQARgBAYAlQBOB0A/BOQBJBbBZBTQABgNgBgaIgBgoQAAiJgLhRIgIghQgHgVAAgMQAAglAiABQA2AAAADLIgBBnIgBBoQAAAPgFAjQgFAggcgBQgSAAgXgWQiAh4ikjjIgCBHIgBBGIACBPIABBOQAABUghABQgRgBgKgKg");
	this.shape_2.setTransform(133.7,31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiJDxQgegbAAhlIABgsIADg0QgEgGAAgJQAAgJAGgJQAGhbAAgqQAAgNgDgVQgDgXAAgLQAAgmAfAAQANAAAKAJQAmgKAhgFQAhgFAdAAQBLAAAuASQAVAIAAAXQAAAMgIAJQgJALgOAAIgKgCQg0gPgxABQgaAAgdAEQgfAFgjAKQADAUAAANQAAArgFBMICHgNQA9gHAOABQAOAAAJAJQAJAIAAAPQABAcgdADIhLAHIiPAMIgDArIgBAlQABBFAJANQAIAIAqAAIA5gBIA7gBIATgCIASgCQAhAAAAAhQAAAZgbAGQgdAGhiAAQhhAAgbgag");
	this.shape_3.setTransform(88.6,30.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgWDmQgKgJAAgOIACgOIABgOIgBguQgDgfAAgPQAAgtgHhQQgHhYgBgmIgdAAQhFAAgngKQgZgHAAgYQAAgNAIgKQAKgKAOAAIAyAGQAfAEAUAAIA5gBIA4gBQAYAAAwAEQAvADAYAAQAOAAAJAKQAJAJAAANQAAAOgJAJQgJAJgOAAQgXAAgwgDQgvgEgZABIgWAAQABArAIBhQAGBaABAyIACAhQACAWAAALQAAAWgHAPQgJAVgSAAQgMAAgKgJg");
	this.shape_4.setTransform(48.5,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AiSDxQgMgNAAgNIAAhbQAAgtAFhSQAHhaAAgoQAAgdAEg5QACgPAIgFQArgOA2AAQA2AAAzAmQA6ArAABAQAABQg+AuQAvAUAXAYQAXAZAAAdQAAAmgpAjQgcAZggAMQhFAchuAAQgNAAgMgNgAhgB9IAABBQBSgDAygVQAWgIAUgSQAUgQAAgIQAAgPgpgTQgegOgbgHIghgFIgNABIgMAAQgRAAgTgDQgCAoAAAfgAhTi6IgBA2IgGB6IAwADQAugEAegZQAggcAAgsQAAgeghgZQghgagjAAQgiAAgOADg");
	this.shape_5.setTransform(-13.8,30.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AifDtQgJgJAAgOQAAgZgDgxQgCgxAAgZQAAgdAGg4QAGg5AAgcQAAgQgCgfQgEggAAgQQAAgSALgNQALgRAVACIBMAGQArAFAcAQQB/BDAABhQAAAwgrAkQgjAdg0APQBiA1AwA6QAIAKAAALQAAANgJAKQgKAKgNAAQgMAAgKgKQhohnh+gjIADA9IABA+QAAAOgIAJQgKAJgNAAQgOAAgIgJgAhkiMQACAXAAAOQAAAagEAlIgGA9IAOABIANAAQBQAAAngVQASgJAPgQQAQgRAAgNQAAgrgxgmQgtgigxgGIgvgDg");
	this.shape_6.setTransform(-55.1,30.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AiJDxQgegbAAhlIABgsIADg0QgEgGAAgJQAAgJAGgJQAGhbAAgqQAAgNgDgVQgDgXAAgLQAAgmAfAAQANAAAKAJQAmgKAhgFQAhgFAdAAQBLAAAuASQAVAIAAAXQAAAMgIAJQgJALgOAAIgKgCQg0gPgxABQgaAAgeAEQgeAFgjAKQADAUAAANQAAArgFBMICHgNQA9gHAOABQAOAAAJAJQAJAIAAAPQAAAcgcADIhLAHIiQAMIgCArIgBAlQAABFAKANQAIAIAqAAIA5gBIA7gBIATgCIASgCQAhAAAAAhQAAAZgbAGQgdAGhiAAQhhAAgbgag");
	this.shape_7.setTransform(-95.1,30.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag4DlQgnhgguiyIgYhWQgThBAAgUQAAgOAKgJQAJgJANABQAXAAAHAZIAMA2IAeBrQAeBzAdBVIACgFIBTjiIAahOQASgtAUgZQAKgMAPAAQAMAAALAJQAJAKAAAOQAAAJgGAKQgTAcgNAhIgXBEIhVDjQgPAogTAmQgJATgTAAQgYAAgJgYg");
	this.shape_8.setTransform(-134.9,31.2);

	this.instance_1 = new lib.Tween30("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(42.9,28);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_1}]},10).wait(155));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({scaleX:0.42,scaleY:0.42,y:-95.3},10).wait(155));

	// text2
	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(51.8,53.4,0.091,0.091);
	this.instance_2._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgKBVQgGgEAAgHIABgFIAAgFIAAgRIgBgQQAAgQgDgaQgDgfAAgLIgGAAQgaAAgQgEQgNgDAAgMQAAgGAFgFQAFgGAIABIASACIATABIAVAAIAVAAIAaABIAbABQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAIgcgCIgdgBIADAwQADAdAAASIABAMIAAALQAAAJgDAHQgFAJgJAAQgFAAgFgEg");
	this.shape_9.setTransform(-77.7,131.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ag/BNQgOgLAAgPQAAgHAEgFQAFgFAIAAQALAAAEAKQAHAPAYAAQASAAATgIQAUgKAAgKQAAgQgMgEQgIgDgagBQgUAAgQgHQgWgJABgTQAAgWAYgTQAYgUAcAAQAMAAAQAGQAVAHAAAIQAAAGgEAFQgFAFgHAAQgFAAgMgDIgQgCQgPAAgNAIQgOAHAAAJQAAAEAEADQAEACAJACIAdACQAaABAPANQARANAAAZQAAAegjAQQgaALggAAQgfAAgRgMg");
	this.shape_10.setTransform(-94.5,132.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AA8BYQgKAAgJgWQgGgNgFgSIgcACQgRABgKACQgGANgNAaQgFAIgJAAQgHAAgFgEQgFgEAAgHQAAgGARgjQgCgDABgDQAAgGALgDQARgcAUgfQAcgsAHAAQANAAAEAPIAIAmIARBMIAGAPQAEALAAAFQAAAGgFAFQgEAEgGAAIgBAAgAgIALIAPgCIARgBIgIgnIgYAqg");
	this.shape_11.setTransform(-111.7,132);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("Ag0BZQgFgEAAgHIAAggQAAgTADgiIACg2QAAgfARABIALgBIARgBQAWABAUAPQAXAQAAAYQAAAegYARQgVAPgcAAIgKgBIgBA2QAAAHgEAEQgFAEgGABQgHgBgEgEgAgVguIgCApIAIABQARAAAMgIQANgKAAgPQAAgKgMgIQgMgIgMAAIgHABIgFAAIAAAQg");
	this.shape_12.setTransform(-126.7,131.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AhRBaQgFgEAAgHIABgOIABgOIAAgVIAAgVIAAgVIAAgXIgCgUIgBgVQAAgHAGgGQAGgGAIAAQAIAAALAPQA0BMA0AvIAAgRQAAg5gBgUIgCgNIgBgNQAAgQARAAQATAAAAA7IAAASIAABJIgCATQgDAPgPAAQgIAAgKgJQgtgpg4hIIgBAkIABAcIAAAcQAAAjgRAAQgIAAgFgGg");
	this.shape_13.setTransform(50.5,131.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("Ag1BaQgOgMAAgmQAAgPADgfIACgvIgBgMIgBgMQAAgSAQAAQAFAAAEADIAagFIAXgCQAdAAASAHQAKAEAAALQAAAGgDAFQgFAFgHAAIgGgBQgSgFgSAAIgSACQgKABgMADIgBAuIAtgEIAdgCQAHAAAFAEQAEAEAAAIQAAANgOABIgcADIgyAEIgBAYQABAXACADQABACAOAAIAUAAIAXgBIAHAAIAGgBQAHAAAFAEQAGAEgBAIQABANgOADQgMACgkAAQgmAAgLgKg");
	this.shape_14.setTransform(33.6,131.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Ag/BNQgOgLAAgPQAAgHAEgFQAFgFAIAAQALAAAEAKQAHAPAYAAQATAAASgIQAUgKAAgKQAAgQgMgEQgIgDgagBQgUAAgQgHQgWgJABgTQAAgWAYgTQAYgUAcAAQAMAAAQAGQAVAHAAAIQAAAGgEAFQgFAFgHAAQgFAAgMgDIgQgCQgPAAgNAIQgOAHAAAJQAAAEAFADQADACAJACIAdACQAaABAPANQARANAAAZQAAAegjAQQgaALggAAQgeAAgSgMg");
	this.shape_15.setTransform(17.5,132.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("Ag2BaQgMgMAAgmQAAgPACgfIACgvIgBgMIgBgMQAAgSAQAAQAFAAAFADIAagFIAVgCQAeAAASAHQALAEAAALQAAAGgFAFQgFAFgGAAIgGgBQgSgFgTAAIgRACQgKABgLADIgBAuIAsgEIAdgCQAGAAAFAEQAFAEAAAIQAAANgPABIgcADIgxAEIgBAYQAAAXADADQABACAOAAIAVAAIAVgBIAIAAIAHgBQAGAAAFAEQAGAEAAAIQAAANgPADQgLACgkAAQgmAAgMgKg");
	this.shape_16.setTransform(2,131.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("Ag/BYQgFgFAAgHIAAgaIABgaIAAheQAAgHAEgHQAGgIALABIAdACQAQACALAGQAyAaAAAlQAAAPgKALQgLAMgVAIQAfARAQASQAEAFAAAGQAAAGgFAFQgFAFgHAAQgGAAgFgFQgkgigpgMIABAlQAAAHgFAFQgFAEgHAAQgHAAgEgEgAgkAEIAGAAQAcAAANgHQAGgDAFgFQAFgFAAgCQAAgNgRgNQgOgLgSgCIgOgBg");
	this.shape_17.setTransform(-13.3,131.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgoALQgGgDAAgIQAAgFAGgEQAGgEAHAAIAbAAIAcgBQAHAAAFAEQAHADAAAHQAAAMgRABIg5ACQgHgBgGgDg");
	this.shape_18.setTransform(-51.8,134.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgKBVQgGgEAAgHIABgFIAAgFIAAgRIgBgQQAAgQgDgaQgDgfAAgLIgGAAQgaAAgQgEQgNgDAAgMQAAgGAFgFQAFgGAIABIASACIATABIAVAAIAVAAIAaABIAbABQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAIgcgCIgdgBIADAwQADAdAAASIABAMIAAALQAAAJgDAHQgFAJgJAAQgFAAgFgEg");
	this.shape_19.setTransform(-77.7,131.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("Ag0BZQgFgEAAgHIAAggQAAgTADgiIACg2QAAgfARABIALgBIARgBQAWABAUAPQAXAQAAAYQAAAegYARQgVAPgcAAIgKgBIgBA2QAAAHgEAEQgFAEgGABQgHgBgEgEgAgVguIgCApIAIABQARAAAMgIQANgKAAgPQAAgKgMgIQgMgIgMAAIgHABIgFAAIAAAQg");
	this.shape_20.setTransform(-126.7,131.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("Ag1BaQgNgMgBgmQABgPACgfIACgvIgBgMIgCgMQABgSAQAAQAFAAAEADIAagFIAXgCQAdAAASAHQAKAEAAALQAAAGgDAFQgGAFgHAAIgEgBQgUgFgRAAIgSACQgLABgLADIgBAuIAtgEIAcgCQAHAAAGAEQAEAEAAAIQAAANgOABIgcADIgyAEIAAAYQgBAXADADQABACAOAAIAUAAIAXgBIAGAAIAHgBQAHAAAFAEQAFAEAAAIQABANgOADQgMACgkAAQgmAAgLgKg");
	this.shape_21.setTransform(202.3,131.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AguBQQgfgYAAg5IAAgRIABgRIAAgOIABgNQAAgKADgHQAFgLAIAAQAGgBAFAFQAFAEAAAHIAAAUIAAAUIAAARIgBAQQAAARAEAPQAFASAKAHQAEAEATAAQAeABALg1QAFgaAAgzQAAgGAEgGQAFgJAKABQAIAAAEAFQADAFAAAFQAAAvgEAZQgHAngTAbQgJAMgMAHQgOAKgPAAQgegBgOgLg");
	this.shape_22.setTransform(170.1,132.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AguBQQgfgYAAg5IAAgRIABgRIAAgOIABgNQAAgKADgHQAFgLAIAAQAGgBAFAFQAFAEAAAHIAAAUIAAAUIAAARIgBAQQAAARAEAPQAFASAKAHQAEAEATAAQAeABALg1QAFgaAAgzQAAgGAEgGQAFgJAKABQAIAAAEAFQADAFAAAFQAAAvgEAZQgHAngTAbQgJAMgMAHQgOAKgPAAQgegBgOgLg");
	this.shape_23.setTransform(135.7,132.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("Ag7BeQgFgFAAgGIAAiGIAAgOIABgNQAAgIAFgEQAEgEAHAAQAFgBADACIAZgDIAUgBQANgBAUAGQAZAHAAAJQAAAHgEAEQgFAGgGAAIgHgBQgPgGgVAAIgQABIgVAEIAAAmQASgFALAAQAWAAAPADQAQABAAAOQAAAIgFADQgFAEgHAAIgSAAIgSgBQgIAAgVAFIAABKQAAAGgFAFQgGAFgGgBQgHABgEgFg");
	this.shape_24.setTransform(120,131.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("Ag/BYQgFgFAAgHIAAgaIABgaIAAheQAAgHAEgHQAGgIALABIAdACQAQACALAGQAyAaAAAlQAAAPgKALQgLAMgVAIQAfARAQASQAEAFAAAGQAAAGgFAFQgFAFgHAAQgGAAgFgFQgkgigpgMIABAlQAAAHgFAFQgFAEgHAAQgHAAgEgEgAgkAEIAGAAQAcAAANgHQAGgDAFgFQAFgFAAgCQAAgNgRgNQgOgLgSgCIgOgBg");
	this.shape_25.setTransform(-13.3,131.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgoALQgGgDAAgIQAAgFAGgEQAGgEAHAAIAbAAIAcgBQAHAAAFAEQAHADAAAHQAAAMgRABIg5ACQgHgBgGgDg");
	this.shape_26.setTransform(-51.8,134.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgKBVQgGgEAAgHIABgFIAAgFIAAgRIgBgQQAAgQgDgaQgDgfAAgLIgGAAQgaAAgQgEQgNgDAAgMQAAgGAFgFQAFgGAIABIASACIATABIAVAAIAVAAIAaABIAbABQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAIgcgCIgdgBIADAwQADAdAAASIABAMIAAALQAAAJgDAHQgFAJgJAAQgFAAgFgEg");
	this.shape_27.setTransform(-77.7,131.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},39).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2},{t:this.shape_12,p:{x:-126.7}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-77.7}}]},35).to({state:[{t:this.instance_2},{t:this.shape_20},{t:this.shape_11},{t:this.shape_10},{t:this.shape_19,p:{x:-77.7}},{t:this.shape_18,p:{x:-51.8}},{t:this.shape_12,p:{x:-27.6}},{t:this.shape_17,p:{x:-13.3}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_9,p:{x:68.7}}]},16).to({state:[{t:this.instance_2},{t:this.shape_20},{t:this.shape_11},{t:this.shape_10},{t:this.shape_27},{t:this.shape_26},{t:this.shape_12,p:{x:-27.6}},{t:this.shape_25},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_19,p:{x:68.7}},{t:this.shape_18,p:{x:94.6}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_9,p:{x:153.1}},{t:this.shape_22},{t:this.shape_17,p:{x:187}},{t:this.shape_21}]},14).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,y:41.4},10).to({scaleX:1.31,scaleY:1.31,y:51.4},5).wait(35).to({y:25.4},0).wait(16).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.8,-105.8,432.5,184.4);


// stage content:
(lib.intro__Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1_repeat:141});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_148 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(148).call(this.frame_148).wait(1));

	// content
	this.instance = new lib.contentverbtenseintro();
	this.instance.parent = this;
	this.instance.setTransform(272.4,190,1,1,0,0,0,44,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149));

	// main
	this.instance_1 = new lib.Background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,188.5,1.038,1.067);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(149));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,201.6,516.5,398.7);
// library properties:
lib.properties = {
	id: '1A76F00732DB0248A85038E801A18CC1',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmVT.mp3", id:"bgmVT"},
		{src:"sounds/futureAli.mp3", id:"futureAli"},
		{src:"sounds/pastali.mp3", id:"pastali"},
		{src:"sounds/presentAli.mp3", id:"presentAli"},
		{src:"sounds/space_blip.mp3", id:"space_blip"},
		{src:"sounds/verbtense.mp3", id:"verbtense"}
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
an.compositions['1A76F00732DB0248A85038E801A18CC1'] = {
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