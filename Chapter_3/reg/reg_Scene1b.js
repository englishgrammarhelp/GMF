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


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgRA1QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape.setTransform(9.2,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_1.setTransform(2.2,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgHAxIABgZIABgYIAAgYIAAgZQAAgGAGgBQAHABAAAGIgBAZIAAAYIgBAhIAAAQQgBAIgFAAQgHAAAAgIg");
	this.shape_2.setTransform(-3.3,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgZA4QgCgCgBgDIAAgcIAAgaIgBgbIgBgOQAAgFACgDQADgEADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIAAACIgBAEQAGgEAFgCQAFgCAFAAQAOAAAGANQAGAJgBARQABANgJAKQgIAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAgAgFgjIgJAHIAAAgQAIACAGAAQAIAAAFgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgGAAgEADg");
	this.shape_3.setTransform(-8.9,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-11.5,30,23.6);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah+DZQg6gbgBgvQAAgNAJgJQAJgIAOAAQAPAAAMARQAQAZAMAIQAbASAzAAQAvgBAqgUQA1gbAAgxQAAgngsgXQgmgTg3gCQgygBgjgTQgsgaAAgwQAAg3A/guQA9gsA/AAQAfAAAmAKQAzAOAAAVQAAAbgcAAQgNABgfgHQgggHgRABQgwAAgiAYQgjAXAAAjQAAAaAuALQASAEAwADQBIAFAoAoQAlAkAAA0QAABLhFAsQg8AnhOAAQg5AAgwgWg");
	this.shape.setTransform(491.9,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiSDxQgMgNAAgNIAAhbQAAgtAFhSQAHhaAAgoQAAgdAEg5QACgPAIgFQArgOA2AAQA2AAAzAmQA6ArAABAQAABQg+AuQAvAUAXAYQAXAZAAAdQAAAmgpAjQgcAZggAMQhFAchuAAQgNAAgMgNgAhgB9IAABBQBSgDAygVQAWgIAUgSQAUgQAAgIQAAgPgpgTQgegOgbgHIghgFIgNABIgMAAQgRAAgTgDQgCAoAAAfgAhTi6IgBA2IgGB6IAwADQAugEAegZQAggcAAgsQAAgeghgZQghgagjAAQgiAAgOADg");
	this.shape_1.setTransform(450.7,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AifDtQgJgJAAgOQAAgZgDgxQgCgxAAgZQAAgdAGg4QAGg5AAgcQAAgQgCgfQgEggAAgQQAAgSALgNQALgRAVACIBMAGQArAFAcAQQB/BDAABhQAAAwgrAkQgjAdg0APQBiA1AwA6QAIAKAAALQAAANgJAKQgKAKgNAAQgMAAgKgKQhohnh+gjIADA9IABA+QAAAOgIAJQgKAJgNAAQgOAAgIgJgAhkiMQACAXAAAOQAAAagEAlIgGA9IAOABIANAAQBQAAAngVQASgJAPgQQAQgRAAgNQAAgrgxgmQgtgigxgGIgvgDg");
	this.shape_2.setTransform(409.4,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiJDxQgegbAAhlIABgsIACg0QgDgGAAgJQAAgKAGgIQAGhaAAgsQAAgLgDgWQgDgXAAgLQAAgmAfAAQAOAAAIAJQAmgKAigFQAhgFAcAAQBNAAAtASQAVAJAAAWQAAAMgIAJQgJALgNAAIgKgCQg1gOgyAAQgZAAgeAEQgeAFgjAKQADAUAAAMQAAAsgFBMICIgNQA8gHAOABQAOAAAJAJQAKAIAAAPQAAAcgdADIhLAGIiQAOIgBAqIgBAlQgBBFALANQAHAIAqAAIA6gBIA6gBIASgCIASgCQAiAAAAAhQAAAZgbAGQgdAGhhAAQhhAAgcgag");
	this.shape_3.setTransform(369.5,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag4DkQgnhfguiyIgYhWQgThBAAgUQAAgOAKgJQAJgJANAAQAXAAAIAaIALA2IAeBrQAeBzAdBVIACgFIBTjiIAahOQATgtATgZQALgMAOAAQANAAAKAJQAJAKAAAOQAAAJgGAKQgUAdgMAfIgXBFIhVDjQgPAogTAmQgKATgRAAQgZAAgJgZg");
	this.shape_4.setTransform(329.6,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AifDtQgJgJAAgOQAAgZgDgxQgCgxAAgZQAAgdAGg4QAGg5AAgcQAAgQgCgfQgEggAAgQQAAgSALgNQALgRAVACIBMAGQArAFAcAQQB/BDAABhQAAAwgrAkQgjAdg0APQBiA1AwA6QAIAKAAALQAAANgJAKQgKAKgNAAQgMAAgKgKQhohnh+gjIADA9IABA+QAAAOgIAJQgKAJgNAAQgOAAgIgJgAhkiMQACAXAAAOQAAAagEAlIgGA9IAOABIANAAQBQAAAngVQASgJAPgQQAQgRAAgNQAAgrgxgmQgtgigxgGIgvgDg");
	this.shape_5.setTransform(268.1,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("ABtCiQgIgcgMhHQggAFg0ALIhSARQgQApgmBPQgKASgRAAQgMAAgKgJQgKgJAAgOQAAgPAvhjQgFgIAAgLQAAgZAfgHQAjhDA3hXQBJh2ASAAQAZAAAJAiIAUBpIAvDZIARAyQAJAZAAAIQAAAOgJAJQgKAJgMAAQgdAAgWhKgAgoAWQAmgJBMgNIgZh5g");
	this.shape_6.setTransform(223.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AiHD3QgTgNAAgkIAHhnQAHiPABivQAAgNAJgKQAIgJANAAQAOAAAJAJQAJAKAAANQAACxgICQIgFAwQgCAaAAAUQBTABB7gnIAKgCQAOAAAJALQAIAJAAANQAAAUgVAJQgiARhMANQhGAMgsAAQgfAAgOgJg");
	this.shape_7.setTransform(183.4,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AiLC6QgngtgKhZQgEgoAAh2QAAgsABgbQACgcAEgLQAIgXAVAAQAcAAAAA1IAAC4QAAC9CEAAQB9AAAAk/IAAgfIAAgZQAAgTAGgPQAKgTAQAAQAgAAAAArIABAnIAAAnQAAFqi9AAQhgAAgwg4g");
	this.shape_8.setTransform(141.7,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AigDWQgngrAAhWQAAhRAnhVQAmhXA8g1QAogjAsAAQAcAAAvATQA5AWAAAcQAAANgJAJQgKAKgNAAQgHABgMgIQgwgeghAAQgXAAgZAZQgNAMgYAgQhJBgAABwQAAA6ASAYQAUAaA1AAQA3AAAqgkQArglARhGQhWAEg9AeQgIADgGAAQgOAAgJgLQgJgKAAgMQAAgSARgKQBCgoCmAAQAOAAAJAJQAJAIAAAOQAAAUgRAJQgUBgg+A6Qg+A5hUAAQhNAAgmgrg");
	this.shape_9.setTransform(96.3,-0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AiJDxQgegbAAhlIABgsIADg0QgEgGAAgJQAAgKAGgIQAGhaAAgsQAAgLgDgWQgDgXAAgLQAAgmAfAAQANAAAJAJQAngKAhgFQAhgFAdAAQBMAAAtASQAVAJAAAWQAAAMgIAJQgJALgOAAIgKgCQg0gOgxAAQgaAAgdAEQgfAFgjAKQADAUAAAMQAAAsgGBMICIgNQA9gHAOABQAOAAAJAJQAJAIAAAPQABAcgdADIhLAGIiPAOIgDAqIgBAlQABBFAJANQAIAIAqAAIA5gBIA7gBIATgCIARgCQAiAAAAAhQAAAZgbAGQgdAGhhAAQhiAAgbgag");
	this.shape_10.setTransform(55,-0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AifDtQgJgJAAgOQAAgZgDgxQgCgxAAgZQAAgdAGg4QAGg5AAgcQAAgQgCgfQgEggAAgQQAAgSALgNQALgRAVACIBMAGQArAFAcAQQB/BDAABhQAAAwgrAkQgjAdg0APQBiA1AwA6QAIAKAAALQAAANgJAKQgKAKgNAAQgMAAgKgKQhohnh+gjIADA9IABA+QAAAOgIAJQgKAJgNAAQgOAAgIgJgAhkiMQACAXAAAOQAAAagEAlIgGA9IAOABIANAAQBQAAAngVQASgJAPgQQAQgRAAgNQAAgrgxgmQgtgigxgGIgvgDg");
	this.shape_11.setTransform(14.4,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AifDtQgJgJAAgOQAAgZgDgxQgCgxAAgZQAAgdAGg4QAGg5AAgcQAAgQgCgfQgEggAAgQQAAgSALgNQALgRAVACIBMAGQArAFAcAQQB/BDAABhQAAAwgrAkQgjAdg0APQBiA1AwA6QAIAKAAALQAAANgJAKQgKAKgNAAQgMAAgKgKQhohnh+gjIADA9IABA+QAAAOgIAJQgKAJgNAAQgOAAgIgJgAhkiMQACAXAAAOQAAAagEAlIgGA9IAOABIANAAQBQAAAngVQASgJAPgQQAQgRAAgNQAAgrgxgmQgtgigxgGIgvgDg");
	this.shape_12.setTransform(-26,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AiJDmQgJgJAAgNQAAgOAJgJQAJgKANAAQAUAAAvgGQADgaAAggQAAgWgCgfQgCgfAAgWQAAhHAJhsIgpABIgpABQgNAAgJgJQgJgJAAgOQAAgeAdgCQAagDBFAAQA+AABeAOQAbAEAAAdQAAAPgKAJQgKAHgMAAQgUAAgegEIgzgHQgHBbAABSIABA3IACA2QAAAdgDAYIBjgBQANAAAJAKQAJAJAAANQAAAOgJAJQgJAJgNAAIg1ABIg0ABQgUAAgpAGQgpAGgVAAQgNAAgJgKg");
	this.shape_13.setTransform(-64.3,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AhvDWQgsgtAAhFQAAhUAtgxQArgyBHAAQAjgBAVAMIAdAVQAEiEAGgtQAFgcAXAAQAdAAAAAfQAAArgNCVQgDAtAAAuQAABpAKA1IABAHQAAAMgJAIQgKAJgLAAQgTAAgKgcQgWAQgYAJQgZAIgZAAQhBAAgqgrgAhJAGQgbAfAAA+QABApAcAdQAcAdAnAAQAZAAATgKQAKgFAYgVIAJgKIgBg2IABgkIAAglQgLgZgUgMQgUgNgbAAQg0AAgaAfg");
	this.shape_14.setTransform(-120,-1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("ABMCZIgIhFQgFglAAggIABgdIABgdQAAhEgZAAQgjAAgfAqQgdAmgQA5IgDAeQgCAQAAAPIACAcIACAcQAAAOgIAJQgJAJgOAAQgNAAgJgJQgIgJAAgOIgCgcIgCgcQAAghAEg4QAFg5AAggIgBgeIgBgeQAAgNAJgJQAIgIAOAAQAcAAADAoIABAlQA1hGA2AAQAyAAAUAsQAOAdABA6IAAAgIAAAcQAAAaAGApQAHApAAAaQAAAOgJAJQgJAIgNAAQgbAAgEgdg");
	this.shape_15.setTransform(-154.5,6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("ABkCgQgOgNgHgKQgeARgXAIQgXAIgOAAQhKAAghgpQgggnAAhQQAAhLA1g2QA0g2BHAAQAbAAAiAOQArASAAAYQAAAJgHAHQgDALgBAcQgCAbAAAqQgBAmAGAXQADAOARApIAHARIACAFQAAANgJAIQgJAIgLAAQgGAAgQgOgAg1hOQgjAoAAAzQAAAzASAaQASAZAlAAQAdAAAVgLQALgGAUgRQgKhTAAgpQAAgNACgQQACgQADgSIgTgJQgJgCgFAAQgwAAgjAng");
	this.shape_16.setTransform(-188.4,7.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AifDtQgJgJAAgOQAAgZgDgxQgCgxAAgZQAAgdAGg4QAGg5AAgcQAAgQgCgfQgEggAAgQQAAgSALgNQALgRAVACIBMAGQArAFAcAQQB/BDAABhQAAAwgrAkQgjAdg0APQBiA1AwA6QAIAKAAALQAAANgJAKQgKAKgNAAQgMAAgKgKQhohnh+gjIADA9IABA+QAAAOgIAJQgKAJgNAAQgOAAgIgJgAhkiMQACAXAAAOQAAAagEAlIgGA9IAOABIANAAQBQAAAngVQASgJAPgQQAQgRAAgNQAAgrgxgmQgtgigxgGIgvgDg");
	this.shape_17.setTransform(-243.5,-0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("ABtCiQgIgcgMhHQggAFg0ALIhSARQgQApgmBPQgKASgRAAQgMAAgKgJQgKgJAAgOQAAgPAvhjQgFgIAAgLQAAgZAfgHQAjhDA3hXQBJh2ASAAQAZAAAJAiIAUBpIAvDZIARAyQAJAZAAAIQAAAOgJAJQgKAJgMAAQgdAAgWhKgAgoAWQAmgJBMgNIgZh5g");
	this.shape_18.setTransform(-288.3,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AiHD3QgTgNAAgkIAGhnQAIiPAAivQABgNAIgKQAKgJANAAQANAAAJAJQAJAKAAANQAACxgJCQIgDAwQgDAaABAUQBRABB9gnIAKgCQANAAAJALQAIAJAAANQAAAUgUAJQgkARhMANQhFAMgrAAQghAAgNgJg");
	this.shape_19.setTransform(-328.2,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AiLC6QgmgtgKhZQgGgoAAh2QAAgsACgbQACgcAEgLQAIgXAUAAQAdAAAAA1IAAC4QAAC9CEAAQB9AAAAk/IAAgfIAAgZQAAgTAHgPQAIgTARAAQAgAAAAArIAAAnIAAAnQAAFqi8AAQhgAAgwg4g");
	this.shape_20.setTransform(-369.9,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AigDWQgngrAAhWQAAhRAnhVQAmhXA8g1QAogjAsAAQAcAAAvATQA5AWAAAcQAAANgJAJQgKAKgNAAQgHABgMgIQgwgeghAAQgXAAgZAZQgNAMgYAgQhJBgAABwQAAA6ASAYQAUAaA1AAQA3AAAqgkQArglARhGQhWAEg9AeQgIADgGAAQgOAAgJgLQgJgKAAgMQAAgSARgKQBCgoCmAAQAOAAAJAJQAJAIAAAOQAAAUgRAJQgUBgg+A6Qg+A5hUAAQhNAAgmgrg");
	this.shape_21.setTransform(-415.3,-0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AiJDxQgegbAAhlIABgsIACg0QgDgGAAgJQAAgKAGgIQAGhaAAgsQAAgLgDgWQgDgXAAgLQAAgmAfAAQAOAAAJAJQAlgKAigFQAhgFAcAAQBNAAAtASQAVAJAAAWQAAAMgIAJQgJALgNAAIgKgCQg1gOgyAAQgZAAgeAEQgeAFgjAKQADAUAAAMQAAAsgFBMICIgNQA8gHAOABQAOAAAJAJQAKAIAAAPQgBAcgcADIhLAGIiQAOIgCAqIAAAlQgBBFAKANQAIAIAqAAIA5gBIA7gBIATgCIASgCQAhAAAAAhQAAAZgbAGQgdAGhiAAQhgAAgcgag");
	this.shape_22.setTransform(-456.6,-0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AifDtQgJgJAAgOQAAgZgDgxQgCgxAAgZQAAgdAGg4QAGg5AAgcQAAgQgCgfQgEggAAgQQAAgSALgNQALgRAVACIBMAGQArAFAcAQQB/BDAABhQAAAwgrAkQgjAdg0APQBiA1AwA6QAIAKAAALQAAANgJAKQgKAKgNAAQgMAAgKgKQhohnh+gjIADA9IABA+QAAAOgIAJQgKAJgNAAQgOAAgIgJgAhkiMQACAXAAAOQAAAagEAlIgGA9IAOABIANAAQBQAAAngVQASgJAPgQQAQgRAAgNQAAgrgxgmQgtgigxgGIgvgDg");
	this.shape_23.setTransform(-497.2,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-524.1,-53.7,1044.2,101.1);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AABA5Qjah0jkhfQjkhfAFhhQAEhhCTAfQCSAgC/CaQC9CbDdCaAE3C8QANgRARgOQASgPASgLQAMgHAJABQALACAIANQAFAHgBAIQALACAFAUQAGAXgIANQAEADAEAEQAEACADADQAEADAEADQgBABgBAAQgSAMgSAQQgKAJgGALAGDEPQgCAAgBAAQgQgIgOgKQAUgNAQgRQALgMAOgKQAEgDAEgDAHKDnQAWgNAbAAQABAAABAAQAZAAAVAIQAQAGANgEAINFdQgEACgFACQgXAIgGggQABAAABAAQAPgNAGgUAI5FwQgEABgFAAQgXABgMgVQAGgCAFgEQAPgLAHgQAJbFLQgCABgCACQgDAFgCAFQgIAPABASQABAkAWACQAAAAgBAAQgTAMgKgPQgOgVADgXQAAgBABAAQAHgDAGgGQAFgHAGgHAJcFKQACgDACgDQABgBAAgBQACgDACgCQARgQAXAJQAWAJgHAdQgFAWgSARQgBABgBACAHnFJQgKAIgMgDQgTgGgJgWAKCGGQgNANgTAMAFsBsQAIgBAKACQADABADACAFqBrQgHgHgKgBQgbgDgQAOQgBABAAABQgDADgDADQgBAAAAABQgJAIgJAKQgRASgPAPQgGAFgCAGAEsENQgBgMgNgMQgRgOgTgLQgRgKAAgMQgBgJADgHAGlCbQgIgBgLAGQgTALgTANQgTANgRAPAFqBsQgZAFgNAUQgMARgRAQADTCrIjKht");
	this.shape.setTransform(-0.3,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AJEGcQgOgVADgXIABgBQAHgDAGgGIALgOQgHANAAARIAAADQABAkAWACIgBAAQgIAFgHAAQgJAAgFgIgAJiGfQgWgCgBgkIAAgDQAAgRAHgNIAKgOIAEgGIABgCIAEgFQARgQAXAJQAWAJgHAdQgFAWgSARIgCADIgBAAQgNANgTAMIAAAAgAJSFYIAAAAgAGGETIAAgCIgDgCIgDAAQgQgIgOgKQAUgNAQgRQALgMAOgKIAUAMIAIAHIAHAFIAIAGIgCABQgSAMgSAQQgKAJgGALQgJgBgFgEgADaCuIgHgDIAAAAIjKhtIgIgFQjah0jkhfQjkhfAFhhQAEhhCTAfQCSAgC/CaQC9CbDdCaIAfATQAPAJASAIIgSASQgRASgPAPQgGAFgCAGIgBABIgRgIg");
	this.shape_1.setTransform(-0.3,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("Ah/CMIAEgBIAAADgABOBsIALgGQAPgLAHgQQgHAQgPALIgLAGIgJAFQgWAHgHgfIACgBQAPgNAGgUQgGAUgPANIgCABQgKAHgMgDQgSgFgJgWIAAgBIgCACQgDAEgEABQgWAKgJgbIAAgCIAHgOQAHgLAJgIQASgQARgMIACgBQAWgNAbABIACAAQAZAAAVAHQAQAGANgEQAaAPAYAVQANALAOAGIgSALQgTAKgLAOIgCADQgFAEgDAHIgEAEIgFAJIgLAOQgGAGgHADIgBABIgJABIgCAAQgVAAgMgUgAiSAcQgBgMgNgMQgRgNgTgLQgRgKAAgMQgBgJADgHIABAAQACgHAGgFQAPgOARgTIASgSIABgBIAGgGIABgBQAQgPAbADQAKABAHAHIABABIgBAAIABAAIABAAQAIgBAKADIAGACQAIgBADAIIgBAHQALABAIANQAFAIgBAIQALACAFATQAGAXgIANIgUgMIAIgGIgIAGQgNAKgMAMQgQARgUAMQAOALAQAHIADABIADADQgDAIAAAIIgGAmQgdgsg0gQgAgshPIgmAXQgTANgRAPQARgPATgNIAmgXIABgBQAGgEAGAAIABgBIACAAIAAAAIADABIgDgBIAAAAIgCAAIgBABQgGAAgGAEIgBABgAhFhtQgRALgTAQQgRANgNARQANgRARgNQATgQARgLIAAAAIABAAIAAAAIACgBQAHgEAGgBIACAAIAAAAIADABIAAAAIAAAAIgDgBIAAAAIgCAAQgGABgHAEIgCABIAAAAIgBAAIAAAAIAAAAgAh6hrQgMASgRAPQARgPAMgSQANgUAZgFQgZAFgNAUg");
	this.shape_2.setTransform(44.4,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-42.9,135.9,86.1);


(lib.s3_s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(13));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRBEIgCgEQAAgDAEgDIAGgFQAPgQAAgjQAAgMgEgOQgDgQgHgJIgHgGQgEgFAAgCQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAIAFACQAMAKAIAVQAIATAAASQAAAzgcAQIgFACIgEgCg");
	this.shape.setTransform(-36.7,-15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgKgHgAgOgRQgFAGgCAMIAVgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_1.setTransform(-43.1,-15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAyIABgaIABgYIAAgYIAAgYQAAgIAGAAQAHAAAAAIIgBAYIAAAYIgBAhIAAARQgBAGgFABQgHgBAAgGg");
	this.shape_2.setTransform(-49,-17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaA4QgCgCAAgDIAAgcIAAgaIgBgbIAAgOQAAgFABgDQACgEAFAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAAEQAGgEAGgCQAEgCAFAAQAOAAAGANQAFAJABARQgBANgHAKQgJAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFgjIgJAHIAAAgQAIACAGAAQAIAAAFgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgFAAgFADg");
	this.shape_3.setTransform(-54.6,-13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAyQgCgCAAgEIAAgLIAAgNIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBAPIgBAQIABANIAAALQAAAEgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgEQAAgDADgCQACgDACAAQAEAAACADQACACAAADQAAAEgCACQgCADgEgBQgCABgCgDg");
	this.shape_4.setTransform(-60.3,-16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSAeQgLgJAAgOQAAgNAKgPQAKgRAMABQAHAAAIACQALAEAAAGQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgDgBIgDgCQgEgEgJAAQgGAAgHANQgGALAAAIQAAAIAGAFQAGAGAIAAQAEAAAEgCIAIgFIADgBQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAEgKAFQgJAFgGgBQgNABgJgJg");
	this.shape_5.setTransform(-65.9,-15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAyQgCgCAAgEIAAgLIAAgNIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBAPIgBAQIABANIAAALQAAAEgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgEQAAgDADgCQACgDACAAQAEAAACADQACACAAADQAAAEgCACQgCADgEgBQgCABgCgDg");
	this.shape_6.setTransform(-71.4,-16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgDgBIgEAAIgJABIABAnIAAAEIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_7.setTransform(-76.8,-16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_8.setTransform(-83.2,-15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_9.setTransform(-90.4,-15.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgbIAAgKIABgKQABgGAFABIAHgBIAJAAQAMAAALAIQAMAKAAANQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBANIgBAbIAHAAQALAAAIgFQAIgHAAgKQAAgIgIgFQgHgFgIgBIgFAAIgEABg");
	this.shape_10.setTransform(-97.5,-17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgDgBIgEAAIgJABIABAnIAAAEIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_11.setTransform(-108.8,-16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAmQgLgEAAgGQAAgDACgDQACgCADAAQACABAEADQABACAGABIAIABQAEgBAFgBQAGgCAAgEQAAgKgNgDIgGgCQgJgBgEgDQgFgDAAgHQAAgPANgGIAMgEIANgFIAGgBQADAAACACQACACAAADIABAGIABAFQAAADgCADQgCABgDAAQgEAAgBgCIgCgHIgQAEQgKAFAAAGIAEABQAPADAHAFQAMAGAAAOQAAALgKAGQgIAEgLAAQgJAAgIgDg");
	this.shape_12.setTransform(-115.6,-15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_13.setTransform(-122.4,-15.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgbIAAgKIABgKQABgGAFABIAHgBIAJAAQAMAAALAIQAMAKAAANQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBANIgBAbIAHAAQALAAAIgFQAIgHAAgKQAAgIgIgFQgHgFgIgBIgFAAIgEABg");
	this.shape_14.setTransform(-129.6,-17.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAJBEQgcgQAAgzQAAgSAHgTQAJgVAMgKIAFgCQAAAAABAAQABAAAAABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABABQAAAAAAABQAAACgEAFIgHAGQgHAJgEAQQgDAOAAAMQAAAjAOAQIAHAFQAEADAAADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgFgCg");
	this.shape_15.setTransform(-135.7,-15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgCADAAQADAAADACQACADAAACQAAADgCADQgDADgDAAQgDAAgCgDg");
	this.shape_16.setTransform(-148.5,-12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASA0QgDgHgHgJIgLgRIgNAJIgBAVQAAADgBACQgCACgDAAQgHAAAAgKIABgRIAAgRIABgWIAAgYIAAgHIgBgHQAAgEACgBQACgCADAAQADAAACACQACABAAAEIAAAHIABAHIgBAWIAAAXQAJgHAIgHIAPgQQACgCADAAQACAAADACQACACAAADQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQgJAKgMAKIAPAVQAKAOAAAEQAAADgCACQgCACgDAAQgEAAgCgEg");
	this.shape_17.setTransform(-153.7,-17.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAHgMAGQgLAEgJAAQgPAAgJgHgAgNgRQgGAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_18.setTransform(-161.5,-15.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAHgMAGQgLAEgJAAQgPAAgJgHgAgNgRQgGAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_19.setTransform(-169.2,-15.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAFAUIgEgQIgBgOIgFAMIgLAcIgCAEQgDAEgEAAQgFAAgFgUIgFgcIgBgKIgCgLQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgCACAAQAGAAABAFIABAKIABAKIAFAeIAPgwQACgHAFAAQAFAAACAIIAFAZIAEAaIAGgTIAJgkQABgEAEAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAEIgOAxQgCAGgEAHQgDADgEAAQgIAAgDgSg");
	this.shape_20.setTransform(-177.9,-15.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgSAmQgLgEAAgGQAAgDACgDQACgCADAAQACABAEADQABACAGABIAIABQAEgBAFgBQAGgCAAgEQAAgKgNgDIgGgCQgJgBgEgDQgFgDAAgHQAAgPANgGIAMgEIANgFIAGgBQADAAACACQACACAAADIABAGIABAFQAAADgCADQgCABgDAAQgEAAgBgCIgCgHIgQAEQgKAFAAAGIAEABQAPADAHAFQAMAGAAAOQAAALgKAGQgIAEgLAAQgJAAgIgDg");
	this.shape_21.setTransform(-190.5,-15.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGAyQgCgCAAgEIAAgLIAAgNIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBAPIgBAQIABANIAAALQAAAEgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgEQAAgDADgCQACgDACAAQAEAAACADQACACAAADQAAAEgCACQgCADgEgBQgCABgCgDg");
	this.shape_22.setTransform(-195.6,-16.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_23.setTransform(-201.6,-17.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgDgBIgEAAIgJABIABAnIAAAEIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_24.setTransform(-209.1,-16.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_25.setTransform(8.4,-35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_26.setTransform(1.4,-36.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYAvQgJgKAAgPQAAgTAJgJQAKgMAPAAQAIAAAEADIAGAFQACgdABgKQAAgGAGAAQAGAAAAAGIgDArIgBATQAAAXADALIAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgEAAgDgGQgEADgGADQgFABgFAAQgOAAgKgJgAgPACQgGAGAAAOQAAAJAGAGQAHAGAIAAQAFAAAEgCIAIgGIABgCIAAgLIAAgJIAAgIQgCgFgFgCQgEgDgGABQgLgBgFAHg");
	this.shape_27.setTransform(-6.3,-38.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_28.setTransform(-14.3,-35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_29.setTransform(-20.9,-36.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_30.setTransform(-28.1,-36.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgHAgIgKgcIgMgfIgBgDQAAgCACgCQACgCADAAQAEAAACAEIARAvIAMgfIAGgQQACgEAEAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAACgLAbIgOAfQAAAGgGAAQgEAAgDgFg");
	this.shape_31.setTransform(-35.4,-36.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_32.setTransform(-42.6,-36.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_33.setTransform(-52.7,-38.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_34.setTransform(-56.5,-38.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_35.setTransform(-62,-36.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAzQgDADgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBgCAAgDIAAgFIAAgGIAAgVIgBgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIAAADIAAAPIgBASQAGgEAFgCQAGgDADAAQAPAAAKAMQAIAJAAAQQAAAPgKALQgKALgOAAQgKAAgJgEgAgKgCIgKAFIAAAMIAAALIAAALIAKAEQADABAGAAQAJAAAGgHQAHgHgBgKQAAgKgEgHQgGgHgKAAQgEAAgGAEg");
	this.shape_36.setTransform(-69.6,-38.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_37.setTransform(-77.6,-36.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_38.setTransform(-85.1,-37.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_39.setTransform(-91.9,-36.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUAzQgDADgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgCgCAAgDIAAgFIAAgGIAAgVIAAgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIAAADIAAAPIgBASQAGgEAGgCQAFgDADAAQAPAAAKAMQAIAJAAAQQAAAPgKALQgKALgOAAQgLAAgIgEgAgKgCIgKAFIAAAMIAAALIAAALIAKAEQAEABAFAAQAJAAAGgHQAGgHAAgKQAAgKgEgHQgGgHgKAAQgEAAgGAEg");
	this.shape_40.setTransform(-99.5,-38.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXAvQgKgKAAgPQAAgTAKgJQAJgMAPAAQAIAAAEADIAHAFQABgdABgKQABgGAFAAQAGAAAAAGIgCArIgBATQgBAXADALIAAACQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgGQgGADgFADQgFABgFAAQgOAAgJgJgAgPACQgGAGAAAOQAAAJAHAGQAFAGAJAAQAFAAAEgCIAHgGIACgCIAAgLIAAgJIAAgIQgDgFgDgCQgFgDgGABQgKgBgGAHg");
	this.shape_41.setTransform(-112.1,-38.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_42.setTransform(-119.9,-36.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_43.setTransform(-127.7,-35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_44.setTransform(-134.7,-36.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_45.setTransform(-140.2,-38.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaA4QgBgCAAgDIAAgcIAAgaIgBgbIgBgOQAAgFACgDQACgEADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAAACIAAAEQAGgEAFgCQAFgCAFAAQAOAAAHANQAEAJAAARQAAANgIAKQgIAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgGgjIgJAHIABAgQAHACAHAAQAJAAAEgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgFAAgGADg");
	this.shape_46.setTransform(-145.8,-35.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgYANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgKAEgLAAQgOAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_47.setTransform(-157.5,-36.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgHAgIgKgcIgMgfIgBgDQAAgCACgCQACgCADAAQAEAAACAEIARAvIAMgfIAGgQQACgEAEAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAACgLAbIgOAfQAAAGgGAAQgEAAgDgFg");
	this.shape_48.setTransform(-164.8,-36.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_49.setTransform(-171.9,-36.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_50.setTransform(-179.4,-38.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_51.setTransform(-191.3,-37.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_52.setTransform(-196.5,-38.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_53.setTransform(-201.6,-36.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgGAxQgCgCAAgCIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAACgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_54.setTransform(-207,-38.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgXA1QgJgCAAgFQABgGAFAAIAJABIAMABQAMAAAFgNQAEgIAAgRQgEAHgFADQgFADgGAAQgMAAgIgIQgHgIgBgNQAAgSALgMQALgLASAAQAHAAADABQAFACACADQAIABAAAHIgCANIgCANIgCAWQAAAOgCAJQgDALgHAFQgIAGgPAAIgPgBgAgMghQgGAIAAAMQAAAKADAEQAFAFAHAAQAGAAAGgHQAGgHABgHIADgXIgGgDIgFgBQgMAAgIAJg");
	this.shape_55.setTransform(-212.9,-35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_56.setTransform(-224.4,-36.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_57.setTransform(-232.3,-38.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgEAyQgCgCAAgDIAAgDIAAgDIAAgKIgBgKIgBgaIgCgcIgGAAQgPAAgIgCQgGgBAAgGQAAgDABgCQADgCADAAIALABIALABIANAAIALAAIAQABIAPAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgPAAIgQgBIgFAAIACAfIACAdIAAAHIAAAIQAAAEgBAEQgCAEgEAAQgCAAgCgCg");
	this.shape_58.setTransform(-240.6,-38.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgXAvQgKgKAAgPQAAgTAKgJQAJgMAPAAQAIAAAEADIAHAFQABgdABgKQABgGAFAAQAGAAAAAGIgCArIgBATQgBAXADALIAAACQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgGQgGADgFADQgFABgFAAQgOAAgJgJgAgPACQgGAGAAAOQAAAJAHAGQAFAGAJAAQAFAAAEgCIAHgGIACgCIAAgLIAAgJIAAgIQgDgFgDgCQgFgDgGABQgKgBgGAHg");
	this.shape_59.setTransform(-112.1,-38.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_60.setTransform(-119.9,-36.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AgRA1QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_61.setTransform(-127.7,-35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_62.setTransform(-134.7,-36.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_63.setTransform(-140.2,-38.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgaA4QgBgCAAgDIAAgcIAAgaIgBgbIgBgOQAAgFACgDQACgEADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAAACIAAAEQAGgEAFgCQAFgCAFAAQAOAAAHANQAEAJAAARQAAANgIAKQgIAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgGgjIgJAHIABAgQAHACAHAAQAJAAAEgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgFAAgGADg");
	this.shape_64.setTransform(-145.8,-35.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgYANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgKAEgLAAQgOAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_65.setTransform(-157.5,-36.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgHAgIgKgcIgMgfIgBgDQAAgCACgCQACgCADAAQAEAAACAEIARAvIAMgfIAGgQQACgEAEAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAACgLAbIgOAfQAAAGgGAAQgEAAgDgFg");
	this.shape_66.setTransform(-164.8,-36.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_67.setTransform(-171.9,-36.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_68.setTransform(-179.4,-38.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:-179.4}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:-140.2}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_58},{t:this.shape_50,p:{x:-232.3}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_45,p:{x:-196.5}},{t:this.shape_51},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:-179.4}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:-140.2}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-50.8,266.6,45.1);


(lib.s3_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(13));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRBEIgCgEQAAgDAEgDIAGgFQAPgQAAgjQAAgMgEgOQgDgQgHgJIgHgGQgEgFAAgCQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAIAFACQAMAKAIAVQAIATAAASQAAAzgcAQIgFACIgEgCg");
	this.shape.setTransform(21,-30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEABAAAFQAAAEgCABQgCACgDAAIgDAAIgEAAIgJABIABAoIAAACIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_1.setTransform(14.9,-30.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgCACgCQACgDADAAQACAAAEAEQABABAGABIAIABQAEABAFgCQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgHQAAgPANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAGIABAGQAAADgCABQgCACgDAAQgEAAgBgCIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_2.setTransform(8.1,-30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_3.setTransform(1.3,-29.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgcIAAgJIABgKQABgGAFABIAHgBIAJgBQAMAAALAJQAMAJAAAOQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBAMIgBAcIAHAAQALAAAIgFQAIgGAAgLQAAgIgIgGQgHgEgIAAIgFAAIgEAAg");
	this.shape_4.setTransform(-5.9,-31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAJBEQgcgQAAgzQAAgSAHgTQAJgVAMgKIAFgCQAAAAABAAQAAAAABABQABAAAAAAQAAABABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAACgEAFIgHAGQgHAJgEAQQgDAOAAAMQAAAjAOAQIAHAFQAEADAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQgBAAAAAAIgFgCg");
	this.shape_5.setTransform(-12,-30.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDABQgDgBgCgCg");
	this.shape_6.setTransform(-24.8,-26.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_7.setTransform(-30.5,-28);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_8.setTransform(-37.5,-29.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXAuQgKgJAAgPQAAgSAKgLQAJgKAPgBQAIABAEACIAGAFQACgdABgKQAAgGAGAAQAGAAAAAHIgCApIgBAUQAAAWACAMIAAACQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgDAAgCgGQgGADgFACQgFACgFAAQgOAAgJgKgAgPABQgGAHAAAOQAAAIAHAHQAFAGAJAAQAFAAAEgCIAHgGIACgCIAAgLIAAgIIAAgIQgDgGgDgCQgFgCgGAAQgLAAgFAFg");
	this.shape_9.setTransform(-45.2,-31.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgOAQABQAOAAAHAMQAGAKgBAOQAAAOgHAMQgJAMgOgBQgLAAgIgIgAgLgNQgFAIAAAIQAAAKAGAGQAEAFAGAAQAGgBAGgFQAFgFABgKQABgagQAAQgJAAgFAKg");
	this.shape_10.setTransform(-53.1,-29.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEABAAAFQAAAEgCABQgCACgDAAIgDAAIgEAAIgJABIABAoIAAACIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_11.setTransform(-59.9,-30.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgLAEgJAAQgPAAgJgHgAgNgRQgGAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_12.setTransform(-71.1,-29.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgDAoQgCgCAAgDIgCgYIgBgYQAAgHgCgEQgFACgFAFIgIAJIgEAFIAAALIgBAMIABAFIAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgRIAAgNIABgLIgBgLIAAgLQAAgPAHAAQACAAADACQACADAAACIgBAEIAAAEIAAAIQAEgIAHgGQAHgGAEAAQALAAADALQAEgFAFgCQAFgDAHAAQAMAAAEAMIACAUIAFAmQABADgCACQgCABgDAAQgGAAgBgGIgCgVIgDgUQAAgFgCgEQgCgGgDAAQgDAAgHAEQgGAEgCACIAAANIACARIABASQAAADgBACQgCACgDAAQgCAAgCgCg");
	this.shape_13.setTransform(-80.4,-29.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_14.setTransform(-89.5,-29.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXA1QgJgCABgFQAAgGAFAAIAIABIAOABQALAAAGgNQADgIAAgRQgEAHgFADQgFADgFAAQgNAAgHgIQgIgIAAgNQAAgSAKgMQALgLASAAQAGAAAEABQAFACACADQAHABABAHIgCANIgBANIgDAWQAAAOgCAJQgDALgHAFQgIAGgPAAIgPgBgAgMghQgGAIAAAMQAAAKAEAEQAEAFAHAAQAGAAAGgHQAGgHABgHIADgXIgFgDIgHgBQgLAAgIAJg");
	this.shape_15.setTransform(-96.9,-28);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEABAAAFQAAAEgCABQgCACgDAAIgDAAIgEAAIgJABIABAoIAAACIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_16.setTransform(-108.1,-30.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_17.setTransform(-114.9,-29.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_18.setTransform(-122.2,-29.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_19.setTransform(-129.3,-29.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXA1QgJgCAAgFQABgGAFAAIAIABIANABQAMAAAFgNQAEgIAAgRQgEAHgFADQgFADgFAAQgNAAgIgIQgHgIgBgNQAAgSALgMQALgLASAAQAHAAADABQAFACACADQAIABAAAHIgCANIgCANIgCAWQABAOgDAJQgDALgHAFQgIAGgPAAIgPgBgAgMghQgGAIAAAMQAAAKADAEQAFAFAHAAQAGAAAGgHQAGgHABgHIADgXIgFgDIgGgBQgMAAgIAJg");
	this.shape_20.setTransform(-136.7,-28);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_21.setTransform(-148.1,-29.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAuQgJgJAAgPQAAgSAJgLQALgKAOgBQAIABAEACIAGAFQABgdACgKQAAgGAGAAQAGAAAAAHIgCApIgBAUQAAAWACAMIAAACQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgDAAgDgGQgFADgFACQgFACgFAAQgOAAgKgKgAgPABQgGAHAAAOQAAAIAGAHQAHAGAIAAQAFAAAEgCIAHgGIACgCIAAgLIAAgIIAAgIQgCgGgFgCQgEgCgGAAQgLAAgFAFg");
	this.shape_22.setTransform(-160,-31.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgKgHgAgOgRQgFAGgCAMIAVgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_23.setTransform(-167.8,-29.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_24.setTransform(-175.6,-28);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_25.setTransform(-182.6,-29.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHAxIABgZIABgYIAAgYIAAgZQAAgGAGgBQAHABAAAGIgBAZIAAAYIgBAhIAAAQQgBAIgFgBQgHABAAgIg");
	this.shape_26.setTransform(-188.1,-31.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZA4QgCgCAAgDIAAgcIAAgaIgCgbIgBgOQAAgFADgDQACgEADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAACIgBAEQAGgEAFgCQAFgCAFAAQAOAAAHANQAEAJAAARQABANgJAKQgIAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAgAgGgjIgJAHIABAgQAIACAGAAQAIAAAFgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgGAAgFADg");
	this.shape_27.setTransform(-193.7,-28.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgCACgCQACgDADAAQACAAAEAEQABABAGABIAIABQAEABAFgCQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgHQAAgPANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAGIABAGQAAADgCABQgCACgDAAQgEAAgBgCIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_28.setTransform(-205.3,-30.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHAxIABgZIABgYIAAgYIAAgZQAAgGAGgBQAHABAAAGIgBAZIAAAYIgBAhIAAAQQgBAIgFgBQgHABAAgIg");
	this.shape_29.setTransform(-210.5,-31.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_30.setTransform(-215.6,-29.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGAxQgCgBAAgEIAAgMIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAAMQAAAEgCABQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgDACABQAEgBACADQACACAAAEQAAADgCACQgCADgEAAQgCAAgCgDg");
	this.shape_31.setTransform(-221,-31.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXA1QgIgCAAgFQAAgGAFAAIAIABIAOABQALAAAGgNQADgIAAgRQgEAHgFADQgFADgFAAQgNAAgHgIQgJgIABgNQAAgSAKgMQALgLASAAQAGAAAEABQAFACACADQAHABAAAHIgBANIgBANIgDAWQAAAOgCAJQgDALgHAFQgIAGgPAAIgPgBgAgMghQgGAIAAAMQAAAKAEAEQAEAFAHAAQAGAAAGgHQAGgHABgHIADgXIgFgDIgHgBQgMAAgHAJg");
	this.shape_32.setTransform(-226.9,-28);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAGgCQAIgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_33.setTransform(-238.4,-29.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_34.setTransform(-246.3,-31.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEAyQgCgCAAgDIAAgDIABgDIgBgKIAAgKIgCgaIgCgcIgGAAQgPAAgJgCQgFgBAAgGQAAgDACgCQACgCADAAIALABIALABIAMAAIAMAAIAPABIAQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgQAAIgPgBIgFAAIACAfIABAdIABAHIAAAIQAAAEgBAEQgCAEgEAAQgCAAgCgCg");
	this.shape_35.setTransform(-254.6,-31.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgYAuQgJgJAAgPQAAgSAJgLQALgKAOgBQAIABAEACIAGAFQABgdACgKQAAgGAGAAQAGAAAAAHIgCApIgBAUQAAAWACAMIAAACQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgDAAgDgGQgFADgFACQgFACgFAAQgOAAgKgKgAgPABQgGAHAAAOQAAAIAGAHQAHAGAIAAQAFAAAEgCIAHgGIACgCIAAgLIAAgIIAAgIQgCgGgFgCQgEgCgGAAQgLAAgFAFg");
	this.shape_36.setTransform(-160,-31.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgKgHgAgOgRQgFAGgCAMIAVgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_37.setTransform(-167.8,-29.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgRA1QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_38.setTransform(-175.6,-28);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAFIgBADIgBAJIAAAOQgBAJACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_39.setTransform(-182.6,-29.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgHAxIABgZIABgYIAAgYIAAgZQAAgGAGgBQAHABAAAGIgBAZIAAAYIgBAhIAAAQQgBAIgFgBQgHABAAgIg");
	this.shape_40.setTransform(-188.1,-31.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgZA4QgCgCAAgDIAAgcIAAgaIgCgbIgBgOQAAgFADgDQACgEADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAACIgBAEQAGgEAFgCQAFgCAFAAQAOAAAHANQAEAJAAARQABANgJAKQgIAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAgAgGgjIgJAHIABAgQAIACAGAAQAIAAAFgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgGAAgFADg");
	this.shape_41.setTransform(-193.7,-28.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgRBEIgCgEQAAgDAEgDIAGgFQAPgQAAgjQAAgMgEgOQgDgQgHgJIgHgGQgEgFAAgCQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAIAFACQAMAKAIAVQAIATAAASQAAAzgcAQIgFACIgEgCg");
	this.shape_42.setTransform(35,-37.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_43.setTransform(28.9,-37.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_44.setTransform(22.1,-37.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_45.setTransform(15.3,-36.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgcIAAgJIABgKQABgGAFABIAHgBIAJgBQAMAAALAJQAMAKAAANQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBAMIgBAcIAHAAQALAAAIgFQAIgGAAgLQAAgIgIgGQgHgEgIAAIgFAAIgEAAg");
	this.shape_46.setTransform(8.1,-38.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAJBEQgcgQAAgzQAAgSAHgTQAJgVAMgKIAFgCQAAAAABAAQABABAAAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABABQAAAAAAABQAAACgEAFIgHAGQgHAJgEAQQgDAOAAAMQAAAjAOAQIAHAFQAEADAAADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgFgCg");
	this.shape_47.setTransform(2,-37.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgDACgCQACgCADgBQADABADACQACACAAADQAAADgCADQgDADgDgBQgDABgCgDg");
	this.shape_48.setTransform(-10.8,-33.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_49.setTransform(-16.5,-35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_50.setTransform(-23.5,-36.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYAvQgJgKAAgPQAAgTAJgJQALgMAOAAQAIAAAEADIAGAFQACgdABgKQABgGAFAAQAGAAAAAGIgDArIgBATQABAXACALIAAACQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgFAAgCgGQgEADgGADQgFABgFAAQgOAAgKgJgAgPACQgGAGAAAOQAAAJAGAGQAHAGAIAAQAFAAAEgCIAIgGIACgCIgBgLIAAgJIABgIQgEgFgEgCQgEgDgGABQgKgBgGAHg");
	this.shape_51.setTransform(-31.2,-38.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTAdQgKgKAAgPQAAgPAIgLQAJgOAQgBQAOAAAHANQAGAKgBAOQAAAOgHALQgJAMgOAAQgLABgIgJgAgLgNQgFAIAAAJQAAAJAGAGQAEAEAGABQAGAAAGgGQAFgFABgKQABgZgQAAQgJgBgFAKg");
	this.shape_52.setTransform(-39.1,-36.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_53.setTransform(-45.9,-37.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgKgHgAgOgRQgFAGgCAMIAVgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_54.setTransform(-57.1,-36.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_55.setTransform(-75.5,-36.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgXA1QgJgCAAgFQAAgGAHAAIAIABIAMABQANAAAEgNQADgIABgRQgEAHgFADQgFADgGAAQgMAAgIgIQgHgIgBgNQAAgSALgMQALgLASAAQAHAAAEABQAEACACADQAIABgBAHIgBANIgCANIgBAWQgBAOgCAJQgDALgHAFQgIAGgOAAIgQgBgAgMghQgGAIAAAMQAAAKADAEQAEAFAIAAQAGAAAHgHQAFgHABgHIADgXIgGgDIgFgBQgNAAgHAJg");
	this.shape_56.setTransform(-82.9,-35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_57.setTransform(-94.1,-37.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_58.setTransform(-100.9,-36.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_59.setTransform(-108.2,-36.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgXA1QgIgCgBgFQAAgGAHAAIAIABIAMABQANAAAEgNQADgIABgRQgEAHgFADQgFADgGAAQgMAAgHgIQgJgIAAgNQAAgSALgMQALgLASAAQAGAAAFABQAEACACADQAHABAAAHIgBANIgBANIgCAWQAAAOgDAJQgDALgHAFQgIAGgOAAIgQgBgAgMghQgGAIAAAMQAAAKAEAEQADAFAIAAQAGAAAHgHQAFgHABgHIADgXIgGgDIgGgBQgMAAgHAJg");
	this.shape_60.setTransform(-122.7,-35);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_61.setTransform(-134.1,-36.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgYAvQgJgKAAgPQAAgTAJgJQALgMAOAAQAIAAAEADIAHAFQABgdABgKQABgGAFAAQAGAAAAAGIgDArIgBATQABAXACALIAAACQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgFAAgCgGQgEADgGADQgFABgFAAQgOAAgKgJgAgPACQgGAGAAAOQAAAJAGAGQAGAGAJAAQAFAAAEgCIAIgGIACgCIgBgLIAAgJIABgIQgDgFgFgCQgEgDgGABQgLgBgFAHg");
	this.shape_62.setTransform(-146,-38.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAGgCQAIgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_63.setTransform(-153.8,-36.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_64.setTransform(-161.6,-35);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_65.setTransform(-168.6,-36.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_66.setTransform(-174.1,-38.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgaA4QgCgCAAgDIAAgcIAAgaIgBgbIAAgOQAAgFABgDQACgEAFAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAAACIAAAEQAGgEAGgCQAEgCAFAAQAOAAAGANQAFAJABARQgBANgHAKQgJAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFgjIgJAHIAAAgQAIACAGAAQAIAAAFgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgFAAgFADg");
	this.shape_67.setTransform(-179.7,-35.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_68.setTransform(-191.3,-37.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_69.setTransform(-196.5,-38.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgGAxQgCgCAAgCIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAACgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_70.setTransform(-207,-38.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgXA1QgJgCAAgFQABgGAFAAIAJABIAMABQAMAAAFgNQAEgIAAgRQgEAHgFADQgFADgGAAQgMAAgIgIQgHgIgBgNQAAgSALgMQALgLASAAQAHAAADABQAFACACADQAIABAAAHIgCANIgCANIgCAWQAAAOgCAJQgDALgHAFQgIAGgPAAIgPgBgAgMghQgGAIAAAMQAAAKADAEQAFAFAHAAQAGAAAGgHQAGgHABgHIADgXIgGgDIgFgBQgMAAgIAJg");
	this.shape_71.setTransform(-212.9,-35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_72.setTransform(-224.4,-36.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_73.setTransform(-232.3,-38.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgEAyQgCgCAAgDIAAgDIAAgDIAAgKIgBgKIgBgaIgCgcIgGAAQgPAAgIgCQgGgBAAgGQAAgDABgCQADgCADAAIALABIALABIANAAIALAAIAQABIAPAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgPAAIgQgBIgFAAIACAfIACAdIAAAHIAAAIQAAAEgBAEQgCAEgEAAQgCAAgCgCg");
	this.shape_74.setTransform(-240.6,-38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-215.6,y:-29.8}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:-188.1}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:-129.3,y:-29.8}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-80.4,y:-29.8}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-215.6,y:-29.8}},{t:this.shape_26,p:{x:-210.5}},{t:this.shape_28},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:-129.3,y:-29.8}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-80.4,y:-29.8}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_30,p:{x:-201.6,y:-36.8}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_19,p:{x:-115.3,y:-36.8}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_13,p:{x:-66.4,y:-36.8}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262,-43.8,287.5,23.6);


(lib.s3_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRBEIgCgEQAAgDAEgDIAGgFQAPgQAAgjQAAgMgEgOQgDgQgHgJIgHgGQgEgFAAgCQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAIAFACQAMAKAIAVQAIATAAASQAAAzgcAQIgFACIgEgCg");
	this.shape.setTransform(32.3,-37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_1.setTransform(26.3,-37.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_2.setTransform(19.5,-36.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_3.setTransform(12,-36.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_4.setTransform(4.4,-37.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_5.setTransform(-2.5,-36.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_6.setTransform(-9.6,-36.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcA1QgCgCAAgDIAAgUIABgcIACgcIAAgJIABgKQABgGAFABIAHgBIAJgBQAMAAALAJQAMAKAAANQAAARgNAJQgLAJgQAAIgIgBIAAAkQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgoIgBAMIgBAcIAHAAQALAAAIgFQAIgGAAgLQAAgIgIgGQgHgEgIAAIgFAAIgEAAg");
	this.shape_7.setTransform(-16.8,-38.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAJBEQgcgQAAgzQAAgSAHgTQAJgVAMgKIAFgCQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAACgEAFIgHAGQgHAJgEAQQgDAOAAAMQAAAjAOAQIAHAFQAEADAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgFgCg");
	this.shape_8.setTransform(-22.9,-37.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgDACgCQACgCADgBQADABADACQACACAAADQAAADgCADQgDADgDgBQgDABgCgDg");
	this.shape_9.setTransform(-35.7,-33.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_10.setTransform(-41.4,-35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_11.setTransform(-48.4,-36.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAvQgJgKAAgPQAAgTAJgJQALgMAOAAQAIAAAEADIAGAFQABgdACgKQAAgGAGAAQAGAAAAAGIgCArIgBATQAAAXACALIAAACQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgDgGQgFADgFADQgFABgFAAQgOAAgKgJgAgPACQgGAGAAAOQAAAJAGAGQAHAGAIAAQAFAAAEgCIAHgGIACgCIAAgLIAAgJIAAgIQgCgFgFgCQgEgDgGABQgLgBgFAHg");
	this.shape_12.setTransform(-56.1,-38.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_13.setTransform(-64,-35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_14.setTransform(-70.6,-36.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgYANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgKAEgLAAQgOAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_15.setTransform(-77.9,-36.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAgIgKgcIgMgfIgBgDQAAgCACgCQACgCADAAQAEAAACAEIARAvIAMgfIAGgQQACgEAEAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAACgLAbIgOAfQAAAGgGAAQgEAAgDgFg");
	this.shape_16.setTransform(-85.2,-36.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgaANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_17.setTransform(-92.3,-36.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_18.setTransform(-102.4,-38.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_19.setTransform(-106.3,-38.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_20.setTransform(-111.8,-36.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAzQgDADgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgCgCABgDIAAgFIAAgGIAAgVIgBgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIgBADIAAAPIAAASQAGgEAFgCQAGgDADAAQAPAAAJAMQAJAJAAAQQAAAPgKALQgKALgOAAQgLAAgIgEgAgKgCIgKAFIAAAMIAAALIAAALIAJAEQAEABAGAAQAJAAAGgHQAHgHAAgKQgBgKgFgHQgFgHgKAAQgEAAgGAEg");
	this.shape_21.setTransform(-119.3,-38.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgLAEgJAAQgPAAgJgHgAgNgRQgGAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_22.setTransform(-127.3,-36.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_23.setTransform(-134.9,-37.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_24.setTransform(-141.7,-36.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAzQgDADgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBgCAAgDIAAgFIAAgGIAAgVIgBgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIAAADIAAAPIgBASQAGgEAFgCQAGgDADAAQAPAAAKAMQAIAJAAAQQAAAPgKALQgKALgOAAQgKAAgJgEgAgKgCIgKAFIAAAMIAAALIAAALIAKAEQADABAGAAQAJAAAGgHQAHgHgBgKQAAgKgEgHQgGgHgKAAQgEAAgGAEg");
	this.shape_25.setTransform(-149.2,-38.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_26.setTransform(-161.6,-35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_27.setTransform(-168.6,-36.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_28.setTransform(-174.1,-38.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaA4QgCgCAAgDIAAgcIAAgaIgBgbIAAgOQAAgFABgDQACgEAFAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAAACIAAAEQAGgEAGgCQAEgCAFAAQAOAAAGANQAFAJABARQgBANgHAKQgJAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFgjIgJAHIAAAgQAIACAGAAQAIAAAFgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgFAAgFADg");
	this.shape_29.setTransform(-179.7,-35.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_30.setTransform(-191.3,-37.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_31.setTransform(-196.5,-38.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_32.setTransform(-201.6,-36.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGAxQgCgCAAgCIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAACgCACQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_33.setTransform(-207,-38.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgXA1QgJgCAAgFQABgGAFAAIAJABIAMABQAMAAAFgNQAEgIAAgRQgEAHgFADQgFADgGAAQgMAAgIgIQgHgIgBgNQAAgSALgMQALgLASAAQAHAAADABQAFACACADQAIABAAAHIgCANIgCANIgCAWQAAAOgCAJQgDALgHAFQgIAGgPAAIgPgBgAgMghQgGAIAAAMQAAAKADAEQAFAFAHAAQAGAAAGgHQAGgHABgHIADgXIgGgDIgFgBQgMAAgIAJg");
	this.shape_34.setTransform(-212.9,-35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_35.setTransform(-224.4,-36.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_36.setTransform(-232.3,-38.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgEAyQgCgCAAgDIAAgDIAAgDIAAgKIgBgKIgBgaIgCgcIgGAAQgPAAgIgCQgGgBAAgGQAAgDABgCQADgCADAAIALABIALABIANAAIALAAIAQABIAPAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgPAAIgQgBIgFAAIACAfIACAdIAAAHIAAAIQAAAEgBAEQgCAEgEAAQgCAAgCgCg");
	this.shape_37.setTransform(-240.6,-38.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgRA1QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_38.setTransform(-161.6,-35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_39.setTransform(-168.6,-36.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgHAxIABgYIABgZIAAgYIAAgZQAAgGAGAAQAHAAAAAGIgBAZIAAAYIgBAiIAAAPQgBAIgFgBQgHABAAgIg");
	this.shape_40.setTransform(-174.1,-38.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgaA4QgCgCAAgDIAAgcIAAgaIgBgbIAAgOQAAgFABgDQACgEAFAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAAACIAAAEQAGgEAGgCQAEgCAFAAQAOAAAGANQAFAJABARQgBANgHAKQgJAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFgjIgJAHIAAAgQAIACAGAAQAIAAAFgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgFAAgFADg");
	this.shape_41.setTransform(-179.7,-35.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-174.1}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_28,p:{x:-196.5}},{t:this.shape_30},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-50.8,289.1,23.6);


(lib.RegularVerbsDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgDADgEQAEgDADAAQAEAAADADQAEAEAAADQAAAFgEADQgDADgEAAQgDAAgEgDg");
	this.shape.setTransform(432.8,51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_1.setTransform(425.8,47);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFACQAUADAJAGQAPAIAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_2.setTransform(416.1,46.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAIAAAQIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_3.setTransform(407.5,46.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_4.setTransform(397.8,47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgLQAAgDADgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgCADgEAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_5.setTransform(388.5,45.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_6.setTransform(374.6,45.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAIAAAQIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_7.setTransform(365.9,46.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_8.setTransform(356.2,47);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFACQAUADAJAGQAPAIAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_9.setTransform(346.5,46.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_10.setTransform(337.7,47);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_11.setTransform(328.5,47);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghBHQgCgCAAgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQADAAACADQADACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgKgDIAAAqQAAAEgDACQgDADgDAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_12.setTransform(319.3,49.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_13.setTransform(304.2,47);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgFAAQgEAAgCgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQAAgDADgDQACgCAEAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAIgFQAIgFAJAAQAPAAAFAKQAEAGABAPIAAARIACASIADASIAAADQAAADgDADQgCACgEAAQgGAAgCgGg");
	this.shape_14.setTransform(294.1,44.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgCADgFAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgDgCg");
	this.shape_15.setTransform(284.5,45.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAIQAGAFAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_16.setTransform(270,47.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIAAgLQAAgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_17.setTransform(261.2,45.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAKAaQgCgCAAgDIABghIABgKQACgGAFAAQAEAAACACQACADAAADIAAAEIAAAEIgBAhQAAAIgIAAQgDAAgDgDgAgYAOIAAgRIAAgRQAAgEADgCQACgCADAAQAEAAACACQACACAAAEIAAARIAAAQIAAAEIAAAEQAAADgCACQgCACgEAAQgIAAAAgOg");
	this.shape_18.setTransform(247.4,40.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgYANgNQAMgOATABQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAdADAPIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAGgHABQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAJQAIAHALABQAGAAAFgEIAKgGIADgEIgBgOIAAgLIABgKQgEgHgFgDQgGgDgIAAQgNAAgIAIg");
	this.shape_19.setTransform(238.6,44.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_20.setTransform(228.6,47);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAKAaQgCgCAAgDIABghIABgKQACgGAFAAQAEAAACACQACADAAADIAAAEIAAAEIgBAhQAAAIgIAAQgDAAgDgDgAgYAOIAAgRIAAgRQAAgEADgCQACgCADAAQAEAAACACQACACAAAEIAAARIAAAQIAAAEIAAAEQAAADgCACQgCACgEAAQgIAAAAgOg");
	this.shape_21.setTransform(219.4,40.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeBEQgLgCAAgHQAAgIAHAAIALACQAHABAJAAQAQAAAHgQQAEgLAAgWQgEAJgHAEQgHAEgHAAQgQAAgKgKQgJgLgBgRQAAgXAOgPQAOgPAXAAQAIAAAGACQAGACADAFQAJAAAAAKIgCARIgDAQIgBAdQgBARgDAMQgEAOgJAHQgKAIgTAAQgMAAgIgCgAgQgrQgHAKgBAQQABANAEAFQAFAHAJAAQAIAAAJgJQAHgJABgKIAFgdQgEgDgEgBQgEgCgDAAQgQAAgKAMg");
	this.shape_22.setTransform(205.6,49.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAIAAAQIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_23.setTransform(196.5,46.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIgBgPIAAgRIABgUIABgTQAAgEADgDQACgCAEAAQADAAACACQACADAAAEIgBATIgBAUIABARIAAAPQAAAEgDACQgBADgEAAQgEAAgBgDgAgFgwQgDgDAAgEQAAgEADgDQAEgDADAAQADAAAEADQADADAAAEQAAAEgDADQgEADgDAAQgDAAgEgDg");
	this.shape_24.setTransform(189.2,44.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgYANgNQAMgOATABQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAdADAPIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAGgHABQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAJQAIAHALABQAGAAAFgEIAKgGIADgEIgBgOIAAgLIABgKQgEgHgFgDQgGgDgIAAQgNAAgIAIg");
	this.shape_25.setTransform(181.2,44.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgYANgNQAMgOATABQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAdADAPIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAGgHABQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAJQAIAHALABQAGAAAFgEIAKgGIADgEIgBgOIAAgLIABgKQgEgHgFgDQgGgDgIAAQgNAAgIAIg");
	this.shape_26.setTransform(170.6,44.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAcAtIgGgGIgPAGQgGACgDABQgVAAgJgMQgJgLAAgWQAAgUAOgPQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKABQAIAAAGgDIAJgHQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_27.setTransform(160.8,47.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXBFQgCgDAAgDQAAgJATgqIggg8IgEgGQgCgEAAgDQAAgEADgCQACgDAEAAQAEAAACADQAPAVAQAmIANgeIAOgbQADgFAEAAQAEAAADACQACADAAADIgBAFIgeBBQgMAYgFAQIgFARQgDAGgFAAQgEAAgDgCg");
	this.shape_28.setTransform(145.9,49.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaBCQgDAEgEAAQgEAAgBgCQgDgCAAgEIAAgHIAAgHIAAgcIgBgbIAAgXIAAgZQABgFACgEQACgGAGAAQAGAAAAAHIAAAEIgBAEIAAATIAAAWQAHgFAIgCQAHgDAEAAQAUAAALAPQAMANAAATQAAAUgOAOQgNAOgRAAQgOAAgLgFgAgNgDIgNAIIAAAPIAAAOIAAAOIAMAFQAFACAIgBQALABAIgKQAJgJAAgNQgBgNgGgJQgIgIgMAAQgGAAgHAEg");
	this.shape_29.setTransform(136.3,44.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_30.setTransform(120.6,47);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJBAIABggIAAggIABgfIAAggQAAgJAIAAQAJAAAAAJIgBAgIAAAfIgCArIAAAVQgBAJgHAAQgIAAAAgJg");
	this.shape_31.setTransform(113.1,44.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AghBHQgCgCgBgEIAAgjIAAgiIAAgjIgCgSQAAgGACgFQADgFAFAAQADAAADADQACACAAAEIAAACIgBAFQAIgFAGgCQAHgDAGAAQASAAAJAQQAGANAAAVQAAASgKAMQgLANgSAAQgHAAgMgDIAAAqQAAAEgCACQgCADgEAAQgEAAgCgDgAgIguQgEADgHAHIABAoQAJAEAJAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgHADg");
	this.shape_32.setTransform(105.9,49.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIgBgPIAAgRIABgUIABgTQAAgEADgDQACgCADAAQADAAADACQACADAAAEIgBATIgBAUIABARIAAAPQAAAEgDACQgBADgEAAQgDAAgCgDgAgFgwQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_33.setTransform(98.7,44.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAmQgNgLAAgTQAAgRAMgTQANgVAQABQAJAAAKADQAOAGAAAIQgBACgCADQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBIgDgDQgFgEgMAAQgIAAgJAQQgIAPAAAJQAAAMAIAHQAIAGAKAAQAFAAAGgDIAKgFIAEgBQAEgBACADQACADAAADQAAAHgOAFQgLAFgIABQgRAAgMgMg");
	this.shape_34.setTransform(91.4,47);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIgBgPIAAgRIABgUIABgTQAAgEADgDQACgCAEAAQADAAACACQACADAAAEIgBATIgBAUIABARIAAAPQAAAEgDACQgBADgEAAQgEAAgBgDgAgFgwQgDgDAAgEQAAgEADgDQAEgDADAAQADAAAEADQADADAAAEQAAAEgDADQgEADgDAAQgDAAgEgDg");
	this.shape_35.setTransform(84.4,44.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgJAAQgDAAgDgCg");
	this.shape_36.setTransform(77.4,45.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_37.setTransform(69.1,47);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAcAtIgGgGIgPAGQgGACgDABQgVAAgJgMQgJgLAAgWQAAgUAOgPQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKABQAIAAAGgDIAJgHQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_38.setTransform(59.9,47.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AghBHQgCgCAAgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQADAAACADQADACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgKgDIAAAqQAAAEgDACQgCADgEAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_39.setTransform(50.6,49.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgCADgFAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgDgCg");
	this.shape_40.setTransform(440.6,18.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgGQADgBAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgDgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAIAAARQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_41.setTransform(431.8,19.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHIgJACQgVABgJgMQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAKIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_42.setTransform(423.1,20);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AghBHQgCgCAAgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQADAAACADQADACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgKgDIAAAqQAAAEgDACQgDADgDAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_43.setTransform(413.8,22);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgeA8QgNgNAAgTQAAgYANgNQAMgOATABQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAeADAOIAAACQAAAEgCACQgDACgDAAQgFABgDgJQgGAGgHABQgHADgGAAQgSAAgMgMgAgUACQgHAIAAARQAAAMAIAJQAIAHALABQAGgBAFgDIAKgHIADgDIgBgPIAAgKIABgKQgEgHgFgCQgGgEgIAAQgNAAgIAIg");
	this.shape_44.setTransform(398.1,17.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAVArIgCgTIgBgUIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAHQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgHIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAHAAARIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_45.setTransform(388.4,19.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHIgJACQgVABgJgMQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAKIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_46.setTransform(378.9,20);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADABQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_47.setTransform(364.2,19.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgGQADgBAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgDgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAIAAARQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_48.setTransform(354.5,19.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAVArIgCgTIgBgUIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAHQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgHIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAHAAARIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_49.setTransform(345.9,19.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADABQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_50.setTransform(336.2,19.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_51.setTransform(326.9,18.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEADgDQACgCAEAAIASABIAAgMIAAgLQAAgDACgDQACgCAEAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgDAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_52.setTransform(313,18.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgGQADgBAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgDgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAIAAARQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_53.setTransform(304.1,19.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHIgJACQgVABgJgMQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAKIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_54.setTransform(295.4,20);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AghBHQgDgCAAgEIAAgjIAAgiIgBgjIgBgSQAAgGACgFQADgFAFAAQAEAAACADQACACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAJAQQAGANAAAVQAAASgKAMQgLANgSAAQgIAAgLgDIAAAqQABAEgDACQgDADgDAAQgEAAgCgDgAgIguQgEADgHAHIABAoQAJAEAJAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgHADg");
	this.shape_55.setTransform(286.1,22);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_56.setTransform(271.7,19.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIgBgPIAAgQIABgVIABgUQAAgEADgCQACgDAEAAQADAAACADQACACAAAEIgBAUIgBAVIABAQIAAAPQAAAEgDACQgBADgEAAQgDAAgCgDgAgFgwQgDgCAAgFQAAgEADgDQAEgDADAAQADAAAEADQADADAAAEQAAAFgDACQgEADgDAAQgDAAgEgDg");
	this.shape_57.setTransform(264.8,17.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADABQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_58.setTransform(257.4,19.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQABgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgCAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQgBgDADgDQACgCAFAAQAGAAACAIIABAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_59.setTransform(247.2,17.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIABgKIgDgyIgTgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgLQAAgDADgDQADgCADAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgCADgEAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgCgCg");
	this.shape_60.setTransform(237.6,18.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_61.setTransform(221.1,19.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_62.setTransform(209.9,19.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAATgKAOQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAIQAGAFAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_63.setTransform(200.5,20);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgOBLQgCgCAAgEIAAgCQACgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAPgBIAJAAIABgNQADgUAHgJQAIgLAUAAQAMAAAAAIQAAAJgLAAQgVAAgDAdIgBAGIAUgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIAAAQIABAQQAAARgCAJQgBAHgGAAQgEAAgDgCg");
	this.shape_64.setTransform(191.2,17.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgiA9QgRgHAAgOQAAgDADgDQACgCAEAAQAEAAADAEQAFAIADABQAIAFAOABQANAAALgGQAPgIAAgNQAAgMgMgFQgLgHgOAAQgOAAgKgFQgNgHAAgNQAAgQASgNQARgMARAAQAJAAALADQAOAEAAAFQAAAJgIAAIgMgCIgOgDQgNABgJAGQgKAHAAAKQAAAHANADQAFABANABQAUACALALQAKAJAAAPQAAAVgTAMQgRALgVAAQgQAAgNgGg");
	this.shape_65.setTransform(175.3,18.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgoBDQgDgDgBgEIAAgaIACgiIACglQgBgHACgQQAAgFACgBQANgEAPAAQAPAAAOALQAQAMAAARQAAAXgSAMQAOAGAGAGQAHAIgBAHQAAALgLAKQgIAHgJAEQgTAHgeAAQgEAAgDgEgAgbAjIAAASQAYgBANgFQAGgCAGgFQAGgFgBgDQABgDgMgGQgIgEgIgCIgJgBIgDAAIgDAAIgLgBIgBAUgAgWgzIgBAPIgBAiIANABQAMgBAIgIQAJgHAAgNQAAgIgJgHQgJgHgJAAIgNABg");
	this.shape_66.setTransform(163.7,17.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_67.setTransform(152.2,17.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIgBgKIgBgJQAAgLAJAAQAEAAADADQAKgDAJgBIARgCQAVAAANAFQAGADAAAGQAAADgCADQgDADgEAAIgCAAQgPgFgOAAIgPACQgIABgKADIABAJIgCAhIAmgDIAVgCQAEAAACACQADADAAAEQAAAHgIABIgVACIgoADIAAAMIAAALQgBATADAEQACACAMAAIAQAAIAQgBIAFAAIAFgBQAKAAAAAJQAAAIgIABQgIACgbAAQgbAAgIgHg");
	this.shape_68.setTransform(141,17.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AgPBAQgLgbgMgxIgIgYQgFgSAAgGQAAgEADgDQADgCADAAQAHAAACAIIADAPIAJAeQAIAfAIAYIABgBIAWg/IAHgVQAFgNAGgIQADgDAEAAQAEAAADADQACACAAAEQAAADgBADQgGAIgDAIIgIAUIgXA/IgKAWQgCAFgEAAQgIAAgCgHg");
	this.shape_69.setTransform(129.9,17.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_70.setTransform(112.7,17.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AAfAuQgDgIgDgUIgYAEIgWAFQgEAMgLAWQgDAFgFAAQgDAAgDgDQgDgCAAgEQAAgEAOgcQgCgCAAgDQAAgIAJgCIAZgqQAUghAFAAQAHAAACAKIAGAdIANA8IAFAOIADAKQAAADgDADQgDACgDAAQgIAAgGgUgAgLAGIAggGIgHghg");
	this.shape_71.setTransform(100.1,17.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AglBFQgFgDAAgKIABgdQADgoAAgxQAAgEACgCQADgDADAAQAEAAADADQACACAAAEQAAAygCAoIgBANIgBANQAXAAAigLIADAAQAEAAACADQACACAAAEQAAAGgFACQgKAFgVADQgTAEgMAAQgJAAgEgDg");
	this.shape_72.setTransform(88.9,17.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgmA0QgLgNgDgYQgBgMAAggIAAgUIACgLQACgGAGAAQAIAAAAAOIAAA0QAAA0AkAAQAjAAAAhYIAAgJIAAgHQAAgFACgFQADgFAEAAQAJAAAAAMIAAALIAAALQAABlg0AAQgbAAgNgQg");
	this.shape_73.setTransform(77.2,17.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AgsA8QgLgMAAgZQAAgWALgXQAKgZARgOQALgKAMAAQAIAAANAFQAQAHAAAHQAAAEgCACQgDAEgEAAQgCgBgDgCQgNgIgKAAQgGAAgHAHIgKANQgVAbABAdQAAARAFAHQAFAHAPAAQAPAAAMgKQALgLAGgTQgZABgQAIIgEABQgEAAgCgDQgDgCAAgEQAAgFAEgDQATgKAugBQAEABACACQADACAAADQAAAGgEADQgGAbgSAQQgRAQgXAAQgWAAgKgMg");
	this.shape_74.setTransform(64.5,17.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIgBgKIgBgJQABgLAIAAQAEAAADADQAKgDAJgBIARgCQAVAAANAFQAGADAAAGQAAADgCADQgCADgEAAIgDAAQgPgFgOAAIgPACQgIABgKADIABAJIgCAhIAmgDIAVgCQAEAAACACQADADAAAEQAAAHgIABIgVACIgoADIAAAMIAAALQAAATACAEQACACAMAAIAQAAIAQgBIAFAAIAFgBQAKAAAAAJQAAAIgIABQgIACgbAAQgbAAgIgHg");
	this.shape_75.setTransform(52.9,17.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_76.setTransform(41.6,17.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.502)").s().p("EglVAEsIAApXMBKrAAAIAAJXg");
	this.shape_77.setTransform(239,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RegularVerbsDef, new cjs.Rectangle(0,0,478,60), null);


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


(lib.mainmenubaseballball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHARIgBgCIgBgDIgBgBQgHgDAAgJIAAgDQAEABgBgFIAAgDIAMgEIACgBQAIgBACAGIABAAIABACIACABQADAFABAGIAAACIAAACQgFAFgHADIAAACIgCAAIgLAAg");
	this.shape.setTransform(0.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAYQgHAAgGgCIAAgCIgCgDIgDAAIgCgBQgGgEABgMIACAAIAAgBIADAAIAAgDQAGgNAPgDIADAAIAAgDQAKAAAIAEIAAABIACADIABABIAGAGIABACIABAAQAEAOgIAEIAAACIgMAIIgCAAIAAABIgNABIgCAAgAgMgBQgBAJAIADIAAABIACADIAAACIALAAIADAAIAAgCQAGgDAFgFIABgCIAAgCQgCgGgDgFIgCgBIAAgCIgCAAQgCgGgIABIgDABIgLAEIAAADQACAFgEgBIAAADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainmenubaseballball, new cjs.Rectangle(-3,-2.4,6.1,4.8), null);


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


(lib.BuffyPitch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AAAAAIABAAIgBAAg");
	this.shape.setTransform(14.6,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#009900"],[0,1],-53.2,-58.7,0,-53.2,-58.7,159).s().p("AAOABIAEAAIAAAAgAgRAAIABAAIAAAAg");
	this.shape_1.setTransform(12.8,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAPIABgNIgIgCIgFACQAEgHAJgGIAFgEQANALgDAOIgCAGg");
	this.shape_2.setTransform(5.6,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AAXBQIgXgIIAAgBIgBABIAAgBQACgFADgDIAQgaIgeAiIgugPIAiggQAHgGAbgDQAcgDAdgRQAZAKAGAZQADAJgDAHQgMAYgXANQgDAJgIAGIgDACgAglgLQgmgFgRgOQgQgNAOgkIAMABIAMAfIAFAEIA1gFIAhgyIAGACQgIANAAARQgBALADAMIAZACQgnAfghAAIgLgBg");
	this.shape_3.setTransform(17.5,27.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9966").s().p("AAKDcIgRgGIADgGIANABIADgFIBGgJIAHgHQhkhdAIgOQAGgOAOgIQARgJATABIAKAHIgBAIIgeAXQAYA3AxAmIAaAIIAAAKQgoAZgrAAQgTAAgTgFgAgZDJIgNgCIgFgHIA2gSIABgIQgZgwgngpQADgJAEgJQAEgJAGgIIAOgMIAoAOQgOAJgJAPQgGAKAEAJIAAgBQADAJAMAXIAwBCQggARgjAAIgPAAgAAGghIgJgJQAqAKAjgcIAKgHIAJAZQAHANhUAJgAA6hRIALgmIAKAiIgGAEgAAGhUIgEAAIgegCIAAAAIgBAAQgJgIgBgMIgBgIIAFgDIACgIIgCgHQgCgIgCgDIACgBQgjAQgOgWIAQgZIgUAVQgEgGgCAAIgEgCQgNgKgCgQIgPgHIACABIAegJIACAOIAJAEIAKACQAIgFADgJQADgHACgIIgIgKIAMgCIAKAFIgGAGIACAHIAGAEQAIARAQALIADAOQADAKAKADIAGgBIAFgGIAIAEIAAAMIAgAFQgLAbgXAVIgFABg");
	this.shape_4.setTransform(14,30.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYEAIgBgKIgmgOIgCgIIAbgDIANgEQAGgCAGgEIAMgGIgSgXQgcglgWgqIAjgsIAlgmIgGgPIg/gZQgSgNANgxIAWgFIgCgNQgCAEgHABIgFAAQgGAAgGgBQgKgDgJgHQgTgOgLgXIgQgKIgCgIQAHgCAGgDQATgFANgLIAJgJQgSAKgBgVQgUgPASgPIAKAAQgMAAgCgUIAGAAQANgRARAQIADgLIAGAAIAJAAQAGABAAAEIgCAHIAGgDIAEADQACgDgDgCQgCgDAFgEQAGgFACAAQADABAFgCQAEAEABADIADgDIAGgCQAPAIgIAHIAIgGIASAFIAHgCIAAAFIADAFQAXANgQAMQAFAAAHAEQABAGgBADQAKgDAJASQgFAKgHgEIAFAEIABABQAIAHgIACQAHABAFAIQgCAMgGAVQgGAWggABIAUADIAFABIAOAAIAbBZQAVABAOAPQAOAPAEAWIgNAYQgRAagaAQIAAAAIgBAAIgRAJIgGgFIgKAGIgOALQADALADAHQATAoAxAlIANAFIACAHIAEACQgrAig1ABIgDAAQgfAAgcgOgAgOD7IARAGQBBAQA4gkIAAgKIgagIQgwgmgYg3IAdgXIABgIIgJgHQgUgBgQAJQgNAIgIAOQgHAOBkBdIgHAHIhGAJIgDAFIgOgBgAgqBPQgGAIgEAJQgEAJgCAJQAmApAaAwIgCAIIg2ASIAFAHIANACQAsAEAngVIgwhCQgMgWgEgKIAAABQgDgJAGgKQAJgPAOgJIgogOgAAdBLIAXAHIAcAUIADgCQAIgFADgJQAXgOAMgYQADgGgDgJQgGgZgZgKQgdARgcADQgcADgHAGIghAgIAtAOIAfghIgQAZQgEAEgCAFIAAAAIABAAIABABgAAAADIAKANQBUgJgHgMIgKgZIgJAHQgjAbgqgJgAg/gbQARAOAmAFQAlAGAugkIgZgDQgDgLABgLQAAgRAIgNIgGgDIgiAzIg0AEIgFgDIgMgfIgMgCQgOAlAQANgAAzgsIAPAAIAGgEIgKgigAguhqIABABQACACACAIIABAHIgBAIIgFADIAAAIQACAMAIAIIACAAIAfACIADABIABgBIAEgBQAYgVALgbIgggFIAAgMIgIgEIgEAGIgHABQgLgDgCgKIgDgOQgQgLgIgRIgHgEIgCgHIAHgGIgLgFIgMACIAIAKQgBAIgDAHQgEAJgIAFIgKgCIgIgEIgCgOIAFgDIAIADIgCANIAPABIACgGQADgPgNgLIgGAEQgIAGgEAIIgeAJIgCgBIAPAHQACAQAMAKIAFACQACAAAEAGIATgVIgPAZQANAXAjgRIgCABg");
	this.shape_5.setTransform(14.6,26.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AAXBMIgXgIIAAgBIgBABIAAgBQACgFADgDIAQgaIgeAiIgugPIAiggQAHgGAbgDQAcgDAdgRQAZAKAGAZQADAJgDAHQgMAYgXANQgDAJgIAGIgDACgAglgPQgmgFgRgOQgQgNAOgkIAMABIAMAfIAFAEIA1gFIAbgqIAFABIAEgBQgFALAAANQgBALADAMIAZACQgnAfghAAIgLgBg");
	this.shape_6.setTransform(17.5,27.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAMIAFgMIgHgFIgGACQAGgHAJgDIAGgCQAKANgHANIgDAFg");
	this.shape_7.setTransform(7.4,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC9966").s().p("AABDdIgRgGIADgGIANABIADgFIBGgJIAHgHQhkhdAIgOQAHgOANgIQARgJATABIAKAHIgBAIIgeAXQAYA3AxAmIAaAIIAAAKQgoAZgrAAQgTAAgTgFgAgiDKIgNgCIgFgHIA2gSIABgIQgZgwgngpQADgJAEgJQAEgJAGgIIAOgMIAoAOQgNAJgKAPQgGAKAEAJIAAgBQADAJAMAXIAwBCQggARgjAAIgPAAgAgCggIgKgJQAqAKAjgcIAKgHIAJAZQAHANhUAJgAAxhQIALgmIAKAiIgGAEgAgChTIgEAAIgfgCIAAAAIgBAAQgJgIgBgMIgBgIIAFgDIACgIIgCgKIgBAAIAAgBIgBgGIABgBQgmAHgHgZIAWgVIgZAQQgCgHgCAAIgEgEQgJgMACgRIgNgKIACABIAfAAIgBAOIAHAGIAJAEQAJgCAGgIQAFgHADgHIgFgLIAMABIAJAHIgIAEIAAAIIAFAFQAEATAMAPIAAAOQgBAHAFAFIAFADIAHACIAFgFIAHAGIgCAGIAcAGQgLAVgTARIgEABg");
	this.shape_8.setTransform(14.9,30.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghEAIgBgKIgngPIgBgHIAbgDIAMgFQAHgCAGgDIAMgGIgTgYQgcgkgVgqIAigsIAmgmIgHgPIg/gaQgRgNAMgwIAXgGIgCgHIAEgDIgFACIAAgGQgEAEgKgDQgQgDgMgPQgPgSgEgZIgNgPIAAgIQAHAAAIgBQATAAAPgHIAMgGQgUAEAEgUQgQgTAWgKIAKACQgMgDADgUIAGABQARgNAMAVIAFgLIAHACIAJACQAFACgCAFIgDAGIAHgCIADAFQACgDgCgDQgBgDAGgDQAHgDACABQADABADAAQAEAFAAADIADgCIAHAAQANALgKAFIAJgDIARAJIAHgBIgBAGIABAFQATATgSAHQAFABAFAGQAAAGgCADQAKgBAFAVQgIAHgGgFIAEAFIABABQAGAJgJAAQAHADADAJQgFAKgLAUIgCACIAaBTQAVACAOAOQAOAQAEAWIgOAXQgQAagbAQIABAAIgBAAIgRAJIgHgFIgKAGIgOALQADALAEAHQATApAxAkIAMAFIADAIIAEACQgrAig2AAIgCAAQgfAAgcgNgAgXD7IASAGQA/AQA5glIAAgJIgagIQgxgmgYg4IAegXIABgHIgKgIQgTgBgRAJQgNAIgHAOQgIAOBkBdIgHAHIhFAKIgDAEIgOgBgAgzBPQgGAIgEAIQgEAJgDAKQAnAoAaAxIgBAIIg3ASIAFAHIANABQAsAFAmgWIgvhCQgNgWgDgJIAAAAQgEgJAGgJQAKgQANgJIgogOgAAUBKIAWAIIAdAUIADgCQAIgFADgKQAXgNALgYQADgHgCgJQgHgZgZgJQgcAQgcADQgdADgFAGIgjAhIAuAOIAfgiIgQAaQgEADgCAFIAAABIAAgBIACABgAgJACIAJAOQBUgKgHgMIgJgZIgKAIQgjAagqgJgAhIgcQAQAOAmAGQAmAGAtglIgZgCQgCgLAAgLQABgOAFgLIgEABIgFgBIgdArIgzAEIgFgDIgMggIgMgBQgPAkARANgAAqgtIAPAAIAGgDIgKgjgAgzhiIACAKIgCAHIgFAEIABAIQABALAJAIIABAAIAfACIAEABIABgBIAFAAQASgSALgVIgbgGIABgFIgHgGIgFAEIgHgBIgFgEQgFgFABgHIAAgOQgMgPgEgTIgFgFIAAgHIAIgEIgJgIIgMgBIAFAMQgDAHgFAGQgGAIgJACIgJgEIgHgGIABgOIAGgCIAHAFIgFANIAPAEIADgFQAHgOgKgNIgHABQgKAEgGAHIgfABIgCgBIANAKQgCAQAJANIAEADQACABACAHIAZgQIgWAUQAHAaAmgHIgBAAIAAABIABAFIAAACIAAAAIABAAg");
	this.shape_9.setTransform(15.6,27);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AAXBGIgXgIIAAAAIgBAAIAAAAQACgFADgEIAQgaIgeAiIgugOIAiggQAHgHAbgCQAcgDAdgRQAZALAGAYQADAIgDAHQgMAYgXANQgDAKgIAFIgDACgAglgUQgmgGgRgNQgQgOAOgkIAMABIAMAgIAFADIA1gEIAPgYQAJACAHgCIAAAGQgBALADALIAZADQgnAfghAAIgLgBg");
	this.shape_10.setTransform(17.5,28.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAIIAIgKIgGgHIgGABQAIgGAJgBIAHAAQAGAPgKAMIgEAEg");
	this.shape_11.setTransform(9.2,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC9966").s().p("AgIDjIgSgGIADgHIAPABIADgEIBFgKIAGgHQhjhdAHgNQAIgPANgIQAQgJATABIAKAIIgBAHIgeAXQAYA4AxAmIAaAIIAAAJQgnAagrAAQgTAAgTgFgAgsDPIgNgBIgFgHIA3gSIACgIQgbgxgmgoQACgKAEgJQAEgIAGgIIAOgNIApAOQgOAJgKAQQgFAJADAJIAAAAQAEAJANAXIAvBBQggASgkAAIgPgBgAgMgbIgKgJQAqAKAkgbIAJgIIAKAZQAGAOhTAJgAAnhLIAJgfIAAAAIADgDIAJAfIgGADgAgMhNIgDAAIgggCIAAgBIgBABQgIgJgCgLIgBgIIAGgEIABgHIgBgHIAAgBIgBgDIgBAAIgDgLIACgBQgngDAAgaIAagOIgcAJQAAgIgCgBIgDgEQgGgPAHgPIgKgNIABACIAfAHIgGANIAGAIIAIAGQAJABAHgHQAHgFAFgGIgCgMIALAEIAHAKIgIABIgDAIIAFAGQgCATAIASIgEANQgCAHADAGIAEAFIAGADIAHgDIAFAIIgEAGIAYAPQgIAKgKAKIgFABgAAEhpIAJAEIgBACIgIgGg");
	this.shape_12.setTransform(15.9,30);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgrEBIAAgKIgngOIgCgIIAbgDIANgEQAHgCAFgEIANgGIgTgXQgcglgVgqIAigsIAmgmIgHgPIg/gZQgSgOANgwIAWgFIgFgTIgLgDIgDgCQgGgDgEgEQgHgHgFgLQgKgVADgaIgJgRIACgIQAHADAHAAQATAFAQgEIANgCQgUgBAJgSQgKgXAXgEIAJAEQgKgFAIgTIAFADQAUgJAGAXIAIgIIAGADIAHAFQAFADgDAEIgEAFIAFAAIADAFQACgBAAgEQgBgDAHgCQAHgBACACQACACAFAAQACAGgBADIAEgBIAGACQAKAOgLACIAKgBIAOAOIAHABIgDAFIAAAFQAOAXgTADQAEACADAHQgCAFgCADQAKACgBAVQgKAFgEgGIADAFIAAACQADAKgIgCQAGAEABAJIgOAQIAWBHQAVABAOAPQAOAPAEAWIgOAYQgQAagbAPIABABIgBAAIgRAJIgHgFIgKAGIgOAKQADAMAEAHQASAoAyAlIAMAFIACAHIAFACQgsAig1ABIgCAAQgfAAgdgOgAghD8IASAGQBAAQA5gkIAAgKIgagIQgxgmgYg3IAegXIABgIIgKgHQgTgBgQAJQgOAIgIAOQgHAOBkBdIgHAHIhFAJIgDAFIgPgBgAg9BQQgFAIgEAJQgEAJgDAJQAnApAaAwIgCAIIg3ASIAGAHIAMACQAtAEAmgVIgvhCQgNgXgDgJIgBABQgDgJAGgKQAKgPAOgJIgpgOgAAKBMIAXAHIAdAUIACgCQAJgFACgJQAYgOALgYQADgGgDgJQgGgZgZgKQgdARgcADQgbACgHAHIgiAgIAuAOIAeghIgQAZQgDAEgCAFIAAAAIAAAAIABABgAgSAEIAKANQBTgJgHgMIgKgZIgJAHQgjAbgqgJgAhRgaQAQANAmAGQAlAGAugkIgZgDQgCgLAAgLIAAgGQgHACgJgCIgPAYIg0AEIgGgDIgLgfIgNgCQgOAlARANgAAqhLIgBAAIgJAgIAPAAIAHgEIgJgfIgDADgAg8hfIAAABIABAHIgBAIIgFADIABAIQABAMAJAIIABAAIAfACIADAAIACAAIAEgBQALgJAHgLIgXgOIADgHIgFgIIgHADIgGgDIgEgFQgDgFACgIIAFgNQgJgRACgUIgEgGIACgHIAJgCIgHgKIgMgEIACAMQgFAHgGAFQgIAGgJAAIgIgHIgFgHIAFgOIAGAAIAGAGIgIALIAMAIIAFgDQAKgMgGgQIgHAAQgKABgIAFIgegHIgBgCIAJANQgGAQAGAOIACAFQACABABAHIAbgJIgaAOQABAbAmADIgCAAIAAAAIADALIABAAIABADgAAFhEIACgCIgIgEIAGAGgAhKhqIABAAIAAAAIgBAAg");
	this.shape_13.setTransform(16.5,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_1},{t:this.shape}]},59).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_1},{t:this.shape}]},25).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.1,29.1,54);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAlbAVBMhK1AAAMAAAgqBMBK1AAAg");

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


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank, new cjs.Rectangle(0.1,0,65,34), null);


(lib.animCarmen_ready = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(234.5,-135.5,1,1,0,0,0,46,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:10.5,x:234.4},4).to({scaleX:1,scaleY:1,rotation:0,x:234.5},6).to({scaleX:1,scaleY:1,rotation:10.5,x:234.4},5).to({scaleX:1,scaleY:1,rotation:0,x:234.5},4).to({scaleX:1,scaleY:1,rotation:10.5,x:234.4},5).to({scaleX:1,scaleY:1,rotation:0,x:234.5},6).to({scaleX:1,scaleY:1,rotation:10.5,x:234.4},5).to({scaleX:1,scaleY:1,rotation:0,x:234.5},4).wait(15).to({startPosition:0},0).to({scaleX:0.59},4).wait(1).to({scaleX:0.71,skewY:180,x:240.2,y:-140.3},0).to({scaleX:0.77,scaleY:1.2,x:266,y:-151.5},4).to({regX:46.1,regY:28.1,scaleX:0.84,scaleY:1.45,x:298.3,y:-165.5},5).wait(32));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("ABnlbQAWgCAWACQAEAAAFAAQAYACAaAAQAbAAAcAAQAcgBAeACQANAAAOAAQAHAAAHgBQAHAAAHgBQAdgDAcACQAeADAZADQAIACAJABQAGAAAGABQAQAIAIAPQAMAWgGAeQgFAWgNAVQgOAVgKATQgDAHgEAGQgHAOgIANQgKARgUALQgBABgBAAQgCAEgDAEQAAAAgBABQgJALgNAKQgGAEgGAFQgNAKgMALQgJAHgKAHQgDACgCACQgHAFgHAEQgBABAAAAQgDABgCACQAAAAgBAAQgPAJgPAIQgDACgDABQgXAMgUAOQgTAOgZANQgNAIgPAHQgIAEgIADQgFACgEACQgDACgDABQgOAIgPAGQAAABgBAAQgCABgDABQgZAIgYAHQgQAFggAJQgPAEgRAGQgNAFgPAIQgOAIgRALAhmBYQAkgMALgDQAGgCAGgCQASgHAPgKIAAAAQAEgBAEgCQACgBAAgBQARgHAOgHQAAAAABAAQADgCADgCQAHgDAHgEQAMgGALgGQAKgGALgEQAJgGAKgFQABAAABgBQATgKARgOQABgBACgBQAPgMATgNQAGgEAFgEQAJgGAIgHQAEgDAEgEQAGgFAFgFQAIgGAJgHQAGgFAGgFQAMgJALgJQANgLALgNQAEgEAEgFQAIgLAJgLQAEgEAEgFQACgCACgCQAIgKACgPQgEACgFABQgDABgCAAQgWAFgaABQgCABgBAAQgbABgeABQgLABhIgCIg0AAAkujGQgIADgEAFIgBAAQgEAGgDAGQgBACgCACQgBAEgCADQgBACgBACIAAAAQgBABgCAAQABABABABQgKAXgKAVQgJARgLASQgCADgBADQgCAEgCAFQgHAKgHAKQgMASgOASQgMAQgLAUQgLATgIAVQgCAFgCAFQgGARgIAQQgBACgBACQgBABgBACQAAABgBABQgHAOgHAPQAAADgBACQgFAWgIASQgLAVgGAYQgGAWgIAZQgJAeAMAUQAEAFAHAEQAZAMAXgLQAUgKATgNQALgIAKgIAlzhQIABAAQgEAHgEAHAlKijQgBACAAABAjdBDQAAABgBABAjmBcQABAEAAAEAjmBcQADgIADgIQAAgBABgBQAAgCABgDQAAgBAAgBQAAgIACgHAmcErQAGgFAGgFQACgCACgCQANgLALgKQARgPARgRQAVgUARgSQATgTAQgRQAPgQALgaQAFgMAEgMAkGgbQgnAjgJAnQAAABAAACQgLANgOANQgEADgEAEQgMAKgNAKQgUAOgMARQgNATgUAL");
	this.shape.setTransform(248.4,-142.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AAAgBIADgFIABAAIAAABIgHAMIADgIg");
	this.shape_1.setTransform(210.9,-150);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AoQFXQgHgEgEgFQgMgUAJgeIAOgvQAGgYALgVQAIgSAFgWIABgFIAOgdIABgCIACgDIACgEQAIgQAGgRIAEgKQAIgVALgTQALgUAMgQIAagkIAOgUIAIgOIgBAAIAAgBQALgSAJgRIAUgsIABgDIAAAAIACgEIADgHIADgEIAHgMIABAAQAEgFAIgDQBGBugeA9QAOAhASAeIAKAQIgCAPIAAABIAAABIAAgBIAAgBIABAAIgBACIgBAFIgBACIgGAQIgJAYQgLAagPAQIgjAkIgmAmIgiAgIgYAVIgEAEIgMAKIgIAAIAAAGIgVAQQgTANgUAKQgLAFgMAAQgMAAgNgGgAk2AvIAAADQgLANgOANIgIAHQgMAKgNAKQgUAOgMARQgNATgUALQAUgLANgTQAMgRAUgOQANgKAMgKIAIgHQAOgNALgNIAAgDQAJgnAngjQgnAjgJAngAhGB0IgBAAQgRgKgLgOIgDgEIAvgPIAMgEQASgHAPgKIAAAAIAIgDIACgCIAfgOIABAAIAGgEIAOgHIAXgMIAVgKIATgLIACgBQATgKARgOIADgCQAPgMATgNIALgIIARgNIAIgHIALgKIARgNIAMgKIAXgSQANgLALgNIAIgJIARgWIAIgJIAEgEQAIgKACgPIgJADIgFABQgWAFgaABIgDABIg5ACIhTgBIg0AAIAAh8QAWgCAWACIAJAAQAYACAaAAIA3AAQAcgBAeACIAbAAIAOgBIAOgBQAdgDAcACQAeADAZADIARADIAMABQAQAIAIAPQAMAWgGAeQgFAWgNAVQgOAVgKATIgHANIgPAbQgKARgUALIgCABIgFAIIgBABQgJALgNAKIgMAJIgZAVIgTAOIgFAEIgOAJIgBABIgFADIgBAAIgeARIgGADQgXAMgUAOQgTAOgZANIgcAPIgQAHIgJAEIgGADQgOAIgPAGIgBABIgFACIgxAPIgwAOIggAKIgcANIgfATQAGgxgKgGgAlNiiIADgBIgBADIgCgCgAlKijIAAAAg");
	this.shape_2.setTransform(248.4,-142.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.3,1,1).p("ADNkvIADAAIAJAAQAiAJAfA0QANAXAmBXQBKCoAAB3QAAA5gHAHQgGAFg5AAQgeAAhSghQhTgigRgTQggg0gfgmQAAgCAAgCQADgVAHgHQAHgGAaAUQAbATA5AkQA5AkBGgMQABABAAAAIAAADQABACABABIgCAAIAAgDAE8BtQgdgZhIitAkKCTIB1iZQAPg6g9hgQgIADgFAFIAAAAQgEAGgEAGQgBACgBACQgCAEgBADQgBACgBACIAAAAQgBACAAABQgKAXgLAVQgIARgLASQgCADgCADQgCAEgCAFQgGAKgHAKQgMARgOASQgNARgLAUQgKATgIAVQgCAFgCAFQgHARgIAQQgBACgBACQAAABgBACQgBABAAABQgHAOgHAPQAAADgBACQgEAQgFANAkIgqIAAAAQgDAHgFAHAjfh9QgBABgDAAQACABABABAmQDcQAAACgBABQgMArAOAbQAGAIANABQAoAFAVgIQAOgFAUgIQAHgEAHgDQADgBACgCQAPgHAOgHQAUgKAVgMQAZgOAVgNQAYgNAUgNQASgLARgWQAGgIAFgHQADgDACgDQAFgHAEgIQABAAAAgBQACgCABgCQAAgBABgBQACgIADgGAg3AIQgvAZgTAjQgBACAAABQgOAKgRAJQgFACgEACQgPAIgPAFQgXAJgQANQgIAHgbALQgUAIg6AfAgqBxQABgBAAgB");
	this.shape_3.setTransform(237.8,-146.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("Al8EuQgNgBgGgIQgOgbAMgrIABgDIAAgBQAFgNAEgQIABgFIAOgdIABgCIABgDIACgEQAIgQAHgRIAEgKQAIgVAKgTQALgUANgRIAagjIANgUIAIgOIAAAAIAAgBQALgSAIgRIAVgsIABgDIAAAAIACgEIADgHIACgEIAIgMIAAAAQAFgFAIgDQA9BggPA6Ih1CZQAbgLAIgHQAQgNAXgJQAPgFAPgIIAJgEQARgJAOgKIABgDQATgjAvgZQAEAlAKAiIAFASIgFAOIgBACIgDAEIgBABIgJAPIgFAGIgLAPQgRAWgSALIgsAaIguAbIgpAWIgdAOIgFADIgOAHIgiANQgNAFgWAAIgagCgAlYC6QA6gfAUgIQgUAIg6AfgADhC/QhTgigRgTQggg0gfgmIAAgEQADgVAHgHQAHgGAaAUQAbATA5AkQA5AkBGgMIABAEIAAADIACAAIgCgDIAAgDIgBgBQgdgZhIitQAhAegMgOQgKgLAAgtIAAhBQgLhRgHgcIAJAAQAiAJAfA0QANAXAmBXQBKCoAAB3QAAA5gHAHQgGAFg5AAQgeAAhSghgAgpBvIAAAAIgBACIABgCgAjjh8IAEgBIgBADIgDgCg");
	this.shape_4.setTransform(237.8,-146.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.3,1,1).p("AB6kDQADgGAEAAQBIAAAcAvQATAhAABFQAAAygFAUQgKAmghAAQgHAAgHgBQgTgEgOgNQgMgLgHgSQAAAAgBAAIAAAAIgHgWQADAMAEAKAB+hNQADABACABQABABABABQADAFgCAMQAAABgBAAIABAAACtAPQgGAJgJAFQg1Adg1AgQhAAohBAsQhMA2g9gkQgvgZgsgkQgrgkAHhKQAHhIAngxQAngxAmB9QAmB8DiiFQATgPAQgKQAggVANACACxAJQgCADgCADQABgCAAAAQABgCACgCQALgJAkgEQADgHAYgRQAZgSAJAAQAOAAANAMQAOALAIAAQAHAAAAA3QAABSACATIAACAQgJAFgUAAQg1AAgvhMQgrhGAAg9QAAgjACgJAC/gaQgBAEgBAEQgBAEgCAFQgEAKgFAIAEGgSQAAAlgTATIAABp");
	this.shape_5.setTransform(245.1,-150.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("ADWC+QgrhGAAg9QAAgjACgJQgGAJgJAFQg1Adg1AgQhAAohBAtQhMA1g9gkQgvgZgsgkQgrgkAHhKQAHhIAngxQAngxAmB9QAmB8DiiFIAAgEQAAgIAjgNQAggVANACQADABACABIACACIgJibIAYgTQgLgHgPgFQADgGAEAAQBIAAAcAvQATAhAABFQAAAygFAUQgKAmghAAIgOgBIADgKIACgHIgCAHIgDAKQgTgEgOgNQAOANATAEQgEAKgFAIIgDAEIgBACIAEgGQALgJAkgEQADgHAYgRQAZgSAJAAQAOAAANAMQAOALAIAAQAHAAAAA3QAABSACATIAACAQgJAFgUAAQg1AAgvhMgADzAmIAABpIAAhpQATgTAAglQAAAlgTATgACGg3IgkAdIA3AAQgMgLgHgSIgBAAIAAAAIgHgWQADAMAEAKIABAAgAAughQATgPAQgKQgQAKgTAPgACFg3IABAAIAAgBIABgJQAAgFgCgDQACADAAAFIgBAJIgBABgACuANIADgEIgEAGIABgCgAB+hNIAHAWIAAAAQgEgKgDgMg");
	this.shape_6.setTransform(245.1,-150.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.3,1,1).p("ABfA4QBDAbBMgfQB8gyB8gjQAUgGAKgcQAOgqABgoQjXAbg8AbQgCgTgFgRQhNAXg8AUQhWAcg1AVQg2AXgVAPQg5Aog1gGQgzAVhpgyQhogxgjAlQgkAkAUA1QATA2BPARQBQASBRAIQBqAOBdg0QBPgsBRgogAEAhfQADAXgCAZQgDAdgYALQhEAdhDAiAhiisQBigcA6BAQAdAhAZAP");
	this.shape_7.setTransform(261.9,-159.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AkICyQhRgIhQgSQhPgRgTg2QgUg1AkgkQAjglBoAxQBpAyAzgVQA1AGA5goQAVgPA2gXIgfguIgNgUIgKgFIAIACQgkg4A0ArIAUARQAjgDhfg+QB8gGh9ADQBigcA6BAQAdAhAZAPQhWAcg1AVQA1gVBWgcQA8gUBNgXQAFARACATQA8gbDXgbQgBAogOAqQgKAcgUAGQh8Ajh8AyQhMAfhDgbQBDgiBEgdQAYgLADgdIABgVQAAgOgCgNQACANAAAOIgBAVQgDAdgYALQhEAdhDAiQhRAohPAsQhKAphRAAQgWAAgWgDg");
	this.shape_8.setTransform(261.9,-159.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape_3}]},54).to({state:[{t:this.shape_6},{t:this.shape_5}]},4).to({state:[{t:this.shape_8},{t:this.shape_7}]},5).wait(37));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.3,1,1).p("Aowr/QAEiBBmhAQAlgXAuAFQBwhcBrBWQAtAlAXA2QAqBiBGBHIABADIhFATIg4ASQAEgLAFgMQAUg/gkg1IgeAkAi8u9QgFgDgEgCQgygYgyAWIhKgOAkpvEIABACQh3BDAhCGQARBGAcBCIBHAYAi8u9QgNAIgIAMQgDAHgFAHAAcrUIBEgHIAAAFACUn1IAeAoQhcBKh4ASIAAAAQgFADgZASQgZASguABQgvgGgegbQgDgEgCgFQgRg5gag2IgBgCQgIgQgDgPQgZgqAAgFQAAgGgMgNIAsgRIgBgDIABAAQBOAfA3gpQAQgMAEgTACCpSQgIAuAaAvQh9gNg3h2QgQgiAIgkAgilxIAAAAAgRhmIAEgDIAYgRIABgBIABADQBRAiBVgJQA6gIA1gUQB7guA9hvQBVAsgIBjQgGBVgnBMQg3BsgzBvIgFACIgKgDIgrgXIgXAqIhlCbQAiACAZAdQBcBrA1CEQAXA4AwAfQBjA/BYBDQACAAAAACQAAACgBABQgBAEgDACQgEAEgEADQAAANgJAJQgIAJgMAAQgFgRgPgLQgFgDgEgCAgNhpIAAABIAZAkAgRhmIAMBMACCiCQAQAEAGgNQgMACgKAHgACynNQBcB6DMA7AhwtdQAAgFAAgFQgGgmgkgYIgigYAh9tGIAKgMAiHtqQgDABgDAAAhns3IABgIQgCgCgDgBQgIgGgKACQgyAFgJg7QAAgBAAgBQAIgHAHgIQAIgLAHgNAi4t+IADgiAjvtyQgBgBgEgBQgMgEgBgOAjvtyQACgBABgBQAGABAEAEQAQAPAEAaQAFAegXAIQgaAKgagKQgZgIgJgTQgFgJgBgIQgCgdgLgTQAJAHANAFQACABABAAQAEABAEABQgDgCgCgDQgBgCgBgDQgIgKgFgOAkZuDQAIAMAKAFQAEADAFABQACAAABAAQAIgCAEgCAj/rPQADgGADgFQAKgNAPgFQASgGARAIQAYAKAaAAQARABAFgJAlMuhQAWACAWAEQAFABAEABQAMADAJAGAkPtsQgDgCgDgCQgCgBgCgBQgLgIgDgQAkottQAMACANgBQAIAAAJgCAlJt8QgJgHgEgKAkqrvQgOAYASARAkJpWQAdAcAYAhQA0BFBUgKQAHAAADgGQAuhZhchFIAQgqAkEniQgLgTgBgOAowpmIgBgFIABiSIAAgCAowr9IAAgCAovpeIAAgGIgBgCAovpeIAAgGIgBgCAoqplIgGgGIAAAFAlRpxQgbC8gGBLQgcCyhogDQA5iShAA7Qg/A7htghQBTglAahYQAihzgVh2AmrhOQAEgDADgCAkgB8QATARAWAGQAGABAGAAIgVAXQgUgKgIgYQgCgGgCgHQArgqAzgmQBdhGBUhMAggDzQgSAEgPgGQgEgCgEgCIAIgRQg0grhAgRQgbgGgbgGAhJDtQgfAogoAdQgJAHgJAHQBRB0AjCNQAYBgA3BSQAiAwAqApQADAAADADQACACAAADAlDPTIgNgIIgBgEQACgFAEgDQAkgeAwgMQBpgbBbg4QgYg3gqgqQhJhHg5hVQhZiCgeiaIBuh+AlDPTQAOgaAeAGQADABAEgBAkLPqQgOACgKgKQgCgCgCgDQgCABgDABQgPgCgIgKAkLPqIAqgJABBOsQh8AGhrBBQg7AkgqgtAknPdIAlgPAGHD2IgGgEAGQDzIgCACIgBAAIAAAAIgCAAAGOD1IgBAAIgGABIhIAPABXCZIgCgBQACgCACgCIAEgCIAAABIgGAGQgOAOgNAOQgnAsg1ASABGDwIgBgDQAPgmAIgnQABgHAAgGABeCOIgBAEABZCUIAFgGQAXgiAFgoQADgNAAgNAFWDbQhrgghtAdQgLACgLAFIgiAQIAAABABfEBQgLAAgHgFQgHgFAAgHIAAAAABoDfIgJAiAJpPPQAAAGgCAFQgBAEgEADQgCADgEACQgCACgCABQgDAAgDAAQgCABgCAAQhQglg3hGQgWgcgagVQhahJhKhaQhOhghJhlQhQhvBTh2ABNOiQAAAEgDADQgEADgFAAABtNMIAIAIQgCArgeAdQgEADgEADIgMAKAKAO4IACALQgIAMgRAAQAAgNgJgJQgIgJgNAAAKdOZQgFgRgQgKQgEgCgEgCAhBDcIAhAXAAMh7IiTjO");
	this.shape_9.setTransform(249.2,-104.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag+AZQgGgPAHgGQAEgDAGgBIALABQADABAEAIQAHAOgQAFIgKABQgHAAgDgFgAAjgIQgOgQAPgEIAFgBIAEAAQAIACAIAHIADAEQAFAHgIAEIgDABQgGACgEAAQgIAAgFgGg");
	this.shape_10.setTransform(231.4,-188.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3BAQgZgIgJgTQgEgJgBgIQgDgcgLgTQAJAHAOAFIADABIAHACQAMACANgBIARgCIAEgBIAMgDIADgCQAFABAFAEQAOAOAFAaQAEAegWAIQgMAFgNAAQgNAAgOgFgAgHAUQgGABgEADQgHAFAGAQQAEAIAPgFQAQgEgHgOQgEgIgDgBIgGgBIgEAAgAAkgcIABgBQAIgHAGgIQAJgLAHgNQAjAXAGAnIAAAJIgDgDQgIgHgIgDIgEABIgFABQgOAEANAPQAIAJAPgFIADgCIgKANIgHAAQgrAAgJg2g");
	this.shape_11.setTransform(227,-190.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#996600").s().p("AivGjQA4iSg/A7Qg/A7hughQBTglAahYQAjhzgVh2IgBgFIABAFIgBgFIAAAAIAGgBIgHgGIAAABIABiTIAAgCQADiBBmhAQAlgXAuAFQBwhcBrBWQAtAlAWA2QAqBiBIBIIABACIhHATIg3ASIAIgXQAVg/glg1IACgIIgFgDQgJgGgKACIAKgMQAIgEgFgHIAAgKQgGgmgjgXIgjgZIgJgFQgxgYgzAWIhJgOIBJAOIABACQh1BDAgCGQARBGAcBCQgbC8gFBKQgcCvhlAAIgDAAgAjqieIABgCIAAACg");
	this.shape_12.setTransform(216.5,-164.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("AmJPQIApgIIgpAIQgOACgLgJIgEgGIAlgPIglAPIgFACQgPgBgIgLIABgBIAAgBQAMgTAVAAIABAAIAAAAIAJABIABAAIAAAAIAAAAIADABIABAAIACAAIABAAIgBAAIgCAAIgBAAIgDgBIAAAAIAAAAIgBAAIgJgBIAAAAIgBAAQgVAAgMATIAAABIgBABIgNgHIgBgFQACgFAEgDQAkgeAwgLQBpgcBcg4QgYg2grgrQhIhHg5hUQhZiDgfiZIBvh/IAUgWIA2AMQBAARA1AqIgIASQggAngoAdIgSAOQBRB0AjCNQAYBhA5BSQAhAvAqApIAIAJQgBAqgfAdIgIAHIgLAJQh+AGhqBCQgaAPgXAAQgdAAgXgZgAFJNmQgWgdgbgVQhahIhJhaQhOhhhIhkQhRhvBTh2IAJgiQALgFALgDQBsgcBsAgIgYAqIhkCaQAiADAZAdQBbBqA2CFQAWA3AxAgQBiA/BYBCQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgBADQgBADgDADIgIAGQgFgRgQgJIgHgEIAHAEQAQAJAFARQAAANgJAJQgIAKgLAAQgGgSgPgKIgJgGIAJAGQAPAKAGASIABAKQgIAMgRABQAAgNgIgJQgJgJgNAAQANAAAJAJQAIAJAAANIgCAKQgBAEgDAEQgDADgEACIgEACIgGABIgEABQhQglg2hGgAoqhtIAIAAIgHAGIgBgGgAhxiRIgBgDIiUjOQAugBAZgSIAegVIAAgBQB5gRBbhLQBcB6DMA8Qg9Buh7AuQg1AVg6AIQgRABgRAAQhCAAhBgagAALiaQAJgBAFgJIAAAAIAAgBQgMADgJAHIAEAAIACABIAAAAIABAAgAAKiaIgCgBIgEAAQAJgHAMgDIAAABIAAAAQgFAJgJABIgBAAIAAAAgAAEibIAAAAgAkwmaIAAgBIABABIgBAAgAlKmlIAAABIgBAAIABgBgAlSozQgYgggegcIABgDIgCAAIhHgZQgchCgRhGQggiGB2hCIgBgCQAzgXAxAYIAJAFQgNAJgHALIgIAPIAIgPQAHgLANgJIAjAZQgHAMgJALQgGAJgIAHIADgiIgDAiIgBABQAJA7AygFQAKgCAJAGIAFAEIgCAIQAlA0gVBAIgJAWIgPArQBcBEguBZQgDAHgIAAIgUABQhGAAgtg9gAlKplQAlAAAfgVIAAgBIABAAIABgBIABgBQAQgMAFgSQgFASgQAMIgBABIgBABIgBAAIAAABQgfAVglAAIAAAAIAAAAQgcAAgggNIgBAAIABAAQAgANAcAAIAAAAIAAAAgAmkrfQgLgKAAgMQAAgKAGgKQgGAKAAAKQAAAMALAKgAlfsFQgPAFgKANIgGALIAGgLQAKgNAPgFIABgBQAHgCAIAAIAAAAIAAAAQAIAAAIADIABAAIABABIABAAIABAAQAXALAaAAIABAAIABAAIAAAAIAAAAQAPAAAGgIQgGAIgPAAIAAAAIAAAAIgBAAIgBAAQgaAAgXgLIgBAAIgBAAIgBgBIgBAAQgIgDgIAAIAAAAIAAAAQgIAAgHACIgBABgAkEstIAegjgAm6tmQABAJAEAIQAJATAZAJQAbAJAZgJQAXgJgEgdQgFgbgPgOQgFgEgFgBIgDACIgFgCQgMgEgBgOQABAOAMAEIAFACIgMADIgEABQgFgBgEgDQgJgFgIgMQAIAMAJAFQAEADAFABIgRACIgGgFIgDgBQgMgIgDgRQADARAMAIIADABIAGAFQgNABgMgDIgEgFIgDgEQgIgKgFgOQAFAOAIAKIADAEIAEAFIgHgBIgDgBQgOgFgJgIQALATADAdgAnIuWQgIgHgEgKQAEAKAIAHgAmfu0IAJACQAMADAJAFQgJgFgMgDIgJgCQgVgFgXgBQAXABAVAFgAifqRQgQgiAIglIBGgSIAAgDIBDgHIAAAEIAAAAQAHAKAHAlQAOBMAGAJQgHAvAZAvQh9gOg4h1gAk2uXg");
	this.shape_13.setTransform(261.8,-101.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#339966").s().p("ADeG4QhsgghtAdQgKACgLAFIgiARIAigRIgJAiQgLAAgHgFQgHgFAAgHIAAAAIgBgDQAPgmAIgnIABgNIABgBIAAgDIgFAFIgDAEIABABIgbAcQgnAsg1ASIghgXIAhAXQgSAEgQgGIgIgEIAJgRQg1grhAgRIg2gMIgLgBQgXgGgTgRQArgqAzgmQBdhHBVhMIAMBMIgMhMIADgCIAAgBIAZgRIACACQBRAiBUgJQA6gIA1gUQB7guA9huQBVAsgIBiQgGBVgnBNQg3BsgzBvIgFACIgJgDIAFAEIhIAPgAEJHPIgrgXgAACEhQgFAogXAjQAXgjAFgoIADgaIgDAagAhsCYIgagkgAiYHQgAmVFmIgEgNQATARAXAGIALABIgUAXQgVgKgIgYgAmZFZIAAAAgAlNiNQgDgEgBgFQgRg5gbg2IgBgCQgIgQgCgPQgagpAAgGQAAgGgMgNIAsgRQAeAcAYAhQA0BFBTgKQAIAAADgGQAuhZhdhFIAQgqIA4gSQgIAkAQAiQA4B2B9ANIAdAoQhbBKh5ASIABAAIgBAAIgeAVQgZATguAAQgvgGgegbgAkqikIABABIgBgBgAlFitIABAAIAAgBIgBABgAmIkmQACAPAIAQIABACQgLgTAAgOg");
	this.shape_14.setTransform(261.2,-126.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120.2,-207.9,198.2,207.4);


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
		var bgm = createjs.Sound.play('bgmIR',{loop:-1});
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
		
		 window.open ("reg_Scene2.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("reg_Scene1a.html","_self");
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


(lib.GirlsPlayBaseball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Glove
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("AAZA8QhYgKAAgSQAAgFASgEQAMgDAEgDQAIAFAUAAIABgCQgBgJgbABIgCAAQgPgOAAgHQAAgGAQgGQAIgDAEgDIASAOIADgCQgCgFgKgHIgFgDIAAgCQgEgHAAgGQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAIAQAAQAEADADAHQACADAEAAQAMAUACAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQgBgGgFgIIgGgHQACgVABAAQAIAAAiBIQAAAOgJAHQgOALgHAPgAAQAjIAAAIQABAJAMgBQAFABABgTQAQgPABgDQADgJgPAAQgYABAAAcg");
	this.shape.setTransform(30.3,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah+AhQAAgPAcgGQgKgIAAgLQAAgKAFgDQADgDAXgKQgDgFAAgGQAAgOATAAQAFAAAOAEQAFgOAIAAQAUAAAeBTIAAABQARgCApAAQgNgNADgSQAFALANAMQAOAOAAABIgBAGIgLAAIhGgCQgCAFgFAGIgUAaQAWAAA4AHQAYADARgNQACgDAAgDIAAgMIgCg7QAAgHgMgVQgFgJgSgEIgFgBIgHABIABgDQgIgEgCgFQADgDAKAAQArAAAKA4QAGAbgEAgQAAADAEAGQACAHgHAFQgWANhxAAQhxAAAAgqgAhiAZQgSAEAAAFQAAASBaAKIAIAAQAIgPANgLQAIgHAAgOQghhIgIAAQgBAAgBAVIAFAHQAGAIAAAGQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgCAAgMgUQgEAAgCgDQgCgHgFgDIgRAAQAAAAgBABQAAABAAAAQgBABAAAAQAAABAAAAQAAAGAEAHIAAACIAGADQALAHABAFIgDACIgTgOQgEADgIADQgQAGAAAGQAAAHAPAOIADAAQAagBADAJIgDACQgUAAgIgFQgEADgMADgAgkAtIAAgIQAAgcAYgBQAPAAgDAJQAAADgQAPQgBATgGgBQgLABgCgJgAgcAaQgDAHAAAEQAAAKAHAAQAAgJAIgJQAKgJABgDIgMgDQgHAAgEAMg");
	this.shape_1.setTransform(35.6,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AAeBAQg4gGgWAAIAVgaQAEgGADgGIBFADIAKgBIACgFQAAgBgPgOQgMgMgGgLQgGgNgDgBQgDAAAIgcIAHgBIAEABQATAEAFAIQAMAWAAAGIACA8IAAALQAAAEgDACQgNALgTAAIgIgBgAhIAhQAAgEADgIQAEgLAHAAIAMACQgBAEgKAJQgIAIAAAKQgHgBAAgJg");
	this.shape_2.setTransform(39.6,21.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC6600").s().p("AAPA5QhTghAFgRQABgFATABQAMABAFgCQAGAGATAFIACgBQAAgJgZgGIgCAAQgLgSACgHQACgGARgBIANgDIAOASIACgBQABgFgJgJIgFgFIABgCQgBgIAAgFQABAAAAgBQAAgBAAAAQABAAAAgBQABAAAAgBIARAFQADAEABAHQABADAEACQAGAXACAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABgGgDgKIgDgIQAHgUABAAQAHACAOBNIAAACQgDANgKAFIgCABIAAAAQgKAEgHAGIgJAJgAAMAfIgCAIQgBAIAMADQAFACAGgSQATgKABgDQAGgIgQgEIgIgBQgQAAgGAXg");
	this.shape_3.setTransform(15.4,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9966").s().p("Ag5AnIgggMIgfgLIgJgDIANgJIAMgIIACgBQAGgFAEgFIANAFIAWAGQBaAcBJglIABABQACAEgCgEIAAAAIgBgBQgGgMgCgBQgDAAAIgcIAGgBIAFABQATAEAFAIQALAWgCAQQgDAQhAAbQgeARgiAAQgiAAgngRgAiRgPQABgFAFgGQAGgKAHACIALAFQgCADgMAHQgKAFgCAKQgHgDADgIg");
	this.shape_4.setTransform(31.7,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBNQgygYgRAAQgRgBgHgCIgBAAQhtgdALgoQAEgOAdABQgIgKADgLQADgKAFgDQAEgBAZgDQgCgHACgFQAEgOASAFQAFACAMAHQAIgMAIACQAUAFAIBXIAAABIgBABIAzAOQAvANBhgRQhJAmhbgdIgVgHIgOgEQgDAFgGAEIgCABIgMAJIgNAKIAJADIAfAKIAfAMQBOAjA8gjQBAgbACgQQADgQgMgVQgFgJgSgEIgFgBIgHACIABgEQgIgDgCgGQADgDAKAAQArAAAKA3QACAKghAeQg3AegjAKQgKACgLAAQgcAAgjgQgAi7gPQgFAQBUAhIAIACIAIgIQAIgGAJgEIABAAIABgBQALgFADgMIAAgCQgOhOgIgCQAAAAgHAUIADAHQADALgBAFQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgCgBgGgXQgEgBgBgEQgBgGgDgFIgRgEQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAABQgBAFACAIIgBABIAFAFQAJAJgBAGIgDABIgPgSIgNACQgRACgBAGQgCAGAKATIADAAQAaAHAAAJIgDABQgTgFgHgGQgEABgNAAIgFAAQgNAAgBAEgAhnAbQgLgDAAgIIADgJQAHgaAXAGQAQAEgHAIQAAABgUALQgFAQgFAAIgBAAgAhlgBQgEAGgCAEQgCAJAGADQADgKAKgGQAMgFACgDIgLgGIgCAAQgGAAgGAIg");
	this.shape_5.setTransform(27.9,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC6600").s().p("AAIA5QhMgwAHgPQACgEASAEQANADAEgBQAGAGASAIIACAAQABgJgXgKIgDgBQgHgUADgGQADgGARACIAMAAIAMAUIADgBQABgFgHgKIgEgGIABgBQAAgJACgEQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAQAHQACAFAAAGQAAAEAEACQACAYACAAQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAgBQACgFgBgLIgCgIQAKgSABAAQAHAEAABOIAAABQgGANgKADIgCAAIgBAAQgKADgIAFIgKAGgAAJAeIgEAIQgBAIAKAFQAFACAJgRQAVgGABgDQAHgGgOgHQgGgDgGAAQgNAAgJATg");
	this.shape_6.setTransform(10.2,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC9966").s().p("AhoAKIgMgIIgcgPIgJgEIAOgHIAOgHIACgBQAGgDAFgEIAIAEQAuAVAnAbQBcAOBegFIgJAmQglAGgnAAQhkAAhWg4gAikgxQACgEAGgGQAIgIAGADIAKAHQgCADgNAEQgLAEgEAJQgGgEAEgIg");
	this.shape_7.setTransform(28,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABRBvQg8gKgXgMQgdgFgWgUIgNgKQgYgPgLgCQgRgEgGgDIgBAAQhmgvASgmQAGgNAcAGQgGgMAFgKQAEgKAGgBQAEgBAZABQAAgGACgFQAGgNARAIQAFADALAJQAKgLAIAEQARAIgHBYIAAABIgBABIAqAaQAnAbA1AFQA1AGAdgEQAdgDAXAAQAIACAFAGIABAPQAAAPgIANIAFAHQgoAIglAAQgbAAgZgEgAhVAGIgCAAIgOAHIgOAHIAJAFIAcAPIAMAIQBWA4BkAAQAoAAAlgGIAIglQheAEhcgOQgngcgugVIgIgDQgEADgHAEgAjJgyQgHAQBMAuIAIAEIAKgHQAIgEAKgDIAAAAIACgBQALgBAGgNIAAgCQAAhPgHgDQgBAAgKASIABAIQACALgCAFQgBAAAAAAQAAABAAAAQgBAAAAgBQgBAAAAAAQgCgBgCgXQgEgDAAgDQAAgHgCgFIgQgHQgBABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgDAFABAJIgBABIAEAFQAHALgCAFIgCABIgMgUIgNAAQgRgCgDAGQgDAGAHAUIADABQAYALgCAJIgCAAQgTgJgFgHQgFABgMgCIgNgCQgGAAgBACgAh9AGQgKgFABgHIAEgHQAMgaAWAKQAOAHgHAGQgCACgUAHQgIAOgFAAIgBgBgAh2gUQgGAFgCAEQgEAIAGADQAEgIALgEQANgEADgDIgKgHIgEgBQgFAAgGAHg");
	this.shape_8.setTransform(24.2,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},79).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).wait(19));

	// Ball
	this.instance = new lib.mainmenubaseballball();
	this.instance.parent = this;
	this.instance.setTransform(24.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({x:19.4,y:16.9},0).to({guide:{path:[19.4,16.9,7.9,11.2,-5,8.6,-8.8,7.7,-12.6,6.9,-13.9,6.9,-15.2,6.9,-25.5,23.9,-47.4,12.4,-56.6,7.7,-64.9,16.1,-77,28.3,-90.6,13.1,-93.4,10.2,-97.8,9.7,-105.2,9,-112.3,10.4,-113.1,11.6,-114,12.8,-123.6,10.2,-133.3,7.6,-148.3,29.9,-168.4,17.9,-177.6,12.4,-185.6,18.4,-187.9,20.1,-190.9,21.4,-209.4,29.4,-223.8,15,-233.3,5.8,-243.7,18.3,-252.8,29.1,-263.5,17.6,-276,10.7,-285,22.3,-286.4,24.1,-288.7,23.1,-310.5,13.8,-332.1,21.4,-332.1,21.5,-332.2,21.5,-335.8,22.1,-338.8,19.8,-339.2,19.5,-339.6,19.2]}},50).to({guide:{path:[-339.6,19.2,-339.6,19.2,-339.6,19.2,-336,14.2,-332.4,9.3,-325.9,0.3,-282.3,-28.3,-242.1,-54.9,-154.9,-53.9]}},10).to({guide:{path:[-154.8,-53.9,-147.6,-53.8,-140.1,-53.5,-52.1,-50.4,13.2,4.7]}},15).wait(16));

	// Batter
	this.instance_1 = new lib.animCarmen_ready();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-358.3,29.1,0.265,0.265,0,0,0,219.5,-104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// B
	this.instance_2 = new lib.BuffyPitch();
	this.instance_2.parent = this;
	this.instance_2.setTransform(35,25.4,1.148,1.148,0,0,0,14.8,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// hand
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC9966").s().p("AgLBDIgCgKQgLgRgBgDIgCgoIACgjQAAgOADgEQANgSAEAAQAMAAASAgQACAFAAAeQAGBSgfAAQgKAAgDgIg");
	this.shape_9.setTransform(26.2,24);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQBKQAAgKgBgDQgNgNAAgJIgCgqQgBgVADgTQAHglAbAAIAGADQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQAUAVAEANQABAHAAAaQAIBYgmAAQgQAAgCgHgAgWg4QgDAEAAAOIgCAjIACApQABACALARIACAKQADAJAKAAQAfAAgGhSQAAgegCgFQgSghgMAAQgEAAgNASg");
	this.shape_10.setTransform(26.2,24);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC9966").s().p("ACTBDQh4gegngOIgIgDQgXgKgUgTQgPgPhRgMIAAgBIAEgDIgBgBQAegCgCACIAJACIACgBIACgCIgNgSQgFgFgGgBIAHAAQAIAEAfAWQAZARAaAJIAeAHIAWAEIAYAKIA1AWIACAAIAZAKQAiAOAMAOg");
	this.shape_11.setTransform(15.7,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ACeBKQgYAAhLgXQgsgNgZgJIgQgHQgPgGgdgYQgrgMgYgIQgYgIAAABQgBABAAAAQAAAAAAgBQAAAAAAAAQAAgBAAgBIAAgEIACgCQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAbgLgBgBQgEgFgMAAQgWgCAAgFQAAgGAWAAQAYAAAIAHIAdAYQAeASAUAFIAZAFQA9AOAkAWQAWABAfAUQAdATAAAGQAAAGgKAAIgBAAgAiagpIACABIgEADIAAACQBQALAPAPQAVATAWAKIAIADQAnAPB4AdIANAAQgMgOgigOIgZgKIgCAAIg0gWIgYgKIgXgEIgdgHQgbgIgZgSQgegWgJgEIgGAAQAGABAFAFIAMASIgCACIgCABIgJgCQABgBgHAAIgWABg");
	this.shape_12.setTransform(15.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},10).to({state:[{t:this.shape_10},{t:this.shape_9}]},6).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384.4,-5.6,435.9,62.1);


(lib.contentregularandirregular1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{restart:95});

	// timeline functions:
	this.frame_120 = function() {
		/* _root.v3b.start();*/
	}
	this.frame_135 = function() {
		/* _root.v1b.start();*/
	}
	this.frame_166 = function() {
		/* _root.v3b.start();*/
	}
	this.frame_180 = function() {
		/* _root.v1b.start();*/
	}
	this.frame_229 = function() {
		/* _root.v3b.start();*/
	}
	this.frame_252 = function() {
		/* _root.v1b.start();*/
	}
	this.frame_291 = function() {
		this.gotoAndPlay("restart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(15).call(this.frame_135).wait(31).call(this.frame_166).wait(14).call(this.frame_180).wait(49).call(this.frame_229).wait(23).call(this.frame_252).wait(39).call(this.frame_291).wait(1));

	// Layer 19
	this.text = new cjs.Text("have played", "14px 'Comic Sans MS'", "#FF0000");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-17.7,71.7);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(229).to({_off:false},0).to({x:141.5,y:27.7},23).wait(40));

	// Layer 18
	this.text_1 = new cjs.Text("played", "14px 'Comic Sans MS'", "#FF0000");
	this.text_1.lineHeight = 22;
	this.text_1.parent = this;
	this.text_1.setTransform(-33.7,78.7);

	this.instance = new lib.Tween18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-12.5,88.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:-12.5,y:88.6}},{t:this.text_1,p:{x:-33.7,y:78.7}}]},166).to({state:[{t:this.instance,p:{x:77.5,y:39.2}},{t:this.text_1,p:{x:56.3,y:29.3}}]},14).wait(112));

	// Layer 17
	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21,89.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).to({x:-7,y:37.4},15).wait(157));

	// Layer 14
	this.instance_2 = new lib.s3_s1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(66.8,91,1,1,0,0,0,-83,-37.7);

	this.instance_3 = new lib.s3_s2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(79.9,83,1,1,0,0,0,-83.9,-37.7);

	this.instance_4 = new lib.s3_s3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(171.7,82.8,1,1,0,0,0,6.1,-37.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},109).to({state:[{t:this.instance_3}]},41).to({state:[{t:this.instance_4}]},60).wait(82));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADAAACACQACADAAADQAAAIgOAGQgMAGgLAAQgRgBgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape.setTransform(232.7,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQgBgIAIABQAHgBAAAIIAAAdIgBAbIgBAmIgBASQgBAJgFAAQgIAAAAgJg");
	this.shape_1.setTransform(226,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_2.setTransform(219.6,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQACgCAEAAQACAAACACQACADABADIgCASIAAASIAAAOIAAAOQAAADgCACQgCADgCAAQgDAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQACADAAADQAAAEgCADQgDACgDAAQgDAAgDgCg");
	this.shape_3.setTransform(213.2,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAiQgMgKAAgRQAAgOALgSQAMgSANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCACgDABQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgEgDQgEgDgLgBQgHAAgHAPQgHANAAAIQAAALAHAGQAGAFAJAAQAFAAAFgDIAJgEIAEgBQADAAACACQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_4.setTransform(206.7,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQACADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQACADABADQgBAEgCADQgDACgDAAQgDAAgDgCg");
	this.shape_5.setTransform(200.5,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgBgtIgSgBQgHgBAAgHQAAgDACgCQADgCACgBIARACIAAgLIAAgKQAAgDABgCQADgCADAAQAGAAACAMIAAAHIAAAEIAAAFIALgCIAKABQAFACAAAFQAAAEgDACQgCACgDAAIgEAAIgDAAIgLABIACAtIAAAEIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_6.setTransform(194.3,13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_7.setTransform(186.9,15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKABgUQgBgRANgOQANgNASAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJABAGIAGAOIABAEIAAABQAAADgBACQgCACgEAAQgBAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAFgDIAIgGQgDgUAAgKIABgHIABgJIgFgCIgDAAQgMAAgIAJg");
	this.shape_8.setTransform(178.7,15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_9.setTransform(170.5,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgtIgRgBQgHgBAAgHQAAgDACgCQACgCADgBIARACIgBgLIAAgKQAAgDACgCQADgCADAAQAGAAACAMIAAAHIAAAEIAAAFIAKgCIALABQAFACAAAFQAAAEgCACQgDACgDAAIgDAAIgFAAIgKABIABAtIAAAEIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_10.setTransform(157.7,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_11.setTransform(149.8,14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgIgKQgJgKAAgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_12.setTransform(142,15.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_13.setTransform(133.8,13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEA3QgCgCAAgDIAAgJIAAgJIgCgtIgRgBQgHgBAAgHQAAgDACgCQADgCADgBIAQACIgBgLIAAgKQAAgDADgCQACgCADAAQAGAAABAMIAAAHIAAAEIAAAFIALgCIALABQAFACAAAFQAAAEgCACQgCACgEAAIgDAAIgFAAIgKABIABAtIAAAEIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_14.setTransform(92.2,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_15.setTransform(84.3,14.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQAAADgDACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAFAGQAEAHAJAAQAGAAAFgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_16.setTransform(76.5,15.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_17.setTransform(68.3,13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgtIgRgBQgHgBAAgHQAAgDACgCQADgCACgBIARACIgBgLIAAgKQAAgDACgCQADgCADAAQAGAAABAMIAAAHIAAAEIAAAFIALgCIALABQAFACAAAFQAAAEgCACQgCACgEAAIgDAAIgFAAIgKABIABAtIAAAEIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_18.setTransform(21.9,13.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQABgRgHAAQgJAAgGAKQgIAKgDAOIgBAHIgBAIIABAHIAAAHQAAAEgCACQgCACgDAAQgEAAgCgCQgDgCABgEIgBgHIAAgHIABgWIABgWIAAgHIAAgIQAAgDABgCQADgCADgBQAIAAAAALIABAJQANgSAMAAQAMAAAGAMQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCADQgCABgDAAQgHAAgBgHg");
	this.shape_19.setTransform(14.1,15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADAAACACQACADAAADQAAAIgOAGQgMAGgLAAQgRgBgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_20.setTransform(5.5,15.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_21.setTransform(-3.2,14.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADAAACACQACADAAADQAAAIgOAGQgMAGgLAAQgRgBgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_22.setTransform(-11.1,15.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_23.setTransform(-19.2,15.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_24.setTransform(-27.4,13);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgEAlQgCgCAAgEIAAgEIgBgEQAAgEADgCQACgCACAAQAJAAAAAQQAAAEgDACQgCACgDAAQgCAAgDgCgAgFgTQgDgCAAgEIAAgDIAAgDQAAgDACgCQADgCADAAQAHAAAAANQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_25.setTransform(-43.7,14.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgkA8QgDgDAAgEIAAgWIACgfIABghIABgVQABgEACgBQAKgDAOAAQANAAAMAJQAPALAAAQQAAAUgQAKQAMAFAGAGQAGAGAAAIQAAAJgLAJQgHAGgIADQgQAHgbAAQgEAAgDgDgAgXAfIAAAQQAUgBAMgFQAFgCAFgEQAFgEAAgCQAAgEgKgFQgHgDgHgCIgIgBIgDAAIgDAAIgJgBIAAASgAgUguIAAAOIgCAeIAMABQALgBAHgHQAIgHAAgKQAAgIgIgGQgIgHgIAAIgMABg");
	this.shape_26.setTransform(-50.7,13.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgnA7QgCgCAAgEIgBgSIAAgSIABgVIACgVIgBgMIgBgMQABgEACgDQADgFAFABIATABQAKACAHADQAfARABAYQgBAMgKAJQgJAHgNAEQAYANAMAOQACADABACQAAAEgDACQgCADgDAAQgEAAgCgDQgagZgegJIAAAPIABAPQAAAEgCACQgDACgDAAQgDAAgDgCgAgYgiIAAAJIAAAQIgCAOIADAAIADABQAUAAAKgGQAEgBAEgEQAEgEAAgEQAAgKgMgKQgLgIgNgCIgLgBg");
	this.shape_27.setTransform(-61,13.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgiA9QgHgIAAgZIAAgLIABgMIgBgFQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBABAAIABghIgBgJIAAgIQgBgKAIAAQADAAADACIARgDIAPgBQATgBALAFQAGADAAAFQAAADgCACQgDADgDAAIgCAAQgNgEgNgBIgNACIgQAEIABAIIgCAdIAhgDIATgBQADAAADACQACACAAAEQAAAGgHAAIgTADIgjACIAAALIgBAJQABARACADQACADALAAIANAAIAOAAIAFgBIAEgBQAJAAAAAIQAAAHgHABQgHABgXAAQgYAAgIgFg");
	this.shape_28.setTransform(-70.9,13.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgOA5QgJgYgLgrIgHgWQgEgQAAgFQAAgEADgCQACgCADAAQAFAAACAGIAEAOIAHAaQAHAdAHAVIABgCIAUg3IAGgUQAFgLAFgGQADgDADAAQADAAACACQADADAAADIgBAFQgGAHgCAIIgHARIgUA4QgEAKgFAJQgBAFgFAAQgGAAgDgGg");
	this.shape_29.setTransform(-80.9,13.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_30.setTransform(-95,15.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgSAAgIgKQgIgKAAgUQAAgRAMgOQANgNASAAQAGAAAJADQALAFgBAGIgBAEIgCAJIAAARQAAAJABAGIAGAOIABAEIAAABQAAADgBACQgDACgDAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_31.setTransform(-103.2,15.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgIA4IABgcIABgcIAAgbIAAgdQAAgIAHABQAIgBAAAIIAAAdIgBAbIgBAmIAAASQgCAJgFAAQgIAAAAgJg");
	this.shape_32.setTransform(-109.5,12.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AASAlQgKAFgMABQgKAAgHgFQgHgFgCgKQgDgUAAgQQAAgKADgOQABgHAGAAQADAAADACQACACAAAEIgBALIgBAMIABAWQAAAJACAFIAFADIAFABQAKgBALgDIAAgPIAAgPQAAgRABgMQABgHAHAAQADgBADADQACACAAAEIgCAdIAAAQIABARIAAAFIAAAFQAAADgCADQgCACgEAAQgGAAgBgIg");
	this.shape_33.setTransform(-115.8,15.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgaA8QgKgBAAgHQAAgGAHAAIAJABQAHABAHAAQAOAAAGgPQAEgJAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgJQgJgLAAgNQAAgWAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIgBAAAKIgBAOIgDAQIgBAZQgBAPgDAKQgDANgIAGQgJAHgRAAQgKAAgHgCgAgOgnQgHAKAAAOQAAAMAEAEQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOAAgIAKg");
	this.shape_34.setTransform(-124.4,17.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAAMQAAAHgJAGQgEAEgNAEIgcAOQAEAHAGADQAHADAIAAQAFAAAHgCQAJgCADgFQADgEADAAQADAAACACQACADAAADQAAAIgOAGQgMAGgLAAQgRgBgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_35.setTransform(-132.7,15.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgnA7QgCgCAAgEIAAgSIgBgSIABgVIACgVIgBgMIgBgMQABgEACgDQADgFAFABIATABQALACAGADQAfARABAYQgBAMgKAJQgJAHgNAEQAYANAMAOQACADAAACQAAAEgCACQgDADgCAAQgDAAgDgDQgagZgegJIAAAPIABAPQAAAEgDACQgCACgDAAQgDAAgDgCgAgYgiIABAJIgBAQIgCAOIADAAIADABQAUAAAKgGQAEgBAEgEQAEgEAAgEQAAgKgMgKQgLgIgNgCIgLgBg");
	this.shape_36.setTransform(-142.1,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},95).wait(197));

	// def
	this.instance_5 = new lib.RegularVerbsDef();
	this.instance_5.parent = this;
	this.instance_5.setTransform(47.4,28.1,1,1,0,0,0,239,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(86).to({x:45.3},0).to({x:47.5,y:-51.1},9).wait(197));

	// divers
	this.instance_6 = new lib.GirlsPlayBaseball();
	this.instance_6.parent = this;
	this.instance_6.setTransform(237.9,120.3,1,1,0,0,0,24.9,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(292));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.6,-1.9,478,151.7);


// stage content:
(lib.reg_Scene1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1b:0,scene1b_repeat:286});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_3 = function() {
		playSound("regularverbs1");
	}
	this.frame_85 = function() {
		playSound("bubble_rise");
	}
	this.frame_102 = function() {
		playSound("present");
	}
	this.frame_117 = function() {
		playSound("playbaseballgirlseveryday");
	}
	this.frame_138 = function() {
		playSound("bell_chord_1");
	}
	this.frame_157 = function() {
		playSound("past");
	}
	this.frame_172 = function() {
		playSound("playedgirlsagreatgametoday");
	}
	this.frame_183 = function() {
		playSound("bell_chord_2");
	}
	this.frame_213 = function() {
		playSound("pastparticiple");
	}
	this.frame_230 = function() {
		playSound("haveplayedbaseballgirls");
	}
	this.frame_255 = function() {
		playSound("bell_chord_3");
	}
	this.frame_285 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_297 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(82).call(this.frame_85).wait(17).call(this.frame_102).wait(15).call(this.frame_117).wait(21).call(this.frame_138).wait(19).call(this.frame_157).wait(15).call(this.frame_172).wait(11).call(this.frame_183).wait(30).call(this.frame_213).wait(17).call(this.frame_230).wait(25).call(this.frame_255).wait(30).call(this.frame_285).wait(12).call(this.frame_297).wait(1));

	// content
	this.instance = new lib.contentregularandirregular1b();
	this.instance.parent = this;
	this.instance.setTransform(459,172,1,1,0,0,0,230.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(196.6,35.3,0.309,0.309);

	this.instance_2 = new lib.Background();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,196.3,1,1.089);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.UI}]}).wait(298));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '8EEC88C49346CB47A004B5C14AB2BBFD',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/playedgirlsagreatgametoday.mp3", id:"playedgirlsagreatgametoday"},
		{src:"sounds/bgmIR.mp3", id:"bgmIR"},
		{src:"sounds/bell_chord_1.mp3", id:"bell_chord_1"},
		{src:"sounds/bell_chord_2.mp3", id:"bell_chord_2"},
		{src:"sounds/bell_chord_3.mp3", id:"bell_chord_3"},
		{src:"sounds/boo.mp3", id:"boo"},
		{src:"sounds/bubble_rise.mp3", id:"bubble_rise"},
		{src:"sounds/compete_copy.mp3", id:"compete_copy"},
		{src:"sounds/competed_copy.mp3", id:"competed_copy"},
		{src:"sounds/dive.mp3", id:"dive"},
		{src:"sounds/doveordived.mp3", id:"doveordived"},
		{src:"sounds/flew.mp3", id:"flew"},
		{src:"sounds/fly.mp3", id:"fly"},
		{src:"sounds/haveplayedbaseballgirls.mp3", id:"haveplayedbaseballgirls"},
		{src:"sounds/havedived.mp3", id:"havedived"},
		{src:"sounds/haveflown.mp3", id:"haveflown"},
		{src:"sounds/irregularverbsformthepasttense.mp3", id:"irregularverbsformthepasttense"},
		{src:"sounds/laymeanstoplaceortoput.mp3", id:"laymeanstoplaceortoput"},
		{src:"sounds/liemeanstoreclineortorest.mp3", id:"liemeanstoreclineortorest"},
		{src:"sounds/past.mp3", id:"past"},
		{src:"sounds/pastparticiple.mp3", id:"pastparticiple"},
		{src:"sounds/perc_techno.mp3", id:"perc_techno"},
		{src:"sounds/playbaseballgirlseveryday.mp3", id:"playbaseballgirlseveryday"},
		{src:"sounds/present.mp3", id:"present"},
		{src:"sounds/regularverbs1.mp3", id:"regularverbs1"},
		{src:"sounds/regularandirregularverbs.mp3", id:"regularandirregularverbs"},
		{src:"sounds/regularverbsformtheirpasttense.mp3", id:"regularverbsformtheirpasttense"},
		{src:"sounds/sound_over1.mp3", id:"sound_over1"},
		{src:"sounds/TherearemanymoreIrregularVerbsyoushouldknow.mp3", id:"TherearemanymoreIrregularVerbsyoushouldknow"},
		{src:"sounds/twotroublesomeverbsarelievslay.mp3", id:"twotroublesomeverbsarelievslay"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"},
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
an.compositions['8EEC88C49346CB47A004B5C14AB2BBFD'] = {
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